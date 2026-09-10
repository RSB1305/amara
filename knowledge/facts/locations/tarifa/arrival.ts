import { defineKnowledgeFacts } from '../../../schema';
import type { TarifaArrivalSourceId } from '../../../sources/locations/tarifaArrivalSources';

type SourceId = TarifaArrivalSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'tarifa.arrival.airport-options', subject: 'tarifa', topic: 'arrival',
    statement: 'The nearest major hub is Málaga (AGP), roughly 160 km / about 2 hours by road; Seville (SVQ) is roughly 200 km / about 2–2.5 hours; Jerez (XRY) roughly 119 km / about 1 h 40; Gibraltar (GIB) is closest at roughly 45 km / about 1 hour plus border waiting, but suits mainly UK travellers.',
    status: 'verified', sourceIds: ['divejourney-tarifa-logistics', 'rome2rio-malaga-tarifa', 'city-airport-taxis-malaga-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'Distances and drive times are approximate orientation, not guaranteed journey times; traffic and border waits are additional.',
  },
  {
    id: 'tarifa.arrival.road-route', subject: 'tarifa', topic: 'arrival',
    statement: 'From Málaga the route follows the toll-free coastal motorway A-7 (E-15) via Algeciras, the most direct connection; from Seville or Jerez it runs on the A-4 and then via Cádiz towards Tarifa.',
    status: 'verified', sourceIds: ['divejourney-tarifa-logistics', 'rome2rio-malaga-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Describes the road corridors, not live traffic, roadworks or drive time on a given day.',
  },
  {
    id: 'tarifa.arrival.bus-station', subject: 'tarifa', topic: 'arrival',
    statement: 'Tarifa\'s central bus station is on Calle Batalla del Salado (no. 92), about a 5-minute walk from the historic centre.',
    status: 'verified', sourceIds: ['alsa-tarifa', 'checkmybus-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Location only; it does not establish which operators stop there on a given day or their times.',
  },
  {
    id: 'tarifa.arrival.bus-operators', subject: 'tarifa', topic: 'arrival',
    statement: 'At least four coach operators serve Tarifa (ALSA, Avanza, Transportes Comes, Socibus); aggregators list around 75 daily connections in total, with roughly four direct buses a day from Málaga (about 2.5 hours), and schedules vary strongly by season.',
    status: 'verified', sourceIds: ['alsa-tarifa', 'checkmybus-tarifa', 'rome2rio-malaga-tarifa'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Service character/frequency band only; no individual departure as a durable fact. A live operator search is required per date.',
  },
  {
    id: 'tarifa.arrival.old-town-access-control', subject: 'tarifa', topic: 'arrival',
    statement: 'Tarifa\'s old town is largely car-free: from 13:30 Monday–Saturday only residents, people with reduced mobility, guests of accommodation holding an official permit, and delivery/service vehicles may enter; parking is allowed only in designated zones (with a 15–30 minute exception for residents). The regime was introduced in 2021.',
    status: 'verified', sourceIds: ['tarifa-ayuntamiento-old-town-access'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'The 2021 rule may have been amended; verify current signage/ordinance on the travel day.',
  },
  {
    id: 'tarifa.arrival.hotel-guest-permit', subject: 'tarifa', topic: 'arrival',
    statement: 'Guests of hotels or holiday apartments generally need a short-term access permit obtained via the local police to drive into the old town to load or unload luggage; without it, driving into the old-town area after the restricted time is not allowed.',
    status: 'verified', sourceIds: ['tarifa-ayuntamiento-old-town-access'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'low',
    claimBoundary: 'Describes the process; the permit is arranged via the accommodation/police, not guaranteed for any time.',
  },
  {
    id: 'tarifa.arrival.parking-outside-centre', subject: 'tarifa', topic: 'arrival',
    statement: 'Public parking sits just outside the old town — for example a paid car park by the tourist office east of the centre and a guarded car park at the harbour/promenade, each a few minutes\' walk in; the beach zones (Los Lances, Valdevaqueros) have roadside or paid parking at the access points.',
    status: 'partially-verified', sourceIds: ['tarifacozyhouse-parking'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'From a non-official local source; exact car parks, fees and availability are seasonal and must be checked on site.',
  },
  {
    id: 'tarifa.arrival.beach-mobility', subject: 'tarifa', topic: 'arrival',
    statement: 'The spread-out beaches (Los Lances, Valdevaqueros, Bolonia) are reachable by bus but the service is sparse and awkward; local lines (e.g. B, P) serve Los Lances and the camping zones and partly Bolonia, and in high season parking and buses get tight, so a car is more practical.',
    status: 'partially-verified', sourceIds: ['divejourney-tarifa-logistics', 'tarifacozyhouse-parking'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Local bus lines and frequencies are not officially confirmed here and are seasonal; treat as orientation, not a timetable.',
  },
  {
    id: 'tarifa.arrival.tanger-ferry', subject: 'tarifa', topic: 'arrival',
    statement: 'Fast ferries run Tarifa → Tanger-Ville in about 1 hour (~20 nautical miles / ~33 km); seasonally up to about eight crossings a day (Balearia, Africa Morocco Link; ~94 weekly), carrying foot passengers and vehicles. Operation is weather-dependent — strong Levante wind and high seas often cause cancellations.',
    status: 'verified', sourceIds: ['directferries-tarifa-tanger', 'europapress-tarifa-ferry-cancellations'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'No guaranteed operation on a given day; frequency is seasonal and crossings are cancelled in strong weather. Live check required.',
  },
  {
    id: 'tarifa.arrival.accessibility', subject: 'tarifa', topic: 'arrival',
    statement: 'People with reduced mobility are officially exempt from the access restrictions and may drive into the centre, but the old town is cobbled and most lanes are narrow, which is awkward with a wheelchair or heavy luggage and may need a taxi shuttle to the door.',
    status: 'partially-verified', sourceIds: ['tarifa-ayuntamiento-old-town-access'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'The exemption is the rule; actual terrain difficulty depends on the specific route and accommodation.',
  },
] as const satisfies readonly FactInput[];

export const tarifaArrivalFacts = defineKnowledgeFacts(facts);
export type TarifaArrivalFactId = (typeof tarifaArrivalFacts)[number]['id'];
