import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaIdentityHistoryOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.history.question.balcon-name-primary-record', subject: 'nerja', topic: 'identity-history',
    question: 'Which dated primary records establish the earliest documented use of the name Balcón de Europa?',
    priority: 'high', reason: 'Municipal tradition attributes the name to Alfonso XII in 1885, while a local historian cites earlier usage.',
    preferredEvidence: 'Direct inspection of the cited 1830s record, municipal minutes, cadastral plans, newspapers and dated correspondence.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.history.question.sugar-hydraulic-visible-assets', subject: 'nerja', topic: 'identity-history',
    question: 'Which sugar and hydraulic heritage assets remain visible, publicly accessible and interpretable to a guest today?',
    priority: 'high', reason: 'The system is well documented historically, but guest-facing condition and access vary by site.',
    preferredEvidence: 'Municipal inventory, site inspections, access status, conservation records and georeferenced photographs.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.history.question.fishing-memory', subject: 'nerja', topic: 'identity-history',
    question: 'Which oral histories, place names, practices or collections preserve Nerja’s fishing heritage despite limited material remains?',
    priority: 'medium', reason: 'The archaeological record notes loss of physical vestiges, leaving a gap between material and lived cultural history.',
    preferredEvidence: 'Local archive, ethnographic interviews, museum holdings, historic photographs and fishing-association records.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.identity.question.verano-azul-tourism-effect', subject: 'nerja', topic: 'identity-history',
    question: 'What evidence quantifies or carefully documents the long-term tourism and identity effect of Verano Azul on Nerja?',
    priority: 'medium', reason: 'The production facts are strong, but the magnitude of cultural and economic impact is usually asserted rather than measured.',
    preferredEvidence: 'Tourism statistics, municipal records, broadcaster audience data, visitor surveys and peer-reviewed cultural studies.',
    status: 'open', createdAt: '2026-08-24',
  },
] as const);
