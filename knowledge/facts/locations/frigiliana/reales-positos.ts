import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type RealesPositosFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

/**
 * Old-town spoke (B). Graduated out of old-town-monuments.ts by the 2026-09-12 web synthesis.
 * The 1767 date is now verified; the builder was the Counts of Frigiliana (a seigneurial act,
 * not simply "the village"), the original fabric was three naves of round arches, and there is
 * no inscription or coat of arms here (the coat of arms belongs to the Fuente Vieja).
 */
const facts = [
  {
    id: 'frigiliana.reales-positos.grain-store.1767',
    subject: 'frigiliana',
    topic: 'reales-positos',
    statement:
      'Los Reales Pósitos is a public grain store built in 1767 by the Counts of Frigiliana to hold, store, distribute and sell the grain produced on their lands — a grain bank that buffered good and bad harvest years for the village.',
    status: 'verified',
    sourceIds: ['frigiliana-info-reales-positos', 'turismo-frigiliana-monumentos', 'lpmbe-frigiliana-reales-positos'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      '1767 is the building; the pósito was a seigneurial act by the counts, which is fuller than "built for the villagers". The institution itself is older than the building.',
  },
  {
    id: 'frigiliana.reales-positos.institution.pre-1767',
    subject: 'frigiliana',
    topic: 'reales-positos',
    statement:
      'The pósito institution predates the 1767 building: it is documented from 1749 and was probably established around 1640, when Frigiliana became an independent villa; a 1717 donation of a "cárcel y granero" points to a predecessor.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-info-reales-positos', 'lpmbe-frigiliana-reales-positos'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: '1749 is documented; the 1640 origin is probable, not confirmed. Keep the institution and the 1767 building distinct.',
  },
  {
    id: 'frigiliana.reales-positos.architecture.three-naves-arcades',
    subject: 'frigiliana',
    topic: 'reales-positos',
    statement:
      'The ground floor was originally three naves with round (medio punto) arches; today only the red-brick façade arcades and the cellar vaults survive, the rest folded into private housing.',
    status: 'verified',
    sourceIds: ['frigiliana-info-reales-positos', 'turismo-frigiliana-monumentos'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The three-nave/round-arch fabric and the surviving arcades and cellars are attested; a specific number of arch openings ("six") is not verified.',
  },
  {
    id: 'frigiliana.reales-positos.location.calle-real',
    subject: 'frigiliana',
    topic: 'reales-positos',
    statement:
      'The pósito stands on Calle Real, near the start of the ceramic-mosaic route of the Morisco revolt, and is private today, its arcades read from the lane.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-info-reales-positos', 'turismo-frigiliana-monumentos'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'The street is attested; no exact house number. There is no inscription or coat of arms here — the counts’ coat of arms is on the Fuente Vieja, not the pósito.',
  },
] as const satisfies readonly RealesPositosFactInput[];

export const frigilianaRealesPositosFacts = defineKnowledgeFacts(facts);

export type FrigilianaRealesPositosFactId = (typeof frigilianaRealesPositosFacts)[number]['id'];
