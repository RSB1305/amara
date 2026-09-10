import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaNightlifeOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.nightlife.question.venue-operating-status',
    subject: 'nerja',
    topic: 'nightlife',
    question: 'Which named bars and clubs are actually open in the current season (e.g. Rockefeller/former "Seven", Sala People & Sound), and with what hours?',
    priority: 'high',
    reason: 'Venue-level claims rest on a 2018 travel guide and operator listings; nightlife venues open, close and rebrand frequently.',
    preferredEvidence: 'Current venue listings, operator confirmation or dated on-site observation.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'nerja.nightlife.question.noise-and-closing-rules',
    subject: 'nerja',
    topic: 'nightlife',
    question: 'What are the municipal noise and closing-time rules for Nerja night venues (maximum decibels, general closing hour)?',
    priority: 'medium',
    reason: 'No official ordinance was found; closing times are only inferred from a summer event running to 03:00.',
    preferredEvidence: 'Ayuntamiento de Nerja ordinance or municipal information.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'nerja.nightlife.question.seasonal-closures',
    subject: 'nerja',
    topic: 'nightlife',
    question: 'Which venues close entirely in winter, and what does the off-season scene actually look like?',
    priority: 'medium',
    reason: 'Seasonality is asserted generally but no reliable season calendar exists.',
    preferredEvidence: 'A seasonal calendar or a survey of local operators.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
