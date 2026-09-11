import { defineKnowledgeSources } from '../../schema';

export const frigilianaIngenioSources = defineKnowledgeSources([
  {
    id: 'ayuntamiento-frigiliana-ingenio-2026',
    title: 'Ingenio Nuestra Señora del Carmen',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/places/ingenio-nuestra-senora-del-carmen/',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Municipal place entry: the building as the 16th-century Palace of the Counts of Frigiliana, the 1725 sugar-works conversion, and the working miel-de-caña factory.',
    limitations:
      'Municipal self-presentation; useful for identity and current use, not a critical historiographic source.',
    reuse: 'link-and-cite',
  },
  {
    id: 'diputacion-malaga-palacio-condes-ingenio-2026',
    title: 'Palacio de los Condes de Frigiliana o El Ingenio (Patrimonio)',
    publisher: 'Diputación de Málaga',
    sourceType: 'official',
    url: 'https://www.malaga.es/en/laprovincia/patrimonio/lis_cd-5142/the-counts-of-frigiliana-s-palace-or-the-sugar-mill',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Provincial heritage record: Renaissance palace of the Manrique de Lara counts, ~2,000 m², partly built with material from the Arab castle; the trapiche expanded to the current ingenio in 1725; lordship since 1508.',
    limitations:
      'A heritage summary; construction phases are compressed and it does not settle every dating nuance on its own.',
    reuse: 'link-and-cite',
  },
  {
    id: 'diputacion-malaga-ingenio-azucarero-book-2026',
    title: 'La Diputación edita un libro sobre el ingenio azucarero de Frigiliana, el último de sus características que queda en la península',
    publisher: 'Diputación de Málaga — Oficina de Comunicación',
    sourceType: 'official',
    url: 'https://www.malaga.es/comunicacion/2746/com1_md3_cd-50363/la-diputacion-edita-un-libro-sobre-el-ingenio-azucarero-de-frigiliana-el-ultimo-de-sus-caracteristicas-que-queda-en-la-peninsula',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Provincial publication announcement framing the ingenio as the last of its kind remaining on the Iberian peninsula; references the Archivo Histórico de la Nobleza documentation (1672–1729, 1730 consulta).',
    limitations:
      'The "last of its kind on the peninsula" line is an institutional framing; treat as an attributed claim, not an absolute production superlative.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-info-ingenio-arquitectura-2026',
    title: 'El Ingenio de Frigiliana (arquitectura civil)',
    publisher: 'El Patrimonio de Frigiliana (frigiliana.info)',
    sourceType: 'secondary',
    url: 'https://www.frigiliana.info/ingenio-de-frigiliana.php?tema=3.3.1',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Architectural description: esgrafiado facade with geometric bands (diamonds/rectangles in earth tones and blue), two niches with sculptures of the Virgen del Carmen and San Raimundo, at least two sundials, gabled roof echoing San Antonio; 1662 papal authorization (Clement X) for mass in the chapel; sugar-mill documentation 1672–1729.',
    limitations:
      'A local heritage compendium; individual architectural readings are descriptive and the present on-site state (e.g. empty niches) may differ.',
    reuse: 'link-and-cite',
  },
  {
    id: 'junta-andalucia-tejeda-almijara-cabra-montes-2026',
    title: 'Parque Natural Sierras de Tejeda, Almijara y Alhama — cabra montés',
    publisher: 'Junta de Andalucía',
    sourceType: 'official',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Natural-park context for the Iberian ibex (cabra montés), an endemic species whose recovered population (~1,500 on the Málaga side) roams down into Frigiliana’s streets and rooftops.',
    limitations:
      'Establishes the species and habitat, not the reliability of sightings at any particular building on any given day.',
    reuse: 'link-and-cite',
  },
  {
    id: 'archivo-historico-nobleza-manrique-lara-ingenio',
    title: 'Fondo Manrique de Lara — documentación del ingenio de Frigiliana (1672–1730)',
    publisher: 'Archivo Histórico de la Nobleza (Toledo, Hospital de Tavera) — Ministerio de Cultura',
    sourceType: 'secondary',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Noble-house archive holding inventories and rental income (1672–1729) and a 1730 "Consulta sobre la construcción del ingenio de azúcar" of Íñigo Manrique de Lara, Count of Frigiliana, with expert statements on materials and wages.',
    limitations:
      'Cited here via secondary/official summaries rather than direct archival transcription; exact folio references are not reproduced.',
    reuse: 'link-and-cite',
  },
  {
    id: 'amara-el-ingenio-deep-research-2026',
    title: 'Amara Deep Research — El Ingenio von Frigiliana: Palast, Zuckerwerk, Miel de Caña & Steinböcke',
    publisher: 'AMARA Research Vault (web synthesis)',
    sourceType: 'discovery-tool',
    accessedAt: '2026-09-11',
    language: 'de',
    scope:
      'Commissioned synthesis consolidating the palace/ingenio dating, facade description, miel-de-caña history and the ibex phenomenon, with a claim audit separating documented history from attributed superlatives.',
    limitations:
      'A synthesis of official and secondary web sources; individual claims inherit the confidence of their underlying source and must not be treated as new primary evidence.',
    reuse: 'internal-only',
  },
] as const);

export type FrigilianaIngenioSourceId = (typeof frigilianaIngenioSources)[number]['id'];
