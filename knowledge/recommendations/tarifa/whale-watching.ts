import { defineKnowledgeRecommendations } from '../../schema';

/**
 * Whale-watching operators sailing from Puerto de Tarifa, maintained once here and cited
 * by both the whale-watching page and the family page. All CANDIDATE: the research is
 * compiled and no operator's AROC licence was individually verified, so APPROVED and
 * public/guest scope are Robert's call (see open questions
 * tarifa.whale-watching.question.amara-lead-operator and .aroc-licence-check).
 * Prices are indicative ranges for internal orientation, never public copy.
 */
export const tarifaWhaleWatchingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.whale-watching.firmm',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'firmm — Foundation for Information and Research on Marine Mammals',
      kind: 'provider',
      website: 'https://www.firmm.org/en/whale-watching',
      phone: '+34956627008'
    },
    summary:
      'Research-foundation operator; the most transparently documented choice for German-speaking families. Large stable boats (VISION, SPIRIT) with toilet and a wheelchair space, German/English/Spanish briefings, life jackets for all incl. babies, free cancellation and a no-sighting repeat ticket. 2h standard and a July/August-only 3h orca search.',
    bestFor: ['families', 'German-speaking guests', 'reduced mobility (calm seas)', 'first-time whale watching'],
    access: [{ from: 'amara-family-surf', note: 'Harbour office inside Puerto de Tarifa; check in ~1h before, park outside the harbour.' }],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: [
      'tarifa.whale-watching.boat-type-is-the-decision',
      'tarifa.whale-watching.family-value',
      'tarifa.whale-watching.accessibility',
      'tarifa.whale-watching.sighting-rate-is-operator-claim'
    ],
    sourceIds: ['firmm-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'high',
    claimBoundary:
      'Do not print a fixed price, season end (stated 2026-11-07) or daily timetable; route to live booking and a same-day AEMET/operator check. The ~99% rate is an operator claim for at least one species, never an orca guarantee. AROC licence still to verify.'
  },
  {
    id: 'tarifa.whale-watching.turmares',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'Turmares Tarifa',
      kind: 'provider',
      website: 'https://www.turmares.com/en/excursions/',
      phone: '+34956680741'
    },
    summary:
      'Widest choice of boat types: the large Jackelin (underwater lounge, toilet, wheelchair ramp), the fast 62-person Pirata de Sálvora and the 12-person hybrid research boat Dolphin Tarifa with an electric, quieter propulsion option. Multilingual crew; 2h/3h with child tiers.',
    bestFor: ['families', 'choice of boat', 'reduced mobility (Jackelin)', 'quieter hybrid option'],
    access: [{ from: 'amara-family-surf', note: 'Office at C. Alcalde Juan Núñez 3; departs Puerto de Tarifa. Reconfirm departure on the day.' }],
    planB: 'tarifa.whale-watching.firmm',
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: [
      'tarifa.whale-watching.boat-type-is-the-decision',
      'tarifa.whale-watching.family-value',
      'tarifa.whale-watching.accessibility'
    ],
    sourceIds: ['turmares-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-01-09',
    volatility: 'high',
    claimBoundary:
      'No clearly published voluntary customer cancellation window and no full guaranteed language matrix; confirm before prepaying. Prices/departures volatile. AROC licence still to verify.'
  },
  {
    id: 'tarifa.whale-watching.aventura-tarifa',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'Aventura Tarifa',
      kind: 'provider',
      website: 'https://www.aventuratarifa.com',
      whatsapp: '+34634522738'
    },
    summary:
      'Small-group experience: a fast RIB/semi-rigid limited to ~10 guests with a marine biologist and skipper; intimate and photogenic but more physical on the water. Regular 2h at ~65 EUR per seat (same for adult or child).',
    bestFor: ['small groups', 'photography', 'no reduced-mobility needs'],
    access: [{ from: 'amara-family-surf', note: 'Departs Puerto de Tarifa; sales/contact Avenida de la Constitución 6.' }],
    planB: 'tarifa.whale-watching.firmm',
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: ['tarifa.whale-watching.boat-type-is-the-decision', 'tarifa.whale-watching.price-shape'],
    sourceIds: ['aventura-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'high',
    claimBoundary:
      'Orca page (~80 EUR) still carries 2025 text — confirm for 2026. No reliable public cancellation/weather/no-sighting policy; confirm in writing before payment. AROC licence still to verify.'
  },
  {
    id: 'tarifa.whale-watching.top-tarifa',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'TOP Tarifa',
      kind: 'provider',
      website: 'https://toptarifa.es',
      whatsapp: '+34686430162'
    },
    summary:
      'Zodiac/RIB limited to ~10 guests with a marine biologist: whale/dolphin 2h (~65 EUR) and orca ~2.5h (~80 EUR), plus transparent private charters (about 650 EUR whale/dolphin, 800 EUR orca). Meets at Muelle 2.',
    bestFor: ['small groups', 'private charter (group of ~10)', 'photography'],
    access: [{ from: 'amara-family-surf', note: 'Muelle/Pier 2, arrive ~20–30 minutes before departure.' }],
    planB: 'tarifa.whale-watching.aventura-tarifa',
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: ['tarifa.whale-watching.boat-type-is-the-decision', 'tarifa.whale-watching.price-shape'],
    sourceIds: ['top-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'high',
    claimBoundary:
      'Current website domain/phone differ from the city listing — reconfirm contact. Guests may get wet; no clear public direct-cancellation policy. AROC licence still to verify.'
  },
  {
    id: 'tarifa.whale-watching.marina-blue',
    destination: 'tarifa',
    topic: 'whale-watching',
    place: {
      name: 'Marina Blue',
      kind: 'provider',
      website: 'https://marinablue.es',
      phone: '+34722408426'
    },
    summary:
      'Comfort/exclusive end: a 12.75 m motor yacht (MIAMITA) with 360° terrace, cushioned seating, WC and full navigation electronics; stated year-round operation Mon–Sun 10–19. Babies allowed under adult supervision.',
    bestFor: ['comfort', 'smaller/exclusive atmosphere', 'off-season dates'],
    access: [{ from: 'amara-family-surf', note: 'Puerto de Tarifa, but also a base at Real Club Náutico de Algeciras — confirm the actual departure harbour before booking transfers.' }],
    planB: 'tarifa.whale-watching.firmm',
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: ['tarifa.whale-watching.boat-type-is-the-decision'],
    sourceIds: ['marina-blue-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'high',
    claimBoundary:
      'Passenger capacity and the ~75–145 EUR age bands were not extractable, and a no-sighting trip earns a 50% discount rather than a free repeat. Confirm harbour, capacity and price before booking. AROC licence still to verify.'
  }
]);
