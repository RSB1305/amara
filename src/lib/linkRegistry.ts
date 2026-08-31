import { buildOwnedLocalizedPath } from './routeOwnership';

function buildOwnedLinks(slug: string) {
  return {
    en: buildOwnedLocalizedPath(slug, 'en'),
    de: buildOwnedLocalizedPath(slug, 'de'),
    es: buildOwnedLocalizedPath(slug, 'es'),
    nl: buildOwnedLocalizedPath(slug, 'nl'),
    sv: buildOwnedLocalizedPath(slug, 'sv')
  } as const;
}

function buildGroupEnquiry(subject: string, body: string): string {
  return `mailto:hola@amara-lodging.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// src/lib/linkRegistry.ts
/**
 * AMARA Link Registry — Astro SSOT
 *
 * Architectural intent:
 * - Keep current AMARA link keys in one central Astro registry.
 * - Allow resolveLink(...) to stay simple and deterministic.
 */

export const linkRegistry = {
  version: '2026-08-24-registry-v4.9',
  updated_at: '2026-08-24',
  base: '/',
  links: {
    /* =========================================================
       CORE
    ========================================================= */
    home: buildOwnedLinks(''),
    /**
     * `book` now resolves to AMARA's own availability search rather than the
     * external booking landing page. Every editorial call to action therefore
     * keeps the guest on the site, where the gateway answers with real dates,
     * availability and an authoritative total. The external host is entered
     * only through the validated checkout handoff in `directBooking.ts`, and
     * the legacy `/{lang}/book/` URLs keep their redirects in `_redirects`.
     */
    book: buildOwnedLinks('find-a-stay'),
    about: buildOwnedLinks('staying-with-us'),
    amenities: buildOwnedLinks('comfort-amenities'),
    arrival_guide: buildOwnedLinks('directions-arrival-guide'),
    nerja_arrival_guide: buildOwnedLinks('nerja-directions-arrival-guide'),
    tarifa_arrival_guide: buildOwnedLinks('tarifa-directions-arrival-guide'),
    direct_booking_benefits: buildOwnedLinks('direct-booking-benefits'),
    reviews_hub: buildOwnedLinks('guest-reviews'),
    instagram_landing: buildOwnedLinks('instagram'),
    romantic_hideaways: buildOwnedLinks('romantic-hideaways'),
    amara_experience: buildOwnedLinks('amara-experience'),
    stay_search_results: buildOwnedLinks('find-a-stay'),
    last_minute_stays: buildOwnedLinks('last-minute-stays'),
    honeymoon: buildOwnedLinks('honeymoon'),
    wedding_anniversary: buildOwnedLinks('wedding-anniversary'),
    casa_amara_groups: buildOwnedLinks('casa-amara-4-8-guests'),
    property_sale: buildOwnedLinks('frigiliana-hospitality-property-for-sale'),
    instagram: 'https://www.instagram.com/amaralodging/',
    journal: { en: '/journal/', de: '/de/journal/', es: '/diario/', nl: '/nl/journal/', sv: '/sv/journal/' },
    contact: { en: '/contact/', de: '/de/kontakt/', es: '/contacto/', nl: '/nl/contact/', sv: '/sv/kontakt/' },
    archive: { en: '/archive/', de: '/de/archiv/', es: '/archivo/', nl: '/nl/archief/', sv: '/sv/arkiv/' },
    legal_notice: buildOwnedLinks('legal-notice'),
    booking_stay_terms: buildOwnedLinks('booking-stay-terms'),

    /* =========================================================
       EXPLORE
    ========================================================= */
    frigiliana_experience_hub: buildOwnedLinks('frigiliana-experience'),
    frigiliana_netflix_dos_tumbas: buildOwnedLinks('frigiliana-netflix-dos-tumbas'),
    frigiliana_old_town: buildOwnedLinks('frigiliana-old-town'),

    /* =========================================================
       LOCATIONS
    ========================================================= */
    locations_hub: { en: '/en/locations', de: '/de/locations', es: '/locations', nl: '/nl/locations', sv: '/sv/locations' },
    location_frigiliana: { en: '/en/frigiliana-location', de: '/de/frigiliana-location', es: '/frigiliana-location', nl: '/nl/frigiliana-location', sv: '/sv/frigiliana-location' },
    frigiliana_geography: buildOwnedLinks('frigiliana-geography'),
    frigiliana_daily_life: buildOwnedLinks('frigiliana-daily-life'),
    location_nerja: buildOwnedLinks('nerja-location'),
    nerja_experience_hub: buildOwnedLinks('nerja-experience'),
    nerja_beaches_authority: buildOwnedLinks('nerja-beaches'),
    nerja_daytrips_authority: buildOwnedLinks('nerja-day-trips'),
    nerja_food_authority: buildOwnedLinks('nerja-food'),
    getting_to_nerja: buildOwnedLinks('getting-to-nerja'),
    nerja_geography: buildOwnedLinks('nerja-geography'),
    nerja_caves: buildOwnedLinks('nerja-caves'),
    nerja_verano_azul: buildOwnedLinks('nerja-verano-azul'),
    nerja_balcon_de_europa: buildOwnedLinks('nerja-balcon-de-europa'),
    nerja_daily_life: buildOwnedLinks('nerja-daily-life'),
    nerja_weather: buildOwnedLinks('nerja-weather'),
    nerja_winter_stays: buildOwnedLinks('nerja-winter-stays'),
    nerja_parking: buildOwnedLinks('nerja-parking'),
    nerja_where_to_stay: buildOwnedLinks('nerja-where-to-stay'),
    nerja_nightlife_authority: buildOwnedLinks('nerja-nightlife'),
    location_tarifa: buildOwnedLinks('tarifa-location'),

    /* =========================================================
       TARIFA — AUTHORITY (PUBLIC)
    ========================================================= */
    getting_to_tarifa: buildOwnedLinks('getting-to-tarifa'),
    tarifa_geography: buildOwnedLinks('tarifa-geography'),
    tarifa_where_to_stay: buildOwnedLinks('tarifa-where-to-stay'),
    tarifa_weather: buildOwnedLinks('tarifa-weather'),
    tarifa_daily_life: buildOwnedLinks('tarifa-daily-life'),
    tarifa_winter_stays: buildOwnedLinks('tarifa-winter-stays'),
    tarifa_experience_hub: buildOwnedLinks('tarifa-experience'),
    tarifa_wind_kitesurfing_authority: buildOwnedLinks('tarifa-wind-kitesurfing'),
    tarifa_beaches_authority: buildOwnedLinks('tarifa-beaches'),
    tarifa_food_evening_life: buildOwnedLinks('tarifa-food-evening-life'),
    tarifa_nature_wildlife: buildOwnedLinks('tarifa-nature-wildlife'),
    tarifa_old_town_history: buildOwnedLinks('tarifa-old-town-history'),
    tarifa_bolonia_baelo_claudia: buildOwnedLinks('tarifa-bolonia-baelo-claudia'),
    tarifa_parking: buildOwnedLinks('tarifa-parking'),

    /* =========================================================
       FRIGILIANA — (NEW)
    ========================================================= */
    faq_general: buildOwnedLinks('faq-general'),
    frigiliana_faq: buildOwnedLinks('frigiliana-faq'),
    frigiliana_market: buildOwnedLinks('frigiliana-market'),
    frigiliana_hiking_authority: buildOwnedLinks('frigiliana-hiking'),
    frigiliana_parking: buildOwnedLinks('frigiliana-parking'),
    frigiliana_stairs: buildOwnedLinks('frigiliana-where-to-stay'),
    getting_to_frigiliana: buildOwnedLinks('getting-to-frigiliana'),
    nerja_vs_frigiliana: buildOwnedLinks('frigiliana-or-nerja'),
    weather_frigiliana: buildOwnedLinks('frigiliana-weather'),
    frigiliana_winter_stays: buildOwnedLinks('frigiliana-winter-stays'),
    frigiliana_weddings: buildOwnedLinks('frigiliana-weddings'),

    /* =========================================================
       FRIGILIANA — AUTHORITY (BRIDGED TO NERJA)
    ========================================================= */
    frigiliana_beaches_authority: buildOwnedLinks('frigiliana-beaches'),
    frigiliana_food_authority: buildOwnedLinks('frigiliana-restaurants'),
    frigiliana_daytrips_authority: buildOwnedLinks('frigiliana-day-trips'),
    frigiliana_events_authority: buildOwnedLinks('frigiliana-festivals'),
    frigiliana_wellness_authority: buildOwnedLinks('frigiliana-wellness'),

    /* =========================================================
       APARTMENTS
    ========================================================= */
    farah: buildOwnedLinks('la-amara-farah'),
    lounis: buildOwnedLinks('la-amara-lounis'),
    zaid: buildOwnedLinks('la-amara-zaid'),
    maha: buildOwnedLinks('la-amara-maha'),
    playa: buildOwnedLinks('la-amara-playa'),
    tarifa: buildOwnedLinks('la-amara-family-and-surf'),
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
    casa_amara_group_enquiry: {
      en: buildGroupEnquiry(
        'Casa AMARA enquiry for 4–8 guests',
        'Hello AMARA,\n\nTravel dates:\nNumber of guests:\nPreferred setup or other notes:\n'
      ),
      de: buildGroupEnquiry(
        'Casa AMARA Anfrage für 4–8 Gäste',
        'Hallo AMARA,\n\nReisedaten:\nAnzahl der Gäste:\nGewünschte Aufteilung oder weitere Hinweise:\n'
      ),
      es: buildGroupEnquiry(
        'Consulta Casa AMARA para 4–8 huéspedes',
        'Hola AMARA,\n\nFechas del viaje:\nNúmero de huéspedes:\nDistribución preferida u otras indicaciones:\n'
      ),
      nl: buildGroupEnquiry(
        'Casa AMARA aanvraag voor 4–8 gasten',
        'Hallo AMARA,\n\nReisdata:\nAantal gasten:\nGewenste indeling of andere opmerkingen:\n'
      ),
      sv: buildGroupEnquiry(
        'Casa AMARA förfrågan för 4–8 gäster',
        'Hej AMARA,\n\nResedatum:\nAntal gäster:\nÖnskad fördelning eller andra önskemål:\n'
      )
    }
  }
} as const;
