import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaParkingSourceId } from '../../../sources/locations/frigilianaParkingSources';

type ParkingFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaParkingSourceId[];
};

const facts = [
  {
    id: 'frigiliana.parking.orientation.lower-village',
    subject: 'frigiliana',
    topic: 'parking',
    statement:
      'The Plaza de las Tres Culturas area sits in the lower/newer part of Frigiliana and is a practical orientation point before entering the historic hillside centre.',
    status: 'verified',
    sourceIds: ['frigiliana-tourism-official-street-map'],
    checkedAt: '2026-07-27',
    reviewAfter: '2027-07-27',
    volatility: 'low',
    claimBoundary:
      'The map supports relative location and orientation only; it does not establish current parking availability or operating terms.'
  },
  {
    id: 'frigiliana.parking.central-garage.exists',
    subject: 'frigiliana',
    topic: 'parking',
    statement: 'A central paid car park operates below Plaza de las Tres Culturas.',
    status: 'first-party-observation',
    sourceIds: ['frigiliana-plaza-garage-signage-2026-08'],
    checkedAt: '2026-08-19',
    reviewAfter: '2026-11-19',
    volatility: 'medium',
    claimBoundary:
      'This confirms the observed facility at that date, not guaranteed access, capacity, ownership, accessibility or continuous operation.'
  },
  {
    id: 'frigiliana.parking.central-garage.tariff-2026-08',
    subject: 'frigiliana',
    topic: 'parking',
    statement:
      'On 19 August 2026, signage at the central car park showed a tariff of €0.0417 per minute and a daily cap of €15.',
    status: 'first-party-observation',
    sourceIds: ['frigiliana-plaza-garage-signage-2026-08'],
    checkedAt: '2026-08-19',
    reviewAfter: '2026-11-19',
    volatility: 'high',
    claimBoundary:
      'This is a dated observation, not a promise of the current tariff. Public use must state the observation date and warn that tariffs can change.',
    notes: 'A future verification should add a dated photograph or an official operator tariff page.'
  },
  {
    id: 'frigiliana.parking.old-town.vehicle-access-regulated',
    subject: 'frigiliana',
    topic: 'parking',
    statement: 'Vehicle access in Frigiliana’s historic centre is constrained and should not be assumed for visitors.',
    status: 'partially-verified',
    sourceIds: [
      'frigiliana-tourism-official-street-map',
      'amara-frigiliana-parking-editorial-baseline-2026-07'
    ],
    checkedAt: '2026-08-20',
    reviewAfter: '2026-11-20',
    volatility: 'medium',
    claimBoundary:
      'Current source material supports cautious planning but does not document the exact legal zone, access hours, exemptions or enforcement rules.'
  },
  {
    id: 'frigiliana.parking.final-section-often-on-foot',
    subject: 'frigiliana',
    topic: 'parking',
    statement:
      'For many historic-centre destinations, visitors should plan for a final section on foot after parking in the lower or outer village.',
    status: 'partially-verified',
    sourceIds: [
      'frigiliana-tourism-official-street-map',
      'amara-frigiliana-parking-editorial-baseline-2026-07'
    ],
    checkedAt: '2026-08-20',
    reviewAfter: '2027-08-20',
    volatility: 'low',
    claimBoundary:
      'This is general village guidance. It does not establish the route, distance or accessibility for a particular accommodation.'
  },
  {
    id: 'frigiliana.parking.final-walk-terrain-varies',
    subject: 'frigiliana',
    topic: 'parking',
    statement: 'The final walking route can include gradients, cobbles or steps.',
    status: 'partially-verified',
    sourceIds: [
      'frigiliana-tourism-official-street-map',
      'amara-frigiliana-parking-editorial-baseline-2026-07'
    ],
    checkedAt: '2026-08-20',
    reviewAfter: '2027-08-20',
    volatility: 'low',
    claimBoundary:
      'Terrain differs by route. Accessibility decisions require accommodation-specific directions rather than this general fact.'
  },
  {
    id: 'frigiliana.parking.street-options.dynamic',
    subject: 'frigiliana',
    topic: 'parking',
    statement: 'Permitted street or outer-village parking may be available along approach roads.',
    status: 'unverified',
    sourceIds: [
      'google-maps-frigiliana-live-parking-search',
      'amara-frigiliana-parking-editorial-baseline-2026-07'
    ],
    checkedAt: '2026-08-20',
    reviewAfter: '2026-11-20',
    volatility: 'high',
    claimBoundary:
      'No exact zones are verified in the current evidence pool. Public guidance must defer to live signs and must not promise a legal or free space.'
  },
  {
    id: 'frigiliana.parking.availability-not-guaranteed',
    subject: 'frigiliana',
    topic: 'parking',
    statement: 'Parking availability cannot be guaranteed for a particular arrival.',
    status: 'verified',
    sourceIds: ['amara-frigiliana-parking-editorial-baseline-2026-07'],
    checkedAt: '2026-08-20',
    reviewAfter: '2027-08-20',
    volatility: 'low',
    claimBoundary:
      'This is an explicit AMARA service boundary, not a measured occupancy claim or a statement that parking is usually unavailable.'
  },
  {
    id: 'frigiliana.parking.live-signs-govern',
    subject: 'frigiliana',
    topic: 'parking',
    statement:
      'Drivers must decide legality, restrictions, tariffs and access from the current signs and terms displayed on site.',
    status: 'verified',
    sourceIds: ['amara-frigiliana-parking-editorial-baseline-2026-07'],
    checkedAt: '2026-08-20',
    reviewAfter: '2027-08-20',
    volatility: 'low',
    claimBoundary:
      'This is a safety and editorial boundary. It does not replace the need to research stable official rules when available.'
  },
  {
    id: 'frigiliana.parking.drop-off-not-established',
    subject: 'frigiliana',
    topic: 'parking',
    statement:
      'The current evidence pool does not establish a generally legal visitor drop-off point for the historic centre.',
    status: 'verified',
    sourceIds: ['amara-frigiliana-parking-editorial-baseline-2026-07'],
    checkedAt: '2026-08-20',
    reviewAfter: '2026-11-20',
    volatility: 'medium',
    claimBoundary:
      'This records a knowledge gap. It must not be rewritten as a claim that no legal drop-off point exists.'
  }
] as const satisfies readonly ParkingFactInput[];

export const frigilianaParkingFacts = defineKnowledgeFacts(facts);

export type FrigilianaParkingFactId = (typeof frigilianaParkingFacts)[number]['id'];
