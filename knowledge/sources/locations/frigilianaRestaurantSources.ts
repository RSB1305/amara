import { defineKnowledgeSources } from '../../schema';

export const frigilianaRestaurantSources = defineKnowledgeSources([
  {
    id: 'the-garden-frigiliana-operator-2026', title: 'The Garden Restaurant', publisher: 'The Garden Restaurant', sourceType: 'secondary',
    url: 'https://thegardenfrigiliana.com/', accessedAt: '2026-08-28', language: 'en',
    scope: 'Restaurant-operated identity, cuisine framing, reservation channel and Calle del Santo Cristo address.',
    limitations: 'Menus, hours, availability and terrace operation are volatile operator claims.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-municipality-the-garden-2026', title: 'The Garden Restaurant', publisher: 'Ayuntamiento de Frigiliana', sourceType: 'official',
    url: 'https://frigiliana.es/places/the-garden-restaurant/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal business entry for Barribarto position, terrace, cuisine context and address.',
    limitations: 'Opening times and operating details remain volatile and need direct confirmation.', reuse: 'link-and-cite',
  },
  {
    id: 'la-taperia-frigiliana-operator-2026', title: 'La Tapería Frigiliana', publisher: 'La Tapería Frigiliana', sourceType: 'secondary',
    url: 'https://www.lataperiafrigiliana.com/lataperiaesp.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Restaurant-operated current address and international, Mediterranean and Arabic cuisine framing.',
    limitations: 'Menus, dietary suitability, hours and operating status are volatile and require direct confirmation.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-municipality-el-adarve-2026', title: 'Restaurante El Adarve', publisher: 'Ayuntamiento de Frigiliana', sourceType: 'official',
    url: 'https://frigiliana.es/places/restaurante-el-adarve/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal business entry for Calle Alta position, Barribarto context, terrace-table count and named dishes.',
    limitations: 'The listing does not guarantee a particular table, view, menu item or current opening time.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-municipality-gloria-bendita-2026', title: 'Restaurante Gloria Bendita', publisher: 'Ayuntamiento de Frigiliana', sourceType: 'official',
    url: 'https://frigiliana.es/places/gloria-bendita/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal business entry for Plaza de las Tres Culturas position and changing Mediterranean/fusion menu concept.',
    limitations: 'Hours, closures and menu details are volatile; municipal promotional language is not an AMARA recommendation.', reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaRestaurantSourceId = (typeof frigilianaRestaurantSources)[number]['id'];
