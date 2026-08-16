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
  dateModified: '2026-08-16',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053',
  simaAltitude: 'https://ws089.juntadeandalucia.es/sima/info.htm?f=a03',
  tourismEn: 'https://www.turismofrigiliana.es/en/frigiliana-el-fuerte-en.html',
  tourismEs: 'https://turismofrigiliana.es/es/el-fuerte.html',
  naturalPark:
    'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-sierras-de-tejeda-almijara-y-alhama'
};

export const frigilianaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-16-frigiliana-geography-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Frigiliana Geography: Hillside Village & Sierra Almijara',
      description:
        'Understand Frigiliana’s hillside geography, the climb through its historic quarter and how the Sierra Almijara shapes walking and a stay.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana: Geografie & Orientierung am Hang der Sierra',
      description:
        'Frigilianas Hanglage verstehen: vom unteren Dorf durch die historische Altstadt bis zur Sierra Almijara – und was die Steigung zu Fuß bedeutet.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Geografía de Frigiliana: pueblo en ladera y Sierra Almijara',
      description:
        'Comprended la geografía de Frigiliana, la subida por su casco histórico y cómo la Sierra Almijara condiciona los recorridos y la estancia.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Geografie van Frigiliana: heuveldorp & Sierra Almijara',
      description:
        'Begrijp Frigiliana als dorp tegen de helling, de klim door de historische kern en wat de Sierra Almijara betekent voor lopen en verblijven.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigilianas geografi: by på sluttningen & Sierra Almijara',
      description:
        'Förstå Frigilianas sluttningsläge, stigningen genom den historiska byn och hur Sierra Almijara påverkar promenader och vistelsen.',
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
      title: 'A village that climbs the hillside into the Sierra',
      standfirst:
        'Frigiliana is not a settlement on one flat level. Plaza del Ingenio, the Town Hall, the stepped historic quarter and the mountain edge occupy different heights, so the most useful way to understand the village is from the lower terrain upwards.',
      note: 'The official altitude figure is a Town Hall reference, not one altitude for the whole village.',
      updated: 'Published August 2026'
    },
    facts: [
      { label: 'Municipality', value: '40.49 km²' },
      { label: 'Official altitude reference', value: '318 m at the Town Hall' },
      { label: 'Plaza del Ingenio', value: 'About 290 m' },
      { label: 'Protected landscape', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Read the village upwards',
      title: 'Four stages from the lower square to the mountain edge',
      intro:
        'A vertical sequence is more useful here than a flat compass. It explains why a short horizontal distance can include a meaningful climb.',
      items: [
        { label: 'Lower reference', value: 'Plaza del Ingenio · about 290 m' },
        { label: 'Historic climb', value: 'Calle Real rises through the old village' },
        { label: 'Upper historic quarter', value: 'Barribarto · its highest part' },
        { label: 'Mountain transition', value: 'Pozo de Lízar · 419 m, then the Sierra' }
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
        title: 'Plaza del Ingenio, Calle Real and Barribarto form a visible climb',
        paragraphs: [
          'Official tourism information places Plaza del Ingenio at approximately 290 metres. From there the El Fuerte route passes along Calle Real and climbs through the historic quarter, making the change in level part of the village’s everyday structure rather than a separate mountain excursion.',
          'Barribarto is officially described as the highest part of the historic quarter. No single exact altitude is needed to understand the relationship: the old village rises above the lower square through narrow streets and steps.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'The landscape below',
        title: 'The village is read against lower valleys and terraced slopes',
        paragraphs: [
          'Looking down from the historic streets reveals why the settlement feels elevated. Lower ground, cultivated terraces and valley-shaped folds sit beneath the village while the built form holds the hillside above them.',
          'This wider setting matters for orientation, but it is not a trail guide. The useful point for a stay is that approaching the village from below and moving within its historic core are both shaped by relief.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'The Sierra Almijara',
        title: 'Historic streets turn into mountain terrain quickly',
        paragraphs: [
          'The official route reaches Pozo de Lízar at 419 metres, a concrete reference showing how quickly the terrain rises beyond the historic quarter. From this edge the relationship with the Sierra Almijara becomes immediate, without needing an unverified minimum or maximum altitude for the municipality.',
          'Frigiliana and Nerja are both municipalities within the Sierras de Tejeda, Almijara y Alhama Natural Park. The protected landscape covers approximately 40,657 hectares across Málaga and Granada and places the village within a much larger mountain system.'
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
        'The municipal area and 318-metre Town Hall reference come from SIMA. Plaza del Ingenio, Barribarto and Pozo de Lízar follow official Frigiliana tourism information. No municipal minimum or maximum elevation is stated.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Official municipal area and altitude reference.', href: sharedSources.sima },
        { label: 'SIMA · Altitude definition', text: 'Defines municipal altitude at the Town Hall of the principal settlement.', href: sharedSources.simaAltitude },
        { label: 'Frigiliana Tourism · El Fuerte', text: 'Official route description for Plaza del Ingenio, Barribarto and Pozo de Lízar.', href: sharedSources.tourismEn },
        { label: 'Junta de Andalucía · Natural Park', text: 'Official protected-area extent and included municipalities.', href: sharedSources.naturalPark }
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
      title: 'Ein Dorf, das den Hang hinauf in die Sierra steigt',
      standfirst:
        'Frigiliana liegt nicht auf einer einzigen ebenen Fläche. Plaza del Ingenio, Rathaus, gestufte Altstadt und Gebirgsrand befinden sich auf unterschiedlichen Höhen. Am besten versteht ihr das Dorf deshalb von den tieferen Lagen nach oben.',
      note: 'Die amtliche Höhenangabe bezieht sich auf das Rathaus und ist keine einheitliche Höhe des ganzen Dorfes.',
      updated: 'Veröffentlicht im August 2026'
    },
    facts: [
      { label: 'Gemeindegebiet', value: '40,49 km²' },
      { label: 'Amtlicher Höhenbezug', value: '318 m am Rathaus' },
      { label: 'Plaza del Ingenio', value: 'Etwa 290 m' },
      { label: 'Geschützte Landschaft', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Das Dorf von unten nach oben lesen',
      title: 'Vier Stufen vom unteren Platz bis zum Gebirgsrand',
      intro:
        'Eine vertikale Abfolge ist hier hilfreicher als ein flacher Kompass. Sie erklärt, warum eine kurze horizontale Entfernung einen spürbaren Anstieg enthalten kann.',
      items: [
        { label: 'Unterer Bezugspunkt', value: 'Plaza del Ingenio · etwa 290 m' },
        { label: 'Historischer Anstieg', value: 'Die Calle Real führt hinauf durch den alten Ort' },
        { label: 'Obere Altstadt', value: 'Barribarto · ihr höchster Teil' },
        { label: 'Übergang ins Gebirge', value: 'Pozo de Lízar · 419 m, danach die Sierra' }
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
        title: 'Plaza del Ingenio, Calle Real und Barribarto bilden einen sichtbaren Anstieg',
        paragraphs: [
          'Die offizielle Tourismusinformation verortet die Plaza del Ingenio auf ungefähr 290 Metern. Von dort führt die Route zum El Fuerte über die Calle Real durch die Altstadt hinauf. Der Höhenwechsel gehört damit zur alltäglichen Struktur des Dorfes und ist keine getrennte Bergtour.',
          'Barribarto wird amtlich als höchster Teil der Altstadt beschrieben. Eine exakte Höhe ist für dieses Verhältnis nicht nötig: Der historische Ort steigt vom unteren Platz über enge Gassen und Treppen an.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'Die Landschaft darunter',
        title: 'Unterhalb des Dorfes liegen Täler und terrassierte Hänge',
        paragraphs: [
          'Der Blick aus den historischen Gassen zeigt, warum sich der Ort erhöht anfühlt. Tieferes Gelände, bewirtschaftete Terrassen und talförmige Einschnitte liegen unterhalb, während die Bebauung den Hang darüber hält.',
          'Diese weitere Landschaft hilft bei der Orientierung, ist hier aber kein Wanderführer. Für einen Aufenthalt zählt, dass sowohl die Anfahrt von unten als auch die Wege in der Altstadt vom Relief geprägt sind.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'Die Sierra Almijara',
        title: 'Historische Gassen gehen schnell in Berggelände über',
        paragraphs: [
          'Die offizielle Route erreicht den Pozo de Lízar auf 419 Metern. Dieser konkrete Referenzpunkt zeigt, wie schnell das Gelände jenseits der Altstadt ansteigt, ohne eine ungeprüfte minimale oder maximale Höhe der Gemeinde zu benötigen.',
          'Frigiliana und Nerja liegen beide im Naturpark Sierras de Tejeda, Almijara y Alhama. Das Schutzgebiet umfasst rund 40.657 Hektar in Málaga und Granada und bindet das Dorf in ein weit größeres Gebirgssystem ein.'
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
        'Gemeindefläche und der 318-Meter-Bezug am Rathaus stammen aus SIMA. Plaza del Ingenio, Barribarto und Pozo de Lízar folgen der offiziellen Tourismusinformation von Frigiliana. Eine minimale oder maximale Gemeindehöhe wird nicht genannt.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Amtliche Gemeindefläche und Höhenreferenz.', href: sharedSources.sima },
        { label: 'SIMA · Definition der Höhenangabe', text: 'Definiert die Gemeindehöhe am Rathaus des Hauptortes.', href: sharedSources.simaAltitude },
        { label: 'Frigiliana Tourism · El Fuerte', text: 'Offizielle Route mit Angaben zu Plaza del Ingenio, Barribarto und Pozo de Lízar.', href: sharedSources.tourismEn },
        { label: 'Junta de Andalucía · Naturpark', text: 'Amtliche Fläche des Schutzgebiets und beteiligte Gemeinden.', href: sharedSources.naturalPark }
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
      title: 'Un pueblo que asciende por la ladera hacia la sierra',
      standfirst:
        'Frigiliana no ocupa una única plataforma llana. La plaza del Ingenio, el Ayuntamiento, el casco histórico escalonado y el borde de la sierra están a distintas cotas. La forma más útil de entender el pueblo es leerlo desde el terreno inferior hacia arriba.',
      note: 'La altitud oficial es una referencia medida en el Ayuntamiento, no una única cota para todo el pueblo.',
      updated: 'Publicado en agosto de 2026'
    },
    facts: [
      { label: 'Municipio', value: '40,49 km²' },
      { label: 'Referencia oficial de altitud', value: '318 m en el Ayuntamiento' },
      { label: 'Plaza del Ingenio', value: 'Unos 290 m' },
      { label: 'Paisaje protegido', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Leer el pueblo de abajo arriba',
      title: 'Cuatro etapas desde la plaza inferior hasta la sierra',
      intro:
        'Aquí resulta más útil una secuencia vertical que una brújula plana. Así se entiende por qué una distancia horizontal corta puede esconder una subida apreciable.',
      items: [
        { label: 'Referencia inferior', value: 'Plaza del Ingenio · unos 290 m' },
        { label: 'Subida histórica', value: 'La calle Real asciende por el casco antiguo' },
        { label: 'Casco histórico alto', value: 'Barribarto · su parte más elevada' },
        { label: 'Transición a la montaña', value: 'Pozo de Lízar · 419 m, después la sierra' }
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
        title: 'Plaza del Ingenio, calle Real y Barribarto forman una subida visible',
        paragraphs: [
          'La información turística oficial sitúa la plaza del Ingenio a unos 290 metros. Desde allí, la ruta de El Fuerte continúa por la calle Real y asciende a través del casco histórico. El cambio de cota forma parte de la estructura cotidiana del pueblo, no de una excursión de montaña separada.',
          'Barribarto está descrito oficialmente como la parte más alta del casco histórico. No hace falta inventar una altitud exacta para comprender la relación: el pueblo antiguo sube desde la plaza inferior por calles estrechas y escaleras.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'El paisaje inferior',
        title: 'El pueblo se eleva sobre valles y laderas abancaladas',
        paragraphs: [
          'Las vistas desde las calles históricas explican por qué el núcleo se percibe elevado. Debajo aparecen terrenos más bajos, terrazas cultivadas y pliegues con forma de valle, mientras el caserío se mantiene sobre la ladera.',
          'Ese marco ayuda a orientarse, pero esta no es una guía de senderismo. Para una estancia importa que tanto la aproximación desde abajo como los desplazamientos dentro del casco histórico estén condicionados por el relieve.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'La Sierra Almijara',
        title: 'Las calles históricas se convierten pronto en terreno de montaña',
        paragraphs: [
          'La ruta oficial alcanza el Pozo de Lízar a 419 metros, una referencia concreta que muestra la rapidez con la que el terreno asciende más allá del casco histórico. No es necesario publicar una altitud municipal mínima o máxima que todavía no está verificada.',
          'Frigiliana y Nerja forman parte del Parque Natural Sierras de Tejeda, Almijara y Alhama. El espacio protegido abarca aproximadamente 40.657 hectáreas entre Málaga y Granada e integra el pueblo en un sistema montañoso mucho mayor.'
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
        'La superficie municipal y la referencia de 318 metros en el Ayuntamiento proceden de SIMA. Plaza del Ingenio, Barribarto y Pozo de Lízar siguen la información turística oficial de Frigiliana. No se publica una altitud municipal mínima o máxima.',
      checked: 'Fuentes comprobadas en agosto de 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Superficie municipal y referencia oficial de altitud.', href: sharedSources.sima },
        { label: 'SIMA · Definición de altitud', text: 'Define la altitud municipal en el Ayuntamiento del núcleo principal.', href: sharedSources.simaAltitude },
        { label: 'Turismo de Frigiliana · El Fuerte', text: 'Ruta oficial con datos de plaza del Ingenio, Barribarto y Pozo de Lízar.', href: sharedSources.tourismEs },
        { label: 'Junta de Andalucía · Parque Natural', text: 'Extensión oficial del espacio protegido y municipios incluidos.', href: sharedSources.naturalPark }
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
      title: 'Een dorp dat tegen de helling omhoog de Sierra in klimt',
      standfirst:
        'Frigiliana ligt niet op één vlak niveau. Plaza del Ingenio, het stadhuis, de getrapte historische kern en de rand van het gebergte liggen op verschillende hoogtes. Je begrijpt het dorp daarom het beste van het lagere terrein naar boven toe.',
      note: 'De officiële hoogte is een referentie bij het stadhuis, niet één hoogte voor het hele dorp.',
      updated: 'Gepubliceerd in augustus 2026'
    },
    facts: [
      { label: 'Gemeente', value: '40,49 km²' },
      { label: 'Officiële hoogtereferentie', value: '318 m bij het stadhuis' },
      { label: 'Plaza del Ingenio', value: 'Ongeveer 290 m' },
      { label: 'Beschermd landschap', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Lees het dorp van beneden naar boven',
      title: 'Vier stappen van het lagere plein naar de bergrand',
      intro:
        'Een verticale volgorde is hier nuttiger dan een platte windroos. Zo wordt duidelijk waarom een korte horizontale afstand toch een behoorlijke klim kan bevatten.',
      items: [
        { label: 'Lager referentiepunt', value: 'Plaza del Ingenio · ongeveer 290 m' },
        { label: 'Historische klim', value: 'Calle Real stijgt door het oude dorp' },
        { label: 'Hogere historische kern', value: 'Barribarto · het hoogste deel' },
        { label: 'Overgang naar de bergen', value: 'Pozo de Lízar · 419 m, daarna de Sierra' }
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
        title: 'Plaza del Ingenio, Calle Real en Barribarto vormen een zichtbare klim',
        paragraphs: [
          'De officiële toeristische informatie plaatst Plaza del Ingenio op ongeveer 290 meter. Vanaf daar loopt de El Fuerte-route via Calle Real omhoog door de historische kern. Het hoogteverschil hoort dus bij de dagelijkse structuur van het dorp en is geen losstaande bergtocht.',
          'Barribarto wordt officieel omschreven als het hoogste deel van de historische kern. Een exacte hoogte is niet nodig om de verhouding te begrijpen: het oude dorp stijgt vanaf het lagere plein via smalle straten en trappen.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'Het landschap beneden',
        title: 'Het dorp ligt boven valleien en terrashellingen',
        paragraphs: [
          'Het uitzicht vanuit de historische straten laat zien waarom de kern verhoogd aanvoelt. Lager terrein, bebouwde terrassen en dalvormige plooien liggen onder het dorp, terwijl de bebouwing de helling erboven bezet.',
          'Die ruimere omgeving helpt bij de oriëntatie, maar dit is geen wandelroute. Voor een verblijf telt dat zowel de benadering van beneden als de verplaatsingen in de historische kern door het reliëf worden bepaald.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'De Sierra Almijara',
        title: 'Historische straten gaan snel over in bergterrein',
        paragraphs: [
          'De officiële route bereikt Pozo de Lízar op 419 meter. Dit concrete referentiepunt laat zien hoe snel het terrein voorbij de historische kern stijgt, zonder een niet-geverifieerde minimale of maximale gemeentehoogte te publiceren.',
          'Frigiliana en Nerja liggen beide in het natuurpark Sierras de Tejeda, Almijara y Alhama. Het beschermde landschap beslaat ongeveer 40.657 hectare in Málaga en Granada en plaatst het dorp in een veel groter bergsysteem.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Wat dit betekent voor een verblijf',
        title: 'Een dagelijkse route is afstand plus hoogteverschil en trappen',
        paragraphs: [
          'In Frigiliana beschrijft een korte afstand op de kaart de wandeling niet volledig. Hoogteverschil, trappen en herhaalde beklimmingen tellen mee, vooral als je een route meerdere keren per dag loopt of met bagage, boodschappen of een kinderwagen.',
          'Geografie verklaart waarom locaties anders aanvoelen, maar kiest er geen voor je. Voor de gedetailleerde vergelijking van de lagere historische straten, Barribarto, het benedendorp en het buitengebied ga je verder naar de gids Waar overnachten.'
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
        'De gemeenteoppervlakte en de referentie van 318 meter bij het stadhuis komen van SIMA. Plaza del Ingenio, Barribarto en Pozo de Lízar volgen de officiële toeristische informatie van Frigiliana. Er wordt geen minimale of maximale gemeentehoogte genoemd.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Officiële gemeenteoppervlakte en hoogtereferentie.', href: sharedSources.sima },
        { label: 'SIMA · Definitie van hoogte', text: 'Definieert de gemeentehoogte bij het stadhuis van de hoofdplaats.', href: sharedSources.simaAltitude },
        { label: 'Frigiliana Tourism · El Fuerte', text: 'Officiële routebeschrijving voor Plaza del Ingenio, Barribarto en Pozo de Lízar.', href: sharedSources.tourismEn },
        { label: 'Junta de Andalucía · Natuurpark', text: 'Officiële omvang van het beschermde gebied en deelnemende gemeenten.', href: sharedSources.naturalPark }
      ]
    },
    closing: {
      eyebrow: 'Volgende stap',
      title: 'Plan de klim voordat die de dagelijkse route wordt.',
      body: 'Gebruik de geografie om het dorp te begrijpen en kies daarna de aankomst en ligging die bij je dagen passen.',
      arrivalLabel: 'Plan aankomst & mobiliteit',
      stayLabel: 'Vergelijk waar te verblijven'
    }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: {
      eyebrow: 'Frigiliana · Geografi & orientering',
      title: 'En by som klättrar uppför sluttningen in i Sierran',
      standfirst:
        'Frigiliana ligger inte på en enda plan nivå. Plaza del Ingenio, stadshuset, den trappade historiska byn och bergskanten ligger på olika höjder. Därför blir byn tydligast när den läses från den lägre terrängen och uppåt.',
      note: 'Den officiella höjden är en referens vid stadshuset, inte en enda höjd för hela byn.',
      updated: 'Publicerad i augusti 2026'
    },
    facts: [
      { label: 'Kommun', value: '40,49 km²' },
      { label: 'Officiell höjdreferens', value: '318 m vid stadshuset' },
      { label: 'Plaza del Ingenio', value: 'Omkring 290 m' },
      { label: 'Skyddat landskap', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Läs byn nedifrån och upp',
      title: 'Fyra steg från det lägre torget till bergskanten',
      intro:
        'En vertikal följd är mer användbar här än en platt kompass. Den förklarar varför ett kort horisontellt avstånd kan innehålla en tydlig stigning.',
      items: [
        { label: 'Lägre referenspunkt', value: 'Plaza del Ingenio · omkring 290 m' },
        { label: 'Historisk stigning', value: 'Calle Real leder upp genom den gamla byn' },
        { label: 'Övre historiska kvarter', value: 'Barribarto · dess högsta del' },
        { label: 'Övergång till bergen', value: 'Pozo de Lízar · 419 m, sedan Sierran' }
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
        title: 'Plaza del Ingenio, Calle Real och Barribarto bildar en tydlig stigning',
        paragraphs: [
          'Den officiella turistinformationen placerar Plaza del Ingenio på cirka 290 meter. Därifrån fortsätter El Fuerte-leden via Calle Real upp genom den historiska byn. Höjdskillnaden är därmed en del av byns vardagsstruktur och inte en separat bergstur.',
          'Barribarto beskrivs officiellt som den högsta delen av det historiska kvarteret. En exakt höjd behövs inte för att förstå sambandet: den gamla byn stiger från det lägre torget via smala gator och trappor.'
        ]
      },
      {
        id: 'lower-landscape',
        eyebrow: 'Landskapet nedanför',
        title: 'Byn ligger ovanför dalar och terrasserade sluttningar',
        paragraphs: [
          'Utsikten från de historiska gatorna visar varför byn upplevs ligga högt. Lägre mark, odlade terrasser och dalformade veck ligger nedanför medan bebyggelsen håller sluttningen ovanför.',
          'Den större omgivningen hjälper orienteringen, men detta är ingen vandringsbeskrivning. För en vistelse är poängen att både ankomsten nedifrån och vägarna inom den historiska byn formas av reliefen.'
        ]
      },
      {
        id: 'sierra-almijara',
        eyebrow: 'Sierra Almijara',
        title: 'Historiska gator övergår snabbt i bergsterräng',
        paragraphs: [
          'Den officiella rutten når Pozo de Lízar på 419 meter. Det är en konkret referens som visar hur snabbt terrängen stiger bortom den historiska byn, utan att ange en obekräftad lägsta eller högsta höjd för kommunen.',
          'Både Frigiliana och Nerja ingår i naturparken Sierras de Tejeda, Almijara y Alhama. Det skyddade landskapet omfattar cirka 40 657 hektar i Málaga och Granada och placerar byn i ett mycket större bergssystem.'
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
        'Kommunytan och referensen på 318 meter vid stadshuset kommer från SIMA. Plaza del Ingenio, Barribarto och Pozo de Lízar följer Frigilianas officiella turistinformation. Ingen lägsta eller högsta kommunhöjd anges.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        { label: 'SIMA · Frigiliana', text: 'Officiell kommunyta och höjdreferens.', href: sharedSources.sima },
        { label: 'SIMA · Definition av höjd', text: 'Definierar kommunhöjden vid huvudortens stadshus.', href: sharedSources.simaAltitude },
        { label: 'Frigiliana Tourism · El Fuerte', text: 'Officiell ruttbeskrivning för Plaza del Ingenio, Barribarto och Pozo de Lízar.', href: sharedSources.tourismEn },
        { label: 'Junta de Andalucía · Naturpark', text: 'Officiell omfattning för det skyddade området och ingående kommuner.', href: sharedSources.naturalPark }
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
