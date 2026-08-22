import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaPracticalLocalRulesOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'frigiliana.rules-public-planning-set', subject: 'frigiliana', topic: 'practical-local-rules', question: 'Which current local rules materially affect a visitor planning a stay in Frigiliana?', priority: 'high', reason: 'A useful page must select durable planning rules rather than reproduce ordinances.', preferredEvidence: 'Current municipal and competent regional primary sources with exact scope.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'frigiliana.rules-host-friction', subject: 'frigiliana', topic: 'practical-local-rules', question: 'Which local rules do Casa AMARA guests actually misunderstand or ask about?', priority: 'medium', reason: 'The host layer should answer real friction without presenting anecdotes as law.', preferredEvidence: 'Dated operator notes paired with the governing official source.', status: 'open', createdAt: '2026-08-22' },
] as const);
