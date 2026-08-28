import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaHikingSourceId } from '../../../sources/locations/frigilianaHikingSources';
import type { WinterStaysSourceId } from '../../../sources/locations/winterStaysSources';

type SourceId = FrigilianaHikingSourceId | WinterStaysSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'frigiliana.hiking.cruz-pinto.route-profile', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The municipal catalogue lists Cruz de Pinto as 5.8 km, approximately 3 hours and easy; the route description starts at Plaza del Ingenio, enters the Río Higuerón bed and returns to Frigiliana over the outward line.',
    status: 'verified', sourceIds: ['frigiliana-tourism-hiking-index-2026', 'frigiliana-tourism-cruz-pinto-2026'], checkedAt: '2026-08-28', reviewAfter: '2027-08-28', volatility: 'medium',
    claimBoundary: 'Published difficulty is not a safety guarantee; the source has an altitude inconsistency, so no total ascent or summit elevation is adopted.',
  },
  {
    id: 'frigiliana.hiking.cahorros.route-profile-and-riverbed', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The municipal catalogue lists Cahorros del Río Higuerón as 4.6 km, approximately 2.5 hours and easy; the described circuit descends into the riverbed, passes the narrow cahorros and returns to the initial river access before climbing back to Frigiliana.',
    status: 'verified', sourceIds: ['frigiliana-tourism-hiking-index-2026', 'frigiliana-tourism-cahorros-higueron-2026'], checkedAt: '2026-08-28', reviewAfter: '2027-04-01', volatility: 'medium',
    claimBoundary: 'The profile does not establish current water level, flood safety, surface condition or suitability after rain; these require a live check.',
  },
  {
    id: 'frigiliana.hiking.el-fuerte.route-profile', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The municipal catalogue lists El Fuerte as 7.4 km, approximately 4 hours and medium difficulty, and the route page gives a summit elevation of 963 metres.',
    status: 'verified', sourceIds: ['frigiliana-tourism-hiking-index-2026', 'frigiliana-tourism-el-fuerte-route-2026', 'frigiliana-winter-el-fuerte-2026'], checkedAt: '2026-08-28', reviewAfter: '2027-08-28', volatility: 'medium',
    claimBoundary: 'The existing winter-stays fact retains ownership of the village start; no total ascent, current access, shade or day-specific suitability follows.',
  },
  {
    id: 'frigiliana.hiking.el-fuerte.official-start-and-lizar-access', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The official El Fuerte description starts at Plaza del Ingenio and reaches Pozo de Lízar after a published 750-metre village approach via Calle Real, Calle Hernando el Darra, Calle Amargura and Calle Chorrera; the mountain path continues from Pozo de Lízar.',
    status: 'verified', sourceIds: ['frigiliana-tourism-el-fuerte-route-2026'], checkedAt: '2026-08-28', reviewAfter: '2027-08-28', volatility: 'medium',
    claimBoundary: 'This is the municipal route start and approach, not a measured route from Casa AMARA. It does not establish a separate short “viewpoints” variant or its endpoint.',
  },
  {
    id: 'frigiliana.hiking.acebuchal.official-route-profile', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The municipal Frigiliana–El Acebuchal route starts at Plaza del Ingenio, is published as 13 km and approximately 4 hours 20 minutes, and returns to Frigiliana by retracing the outward route.',
    status: 'verified', sourceIds: ['frigiliana-tourism-acebuchal-route-2026'], checkedAt: '2026-08-28', reviewAfter: '2027-08-28', volatility: 'medium',
    claimBoundary: 'The official source does not support describing this route as a loop or as starting at Casa AMARA; current access, water, surface and safety remain live checks.',
  },
  {
    id: 'frigiliana.hiking.gr249-stage6.route-profile', subject: 'frigiliana', topic: 'hiking-weather-return',
    statement: 'The official GR 249 topoguide identifies Stage 6 as the mountainous, linear Frigiliana–Cómpeta stage through El Acebuchal and the Sierra de Almijara; the published planning record gives 24.7 km and approximately 8 hours 15 minutes.',
    status: 'verified', sourceIds: ['diputacion-malaga-gr249-topoguide-2021'], checkedAt: '2026-08-28', reviewAfter: '2027-08-28', volatility: 'medium',
    claimBoundary: 'The 2021 guide does not establish current closures, water, transport, surface or weather; return transport must be planned separately because the stage is linear.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaHikingFacts = defineKnowledgeFacts(facts);
export type FrigilianaHikingFactId = (typeof frigilianaHikingFacts)[number]['id'];
