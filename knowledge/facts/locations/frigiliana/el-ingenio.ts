import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaIngenioSourceId } from '../../../sources/locations/frigilianaIngenioSources';

type IngenioFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaIngenioSourceId[];
};

const facts = [
  {
    id: 'frigiliana.ingenio.palace.manrique-de-lara-16c',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'El Ingenio is the Palace of the Counts of Frigiliana, the Renaissance residence of the Manrique de Lara family, completed in the sixteenth century, occupying more than 2,000 m² and built in part with material from the former Arab castle.',
    status: 'verified',
    sourceIds: ['diputacion-malaga-palacio-condes-ingenio-2026', 'ayuntamiento-frigiliana-ingenio-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'This is the building’s origin as a noble palace; it is a distinct layer from the 1725 industrial sugar-works conversion. "Count’s palace" alone understates the later industrial function.',
  },
  {
    id: 'frigiliana.ingenio.lordship.manrique-1508',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'The Manrique de Lara counts held the lordship of Frigiliana and its lands from 1508; the palace and its sugar works belonged to the noble house for roughly two centuries.',
    status: 'verified',
    sourceIds: ['diputacion-malaga-palacio-condes-ingenio-2026', 'ayuntamiento-frigiliana-ingenio-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Private lordship from 1508 explains why so much documentation survives in the noble-house archive; it does not by itself date the industrial ingenio.',
  },
  {
    id: 'frigiliana.ingenio.sugar.trapiche-to-ingenio-1725',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'A small trapiche founded under Íñigo Manrique de Lara, first Count of Frigiliana, was expanded into the current industrial sugar ingenio around 1725 — the Count requested permission to fell timber for the works in 1725 — and it was fully operating by 1728/29.',
    status: 'verified',
    sourceIds: ['ayuntamiento-frigiliana-ingenio-2026', 'diputacion-malaga-palacio-condes-ingenio-2026', 'archivo-historico-nobleza-manrique-lara-ingenio'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The 1725 date is the industrial conversion/expansion, not the origin of the building; both the 16th-century palace and the 1725 ingenio are documented and must be kept distinct.',
  },
  {
    id: 'frigiliana.ingenio.archive.nobleza-toledo-1672-1730',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'Documentation on the ingenio survives in the Archivo Histórico de la Nobleza (Hospital de Tavera, Toledo): inventories and rental income spanning 1672–1729, and a 1730 "Consulta sobre la construcción del ingenio de azúcar" of Íñigo Manrique de Lara with expert statements on materials and wages.',
    status: 'partially-verified',
    sourceIds: ['diputacion-malaga-ingenio-azucarero-book-2026', 'archivo-historico-nobleza-manrique-lara-ingenio'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Cited via official/secondary summaries, not direct archival transcription; exact folio references are not reproduced.',
  },
  {
    id: 'frigiliana.ingenio.facade.esgrafiado',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'The facade carries painted and esgrafiado (sgraffito) decoration in geometric bands — diamonds and rectangles in earth tones and blue — on a rectangular body with a gabled roof that echoes the church of San Antonio.',
    status: 'verified',
    sourceIds: ['frigiliana-info-ingenio-arquitectura-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Descriptive architectural reading; the surviving decoration is weathered and its extent varies across the facade.',
  },
  {
    id: 'frigiliana.ingenio.facade.niches-and-sundials',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'The facade originally held two niches with sculptures of the Virgen del Carmen and San Raimundo and at least two sundials; a 1662 authorization from Pope Clement X permitted mass in the building’s chapel.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-info-ingenio-arquitectura-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'medium',
    claimBoundary:
      'The niche statues and sundials are documented historically; the present on-site state may differ (niches can be empty). Describe as originally-present, not guaranteed today.',
  },
  {
    id: 'frigiliana.ingenio.mielcana.production-since-1725',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'The building houses the Nuestra Señora del Carmen factory, which has produced Frigiliana miel de caña since 1725; its mill train, built and installed by the Díaz workshops of Vélez-Málaga in the 1950s, still works — now driven by electricity — and grinds cane on some days of the year.',
    status: 'verified',
    sourceIds: ['ayuntamiento-frigiliana-ingenio-2026', 'diputacion-malaga-ingenio-azucarero-book-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'Miel de caña is concentrated cane juice, not molasses (molasses is what remains after sugar crystallises out). Grinding days and continuous operation are producer/authority claims, not a fixed public schedule.',
  },
  {
    id: 'frigiliana.ingenio.mielcana.last-on-peninsula-attributed',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'The Diputación de Málaga frames the Frigiliana ingenio as the last cane-sugar ingenio of its kind remaining on the Iberian peninsula.',
    status: 'partially-verified',
    sourceIds: ['diputacion-malaga-ingenio-azucarero-book-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'Use only as an attributed institutional claim ("often called / said to be the last of its kind on the peninsula"), never as an absolute superlative. The wider "only factory in Europe" version is not supportable and must not be stated.',
  },
  {
    id: 'frigiliana.ingenio.ibex.cabra-montes-roofs',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'Iberian ibex (cabra montés) from the Sierras de Tejeda, Almijara y Alhama natural park — an endemic species whose recovered population reaches around 1,500 on the Málaga side — descend into Frigiliana’s streets and onto its rooftops, El Ingenio among them.',
    status: 'verified',
    sourceIds: ['junta-andalucia-tejeda-almijara-cabra-montes-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'These are wild Iberian ibex, not domestic goats or chamois. Sightings on any given roof are occasional and cannot be promised.',
  },
  {
    id: 'frigiliana.ingenio.access.working-site',
    subject: 'frigiliana',
    topic: 'el-ingenio',
    statement:
      'El Ingenio is a working production site rather than a museum; there is no reliable regular public visit, though occasional guided visits are organised through the town/tourism office.',
    status: 'verified',
    sourceIds: ['ayuntamiento-frigiliana-ingenio-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2028-09-11',
    volatility: 'medium',
    claimBoundary:
      'Do not promise interior access; occasional visits depend on the producer and the tourism office and are not a scheduled offering.',
  },
] as const satisfies readonly IngenioFactInput[];

export const frigilianaIngenioFacts = defineKnowledgeFacts(facts);

export type FrigilianaIngenioFactId = (typeof frigilianaIngenioFacts)[number]['id'];
