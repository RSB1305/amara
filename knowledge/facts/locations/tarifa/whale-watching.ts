import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaWhaleWatchingSourceId } from '../../../sources/locations/tarifaWhaleWatchingSources';

type WhaleFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly TarifaWhaleWatchingSourceId[];
};

const facts = [
  {
    id: 'tarifa.whale-watching.why-exceptional',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Tarifa is one of Europe’s strongest whale-watching locations because the roughly 14 km strait between Europe and Africa combines high productivity, deep water, strong currents, a major Atlantic–Mediterranean migration route and resident cetacean populations.',
    status: 'partially-verified',
    sourceIds: ['turismo-tarifa-whale-watching-2026', 'cetacean-science-strait-gibraltar', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Explains why the location is productive; it is not a promise about any single trip, which the sea state governs.'
  },
  {
    id: 'tarifa.whale-watching.sighting-rate-is-operator-claim',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'The destination portal cites a general sighting probability above 90% and firmm/Turmares advertise around or above 99%, but these are operator/destination figures for at least one cetacean species, not independently audited species-specific statistics.',
    status: 'partially-verified',
    sourceIds: ['turismo-tarifa-whale-watching-2026', 'firmm-tarifa-2026', 'turmares-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Public copy must attribute the rate to the operator/destination and never present it as a species or orca guarantee; no comparable audited per-operator data exists.'
  },
  {
    id: 'tarifa.whale-watching.core-species',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'The reliable core of the experience is long-finned pilot whales plus bottlenose, common and striped dolphins, present across the season; a typical trip is about two hours on a deliberately non-fixed route from Puerto de Tarifa.',
    status: 'partially-verified',
    sourceIds: ['cetacean-science-strait-gibraltar', 'turismo-tarifa-whale-watching-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'Describes relative likelihood from residency status and operator observation, not a guaranteed sighting on a given trip.'
  },
  {
    id: 'tarifa.whale-watching.orca-season',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Orcas are a seasonal visitor tied to Atlantic bluefin tuna, with a conservative core window of roughly early July to mid/late August; firmm runs its dedicated three-hour orca search only then, and an orca trip may not visit other species.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'cetacean-science-strait-gibraltar', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-06-09',
    volatility: 'medium',
    claimBoundary:
      'Orca presence depends on prey movement and is never guaranteed; a ~99% cetacean rate is not a 99% orca rate. Orca marketing outside July/August is not a sighting promise.'
  },
  {
    id: 'tarifa.whale-watching.sperm-and-fin-whales',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Sperm whales are more interesting in spring and autumn than high summer, while fin whales are migratory passers-through and much less predictable, with no reliable narrow monthly window.',
    status: 'partially-verified',
    sourceIds: ['cetacean-science-strait-gibraltar', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'medium',
    claimBoundary:
      'Seasonal tendencies, not schedules; both remain opportunistic sightings.'
  },
  {
    id: 'tarifa.whale-watching.boat-type-is-the-decision',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'The key traveller decision is boat type, not which operator "sees more": large passenger ships (firmm, Turmares) give stability, toilets and the best documented wheelchair access, while the ~10-guest RIBs (Aventura, TOP) are more intimate but more affected by waves, spray and physical limitations.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'turmares-tarifa-2026', 'aventura-tarifa-2026', 'top-tarifa-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'low',
    claimBoundary:
      'A comfort/access trade-off, not a quality ranking; a "best sightings operator" cannot be derived from the available data.'
  },
  {
    id: 'tarifa.whale-watching.five-listed-operators',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'The official Tarifa tourism portal currently lists five operators from Puerto de Tarifa: Aventura Tarifa, firmm España, Turmares, TOP Tarifa and Marina Blue.',
    status: 'verified',
    sourceIds: ['turismo-tarifa-whale-watching-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Being listed by the destination is not the same as an individually documented AROC licence number; the MITECO AROC search is the authoritative check.'
  },
  {
    id: 'tarifa.whale-watching.price-shape',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'The standard two-hour trip is roughly 50 EUR for adults at firmm and Turmares with clear child reductions and babies free; the ten-guest RIBs are around 65 EUR per person, and orca-focus trips roughly 70–80 EUR.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'turmares-tarifa-2026', 'aventura-tarifa-2026', 'top-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'high',
    claimBoundary:
      'Indicative ranges, not fixed tariffs; public copy should route to live booking rather than print a price. Marina Blue prices and age bands were not reliably extractable.'
  },
  {
    id: 'tarifa.whale-watching.family-value',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'For families the large ships are notably cheaper than the ten-guest RIBs (e.g. two adults plus two children priced per firmm/Turmares child tiers versus four RIB seats at ~65 EUR each) and offer more space, toilets and stability.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'turmares-tarifa-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Comparison of published price shapes; exact totals depend on ages and current tariffs and must be confirmed at booking.'
  },
  {
    id: 'tarifa.whale-watching.weather-dominates',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Sea state, not a "best time of day", decides trips: operators change departure times by wind, wave and tide, whole runs can be cancelled for several consecutive days, and AEMET publishes a dedicated Estrecho marine forecast — so a two-day window and no tight onward transfer are the safest plan.',
    status: 'verified',
    sourceIds: ['firmm-tarifa-2026', 'aemet-estrecho-marine-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'A planning principle; it does not forecast specific dates. Confirm the operator sailing and AEMET forecast on the day.'
  },
  {
    id: 'tarifa.whale-watching.legal-protection',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Spanish law strictly regulates the activity: Real Decreto 1727/2007 sets a 500 m protection space with a 0–60 m exclusion zone, a 4-knot limit and bans on touching, feeding, chasing, encircling and acoustic luring, and MITECO requires prior AROC authorisation for regulated recreational watching.',
    status: 'verified',
    sourceIds: ['boe-rd-1727-2007', 'miteco-aroc-cetaceans-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2028-09-09',
    volatility: 'low',
    claimBoundary:
      'States the legal framework; it does not confirm which specific operators currently hold AROC authorisation.'
  },
  {
    id: 'tarifa.whale-watching.ethical-operator-signs',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Quality signs of an ethical operator are a verifiable AROC authorisation, a biologist/qualified guide, no promise of a specific species, no aggressive chasing or closer-than-legal approach, no feeding, and a visible break-off when animals show stress; a fast boat does not override the in-proximity speed and approach rules.',
    status: 'partially-verified',
    sourceIds: ['miteco-aroc-cetaceans-2026', 'boe-rd-1727-2007', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'A checklist for choosing an operator, not a certification of any particular one.'
  },
  {
    id: 'tarifa.whale-watching.accessibility',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'firmm and Turmares have the best documented accessibility (a wheelchair space on each firmm boat with transfer help in calm seas; a wheelchair ramp and sheltered interior on Turmares’ Jackelin), whereas the ten-guest RIBs publish no comparable provision, so reduced-mobility guests should agree a boarding check before paying.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'turmares-tarifa-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Based on published boat descriptions; firmm advises reduced-mobility participation only in calm seas, and boarding requirements must be confirmed with the operator.'
  },
  {
    id: 'tarifa.whale-watching.on-board-practicalities',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Practicalities matter: seasickness prevention should be planned in advance (crews cannot dispense medication), a warm windproof layer and secure non-slip shoes are advised even on hot days, and phones can pick up a Moroccan network mid-strait outside EU roaming, so mobile data should be switched off.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'turmares-tarifa-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'General guest guidance; provider-specific rules (e.g. firmm’s pregnancy limit from the seventh month) must not be generalised to other operators.'
  },
  {
    id: 'tarifa.whale-watching.harbour-logistics',
    subject: 'tarifa',
    topic: 'whale-watching',
    statement:
      'Meeting points cluster tightly around Puerto de Tarifa on foot from the town; firmm has guests check in at the harbour office about an hour before departure and cars must be parked outside the harbour, with extra time needed in high season.',
    status: 'partially-verified',
    sourceIds: ['firmm-tarifa-2026', 'amara-research-tarifa-whale-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-09-09',
    volatility: 'low',
    claimBoundary:
      'firmm-specific check-in timing; other operators vary (e.g. TOP at Muelle 2 ~20–30 minutes before). Marina Blue’s departure harbour must be confirmed.'
  }
] as const satisfies readonly WhaleFactInput[];

export const tarifaWhaleWatchingFacts = defineKnowledgeFacts(facts);

export type TarifaWhaleWatchingFactId = (typeof tarifaWhaleWatchingFacts)[number]['id'];
