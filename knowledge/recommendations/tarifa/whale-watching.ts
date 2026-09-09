import { defineKnowledgeRecommendations } from '../../schema';

/**
 * Whale-watching operators sailing from Tarifa harbour. Maintained once here and cited
 * by both the family page and the dedicated whale-watching page. All CANDIDATE until the
 * whale-watching research input is uploaded and Robert confirms the lead operator
 * (see open question tarifa.family.question.whale-watching-choice).
 */
export const tarifaWhaleWatchingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.whale-watching.firmm',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'firmm — Foundation for Information and Research on Marine Mammals',
      kind: 'provider',
      website: 'https://www.firmm.org/en/whale-watching'
    },
    summary:
      'Research-foundation whale/dolphin watching from Tarifa harbour; family-suitable with a reduced child tier and babies under one free, roughly 2h and 3h trips, a briefing before sailing, and a strong information/safety reputation.',
    bestFor: ['families', 'children 5–17', 'first-time whale watching'],
    access: [{ from: 'amara-family-surf', note: 'Tarifa harbour, on foot from the town centre.' }],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: [
      'tarifa.family.whale-watching.family-suitable',
      'tarifa.family.whale-watching.sighting-not-guaranteed'
    ],
    sourceIds: ['firmm-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'high',
    claimBoundary:
      'Do not print a fixed price, season end or daily timetable; route to the live booking page and a same-day weather check. The ~99% sighting rate is never a species or orca guarantee.'
  },
  {
    id: 'tarifa.whale-watching.turmares',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'Turmares Tarifa',
      kind: 'provider',
      website: 'https://www.turmares.com/en/excursions/'
    },
    summary:
      'Alternative whale-watching operator from Tarifa harbour, roughly March–October, with clear guest guidance on sun/wind protection, secure footwear and seasickness precautions.',
    bestFor: ['families', 'flexible dates'],
    access: [{ from: 'amara-family-surf', note: 'Tarifa harbour, on foot from the town centre.' }],
    planB: 'tarifa.whale-watching.firmm',
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: ['tarifa.family.whale-watching.family-suitable'],
    sourceIds: ['turmares-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'high',
    claimBoundary:
      'Some recent family reviews mention fuller/larger boats. Times, prices and season are volatile and need reconfirmation.'
  }
]);
