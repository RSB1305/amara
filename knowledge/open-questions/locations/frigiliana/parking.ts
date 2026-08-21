import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaParkingOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.parking.question.garage-operator',
    subject: 'frigiliana',
    topic: 'parking',
    question: 'Who currently owns or operates the central car park below Plaza de las Tres Culturas?',
    priority: 'high',
    reason: 'An operator or municipal owner is the preferred primary source for operating terms.',
    preferredEvidence: 'Current municipal record, concession notice or operator page.',
    status: 'open',
    createdAt: '2026-08-20'
  },
  {
    id: 'frigiliana.parking.question.garage-live-terms',
    subject: 'frigiliana',
    topic: 'parking',
    question: 'What are the current tariff, opening hours, height limit and payment methods?',
    priority: 'high',
    reason: 'All values are operational and can change; the current pool contains only one dated tariff observation.',
    preferredEvidence: 'Dated entrance and tariff photographs plus an official operator or municipal publication.',
    status: 'open',
    createdAt: '2026-08-20'
  },
  {
    id: 'frigiliana.parking.question.access-zone',
    subject: 'frigiliana',
    topic: 'parking',
    question: 'What exact legal access restrictions, hours and exemptions apply to vehicles in the historic centre?',
    priority: 'high',
    reason: 'The public page correctly advises caution but the current evidence does not define the legal boundary.',
    preferredEvidence: 'Current municipal traffic ordinance, access-zone map and on-site regulatory signage.',
    status: 'open',
    createdAt: '2026-08-20'
  },
  {
    id: 'frigiliana.parking.question.accessibility',
    subject: 'frigiliana',
    topic: 'parking',
    question: 'Which accessible bays, lifts and step-free routes are reliably available from the central car park?',
    priority: 'high',
    reason: 'General village advice is insufficient for mobility decisions.',
    preferredEvidence: 'Operator specifications, municipal accessibility information and a documented route inspection.',
    status: 'open',
    createdAt: '2026-08-20'
  },
  {
    id: 'frigiliana.parking.question.street-options',
    subject: 'frigiliana',
    topic: 'parking',
    question: 'Which outer-village street-parking areas are currently legal, free or time-limited?',
    priority: 'medium',
    reason: 'The existing page mentions categories but intentionally does not identify verified zones.',
    preferredEvidence: 'Current municipal parking map and dated on-site signage for each named area.',
    status: 'open',
    createdAt: '2026-08-20'
  },
  {
    id: 'frigiliana.parking.question-day-overnight-rhythm',
    subject: 'frigiliana',
    topic: 'parking',
    question:
      'Can the observed difference between day-visitor and overnight-guest parking times be documented across representative weekdays, weekends and seasons?',
    priority: 'medium',
    reason:
      'The operator insight is distinctive and commercially relevant, but exact time windows should not be generalized from memory alone.',
    preferredEvidence:
      'Dated host logs or structured observations at the main parking context across high, shoulder and low season.',
    status: 'open',
    createdAt: '2026-08-21'
  }
] as const);
