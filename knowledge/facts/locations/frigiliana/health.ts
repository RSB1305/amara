import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaHealthSourceId } from '../../../sources/locations/frigilianaHealthSources';

type SourceId = FrigilianaHealthSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'frigiliana.health.consultorio', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Consultorio Frigiliana is a primary-care centre (not a hospital) under the Servicio Andaluz de Salud at Calle Príncipe de Asturias s/n, 29788 Frigiliana; phone 951 03 64 15. Appointments (cita previa) are booked via ClicSalud+ online or by phone through Salud Responde (955 54 50 60).',
    status: 'verified', sourceIds: ['sas-consultorio-frigiliana'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'It is primary care, not an emergency hospital. Phone and booking channels may change; verify via SAS for a given stay.',
  },
  {
    id: 'frigiliana.health.consultorio-hours', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Per the SAS website, the consultorio hours are Monday 14:30–19:30 and Tuesday–Friday 8:30–13:30.',
    status: 'partially-verified', sourceIds: ['sas-consultorio-frigiliana'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'Hours can change at short notice; treat as high volatility and route to SAS / Salud Responde for the actual day. Do not present as a guarantee.',
  },
  {
    id: 'frigiliana.health.pharmacies', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Frigiliana has at least two pharmacies: Farmacia Ignacio Ramírez Llamas (also "Farmacia Frigiliana"/"Las Cañas"), Plaza del Ingenio 3, local 2, phone 722 641 755 / 952 534 260; and Farmacia Germán Sánchez Maldonado, Plaza Doña Amparo Guerrero 10, phone 952 534 426.',
    status: 'partially-verified', sourceIds: ['farmaprox-ramirez-llamas', 'nomas900-farmacia-frigiliana', 'farmacias365-german-sanchez'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Addresses/phones come from private directories and may be outdated; one directory flags Germán Sánchez as "permanently closed" (Dec 2022), so that pharmacy must be confirmed on site before being relied on.',
  },
  {
    id: 'frigiliana.health.pharmacy-hours', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Pharmacy hours are typically Monday–Friday 09:00–14:00 and 17:00–21:00, Saturday 10:00–14:00, per the on-site notice.',
    status: 'unverified', sourceIds: ['farmaprox-ramirez-llamas', 'nomas900-farmacia-frigiliana'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'A typical pattern only; the authoritative hours are the sign at the pharmacy. Do not publish as fixed.',
  },
  {
    id: 'frigiliana.health.guardia-pharmacy', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Outside regular hours, rotating duty pharmacies (farmacia de guardia) cover the region; the schedule is published by the Colegio de Farmacéuticos de Málaga, and in acute cases 112 can name the nearest available pharmacy.',
    status: 'partially-verified', sourceIds: ['farmacias365-german-sanchez'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'The duty roster rotates (weekly); do not store a fixed duty list. Route to the Colegio schedule or 112.',
  },
  {
    id: 'frigiliana.health.emergency-112', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'For life-threatening emergencies the number is 112; the dispatcher coordinates the medical emergency service (061), Guardia Civil and police.',
    status: 'verified', sourceIds: ['20minutos-frigiliana-rescue'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'General emergency routing; not medical advice.',
  },
  {
    id: 'frigiliana.health.rescue-access', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'Frigiliana is mountainous but driveable; in a documented hiking-accident case the Guardia Civil mountain unit (SEREIM) evacuated the casualty to a pickup point at Presa de Lízar where a Nerja ambulance waited.',
    status: 'verified', sourceIds: ['20minutos-frigiliana-rescue'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'One documented incident illustrates access; it is not a guaranteed procedure or response time, and helicopter capability was not researched.',
  },
  {
    id: 'frigiliana.health.target-hospital', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'The nearest hospital with an A&E for emergencies is the Hospital Comarcal de la Axarquía (Hospital de la Axarquía) in Torre del Mar/Vélez-Málaga, about 22 km from Frigiliana, roughly 20–25 minutes via the A-356 to Nerja and on via the N-340/A-7.',
    status: 'verified', sourceIds: ['sas-consultorio-frigiliana', 'kyero-nerja-hospital'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Drive time is approximate and traffic-dependent; the hospital assignment is the durable fact.',
  },
  {
    id: 'frigiliana.health.foreign-visitors-ehic', subject: 'frigiliana', topic: 'health-emergency',
    statement: 'EU visitors should bring the European Health Insurance Card (EHIC/GHIC), which normally covers acute treatment in the public system; private travel insurance can cover repatriation or additional claims.',
    status: 'partially-verified', sourceIds: ['kyero-nerja-hospital'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'General context, not a promised entitlement and not insurance/medical advice; coverage and any co-payments must be confirmed with official EU/Spanish health sources.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaHealthFacts = defineKnowledgeFacts(facts);
export type FrigilianaHealthFactId = (typeof frigilianaHealthFacts)[number]['id'];
