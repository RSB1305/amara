import { defineKnowledgeFacts } from '../../../schema';
import type { ParkingAccessibilitySourceId } from '../../../sources/locations/parkingAccessibilitySources';

type NerjaParkingFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly ParkingAccessibilitySourceId[];
};

const facts = [
  {
    id: 'nerja.parking.public-facilities.named',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'The municipality names Balcón de Europa, Parque Verano Azul and Burriana as existing public parking facilities.',
    status: 'verified',
    sourceIds: ['nerja-parking-anteproject-2025'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-08-21',
    volatility: 'medium',
    claimBoundary: 'This establishes the facilities, not live availability, capacity, tariffs or access hours.',
  },
  {
    id: 'nerja.parking.pescia-847-planned',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'The proposed parking building near Avenida de Pescia was described in August 2025 as an anteproject with 847 planned spaces.',
    status: 'verified',
    sourceIds: ['nerja-parking-anteproject-2025'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'The planned spaces must not be presented as built, open or available until a later official completion source confirms this.',
  },
  {
    id: 'nerja.parking.balcon-guidance-project-2026',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'In March 2026 the municipality awarded an extension of the Balcón de Europa free-space guidance system to the third floor; the first two floors already had guidance installed.',
    status: 'verified',
    sourceIds: ['nerja-parking-balcon-guidance-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'The award and prior installation are verified; public live operation or completion of the extension is not.',
  },
  {
    id: 'nerja.parking.verano-azul-maintained-2026',
    subject: 'nerja',
    topic: 'parking',
    statement: 'The municipality repainted spaces, horizontal signage and road markings at Verano Azul in February 2026.',
    status: 'verified',
    sourceIds: ['nerja-parking-verano-azul-marking-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-02-21',
    volatility: 'medium',
    claimBoundary: 'Maintenance activity does not prove that parking is easier, usually available or free.',
  },
  {
    id: 'nerja.parking.burriana-smart-project-2026',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'In June 2026 the municipality awarded a Burriana smart-parking project intended to provide real-time free-space guidance.',
    status: 'verified',
    sourceIds: ['nerja-parking-burriana-smart-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'Intended functionality and contract award are verified; current public service availability is not.',
  },
  {
    id: 'nerja.parking.burriana-loading-windows-2026',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'A May 2026 municipal notice set time windows for loading areas at Calle María Garralón and Paseo de Burriana and stated that some spaces return to beach-user parking outside those windows.',
    status: 'verified',
    sourceIds: ['nerja-parking-burriana-loading-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'This is dated, Burriana-specific operating information and must be rechecked before public use.',
  },
  {
    id: 'nerja.parking.amara-playa-street-baseline',
    subject: 'nerja',
    topic: 'parking',
    statement: 'AMARA’s current property content describes parking for AMARA Playa as street parking.',
    status: 'partially-verified',
    sourceIds: ['amara-playa-parking-baseline-2026-08'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'medium',
    claimBoundary:
      'This supports the authored accommodation baseline but does not yet prove that no private or dedicated space exists or that street spaces are available.',
  },
  {
    id: 'nerja.parking.operator-zones-and-improvement',
    subject: 'nerja',
    topic: 'parking',
    statement:
      'The AMARA operator experiences Nerja parking primarily as a zone-based topic and perceives municipal efforts as making parking easier.',
    status: 'first-party-observation',
    sourceIds: ['amara-parking-operator-note-2026-08'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-02-21',
    volatility: 'medium',
    claimBoundary:
      'Personal interpretation only. Municipal projects can support the investment direction, but “easier” requires user or occupancy evidence.',
  },
  {
    id: 'nerja.parking.mostly-free-not-established',
    subject: 'nerja',
    topic: 'parking',
    statement: 'The current evidence pool does not establish that parking in Nerja is predominantly free.',
    status: 'verified',
    sourceIds: ['amara-parking-operator-note-2026-08'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'This records an evidence gap and must not be rewritten as a claim that most Nerja parking is paid.',
  },
] as const satisfies readonly NerjaParkingFactInput[];

export const nerjaParkingFacts = defineKnowledgeFacts(facts);

export type NerjaParkingFactId = (typeof nerjaParkingFacts)[number]['id'];
