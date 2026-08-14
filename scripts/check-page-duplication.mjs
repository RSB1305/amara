import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';

/**
 * Repository-wide topic-ownership check, run before creating a new public page.
 *
 * A Nerja beaches page was written in five languages before anyone noticed that
 * frigiliana-beaches already owned the topic: its title is "Beaches near
 * Frigiliana & Nerja" and it names Nerja over a hundred times. The search had
 * been scoped to the Nerja cluster. This resolves every public route through its
 * page family into its content modules and searches all of them at once.
 *
 * Usage:
 *   node scripts/check-page-duplication.mjs "balcón de europa" mirador
 *     Reports which existing routes already cover those terms. Exits 1 when a
 *     route looks like the current owner, so the topic gets settled first.
 *
 *   node scripts/check-page-duplication.mjs
 *     Prints the route/location map: which slug carries which place. Always
 *     exits 0. Useful for spotting a slug that no longer matches its content.
 */

const workspaceRoot = process.cwd();
const pagesRoot = join(workspaceRoot, 'src', 'pages');

// Utility and system surfaces carry no editorial topic.
const ignoredRoutes = new Set(['404', 'instagram', 'legal-notice']);

const places = ['Frigiliana', 'Nerja', 'Maro', 'Tarifa', 'Málaga', 'Torrox'];

// A route whose title claims the term is the owner. A route with this many raw
// hits across five locales - about five per language - covers it in substance.
const substantialHits = 25;

function listRoutes() {
  return readdirSync(pagesRoot)
    .filter((name) => name.endsWith('.astro') && !name.startsWith('['))
    .map((name) => name.replace(/\.astro$/, ''))
    .filter((slug) => !ignoredRoutes.has(slug))
    .sort();
}

function resolveImport(fromFile, specifier) {
  if (!specifier.startsWith('.')) return null;
  const base = resolve(dirname(fromFile), specifier);
  const candidates = [base, `${base}.ts`, `${base}.astro`, join(base, 'index.ts')];
  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) ?? null;
}

/**
 * Walks the import graph from a route into its page family and content modules.
 * Shared layouts, components and lib code are skipped: they hold no topic.
 */
function collectSources(entryFile) {
  const seen = new Set();
  const queue = [entryFile];
  const importPattern = /(?:^|\n)\s*import\s+[\s\S]*?\s+from\s+['"]([^'"]+)['"]/g;

  while (queue.length > 0) {
    const file = queue.shift();
    if (seen.has(file)) continue;
    seen.add(file);

    let source;
    try {
      source = readFileSync(file, 'utf8');
    } catch {
      continue;
    }

    importPattern.lastIndex = 0;
    let match;
    while ((match = importPattern.exec(source)) !== null) {
      const resolved = resolveImport(file, match[1]);
      if (!resolved) continue;

      const relPath = relative(workspaceRoot, resolved).replaceAll('\\', '/');
      if (relPath.startsWith('src/page-families/') || relPath.startsWith('src/content/')) {
        queue.push(resolved);
      }
    }
  }

  seen.delete(entryFile);
  return [...seen];
}

/** Concatenated content of a route, plus the subset that sits inside titles. */
function readRoute(slug) {
  const files = collectSources(join(pagesRoot, `${slug}.astro`));
  let body = '';

  for (const file of files) {
    body += `${readFileSync(file, 'utf8')}\n`;
  }

  // Each alternative stops at its own closing quote, so a title value can never
  // run past the end of its string and swallow the rest of the module.
  const titlePattern = /\btitle:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/g;
  const titleValues = [];
  let match;

  while ((match = titlePattern.exec(body)) !== null) {
    titleValues.push(match[1] ?? match[2] ?? match[3] ?? '');
  }

  return { slug, body, titles: titleValues.join('\n'), files };
}

function countTerm(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (text.match(new RegExp(escaped, 'gi')) || []).length;
}

const routes = listRoutes().map(readRoute);
const terms = process.argv.slice(2).filter((argument) => argument.trim().length > 0);

if (terms.length === 0) {
  console.log('AMARA route/location map');
  console.log('Pass one or more topic terms to check a planned page against existing coverage.\n');
  console.log(`${'route'.padEnd(42)}${places.map((place) => place.slice(0, 6).padStart(9)).join('')}   dominant`);

  for (const route of routes) {
    const counts = places.map((place) => countTerm(route.body, place));
    const total = counts.reduce((sum, count) => sum + count, 0);
    const ranked = places.map((place, index) => [place, counts[index]]).sort((a, b) => b[1] - a[1]);
    const [first, second] = ranked;
    const secondShare = total > 0 ? Math.round((second[1] / total) * 100) : 0;

    let note = first[1] === 0 ? '-' : first[0];
    if (second[1] > 0 && secondShare >= 15) note += `  (${second[0]} ${secondShare}%)`;

    console.log(route.slug.padEnd(42) + counts.map((count) => String(count).padStart(9)).join('') + '   ' + note);
  }

  process.exit(0);
}

const owners = [];
const mentions = [];

for (const route of routes) {
  for (const term of terms) {
    const hits = countTerm(route.body, term);
    if (hits === 0) continue;

    const inTitles = countTerm(route.titles, term);
    const record = { slug: route.slug, term, hits, inTitles };

    if (inTitles > 0 || hits >= substantialHits) owners.push(record);
    else mentions.push(record);
  }
}

if (mentions.length > 0) {
  console.log('Passing mentions - these routes name the topic but do not claim it:');
  for (const mention of mentions.sort((a, b) => b.hits - a.hits)) {
    console.log(`- ${mention.slug} (${mention.term}: ${mention.hits})`);
  }
  console.log('');
}

if (owners.length > 0) {
  console.error('AMARA page duplication check failed.');
  console.error('These routes already cover the topic. Settle ownership before creating a new page:');

  for (const owner of owners.sort((a, b) => b.inTitles - a.inTitles || b.hits - a.hits)) {
    const reason = owner.inTitles > 0 ? `names it in ${owner.inTitles} title(s)` : 'covers it in substance';
    console.error(`\n- ${owner.slug}`);
    console.error(`    "${owner.term}": ${owner.hits} occurrences across five locales - ${reason}`);
  }

  console.error('\nEither extend the existing route, or record why the new page owns a different intent.');
  process.exit(1);
}

console.log('AMARA page duplication check passed.');
console.log(`No existing route claims ${terms.map((term) => `"${term}"`).join(', ')}.`);
