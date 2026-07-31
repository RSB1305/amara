import type { AmaraLanguage } from '../types/seo';

/**
 * Guest Guide pages are noindex/internal and intentionally kept out of
 * CANONICAL_PUBLIC_SLUGS, so this stays a small local helper rather than
 * routing through buildOwnedLocalizedPath()/the public slug policy.
 */
/**
 * `fromSlug` (optional) is the entry the link originates from. It is carried as a
 * `?from=` query param so the target page's SmartBackButton can return to the actual
 * originating hub instead of a fixed default — needed because several hub pages
 * (Farah, Lounis, Zaid, Maha, Playa) all link to the same shared detail pages.
 */
export function guideHref(slug: string, lang: AmaraLanguage, fromSlug?: string): string {
  const path = lang === 'es' ? `/${slug}` : `/${lang}/${slug}`;
  return fromSlug ? `${path}?from=${fromSlug}` : path;
}
