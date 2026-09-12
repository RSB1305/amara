import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type CastilloLizarFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

/**
 * Old-town spoke (B). Graduated out of old-town-monuments.ts by the 2026-09-12 web synthesis.
 * The razing chain was made precise (ordered by the royal commander Don Luis de Requesens with
 * Philip II’s approval, not simply "by the crown"), the stone-reuse bridge to El Ingenio was
 * added, and the Castillo de Lizar (over the town core) is kept distinct from El Fuerte / Peñón
 * de Frigiliana (~963 m), the higher 1569 battle summit.
 */
const facts = [
  {
    id: 'frigiliana.castillo-lizar.moorish-fortress.9-11c',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'The Castillo de Lizar was a Moorish fortress of roughly 4,000 m² on the hill above the town core (cerro de Lízar), built between the ninth and eleventh centuries, commanding the approaches to the valley.',
    status: 'verified',
    sourceIds: ['wikipedia-es-castillo-frigiliana', 'lpmbe-frigiliana-castillo-arabe', 'boja-decreto-183-2014-frigiliana-conjunto-historico'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'Two dating hypotheses exist (9th c. / Almoravid ~11th c.). The hill name is given as cerro de Lízar by most sources but "cerro de la Sabina" by Wikipedia, so it is left open. The site is a ruin, not an intact castle.',
  },
  {
    id: 'frigiliana.castillo-lizar.razed.requesens-1569',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'After the Morisco uprising of 1569 the fortress was razed on the order of the royal commander Don Luis de Requesens, Comendador Mayor de Castilla, with the approval of King Philip II, so that it could not again shelter rebels.',
    status: 'verified',
    sourceIds: ['lpmbe-frigiliana-castillo-arabe', 'wikipedia-es-castillo-frigiliana'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'Complements frigiliana.history.castillo-lizar.destroyed-1569. "By royal order" is a shortcut: the direct order came from Requesens with Philip II’s approval.',
  },
  {
    id: 'frigiliana.castillo-lizar.stone-reused-ingenio',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'The cut stone (sillares) of the razed castle was reused to build the Manrique de Lara counts’ palace at the foot of the village — the building known today as El Ingenio.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-siglo-xvi-xix', 'wikipedia-es-castillo-frigiliana'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'A material bridge between the two monuments; the palace was built "in part" with castle stone, not exclusively.',
  },
  {
    id: 'frigiliana.castillo-lizar.remains',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'Only limited remains survive — foundations, a stretch of wall and part of the access ramp / low wall sections — so the value of the visit is the vantage and the medieval defensive logic, not standing fabric.',
    status: 'verified',
    sourceIds: ['lpmbe-frigiliana-castillo-arabe'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'An open, rough site with uneven footing; nothing is restored to enter.',
  },
  {
    id: 'frigiliana.castillo-lizar.bic.1985',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'The castle remains are protected as a Bien de Interés Cultural since 25 June 1985 (code RI-51-0011278), under the generic Spanish castle-protection decree.',
    status: 'partially-verified',
    sourceIds: ['wikipedia-es-castillo-frigiliana'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Attested by a tertiary encyclopaedia; the protection is the blanket 1949 castles decree rather than a monument-specific act.',
  },
  {
    id: 'frigiliana.castillo-lizar.distinct-from-el-fuerte',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    statement:
      'The Castillo de Lizar over the town core is a different place from El Fuerte / Peñón de Frigiliana (~963 m), the higher summit where the Moriscos made their last stand and the decisive battle was fought on 11 June 1569.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-el-fuerte', 'wikipedia-es-castillo-frigiliana'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'Tourist sources sometimes conflate the two. The razing belongs to the Castillo de Lizar; the 1569 battle belongs to El Fuerte / Peñón.',
  },
] as const satisfies readonly CastilloLizarFactInput[];

export const frigilianaCastilloLizarFacts = defineKnowledgeFacts(facts);

export type FrigilianaCastilloLizarFactId = (typeof frigilianaCastilloLizarFacts)[number]['id'];
