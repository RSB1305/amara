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
] as const);

export type NerjaRestaurantSourceId = (typeof nerjaRestaurantSources)[number]['id'];
