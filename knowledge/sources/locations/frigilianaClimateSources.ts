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
  {
    id: 'aemet-terral-definition-2026',
    title: 'Terral: el viento terral en la divulgación y el glosario de AEMET',
    publisher: 'Agencia Estatal de Meteorología',
    sourceType: 'official',
    url: 'https://www.aemet.es/es/conocermas/recursos_en_linea/glosario',
    accessedAt: '2026-08-30',
    language: 'es',
    scope: 'AEMET identifies the terral as the land breeze that blows from the land out to sea on the Malaga coast, arriving from the north and north-west.',
    limitations:
      'This establishes the definition and the wind direction only. It does not quantify temperatures, duration or effects for any particular municipality, and Frigiliana has no AEMET observing station of its own.',
    reuse: 'link-and-cite',
  },
  {
    id: 'tiempo-com-afloramiento-malaga-2026-08',
    title: 'Caida record de la temperatura del mar en Malaga: de una ola de calor marina a registrar tan solo 15,9 C',
    publisher: 'tiempo.com (Meteored)',
    sourceType: 'secondary',
    url: 'https://www.tiempo.com/noticias/actualidad/que-esta-pasando-en-el-mar-de-malaga-la-temperatura-cae-casi-13-c-en-apenas-una-semana.html',
    accessedAt: '2026-08-30',
    language: 'es',
    scope: 'Meteorological reporting on the August 2026 upwelling event off Malaga, the Ekman transport mechanism in the Alboran Sea, and the size of the sea-surface temperature drop.',
    limitations:
      'Specialist media reporting rather than an official dataset. The measurements cited are for the Malaga coast, not for a named beach near Nerja, and a single event does not establish how often this recurs.',
    reuse: 'link-and-cite',
  },
  {
    id: 'aemet-sevilla-airport-normals-1981-2010',
    title: 'Valores climatologicos normales: Sevilla Aeropuerto',
    publisher: 'Agencia Estatal de Meteorologia',
    sourceType: 'official',
    url: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5783',
    accessedAt: '2026-08-30',
    language: 'es',
    scope: 'Official 1981-2010 monthly normals for station 5783 at Sevilla Airport, 34 metres, including mean daily maximum, precipitation and sunshine hours.',
    limitations:
      'An inland Andalusian station used only as an external comparison point. Its values are not Frigiliana observations, must not be corrected for elevation or interpolated, and are not a forecast.',
    reuse: 'link-and-cite',
  },
  {
    id: 'aemet-cordoba-airport-normals-1981-2010',
    title: 'Valores climatologicos normales: Cordoba Aeropuerto',
    publisher: 'Agencia Estatal de Meteorologia',
    sourceType: 'official',
    url: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5402',
    accessedAt: '2026-08-30',
    language: 'es',
    scope: 'Official 1981-2010 monthly normals for station 5402 at Cordoba Airport, 90 metres, including mean daily maximum, precipitation and sunshine hours.',
    limitations:
      'An inland Andalusian station used only as an external comparison point. Its values are not Frigiliana observations, must not be corrected for elevation or interpolated, and are not a forecast.',
    reuse: 'link-and-cite',
  },
  {
    id: 'knmi-schiphol-climate-table-1981-2010',
    title: 'Schiphol, langjarige gemiddelden, tijdvak 1981-2010',
    publisher: 'Koninklijk Nederlands Meteorologisch Instituut',
    sourceType: 'official',
    url: 'https://cdn.knmi.nl/knmi/map/page/klimatologie/klimaatatlas/tabel/stationsdata/klimtab_8110_240.pdf',
    accessedAt: '2026-08-30',
    language: 'nl',
    scope: 'Official KNMI climate table for station 240 Schiphol covering the same 1981-2010 reference period as the AEMET station normals, with mean maximum temperature, monthly precipitation total and sunshine duration.',
    limitations:
      'A northern European comparison point only. KNMI derives sunshine duration from global radiation, so sunshine hours may not be presented as instrumentally identical to the AEMET figures; temperature and precipitation are comparable as monthly normals. Nothing here describes Frigiliana.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaClimateSourceId = (typeof frigilianaClimateSources)[number]['id'];
