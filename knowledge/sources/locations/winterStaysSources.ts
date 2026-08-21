import { defineKnowledgeSources } from '../../schema';

export const winterStaysSources = defineKnowledgeSources([
  {
    id: 'winter-etc-travel-intent-2025', title: 'Monitoring Sentiment for Intra-European Travel — Autumn 2025 / Winter 2026', publisher: 'European Travel Commission', sourceType: 'secondary', url: 'https://etc-corporate.org/reports/monitoring-sentiment-for-intra-european-travel-autumn-25-winter-2026/', accessedAt: '2026-08-21', language: 'en', scope: 'European travel intent from October 2025 to March 2026, cross-border intent and number of planned holidays.', limitations: 'Surveyed intent in ten high-volume European source markets; it is not a booking count or a Spain-specific demand measure.', reuse: 'link-and-cite'
  },
  {
    id: 'winter-etc-season-shift-2025', title: 'European Tourism 2025 — Trends & Prospects Q3/2025', publisher: 'European Travel Commission', sourceType: 'secondary', url: 'https://etc-corporate.org/reports/european-tourism-2025-trends-prospects-q3-2025/', accessedAt: '2026-08-21', language: 'en', scope: 'Intent to shift future travel to different months and the stated role of crowding, cost and extreme heat.', limitations: 'European aggregate and future intention; it does not establish destination-level winter demand for AMARA.', reuse: 'link-and-cite'
  },
  {
    id: 'winter-tourspain-outlook-2025', title: 'Informes Tendencias Otoño-Invierno 2025-2026', publisher: 'Turespaña', sourceType: 'official', url: 'https://www.tourspain.es/en/press-releases-tourism/informes-tendencia-mercados-invierno-25-26/', accessedAt: '2026-08-21', language: 'es', scope: 'Spain winter outlook and source-market indicators for Germany, the Netherlands, Sweden and other markets.', limitations: 'Indicators differ by market and reporting definition; changes in spend, consideration and intention must not be treated as the same variable.', reuse: 'link-and-cite'
  },
  {
    id: 'winter-eu-jrc-regional-2024', title: 'Where do tourists flock in winter? The EU’s warmer regions win big', publisher: 'European Commission Joint Research Centre', sourceType: 'official', url: 'https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/where-do-tourists-flock-winter-eus-warmer-regions-win-big-2024-12-20_en', accessedAt: '2026-08-21', language: 'en', scope: 'Regional winter tourism concentration and the role of warmer southern EU regions.', limitations: 'The referenced season is historical and the page was rate-limited during normalization; retain as a supporting lead until its underlying dataset is captured.', reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-winter-streets-2026', title: 'Las calles', publisher: 'Turismo de Frigiliana', sourceType: 'official', url: 'https://turismofrigiliana.es/es/las-calles.html', accessedAt: '2026-08-21', language: 'es', scope: 'Official description of the historic streets and their terrain.', limitations: 'It is not a winter-climate source and does not describe every route, entrance or mobility need.', reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-winter-el-fuerte-2026', title: 'El Fuerte', publisher: 'Turismo de Frigiliana', sourceType: 'official', url: 'https://www.turismofrigiliana.es/es/el-fuerte.html', accessedAt: '2026-08-21', language: 'es', scope: 'Official walking-route context beginning in Frigiliana.', limitations: 'Route suitability, surfaces and current conditions must be checked for the specific day; it is not a universal casual walk.', reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-winter-garden-listing-2026', title: 'The Garden Restaurant', publisher: 'Ayuntamiento de Frigiliana', sourceType: 'official', url: 'https://frigiliana.es/places/the-garden-restaurant/', accessedAt: '2026-08-21', language: 'es', scope: 'One municipal business listing with explicit winter-opening context.', limitations: 'One listing cannot support a claim that Frigiliana hospitality is uniformly open throughout winter.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-winter-cueva-hours-2026', title: 'Cueva de Nerja — Horarios 2026', publisher: 'Fundación Cueva de Nerja', sourceType: 'official', url: 'https://cuevadenerja.es/', accessedAt: '2026-08-21', language: 'es', scope: 'Published 2026 opening periods and closure days for the Cueva de Nerja.', limitations: 'Opening hours are dynamic and must be checked again before travel or publication updates.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-winter-museum-hours-2026', title: 'Museo de Nerja — Horarios 2026', publisher: 'Fundación Cueva de Nerja', sourceType: 'official', url: 'https://cuevadenerja.es/museodenerja/', accessedAt: '2026-08-21', language: 'es', scope: 'Published 2026 opening pattern and year-round cultural-program description for Museo de Nerja.', limitations: 'The schedule may change and does not establish that all Nerja attractions operate year-round.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-winter-maro-shuttle-2025', title: 'Puesta en marcha del servicio de lanzadera a la playa de Maro para el verano 2025', publisher: 'Ayuntamiento de Nerja', sourceType: 'official', url: 'https://www.nerja.es/puesta-en-marcha-del-servicio-de-lanzadera-a-la-playa-de-maro-para-el-verano-2025/', accessedAt: '2026-08-21', language: 'es', scope: 'Evidence that the referenced Maro beach shuttle was a summer-only 2025 service.', limitations: 'Historical service dates; no conclusion about later seasons or all public transport follows.', reuse: 'link-and-cite'
  },
  {
    id: 'nerja-winter-lifeguard-2026', title: 'El servicio de vigilancia y socorrismo de playas se amplía hasta los 50 efectivos', publisher: 'Ayuntamiento de Nerja', sourceType: 'official', url: 'https://www.nerja.es/el-servicio-de-vigilancia-y-socorrismo-de-playas-se-amplia-hasta-los-50-efectivos/', accessedAt: '2026-08-21', language: 'es', scope: '2026 municipal description of the seasonal beach surveillance and lifeguard service.', limitations: 'Annual operating dates are dynamic; absence of this summer service is not a complete winter-safety assessment.', reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-winter-aemet-normals-1981-2010', title: 'Valores climatológicos normales: Tarifa — estación 6001', publisher: 'AEMET', sourceType: 'official', url: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=6001', accessedAt: '2026-08-21', language: 'es', scope: 'Tarifa station metadata and published monthly normals for 1981–2010.', limitations: 'Legacy normal period and station-specific climatology; climate means are not a forecast and detailed values belong to the Climate & Seasons knowledge owner.', reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-winter-junta-wind-2026', title: 'Viento en Andalucía', publisher: 'Junta de Andalucía', sourceType: 'official', url: 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page-%C3%ADndice/-/asset_publisher/zX2ouZa4r1Rf/content/viento/20151', accessedAt: '2026-08-21', language: 'es', scope: 'Regional qualitative context for Levante and Poniente and the Estrecho wind regime.', limitations: 'No day-specific forecast and insufficient visible metadata for precise seasonal frequency claims.', reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-winter-christmas-2025-26', title: 'Agenda Navidad “Vive Diciembre y Enero” 2025/26 en Tarifa', publisher: 'Turismo de Tarifa', sourceType: 'official', url: 'https://turismodetarifa.com/evento/agenda-navidad-vive-diciembre-y-enero-2025-26-en-tarifa/', accessedAt: '2026-08-21', language: 'es', scope: 'Example of a municipal winter cultural and community programme.', limitations: 'Historical programme only; it cannot be promised for later winters.', reuse: 'link-and-cite'
  },
  {
    id: 'winter-nerja-rentals-serp-2026', title: 'Nerja Winter Rentals', publisher: 'Nerja Winter Rentals', sourceType: 'discovery-tool', url: 'https://nerjawinterrentals.com/', accessedAt: '2026-08-21', language: 'en', scope: 'Qualitative evidence that English “winter rentals Nerja” SERPs include monthly-rental expectations.', limitations: 'Commercial competitor and no source for market size, quality or neutral destination facts.', reuse: 'internal-only'
  },
  {
    id: 'winter-nerja-overwinteren-serp-2026', title: 'Overwinteren in Nerja', publisher: 'Aktiva Tours', sourceType: 'discovery-tool', url: 'https://www.aktivatours.nl/reis/groepsreis-overwinteren-in-nerja/GWOVWNE', accessedAt: '2026-08-21', language: 'nl', scope: 'Qualitative evidence that Dutch “overwinteren” can imply a multi-week packaged stay.', limitations: 'Commercial offer and no quantitative demand evidence.', reuse: 'internal-only'
  },
  {
    id: 'torrox-winter-climate-claim-2008', title: 'El pueblo malagueño de Torrox tiene el mejor clima de Europa por su geografía', publisher: 'RTVE / EFE', sourceType: 'secondary', url: 'https://www.rtve.es/noticias/20080602/el-pueblo-malagueno-de-torrox-tiene-el-mejor-clima-de-europa-por-su-geografia/72990.shtml', accessedAt: '2026-08-21', language: 'es', scope: 'Contemporary account of the 2008 Meteogroup comparison, sponsor, 21 Mediterranean coastal comparators and seven-year period.', limitations: 'The full commissioned study and peer-review record were not found; the result is specific to Torrox and is not a current Europe-wide official ranking.', reuse: 'link-and-cite'
  },
  {
    id: 'amara-frigiliana-winter-baseline-2026', title: 'Frigiliana winter-stays public authoring baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'src/content/frigilianaWinterStaysContent.ts and src/content/vacationRentalEntities.ts', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Current heating, bathroom underfloor-heating, pellet-stove, Wi-Fi and maximum-stay authoring.', limitations: 'Operator-authored property claims require a dated property evidence pack and current commercial confirmation before re-publication.', reuse: 'internal-only'
  },
  {
    id: 'amara-nerja-winter-baseline-2026', title: 'AMARA Playa winter-stays planning baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'No dedicated Nerja winter-stays content owner exists as of 2026-08-21.', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Records the absence of a dedicated Nerja winter page and the need for an object-specific evidence pack.', limitations: 'It contains no verified heating, Wi-Fi, laundry, terrace-sun or winter-duration claim.', reuse: 'internal-only'
  },
  {
    id: 'amara-tarifa-winter-baseline-2026', title: 'Tarifa winter-stays public authoring baseline', publisher: 'AMARA Lodging', sourceType: 'internal-editorial-baseline', locator: 'src/content/tarifaWinterStaysContent.ts and src/content/vacationRentalEntities.ts', accessedAt: '2026-08-21', language: 'multilingual', scope: 'Current host observations and property claims for AMARA Family & Surf.', limitations: 'Personal experience remains first-party and property features, routes, speed and commercial duration need dated evidence.', reuse: 'internal-only'
  },
  {
    id: 'winter-gpt-raw-2026', title: 'AMARA Deep Research: Winteraufenthalte in Frigiliana, Nerja und Tarifa', publisher: 'GPT Deep Research', sourceType: 'operator-provided', url: 'https://drive.google.com/file/d/1WjKtOgNX6nd9wDTE3TuMHMxMoX2khDhA/view?usp=drivesdk', accessedAt: '2026-08-21', language: 'de', scope: 'Raw provider dossier, source leads, fact tables, claim boundaries and coverage proposal.', limitations: 'Research output is not itself a primary source; normalized facts must cite the underlying evidence.', reuse: 'internal-only'
  },
  {
    id: 'winter-gemini-raw-2026', title: 'Version 2 — Winter stays research', publisher: 'Gemini Deep Research', sourceType: 'operator-provided', url: 'https://drive.google.com/file/d/1HkVV37jcXhHQJFR7uYazytJ56Pbdei5s/view?usp=drivesdk', accessedAt: '2026-08-21', language: 'de', scope: 'Raw provider dossier with motive framing, page-order proposals and first-party questions.', limitations: 'No direct source URLs and several unsupported generalizations; use as a lead and question set, not as sole factual evidence.', reuse: 'internal-only'
  }
] as const);

export type WinterStaysSourceId = (typeof winterStaysSources)[number]['id'];
