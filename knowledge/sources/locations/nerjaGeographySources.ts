import { defineKnowledgeSources } from '../../schema';

export const nerjaGeographySources = defineKnowledgeSources([
  {
    id: 'sima-nerja-municipal-record-2026',
    title: 'Nerja municipal record',
    publisher: 'Instituto de Estadística y Cartografía de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official municipal area, main-settlement reference altitude, coordinates and population-centre count.',
    limitations:
      'The 22-metre altitude is a principal-settlement reference value, not the elevation of the whole town or municipality.',
    reuse: 'link-and-cite'
  },
  {
    id: 'sima-nerja-population-centres-2026',
    title: 'Nerja population centres',
    publisher: 'Instituto de Estadística y Cartografía de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/nucleos.htm?CodMuni=29075',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official statistical list of the municipality’s population centres.',
    limitations:
      'Statistical population-centre status does not by itself define neighbourhood identity, visitor routes or continuous urban fabric.',
    reuse: 'link-and-cite'
  },
  {
    id: 'boja-sierra-tejeda-almijara-plan-1999',
    title: 'Natural resources plan for Sierras de Tejeda, Almijara y Alhama',
    publisher: 'Junta de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja/1999/95/2',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Official description of the coastal mountain relief and named peaks including Navachica.',
    limitations:
      'The plan establishes regional relief and peak elevations but does not directly prove which point is highest inside the current Nerja municipal polygon.',
    reuse: 'link-and-cite'
  },
  {
    id: 'nerja-council-rio-chillar-lower-section-2025',
    title: 'Municipal work on the lower Río Chíllar',
    publisher: 'Ayuntamiento de Nerja',
    sourceType: 'official',
    url: 'https://www.nerja.es/el-ayuntamiento-acomete-el-desbroce-y-limpieza-del-rio-chillar/',
    accessedAt: '2026-08-21',
    language: 'es',
    scope: 'Municipal description of the lower river section from its mouth to the quarry, approximately 3.6 kilometres.',
    limitations:
      'The dated maintenance report supports river orientation only. It is not evidence of current route access, safety or legal permissions.',
    reuse: 'link-and-cite'
  },
  {
    id: 'nerja-tourism-coastline-13km',
    title: 'Nerja coastline tourism record reporting 13 kilometres',
    publisher: 'Nerja Turismo',
    sourceType: 'official',
    url: 'https://www.nerjaturismo.es/',
    locator: 'Claim and official URL preserved in the GPT raw report for research run 2026-08-21__112650__geography-orientation__research-001.',
    language: 'es',
    scope: 'One official tourism formulation of Nerja’s coastline length.',
    limitations:
      'The exact page could not be retrieved during normalization. The value conflicts with another official-tourism formulation and remains disputed.',
    reuse: 'link-and-cite'
  },
  {
    id: 'nerja-tourism-coastline-14km',
    title: 'Nerja beach tourism record reporting 14 kilometres',
    publisher: 'Nerja Turismo',
    sourceType: 'official',
    url: 'https://www.nerjaturismo.es/playas/',
    locator: 'Claim and official URL preserved in the GPT raw report for research run 2026-08-21__112650__geography-orientation__research-001.',
    language: 'es',
    scope: 'A second official tourism formulation of Nerja’s coastline length.',
    limitations:
      'The exact page could not be retrieved during normalization. The value conflicts with another official-tourism formulation and remains disputed.',
    reuse: 'link-and-cite'
  }
] as const);

export type NerjaGeographySourceId = (typeof nerjaGeographySources)[number]['id'];
