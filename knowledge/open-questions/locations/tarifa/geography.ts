import { defineKnowledgeOpenQuestions } from '../../../schema';

export const tarifaGeographyOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'tarifa.geography.question.hydrographic-boundary-wording',
    subject: 'tarifa',
    topic: 'geography-orientation',
    question: 'Which authoritative hydrographic definition should govern the exact Atlantic–Strait–Mediterranean boundary wording?',
    priority: 'medium',
    reason: 'The local causeway convention is useful orientation, while marine evidence describes a dynamic exchange zone rather than a visible seam.',
    preferredEvidence: 'Current IHO or Spanish hydrographic authority boundary definition and chart.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'tarifa.geography.question.la-marina-boundary-and-property',
    subject: 'tarifa',
    topic: 'geography-orientation',
    question: 'What are the official La Marina boundary and the exact AMARA Family & Surf entrance coordinates?',
    priority: 'high',
    reason: 'A municipal place-name reference does not prove a neighbourhood polygon or the property’s route relationships.',
    preferredEvidence: 'Municipal GIS or planning map plus first-party property entrance coordinates and route inspection.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'tarifa.geography.question.africa-visibility',
    subject: 'tarifa',
    topic: 'geography-orientation',
    question: 'From which verified public points or AMARA spaces is Africa visible, and under what visibility limitations?',
    priority: 'medium',
    reason: 'A regional minimum distance cannot support an address-level view promise.',
    preferredEvidence: 'First-party geotagged observations with viewing direction, date and weather visibility, supported by terrain analysis.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'tarifa.geography.question.local-wind-exposure',
    subject: 'tarifa',
    topic: 'geography-orientation',
    question: 'What evidence supports neighbourhood- or property-level differences in Levante and Poniente exposure?',
    priority: 'high',
    reason: 'The raw reports make broad shelter and beach-usability claims that the verified sources do not establish.',
    preferredEvidence: 'AEMET station data, topographic analysis and dated first-party observations tied to exact locations.',
    status: 'open',
    createdAt: '2026-08-21'
  },
  {
    id: 'tarifa.geography.question.southernmost-city-definition',
    subject: 'tarifa',
    topic: 'geography-orientation',
    question: 'Is there an authoritative geographic source that explicitly defines Tarifa as Europe’s southernmost mainland city?',
    priority: 'low',
    reason: 'The wording is defensible from coordinates and geographic context but currently remains a derived formulation.',
    preferredEvidence: 'IGN, EuroGeographics or another authoritative gazetteer using the same city/mainland definition.',
    status: 'open',
    createdAt: '2026-08-21'
  }
] as const);
