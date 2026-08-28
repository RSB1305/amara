import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaRestaurantSourceId } from '../../../sources/locations/frigilianaRestaurantSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly FrigilianaRestaurantSourceId[] };

const facts = [
  {
    id: 'frigiliana.restaurants.the-garden.position-and-format', subject: 'frigiliana', topic: 'restaurants-evenings',
    statement: 'The Garden Restaurant is identified by its operator and the municipality on Calle del Santo Cristo in Barribarto, with a terrace and an international Mediterranean-influenced cuisine format.',
    status: 'verified', sourceIds: ['the-garden-frigiliana-operator-2026', 'frigiliana-municipality-the-garden-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'This does not guarantee a terrace table, view, dish, quiet atmosphere, opening time or AMARA endorsement.',
  },
  {
    id: 'frigiliana.restaurants.la-taperia.position-and-cuisine', subject: 'frigiliana', topic: 'restaurants-evenings',
    statement: 'La Tapería’s operator site places the restaurant at Avenida Carlos Cano 4 and describes international, Mediterranean and Arabic culinary influences.',
    status: 'verified', sourceIds: ['la-taperia-frigiliana-operator-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'The current address supersedes older discovery listings; no menu item, dietary suitability, hours or recommendation is guaranteed.',
  },
  {
    id: 'frigiliana.restaurants.el-adarve.position-terrace-and-dishes', subject: 'frigiliana', topic: 'restaurants-evenings',
    statement: 'The municipal listing places El Adarve at Calle Alta 3 in Barribarto, reports 10 of 18 tables on the terrace and names lamb with miel de caña and salmon with mango among its local/international dishes.',
    status: 'partially-verified', sourceIds: ['frigiliana-municipality-el-adarve-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'The municipal entry needs direct confirmation for current table count, menu, view and operation; no specific table or dish is promised.',
  },
  {
    id: 'frigiliana.restaurants.gloria-bendita.position-and-concept', subject: 'frigiliana', topic: 'restaurants-evenings',
    statement: 'The municipal listing places Gloria Bendita at Plaza de las Tres Culturas 14 and describes a changing Mediterranean menu with international fusion influences.',
    status: 'partially-verified', sourceIds: ['frigiliana-municipality-gloria-bendita-2026'], checkedAt: '2026-08-28', reviewAfter: '2026-11-28', volatility: 'medium',
    claimBoundary: 'The directory does not guarantee current menu, hours, annual closure pattern, quality or AMARA recommendation.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaRestaurantFacts = defineKnowledgeFacts(facts);
export type FrigilianaRestaurantFactId = (typeof frigilianaRestaurantFacts)[number]['id'];
