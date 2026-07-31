import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

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
  languages: {
    en: {
      title: 'Historic Boutique Property for Sale in Frigiliana | Casa AMARA',
      description:
        'Discover Casa AMARA, a complete historic property in Frigiliana with direct car access, three terraces, open views and an established hospitality operation.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Historische Boutique-Immobilie in Frigiliana zu verkaufen | Casa AMARA',
      description:
        'Entdecken Sie Casa AMARA, eine vollständige historische Immobilie in Frigiliana mit direkter Autozufahrt, drei Terrassen, freiem Blick und etabliertem Beherbergungsbetrieb.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Propiedad boutique histórica en venta en Frigiliana | Casa AMARA',
      description:
        'Descubra Casa AMARA, una propiedad histórica completa en Frigiliana con acceso directo en coche, tres terrazas, vistas abiertas y una actividad de alojamiento consolidada.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Historisch boutiquepand te koop in Frigiliana | Casa AMARA',
      description:
        'Ontdek Casa AMARA, een compleet historisch pand in Frigiliana met directe auto-toegang, drie terrassen, vrij uitzicht en een gevestigde logiesexploitatie.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Historisk boutiquefastighet till salu i Frigiliana | Casa AMARA',
      description:
        'Upptäck Casa AMARA, en komplett historisk fastighet i Frigiliana med direkt bilaccess, tre terrasser, fri utsikt och en etablerad logiverksamhet.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: propertySaleImages.hero
};

export const propertySaleContent = {
  en: {
    navigation: {
      brandName: 'AMARA'
    },
    hero: {
      kicker: 'Private Sale · Frigiliana Old Town',
      title: 'Historic Boutique Property for Sale in Frigiliana',
      lead:
        'A fully rebuilt historic property with direct car access, three terraces, open countryside views and an established four-unit hospitality operation.',
      saleScope:
        'Casa AMARA is offered only as one complete freehold property. The apartments and room are not available for individual purchase.',
      price: 'Price on request.',
      imageAlt:
        'Terrace at Casa AMARA overlooking the countryside and the Mediterranean landscape near Frigiliana'
    },
    snapshot: {
      kicker: 'Property overview',
      title: 'Casa AMARA at a glance',
      intro:
        'A concise factual overview of the complete property, its current configuration and the structure of the proposed sale.',
      facts: [
        { label: 'Location', value: 'Historic old town of Frigiliana, Málaga, Andalusia' },
        { label: 'Property type', value: 'One complete freehold property' },
        { label: 'Configuration', value: '3 independent apartments + 1 premium double room' },
        { label: 'Interior area', value: 'Approx. 170 m²' },
        { label: 'Terraces and outdoor area', value: 'Approx. 130 m² across three usable terraces' },
        { label: 'Access', value: 'Direct car access within the historic old town' },
        { label: 'Views', value: 'Open countryside views with a lateral sea view' },
        { label: 'Reconstruction', value: 'Comprehensively reconstructed and renovated from 2020 to 2022; completed in 2022' },
        { label: 'Current use', value: 'Operating boutique tourist accommodation' },
        { label: 'Sale structure', value: 'Complete building only' },
        { label: 'Individual availability', value: 'No individual apartment or room sales' },
        { label: 'Price', value: 'On request' }
      ]
    },
    position: {
      kicker: 'Setting and access',
      title: 'A rare position in Frigiliana',
      paragraphs: [
        'Casa AMARA combines a quiet position within Frigiliana’s historic old town with direct car access. Comparable combinations of historic setting, vehicle access, substantial outdoor space and open views are inherently limited.',
        'Approximately 170 m² of interior space and 130 m² of terraces and outdoor areas provide around 300 m² in combined use. The three usable terraces support outdoor living and outdoor-kitchen use, with open countryside views and a lateral view towards the sea.'
      ],
      imageAlt:
        'Outdoor kitchen and terrace at Casa AMARA with open countryside views near Frigiliana',
      details: [
        { title: 'Historic setting', copy: 'Positioned within the historic fabric of Frigiliana’s old town.' },
        { title: 'Practical access', copy: 'The property can be reached directly by car.' },
        { title: 'Outdoor living', copy: 'Three usable terraces create distinct outdoor areas across the property.' }
      ]
    },
    units: {
      kicker: 'Current configuration',
      title: 'One property, four accommodation units',
      intro:
        'Casa AMARA currently operates as boutique tourist accommodation with four distinct guest units within the same complete property.',
      saleNotice:
        'The units are presented to explain the current operating configuration. They are not offered for separate sale.',
      items: [
        {
          title: 'AMARA Lounis',
          subline: 'Independent apartment',
          copy: 'One of the property’s three self-contained apartment units within the established operation.'
        },
        {
          title: 'AMARA Zaid',
          subline: 'Independent apartment',
          copy: 'One of the property’s three self-contained apartment units within the established operation.'
        },
        {
          title: 'AMARA Maha',
          subline: 'Independent apartment',
          copy: 'One of the property’s three self-contained apartment units within the established operation.'
        },
        {
          title: 'AMARA Farah',
          subline: 'Premium double room',
          copy: 'The fourth guest unit in the current boutique accommodation configuration.'
        }
      ]
    },
    useCases: {
      kicker: 'Buyer perspectives',
      title: 'Lifestyle property and established operation',
      intro:
        'The building may be relevant to buyers considering personal use, owner-operated hospitality or a carefully reviewed combination of both.',
      items: [
        {
          title: 'Private residence',
          copy: 'The complete property may be considered for use as a private residence, subject to the buyer’s assessment and all applicable requirements.'
        },
        {
          title: 'Owner-operated hospitality',
          copy: 'The established four-unit operation provides an existing basis for a buyer considering direct management of a boutique accommodation business.'
        },
        {
          title: 'Hybrid personal and income use',
          copy: 'A combination of personal occupation and income-generating accommodation may be considered, subject to legal, tax, licensing and operational review.'
        }
      ],
      requirements:
        'No future use, licence continuity, approval transfer or commercial performance is represented or guaranteed. Each buyer must confirm the requirements relevant to their intended use.'
    },
    enquiry: {
      kicker: 'Private buyer process',
      title: 'Confidential information and buyer enquiry',
      lead:
        'Detailed property and operating information is reserved for qualified prospective buyers and will be shared through a confidential process.',
      confidentialTitle: 'Information available through the confidential process',
      confidentialItems: [
        'Asking price',
        'Ownership documentation',
        'Plans and measurements',
        'Reconstruction documentation',
        'Operating history',
        'Revenue and cost information',
        'Inventory information',
        'Relevant compliance documentation',
        'Transaction and handover structure'
      ],
      qualificationTitle: 'Initial buyer enquiry',
      qualificationItems: [
        'Full name',
        'Preferred contact details',
        'Private buyer, company or representative',
        'Intended purchase timeframe',
        'Initial questions'
      ],
      legalNotice:
        'The content is provided for general information only and does not constitute a binding offer or investment recommendation. No future performance is guaranteed; all facts are subject to verification and independent due diligence. Any sale is subject to contract, legal review, tax review and final agreement.',
      viewingNotice: 'Viewings are available by prior appointment.',
      ctaLabel: 'Request confidential property information',
      ctaSupport:
        'Request the confidential property information to receive further details about the sale, documentation and next steps.'
    }
  },
  de: {
    navigation: {
      brandName: 'AMARA'
    },
    hero: {
      kicker: 'Privatverkauf · Altstadt von Frigiliana',
      title: 'Historische Boutique-Immobilie in Frigiliana zu verkaufen',
      lead:
        'Eine umfassend rekonstruierte historische Immobilie mit direkter Autozufahrt, drei Terrassen, freiem Blick über die Landschaft und einem etablierten touristischen Betrieb mit vier Einheiten.',
      saleScope:
        'Casa AMARA wird ausschließlich als eine vollständige Immobilie in Alleineigentum angeboten. Die Apartments und das Zimmer stehen nicht einzeln zum Verkauf.',
      price: 'Preis auf Anfrage.',
      imageAlt:
        'Terrasse der Casa AMARA mit Blick über die Landschaft und auf die mediterrane Umgebung bei Frigiliana'
    },
    snapshot: {
      kicker: 'Immobilienübersicht',
      title: 'Casa AMARA auf einen Blick',
      intro:
        'Ein kompakter, sachlicher Überblick über die gesamte Immobilie, ihre heutige Aufteilung und die Struktur des geplanten Verkaufs.',
      facts: [
        { label: 'Lage', value: 'Historische Altstadt von Frigiliana, Málaga, Andalusien' },
        { label: 'Immobilienart', value: 'Eine vollständige Immobilie in Alleineigentum' },
        { label: 'Aufteilung', value: '3 unabhängige Apartments + 1 Premium-Doppelzimmer' },
        { label: 'Innenfläche', value: 'Ca. 170 m²' },
        { label: 'Terrassen und Außenflächen', value: 'Ca. 130 m² auf drei nutzbaren Terrassen' },
        { label: 'Zufahrt', value: 'Direkte Autozufahrt innerhalb der historischen Altstadt' },
        { label: 'Ausblick', value: 'Freier Blick über die Landschaft mit seitlichem Meerblick' },
        { label: 'Rekonstruktion', value: 'Von 2020 bis 2022 umfassend rekonstruiert und renoviert; Fertigstellung 2022' },
        { label: 'Heutige Nutzung', value: 'Aktiv betriebene touristische Boutique-Unterkunft' },
        { label: 'Verkaufsstruktur', value: 'Nur das vollständige Gebäude' },
        { label: 'Einzelverfügbarkeit', value: 'Kein Einzelverkauf von Apartments oder Zimmern' },
        { label: 'Preis', value: 'Auf Anfrage' }
      ]
    },
    position: {
      kicker: 'Lage und Zufahrt',
      title: 'Eine besondere Lage in Frigiliana',
      paragraphs: [
        'Casa AMARA verbindet eine ruhige Lage in der historischen Altstadt von Frigiliana mit direkter Autozufahrt. Vergleichbare Kombinationen aus historischem Umfeld, Fahrzeugzugang, großzügigen Außenflächen und freiem Ausblick sind naturgemäß begrenzt.',
        'Rund 170 m² Innenfläche und 130 m² Terrassen- und Außenflächen ergeben zusammen etwa 300 m² nutzbare Fläche. Die drei Terrassen ermöglichen verschiedene Formen des Aufenthalts im Freien und eine Außenküchennutzung – mit freiem Landschaftsblick und seitlichem Blick zum Meer.'
      ],
      imageAlt:
        'Außenküche und Terrasse der Casa AMARA mit freiem Landschaftsblick bei Frigiliana',
      details: [
        { title: 'Historisches Umfeld', copy: 'Eingebettet in die historische Bausubstanz der Altstadt von Frigiliana.' },
        { title: 'Praktische Zufahrt', copy: 'Die Immobilie ist direkt mit dem Auto erreichbar.' },
        { title: 'Leben im Freien', copy: 'Drei nutzbare Terrassen schaffen eigenständige Außenbereiche.' }
      ]
    },
    units: {
      kicker: 'Heutige Aufteilung',
      title: 'Eine Immobilie, vier Einheiten für Gäste',
      intro:
        'Casa AMARA wird derzeit als touristische Boutique-Unterkunft mit vier klar abgegrenzten Gasteinheiten innerhalb einer vollständigen Immobilie betrieben.',
      saleNotice:
        'Die Einheiten zeigen die bestehende Betriebsstruktur. Sie werden nicht einzeln zum Verkauf angeboten.',
      items: [
        {
          title: 'AMARA Lounis',
          subline: 'Unabhängiges Apartment',
          copy: 'Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.'
        },
        {
          title: 'AMARA Zaid',
          subline: 'Unabhängiges Apartment',
          copy: 'Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.'
        },
        {
          title: 'AMARA Maha',
          subline: 'Unabhängiges Apartment',
          copy: 'Eines der drei eigenständigen Apartments innerhalb des etablierten Betriebs.'
        },
        {
          title: 'AMARA Farah',
          subline: 'Premium-Doppelzimmer',
          copy: 'Die vierte Gasteinheit in der heutigen Boutique-Unterkunftsstruktur.'
        }
      ]
    },
    useCases: {
      kicker: 'Perspektiven für Käufer',
      title: 'Lifestyle-Immobilie und etablierter Betrieb',
      intro:
        'Das Gebäude kann für Käufer interessant sein, die eine private Nutzung, einen eigentümergeführten Beherbergungsbetrieb oder eine sorgfältig geprüfte Kombination aus beidem erwägen.',
      items: [
        {
          title: 'Privatwohnsitz',
          copy: 'Die vollständige Immobilie kann als Privatwohnsitz in Betracht gezogen werden, vorbehaltlich der Prüfung durch den Käufer und aller geltenden Anforderungen.'
        },
        {
          title: 'Eigentümergeführter Beherbergungsbetrieb',
          copy: 'Der etablierte Betrieb mit vier Einheiten bietet eine bestehende Grundlage für Käufer, die eine Boutique-Unterkunft selbst führen möchten.'
        },
        {
          title: 'Kombinierte Privat- und Ertragsnutzung',
          copy: 'Eine Verbindung von Eigennutzung und ertragsorientierter Beherbergung kann nach rechtlicher, steuerlicher, lizenzrechtlicher und betrieblicher Prüfung erwogen werden.'
        }
      ],
      requirements:
        'Eine künftige Nutzung, der Fortbestand oder die Übertragung von Lizenzen und Genehmigungen sowie die wirtschaftliche Entwicklung werden weder zugesichert noch garantiert. Jeder Käufer muss die Anforderungen für die beabsichtigte Nutzung eigenständig prüfen.'
    },
    enquiry: {
      kicker: 'Privater Käuferprozess',
      title: 'Vertrauliche Informationen und Käuferanfrage',
      lead:
        'Detaillierte Informationen zur Immobilie und zum Betrieb sind qualifizierten Kaufinteressenten vorbehalten und werden in einem vertraulichen Verfahren bereitgestellt.',
      confidentialTitle: 'Informationen im vertraulichen Verfahren',
      confidentialItems: [
        'Angebotspreis',
        'Eigentumsdokumentation',
        'Pläne und Maßangaben',
        'Dokumentation der Rekonstruktion',
        'Betriebshistorie',
        'Umsatz- und Kosteninformationen',
        'Inventarinformationen',
        'Relevante Compliance-Unterlagen',
        'Transaktions- und Übergabestruktur'
      ],
      qualificationTitle: 'Erste Käuferanfrage',
      qualificationItems: [
        'Vollständiger Name',
        'Bevorzugte Kontaktdaten',
        'Privatkäufer, Unternehmen oder Vertretung',
        'Beabsichtigter Erwerbszeitraum',
        'Erste Fragen'
      ],
      legalNotice:
        'Die Inhalte dienen ausschließlich der allgemeinen Information und stellen weder ein verbindliches Angebot noch eine Anlageempfehlung dar. Eine künftige wirtschaftliche Entwicklung wird nicht garantiert; alle Angaben stehen unter dem Vorbehalt der Überprüfung und einer unabhängigen Due-Diligence-Prüfung. Ein Verkauf steht unter dem Vorbehalt eines Vertragsabschlusses, rechtlicher und steuerlicher Prüfung sowie der abschließenden Einigung.',
      viewingNotice: 'Besichtigungen sind nach vorheriger Terminvereinbarung möglich.',
      ctaLabel: 'Vertrauliche Immobilieninformationen anfragen',
      ctaSupport:
        'Fordern Sie die vertraulichen Immobilieninformationen an, um weitere Einzelheiten zum Verkauf, zu den Unterlagen und zu den nächsten Schritten zu erhalten.'
    }
  },
  es: {
    navigation: {
      brandName: 'AMARA'
    },
    hero: {
      kicker: 'Venta privada · Casco histórico de Frigiliana',
      title: 'Propiedad boutique histórica en venta en Frigiliana',
      lead:
        'Una propiedad histórica reconstruida integralmente, con acceso directo en coche, tres terrazas, vistas abiertas al campo y una actividad de alojamiento consolidada con cuatro unidades.',
      saleScope:
        'Casa AMARA se ofrece únicamente como una propiedad completa en pleno dominio. Los apartamentos y la habitación no se venden por separado.',
      price: 'Precio a consultar.',
      imageAlt:
        'Terraza de Casa AMARA con vistas al campo y al paisaje mediterráneo próximo a Frigiliana'
    },
    snapshot: {
      kicker: 'Resumen de la propiedad',
      title: 'Casa AMARA de un vistazo',
      intro:
        'Una síntesis clara y objetiva de la propiedad completa, su configuración actual y la estructura de la venta propuesta.',
      facts: [
        { label: 'Ubicación', value: 'Casco histórico de Frigiliana, Málaga, Andalucía' },
        { label: 'Tipo de propiedad', value: 'Una propiedad completa en pleno dominio' },
        { label: 'Configuración', value: '3 apartamentos independientes + 1 habitación doble premium' },
        { label: 'Superficie interior', value: 'Aprox. 170 m²' },
        { label: 'Terrazas y exteriores', value: 'Aprox. 130 m² distribuidos en tres terrazas utilizables' },
        { label: 'Acceso', value: 'Acceso directo en coche dentro del casco histórico' },
        { label: 'Vistas', value: 'Vistas abiertas al campo y vista lateral al mar' },
        { label: 'Reconstrucción', value: 'Reconstruida y renovada integralmente entre 2020 y 2022; finalizada en 2022' },
        { label: 'Uso actual', value: 'Alojamiento turístico boutique en funcionamiento' },
        { label: 'Estructura de venta', value: 'Solo el edificio completo' },
        { label: 'Disponibilidad individual', value: 'No se venden apartamentos ni habitación por separado' },
        { label: 'Precio', value: 'A consultar' }
      ]
    },
    position: {
      kicker: 'Entorno y acceso',
      title: 'Una ubicación poco común en Frigiliana',
      paragraphs: [
        'Casa AMARA combina una ubicación tranquila en el casco histórico de Frigiliana con acceso directo en coche. Las propiedades que reúnen entorno histórico, acceso para vehículos, amplios espacios exteriores y vistas abiertas son, por su propia naturaleza, poco frecuentes.',
        'Aproximadamente 170 m² interiores y 130 m² de terrazas y zonas exteriores suman unos 300 m² de uso combinado. Las tres terrazas permiten disfrutar de distintos ambientes al aire libre y de una cocina exterior, con vistas abiertas al campo y una vista lateral hacia el mar.'
      ],
      imageAlt:
        'Cocina exterior y terraza de Casa AMARA con vistas abiertas al campo cerca de Frigiliana',
      details: [
        { title: 'Entorno histórico', copy: 'Integrada en el tejido histórico del casco antiguo de Frigiliana.' },
        { title: 'Acceso práctico', copy: 'La propiedad es accesible directamente en coche.' },
        { title: 'Vida al aire libre', copy: 'Tres terrazas utilizables crean zonas exteriores diferenciadas.' }
      ]
    },
    units: {
      kicker: 'Configuración actual',
      title: 'Una propiedad, cuatro unidades de alojamiento',
      intro:
        'Casa AMARA funciona actualmente como alojamiento turístico boutique, con cuatro unidades diferenciadas dentro de una única propiedad completa.',
      saleNotice:
        'Las unidades se muestran para explicar la configuración operativa actual. No se ofrecen a la venta por separado.',
      items: [
        {
          title: 'AMARA Lounis',
          subline: 'Apartamento independiente',
          copy: 'Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.'
        },
        {
          title: 'AMARA Zaid',
          subline: 'Apartamento independiente',
          copy: 'Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.'
        },
        {
          title: 'AMARA Maha',
          subline: 'Apartamento independiente',
          copy: 'Uno de los tres apartamentos autónomos que forman parte de la actividad consolidada.'
        },
        {
          title: 'AMARA Farah',
          subline: 'Habitación doble premium',
          copy: 'La cuarta unidad para huéspedes de la configuración actual del alojamiento boutique.'
        }
      ]
    },
    useCases: {
      kicker: 'Perspectivas para el comprador',
      title: 'Propiedad de estilo de vida y actividad consolidada',
      intro:
        'El edificio puede resultar relevante para compradores que valoren un uso privado, una actividad de alojamiento gestionada por sus propietarios o una combinación cuidadosamente estudiada de ambos.',
      items: [
        {
          title: 'Residencia privada',
          copy: 'La propiedad completa puede considerarse para uso como residencia privada, sujeta al análisis del comprador y a todos los requisitos aplicables.'
        },
        {
          title: 'Alojamiento gestionado por el propietario',
          copy: 'La actividad consolidada con cuatro unidades ofrece una base existente para un comprador interesado en gestionar directamente un alojamiento boutique.'
        },
        {
          title: 'Uso híbrido personal y con ingresos',
          copy: 'Puede estudiarse una combinación de ocupación personal y alojamiento generador de ingresos, sujeta a revisión jurídica, fiscal, de licencias y operativa.'
        }
      ],
      requirements:
        'No se declara ni garantiza ningún uso futuro, continuidad o transmisión de licencias y autorizaciones, ni rendimiento comercial. Cada comprador deberá confirmar los requisitos correspondientes al uso que pretenda dar a la propiedad.'
    },
    enquiry: {
      kicker: 'Proceso privado para compradores',
      title: 'Información confidencial y consulta del comprador',
      lead:
        'La información detallada sobre la propiedad y la actividad está reservada a posibles compradores cualificados y se facilitará mediante un proceso confidencial.',
      confidentialTitle: 'Información disponible en el proceso confidencial',
      confidentialItems: [
        'Precio de venta solicitado',
        'Documentación de titularidad',
        'Planos y mediciones',
        'Documentación de reconstrucción',
        'Historial de la actividad',
        'Información sobre ingresos y costes',
        'Información de inventario',
        'Documentación relevante de cumplimiento',
        'Estructura de la transacción y la entrega'
      ],
      qualificationTitle: 'Consulta inicial del comprador',
      qualificationItems: [
        'Nombre completo',
        'Datos de contacto preferentes',
        'Comprador particular, empresa o representante',
        'Plazo previsto para la compra',
        'Preguntas iniciales'
      ],
      legalNotice:
        'El contenido se facilita únicamente como información general y no constituye una oferta vinculante ni una recomendación de inversión. No se garantiza ningún rendimiento futuro; todos los datos están sujetos a verificación y a una diligencia debida independiente. Cualquier venta queda sujeta a contrato, revisión jurídica, revisión fiscal y acuerdo final.',
      viewingNotice: 'Las visitas se realizan con cita previa.',
      ctaLabel: 'Solicitar información confidencial de la propiedad',
      ctaSupport:
        'Solicite la información confidencial de la propiedad para recibir más detalles sobre la venta, la documentación y los próximos pasos.'
    }
  },
  nl: {
    navigation: {
      brandName: 'AMARA'
    },
    hero: {
      kicker: 'Particuliere verkoop · Historisch centrum van Frigiliana',
      title: 'Historisch boutiquepand te koop in Frigiliana',
      lead:
        'Een volledig herbouwd historisch pand, direct bereikbaar met de auto, met drie terrassen, vrij uitzicht over het landschap en een gevestigde logiesexploitatie met vier verblijfsunits.',
      saleScope:
        'Casa AMARA wordt uitsluitend als één complete onroerende zaak in volle eigendom aangeboden. De appartementen en de kamer zijn niet afzonderlijk te koop.',
      price: 'Prijs op aanvraag.',
      imageAlt:
        'Terras van Casa AMARA met uitzicht over het landschap en de mediterrane omgeving bij Frigiliana'
    },
    snapshot: {
      kicker: 'Overzicht van het pand',
      title: 'Casa AMARA in één oogopslag',
      intro:
        'Een beknopt en feitelijk overzicht van het complete pand, de huidige indeling en de opzet van de voorgenomen verkoop.',
      facts: [
        { label: 'Locatie', value: 'Historisch centrum van Frigiliana, Málaga, Andalusië' },
        { label: 'Type object', value: 'Eén complete onroerende zaak in volle eigendom' },
        { label: 'Indeling', value: '3 zelfstandige appartementen + 1 premium tweepersoonskamer' },
        { label: 'Binnenruimte', value: 'Circa 170 m²' },
        { label: 'Terrassen en buitenruimte', value: 'Circa 130 m² verdeeld over drie bruikbare terrassen' },
        { label: 'Bereikbaarheid', value: 'Direct bereikbaar met de auto in het historische centrum' },
        { label: 'Uitzicht', value: 'Vrij uitzicht over het landschap en zijdelings zeezicht' },
        { label: 'Herbouw', value: 'Grondig herbouwd en gerenoveerd tussen 2020 en 2022; afgerond in 2022' },
        { label: 'Huidig gebruik', value: 'Boutique-toeristenaccommodatie in bedrijf' },
        { label: 'Verkoopstructuur', value: 'Uitsluitend het complete gebouw' },
        { label: 'Afzonderlijke beschikbaarheid', value: 'Geen afzonderlijke verkoop van appartementen of kamer' },
        { label: 'Prijs', value: 'Op aanvraag' }
      ]
    },
    position: {
      kicker: 'Ligging en bereikbaarheid',
      title: 'Een bijzondere positie in Frigiliana',
      paragraphs: [
        'Casa AMARA ligt rustig in het historische centrum van Frigiliana en is direct bereikbaar met de auto. Vergelijkbare combinaties van een historische omgeving, bereikbaarheid per auto, royale buitenruimte en vrij uitzicht zijn van nature beperkt aanwezig.',
        'Circa 170 m² binnenruimte en 130 m² aan terrassen en buitenruimte bieden samen ongeveer 300 m² gebruiksruimte. De drie bruikbare terrassen ondersteunen verschillende vormen van buitenleven en het gebruik van een buitenkeuken, met vrij uitzicht over het landschap en zijdelings zicht op zee.'
      ],
      imageAlt:
        'Buitenkeuken en terras van Casa AMARA met vrij uitzicht over het landschap bij Frigiliana',
      details: [
        { title: 'Historische omgeving', copy: 'Gelegen binnen het historische weefsel van het oude centrum van Frigiliana.' },
        { title: 'Praktische toegang', copy: 'Het pand is rechtstreeks met de auto bereikbaar.' },
        { title: 'Buitenleven', copy: 'Drie bruikbare terrassen vormen afzonderlijke buitenruimtes.' }
      ]
    },
    units: {
      kicker: 'Huidige indeling',
      title: 'Eén pand, vier verblijfsunits',
      intro:
        'Casa AMARA is momenteel in bedrijf als boutique-toeristenaccommodatie met vier afzonderlijke verblijfsunits binnen één compleet pand.',
      saleNotice:
        'De units worden getoond om de huidige exploitatieopzet uit te leggen. Ze worden niet afzonderlijk te koop aangeboden.',
      items: [
        {
          title: 'AMARA Lounis',
          subline: 'Zelfstandig appartement',
          copy: 'Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.'
        },
        {
          title: 'AMARA Zaid',
          subline: 'Zelfstandig appartement',
          copy: 'Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.'
        },
        {
          title: 'AMARA Maha',
          subline: 'Zelfstandig appartement',
          copy: 'Een van de drie zelfstandige appartementen binnen de gevestigde exploitatie.'
        },
        {
          title: 'AMARA Farah',
          subline: 'Premium tweepersoonskamer',
          copy: 'De vierde gastenunit binnen de huidige boutique-accommodatieopzet.'
        }
      ]
    },
    useCases: {
      kicker: 'Perspectieven voor kopers',
      title: 'Lifestylepand en gevestigde exploitatie',
      intro:
        'Het gebouw kan relevant zijn voor kopers die privégebruik, een door de eigenaar beheerde logiesexploitatie of een zorgvuldig beoordeelde combinatie van beide overwegen.',
      items: [
        {
          title: 'Privéwoning',
          copy: 'Het complete pand kan worden overwogen voor gebruik als privéwoning, onder voorbehoud van de beoordeling door de koper en alle toepasselijke vereisten.'
        },
        {
          title: 'Door de eigenaar beheerde accommodatie',
          copy: 'De gevestigde exploitatie met vier units biedt een bestaande basis voor een koper die een boutique-accommodatie zelf wil beheren.'
        },
        {
          title: 'Hybride privé- en inkomstengebruik',
          copy: 'Een combinatie van privébewoning en inkomsten uit logies kan worden overwogen na juridische, fiscale, vergunnings- en operationele beoordeling.'
        }
      ],
      requirements:
        'Er worden geen toezeggingen of garanties gedaan over toekomstig gebruik, voortzetting of overdracht van vergunningen en goedkeuringen, of commerciële prestaties. Iedere koper moet zelf de vereisten voor het beoogde gebruik bevestigen.'
    },
    enquiry: {
      kicker: 'Besloten kopersproces',
      title: 'Vertrouwelijke informatie en kopersaanvraag',
      lead:
        'Gedetailleerde informatie over het pand en de exploitatie is voorbehouden aan gekwalificeerde aspirant-kopers en wordt via een vertrouwelijk proces gedeeld.',
      confidentialTitle: 'Informatie binnen het vertrouwelijke proces',
      confidentialItems: [
        'Vraagprijs',
        'Eigendomsdocumentatie',
        'Plattegronden en maatvoering',
        'Documentatie van de herbouw',
        'Exploitatiehistorie',
        'Informatie over opbrengsten en kosten',
        'Inventarisinformatie',
        'Relevante nalevingsdocumentatie',
        'Structuur van transactie en overdracht'
      ],
      qualificationTitle: 'Eerste kopersaanvraag',
      qualificationItems: [
        'Volledige naam',
        'Contactgegevens van voorkeur',
        'Particuliere koper, onderneming of vertegenwoordiger',
        'Beoogde aankooptermijn',
        'Eerste vragen'
      ],
      legalNotice:
        'De inhoud wordt uitsluitend als algemene informatie verstrekt en vormt geen bindend aanbod of beleggingsadvies. Toekomstige prestaties worden niet gegarandeerd; alle gegevens zijn onderworpen aan verificatie en onafhankelijk due-diligenceonderzoek. Iedere verkoop is onderworpen aan een overeenkomst, juridische beoordeling, fiscale beoordeling en definitieve overeenstemming.',
      viewingNotice: 'Bezichtigingen zijn uitsluitend op afspraak mogelijk.',
      ctaLabel: 'Vertrouwelijke objectinformatie aanvragen',
      ctaSupport:
        'Vraag de vertrouwelijke objectinformatie aan voor meer informatie over de verkoop, de documentatie en de vervolgstappen.'
    }
  },
  sv: {
    navigation: {
      brandName: 'AMARA'
    },
    hero: {
      kicker: 'Privat försäljning · Frigilianas historiska stadskärna',
      title: 'Historisk fastighet i boutiquestil till salu i Frigiliana',
      lead:
        'En historisk fastighet som har byggts om i grunden, direkt tillgänglig med bil, med tre terrasser, fri utsikt över landskapet och en etablerad logiverksamhet med fyra enheter.',
      saleScope:
        'Casa AMARA erbjuds endast som en komplett friköpt fastighet. Lägenheterna och rummet säljs inte separat.',
      price: 'Pris på begäran.',
      imageAlt:
        'Terrass på Casa AMARA med utsikt över landskapet och medelhavsmiljön nära Frigiliana'
    },
    snapshot: {
      kicker: 'Fastighetsöversikt',
      title: 'Casa AMARA i korthet',
      intro:
        'En tydlig och faktabaserad översikt över hela fastigheten, dess nuvarande utformning och den planerade försäljningsstrukturen.',
      facts: [
        { label: 'Läge', value: 'Frigilianas historiska stadskärna, Málaga, Andalusien' },
        { label: 'Fastighetstyp', value: 'En komplett friköpt fastighet' },
        { label: 'Utformning', value: '3 fristående lägenheter + 1 premium dubbelrum' },
        { label: 'Invändig yta', value: 'Cirka 170 m²' },
        { label: 'Terrasser och utomhusyta', value: 'Cirka 130 m² fördelat på tre användbara terrasser' },
        { label: 'Tillgänglighet', value: 'Direkt tillgänglig med bil i den historiska stadskärnan' },
        { label: 'Utsikt', value: 'Fri utsikt över landskapet och havsutsikt åt sidan' },
        { label: 'Ombyggnad', value: 'Omfattande ombyggnad och renovering 2020–2022; färdigställd 2022' },
        { label: 'Nuvarande användning', value: 'Boutiqueboende för turister i aktiv drift' },
        { label: 'Försäljningsstruktur', value: 'Endast hela byggnaden' },
        { label: 'Separat tillgänglighet', value: 'Ingen separat försäljning av lägenheter eller rum' },
        { label: 'Pris', value: 'På begäran' }
      ]
    },
    position: {
      kicker: 'Läge och tillgänglighet',
      title: 'Ett ovanligt läge i Frigiliana',
      paragraphs: [
        'Casa AMARA har ett lugnt läge i Frigilianas historiska stadskärna och är samtidigt direkt tillgänglig med bil. Jämförbara kombinationer av historisk miljö, bilaccess, generösa utomhusytor och fri utsikt är av naturliga skäl begränsade.',
        'Cirka 170 m² invändig yta och 130 m² terrasser och utomhusytor ger totalt omkring 300 m² kombinerad användningsyta. De tre terrasserna möjliggör olika former av utomhusliv och användning av ett utomhuskök, med fri utsikt över landskapet och havsutsikt åt sidan.'
      ],
      imageAlt:
        'Utomhuskök och terrass på Casa AMARA med fri utsikt över landskapet nära Frigiliana',
      details: [
        { title: 'Historisk miljö', copy: 'Fastigheten är en del av den historiska bebyggelsen i Frigilianas gamla stad.' },
        { title: 'Praktisk tillgänglighet', copy: 'Fastigheten kan nås direkt med bil.' },
        { title: 'Utomhusliv', copy: 'Tre användbara terrasser skapar separata utomhusmiljöer.' }
      ]
    },
    units: {
      kicker: 'Nuvarande utformning',
      title: 'En fastighet, fyra boendeenheter',
      intro:
        'Casa AMARA drivs i dag som ett boutiqueboende för turister, med fyra tydligt avgränsade gästenheter inom en och samma kompletta fastighet.',
      saleNotice:
        'Enheterna presenteras för att förklara den nuvarande verksamhetsstrukturen. De erbjuds inte till separat försäljning.',
      items: [
        {
          title: 'AMARA Lounis',
          subline: 'Fristående lägenhet',
          copy: 'En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.'
        },
        {
          title: 'AMARA Zaid',
          subline: 'Fristående lägenhet',
          copy: 'En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.'
        },
        {
          title: 'AMARA Maha',
          subline: 'Fristående lägenhet',
          copy: 'En av fastighetens tre fristående lägenheter inom den etablerade verksamheten.'
        },
        {
          title: 'AMARA Farah',
          subline: 'Premium dubbelrum',
          copy: 'Den fjärde gästenheten i den nuvarande boutiqueinriktade boendestrukturen.'
        }
      ]
    },
    useCases: {
      kicker: 'Köparperspektiv',
      title: 'Livsstilsfastighet och etablerad verksamhet',
      intro:
        'Byggnaden kan vara relevant för köpare som överväger privat användning, ägardriven logiverksamhet eller en noggrant bedömd kombination av båda.',
      items: [
        {
          title: 'Privatbostad',
          copy: 'Hela fastigheten kan övervägas som privatbostad, med förbehåll för köparens egen bedömning och samtliga tillämpliga krav.'
        },
        {
          title: 'Ägardriven logiverksamhet',
          copy: 'Den etablerade verksamheten med fyra enheter ger en befintlig grund för en köpare som överväger att själv driva ett boutiqueboende.'
        },
        {
          title: 'Kombinerad privat- och intäktsanvändning',
          copy: 'En kombination av eget boende och intäktsgenererande logi kan övervägas efter juridisk, skattemässig, tillståndsmässig och operativ granskning.'
        }
      ],
      requirements:
        'Ingen framtida användning, fortsatt giltighet eller överföring av licenser och godkännanden, eller kommersiell utveckling utfästs eller garanteras. Varje köpare måste själv bekräfta kraven för den avsedda användningen.'
    },
    enquiry: {
      kicker: 'Privat köparprocess',
      title: 'Konfidentiell information och köparförfrågan',
      lead:
        'Detaljerad information om fastigheten och verksamheten är förbehållen kvalificerade potentiella köpare och delas genom en konfidentiell process.',
      confidentialTitle: 'Information i den konfidentiella processen',
      confidentialItems: [
        'Begärt försäljningspris',
        'Ägardokumentation',
        'Planritningar och mått',
        'Dokumentation om ombyggnaden',
        'Verksamhetshistorik',
        'Information om intäkter och kostnader',
        'Inventarieinformation',
        'Relevant dokumentation om regelefterlevnad',
        'Struktur för transaktion och överlämning'
      ],
      qualificationTitle: 'Inledande köparförfrågan',
      qualificationItems: [
        'Fullständigt namn',
        'Föredragna kontaktuppgifter',
        'Privat köpare, företag eller representant',
        'Planerad tidsram för köpet',
        'Inledande frågor'
      ],
      legalNotice:
        'Innehållet tillhandahålls endast som allmän information och utgör varken ett bindande erbjudande eller en investeringsrekommendation. Framtida resultat garanteras inte; samtliga uppgifter måste verifieras och granskas genom en oberoende due diligence. Varje försäljning är föremål för avtal, juridisk granskning, skattegranskning och slutlig överenskommelse.',
      viewingNotice: 'Visningar sker efter överenskommelse.',
      ctaLabel: 'Begär konfidentiell fastighetsinformation',
      ctaSupport:
        'Begär den konfidentiella fastighetsinformationen för mer information om försäljningen, dokumentationen och nästa steg.'
    }
  }
} satisfies Record<AmaraLanguage, PropertySaleLocalizedContent>;
