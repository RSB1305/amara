import { readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_PUBLIC_SLUGS,
  DYNAMIC_CANONICAL_PUBLIC_SLUGS,
  STATIC_CANONICAL_PUBLIC_SLUGS
} from '../src/lib/canonicalPublicSlugs.mjs';
import { parseAstroRedirects } from '../src/lib/redirectInfrastructure.mjs';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));
const approvedSlugs = new Set(CANONICAL_PUBLIC_SLUGS);
const approvedStaticPageSlugs = new Set(
  STATIC_CANONICAL_PUBLIC_SLUGS.filter((slug) => slug !== '')
);
const approvedDynamicPageSlugs = new Set(DYNAMIC_CANONICAL_PUBLIC_SLUGS);
const ignoredRouteFiles = new Set([
  '404.astro',
  'index.astro',
  '[rentalSlug].astro',
  // Internal, noindex Guest Guide pages — governed by src/content/guestGuideEntries.ts,
  // deliberately kept out of the canonical public slug allowlist.
  '[guideSlug].astro'
]);
const sourceExtensions = new Set(['.astro', '.ts', '.js', '.mjs']);
const nonDefaultLocalePrefixes = ['de', 'en', 'nl', 'sv'];
const violations = [];

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

function listStaticRouteSlugs(relativeDirectory) {
  const directory = join(workspaceRoot, relativeDirectory);

  return new Set(
    readdirSync(directory, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() &&
          entry.name.endsWith('.astro') &&
          !ignoredRouteFiles.has(entry.name)
      )
      .map((entry) => entry.name.replace(/\.astro$/, ''))
  );
}

function walk(relativeDirectory) {
  const directory = join(workspaceRoot, relativeDirectory);
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relativePath = join(relativeDirectory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(relativePath));
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

  for (const slug of [...CANONICAL_PUBLIC_SLUGS, ...guestGuideSlugs]) {
    paths.add(slug ? `/${slug}` : '/');

    for (const locale of nonDefaultLocalePrefixes) {
      paths.add(slug ? `/${locale}/${slug}` : `/${locale}`);
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

  return {
    violations: auditViolations,
    summary: {
      cloudflareRedirectCount: cloudflareResult.rules.length,
      astroRedirectCount: astroResult.rules.length,
      externalRedirectCount,
      collisionCount,
      duplicateCount: duplicateSources.length,
      chainCount: directChains.length,
      loopCount: loops.length
    }
  };
}

if (approvedSlugs.size !== CANONICAL_PUBLIC_SLUGS.length) {
  violations.push('The canonical slug allowlist contains duplicate entries.');
}

for (const slug of approvedSlugs) {
  if (!slug) {
    continue;
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    violations.push(
      `Canonical slug "${slug}" is not lowercase ASCII kebab-case.`
    );
  }
}

const rootRouteSlugs = listStaticRouteSlugs('src/pages');
const localizedRouteSlugs = listStaticRouteSlugs('src/pages/[lang]');

for (const [label, routeSlugs] of [
  ['root', rootRouteSlugs],
  ['localized', localizedRouteSlugs]
]) {
  for (const slug of routeSlugs) {
    if (!approvedStaticPageSlugs.has(slug)) {
      violations.push(
        `${label} route "${slug}" is not an approved English canonical slug.`
      );
    }
  }

  for (const slug of approvedStaticPageSlugs) {
    if (!routeSlugs.has(slug)) {
      violations.push(
        `Approved canonical slug "${slug}" is missing its ${label} route file.`
      );
    }
  }
}

const rentalEntitySource = readFileSync(
  join(workspaceRoot, 'src/content/vacationRentalEntities.ts'),
  'utf8'
);
const rentalEntitySlugs = new Set(
  [...rentalEntitySource.matchAll(/^\s+slug:\s*['"]([^'"]+)['"],?$/gm)].map(
    (match) => match[1]
  )
);

for (const slug of rentalEntitySlugs) {
  if (!approvedDynamicPageSlugs.has(slug)) {
    violations.push(
      `Dynamic rental slug "${slug}" is not explicitly approved.`
    );
  }
}

for (const slug of approvedDynamicPageSlugs) {
  if (!rentalEntitySlugs.has(slug)) {
    violations.push(
      `Approved dynamic rental slug "${slug}" has no matching rental entity.`
    );
  }
}

const localizedPathPattern =
  /buildOwnedLocalizedPath\(\s*['"]([^'"]+)['"]/g;

for (const relativePath of walk('src')) {
  const source = readFileSync(join(workspaceRoot, relativePath), 'utf8');
  let match;

  while ((match = localizedPathPattern.exec(source)) !== null) {
    const slug = match[1];

    if (!approvedSlugs.has(slug)) {
      violations.push(
        `${relativePath.replaceAll('\\', '/')}: buildOwnedLocalizedPath() uses unapproved slug "${slug}".`
      );
    }
  }
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
  console.error('AMARA public slug policy check failed.');
  console.error(
    'Canonical routes and redirects must comply with AMARA route ownership and migration policy.'
  );

  for (const violation of violations) {
    console.error(`- ${violation}`);
  }

  process.exit(1);
}

console.log('AMARA public slug policy check passed.');
console.log(
  `${approvedStaticPageSlugs.size} English static slugs and ${approvedDynamicPageSlugs.size} approved branded rental slugs verified across routes, link targets, and redirect destinations.`
);
console.log(
  `${guestGuideSlugs.size} Guest Guide slugs included in current-route collision and redirect-target validation.`
);
console.log(
  `${redirectAudit.summary.cloudflareRedirectCount} Cloudflare redirects and ` +
    `${redirectAudit.summary.astroRedirectCount} Astro redirects verified; ` +
    `${redirectAudit.summary.externalRedirectCount} approved external Lodgify redirects; ` +
    `collisions ${redirectAudit.summary.collisionCount}, duplicates ${redirectAudit.summary.duplicateCount}, ` +
    `chains ${redirectAudit.summary.chainCount}, loops ${redirectAudit.summary.loopCount}.`
);
