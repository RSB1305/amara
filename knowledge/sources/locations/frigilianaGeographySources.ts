import { defineKnowledgeSources } from '../../schema';

export const frigilianaGeographySources = defineKnowledgeSources([
  {
    id: 'sima-frigiliana-municipal-record-2026',
    title: 'Frigiliana municipal record',
    publisher: 'Instituto de Estadística y Cartografía de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official municipal area, main-settlement reference altitude, coordinates and population-centre count.',
    limitations:
      'The altitude and coordinates are reference values for the principal settlement, not a complete elevation model for every street or address.',
    reuse: 'link-and-cite',
  },
  {
    id: 'aemet-frigiliana-municipal-reference-2026',
    title: 'Municipal forecast: Frigiliana',
    publisher: 'Agencia Estatal de Meteorología',
    sourceType: 'official',
    url: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official reference altitude and coordinates used for the municipal forecast.',
    limitations:
      'AEMET explicitly warns that a municipal forecast refers to the capital and that altitude can vary substantially within a municipality.',
    reuse: 'link-and-cite',
  },
  {
    id: 'boja-frigiliana-historic-ensemble-2015',
    title: 'Decree 183/2014: Frigiliana historic ensemble',
    publisher: 'Junta de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja/2015/23/26',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Protected historic-settlement morphology, topography, Barribarto, Barribajo, El Ingenio and later expansion.',
    limitations:
      'Descriptions apply to the designated historic ensemble and its documented morphology; they must not be generalized to every Frigiliana address.',
    reuse: 'link-and-cite',
  },
  {
    id: 'junta-tejeda-almijara-visitor-record-2026',
    title: 'Sierras de Tejeda, Almijara y Alhama natural park',
    publisher: 'Junta de Andalucía — Ventana del Visitante',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/sierras-de-tejeda-almijara-y-alhama-2/255035',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official protected-area size, regional setting and included municipalities.',
    limitations:
      'Municipality inclusion does not establish that the whole municipality or the built village lies inside the protected-area boundary.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaGeographySourceId = (typeof frigilianaGeographySources)[number]['id'];
