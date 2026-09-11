import { defineKnowledgeSources } from '../../schema';

export const frigilianaOldTownMonumentsSources = defineKnowledgeSources([
  {
    id: 'amara-old-town-monuments-operator-brief-2026',
    title: 'AMARA operator brief — Frigiliana old-town monuments (Fuente Vieja, Castillo de Lizar, Reales Pósitos, Ermita de Ecce Homo, Callejón del Peñón)',
    publisher: 'AMARA (operator: Robert Sebastian Böhmer)',
    sourceType: 'operator-provided',
    accessedAt: '2026-09-11',
    language: 'de',
    scope:
      'Operator-supplied brief with the datings and attributions for five further old-town sights: Fuente Vieja (1640, Don Íñigo Manrique de Lara, fifth Lord of Frigiliana); Castillo de Lizar (Moorish fortress, 9th–11th c.); Los Reales Pósitos (public grain store, 1767); Ermita de Ecce Homo / Santo Cristo de la Caña (18th-century chapel, Good Friday procession); Callejón del Peñón and the miradores (view to El Fuerte, the 1569 battle site).',
    limitations:
      'A first-party operator brief, not an independent scholarly source; specific dates and attributions are carried as operator-provided until cross-checked against the municipal or BOJA record.',
    reuse: 'internal-only',
  },
  {
    id: 'boja-frigiliana-historic-ensemble-2015-old-town-monuments',
    title: 'Conjunto Histórico de Frigiliana (BIC) — inventario y descripción',
    publisher: 'Junta de Andalucía (BOJA)',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja',
    accessedAt: '2026-09-11',
    language: 'es',
    scope:
      'Protected-ensemble record for Frigiliana’s historic centre, the stable baseline for the medieval morphology, the defensive height of the Castillo de Lizar and its post-1569 destruction.',
    limitations:
      'A heritage classification; it does not pin the exact fabric dates of every minor monument or current access and worship details.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaOldTownMonumentsSourceId = (typeof frigilianaOldTownMonumentsSources)[number]['id'];
