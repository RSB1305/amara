import { readdirSync } from 'node:fs';
import { expect, test } from '@playwright/test';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';
import { isLocalizedContainer, MARKET_CURATED } from '../../src/types/content';

/**
 * Semantic parity of the five locales.
 *
 * A content module that carries one whole copy of the page shape per language
 * lets the copies drift without anything noticing: a locale can lose an entire
 * optional block, a FAQ answer or a card and still typecheck, still build and
 * still publish. The page simply renders less in that language.
 *
 * What counts as a loss needs care, because AMARA also requires every locale to
 * read naturally in its own market. Those two rules meet at the paragraph:
 *
 * - **Semantic units must correspond.** A key present in one locale and absent
 *   in another is a missing block. A list of units must hold the same number of
 *   them in every locale, so a German page with six FAQ answers where English
 *   has seven is missing an answer, whatever the reason.
 * - **Identity is checked where the units carry an identifier.** Where a list's
 *   entries have an `id`, `token`, `key` or `slug`, those must match one for
 *   one and in order, so a substituted or reordered unit is caught too. Where
 *   they do not — a FAQ entry with only a question and an answer, say — the
 *   check reaches only as far as the count and the field shape: a locale
 *   swapping one entry for another of the same shape would pass. That limit is
 *   real and is stated in DR-CONTENT-STRUCT-002 rather than glossed over.
 *   `IDENTIFIER_LESS_UNIT_LISTS` below holds the line: their number may fall
 *   but not rise. Migrating a module to leaf localization removes the risk
 *   entirely, because the list then exists once instead of five times.
 * - **Prose segmentation may differ.** A translator who splits one English
 *   paragraph into two German ones, or joins two into one, is doing the job
 *   `AGENTS.md` asks for. A plain list of strings is prose, and its length is
 *   not compared. `LocalizedTextList` exists to express exactly this.
 *
 * The test therefore compares the shape of the five language trees — keys,
 * semantic unit counts and their identifiers — and never the authored words or
 * how many paragraphs they occupy.
 *
 * Modules that localize at the leaf cannot produce most of these defects at
 * all: there a missing locale on a required value is a type error. This test
 * covers the modules still on the older structure and keeps that migration
 * honest while it runs.
 */

const CONTENT_DIR = new URL('../../src/content/', import.meta.url);

/**
 * Modules whose import is allowed to fail, with the reason. The list is empty
 * and checked in both directions: a module that stops importing fails this test
 * rather than dropping quietly out of the parity check, and an entry that is no
 * longer needed fails it too. Nothing may leave the check silently.
 */
const IMPORT_FAILURE_ALLOWED: Record<string, string> = {};

/**
 * Gaps that exist in the authored content today. Each entry is a real missing
 * semantic unit, and none may be closed by deriving a locale from another —
 * they need authored copy in the missing languages. A gap that no longer exists
 * must be removed from this list; a stale entry fails the test.
 */
const KNOWN_CONTENT_GAPS: Record<string, string> = {};

/**
 * The number of identifier-less lists of semantic units still living in
 * top-level-localized modules. Retrofitting identifiers across all of them
 * would be content restructuring in modules nothing else has touched, so the
 * number is held instead: it may fall as modules migrate or gain identifiers,
 * and a new one cannot be introduced unnoticed.
 */
const IDENTIFIER_LESS_UNIT_LISTS = 83;

const LANGS = SUPPORTED_LANGUAGES;

/** Keys that identify a semantic unit inside a list. */
const IDENTIFIER_KEYS = ['id', 'token', 'key', 'slug'] as const;

function isProseList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === 'string');
}

/**
 * Structural fingerprint. Prose lists collapse to a single marker so their
 * length cannot register as a difference; everything else keeps its shape.
 */
function fingerprint(value: unknown, depth = 0): string {
  if (depth > 12) return '…';
  if (isProseList(value)) return 'prose[]';
  if (Array.isArray(value)) {
    return `[${value.length}:${value.map((entry) => fingerprint(entry, depth + 1)).join('|')}]`;
  }
  if (value && typeof value === 'object') {
    return `{${Object.keys(value as object)
      .sort()
      .map((key) => `${key}:${fingerprint((value as Record<string, unknown>)[key], depth + 1)}`)
      .join(',')}}`;
  }
  if (typeof value === 'string') return 'string';
  return typeof value;
}

/**
 * The ordered identifiers of every list of semantic units in the tree, so a
 * reordered or substituted unit is caught even when the counts match.
 */
function unitIdentifiers(
  value: unknown,
  path = '',
  out: string[] = [],
  depth = 0,
  curated = false
): string[] {
  if (depth > 12) return out;
  if (Array.isArray(value)) {
    if (!isProseList(value)) {
      const first = value[0];
      if (!curated && first && typeof first === 'object' && !Array.isArray(first)) {
        const idKey = IDENTIFIER_KEYS.find((key) => key in (first as object));
        if (idKey) {
          const ids = value.map((entry) => String((entry as Record<string, unknown>)[idKey]));
          out.push(`${path}=${ids.join(',')}`);
        }
      }
      value.forEach((entry, index) =>
        unitIdentifiers(entry, `${path}[${index}]`, out, depth + 1, curated)
      );
    }
    return out;
  }
  if (value && typeof value === 'object') {
    // A block that declares itself market-curated chooses its entries per
    // market rather than translating them, so its lists are exempt from
    // identity — and only from identity. Everything else about it still counts.
    const declaresCuration =
      (value as Record<string, unknown>).curation === MARKET_CURATED;
    for (const [key, entry] of Object.entries(value)) {
      unitIdentifiers(entry, `${path}.${key}`, out, depth + 1, curated || declaresCuration);
    }
  }
  return out;
}

/** Lists of semantic units whose entries carry no stable identifier. */
function identifierLessUnitLists(value: unknown, out: { n: number }, depth = 0): void {
  if (depth > 12) return;
  if (Array.isArray(value)) {
    const isUnitList =
      value.length > 0 &&
      value.every(
        (entry) =>
          entry !== null &&
          typeof entry === 'object' &&
          !Array.isArray(entry) &&
          !isLocalizedContainer(entry as object)
      );
    if (isUnitList && !IDENTIFIER_KEYS.some((key) => key in (value[0] as object))) out.n += 1;
    if (!isProseList(value)) value.forEach((entry) => identifierLessUnitLists(entry, out, depth + 1));
    return;
  }
  if (value && typeof value === 'object' && !isLocalizedContainer(value as object)) {
    for (const entry of Object.values(value)) identifierLessUnitLists(entry, out, depth + 1);
  }
}

function isLocalizedPageShape(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const keys = Object.keys(value as object);
  if (!LANGS.every((lang) => keys.includes(lang))) return false;
  // A record whose language keys hold plain strings is a LocalizedText, which is
  // already the target contract and has nothing to compare.
  return LANGS.some((lang) => {
    const entry = (value as Record<string, unknown>)[lang];
    return typeof entry === 'object' && entry !== null;
  });
}

const moduleFiles = readdirSync(CONTENT_DIR)
  .filter((name) => name.endsWith('.ts'))
  .sort();

test('every content module keeps the same semantic units in all five locales', async () => {
  const inspected: string[] = [];
  const divergent: string[] = [];
  const skipped: string[] = [];
  const identifierLessCount = { n: 0 };

  for (const file of moduleFiles) {
    let loaded: Record<string, unknown>;
    try {
      loaded = (await import(new URL(file, CONTENT_DIR).href)) as Record<string, unknown>;
    } catch (error) {
      expect(
        Object.prototype.hasOwnProperty.call(IMPORT_FAILURE_ALLOWED, file),
        `${file} could not be imported and no failure is recorded for it. A content module must stay inside the parity check: ${
          (error as Error).message
        }`
      ).toBe(true);
      skipped.push(file);
      continue;
    }

    for (const [exportName, value] of Object.entries(loaded)) {
      if (/Seo$/.test(exportName)) continue;
      if (!isLocalizedPageShape(value)) continue;

      const key = `${file}::${exportName}`;
      const perLocale = LANGS.map((lang) => (value as Record<string, unknown>)[lang]);
      const shapes = perLocale.map((entry) => fingerprint(entry));
      const units = perLocale.map((entry) => unitIdentifiers(entry).join(' | '));
      const isDivergent = new Set(shapes).size > 1 || new Set(units).size > 1;

      // One locale is enough to count these: the shape check above already
      // holds the five to the same structure.
      identifierLessUnitLists(perLocale[0], identifierLessCount);

      if (isDivergent) {
        divergent.push(key);
        expect(
          Object.prototype.hasOwnProperty.call(KNOWN_CONTENT_GAPS, key),
          `${key} does not hold the same semantic units in every locale. Differing paragraph counts are fine and are not reported here, so this is a missing or reordered block, list entry or field. Either author the missing copy, or record the gap in KNOWN_CONTENT_GAPS with what is missing.`
        ).toBe(true);
      }
      inspected.push(key);
    }
  }

  expect(inspected.length, 'no localized content modules were inspected').toBeGreaterThan(20);

  expect(
    identifierLessCount.n,
    `${identifierLessCount.n} lists of semantic units carry no stable identifier, up from ${IDENTIFIER_LESS_UNIT_LISTS}. Identity cannot be checked for those, so a locale could substitute an entry unnoticed. Give the new list an id, or migrate its module to leaf localization, which removes the risk entirely.`
  ).toBeLessThanOrEqual(IDENTIFIER_LESS_UNIT_LISTS);

  expect(
    identifierLessCount.n,
    `only ${identifierLessCount.n} identifier-less unit lists remain, fewer than the ${IDENTIFIER_LESS_UNIT_LISTS} recorded. Lower IDENTIFIER_LESS_UNIT_LISTS to bank the progress.`
  ).toBe(IDENTIFIER_LESS_UNIT_LISTS);

  const staleSkips = Object.keys(IMPORT_FAILURE_ALLOWED).filter(
    (file) => !skipped.includes(file)
  );
  expect(
    staleSkips,
    'these modules import cleanly now; remove them from IMPORT_FAILURE_ALLOWED'
  ).toEqual([]);

  const staleGaps = Object.keys(KNOWN_CONTENT_GAPS).filter((key) => !divergent.includes(key));
  expect(
    staleGaps,
    'these gaps are recorded as known but no longer exist; remove them from KNOWN_CONTENT_GAPS'
  ).toEqual([]);
});
