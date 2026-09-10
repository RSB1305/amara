import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaMarketSourceId } from '../../../sources/locations/frigilianaMarketSources';

type SourceId = FrigilianaMarketSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'frigiliana.market.regulated-street-trade', subject: 'frigiliana', topic: 'market',
    statement: 'The municipality of Frigiliana formally regulates street trade (comercio ambulante) and has published authorization decisions for it.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-comercio-ambulante-2021', 'frigiliana-ayuntamiento-decreto-2021-1050'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'Proves municipally regulated street trade; it does NOT automatically prove a farmers’ market, a craft market or a purely tourist-facing market.',
  },
  {
    id: 'frigiliana.market.decree-2021-list', subject: 'frigiliana', topic: 'market',
    statement: 'An official 2021 municipal document (Decreto 2021-1050) contains the definitive decision on admitted and excluded street-trade applicants.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-decreto-2021-1050'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'Evidences the 2021 market/street-trade structure; it does not say which traders actually appear in 2026.',
  },
  {
    id: 'frigiliana.market.decree-2023-indexed', subject: 'frigiliana', topic: 'market',
    statement: 'The official municipal web presence also references a 2023 Alcaldía decree on comercio ambulante (Decreto nº 0514/2023), showing the regulation is ongoing rather than a one-off 2021 action.',
    status: 'partially-verified', sourceIds: ['frigiliana-ayuntamiento-decreto-2023-0514'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Supports continuity of regulation; the full 2023 text could not be reliably read, so no details are adopted from it.',
  },
  {
    id: 'frigiliana.market.schedule-location-unverified-2026', subject: 'frigiliana', topic: 'market',
    statement: 'As of 2026-09-10 the secured primary municipal evidence does not confirm a specific weekly market day, time or current location; the commonly repeated "Thursday morning / about 08:00–14:00 / Plaza de las Tres Culturas" details are not primary-verified.',
    status: 'unverified', sourceIds: ['frigiliana-ayuntamiento-actualidad-archive', 'frigiliana-ayuntamiento-decreto-2023-0514'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'Do not state a day, time or location as a fact. Present such details only as "typically / per current listing — verify live" until a current municipal source or direct confirmation is attached.',
  },
  {
    id: 'frigiliana.market.not-local-produce-only', subject: 'frigiliana', topic: 'market',
    statement: 'The administrative category "comercio ambulante" does not establish that the market consists predominantly of local farmers or exclusively Frigiliana producers.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-decreto-2021-1050'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Calling it a "local produce market" would be too strong without trader-category or assortment evidence.',
  },
  {
    id: 'frigiliana.market.not-craft-market', subject: 'frigiliana', topic: 'market',
    statement: 'The primary evidence likewise does not establish a purely tourist-facing craft market; municipal documents cover general street trade.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-comercio-ambulante-2021'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Temporary craft, fiesta or cultural stalls must be treated as separate events, not as evidence of the regular street market.',
  },
  {
    id: 'frigiliana.market.stall-count-unknown', subject: 'frigiliana', topic: 'market',
    statement: 'No reliable quantitative statement about the number of stalls present on a given market day is possible.',
    status: 'unverified', sourceIds: ['frigiliana-ayuntamiento-decreto-2021-1050'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'high',
    claimBoundary: 'Historical licence lists are not a reliable count of stalls actually present; do not derive "X stalls" from permits.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaMarketFacts = defineKnowledgeFacts(facts);
export type FrigilianaMarketFactId = (typeof frigilianaMarketFacts)[number]['id'];
