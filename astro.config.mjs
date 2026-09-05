// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { guestGuideEntries } from './src/content/guestGuideEntries.ts';
import { stablePublicImages } from './src/integrations/stablePublicImages.ts';
import { buildAstroRedirects } from './src/lib/redirectInfrastructure.mjs';
import { buildPublicRoutePath, resolvePublicRoute } from './src/lib/publicRouteManifest.mjs';

// Internal tools live in src/pages/_tools, which Astro's file router ignores because
// of the underscore. They are mounted as real /tools/* routes only where they are
// actually used: the dev server, or a local QA build that opts in explicitly. This
// keeps them out of the production module graph entirely, rather than compiling them
// with the site and deleting the output afterwards.
const INTERNAL_TOOL_ROUTES = [
  ['/tools/component-library', './src/pages/_tools/component-library/index.astro'],
  ['/tools/converter', './src/pages/_tools/converter/index.astro'],
  ['/tools/design-lab', './src/pages/_tools/design-lab/index.astro'],
  ['/tools/design-lab/home-contemporary', './src/pages/_tools/design-lab/home-contemporary.astro'],
  ['/tools/design-lab/navigation-context-preview', './src/pages/_tools/design-lab/navigation-context-preview.astro'],
  ['/tools/design-lab/tarifa-hub', './src/pages/_tools/design-lab/tarifa-hub.astro'],
  ['/tools/guest-welcome', './src/pages/_tools/guest-welcome/index.astro'],
  ['/tools/styleguide', './src/pages/_tools/styleguide/index.astro']
];

/** @returns {import('astro').AstroIntegration} */
function internalToolRoutes() {
  return {
    name: 'internal-tool-routes',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        const include = command === 'dev' || process.env.AMARA_INCLUDE_INTERNAL_TOOLS === 'true';
        if (!include) {
          return;
        }

        for (const [pattern, entrypoint] of INTERNAL_TOOL_ROUTES) {
          injectRoute({ pattern, entrypoint });
        }
      }
    }
  };
}

/** @returns {import('astro').AstroIntegration} */
function requirePublicSiteUrlForProduction() {
  return {
    name: 'require-public-site-url-for-production',
    hooks: {
      'astro:config:setup': ({ command }) => {
        if (command === 'build' && !process.env.PUBLIC_SITE_URL?.trim()) {
          throw new Error(
            '[AMARA] Production build aborted: PUBLIC_SITE_URL is required. ' +
              'Set PUBLIC_SITE_URL=https://amara-lodging.es in the Cloudflare Pages Production environment.'
          );
        }
      }
    }
  };
}

const siteOrigin = process.env.PUBLIC_SITE_URL?.trim() || 'https://amara-lodging.es';
const astroRedirects = buildAstroRedirects(
  readFileSync(new URL('./public/_redirects', import.meta.url), 'utf8')
);

const sitemapLocalePrefixes = new Set(['de', 'en', 'es', 'nl', 'sv']);
/** Alternate order as published before the route migration. */
const sitemapAlternateLocales = ['es', 'de', 'en', 'nl', 'sv'];
/** Routes outside the manifest (private surfaces, legacy redirect pages) that must stay out of the sitemap. */
const sitemapExcludedSlugs = new Set([
  'arrival-parking-guide',
  'frigiliana-arrival-parking-guide',
  'frigiliana-stairs-layout',
  'frigiliana-village-structure-stairs',
  'mercado-de-frigiliana',
  'frigiliana-markt',
  'frigiliana-marknaden',
  'frigiliana-ort-struktur-und-treppen',
  'estructura-y-escaleras-del-sitio-de-frigiliana',
  'structuur-en-trappen-van-de-frigiliana-site',
  'frigiliana-tomtens-struktur-och-trappor',
  'vacation-rentals-sitemap.xml',
  'amara-experience/guide',
  'test',
  // Internal, noindex Guest Guide pages must never appear in the sitemap.
  ...guestGuideEntries.map((entry) => entry.slug)
]);
const sitemapHomePathnames = new Set(['/']);

/** @param {string} page @returns {string} */
function getSitemapSlug(page) {
  const pathname = new URL(page).pathname;
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

  if (!cleanPath) {
    return '';
  }

  const [firstSegment, ...restSegments] = cleanPath.split('/');

  if (sitemapLocalePrefixes.has(firstSegment)) {
    return restSegments.join('/');
  }

  return cleanPath;
}

/**
 * Public routes carry their own sitemap decision in the manifest; everything
 * else falls back to the explicit exclusion list above.
 * @param {string} page @returns {boolean}
 */
function isSitemapPageAllowed(page) {
  const match = resolvePublicRoute(new URL(page).pathname);

  if (match) {
    return match.route.indexable;
  }

  const slug = getSitemapSlug(page);

  if (sitemapExcludedSlugs.has(slug)) {
    return false;
  }

  return slug !== 'tools' && !slug.startsWith('tools/');
}

/**
 * Localized alternates come from the manifest, where every public route knows
 * its native path per language. A route outside the manifest shares one path
 * body across locale prefixes, as the sitemap i18n mode assumed before.
 * @param {string} page @returns {Array<{ lang: string; url: string }>}
 */
function buildSitemapAlternates(page) {
  const pageUrl = new URL(page);
  const match = resolvePublicRoute(pageUrl.pathname);
  const slug = getSitemapSlug(page);

  return sitemapAlternateLocales.map((locale) => {
    const pathname = match
      ? buildPublicRoutePath(match.route.key, locale)
      : locale === 'es'
        ? `/${slug}`
        : `/${locale}/${slug}`;

    return { lang: locale, url: new URL(pathname, pageUrl.origin).href };
  });
}

/** @param {string} url @returns {string} */
function normalizeSitemapUrl(url) {
  const parsedUrl = new URL(url);

  if (!sitemapHomePathnames.has(parsedUrl.pathname) && parsedUrl.pathname.endsWith('/')) {
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/+$/g, '');
  }

  return parsedUrl.href;
}

/**
 * @param {import('@astrojs/sitemap').SitemapItem} item
 * @returns {import('@astrojs/sitemap').SitemapItem}
 */
function normalizeSitemapItem(item) {
  return {
    ...item,
    url: normalizeSitemapUrl(item.url),
    links: buildSitemapAlternates(item.url).map((link) => ({
      ...link,
      url: normalizeSitemapUrl(link.url)
    }))
  };
}

export default defineConfig({
  site: siteOrigin,
  compressHTML: true,
  build: {
    format: 'file',
    // Keep first-visit rendering free of separate, render-blocking CSS requests.
    inlineStylesheets: 'auto'
  },
  trailingSlash: 'never',
  redirects: astroRedirects,
  i18n: {
    defaultLocale: 'es',
    locales: ['de', 'en', 'es', 'nl', 'sv'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    requirePublicSiteUrlForProduction(),
    sitemap({
      // Alternates are resolved per route in `normalizeSitemapItem`; the
      // integration's own i18n mode assumes one shared path per locale.
      filter: isSitemapPageAllowed,
      serialize: normalizeSitemapItem
    }),
    internalToolRoutes(),
    stablePublicImages()
  ]
});
