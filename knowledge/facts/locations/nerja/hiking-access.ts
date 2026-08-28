import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaHikingSourceId } from '../../../sources/locations/frigilianaHikingSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly FrigilianaHikingSourceId[] };

const facts = [
  {
    id: 'nerja.hiking.rio-chillar.official-closure-2025', subject: 'nerja', topic: 'hiking-access',
    statement: 'On 5 August 2025 Nerja municipality stated that access to Río Chíllar remained closed as a precaution against forest-fire risk.',
    status: 'verified', sourceIds: ['nerja-municipality-chillar-closure-2025'], checkedAt: '2026-08-28', reviewAfter: '2026-09-28', volatility: 'high',
    claimBoundary: 'This is dated historical closure evidence and must not be presented as the live status in 2026 or later without a current authority check.',
  },
  {
    id: 'nerja.hiking.rio-chillar.current-closure-check-2026-08-28', subject: 'nerja', topic: 'hiking-access',
    statement: 'On 28 August 2026 an official Junta de Andalucía public-information page displayed that Río Chíllar was currently closed to the public.',
    status: 'verified', sourceIds: ['junta-cultura-rio-chillar-current-closure-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-09-04', volatility: 'high',
    claimBoundary: 'This is a dated page check, not a permanent closure claim. The source gives no effective date or detailed legal scope and must be rechecked immediately before publication or guest use.',
  },
  {
    id: 'nerja.hiking.rio-chillar.controlled-access-procedure-2026', subject: 'nerja', topic: 'hiking-access',
    statement: 'A BOJA notice published on 3 February 2026 opened a project-competition stage within authorization procedure 2026AUT000043MA for possible tourist activity in the Río Chíllar channel with controlled access.',
    status: 'verified', sourceIds: ['boja-rio-chillar-controlled-access-procedure-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-09-28', volatility: 'high',
    claimBoundary: 'The procedure does not prove that an authorization was granted, that an operating model exists or that public access has reopened.',
  },
] as const satisfies readonly FactInput[];

export const nerjaHikingAccessFacts = defineKnowledgeFacts(facts);
export type NerjaHikingAccessFactId = (typeof nerjaHikingAccessFacts)[number]['id'];
