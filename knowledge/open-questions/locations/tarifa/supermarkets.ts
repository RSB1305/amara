import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaSupermarketsOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.supermarkets.question.which-chains-current',
    subject: 'tarifa',
    topic: 'supermarkets-everyday-shopping',
    question: 'Which supermarket chains actually operate in Tarifa now, resolving the conflict between the two 2026 runs (Mercadona C/ La Línea + Supeco vs DIA ×2, El Jamón, Carrefour Express at the N-340 station)?',
    priority: 'medium',
    reason: 'The two research runs disagree substantially on the current chain set and addresses.',
    preferredEvidence: 'Current operator store locators (Lidl, DIA, Carrefour, Mercadona, El Jamón) and/or a dated on-site check.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.supermarkets.question.mercadona-presence',
    subject: 'tarifa',
    topic: 'supermarkets-everyday-shopping',
    question: 'Is there a current address-confirmed Mercadona in Tarifa (the September run gives C/ La Línea s/n; the more current run could not confirm it)?',
    priority: 'low',
    reason: 'The two runs disagree on whether Mercadona is currently present and where.',
    preferredEvidence: 'Mercadona\'s own store finder or a dated on-site confirmation.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.supermarkets.question.municipal-market-stalls',
    subject: 'tarifa',
    topic: 'supermarkets-everyday-shopping',
    question: 'Are the municipal market-hall stalls (Calle Colón, awarded 12 Aug 2026 for charcutería/pescadería etc.) actually operating, and what are their hours?',
    priority: 'low',
    reason: 'The award protocol does not prove the stalls are open for everyday shopping.',
    preferredEvidence: 'Ayuntamiento de Tarifa market information or a dated on-site check.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
