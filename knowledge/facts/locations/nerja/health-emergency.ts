import { defineKnowledgeFacts } from '../../../schema';
import type { HealthEmergencySourceId } from '../../../sources/locations/healthEmergencySources';

type NerjaHealthEmergencyFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly HealthEmergencySourceId[];
};

const facts = [
  {
    id: 'nerja.health.centro-address-and-contact',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'Centro de Salud Nerja is at Calle Carlos Millón, s/n, 29780 Nerja, Málaga; the current official centre number is +34 951 28 96 62.',
    status: 'verified',
    sourceIds: ['sas-centro-salud-nerja-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-24',
    volatility: 'medium',
    claimBoundary: 'The address and number are current directory data, not a guarantee of access, appointment availability or language support.',
  },
  {
    id: 'nerja.health.salud-responde',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'Salud Responde is available on +34 955 54 50 60 for public-health information and appointment services and operates continuously.',
    status: 'verified',
    sourceIds: ['sas-centro-salud-nerja-2026', 'junta-andalucia-urgent-emergency-routing-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-24',
    volatility: 'medium',
    claimBoundary: 'This is an information and service-access line, not a substitute for 061 or 112 in an emergency.',
  },
  {
    id: 'nerja.health.current-published-hours',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'The official SAS directory currently publishes continuous opening from Monday to Friday for Centro de Salud Nerja.',
    status: 'verified',
    sourceIds: ['sas-centro-salud-nerja-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2026-11-24',
    volatility: 'high',
    claimBoundary: 'The schedule is volatile and does not prove that general primary care or every service is available continuously. Guests should confirm current service hours before travelling outside normal daytime hours.',
  },
  {
    id: 'nerja.health.urgent-and-emergency-routing',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'For urgent medical care without immediate danger to life in Málaga province, the official number is +34 951 03 14 37; for a life-threatening medical emergency call 061, while 112 is the general emergency number.',
    status: 'verified',
    sourceIds: ['sas-centro-salud-nerja-2026', 'junta-andalucia-urgent-emergency-routing-2026', 'junta-andalucia-emergency-061-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-24',
    volatility: 'medium',
    claimBoundary: 'This is official routing guidance, not triage or medical advice. Callers should follow the service operator’s instructions.',
  },
  {
    id: 'nerja.health.weekday-hours-conflict',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'Operator-supplied secondary sources describe regular weekday primary-care hours as 08:00–20:00, while the newer official SAS directory publishes continuous weekday opening.',
    status: 'disputed',
    sourceIds: ['sas-centro-salud-nerja-2026', 'redaccion-medica-centro-salud-nerja', 'sentinella-nerja-medical-centre', 'amara-operator-nerja-health-note-2026-08-24'],
    checkedAt: '2026-08-24',
    reviewAfter: '2026-11-24',
    volatility: 'high',
    claimBoundary: 'Do not publish 08:00–20:00 as the current definitive schedule. Public guidance should link to SAS and tell guests to confirm service hours.',
    notes: 'The conflict may reflect a distinction between general primary-care service hours and the building or urgent-care schedule; the available sources do not resolve that distinction.',
  },
  {
    id: 'nerja.health.legacy-direct-number-unverified',
    subject: 'nerja',
    topic: 'health-emergency',
    statement: 'The operator-supplied +34 952 523 131 number is not listed in the current official SAS directory for Centro de Salud Nerja.',
    status: 'unverified',
    sourceIds: ['yelp-centro-salud-nerja', 'amara-operator-nerja-health-note-2026-08-24', 'sas-centro-salud-nerja-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2026-11-24',
    volatility: 'high',
    claimBoundary: 'Do not publish this number without current primary-source confirmation.',
  },
] as const satisfies readonly NerjaHealthEmergencyFactInput[];

export const nerjaHealthEmergencyFacts = defineKnowledgeFacts(facts);

export type NerjaHealthEmergencyFactId = (typeof nerjaHealthEmergencyFacts)[number]['id'];
