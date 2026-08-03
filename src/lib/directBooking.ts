import type { AmaraLanguage } from '../types/seo';

/**
 * AMARA Direct Booking — Lodgify checkout host
 *
 * This Astro build owns amara-lodging.es. The Lodgify booking engine runs on
 * its own host so both can coexist on one brand: Lodgify keeps the identical
 * page structure, only the hostname differs. No rental slug has to change.
 *
 * Cutover order matters — the subdomain must be linked in Lodgify (and set as
 * its main domain) before the apex is pointed at Cloudflare Pages. DNS
 * propagation can take up to 48h.
 *
 * Fallback: if book.amara-lodging.es is ever unavailable, switch this single
 * constant to 'https://amara.lodgify.com'. Lodgify confirmed that host stays
 * active and independent of any custom domain.
 */
export const DIRECT_BOOKING_ORIGIN = 'https://book.amara-lodging.es';

/**
 * Lodgify prefixes Spanish with /es/. This site does not — Spanish is the
 * unprefixed default locale here. Booking URLs are absolute, so the registry's
 * Spanish path normalization leaves them untouched.
 */
function buildDirectBookingUrl(lang: AmaraLanguage, path: string): string {
  return `${DIRECT_BOOKING_ORIGIN}/${lang}/${path}`;
}

/** Deep link into a single rental on the Lodgify booking site. */
export function buildRentalBookingUrl(slug: string, lang: AmaraLanguage): string {
  return buildDirectBookingUrl(lang, slug);
}

/** Generic availability search landing page on the Lodgify booking site. */
export function buildBookingLandingUrl(lang: AmaraLanguage): string {
  return buildDirectBookingUrl(lang, 'book/');
}
