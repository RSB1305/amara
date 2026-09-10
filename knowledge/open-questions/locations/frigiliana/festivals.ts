import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaFestivalsOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.festivals.question.candelarias-recurrence',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'Is Candelarias (7 September) a reliably annual active Frigiliana fiesta today, or only a historic/intermittently revived tradition?',
    priority: 'high',
    reason: 'There is a traditional date, an official description of the original fire celebration as extinct, a 2019 revival and a 2022 event, but Candelarias is absent from the current core list and 2026 search found no reliable current Frigiliana confirmation (some hits referred to neighbouring Arenas).',
    preferredEvidence: 'A current Ayuntamiento page, a multi-year series of municipal programmes, or an explicit municipal statement on present-day recurrence.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.festivals.question.miel-2026-execution',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'Did the 2026 Día de la Miel edition actually take place, given the 2 May announcement versus a "CANCELADO" social post?',
    priority: 'medium',
    reason: 'No reliable official post-report resolves the contradiction in the reviewed material; this shows why a pre-announcement must not be booked as executed.',
    preferredEvidence: 'A municipal post-report or an unambiguous cancellation/postponement notice.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.festivals.question.3culturas-editorial-conflicts',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'What is the correct 2026 edition number of 3 Culturas, and where does the piromusical actually sit in the programme?',
    priority: 'medium',
    reason: 'The municipal announcement gives XIV while other current sources use XIX/XX, and the generic "piromusical opens every edition" conflicts with the 2025 closing-act report.',
    preferredEvidence: 'A cleaned official edition archive and the concrete live programme of the given edition.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.festivals.question.traffic-closures-beyond-3culturas',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'What are the actual road closures, parking bans and resident-access rules during Feria, Carnaval, Semana Santa, Cruces and San Sebastián?',
    priority: 'high',
    reason: 'For 3 Culturas there is concrete shuttle/parking info, but for the other festivals the research could only evidence processions/street events, not a reliable permanent closure rule.',
    preferredEvidence: 'The annual Policía Local / Ayuntamiento traffic order for the specific festival and year.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.festivals.question.visitor-numbers',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'What are audited attendance figures for 3 Culturas and Semana Santa, beyond the municipal "tens of thousands" / "thousands" magnitudes?',
    priority: 'low',
    reason: 'The stated figures are good for a relative "large / very crowded" decision but not for hard annual attendance facts.',
    preferredEvidence: 'Counting methodology, mobile-network data, police/traffic data, or an official post-report with a defined metric.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
