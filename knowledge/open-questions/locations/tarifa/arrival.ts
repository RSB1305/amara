import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaArrivalOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.arrival.question.old-town-rule-current',
    subject: 'tarifa',
    topic: 'arrival',
    question: 'Is the 2021 old-town access-control regime still current, or has it been amended?',
    priority: 'high',
    reason: 'The rule set dates from 2021; no current confirmation (new council decision, on-site signage) is attached.',
    preferredEvidence: 'A current Ayuntamiento de Tarifa text or on-site signage.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.arrival.question.beach-bus-timetables',
    subject: 'tarifa',
    topic: 'arrival',
    question: 'What are the actual routes and frequencies of the local beach bus lines (e.g. B, P) to Los Lances, the camping zones and Bolonia?',
    priority: 'medium',
    reason: 'No official timetables for these local lines were found; frequency and first/last services are unknown.',
    preferredEvidence: 'Operator information (local EMT / Comes / ALSA) with routes and times.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.arrival.question.parking-zone-system',
    subject: 'tarifa',
    topic: 'arrival',
    question: 'How does the parking-zone system work (short-stay "Zona Azul" near the beaches, resident cards, monthly permits)?',
    priority: 'medium',
    reason: 'Details are unclear; only a non-official local source describes the parking areas.',
    preferredEvidence: 'Official municipal parking ordinance / parking-app information.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.arrival.question.guest-transfer-access',
    subject: 'tarifa',
    topic: 'arrival',
    question: 'Exactly how can a booked guest transfer reach the old-town door (the practical permit/exception path for tourist transfers)?',
    priority: 'medium',
    reason: 'The permit process is described in principle, but the concrete transfer-to-door path is not documented.',
    preferredEvidence: 'First-hand experience from hoteliers or the local police.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'tarifa.arrival.question.alternative-connections',
    subject: 'tarifa',
    topic: 'arrival',
    question: 'What are the viable alternative connections (bus/rail via Algeciras; ferry via Ceuta) as a Plan B when the Tanger ferry or a direct coach fails?',
    priority: 'low',
    reason: 'These were not examined in detail but are plausible fallbacks worth documenting.',
    preferredEvidence: 'Operator/route data for Algeciras connections and the Ceuta ferry.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
