import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaRestaurantSourceId } from '../../../sources/locations/nerjaRestaurantSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly NerjaRestaurantSourceId[] };

const facts = [
  {
    id: 'nerja.restaurants.oliva.position-terrace-and-service-2026', subject: 'nerja', topic: 'restaurants-evenings',
    statement: 'Restaurante Oliva’s operator page places it at Plaza de España, describes a terrace facing the square and publishes daily dinner ordering from 19:00 to 22:00.',
    status: 'verified', sourceIds: ['restaurante-oliva-operator-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-10-28', volatility: 'high',
    claimBoundary: 'The hours and terrace operation are current operator claims and weather-dependent; the terrace is square-facing, not a sea-view claim.',
  },
  {
    id: 'nerja.restaurants.restaurant34.sea-terrace-and-service-2026', subject: 'nerja', topic: 'restaurants-evenings',
    statement: 'Hotel Carabeo’s operator page describes Restaurant 34 dining inside, by the pool and on a summer terrace overlooking the sea, with dinner from 19:00 to 22:30 and Monday closure.',
    status: 'verified', sourceIds: ['hotel-carabeo-restaurant34-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-10-28', volatility: 'high',
    claimBoundary: 'A sea view is not proof of sunset orientation; service times, closure day and terrace availability require a live reservation check.',
  },
  {
    id: 'nerja.restaurants.ayo.burriana-daytime-service-2026', subject: 'nerja', topic: 'restaurants-evenings',
    statement: 'Chiringuito Ayo’s operator page places it at Paseo Burriana 15 on Playa de Burriana and publishes daily opening from 09:00 to 19:00 with kitchen service from 12:00 to 18:00.',
    status: 'verified', sourceIds: ['chiringuito-ayo-operator-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-10-28', volatility: 'high',
    claimBoundary: 'This supports a current beach-lunch role and explicitly does not support a normal evening-dinner recommendation; hours and menu require a live check.',
  },
  {
    id: 'nerja.restaurants.el-pulguilla.old-town-fish-format', subject: 'nerja', topic: 'restaurants-evenings',
    statement: 'El Pulguilla’s operator site places it in Nerja’s old-town area near the Balcón de Europa and describes a terrace and a format centred on fried fish, seafood, tapas and raciones.',
    status: 'verified', sourceIds: ['el-pulguilla-operator-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'No current hours, table availability, quality ranking or AMARA first-hand recommendation is established.',
  },
  {
    id: 'nerja.restaurants.sollun.position-and-concept', subject: 'nerja', topic: 'restaurants-evenings',
    statement: 'Sollun’s operator site places the restaurant at Calle Pintada 9 and describes its offer as cocina de autor by Juan Quintanilla.',
    status: 'verified', sourceIds: ['sollun-operator-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'Conflicting operator-page closing times are not normalized; menu, service window and suitability for an occasion require a live check.',
  },
] as const satisfies readonly FactInput[];

export const nerjaRestaurantFacts = defineKnowledgeFacts(facts);
export type NerjaRestaurantFactId = (typeof nerjaRestaurantFacts)[number]['id'];
