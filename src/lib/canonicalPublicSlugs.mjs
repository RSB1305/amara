/**
 * Canonical public slugs are language-neutral infrastructure and must be
 * written in English. Localized or historical slugs belong only in redirects.
 *
 * Adding a public page requires explicit review of this list. The prebuild
 * slug-policy gate verifies that root routes, localized routes, link targets,
 * and redirect destinations stay aligned with it.
 */
export const STATIC_CANONICAL_PUBLIC_SLUGS = Object.freeze([
  '',
  'amara-about-us',
  'direct-booking-benefits',
  'guest-reviews',
  'comfort-amenities',
  'faq-general',
  'legal-notice',
  'frigiliana-faq',
  'frigiliana-location',
  'frigiliana-or-nerja',
  'nerja-location',
  'nerja-nightlife',
  'tarifa-location',
  'frigiliana-market',
  'frigiliana-beaches',
  'frigiliana-hiking',
  'frigiliana-restaurants',
  'frigiliana-festivals',
  'frigiliana-wellness',
  'frigiliana-day-trips',
  'explore-frigiliana-nerja',
  'frigiliana-parking',
  'frigiliana-streets-stairs',
  'frigiliana-weather',
  'getting-to-frigiliana',
  'instagram',
  'directions-arrival-guide',
  'romantic-hideaways'
]);

/**
 * Branded property identifiers are generated through Astro's dynamic rental
 * routes. They remain explicit so adding or renaming a property URL requires
 * the same route-policy review as a static page.
 */
export const DYNAMIC_CANONICAL_PUBLIC_SLUGS = Object.freeze([
  'la-amara-farah',
  'la-amara-lounis',
  'la-amara-zaid',
  'la-amara-maha',
  'la-amara-playa',
  'la-amara-family-and-surf'
]);

export const CANONICAL_PUBLIC_SLUGS = Object.freeze([
  ...STATIC_CANONICAL_PUBLIC_SLUGS,
  ...DYNAMIC_CANONICAL_PUBLIC_SLUGS
]);
