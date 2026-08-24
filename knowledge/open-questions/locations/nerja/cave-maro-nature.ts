import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaCaveMaroNatureOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.cave.question.public-route-vs-protected-system', subject: 'nerja', topic: 'cave-maro-natural-landscape',
    question: 'What proportion and which named sectors of the protected cave system are included in the current public route?',
    priority: 'medium', reason: 'The cave system and the visitor route are not equivalent, and promotional descriptions can blur the distinction.',
    preferredEvidence: 'Current official cave plan, scientific survey map and visitor-route documentation.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.cave.question.art-dating-claims', subject: 'nerja', topic: 'cave-maro-natural-landscape',
    question: 'Which current peer-reviewed datings and attribution limits apply to the cave’s prehistoric art?',
    priority: 'high', reason: 'High-profile age and authorship claims have changed with scientific debate and must not be simplified.',
    preferredEvidence: 'Peer-reviewed dating studies, Foundation research bibliography and archaeological authority synthesis.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.nature.question.cliff-height-conflict', subject: 'nerja', topic: 'cave-maro-natural-landscape',
    question: 'Why do official Junta pages report different maximum relief or cliff-height figures for Maro-Cerro Gordo?',
    priority: 'medium', reason: 'The figures may measure different geomorphological features; choosing one without clarification would create false precision.',
    preferredEvidence: 'Protected-area management plan, GIS elevation model and technical geomorphology report defining the measurement.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.nature.question.current-access-regime', subject: 'nerja', topic: 'cave-maro-natural-landscape',
    question: 'What are the current seasonal vehicle, shuttle, water-access and trail restrictions for individual Maro-Cerro Gordo coves?',
    priority: 'high', reason: 'Operational rules are high volatility and materially affect guest planning.',
    preferredEvidence: 'Current Junta and municipal notices checked immediately before publication or guest use.',
    status: 'open', createdAt: '2026-08-24',
  },
] as const);
