import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaGeographySourceId } from '../../../sources/locations/nerjaGeographySources';

type GeographyFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly NerjaGeographySourceId[];
};

const facts = [
  {
    id: 'nerja.geography.municipality.area',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'Nerja municipality covers 85.07 square kilometres.',
    status: 'verified',
    sourceIds: ['sima-nerja-municipal-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This is the municipal area, not the footprint of Nerja town.'
  },
  {
    id: 'nerja.geography.main-settlement.reference-point',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement:
      'SIMA locates Nerja’s principal settlement at approximately 36.745° N, 3.877° W and gives a reference altitude of 22 metres.',
    status: 'verified',
    sourceIds: ['sima-nerja-municipal-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The 22-metre value is a principal-settlement reference, not a claim that beaches, upper residential areas and the municipality share one elevation.'
  },
  {
    id: 'nerja.geography.population-centres.four',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'SIMA records four population centres in Nerja municipality: Nerja, Maro, Imaroga and Macaca.',
    status: 'verified',
    sourceIds: ['sima-nerja-municipal-record-2026', 'sima-nerja-population-centres-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'These are statistical population centres; the list does not imply equal size, visitor relevance or continuous urban fabric.'
  },
  {
    id: 'nerja.geography.maro.distinct-population-centre',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'Maro is a distinct statistical population centre within Nerja municipality.',
    status: 'verified',
    sourceIds: ['sima-nerja-population-centres-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This does not define a tourism district boundary or the exact break in the built-up coast.'
  },
  {
    id: 'nerja.geography.sierra.coastal-relief-context',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement:
      'The Sierra de Almijara rises close to the coast behind Nerja; the official natural-resources plan notes numerous summits above 1,500 metres in this coastal mountain system.',
    status: 'verified',
    sourceIds: ['boja-sierra-tejeda-almijara-plan-1999'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This describes the mountain system around Nerja, not the elevation of the built town or the gradient of every route.'
  },
  {
    id: 'nerja.geography.navachica.elevation',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'The official regional plan gives Navachica an elevation of 1,832 metres.',
    status: 'verified',
    sourceIds: ['boja-sierra-tejeda-almijara-plan-1999'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The source establishes peak elevation in the wider mountain unit; it does not directly establish Navachica as the highest point inside today’s Nerja municipal boundary.'
  },
  {
    id: 'nerja.geography.navachica.municipal-highest-point',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'The current evidence pool does not yet prove that Navachica is Nerja municipality’s highest point.',
    status: 'partially-verified',
    sourceIds: ['boja-sierra-tejeda-almijara-plan-1999'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This records an evidence boundary, not a claim that Navachica lies outside the municipality or that another peak is higher.'
  },
  {
    id: 'nerja.geography.rio-chillar.lower-corridor',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement:
      'The lower Río Chíllar forms an orienting corridor from its mouth inland toward the quarry; the council describes this section as approximately 3.6 kilometres.',
    status: 'verified',
    sourceIds: ['nerja-council-rio-chillar-lower-section-2025'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The distance describes the municipal maintenance section cited in the source, not a visitor trail length or permission to enter the river.'
  },
  {
    id: 'nerja.geography.rio-chillar.access-separate',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement:
      'The river’s stable location can be described independently of current access, closure, safety and environmental restrictions.',
    status: 'verified',
    sourceIds: ['nerja-council-rio-chillar-lower-section-2025'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This is an editorial ownership rule: a geography page must not turn a dated maintenance report into live access advice.'
  },
  {
    id: 'nerja.geography.coastline-length.official-conflict',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement: 'Official tourism material in the research pool reports both 13 and 14 kilometres for Nerja’s coastline.',
    status: 'disputed',
    sourceIds: ['nerja-tourism-coastline-13km', 'nerja-tourism-coastline-14km'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'Neither number should be presented as an exact canonical length until the measurement definition and authoritative geometry are identified.'
  },
  {
    id: 'nerja.geography.routes.map-distance-insufficient',
    subject: 'nerja',
    topic: 'geography-orientation',
    statement:
      'A single town-centre altitude or horizontal map distance cannot describe route effort across Nerja’s coast-facing settlement and steep mountain hinterland.',
    status: 'partially-verified',
    sourceIds: ['sima-nerja-municipal-record-2026', 'boja-sierra-tejeda-almijara-plan-1999'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'low',
    claimBoundary:
      'This is a cautious geographic inference. Exact gradients, steps and accessibility require address-to-address route evidence.'
  }
] as const satisfies readonly GeographyFactInput[];

export const nerjaGeographyFacts = defineKnowledgeFacts(facts);

export type NerjaGeographyFactId = (typeof nerjaGeographyFacts)[number]['id'];
