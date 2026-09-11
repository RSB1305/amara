import { defineKnowledgeFacts } from '../../schema';

export const amaraPlayaPropertyFacts = defineKnowledgeFacts([
  {
    id: 'amara-playa.balcony.west-side-sea-view-awning',
    subject: 'amara-playa',
    topic: 'property-terrace-light',
    statement: 'AMARA Playa in Nerja has a private, roughly west-facing balcony with a side sea view and an awning for shade.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'It is a balcony, not a full terrace, and the sea view is to the side, not head-on. Orientation is an approximate operator statement, not a surveyed bearing; evening sun depends on weather, season and surrounding buildings.'
  },
  {
    id: 'amara-playa.cooling.air-conditioning',
    subject: 'amara-playa',
    topic: 'property-amenities',
    statement: 'AMARA Playa has air conditioning.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'The operator confirmed air conditioning for the apartment. The exact room placement (e.g. bedroom only) was not separately specified for this unit and should be re-confirmed if used prominently.'
  },
  {
    id: 'amara-playa.location.torrecilla-proximity-and-winter-sun',
    subject: 'amara-playa',
    topic: 'property-location',
    statement: 'AMARA Playa is about 200 metres from Torrecilla beach; Torrecilla is flat and open to the southwest, so it keeps the low winter sun longer in the afternoon than Nerja’s cliff-backed coves.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'The distance is approximate. The southwest aspect and the longer winter afternoon sun are an operator observation about a public beach, not a measured sun-hours study, and vary with date and conditions.'
  },
] as const);
