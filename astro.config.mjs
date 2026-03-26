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
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
