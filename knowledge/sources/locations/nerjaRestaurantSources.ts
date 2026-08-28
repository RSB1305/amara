import { defineKnowledgeSources } from '../../schema';

export const nerjaRestaurantSources = defineKnowledgeSources([
  {
    id: 'restaurante-oliva-operator-2026', title: 'Restaurante Oliva', publisher: 'Restaurante Oliva', sourceType: 'secondary',
    url: 'https://www.restauranteoliva.com/spanish/index.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Restaurant-operated location, Mediterranean positioning, Plaza de España terrace and service windows.',
    limitations: 'Service times, group policy and terrace operation are volatile and weather-dependent.', reuse: 'link-and-cite',
  },
  {
    id: 'hotel-carabeo-restaurant34-2026', title: 'Restaurant 34', publisher: 'Hotel Carabeo', sourceType: 'secondary',
    url: 'https://www.hotelcarabeo.com/boutique_hotels_nerja/boutique_hotels_nerja_restaurant34.asp', accessedAt: '2026-08-28', language: 'en',
    scope: 'Operator page for Hotel Carabeo location, dining areas, summer sea-view terrace and service windows.',
    limitations: 'A sea view does not establish sunset orientation; terrace availability and hours are volatile.', reuse: 'link-and-cite',
  },
  {
    id: 'chiringuito-ayo-operator-2026', title: 'Chiringuito Ayo', publisher: 'Chiringuito Ayo', sourceType: 'secondary',
    url: 'https://chiringuitoayonerja.es/es/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Operator page for Burriana beachfront location, food profile, address and current daytime service window.',
    limitations: 'Hours and menu are volatile; operator heritage and quality language is not independent verification.', reuse: 'link-and-cite',
  },
  {
    id: 'el-pulguilla-operator-2026', title: 'El Pulguilla', publisher: 'Bar El Pulguilla S.L.', sourceType: 'secondary',
    url: 'https://www.elpulguilla.com/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Operator page for old-town position, access context, terrace and fried-fish, seafood, tapas and raciones profile.',
    limitations: 'No current service hours are adopted; menu, terrace and access details remain operational.', reuse: 'link-and-cite',
  },
  {
    id: 'sollun-operator-2026', title: 'Sollun Restaurante', publisher: 'Sollun Restaurante', sourceType: 'secondary',
    url: 'https://sollunrestaurant.com/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Operator identity, Calle Pintada address and cocina de autor positioning.',
    limitations: 'The operator site publishes conflicting evening closing times on different pages; no single closing time is normalized.', reuse: 'link-and-cite',
  },
  {
    id: 'cochrans-amara-operator-visit-2025',
    title: 'AMARA visit to Cochran’s Terrace',
    publisher: 'AMARA operator',
    sourceType: 'first-party-observation',
    url: 'https://maps.app.goo.gl/cSVGuSWBMMRCs5m77',
    locator: 'Google Drive: 2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001/05_OPERATOR_NOTES/AMARA Operator Note — Cochran’s Terrace sundowner (file 1n3TXYc_U_kL67D6_jv2Jxk_U-rX1sumzB2Ry-e1KnP4).',
    observedAt: 'summer 2025',
    language: 'de',
    scope: 'Personal visit, observed sunset, drinks ordered and the walked approach from AMARA Playa on Calle Castilla Pérez.',
    limitations: 'One remembered summer visit. It does not establish current opening hours, permanent menu items, sunset visibility from every table or an exact measured walking distance.',
    reuse: 'internal-only',
  },
  {
    id: 'nerja-municipality-cochrans-activity-2026',
    title: 'Calificación ambiental favorable para Cochrans',
    publisher: 'Ayuntamiento de Nerja',
    sourceType: 'official',
    url: 'https://transparencia.nerja.es/normativa-municipal-vigente/calificaciones-ambientales/',
    accessedAt: '2026-08-28',
    language: 'es',
    scope: 'Municipal transparency entry published on 2026-01-29 for a hospitality-with-music activity named Cochrans at Bajada Salón.',
    limitations: 'The administrative record supports identity, location context and recent authorization; it does not prove that the venue is open on a particular day or confirm its current hours, menu or terrace availability.',
    reuse: 'link-and-cite',
  },
] as const);

export type NerjaRestaurantSourceId = (typeof nerjaRestaurantSources)[number]['id'];
