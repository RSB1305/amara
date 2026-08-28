import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaClimateSourceId } from '../../../sources/locations/frigilianaClimateSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly FrigilianaClimateSourceId[] };

const facts = [
  {
    id: 'frigiliana.climate.regional-proxy.malaga-airport-method', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'AEMET publishes 1981–2010 climate normals for Málaga Airport station 6155A at 7 metres elevation; this is an official regional coastal reference, not a Frigiliana observation series.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'The station location, elevation and reference period must accompany reuse; values must never be relabelled as measured in Frigiliana.',
  },
  {
    id: 'frigiliana.climate.regional-proxy.malaga-airport-annual-normal', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'For 1981–2010 Málaga Airport records an annual mean temperature of 18.5 °C, annual precipitation of 534 mm and 2,905 annual sunshine hours.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'These are station normals for Málaga Airport and may be used only as a transparent regional proxy, not as local Frigiliana values or a forecast.',
  },
  {
    id: 'frigiliana.climate.regional-proxy.seasonal-contrast', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'The Málaga Airport normals show the regional seasonal contrast: July and August have the highest monthly mean temperatures, June through September have very low mean precipitation, and November and December have the highest monthly mean precipitation.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'This supports a broad regional season structure only; it does not establish Frigiliana monthly values, daily conditions or a universal best travel month.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaClimateSeasonFacts = defineKnowledgeFacts(facts);
export type FrigilianaClimateSeasonFactId = (typeof frigilianaClimateSeasonFacts)[number]['id'];
