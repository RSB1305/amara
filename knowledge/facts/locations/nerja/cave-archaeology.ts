import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaCaveSourceId } from '../../../sources/locations/nerjaCaveSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly NerjaCaveSourceId[] };

const facts = [
  {
    id: 'nerja.cave.discovery.1959-01-12-five-local-boys', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The Cueva de Nerja was discovered on 12 January 1959 by five boys from Maro.',
    status: 'verified', sourceIds: ['nerja-cave-discovery-official', 'ahp-malaga-nerja-cave-2019'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This is the modern discovery of the cave system, not the beginning of human knowledge or prehistoric use of it.',
  },
  {
    id: 'nerja.cave.public-opening.1960-06-12', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The cave opened to the public on 12 June 1960.',
    status: 'verified', sourceIds: ['ahp-malaga-nerja-cave-2019'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This is the historical opening date, not current opening-hours information.',
  },
  {
    id: 'nerja.cave.bic-zone-archaeological-2006', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The Cueva de Nerja was declared a Bien de Interés Cultural in the category Zona Arqueológica in 2006.',
    status: 'verified', sourceIds: ['nerja-cave-bic-2006', 'ahp-malaga-nerja-cave-2019'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'The designation is archaeological protection; it should not be reduced to a tourism award.',
  },
  {
    id: 'nerja.cave.location.maro-southern-sierra-almijara', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The protected cave lies by Maro on the southern side of the Sierra Almijara.',
    status: 'verified', sourceIds: ['nerja-cave-bic-2006'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'Maro is a distinct population centre within Nerja municipality; the cave should not be described as located in Nerja’s central urban core.',
  },
  {
    id: 'nerja.cave.openings.natural-and-artificial', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The cave system has natural openings and an artificial entrance created for public access in 1960.',
    status: 'verified', sourceIds: ['nerja-cave-bic-2006'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This does not imply that the full protected cave system is open to visitors.',
  },
  {
    id: 'nerja.cave.values.archaeological-geological-record', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The cave preserves interconnected archaeological, palaeontological and geological records, including stratified evidence of prehistoric human use.',
    status: 'verified', sourceIds: ['nerja-cave-bic-2006', 'nerja-cave-values-official'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'Specific dates, authorship and interpretations of individual art or occupation layers require study-level citations.',
  },
  {
    id: 'nerja.cave.karst-hydrological-protection', subject: 'nerja', topic: 'cave-archaeology',
    statement: 'The BIC protection extends beyond visible chambers because the cave is part of a karst and hydrological system whose infiltration conditions affect conservation.',
    status: 'verified', sourceIds: ['nerja-cave-bic-2006', 'nerja-cave-geology-official'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This explains conservation context; it does not support unverified claims about groundwater safety or visitor health.',
  },
] as const satisfies readonly FactInput[];

export const nerjaCaveArchaeologyFacts = defineKnowledgeFacts(facts);
export type NerjaCaveArchaeologyFactId = (typeof nerjaCaveArchaeologyFacts)[number]['id'];
