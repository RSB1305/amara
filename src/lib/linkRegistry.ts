// src/lib/linkRegistry.ts
/**
 * AMARA Link Registry — Astro SSOT
 *
 * Source of truth:
 * The large legacy registry wins and is now the canonical Astro registry.
 *
 * Architectural intent:
 * - Preserve the full AMARA token universe inside Astro.
 * - Keep canonical link keys and legacy alias tokens in one central registry.
 * - Allow resolveLink(...) to stay simple and deterministic.
 *
 * Important:
 * - This file intentionally keeps legacy aliases for backward compatibility.
 * - If a legacy alias points to a key that does not exist in `links`,
 *   resolveLink(...) will throw only when that alias is actually used.
 */

export const linkRegistry = {
  version: '2026-02-26-registry-v4.0',
  updated_at: '2026-02-26',
  base: '/',
  links: {
    /* =========================================================
       CORE
    ========================================================= */
    home: { en: '/en/', de: '/de/', es: '/es/', nl: '/nl/', sv: '/sv/' },
    book: { en: '/en/book/', de: '/de/book/', es: '/es/book/', nl: '/nl/book/', sv: '/sv/book/' },
    about: { en: '/amara-about-us', de: '/de/amara-about-us', es: '/es/amara-about-us', nl: '/nl/amara-about-us', sv: '/sv/amara-about-us' },
    amenities: { en: '/en/comfort-amenities', de: '/de/comfort-amenities', es: '/es/comfort-amenities', nl: '/nl/comfort-amenities', sv: '/sv/comfort-amenities' },
    arrival_guide: { en: '/en/directions-arrival-guide', de: '/de/directions-arrival-guide', es: '/es/directions-arrival-guide', nl: '/nl/directions-arrival-guide', sv: '/sv/directions-arrival-guide' },
    direct_booking_benefits: { en: '/en/direct-booking-benefits', de: '/de/direct-booking-benefits', es: '/es/direct-booking-benefits', nl: '/nl/direct-booking-benefits', sv: '/sv/direct-booking-benefits' },
    reviews_hub: {
      en: '/en/guest-reviews',
      de: '/de/guest-reviews',
      es: '/es/guest-reviews',
      nl: '/nl/guest-reviews',
      sv: '/sv/guest-reviews'
    },
journal: { en: '/journal/', de: '/de/journal/', es: '/es/diario/', nl: '/nl/journal/', sv: '/sv/journal/' },
contact: { en: '/contact/', de: '/de/kontakt/', es: '/es/contacto/', nl: '/nl/contact/', sv: '/sv/kontakt/' },
archive: { en: '/archive/', de: '/de/archiv/', es: '/es/archivo/', nl: '/nl/archief/', sv: '/sv/arkiv/' },
legal_notice: { en: '/legal-notice/', de: '/de/legal-notice/', es: '/es/legal-notice/', nl: '/nl/legal-notice/', sv: '/sv/legal-notice/' },

/* =========================================================
       EXPLORE
    ========================================================= */
    explore_hub: { en: '/en/explore-frigiliana-nerja', de: '/de/explore-frigiliana-nerja', es: '/es/explore-frigiliana-nerja', nl: '/nl/explore-frigiliana-nerja', sv: '/sv/explore-frigiliana-nerja' },
    explore_beaches: { en: '/en/beaches-nerja-frigiliana', de: '/de/beaches-nerja-frigiliana', es: '/es/beaches-nerja-frigiliana', nl: '/nl/beaches-nerja-frigiliana', sv: '/sv/beaches-nerja-frigiliana' },
    explore_culture: { en: '/en/culture-frigiliana-nerja', de: '/de/culture-frigiliana-nerja', es: '/es/culture-frigiliana-nerja', nl: '/nl/culture-frigiliana-nerja', sv: '/sv/culture-frigiliana-nerja' },
    explore_daytrips: { en: '/en/day-trips-andalusia', de: '/de/day-trips-andalusia', es: '/es/day-trips-andalusia', nl: '/nl/day-trips-andalusia', sv: '/sv/day-trips-andalusia' },
    explore_food: { en: '/en/restaurants-frigiliana-nerja', de: '/de/restaurants-frigiliana-nerja', es: '/es/restaurants-frigiliana-nerja', nl: '/nl/restaurants-frigiliana-nerja', sv: '/sv/restaurants-frigiliana-nerja' },
    explore_hiking: { en: '/en/hiking-frigiliana-nerja', de: '/de/hiking-frigiliana-nerja', es: '/es/hiking-frigiliana-nerja', nl: '/nl/hiking-frigiliana-nerja', sv: '/sv/hiking-frigiliana-nerja' },
    explore_water: { en: '/en/beaches-nerja-frigiliana', de: '/de/beaches-nerja-frigiliana', es: '/es/beaches-nerja-frigiliana', nl: '/nl/beaches-nerja-frigiliana', sv: '/sv/beaches-nerja-frigiliana' },
    explore_wellness: { en: '/en/wellness', de: '/de/wellness', es: '/es/wellness', nl: '/nl/wellness', sv: '/sv/wellness' },

    /* =========================================================
       LOCATIONS
    ========================================================= */
    locations_hub: { en: '/en/locations', de: '/de/locations', es: '/es/locations', nl: '/nl/locations', sv: '/sv/locations' },
    location_frigiliana: { en: '/en/frigiliana-location', de: '/de/frigiliana-location', es: '/es/frigiliana-location', nl: '/nl/frigiliana-location', sv: '/sv/frigiliana-location' },
    location_nerja: { en: '/en/nerja-location', de: '/de/nerja-location', es: '/es/nerja-location', nl: '/nl/nerja-location', sv: '/sv/nerja-location' },
    location_tarifa: { en: '/en/tarifa-location', de: '/de/tarifa-location', es: '/es/tarifa-location', nl: '/nl/tarifa-location', sv: '/sv/tarifa-location' },

    /* =========================================================
       TARIFA — AUTHORITY (PUBLIC)
    ========================================================= */
    tarifa_beaches_authority: { en: '/en/tarifa-beaches', de: '/de/tarifa-beaches', es: '/es/tarifa-beaches', nl: '/nl/tarifa-beaches', sv: '/sv/tarifa-beaches' },

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
    frigiliana_faq: { en: '/en/frigiliana-faq', de: '/de/frigiliana-faq', es: '/es/frigiliana-faq', nl: '/nl/frigiliana-faq', sv: '/sv/frigiliana-faq' },
    frigiliana_parking: { en: '/en/frigiliana-parking', de: '/de/frigiliana-parking', es: '/es/frigiliana-parking', nl: '/nl/frigiliana-parking', sv: '/sv/frigiliana-parking' },
    frigiliana_stairs: { en: '/en/frigiliana-village-structure-stairs', de: '/de/frigiliana-village-structure-stairs', es: '/es/frigiliana-village-structure-stairs', nl: '/nl/frigiliana-village-structure-stairs', sv: '/sv/frigiliana-village-structure-stairs' },
    frigiliana_stairs_layout: { en: '/en/frigiliana-stairs-layout', de: '/de/frigiliana-stairs-layout', es: '/es/frigiliana-stairs-layout', nl: '/nl/frigiliana-stairs-layout', sv: '/sv/frigiliana-stairs-layout' },
    arrival_parking_guide: { en: '/en/arrival-parking-guide', de: '/de/arrival-parking-guide', es: '/es/arrival-parking-guide', nl: '/nl/arrival-parking-guide', sv: '/sv/arrival-parking-guide' },
    nerja_vs_frigiliana: { en: '/en/frigiliana-near-nerja', de: '/de/frigiliana-near-nerja', es: '/es/frigiliana-near-nerja', nl: '/nl/frigiliana-near-nerja', sv: '/sv/frigiliana-near-nerja' },
    weather_frigiliana: { en: '/en/frigiliana-weather', de: '/de/frigiliana-weather', es: '/es/frigiliana-weather', nl: '/nl/frigiliana-weather', sv: '/sv/frigiliana-weather' },

    /* =========================================================
       FRIGILIANA — GUEST GUIDE (UTILITY LAYER)
    ========================================================= */
    frigiliana_guest_local_guide: { en: '/en/frigiliana-guest-local-guide', de: '/de/frigiliana-guest-local-guide', es: '/es/frigiliana-guest-local-guide', nl: '/nl/frigiliana-guest-local-guide', sv: '/sv/frigiliana-guest-local-guide' },
    frigiliana_guest_beaches: { en: '/en/frigiliana-guest-beaches', de: '/de/frigiliana-guest-beaches', es: '/es/frigiliana-guest-beaches', nl: '/nl/frigiliana-guest-beaches', sv: '/sv/frigiliana-guest-beaches' },
    frigiliana_guest_food: { en: '/en/frigiliana-guest-restaurants', de: '/de/frigiliana-guest-restaurants', es: '/es/frigiliana-guest-restaurants', nl: '/nl/frigiliana-guest-restaurants', sv: '/sv/frigiliana-guest-restaurants' },
    frigiliana_guest_hiking: { en: '/en/frigiliana-guest-hiking', de: '/de/frigiliana-guest-hiking', es: '/es/frigiliana-guest-hiking', nl: '/nl/frigiliana-guest-hiking', sv: '/sv/frigiliana-guest-hiking' },
    frigiliana_guest_day_trips: { en: '/en/frigiliana-guest-day-trips', de: '/de/frigiliana-guest-day-trips', es: '/es/frigiliana-guest-day-trips', nl: '/nl/frigiliana-guest-day-trips', sv: '/sv/frigiliana-guest-day-trips' },
    frigiliana_guest_sightseeing: { en: '/en/frigiliana-guest-sightseeing', de: '/de/frigiliana-guest-sightseeing', es: '/es/frigiliana-guest-sightseeing', nl: '/nl/frigiliana-guest-sightseeing', sv: '/sv/frigiliana-guest-sightseeing' },
    frigiliana_guest_events: { en: '/en/frigiliana-guest-festivals', de: '/de/frigiliana-guest-festivals', es: '/es/frigiliana-guest-festivals', nl: '/nl/frigiliana-guest-festivals', sv: '/sv/frigiliana-guest-festivals' },
    frigiliana_guest_wellness: { en: '/en/frigiliana-guest-wellness', de: '/de/frigiliana-guest-wellness', es: '/es/frigiliana-guest-wellness', nl: '/nl/frigiliana-guest-wellness', sv: '/sv/frigiliana-guest-wellness' },
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
    nerja_guest_nightlife: { en: '/en/nerja-guest-nightlife', de: '/de/nerja-guest-nightlife', es: '/es/nerja-guest-nightlife', nl: '/nl/nerja-guest-nightlife', sv: '/sv/nerja-guest-nightlife' },
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
    frigiliana_beaches_authority: { en: '/en/beaches-nerja-frigiliana', de: '/de/beaches-nerja-frigiliana', es: '/es/beaches-nerja-frigiliana', nl: '/nl/beaches-nerja-frigiliana', sv: '/sv/beaches-nerja-frigiliana' },

    /* =========================================================
       LOCATION SPOKES (LEGACY)
    ========================================================= */
    parking_frigiliana_legacy: { en: '/en/frigiliana-parking-and-mobility', de: '/de/frigiliana-parking-and-mobility', es: '/es/frigiliana-parking-and-mobility', nl: '/nl/frigiliana-parking-and-mobility', sv: '/sv/frigiliana-parking-and-mobility' },
    winter_frigiliana: { en: '/en/winter-stay-frigiliana', de: '/de/winter-stay-frigiliana', es: '/es/winter-stay-frigiliana', nl: '/nl/winter-stay-frigiliana', sv: '/sv/winter-stay-frigiliana' },
    where_to_stay_frigiliana: { en: '/en/where-to-stay-frigiliana', de: '/de/where-to-stay-frigiliana', es: '/es/where-to-stay-frigiliana', nl: '/nl/where-to-stay-frigiliana', sv: '/sv/where-to-stay-frigiliana' },

    /* =========================================================
       ROMANTIC (LEGACY MAPPING)
    ========================================================= */
    romantic_andalusia: { en: '/en/book/', de: '/de/book/', es: '/es/book/', nl: '/nl/book/', sv: '/sv/book/' },
    comfort_amenities: { en: '/en/comfort-amenities', de: '/de/comfort-amenities', es: '/es/comfort-amenities', nl: '/nl/comfort-amenities', sv: '/sv/comfort-amenities' },

    /* =========================================================
       CANONICALS (SSOT)
    ========================================================= */
    about_canonical_en: 'https://amara-lodging.es/amara-about-us',
    about_canonical_de: 'https://amara-lodging.es/de/amara-about-us',
    about_canonical_es: 'https://amara-lodging.es/es/amara-about-us',
    about_canonical_nl: 'https://amara-lodging.es/nl/amara-about-us',
    about_canonical_sv: 'https://amara-lodging.es/sv/amara-about-us',

    reviews_canonical_en: 'https://amara-lodging.es/en/guest-reviews',
    reviews_canonical_de: 'https://amara-lodging.es/de/guest-reviews',
    reviews_canonical_es: 'https://amara-lodging.es/es/guest-reviews',
    reviews_canonical_nl: 'https://amara-lodging.es/nl/guest-reviews',
    reviews_canonical_sv: 'https://amara-lodging.es/sv/guest-reviews',

    direct_booking_canonical_en: 'https://amara-lodging.es/en/direct-booking-benefits',
    direct_booking_canonical_de: 'https://amara-lodging.es/de/direct-booking-benefits',
    direct_booking_canonical_es: 'https://amara-lodging.es/es/direct-booking-benefits',
    direct_booking_canonical_nl: 'https://amara-lodging.es/nl/direct-booking-benefits',
    direct_booking_canonical_sv: 'https://amara-lodging.es/sv/direct-booking-benefits',

    /* =========================================================
       APARTMENTS
    ========================================================= */
    farah: {
      es: 'https://amara-lodging.es/es/la-amara-farah-habitacion-doble-romantica',
      en: 'https://amara-lodging.es/en/la-amara-farah-romantic-double-retreat',
      de: 'https://amara-lodging.es/de/la-amara-farah-casa-rural-frigiliana',
      nl: 'https://amara-lodging.es/nl/la-amara-farah-romantic-double-retreat',
      sv: 'https://amara-lodging.es/sv/la-amara-farah-casa-rural-frigiliana'
    },
    lounis: {
      es: 'https://amara-lodging.es/es/la-amara-lounis-apartamento-historico',
      de: 'https://amara-lodging.es/de/la-amara-lounis-casa-rural-in-frigiliana',
      en: 'https://amara-lodging.es/en/la-amara-lounis-historic-romantic-stay',
      nl: 'https://amara-lodging.es/nl/la-amara-lounis-historic-romantic-stay',
      sv: 'https://amara-lodging.es/sv/la-amara-lounis-casa-rural-frigiliana'
    },
    zaid: {
      en: 'https://amara-lodging.es/en/la-amara-zaid-romantic-retreat-with-terrace',
      es: 'https://amara-lodging.es/es/la-amara-zaid-refugio-romantico-con-terraza',
      de: 'https://amara-lodging.es/de/la-amara-zaid-casa-rural-frigiliana',
      nl: 'https://amara-lodging.es/nl/de-amara-zaid-romantisch-toevluchtsoord-met-terras---appartement-in-frigiliana',
      sv: 'https://amara-lodging.es/sv/la-amara-zaid-casa-rural-frigiliana'
    },
    maha: {
      en: 'https://amara-lodging.es/en/la-amara-maha-romantic-terrace-retreat',
      de: 'https://amara-lodging.es/de/la-amara-maha-casa-rural-frigiliana',
      es: 'https://amara-lodging.es/es/la-amara-maha-apartamento-con-gran-terraza',
      nl: 'https://amara-lodging.es/nl/la-amara-maha-romantic-terrace-retreat',
      sv: 'https://amara-lodging.es/sv/la-amara-maha-casa-rural-frigiliana'
    },
    playa: {
      en: 'https://amara-lodging.es/en/la-amara-playa-apartment-nerja',
      de: 'https://amara-lodging.es/de/la-amara-playa-apartment-nerja',
      es: 'https://amara-lodging.es/es/la-amara-playa-apartamento-nerja',
      nl: 'https://amara-lodging.es/nl/la-amara-playa-apartment-nerja',
      sv: 'https://amara-lodging.es/sv/la-amara-beach-apartment-nerja'
    },
    casa: {
      en: 'https://amara-lodging.es/en/la-amara-family-surf-with-oceanview-and-pool',
      de: 'https://amara-lodging.es/de/la-amara-family-home-with-oceanview-and-pool',
      es: 'https://amara-lodging.es/es/la-amara-casa-familiar-con-vista-al-mar-y-piscina',
      nl: 'https://amara-lodging.es/en/la-amara-family-surf-with-oceanview-and-pool',
      sv: 'https://amara-lodging.es/sv/amara-family-surf-with-oceanview-and-pool'
    },



    /* =========================================================
       EXTERNAL UTILITY
    ========================================================= */
    maps_link: 'https://goo.gl/maps/dKxJz8u1z8u1z8u1',
    map_embed_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12791.956660602495!2d-3.8960883!3d36.7907572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7226190a604245%3A0x673033575ca8650!2sFrigiliana%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2ses!4v1708260000000!5m2!1sen!2ses',
    flights_link: 'https://www.google.com/travel/flights?tfs=CBwQARoaagwIAxIIL20vMDRncjISCjIwMjQtMDYtMTVAAUgBcAGCAQsI____________AZgBAg&tfu=KgIIAw'
  },
  legacyAliases: {
    /* =========================================================
       CORE (LEGACY TOKENS)
    ========================================================= */
    __HOME_URL__: { lang: 'auto', key: 'home' },
    __BOOK_URL__: { lang: 'auto', key: 'book' },
    __BOOKING_URL__: { lang: 'auto', key: 'book' },
    __AMENITIES_URL__: { lang: 'auto', key: 'amenities' },
    __ARRIVAL_GUIDE_URL__: { lang: 'auto', key: 'arrival_guide' },

    __ABOUT_URL__: { lang: 'auto', key: 'about' },
    __DIRECT_BOOKING_BENEFITS_URL__: { lang: 'auto', key: 'direct_booking_benefits' },
    __DIRECT_BOOKING_URL__: { lang: 'auto', key: 'direct_booking_benefits' },
    __REVIEWS_HUB_URL__: { lang: 'auto', key: 'reviews_hub' },
    __REVIEWS_URL__: { lang: 'auto', key: 'reviews_hub' },

    /* =========================================================
       LOCATIONS (LEGACY TOKENS)
    ========================================================= */
    __LOCATIONS_HUB_URL__: { lang: 'auto', key: 'locations_hub' },
    __LOCATION_FRIGILIANA_URL__: { lang: 'auto', key: 'location_frigiliana' },
    __LOCATION_NERJA_URL__: { lang: 'auto', key: 'location_nerja' },
    __LOCATION_TARIFA_URL__: { lang: 'auto', key: 'location_tarifa' },

    __FRIGILIANA_URL__: { lang: 'auto', key: 'location_frigiliana' },
    __NERJA_URL__: { lang: 'auto', key: 'location_nerja' },
    __TARIFA_URL__: { lang: 'auto', key: 'location_tarifa' },

    /* =========================================================
       TARIFA — AUTHORITY (LEGACY TOKENS)
    ========================================================= */
    __TARIFA_BEACHES_AUTHORITY__: { lang: 'auto', key: 'tarifa_beaches_authority' },

    /* =========================================================
       TARIFA — GUEST (LEGACY TOKENS)
    ========================================================= */
    __TARIFA_GUEST_HUB__: { lang: 'auto', key: 'tarifa_guest_hub' },
    __TARIFA_GUEST_APARTMENT__: { lang: 'auto', key: 'tarifa_guest_apartment' },
    __TARIFA_GUEST_LOCAL_GUIDE__: { lang: 'auto', key: 'tarifa_guest_local_guide' },
    __TARIFA_GUEST_LOCAL_ESSENTIALS__: { lang: 'auto', key: 'tarifa_guest_local_essentials' },
    __TARIFA_GUEST_BEACHES__: { lang: 'auto', key: 'tarifa_guest_beaches' },
    __TARIFA_GUEST_KITESURFING__: { lang: 'auto', key: 'tarifa_guest_kitesurfing' },
    __TARIFA_ACTIVITIES__: { lang: 'auto', key: 'tarifa_guest_activities' },
    __TARIFA_FOOD_DRINK__: { lang: 'auto', key: 'tarifa_guest_food_drink' },
    __TARIFA_NIGHT_LIFE__: { lang: 'auto', key: 'tarifa_guest_night_life' },
    __TARIFA_GUEST_SIGHTSEEING__: { lang: 'auto', key: 'tarifa_guest_sightseeing' },
    __TARIFA_GUEST_WIND_WEATHER__: { lang: 'auto', key: 'tarifa_guest_wind_weather' },

    /* =========================================================
       EXPLORE (LEGACY TOKENS)
    ========================================================= */
    __EXPLORE_HUB_URL__: { lang: 'auto', key: 'explore_hub' },
    __EXPERIENCES_HUB_URL__: { lang: 'auto', key: 'explore_hub' },

    __EXPLORE_BEACHES_URL__: { lang: 'auto', key: 'explore_beaches' },
    __EXPLORE_HIKING_URL__: { lang: 'auto', key: 'explore_hiking' },
    __EXPLORE_WATER_URL__: { lang: 'auto', key: 'explore_water' },
    __EXPLORE_FOOD_URL__: { lang: 'auto', key: 'explore_food' },
    __EXPLORE_CULTURE_URL__: { lang: 'auto', key: 'explore_culture' },
    __EXPLORE_WELLNESS_URL__: { lang: 'auto', key: 'explore_wellness' },
    __EXPLORE_DAY_TRIPS_URL__: { lang: 'auto', key: 'explore_daytrips' },

    __EXPERIENCES_BEACHES_URL__: { lang: 'auto', key: 'explore_beaches' },
    __EXPERIENCES_HIKING_URL__: { lang: 'auto', key: 'explore_hiking' },
    __EXPERIENCES_WATER_URL__: { lang: 'auto', key: 'explore_water' },
    __EXPERIENCES_FOOD_URL__: { lang: 'auto', key: 'explore_food' },
    __EXPERIENCES_CULTURE_URL__: { lang: 'auto', key: 'explore_culture' },
    __EXPERIENCES_WELLNESS_URL__: { lang: 'auto', key: 'explore_wellness' },
    __EXPERIENCES_DAY_TRIPS_URL__: { lang: 'auto', key: 'explore_daytrips' },

    /* =========================================================
       FRIGILIANA (NEW / LEGACY TOKENS)
    ========================================================= */
    __FRIGILIANA_PARKING__: { lang: 'auto', key: 'frigiliana_parking' },
    __STAIRS_LINK__: { lang: 'auto', key: 'frigiliana_stairs_layout' },
    __FAQ_LINK__: { lang: 'auto', key: 'frigiliana_faq' },
    __WEATHER_URL__: { lang: 'auto', key: 'weather_frigiliana' },
    __GETTING_TO_FRIGILIANA_LINK__: { lang: 'auto', key: 'arrival_parking_guide' },
    __NERJA_VS_FRIGILIANA_URL__: { lang: 'auto', key: 'nerja_vs_frigiliana' },

    /* =========================================================
       FRIGILIANA — GUEST (NEW TOKENS)
    ========================================================= */
    __FRIGILIANA_GUEST_LOCAL_GUIDE__: { lang: 'auto', key: 'frigiliana_guest_local_guide' },
    __FRIGILIANA_GUEST_BEACHES__: { lang: 'auto', key: 'frigiliana_guest_beaches' },
    __FRIGILIANA_GUEST_FOOD__: { lang: 'auto', key: 'frigiliana_guest_food' },
    __FRIGILIANA_GUEST_RESTAURANTS__: { lang: 'auto', key: 'frigiliana_guest_food' },
    __FRIGILIANA_GUEST_HIKING__: { lang: 'auto', key: 'frigiliana_guest_hiking' },
    __FRIGILIANA_GUEST_DAY_TRIPS__: { lang: 'auto', key: 'frigiliana_guest_day_trips' },
    __FRIGILIANA_GUEST_SIGHTSEEING__: { lang: 'auto', key: 'frigiliana_guest_sightseeing' },
    __FRIGILIANA_GUEST_EVENTS__: { lang: 'auto', key: 'frigiliana_guest_events' },
    __FRIGILIANA_GUEST_WELLNESS__: { lang: 'auto', key: 'frigiliana_guest_wellness' },
    __FRIGILIANA_GUEST_ADVENTURE__: { lang: 'auto', key: 'frigiliana_guest_adventure' },
    __FRIGILIANA_GUEST_FLAMENCO_BACHATA__: { lang: 'auto', key: 'frigiliana_guest_flamenco_bachata' },
    __GMAPS_SEARCH_KAYAK_NERJA__: { lang: 'auto', key: 'gmaps_search_kayak_nerja' },
    __GMAPS_SEARCH_JETSKI_NERJA__: { lang: 'auto', key: 'gmaps_search_jetski_nerja' },
    __GMAPS_SEARCH_HARLEY_NERJA__: { lang: 'auto', key: 'gmaps_search_harley_nerja' },
    __NERJA_GUEST_RESTAURANTS__: { lang: 'auto', key: 'nerja_guest_restaurants' },
    __NERJA_GUEST_BREAKFAST__: { lang: 'auto', key: 'nerja_guest_breakfast' },
    __NERJA_GUEST_NIGHTLIFE__: { lang: 'auto', key: 'nerja_guest_nightlife' },
    __FRIGILIANA_GUEST_BREAKFAST__: { lang: 'auto', key: 'frigiliana_guest_breakfast' },

    /* =========================================================
       FRIGILIANA — GUEST WELCOME HUBS (APARTMENTS)
    ========================================================= */
    __FRIGILIANA_GUEST_WELCOME_FARAH__: { lang: 'auto', key: 'frigiliana_guest_welcome_farah' },
    __FRIGILIANA_GUEST_WELCOME_LOUNIS__: { lang: 'auto', key: 'frigiliana_guest_welcome_lounis' },
    __FRIGILIANA_GUEST_WELCOME_ZAID__: { lang: 'auto', key: 'frigiliana_guest_welcome_zaid' },
    __FRIGILIANA_GUEST_WELCOME_MAHA__: { lang: 'auto', key: 'frigiliana_guest_welcome_maha' },

    /* =========================================================
       FRIGILIANA — GUEST APARTMENT PAGES (DETAILS)
    ========================================================= */
    __FRIGILIANA_GUEST_APARTMENT_FARAH__: { lang: 'auto', key: 'frigiliana_guest_apartment_farah' },
    __FRIGILIANA_GUEST_APARTMENT_LOUNIS__: { lang: 'auto', key: 'frigiliana_guest_apartment_lounis' },
    __FRIGILIANA_GUEST_APARTMENT_ZAID__: { lang: 'auto', key: 'frigiliana_guest_apartment_zaid' },
    __FRIGILIANA_GUEST_APARTMENT_MAHA__: { lang: 'auto', key: 'frigiliana_guest_apartment_maha' },

    /* =========================================================
       FRIGILIANA — SHARED (ALL APARTMENTS)
    ========================================================= */
    __FRIGILIANA_GUEST_LOCAL_ESSENTIALS__: { lang: 'auto', key: 'frigiliana_guest_local_essentials' },
    __FRIGILIANA_GUEST_RECOMMENDATIONS__: { lang: 'auto', key: 'frigiliana_guest_recommendations' },

    /* =========================================================
       NERJA — GUEST WELCOME HUBS (APARTMENTS)
    ========================================================= */
    __NERJA_GUEST_WELCOME_PLAYA__: { lang: 'auto', key: 'nerja_guest_welcome_playa' },

    /* =========================================================
       NERJA — GUEST APARTMENT PAGES (DETAILS)
    ========================================================= */
    __NERJA_GUEST_APARTMENT_PLAYA__: { lang: 'auto', key: 'nerja_guest_apartment_playa' },

    /* =========================================================
       NERJA — LOCAL ESSENTIALS
    ========================================================= */
    __NERJA_GUEST_LOCAL_ESSENTIALS__: { lang: 'auto', key: 'nerja_guest_local_essentials' },

    /* =========================================================
       FRIGILIANA — AUTHORITY TOKENS
    ========================================================= */
    __FRIGILIANA_BEACHES_AUTHORITY__: { lang: 'auto', key: 'frigiliana_beaches_authority' },
    __FRIGILIANA_FOOD_AUTHORITY__: { lang: 'auto', key: 'frigiliana_food_authority' },
    __FRIGILIANA_HIKING_AUTHORITY__: { lang: 'auto', key: 'frigiliana_hiking_authority' },
    __FRIGILIANA_DAYTRIPS_AUTHORITY__: { lang: 'auto', key: 'frigiliana_daytrips_authority' },
    __FRIGILIANA_SIGHTSEEING_AUTHORITY__: { lang: 'auto', key: 'frigiliana_sightseeing_authority' },
    __FRIGILIANA_EVENTS_AUTHORITY__: { lang: 'auto', key: 'frigiliana_events_authority' },
    __FRIGILIANA_WELLNESS_AUTHORITY__: { lang: 'auto', key: 'frigiliana_wellness_authority' },

    /* =========================================================
       LOCATION SPOKES (LEGACY)
    ========================================================= */
    __PARKING_URL__: { lang: 'auto', key: 'parking_frigiliana_legacy' },
    __PARKING_MOBILITY_URL__: { lang: 'auto', key: 'parking_frigiliana_legacy' },
    __WINTER_URL__: { lang: 'auto', key: 'winter_frigiliana' },
    __WINTER_HUB_URL__: { lang: 'auto', key: 'winter_frigiliana' },
    __WHERE_TO_STAY_URL__: { lang: 'auto', key: 'where_to_stay_frigiliana' },
    __WHERE_TO_STAY_FRIGILIANA_URL__: { lang: 'auto', key: 'where_to_stay_frigiliana' },

    __EXPLORE_LINK__: { lang: 'auto', key: 'explore_hub' },
    __PARKING_LINK__: { lang: 'auto', key: 'frigiliana_parking' },
    __WINTER_LINK__: { lang: 'auto', key: 'winter_frigiliana' },
    __NERJA_LINK__: { lang: 'auto', key: 'location_nerja' },

    /* =========================================================
       COMFORT / ROMANTIC (LEGACY)
    ========================================================= */
    __COMFORT_AMENITIES_URL__: { lang: 'auto', key: 'comfort_amenities' },
    __QUALITY_COMFORT_URL__: { lang: 'auto', key: 'comfort_amenities' },
    __ROMANTIC_EXPERIENCE_URL__: { lang: 'auto', key: 'romantic_andalusia' },

    /* =========================================================
       CANONICALS (LEGACY TOKENS)
    ========================================================= */
    __ABOUT_CANONICAL_EN__: { lang: 'auto', key: 'about_canonical_en' },
    __ABOUT_CANONICAL_DE__: { lang: 'auto', key: 'about_canonical_de' },
    __ABOUT_CANONICAL_ES__: { lang: 'auto', key: 'about_canonical_es' },
    __ABOUT_CANONICAL_NL__: { lang: 'auto', key: 'about_canonical_nl' },
    __ABOUT_CANONICAL_SV__: { lang: 'auto', key: 'about_canonical_sv' },

    __REVIEWS_CANONICAL_EN__: { lang: 'auto', key: 'reviews_canonical_en' },
    __REVIEWS_CANONICAL_DE__: { lang: 'auto', key: 'reviews_canonical_de' },
    __REVIEWS_CANONICAL_ES__: { lang: 'auto', key: 'reviews_canonical_es' },
    __REVIEWS_CANONICAL_NL__: { lang: 'auto', key: 'reviews_canonical_nl' },
    __REVIEWS_CANONICAL_SV__: { lang: 'auto', key: 'reviews_canonical_sv' },

    __DIRECT_BOOKING_CANONICAL_EN__: { lang: 'auto', key: 'direct_booking_canonical_en' },
    __DIRECT_BOOKING_CANONICAL_DE__: { lang: 'auto', key: 'direct_booking_canonical_de' },
    __DIRECT_BOOKING_CANONICAL_ES__: { lang: 'auto', key: 'direct_booking_canonical_es' },
    __DIRECT_BOOKING_CANONICAL_NL__: { lang: 'auto', key: 'direct_booking_canonical_nl' },
    __DIRECT_BOOKING_CANONICAL_SV__: { lang: 'auto', key: 'direct_booking_canonical_sv' },

    __CANONICAL_EN_URL__: { lang: 'auto', key: 'home' },
    __CANONICAL_DE_URL__: { lang: 'auto', key: 'home' },
    __CANONICAL_ES_URL__: { lang: 'auto', key: 'home' },
    __CANONICAL_NL_URL__: { lang: 'auto', key: 'home' },
    __CANONICAL_SV_URL__: { lang: 'auto', key: 'home' },

    /* =========================================================
       APARTMENTS (LEGACY TOKENS)
    ========================================================= */
    __FARAH_URL__: { lang: 'auto', key: 'farah' },
    __LOUNIS_URL__: { lang: 'auto', key: 'lounis' },
    __ZAID_URL__: { lang: 'auto', key: 'zaid' },
    __MAHA_URL__: { lang: 'auto', key: 'maha' },
    __PLAYA_URL__: { lang: 'auto', key: 'playa' },
    __CASA_URL__: { lang: 'auto', key: 'casa' },

    /* =========================================================
       EXTERNAL UTILITY (LEGACY TOKENS)
    ========================================================= */
    __MAPS_LINK__: { lang: 'auto', key: 'maps_link' },
    __MAP_EMBED_URL__: { lang: 'auto', key: 'map_embed_url' },
    __FLIGHTS_LINK__: { lang: 'auto', key: 'flights_link' }
  }
} as const;
