import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaKitesurfWindSourceId } from '../../../sources/locations/tarifaKitesurfWindSources';

type WindFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaKitesurfWindSourceId[];
};

const facts = [
  {
    id: 'tarifa.kitesurf-wind.units.knot-kmh',
    subject: 'tarifa',
    topic: 'kitesurf-wind',
    statement:
      'Wind speed is given in knots because one knot is one nautical mile per hour; one knot equals 1.852 km/h, so about 20 knots is roughly 37 km/h and 30 knots roughly 56 km/h.',
    status: 'verified',
    sourceIds: ['general-meteorology-baseline-2026'],
    checkedAt: '2026-09-10',
    reviewAfter: '2030-09-10',
    volatility: 'low',
    claimBoundary:
      'A fixed unit conversion for orientation; the km/h values are rounded and meant to make knots graspable, not to add precision.'
  },
  {
    id: 'tarifa.kitesurf-wind.thermal.land-sea-breeze',
    subject: 'tarifa',
    topic: 'kitesurf-wind',
    statement:
      'Thermal wind — the land–sea breeze — arises because land heats and cools much faster than water: on a sunny day the warm land heats the air above it, that air rises and lowers the pressure over land, and cooler air flows in from the sea as the daytime sea breeze; after sunset the land cools quickly and the flow reverses, weaker, as the night land breeze, with a short calm at each turn.',
    status: 'verified',
    sourceIds: ['tarifa-wind-deep-research-2026', 'general-meteorology-baseline-2026'],
    checkedAt: '2026-09-10',
    reviewAfter: '2030-09-10',
    volatility: 'low',
    claimBoundary:
      'General meteorology that explains the mechanism for beginners; it describes the daily pattern, not a forecast for a given day or spot.'
  },
  {
    id: 'tarifa.kitesurf-wind.thermal.poniente-afternoon-boost',
    subject: 'tarifa',
    topic: 'kitesurf-wind',
    statement:
      'On clear afternoons the local sea breeze blows in roughly the same direction as the westerly Poniente and adds to it, so a modest Poniente can build through the afternoon; when clouds cut the sunshine the thermal boost disappears and the wind falls back toward the underlying strength.',
    status: 'verified',
    sourceIds: ['tarifa-wind-deep-research-2026', 'general-meteorology-baseline-2026'],
    checkedAt: '2026-09-10',
    reviewAfter: '2029-09-10',
    volatility: 'low',
    claimBoundary:
      'A qualitative tendency for orientation; the size of the boost is local and poorly captured by forecast models, so no specific knot figure may be printed as a guarantee.'
  },
  {
    id: 'tarifa.kitesurf-wind.character.levante-gustier',
    subject: 'tarifa',
    topic: 'kitesurf-wind',
    statement:
      'Wind in nature is rarely perfectly steady, and near the Tarifa shore the easterly Levante is markedly gustier than the westerly Poniente: the Levante comes offshore over heated land and the mountains, which makes it turbulent and gusty close in, while the Poniente arrives over a long ocean fetch and is smoother and more side-onshore; the Levante runs cleaner further out from the beach.',
    status: 'verified',
    sourceIds: ['tarifa-wind-deep-research-2026', 'general-meteorology-baseline-2026'],
    checkedAt: '2026-09-10',
    reviewAfter: '2029-09-10',
    volatility: 'low',
    claimBoundary:
      'Describes the typical character of the two winds; gustiness varies by day, tide and spot and is never a safety clearance for a given wind or rider.'
  },
  {
    id: 'tarifa.kitesurf-wind.waves.period-rationale',
    subject: 'tarifa',
    topic: 'kitesurf-wind',
    statement:
      'The embedded Windguru view is wind-first (wind, gusts, direction, temperature, rating) and does not show wave height or period, because in Tarifa the kiting decision is driven by wind; wave period in seconds indicates swell energy — long periods (roughly ten seconds and more) mean organised groundswell, short periods (under about six seconds) mean local wind-chop, which is what a Levante blowing against the tide produces.',
    status: 'verified',
    sourceIds: ['tarifa-wind-deep-research-2026', 'general-meteorology-baseline-2026'],
    checkedAt: '2026-09-10',
    reviewAfter: '2029-09-10',
    volatility: 'low',
    claimBoundary:
      'Editorial rationale for a wind-first display plus a general swell-versus-wind-sea distinction; it does not claim waves are irrelevant, and the second thresholds are orientation, not fixed cut-offs.'
  }
] as const satisfies readonly WindFactInput[];

export const tarifaKitesurfWindFacts = defineKnowledgeFacts(facts);

export type TarifaKitesurfWindFactId = (typeof tarifaKitesurfWindFacts)[number]['id'];
