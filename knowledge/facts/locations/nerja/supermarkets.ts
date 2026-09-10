import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaSupermarketsSourceId } from '../../../sources/locations/nerjaSupermarketsSources';

type SourceId = NerjaSupermarketsSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'nerja.supermarkets.structure', subject: 'nerja', topic: 'supermarkets-everyday-shopping',
    statement: 'Nerja\'s larger supermarkets sit mainly along the approach and edge roads, while the central/old-town area has smaller shops; the town is compact enough that central stays are within a short walk of at least one supermarket.',
    status: 'verified', sourceIds: ['amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'General shopping structure, confirmed by both 2026 research runs; it does not fix which chains occupy which site.',
  },
  {
    id: 'nerja.supermarkets.lidl-anchor', subject: 'nerja', topic: 'supermarkets-everyday-shopping',
    statement: 'Lidl operates a Nerja store at Avenida Alcalde Antonio Villasclaras Rosas 3 — the one chain/address confirmed by both 2026 research runs.',
    status: 'verified', sourceIds: ['lidl-store-locator', 'amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Address confirmed by both runs; stores and hours still change, so route to the live locator. Typically closed Sundays outside the tourist-season opening window.',
  },
  {
    id: 'nerja.supermarkets.tourist-zone-opening', subject: 'nerja', topic: 'supermarkets-everyday-shopping',
    statement: 'Nerja is a Municipio Turístico and is designated a Zona de Gran Afluencia Turística, which gives retail Sunday/holiday opening freedom during Semana Santa and from 1 June to 30 September.',
    status: 'verified', sourceIds: ['andalucia-tourist-municipality-zgat-nerja'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'The legal freedom to open does not mean a particular store opens on a given Sunday; outside the window large supermarkets are usually closed on Sundays. Verify the specific store.',
  },
  {
    id: 'nerja.supermarkets.chains-volatile', subject: 'nerja', topic: 'supermarkets-everyday-shopping',
    statement: 'Which supermarket chains currently operate in Nerja is volatile: the two 2026 research runs disagreed — the September run named Mercadona/Supersol/Covirán, the (more current) August run named ALDI, Carrefour Express/Market, EROSKI Rapid (Playa Burriana) and Supermercado Iranzo, with Mercadona only partially confirmed — partly reflecting the Supersol→Carrefour rebrand.',
    status: 'disputed', sourceIds: ['amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'Do not publish a fixed chain/address list beyond the Lidl anchor; present chains as examples to verify on a live locator. The disagreement itself is the finding.',
  },
] as const satisfies readonly FactInput[];

export const nerjaSupermarketFacts = defineKnowledgeFacts(facts);
export type NerjaSupermarketFactId = (typeof nerjaSupermarketFacts)[number]['id'];
