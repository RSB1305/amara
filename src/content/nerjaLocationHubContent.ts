import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaLocationHubLink {
  label: string;
  token?: LinkToken;
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
  version: '2026-08-20-nerja-location-hub-v1.1',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  article: {
    datePublished: '2026-08-13',
    dateModified: '2026-08-20',
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
      description: 'Cómo se conectan el casco antiguo, las playas y las zonas de Nerja: llegada, paseos, aparcamiento y vida diaria junto a Torrecilla.',
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
        title: 'A holiday in Nerja: beaches, old town and a place with several centres',
        standfirst: 'Welcome to Nerja. It is compact enough for many days on foot, yet its beaches and neighbourhoods create very different stays. This is the overview for choosing how you want to arrive, move and live here for more than a day trip.',
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
          'For a short stay, the most useful question is often not “Which area is best?” but “Which journeys do you want to repeat every day?”'
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
          'From AMARA Playa, Torrecilla is approximately 200 metres away. That makes a quick swim or a second visit near sunset easy; other beaches can remain deliberate walks or occasional taxi and car outings.'
        ]
      },
      dailyLife: {
        eyebrow: 'Daily life & services',
        title: 'The compact centre is Nerja’s everyday advantage',
        paragraphs: [
          'Nerja’s size brings a broad range of supermarkets, bakeries, pharmacies and practical services. In and around the centre, many normal errands can be combined without moving the car; farther uphill, the exact neighbourhood changes the effort on foot.',
          'At AMARA Playa, the practical benefit is repetition: Torrecilla is close, the Balcón de Europa is approximately 500 metres away and the centre can stay part of an ordinary morning or evening rather than a planned excursion.'
        ],
        link: { label: 'Daily life & services in Nerja', token: 'nerja_daily_life' }
      },
      seasons: {
        eyebrow: 'Weather, seasons & longer stays',
        title: 'Use weather for the conditions and daily life for the ordinary weeks',
        paragraphs: [
          'The Weather guide answers what conditions to expect: heat, rain, seasonal differences and what the forecast for your dates still needs to decide. Winter is often quieter, but it can also mean wetter periods and longer evenings indoors.',
          'The Daily Life guide answers a different question: whether Nerja works when the stay lasts for several ordinary weeks. Groceries, pharmacies, repeated walks, cooking, laundry and the choice between car-free days and regional outings then matter more than a sightseeing list.',
          'AMARA Playa is one practical example rather than a promise about every address: its central position supports many routines on foot, while heating and air conditioning, a full kitchen and a washing machine make time indoors and everyday tasks easier.',
          'A central longer stay can remain largely car-free when most days stay in Nerja. A car becomes more useful when repeated trips to Maro, Frigiliana or the wider Axarquía are part of the plan.'
        ],
        link: { label: 'See how ordinary weeks work in Nerja', token: 'nerja_daily_life' }
      },
      amara: {
        eyebrow: 'Your Nerja base',
        title: 'From guest to host in Nerja',
        paragraphs: [
          'For years we were holiday guests in this exact apartment. We enjoyed our time here so much that we did not hesitate for a second when we heard it was for sale.',
          'In a few words: central, set back from the street and calm, with a sea view. Most everyday Nerja plans work well on foot from here, so you will rarely need a car in town.',
          'The location is hard to beat: barely 500 metres to the Balcón de Europa and just 200 metres to Torrecilla beach. Walk a few hundred metres further and you reach small, secluded coves.',
          'The building belongs in an honest plan, too: the apartment is on the fifth floor with a lift, but there are five steps outside and five inside before you reach it. No private parking is supplied.'
        ],
        facts: [
          'Approximately 200 m to Torrecilla beach',
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
        link: { label: 'Explore Nerja experiences', token: 'nerja_experience_hub' }
      }
    },
    de: {
      hero: {
        eyebrow: 'Nerja Lage-Guide',
        title: 'Urlaub in Nerja: Strände, Altstadt und ein Ort mit mehreren Mittelpunkten',
        standfirst: 'Herzlich willkommen in Nerja. Hier lässt sich vieles zu Fuß erledigen, trotzdem entstehen je nach Strand und Wohnlage ganz unterschiedliche Aufenthalte. Dieser Überblick hilft euch bei Anreise, Lagewahl und Mobilität – für mehr als nur einen Tagesausflug.',
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
          'Für einen kurzen Aufenthalt ist deshalb oft nicht „Welche Lage ist die beste?“ die richtige Frage, sondern „Welche Wege möchtet ihr jeden Tag wiederholen?“'
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
          'Von AMARA Playa sind es ungefähr 200 Meter bis Torrecilla. Ein kurzer Sprung ins Meer oder ein zweiter Besuch am Abend bleibt dadurch unkompliziert; andere Strände werden zu bewussten Spaziergängen oder gelegentlichen Taxi- und Autofahrten.'
        ]
      },
      dailyLife: {
        eyebrow: 'Alltag & Services',
        title: 'Das kompakte Zentrum ist Nerjas praktischer Vorteil',
        paragraphs: [
          'Nerjas Größe bringt eine breite Auswahl an Supermärkten, Bäckereien, Apotheken und praktischen Services. Im und rund um das Zentrum lassen sich viele normale Erledigungen ohne Auto verbinden; weiter oben verändert die konkrete Lage den Aufwand zu Fuß.',
          'Bei AMARA Playa liegt der Vorteil in der Wiederholung: Torrecilla ist nah, der Balcón de Europa ungefähr 500 Meter entfernt, und das Zentrum bleibt Teil eines normalen Morgens oder Abends statt eines geplanten Ausflugs.'
        ],
        link: { label: 'Alltag & Versorgung in Nerja', token: 'nerja_daily_life' }
      },
      seasons: {
        eyebrow: 'Wetter, Jahreszeiten & längere Aufenthalte',
        title: 'Der Wetter-Guide erklärt die Bedingungen, der Alltags-Guide die normalen Wochen',
        paragraphs: [
          'Der Wetter-Guide beantwortet, mit welchen Bedingungen ihr rechnen solltet: Hitze, Regen, saisonale Unterschiede und alles, was erst die Vorhersage für eure Reisedaten klärt. Im Winter ist Nerja oft ruhiger, zugleich sind feuchtere Phasen und längere Abende drinnen möglich.',
          'Der Alltags-Guide beantwortet eine andere Frage: Funktioniert Nerja, wenn aus dem Urlaub mehrere normale Wochen werden? Dann zählen Einkäufe, Apotheken, wiederkehrende Wege, Kochen, Wäsche und die Entscheidung zwischen autofreien Tagen und Ausflügen stärker als eine Sehenswürdigkeitenliste.',
          'AMARA Playa ist dafür ein praktisches Beispiel und keine Aussage über jede Adresse: Die zentrale Lage unterstützt viele Routinen zu Fuß; Heizung und Klimaanlage, eine vollständige Küche und eine Waschmaschine erleichtern Zeit in der Wohnung und normale Aufgaben.',
          'Ein längerer Aufenthalt im Zentrum kann weitgehend autofrei bleiben, wenn die meisten Tage in Nerja stattfinden. Für regelmäßige Fahrten nach Maro, Frigiliana oder in die weitere Axarquía wird ein Auto nützlicher.'
        ],
        link: { label: 'So funktionieren normale Wochen in Nerja', token: 'nerja_daily_life' }
      },
      amara: {
        eyebrow: 'Eure Basis in Nerja',
        title: 'Vom Gast zum Gastgeber in Nerja',
        paragraphs: [
          'Jahrelang waren wir selbst Urlaubsgäste in genau dieser Wohnung. Wir haben die Zeit hier so sehr genossen, dass wir keine Sekunde zögern mussten, als wir erfuhren, dass sie zum Verkauf steht.',
          'In wenigen Worten: zentral, nach hinten ausgerichtet und ruhig, mit Meerblick. Die meisten Alltagswege in Nerja funktionieren von hier gut zu Fuß, sodass ihr im Ort nur selten ein Auto braucht.',
          'Die Lage ist schwer zu schlagen: knapp 500 Meter zum Balcón de Europa und gerade einmal 200 Meter zum Strand Torrecilla. Wer ein paar hundert Meter weiter geht, erreicht abgelegene, ruhige kleine Buchten.',
          'Auch das Gebäude gehört zur ehrlichen Planung: Die Wohnung liegt im fünften Stock mit Aufzug, davor gibt es außen fünf und innen weitere fünf Stufen. Ein privater Stellplatz ist nicht vorhanden.'
        ],
        facts: [
          'Ungefähr 200 m bis zum Strand Torrecilla',
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
        link: { label: 'Nerja-Erlebnisse entdecken', token: 'nerja_experience_hub' }
      }
    },
    es: {
      hero: {
        eyebrow: 'Guía de ubicación de Nerja',
        title: 'Vacaciones en Nerja: playas, casco antiguo y un pueblo con varios centros',
        standfirst: 'Bienvenidos a Nerja. Aquí se pueden hacer muchos planes a pie, pero sus playas y barrios ofrecen estancias muy distintas. Este recorrido os ayuda a elegir cómo llegar, moveros y vivir el pueblo más allá de una excursión de un día.',
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
          'Para una estancia corta, la pregunta más útil no suele ser “¿qué zona es mejor?”, sino “¿qué recorridos queréis repetir a diario?”'
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
          'Desde AMARA Playa hay unos 200 metros hasta Torrecilla. Es fácil bajar a darse un baño o volver al atardecer; las demás playas pueden ser paseos deliberados o salidas puntuales en taxi o coche.'
        ]
      },
      dailyLife: {
        eyebrow: 'Vida diaria y servicios',
        title: 'El centro compacto es la gran ventaja práctica de Nerja',
        paragraphs: [
          'El tamaño de Nerja aporta una oferta amplia de supermercados, panaderías, farmacias y servicios prácticos. En el centro y sus alrededores, muchos recados se combinan sin mover el coche; en las zonas altas, la ubicación exacta cambia el esfuerzo a pie.',
          'En AMARA Playa, la ventaja está en la repetición: Torrecilla queda cerca, el Balcón de Europa está a unos 500 metros y el centro forma parte de una mañana o una noche normal, no de una excursión.'
        ],
        link: { label: 'Vida diaria y servicios en Nerja', token: 'nerja_daily_life' }
      },
      seasons: {
        eyebrow: 'Tiempo, temporadas y estancias largas',
        title: 'El tiempo explica las condiciones; la vida diaria, las semanas normales',
        paragraphs: [
          'La guía del Tiempo responde qué condiciones podéis esperar: calor, lluvia, diferencias estacionales y todo lo que todavía debe decidir la previsión para vuestras fechas. El invierno suele ser más tranquilo, pero también puede traer periodos más húmedos y tardes más largas dentro de casa.',
          'La guía de Vida diaria responde otra pregunta: ¿funciona Nerja cuando la estancia dura varias semanas normales? Entonces pesan más la compra, las farmacias, los recorridos repetidos, cocinar, lavar la ropa y elegir entre días sin coche y excursiones que una lista de visitas.',
          'AMARA Playa es un ejemplo práctico, no una promesa sobre cualquier dirección: su ubicación céntrica permite resolver muchas rutinas a pie, mientras que la calefacción y el aire acondicionado, la cocina completa y la lavadora facilitan el tiempo dentro y las tareas cotidianas.',
          'Una estancia larga en el centro puede seguir siendo en gran parte sin coche si la mayoría de los días transcurren en Nerja. El coche resulta más útil cuando el plan incluye viajes frecuentes a Maro, Frigiliana o el resto de la Axarquía.'
        ],
        link: { label: 'Ver cómo funcionan las semanas normales en Nerja', token: 'nerja_daily_life' }
      },
      amara: {
        eyebrow: 'Vuestra base en Nerja',
        title: 'De huéspedes a anfitriones en Nerja',
        paragraphs: [
          'Durante años fuimos nosotros mismos huéspedes en este mismo apartamento. Disfrutamos tanto del tiempo aquí que no dudamos ni un segundo cuando supimos que se vendía.',
          'En pocas palabras: una ubicación céntrica, orientada a la parte trasera y tranquila, con vistas al mar. Desde aquí podéis resolver a pie la mayoría de los planes diarios en Nerja, por lo que rara vez necesitaréis coche dentro del pueblo.',
          'La ubicación es difícil de superar: apenas 500 metros hasta el Balcón de Europa y solo 200 metros hasta la playa de Torrecilla. Unos cientos de metros más allá se llega a pequeñas calas apartadas y tranquilas.',
          'El edificio también forma parte de una planificación honesta: el apartamento está en una quinta planta con ascensor, pero hay cinco escalones fuera y otros cinco dentro antes de llegar a él. No incluye aparcamiento privado.'
        ],
        facts: [
          'Aproximadamente 200 m hasta la playa de Torrecilla',
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
        link: { label: 'Descubrir experiencias en Nerja', token: 'nerja_experience_hub' }
      }
    },
    nl: {
      hero: {
        eyebrow: 'Nerja locatiegids',
        title: 'Vakantie in Nerja: stranden, oude kern en een plaats met meerdere centra',
        standfirst: 'Welkom in Nerja. Hier kunnen jullie veel te voet doen, maar de stranden en buurten leveren heel verschillende verblijven op. Dit overzicht helpt bij aankomst, locatiekeuze en vervoer – voor wie langer blijft dan een dagtrip.',
        note: 'Een gids van jullie host voor verblijfsgasten, met AMARA Playa als praktisch vertrekpunt.',
        updated: 'Gecontroleerd in augustus 2026'
      },
      discovery: {
        eyebrow: 'Jullie verblijf plannen',
        title: 'Zes vragen die jullie verblijf in Nerja bepalen',
        intro: 'Begin bij jullie echte dagritme: aankomst, strandkeuze, lopen, boodschappen en uitstapjes buiten de stad.',
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
        title: 'Reis naar het adres en bepaal daarna hoeveel auto jullie nodig hebben',
        paragraphs: [
          'Málaga-Costa del Sol is de belangrijkste luchthaven voor Nerja. Aena vermeldt een rechtstreekse Alsa-verbinding tussen de luchthaven en Nerja; Granada is een alternatief waarbij jullie doorgaans overstappen bij het busstation van Granada.',
          'In centraal Nerja verlopen veel strand-, restaurant- en boodschappendagen prima te voet. Een auto is vooral waardevol als Maro, Frigiliana, de Axarquía of meerdere regionale uitstapjes belangrijk zijn.',
          'AMARA Playa ligt aan Calle Castilla Pérez 60. Het appartement heeft geen parkeerplaats, dus plan een openbare garage of straatplek en ga niet uit van parkeren voor de deur.'
        ],
        link: { label: 'Plan de volledige reis', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'De juiste buurt hangt af van wat jullie dagelijks voor de deur willen',
        paragraphs: [
          'Nerja is geen aaneengesloten vakantiezone. Elke buurt verschuift de balans tussen strand, avonden in het centrum, hellingen, parkeren en rust.',
          'Voor een kort verblijf is de handigste vraag vaak niet “Welke buurt is het best?”, maar “Welke routes willen jullie elke dag opnieuw lopen?”'
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
          'Torrecilla, El Chucho, Calahonda, Carabeo en Burriana zijn niet hetzelfde. Toegang, voorzieningen, trappen en de terugweg naar jullie verblijf bepalen hoe de stranddag voelt.',
          'Vanaf AMARA Playa is Torrecilla ongeveer 200 meter. Even zwemmen of later op de dag teruggaan is daardoor eenvoudig; andere stranden blijven bewuste wandelingen of af en toe een rit per taxi of auto.'
        ]
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven & diensten',
        title: 'Het compacte centrum is Nerja’s praktische voordeel',
        paragraphs: [
          'Door Nerja’s omvang is er een brede keuze aan supermarkten, bakkers, apotheken en praktische diensten. In en rond het centrum kunnen veel gewone boodschappen zonder auto; hogerop bepaalt de precieze wijk hoeveel inspanning lopen kost.',
          'Bij AMARA Playa zit de winst in herhaling: Torrecilla is dichtbij, het Balcón de Europa ligt op ongeveer 500 meter en het centrum hoort bij een gewone ochtend of avond in plaats van bij een uitstapje.'
        ],
        link: { label: 'Dagelijks leven & voorzieningen in Nerja', token: 'nerja_daily_life' }
      },
      seasons: {
        eyebrow: 'Weer, seizoenen & langer verblijf',
        title: 'Het weer gaat over omstandigheden, het dagelijks leven over gewone weken',
        paragraphs: [
          'De Weergids beantwoordt welke omstandigheden jullie kunnen verwachten: warmte, regen, verschillen tussen seizoenen en wat de verwachting voor jullie data nog moet uitwijzen. In de winter is Nerja vaak rustiger, maar er kunnen ook nattere perioden en langere avonden binnen zijn.',
          'De gids Dagelijks leven beantwoordt een andere vraag: werkt Nerja wanneer het verblijf uit meerdere gewone weken bestaat? Boodschappen, apotheken, terugkerende wandelingen, koken, wassen en de keuze tussen autovrije dagen en uitstapjes tellen dan zwaarder dan een lijst bezienswaardigheden.',
          'AMARA Playa is één praktisch voorbeeld en geen belofte voor ieder adres: de centrale ligging ondersteunt veel routines te voet, terwijl verwarming en airconditioning, een complete keuken en een wasmachine tijd binnen en dagelijkse taken makkelijker maken.',
          'Een langer verblijf in het centrum kan grotendeels autovrij blijven als de meeste dagen zich in Nerja afspelen. Een auto wordt nuttiger voor regelmatige ritten naar Maro, Frigiliana of de rest van de Axarquía.'
        ],
        link: { label: 'Bekijk hoe gewone weken in Nerja werken', token: 'nerja_daily_life' }
      },
      amara: {
        eyebrow: 'Jullie uitvalsbasis in Nerja',
        title: 'Van gast naar gastheer in Nerja',
        paragraphs: [
          'Jarenlang waren we zelf vakantiegasten in precies dit appartement. We genoten er zo van dat we geen seconde twijfelden toen we hoorden dat het te koop stond.',
          'Kort samengevat: centraal, aan de achterzijde en rustig, met zeezicht. Vanuit hier kunnen jullie de meeste dagelijkse plannen in Nerja te voet doen, waardoor jullie in het dorp zelden een auto nodig hebben.',
          'De ligging is moeilijk te verslaan: nog geen 500 meter tot de Balcón de Europa en slechts 200 meter tot het strand Torrecilla. Een paar honderd meter verder liggen afgelegen, rustige baaitjes.',
          'Ook het gebouw hoort bij een eerlijke planning: het appartement ligt op de vijfde verdieping met lift, maar vóór de lift zijn er buiten vijf en binnen nog vijf treden. Er is geen eigen parkeerplaats.'
        ],
        facts: [
          'Ongeveer 200 m naar het strand van Torrecilla',
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
          'De locatie bepaalt het dagritme; de ervaring ontstaat uit wat jullie ermee doen. Strandochtenden, avonden in het oude centrum, Maro, Frigiliana en de Axarquía zijn te combineren zonder iedere dag hetzelfde in te delen.'
        ],
        link: { label: 'Ontdek ervaringen in Nerja', token: 'nerja_experience_hub' }
      }
    },
    sv: {
      hero: {
        eyebrow: 'Nerja lägesguide',
        title: 'Semester i Nerja: stränder, gamla stan och en ort med flera mittpunkter',
        standfirst: 'Välkomna till Nerja. Mycket här fungerar till fots, men stränderna och områdena ger helt olika vistelser. Den här överblicken hjälper er att välja ankomst, läge och vardagsrörelser för mer än en dagsutflykt.',
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
          'För en kort vistelse är den bästa frågan ofta inte ”Vilket område är bäst?” utan ”Vilka sträckor vill ni göra varje dag?”'
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
          'Från AMARA Playa är det cirka 200 meter till Torrecilla. Ett snabbt dopp eller ett nytt besök på kvällen blir enkelt; andra stränder kan vara medvetna promenader eller enstaka taxi- och bilturer.'
        ]
      },
      dailyLife: {
        eyebrow: 'Vardagsliv & service',
        title: 'Det kompakta centrumet är Nerjas praktiska fördel',
        paragraphs: [
          'Nerjas storlek ger ett brett utbud av mataffärer, bagerier, apotek och praktisk service. I och runt centrum kan många vanliga ärenden kombineras utan bil; högre upp påverkar det exakta området hur promenaden känns.',
          'Vid AMARA Playa ligger fördelen i upprepningen: Torrecilla är nära, Balcón de Europa ligger cirka 500 meter bort och centrum blir en del av en vanlig morgon eller kväll, inte en utflykt.'
        ],
        link: { label: 'Vardag & service i Nerja', token: 'nerja_daily_life' }
      },
      seasons: {
        eyebrow: 'Väder, årstider & längre vistelser',
        title: 'Vädret beskriver förhållandena, vardagsguiden de vanliga veckorna',
        paragraphs: [
          'Väderguiden svarar på vilka förhållanden ni kan vänta er: värme, regn, årstidsskillnader och det som prognosen för era datum fortfarande måste avgöra. Vintern är ofta lugnare, men kan också ge blötare perioder och längre kvällar inomhus.',
          'Vardagsguiden svarar på en annan fråga: fungerar Nerja när vistelsen består av flera vanliga veckor? Matinköp, apotek, återkommande promenader, matlagning, tvätt och valet mellan bilfria dagar och utflykter väger då tyngre än en lista över sevärdheter.',
          'AMARA Playa är ett praktiskt exempel, inte ett löfte om varje adress: det centrala läget stödjer många rutiner till fots, medan värme och luftkonditionering, fullt kök och tvättmaskin gör tid inomhus och vardagssysslor enklare.',
          'En längre central vistelse kan förbli i stort sett bilfri när de flesta dagarna tillbringas i Nerja. Bil blir mer användbar för återkommande resor till Maro, Frigiliana eller övriga Axarquía.'
        ],
        link: { label: 'Se hur vanliga veckor fungerar i Nerja', token: 'nerja_daily_life' }
      },
      amara: {
        eyebrow: 'Er bas i Nerja',
        title: 'Från gäst till värd i Nerja',
        paragraphs: [
          'I flera år var vi själva semestergäster i precis den här lägenheten. Vi trivdes så bra att vi inte tvekade en sekund när vi fick veta att den var till salu.',
          'Kort sagt: centralt, vänt från gatan och lugnt, med havsutsikt. Härifrån fungerar de flesta vardagsplaner i Nerja bra till fots, så inne i byn behöver ni sällan bil.',
          'Läget är svårslaget: knappt 500 meter till Balcón de Europa och bara 200 meter till stranden Torrecilla. Går man några hundra meter till når man små, avskilda och lugna vikar.',
          'Även byggnaden hör till en ärlig planering: lägenheten ligger på femte våningen med hiss, men före hissen finns fem trappsteg utomhus och fem inomhus. Privat parkering ingår inte.'
        ],
        facts: [
          'Cirka 200 m till Torrecillas strand',
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
        link: { label: 'Upptäck upplevelser i Nerja', token: 'nerja_experience_hub' }
      }
    }
  }
};

const nerjaLocationPeopleFirstCopy = {
  en: {
    hero: {
      eyebrow: 'Nerja at a glance',
      title: 'Stay near the sea and walk into the old town',
      standfirst: 'Nerja is compact, but the exact area still changes the holiday. Around Torrecilla and the old town, beaches, restaurants and everyday errands are close enough for many car-free days. Burriana has a stronger beach-resort feel, while the streets farther uphill bring more slopes into every route. AMARA Playa sits between Torrecilla and the centre: about 200 metres from the beach and about 500 metres from the Balcón de Europa, without private parking.',
      note: 'Our honest guide to the part of Nerja we know as guests and hosts.',
      updated: 'Reviewed August 2026'
    },
    orientation: {
      eyebrow: 'How the town fits together',
      title: 'The coast is close; the slopes make the difference',
      paragraphs: [
        'The old town and Balcón de Europa form Nerja’s central heart. Torrecilla and Chaparril lie just west of it; Burriana has its own beach centre to the east.',
        'Nerja rises away from the sea. A short distance on the map can therefore include stairs or a noticeable climb, especially between Burriana and the centre or in upper Nerja.'
      ]
    },
    areas: {
      eyebrow: 'Four useful areas',
      title: 'What changes when you stay in another part of Nerja',
      paragraphs: ['There is no single best area. The practical difference is whether you want the old town, a particular beach, quiet or easier parking closest to the door.']
    },
    experience: {
      eyebrow: 'What we enjoy here',
      title: 'A swim before breakfast, the old town after dinner',
      paragraphs: ['From AMARA Playa, the short distances make simple days especially good. Torrecilla is close enough for a quick second swim, and the walk to the Balcón can become an ordinary evening rather than an excursion.']
    }
  },
  de: {
    hero: {
      eyebrow: 'Nerja im Überblick',
      title: 'Nah am Meer wohnen und zu Fuß in die Altstadt',
      standfirst: 'Nerja ist kompakt, trotzdem macht die genaue Lage einen großen Unterschied. Rund um Torrecilla und die Altstadt liegen Strand, Restaurants und Einkäufe nah genug für viele Tage ohne Auto. Burriana fühlt sich stärker wie ein eigener Strandort an; weiter oben gehören Steigungen zu fast jedem Weg. AMARA Playa liegt zwischen Torrecilla und Zentrum: etwa 200 Meter vom Strand und ungefähr 500 Meter vom Balcón de Europa entfernt – ohne privaten Parkplatz.',
      note: 'Unser ehrlicher Blick auf den Teil Nerjas, den wir als Gäste und Gastgeber kennen.',
      updated: 'Geprüft im August 2026'
    },
    orientation: {
      eyebrow: 'So hängt Nerja zusammen',
      title: 'Das Meer ist nah – den Unterschied machen die Steigungen',
      paragraphs: [
        'Altstadt und Balcón de Europa bilden Nerjas Zentrum. Direkt westlich davon liegen Torrecilla und Chaparril; Burriana hat östlich seinen eigenen Mittelpunkt am Strand.',
        'Vom Meer steigt Nerja an. Ein kurzer Weg auf der Karte kann deshalb Treppen oder einen spürbaren Anstieg enthalten, besonders zwischen Burriana und Zentrum oder in den oberen Wohnlagen.'
      ]
    },
    areas: {
      eyebrow: 'Vier praktische Lagen',
      title: 'Was sich ändert, wenn ihr in einem anderen Teil Nerjas wohnt',
      paragraphs: ['Die eine beste Lage gibt es nicht. Entscheidend ist, ob ihr Altstadt, einen bestimmten Strand, mehr Ruhe oder leichteres Parken direkt vor der Tür haben möchtet.']
    },
    experience: {
      eyebrow: 'Was wir hier mögen',
      title: 'Vor dem Frühstück ins Meer, nach dem Essen durch die Altstadt',
      paragraphs: ['Von AMARA Playa machen die kurzen Wege gerade die einfachen Tage schön. Torrecilla ist nah genug für ein zweites Bad, und der Weg zum Balcón wird am Abend schnell zur normalen Runde statt zum Ausflug.']
    }
  },
  es: {
    hero: {
      eyebrow: 'Nerja de un vistazo',
      title: 'Cerca del mar y a pie del casco antiguo',
      standfirst: 'Nerja es compacta, pero la zona concreta cambia mucho la estancia. Alrededor de Torrecilla y el casco antiguo, las playas, los restaurantes y las compras quedan lo bastante cerca para pasar muchos días sin coche. Burriana tiene más ambiente de núcleo de playa, mientras que en la parte alta las cuestas forman parte de casi todos los trayectos. AMARA Playa está entre Torrecilla y el centro: a unos 200 metros de la playa y 500 del Balcón de Europa, sin aparcamiento privado.',
      note: 'Nuestra mirada sincera a la parte de Nerja que conocemos como huéspedes y anfitriones.',
      updated: 'Revisado en agosto de 2026'
    },
    orientation: {
      eyebrow: 'Cómo se organiza Nerja',
      title: 'El mar está cerca; las cuestas marcan la diferencia',
      paragraphs: [
        'El casco antiguo y el Balcón de Europa forman el centro de Nerja. Torrecilla y Chaparril quedan justo al oeste; Burriana tiene su propio núcleo de playa al este.',
        'Nerja sube desde el mar. Una distancia corta en el mapa puede incluir escaleras o una pendiente notable, sobre todo entre Burriana y el centro o en la parte alta.'
      ]
    },
    areas: {
      eyebrow: 'Cuatro zonas útiles',
      title: 'Qué cambia al alojarse en otra parte de Nerja',
      paragraphs: ['No hay una única zona mejor. La diferencia práctica es tener más cerca el casco antiguo, una playa concreta, la tranquilidad o un aparcamiento más sencillo.']
    },
    experience: {
      eyebrow: 'Lo que nos gusta de aquí',
      title: 'Un baño antes del desayuno, el casco antiguo después de cenar',
      paragraphs: ['Desde AMARA Playa, las distancias cortas hacen especialmente agradables los días sencillos. Torrecilla está cerca para repetir baño y el paseo hasta el Balcón puede formar parte de cualquier tarde.']
    }
  },
  nl: {
    hero: {
      eyebrow: 'Nerja in het kort',
      title: 'Dicht bij zee en lopend naar de oude stad',
      standfirst: 'Nerja is compact, maar de precieze buurt maakt veel verschil. Rond Torrecilla en de oude stad liggen stranden, restaurants en winkels dichtbij genoeg voor veel autovrije dagen. Burriana voelt meer als een eigen badplaats, terwijl in hoger gelegen straten bijna elke route een helling heeft. AMARA Playa ligt tussen Torrecilla en het centrum: ongeveer 200 meter van het strand en 500 meter van het Balcón de Europa, zonder eigen parkeerplaats.',
      note: 'Onze eerlijke kijk op het deel van Nerja dat we als gasten en hosts kennen.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    orientation: {
      eyebrow: 'Zo zit Nerja in elkaar',
      title: 'De zee is dichtbij; de hellingen maken het verschil',
      paragraphs: [
        'De oude stad en het Balcón de Europa vormen het hart van Nerja. Torrecilla en Chaparril liggen er direct ten westen van; Burriana heeft ten oosten een eigen strandcentrum.',
        'Vanaf zee loopt Nerja omhoog. Een korte afstand op de kaart kan daarom trappen of een flinke klim bevatten, vooral tussen Burriana en het centrum en in hoger Nerja.'
      ]
    },
    areas: {
      eyebrow: 'Vier praktische buurten',
      title: 'Wat verandert als je in een ander deel van Nerja verblijft',
      paragraphs: ['Er is niet één beste buurt. Het praktische verschil is of je de oude stad, een bepaald strand, rust of makkelijker parkeren het liefst voor de deur hebt.']
    },
    experience: {
      eyebrow: 'Wat wij hier graag doen',
      title: 'Zwemmen voor het ontbijt, de oude stad in na het eten',
      paragraphs: ['Vanaf AMARA Playa maken de korte afstanden juist eenvoudige dagen fijn. Torrecilla is dichtbij genoeg voor een tweede duik en de wandeling naar het Balcón wordt vanzelf een gewone avondronde.']
    }
  },
  sv: {
    hero: {
      eyebrow: 'Nerja i korthet',
      title: 'Bo nära havet och promenera till gamla stan',
      standfirst: 'Nerja är kompakt, men det exakta området påverkar vistelsen mycket. Runt Torrecilla och gamla stan ligger stränder, restauranger och vardagsärenden nära nog för många bilfria dagar. Burriana känns mer som ett eget strandområde, medan gatorna högre upp gör backar till en del av nästan varje väg. AMARA Playa ligger mellan Torrecilla och centrum: cirka 200 meter från stranden och 500 meter från Balcón de Europa, utan privat parkering.',
      note: 'Vår ärliga bild av den del av Nerja som vi känner som gäster och värdar.',
      updated: 'Granskad i augusti 2026'
    },
    orientation: {
      eyebrow: 'Så hänger Nerja ihop',
      title: 'Havet är nära; backarna gör skillnaden',
      paragraphs: [
        'Gamla stan och Balcón de Europa är Nerjas centrum. Torrecilla och Chaparril ligger strax västerut; Burriana har sitt eget strandcentrum i öster.',
        'Nerja stiger från havet. En kort sträcka på kartan kan därför innehålla trappor eller en tydlig uppförsbacke, särskilt mellan Burriana och centrum eller högre upp i Nerja.'
      ]
    },
    areas: {
      eyebrow: 'Fyra praktiska områden',
      title: 'Det här ändras när ni bor i en annan del av Nerja',
      paragraphs: ['Det finns inte ett enda bästa område. Den praktiska skillnaden är om ni vill ha gamla stan, en viss strand, mer lugn eller enklare parkering närmast dörren.']
    },
    experience: {
      eyebrow: 'Det vi tycker om här',
      title: 'Ett dopp före frukost, gamla stan efter middagen',
      paragraphs: ['Från AMARA Playa gör de korta avstånden enkla dagar särskilt fina. Torrecilla är nära nog för ett andra dopp och promenaden till Balcón blir lätt en vanlig kvällsrunda.']
    }
  }
} satisfies Record<AmaraLanguage, {
  hero: NerjaLocationHubLocale['hero'];
  orientation: Pick<NerjaLocationHubLocale['orientation'], 'eyebrow' | 'title' | 'paragraphs'>;
  areas: Pick<NerjaLocationHubLocale['areas'], 'eyebrow' | 'title' | 'paragraphs'>;
  experience: Pick<NerjaLocationHubLocale['experience'], 'eyebrow' | 'title' | 'paragraphs'>;
}>;

export function getNerjaLocationHubLocale(lang: AmaraLanguage): NerjaLocationHubLocale {
  const base = nerjaLocationHubContent.locales[lang];
  const copy = nerjaLocationPeopleFirstCopy[lang];
  return {
    ...base,
    hero: copy.hero,
    orientation: { ...base.orientation, ...copy.orientation },
    areas: { ...base.areas, ...copy.areas },
    experience: { ...base.experience, ...copy.experience }
  };
}
