import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface GettingToTarifaSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string, string];
}

export interface GettingToTarifaLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: GettingToTarifaSection[];
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    areasLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const gettingToTarifaSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-getting-to-tarifa-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Getting to Tarifa & AMARA: Car, Bus, Airports and Port',
      description: 'Plan the complete journey to Tarifa and the final arrival at AMARA Family & Surf, Mar Adriático 29, by car, bus, airport or ferry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Anreise nach Tarifa & zu AMARA: Auto, Bus, Flughafen und Hafen',
      description: 'Plant die gesamte Anreise nach Tarifa und die letzte Etappe zu AMARA Family & Surf, Mar Adriático 29 – mit Auto, Bus, Flug oder Fähre.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cómo llegar a Tarifa y AMARA: coche, autobús, aeropuerto y puerto',
      description: 'Planificad el viaje completo a Tarifa y el último tramo hasta AMARA Family & Surf, Mar Adriático 29, en coche, autobús, avión o ferry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Naar Tarifa en AMARA: auto, bus, luchthaven en haven',
      description: 'Plan de volledige reis naar Tarifa en het laatste deel naar AMARA Family & Surf, Mar Adriático 29, per auto, bus, vliegtuig of veerboot.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Resa till Tarifa och AMARA: bil, buss, flygplats och hamn',
      description: 'Planera hela resan till Tarifa och den sista sträckan till AMARA Family & Surf, Mar Adriático 29, med bil, buss, flyg eller färja.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sharedSources = {
  tarifaTourism: 'https://turismodetarifa.com/en/how-to-arrive/',
  malagaAirport: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
  jerezAirport: 'https://www.aena.es/en/jerez/getting-there/bus.html',
  campoGibraltar: 'https://siu.ctmcg.es/es/horarios.php',
  comes: 'https://www.tgcomes.es/',
  portMap: 'https://www.apba.es/en/'
} as const;

export const gettingToTarifaContent: Record<AmaraLanguage, GettingToTarifaLocale> = {
  en: {
    navLabel: 'Arrival & Mobility',
    hero: {
      eyebrow: 'Tarifa arrival guide',
      title: 'Getting to Tarifa',
      standfirst: 'Reaching Tarifa is only the first part of the journey. If you are staying at AMARA Family & Surf, your real destination is Mar Adriático 29 in La Marina — so every option below continues all the way to the apartment, not just to the town name on a map.',
      note: 'A host-written planning guide. Live transport times, border requirements and ferry operations should always be checked close to travel.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'AMARA address', value: 'Mar Adriático 29' },
      { label: 'Neighbourhood', value: 'La Marina' },
      { label: 'At the apartment', value: 'Reserved underground parking' },
      { label: 'Everyday convenience', value: 'Supermarket directly opposite' }
    ],
    sections: [
      {
        id: 'by-car',
        eyebrow: '01 · By road',
        title: 'By car to AMARA',
        paragraphs: [
          'Tarifa is reached by the N-340: the approach from Málaga runs via the western Costa del Sol and Algeciras, while the Cádiz-side approach comes through the Atlantic coast corridor. Traffic and road conditions can change the final part of either journey.',
          'For an overnight stay, “Tarifa” is not a precise enough destination. Set your navigation for Mar Adriático 29 before entering town, especially when you are arriving with luggage or after dark.',
          'AMARA Family & Surf is in La Marina and includes a reserved underground parking space. Detailed building and garage access belongs in the private arrival information sent to booked guests, so it is not reproduced on this public page.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '02 · Public transport',
        title: 'By bus to AMARA',
        paragraphs: [
          'Tarifa has coach connections with nearby cities, and the Campo de Gibraltar network lists the Algeciras–Tarifa service. The Tarifa coach stop is on Calle Batalla del Salado; routes and departure times must be checked for the travel date.',
          'A coach gets you to Tarifa, not to the apartment door. Leave room in the plan for the final local leg, particularly with children, boards or several bags.',
          'For AMARA, continue to Mar Adriático 29 in La Marina. With substantial luggage, a local taxi is the calmest last mile; if you prefer to walk, check the live route from the coach stop before departure rather than relying on a saved estimate.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '03 · Flying in',
        title: 'From the main airports to Tarifa + AMARA',
        paragraphs: [
          'Málaga, Gibraltar and Jerez are the main practical airports for Tarifa. Málaga offers the broadest flight choice; Gibraltar is geographically closer but involves onward road transport and the relevant entry requirements; Jerez approaches Tarifa from the Cádiz side.',
          'None of these airports places you directly at the apartment. Compare a rental car or pre-arranged transfer with current public-transport connections for your exact arrival time. From Málaga Airport, Aena lists coach links toward Algeciras and La Línea; from Jerez Airport, Aena lists bus links toward Jerez and Cádiz, followed by an onward connection to Tarifa.',
          'Whichever airport you choose, give the driver or navigation system the complete destination: AMARA Family & Surf, Mar Adriático 29, Tarifa. If you hire a car, the reserved underground space removes the need to search for overnight street parking on arrival.'
        ]
      },
      {
        id: 'port',
        eyebrow: '04 · Across the Strait',
        title: 'From Tarifa Port / Morocco to AMARA',
        paragraphs: [
          'Tarifa’s passenger port serves the connection with Tangier Ville. Ferry operation is sensitive to weather and operator decisions, so the live sailing status matters more than any timetable saved in advance.',
          'After passport and baggage formalities, the ferry journey still needs a town-side last mile. Keep onward plans flexible and avoid arranging a tight connection immediately after the scheduled arrival.',
          'AMARA is at Mar Adriático 29 in La Marina, not at the port. With luggage, continue by local taxi; without heavy bags, check the current walking route before travel. Private check-in instructions remain in the booked-guest arrival message.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · Daily life',
        title: 'Staying at AMARA without a car',
        paragraphs: [
          'A stay in Tarifa town can work without using a car every day. The Old Town, ordinary services and much of the urban routine are concentrated within the town rather than spread across separate resorts.',
          'The trade-off is choice beyond the urban area: western beaches, changing wind conditions and regional days out are easier when you can adapt your transport instead of depending on one fixed connection.',
          'From AMARA in La Marina, the Old Town is approximately 10–15 minutes on foot and the supermarket is directly opposite. That makes food shopping and evenings in town straightforward; you can then arrange a taxi, rental day or current seasonal service for selected trips farther west.'
        ]
      },
      {
        id: 'western-coast',
        eyebrow: '06 · Beach days',
        title: 'From AMARA to beaches / western coast',
        paragraphs: [
          'Tarifa’s beach landscape extends well beyond the town toward Valdevaqueros and the wider western coast. The best destination can change with wind, activity, season and local access conditions.',
          'That makes a beach day different from a simple trip to “the nearest beach”. Check the day’s conditions and any current access or parking information before setting out, and do not build the plan around an old beach-bus timetable.',
          'AMARA has practical westbound car access from La Marina, so you can leave town without first crossing the Old Town. If you are travelling without a car, decide on the beach first and then check the current transport option for that specific day.'
        ]
      },
      {
        id: 'parking-mobility',
        eyebrow: '07 · Once you are here',
        title: 'Parking & everyday mobility from AMARA',
        paragraphs: [
          'Parking conditions vary across Tarifa and along the coast, especially by season and time of day. A space at the apartment does not guarantee a space at a beach, restaurant or event.',
          'The simplest routine is often to leave the car parked for town evenings and use it selectively for western beaches, nature and regional outings. This avoids turning every short errand into a parking decision.',
          'At AMARA Family & Surf, the reserved underground parking and the supermarket opposite support exactly that rhythm: walk for the Old Town and daily essentials, then use the car when the destination genuinely lies beyond the town.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Check before travelling',
      title: 'Official transport information',
      intro: 'Routes, border arrangements, ferry operations and seasonal services can change. These official sources are the right place for live checks close to departure.',
      checked: 'Sources reviewed in August 2026.',
      links: [
        { label: 'Tarifa Tourism · How to arrive', text: 'Road, airport, rail, ferry and coach overview for Tarifa.', href: sharedSources.tarifaTourism },
        { label: 'Aena · Málaga Airport buses', text: 'Current intercity and long-distance connections from Málaga Airport.', href: sharedSources.malagaAirport },
        { label: 'Aena · Jerez Airport buses', text: 'Current bus connections from Jerez Airport toward Jerez and Cádiz.', href: sharedSources.jerezAirport },
        { label: 'Campo de Gibraltar Transport Consortium', text: 'Live regional routes and schedules, including Algeciras–Tarifa.', href: sharedSources.campoGibraltar },
        { label: 'Transportes Generales Comes', text: 'Coach search, tickets and current Tarifa stop information.', href: sharedSources.comes },
        { label: 'Port of Algeciras Bay · Tarifa passenger terminal', text: 'Official port information for the Tarifa passenger terminal.', href: sharedSources.portMap }
      ]
    },
    closing: {
      eyebrow: 'Continue planning',
      title: 'Choose the journey around the stay you want',
      body: 'A town-first break and a week built around western beaches do not need the same transport plan. Continue with the Tarifa location and area guides before deciding whether the car should be central, occasional or unnecessary.',
      locationLabel: 'Back to the Tarifa location guide',
      areasLabel: 'Compare where to stay in Tarifa'
    }
  },
  de: {
    navLabel: 'Anreise & Mobilität',
    hero: {
      eyebrow: 'Anreise-Guide Tarifa',
      title: 'Anreise nach Tarifa',
      standfirst: 'Tarifa zu erreichen ist nur der erste Teil der Reise. Wenn ihr in AMARA Family & Surf wohnt, lautet euer eigentliches Ziel Mar Adriático 29 in La Marina. Deshalb führt jede Option hier bis zum Apartment weiter – und endet nicht einfach beim Ortsnamen auf der Karte.',
      note: 'Ein persönlicher Planungs-Guide eurer Gastgeber. Aktuelle Fahrzeiten, Einreisebestimmungen und Fährbetrieb bitte immer kurz vor der Reise prüfen.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Adresse von AMARA', value: 'Mar Adriático 29' },
      { label: 'Wohnlage', value: 'La Marina' },
      { label: 'Am Apartment', value: 'Reservierter Tiefgaragenplatz' },
      { label: 'Für den Alltag', value: 'Supermarkt direkt gegenüber' }
    ],
    sections: [
      {
        id: 'by-car', eyebrow: '01 · Mit dem Auto', title: 'Mit dem Auto zu AMARA', paragraphs: [
          'Tarifa erreicht ihr über die N-340: Von Málaga führt die Strecke über die westliche Costa del Sol und Algeciras, von Cádiz kommt ihr durch den Küstenkorridor am Atlantik. Verkehr und Straßenlage können den letzten Abschnitt beider Routen verändern.',
          'Für eine Übernachtung reicht „Tarifa“ als Navigationsziel nicht aus. Gebt Mar Adriático 29 schon vor der Einfahrt in den Ort ein – besonders mit Gepäck oder bei einer Ankunft nach Einbruch der Dunkelheit.',
          'AMARA Family & Surf liegt in La Marina und verfügt über einen reservierten Tiefgaragenstellplatz. Genaue Hinweise zu Gebäude und Garage erhalten gebuchte Gäste privat; sie gehören nicht auf diese öffentliche Seite.'
        ]
      },
      {
        id: 'by-bus', eyebrow: '02 · Öffentliche Verkehrsmittel', title: 'Mit dem Bus zu AMARA', paragraphs: [
          'Tarifa ist per Fernbus mit mehreren Städten verbunden; im Netz des Campo de Gibraltar fährt außerdem die Verbindung Algeciras–Tarifa. Der Bus hält in Tarifa an der Calle Batalla del Salado. Route und Abfahrt solltet ihr für euer konkretes Reisedatum prüfen.',
          'Der Bus bringt euch nach Tarifa, aber nicht bis vor die Apartmenttür. Plant die letzte Etappe bewusst ein – vor allem mit Kindern, Sportausrüstung oder mehreren Koffern.',
          'Für AMARA geht es weiter zur Mar Adriático 29 in La Marina. Mit viel Gepäck ist ein lokales Taxi die entspannteste Lösung; wenn ihr laufen möchtet, prüft die aktuelle Fußroute ab der Bushaltestelle vor der Abreise.'
        ]
      },
      {
        id: 'airports', eyebrow: '03 · Anreise per Flug', title: 'Von den wichtigsten Flughäfen nach Tarifa + AMARA', paragraphs: [
          'Málaga, Gibraltar und Jerez sind die praktischsten Flughäfen für Tarifa. Málaga bietet meist die größte Flugauswahl; Gibraltar liegt geografisch näher, erfordert aber die Weiterfahrt über Land und die jeweils gültigen Einreiseunterlagen; Jerez führt euch von der Cádiz-Seite nach Tarifa.',
          'Keiner dieser Flughäfen bringt euch direkt zum Apartment. Vergleicht Mietwagen oder vorab gebuchten Transfer mit den aktuellen Verbindungen zu eurer Ankunftszeit. Aena nennt ab Málaga Airport Busse Richtung Algeciras und La Línea; ab Jerez Airport führen Busverbindungen zunächst nach Jerez oder Cádiz und von dort weiter nach Tarifa.',
          'Nennt Fahrer oder Navigationssystem immer das vollständige Ziel: AMARA Family & Surf, Mar Adriático 29, Tarifa. Mit Mietwagen erspart euch der reservierte Tiefgaragenplatz die Suche nach einem nächtlichen Stellplatz bei der Ankunft.'
        ]
      },
      {
        id: 'port', eyebrow: '04 · Über die Meerenge', title: 'Vom Hafen Tarifa / aus Marokko zu AMARA', paragraphs: [
          'Der Passagierhafen von Tarifa verbindet die Stadt mit Tanger Ville. Der Fährbetrieb hängt von Wetter und Entscheidungen der Reedereien ab; deshalb ist der aktuelle Betriebsstatus wichtiger als ein früher gespeicherter Fahrplan.',
          'Nach Pass- und Gepäckkontrolle bleibt noch die letzte Etappe im Ort. Plant flexibel und legt keinen knappen Anschluss direkt hinter die vorgesehene Ankunftszeit.',
          'AMARA liegt an der Mar Adriático 29 in La Marina, nicht am Hafen. Mit Gepäck nehmt ihr am besten ein lokales Taxi; ohne schwere Taschen könnt ihr die aktuelle Fußroute vor der Reise prüfen. Private Check-in-Hinweise bleiben in der Anreiseinformation für gebuchte Gäste.'
        ]
      },
      {
        id: 'without-car', eyebrow: '05 · Alltag', title: 'Bei AMARA ohne Auto wohnen', paragraphs: [
          'Ein Aufenthalt im Ort Tarifa kann ohne tägliche Autofahrten gut funktionieren. Altstadt, normale Versorgung und vieles vom städtischen Alltag liegen kompakt beieinander und verteilen sich nicht auf voneinander getrennte Ferienorte.',
          'Weniger spontan wird es außerhalb des Ortes: Westliche Strände, wechselnde Windbedingungen und Ausflüge lassen sich leichter nutzen, wenn ihr das Verkehrsmittel flexibel wählen könnt.',
          'Von AMARA in La Marina erreicht ihr die Altstadt in ungefähr 10–15 Minuten zu Fuß; der Supermarkt liegt direkt gegenüber. Einkaufen und Abende im Ort sind damit unkompliziert. Für einzelne Ziele weiter westlich könnt ihr Taxi, Tagesmietwagen oder einen aktuell angebotenen Saisonbus wählen.'
        ]
      },
      {
        id: 'western-coast', eyebrow: '06 · Strandtage', title: 'Von AMARA zu Stränden / an die Westküste', paragraphs: [
          'Tarifas Strandlandschaft reicht weit über den Ort hinaus Richtung Valdevaqueros und an die offene Westküste. Welcher Strand passt, kann sich mit Wind, Aktivität, Saison und aktuellen Zufahrtsbedingungen ändern.',
          'Ein Strandtag ist deshalb mehr als die Fahrt zum „nächsten Strand“. Prüft Bedingungen sowie aktuelle Zufahrts- und Parkhinweise und plant nicht mit einem veralteten Strandbus-Fahrplan.',
          'Von AMARA in La Marina gelangt ihr mit dem Auto praktisch Richtung Westen, ohne zuerst die Altstadt durchqueren zu müssen. Ohne Auto wählt ihr am besten zuerst den Strand und prüft danach die aktuelle Verbindung genau für diesen Tag.'
        ]
      },
      {
        id: 'parking-mobility', eyebrow: '07 · Vor Ort', title: 'Parken & tägliche Wege ab AMARA', paragraphs: [
          'Die Parksituation in Tarifa und entlang der Küste verändert sich mit Saison und Tageszeit. Ein Stellplatz am Apartment bedeutet keine Stellplatzgarantie am Strand, Restaurant oder bei einer Veranstaltung.',
          'Oft ist es am entspanntesten, das Auto für Abende im Ort stehen zu lassen und nur für westliche Strände, Natur und Ausflüge zu nutzen. So wird nicht jeder kurze Weg zur Parkplatzfrage.',
          'Bei AMARA Family & Surf unterstützen der reservierte Tiefgaragenplatz und der Supermarkt gegenüber genau diesen Rhythmus: zu Fuß in die Altstadt und zum täglichen Einkauf, mit dem Auto nur dann, wenn das Ziel wirklich außerhalb des Ortes liegt.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Vor der Reise prüfen', title: 'Offizielle Verkehrsinformationen', intro: 'Routen, Grenzregelungen, Fährbetrieb und Saisonangebote können sich ändern. Prüft diese offiziellen Quellen kurz vor der Abreise.', checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'Tourismus Tarifa · Anreise', text: 'Überblick zu Straße, Flughafen, Bahn, Fähre und Bus.', href: sharedSources.tarifaTourism },
        { label: 'Aena · Busse ab Flughafen Málaga', text: 'Aktuelle Überland- und Fernbusverbindungen ab Málaga Airport.', href: sharedSources.malagaAirport },
        { label: 'Aena · Busse ab Flughafen Jerez', text: 'Aktuelle Busverbindungen ab Jerez Airport Richtung Jerez und Cádiz.', href: sharedSources.jerezAirport },
        { label: 'Verkehrsverbund Campo de Gibraltar', text: 'Aktuelle regionale Linien und Fahrzeiten, darunter Algeciras–Tarifa.', href: sharedSources.campoGibraltar },
        { label: 'Transportes Generales Comes', text: 'Bussuche, Fahrkarten und aktuelle Hinweise zur Haltestelle Tarifa.', href: sharedSources.comes },
        { label: 'Hafen der Bucht von Algeciras · Passagierterminal Tarifa', text: 'Offizielle Hafeninformationen zum Passagierterminal in Tarifa.', href: sharedSources.portMap }
      ]
    },
    closing: { eyebrow: 'Weiter planen', title: 'Wählt die Anreise passend zu eurem Aufenthalt', body: 'Für eine Auszeit mit viel Altstadt braucht ihr einen anderen Verkehrsplan als für eine Woche an den westlichen Stränden. Lest im Lage- und Wohnlagen-Guide weiter, bevor ihr entscheidet, ob das Auto zentral, gelegentlich oder gar nicht nötig ist.', locationLabel: 'Zurück zum Tarifa Lage-Guide', areasLabel: 'Wohnlagen in Tarifa vergleichen' }
  },
  es: {
    navLabel: 'Llegada y movilidad',
    hero: {
      eyebrow: 'Guía de llegada a Tarifa', title: 'Cómo llegar a Tarifa', standfirst: 'Llegar a Tarifa es solo la primera parte del viaje. Si os alojáis en AMARA Family & Surf, el destino real es Mar Adriático 29, en La Marina. Por eso cada opción continúa hasta el apartamento y no termina simplemente en el nombre de la localidad.', note: 'Una guía de planificación escrita por vuestros anfitriones. Consultad siempre los horarios, los requisitos de entrada y el funcionamiento de los ferris poco antes del viaje.', updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Dirección de AMARA', value: 'Mar Adriático 29' }, { label: 'Zona', value: 'La Marina' }, { label: 'En el apartamento', value: 'Garaje subterráneo reservado' }, { label: 'Para el día a día', value: 'Supermercado justo enfrente' }
    ],
    sections: [
      { id: 'by-car', eyebrow: '01 · Por carretera', title: 'En coche hasta AMARA', paragraphs: [
        'A Tarifa se llega por la N-340: desde Málaga, la ruta pasa por la Costa del Sol occidental y Algeciras; desde Cádiz, recorre el corredor de la costa atlántica. El tráfico y el estado de la carretera pueden cambiar el último tramo.',
        'Para una estancia, “Tarifa” no es un destino suficientemente preciso. Introducid Mar Adriático 29 en el navegador antes de entrar en la localidad, especialmente si llegáis con equipaje o de noche.',
        'AMARA Family & Surf está en La Marina y dispone de una plaza reservada en garaje subterráneo. Las indicaciones exactas de acceso al edificio y al garaje se envían de forma privada a los huéspedes con reserva.'
      ] },
      { id: 'by-bus', eyebrow: '02 · Transporte público', title: 'En autobús hasta AMARA', paragraphs: [
        'Tarifa tiene conexiones de autobús con varias ciudades, y la red del Campo de Gibraltar incluye el servicio Algeciras–Tarifa. La parada de Tarifa está en la calle Batalla del Salado; comprobad la ruta y la salida para vuestra fecha.',
        'El autobús os deja en Tarifa, no en la puerta del apartamento. Reservad margen para el último tramo, sobre todo si viajáis con niños, tablas o varias maletas.',
        'Para llegar a AMARA, continuad hasta Mar Adriático 29, en La Marina. Con bastante equipaje, un taxi local es la opción más tranquila; si preferís caminar, consultad la ruta peatonal actual desde la parada antes de salir.'
      ] },
      { id: 'airports', eyebrow: '03 · Llegada en avión', title: 'Desde los principales aeropuertos hasta Tarifa + AMARA', paragraphs: [
        'Málaga, Gibraltar y Jerez son los aeropuertos más prácticos para Tarifa. Málaga suele ofrecer más vuelos; Gibraltar está geográficamente más cerca, pero exige continuar por carretera y cumplir los requisitos de entrada vigentes; Jerez permite llegar desde el lado de Cádiz.',
        'Ninguno os deja directamente en el apartamento. Comparad coche de alquiler o traslado reservado con las conexiones públicas de vuestra hora de llegada. Aena muestra desde Málaga Airport autobuses hacia Algeciras y La Línea; desde Jerez Airport, las conexiones parten hacia Jerez o Cádiz y requieren continuar hasta Tarifa.',
        'Dad siempre el destino completo al conductor o al navegador: AMARA Family & Surf, Mar Adriático 29, Tarifa. Si alquiláis coche, la plaza subterránea reservada evita tener que buscar aparcamiento nocturno al llegar.'
      ] },
      { id: 'port', eyebrow: '04 · Cruzar el Estrecho', title: 'Desde el Puerto de Tarifa / Marruecos hasta AMARA', paragraphs: [
        'El puerto de pasajeros de Tarifa conecta con Tánger Ville. El servicio de ferry depende del tiempo y de las decisiones de las navieras, así que importa más el estado en directo que un horario guardado.',
        'Tras los controles de pasaporte y equipaje todavía queda el último tramo por la localidad. Mantened flexibles los planes y evitad una conexión ajustada justo después de la llegada prevista.',
        'AMARA está en Mar Adriático 29, en La Marina, no en el puerto. Con equipaje, continuad en taxi local; sin bolsas pesadas, comprobad la ruta a pie antes del viaje. Las indicaciones privadas de entrada permanecen en el mensaje para huéspedes con reserva.'
      ] },
      { id: 'without-car', eyebrow: '05 · Vida diaria', title: 'Alojarse en AMARA sin coche', paragraphs: [
        'Una estancia en el núcleo urbano de Tarifa puede funcionar sin usar el coche todos los días. El casco antiguo, los servicios cotidianos y buena parte de la rutina urbana están concentrados en la localidad.',
        'La contrapartida aparece fuera del núcleo: las playas occidentales, el viento cambiante y las excursiones resultan más fáciles cuando podéis adaptar el transporte al día.',
        'Desde AMARA, en La Marina, el casco antiguo queda a unos 10–15 minutos a pie y el supermercado está justo enfrente. Las compras y las noches en el centro son sencillas; para alguna salida al oeste podéis elegir taxi, alquiler por un día o un servicio estacional vigente.'
      ] },
      { id: 'western-coast', eyebrow: '06 · Días de playa', title: 'Desde AMARA a las playas / costa occidental', paragraphs: [
        'Las playas de Tarifa se extienden mucho más allá del núcleo urbano hacia Valdevaqueros y la costa occidental. El mejor destino puede cambiar con el viento, la actividad, la temporada y las condiciones de acceso.',
        'Por eso un día de playa no consiste simplemente en ir a “la más cercana”. Consultad las condiciones y cualquier aviso actual de acceso o aparcamiento, y no organicéis el día con un horario antiguo del autobús de playa.',
        'Desde La Marina, AMARA tiene una salida práctica en coche hacia el oeste sin atravesar primero el casco antiguo. Sin coche, elegid primero la playa y después comprobad el transporte disponible para ese día concreto.'
      ] },
      { id: 'parking-mobility', eyebrow: '07 · Ya en Tarifa', title: 'Aparcamiento y movilidad diaria desde AMARA', paragraphs: [
        'El aparcamiento cambia en Tarifa y en la costa según la temporada y la hora. Tener plaza en el apartamento no garantiza encontrarla en una playa, un restaurante o un evento.',
        'Una rutina cómoda suele ser dejar el coche aparcado para las noches en el pueblo y usarlo solo para playas occidentales, naturaleza y excursiones. Así cada recado corto no se convierte en una búsqueda de aparcamiento.',
        'En AMARA Family & Surf, el garaje subterráneo reservado y el supermercado de enfrente facilitan ese ritmo: a pie para el casco antiguo y lo cotidiano; en coche cuando el destino queda realmente fuera del núcleo.'
      ] }
    ],
    sources: { eyebrow: 'Comprobad antes de viajar', title: 'Información oficial de transporte', intro: 'Las rutas, los controles fronterizos, los ferris y los servicios estacionales pueden cambiar. Consultad estas fuentes oficiales poco antes de salir.', checked: 'Fuentes revisadas en agosto de 2026.', links: [
      { label: 'Turismo de Tarifa · Cómo llegar', text: 'Resumen de carretera, aeropuertos, tren, ferry y autobús.', href: sharedSources.tarifaTourism },
      { label: 'Aena · Autobuses desde Málaga Airport', text: 'Conexiones interurbanas y de largo recorrido actuales.', href: sharedSources.malagaAirport },
      { label: 'Aena · Autobuses desde Jerez Airport', text: 'Conexiones actuales hacia Jerez y Cádiz.', href: sharedSources.jerezAirport },
      { label: 'Consorcio de Transporte del Campo de Gibraltar', text: 'Líneas y horarios regionales actuales, incluida Algeciras–Tarifa.', href: sharedSources.campoGibraltar },
      { label: 'Transportes Generales Comes', text: 'Buscador, billetes e información actual de la parada de Tarifa.', href: sharedSources.comes },
      { label: 'Puerto Bahía de Algeciras · Terminal de pasajeros de Tarifa', text: 'Información portuaria oficial sobre la terminal de pasajeros de Tarifa.', href: sharedSources.portMap }
    ] },
    closing: { eyebrow: 'Seguir planificando', title: 'Elegid el trayecto según la estancia que queréis', body: 'Una escapada centrada en el pueblo y una semana de playas occidentales no necesitan el mismo plan de transporte. Seguid con las guías de ubicación y zonas antes de decidir si el coche será esencial, ocasional o innecesario.', locationLabel: 'Volver a la guía de ubicación de Tarifa', areasLabel: 'Comparar dónde alojarse en Tarifa' }
  },
  nl: {
    navLabel: 'Aankomst & mobiliteit',
    hero: { eyebrow: 'Aankomstgids Tarifa', title: 'Naar Tarifa reizen', standfirst: 'Tarifa bereiken is maar het eerste deel van de reis. Verblijven jullie in AMARA Family & Surf, dan is Mar Adriático 29 in La Marina de echte bestemming. Daarom loopt elke optie hieronder door tot aan het appartement en stopt ze niet bij de plaatsnaam op de kaart.', note: 'Een persoonlijke planningsgids van jullie hosts. Controleer actuele vertrektijden, toegangsregels en ferryverkeer altijd kort voor de reis.', updated: 'Gecontroleerd in augustus 2026' },
    facts: [ { label: 'Adres van AMARA', value: 'Mar Adriático 29' }, { label: 'Wijk', value: 'La Marina' }, { label: 'Bij het appartement', value: 'Gereserveerde ondergrondse parking' }, { label: 'Voor elke dag', value: 'Supermarkt direct aan de overkant' } ],
    sections: [
      { id: 'by-car', eyebrow: '01 · Over de weg', title: 'Met de auto naar AMARA', paragraphs: [
        'Tarifa is bereikbaar via de N-340: vanuit Málaga loopt de route via de westelijke Costa del Sol en Algeciras; vanuit Cádiz volgt ze de Atlantische kustcorridor. Verkeer en wegomstandigheden kunnen het laatste deel beïnvloeden.',
        'Voor een verblijf is “Tarifa” geen nauwkeurige eindbestemming. Stel Mar Adriático 29 in voordat jullie de stad binnenrijden, zeker met bagage of bij aankomst in het donker.',
        'AMARA Family & Surf ligt in La Marina en heeft een gereserveerde plek in de ondergrondse garage. Exacte toegangsinformatie voor gebouw en garage ontvangen geboekte gasten privé.'
      ] },
      { id: 'by-bus', eyebrow: '02 · Openbaar vervoer', title: 'Met de bus naar AMARA', paragraphs: [
        'Tarifa heeft busverbindingen met verschillende steden; het netwerk van Campo de Gibraltar vermeldt ook de dienst Algeciras–Tarifa. De bus stopt in Calle Batalla del Salado. Controleer route en vertrektijd voor jullie reisdatum.',
        'De bus brengt jullie naar Tarifa, maar niet tot aan de voordeur. Plan het laatste lokale deel mee, vooral met kinderen, boards of meerdere koffers.',
        'Voor AMARA reizen jullie verder naar Mar Adriático 29 in La Marina. Met veel bagage is een lokale taxi het rustigst; willen jullie lopen, controleer dan vóór vertrek de actuele wandelroute vanaf de bushalte.'
      ] },
      { id: 'airports', eyebrow: '03 · Aankomst per vliegtuig', title: 'Van de belangrijkste luchthavens naar Tarifa + AMARA', paragraphs: [
        'Málaga, Gibraltar en Jerez zijn de praktischste luchthavens voor Tarifa. Málaga heeft meestal de ruimste vluchtkeuze; Gibraltar ligt geografisch dichterbij maar vraagt verder vervoer over de weg en geldige toegangspapieren; Jerez brengt jullie via de kant van Cádiz.',
        'Geen van deze luchthavens brengt jullie rechtstreeks naar het appartement. Vergelijk huurauto of vooraf geboekte transfer met de verbindingen op jullie aankomsttijd. Aena vermeldt vanaf Málaga Airport bussen richting Algeciras en La Línea; vanaf Jerez Airport gaat het eerst richting Jerez of Cádiz en daarna verder naar Tarifa.',
        'Geef altijd de volledige bestemming door: AMARA Family & Surf, Mar Adriático 29, Tarifa. Met een huurauto hoeven jullie dankzij de gereserveerde garageplek bij aankomst niet naar nachtelijke straatparking te zoeken.'
      ] },
      { id: 'port', eyebrow: '04 · Over de Straat', title: 'Vanuit de haven van Tarifa / Marokko naar AMARA', paragraphs: [
        'De passagiershaven van Tarifa onderhoudt de verbinding met Tanger Ville. Ferryverkeer hangt af van weer en besluiten van de rederij; de live status is daarom belangrijker dan een eerder opgeslagen dienstregeling.',
        'Na paspoort- en bagageformaliteiten volgt nog een lokaal laatste deel. Houd de verdere planning flexibel en leg geen krappe aansluiting direct na de geplande aankomst.',
        'AMARA ligt aan Mar Adriático 29 in La Marina, niet bij de haven. Neem met bagage een lokale taxi; zonder zware tassen kunnen jullie vooraf de actuele wandelroute bekijken. Privé-incheckinformatie blijft in het bericht voor geboekte gasten.'
      ] },
      { id: 'without-car', eyebrow: '05 · Dagelijks leven', title: 'Bij AMARA verblijven zonder auto', paragraphs: [
        'Een verblijf in Tarifa-stad kan zonder dagelijks autogebruik goed werken. De oude stad, gewone voorzieningen en veel van het stadsleven liggen compact bij elkaar.',
        'Buiten de stad wordt de keuze kleiner: westelijke stranden, wisselende wind en uitstappen zijn eenvoudiger wanneer jullie het vervoer per dag kunnen aanpassen.',
        'Vanaf AMARA in La Marina is de oude stad ongeveer 10–15 minuten lopen en de supermarkt ligt direct aan de overkant. Boodschappen en avonden in de stad zijn daardoor eenvoudig; voor een dag verder westwaarts kunnen jullie taxi, daghuur of een actuele seizoensdienst kiezen.'
      ] },
      { id: 'western-coast', eyebrow: '06 · Stranddagen', title: 'Van AMARA naar stranden / westkust', paragraphs: [
        'Het strandlandschap van Tarifa loopt ver voorbij de stad richting Valdevaqueros en de open westkust. De beste bestemming kan wisselen met wind, activiteit, seizoen en lokale toegang.',
        'Een stranddag is dus niet alleen een rit naar “het dichtstbijzijnde strand”. Controleer de omstandigheden en actuele toegang of parking, en baseer het plan niet op een oude strandbusregeling.',
        'AMARA heeft vanuit La Marina een praktische autoroute naar het westen zonder eerst door de oude stad te rijden. Zonder auto kiezen jullie het best eerst het strand en controleren daarna het vervoer voor die specifieke dag.'
      ] },
      { id: 'parking-mobility', eyebrow: '07 · Eenmaal ter plaatse', title: 'Parkeren & dagelijkse mobiliteit vanaf AMARA', paragraphs: [
        'Parkeren in Tarifa en langs de kust verandert met seizoen en tijdstip. Een plek bij het appartement garandeert geen plek bij een strand, restaurant of evenement.',
        'Vaak is het prettigst om de auto voor avonden in de stad te laten staan en hem alleen te gebruiken voor westelijke stranden, natuur en uitstappen. Zo wordt niet elk kort ritje een parkeervraag.',
        'Bij AMARA Family & Surf ondersteunen de gereserveerde ondergrondse plek en de supermarkt aan de overkant precies dat ritme: lopen voor de oude stad en dagelijkse boodschappen, rijden wanneer de bestemming echt buiten de stad ligt.'
      ] }
    ],
    sources: { eyebrow: 'Controleer voor vertrek', title: 'Officiële reisinformatie', intro: 'Routes, grensregels, ferryverkeer en seizoensdiensten kunnen wijzigen. Controleer deze officiële bronnen kort voor vertrek.', checked: 'Bronnen gecontroleerd in augustus 2026.', links: [
      { label: 'Toerisme Tarifa · Bereikbaarheid', text: 'Overzicht van weg, luchthavens, trein, ferry en bus.', href: sharedSources.tarifaTourism },
      { label: 'Aena · Bussen vanaf Málaga Airport', text: 'Actuele intercity- en langeafstandsverbindingen.', href: sharedSources.malagaAirport },
      { label: 'Aena · Bussen vanaf Jerez Airport', text: 'Actuele verbindingen richting Jerez en Cádiz.', href: sharedSources.jerezAirport },
      { label: 'Vervoersconsortium Campo de Gibraltar', text: 'Actuele regionale routes en tijden, waaronder Algeciras–Tarifa.', href: sharedSources.campoGibraltar },
      { label: 'Transportes Generales Comes', text: 'Buszoeker, tickets en actuele informatie over de halte in Tarifa.', href: sharedSources.comes },
      { label: 'Haven van de Baai van Algeciras · Passagiersterminal Tarifa', text: 'Officiële haveninformatie over de passagiersterminal in Tarifa.', href: sharedSources.portMap }
    ] },
    closing: { eyebrow: 'Verder plannen', title: 'Kies de reis die past bij jullie verblijf', body: 'Een stadsgerichte korte vakantie en een week rond de westelijke stranden vragen niet hetzelfde vervoersplan. Lees verder in de locatie- en gebiedsgids voordat jullie beslissen of een auto centraal, af en toe of helemaal niet nodig is.', locationLabel: 'Terug naar de locatiegids van Tarifa', areasLabel: 'Vergelijk waar te verblijven in Tarifa' }
  },
  sv: {
    navLabel: 'Ankomst & mobilitet',
    hero: { eyebrow: 'Ankomstguide Tarifa', title: 'Resa till Tarifa', standfirst: 'Att nå Tarifa är bara den första delen av resan. Om ni bor på AMARA Family & Surf är den verkliga destinationen Mar Adriático 29 i La Marina. Därför fortsätter varje alternativ hela vägen till lägenheten och stannar inte vid ortsnamnet på kartan.', note: 'En personlig planeringsguide från era värdar. Kontrollera alltid aktuella avgångar, inresekrav och färjetrafik nära resdagen.', updated: 'Granskad i augusti 2026' },
    facts: [ { label: 'AMARAs adress', value: 'Mar Adriático 29' }, { label: 'Område', value: 'La Marina' }, { label: 'Vid lägenheten', value: 'Reserverad underjordisk parkering' }, { label: 'För vardagen', value: 'Stormarknad direkt mittemot' } ],
    sections: [
      { id: 'by-car', eyebrow: '01 · På väg', title: 'Med bil till AMARA', paragraphs: [
        'Tarifa nås via N-340: från Málaga går vägen längs västra Costa del Sol och via Algeciras; från Cádiz följer den Atlantkusten. Trafik och vägförhållanden kan påverka den sista delen.',
        'För en vistelse är “Tarifa” inte ett tillräckligt exakt mål. Ange Mar Adriático 29 innan ni kör in i staden, särskilt med bagage eller vid ankomst efter mörkrets inbrott.',
        'AMARA Family & Surf ligger i La Marina och har en reserverad plats i det underjordiska garaget. Exakta instruktioner till byggnad och garage skickas privat till bokade gäster.'
      ] },
      { id: 'by-bus', eyebrow: '02 · Kollektivtrafik', title: 'Med buss till AMARA', paragraphs: [
        'Tarifa har bussförbindelser med flera städer, och Campo de Gibraltars nät omfattar linjen Algeciras–Tarifa. Bussen stannar på Calle Batalla del Salado. Kontrollera linje och avgång för ert resdatum.',
        'Bussen tar er till Tarifa men inte till lägenhetsdörren. Planera den sista lokala sträckan, särskilt med barn, brädor eller flera väskor.',
        'Till AMARA fortsätter ni till Mar Adriático 29 i La Marina. Med mycket bagage är en lokal taxi lugnast; om ni vill gå, kontrollera den aktuella gångvägen från busshållplatsen före avresa.'
      ] },
      { id: 'airports', eyebrow: '03 · Ankomst med flyg', title: 'Från de viktigaste flygplatserna till Tarifa + AMARA', paragraphs: [
        'Málaga, Gibraltar och Jerez är de mest praktiska flygplatserna för Tarifa. Málaga har oftast störst flygutbud; Gibraltar ligger geografiskt närmare men kräver fortsatt landtransport och giltiga inresehandlingar; Jerez leder in från Cádiz-sidan.',
        'Ingen av flygplatserna tar er direkt till lägenheten. Jämför hyrbil eller förbokad transfer med förbindelserna vid er ankomsttid. Aena visar bussar från Málaga Airport mot Algeciras och La Línea; från Jerez Airport går resan först mot Jerez eller Cádiz och sedan vidare till Tarifa.',
        'Ange alltid hela destinationen: AMARA Family & Surf, Mar Adriático 29, Tarifa. Med hyrbil slipper ni leta efter gatuparkering vid en sen ankomst eftersom en underjordisk plats är reserverad.'
      ] },
      { id: 'port', eyebrow: '04 · Över sundet', title: 'Från Tarifas hamn / Marocko till AMARA', paragraphs: [
        'Tarifas passagerarhamn har förbindelsen till Tanger Ville. Färjetrafiken påverkas av väder och rederiernas beslut, så aktuell trafikstatus är viktigare än en sparad tidtabell.',
        'Efter pass- och bagagekontroll återstår fortfarande den sista sträckan i staden. Håll fortsättningen flexibel och lägg inte in en snäv anslutning direkt efter planerad ankomst.',
        'AMARA ligger på Mar Adriático 29 i La Marina, inte vid hamnen. Med bagage fortsätter ni med lokal taxi; utan tunga väskor kan ni kontrollera gångvägen före resan. Privata incheckningsinstruktioner finns bara i ankomstmeddelandet till bokade gäster.'
      ] },
      { id: 'without-car', eyebrow: '05 · Vardag', title: 'Bo på AMARA utan bil', paragraphs: [
        'En vistelse i Tarifa stad kan fungera utan daglig bilkörning. Gamla stan, vardagsservice och mycket av stadslivet ligger samlat i stället för utspritt mellan separata semesterorter.',
        'Begränsningen märks utanför staden: västkustens stränder, skiftande vind och utflykter blir enklare när ni kan anpassa transporten efter dagen.',
        'Från AMARA i La Marina är det cirka 10–15 minuters promenad till Gamla stan och stormarknaden ligger direkt mittemot. Inköp och kvällar i stan är enkla; för enstaka resor västerut kan ni välja taxi, hyrbil över dagen eller en aktuell säsongslinje.'
      ] },
      { id: 'western-coast', eyebrow: '06 · Stranddagar', title: 'Från AMARA till stränder / västkusten', paragraphs: [
        'Tarifas stränder fortsätter långt förbi staden mot Valdevaqueros och den öppna västkusten. Bästa destinationen kan skifta med vind, aktivitet, säsong och aktuella tillträdesförhållanden.',
        'En stranddag är därför mer än en resa till “närmaste strand”. Kontrollera dagens förhållanden och aktuell tillfart eller parkering, och bygg inte planen på en gammal strandbusstidtabell.',
        'AMARA har praktisk bilväg västerut från La Marina utan att ni först behöver köra genom Gamla stan. Utan bil väljer ni först strand och kontrollerar sedan transporten för just den dagen.'
      ] },
      { id: 'parking-mobility', eyebrow: '07 · På plats', title: 'Parkering & vardagsresor från AMARA', paragraphs: [
        'Parkeringsläget i Tarifa och längs kusten varierar med säsong och tid på dagen. En plats vid lägenheten garanterar inte en plats vid en strand, restaurang eller ett evenemang.',
        'Ofta är det enklast att låta bilen stå under kvällar i staden och använda den selektivt för västkust, natur och utflykter. Då blir inte varje kort ärende en parkeringsfråga.',
        'På AMARA Family & Surf stödjer den reserverade underjordiska platsen och stormarknaden mittemot just den rytmen: gå till Gamla stan och vardagsärenden, kör när målet verkligen ligger utanför staden.'
      ] }
    ],
    sources: { eyebrow: 'Kontrollera före resan', title: 'Officiell reseinformation', intro: 'Linjer, gränsregler, färjetrafik och säsongstjänster kan ändras. Kontrollera dessa officiella källor nära avresan.', checked: 'Källor granskade i augusti 2026.', links: [
      { label: 'Tarifas turistbyrå · Resa hit', text: 'Översikt över väg, flygplatser, tåg, färja och buss.', href: sharedSources.tarifaTourism },
      { label: 'Aena · Bussar från Málaga Airport', text: 'Aktuella regionala och långväga förbindelser.', href: sharedSources.malagaAirport },
      { label: 'Aena · Bussar från Jerez Airport', text: 'Aktuella förbindelser mot Jerez och Cádiz.', href: sharedSources.jerezAirport },
      { label: 'Campo de Gibraltars transportkonsortium', text: 'Aktuella regionala linjer och tider, bland annat Algeciras–Tarifa.', href: sharedSources.campoGibraltar },
      { label: 'Transportes Generales Comes', text: 'Bussökning, biljetter och aktuell information om hållplatsen i Tarifa.', href: sharedSources.comes },
      { label: 'Algecirasbuktens hamn · Passagerarterminalen i Tarifa', text: 'Officiell hamninformation om passagerarterminalen i Tarifa.', href: sharedSources.portMap }
    ] },
    closing: { eyebrow: 'Fortsätt planera', title: 'Välj resan efter vistelsen ni vill ha', body: 'En stadsinriktad kortsemester och en vecka kring västkustens stränder behöver inte samma transportplan. Fortsätt med läges- och områdesguiderna innan ni avgör om bilen ska vara central, tillfällig eller onödig.', locationLabel: 'Tillbaka till Tarifas lägesguide', areasLabel: 'Jämför var man ska bo i Tarifa' }
  }
};
