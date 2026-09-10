import { defineKnowledgeSources } from '../../schema';

export const tarifaKitesurfWindSources = defineKnowledgeSources([
  {
    id: 'tarifa-wind-deep-research-2026',
    title:
      'Physikalische und ozeanographische Determinanten des Mikroklimas der Straße von Gibraltar (Thermik, Gezeiten, Levante/Poniente in Tarifa)',
    publisher: 'Operator-commissioned deep research (AI synthesis)',
    sourceType: 'operator-provided',
    url: 'https://docs.google.com/document/d/1WUUj2PnPE_30B6_1FIhJL1E95i6XF4OSh_ou3JxK8NQ/edit',
    locator: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/kitesurfing/wind',
    accessedAt: '2026-09-10',
    language: 'de',
    scope:
      'Land–sea breeze thermodynamics (specific-heat difference, daytime sea breeze, night land breeze, Coriolis and the vertical wind gradient), genesis and modification of Levante and Poniente (Venturi/jet effect, inversion cap, Levante gustiness vs. Poniente laminarity, Poniente afternoon thermal boost), and ocean/tide effects (Atlantic inflow, wind-against-tide, wave period as swell vs. chop).',
    limitations:
      'Single AI-synthesised dossier, not a peer-reviewed primary source. Its general meteorology (land–sea breeze, gustiness of offshore/thermal winds, swell vs. wind-sea period) is textbook-standard and safe to teach; its region-specific quantifications (wind-direction percentages, current speeds, specific-heat values, model grid sizes, tidal figures) are not independently corroborated here and must not be printed as precise public claims.',
    reuse: 'internal-only'
  },
  {
    id: 'general-meteorology-baseline-2026',
    title: 'General meteorology and unit baseline (land–sea breeze, gustiness, swell period, knot conversion)',
    publisher: 'AMARA editorial baseline',
    sourceType: 'internal-editorial-baseline',
    accessedAt: '2026-09-10',
    language: 'en',
    scope:
      'Textbook meteorology used to corroborate the synthesis: the land–sea breeze mechanism, why offshore and thermally driven winds are gustier than long-fetch onshore winds, and the swell-versus-wind-sea meaning of wave period; plus the fixed unit definition that one knot is one nautical mile per hour, i.e. 1.852 km/h.',
    limitations:
      'Baseline knowledge rather than a single citable URL; used to keep the public explanation at established-physics level and to bound the region-specific claims of the deep research.',
    reuse: 'internal-only'
  }
] as const);

export type TarifaKitesurfWindSourceId = (typeof tarifaKitesurfWindSources)[number]['id'];
