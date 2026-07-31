import type { AmaraLanguage } from '../types/seo';

/**
 * Guest Guide pages are noindex/internal and intentionally kept out of
 * CANONICAL_PUBLIC_SLUGS, so this stays a small local helper rather than
 * routing through buildOwnedLocalizedPath()/the public slug policy.
 */
export function guideHref(slug: string, lang: AmaraLanguage): string {
  return lang === 'es' ? `/${slug}` : `/${lang}/${slug}`;
}
