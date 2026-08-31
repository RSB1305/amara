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
    authorSlug: 'staying-with-us'
  },
  ogImage: '/images/amara-lounis/15-amara-frigiliana.jpg',
  languages: {
    de: {
      title: 'Frigiliana: Dorf zwischen Bergen & Meer | AMARA',
      description: 'Erlebt Frigiliana über Nacht: weiße Gassen, Abendessen zu Fuß, die Sierra im Rücken und Nerjas Küste rund sechs Kilometer weiter unten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    en: {
      title: 'Frigiliana: A Village Between Mountains & Sea | AMARA',
      description: 'Stay overnight in Frigiliana for white lanes, dinner on foot, the Sierra behind the village and Nerja’s coast about six kilometres below.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana: un pueblo entre montaña y mar | AMARA',
      description: 'Quedaos en Frigiliana para vivir sus calles blancas, salir a cenar a pie, tener la sierra detrás y la costa de Nerja a unos seis kilómetros.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana: dorp tussen bergen & zee | AMARA',
      description: 'Blijf overnachten in Frigiliana voor witte straatjes, uit eten te voet, de Sierra achter het dorp en Nerja’s kust ongeveer zes kilometer lager.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana: en by mellan berg & hav | AMARA',
      description: 'Stanna över natten i Frigiliana för vita gränder, middag till fots, Sierran bakom byn och Nerjas kust omkring sex kilometer nedanför.',
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
    'Frigiliana, a village between mountains and sea',
    'Frigiliana – ein Dorf zwischen Bergen und Meer',
    'Frigiliana, un pueblo entre la montaña y el mar',
    'Frigiliana, een dorp tussen bergen en zee',
    'Frigiliana, en by mellan berg och hav'
  ),
  h1Subtitle: text(
    'White lanes, long evenings and the Mediterranean below',
    'Weiße Gassen, lange Abende und das Mittelmeer unterhalb',
    'Calles blancas, noches largas y el Mediterráneo más abajo',
    'Witte straatjes, lange avonden en de Middellandse Zee beneden',
    'Vita gränder, långa kvällar och Medelhavet nedanför'
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
      'Frigiliana is made for days that begin in the village and can still wander towards mountains or sea. White lanes and small restaurants sit on the hillside; behind them begins the Sierra de Almijara, while Nerja and the Mediterranean are about six kilometres below. Staying overnight changes your relationship with the place: you share its quieter morning and evening hours, walk home after dinner and wake with the old village already around you. Cobbles, slopes and steps belong to this setting, but they do not have to become the story of the whole stay.'
    ],
    [
      'Frigiliana ist ein Ort für Tage, die im Dorf beginnen und trotzdem in die Berge oder ans Meer führen können. Weiße Gassen und kleine Restaurants ziehen sich den Hang hinauf; dahinter beginnt die Sierra de Almijara, während Nerja und das Mittelmeer rund sechs Kilometer weiter unten liegen. Wer über Nacht bleibt, erlebt das Dorf anders: Ihr teilt seine ruhigeren Morgen- und Abendstunden, geht nach dem Essen zu Fuß nach Hause und wacht schon mitten in der Altstadt auf. Pflaster, Steigungen und Stufen gehören zu diesem Bild, müssen aber nicht die ganze Geschichte eures Aufenthalts bestimmen.'
    ],
    [
      'Frigiliana invita a empezar el día en el pueblo y dejar que después os lleve hacia la montaña o el mar. Sus calles blancas y pequeños restaurantes suben por la ladera; detrás comienza la Sierra de Almijara y, unos seis kilómetros más abajo, están Nerja y el Mediterráneo. Quedarse a dormir cambia la relación con el lugar: compartís sus mañanas y noches más tranquilas, volvéis andando después de cenar y despertáis ya dentro del casco antiguo. El empedrado, las cuestas y los escalones forman parte de ese paisaje, pero no tienen por qué contar toda la historia de la estancia.'
    ],
    [
      'Frigiliana is er voor dagen die in het dorp beginnen en daarna nog alle kanten op kunnen, naar de bergen of de zee. Witte straatjes en kleine restaurants klimmen tegen de helling op; daarachter begint de Sierra de Almijara en ongeveer zes kilometer lager liggen Nerja en de Middellandse Zee. Overnachten verandert jullie band met de plek: je deelt de rustigere ochtend- en avonduren, loopt na het eten naar huis en wordt wakker met de oude kern al om je heen. Keien, hellingen en trappen horen bij dat decor, maar hoeven niet het hele verhaal van jullie verblijf te bepalen.'
    ],
    [
      'Frigiliana är en plats för dagar som börjar i byn och sedan kan fortsätta mot bergen eller havet. Vita gränder och små restauranger klättrar uppför sluttningen; bakom dem börjar Sierra de Almijara och omkring sex kilometer nedanför ligger Nerja och Medelhavet. Att stanna över natten förändrar relationen till platsen: ni delar de lugnare morgon- och kvällstimmarna, promenerar hem efter middagen och vaknar redan mitt i gamla byn. Stenläggning, backar och trappor hör till miljön, men behöver inte bli hela berättelsen om er vistelse.'
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
    title: text('Mountains behind you, the sea below', 'Die Berge im Rücken, das Meer unterhalb', 'La montaña detrás, el mar más abajo', 'De bergen achter je, de zee beneden', 'Bergen bakom er, havet nedanför'),
    paragraphs: textList(
      [
        'Frigiliana lies in the Axarquía, on the southern slope of the Sierra de Almijara. Nerja and the Mediterranean are about six kilometres downhill.',
        'The village looks towards the coast and leans into the mountains. That closeness lets a quiet morning in the lanes, a walk in the Sierra and a few hours by the sea belong to the same stay.'
      ],
      [
        'Frigiliana liegt in der Axarquía am Südhang der Sierra de Almijara. Nerja und das Mittelmeer liegen rund sechs Kilometer weiter unten.',
        'Das Dorf blickt zur Küste und lehnt sich zugleich an die Berge. So können ein ruhiger Morgen in den Gassen, ein Weg in die Sierra und ein paar Stunden am Meer zum selben Aufenthalt gehören.'
      ],
      [
        'Frigiliana está en la Axarquía, en la ladera sur de la Sierra de Almijara. Nerja y el Mediterráneo quedan unos seis kilómetros más abajo.',
        'El pueblo mira hacia la costa y se apoya a la vez en la montaña. Así, una mañana tranquila entre sus calles, un paseo por la sierra y unas horas junto al mar pueden formar parte de la misma estancia.'
      ],
      [
        'Frigiliana ligt in de Axarquía, op de zuidhelling van de Sierra de Almijara. Nerja en de Middellandse Zee liggen ongeveer zes kilometer lager.',
        'Het dorp kijkt naar de kust en leunt tegelijk tegen de bergen. Daardoor kunnen een rustige ochtend in de straatjes, een wandeling in de Sierra en een paar uur aan zee bij hetzelfde verblijf horen.'
      ],
      [
        'Frigiliana ligger i Axarquía på Sierra de Almijaras sydsluttning. Nerja och Medelhavet ligger omkring sex kilometer längre ner.',
        'Byn blickar mot kusten och lutar samtidigt mot bergen. Därför kan en lugn morgon i gränderna, en vandring i Sierran och några timmar vid havet rymmas i samma vistelse.'
      ]
    ),
    facts: [
      { id: 'nerja', value: text('6 km', '6 km', '6 km', '6 km', '6 km'), label: text('to Nerja and the coast', 'bis Nerja und zur Küste', 'hasta Nerja y la costa', 'naar Nerja en de kust', 'till Nerja och kusten') },
      { id: 'old-town', value: text('Old town', 'Altstadt', 'Casco antiguo', 'Oude kern', 'Gamla byn'), label: text('restaurants and cafés on foot', 'Restaurants und Cafés zu Fuß', 'restaurantes y cafeterías a pie', 'restaurants en cafés te voet', 'restauranger och kaféer till fots') },
      { id: 'hillside', value: text('Hillside village', 'Hangdorf', 'Pueblo en cuesta', 'Dorp op een helling', 'By på en sluttning'), label: text('cobbles, slopes and steps', 'Pflaster, Steigungen und Stufen', 'empedrado, pendientes y escalones', 'keien, hellingen en trappen', 'stenläggning, backar och trappor') }
    ],
    mapLabel: text('Orientation from Málaga via Nerja to Frigiliana', 'Orientierung von Málaga über Nerja nach Frigiliana', 'Orientación desde Málaga, pasando por Nerja, hasta Frigiliana', 'Oriëntatie van Málaga via Nerja naar Frigiliana', 'Orientering från Málaga via Nerja till Frigiliana'),
    mapNote: text('Not to scale', 'Nicht maßstabsgetreu', 'No está a escala', 'Niet op schaal', 'Inte skalenlig'),
    geographyLabel: text('See the geography guide', 'Geografie ansehen', 'Ver la guía geográfica', 'Bekijk de geografiegids', 'Se geografisidan'),
    arrivalLabel: text('Plan your arrival', 'Anreise planen', 'Planificar la llegada', 'Plan jullie aankomst', 'Planera ankomsten'),
    routeLabel: text('Open route from the airport', 'Route ab Flughafen öffnen', 'Abrir ruta desde el aeropuerto', 'Route vanaf de luchthaven openen', 'Öppna rutten från flygplatsen')
  },
  evening: {
    title: text('Early mornings, long evenings', 'Frühe Morgen, lange Abende', 'Mañanas tempranas, noches largas', 'Vroege ochtenden, lange avonden', 'Tidiga morgnar, långa kvällar'),
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
    title: text('A beach day can still end in the village', 'Ein Strandtag kann trotzdem im Dorf enden', 'Un día de playa puede terminar en el pueblo', 'Een stranddag kan gewoon in het dorp eindigen', 'En stranddag kan ändå sluta i byn'),
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
  planning: {
    eyebrow: text('CLOSER TO THE VILLAGE', 'NÄHER AM DORF', 'MÁS CERCA DEL PUEBLO', 'DICHTER BIJ HET DORP', 'NÄRMARE BYN'),
    title: text('When Frigiliana becomes more than a backdrop', 'Wenn Frigiliana mehr als eine Kulisse wird', 'Cuando Frigiliana deja de ser solo un paisaje', 'Wanneer Frigiliana meer wordt dan een decor', 'När Frigiliana blir mer än en kuliss'),
    intro: text('A stay finds its own rhythm once you fetch bread in the morning, walk home through the lanes at night and leave the car alone for the small things.', 'Ein Aufenthalt findet seinen eigenen Rhythmus, sobald ihr morgens Brot holt, abends durch die Gassen nach Hause geht und für die kleinen Wege nicht ins Auto steigt.', 'La estancia encuentra su propio ritmo cuando salís a por pan por la mañana, volvéis andando por las calles de noche y dejáis el coche para los trayectos que de verdad lo necesitan.', 'Een verblijf krijgt een eigen ritme zodra jullie ’s ochtends brood halen, ’s avonds door de straatjes naar huis lopen en de auto laten staan voor de kleine dingen.', 'Vistelsen får sin egen rytm när ni hämtar bröd på morgonen, promenerar hem genom gränderna på kvällen och låter bilen stå för de små ärendena.'),
    gettingThere: { label: text('The first road into the hills', 'Der erste Weg hinauf ins Dorf', 'El primer camino hacia el pueblo', 'De eerste weg omhoog naar het dorp', 'Den första vägen upp till byn'), text: text('From Málaga, rental car, transfer or public transport via Nerja each gives the arrival a different rhythm.', 'Von Málaga aus geben Mietwagen, Transfer oder öffentliche Verbindungen über Nerja schon der Ankunft einen eigenen Rhythmus.', 'Desde Málaga, el coche de alquiler, el traslado o el transporte público vía Nerja dan un ritmo distinto a la llegada.', 'Vanaf Málaga geven huurauto, transfer of openbaar vervoer via Nerja elk een ander ritme aan de aankomst.', 'Från Málaga ger hyrbil, transfer eller kollektivtrafik via Nerja ankomsten olika rytm.') },
    parking: { label: text('Leave the car and enter the village on foot', 'Das Auto stehen lassen und zu Fuß ins Dorf gehen', 'Dejar el coche y entrar andando en el pueblo', 'Laat de auto staan en loop het dorp in', 'Lämna bilen och gå in i byn'), text: text('Public parking sits lower down. From there the paving, lanes and final walk mark the change from road to village.', 'Öffentliche Parkmöglichkeiten liegen weiter unten. Pflaster, Gassen und der letzte Fußweg markieren den Übergang von der Straße ins Dorf.', 'El aparcamiento público queda más abajo. Desde allí, el empedrado, las calles y el último tramo a pie marcan el paso de la carretera al pueblo.', 'Openbare parkeerplaatsen liggen lager. Vanaf daar vormen de keien, straatjes en laatste wandeling de overgang van weg naar dorp.', 'Allmän parkering ligger längre ner. Därifrån markerar stenläggningen, gränderna och den sista promenaden övergången från väg till by.') },
    stairs: { label: text('Find your own place in the village', 'Euren eigenen Platz im Dorf finden', 'Encontrar vuestro lugar en el pueblo', 'Vind jullie eigen plek in het dorp', 'Hitta er egen plats i byn'), text: text('The lower old centre, upper Barribarto, newer village and countryside each give ordinary days a different feeling.', 'Der untere historische Kern, das obere Barribarto, der neuere Ort und die Landschaft geben gewöhnlichen Tagen jeweils ein anderes Gefühl.', 'El casco histórico bajo, el Barribarto alto, la zona nueva y el campo dan un carácter distinto a los días cotidianos.', 'De lagere oude kern, het hogere Barribarto, het nieuwere dorp en het buitengebied geven gewone dagen elk een ander gevoel.', 'Den nedre gamla bykärnan, övre Barribarto, den nyare byn och landsbygden ger vardagen olika känsla.') },
    dailyLife: { label: text('Bread, groceries and an ordinary morning', 'Brot, Einkäufe und ein ganz normaler Morgen', 'Pan, compras y una mañana cualquiera', 'Brood, boodschappen en een gewone ochtend', 'Bröd, inköp och en vanlig morgon'), text: text('The bakery, groceries and useful services are the small places where a holiday starts to feel like village life.', 'Bäckerei, Lebensmittel und praktische Angebote sind die kleinen Orte, an denen sich Urlaub langsam wie Dorfleben anfühlt.', 'La panadería, la compra y los servicios cotidianos son esos pequeños lugares donde las vacaciones empiezan a sentirse como vida de pueblo.', 'De bakker, boodschappen en praktische voorzieningen zijn de kleine plekken waar vakantie langzaam als dorpsleven gaat voelen.', 'Bageriet, matbutiken och vardagens service är de små platser där semestern börjar kännas som byliv.') },
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
    eyebrow: text('DAYS THAT BEGIN HERE', 'TAGE, DIE HIER BEGINNEN', 'DÍAS QUE EMPIEZAN AQUÍ', 'DAGEN DIE HIER BEGINNEN', 'DAGAR SOM BÖRJAR HÄR'),
    title: text('Each day finds its own direction', 'Jeder Tag findet seine eigene Richtung', 'Cada día encuentra su propio rumbo', 'Elke dag vindt zijn eigen richting', 'Varje dag hittar sin egen riktning'),
    text: text('You do not have to choose one kind of holiday. Some days stay among the white lanes, others carry on into the Sierra or follow the hill down towards the sea.', 'Ihr müsst euch hier nicht für eine einzige Art von Urlaub entscheiden. Manche Tage bleiben zwischen den weißen Gassen, andere führen weiter in die Sierra oder folgen dem Hang hinunter ans Meer.', 'Aquí no tenéis que elegir una sola forma de viajar. Algunos días se quedan entre las calles blancas; otros continúan hacia la sierra o siguen la ladera hasta el mar.', 'Hier hoeven jullie niet voor één soort vakantie te kiezen. Sommige dagen blijven tussen de witte straatjes, andere gaan verder de Sierra in of volgen de helling naar zee.', 'Här behöver ni inte välja en enda sorts semester. Vissa dagar stannar bland de vita gränderna, andra fortsätter in i Sierran eller följer sluttningen ner mot havet.'),
    links: [
      {
        id: 'old-town',
        label: text('Follow the stories of the old village', 'Den Geschichten des alten Dorfes folgen', 'Seguir las historias del pueblo antiguo', 'Volg de verhalen van het oude dorp', 'Följ berättelserna i den gamla byn'),
        text: text('Calle Real, Barribarto and the ceramic panels let Frigiliana’s history unfold one bend and one doorway at a time.', 'Calle Real, Barribarto und die Keramiktafeln lassen Frigilianas Geschichte mit jeder Kurve und jeder Tür ein Stück weiter aufgehen.', 'La calle Real, Barribarto y los paneles cerámicos dejan que la historia de Frigiliana se descubra curva a curva y puerta a puerta.', 'Calle Real, Barribarto en de keramiekpanelen laten Frigiliana’s geschiedenis bocht voor bocht en deur voor deur opengaan.', 'Calle Real, Barribarto och keramikpanelerna låter Frigilianas historia öppna sig en kurva och en port i taget.')
      },
      {
        id: 'hiking',
        label: text('Walk beyond the last houses', 'Hinter den letzten Häusern weitergehen', 'Seguir más allá de las últimas casas', 'Loop verder dan de laatste huizen', 'Fortsätt bortom de sista husen'),
        text: text('The Sierra is more than a backdrop. Four published routes lead from an easy village walk towards longer, higher days outside.', 'Die Sierra ist mehr als eine Kulisse. Vier veröffentlichte Routen führen vom leichten Dorfweg bis zu längeren, höheren Tagen draußen.', 'La sierra es mucho más que un fondo. Cuatro rutas publicadas llevan desde un paseo sencillo por el pueblo hasta jornadas más largas y elevadas.', 'De Sierra is meer dan een decor. Vier beschreven routes lopen van een eenvoudige dorpswandeling tot langere, hogere dagen buiten.', 'Sierran är mer än en bakgrund. Fyra publicerade leder går från en enkel bypromenad till längre och högre dagar ute.')
      },
      {
        id: 'beaches',
        label: text('Spend a few hours by the sea', 'Für ein paar Stunden ans Meer', 'Pasar unas horas junto al mar', 'Ga een paar uur naar zee', 'Tillbringa några timmar vid havet'),
        text: text('The coast below gives a village stay another rhythm: swim, linger over lunch and return uphill when the evening belongs to Frigiliana again.', 'Die Küste unterhalb gibt dem Dorfaufenthalt einen zweiten Rhythmus: schwimmen, lange zu Mittag essen und zurückkehren, wenn der Abend wieder Frigiliana gehört.', 'La costa más abajo da otro ritmo a la estancia en el pueblo: bañaros, alargar el almuerzo y volver cuando la tarde pertenece de nuevo a Frigiliana.', 'De kust beneden geeft een verblijf in het dorp een tweede ritme: zwemmen, lang lunchen en terugkeren wanneer de avond weer van Frigiliana is.', 'Kusten nedanför ger byvistelsen en annan rytm: bada, dröj kvar över lunchen och återvänd när kvällen åter tillhör Frigiliana.')
      },
      {
        id: 'all',
        label: text('More days around Frigiliana', 'Noch mehr Tage rund um Frigiliana', 'Más días alrededor de Frigiliana', 'Nog meer dagen rond Frigiliana', 'Fler dagar kring Frigiliana'),
        text: text('Food, markets, wellness and day trips add more ways to spend the time you share here.', 'Essen, Märkte, Wellness und Tagesausflüge geben eurer gemeinsamen Zeit hier noch mehr Möglichkeiten.', 'La gastronomía, los mercados, el bienestar y las excursiones abren más formas de disfrutar el tiempo que compartís aquí.', 'Eten, markten, wellness en dagtochten geven de tijd die jullie hier delen nog meer mogelijkheden.', 'Mat, marknader, välmående och dagsutflykter ger tiden ni delar här ännu fler möjligheter.')
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
