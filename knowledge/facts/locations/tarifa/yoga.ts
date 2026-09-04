import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaYogaSourceId } from '../../../sources/locations/tarifaYogaSources';

type YogaFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaYogaSourceId[];
};

const facts = [
  {
    id: 'tarifa.yoga.scene.breadth',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'Tarifa carries a broad yoga market for its size: town studios with weekly classes, teachers running sessions by the sea, family/children/aerial formats, and multi-day retreats in the surrounding area.',
    status: 'partially-verified',
    sourceIds: ['turismo-tarifa-wellness-directory-2026', 'mandalablue-schedule-bookings-2026', 'respira-tarifa-programme-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-03-04',
    volatility: 'medium',
    claimBoundary:
      'Describes the presence and range of formats, not a guaranteed set of currently running classes on any given week.'
  },
  {
    id: 'tarifa.yoga.official-directory.addresses',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'The official Tarifa tourism listing names yoga/wellness addresses including Mandalablue, Respira, Mama Tierra, EIKO Yoga Tarifa and Estudio Dimensión Bienestar.',
    status: 'verified',
    sourceIds: ['turismo-tarifa-wellness-directory-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-09-04',
    volatility: 'medium',
    claimBoundary:
      'A directory confirms listing, not that each address is currently open, its schedule, its prices or its teaching languages.'
  },
  {
    id: 'tarifa.yoga.mandalablue.ocean-classes',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'Mandalablue runs ocean/beach and studio yoga (including aerial), provides mats, and showed activity with a drop-in benchmark around 20 EUR in September 2026.',
    status: 'partially-verified',
    sourceIds: ['mandalablue-schedule-bookings-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-01-04',
    volatility: 'high',
    claimBoundary:
      'Single-provider, time-sensitive detail. Public copy names beach yoga as an example and must not print a fixed price or timetable; route guests to the current booking page.'
  },
  {
    id: 'tarifa.yoga.respira.family-formats',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'Respira Centro Holístico offers studio classes plus dedicated children, pregnancy and aerial formats.',
    status: 'partially-verified',
    sourceIds: ['respira-tarifa-programme-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-03-04',
    volatility: 'medium',
    claimBoundary:
      'Specialist formats (children/pregnancy) must be attributed to the qualified provider, never presented as an AMARA-delivered service.'
  },
  {
    id: 'tarifa.yoga.mar-adriatico.cluster',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'Mama Tierra, a yoga/holistic space, is listed at Calle Mar Adriático 9, the same street on which AMARA Family & Surf is publicly listed (Mar Adriático 29), supporting a small Mar Adriático wellness cluster.',
    status: 'partially-verified',
    sourceIds: ['mama-tierra-tarifa-2026', 'turismo-tarifa-wellness-directory-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-09-04',
    volatility: 'low',
    claimBoundary:
      'Supports a "same street" cluster statement. It does not verify an exact walking time, door-to-door route, or Mama Tierra’s current programme.'
  },
  {
    id: 'tarifa.yoga.amara.mats-in-apartment',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'AMARA Family & Surf has yoga mats already present in the apartment, per the operator briefing.',
    status: 'first-party-observation',
    sourceIds: ['amara-briefing-tarifa-yoga-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-09-04',
    volatility: 'low',
    claimBoundary:
      'Supports "yoga-ready / mats included". It does not support a claimed count, branded equipment set, blocks/straps, or a standardised paid yoga add-on until inventoried and defined.'
  },
  {
    id: 'tarifa.yoga.sup-yoga.unverified',
    subject: 'tarifa',
    topic: 'yoga',
    statement:
      'A bookable yoga class performed on a SUP board could not be verified in the current Tarifa market, although paddle/SUP and yoga are offered side by side by some providers.',
    status: 'unverified',
    sourceIds: ['turismo-tarifa-wellness-directory-2026'],
    checkedAt: '2026-09-04',
    reviewAfter: '2027-03-04',
    volatility: 'medium',
    claimBoundary:
      'Records an evidence gap. "SUP yoga" must not be promised as an existing AMARA or partner product until a specific bookable offer is verified.'
  }
] as const satisfies readonly YogaFactInput[];

export const tarifaYogaFacts = defineKnowledgeFacts(facts);

export type TarifaYogaFactId = (typeof tarifaYogaFacts)[number]['id'];
