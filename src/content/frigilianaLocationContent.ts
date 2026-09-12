import type { LocalizedText, LocalizedTextList } from '../types/content';
import { resolveLocale } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

const text = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

const textList = (
  en: string[],
  de: string[],
  es: string[],
  nl: string[],
  sv: string[]
): LocalizedTextList => ({ en, de, es, nl, sv });

export type FrigilianaLocationCtaToken =
  | 'PARKING'
  | 'COMPARISON'
  | 'WEATHER'
  | 'FRIGILIANA_STAYS'
  | 'AVAILABILITY';

export interface FrigilianaLocationCta {
  token: FrigilianaLocationCtaToken;
  label: string;
}

export interface FrigilianaLocationSubsection {
  id: string;
  title: string;
  paragraphs: string[];
  ctas: FrigilianaLocationCta[];
}

export interface FrigilianaLocationModule {
  title: string;
  paragraphs: string[];
  subsections: FrigilianaLocationSubsection[];
  ctas: FrigilianaLocationCta[];
}

export interface FrigilianaLocationArchetype {
  id: 'lounis' | 'zaid' | 'maha' | 'farah';
  title: string;
  consequence: string;
}

export interface FrigilianaLocationDecisionModule extends FrigilianaLocationModule {
  eyebrow: string;
  staysEyebrow: string;
  archetypes: FrigilianaLocationArchetype[];
  facts: Array<{ id: 'walkable-core' | 'terrain' | 'parking'; value: string }>;
}

export interface FrigilianaLocationPageCopy {
  heroKicker: string;
  h1: string;
  h1Subtitle: string;
  heroUpdated: string;
  heroNote: string;
  intro: string[];
  introPullLine: string;
  orientation: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ id: string; value: string; label: string }>;
    mapLabel: string;
    mapNote: string;
    geographyLabel: string;
    arrivalLabel: string;
    routeLabel: string;
  };
  evening: FrigilianaLocationModule;
  history: FrigilianaLocationModule;
  heritageFacts: Array<{
    id: 'barribajo' | 'barribarto' | 'ingenio';
    value: string;
    label: string;
  }>;
  heritageLinkLabel: string;
  villageLife: FrigilianaLocationModule;
  coast: FrigilianaLocationModule;
  arrival: {
    title: string;
    steps: Array<{ id: string; num: string; headline: string; text: string }>;
    detailLabel: string;
  };
  faq: {
    title: string;
    items: Array<{
      id: 'car' | 'parking' | 'steepness' | 'nerja-without-car' | 'luggage' | 'overnight';
      question: string;
      answer: string;
    }>;
  };
  seasons: FrigilianaLocationModule;
  /** Trade-offs of the village as a base, with the honest pointer to Nerja where it fits better. */
  tradeoffs: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    axes: Array<{ id: 'doorstep' | 'sea' | 'steps' | 'car'; title: string; frigiliana: string; nerja: string }>;
    ctas: FrigilianaLocationCta[];
  };
  planning: {
    eyebrow: string;
    title: string;
    intro: string;
    gettingThere: { label: string; text: string };
    parking: { label: string; text: string };
    stairs: { label: string; text: string };
    dailyLife: { label: string; text: string };
    comparison: { label: string; text: string };
    weather: { label: string; text: string };
    winter: { label: string; text: string };
    faq: { label: string; text: string };
    propertyForSale: { label: string; text: string };
    oldTown: { label: string; text: string };
    reviews: { label: string; text: string };
    amenities: { label: string; text: string };
  };
  journeyBridge?: { eyebrow: string; title: string; text: string; ctaLabel: string };
  exploreBridge: {
    eyebrow: string;
    title: string;
    text: string;
    links: Array<{
      id: 'old-town' | 'hiking' | 'beaches' | 'all';
      label: string;
      text: string;
    }>;
  };
  decision: FrigilianaLocationDecisionModule;
}

interface LocalizedCta {
  token: FrigilianaLocationCtaToken;
  label: LocalizedText;
}

interface LocalizedSubsection {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedTextList;
  ctas: LocalizedCta[];
}

interface LocalizedModule {
  title: LocalizedText;
  paragraphs: LocalizedTextList;
  subsections: LocalizedSubsection[];
  ctas: LocalizedCta[];
}

interface LocalizedDecisionModule extends LocalizedModule {
  eyebrow: LocalizedText;
  staysEyebrow: LocalizedText;
  archetypes: Array<{
    id: FrigilianaLocationArchetype['id'];
    title: string;
    consequence: LocalizedText;
  }>;
  facts: Array<{
    id: FrigilianaLocationDecisionModule['facts'][number]['id'];
    value: LocalizedText;
  }>;
}

const cta = (token: FrigilianaLocationCtaToken, label: LocalizedText): LocalizedCta => ({
  token,
  label
});

export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-08-31-frigiliana-location-v5.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-18',
    dateModified: '2026-08-31',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  ogImage: routeOgImage('frigiliana'),
  languages: {
    de: {
      title: 'Frigiliana als Urlaubsort: wohnen, bewegen, vorher wissen',
      description: 'Erlebt Frigiliana über Nacht: geschützte weiße Gassen, Abendessen zu Fuß, die Sierra im Rücken und Nerjas Küste weiter unten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    en: {
      title: 'Frigiliana as a Base: Where to Stay and How to Get Around',
      description: 'Stay overnight in Frigiliana for protected white lanes, dinner on foot, the Sierra behind the village and Nerja’s coast below.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana como base: dónde alojarse y cómo moverse',
      description: 'Quedaos en Frigiliana para vivir sus calles blancas protegidas, salir a cenar a pie, tener la sierra detrás y la costa de Nerja más abajo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana als vakantiebasis: wonen, bewegen, weten',
      description: 'Blijf overnachten in Frigiliana voor beschermde witte straatjes, uit eten te voet, de Sierra achter het dorp en Nerja’s kust beneden.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana som semesterbas: bo, röra sig, veta i förväg',
      description: 'Stanna över natten i Frigiliana för skyddade vita gränder, middag till fots, Sierran bakom byn och Nerjas kust nedanför.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaLocationNav = {
  brand: text('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
  links: [
    { token: 'location_frigiliana', label: text('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana') },
    { token: 'frigiliana_parking', label: text('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering') },
    { token: 'arrival_guide', label: text('Arrival at AMARA', 'Ankunft bei AMARA', 'Llegada a AMARA', 'Aankomst bij AMARA', 'Ankomst till AMARA') }
  ]
} as const;

export const frigilianaLocationCopy = {
  heroKicker: text('FRIGILIANA · ANDALUSIA', 'FRIGILIANA · ANDALUSIEN', 'FRIGILIANA · ANDALUCÍA', 'FRIGILIANA · ANDALUSIË', 'FRIGILIANA · ANDALUSIEN'),
  h1: text(
    'Frigiliana as a place to stay',
    'Frigiliana als Urlaubsort',
    'Frigiliana como base de vacaciones',
    'Frigiliana als vakantiebasis',
    'Frigiliana som semesterbas'
  ),
  h1Subtitle: text(
    'Live in the village, mountains behind you, Nerja and the sea ten minutes below',
    'Im Dorf wohnen, die Berge im Rücken, Nerja und das Meer zehn Minuten unterhalb',
    'Vivir en el pueblo, la montaña detrás, Nerja y el mar a diez minutos',
    'Wonen in het dorp, de bergen achter je, Nerja en de zee tien minuten lager',
    'Bo i byn, bergen i ryggen, Nerja och havet tio minuter nedanför'
  ),
  heroUpdated: text('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026'),
  heroNote: text(
    '',
    '',
    '',
    '',
    ''
  ),
  intro: textList(
    [
      'Frigiliana is a hillside village around 300 metres above the sea, an hour from Málaga and ten minutes by car above Nerja. Small restaurants climb the slope, the Sierra de Almijara begins behind them, the coast lies below. You need no car for the village, but you do for beaches and day trips; steps and cobbles are part of everyday life. Stay overnight and you have the village almost to yourselves in the morning and evening, walk home after dinner and wake up in the middle of the old town.'
    ],
    [
      'Frigiliana ist ein Hangdorf rund 300 Meter über dem Meer, eine Stunde ab Málaga und zehn Autominuten oberhalb von Nerja. Kleine Restaurants ziehen sich den Hang hinauf, dahinter beginnt die Sierra de Almijara, unten liegt die Küste. Fürs Dorf braucht ihr kein Auto, für Strand und Ausflüge schon; Stufen und Pflaster gehören zum Alltag. Wer über Nacht bleibt, hat das Dorf morgens und abends fast für sich, geht nach dem Essen zu Fuß nach Hause und wacht mitten in der Altstadt auf.'
    ],
    [
      'Frigiliana es un pueblo en ladera a unos 300 metros sobre el mar, a una hora de Málaga y a diez minutos en coche por encima de Nerja. Pequeños restaurantes suben por la cuesta, detrás empieza la Sierra de Almijara, abajo queda la costa. Para el pueblo no necesitáis coche; para playas y excursiones, sí. Escalones y empedrado forman parte del día a día. Quien se queda a dormir tiene el pueblo casi para sí por la mañana y por la noche, vuelve a casa andando después de cenar y se despierta en pleno casco antiguo.'
    ],
    [
      'Frigiliana is een dorp op de helling, zo’n 300 meter boven zee, een uur van Málaga en tien minuten rijden boven Nerja. Kleine restaurants klimmen de helling op, daarachter begint de Sierra de Almijara, beneden ligt de kust. Voor het dorp heb je geen auto nodig, voor stranden en uitstapjes wel; treden en kasseien horen bij het dagelijks leven. Wie overnacht, heeft het dorp ’s ochtends en ’s avonds bijna voor zich alleen, loopt na het eten naar huis en wordt midden in de oude kern wakker.'
    ],
    [
      'Frigiliana är en by på sluttningen omkring 300 meter över havet, en timme från Málaga och tio minuter med bil ovanför Nerja. Små restauranger klättrar uppför sluttningen, bakom börjar Sierra de Almijara, nedanför ligger kusten. I byn behöver ni ingen bil, till stränder och utflykter behövs den; trappsteg och kullersten hör till vardagen. Den som stannar över natten har byn nästan för sig själv på morgonen och kvällen, går hem till fots efter maten och vaknar mitt i gamla byn.'
    ]
  ),
  introPullLine: text(
    'When the day-trippers leave, the village is yours.',
    'Wenn die Tagesgäste gehen, gehört das Dorf euch.',
    'Cuando se van los visitantes del día, el pueblo es vuestro.',
    'Als de dagjesmensen weg zijn, is het dorp van jullie.',
    'När dagsbesökarna åker hem är byn er.'
  ),
  orientation: {
    eyebrow: text('LOCATION', 'LAGE', 'UBICACIÓN', 'LIGGING', 'LÄGE'),
    title: text('Mountains behind you, the sea below', 'Die Berge im Rücken, das Meer unterhalb', 'La montaña detrás, el mar más abajo', 'De bergen achter je, de zee beneden', 'Bergen bakom er, havet nedanför'),
    paragraphs: textList(
      [
        'Frigiliana lies in the Axarquía, on the southern slope of the Sierra de Almijara. Nerja and the Mediterranean lie below the village towards the coast.',
        'The village looks towards the coast and leans into the mountains. That closeness lets a quiet morning in the lanes, a walk in the Sierra and a few hours by the sea belong to the same stay.'
      ],
      [
        'Frigiliana liegt in der Axarquía am Südhang der Sierra de Almijara. Nerja und das Mittelmeer liegen unterhalb des Dorfes an der Küste.',
        'Das Dorf blickt zur Küste und lehnt sich zugleich an die Berge. So können ein ruhiger Morgen in den Gassen, ein Weg in die Sierra und ein paar Stunden am Meer zum selben Aufenthalt gehören.'
      ],
      [
        'Frigiliana está en la Axarquía, en la ladera sur de la Sierra de Almijara. Nerja y el Mediterráneo quedan más abajo, hacia la costa.',
        'El pueblo mira hacia la costa y se apoya a la vez en la montaña. Así, una mañana tranquila entre sus calles, un paseo por la sierra y unas horas junto al mar pueden formar parte de la misma estancia.'
      ],
      [
        'Frigiliana ligt in de Axarquía, op de zuidhelling van de Sierra de Almijara. Nerja en de Middellandse Zee liggen lager, richting de kust.',
        'Het dorp kijkt naar de kust en leunt tegelijk tegen de bergen. Daardoor kunnen een rustige ochtend in de straatjes, een wandeling in de Sierra en een paar uur aan zee bij hetzelfde verblijf horen.'
      ],
      [
        'Frigiliana ligger i Axarquía på Sierra de Almijaras sydsluttning. Nerja och Medelhavet ligger längre ner mot kusten.',
        'Byn blickar mot kusten och lutar samtidigt mot bergen. Därför kan en lugn morgon i gränderna, en vandring i Sierran och några timmar vid havet rymmas i samma vistelse.'
      ]
    ),
    facts: [],
    mapLabel: text(
      'Frigiliana on the Iberian Peninsula — beside Nerja on Andalusia\'s Mediterranean coast, with a possible round trip via Málaga, Ronda, Sevilla, Córdoba and Granada',
      'Frigiliana auf der Iberischen Halbinsel — bei Nerja an Andalusiens Mittelmeerküste, mit einer möglichen Rundreise über Málaga, Ronda, Sevilla, Córdoba und Granada',
      'Frigiliana en la península ibérica — junto a Nerja, en la costa mediterránea de Andalucía, con una posible ruta por Málaga, Ronda, Sevilla, Córdoba y Granada',
      'Frigiliana op het Iberisch Schiereiland — naast Nerja aan de Middellandse Zeekust van Andalusië, met een mogelijke rondreis via Málaga, Ronda, Sevilla, Córdoba en Granada',
      'Frigiliana på Iberiska halvön — vid Nerja på Andalusiens medelhavskust, med en möjlig rundresa via Málaga, Ronda, Sevilla, Córdoba och Granada'
    ),
    mapNote: text(
      'A possible round trip from Frigiliana: Málaga, Ronda, Sevilla, Córdoba, Granada and back along the coast. The circle enlarges Nerja and Frigiliana.',
      'Eine mögliche Rundreise ab Frigiliana: Málaga, Ronda, Sevilla, Córdoba, Granada und zurück über die Küste. Der Kreis zeigt Nerja und Frigiliana vergrößert.',
      'Una posible ruta desde Frigiliana: Málaga, Ronda, Sevilla, Córdoba, Granada y vuelta por la costa. El círculo amplía Nerja y Frigiliana.',
      'Een mogelijke rondreis vanuit Frigiliana: Málaga, Ronda, Sevilla, Córdoba, Granada en terug langs de kust. De cirkel vergroot Nerja en Frigiliana.',
      'En möjlig rundresa från Frigiliana: Málaga, Ronda, Sevilla, Córdoba, Granada och tillbaka längs kusten. Cirkeln förstorar Nerja och Frigiliana.'
    ),
    geographyLabel: text('See the geography guide', 'Geografie ansehen', 'Ver la guía geográfica', 'Bekijk de geografiegids', 'Se geografisidan'),
    arrivalLabel: text('Arrival from Málaga and the last five minutes on foot', 'Anreise ab Málaga und die letzten fünf Minuten zu Fuß', 'La llegada desde Málaga y los últimos cinco minutos a pie', 'De aankomst vanaf Málaga en de laatste vijf minuten te voet', 'Ankomsten från Málaga och de sista fem minuterna till fots'),
    routeLabel: text('Open route from the airport', 'Route ab Flughafen öffnen', 'Abrir ruta desde el aeropuerto', 'Route vanaf de luchthaven openen', 'Öppna rutten från flygplatsen')
  },
  evening: {
    title: text('Early mornings, long evenings', 'Frühe Morgen, lange Abende', 'Mañanas tempranas, noches largas', 'Vroege ochtenden, lange avonden', 'Tidiga morgnar, långa kvällar'),
    paragraphs: textList(
      [
        'Frigiliana is popular during the day. Early in the morning and later in the evening, the lanes usually feel calmer and the village belongs more to the people staying here.',
        'You can walk out for dinner, have a drink and return through the old streets without getting back in the car.',
        'On summer weekends and during the fiestas the village is full. Then the early morning and your terrace are the quiet hours.'
      ],
      [
        'Tagsüber ist Frigiliana gut besucht. Früh am Morgen und später am Abend werden die Gassen meist ruhiger, und das Dorf gehört wieder mehr den Menschen, die hier wohnen.',
        'Ihr könnt zu Fuß zum Essen gehen, noch etwas trinken und später durch die Altstadt nach Hause laufen – ganz ohne Auto.',
        'An Sommerwochenenden und zu den Festen ist das Dorf voll. Dann sind der frühe Morgen und eure Terrasse die ruhigen Stunden.'
      ],
      [
        'Durante el día Frigiliana recibe muchos visitantes. A primera hora y al final de la tarde las calles suelen estar más tranquilas, y el pueblo vuelve a sentirse de quienes se quedan.',
        'Podéis salir andando a cenar, tomar algo y volver a casa por el casco antiguo sin coger el coche.',
        'Los fines de semana de verano y en las fiestas el pueblo está lleno. Entonces la primera hora de la mañana y vuestra terraza son las horas tranquilas.'
      ],
      [
        'Overdag trekt Frigiliana veel bezoekers. Vroeg in de ochtend en later op de avond worden de straatjes meestal rustiger en voelt het dorp weer meer van de mensen die er verblijven.',
        'Jullie lopen naar een restaurant, drinken nog iets en gaan daarna door de oude straatjes naar huis, zonder opnieuw in de auto te stappen.',
        'Op zomerweekends en tijdens de feesten is het dorp vol. Dan zijn de vroege ochtend en jullie terras de rustige uren.'
      ],
      [
        'På dagen får Frigiliana många besökare. Tidigt på morgonen och senare på kvällen blir gränderna oftast lugnare och byn känns mer som en plats för dem som stannar kvar.',
        'Ni kan gå ut och äta, ta något att dricka och sedan promenera hem genom gamla byn utan att använda bilen.',
        'På sommarhelger och under festerna är byn full. Då är den tidiga morgonen och er terrass de stilla timmarna.'
      ]
    ),
    subsections: [],
    ctas: []
  } satisfies LocalizedModule,
  history: {
    title: text('A village the hillside has shaped', 'Ein Dorf, das der Hang geformt hat', 'Un pueblo moldeado por la ladera', 'Een dorp gevormd door de helling', 'En by formad av sluttningen'),
    paragraphs: textList(
      [
        'You can read the village in the way it moves. Calle Real follows the lower axis through Barribajo; above it, the original medieval core of Barribarto tightens into bends, adarves, covered passages and steep cross-streets. The hillside is not a backdrop here. It is the plan of the place.',
      ],
      [
        'Das Dorf lässt sich beim Gehen lesen. Die Calle Real bildet die untere Achse durch das Barribajo; darüber verdichtet sich der ursprüngliche mittelalterliche Kern des Barribarto zu Kurven, Adarves, überbauten Durchgängen und steilen Quergassen. Der Hang ist hier keine Kulisse. Er ist der Grundriss des Dorfes.',
      ],
      [
        'El pueblo se lee al caminar. La calle Real forma el eje bajo del Barribajo; por encima, el núcleo medieval original del Barribarto se estrecha entre curvas, adarves, pasajes cubiertos y calles transversales empinadas. Aquí la ladera no es un telón de fondo. Es el trazado del pueblo.',
      ],
      [
        'Het dorp lees je tijdens het lopen. Calle Real vormt de lagere as door Barribajo; daarboven trekt de oorspronkelijke middeleeuwse kern van Barribarto zich samen in bochten, adarves, overdekte doorgangen en steile dwarsstraten. De helling is hier geen decor. Zij bepaalt de plattegrond van het dorp.',
      ],
      [
        'Byn går att läsa medan ni promenerar. Calle Real bildar den nedre axeln genom Barribajo; ovanför tätnar Barribartos ursprungliga medeltida kärna i svängar, adarves, täckta passager och branta tvärgator. Sluttningen är ingen kuliss här. Den är byns planritning.',
      ]
    ),
    subsections: [],
    ctas: []
  } satisfies LocalizedModule,
  heritageFacts: [
    {
      id: 'barribajo',
      value: text('Barribajo', 'Barribajo', 'Barribajo', 'Barribajo', 'Barribajo'),
      label: text('Calle Real forms the lower old-village axis', 'Calle Real bildet die untere Altstadtachse', 'la calle Real forma el eje bajo del casco antiguo', 'Calle Real vormt de lagere as van de oude kern', 'Calle Real bildar den nedre axeln genom gamla byn')
    },
    {
      id: 'barribarto',
      value: text('Barribarto', 'Barribarto', 'Barribarto', 'Barribarto', 'Barribarto'),
      label: text('the original medieval core higher on the slope', 'der ursprüngliche mittelalterliche Kern weiter oben', 'el núcleo medieval original en la parte alta', 'de oorspronkelijke middeleeuwse kern hoger op de helling', 'den ursprungliga medeltida kärnan högre upp')
    },
    {
      id: 'ingenio',
      value: text('El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio'),
      label: text('the old sugar-cane factory at the lower edge of the village', 'die alte Zuckerrohrfabrik am unteren Dorfrand', 'la antigua fábrica de caña de azúcar en la parte baja del pueblo', 'de oude suikerrietfabriek aan de onderrand van het dorp', 'den gamla sockerrörsfabriken i byns nedre kant')
    }
  ],
  heritageLinkLabel: text(
    'Read the twelve ceramic panels and climb into the Barribarto',
    'Die zwölf Keramiktafeln lesen und ins Barribarto steigen',
    'Leer los doce paneles de cerámica y subir al Barribarto',
    'De twaalf keramiektegels lezen en het Barribarto in klimmen',
    'Läs de tolv keramiktavlorna och gå upp i Barribarto'
  ),
  villageLife: {
    title: text('In the old village, with the hillside still part of it', 'Mitten in der Altstadt – und trotzdem bleibt es ein Hangdorf', 'En pleno casco antiguo, sin olvidar que es un pueblo en cuesta', 'Midden in de oude kern, maar nog steeds op een helling', 'Mitt i gamla byn – fortfarande på en sluttning'),
    paragraphs: textList(
      [
        'From our front door there are no steps to Calle Real and the Plaza; cobbles and a gentle slope are part of it.',
        'The approach from the main road below is different: it continues uphill over historic paving and steps. With limited mobility or heavy luggage, check the arrival and access details carefully before booking.'
      ],
      [
        'Von unserer Haustür geht es ohne Stufen zur Calle Real und zur Plaza; Pflaster und eine leichte Steigung gehören dazu.',
        'Anders ist der Weg von der Hauptstraße unterhalb: Er führt bergauf über historisches Pflaster und Stufen. Mit eingeschränkter Mobilität oder schwerem Gepäck solltet ihr die Anreise- und Zugangshinweise vor der Buchung sorgfältig prüfen.'
      ],
      [
        'Desde nuestra puerta no hay escalones hasta la calle Real y la plaza; el empedrado y una ligera cuesta forman parte.',
        'El acceso desde la carretera principal, más abajo, es distinto: continúa cuesta arriba por empedrado histórico y escalones. Si tenéis movilidad reducida o equipaje pesado, revisad con atención la información de llegada y acceso antes de reservar.'
      ],
      [
        'Vanaf onze voordeur ga je zonder treden naar de Calle Real en de Plaza; kasseien en een lichte helling horen erbij.',
        'De weg vanaf de hoofdweg beneden is anders: die loopt omhoog over historische bestrating en trappen. Bekijk bij beperkte mobiliteit of zware bagage vóór het boeken zorgvuldig de informatie over aankomst en toegang.'
      ],
      [
        'Från vår dörr går det utan trappsteg till Calle Real och Plaza; kullersten och en lätt stigning hör till.',
        'Vägen från huvudgatan nedanför är annorlunda: den fortsätter uppför över historisk stenläggning och trappor. Vid begränsad rörlighet eller tungt bagage bör ni läsa informationen om ankomst och tillgänglighet noga före bokning.'
      ]
    ),
    subsections: [
      {
        id: 'doorstep',
        title: text('Open the door and walk', 'Tür auf und losgehen', 'Abrir la puerta y salir andando', 'Deur open en op pad', 'Öppna dörren och gå'),
        paragraphs: textList(
          ['Breakfast, dinner, a drink or an evening walk all begin on foot. For everyday time in the village, you do not need the car.'],
          ['Frühstück, Abendessen, ein Glas Wein oder eine Runde durch die Gassen beginnen zu Fuß. Für eure Zeit im Dorf braucht ihr das Auto nicht.'],
          ['El desayuno, la cena, una copa o un paseo al atardecer empiezan a pie. Para disfrutar del pueblo no necesitáis el coche.'],
          ['Ontbijt, diner, een drankje of een avondwandeling beginnen te voet. Voor jullie tijd in het dorp is de auto niet nodig.'],
          ['Frukost, middag, ett glas vin eller en kvällspromenad börjar till fots. För tiden i byn behöver ni inte bilen.']
        ),
        ctas: []
      },
      {
        id: 'parking',
        title: text('No private parking at the house', 'Kein privater Parkplatz am Haus', 'Sin aparcamiento privado en la casa', 'Geen eigen parkeerplaats bij het huis', 'Ingen privat parkering vid huset'),
        paragraphs: textList(
          ['Public parking is in the lower part of the village and a space is never guaranteed. Vehicle access in the old town can also be restricted. Our parking and arrival guides explain the practical options.'],
          ['Öffentliche Parkmöglichkeiten liegen im unteren Dorf, ein freier Platz ist aber nie garantiert. Auch die Zufahrt in die Altstadt kann eingeschränkt sein. Unsere Park- und Anreise-Guides erklären den praktischen Ablauf.'],
          ['Los aparcamientos públicos están en la parte baja del pueblo, pero nunca se garantiza una plaza. El acceso en coche al casco antiguo también puede estar restringido. Nuestras guías de aparcamiento y llegada explican las opciones.'],
          ['Openbare parkeerplaatsen liggen in het lagere deel van het dorp, maar een vrije plek is nooit gegarandeerd. Ook autotoegang tot de oude kern kan beperkt zijn. Onze parkeer- en aankomstgids leggen de opties uit.'],
          ['Allmän parkering finns i byns nedre del, men en ledig plats kan aldrig garanteras. Även biltrafiken i gamla byn kan vara begränsad. Våra guider om parkering och ankomst förklarar alternativen.']
        ),
        ctas: [cta('PARKING', text('Parking in Frigiliana', 'Parken in Frigiliana', 'Aparcar en Frigiliana', 'Parkeren in Frigiliana', 'Parkering i Frigiliana'))]
      }
    ],
    ctas: []
  } satisfies LocalizedModule,
  coast: {
    title: text('A beach day can still end in the village', 'Ein Strandtag kann trotzdem im Dorf enden', 'Un día de playa puede terminar en el pueblo', 'Een stranddag kan gewoon in het dorp eindigen', 'En stranddag kan ändå sluta i byn'),
    paragraphs: textList(
      ['Ten minutes down, and you are on the beach. In the evening you eat in the village again.'],
      ['Zehn Minuten hinunter, und ihr seid am Strand. Abends esst ihr wieder im Dorf.'],
      ['Diez minutos cuesta abajo y estáis en la playa. Por la noche cenáis otra vez en el pueblo.'],
      ['Tien minuten omlaag, en je bent op het strand. ’s Avonds eet je weer in het dorp.'],
      ['Tio minuter nedför, och ni är på stranden. På kvällen äter ni i byn igen.']
    ),
    subsections: [
      {
        id: 'transport',
        title: text('Bus, taxi or rental car', 'Bus, Taxi oder Mietwagen', 'Autobús, taxi o coche de alquiler', 'Bus, taxi of huurauto', 'Buss, taxi eller hyrbil'),
        paragraphs: textList(
          ['Bus or taxi works for a straightforward visit to Nerja. A rental car is more useful when you want to combine several beaches, Maro or places farther along the coast.'],
          ['Für einen einfachen Tag in Nerja funktionieren Bus oder Taxi. Ein Mietwagen ist praktischer, wenn ihr mehrere Strände, Maro oder weitere Orte an der Küste verbinden möchtet.'],
          ['Para un día sencillo en Nerja sirven el autobús o el taxi. Un coche de alquiler resulta más práctico si queréis combinar varias playas, Maro u otros lugares de la costa.'],
          ['Voor een eenvoudige dag in Nerja werken bus of taxi prima. Een huurauto is handiger als jullie verschillende stranden, Maro of andere plaatsen langs de kust willen combineren.'],
          ['För en enkel dag i Nerja fungerar buss eller taxi. En hyrbil är mer praktisk om ni vill kombinera flera stränder, Maro eller andra platser längs kusten.']
        ),
        ctas: []
      },
      {
        id: 'comparison',
        title: text('Would you rather stay by the sea?', 'Möchtet ihr lieber direkt am Meer wohnen?', '¿Preferís alojaros junto al mar?', 'Liever direct aan zee verblijven?', 'Vill ni hellre bo direkt vid havet?'),
        paragraphs: textList(
          ['Nerja, if the beach and the coastal town should shape every day. Frigiliana, if the old village should shape your mornings and evenings.'],
          ['Nerja, wenn Strand und Küstenstadt jeden Tag bestimmen sollen. Frigiliana, wenn die Altstadt eure Morgen und Abende prägen darf.'],
          ['Nerja, si la playa y la ciudad costera deben marcar cada día. Frigiliana, si el casco antiguo debe marcar vuestras mañanas y noches.'],
          ['Nerja, als strand en kustplaats elke dag moeten bepalen. Frigiliana, als de oude kern jullie ochtenden en avonden mag vormen.'],
          ['Nerja, om stranden och kuststaden ska prägla varje dag. Frigiliana, om gamla byn ska forma era morgnar och kvällar.']
        ),
        ctas: [cta('COMPARISON', text('Compare Frigiliana and Nerja', 'Frigiliana und Nerja vergleichen', 'Comparar Frigiliana y Nerja', 'Frigiliana en Nerja vergelijken', 'Jämför Frigiliana och Nerja'))]
      }
    ],
    ctas: []
  } satisfies LocalizedModule,
  arrival: {
    title: text('Arrival in three steps', 'Die Ankunft in drei Schritten', 'La llegada en tres pasos', 'Aankomst in drie stappen', 'Ankomst i tre steg'),
    steps: [
      { id: 'transport', num: '01', headline: text('From Málaga', 'Ab Málaga', 'Desde Málaga', 'Vanaf Málaga', 'Från Málaga'), text: text('An hour by rental car, by bus via Nerja.', 'Eine Stunde mit dem Mietwagen, mit dem Bus über Nerja.', 'Una hora en coche de alquiler, en autobús vía Nerja.', 'Een uur met de huurauto, met de bus via Nerja.', 'En timme med hyrbil, med buss via Nerja.') },
      { id: 'last-route', num: '02', headline: text('The final stretch', 'Der letzte Weg', 'El último tramo', 'De laatste meters', 'Den sista biten'), text: text('Parking on Avenida Carlos Cano, five minutes uphill over cobbles and around 30 steps.', 'Parken an der Avenida Carlos Cano, fünf Minuten bergauf über Pflaster und rund 30 Stufen.', 'Aparcamiento en la avenida Carlos Cano, cinco minutos cuesta arriba por empedrado y unos 30 escalones.', 'Parkeren aan Avenida Carlos Cano, vijf minuten omhoog over kinderkopjes en ongeveer 30 treden.', 'Parkering på Avenida Carlos Cano, fem minuter uppför över kullersten och omkring 30 trappsteg.') },
      { id: 'guide', num: '03', headline: text('Before you arrive', 'Vor der Anreise', 'Antes de llegar', 'Vóór de aankomst', 'Före ankomsten'), text: text('We send you the route with a photo of the front door.', 'Ihr bekommt von uns den Weg mit einem Foto der Haustür.', 'Os enviamos el camino con una foto de la puerta.', 'Jullie krijgen van ons de route met een foto van de voordeur.', 'Ni får vägen från oss med ett foto av ytterdörren.') }
    ],
    detailLabel: text('Open the arrival guide', 'Anreise-Guide öffnen', 'Abrir la guía de llegada', 'Open de aankomstgids', 'Öppna ankomstguiden')
  },
  faq: {
    title: text('Practical questions', 'Praktische Fragen', 'Preguntas prácticas', 'Praktische vragen', 'Praktiska frågor'),
    items: [
      { id: 'car' as const, question: text('Do you need a car in Frigiliana?', 'Braucht ihr in Frigiliana ein Auto?', '¿Necesitáis coche en Frigiliana?', 'Hebben jullie een auto nodig in Frigiliana?', 'Behöver ni bil i Frigiliana?'), answer: text('Not for everyday time in the village. A car is useful for several beaches or excursions; bus and taxi can work for Nerja.', 'Nicht für den Alltag im Dorf. Für mehrere Strände oder Ausflüge ist ein Auto praktisch; für Nerja funktionieren auch Bus oder Taxi.', 'No para el día a día en el pueblo. Para varias playas o excursiones resulta práctico; para Nerja también sirven el autobús o el taxi.', 'Niet voor het dagelijks leven in het dorp. Voor meerdere stranden of uitstapjes is een auto handig; voor Nerja werken bus en taxi ook.', 'Inte för vardagen i byn. För flera stränder eller utflykter är en bil praktisk; till Nerja fungerar även buss eller taxi.') },
      { id: 'parking' as const, question: text('Is there parking at Casa AMARA?', 'Gibt es einen Parkplatz bei Casa AMARA?', '¿Hay aparcamiento en Casa AMARA?', 'Is er parkeergelegenheid bij Casa AMARA?', 'Finns parkering vid Casa AMARA?'), answer: text('Not at the house. You park on Avenida Carlos Cano or in the car park under Plaza de las Tres Culturas, five minutes on foot.', 'Am Haus nicht. Geparkt wird an der Avenida Carlos Cano oder im Parkhaus unter der Plaza de las Tres Culturas, fünf Minuten zu Fuß.', 'En la casa no. Se aparca en la avenida Carlos Cano o en el parking bajo la Plaza de las Tres Culturas, a cinco minutos a pie.', 'Niet bij het huis. Parkeren doe je aan Avenida Carlos Cano of in de parkeergarage onder Plaza de las Tres Culturas, vijf minuten lopen.', 'Inte vid huset. Ni parkerar på Avenida Carlos Cano eller i parkeringshuset under Plaza de las Tres Culturas, fem minuter till fots.') },
      { id: 'steepness' as const, question: text('How steep is the approach?', 'Wie steil ist der letzte Weg?', '¿Cómo es de empinado el último tramo?', 'Hoe steil is de laatste route?', 'Hur brant är sista vägen?'), answer: text('From Avenida Carlos Cano it is five minutes uphill over cobbles and around 30 steps.', 'Von der Avenida Carlos Cano sind es fünf Minuten bergauf über Pflaster und rund 30 Stufen.', 'Desde la avenida Carlos Cano son cinco minutos cuesta arriba por empedrado y unos 30 escalones.', 'Vanaf Avenida Carlos Cano is het vijf minuten omhoog over kinderkopjes en ongeveer 30 treden.', 'Från Avenida Carlos Cano är det fem minuter uppför över kullersten och omkring 30 trappsteg.') },
      { id: 'nerja-without-car' as const, question: text('Can you reach Nerja without a car?', 'Kommt ihr ohne Auto nach Nerja?', '¿Se puede ir a Nerja sin coche?', 'Kunnen jullie zonder auto naar Nerja?', 'Går det att ta sig till Nerja utan bil?'), answer: text('Yes, by the municipal bus or taxi; in the evening the taxi is the safe bet.', 'Ja, mit dem Bus der Gemeinde oder dem Taxi; abends ist das Taxi die sichere Variante.', 'Sí, con el autobús municipal o en taxi; por la noche el taxi es la opción segura.', 'Ja, met de gemeentebus of de taxi; ’s avonds is de taxi de zekere optie.', 'Ja, med kommunens buss eller taxi; på kvällen är taxin det säkra valet.') },
      { id: 'luggage' as const, question: text('What about luggage?', 'Was ist mit Gepäck?', '¿Y el equipaje?', 'En de bagage?', 'Hur fungerar det med bagage?'), answer: text('With normal hand luggage the walk is fine; a heavy suitcase feels the steps. We send you the route with a photo of the front door.', 'Mit normalem Handgepäck geht der Weg gut; ein schwerer Koffer merkt die Stufen. Wir schicken euch den Weg mit Foto der Haustür.', 'Con equipaje de mano normal el camino se hace bien; una maleta pesada nota los escalones. Os enviamos el camino con una foto de la puerta.', 'Met normale handbagage gaat de weg prima; een zware koffer voelt de treden. We sturen jullie de route met een foto van de voordeur.', 'Med vanligt handbagage går vägen bra; en tung resväska känner trappstegen. Vi skickar er vägen med ett foto av ytterdörren.') },
      { id: 'overnight' as const, question: text('Why stay instead of making a day trip?', 'Warum übernachten statt nur besuchen?', '¿Por qué alojarse en vez de venir unas horas?', 'Waarom blijven overnachten?', 'Varför övernatta i stället för att göra ett dagsbesök?'), answer: text('You experience the village before and after the busiest daytime hours, walk home after dinner and wake up already in the old town.', 'Ihr erlebt das Dorf vor und nach den stärksten Besuchszeiten, geht nach dem Essen zu Fuß nach Hause und wacht mitten in der Altstadt auf.', 'Vivís el pueblo antes y después de las horas de más visitas, volvéis andando después de cenar y despertáis ya en el casco antiguo.', 'Jullie beleven het dorp vóór en na de drukste uren, lopen na het eten naar huis en worden wakker in de oude kern.', 'Ni upplever byn före och efter de mest besökta timmarna, går hem efter middagen och vaknar redan i gamla byn.') }
    ]
  },
  seasons: {
    title: text('The same village feels different through the year', 'Dasselbe Dorf fühlt sich je nach Jahreszeit anders an', 'El mismo pueblo cambia con las estaciones', 'Hetzelfde dorp voelt elk seizoen anders', 'Samma by känns olika under året'),
    paragraphs: textList(
      ['Heat, rain and daylight change when steep walks, outdoor meals and the coast fit best into your day.'],
      ['Hitze, Regen und Tageslicht verändern, wann steile Wege, Essen im Freien und die Küste am besten in euren Tag passen.'],
      ['El calor, la lluvia y las horas de luz cambian el mejor momento para las cuestas, las comidas al aire libre y la costa.'],
      ['Hitte, regen en daglicht bepalen wanneer steile routes, buiten eten en de kust het beste in jullie dag passen.'],
      ['Värme, regn och dagsljus påverkar när branta promenader, måltider utomhus och kusten passar bäst under dagen.']
    ),
    subsections: [
      { id: 'spring', title: text('Spring', 'Frühling', 'Primavera', 'Lente', 'Vår'), paragraphs: textList(['Good for combining village walks, landscape and the coast; check the day’s forecast.'], ['Dorf, Landschaft und Küste lassen sich gut verbinden; prüft trotzdem die Tagesvorhersage.'], ['Es fácil combinar pueblo, paisaje y costa; comprobad la previsión del día.'], ['Dorp, landschap en kust zijn goed te combineren; bekijk wel de dagverwachting.'], ['By, landskap och kust går bra att kombinera; kontrollera ändå dagens prognos.']), ctas: [] },
      { id: 'summer', title: text('Summer', 'Sommer', 'Verano', 'Zomer', 'Sommar'), paragraphs: textList(['Plan steep walks for the cooler morning or evening hours.'], ['Plant steile Wege für die kühleren Morgen- oder Abendstunden.'], ['Dejad los caminos empinados para las horas más frescas de la mañana o la tarde.'], ['Plan steile routes in de koelere ochtend- of avonduren.'], ['Planera branta promenader till svalare morgon- eller kvällstimmar.']), ctas: [] },
      { id: 'autumn', title: text('Autumn', 'Herbst', 'Otoño', 'Herfst', 'Höst'), paragraphs: textList(['Warm days can continue, but rain changes paving and outdoor plans quickly.'], ['Warme Tage sind weiter möglich, Regen verändert Pflaster und Außenpläne aber schnell.'], ['Puede seguir haciendo calor, pero la lluvia cambia rápido el empedrado y los planes al aire libre.'], ['Warme dagen blijven mogelijk, maar regen verandert bestrating en buitenplannen snel.'], ['Varma dagar kan fortsätta, men regn förändrar stenläggning och utomhusplaner snabbt.']), ctas: [] },
      { id: 'winter', title: text('Winter', 'Winter', 'Invierno', 'Winter', 'Vinter'), paragraphs: textList(['Quieter days suit the village well; bring layers for cooler evenings and changing weather.'], ['Ruhigere Tage passen gut zum Dorf; für kühle Abende und wechselndes Wetter helfen mehrere Schichten.'], ['Los días tranquilos le sientan bien al pueblo; llevad varias capas para las noches frescas y el tiempo cambiante.'], ['Rustigere dagen passen goed bij het dorp; neem laagjes mee voor koele avonden en wisselend weer.'], ['Lugnare dagar passar byn väl; ta med flera lager för svala kvällar och växlande väder.']), ctas: [cta('WEATHER', text('Weather in Frigiliana', 'Wetter in Frigiliana', 'El tiempo en Frigiliana', 'Weer in Frigiliana', 'Väder i Frigiliana'))] }
    ],
    ctas: []
  } satisfies LocalizedModule,
  tradeoffs: {
    eyebrow: text('WHO THE VILLAGE SUITS', 'FÜR WEN DAS DORF PASST', 'PARA QUIÉN ES EL PUEBLO', 'VOOR WIE HET DORP PAST', 'FÖR VEM BYN PASSAR'),
    title: text('Village evenings or the beach on your doorstep', 'Dorfabend oder Strand vor der Tür', 'Noches de pueblo o playa en la puerta', 'Dorpsavonden of het strand voor de deur', 'Bykvällar eller stranden utanför dörren'),
    paragraphs: textList(
      [
        'Frigiliana is busy by day and quiet from early evening; the sea is an outing, not a given. The slope comes with it: stay higher up in the Barribarto and you climb it twice a day.',
        'If you want to walk out with a towel every morning, need level streets or would rather manage without a car, Nerja is the better base. AMARA Playa there is 200 metres from the beach, has a lift, and the bus runs straight from the airport.'
      ],
      [
        'Frigiliana ist tagsüber gut besucht und ab dem frühen Abend ruhig; das Meer ist ein Ausflug, keine Selbstverständlichkeit. Der Hang gehört dazu: Wer höher im Barribarto wohnt, hat ihn jeden Tag zweimal.',
        'Wer jeden Morgen mit dem Handtuch aus der Tür will, ebene Wege braucht oder lieber ohne Auto bleibt, wohnt besser in Nerja. AMARA Playa liegt dort 200 Meter vom Strand, mit Aufzug und dem Bus direkt vom Flughafen.'
      ],
      [
        'Frigiliana está llena de día y tranquila desde primera hora de la tarde; el mar es una salida, no algo dado. La cuesta va incluida: quien se aloja más arriba, en el Barribarto, la sube y baja cada día.',
        'Si queréis salir cada mañana con la toalla, necesitáis calles llanas o preferís no depender del coche, Nerja es la mejor base. Allí AMARA Playa está a 200 metros de la playa, tiene ascensor y el autobús llega directo desde el aeropuerto.'
      ],
      [
        'Frigiliana is overdag druk en vanaf de vroege avond rustig; de zee is een uitstapje, geen vanzelfsprekendheid. De helling hoort erbij: wie hoger in het Barribarto verblijft, loopt hem elke dag twee keer.',
        'Wie elke ochtend met de handdoek de deur uit wil, vlakke straten nodig heeft of liever zonder auto blijft, zit beter in Nerja. AMARA Playa ligt daar 200 meter van het strand, heeft een lift en de bus rijdt rechtstreeks vanaf de luchthaven.'
      ],
      [
        'Frigiliana är välbesökt på dagen och lugnt från tidig kväll; havet är en utflykt, inget självklart. Sluttningen hör till: den som bor högre upp i Barribarto går den två gånger om dagen.',
        'Vill ni gå ut med handduken varje morgon, behöver plana gator eller helst klarar er utan bil är Nerja den bättre basen. AMARA Playa ligger där 200 meter från stranden, har hiss och bussen går direkt från flygplatsen.'
      ]
    ),
    axes: [
      {
        id: 'doorstep' as const,
        title: text('On your doorstep', 'Vor der Tür', 'En la puerta', 'Voor de deur', 'Utanför dörren'),
        frigiliana: text('White lanes, Calle Real with its restaurants, the village to yourselves from the evening', 'Weiße Gassen, die Calle Real mit Restaurants, ab dem Abend das Dorf für euch', 'Calles blancas, la calle Real con sus restaurantes, el pueblo para vosotros desde la tarde', 'Witte straatjes, de Calle Real met restaurants, vanaf de avond het dorp voor jullie', 'Vita gränder, Calle Real med restauranger, från kvällen byn för er'),
        nerja: text('Torrecilla beach 200 metres away, the Balcón 500, the promenade for the evening', 'Strand Torrecilla 200 Meter, Balcón 500, die Promenade für den Abend', 'La playa de Torrecilla a 200 metros, el Balcón a 500, el paseo para la noche', 'Het strand Torrecilla op 200 meter, de Balcón op 500, de boulevard voor de avond', 'Stranden Torrecilla 200 meter bort, Balcón 500, promenaden för kvällen')
      },
      {
        id: 'sea' as const,
        title: text('Getting to the sea', 'Der Weg zum Meer', 'Llegar al mar', 'Naar zee', 'Vägen till havet'),
        frigiliana: text('Ten minutes down, by car, bus or taxi', 'Zehn Minuten hinunter, mit Auto, Bus oder Taxi', 'Diez minutos bajando, en coche, autobús o taxi', 'Tien minuten naar beneden, met auto, bus of taxi', 'Tio minuter nedför, med bil, buss eller taxi'),
        nerja: text('Into the water before breakfast, on foot', 'Vor dem Frühstück ins Wasser, zu Fuß', 'Al agua antes de desayunar, a pie', 'Vóór het ontbijt het water in, te voet', 'I vattnet före frukost, till fots')
      },
      {
        id: 'steps' as const,
        title: text('Steps and slopes', 'Stufen und Steigungen', 'Escalones y cuestas', 'Treden en hellingen', 'Trappor och backar'),
        frigiliana: text('A hillside village with cobbles and steps; level along the lower main axis', 'Hangdorf mit Pflaster und Stufen; unten an der Hauptachse eben', 'Pueblo en ladera con empedrado y escalones; llano en el eje principal de abajo', 'Hellingdorp met kasseien en treden; vlak langs de lagere hoofdas', 'Sluttningsby med kullersten och trappor; plant längs det nedre huvudstråket'),
        nerja: text('Level in the centre; uphill only towards Burriana and the upper districts', 'Im Zentrum eben; bergauf nur Richtung Burriana und in die oberen Viertel', 'Llano en el centro; cuesta arriba solo hacia Burriana y los barrios altos', 'Vlak in het centrum; omhoog alleen richting Burriana en de hogere wijken', 'Plant i centrum; uppför bara mot Burriana och de övre kvarteren')
      },
      {
        id: 'car' as const,
        title: text('Car', 'Auto', 'Coche', 'Auto', 'Bil'),
        frigiliana: text('Unnecessary in the village, useful for beaches and day trips', 'Im Dorf verzichtbar, für Strand und Ausflüge hilfreich', 'Innecesario en el pueblo, útil para playas y excursiones', 'In het dorp overbodig, handig voor stranden en uitstapjes', 'Onödig i byn, användbar för stränder och utflykter'),
        nerja: text('Unnecessary; one or two rental days for Maro and the Axarquía', 'Verzichtbar; für Maro und die Axarquía ein, zwei Miettage', 'Innecesario; uno o dos días de alquiler para Maro y la Axarquía', 'Overbodig; een of twee huurdagen voor Maro en de Axarquía', 'Onödig; en eller två hyrdagar för Maro och Axarquía')
      }
    ],
    ctas: [cta('COMPARISON', text('Compare everyday life in Frigiliana and Nerja', 'Frigiliana und Nerja im Alltag vergleichen', 'Comparar el día a día en Frigiliana y Nerja', 'Het dagelijks leven in Frigiliana en Nerja vergelijken', 'Jämför vardagen i Frigiliana och Nerja'))]
  },
  planning: {
    eyebrow: text('CLOSER TO THE VILLAGE', 'NÄHER AM DORF', 'MÁS CERCA DEL PUEBLO', 'DICHTER BIJ HET DORP', 'NÄRMARE BYN'),
    title: text('When the village becomes everyday life', 'Wenn das Dorf Alltag wird', 'Cuando el pueblo se vuelve cotidiano', 'Als het dorp dagelijks leven wordt', 'När byn blir vardag'),
    intro: text('After two days you know the way to the bakery and the table for the evening. The car stays parked.', 'Nach zwei Tagen kennt ihr den Weg zur Bäckerei und den Tisch für den Abend. Das Auto bleibt stehen.', 'A los dos días conocéis el camino a la panadería y la mesa para la noche. El coche se queda aparcado.', 'Na twee dagen kennen jullie de weg naar de bakker en de tafel voor de avond. De auto blijft staan.', 'Efter två dagar känner ni vägen till bageriet och bordet för kvällen. Bilen står kvar.'),
    gettingThere: { label: text('An hour from Málaga', 'Eine Stunde ab Málaga', 'Una hora desde Málaga', 'Een uur vanaf Málaga', 'En timme från Málaga'), text: text('By rental car up via Nerja, by bus with a change in Nerja. Park below, the last five minutes on foot.', 'Mit dem Mietwagen über Nerja hinauf, mit dem Bus mit Umstieg in Nerja. Unten parken, die letzten fünf Minuten zu Fuß.', 'En coche de alquiler subiendo por Nerja, en autobús con cambio en Nerja. Aparcar abajo, los últimos cinco minutos a pie.', 'Met de huurauto via Nerja omhoog, met de bus met overstap in Nerja. Beneden parkeren, de laatste vijf minuten te voet.', 'Med hyrbil upp via Nerja, med buss med byte i Nerja. Parkera nedanför, de sista fem minuterna till fots.') },
    parking: { label: text('Parking on Avenida Carlos Cano', 'Parken an der Avenida Carlos Cano', 'Aparcar en la avenida Carlos Cano', 'Parkeren aan Avenida Carlos Cano', 'Parkering på Avenida Carlos Cano'), text: text('Before eleven or after five there is almost always space. From there five minutes uphill to our green front door.', 'Vor elf oder nach fünf ist fast immer Platz. Von dort fünf Minuten bergauf bis zu unserer grünen Haustür.', 'Antes de las once o después de las cinco casi siempre hay sitio. Desde ahí cinco minutos cuesta arriba hasta nuestra puerta verde.', 'Voor elf of na vijf uur is er bijna altijd plek. Van daar vijf minuten omhoog naar onze groene voordeur.', 'Före elva eller efter fem finns det nästan alltid plats. Därifrån fem minuter uppför till vår gröna ytterdörr.') },
    stairs: { label: text('Old town, newer village or campo', 'Altstadt, neuer Ort oder Campo', 'Casco antiguo, parte nueva o campo', 'Oude kern, nieuwer deel of campo', 'Gamla byn, nya delen eller campo'), text: text('Where you stay decides how many steps lie between you and the morning coffee. We are down on the main axis.', 'Wo ihr wohnt, entscheidet, wie viele Stufen zwischen euch und dem Morgenkaffee liegen. Wir wohnen unten an der Hauptachse.', 'Dónde os alojáis decide cuántos escalones hay entre vosotros y el café de la mañana. Nosotros estamos abajo, en el eje principal.', 'Waar jullie wonen, bepaalt hoeveel treden er tussen jullie en de ochtendkoffie liggen. Wij zitten beneden aan de hoofdas.', 'Var ni bor avgör hur många trappsteg som ligger mellan er och morgonkaffet. Vi bor nere vid huvudstråket.') },
    dailyLife: { label: text('Bread at Manolo’s, groceries at Silvia’s', 'Brot bei Manolo, Einkauf bei Silvia', 'El pan en Manolo, la compra en Silvia', 'Brood bij Manolo, boodschappen bij Silvia', 'Bröd hos Manolo, matinköp hos Silvia'), text: text('The bakery is four minutes along Calle Real, the supermarket a few steps to the right out of the front door. For the big shop you drive to Nerja.', 'Die Bäckerei liegt vier Minuten über die Calle Real, der Supermarkt ein paar Schritte rechts aus der Haustür. Für den Großeinkauf fahrt ihr nach Nerja.', 'La panadería está a cuatro minutos por la calle Real, el supermercado a unos pasos a la derecha al salir. Para la compra grande bajáis a Nerja.', 'De bakker ligt vier minuten via Calle Real, de supermarkt een paar stappen rechts de voordeur uit. Voor de grote boodschappen rijd je naar Nerja.', 'Bageriet ligger fyra minuter bort längs Calle Real, mataffären några steg till höger utanför dörren. För storhandlingen kör ni till Nerja.') },
    comparison: { label: text('Frigiliana or Nerja', 'Frigiliana oder Nerja', 'Frigiliana o Nerja', 'Frigiliana of Nerja', 'Frigiliana eller Nerja'), text: text('Compare village life with a stay by the coast.', 'Dorfleben mit einem Aufenthalt an der Küste vergleichen.', 'Comparar la vida de pueblo con una estancia en la costa.', 'Vergelijk dorpsleven met een verblijf aan de kust.', 'Jämför byliv med en vistelse vid kusten.') },
    weather: { label: text('Weather and seasons', 'Wetter und Jahreszeiten', 'Tiempo y estaciones', 'Weer en seizoenen', 'Väder och årstider'), text: text('Choose the best rhythm for walking, terraces and coast.', 'Den passenden Rhythmus für Wege, Terrasse und Küste finden.', 'Elegir el mejor ritmo para caminar, terraza y costa.', 'Kies het beste ritme voor wandelen, terras en kust.', 'Välj rätt rytm för promenader, terrass och kust.') },
    winter: { label: text('Winter in the village', 'Winter im Dorf', 'Invierno en el pueblo', 'Winter in het dorp', 'Vinter i byn'), text: text('Quiet days, steep lanes even in rain, heating in all four apartments and pellet stoves in Lounis, Zaid and Maha. Stays from a few nights to three weeks.', 'Ruhige Tage, steile Gassen auch bei Regen, Heizung in allen vier Wohnungen und Pelletofen in Lounis, Zaid und Maha. Aufenthalte von ein paar Nächten bis drei Wochen.', 'Días tranquilos, calles empinadas también con lluvia, calefacción en los cuatro apartamentos y estufa de pellets en Lounis, Zaid y Maha. Estancias de unas noches hasta tres semanas.', 'Rustige dagen, steile straatjes ook bij regen, verwarming in alle vier de appartementen en een pelletkachel in Lounis, Zaid en Maha. Verblijven van een paar nachten tot drie weken.', 'Lugna dagar, branta gränder även i regn, värme i alla fyra lägenheterna och pelletskamin i Lounis, Zaid och Maha. Vistelser från några nätter upp till tre veckor.') },
    faq: { label: text('Frigiliana FAQ', 'Fragen zu Frigiliana', 'Preguntas sobre Frigiliana', 'Vragen over Frigiliana', 'Frågor om Frigiliana'), text: text('Car? Not in the village, yes for beaches and day trips. Back from Nerja in the evening: taxi. Luggage: hand luggage is fine, a heavy suitcase feels the 30 steps.', 'Auto? Im Dorf nicht, für Strände und Ausflüge ja. Abends aus Nerja zurück: Taxi. Gepäck: Handgepäck geht, ein schwerer Koffer merkt die 30 Stufen.', '¿Coche? En el pueblo no; para playas y excursiones, sí. Volver de Nerja de noche: en taxi. Equipaje: con equipaje de mano se va bien, una maleta pesada nota los 30 escalones.', 'Auto? In het dorp niet, voor stranden en uitstapjes wel. ’s Avonds terug uit Nerja: taxi. Bagage: handbagage gaat prima, een zware koffer voelt de 30 treden.', 'Bil? Inte i byn, men till stränder och utflykter. Hem från Nerja på kvällen: taxi. Bagage: handbagage går bra, en tung resväska känner de 30 trappstegen.') },
    propertyForSale: { label: text('Property for sale', 'Immobilie zu verkaufen', 'Casa en venta', 'Pand te koop', 'Fastighet till salu'), text: text('A Frigiliana property for sale — the details and how to get in touch.', 'Eine Immobilie in Frigiliana zu verkaufen — die Details und wie ihr Kontakt aufnehmt.', 'Una propiedad en Frigiliana en venta: los detalles y cómo contactar.', 'Een pand in Frigiliana te koop — de gegevens en hoe je contact opneemt.', 'En fastighet i Frigiliana till salu — detaljerna och hur ni tar kontakt.') },
    oldTown: { label: text('Old town and history', 'Altstadt und Geschichte', 'Casco antiguo e historia', 'Oude kern en geschiedenis', 'Gamla byn och historia'), text: text('Walk past the ceramic panels, El Ingenio and San Antonio.', 'Keramiktafeln, El Ingenio und San Antonio entdecken.', 'Pasear por los paneles, El Ingenio y San Antonio.', 'Loop langs de keramiekpanelen, El Ingenio en San Antonio.', 'Promenera förbi keramikpanelerna, El Ingenio och San Antonio.') },
    reviews: { label: text('Guest reviews', 'Gästebewertungen', 'Opiniones de huéspedes', 'Gastenbeoordelingen', 'Gästrecensioner'), text: text('Read what guests mention after their stay.', 'Lesen, was Gäste nach ihrem Aufenthalt erwähnen.', 'Leer qué cuentan los huéspedes después de su estancia.', 'Lees wat gasten na hun verblijf noemen.', 'Läs vad gäster berättar efter vistelsen.') },
    amenities: { label: text('Comfort and amenities', 'Komfort und Ausstattung', 'Comodidad y equipamiento', 'Comfort en voorzieningen', 'Komfort och utrustning'), text: text('Check the details of each AMARA stay.', 'Die Ausstattung jeder AMARA Unterkunft ansehen.', 'Consultar el equipamiento de cada alojamiento AMARA.', 'Bekijk de details van elk AMARA-verblijf.', 'Se detaljerna för varje AMARA-boende.') }
  },
  journeyBridge: {
    eyebrow: text('MORE OF ANDALUSIA', 'MEHR VON ANDALUSIEN', 'MÁS DE ANDALUCÍA', 'MEER VAN ANDALUSIË', 'MER AV ANDALUSIEN'),
    title: text('Make Frigiliana the calm part of a wider trip', 'Macht Frigiliana zum ruhigen Teil einer größeren Reise', 'Haced de Frigiliana la parte tranquila de un viaje más amplio', 'Maak Frigiliana het rustige deel van een grotere reis', 'Låt Frigiliana bli den lugna delen av en större resa'),
    text: text('Málaga, Granada and the Caminito del Rey can fill the bigger days. Back in Frigiliana, you walk to dinner and slow down again.', 'Málaga, Granada oder der Caminito del Rey füllen die großen Tage. Zurück in Frigiliana geht ihr zu Fuß zum Essen und schaltet wieder einen Gang herunter.', 'Málaga, Granada o el Caminito del Rey llenan los días grandes. De vuelta en Frigiliana vais andando a cenar y bajáis el ritmo.', 'Málaga, Granada of de Caminito del Rey vullen de grote dagen. Terug in Frigiliana lopen jullie naar het eten en gaat het tempo weer omlaag.', 'Málaga, Granada eller Caminito del Rey fyller de stora dagarna. Tillbaka i Frigiliana går ni till middagen och sänker tempot igen.'),
    ctaLabel: text('Plan day trips', 'Tagesausflüge planen', 'Planificar excursiones', 'Plan dagtochten', 'Planera dagsutflykter')
  },
  exploreBridge: {
    eyebrow: text('DAYS THAT BEGIN HERE', 'TAGE, DIE HIER BEGINNEN', 'DÍAS QUE EMPIEZAN AQUÍ', 'DAGEN DIE HIER BEGINNEN', 'DAGAR SOM BÖRJAR HÄR'),
    title: text('Village, mountains or sea, new every day', 'Dorf, Berge oder Meer, jeden Tag neu', 'Pueblo, montaña o mar, cada día distinto', 'Dorp, bergen of zee, elke dag opnieuw', 'By, berg eller hav, nytt varje dag'),
    text: text('Some days stay among the white lanes, others lead into the Sierra or down to the sea. In the evening you are back here.', 'Manche Tage bleiben zwischen den weißen Gassen, andere führen in die Sierra oder hinunter ans Meer. Abends seid ihr wieder hier.', 'Algunos días se quedan entre las callejuelas blancas, otros llevan a la sierra o bajan al mar. Por la noche estáis de vuelta aquí.', 'Sommige dagen blijven tussen de witte steegjes, andere leiden de Sierra in of naar beneden naar de zee. ’s Avonds zijn jullie weer hier.', 'Vissa dagar stannar bland de vita gränderna, andra leder in i Sierran eller ner till havet. På kvällen är ni tillbaka här.'),
    links: [
      {
        id: 'old-town',
        label: text('The twelve ceramic panels of 1569', 'Die zwölf Keramiktafeln von 1569', 'Los doce paneles de cerámica de 1569', 'De twaalf keramische panelen van 1569', 'De tolv keramikplattorna från 1569'),
        text: text('A walk through the Barribarto, an unhurried hour, and you know what happened here in 1569.', 'Ein Rundgang durch das Barribarto, eine geruhsame Stunde, und ihr wisst, was hier 1569 geschah.', 'Un recorrido por el Barribarto, una hora sin prisa, y sabréis lo que pasó aquí en 1569.', 'Een rondje door het Barribarto, een rustig uur, en jullie weten wat hier in 1569 gebeurde.', 'En runda genom Barribarto, en lugn timme, och ni vet vad som hände här 1569.')
      },
      {
        id: 'hiking',
        label: text('Four hikes from the village', 'Vier Wanderungen ab dem Dorf', 'Cuatro rutas de senderismo desde el pueblo', 'Vier wandelingen vanuit het dorp', 'Fyra vandringar från byn'),
        text: text('From the Cruz de Pinto panoramic trail to El Fuerte, 963 metres, four hours. In summer you set off early.', 'Vom Panoramaweg Cruz de Pinto bis zum El Fuerte, 963 Meter, vier Stunden. Im Sommer startet ihr früh.', 'Desde la ruta panorámica de la Cruz de Pinto hasta El Fuerte, 963 metros, cuatro horas. En verano salís temprano.', 'Van het panoramapad Cruz de Pinto tot El Fuerte, 963 meter, vier uur. In de zomer vertrekken jullie vroeg.', 'Från panoramaleden Cruz de Pinto till El Fuerte, 963 meter, fyra timmar. På sommaren ger ni er ut tidigt.')
      },
      {
        id: 'beaches',
        label: text('Spend a few hours by the sea', 'Für ein paar Stunden ans Meer', 'Pasar unas horas junto al mar', 'Ga een paar uur naar zee', 'Tillbringa några timmar vid havet'),
        text: text('Ten minutes down to Nerja: Calahonda before ten, paella at Burriana, and back when the evening belongs to Frigiliana again.', 'Zehn Minuten hinunter nach Nerja: Calahonda vor zehn Uhr, Paella am Burriana, und zurück, wenn der Abend wieder Frigiliana gehört.', 'Diez minutos bajando a Nerja: Calahonda antes de las diez, paella en Burriana, y de vuelta cuando la noche vuelve a ser de Frigiliana.', 'Tien minuten naar beneden naar Nerja: Calahonda vóór tienen, paella aan Burriana, en terug als de avond weer van Frigiliana is.', 'Tio minuter ner till Nerja: Calahonda före tio, paella vid Burriana, och tillbaka när kvällen åter tillhör Frigiliana.')
      },
      {
        id: 'all',
        label: text('More days around Frigiliana', 'Noch mehr Tage rund um Frigiliana', 'Más días alrededor de Frigiliana', 'Nog meer dagen rond Frigiliana', 'Fler dagar kring Frigiliana'),
        text: text('Restaurants, the Thursday market, a massage, Granada for a day.', 'Restaurants, der Donnerstagsmarkt, eine Massage, Granada für einen Tag.', 'Restaurantes, el mercado de los jueves, un masaje, Granada por un día.', 'Restaurants, de donderdagmarkt, een massage, Granada voor een dag.', 'Restauranger, torsdagsmarknaden, en massage, Granada för en dag.')
      }
    ]
  },
  decision: {
    eyebrow: text('CASA AMARA · FRIGILIANA', 'CASA AMARA · FRIGILIANA', 'CASA AMARA · FRIGILIANA', 'CASA AMARA · FRIGILIANA', 'CASA AMARA · FRIGILIANA'),
    staysEyebrow: text('FOUR STAYS · ONE VILLAGE HOUSE', 'VIER UNTERKÜNFTE · EIN DORFHAUS', 'CUATRO ALOJAMIENTOS · UNA CASA DE PUEBLO', 'VIER VERBLIJVEN · ÉÉN DORPSHUIS', 'FYRA BOENDEN · ETT BYHUS'),
    title: text('Stay inside the village, not beside it', 'Mitten im Dorf wohnen, nicht nur daneben', 'Alojarse dentro del pueblo, no solo a su lado', 'Verblijf ín het dorp, niet alleen ernaast', 'Bo inne i byn, inte bara bredvid den'),
    paragraphs: textList(
      ['Casa AMARA stands on Calle Chorruelo beside San Antonio. Open the front door and the old village is already there: dinner begins on foot, the walk home winds through familiar lanes, and the quieter hours arrive before and after the day visitors.'],
      ['Casa AMARA liegt in der Calle Chorruelo neben San Antonio. Wenn ihr die Haustür öffnet, seid ihr schon mitten im alten Dorf: Zum Abendessen geht ihr zu Fuß, der Heimweg führt durch vertraute Gassen und vor und nach den Tagesbesuchern beginnen die ruhigeren Stunden.'],
      ['Casa AMARA está en la calle Chorruelo, junto a San Antonio. Al abrir la puerta ya estáis dentro del pueblo antiguo: salís a cenar andando, volvéis por calles que pronto resultan familiares y compartís las horas más tranquilas antes y después de las visitas del día.'],
      ['Casa AMARA ligt aan Calle Chorruelo naast San Antonio. Zodra jullie de voordeur openen, staan jullie al in het oude dorp: uit eten begint te voet, de weg naar huis loopt door vertrouwde straatjes en vóór en na de dagjesmensen komen de rustigere uren terug.'],
      ['Casa AMARA ligger på Calle Chorruelo vid San Antonio. När ni öppnar ytterdörren är ni redan mitt i den gamla byn: middagen börjar till fots, hemvägen går genom gränder som snart känns bekanta och före och efter dagsbesökarna kommer de lugnare timmarna.']
    ),
    subsections: [
      {
        id: 'stays',
        title: text('Four hideaways behind one old village door', 'Vier Rückzugsorte hinter einer alten Dorfhaustür', 'Cuatro refugios tras una antigua puerta de pueblo', 'Vier bijzondere verblijven achter één oude dorpsdeur', 'Fyra personliga boenden bakom en gammal bydörr'),
        paragraphs: textList(
          ['Lounis, Zaid and Maha are apartments with private terraces. Farah is a compact suite without a private terrace. All four are on Calle Chorruelo beside San Antonio.'],
          ['Lounis, Zaid und Maha sind Apartments mit eigener Terrasse. Farah ist eine kompakte Suite ohne private Terrasse. Alle vier liegen in der Calle Chorruelo neben San Antonio.'],
          ['Lounis, Zaid y Maha son apartamentos con terraza privada. Farah es una suite compacta sin terraza privada. Los cuatro están en la calle Chorruelo, junto a San Antonio.'],
          ['Lounis, Zaid en Maha zijn appartementen met een eigen terras. Farah is een compacte suite zonder privéterras. Alle vier liggen aan Calle Chorruelo naast San Antonio.'],
          ['Lounis, Zaid och Maha är lägenheter med egen terrass. Farah är en kompakt svit utan privat terrass. Alla fyra ligger på Calle Chorruelo vid San Antonio.']
        ),
        ctas: [
          cta('FRIGILIANA_STAYS', text('View stays in Frigiliana', 'Unterkünfte in Frigiliana ansehen', 'Ver alojamientos en Frigiliana', 'Bekijk verblijven in Frigiliana', 'Se boenden i Frigiliana')),
          cta('COMPARISON', text('Compare Frigiliana and Nerja', 'Frigiliana und Nerja vergleichen', 'Comparar Frigiliana y Nerja', 'Frigiliana en Nerja vergelijken', 'Jämför Frigiliana och Nerja')),
          cta('AVAILABILITY', text('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet'))
        ]
      }
    ],
    ctas: [],
    archetypes: [
      {
        id: 'lounis',
        title: 'Lounis',
        consequence: text(
          'You stay in an apartment with a private terrace on Calle Chorruelo.',
          'Ihr wohnt in einem Apartment mit eigener Terrasse an der Calle Chorruelo.',
          'Os alojáis en un apartamento con terraza privada en la calle Chorruelo.',
          'Jullie verblijven in een appartement met eigen terras aan Calle Chorruelo.',
          'Ni bor i en lägenhet med egen terrass på Calle Chorruelo.'
        )
      },
      {
        id: 'zaid',
        title: 'Zaid',
        consequence: text(
          'You have a private terrace; San Antonio is right beside you in the old village.',
          'Ihr habt eine eigene Terrasse; San Antonio liegt gleich nebenan in der Altstadt.',
          'Tenéis terraza privada; San Antonio queda justo al lado, en el casco antiguo.',
          'Jullie hebben een eigen terras; San Antonio ligt er vlak naast in de oude kern.',
          'Ni har en egen terrass; San Antonio ligger alldeles intill i gamla byn.'
        )
      },
      {
        id: 'maha',
        title: 'Maha',
        consequence: text(
          'This apartment also has a private terrace, behind the same old village door.',
          'Auch dieses Apartment hat eine eigene Terrasse, hinter derselben alten Dorfhaustür.',
          'Este apartamento también tiene terraza privada, tras la misma puerta antigua del pueblo.',
          'Ook dit appartement heeft een eigen terras, achter dezelfde oude dorpsdeur.',
          'Även den här lägenheten har en egen terrass, bakom samma gamla bydörr.'
        )
      },
      {
        id: 'farah',
        title: 'Farah',
        consequence: text(
          'A compact suite without a private terrace, at the same Calle Chorruelo address.',
          'Eine kompakte Suite ohne private Terrasse, an derselben Adresse in der Calle Chorruelo.',
          'Una suite compacta sin terraza privada, en la misma dirección de la calle Chorruelo.',
          'Een compacte suite zonder privéterras, op hetzelfde adres aan Calle Chorruelo.',
          'En kompakt svit utan privat terrass, på samma adress på Calle Chorruelo.'
        )
      }
    ],
    facts: [
      {
        id: 'walkable-core',
        value: text(
          'Restaurants are within walking distance from the old village.',
          'Restaurants erreicht ihr von der Altstadt aus zu Fuß.',
          'Desde el casco antiguo podéis ir andando a los restaurantes.',
          'Vanuit de oude kern lopen jullie naar de restaurants.',
          'Från gamla byn går ni till restaurangerna.'
        )
      },
      {
        id: 'terrain',
        value: text(
          'Slopes, historic paving and steps remain part of the stay.',
          'Steigungen, historisches Pflaster und Stufen bleiben Teil des Aufenthalts.',
          'Las pendientes, el empedrado histórico y los escalones forman parte de la estancia.',
          'Hellingen, historische bestrating en trappen blijven onderdeel van het verblijf.',
          'Backar, historisk stenläggning och trappor är en del av vistelsen.'
        )
      },
      {
        id: 'parking',
        value: text(
          'There is no private parking at the house.',
          'Am Haus gibt es keinen privaten Parkplatz.',
          'La casa no dispone de aparcamiento privado.',
          'Bij het huis is geen eigen parkeerplaats.',
          'Det finns ingen privat parkering vid huset.'
        )
      }
    ]
  } satisfies LocalizedDecisionModule
};

export function getFrigilianaLocationCopy(lang: AmaraLanguage): FrigilianaLocationPageCopy {
  return resolveLocale(frigilianaLocationCopy, lang) as FrigilianaLocationPageCopy;
}
