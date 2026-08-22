import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaSupermarketsOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'frigiliana.shopping-current-everyday-network', subject: 'frigiliana', topic: 'supermarkets-everyday-shopping', question: 'Which current shops and areas form a durable everyday grocery network for visitors?', priority: 'high', reason: 'Existing public copy is not a source-verified, dated shopping model.', preferredEvidence: 'Official operator listings, municipal sources and a dated field check.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'frigiliana.shopping-host-route', subject: 'frigiliana', topic: 'supermarkets-everyday-shopping', question: 'What shopping route do we genuinely recommend from Casa AMARA with and without a car?', priority: 'high', reason: 'Host guidance requires first-party evidence and must not be inferred from a map.', preferredEvidence: 'Dated host walkthrough with transport mode, terrain and practical trade-offs.', status: 'open', createdAt: '2026-08-22' },
] as const);
