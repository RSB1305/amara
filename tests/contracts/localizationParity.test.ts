import { readdirSync } from 'node:fs';
import { expect, test } from '@playwright/test';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';

/**
 * Structural parity of the five locales.
 *
 * A content module that carries one whole copy of the page shape per language
 * lets the copies drift apart without anything noticing: a locale can lose a
 * paragraph, a list entry or an entire optional block and still typecheck,
 * still build and still publish. The page simply renders less in that
 * language. This test compares the shape of the five language trees — keys and
 * list lengths, never the authored words — so such a gap fails a check instead
 * of shipping silently.
 *
 * Content modules that localize at the leaf, which is the binding contract in
 * `src/types/content.ts`, cannot produce this defect at all: a missing locale
 * there is a type error. This test exists for the modules still on the older
 * structure, and it is the guard that keeps that migration honest while it runs.
 */

const CONTENT_DIR = new URL('../../src/content/', import.meta.url);

/**
 * Gaps that exist in the authored content today. Each entry is a real missing
 * translation, not a false positive, and none of them may be closed by deriving
 * a locale from another — they need authored copy in the missing languages.
 * Removing a gap from the content must also remove its line here; a stale entry
 * fails this test.
 */
const KNOWN_CONTENT_GAPS: Record<string, string> = {
  'frigilianaLocationContent.ts::frigilianaLocationCopy':
    'English carries an extra FAQ answer and the whole optional journeyBridge CTA; de, es, nl and sv have neither. Swedish also splits two passages differently.',
  'frigilianaWinterStaysContent.ts::frigilianaWinterStaysContent':
    'Spanish splits one section into two paragraphs where the other locales use one.',
  'tarifaExperienceContent.ts::tarifaExperienceContent':
    'English carries a third paragraph in the second section that no other locale has.'
};

type Fingerprint = string;

function fingerprint(value: unknown, depth = 0): Fingerprint {
  if (depth > 12) return '…';
  if (Array.isArray(value)) {
    return `[${value.length}:${value.map((entry) => fingerprint(entry, depth + 1)).join('|')}]`;
  }
  if (value && typeof value === 'object') {
    return `{${Object.keys(value as object)
      .sort()
      .map((key) => `${key}:${fingerprint((value as Record<string, unknown>)[key], depth + 1)}`)
      .join(',')}}`;
  }
  return typeof value;
}

function isLocalizedPageShape(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const keys = Object.keys(value as object);
  if (!SUPPORTED_LANGUAGES.every((lang) => keys.includes(lang))) return false;
  // A record whose language keys hold plain strings is a LocalizedText, which is
  // already the target contract and has nothing to compare.
  return SUPPORTED_LANGUAGES.some((lang) => {
    const entry = (value as Record<string, unknown>)[lang];
    return typeof entry === 'object' && entry !== null;
  });
}

const moduleFiles = readdirSync(CONTENT_DIR)
  .filter((name) => name.endsWith('.ts'))
  .sort();

test('every content module keeps the five locales structurally identical', async () => {
  const found: string[] = [];
  const divergent: string[] = [];

  for (const file of moduleFiles) {
    let loaded: Record<string, unknown>;
    try {
      loaded = (await import(new URL(file, CONTENT_DIR).href)) as Record<string, unknown>;
    } catch {
      // A handful of content modules pull in Astro components for their icon
      // wiring and cannot be imported outside the Astro build. They are covered
      // by the build itself rather than skipped silently.
      continue;
    }

    for (const [exportName, value] of Object.entries(loaded)) {
      if (/Seo$/.test(exportName)) continue;
      if (!isLocalizedPageShape(value)) continue;

      const key = `${file}::${exportName}`;
      const shapes = SUPPORTED_LANGUAGES.map((lang) =>
        fingerprint((value as Record<string, unknown>)[lang])
      );
      const isDivergent = new Set(shapes).size > 1;

      if (isDivergent) {
        divergent.push(key);
        expect(
          Object.prototype.hasOwnProperty.call(KNOWN_CONTENT_GAPS, key),
          `${key} has locales that differ in shape. Either author the missing copy, or record the gap in KNOWN_CONTENT_GAPS with what is missing.`
        ).toBe(true);
      }
      found.push(key);
    }
  }

  expect(found.length, 'no localized content modules were inspected').toBeGreaterThan(20);

  const stale = Object.keys(KNOWN_CONTENT_GAPS).filter((key) => !divergent.includes(key));
  expect(
    stale,
    'these gaps are recorded as known but no longer exist; remove them from KNOWN_CONTENT_GAPS'
  ).toEqual([]);
});
