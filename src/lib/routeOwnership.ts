import type { AmaraLanguage } from '../types/seo';
import { CANONICAL_PUBLIC_SLUGS } from './canonicalPublicSlugs.mjs';

export const DEFAULT_LANGUAGE: AmaraLanguage = 'es';
export const SUPPORTED_LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

const ROOT_SPANISH_PUBLIC_SLUGS = new Set(CANONICAL_PUBLIC_SLUGS);

const DISABLED_PUBLIC_ROUTE_TOKENS = new Set([
  'locations_hub',
  'journal',
  'contact',
  'archive'
]);

interface PublicLinkOptions {
  disabled?: boolean;
  forceEnabled?: boolean;
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
  const rawPath = pathname.split(/[?#]/)[0] || '';
  const pathOnly = rawPath
    .replace(/\/index\.html$/i, '/')
    .replace(/\.html$/i, '');
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
    return lang === 'es' ? '/' : `/${lang}`;
  }

  return lang === 'es' ? `/${slug}` : `/${lang}/${slug}`;
}
