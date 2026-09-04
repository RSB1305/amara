import type {
  AmaraAuthoringSeo,
  AmaraLanguage,
  AmaraSeoLanguageEntry
} from '../../types/seo';
import {
  buildOwnedLocalizedPath,
  buildPrivateLocalizedPath,
  getOwnedLanguagesForRoute,
  getOwnedRouteFromPathname,
  isSupportedLanguage
} from '../routeOwnership';

export const OG_LOCALES: Record<AmaraLanguage, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  nl: 'nl_NL',
  sv: 'sv_SE'
};

export function normalizeLanguage(lang: string): AmaraLanguage {
  const clean = (lang || '').toLowerCase().split('-')[0] as AmaraLanguage;
  return isSupportedLanguage(clean) ? clean : 'es';
}

function resolveLanguageEntry(
  seo: AmaraAuthoringSeo | undefined,
  lang: AmaraLanguage
): AmaraSeoLanguageEntry {
  if (!seo || !seo.languages) {
    return {
      title: 'AMARA',
      description: '',
      robots: 'index, follow',
      canonical: 'auto'
    };
  }

  return (
    seo.languages[lang] ??
    seo.languages.en ?? {
      title: 'AMARA',
      description: '',
      robots: 'index, follow',
      canonical: 'auto'
    }
  );
}

function toAbsoluteUrl(url: string | undefined, origin: string): string {
  if (!url) return '';
  return new URL(url, origin).href;
}

/**
 * AMARA titles carry the brand last: the differentiating search intent occupies
 * the front of the SERP title, and a truncated title loses the brand rather than
 * the keyword. Authoring stays brand-free; this resolver owns the brand entirely,
 * and titles that already end in the brand pass through untouched.
 */
function normalizeBrandTitle(rawTitle: string | undefined): string {
  const title = (rawTitle ?? '').trim();

  if (!title) {
    return 'AMARA';
  }

  if (/^AMARA$/i.test(title)) {
    return 'AMARA';
  }

  // A directly joined ASCII hyphen belongs to an authored AMARA compound.
  // Genuine brand separators continue through the normalization path below.
  if (/^AMARA-\S/i.test(title)) {
    return title;
  }

  if (/(?:\s(?:\||-|–|—)|:)\s*AMARA$/i.test(title)) {
    return title;
  }

  const withoutBrandPrefix = title.replace(
    /^AMARA(?:\s*(?:\||-|–|—|:)\s*|\s+)/i,
    ''
  ).trim();

  if (!withoutBrandPrefix) {
    return 'AMARA';
  }

  return `${withoutBrandPrefix} | AMARA`;
}

/**
 * Canonical and hreflang come from the route manifest: a public route knows
 * its native path in every language, while a private route keeps its own
 * pathname and publishes no alternates.
 */
export function resolveSeoHead(
  seo: AmaraAuthoringSeo | undefined,
  origin: string,
  pathname: string,
  currentLang: AmaraLanguage
) {
  const languageEntry = resolveLanguageEntry(seo, currentLang);
  const current = {
    ...languageEntry,
    title: normalizeBrandTitle(languageEntry.title)
  };
  const match = getOwnedRouteFromPathname(pathname);
  const ownedLanguages = getOwnedLanguagesForRoute(match, currentLang);
  const normalizedOrigin = origin.replace(/\/+$/, '');
  const localizedPath = (lang: AmaraLanguage) =>
    match ? buildOwnedLocalizedPath(match.route.key, lang) : buildPrivateLocalizedPath(pathname, lang);

  const canonicalUrl = new URL(localizedPath(currentLang), normalizedOrigin).href;

  const hreflangs: Array<{ hreflang: AmaraLanguage | 'x-default'; href: string }> =
    ownedLanguages.map((lang) => ({
      hreflang: lang,
      href: new URL(localizedPath(lang), normalizedOrigin).href
    }));

  if (ownedLanguages.includes('es')) {
    hreflangs.push({
      hreflang: 'x-default',
      href: new URL(localizedPath('es'), normalizedOrigin).href
    });
  }

  return {
    current,
    canonicalUrl,
    hreflangs,
    ogImage: toAbsoluteUrl(seo?.ogImage, origin),
    seoBlock: JSON.stringify(seo || {})
  };
}
