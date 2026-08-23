import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

/**
 * AMARA typography policy.
 *
 * `src/styles/global.css` states that the typography roles are the single
 * source of truth for text size, weight, tracking and case. The rule was
 * written months before this check and had been broken several hundred times,
 * because nothing enforced it: an arbitrary Tailwind value at a call site is
 * indistinguishable from an intentional one until somebody counts.
 *
 * This check counts. It records every typographic arbitrary value that exists
 * today and fails when the set changes, in either direction. A new one has to
 * be justified; a removed one has to be banked. Both directions are deliberate:
 * the baseline is the written record of the remaining exceptions, and it is
 * only accurate if it is kept exact.
 *
 * Run with `--update` to rewrite the baseline after an intentional change.
 * Non-typographic arbitrary values — widths, heights, spacing, colour
 * functions — are outside this policy and are not counted.
 */

const ROOT = process.cwd();
const SCAN_ROOT = join(ROOT, 'src');
const BASELINE_PATH = join(ROOT, 'scripts', 'typography-baseline.json');

/**
 * Size, tracking, leading and weight are the roles the typography system owns.
 * A `text-[…]` that carries a colour function rather than a size is a colour,
 * not a type decision, so it is not matched here.
 */
const TYPOGRAPHIC_ARBITRARY =
  /\b(?:text|tracking|leading|font)-\[(?!color:|--)[^\]]+\]/g;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
      continue;
    }
    if (entry.endsWith('.astro')) files.push(full);
  }
  return files;
}

function collect() {
  const found = {};
  for (const file of walk(SCAN_ROOT).sort()) {
    const rel = relative(ROOT, file).replaceAll('\\', '/');
    const matches = readFileSync(file, 'utf8').match(TYPOGRAPHIC_ARBITRARY);
    if (!matches) continue;
    const counts = {};
    for (const match of matches) counts[match] = (counts[match] ?? 0) + 1;
    found[rel] = Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)));
  }
  return found;
}

const current = collect();
const total = Object.values(current).reduce(
  (sum, values) => sum + Object.values(values).reduce((a, b) => a + b, 0),
  0
);

if (process.argv.includes('--update')) {
  writeFileSync(BASELINE_PATH, `${JSON.stringify(current, null, 2)}\n`);
  console.log(`AMARA typography baseline rewritten: ${total} exception(s) recorded.`);
  process.exit(0);
}

let baseline;
try {
  baseline = JSON.parse(readFileSync(BASELINE_PATH, 'utf8'));
} catch {
  console.error('AMARA typography policy check failed.');
  console.error(`No baseline at ${relative(ROOT, BASELINE_PATH)}. Create it with:`);
  console.error('  node scripts/check-typography-policy.mjs --update');
  process.exit(1);
}

const added = [];
const removed = [];
const files = new Set([...Object.keys(baseline), ...Object.keys(current)]);

for (const file of [...files].sort()) {
  const before = baseline[file] ?? {};
  const after = current[file] ?? {};
  for (const value of new Set([...Object.keys(before), ...Object.keys(after)])) {
    const delta = (after[value] ?? 0) - (before[value] ?? 0);
    if (delta > 0) added.push(`${file}: ${value} ×${delta}`);
    if (delta < 0) removed.push(`${file}: ${value} ×${-delta}`);
  }
}

if (added.length === 0 && removed.length === 0) {
  console.log(`AMARA typography policy check passed. ${total} recorded exception(s), unchanged.`);
  process.exit(0);
}

if (added.length > 0) {
  console.error('AMARA typography policy check failed.');
  console.error('New typographic arbitrary values. Add a role in src/styles/global.css and use it,');
  console.error('or record the exception deliberately with `node scripts/check-typography-policy.mjs --update`:');
  for (const entry of added) console.error(`  + ${entry}`);
}

if (removed.length > 0) {
  const heading =
    added.length > 0
      ? 'Also resolved since the baseline was written:'
      : 'AMARA typography policy check failed.\nExceptions were resolved but the baseline still lists them. Bank the progress with\n`node scripts/check-typography-policy.mjs --update`:';
  console.error(heading);
  for (const entry of removed) console.error(`  - ${entry}`);
}

process.exit(1);
