import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaLocationHubLink {
  label: string;
  token?: 'getting_to_nerja' | 'nerja_where_to_stay' | 'playa' | 'explore_hub';
  anchor?: string;
}

interface NerjaLocationHubFeature {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  link?: NerjaLocationHubLink;
}

interface NerjaLocationHubLocale {
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  discovery: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<NerjaLocationHubLink & { number: string; title: string; text: string }>;
  };
  orientation: NerjaLocationHubFeature & {
    markers: Array<{ label: string; value: string }>;
  };
  arrival: NerjaLocationHubFeature;
  areas: NerjaLocationHubFeature & {
    archetypes: Array<{ title: string; consequence: string }>;
  };
  coast: NerjaLocationHubFeature;
  dailyLife: NerjaLocationHubFeature;
  seasons: NerjaLocationHubFeature;
  amara: NerjaLocationHubFeature & {
    facts: string[];
    imageAlt: string;
  };
  experience: NerjaLocationHubFeature;
}

const seo: AmaraAuthoringSeo = {
  version: '2026-08-13-nerja-location-hub-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  article: {
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'amara-about-us'
  },
  languages: {
    en: {
      title: 'Nerja Location Guide: Town, Beaches & Your Stay | AMARA',
      description: 'See how Nerja’s old town, beaches and neighbourhoods connect, and what arrival, walking, parking and daily life mean when staying by Torrecilla.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja Lage-Guide: Ort, Strände & Aufenthalt | AMARA',
      description: 'So hängen Altstadt, Strände und Wohnlagen in Nerja zusammen – mit praktischen Hinweisen zu Anreise, Fußwegen, Parken und Alltag bei Torrecilla.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Guía de ubicación de Nerja: pueblo, playas y estancia | AMARA',
      description: 'Así se conectan el casco antiguo, las playas y las zonas de Nerja, con información práctica sobre llegada, paseos, aparcamiento y vida diaria junto a Torrecilla.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Nerja locatiegids: centrum, stranden en verblijf | AMARA',
      description: 'Ontdek hoe het oude centrum, de stranden en buurten van Nerja samenhangen en wat aankomst, lopen, parkeren en dagelijks leven betekenen bij Torrecilla.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nerja lägesguide: stad, stränder och vistelse | AMARA',
      description: 'Se hur Nerjas gamla stad, stränder och områden hänger ihop och vad ankomst, promenader, parkering och vardagsliv innebär nära Torrecilla.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaLocationHubContent: {
  token: 'location_nerja';
  seo: AmaraAuthoringSeo;
  locales: Record<AmaraLanguage, NerjaLocationHubLocale>;
} = {
  token: 'location_nerja',
  seo,
  locales: {
    en: {
      hero: {
        eyebrow: 'Nerja location guide',
        title: 'Nerja, from beach mornings to old-town evenings',
        standfirst: 'Nerja is compact enough for many days on foot, yet its beaches and neighbourhoods create very different stays. This is the overview for choosing how you want to arrive, move and live here for more than a day trip.',
        note: 'A host-written guide for overnight guests, with AMARA Playa as the practical point of reference.',
        updated: 'Reviewed August 2026'
      },
      discovery: {
        eyebrow: 'Plan the stay',
        title: 'Six questions that shape a Nerja stay',
        intro: 'Start with your real daily rhythm: arrival, beach choice, walking, errands and the outings you want beyond town.',
        items: [
          { number: '01', title: 'Getting here', text: 'Airports, coach arrival and the final leg to Calle Castilla Pérez 60.', label: 'Arrival & mobility', token: 'getting_to_nerja' },
          { number: '02', title: 'Read the town', text: 'Sea edge, old centre, eastern beaches and the hills behind Nerja.', label: 'Geography & orientation', token: 'nerja_geography' },
          { number: '03', title: 'Choose your area', text: 'Compare Torrecilla, the Old Town, Burriana and the upper residential areas.', label: 'Where to stay / areas', token: 'nerja_where_to_stay' },
          { number: '04', title: 'Weather & seasons', text: 'How heat, rain and the quieter months change a coastal stay.', label: 'Weather & seasons', token: 'nerja_weather' },
          { number: '05', title: 'Daily life', text: 'Groceries, evening walks, beach routines and moving around town.', label: 'Daily life & services', token: 'nerja_daily_life' },
          { number: '06', title: 'Stay longer', text: 'What becomes more important when a holiday turns into weeks.', label: 'Winter stays', token: 'nerja_weather' }
        ]
      },
      orientation: {
        eyebrow: 'Nerja at a glance',
        title: 'A coastal town with several centres of gravity',
        paragraphs: [
          'Nerja faces the Mediterranean from a sequence of coves and urban beaches. The Balcón de Europa and old centre form the best-known heart; Torrecilla and Chaparril sit to the west, while Burriana creates another strong beach setting to the east.',
          'The town rises inland, so two addresses that look close on a map can feel different on foot. Staying near the coast keeps many everyday routes level; upper Nerja offers distance and views, but makes slopes and transport more present.'
        ],
        markers: [
          { label: 'Historic focus', value: 'Old Town + Balcón de Europa' },
          { label: 'Western coast', value: 'Torrecilla + El Chucho + Playazo' },
          { label: 'Eastern coast', value: 'Calahonda + Carabeo + Burriana' }
        ]
      },
      arrival: {
        eyebrow: 'Arrival & mobility',
        title: 'Arrive for the address, then decide how much car you need',
        paragraphs: [
          'Málaga-Costa del Sol is the main practical airport for Nerja. Aena lists a direct Alsa connection between the airport and Nerja; Granada is an alternative that normally means changing via Granada bus station.',
          'Once you are in central Nerja, many beach, restaurant and shopping days work well on foot. A car earns its place when Maro, Frigiliana, the wider Axarquía or repeated regional outings are central to the holiday.',
          'AMARA Playa is at Calle Castilla Pérez 60. The apartment does not include parking, so arrival by car needs a realistic public or street-parking plan rather than an assumed space at the door.'
        ],
        link: { label: 'Plan the complete journey', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Where to stay',
        title: 'The right Nerja area depends on the day you want at your door',
        paragraphs: [
          'Nerja is not one continuous resort strip. Each area changes the balance between beach access, old-town evenings, gradients, parking and quiet.',
          'For a short stay, the most useful question is often not “Which area is best?” but “Which journeys do we want to repeat every day?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Beach, central errands and the old town can form one walking routine.' },
          { title: 'Old Town & Balcón', consequence: 'Atmosphere and restaurants come first; vehicle access needs more thought.' },
          { title: 'Burriana & Parador side', consequence: 'A strong beach identity, with slopes affecting some routes into town.' },
          { title: 'Upper Nerja', consequence: 'More residential space and views, with greater reliance on gradients or transport.' }
        ],
        link: { label: 'Compare Nerja’s areas', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Beaches & movement',
        title: 'A beach town where the coast still asks you to choose',
        paragraphs: [
          'Torrecilla, El Chucho, Calahonda, Carabeo and Burriana are not interchangeable. Access, facilities, stairs and the route back to your accommodation all change the feel of a beach day.',
          'From AMARA Playa, Torrecilla is approximately 100 metres away. That makes a quick swim or a second visit near sunset easy; other beaches can remain deliberate walks or occasional taxi and car outings.'
        ]
      },
      dailyLife: {
        eyebrow: 'Daily life & services',
        title: 'The compact centre is Nerja’s everyday advantage',
        paragraphs: [
          'The old centre, supermarkets, bakeries, restaurants and several beaches sit close enough to combine without moving the car. The pedestrian core also makes evening movement feel different from a dispersed coastal resort.',
          'At AMARA Playa, the practical benefit is repetition: Torrecilla is close, the Balcón de Europa is approximately 500 metres away and the centre can stay part of an ordinary morning or evening rather than a planned excursion.'
        ]
      },
      seasons: {
        eyebrow: 'Weather, seasons & longer stays',
        title: 'Nerja changes pace more than it changes identity',
        paragraphs: [
          'Summer brings the busiest beaches and the greatest pressure on roads and parking. Spring and autumn often give more room for walking and regional days out, while winter shifts the balance toward local routines and longer indoor evenings.',
          'For a longer stay, apartment comfort and daily convenience matter more than a checklist of sights. AMARA Playa has heating and air conditioning, a full kitchen and washing machine, so the apartment can support ordinary weeks as well as beach weekends.'
        ]
      },
      amara: {
        eyebrow: 'Your Nerja base',
        title: 'From guest to host in Nerja',
        paragraphs: [
          'For years we were holiday guests in this exact apartment. We enjoyed our time here so much that we did not hesitate for a second when we heard it was for sale.',
          'If we had to describe it in a few words: absolute cosiness and the perfect location. You are right in the centre, yet the apartment faces away from the street and stays wonderfully quiet — crowned by a sea view. You do not need a car here.',
          'The location is hard to beat: barely 500 metres to the Balcón de Europa and just 100 metres to Torrecilla beach. Walk a few hundred metres further and you reach small, secluded coves.',
          'The building belongs in an honest plan, too: the apartment is on the fifth floor with a lift, but there are five steps outside and five inside before you reach it. No private parking is supplied.'
        ],
        facts: [
          'Approximately 100 m to Torrecilla beach',
          'Approximately 500 m to the Balcón de Europa',
          'Private balcony, full kitchen and washing machine',
          'Air conditioning and heating; no private parking'
        ],
        imageAlt: 'Bright living room at AMARA Playa in Nerja',
        link: { label: 'See AMARA Playa', token: 'playa' }
      },
      experience: {
        eyebrow: 'Beyond the address',
        title: 'Use Nerja as a place to stay, not a list to complete',
        paragraphs: [
          'The location choice sets the daily rhythm; the experience comes from what you do with it. Beach mornings, old-town evenings, Maro, Frigiliana and the wider Axarquía can be combined without forcing every day into the same pattern.'
        ],
        link: { label: 'Explore Frigiliana & Nerja', token: 'explore_hub' }
      }
    },
    de: {
      hero: {
        eyebrow: 'Nerja Lage-Guide',
        title: 'Nerja – vom Morgen am Strand bis zum Abend in der Altstadt',
        standfirst: 'In Nerja lässt sich vieles zu Fuß erledigen, trotzdem entstehen je nach Strand und Wohnlage ganz unterschiedliche Aufenthalte. Dieser Überblick hilft euch bei Anreise, Lagewahl und Mobilität – für mehr als nur einen Tagesausflug.',
        note: 'Ein Gastgeber-Guide für Übernachtungsgäste, mit AMARA Playa als praktischem Bezugspunkt.',
        updated: 'Geprüft im August 2026'
      },
      discovery: {
        eyebrow: 'Den Aufenthalt planen',
        title: 'Sechs Fragen, die euren Nerja-Aufenthalt prägen',
        intro: 'Beginnt mit eurem echten Tagesrhythmus: Anreise, Strandwahl, Wege, Einkäufe und Ausflüge außerhalb des Ortes.',
        items: [
          { number: '01', title: 'Nach Nerja kommen', text: 'Flughäfen, Busankunft und die letzte Etappe zur Calle Castilla Pérez 60.', label: 'Anreise & Mobilität', token: 'getting_to_nerja' },
          { number: '02', title: 'Den Ort einordnen', text: 'Meereskante, Altstadt, östliche Strände und die Hänge dahinter.', label: 'Geografie & Orientierung', token: 'nerja_geography' },
          { number: '03', title: 'Die passende Lage wählen', text: 'Torrecilla, Altstadt, Burriana und die oberen Wohnlagen im Vergleich.', label: 'Wo übernachten / Lagen', token: 'nerja_where_to_stay' },
          { number: '04', title: 'Wetter & Jahreszeiten', text: 'Wie Hitze, Regen und ruhigere Monate den Küstenurlaub verändern.', label: 'Wetter & Jahreszeiten', token: 'nerja_weather' },
          { number: '05', title: 'Alltag vor Ort', text: 'Einkaufen, Abendspaziergänge, Strandroutine und Wege im Ort.', label: 'Alltag & Services', token: 'nerja_daily_life' },
          { number: '06', title: 'Länger bleiben', text: 'Was wichtiger wird, wenn aus Urlaub mehrere Wochen werden.', label: 'Winteraufenthalte', token: 'nerja_weather' }
        ]
      },
      orientation: {
        eyebrow: 'Nerja im Überblick',
        title: 'Ein Küstenort mit mehreren Mittelpunkten',
        paragraphs: [
          'Nerja liegt mit einer Folge von Buchten und Stadtstränden am Mittelmeer. Balcón de Europa und Altstadt bilden das bekannte Herz; Torrecilla und Chaparril liegen westlich davon, Burriana schafft östlich eine weitere ausgeprägte Strandlage.',
          'Vom Meer steigt der Ort an. Zwei Adressen können auf der Karte nah wirken und sich zu Fuß dennoch sehr unterschiedlich anfühlen. Küstennahe Lagen halten viele Alltagswege flacher; in den oberen Vierteln gehören Steigungen und Mobilität stärker dazu.'
        ],
        markers: [
          { label: 'Historischer Kern', value: 'Altstadt + Balcón de Europa' },
          { label: 'Westliche Küste', value: 'Torrecilla + El Chucho + Playazo' },
          { label: 'Östliche Küste', value: 'Calahonda + Carabeo + Burriana' }
        ]
      },
      arrival: {
        eyebrow: 'Anreise & Mobilität',
        title: 'Plant die Ankunft bis zur Adresse – und erst dann den Autobedarf',
        paragraphs: [
          'Málaga-Costa del Sol ist für Nerja der wichtigste Flughafen. Aena führt eine direkte Alsa-Verbindung zwischen Flughafen und Nerja auf; Granada ist eine Alternative, bei der normalerweise am Busbahnhof Granada umgestiegen wird.',
          'Im Zentrum von Nerja funktionieren viele Strand-, Restaurant- und Einkaufstage gut zu Fuß. Ein Auto lohnt sich besonders, wenn Maro, Frigiliana, die weitere Axarquía oder regelmäßige Ausflüge fest zum Urlaub gehören.',
          'AMARA Playa liegt in der Calle Castilla Pérez 60. Zur Wohnung gehört kein Stellplatz; wer mit dem Auto anreist, sollte deshalb mit öffentlichen Parkhäusern oder Straßenparkplätzen planen – nicht mit einem freien Platz vor der Tür.'
        ],
        link: { label: 'Die komplette Anreise planen', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Wo übernachten',
        title: 'Die passende Lage hängt davon ab, was täglich vor der Tür liegen soll',
        paragraphs: [
          'Nerja ist kein durchgehender Ferienkorridor. Jede Lage verschiebt das Verhältnis zwischen Strand, Altstadtabenden, Steigungen, Parken und Ruhe.',
          'Für einen kurzen Aufenthalt ist deshalb oft nicht „Welche Lage ist die beste?“ die richtige Frage, sondern „Welche Wege möchten wir jeden Tag wiederholen?“'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand, Einkäufe und Altstadt lassen sich zu einer Fußroutine verbinden.' },
          { title: 'Altstadt & Balcón', consequence: 'Atmosphäre und Restaurants zuerst; die Anfahrt braucht mehr Planung.' },
          { title: 'Burriana & Parador-Seite', consequence: 'Eine ausgeprägte Strandlage, bei manchen Wegen in den Ort mit Steigungen.' },
          { title: 'Oberes Nerja', consequence: 'Mehr Wohnruhe und Aussicht, dafür mehr Abhängigkeit von Steigungen oder Verkehrsmitteln.' }
        ],
        link: { label: 'Nerjas Lagen vergleichen', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Strände & Wege',
        title: 'Auch in einem Strandort bleibt die Küstenwahl wichtig',
        paragraphs: [
          'Torrecilla, El Chucho, Calahonda, Carabeo und Burriana sind nicht austauschbar. Zugang, Ausstattung, Treppen und der Rückweg zur Unterkunft verändern den Strandtag.',
          'Von AMARA Playa sind es ungefähr 100 Meter bis Torrecilla. Ein kurzer Sprung ins Meer oder ein zweiter Besuch am Abend bleibt dadurch unkompliziert; andere Strände werden zu bewussten Spaziergängen oder gelegentlichen Taxi- und Autofahrten.'
        ]
      },
      dailyLife: {
        eyebrow: 'Alltag & Services',
        title: 'Das kompakte Zentrum ist Nerjas praktischer Vorteil',
        paragraphs: [
          'Altstadt, Supermärkte, Bäckereien, Restaurants und mehrere Strände liegen nah genug beieinander, um vieles ohne Auto zu verbinden. Der Fußgängerbereich gibt auch den Abenden einen anderen Rhythmus als in einem weit verteilten Küstenresort.',
          'Bei AMARA Playa liegt der Vorteil in der Wiederholung: Torrecilla ist nah, der Balcón de Europa ungefähr 500 Meter entfernt, und das Zentrum bleibt Teil eines normalen Morgens oder Abends statt eines geplanten Ausflugs.'
        ]
      },
      seasons: {
        eyebrow: 'Wetter, Jahreszeiten & längere Aufenthalte',
        title: 'Nerja wechselt eher das Tempo als seinen Charakter',
        paragraphs: [
          'Im Sommer sind Strände voller und Straßen sowie Parkplätze stärker beansprucht. Frühling und Herbst lassen oft mehr Raum für Spaziergänge und Ausflüge; im Winter rücken lokale Routinen und längere Abende in der Wohnung nach vorn.',
          'Bei einem längeren Aufenthalt zählen Wohnkomfort und Alltag stärker als eine Sehenswürdigkeitenliste. AMARA Playa bietet Heizung und Klimaanlage, eine vollständige Küche und eine Waschmaschine – passend für normale Wochen ebenso wie für Strandtage.'
        ]
      },
      amara: {
        eyebrow: 'Eure Basis in Nerja',
        title: 'Vom Gast zum Gastgeber in Nerja',
        paragraphs: [
          'Jahrelang waren wir selbst Urlaubsgäste in genau dieser Wohnung. Wir haben die Zeit hier so sehr genossen, dass wir keine Sekunde zögern mussten, als wir erfuhren, dass sie zum Verkauf steht.',
          'In wenigen Worten: absolute Gemütlichkeit und die perfekte Lage. Man ist mitten im Zentrum, und trotzdem liegt die Wohnung nach hinten heraus und bleibt herrlich ruhig – gekrönt von einem wunderbaren Meerblick. Ein Auto braucht man hier nicht.',
          'Die Lage ist schwer zu schlagen: knapp 500 Meter zum Balcón de Europa und gerade einmal 100 Meter zum Strand Torrecilla. Wer ein paar hundert Meter weiter geht, erreicht abgelegene, ruhige kleine Buchten.',
          'Auch das Gebäude gehört zur ehrlichen Planung: Die Wohnung liegt im fünften Stock mit Aufzug, davor gibt es außen fünf und innen weitere fünf Stufen. Ein privater Stellplatz ist nicht vorhanden.'
        ],
        facts: [
          'Ungefähr 100 m bis zum Strand Torrecilla',
          'Ungefähr 500 m bis zum Balcón de Europa',
          'Privater Balkon, vollständige Küche und Waschmaschine',
          'Klimaanlage und Heizung; kein privater Stellplatz'
        ],
        imageAlt: 'Helles Wohnzimmer von AMARA Playa in Nerja',
        link: { label: 'AMARA Playa ansehen', token: 'playa' }
      },
      experience: {
        eyebrow: 'Jenseits der Adresse',
        title: 'Nerja ist ein Aufenthaltsort, keine Liste zum Abhaken',
        paragraphs: [
          'Die Lage bestimmt den Tagesrhythmus; das Erlebnis entsteht daraus, was ihr daraus macht. Strandmorgen, Altstadtabende, Maro, Frigiliana und die weitere Axarquía lassen sich verbinden, ohne jeden Tag gleich zu planen.'
        ],
        link: { label: 'Frigiliana & Nerja entdecken', token: 'explore_hub' }
      }
    },
    es: {
      hero: {
        eyebrow: 'Guía de ubicación de Nerja',
        title: 'Nerja, de las mañanas de playa a las noches del casco antiguo',
        standfirst: 'Nerja permite hacer muchos planes a pie, pero sus playas y barrios ofrecen estancias muy distintas. Este recorrido os ayuda a elegir cómo llegar, moveros y vivir el pueblo más allá de una excursión de un día.',
        note: 'Una guía escrita por vuestro anfitrión, con AMARA Playa como punto de referencia práctico.',
        updated: 'Revisado en agosto de 2026'
      },
      discovery: {
        eyebrow: 'Preparar la estancia',
        title: 'Seis preguntas que dan forma a una estancia en Nerja',
        intro: 'Pensad primero en vuestro ritmo real: llegada, playa, paseos, compras y excursiones fuera del pueblo.',
        items: [
          { number: '01', title: 'Llegar a Nerja', text: 'Aeropuertos, llegada en autobús y último tramo hasta Calle Castilla Pérez 60.', label: 'Llegada y movilidad', token: 'getting_to_nerja' },
          { number: '02', title: 'Situarse en el pueblo', text: 'Frente marítimo, casco antiguo, playas orientales y laderas.', label: 'Geografía y orientación', token: 'nerja_geography' },
          { number: '03', title: 'Elegir zona', text: 'Torrecilla, casco antiguo, Burriana y urbanizaciones de la parte alta.', label: 'Dónde alojarse / zonas', token: 'nerja_where_to_stay' },
          { number: '04', title: 'Tiempo y temporadas', text: 'Cómo el calor, la lluvia y los meses tranquilos cambian la estancia.', label: 'Tiempo y temporadas', token: 'nerja_weather' },
          { number: '05', title: 'Vida diaria', text: 'Compras, paseos nocturnos, playa y desplazamientos por el pueblo.', label: 'Vida diaria y servicios', token: 'nerja_daily_life' },
          { number: '06', title: 'Quedarse más tiempo', text: 'Lo que importa cuando unas vacaciones se convierten en semanas.', label: 'Estancias de invierno', token: 'nerja_weather' }
        ]
      },
      orientation: {
        eyebrow: 'Nerja de un vistazo',
        title: 'Un pueblo costero con varios centros de gravedad',
        paragraphs: [
          'Nerja se asoma al Mediterráneo mediante una sucesión de calas y playas urbanas. El Balcón de Europa y el casco antiguo forman el corazón más conocido; Torrecilla y Chaparril quedan al oeste, mientras Burriana crea otro ambiente de playa al este.',
          'El pueblo asciende hacia el interior, por lo que dos direcciones cercanas en el mapa pueden sentirse muy distintas a pie. Cerca de la costa hay más recorridos llanos; en la parte alta, las pendientes y el transporte pesan más.'
        ],
        markers: [
          { label: 'Centro histórico', value: 'Casco antiguo + Balcón de Europa' },
          { label: 'Costa occidental', value: 'Torrecilla + El Chucho + Playazo' },
          { label: 'Costa oriental', value: 'Calahonda + Carabeo + Burriana' }
        ]
      },
      arrival: {
        eyebrow: 'Llegada y movilidad',
        title: 'Llegad pensando en la dirección y decidid después cuánto coche necesitáis',
        paragraphs: [
          'Málaga-Costa del Sol es el aeropuerto más práctico para Nerja. Aena incluye una conexión directa de Alsa entre el aeropuerto y Nerja; Granada es una alternativa que suele exigir transbordo en su estación de autobuses.',
          'Una vez en el centro, muchos días de playa, restaurantes y compras funcionan bien a pie. El coche resulta más útil si Maro, Frigiliana, la Axarquía o varias excursiones forman parte central del viaje.',
          'AMARA Playa está en Calle Castilla Pérez 60. El apartamento no incluye aparcamiento, de modo que conviene contar con parkings públicos o estacionamiento en la calle, nunca con una plaza garantizada en la puerta.'
        ],
        link: { label: 'Preparar todo el trayecto', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Dónde alojarse',
        title: 'La zona adecuada depende de lo que queráis tener cada día al salir',
        paragraphs: [
          'Nerja no es una única franja turística. Cada zona cambia el equilibrio entre playa, noches en el centro, cuestas, aparcamiento y tranquilidad.',
          'Para una estancia corta, la pregunta más útil no suele ser “¿qué zona es mejor?”, sino “¿qué recorridos queremos repetir a diario?”'
        ],
        archetypes: [
          { title: 'Torrecilla y Chaparril', consequence: 'Playa, compras y casco antiguo pueden formar una sola rutina a pie.' },
          { title: 'Casco antiguo y Balcón', consequence: 'Ambiente y restaurantes en primer plano; el acceso en coche exige más previsión.' },
          { title: 'Burriana y zona Parador', consequence: 'Marcado ambiente de playa, con pendientes en algunos recorridos al centro.' },
          { title: 'Parte alta de Nerja', consequence: 'Más calma residencial y vistas, con mayor peso de cuestas o transporte.' }
        ],
        link: { label: 'Comparar las zonas de Nerja', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Playas y recorridos',
        title: 'En Nerja también importa elegir qué costa queréis vivir',
        paragraphs: [
          'Torrecilla, El Chucho, Calahonda, Carabeo y Burriana no son intercambiables. Accesos, servicios, escaleras y la vuelta al alojamiento cambian el día de playa.',
          'Desde AMARA Playa hay unos 100 metros hasta Torrecilla. Es fácil bajar a darse un baño o volver al atardecer; las demás playas pueden ser paseos deliberados o salidas puntuales en taxi o coche.'
        ]
      },
      dailyLife: {
        eyebrow: 'Vida diaria y servicios',
        title: 'El centro compacto es la gran ventaja práctica de Nerja',
        paragraphs: [
          'Casco antiguo, supermercados, panaderías, restaurantes y varias playas están lo bastante cerca para combinarlos sin mover el coche. El núcleo peatonal también da a las noches un ritmo distinto al de una urbanización costera dispersa.',
          'En AMARA Playa, la ventaja está en la repetición: Torrecilla queda cerca, el Balcón de Europa está a unos 500 metros y el centro forma parte de una mañana o una noche normal, no de una excursión.'
        ]
      },
      seasons: {
        eyebrow: 'Tiempo, temporadas y estancias largas',
        title: 'Nerja cambia más de ritmo que de identidad',
        paragraphs: [
          'En verano aumentan la ocupación de playas y la presión sobre tráfico y aparcamiento. Primavera y otoño suelen dejar más espacio para caminar y explorar la comarca; en invierno cobran peso las rutinas locales y las tardes en casa.',
          'En estancias largas importan más el confort y el día a día que una lista de visitas. AMARA Playa dispone de calefacción y aire acondicionado, cocina completa y lavadora, útil tanto para semanas normales como para días de playa.'
        ]
      },
      amara: {
        eyebrow: 'Vuestra base en Nerja',
        title: 'De huéspedes a anfitriones en Nerja',
        paragraphs: [
          'Durante años fuimos nosotros mismos huéspedes en este mismo apartamento. Disfrutamos tanto del tiempo aquí que no dudamos ni un segundo cuando supimos que se vendía.',
          'Si tuviéramos que resumirlo: comodidad absoluta y la ubicación perfecta. Estáis en pleno centro y, aun así, el apartamento da a la parte trasera y se mantiene maravillosamente tranquilo, coronado por unas vistas al mar. Aquí no hace falta coche.',
          'La ubicación es difícil de superar: apenas 500 metros hasta el Balcón de Europa y solo 100 metros hasta la playa de Torrecilla. Unos cientos de metros más allá se llega a pequeñas calas apartadas y tranquilas.',
          'El edificio también forma parte de una planificación honesta: el apartamento está en una quinta planta con ascensor, pero hay cinco escalones fuera y otros cinco dentro antes de llegar a él. No incluye aparcamiento privado.'
        ],
        facts: [
          'Aproximadamente 100 m hasta la playa de Torrecilla',
          'Aproximadamente 500 m hasta el Balcón de Europa',
          'Balcón privado, cocina completa y lavadora',
          'Aire acondicionado y calefacción; sin aparcamiento privado'
        ],
        imageAlt: 'Salón luminoso de AMARA Playa en Nerja',
        link: { label: 'Ver AMARA Playa', token: 'playa' }
      },
      experience: {
        eyebrow: 'Más allá de la dirección',
        title: 'Nerja es un lugar para quedarse, no una lista que completar',
        paragraphs: [
          'La ubicación marca el ritmo; la experiencia nace de lo que hacéis con ella. Mañanas de playa, noches en el casco antiguo, Maro, Frigiliana y la Axarquía pueden combinarse sin convertir todos los días en el mismo plan.'
        ],
        link: { label: 'Descubrir Frigiliana y Nerja', token: 'explore_hub' }
      }
    },
    nl: {
      hero: {
        eyebrow: 'Nerja locatiegids',
        title: 'Nerja, van ochtenden aan zee tot avonden in de oude stad',
        standfirst: 'In Nerja kun je veel te voet doen, maar de stranden en buurten leveren heel verschillende verblijven op. Dit overzicht helpt bij aankomst, locatiekeuze en vervoer – voor wie langer blijft dan een dagtrip.',
        note: 'Een gids van jullie host voor verblijfsgasten, met AMARA Playa als praktisch vertrekpunt.',
        updated: 'Gecontroleerd in augustus 2026'
      },
      discovery: {
        eyebrow: 'Je verblijf plannen',
        title: 'Zes vragen die je verblijf in Nerja bepalen',
        intro: 'Begin bij je echte dagritme: aankomst, strandkeuze, lopen, boodschappen en uitstapjes buiten de stad.',
        items: [
          { number: '01', title: 'Naar Nerja reizen', text: 'Luchthavens, aankomst per bus en het laatste stuk naar Calle Castilla Pérez 60.', label: 'Aankomst & mobiliteit', token: 'getting_to_nerja' },
          { number: '02', title: 'De stad lezen', text: 'Zeekant, oude centrum, oostelijke stranden en de heuvels erachter.', label: 'Geografie & oriëntatie', token: 'nerja_geography' },
          { number: '03', title: 'De juiste buurt kiezen', text: 'Vergelijk Torrecilla, het oude centrum, Burriana en hoger gelegen woonwijken.', label: 'Waar overnachten / gebieden', token: 'nerja_where_to_stay' },
          { number: '04', title: 'Weer & seizoenen', text: 'Hoe warmte, regen en rustige maanden een kustverblijf veranderen.', label: 'Weer & seizoenen', token: 'nerja_weather' },
          { number: '05', title: 'Dagelijks leven', text: 'Boodschappen, avondwandelingen, strandritme en bewegen door de stad.', label: 'Dagelijks leven & diensten', token: 'nerja_daily_life' },
          { number: '06', title: 'Langer blijven', text: 'Wat belangrijker wordt als een vakantie weken gaat duren.', label: 'Winterverblijven', token: 'nerja_weather' }
        ]
      },
      orientation: {
        eyebrow: 'Nerja in het kort',
        title: 'Een kuststad met meerdere zwaartepunten',
        paragraphs: [
          'Nerja ligt aan de Middellandse Zee met een reeks baaien en stadsstranden. Het Balcón de Europa en het oude centrum vormen het bekende hart; Torrecilla en Chaparril liggen westelijk, terwijl Burriana aan de oostkant een eigen strandgebied vormt.',
          'De stad loopt landinwaarts omhoog. Twee adressen die op de kaart dichtbij lijken, kunnen te voet heel anders aanvoelen. Dicht bij zee blijven veel dagelijkse routes vlakker; hoger in Nerja worden hellingen en vervoer belangrijker.'
        ],
        markers: [
          { label: 'Historisch hart', value: 'Oude centrum + Balcón de Europa' },
          { label: 'Westkust', value: 'Torrecilla + El Chucho + Playazo' },
          { label: 'Oostkust', value: 'Calahonda + Carabeo + Burriana' }
        ]
      },
      arrival: {
        eyebrow: 'Aankomst & mobiliteit',
        title: 'Reis naar het adres en bepaal daarna hoeveel auto je nodig hebt',
        paragraphs: [
          'Málaga-Costa del Sol is de belangrijkste luchthaven voor Nerja. Aena vermeldt een rechtstreekse Alsa-verbinding tussen de luchthaven en Nerja; Granada is een alternatief waarbij je doorgaans overstapt bij het busstation van Granada.',
          'In centraal Nerja verlopen veel strand-, restaurant- en boodschappendagen prima te voet. Een auto is vooral waardevol als Maro, Frigiliana, de Axarquía of meerdere regionale uitstapjes belangrijk zijn.',
          'AMARA Playa ligt aan Calle Castilla Pérez 60. Het appartement heeft geen parkeerplaats, dus plan een openbare garage of straatplek en ga niet uit van parkeren voor de deur.'
        ],
        link: { label: 'Plan de volledige reis', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'De juiste buurt hangt af van wat je dagelijks voor de deur wilt',
        paragraphs: [
          'Nerja is geen aaneengesloten vakantiezone. Elke buurt verschuift de balans tussen strand, avonden in het centrum, hellingen, parkeren en rust.',
          'Voor een kort verblijf is de handigste vraag vaak niet “Welke buurt is het best?”, maar “Welke routes willen we elke dag opnieuw lopen?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand, dagelijkse winkels en oude centrum passen in één wandelritme.' },
          { title: 'Oude centrum & Balcón', consequence: 'Sfeer en restaurants voorop; toegang met de auto vraagt meer planning.' },
          { title: 'Burriana & Parador-zijde', consequence: 'Een uitgesproken strandsfeer, met hellingen op sommige routes naar het centrum.' },
          { title: 'Hoger Nerja', consequence: 'Meer woonrust en uitzicht, met meer afhankelijkheid van hellingen of vervoer.' }
        ],
        link: { label: 'Vergelijk de buurten van Nerja', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Stranden & routes',
        title: 'Ook in een badplaats blijft de keuze van het strand belangrijk',
        paragraphs: [
          'Torrecilla, El Chucho, Calahonda, Carabeo en Burriana zijn niet hetzelfde. Toegang, voorzieningen, trappen en de terugweg naar je verblijf bepalen hoe de stranddag voelt.',
          'Vanaf AMARA Playa is Torrecilla ongeveer 100 meter. Even zwemmen of later op de dag teruggaan is daardoor eenvoudig; andere stranden blijven bewuste wandelingen of af en toe een rit per taxi of auto.'
        ]
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven & diensten',
        title: 'Het compacte centrum is Nerja’s praktische voordeel',
        paragraphs: [
          'Het oude centrum, supermarkten, bakkers, restaurants en verschillende stranden liggen dicht genoeg bij elkaar om de auto te laten staan. Het voetgangershart geeft ook de avonden een ander ritme dan in een verspreid kustresort.',
          'Bij AMARA Playa zit de winst in herhaling: Torrecilla is dichtbij, het Balcón de Europa ligt op ongeveer 500 meter en het centrum hoort bij een gewone ochtend of avond in plaats van bij een uitstapje.'
        ]
      },
      seasons: {
        eyebrow: 'Weer, seizoenen & langer verblijf',
        title: 'Nerja verandert eerder van tempo dan van karakter',
        paragraphs: [
          'In de zomer zijn stranden drukker en staan wegen en parkeerplaatsen meer onder druk. Lente en herfst geven vaak meer ruimte om te wandelen en de streek te verkennen; in de winter worden lokale routines en langere avonden binnen belangrijker.',
          'Bij een langer verblijf tellen wooncomfort en dagelijks gemak zwaarder dan een lijst bezienswaardigheden. AMARA Playa heeft verwarming en airconditioning, een complete keuken en wasmachine – passend bij gewone weken én stranddagen.'
        ]
      },
      amara: {
        eyebrow: 'Jullie uitvalsbasis in Nerja',
        title: 'Van gast naar gastheer in Nerja',
        paragraphs: [
          'Jarenlang waren we zelf vakantiegasten in precies dit appartement. We genoten er zo van dat we geen seconde twijfelden toen we hoorden dat het te koop stond.',
          'In een paar woorden: absolute gezelligheid en de perfecte ligging. Je zit midden in het centrum en toch ligt het appartement aan de achterzijde en blijft het heerlijk rustig — bekroond met zeezicht. Een auto heb je hier niet nodig.',
          'De ligging is moeilijk te verslaan: nog geen 500 meter tot de Balcón de Europa en slechts 100 meter tot het strand Torrecilla. Een paar honderd meter verder liggen afgelegen, rustige baaitjes.',
          'Ook het gebouw hoort bij een eerlijke planning: het appartement ligt op de vijfde verdieping met lift, maar vóór de lift zijn er buiten vijf en binnen nog vijf treden. Er is geen eigen parkeerplaats.'
        ],
        facts: [
          'Ongeveer 100 m naar het strand van Torrecilla',
          'Ongeveer 500 m naar het Balcón de Europa',
          'Privébalkon, complete keuken en wasmachine',
          'Airconditioning en verwarming; geen privéparkeerplaats'
        ],
        imageAlt: 'Lichte woonkamer van AMARA Playa in Nerja',
        link: { label: 'Bekijk AMARA Playa', token: 'playa' }
      },
      experience: {
        eyebrow: 'Verder dan het adres',
        title: 'Nerja is een plek om te verblijven, geen lijst om af te vinken',
        paragraphs: [
          'De locatie bepaalt het dagritme; de ervaring ontstaat uit wat je ermee doet. Strandochtenden, avonden in het oude centrum, Maro, Frigiliana en de Axarquía zijn te combineren zonder iedere dag hetzelfde in te delen.'
        ],
        link: { label: 'Ontdek Frigiliana & Nerja', token: 'explore_hub' }
      }
    },
    sv: {
      hero: {
        eyebrow: 'Nerja lägesguide',
        title: 'Nerja, från strandmorgnar till kvällar i gamla stan',
        standfirst: 'Mycket i Nerja fungerar till fots, men stränderna och områdena ger helt olika vistelser. Den här överblicken hjälper er att välja ankomst, läge och vardagsrörelser för mer än en dagsutflykt.',
        note: 'En guide från er värd för övernattande gäster, med AMARA Playa som praktisk utgångspunkt.',
        updated: 'Granskad i augusti 2026'
      },
      discovery: {
        eyebrow: 'Planera vistelsen',
        title: 'Sex frågor som formar en vistelse i Nerja',
        intro: 'Börja med er verkliga vardag: ankomst, strandval, promenader, inköp och utflykter utanför staden.',
        items: [
          { number: '01', title: 'Ta sig till Nerja', text: 'Flygplatser, bussankomst och sista sträckan till Calle Castilla Pérez 60.', label: 'Ankomst & mobilitet', token: 'getting_to_nerja' },
          { number: '02', title: 'Orientera sig', text: 'Havskanten, gamla stan, östra stränder och höjderna bakom.', label: 'Geografi & orientering', token: 'nerja_geography' },
          { number: '03', title: 'Välj rätt område', text: 'Jämför Torrecilla, gamla stan, Burriana och bostadsområdena högre upp.', label: 'Var ska man bo / områden', token: 'nerja_where_to_stay' },
          { number: '04', title: 'Väder & årstider', text: 'Hur värme, regn och lugnare månader förändrar kustvistelsen.', label: 'Väder & årstider', token: 'nerja_weather' },
          { number: '05', title: 'Vardagsliv', text: 'Matinköp, kvällspromenader, strandrutiner och rörelser i staden.', label: 'Vardagsliv & service', token: 'nerja_daily_life' },
          { number: '06', title: 'Stanna längre', text: 'Det som blir viktigare när semestern blir flera veckor.', label: 'Vintervistelser', token: 'nerja_weather' }
        ]
      },
      orientation: {
        eyebrow: 'Nerja i korthet',
        title: 'En kuststad med flera tyngdpunkter',
        paragraphs: [
          'Nerja möter Medelhavet genom en rad vikar och stadsstränder. Balcón de Europa och gamla stan är det välkända hjärtat; Torrecilla och Chaparril ligger västerut, medan Burriana bildar ett eget strandområde i öster.',
          'Staden stiger inåt land. Två adresser som ser nära ut på kartan kan kännas olika till fots. Nära kusten är fler vardagsvägar flacka; högre upp får backar och transport större betydelse.'
        ],
        markers: [
          { label: 'Historiskt centrum', value: 'Gamla stan + Balcón de Europa' },
          { label: 'Västra kusten', value: 'Torrecilla + El Chucho + Playazo' },
          { label: 'Östra kusten', value: 'Calahonda + Carabeo + Burriana' }
        ]
      },
      arrival: {
        eyebrow: 'Ankomst & mobilitet',
        title: 'Res till adressen och avgör sedan hur mycket bil ni behöver',
        paragraphs: [
          'Málaga-Costa del Sol är den viktigaste flygplatsen för Nerja. Aena anger en direkt Alsa-förbindelse mellan flygplatsen och Nerja; Granada är ett alternativ som vanligen innebär byte vid Granadas busstation.',
          'I centrala Nerja fungerar många strand-, restaurang- och inköpsdagar bra till fots. Bil blir framför allt värdefull om Maro, Frigiliana, Axarquía eller flera regionala utflykter är viktiga.',
          'AMARA Playa ligger på Calle Castilla Pérez 60. Lägenheten har ingen parkeringsplats, så planera för offentligt garage eller gatuparkering och räkna inte med en plats vid dörren.'
        ],
        link: { label: 'Planera hela resan', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Var ska man bo',
        title: 'Rätt område beror på vad ni vill ha utanför dörren varje dag',
        paragraphs: [
          'Nerja är inte ett enda sammanhängande semesterstråk. Varje område ändrar balansen mellan strand, kvällar i centrum, backar, parkering och lugn.',
          'För en kort vistelse är den bästa frågan ofta inte ”Vilket område är bäst?” utan ”Vilka sträckor vill vi göra varje dag?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand, vardagsinköp och gamla stan ryms i en promenadrutin.' },
          { title: 'Gamla stan & Balcón', consequence: 'Atmosfär och restauranger först; bilankomst kräver mer planering.' },
          { title: 'Burriana & Parador-sidan', consequence: 'Tydlig strandkänsla, med backar på vissa vägar in mot centrum.' },
          { title: 'Övre Nerja', consequence: 'Mer bostadsro och utsikt, men större beroende av backar eller transport.' }
        ],
        link: { label: 'Jämför Nerjas områden', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Stränder & vägar',
        title: 'Även i en badort spelar valet av kustläge roll',
        paragraphs: [
          'Torrecilla, El Chucho, Calahonda, Carabeo och Burriana är inte utbytbara. Tillgång, service, trappor och vägen tillbaka till boendet förändrar stranddagen.',
          'Från AMARA Playa är det cirka 100 meter till Torrecilla. Ett snabbt dopp eller ett nytt besök på kvällen blir enkelt; andra stränder kan vara medvetna promenader eller enstaka taxi- och bilturer.'
        ]
      },
      dailyLife: {
        eyebrow: 'Vardagsliv & service',
        title: 'Det kompakta centrumet är Nerjas praktiska fördel',
        paragraphs: [
          'Gamla stan, mataffärer, bagerier, restauranger och flera stränder ligger nära nog för att kombineras utan bil. Gågatorna ger också kvällarna en annan rytm än i en utspridd kustresort.',
          'Vid AMARA Playa ligger fördelen i upprepningen: Torrecilla är nära, Balcón de Europa ligger cirka 500 meter bort och centrum blir en del av en vanlig morgon eller kväll, inte en utflykt.'
        ]
      },
      seasons: {
        eyebrow: 'Väder, årstider & längre vistelser',
        title: 'Nerja byter tempo mer än identitet',
        paragraphs: [
          'Sommaren ger mer folk på stränderna och större tryck på vägar och parkering. Vår och höst ger ofta mer utrymme för promenader och utflykter; på vintern blir lokala rutiner och längre kvällar hemma viktigare.',
          'Vid en längre vistelse väger bostadskomfort och vardag tyngre än en lista över sevärdheter. AMARA Playa har värme och luftkonditionering, fullt kök och tvättmaskin – för vanliga veckor såväl som stranddagar.'
        ]
      },
      amara: {
        eyebrow: 'Er bas i Nerja',
        title: 'Från gäst till värd i Nerja',
        paragraphs: [
          'I flera år var vi själva semestergäster i precis den här lägenheten. Vi trivdes så bra att vi inte tvekade en sekund när vi fick veta att den var till salu.',
          'Med några få ord: absolut mysighet och det perfekta läget. Ni bor mitt i centrum, och ändå vetter lägenheten mot baksidan och förblir härligt tyst — krönt av havsutsikt. Här behöver ni ingen bil.',
          'Läget är svårslaget: knappt 500 meter till Balcón de Europa och bara 100 meter till stranden Torrecilla. Går man några hundra meter till når man små, avskilda och lugna vikar.',
          'Även byggnaden hör till en ärlig planering: lägenheten ligger på femte våningen med hiss, men före hissen finns fem trappsteg utomhus och fem inomhus. Privat parkering ingår inte.'
        ],
        facts: [
          'Cirka 100 m till Torrecillas strand',
          'Cirka 500 m till Balcón de Europa',
          'Privat balkong, fullt kök och tvättmaskin',
          'Luftkonditionering och värme; ingen privat parkering'
        ],
        imageAlt: 'Ljust vardagsrum på AMARA Playa i Nerja',
        link: { label: 'Se AMARA Playa', token: 'playa' }
      },
      experience: {
        eyebrow: 'Bortom adressen',
        title: 'Nerja är en plats att bo på, inte en lista att bocka av',
        paragraphs: [
          'Läget sätter dagsrytmen; upplevelsen kommer av vad ni gör med den. Strandmorgnar, kvällar i gamla stan, Maro, Frigiliana och Axarquía går att kombinera utan att varje dag följer samma schema.'
        ],
        link: { label: 'Upptäck Frigiliana & Nerja', token: 'explore_hub' }
      }
    }
  }
};
