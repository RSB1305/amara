import { defineKnowledgeSources } from '../../schema';

export const frigilianaSanAntonioSources = defineKnowledgeSources([
  {
    id: 'boja-frigiliana-historic-ensemble-2015-san-antonio',
    title: 'Conjunto Histórico de Frigiliana (BIC) — inventario y descripción',
    publisher: 'Junta de Andalucía (BOJA)',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Protected-ensemble record that classifies the Church of San Antonio de Padua as a restrained Baroque building completed in the last third of the seventeenth century under Bernardo de Godoy.',
    limitations:
      'A heritage classification and inventory; it fixes period and authorship, not interior access, service times or feria roles.',
    reuse: 'link-and-cite',
  },
  {
    id: 'diputacion-malaga-san-antonio-2026',
    title: 'Iglesia de San Antonio de Padua (Patrimonio)',
    publisher: 'Diputación de Málaga',
    sourceType: 'official',
    url: 'https://www.malaga.es/en/laprovincia/patrimonio/lis_cd-4034/iglesia-de-san-antonio-de-padua',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Provincial heritage record: parish church built 1676 on the site of a former hermitage, Latin-cross plan with three naves, Mudéjar timber roof (armadura), semi-circular arches, promoted under Bishop Fray Alonso de Santo Tomás whose coat of arms appears on the entrance façade.',
    limitations:
      'A heritage summary; later alterations and current worship or opening details are not pinned.',
    reuse: 'link-and-cite',
  },
  {
    id: 'pueblos-mas-bonitos-frigiliana-san-antonio-2026',
    title: 'Iglesia de San Antonio de Padua · Frigiliana',
    publisher: 'Los Pueblos Más Bonitos de España',
    sourceType: 'secondary',
    url: 'https://lospueblosmasbonitosdeespana.org/pueblos/frigiliana/pois/125',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Association point-of-interest entry confirming the church’s identity, 1676 build and position beside Calle Real in the lower old town.',
    limitations:
      'Promotional association listing; useful for identity, not for critical architectural detail.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-info-san-antonio-2026',
    title: 'Iglesia de San Antonio de Padua',
    publisher: 'El Patrimonio de Frigiliana (frigiliana.info)',
    sourceType: 'secondary',
    url: 'https://www.frigiliana.info/iglesia-san-antonio.php',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Local heritage description recording the signed roof beam — “Bernardo de Godoy Maestro Maior me fesi desde cimientos año de 1676 años” — and the master builder’s role under the bishopric of Málaga.',
    limitations:
      'A local compendium; the inscription reading is reported second-hand and finer construction phases are not fully dated.',
    reuse: 'link-and-cite',
  },
  {
    id: 'amara-san-antonio-deep-research-2026',
    title: 'Amara Deep Research — Iglesia de San Antonio de Padua von Frigiliana: Bau, Baumeister & Stil',
    publisher: 'AMARA Research Vault (web synthesis)',
    sourceType: 'discovery-tool',
    accessedAt: '2026-09-11',
    language: 'de',
    scope:
      'Commissioned synthesis of the 1676 build on a former hermitage, the master builder Bernardo de Godoy and the promoting bishop, the Latin-cross plan with Mudéjar armadura, and the official Baroque classification, with claim boundaries on volatile worship and access data.',
    limitations:
      'A synthesis of official and secondary web sources; individual claims inherit the confidence of their underlying source and must not be treated as new primary evidence.',
    reuse: 'internal-only',
  },
] as const);

export type FrigilianaSanAntonioSourceId = (typeof frigilianaSanAntonioSources)[number]['id'];
