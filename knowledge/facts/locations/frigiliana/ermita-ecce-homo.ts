import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type ErmitaEcceHomoFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

/**
 * Old-town spoke (B). Graduated out of old-town-monuments.ts by the 2026-09-12 web synthesis,
 * which corrected two errors carried from the operator brief: the procession is on Miércoles
 * Santo (Holy Wednesday), NOT Good Friday, and "de la Caña" is the reed mock-sceptre of the
 * Ecce Homo iconography, NOT sugar cane / miel de caña. The old id ...chapel.18c-good-friday
 * is superseded by ...chapel.18c below.
 */
const facts = [
  {
    id: 'frigiliana.ermita-ecce-homo.chapel.18c',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'The Ermita de Ecce Homo is a small single-nave chapel first built in the eighteenth century and heavily remodelled since, standing at the edge of the old town off Calle Chorruelo; it is home to the Santo Cristo de la Caña.',
    status: 'verified',
    sourceIds: ['frigiliana-info-ermita-ecce-homo', 'turismo-axarquia-ermita-ecce-homo', 'diputacion-malaga-ermita-ecce-homo'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    supersedes: ['frigiliana.ermita-ecce-homo.chapel.18c-good-friday'],
    claimBoundary:
      '18th-century first build, much remodelled. It sits at the old-town edge (toward Torrox), not deep in the centre; "easy to miss" is fair, "deep in the tangle of central lanes" is not.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.procession.holy-wednesday',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'On Miércoles Santo (Holy Wednesday) the image of the Santo Cristo de la Caña is carried in procession from the ermita to the parish church of San Antonio.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-monumentos', 'turismo-axarquia-ermita-ecce-homo', 'diputacion-malaga-ermita-ecce-homo', 'frigiliana-info-ermita-ecce-homo'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary:
      'Corrects the common "Good Friday" error: all municipal, provincial and comarcal sources agree on Miércoles Santo. Exact times vary by year and are a live detail.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.name.cana-reed-scepter',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'In "Santo Cristo de la Caña" the caña is the reed placed in Christ’s hand as a mock sceptre in the Ecce Homo iconography (crown of thorns, purple robe, reed) — it is not a reference to sugar cane or miel de caña.',
    status: 'verified',
    sourceIds: ['ecce-homo-iconografia-cana-cetro'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'The reed-sceptre meaning is standard Ecce Homo iconography; no source links the name to Frigiliana’s sugar cane. A sugarcane reading would be unsupported folk etymology.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.figure.neo-baroque-20c',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'The processional tradition in Frigiliana dates from the sixteenth century, but the carried figure of the Santo Cristo de la Caña is neo-Baroque, from the second half of the twentieth century.',
    status: 'verified',
    sourceIds: ['frigiliana-info-ermita-ecce-homo'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Distinguishes an old tradition from a young image; do not present the figure itself as centuries old.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.architecture.portico-hillside',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'The chapel has a front atrium/portico over a round arch, its epistle side built against the hillside, and a small altar in the cabecera.',
    status: 'verified',
    sourceIds: ['diputacion-malaga-ermita-ecce-homo', 'frigiliana-info-ermita-ecce-homo'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Descriptive architectural reading from the provincial sheet and the local compendium.',
  },
  {
    id: 'frigiliana.ermita-ecce-homo.devotion.post-morisco-interpretation',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    statement:
      'The chapel is read as part of the Christian popular devotion of the resettled village after the 1569 Morisco expulsion — brotherhoods, images and processions — rather than the grand parish statement of San Antonio.',
    status: 'partially-verified',
    sourceIds: ['amara-old-town-monuments-web-synthesis-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'Framing, not a sourced causal fact: processions are documented from the 16th century, but no source states the chapel was founded "because of" the Morisco expulsion.',
  },
] as const satisfies readonly ErmitaEcceHomoFactInput[];

export const frigilianaErmitaEcceHomoFacts = defineKnowledgeFacts(facts);

export type FrigilianaErmitaEcceHomoFactId = (typeof frigilianaErmitaEcceHomoFacts)[number]['id'];
