import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaRestaurantOpenQuestions = defineKnowledgeOpenQuestions([
  { id: 'frigiliana.restaurants.question-current-operation', subject: 'frigiliana', topic: 'restaurants-evenings', question: 'Which shortlisted Frigiliana restaurants are currently operating, on which days and with which reservation constraints?', priority: 'high', reason: 'Addresses and formats are more durable than hours, closures and capacity.', preferredEvidence: 'Same-day restaurant-controlled channel or direct confirmation, retained with check date.', status: 'open', createdAt: '2026-08-28' },
  { id: 'frigiliana.restaurants.question-amara-first-hand-combinations', subject: 'frigiliana', topic: 'restaurants-evenings', question: 'Which restaurant, dish or occasion and onward evening does AMARA genuinely recommend from personal experience?', priority: 'high', reason: 'Research and reviews cannot become Robert’s first-hand recommendation.', preferredEvidence: 'Operator note with visit date, party/context, remembered dish, parking/walk, onward place and uncertainty boundary.', status: 'open', createdAt: '2026-08-28' },
] as const);
