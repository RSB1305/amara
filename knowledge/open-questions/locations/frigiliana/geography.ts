import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaGeographyOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.geography.question.street-elevations-and-gradients',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    question: 'What are the verified elevations and gradients for the page’s principal orientation points and routes?',
    priority: 'high',
    reason: 'One municipal reference altitude cannot support precise route-effort or accessibility statements.',
    preferredEvidence: 'IGN or municipal digital terrain model plus route-level field measurements and dated photographs.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'frigiliana.geography.question.park-boundary',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    question: 'Where does the current natural-park boundary fall relative to the built village and named approach areas?',
    priority: 'medium',
    reason: 'Municipality inclusion does not prove that a named street, viewpoint or accommodation is inside the park.',
    preferredEvidence: 'Current Junta GIS boundary intersected with official cadastral or municipal base mapping.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'frigiliana.geography.question.property-routes',
    subject: 'frigiliana',
    topic: 'geography-orientation',
    question: 'What are the exact arrival and walking-route conditions for each AMARA Frigiliana accommodation?',
    priority: 'high',
    reason: 'Historic-core morphology cannot be generalized into property-specific vehicle access or mobility advice.',
    preferredEvidence: 'First-party route inspection, entrance coordinates, step count, gradient, surface and current access signage.',
    status: 'open',
    createdAt: '2026-08-21'
  }
] as const);
