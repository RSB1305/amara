import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaSupermarketsSourceId } from '../../../sources/locations/tarifaSupermarketsSources';

type SourceId = TarifaSupermarketsSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'tarifa.supermarkets.structure', subject: 'tarifa', topic: 'supermarkets-everyday-shopping',
    statement: 'Tarifa\'s larger supermarkets sit along the approach roads and outer axes (towards Los Lances and the port), while the old-town centre has only small shops.',
    status: 'verified', sourceIds: ['amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'General shopping structure, confirmed by both 2026 research runs; it does not fix which chains occupy which site.',
  },
  {
    id: 'tarifa.supermarkets.lidl-anchor', subject: 'tarifa', topic: 'supermarkets-everyday-shopping',
    statement: 'Lidl operates a Tarifa store at Calle Coronel Francisco Valdés 27 — the one chain/address confirmed by both 2026 research runs.',
    status: 'verified', sourceIds: ['lidl-store-locator', 'amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Address confirmed by both runs; stores and hours still change, so route to the live locator.',
  },
  {
    id: 'tarifa.supermarkets.tourist-municipality-opening', subject: 'tarifa', topic: 'supermarkets-everyday-shopping',
    statement: 'Tarifa is a Municipio Turístico de Andalucía, giving retail opening freedom during Semana Santa and from 1 June to 30 September.',
    status: 'verified', sourceIds: ['andalucia-tourist-municipality-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'Tarifa is not additionally a ZGAT like Nerja; the legal freedom does not mean a particular store opens on a given Sunday — verify the specific store.',
  },
  {
    id: 'tarifa.supermarkets.chains-volatile', subject: 'tarifa', topic: 'supermarkets-everyday-shopping',
    statement: 'Which supermarket chains currently operate in Tarifa is volatile: the two 2026 research runs disagreed — the September run named Mercadona (C/ La Línea) and Supeco (C/ San José 67), while the (more current) August run found DIA (two branches), Supermercados El Jamón and a Carrefour Express at the N-340 service station, and could not address-confirm Mercadona.',
    status: 'disputed', sourceIds: ['amara-supermarkets-research-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'Do not publish a fixed chain/address list beyond the Lidl anchor; present chains as examples to verify on a live locator. The disagreement itself is the finding.',
  },
] as const satisfies readonly FactInput[];

export const tarifaSupermarketFacts = defineKnowledgeFacts(facts);
export type TarifaSupermarketFactId = (typeof tarifaSupermarketFacts)[number]['id'];
