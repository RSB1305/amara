import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaIngenioSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-el-ingenio-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image contract. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'El Ingenio in Frigiliana: The Count’s Palace That Became a Sugar Factory',
      description:
        'El Ingenio is a 16th-century count’s palace and a working miel-de-caña factory in one: the 1725 sugar works, the sgraffito facade, the cane syrup still made here — and the wild ibex on the roof.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'El Ingenio in Frigiliana: Der Grafenpalast, der zur Zuckerfabrik wurde',
      description:
        'El Ingenio ist Grafenpalast des 16. Jahrhunderts und arbeitende Miel-de-Caña-Fabrik zugleich: das Zuckerwerk von 1725, die Esgrafiado-Fassade, der bis heute gekochte Zuckerrohrsirup — und die wilden Steinböcke auf dem Dach.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'El Ingenio de Frigiliana: el palacio condal que se hizo fábrica de azúcar',
      description:
        'El Ingenio es a la vez palacio condal del siglo XVI y fábrica de miel de caña en activo: el ingenio de 1725, la fachada de esgrafiados, el jarabe de caña que aún se elabora aquí y las cabras monteses en el tejado.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'El Ingenio in Frigiliana: het grafelijk paleis dat een suikerfabriek werd',
      description:
        'El Ingenio is tegelijk een 16e-eeuws grafelijk paleis en een werkende miel-de-caña-fabriek: de suikerfabriek uit 1725, de esgrafiado-gevel, de rietstroop die hier nog wordt gemaakt — en de wilde steenbokken op het dak.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'El Ingenio i Frigiliana: grevepalatset som blev en sockerfabrik',
      description:
        'El Ingenio är på en gång ett grevepalats från 1500-talet och en fungerande miel-de-caña-fabrik: sockerbruket från 1725, esgrafiado-fasaden, sockerrörssirapen som fortfarande kokas här — och de vilda stenbockarna på taket.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page, sibling to the ceramic-panels page.
 * Content follows research-001 (2026-09-11): the building is both the 16th-century
 * Manrique de Lara palace and, from 1725, the industrial sugar ingenio — two layers,
 * not a contradiction. Superlatives are only attributed ("said to be the last ingenio
 * of its kind on the peninsula", Diputación de Málaga), never absolute. The ibex are
 * wild cabra montés; sightings are a gift, not a promise. It is a working site.
 */
export const frigilianaIngenioCopy = {
  hero: {
    kicker: l(
      'Old town · El Ingenio',
      'Altstadt · El Ingenio',
      'Casco antiguo · El Ingenio',
      'Oude kern · El Ingenio',
      'Gamla stan · El Ingenio'
    ),
    title: l('El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio'),
    subtitle: l(
      'The count’s palace that became a sugar factory',
      'Der Grafenpalast, der zur Zuckerfabrik wurde',
      'El palacio condal que se hizo fábrica de azúcar',
      'Het grafelijk paleis dat een suikerfabriek werd',
      'Grevepalatset som blev en sockerfabrik'
    ),
    paragraphs: [
      l(
        'At the lower edge of the old town stands Frigiliana’s largest building: El Ingenio. It looks like a palace — and it was one, the seat of the Manrique de Lara counts in the sixteenth century. It is also a working factory: since 1725 miel de caña, a concentrated cane syrup, has been boiled here. You can read the sgraffito facade from the lane, but do not count on going in — production still happens inside. And with a little luck, a wild ibex from the sierra will be standing on the roof.',
        'Am unteren Rand der Altstadt steht Frigilianas größtes Gebäude: El Ingenio. Es wirkt wie ein Palast — und war auch einer, der Sitz der Grafen Manrique de Lara im 16. Jahrhundert. Zugleich ist es eine arbeitende Fabrik: Seit 1725 wird hier Miel de Caña gekocht, ein eingedickter Zuckerrohrsirup. Die Esgrafiado-Fassade könnt ihr von der Gasse aus lesen, aber rechnet nicht mit einer Besichtigung — drinnen wird bis heute produziert. Und mit etwas Glück steht ein wilder Steinbock aus der Sierra auf dem Dach.',
        'En el borde bajo del casco antiguo se alza el edificio más grande de Frigiliana: El Ingenio. Parece un palacio — y lo fue, la sede de los condes Manrique de Lara en el siglo XVI. También es una fábrica en activo: desde 1725 se cuece aquí miel de caña, un jarabe concentrado de caña de azúcar. La fachada de esgrafiados se lee desde la calle, pero no deis por hecho que se puede entrar: dentro se sigue produciendo. Y con un poco de suerte, una cabra montés de la sierra estará en el tejado.',
        'Aan de onderrand van de oude kern staat het grootste gebouw van Frigiliana: El Ingenio. Het lijkt een paleis — en dat was het ook, de zetel van de graven Manrique de Lara in de zestiende eeuw. Het is tegelijk een werkende fabriek: sinds 1725 wordt hier miel de caña gekookt, een geconcentreerde rietsuikersiroop. De esgrafiado-gevel lees je vanaf het straatje, maar reken niet op een bezoek — binnen wordt nog geproduceerd. En met een beetje geluk staat er een wilde steenbok uit de sierra op het dak.',
        'I gamla stans nedre kant reser sig Frigilianas största byggnad: El Ingenio. Den ser ut som ett palats — och var det också, grevarna Manrique de Laras säte på 1500-talet. Den är samtidigt en fungerande fabrik: sedan 1725 kokas här miel de caña, en koncentrerad sockerrörssirap. Esgrafiado-fasaden kan ni läsa från gränden, men räkna inte med att komma in — inne pågår fortfarande produktion. Och med lite tur står en vild stenbock från sierran på taket.'
      )
    ]
  },
  palaceVsFactory: {
    title: l(
      'Palace or factory?',
      'Palast oder Fabrik?',
      '¿Palacio o fábrica?',
      'Paleis of fabriek?',
      'Palats eller fabrik?'
    ),
    intro: l(
      'Both. The building holds two layers that are often confused — and once you separate them, the apparent contradiction disappears.',
      'Beides. Der Bau vereint zwei Schichten, die oft verwechselt werden — trennt man sie, löst sich der scheinbare Widerspruch auf.',
      'Ambas cosas. El edificio reúne dos capas que suelen confundirse; al separarlas, la aparente contradicción desaparece.',
      'Allebei. Het gebouw verenigt twee lagen die vaak worden verward — zodra je ze scheidt, verdwijnt de schijnbare tegenspraak.',
      'Både och. Byggnaden rymmer två lager som ofta förväxlas — skiljer man dem åt försvinner den skenbara motsägelsen.'
    ),
    items: [
      {
        title: l(
          'The count’s palace (16th century)',
          'Der Grafenpalast (16. Jahrhundert)',
          'El palacio condal (siglo XVI)',
          'Het grafelijk paleis (16e eeuw)',
          'Grevepalatset (1500-talet)'
        ),
        text: l(
          'The Manrique de Lara family held the lordship of Frigiliana from 1508 and completed their Renaissance residence here in the sixteenth century — more than 2,000 square metres, built in part with stone from the old Arab castle.',
          'Die Familie Manrique de Lara hielt seit 1508 die Herrschaft über Frigiliana und vollendete hier im 16. Jahrhundert ihren Renaissance-Wohnsitz — über 2.000 Quadratmeter, teils aus Steinen der alten Maurenburg errichtet.',
          'La familia Manrique de Lara ostentó el señorío de Frigiliana desde 1508 y culminó aquí su residencia renacentista en el siglo XVI: más de 2.000 metros cuadrados, levantada en parte con piedra del antiguo castillo árabe.',
          'De familie Manrique de Lara had vanaf 1508 de heerlijkheid over Frigiliana en voltooide hier in de zestiende eeuw haar renaissancewoning — ruim 2.000 vierkante meter, deels gebouwd met steen van het oude Arabische kasteel.',
          'Familjen Manrique de Lara innehade länsherraväldet över Frigiliana från 1508 och färdigställde här sin renässansbostad på 1500-talet — mer än 2 000 kvadratmeter, delvis byggd med sten från den gamla arabiska borgen.'
        )
      },
      {
        title: l(
          'The sugar works (from 1725)',
          'Das Zuckerwerk (ab 1725)',
          'El ingenio azucarero (desde 1725)',
          'De suikerfabriek (vanaf 1725)',
          'Sockerbruket (från 1725)'
        ),
        text: l(
          'A small trapiche founded by the first count grew into today’s industrial ingenio: in 1725 the count sought permission to fell timber for the works, and by 1728/29 it was fully running. That 1725 date belongs to the factory, not to the building.',
          'Ein kleiner trapiche des ersten Grafen wuchs zum heutigen industriellen ingenio: 1725 bat der Graf um Genehmigung zum Fällen von Bauholz, um 1728/29 lief das Werk voll. Das Jahr 1725 gehört zur Fabrik, nicht zum Gebäude.',
          'Un pequeño trapiche del primer conde creció hasta el ingenio industrial de hoy: en 1725 el conde pidió permiso para talar madera para las obras, y hacia 1728/29 estaba en plena marcha. Esa fecha de 1725 es de la fábrica, no del edificio.',
          'Een kleine trapiche van de eerste graaf groeide uit tot het huidige industriële ingenio: in 1725 vroeg de graaf toestemming om hout te kappen voor de werken, en rond 1728/29 draaide het volop. Dat jaartal 1725 hoort bij de fabriek, niet bij het gebouw.',
          'En liten trapiche som förste greven grundade växte till dagens industriella ingenio: 1725 bad greven om lov att fälla virke till bygget, och omkring 1728/29 var det i full drift. Årtalet 1725 hör till fabriken, inte till byggnaden.'
        )
      },
      {
        title: l(
          'Why both are known',
          'Warum man beides weiß',
          'Por qué se sabe todo esto',
          'Waarom beide bekend zijn',
          'Varför man vet båda'
        ),
        text: l(
          'The palace stayed in noble hands for roughly two centuries, so a great deal survives in the Noble Archive in Toledo — inventories and rents from 1672 to 1729, and a 1730 consultation on “the construction of the sugar ingenio” of Count Íñigo Manrique de Lara.',
          'Der Palast blieb rund zwei Jahrhunderte in Adelshand, deshalb ist im Adelsarchiv in Toledo viel überliefert — Inventare und Pachten von 1672 bis 1729 und eine Consulta von 1730 über „den Bau des Zucker-ingenio" des Grafen Íñigo Manrique de Lara.',
          'El palacio permaneció en manos nobles unos dos siglos, así que en el Archivo de la Nobleza de Toledo se conserva mucho: inventarios y rentas de 1672 a 1729 y una consulta de 1730 sobre «la construcción del ingenio de azúcar» del conde Íñigo Manrique de Lara.',
          'Het paleis bleef zo’n twee eeuwen in adellijke handen, dus in het Adelsarchief in Toledo is veel bewaard — inventarissen en pachten van 1672 tot 1729 en een consulta uit 1730 over „de bouw van het suiker-ingenio" van graaf Íñigo Manrique de Lara.',
          'Palatset stannade i adliga händer i ungefär två sekler, så i Adelsarkivet i Toledo finns mycket bevarat — inventarier och arrenden från 1672 till 1729 och en consulta från 1730 om ”bygget av socker-ingeniot” av greve Íñigo Manrique de Lara.'
        )
      }
    ]
  },
  facade: {
    title: l(
      'Reading the facade',
      'Die Fassade lesen',
      'Leer la fachada',
      'De gevel lezen',
      'Att läsa fasaden'
    ),
    intro: l(
      'From the lane the front tells you more than you would expect — this is the part of El Ingenio anyone can enjoy.',
      'Von der Gasse aus verrät die Front mehr, als man erwartet — das ist der Teil von El Ingenio, den alle genießen können.',
      'Desde la calle, la fachada dice más de lo que parece: es la parte de El Ingenio que todos pueden disfrutar.',
      'Vanaf het straatje vertelt de voorgevel meer dan je verwacht — dit is het deel van El Ingenio dat iedereen kan genieten.',
      'Från gränden berättar framsidan mer än man tror — det är den del av El Ingenio som alla kan njuta av.'
    ),
    items: [
      {
        title: l('Esgrafiado', 'Esgrafiado', 'Esgrafiados', 'Esgrafiado', 'Esgrafiado'),
        text: l(
          'The wall carries painted and sgraffito decoration in geometric bands — diamonds and rectangles in earth tones and blue — on a rectangular body with a gabled roof that echoes the nearby church of San Antonio.',
          'Die Wand trägt gemalte und esgrafiado-Dekoration in geometrischen Bändern — Rauten und Rechtecke in Erdtönen und Blau — auf einem rechteckigen Baukörper mit Giebeldach, das an die nahe Kirche San Antonio erinnert.',
          'El muro luce decoración pintada y esgrafiada en bandas geométricas — rombos y rectángulos en tonos tierra y azul — sobre un cuerpo rectangular con techumbre a dos aguas que recuerda a la cercana iglesia de San Antonio.',
          'De muur draagt geschilderde en esgrafiado-decoratie in geometrische banden — ruiten en rechthoeken in aardtinten en blauw — op een rechthoekig lichaam met een zadeldak dat doet denken aan de nabije kerk van San Antonio.',
          'Väggen bär målad och esgrafiado-dekor i geometriska band — romber och rektanglar i jordfärger och blått — på en rektangulär kropp med sadeltak som påminner om den närliggande kyrkan San Antonio.'
        )
      },
      {
        title: l(
          'Two niches and a sundial',
          'Zwei Nischen und eine Sonnenuhr',
          'Dos hornacinas y un reloj de sol',
          'Twee nissen en een zonnewijzer',
          'Två nischer och ett solur'
        ),
        text: l(
          'Two niches once held sculptures of the Virgen del Carmen and San Raimundo, and the front carried at least two sundials. Some niches stand empty today, so read them as the building’s memory rather than a guarantee of what you will see.',
          'Zwei Nischen trugen einst Skulpturen der Virgen del Carmen und des San Raimundo, und die Front hatte mindestens zwei Sonnenuhren. Manche Nischen stehen heute leer — lest sie als Gedächtnis des Baus, nicht als Garantie dessen, was ihr seht.',
          'Dos hornacinas albergaron esculturas de la Virgen del Carmen y de San Raimundo, y la fachada tuvo al menos dos relojes de sol. Hoy algunas hornacinas están vacías: leedlas como memoria del edificio, no como garantía de lo que veréis.',
          'Twee nissen bevatten ooit beelden van de Virgen del Carmen en San Raimundo, en de voorgevel had minstens twee zonnewijzers. Sommige nissen zijn nu leeg — lees ze als het geheugen van het gebouw, niet als garantie van wat je ziet.',
          'Två nischer rymde en gång skulpturer av Virgen del Carmen och San Raimundo, och framsidan hade minst två solur. Vissa nischer står tomma i dag — läs dem som byggnadens minne, inte som en garanti för vad ni får se.'
        )
      },
      {
        title: l(
          'Coat of arms and chapel',
          'Wappen und Kapelle',
          'Escudo y capilla',
          'Wapen en kapel',
          'Vapensköld och kapell'
        ),
        text: l(
          'The counts left their stone coat of arms on the front, and in 1662 Pope Clement X allowed mass to be said in the building’s own chapel — a reminder that this was a lordly household, not only a workshop.',
          'Die Grafen hinterließen ihr steinernes Wappen an der Front, und 1662 erlaubte Papst Clemens X. die Messe in der eigenen Kapelle des Baus — ein Hinweis darauf, dass dies ein herrschaftlicher Haushalt war, nicht nur eine Werkstatt.',
          'Los condes dejaron su escudo de piedra en la fachada, y en 1662 el papa Clemente X permitió decir misa en la capilla propia del edificio — señal de que esto era una casa señorial, no solo un taller.',
          'De graven lieten hun stenen wapen op de voorgevel achter, en in 1662 stond paus Clemens X toe de mis te lezen in de eigen kapel van het gebouw — een teken dat dit een heerlijk huishouden was, niet alleen een werkplaats.',
          'Grevarna lämnade sin vapensköld i sten på framsidan, och 1662 tillät påven Clemens X att mässa lästes i byggnadens egen kapell — ett tecken på att detta var ett herrskapshushåll, inte bara en verkstad.'
        )
      }
    ]
  },
  mielDeCana: {
    title: l('Miel de caña', 'Miel de Caña', 'Miel de caña', 'Miel de caña', 'Miel de caña'),
    intro: l(
      'The dark syrup that Frigiliana is known for is still made inside El Ingenio, in the Nuestra Señora del Carmen factory.',
      'Der dunkle Sirup, für den Frigiliana bekannt ist, wird bis heute in El Ingenio hergestellt, in der Fabrik Nuestra Señora del Carmen.',
      'El jarabe oscuro por el que se conoce a Frigiliana se sigue elaborando dentro de El Ingenio, en la fábrica Nuestra Señora del Carmen.',
      'De donkere stroop waar Frigiliana om bekendstaat, wordt nog steeds in El Ingenio gemaakt, in de fabriek Nuestra Señora del Carmen.',
      'Den mörka sirap som Frigiliana är känt för tillverkas fortfarande inne i El Ingenio, i fabriken Nuestra Señora del Carmen.'
    ),
    items: [
      {
        title: l(
          'Not molasses',
          'Keine Melasse',
          'No es melaza',
          'Geen melasse',
          'Inte melass'
        ),
        text: l(
          'Miel de caña is concentrated cane juice — the whole unrefined juice, boiled down. Molasses is only what is left after sugar has crystallised out; this keeps everything. Try it on toast or fresh cheese, or over the classic fried aubergines.',
          'Miel de Caña ist eingedickter Zuckerrohrsaft — der ganze unraffinierte Saft, eingekocht. Melasse ist nur der Rest, wenn der Zucker auskristallisiert ist; hier bleibt alles erhalten. Probiert ihn auf Toast oder frischem Käse oder über den klassischen frittierten Auberginen.',
          'La miel de caña es zumo de caña concentrado — todo el jugo sin refinar, reducido al fuego. La melaza es solo lo que queda tras cristalizar el azúcar; aquí se conserva todo. Probadla con pan tostado o queso fresco, o sobre las clásicas berenjenas fritas.',
          'Miel de caña is ingedikt rietsap — het hele ongeraffineerde sap, ingekookt. Melasse is alleen wat overblijft nadat de suiker is uitgekristalliseerd; hier blijft alles behouden. Probeer het op toast of verse kaas, of over de klassieke gebakken aubergines.',
          'Miel de caña är indunstad rörsaft — hela den oraffinerade saften, nedkokt. Melass är bara det som blir kvar när sockret kristalliserat ut; här behålls allt. Prova den på rostat bröd eller färsk ost, eller över de klassiska friterade auberginerna.'
        )
      },
      {
        title: l(
          'The mill still turns',
          'Das Mahlwerk läuft noch',
          'El molino aún gira',
          'Het maalwerk draait nog',
          'Kvarnen går ännu'
        ),
        text: l(
          'The mill train, built and installed by the Díaz workshops of Vélez-Málaga in the 1950s, still works — now driven by electricity — and grinds cane on a few days each year. That is why the building is a production site, not a museum with fixed opening hours.',
          'Das Mahlwerk, in den 1950ern von den Werkstätten Díaz in Vélez-Málaga gebaut und eingebaut, läuft bis heute — jetzt elektrisch — und mahlt an einigen Tagen im Jahr Zuckerrohr. Deshalb ist der Bau eine Produktionsstätte, kein Museum mit festen Öffnungszeiten.',
          'El tren de molienda, fabricado e instalado por los talleres Díaz de Vélez-Málaga en los años 50, todavía funciona — ahora movido por electricidad — y muele caña algunos días al año. Por eso el edificio es un espacio de producción, no un museo con horario fijo.',
          'De maaltrein, in de jaren 50 gebouwd en geplaatst door de werkplaatsen Díaz uit Vélez-Málaga, werkt nog steeds — nu elektrisch aangedreven — en maalt op enkele dagen per jaar riet. Daarom is het gebouw een productielocatie, geen museum met vaste openingstijden.',
          'Kvarnverket, byggt och installerat av verkstäderna Díaz i Vélez-Málaga på 1950-talet, fungerar fortfarande — nu eldrivet — och mal rör några dagar om året. Därför är byggnaden en produktionsplats, inte ett museum med fasta öppettider.'
        )
      },
      {
        title: l(
          'A last of its kind',
          'Ein Letzter seiner Art',
          'El último de su clase',
          'Een laatste van zijn soort',
          'En sista i sitt slag'
        ),
        text: l(
          'The provincial council of Málaga calls the Frigiliana ingenio the last cane-sugar works of its kind still standing on the Iberian peninsula. Take that as the attributed distinction it is, and taste the result: at the Cruces de Mayo, neighbours still cook arropía with this syrup.',
          'Die Provinzverwaltung Málaga nennt das Ingenio von Frigiliana das letzte Zuckerrohrwerk seiner Art, das auf der iberischen Halbinsel noch steht. Nehmt es als die zugeschriebene Auszeichnung, die es ist, und kostet das Ergebnis: Zu den Cruces de Mayo kochen die Nachbarschaften bis heute Arropía aus diesem Sirup.',
          'La Diputación de Málaga llama al ingenio de Frigiliana el último de su clase que sigue en pie en la península ibérica. Tomadlo como la distinción atribuida que es, y probad el resultado: en las Cruces de Mayo, los vecinos aún cuecen arropía con este jarabe.',
          'De provincie Málaga noemt het ingenio van Frigiliana de laatste rietsuikerfabriek van zijn soort die nog op het Iberisch schiereiland staat. Neem het als de toegeschreven onderscheiding die het is, en proef het resultaat: bij de Cruces de Mayo koken buurtbewoners nog steeds arropía met deze stroop.',
          'Provinsstyrelsen i Málaga kallar Frigilianas ingenio det sista sockerrörsbruket i sitt slag som ännu står på Iberiska halvön. Ta det som den tillskrivna utmärkelse det är, och smaka på resultatet: vid Cruces de Mayo kokar grannskapen fortfarande arropía på denna sirap.'
        )
      }
    ]
  },
  ibex: {
    title: l(
      'The ibex on the roof',
      'Die Steinböcke auf dem Dach',
      'Las cabras monteses en el tejado',
      'De steenbokken op het dak',
      'Stenbockarna på taket'
    ),
    paragraphs: [
      l(
        'If you see two slim silhouettes on the ridge of El Ingenio, look twice: they are wild Iberian ibex (cabra montés), not goats. They come down from the Sierras de Tejeda, Almijara y Alhama, the natural park at the edge of the village, where the once-threatened herd has recovered to around 1,500 animals on the Málaga side.',
        'Wenn ihr zwei schlanke Silhouetten auf dem First von El Ingenio seht, schaut zweimal hin: Das sind wilde Iberiensteinböcke (cabra montés), keine Ziegen. Sie kommen aus den Sierras de Tejeda, Almijara y Alhama herab, dem Naturpark am Ortsrand, wo sich der einst bedrohte Bestand auf rund 1.500 Tiere auf der Málaga-Seite erholt hat.',
        'Si veis dos siluetas esbeltas en la cumbrera de El Ingenio, mirad dos veces: son cabras monteses salvajes, no cabras domésticas. Bajan de las Sierras de Tejeda, Almijara y Alhama, el parque natural al borde del pueblo, donde la población, antes amenazada, se ha recuperado hasta unas 1.500 cabezas en la vertiente malagueña.',
        'Zie je twee slanke silhouetten op de nok van El Ingenio, kijk dan twee keer: het zijn wilde Iberische steenbokken (cabra montés), geen geiten. Ze komen omlaag uit de Sierras de Tejeda, Almijara y Alhama, het natuurpark aan de rand van het dorp, waar de ooit bedreigde populatie is hersteld tot zo’n 1.500 dieren aan de Málaga-kant.',
        'Ser ni två smala silhuetter på nocken av El Ingenio, titta en gång till: det är vilda iberiska stenbockar (cabra montés), inte getter. De kommer ner från Sierras de Tejeda, Almijara y Alhama, naturparken i byns utkant, där den en gång hotade stammen har återhämtat sig till omkring 1 500 djur på Málaga-sidan.'
      ),
      l(
        'They wander the lanes and rooftops as they please, so a sighting is a gift rather than something we can promise. If it happens, you will have caught the sierra and the village in the same frame.',
        'Sie streifen durch Gassen und über Dächer, wie es ihnen gefällt — eine Sichtung ist ein Geschenk, nichts, was wir versprechen können. Wenn es passiert, habt ihr die Sierra und das Dorf im selben Bild.',
        'Deambulan por las calles y los tejados a su antojo, así que verlas es un regalo, no algo que podamos prometer. Si ocurre, habréis captado la sierra y el pueblo en la misma imagen.',
        'Ze zwerven door de straatjes en over de daken zoals het ze uitkomt, dus een waarneming is een geschenk, niet iets wat we kunnen beloven. Gebeurt het, dan heb je de sierra en het dorp in één beeld.',
        'De strövar genom gränder och över tak som de vill, så en skymt är en gåva, inte något vi kan lova. Händer det har ni fångat sierran och byn i samma bild.'
      )
    ]
  },
  closing: {
    title: l(
      'From El Ingenio into the old town',
      'Vom Ingenio weiter in die Altstadt',
      'De El Ingenio al casco antiguo',
      'Van El Ingenio de oude kern in',
      'Från El Ingenio in i gamla stan'
    ),
    lead: l(
      'El Ingenio marks the lower edge of the old town, a few minutes below Casa AMARA. From here the ceramic-panel walk begins nearby, and the white lanes of the Barribarto climb behind it.',
      'El Ingenio markiert den unteren Rand der Altstadt, wenige Minuten unterhalb von Casa AMARA. Von hier beginnt ganz in der Nähe der Weg der Keramiktafeln, und dahinter steigen die weißen Gassen des Barribarto hinauf.',
      'El Ingenio marca el borde bajo del casco antiguo, a pocos minutos por debajo de Casa AMARA. Desde aquí empieza cerca el recorrido de los azulejos, y detrás suben las calles blancas del Barribarto.',
      'El Ingenio markeert de onderrand van de oude kern, een paar minuten onder Casa AMARA. Vanaf hier begint vlakbij de route van de keramiekpanelen, en daarachter klimmen de witte straatjes van het Barribarto omhoog.',
      'El Ingenio markerar gamla stans nedre kant, några minuter nedanför Casa AMARA. Härifrån börjar keramikpanelernas vandring i närheten, och bakom stiger Barribartos vita gränder uppåt.'
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
