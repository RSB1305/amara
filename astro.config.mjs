// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { guestGuideEntries } from './src/content/guestGuideEntries.ts';

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

const sitemapLocalePrefixes = new Set(['de', 'en', 'es', 'nl', 'sv']);
const sitemapExcludedSlugs = new Set([
  'directions-arrival-guide',
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
  'instagram',
  'vacation-rentals-sitemap.xml',
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

/** @param {string} page @returns {boolean} */
function isSitemapPageAllowed(page) {
  const slug = getSitemapSlug(page);

  if (sitemapExcludedSlugs.has(slug)) {
    return false;
  }

  return slug !== 'tools' && !slug.startsWith('tools/');
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
    links: item.links?.map((link) => ({
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
  redirects: {
    '/de/frigiliana-oder-nerja': '/de/frigiliana-or-nerja',
    '/arrival-parking-guide': '/getting-to-frigiliana',
    '/es/arrival-parking-guide': '/getting-to-frigiliana',
    '/es/frigiliana-arrival-parking-guide': '/getting-to-frigiliana',
    '/de/arrival-parking-guide': '/de/getting-to-frigiliana',
    '/de/frigiliana-arrival-parking-guide': '/de/getting-to-frigiliana',
    '/en/arrival-parking-guide': '/en/getting-to-frigiliana',
    '/en/frigiliana-arrival-parking-guide': '/en/getting-to-frigiliana',
    '/nl/arrival-parking-guide': '/nl/getting-to-frigiliana',
    '/nl/frigiliana-arrival-parking-guide': '/nl/getting-to-frigiliana',
    '/sv/arrival-parking-guide': '/sv/getting-to-frigiliana',
    '/sv/frigiliana-arrival-parking-guide': '/sv/getting-to-frigiliana',
    '/es/frigiliana-faq': '/frigiliana-faq',
    '/mercado-de-frigiliana': '/frigiliana-market',
    '/es/frigiliana-market': '/frigiliana-market',
    '/es/mercado-de-frigiliana': '/frigiliana-market',
    '/de/frigiliana-markt': '/de/frigiliana-market',
    '/nl/frigiliana-markt': '/nl/frigiliana-market',
    '/sv/frigiliana-marknaden': '/sv/frigiliana-market',
    '/frigiliana-stairs-layout': '/frigiliana-streets-stairs',
    '/es/frigiliana-stairs-layout': '/frigiliana-streets-stairs',
    '/de/frigiliana-stairs-layout': '/de/frigiliana-streets-stairs',
    '/en/frigiliana-stairs-layout': '/en/frigiliana-streets-stairs',
    '/nl/frigiliana-stairs-layout': '/nl/frigiliana-streets-stairs',
    '/sv/frigiliana-stairs-layout': '/sv/frigiliana-streets-stairs',
    '/frigiliana-village-structure-stairs': '/frigiliana-streets-stairs',
    '/es/frigiliana-village-structure-stairs': '/frigiliana-streets-stairs',
    '/de/frigiliana-village-structure-stairs': '/de/frigiliana-streets-stairs',
    '/en/frigiliana-village-structure-stairs': '/en/frigiliana-streets-stairs',
    '/nl/frigiliana-village-structure-stairs': '/nl/frigiliana-streets-stairs',
    '/sv/frigiliana-village-structure-stairs': '/sv/frigiliana-streets-stairs',
    '/de/frigiliana-ort-struktur-und-treppen': '/de/frigiliana-streets-stairs',
    '/es/estructura-y-escaleras-del-sitio-de-frigiliana': '/frigiliana-streets-stairs',
    '/nl/structuur-en-trappen-van-de-frigiliana-site': '/nl/frigiliana-streets-stairs',
    '/sv/frigiliana-tomtens-struktur-och-trappor': '/sv/frigiliana-streets-stairs',
    '/explore-frigiliana-nerja': '/frigiliana-experience',
    '/de/explore-frigiliana-nerja': '/de/frigiliana-experience',
    '/en/explore-frigiliana-nerja': '/en/frigiliana-experience',
    '/nl/explore-frigiliana-nerja': '/nl/frigiliana-experience',
    '/sv/explore-frigiliana-nerja': '/sv/frigiliana-experience'
  },
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
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          de: 'de',
          en: 'en',
          es: 'es',
          nl: 'nl',
          sv: 'sv'
        }
      },
      filter: isSitemapPageAllowed,
      serialize: normalizeSitemapItem
    }),
    internalToolRoutes()
  ]
});
