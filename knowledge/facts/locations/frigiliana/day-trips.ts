import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaDayTripsSourceId } from '../../../sources/locations/frigilianaDayTripsSources';

type DayTripFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaDayTripsSourceId[];
};

/**
 * Day-trips facts, normalized 2026-09-12 from independent web research (the page and guide
 * cards previously carried the operator dossier / advisory research without normalized facts).
 * Volatile operating details (drive times, ticket rules, prices, closures) are dated and
 * bounded. Public-page copy takes the durable summary; the Guest Guide takes the actionable
 * layer (shuttle terms, parking logistics, Plan B).
 */
const facts = [
  // — Málaga —
  {
    id: 'frigiliana.day-trips.malaga.drive-time',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Málaga is about 55 minutes / ~60 km from Frigiliana via the A-7 — the easiest, most flexible cultural day, with a walkable centre.',
    status: 'partially-verified',
    sourceIds: ['rome2rio-drive-times-2026', 'visita-malaga-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Route-planner value without traffic or parking search; "~50 min" is optimistic, ~55 min is more realistic door to door.',
  },
  {
    id: 'frigiliana.day-trips.malaga.alcazaba-lift',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'A lift on Calle Guillén Sotelo, behind the town hall, reaches the Alcazaba interior; since May 2025 it requires an Alcazaba ticket (about €7; the Alcazaba is free on Sundays from 14:00) — the earlier free public lift no longer exists.',
    status: 'verified',
    sourceIds: ['malaga-alcazaba-lift-press-2025', 'visita-malaga-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Corrects the "free public lift" claim: the new lift enters the paid interior. Prices change; the Sunday-afternoon free window is the municipal regime.',
  },
  {
    id: 'frigiliana.day-trips.malaga.cathedral-rooftop',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Málaga cathedral’s rooftop tour ("La Manquita", 200+ steps, ~50 m) is a real attraction, but the Cubiertas visit was suspended for roof works as of September 2026 — check whether it is running before counting on it.',
    status: 'partially-verified',
    sourceIds: ['malaga-catedral-cubiertas-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2027-06-12',
    volatility: 'high',
    claimBoundary: 'The 200+ steps and rooftop feature are correct; the suspension is temporary and must be re-checked at travel time.',
  },
  {
    id: 'frigiliana.day-trips.malaga.museum-closing-days',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'For planning: the Museo Picasso and the Alcazaba open daily; the Carmen Thyssen closes on Mondays, the Centre Pompidou on Tuesdays, and the Mercado de Atarazanas on Sundays.',
    status: 'verified',
    sourceIds: ['museo-picasso-malaga-official-2026', 'visita-malaga-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Closing days are stable; exact hours and public-holiday exceptions are live details. Useful for a wet- or hot-weather Plan B.',
  },
  {
    id: 'frigiliana.day-trips.malaga.parking-and-espetos',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Park at the large Muelle Uno car park by the port and walk into the centre in a few minutes; a classic close to the day is an espeto (sardines skewered and grilled over olive wood) at the Pedregalejo or El Palo chiringuitos.',
    status: 'verified',
    sourceIds: ['visita-malaga-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'Car-park hourly rates were not cleanly verified; espeto prices are seasonal.',
  },
  // — Granada —
  {
    id: 'frigiliana.day-trips.granada.drive-time',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Granada is about 1 hour 10 minutes / ~99 km inland from Frigiliana via the A-7 and A-44, and deserves a full day.',
    status: 'partially-verified',
    sourceIds: ['rome2rio-drive-times-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Planner value; add parking and the climb to the monument, so the real total often runs toward 1.5 hours.',
  },
  {
    id: 'frigiliana.day-trips.granada.alhambra-timed-nasrid',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Alhambra tickets must be bought through the official Patronato channel; the Nasrid Palaces carry a fixed printed time slot that cannot be changed, ID is required at entry, and slots sell out weeks to months ahead.',
    status: 'verified',
    sourceIds: ['alhambra-patronato-visit-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'The single most common guest mistake is a missed or unofficial slot; the rule itself is stable.',
  },
  {
    id: 'frigiliana.day-trips.granada.walk-to-nasrid',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'It is roughly 15 minutes on foot from the entrance pavilion to the Nasrid Palaces across the complex (the full circuit with the Alcazaba and Generalife is ~3.5 km / ~3 hours) — build the day around the palace slot and arrive early.',
    status: 'verified',
    sourceIds: ['alhambra-de-granada-itinerarios-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'Corrects the "half-hour walk from the entrance"; ~30 min is from Plaza Nueva / the car park including the climb, not from the entrance pavilion.',
  },
  {
    id: 'frigiliana.day-trips.granada.free-tapas-and-mirador',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Granada keeps the free-tapa-with-every-drink tradition (Calle Navas and the Albaicín bars), and the Mirador de San Nicolás is free and open around the clock for the classic view of the Alhambra against the Sierra Nevada.',
    status: 'verified',
    sourceIds: ['alhambra-de-granada-itinerarios-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'Not every bar gives a tapa, but the practice is widespread; the mirador is very busy at sunset.',
  },
  {
    id: 'frigiliana.day-trips.granada.planb-generalife-albaicin',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'If the Nasrid Palaces are sold out, the day still works: the "Gardens, Generalife and Alcazaba" ticket (without the palaces), the Albaicín and the free Mirador de San Nicolás carry it, and a separate night-visit slot is sometimes still open.',
    status: 'partially-verified',
    sourceIds: ['alhambra-patronato-visit-2026', 'alhambra-de-granada-itinerarios-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'The gardens/Generalife ticket category exists officially; day-to-day availability varies.',
  },
  // — Caminito del Rey —
  {
    id: 'frigiliana.day-trips.caminito.drive-time',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'The Caminito del Rey is about 1 hour 30 minutes from Frigiliana, a structured half-day of ~3–4 hours including the access paths (the boardwalk itself ~1.5–2 hours).',
    status: 'verified',
    sourceIds: ['rome2rio-drive-times-2026', 'caminito-del-rey-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'The "~1 h 30" drive is accurate; total on-site time is a half day.',
  },
  {
    id: 'frigiliana.day-trips.caminito.one-way-and-shuttle',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'The route is strictly one-way and linear, walked north (Gaitanejo, near Ardales) to south (El Chorro); a shuttle bus links the two ends (~15–20 min) for €2.50 per person, cash only, and is not included in the ticket.',
    status: 'verified',
    sourceIds: ['caminito-del-rey-official-2026', 'caminito-del-rey-parking-shuttle-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Shuttle price/hours change seasonally; the cash-only, not-included and one-way facts are the durable core.',
  },
  {
    id: 'frigiliana.day-trips.caminito.rules',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'A helmet is provided and mandatory; the minimum age is eight with an ID check; changes and refunds are not possible; and the walkway (boardwalks to ~100 m above the river) is not recommended for a real fear of heights.',
    status: 'verified',
    sourceIds: ['caminito-del-rey-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'Operator rules; book the official site well ahead, especially at weekends and holidays.',
  },
  {
    id: 'frigiliana.day-trips.caminito.parking-logistic',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'The officially reservable car park is at the CRV on the north side (€2/day); parking at the El Chorro (south) end instead lets you take the shuttle up to the start and then walk the gorge back down to your car, so you wait for the bus fresh at the beginning rather than tired at the end.',
    status: 'partially-verified',
    sourceIds: ['caminito-del-rey-parking-shuttle-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'The clever south-park variant is common and sound, but El Chorro parking is more limited and is not the reserved CRV lot; check the official map.',
  },
  {
    id: 'frigiliana.day-trips.caminito.planb-ardales-reservoirs',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'If the Caminito is sold out, the Guadalhorce reservoirs at its north end are a Plan B: the Mirador de los Tres Embalses, turquoise water and pine woods, with swimming spots such as Playa del Pantano.',
    status: 'verified',
    sourceIds: ['diputacion-malaga-ardales-embalses-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'low',
    claimBoundary: 'Facilities and swimming access are seasonal.',
  },
  // — Ronda —
  {
    id: 'frigiliana.day-trips.ronda.drive-time',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Ronda is a longer drive, about 2 to 2½ hours each way from Frigiliana; the changing mountain landscapes are part of the day, so keep the rest of it light.',
    status: 'partially-verified',
    sourceIds: ['rome2rio-drive-times-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-09-12',
    volatility: 'medium',
    claimBoundary: 'Corrects the optimistic "~2 hours"; ~2 h 15 is more realistic depending on route and traffic.',
  },
  {
    id: 'frigiliana.day-trips.ronda.puente-nuevo-view',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Ronda is defined by the Puente Nuevo over the ~120 m Tajo gorge; the classic upward view is from below, on the free stepped path down from Plaza María Auxiliadora toward the Arco del Cristo (steep return), while the former free viewpoint became paid in 2024 and Casa del Rey Moro (~€10) is another descent into the gorge.',
    status: 'partially-verified',
    sourceIds: ['turismo-ronda-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2027-09-12',
    volatility: 'high',
    claimBoundary: 'Paid-access arrangements and step counts change; name the free Plaza María Auxiliadora path as the reliable option.',
  },
  {
    id: 'frigiliana.day-trips.ronda.plaza-de-toros',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Ronda’s Plaza de Toros (Real Maestranza) was completed in 1785 and is one of the oldest bullrings in Spain and the first built entirely of stone — not, on the evidence, simply "the oldest".',
    status: 'verified',
    sourceIds: ['wikipedia-plaza-toros-ronda-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Use "one of the oldest / first all-stone"; Seville’s Maestranza was begun earlier, so an unqualified "oldest" is not defensible.',
  },
  {
    id: 'frigiliana.day-trips.ronda.wine-and-setenil',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Ronda is wine country — the Serranía de Ronda subzone of the DOP Sierras de Málaga (there is no separate "D.O. Ronda") — and Setenil de las Bodegas, ~20 km / 20–30 minutes away with its houses under rock overhangs, is a strong add-on or Plan B.',
    status: 'verified',
    sourceIds: ['ronda-wine-serrania-dop-2026', 'rome2rio-drive-times-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The wine appellation is the Serranía de Ronda subzone, not an independent "D.O. Ronda".',
  },
  // — durable context / history (public editorial depth) —
  {
    id: 'frigiliana.day-trips.malaga.identity-history',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Málaga is one of the oldest cities in Europe — Phoenician, then Roman, then Moorish — with the Roman theatre at the foot of the Moorish Alcazaba, and it is Picasso’s birthplace, anchoring a dense run of galleries.',
    status: 'verified',
    sourceIds: ['visita-malaga-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Durable identity/history for the public editorial layer, not an operating detail.',
  },
  {
    id: 'frigiliana.day-trips.granada.identity-nasrid-1492',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Granada was the last capital of Muslim Spain; the Alhambra is the Nasrid palace-city left when the kingdom fell in 1492, facing the Albaicín, which keeps the street plan of the medieval Moorish town.',
    status: 'verified',
    sourceIds: ['alhambra-patronato-visit-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Durable identity/history for the public editorial layer.',
  },
  {
    id: 'frigiliana.day-trips.caminito.history-alfonso-2015',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'The Caminito del Rey was built in 1901–1905 as an access walkway for the Gaitanes-gorge hydroelectric works and named after King Alfonso XIII, who crossed it in 1921 to inaugurate the dam; after falling into a dangerous state it reopened following a full restoration in 2015.',
    status: 'verified',
    sourceIds: ['wikipedia-caminito-del-rey-2026', 'caminito-del-rey-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Durable history; the exact 1901–1905 build span and the 1921 royal walk are the well-established dates.',
  },
  {
    id: 'frigiliana.day-trips.ronda.history-puente-1793',
    subject: 'frigiliana',
    topic: 'day-trips',
    statement:
      'Ronda’s Puente Nuevo over the El Tajo gorge was completed in 1793 after decades of work, spanning a drop of well over a hundred metres between the old Moorish town and the newer quarter, and the split setting drew Romantic-era travellers and writers.',
    status: 'verified',
    sourceIds: ['wikipedia-puente-nuevo-ronda-2026', 'turismo-ronda-official-2026'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The 1793 completion is well established; the gorge depth is commonly given as ~100–120 m.',
  },
] as const satisfies readonly DayTripFactInput[];

export const frigilianaDayTripsFacts = defineKnowledgeFacts(facts);

export type FrigilianaDayTripsFactId = (typeof frigilianaDayTripsFacts)[number]['id'];
