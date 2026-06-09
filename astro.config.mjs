// @ts-check
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

function removeToolsFromDist() {
  return {
    name: 'remove-tools-from-dist',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const outRoot = fileURLToPath(dir);
        let toolsDir = join(outRoot, 'tools');
        if (!existsSync(toolsDir)) {
          toolsDir = join(process.cwd(), 'dist', 'tools');
        }
        if (existsSync(toolsDir)) {
          rmSync(toolsDir, { recursive: true, force: true });
        }
      }
    }
  };
}

const siteOrigin =
  process.env.PUBLIC_SITE_URL ||
  process.env.CF_PAGES_URL ||
  'https://amara-lodging.es';

const sitemapLocalePrefixes = new Set(['de', 'en', 'es', 'nl', 'sv']);
const sitemapExcludedSlugs = new Set([
  'directions-arrival-guide',
  'instagram',
  'test'
]);
const sitemapHomePathnames = new Set(['/', '/de/', '/en/', '/nl/', '/sv/']);

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

function isSitemapPageAllowed(page) {
  const slug = getSitemapSlug(page);

  if (sitemapExcludedSlugs.has(slug)) {
    return false;
  }

  return slug !== 'tools' && !slug.startsWith('tools/');
}

function normalizeSitemapUrl(url) {
  const parsedUrl = new URL(url);

  if (!sitemapHomePathnames.has(parsedUrl.pathname) && parsedUrl.pathname.endsWith('/')) {
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/+$/g, '');
  }

  return parsedUrl.href;
}

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
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          es: 'es-ES',
          nl: 'nl-NL',
          sv: 'sv-SE'
        }
      },
      filter: isSitemapPageAllowed,
      serialize: normalizeSitemapItem
    }),
    removeToolsFromDist()
  ]
});
