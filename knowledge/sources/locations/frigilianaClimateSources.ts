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
      'The station is at 7 metres in Málaga and is a regional coastal proxy only; its values are not Frigiliana observations or a current forecast. The page also still shows 1981-2010 while AEMET itself has used 1991-2020 as the standard since January 2023, so these values must not be placed beside a 1991-2020 figure; the current path is the OpenData normals endpoint for the station.',
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
  {
    id: 'metoffice-heathrow-averages-1991-2020',
    title: 'Location-specific long-term averages: Heathrow',
    publisher: 'Met Office',
    sourceType: 'official',
    url: 'https://www.metoffice.gov.uk/research/climate/maps-and-data/location-specific-long-term-averages/gcpsvg3nc',
    accessedAt: '2026-08-30',
    language: 'en',
    scope: 'Official Met Office 1991-2020 monthly long-term averages for Heathrow: maximum temperature, rainfall and sunshine hours.',
    limitations:
      'The page names neither a station identifier nor an elevation, and these were not filled in from other catalogues. This is a Met Office climate product for the named location, not an unaltered raw measurement series, and it describes Heathrow rather than London as a whole.',
    reuse: 'link-and-cite',
  },
  {
    id: 'smhi-stockholm-summer-normals-1991-2020',
    title: 'Semestervader - vad sager statistiken',
    publisher: 'Sveriges meteorologiska och hydrologiska institut',
    sourceType: 'official',
    url: 'https://www.smhi.se/kunskapsbanken/meteorologi/arstider/semestervader---vad-sager-statistiken',
    accessedAt: '2026-08-30',
    language: 'sv',
    scope: 'Official SMHI summer climate statistics for 1991-2020 giving mean daily maximum, precipitation and sunshine hours for June, July and August.',
    limitations:
      'Published for "Stockholm" without a station identifier, so this is a city-level figure and not bound to a named station. It covers the three summer months only, and SMHI flags its 1991-2020 normal files as preliminary.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaClimateSourceId = (typeof frigilianaClimateSources)[number]['id'];
