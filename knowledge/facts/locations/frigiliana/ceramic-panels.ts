import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaCeramicPanelsSourceId } from '../../../sources/locations/frigilianaCeramicPanelsSources';

type CeramicPanelsFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaCeramicPanelsSourceId[];
};

const facts = [
  {
    id: 'frigiliana.ceramic-panels.count.twelve',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'Frigiliana’s historic ceramic-panel cycle in the Barribarto comprises exactly twelve panels, forming one closed narrative of the 1569 Morisco revolt.',
    status: 'verified',
    sourceIds: ['frigiliana-azulejos-official-pdf-2026', 'amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Twelve is the documented count; looser figures in tourist writing are errors. The number counts the sequential text-route panels, not every ceramic mural in the village.',
  },
  {
    id: 'frigiliana.ceramic-panels.installation.1982-beautification',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panels were installed in 1982, during the urban upgrade of the Barrio Morisco that coincided with Frigiliana’s national beautification award (Premio Nacional de Embellecimiento).',
    status: 'verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026', 'frigiliana-azulejos-official-pdf-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The panels are a deliberate 1982 cultural-policy act, not a feature that grew organically over centuries.',
  },
  {
    id: 'frigiliana.ceramic-panels.texts.navas-acosta',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panel texts were authored by the local historian Antonio Navas Acosta, who reworked sixteenth-century chronicles into a public, victim-facing narrative.',
    status: 'verified',
    sourceIds: ['navas-acosta-azulejos-morisca-diaspora', 'amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'His monograph is dated 1995/1999, after the 1982 installation; the panel texts rest on his earlier research, not on the later book.',
  },
  {
    id: 'frigiliana.ceramic-panels.ceramics.ruiz-de-luna',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The ceramic execution of the twelve route panels is attributed to the ceramist Amparo Ruiz de Luna.',
    status: 'partially-verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Sources conflict on the visual design: the painter Pilar García Millán is also linked to Frigiliana Morisco ceramic work, possibly a separate mural rather than the twelve-panel route. Attribute the route panels to Ruiz de Luna and do not silently merge the two.',
  },
  {
    id: 'frigiliana.ceramic-panels.technique.four-colours',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panels deliberately use only four mineral colours — ivory white, black, green and brown — replicating sixteenth-century Morisco ceramics of the Bentomiz region and avoiding costly imported blue or red.',
    status: 'verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The restricted palette is an archaizing design choice of 1982 meant to blend into the whitewashed quarter, not an accidental limitation.',
  },
  {
    id: 'frigiliana.ceramic-panels.route.start-hernando-el-darra',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The route begins with panel 1 in Calle Hernando El Darra, near the old grain stores (Pósitos) and El Ingenio, and climbs through the steep lanes of the Barribarto (Calle Real, El Garral, Callejón del Señor, Pizarrillas, El Zacatín).',
    status: 'partially-verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026', 'frigiliana-azulejos-official-pdf-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'medium',
    claimBoundary:
      'Only panel 1 has a precise documented position; exact street/house locations for panels 2–12 are not codified and require on-site verification before any turn-by-turn claim.',
  },
  {
    id: 'frigiliana.ceramic-panels.textual-basis.marmol-hurtado',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panel narrative rests on two contemporary royal chronicles — Luis del Mármol Carvajal (topography, the Roxas banner, the rolled-millstone defence) and Diego Hurtado de Mendoza (the decades of fiscal and religious pressure).',
    status: 'verified',
    sourceIds: [
      'marmol-carvajal-rebelion-castigo-moriscos-1600',
      'hurtado-mendoza-guerra-granada-1627',
      'amara-ceramic-panels-deep-research-2026',
    ],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The chronicles are the textual source, but the panels invert their moral framing (rebels to be punished → tragic defenders).',
  },
  {
    id: 'frigiliana.ceramic-panels.public-history.perspectival-inversion',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panels are objects of public history: they reproduce the chroniclers’ facts but invert their judgement, recasting the Moriscos as defenders of freedom and homeland — a late-twentieth-century Andalusian reinterpretation.',
    status: 'verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'This is memory culture, not a neutral primary source. The panels must not be cited as unexamined proof of the history they depict.',
  },
  {
    id: 'frigiliana.ceramic-panels.omission.28-may-1569',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The panels compress the siege to the decisive royal assault of 11 June 1569 and omit the failed first assault of 28 May 1569, which the Moriscos repelled.',
    status: 'verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026', 'marmol-carvajal-rebelion-castigo-moriscos-1600'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The omission is a narrative choice for coherence; the documented two-stage battle (28 May defence, 11 June defeat) is the fuller record and is the honest point of difference to surface.',
  },
  {
    id: 'frigiliana.ceramic-panels.anachronism.holocausto-patria',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'The twelfth panel is titled “El Holocausto” and invokes a secular “patria” — both twentieth-century terms, anachronistic to the sixteenth-century actors, marking the cycle as an emotional memorial of the 1980s.',
    status: 'verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Present these as deliberate modern framing, not as period vocabulary; do not repeat “Holocausto” as a neutral historical label without this context.',
  },
  {
    id: 'frigiliana.ceramic-panels.casualties.figures',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    statement:
      'Panel 11 records roughly 500 men and 1,300 women and children killed and about 3,000 enslaved at the fall of the Peñón; regional scholarship often puts total Morisco dead somewhat higher, around 2,000–2,400.',
    status: 'partially-verified',
    sourceIds: ['amara-ceramic-panels-deep-research-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Give these as period figures and scholarly ranges, not as precise counts; the enslavement of roughly three thousand is the well-supported element.',
  },
] as const satisfies readonly CeramicPanelsFactInput[];

export const frigilianaCeramicPanelsFacts = defineKnowledgeFacts(facts);

export type FrigilianaCeramicPanelsFactId = (typeof frigilianaCeramicPanelsFacts)[number]['id'];
