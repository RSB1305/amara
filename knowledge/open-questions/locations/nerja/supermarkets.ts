import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaSupermarketsOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.supermarkets.question.which-chains-current',
    subject: 'nerja',
    topic: 'supermarkets-everyday-shopping',
    question: 'Which supermarket chains actually operate in Nerja now, resolving the conflict between the two 2026 runs (Mercadona/Supersol/Covirán vs ALDI/Carrefour/EROSKI Rapid/Iranzo)?',
    priority: 'medium',
    reason: 'The two research runs disagree; the Supersol→Carrefour rebrand and store churn make any single list unreliable.',
    preferredEvidence: 'Current operator store locators (Lidl, Carrefour, ALDI, Mercadona) and/or a dated on-site check.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'nerja.supermarkets.question.mercadona-current-address',
    subject: 'nerja',
    topic: 'supermarkets-everyday-shopping',
    question: 'Is there a current Mercadona in Nerja and at which address (C/ San Miguel is only historically/partially confirmed)?',
    priority: 'low',
    reason: 'One run gives C/ San Miguel 11; the more current run only partially confirms Mercadona.',
    preferredEvidence: 'Mercadona\'s own store finder or a dated on-site confirmation.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'nerja.supermarkets.question.sunday-opening-actual',
    subject: 'nerja',
    topic: 'supermarkets-everyday-shopping',
    question: 'Which Nerja supermarkets actually open on Sundays during the tourist-season window, beyond the legal freedom to do so?',
    priority: 'low',
    reason: 'ZGAT status permits Sunday opening in season, but actual opening is each operator\'s choice.',
    preferredEvidence: 'Current store hours per operator, checked shortly before the stay.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
