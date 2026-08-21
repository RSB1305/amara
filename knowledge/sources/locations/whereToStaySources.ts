import { defineKnowledgeSources } from '../../schema';

export const whereToStaySources = defineKnowledgeSources([
  {
    id: 'frigiliana-heritage-decree-2015', title: 'Decree 11/2015: Frigiliana historic ensemble', publisher: 'Junta de Andalucía', sourceType: 'official', url: 'https://www.juntadeandalucia.es/boja/2015/23/26', accessedAt: '2026-08-21', language: 'es', scope: 'Historic morphology, Barribarto, Barribajo, Ensanche, later southern expansion, contour streets and stepped links.', limitations: 'It describes protected morphology, not access conditions for every address.', reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-historic-traffic-rule-2026', title: 'Regulation of traffic in Frigiliana historic centre', publisher: 'Ayuntamiento de Frigiliana', sourceType: 'official', url: 'https://frigiliana.es/entrada-en-vigor-de-la-ordenanza-de-regulacion-del-trafico-en-el-casco-antiguo/', accessedAt: '2026-08-21', language: 'es', scope: 'Evidence that vehicle access to the historic centre is regulated.', limitations: 'The currently applicable street-level rules still require confirmation before route-specific advice.', reuse: 'link-and-cite'
  },
  {
    id: 'amara-frigiliana-location-baseline-2026', title: 'Casa AMARA location baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'src/content/frigilianaStreetsStairsContent.ts', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Existing operator-authored address, distance and route claims.', limitations: 'Exact distance, steps, vehicle approach and accessibility require first-party measurement.', reuse: 'internal-only'
  },
  {
    id: 'nerja-carabeo-official-2026', title: 'Playa del Carabeo', publisher: 'Ayuntamiento de Nerja — Visita Nerja', sourceType: 'official', url: 'https://visita.nerja.es/descubre/playas/playa-del-carabeo-p107116', accessedAt: '2026-08-21', language: 'es', scope: 'Official beach identity and stepped access.', limitations: 'A beach access description does not define a neighbourhood or every accommodation route.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-carabeillo-official-2026', title: 'Playa del Carabeíllo', publisher: 'Ayuntamiento de Nerja — Visita Nerja', sourceType: 'official', url: 'https://visita.nerja.es/descubre/playas/playa-del-carabeillo-p107115', accessedAt: '2026-08-21', language: 'es', scope: 'Official beach identity and stepped access.', limitations: 'It does not establish route effort from every Carabeo or Parador address.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-burriana-official-2026', title: 'Playa de Burriana', publisher: 'Ayuntamiento de Nerja — Visita Nerja', sourceType: 'official', url: 'https://visita.nerja.es/descubre/playas/playa-de-burriana-p107105', accessedAt: '2026-08-21', language: 'es', scope: 'Official Burriana beach access, services, transport and accessibility context.', limitations: 'Beach infrastructure is not an accessibility guarantee for every accommodation or the route to the town centre.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-municipal-parking-rule-2021', title: 'Municipal parking charge: Balcón de Europa and Burriana', publisher: 'Ayuntamiento de Nerja', sourceType: 'official', url: 'https://transparencia.nerja.es/wp-content/uploads/2021/11/211105-9.1-TASA-APARCAMIENTOS-MUNICIPALES-BALCON-DE-EUROPA-Y-BURRIANA.pdf', accessedAt: '2026-08-21', language: 'es', scope: 'Existence and administrative context of the Balcón de Europa and Burriana municipal car parks.', limitations: 'Prices, capacity in use and availability are volatile; adjacent-street lists are not neighbourhood boundaries.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-planning-map-2026', title: 'Nerja municipal planning map', publisher: 'Ayuntamiento de Nerja', sourceType: 'official', url: 'https://transparencia.nerja.es/wp-content/uploads/2020/05/02_SUELO-NO-URBANIZABLE-02-1.2-nuevo.pdf', accessedAt: '2026-08-21', language: 'es', scope: 'Planning-map anchors for Capistrana and San Juan de Capistrana.', limitations: 'Planning labels do not by themselves establish complete tourism-neighbourhood boundaries.', reuse: 'link-and-cite'
  },
  {
    id: 'amara-nerja-location-baseline-2026', title: 'AMARA Playa location baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'src/content/nerjaLocationContent.ts', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Existing operator-authored location, distance, quietness and access claims.', limitations: 'Exact route, entrance and accessibility statements require a documented property evidence pack.', reuse: 'internal-only'
  },
  {
    id: 'tarifa-la-marina-plan-2026', title: 'Tarifa planning documentation: La Marina I', publisher: 'Ayuntamiento de Tarifa', sourceType: 'official', url: 'https://www.aytotarifa.com/images/documentos/recampo.pdf', accessedAt: '2026-08-21', language: 'es', scope: 'Official planning use of the name La Marina I.', limitations: 'A planning-sector name does not create a single precise tourism-neighbourhood boundary for every usage of “La Marina”.', reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-los-lances-official-2026', title: 'Playa de Los Lances', publisher: 'Junta de Andalucía — Ventana del Visitante', sourceType: 'official', url: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/playa-de-los-lances', accessedAt: '2026-08-21', language: 'es', scope: 'Official beach and protected-landscape context for Los Lances.', limitations: 'The coastal name must not be presented as one homogeneous urban neighbourhood.', reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-historic-access-2021', title: 'Vehicle access control in Tarifa historic centre', publisher: 'Ayuntamiento de Tarifa', sourceType: 'official', url: 'https://www.aytotarifa.com/2021/05/06/a-partir-del-proximo-viernes-entra-en-vigor-el-control-del-acceso-de-vehiculos-al-casco-historico/', accessedAt: '2026-08-21', language: 'es', scope: 'Historical evidence that access to the historic centre has been regulated.', limitations: 'This 2021 notice must not be presented as the complete current 2026 rule.', reuse: 'link-and-cite'
  },
  {
    id: 'amara-tarifa-location-baseline-2026', title: 'AMARA Family & Surf location baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'src/content/vacationRentalEntities.ts and src/content/tarifaGuideContent.ts', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Operator-authored garage, supermarket, walking-time, beach-distance and westbound-access claims.', limitations: 'Exact routes and distances require a dated property evidence pack; operator facts must remain clearly property-specific.', reuse: 'internal-only'
  }
] as const);

export type WhereToStaySourceId = (typeof whereToStaySources)[number]['id'];
