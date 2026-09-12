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
    statement: 'AMARA Playa has a powerful air conditioner with a heating function — the same unit that cools in summer heats the apartment in winter.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'The operator confirmed a reverse-cycle air conditioner that also heats. Exact placement/number of units was not separately specified and should be re-confirmed if used prominently.'
  },
  {
    id: 'amara-playa.location.flat-walk-to-seafront',
    subject: 'amara-playa',
    topic: 'property-location',
    statement: 'The walk from AMARA Playa to Torrecilla beach and the Balcón de Europa is flat, without climbs — in contrast to hillside Frigiliana.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'Describes the outdoor walking route as level; the building entrance itself still has a few steps before the lift.'
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
  {
    id: 'amara-playa.connectivity.fast-fibre-wifi',
    subject: 'amara-playa',
    topic: 'property-amenities',
    statement: 'AMARA Playa has fast fibre Wi-Fi.',
    status: 'first-party-observation',
    sourceIds: ['amara-playa-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'Wi-Fi is recorded for this unit in the rental data; "fibre" is the connection type stated by the operator, not an independently measured speed. Actual throughput varies.'
  },
] as const);
