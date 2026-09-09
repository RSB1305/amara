import { defineKnowledgeSources } from '../../schema';

export const tarifaWhaleWatchingSources = defineKnowledgeSources([
  {
    id: 'amara-research-tarifa-whale-2026',
    title: 'AMARA operator research — whale watching in Tarifa (analytical travel report)',
    publisher: 'AMARA',
    sourceType: 'operator-provided',
    accessedAt: '2026-09-09',
    language: 'de',
    scope:
      'Operator-commissioned analytical report on Tarifa whale watching: operators, boats, prices, species, seasonality, sighting-rate caveats, Spanish cetacean law, safety/accessibility, logistics and budgets, cross-checked against official and provider sources on 2026-09-09.',
    limitations:
      'Researched compilation, not a first-hand AMARA assessment. Prices, schedules, boat details and season are time-sensitive; individual AROC licences were not verified per operator.',
    reuse: 'internal-only'
  },
  {
    id: 'turismo-tarifa-whale-watching-2026',
    title: 'Turismo de Tarifa — whale watching and listed operators',
    publisher: 'Turismo de Tarifa',
    sourceType: 'official',
    url: 'https://turismodetarifa.com/en/what-to-do/whale-watching/',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official municipal page describing whale watching from Puerto de Tarifa, a stated general sighting probability above 90% for the standard two-hour trip, the strait setting, and five currently listed operators: Aventura Tarifa, firmm España, Turmares, TOP Tarifa and Marina Blue.',
    limitations:
      'A destination listing records presence, not an individually verified AROC licence, current pricing, boarding conditions or an audited species-specific sighting rate.',
    reuse: 'link-and-cite'
  },
  {
    id: 'firmm-tarifa-2026',
    title: 'firmm España — whale watching, boats, prices and conduct',
    publisher: 'firmm (Foundation for Information and Research on Marine Mammals)',
    sourceType: 'secondary',
    url: 'https://www.firmm.org/en/whale-watching',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider documentation of 2h and 3h(orca, July/August only) trips, child/baby pricing tiers, German/English/Spanish briefings, boats VISION and SPIRIT with a wheelchair space and toilet, life jackets for all, free-cancellation and no-sighting repeat-ticket policy, pregnancy and drone rules, and a 2026 season ending 2026-11-07.',
    limitations:
      'Single-provider page; the ~99% figure is an operator claim measuring at least one cetacean species, not an orca or species guarantee. Times, prices and season are volatile.',
    reuse: 'link-and-cite'
  },
  {
    id: 'turmares-tarifa-2026',
    title: 'Turmares Tarifa — fleet, prices and excursions',
    publisher: 'Turmares Tarifa',
    sourceType: 'secondary',
    url: 'https://www.turmares.com/en/excursions/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider context for a three-boat fleet: the large Jackelin (underwater lounge, toilet, wheelchair ramp), the fast 62-person Pirata de Sálvora and the 12-person hybrid research boat Dolphin Tarifa; 2h/3h pricing with child tiers; multilingual crew.',
    limitations:
      'Single-provider page; a full guaranteed language matrix and a clear voluntary customer cancellation window were not published. Prices and departures are volatile.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aventura-tarifa-2026',
    title: 'Aventura Tarifa — small-group RIB whale watching',
    publisher: 'Aventura Tarifa',
    sourceType: 'secondary',
    url: 'https://www.aventuratarifa.com',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Provider offering a fast small RIB/semi-rigid limited to about ten guests with a marine biologist and skipper; regular 2h at roughly 65 EUR per seat (same price adult or child), orca page shown at roughly 80 EUR.',
    limitations:
      'The orca page still carries explicit 2025-season text and must be confirmed for 2026; no reliable public cancellation, weather-refund or no-sighting policy was found. Confirm in writing before payment.',
    reuse: 'link-and-cite'
  },
  {
    id: 'top-tarifa-2026',
    title: 'TOP Tarifa — Zodiac/RIB whale watching and private charters',
    publisher: 'TOP Tarifa',
    sourceType: 'secondary',
    url: 'https://toptarifa.es',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Provider offering a Zodiac/RIB limited to about ten guests with a marine biologist: whale/dolphin 2h at roughly 65 EUR, orca ~2.5h at roughly 80 EUR, and private charters (about 650 EUR whale/dolphin, 800 EUR orca) meeting at Muelle 2.',
    limitations:
      'Current website domain/phone differ from the city listing; guests may get wet; no clear public direct-cancellation policy was verified. Reconfirm contact and terms before booking.',
    reuse: 'link-and-cite'
  },
  {
    id: 'marina-blue-tarifa-2026',
    title: 'Marina Blue — motor-yacht whale watching',
    publisher: 'Marina Blue',
    sourceType: 'secondary',
    url: 'https://marinablue.es',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Provider positioned at the comfortable/exclusive end with a 12.75 m motor yacht (MIAMITA), stated year-round operation Mon–Sun 10–19, weather-cancellation voucher/refund and a 50% discount rather than a free repeat on a no-sighting trip.',
    limitations:
      'Public passenger capacity and the exact age mapping of the roughly 75–145 EUR price bands were not extractable; departure harbour (Tarifa vs Algeciras) must be confirmed before planning transfers.',
    reuse: 'link-and-cite'
  },
  {
    id: 'miteco-aroc-cetaceans-2026',
    title: 'MITECO — AROC authorisation and cetacean approach rules',
    publisher: 'Ministerio para la Transición Ecológica y el Reto Demográfico (MITECO)',
    sourceType: 'official',
    url: 'https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/biodiversidad-marina/cetaceos.html',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official statement that regulated recreational cetacean watching requires prior AROC authorisation (Law 41/2010, art. 3.4), with an official search service and list of authorised companies.',
    limitations:
      'The dynamic per-company results and the XLSX list could not be reliably extracted down to the individual Tarifa operators in this research; the AROC search with "Puerto Base: Tarifa" remains the authoritative licence check.',
    reuse: 'link-and-cite'
  },
  {
    id: 'boe-rd-1727-2007',
    title: 'Real Decreto 1727/2007 — measures to protect cetaceans',
    publisher: 'Boletín Oficial del Estado (BOE)',
    sourceType: 'official',
    url: 'https://www.boe.es/eli/es/rd/2007/12/21/1727',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Legal text defining a 500 m mobile protection space around cetaceans, a 0–60 m exclusion zone, a 60–300 m restricted zone (max two boats), a 300–500 m approach zone, a 4-knot limit, ~30° approach, and prohibitions on encircling, feeding, touching, chasing, splitting groups and acoustic luring.',
    limitations:
      'Primary legal source; enforcement, current AROC holders and day-to-day operator compliance are separate matters to verify.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aemet-estrecho-marine-2026',
    title: 'AEMET — marine forecast for the Strait of Gibraltar (Estrecho)',
    publisher: 'Agencia Estatal de Meteorología (AEMET)',
    sourceType: 'official',
    url: 'https://www.aemet.es/en/eltiempo/prediccion/maritima',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official maritime wind and wave forecast for the Estrecho, with warnings ~48h, text forecasts ~24h and charts several days ahead; the reference for deciding whether a trip is likely to sail.',
    limitations:
      'A forecast, not a guarantee; local sea state driven by Levante/Poniente winds can change quickly and operators adjust or cancel at short notice.',
    reuse: 'link-and-cite'
  },
  {
    id: 'cetacean-science-strait-gibraltar',
    title: 'Peer-reviewed cetacean ecology of the Strait of Gibraltar (de Stephanis, Esteban, Tenan et al.)',
    publisher: 'Various peer-reviewed journals',
    sourceType: 'secondary',
    url: 'https://scholar.google.com/scholar?q=cetaceans+strait+of+gibraltar+de+Stephanis+Esteban+Tenan',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Scientific basis for resident/seasonal status: the strait as an important cetacean habitat, orcas linked to Atlantic bluefin tuna and the tuna fishery (Esteban et al.), and effects of vessel/whale-watching traffic on bottlenose dolphin survival (Tenan et al.).',
    limitations:
      'Supports species status and the rationale for distance/capacity rules, not tour-level sighting statistics for any operator or year.',
    reuse: 'link-and-cite'
  }
] as const);

export type TarifaWhaleWatchingSourceId = (typeof tarifaWhaleWatchingSources)[number]['id'];
