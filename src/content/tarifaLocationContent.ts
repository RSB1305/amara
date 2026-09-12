import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaLocationHubLinkToken =
  | 'getting_to_tarifa'
  | 'tarifa_where_to_stay'
  | 'tarifa_weather'
  | 'tarifa_experience_hub'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_kitesurfing_hub'
  | 'tarifa_winter_stays'
  | 'tarifa_parking'
  | 'tarifa_daily_life'
  | 'tarifa_old_town_history'
  | 'tarifa_food_evening_life'
  | 'tarifa_whale_watching'
  | 'tarifa_bolonia_baelo_claudia'
  | 'location_nerja'
  | 'tarifa';

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
    subtitle: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  /** Verified figures from knowledge/facts/locations/tarifa/geography.ts with their claim boundary. */
  keyFigures: {
    figures: Array<{ value: string; label: string }>;
    note: string;
  };
  geography: TarifaLocationHubFeature & {
    markers: Array<{ label: string; value: string }>;
    /** Accessible title and caption of the Iberian Peninsula orientation map. */
    mapLabel: string;
    mapNote: string;
  };
  arrival: TarifaLocationHubFeature;
  areas: TarifaLocationHubFeature & {
    archetypes: Array<{ title: string; consequence: string }>;
  };
  weather: TarifaLocationHubFeature;
  dailyLife: TarifaLocationHubFeature;
  winter: TarifaLocationHubFeature;
  /** Trade-offs of Tarifa as a base, with the honest pointer to Nerja where calm beach days matter more. */
  tradeoffs: TarifaLocationHubFeature & {
    axes: Array<{ id: 'beach' | 'evening' | 'season' | 'car'; title: string; tarifa: string; nerja: string }>;
  };
  /** Content corridors with a mini-answer each; the hub opens the destination architecture here. */
  corridors: Array<{ id: string; group: 'stay' | 'explore'; label: string; text: string; token: TarifaLocationHubLinkToken }>;
  amara: TarifaLocationHubFeature & {
    facts: string[];
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
  version: '2026-09-05-tarifa-location-hub-v5.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-03',
    dateModified: '2026-09-05',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Tarifa as a Base: Where to Stay and How to Get Around',
      description: 'Tarifa between the Atlantic and the Strait: Levante and Poniente, Los Lances in front of the balcony, tapas in the old town. Our apartment in La Marina, five minutes to the beach.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Tarifa als Urlaubsort: wohnen, bewegen, vorher wissen',
      description: 'Tarifa zwischen Atlantik und Meerenge: Levante und Poniente, Los Lances vor dem Balkon, Tapas in der Altstadt. Unsere Wohnung in La Marina, fünf Minuten zum Strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Tarifa como base: dónde alojarse y cómo moverse',
      description: 'Tarifa entre el Atlántico y el Estrecho: levante y poniente, Los Lances delante del balcón, tapas en el casco antiguo. Nuestro apartamento en La Marina, a cinco minutos de la playa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Tarifa als vakantiebasis: wonen, bewegen, weten',
      description: 'Tarifa tussen Atlantische Oceaan en Straat: Levante en Poniente, Los Lances voor het balkon, tapas in de oude stad. Ons appartement in La Marina, vijf minuten van het strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Tarifa som semesterbas: bo, röra sig, veta i förväg',
      description: 'Tarifa mellan Atlanten och sundet: Levante och Poniente, Los Lances framför balkongen, tapas i gamla stan. Vår lägenhet i La Marina, fem minuter till stranden.',
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
        eyebrow: 'Tarifa · Costa de la Luz',
        title: 'Tarifa as a place to stay',
        subtitle: 'Atlantic to the west, the Strait to the east, the old town in between',
        standfirst: 'Tarifa is small enough that you reach everything on foot, and lively enough that nobody has to go to bed early. The Levante from the east and the Poniente off the Atlantic shape the day more than the season does. We live in La Marina: five minutes to Los Lances beach, ten to fifteen into the old town, the balcony facing west, where the sun drops into the sea in the evening.',
        note: '',
        updated: 'As of August 2026'
      },
      keyFigures: {
        figures: [
          { value: '33.5 km', label: 'Atlantic coastline of the municipality' },
          { value: '10.5 km', label: 'Mediterranean coastline of the municipality' },
          { value: '14.4 km', label: 'Europe – Africa at the narrowest point' },
          { value: '226 ha', label: 'Playa de los Lances protected area' }
        ],
        note: 'Coastline lengths of the municipality and the distance across the Strait, from the municipality and MITECO.'
      },
      geography: {
        eyebrow: 'Where you are',
        title: 'Two seas, a causeway between them',
        paragraphs: [
          'At the causeway to the Isla de Tarifa the Mediterranean and the Atlantic meet. To the right lies the small Playa Chica on the Mediterranean side; to the left Los Lances begins and runs west for kilometres to Valdevaqueros.',
          'The town itself is compact: old town behind the walls, La Marina on the western edge, between them Calle Batalla del Salado with the first bars. To Valdevaqueros and Bolonia you drive ten minutes along the N-340.'
        ],
        markers: [
          { label: 'Two coasts', value: 'Playa Chica on the Mediterranean, Los Lances on the Atlantic' },
          { label: 'La Marina', value: 'The western edge of town, between old town and beach' },
          { label: 'Further west', value: 'Valdevaqueros, Punta Paloma and Bolonia, by car' }
        ],
        mapLabel: 'Tarifa on the Iberian Peninsula — at the southern tip of Andalusia on the Strait of Gibraltar, where the Atlantic meets the Mediterranean, with a possible round trip via Cádiz, Sevilla, Córdoba, Granada, Málaga and Ronda',
        mapNote: 'A possible round trip from Tarifa: Cádiz, Sevilla, Córdoba, Granada, Málaga, Ronda and back through the hills. The circle enlarges Tarifa on the Strait.'
      },
      arrival: {
        eyebrow: 'Arriving',
        title: 'Along the N-340, and then straight into the garage',
        paragraphs: [
          'From Málaga along the N-340, by coach to Calle Batalla del Salado, by ferry from Tangier into the port.',
          'From Málaga it is around 160 kilometres, about two hours along the western Costa del Sol and through Algeciras. Gibraltar is closer, about an hour including the land border; Jerez a good hour and a half. The coach stops at Calle Batalla del Salado, the ferry from Tangier in the port.',
          'The apartment comes with an underground parking space: drive in, stop looking. In town you walk; you need the car for the western beaches and Bolonia.'
        ],
        link: { label: 'Airports, coach and the garage in detail', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Where you stay',
        title: 'Old town or La Marina',
        paragraphs: [
          'If you want to step out of the front door straight into the lanes in the evening, stay in the old town. If you want to see in the morning whether there is wind on Los Lances, and still walk into town in the evening, you stay with us in La Marina.',
          'Los Lances and the Campo are worlds of their own: on the beach the wind as the programme, in the Campo quiet, space and the car for every journey.',
          'La Marina sits on the newer west/north-west town edge near Los Lances. AMARA Family & Surf has its own underground space and a supermarket opposite; those are property facts, not general La Marina characteristics. The Old Town remains a separate walk rather than the immediate doorstep.'
        ],
        archetypes: [
          { title: 'Old Town', consequence: 'Lanes, tapas and the Castillo outside the door; tight and little parking.' },
          { title: 'La Marina', consequence: 'Between old town and beach, five minutes to Los Lances. This is where AMARA Family & Surf is.' },
          { title: 'Los Lances', consequence: 'The long Atlantic beach, where the wind is the programme.' },
          { title: 'Campo & hills', consequence: 'Fincas with views over the Strait, everything by car.' }
        ],
        link: { label: 'Compare Tarifa’s areas in depth', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seasons',
        title: 'In Tarifa you do not ask about the sun, but about the wind',
        paragraphs: [
          'The Levante comes from the east, warm and strong, and sets the sand moving on Los Lances; then Playa Chica on the Mediterranean side is the beach for swimming. The Poniente comes off the Atlantic, steadier, and brings the waves: the wind we go out on the water in ourselves.',
          'In summer the wind keeps the heat in check; the records barely exceed 37 degrees. In winter it stays mild, around 14 to 15 degrees, and windy enough for kiting.',
          'At accommodation level, orientation and building context affect exposure. We do not promise shelter for La Marina or AMARA Family & Surf without site-specific evidence for the actual conditions.'
        ],
        link: { label: 'Levante, Poniente and the monthly values for your dates', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Daily life',
        title: 'What repeats after three days',
        paragraphs: [
          'Mercadona opposite, bread at Pastelito or Bernal, the pharmacy in the same street.',
          'In the evening Calle Batalla del Salado and the lanes of the old town, both on foot from La Marina.'
        ]
      },
      winter: {
        eyebrow: 'From September',
        title: 'From September Tarifa belongs again to the people who live here',
        paragraphs: [
          'In July and August the town is full and parking is a chore; we then drive to Valdevaqueros to kite and into the garage to park.',
          'From September it gets quiet. You meet the same faces in the supermarket, get talking with locals, and the club runs its kite camps. For us this is the loveliest time here.',
          'For longer stays the apartment has a fireplace, heating, a kitchen and a washing machine.'
        ]
      },
      tradeoffs: {
        eyebrow: 'WHO TARIFA SUITS',
        title: 'Wind as the programme or calm beach days',
        paragraphs: [
          'On Los Lances the wind sets the day: with the Levante the sand flies, so you swim on the Mediterranean side at Playa Chica or drive to Bolonia. In July and August the town is full and parking a chore; from September Tarifa belongs to the people who live here again.',
          'If you are looking for calm beach days, a town without a summer rush or a Balcón instead of a strait, Nerja on the Costa del Sol is the better base: AMARA Playa there is 200 metres from the beach, and the day does not depend on the wind.'
        ],
        axes: [
          { id: 'beach', title: 'Beach day', tarifa: 'The wind decides: Los Lances with the Poniente, Playa Chica with the Levante', nerja: 'Town beaches and coves, before breakfast' },
          { id: 'evening', title: 'Evenings', tarifa: 'Old-town lanes and Calle Batalla del Salado, kiters at the bar', nerja: 'The Balcón, the promenade, tapas in the lanes' },
          { id: 'season', title: 'Season', tarifa: 'July and August full, quiet from September; kite camps in autumn', nerja: 'Lively in summer; promenade, cave and museum in winter' },
          { id: 'car', title: 'Car', tarifa: 'On foot in town; a car for the western beaches and Bolonia, a garage space at the apartment', nerja: 'Bus straight from the airport, unnecessary in the centre' }
        ],
        link: { label: 'See Nerja as the alternative base', token: 'location_nerja' }
      },
      corridors: [
        { id: 'winter', group: 'stay', label: 'From September', text: 'Quiet, kite camps at the club, the same faces in the supermarket; fireplace and heating in the apartment.', token: 'tarifa_winter_stays' },
        { id: 'parking', group: 'stay', label: 'Parking', text: 'The old town is residents-only from 13:30; the apartment comes with an underground garage space.', token: 'tarifa_parking' },
        { id: 'dailyLife', group: 'stay', label: 'Everyday life', text: 'Supermarket opposite, bakery and pharmacy in the same street; Calle Batalla del Salado on foot in the evening.', token: 'tarifa_daily_life' },
        { id: 'weather', group: 'stay', label: 'Wind and weather', text: 'The Levante warm and strong from the east, the Poniente steady off the Atlantic; monthly values for your dates.', token: 'tarifa_weather' },
        { id: 'beaches', group: 'explore', label: 'Beach and coast', text: 'Swim close to town or watch the kiters further west; which beach suits today depends on the wind.', token: 'tarifa_beaches_authority' },
        { id: 'kite', group: 'explore', label: 'Wind and kitesurfing', text: 'Afternoon wind on Los Lances, Valdevaqueros in high season; beginners through the Tarifa Surf Club.', token: 'tarifa_kitesurfing_hub' },
        { id: 'oldTown', group: 'explore', label: 'Old town and history', text: 'Through the Puerta de Jerez into the walled core, the Castillo as the anchor, the Strait at your back.', token: 'tarifa_old_town_history' },
        { id: 'food', group: 'explore', label: 'Food and evenings', text: 'Red tuna from the almadraba tradition, later Calle Batalla del Salado and the lanes of the old town.', token: 'tarifa_food_evening_life' },
        { id: 'whales', group: 'explore', label: 'Whales in the Strait', text: 'A boat trip to whales and dolphins from the harbour, flexible around sea state and season.', token: 'tarifa_whale_watching' },
        { id: 'bolonia', group: 'explore', label: 'Bolonia and Baelo Claudia', text: 'Open coast, the dune and the Roman town: a whole day, never a stopover.', token: 'tarifa_bolonia_baelo_claudia' }
      ],
      amara: {
        eyebrow: 'Our apartment',
        title: 'Why we live in La Marina',
        paragraphs: [
          'The balcony faces west over the Atlantic; in the evening the sun goes down into the sea there. Above it is the bedroom with the same view: you wake up with the sea, and when there is wind, you see it in the kites over Los Lances.',
          'Robert has lived here for months at a time, again and again, to kitesurf and to be with friends. When the apartment came up for sale, we bought it and modernised it. Because of the evenings, and because it simply works day to day: 75 square metres on two floors, two bedrooms, two bathrooms, underground garage for car and boards, the supermarket opposite.',
          'The pool belongs to the complex and is open in summer. If you want the Castillo outside the door, you are better off in the old town; if you want to see the beach, with us.',
          'One thing worth saying plainly: if you want historic Tarifa right outside your door, the Old Town will suit you better than we do. The pool belongs to the complex rather than the apartment and operates seasonally; check the current opening period before booking.'
        ],
        facts: [
          '75 m² on two levels, bedroom with sea view',
          'West-facing balcony over the Atlantic',
          'Underground parking space for car and boards',
          'Supermarket opposite, Los Lances five minutes on foot',
          'Old town ten to fifteen minutes on foot'
        ],
        link: { label: 'View AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Your days here',
        title: 'Beach, wind, old town and a day in Bolonia',
        paragraphs: ['Bolonia with the Roman town of Baelo Claudia fills a whole day; in migration season the birds cross the Strait above you, and in the evening you sit in the lanes.'],
        links: [
          { label: 'See how many nights suit which days in Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Choose the beach by wind: Los Lances or Playa Chica', token: 'tarifa_beaches_authority' },
          { label: 'Wind, spots and lessons for beginners', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'For us, Tarifa is the most beautiful place we know.',
        lead: 'Because of the evenings: the sun drops into the sea in front of the balcony, and the old town is ten to fifteen minutes on foot.',
        ctaLabel: 'View AMARA Family & Surf'
      }
    },
    de: {
      hero: {
        eyebrow: 'Tarifa · Costa de la Luz',
        title: 'Tarifa als Urlaubsort',
        subtitle: 'Atlantik im Westen, Meerenge im Osten, die Altstadt dazwischen',
        standfirst: 'Tarifa ist klein genug, dass ihr alles zu Fuß erreicht, und lebendig genug, dass keiner früh ins Bett muss. Der Levante aus Osten und der Poniente vom Atlantik bestimmen den Tag mehr als die Jahreszeit. Wir wohnen in La Marina: fünf Minuten zum Strand von Los Lances, zehn bis fünfzehn in die Altstadt, der Balkon nach Westen, wo abends die Sonne ins Meer fällt.',
        note: '',
        updated: 'Stand August 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Atlantikküste der Gemeinde' },
          { value: '10,5 km', label: 'Mittelmeerküste der Gemeinde' },
          { value: '14,4 km', label: 'Europa – Afrika an der engsten Stelle' },
          { value: '226 ha', label: 'Naturschutzgebiet Playa de los Lances' }
        ],
        note: 'Küstenlängen der Gemeinde und der Abstand über die Meerenge, nach Gemeinde und MITECO.'
      },
      geography: {
        eyebrow: 'Wo ihr seid',
        title: 'Zwei Meere, ein Damm dazwischen',
        paragraphs: [
          'Am Damm zur Isla de Tarifa treffen sich Mittelmeer und Atlantik. Rechts davon liegt die kleine Playa Chica auf der Mittelmeerseite, links beginnt Los Lances und zieht sich kilometerlang nach Westen bis Valdevaqueros.',
          'Der Ort selbst ist kompakt: Altstadt hinter den Mauern, La Marina am westlichen Rand, dazwischen die Calle Batalla del Salado mit den ersten Bars. Nach Valdevaqueros und Bolonia fahrt ihr zehn Minuten über die N-340.'
        ],
        markers: [
          { label: 'Zwei Küsten', value: 'Playa Chica am Mittelmeer, Los Lances am Atlantik' },
          { label: 'La Marina', value: 'Der westliche Ortsrand, zwischen Altstadt und Strand' },
          { label: 'Weiter westlich', value: 'Valdevaqueros, Punta Paloma und Bolonia, mit dem Auto' }
        ],
        mapLabel: 'Tarifa auf der Iberischen Halbinsel — an der Südspitze Andalusiens an der Straße von Gibraltar, wo Atlantik und Mittelmeer zusammentreffen, mit einer möglichen Rundreise über Cádiz, Sevilla, Córdoba, Granada, Málaga und Ronda',
        mapNote: 'Eine mögliche Rundreise ab Tarifa: Cádiz, Sevilla, Córdoba, Granada, Málaga, Ronda und zurück durch die Berge. Der Kreis zeigt Tarifa an der Meerenge vergrößert.'
      },
      arrival: {
        eyebrow: 'Ankommen',
        title: 'Über die N-340, und dann direkt in die Garage',
        paragraphs: [
          'Von Málaga über die N-340, mit dem Fernbus bis zur Calle Batalla del Salado, mit der Fähre aus Tanger in den Hafen.',
          'Von Málaga sind es rund 160 Kilometer, etwa zwei Stunden über die westliche Costa del Sol und durch Algeciras. Gibraltar liegt näher, mit Landgrenze etwa eine Stunde; Jerez gut eineinhalb Stunden. Der Fernbus hält an der Calle Batalla del Salado, die Fähre aus Tanger im Hafen.',
          'Zur Wohnung gehört ein Tiefgaragenplatz: hineinfahren, aufhören zu suchen. Im Ort geht ihr zu Fuß, das Auto braucht ihr für die westlichen Strände und Bolonia.'
        ],
        link: { label: 'Flughäfen, Fernbus und die Garage im Detail', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Wo ihr wohnt',
        title: 'Altstadt oder La Marina',
        paragraphs: [
          'Wenn ihr abends aus der Haustür direkt in die Gassen wollt, wohnt in der Altstadt. Wenn ihr morgens sehen wollt, ob auf Los Lances Wind steht, und abends trotzdem zu Fuß in die Stadt gehen, wohnt ihr bei uns in La Marina.',
          'Los Lances und das Campo sind eigene Welten: am Strand der Wind als Programm, im Campo Ruhe, Weite und das Auto für jeden Weg.'
        ],
        archetypes: [
          { title: 'Altstadt', consequence: 'Gassen, Tapas und das Castillo vor der Tür; eng und wenig Parkraum.' },
          { title: 'La Marina', consequence: 'Zwischen Altstadt und Strand, fünf Minuten zu Los Lances. Hier liegt AMARA Family & Surf.' },
          { title: 'Los Lances', consequence: 'Der lange Atlantikstrand, wo der Wind das Programm ist.' },
          { title: 'Campo & Hügel', consequence: 'Fincas mit Blick über die Meerenge, alles mit dem Auto.' }
        ],
        link: { label: 'Tarifas Lagen im Detail vergleichen', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & Jahreszeiten',
        title: 'In Tarifa fragt man nicht nach der Sonne, sondern nach dem Wind',
        paragraphs: [
          'Der Levante kommt aus Osten, warm und kräftig, und legt an Los Lances den Sand in Bewegung; dann ist die Playa Chica auf der Mittelmeerseite der Strand zum Baden. Der Poniente kommt vom Atlantik, gleichmäßiger, und bringt die Welle: der Wind, an dem wir selbst aufs Wasser gehen.',
          'Im Sommer hält der Wind die Hitze in Schach, die Rekorde liegen kaum über 37 Grad. Im Winter bleibt es mild, um 14 bis 15 Grad, und windig genug fürs Kiten.'
        ],
        link: { label: 'Levante, Poniente und die Monatswerte für eure Reisezeit', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Alltag',
        title: 'Was sich nach drei Tagen wiederholt',
        paragraphs: [
          'Mercadona gegenüber, Brot bei Pastelito oder Bernal, die Apotheke in derselben Straße.',
          'Abends die Calle Batalla del Salado und die Gassen der Altstadt, beides von La Marina aus zu Fuß.'
        ]
      },
      winter: {
        eyebrow: 'Ab September',
        title: 'Ab September gehört Tarifa wieder den Leuten, die hier leben',
        paragraphs: [
          'Im Juli und August ist der Ort voll und Parken mühsam; wir fahren dann nach Valdevaqueros zum Kiten und in die Garage zum Parken.',
          'Ab September wird es ruhig. Man trifft dieselben Gesichter im Supermarkt, kommt mit Einheimischen ins Gespräch, und der Club fährt seine Kitecamps. Für uns ist das die schönste Zeit hier.',
          'Für längere Aufenthalte hat die Wohnung Kamin, Heizung, Küche und Waschmaschine.'
        ]
      },
      tradeoffs: {
        eyebrow: 'FÜR WEN TARIFA PASST',
        title: 'Wind als Programm oder windstille Badetage',
        paragraphs: [
          'An Los Lances bestimmt der Wind den Tag: Bei Levante fliegt der Sand, dann badet ihr auf der Mittelmeerseite an der Playa Chica oder fahrt nach Bolonia. Im Juli und August ist der Ort voll und Parken mühsam; ab September gehört Tarifa wieder den Leuten, die hier leben.',
          'Wer windstille Strandtage sucht, einen Ort ohne Sommerbetrieb oder einen Balcón statt einer Meerenge, wohnt besser in Nerja an der Costa del Sol: AMARA Playa liegt dort 200 Meter vom Strand, und der Tag hängt nicht vom Wind ab.'
        ],
        axes: [
          { id: 'beach', title: 'Strandtag', tarifa: 'Der Wind entscheidet: Los Lances bei Poniente, Playa Chica bei Levante', nerja: 'Stadtstrände und Buchten, vor dem Frühstück' },
          { id: 'evening', title: 'Abende', tarifa: 'Altstadtgassen und die Calle Batalla del Salado, Kiter an der Bar', nerja: 'Balcón, Promenade, Tapas in den Gassen' },
          { id: 'season', title: 'Saison', tarifa: 'Juli und August voll, ab September ruhig; Kitecamps im Herbst', nerja: 'Sommer lebhaft; Promenade, Höhle und Museum im Winter' },
          { id: 'car', title: 'Auto', tarifa: 'Im Ort zu Fuß; Auto für die westlichen Strände und Bolonia, Tiefgaragenplatz zur Wohnung', nerja: 'Bus direkt vom Flughafen, im Zentrum verzichtbar' }
        ],
        link: { label: 'Nerja als andere Base ansehen', token: 'location_nerja' }
      },
      corridors: [
        { id: 'winter', group: 'stay', label: 'Ab September', text: 'Ruhig, Kitecamps im Club, dieselben Gesichter im Supermarkt; Kamin und Heizung in der Wohnung.', token: 'tarifa_winter_stays' },
        { id: 'parking', group: 'stay', label: 'Parken', text: 'Altstadt ab 13:30 nur für Anwohner und Berechtigte; zur Wohnung gehört ein Tiefgaragenplatz.', token: 'tarifa_parking' },
        { id: 'dailyLife', group: 'stay', label: 'Alltag', text: 'Supermarkt gegenüber, Bäckerei und Apotheke in derselben Straße; abends die Calle Batalla del Salado zu Fuß.', token: 'tarifa_daily_life' },
        { id: 'weather', group: 'stay', label: 'Wind und Wetter', text: 'Levante warm und kräftig aus Osten, Poniente gleichmäßig vom Atlantik; Monatswerte für eure Reisezeit.', token: 'tarifa_weather' },
        { id: 'beaches', group: 'explore', label: 'Strand und Küste', text: 'Nah am Ort baden oder weiter westlich den Kitern zuschauen; welcher Strand passt, entscheidet der Wind.', token: 'tarifa_beaches_authority' },
        { id: 'kite', group: 'explore', label: 'Wind und Kitesurfen', text: 'Nachmittagswind an Los Lances, Valdevaqueros in der Hauptsaison; Anfänger über den Tarifa Surf Club.', token: 'tarifa_kitesurfing_hub' },
        { id: 'oldTown', group: 'explore', label: 'Altstadt und Geschichte', text: 'Durch die Puerta de Jerez in den ummauerten Kern, das Castillo als Ankerpunkt, die Meerenge im Rücken.', token: 'tarifa_old_town_history' },
        { id: 'food', group: 'explore', label: 'Essen und Ausgehen', text: 'Roter Thunfisch aus der Almadraba-Tradition, später die Calle Batalla del Salado und die Gassen der Altstadt.', token: 'tarifa_food_evening_life' },
        { id: 'whales', group: 'explore', label: 'Wale in der Meerenge', text: 'Ausfahrt zu Walen und Delfinen ab Hafen, flexibel um Seegang und Saison.', token: 'tarifa_whale_watching' },
        { id: 'bolonia', group: 'explore', label: 'Bolonia und Baelo Claudia', text: 'Offene Küste, Düne und die Römerstadt: ein ganzer Tag, kein Zwischenstopp.', token: 'tarifa_bolonia_baelo_claudia' }
      ],
      amara: {
        eyebrow: 'Unsere Wohnung',
        title: 'Warum wir in La Marina wohnen',
        paragraphs: [
          'Der Balkon zeigt nach Westen über den Atlantik, abends geht dort die Sonne ins Meer. Darüber liegt das Schlafzimmer mit demselben Blick: Ihr wacht mit dem Meer auf, und wenn Wind steht, seht ihr es an den Kites über Los Lances.',
          'Robert hat hier immer wieder monatelang gelebt, zum Kitesurfen und mit Freunden. Als die Wohnung zum Verkauf stand, haben wir sie gekauft und modernisiert. Wegen der Abende, und weil sie im Alltag einfach funktioniert: 75 Quadratmeter auf zwei Etagen, zwei Schlafzimmer, zwei Bäder, Tiefgarage für Auto und Boards, der Supermarkt gegenüber.',
          'Der Pool gehört zur Anlage und ist im Sommer geöffnet. Wer das Castillo vor der Tür haben will, wohnt besser in der Altstadt; wer den Strand sehen will, bei uns.'
        ],
        facts: [
          '75 m² auf zwei Ebenen, Schlafzimmer mit Meerblick',
          'Westbalkon über dem Atlantik',
          'Tiefgaragenplatz für Auto und Boards',
          'Supermarkt gegenüber, Los Lances fünf Minuten zu Fuß',
          'Altstadt zehn bis fünfzehn Minuten zu Fuß'
        ],
        link: { label: 'AMARA Family & Surf ansehen', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Eure Tage hier',
        title: 'Strand, Wind, Altstadt und ein Tag in Bolonia',
        paragraphs: ['Bolonia mit der Römerstadt Baelo Claudia füllt einen ganzen Tag; zur Zugzeit ziehen die Vögel über die Meerenge, und abends sitzt ihr in den Gassen.'],
        links: [
          { label: 'Sehen, wie viele Nächte zu welchen Tagen in Tarifa passen', token: 'tarifa_experience_hub' },
          { label: 'Den Strand nach Wind wählen: Los Lances oder Playa Chica', token: 'tarifa_beaches_authority' },
          { label: 'Wind, Spots und Kurse für Anfänger', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'Tarifa ist für uns der schönste Ort, den wir kennen.',
        lead: 'Wegen der Abende: Die Sonne fällt vor dem Balkon ins Meer, und die Altstadt liegt zehn bis fünfzehn Minuten zu Fuß entfernt.',
        ctaLabel: 'AMARA Family & Surf ansehen'
      }
    },
    es: {
      hero: {
        eyebrow: 'Tarifa · Costa de la Luz',
        title: 'Tarifa como base de vacaciones',
        subtitle: 'Atlántico al oeste, Estrecho al este, el casco antiguo en medio',
        standfirst: 'Tarifa es lo bastante pequeña para llegar a todo a pie, y lo bastante viva para que nadie tenga que irse pronto a la cama. El levante del este y el poniente del Atlántico marcan el día más que la estación. Nosotros estamos en La Marina: cinco minutos a la playa de Los Lances, diez o quince al casco antiguo, el balcón hacia el oeste, donde por la tarde el sol cae al mar.',
        note: '',
        updated: 'Actualizado en agosto de 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Costa atlántica del municipio' },
          { value: '10,5 km', label: 'Costa mediterránea del municipio' },
          { value: '14,4 km', label: 'Europa – África en el punto más estrecho' },
          { value: '226 ha', label: 'Paraje protegido Playa de los Lances' }
        ],
        note: 'Longitudes de costa del municipio y distancia a través del Estrecho, según el ayuntamiento y el MITECO.'
      },
      geography: {
        eyebrow: 'Dónde estáis',
        title: 'Dos mares, un dique en medio',
        paragraphs: [
          'En el dique de la Isla de Tarifa se encuentran el Mediterráneo y el Atlántico. A la derecha queda la pequeña Playa Chica, del lado mediterráneo; a la izquierda empieza Los Lances y se extiende kilómetros hacia el oeste hasta Valdevaqueros.',
          'El pueblo es compacto: casco antiguo tras las murallas, La Marina en el borde oeste, en medio la calle Batalla del Salado con los primeros bares. A Valdevaqueros y Bolonia vais diez minutos por la N-340.'
        ],
        markers: [
          { label: 'Dos costas', value: 'Playa Chica en el Mediterráneo, Los Lances en el Atlántico' },
          { label: 'La Marina', value: 'El borde oeste del pueblo, entre el casco antiguo y la playa' },
          { label: 'Más al oeste', value: 'Valdevaqueros, Punta Paloma y Bolonia, en coche' }
        ],
        mapLabel: 'Tarifa en la península ibérica — en el extremo sur de Andalucía, junto al estrecho de Gibraltar, donde se encuentran el Atlántico y el Mediterráneo, con una posible ruta por Cádiz, Sevilla, Córdoba, Granada, Málaga y Ronda',
        mapNote: 'Una posible ruta desde Tarifa: Cádiz, Sevilla, Córdoba, Granada, Málaga, Ronda y vuelta por la sierra. El círculo amplía Tarifa junto al estrecho.'
      },
      arrival: {
        eyebrow: 'Llegar',
        title: 'Por la N-340, y luego directo al garaje',
        paragraphs: [
          'Desde Málaga por la N-340, en autobús hasta la calle Batalla del Salado, en ferry desde Tánger al puerto.',
          'Desde Málaga son unos 160 kilómetros, alrededor de dos horas por la Costa del Sol occidental y a través de Algeciras. Gibraltar está más cerca, alrededor de una hora con la frontera terrestre; Jerez, una hora y media larga. El autobús para en la calle Batalla del Salado, el ferry de Tánger en el puerto.',
          'El apartamento incluye plaza en el garaje subterráneo: entrar y dejar de buscar. En el pueblo vais a pie; el coche lo necesitáis para las playas del oeste y Bolonia.'
        ],
        link: { label: 'Aeropuertos, autobús y el garaje en detalle', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Dónde os alojáis',
        title: 'Casco antiguo o La Marina',
        paragraphs: [
          'Si por la noche queréis salir de casa directamente a las callejuelas, alojaos en el casco antiguo. Si por la mañana queréis ver si hay viento en Los Lances, y por la noche ir igualmente a pie al pueblo, os alojáis con nosotros en La Marina.',
          'Los Lances y el campo son mundos propios: en la playa el viento como programa, en el campo tranquilidad, amplitud y el coche para cada trayecto.',
          'La Marina queda en el borde urbano más nuevo, al oeste o noroeste, cerca de Los Lances. AMARA Family & Surf tiene plaza subterránea propia y un supermercado enfrente. Son características de ese alojamiento, no de toda La Marina. El casco antiguo sigue siendo un paseo separado y no queda justo a la puerta.'
        ],
        archetypes: [
          { title: 'Casco Antiguo', consequence: 'Callejuelas, tapas y el castillo en la puerta; estrecho y poco aparcamiento.' },
          { title: 'La Marina', consequence: 'Entre casco antiguo y playa, a cinco minutos de Los Lances. Aquí está AMARA Family & Surf.' },
          { title: 'Los Lances', consequence: 'La larga playa atlántica, donde el viento es el programa.' },
          { title: 'Campo y colinas', consequence: 'Fincas con vistas al Estrecho, todo en coche.' }
        ],
        link: { label: 'Comparar en detalle las zonas de Tarifa', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Viento y estaciones',
        title: 'En Tarifa no se pregunta por el sol, sino por el viento',
        paragraphs: [
          'El levante viene del este, cálido y fuerte, y pone en movimiento la arena de Los Lances; entonces la Playa Chica, del lado mediterráneo, es la playa para bañarse. El poniente viene del Atlántico, más regular, y trae la ola: el viento con el que salimos al agua nosotros mismos.',
          'En verano el viento mantiene a raya el calor; los récords apenas pasan de 37 grados. En invierno sigue templado, entre 14 y 15 grados, y con viento suficiente para el kite.',
          'En un alojamiento, la orientación y el edificio cambian la exposición. Sin pruebas específicas del lugar y de las condiciones, no prometemos resguardo ni para La Marina ni para AMARA Family & Surf.'
        ],
        link: { label: 'Levante, poniente y los valores mensuales para vuestras fechas', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vida diaria',
        title: 'Lo que se repite a partir del tercer día',
        paragraphs: [
          'Mercadona enfrente, pan en Pastelito o Bernal, la farmacia en la misma calle.',
          'Por la noche la calle Batalla del Salado y las callejuelas del casco antiguo, ambas a pie desde La Marina.'
        ]
      },
      winter: {
        eyebrow: 'A partir de septiembre',
        title: 'A partir de septiembre Tarifa vuelve a ser de la gente que vive aquí',
        paragraphs: [
          'En julio y agosto el pueblo está lleno y aparcar es un fastidio; entonces vamos a Valdevaqueros a hacer kite y al garaje a aparcar.',
          'A partir de septiembre llega la calma. Se ven las mismas caras en el supermercado, se habla con la gente de aquí, y el club hace sus kitecamps. Para nosotros es la época más bonita.',
          'Para estancias largas el apartamento tiene chimenea, calefacción, cocina y lavadora.'
        ]
      },
      tradeoffs: {
        eyebrow: 'PARA QUIÉN ES TARIFA',
        title: 'El viento como plan o días de playa en calma',
        paragraphs: [
          'En Los Lances el viento marca el día: con levante vuela la arena, así que os bañáis en el lado mediterráneo, en la Playa Chica, o vais a Bolonia. En julio y agosto el pueblo está lleno y aparcar cuesta; desde septiembre Tarifa vuelve a ser de quienes viven aquí.',
          'Si buscáis días de playa sin viento, un pueblo sin agobio veraniego o un Balcón en vez de un estrecho, Nerja, en la Costa del Sol, es la mejor base: allí AMARA Playa está a 200 metros de la playa y el día no depende del viento.'
        ],
        axes: [
          { id: 'beach', title: 'Día de playa', tarifa: 'Decide el viento: Los Lances con poniente, Playa Chica con levante', nerja: 'Playas urbanas y calas, antes de desayunar' },
          { id: 'evening', title: 'Noches', tarifa: 'Las calles del casco antiguo y la Calle Batalla del Salado, kitesurfistas en la barra', nerja: 'El Balcón, el paseo, tapas por las calles' },
          { id: 'season', title: 'Temporada', tarifa: 'Julio y agosto llenos, tranquilo desde septiembre; kitecamps en otoño', nerja: 'Animado en verano; paseo, cueva y museo en invierno' },
          { id: 'car', title: 'Coche', tarifa: 'A pie en el pueblo; coche para las playas del oeste y Bolonia, plaza de garaje en el apartamento', nerja: 'Autobús directo desde el aeropuerto, innecesario en el centro' }
        ],
        link: { label: 'Ver Nerja como base alternativa', token: 'location_nerja' }
      },
      corridors: [
        { id: 'winter', group: 'stay', label: 'Desde septiembre', text: 'Tranquilo, kitecamps en el club, las mismas caras en el supermercado; chimenea y calefacción en el apartamento.', token: 'tarifa_winter_stays' },
        { id: 'parking', group: 'stay', label: 'Aparcar', text: 'El casco antiguo es solo para residentes y autorizados desde las 13:30; el apartamento incluye plaza de garaje.', token: 'tarifa_parking' },
        { id: 'dailyLife', group: 'stay', label: 'Día a día', text: 'Supermercado enfrente, panadería y farmacia en la misma calle; por la noche la Calle Batalla del Salado a pie.', token: 'tarifa_daily_life' },
        { id: 'weather', group: 'stay', label: 'Viento y tiempo', text: 'Levante cálido y fuerte del este, poniente constante del Atlántico; valores mensuales para vuestras fechas.', token: 'tarifa_weather' },
        { id: 'beaches', group: 'explore', label: 'Playa y costa', text: 'Bañarse cerca del pueblo o ver a los kitesurfistas más al oeste; qué playa toca hoy lo decide el viento.', token: 'tarifa_beaches_authority' },
        { id: 'kite', group: 'explore', label: 'Viento y kitesurf', text: 'Viento de tarde en Los Lances, Valdevaqueros en temporada alta; principiantes con el Tarifa Surf Club.', token: 'tarifa_kitesurfing_hub' },
        { id: 'oldTown', group: 'explore', label: 'Casco antiguo e historia', text: 'Por la Puerta de Jerez al recinto amurallado, el Castillo como referencia, el Estrecho a la espalda.', token: 'tarifa_old_town_history' },
        { id: 'food', group: 'explore', label: 'Comer y salir', text: 'Atún rojo de la tradición de almadraba, después la Calle Batalla del Salado y las calles del casco antiguo.', token: 'tarifa_food_evening_life' },
        { id: 'whales', group: 'explore', label: 'Ballenas en el Estrecho', text: 'Salida a ver ballenas y delfines desde el puerto, flexible según el estado del mar y la temporada.', token: 'tarifa_whale_watching' },
        { id: 'bolonia', group: 'explore', label: 'Bolonia y Baelo Claudia', text: 'Costa abierta, la duna y la ciudad romana: un día entero, nunca una parada de paso.', token: 'tarifa_bolonia_baelo_claudia' }
      ],
      amara: {
        eyebrow: 'Nuestro apartamento',
        title: 'Por qué vivimos en La Marina',
        paragraphs: [
          'El balcón mira al oeste, sobre el Atlántico; por la tarde el sol se pone allí en el mar. Encima está el dormitorio con la misma vista: os despertáis con el mar, y cuando hay viento lo veis en las cometas sobre Los Lances.',
          'Robert ha vivido aquí una y otra vez durante meses, para hacer kitesurf y con amigos. Cuando el apartamento salió a la venta, lo compramos y lo modernizamos. Por las tardes, y porque en el día a día simplemente funciona: 75 metros cuadrados en dos plantas, dos dormitorios, dos baños, garaje para el coche y las tablas, el supermercado enfrente.',
          'La piscina es de la urbanización y abre en verano. Quien quiera el castillo en la puerta, mejor en el casco antiguo; quien quiera ver la playa, con nosotros.',
          'Lo decimos con claridad: si queréis la Tarifa histórica justo en la puerta, el casco antiguo os encajará mejor que nosotros. La piscina pertenece a la comunidad, no al apartamento, y funciona por temporada; comprobad el periodo actual antes de reservar.'
        ],
        facts: [
          '75 m² en dos niveles, dormitorio con vistas al mar',
          'Balcón al oeste sobre el Atlántico',
          'Plaza de garaje para coche y tablas',
          'Supermercado enfrente, Los Lances a cinco minutos a pie',
          'Casco antiguo a diez o quince minutos a pie'
        ],
        link: { label: 'Ver AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Vuestros días aquí',
        title: 'Playa, viento, casco antiguo y un día en Bolonia',
        paragraphs: ['Bolonia con la ciudad romana de Baelo Claudia llena un día entero; en época de paso las aves cruzan el Estrecho sobre vosotros, y por la noche os sentáis en las calles.'],
        links: [
          { label: 'Ver cuántas noches encajan con qué días en Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Elegir la playa según el viento: Los Lances o Playa Chica', token: 'tarifa_beaches_authority' },
          { label: 'Viento, spots y cursos para principiantes', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'Para nosotros, Tarifa es el lugar más bonito que conocemos.',
        lead: 'Por las noches: el sol cae al mar delante del balcón, y el casco antiguo está a diez o quince minutos a pie.',
        ctaLabel: 'Ver AMARA Family & Surf'
      }
    },
    nl: {
      hero: {
        eyebrow: 'Tarifa · Costa de la Luz',
        title: 'Tarifa als vakantiebasis',
        subtitle: 'Atlantische Oceaan in het westen, Straat in het oosten, de oude stad ertussen',
        standfirst: 'Tarifa is klein genoeg om alles te voet te bereiken, en levendig genoeg dat niemand vroeg naar bed hoeft. De Levante uit het oosten en de Poniente vanaf de Atlantische Oceaan bepalen de dag meer dan het seizoen. Wij wonen in La Marina: vijf minuten naar het strand van Los Lances, tien tot vijftien naar de oude stad, het balkon op het westen, waar ’s avonds de zon in zee valt.',
        note: '',
        updated: 'Stand augustus 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Atlantische kust van de gemeente' },
          { value: '10,5 km', label: 'Middellandse Zeekust van de gemeente' },
          { value: '14,4 km', label: 'Europa – Afrika op het smalste punt' },
          { value: '226 ha', label: 'Beschermd natuurgebied Playa de los Lances' }
        ],
        note: 'Kustlengtes van de gemeente en de afstand over de Straat, volgens gemeente en MITECO.'
      },
      geography: {
        eyebrow: 'Waar jullie zijn',
        title: 'Twee zeeën, een dam ertussen',
        paragraphs: [
          'Bij de dam naar de Isla de Tarifa komen Middellandse Zee en Atlantische Oceaan samen. Rechts ervan ligt de kleine Playa Chica aan de Middellandse Zee-kant, links begint Los Lances en trekt zich kilometers naar het westen tot Valdevaqueros.',
          'De plaats zelf is compact: oude stad achter de muren, La Marina aan de westrand, ertussen de Calle Batalla del Salado met de eerste bars. Naar Valdevaqueros en Bolonia rijd je tien minuten over de N-340.'
        ],
        markers: [
          { label: 'Twee kusten', value: 'Playa Chica aan de Middellandse Zee, Los Lances aan de Atlantische Oceaan' },
          { label: 'La Marina', value: 'De westelijke rand van de plaats, tussen oude stad en strand' },
          { label: 'Verder westelijk', value: 'Valdevaqueros, Punta Paloma en Bolonia, met de auto' }
        ],
        mapLabel: 'Tarifa op het Iberisch Schiereiland — op de zuidpunt van Andalusië aan de Straat van Gibraltar, waar de Atlantische Oceaan en de Middellandse Zee elkaar ontmoeten, met een mogelijke rondreis via Cádiz, Sevilla, Córdoba, Granada, Málaga en Ronda',
        mapNote: 'Een mogelijke rondreis vanuit Tarifa: Cádiz, Sevilla, Córdoba, Granada, Málaga, Ronda en terug door de bergen. De cirkel vergroot Tarifa aan de zeestraat.'
      },
      arrival: {
        eyebrow: 'Aankomen',
        title: 'Over de N-340, en dan direct de garage in',
        paragraphs: [
          'Vanuit Málaga over de N-340, met de streekbus tot de Calle Batalla del Salado, met de veerboot uit Tanger de haven in.',
          'Vanuit Málaga is het zo’n 160 kilometer, ongeveer twee uur over de westelijke Costa del Sol en door Algeciras. Gibraltar ligt dichterbij, ongeveer een uur inclusief de landgrens; Jerez ruim anderhalf uur. De streekbus stopt aan de Calle Batalla del Salado, de veerboot uit Tanger in de haven.',
          'Bij het appartement hoort een plek in de ondergrondse garage: naar binnen rijden, klaar met zoeken. In de plaats loop je, de auto heb je nodig voor de westelijke stranden en Bolonia.'
        ],
        link: { label: 'Luchthavens, bus en de garage in detail', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Waar jullie wonen',
        title: 'Oude stad of La Marina',
        paragraphs: [
          'Wil je ’s avonds vanuit de voordeur direct de steegjes in, dan woon je in de oude stad. Wil je ’s ochtends zien of er wind staat op Los Lances, en ’s avonds toch te voet de stad in, dan woon je bij ons in La Marina.',
          'Los Lances en het Campo zijn eigen werelden: op het strand de wind als programma, in het Campo rust, ruimte en de auto voor elke weg.',
          'La Marina ligt aan de nieuwere westelijke tot noordwestelijke stadsrand bij Los Lances. AMARA Family & Surf heeft een eigen ondergrondse parkeerplaats en een supermarkt aan de overkant. Dat zijn eigenschappen van deze accommodatie, niet van heel La Marina. De oude stad blijft een aparte wandeling en ligt niet direct voor de deur.'
        ],
        archetypes: [
          { title: 'Oude stad', consequence: 'Steegjes, tapas en het Castillo voor de deur; nauw en weinig parkeerruimte.' },
          { title: 'La Marina', consequence: 'Tussen oude stad en strand, vijf minuten naar Los Lances. Hier ligt AMARA Family & Surf.' },
          { title: 'Los Lances', consequence: 'Het lange Atlantische strand, waar de wind het programma is.' },
          { title: 'Campo & heuvels', consequence: 'Finca’s met uitzicht over de Straat, alles met de auto.' }
        ],
        link: { label: 'Vergelijk de gebieden van Tarifa uitgebreid', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seizoenen',
        title: 'In Tarifa vraag je niet naar de zon, maar naar de wind',
        paragraphs: [
          'De Levante komt uit het oosten, warm en krachtig, en zet op Los Lances het zand in beweging; dan is Playa Chica aan de Middellandse Zee-kant het strand om te zwemmen. De Poniente komt van de Atlantische Oceaan, gelijkmatiger, en brengt de golf: de wind waarmee we zelf het water opgaan.',
          'In de zomer houdt de wind de hitte in de hand, de records liggen nauwelijks boven 37 graden. In de winter blijft het mild, rond 14 tot 15 graden, en winderig genoeg om te kiten.',
          'Bij een accommodatie beïnvloeden oriëntatie en gebouwcontext de blootstelling aan wind. Zonder plaatsgebonden bewijs voor de werkelijke omstandigheden beloven we geen beschutting voor La Marina of AMARA Family & Surf.'
        ],
        link: { label: 'Levante, poniente en de maandwaarden voor jullie reisperiode', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven',
        title: 'Wat zich na drie dagen herhaalt',
        paragraphs: [
          'Mercadona aan de overkant, brood bij Pastelito of Bernal, de apotheek in dezelfde straat.',
          '’s Avonds de Calle Batalla del Salado en de steegjes van de oude stad, beide te voet vanuit La Marina.'
        ]
      },
      winter: {
        eyebrow: 'Vanaf september',
        title: 'Vanaf september is Tarifa weer van de mensen die hier wonen',
        paragraphs: [
          'In juli en augustus is de plaats vol en parkeren een gedoe; wij rijden dan naar Valdevaqueros om te kiten en de garage in om te parkeren.',
          'Vanaf september wordt het rustig. Je ziet dezelfde gezichten in de supermarkt, raakt aan de praat met locals, en de club draait zijn kitecamps. Voor ons is dat de mooiste tijd hier.',
          'Voor langere verblijven heeft het appartement een open haard, verwarming, een keuken en een wasmachine.'
        ]
      },
      tradeoffs: {
        eyebrow: 'VOOR WIE TARIFA PAST',
        title: 'Wind als programma of windstille stranddagen',
        paragraphs: [
          'Op Los Lances bepaalt de wind de dag: bij Levante vliegt het zand, dus zwem je aan de Middellandse Zeekant op Playa Chica of rijd je naar Bolonia. In juli en augustus is het dorp vol en parkeren lastig; vanaf september is Tarifa weer van de mensen die hier wonen.',
          'Wie windstille stranddagen zoekt, een plaats zonder zomerdrukte of een Balcón in plaats van een zeestraat, zit beter in Nerja aan de Costa del Sol: AMARA Playa ligt daar 200 meter van het strand, en de dag hangt niet van de wind af.'
        ],
        axes: [
          { id: 'beach', title: 'Stranddag', tarifa: 'De wind beslist: Los Lances bij Poniente, Playa Chica bij Levante', nerja: 'Stadsstranden en baaien, vóór het ontbijt' },
          { id: 'evening', title: 'Avonden', tarifa: 'Straatjes van de oude stad en de Calle Batalla del Salado, kiters aan de bar', nerja: 'De Balcón, de boulevard, tapas in de straatjes' },
          { id: 'season', title: 'Seizoen', tarifa: 'Juli en augustus vol, rustig vanaf september; kitekampen in de herfst', nerja: 'Levendig in de zomer; boulevard, grot en museum in de winter' },
          { id: 'car', title: 'Auto', tarifa: 'Te voet in het dorp; auto voor de westelijke stranden en Bolonia, garageplek bij het appartement', nerja: 'Bus rechtstreeks vanaf de luchthaven, in het centrum overbodig' }
        ],
        link: { label: 'Nerja als alternatieve basis bekijken', token: 'location_nerja' }
      },
      corridors: [
        { id: 'winter', group: 'stay', label: 'Vanaf september', text: 'Rustig, kitekampen bij de club, dezelfde gezichten in de supermarkt; open haard en verwarming in het appartement.', token: 'tarifa_winter_stays' },
        { id: 'parking', group: 'stay', label: 'Parkeren', text: 'De oude stad is vanaf 13:30 alleen voor bewoners en vergunninghouders; bij het appartement hoort een garageplek.', token: 'tarifa_parking' },
        { id: 'dailyLife', group: 'stay', label: 'Dagelijks leven', text: 'Supermarkt tegenover, bakker en apotheek in dezelfde straat; ’s avonds te voet naar de Calle Batalla del Salado.', token: 'tarifa_daily_life' },
        { id: 'weather', group: 'stay', label: 'Wind en weer', text: 'Levante warm en krachtig uit het oosten, Poniente gelijkmatig van de Atlantische Oceaan; maandwaarden voor jullie reisperiode.', token: 'tarifa_weather' },
        { id: 'beaches', group: 'explore', label: 'Strand en kust', text: 'Dicht bij het dorp zwemmen of verder westelijk naar de kiters kijken; welk strand vandaag past, bepaalt de wind.', token: 'tarifa_beaches_authority' },
        { id: 'kite', group: 'explore', label: 'Wind en kitesurfen', text: 'Middagwind op Los Lances, Valdevaqueros in het hoogseizoen; beginners via de Tarifa Surf Club.', token: 'tarifa_kitesurfing_hub' },
        { id: 'oldTown', group: 'explore', label: 'Oude stad en geschiedenis', text: 'Door de Puerta de Jerez de ommuurde kern in, het Castillo als ankerpunt, de Straat in de rug.', token: 'tarifa_old_town_history' },
        { id: 'food', group: 'explore', label: 'Eten en uitgaan', text: 'Rode tonijn uit de almadraba-traditie, later de Calle Batalla del Salado en de straatjes van de oude stad.', token: 'tarifa_food_evening_life' },
        { id: 'whales', group: 'explore', label: 'Walvissen in de Straat', text: 'Een boottocht naar walvissen en dolfijnen vanuit de haven, flexibel rond zeegang en seizoen.', token: 'tarifa_whale_watching' },
        { id: 'bolonia', group: 'explore', label: 'Bolonia en Baelo Claudia', text: 'Open kust, de duin en de Romeinse stad: een hele dag, nooit een tussenstop.', token: 'tarifa_bolonia_baelo_claudia' }
      ],
      amara: {
        eyebrow: 'Ons appartement',
        title: 'Waarom wij in La Marina wonen',
        paragraphs: [
          'Het balkon kijkt naar het westen over de Atlantische Oceaan, ’s avonds gaat daar de zon in zee. Daarboven ligt de slaapkamer met hetzelfde uitzicht: je wordt wakker met de zee, en als er wind staat, zie je het aan de kites boven Los Lances.',
          'Robert heeft hier steeds weer maandenlang gewoond, om te kitesurfen en met vrienden. Toen het appartement te koop kwam, hebben we het gekocht en gemoderniseerd. Vanwege de avonden, en omdat het in het dagelijks leven gewoon werkt: 75 vierkante meter op twee verdiepingen, twee slaapkamers, twee badkamers, ondergrondse garage voor auto en boards, de supermarkt aan de overkant.',
          'Het zwembad hoort bij het complex en is in de zomer open. Wie het Castillo voor de deur wil, woont beter in de oude stad; wie het strand wil zien, bij ons.',
          'Eén ding zeggen we open: willen jullie het historische Tarifa direct voor de deur, dan past de oude stad beter bij jullie dan wij. Het zwembad hoort bij het complex, niet bij het appartement, en is seizoensgebonden; controleer de actuele openingsperiode voor het boeken.'
        ],
        facts: [
          '75 m² op twee niveaus, slaapkamer met zeezicht',
          'Westbalkon boven de Atlantische Oceaan',
          'Ondergrondse parkeerplaats voor auto en boards',
          'Supermarkt aan de overkant, Los Lances vijf minuten te voet',
          'Oude stad tien tot vijftien minuten te voet'
        ],
        link: { label: 'Bekijk AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Jullie dagen hier',
        title: 'Strand, wind, oude stad en een dag in Bolonia',
        paragraphs: ['Bolonia met de Romeinse stad Baelo Claudia vult een hele dag; in de trektijd trekken de vogels boven jullie over de Straat, en ’s avonds zit je in de straatjes.'],
        links: [
          { label: 'Zie hoeveel nachten bij welke dagen in Tarifa passen', token: 'tarifa_experience_hub' },
          { label: 'Kies het strand op wind: Los Lances of Playa Chica', token: 'tarifa_beaches_authority' },
          { label: 'Wind, spots en lessen voor beginners', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'Voor ons is Tarifa de mooiste plek die we kennen.',
        lead: 'Vanwege de avonden: de zon zakt voor het balkon in zee, en de oude stad ligt op tien tot vijftien minuten lopen.',
        ctaLabel: 'Bekijk AMARA Family & Surf'
      }
    },
    sv: {
      hero: {
        eyebrow: 'Tarifa · Costa de la Luz',
        title: 'Tarifa som semesterbas',
        subtitle: 'Atlanten i väster, sundet i öster, gamla stan emellan',
        standfirst: 'Tarifa är litet nog för att ni ska nå allt till fots, och livligt nog för att ingen ska behöva gå i säng tidigt. Levante från öster och Poniente från Atlanten styr dagen mer än årstiden. Vi bor i La Marina: fem minuter till stranden Los Lances, tio till femton in till gamla stan, balkongen mot väster, där solen går ner i havet på kvällen.',
        note: '',
        updated: 'Uppdaterad augusti 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Kommunens atlantkust' },
          { value: '10,5 km', label: 'Kommunens medelhavskust' },
          { value: '14,4 km', label: 'Europa – Afrika på det smalaste stället' },
          { value: '226 ha', label: 'Naturskyddsområdet Playa de los Lances' }
        ],
        note: 'Kommunens kustlängder och avståndet över sundet, enligt kommunen och MITECO.'
      },
      geography: {
        eyebrow: 'Var ni är',
        title: 'Två hav, en vägbank emellan',
        paragraphs: [
          'Vid vägbanken till Isla de Tarifa möts Medelhavet och Atlanten. Till höger ligger den lilla Playa Chica på Medelhavssidan, till vänster börjar Los Lances och sträcker sig kilometervis västerut till Valdevaqueros.',
          'Orten själv är kompakt: gamla stan bakom murarna, La Marina i västra kanten, emellan Calle Batalla del Salado med de första barerna. Till Valdevaqueros och Bolonia kör ni tio minuter på N-340.'
        ],
        markers: [
          { label: 'Två kuster', value: 'Playa Chica vid Medelhavet, Los Lances vid Atlanten' },
          { label: 'La Marina', value: 'Ortens västra kant, mellan gamla stan och stranden' },
          { label: 'Längre västerut', value: 'Valdevaqueros, Punta Paloma och Bolonia, med bil' }
        ],
        mapLabel: 'Tarifa på Iberiska halvön — på Andalusiens sydspets vid Gibraltar sund, där Atlanten möter Medelhavet, med en möjlig rundresa via Cádiz, Sevilla, Córdoba, Granada, Málaga och Ronda',
        mapNote: 'En möjlig rundresa från Tarifa: Cádiz, Sevilla, Córdoba, Granada, Málaga, Ronda och tillbaka genom bergen. Cirkeln förstorar Tarifa vid sundet.'
      },
      arrival: {
        eyebrow: 'Att komma fram',
        title: 'Via N-340, och sedan direkt in i garaget',
        paragraphs: [
          'Från Málaga via N-340, med fjärrbuss till Calle Batalla del Salado, med färja från Tanger in i hamnen.',
          'Från Málaga är det omkring 160 kilometer, ungefär två timmar längs västra Costa del Sol och genom Algeciras. Gibraltar ligger närmare, omkring en timme med landgränsen; Jerez drygt en och en halv timme. Fjärrbussen stannar vid Calle Batalla del Salado, färjan från Tanger i hamnen.',
          'Till lägenheten hör en plats i garaget under huset: kör in, sluta leta. I stan går ni till fots, bilen behöver ni för de västliga stränderna och Bolonia.'
        ],
        link: { label: 'Flygplatser, buss och garaget i detalj', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Var ni bor',
        title: 'Gamla stan eller La Marina',
        paragraphs: [
          'Vill ni på kvällen gå från dörren rakt in i gränderna, bo i gamla stan. Vill ni på morgonen se om det blåser på Los Lances, och ändå gå in till stan till fots på kvällen, bor ni hos oss i La Marina.',
          'Los Lances och Campo är egna världar: på stranden vinden som program, på Campo lugn, vidd och bilen för varje resa.',
          'La Marina ligger i stadens nyare västra till nordvästra kant nära Los Lances. AMARA Family & Surf har en egen garageplats och en mataffär mittemot. Det är egenskaper hos just boendet, inte hos hela La Marina. Gamla stan är fortfarande en separat promenad och ligger inte direkt utanför dörren.'
        ],
        archetypes: [
          { title: 'Gamla stan', consequence: 'Gränder, tapas och Castillo utanför dörren; trångt och lite parkering.' },
          { title: 'La Marina', consequence: 'Mellan gamla stan och stranden, fem minuter till Los Lances. Här ligger AMARA Family & Surf.' },
          { title: 'Los Lances', consequence: 'Den långa Atlantstranden, där vinden är programmet.' },
          { title: 'Campo & kullar', consequence: 'Fincor med utsikt över sundet, allt med bil.' }
        ],
        link: { label: 'Jämför Tarifas områden på djupet', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Vind & årstider',
        title: 'I Tarifa frågar man inte efter solen utan efter vinden',
        paragraphs: [
          'Levante kommer från öster, varm och kraftig, och sätter sanden i rörelse på Los Lances; då är Playa Chica på Medelhavssidan stranden att bada på. Poniente kommer från Atlanten, jämnare, och tar med sig vågen: vinden vi själva går ut på vattnet i.',
          'På sommaren håller vinden hettan i schack, rekorden ligger knappt över 37 grader. På vintern förblir det milt, kring 14 till 15 grader, och blåsigt nog för kitesurfing.',
          'För ett boende påverkar riktning och byggnad hur utsatt det är. Utan platsspecifika belägg för de aktuella förhållandena lovar vi inte vindskydd för vare sig La Marina eller AMARA Family & Surf.'
        ],
        link: { label: 'Levante, poniente och månadsvärdena för er resa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vardagsliv',
        title: 'Det som upprepas efter tre dagar',
        paragraphs: [
          'Mercadona mittemot, bröd på Pastelito eller Bernal, apoteket på samma gata.',
          'På kvällen Calle Batalla del Salado och gränderna i gamla stan, båda till fots från La Marina.'
        ]
      },
      winter: {
        eyebrow: 'Från september',
        title: 'Från september tillhör Tarifa åter dem som bor här',
        paragraphs: [
          'I juli och augusti är orten full och parkeringen ett släp; då kör vi till Valdevaqueros för att kita och in i garaget för att parkera.',
          'Från september blir det stilla. Man möter samma ansikten i mataffären, kommer i samspråk med lokalbefolkningen, och klubben kör sina kitecamps. För oss är det den vackraste tiden här.',
          'För längre vistelser har lägenheten öppen spis, värme, kök och tvättmaskin.'
        ]
      },
      tradeoffs: {
        eyebrow: 'FÖR VEM TARIFA PASSAR',
        title: 'Vind som program eller vindstilla stranddagar',
        paragraphs: [
          'På Los Lances bestämmer vinden dagen: vid levante flyger sanden, så ni badar på medelhavssidan vid Playa Chica eller kör till Bolonia. I juli och augusti är staden full och parkering besvärlig; från september tillhör Tarifa åter dem som bor här.',
          'Söker ni vindstilla stranddagar, en ort utan sommarträngsel eller en Balcón i stället för ett sund är Nerja på Costa del Sol den bättre basen: AMARA Playa ligger där 200 meter från stranden, och dagen hänger inte på vinden.'
        ],
        axes: [
          { id: 'beach', title: 'Stranddag', tarifa: 'Vinden avgör: Los Lances vid poniente, Playa Chica vid levante', nerja: 'Stadsstränder och vikar, före frukost' },
          { id: 'evening', title: 'Kvällar', tarifa: 'Gamla stans gränder och Calle Batalla del Salado, kitesurfare vid baren', nerja: 'Balcón, promenaden, tapas i gränderna' },
          { id: 'season', title: 'Säsong', tarifa: 'Juli och augusti fullt, lugnt från september; kitecamp på hösten', nerja: 'Livligt på sommaren; promenad, grotta och museum på vintern' },
          { id: 'car', title: 'Bil', tarifa: 'Till fots i staden; bil för de västra stränderna och Bolonia, garageplats vid lägenheten', nerja: 'Buss direkt från flygplatsen, onödig i centrum' }
        ],
        link: { label: 'Se Nerja som alternativ bas', token: 'location_nerja' }
      },
      corridors: [
        { id: 'winter', group: 'stay', label: 'Från september', text: 'Lugnt, kitecamp på klubben, samma ansikten i mataffären; öppen spis och värme i lägenheten.', token: 'tarifa_winter_stays' },
        { id: 'parking', group: 'stay', label: 'Parkering', text: 'Gamla stan är bara för boende och behöriga från 13:30; till lägenheten hör en garageplats.', token: 'tarifa_parking' },
        { id: 'dailyLife', group: 'stay', label: 'Vardag', text: 'Mataffär mittemot, bageri och apotek på samma gata; på kvällen Calle Batalla del Salado till fots.', token: 'tarifa_daily_life' },
        { id: 'weather', group: 'stay', label: 'Vind och väder', text: 'Levante varm och kraftig från öster, poniente jämn från Atlanten; månadsvärden för er resa.', token: 'tarifa_weather' },
        { id: 'beaches', group: 'explore', label: 'Strand och kust', text: 'Bada nära staden eller se på kitesurfarna längre västerut; vilken strand som passar i dag avgör vinden.', token: 'tarifa_beaches_authority' },
        { id: 'kite', group: 'explore', label: 'Vind och kitesurfing', text: 'Eftermiddagsvind på Los Lances, Valdevaqueros under högsäsong; nybörjare via Tarifa Surf Club.', token: 'tarifa_kitesurfing_hub' },
        { id: 'oldTown', group: 'explore', label: 'Gamla stan och historia', text: 'Genom Puerta de Jerez in i den muromgärdade kärnan, Castillo som riktmärke, sundet i ryggen.', token: 'tarifa_old_town_history' },
        { id: 'food', group: 'explore', label: 'Mat och kvällar', text: 'Röd tonfisk från almadraba-traditionen, senare Calle Batalla del Salado och gränderna i gamla stan.', token: 'tarifa_food_evening_life' },
        { id: 'whales', group: 'explore', label: 'Valar i sundet', text: 'Båttur till valar och delfiner från hamnen, flexibelt efter sjögång och säsong.', token: 'tarifa_whale_watching' },
        { id: 'bolonia', group: 'explore', label: 'Bolonia och Baelo Claudia', text: 'Öppen kust, dynen och den romerska staden: en hel dag, aldrig ett mellanstopp.', token: 'tarifa_bolonia_baelo_claudia' }
      ],
      amara: {
        eyebrow: 'Vår lägenhet',
        title: 'Varför vi bor i La Marina',
        paragraphs: [
          'Balkongen vetter mot väster över Atlanten, på kvällen går solen ner i havet där. Ovanför ligger sovrummet med samma utsikt: ni vaknar med havet, och när det blåser ser ni det på kitarna över Los Lances.',
          'Robert har gång på gång bott här i månader, för att kitesurfa och med vänner. När lägenheten kom ut till försäljning köpte vi den och moderniserade den. För kvällarnas skull, och för att den helt enkelt fungerar i vardagen: 75 kvadratmeter på två plan, två sovrum, två badrum, garage för bil och brädor, mataffären mittemot.',
          'Poolen tillhör anläggningen och är öppen på sommaren. Den som vill ha Castillo utanför dörren bor bättre i gamla stan; den som vill se stranden, hos oss.',
          'En sak säger vi rakt ut: vill ni ha det historiska Tarifa direkt utanför dörren passar gamla stan er bättre än vi gör. Poolen tillhör anläggningen, inte lägenheten, och drivs säsongsvis; kontrollera den aktuella öppningsperioden före bokning.'
        ],
        facts: [
          '75 m² på två plan, sovrum med havsutsikt',
          'Västbalkong över Atlanten',
          'Garageplats för bil och brädor',
          'Mataffär mittemot, Los Lances fem minuter till fots',
          'Gamla stan tio till femton minuter till fots'
        ],
        link: { label: 'Visa AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Era dagar här',
        title: 'Strand, vind, gamla stan och en dag i Bolonia',
        paragraphs: ['Bolonia med den romerska staden Baelo Claudia fyller en hel dag; under flyttningstiden drar fåglarna över sundet ovanför er, och på kvällen sitter ni i gränderna.'],
        links: [
          { label: 'Se hur många nätter som passar vilka dagar i Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Välj strand efter vind: Los Lances eller Playa Chica', token: 'tarifa_beaches_authority' },
          { label: 'Vind, spots och kurser för nybörjare', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'För oss är Tarifa den vackraste plats vi känner till.',
        lead: 'För kvällarnas skull: solen sjunker i havet framför balkongen, och gamla stan ligger tio till femton minuter bort till fots.',
        ctaLabel: 'Visa AMARA Family & Surf'
      }
    }
  }
};
