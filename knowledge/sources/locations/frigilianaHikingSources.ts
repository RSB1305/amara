import { defineKnowledgeSources } from '../../schema';

export const frigilianaHikingSources = defineKnowledgeSources([
  {
    id: 'frigiliana-tourism-hiking-index-2026', title: 'Rutas de senderismo', publisher: 'Turismo de Frigiliana', sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/rutas-de-senderismo.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal route catalogue with published distance, approximate duration and difficulty for the Frigiliana walking network.',
    limitations: 'The catalogue originated in 2013 and does not establish current access, surface condition, safety or suitability for a particular day.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-tourism-cruz-pinto-2026', title: 'Cruz de Pinto', publisher: 'Turismo de Frigiliana', sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/cruz-de-pinto.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal route description, start, riverbed segment and return form for Cruz de Pinto.',
    limitations: 'The page contains an internally inconsistent altitude statement; no ascent value is adopted and current conditions require a live check.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-tourism-cahorros-higueron-2026', title: 'Cahorros del río Higuerón', publisher: 'Turismo de Frigiliana', sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/cahorros-del-rio-higueron.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal route description, riverbed terrain, route sequence and return to the initial access for Cahorros.',
    limitations: 'The page does not establish current water level, flood safety, closure status or route condition.', reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-tourism-el-fuerte-route-2026', title: 'El Fuerte', publisher: 'Turismo de Frigiliana', sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/el-fuerte.html', accessedAt: '2026-08-28', language: 'es',
    scope: 'Municipal route description and summit elevation for El Fuerte.',
    limitations: 'The page and catalogue do not establish current access, surface, shade, total ascent or day-specific safety.', reuse: 'link-and-cite',
  },
  {
    id: 'diputacion-malaga-gr249-topoguide-2021', title: 'Topoguía GR 249 Gran Senda de Málaga — edición noviembre 2021', publisher: 'Diputación de Málaga', sourceType: 'official',
    url: 'https://static.malaga.es/malaga/subidas/descargas/archivos/7/1/370917/topoguia-gr-249-gran-senda-de-malaga-%28edicion-noviembre-2021%29.pdf', accessedAt: '2026-08-28', language: 'es',
    scope: 'Official stage identity, mountain character, route sequence and published planning data for Stage 6 Frigiliana–Cómpeta.',
    limitations: 'A 2021 topoguide is not a current closure notice; tracks, surfaces, water and transport must be checked for the intended date.', reuse: 'link-and-cite',
  },
  {
    id: 'nerja-municipality-chillar-closure-2025', title: 'El acceso al río Chíllar permanece cerrado', publisher: 'Ayuntamiento de Nerja', sourceType: 'official',
    url: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/', accessedAt: '2026-08-28', language: 'es',
    scope: 'Dated 5 August 2025 municipal statement that recreational access remained closed as a precaution against forest-fire risk.',
    limitations: 'Historical closure evidence does not establish the live status on a later date; current authority confirmation remains mandatory.', reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaHikingSourceId = (typeof frigilianaHikingSources)[number]['id'];
