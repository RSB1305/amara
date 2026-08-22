import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaSupermarketsOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'tarifa.shopping-current-everyday-network', subject: 'tarifa', topic: 'supermarkets-everyday-shopping', question: 'Which current shops and areas form a durable everyday grocery network for the relevant Tarifa neighbourhoods?', priority: 'high', reason: 'Existing public copy does not establish a source-verified shopping model.', preferredEvidence: 'Official operator listings, municipal sources and a dated field check.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'tarifa.shopping-host-route', subject: 'tarifa', topic: 'supermarkets-everyday-shopping', question: 'What shopping route do we genuinely recommend from AMARA Family & Surf with and without a car?', priority: 'high', reason: 'Host guidance requires first-party evidence and must not be inferred from a map.', preferredEvidence: 'Dated host walkthrough with transport mode and practical trade-offs.', status: 'open', createdAt: '2026-08-22' },
] as const);
