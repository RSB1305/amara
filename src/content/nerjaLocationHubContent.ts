import type { LinkToken } from '../lib/linkResolver';
import { routeOgImage } from '../lib/images/routeImages';
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
  links?: NerjaLocationHubLink[];
}

interface NerjaLocationHubLocale {
  hero: {
    eyebrow: string;
    title: string;
    subtitle?: string;
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
    /** Accessible title and caption of the Iberian Peninsula orientation map. */
    mapLabel: string;
    mapNote: string;
  };
  arrival: NerjaLocationHubFeature;
  areas: NerjaLocationHubFeature & {
    archetypes: Array<{ title: string; consequence: string }>;
  };
  coast: NerjaLocationHubFeature;
  dailyLife: NerjaLocationHubFeature;
  seasons: NerjaLocationHubFeature;
  amara: NerjaLocationHubFeature & { facts: string[] };
  experience: NerjaLocationHubFeature;
}

const seo: AmaraAuthoringSeo = {
  version: '2026-08-20-nerja-location-hub-v1.1',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja'),
  article: {
    datePublished: '2026-08-13',
    dateModified: '2026-08-20',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Nerja: beach, Balcón and tapas | AMARA',
      description: 'Nerja on the Mediterranean: coves, the Balcón de Europa, tapas until late and a town that is open all year. Our apartment is 200 metres from the beach.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja: Strand, Balcón und Tapas | AMARA',
      description: 'Nerja am Mittelmeer: Buchten, der Balcón de Europa, Tapas bis spät und eine Stadt, die das ganze Jahr geöffnet hat. Unsere Wohnung liegt 200 Meter vom Strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Nerja: playa, Balcón y tapas | AMARA',
      description: 'Nerja en el Mediterráneo: calas, el Balcón de Europa, tapas hasta tarde y una ciudad abierta todo el año. Nuestro apartamento está a 200 metros de la playa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Nerja: strand, Balcón en tapas | AMARA',
      description: 'Nerja aan de Middellandse Zee: baaien, de Balcón de Europa, tapas tot laat en een stad die het hele jaar open is. Ons appartement ligt 200 meter van het strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nerja: strand, Balcón och tapas | AMARA',
      description: 'Nerja vid Medelhavet: vikar, Balcón de Europa, tapas till sent och en stad som är öppen året runt. Vår lägenhet ligger 200 meter från stranden.',
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
        updated: 'As of August 2026'
      },
      discovery: {
        eyebrow: 'Plan the stay',
        title: 'Six questions that shape a Nerja stay',
        intro: 'Start with your real daily rhythm: arrival, beach choice, walking, errands and the outings you want beyond town.',
        items: [
          { number: '01', title: 'Getting here', text: 'Airports, coach arrival and the final leg to Calle Castilla Pérez 60.', label: 'Arrival & mobility', token: 'getting_to_nerja' },
          { number: '02', title: 'Read the town', text: 'Sea edge, old centre, eastern beaches and the hills behind Nerja.', label: 'Geography & orientation', token: 'nerja_where_to_stay' },
          { number: '03', title: 'Choose your area', text: 'Compare Torrecilla, the Old Town, Burriana and the upper residential areas.', label: 'Where to stay', token: 'nerja_where_to_stay' },
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
        ],
        mapLabel: 'Nerja on the Iberian Peninsula — on Andalusia’s Mediterranean coast east of Málaga, with Frigiliana in the hills behind and a possible round trip via Málaga, Ronda, Sevilla, Córdoba and Granada',
        mapNote: 'A possible round trip from Nerja: Málaga, Ronda, Sevilla, Córdoba, Granada and back along the coast. The circle enlarges Nerja and Frigiliana.',
        link: { label: 'Nerja’s areas in detail', token: 'nerja_where_to_stay' }
      },
      arrival: {
        eyebrow: 'Arrival & mobility',
        title: 'The bus goes direct, then the car stays parked',
        paragraphs: [
          'From Málaga airport the ALSA bus runs to Nerja without changes, a good hour. It ends at the bus station; with suitcases you take a taxi from there to Calle Castilla Pérez 60.',
          'In town you need no car most days. For Maro, Frigiliana and the Axarquía one or two rental days are enough; you park in the Balcón de Europa or Verano Azul car park, a space of its own does not come with the apartment.',
          'The address for taxi and sat-nav: Calle Castilla Pérez 60.'
        ],
        link: { label: 'Getting to Nerja', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Where to stay',
        title: 'The right Nerja area depends on the day you want at your door',
        paragraphs: [
          'Nerja is not one continuous resort strip. Each area changes the balance between beach access, old-town evenings, gradients, parking and quiet.',
          'For a short stay, the most useful question is often not “Which area is best?” but “Which journeys do you want to repeat every day?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Beach outside the door, the Balcón in five minutes, quiet in the evening. This is where AMARA Playa is.' },
          { title: 'Old Town & Balcón', consequence: 'Right in the middle between restaurants and bars, lively until late in summer.' },
          { title: 'Burriana', consequence: 'The big beach with chiringuitos and paella; back to the centre it is uphill.' },
          { title: 'Upper Nerja', consequence: 'Views and quiet; for beach and dinner you drive.' }
        ],
        link: { label: 'Nerja’s areas in detail', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Beaches',
        title: 'Calahonda before ten, Burriana for the paella, Maro for clear water',
        paragraphs: [
          'Calahonda below the Balcón is loveliest before ten, when the light falls on the white houses. Burriana has space, sunbeds and AYO for paella at midday. For clear water you drive to Maro and Cantarriján, with snorkel and kayak.',
          'From AMARA Playa it is 200 metres to Torrecilla. A second swim after dinner is therefore not a matter of planning.'
        ]
      },
      dailyLife: {
        eyebrow: 'Eating and everyday life',
        title: 'Fish at La Puntilla, tapas at the Balcón, bread at Good Stuff',
        paragraphs: [
          'Grilled fish at La Puntilla or paella on the beach at midday, tapas in the lanes around the Balcón in the evening, Oliva or 34 with a sea view for a special night. Dinner is late; in town the kitchens open around seven.',
          'Carrefour Express is in our street, breakfast is two minutes on at Good Stuff, the pharmacy also on Calle Castilla Pérez.'
        ],
        link: { label: 'Supermarkets and pharmacy in Nerja', token: 'nerja_daily_life' }
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
          'For years we were guests in this apartment ourselves before we bought it. The walk to the Balcón was never an item on a programme, but a habit after dinner.',
          'The apartment is on the fifth floor with a lift, at the back and therefore quiet, with a balcony and a side view of the sea. Before the lift there are ten steps, there is no private parking; in return the car simply stays parked during the day.',
          'In summer you swim before breakfast and eat at nine. In winter the promenade is yours, and on a grey day the cave and the museum are open.',
          'Address: Calle Castilla Pérez 60, Nerja.'
        ],
        facts: [
          '200 m to Torrecilla beach',
          '500 m to the Balcón de Europa',
          'Bed 200 × 200, kitchen, washing machine, balcony',
          'Fifth floor with lift, ten steps before it'
        ],
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
        updated: 'Stand August 2026'
      },
      discovery: {
        eyebrow: 'Den Aufenthalt planen',
        title: 'Sechs Fragen, die euren Nerja-Aufenthalt prägen',
        intro: 'Beginnt mit eurem echten Tagesrhythmus: Anreise, Strandwahl, Wege, Einkäufe und Ausflüge außerhalb des Ortes.',
        items: [
          { number: '01', title: 'Nach Nerja kommen', text: 'Flughäfen, Busankunft und die letzte Etappe zur Calle Castilla Pérez 60.', label: 'Anreise & Mobilität', token: 'getting_to_nerja' },
          { number: '02', title: 'Den Ort einordnen', text: 'Meereskante, Altstadt, östliche Strände und die Hänge dahinter.', label: 'Geografie & Orientierung', token: 'nerja_where_to_stay' },
          { number: '03', title: 'Die passende Lage wählen', text: 'Torrecilla, Altstadt, Burriana und die oberen Wohnlagen im Vergleich.', label: 'Wo übernachten', token: 'nerja_where_to_stay' },
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
        ],
        mapLabel: 'Nerja auf der Iberischen Halbinsel — an Andalusiens Mittelmeerküste östlich von Málaga, mit Frigiliana in den Hügeln dahinter und einer möglichen Rundreise über Málaga, Ronda, Sevilla, Córdoba und Granada',
        mapNote: 'Eine mögliche Rundreise ab Nerja: Málaga, Ronda, Sevilla, Córdoba, Granada und zurück über die Küste. Der Kreis zeigt Nerja und Frigiliana vergrößert.',
        link: { label: 'Nerjas Lagen im Detail', token: 'nerja_where_to_stay' }
      },
      arrival: {
        eyebrow: 'Anreise & Mobilität',
        title: 'Der Bus fährt direkt, das Auto bleibt dann stehen',
        paragraphs: [
          'Vom Flughafen Málaga fährt der ALSA-Bus ohne Umstieg nach Nerja, gut eine Stunde. Er endet am Busbahnhof; mit Koffern nehmt ihr von dort ein Taxi bis zur Calle Castilla Pérez 60.',
          'Im Ort braucht ihr an den meisten Tagen kein Auto. Für Maro, Frigiliana und die Axarquía reichen ein oder zwei Miettage; geparkt wird im Parkhaus Balcón de Europa oder Verano Azul, ein eigener Platz gehört nicht zur Wohnung.',
          'Die Adresse für Taxi und Navi: Calle Castilla Pérez 60.'
        ],
        link: { label: 'Anreise nach Nerja', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Wo übernachten',
        title: 'Die passende Lage hängt davon ab, was täglich vor der Tür liegen soll',
        paragraphs: [
          'Nerja ist kein durchgehender Ferienkorridor. Jede Lage verschiebt das Verhältnis zwischen Strand, Altstadtabenden, Steigungen, Parken und Ruhe.',
          'Für einen kurzen Aufenthalt ist deshalb oft nicht „Welche Lage ist die beste?“ die richtige Frage, sondern „Welche Wege möchtet ihr jeden Tag wiederholen?“'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand vor der Tür, Balcón in fünf Minuten, abends ruhig. Hier liegt AMARA Playa.' },
          { title: 'Altstadt & Balcón', consequence: 'Mittendrin zwischen Restaurants und Bars, im Sommer bis spät lebhaft.' },
          { title: 'Burriana', consequence: 'Der große Strand mit Chiringuitos und Paella; zurück ins Zentrum geht es bergauf.' },
          { title: 'Oberes Nerja', consequence: 'Aussicht und Ruhe, für Strand und Abendessen fahrt ihr.' }
        ],
        link: { label: 'Nerjas Lagen im Detail', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Strände',
        title: 'Calahonda vor zehn, Burriana für die Paella, Maro für klares Wasser',
        paragraphs: [
          'Calahonda unter dem Balcón ist am schönsten vor zehn Uhr, wenn das Licht auf die weißen Häuser fällt. Burriana hat Platz, Liegen und das AYO für die Paella am Mittag. Für klares Wasser fahrt ihr nach Maro und Cantarriján, mit Schnorchel und Kajak.',
          'Von AMARA Playa sind es 200 Meter nach Torrecilla. Ein zweites Bad nach dem Abendessen ist deshalb keine Frage der Planung.'
        ]
      },
      dailyLife: {
        eyebrow: 'Essen und Alltag',
        title: 'Fisch bei La Puntilla, Tapas am Balcón, Brot bei Good Stuff',
        paragraphs: [
          'Mittags gegrillter Fisch bei La Puntilla oder Paella am Strand, abends Tapas in den Gassen um den Balcón, für einen besonderen Abend das Oliva oder das 34 mit Meerblick. Gegessen wird spät; im Ort öffnen die Küchen gegen sieben.',
          'Der Carrefour Express liegt in unserer Straße, das Frühstück gibt es zwei Minuten weiter bei Good Stuff, die Apotheke ebenfalls in der Calle Castilla Pérez.'
        ],
        link: { label: 'Supermärkte und Apotheke in Nerja', token: 'nerja_daily_life' }
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
          'Wir waren jahrelang selbst Gäste in dieser Wohnung, bevor wir sie gekauft haben. Der Weg zum Balcón war nie ein Programmpunkt, sondern eine Gewohnheit nach dem Essen.',
          'Die Wohnung liegt im fünften Stock mit Aufzug, nach hinten raus und deshalb ruhig, mit Balkon und seitlichem Meerblick. Vor dem Aufzug sind es zehn Stufen, einen eigenen Parkplatz gibt es nicht; dafür bleibt das Auto tagsüber einfach stehen.',
          'Im Sommer geht ihr vor dem Frühstück ins Meer und esst um neun. Im Winter gehört euch die Promenade, und an einem grauen Tag sind Höhle und Museum offen.',
          'Adresse: Calle Castilla Pérez 60, Nerja.'
        ],
        facts: [
          '200 m zum Strand Torrecilla',
          '500 m zum Balcón de Europa',
          'Bett 200 × 200, Küche, Waschmaschine, Balkon',
          'Fünfter Stock mit Aufzug, zehn Stufen davor'
        ],
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
        updated: 'Actualizado en agosto de 2026'
      },
      discovery: {
        eyebrow: 'Preparar la estancia',
        title: 'Seis preguntas que dan forma a una estancia en Nerja',
        intro: 'Pensad primero en vuestro ritmo real: llegada, playa, paseos, compras y excursiones fuera del pueblo.',
        items: [
          { number: '01', title: 'Llegar a Nerja', text: 'Aeropuertos, llegada en autobús y último tramo hasta Calle Castilla Pérez 60.', label: 'Llegada y movilidad', token: 'getting_to_nerja' },
          { number: '02', title: 'Situarse en el pueblo', text: 'Frente marítimo, casco antiguo, playas orientales y laderas.', label: 'Geografía y orientación', token: 'nerja_where_to_stay' },
          { number: '03', title: 'Elegir zona', text: 'Torrecilla, casco antiguo, Burriana y urbanizaciones de la parte alta.', label: 'Dónde alojarse', token: 'nerja_where_to_stay' },
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
        ],
        mapLabel: 'Nerja en la península ibérica — en la costa mediterránea de Andalucía, al este de Málaga, con Frigiliana en las colinas de detrás y una posible ruta por Málaga, Ronda, Sevilla, Córdoba y Granada',
        mapNote: 'Una posible ruta desde Nerja: Málaga, Ronda, Sevilla, Córdoba, Granada y vuelta por la costa. El círculo amplía Nerja y Frigiliana.',
        link: { label: 'Las zonas de Nerja en detalle', token: 'nerja_where_to_stay' }
      },
      arrival: {
        eyebrow: 'Llegada y movilidad',
        title: 'El autobús va directo, y luego el coche se queda aparcado',
        paragraphs: [
          'Desde el aeropuerto de Málaga el autobús de ALSA va a Nerja sin cambios, una hora larga. Termina en la estación; con maletas cogéis desde allí un taxi hasta la calle Castilla Pérez 60.',
          'En el pueblo no necesitáis coche la mayoría de los días. Para Maro, Frigiliana y la Axarquía bastan uno o dos días de alquiler; se aparca en el parking Balcón de Europa o Verano Azul, el apartamento no incluye plaza propia.',
          'La dirección para el taxi y el navegador: calle Castilla Pérez 60.'
        ],
        link: { label: 'Cómo llegar a Nerja', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Dónde alojarse',
        title: 'La zona adecuada depende de lo que queráis tener cada día al salir',
        paragraphs: [
          'Nerja no es una única franja turística. Cada zona cambia el equilibrio entre playa, noches en el centro, cuestas, aparcamiento y tranquilidad.',
          'Para una estancia corta, la pregunta más útil no suele ser “¿qué zona es mejor?”, sino “¿qué recorridos queréis repetir a diario?”'
        ],
        archetypes: [
          { title: 'Torrecilla y Chaparril', consequence: 'Playa al salir por la puerta, el Balcón a cinco minutos, tranquilo por la noche. Aquí está AMARA Playa.' },
          { title: 'Casco antiguo y Balcón', consequence: 'En medio de restaurantes y bares, animado hasta tarde en verano.' },
          { title: 'Burriana', consequence: 'La playa grande con chiringuitos y paella; la vuelta al centro es cuesta arriba.' },
          { title: 'Parte alta de Nerja', consequence: 'Vistas y tranquilidad; para la playa y la cena vais en coche.' }
        ],
        link: { label: 'Las zonas de Nerja en detalle', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Playas',
        title: 'Calahonda antes de las diez, Burriana para la paella, Maro para el agua clara',
        paragraphs: [
          'Calahonda, bajo el Balcón, está más bonita antes de las diez, cuando la luz cae sobre las casas blancas. Burriana tiene espacio, hamacas y el AYO para la paella a mediodía. Para agua clara vais a Maro y Cantarriján, con snorkel y kayak.',
          'Desde AMARA Playa son 200 metros hasta Torrecilla. Un segundo baño después de cenar no es, por tanto, cuestión de planificación.'
        ]
      },
      dailyLife: {
        eyebrow: 'Comer y día a día',
        title: 'Pescado en La Puntilla, tapas en el Balcón, pan en Good Stuff',
        paragraphs: [
          'A mediodía pescado a la brasa en La Puntilla o paella en la playa, por la noche tapas en las callejuelas del Balcón, y para una ocasión especial el Oliva o el 34 con vistas al mar. Se cena tarde; en el pueblo las cocinas abren hacia las siete.',
          'El Carrefour Express está en nuestra calle, el desayuno a dos minutos en Good Stuff, la farmacia también en la calle Castilla Pérez.'
        ],
        link: { label: 'Supermercados y farmacia en Nerja', token: 'nerja_daily_life' }
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
          'Durante años fuimos nosotros los huéspedes de este apartamento antes de comprarlo. El paseo al Balcón nunca fue un punto del programa, sino una costumbre después de cenar.',
          'El apartamento está en un quinto con ascensor, en la parte trasera y por eso tranquilo, con balcón y vistas laterales al mar. Antes del ascensor hay diez escalones, no hay aparcamiento propio; a cambio, el coche se queda aparcado durante el día.',
          'En verano os bañáis antes del desayuno y cenáis a las nueve. En invierno el paseo es vuestro, y en un día gris la cueva y el museo están abiertos.',
          'Dirección: calle Castilla Pérez 60, Nerja.'
        ],
        facts: [
          '200 m a la playa de Torrecilla',
          '500 m al Balcón de Europa',
          'Cama 200 × 200, cocina, lavadora, balcón',
          'Quinto con ascensor, diez escalones antes'
        ],
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
        updated: 'Stand augustus 2026'
      },
      discovery: {
        eyebrow: 'Jullie verblijf plannen',
        title: 'Zes vragen die jullie verblijf in Nerja bepalen',
        intro: 'Begin bij jullie echte dagritme: aankomst, strandkeuze, lopen, boodschappen en uitstapjes buiten de stad.',
        items: [
          { number: '01', title: 'Naar Nerja reizen', text: 'Luchthavens, aankomst per bus en het laatste stuk naar Calle Castilla Pérez 60.', label: 'Aankomst & mobiliteit', token: 'getting_to_nerja' },
          { number: '02', title: 'De stad lezen', text: 'Zeekant, oude centrum, oostelijke stranden en de heuvels erachter.', label: 'Geografie & oriëntatie', token: 'nerja_where_to_stay' },
          { number: '03', title: 'De juiste buurt kiezen', text: 'Vergelijk Torrecilla, het oude centrum, Burriana en hoger gelegen woonwijken.', label: 'Waar overnachten', token: 'nerja_where_to_stay' },
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
        ],
        mapLabel: 'Nerja op het Iberisch Schiereiland — aan de Middellandse Zeekust van Andalusië ten oosten van Málaga, met Frigiliana in de heuvels erachter en een mogelijke rondreis via Málaga, Ronda, Sevilla, Córdoba en Granada',
        mapNote: 'Een mogelijke rondreis vanuit Nerja: Málaga, Ronda, Sevilla, Córdoba, Granada en terug langs de kust. De cirkel vergroot Nerja en Frigiliana.',
        link: { label: 'De ligging van Nerja in detail', token: 'nerja_where_to_stay' }
      },
      arrival: {
        eyebrow: 'Aankomst & mobiliteit',
        title: 'De bus rijdt rechtstreeks, daarna blijft de auto staan',
        paragraphs: [
          'Vanaf de luchthaven Málaga rijdt de ALSA-bus zonder overstap naar Nerja, ruim een uur. Hij eindigt bij het busstation; met koffers neem je van daar een taxi naar Calle Castilla Pérez 60.',
          'In de stad heb je de meeste dagen geen auto nodig. Voor Maro, Frigiliana en de Axarquía volstaan een of twee huurdagen; parkeren doe je in de parkeergarage Balcón de Europa of Verano Azul, een eigen plek hoort niet bij het appartement.',
          'Het adres voor taxi en navigatie: Calle Castilla Pérez 60.'
        ],
        link: { label: 'Aankomst in Nerja', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'De juiste buurt hangt af van wat jullie dagelijks voor de deur willen',
        paragraphs: [
          'Nerja is geen aaneengesloten vakantiezone. Elke buurt verschuift de balans tussen strand, avonden in het centrum, hellingen, parkeren en rust.',
          'Voor een kort verblijf is de handigste vraag vaak niet “Welke buurt is het best?”, maar “Welke routes willen jullie elke dag opnieuw lopen?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand voor de deur, de Balcón in vijf minuten, ’s avonds rustig. Hier ligt AMARA Playa.' },
          { title: 'Oude centrum & Balcón', consequence: 'Middenin tussen restaurants en bars, in de zomer tot laat levendig.' },
          { title: 'Burriana', consequence: 'Het grote strand met chiringuito’s en paella; terug naar het centrum gaat het omhoog.' },
          { title: 'Hoger Nerja', consequence: 'Uitzicht en rust, voor strand en diner rijd je.' }
        ],
        link: { label: 'De wijken van Nerja in detail', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Stranden',
        title: 'Calahonda vóór tienen, Burriana voor de paella, Maro voor helder water',
        paragraphs: [
          'Calahonda onder de Balcón is het mooist vóór tienen, als het licht op de witte huizen valt. Burriana heeft ruimte, ligbedden en AYO voor de paella ’s middags. Voor helder water rijd je naar Maro en Cantarriján, met snorkel en kajak.',
          'Vanaf AMARA Playa is het 200 meter naar Torrecilla. Een tweede duik na het diner is daarom geen kwestie van plannen.'
        ]
      },
      dailyLife: {
        eyebrow: 'Eten en dagelijks leven',
        title: 'Vis bij La Puntilla, tapas aan de Balcón, brood bij Good Stuff',
        paragraphs: [
          '’s Middags gegrilde vis bij La Puntilla of paella op het strand, ’s avonds tapas in de steegjes rond de Balcón, voor een bijzondere avond Oliva of 34 met zeezicht. Er wordt laat gegeten; in de stad gaan de keukens rond zeven uur open.',
          'De Carrefour Express ligt in onze straat, het ontbijt is twee minuten verder bij Good Stuff, de apotheek eveneens in Calle Castilla Pérez.'
        ],
        link: { label: 'Supermarkten en apotheek in Nerja', token: 'nerja_daily_life' }
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
          'Jarenlang waren we zelf gast in dit appartement voordat we het kochten. De wandeling naar de Balcón was nooit een programmapunt, maar een gewoonte na het eten.',
          'Het appartement ligt op de vijfde verdieping met lift, aan de achterkant en daarom rustig, met balkon en zijdelings zeezicht. Voor de lift zijn er tien treden, een eigen parkeerplaats is er niet; daarvoor blijft de auto overdag gewoon staan.',
          'In de zomer ga je voor het ontbijt de zee in en eet je om negen uur. In de winter is de promenade van jullie, en op een grijze dag zijn grot en museum open.',
          'Adres: Calle Castilla Pérez 60, Nerja.'
        ],
        facts: [
          '200 m naar het strand Torrecilla',
          '500 m naar de Balcón de Europa',
          'Bed 200 × 200, keuken, wasmachine, balkon',
          'Vijfde verdieping met lift, tien treden ervoor'
        ],
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
        updated: 'Uppdaterad augusti 2026'
      },
      discovery: {
        eyebrow: 'Planera vistelsen',
        title: 'Sex frågor som formar en vistelse i Nerja',
        intro: 'Börja med er verkliga vardag: ankomst, strandval, promenader, inköp och utflykter utanför staden.',
        items: [
          { number: '01', title: 'Ta sig till Nerja', text: 'Flygplatser, bussankomst och sista sträckan till Calle Castilla Pérez 60.', label: 'Ankomst & mobilitet', token: 'getting_to_nerja' },
          { number: '02', title: 'Orientera sig', text: 'Havskanten, gamla stan, östra stränder och höjderna bakom.', label: 'Geografi & orientering', token: 'nerja_where_to_stay' },
          { number: '03', title: 'Välj rätt område', text: 'Jämför Torrecilla, gamla stan, Burriana och bostadsområdena högre upp.', label: 'Var ska man bo', token: 'nerja_where_to_stay' },
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
        ],
        mapLabel: 'Nerja på Iberiska halvön — på Andalusiens medelhavskust öster om Málaga, med Frigiliana i kullarna bakom och en möjlig rundresa via Málaga, Ronda, Sevilla, Córdoba och Granada',
        mapNote: 'En möjlig rundresa från Nerja: Málaga, Ronda, Sevilla, Córdoba, Granada och tillbaka längs kusten. Cirkeln förstorar Nerja och Frigiliana.',
        link: { label: 'Nerjas lägen i detalj', token: 'nerja_where_to_stay' }
      },
      arrival: {
        eyebrow: 'Ankomst & mobilitet',
        title: 'Bussen går direkt, sedan står bilen kvar',
        paragraphs: [
          'Från Málagas flygplats går ALSA-bussen utan byte till Nerja, en dryg timme. Den slutar vid busstationen; med resväskor tar ni taxi därifrån till Calle Castilla Pérez 60.',
          'I stan behöver ni ingen bil de flesta dagar. För Maro, Frigiliana och Axarquía räcker en eller två hyrdagar; ni parkerar i parkeringshuset Balcón de Europa eller Verano Azul, en egen plats hör inte till lägenheten.',
          'Adressen för taxi och GPS: Calle Castilla Pérez 60.'
        ],
        link: { label: 'Resan till Nerja', token: 'getting_to_nerja' }
      },
      areas: {
        eyebrow: 'Var ska man bo',
        title: 'Rätt område beror på vad ni vill ha utanför dörren varje dag',
        paragraphs: [
          'Nerja är inte ett enda sammanhängande semesterstråk. Varje område ändrar balansen mellan strand, kvällar i centrum, backar, parkering och lugn.',
          'För en kort vistelse är den bästa frågan ofta inte ”Vilket område är bäst?” utan ”Vilka sträckor vill ni göra varje dag?”'
        ],
        archetypes: [
          { title: 'Torrecilla & Chaparril', consequence: 'Strand utanför dörren, Balcón på fem minuter, stilla på kvällen. Här ligger AMARA Playa.' },
          { title: 'Gamla stan & Balcón', consequence: 'Mitt i bland restauranger och barer, livligt till sent på sommaren.' },
          { title: 'Burriana', consequence: 'Den stora stranden med chiringuitos och paella; tillbaka till centrum är det uppför.' },
          { title: 'Övre Nerja', consequence: 'Utsikt och lugn; till strand och middag kör ni.' }
        ],
        link: { label: 'Nerjas områden i detalj', token: 'nerja_where_to_stay' }
      },
      coast: {
        eyebrow: 'Stränder',
        title: 'Calahonda före tio, Burriana för paellan, Maro för klart vatten',
        paragraphs: [
          'Calahonda under Balcón är vackrast före tio, när ljuset faller på de vita husen. Burriana har plats, solstolar och AYO för paella mitt på dagen. För klart vatten kör ni till Maro och Cantarriján, med snorkel och kajak.',
          'Från AMARA Playa är det 200 meter till Torrecilla. Ett andra dopp efter middagen är därför ingen planeringsfråga.'
        ]
      },
      dailyLife: {
        eyebrow: 'Mat och vardag',
        title: 'Fisk på La Puntilla, tapas vid Balcón, bröd på Good Stuff',
        paragraphs: [
          'Mitt på dagen grillad fisk på La Puntilla eller paella på stranden, på kvällen tapas i gränderna kring Balcón, för en särskild kväll Oliva eller 34 med havsutsikt. Man äter sent; i stan öppnar köken runt sju.',
          'Carrefour Express ligger på vår gata, frukosten finns två minuter bort på Good Stuff, apoteket likaså på Calle Castilla Pérez.'
        ],
        link: { label: 'Mataffärer och apotek i Nerja', token: 'nerja_daily_life' }
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
          'I flera år var vi själva gäster i den här lägenheten innan vi köpte den. Promenaden till Balcón var aldrig en programpunkt utan en vana efter maten.',
          'Lägenheten ligger på femte våningen med hiss, mot baksidan och därför stilla, med balkong och havsutsikt åt sidan. Före hissen är det tio trappsteg, egen parkering finns inte; i gengäld står bilen bara kvar under dagen.',
          'På sommaren badar ni före frukost och äter vid nio. På vintern är strandpromenaden er, och en grå dag har grottan och museet öppet.',
          'Adress: Calle Castilla Pérez 60, Nerja.'
        ],
        facts: [
          '200 m till stranden Torrecilla',
          '500 m till Balcón de Europa',
          'Säng 200 × 200, kök, tvättmaskin, balkong',
          'Femte våningen med hiss, tio trappsteg före'
        ],
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
      eyebrow: 'Nerja · place & stay',
      title: 'Nerja on the Mediterranean',
      subtitle: 'Into the sea in the morning, tapas in the evening, and a town that is open all year',
      standfirst: 'Nerja is a coastal town with small coves, a broad beach to the east and the Balcón de Europa in the middle. From Málaga airport the bus runs straight here, and in town almost everything is on foot. Our apartment is in Torrecilla: 200 metres to the beach, 500 to the Balcón, fifth floor with a view of the sea.',
      note: '',
      updated: 'As of August 2026'
    },
    orientation: {
      eyebrow: 'How Nerja lies',
      title: 'The Balcón in the middle, the beaches left and right',
      paragraphs: [
        'At the Balcón de Europa the old town ends on a rock above the sea; below lies the cove of Calahonda. To the west follow Torrecilla, El Chucho and the long Playazo, to the east Carabeo, Carabeíllo and Burriana with the chiringuitos.',
        'From the sea the town rises: in Torrecilla and the centre everything is level; towards Burriana and in the upper neighbourhoods it goes uphill.'
      ]
    },
    areas: {
      eyebrow: 'Where you stay',
      title: 'Four corners, four kinds of day',
      paragraphs: ['Nerja is flat and compact; the difference is proximity: to the beach, to the tapas, to the quiet.']
    },
    amara: {
      eyebrow: 'Our apartment',
      title: 'AMARA Playa: fifth floor, sea view, 200 metres to the beach'
    },
    seasons: {
      eyebrow: 'Seasons',
      title: 'Summer on the beach, winter on the promenade',
      paragraphs: [
        'In summer you swim before breakfast and eat at nine.',
        'In winter the promenade is yours, and on a grey day the cave and the museum are open.'
      ],
      link: { label: 'Weather in Nerja', token: 'nerja_weather' }
    },
    experience: {
      eyebrow: 'Your days',
      title: 'Beach in the morning, cave at midday, Balcón in the evening',
      paragraphs: ['A Nerja day needs little planning: into the sea before breakfast, half a day in the Cueva de Nerja at Maro, the Balcón in the evening once the day visitors have gone and the lights come on. Frigiliana lies ten minutes above, Granada and Málaga each a day away.'],
      links: [
        { label: 'All beaches in Nerja', token: 'nerja_beaches_authority' },
        { label: 'Balcón de Europa', token: 'nerja_balcon_de_europa' },
        { label: 'All Nerja experiences', token: 'nerja_experience_hub' }
      ]
    }
  },
  de: {
    hero: {
      eyebrow: 'Nerja · Ort & Aufenthalt',
      title: 'Nerja am Mittelmeer',
      subtitle: 'Morgens ins Meer, abends Tapas, und das ganze Jahr eine Stadt, die geöffnet hat',
      standfirst: 'Nerja ist eine Küstenstadt mit kleinen Buchten, einem breiten Strand im Osten und dem Balcón de Europa in der Mitte. Vom Flughafen Málaga fährt der Bus direkt hierher, im Ort geht fast alles zu Fuß. Unsere Wohnung liegt in Torrecilla: 200 Meter zum Strand, 500 zum Balcón, fünfter Stock mit Blick aufs Meer.',
      note: '',
      updated: 'Stand August 2026'
    },
    orientation: {
      eyebrow: 'So liegt Nerja',
      title: 'Der Balcón in der Mitte, die Strände links und rechts',
      paragraphs: [
        'Am Balcón de Europa endet die Altstadt auf einem Felsen über dem Meer; darunter liegt die Bucht Calahonda. Nach Westen folgen Torrecilla, El Chucho und der lange Playazo, nach Osten Carabeo, Carabeíllo und Burriana mit den Chiringuitos.',
        'Vom Meer steigt die Stadt an: In Torrecilla und im Zentrum ist alles eben, Richtung Burriana und in den oberen Vierteln geht es bergauf.'
      ]
    },
    areas: {
      eyebrow: 'Wo ihr wohnt',
      title: 'Vier Ecken, vier Arten von Tag',
      paragraphs: ['Nerja ist eben und kompakt, den Unterschied macht die Nähe: zum Strand, zu den Tapas, zur Ruhe.']
    },
    amara: {
      eyebrow: 'Unsere Wohnung',
      title: 'AMARA Playa: fünfter Stock, Meerblick, 200 Meter zum Strand'
    },
    seasons: {
      eyebrow: 'Jahreszeiten',
      title: 'Sommer am Strand, Winter auf der Promenade',
      paragraphs: [
        'Im Sommer geht ihr vor dem Frühstück ins Meer und esst um neun.',
        'Im Winter gehört euch die Promenade, und an einem grauen Tag sind Höhle und Museum offen.'
      ],
      link: { label: 'Wetter in Nerja', token: 'nerja_weather' }
    },
    experience: {
      eyebrow: 'Eure Tage',
      title: 'Morgens Strand, mittags Höhle, abends Balcón',
      paragraphs: ['Ein Nerja-Tag braucht wenig Plan: vor dem Frühstück ins Meer, ein halber Tag in der Höhle von Nerja bei Maro, abends der Balcón, wenn die Tagesgäste weg sind und die Beleuchtung angeht. Frigiliana liegt zehn Minuten oberhalb, Granada und Málaga jeweils einen Tag entfernt.'],
      links: [
        { label: 'Alle Strände in Nerja', token: 'nerja_beaches_authority' },
        { label: 'Balcón de Europa', token: 'nerja_balcon_de_europa' },
        { label: 'Alle Nerja-Erlebnisse', token: 'nerja_experience_hub' }
      ]
    }
  },
  es: {
    hero: {
      eyebrow: 'Nerja · lugar y estancia',
      title: 'Nerja en el Mediterráneo',
      subtitle: 'Al mar por la mañana, tapas por la noche, y todo el año una ciudad abierta',
      standfirst: 'Nerja es una ciudad costera con calas pequeñas, una playa ancha al este y el Balcón de Europa en el centro. Desde el aeropuerto de Málaga el autobús llega directo, y en el pueblo casi todo se hace a pie. Nuestro apartamento está en Torrecilla: 200 metros a la playa, 500 al Balcón, un quinto con vistas al mar.',
      note: '',
      updated: 'Actualizado en agosto de 2026'
    },
    orientation: {
      eyebrow: 'Así es Nerja',
      title: 'El Balcón en el centro, las playas a izquierda y derecha',
      paragraphs: [
        'En el Balcón de Europa el casco antiguo termina sobre una roca encima del mar; debajo está la cala de Calahonda. Hacia el oeste siguen Torrecilla, El Chucho y el largo Playazo, hacia el este Carabeo, Carabeíllo y Burriana con los chiringuitos.',
        'Desde el mar la ciudad sube: en Torrecilla y en el centro todo es llano, hacia Burriana y en los barrios altos es cuesta arriba.'
      ]
    },
    areas: {
      eyebrow: 'Dónde os alojáis',
      title: 'Cuatro rincones, cuatro tipos de día',
      paragraphs: ['Nerja es llana y compacta; la diferencia está en la cercanía: a la playa, a las tapas, a la tranquilidad.']
    },
    amara: {
      eyebrow: 'Nuestro apartamento',
      title: 'AMARA Playa: quinta planta, vistas al mar, 200 metros a la playa'
    },
    seasons: {
      eyebrow: 'Estaciones',
      title: 'Verano en la playa, invierno en el paseo',
      paragraphs: [
        'En verano os bañáis antes del desayuno y cenáis a las nueve.',
        'En invierno el paseo es vuestro, y en un día gris la cueva y el museo están abiertos.'
      ],
      link: { label: 'El tiempo en Nerja', token: 'nerja_weather' }
    },
    experience: {
      eyebrow: 'Vuestros días',
      title: 'Playa por la mañana, cueva a mediodía, Balcón por la noche',
      paragraphs: ['Un día en Nerja necesita poco plan: al mar antes del desayuno, media jornada en la Cueva de Nerja en Maro, por la noche el Balcón cuando se han ido los visitantes de día y se encienden las luces. Frigiliana está a diez minutos más arriba, Granada y Málaga a un día cada una.'],
      links: [
        { label: 'Todas las playas de Nerja', token: 'nerja_beaches_authority' },
        { label: 'Balcón de Europa', token: 'nerja_balcon_de_europa' },
        { label: 'Todas las experiencias de Nerja', token: 'nerja_experience_hub' }
      ]
    }
  },
  nl: {
    hero: {
      eyebrow: 'Nerja · plek & verblijf',
      title: 'Nerja aan de Middellandse Zee',
      subtitle: '’s Ochtends de zee in, ’s avonds tapas, en het hele jaar een stad die open is',
      standfirst: 'Nerja is een kustplaats met kleine baaien, een breed strand in het oosten en de Balcón de Europa in het midden. Vanaf de luchthaven Málaga rijdt de bus rechtstreeks hierheen, in de stad gaat bijna alles te voet. Ons appartement ligt in Torrecilla: 200 meter naar het strand, 500 naar de Balcón, vijfde verdieping met zeezicht.',
      note: '',
      updated: 'Stand augustus 2026'
    },
    orientation: {
      eyebrow: 'Zo ligt Nerja',
      title: 'De Balcón in het midden, de stranden links en rechts',
      paragraphs: [
        'Bij de Balcón de Europa eindigt de oude stad op een rots boven de zee; daaronder ligt de baai Calahonda. Naar het westen volgen Torrecilla, El Chucho en de lange Playazo, naar het oosten Carabeo, Carabeíllo en Burriana met de chiringuito’s.',
        'Vanaf de zee stijgt de stad: in Torrecilla en het centrum is alles vlak, richting Burriana en in de hogere wijken gaat het omhoog.'
      ]
    },
    areas: {
      eyebrow: 'Waar jullie wonen',
      title: 'Vier hoeken, vier soorten dag',
      paragraphs: ['Nerja is vlak en compact, het verschil zit in de nabijheid: van het strand, van de tapas, van de rust.']
    },
    amara: {
      eyebrow: 'Ons appartement',
      title: 'AMARA Playa: vijfde verdieping, zeezicht, 200 meter naar het strand'
    },
    seasons: {
      eyebrow: 'Seizoenen',
      title: 'Zomer op het strand, winter op de promenade',
      paragraphs: [
        'In de zomer ga je voor het ontbijt de zee in en eet je om negen uur.',
        'In de winter is de promenade van jullie, en op een grijze dag zijn grot en museum open.'
      ],
      link: { label: 'Weer in Nerja', token: 'nerja_weather' }
    },
    experience: {
      eyebrow: 'Jullie dagen',
      title: '’s Ochtends strand, ’s middags grot, ’s avonds Balcón',
      paragraphs: ['Een Nerja-dag heeft weinig plan nodig: voor het ontbijt de zee in, een halve dag in de Cueva de Nerja bij Maro, ’s avonds de Balcón als de dagjesmensen weg zijn en de verlichting aangaat. Frigiliana ligt tien minuten hoger, Granada en Málaga elk een dag ver.'],
      links: [
        { label: 'Alle stranden in Nerja', token: 'nerja_beaches_authority' },
        { label: 'Balcón de Europa', token: 'nerja_balcon_de_europa' },
        { label: 'Alle Nerja-ervaringen', token: 'nerja_experience_hub' }
      ]
    }
  },
  sv: {
    hero: {
      eyebrow: 'Nerja · plats & vistelse',
      title: 'Nerja vid Medelhavet',
      subtitle: 'Ut i havet på morgonen, tapas på kvällen, och året runt en stad som är öppen',
      standfirst: 'Nerja är en kuststad med små vikar, en bred strand i öster och Balcón de Europa i mitten. Från Málagas flygplats går bussen direkt hit, och i stan går nästan allt till fots. Vår lägenhet ligger i Torrecilla: 200 meter till stranden, 500 till Balcón, femte våningen med havsutsikt.',
      note: '',
      updated: 'Uppdaterad augusti 2026'
    },
    orientation: {
      eyebrow: 'Så ligger Nerja',
      title: 'Balcón i mitten, stränderna till vänster och höger',
      paragraphs: [
        'Vid Balcón de Europa slutar gamla stan på en klippa över havet; nedanför ligger viken Calahonda. Västerut följer Torrecilla, El Chucho och den långa Playazo, österut Carabeo, Carabeíllo och Burriana med chiringuitos.',
        'Från havet stiger staden: i Torrecilla och centrum är allt plant, mot Burriana och i de övre kvarteren går det uppför.'
      ]
    },
    areas: {
      eyebrow: 'Var ni bor',
      title: 'Fyra hörn, fyra sorters dag',
      paragraphs: ['Nerja är platt och kompakt, skillnaden ligger i närheten: till stranden, till tapasen, till lugnet.']
    },
    amara: {
      eyebrow: 'Vår lägenhet',
      title: 'AMARA Playa: femte våningen, havsutsikt, 200 meter till stranden'
    },
    seasons: {
      eyebrow: 'Årstider',
      title: 'Sommar på stranden, vinter på strandpromenaden',
      paragraphs: [
        'På sommaren badar ni före frukost och äter vid nio.',
        'På vintern är strandpromenaden er, och en grå dag har grottan och museet öppet.'
      ],
      link: { label: 'Vädret i Nerja', token: 'nerja_weather' }
    },
    experience: {
      eyebrow: 'Era dagar',
      title: 'Strand på morgonen, grotta mitt på dagen, Balcón på kvällen',
      paragraphs: ['En Nerjadag behöver lite planering: ut i havet före frukost, en halv dag i Cueva de Nerja vid Maro, på kvällen Balcón när dagsbesökarna åkt och belysningen tänds. Frigiliana ligger tio minuter ovanför, Granada och Málaga vardera en dag bort.'],
      links: [
        { label: 'Alla stränder i Nerja', token: 'nerja_beaches_authority' },
        { label: 'Balcón de Europa', token: 'nerja_balcon_de_europa' },
        { label: 'Alla Nerja-upplevelser', token: 'nerja_experience_hub' }
      ]
    }
  }
} satisfies Record<AmaraLanguage, {
  hero: NerjaLocationHubLocale['hero'];
  orientation: Pick<NerjaLocationHubLocale['orientation'], 'eyebrow' | 'title' | 'paragraphs'>;
  areas: Pick<NerjaLocationHubLocale['areas'], 'eyebrow' | 'title' | 'paragraphs'>;
  amara: Pick<NerjaLocationHubLocale['amara'], 'eyebrow' | 'title'>;
  seasons: NerjaLocationHubLocale['seasons'];
  experience: Pick<NerjaLocationHubLocale['experience'], 'eyebrow' | 'title' | 'paragraphs' | 'links'>;
}>;

export function getNerjaLocationHubLocale(lang: AmaraLanguage): NerjaLocationHubLocale {
  const base = nerjaLocationHubContent.locales[lang];
  const copy = nerjaLocationPeopleFirstCopy[lang];
  return {
    ...base,
    hero: copy.hero,
    orientation: { ...base.orientation, ...copy.orientation },
    areas: { ...base.areas, ...copy.areas },
    amara: { ...base.amara, ...copy.amara },
    seasons: copy.seasons,
    experience: { ...base.experience, ...copy.experience }
  };
}
