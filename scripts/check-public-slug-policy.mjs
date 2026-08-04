import { readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CANONICAL_PUBLIC_SLUGS,
  DYNAMIC_CANONICAL_PUBLIC_SLUGS,
  STATIC_CANONICAL_PUBLIC_SLUGS
} from '../src/lib/canonicalPublicSlugs.mjs';

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
const supportedLocalePrefixes = new Set(['de', 'en', 'es', 'nl', 'sv']);
const violations = [];

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

function stripLocalePrefix(pathname) {
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);

  if (supportedLocalePrefixes.has(segments[0])) {
    segments.shift();
  }

  return segments.join('/');
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

// Normalize line endings: the redirect pattern below anchors on \n, and Git rewrites
// checkouts to CRLF on Windows, which would otherwise fail the check on that platform only.
const astroConfig = readFileSync(join(workspaceRoot, 'astro.config.mjs'), 'utf8').replace(
  /\r\n/g,
  '\n'
);
const redirectsBlock = astroConfig.match(
  /redirects:\s*\{([\s\S]*?)\n\s*\},\n\s*i18n:/
);

if (!redirectsBlock) {
  violations.push('Unable to inspect redirect destinations in astro.config.mjs.');
} else {
  const redirectPattern = /['"][^'"]+['"]\s*:\s*['"]([^'"]+)['"]/g;
  let redirectMatch;

  while ((redirectMatch = redirectPattern.exec(redirectsBlock[1])) !== null) {
    const destination = redirectMatch[1];

    if (!destination.startsWith('/')) {
      violations.push(
        `Redirect destination "${destination}" must be an internal canonical path.`
      );
      continue;
    }

    const destinationSlug = stripLocalePrefix(destination);

    if (!approvedSlugs.has(destinationSlug)) {
      violations.push(
        `Redirect destination "${destination}" does not use an approved canonical slug.`
      );
    }
  }
}

if (violations.length > 0) {
  console.error('AMARA public slug policy check failed.');
  console.error(
    'Canonical public slugs must be approved English slugs. Localized and legacy slugs are allowed only as redirect sources.'
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
