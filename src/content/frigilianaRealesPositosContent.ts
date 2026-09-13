import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaRealesPositosSeo: AmaraAuthoringSeo = {
  version: '2026-09-13-frigiliana-reales-positos-v3',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/08-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-13', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  landmark: {
    name: { en: 'Los Reales Pósitos', de: 'Los Reales Pósitos', es: 'Los Reales Pósitos', nl: 'Los Reales Pósitos', sv: 'Los Reales Pósitos' },
    // Operator on-site GPS fix (2026-09-13); confirms the Calle Real frontage near the Plaza del Ingenio.
    latitude: 36.791565,
    longitude: -3.895613,
    addressLocality: 'Frigiliana',
    addressRegion: 'Andalusia',
    addressCountry: 'ES',
    // Building is private (arches viewed from the lane); the flag marks the public lane.
    isAccessibleForFree: true
  },
  languages: {
    en: { title: 'Los Reales Pósitos in Frigiliana: The 1767 Grain Store', description: 'A public grain bank of 1767, built to secure the village’s supply through bad harvests. Now folded into private houses, its well-kept red-brick arches still stand out — a key witness to Frigiliana’s economic history.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Los Reales Pósitos in Frigiliana: der Kornspeicher von 1767', description: 'Eine öffentliche Getreidebank von 1767, gebaut, um die Versorgung des Dorfes durch Missernten zu sichern. Heute in Wohnhäuser integriert, heben sich die gut erhaltenen roten Ziegelbögen deutlich ab — ein zentrales Zeugnis der Wirtschaftsgeschichte.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Los Reales Pósitos de Frigiliana: el pósito de 1767', description: 'Una alhóndiga pública de 1767, levantada para asegurar el abastecimiento del pueblo en los malos años. Hoy integrada en viviendas, sus arcos de ladrillo rojo, bien conservados, aún destacan: testimonio clave de la historia económica de Frigiliana.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Los Reales Pósitos in Frigiliana: de graanschuur van 1767', description: 'Een openbare graanbank uit 1767, gebouwd om de voorziening van het dorp in slechte oogstjaren veilig te stellen. Nu opgenomen in woonhuizen, springen de goed bewaarde rode baksteenbogen nog in het oog — een sleuteltuige van de economische geschiedenis.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Los Reales Pósitos i Frigiliana: sädesmagasinet från 1767', description: 'En offentlig spannmålsbank från 1767, byggd för att trygga byns försörjning under dåliga skördeår. I dag infogad i bostadshus sticker de välbevarade rödtegelbågarna alltjämt ut — ett nyckelvittne om Frigilianas ekonomiska historia.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Reworked 2026-09-12 from the web synthesis: the 1767 date is verified;
 * the pósito was built by the Counts of Frigiliana (a seigneurial act, for the grain of their
 * lands), the institution itself predates the building (documented from 1749, probably 1640),
 * and the original fabric was three naves of round arches, of which the façade arcades and the
 * cellar vaults survive. On Calle Real, private today — arches viewed from the lane only, and
 * there is no coat of arms here (that is the Fuente Vieja). No photograph yet: typographic cover.
 */
export const frigilianaRealesPositosCopy = {
  hero: {
    kicker: l('Old town · Los Reales Pósitos', 'Altstadt · Los Reales Pósitos', 'Casco antiguo · Los Reales Pósitos', 'Oude kern · Los Reales Pósitos', 'Gamla stan · Los Reales Pósitos'),
    title: l('Los Reales Pósitos', 'Los Reales Pósitos', 'Los Reales Pósitos', 'Los Reales Pósitos', 'Los Reales Pósitos'),
    subtitle: l(
      'The village grain bank, and its red-brick arches',
      'Die Getreidebank des Dorfes und ihre roten Ziegelbögen',
      'El pósito del pueblo y sus arcos de ladrillo rojo',
      'De graanbank van het dorp en haar rode baksteenbogen',
      'Byns spannmålsbank och dess rödtegelbågar'
    ),
    paragraphs: [
      l(
        'Set into the fabric of the old town, at the foot of Calle Real, are Los Reales Pósitos, a public grain store the Counts of Frigiliana had built in 1767. A pósito was a grain bank: it kept a reserve to secure the villagers’ supply — and their seed for the next sowing — through bad harvest years. The structure is now folded into private houses, but its well-kept red-brick arches still stand clear of the surrounding whitewash, a central witness to how Frigiliana fed and financed itself.',
        'In das Gefüge der Altstadt eingelassen, am Fuß der Calle Real, liegen Los Reales Pósitos, ein öffentlicher Kornspeicher, den die Grafen von Frigiliana 1767 errichten ließen. Ein Pósito war eine Getreidebank: Er hielt eine Reserve, um die Versorgung der Dorfbewohner — und ihr Saatgut für die nächste Aussaat — durch Missernten zu sichern. Der Bau ist heute in Wohnhäuser integriert, doch seine gut erhaltenen roten Ziegelbögen heben sich weiterhin klar von der umgebenden Tünche ab — ein zentrales Zeugnis dafür, wie Frigiliana sich ernährte und finanzierte.',
        'Encajados en el tejido del casco antiguo, al pie de la calle Real, están Los Reales Pósitos, un almacén público de grano que los Condes de Frigiliana mandaron construir en 1767. Un pósito era una alhóndiga: guardaba una reserva para asegurar el abastecimiento de los vecinos —y su simiente para la siembra siguiente— en los años de malas cosechas. La estructura hoy está integrada en viviendas, pero sus arcos de ladrillo rojo, bien conservados, siguen destacando sobre el encalado del entorno: testimonio central de cómo Frigiliana se alimentaba y se financiaba.',
        'Ingebed in het weefsel van de oude kern, aan de voet van de Calle Real, liggen Los Reales Pósitos, een openbare graanschuur die de Graven van Frigiliana in 1767 lieten bouwen. Een pósito was een graanbank: hij hield een reserve om de voorziening van de dorpelingen — en hun zaaigoed voor het volgende seizoen — door slechte oogstjaren veilig te stellen. De structuur is nu opgenomen in woonhuizen, maar de goed bewaarde rode baksteenbogen steken nog helder af tegen het omringende witsel — een sleuteltuige van hoe Frigiliana zich voedde en financierde.',
        'Infogade i gamla stans väv, vid foten av Calle Real, ligger Los Reales Pósitos, ett offentligt sädesmagasin som grevarna av Frigiliana lät uppföra 1767. En pósito var en spannmålsbank: den höll en reserv för att trygga bybornas försörjning — och deras utsäde till nästa sådd — genom dåliga skördeår. Byggnaden är i dag infogad i bostadshus, men dess välbevarade rödtegelbågar sticker fortfarande tydligt ut mot den omgivande kalkputsen — ett centralt vittne om hur Frigiliana födde och finansierade sig.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '1767', label: l('Built by the Counts of Frigiliana', 'Von den Grafen von Frigiliana erbaut', 'Levantado por los Condes de Frigiliana', 'Gebouwd door de Graven van Frigiliana', 'Byggt av grevarna av Frigiliana') },
      { value: 'Pósito', label: l('A grain bank against bad harvests', 'Getreidebank gegen Missernten', 'Alhóndiga contra las malas cosechas', 'Graanbank tegen slechte oogsten', 'Spannmålsbank mot dåliga skördar') },
      { value: '3 naves', label: l('Once three naves of round arches', 'Einst drei Schiffe mit Rundbögen', 'Antaño tres naves de arcos de medio punto', 'Ooit drie beuken met rondbogen', 'En gång tre skepp med rundbågar') },
      { value: 'Privado', label: l('Now folded into private houses', 'Heute in Wohnhäuser integriert', 'Hoy integrado en viviendas', 'Nu opgenomen in woonhuizen', 'I dag infogat i bostadshus') }
    ],
    note: l(
      'The 1767 date and the pósito function are confirmed by the municipal and local heritage record; the institution itself is older than the building. The structure is private today; the arches are seen from the lane, not from inside.',
      'Die Datierung 1767 und die Pósito-Funktion sind durch den kommunalen und lokalen Denkmalbestand bestätigt; die Institution selbst ist älter als der Bau. Der Bau ist heute privat; die Bögen sieht man von der Gasse, nicht von innen.',
      'La fecha de 1767 y la función de pósito están confirmadas por el registro municipal y patrimonial local; la institución en sí es más antigua que el edificio. La estructura es hoy privada; los arcos se ven desde la calle, no desde dentro.',
      'De datering 1767 en de pósito-functie zijn bevestigd door het gemeentelijke en lokale erfgoedregister; de instelling zelf is ouder dan het gebouw. De structuur is nu privé; de bogen zie je vanaf de straat, niet van binnen.',
      'Årtalet 1767 och pósito-funktionen bekräftas av det kommunala och lokala kulturarvsregistret; institutionen själv är äldre än byggnaden. Byggnaden är i dag privat; bågarna ses från gränden, inte inifrån.'
    )
  },
  sections: [
    {
      eyebrow: l('What a pósito was', 'Was ein Pósito war', 'Qué era un pósito', 'Wat een pósito was', 'Vad en pósito var'),
      title: l('A public bank made of grain', 'Eine öffentliche Bank aus Getreide', 'Un banco público hecho de grano', 'Een openbare bank van graan', 'En offentlig bank av spannmål'),
      text: l(
        'Before there were rural credit banks, there were pósitos. A pósito stored communal grain and lent it out: seed for the next planting, bread grain to carry families through a lean winter, to be paid back after the harvest. Frigiliana had one before it had this building — the institution is documented here from 1749, and probably goes back to 1640, when the village became a villa in its own right — and the 1767 store gave it a lasting home: a buffer against the bad years in a village whose living came off steep, uncertain land.',
        'Bevor es ländliche Kreditbanken gab, gab es Pósitos. Ein Pósito lagerte gemeinschaftliches Getreide und lieh es aus: Saatgut für die nächste Aussaat, Brotgetreide, um Familien durch einen mageren Winter zu bringen, zurückzuzahlen nach der Ernte. Frigiliana hatte einen, bevor es diesen Bau hatte — die Einrichtung ist hier ab 1749 belegt und geht wohl auf 1640 zurück, als der Ort eigenständige Villa wurde — und der Speicher von 1767 gab ihr ein festes Haus: ein Puffer gegen die schlechten Jahre in einem Dorf, dessen Auskommen von steilem, unsicherem Land kam.',
        'Antes de que hubiera cajas rurales, había pósitos. Un pósito almacenaba grano común y lo prestaba: simiente para la siembra siguiente, trigo panificable para llevar a las familias por un invierno flaco, a devolver tras la cosecha. Frigiliana tuvo uno antes de tener este edificio —la institución está documentada aquí desde 1749 y probablemente se remonta a 1640, cuando el pueblo se hizo villa propia— y el almacén de 1767 le dio sede duradera: un colchón contra los malos años en un pueblo cuyo sustento salía de una tierra empinada e incierta.',
        'Voordat er plattelandskredietbanken waren, waren er pósitos. Een pósito bewaarde gemeenschappelijk graan en leende het uit: zaaigoed voor de volgende inzaai, broodgraan om gezinnen door een magere winter te helpen, terug te betalen na de oogst. Frigiliana had er een voordat het dit gebouw had — de instelling is hier vanaf 1749 gedocumenteerd en gaat wellicht terug tot 1640, toen het dorp een eigen villa werd — en de schuur van 1767 gaf haar een blijvend onderkomen: een buffer tegen de slechte jaren in een dorp waarvan het bestaan van steil, onzeker land kwam.',
        'Innan det fanns lantbrukskreditbanker fanns pósitos. En pósito lagrade gemensam spannmål och lånade ut den: utsäde till nästa sådd, brödsäd för att bära familjer genom en mager vinter, att betalas tillbaka efter skörden. Frigiliana hade en innan byn hade denna byggnad — institutionen är belagd här från 1749 och går troligen tillbaka till 1640, då byn blev egen villa — och magasinet från 1767 gav den ett varaktigt hem: en buffert mot de dåliga åren i en by vars uppehälle kom från brant, osäker mark.'
      )
    },
    {
      eyebrow: l('The red arches', 'Die roten Bögen', 'Los arcos rojos', 'De rode bogen', 'De röda bågarna'),
      title: l('What to look for from the lane', 'Worauf ihr von der Gasse achtet', 'Qué buscar desde la calle', 'Waar je vanaf de straat op let', 'Vad ni ser efter från gränden'),
      text: l(
        'The tell is the brickwork. Where the rest of the old town is whitewashed, the Pósitos keep a run of red-brick arches — the surviving arcaded front of a once-larger store, with its vaulted cellars still below — well preserved and unmistakable against the lime. The building has since been absorbed into private houses, so this is a look-up-as-you-pass sight rather than a visit, and there is no coat of arms to find here (that belongs to the Fuente Vieja) — but once you know the arches, you cannot walk past them without seeing the grain store hidden in the wall.',
        'Der Hinweis ist das Ziegelwerk. Wo die übrige Altstadt gekalkt ist, bewahren die Pósitos eine Reihe roter Ziegelbögen — die erhaltene Arkadenfront eines einst größeren Speichers, mit den Kellergewölben darunter —, gut erhalten und unverkennbar gegen den Kalk. Der Bau ging inzwischen in Wohnhäuser über, das ist also eher ein Sieh-im-Vorbeigehen-hoch als ein Besuch, und ein Wappen sucht man hier vergebens (das gehört zur Fuente Vieja) — doch wer die Bögen einmal kennt, geht nicht mehr an ihnen vorbei, ohne den Kornspeicher in der Wand zu sehen.',
        'La pista es la fábrica de ladrillo. Donde el resto del casco antiguo está encalado, los Pósitos conservan una hilera de arcos de ladrillo rojo —el frente arqueado que queda de un almacén antes mayor, con sus sótanos abovedados debajo—, bien conservados e inconfundibles sobre la cal. El edificio quedó absorbido por viviendas, así que es un mira-hacia-arriba-al-pasar más que una visita, y aquí no hay escudo que buscar (ese es de la Fuente Vieja); pero, una vez conocidos los arcos, no se pasa junto a ellos sin ver el pósito oculto en el muro.',
        'De aanwijzing is het metselwerk. Waar de rest van de oude kern gekalkt is, bewaren de Pósitos een rij rode baksteenbogen — het bewaarde arcadefront van een ooit groter magazijn, met de gewelfde kelders eronder —, goed bewaard en onmiskenbaar tegen de kalk. Het gebouw is inmiddels opgegaan in woonhuizen, dus dit is een kijk-omhoog-in-het-voorbijgaan eerder dan een bezoek, en een wapen zoek je hier tevergeefs (dat hoort bij de Fuente Vieja) — maar wie de bogen eenmaal kent, loopt er niet meer langs zonder de graanschuur in de muur te zien.',
        'Ledtråden är tegelmuren. Där resten av gamla stan är kalkad behåller Pósitos en rad rödtegelbågar — den bevarade arkadfronten av ett en gång större magasin, med dess valvkällare nedanför —, välbevarade och omisskännliga mot kalken. Byggnaden har sedan uppgått i bostadshus, så detta är ett titta-upp-när-du-passerar snarare än ett besök, och någon vapensköld finns inte att leta efter här (den hör till Fuente Vieja) — men när man väl känner bågarna går man inte förbi dem utan att se sädesmagasinet dolt i muren.'
      )
    },
    {
      eyebrow: l('Economic history', 'Wirtschaftsgeschichte', 'Historia económica', 'Economische geschiedenis', 'Ekonomisk historia'),
      title: l('The other half of the sugar story', 'Die andere Hälfte der Zuckergeschichte', 'La otra mitad de la historia del azúcar', 'De andere helft van het suikerverhaal', 'Den andra halvan av sockerhistorien'),
      text: l(
        'El Ingenio tells the grand economy of Frigiliana — the lords, the cane, the sugar. The Pósitos tell the everyday one: how ordinary households were kept from hunger when a harvest failed. Read together, the two buildings give the fuller picture — a working village that lived off difficult land and built the institutions to survive its bad years.',
        'El Ingenio erzählt die große Wirtschaft Frigilianas — die Herren, das Zuckerrohr, den Zucker. Die Pósitos erzählen die alltägliche: wie gewöhnliche Haushalte vor dem Hunger bewahrt wurden, wenn eine Ernte ausfiel. Zusammen gelesen, geben die beiden Bauten das vollständigere Bild — ein arbeitendes Dorf, das von schwierigem Land lebte und die Einrichtungen baute, um seine schlechten Jahre zu überstehen.',
        'El Ingenio cuenta la gran economía de Frigiliana: los señores, la caña, el azúcar. Los Pósitos cuentan la cotidiana: cómo se libraba del hambre a las casas corrientes cuando fallaba una cosecha. Leídos juntos, los dos edificios dan la imagen más completa: un pueblo trabajador que vivía de una tierra difícil y construyó las instituciones para sobrevivir a sus malos años.',
        'El Ingenio vertelt de grote economie van Frigiliana — de heren, het riet, de suiker. De Pósitos vertellen de alledaagse: hoe gewone huishoudens van honger werden gevrijwaard wanneer een oogst mislukte. Samen gelezen geven de twee gebouwen het vollere beeld — een werkend dorp dat van moeilijke grond leefde en de instellingen bouwde om zijn slechte jaren te overleven.',
        'El Ingenio berättar Frigilianas stora ekonomi — herrarna, sockerrören, sockret. Pósitos berättar den vardagliga: hur vanliga hushåll hölls från svält när en skörd slog fel. Lästa tillsammans ger de två byggnaderna den fullare bilden — en arbetande by som levde av svår mark och byggde institutionerna för att överleva sina dåliga år.'
      )
    }
  ],
  pullQuote: l(
    'A public store of grain, built so a failed harvest need not mean a hungry winter.',
    'Ein öffentlicher Getreidespeicher, gebaut, damit eine Missernte keinen Hungerwinter bedeuten musste.',
    'Un almacén público de grano, hecho para que una mala cosecha no significara un invierno de hambre.',
    'Een openbare graanvoorraad, gebouwd zodat een mislukte oogst geen hongerwinter hoefde te betekenen.',
    'Ett offentligt spannmålsförråd, byggt så att en utebliven skörd inte behövde betyda en hungervinter.'
  ),
  visitFacts: {
    heading: l('Visit & location', 'Besuch & Lage', 'Visita y ubicación', 'Bezoek & ligging', 'Besök & läge'),
    items: [
      {
        label: l('Location', 'Standort', 'Ubicación', 'Ligging', 'Läge'),
        value: l(
          'On Calle Real, at the corner of Calle Hernando el Darra, near the Plaza del Ingenio.',
          'An der Calle Real, an der Ecke zur Calle Hernando el Darra, nahe der Plaza del Ingenio.',
          'En la calle Real, en la esquina con la calle Hernando el Darra, cerca de la Plaza del Ingenio.',
          'Aan de Calle Real, op de hoek met de Calle Hernando el Darra, bij de Plaza del Ingenio.',
          'Vid Calle Real, i hörnet mot Calle Hernando el Darra, nära Plaza del Ingenio.'
        )
      },
      {
        label: l('Distance', 'Distanz', 'Distancia', 'Afstand', 'Avstånd'),
        value: l(
          'A short walk down Calle Real from Casa AMARA, toward the Plaza del Ingenio.',
          'Ein kurzer Weg die Calle Real hinab von Casa AMARA, Richtung Plaza del Ingenio.',
          'Un corto paseo bajando por la calle Real desde Casa AMARA, hacia la Plaza del Ingenio.',
          'Een korte wandeling omlaag door de Calle Real vanaf Casa AMARA, richting de Plaza del Ingenio.',
          'En kort promenad ner för Calle Real från Casa AMARA, mot Plaza del Ingenio.'
        )
      },
      {
        label: l('Access', 'Zugang', 'Acceso', 'Toegang', 'Tillgång'),
        value: l(
          'Folded into private houses — the brick arches are seen from the outside only. The lane itself is public around the clock.',
          'In Privathäuser integriert — die Ziegelbögen sind nur von außen zu sehen. Die Gasse selbst ist rund um die Uhr öffentlich.',
          'Integrado en viviendas: los arcos de ladrillo solo se ven desde fuera. La calle en sí es pública a todas horas.',
          'Opgenomen in woonhuizen — de baksteenbogen zijn alleen van buiten te zien. Het straatje zelf is dag en nacht openbaar.',
          'Infogat i bostadshus — tegelbågarna ses endast utifrån. Själva gränden är offentlig dygnet runt.'
        )
      },
      {
        label: l('Best time', 'Beste Zeit', 'Mejor hora', 'Beste tijd', 'Bästa tid'),
        value: l(
          'By day, for the architectural contrast of red brick against the whitewash.',
          'Tagsüber, für den architektonischen Kontrast von rotem Ziegel und Kalk.',
          'De día, por el contraste arquitectónico del ladrillo rojo con la cal.',
          'Overdag, voor het architectonische contrast van rode baksteen tegen het witsel.',
          'Dagtid, för den arkitektoniska kontrasten mellan rött tegel och kalkputs.'
        )
      }
    ]
  },
  nearby: {
    parts: [
      {
        text: l(
          'From here the lane climbs on toward the ',
          'Von hier steigt die Gasse weiter hinauf zum ',
          'Desde aquí la calle sube hacia el ',
          'Vanaf hier klimt het straatje verder naar het ',
          'Härifrån stiger gränden vidare mot '
        )
      },
      {
        token: 'frigiliana_callejon_penon',
        label: l('Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón')
      },
      {
        text: l(
          ', or drops back down to the Plaza del Ingenio and ',
          ', oder fällt zurück hinab zur Plaza del Ingenio und ',
          ', o baja de nuevo a la Plaza del Ingenio y ',
          ', of daalt terug naar de Plaza del Ingenio en ',
          ', eller sjunker tillbaka ner till Plaza del Ingenio och '
        )
      },
      {
        token: 'frigiliana_ingenio',
        label: l('El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio', 'El Ingenio')
      },
      { text: l('.', '.', '.', '.', '.') }
    ]
  },
  closing: {
    title: l('Spot the arches on your walk', 'Entdeckt die Bögen auf eurem Gang', 'Descubrid los arcos en vuestro paseo', 'Ontdek de bogen op je wandeling', 'Upptäck bågarna på er vandring'),
    lead: l(
      'The Reales Pósitos are woven into the lanes of the old town, minutes from Casa AMARA. Note the red arches as you pass — the everyday economy that carried the village through its lean years.',
      'Die Reales Pósitos sind in die Gassen der Altstadt eingewoben, wenige Minuten von Casa AMARA. Merkt euch die roten Bögen im Vorbeigehen — die alltägliche Wirtschaft, die das Dorf durch die mageren Jahre trug.',
      'Los Reales Pósitos están entretejidos en las calles del casco antiguo, a pocos minutos de Casa AMARA. Fijaos en los arcos rojos al pasar: la economía cotidiana que sostuvo al pueblo en los años flacos.',
      'De Reales Pósitos zijn verweven met de straatjes van de oude kern, minuten van Casa AMARA. Let op de rode bogen in het voorbijgaan — de alledaagse economie die het dorp door de magere jaren droeg.',
      'Los Reales Pósitos är invävda i gamla stans gränder, några minuter från Casa AMARA. Lägg märke till de röda bågarna när ni passerar — den vardagliga ekonomin som bar byn genom de magra åren.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
