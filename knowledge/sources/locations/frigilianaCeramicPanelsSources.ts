import { defineKnowledgeSources } from '../../schema';

export const frigilianaCeramicPanelsSources = defineKnowledgeSources([
  {
    id: 'frigiliana-azulejos-official-pdf-2026',
    title: 'Azulejos — Ruta de los mosaicos (SP/ENG)',
    publisher: 'Ayuntamiento de Frigiliana — Turismo Frigiliana',
    sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/pdf/azulejos_web_sp_eng.pdf',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Official municipal booklet on the ceramic-panel route through the Barribarto, with panel texts and the twelve-panel sequence.',
    limitations:
      'The municipal booklet presents the panels as public history; it does not itself resolve exact per-panel street positions or authorship disputes.',
    reuse: 'link-and-cite',
  },
  {
    id: 'navas-acosta-azulejos-morisca-diaspora',
    title: 'Vida y diáspora morisca en la Axarquía veleña contada en los azulejos de Frigiliana',
    publisher: 'Antonio Navas Acosta',
    sourceType: 'secondary',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'The historian who authored the panel texts; the monograph compiles and shapes the narrative fixed on the 1982 panels.',
    limitations:
      'Editions are dated 1995/1999 while the panels were installed in 1982, so the book post-dates the installation and reflects an authored, empathetic retelling rather than a neutral archive.',
    reuse: 'link-and-cite',
  },
  {
    id: 'marmol-carvajal-rebelion-castigo-moriscos-1600',
    title: 'Historia del rebelión y castigo de los moriscos del Reino de Granada',
    publisher: 'Luis del Mármol Carvajal (1600)',
    sourceType: 'secondary',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Contemporary royal chronicle underlying the panels’ topography, the Roxas banner and the siege details (rolled millstones).',
    limitations:
      'Written from the crown’s perspective; the panels invert its moral framing. A sixteenth-century chronicle is not a neutral casualty record.',
    reuse: 'link-and-cite',
  },
  {
    id: 'hurtado-mendoza-guerra-granada-1627',
    title: 'Guerra de Granada',
    publisher: 'Diego Hurtado de Mendoza (posth. 1627)',
    sourceType: 'secondary',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Contemporary chronicle supplying the macro-historical background of decades-long fiscal and religious pressure behind the 1568/69 revolt.',
    limitations: 'Perspective and reliability are period-bound; used for context, not for precise local demographics.',
    reuse: 'link-and-cite',
  },
  {
    id: 'amara-ceramic-panels-deep-research-2026',
    title: 'Amara Deep Research — Die Keramiktafeln von Frigiliana: Provenienz, Narrativ und historiographischer Befund',
    publisher: 'AMARA Research Vault (gpt-deep-research)',
    sourceType: 'discovery-tool',
    accessedAt: '2026-09-11',
    language: 'de',
    scope:
      'Commissioned synthesis consolidating provenance, the twelve-panel register with Spanish transcriptions, and a claim audit separating documented history from public history.',
    limitations:
      'A synthesis of secondary and official sources; individual claims inherit the confidence of their underlying source and must not be treated as new primary evidence.',
    reuse: 'internal-only',
  },
] as const);

export type FrigilianaCeramicPanelsSourceId =
  (typeof frigilianaCeramicPanelsSources)[number]['id'];
