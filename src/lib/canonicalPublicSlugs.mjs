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
  'frigiliana-hospitality-property-for-sale',
  'frigiliana-location',
  'frigiliana-or-nerja',
  'nerja-location',
  'getting-to-nerja',
  'nerja-daily-life',
  'nerja-geography',
  'nerja-weather',
  'nerja-where-to-stay',
  'nerja-nightlife',
  'tarifa-location',
  'getting-to-tarifa',
  'tarifa-geography',
  'tarifa-where-to-stay',
  'tarifa-weather',
  'tarifa-daily-life',
  'tarifa-winter-stays',
  'tarifa-experience',
  'tarifa-wind-kitesurfing',
  'tarifa-beaches',
  'tarifa-food-evening-life',
  'tarifa-nature-wildlife',
  'tarifa-old-town-history',
  'tarifa-bolonia-baelo-claudia',
  'frigiliana-market',
  'frigiliana-beaches',
  'frigiliana-hiking',
  'frigiliana-restaurants',
  'frigiliana-festivals',
  'frigiliana-wellness',
  'frigiliana-day-trips',
  'frigiliana-netflix-dos-tumbas',
  'explore-frigiliana-nerja',
  'frigiliana-parking',
  'frigiliana-streets-stairs',
  'frigiliana-weather',
  'frigiliana-winter-stays',
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
