import { defineKnowledgeFacts } from '../../schema';

export const amaraFamilySurfPropertyFacts = defineKnowledgeFacts([
  {
    id: 'amara-family-surf.balcony.west-wooden-canopy',
    subject: 'amara-family-surf',
    topic: 'property-terrace-light',
    statement: 'AMARA Family & Surf in Tarifa has a private, roughly west-facing balcony with a fixed wooden canopy for shade. It is a balcony, not a terrace.',
    status: 'first-party-observation',
    sourceIds: ['amara-family-surf-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'Public wording should say balcony, not terrace. Orientation is an approximate operator statement, not a surveyed bearing; the west aspect gives evening sun over the strait, subject to weather and season.'
  },
  {
    id: 'amara-family-surf.cooling.air-conditioning',
    subject: 'amara-family-surf',
    topic: 'property-amenities',
    statement: 'AMARA Family & Surf has air conditioning.',
    status: 'first-party-observation',
    sourceIds: ['amara-family-surf-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'The operator confirmed air conditioning for the apartment. The exact room placement was not separately specified for this unit and should be re-confirmed if used prominently.'
  },
  {
    id: 'amara-family-surf.environment.atlantic-sea-temperature',
    subject: 'amara-family-surf',
    topic: 'property-location',
    statement: 'The Atlantic off Tarifa rarely rises above about 20–22 °C even in high summer, noticeably cooler than the Mediterranean off Nerja.',
    status: 'first-party-observation',
    sourceIds: ['amara-family-surf-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'medium',
    claimBoundary: 'An operator estimate of a general summer tendency for the open Atlantic at the Strait of Gibraltar, not a measured local time series; actual temperatures vary with year, wind and upwelling.'
  },
  {
    id: 'amara-family-surf.connectivity.fast-fibre-wifi',
    subject: 'amara-family-surf',
    topic: 'property-amenities',
    statement: 'AMARA Family & Surf has fast fibre Wi-Fi.',
    status: 'first-party-observation',
    sourceIds: ['amara-family-surf-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'low',
    claimBoundary: 'Wi-Fi is recorded for this unit in the rental data; "fibre" is the connection type stated by the operator, not an independently measured speed. Actual throughput varies.'
  },
  {
    id: 'amara-family-surf.winter.firewood-service',
    subject: 'amara-family-surf',
    topic: 'property-amenities',
    statement: 'AMARA Family & Surf has a wood-burning fireplace; the first firewood is provided, and resupply is easy — wood sacks bought at the petrol station are unloaded in the underground garage and taken by lift to the apartment door, with no stairs.',
    status: 'first-party-observation',
    sourceIds: ['amara-family-surf-operator-confirmation-2026-09-11'],
    checkedAt: '2026-09-11',
    reviewAfter: '2027-09-11',
    volatility: 'medium',
    claimBoundary: 'The starter firewood and the step-free garage-to-door route are standing operator practice and should be re-confirmed for future seasons. Guests buy any further firewood themselves.'
  },
] as const);
