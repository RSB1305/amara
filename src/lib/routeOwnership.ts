import type { AmaraLanguage } from '../types/seo';
import {
  PUBLIC_ROUTES,
  buildPublicRoutePath,
  getPublicRoute,
  localizePublicPath,
  normalizePublicPathname,
  resolvePublicRoute,
  type PublicRoute
} from './publicRouteManifest.mjs';

export type { PublicRoute } from './publicRouteManifest.mjs';

export const DEFAULT_LANGUAGE: AmaraLanguage = 'es';
export const SUPPORTED_LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

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

export interface OwnedRouteMatch {
  route: PublicRoute;
  lang: AmaraLanguage;
}

export function isSupportedLanguage(lang: string): lang is AmaraLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as AmaraLanguage);
}

/** Every public route in manifest order; the catch-all pages generate from it. */
export function getOwnedPublicRoutes(): readonly PublicRoute[] {
  return PUBLIC_ROUTES;
}

export function getOwnedPublicRoute(key: string): PublicRoute {
  return getPublicRoute(key);
}

/**
 * Resolves a rendered pathname to the public route and language that own it.
 * Private routes (AMARA Experience access and guide pages, tools) return null
 * and keep their canonical on themselves.
 */
export function getOwnedRouteFromPathname(pathname: string): OwnedRouteMatch | null {
  const match = resolvePublicRoute(pathname);

  return match ? { route: match.route, lang: match.locale } : null;
}

/**
 * A private pathname rendered in one language, re-expressed for another. Only
 * the locale prefix changes; the path body is shared, as it is for every
 * route outside the manifest.
 */
export function buildPrivateLocalizedPath(pathname: string, lang: AmaraLanguage): string {
  const segments = normalizePublicPathname(pathname).split('/').filter(Boolean);

  if (segments[0] && isSupportedLanguage(segments[0])) {
    segments.shift();
  }

  return localizePublicPath(segments.join('/'), lang);
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

/** Public routes are published in every language; private routes own only the current one. */
export function getOwnedLanguagesForRoute(
  match: OwnedRouteMatch | null,
  currentLang: AmaraLanguage
): AmaraLanguage[] {
  return match ? SUPPORTED_LANGUAGES : [currentLang];
}

/** The localized public path of a manifest route key, e.g. `/de/frigiliana/anreise`. */
export function buildOwnedLocalizedPath(
  routeKey: string,
  lang: AmaraLanguage
): string {
  return buildPublicRoutePath(routeKey, lang);
}

/** Static params for explicit route files that render once per non-default language. */
export function getOwnedPageStaticPaths() {
  return SUPPORTED_LANGUAGES
    .filter((lang) => lang !== DEFAULT_LANGUAGE)
    .map((lang) => ({ params: { lang } }));
}
