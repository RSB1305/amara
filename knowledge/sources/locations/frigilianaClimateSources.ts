import { defineKnowledgeSources } from '../../schema';

export const frigilianaClimateSources = defineKnowledgeSources([
  {
    id: 'aemet-malaga-airport-normals-1981-2010',
    title: 'Valores climatológicos normales: Málaga Aeropuerto',
    publisher: 'Agencia Estatal de Meteorología',
    sourceType: 'official',
    url: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=6155A',
    accessedAt: '2026-08-28',
    language: 'es',
    scope: 'Official 1981–2010 monthly and annual normals for station 6155A at Málaga Airport.',
    limitations:
      'The station is at 7 metres in Málaga and is a regional coastal proxy only; its values are not Frigiliana observations or a current forecast.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaClimateSourceId = (typeof frigilianaClimateSources)[number]['id'];
