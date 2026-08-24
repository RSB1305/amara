import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaAgricultureFoodOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.agriculture.question-mango-area',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    question: 'What is the current mango area within Frigiliana municipality, by reference year?',
    priority: 'high',
    reason: 'The SIMA summary quantifies avocado and olive but does not provide a municipal mango area.',
    preferredEvidence: 'IECA/Junta municipal crop dataset or a dated official agricultural-statistics extract.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.agriculture.question-acequia-current-condition',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    question: 'Which historic acequia and alberca sections are functional, visible from public routes and safe to reference in 2026?',
    priority: 'high',
    reason: 'The BIC decree records the system’s continued use, but it is not a current section-by-section operational inventory.',
    preferredEvidence:
      'Municipal or irrigation-community map, current maintenance record, access status and first-party field inspection.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.food.question-ingenio-current-production-and-access',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    question:
      'What is El Ingenio’s current production status, cane origin, ownership/operating structure and public-access arrangement?',
    priority: 'high',
    reason: 'Historic significance does not establish a current visitor experience or the provenance of present raw materials.',
    preferredEvidence:
      'Dated operator confirmation, municipal statement, current producer documentation and on-site first-party verification.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.agriculture.question-guest-visible-producers',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    question:
      'Which local producers, markets or food businesses can document a guest-visible connection to Frigiliana-grown avocado, mango, olive or cane products?',
    priority: 'medium',
    reason: 'Place identity and crop statistics do not automatically establish traceable guest experiences or product origin.',
    preferredEvidence: 'Producer interviews, invoices/origin statements, municipal market records and dated first-party visits.',
    status: 'open',
    createdAt: '2026-08-24',
  },
] as const);
