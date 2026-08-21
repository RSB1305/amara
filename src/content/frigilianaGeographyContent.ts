import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaGeographySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface FrigilianaGeographyLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  orientation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  sections: FrigilianaGeographySection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    arrivalLabel: string;
    stayLabel: string;
  };
}

const article = {
  datePublished: '2026-08-16',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053',
  aemet: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053',
  heritage: 'https://www.juntadeandalucia.es/boja/2015/23/26',
  naturalPark:
    'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/sierras-de-tejeda-almijara-y-alhama-2/255035'
};

export const frigilianaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-frigiliana-geography-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Understand Frigiliana’s hillside structure: Barribarto, Barribajo, Calle Real, El Ingenio and the Sierra Almijara context.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Frigilianas Hangstruktur verstehen: Barribarto, Barribajo, Calle Real, El Ingenio und der Kontext der Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Frigiliana: Málaga, Nerja y Sierra Almijara',
      description:
        'Comprended la estructura en ladera de Frigiliana: Barribarto, Barribajo, calle Real, El Ingenio y el contexto de Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Begrijp Frigiliana’s hellingstructuur: Barribarto, Barribajo, Calle Real, El Ingenio en de context van Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Förstå Frigilianas sluttning: Barribarto, Barribajo, Calle Real, El Ingenio och sammanhanget kring Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaGeographyContent: Record<
  AmaraLanguage,
  FrigilianaGeographyLocale
> = {
  en: {
    navLabel: 'Geography & orientation',
    hero: {
      eyebrow: 'Frigiliana · Geography & orientation',
      title: 'Where is Frigiliana? Between Nerja and Sierra Almijara',
      standfirst:
        'Frigiliana is a **40.49 km² hillside municipality in the Axarquía**. Its protected historic fabric is organised by the terrain: Barribajo follows the Calle Real axis, Barribarto occupies the medieval core above it, and El Ingenio separates the older settlement from later ridge development.',
      note: 'Official datasets use 315–318 metres for the principal-settlement reference; neither figure is the altitude of every street.',
      updated: 'Published August 2026'
    },
    facts: [
      { label: 'Municipality', value: '40.49 km²' },
      { label: 'Official reference', value: '315–318 m · principal settlement' },
      { label: 'Historic core', value: 'Barribarto · medieval origin' },
      { label: 'Natural-park context', value: '40,647.74 ha · wider protected landscape' }
    ],
    orientation: {
      eyebrow: 'Read the settlement as a sequence',
      title: 'Four anchors explain the village before any route begins',
      intro:
        'The official heritage record gives a clearer mental map than a single elevation: later ridge development, El Ingenio, Calle Real and the medieval core form a connected uphill structure.',
      items: [
        { label: 'Later settlement', value: 'South of El Ingenio · ridge between ravine and approach road' },
        { label: 'Settlement hinge', value: 'El Ingenio · transition between older and later fabric' },
        { label: 'Historic axis', value: 'Barribajo · organised along Calle Real' },
        { label: 'Medieval origin', value: 'Barribarto · castle-hill core' }
      ]
    },
    sections: [
      {
        id: 'hillside-village',
        eyebrow: 'The hillside village',
        title: 'Frigiliana climbs rather than spreading evenly',
        paragraphs: [
          'The physical village sits on a slope between lower terrain and the Sierra Almijara. Streets follow the hillside, buildings occupy successive levels and many connections between them are steep or stepped rather than level.',
          'That form is the reason distance alone is incomplete. A destination may be close in plan while the route still gains height quickly; the same return walk can feel different depending on whether it runs downhill or back up through the village.'
        ]
      },
      {
        id: 'historic-quarter',
        eyebrow: 'The historic quarter',
        title: 'El Ingenio, Calle Real and Barribarto explain the historic structure',
        paragraphs: [
          'The protected-ensemble record identifies Barribarto as the original medieval core around the castle hill and Barribajo as the fabric organised along Calle Real. El Ingenio stands between this older settlement and the later southern expansion.',
          'Main streets tend to follow the contours; smaller transverse streets take steeper lines and many include steps. This is a documented settlement pattern, not a claim that every historic address has the same access.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'The later settlement',
        title: 'The village continues south on a ridge, not on one level plane',
        paragraphs: [
          'The official heritage description places the later part of Frigiliana south of El Ingenio on the ridge between the Higuerón ravine and the approach road. The built village therefore has more than an “upper old town” and a “lower village”.',
          'This distinction is useful for orientation, but it does not prove an exact gradient, step count or vehicle route for an accommodation. Those require address-level evidence.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'The Sierra Almijara',
        title: 'The village belongs to a much larger mountain context',
        paragraphs: [
          'Frigiliana is one of the municipalities associated with the Sierras de Tejeda, Almijara y Alhama Natural Park on the Málaga side of the Axarquía. The protected landscape covers 40,647.74 hectares.',
          'That establishes the mountain context, not that every street or the entire municipality lies inside the protected boundary. Public orientation should keep the village, municipality and park as three related but distinct geographies.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'What it means for a stay',
        title: 'A daily route is distance plus elevation and steps',
        paragraphs: [
          'In Frigiliana, a short map distance does not fully describe the walk. Elevation, steps and repeated climbs matter, especially when a route is made several times a day or with luggage, shopping or a pushchair.',
          'Geography explains why locations feel different; it does not choose one for you. For the detailed comparison of lower historic streets, Barribarto, the lower village and countryside, continue to the Where to Stay guide.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue',
      title: 'Turn the hillside into a practical plan',
      links: [
        { token: 'getting_to_frigiliana', label: 'Arrival & mobility', text: 'How the road, bus and final approach connect with the village terrain.' },
        { token: 'frigiliana_stairs', label: 'Where to stay / areas', text: 'Compare Frigiliana’s location models, daily climbs and access trade-offs.' }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Official geographic references',
      intro:
        'SIMA and AEMET provide the municipal and principal-settlement references. The protected-ensemble decree supplies the settlement morphology; the Junta visitor record supplies the wider natural-park context.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Official municipal area and principal-settlement reference.', href: sharedSources.sima },
        { label: 'AEMET · Frigiliana', text: 'Official forecast reference and warning that municipal altitude can vary.', href: sharedSources.aemet },
        { label: 'BOJA · Historic ensemble', text: 'Official morphology of Barribarto, Barribajo, El Ingenio and the later expansion.', href: sharedSources.heritage },
        { label: 'Junta de Andalucía · Natural Park', text: 'Official protected-area extent and municipality context.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Next step',
      title: 'Plan the climb before it becomes the daily route.',
      body: 'Use the geography to understand the village, then choose the arrival and stay pattern that fits your days.',
      arrivalLabel: 'Plan arrival & mobility',
      stayLabel: 'Compare where to stay'
    }
  },
  de: {
    navLabel: 'Geografie & Orientierung',
    hero: {
      eyebrow: 'Frigiliana · Geografie & Orientierung',
      title: 'Wo liegt Frigiliana? Zwischen Nerja und Sierra Almijara',
      standfirst:
        'Frigiliana ist eine **40,49 km² große Hanggemeinde in der Axarquía**. Das geschützte historische Gefüge folgt dem Relief: Barribajo liegt an der Achse der Calle Real, Barribarto bildet den mittelalterlichen Kern darüber, und El Ingenio trennt den älteren Ort von der späteren Bebauung auf dem Bergrücken.',
      note: 'Amtliche Datensätze verwenden 315–318 Meter als Referenz für den Hauptort; keine der beiden Angaben gilt für jede Straße.',
      updated: 'Veröffentlicht im August 2026'
    },
    facts: [
      { label: 'Gemeindegebiet', value: '40,49 km²' },
      { label: 'Amtlicher Bezug', value: '315–318 m · Hauptort' },
      { label: 'Historischer Kern', value: 'Barribarto · mittelalterlicher Ursprung' },
      { label: 'Naturparkkontext', value: '40.647,74 ha · größere Schutzlandschaft' }
    ],
    orientation: {
      eyebrow: 'Den Ort als Abfolge lesen',
      title: 'Vier Anker erklären das Dorf vor jedem einzelnen Weg',
      intro:
        'Der amtliche Denkmalschutztext liefert die bessere mentale Karte als eine einzelne Höhenzahl: spätere Bebauung, El Ingenio, Calle Real und der mittelalterliche Kern bilden eine zusammenhängende Hangstruktur.',
      items: [
        { label: 'Späterer Ortsteil', value: 'Südlich von El Ingenio · Bergrücken zwischen Schlucht und Zufahrt' },
        { label: 'Siedlungsscharnier', value: 'El Ingenio · Übergang zwischen älterem und späterem Gefüge' },
        { label: 'Historische Achse', value: 'Barribajo · entlang der Calle Real organisiert' },
        { label: 'Mittelalterlicher Ursprung', value: 'Barribarto · Kern am Burghügel' }
      ]
    },
    sections: [
      {
        id: 'hillside-village',
        eyebrow: 'Das Dorf am Hang',
        title: 'Frigiliana steigt an, statt sich gleichmäßig auszubreiten',
        paragraphs: [
          'Der bebaute Ort liegt an einem Hang zwischen tieferem Gelände und Sierra Almijara. Die Gassen folgen dem Hang, die Häuser besetzen aufeinanderfolgende Ebenen und viele Verbindungen dazwischen sind steil oder gestuft statt eben.',
          'Deshalb reicht Entfernung allein als Maß nicht aus. Ein Ziel kann im Grundriss nahe liegen und der Weg trotzdem rasch Höhe gewinnen; derselbe Rückweg wirkt unterschiedlich, je nachdem ob er bergab oder wieder durch das Dorf hinauf führt.'
        ]
      },
      {
        id: 'historic-quarter',
        eyebrow: 'Die Altstadt',
        title: 'El Ingenio, Calle Real und Barribarto erklären die historische Struktur',
        paragraphs: [
          'Der geschützte Ensembletext bezeichnet Barribarto als ursprünglichen mittelalterlichen Kern am Burghügel und Barribajo als Bebauung entlang der Calle Real. El Ingenio steht zwischen diesem älteren Ort und der späteren Erweiterung nach Süden.',
          'Die Hauptgassen folgen eher den Höhenlinien; kleinere Querverbindungen nehmen steilere Linien und enthalten häufig Stufen. Das ist ein belegtes Siedlungsmuster, keine Aussage, dass jede historische Adresse gleich zugänglich ist.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'Der spätere Ortsteil',
        title: 'Frigiliana setzt sich nach Süden auf einem Bergrücken fort',
        paragraphs: [
          'Die amtliche Beschreibung verortet den späteren Teil Frigilianas südlich von El Ingenio auf dem Bergrücken zwischen der Schlucht des Higuerón und der Zufahrtsstraße. Der bebaute Ort besteht deshalb aus mehr als „oberer Altstadt“ und „Unterdorf“.',
          'Diese Unterscheidung hilft bei der Orientierung, beweist aber weder Gefälle noch Stufenzahl oder Fahrzeugroute einer Unterkunft. Dafür braucht es adressgenaue Daten.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'Die Sierra Almijara',
        title: 'Das Dorf gehört zu einem wesentlich größeren Gebirgskontext',
        paragraphs: [
          'Frigiliana gehört zu den Gemeinden im Umfeld des Naturparks Sierras de Tejeda, Almijara y Alhama auf der Málaga-Seite der Axarquía. Die geschützte Landschaft umfasst 40.647,74 Hektar.',
          'Damit ist der Gebirgskontext belegt, nicht aber, dass jede Straße oder das gesamte Gemeindegebiet innerhalb der Schutzgrenze liegt. Ort, Gemeinde und Naturpark bleiben drei verbundene, aber unterschiedliche Räume.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Was das für den Aufenthalt bedeutet',
        title: 'Ein Alltagsweg besteht aus Entfernung, Höhe und Stufen',
        paragraphs: [
          'In Frigiliana beschreibt eine kurze Kartenentfernung den Fußweg nicht vollständig. Höhenunterschied, Treppen und wiederholte Anstiege zählen, besonders wenn ihr einen Weg mehrmals täglich oder mit Gepäck, Einkäufen oder Kinderwagen geht.',
          'Die Geografie erklärt, warum sich Lagen unterscheiden; sie wählt keine für euch aus. Den detaillierten Vergleich zwischen unteren Altstadtgassen, Barribarto, Unterdorf und Umgebung findet ihr im Guide „Wo übernachten“.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Vom Hang zum praktischen Plan',
      links: [
        { token: 'getting_to_frigiliana', label: 'Anreise & Mobilität', text: 'Wie Straße, Bus und letzte Etappe mit dem Dorfrelief zusammenspielen.' },
        { token: 'frigiliana_stairs', label: 'Wo übernachten / Lagen', text: 'Frigilianas Lagemodelle, Alltagsanstiege und Zugänge im Vergleich.' }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Amtliche geografische Referenzen',
      intro:
        'SIMA und AEMET liefern Gemeinde- und Hauptortreferenzen. Das Dekret zum historischen Ensemble beschreibt die Siedlungsstruktur; der Besucher-Datensatz der Junta belegt den größeren Naturparkkontext.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Amtliche Gemeindefläche und Hauptortreferenz.', href: sharedSources.sima },
        { label: 'AEMET · Frigiliana', text: 'Amtliche Wetterreferenz und Hinweis auf Höhenunterschiede innerhalb einer Gemeinde.', href: sharedSources.aemet },
        { label: 'BOJA · Historisches Ensemble', text: 'Amtliche Struktur von Barribarto, Barribajo, El Ingenio und der späteren Erweiterung.', href: sharedSources.heritage },
        { label: 'Junta de Andalucía · Naturpark', text: 'Amtliche Fläche des Schutzgebiets und Gemeindekontext.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Nächster Schritt',
      title: 'Plant den Anstieg, bevor er zum täglichen Weg wird.',
      body: 'Nutzt die Geografie, um das Dorf zu verstehen, und wählt danach Anreise und Lage passend zu euren Tagen.',
      arrivalLabel: 'Anreise & Mobilität planen',
      stayLabel: 'Lagen vergleichen'
    }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: {
      eyebrow: 'Frigiliana · Geografía y orientación',
      title: '¿Dónde está Frigiliana? Entre Nerja y la Sierra Almijara',
      standfirst:
        'Frigiliana es un **municipio de ladera de 40,49 km² en la Axarquía**. Su conjunto histórico protegido responde al relieve: Barribajo sigue el eje de la calle Real, Barribarto ocupa el núcleo medieval por encima y El Ingenio separa el asentamiento antiguo de la expansión posterior sobre la loma.',
      note: 'Las fuentes oficiales utilizan 315–318 metros como referencia del núcleo principal; ninguna cifra representa todas las calles.',
      updated: 'Publicado en agosto de 2026'
    },
    facts: [
      { label: 'Municipio', value: '40,49 km²' },
      { label: 'Referencia oficial', value: '315–318 m · núcleo principal' },
      { label: 'Núcleo histórico', value: 'Barribarto · origen medieval' },
      { label: 'Contexto del parque', value: '40.647,74 ha · paisaje protegido mayor' }
    ],
    orientation: {
      eyebrow: 'Leer el asentamiento como una secuencia',
      title: 'Cuatro referencias explican el pueblo antes de elegir una ruta',
      intro:
        'El expediente patrimonial ofrece un mapa mental más útil que una sola cota: expansión posterior, El Ingenio, calle Real y núcleo medieval forman una estructura continua sobre la ladera.',
      items: [
        { label: 'Expansión posterior', value: 'Al sur de El Ingenio · loma entre barranco y carretera' },
        { label: 'Bisagra urbana', value: 'El Ingenio · transición entre tejido antiguo y posterior' },
        { label: 'Eje histórico', value: 'Barribajo · organizado a lo largo de la calle Real' },
        { label: 'Origen medieval', value: 'Barribarto · núcleo de la colina del castillo' }
      ]
    },
    sections: [
      {
        id: 'hillside-village',
        eyebrow: 'El pueblo en ladera',
        title: 'Frigiliana asciende en vez de extenderse de forma uniforme',
        paragraphs: [
          'El núcleo urbano ocupa una pendiente entre el terreno inferior y la Sierra Almijara. Las calles siguen la ladera, los edificios se reparten entre cotas sucesivas y muchas conexiones son empinadas o escalonadas, no llanas.',
          'Por eso la distancia no basta para medir un recorrido. Un destino puede parecer cercano en planta y exigir una subida rápida; el mismo camino de vuelta cambia mucho según discurra cuesta abajo o regrese hacia arriba por el pueblo.'
        ]
      },
      {
        id: 'historic-quarter',
        eyebrow: 'El casco histórico',
        title: 'El Ingenio, calle Real y Barribarto explican la estructura histórica',
        paragraphs: [
          'El expediente del conjunto protegido identifica Barribarto como núcleo medieval original en torno a la colina del castillo y Barribajo como el tejido organizado por la calle Real. El Ingenio queda entre este asentamiento antiguo y la ampliación posterior hacia el sur.',
          'Las calles principales tienden a seguir las curvas de nivel; las conexiones transversales son más pronunciadas y muchas tienen escalones. Es un patrón documentado, no una afirmación sobre el acceso a cada dirección.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'La ampliación posterior',
        title: 'Frigiliana continúa hacia el sur sobre una loma',
        paragraphs: [
          'La descripción oficial sitúa la parte posterior de Frigiliana al sur de El Ingenio, sobre la loma entre el barranco del Higuerón y la carretera de acceso. El pueblo construido es, por tanto, más complejo que una simple oposición entre casco alto y zona baja.',
          'Esta distinción orienta, pero no demuestra la pendiente, el número de escalones ni el acceso en vehículo de un alojamiento concreto. Eso exige pruebas por dirección.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'La Sierra Almijara',
        title: 'El pueblo forma parte de un contexto montañoso mucho mayor',
        paragraphs: [
          'Frigiliana figura entre los municipios vinculados al Parque Natural Sierras de Tejeda, Almijara y Alhama en la vertiente malagueña de la Axarquía. El paisaje protegido abarca 40.647,74 hectáreas.',
          'Esto acredita el contexto montañoso, no que todas las calles o todo el municipio estén dentro del límite protegido. Pueblo, término municipal y parque son geografías relacionadas, pero distintas.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Qué significa para una estancia',
        title: 'Un recorrido diario suma distancia, desnivel y escalones',
        paragraphs: [
          'En Frigiliana, una distancia corta en el mapa no describe por completo el paseo. Cuentan el desnivel, las escaleras y las subidas repetidas, sobre todo si se hace el trayecto varias veces al día o con equipaje, compra o carrito.',
          'La geografía explica por qué las zonas se viven de manera distinta, pero no elige una por vosotros. La comparación detallada entre el casco histórico bajo, Barribarto, la parte baja y el campo corresponde a la guía Dónde alojarse.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continuar',
      title: 'Convertir la ladera en un plan práctico',
      links: [
        { token: 'getting_to_frigiliana', label: 'Llegada y movilidad', text: 'Cómo encajan la carretera, el autobús y la aproximación final con el relieve.' },
        { token: 'frigiliana_stairs', label: 'Dónde alojarse / zonas', text: 'Comparad modelos de ubicación, subidas diarias y condiciones de acceso.' }
      ]
    },
    sources: {
      eyebrow: 'Fuentes de la guía',
      title: 'Referencias geográficas oficiales',
      intro:
        'SIMA y AEMET aportan las referencias municipales y del núcleo principal. El decreto del conjunto histórico documenta la morfología urbana; la Junta aporta el contexto del parque natural.',
      checked: 'Fuentes comprobadas en agosto de 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Superficie municipal y referencia del núcleo principal.', href: sharedSources.sima },
        { label: 'AEMET · Frigiliana', text: 'Referencia oficial y advertencia sobre variación de altitud municipal.', href: sharedSources.aemet },
        { label: 'BOJA · Conjunto histórico', text: 'Morfología oficial de Barribarto, Barribajo, El Ingenio y la ampliación posterior.', href: sharedSources.heritage },
        { label: 'Junta de Andalucía · Parque Natural', text: 'Extensión oficial del espacio protegido y contexto municipal.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Siguiente paso',
      title: 'Planificad la subida antes de convertirla en el recorrido diario.',
      body: 'Usad la geografía para entender el pueblo y elegid después una llegada y una zona acordes con vuestros días.',
      arrivalLabel: 'Planificar llegada y movilidad',
      stayLabel: 'Comparar dónde alojarse'
    }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: {
      eyebrow: 'Frigiliana · Geografie & oriëntatie',
      title: 'Waar ligt Frigiliana? Tussen Nerja en Sierra Almijara',
      standfirst:
        'Frigiliana is een **hellinggemeente van 40,49 km² in de Axarquía**. Het beschermde historische weefsel volgt het reliëf: Barribajo ligt langs Calle Real, Barribarto vormt de middeleeuwse kern erboven en El Ingenio scheidt het oudere dorp van de latere uitbreiding op de kam.',
      note: 'Officiële bronnen gebruiken 315–318 meter als referentie voor de hoofdplaats; geen van beide waarden geldt voor elke straat.',
      updated: 'Gepubliceerd in augustus 2026'
    },
    facts: [
      { label: 'Gemeente', value: '40,49 km²' },
      { label: 'Officiële referentie', value: '315–318 m · hoofdplaats' },
      { label: 'Historische kern', value: 'Barribarto · middeleeuwse oorsprong' },
      { label: 'Natuurparkcontext', value: '40.647,74 ha · groter beschermd landschap' }
    ],
    orientation: {
      eyebrow: 'Lees de nederzetting als een reeks',
      title: 'Vier ankers verklaren het dorp vóór een afzonderlijke route',
      intro:
        'Het officiële erfgoeddossier geeft een betere mentale kaart dan één hoogte: latere uitbreiding, El Ingenio, Calle Real en de middeleeuwse kern vormen een verbonden hellingstructuur.',
      items: [
        { label: 'Latere uitbreiding', value: 'Ten zuiden van El Ingenio · kam tussen ravijn en toegangsweg' },
        { label: 'Scharnierpunt', value: 'El Ingenio · overgang tussen ouder en later weefsel' },
        { label: 'Historische as', value: 'Barribajo · georganiseerd langs Calle Real' },
        { label: 'Middeleeuwse oorsprong', value: 'Barribarto · kern op de kasteelheuvel' }
      ]
    },
    sections: [
      {
        id: 'hillside-village',
        eyebrow: 'Het dorp tegen de helling',
        title: 'Frigiliana klimt in plaats van zich gelijkmatig uit te spreiden',
        paragraphs: [
          'De bebouwde kom ligt op een helling tussen lager terrein en de Sierra Almijara. Straten volgen de helling, gebouwen liggen op opeenvolgende niveaus en veel verbindingen zijn steil of getrapt in plaats van vlak.',
          'Daarom vertelt afstand alleen niet het hele verhaal. Een bestemming kan op de plattegrond dichtbij liggen terwijl de route snel hoogte wint; dezelfde terugweg voelt anders als die daalt of juist weer door het dorp omhoog gaat.'
        ]
      },
      {
        id: 'historic-quarter',
        eyebrow: 'De historische kern',
        title: 'El Ingenio, Calle Real en Barribarto verklaren de historische structuur',
        paragraphs: [
          'Het beschermde-ensembledossier benoemt Barribarto als de oorspronkelijke middeleeuwse kern rond de kasteelheuvel en Barribajo als het weefsel langs Calle Real. El Ingenio ligt tussen dit oudere dorp en de latere uitbreiding naar het zuiden.',
          'Hoofdstraten volgen meestal de hoogtelijnen; dwarsverbindingen zijn steiler en hebben vaak trappen. Dat is een gedocumenteerd patroon, geen uitspraak over de toegang tot elk adres.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'De latere uitbreiding',
        title: 'Frigiliana loopt zuidwaarts door over een bergrug',
        paragraphs: [
          'De officiële beschrijving plaatst het latere deel van Frigiliana ten zuiden van El Ingenio op de kam tussen het Higuerónravijn en de toegangsweg. Het bebouwde dorp is dus complexer dan alleen een hoge oude kern en een laag dorp.',
          'Dit helpt bij oriëntatie, maar bewijst geen helling, aantal treden of voertuigroute voor een accommodatie. Daarvoor is adresgebonden bewijs nodig.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'De Sierra Almijara',
        title: 'Het dorp maakt deel uit van een veel grotere bergcontext',
        paragraphs: [
          'Frigiliana is een van de gemeenten die verbonden zijn met het natuurpark Sierras de Tejeda, Almijara y Alhama aan de Málaga-zijde van de Axarquía. Het beschermde landschap beslaat 40.647,74 hectare.',
          'Dat bevestigt de bergcontext, niet dat elke straat of de hele gemeente binnen de beschermde grens ligt. Dorp, gemeente en park blijven drie verwante maar verschillende geografieën.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Wat dit betekent voor een verblijf',
        title: 'Een dagelijkse route is afstand plus hoogteverschil en trappen',
        paragraphs: [
          'In Frigiliana beschrijft een korte afstand op de kaart de wandeling niet volledig. Hoogteverschil, trappen en herhaalde beklimmingen tellen mee, vooral als jullie een route meerdere keren per dag lopen of met bagage, boodschappen of een kinderwagen.',
          'Geografie verklaart waarom locaties anders aanvoelen, maar kiest er geen voor jullie. Voor de gedetailleerde vergelijking van de lagere historische straten, Barribarto, het benedendorp en het buitengebied gaan jullie verder naar de gids Waar overnachten.'
        ]
      }
    ],
    related: {
      eyebrow: 'Lees verder',
      title: 'Van de helling naar een praktisch plan',
      links: [
        { token: 'getting_to_frigiliana', label: 'Aankomst & mobiliteit', text: 'Hoe weg, bus en laatste benadering aansluiten op het dorpsreliëf.' },
        { token: 'frigiliana_stairs', label: 'Waar overnachten / gebieden', text: 'Vergelijk liggingen, dagelijkse beklimmingen en bereikbaarheid.' }
      ]
    },
    sources: {
      eyebrow: 'Bronnen van deze gids',
      title: 'Officiële geografische referenties',
      intro:
        'SIMA en AEMET leveren de gemeente- en hoofdplaatsreferenties. Het beschermingsbesluit beschrijft de nederzettingsstructuur; de Junta levert de bredere natuurparkcontext.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Officiële gemeenteoppervlakte en hoofdplaatsreferentie.', href: sharedSources.sima },
        { label: 'AEMET · Frigiliana', text: 'Officiële referentie en waarschuwing over hoogteverschillen binnen de gemeente.', href: sharedSources.aemet },
        { label: 'BOJA · Historisch ensemble', text: 'Officiële morfologie van Barribarto, Barribajo, El Ingenio en de latere uitbreiding.', href: sharedSources.heritage },
        { label: 'Junta de Andalucía · Natuurpark', text: 'Officiële omvang van het beschermde gebied en gemeentecontext.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Volgende stap',
      title: 'Plan de klim voordat die de dagelijkse route wordt.',
      body: 'Gebruik de geografie om het dorp te begrijpen en kies daarna de aankomst en ligging die bij jullie dagen passen.',
      arrivalLabel: 'Plan aankomst & mobiliteit',
      stayLabel: 'Vergelijk waar te verblijven'
    }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: {
      eyebrow: 'Frigiliana · Geografi & orientering',
      title: 'Var ligger Frigiliana? Mellan Nerja och Sierra Almijara',
      standfirst:
        'Frigiliana är en **sluttande kommun på 40,49 km² i Axarquía**. Den skyddade historiska strukturen följer reliefen: Barribajo ligger längs Calle Real, Barribarto bildar den medeltida kärnan ovanför och El Ingenio skiljer den äldre byn från senare bebyggelse på åsen.',
      note: 'Officiella källor använder 315–318 meter som referens för huvudorten; ingen av siffrorna gäller varje gata.',
      updated: 'Publicerad i augusti 2026'
    },
    facts: [
      { label: 'Kommun', value: '40,49 km²' },
      { label: 'Officiell referens', value: '315–318 m · huvudorten' },
      { label: 'Historisk kärna', value: 'Barribarto · medeltida ursprung' },
      { label: 'Naturparkskontext', value: '40 647,74 ha · större skyddat landskap' }
    ],
    orientation: {
      eyebrow: 'Läs bebyggelsen som en följd',
      title: 'Fyra ankare förklarar byn före varje enskild väg',
      intro:
        'Det officiella kulturmiljöunderlaget ger en bättre mental karta än en höjdsiffra: senare utbyggnad, El Ingenio, Calle Real och den medeltida kärnan bildar en sammanhängande sluttning.',
      items: [
        { label: 'Senare utbyggnad', value: 'Söder om El Ingenio · ås mellan ravin och tillfartsväg' },
        { label: 'Bebyggelsens gångjärn', value: 'El Ingenio · övergång mellan äldre och senare struktur' },
        { label: 'Historisk axel', value: 'Barribajo · organiserat längs Calle Real' },
        { label: 'Medeltida ursprung', value: 'Barribarto · kärnan på borgkullen' }
      ]
    },
    sections: [
      {
        id: 'hillside-village',
        eyebrow: 'Byn på sluttningen',
        title: 'Frigiliana klättrar i stället för att breda ut sig jämnt',
        paragraphs: [
          'Den bebyggda byn ligger på en sluttning mellan lägre terräng och Sierra Almijara. Gatorna följer sluttningen, husen ligger på nivåer ovanför varandra och många förbindelser är branta eller trappade snarare än plana.',
          'Därför räcker avståndet inte som mått. Ett mål kan ligga nära på kartan samtidigt som vägen snabbt vinner höjd; samma väg tillbaka känns olika beroende på om den går nedför eller åter upp genom byn.'
        ]
      },
      {
        id: 'historic-quarter',
        eyebrow: 'Den historiska byn',
        title: 'El Ingenio, Calle Real och Barribarto förklarar den historiska strukturen',
        paragraphs: [
          'Underlaget för det skyddade området beskriver Barribarto som den ursprungliga medeltida kärnan kring borgkullen och Barribajo som strukturen längs Calle Real. El Ingenio ligger mellan denna äldre by och den senare utvidgningen söderut.',
          'Huvudgator följer oftast höjdkurvorna; tvärförbindelser är brantare och har ofta trappor. Det är ett dokumenterat mönster, inte ett påstående om tillträdet till varje adress.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'Den senare utbyggnaden',
        title: 'Frigiliana fortsätter söderut på en ås',
        paragraphs: [
          'Den officiella beskrivningen placerar Frigilianas senare del söder om El Ingenio på åsen mellan Higuerónravinen och tillfartsvägen. Den byggda byn är därför mer komplex än en enkel övre gammal by och nedre stadsdel.',
          'Det hjälper orienteringen men bevisar inte lutning, antal trappsteg eller bilväg till ett boende. Det kräver adressbunden dokumentation.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'Sierra Almijara',
        title: 'Byn ingår i ett mycket större bergssammanhang',
        paragraphs: [
          'Frigiliana är en av kommunerna med anknytning till naturparken Sierras de Tejeda, Almijara y Alhama på Málagasidan av Axarquía. Det skyddade landskapet omfattar 40 647,74 hektar.',
          'Det bekräftar bergskontexten, inte att varje gata eller hela kommunen ligger inom skyddsgränsen. By, kommun och park är tre närliggande men skilda geografier.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Vad det betyder för en vistelse',
        title: 'En vardagsväg är avstånd plus höjdskillnad och trappor',
        paragraphs: [
          'I Frigiliana beskriver ett kort kartavstånd inte hela promenaden. Höjdskillnad, trappor och upprepade stigningar spelar roll, särskilt när vägen gås flera gånger om dagen eller med bagage, inköp eller barnvagn.',
          'Geografin förklarar varför olika lägen känns olika, men väljer inget åt er. För en detaljerad jämförelse mellan de lägre historiska gatorna, Barribarto, den nedre bydelen och landsbygden går ni vidare till guiden Var ska man bo.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Från sluttningen till en praktisk plan',
      links: [
        { token: 'getting_to_frigiliana', label: 'Ankomst & mobilitet', text: 'Hur väg, buss och sista infart möter byns relief.' },
        { token: 'frigiliana_stairs', label: 'Var ska man bo / områden', text: 'Jämför lägen, vardagsstigningar och förutsättningar för tillträde.' }
      ]
    },
    sources: {
      eyebrow: 'Källorna bakom guiden',
      title: 'Officiella geografiska referenser',
      intro:
        'SIMA och AEMET ger kommun- och huvudortsreferenserna. Beslutet om det historiska området beskriver bebyggelsens struktur; Junta de Andalucía ger naturparkens större sammanhang.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Officiell kommunyta och huvudortsreferens.', href: sharedSources.sima },
        { label: 'AEMET · Frigiliana', text: 'Officiell referens och varning om höjdskillnader inom kommunen.', href: sharedSources.aemet },
        { label: 'BOJA · Historiskt område', text: 'Officiell morfologi för Barribarto, Barribajo, El Ingenio och senare utbyggnad.', href: sharedSources.heritage },
        { label: 'Junta de Andalucía · Naturpark', text: 'Officiell omfattning och kommunalt sammanhang.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Nästa steg',
      title: 'Planera stigningen innan den blir vardagsvägen.',
      body: 'Använd geografin för att förstå byn och välj sedan ankomst och läge som passar era dagar.',
      arrivalLabel: 'Planera ankomst & mobilitet',
      stayLabel: 'Jämför var ni ska bo'
    }
  }
};
