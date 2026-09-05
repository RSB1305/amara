import type { AmaraLanguage } from '../types/seo';
import { experienceGuideEntryHref } from '../../guest-experience/guide-routes.mjs';

/**
 * Guest Guide pages are noindex/internal and intentionally kept out of the
 * public route manifest. The localized segments are owned by
 * guest-experience/guide-routes.mjs, shared with the Cloudflare Functions.
 */
export function guideHref(slug: string, lang: AmaraLanguage): string {
  return experienceGuideEntryHref(slug, lang);
}
