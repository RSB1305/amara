import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaGeographySourceId } from '../../../sources/locations/frigilianaGeographySources';

type GeographyFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaGeographySourceId[];
};

const facts = [
  {
    id: 'frigiliana.geography.municipality.area',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement: 'Frigiliana municipality covers 40.49 square kilometres.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-municipal-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This is the municipal area, not the footprint of the village or historic centre.'
  },
  {
    id: 'frigiliana.geography.main-settlement.reference-point',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'SIMA locates Frigiliana’s principal settlement at approximately 36.792° N, 3.898° W and gives a reference altitude of 318 metres.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-municipal-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'These are official reference values for the principal settlement; individual streets and buildings can be materially higher or lower.'
  },
  {
    id: 'frigiliana.geography.reference-altitude.varies-by-dataset',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'Official reference altitudes are not a single town-wide elevation: SIMA reports 318 metres while AEMET uses 315 metres for the municipal capital.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-municipal-record-2026', 'aemet-frigiliana-municipal-reference-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'The small difference reflects reference datasets and reinforces that neither value should be presented as the elevation of every address.'
  },
  {
    id: 'frigiliana.geography.historic-core.topography-shapes-layout',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'In Frigiliana’s protected historic ensemble, the terrain shapes the settlement: principal streets tend to follow contours while transverse connections are steeper.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This describes the protected historic morphology, not a uniform gradient for the modern village or every walking route.'
  },
  {
    id: 'frigiliana.geography.historic-core.steps-and-road-access',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'Many transverse streets in the historic ensemble are steep and stepped, and parts of that historic fabric are inaccessible to road traffic.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This does not prove that every Barribarto street is pedestrian-only or that a particular accommodation cannot be reached by vehicle.'
  },
  {
    id: 'frigiliana.geography.ingenio.settlement-hinge',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'El Ingenio is a useful morphological hinge: the official historic description places the older castle-hill fabric to one side and the later southern expansion on the ridge beyond it.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This is a settlement-orientation model, not a formal administrative-neighbourhood boundary.'
  },
  {
    id: 'frigiliana.geography.barribarto.medieval-core',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement: 'Barribarto is identified in the official heritage record as Frigiliana’s original medieval core.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'The statement identifies historic morphology and does not define present-day access or accessibility.'
  },
  {
    id: 'frigiliana.geography.barribajo.calle-real-axis',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement: 'The official heritage description places Barribajo along the Calle Real axis.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This is a relative orientation statement, not a complete street or cadastral boundary.'
  },
  {
    id: 'frigiliana.geography.modern-expansion.ridge-south-of-ingenio',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'The later part of Frigiliana developed south of El Ingenio on the ridge between the Higuerón ravine and the approach road.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary: 'This is a broad historic-morphology description and does not locate every newer development.'
  },
  {
    id: 'frigiliana.geography.sierra.protected-area-context',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'Frigiliana is one of the municipalities associated with the 40,647.74-hectare Sierras de Tejeda, Almijara y Alhama natural park on the Málaga side of the Axarquía.',
    status: 'verified',
    sourceIds: ['junta-tejeda-almijara-visitor-record-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'Municipality inclusion must not be rewritten as a claim that the entire municipality or built village lies inside the park.'
  },
  {
    id: 'frigiliana.geography.routes.map-distance-insufficient',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    statement:
      'In the historic hillside fabric, horizontal map distance alone is insufficient for judging route effort because contour-following streets, steep transverse links and steps produce materially different routes.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-21',
    reviewAfter: '2028-08-21',
    volatility: 'low',
    claimBoundary:
      'This is a durable planning implication, not an accessibility assessment or measured effort for a specific origin and destination.'
  }
] as const satisfies readonly GeographyFactInput[];

export const frigilianaGeographyFacts = defineKnowledgeFacts(facts);

export type FrigilianaGeographyFactId = (typeof frigilianaGeographyFacts)[number]['id'];
