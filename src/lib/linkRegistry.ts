import { buildOwnedLocalizedPath } from './routeOwnership';
import { buildBookingLandingUrl } from './directBooking';

// src/lib/linkRegistry.ts
/**
 * AMARA Link Registry — Astro SSOT
 *
 * Architectural intent:
 * - Keep current AMARA link keys in one central Astro registry.
 * - Allow resolveLink(...) to stay simple and deterministic.
 */

export const linkRegistry = {
  version: '2026-08-11-registry-v4.2',
  updated_at: '2026-08-11',
  base: '/',
  links: {
    /* =========================================================
       CORE
    ========================================================= */
    home: {
      en: buildOwnedLocalizedPath('', 'en'),
      de: buildOwnedLocalizedPath('', 'de'),
      es: buildOwnedLocalizedPath('', 'es'),
      nl: buildOwnedLocalizedPath('', 'nl'),
      sv: buildOwnedLocalizedPath('', 'sv')
    },
    book: {
      en: buildBookingLandingUrl('en'),
      de: buildBookingLandingUrl('de'),
      es: buildBookingLandingUrl('es'),
      nl: buildBookingLandingUrl('nl'),
      sv: buildBookingLandingUrl('sv')
    },
    about: {
      en: buildOwnedLocalizedPath('amara-about-us', 'en'),
      de: buildOwnedLocalizedPath('amara-about-us', 'de'),
      es: buildOwnedLocalizedPath('amara-about-us', 'es'),
      nl: buildOwnedLocalizedPath('amara-about-us', 'nl'),
      sv: buildOwnedLocalizedPath('amara-about-us', 'sv')
    },
    amenities: {
      en: buildOwnedLocalizedPath('comfort-amenities', 'en'),
      de: buildOwnedLocalizedPath('comfort-amenities', 'de'),
      es: buildOwnedLocalizedPath('comfort-amenities', 'es'),
      nl: buildOwnedLocalizedPath('comfort-amenities', 'nl'),
      sv: buildOwnedLocalizedPath('comfort-amenities', 'sv')
    },
    arrival_guide: {
      en: buildOwnedLocalizedPath('directions-arrival-guide', 'en'),
      de: buildOwnedLocalizedPath('directions-arrival-guide', 'de'),
      es: buildOwnedLocalizedPath('directions-arrival-guide', 'es'),
      nl: buildOwnedLocalizedPath('directions-arrival-guide', 'nl'),
      sv: buildOwnedLocalizedPath('directions-arrival-guide', 'sv')
    },
    direct_booking_benefits: {
      en: buildOwnedLocalizedPath('direct-booking-benefits', 'en'),
      de: buildOwnedLocalizedPath('direct-booking-benefits', 'de'),
      es: buildOwnedLocalizedPath('direct-booking-benefits', 'es'),
      nl: buildOwnedLocalizedPath('direct-booking-benefits', 'nl'),
      sv: buildOwnedLocalizedPath('direct-booking-benefits', 'sv')
    },
    reviews_hub: {
      en: buildOwnedLocalizedPath('guest-reviews', 'en'),
      de: buildOwnedLocalizedPath('guest-reviews', 'de'),
      es: buildOwnedLocalizedPath('guest-reviews', 'es'),
      nl: buildOwnedLocalizedPath('guest-reviews', 'nl'),
      sv: buildOwnedLocalizedPath('guest-reviews', 'sv')
    },
    instagram_landing: {
      en: buildOwnedLocalizedPath('instagram', 'en'),
      de: buildOwnedLocalizedPath('instagram', 'de'),
      es: buildOwnedLocalizedPath('instagram', 'es'),
      nl: buildOwnedLocalizedPath('instagram', 'nl'),
      sv: buildOwnedLocalizedPath('instagram', 'sv')
    },
    romantic_hideaways: {
      en: buildOwnedLocalizedPath('romantic-hideaways', 'en'),
      de: buildOwnedLocalizedPath('romantic-hideaways', 'de'),
      es: buildOwnedLocalizedPath('romantic-hideaways', 'es'),
      nl: buildOwnedLocalizedPath('romantic-hideaways', 'nl'),
      sv: buildOwnedLocalizedPath('romantic-hideaways', 'sv')
    },
    property_sale: {
      en: buildOwnedLocalizedPath('frigiliana-hospitality-property-for-sale', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-hospitality-property-for-sale', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-hospitality-property-for-sale', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-hospitality-property-for-sale', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-hospitality-property-for-sale', 'sv')
    },
instagram: 'https://www.instagram.com/amaralodging/',
journal: { en: '/journal/', de: '/de/journal/', es: '/diario/', nl: '/nl/journal/', sv: '/sv/journal/' },
contact: { en: '/contact/', de: '/de/kontakt/', es: '/contacto/', nl: '/nl/contact/', sv: '/sv/kontakt/' },
archive: { en: '/archive/', de: '/de/archiv/', es: '/archivo/', nl: '/nl/archief/', sv: '/sv/arkiv/' },
legal_notice: {
  en: buildOwnedLocalizedPath('legal-notice', 'en'),
  de: buildOwnedLocalizedPath('legal-notice', 'de'),
  es: buildOwnedLocalizedPath('legal-notice', 'es'),
  nl: buildOwnedLocalizedPath('legal-notice', 'nl'),
  sv: buildOwnedLocalizedPath('legal-notice', 'sv')
},

/* =========================================================
       EXPLORE
    ========================================================= */
    explore_hub: {
      en: buildOwnedLocalizedPath('explore-frigiliana-nerja', 'en'),
      de: buildOwnedLocalizedPath('explore-frigiliana-nerja', 'de'),
      es: buildOwnedLocalizedPath('explore-frigiliana-nerja', 'es'),
      nl: buildOwnedLocalizedPath('explore-frigiliana-nerja', 'nl'),
      sv: buildOwnedLocalizedPath('explore-frigiliana-nerja', 'sv')
    },
    frigiliana_netflix_dos_tumbas: {
      en: buildOwnedLocalizedPath('frigiliana-netflix-dos-tumbas', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-netflix-dos-tumbas', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-netflix-dos-tumbas', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-netflix-dos-tumbas', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-netflix-dos-tumbas', 'sv')
    },

    /* =========================================================
       LOCATIONS
    ========================================================= */
    locations_hub: { en: '/en/locations', de: '/de/locations', es: '/locations', nl: '/nl/locations', sv: '/sv/locations' },
    location_frigiliana: { en: '/en/frigiliana-location', de: '/de/frigiliana-location', es: '/frigiliana-location', nl: '/nl/frigiliana-location', sv: '/sv/frigiliana-location' },
    location_nerja: {
      en: buildOwnedLocalizedPath('nerja-location', 'en'),
      de: buildOwnedLocalizedPath('nerja-location', 'de'),
      es: buildOwnedLocalizedPath('nerja-location', 'es'),
      nl: buildOwnedLocalizedPath('nerja-location', 'nl'),
      sv: buildOwnedLocalizedPath('nerja-location', 'sv')
    },
    nerja_nightlife_authority: {
      en: buildOwnedLocalizedPath('nerja-nightlife', 'en'),
      de: buildOwnedLocalizedPath('nerja-nightlife', 'de'),
      es: buildOwnedLocalizedPath('nerja-nightlife', 'es'),
      nl: buildOwnedLocalizedPath('nerja-nightlife', 'nl'),
      sv: buildOwnedLocalizedPath('nerja-nightlife', 'sv')
    },
    location_tarifa: {
      en: buildOwnedLocalizedPath('tarifa-location', 'en'),
      de: buildOwnedLocalizedPath('tarifa-location', 'de'),
      es: buildOwnedLocalizedPath('tarifa-location', 'es'),
      nl: buildOwnedLocalizedPath('tarifa-location', 'nl'),
      sv: buildOwnedLocalizedPath('tarifa-location', 'sv')
    },

    /* =========================================================
       TARIFA — AUTHORITY (PUBLIC)
    ========================================================= */
    tarifa_experience_hub: {
      en: buildOwnedLocalizedPath('tarifa-experience', 'en'),
      de: buildOwnedLocalizedPath('tarifa-experience', 'de'),
      es: buildOwnedLocalizedPath('tarifa-experience', 'es'),
      nl: buildOwnedLocalizedPath('tarifa-experience', 'nl'),
      sv: buildOwnedLocalizedPath('tarifa-experience', 'sv')
    },
    tarifa_wind_kitesurfing_authority: {
      en: buildOwnedLocalizedPath('tarifa-wind-kitesurfing', 'en'),
      de: buildOwnedLocalizedPath('tarifa-wind-kitesurfing', 'de'),
      es: buildOwnedLocalizedPath('tarifa-wind-kitesurfing', 'es'),
      nl: buildOwnedLocalizedPath('tarifa-wind-kitesurfing', 'nl'),
      sv: buildOwnedLocalizedPath('tarifa-wind-kitesurfing', 'sv')
    },
    tarifa_beaches_authority: {
      en: buildOwnedLocalizedPath('tarifa-beaches', 'en'),
      de: buildOwnedLocalizedPath('tarifa-beaches', 'de'),
      es: buildOwnedLocalizedPath('tarifa-beaches', 'es'),
      nl: buildOwnedLocalizedPath('tarifa-beaches', 'nl'),
      sv: buildOwnedLocalizedPath('tarifa-beaches', 'sv')
    },

    /* =========================================================
       FRIGILIANA — (NEW)
    ========================================================= */
    faq_general: {
      en: buildOwnedLocalizedPath('faq-general', 'en'),
      de: buildOwnedLocalizedPath('faq-general', 'de'),
      es: buildOwnedLocalizedPath('faq-general', 'es'),
      nl: buildOwnedLocalizedPath('faq-general', 'nl'),
      sv: buildOwnedLocalizedPath('faq-general', 'sv')
    },
    frigiliana_faq: {
      en: buildOwnedLocalizedPath('frigiliana-faq', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-faq', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-faq', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-faq', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-faq', 'sv')
    },
    frigiliana_market: {
      en: buildOwnedLocalizedPath('frigiliana-market', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-market', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-market', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-market', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-market', 'sv')
    },
    frigiliana_hiking_authority: {
      en: buildOwnedLocalizedPath('frigiliana-hiking', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-hiking', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-hiking', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-hiking', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-hiking', 'sv')
    },
    frigiliana_parking: {
      en: buildOwnedLocalizedPath('frigiliana-parking', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-parking', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-parking', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-parking', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-parking', 'sv')
    },
    frigiliana_stairs: {
      en: buildOwnedLocalizedPath('frigiliana-streets-stairs', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-streets-stairs', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-streets-stairs', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-streets-stairs', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-streets-stairs', 'sv')
    },
    getting_to_frigiliana: {
      en: buildOwnedLocalizedPath('getting-to-frigiliana', 'en'),
      de: buildOwnedLocalizedPath('getting-to-frigiliana', 'de'),
      es: buildOwnedLocalizedPath('getting-to-frigiliana', 'es'),
      nl: buildOwnedLocalizedPath('getting-to-frigiliana', 'nl'),
      sv: buildOwnedLocalizedPath('getting-to-frigiliana', 'sv')
    },
    nerja_vs_frigiliana: {
      en: buildOwnedLocalizedPath('frigiliana-or-nerja', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-or-nerja', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-or-nerja', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-or-nerja', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-or-nerja', 'sv')
    },
    weather_frigiliana: {
      en: buildOwnedLocalizedPath('frigiliana-weather', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-weather', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-weather', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-weather', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-weather', 'sv')
    },
    frigiliana_winter_stays: {
      en: buildOwnedLocalizedPath('frigiliana-winter-stays', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-winter-stays', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-winter-stays', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-winter-stays', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-winter-stays', 'sv')
    },

    /* =========================================================
       FRIGILIANA — AUTHORITY (BRIDGED TO NERJA)
    ========================================================= */
    frigiliana_beaches_authority: {
      en: buildOwnedLocalizedPath('frigiliana-beaches', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-beaches', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-beaches', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-beaches', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-beaches', 'sv')
    },
    frigiliana_food_authority: {
      en: buildOwnedLocalizedPath('frigiliana-restaurants', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-restaurants', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-restaurants', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-restaurants', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-restaurants', 'sv')
    },
    frigiliana_daytrips_authority: {
      en: buildOwnedLocalizedPath('frigiliana-day-trips', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-day-trips', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-day-trips', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-day-trips', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-day-trips', 'sv')
    },
    frigiliana_events_authority: {
      en: buildOwnedLocalizedPath('frigiliana-festivals', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-festivals', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-festivals', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-festivals', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-festivals', 'sv')
    },
    frigiliana_wellness_authority: {
      en: buildOwnedLocalizedPath('frigiliana-wellness', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-wellness', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-wellness', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-wellness', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-wellness', 'sv')
    },

    /* =========================================================
       APARTMENTS
    ========================================================= */
    farah: {
      es: buildOwnedLocalizedPath('la-amara-farah', 'es'),
      en: buildOwnedLocalizedPath('la-amara-farah', 'en'),
      de: buildOwnedLocalizedPath('la-amara-farah', 'de'),
      nl: buildOwnedLocalizedPath('la-amara-farah', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-farah', 'sv')
    },
    lounis: {
      es: buildOwnedLocalizedPath('la-amara-lounis', 'es'),
      de: buildOwnedLocalizedPath('la-amara-lounis', 'de'),
      en: buildOwnedLocalizedPath('la-amara-lounis', 'en'),
      nl: buildOwnedLocalizedPath('la-amara-lounis', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-lounis', 'sv')
    },
    zaid: {
      en: buildOwnedLocalizedPath('la-amara-zaid', 'en'),
      es: buildOwnedLocalizedPath('la-amara-zaid', 'es'),
      de: buildOwnedLocalizedPath('la-amara-zaid', 'de'),
      nl: buildOwnedLocalizedPath('la-amara-zaid', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-zaid', 'sv')
    },
    maha: {
      en: buildOwnedLocalizedPath('la-amara-maha', 'en'),
      de: buildOwnedLocalizedPath('la-amara-maha', 'de'),
      es: buildOwnedLocalizedPath('la-amara-maha', 'es'),
      nl: buildOwnedLocalizedPath('la-amara-maha', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-maha', 'sv')
    },
    playa: {
      en: buildOwnedLocalizedPath('la-amara-playa', 'en'),
      de: buildOwnedLocalizedPath('la-amara-playa', 'de'),
      es: buildOwnedLocalizedPath('la-amara-playa', 'es'),
      nl: buildOwnedLocalizedPath('la-amara-playa', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-playa', 'sv')
    },
    casa: {
      en: buildOwnedLocalizedPath('la-amara-family-and-surf', 'en'),
      de: buildOwnedLocalizedPath('la-amara-family-and-surf', 'de'),
      es: buildOwnedLocalizedPath('la-amara-family-and-surf', 'es'),
      nl: buildOwnedLocalizedPath('la-amara-family-and-surf', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-family-and-surf', 'sv')
    },
    /* =========================================================
       EXTERNAL UTILITY
    ========================================================= */
    property_sale_enquiry: {
      en: 'mailto:hola@amara-lodging.es?subject=Casa%20AMARA%20Property%20Enquiry',
      de: 'mailto:hola@amara-lodging.es?subject=Casa%20AMARA%20Property%20Enquiry',
      es: 'mailto:hola@amara-lodging.es?subject=Casa%20AMARA%20Property%20Enquiry',
      nl: 'mailto:hola@amara-lodging.es?subject=Casa%20AMARA%20Property%20Enquiry',
      sv: 'mailto:hola@amara-lodging.es?subject=Casa%20AMARA%20Property%20Enquiry'
    },
  }
} as const;
