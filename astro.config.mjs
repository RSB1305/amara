// @ts-check
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

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
  integrations: [react(), removeToolsFromDist()]
});
