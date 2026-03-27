import type { AmaraLanguage } from '../types/seo';

export const SUPPORTED_LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

const ROOT_SPANISH_PUBLIC_SLUGS = new Set([
  '',
  'amara-about-us',
  'direct-booking-benefits',
  'guest-reviews',
  'comfort-amenities',
  'faq-general',
  'legal-notice',
  'frigiliana-location'
]);

const SECONDARY_LANGUAGE_ONLY_SLUGS = new Set([
  'directions-arrival-guide'
]);

export function getOwnedLanguagesForSlug(
  slug: string,
  currentLang: AmaraLanguage
): AmaraLanguage[] {
  if (ROOT_SPANISH_PUBLIC_SLUGS.has(slug)) {
    return SUPPORTED_LANGUAGES;
  }

  if (SECONDARY_LANGUAGE_ONLY_SLUGS.has(slug)) {
    return SUPPORTED_LANGUAGES;
  }

  return [currentLang];
}

export function buildOwnedLocalizedPath(
  slug: string,
  lang: AmaraLanguage
): string {
  if (!slug) {
    return lang === 'es' ? '/' : `/${lang}/`;
  }

  return lang === 'es' ? `/${slug}` : `/${lang}/${slug}`;
}

export function buildSecondaryOnlyLocalizedPaths(slug: string) {
  return {
    en: buildOwnedLocalizedPath(slug, 'en'),
    de: buildOwnedLocalizedPath(slug, 'de'),
    es: buildOwnedLocalizedPath(slug, 'es'),
    nl: buildOwnedLocalizedPath(slug, 'nl'),
    sv: buildOwnedLocalizedPath(slug, 'sv')
  };
}
