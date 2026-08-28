import { defineKnowledgeOpenQuestions } from '../../../schema';

export const nerjaRestaurantOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'nerja.restaurants.question-current-operation', subject: 'nerja', topic: 'restaurants-evenings', question: 'Which shortlisted Nerja restaurants are currently operating, on which days and with which reservation or terrace constraints?', priority: 'high', reason: 'Several operator pages publish volatile or internally conflicting service windows.', preferredEvidence: 'Same-day restaurant-controlled channel or direct confirmation, retained with check date.', status: 'open', createdAt: '2026-08-28' },
  { id: 'nerja.restaurants.question-beach-evening-return', subject: 'nerja', topic: 'restaurants-evenings', question: 'Which beach-to-meal and meal-to-evening combinations are spatially real and have a safe return to AMARA Playa or Casa AMARA?', priority: 'high', reason: 'Sea view, beach adjacency and proximity do not prove sunset fit, walking ease or return safety.', preferredEvidence: 'Dated operator route plus direct business evidence and explicit alcohol/driver boundary.', status: 'open', createdAt: '2026-08-28' },
] as const);
