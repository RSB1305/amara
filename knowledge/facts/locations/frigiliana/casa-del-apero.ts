import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaCasaDelAperoSourceId } from '../../../sources/locations/frigilianaCasaDelAperoSources';

type CasaDelAperoFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaCasaDelAperoSourceId[];
};

const facts = [
  {
    id: 'frigiliana.casa-del-apero.origin.ingenio-annex-17c',
    subject: 'frigiliana',
    topic: 'casa-del-apero',
    statement:
      'The Casa del Apero was built in the early seventeenth century as the agricultural annex of the sugar estate, functionally linked to El Ingenio: a granary, stables and store for the apero (the farming implements).',
    status: 'verified',
    sourceIds: ['ayuntamiento-frigiliana-casa-del-apero-2026', 'frigiliana-info-casa-del-apero-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The early-17th-century date and the working link to El Ingenio are the documented core; finer construction phases are not fully dated.',
  },
  {
    id: 'frigiliana.casa-del-apero.architecture.patio-tapial-brick',
    subject: 'frigiliana',
    topic: 'casa-del-apero',
    statement:
      'It has a rectangular plan around an interior courtyard, two storeys, rammed-earth (tapial) walls with stone courses, and brick arches, pillars and main entrance.',
    status: 'verified',
    sourceIds: ['frigiliana-info-casa-del-apero-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Descriptive architectural reading of the historic fabric; some elements post-date the 1990s restoration.',
  },
  {
    id: 'frigiliana.casa-del-apero.restoration.1980s-1990s',
    subject: 'frigiliana',
    topic: 'casa-del-apero',
    statement:
      'The town acquired the building from the early 1980s and restored it through the 1990s to broaden the village’s cultural and tourist infrastructure.',
    status: 'partially-verified',
    sourceIds: ['ayuntamiento-frigiliana-casa-del-apero-2026', 'frigiliana-info-casa-del-apero-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Acquisition (early 1980s) and restoration (1990s) are attributed to municipal sources; exact reopening dates are not pinned.',
  },
  {
    id: 'frigiliana.casa-del-apero.current-use.cultural-centre',
    subject: 'frigiliana',
    topic: 'casa-del-apero',
    statement:
      'Today the Casa del Apero is the village cultural centre, housing the municipal library, a temporary-exhibition hall, the historical archive and the tourism office.',
    status: 'verified',
    sourceIds: ['ayuntamiento-frigiliana-casa-del-apero-2026', 'diputacion-malaga-museo-apero-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'Opening hours, admission and current programmes are operational details to be checked on site, not stated as fixed facts.',
  },
  {
    id: 'frigiliana.casa-del-apero.museum.archaeological',
    subject: 'frigiliana',
    topic: 'casa-del-apero',
    statement:
      'The building also houses the Museo Arqueológico de Frigiliana (the village archaeological museum).',
    status: 'partially-verified',
    sourceIds: ['diputacion-malaga-museo-apero-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'The museum’s presence is documented; its exact holdings, hours and admission are current checks, not detailed here.',
  },
] as const satisfies readonly CasaDelAperoFactInput[];

export const frigilianaCasaDelAperoFacts = defineKnowledgeFacts(facts);

export type FrigilianaCasaDelAperoFactId = (typeof frigilianaCasaDelAperoFacts)[number]['id'];
