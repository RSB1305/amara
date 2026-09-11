import { defineKnowledgeSources } from '../../schema';

export const frigilianaCasaDelAperoSources = defineKnowledgeSources([
  {
    id: 'ayuntamiento-frigiliana-casa-del-apero-2026',
    title: 'Casa del Apero',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/casa-del-apero-frigiliana/',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Municipal entry: the 17th-century agricultural annex of the sugar estate, restored into the Casa del Apero cultural centre (library, archaeological museum, exhibition hall, archive, tourism office).',
    limitations:
      'Municipal self-presentation; opening hours, admission and current programmes are operational details, not stable facts.',
    reuse: 'link-and-cite',
  },
  {
    id: 'diputacion-malaga-museo-apero-2026',
    title: 'Museo Arqueológico de Frigiliana y Casa del Apero (Patrimonio)',
    publisher: 'Diputación de Málaga',
    sourceType: 'official',
    url: 'https://www.malaga.es/en/laprovincia/patrimonio/lis_cd-4035/museo-arqueologico-de-frigiliana-y-casa-del-apero-archaeological-museum-of-frigiliana-and-the-apero-house',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Provincial heritage record pairing the Casa del Apero with the Frigiliana archaeological museum it now houses.',
    limitations:
      'A heritage summary; it does not fix current opening hours or the museum’s exact holdings.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-info-casa-del-apero-2026',
    title: 'La Casa del Apero',
    publisher: 'El Patrimonio de Frigiliana (frigiliana.info)',
    sourceType: 'secondary',
    url: 'https://www.frigiliana.info/casa-del-apero.php?tema=3.3.2',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Architectural and historical description: early-17th-century build functionally linked to El Ingenio (granary, stables, storage for the apero), rectangular plan with interior courtyard, two storeys, rammed-earth walls with stone courses, brick arches/pillars/entrance.',
    limitations:
      'A local heritage compendium; individual readings are descriptive and finer construction phases are not fully dated.',
    reuse: 'link-and-cite',
  },
  {
    id: 'pueblos-mas-bonitos-frigiliana-apero-2026',
    title: 'Casa del Apero · Frigiliana',
    publisher: 'Los Pueblos Más Bonitos de España',
    sourceType: 'secondary',
    url: 'https://lospueblosmasbonitosdeespana.org/pueblos/frigiliana/pois/126',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Association point-of-interest entry confirming the building’s identity and current cultural-centre role.',
    limitations:
      'Promotional association listing; useful for identity, not for critical detail.',
    reuse: 'link-and-cite',
  },
  {
    id: 'amara-casa-del-apero-deep-research-2026',
    title: 'Amara Deep Research — Casa del Apero von Frigiliana: Herkunft, Funktion & heutiges Kulturzentrum',
    publisher: 'AMARA Research Vault (web synthesis)',
    sourceType: 'discovery-tool',
    accessedAt: '2026-09-11',
    language: 'de',
    scope:
      'Commissioned synthesis of the origin (17th-century ingenio annex), the fabric (patio, rammed earth, brick) and the current cultural-centre uses, with claim boundaries on volatile operational data.',
    limitations:
      'A synthesis of official and secondary web sources; individual claims inherit the confidence of their underlying source and must not be treated as new primary evidence.',
    reuse: 'internal-only',
  },
] as const);

export type FrigilianaCasaDelAperoSourceId = (typeof frigilianaCasaDelAperoSources)[number]['id'];
