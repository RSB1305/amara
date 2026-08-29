import type { LocalizedText, LocalizedTextList } from '../types/content';
import { resolveLocale } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

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

export interface FrigilianaLocationPageCopy {
  heroKicker: string;
  h1: string;
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
    faq: { label: string; text: string };
    filmLocations: { label: string; text: string };
    oldTown: { label: string; text: string };
    reviews: { label: string; text: string };
    amenities: { label: string; text: string };
  };
  journeyBridge?: { eyebrow: string; title: string; text: string; ctaLabel: string };
  exploreBridge: { eyebrow: string; title: string; text: string; ctaLabel: string };
  decision: FrigilianaLocationModule;
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

const cta = (token: FrigilianaLocationCtaToken, label: LocalizedText): LocalizedCta => ({
  token,
  label
});

export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-frigiliana-location-v3.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-18',
    dateModified: '2026-08-29',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'amara-about-us'
  },
  ogImage: '/images/amara-lounis/15-amara-frigiliana.jpg',
  languages: {
    de: {
      title: 'In Frigiliana übernachten | Altstadt & Meer | AMARA',
      description: 'Wohnt mitten in Frigilianas Altstadt: Restaurants zu Fuß, ruhige Morgen und Abende, Nerja und das Meer nur wenige Kilometer entfernt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    en: {
      title: 'Stay in Frigiliana | Historic Village & Coast | AMARA',
      description: 'Stay in Frigiliana old town: restaurants on foot, quieter mornings and evenings, with Nerja and the Mediterranean only a few kilometres away.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojarse en Frigiliana | Casco histórico y mar | AMARA',
      description: 'Alojaos en el casco antiguo de Frigiliana: restaurantes a pie, mañanas y noches tranquilas, con Nerja y el mar a pocos kilómetros.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Overnachten in Frigiliana | Historisch dorp & zee | AMARA',
      description: 'Verblijf midden in de oude kern van Frigiliana: restaurants op loopafstand en Nerja en de Middellandse Zee op enkele kilometers.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Bo i Frigiliana | Historisk by & havet | AMARA',
      description: 'Bo mitt i Frigilianas gamla by: restauranger till fots, lugnare morgnar och kvällar samt Nerja och havet några kilometer bort.',
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

export const frigilianaLocationHeroImageAlt: Record<AmaraLanguage, string> = {
  en: 'Frigiliana hillside homes in afternoon light',
  de: 'Häuser am Hang von Frigiliana im Nachmittagslicht',
  es: 'Casas en la ladera de Frigiliana a la luz de la tarde',
  nl: 'Huizen tegen de heuvel van Frigiliana in het middaglicht',
  sv: 'Hus på Frigilianas sluttning i eftermiddagsljus'
};

export const frigilianaLocationCopy = {
  heroKicker: text('FRIGILIANA · ANDALUSIA', 'FRIGILIANA · ANDALUSIEN', 'FRIGILIANA · ANDALUCÍA', 'FRIGILIANA · ANDALUSIË', 'FRIGILIANA · ANDALUSIEN'),
  h1: text(
    'Stay in Frigiliana: the old village outside, the sea nearby',
    'In Frigiliana wohnen: Altstadt vor der Tür, Meer in der Nähe',
    'Alojarse en Frigiliana: el casco antiguo a la puerta y el mar cerca',
    'Overnachten in Frigiliana: de oude kern voor de deur, de zee dichtbij',
    'Bo i Frigiliana: gamla byn utanför dörren och havet nära'
  ),
  heroUpdated: text('Reviewed August 2026', 'Geprüft im August 2026', 'Revisado en agosto de 2026', 'Gecontroleerd in augustus 2026', 'Granskad i augusti 2026'),
  heroNote: text(
    'Our honest view of the village where we live and host.',
    'Unser ehrlicher Blick auf das Dorf, in dem wir selbst leben und Gastgeber sind.',
    'Nuestra visión sincera del pueblo en el que vivimos y recibimos a nuestros huéspedes.',
    'Onze eerlijke kijk op het dorp waar we zelf wonen en gasten ontvangen.',
    'Vår ärliga bild av byn där vi själva bor och tar emot gäster.'
  ),
  intro: textList(
    [
      'Frigiliana sits about six kilometres above Nerja. Stay here and the white lanes, small restaurants and mountain landscape are outside your door, while the coast remains close enough for a beach day. It is a hillside village, so cobbles, slopes and steps are an honest part of the stay.',
      'Casa AMARA is on Calle Chorruelo beside San Antonio church. From our door you can walk to cafés, restaurants and the village centre. The final approach from the main road is short but steep, and our stays do not have private parking.'
    ],
    [
      'Frigiliana liegt rund sechs Kilometer oberhalb von Nerja. Wer hier übernachtet, hat die weißen Gassen, kleine Restaurants und die Berglandschaft direkt vor der Tür; für einen Strandtag bleibt die Küste nah. Das Dorf liegt am Hang, deshalb gehören Pflaster, Steigungen und Stufen ehrlich zum Aufenthalt.',
      'Casa AMARA liegt in der Calle Chorruelo neben der Kirche San Antonio. Von unserer Tür erreicht ihr Cafés, Restaurants und den Ortskern zu Fuß. Der letzte Weg von der Hauptstraße ist kurz, aber steil, und einen privaten Parkplatz haben die Unterkünfte nicht.'
    ],
    [
      'Frigiliana está a unos seis kilómetros por encima de Nerja. Al alojaros aquí tenéis las calles blancas, pequeños restaurantes y la montaña a la puerta, mientras la costa sigue cerca para pasar el día en la playa. Es un pueblo en cuesta, así que el empedrado, las pendientes y los escalones forman parte real de la estancia.',
      'Casa AMARA está en la calle Chorruelo, junto a la iglesia de San Antonio. Desde nuestra puerta podéis ir andando a cafeterías, restaurantes y al centro. El último tramo desde la carretera principal es corto pero empinado, y los alojamientos no tienen aparcamiento privado.'
    ],
    [
      'Frigiliana ligt ongeveer zes kilometer boven Nerja. Wie hier verblijft, heeft de witte straatjes, kleine restaurants en het berglandschap voor de deur, terwijl de kust dichtbij blijft voor een stranddag. Het dorp ligt tegen een helling, dus keien, hoogteverschillen en trappen horen eerlijk bij het verblijf.',
      'Casa AMARA ligt aan Calle Chorruelo, naast de kerk van San Antonio. Vanaf onze deur lopen jullie naar cafés, restaurants en het dorpscentrum. De laatste route vanaf de hoofdweg is kort maar steil, en onze verblijven hebben geen eigen parkeerplaats.'
    ],
    [
      'Frigiliana ligger omkring sex kilometer ovanför Nerja. När ni bor här finns de vita gränderna, små restauranger och bergslandskapet utanför dörren, samtidigt som kusten är nära för en stranddag. Byn ligger på en sluttning, så stenläggning, backar och trappor är en naturlig del av vistelsen.',
      'Casa AMARA ligger på Calle Chorruelo intill kyrkan San Antonio. Från vår dörr går ni till kaféer, restauranger och byns centrum. Den sista vägen upp från huvudgatan är kort men brant, och boendena har ingen privat parkering.'
    ]
  ),
  introPullLine: text(
    'You wake up in the village and walk home after dinner.',
    'Morgens seid ihr schon im Dorf, abends geht ihr nach dem Essen einfach nach Hause.',
    'Por la mañana ya estáis en el pueblo y, después de cenar, volvéis a casa andando.',
    'Jullie worden wakker in het dorp en lopen na het eten naar huis.',
    'Ni vaknar i byn och promenerar hem efter middagen.'
  ),
  orientation: {
    eyebrow: text('LOCATION', 'LAGE', 'UBICACIÓN', 'LIGGING', 'LÄGE'),
    title: text('Where is Frigiliana?', 'Wo liegt Frigiliana?', '¿Dónde está Frigiliana?', 'Waar ligt Frigiliana?', 'Var ligger Frigiliana?'),
    paragraphs: textList(
      [
        'Frigiliana lies in the Axarquía, on the southern slope of the Sierra de Almijara. Nerja and the Mediterranean are about six kilometres downhill.',
        'Casa AMARA is on Calle Chorruelo, the continuation of Calle Real. The church, restaurants and the heart of the old village are close by.'
      ],
      [
        'Frigiliana liegt in der Axarquía am Südhang der Sierra de Almijara. Nerja und das Mittelmeer liegen rund sechs Kilometer weiter unten.',
        'Casa AMARA liegt an der Calle Chorruelo, der Fortsetzung der Calle Real. Kirche, Restaurants und das Herz der Altstadt sind ganz in der Nähe.'
      ],
      [
        'Frigiliana está en la Axarquía, en la ladera sur de la Sierra de Almijara. Nerja y el Mediterráneo quedan unos seis kilómetros más abajo.',
        'Casa AMARA está en la calle Chorruelo, continuación de la calle Real. La iglesia, los restaurantes y el centro del casco antiguo están muy cerca.'
      ],
      [
        'Frigiliana ligt in de Axarquía, op de zuidhelling van de Sierra de Almijara. Nerja en de Middellandse Zee liggen ongeveer zes kilometer lager.',
        'Casa AMARA ligt aan Calle Chorruelo, in het verlengde van Calle Real. De kerk, restaurants en het hart van de oude kern zijn vlakbij.'
      ],
      [
        'Frigiliana ligger i Axarquía på Sierra de Almijaras sydsluttning. Nerja och Medelhavet ligger omkring sex kilometer längre ner.',
        'Casa AMARA ligger på Calle Chorruelo, fortsättningen av Calle Real. Kyrkan, restaurangerna och gamla byns centrum finns alldeles nära.'
      ]
    ),
    facts: [
      { id: 'nerja', value: text('6 km', '6 km', '6 km', '6 km', '6 km'), label: text('to Nerja and the coast', 'bis Nerja und zur Küste', 'hasta Nerja y la costa', 'naar Nerja en de kust', 'till Nerja och kusten') },
      { id: 'old-town', value: text('Old town', 'Altstadt', 'Casco antiguo', 'Oude kern', 'Gamla byn'), label: text('restaurants and cafés on foot', 'Restaurants und Cafés zu Fuß', 'restaurantes y cafeterías a pie', 'restaurants en cafés te voet', 'restauranger och kaféer till fots') },
      { id: 'hillside', value: text('Hillside village', 'Hangdorf', 'Pueblo en cuesta', 'Dorp op een helling', 'By på en sluttning'), label: text('cobbles, slopes and steps', 'Pflaster, Steigungen und Stufen', 'empedrado, pendientes y escalones', 'keien, hellingen en trappen', 'stenläggning, backar och trappor') }
    ],
    mapLabel: text('Orientation from Málaga via Nerja to Frigiliana and Casa AMARA', 'Orientierung von Málaga über Nerja nach Frigiliana und Casa AMARA', 'Orientación desde Málaga, pasando por Nerja, hasta Frigiliana y Casa AMARA', 'Oriëntatie van Málaga via Nerja naar Frigiliana en Casa AMARA', 'Orientering från Málaga via Nerja till Frigiliana och Casa AMARA'),
    mapNote: text('Not to scale', 'Nicht maßstabsgetreu', 'No está a escala', 'Niet op schaal', 'Inte skalenlig'),
    geographyLabel: text('See the geography guide', 'Geografie ansehen', 'Ver la guía geográfica', 'Bekijk de geografiegids', 'Se geografisidan'),
    arrivalLabel: text('Plan your arrival', 'Anreise planen', 'Planificar la llegada', 'Plan jullie aankomst', 'Planera ankomsten'),
    routeLabel: text('Open route from the airport', 'Route ab Flughafen öffnen', 'Abrir ruta desde el aeropuerto', 'Route vanaf de luchthaven openen', 'Öppna rutten från flygplatsen')
  },
  evening: {
    title: text('When the day visitors leave', 'Wenn die Tagesbesucher gehen', 'Cuando se marchan los visitantes del día', 'Wanneer de dagjesmensen vertrekken', 'När dagsbesökarna lämnar'),
    paragraphs: textList(
      [
        'Frigiliana is popular during the day. Early in the morning and later in the evening, the lanes usually feel calmer and the village belongs more to the people staying here.',
        'You can walk out for dinner, have a drink and return through the old streets without getting back in the car.',
        'It is still a living village, not a promise of silence. Summer weekends and festivals can be busy.'
      ],
      [
        'Tagsüber ist Frigiliana gut besucht. Früh am Morgen und später am Abend werden die Gassen meist ruhiger, und das Dorf gehört wieder mehr den Menschen, die hier wohnen.',
        'Ihr könnt zu Fuß zum Essen gehen, noch etwas trinken und später durch die Altstadt nach Hause laufen – ganz ohne Auto.',
        'Frigiliana bleibt ein lebendiges Dorf, keine Garantie auf Stille. Im Sommer, an Wochenenden und bei Festen kann es voll werden.'
      ],
      [
        'Durante el día Frigiliana recibe muchos visitantes. A primera hora y al final de la tarde las calles suelen estar más tranquilas, y el pueblo vuelve a sentirse de quienes se quedan.',
        'Podéis salir andando a cenar, tomar algo y volver a casa por el casco antiguo sin coger el coche.',
        'Sigue siendo un pueblo vivo, no una promesa de silencio. En verano, los fines de semana y durante las fiestas puede haber ambiente.'
      ],
      [
        'Overdag trekt Frigiliana veel bezoekers. Vroeg in de ochtend en later op de avond worden de straatjes meestal rustiger en voelt het dorp weer meer van de mensen die er verblijven.',
        'Jullie lopen naar een restaurant, drinken nog iets en gaan daarna door de oude straatjes naar huis, zonder opnieuw in de auto te stappen.',
        'Het blijft een levend dorp, geen belofte van stilte. In de zomer, in weekenden en tijdens feesten kan het druk zijn.'
      ],
      [
        'På dagen får Frigiliana många besökare. Tidigt på morgonen och senare på kvällen blir gränderna oftast lugnare och byn känns mer som en plats för dem som stannar kvar.',
        'Ni kan gå ut och äta, ta något att dricka och sedan promenera hem genom gamla byn utan att använda bilen.',
        'Det är fortfarande en levande by, ingen garanti för tystnad. På sommaren, under helger och festivaler kan det vara mycket folk.'
      ]
    ),
    subsections: [],
    ctas: []
  } satisfies LocalizedModule,
  history: {
    title: text('An old village house shaped along with Frigiliana', 'Ein altes Dorfhaus, das mit Frigiliana gewachsen ist', 'Una casa de pueblo que creció con Frigiliana', 'Een oud dorpshuis dat met Frigiliana meegroeide', 'Ett gammalt byhus som har vuxit med Frigiliana'),
    paragraphs: textList(
      [
        'Just a few steps from Casa AMARA stands the church of San Antonio de Padua. The present building was completed in 1676 under the direction of Bernardo de Godoy. Around it lies the old village: white houses, narrow lanes and steps that have grown together over centuries.',
        'Casa AMARA cannot be tied to a single year of construction either. The house was extended, joined and altered over generations. That is why the rooms have different shapes, the walls are irregular and no two floors feel the same.'
      ],
      [
        'Nur wenige Schritte von Casa AMARA entfernt steht die Kirche San Antonio de Padua. Ihr heutiges Gebäude wurde 1676 unter der Leitung von Bernardo de Godoy fertiggestellt. Rundherum liegt der alte Dorfkern – ein über Jahrhunderte gewachsenes Geflecht aus weißen Häusern, schmalen Gassen und Treppen.',
        'Auch Casa AMARA lässt sich nicht auf ein einzelnes Baujahr festlegen. Das Haus wurde über Generationen erweitert, verbunden und verändert. Deshalb sind die Räume unterschiedlich geschnitten, die Mauern unregelmäßig und keine Etage gleicht der anderen.'
      ],
      [
        'A pocos pasos de Casa AMARA está la iglesia de San Antonio de Padua. El edificio actual se terminó en 1676 bajo la dirección de Bernardo de Godoy. A su alrededor se extiende el casco antiguo: casas blancas, callejuelas y escaleras que han ido creciendo juntas durante siglos.',
        'Casa AMARA tampoco se puede fechar en un único año. La casa se amplió, se unió y se transformó a lo largo de generaciones. Por eso cada estancia tiene una forma distinta, los muros son irregulares y ninguna planta se parece a otra.'
      ],
      [
        'Op een paar stappen van Casa AMARA staat de kerk van San Antonio de Padua. Het huidige gebouw werd in 1676 voltooid onder leiding van Bernardo de Godoy. Daaromheen ligt de oude dorpskern: witte huizen, smalle straatjes en trappen die in de loop van eeuwen met elkaar zijn vergroeid.',
        'Ook Casa AMARA is niet aan één bouwjaar te koppelen. Het huis werd door generaties heen uitgebreid, samengevoegd en veranderd. Daardoor heeft elke kamer een andere vorm, lopen de muren onregelmatig en voelt geen verdieping hetzelfde.'
      ],
      [
        'Bara några steg från Casa AMARA står kyrkan San Antonio de Padua. Den nuvarande byggnaden färdigställdes 1676 under ledning av Bernardo de Godoy. Runt den ligger den gamla bykärnan: vita hus, smala gränder och trappor som har vuxit samman under århundraden.',
        'Casa AMARA går inte heller att knyta till ett enda byggår. Huset har byggts ut, fogats samman och förändrats under generationer. Därför har rummen olika former, väggarna är oregelbundna och ingen våning är den andra lik.'
      ]
    ),
    subsections: [
      {
        id: 'restoration',
        title: text('Carefully restored for today', 'Behutsam für heute saniert', 'Restaurada con cuidado para el presente', 'Zorgvuldig gerestaureerd voor nu', 'Varsamt restaurerat för i dag'),
        paragraphs: textList(
          ['From 2020 to 2022, we carefully restored Casa AMARA. The irregular rooms, old surfaces and traces of the house’s gradual growth remain; we added the comfort needed for a relaxed stay.'],
          ['Von 2020 bis 2022 haben wir Casa AMARA behutsam saniert. Die unregelmäßigen Räume, alten Oberflächen und Spuren des gewachsenen Hauses sind geblieben; ergänzt haben wir den Komfort für einen entspannten Aufenthalt.'],
          ['Entre 2020 y 2022 restauramos Casa AMARA con cuidado. Conservamos las estancias irregulares, las superficies antiguas y las huellas de una casa que creció poco a poco; añadimos el confort necesario para una estancia tranquila.'],
          ['Van 2020 tot 2022 hebben we Casa AMARA zorgvuldig gerestaureerd. De onregelmatige kamers, oude oppervlakken en sporen van de geleidelijke groei zijn gebleven; we voegden het comfort voor een ontspannen verblijf toe.'],
          ['Mellan 2020 och 2022 restaurerade vi Casa AMARA varsamt. De oregelbundna rummen, äldre ytorna och spåren av hur huset har vuxit fram finns kvar; vi lade till den komfort som behövs för en avkopplande vistelse.']
        ),
        ctas: []
      }
    ],
    ctas: []
  } satisfies LocalizedModule,
  villageLife: {
    title: text('In the old village, with the hillside still part of it', 'Mitten in der Altstadt – und trotzdem bleibt es ein Hangdorf', 'En pleno casco antiguo, sin olvidar que es un pueblo en cuesta', 'Midden in de oude kern, maar nog steeds op een helling', 'Mitt i gamla byn – fortfarande på en sluttning'),
    paragraphs: textList(
      [
        'From our front door towards San Antonio, Calle Real and the village centre there are no further steps. The route still has historic paving and gentle gradients.',
        'The approach from the main road below is different: about 150 metres uphill, around 30 metres of height and roughly 30 steps. With limited mobility or heavy luggage, it is worth judging that honestly before booking.'
      ],
      [
        'Von unserer Haustür geht es in Richtung San Antonio, Calle Real und Ortskern ohne weitere Stufen. Historisches Pflaster und leichte Steigungen bleiben trotzdem Teil des Weges.',
        'Anders ist der Weg von der Hauptstraße unterhalb: etwa 150 Meter bergauf, rund 30 Höhenmeter und ungefähr 30 Stufen. Mit eingeschränkter Mobilität oder schwerem Gepäck solltet ihr das vor der Buchung ehrlich einschätzen.'
      ],
      [
        'Desde nuestra puerta hacia San Antonio, la calle Real y el centro no hay más escalones. El recorrido conserva, eso sí, el empedrado histórico y alguna pendiente suave.',
        'El acceso desde la carretera principal, más abajo, es distinto: unos 150 metros cuesta arriba, alrededor de 30 metros de desnivel y unos 30 escalones. Si tenéis movilidad reducida o equipaje pesado, conviene valorarlo con sinceridad antes de reservar.'
      ],
      [
        'Vanaf onze voordeur richting San Antonio, Calle Real en het dorpscentrum komen geen verdere trappen. Historische bestrating en lichte hellingen blijven wel onderdeel van de route.',
        'De weg vanaf de hoofdweg beneden is anders: ongeveer 150 meter omhoog, circa 30 hoogtemeters en rond de 30 treden. Met beperkte mobiliteit of zware bagage is het goed dit voor het boeken eerlijk te beoordelen.'
      ],
      [
        'Från vår ytterdörr mot San Antonio, Calle Real och byns centrum finns inga fler trappsteg. Historisk stenläggning och lätta lutningar är ändå en del av vägen.',
        'Vägen från huvudgatan nedanför är annorlunda: omkring 150 meter uppför, cirka 30 höjdmeter och ungefär 30 trappsteg. Vid begränsad rörlighet eller tungt bagage bör ni bedöma det ärligt före bokning.'
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
    title: text('Village life with the sea nearby', 'Im Dorf wohnen und trotzdem schnell ans Meer', 'Vivir en el pueblo con el mar cerca', 'In het dorp wonen met de zee dichtbij', 'Bo i byn med havet nära'),
    paragraphs: textList(
      ['Nerja is about six kilometres away. You can spend the day at the beach and still come home to dinner and a quieter evening in Frigiliana.'],
      ['Nerja liegt rund sechs Kilometer entfernt. Ihr könnt den Tag am Strand verbringen und trotzdem zum Abendessen und für einen ruhigeren Abend nach Frigiliana zurückkommen.'],
      ['Nerja está a unos seis kilómetros. Podéis pasar el día en la playa y volver a Frigiliana para cenar y disfrutar de una noche más tranquila.'],
      ['Nerja ligt op ongeveer zes kilometer. Jullie kunnen de dag aan het strand doorbrengen en voor het eten en een rustigere avond terugkeren naar Frigiliana.'],
      ['Nerja ligger omkring sex kilometer bort. Ni kan tillbringa dagen på stranden och ändå komma hem till middag och en lugnare kväll i Frigiliana.']
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
          ['Choose Nerja if the beach and coastal town should shape every day. Choose Frigiliana if you want the old village to shape your mornings and evenings.'],
          ['Wählt Nerja, wenn Strand und Küstenstadt jeden Tag bestimmen sollen. Wählt Frigiliana, wenn die Altstadt eure Morgen und Abende prägen darf.'],
          ['Elegid Nerja si la playa y la ciudad costera deben marcar cada día. Elegid Frigiliana si queréis que el casco antiguo forme parte de vuestras mañanas y noches.'],
          ['Kies Nerja als strand en kustplaats elke dag moeten bepalen. Kies Frigiliana als de oude kern jullie ochtenden en avonden mag vormen.'],
          ['Välj Nerja om stranden och kuststaden ska prägla varje dag. Välj Frigiliana om gamla byn ska forma era morgnar och kvällar.']
        ),
        ctas: [cta('COMPARISON', text('Compare Frigiliana and Nerja', 'Frigiliana und Nerja vergleichen', 'Comparar Frigiliana y Nerja', 'Frigiliana en Nerja vergelijken', 'Jämför Frigiliana och Nerja'))]
      }
    ],
    ctas: []
  } satisfies LocalizedModule,
  arrival: {
    title: text('Arrival in three steps', 'Die Ankunft in drei Schritten', 'La llegada en tres pasos', 'Aankomst in drie stappen', 'Ankomst i tre steg'),
    steps: [
      { id: 'transport', num: '01', headline: text('Choose how to travel', 'Anreise wählen', 'Elegir cómo llegar', 'Kies hoe jullie reizen', 'Välj resesätt'), text: text('Compare rental car, transfer and public transport via Nerja for your whole trip.', 'Vergleicht Mietwagen, Transfer und öffentliche Verbindungen über Nerja für eure gesamte Reise.', 'Comparad coche de alquiler, traslado y transporte público vía Nerja para todo el viaje.', 'Vergelijk huurauto, transfer en openbaar vervoer via Nerja voor jullie hele reis.', 'Jämför hyrbil, transfer och kollektivtrafik via Nerja för hela resan.') },
      { id: 'last-route', num: '02', headline: text('Plan the final approach', 'Letzten Weg planen', 'Planificar el último tramo', 'Plan de laatste route', 'Planera sista sträckan'), text: text('Parking, cobbles, slopes and steps matter more than the last few kilometres on the map.', 'Parken, Pflaster, Steigungen und Stufen sind wichtiger als die letzten Kilometer auf der Karte.', 'El aparcamiento, el empedrado, las pendientes y los escalones importan más que los últimos kilómetros del mapa.', 'Parkeren, keien, hellingen en trappen zijn belangrijker dan de laatste kilometers op de kaart.', 'Parkering, stenläggning, backar och trappor betyder mer än de sista kilometrarna på kartan.') },
      { id: 'guide', num: '03', headline: text('Check the detailed guide', 'Details vorab ansehen', 'Consultar la guía detallada', 'Bekijk vooraf de details', 'Läs detaljerna i förväg'), text: text('Our arrival guide brings the current route, parking and access information together.', 'Unser Anreise-Guide bündelt die aktuellen Angaben zu Route, Parken und Zugang.', 'Nuestra guía de llegada reúne la información actual sobre ruta, aparcamiento y acceso.', 'Onze aankomstgids bundelt de actuele informatie over route, parkeren en toegang.', 'Vår ankomstguide samlar aktuell information om väg, parkering och tillträde.') }
    ],
    detailLabel: text('Open the arrival guide', 'Anreise-Guide öffnen', 'Abrir la guía de llegada', 'Open de aankomstgids', 'Öppna ankomstguiden')
  },
  faq: {
    title: text('Practical questions', 'Praktische Fragen', 'Preguntas prácticas', 'Praktische vragen', 'Praktiska frågor'),
    items: [
      { id: 'car' as const, question: text('Do you need a car in Frigiliana?', 'Braucht ihr in Frigiliana ein Auto?', '¿Necesitáis coche en Frigiliana?', 'Hebben jullie een auto nodig in Frigiliana?', 'Behöver ni bil i Frigiliana?'), answer: text('Not for everyday time in the village. A car is useful for several beaches or excursions; bus and taxi can work for Nerja.', 'Nicht für den Alltag im Dorf. Für mehrere Strände oder Ausflüge ist ein Auto praktisch; für Nerja funktionieren auch Bus oder Taxi.', 'No para el día a día en el pueblo. Para varias playas o excursiones resulta práctico; para Nerja también sirven el autobús o el taxi.', 'Niet voor het dagelijks leven in het dorp. Voor meerdere stranden of uitstapjes is een auto handig; voor Nerja werken bus en taxi ook.', 'Inte för vardagen i byn. För flera stränder eller utflykter är en bil praktisk; till Nerja fungerar även buss eller taxi.') },
      { id: 'parking' as const, question: text('Is there parking at Casa AMARA?', 'Gibt es einen Parkplatz bei Casa AMARA?', '¿Hay aparcamiento en Casa AMARA?', 'Is er parkeergelegenheid bij Casa AMARA?', 'Finns parkering vid Casa AMARA?'), answer: text('No. The stays have no private parking. Public spaces are in the lower village and availability changes.', 'Nein. Die Unterkünfte haben keinen privaten Parkplatz. Öffentliche Plätze liegen im unteren Dorf und sind nicht garantiert.', 'No. Los alojamientos no tienen aparcamiento privado. Las plazas públicas están en la parte baja y no se garantizan.', 'Nee. De verblijven hebben geen eigen parkeerplaats. Openbare plaatsen liggen lager in het dorp en zijn niet gegarandeerd.', 'Nej. Boendena har ingen privat parkering. Allmänna platser finns längre ner i byn och kan inte garanteras.') },
      { id: 'steepness' as const, question: text('How steep is the approach?', 'Wie steil ist der letzte Weg?', '¿Cómo es de empinado el último tramo?', 'Hoe steil is de laatste route?', 'Hur brant är sista vägen?'), answer: text('From the main road it is about 150 metres uphill, around 30 metres of height and roughly 30 steps to our door.', 'Von der Hauptstraße sind es etwa 150 Meter bergauf, rund 30 Höhenmeter und ungefähr 30 Stufen bis zu unserer Tür.', 'Desde la carretera principal son unos 150 metros cuesta arriba, alrededor de 30 metros de desnivel y unos 30 escalones hasta nuestra puerta.', 'Vanaf de hoofdweg is het ongeveer 150 meter omhoog, circa 30 hoogtemeters en rond de 30 treden tot onze deur.', 'Från huvudgatan är det omkring 150 meter uppför, cirka 30 höjdmeter och ungefär 30 trappsteg till vår dörr.') },
      { id: 'nerja-without-car' as const, question: text('Can you reach Nerja without a car?', 'Kommt ihr ohne Auto nach Nerja?', '¿Se puede ir a Nerja sin coche?', 'Kunnen jullie zonder auto naar Nerja?', 'Går det att ta sig till Nerja utan bil?'), answer: text('Yes, by bus or taxi. Check the current timetable and return options before setting out.', 'Ja, mit Bus oder Taxi. Prüft vorab den aktuellen Fahrplan und die Rückfahrt.', 'Sí, en autobús o taxi. Consultad antes el horario actual y las opciones de vuelta.', 'Ja, met bus of taxi. Controleer vooraf de actuele dienstregeling en terugreis.', 'Ja, med buss eller taxi. Kontrollera aktuell tidtabell och returresa i förväg.') },
      { id: 'luggage' as const, question: text('What about luggage?', 'Was ist mit Gepäck?', '¿Y el equipaje?', 'En de bagage?', 'Hur fungerar det med bagage?'), answer: text('Pack for a short, steep final approach over historic paving and steps. The arrival guide explains the practical route.', 'Plant mit einem kurzen, steilen letzten Weg über historisches Pflaster und Stufen. Der Anreise-Guide erklärt den Ablauf.', 'Contad con un último tramo corto y empinado sobre empedrado y escalones. La guía de llegada explica el recorrido.', 'Reken op een korte, steile laatste route over historische keien en trappen. De aankomstgids legt de route uit.', 'Räkna med en kort, brant sista väg över historisk stenläggning och trappor. Ankomstguiden förklarar vägen.') },
      { id: 'overnight' as const, question: text('Why stay instead of making a day trip?', 'Warum übernachten statt nur besuchen?', '¿Por qué alojarse en vez de venir unas horas?', 'Waarom blijven overnachten?', 'Varför övernatta i stället för att göra ett dagsbesök?'), answer: text('You experience the village before and after the busiest daytime hours, walk home after dinner and wake up already in the old town.', 'Ihr erlebt das Dorf vor und nach den stärksten Besuchszeiten, geht nach dem Essen zu Fuß nach Hause und wacht mitten in der Altstadt auf.', 'Vivís el pueblo antes y después de las horas de más visitas, volvéis andando después de cenar y despertáis ya en el casco antiguo.', 'Jullie beleven het dorp vóór en na de drukste uren, lopen na het eten naar huis en worden wakker in de oude kern.', 'Ni upplever byn före och efter de mest besökta timmarna, går hem efter middagen och vaknar redan i gamla byn.') }
    ]
  },
  seasons: {
    title: text('The same village feels different through the year', 'Dasselbe Dorf fühlt sich je nach Jahreszeit anders an', 'El mismo pueblo cambia con las estaciones', 'Hetzelfde dorp voelt elk seizoen anders', 'Samma by känns olika under året'),
    paragraphs: textList(
      ['Heat, rain and daylight change when walking, terraces and the coast fit best into your day. Check the weather guide for current conditions.'],
      ['Hitze, Regen und Tageslicht verändern, wann Wege, Terrasse und Küste am besten in euren Tag passen. Aktuelle Bedingungen findet ihr im Wetter-Guide.'],
      ['El calor, la lluvia y las horas de luz cambian el mejor momento para caminar, estar en la terraza o bajar a la costa. Consultad las condiciones actuales en la guía del tiempo.'],
      ['Hitte, regen en daglicht bepalen wanneer wandelen, terras en kust het beste in jullie dag passen. Bekijk de weergids voor de actuele omstandigheden.'],
      ['Värme, regn och dagsljus påverkar när promenader, terrass och kust passar bäst under dagen. Se väderguiden för aktuella förhållanden.']
    ),
    subsections: [
      { id: 'spring', title: text('Spring', 'Frühling', 'Primavera', 'Lente', 'Vår'), paragraphs: textList(['Good for combining village walks, landscape and the coast; check the day’s forecast.'], ['Dorf, Landschaft und Küste lassen sich gut verbinden; prüft trotzdem die Tagesvorhersage.'], ['Es fácil combinar pueblo, paisaje y costa; comprobad la previsión del día.'], ['Dorp, landschap en kust zijn goed te combineren; bekijk wel de dagverwachting.'], ['By, landskap och kust går bra att kombinera; kontrollera ändå dagens prognos.']), ctas: [] },
      { id: 'summer', title: text('Summer', 'Sommer', 'Verano', 'Zomer', 'Sommar'), paragraphs: textList(['Plan steep walks for the cooler morning or evening hours.'], ['Plant steile Wege für die kühleren Morgen- oder Abendstunden.'], ['Dejad los caminos empinados para las horas más frescas de la mañana o la tarde.'], ['Plan steile routes in de koelere ochtend- of avonduren.'], ['Planera branta promenader till svalare morgon- eller kvällstimmar.']), ctas: [] },
      { id: 'autumn', title: text('Autumn', 'Herbst', 'Otoño', 'Herfst', 'Höst'), paragraphs: textList(['Warm days can continue, but rain changes paving and outdoor plans quickly.'], ['Warme Tage sind weiter möglich, Regen verändert Pflaster und Außenpläne aber schnell.'], ['Puede seguir haciendo calor, pero la lluvia cambia rápido el empedrado y los planes al aire libre.'], ['Warme dagen blijven mogelijk, maar regen verandert bestrating en buitenplannen snel.'], ['Varma dagar kan fortsätta, men regn förändrar stenläggning och utomhusplaner snabbt.']), ctas: [] },
      { id: 'winter', title: text('Winter', 'Winter', 'Invierno', 'Winter', 'Vinter'), paragraphs: textList(['Quieter days suit the village well; bring layers for cooler evenings and changing weather.'], ['Ruhigere Tage passen gut zum Dorf; für kühle Abende und wechselndes Wetter helfen mehrere Schichten.'], ['Los días tranquilos le sientan bien al pueblo; llevad varias capas para las noches frescas y el tiempo cambiante.'], ['Rustigere dagen passen goed bij het dorp; neem laagjes mee voor koele avonden en wisselend weer.'], ['Lugnare dagar passar byn väl; ta med flera lager för svala kvällar och växlande väder.']), ctas: [cta('WEATHER', text('Weather in Frigiliana', 'Wetter in Frigiliana', 'El tiempo en Frigiliana', 'Weer in Frigiliana', 'Väder i Frigiliana'))] }
    ],
    ctas: []
  } satisfies LocalizedModule,
  planning: {
    eyebrow: text('PLAN YOUR STAY', 'AUFENTHALT PLANEN', 'PLANIFICAR LA ESTANCIA', 'PLAN JULLIE VERBLIJF', 'PLANERA VISTELSEN'),
    title: text('The details worth checking before you book', 'Diese Details solltet ihr vor der Buchung kennen', 'Lo que conviene saber antes de reservar', 'Dit is goed om vóór het boeken te weten', 'Det här är bra att veta före bokning'),
    intro: text('Start with arrival, parking and the daily walk. Then decide how much of the coast and region you want to explore.', 'Beginnt mit Anreise, Parken und dem täglichen Weg. Danach könnt ihr überlegen, wie viel Küste und Umgebung ihr entdecken möchtet.', 'Empezad por la llegada, el aparcamiento y el camino diario. Después decidid cuánto queréis recorrer la costa y los alrededores.', 'Begin met aankomst, parkeren en de dagelijkse route. Bepaal daarna hoeveel van de kust en omgeving jullie willen ontdekken.', 'Börja med ankomst, parkering och den dagliga vägen. Bestäm sedan hur mycket av kusten och omgivningen ni vill upptäcka.'),
    gettingThere: { label: text('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Resa till Frigiliana'), text: text('Compare rental car, transfer and public transport via Nerja.', 'Mietwagen, Transfer und öffentliche Verbindungen über Nerja vergleichen.', 'Comparar coche de alquiler, traslado y transporte público vía Nerja.', 'Vergelijk huurauto, transfer en openbaar vervoer via Nerja.', 'Jämför hyrbil, transfer och kollektivtrafik via Nerja.') },
    parking: { label: text('Parking in Frigiliana', 'Parken in Frigiliana', 'Aparcar en Frigiliana', 'Parkeren in Frigiliana', 'Parkering i Frigiliana'), text: text('See the public options and understand the final walk.', 'Öffentliche Möglichkeiten und den letzten Weg verstehen.', 'Ver las opciones públicas y entender el último tramo a pie.', 'Bekijk de openbare opties en begrijp de laatste looproute.', 'Se de allmänna alternativen och förstå sista promenaden.') },
    stairs: { label: text('Streets and steps', 'Gassen und Stufen', 'Calles y escalones', 'Straatjes en trappen', 'Gränder och trappor'), text: text('Check how Frigiliana’s levels affect your everyday route.', 'Prüfen, wie Frigilianas Ebenen euren Alltag beeinflussen.', 'Comprobar cómo afectan los desniveles al recorrido diario.', 'Bekijk wat de hoogteverschillen betekenen voor jullie dagelijkse route.', 'Se hur nivåskillnaderna påverkar er dagliga väg.') },
    dailyLife: { label: text('Everyday life', 'Alltag im Dorf', 'El día a día', 'Dagelijks leven', 'Vardagen i byn'), text: text('Find groceries, the bakery and practical services.', 'Lebensmittel, Bäckerei und praktische Wege finden.', 'Encontrar alimentación, panadería y servicios prácticos.', 'Vind boodschappen, bakker en praktische voorzieningen.', 'Hitta matbutik, bageri och praktisk service.') },
    comparison: { label: text('Frigiliana or Nerja', 'Frigiliana oder Nerja', 'Frigiliana o Nerja', 'Frigiliana of Nerja', 'Frigiliana eller Nerja'), text: text('Compare village life with a stay by the coast.', 'Dorfleben mit einem Aufenthalt an der Küste vergleichen.', 'Comparar la vida de pueblo con una estancia en la costa.', 'Vergelijk dorpsleven met een verblijf aan de kust.', 'Jämför byliv med en vistelse vid kusten.') },
    weather: { label: text('Weather and seasons', 'Wetter und Jahreszeiten', 'Tiempo y estaciones', 'Weer en seizoenen', 'Väder och årstider'), text: text('Choose the best rhythm for walking, terraces and coast.', 'Den passenden Rhythmus für Wege, Terrasse und Küste finden.', 'Elegir el mejor ritmo para caminar, terraza y costa.', 'Kies het beste ritme voor wandelen, terras en kust.', 'Välj rätt rytm för promenader, terrass och kust.') },
    faq: { label: text('Frigiliana FAQ', 'Fragen zu Frigiliana', 'Preguntas sobre Frigiliana', 'Vragen over Frigiliana', 'Frågor om Frigiliana'), text: text('Short answers to the most common practical questions.', 'Kurze Antworten auf häufige praktische Fragen.', 'Respuestas breves a las preguntas prácticas más habituales.', 'Korte antwoorden op veelvoorkomende praktische vragen.', 'Korta svar på vanliga praktiska frågor.') },
    filmLocations: { label: text('Film locations', 'Drehorte', 'Lugares de rodaje', 'Filmlocaties', 'Inspelningsplatser'), text: text('See where Dos Tumbas was filmed in the village.', 'Die Drehorte von Dos Tumbas im Dorf entdecken.', 'Ver dónde se rodó Dos Tumbas en el pueblo.', 'Bekijk waar Dos Tumbas in het dorp is opgenomen.', 'Se var Dos Tumbas spelades in i byn.') },
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
    eyebrow: text('YOUR DAYS FROM HERE', 'EURE TAGE VON HIER AUS', 'VUESTROS DÍAS DESDE AQUÍ', 'JULLIE DAGEN VANAF HIER', 'ERA DAGAR HÄRIFRÅN'),
    title: text('Village, mountains or sea?', 'Dorf, Berge oder Meer?', '¿Pueblo, montaña o mar?', 'Dorp, bergen of zee?', 'By, berg eller hav?'),
    text: text('Choose each day as it comes: walk through the old town, head into the landscape or go down to the coast.', 'Entscheidet jeden Tag neu: durch die Altstadt laufen, in die Landschaft starten oder hinunter ans Meer fahren.', 'Decidid cada día sobre la marcha: pasear por el casco antiguo, salir a la montaña o bajar a la costa.', 'Kies elke dag opnieuw: door de oude kern wandelen, de bergen in of naar de kust.', 'Välj dag för dag: promenera i gamla byn, ge er ut i landskapet eller åk ner till kusten.'),
    ctaLabel: text('Explore ideas for your stay', 'Ideen für euren Aufenthalt', 'Ver ideas para la estancia', 'Bekijk ideeën voor jullie verblijf', 'Se idéer för vistelsen')
  },
  decision: {
    title: text('Frigiliana suits you if the village is part of the holiday', 'Frigiliana passt zu euch, wenn das Dorf zum Urlaub gehören soll', 'Frigiliana encaja si el pueblo debe formar parte de las vacaciones', 'Frigiliana past als het dorp onderdeel van de vakantie mag zijn', 'Frigiliana passar om byn ska vara en del av semestern'),
    paragraphs: textList(
      ['You stay in the old village, not beside it: restaurants on foot and calmer hours before and after the day visitors, but also slopes, steps and no private parking.'],
      ['Ihr wohnt mitten im alten Dorf, nicht daneben: Restaurants zu Fuß und ruhigere Stunden vor und nach den Tagesbesuchern, aber auch Steigungen, Stufen und kein privater Parkplatz.'],
      ['Os alojáis dentro del pueblo antiguo, no al lado: restaurantes a pie y horas más tranquilas antes y después de los visitantes del día, pero también pendientes, escalones y sin aparcamiento privado.'],
      ['Jullie verblijven midden in het oude dorp: restaurants op loopafstand en rustigere uren vóór en na de dagjesmensen, maar ook hellingen, trappen en geen eigen parkeerplaats.'],
      ['Ni bor mitt i den gamla byn: restauranger till fots och lugnare timmar före och efter dagsbesökarna, men också backar, trappor och ingen privat parkering.']
    ),
    subsections: [
      {
        id: 'stays',
        title: text('Four stays behind one old village door', 'Vier Unterkünfte hinter einer alten Dorfhaustür', 'Cuatro alojamientos tras una antigua puerta de pueblo', 'Vier verblijven achter één oude dorpsdeur', 'Fyra boenden bakom en gammal bydörr'),
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
    ctas: []
  } satisfies LocalizedModule
};

export function getFrigilianaLocationCopy(lang: AmaraLanguage): FrigilianaLocationPageCopy {
  return resolveLocale(frigilianaLocationCopy, lang) as FrigilianaLocationPageCopy;
}
