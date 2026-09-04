import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaKitesurfBeginnerOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.kitesurf-beginner.question.source-deep-links',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    question: 'What are the exact current deep-link URLs for the VDWS beginner/safety pages, the ISO 21853:2020 catalogue entry and the Duotone/North learn pages?',
    priority: 'medium',
    reason: 'The public sources block currently links organisation roots; the principles are stable but the specific pages should be verified and deep-linked.',
    preferredEvidence: 'Confirmed live URLs for each cited page, plus the current ISO 21853 edition/status.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.kitesurf-beginner.question.tarifa-learning-zones',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    question: 'Which Tarifa beaches/zones and wind directions actually suit absolute beginners, and what municipal or school-zone rules apply?',
    priority: 'medium',
    reason: 'The guide is intentionally general; a Tarifa-specific "where beginners learn" layer needs local, verified input rather than assumption.',
    preferredEvidence: 'School guidance, first-party observation and the municipal beach-use/kite-zone rules for Tarifa.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.kitesurf-beginner.question.amara-gear-terms',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    question: 'What are the exact AMARA-with-club gear terms for learners (available sizes, rental/deposit, delivery to the apartment, lesson booking flow)?',
    priority: 'high',
    reason: 'The page states AMARA coordinates gear and lessons; the operational specifics must be confirmed and kept current rather than implied.',
    preferredEvidence: 'Operator/club confirmation of current rental terms and the beginner lesson booking arrangement.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.kitesurf-beginner.question.iso-status',
    subject: 'tarifa',
    topic: 'kitesurf-beginner',
    question: 'Is ISO 21853:2020 still the current published edition at the next review, or has it been revised/withdrawn?',
    priority: 'low',
    reason: 'ISO standards run periodic reviews; a safety-referencing page should not cite a superseded edition.',
    preferredEvidence: 'ISO catalogue status check at review date.',
    status: 'open',
    createdAt: '2026-09-04'
  }
] as const);
