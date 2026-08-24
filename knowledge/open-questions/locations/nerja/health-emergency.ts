import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaHealthEmergencyOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'nerja.health-official-care-pathways', subject: 'nerja', topic: 'health-emergency', question: 'Which official non-acute and emergency care pathways currently apply to visitors in Nerja?', priority: 'high', reason: 'Resolved for the current Daily Life and Guest Guide scope through current SAS and Junta de Andalucía sources; pharmacy and broader pre-trip planning remain separate coverage gaps.', preferredEvidence: 'SAS, 112 Andalucía and other competent official sources.', status: 'resolved', createdAt: '2026-08-22' },
  { id: 'nerja.health-host-context', subject: 'nerja', topic: 'health-emergency', question: 'Which stable planning questions do AMARA Playa guests repeatedly need answered before arrival?', priority: 'medium', reason: 'Public host guidance must reflect actual guest needs without becoming medical advice.', preferredEvidence: 'Dated operator notes separated from official care facts.', status: 'open', createdAt: '2026-08-22' },
] as const);
