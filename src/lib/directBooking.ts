import type { AmaraLanguage } from '../types/seo';

/**
 * AMARA Direct Booking — Lodgify checkout host
 *
 * This Astro build owns amara-lodging.es. A domain resolves to one host, so
 * once the apex points at Cloudflare Pages, Lodgify can no longer serve
 * anything under it — the checkout needs a host of its own. Lodgify keeps the
 * identical page structure there, so no rental slug has to change.
 *
 * Currently amara.lodgify.com: Lodgify rejects book.amara-lodging.es in "Use a
 * domain you own" with "This is on our list of unsupported domains", despite
 * support confirming in writing that it would work. Query is open with them.
 *
 * The custom subdomain buys less than it first appears. Lodgify runs the final
 * payment step on checkout.lodgify.com whatever domain fronts the site, so the
 * guest sees a lodgify.com host either way — the subdomain would only keep the
 * brand in the address bar for a few clicks longer. Not worth blocking on.
 *
 * Switching back is one line here; all booking links derive from it.
 *
 * Cutover order matters — whichever host is used must be set as Lodgify's main
 * domain before the apex is pointed at Cloudflare Pages.
 */
export const DIRECT_BOOKING_ORIGIN = 'https://amara.lodgify.com';

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
