import type { AmaraLanguage } from '../types/seo';

export const DEFAULT_LANGUAGE: AmaraLanguage = 'es';
export const SUPPORTED_LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

const ROOT_SPANISH_PUBLIC_SLUGS = new Set([
  '',
  'amara-about-us',
  'direct-booking-benefits',
  'guest-reviews',
  'comfort-amenities',
  'faq-general',
  'legal-notice',
  'frigiliana-location',
  'frigiliana-parking',
  'frigiliana-weather',
  'instagram',
  'directions-arrival-guide',
  'romantic-hideaways',
  'la-amara-farah',
  'la-amara-lounis',
  'la-amara-zaid',
  'la-amara-maha',
  'la-amara-playa',
  'la-amara-family-and-surf'
]);

const DISABLED_PUBLIC_ROUTE_TOKENS = new Set([
  'explore_hub',
  'location_nerja',
  'location_tarifa',
  'locations_hub',
  'weather_frigiliana',
  'journal',
  'contact',
  'archive'
]);

const LOCATION_AUTHORITY_CENTER_TOKENS = new Set([
  'location_frigiliana',
  'location_nerja',
  'explore_hub'
]);

interface PublicLinkOptions {
  disabled?: boolean;
  forceEnabled?: boolean;
  locationAuthorityNav?: boolean;
}

export function isSupportedLanguage(lang: string): lang is AmaraLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as AmaraLanguage);
}

export function getOwnedPageStaticPaths() {
  return SUPPORTED_LANGUAGES
    .filter((lang) => lang !== DEFAULT_LANGUAGE)
    .map((lang) => ({ params: { lang } }));
}

export function getOwnedSlugFromPathname(pathname: string): string {
  const pathOnly = pathname.split(/[?#]/)[0] || '';
  const segments = pathOnly.split('/').filter(Boolean);
  const first = segments[0];

  return isSupportedLanguage(first) ? segments.slice(1).join('/') : segments.join('/');
}

export function isPublicLinkEnabled(
  token: string,
  options: PublicLinkOptions = {}
): boolean {
  if (options.disabled) {
    return false;
  }

  if (options.forceEnabled) {
    return true;
  }

  if (options.locationAuthorityNav && LOCATION_AUTHORITY_CENTER_TOKENS.has(token)) {
    return true;
  }

  return !DISABLED_PUBLIC_ROUTE_TOKENS.has(token);
}

export function getOwnedLanguagesForSlug(
  slug: string,
  currentLang: AmaraLanguage
): AmaraLanguage[] {
  if (ROOT_SPANISH_PUBLIC_SLUGS.has(slug)) {
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
