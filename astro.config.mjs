// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { stablePublicImages } from './src/integrations/stablePublicImages.ts';
import { buildAstroRedirects } from './src/lib/redirectInfrastructure.mjs';
import { isSitemapPageAllowed, normalizeSitemapItem } from './src/lib/sitemapPolicy.mjs';

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
      // Filter and alternates come from src/lib/sitemapPolicy.mjs; the
      // integration's own i18n mode assumes one shared path per locale.
      filter: isSitemapPageAllowed,
      serialize: normalizeSitemapItem
    }),
    internalToolRoutes(),
    stablePublicImages()
  ]
});
