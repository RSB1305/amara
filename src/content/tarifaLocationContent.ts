import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaLocationHubLinkToken =
  | 'getting_to_tarifa'
  | 'tarifa_geography'
  | 'tarifa_where_to_stay'
  | 'tarifa_weather'
  | 'tarifa_experience_hub'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'casa';

export interface TarifaLocationHubLink {
  label: string;
  token?: TarifaLocationHubLinkToken;
  anchor?: string;
}

interface TarifaLocationHubFeature {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  link?: TarifaLocationHubLink;
}

interface TarifaLocationHubLocale {
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  geography: TarifaLocationHubFeature & {
    markers: Array<{ label: string; value: string }>;
  };
  arrival: TarifaLocationHubFeature;
  areas: TarifaLocationHubFeature & {
    archetypes: Array<{ title: string; consequence: string }>;
  };
  weather: TarifaLocationHubFeature;
  dailyLife: TarifaLocationHubFeature;
  winter: TarifaLocationHubFeature;
  amara: TarifaLocationHubFeature & {
    facts: string[];
    imageAlt: string;
  };
  experience: TarifaLocationHubFeature & {
    links: TarifaLocationHubLink[];
  };
  /** Booking-facing close. Rolled out per language as each locale is rewritten. */
  closing?: {
    title: string;
    lead: string;
    ctaLabel: string;
  };
}

const seo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-location-hub-v4.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-03',
    dateModified: '2026-08-13',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'amara-about-us'
  },
  languages: {
    en: {
      title: 'Staying in Tarifa: Balcony over the Atlantic | AMARA',
      description: 'Where you stay in Tarifa shapes every day: wind, parking, distances. Our apartment in La Marina – balcony over the Atlantic, parking, beach in 5 minutes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'In Tarifa übernachten: Balkon zum Atlantik | AMARA',
      description: 'Wo ihr in Tarifa wohnt, entscheidet über jeden Tag: Wind, Parken, Wege. Unsere Wohnung in La Marina – Balkon zum Atlantik, Stellplatz, Strand in 5 Minuten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojarse en Tarifa: balcón al Atlántico | AMARA',
      description: 'Dónde os alojáis en Tarifa marca cada día: viento, aparcamiento, distancias. Nuestro apartamento en La Marina: balcón al Atlántico, garaje y playa en 5 minutos.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Overnachten in Tarifa: balkon aan de oceaan | AMARA',
      description: 'Waar jullie in Tarifa verblijven bepaalt elke dag: wind, parkeren, afstanden. Ons appartement in La Marina – balkon aan de oceaan, parkeerplaats, strand in 5 minuten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Bo i Tarifa: balkong mot Atlanten | AMARA',
      description: 'Var ni bor i Tarifa präglar varje dag: vind, parkering, avstånd. Vår lägenhet i La Marina – balkong mot Atlanten, garageplats och strand på 5 minuter.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const tarifaLocationContent: {
  token: 'location_tarifa';
  seo: AmaraAuthoringSeo;
  locales: Record<AmaraLanguage, TarifaLocationHubLocale>;
} = {
  token: 'location_tarifa',
  seo,
  locales: {
    en: {
      hero: {
        eyebrow: 'Tarifa · Location & stay',
        title: 'Staying in Tarifa – the Atlantic off your balcony, Africa on the horizon',
        standfirst: 'Tarifa is a village at the southernmost point of Europe where almost everything is walkable. And yet where you stay shapes every day here: the wind on your balcony, the hunt for a parking space in August, and how the evening ends. I lived in Tarifa myself before we started hosting guests here.',
        note: 'An AMARA guide written from experience – not a live service for wind and weather.',
        updated: 'Reviewed August 2026'
      },
      geography: {
        eyebrow: 'Where you are',
        title: 'The southernmost point of Europe, with Africa opposite',
        paragraphs: [
          'Tarifa sits where the Atlantic passes into the Strait of Gibraltar – the southernmost point of mainland Europe. On a clear day the Moroccan coast lies so close that you can see it from the balcony. Not as an idea on a map, but as a coastline with mountains above it.',
          'The village itself is small. Old Town, newer quarter and the beach edge sit close enough together that you reach almost everything on foot. What lies further out – the western kite beaches, Bolonia, the Strait – is minutes away by car.'
        ],
        markers: [
          { label: 'At the door', value: 'Playa Los Lances, 5 minutes on foot' },
          { label: 'In the evening', value: 'Old Town, 10–15 minutes along the sea' },
          { label: 'Heading west', value: 'Valdevaqueros, 10 minutes by car' }
        ],
        link: { label: 'Geography & orientation in detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Arrival & car',
        title: 'Do you need a car? Never in the village – for the kite beaches, yes',
        paragraphs: [
          'Most of our guests fly into Málaga and drive about an hour and a half on the motorway. Gibraltar really only works for guests from the UK, hardly anyone arrives by bus, and a few cross by ferry from Morocco.',
          'In Tarifa itself you do not need the car. We actively recommend not driving inside the village – only out of it. In July and August a reserved space is worth its weight in gold: you park once and leave the car where it is.',
          'There is one place where the car really matters: the kite beaches to the west. If you take lessons with Tarifa Surf Club you will usually find a lift with other students – but I would not rely on it.'
        ],
        link: { label: 'Plan your journey to Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Where to stay',
        title: 'Old Town or La Marina – and what that means every day',
        paragraphs: [
          'If you really want to stay in the Old Town, stay in the Old Town. That is not a half measure – it is a decision with daily consequences.',
          'In the Old Town it means: luggage over cobblestones, heat in summer, noise and parties until late, and a parking space at least ten to fifteen minutes away. And something few people mention: the old houses in the centre are damp, and mould is a common issue there.',
          'La Marina is the opposite: modern and quiet, with your own parking space and the beach five minutes down the road. In exchange, the history does not start outside your door but ten to fifteen minutes later – along the sea, entering the Old Town from below.'
        ],
        archetypes: [
          { title: 'Old Town', consequence: 'History at the door. In exchange: heat, noise, damp – and parking far outside.' },
          { title: 'La Marina', consequence: 'Modern and quiet, own parking space, beach in five minutes. The Old Town is a walk away.' },
          { title: 'Los Lances corridor', consequence: 'Front-line sea views – but mostly much older buildings, where damp is a known problem.' },
          { title: 'Countryside & hills', consequence: 'Campo: complete quiet and plenty of nature – daily life then organises itself around the car.' }
        ],
        link: { label: 'Compare Tarifa’s areas in depth', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seasons',
        title: 'The wind decides which beach works today',
        paragraphs: [
          'Tarifa is wind-driven, above all in the shoulder and low seasons. If you cannot deal with that, you will not be happy here. If you accept it, you get exactly the place Tarifa is famous for.',
          'In a strong Levante only Valdevaqueros really works – that is where the rescue boats are and where everything is set up for it. The small, family-friendly Playa Chica is not a good choice then.',
          'On days like that, how your accommodation is oriented matters. Our balcony faces the sea; the Levante hits the back of the building. Only in a Poniente does it get windy at the front too – and Poniente is far less frequent.'
        ],
        link: { label: 'Explore Tarifa weather & seasons', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Daily life',
        title: 'What repeats after three days',
        paragraphs: [
          'Everyday shopping runs through the Mercadona directly opposite — the largest supermarket in Tarifa. For fish the Mercado is worth it, for fruit and vegetables the small garage sales around town. On Sundays the Dia is usually open, and in July and August the Mercadona too.',
          'Restaurants and bars cluster in the Old Town and along Calle Batalla del Salado, both walkable from La Marina. Which addresses are actually worth it is in the Experience guide.'
        ]
      },
      winter: {
        eyebrow: 'From September',
        title: 'From September Tarifa becomes a different place',
        paragraphs: [
          'July and August are Tarifa at full volume: busy beaches, the whole town out in the evening, the kite scene at its liveliest. That is exactly what many people come for – and rightly so. The one thing that really costs nerves in those weeks is finding a parking space. With us it simply does not arise: the space in the underground garage is yours.',
          'From September it gets quieter. You feel the calm, you start talking to locals, you get to know people. For us this is the loveliest time here.',
          'For longer stays something other than beach proximity matters: that the apartment is dry, that it warms up, and that there is somewhere to work. That is exactly where many Old Town houses fall short.'
        ]
      },
      amara: {
        eyebrow: 'Our apartment',
        title: 'Why we host our guests in La Marina',
        paragraphs: [
          'The balcony faces west. Which means: every evening the sun drops into the Atlantic in front of you. And when the air is clear, Africa lies opposite – not as an idea on a map, but as a coast you can see.',
          'The bedroom sits above it, with the same view. You wake up with the sea. What guests say most often on arrival: that the apartment is even more beautiful than in the photos.',
          'I lived in Tarifa myself – kitesurfing, friends, a few months at a time. When this apartment came up for sale, we bought it and modernised it. Because of the evenings. And because it simply works day to day.',
          'Honestly: if you need historic Tarifa right outside your door, we are the wrong choice. And the pool belongs to the complex, not the apartment – open roughly from mid-May to mid-September, depending on the weather.'
        ],
        facts: [
          '75 m² over two levels – bedroom with sea view',
          'Large west-facing balcony, fully sheltered in a Levante',
          'Reserved underground parking space, up to 2.00 m height',
          'Playa Los Lances 5 minutes on foot, Mercadona opposite',
          'Two desks – and dry through the winter'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'View AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Your days here',
        title: 'And then the days themselves',
        paragraphs: ['Where you stay is settled. What you do here – beaches, wind, food, nature, the Old Town and day trips to Bolonia or Tangier – is in the Experience guide.'],
        links: [
          { label: 'Explore the Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Explore Tarifa beaches', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'For us, Tarifa is the most beautiful place on this planet.',
        lead: 'If that makes sense to you, the best place to stay is where the sun drops into the sea in front of you.',
        ctaLabel: 'View AMARA Family & Surf'
      }
    },
    de: {
      hero: {
        eyebrow: 'Tarifa · Lage & Aufenthalt',
        title: 'In Tarifa übernachten – der Atlantik vor dem Balkon, Afrika am Horizont',
        standfirst: 'Tarifa ist ein Dorf am südlichsten Punkt Europas, in dem fast alles zu Fuß geht. Und trotzdem entscheidet die Wohnlage hier über jeden Tag: über den Wind auf eurem Balkon, über die Parkplatzsuche im August und darüber, wie der Abend endet. Ich habe selbst in Tarifa gewohnt, bevor wir hier Gäste empfangen haben.',
        note: 'Ein AMARA-Guide aus eigener Erfahrung – keine Live-Auskunft zu Wind und Wetter.',
        updated: 'Geprüft im August 2026'
      },
      geography: {
        eyebrow: 'Wo ihr seid',
        title: 'Am südlichsten Punkt Europas, mit Afrika gegenüber',
        paragraphs: [
          'Tarifa liegt dort, wo der Atlantik in die Straße von Gibraltar übergeht – am südlichsten Punkt des europäischen Festlands. Bei klarer Luft liegt die marokkanische Küste so nah gegenüber, dass ihr sie vom Balkon aus seht. Nicht als Idee auf einer Landkarte, sondern als Küstenlinie mit Bergen darüber.',
          'Der Ort selbst ist klein. Altstadt, neuerer Teil und Strandkante liegen so dicht beieinander, dass ihr fast alles zu Fuß erreicht. Was weiter draußen liegt – die westlichen Kite-Strände, Bolonia, die Meerenge – ist in Minuten mit dem Auto da.'
        ],
        markers: [
          { label: 'Vor der Tür', value: 'Playa Los Lances, 5 Minuten zu Fuß' },
          { label: 'Am Abend', value: 'Altstadt, 10–15 Minuten am Meer entlang' },
          { label: 'Nach Westen', value: 'Valdevaqueros, 10 Minuten mit dem Auto' }
        ],
        link: { label: 'Geografie & Orientierung im Detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Anreise & Auto',
        title: 'Braucht ihr ein Auto? Im Dorf nie – für die Kite-Strände schon',
        paragraphs: [
          'Die meisten unserer Gäste fliegen nach Málaga und fahren von dort rund anderthalb Stunden über die Autobahn. Gibraltar funktioniert praktisch nur für Gäste aus Großbritannien, mit dem Bus kommt kaum jemand, und ganz wenige setzen mit dem Schiff aus Marokko über.',
          'In Tarifa selbst braucht ihr das Auto nicht. Wir empfehlen sogar ausdrücklich, im Ort nicht zu fahren – nur hinaus. Im Juli und August ist ein fester Stellplatz dann Gold wert: Ihr stellt das Auto ab und lasst es stehen.',
          'Wirklich nötig wird das Auto an einer Stelle: für die Kite-Strände im Westen. Wer beim Tarifa Surf Club Unterricht nimmt, findet meist eine Mitfahrgelegenheit unter den anderen Schülern – fest verlassen würde ich mich nicht darauf.'
        ],
        link: { label: 'Anreise nach Tarifa planen', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Wo wohnen',
        title: 'Altstadt oder La Marina – und was das jeden Tag bedeutet',
        paragraphs: [
          'Wer unbedingt in der Altstadt wohnen will, sollte in der Altstadt wohnen. Das ist keine halbe Sache – das ist eine Entscheidung mit Folgen, jeden Tag.',
          'In der Altstadt heißt das: Gepäck über Kopfsteinpflaster, im Sommer Hitze, Lärm und Party bis spät, und ein Parkplatz mindestens zehn bis fünfzehn Minuten entfernt. Dazu kommt etwas, das selten jemand erwähnt: Die alten Häuser im Zentrum sind feucht, Schimmel ist dort ein verbreitetes Thema.',
          'La Marina ist das Gegenteil: modern und ruhig, mit eigenem Stellplatz und dem Strand fünf Minuten die Straße runter. Dafür beginnt die Geschichte nicht vor der Haustür, sondern zehn bis fünfzehn Minuten später – am Meer entlang, unten in die Altstadt hinein.'
        ],
        archetypes: [
          { title: 'Altstadt', consequence: 'Geschichte vor der Tür. Dafür Hitze, Lärm, Feuchtigkeit – und Parken weit außerhalb.' },
          { title: 'La Marina', consequence: 'Modern und ruhig, eigener Stellplatz, Strand in fünf Minuten. Die Altstadt liegt einen Spaziergang entfernt.' },
          { title: 'Los-Lances-Korridor', consequence: 'Erste Meereslinie – dafür meist deutlich ältere Gebäude, in denen Feuchtigkeit ein bekanntes Problem ist.' },
          { title: 'Umland & Hügel', consequence: 'Campo: absolute Ruhe und viel Natur – der Alltag organisiert sich dann ums Auto.' }
        ],
        link: { label: 'Tarifas Lagen im Detail vergleichen', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & Jahreszeiten',
        title: 'Der Wind entscheidet, welcher Strand heute geht',
        paragraphs: [
          'Tarifa ist windgetrieben, vor allem in Vor- und Nebensaison. Wer damit nicht umgehen kann, wird hier nicht glücklich. Wer ihn annimmt, bekommt genau den Ort, für den Tarifa berühmt ist.',
          'Bei starkem Levante funktioniert praktisch nur Valdevaqueros – dort sind die Rettungsboote, dort ist alles darauf eingestellt. Die kleine, familienfreundliche Playa Chica ist dann keine gute Wahl.',
          'An solchen Tagen zählt, wie eure Unterkunft steht. Unser Balkon liegt auf der Meerseite; der Levante trifft die Rückseite des Hauses. Nur bei Poniente wird es auch vorne windig – und Poniente gibt es deutlich seltener.'
        ],
        link: { label: 'Wetter & Jahreszeiten in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Alltag',
        title: 'Was sich nach drei Tagen wiederholt',
        paragraphs: [
          'Die Grundversorgung läuft über den Mercadona direkt gegenüber – den größten Supermarkt Tarifas. Für Fisch lohnt der Mercado, für Obst und Gemüse die kleinen Garagenverkäufe im Ort. Sonntags hat üblicherweise der Dia geöffnet, im Juli und August auch der Mercadona.',
          'Restaurants und Bars konzentrieren sich in der Altstadt und entlang der Calle Batalla del Salado, beides von La Marina aus zu Fuß erreichbar. Welche Adressen sich wirklich lohnen, steht im Erlebnis-Guide.'
        ]
      },
      winter: {
        eyebrow: 'Ab September',
        title: 'Ab September wird Tarifa ein anderer Ort',
        paragraphs: [
          'Juli und August sind Tarifa auf voller Lautstärke: volle Strände, abends die ganze Stadt unterwegs, die Kite-Szene am lebendigsten. Genau dafür kommen viele – zu Recht. Das Einzige, was in diesen Wochen wirklich Nerven kostet, ist die Parkplatzsuche. Bei uns entfällt sie: Der Stellplatz in der Tiefgarage gehört euch.',
          'Ab September wird es dann ruhiger. Man merkt die Ruhe, man kommt mit Einheimischen ins Gespräch, man lernt Leute kennen. Für uns ist das die schönste Zeit hier.',
          'Für längere Aufenthalte zählt dann anderes als Strandnähe: dass die Wohnung trocken ist, dass sie warm wird und dass es einen Platz zum Arbeiten gibt. Genau daran scheitern viele Häuser in der Altstadt.'
        ]
      },
      amara: {
        eyebrow: 'Unsere Wohnung',
        title: 'Warum wir unsere Gäste in La Marina beherbergen',
        paragraphs: [
          'Der Balkon zeigt nach Westen. Das heißt: Jeden Abend fällt die Sonne vor euch in den Atlantik. Und wenn die Luft klar ist, liegt Afrika gegenüber – nicht als Idee auf einer Landkarte, sondern als Küste, die man sieht.',
          'Darüber liegt das Schlafzimmer, mit demselben Blick. Ihr wacht mit dem Meer auf. Was Gäste beim Ankommen am häufigsten sagen: dass die Wohnung in echt schöner ist als auf den Fotos.',
          'Ich habe in Tarifa selbst gewohnt – Kitesurfen, Freunde, immer wieder ein paar Monate. Als diese Wohnung zum Verkauf stand, haben wir sie gekauft und modernisiert. Wegen der Abende. Und weil sie im Alltag einfach funktioniert.',
          'Ehrlich gesagt: Wer das historische Tarifa direkt vor der Tür braucht, ist bei uns falsch. Und der Pool gehört zur Anlage, nicht zur Wohnung – je nach Witterung etwa von Mitte Mai bis Mitte September.'
        ],
        facts: [
          '75 m² auf zwei Ebenen – Schlafzimmer mit Meerblick',
          'Großer Balkon nach Westen, bei Levante komplett windgeschützt',
          'Reservierter Tiefgaragenstellplatz, bis 2,00 m Höhe',
          'Playa Los Lances 5 Minuten zu Fuß, Mercadona gegenüber',
          'Zwei Schreibtische – und im Winter trocken'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'AMARA Family & Surf ansehen', token: 'casa' }
      },
      experience: {
        eyebrow: 'Eure Tage hier',
        title: 'Und dann die Tage selbst',
        paragraphs: ['Wo ihr wohnt, ist entschieden. Was ihr hier tut – Strände, Wind, Essen, Natur, Altstadt und die Ausflüge nach Bolonia oder Tanger – steht im Erlebnis-Guide.'],
        links: [
          { label: 'Tarifa Experience entdecken', token: 'tarifa_experience_hub' },
          { label: 'Tarifas Strände entdecken', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'Tarifa ist für uns der schönste Ort auf diesem Planeten.',
        lead: 'Wenn ihr das nachvollziehen könnt, wohnt ihr am besten dort, wo abends die Sonne vor euch ins Meer fällt.',
        ctaLabel: 'AMARA Family & Surf ansehen'
      }
    },
    es: {
      hero: {
        eyebrow: 'Tarifa · Ubicación y estancia',
        title: 'Alojarse en Tarifa: el Atlántico frente al balcón, África en el horizonte',
        standfirst: 'Tarifa es un pueblo en el punto más meridional de Europa donde casi todo se hace a pie. Y aun así, dónde os alojáis marca cada día: el viento en vuestro balcón, la búsqueda de aparcamiento en agosto y cómo termina la tarde. Yo mismo viví en Tarifa antes de que empezáramos a recibir huéspedes aquí.',
        note: 'Una guía de AMARA escrita desde la experiencia; no es un servicio de condiciones en directo.',
        updated: 'Revisado en agosto de 2026'
      },
      geography: {
        eyebrow: 'Dónde estáis',
        title: 'El punto más meridional de Europa, con África enfrente',
        paragraphs: [
          'Tarifa se sitúa donde el Atlántico pasa al Estrecho de Gibraltar, en el punto más meridional de la Europa continental. Con el aire limpio, la costa marroquí queda tan cerca que se ve desde el balcón. No como una idea en un mapa, sino como una línea de costa con montañas encima.',
          'El pueblo en sí es pequeño. Casco antiguo, parte nueva y borde de playa están tan próximos que casi todo se alcanza andando. Lo que queda más lejos —las playas de kite del oeste, Bolonia, el Estrecho— está a minutos en coche.'
        ],
        markers: [
          { label: 'A la puerta', value: 'Playa Los Lances, 5 minutos a pie' },
          { label: 'Por la tarde', value: 'Casco antiguo, 10–15 minutos junto al mar' },
          { label: 'Hacia el oeste', value: 'Valdevaqueros, 10 minutos en coche' }
        ],
        link: { label: 'Geografía y orientación en detalle', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Llegada y coche',
        title: '¿Hace falta coche? En el pueblo nunca; para las playas de kite, sí',
        paragraphs: [
          'La mayoría de nuestros huéspedes vuela a Málaga y conduce desde allí alrededor de hora y media por autopista. Gibraltar funciona prácticamente solo para huéspedes del Reino Unido, en autobús llega poca gente y unos pocos cruzan en barco desde Marruecos.',
          'En Tarifa no necesitáis el coche. De hecho recomendamos no conducir dentro del pueblo, solo salir de él. En julio y agosto una plaza fija vale oro: dejáis el coche aparcado y os olvidáis de él.',
          'Hay un caso en el que el coche sí importa: las playas de kite del oeste. Quien recibe clases con Tarifa Surf Club suele encontrar sitio en el coche de otros alumnos, aunque yo no contaría con ello de forma fija.'
        ],
        link: { label: 'Planificar la llegada a Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Dónde alojarse',
        title: 'Casco antiguo o La Marina: qué significa cada día',
        paragraphs: [
          'Quien quiera alojarse sí o sí en el casco antiguo, que se aloje en el casco antiguo. No es una solución a medias: es una decisión con consecuencias diarias.',
          'En el casco antiguo eso significa: equipaje sobre adoquines, calor en verano, ruido y fiesta hasta tarde, y aparcamiento como mínimo a diez o quince minutos. Y algo que casi nadie menciona: las casas antiguas del centro son húmedas y el moho es allí un problema frecuente.',
          'La Marina es lo contrario: moderna y tranquila, con plaza de garaje propia y la playa cinco minutos calle abajo. A cambio, la historia no empieza en la puerta, sino diez o quince minutos después, junto al mar y entrando al casco antiguo por su parte baja.'
        ],
        archetypes: [
          { title: 'Casco Antiguo', consequence: 'Historia en la puerta. A cambio: calor, ruido, humedad y aparcar lejos.' },
          { title: 'La Marina', consequence: 'Moderna y tranquila, plaza propia, playa en cinco minutos. El casco antiguo queda a un paseo.' },
          { title: 'Corredor de Los Lances', consequence: 'Primera línea de mar, pero con edificios bastante más antiguos en los que la humedad es un problema conocido.' },
          { title: 'Campo y colinas', consequence: 'El campo: tranquilidad absoluta y mucha naturaleza; la vida diaria se organiza entonces alrededor del coche.' }
        ],
        link: { label: 'Comparar en detalle las zonas de Tarifa', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Viento y estaciones',
        title: 'El viento decide qué playa funciona hoy',
        paragraphs: [
          'Tarifa está marcada por el viento, sobre todo en temporada media y baja. Quien no sepa convivir con eso no será feliz aquí. Quien lo acepte, se lleva exactamente el lugar por el que Tarifa es famosa.',
          'Con levante fuerte solo funciona de verdad Valdevaqueros: allí están las lanchas de rescate y todo está preparado para ello. La pequeña Playa Chica, ideal para familias, no es entonces buena elección.',
          'En esos días importa cómo está orientado vuestro alojamiento. Nuestro balcón da al mar; el levante golpea la parte trasera del edificio. Solo con poniente entra viento por delante, y el poniente es bastante menos frecuente.'
        ],
        link: { label: 'Tiempo y estaciones en Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vida diaria',
        title: 'Lo que se repite a partir del tercer día',
        paragraphs: [
          'La compra diaria se hace en el Mercadona de enfrente, el supermercado más grande de Tarifa. Para pescado merece la pena el Mercado; para fruta y verdura, las pequeñas ventas de garaje del pueblo. Los domingos suele abrir el Dia, y en julio y agosto también el Mercadona.',
          'Los restaurantes y bares se concentran en el casco antiguo y en la Calle Batalla del Salado, ambos accesibles a pie desde La Marina. Qué direcciones merecen realmente la pena está en la guía de experiencias.'
        ]
      },
      winter: {
        eyebrow: 'A partir de septiembre',
        title: 'A partir de septiembre Tarifa es otro lugar',
        paragraphs: [
          'Julio y agosto son Tarifa a todo volumen: playas llenas, el pueblo entero en la calle por la tarde y la escena del kite en su mejor momento. Mucha gente viene justo por eso, y con razón. Lo único que de verdad desgasta esas semanas es buscar aparcamiento. Con nosotros no ocurre: la plaza del garaje subterráneo es vuestra.',
          'A partir de septiembre llega la calma. Se nota la tranquilidad, se habla con la gente del pueblo, se hacen conocidos. Para nosotros es la época más bonita de aquí.',
          'En estancias largas pesa algo distinto a la cercanía de la playa: que la vivienda esté seca, que caliente bien y que haya un sitio para trabajar. Ahí es justo donde fallan muchas casas del casco antiguo.'
        ]
      },
      amara: {
        eyebrow: 'Nuestro apartamento',
        title: 'Por qué alojamos a nuestros huéspedes en La Marina',
        paragraphs: [
          'El balcón mira al oeste. Es decir: cada tarde el sol cae en el Atlántico delante de vosotros. Y cuando el aire está limpio, África queda enfrente; no como una idea en un mapa, sino como una costa que se ve.',
          'Encima está el dormitorio, con la misma vista. Os despertáis con el mar. Lo que más dicen los huéspedes al llegar: que el apartamento es aún más bonito que en las fotos.',
          'Yo viví en Tarifa: kitesurf, amigos, temporadas de varios meses. Cuando este apartamento salió a la venta, lo compramos y lo reformamos. Por las tardes. Y porque en el día a día simplemente funciona.',
          'Con sinceridad: si necesitáis la Tarifa histórica justo en la puerta, no somos la opción adecuada. Y la piscina es de la comunidad, no del apartamento; abre aproximadamente de mediados de mayo a mediados de septiembre, según el tiempo.'
        ],
        facts: [
          '75 m² en dos niveles: dormitorio con vistas al mar',
          'Balcón amplio orientado al oeste, totalmente resguardado con levante',
          'Plaza reservada en garaje subterráneo, hasta 2,00 m de altura',
          'Playa Los Lances a 5 minutos a pie, Mercadona enfrente',
          'Dos escritorios, y seco en invierno'
        ],
        imageAlt: 'AMARA Family & Surf en La Marina, Tarifa',
        link: { label: 'Ver AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Vuestros días aquí',
        title: 'Y después, los días en sí',
        paragraphs: ['Dónde os alojáis ya está decidido. Lo que hacéis aquí —playas, viento, gastronomía, naturaleza, casco antiguo y las excursiones a Bolonia o Tánger— está en la guía de experiencias.'],
        links: [
          { label: 'Explorar Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Explorar las playas de Tarifa', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'Para nosotros, Tarifa es el lugar más bonito de este planeta.',
        lead: 'Si lo entendéis así, lo mejor es alojarse donde el sol cae al mar justo delante de vosotros.',
        ctaLabel: 'Ver AMARA Family & Surf'
      }
    },
    nl: {
      hero: {
        eyebrow: 'Tarifa · Ligging & verblijf',
        title: 'Overnachten in Tarifa – de Atlantische Oceaan voor het balkon, Afrika aan de horizon',
        standfirst: 'Tarifa is een dorp op het zuidelijkste punt van Europa waar bijna alles te voet gaat. En toch bepaalt jullie ligging hier elke dag: de wind op jullie balkon, het zoeken naar een parkeerplek in augustus en hoe de avond eindigt. Ik heb zelf in Tarifa gewoond voordat we hier gasten ontvingen.',
        note: 'Een AMARA-gids uit eigen ervaring — geen live informatiedienst voor wind en weer.',
        updated: 'Gecontroleerd in augustus 2026'
      },
      geography: {
        eyebrow: 'Waar jullie zijn',
        title: 'Het zuidelijkste punt van Europa, met Afrika ertegenover',
        paragraphs: [
          'Tarifa ligt waar de Atlantische Oceaan overgaat in de Straat van Gibraltar — het zuidelijkste punt van het Europese vasteland. Bij heldere lucht ligt de Marokkaanse kust zo dichtbij dat jullie hem vanaf het balkon zien. Niet als idee op een kaart, maar als kustlijn met bergen erboven.',
          'Het dorp zelf is klein. Oude stad, nieuwer deel en de strandrand liggen zo dicht bij elkaar dat jullie bijna alles lopend bereiken. Wat verder weg ligt — de westelijke kitestranden, Bolonia, de Straat — is minuten rijden.'
        ],
        markers: [
          { label: 'Voor de deur', value: 'Playa Los Lances, 5 minuten lopen' },
          { label: "'s Avonds", value: 'Oude stad, 10–15 minuten langs zee' },
          { label: 'Naar het westen', value: 'Valdevaqueros, 10 minuten met de auto' }
        ],
        link: { label: 'Geografie & oriëntatie in detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Aankomst & auto',
        title: 'Hebben jullie een auto nodig? In het dorp nooit – voor de kitestranden wel',
        paragraphs: [
          'De meeste van onze gasten vliegen naar Málaga en rijden vandaar ongeveer anderhalf uur over de snelweg. Gibraltar werkt praktisch alleen voor gasten uit het Verenigd Koninkrijk, met de bus komt bijna niemand, en enkelen steken met de boot over vanuit Marokko.',
          'In Tarifa zelf hebben jullie de auto niet nodig. We raden zelfs uitdrukkelijk aan niet in het dorp te rijden, alleen eruit. In juli en augustus is een vaste parkeerplaats goud waard: jullie zetten de auto neer en laten hem staan.',
          'Op één punt is de auto wel nodig: de kitestranden in het westen. Wie les neemt bij Tarifa Surf Club vindt meestal een lift bij andere cursisten — maar daar zou ik niet vast op rekenen.'
        ],
        link: { label: 'De reis naar Tarifa plannen', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'Oude stad of La Marina – en wat dat elke dag betekent',
        paragraphs: [
          'Wie per se in de oude stad wil verblijven, moet in de oude stad verblijven. Dat is geen halve keuze — dat is een besluit met dagelijkse gevolgen.',
          'In de oude stad betekent dat: bagage over kasseien, hitte in de zomer, geluid en feest tot laat, en een parkeerplek op minstens tien tot vijftien minuten afstand. En iets wat zelden iemand noemt: de oude huizen in het centrum zijn vochtig, schimmel is daar een bekend probleem.',
          'La Marina is het tegenovergestelde: modern en rustig, met een eigen parkeerplaats en het strand vijf minuten de straat af. Daarvoor begint de geschiedenis niet voor de deur, maar tien tot vijftien minuten later — langs zee, onderaan de oude stad binnen.'
        ],
        archetypes: [
          { title: 'Oude stad', consequence: 'Geschiedenis voor de deur. Daartegenover: hitte, geluid, vocht — en ver parkeren.' },
          { title: 'La Marina', consequence: 'Modern en rustig, eigen parkeerplaats, strand in vijf minuten. De oude stad ligt op een wandeling afstand.' },
          { title: 'Los-Lances-corridor', consequence: 'Eerste lijn aan zee – maar meestal duidelijk oudere gebouwen, waar vocht een bekend probleem is.' },
          { title: 'Buitengebied & heuvels', consequence: 'Campo: absolute rust en veel natuur – het dagelijks leven draait dan om de auto.' }
        ],
        link: { label: 'Vergelijk de gebieden van Tarifa uitgebreid', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seizoenen',
        title: 'De wind bepaalt welk strand vandaag werkt',
        paragraphs: [
          'Tarifa wordt door wind bepaald, vooral in het voor- en naseizoen. Wie daar niet mee om kan gaan, wordt hier niet gelukkig. Wie hem accepteert, krijgt precies de plek waar Tarifa om bekendstaat.',
          'Bij sterke levante werkt praktisch alleen Valdevaqueros — daar liggen de reddingsboten en daar is alles erop ingericht. Het kleine, gezinsvriendelijke Playa Chica is dan geen goede keuze.',
          'Op zulke dagen telt hoe jullie verblijf georiënteerd is. Ons balkon ligt aan de zeezijde; de levante raakt de achterkant van het gebouw. Alleen bij poniente wordt het ook aan de voorkant winderig — en poniente komt duidelijk minder vaak voor.'
        ],
        link: { label: 'Bekijk weer & seizoenen in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven',
        title: 'Wat zich na drie dagen herhaalt',
        paragraphs: [
          'De dagelijkse boodschappen lopen via de Mercadona aan de overkant, de grootste supermarkt van Tarifa. Voor vis is de Mercado de moeite waard, voor fruit en groente de kleine garageverkopen in het dorp. Op zondag is de Dia meestal open, in juli en augustus ook de Mercadona.',
          'Restaurants en bars concentreren zich in de oude stad en langs de Calle Batalla del Salado, allebei te voet bereikbaar vanuit La Marina. Welke adressen echt de moeite waard zijn, staat in de ervaringsgids.'
        ]
      },
      winter: {
        eyebrow: 'Vanaf september',
        title: 'Vanaf september is Tarifa een andere plek',
        paragraphs: [
          'Juli en augustus zijn Tarifa op vol volume: volle stranden, \'s avonds het hele dorp op straat, de kitescene op haar levendigst. Precies daarvoor komen veel mensen — en terecht. Het enige wat die weken echt energie kost, is een parkeerplek zoeken. Bij ons speelt dat niet: de plek in de ondergrondse garage is van jullie.',
          'Vanaf september wordt het rustiger. Je merkt de rust, je raakt aan de praat met de mensen uit het dorp, je leert er mensen kennen. Voor ons is dat de mooiste tijd hier.',
          'Bij een langer verblijf telt iets anders dan de afstand tot het strand: dat de woning droog is, dat ze warm wordt en dat er een plek is om te werken. Precies daar schieten veel huizen in de oude stad tekort.'
        ]
      },
      amara: {
        eyebrow: 'Ons appartement',
        title: 'Waarom wij onze gasten in La Marina ontvangen',
        paragraphs: [
          'Het balkon ligt op het westen. Dat betekent: elke avond valt de zon voor jullie in de Atlantische Oceaan. En bij heldere lucht ligt Afrika ertegenover — niet als idee op een kaart, maar als kust die je ziet.',
          'Daarboven ligt de slaapkamer, met hetzelfde uitzicht. Jullie worden wakker met de zee. Wat gasten bij aankomst het vaakst zeggen: dat het appartement in het echt nog mooier is dan op de foto\'s.',
          'Ik heb zelf in Tarifa gewoond — kitesurfen, vrienden, telkens een paar maanden. Toen dit appartement te koop stond, hebben we het gekocht en gemoderniseerd. Vanwege de avonden. En omdat het in het dagelijks leven gewoon werkt.',
          'Eerlijk gezegd: wie het historische Tarifa direct voor de deur nodig heeft, zit bij ons verkeerd. En het zwembad hoort bij het complex, niet bij het appartement — afhankelijk van het weer ongeveer van half mei tot half september.'
        ],
        facts: [
          '75 m² op twee niveaus – slaapkamer met zeezicht',
          'Groot balkon op het westen, bij levante volledig beschut',
          'Gereserveerde ondergrondse parkeerplaats, tot 2,00 m hoogte',
          'Playa Los Lances 5 minuten lopen, Mercadona aan de overkant',
          'Twee bureaus – en droog in de winter'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'Bekijk AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Jullie dagen hier',
        title: 'En dan de dagen zelf',
        paragraphs: ['Waar jullie verblijven is beslist. Wat jullie hier doen — stranden, wind, eten, natuur, de oude stad en de uitstapjes naar Bolonia of Tanger — staat in de ervaringsgids.'],
        links: [
          { label: 'Ontdek Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Ontdek de stranden van Tarifa', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'Voor ons is Tarifa de mooiste plek op deze planeet.',
        lead: 'Als jullie dat begrijpen, verblijven jullie het best daar waar de zon voor jullie in zee valt.',
        ctaLabel: 'Bekijk AMARA Family & Surf'
      }
    },
    sv: {
      hero: {
        eyebrow: 'Tarifa · Läge & vistelse',
        title: 'Bo i Tarifa – Atlanten utanför balkongen, Afrika vid horisonten',
        standfirst: 'Tarifa är en by på Europas sydligaste punkt där nästan allt går att nå till fots. Ändå avgör var ni bor varje dag här: vinden på er balkong, jakten på en parkeringsplats i augusti och hur kvällen slutar. Jag bodde själv i Tarifa innan vi började ta emot gäster här.',
        note: 'En AMARA-guide ur egen erfarenhet – inte en tjänst för aktuella vind- och väderförhållanden.',
        updated: 'Granskad i augusti 2026'
      },
      geography: {
        eyebrow: 'Var ni är',
        title: 'Europas sydligaste punkt, med Afrika mittemot',
        paragraphs: [
          'Tarifa ligger där Atlanten övergår i Gibraltarsundet – på det europeiska fastlandets sydligaste punkt. När luften är klar ligger den marockanska kusten så nära att ni ser den från balkongen. Inte som en idé på en karta, utan som en kustlinje med berg ovanför.',
          'Själva byn är liten. Gamla stan, den nyare delen och strandkanten ligger så tätt att ni når nästan allt till fots. Det som ligger längre bort – kitestränderna i väster, Bolonia, sundet – är minuter bort med bil.'
        ],
        markers: [
          { label: 'Utanför dörren', value: 'Playa Los Lances, 5 minuters promenad' },
          { label: 'På kvällen', value: 'Gamla stan, 10–15 minuter längs havet' },
          { label: 'Västerut', value: 'Valdevaqueros, 10 minuter med bil' }
        ],
        link: { label: 'Geografi & orientering i detalj', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Ankomst & bil',
        title: 'Behöver ni bil? I byn aldrig – till kitestränderna ja',
        paragraphs: [
          'De flesta av våra gäster flyger till Málaga och kör därifrån ungefär en och en halv timme på motorvägen. Gibraltar fungerar i praktiken bara för gäster från Storbritannien, med buss kommer nästan ingen, och några få tar båten från Marocko.',
          'I Tarifa behöver ni inte bilen. Vi rekommenderar till och med uttryckligen att inte köra inne i byn – bara ut ur den. I juli och augusti är en fast plats guld värd: ni ställer bilen och låter den stå.',
          'På ett ställe behövs bilen på riktigt: kitestränderna i väster. Den som tar lektioner hos Tarifa Surf Club hittar oftast skjuts med andra elever – men jag skulle inte räkna med det.'
        ],
        link: { label: 'Planera resan till Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Var ska man bo',
        title: 'Gamla stan eller La Marina – och vad det betyder varje dag',
        paragraphs: [
          'Den som absolut vill bo i gamla stan ska bo i gamla stan. Det är ingen halvmesyr – det är ett beslut med konsekvenser varje dag.',
          'I gamla stan innebär det: bagage över kullersten, hetta på sommaren, ljud och fest till sent, och en parkeringsplats minst tio till femton minuter bort. Dessutom något som sällan nämns: de gamla husen i centrum är fuktiga, och mögel är ett vanligt problem där.',
          'La Marina är motsatsen: modernt och lugnt, med egen parkeringsplats och stranden fem minuter nedför gatan. I gengäld börjar historien inte utanför dörren, utan tio till femton minuter senare – längs havet, in i gamla stan underifrån.'
        ],
        archetypes: [
          { title: 'Gamla stan', consequence: 'Historia utanför dörren. I gengäld hetta, ljud, fukt – och parkering långt bort.' },
          { title: 'La Marina', consequence: 'Modernt och lugnt, egen parkeringsplats, strand på fem minuter. Gamla stan ligger en promenad bort.' },
          { title: 'Los Lances-korridoren', consequence: 'Första havslinjen – men oftast betydligt äldre byggnader, där fukt är ett känt problem.' },
          { title: 'Landsbygd & kullar', consequence: 'Campo: absolut lugn och mycket natur – vardagen organiseras då kring bilen.' }
        ],
        link: { label: 'Jämför Tarifas områden på djupet', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Vind & årstider',
        title: 'Vinden avgör vilken strand som fungerar idag',
        paragraphs: [
          'Tarifa präglas av vind, framför allt under för- och lågsäsong. Den som inte kan hantera det blir inte lycklig här. Den som accepterar den får precis den plats Tarifa är känd för.',
          'Vid stark levante fungerar i praktiken bara Valdevaqueros – där finns räddningsbåtarna och där är allt anpassat för det. Den lilla, familjevänliga Playa Chica är då inget bra val.',
          'Sådana dagar spelar det roll hur boendet ligger. Vår balkong vetter mot havet; levanten träffar husets baksida. Bara vid poniente blir det blåsigt även framtill – och poniente förekommer betydligt mer sällan.'
        ],
        link: { label: 'Väder & årstider i Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vardagsliv',
        title: 'Det som upprepas efter tre dagar',
        paragraphs: [
          'Vardagsinköpen sker på Mercadona mittemot, Tarifas största stormarknad. För fisk är Mercado värt ett besök, för frukt och grönt de små garageförsäljningarna i byn. På söndagar har Dia oftast öppet, i juli och augusti även Mercadona.',
          'Restauranger och barer samlas i Gamla stan och längs Calle Batalla del Salado, båda på gångavstånd från La Marina. Vilka adresser som verkligen är värda ett besök står i upplevelseguiden.'
        ]
      },
      winter: {
        eyebrow: 'Från september',
        title: 'Från september är Tarifa en annan plats',
        paragraphs: [
          'Juli och augusti är Tarifa på full volym: fulla stränder, hela byn ute på kvällen, kitescenen som livligast. Det är precis därför många kommer – med rätta. Det enda som verkligen tär de veckorna är att leta parkering. Hos oss uppstår det inte: platsen i garaget är er.',
          'Från september blir det lugnare. Man känner lugnet, man kommer i samtal med de som bor här, man lär känna folk. För oss är det den finaste tiden här.',
          'Under en längre vistelse betyder något annat mer än närheten till stranden: att bostaden är torr, att den blir varm och att det finns en plats att arbeta på. Det är just där många hus i gamla stan inte räcker till.'
        ]
      },
      amara: {
        eyebrow: 'Vår lägenhet',
        title: 'Varför vi tar emot våra gäster i La Marina',
        paragraphs: [
          'Balkongen vetter mot väster. Det betyder: varje kväll faller solen ner i Atlanten framför er. Och när luften är klar ligger Afrika mittemot – inte som en idé på en karta, utan som en kust man ser.',
          'Ovanför ligger sovrummet, med samma utsikt. Ni vaknar med havet. Det gästerna oftast säger vid ankomsten: att lägenheten är ännu vackrare i verkligheten än på bilderna.',
          'Jag bodde själv i Tarifa – kitesurfing, vänner, några månader i taget. När den här lägenheten kom ut till försäljning köpte vi den och renoverade. På grund av kvällarna. Och för att den helt enkelt fungerar i vardagen.',
          'Ärligt talat: den som behöver det historiska Tarifa direkt utanför dörren är fel hos oss. Och poolen tillhör anläggningen, inte lägenheten – öppen ungefär från mitten av maj till mitten av september, beroende på vädret.'
        ],
        facts: [
          '75 m² på två plan – sovrum med havsutsikt',
          'Stor balkong mot väster, helt skyddad vid levante',
          'Reserverad plats i underjordiskt garage, upp till 2,00 m höjd',
          'Playa Los Lances 5 minuters promenad, Mercadona mittemot',
          'Två skrivbord – och torrt på vintern'
        ],
        imageAlt: 'AMARA Family & Surf i La Marina, Tarifa',
        link: { label: 'Visa AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Era dagar här',
        title: 'Och sedan dagarna själva',
        paragraphs: ['Var ni bor är bestämt. Vad ni gör här – stränder, vind, mat, natur, gamla stan och utflykterna till Bolonia eller Tanger – står i upplevelseguiden.'],
        links: [
          { label: 'Upptäck Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Upptäck Tarifas stränder', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'För oss är Tarifa den vackraste platsen på den här planeten.',
        lead: 'Om ni känner igen er i det bor ni bäst där solen faller ner i havet framför er.',
        ctaLabel: 'Visa AMARA Family & Surf'
      }
    }
  }
};
