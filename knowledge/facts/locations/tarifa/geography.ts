import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaGeographySourceId } from '../../../sources/locations/tarifaGeographySources';

type GeographyFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaGeographySourceId[];
};

const facts = [
  {
    id: 'tarifa.geography.municipality.reference-record',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'Tarifa municipality covers 419.93 square kilometres; SIMA records eight population centres and gives the principal settlement a reference altitude of 8 metres.',
    status: 'verified',
    sourceIds: ['sima-tarifa-municipal-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The altitude is a reference for the principal settlement, not the elevation of the full municipality or every town route.'
  },
  {
    id: 'tarifa.geography.punta-de-tarifa.coordinates',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'IGN places Punta de Tarifa at approximately 36°00′00.810″ N, 5°36′34.792″ W in ETRS89.',
    status: 'verified',
    sourceIds: ['ign-punta-de-tarifa-coordinates-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'The coordinates identify the named point and do not by themselves define “city”, “mainland” or “Europe”.'
  },
  {
    id: 'tarifa.geography.island.causeway-1808',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement: 'Isla de Tarifa was connected to the town by a causeway constructed in 1808.',
    status: 'verified',
    sourceIds: ['tarifa-tourism-isla-de-las-palomas-2026', 'tarifa-tourism-history-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The island’s artificial connection must remain explicit when describing it as an extension of the European mainland.'
  },
  {
    id: 'tarifa.geography.southernmost.mainland-city-wording',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'A defensible concise formulation is that Tarifa is Europe’s southernmost mainland city, with Punta de Tarifa on the causeway-linked island marking its southern edge.',
    status: 'partially-verified',
    sourceIds: ['ign-punta-de-tarifa-coordinates-2026', 'tarifa-tourism-history-2026', 'visit-greece-gavdos-southernmost-europe-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'Keep “mainland city” and the island/causeway nuance. Do not shorten this to “Europe’s southernmost point”, because European islands extend farther south.'
  },
  {
    id: 'tarifa.geography.southernmost.point-europe.unqualified',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement: 'The unqualified claim “Tarifa is the southernmost point of Europe” is not supported by the evidence pool.',
    status: 'disputed',
    sourceIds: ['ign-punta-de-tarifa-coordinates-2026', 'visit-greece-gavdos-southernmost-europe-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This rejects only the unqualified superlative; it does not reject the narrower mainland-city formulation.'
  },
  {
    id: 'tarifa.geography.two-seas.local-orientation',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'Local official orientation treats the Isla de Tarifa causeway as the point where the Atlantic side and Mediterranean/Strait side meet: Playa Chica lies to the east and the Los Lances–Valdevaqueros coast extends westward.',
    status: 'verified',
    sourceIds: ['tarifa-tourism-isla-de-las-palomas-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This is a useful local orientation convention, not a claim that a sharp physical seam is visible in the water.'
  },
  {
    id: 'tarifa.geography.strait.water-exchange',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'The Strait of Gibraltar is an exchange and transition zone between Atlantic and Mediterranean water masses.',
    status: 'verified',
    sourceIds: ['miteco-strait-alboran-marine-framework'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The marine transition is dynamic; public copy should not promise a permanently visible dividing line at one exact point.'
  },
  {
    id: 'tarifa.geography.strait.dimensions',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'MITECO describes the Strait as roughly 50 kilometres long, about 40 kilometres wide in the west and approximately 14 kilometres at its central and eastern narrow sections.',
    status: 'verified',
    sourceIds: ['miteco-strait-alboran-marine-framework'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'These are regional dimensions and must not be rewritten as a property-to-Africa or Tarifa-to-Tangier distance.'
  },
  {
    id: 'tarifa.geography.europe-africa.minimum-distance',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement: 'The minimum separation between Europe and Africa in the Strait zone is approximately 14.4 kilometres.',
    status: 'verified',
    sourceIds: ['miteco-strait-europe-africa-distance'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This is the minimum continental separation in the zone, not the distance from Tarifa town, AMARA, a beach or Tangier city centre.'
  },
  {
    id: 'tarifa.geography.coast.atlantic-mediterranean-lengths',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'Tarifa’s municipal emergency plan classifies approximately 33.5 kilometres of municipal coast as Atlantic and 10.5 kilometres as Mediterranean.',
    status: 'verified',
    sourceIds: ['tarifa-municipal-emergency-plan-2024'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'These are municipal planning figures and should not be combined into an invented exact visitor-route length.'
  },
  {
    id: 'tarifa.geography.los-lances.protected-area',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement: 'The Playa de los Lances protected natural area covers 226 hectares and was designated in 1989.',
    status: 'verified',
    sourceIds: ['junta-los-lances-protected-area-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The protected-area record does not define the full beach, the entire western coast or the La Marina neighbourhood.'
  },
  {
    id: 'tarifa.geography.los-lances.north-west-of-town',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement: 'The official Los Lances trail begins at the north-west edge of Tarifa near the stadium and parking area.',
    status: 'verified',
    sourceIds: ['junta-los-lances-trail-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This supports directional orientation only, not an exact route or distance from an accommodation.'
  },
  {
    id: 'tarifa.geography.la-marina.avenida-los-lances-reference',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'A municipal record locates the named La Marina site at Avenida de Los Lances by Calle Mar Menor, supporting La Marina as a west/north-west town-edge orientation reference.',
    status: 'partially-verified',
    sourceIds: ['tarifa-council-la-marina-location-2024', 'junta-los-lances-trail-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This does not verify AMARA Family & Surf’s exact entrance, walking distance, route, sea view, wind exposure or neighbourhood boundary.'
  },
  {
    id: 'tarifa.geography.wind.local-exposure-unverified',
    subject: 'tarifa',
    topic: 'geography-orientation',
    statement:
      'The current evidence pool does not support universal claims that one Tarifa neighbourhood is always sheltered or exposed, or that a named wind makes a beach categorically usable or unusable.',
    status: 'verified',
    sourceIds: ['miteco-strait-alboran-marine-framework'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This records an evidence and safety boundary. Current conditions and address-level exposure require separate live or measured evidence.'
  }
] as const satisfies readonly GeographyFactInput[];

export const tarifaGeographyFacts = defineKnowledgeFacts(facts);

export type TarifaGeographyFactId = (typeof tarifaGeographyFacts)[number]['id'];
