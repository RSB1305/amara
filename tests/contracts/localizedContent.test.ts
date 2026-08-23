import { expect, test } from '@playwright/test';
import {
  isLocalizedContainer,
  resolveLocale,
  type Localized,
  type LocalizedText,
  type LocalizedTextList
} from '../../src/types/content';

/**
 * The localization resolver.
 *
 * `resolveLocale` is the single point where a leaf-localized content tree turns
 * into the plain structure a renderer reads, so its two failure modes both
 * matter: resolving too little leaves a five-language object in the markup, and
 * resolving too much would take an ordinary content object apart.
 */

const text: LocalizedText = { en: 'EN', de: 'DE', es: 'ES', nl: 'NL', sv: 'SV' };
const list: LocalizedTextList = { en: ['EN'], de: ['DE-1', 'DE-2'], es: ['ES'], nl: ['NL'], sv: ['SV'] };

test('resolves a localized string', () => {
  expect(resolveLocale(text, 'de')).toBe('DE');
  expect(resolveLocale(text, 'sv')).toBe('SV');
});

test('resolves a localized list, including locales of different length', () => {
  expect(resolveLocale(list, 'en')).toEqual(['EN']);
  expect(resolveLocale(list, 'de')).toEqual(['DE-1', 'DE-2']);
});

test('resolves a localized object value', () => {
  const localizedRecord: Localized<{ label: string; count: number }> = {
    en: { label: 'EN', count: 1 },
    de: { label: 'DE', count: 2 },
    es: { label: 'ES', count: 3 },
    nl: { label: 'NL', count: 4 },
    sv: { label: 'SV', count: 5 }
  };

  expect(resolveLocale(localizedRecord, 'nl')).toEqual({ label: 'NL', count: 4 });
});

test('resolves nested structures all the way down', () => {
  const tree = {
    id: 'stable-id',
    hero: { title: text, paragraphs: list },
    cards: [
      { id: 'one', title: text },
      { id: 'two', title: text, note: text }
    ],
    counts: [1, 2, 3]
  };

  expect(resolveLocale(tree, 'es')).toEqual({
    id: 'stable-id',
    hero: { title: 'ES', paragraphs: ['ES'] },
    cards: [
      { id: 'one', title: 'ES' },
      { id: 'two', title: 'ES', note: 'ES' }
    ],
    counts: [1, 2, 3]
  });
});

test('resolves a localized list whose entries are themselves localized', () => {
  const nested: Localized<LocalizedText[]> = {
    en: [text],
    de: [text],
    es: [text],
    nl: [text],
    sv: [text]
  };

  expect(resolveLocale(nested, 'de')).toEqual(['DE']);
});

test('leaves ordinary content objects untouched', () => {
  const notLocalized = {
    // four locales, not five
    fourKeys: { en: 'EN', de: 'DE', es: 'ES', nl: 'NL' },
    // five locales plus one more key
    extraKey: { en: 'EN', de: 'DE', es: 'ES', nl: 'NL', sv: 'SV', note: 'x' },
    // the right keys holding different kinds of value
    mixedKinds: { en: 'EN', de: ['DE'], es: 'ES', nl: 'NL', sv: 'SV' },
    // a domain object that merely mentions a language code
    domain: { en: 'primary', fallback: 'es' }
  };

  expect(resolveLocale(notLocalized, 'de')).toEqual(notLocalized);
});

test('does not treat a partially authored container as localized', () => {
  const missingSwedish = { en: 'EN', de: 'DE', es: 'ES', nl: 'NL', sv: undefined };

  expect(isLocalizedContainer(missingSwedish)).toBe(false);
  expect(resolveLocale(missingSwedish, 'de')).toEqual(missingSwedish);
});

test('recognises exactly the localized containers', () => {
  expect(isLocalizedContainer(text)).toBe(true);
  expect(isLocalizedContainer(list)).toBe(true);
  expect(isLocalizedContainer({ en: {}, de: {}, es: {}, nl: {}, sv: {} })).toBe(true);
  expect(isLocalizedContainer({ en: 'EN', de: 'DE' })).toBe(false);
  expect(isLocalizedContainer({ label: 'x', value: 'y' })).toBe(false);
});

test('carries primitives and null through unchanged', () => {
  expect(resolveLocale('plain', 'de')).toBe('plain');
  expect(resolveLocale(42, 'de')).toBe(42);
  expect(resolveLocale(null, 'de')).toBe(null);
  expect(resolveLocale(undefined, 'de')).toBe(undefined);
  expect(resolveLocale({ a: null, b: undefined }, 'de')).toEqual({ a: null, b: undefined });
});
