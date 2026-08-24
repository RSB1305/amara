import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaCoastAtmosphereOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.coast.question.walking-link-continuity-2026', subject: 'nerja', topic: 'coast-lived-atmosphere',
    question: 'Which central beach-to-beach links are continuously walkable in 2026, and where do stairs, detours or closures interrupt them?',
    priority: 'high', reason: 'A 2022 project update cannot establish current route continuity or accessibility.',
    preferredEvidence: 'Current municipal works notice plus route walk with dated geotagged photographs.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.atmosphere.question.amara-playa-route-measurements', subject: 'nerja', topic: 'coast-lived-atmosphere',
    question: 'What are the measured walking times, gradients, steps and accessible alternatives from AMARA Playa to key guest destinations?',
    priority: 'high', reason: 'The Torrecilla micro-location is operator-confirmed, but exact effort claims remain unverified.',
    preferredEvidence: 'Repeated route walks, elevation trace, step count, accessible-route check and seasonal obstruction notes.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.atmosphere.question.seasonal-rhythm', subject: 'nerja', topic: 'coast-lived-atmosphere',
    question: 'How do morning, evening and night atmosphere differ across Torrecilla, the Balcón centre and Burriana by season?',
    priority: 'medium', reason: 'A useful overnight narrative requires time-of-day and seasonal evidence rather than generic resort language.',
    preferredEvidence: 'Structured operator observation across four seasons, municipal event calendar and representative guest feedback.',
    status: 'open', createdAt: '2026-08-24',
  },
  {
    id: 'nerja.atmosphere.question.guest-perception-sample', subject: 'nerja', topic: 'coast-lived-atmosphere',
    question: 'Is the repeat-guest perception that Nerja feels too busy shared by a broader and seasonally balanced guest sample?',
    priority: 'medium', reason: 'The current anecdote is meaningful for product thinking but cannot support a universal public claim.',
    preferredEvidence: 'Coded guest-review sample, post-stay survey and seasonally segmented qualitative interviews.',
    status: 'open', createdAt: '2026-08-24',
  },
] as const);
