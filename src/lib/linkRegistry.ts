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
  version: '2026-09-02-registry-v5.0',
  updated_at: '2026-09-02',
  base: '/',
  links: {
    /* =========================================================
       CORE
    ========================================================= */
    home: buildOwnedLinks('home'),
    /**
     * `book` now resolves to AMARA's own availability search rather than the
     * external booking landing page. Every editorial call to action therefore
     * keeps the guest on the site, where the gateway answers with real dates,
     * availability and an authoritative total. The external host is entered
     * only through the validated checkout handoff in `directBooking.ts`, and
     * the legacy `/{lang}/book/` URLs keep their redirects in `_redirects`.
     */
    book: buildOwnedLinks('stays.search'),
    about: buildOwnedLinks('about'),
    amenities: buildOwnedLinks('about.amenities'),
    arrival_guide: buildOwnedLinks('frigiliana.directions'),
    nerja_arrival_guide: buildOwnedLinks('nerja.directions'),
    tarifa_arrival_guide: buildOwnedLinks('tarifa.directions'),
    direct_booking_benefits: buildOwnedLinks('about.direct-booking'),
    reviews_hub: buildOwnedLinks('about.reviews'),
    instagram_landing: buildOwnedLinks('instagram'),
    romantic_hideaways: buildOwnedLinks('stays'),
    amara_experience: buildOwnedLinks('amara-experience'),
    stay_search_results: buildOwnedLinks('stays.search'),
    last_minute_stays: buildOwnedLinks('stays.last-minute'),
    honeymoon: buildOwnedLinks('stays.honeymoon'),
    wedding_anniversary: buildOwnedLinks('stays.wedding-anniversary'),
    casa_amara_groups: buildOwnedLinks('stays.casa-amara'),
    property_sale: buildOwnedLinks('frigiliana.property-for-sale'),
    instagram: 'https://www.instagram.com/amaralodging/',
    journal: { en: '/journal/', de: '/de/journal/', es: '/diario/', nl: '/nl/journal/', sv: '/sv/journal/' },
    contact: { en: '/contact/', de: '/de/kontakt/', es: '/contacto/', nl: '/nl/contact/', sv: '/sv/kontakt/' },
    archive: { en: '/archive/', de: '/de/archiv/', es: '/archivo/', nl: '/nl/archief/', sv: '/sv/arkiv/' },
    legal_notice: buildOwnedLinks('legal-notice'),
    booking_stay_terms: buildOwnedLinks('booking-terms'),

    /* =========================================================
       EXPLORE
    ========================================================= */
    frigiliana_experience_hub: buildOwnedLinks('frigiliana.experience'),
    frigiliana_netflix_dos_tumbas: buildOwnedLinks('frigiliana.experience.dos-tumbas'),
    frigiliana_old_town: buildOwnedLinks('frigiliana.experience.old-town'),

    /* =========================================================
       LOCATIONS
    ========================================================= */
    locations_hub: { en: '/en/locations', de: '/de/locations', es: '/locations', nl: '/nl/locations', sv: '/sv/locations' },
    location_frigiliana: buildOwnedLinks('frigiliana'),
    frigiliana_geography: buildOwnedLinks('frigiliana.geography'),
    frigiliana_daily_life: buildOwnedLinks('frigiliana.supermarkets'),
    frigiliana_health_emergency: buildOwnedLinks('frigiliana.health'),
    location_nerja: buildOwnedLinks('nerja'),
    nerja_experience_hub: buildOwnedLinks('nerja.experience'),
    nerja_beaches_authority: buildOwnedLinks('nerja.experience.beaches'),
    nerja_daytrips_authority: buildOwnedLinks('nerja.experience.day-trips'),
    nerja_food_authority: buildOwnedLinks('nerja.experience.food'),
    getting_to_nerja: buildOwnedLinks('nerja.arrival'),
    nerja_geography: buildOwnedLinks('nerja.geography'),
    nerja_caves: buildOwnedLinks('nerja.experience.caves'),
    nerja_verano_azul: buildOwnedLinks('nerja.experience.verano-azul'),
    nerja_balcon_de_europa: buildOwnedLinks('nerja.experience.balcon-de-europa'),
    nerja_daily_life: buildOwnedLinks('nerja.supermarkets'),
    nerja_health_emergency: buildOwnedLinks('nerja.health'),
    nerja_weather: buildOwnedLinks('nerja.weather'),
    nerja_winter_stays: buildOwnedLinks('nerja.winter'),
    nerja_parking: buildOwnedLinks('nerja.parking'),
    nerja_where_to_stay: buildOwnedLinks('nerja.where-to-stay'),
    nerja_nightlife_authority: buildOwnedLinks('nerja.experience.nightlife'),
    location_tarifa: buildOwnedLinks('tarifa'),

    /* =========================================================
       TARIFA — AUTHORITY (PUBLIC)
    ========================================================= */
    getting_to_tarifa: buildOwnedLinks('tarifa.arrival'),
    tarifa_geography: buildOwnedLinks('tarifa.geography'),
    tarifa_where_to_stay: buildOwnedLinks('tarifa.where-to-stay'),
    tarifa_weather: buildOwnedLinks('tarifa.weather'),
    tarifa_daily_life: buildOwnedLinks('tarifa.supermarkets'),
    tarifa_health_emergency: buildOwnedLinks('tarifa.health'),
    tarifa_winter_stays: buildOwnedLinks('tarifa.winter'),
    tarifa_experience_hub: buildOwnedLinks('tarifa.experience'),
    tarifa_wind_kitesurfing_authority: buildOwnedLinks('tarifa.kitesurfing.wind'),
    tarifa_kitesurf_spots: buildOwnedLinks('tarifa.kitesurfing.spots'),
    tarifa_kitesurf_forecast: buildOwnedLinks('tarifa.kitesurfing.forecast'),
    tarifa_kite_school: buildOwnedLinks('tarifa.kitesurfing.school'),
    tarifa_kitecamp: buildOwnedLinks('tarifa.kitesurfing.kitecamp'),
    tarifa_kite_equipment: buildOwnedLinks('tarifa.kitesurfing.equipment'),
    tarifa_kitesurfing_hub: buildOwnedLinks('tarifa.kitesurfing'),
    amara_tarifa_surf_club: buildOwnedLinks('tarifa.kitesurfing.surf-club'),
    tarifa_bildungsurlaub: buildOwnedLinks('tarifa.kitesurfing.bildungsurlaub'),
    tarifa_kitesurf_beginner_guide: buildOwnedLinks('tarifa.kitesurfing.beginner-guide'),
    tarifa_beaches_authority: buildOwnedLinks('tarifa.experience.beaches'),
    tarifa_food_evening_life: buildOwnedLinks('tarifa.experience.food-evening-life'),
    tarifa_nature_wildlife: buildOwnedLinks('tarifa.experience.nature-wildlife'),
    tarifa_old_town_history: buildOwnedLinks('tarifa.experience.old-town-history'),
    tarifa_bolonia_baelo_claudia: buildOwnedLinks('tarifa.experience.bolonia-baelo-claudia'),
    tarifa_yoga: buildOwnedLinks('tarifa.experience.yoga'),
    tarifa_parking: buildOwnedLinks('tarifa.parking'),

    /* =========================================================
       FRIGILIANA — (NEW)
    ========================================================= */
    faq_general: buildOwnedLinks('about.faq'),
    frigiliana_faq: buildOwnedLinks('frigiliana.faq'),
    frigiliana_market: buildOwnedLinks('frigiliana.experience.market'),
    frigiliana_hiking_authority: buildOwnedLinks('frigiliana.experience.hiking'),
    frigiliana_parking: buildOwnedLinks('frigiliana.parking'),
    frigiliana_stairs: buildOwnedLinks('frigiliana.where-to-stay'),
    getting_to_frigiliana: buildOwnedLinks('frigiliana.arrival'),
    nerja_vs_frigiliana: buildOwnedLinks('frigiliana.or-nerja'),
    weather_frigiliana: buildOwnedLinks('frigiliana.weather'),
    frigiliana_winter_stays: buildOwnedLinks('frigiliana.winter'),
    frigiliana_weddings: buildOwnedLinks('frigiliana.experience.weddings'),

    /* =========================================================
       FRIGILIANA — AUTHORITY (BRIDGED TO NERJA)
    ========================================================= */
    frigiliana_beaches_authority: buildOwnedLinks('frigiliana.experience.beaches'),
    frigiliana_food_authority: buildOwnedLinks('frigiliana.experience.restaurants'),
    frigiliana_daytrips_authority: buildOwnedLinks('frigiliana.experience.day-trips'),
    frigiliana_events_authority: buildOwnedLinks('frigiliana.experience.festivals'),
    frigiliana_wellness_authority: buildOwnedLinks('frigiliana.experience.wellness'),

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
