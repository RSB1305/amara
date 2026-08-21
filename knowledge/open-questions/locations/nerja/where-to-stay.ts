import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaWhereToStayOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'nerja.stay.question.area-polygons', subject: 'nerja', topic: 'where-to-stay-areas', question: 'Which mapped boundaries best support the practical accommodation models without presenting them as official neighbourhoods?', priority: 'medium', reason: 'Beaches, landmarks and urbanisations overlap and do not form one official area system.', preferredEvidence: 'Municipal GIS/PGOU layers combined with an explicitly editorial model map.', status: 'open', createdAt: '2026-08-21' },
  { id: 'nerja.stay.question.amara-playa-routes', subject: 'nerja', topic: 'where-to-stay-areas', question: 'What are the measured entrance, beach and Balcón routes, step profile and accessibility conditions for AMARA Playa?', priority: 'high', reason: 'General Torrecilla facts cannot verify property-specific distance, quietness or access claims.', preferredEvidence: 'First-party entrance survey, mapped routes, step/gradient record and dated photographs.', status: 'open', createdAt: '2026-08-21' }
] as const);
