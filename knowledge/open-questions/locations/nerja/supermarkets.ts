import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaSupermarketsOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'nerja.shopping-current-everyday-network', subject: 'nerja', topic: 'supermarkets-everyday-shopping', question: 'Which current shops and areas form a durable everyday grocery network for central Nerja and Torrecilla?', priority: 'high', reason: 'Existing public copy mixes shopping and the weekly market without a verified ownership boundary.', preferredEvidence: 'Official operator listings, municipal sources and a dated field check.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'nerja.shopping-host-route', subject: 'nerja', topic: 'supermarkets-everyday-shopping', question: 'What shopping route do we genuinely recommend from AMARA Playa with and without a car?', priority: 'high', reason: 'Host guidance requires first-party evidence and must not be inferred from a map.', preferredEvidence: 'Dated host walkthrough with transport mode and practical trade-offs.', status: 'open', createdAt: '2026-08-22' },
] as const);
