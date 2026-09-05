// @ts-check
/**
 * Sitemap policy of the public site. `@astrojs/sitemap` walks every built page;
 * this module decides which pages the sitemap lists and which localized
 * alternates each entry carries, so the decision lives next to the route
 * manifest instead of inside the Astro config.
 *
 * Public routes carry their own decision in the manifest (`indexable`). The gated
 * Guest Guide is file-routed outside the manifest and owned by
 * guest-experience/guide-routes.mjs; every path it recognizes stays out, in every
 * language and including the legacy `amara-experience` paths, as do the flat
 * legacy entry slugs (`/de/guesthome-frigiliana-farah`) that still render as
 * redirects to the access page. The remaining exclusions are legacy redirect
 * pages and internal surfaces.
 */
import { buildPublicRoutePath, resolvePublicRoute } from './publicRouteManifest.mjs';
import { GUEST_GUIDE_PAGES, resolveGuestGuidePath } from '../../guest-experience/guide-routes.mjs';

const LOCALE_PREFIXES = new Set(['de', 'en', 'es', 'nl', 'sv']);
/** Alternate order as published before the route migration. */
const ALTERNATE_LOCALES = ['es', 'de', 'en', 'nl', 'sv'];
/** Legacy redirect pages and internal surfaces outside the manifest. */
const EXCLUDED_SLUGS = new Set([
  'arrival-parking-guide',
  'frigiliana-arrival-parking-guide',
  'frigiliana-stairs-layout',
  'frigiliana-village-structure-stairs',
  'mercado-de-frigiliana',
  'frigiliana-markt',
  'frigiliana-marknaden',
  'frigiliana-ort-struktur-und-treppen',
  'estructura-y-escaleras-del-sitio-de-frigiliana',
  'structuur-en-trappen-van-de-frigiliana-site',
  'frigiliana-tomtens-struktur-och-trappor',
  'vacation-rentals-sitemap.xml',
  'test'
]);
const HOME_PATHNAMES = new Set(['/']);

/**
 * The path without locale prefix and surrounding slashes; '' for a home page.
 * @param {string} pathname @returns {string}
 */
function sitemapSlug(pathname) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

  if (!cleanPath) {
    return '';
  }

  const [firstSegment, ...restSegments] = cleanPath.split('/');

  return LOCALE_PREFIXES.has(firstSegment) ? restSegments.join('/') : cleanPath;
}

/** @param {string} pathname @returns {boolean} */
export function isSitemapPathAllowed(pathname) {
  const match = resolvePublicRoute(pathname);

  if (match) {
    return match.route.indexable;
  }

  if (resolveGuestGuidePath(pathname)) {
    return false;
  }

  const slug = sitemapSlug(pathname);

  if (EXCLUDED_SLUGS.has(slug) || Object.hasOwn(GUEST_GUIDE_PAGES, slug)) {
    return false;
  }

  return slug !== 'tools' && !slug.startsWith('tools/');
}

/**
 * Filter of the sitemap integration; `page` is the absolute page URL.
 * @param {string} page @returns {boolean}
 */
export function isSitemapPageAllowed(page) {
  return isSitemapPathAllowed(new URL(page).pathname);
}

/**
 * Trailing slashes never appear in AMARA paths; only the origin root keeps its own.
 * @param {string} url @returns {string}
 */
export function normalizeSitemapUrl(url) {
  const parsedUrl = new URL(url);

  if (!HOME_PATHNAMES.has(parsedUrl.pathname) && parsedUrl.pathname.endsWith('/')) {
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/+$/g, '');
  }

  return parsedUrl.href;
}

/**
 * Localized alternates of a page. Manifest routes know their native path per
 * language; a route outside the manifest shares one path body across locale
 * prefixes, as the integration's own i18n mode assumed before.
 * @param {string} page @returns {Array<{ lang: string; url: string }>}
 */
export function buildSitemapAlternates(page) {
  const pageUrl = new URL(page);
  const match = resolvePublicRoute(pageUrl.pathname);
  const slug = sitemapSlug(pageUrl.pathname);

  return ALTERNATE_LOCALES.map((locale) => {
    const pathname = match
      ? buildPublicRoutePath(match.route.key, locale)
      : locale === 'es'
        ? `/${slug}`
        : `/${locale}/${slug}`;

    return { lang: locale, url: normalizeSitemapUrl(new URL(pathname, pageUrl.origin).href) };
  });
}

/**
 * Serializer of the sitemap integration: normalized URL plus manifest alternates.
 * @param {import('@astrojs/sitemap').SitemapItem} item
 * @returns {import('@astrojs/sitemap').SitemapItem}
 */
export function normalizeSitemapItem(item) {
  return {
    ...item,
    url: normalizeSitemapUrl(item.url),
    links: buildSitemapAlternates(item.url)
  };
}
