import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaArrivalSourceId } from '../../../sources/locations/frigilianaArrivalSources';

type SourceId = FrigilianaArrivalSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'frigiliana.arrival.road-route-a7', subject: 'frigiliana', topic: 'arrival',
    statement: 'The road route from Málaga airport to Frigiliana runs essentially along the A-7; the official tourism page names exit 292 and then roughly 3.5 km of local access up to the village.',
    status: 'verified', sourceIds: ['frigiliana-tourism-situacion'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'The A-7 / exit-292 logic is robust orientation. The exact local road number should not be stated prominently because the language versions of the official page are inconsistent on it.',
  },
  {
    id: 'frigiliana.arrival.airport-road-distance', subject: 'frigiliana', topic: 'arrival',
    statement: 'The road distance Málaga airport → Frigiliana is about 65–66 km; the official tourism page gives roughly 45–50 minutes, a routing aggregator roughly 56 minutes.',
    status: 'partially-verified', sourceIds: ['frigiliana-tourism-situacion', 'rome2rio-agp-frigiliana'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Safe to state is "about 65 km / normally around an hour of driving". Not permissible: a guaranteed 45/50/56 minutes. Baggage reclaim, rental pickup, traffic, parking search and the final walk are additional.',
  },
  {
    id: 'frigiliana.arrival.bus-operator-2026', subject: 'frigiliana', topic: 'arrival',
    statement: 'Since 10 August 2026 the concessionaire of the Nerja⇄Frigiliana bus line is, per the current Ayuntamiento announcement, Grupo Verano Azul.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-bus-operator-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'The operator may be stored as current; recheck at a later publication. Older sources naming Grupo Fajardo are outdated.',
  },
  {
    id: 'frigiliana.arrival.bus-service-character', subject: 'frigiliana', topic: 'arrival',
    statement: 'The Nerja⇄Frigiliana service runs several connections across the day from early morning to evening, denser on weekdays/Saturdays than on Sundays and holidays, with an additional late service in summer.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-bus-operator-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Use only as a frequency band / service character. No individual departure times as durable fact claims; the live page or operator is the checkout before travel.',
  },
  {
    id: 'frigiliana.arrival.bus-timetable-conflict', subject: 'frigiliana', topic: 'arrival',
    statement: 'The municipal bus-timetable surface showed a source conflict: the same URL was indexed in a fresh version with the new operator and new times, while a cached rendering still showed the previous operator, other times and a different summer period.',
    status: 'disputed', sourceIds: ['frigiliana-ayuntamiento-bus-timetable-page', 'frigiliana-ayuntamiento-bus-operator-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'The operator change itself is secured by the separately dated August-2026 announcement; exactly because of the caching conflict, precise timetable data must not be frozen into static facts.',
  },
  {
    id: 'frigiliana.arrival.bus-taxi-stop-plaza-ingenio', subject: 'frigiliana', topic: 'arrival',
    statement: 'The regular Frigiliana endpoint for the bus and the taxis is Plaza del Ingenio; municipal event notices confirm this by referring to the temporary relocation of the "parada habitual" during events.',
    status: 'partially-verified', sourceIds: ['frigiliana-ayuntamiento-stop-relocation'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'Plaza del Ingenio is robust orientation. Check event or roadworks changes on the actual travel day.',
  },
  {
    id: 'frigiliana.arrival.nerja-boarding-point', subject: 'frigiliana', topic: 'arrival',
    statement: 'The official Nerja intercity stop is Avenida de Pescia s/n, while the municipal timetable links a specific Frigiliana-line stop at approximately 36.75114, -3.87747.',
    status: 'partially-verified', sourceIds: ['spain-info-nerja-bus-station', 'frigiliana-ayuntamiento-bus-timetable-page'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'The live-linked map is safer for guests than an invented stop name. It is not verified on the ground that every local and ALSA bus uses the same curb.',
  },
  {
    id: 'frigiliana.arrival.airport-nerja-coach', subject: 'frigiliana', topic: 'arrival',
    statement: 'Aena explicitly lists an ALSA Nerja–airport line, and ALSA lists Málaga airport as a possible departure/arrival point of the Málaga↔Nerja connection.',
    status: 'verified', sourceIds: ['aena-malaga-airport-bus', 'alsa-malaga-nerja', 'alsa-malaga-airport-connections'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'AMARA may say that direct airport→Nerja coaches are offered. Not that a suitable direct connection exists for every flight or day; a live ALSA search is required.',
  },
  {
    id: 'frigiliana.arrival.plan-b-train', subject: 'frigiliana', topic: 'arrival',
    statement: 'If a suitable airport→Nerja coach is missing, the airport offers the C1 train to Málaga María Zambrano (Aena gives about eight minutes for the train leg); from Málaga there are numerous ALSA connections to Nerja.',
    status: 'verified', sourceIds: ['aena-malaga-airport-train', 'alsa-malaga-nerja'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'A valid Plan B: airport→Málaga→Nerja→Frigiliana. The eight minutes apply only to the airport–María Zambrano train leg, not to the whole transfer chain.',
  },
  {
    id: 'frigiliana.arrival.taxi-contacts', subject: 'frigiliana', topic: 'arrival',
    statement: 'The Ayuntamiento lists at least four local taxi licences at Plaza del Ingenio with phone contacts: Taxi 1 625 288 811; Taxi 2 696 969 469; Taxi 3 616 388 964 / 605 582 345; Taxi 4 622 101 095.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-taxi-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Contacts may be stored as live-check aids. "A taxi is always available" would not be supported.',
  },
  {
    id: 'frigiliana.arrival.taxi-airport-transfer-vtc', subject: 'frigiliana', topic: 'arrival',
    statement: 'Several of the municipally listed Frigiliana taxis offer Málaga-airport transfers; Taxi 2 and Taxi 3 additionally document their own VTC capacity.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-taxi-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'A pre-booked local taxi/VTC transfer may be named as a real option. No price, vehicle or availability promise without a concrete booking confirmation.',
  },
  {
    id: 'frigiliana.arrival.taxi-accessible', subject: 'frigiliana', topic: 'arrival',
    statement: 'Taxi 4 is described by the Ayuntamiento as a 7-seater adapted for people with disabilities.',
    status: 'verified', sourceIds: ['frigiliana-ayuntamiento-taxi-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'A good accessibility Plan B; only after prior confirmation of the specific vehicle.',
  },
  {
    id: 'frigiliana.arrival.rideshare-app-unconfirmed-in-town', subject: 'frigiliana', topic: 'arrival',
    statement: 'No reliable official source was found that confirms Uber, Bolt or another app as a dependable way to order a local taxi in Frigiliana itself; apps are confirmed only at the airport.',
    status: 'unverified', sourceIds: ['aena-malaga-airport-taxi-vtc', 'frigiliana-ayuntamiento-taxi-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'Public and Guest Utility should prioritise rank + phone / pre-order in Frigiliana. App availability must not be promised.',
  },
  {
    id: 'frigiliana.arrival.legal-short-stop', subject: 'frigiliana', topic: 'arrival',
    statement: 'Under the current municipal traffic ordinance (Art. 17) a normal "parada" is a vehicle interruption of under two minutes during which the driver does not leave the vehicle; it should take place at the roadside where it least obstructs traffic.',
    status: 'verified', sourceIds: ['frigiliana-ordenanza-circulacion'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'This does not automatically open a specific AMARA unload point. Only a concretely signed, non-prohibited location is permissible.',
  },
  {
    id: 'frigiliana.arrival.loading-zone-restriction', subject: 'frigiliana', topic: 'arrival',
    statement: 'A normal tourist car may not use a "carga y descarga" zone as a luggage unloading spot by default: ordinance Art. 34 defines these areas for goods-transport vehicles, with a named exception for holders of a disabled-parking card.',
    status: 'verified', sourceIds: ['frigiliana-ordenanza-circulacion'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Important guardrail: AMARA must not recommend a generic carga y descarga spot as a legal suitcase stop unless its concrete signage/legal status explicitly allows it.',
  },
  {
    id: 'frigiliana.arrival.signage-priority', subject: 'frigiliana', topic: 'arrival',
    statement: 'On-site signage and Policía Local instructions take priority (ordinance Art. 12); signs at the entrances to pedestrian or restricted-traffic areas apply to that area.',
    status: 'verified', sourceIds: ['frigiliana-ordenanza-circulacion', 'frigiliana-policia-local-contacts'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Stay-specific driving instructions must be checked against the real signs. When unclear, contact the Policía Local instead of overstretching a generic online rule.',
  },
  {
    id: 'frigiliana.arrival.historic-core-topography', subject: 'frigiliana', topic: 'arrival',
    statement: 'Parts of the historic footpaths have steep, narrow stairs, and the municipality describes the historic cobblestones and steep gradients as slippery under certain conditions.',
    status: 'verified', sourceIds: ['frigiliana-tourism-old-town-route', 'frigiliana-ayuntamiento-obras-historic-centre'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Frigiliana must not be presented as generally step-free or "easy with luggage". Actual difficulty must be assessed separately per accommodation and micro-route.',
  },
  {
    id: 'frigiliana.arrival.trailheads-from-plaza', subject: 'frigiliana', topic: 'arrival',
    statement: 'Several official walks begin directly at Plaza del Ingenio; La Lastra starts there, and El Fuerte also starts there before continuing over stairs through the historic core.',
    status: 'verified', sourceIds: ['frigiliana-tourism-hiking-la-lastra-el-fuerte'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Some relevant walks work on foot straight from the village; do not infer that all trailheads are reachable without a vehicle.',
  },
  {
    id: 'frigiliana.arrival.maro-shuttle-2026', subject: 'frigiliana', topic: 'arrival',
    statement: 'For beaches, Nerja is the practical public connection node; for Playa de Maro, Nerja runs a seasonal shuttle in 2026 whose published service runs until 15 September 2026.',
    status: 'verified', sourceIds: ['nerja-ayuntamiento-maro-shuttle-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-05-01', volatility: 'high',
    claimBoundary: 'Use only as an example of seasonal onward mobility. Do not store as a year-round offer; check each year and date live.',
  },
  {
    id: 'frigiliana.arrival.nerja-regional-hub', subject: 'frigiliana', topic: 'arrival',
    statement: 'From Nerja there are ALSA connections to major regional hubs including Málaga and Granada, so the public model for longer day trips is often Frigiliana → Nerja → regional bus.',
    status: 'verified', sourceIds: ['alsa-nerja-regional', 'alsa-malaga-nerja'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'The hub model is robust; concrete destinations, journey times and frequencies remain live data.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaArrivalFacts = defineKnowledgeFacts(facts);
export type FrigilianaArrivalFactId = (typeof frigilianaArrivalFacts)[number]['id'];
