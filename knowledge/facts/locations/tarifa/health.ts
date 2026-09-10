import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaHealthSourceId } from '../../../sources/locations/tarifaHealthSources';

type SourceId = TarifaHealthSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'tarifa.health.centro-de-salud', subject: 'tarifa', topic: 'health-emergency',
    statement: 'Tarifa has an SAS primary-care Centro de Salud (Zona Básica Tarifa) at Calle Amador de los Ríos s/n, phone 956 027 700, within the Área de Gestión Sanitaria Campo de Gibraltar Oeste.',
    status: 'verified', sourceIds: ['sas-centro-salud-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Address/phone confirmed; hours are not stated (the SAS hours string was ambiguous) — route to SAS / Salud Responde. Confirmed by both 2026 runs.',
  },
  {
    id: 'tarifa.health.outlying-consultorios', subject: 'tarifa', topic: 'health-emergency',
    statement: 'The Zona Básica Tarifa also includes outlying consultorios at Facinas, Tahivilla and Bolonia, covering the wider municipality.',
    status: 'verified', sourceIds: ['sas-centro-salud-tarifa', 'ags-campo-gibraltar-oeste'], checkedAt: '2026-09-10', reviewAfter: '2028-03-10', volatility: 'low',
    claimBoundary: 'Confirmed by both runs; these are primary-care points, not emergency hospitals.',
  },
  {
    id: 'tarifa.health.hospital-punta-europa', subject: 'tarifa', topic: 'health-emergency',
    statement: 'The reference hospital for Tarifa is the Hospital Universitario Punta de Europa in Algeciras, roughly 23 km / about 30 minutes away via the A-7.',
    status: 'verified', sourceIds: ['ags-campo-gibraltar-oeste'], checkedAt: '2026-09-10', reviewAfter: '2028-03-10', volatility: 'low',
    claimBoundary: 'The hospital assignment is confirmed by both runs; the drive distance/time are approximate (one run marked them as inference).',
  },
  {
    id: 'tarifa.health.emergency-112', subject: 'tarifa', topic: 'health-emergency',
    statement: 'For any emergency the number is 112; for non-acute health questions, Salud Responde is available on 902 505 060 / 955 545 060.',
    status: 'verified', sourceIds: ['sas-centro-salud-tarifa', 'amara-health-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'General routing; not medical advice.',
  },
  {
    id: 'tarifa.health.pharmacy-guardia', subject: 'tarifa', topic: 'health-emergency',
    statement: 'Tarifa pharmacies take part in a rotating duty (guardia) published by the Colegio Oficial de Farmacéuticos de Cádiz; at times there is no Tarifa-based duty pharmacy and cover comes from Cádiz or nearby, so the live duty finder must be checked.',
    status: 'verified', sourceIds: ['colegio-farmaceuticos-cadiz-guardia'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Do not store a duty list; the rota changes continuously — route to the Colegio de Cádiz live finder or 112.',
  },
  {
    id: 'tarifa.health.ehic', subject: 'tarifa', topic: 'health-emergency',
    statement: 'EU visitors with the EHIC/GHIC receive necessary public treatment free at point of use, with the usual prescription co-payment.',
    status: 'verified', sourceIds: ['amara-health-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'General context, not insurance or medical advice; confirm entitlement with official EU/Spanish health sources. Private clinics are not covered.',
  },
  {
    id: 'tarifa.health.private-clinic', subject: 'tarifa', topic: 'health-emergency',
    statement: 'A private Tarifa Medical Center lists services including general medicine, traumatology and physiotherapy, outside the public system.',
    status: 'partially-verified', sourceIds: ['tarifa-medical-center-listing'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Operator self-listing (only in the August run); does not guarantee current hours, same-day appointments, languages or capacity, and is not public-system care.',
  },
  {
    id: 'tarifa.health.language', subject: 'tarifa', topic: 'health-emergency',
    statement: 'Public health points in Tarifa operate mainly in Spanish; English-speaking staff or interpreter services are not guaranteed.',
    status: 'partially-verified', sourceIds: ['amara-health-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'There is no official interpreter guarantee; a private clinic may be the practical route for an English consultation.',
  },
] as const satisfies readonly FactInput[];

export const tarifaHealthFacts = defineKnowledgeFacts(facts);
export type TarifaHealthFactId = (typeof tarifaHealthFacts)[number]['id'];
