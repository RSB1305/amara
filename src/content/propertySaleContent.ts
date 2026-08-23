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
  position: '/images/amara-maha/30-amara-frigiliana.jpg'
} as const;

export const propertySaleSeo: AmaraAuthoringSeo = {
  version: '2026-07-31-casa-amara-property-sale-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Historic Boutique Property for Sale in Frigiliana | AMARA',
      description:
        'Discover Casa AMARA, a complete historic property in Frigiliana with direct car access, three terraces, open views and an established hospitality operation.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Historische Immobilie in Frigiliana zu verkaufen | AMARA',
      description:
        'Casa AMARA in Frigiliana: historische Immobilie mit direkter Autozufahrt, drei Terrassen, freiem Blick und etabliertem Beherbergungsbetrieb.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Propiedad boutique histórica en venta en Frigiliana | AMARA',
      description:
        'Casa AMARA en Frigiliana: propiedad histórica con acceso directo en coche, tres terrazas, vistas abiertas y actividad de alojamiento consolidada.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Historisch boutiquepand te koop in Frigiliana | AMARA',
      description:
        'Ontdek Casa AMARA, een compleet historisch pand in Frigiliana met directe auto-toegang, drie terrassen, vrij uitzicht en een gevestigde logiesexploitatie.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Historisk boutiquefastighet till salu i Frigiliana | AMARA',
      description:
        'Upptäck Casa AMARA, en komplett historisk fastighet i Frigiliana med direkt bilaccess, tre terrasser, fri utsikt och en etablerad logiverksamhet.',
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
    lead: l("A fully rebuilt historic property with direct car access, three terraces, open countryside views and an established four-unit hospitality operation.", "Eine umfassend rekonstruierte historische Immobilie mit direkter Autozufahrt, drei Terrassen, freiem Blick über die Landschaft und einem etablierten touristischen Betrieb mit vier Einheiten.", "Una propiedad histórica reconstruida integralmente, con acceso directo en coche, tres terrazas, vistas abiertas al campo y una actividad de alojamiento consolidada con cuatro unidades.", "Een volledig herbouwd historisch pand, direct bereikbaar met de auto, met drie terrassen, vrij uitzicht over het landschap en een gevestigde logiesexploitatie met vier verblijfsunits.", "En historisk fastighet som har byggts om i grunden, direkt tillgänglig med bil, med tre terrasser, fri utsikt över landskapet och en etablerad logiverksamhet med fyra enheter."),
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
        label: l("Reconstruction", "Rekonstruktion", "Reconstrucción", "Herbouw", "Ombyggnad"),
        value: l("Comprehensively reconstructed and renovated from 2020 to 2022; completed in 2022", "Von 2020 bis 2022 umfassend rekonstruiert und renoviert; Fertigstellung 2022", "Reconstruida y renovada integralmente entre 2020 y 2022; finalizada en 2022", "Grondig herbouwd en gerenoveerd tussen 2020 en 2022; afgerond in 2022", "Omfattande ombyggnad och renovering 2020–2022; färdigställd 2022")
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
    kicker: l("Setting and access", "Lage und Zufahrt", "Entorno y acceso", "Ligging en bereikbaarheid", "Läge och tillgänglighet"),
    title: l("A rare position in Frigiliana", "Eine besondere Lage in Frigiliana", "Una ubicación poco común en Frigiliana", "Een bijzondere positie in Frigiliana", "Ett ovanligt läge i Frigiliana"),
    paragraphs: [
      l("Casa AMARA combines a quiet position within Frigiliana’s historic old town with direct car access. Comparable combinations of historic setting, vehicle access, substantial outdoor space and open views are inherently limited.", "Casa AMARA verbindet eine ruhige Lage in der historischen Altstadt von Frigiliana mit direkter Autozufahrt. Vergleichbare Kombinationen aus historischem Umfeld, Fahrzeugzugang, großzügigen Außenflächen und freiem Ausblick sind naturgemäß begrenzt.", "Casa AMARA combina una ubicación tranquila en el casco histórico de Frigiliana con acceso directo en coche. Las propiedades que reúnen entorno histórico, acceso para vehículos, amplios espacios exteriores y vistas abiertas son, por su propia naturaleza, poco frecuentes.", "Casa AMARA ligt rustig in het historische centrum van Frigiliana en is direct bereikbaar met de auto. Vergelijkbare combinaties van een historische omgeving, bereikbaarheid per auto, royale buitenruimte en vrij uitzicht zijn van nature beperkt aanwezig.", "Casa AMARA har ett lugnt läge i Frigilianas historiska stadskärna och är samtidigt direkt tillgänglig med bil. Jämförbara kombinationer av historisk miljö, bilaccess, generösa utomhusytor och fri utsikt är av naturliga skäl begränsade."),
      l("Approximately 170 m² of interior space and 130 m² of terraces and outdoor areas provide around 300 m² in combined use. The three usable terraces support outdoor living and outdoor-kitchen use, with open countryside views and a lateral view towards the sea.", "Rund 170 m² Innenfläche und 130 m² Terrassen- und Außenflächen ergeben zusammen etwa 300 m² nutzbare Fläche. Die drei Terrassen ermöglichen verschiedene Formen des Aufenthalts im Freien und eine Außenküchennutzung – mit freiem Landschaftsblick und seitlichem Blick zum Meer.", "Aproximadamente 170 m² interiores y 130 m² de terrazas y zonas exteriores suman unos 300 m² de uso combinado. Las tres terrazas permiten disfrutar de distintos ambientes al aire libre y de una cocina exterior, con vistas abiertas al campo y una vista lateral hacia el mar.", "Circa 170 m² binnenruimte en 130 m² aan terrassen en buitenruimte bieden samen ongeveer 300 m² gebruiksruimte. De drie bruikbare terrassen ondersteunen verschillende vormen van buitenleven en het gebruik van een buitenkeuken, met vrij uitzicht over het landschap en zijdelings zicht op zee.", "Cirka 170 m² invändig yta och 130 m² terrasser och utomhusytor ger totalt omkring 300 m² kombinerad användningsyta. De tre terrasserna möjliggör olika former av utomhusliv och användning av ett utomhuskök, med fri utsikt över landskapet och havsutsikt åt sidan.")
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
  enquiry: {
    kicker: l("Private buyer process", "Privater Käuferprozess", "Proceso privado para compradores", "Besloten kopersproces", "Privat köparprocess"),
    title: l("Confidential information and buyer enquiry", "Vertrauliche Informationen und Käuferanfrage", "Información confidencial y consulta del comprador", "Vertrouwelijke informatie en kopersaanvraag", "Konfidentiell information och köparförfrågan"),
    lead: l("Detailed property and operating information is reserved for qualified prospective buyers and will be shared through a confidential process.", "Detaillierte Informationen zur Immobilie und zum Betrieb sind qualifizierten Kaufinteressenten vorbehalten und werden in einem vertraulichen Verfahren bereitgestellt.", "La información detallada sobre la propiedad y la actividad está reservada a posibles compradores cualificados y se facilitará mediante un proceso confidencial.", "Gedetailleerde informatie over het pand en de exploitatie is voorbehouden aan gekwalificeerde aspirant-kopers en wordt via een vertrouwelijk proces gedeeld.", "Detaljerad information om fastigheten och verksamheten är förbehållen kvalificerade potentiella köpare och delas genom en konfidentiell process."),
    confidentialTitle: l("Information available through the confidential process", "Informationen im vertraulichen Verfahren", "Información disponible en el proceso confidencial", "Informatie binnen het vertrouwelijke proces", "Information i den konfidentiella processen"),
    confidentialItems: [
      l("Asking price", "Angebotspreis", "Precio de venta solicitado", "Vraagprijs", "Begärt försäljningspris"),
      l("Ownership documentation", "Eigentumsdokumentation", "Documentación de titularidad", "Eigendomsdocumentatie", "Ägardokumentation"),
      l("Plans and measurements", "Pläne und Maßangaben", "Planos y mediciones", "Plattegronden en maatvoering", "Planritningar och mått"),
      l("Reconstruction documentation", "Dokumentation der Rekonstruktion", "Documentación de reconstrucción", "Documentatie van de herbouw", "Dokumentation om ombyggnaden"),
      l("Operating history", "Betriebshistorie", "Historial de la actividad", "Exploitatiehistorie", "Verksamhetshistorik"),
      l("Revenue and cost information", "Umsatz- und Kosteninformationen", "Información sobre ingresos y costes", "Informatie over opbrengsten en kosten", "Information om intäkter och kostnader"),
      l("Inventory information", "Inventarinformationen", "Información de inventario", "Inventarisinformatie", "Inventarieinformation"),
      l("Relevant compliance documentation", "Relevante Compliance-Unterlagen", "Documentación relevante de cumplimiento", "Relevante nalevingsdocumentatie", "Relevant dokumentation om regelefterlevnad"),
      l("Transaction and handover structure", "Transaktions- und Übergabestruktur", "Estructura de la transacción y la entrega", "Structuur van transactie en overdracht", "Struktur för transaktion och överlämning")
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
