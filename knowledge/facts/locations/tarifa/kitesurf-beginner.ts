import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaKitesurfBeginnerSourceId } from '../../../sources/locations/tarifaKitesurfBeginnerSources';

type KiteFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaKitesurfBeginnerSourceId[];
};

const facts = [
  {
    id: 'tarifa.kitesurf-beginner.progression.kite-before-board',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'Structured kitesurf instruction teaches kite control before the board: theory and the wind window, dry safety practice, trainer kite, full-kite control, body-drag and relaunch precede the water-start and riding.',
    status: 'verified',
    sourceIds: ['vdws-kiteboarding-training-2026', 'iko-kiteboarding-method-2026', 'duotone-kiteboarding-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2028-09-04',
    volatility: 'low',
    claimBoundary:
      'Describes the widely used training order, not a promise about how quickly an individual progresses; progress depends on conditions, instruction, equipment and the learner.'
  },
  {
    id: 'tarifa.kitesurf-beginner.wind-window.power-zone',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'The wind window is the domed area downwind of the rider; the kite develops little pull at the edges and its strongest pull in the central power zone, and moving the kite quickly through the power zone increases pull.',
    status: 'verified',
    sourceIds: ['iko-kiteboarding-method-2026', 'duotone-kiteboarding-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2028-09-04',
    volatility: 'low',
    claimBoundary:
      'Explains the principle for orientation. It is not a substitute for supervised practice, and clock positions are teaching shorthand, not a rule that any position is inherently safe.'
  },
  {
    id: 'tarifa.kitesurf-beginner.safety.release-cascade',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'Modern bar systems use a safety cascade — sheet the bar out, then release the chicken-loop quick release so the kite flags out, then release the safety leash for full separation — and ISO 21853 sets minimum requirements for such release systems.',
    status: 'verified',
    sourceIds: ['duotone-kiteboarding-2026', 'iso-21853-2020', 'vdws-kiteboarding-training-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-09-04',
    volatility: 'medium',
    claimBoundary:
      'Safety-critical. The exact release motion, flag-out behaviour and reset vary by manufacturer, so the procedure must be learned and practised on the specific bar; public copy must not present it as a universal step-by-step instruction.'
  },
  {
    id: 'tarifa.kitesurf-beginner.kite-size.multi-factor',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'Appropriate kite size depends on rider weight, wind strength, position in the wind window, flying speed, trim, board and kite model; manufacturers publish only non-binding orientation ranges.',
    status: 'verified',
    sourceIds: ['north-kiteboarding-sizing-2026', 'duotone-kiteboarding-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2028-09-04',
    volatility: 'low',
    claimBoundary:
      'Kite size is an instructor-led decision for the day and equipment. Public copy must not print a size-from-weight formula or imply a beginner can self-select and self-rig a kite for given wind.'
  },
  {
    id: 'tarifa.kitesurf-beginner.bodydrag-selfrescue.core-safety',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'Upwind body-drag (to recover a lost board) and a trained self-rescue procedure are core safety skills taught before independent riding, not optional extras.',
    status: 'verified',
    sourceIds: ['vdws-kiteboarding-training-2026', 'iko-kiteboarding-method-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2028-09-04',
    volatility: 'low',
    claimBoundary:
      'Names their role. Self-rescue must be practised on the concrete bar system; the guide describes the principle and does not certify competence.'
  },
  {
    id: 'tarifa.kitesurf-beginner.instruction.not-a-substitute',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    statement:
      'Written guidance is preparation and review only; VDWS and manufacturers recommend learning to kitesurf with a qualified school because a mis-steered kite can accelerate a rider in seconds.',
    status: 'verified',
    sourceIds: ['vdws-kiteboarding-training-2026', 'duotone-kiteboarding-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2028-09-04',
    volatility: 'low',
    claimBoundary:
      'A safety framing that must remain on the page. AMARA does not teach on the water; any AMARA role is a learning base plus lesson/gear coordination.'
  }
] as const satisfies readonly KiteFactInput[];

export const tarifaKitesurfBeginnerFacts = defineKnowledgeFacts(facts);

export type TarifaKitesurfBeginnerFactId = (typeof tarifaKitesurfBeginnerFacts)[number]['id'];
