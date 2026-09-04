import { readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PUBLIC_ROUTES,
  PUBLIC_ROUTES_BY_KEY,
  PUBLIC_ROUTE_LOCALES,
  VACATION_RENTAL_ROUTE_KEYS,
  buildLegacyPublicRoutePath,
  buildPublicRoutePath,
  localizePublicPath
} from '../src/lib/publicRouteManifest.mjs';
import { parseAstroRedirects } from '../src/lib/redirectInfrastructure.mjs';

/**
 * AMARA public route policy gate.
 *
 * The route manifest is the single declaration of public pages. This gate
 * verifies that the manifest is well-formed, that no retired route wrapper
 * has crept back into `src/pages`, that every authored route reference names
 * a real route, and that the redirect infrastructure covers the migration
 * from the flat English routes without chains, loops or collisions.
 */

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));
const sourceExtensions = new Set(['.astro', '.ts', '.js', '.mjs']);
const nonDefaultLocalePrefixes = ['de', 'en', 'nl', 'sv'];
const CLOUDFLARE_STATIC_REDIRECT_LIMIT = 2000;
const violations = [];

/**
 * The only route files that may exist outside the manifest: the two catch-all
 * pages, the 404, the legacy guide redirects and the private AMARA Experience
 * family, whose paths the Cloudflare Functions middleware is bound to.
 */
const approvedExplicitRouteFiles = new Set([
  'src/pages/404.astro',
  'src/pages/[...path].astro',
  'src/pages/[guideSlug].astro',
  'src/pages/[lang]/[...path].astro',
  'src/pages/[lang]/[guideSlug].astro',
  'src/pages/amara-experience/access.astro',
  'src/pages/amara-experience/guide.astro',
  'src/pages/amara-experience/guide/[guideSlug].astro',
  'src/pages/[lang]/amara-experience/access.astro',
  'src/pages/[lang]/amara-experience/guide.astro',
  'src/pages/[lang]/amara-experience/guide/[guideSlug].astro'
]);

const approvedBookingRedirects = new Map([
  ['/en/book/', 'en'],
  ['/de/book/', 'de'],
  ['/es/book/', 'es'],
  ['/nl/book/', 'nl'],
  ['/sv/book/', 'sv'],
  ['/de/buchen/', 'de'],
  ['/es/reservar/', 'es'],
  ['/nl/boeken/', 'nl'],
  ['/sv/boka/', 'sv']
]);

const approvedPropertyAliasRedirects = new Map([
  ['/en/la-amara-farah-romantic-double-retreat', '/en/la-amara-farah'],
  ['/en/la-amara-lounis-historic-romantic-stay', '/en/la-amara-lounis'],
  ['/nl/la-amara-lounis-historic-romantic-stay', '/nl/la-amara-lounis'],
  ['/sv/la-amara-lounis-casa-rural-frigiliana', '/sv/la-amara-lounis'],
  [
    '/en/la-amara-family-surf-with-oceanview-and-pool',
    '/en/la-amara-family-and-surf'
  ],
  [
    '/sv/amara-family-surf-with-oceanview-and-pool',
    '/sv/la-amara-family-and-surf'
  ]
]);

function walk(relativeDirectory, options = {}) {
  const directory = join(workspaceRoot, relativeDirectory);
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relativePath = join(relativeDirectory, entry.name).replaceAll('\\', '/');

    if (entry.isDirectory()) {
      if (options.skipUnderscore && entry.name.startsWith('_')) {
        continue;
      }

      files.push(...walk(relativePath, options));
      continue;
    }

    if (entry.isFile() && sourceExtensions.has(extname(entry.name))) {
      files.push(relativePath);
    }
  }

  return files;
}

function isInternalPath(target) {
  return target.startsWith('/') && !target.startsWith('//');
}

const KEBAB_SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ROUTE_KEY = /^[a-z0-9]+(?:[-.][a-z0-9]+)*$/;

/* ---------------------------------------------------------------------------
   1. Manifest integrity
--------------------------------------------------------------------------- */

const legacySlugs = new Map();

for (const route of PUBLIC_ROUTES) {
  if (!ROUTE_KEY.test(route.key)) {
    violations.push(`Route key "${route.key}" is not lowercase dotted kebab-case.`);
  }

  if (route.legacySlug && !KEBAB_SEGMENT.test(route.legacySlug)) {
    violations.push(`Route "${route.key}" has a malformed legacy slug "${route.legacySlug}".`);
  }

  if (legacySlugs.has(route.legacySlug)) {
    violations.push(
      `Legacy slug "${route.legacySlug}" is claimed by both "${legacySlugs.get(route.legacySlug)}" and "${route.key}".`
    );
  }

  legacySlugs.set(route.legacySlug, route.key);

  const parent = route.parent ? PUBLIC_ROUTES_BY_KEY.get(route.parent) : undefined;

  for (const locale of PUBLIC_ROUTE_LOCALES) {
    const path = route.paths[locale];

    if (typeof path !== 'string') {
      violations.push(`Route "${route.key}" has no ${locale} path.`);
      continue;
    }

    if (route.key !== 'home' && !path) {
      violations.push(`Route "${route.key}" has an empty ${locale} path.`);
    }

    for (const segment of path.split('/').filter(Boolean)) {
      if (!KEBAB_SEGMENT.test(segment)) {
        violations.push(
          `Route "${route.key}" ${locale} path "${path}" contains a segment that is not lowercase ASCII kebab-case.`
        );
      }
    }

    if (parent && !route.identity && parent.paths[locale] && !path.startsWith(`${parent.paths[locale]}/`)) {
      violations.push(
        `Route "${route.key}" ${locale} path "${path}" does not sit beneath its parent "${route.parent}" (${parent.paths[locale]}).`
      );
    }
  }

  if (route.identity) {
    const distinct = new Set(PUBLIC_ROUTE_LOCALES.map((locale) => route.paths[locale]));

    if (distinct.size !== 1) {
      violations.push(`Identity route "${route.key}" must share one path across every locale.`);
    }
  }
}

/* ---------------------------------------------------------------------------
   2. Route files: the manifest owns public pages, wrappers are retired
--------------------------------------------------------------------------- */

for (const relativePath of walk('src/pages', { skipUnderscore: true })) {
  if (!relativePath.endsWith('.astro')) {
    continue;
  }

  if (!approvedExplicitRouteFiles.has(relativePath)) {
    violations.push(
      `${relativePath}: explicit route files are retired; declare public routes in src/lib/publicRouteManifest.mjs.`
    );
  }
}

for (const relativePath of approvedExplicitRouteFiles) {
  try {
    readFileSync(join(workspaceRoot, relativePath));
  } catch {
    violations.push(`Approved explicit route file "${relativePath}" is missing.`);
  }
}

/* ---------------------------------------------------------------------------
   3. Stay routes mirror the vacation rental entities
--------------------------------------------------------------------------- */

const rentalEntitySource = readFileSync(
  join(workspaceRoot, 'src/content/vacationRentalEntities.ts'),
  'utf8'
);
const rentalEntitySlugs = new Set(
  [...rentalEntitySource.matchAll(/^\s+slug:\s*['"]([^'"]+)['"],?$/gm)].map(
    (match) => match[1]
  )
);
const rentalRouteKeys = new Set(VACATION_RENTAL_ROUTE_KEYS);

for (const slug of rentalEntitySlugs) {
  if (!rentalRouteKeys.has(slug)) {
    violations.push(`Vacation rental "${slug}" has no stay route in the manifest.`);
  }
}

for (const key of rentalRouteKeys) {
  if (!rentalEntitySlugs.has(key)) {
    violations.push(`Stay route "${key}" has no matching vacation rental entity.`);
  }
}

/* ---------------------------------------------------------------------------
   4. Authored route references name real routes
--------------------------------------------------------------------------- */

const routeReferencePatterns = [
  /buildOwnedLocalizedPath\(\s*['"]([^'"]+)['"]/g,
  /buildOwnedLinks\(\s*['"]([^'"]+)['"]/g,
  /\bauthorRoute:\s*['"]([^'"]+)['"]/g,
  /\btargetRoute:\s*['"]([^'"]+)['"]/g
];

for (const relativePath of walk('src')) {
  const source = readFileSync(join(workspaceRoot, relativePath), 'utf8');

  for (const pattern of routeReferencePatterns) {
    pattern.lastIndex = 0;
    let match;

    while ((match = pattern.exec(source)) !== null) {
      if (!PUBLIC_ROUTES_BY_KEY.has(match[1])) {
        violations.push(`${relativePath}: references unknown public route "${match[1]}".`);
      }
    }
  }
}

/* ---------------------------------------------------------------------------
   5. Redirect infrastructure
--------------------------------------------------------------------------- */

function collectGuestGuideSlugs() {
  const slugs = new Set();
  const duplicateSlugs = new Set();
  const contentFiles = [
    'src/content/guestGuideFrigiliana.ts',
    'src/content/guestGuideTarifa.ts'
  ];

  for (const relativePath of contentFiles) {
    const source = readFileSync(join(workspaceRoot, relativePath), 'utf8');
    const slugPatterns = [
      /(?:^|\s)(?:["']slug["']|slug)\s*:\s*["']([^"']+)["']/gm,
      /createPlaceholderGuidePage\(\s*["']([^"']+)["']/g
    ];

    for (const pattern of slugPatterns) {
      let match;

      while ((match = pattern.exec(source)) !== null) {
        if (slugs.has(match[1])) {
          duplicateSlugs.add(match[1]);
        }

        slugs.add(match[1]);
      }
    }
  }

  for (const slug of duplicateSlugs) {
    violations.push(`Guest Guide slug "${slug}" is defined more than once.`);
  }

  if (slugs.size === 0) {
    violations.push('Unable to derive Guest Guide routes from their content sources.');
  }

  return slugs;
}

function buildCurrentRoutePaths(guestGuideSlugs) {
  const paths = new Set();

  for (const route of PUBLIC_ROUTES) {
    for (const locale of PUBLIC_ROUTE_LOCALES) {
      paths.add(buildPublicRoutePath(route.key, locale));
    }
  }

  // Legacy anonymous guide routes still render as Astro redirects to access.
  for (const slug of guestGuideSlugs) {
    paths.add(`/${slug}`);

    for (const locale of nonDefaultLocalePrefixes) {
      paths.add(`/${locale}/${slug}`);
    }
  }

  return paths;
}

export function parseCloudflareRedirects(source) {
  const rules = [];
  const parseViolations = [];

  for (const [index, rawLine] of source.split(/\r?\n/).entries()) {
    const line = rawLine.trim();

    if (!line || line.startsWith('#')) {
      continue;
    }

    const fields = line.split(/\s+/);

    if (fields.length !== 3) {
      parseViolations.push(
        `public/_redirects:${index + 1}: malformed rule "${line}"; expected source, target, and status.`
      );
      continue;
    }

    rules.push({
      source: fields[0],
      target: fields[1],
      status: fields[2],
      line: index + 1
    });
  }

  return { rules, violations: parseViolations };
}

function findRedirectLoops(rules) {
  const edges = new Map();
  const loops = new Map();

  for (const rule of rules) {
    if (isInternalPath(rule.target) && !edges.has(rule.source)) {
      edges.set(rule.source, rule.target);
    }
  }

  for (const start of edges.keys()) {
    const path = [];
    const positions = new Map();
    let current = start;

    while (edges.has(current)) {
      if (positions.has(current)) {
        const cycle = path.slice(positions.get(current));
        const rotations = cycle.map((_, index) => [
          ...cycle.slice(index),
          ...cycle.slice(0, index)
        ]);
        const canonicalCycle = rotations
          .map((rotation) => rotation.join(' -> '))
          .sort()[0];

        loops.set(canonicalCycle, [...cycle, current]);
        break;
      }

      positions.set(current, path.length);
      path.push(current);
      current = edges.get(current);
    }
  }

  return [...loops.values()];
}

export function auditRedirectInfrastructure({
  cloudflareSource,
  currentRoutePaths,
  bookingOrigin
}) {
  const cloudflareResult = parseCloudflareRedirects(cloudflareSource);
  const astroResult = parseAstroRedirects(cloudflareSource);
  const auditViolations = [
    ...cloudflareResult.violations,
    ...astroResult.violations
  ];
  const sources = new Map();

  for (const rule of cloudflareResult.rules) {
    const matches = sources.get(rule.source) ?? [];
    matches.push(rule);
    sources.set(rule.source, matches);

    if (rule.status !== '301') {
      auditViolations.push(
        `public/_redirects:${rule.line}: ${rule.source} -> ${rule.target} uses status ${rule.status}; only 301 is approved.`
      );
    }
  }

  const duplicateSources = [...sources.entries()].filter(([, rules]) => rules.length > 1);

  for (const [source, rules] of duplicateSources) {
    const conflicts = rules
      .map((rule) => `${rule.target} (line ${rule.line})`)
      .join(', ');
    auditViolations.push(`Duplicate redirect source "${source}": ${conflicts}.`);
  }

  const directChains = cloudflareResult.rules.filter(
    (rule) => isInternalPath(rule.target) && sources.has(rule.target)
  );

  for (const rule of directChains) {
    const nextRule = sources.get(rule.target)[0];
    auditViolations.push(
      `Redirect chain: ${rule.source} -> ${rule.target} -> ${nextRule.target} ` +
        `(lines ${rule.line}, ${nextRule.line}).`
    );
  }

  const loops = findRedirectLoops(cloudflareResult.rules);

  for (const loop of loops) {
    auditViolations.push(`Redirect loop: ${loop.join(' -> ')}.`);
  }

  let externalRedirectCount = 0;
  let collisionCount = 0;

  for (const rule of cloudflareResult.rules) {
    if (isInternalPath(rule.target)) {
      if (rule.target === '/es' || rule.target.startsWith('/es/')) {
        auditViolations.push(
          `Spanish canonical target "${rule.target}" must be unprefixed (source ${rule.source}, line ${rule.line}).`
        );
      }

      if (!currentRoutePaths.has(rule.target)) {
        auditViolations.push(
          `Unknown internal redirect target "${rule.target}" from ${rule.source} (line ${rule.line}).`
        );
      }
    } else {
      externalRedirectCount += 1;

      let targetUrl;

      try {
        targetUrl = new URL(rule.target);
      } catch {
        auditViolations.push(
          `Invalid external redirect target "${rule.target}" from ${rule.source} (line ${rule.line}).`
        );
        continue;
      }

      if (targetUrl.protocol !== 'https:') {
        auditViolations.push(
          `External redirect target "${rule.target}" must use HTTPS (source ${rule.source}, line ${rule.line}).`
        );
      }

      if (targetUrl.origin !== bookingOrigin) {
        auditViolations.push(
          `External redirect target "${rule.target}" is outside the approved booking origin ${bookingOrigin} ` +
            `(source ${rule.source}, line ${rule.line}).`
        );
      }
    }

    if (currentRoutePaths.has(rule.source)) {
      collisionCount += 1;
      auditViolations.push(
        `Current-route collision: redirect source "${rule.source}" shadows a generated Astro route (line ${rule.line}).`
      );
    }
  }

  if (cloudflareResult.rules.length > CLOUDFLARE_STATIC_REDIRECT_LIMIT) {
    auditViolations.push(
      `public/_redirects holds ${cloudflareResult.rules.length} rules; Cloudflare Pages allows ${CLOUDFLARE_STATIC_REDIRECT_LIMIT} static rules.`
    );
  }

  const cloudflareBySource = new Map(
    [...sources.entries()].map(([source, rules]) => [source, rules[0]])
  );

  for (const astroRule of astroResult.rules) {
    if (!isInternalPath(astroRule.target) || !currentRoutePaths.has(astroRule.target)) {
      auditViolations.push(
        `public/_redirects:${astroRule.line}: marked Astro redirect target "${astroRule.target}" is not a current canonical Astro path.`
      );
    }

    const cloudflareRule = cloudflareBySource.get(astroRule.source);

    if (!cloudflareRule) {
      auditViolations.push(
        `Marked Astro redirect ${astroRule.source} -> ${astroRule.target} is missing from the Cloudflare rule set.`
      );
    } else if (cloudflareRule.target !== astroRule.target) {
      auditViolations.push(
        `Marked Astro redirect ${astroRule.source} targets ${astroRule.target}, ` +
          `but the Cloudflare rule targets ${cloudflareRule.target}.`
      );
    }
  }

  for (const [source, language] of approvedBookingRedirects) {
    const rule = cloudflareBySource.get(source);
    const expectedTarget = `${bookingOrigin}/${language}/book/`;

    if (!rule || rule.target !== expectedTarget || rule.status !== '301') {
      auditViolations.push(
        `Booking continuity rule must be ${source} -> ${expectedTarget} 301.`
      );
    }
  }

  for (const [source, expectedTarget] of approvedPropertyAliasRedirects) {
    const rule = cloudflareBySource.get(source);

    if (!rule || rule.target !== expectedTarget || rule.status !== '301') {
      auditViolations.push(
        `Property alias must be ${source} -> ${expectedTarget} 301.`
      );
    }
  }

  // Migration coverage: every flat English route of the previous model must
  // land on its hierarchical owner in the same language, with no detour.
  let migrationRuleCount = 0;

  for (const route of PUBLIC_ROUTES) {
    for (const locale of PUBLIC_ROUTE_LOCALES) {
      const legacyPath = buildLegacyPublicRoutePath(route.key, locale);
      const currentPath = buildPublicRoutePath(route.key, locale);

      if (legacyPath === currentPath) {
        continue;
      }

      migrationRuleCount += 1;
      const rule = cloudflareBySource.get(legacyPath);

      if (!rule || rule.target !== currentPath || rule.status !== '301') {
        auditViolations.push(
          `Migration rule must be ${legacyPath} -> ${currentPath} 301 (route "${route.key}", ${locale}).`
        );
      }
    }
  }

  return {
    violations: auditViolations,
    summary: {
      cloudflareRedirectCount: cloudflareResult.rules.length,
      astroRedirectCount: astroResult.rules.length,
      externalRedirectCount,
      migrationRuleCount,
      collisionCount,
      duplicateCount: duplicateSources.length,
      chainCount: directChains.length,
      loopCount: loops.length
    }
  };
}

const guestGuideSlugs = collectGuestGuideSlugs();
const currentRoutePaths = buildCurrentRoutePaths(guestGuideSlugs);
const directBookingSource = readFileSync(
  join(workspaceRoot, 'src/lib/directBooking.ts'),
  'utf8'
);
const bookingOriginMatch = directBookingSource.match(
  /export const DIRECT_BOOKING_ORIGIN\s*=\s*['"]([^'"]+)['"]/
);

if (!bookingOriginMatch) {
  violations.push('Unable to derive DIRECT_BOOKING_ORIGIN from src/lib/directBooking.ts.');
}

const redirectAudit = auditRedirectInfrastructure({
  cloudflareSource: readFileSync(join(workspaceRoot, 'public/_redirects'), 'utf8'),
  currentRoutePaths,
  bookingOrigin: bookingOriginMatch?.[1] ?? ''
});

violations.push(...redirectAudit.violations);

if (violations.length > 0) {
  console.error('AMARA public route policy check failed.');
  console.error(
    'The route manifest, route files, authored route references and redirects must stay aligned.'
  );

  for (const violation of violations) {
    console.error(`- ${violation}`);
  }

  process.exit(1);
}

const localizedRouteCount = PUBLIC_ROUTES.length * PUBLIC_ROUTE_LOCALES.length;

console.log('AMARA public route policy check passed.');
console.log(
  `${PUBLIC_ROUTES.length} public routes (${VACATION_RENTAL_ROUTE_KEYS.length} branded stays) verified across ` +
    `${localizedRouteCount} localized paths, route files, authored references and redirect destinations.`
);
console.log(
  `${guestGuideSlugs.size} Guest Guide slugs included in current-route collision and redirect-target validation.`
);
console.log(
  `${redirectAudit.summary.cloudflareRedirectCount} Cloudflare redirects and ` +
    `${redirectAudit.summary.astroRedirectCount} Astro redirects verified; ` +
    `${redirectAudit.summary.migrationRuleCount} migration rules, ` +
    `${redirectAudit.summary.externalRedirectCount} approved external Lodgify redirects; ` +
    `collisions ${redirectAudit.summary.collisionCount}, duplicates ${redirectAudit.summary.duplicateCount}, ` +
    `chains ${redirectAudit.summary.chainCount}, loops ${redirectAudit.summary.loopCount}.`
);

export { localizePublicPath };
