import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaHealthOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.health.question.consultorio-walk-in',
    subject: 'frigiliana',
    topic: 'health-emergency',
    question: 'Besides cita previa, are spontaneous/walk-in consultations possible at Consultorio Frigiliana?',
    priority: 'medium',
    reason: 'The source names appointment systems but not whether walk-ins are accepted.',
    preferredEvidence: 'An official practice information sheet or first-hand reports from Frigiliana.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.health.question.german-sanchez-status',
    subject: 'frigiliana',
    topic: 'health-emergency',
    question: 'Is Farmacia Germán Sánchez Maldonado currently open, given a directory "permanently closed" flag dated December 2022?',
    priority: 'medium',
    reason: 'A source conflict that must be resolved before the second pharmacy is relied on.',
    preferredEvidence: 'An on-site check or an official Colegio de Farmacéuticos listing.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.health.question.pharmacy-guardia-daily',
    subject: 'frigiliana',
    topic: 'health-emergency',
    question: 'What is the day-current farmacia de guardia rota covering Frigiliana out of hours?',
    priority: 'medium',
    reason: 'No day-current duty plan is known; the rota rotates weekly.',
    preferredEvidence: 'The Colegio de Farmacéuticos de Málaga duty schedule, checked on site or via the 900 info service.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.health.question.mountain-helicopter-rescue',
    subject: 'frigiliana',
    topic: 'health-emergency',
    question: 'For very remote emergencies (e.g. hikers), is helicopter rescue available and how is it deployed?',
    priority: 'low',
    reason: 'Only a ground-evacuation case is documented; helicopter capability was not researched.',
    preferredEvidence: 'Official emergency-service information on air-rescue deployment in the area.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.health.question.ehic-acceptance-costs',
    subject: 'frigiliana',
    topic: 'health-emergency',
    question: 'To what extent are EU/overseas health cards accepted immediately in Spain, and what co-payments may apply?',
    priority: 'low',
    reason: 'Not clarified in the secured evidence; this is a general-knowledge area without an official source in the run.',
    preferredEvidence: 'Official EU travel-health bodies or the Spanish health authority.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
