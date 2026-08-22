import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaGeographySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaGeographyLocale {
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
  sections: NerjaGeographySection[];
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
    locationLabel: string;
    propertyLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

/**
 * Public, verifiable sources. Shared across locales so a URL change stays a
 * single edit and every language keeps citing exactly the same reference.
 */
const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075',
  populationCentres:
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/nucleos.htm?CodMuni=29075',
  sierraPlan: 'https://www.juntadeandalucia.es/boja/1999/95/2',
  chillarLower: 'https://www.nerja.es/el-ayuntamiento-acomete-el-desbroce-y-limpieza-del-rio-chillar/',
  coastline13: 'https://www.nerjaturismo.es/',
  coastline14: 'https://www.nerjaturismo.es/playas/'
};

export const nerjaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-nerja-geography-v3.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Nerja? Mediterranean, Slopes & Sierra Almijara',
      description:
        'Read Nerja from the Mediterranean to the Sierra Almijara: coastal levels, rising neighbourhoods and what the relief means on foot.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Nerja? Mittelmeer, Hanglagen & Sierra Almijara',
      description:
        'Nerja geografisch verstehen: vom Mittelmeer über die ansteigenden Wohnlagen bis zur Sierra Almijara – und was das Gefälle zu Fuß bedeutet.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Nerja: Mediterráneo, laderas y Sierra Almijara',
      description:
        'Orientación geográfica de Nerja: desde el Mediterráneo y las cotas costeras hasta las laderas y la Sierra Almijara, con sus efectos al caminar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Nerja? Zee, hellingen & Sierra Almijara',
      description:
        'Lees Nerja van de Middellandse Zee via oplopende woonwijken naar de Sierra Almijara en ontdek wat het hoogteverschil te voet betekent.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Nerja? Medelhavet & Sierra Almijara',
      description:
        'Förstå Nerjas geografi från Medelhavet via de stigande bostadsområdena till Sierra Almijara och vad höjdskillnaderna betyder till fots.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaGeographyContent: Record<AmaraLanguage, NerjaGeographyLocale> = {
  en: {
    navLabel: 'Geography & orientation',
    hero: {
      eyebrow: 'Nerja · Geography & orientation',
      title: 'Where is Nerja? Between the Mediterranean and Sierra Almijara',
      standfirst:
        'Nerja is an **85.07 km² coastal municipality with four statistical population centres**. Its principal settlement has an official 22-metre reference, while the Sierra Almijara rises close behind the coast and Navachica reaches 1,832 metres in the wider mountain system.',
      note: 'The 22-metre figure refers to the main settlement. Individual routes differ in gradient and surface.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'Municipality', value: '85.07 km²' },
      { label: 'Principal-settlement reference', value: '22 m' },
      { label: 'Population centres', value: 'Nerja · Maro · Imaroga · Macaca' },
      { label: 'Coastline figures', value: '13–14 km · official sources differ' }
    ],
    orientation: {
      eyebrow: 'Read the municipality as a sequence',
      title: 'Four anchors connect coast, settlement, river and Sierra',
      intro:
        'Nerja is not one beach strip or one elevation. The official record separates the principal settlement from Maro and two smaller nuclei, while the Río Chíllar and Sierra provide inland orientation.',
      items: [
        { label: 'Principal settlement', value: 'Nerja · official reference 22 m' },
        { label: 'Eastern nucleus', value: 'Maro · distinct statistical population centre' },
        { label: 'River corridor', value: 'Lower Río Chíllar · mouth to quarry about 3.6 km' },
        { label: 'Mountain system', value: 'Sierra Almijara · peaks above 1,500 m; Navachica 1,832 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'The coast',
        title: 'The coastline is important, but false precision is not',
        paragraphs: [
          'Official tourism material in the research pool gives both 13 and 14 kilometres for Nerja’s coastline. Until the endpoints and measurement method are known, neither number should be presented as an exact canonical length.',
          'The durable orientation is the municipal structure: Nerja and Maro are distinct population centres in the same coastal municipality. Specific beach approaches still need route-level evidence rather than a universal statement about steps or climbs.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'The built-up town',
        title: 'One official altitude cannot describe the built-up town',
        paragraphs: [
          'SIMA’s 22-metre value belongs to the principal settlement reference; it is not the elevation of every beach, central street or residential area. The nearby Sierra confirms a large regional relief span without supplying route gradients inside town.',
          'Two addresses that look equally close to the centre or coast can therefore involve different walking effort. The responsible conclusion is to verify the exact street and route, not to assign one height or accessibility profile to an entire district.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'The Sierra',
        title: 'Mountain terrain begins close to the coast',
        paragraphs: [
          'The official natural-resources plan describes numerous summits above 1,500 metres in this coastal mountain system and gives Navachica an elevation of 1,832 metres. The closeness of high relief to the coast is one of Nerja’s defining geographic relationships.',
          'The evidence does not yet prove that Navachica is the highest point inside the current Nerja municipal polygon. That boundary question remains explicit instead of being turned into an attractive but unsupported superlative.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'The valley corridor',
        title: 'The Río Chíllar links mountain relief with the coast',
        paragraphs: [
          'The lower Río Chíllar provides a stable inland axis from its mouth toward the quarry. A municipal source describes this lower section as approximately 3.6 kilometres, giving the river a useful scale without turning it into a walking itinerary.',
          'Location is stable geography; access, closure, safety and environmental restrictions are operational information. They require a current official notice and cannot be inferred from a dated maintenance report.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'What it means for a stay',
        title: 'Combine distance with gradient',
        paragraphs: [
          'A short line on a map does not establish an equally easy walk. The 22-metre town reference and the high Sierra context are useful at municipal scale, but neither replaces the gradient, surface and steps of a specific route.',
          'For repeated returns, summer heat, luggage or a pushchair, check the exact origin and destination before you book.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue',
      title: 'Turn the terrain into a practical plan',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Arrival & mobility',
          text: 'Airports, coach connections and the final route into Nerja.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Where to stay in Nerja',
          text: 'Compare the centre, coastal areas and higher residential slopes.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Official geography and explicit evidence limits',
      intro:
        'SIMA supplies municipal scale and population references. The Junta plan supplies the mountain context; the Nerja council supplies the lower Chíllar corridor. Conflicting official coastline figures remain visible.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Official municipal area and reference data.', href: sharedSources.sima },
        { label: 'SIMA · Population centres', text: 'Official list of Nerja, Maro, Imaroga and Macaca.', href: sharedSources.populationCentres },
        { label: 'BOJA · Sierra plan', text: 'Official coastal-mountain relief and Navachica elevation.', href: sharedSources.sierraPlan },
        { label: 'Ayuntamiento de Nerja · Lower Río Chíllar', text: 'Municipal orientation from the mouth to the quarry.', href: sharedSources.chillarLower },
        { label: 'Nerja Turismo · Coastline', text: 'Official tourism source reporting 13 kilometres.', href: sharedSources.coastline13 },
        { label: 'Nerja Turismo · Beaches', text: 'Official tourism source reporting 14 kilometres.', href: sharedSources.coastline14 }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'A better map includes the climb.',
      body: 'Once the sea-to-Sierra structure is clear, choosing routes and a base becomes much more realistic.',
      locationLabel: 'Back to the Nerja location guide',
      propertyLabel: 'View AMARA Playa'
    }
  },
  de: {
    navLabel: 'Geografie & Orientierung',
    hero: {
      eyebrow: 'Nerja · Geografie & Orientierung',
      title: 'Wo liegt Nerja? Zwischen Mittelmeer und Sierra Almijara',
      standfirst:
        'Nerja ist eine **85,07 km² große Küstengemeinde mit vier statistischen Siedlungskernen**. Der Hauptort hat einen amtlichen Höhenbezug von 22 Metern; dicht hinter der Küste steigt die Sierra Almijara an, in deren größerem Gebirgssystem die Navachica 1.832 Meter erreicht.',
      note: 'Die 22 Meter sind eine Hauptortreferenz. Exakte Wegsteigungen und die Lage der Navachica innerhalb der Gemeindegrenze brauchen eigene Nachweise.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Gemeindegebiet', value: '85,07 km²' },
      { label: 'Hauptortreferenz', value: '22 m' },
      { label: 'Siedlungskerne', value: 'Nerja · Maro · Imaroga · Macaca' },
      { label: 'Küstenangaben', value: '13–14 km · amtliche Quellen weichen ab' }
    ],
    orientation: {
      eyebrow: 'Die Gemeinde als Abfolge lesen',
      title: 'Vier Anker verbinden Küste, Orte, Fluss und Sierra',
      intro:
        'Nerja ist weder ein einziger Küstenstreifen noch eine einzige Höhenlage. Die Statistik trennt den Hauptort von Maro und zwei kleineren Kernen; Río Chíllar und Sierra geben die Richtung ins Landesinnere.',
      items: [
        { label: 'Hauptort', value: 'Nerja · amtlicher Bezug 22 m' },
        { label: 'Östlicher Kern', value: 'Maro · eigener statistischer Siedlungskern' },
        { label: 'Flusskorridor', value: 'Unterer Río Chíllar · Mündung bis Steinbruch etwa 3,6 km' },
        { label: 'Gebirgssystem', value: 'Sierra Almijara · Gipfel über 1.500 m; Navachica 1.832 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'Die Küste',
        title: 'Die Küste ist wichtig, falsche Genauigkeit nicht',
        paragraphs: [
          'Amtliches Tourismusmaterial im Research-Pool nennt für Nerjas Küste sowohl 13 als auch 14 Kilometer. Solange Endpunkte und Messmethode nicht geklärt sind, sollte keine der Zahlen als exakte kanonische Länge erscheinen.',
          'Belastbar ist die Siedlungsstruktur: Nerja und Maro sind eigenständige statistische Kerne derselben Küstengemeinde. Konkrete Strandzugänge brauchen Wegdaten statt einer pauschalen Aussage über Steigungen oder Stufen.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'Der bebaute Ort',
        title: 'Eine amtliche Höhenzahl beschreibt nicht den bebauten Ort',
        paragraphs: [
          'Der SIMA-Wert von 22 Metern gehört zur Hauptortreferenz; er ist nicht die Höhe jedes Strandes, jeder zentralen Straße oder jedes Wohngebiets. Die nahe Sierra belegt eine große regionale Reliefspanne, liefert aber keine Wegsteigungen im Ort.',
          'Zwei ähnlich zentral wirkende Adressen können daher zu Fuß sehr verschieden sein. Verantwortlich ist es, konkrete Straße und Route zu prüfen, statt einem ganzen Viertel eine Höhe oder ein Zugänglichkeitsprofil zuzuschreiben.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'Die Sierra',
        title: 'Hochgebirge beginnt nahe der Küste',
        paragraphs: [
          'Der amtliche Naturressourcenplan beschreibt in diesem küstennahen Gebirgssystem zahlreiche Gipfel über 1.500 Metern und gibt für die Navachica 1.832 Meter an. Die Nähe hohen Reliefs zur Küste prägt Nerjas Geografie.',
          'Noch nicht belegt ist, dass die Navachica der höchste Punkt innerhalb der heutigen Gemeindegrenze Nerjas ist. Diese Grenzfrage bleibt sichtbar, statt zu einem attraktiven, aber unbelegten Superlativ zu werden.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Der Talkorridor',
        title: 'Der Río Chíllar verbindet Gebirgsrelief und Küste',
        paragraphs: [
          'Der untere Río Chíllar bildet eine stabile Achse von seiner Mündung landeinwärts zum Steinbruch. Eine Gemeindequelle beschreibt diesen unteren Abschnitt mit rund 3,6 Kilometern und gibt dem Korridor damit Maßstab, ohne ihn zur Wanderroute zu machen.',
          'Die Lage ist stabile Geografie; Zugang, Sperrung, Sicherheit und Naturschutzauflagen sind operative Informationen. Sie brauchen eine aktuelle amtliche Mitteilung und lassen sich nicht aus einem älteren Pflegebericht ableiten.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Was das für den Aufenthalt bedeutet',
        title: 'Entfernung und Steigung zusammen betrachten',
        paragraphs: [
          'Eine kurze Linie auf der Karte garantiert keinen gleich leichten Fußweg. Die 22-Meter-Referenz des Hauptortes und die hohe Sierra helfen im Maßstab der Gemeinde, ersetzen aber weder Gefälle noch Oberfläche und Stufen einer konkreten Route.',
          'Prüft bei wiederholten Wegen, Sommerhitze, Gepäck oder Kinderwagen den genauen Start und das Ziel. Diese Seite erklärt, warum das nötig ist; Unterkunfts- und Lagenwahl gehören in den Guide „Wo übernachten“.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Vom Gelände zum praktischen Plan',
      links: [
        { token: 'getting_to_nerja', label: 'Anreise & Mobilität', text: 'Flughäfen, Busverbindungen und die letzte Etappe nach Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Wo in Nerja übernachten', text: 'Zentrum, Küstenlagen und höhere Wohnhänge im Vergleich.' }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Amtliche Geografie und klare Beleggrenzen',
      intro:
        'SIMA liefert Gemeinde- und Siedlungsreferenzen. Der Junta-Plan beschreibt das Gebirge; die Gemeinde Nerja den unteren Chíllar-Korridor. Widersprüchliche amtliche Küstenangaben bleiben sichtbar.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Amtliche Fläche und Referenzdaten der Gemeinde.', href: sharedSources.sima },
        { label: 'SIMA · Siedlungskerne', text: 'Amtliche Liste von Nerja, Maro, Imaroga und Macaca.', href: sharedSources.populationCentres },
        { label: 'BOJA · Sierra-Plan', text: 'Amtliches Küstengebirge und Höhenangabe der Navachica.', href: sharedSources.sierraPlan },
        { label: 'Ayuntamiento de Nerja · Unterer Río Chíllar', text: 'Gemeindeorientierung von der Mündung bis zum Steinbruch.', href: sharedSources.chillarLower },
        { label: 'Nerja Turismo · Küste', text: 'Amtliche Tourismusquelle mit 13 Kilometern.', href: sharedSources.coastline13 },
        { label: 'Nerja Turismo · Strände', text: 'Amtliche Tourismusquelle mit 14 Kilometern.', href: sharedSources.coastline14 }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Eine gute Karte zeigt auch den Anstieg.',
      body: 'Wenn die Struktur vom Meer zur Sierra klar ist, werden Wege und die Wahl der passenden Basis realistischer.',
      locationLabel: 'Zurück zum Nerja Lage-Guide',
      propertyLabel: 'AMARA Playa ansehen'
    }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: {
      eyebrow: 'Nerja · Geografía y orientación',
      title: '¿Dónde está Nerja? Entre el Mediterráneo y la Sierra Almijara',
      standfirst:
        'Nerja es un **municipio costero de 85,07 km² con cuatro núcleos estadísticos de población**. El núcleo principal tiene una referencia oficial de 22 metros; muy cerca de la costa se eleva la Sierra Almijara, donde Navachica alcanza 1.832 metros dentro del sistema montañoso más amplio.',
      note: 'Los 22 metros son una referencia del núcleo principal. Las pendientes concretas y la posición de Navachica respecto al límite municipal requieren pruebas propias.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Municipio', value: '85,07 km²' },
      { label: 'Referencia del núcleo principal', value: '22 m' },
      { label: 'Núcleos de población', value: 'Nerja · Maro · Imaroga · Macaca' },
      { label: 'Cifras de costa', value: '13–14 km · las fuentes oficiales difieren' }
    ],
    orientation: {
      eyebrow: 'Leer el municipio como una secuencia',
      title: 'Cuatro referencias unen costa, núcleos, río y sierra',
      intro:
        'Nerja no es una sola franja de playa ni una única cota. La estadística separa el núcleo principal de Maro y otros dos núcleos; el Río Chíllar y la sierra orientan hacia el interior.',
      items: [
        { label: 'Núcleo principal', value: 'Nerja · referencia oficial 22 m' },
        { label: 'Núcleo oriental', value: 'Maro · núcleo estadístico propio' },
        { label: 'Corredor fluvial', value: 'Río Chíllar inferior · desembocadura a cantera, unos 3,6 km' },
        { label: 'Sistema montañoso', value: 'Sierra Almijara · cumbres sobre 1.500 m; Navachica 1.832 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'La costa',
        title: 'La costa importa, pero la falsa precisión no',
        paragraphs: [
          'El material turístico oficial de la investigación cita 13 y 14 kilómetros para la costa de Nerja. Hasta conocer los extremos y el método de medición, ninguna cifra debe presentarse como longitud canónica exacta.',
          'Sí es estable la estructura municipal: Nerja y Maro son núcleos diferenciados del mismo municipio costero. Cada acceso a playa necesita datos de ruta y no una regla universal sobre escaleras o subidas.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'El casco urbano',
        title: 'Una sola altitud oficial no describe el casco urbano',
        paragraphs: [
          'Los 22 metros de SIMA corresponden a la referencia del núcleo principal, no a todas las playas, calles céntricas o zonas residenciales. La sierra próxima confirma un gran relieve regional, pero no da pendientes dentro del pueblo.',
          'Dos direcciones igualmente cercanas al centro o a la costa pueden exigir esfuerzos distintos. Hay que verificar calle y ruta concretas, no asignar una altura o accesibilidad a todo un barrio.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'La sierra',
        title: 'La alta montaña comienza cerca de la costa',
        paragraphs: [
          'El plan oficial de recursos naturales describe numerosas cumbres de más de 1.500 metros en este sistema próximo al litoral y fija Navachica en 1.832 metros. La cercanía entre costa y gran relieve define la geografía de Nerja.',
          'La evidencia aún no demuestra que Navachica sea el punto más alto dentro del actual límite municipal de Nerja. La cuestión queda abierta en vez de convertirse en un superlativo sin probar.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'El corredor del valle',
        title: 'El río Chíllar enlaza el relieve de la sierra con la costa',
        paragraphs: [
          'El tramo inferior del Río Chíllar crea un eje estable desde la desembocadura hacia la cantera. Una fuente municipal describe este tramo con unos 3,6 kilómetros, una escala útil que no lo convierte en itinerario.',
          'La ubicación es geografía estable; acceso, cierre, seguridad y restricciones ambientales son datos operativos. Exigen un aviso oficial vigente y no se deducen de una noticia de mantenimiento.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Qué significa para una estancia',
        title: 'Combinar distancia y pendiente',
        paragraphs: [
          'Una línea corta en el mapa no garantiza un paseo igual de sencillo. La referencia de 22 metros y la sierra alta orientan a escala municipal, pero no sustituyen pendiente, superficie y escalones de una ruta concreta.',
          'Con vueltas repetidas, calor, equipaje o carrito, comprobad origen y destino exactos. Esta página explica por qué; la elección de alojamiento y zona corresponde a la guía Dónde alojarse.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continuar',
      title: 'Del relieve al plan práctico',
      links: [
        { token: 'getting_to_nerja', label: 'Llegada y movilidad', text: 'Aeropuertos, conexiones en autobús y el último tramo hasta Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Dónde alojarse en Nerja', text: 'Comparación entre el centro, las zonas costeras y las laderas residenciales.' }
      ]
    },
    sources: {
      eyebrow: 'Fuentes de la guía',
      title: 'Geografía oficial y límites de evidencia claros',
      intro:
        'SIMA aporta la escala municipal y los núcleos. El plan de la Junta aporta la montaña; el Ayuntamiento de Nerja, el corredor inferior del Chíllar. La contradicción oficial sobre la costa permanece visible.',
      checked: 'Fuentes comprobadas en agosto de 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Superficie y datos oficiales de referencia del municipio.', href: sharedSources.sima },
        { label: 'SIMA · Núcleos de población', text: 'Lista oficial de Nerja, Maro, Imaroga y Macaca.', href: sharedSources.populationCentres },
        { label: 'BOJA · Plan de la sierra', text: 'Relieve litoral oficial y altitud de Navachica.', href: sharedSources.sierraPlan },
        { label: 'Ayuntamiento de Nerja · Río Chíllar inferior', text: 'Orientación municipal desde la desembocadura hasta la cantera.', href: sharedSources.chillarLower },
        { label: 'Nerja Turismo · Costa', text: 'Fuente turística oficial que indica 13 kilómetros.', href: sharedSources.coastline13 },
        { label: 'Nerja Turismo · Playas', text: 'Fuente turística oficial que indica 14 kilómetros.', href: sharedSources.coastline14 }
      ]
    },
    closing: {
      eyebrow: 'Volver a la estancia',
      title: 'Un buen mapa también incluye la subida.',
      body: 'Al comprender la estructura del mar a la sierra, resulta más fácil valorar rutas y elegir una base realista.',
      locationLabel: 'Volver a la guía de ubicación de Nerja',
      propertyLabel: 'Ver AMARA Playa'
    }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: {
      eyebrow: 'Nerja · Geografie & oriëntatie',
      title: 'Waar ligt Nerja? Tussen de Middellandse Zee en Sierra Almijara',
      standfirst:
        'Nerja is een **kustgemeente van 85,07 km² met vier statistische woonkernen**. De hoofdplaats heeft een officiële referentie van 22 meter; vlak achter de kust rijst de Sierra Almijara op, waar Navachica in het bredere bergsysteem 1.832 meter bereikt.',
      note: 'De 22 meter is een referentie voor de hoofdplaats. Afzonderlijke routes verschillen in helling en ondergrond.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Gemeente', value: '85,07 km²' },
      { label: 'Referentie hoofdplaats', value: '22 m' },
      { label: 'Woonkernen', value: 'Nerja · Maro · Imaroga · Macaca' },
      { label: 'Kustcijfers', value: '13–14 km · officiële bronnen verschillen' }
    ],
    orientation: {
      eyebrow: 'Lees de gemeente als een reeks',
      title: 'Vier ankers verbinden kust, woonkernen, rivier en Sierra',
      intro:
        'Nerja is niet één strandstrook of één hoogte. De statistiek onderscheidt de hoofdplaats van Maro en twee kleinere kernen; Río Chíllar en de Sierra geven richting naar het binnenland.',
      items: [
        { label: 'Hoofdplaats', value: 'Nerja · officiële referentie 22 m' },
        { label: 'Oostelijke kern', value: 'Maro · eigen statistische woonkern' },
        { label: 'Riviercorridor', value: 'Benedenloop Río Chíllar · monding tot groeve circa 3,6 km' },
        { label: 'Bergsysteem', value: 'Sierra Almijara · toppen boven 1.500 m; Navachica 1.832 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'De kust',
        title: 'De kust telt, schijnprecisie niet',
        paragraphs: [
          'Officieel toerismemateriaal in het onderzoek noemt zowel 13 als 14 kilometer kust. Zolang eindpunten en meetmethode onbekend zijn, is geen van beide een exacte canonieke lengte.',
          'De gemeentelijke structuur is wel stabiel: Nerja en Maro zijn afzonderlijke kernen binnen dezelfde kustgemeente. Een strandtoegang vraagt routespecifiek bewijs, geen algemene regel over trappen of klimmen.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'De bebouwde kom',
        title: 'Eén officiële hoogte beschrijft de bebouwde kom niet',
        paragraphs: [
          'De 22 meter van SIMA hoort bij de hoofdplaatsreferentie, niet bij elk strand, elke centrumstraat of woonwijk. De nabije Sierra bevestigt groot regionaal reliëf maar levert geen hellingen in de stad.',
          'Twee adressen die even dicht bij centrum of kust lijken, kunnen te voet verschillen. Controleer straat en route en ken niet één hoogte of toegankelijkheid toe aan een hele wijk.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'De Sierra',
        title: 'Hooggebergte begint dicht bij de kust',
        paragraphs: [
          'Het officiële natuurplan beschrijft in dit kustnabije systeem veel toppen boven 1.500 meter en geeft Navachica een hoogte van 1.832 meter. De nabijheid van hoog reliëf bepaalt Nerja’s geografie.',
          'Nog niet bewezen is dat Navachica het hoogste punt binnen de huidige gemeentegrens is. Die vraag blijft open in plaats van een onbewezen superlatief te worden.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'De valleicorridor',
        title: 'De Río Chíllar verbindt het bergreliëf met de kust',
        paragraphs: [
          'De benedenloop van de Río Chíllar vormt een vaste as vanaf de monding richting groeve. Een gemeentelijke bron beschrijft dit deel als circa 3,6 kilometer, zonder er een wandelroute van te maken.',
          'Ligging is stabiele geografie; toegang, sluiting, veiligheid en natuurbescherming zijn operationeel. Daarvoor is een actuele officiële mededeling nodig.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Wat dit betekent voor een verblijf',
        title: 'Combineer afstand met helling',
        paragraphs: [
          'Een korte lijn op de kaart garandeert geen even gemakkelijke wandeling. De 22-meterreferentie en de hoge Sierra helpen op gemeentelijke schaal, maar vervangen geen helling, ondergrond of trappen van een route.',
          'Controleer bij herhaalde wegen, hitte, bagage of kinderwagen exact begin en eind. Deze pagina verklaart waarom; accommodatie en gebiedskeuze horen in de gids Waar overnachten.'
        ]
      }
    ],
    related: {
      eyebrow: 'Lees verder',
      title: 'Van het terrein naar een praktisch plan',
      links: [
        { token: 'getting_to_nerja', label: 'Aankomst & mobiliteit', text: 'Luchthavens, busverbindingen en het laatste traject naar Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Waar overnachten in Nerja', text: 'Vergelijk het centrum, kustgebieden en hogere woonhellingen.' }
      ]
    },
    sources: {
      eyebrow: 'Bronnen van deze gids',
      title: 'Officiële geografie en duidelijke bewijsgrenzen',
      intro:
        'SIMA levert gemeentelijke schaal en woonkernen. Het Junta-plan beschrijft de bergen; Nerja’s gemeente de benedenloop van de Chíllar. Tegenstrijdige officiële kustcijfers blijven zichtbaar.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Officiële oppervlakte en referentiegegevens van de gemeente.', href: sharedSources.sima },
        { label: 'SIMA · Woonkernen', text: 'Officiële lijst van Nerja, Maro, Imaroga en Macaca.', href: sharedSources.populationCentres },
        { label: 'BOJA · Sierraplan', text: 'Officieel kustgebergte en hoogte van Navachica.', href: sharedSources.sierraPlan },
        { label: 'Ayuntamiento de Nerja · Benedenloop Río Chíllar', text: 'Oriëntatie van monding tot groeve.', href: sharedSources.chillarLower },
        { label: 'Nerja Turismo · Kust', text: 'Officiële toerismebron met 13 kilometer.', href: sharedSources.coastline13 },
        { label: 'Nerja Turismo · Stranden', text: 'Officiële toerismebron met 14 kilometer.', href: sharedSources.coastline14 }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'Een betere kaart laat ook de klim zien.',
      body: 'Zodra de structuur van zee naar Sierra duidelijk is, worden routes en de keuze van een uitvalsbasis realistischer.',
      locationLabel: 'Terug naar de locatiegids van Nerja',
      propertyLabel: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: {
      eyebrow: 'Nerja · Geografi & orientering',
      title: 'Var ligger Nerja? Mellan Medelhavet och Sierra Almijara',
      standfirst:
        'Nerja är en **kustkommun på 85,07 km² med fyra statistiska befolkningskärnor**. Huvudorten har en officiell referens på 22 meter; nära kusten reser sig Sierra Almijara, där Navachica når 1 832 meter i det större bergssystemet.',
      note: '22 meter är en referens för huvudorten. Exakta väglutningar och Navachicas läge mot kommungränsen kräver egna belägg.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'Kommun', value: '85,07 km²' },
      { label: 'Huvudortsreferens', value: '22 m' },
      { label: 'Befolkningskärnor', value: 'Nerja · Maro · Imaroga · Macaca' },
      { label: 'Kustuppgifter', value: '13–14 km · officiella källor skiljer sig' }
    ],
    orientation: {
      eyebrow: 'Läs kommunen som en följd',
      title: 'Fyra ankare binder samman kust, orter, flod och Sierra',
      intro:
        'Nerja är inte en enda strandremsa eller en enda höjd. Statistiken skiljer huvudorten från Maro och två mindre kärnor; Río Chíllar och Sierran ger riktning inåt land.',
      items: [
        { label: 'Huvudort', value: 'Nerja · officiell referens 22 m' },
        { label: 'Östlig kärna', value: 'Maro · egen statistisk befolkningskärna' },
        { label: 'Flodkorridor', value: 'Nedre Río Chíllar · mynning till stenbrott cirka 3,6 km' },
        { label: 'Bergssystem', value: 'Sierra Almijara · toppar över 1 500 m; Navachica 1 832 m' }
      ]
    },
    sections: [
      {
        id: 'coast',
        eyebrow: 'Kusten',
        title: 'Kusten är viktig, falsk precision är det inte',
        paragraphs: [
          'Officiellt turistmaterial i forskningen anger både 13 och 14 kilometer kust. Innan ändpunkter och mätmetod är kända bör ingen siffra användas som exakt kanonisk längd.',
          'Kommunstrukturen är däremot stabil: Nerja och Maro är egna kärnor i samma kustkommun. Varje strandtillfart behöver ruttdata, inte en allmän regel om trappor eller stigning.'
        ]
      },
      {
        id: 'built-up-relief',
        eyebrow: 'Den bebyggda orten',
        title: 'En officiell höjd beskriver inte hela den bebyggda orten',
        paragraphs: [
          'SIMA:s 22 meter hör till huvudortsreferensen, inte till varje strand, centrumgata eller bostadsområde. Den närliggande Sierran visar stort regionalt relief men ger inga lokala väglutningar.',
          'Två adresser som ser lika nära centrum eller kust ut kan skilja sig till fots. Kontrollera den exakta gatan och rutten i stället för att ge ett helt område en höjd eller tillgänglighetsprofil.'
        ]
      },
      {
        id: 'sierra',
        eyebrow: 'Sierran',
        title: 'Högfjäll börjar nära kusten',
        paragraphs: [
          'Den officiella naturresursplanen beskriver många toppar över 1 500 meter i detta kustnära system och anger Navachica till 1 832 meter. Närheten mellan kust och hög relief präglar Nerja.',
          'Det är ännu inte bevisat att Navachica är högsta punkten inom dagens kommungräns. Frågan förblir öppen i stället för att bli en obelagd superlativ.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Dalgången',
        title: 'Río Chíllar binder samman bergsreliefen med kusten',
        paragraphs: [
          'Nedre Río Chíllar bildar en stabil axel från mynningen mot stenbrottet. En kommunal källa beskriver sträckan som cirka 3,6 kilometer utan att göra den till en vandringsled.',
          'Läget är stabil geografi; tillträde, stängning, säkerhet och miljöregler är operativa uppgifter. De kräver ett aktuellt officiellt besked.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Vad det betyder för en vistelse',
        title: 'Väg samman avstånd och lutning',
        paragraphs: [
          'En kort linje på kartan garanterar inte en lika lätt promenad. Huvudortens 22 meter och den höga Sierran hjälper på kommunskala, men ersätter inte lutning, underlag och trappor på en viss väg.',
          'Kontrollera exakt start och mål vid upprepade vägar, värme, bagage eller barnvagn. Denna sida förklarar varför; boende- och områdesval hör hemma i guiden Var ska man bo.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Från terrängen till en praktisk plan',
      links: [
        { token: 'getting_to_nerja', label: 'Ankomst & mobilitet', text: 'Flygplatser, bussförbindelser och sista sträckan in till Nerja.' },
        { token: 'nerja_where_to_stay', label: 'Var man bor i Nerja', text: 'Jämför centrum, kustområden och högre bostadssluttningar.' }
      ]
    },
    sources: {
      eyebrow: 'Källorna bakom guiden',
      title: 'Officiell geografi och tydliga bevisgränser',
      intro:
        'SIMA ger kommunskala och befolkningskärnor. Junta-planen ger bergskontexten; Nerjas kommun nedre Chíllar. Motstridiga officiella kustsiffror förblir synliga.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        { label: 'SIMA · Nerja', text: 'Officiell kommunyta och referensuppgifter.', href: sharedSources.sima },
        { label: 'SIMA · Befolkningskärnor', text: 'Officiell lista över Nerja, Maro, Imaroga och Macaca.', href: sharedSources.populationCentres },
        { label: 'BOJA · Sierraplan', text: 'Officiellt kustberg och Navachicas höjd.', href: sharedSources.sierraPlan },
        { label: 'Ayuntamiento de Nerja · Nedre Río Chíllar', text: 'Orientering från mynning till stenbrott.', href: sharedSources.chillarLower },
        { label: 'Nerja Turismo · Kust', text: 'Officiell turistkälla med 13 kilometer.', href: sharedSources.coastline13 },
        { label: 'Nerja Turismo · Stränder', text: 'Officiell turistkälla med 14 kilometer.', href: sharedSources.coastline14 }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'En bättre karta visar också stigningen.',
      body: 'När strukturen från havet till Sierran är tydlig blir det lättare att bedöma vägar och välja en realistisk bas.',
      locationLabel: 'Tillbaka till Nerjas lägesguide',
      propertyLabel: 'Visa AMARA Playa'
    }
  }
};
