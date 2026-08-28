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
  {
    id: 'nerja.evenings.cochrans.amara-sunset-visit-2025', subject: 'cochrans-terrace', topic: 'restaurants-evenings',
    statement: 'The AMARA operator visited Cochran’s Terrace in summer 2025, personally watched the sunset there and drank a Cuba Libre and a Mai Tai.',
    status: 'first-party-observation', sourceIds: ['cochrans-amara-operator-visit-2025'], checkedAt: '2026-08-28', volatility: 'low',
    claimBoundary: 'This supports a truthful AMARA host recommendation based on one summer visit. It does not guarantee sunset visibility from every seat or confirm that either drink remains on the current menu.',
  },
  {
    id: 'nerja.evenings.cochrans.amara-playa-walk-2025', subject: 'cochrans-terrace', topic: 'restaurants-evenings',
    statement: 'For that visit, the AMARA operator left the car by the accommodation on Calle Castilla Pérez and walked from the AMARA Playa area into central Nerja, recalling the distance as approximately 450 metres.',
    status: 'first-party-observation', sourceIds: ['cochrans-amara-operator-visit-2025'], checkedAt: '2026-08-28', volatility: 'medium',
    claimBoundary: 'The distance is an operator recollection, not a surveyed route. It is not an accessibility assessment, a parking guarantee or a claim that every guest will find the walk equally easy.',
  },
  {
    id: 'nerja.evenings.cochrans.municipal-activity-record-2026', subject: 'cochrans-terrace', topic: 'restaurants-evenings',
    statement: 'Nerja’s municipal transparency portal published a favourable environmental classification on 29 January 2026 for a hospitality-with-music activity named Cochrans at Bajada Salón.',
    status: 'verified', sourceIds: ['nerja-municipality-cochrans-activity-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'high',
    claimBoundary: 'The municipal record does not establish same-day opening, service hours, menu, public terrace access or sunset conditions; guests must check current operation before setting out.',
  },
] as const satisfies readonly FactInput[];

export const nerjaRestaurantFacts = defineKnowledgeFacts(facts);
export type NerjaRestaurantFactId = (typeof nerjaRestaurantFacts)[number]['id'];
