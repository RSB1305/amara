import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaPracticalLocalRulesOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'tarifa.rules-public-planning-set', subject: 'tarifa', topic: 'practical-local-rules', question: 'Which current local rules materially affect a visitor planning a stay in Tarifa?', priority: 'high', reason: 'A useful page must select durable planning rules rather than reproduce ordinances.', preferredEvidence: 'Current municipal and competent regional primary sources with exact scope.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'tarifa.rules-host-friction', subject: 'tarifa', topic: 'practical-local-rules', question: 'Which local rules do AMARA Family & Surf guests actually misunderstand or ask about?', priority: 'medium', reason: 'The host layer should answer real friction without presenting anecdotes as law.', preferredEvidence: 'Dated operator notes paired with the governing official source.', status: 'open', createdAt: '2026-08-22' },
] as const);
