import { expect, test } from '@playwright/test';
import {
  GUEST_GUIDE_PAGES,
  experienceAccessHref,
  experienceGuideEntryHref,
  guestGuideRootHref,
  legacyGuestGuideEntryHref
} from '../../guest-experience/guide-routes.mjs';
import { buildPublicRoutePath } from '../../src/lib/publicRouteManifest.mjs';
import { isSitemapPageAllowed, normalizeSitemapItem } from '../../src/lib/sitemapPolicy.mjs';

const ORIGIN = 'https://amara-lodging.es';
const LANGUAGES = ['es', 'en', 'de', 'nl', 'sv'] as const;

const pageUrl = (pathname: string) => new URL(pathname, ORIGIN).href;

test('keeps the gated Guest Guide out of the sitemap in every language', () => {
  for (const lang of LANGUAGES) {
    expect(isSitemapPageAllowed(pageUrl(guestGuideRootHref(lang))), lang).toBe(false);
    expect(isSitemapPageAllowed(pageUrl(experienceAccessHref(lang))), lang).toBe(false);

    for (const slug of Object.keys(GUEST_GUIDE_PAGES)) {
      const flatLegacyPath = lang === 'es' ? `/${slug}` : `/${lang}/${slug}`;

      expect(isSitemapPageAllowed(pageUrl(experienceGuideEntryHref(slug, lang))), `${slug} ${lang}`).toBe(false);
      expect(isSitemapPageAllowed(pageUrl(legacyGuestGuideEntryHref(slug, lang))), `${slug} ${lang}`).toBe(false);
      expect(isSitemapPageAllowed(pageUrl(flatLegacyPath)), `${slug} ${lang}`).toBe(false);
    }
  }
});

test('lists the public Guest Guide landing and follows the manifest sitemap flag', () => {
  expect(isSitemapPageAllowed(pageUrl('/'))).toBe(true);
  expect(isSitemapPageAllowed(pageUrl('/de'))).toBe(true);
  expect(isSitemapPageAllowed(pageUrl(buildPublicRoutePath('amara-experience', 'de')))).toBe(true);
  expect(isSitemapPageAllowed(pageUrl(buildPublicRoutePath('stays.frigiliana', 'de')))).toBe(true);
  expect(isSitemapPageAllowed(pageUrl(buildPublicRoutePath('la-amara-playa', 'en')))).toBe(true);

  const outOfSitemap = ['stays.nerja', 'stays.tarifa', 'frigiliana.directions', 'nerja.directions', 'tarifa.directions'];

  for (const key of outOfSitemap) {
    for (const lang of LANGUAGES) {
      expect(isSitemapPageAllowed(pageUrl(buildPublicRoutePath(key, lang))), `${key} ${lang}`).toBe(false);
    }
  }
});

test('serializes manifest alternates in native paths and keeps only the root slash', () => {
  const stay = normalizeSitemapItem({ url: pageUrl('/de/unterkuenfte/frigiliana/la-amara-farah/') });

  expect(stay.url).toBe(`${ORIGIN}/de/unterkuenfte/frigiliana/la-amara-farah`);
  expect(stay.links).toEqual([
    { lang: 'es', url: `${ORIGIN}/alojamientos/frigiliana/la-amara-farah` },
    { lang: 'de', url: `${ORIGIN}/de/unterkuenfte/frigiliana/la-amara-farah` },
    { lang: 'en', url: `${ORIGIN}/en/stays/frigiliana/la-amara-farah` },
    { lang: 'nl', url: `${ORIGIN}/nl/verblijven/frigiliana/la-amara-farah` },
    { lang: 'sv', url: `${ORIGIN}/sv/boenden/frigiliana/la-amara-farah` }
  ]);

  const home = normalizeSitemapItem({ url: `${ORIGIN}/` });

  expect(home.url).toBe(`${ORIGIN}/`);
  expect(home.links?.map((link) => link.url)).toEqual([
    `${ORIGIN}/`,
    `${ORIGIN}/de`,
    `${ORIGIN}/en`,
    `${ORIGIN}/nl`,
    `${ORIGIN}/sv`
  ]);
});
