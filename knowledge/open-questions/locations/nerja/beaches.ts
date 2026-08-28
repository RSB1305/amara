import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaBeachesOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.beaches.question.carabeillo-entity-access-and-services',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    question:
      'What is the current official entity boundary and access/service reality for Playa Carabeillo, distinct from Carabeo?',
    priority: 'high',
    reason:
      'The raw report reveals naming ambiguity and weaker primary-source coverage than for the other canonical beaches.',
    preferredEvidence: 'Current municipal beach record plus dated field check of the named access point.',
    status: 'open',
    createdAt: '2026-08-28',
  },
  {
    id: 'nerja.beaches.question.food-and-evening-continuations',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    question:
      'Which beach-adjacent food and evening continuations are spatially realistic, currently operating and suitable for a reciprocal AMARA recommendation?',
    priority: 'high',
    reason:
      'A natural beach-to-food or beach-to-sundowner connection needs target-page evidence, not merely a nearby business pin.',
    preferredEvidence:
      'Direct business sources, current municipal context and dated host route observations including the alcohol/driver boundary.',
    status: 'open',
    createdAt: '2026-08-28',
  },
  {
    id: 'nerja.beaches.question-amara-return-routes',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    question:
      'What are the verified return choices from each canonical beach to Casa AMARA and AMARA Playa by the relevant transport modes?',
    priority: 'high',
    reason:
      'The useful guest consequence depends on property-specific route, terrain, parking and evening evidence that external research cannot supply.',
    preferredEvidence:
      'Dated operator journeys with route endpoints, transport mode, terrain, parking reality and safe evening alternatives.',
    status: 'open',
    createdAt: '2026-08-28',
  },
  {
    id: 'nerja.beaches.question-weather-choice-model',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    question:
      'Which live weather and sea-state signals can safely support choosing among the canonical beaches without implying guaranteed bathing conditions?',
    priority: 'high',
    reason:
      'Weather-to-beach guidance must use live authoritative inputs and retain flags, exposure and local restrictions as decision boundaries.',
    preferredEvidence:
      'AEMET, Puertos del Estado, municipal beach flags and protected-area notices, checked against local field knowledge.',
    status: 'open',
    createdAt: '2026-08-28',
  },
] as const);
