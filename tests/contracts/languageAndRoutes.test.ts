import { expect, test } from '@playwright/test';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  buildOwnedLocalizedPath,
  buildPrivateLocalizedPath,
  getOwnedLanguagesForRoute,
  getOwnedPublicRoutes,
  getOwnedRouteFromPathname,
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

test('builds unprefixed Spanish and prefixed native routes from the manifest', () => {
  expect(buildOwnedLocalizedPath('home', 'es')).toBe('/');
  expect(buildOwnedLocalizedPath('home', 'en')).toBe('/en');
  expect(buildOwnedLocalizedPath('frigiliana.directions', 'es')).toBe(
    '/frigiliana/llegada-al-apartamento'
  );
  expect(buildOwnedLocalizedPath('frigiliana.directions', 'de')).toBe(
    '/de/frigiliana/anfahrt'
  );
  expect(buildOwnedLocalizedPath('frigiliana.experience.beaches', 'sv')).toBe(
    '/sv/frigiliana/upplevelser/strander'
  );
  expect(buildOwnedLocalizedPath('la-amara-farah', 'nl')).toBe('/nl/la-amara-farah');
  expect(() => buildOwnedLocalizedPath('frigiliana-beaches', 'de')).toThrow(
    /Unknown public route key/
  );
});

test('resolves the owning route and language from localized and generated URLs', () => {
  expect(getOwnedRouteFromPathname('/frigiliana/llegada-al-apartamento')?.route.key).toBe(
    'frigiliana.directions'
  );
  expect(getOwnedRouteFromPathname('/de/frigiliana/anfahrt/')).toMatchObject({
    lang: 'de',
    route: { key: 'frigiliana.directions' }
  });
  expect(
    getOwnedRouteFromPathname('/sv/frigiliana/vagbeskrivning/index.html?source=test')?.lang
  ).toBe('sv');
  expect(getOwnedRouteFromPathname('/nl/frigiliana/routebeschrijving.html#map')?.route.key).toBe(
    'frigiliana.directions'
  );
  expect(getOwnedRouteFromPathname('/')?.route.key).toBe('home');
  expect(getOwnedRouteFromPathname('/en')?.route.key).toBe('home');
  expect(getOwnedRouteFromPathname('/de/frigiliana-beaches')).toBeNull();
  expect(getOwnedRouteFromPathname('/de/amara-experience/access')).toBeNull();
});

test('keeps private routes on their own language while public routes own all five', () => {
  const publicMatch = getOwnedRouteFromPathname('/de/frigiliana/anfahrt');
  expect(getOwnedLanguagesForRoute(publicMatch, 'de')).toEqual(SUPPORTED_LANGUAGES);
  expect(getOwnedLanguagesForRoute(null, 'de')).toEqual(['de']);
  expect(buildPrivateLocalizedPath('/de/amara-experience/access', 'sv')).toBe(
    '/sv/amara-experience/access'
  );
  expect(buildPrivateLocalizedPath('/amara-experience/access', 'es')).toBe(
    '/amara-experience/access'
  );
});

test('composes every child path beneath its parent in every language', () => {
  const routes = getOwnedPublicRoutes();
  const byKey = new Map(routes.map((route) => [route.key, route]));

  for (const route of routes) {
    if (!route.parent || route.identity) {
      continue;
    }

    const parent = byKey.get(route.parent);
    expect(parent, `${route.key} parent`).toBeDefined();

    for (const lang of SUPPORTED_LANGUAGES) {
      const parentPath = buildOwnedLocalizedPath(route.parent, lang);
      const childPath = buildOwnedLocalizedPath(route.key, lang);
      expect(childPath.startsWith(`${parentPath}/`), `${route.key} ${lang}`).toBe(true);
    }
  }
});
