import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';
import { runStructuredDataAudit } from './check-structured-data.mjs';

const distRoot = join(process.cwd(), 'dist');

runStructuredDataAudit({ distRoot });

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(
      `[AMARA SEO title policy] ${label}: expected ${JSON.stringify(expected)}; ` +
        `received ${JSON.stringify(actual)}`
    );
  }
}

function readRenderedTitle(filePath) {
  const html = readFileSync(filePath, 'utf8');
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);

  if (!match) {
    throw new Error(`[AMARA SEO title policy] Missing <title> in ${filePath}`);
  }

  return match[1]
    .trim()
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function walkHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return walkHtmlFiles(entryPath);
    }

    return entryPath.endsWith('.html') ? [entryPath] : [];
  });
}

async function runSeoTitlePolicyAudit() {
  const vite = await createServer({
    appType: 'custom',
    configFile: false,
    logLevel: 'silent',
    root: process.cwd(),
    server: { middlewareMode: true }
  });

  try {
    const { resolveSeoHead } = await vite.ssrLoadModule('/src/lib/seo/resolve-seo-head.ts');
    const resolveTitle = (title) =>
      resolveSeoHead(
        {
          languages: {
            en: {
              title,
              description: '',
              robots: 'index, follow',
              canonical: 'auto'
            }
          }
        },
        'https://amara-lodging.es',
        '/en/romantic-hideaways',
        'en'
      ).current.title;

    const resolverCases = [
      ['compound DE', 'AMARA-Unterkünfte', 'AMARA-Unterkünfte'],
      ['compound NL', 'AMARA-verblijven', 'AMARA-verblijven'],
      ['compound SV', 'AMARA-boenden', 'AMARA-boenden'],
      ['prefix pipe', 'AMARA | Example', 'Example | AMARA'],
      ['prefix hyphen', 'AMARA - Example', 'Example | AMARA'],
      ['prefix en dash', 'AMARA – Example', 'Example | AMARA'],
      ['prefix em dash', 'AMARA — Example', 'Example | AMARA'],
      ['prefix colon', 'AMARA: Example', 'Example | AMARA'],
      ['prefix space', 'AMARA Example', 'Example | AMARA'],
      ['suffix pipe', 'Example | AMARA', 'Example | AMARA'],
      ['suffix hyphen', 'Example - AMARA', 'Example - AMARA'],
      ['suffix en dash', 'Example – AMARA', 'Example – AMARA'],
      ['suffix em dash', 'Example — AMARA', 'Example — AMARA'],
      ['suffix colon', 'Example: AMARA', 'Example: AMARA'],
      ['brand only', 'AMARA', 'AMARA'],
      ['empty string', '', 'AMARA'],
      ['undefined title', undefined, 'AMARA']
    ];

    for (const [label, input, expected] of resolverCases) {
      assertEqual(resolveTitle(input), expected, label);
    }

    const renderedSelectorTitles = [
      [
        'romantic-hideaways.html',
        'Seis alojamientos en Frigiliana, Nerja y Tarifa | AMARA'
      ],
      [
        'en/romantic-hideaways.html',
        'Stays in Frigiliana, Nerja & Tarifa | AMARA'
      ],
      [
        'de/romantic-hideaways.html',
        'AMARA-Unterkünfte in Frigiliana, Nerja & Tarifa'
      ],
      [
        'nl/romantic-hideaways.html',
        'AMARA-verblijven in Frigiliana, Nerja & Tarifa'
      ],
      [
        'sv/romantic-hideaways.html',
        'AMARA-boenden i Frigiliana, Nerja & Tarifa'
      ]
    ];

    for (const [relativePath, expected] of renderedSelectorTitles) {
      assertEqual(
        readRenderedTitle(join(distRoot, relativePath)),
        expected,
        `rendered ${relativePath}`
      );
    }

    for (const htmlFile of walkHtmlFiles(distRoot)) {
      const title = readRenderedTitle(htmlFile);

      // A compound brand title owns its brand already. Appending the suffix to it
      // would state the brand twice, which is the failure this guard catches.
      if (/^AMARA-.*\s\|\s*AMARA$/.test(title)) {
        throw new Error(
          `[AMARA SEO title policy] Duplicated compound brand in ${htmlFile}: ${title}`
        );
      }
    }

    console.log(
      `AMARA SEO title policy check passed. ${resolverCases.length} resolver cases and ` +
        `${renderedSelectorTitles.length} rendered Stay Selector titles checked.`
    );
  } finally {
    await vite.close();
  }
}

await runSeoTitlePolicyAudit();
