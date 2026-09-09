import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaWhaleWatchingOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.whale-watching.question.amara-lead-operator',
    subject: 'tarifa',
    topic: 'whale-watching',
    question:
      'Which whale-watching operator(s) should AMARA lead with and vouch for first-hand, so their records can move from CANDIDATE to APPROVED and public/guest scope can be set?',
    priority: 'high',
    reason:
      'The research is compiled, not operator-vetted, and no "best sightings operator" is derivable. firmm reads as the most transparent for German-speaking families, but the lead choice and framing are Robert’s.',
    preferredEvidence: 'Operator decision per provider, ideally after a first-hand trip, with any guest arrangement noted.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.whale-watching.question.aroc-licence-check',
    subject: 'tarifa',
    topic: 'whale-watching',
    question:
      'Which of the five listed operators currently hold a verified MITECO AROC authorisation (Puerto Base: Tarifa)?',
    priority: 'high',
    reason:
      'AROC authorisation is legally required and the destination listing is not proof of it; the individual records could not be extracted in the research.',
    preferredEvidence: 'MITECO AROC search results or an authorisation number per operator, captured before any approval.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.whale-watching.question.stale-provider-details',
    subject: 'tarifa',
    topic: 'whale-watching',
    question:
      'Are the flagged provider details still current for 2026: Aventura’s 80 EUR orca page (which still carries 2025 text), TOP Tarifa’s domain/phone mismatch with the city listing, and Marina Blue’s passenger capacity and 75–145 EUR age bands?',
    priority: 'medium',
    reason:
      'These specifics were inconsistent or not extractable and would otherwise risk publishing stale figures.',
    preferredEvidence: 'Direct confirmation from each operator before any record is approved or a figure is published.',
    status: 'open',
    createdAt: '2026-09-09'
  },
  {
    id: 'tarifa.whale-watching.question.shared-record-maintenance',
    subject: 'tarifa',
    topic: 'whale-watching',
    question:
      'How should the shared firmm/Turmares records be framed and maintained across the whale-watching page and the family page so the two surfaces stay consistent without drifting?',
    priority: 'medium',
    reason:
      'Both pages cite the same operators; a single maintained record avoids drift but the family framing (child tiers, calm-sea advice) differs from the general page.',
    preferredEvidence: 'An operator decision on lead framing plus a note on which fields each surface projects.',
    status: 'open',
    createdAt: '2026-09-09'
  }
] as const);
