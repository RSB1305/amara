import { defineKnowledgeSources } from '../../schema';

export const tarifaGeographySources = defineKnowledgeSources([
  {
    id: 'sima-tarifa-municipal-record-2026',
    title: 'Tarifa municipal record',
    publisher: 'Instituto de Estadística y Cartografía de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=11035',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official municipal area, main-settlement reference altitude, coordinates and population-centre count.',
    limitations:
      'The altitude and coordinates are principal-settlement reference values, not complete municipal terrain data.',
    reuse: 'link-and-cite'
  },
  {
    id: 'ign-punta-de-tarifa-coordinates-2026',
    title: 'Geographic extreme-point coordinates: Punta de Tarifa',
    publisher: 'Instituto Geográfico Nacional',
    sourceType: 'official',
    url: 'https://www.ign.es/web/preguntas-frecuentes',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official ETRS89 coordinates for Punta de Tarifa and stated BCN25 positional accuracy.',
    limitations:
      'Coordinates identify the named point; they do not resolve every semantic formulation of mainland, island, municipality or city superlatives.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-tourism-isla-de-las-palomas-2026',
    title: 'Isla de Tarifa / Isla de las Palomas',
    publisher: 'Turismo de Tarifa',
    sourceType: 'official',
    url: 'https://turismodetarifa.com/que-visitar/isla-tarifa/',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Local official description of the 1808 causeway and the Atlantic–Mediterranean orientation convention at the island.',
    limitations:
      'This is a local orientation convention, not a hydrographic proof of a visibly sharp boundary between two water bodies. Visit information is volatile.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-tourism-history-2026',
    title: 'History of Tarifa',
    publisher: 'Turismo de Tarifa',
    sourceType: 'official',
    url: 'https://turismodetarifa.com/que-visitar/historia/',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Local official description of the island, Punta Marroquí and the 1808 connection to the town.',
    limitations:
      'Promotional geographic superlatives require precise wording and must be separated from definitions that include European islands.',
    reuse: 'link-and-cite'
  },
  {
    id: 'miteco-strait-alboran-marine-framework',
    title: 'Marine strategy framework: Strait and Alborán',
    publisher: 'Ministerio para la Transición Ecológica y el Reto Demográfico',
    sourceType: 'official',
    url: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/I_Marco%20General_Estrecho%20y%20Alboran_tcm30-130896.pdf',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official marine description of water exchange, transition and the Strait’s approximate length and width.',
    limitations:
      'Regional marine measurements do not establish distances or conditions at an individual accommodation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'miteco-strait-europe-africa-distance',
    title: 'Economic and social analysis: Strait and Alborán marine subdivision',
    publisher: 'Ministerio para la Transición Ecológica y el Reto Demográfico',
    sourceType: 'official',
    url: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/parteiiianalisiseconomicoysocialdmesal_tcm30-498343.pdf',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official regional statement of a 14.4-kilometre minimum separation between Europe and Africa in the Strait zone.',
    limitations:
      'The minimum continental separation is not the distance from Tarifa town, a beach, an accommodation or Tangier city centre.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-municipal-emergency-plan-2024',
    title: 'Tarifa municipal emergency plan',
    publisher: 'Ayuntamiento de Tarifa',
    sourceType: 'official',
    url: 'https://www.aytotarifa.com/wp-content/uploads/2024/11/Plan-de-Emergencia-municipal-Ayuntamiento-de-Tarifa.pdf',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Municipal coastline classification by Atlantic and Mediterranean frontage.',
    limitations:
      'Its rounded area differs slightly from the SIMA record and its coordinate transcription is unreliable; SIMA and IGN govern those fields here.',
    reuse: 'link-and-cite'
  },
  {
    id: 'junta-los-lances-protected-area-2026',
    title: 'Playa de los Lances natural area',
    publisher: 'Junta de Andalucía — Ventana del Visitante',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/playa-de-los-lances/255035',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official location, protected-area size and designation date for Playa de los Lances.',
    limitations:
      'Protected-area status does not by itself define the boundaries of the broader beach, La Marina or any accommodation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'junta-los-lances-trail-2026',
    title: 'Los Lances trail',
    publisher: 'Junta de Andalucía — Ventana del Visitante',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/los-lances/255035',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official orientation of the trail start at the north-west edge of Tarifa.',
    limitations:
      'Trail orientation does not establish an exact walking route or distance from an accommodation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-council-la-marina-location-2024',
    title: 'Municipal parking management notice for 2024',
    publisher: 'Ayuntamiento de Tarifa',
    sourceType: 'official',
    url: 'https://www.aytotarifa.com/wp-content/uploads/2024/08/Anuncio-Encargo-gestion-servicios-de-aparcamientos-municipales-temporada-2024.pdf',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Municipal location reference for La Marina at Avenida de Los Lances and Calle Mar Menor.',
    limitations:
      'This is a 2024 operational notice. Only its stable place-name/location relationship is reused; parking terms are not current geography evidence.',
    reuse: 'link-and-cite'
  },
  {
    id: 'visit-greece-gavdos-southernmost-europe-2026',
    title: 'Gavdos',
    publisher: 'Visit Greece',
    sourceType: 'official',
    url: 'https://www.visitgreece.gr/en/islands/crete/gavdos',
    accessedAt: '2026-08-21',
    language: 'en',
    scope: 'Official Greek tourism statement that Gavdos is Europe’s southernmost island/tip.',
    limitations:
      'Used only to demonstrate why an unqualified “southernmost point of Europe” claim for Tarifa is unsafe; it does not resolve the narrower mainland-city wording.',
    reuse: 'link-and-cite'
  }
] as const);

export type TarifaGeographySourceId = (typeof tarifaGeographySources)[number]['id'];
