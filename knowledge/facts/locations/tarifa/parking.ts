import { defineKnowledgeFacts } from '../../../schema';
import type { ParkingAccessibilitySourceId } from '../../../sources/locations/parkingAccessibilitySources';

type TarifaParkingFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly ParkingAccessibilitySourceId[];
};

const facts = [
  {
    id: 'tarifa.parking.retiro-annual-authorisations-2026',
    subject: 'tarifa',
    topic: 'parking',
    statement: 'The municipality ran a process for annual 2026 parking authorisations at Paseo del Retiro.',
    status: 'verified',
    sourceIds: ['tarifa-parking-retiro-authorisations-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'The process does not establish unrestricted tourist access, availability, tariffs or opening hours.',
  },
  {
    id: 'tarifa.parking.meter-platform-tender-2026',
    subject: 'tarifa',
    topic: 'parking',
    statement:
      'URTASA published a May 2026 tender for municipal parking meters, maintenance, connectivity and a management platform.',
    status: 'verified',
    sourceIds: ['tarifa-parking-meters-tender-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'This shows active system change and does not establish the final 2026 zone, tariff or payment arrangement.',
  },
  {
    id: 'tarifa.parking.city-beach-contexts-differ',
    subject: 'tarifa',
    topic: 'parking',
    statement:
      'Tarifa’s official beach plan distinguishes multiple separate beach areas, so city/old-town parking and beach-destination access cannot be treated as one permanent parking rule.',
    status: 'partially-verified',
    sourceIds: ['tarifa-beach-use-plan-2024-2027'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-02-21',
    volatility: 'medium',
    claimBoundary:
      'The spatial distinction is verified; specific parking conditions for each beach require separate current evidence.',
  },
  {
    id: 'tarifa.parking.amara-private-garage-baseline',
    subject: 'tarifa',
    topic: 'parking',
    statement: 'AMARA currently records a private underground parking space as included with the Tarifa accommodation.',
    status: 'partially-verified',
    sourceIds: ['amara-tarifa-garage-baseline-2026-08', 'amara-parking-operator-note-2026-08'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'medium',
    claimBoundary:
      'Accommodation fact only. Current assignment, access, dimensions and booking inclusion need dated property confirmation.',
  },
  {
    id: 'tarifa.parking.operator-july-august-pressure',
    subject: 'tarifa',
    topic: 'parking',
    statement: 'The AMARA operator experiences parking pressure in Tarifa as exceptionally high in July and August.',
    status: 'first-party-observation',
    sourceIds: ['amara-parking-operator-note-2026-08'],
    checkedAt: '2026-08-21',
    reviewAfter: '2027-09-01',
    volatility: 'medium',
    claimBoundary:
      'Personal seasonal observation, not an occupancy statistic and not permission to claim that parking is literally impossible.',
  },
  {
    id: 'tarifa.parking.current-rules-require-live-verification',
    subject: 'tarifa',
    topic: 'parking',
    statement:
      'The current evidence pool does not establish a complete stable 2026 visitor-parking rule set for Tarifa.',
    status: 'verified',
    sourceIds: ['tarifa-parking-meters-tender-2026', 'tarifa-parking-retiro-authorisations-2026'],
    checkedAt: '2026-08-21',
    reviewAfter: '2026-11-21',
    volatility: 'high',
    claimBoundary: 'This is a knowledge gap; it does not imply that no rules exist.',
  },
] as const satisfies readonly TarifaParkingFactInput[];

export const tarifaParkingFacts = defineKnowledgeFacts(facts);

export type TarifaParkingFactId = (typeof tarifaParkingFacts)[number]['id'];
