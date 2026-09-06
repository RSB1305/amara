import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface PropertySaleSnapshotFact {
  label: string;
  value: string;
}

export interface PropertySalePositionDetail {
  title: string;
  copy: string;
}

export interface PropertySaleUnit {
  title: string;
  subline: string;
  copy: string;
}

export interface PropertySaleUseCase {
  title: string;
  copy: string;
}

export interface PropertySaleRestorationPoint {
  title: string;
  copy: string;
}

export interface PropertySaleAmenityGroup {
  title: string;
  items: string[];
}

export interface PropertySaleLocalizedContent {
  navigation: {
    brandName: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    saleScope: string;
    price: string;
    imageAlt: string;
  };
  snapshot: {
    kicker: string;
    title: string;
    intro: string;
    facts: PropertySaleSnapshotFact[];
  };
  position: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    details: PropertySalePositionDetail[];
  };
  restoration: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    points: PropertySaleRestorationPoint[];
  };
  amenities: {
    kicker: string;
    title: string;
    intro: string;
    imageAlt: string;
    groups: PropertySaleAmenityGroup[];
  };
  units: {
    kicker: string;
    title: string;
    intro: string;
    saleNotice: string;
    items: PropertySaleUnit[];
  };
  useCases: {
    kicker: string;
    title: string;
    intro: string;
    items: PropertySaleUseCase[];
    requirements: string;
  };
  operation: {
    kicker: string;
    title: string;
    paragraphs: string[];
    handoverTitle: string;
    handoverIntro: string;
    handoverItems: string[];
    handoverNotice: string;
  };
  enquiry: {
    kicker: string;
    title: string;
    lead: string;
    confidentialTitle: string;
    confidentialItems: string[];
    qualificationTitle: string;
    qualificationItems: string[];
    legalNotice: string;
    viewingNotice: string;
    ctaLabel: string;
    ctaSupport: string;
  };
}

export const propertySaleImages = {
  hero: '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza.jpg',
  position: '/images/amara-maha/30-amara-frigiliana.jpg',
  restoration: '/images/amara-maha/42-amara-frigiliana.jpg',
  amenities: '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg'
} as const;

export const propertySaleSeo: AmaraAuthoringSeo = {
  version: '2026-07-31-casa-amara-property-sale-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Historic Boutique Property for Sale in Frigiliana | AMARA',
      description:
        'Casa AMARA: a complete historic property in Frigiliana, carefully restored and renovated in 2020–2022, with three terraces, direct car access, open views and a high-quality present-day finish.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Historische Immobilie in Frigiliana zu verkaufen | AMARA',
      description:
        'Casa AMARA: vollständige historische Immobilie in Frigiliana, 2020–2022 aufwendig restauriert und renoviert, mit drei Terrassen, direkter Autozufahrt, freiem Blick und hochwertiger heutiger Ausstattung.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Propiedad boutique histórica en venta en Frigiliana | AMARA',
      description:
        'Casa AMARA: propiedad histórica completa en Frigiliana, restaurada y renovada con cuidado entre 2020 y 2022, con tres terrazas, acceso directo en coche, vistas abiertas y un acabado actual de alta calidad.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Historisch boutiquepand te koop in Frigiliana | AMARA',
      description:
        'Casa AMARA: compleet historisch pand in Frigiliana, in 2020–2022 zorgvuldig gerestaureerd en gerenoveerd, met drie terrassen, directe auto-toegang, vrij uitzicht en een hoogwaardige actuele afwerking.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Historisk boutiquefastighet till salu i Frigiliana | AMARA',
      description:
        'Casa AMARA: komplett historisk fastighet i Frigiliana, varsamt restaurerad och renoverad 2020–2022, med tre terrasser, direkt bilaccess, fri utsikt och en högklassig nutida standard.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: propertySaleImages.hero
};

export const propertySaleContent = {
  navigation: {
    brandName: l("AMARA", "AMARA", "AMARA", "AMARA", "AMARA")
  },
  hero: {
    kicker: l("Private Sale · Frigiliana Old Town", "Privatverkauf · Altstadt von Frigiliana", "Venta privada · Casco histórico de Frigiliana", "Particuliere verkoop · Historisch centrum van Frigiliana", "Privat försäljning · Frigilianas historiska stadskärna"),
    title: l("Historic Boutique Property for Sale in Frigiliana", "Historische Boutique-Immobilie in Frigiliana zu verkaufen", "Propiedad boutique histórica en venta en Frigiliana", "Historisch boutiquepand te koop in Frigiliana", "Historisk fastighet i boutiquestil till salu i Frigiliana"),
    lead: l("A historic house in Frigiliana’s old town, carefully restored and renovated in 2020–2022, with a high-quality present-day finish, three terraces, direct car access and open views — today run as a boutique accommodation.", "Ein historisches Haus in der Altstadt von Frigiliana, in den Jahren 2020 bis 2022 aufwendig restauriert und renoviert, mit hochwertiger heutiger Ausstattung, drei Terrassen, direkter Autozufahrt und freiem Blick – heute als Boutique-Unterkunft betrieben.", "Una casa histórica en el casco antiguo de Frigiliana, restaurada y renovada con esmero entre 2020 y 2022, con un acabado actual de alta calidad, tres terrazas, acceso directo en coche y vistas abiertas; hoy en funcionamiento como alojamiento boutique.", "Een historisch huis in het oude centrum van Frigiliana, in 2020–2022 zorgvuldig gerestaureerd en gerenoveerd, met een hoogwaardige actuele afwerking, drie terrassen, directe auto-toegang en vrij uitzicht — vandaag in bedrijf als boutique-accommodatie.", "Ett historiskt hus i Frigilianas gamla stad, varsamt restaurerat och renoverat 2020–2022, med en högklassig nutida standard, tre terrasser, direkt bilaccess och fri utsikt – i dag i drift som ett boutiqueboende."),
    saleScope: l("Casa AMARA is offered **only as one complete freehold property**. The apartments and room are not available for individual purchase.", "Casa AMARA wird **ausschließlich als eine vollständige Immobilie in Alleineigentum** angeboten. Die Apartments und das Zimmer stehen nicht einzeln zum Verkauf.", "Casa AMARA se ofrece **únicamente como una propiedad completa en pleno dominio**. Los apartamentos y la habitación no se venden por separado.", "Casa AMARA wordt **uitsluitend als één complete onroerende zaak in volle eigendom** aangeboden. De appartementen en de kamer zijn niet afzonderlijk te koop.", "Casa AMARA erbjuds **endast som en komplett friköpt fastighet**. Lägenheterna och rummet säljs inte separat."),
    price: l("Price on request.", "Preis auf Anfrage.", "Precio a consultar.", "Prijs op aanvraag.", "Pris på begäran."),
    imageAlt: l("Terrace at Casa AMARA overlooking the countryside and the Mediterranean landscape near Frigiliana", "Terrasse der Casa AMARA mit Blick über die Landschaft und auf die mediterrane Umgebung bei Frigiliana", "Terraza de Casa AMARA con vistas al campo y al paisaje mediterráneo próximo a Frigiliana", "Terras van Casa AMARA met uitzicht over het landschap en de mediterrane omgeving bij Frigiliana", "Terrass på Casa AMARA med utsikt över landskapet och medelhavsmiljön nära Frigiliana")
  },
  snapshot: {
    kicker: l("Property overview", "Immobilienübersicht", "Resumen de la propiedad", "Overzicht van het pand", "Fastighetsöversikt"),
    title: l("Casa AMARA at a glance", "Casa AMARA auf einen Blick", "Casa AMARA de un vistazo", "Casa AMARA in één oogopslag", "Casa AMARA i korthet"),
    intro: l("A concise factual overview of the complete property, its current configuration and the structure of the proposed sale.", "Ein kompakter, sachlicher Überblick über die gesamte Immobilie, ihre heutige Aufteilung und die Struktur des geplanten Verkaufs.", "Una síntesis clara y objetiva de la propiedad completa, su configuración actual y la estructura de la venta propuesta.", "Een beknopt en feitelijk overzicht van het complete pand, de huidige indeling en de opzet van de voorgenomen verkoop.", "En tydlig och faktabaserad översikt över hela fastigheten, dess nuvarande utformning och den planerade försäljningsstrukturen."),
    facts: [
      {
        label: l("Location", "Lage", "Ubicación", "Locatie", "Läge"),
        value: l("Historic old town of Frigiliana, Málaga, Andalusia", "Historische Altstadt von Frigiliana, Málaga, Andalusien", "Casco histórico de Frigiliana, Málaga, Andalucía", "Historisch centrum van Frigiliana, Málaga, Andalusië", "Frigilianas historiska stadskärna, Málaga, Andalusien")
      },
      {
        label: l("Property type", "Immobilienart", "Tipo de propiedad", "Type object", "Fastighetstyp"),
        value: l("One complete freehold property", "Eine vollständige Immobilie in Alleineigentum", "Una propiedad completa en pleno dominio", "Eén complete onroerende zaak in volle eigendom", "En komplett friköpt fastighet")
      },
      {
        label: l("Configuration", "Aufteilung", "Configuración", "Indeling", "Utformning"),
        value: l("3 independent apartments + 1 compact suite", "3 unabhängige Apartments + 1 kompakte Suite", "3 apartamentos independientes + 1 suite compacta", "3 zelfstandige appartementen + 1 compacte suite", "3 fristående lägenheter + 1 kompakt svit")
      },
      {
        label: l("Interior area", "Innenfläche", "Superficie interior", "Binnenruimte", "Invändig yta"),
        value: l("Approx. 170 m²", "Ca. 170 m²", "Aprox. 170 m²", "Circa 170 m²", "Cirka 170 m²")
      },
      {
        label: l("Terraces and outdoor area", "Terrassen und Außenflächen", "Terrazas y exteriores", "Terrassen en buitenruimte", "Terrasser och utomhusyta"),
        value: l("Approx. 130 m² across three usable terraces", "Ca. 130 m² auf drei nutzbaren Terrassen", "Aprox. 130 m² distribuidos en tres terrazas utilizables", "Circa 130 m² verdeeld over drie bruikbare terrassen", "Cirka 130 m² fördelat på tre användbara terrasser")
      },
      {
        label: l("Access", "Zufahrt", "Acceso", "Bereikbaarheid", "Tillgänglighet"),
        value: l("Direct car access within the historic old town", "Direkte Autozufahrt innerhalb der historischen Altstadt", "Acceso directo en coche dentro del casco histórico", "Direct bereikbaar met de auto in het historische centrum", "Direkt tillgänglig med bil i den historiska stadskärnan")
      },
      {
        label: l("Views", "Ausblick", "Vistas", "Uitzicht", "Utsikt"),
        value: l("Open countryside views with a lateral sea view", "Freier Blick über die Landschaft mit seitlichem Meerblick", "Vistas abiertas al campo y vista lateral al mar", "Vrij uitzicht over het landschap en zijdelings zeezicht", "Fri utsikt över landskapet och havsutsikt åt sidan")
      },
      {
        label: l("Restoration & renovation", "Restaurierung & Renovierung", "Restauración y renovación", "Restauratie & renovatie", "Restaurering & renovering"),
        value: l("Carefully restored and renovated in 2020–2022; works completed in 2022", "In den Jahren 2020 bis 2022 aufwendig restauriert und renoviert; Fertigstellung 2022", "Restaurada y renovada con esmero entre 2020 y 2022; finalizada en 2022", "In 2020–2022 zorgvuldig gerestaureerd en gerenoveerd; afgerond in 2022", "Varsamt restaurerad och renoverad 2020–2022; färdigställd 2022")
      },
      {
        label: l("Current use", "Heutige Nutzung", "Uso actual", "Huidig gebruik", "Nuvarande användning"),
        value: l("Operating boutique tourist accommodation", "Aktiv betriebene touristische Boutique-Unterkunft", "Alojamiento turístico boutique en funcionamiento", "Boutique-toeristenaccommodatie in bedrijf", "Boutiqueboende för turister i aktiv drift")
      },
      {
        label: l("Sale structure", "Verkaufsstruktur", "Estructura de venta", "Verkoopstructuur", "Försäljningsstruktur"),
        value: l("Complete building only", "Nur das vollständige Gebäude", "Solo el edificio completo", "Uitsluitend het complete gebouw", "Endast hela byggnaden")
      },
      {
        label: l("Individual availability", "Einzelverfügbarkeit", "Disponibilidad individual", "Afzonderlijke beschikbaarheid", "Separat tillgänglighet"),
        value: l("No individual apartment or room sales", "Kein Einzelverkauf von Apartments oder Zimmern", "No se venden apartamentos ni habitación por separado", "Geen afzonderlijke verkoop van appartementen of kamer", "Ingen separat försäljning av lägenheter eller rum")
      },
      {
        label: l("Price", "Preis", "Precio", "Prijs", "Pris"),
        value: l("On request", "Auf Anfrage", "A consultar", "Op aanvraag", "På begäran")
      }
    ]
  },
  position: {
    kicker: l("Setting and outdoor space", "Lage und Außenbereiche", "Entorno y exteriores", "Ligging en buitenruimte", "Läge och utomhusytor"),
    title: l("Setting, views and outdoor space", "Lage, Aussicht und Außenbereiche", "Entorno, vistas y exteriores", "Ligging, uitzicht en buitenruimte", "Läge, utsikt och utomhusytor"),
    paragraphs: [
      l("Casa AMARA sits in a quiet spot within Frigiliana’s historic old town, with direct car access — a combination of historic setting, easy access, generous outdoor space and open views that gives the property its character.", "Casa AMARA liegt ruhig in der historischen Altstadt von Frigiliana und ist zugleich direkt mit dem Auto erreichbar – eine Verbindung aus historischem Umfeld, bequemem Zugang, großzügigen Außenflächen und freiem Ausblick, die den Charakter der Immobilie prägt.", "Casa AMARA se ubica en un punto tranquilo del casco histórico de Frigiliana, con acceso directo en coche: una combinación de entorno histórico, acceso cómodo, amplios espacios exteriores y vistas abiertas que define el carácter de la propiedad.", "Casa AMARA ligt rustig in het historische centrum van Frigiliana en is tegelijk direct met de auto bereikbaar — een combinatie van historische omgeving, gemakkelijke toegang, royale buitenruimte en vrij uitzicht die het karakter van het pand bepaalt.", "Casa AMARA ligger lugnt i Frigilianas historiska stadskärna och är samtidigt direkt tillgänglig med bil – en kombination av historisk miljö, bekväm access, generösa utomhusytor och fri utsikt som ger fastigheten dess karaktär."),
      l("Approximately 170 m² of interior space and roughly 130 m² of terraces and outdoor areas make up around 300 m² of combined indoor and outdoor space. The three usable terraces support outdoor living and an outdoor kitchen, with open countryside views and a lateral view towards the sea.", "Rund 170 m² Innenfläche und etwa 130 m² Terrassen und Außenflächen ergeben zusammen rund 300 m² kombinierte Innen- und Außenflächen. Die drei nutzbaren Terrassen ermöglichen das Leben im Freien und eine Außenküche – mit freiem Landschaftsblick und seitlichem Blick zum Meer.", "Aproximadamente 170 m² de superficie interior y unos 130 m² de terrazas y zonas exteriores conforman en total unos 300 m² de espacio interior y exterior combinado. Las tres terrazas utilizables permiten la vida al aire libre y una cocina exterior, con vistas abiertas al campo y una vista lateral hacia el mar.", "Circa 170 m² binnenruimte en ongeveer 130 m² aan terrassen en buitenruimte vormen samen zo’n 300 m² gecombineerde binnen- en buitenruimte. De drie bruikbare terrassen bieden ruimte voor buitenleven en een buitenkeuken, met vrij uitzicht over het landschap en zijdelings zicht op zee.", "Cirka 170 m² invändig yta och omkring 130 m² terrasser och utomhusytor utgör tillsammans runt 300 m² kombinerad inne- och uteyta. De tre användbara terrasserna ger plats för utomhusliv och ett utomhuskök, med fri utsikt över landskapet och havsutsikt åt sidan.")
    ],
    imageAlt: l("Outdoor kitchen and terrace at Casa AMARA with open countryside views near Frigiliana", "Außenküche und Terrasse der Casa AMARA mit freiem Landschaftsblick bei Frigiliana", "Cocina exterior y terraza de Casa AMARA con vistas abiertas al campo cerca de Frigiliana", "Buitenkeuken en terras van Casa AMARA met vrij uitzicht over het landschap bij Frigiliana", "Utomhuskök och terrass på Casa AMARA med fri utsikt över landskapet nära Frigiliana"),
    details: [
      {
        title: l("Historic setting", "Historisches Umfeld", "Entorno histórico", "Historische omgeving", "Historisk miljö"),
        copy: l("Positioned within the historic fabric of Frigiliana’s old town.", "Eingebettet in die historische Bausubstanz der Altstadt von Frigiliana.", "Integrada en el tejido histórico del casco antiguo de Frigiliana.", "Gelegen binnen het historische weefsel van het oude centrum van Frigiliana.", "Fastigheten är en del av den historiska bebyggelsen i Frigilianas gamla stad.")
      },
      {
        title: l("Practical access", "Praktische Zufahrt", "Acceso práctico", "Praktische toegang", "Praktisk tillgänglighet"),
        copy: l("The property can be reached directly by car.", "Die Immobilie ist direkt mit dem Auto erreichbar.", "La propiedad es accesible directamente en coche.", "Het pand is rechtstreeks met de auto bereikbaar.", "Fastigheten kan nås direkt med bil.")
      },
      {
        title: l("Outdoor living", "Leben im Freien", "Vida al aire libre", "Buitenleven", "Utomhusliv"),
        copy: l("Three usable terraces create distinct outdoor areas across the property.", "Drei nutzbare Terrassen schaffen eigenständige Außenbereiche.", "Tres terrazas utilizables crean zonas exteriores diferenciadas.", "Drie bruikbare terrassen vormen afzonderlijke buitenruimtes.", "Tre användbara terrasser skapar separata utomhusmiljöer.")
      }
    ]
  },
  restoration: {
    kicker: l("Restoration and renovation", "Restaurierung und Renovierung", "Restauración y renovación", "Restauratie en renovatie", "Restaurering och renovering"),
    title: l("Restored and renovated, 2020–2022", "Restauriert und renoviert, 2020–2022", "Restaurada y renovada, 2020–2022", "Gerestaureerd en gerenoveerd, 2020–2022", "Restaurerad och renoverad, 2020–2022"),
    paragraphs: [
      l("Casa AMARA was carefully restored and renovated between 2020 and 2022, with the works completed in 2022. The aim throughout was to preserve the historic character of the house and combine it with a considered, high-quality contemporary design.", "Casa AMARA wurde in den Jahren 2020 bis 2022 aufwendig restauriert und renoviert; die Arbeiten wurden 2022 abgeschlossen. Leitgedanke war dabei, den historischen Charakter des Hauses zu bewahren und mit einer durchdachten, hochwertigen zeitgemäßen Gestaltung zu verbinden.", "Casa AMARA se restauró y renovó con esmero entre 2020 y 2022, y las obras se completaron en 2022. La idea rectora fue preservar el carácter histórico de la casa y combinarlo con un diseño contemporáneo cuidado y de alta calidad.", "Casa AMARA werd tussen 2020 en 2022 zorgvuldig gerestaureerd en gerenoveerd; de werkzaamheden werden in 2022 afgerond. Uitgangspunt was steeds om het historische karakter van het huis te bewaren en te verbinden met een doordacht, hoogwaardig eigentijds ontwerp.", "Casa AMARA restaurerades och renoverades varsamt mellan 2020 och 2022, och arbetet slutfördes 2022. Den bärande tanken var att bevara husets historiska karaktär och förena den med en genomtänkt, högklassig samtida gestaltning."),
      l("Today, historic materials and surfaces meet a calm, contemporary interior. Traces of the old house — natural stone, brick and hand-finished lime surfaces — remain part of the atmosphere and give each area its own character.", "Heute treffen historische Materialien und Oberflächen auf ein ruhiges, zeitgemäßes Interieur. Spuren des alten Hauses – Naturstein, Ziegel und handwerkliche Kalkoberflächen – bleiben Teil der Atmosphäre und geben jedem Bereich seinen eigenen Charakter.", "Hoy, los materiales y las superficies históricas conviven con un interior sereno y actual. Las huellas de la casa antigua —piedra natural, ladrillo y superficies de cal trabajadas a mano— siguen formando parte del ambiente y dan a cada zona su propio carácter.", "Vandaag ontmoeten historische materialen en oppervlakken een rustig, eigentijds interieur. Sporen van het oude huis — natuursteen, baksteen en ambachtelijke kalkafwerkingen — blijven deel van de sfeer en geven elke ruimte een eigen karakter.", "I dag möter historiska material och ytor ett lugnt, samtida inredningsuttryck. Spår av det gamla huset – natursten, tegel och hantverksmässiga kalkytor – är fortfarande en del av atmosfären och ger varje del sin egen karaktär.")
    ],
    imageAlt: l("Interior of Casa AMARA combining historic materials such as exposed brick and lime surfaces with a contemporary finish", "Innenraum der Casa AMARA, in dem historische Materialien wie Sichtziegel und Kalkoberflächen mit zeitgemäßer Gestaltung verbunden sind", "Interior de Casa AMARA que combina materiales históricos como el ladrillo visto y las superficies de cal con un acabado contemporáneo", "Interieur van Casa AMARA waarin historische materialen zoals zichtbaar metselwerk en kalkafwerkingen samengaan met een eigentijdse afwerking", "Interiör i Casa AMARA där historiska material som synligt tegel och kalkytor förenas med ett samtida uttryck"),
    points: [
      {
        title: l("Historic character", "Historischer Charakter", "Carácter histórico", "Historisch karakter", "Historisk karaktär"),
        copy: l("The character of the old house has been kept and remains visible throughout.", "Der Charakter des alten Hauses wurde bewahrt und bleibt überall spürbar.", "Se ha conservado el carácter de la casa antigua, presente en todos los espacios.", "Het karakter van het oude huis is behouden en overal voelbaar.", "Det gamla husets karaktär har bevarats och märks genomgående.")
      },
      {
        title: l("Materials", "Materialität", "Materiales", "Materialen", "Material"),
        copy: l("Natural stone, brick and traditional lime surfaces set the tone of the interiors.", "Naturstein, Ziegel und traditionelle Kalkoberflächen prägen die Innenräume.", "La piedra natural, el ladrillo y las superficies de cal tradicionales marcan el tono de los interiores.", "Natuursteen, baksteen en traditionele kalkafwerkingen bepalen de sfeer van de interieurs.", "Natursten, tegel och traditionella kalkytor sätter tonen i interiörerna.")
      },
      {
        title: l("Old and new", "Alt und Neu", "Lo antiguo y lo nuevo", "Oud en nieuw", "Gammalt och nytt")
        ,
        copy: l("Historic fabric and contemporary comfort are brought together with care.", "Historische Substanz und zeitgemäßer Komfort sind behutsam miteinander verbunden.", "El tejido histórico y el confort actual se unen con cuidado.", "Historische substantie en eigentijds comfort zijn met zorg samengebracht.", "Historisk byggnad och samtida komfort förenas med omsorg.")
      }
    ]
  },
  amenities: {
    kicker: l("Today’s fit-out and comfort", "Ausstattung und Komfort heute", "Equipamiento y confort hoy", "Uitrusting en comfort vandaag", "Utrustning och komfort i dag"),
    title: l("Fit-out and comfort today", "Ausstattung und Komfort heute", "Equipamiento y confort hoy", "Uitrusting en comfort vandaag", "Utrustning och komfort i dag"),
    intro: l("Today, Casa AMARA combines historic materials and surfaces with contemporary comfort. The features described below reflect the property in its current state.", "Heute verbindet Casa AMARA historische Materialien und Oberflächen mit zeitgemäßem Komfort. Die nachfolgend beschriebenen Merkmale zeigen die Immobilie in ihrem heutigen Zustand.", "Hoy, Casa AMARA combina materiales y superficies históricas con un confort actual. Las características descritas a continuación reflejan la propiedad en su estado actual.", "Vandaag verbindt Casa AMARA historische materialen en oppervlakken met eigentijds comfort. De hieronder beschreven kenmerken tonen het pand in de huidige staat.", "I dag förenar Casa AMARA historiska material och ytor med samtida komfort. De egenskaper som beskrivs nedan visar fastigheten i dess nuvarande skick."),
    imageAlt: l("Bathroom at Casa AMARA with handmade lime tiles, patterned floor tiles and timber joinery", "Badezimmer der Casa AMARA mit handgefertigten Kalkfliesen, gemustertem Boden und Holzarbeiten", "Baño de Casa AMARA con azulejos de cal artesanales, suelo con dibujo y carpintería de madera", "Badkamer van Casa AMARA met handgemaakte kalktegels, een gedessineerde vloer en houten schrijnwerk", "Badrum i Casa AMARA med handgjort kalkkakel, mönstrat golv och snickerier i trä"),
    groups: [
      {
        title: l("Comfort", "Komfort", "Confort", "Comfort", "Komfort"),
        items: [
          l("Air conditioning", "Klimaanlagen", "Aire acondicionado", "Airconditioning", "Luftkonditionering"),
          l("Underfloor heating in the bathrooms", "Fußbodenheizung in den Badezimmern", "Suelo radiante en los baños", "Vloerverwarming in de badkamers", "Golvvärme i badrummen")
        ]
      },
      {
        title: l("Bathrooms", "Bäder", "Baños", "Badkamers", "Badrum"),
        items: [
          l("Well-appointed bathrooms", "Hochwertig ausgestattete Bäder", "Baños de buena calidad", "Hoogwaardig ingerichte badkamers", "Välutrustade badrum"),
          l("Double and outdoor showers", "Doppel- und Außenduschen", "Duchas dobles y exteriores", "Dubbele en buitendouches", "Dubbel- och utomhusduschar")
        ]
      },
      {
        title: l("Kitchens and outdoors", "Küchen und Außenbereich", "Cocinas y exterior", "Keukens en buitenruimte", "Kök och utomhus"),
        items: [
          l("Fitted kitchens", "Ausgestattete Küchen", "Cocinas equipadas", "Ingerichte keukens", "Utrustade kök"),
          l("Outdoor kitchen and furnished terraces", "Außenküche und möblierte Terrassen", "Cocina exterior y terrazas amuebladas", "Buitenkeuken en gemeubileerde terrassen", "Utomhuskök och möblerade terrasser")
        ]
      },
      {
        title: l("Surfaces", "Oberflächen", "Superficies", "Oppervlakken", "Ytor"),
        items: [
          l("Quality tiles and surfaces", "Hochwertige Fliesen und Oberflächen", "Azulejos y superficies de calidad", "Hoogwaardige tegels en oppervlakken", "Kakel och ytor av god kvalitet"),
          l("Traditional lime finishes", "Traditionelle Kalkoberflächen", "Superficies de cal tradicionales", "Traditionele kalkafwerkingen", "Traditionella kalkytor")
        ]
      }
    ]
  },
  units: {
    kicker: l("Current configuration", "Heutige Aufteilung", "Configuración actual", "Huidige indeling", "Nuvarande utformning"),
    title: l("One property, four accommodation units", "Eine Immobilie, vier Einheiten für Gäste", "Una propiedad, cuatro unidades de alojamiento", "Eén pand, vier verblijfsunits", "En fastighet, fyra boendeenheter"),
    intro: l("Casa AMARA currently operates as boutique tourist accommodation with four distinct guest units within the same complete property.", "Casa AMARA wird derzeit als touristische Boutique-Unterkunft mit vier klar abgegrenzten Gasteinheiten innerhalb einer vollständigen Immobilie betrieben.", "Casa AMARA funciona actualmente como alojamiento turístico boutique, con cuatro unidades diferenciadas dentro de una única propiedad completa.", "Casa AMARA is momenteel in bedrijf als boutique-toeristenaccommodatie met vier afzonderlijke verblijfsunits binnen één compleet pand.", "Casa AMARA drivs i dag som ett boutiqueboende för turister, med fyra tydligt avgränsade gästenheter inom en och samma kompletta fastighet."),
    saleNotice: l("The units are presented to explain the current operating configuration. They are not offered for separate sale.", "Die Einheiten zeigen die bestehende Betriebsstruktur. Sie werden nicht einzeln zum Verkauf angeboten.", "Las unidades se muestran para explicar la configuración operativa actual. No se ofrecen a la venta por separado.", "De units worden getoond om de huidige exploitatieopzet uit te leggen. Ze worden niet afzonderlijk te koop aangeboden.", "Enheterna presenteras för att förklara den nuvarande verksamhetsstrukturen. De erbjuds inte till separat försäljning."),
    items: [
      {
        title: l("AMARA Lounis", "AMARA Lounis", "AMARA Lounis", "AMARA Lounis", "AMARA Lounis"),
        subline: l("Independent apartment", "Unabhängiges Apartment", "Apartamento independiente", "Zelfstandig appartement", "Fristående lägenhet"),
        copy: l("One of the property’s three self-contained apartment units within the established operation.", "Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.", "Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.", "Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.", "En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.")
      },
      {
        title: l("AMARA Zaid", "AMARA Zaid", "AMARA Zaid", "AMARA Zaid", "AMARA Zaid"),
        subline: l("Independent apartment", "Unabhängiges Apartment", "Apartamento independiente", "Zelfstandig appartement", "Fristående lägenhet"),
        copy: l("One of the property’s three self-contained apartment units within the established operation.", "Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.", "Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.", "Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.", "En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.")
      },
      {
        title: l("AMARA Maha", "AMARA Maha", "AMARA Maha", "AMARA Maha", "AMARA Maha"),
        subline: l("Independent apartment", "Unabhängiges Apartment", "Apartamento independiente", "Zelfstandig appartement", "Fristående lägenhet"),
        copy: l("One of the property’s three self-contained apartment units within the established operation.", "Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.", "Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.", "Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.", "En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.")
      },
      {
        title: l("AMARA Farah", "AMARA Farah", "AMARA Farah", "AMARA Farah", "AMARA Farah"),
        subline: l("Compact suite", "Kompakte Suite", "Suite compacta", "Compacte suite", "Kompakt svit"),
        copy: l("The fourth guest unit in the current boutique accommodation configuration.", "Die vierte Gasteinheit in der heutigen Boutique-Unterkunftsstruktur.", "La cuarta unidad para huéspedes de la configuración actual del alojamiento boutique.", "De vierde gastenunit binnen de huidige boutique-accommodatieopzet.", "Den fjärde gästenheten i den nuvarande boutiqueinriktade boendestrukturen.")
      }
    ]
  },
  useCases: {
    kicker: l("Buyer perspectives", "Perspektiven für Käufer", "Perspectivas para el comprador", "Perspectieven voor kopers", "Köparperspektiv"),
    title: l("Lifestyle property and established operation", "Lifestyle-Immobilie und etablierter Betrieb", "Propiedad de estilo de vida y actividad consolidada", "Lifestylepand en gevestigde exploitatie", "Livsstilsfastighet och etablerad verksamhet"),
    intro: l("The building may be relevant to buyers considering personal use, owner-operated hospitality or a carefully reviewed combination of both.", "Das Gebäude kann für Käufer interessant sein, die eine private Nutzung, einen eigentümergeführten Beherbergungsbetrieb oder eine sorgfältig geprüfte Kombination aus beidem erwägen.", "El edificio puede resultar relevante para compradores que valoren un uso privado, una actividad de alojamiento gestionada por sus propietarios o una combinación cuidadosamente estudiada de ambos.", "Het gebouw kan relevant zijn voor kopers die privégebruik, een door de eigenaar beheerde logiesexploitatie of een zorgvuldig beoordeelde combinatie van beide overwegen.", "Byggnaden kan vara relevant för köpare som överväger privat användning, ägardriven logiverksamhet eller en noggrant bedömd kombination av båda."),
    items: [
      {
        title: l("Private residence", "Privatwohnsitz", "Residencia privada", "Privéwoning", "Privatbostad"),
        copy: l("The complete property may be considered for use as a private residence, subject to the buyer’s assessment and all applicable requirements.", "Die vollständige Immobilie kann als Privatwohnsitz in Betracht gezogen werden, vorbehaltlich der Prüfung durch den Käufer und aller geltenden Anforderungen.", "La propiedad completa puede considerarse para uso como residencia privada, sujeta al análisis del comprador y a todos los requisitos aplicables.", "Het complete pand kan worden overwogen voor gebruik als privéwoning, onder voorbehoud van de beoordeling door de koper en alle toepasselijke vereisten.", "Hela fastigheten kan övervägas som privatbostad, med förbehåll för köparens egen bedömning och samtliga tillämpliga krav.")
      },
      {
        title: l("Owner-operated hospitality", "Eigentümergeführter Beherbergungsbetrieb", "Alojamiento gestionado por el propietario", "Door de eigenaar beheerde accommodatie", "Ägardriven logiverksamhet"),
        copy: l("The established four-unit operation provides an existing basis for a buyer considering direct management of a boutique accommodation business.", "Der etablierte Betrieb mit vier Einheiten bietet eine bestehende Grundlage für Käufer, die eine Boutique-Unterkunft selbst führen möchten.", "La actividad consolidada con cuatro unidades ofrece una base existente para un comprador interesado en gestionar directamente un alojamiento boutique.", "De gevestigde exploitatie met vier units biedt een bestaande basis voor een koper die een boutique-accommodatie zelf wil beheren.", "Den etablerade verksamheten med fyra enheter ger en befintlig grund för en köpare som överväger att själv driva ett boutiqueboende.")
      },
      {
        title: l("Hybrid personal and income use", "Kombinierte Privat- und Ertragsnutzung", "Uso híbrido personal y con ingresos", "Hybride privé- en inkomstengebruik", "Kombinerad privat- och intäktsanvändning"),
        copy: l("A combination of personal occupation and income-generating accommodation may be considered, subject to legal, tax, licensing and operational review.", "Eine Verbindung von Eigennutzung und ertragsorientierter Beherbergung kann nach rechtlicher, steuerlicher, lizenzrechtlicher und betrieblicher Prüfung erwogen werden.", "Puede estudiarse una combinación de ocupación personal y alojamiento generador de ingresos, sujeta a revisión jurídica, fiscal, de licencias y operativa.", "Een combinatie van privébewoning en inkomsten uit logies kan worden overwogen na juridische, fiscale, vergunnings- en operationele beoordeling.", "En kombination av eget boende och intäktsgenererande logi kan övervägas efter juridisk, skattemässig, tillståndsmässig och operativ granskning.")
      }
    ],
    requirements: l("No future use, licence continuity, approval transfer or commercial performance is represented or guaranteed. Each buyer must confirm the requirements relevant to their intended use.", "Eine künftige Nutzung, der Fortbestand oder die Übertragung von Lizenzen und Genehmigungen sowie die wirtschaftliche Entwicklung werden weder zugesichert noch garantiert. Jeder Käufer muss die Anforderungen für die beabsichtigte Nutzung eigenständig prüfen.", "No se declara ni garantiza ningún uso futuro, continuidad o transmisión de licencias y autorizaciones, ni rendimiento comercial. Cada comprador deberá confirmar los requisitos correspondientes al uso que pretenda dar a la propiedad.", "Er worden geen toezeggingen of garanties gedaan over toekomstig gebruik, voortzetting of overdracht van vergunningen en goedkeuringen, of commerciële prestaties. Iedere koper moet zelf de vereisten voor het beoogde gebruik bevestigen.", "Ingen framtida användning, fortsatt giltighet eller överföring av licenser och godkännanden, eller kommersiell utveckling utfästs eller garanteras. Varje köpare måste själv bekräfta kraven för den avsedda användningen.")
  },
  operation: {
    kicker: l("Established operation", "Bestehender Betrieb", "Actividad consolidada", "Gevestigde exploitatie", "Etablerad verksamhet"),
    title: l("The established operation and possible handover", "Bestehender Betrieb und mögliche Übergabe", "La actividad consolidada y una posible entrega", "De gevestigde exploitatie en een mogelijke overdracht", "Den etablerade verksamheten och en möjlig överlämning"),
    paragraphs: [
      l("Casa AMARA is run today as a boutique accommodation with four guest units. The established operation is an additional source of value — but the property itself remains at the centre of the offer.", "Casa AMARA wird heute als Boutique-Unterkunft mit vier Gästebereichen betrieben. Der bestehende Betrieb ist ein zusätzlicher Werttreiber – im Vordergrund steht jedoch die Immobilie selbst.", "Hoy Casa AMARA funciona como alojamiento boutique con cuatro unidades para huéspedes. La actividad consolidada aporta un valor adicional, pero la propiedad en sí sigue siendo el centro de la oferta.", "Casa AMARA wordt vandaag geëxploiteerd als boutique-accommodatie met vier gastenunits. De gevestigde exploitatie is een extra waardebron — maar het pand zelf blijft centraal staan in het aanbod.", "Casa AMARA drivs i dag som ett boutiqueboende med fyra gästenheter. Den etablerade verksamheten är en extra värdekälla – men själva fastigheten står i centrum för erbjudandet."),
      l("Depending on the transaction structure agreed later, defined operational or digital components of the Frigiliana operation may, in addition to the property, form part of a handover. The exact scope is determined solely within the confidential buyer process.", "Je nach später vereinbarter Transaktionsstruktur können neben der Immobilie auch definierte betriebliche oder digitale Bestandteile des Frigiliana-Betriebs Gegenstand einer Übergabe sein. Der konkrete Umfang wird ausschließlich im vertraulichen Käuferprozess festgelegt.", "Según la estructura de la transacción que se acuerde más adelante, además de la propiedad podrían formar parte de una entrega determinados componentes operativos o digitales de la actividad en Frigiliana. El alcance concreto se define únicamente dentro del proceso confidencial para compradores.", "Afhankelijk van de later overeengekomen transactiestructuur kunnen naast het pand ook bepaalde operationele of digitale onderdelen van de exploitatie in Frigiliana deel uitmaken van een overdracht. De precieze omvang wordt uitsluitend binnen het vertrouwelijke kopersproces bepaald.", "Beroende på den transaktionsstruktur som avtalas senare kan, utöver fastigheten, definierade operativa eller digitala delar av verksamheten i Frigiliana ingå i en överlämning. Den exakta omfattningen fastställs enbart inom den konfidentiella köparprocessen.")
    ],
    handoverTitle: l("Components that may be included", "Mögliche Bestandteile einer Übergabe", "Componentes que podrían incluirse", "Onderdelen die deel kunnen uitmaken", "Delar som kan ingå"),
    handoverIntro: l("Depending on the agreed structure, a handover could, for example, include:", "Je nach vereinbarter Struktur könnte eine Übergabe beispielsweise umfassen:", "Según la estructura acordada, una entrega podría incluir, por ejemplo:", "Afhankelijk van de overeengekomen structuur kan een overdracht bijvoorbeeld omvatten:", "Beroende på den avtalade strukturen kan en överlämning till exempel omfatta:"),
    handoverItems: [
      l("Frigiliana-specific website and digital content", "Frigiliana-spezifische Website- und digitale Inhalte", "Contenidos web y digitales específicos de Frigiliana", "Frigiliana-specifieke website- en digitale content", "Frigiliana-specifikt webb- och digitalt innehåll"),
      l("Image material and associated usage rights", "Bildmaterial und zugehörige Nutzungsrechte", "Material fotográfico y los derechos de uso correspondientes", "Beeldmateriaal en bijbehorende gebruiksrechten", "Bildmaterial och tillhörande nyttjanderätter"),
      l("Direct-booking infrastructure", "Direktbuchungs-Infrastruktur", "Infraestructura de reserva directa", "Infrastructuur voor directe boekingen", "Infrastruktur för direktbokning"),
      l("Documented operating processes and operating history", "Dokumentierte Betriebsprozesse und Betriebshistorie", "Procesos operativos documentados e historial de la actividad", "Gedocumenteerde bedrijfsprocessen en exploitatiehistorie", "Dokumenterade driftsprocesser och verksamhetshistorik"),
      l("Selected online presences", "Ausgewählte Online-Präsenzen", "Presencias en línea seleccionadas", "Geselecteerde online aanwezigheden", "Utvalda närvaror online")
    ],
    handoverNotice: l("Detailed operational and financial information is reserved for qualified prospective buyers. It is not represented that the accounts or reviews of individual booking platforms are automatically transferable.", "Detaillierte betriebliche und wirtschaftliche Informationen sind qualifizierten Kaufinteressenten vorbehalten. Es wird nicht zugesichert, dass Konten oder Bewertungen einzelner Buchungsplattformen automatisch übertragbar sind.", "La información operativa y económica detallada está reservada a posibles compradores cualificados. No se afirma que las cuentas ni las valoraciones de plataformas de reserva concretas sean automáticamente transmisibles.", "Gedetailleerde operationele en financiële informatie is voorbehouden aan gekwalificeerde aspirant-kopers. Er wordt niet gesteld dat de accounts of beoordelingen van afzonderlijke boekingsplatforms automatisch overdraagbaar zijn.", "Detaljerad operativ och ekonomisk information är förbehållen kvalificerade potentiella köpare. Det utfästs inte att konton eller omdömen på enskilda bokningsplattformar automatiskt kan överföras.")
  },
  enquiry: {
    kicker: l("Private buyer process", "Privater Käuferprozess", "Proceso privado para compradores", "Besloten kopersproces", "Privat köparprocess"),
    title: l("Confidential information and buyer enquiry", "Vertrauliche Informationen und Käuferanfrage", "Información confidencial y consulta del comprador", "Vertrouwelijke informatie en kopersaanvraag", "Konfidentiell information och köparförfrågan"),
    lead: l("Detailed property and operating information is reserved for qualified prospective buyers and will be shared through a confidential process.", "Detaillierte Informationen zur Immobilie und zum Betrieb sind qualifizierten Kaufinteressenten vorbehalten und werden in einem vertraulichen Verfahren bereitgestellt.", "La información detallada sobre la propiedad y la actividad está reservada a posibles compradores cualificados y se facilitará mediante un proceso confidencial.", "Gedetailleerde informatie over het pand en de exploitatie is voorbehouden aan gekwalificeerde aspirant-kopers en wordt via een vertrouwelijk proces gedeeld.", "Detaljerad information om fastigheten och verksamheten är förbehållen kvalificerade potentiella köpare och delas genom en konfidentiell process."),
    confidentialTitle: l("Information available through the confidential process", "Informationen im vertraulichen Verfahren", "Información disponible en el proceso confidencial", "Informatie binnen het vertrouwelijke proces", "Information i den konfidentiella processen"),
    confidentialItems: [
      l("Asking price", "Angebotspreis", "Precio de venta solicitado", "Vraagprijs", "Begärt försäljningspris"),
      l("Floor plans and area information", "Grundrisse und Flächeninformationen", "Planos y información de superficies", "Plattegronden en oppervlakte-informatie", "Planritningar och ytinformation"),
      l("Ownership and property documentation", "Eigentums- und Objektunterlagen", "Documentación de titularidad y del inmueble", "Eigendoms- en objectdocumentatie", "Ägar- och fastighetsdokumentation"),
      l("Available restoration and renovation documentation (2020–2022)", "Verfügbare Unterlagen zur Restaurierung und Renovierung (2020–2022)", "Documentación disponible sobre la restauración y renovación (2020–2022)", "Beschikbare documentatie over de restauratie en renovatie (2020–2022)", "Tillgänglig dokumentation om restaureringen och renoveringen (2020–2022)"),
      l("Operating history", "Betriebshistorie", "Historial de la actividad", "Exploitatiehistorie", "Verksamhetshistorik"),
      l("Selected revenue and cost information", "Ausgewählte Umsatz- und Kosteninformationen", "Información seleccionada de ingresos y costes", "Geselecteerde informatie over opbrengsten en kosten", "Utvald information om intäkter och kostnader"),
      l("Inventory documentation", "Inventardokumentation", "Documentación de inventario", "Inventarisdocumentatie", "Inventariedokumentation"),
      l("Relevant technical documentation", "Relevante technische Unterlagen", "Documentación técnica relevante", "Relevante technische documentatie", "Relevant teknisk dokumentation"),
      l("Relevant compliance documentation", "Relevante Compliance-Unterlagen", "Documentación relevante de cumplimiento", "Relevante nalevingsdocumentatie", "Relevant dokumentation om regelefterlevnad"),
      l("Information on the possible transaction and handover structure", "Informationen zur möglichen Transaktions- und Übergabestruktur", "Información sobre la posible estructura de transacción y entrega", "Informatie over de mogelijke transactie- en overdrachtsstructuur", "Information om möjlig transaktions- och överlämningsstruktur")
    ],
    qualificationTitle: l("Initial buyer enquiry", "Erste Käuferanfrage", "Consulta inicial del comprador", "Eerste kopersaanvraag", "Inledande köparförfrågan"),
    qualificationItems: [
      l("Full name", "Vollständiger Name", "Nombre completo", "Volledige naam", "Fullständigt namn"),
      l("Preferred contact details", "Bevorzugte Kontaktdaten", "Datos de contacto preferentes", "Contactgegevens van voorkeur", "Föredragna kontaktuppgifter"),
      l("Private buyer, company or representative", "Privatkäufer, Unternehmen oder Vertretung", "Comprador particular, empresa o representante", "Particuliere koper, onderneming of vertegenwoordiger", "Privat köpare, företag eller representant"),
      l("Intended purchase timeframe", "Beabsichtigter Erwerbszeitraum", "Plazo previsto para la compra", "Beoogde aankooptermijn", "Planerad tidsram för köpet"),
      l("Initial questions", "Erste Fragen", "Preguntas iniciales", "Eerste vragen", "Inledande frågor")
    ],
    legalNotice: l("The content is provided for general information only and does not constitute a binding offer or investment recommendation. No future performance is guaranteed; all facts are subject to verification and independent due diligence. Any sale is subject to contract, legal review, tax review and final agreement.", "Die Inhalte dienen ausschließlich der allgemeinen Information und stellen weder ein verbindliches Angebot noch eine Anlageempfehlung dar. Eine künftige wirtschaftliche Entwicklung wird nicht garantiert; alle Angaben stehen unter dem Vorbehalt der Überprüfung und einer unabhängigen Due-Diligence-Prüfung. Ein Verkauf steht unter dem Vorbehalt eines Vertragsabschlusses, rechtlicher und steuerlicher Prüfung sowie der abschließenden Einigung.", "El contenido se facilita únicamente como información general y no constituye una oferta vinculante ni una recomendación de inversión. No se garantiza ningún rendimiento futuro; todos los datos están sujetos a verificación y a una diligencia debida independiente. Cualquier venta queda sujeta a contrato, revisión jurídica, revisión fiscal y acuerdo final.", "De inhoud wordt uitsluitend als algemene informatie verstrekt en vormt geen bindend aanbod of beleggingsadvies. Toekomstige prestaties worden niet gegarandeerd; alle gegevens zijn onderworpen aan verificatie en onafhankelijk due-diligenceonderzoek. Iedere verkoop is onderworpen aan een overeenkomst, juridische beoordeling, fiscale beoordeling en definitieve overeenstemming.", "Innehållet tillhandahålls endast som allmän information och utgör varken ett bindande erbjudande eller en investeringsrekommendation. Framtida resultat garanteras inte; samtliga uppgifter måste verifieras och granskas genom en oberoende due diligence. Varje försäljning är föremål för avtal, juridisk granskning, skattegranskning och slutlig överenskommelse."),
    viewingNotice: l("Viewings are available by prior appointment.", "Besichtigungen sind nach vorheriger Terminvereinbarung möglich.", "Las visitas se realizan con cita previa.", "Bezichtigingen zijn uitsluitend op afspraak mogelijk.", "Visningar sker efter överenskommelse."),
    ctaLabel: l("Request confidential property information", "Vertrauliche Immobilieninformationen anfragen", "Solicitar información confidencial de la propiedad", "Vertrouwelijke objectinformatie aanvragen", "Begär konfidentiell fastighetsinformation"),
    ctaSupport: l("Request the confidential property information to receive further details about the sale, documentation and next steps.", "Fordern Sie die vertraulichen Immobilieninformationen an, um weitere Einzelheiten zum Verkauf, zu den Unterlagen und zu den nächsten Schritten zu erhalten.", "Solicite la información confidencial de la propiedad para recibir más detalles sobre la venta, la documentación y los próximos pasos.", "Vraag de vertrouwelijke objectinformatie aan voor meer informatie over de verkoop, de documentatie en de vervolgstappen.", "Begär den konfidentiella fastighetsinformationen för mer information om försäljningen, dokumentationen och nästa steg.")
  }
};
