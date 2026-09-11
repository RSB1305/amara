import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaCasaDelAperoSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-casa-del-apero-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image stays inside the published image contract; no dedicated Casa del Apero
     photograph exists yet, so a stable Frigiliana pueblo image carries the share card. */
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
      title: 'Casa del Apero in Frigiliana: From Farm Store to the Village’s Cultural Heart',
      description:
        'Built in the early 17th century as the farm annex of El Ingenio, the Casa del Apero is now Frigiliana’s cultural centre — library, archaeological museum, historical archive and tourist office.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Casa del Apero in Frigiliana: Vom Wirtschaftshof zum kulturellen Herz des Dorfes',
      description:
        'Anfang des 17. Jahrhunderts als Wirtschaftshof von El Ingenio gebaut, ist die Casa del Apero heute Frigilianas Kulturzentrum — Bibliothek, Archäologisches Museum, Gemeindearchiv und Tourismusbüro.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Casa del Apero en Frigiliana: del almacén agrícola al corazón cultural del pueblo',
      description:
        'Construida a principios del siglo XVII como dependencia agrícola de El Ingenio, la Casa del Apero es hoy el centro cultural de Frigiliana: biblioteca, museo arqueológico, archivo histórico y oficina de turismo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Casa del Apero in Frigiliana: van boerenopslag tot cultureel hart van het dorp',
      description:
        'Begin 17e eeuw gebouwd als landbouwbijgebouw van El Ingenio, is de Casa del Apero vandaag het cultureel centrum van Frigiliana — bibliotheek, archeologisch museum, historisch archief en toeristenbureau.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Casa del Apero i Frigiliana: från lantbruksmagasin till byns kulturella hjärta',
      description:
        'Byggd i början av 1600-talet som El Ingenios lantbruksbyggnad är Casa del Apero i dag Frigilianas kulturcentrum — bibliotek, arkeologiskt museum, historiskt arkiv och turistbyrå.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page, sibling to El Ingenio and the ceramic
 * panels. Content follows research-001 (2026-09-11). No dedicated photograph of the
 * building exists yet, so the page opens with a typographic cover rather than a panorama
 * hero; when photography arrives, the cover becomes a LocationPanoramaHero and image
 * splits are added. Opening hours, admission and museum holdings stay current checks.
 */
export const frigilianaCasaDelAperoCopy = {
  hero: {
    kicker: l(
      'Old town · Casa del Apero',
      'Altstadt · Casa del Apero',
      'Casco antiguo · Casa del Apero',
      'Oude kern · Casa del Apero',
      'Gamla stan · Casa del Apero'
    ),
    title: l('Casa del Apero', 'Casa del Apero', 'Casa del Apero', 'Casa del Apero', 'Casa del Apero'),
    subtitle: l(
      'From farm store to the village’s cultural heart',
      'Vom Wirtschaftshof zum kulturellen Herz des Dorfes',
      'Del almacén agrícola al corazón cultural del pueblo',
      'Van boerenopslag tot cultureel hart van het dorp',
      'Från lantbruksmagasin till byns kulturella hjärta'
    ),
    paragraphs: [
      l(
        'Just below the church stands the Casa del Apero, once the farm annex of El Ingenio — the granary, stables and store for the apero, the sugar estate’s working gear. Restored in the 1990s, it is now the practical heart of the old town: the municipal library, the Frigiliana archaeological museum, the historical archive and the tourist office all share its courtyard. If you want current opening times, a festival programme or a village map, this is where to ask.',
        'Gleich unterhalb der Kirche steht die Casa del Apero, einst der Wirtschaftshof von El Ingenio — Speicher, Ställe und Lager für das apero, das Arbeitsgerät des Zuckerguts. In den 1990ern saniert, ist sie heute das praktische Herz der Altstadt: Gemeindebibliothek, das Archäologische Museum von Frigiliana, das Gemeindearchiv und das Tourismusbüro teilen sich ihren Innenhof. Für aktuelle Öffnungszeiten, ein Festprogramm oder einen Ortsplan fragt ihr hier.',
        'Justo debajo de la iglesia se encuentra la Casa del Apero, antaño dependencia agrícola de El Ingenio: granero, cuadras y almacén para el apero, los útiles del ingenio azucarero. Restaurada en los años 90, es hoy el corazón práctico del casco antiguo: la biblioteca municipal, el Museo Arqueológico de Frigiliana, el archivo histórico y la oficina de turismo comparten su patio. Para horarios actualizados, un programa de fiestas o un plano del pueblo, se pregunta aquí.',
        'Net onder de kerk staat de Casa del Apero, ooit het landbouwbijgebouw van El Ingenio — graanopslag, stallen en berging voor het apero, het werkgereedschap van het suikergoed. Gerestaureerd in de jaren 90 is het nu het praktische hart van de oude kern: de gemeentebibliotheek, het archeologisch museum van Frigiliana, het historisch archief en het toeristenbureau delen de binnenplaats. Voor actuele openingstijden, een feestprogramma of een plattegrond vraag je hier.',
        'Strax nedanför kyrkan står Casa del Apero, en gång El Ingenios lantbruksbyggnad — spannmålsbod, stall och förråd för aperot, sockergodsets redskap. Renoverad på 1990-talet är den i dag gamla stans praktiska hjärta: kommunbiblioteket, Frigilianas arkeologiska museum, det historiska arkivet och turistbyrån delar dess gårdsplan. För aktuella öppettider, ett festprogram eller en bykarta frågar ni här.'
      )
    ]
  },
  keyFigures: {
    figures: [
      {
        value: '17. Jh.',
        label: l(
          'Built as El Ingenio’s farm annex',
          'Als Wirtschaftshof von El Ingenio gebaut',
          'Construida como dependencia de El Ingenio',
          'Gebouwd als bijgebouw van El Ingenio',
          'Byggd som El Ingenios lantbruksbyggnad'
        )
      },
      {
        value: '1990er',
        label: l(
          'Restored into the cultural centre',
          'Saniert zum Kulturzentrum',
          'Restaurada como centro cultural',
          'Gerestaureerd tot cultureel centrum',
          'Renoverad till kulturcentrum'
        )
      },
      {
        value: 'Patio',
        label: l(
          'Courtyard plan, rammed earth and brick',
          'Innenhof, Stampflehm und Ziegel',
          'Planta con patio, tapial y ladrillo',
          'Binnenplaats, stampleem en baksteen',
          'Gårdsplan, stampjord och tegel'
        )
      },
      {
        value: '4-in-1',
        label: l(
          'Library · museum · archive · tourist office',
          'Bibliothek · Museum · Archiv · Tourismusbüro',
          'Biblioteca · museo · archivo · turismo',
          'Bibliotheek · museum · archief · toerisme',
          'Bibliotek · museum · arkiv · turistbyrå'
        )
      }
    ],
    note: l(
      'Dating and uses from municipal and heritage sources; opening hours, admission and the museum’s holdings are current checks, not fixed facts.',
      'Datierung und Nutzung aus Gemeinde- und Denkmalquellen; Öffnungszeiten, Eintritt und Museumsbestände sind aktuelle Prüfpunkte, keine festen Angaben.',
      'Datación y usos de fuentes municipales y patrimoniales; horarios, entradas y los fondos del museo son datos a comprobar, no hechos fijos.',
      'Datering en gebruik uit gemeentelijke en erfgoedbronnen; openingstijden, toegang en de museumcollectie zijn actuele controlepunten, geen vaste feiten.',
      'Datering och användning från kommunala och kulturarvskällor; öppettider, entré och museets samlingar är aktuella kontrollpunkter, inte fasta fakta.'
    )
  },
  sections: [
    {
      eyebrow: l('The name', 'Der Name', 'El nombre', 'De naam', 'Namnet'),
      title: l(
        'The apero of the sugar estate',
        'Das apero des Zuckerguts',
        'El apero del ingenio',
        'Het apero van het suikergoed',
        'Sockergodsets apero'
      ),
      text: l(
        'Apero means the working gear of a farm — the tools, the tackle, the animals’ harness. In the early seventeenth century this building was exactly that for El Ingenio next door: a granary, stables and store that kept the cane estate running. The two buildings belong together, and reading them side by side is the quickest way to picture how sugar shaped the lower village.',
        'Apero bezeichnet das Arbeitsgerät eines Hofs — Werkzeug, Geschirr, das Zaumzeug der Tiere. Anfang des 17. Jahrhunderts war dieser Bau genau das für das benachbarte El Ingenio: Speicher, Ställe und Lager, die das Zuckergut am Laufen hielten. Beide Gebäude gehören zusammen, und wer sie nebeneinander liest, versteht am schnellsten, wie der Zucker den unteren Ort prägte.',
        'Apero es el conjunto de útiles de una explotación: herramientas, aparejos, los arreos de los animales. A principios del siglo XVII este edificio era justo eso para El Ingenio contiguo: granero, cuadras y almacén que mantenían en marcha el ingenio azucarero. Los dos edificios van juntos, y leerlos uno al lado del otro es la forma más rápida de imaginar cómo el azúcar dio forma a la parte baja del pueblo.',
        'Apero staat voor het werkgereedschap van een boerderij — gereedschap, tuig, het harnas van de dieren. Begin zeventiende eeuw was dit gebouw precies dat voor het naastgelegen El Ingenio: graanopslag, stallen en berging die het suikergoed draaiende hielden. De twee gebouwen horen bij elkaar, en ze naast elkaar lezen is de snelste manier om te zien hoe suiker het lagere dorp vormde.',
        'Apero betecknar en gårds redskap — verktyg, seldon, djurens sadelutrustning. I början av 1600-talet var denna byggnad just det för El Ingenio intill: spannmålsbod, stall och förråd som höll sockergodset i gång. De två byggnaderna hör ihop, och att läsa dem sida vid sida är snabbaste sättet att förstå hur sockret formade den nedre byn.'
      )
    },
    {
      eyebrow: l('The fabric', 'Der Bau', 'La fábrica', 'De bouw', 'Byggnaden'),
      title: l(
        'A courtyard in earth and brick',
        'Ein Innenhof aus Lehm und Ziegel',
        'Un patio de tapial y ladrillo',
        'Een binnenplaats van leem en baksteen',
        'En gård av jord och tegel'
      ),
      text: l(
        'The building keeps a plain, working character: a rectangular plan set around an interior courtyard, two storeys, walls of rammed earth laid between courses of stone, and arches, pillars and a main doorway of brick. It was made to store and to shelter, not to impress — and that honesty is part of its charm on a slow walk through the lower lanes.',
        'Der Bau bewahrt einen schlichten, arbeitenden Charakter: ein rechteckiger Grundriss um einen Innenhof, zwei Geschosse, Wände aus Stampflehm zwischen Steinlagen und Bögen, Pfeiler und ein Haupttor aus Ziegel. Er war zum Lagern und Unterstellen gebaut, nicht zum Beeindrucken — und diese Ehrlichkeit gehört auf einem ruhigen Gang durch die unteren Gassen zu seinem Reiz.',
        'El edificio conserva un carácter sencillo y funcional: planta rectangular en torno a un patio interior, dos alturas, muros de tapial entre hiladas de piedra y arcos, pilares y una portada de ladrillo. Se hizo para almacenar y guarecer, no para impresionar, y esa honestidad es parte de su encanto en un paseo tranquilo por las calles bajas.',
        'Het gebouw behoudt een sober, werkend karakter: een rechthoekige plattegrond rond een binnenplaats, twee verdiepingen, muren van stampleem tussen lagen steen, en bogen, pijlers en een hoofdpoort van baksteen. Het was gemaakt om op te slaan en te beschutten, niet om te imponeren — en die eerlijkheid hoort bij zijn charme tijdens een rustige wandeling door de lagere straatjes.',
        'Byggnaden behåller en enkel, arbetande karaktär: en rektangulär plan kring en inre gård, två våningar, väggar av stampjord mellan varv av sten och bågar, pelare och en huvudport av tegel. Den byggdes för att lagra och skydda, inte för att imponera — och den ärligheten är en del av dess charm på en lugn vandring genom de nedre gränderna.'
      )
    },
    {
      eyebrow: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
      title: l(
        'The cultural heart of the village',
        'Das kulturelle Herz des Dorfes',
        'El corazón cultural del pueblo',
        'Het culturele hart van het dorp',
        'Byns kulturella hjärta'
      ),
      text: l(
        'After the town acquired the building in the early 1980s and restored it through the 1990s, the Casa del Apero became the place where village life gathers: the municipal library, the Frigiliana archaeological museum, a temporary-exhibition hall, the historical archive and the tourist office. It is the natural first stop on an old-town walk — but treat opening times, admission and what is currently on show as things to check on the day.',
        'Nachdem die Gemeinde den Bau Anfang der 1980er erworben und in den 1990ern saniert hatte, wurde die Casa del Apero zum Ort, an dem das Dorfleben zusammenkommt: Gemeindebibliothek, das Archäologische Museum von Frigiliana, ein Wechselausstellungssaal, das Gemeindearchiv und das Tourismusbüro. Sie ist der natürliche erste Halt eines Altstadt-Gangs — Öffnungszeiten, Eintritt und was gerade gezeigt wird, prüft ihr aber am besten vor Ort.',
        'Después de que el ayuntamiento adquiriera el edificio a principios de los años 80 y lo restaurara en los 90, la Casa del Apero se convirtió en el lugar donde se reúne la vida del pueblo: la biblioteca municipal, el Museo Arqueológico de Frigiliana, una sala de exposiciones temporales, el archivo histórico y la oficina de turismo. Es la primera parada natural de un paseo por el casco antiguo, pero conviene comprobar horarios, entradas y lo que se expone en ese momento.',
        'Nadat de gemeente het gebouw begin jaren 80 had verworven en het in de jaren 90 restaureerde, werd de Casa del Apero de plek waar het dorpsleven samenkomt: de gemeentebibliotheek, het archeologisch museum van Frigiliana, een zaal voor tijdelijke tentoonstellingen, het historisch archief en het toeristenbureau. Het is de natuurlijke eerste stop van een wandeling door de oude kern — maar controleer openingstijden, toegang en wat er nu te zien is ter plaatse.',
        'Efter att kommunen förvärvat byggnaden i början av 1980-talet och renoverat den under 1990-talet blev Casa del Apero platsen där bylivet samlas: kommunbiblioteket, Frigilianas arkeologiska museum, en sal för tillfälliga utställningar, det historiska arkivet och turistbyrån. Det är det naturliga första stoppet på en vandring i gamla stan — men kontrollera öppettider, entré och vad som visas för tillfället på plats.'
      )
    }
  ],
  pullQuote: l(
    'The store that kept the sugar estate running is now where the village keeps its memory.',
    'Das Lager, das das Zuckergut am Laufen hielt, hütet heute das Gedächtnis des Dorfes.',
    'El almacén que mantenía el ingenio es hoy donde el pueblo guarda su memoria.',
    'De opslag die het suikergoed draaiende hield, is nu waar het dorp zijn geheugen bewaart.',
    'Förrådet som höll sockergodset i gång är i dag där byn bevarar sitt minne.'
  ),
  closing: {
    title: l(
      'Start here, then walk the old town',
      'Hier starten, dann durch die Altstadt',
      'Empezad aquí y recorred el casco antiguo',
      'Begin hier en loop dan de oude kern in',
      'Börja här, vandra sedan gamla stan'
    ),
    lead: l(
      'The Casa del Apero sits at the foot of the old town, minutes below Casa AMARA. Pick up a map here, then let the lanes take you up to El Ingenio and the ceramic panels.',
      'Die Casa del Apero liegt am Fuß der Altstadt, wenige Minuten unterhalb von Casa AMARA. Holt euch hier einen Plan und lasst euch dann von den Gassen hinauf zu El Ingenio und den Keramiktafeln führen.',
      'La Casa del Apero está al pie del casco antiguo, a pocos minutos de Casa AMARA. Coged aquí un plano y dejad que las calles os lleven hasta El Ingenio y los azulejos.',
      'De Casa del Apero ligt aan de voet van de oude kern, minuten onder Casa AMARA. Pak hier een plattegrond en laat de straatjes je omhoog voeren naar El Ingenio en de keramiekpanelen.',
      'Casa del Apero ligger vid foten av gamla stan, några minuter nedanför Casa AMARA. Hämta en karta här och låt sedan gränderna föra er upp till El Ingenio och keramikpanelerna.'
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
