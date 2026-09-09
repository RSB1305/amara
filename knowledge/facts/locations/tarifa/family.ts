import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaFamilySourceId } from '../../../sources/locations/tarifaFamilySources';

type FamilyFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaFamilySourceId[];
};

const facts = [
  {
    id: 'tarifa.family.range.beyond-kitesurf',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Beyond its kitesurf reputation, Tarifa works for families through the combination of beaches, marine wildlife, nature parks, low-threshold outdoor activities and cultural day trips.',
    status: 'partially-verified',
    sourceIds: ['amara-research-tarifa-family-2026', 'turismo-tarifa-visitor-guide-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'low',
    claimBoundary:
      'Describes the breadth of family options, not a guaranteed set of activities available on any given day, which the wind can change.'
  },
  {
    id: 'tarifa.family.wind.dominant-planning-variable',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Wind is the dominant planning variable in Tarifa: it can turn beaches, boat trips and water sports from ideal to unsuitable within a day, so weather-dependent activities should be paired with flexible alternatives rather than fixed far in advance.',
    status: 'partially-verified',
    sourceIds: ['amara-research-tarifa-family-2026', 'firmm-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'A planning principle. It does not predict conditions for specific dates; operators cancel weather-dependent trips at short notice.'
  },
  {
    id: 'tarifa.family.playa-chica.central-family-beach',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Playa Chica is the most convenient central family beach in Tarifa, with comparatively calm water, easy foot access from the old town/harbour, toilets, showers, foot showers and a children play area, making it a common plan B when the Atlantic beaches get too windy.',
    status: 'verified',
    sourceIds: ['spain-info-playa-chica-2026', 'turismo-tarifa-visitor-guide-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Facilities and general conditions are official; the beach is still small, wind-exposed and busy in high season, and parking is unreliable.'
  },
  {
    id: 'tarifa.family.los-lances-sur.official-family-beach',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'The official Tarifa tourism site describes the southern stretch of Los Lances as a family beach with showers, walkways and gastronomy; wind and waves remain the decisive safety factor.',
    status: 'verified',
    sourceIds: ['turismo-tarifa-visitor-guide-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Confirms official family-beach designation and facilities, not water safety on a given day; on strong-wind days it is better for a walk than a swim.'
  },
  {
    id: 'tarifa.family.whale-watching.family-suitable',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Whale and dolphin watching sails from Tarifa harbour and is explicitly family-suitable: firmm charges a reduced child tier and carries babies under one year free, offering roughly 2-hour and 3-hour trips; seasickness is a real consideration and trips are strongly weather-dependent.',
    status: 'partially-verified',
    sourceIds: ['firmm-whale-watching-2026', 'turmares-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'high',
    claimBoundary:
      'Family suitability and trip lengths are provider-stated. Public copy must not print a fixed price, season end or daily timetable; route guests to the live booking page and a same-day weather check.'
  },
  {
    id: 'tarifa.family.whale-watching.sighting-not-guaranteed',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'firmm cites an approximately 99% sighting rate but states clearly that neither a specific species nor orcas in particular can be guaranteed; the 3-hour trips only run when an orca sighting is considered possible.',
    status: 'partially-verified',
    sourceIds: ['firmm-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'medium',
    claimBoundary:
      'Important for setting expectations with children. The sighting rate is a provider figure and must never be presented as a species or orca guarantee.'
  },
  {
    id: 'tarifa.family.kite-taster.school-only-from-eight',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'A children kitesurf taster is realistic only from roughly age eight and only through a professional school with adapted equipment, helmet, harness, wetsuit and insurance; suitability depends on wind, weight and swimming ability.',
    status: 'partially-verified',
    sourceIds: ['subcielo-kite-kids-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Minimum age and price are provider-stated and must be confirmed per child. Never present a kite taster as an AMARA-delivered service.'
  },
  {
    id: 'tarifa.family.riding.beginner-and-park-rides',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Beginner and children riding lessons plus beach/natural-park rides around Bolonia are available from local stables, with helmet, guide and accident insurance stated for guided routes; minimum age and weight limits vary by operator.',
    status: 'partially-verified',
    sourceIds: ['aventuras-del-sur-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'A short lesson suits a first-time child better than a long ride; minimum age, price and route must be confirmed with the stable at booking.'
  },
  {
    id: 'tarifa.family.ebike.teens-guided',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Guided e-bike/e-MTB tours with routes matched to level are offered locally and suit teenagers; the surrounding regional MTB network is extensive, so families should pick individual suitable segments rather than long routes.',
    status: 'partially-verified',
    sourceIds: ['electric-bikes-tarifa-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Positive ratings rest on small review samples; available child frame sizes and minimum age need confirmation before booking.'
  },
  {
    id: 'tarifa.family.nature.estrecho-and-cazalla',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'The Parque Natural del Estrecho offers short family walks and the Cazalla observatory is an official birdwatching point notable during autumn raptor migration; the observatory sits on the N-340, so families should not walk children along the road to reach it.',
    status: 'verified',
    sourceIds: ['turismo-tarifa-visitor-guide-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Confirms official designation and the roadside-access caution; classic nature trails are not pushchair/wheelchair accessible.'
  },
  {
    id: 'tarifa.family.bolonia.baelo-claudia-accessible',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Bolonia combines a beach, a large dune and the Roman town of Baelo Claudia (roughly 20–30 minutes by car); Baelo Claudia documents an accessible route, reserved disabled parking and lift access, while the dune itself is not pushchair/wheelchair friendly.',
    status: 'partially-verified',
    sourceIds: ['baelo-claudia-visit-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Current sources disagree on the entry-fee regime (roughly 0–5 EUR); fee and opening days should be checked on site. High-season parking fills early.'
  },
  {
    id: 'tarifa.family.zoo-de-castellar.rescue-centre',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'Zoo de Castellar, an animal-rescue centre roughly 55–65 minutes by car, is a reliable full-day family option; online tickets are recommended to avoid queues.',
    status: 'partially-verified',
    sourceIds: ['zoo-de-castellar-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Prices and hours change seasonally; site-wide accessibility is unspecified and one recent family review criticised the car park.'
  },
  {
    id: 'tarifa.family.gibraltar.cable-car-closed',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'A Gibraltar day trip (Upper Rock, caves, macaques) is logistically simpler than Tanger, but the cable car is closed for refurbishment until at least 2027, so the Upper Rock is reached by the official £40 Marketplace shuttle instead.',
    status: 'verified',
    sourceIds: ['gibraltar-cable-car-2026', 'visit-gibraltar-shuttle-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'high',
    claimBoundary:
      'Shuttle fare and timetable change; new July 2026 border arrangements mean current official advice should be checked, and travellers should carry valid documents.'
  },
  {
    id: 'tarifa.family.tanger.full-day-not-mandatory',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'The Tarifa–Tanger Ville ferry takes about an hour and lands next to the medina, but with border formalities a Tanger visit is typically a full 8–10 hour day; it is a strong cultural contrast for older children and teenagers but not a mandatory family outing.',
    status: 'partially-verified',
    sourceIds: ['balearia-tarifa-tanger-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Each traveller needs their own valid passport; entry/visa rules depend on nationality and must be checked before booking. Unnecessarily tiring for toddlers.'
  },
  {
    id: 'tarifa.family.bahia-park.closed-until-2027',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'The Bahía Park water park in Algeciras is closed and, per its own website, does not reopen until June 2027, so it is not an option for autumn 2026 stays.',
    status: 'verified',
    sourceIds: ['bahia-park-algeciras-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-05-09',
    volatility: 'medium',
    claimBoundary:
      'A time-bound closure fact. 2027 prices and the exact reopening date are not yet reliable and must be rechecked before any 2027 recommendation.'
  },
  {
    id: 'tarifa.family.transport.car-adds-flexibility',
    subject: 'tarifa',
    topic: 'family',
    statement:
      'The M-150 Tarifa–Algeciras bus runs several times daily (timetable valid 2026-09-07 to 2027-06-20), but direct services toward La Línea/Gibraltar are sparse, so a hire car adds significant flexibility for families combining Bolonia, stables, nature parks, the zoo and Gibraltar.',
    status: 'verified',
    sourceIds: ['ctm-campo-gibraltar-m150-2026', 'amara-research-tarifa-family-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-06-09',
    volatility: 'medium',
    claimBoundary:
      'Timetables change between summer and off-season and beach/Bolonia services are strongly seasonal; confirm return times on the day of travel.'
  }
] as const satisfies readonly FamilyFactInput[];

export const tarifaFamilyFacts = defineKnowledgeFacts(facts);

export type TarifaFamilyFactId = (typeof tarifaFamilyFacts)[number]['id'];
