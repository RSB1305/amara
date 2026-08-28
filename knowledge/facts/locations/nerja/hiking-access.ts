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
] as const satisfies readonly FactInput[];

export const nerjaHikingAccessFacts = defineKnowledgeFacts(facts);
export type NerjaHikingAccessFactId = (typeof nerjaHikingAccessFacts)[number]['id'];
