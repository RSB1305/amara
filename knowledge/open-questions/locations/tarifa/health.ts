import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaHealthOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.health.question.centro-hours-urgent-cover',
    subject: 'tarifa',
    topic: 'health-emergency',
    question: 'What are the Centro de Salud Tarifa opening hours and does it provide out-of-hours urgent cover, given the ambiguous SAS "08:00–08:00" string?',
    priority: 'medium',
    reason: 'The published hours were ambiguous and not independently confirmed; hours are volatile regardless.',
    preferredEvidence: 'SAS / Salud Responde confirmation or a dated on-site check.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.health.question.duty-pharmacy-local',
    subject: 'tarifa',
    topic: 'health-emergency',
    question: 'When does Tarifa have its own duty (guardia) pharmacy versus cover from Cádiz/nearby?',
    priority: 'medium',
    reason: 'The rota changes continuously and Tarifa is sometimes covered externally.',
    preferredEvidence: 'The Colegio Oficial de Farmacéuticos de Cádiz live finder, checked per date.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.health.question.english-speaking-care',
    subject: 'tarifa',
    topic: 'health-emergency',
    question: 'Where can a guest reliably get an English-language consultation in Tarifa (public or private)?',
    priority: 'low',
    reason: 'Public points are mainly Spanish with no interpreter guarantee; the private clinic is only operator-listed.',
    preferredEvidence: 'A verified English-speaking practice (public or a REGCESS-registered private clinic) confirmed first-hand.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.health.question.private-clinic-verification',
    subject: 'tarifa',
    topic: 'health-emergency',
    question: 'Is the private Tarifa Medical Center currently operating, with what services/hours (REGCESS registration)?',
    priority: 'low',
    reason: 'Only an operator self-listing (August run) supports it.',
    preferredEvidence: 'REGCESS registry entry or a dated first-hand confirmation.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
