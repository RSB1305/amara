import { defineKnowledgeFacts } from '../../schema';

export const casaAmaraPropertyFacts = defineKnowledgeFacts([
  {
    id: 'casa-amara.portfolio.four-stays-three-apartments-one-suite',
    subject: 'casa-amara',
    topic: 'property-portfolio',
    statement: 'Casa AMARA in Frigiliana contains four accommodations: the compact suite Farah and the three apartments Lounis, Zaid and Maha.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    reviewAfter: '2027-08-27',
    volatility: 'low',
    claimBoundary: 'Public portfolio wording is “four accommodations”, not “four apartments”. Lounis may be described as the largest of the three apartments.'
  },
  {
    id: 'casa-amara.location.calle-chorruelo-calle-real',
    subject: 'casa-amara',
    topic: 'property-location',
    statement: 'Casa AMARA is at Calle Chorruelo 5, directly on Calle Chorruelo as the continuation of Calle Real, close to Frigiliana’s cafés, restaurants, bars and everyday village infrastructure.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    reviewAfter: '2027-08-27',
    volatility: 'low',
    claimBoundary: 'The concrete location may be published. “One of the few accommodations” remains an attributed operator comparison and is not an independently verified market-wide claim.'
  },
  {
    id: 'casa-amara.access.shared-entrance-and-internal-steps',
    subject: 'casa-amara',
    topic: 'property-access',
    statement: 'All four accommodations sit behind one shared front door with one entrance step. Farah has no further steps; Lounis, Zaid and Maha have additional steps within the building or accommodation route.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    reviewAfter: '2027-08-27',
    volatility: 'low',
    claimBoundary: 'Do not describe Casa AMARA or all four accommodations as step-free. Exact internal step counts require separate property-specific confirmation if they are materially used.'
  },
  {
    id: 'casa-amara.access.village-core-route-after-door',
    subject: 'casa-amara',
    topic: 'property-access',
    statement: 'From the shared front door, the route along Calle Chorruelo and Calle Real towards cafés, restaurants, bars and the village core has no further steps.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    reviewAfter: '2027-08-27',
    volatility: 'low',
    claimBoundary: 'This describes the route after the shared exterior door, not step-free access from parking, from the street into every accommodation or within Lounis, Zaid and Maha.'
  },
  {
    id: 'casa-amara.terraces.shared-amenities',
    subject: 'casa-amara',
    topic: 'property-amenities',
    statement: 'Lounis, Zaid and Maha each have a private terrace with an outdoor shower, a hammock and two sun loungers.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    reviewAfter: '2027-02-27',
    volatility: 'medium',
    claimBoundary: 'Amenity availability should be rechecked after material furnishing or maintenance changes.'
  },
  {
    id: 'casa-amara.maha.earlier-light-observation',
    subject: 'amara-maha',
    topic: 'property-terrace-light',
    statement: 'The operator experiences light reaching Maha’s upper roof terrace roughly 45 minutes earlier than the terraces below.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    volatility: 'high',
    claimBoundary: 'Personal approximate observation only. It varies by season and conditions and should not be presented as a measured or guaranteed duration.'
  },
  {
    id: 'casa-amara.terraces.sunset-observation',
    subject: 'casa-amara',
    topic: 'property-terrace-light',
    statement: 'The operator has observed sunsets from the private terraces of Lounis, Zaid and Maha.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-27',
    volatility: 'high',
    claimBoundary: 'Attributed personal observation, not a guaranteed unobstructed sunset view on every date or in all weather conditions.'
  },
  {
    id: 'casa-amara.terraces.night-sky-observation',
    subject: 'casa-amara',
    topic: 'property-terrace-light',
    statement: 'The operator has observed a clearly visible night sky from the private terraces of Lounis, Zaid and Maha.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-27'],
    checkedAt: '2026-08-30',
    volatility: 'low',
    claimBoundary: 'Attributed personal observation of the village setting. It is not a measured sky-quality rating and not a promise for any particular night, season or weather.'
  },
  {
    id: 'casa-amara.amenities.beach-towels-provided',
    subject: 'casa-amara',
    topic: 'property-amenities',
    statement: 'Beach towels are provided in all Casa AMARA accommodations, in addition to bathroom towels.',
    status: 'first-party-observation',
    sourceIds: ['casa-amara-operator-confirmation-2026-08-30'],
    checkedAt: '2026-08-30',
    reviewAfter: '2027-08-30',
    volatility: 'low',
    claimBoundary: 'Standing practice confirmed by the operator, covering all four accommodations. It is not an audited inventory and says nothing about quantity per guest, replacement during a stay, or any other item.',
  },
] as const);
