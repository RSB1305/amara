import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaGeographyOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.geography.question.municipal-highest-point',
    subject: 'nerja',
    topic: 'geography-orientation',
    question: 'Is Navachica the highest point inside the current Nerja municipal boundary?',
    priority: 'high',
    reason: 'The official regional plan confirms the elevation but not the present municipal-polygon intersection.',
    preferredEvidence: 'Current official municipal boundary intersected with IGN elevation and summit datasets.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'nerja.geography.question.coastline-length',
    subject: 'nerja',
    topic: 'geography-orientation',
    question: 'What is the authoritative length of Nerja’s coastline, under which measurement definition?',
    priority: 'medium',
    reason: 'Official tourism material in the raw research reports both 13 and 14 kilometres.',
    preferredEvidence: 'Official municipal or regional GIS geometry with measurement method, scale and boundary endpoints.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'nerja.geography.question.built-area-route-profile',
    subject: 'nerja',
    topic: 'geography-orientation',
    question: 'Which named built areas and beach approaches have verified elevation, steps and gradient profiles?',
    priority: 'high',
    reason: 'The current evidence supports broad relief context but not universal statements about every beach return or residential zone.',
    preferredEvidence: 'Official terrain data and first-party route inspections for the specific orientation points used on the page.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'nerja.geography.question.rio-chillar-live-access-owner',
    subject: 'nerja',
    topic: 'geography-orientation',
    question: 'Which current official source governs Río Chíllar access, closures, safety and environmental restrictions?',
    priority: 'high',
    reason: 'Those conditions are volatile and must not be inferred from stable geography or a dated maintenance notice.',
    preferredEvidence: 'Current municipal, environmental or emergency authority notice with publication and effective dates.',
    status: 'open',
    createdAt: '2026-08-21'
  }
] as const);
