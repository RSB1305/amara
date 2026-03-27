// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const siteOrigin =
  process.env.PUBLIC_SITE_URL ||
  process.env.CF_PAGES_URL ||
  'https://amara-lodging.es';

// https://astro.build/config
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

  integrations: [react()]
});
