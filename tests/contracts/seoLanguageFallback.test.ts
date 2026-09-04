import { expect, test } from '@playwright/test';
import { resolveSeoHead } from '../../src/lib/seo/resolve-seo-head';
import type { AmaraAuthoringSeo, AmaraSeoLanguageEntry } from '../../src/types/seo';

const englishSeo: AmaraSeoLanguageEntry = {
  title: 'Arrival guide',
  description: 'English fallback description',
  robots: 'index, follow',
  canonical: 'auto'
};

test('falls back to authored English metadata without changing the requested route', () => {
  const seoWithOnlyEnglish = {
    version: 'contract-test',
    pageType: 'utility',
    languages: { en: englishSeo }
  } as unknown as AmaraAuthoringSeo;

  const result = resolveSeoHead(
    seoWithOnlyEnglish,
    'https://amara-lodging.es',
    '/de/frigiliana/anfahrt',
    'de'
  );

  expect(result.current).toEqual({
    ...englishSeo,
    title: 'Arrival guide | AMARA'
  });
  expect(result.canonicalUrl).toBe(
    'https://amara-lodging.es/de/frigiliana/anfahrt'
  );
});

test('uses a safe AMARA default when authoring metadata is absent', () => {
  const result = resolveSeoHead(
    undefined,
    'https://amara-lodging.es',
    '/frigiliana/llegada-al-apartamento',
    'es'
  );

  expect(result.current).toEqual({
    title: 'AMARA',
    description: '',
    robots: 'index, follow',
    canonical: 'auto'
  });
  expect(result.hreflangs.at(-1)).toEqual({
    hreflang: 'x-default',
    href: 'https://amara-lodging.es/frigiliana/llegada-al-apartamento'
  });
});
