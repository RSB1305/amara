import { defineKnowledgeSources } from '../../schema';

export const tarifaFamilySources = defineKnowledgeSources([
  {
    id: 'amara-research-tarifa-family-2026',
    title: 'AMARA operator research — family-friendly activities in Tarifa (deep-research report)',
    publisher: 'AMARA',
    sourceType: 'operator-provided',
    accessedAt: '2026-09-09',
    language: 'de',
    scope:
      'Operator-commissioned deep-research report on family activities in and around Tarifa: beaches, whale watching, nature parks, riding, kite tasters, day trips, age suitability and sample day plans, cross-checked against official and provider sources on 2026-09-09.',
    limitations:
      'Researched compilation, not a first-hand AMARA assessment. Prices, schedules, ratings and seasonal access are time-sensitive; provider selection still needs operator field validation before any recommendation is approved.',
    reuse: 'internal-only'
  },
  {
    id: 'turismo-tarifa-visitor-guide-2026',
    title: 'Turismo de Tarifa — official visitor guide (beaches, nature, birdwatching)',
    publisher: 'Turismo de Tarifa',
    sourceType: 'official',
    url: 'https://turismodetarifa.com/en/beaches/',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official municipal context for Tarifa beaches (Playa Chica, Los Lances Sur described as a family beach with showers, walkways and gastronomy), the Parque Natural del Estrecho and the Cazalla birdwatching point.',
    limitations:
      'A destination directory records presence and facilities, not current staffing, exact hours, water safety on a given day or seasonal transport to each beach.',
    reuse: 'link-and-cite'
  },
  {
    id: 'spain-info-playa-chica-2026',
    title: 'Spain.info — Playa Chica, Tarifa',
    publisher: 'Turespaña (spain.info)',
    sourceType: 'official',
    url: 'https://www.spain.info/en/beach/playa-chica-tarifa/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Official national tourism listing describing Playa Chica as a small central beach with comparatively calm water, easy access, toilets, showers, foot showers and a children play area.',
    limitations:
      'Describes facilities and general conditions; the beach remains wind-exposed and small, and crowding and parking vary by season and day.',
    reuse: 'link-and-cite'
  },
  {
    id: 'firmm-whale-watching-2026',
    title: 'firmm — whale and dolphin watching from Tarifa harbour',
    publisher: 'firmm (Foundation for Information and Research on Marine Mammals)',
    sourceType: 'secondary',
    url: 'https://www.firmm.org/en/whale-watching',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider page documenting 2-hour and 3-hour trips from Tarifa harbour, an explicit family/child pricing tier (babies under 1 free), a stated ~99% sighting rate with no species or orca guarantee, a 2026 season running until early November, and weather-driven cancellations.',
    limitations:
      'Single-provider page; prices, exact season end, daily sailings and cancellation terms are volatile and must be reconfirmed at booking and on the day of travel.',
    reuse: 'link-and-cite'
  },
  {
    id: 'turmares-whale-watching-2026',
    title: 'Turmares Tarifa — whale watching excursions',
    publisher: 'Turmares Tarifa',
    sourceType: 'secondary',
    url: 'https://www.turmares.com/en/excursions/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Alternative whale-watching operator from Tarifa harbour, roughly March–October season, with published guest guidance on sun/wind protection, secure footwear and seasickness precautions.',
    limitations:
      'Single-provider page; some recent family reviews mention fuller/larger boats. Times, prices and season are volatile and need reconfirmation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'subcielo-kite-kids-2026',
    title: 'Subcielo Kite School Tarifa — kitesurfing course for children',
    publisher: 'Subcielo Kite School Tarifa',
    sourceType: 'secondary',
    url: 'https://www.subcielokiteschooltarifa.com/en/kitesurfing-course-for-children/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider page for a private children kitesurf course with adapted equipment, helmet, harness, wetsuit and insurance, taught from roughly age eight at a condition-appropriate spot.',
    limitations:
      'Single-provider marketing page; minimum age, price and suitability depend on wind, weight and swimming ability and must be confirmed per child at booking.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aventuras-del-sur-2026',
    title: 'Aventuras del Sur — horse riding in Tarifa',
    publisher: 'Aventuras del Sur',
    sourceType: 'secondary',
    url: 'https://aventurasdelsur.com/en/horse-riding-tarifa/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider offering beginner/children riding lessons and beach/natural-park rides around Bolonia, with helmet, guide and accident insurance stated for guided routes.',
    limitations:
      'Single-provider page; minimum age, weight limits, price and route depend on the operator and season and must be confirmed at booking.',
    reuse: 'link-and-cite'
  },
  {
    id: 'electric-bikes-tarifa-2026',
    title: 'Electric Bikes Tarifa — guided e-bike / e-MTB tours',
    publisher: 'Electric Bikes Tarifa',
    sourceType: 'secondary',
    url: 'https://www.electricbikestarifa.com/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Provider advertising guided e-bike/e-MTB tours with routes personalised by level and age group, best suited to teenagers.',
    limitations:
      'Single-provider page; available child frame sizes, minimum age and price need confirmation. Positive ratings rest on small review samples.',
    reuse: 'link-and-cite'
  },
  {
    id: 'zoo-de-castellar-2026',
    title: 'Zoo de Castellar — animal rescue centre, tickets',
    publisher: 'Zoo de Castellar',
    sourceType: 'secondary',
    url: 'https://www.zoodecastellar.es/venta-entradas',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Operator ticket page for an animal-rescue zoo in Castellar de la Frontera (roughly 55–65 minutes by car), with online purchase recommended to avoid queues.',
    limitations:
      'Prices and opening hours change seasonally; site-wide accessibility is unspecified and one recent family review criticised the car park.',
    reuse: 'link-and-cite'
  },
  {
    id: 'baelo-claudia-visit-2026',
    title: 'Baelo Claudia (Bolonia) — Roman site visit information',
    publisher: 'Junta de Andalucía',
    sourceType: 'official',
    url: 'https://www.museosdeandalucia.es/web/conjuntoarqueologicobaeloclaudia',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official context for the Baelo Claudia Roman site at Bolonia beach, with a documented accessible route, reserved disabled parking and lift access to an alternative entrance.',
    limitations:
      'Current sources disagree on the exact entry-fee regime (roughly 0–5 EUR); opening days and fee should be checked on site. The Bolonia dune itself is not pushchair/wheelchair friendly.',
    reuse: 'link-and-cite'
  },
  {
    id: 'bahia-park-algeciras-2026',
    title: 'Bahía Park Algeciras — official website (closure notice)',
    publisher: 'Bahía Park',
    sourceType: 'official',
    url: 'https://www.bahiapark.com/',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official operator site for the Algeciras water park, prominently stating closure until June 2027 ("CERRADOS HASTA JUNIO DE 2027").',
    limitations:
      'Not an option for autumn 2026 travel. 2027 prices and reopening details are not yet reliable.',
    reuse: 'link-and-cite'
  },
  {
    id: 'balearia-tarifa-tanger-2026',
    title: 'Baleària — ferry Tarifa–Tanger Ville',
    publisher: 'Baleària',
    sourceType: 'official',
    url: 'https://www.balearia.com/en/routes-timetables/ferry-tarifa-tanger-ville',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Operator page for the direct Tarifa–Tanger Ville ferry (roughly one hour, arriving next to the medina), recommending advance booking and required travel documents at check-in.',
    limitations:
      'A full day trip typically runs 8–10 hours with border formalities; fares vary and sailings can be weather-dependent. Each traveller needs their own valid documents; entry/visa rules depend on nationality.',
    reuse: 'link-and-cite'
  },
  {
    id: 'visit-gibraltar-shuttle-2026',
    title: 'Visit Gibraltar — Nature Reserve shuttle bus',
    publisher: 'Government of Gibraltar (visitgibraltar.gi)',
    sourceType: 'official',
    url: 'https://www.visitgibraltar.gi/see-and-do/nature-reserve-shuttle-bus',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Official page for the Upper Rock nature-reserve shuttle from Marketplace (stated £40 per person including reserve entry), running while the cable car is out of service.',
    limitations:
      'Fares and timetable change; new July 2026 border arrangements mean current official travel advice should be checked. Macaques are wild animals and must not be fed or touched.',
    reuse: 'link-and-cite'
  },
  {
    id: 'gibraltar-cable-car-2026',
    title: 'Gibraltar Nature Reserve — cable car status',
    publisher: 'Gibraltar Nature Reserve',
    sourceType: 'official',
    url: 'https://naturereserve.gi/experiences/cable-car/',
    accessedAt: '2026-09-09',
    language: 'en',
    scope:
      'Official notice that the Gibraltar cable car is closed for full refurbishment and expected to reopen no earlier than 2027.',
    limitations:
      'Reopening date is provisional; do not plan from older travel blogs that assume the cable car is running.',
    reuse: 'link-and-cite'
  },
  {
    id: 'ctm-campo-gibraltar-m150-2026',
    title: 'Consorcio de Transporte Metropolitano Campo de Gibraltar — line M-150 (Tarifa–Algeciras)',
    publisher: 'Consorcio de Transporte Metropolitano del Campo de Gibraltar',
    sourceType: 'official',
    url: 'https://www.cmtcampodegibraltar.es/',
    accessedAt: '2026-09-09',
    language: 'es',
    scope:
      'Official regional bus context: the M-150 Tarifa–Algeciras runs several times daily on a timetable valid 2026-09-07 to 2027-06-20; direct services toward La Línea/Gibraltar are much sparser.',
    limitations:
      'Timetables change between summer and off-season; beach/Bolonia services are strongly seasonal. Confirm the return time on the day of travel.',
    reuse: 'link-and-cite'
  }
] as const);

export type TarifaFamilySourceId = (typeof tarifaFamilySources)[number]['id'];
