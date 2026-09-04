/**
 * AMARA public route manifest — the single declaration of every public page.
 *
 * Each route carries one language-neutral key, one page family, one parent
 * for hierarchy and breadcrumbs, and one path per locale. Paths are native to
 * their market: Spanish stays unprefixed, the other locales carry their
 * prefix, generic segments are written in the visible language, and place
 * names and brand identities stay shared across locales.
 *
 * A route with a parent declares only its own segment; the full path is
 * composed from the parent chain, so the URL mirrors the hierarchy by
 * construction. Identity routes declare one shared segment for every locale.
 * Segments are lowercase ASCII kebab-case; German umlauts are written as
 * ae/oe/ue, Swedish å/ä/ö as a/a/o, Spanish and Dutch accents are dropped.
 *
 * `legacySlug` records the flat English slug the route carried before the
 * hierarchical migration. It drives the migration redirects and is not a live
 * route. The prebuild route-policy gate verifies this file, the redirects
 * and every path helper against each other.
 */

export const PUBLIC_ROUTE_LOCALES = Object.freeze(['es', 'en', 'de', 'nl', 'sv']);
export const DEFAULT_PUBLIC_ROUTE_LOCALE = 'es';

/**
 * @typedef {'es' | 'en' | 'de' | 'nl' | 'sv'} PublicRouteLocale
 * @typedef {Record<PublicRouteLocale, string>} LocalizedSegments
 *
 * @typedef {object} PublicRouteDefinition
 * @property {string} key Stable language-neutral identifier, dotted by hierarchy.
 * @property {string} legacySlug Flat English slug before the migration; '' for the homepage.
 * @property {string} family Page-family identifier resolved by the route dispatcher.
 * @property {string} [parent] Key of the parent route.
 * @property {LocalizedSegments} [segment] Own path segment per locale, appended to the parent path.
 * @property {LocalizedSegments} [paths] Full path per locale, used when the path is not composed.
 * @property {boolean} [identity] Every locale shares the same full path (brand or place identity).
 * @property {boolean} [indexable] False keeps the route out of the sitemap.
 * @property {Record<string, string>} [props] Authored props passed to the page family.
 *
 * @typedef {object} PublicRoute
 * @property {string} key
 * @property {string} legacySlug
 * @property {string} family
 * @property {string} [parent]
 * @property {boolean} identity
 * @property {boolean} indexable
 * @property {Record<string, string>} props
 * @property {LocalizedSegments} paths Full path per locale without the locale prefix.
 */

/** @param {string} segment @returns {LocalizedSegments} */
function shared(segment) {
  return { es: segment, en: segment, de: segment, nl: segment, sv: segment };
}

const arrivalSegments = {
  es: 'como-llegar',
  en: 'getting-there',
  de: 'anreise',
  nl: 'bereikbaarheid',
  sv: 'hitta-hit'
};
const parkingSegments = {
  es: 'aparcamiento',
  en: 'parking',
  de: 'parken',
  nl: 'parkeren',
  sv: 'parkering'
};
const geographySegments = {
  es: 'geografia',
  en: 'geography',
  de: 'geografie',
  nl: 'geografie',
  sv: 'geografi'
};
const whereToStaySegments = {
  es: 'donde-alojarse',
  en: 'where-to-stay',
  de: 'wo-uebernachten',
  nl: 'waar-overnachten',
  sv: 'var-ska-man-bo'
};
const weatherSegments = {
  es: 'clima',
  en: 'weather',
  de: 'wetter',
  nl: 'weer',
  sv: 'vader'
};
const winterSegments = {
  es: 'invierno',
  en: 'winter-stays',
  de: 'winter',
  nl: 'winter',
  sv: 'vinter'
};
const supermarketSegments = {
  es: 'supermercados',
  en: 'supermarkets',
  de: 'supermaerkte',
  nl: 'supermarkten',
  sv: 'matbutiker'
};
const healthSegments = {
  es: 'salud-y-urgencias',
  en: 'health-and-emergencies',
  de: 'gesundheit-und-notfall',
  nl: 'gezondheid-en-noodgevallen',
  sv: 'halsa-och-akut'
};
const experienceSegments = {
  es: 'experiencias',
  en: 'experiences',
  de: 'erlebnisse',
  nl: 'ervaringen',
  sv: 'upplevelser'
};
const beachSegments = {
  es: 'playas',
  en: 'beaches',
  de: 'straende',
  nl: 'stranden',
  sv: 'strander'
};
const dayTripSegments = {
  es: 'excursiones',
  en: 'day-trips',
  de: 'ausfluege',
  nl: 'dagtrips',
  sv: 'dagsutflykter'
};
const oldTownSegments = {
  es: 'casco-antiguo',
  en: 'old-town',
  de: 'altstadt',
  nl: 'oude-centrum',
  sv: 'gamla-stan'
};
const faqSegments = {
  es: 'preguntas-frecuentes',
  en: 'faq',
  de: 'faq',
  nl: 'veelgestelde-vragen',
  sv: 'vanliga-fragor'
};

/** @type {PublicRouteDefinition[]} */
const definitions = [
  /* =========================================================
     CORE, TRUST AND UTILITY
  ========================================================= */
  { key: 'home', legacySlug: '', family: 'home', identity: true, paths: shared('') },
  {
    key: 'about',
    legacySlug: 'staying-with-us',
    family: 'about',
    paths: { es: 'sobre-nosotros', en: 'about-us', de: 'ueber-uns', nl: 'over-ons', sv: 'om-oss' }
  },
  {
    key: 'about.reviews',
    legacySlug: 'guest-reviews',
    family: 'guest-reviews',
    parent: 'about',
    segment: {
      es: 'opiniones',
      en: 'guest-reviews',
      de: 'gaestestimmen',
      nl: 'gastenbeoordelingen',
      sv: 'gastrecensioner'
    }
  },
  {
    key: 'about.direct-booking',
    legacySlug: 'direct-booking-benefits',
    family: 'direct-booking-benefits',
    parent: 'about',
    segment: {
      es: 'reserva-directa',
      en: 'direct-booking',
      de: 'direkt-buchen',
      nl: 'direct-boeken',
      sv: 'boka-direkt'
    }
  },
  {
    key: 'about.amenities',
    legacySlug: 'comfort-amenities',
    family: 'comfort-amenities',
    parent: 'about',
    segment: {
      es: 'comodidades',
      en: 'amenities',
      de: 'ausstattung',
      nl: 'voorzieningen',
      sv: 'bekvamligheter'
    }
  },
  { key: 'about.faq', legacySlug: 'faq-general', family: 'faq-general', parent: 'about', segment: faqSegments },
  {
    key: 'amara-experience',
    legacySlug: 'amara-experience',
    family: 'amara-experience',
    identity: true,
    paths: shared('amara-experience')
  },
  {
    key: 'legal-notice',
    legacySlug: 'legal-notice',
    family: 'legal-notice',
    paths: {
      es: 'aviso-legal',
      en: 'legal-notice',
      de: 'impressum',
      nl: 'juridische-informatie',
      sv: 'juridisk-information'
    }
  },
  {
    key: 'booking-terms',
    legacySlug: 'booking-stay-terms',
    family: 'booking-stay-terms',
    paths: {
      es: 'condiciones-de-reserva',
      en: 'booking-terms',
      de: 'buchungsbedingungen',
      nl: 'boekingsvoorwaarden',
      sv: 'bokningsvillkor'
    }
  },
  {
    key: 'instagram',
    legacySlug: 'instagram',
    family: 'instagram',
    identity: true,
    indexable: false,
    paths: shared('instagram')
  },

  /* =========================================================
     STAYS
  ========================================================= */
  {
    key: 'stays',
    legacySlug: 'romantic-hideaways',
    family: 'romantic-hideaways',
    paths: { es: 'alojamientos', en: 'stays', de: 'unterkuenfte', nl: 'verblijven', sv: 'boenden' }
  },
  {
    key: 'stays.search',
    legacySlug: 'find-a-stay',
    family: 'stay-search',
    parent: 'stays',
    segment: { es: 'buscar', en: 'search', de: 'suche', nl: 'zoeken', sv: 'sok' }
  },
  {
    key: 'stays.last-minute',
    legacySlug: 'last-minute-stays',
    family: 'last-minute-stays',
    parent: 'stays',
    segment: {
      es: 'ultima-hora',
      en: 'last-minute',
      de: 'last-minute',
      nl: 'last-minute',
      sv: 'sista-minuten'
    }
  },
  {
    key: 'stays.honeymoon',
    legacySlug: 'honeymoon',
    family: 'honeymoon',
    parent: 'stays',
    segment: {
      es: 'luna-de-miel',
      en: 'honeymoon',
      de: 'flitterwochen',
      nl: 'huwelijksreis',
      sv: 'smekmanad'
    }
  },
  {
    key: 'stays.wedding-anniversary',
    legacySlug: 'wedding-anniversary',
    family: 'wedding-anniversary',
    parent: 'stays',
    segment: {
      es: 'aniversario-de-boda',
      en: 'wedding-anniversary',
      de: 'hochzeitstag',
      nl: 'trouwdag',
      sv: 'brollopsdag'
    }
  },
  {
    key: 'stays.casa-amara',
    legacySlug: 'casa-amara-4-8-guests',
    family: 'casa-amara-groups',
    parent: 'stays',
    segment: shared('casa-amara')
  },
  // Branded stay identifiers stay shared and flat: they are printed in guest
  // material and referenced from the booking provider, so the route key equals
  // the stay slug and the breadcrumb parent is the stays hub.
  ...['la-amara-farah', 'la-amara-lounis', 'la-amara-zaid', 'la-amara-maha', 'la-amara-playa', 'la-amara-family-and-surf'].map(
    (slug) => ({
      key: slug,
      legacySlug: slug,
      family: 'vacation-rental',
      parent: 'stays',
      identity: true,
      paths: shared(slug)
    })
  ),

  /* =========================================================
     FRIGILIANA
  ========================================================= */
  { key: 'frigiliana', legacySlug: 'frigiliana-location', family: 'frigiliana-location', identity: true, paths: shared('frigiliana') },
  {
    key: 'frigiliana.arrival',
    legacySlug: 'getting-to-frigiliana',
    family: 'arrival-guide',
    parent: 'frigiliana',
    props: { destination: 'frigiliana' },
    segment: arrivalSegments
  },
  {
    key: 'frigiliana.directions',
    legacySlug: 'directions-arrival-guide',
    family: 'directions-arrival-guide',
    parent: 'frigiliana',
    props: { destination: 'frigiliana' },
    indexable: false,
    segment: {
      es: 'llegada-al-apartamento',
      en: 'arrival-directions',
      de: 'anfahrt',
      nl: 'routebeschrijving',
      sv: 'vagbeskrivning'
    }
  },
  { key: 'frigiliana.parking', legacySlug: 'frigiliana-parking', family: 'parking', parent: 'frigiliana', props: { destination: 'frigiliana' }, segment: parkingSegments },
  { key: 'frigiliana.geography', legacySlug: 'frigiliana-geography', family: 'geography', parent: 'frigiliana', props: { destination: 'frigiliana' }, segment: geographySegments },
  { key: 'frigiliana.where-to-stay', legacySlug: 'frigiliana-where-to-stay', family: 'frigiliana-where-to-stay', parent: 'frigiliana', segment: whereToStaySegments },
  { key: 'frigiliana.weather', legacySlug: 'frigiliana-weather', family: 'weather', parent: 'frigiliana', props: { destination: 'frigiliana' }, segment: weatherSegments },
  { key: 'frigiliana.winter', legacySlug: 'frigiliana-winter-stays', family: 'winter-stays', parent: 'frigiliana', props: { destination: 'frigiliana' }, segment: winterSegments },
  { key: 'frigiliana.supermarkets', legacySlug: 'frigiliana-daily-life', family: 'daily-life', parent: 'frigiliana', props: { destination: 'frigiliana', topic: 'shopping-markets' }, segment: supermarketSegments },
  { key: 'frigiliana.health', legacySlug: 'frigiliana-health-emergency', family: 'daily-life', parent: 'frigiliana', props: { destination: 'frigiliana', topic: 'health-emergency' }, segment: healthSegments },
  {
    key: 'frigiliana.or-nerja',
    legacySlug: 'frigiliana-or-nerja',
    family: 'frigiliana-or-nerja',
    parent: 'frigiliana',
    segment: {
      es: 'frigiliana-o-nerja',
      en: 'frigiliana-or-nerja',
      de: 'frigiliana-oder-nerja',
      nl: 'frigiliana-of-nerja',
      sv: 'frigiliana-eller-nerja'
    }
  },
  { key: 'frigiliana.faq', legacySlug: 'frigiliana-faq', family: 'frigiliana-faq', parent: 'frigiliana', segment: faqSegments },
  {
    key: 'frigiliana.property-for-sale',
    legacySlug: 'frigiliana-hospitality-property-for-sale',
    family: 'property-sale',
    parent: 'frigiliana',
    segment: {
      es: 'casa-en-venta',
      en: 'property-for-sale',
      de: 'immobilie-zu-verkaufen',
      nl: 'pand-te-koop',
      sv: 'fastighet-till-salu'
    }
  },
  { key: 'frigiliana.experience', legacySlug: 'frigiliana-experience', family: 'frigiliana-experience', parent: 'frigiliana', segment: experienceSegments },
  { key: 'frigiliana.experience.beaches', legacySlug: 'frigiliana-beaches', family: 'frigiliana-beaches', parent: 'frigiliana.experience', segment: beachSegments },
  {
    key: 'frigiliana.experience.hiking',
    legacySlug: 'frigiliana-hiking',
    family: 'frigiliana-hiking',
    parent: 'frigiliana.experience',
    segment: { es: 'senderismo', en: 'hiking', de: 'wandern', nl: 'wandelen', sv: 'vandring' }
  },
  {
    key: 'frigiliana.experience.restaurants',
    legacySlug: 'frigiliana-restaurants',
    family: 'frigiliana-restaurants',
    parent: 'frigiliana.experience',
    segment: { es: 'restaurantes', en: 'restaurants', de: 'restaurants', nl: 'restaurants', sv: 'restauranger' }
  },
  {
    key: 'frigiliana.experience.festivals',
    legacySlug: 'frigiliana-festivals',
    family: 'frigiliana-festivals',
    parent: 'frigiliana.experience',
    segment: { es: 'fiestas', en: 'festivals', de: 'feste', nl: 'festivals', sv: 'festivaler' }
  },
  {
    key: 'frigiliana.experience.market',
    legacySlug: 'frigiliana-market',
    family: 'frigiliana-market',
    parent: 'frigiliana.experience',
    segment: { es: 'mercadillo', en: 'market', de: 'markt', nl: 'markt', sv: 'marknad' }
  },
  { key: 'frigiliana.experience.day-trips', legacySlug: 'frigiliana-day-trips', family: 'frigiliana-day-trips', parent: 'frigiliana.experience', segment: dayTripSegments },
  {
    key: 'frigiliana.experience.wellness',
    legacySlug: 'frigiliana-wellness',
    family: 'frigiliana-wellness',
    parent: 'frigiliana.experience',
    segment: { es: 'bienestar', en: 'wellness', de: 'wellness', nl: 'wellness', sv: 'wellness' }
  },
  { key: 'frigiliana.experience.old-town', legacySlug: 'frigiliana-old-town', family: 'frigiliana-old-town', parent: 'frigiliana.experience', segment: oldTownSegments },
  { key: 'frigiliana.experience.dos-tumbas', legacySlug: 'frigiliana-netflix-dos-tumbas', family: 'frigiliana-dos-tumbas', parent: 'frigiliana.experience', segment: shared('dos-tumbas') },
  {
    key: 'frigiliana.experience.weddings',
    legacySlug: 'frigiliana-weddings',
    family: 'frigiliana-weddings',
    parent: 'frigiliana.experience',
    segment: { es: 'bodas', en: 'weddings', de: 'hochzeiten', nl: 'bruiloften', sv: 'brollop' }
  },

  /* =========================================================
     NERJA
  ========================================================= */
  { key: 'nerja', legacySlug: 'nerja-location', family: 'nerja-location', identity: true, paths: shared('nerja') },
  { key: 'nerja.arrival', legacySlug: 'getting-to-nerja', family: 'arrival-guide', parent: 'nerja', props: { destination: 'nerja' }, segment: arrivalSegments },
  {
    key: 'nerja.directions',
    legacySlug: 'nerja-directions-arrival-guide',
    family: 'directions-arrival-guide',
    parent: 'nerja',
    props: { destination: 'nerja' },
    segment: {
      es: 'llegada-a-amara-playa',
      en: 'amara-playa-arrival',
      de: 'anfahrt-amara-playa',
      nl: 'aankomst-amara-playa',
      sv: 'ankomst-amara-playa'
    }
  },
  { key: 'nerja.parking', legacySlug: 'nerja-parking', family: 'parking', parent: 'nerja', props: { destination: 'nerja' }, segment: parkingSegments },
  { key: 'nerja.geography', legacySlug: 'nerja-geography', family: 'geography', parent: 'nerja', props: { destination: 'nerja' }, segment: geographySegments },
  { key: 'nerja.where-to-stay', legacySlug: 'nerja-where-to-stay', family: 'nerja-where-to-stay', parent: 'nerja', segment: whereToStaySegments },
  { key: 'nerja.weather', legacySlug: 'nerja-weather', family: 'weather', parent: 'nerja', props: { destination: 'nerja' }, segment: weatherSegments },
  { key: 'nerja.winter', legacySlug: 'nerja-winter-stays', family: 'winter-stays', parent: 'nerja', props: { destination: 'nerja' }, segment: winterSegments },
  { key: 'nerja.supermarkets', legacySlug: 'nerja-daily-life', family: 'daily-life', parent: 'nerja', props: { destination: 'nerja', topic: 'shopping-markets' }, segment: supermarketSegments },
  { key: 'nerja.health', legacySlug: 'nerja-health-emergency', family: 'daily-life', parent: 'nerja', props: { destination: 'nerja', topic: 'health-emergency' }, segment: healthSegments },
  { key: 'nerja.experience', legacySlug: 'nerja-experience', family: 'nerja-experience', parent: 'nerja', segment: experienceSegments },
  { key: 'nerja.experience.beaches', legacySlug: 'nerja-beaches', family: 'nerja-beaches', parent: 'nerja.experience', segment: beachSegments },
  { key: 'nerja.experience.day-trips', legacySlug: 'nerja-day-trips', family: 'nerja-day-trips', parent: 'nerja.experience', segment: dayTripSegments },
  {
    key: 'nerja.experience.food',
    legacySlug: 'nerja-food',
    family: 'nerja-food',
    parent: 'nerja.experience',
    segment: {
      es: 'donde-comer',
      en: 'food',
      de: 'essen-und-trinken',
      nl: 'eten-en-drinken',
      sv: 'mat-och-dryck'
    }
  },
  {
    key: 'nerja.experience.caves',
    legacySlug: 'nerja-caves',
    family: 'nerja-experience-article',
    parent: 'nerja.experience',
    props: { page: 'caves' },
    segment: { es: 'cuevas', en: 'caves', de: 'hoehlen', nl: 'grotten', sv: 'grottor' }
  },
  {
    key: 'nerja.experience.balcon-de-europa',
    legacySlug: 'nerja-balcon-de-europa',
    family: 'nerja-experience-article',
    parent: 'nerja.experience',
    props: { page: 'balcon' },
    segment: shared('balcon-de-europa')
  },
  {
    key: 'nerja.experience.nightlife',
    legacySlug: 'nerja-nightlife',
    family: 'nerja-nightlife',
    parent: 'nerja.experience',
    segment: { es: 'vida-nocturna', en: 'nightlife', de: 'nachtleben', nl: 'nachtleven', sv: 'nattliv' }
  },
  { key: 'nerja.experience.verano-azul', legacySlug: 'nerja-verano-azul', family: 'nerja-verano-azul', parent: 'nerja.experience', segment: shared('verano-azul') },

  /* =========================================================
     TARIFA
  ========================================================= */
  { key: 'tarifa', legacySlug: 'tarifa-location', family: 'tarifa-location', identity: true, paths: shared('tarifa') },
  { key: 'tarifa.arrival', legacySlug: 'getting-to-tarifa', family: 'arrival-guide', parent: 'tarifa', props: { destination: 'tarifa' }, segment: arrivalSegments },
  {
    key: 'tarifa.directions',
    legacySlug: 'tarifa-directions-arrival-guide',
    family: 'directions-arrival-guide',
    parent: 'tarifa',
    props: { destination: 'tarifa' },
    segment: {
      es: 'llegada-a-amara-family-surf',
      en: 'amara-family-surf-arrival',
      de: 'anfahrt-amara-family-surf',
      nl: 'aankomst-amara-family-surf',
      sv: 'ankomst-amara-family-surf'
    }
  },
  { key: 'tarifa.parking', legacySlug: 'tarifa-parking', family: 'parking', parent: 'tarifa', props: { destination: 'tarifa' }, segment: parkingSegments },
  { key: 'tarifa.geography', legacySlug: 'tarifa-geography', family: 'geography', parent: 'tarifa', props: { destination: 'tarifa' }, segment: geographySegments },
  { key: 'tarifa.where-to-stay', legacySlug: 'tarifa-where-to-stay', family: 'tarifa-where-to-stay', parent: 'tarifa', segment: whereToStaySegments },
  { key: 'tarifa.weather', legacySlug: 'tarifa-weather', family: 'weather', parent: 'tarifa', props: { destination: 'tarifa' }, segment: weatherSegments },
  { key: 'tarifa.winter', legacySlug: 'tarifa-winter-stays', family: 'winter-stays', parent: 'tarifa', props: { destination: 'tarifa' }, segment: winterSegments },
  { key: 'tarifa.supermarkets', legacySlug: 'tarifa-daily-life', family: 'daily-life', parent: 'tarifa', props: { destination: 'tarifa', topic: 'shopping-markets' }, segment: supermarketSegments },
  { key: 'tarifa.health', legacySlug: 'tarifa-health-emergency', family: 'daily-life', parent: 'tarifa', props: { destination: 'tarifa', topic: 'health-emergency' }, segment: healthSegments },
  { key: 'tarifa.experience', legacySlug: 'tarifa-experience', family: 'tarifa-experience', parent: 'tarifa', segment: experienceSegments },
  { key: 'tarifa.experience.beaches', legacySlug: 'tarifa-beaches', family: 'tarifa-guide', parent: 'tarifa.experience', props: { guide: 'beaches' }, segment: beachSegments },
  {
    key: 'tarifa.experience.food-evening-life',
    legacySlug: 'tarifa-food-evening-life',
    family: 'tarifa-experience-spoke',
    parent: 'tarifa.experience',
    props: { spoke: 'food-evening-life' },
    segment: {
      es: 'gastronomia-y-noche',
      en: 'food-and-evenings',
      de: 'essen-und-abende',
      nl: 'eten-en-avonden',
      sv: 'mat-och-kvallar'
    }
  },
  {
    key: 'tarifa.experience.nature-wildlife',
    legacySlug: 'tarifa-nature-wildlife',
    family: 'tarifa-experience-spoke',
    parent: 'tarifa.experience',
    props: { spoke: 'nature-wildlife' },
    segment: { es: 'naturaleza', en: 'nature-and-wildlife', de: 'natur', nl: 'natuur', sv: 'natur' }
  },
  {
    key: 'tarifa.experience.old-town-history',
    legacySlug: 'tarifa-old-town-history',
    family: 'tarifa-experience-spoke',
    parent: 'tarifa.experience',
    props: { spoke: 'old-town-history' },
    segment: oldTownSegments
  },
  {
    key: 'tarifa.experience.bolonia-baelo-claudia',
    legacySlug: 'tarifa-bolonia-baelo-claudia',
    family: 'tarifa-experience-spoke',
    parent: 'tarifa.experience',
    props: { spoke: 'bolonia-baelo-claudia' },
    segment: shared('bolonia-baelo-claudia')
  },
  // Kitesurfing is Tarifa's defining draw and its largest cluster, so it sits
  // as a branch directly under the destination rather than beneath Experiences.
  {
    key: 'tarifa.kitesurfing',
    legacySlug: 'tarifa-kitesurfing',
    family: 'tarifa-kitesurf-hub',
    parent: 'tarifa',
    segment: { es: 'kitesurf', en: 'kitesurfing', de: 'kitesurfen', nl: 'kitesurfen', sv: 'kitesurfing' }
  },
  { key: 'tarifa.kitesurfing.spots', legacySlug: 'tarifa-kitesurf-spots', family: 'tarifa-kitesurf-spots', parent: 'tarifa.kitesurfing', segment: shared('spots') },
  {
    key: 'tarifa.kitesurfing.wind',
    legacySlug: 'tarifa-wind-kitesurfing',
    family: 'tarifa-kitesurf-wind',
    parent: 'tarifa.kitesurfing',
    segment: { es: 'viento', en: 'wind', de: 'wind', nl: 'wind', sv: 'vind' }
  },
  {
    key: 'tarifa.kitesurfing.forecast',
    legacySlug: 'tarifa-kitesurf-forecast',
    family: 'tarifa-kite-forecast',
    parent: 'tarifa.kitesurfing',
    segment: { es: 'prevision', en: 'forecast', de: 'vorhersage', nl: 'voorspelling', sv: 'prognos' }
  },
  {
    key: 'tarifa.kitesurfing.school',
    legacySlug: 'tarifa-kite-school',
    family: 'tarifa-kitesurf-spoke',
    parent: 'tarifa.kitesurfing',
    props: { spoke: 'kite-school' },
    segment: { es: 'escuela', en: 'kite-school', de: 'kiteschule', nl: 'kiteschool', sv: 'kiteskola' }
  },
  {
    key: 'tarifa.kitesurfing.kitecamp',
    legacySlug: 'tarifa-kitecamp',
    family: 'tarifa-kitesurf-spoke',
    parent: 'tarifa.kitesurfing',
    props: { spoke: 'kitecamp' },
    segment: shared('kitecamp')
  },
  {
    key: 'tarifa.kitesurfing.equipment',
    legacySlug: 'tarifa-kite-equipment',
    family: 'tarifa-kitesurf-spoke',
    parent: 'tarifa.kitesurfing',
    props: { spoke: 'equipment' },
    segment: { es: 'material', en: 'gear', de: 'material', nl: 'materiaal', sv: 'utrustning' }
  },
  { key: 'tarifa.kitesurfing.bildungsurlaub', legacySlug: 'tarifa-bildungsurlaub', family: 'tarifa-bildungsurlaub', parent: 'tarifa.kitesurfing', segment: shared('bildungsurlaub') },
  { key: 'tarifa.kitesurfing.surf-club', legacySlug: 'amara-tarifa-surf-club', family: 'tarifa-kite-partner', parent: 'tarifa.kitesurfing', segment: shared('tarifa-surf-club') }
];

/** @type {Map<string, PublicRoute>} */
const routesByKey = new Map();

/** @type {readonly PublicRoute[]} */
export const PUBLIC_ROUTES = Object.freeze(
  definitions.map((definition) => {
    const parent = definition.parent ? routesByKey.get(definition.parent) : undefined;

    if (definition.parent && !parent) {
      throw new Error(`[AMARA routes] "${definition.key}" declares unknown parent "${definition.parent}".`);
    }

    if (routesByKey.has(definition.key)) {
      throw new Error(`[AMARA routes] Duplicate route key "${definition.key}".`);
    }

    /** @type {LocalizedSegments} */
    let paths;

    if (definition.paths) {
      paths = definition.paths;
    } else if (definition.segment && parent) {
      const segment = definition.segment;
      paths = /** @type {LocalizedSegments} */ (
        Object.fromEntries(
          PUBLIC_ROUTE_LOCALES.map((locale) => [
            locale,
            parent.paths[/** @type {PublicRouteLocale} */ (locale)]
              ? `${parent.paths[/** @type {PublicRouteLocale} */ (locale)]}/${segment[/** @type {PublicRouteLocale} */ (locale)]}`
              : segment[/** @type {PublicRouteLocale} */ (locale)]
          ])
        )
      );
    } else {
      throw new Error(`[AMARA routes] "${definition.key}" needs either full paths or a parent and a segment.`);
    }

    /** @type {PublicRoute} */
    const route = Object.freeze({
      key: definition.key,
      legacySlug: definition.legacySlug,
      family: definition.family,
      parent: definition.parent,
      identity: definition.identity === true,
      indexable: definition.indexable !== false,
      props: Object.freeze({ ...(definition.props ?? {}) }),
      paths: Object.freeze({ ...paths })
    });

    routesByKey.set(route.key, route);
    return route;
  })
);

export const PUBLIC_ROUTES_BY_KEY = routesByKey;
export const PUBLIC_ROUTE_KEYS = Object.freeze(PUBLIC_ROUTES.map((route) => route.key));

/** Branded stay routes, kept explicit for the structured-data and route audits. */
export const VACATION_RENTAL_ROUTE_KEYS = Object.freeze(
  PUBLIC_ROUTES.filter((route) => route.family === 'vacation-rental').map((route) => route.key)
);

/**
 * @param {string} key
 * @returns {PublicRoute}
 */
export function getPublicRoute(key) {
  const route = routesByKey.get(key);

  if (!route) {
    throw new Error(`[AMARA routes] Unknown public route key "${key}".`);
  }

  return route;
}

/**
 * @param {string} path Locale-neutral path without a leading slash; '' for the homepage.
 * @param {string} locale
 * @returns {string}
 */
export function localizePublicPath(path, locale) {
  if (locale === DEFAULT_PUBLIC_ROUTE_LOCALE) {
    return path ? `/${path}` : '/';
  }

  return path ? `/${locale}/${path}` : `/${locale}`;
}

/**
 * @param {string} key
 * @param {string} locale
 * @returns {string}
 */
export function buildPublicRoutePath(key, locale) {
  const route = getPublicRoute(key);
  const path = route.paths[/** @type {PublicRouteLocale} */ (locale)];

  if (typeof path !== 'string') {
    throw new Error(`[AMARA routes] "${key}" has no path for locale "${locale}".`);
  }

  return localizePublicPath(path, locale);
}

/**
 * The flat pre-migration path of a route, used only to author redirects.
 * @param {string} key
 * @param {string} locale
 * @returns {string}
 */
export function buildLegacyPublicRoutePath(key, locale) {
  return localizePublicPath(getPublicRoute(key).legacySlug, locale);
}

/** @type {Map<string, { key: string; locale: PublicRouteLocale }>} */
const routesByLocalizedPath = new Map();

for (const route of PUBLIC_ROUTES) {
  for (const locale of PUBLIC_ROUTE_LOCALES) {
    const localized = localizePublicPath(route.paths[/** @type {PublicRouteLocale} */ (locale)], locale);

    if (routesByLocalizedPath.has(localized)) {
      throw new Error(
        `[AMARA routes] Path "${localized}" is claimed by both "${routesByLocalizedPath.get(localized)?.key}" and "${route.key}".`
      );
    }

    routesByLocalizedPath.set(localized, { key: route.key, locale: /** @type {PublicRouteLocale} */ (locale) });
  }
}

/**
 * @param {string} pathname
 * @returns {string}
 */
export function normalizePublicPathname(pathname) {
  const pathOnly = (pathname.split(/[?#]/)[0] || '')
    .replace(/\/index\.html$/i, '/')
    .replace(/\.html$/i, '');
  const segments = pathOnly.split('/').filter(Boolean);

  return segments.length ? `/${segments.join('/')}` : '/';
}

/**
 * Resolves a pathname (with or without `.html`, trailing slash, query or hash)
 * to the public route and locale that own it, or null for private routes.
 * @param {string} pathname
 * @returns {{ route: PublicRoute; locale: PublicRouteLocale } | null}
 */
export function resolvePublicRoute(pathname) {
  const match = routesByLocalizedPath.get(normalizePublicPathname(pathname));

  return match ? { route: getPublicRoute(match.key), locale: match.locale } : null;
}
