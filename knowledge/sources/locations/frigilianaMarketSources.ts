import { defineKnowledgeSources } from '../../schema';

export const frigilianaMarketSources = defineKnowledgeSources([
  {
    id: 'frigiliana-ayuntamiento-comercio-ambulante-2021',
    title: 'Aprobación admitidos y excluidos definitivos comercio ambulante 2021',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/aprobacion-admitidos-y-excluidos-definitivos-comercio-ambulante-2021/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Primary municipal notice evidencing that street trade (comercio ambulante) is formally regulated and licensed.',
    limitations:
      'Strong for the existence of regulated street trade, but historical: it cannot guarantee current market days, times or individual traders. A later retrieval hit a cache/access error.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-decreto-2021-1050',
    title: 'Decreto 2021-1050 — aprobación listados definitivos comercio ambulante',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/wp-content/uploads/2021/12/DECRETO-2021-1050-aprobacion-listados-definitivos-comercio-ambulante.pdf',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official 2021 administrative decree with the definitive admitted/excluded street-trade applicant list.',
    limitations: 'Very strong for 2021 street-trade administration; no live operating guarantee for 2026. The PDF was not re-available from cache at the final retrieval.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-decreto-2023-0514',
    title: 'Comercio Ambulante en el municipio de Frigiliana — Decreto de Alcaldía nº 0514/2023 (indexed reference)',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Indexed municipal reference showing a 2023 Alcaldía decree on street trade, i.e. regulation beyond the one-off 2021 action.',
    limitations: 'Corroboration only; the full underlying 2023 text could not be reliably read at the final retrieval.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-actualidad-archive',
    title: 'Actualidad — municipal news archive',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/actualidad/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official municipal news archive that would carry any current market notice.',
    limitations: 'At the final retrieval the site returned a verification/loader page, which limited verification of short-term market information.',
    reuse: 'link-and-cite'
  }
] as const);

export type FrigilianaMarketSourceId = (typeof frigilianaMarketSources)[number]['id'];
