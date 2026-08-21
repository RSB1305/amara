import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaParkingOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.parking.current-town-rule-set',
    subject: 'tarifa',
    topic: 'parking',
    question: 'Which town parking zones, tariffs, hours and payment methods apply after the 2026 meter and platform procurement?',
    priority: 'high',
    reason: 'The tender proves an active system change but not the completed operating model.',
    preferredEvidence: 'Current URTASA operating page, municipal ordinance and dated signage.',
    status: 'open',
    createdAt: '2026-08-21',
  },
  {
    id: 'tarifa.parking.beach-by-beach',
    subject: 'tarifa',
    topic: 'parking',
    question: 'What current access and parking conditions apply to each beach area used in AMARA guides?',
    priority: 'high',
    reason: 'Town, old-town and separate beach contexts cannot share one permanent parking rule.',
    preferredEvidence: 'Current municipal beach plan, protected-area notices and dated operator information per beach.',
    status: 'open',
    createdAt: '2026-08-21',
  },
  {
    id: 'tarifa.parking.amara-garage-pack',
    subject: 'tarifa',
    topic: 'parking',
    question: 'What are the verified assignment, entrance, dimensions and complete garage-to-door route for the AMARA Tarifa space?',
    priority: 'high',
    reason: 'The private underground space is a strong property advantage but current evidence does not define vehicle fit or route accessibility.',
    preferredEvidence: 'Dated owner confirmation, measurements, photographs and guest arrival instructions.',
    status: 'open',
    createdAt: '2026-08-21',
  },
] as const);
