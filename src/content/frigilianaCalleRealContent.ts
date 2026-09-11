import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaCalleRealSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-calle-real-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image
     contract; a stable Frigiliana pueblo image carries the share card. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/04-frigiliana-pueblo.jpg',
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Calle Real and the Barribajo: Frigiliana’s Wide Lower Axis',
      description:
        'Calle Real is the wide, level main axis of Frigiliana’s lower old town, the Barribajo. Its continuation, Calle Chorruelo, is where you find Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Calle Real und das Barribajo: die breite untere Achse von Frigiliana',
      description:
        'Die Calle Real ist die breite, ebene Hauptachse von Frigilianas unterer Altstadt, dem Barribajo. Ihre Verlängerung, die Calle Chorruelo, ist der Standort von Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'La calle Real y el Barribajo: el eje bajo y ancho de Frigiliana',
      description:
        'La calle Real es el eje principal, ancho y llano de la parte baja del casco antiguo de Frigiliana, el Barribajo. Su continuación, la calle Chorruelo, es donde está Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Calle Real en het Barribajo: de brede lagere as van Frigiliana',
      description:
        'Calle Real is de brede, vlakke hoofdas van de lagere oude kern van Frigiliana, het Barribajo. Het verlengde ervan, Calle Chorruelo, is waar Casa AMARA ligt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Calle Real och Barribajo: Frigilianas breda nedre axel',
      description:
        'Calle Real är den breda, plana huvudaxeln i Frigilianas nedre gamla stan, Barribajo. Dess förlängning, Calle Chorruelo, är där Casa AMARA ligger.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page, sibling to El Ingenio, the ceramic
 * panels, the Casa del Apero and San Antonio. Authored from the existing verified facts
 * (BOJA heritage morphology + the Casa AMARA location facts): no separate research run is
 * needed. The hero uses the mule-in-the-lane photograph that already carried the old-town
 * tile. The Casa AMARA bridge is documented: Calle Chorruelo is the continuation of Calle
 * Real, and the route from the shared door towards the village core has no further steps.
 */
export const frigilianaCalleRealCopy = {
  hero: {
    kicker: l(
      'Old town · Calle Real & Barribajo',
      'Altstadt · Calle Real & Barribajo',
      'Casco antiguo · Calle Real y Barribajo',
      'Oude kern · Calle Real & Barribajo',
      'Gamla stan · Calle Real & Barribajo'
    ),
    title: l(
      'Calle Real and the Barribajo',
      'Calle Real und das Barribajo',
      'La calle Real y el Barribajo',
      'Calle Real en het Barribajo',
      'Calle Real och Barribajo'
    ),
    subtitle: l(
      'The one wide, level street in a village built on steps',
      'Die eine breite, ebene Straße in einem Dorf aus Treppen',
      'La única calle ancha y llana en un pueblo de escaleras',
      'De ene brede, vlakke straat in een dorp van trappen',
      'Den enda breda, plana gatan i en by byggd på trappor'
    ),
    paragraphs: [
      l(
        'Most of Frigiliana climbs — narrow, stepped, built into the rock. Calle Real is the exception: the wide main axis of the lower old town, the Barribajo, where the plots are larger, the houses run to three storeys and the detail turns more formal. It is the flattest walking in the historic centre, the street the whole village uses. And it does not really end — where its name changes to Calle Chorruelo, a few steps on, you reach Casa AMARA’s door.',
        'Das meiste von Frigiliana steigt an — schmal, gestuft, in den Fels gebaut. Die Calle Real ist die Ausnahme: die breite Hauptachse der unteren Altstadt, des Barribajo, wo die Parzellen größer sind, die Häuser bis zu drei Geschosse hoch und die Details förmlicher werden. Hier läuft es sich am ebensten im historischen Zentrum, es ist die Straße, die das ganze Dorf benutzt. Und sie endet nicht wirklich — dort, wo ihr Name in Calle Chorruelo übergeht, wenige Schritte weiter, steht die Tür von Casa AMARA.',
        'Casi toda Frigiliana sube: estrecha, escalonada, encajada en la roca. La calle Real es la excepción: el eje principal y ancho de la parte baja del casco antiguo, el Barribajo, donde las parcelas son mayores, las casas llegan a tres plantas y los detalles se vuelven más formales. Es el tramo más llano del centro histórico, la calle que usa todo el pueblo. Y no termina del todo: donde su nombre pasa a ser calle Chorruelo, unos pasos más allá, está la puerta de Casa AMARA.',
        'Het grootste deel van Frigiliana klimt — smal, getrapt, in de rots gebouwd. Calle Real is de uitzondering: de brede hoofdas van de lagere oude kern, het Barribajo, waar de percelen groter zijn, de huizen tot drie verdiepingen reiken en het detail formeler wordt. Het is het vlakste stuk van de historische kern, de straat die het hele dorp gebruikt. En ze eindigt niet echt — waar haar naam overgaat in Calle Chorruelo, een paar stappen verder, staat de deur van Casa AMARA.',
        'Det mesta av Frigiliana klättrar — smalt, trappat, byggt in i klippan. Calle Real är undantaget: den breda huvudaxeln i nedre gamla stan, Barribajo, där tomterna är större, husen når tre våningar och detaljerna blir mer formella. Det är den flackaste sträckan i den historiska kärnan, gatan som hela byn använder. Och den tar egentligen inte slut — där dess namn övergår i Calle Chorruelo, några steg längre bort, står dörren till Casa AMARA.'
      )
    ]
  },
  keyFigures: {
    figures: [
      {
        value: 'Calle Real',
        label: l(
          'The wide main axis of the lower old town',
          'Die breite Hauptachse der unteren Altstadt',
          'El eje principal y ancho de la parte baja',
          'De brede hoofdas van de lagere oude kern',
          'Den breda huvudaxeln i nedre gamla stan'
        )
      },
      {
        value: 'Barribajo',
        label: l(
          'Larger plots, three-storey houses, formal detail',
          'Größere Parzellen, dreigeschossige Häuser, förmliche Details',
          'Parcelas mayores, casas de tres plantas, detalle formal',
          'Grotere percelen, huizen van drie lagen, formeel detail',
          'Större tomter, trevåningshus, formella detaljer'
        )
      },
      {
        value: 'Barribarto',
        label: l(
          'Above it: the medieval core, tiny plots, adarves',
          'Darüber: der mittelalterliche Kern, winzige Parzellen, Adarves',
          'Encima: el núcleo medieval, parcelas mínimas, adarves',
          'Erboven: de middeleeuwse kern, minieme percelen, adarves',
          'Ovanför: den medeltida kärnan, pyttesmå tomter, adarves'
        )
      },
      {
        value: 'Chorruelo',
        label: l(
          'Calle Real’s continuation — Casa AMARA’s street',
          'Verlängerung der Calle Real — die Straße von Casa AMARA',
          'Continuación de la calle Real: la calle de Casa AMARA',
          'Verlengde van Calle Real — de straat van Casa AMARA',
          'Calle Reals förlängning — Casa AMARAs gata'
        )
      }
    ],
    note: l(
      'The morphology follows the official heritage record; the Casa AMARA position is our own address on Calle Chorruelo.',
      'Die Morphologie folgt dem amtlichen Denkmalregister; die Lage von Casa AMARA ist unsere eigene Adresse an der Calle Chorruelo.',
      'La morfología sigue el registro patrimonial oficial; la ubicación de Casa AMARA es nuestra propia dirección en la calle Chorruelo.',
      'De morfologie volgt het officiële erfgoedregister; de ligging van Casa AMARA is ons eigen adres aan Calle Chorruelo.',
      'Morfologin följer det officiella kulturarvsregistret; Casa AMARAs läge är vår egen adress vid Calle Chorruelo.'
    )
  },
  sections: [
    {
      eyebrow: l('The wide axis', 'Die breite Achse', 'El eje ancho', 'De brede as', 'Den breda axeln'),
      title: l(
        'The street the whole village uses',
        'Die Straße, die das ganze Dorf benutzt',
        'La calle que usa todo el pueblo',
        'De straat die het hele dorp gebruikt',
        'Gatan som hela byn använder'
      ),
      text: l(
        'The lower part of the historic centre grew along Calle Real, and it grew comfortably: larger plots, houses mostly of three storeys, a more formal architectural detail than the lanes higher up. Because it follows the contour rather than climbing across it, this is the flattest walking in the old town — which is exactly why the cafés, shops and everyday errands settle along it. Start a walk here and the village opens without a single step.',
        'Der untere Teil des historischen Zentrums wuchs entlang der Calle Real, und er wuchs großzügig: größere Parzellen, Häuser meist dreigeschossig, ein förmlicheres architektonisches Detail als die Gassen weiter oben. Weil sie der Höhenlinie folgt, statt sie zu queren, läuft es sich hier am ebensten in der Altstadt — genau deshalb reihen sich Cafés, Läden und die alltäglichen Besorgungen an ihr auf. Beginnt hier einen Gang, und das Dorf öffnet sich ohne eine einzige Stufe.',
        'La parte baja del casco histórico creció a lo largo de la calle Real, y creció con holgura: parcelas mayores, casas casi siempre de tres plantas, un detalle arquitectónico más formal que en las calles de arriba. Como sigue la curva de nivel en lugar de cruzarla, es el tramo más llano del casco antiguo, y por eso mismo los cafés, las tiendas y los recados diarios se alinean a lo largo de ella. Empezad aquí un paseo y el pueblo se abre sin un solo escalón.',
        'Het lagere deel van de historische kern groeide langs Calle Real, en het groeide ruim: grotere percelen, huizen meestal van drie verdiepingen, een formeler architectonisch detail dan de straatjes hogerop. Omdat ze de hoogtelijn volgt in plaats van die te kruisen, is dit het vlakste stuk van de oude kern — precies daarom rijgen de cafés, winkels en dagelijkse boodschappen zich eraan. Begin hier een wandeling en het dorp opent zich zonder één trede.',
        'Den nedre delen av den historiska kärnan växte fram längs Calle Real, och den växte rymligt: större tomter, hus oftast i tre våningar, ett mer formellt arkitektoniskt detalj än gränderna längre upp. Eftersom den följer nivåkurvan i stället för att korsa den är detta den flackaste sträckan i gamla stan — just därför lägger sig kaféerna, butikerna och de dagliga ärendena längs den. Börja en vandring här och byn öppnar sig utan ett enda trappsteg.'
      )
    },
    {
      eyebrow: l('Two grains', 'Zwei Körnungen', 'Dos granos', 'Twee korrels', 'Två kornigheter'),
      title: l(
        'Barribajo below, Barribarto above',
        'Barribajo unten, Barribarto oben',
        'El Barribajo abajo, el Barribarto arriba',
        'Barribajo beneden, Barribarto boven',
        'Barribajo nedan, Barribarto ovan'
      ),
      text: l(
        'Read the two quarters together and the town explains itself. Below runs the Barribajo along Calle Real — wide, formal, level. Above it climbs the Barribarto, the medieval core in the official record: tiny plots, mostly two storeys, houses built into and around the rock, and passages that are adarves — half-private lanes serving only the houses on them, worth remembering before you wander in. The Barribarto is the most photographed part of the village and the most demanding to walk; the Barribajo is where you catch your breath.',
        'Liest man die beiden Viertel zusammen, erklärt sich der Ort von selbst. Unten zieht sich das Barribajo entlang der Calle Real — breit, förmlich, eben. Darüber steigt das Barribarto an, im amtlichen Register der mittelalterliche Kern: winzige Parzellen, meist zweigeschossig, Häuser in und um den Fels gebaut, und Durchgänge, die Adarves sind — halbprivate Gassen, die nur die daran liegenden Häuser erschließen; daran lohnt es sich zu denken, bevor man hineinläuft. Das Barribarto ist der meistfotografierte und anstrengendste Teil des Dorfes; im Barribajo holt man Atem.',
        'Leed los dos barrios juntos y el pueblo se explica solo. Abajo discurre el Barribajo a lo largo de la calle Real: ancho, formal, llano. Encima trepa el Barribarto, el núcleo medieval según el registro oficial: parcelas mínimas, casi siempre de dos plantas, casas construidas en la roca y alrededor de ella, y pasajes que son adarves, calles semiprivadas que solo dan servicio a las viviendas que se abren a ellas; conviene tenerlo presente antes de entrar. El Barribarto es la zona más fotografiada del pueblo y la más exigente para caminar; el Barribajo es donde se recupera el aliento.',
        'Lees de twee wijken samen en het dorp verklaart zichzelf. Beneden loopt het Barribajo langs Calle Real — breed, formeel, vlak. Erboven klimt het Barribarto, in het officiële register de middeleeuwse kern: minieme percelen, meestal twee verdiepingen, huizen in en om de rots gebouwd, en doorgangen die adarves zijn — halfprivé straatjes die alleen de daaraan gelegen huizen ontsluiten, goed om te onthouden voordat je er inloopt. Het Barribarto is het meest gefotografeerde deel van het dorp en het zwaarste om te belopen; in het Barribajo haal je adem.',
        'Läs de två kvarteren tillsammans och byn förklarar sig själv. Nedanför löper Barribajo längs Calle Real — brett, formellt, plant. Ovanför klättrar Barribarto, i det officiella registret den medeltida kärnan: pyttesmå tomter, oftast två våningar, hus byggda in i och runt klippan, och passager som är adarves — halvprivata gränder som bara betjänar husen längs dem, värt att minnas innan man går in. Barribarto är byns mest fotograferade del och den jobbigaste att gå i; i Barribajo hämtar man andan.'
      )
    },
    {
      eyebrow: l('Where the street becomes ours', 'Wo die Straße unsere wird', 'Donde la calle se hace nuestra', 'Waar de straat de onze wordt', 'Där gatan blir vår'),
      title: l(
        'Calle Real, then Calle Chorruelo — and Casa AMARA',
        'Calle Real, dann Calle Chorruelo — und Casa AMARA',
        'Calle Real, luego calle Chorruelo, y Casa AMARA',
        'Calle Real, dan Calle Chorruelo — en Casa AMARA',
        'Calle Real, sedan Calle Chorruelo — och Casa AMARA'
      ),
      text: l(
        'Follow Calle Real to its lower end and it simply changes name: Calle Chorruelo is its continuation, and that is where Casa AMARA stands, at number 5, in the heart of the Barribajo. It puts you on the level, everyday side of the old town — from the shared front door, the walk along Calle Chorruelo and Calle Real to the cafés, restaurants, bars and the village core carries no further steps. It is the part of Frigiliana you can settle into with shopping in hand, and the easy start for every walk up into the older lanes.',
        'Folgt der Calle Real bis an ihr unteres Ende, und sie wechselt einfach den Namen: Die Calle Chorruelo ist ihre Verlängerung, und dort steht Casa AMARA, Nummer 5, mitten im Barribajo. Das setzt euch auf die ebene, alltägliche Seite der Altstadt — von der gemeinsamen Haustür trägt der Weg entlang Calle Chorruelo und Calle Real zu den Cafés, Restaurants, Bars und dem Dorfkern keine weitere Stufe. Es ist der Teil von Frigiliana, in dem man sich mit Einkäufen in der Hand niederlässt, und der bequeme Ausgangspunkt für jeden Gang hinauf in die älteren Gassen.',
        'Seguid la calle Real hasta su extremo bajo y sencillamente cambia de nombre: la calle Chorruelo es su continuación, y ahí está Casa AMARA, en el número 5, en pleno Barribajo. Os deja en el lado llano y cotidiano del casco antiguo: desde la puerta común, el paseo por la calle Chorruelo y la calle Real hasta los cafés, restaurantes, bares y el núcleo del pueblo no tiene ni un escalón más. Es la parte de Frigiliana en la que uno se instala con la compra en la mano, y el arranque cómodo de cualquier paseo hacia las calles más antiguas.',
        'Volg Calle Real tot haar lagere einde en ze verandert simpelweg van naam: Calle Chorruelo is het verlengde ervan, en daar staat Casa AMARA, op nummer 5, midden in het Barribajo. Het zet je aan de vlakke, alledaagse kant van de oude kern — vanaf de gedeelde voordeur telt de wandeling langs Calle Chorruelo en Calle Real naar de cafés, restaurants, bars en de dorpskern geen enkele trede meer. Het is het deel van Frigiliana waar je je met boodschappen in de hand nestelt, en het makkelijke begin van elke wandeling omhoog de oudere straatjes in.',
        'Följ Calle Real till dess nedre ände och den byter helt enkelt namn: Calle Chorruelo är dess förlängning, och där står Casa AMARA, på nummer 5, mitt i Barribajo. Det placerar er på den plana, vardagliga sidan av gamla stan — från den gemensamma ytterdörren bär promenaden längs Calle Chorruelo och Calle Real till kaféer, restauranger, barer och byns kärna inte ett enda trappsteg till. Det är den del av Frigiliana där man slår sig ner med matkassen i hand, och den bekväma starten för varje vandring upp i de äldre gränderna.'
      )
    }
  ],
  pullQuote: l(
    'This is where Frigiliana catches its breath: the one wide, level street in a village built on steps.',
    'Hier holt Frigiliana Atem: die eine breite, ebene Straße in einem Dorf aus Treppen.',
    'Aquí Frigiliana recupera el aliento: la única calle ancha y llana en un pueblo de escaleras.',
    'Hier haalt Frigiliana adem: de ene brede, vlakke straat in een dorp van trappen.',
    'Här hämtar Frigiliana andan: den enda breda, plana gatan i en by byggd på trappor.'
  ),
  closing: {
    title: l(
      'Start on the level, then climb when you like',
      'Eben starten, dann steigen, wann ihr wollt',
      'Empezad en llano y subid cuando queráis',
      'Begin vlak, klim wanneer je wilt',
      'Börja plant, klättra när ni vill'
    ),
    lead: l(
      'Casa AMARA sits on Calle Chorruelo, the continuation of Calle Real, in the heart of the Barribajo — the level, everyday side of the old town. From here the cafés and the village core are a step-free stroll, and the older lanes are yours whenever the mood takes you.',
      'Casa AMARA liegt an der Calle Chorruelo, der Verlängerung der Calle Real, mitten im Barribajo — auf der ebenen, alltäglichen Seite der Altstadt. Von hier sind die Cafés und der Dorfkern ein stufenfreier Spaziergang, und die älteren Gassen gehören euch, wann immer euch danach ist.',
      'Casa AMARA está en la calle Chorruelo, la continuación de la calle Real, en pleno Barribajo, el lado llano y cotidiano del casco antiguo. Desde aquí los cafés y el núcleo del pueblo quedan a un paseo sin escalones, y las calles más antiguas son vuestras cuando os apetezca.',
      'Casa AMARA ligt aan Calle Chorruelo, het verlengde van Calle Real, midden in het Barribajo — de vlakke, alledaagse kant van de oude kern. Vanaf hier zijn de cafés en de dorpskern een trapvrije wandeling, en de oudere straatjes zijn van jou wanneer je maar wilt.',
      'Casa AMARA ligger vid Calle Chorruelo, Calle Reals förlängning, mitt i Barribajo — den plana, vardagliga sidan av gamla stan. Härifrån är kaféerna och byns kärna en trappfri promenad, och de äldre gränderna är era när andan faller på.'
    ),
    oldTownCta: l(
      'Back to the old town',
      'Zurück zur Altstadt',
      'Volver al casco antiguo',
      'Terug naar de oude kern',
      'Tillbaka till gamla stan'
    ),
    availabilityCta: l(
      'Check availability',
      'Verfügbarkeit prüfen',
      'Consultar disponibilidad',
      'Beschikbaarheid bekijken',
      'Se tillgänglighet'
    )
  }
} as const;
