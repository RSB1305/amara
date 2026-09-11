import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type OldTownMonumentFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

const facts = [
  {
    id: 'frigiliana.fuente-vieja.build.1640-manrique',
    subject: 'frigiliana',
    topic: 'old-town-monuments',
    statement:
      'The Fuente Vieja was built in 1640 by Don Íñigo Manrique de Lara, the fifth Lord of Frigiliana; for centuries it was the village’s main water source, and its brick arch carries the weathered coat of arms of the counts.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The 1640 date and the fifth-lord attribution are operator-provided; the fountain’s role as the historic water source and the surviving coat of arms are the durable core.',
  },
  {
    id: 'frigiliana.reales-positos.grain-store.1767',
    subject: 'frigiliana',
    topic: 'old-town-monuments',
    statement:
      'Los Reales Pósitos was a public grain store of 1767, a grain bank built to secure the villagers’ supply through bad harvest years; the structure is now integrated into private houses, with its well-preserved red-brick arches still visible.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The 1767 date is operator-provided; the building is private today, so the arches are seen from the lane and there is no stated interior access.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.chapel.18c-good-friday',
    subject: 'frigiliana',
    topic: 'old-town-monuments',
    statement:
      'The Ermita de Ecce Homo is a very small single-nave eighteenth-century chapel hidden in the old-town lanes, home to the Santo Cristo de la Caña; it reflects the popular Christian devotion established after the Morisco expulsion and plays a central role in the Good Friday procession.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'The eighteenth-century dating and procession role are operator-provided; service times and the exact procession programme are live details, not fixed facts.',
  },
  {
    id: 'frigiliana.castillo-lizar.moorish-fortress.9-11c',
    subject: 'frigiliana',
    topic: 'old-town-monuments',
    statement:
      'The Castillo de Lizar above the village was a Moorish fortress reckoned to the ninth to eleventh centuries, commanding the approaches; its post-1569 destruction by royal order and its surviving wall remains are documented in the heritage record.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026', 'boja-frigiliana-historic-ensemble-2015-old-town-monuments'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The 9th–11th-century dating is operator-provided; the 1569 razing and the limited surviving remains are the documented core (see frigiliana.history.castillo-lizar.destroyed-1569). The site is a ruin, not an intact castle.',
  },
  {
    id: 'frigiliana.callejon-penon.mirador.el-fuerte-view',
    subject: 'frigiliana',
    topic: 'old-town-monuments',
    statement:
      'The Callejón del Peñón is a steep, much-photographed lane in the upper Barribarto whose opening frames El Fuerte, the massif directly above the village and the site of the 1569 battle; nearby miradores give out over the old town’s roofs.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The El Fuerte view and the 1569 association are the durable core; some upper lanes are adarves (half-private) and should be walked as such.',
  },
] as const satisfies readonly OldTownMonumentFactInput[];

export const frigilianaOldTownMonumentsFacts = defineKnowledgeFacts(facts);

export type FrigilianaOldTownMonumentsFactId = (typeof frigilianaOldTownMonumentsFacts)[number]['id'];
