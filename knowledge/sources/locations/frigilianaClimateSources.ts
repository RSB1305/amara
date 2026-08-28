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
  {
    id: 'copernicus-era5-land-monthly-means-2026',
    title: 'ERA5-Land monthly averaged data from 1950 to present',
    publisher: 'Copernicus Climate Change Service / ECMWF',
    sourceType: 'official',
    url: 'https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land-monthly-means',
    accessedAt: '2026-08-28',
    language: 'en',
    scope: 'Official dataset documentation for globally consistent monthly land reanalysis variables, temporal coverage and grid resolution.',
    limitations:
      'ERA5-Land is reanalysis, not a local observing station. The CDS product is regridded to 0.1° and its native resolution is about 9 km, so terrain, coast and property microclimates are not resolved directly.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaClimateSourceId = (typeof frigilianaClimateSources)[number]['id'];
