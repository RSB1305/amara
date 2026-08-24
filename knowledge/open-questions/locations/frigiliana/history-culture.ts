import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaHistoryCultureOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.history.question.jewish-resident-community',
    subject: 'frigiliana',
    topic: 'history-culture',
    question:
      'Which archival records, if any, document Jewish households, a congregation, synagogue, cemetery or other Jewish institution within Frigiliana itself?',
    priority: 'high',
    reason:
      'Maymón Leví’s property connection to the Taha cannot support a claim of a permanent local Jewish community or three-faith coexistence.',
    preferredEvidence:
      'Repartimientos, tax rolls, notarial records, property registers, inquisitorial records or archaeological reports with precise place identification.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.history.question.maymon-levi-property-location',
    subject: 'frigiliana',
    topic: 'history-culture',
    question: 'Can Maymón Leví’s property in the historic Taha of Frigiliana be located more precisely?',
    priority: 'medium',
    reason: 'The current evidence establishes a regional property link but not residence or a site visible to guests.',
    preferredEvidence: 'Critical edition of the relevant sale/property record plus historic-boundary and cadastral analysis.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.culture.question-ceramic-panels',
    subject: 'frigiliana',
    topic: 'history-culture',
    question:
      'Who commissioned and authored Frigiliana’s historical ceramic panels, when were they installed and which sources support each panel?',
    priority: 'high',
    reason: 'The panels are important public-history objects but cannot serve as unexamined proof for every historical claim they display.',
    preferredEvidence:
      'Municipal or museum inventory, commission records, dated installation documentation, full panel transcription and source list.',
    status: 'open',
    createdAt: '2026-08-24',
  },
  {
    id: 'frigiliana.culture.question-three-cultures-label-origin',
    subject: 'frigiliana',
    topic: 'history-culture',
    question: 'When did Frigiliana first adopt the “Three Cultures” label in municipal communication?',
    priority: 'medium',
    reason: 'The festival is documented from 2006, but the development of the broader place identity is not yet traced.',
    preferredEvidence: 'Dated municipal brochures, council records, early festival programmes and archived tourism websites.',
    status: 'open',
    createdAt: '2026-08-24',
  },
] as const);
