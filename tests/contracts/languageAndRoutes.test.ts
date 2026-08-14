import { expect, test } from '@playwright/test';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  buildOwnedLocalizedPath,
  getOwnedLanguagesForSlug,
  getOwnedSlugFromPathname,
  isSupportedLanguage
} from '../../src/lib/routeOwnership';
import { normalizeLanguage } from '../../src/lib/seo/resolve-seo-head';

test('declares Spanish as the unprefixed default language', () => {
  expect(DEFAULT_LANGUAGE).toBe('es');
  expect(SUPPORTED_LANGUAGES).toEqual(['en', 'de', 'es', 'nl', 'sv']);
});

test('normalizes supported regional language tags and rejects unsupported ones', () => {
  expect(normalizeLanguage('DE-de')).toBe('de');
  expect(normalizeLanguage('sv-SE')).toBe('sv');
  expect(normalizeLanguage('fr-FR')).toBe('es');
  expect(normalizeLanguage('')).toBe('es');
  expect(isSupportedLanguage('nl')).toBe(true);
  expect(isSupportedLanguage('fr')).toBe(false);
});

test('builds unprefixed Spanish and prefixed translated routes', () => {
  expect(buildOwnedLocalizedPath('', 'es')).toBe('/');
  expect(buildOwnedLocalizedPath('', 'en')).toBe('/en');
  expect(buildOwnedLocalizedPath('directions-arrival-guide', 'es')).toBe(
    '/directions-arrival-guide'
  );
  expect(buildOwnedLocalizedPath('directions-arrival-guide', 'de')).toBe(
    '/de/directions-arrival-guide'
  );
});

test('extracts the owned slug from localized and generated URLs', () => {
  expect(getOwnedSlugFromPathname('/directions-arrival-guide')).toBe(
    'directions-arrival-guide'
  );
  expect(getOwnedSlugFromPathname('/de/directions-arrival-guide/')).toBe(
    'directions-arrival-guide'
  );
  expect(
    getOwnedSlugFromPathname('/sv/directions-arrival-guide/index.html?source=test')
  ).toBe('directions-arrival-guide');
  expect(getOwnedSlugFromPathname('/nl/directions-arrival-guide.html#map')).toBe(
    'directions-arrival-guide'
  );
});

test(
  'publishes canonical public pages in all languages without inventing private routes',
  () => {
    expect(getOwnedLanguagesForSlug('directions-arrival-guide', 'de')).toEqual(
      SUPPORTED_LANGUAGES
    );
    expect(getOwnedLanguagesForSlug('private-preview', 'de')).toEqual(['de']);
  }
);
