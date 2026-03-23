import type {
  AmaraAuthoringSeo,
  AmaraLanguage,
  AmaraSeoLanguageEntry
} from '../../types/seo';

const SUPPORTED_LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

export function normalizeLanguage(lang: string): AmaraLanguage {
  const clean = lang.toLowerCase().split('-')[0] as AmaraLanguage;
  return SUPPORTED_LANGUAGES.includes(clean) ? clean : 'en';
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
    return lang === 'en'
      ? `${normalizedOrigin}/`
      : `${normalizedOrigin}/${lang}/`;
  }

  return lang === 'en'
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

export function resolveSeoHead(
  seo: AmaraAuthoringSeo | undefined,
  origin: string,
  pathname: string,
  currentLang: AmaraLanguage
) {
  const current = resolveLanguageEntry(seo, currentLang);
  const slug = getSlugFromPathname(pathname);

  const canonicalUrl = buildLocalizedUrl(origin, slug, currentLang);

  const hreflangs = SUPPORTED_LANGUAGES.map((lang) => ({
    hreflang: lang,
    href: buildLocalizedUrl(origin, slug, lang)
  }));

  hreflangs.push({
    hreflang: 'x-default',
    href: buildLocalizedUrl(origin, slug, 'en')
  });

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
