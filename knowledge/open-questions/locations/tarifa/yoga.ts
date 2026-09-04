import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaYogaOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.yoga.question.current-schedules',
    subject: 'tarifa',
    topic: 'yoga',
    question: 'What are the current per-studio 2026/2027 schedules, prices and cancellation terms for the main Tarifa yoga providers?',
    priority: 'medium',
    reason: 'Class times and prices are volatile and often published short-term via Instagram/WhatsApp, so they must not be frozen into public copy.',
    preferredEvidence: 'Provider booking pages or direct confirmation captured at arrival; routed to a live source rather than a fixed timetable.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.yoga.question.amara-private-product',
    subject: 'tarifa',
    topic: 'yoga',
    question: 'Should AMARA offer a private-session product, and under what teacher qualification, insurance, pricing and cancellation terms?',
    priority: 'high',
    reason: 'The research proposes an "AMARA Private Flow" concept; it requires operator approval, a vetted teacher and documented liability cover before it can be promised.',
    preferredEvidence: 'Operator decision plus signed partner/teacher terms, professional liability proof and a written cancellation policy.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.yoga.question.beach-class-permission',
    subject: 'tarifa',
    topic: 'yoga',
    question: 'Does a commercial beach yoga session at Tarifa require municipal permission, and for which locations and group sizes?',
    priority: 'medium',
    reason: 'Tarifa has a municipal beach-use ordinance; commercial outdoor sessions may need authorisation before a fixed AMARA beach programme.',
    preferredEvidence: 'Written confirmation from the Ayuntamiento de Tarifa on beach-use and commercial activity requirements.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.yoga.question.mama-tierra-offering',
    subject: 'tarifa',
    topic: 'yoga',
    question: 'What is Mama Tierra’s current weekly programme, teaching languages and AMARA-guest arrangement, given its position in the same street?',
    priority: 'medium',
    reason: 'Mama Tierra is the nearest listed yoga address but its durable 2026 schedule and price were not publicly extractable.',
    preferredEvidence: 'Direct contact with Mama Tierra and a first-party note of the arrangement offered to AMARA guests.',
    status: 'open',
    createdAt: '2026-09-04'
  },
  {
    id: 'tarifa.yoga.question.sup-yoga-feasibility',
    subject: 'tarifa',
    topic: 'yoga',
    question: 'Is a genuine on-the-board SUP yoga product feasible in Tarifa with a partner, given water conditions, insurance and permits?',
    priority: 'low',
    reason: 'SUP yoga is a possible future product gap but is currently unverified as a bookable offer.',
    preferredEvidence: 'A named partner offer with insurance and permit confirmation, plus a first-party trial.',
    status: 'open',
    createdAt: '2026-09-04'
  }
] as const);
