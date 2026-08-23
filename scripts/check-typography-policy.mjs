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
 * be justified; a removed one has to be banked. Both directions are deliberate.
 *
 * The baseline is a **legacy ratchet, not a register of justified exceptions**.
 * It says what is still there and stops it growing; it does not claim that each
 * entry has been examined and found necessary. Most of them have not been. The
 * value of the file is that the number can only go down, and that a new value
 * has to be argued for in review rather than appearing unnoticed.
 *
 * Run with `--update` to rewrite the baseline after an intentional change.
 * Non-typographic arbitrary values — widths, heights, spacing, colour
 * functions — are outside this policy and are not counted.
 */

const ROOT = process.cwd();
const SCAN_ROOT = join(ROOT, 'src');
const BASELINE_PATH = join(ROOT, 'scripts', 'typography-legacy-baseline.json');

/**
 * Size, tracking, leading and family are the roles the typography system owns.
 *
 * `text-[…]` is Tailwind's one ambiguous prefix: it carries font size and text
 * colour alike. A value that names a colour — a hex literal, a `color:` cast, a
 * colour custom property — is a palette decision and belongs to the token
 * system, not to this policy, so it is excluded. Everything else under these
 * four prefixes is a type decision that a role should own.
 */
const TYPOGRAPHIC_ARBITRARY = /\b(?:text|tracking|leading|font)-\[[^\]]+\]/g;
const COLOUR_VALUE = /^text-\[(?:#|color:|--|var\(\s*--color)/;

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
    const matches = (readFileSync(file, 'utf8').match(TYPOGRAPHIC_ARBITRARY) ?? []).filter(
      (match) => !COLOUR_VALUE.test(match)
    );
    if (matches.length === 0) continue;
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

/** Kept inside the baseline so the file states its own status to whoever opens it. */
const BASELINE_NOTE = [
  'This file is a legacy ratchet, not a register of justified exceptions.',
  'It records the typographic arbitrary values that still exist, so their number',
  'can only go down and a new one cannot appear unnoticed. An entry here has NOT',
  'been reviewed and found necessary — most have not been looked at at all.',
  'Resolve one by adding or using a role in src/styles/global.css, then re-run',
  'this check with --update to bank the progress.'
];

if (process.argv.includes('--update')) {
  const withNote = { _note: BASELINE_NOTE, ...current };
  writeFileSync(BASELINE_PATH, `${JSON.stringify(withNote, null, 2)}\n`);
  console.log(`AMARA typography legacy baseline rewritten: ${total} unresolved value(s) recorded.`);
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
const files = new Set(
  [...Object.keys(baseline), ...Object.keys(current)].filter((name) => !name.startsWith('_'))
);

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
  console.log(`AMARA typography policy check passed. ${total} unresolved legacy value(s), unchanged.`);
  process.exit(0);
}

if (added.length > 0) {
  console.error('AMARA typography policy check failed.');
  console.error('New typographic arbitrary values. Add a role in src/styles/global.css and use it,');
  console.error('or, if it is genuinely unavoidable, bank it deliberately with `node scripts/check-typography-policy.mjs --update`:');
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
