import { defineKnowledgeSources } from '../../schema';

export const frigilianaArrivalSources = defineKnowledgeSources([
  {
    id: 'frigiliana-ayuntamiento-bus-operator-2026',
    title: 'Nuevo horario de autobuses Nerja–Frigiliana',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/nuevo-horario-de-autobuses-nerja-frigiliana/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Dated municipal announcement of the operator change on the Nerja⇄Frigiliana line and the service character.',
    limitations:
      'Confirms the operator change from 2026-08-10; it does not turn individual departure times into a durable timetable guarantee.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-bus-timetable-page',
    title: 'Horario de autobuses Frigiliana–Nerja',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/horario-autobuses/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Live municipal timetable surface for the Nerja⇄Frigiliana line.',
    limitations:
      'Caching/version conflict observed: the index showed the new operator and times while a cached rendering still showed the previous operator. Use only as a live link, never as a frozen fact.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aena-malaga-airport-bus',
    title: 'Málaga-Costa del Sol Airport — how to get here by bus',
    publisher: 'Aena',
    sourceType: 'official',
    url: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
    accessedAt: '2026-09-10',
    scope: 'Airport authority page listing the ALSA Nerja–airport coach line.',
    limitations: 'Confirms that a line exists; individual departures belong to ALSA and a live search.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aena-malaga-airport-train',
    title: 'Málaga-Costa del Sol Airport — how to get here by train',
    publisher: 'Aena',
    sourceType: 'official',
    url: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/train.html',
    accessedAt: '2026-09-10',
    scope: 'Airport authority page for the C1 commuter train to Málaga María Zambrano.',
    limitations: 'The stated journey time covers only the airport–María Zambrano train leg, not the whole transfer chain.',
    reuse: 'link-and-cite'
  },
  {
    id: 'aena-malaga-airport-taxi-vtc',
    title: 'Málaga-Costa del Sol Airport — taxi and VTC',
    publisher: 'Aena',
    sourceType: 'official',
    url: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/taxi.html',
    accessedAt: '2026-09-10',
    scope: 'Airport authority confirmation of taxi and VTC (Uber/Bolt) pick-up areas at the airport.',
    limitations: 'Applies to the airport only; it does not establish app availability in Frigiliana.',
    reuse: 'link-and-cite'
  },
  {
    id: 'alsa-malaga-nerja',
    title: 'Málaga–Nerja coach service',
    publisher: 'ALSA',
    sourceType: 'secondary',
    url: 'https://www.alsa.com/en/coach/malaga-nerja',
    accessedAt: '2026-09-10',
    scope: 'Transport operator page for the Málaga↔Nerja connection, authoritative for its own service.',
    limitations: 'Published frequency mixes different Málaga departure points; not to be read as airport frequency. Live date-specific search required.',
    reuse: 'link-and-cite'
  },
  {
    id: 'alsa-malaga-airport-connections',
    title: 'Málaga-Costa del Sol Airport connections',
    publisher: 'ALSA',
    sourceType: 'secondary',
    url: 'https://www.alsa.com/en/airports/malaga-costa-del-sol',
    accessedAt: '2026-09-10',
    scope: 'Operator overview of airport coach connections.',
    limitations: 'The operator itself requires a date-specific search for current departures and prices.',
    reuse: 'link-and-cite'
  },
  {
    id: 'alsa-nerja-regional',
    title: 'Nerja regional coach connections (Málaga, Granada)',
    publisher: 'ALSA',
    sourceType: 'secondary',
    url: 'https://www.alsa.com/en/coach/nerja-granada',
    accessedAt: '2026-09-10',
    scope: 'Operator pages showing Nerja as a regional hub towards Málaga and Granada.',
    limitations: 'Schedules and frequencies are live data and must be checked per date.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-tourism-situacion',
    title: 'Situación / Location',
    publisher: 'Turismo de Frigiliana',
    sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/situacion.html',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official destination page for the A-7 road route and approximate drive time.',
    limitations: 'Drive times are approximate and the page also carries outdated bus data, so it is not the bus source of truth.',
    reuse: 'link-and-cite'
  },
  {
    id: 'rome2rio-agp-frigiliana',
    title: 'Málaga Airport (AGP) to Frigiliana route model',
    publisher: 'Rome2Rio',
    sourceType: 'secondary',
    url: 'https://www.rome2rio.com/s/Malaga-Airport-AGP/Frigiliana',
    accessedAt: '2026-09-10',
    scope: 'Routing aggregator used only to corroborate road distance and drive time.',
    limitations: 'Discovery/plausibility only; prices and multimodal suggestions are not authoritative.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-taxi-directory',
    title: 'Taxi 1–4 Frigiliana (municipal directory)',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/places/taxi-1-frigiliana/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal directory listing the local taxi licences, phone contacts, airport-transfer/VTC capacity (Taxi 2/3) and the adapted 7-seater (Taxi 4).',
    limitations: 'Contacts only; it does not establish live availability, price or that a taxi is always obtainable on demand.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ordenanza-circulacion',
    title: 'Ordenanza Municipal de Tráfico y Circulación',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/wp-content/uploads/2015/08/ordenanza_de_circulacion.pdf',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Primary legal source for stopping, loading zones and circulation rules (Art. 12, 17, 34).',
    limitations: 'General rule only; concrete on-site signage and Policía Local instructions take priority and can restrict further.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-policia-local-contacts',
    title: 'Policía Local — teléfonos y direcciones',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/ayuntamiento-de-frigiliana/telefonos-y-direcciones/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal contact directory including the Policía Local number for signage/access queries.',
    limitations: 'Contacts and hours can change; not a substitute for on-site instructions.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-stop-relocation',
    title: 'Cambio de parada de autobús y taxis debido a la feria',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/cambio-de-parada-de-autobus-y-taxis-debido-a-la-feria/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal notice confirming Plaza del Ingenio as the usual bus/taxi stop by documenting its temporary relocation during events.',
    limitations: 'Event-specific; confirms the regular stop indirectly and that it can move on event days.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-tourism-old-town-route',
    title: 'Desde la iglesia al Santo Cristo',
    publisher: 'Turismo de Frigiliana',
    sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/desde-la-iglesia-al-santo-cristo.html',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official route description evidencing steep, narrow stairs and gradients in parts of the historic core.',
    limitations: 'Describes a specific route; not transferable to every accommodation micro-route.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-ayuntamiento-obras-historic-centre',
    title: 'Obras de mejora en el casco histórico',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/obras-de-mejora-en-el-casco-historico/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal evidence of the historic cobblestones and gradients (slippery under certain conditions).',
    limitations: 'Older page; documents durable topography, not a route-specific accessibility measurement.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-tourism-hiking-la-lastra-el-fuerte',
    title: 'La Lastra / El Fuerte official hiking routes',
    publisher: 'Turismo de Frigiliana',
    sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/la-lastra.html',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official hiking pages confirming that several walks start directly at Plaza del Ingenio.',
    limitations: 'Establishes walk-from-village starts for some routes, not that all trailheads are reachable without a vehicle.',
    reuse: 'link-and-cite'
  },
  {
    id: 'nerja-ayuntamiento-maro-shuttle-2026',
    title: 'Entra en servicio el autobús lanzadera de la Playa de Maro',
    publisher: 'Ayuntamiento de Nerja',
    sourceType: 'official',
    url: 'https://www.nerja.es/entra-en-servicio-el-autobus-lanzadera-de-la-playa-de-maro/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Current municipal source for the seasonal 2026 Playa de Maro shuttle (runs until 15 September 2026).',
    limitations: 'Seasonal 2026 service only; must not be stored as a year-round offer.',
    reuse: 'link-and-cite'
  },
  {
    id: 'spain-info-nerja-bus-station',
    title: 'Nerja Bus Station',
    publisher: 'Turespaña (Spain.info)',
    sourceType: 'official',
    url: 'https://www.spain.info/en/transport/nerja-bus-station/',
    accessedAt: '2026-09-10',
    scope: 'National tourism authority reference for the Nerja intercity stop at Avenida de Pescia.',
    limitations: 'The local Frigiliana line may use a specific curbside stop that differs from the intercity station.',
    reuse: 'link-and-cite'
  }
] as const);

export type FrigilianaArrivalSourceId = (typeof frigilianaArrivalSources)[number]['id'];
