import { buildOwnedLocalizedPath } from './routeOwnership';
import { buildBookingLandingUrl } from './directBooking';

function normalizeInternalSpanishPath(path: string): string {
  return path.replace(/^\/es\//, '/');
}

function normalizeRegistrySpanishPaths<T>(value: T): T {
  if (typeof value === 'string') {
    // Normalize only internal route paths. Absolute URLs stay untouched.
    return (value.startsWith('/') ? normalizeInternalSpanishPath(value) : value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeRegistrySpanishPaths(item)) as T;
  }

  if (value && typeof value === 'object') {
    const normalized: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      normalized[key] = normalizeRegistrySpanishPaths(child);
    }
    return normalized as T;
  }

  return value;
}

// src/lib/linkRegistry.ts
/**
 * AMARA Link Registry — Astro SSOT
 *
 * Architectural intent:
 * - Keep current AMARA link keys in one central Astro registry.
 * - Allow resolveLink(...) to stay simple and deterministic.
 */

export const linkRegistry = normalizeRegistrySpanishPaths({
  version: '2026-07-19-registry-v4.1',
  updated_at: '2026-07-19',
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
journal: { en: '/journal/', de: '/de/journal/', es: '/es/diario/', nl: '/nl/journal/', sv: '/sv/journal/' },
contact: { en: '/contact/', de: '/de/kontakt/', es: '/es/contacto/', nl: '/nl/contact/', sv: '/sv/kontakt/' },
archive: { en: '/archive/', de: '/de/archiv/', es: '/es/archivo/', nl: '/nl/archief/', sv: '/sv/arkiv/' },
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
    explore_beaches: {
      en: buildOwnedLocalizedPath('frigiliana-beaches', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-beaches', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-beaches', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-beaches', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-beaches', 'sv')
    },
    explore_culture: {
      en: buildOwnedLocalizedPath('frigiliana-festivals', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-festivals', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-festivals', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-festivals', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-festivals', 'sv')
    },
    explore_daytrips: {
      en: buildOwnedLocalizedPath('frigiliana-day-trips', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-day-trips', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-day-trips', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-day-trips', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-day-trips', 'sv')
    },
    explore_food: {
      en: buildOwnedLocalizedPath('frigiliana-restaurants', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-restaurants', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-restaurants', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-restaurants', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-restaurants', 'sv')
    },
    explore_hiking: {
      en: buildOwnedLocalizedPath('frigiliana-hiking', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-hiking', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-hiking', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-hiking', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-hiking', 'sv')
    },
    explore_water: {
      en: buildOwnedLocalizedPath('frigiliana-beaches', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-beaches', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-beaches', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-beaches', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-beaches', 'sv')
    },
    explore_wellness: {
      en: buildOwnedLocalizedPath('frigiliana-wellness', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-wellness', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-wellness', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-wellness', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-wellness', 'sv')
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
    locations_hub: { en: '/en/locations', de: '/de/locations', es: '/es/locations', nl: '/nl/locations', sv: '/sv/locations' },
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
       TARIFA — GUEST GUIDE (UTILITY)
    ========================================================= */
    tarifa_guest_hub: { en: '/en/tarifa-guest-guide', de: '/de/tarifa-guest-guide', es: '/es/tarifa-guest-guide', nl: '/nl/tarifa-guest-guide', sv: '/sv/tarifa-guest-guide' },
    tarifa_guest_apartment: { en: '/en/tarifa-guest-apartment', de: '/de/tarifa-guest-apartment', es: '/es/tarifa-guest-apartment', nl: '/nl/tarifa-guest-apartment', sv: '/sv/tarifa-guest-apartment' },
    tarifa_guest_local_guide: { en: '/en/tarifa-guest-local-guide', de: '/de/tarifa-guest-local-guide', es: '/es/tarifa-guest-local-guide', nl: '/nl/tarifa-guest-local-guide', sv: '/sv/tarifa-guest-local-guide' },
    tarifa_guest_local_essentials: { en: '/en/tarifa-guest-local-essentials', de: '/de/tarifa-guest-local-essentials', es: '/es/tarifa-guest-local-essentials', nl: '/nl/tarifa-guest-local-essentials', sv: '/sv/tarifa-guest-local-essentials' },
    tarifa_guest_beaches: { en: '/en/tarifa-guest-beaches', de: '/de/tarifa-guest-beaches', es: '/es/tarifa-guest-beaches', nl: '/nl/tarifa-guest-beaches', sv: '/sv/tarifa-guest-beaches' },
    tarifa_guest_kitesurfing: { en: '/en/tarifa-guest-kitesurfing', de: '/de/tarifa-guest-kitesurfing', es: '/es/tarifa-guest-kitesurfing', nl: '/nl/tarifa-guest-kitesurfing', sv: '/sv/tarifa-guest-kitesurfing' },
    tarifa_guest_activities: { en: '/en/tarifa-guest-activities', de: '/de/tarifa-guest-activities', es: '/es/tarifa-guest-activities', nl: '/nl/tarifa-guest-activities', sv: '/sv/tarifa-guest-activities' },
    tarifa_guest_food_drink: { en: '/en/tarifa-guest-food-drink', de: '/de/tarifa-guest-food-drink', es: '/es/tarifa-guest-food-drink', nl: '/nl/tarifa-guest-food-drink', sv: '/sv/tarifa-guest-food-drink' },
    tarifa_guest_night_life: { en: '/en/tarifa-nightlife', de: '/de/tarifa-nightlife', es: '/es/tarifa-nightlife', nl: '/nl/tarifa-nightlife', sv: '/sv/tarifa-nightlife' },
    tarifa_guest_sightseeing: { en: '/en/tarifa-guest-sightseeing', de: '/de/tarifa-guest-sightseeing', es: '/es/tarifa-guest-sightseeing', nl: '/nl/tarifa-guest-sightseeing', sv: '/sv/tarifa-guest-sightseeing' },
    tarifa_guest_wind_weather: { en: '/en/tarifa-guest-wind-weather', de: '/de/tarifa-guest-wind-weather', es: '/es/tarifa-guest-wind-weather', nl: '/nl/tarifa-guest-wind-weather', sv: '/sv/tarifa-guest-wind-weather' },

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
    frigiliana_stairs_layout: {
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
    arrival_parking_guide: {
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

    /* =========================================================
       FRIGILIANA — GUEST GUIDE (UTILITY LAYER)
    ========================================================= */
    frigiliana_guest_local_guide: { en: '/en/frigiliana-guest-local-guide', de: '/de/frigiliana-guest-local-guide', es: '/es/frigiliana-guest-local-guide', nl: '/nl/frigiliana-guest-local-guide', sv: '/sv/frigiliana-guest-local-guide' },
    frigiliana_guest_beaches: { en: '/en/frigiliana-guest-beaches', de: '/de/frigiliana-guest-beaches', es: '/es/frigiliana-guest-beaches', nl: '/nl/frigiliana-guest-beaches', sv: '/sv/frigiliana-guest-beaches' },
    frigiliana_guest_food: { en: '/en/frigiliana-guest-restaurants', de: '/de/frigiliana-guest-restaurants', es: '/es/frigiliana-guest-restaurants', nl: '/nl/frigiliana-guest-restaurants', sv: '/sv/frigiliana-guest-restaurants' },
    frigiliana_guest_hiking: { en: '/en/frigiliana-guest-hiking', de: '/de/frigiliana-guest-hiking', es: '/es/frigiliana-guest-hiking', nl: '/nl/frigiliana-guest-hiking', sv: '/sv/frigiliana-guest-hiking' },
    frigiliana_guest_day_trips: {
      en: buildOwnedLocalizedPath('frigiliana-day-trips', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-day-trips', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-day-trips', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-day-trips', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-day-trips', 'sv')
    },
    frigiliana_guest_sightseeing: { en: '/en/frigiliana-guest-sightseeing', de: '/de/frigiliana-guest-sightseeing', es: '/es/frigiliana-guest-sightseeing', nl: '/nl/frigiliana-guest-sightseeing', sv: '/sv/frigiliana-guest-sightseeing' },
    frigiliana_guest_events: { en: '/en/frigiliana-guest-festivals', de: '/de/frigiliana-guest-festivals', es: '/es/frigiliana-guest-festivals', nl: '/nl/frigiliana-guest-festivals', sv: '/sv/frigiliana-guest-festivals' },
    frigiliana_guest_wellness: {
      en: buildOwnedLocalizedPath('frigiliana-wellness', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-wellness', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-wellness', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-wellness', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-wellness', 'sv')
    },
    frigiliana_guest_adventure: { en: '/en/frigiliana-guest-adventure', de: '/de/frigiliana-guest-adventure', es: '/es/frigiliana-guest-adventure', nl: '/nl/frigiliana-guest-adventure', sv: '/sv/frigiliana-guest-adventure' },
    frigiliana_guest_flamenco_bachata: {
      en: '/en/guestwelcome-nerja-flamenco-bachata',
      de: '/de/guestwelcome-nerja-flamenco-bachata',
      es: '/es/guestwelcome-nerja-flamenco-bachata',
      nl: '/nl/guestwelcome-nerja-flamenco-bachata',
      sv: '/sv/guestwelcome-nerja-flamenco-bachata'
    },

    gmaps_search_kayak_nerja: 'https://www.google.com/maps/search/kayak+nerja',
    gmaps_search_jetski_nerja: 'https://www.google.com/maps/search/jetski+nerja',
    gmaps_search_harley_nerja: 'https://www.google.com/maps/search/harley+davidson+nerja',

    nerja_guest_restaurants: { en: '/en/nerja-guest-restaurants', de: '/de/nerja-guest-restaurants', es: '/es/nerja-guest-restaurants', nl: '/nl/nerja-guest-restaurants', sv: '/sv/nerja-guest-restaurants' },
    nerja_guest_breakfast: { en: '/en/nerja-guest-breakfast', de: '/de/nerja-guest-breakfast', es: '/es/nerja-guest-breakfast', nl: '/nl/nerja-guest-breakfast', sv: '/sv/nerja-guest-breakfast' },
    nerja_guest_nightlife: {
      en: buildOwnedLocalizedPath('nerja-nightlife', 'en'),
      de: buildOwnedLocalizedPath('nerja-nightlife', 'de'),
      es: buildOwnedLocalizedPath('nerja-nightlife', 'es'),
      nl: buildOwnedLocalizedPath('nerja-nightlife', 'nl'),
      sv: buildOwnedLocalizedPath('nerja-nightlife', 'sv')
    },
    frigiliana_guest_breakfast: { en: '/en/frigiliana-guest-breakfast', de: '/de/frigiliana-guest-breakfast', es: '/es/frigiliana-guest-breakfast', nl: '/nl/frigiliana-guest-breakfast', sv: '/sv/frigiliana-guest-breakfast' },

    /* =========================================================
       FRIGILIANA — GUEST WELCOME HUBS (APARTMENTS)
    ========================================================= */
    frigiliana_guest_welcome_farah: { en: '/en/guestwelcome-frigiliana-farah', de: '/de/guestwelcome-frigiliana-farah', es: '/es/guestwelcome-frigiliana-farah', nl: '/nl/guestwelcome-frigiliana-farah', sv: '/sv/guestwelcome-frigiliana-farah' },
    frigiliana_guest_welcome_lounis: { en: '/en/guestwelcome-frigiliana-lounis', de: '/de/guestwelcome-frigiliana-lounis', es: '/es/guestwelcome-frigiliana-lounis', nl: '/nl/guestwelcome-frigiliana-lounis', sv: '/sv/guestwelcome-frigiliana-lounis' },
    frigiliana_guest_welcome_zaid: { en: '/en/guestwelcome-frigiliana-zaid', de: '/de/guestwelcome-frigiliana-zaid', es: '/es/guestwelcome-frigiliana-zaid', nl: '/nl/guestwelcome-frigiliana-zaid', sv: '/sv/guestwelcome-frigiliana-zaid' },
    frigiliana_guest_welcome_maha: {
      en: '/en/guestwelcome-frigiliana-maha',
      de: '/de/guestwelcome-frigiliana-maha',
      es: '/es/guestwelcome-frigiliana-maha',
      nl: '/nl/guestwelcome-frigiliana-maha',
      sv: '/sv/guestwelcome-frigiliana-maha'
    },

    /* =========================================================
       FRIGILIANA — GUEST APARTMENT PAGES (DETAILS)
    ========================================================= */
    frigiliana_guest_apartment_farah: { en: '/en/guestwelcome-apartment-farah', de: '/de/guestwelcome-apartment-farah', es: '/es/guestwelcome-apartment-farah', nl: '/nl/guestwelcome-apartment-farah', sv: '/sv/guestwelcome-apartment-farah' },
    frigiliana_guest_apartment_lounis: { en: '/en/guestwelcome-apartment-lounis', de: '/de/guestwelcome-apartment-lounis', es: '/es/guestwelcome-apartment-lounis', nl: '/nl/guestwelcome-apartment-lounis', sv: '/sv/guestwelcome-apartment-lounis' },
    frigiliana_guest_apartment_zaid: {
      en: '/en/guestwelcome-apartment-zaid',
      de: '/de/guestwelcome-apartment-zaid',
      es: '/es/guestwelcome-apartment-zaid',
      nl: '/nl/guestwelcome-apartment-zaid',
      sv: '/sv/guestwelcome-apartment-zaid'
    },
    frigiliana_guest_apartment_maha: { en: '/en/guestwelcome-apartment-maha', de: '/de/guestwelcome-apartment-maha', es: '/es/guestwelcome-apartment-maha', nl: '/nl/guestwelcome-apartment-maha', sv: '/sv/guestwelcome-apartment-maha' },

    /* =========================================================
       FRIGILIANA — SHARED (ALL APARTMENTS)
    ========================================================= */
    frigiliana_guest_local_essentials: { en: '/en/frigiliana-guest-local-essentials', de: '/de/frigiliana-guest-local-essentials', es: '/es/frigiliana-guest-local-essentials', nl: '/nl/frigiliana-guest-local-essentials', sv: '/sv/frigiliana-guest-local-essentials' },
    frigiliana_guest_recommendations: { en: '/en/frigiliana-guest-recommendations', de: '/de/frigiliana-guest-recommendations', es: '/es/frigiliana-guest-recommendations', nl: '/nl/frigiliana-guest-recommendations', sv: '/sv/frigiliana-guest-recommendations' },

    /* =========================================================
       NERJA — GUEST WELCOME HUBS (APARTMENTS)
    ========================================================= */
    nerja_guest_welcome_playa: {
      en: '/en/guestwelcome-nerja-playa',
      de: '/de/guestwelcome-nerja-playa',
      es: '/es/guestwelcome-nerja-playa',
      nl: '/nl/guestwelcome-nerja-playa',
      sv: '/sv/guestwelcome-nerja-playa'
    },

    /* =========================================================
       NERJA — GUEST APARTMENT PAGES (DETAILS)
    ========================================================= */
    nerja_guest_apartment_playa: {
      en: '/en/guestwelcome-apartment-playa',
      de: '/de/guestwelcome-apartment-playa',
      es: '/es/guestwelcome-apartment-playa',
      nl: '/nl/guestwelcome-apartment-playa',
      sv: '/sv/guestwelcome-apartment-playa'
    },

    /* =========================================================
       NERJA — LOCAL ESSENTIALS
    ========================================================= */
    nerja_guest_local_essentials: {
      en: '/en/guestwelcome-nerja-local-essentials',
      de: '/de/guestwelcome-nerja-local-essentials',
      es: '/es/guestwelcome-nerja-local-essentials',
      nl: '/nl/guestwelcome-nerja-local-essentials',
      sv: '/sv/guestwelcome-nerja-local-essentials'
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
       LOCATION SPOKES (LEGACY)
    ========================================================= */
    parking_frigiliana_legacy: { en: '/en/frigiliana-parking-and-mobility', de: '/de/frigiliana-parking-and-mobility', es: '/es/frigiliana-parking-and-mobility', nl: '/nl/frigiliana-parking-and-mobility', sv: '/sv/frigiliana-parking-and-mobility' },
    winter_frigiliana: { en: '/en/winter-stay-frigiliana', de: '/de/winter-stay-frigiliana', es: '/es/winter-stay-frigiliana', nl: '/nl/winter-stay-frigiliana', sv: '/sv/winter-stay-frigiliana' },
    where_to_stay_frigiliana: {
      en: buildOwnedLocalizedPath('frigiliana-location', 'en'),
      de: buildOwnedLocalizedPath('frigiliana-location', 'de'),
      es: buildOwnedLocalizedPath('frigiliana-location', 'es'),
      nl: buildOwnedLocalizedPath('frigiliana-location', 'nl'),
      sv: buildOwnedLocalizedPath('frigiliana-location', 'sv')
    },

    /* =========================================================
       ROMANTIC (LEGACY MAPPING)
    ========================================================= */
    romantic_andalusia: {
      en: buildBookingLandingUrl('en'),
      de: buildBookingLandingUrl('de'),
      es: buildBookingLandingUrl('es'),
      nl: buildBookingLandingUrl('nl'),
      sv: buildBookingLandingUrl('sv')
    },
    comfort_amenities: {
      en: buildOwnedLocalizedPath('comfort-amenities', 'en'),
      de: buildOwnedLocalizedPath('comfort-amenities', 'de'),
      es: buildOwnedLocalizedPath('comfort-amenities', 'es'),
      nl: buildOwnedLocalizedPath('comfort-amenities', 'nl'),
      sv: buildOwnedLocalizedPath('comfort-amenities', 'sv')
    },

    /* =========================================================
       CANONICALS (SSOT)
    ========================================================= */
    about_canonical_en: 'https://amara-lodging.es/amara-about-us',
    about_canonical_de: 'https://amara-lodging.es/de/amara-about-us',
    about_canonical_es: 'https://amara-lodging.es/amara-about-us',
    about_canonical_nl: 'https://amara-lodging.es/nl/amara-about-us',
    about_canonical_sv: 'https://amara-lodging.es/sv/amara-about-us',

    reviews_canonical_en: 'https://amara-lodging.es/en/guest-reviews',
    reviews_canonical_de: 'https://amara-lodging.es/de/guest-reviews',
    reviews_canonical_es: 'https://amara-lodging.es/guest-reviews',
    reviews_canonical_nl: 'https://amara-lodging.es/nl/guest-reviews',
    reviews_canonical_sv: 'https://amara-lodging.es/sv/guest-reviews',

    direct_booking_canonical_en: 'https://amara-lodging.es/en/direct-booking-benefits',
    direct_booking_canonical_de: 'https://amara-lodging.es/de/direct-booking-benefits',
    direct_booking_canonical_es: 'https://amara-lodging.es/direct-booking-benefits',
    direct_booking_canonical_nl: 'https://amara-lodging.es/nl/direct-booking-benefits',
    direct_booking_canonical_sv: 'https://amara-lodging.es/sv/direct-booking-benefits',

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
    /**
     * Featured editorial “Aura” home — same canonical listing as Farah until a dedicated Aura URL exists.
     */
    lodging_aura: {
      es: buildOwnedLocalizedPath('la-amara-farah', 'es'),
      en: buildOwnedLocalizedPath('la-amara-farah', 'en'),
      de: buildOwnedLocalizedPath('la-amara-farah', 'de'),
      nl: buildOwnedLocalizedPath('la-amara-farah', 'nl'),
      sv: buildOwnedLocalizedPath('la-amara-farah', 'sv')
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
    maps_link: 'https://goo.gl/maps/dKxJz8u1z8u1z8u1',
    map_embed_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12791.956660602495!2d-3.8960883!3d36.7907572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7226190a604245%3A0x673033575ca8650!2sFrigiliana%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2ses!4v1708260000000!5m2!1sen!2ses',
    flights_link: 'https://www.google.com/travel/flights?tfs=CBwQARoaagwIAxIIL20vMDRncjISCjIwMjQtMDYtMTVAAUgBcAGCAQsI____________AZgBAg&tfu=KgIIAw'
  }
} as const);
