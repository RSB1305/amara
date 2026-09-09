import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaFamilyOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.family.question.operator-vetted-providers',
    subject: 'tarifa',
    topic: 'family',
    question:
      'Which family providers (whale watching, riding, kite school, e-bike, day-trip operators) does AMARA actually use and vouch for first-hand, so their records can move from CANDIDATE to APPROVED?',
    priority: 'high',
    reason:
      'The research names providers but they are compiled, not operator-vetted. Approval and public/guest scope require Robert’s first-hand judgement per the recommendation policy.',
    preferredEvidence: 'Operator decision per provider, with any guest arrangement noted first-hand.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.family.question.age-minimums-and-limits',
    subject: 'tarifa',
    topic: 'family',
    question:
      'What are the current per-provider minimum ages, weight limits and swimming-ability requirements for kite tasters, riding and boat trips?',
    priority: 'medium',
    reason:
      'These gate whether an activity suits a given child and vary by operator; the research gives indicative but not durable values.',
    preferredEvidence: 'Direct confirmation from each provider captured at booking, not frozen into public copy.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.family.question.whale-watching-choice',
    subject: 'tarifa',
    topic: 'family',
    question:
      'Which whale-watching operator should AMARA lead with for families (firmm vs Turmares), and how should the shared record be maintained between the family page and the dedicated whale-watching page?',
    priority: 'high',
    reason:
      'Both pages cite the same operators; a single maintained record avoids drift, but the lead choice and family framing are an operator decision and the whale-watching research input is not yet uploaded.',
    preferredEvidence: 'Operator preference plus the whale-watching deep-research input in the Drive folder.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.family.question.accessibility-specifics',
    subject: 'tarifa',
    topic: 'family',
    question:
      'What are the concrete accessibility conditions (boarding, terrain, facilities) for the boat trips, Zoo de Castellar and the Bolonia/Baelo Claudia site for guests with reduced mobility or pushchairs?',
    priority: 'medium',
    reason:
      'Accessibility is partly documented (Baelo Claudia) and partly unspecified (zoo, boarding); families need reliable detail rather than optimistic claims.',
    preferredEvidence: 'First-hand check or direct provider confirmation of boarding requirements and on-site access.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.family.question.gibraltar-border-2026',
    subject: 'tarifa',
    topic: 'family',
    question:
      'How do the July 2026 Gibraltar border arrangements affect a family day trip in practice (documents, waiting times, parking on the Spanish side in La Línea)?',
    priority: 'medium',
    reason:
      'Border rules changed in 2026 and the cable car is closed; older guidance is unreliable and this shapes whether Gibraltar is a smooth family day.',
    preferredEvidence: 'Current official Gibraltar/Spain travel advice and, ideally, a first-hand crossing note.',
    status: 'open',
    createdAt: '2026-09-09'
  }
] as const);
