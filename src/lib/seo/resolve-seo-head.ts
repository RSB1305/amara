import type {
  AmaraAuthoringSeo,
  AmaraLanguage,
  AmaraSeoLanguageEntry
} from '../../types/seo';
import {
  getOwnedLanguagesForSlug,
  SUPPORTED_LANGUAGES
} from '../routeOwnership';

export function normalizeLanguage(lang: string): AmaraLanguage {
  const clean = (lang || '').toLowerCase().split('-')[0] as AmaraLanguage;
  return SUPPORTED_LANGUAGES.includes(clean) ? clean : 'es';
}

function getSlugFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const isLanguagePrefix = SUPPORTED_LANGUAGES.includes(first as AmaraLanguage);

  return isLanguagePrefix ? segments.slice(1).join('/') : segments.join('/');
}

function buildLocalizedUrl(
  origin: string,
  slug: string,
  lang: AmaraLanguage
): string {
  const normalizedOrigin = origin.replace(/\/+$/, '');

  if (!slug) {
    return lang === 'es'
      ? `${normalizedOrigin}/`
      : `${normalizedOrigin}/${lang}/`;
  }

  return lang === 'es'
    ? `${normalizedOrigin}/${slug}`
    : `${normalizedOrigin}/${lang}/${slug}`;
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

function normalizeBrandTitle(rawTitle: string | undefined): string {
  const title = (rawTitle ?? '').trim();

  if (!title) {
    return 'AMARA';
  }

  if (/^AMARA$/i.test(title)) {
    return 'AMARA';
  }

  const stripBrandPrefix = title.replace(
    /^AMARA(?:\s*(?:\||-|–|—|:)\s*|\s+)/i,
    ''
  ).trim();

  if (!stripBrandPrefix) {
    return 'AMARA';
  }

  return `AMARA | ${stripBrandPrefix}`;
}

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
  const slug = getSlugFromPathname(pathname);
  const ownedLanguages = getOwnedLanguagesForSlug(slug, currentLang);

  const canonicalUrl = buildLocalizedUrl(origin, slug, currentLang);

  const hreflangs = ownedLanguages.map((lang) => ({
    hreflang: lang,
    href: buildLocalizedUrl(origin, slug, lang)
  }));

  if (ownedLanguages.includes('es')) {
    hreflangs.push({
      hreflang: 'x-default',
      href: buildLocalizedUrl(origin, slug, 'es')
    });
  }

  return {
    current,
    canonicalUrl,
    hreflangs,
    ogImage: toAbsoluteUrl(seo?.ogImage, origin),
    systemBlock: JSON.stringify({
      version: seo?.version,
      pageType: seo?.pageType,
      lang: currentLang
    })
  };
}
