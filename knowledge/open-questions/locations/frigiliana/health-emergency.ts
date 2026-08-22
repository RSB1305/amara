import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaHealthEmergencyOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'frigiliana.health-official-care-pathways', subject: 'frigiliana', topic: 'health-emergency', question: 'Which official non-acute and emergency care pathways currently apply to visitors in Frigiliana?', priority: 'high', reason: 'Health information needs primary-source verification and a public/live/private boundary.', preferredEvidence: 'SAS, 112 Andalucía and other competent official sources.', status: 'researching', createdAt: '2026-08-22' },
  { id: 'frigiliana.health-host-context', subject: 'frigiliana', topic: 'health-emergency', question: 'Which stable planning questions do Casa AMARA guests repeatedly need answered before arrival?', priority: 'medium', reason: 'Public host guidance must reflect actual guest needs without becoming medical advice.', preferredEvidence: 'Dated operator notes separated from official care facts.', status: 'open', createdAt: '2026-08-22' },
] as const);
