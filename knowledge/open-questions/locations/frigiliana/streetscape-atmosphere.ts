import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaStreetscapeAtmosphereOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.atmosphere.question-door-colour-inventory',
    subject: 'frigiliana',
    topic: 'streetscape-atmosphere',
    question: 'Which door and window colours recur along a defined Barribarto–Barribajo observation route?',
    priority: 'medium',
    reason: 'The operator’s observation is differentiating, but it is not yet route-specific or photographically documented.',
    preferredEvidence:
      'Dated first-party route log with non-identifying façade photographs, location segment, colour notes and renovation caveats.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.atmosphere.question-day-evening-rhythm',
    subject: 'frigiliana',
    topic: 'streetscape-atmosphere',
    question:
      'How do pedestrian density, business activity and soundscape change from daytime to evening across seasons and event dates?',
    priority: 'high',
    reason:
      'One first-party experience cannot support fixed clock-time or village-wide quiet claims for every guest stay.',
    preferredEvidence:
      'Repeated first-party observation at defined points and times in shoulder season, summer, weekend and festival conditions.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.atmosphere.question-quiet-accommodation-zones',
    subject: 'frigiliana',
    topic: 'streetscape-atmosphere',
    question: 'Which AMARA accommodation approaches and immediate surroundings are demonstrably quiet at night?',
    priority: 'high',
    reason: 'Village atmosphere cannot be generalized into property-specific sleep or noise advice.',
    preferredEvidence:
      'Property-level first-party sound logs, event calendar cross-check and dated notes on hospitality, bells and vehicle access.',
    status: 'open',
    createdAt: '2026-08-24',
  },
] as const);
