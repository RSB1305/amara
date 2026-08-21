import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaParkingOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'nerja.parking.current-zones-tariffs-and-hours',
    subject: 'nerja',
    topic: 'parking',
    question: 'Which visitor parking zones, tariffs, hours and payment methods currently apply in central Nerja and Burriana?',
    priority: 'high',
    reason: 'Municipal project notices confirm facilities and changes but do not provide one stable 2026 visitor rule set.',
    preferredEvidence: 'Current municipal ordinance, operator tariff pages and dated on-site signage.',
    status: 'open',
    createdAt: '2026-08-21',
  },
  {
    id: 'nerja.parking.amara-playa-arrival-pack',
    subject: 'nerja',
    topic: 'parking',
    question: 'What is the verified parking, unloading and full street-to-door route for AMARA Playa?',
    priority: 'high',
    reason: 'Current copy mentions street parking but does not prove availability, the absence of a private space or the complete accessibility route.',
    preferredEvidence: 'Dated owner confirmation, photographs and a reproducible arrival walkthrough.',
    status: 'open',
    createdAt: '2026-08-21',
  },
  {
    id: 'nerja.parking-freedom-share',
    subject: 'nerja',
    topic: 'parking',
    question: 'Can the operator impression that much Nerja parking is free be supported and bounded by zone?',
    priority: 'medium',
    reason: 'The current source pool neither proves nor disproves a Nerja-wide majority-free claim.',
    preferredEvidence: 'Current official zone map plus a dated field audit of representative areas.',
    status: 'open',
    createdAt: '2026-08-21',
  },
] as const);
