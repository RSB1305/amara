import { defineKnowledgeRecommendations } from '../../schema';

export const nerjaHikingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'nerja.hiking.rio-chillar',
    destination: 'nerja',
    topic: 'hiking',
    place: { name: 'Río Chíllar', kind: 'hike' },
    summary: 'The famous "walk in the river" route — beautiful, cool, and busy in peak season. Go early (around 08:00) and prefer weekdays. Access to the river has been closed by the authorities for long stretches since summer 2025, and a procedure for controlled access is under way. Check the current status before you set off; we will gladly look it up for you.',
    operating: { note: 'Closed by the authorities for long stretches since summer 2025; a controlled-access procedure opened in February 2026; current status must be checked before guest use', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.hiking.rio-chillar.official-closure-2025',
      'nerja.hiking.rio-chillar.current-closure-check-2026-08-28',
      'nerja.hiking.rio-chillar.controlled-access-procedure-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-10-01',
    volatility: 'high',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  }
]);
