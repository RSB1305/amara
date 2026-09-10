import { defineKnowledgeSources } from '../../schema';

export const tarifaArrivalSources = defineKnowledgeSources([
  {
    id: 'tarifa-ayuntamiento-old-town-access',
    title: 'Control del acceso al casco histórico (Tarifa old-town access control)',
    publisher: 'Ayuntamiento de Tarifa',
    sourceType: 'official',
    url: 'https://www.aytotarifa.com/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal notice establishing the old-town vehicle access and parking rules (introduced 2021).',
    limitations: 'The 2021 rule set may have been amended since; later changes are not necessarily captured. Verify current signage/ordinance.',
    reuse: 'link-and-cite'
  },
  {
    id: 'alsa-tarifa',
    title: 'Tarifa — destinations',
    publisher: 'ALSA',
    sourceType: 'secondary',
    url: 'https://www.alsa.com/',
    accessedAt: '2026-09-10',
    scope: 'Coach operator page, authoritative for its own Tarifa services.',
    limitations: 'Timetables are seasonal and must be checked live per date.',
    reuse: 'link-and-cite'
  },
  {
    id: 'checkmybus-tarifa',
    title: 'Coach to Tarifa',
    publisher: 'CheckMyBus',
    sourceType: 'secondary',
    url: 'https://www.checkmybus.co.uk/',
    accessedAt: '2026-09-10',
    scope: 'Aggregator of coach connections across the operators serving Tarifa.',
    limitations: 'Aggregated listings may be incomplete; not an operator of record.',
    reuse: 'link-and-cite'
  },
  {
    id: 'rome2rio-malaga-tarifa',
    title: 'Málaga to Tarifa — bus',
    publisher: 'Rome2Rio',
    sourceType: 'secondary',
    url: 'https://www.rome2rio.com/',
    accessedAt: '2026-09-10',
    scope: 'Routing platform used to corroborate drive/coach distance and frequency band (Málaga–Tarifa).',
    limitations: 'Discovery/plausibility only; not authoritative for schedules or prices.',
    reuse: 'link-and-cite'
  },
  {
    id: 'directferries-tarifa-tanger',
    title: 'Tarifa–Tanger ferry',
    publisher: 'Direct Ferries',
    sourceType: 'secondary',
    url: 'https://www.directferries.com/',
    accessedAt: '2026-09-10',
    scope: 'Ferry comparison summary of frequency, crossing time and distance (Tarifa–Tanger-Ville).',
    limitations: 'A reseller/comparison site; operation and frequency are seasonal and weather-dependent.',
    reuse: 'link-and-cite'
  },
  {
    id: 'europapress-tarifa-ferry-cancellations',
    title: 'Las navieras del Puerto de Tarifa cancelan sus ferris por temporal',
    publisher: 'Europa Press',
    sourceType: 'secondary',
    url: 'https://www.europapress.es/',
    accessedAt: '2026-09-10',
    scope: 'News report evidencing storm-driven ferry cancellations at the Port of Tarifa (March 2026).',
    limitations: 'A single incident; evidences that cancellations happen in strong weather, not a rate.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifacozyhouse-parking',
    title: '¿Dónde aparcar en Tarifa este 2026?',
    publisher: 'TarifaCozyHouse',
    sourceType: 'secondary',
    url: 'https://tarifacozyhouse.com/',
    accessedAt: '2026-09-10',
    scope: 'Local host/blog tips on parking zones just outside the old town.',
    limitations: 'Non-official local source; parking spots and fees are seasonal and must be verified on site.',
    reuse: 'link-and-cite'
  },
  {
    id: 'divejourney-tarifa-logistics',
    title: 'Tarifa, Cádiz, and the Strait of Gibraltar',
    publisher: 'DiveJourney',
    sourceType: 'secondary',
    url: 'https://divejourney.io/',
    accessedAt: '2026-09-10',
    scope: 'Travel-logistics blog corroborating airport distances and road/bus context.',
    limitations: 'Secondary travel blog; corroboration only for distances/times.',
    reuse: 'link-and-cite'
  },
  {
    id: 'city-airport-taxis-malaga-tarifa',
    title: 'Taxi transfers from Málaga to Tarifa',
    publisher: 'City Airport Taxis',
    sourceType: 'secondary',
    url: 'https://city-airport-taxis.com/',
    accessedAt: '2026-09-10',
    scope: 'Commercial transfer provider page corroborating the Málaga–Tarifa drive distance/time.',
    limitations: 'Commercial operator; evidences that a transfer service exists and a rough drive time, not a guaranteed price.',
    reuse: 'link-and-cite'
  }
] as const);

export type TarifaArrivalSourceId = (typeof tarifaArrivalSources)[number]['id'];
