import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface GettingToNerjaSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string, string];
}

export interface GettingToNerjaLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: GettingToNerjaSection[];
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

export const gettingToNerjaSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-getting-to-nerja-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  article,
  languages: {
    en: {
      title: 'Getting to Nerja & AMARA Playa: Airport, Bus or Car',
      description: 'Plan the full journey to Nerja and AMARA Playa, Calle Castilla Pérez 60, including Málaga Airport, coach arrival, car use, parking and walking.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Anreise nach Nerja: Flughafen, Bus oder Auto',
      description: 'Plant die komplette Anreise nach Nerja und zu AMARA Playa, Calle Castilla Pérez 60 – mit Flughafen, Busankunft, Auto, Parken und Wegen zu Fuß.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cómo llegar a Nerja: aeropuerto, autobús o coche',
      description: 'Preparad todo el viaje a Nerja y AMARA Playa, Calle Castilla Pérez 60: aeropuerto de Málaga, autobús, coche, aparcamiento y recorridos a pie.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Naar Nerja & AMARA Playa: luchthaven, bus of auto',
      description: 'Plan de volledige reis naar Nerja en AMARA Playa, Calle Castilla Pérez 60, met Málaga Airport, busaankomst, autogebruik, parkeren en lopen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Resa till Nerja & AMARA Playa: flygplats, buss eller bil',
      description: 'Planera hela resan till Nerja och AMARA Playa, Calle Castilla Pérez 60, med Málaga flygplats, bussankomst, bil, parkering och promenader.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sources = {
  malagaAirport: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
  granadaAirport: 'https://www.aena.es/en/f.g.l.-granada-jaen/how-to-get-there/bus.html',
  alsa: 'https://www.alsa.com/en/web/bus/home',
  nerjaMobility: 'https://www.nerja.es/File/Agenda_Urbana_Nerja_2030.pdf'
} as const;

export const gettingToNerjaContent: Record<AmaraLanguage, GettingToNerjaLocale> = {
  en: {
    navLabel: 'Arrival & Mobility',
    hero: {
      eyebrow: 'Nerja arrival guide',
      title: 'Getting to Nerja',
      standfirst: 'The useful destination is not simply “Nerja”, but AMARA Playa at Calle Castilla Pérez 60. This guide follows the journey from airport, road or coach arrival to the apartment, then asks the more important holiday question: how often will you actually need a car once you are here?',
      note: 'A host-written planning guide. Check live tickets, road conditions and parking rules close to travel.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'AMARA address', value: 'Calle Castilla Pérez 60' },
      { label: 'Nearest beach', value: 'Torrecilla · approx. 200 m' },
      { label: 'Old-town landmark', value: 'Balcón de Europa · approx. 500 m' },
      { label: 'Parking at the stay', value: 'No private space included' }
    ],
    sections: [
      {
        id: 'arrival-choice',
        eyebrow: '01 · Start with the whole journey',
        title: 'Choose the arrival that still works after you reach Nerja',
        paragraphs: [
          'Málaga-Costa del Sol is the main practical airport for Nerja. Aena lists a direct Alsa coach connection between the airport and Nerja, while a rental car or private transfer keeps the journey door to door.',
          'The best option depends on flight time, luggage and what you want to do during the stay. A direct coach can be calm for a central holiday; a car is more useful when regional outings are already part of the plan.',
          'Whichever route you choose, save the full destination before departure: AMARA Playa, Calle Castilla Pérez 60, Nerja. The apartment is not at the coach stop and does not include a private parking space.'
        ]
      },
      {
        id: 'by-car',
        eyebrow: '02 · By road',
        title: 'By car to AMARA Playa',
        paragraphs: [
          'Nerja is reached from Málaga and Granada through the A-7 coastal corridor. The final approach enters a compact town where pedestrian streets, one-way sections and seasonal traffic matter more than the last motorway kilometres.',
          'A car gives freedom for Maro, Frigiliana and the wider Axarquía, but it also creates a parking task on arrival. Do not build the first evening around finding a space directly outside the accommodation.',
          'Navigate to Calle Castilla Pérez 60, unload only where current street rules allow and use a legal public or street-parking option. AMARA Playa does not advertise or guarantee parking at the building.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '03 · Public transport',
        title: 'By coach to AMARA Playa',
        paragraphs: [
          'Intercity coaches arrive in the Avenida de Pescia area. Routes, departure points and frequencies change, so the current Alsa journey planner is more reliable than a timetable copied into a holiday guide.',
          'The coach gets you to Nerja, not to the apartment door. With suitcases, late arrival or limited mobility, keep a taxi budget for the last local leg instead of assuming that every central route will feel easy.',
          'Your final destination is Calle Castilla Pérez 60 near Torrecilla. Private building-access and check-in details belong to the booked-guest arrival message, not to this public page.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '04 · Flying in',
        title: 'From Málaga or Granada Airport to Nerja',
        paragraphs: [
          'Málaga Airport has the simplest public-transport story: Aena confirms a Nerja–Airport Alsa line. Granada Airport connects by airport bus with Granada city and its bus station, from where an onward coach to Nerja must be planned separately.',
          'Do not compare airports by flight price alone. Add the onward connection, its operating hours, luggage handling and the final leg inside Nerja before deciding which arrival is genuinely easier.',
          'For AMARA Playa, finish every comparison at Calle Castilla Pérez 60. A direct transfer ends at the address; coach travel ends with a separate local leg; a rental car ends with a parking plan.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · Everyday Nerja',
        title: 'Can you stay at AMARA Playa without a car?',
        paragraphs: [
          'Yes, if your holiday is centred on Nerja itself. The old town, shops, restaurants and several beaches form a compact urban routine, and much of the historic centre gives priority to pedestrians.',
          'Without a car, regional days need more advance thought, but the everyday holiday can become simpler: no daily parking search, no need to move the car for dinner and no vehicle between you and a quick swim.',
          'AMARA Playa is approximately 200 metres from Torrecilla and 500 metres from the Balcón de Europa. That makes beach time and central evenings realistic on foot; taxis or selected rental days can cover the exceptions.'
        ]
      },
      {
        id: 'beaches',
        eyebrow: '06 · Beach mobility',
        title: 'From AMARA Playa to Nerja’s beaches',
        paragraphs: [
          'Nerja’s beaches sit in different coves and town sections. Torrecilla and El Chucho lie on the western side; Calahonda and Carabeo connect more closely with the old centre; Burriana forms a larger eastern beach setting.',
          'Walking can be the most practical way to reach several central beaches, but steps, slopes and the return route matter. Driving across town does not automatically make a beach day easier once parking is included.',
          'Torrecilla is AMARA Playa’s everyday beach at approximately 200 metres. Treat Burriana, Maro and other beaches as separate outings and choose walking, taxi, bus or car for the actual day rather than by habit.'
        ]
      },
      {
        id: 'day-trips',
        eyebrow: '07 · Beyond town',
        title: 'When a car becomes genuinely useful',
        paragraphs: [
          'A car changes the scale of the stay when Maro, Frigiliana, mountain villages or several points across the Axarquía matter. It gives flexibility around weather, luggage and the order of stops.',
          'That does not mean you need to hire one for the entire holiday. A transfer or coach arrival followed by one or two rental days can preserve a walkable Nerja routine while opening selected regional days.',
          'From AMARA Playa, decide by itinerary: keep central days car-free, then collect a car only when the day clearly benefits from it. Confirm rental-office terms and parking before committing.'
        ]
      },
      {
        id: 'parking',
        eyebrow: '08 · Parking & last mile',
        title: 'Plan parking as part of arrival, not as an afterthought',
        paragraphs: [
          'Nerja has municipal parking facilities, including the Balcón de Europa, Parque Verano Azul and Burriana areas. Availability, tariffs, access and street rules can change, especially during busy periods.',
          'A public garage can be calmer than circling central streets, while street parking may mean a longer walk. Neither option should be presented as guaranteed until you check the current situation for the arrival date.',
          'AMARA Playa has no private parking space. If you arrive by car, keep luggage handling and a legal parking alternative in the plan; exact check-in instructions will be shared privately after booking.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Travel sources',
      title: 'Check live details before departure',
      intro: 'These official and operator sources support the route choices above. They remain the right place for live schedules, tickets and current local rules.',
      checked: 'Sources checked August 2026',
      links: [
        { label: 'Aena · Málaga Airport buses', text: 'Official confirmation of the Nerja–Airport Alsa connection.', href: sources.malagaAirport },
        { label: 'Aena · Granada Airport bus', text: 'Official airport-to-Granada connection and bus-station stop.', href: sources.granadaAirport },
        { label: 'Alsa journey planner', text: 'Current coach routes, times, fares and tickets.', href: sources.alsa },
        { label: 'Nerja Urban Agenda 2030', text: 'Municipal context for bus arrival, taxis, pedestrian streets and mobility.', href: sources.nerjaMobility }
      ]
    },
    closing: {
      eyebrow: 'Continue planning',
      title: 'Choose the journey and the neighbourhood together',
      body: 'Arrival decides the first hour; your location decides every day after it. Use the Nerja overview and area guide to match mobility with the stay you actually want.',
      locationLabel: 'Back to the Nerja guide',
      areasLabel: 'Compare where to stay'
    }
  },
  de: {
    navLabel: 'Anreise & Mobilität',
    hero: {
      eyebrow: 'Nerja Anreise-Guide',
      title: 'Anreise nach Nerja',
      standfirst: 'Das eigentliche Ziel lautet nicht nur „Nerja“, sondern AMARA Playa in der Calle Castilla Pérez 60. Dieser Guide führt vom Flughafen, von der Straße oder der Busankunft bis zur Wohnung – und dann zur wichtigeren Urlaubsfrage: Wie oft braucht ihr vor Ort wirklich ein Auto?',
      note: 'Ein Planungs-Guide eures Gastgebers. Prüft Tickets, Straßenlage und Parkregeln kurz vor der Reise erneut.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'AMARA Adresse', value: 'Calle Castilla Pérez 60' },
      { label: 'Nächster Strand', value: 'Torrecilla · ca. 200 m' },
      { label: 'Altstadt-Ziel', value: 'Balcón de Europa · ca. 500 m' },
      { label: 'Parken an der Unterkunft', value: 'Kein privater Stellplatz' }
    ],
    sections: [
      {
        id: 'arrival-choice',
        eyebrow: '01 · Die ganze Reise betrachten',
        title: 'Wählt eine Anreise, die auch nach der Ankunft in Nerja funktioniert',
        paragraphs: [
          'Málaga-Costa del Sol ist für Nerja der wichtigste Flughafen. Aena führt eine direkte Alsa-Busverbindung zwischen Flughafen und Nerja auf; Mietwagen oder Privattransfer bringen euch ohne Umstieg bis zur Adresse.',
          'Welche Variante passt, hängt von Flugzeit, Gepäck und euren Urlaubsplänen ab. Für einen zentralen Aufenthalt kann der Direktbus entspannt sein; bei geplanten Ausflügen wird ein Auto wertvoller.',
          'Speichert vor Abfahrt das vollständige Ziel: AMARA Playa, Calle Castilla Pérez 60, Nerja. Die Wohnung liegt nicht an der Bushaltestelle und bietet keinen privaten Stellplatz.'
        ]
      },
      {
        id: 'by-car',
        eyebrow: '02 · Über die Straße',
        title: 'Mit dem Auto zu AMARA Playa',
        paragraphs: [
          'Von Málaga und Granada erreicht ihr Nerja über den Küstenkorridor A-7. Am Ende kommt ihr in einen kompakten Ort, in dem Fußgängerstraßen, Einbahnabschnitte und saisonaler Verkehr wichtiger werden als die letzten Autobahnkilometer.',
          'Ein Auto schafft Freiheit für Maro, Frigiliana und die weitere Axarquía, bringt bei der Ankunft aber auch die Parkplatzfrage mit. Plant den ersten Abend nicht rund um die Hoffnung auf einen Platz direkt vor der Unterkunft.',
          'Navigiert zur Calle Castilla Pérez 60, ladet nur dort aus, wo die aktuelle Beschilderung es erlaubt, und nutzt eine legale öffentliche oder Straßenparkmöglichkeit. AMARA Playa bietet und garantiert keinen Stellplatz am Haus.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '03 · Öffentlicher Verkehr',
        title: 'Mit dem Fernbus zu AMARA Playa',
        paragraphs: [
          'Fernbusse kommen im Bereich der Avenida de Pescia an. Linien, Abfahrtsorte und Takte ändern sich; der aktuelle Alsa-Reiseplaner ist deshalb zuverlässiger als ein kopierter Fahrplan.',
          'Der Bus bringt euch nach Nerja, nicht bis zur Wohnungstür. Mit Koffern, später Ankunft oder eingeschränkter Mobilität ist ein Taxi für die letzte lokale Etappe sinnvoller als die Annahme, jeder zentrale Weg sei leicht.',
          'Euer Endziel ist Calle Castilla Pérez 60 bei Torrecilla. Private Angaben zu Gebäudezugang und Check-in gehören in die Anreiseinformation für gebuchte Gäste, nicht auf diese öffentliche Seite.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '04 · Anreise per Flug',
        title: 'Vom Flughafen Málaga oder Granada nach Nerja',
        paragraphs: [
          'Málaga bietet die einfachste öffentliche Verbindung: Aena bestätigt eine Alsa-Linie zwischen Flughafen und Nerja. Vom Flughafen Granada fährt ein Flughafenbus nach Granada und zum dortigen Busbahnhof; die Weiterfahrt nach Nerja wird separat geplant.',
          'Vergleicht Flughäfen nicht nur nach Flugpreis. Rechnet Weiterfahrt, Betriebszeiten, Gepäck und die letzte Etappe in Nerja hinzu – erst dann zeigt sich, welche Ankunft wirklich einfacher ist.',
          'Für AMARA Playa endet jeder Vergleich in der Calle Castilla Pérez 60: Der Transfer fährt zur Adresse, die Busreise braucht eine lokale Schlussetappe, und beim Mietwagen gehört das Parken dazu.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · Nerja im Alltag',
        title: 'Funktioniert AMARA Playa ohne Auto?',
        paragraphs: [
          'Ja, wenn euer Urlaub vor allem in Nerja stattfindet. Altstadt, Geschäfte, Restaurants und mehrere Strände bilden einen kompakten Alltag; im historischen Zentrum haben Fußgänger auf vielen Straßen Vorrang.',
          'Ohne Auto brauchen Ausflüge mehr Vorplanung, der normale Urlaubstag wird aber einfacher: keine tägliche Parkplatzsuche, kein Umparken fürs Abendessen und kein Fahrzeug zwischen euch und einem kurzen Bad.',
          'Von AMARA Playa sind es ungefähr 200 Meter bis Torrecilla und 500 Meter bis zum Balcón de Europa. Strand und zentrale Abende funktionieren zu Fuß; Taxis oder einzelne Mietwagentage decken Ausnahmen ab.'
        ]
      },
      {
        id: 'beaches',
        eyebrow: '06 · Wege zum Strand',
        title: 'Von AMARA Playa zu Nerjas Stränden',
        paragraphs: [
          'Nerjas Strände liegen in verschiedenen Buchten und Ortsteilen. Torrecilla und El Chucho befinden sich westlich, Calahonda und Carabeo näher an der Altstadt, Burriana bildet östlich eine größere eigene Strandlage.',
          'Zu mehreren zentralen Stränden ist der Fußweg oft am praktischsten; Treppen, Steigungen und Rückweg zählen jedoch mit. Mit Parkplatzsuche wird die Autofahrt quer durch den Ort nicht automatisch leichter.',
          'Torrecilla ist mit ungefähr 200 Metern der Alltagsstrand von AMARA Playa. Burriana, Maro und weitere Strände plant ihr als eigene Ausflüge und wählt je nach Tag Fußweg, Taxi, Bus oder Auto.'
        ]
      },
      {
        id: 'day-trips',
        eyebrow: '07 · Außerhalb des Ortes',
        title: 'Wann ein Auto wirklich nützlich wird',
        paragraphs: [
          'Ein Auto erweitert den Aufenthalt, wenn Maro, Frigiliana, Bergdörfer oder mehrere Ziele in der Axarquía wichtig sind. Es gibt Flexibilität bei Wetter, Gepäck und Reihenfolge der Stopps.',
          'Trotzdem muss es nicht für den gesamten Urlaub gemietet werden. Transfer oder Busanreise plus ein oder zwei Mietwagentage bewahren den gut gehbaren Nerja-Alltag und öffnen ausgewählte Ausflugstage.',
          'Entscheidet bei AMARA Playa nach Programm: Zentrale Tage bleiben autofrei, ein Wagen kommt nur hinzu, wenn der Tag klar davon profitiert. Konditionen und Parken vorher prüfen.'
        ]
      },
      {
        id: 'parking',
        eyebrow: '08 · Parken & letzte Etappe',
        title: 'Parken gehört zur Anreiseplanung, nicht ans Ende',
        paragraphs: [
          'Nerja hat kommunale Parkmöglichkeiten unter anderem am Balcón de Europa, im Parque Verano Azul und bei Burriana. Verfügbarkeit, Tarife, Zufahrt und Straßenregeln können sich besonders in vollen Zeiten ändern.',
          'Ein Parkhaus ist oft ruhiger als die Suche in zentralen Straßen; beim Straßenparken kann der Fußweg länger werden. Beides ist erst dann sicher, wenn ihr die aktuelle Lage für den Anreisetag prüft.',
          'AMARA Playa hat keinen privaten Stellplatz. Plant bei Autoanreise Gepäckhandling und eine legale Alternative ein; genaue Check-in-Hinweise erhaltet ihr nach der Buchung privat.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Reisequellen',
      title: 'Aktuelle Angaben vor Abfahrt prüfen',
      intro: 'Diese offiziellen und Betreiberquellen stützen die beschriebenen Reisewege. Für Fahrpläne, Tickets und aktuelle Regeln bleiben sie die richtige Adresse.',
      checked: 'Quellen geprüft im August 2026',
      links: [
        { label: 'Aena · Busse am Flughafen Málaga', text: 'Offizielle Bestätigung der Alsa-Verbindung Nerja–Flughafen.', href: sources.malagaAirport },
        { label: 'Aena · Flughafenbus Granada', text: 'Offizielle Verbindung nach Granada mit Halt am Busbahnhof.', href: sources.granadaAirport },
        { label: 'Alsa-Reiseplaner', text: 'Aktuelle Buslinien, Zeiten, Preise und Tickets.', href: sources.alsa },
        { label: 'Stadtentwicklungsplan Nerja 2030', text: 'Kommunale Angaben zu Busankunft, Taxis, Fußgängerstraßen und Mobilität.', href: sources.nerjaMobility }
      ]
    },
    closing: {
      eyebrow: 'Weiterplanen',
      title: 'Anreise und Wohnlage gehören zusammen',
      body: 'Die Anreise entscheidet über die erste Stunde, die Lage über jeden weiteren Tag. Nutzt den Nerja-Überblick und den Lagen-Guide, um Mobilität und Urlaubswunsch zusammenzubringen.',
      locationLabel: 'Zurück zum Nerja-Guide',
      areasLabel: 'Wohnlagen vergleichen'
    }
  },
  es: {
    navLabel: 'Llegada y movilidad',
    hero: {
      eyebrow: 'Guía de llegada a Nerja',
      title: 'Cómo llegar a Nerja',
      standfirst: 'El destino útil no es solo «Nerja», sino AMARA Playa en Calle Castilla Pérez 60. Esta guía sigue el viaje desde el aeropuerto, la carretera o la llegada en autobús hasta el apartamento y plantea después la pregunta importante: ¿cuántas veces necesitaréis realmente un coche durante la estancia?',
      note: 'Una guía de planificación de vuestro anfitrión. Comprobad billetes, carreteras y normas de aparcamiento cerca de la fecha.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Dirección de AMARA', value: 'Calle Castilla Pérez 60' },
      { label: 'Playa más cercana', value: 'Torrecilla · aprox. 200 m' },
      { label: 'Referencia del centro', value: 'Balcón de Europa · aprox. 500 m' },
      { label: 'Aparcamiento', value: 'No incluye plaza privada' }
    ],
    sections: [
      {
        id: 'arrival-choice',
        eyebrow: '01 · Pensar en todo el trayecto',
        title: 'Elegid una llegada que siga funcionando al alcanzar Nerja',
        paragraphs: [
          'Málaga-Costa del Sol es el aeropuerto más práctico para Nerja. Aena incluye una conexión directa de Alsa entre aeropuerto y Nerja; un coche de alquiler o traslado privado mantiene el viaje puerta a puerta.',
          'La mejor opción depende de la hora del vuelo, el equipaje y los planes de la estancia. El autobús directo puede ser tranquilo para unas vacaciones céntricas; el coche gana valor si ya tenéis previstas varias excursiones.',
          'Guardad el destino completo antes de salir: AMARA Playa, Calle Castilla Pérez 60, Nerja. El apartamento no está en la parada de autobús ni incluye aparcamiento privado.'
        ]
      },
      {
        id: 'by-car',
        eyebrow: '02 · Por carretera',
        title: 'En coche hasta AMARA Playa',
        paragraphs: [
          'Desde Málaga y Granada se llega a Nerja por el corredor costero de la A-7. El tramo final entra en un pueblo compacto donde las calles peatonales, sentidos únicos y tráfico estacional pesan más que los últimos kilómetros de autovía.',
          'El coche da libertad para Maro, Frigiliana y la Axarquía, pero añade el aparcamiento a la llegada. No organicéis la primera noche dando por hecho que habrá sitio delante del alojamiento.',
          'Navegad hasta Calle Castilla Pérez 60, descargad solo donde lo permita la señalización y utilizad una opción legal de parking público o calle. AMARA Playa no ofrece ni garantiza plaza en el edificio.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '03 · Transporte público',
        title: 'En autobús hasta AMARA Playa',
        paragraphs: [
          'Los autocares interurbanos llegan a la zona de la Avenida de Pescia. Rutas, puntos de salida y frecuencias cambian; el buscador actual de Alsa es más fiable que un horario copiado en una guía.',
          'El autobús os deja en Nerja, no en la puerta del apartamento. Con maletas, llegada tardía o movilidad reducida, reservad presupuesto para un taxi en el último tramo local.',
          'El destino final es Calle Castilla Pérez 60, cerca de Torrecilla. Los datos privados de acceso y entrada se facilitan a los huéspedes con reserva, no en esta página pública.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '04 · Llegar en avión',
        title: 'Desde los aeropuertos de Málaga o Granada',
        paragraphs: [
          'Málaga tiene la conexión pública más sencilla: Aena confirma una línea Alsa entre aeropuerto y Nerja. Granada Airport conecta en autobús con la ciudad y su estación, desde donde hay que preparar por separado el autocar a Nerja.',
          'No comparéis aeropuertos solo por el precio del vuelo. Sumad conexión posterior, horarios operativos, equipaje y último tramo dentro de Nerja antes de decidir cuál es realmente más fácil.',
          'Para AMARA Playa, toda comparación termina en Calle Castilla Pérez 60: el traslado llega a la dirección, el autobús requiere un tramo local y el coche de alquiler exige plan de aparcamiento.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · El día a día en Nerja',
        title: '¿Se puede estar en AMARA Playa sin coche?',
        paragraphs: [
          'Sí, si las vacaciones se centran en Nerja. Casco antiguo, tiendas, restaurantes y varias playas forman una rutina urbana compacta, con muchas calles del centro histórico pensadas para peatones.',
          'Sin coche, las excursiones necesitan más previsión, pero el día normal se simplifica: sin buscar aparcamiento cada jornada, sin mover el vehículo para cenar y sin coche entre vosotros y un baño rápido.',
          'AMARA Playa está a unos 200 metros de Torrecilla y 500 metros del Balcón de Europa. Playa y noches en el centro funcionan a pie; taxis o días sueltos de alquiler cubren las excepciones.'
        ]
      },
      {
        id: 'beaches',
        eyebrow: '06 · Movilidad de playa',
        title: 'De AMARA Playa a las playas de Nerja',
        paragraphs: [
          'Las playas de Nerja ocupan calas y sectores distintos. Torrecilla y El Chucho quedan al oeste; Calahonda y Carabeo se relacionan más con el casco antiguo; Burriana forma un amplio ambiente de playa al este.',
          'Ir a pie suele ser lo más práctico para varias playas centrales, aunque cuentan las escaleras, las cuestas y el regreso. Cruzar el pueblo en coche no siempre facilita el día cuando se incluye el aparcamiento.',
          'Torrecilla es la playa cotidiana de AMARA Playa, a unos 200 metros. Burriana, Maro y otras playas son salidas aparte: elegid paseo, taxi, bus o coche según el día real.'
        ]
      },
      {
        id: 'day-trips',
        eyebrow: '07 · Más allá del pueblo',
        title: 'Cuándo el coche resulta realmente útil',
        paragraphs: [
          'El coche cambia la escala del viaje si importan Maro, Frigiliana, los pueblos de montaña o varios lugares de la Axarquía. Da flexibilidad ante el tiempo, el equipaje y el orden de las paradas.',
          'Eso no obliga a alquilarlo todas las vacaciones. Llegar en traslado o autobús y reservar uno o dos días de coche conserva la vida a pie en Nerja y abre excursiones concretas.',
          'Desde AMARA Playa, decidid por itinerario: mantened los días céntricos sin coche y alquiladlo solo cuando aporte una ventaja clara. Confirmad condiciones y aparcamiento antes.'
        ]
      },
      {
        id: 'parking',
        eyebrow: '08 · Aparcamiento y último tramo',
        title: 'Incluid el aparcamiento en la llegada desde el principio',
        paragraphs: [
          'Nerja dispone de aparcamientos municipales en zonas como Balcón de Europa, Parque Verano Azul y Burriana. Disponibilidad, tarifas, accesos y normas pueden cambiar, sobre todo en periodos de mucha afluencia.',
          'Un parking público puede ser más tranquilo que dar vueltas por calles céntricas; aparcar en la calle puede exigir caminar más. Ninguna opción debe considerarse garantizada sin revisar la situación del día.',
          'AMARA Playa no tiene plaza privada. Si llegáis en coche, planificad equipaje y una alternativa legal; las instrucciones exactas de entrada se comparten en privado después de reservar.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Fuentes de viaje',
      title: 'Comprobad la información actual antes de salir',
      intro: 'Estas fuentes oficiales y de operadores respaldan las opciones descritas. Son también el lugar adecuado para horarios, billetes y normas vigentes.',
      checked: 'Fuentes revisadas en agosto de 2026',
      links: [
        { label: 'Aena · Autobuses del aeropuerto de Málaga', text: 'Confirmación oficial de la conexión Alsa Nerja–Aeropuerto.', href: sources.malagaAirport },
        { label: 'Aena · Autobús del aeropuerto de Granada', text: 'Conexión oficial con Granada y parada en la estación de autobuses.', href: sources.granadaAirport },
        { label: 'Buscador de Alsa', text: 'Rutas, horarios, tarifas y billetes actualizados.', href: sources.alsa },
        { label: 'Agenda Urbana Nerja 2030', text: 'Información municipal sobre autobuses, taxis, calles peatonales y movilidad.', href: sources.nerjaMobility }
      ]
    },
    closing: {
      eyebrow: 'Seguir preparando',
      title: 'Elegid el trayecto y la zona como una sola decisión',
      body: 'La llegada decide la primera hora; la ubicación decide todos los días posteriores. Usad la visión general de Nerja y la guía de zonas para unir movilidad y forma de viajar.',
      locationLabel: 'Volver a la guía de Nerja',
      areasLabel: 'Comparar dónde alojarse'
    }
  },
  nl: {
    navLabel: 'Aankomst & mobiliteit',
    hero: {
      eyebrow: 'Aankomstgids voor Nerja',
      title: 'Naar Nerja reizen',
      standfirst: 'Je bestemming is niet alleen “Nerja”, maar AMARA Playa aan Calle Castilla Pérez 60. Deze gids volgt de reis vanaf luchthaven, weg of busaankomst tot het appartement en stelt daarna de belangrijkere vraag: hoe vaak heb je tijdens je verblijf echt een auto nodig?',
      note: 'Een planningsgids van jullie host. Controleer tickets, wegomstandigheden en parkeerregels kort voor vertrek.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'AMARA-adres', value: 'Calle Castilla Pérez 60' },
      { label: 'Dichtstbijzijnde strand', value: 'Torrecilla · ca. 200 m' },
      { label: 'Centraal herkenningspunt', value: 'Balcón de Europa · ca. 500 m' },
      { label: 'Parkeren bij het verblijf', value: 'Geen privéplek inbegrepen' }
    ],
    sections: [
      {
        id: 'arrival-choice',
        eyebrow: '01 · Bekijk de hele reis',
        title: 'Kies een aankomst die ook na het bereiken van Nerja werkt',
        paragraphs: [
          'Málaga-Costa del Sol is de belangrijkste luchthaven voor Nerja. Aena vermeldt een rechtstreekse Alsa-bus tussen luchthaven en Nerja; een huurauto of privétransfer brengt je van deur tot deur.',
          'De beste keuze hangt af van vluchttijd, bagage en vakantieplannen. De directe bus kan rustig zijn voor een centraal verblijf; een auto is waardevoller als regionale uitstapjes al vaststaan.',
          'Sla voor vertrek de volledige bestemming op: AMARA Playa, Calle Castilla Pérez 60, Nerja. Het appartement ligt niet bij de bushalte en heeft geen privéparkeerplaats.'
        ]
      },
      {
        id: 'by-car',
        eyebrow: '02 · Over de weg',
        title: 'Met de auto naar AMARA Playa',
        paragraphs: [
          'Vanuit Málaga en Granada bereik je Nerja via de kustroute A-7. De laatste kilometers voeren een compacte stad in, waar voetgangersstraten, eenrichtingsverkeer en seizoensdrukte belangrijker worden dan de snelweg.',
          'Een auto geeft vrijheid voor Maro, Frigiliana en de Axarquía, maar levert bij aankomst een parkeeropgave op. Baseer de eerste avond niet op de verwachting dat voor de deur een plek vrij is.',
          'Navigeer naar Calle Castilla Pérez 60, laad alleen uit waar de actuele regels dit toestaan en kies legaal openbaar of straatparkeren. AMARA Playa biedt of garandeert geen plek bij het gebouw.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '03 · Openbaar vervoer',
        title: 'Met de bus naar AMARA Playa',
        paragraphs: [
          'Intercitybussen komen aan in de omgeving van Avenida de Pescia. Routes, vertrekpunten en frequenties veranderen; de actuele Alsa-planner is betrouwbaarder dan een dienstregeling in een vakantiegids.',
          'De bus brengt je naar Nerja, niet tot de deur. Met koffers, late aankomst of beperkte mobiliteit is een taxi voor het laatste lokale stuk verstandiger dan aannemen dat elke centrale route gemakkelijk loopt.',
          'De eindbestemming is Calle Castilla Pérez 60 bij Torrecilla. Privé-informatie over toegang en inchecken hoort in het bericht voor geboekte gasten, niet op deze openbare pagina.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '04 · Aankomst per vliegtuig',
        title: 'Vanaf de luchthaven van Málaga of Granada',
        paragraphs: [
          'Málaga heeft de eenvoudigste verbinding: Aena bevestigt een Alsa-lijn tussen luchthaven en Nerja. Granada Airport heeft een bus naar de stad en het busstation; de aansluitende rit naar Nerja plan je apart.',
          'Vergelijk luchthavens niet alleen op vluchtprijs. Tel aansluiting, openingstijden van vervoer, bagage en het laatste stuk in Nerja mee voordat je bepaalt welke aankomst echt eenvoudiger is.',
          'Voor AMARA Playa eindigt elke vergelijking aan Calle Castilla Pérez 60: de transfer rijdt naar het adres, de busreis heeft een lokale laatste etappe en de huurauto vereist een parkeerplan.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · Dagelijks Nerja',
        title: 'Kun je zonder auto bij AMARA Playa verblijven?',
        paragraphs: [
          'Ja, als je vakantie vooral om Nerja draait. Het oude centrum, winkels, restaurants en meerdere stranden vormen een compacte routine en veel straten in het historische hart geven ruimte aan voetgangers.',
          'Zonder auto vragen regionale dagen meer planning, maar het gewone vakantiegevoel wordt eenvoudiger: geen dagelijkse parkeerzoektocht, geen auto verplaatsen voor het diner en niets tussen jou en een snelle duik.',
          'AMARA Playa ligt ongeveer 200 meter van Torrecilla en 500 meter van het Balcón de Europa. Strand en avonden in het centrum werken te voet; taxi’s of losse huurdagen dekken uitzonderingen.'
        ]
      },
      {
        id: 'beaches',
        eyebrow: '06 · Naar het strand',
        title: 'Van AMARA Playa naar de stranden van Nerja',
        paragraphs: [
          'De stranden van Nerja liggen in verschillende baaien en stadsdelen. Torrecilla en El Chucho liggen westelijk; Calahonda en Carabeo sluiten meer aan op het oude centrum; Burriana vormt een grotere oostelijke strandzone.',
          'Lopen is voor centrale stranden vaak het handigst, al tellen trappen, hellingen en de terugweg mee. Door de stad rijden maakt een stranddag niet automatisch eenvoudiger zodra parkeren meespeelt.',
          'Torrecilla is met ongeveer 200 meter het dagelijkse strand van AMARA Playa. Zie Burriana, Maro en andere stranden als aparte uitstapjes en kies per dag voor lopen, taxi, bus of auto.'
        ]
      },
      {
        id: 'day-trips',
        eyebrow: '07 · Buiten de stad',
        title: 'Wanneer een auto echt nuttig wordt',
        paragraphs: [
          'Een auto vergroot het bereik als Maro, Frigiliana, bergdorpen of meerdere plekken in de Axarquía belangrijk zijn. Hij geeft flexibiliteit bij weer, bagage en volgorde van stops.',
          'Dat betekent niet dat je er de hele vakantie een nodig hebt. Een transfer of busaankomst plus één of twee huurdagen bewaart het wandelritme van Nerja en opent gekozen regionale dagen.',
          'Beslis vanuit AMARA Playa per route: houd centrale dagen autovrij en huur alleen wanneer de dag er duidelijk beter van wordt. Controleer voorwaarden en parkeren vooraf.'
        ]
      },
      {
        id: 'parking',
        eyebrow: '08 · Parkeren & laatste stuk',
        title: 'Neem parkeren vanaf het begin mee in de aankomst',
        paragraphs: [
          'Nerja heeft gemeentelijke parkeerfaciliteiten rond onder meer Balcón de Europa, Parque Verano Azul en Burriana. Beschikbaarheid, tarieven, toegang en straatregels kunnen veranderen, vooral in drukke perioden.',
          'Een garage kan rustiger zijn dan rondjes door het centrum; straatparkeren kan een langere wandeling betekenen. Geen van beide is gegarandeerd zonder de actuele situatie te controleren.',
          'AMARA Playa heeft geen privéparkeerplaats. Plan bij aankomst per auto de bagage en een legaal alternatief; exacte incheckinformatie volgt privé na de boeking.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Reisbronnen',
      title: 'Controleer actuele details voor vertrek',
      intro: 'Deze officiële en vervoerdersbronnen ondersteunen de keuzes hierboven. Voor live tijden, tickets en regels blijven ze de juiste plek.',
      checked: 'Bronnen gecontroleerd in augustus 2026',
      links: [
        { label: 'Aena · Bussen Málaga Airport', text: 'Officiële bevestiging van de Alsa-verbinding Nerja–Airport.', href: sources.malagaAirport },
        { label: 'Aena · Bus Granada Airport', text: 'Officiële verbinding naar Granada met halte bij het busstation.', href: sources.granadaAirport },
        { label: 'Alsa-reisplanner', text: 'Actuele routes, tijden, tarieven en tickets.', href: sources.alsa },
        { label: 'Nerja Urban Agenda 2030', text: 'Gemeentelijke context voor busaankomst, taxi’s, voetgangersstraten en mobiliteit.', href: sources.nerjaMobility }
      ]
    },
    closing: {
      eyebrow: 'Verder plannen',
      title: 'Kies de reis en de buurt als één beslissing',
      body: 'De aankomst bepaalt het eerste uur; de locatie bepaalt elke dag erna. Gebruik de Nerja-gids en het buurtenoverzicht om vervoer en verblijfswensen te verbinden.',
      locationLabel: 'Terug naar de Nerja-gids',
      areasLabel: 'Vergelijk waar je verblijft'
    }
  },
  sv: {
    navLabel: 'Ankomst & mobilitet',
    hero: {
      eyebrow: 'Ankomstguide för Nerja',
      title: 'Resa till Nerja',
      standfirst: 'Målet är inte bara ”Nerja” utan AMARA Playa på Calle Castilla Pérez 60. Guiden följer resan från flygplats, väg eller bussankomst till lägenheten och ställer sedan den viktigare frågan: hur ofta behöver ni faktiskt bil under vistelsen?',
      note: 'En planeringsguide från er värd. Kontrollera biljetter, vägläge och parkeringsregler nära avresan.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'AMARA-adress', value: 'Calle Castilla Pérez 60' },
      { label: 'Närmaste strand', value: 'Torrecilla · ca 200 m' },
      { label: 'Landmärke i centrum', value: 'Balcón de Europa · ca 500 m' },
      { label: 'Parkering vid boendet', value: 'Ingen privat plats ingår' }
    ],
    sections: [
      {
        id: 'arrival-choice',
        eyebrow: '01 · Se hela resan',
        title: 'Välj en ankomst som fungerar även när ni nått Nerja',
        paragraphs: [
          'Málaga-Costa del Sol är den viktigaste flygplatsen för Nerja. Aena anger en direkt Alsa-buss mellan flygplatsen och Nerja; hyrbil eller privat transfer håller resan dörr till dörr.',
          'Bästa valet beror på flygtid, bagage och era planer. Direktbussen kan vara lugn för en central semester; bil blir mer värdefull när regionala utflykter redan ingår.',
          'Spara hela destinationen före avresa: AMARA Playa, Calle Castilla Pérez 60, Nerja. Lägenheten ligger inte vid busshållplatsen och har ingen privat parkering.'
        ]
      },
      {
        id: 'by-car',
        eyebrow: '02 · På väg',
        title: 'Med bil till AMARA Playa',
        paragraphs: [
          'Från Málaga och Granada nås Nerja via kustkorridoren A-7. Sista delen går in i en kompakt stad där gågator, enkelriktat och säsongstrafik betyder mer än motorvägens sista kilometer.',
          'Bil ger frihet för Maro, Frigiliana och Axarquía men skapar också en parkeringsuppgift vid ankomst. Planera inte första kvällen utifrån att en plats finns utanför boendet.',
          'Navigera till Calle Castilla Pérez 60, lasta ur endast där aktuella regler tillåter och använd laglig offentlig parkering eller gatuparkering. AMARA Playa erbjuder eller garanterar ingen plats vid huset.'
        ]
      },
      {
        id: 'by-bus',
        eyebrow: '03 · Kollektivtrafik',
        title: 'Med buss till AMARA Playa',
        paragraphs: [
          'Långfärdsbussar anländer i området vid Avenida de Pescia. Linjer, avgångsplatser och tider ändras; Alsas aktuella reseplanerare är mer pålitlig än en tidtabell i en semesterguide.',
          'Bussen tar er till Nerja, inte till lägenhetsdörren. Med väskor, sen ankomst eller begränsad rörlighet är taxi för sista sträckan klokare än att anta att varje central väg är enkel.',
          'Slutmålet är Calle Castilla Pérez 60 nära Torrecilla. Privat information om tillträde och incheckning hör till meddelandet för bokade gäster, inte till den offentliga sidan.'
        ]
      },
      {
        id: 'airports',
        eyebrow: '04 · Flyga in',
        title: 'Från Málaga eller Granada flygplats till Nerja',
        paragraphs: [
          'Málaga har den enklaste kollektivtrafiken: Aena bekräftar en Alsa-linje mellan flygplatsen och Nerja. Granada Airport har flygbuss till staden och busstationen; fortsatt buss till Nerja planeras separat.',
          'Jämför inte flygplatser enbart efter biljettpris. Lägg till anslutning, trafiktider, bagage och sista sträckan i Nerja innan ni avgör vilken ankomst som verkligen är enklast.',
          'För AMARA Playa slutar jämförelsen på Calle Castilla Pérez 60: transfer går till adressen, bussresan behöver en lokal slutsträcka och hyrbil behöver en parkeringsplan.'
        ]
      },
      {
        id: 'without-car',
        eyebrow: '05 · Vardagen i Nerja',
        title: 'Går det att bo på AMARA Playa utan bil?',
        paragraphs: [
          'Ja, om semestern främst handlar om Nerja. Gamla stan, butiker, restauranger och flera stränder bildar en kompakt vardag och många gator i det historiska centrumet prioriterar fotgängare.',
          'Utan bil kräver regionala dagar mer planering, men den vanliga semesterdagen blir enklare: inget dagligt parkeringssökande, ingen bil till middagen och inget fordon mellan er och ett snabbt dopp.',
          'AMARA Playa ligger cirka 200 meter från Torrecilla och 500 meter från Balcón de Europa. Strand och kvällar i centrum fungerar till fots; taxi eller enstaka hyrbilsdagar täcker undantagen.'
        ]
      },
      {
        id: 'beaches',
        eyebrow: '06 · Till stranden',
        title: 'Från AMARA Playa till Nerjas stränder',
        paragraphs: [
          'Nerjas stränder ligger i olika vikar och stadsdelar. Torrecilla och El Chucho ligger i väster; Calahonda och Carabeo hänger närmare ihop med gamla stan; Burriana bildar ett större östligt strandområde.',
          'Promenad är ofta enklast till centrala stränder, men trappor, backar och hemväg räknas. Att köra genom staden gör inte automatiskt stranddagen lättare när parkering ingår.',
          'Torrecilla är AMARA Playas vardagsstrand på cirka 200 meters avstånd. Se Burriana, Maro och andra stränder som egna utflykter och välj promenad, taxi, buss eller bil för den aktuella dagen.'
        ]
      },
      {
        id: 'day-trips',
        eyebrow: '07 · Utanför staden',
        title: 'När bil verkligen blir användbar',
        paragraphs: [
          'Bil förändrar räckvidden när Maro, Frigiliana, bergsbyar eller flera platser i Axarquía är viktiga. Den ger flexibilitet kring väder, bagage och ordningen på stoppen.',
          'Det betyder inte att ni behöver hyra hela semestern. Transfer eller bussankomst följt av en eller två hyrbilsdagar bevarar Nerjas promenadvardag och öppnar valda utflykter.',
          'Bestäm från AMARA Playa efter resplan: håll centrala dagar bilfria och hyr endast när dagen tydligt tjänar på det. Kontrollera villkor och parkering i förväg.'
        ]
      },
      {
        id: 'parking',
        eyebrow: '08 · Parkering & sista sträckan',
        title: 'Ta med parkeringen från början av ankomstplanen',
        paragraphs: [
          'Nerja har kommunal parkering bland annat vid Balcón de Europa, Parque Verano Azul och Burriana. Tillgänglighet, priser, infart och gaturegler kan ändras, särskilt under välbesökta perioder.',
          'Ett garage kan vara lugnare än att köra runt i centrum; gatuparkering kan innebära längre promenad. Inget alternativ är garanterat utan kontroll för den aktuella dagen.',
          'AMARA Playa har ingen privat parkeringsplats. Planera bagage och ett lagligt alternativ vid bilankomst; exakta incheckningsinstruktioner delas privat efter bokning.'
        ]
      }
    ],
    sources: {
      eyebrow: 'Resekällor',
      title: 'Kontrollera aktuella detaljer före avresa',
      intro: 'Dessa officiella källor och operatörskällor stödjer valen ovan. För live-tider, biljetter och regler är de fortsatt rätt plats.',
      checked: 'Källor granskade i augusti 2026',
      links: [
        { label: 'Aena · Bussar vid Málaga Airport', text: 'Officiell bekräftelse av Alsa-förbindelsen Nerja–Airport.', href: sources.malagaAirport },
        { label: 'Aena · Buss vid Granada Airport', text: 'Officiell anslutning till Granada med stopp vid busstationen.', href: sources.granadaAirport },
        { label: 'Alsas reseplanerare', text: 'Aktuella linjer, tider, priser och biljetter.', href: sources.alsa },
        { label: 'Nerja Urban Agenda 2030', text: 'Kommunal information om bussankomst, taxi, gågator och mobilitet.', href: sources.nerjaMobility }
      ]
    },
    closing: {
      eyebrow: 'Fortsätt planera',
      title: 'Välj resan och området som ett gemensamt beslut',
      body: 'Ankomsten styr den första timmen; läget styr varje dag därefter. Använd Nerja-översikten och områdesguiden för att förena mobilitet med den vistelse ni vill ha.',
      locationLabel: 'Tillbaka till Nerja-guiden',
      areasLabel: 'Jämför var ni ska bo'
    }
  }
};
