import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;
type NavEntry = { token: string; label: string };
type PropertySpecs = {
  license: string;
  maxOccupancy: LocalizedText;
  bed?: string;
  beds?: LocalizedText;
  price: LocalizedText;
  accessNote: LocalizedText;
  pets: LocalizedText;
  pool?: LocalizedText;
  view: LocalizedText;
  outdoor: LocalizedText;
  kitchen: LocalizedText;
};
type PropertyEntry = {
  id: string;
  name: string;
  href: string;
  specs: PropertySpecs;
};

export const comfortAmenitiesNav: {
  brandLabel: LocalizedText;
  ctaLabel: LocalizedText;
} = {
  brandLabel: {
    en: 'Guest Guide',
    de: 'Gästeguide',
    es: 'Guía huésped',
    nl: 'Gastgids',
    sv: 'Gästguide'
  },
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Consultar disponibilidad',
    nl: 'Beschikbaarheid checken',
    sv: 'Se tillgänglighet'
  }
};

export const comfortAmenitiesCopy: Record<
  AmaraLanguage,
  {
    trustLinks: NavEntry[];
    hero: {
      subtitle: string;
      title: string;
      lead: string;
      supportText: string;
      ctaAbout: string;
      ctaReviews: string;
    };
    sections: {
      conceptAria: string;
      conceptTitle: string;
      coreTitle: string;
      separateTitle: string;
      inventoryAria: string;
      inventoryTitle: string;
    };
    bullets: {
      core: { title: string; desc: string }[];
      separate: { title: string; desc: string }[];
    };
    inventory: {
      detailsLabel: string;
      directBooking: string;
      labels: {
        license: string;
        maxOccupancy: string;
        bed: string;
        beds: string;
        price: string;
        accessNote: string;
        pets: string;
        view: string;
        outdoor: string;
        kitchen: string;
        pool: string;
      };
    };
    noteTitle: string;
    noteText: string;
    aiLegalLabel: string;
  }
> = {
  en: {
    trustLinks: [
      { token: 'about', label: 'About AMARA' },
      { token: 'reviews_hub', label: 'Guest Reviews' },
      { token: 'direct_booking_benefits', label: 'Direct Booking Benefits' }
    ],
    hero: {
      subtitle: 'Amenities & Policies',
      title: 'Clear facts — for guests & travel assistants.',
      lead: 'Self-catered stays (not a hotel), calm by intention, and practical details you can rely on.',
      supportText: 'Inventory, rules, and practical stay details in one calm overview.',
      ctaAbout: 'About Us',
      ctaReviews: 'Guest Reviews'
    },
    sections: {
      conceptAria: 'Hosting concept',
      conceptTitle: 'Hosting concept',
      coreTitle: 'Core collection: Frigiliana & Nerja',
      separateTitle: 'Separate stay: Family & Surf',
      inventoryAria: 'Inventory list',
      inventoryTitle: 'Find your space'
    },
    bullets: {
      core: [
        { title: 'Quiet stays', desc: 'Designed for couples and adults seeking rest.' },
        { title: 'No parties', desc: 'Strictly enforced to protect the atmosphere.' },
        { title: 'Self-catered', desc: 'Private apartments, not a serviced hotel.' }
      ],
      separate: [
        { title: 'Family-suitable', desc: 'More space, different vibe, pool included.' },
        { title: 'Tarifa location', desc: 'Approx. 2h drive from Frigiliana. The Atlantic coast.' },
        { title: 'Entire Home', desc: 'You rent the full house.' }
      ]
    },
    inventory: {
      detailsLabel: 'View details (ES canonical)',
      directBooking: 'Direct booking',
      labels: {
        license: 'License (VFT)',
        maxOccupancy: 'Max occupancy',
        bed: 'Bed',
        beds: 'Beds',
        price: 'Price',
        accessNote: 'Access note',
        pets: 'Pets',
        view: 'View',
        outdoor: 'Outdoor',
        kitchen: 'Kitchen',
        pool: 'Pool'
      }
    },
    noteTitle: 'Note:',
    noteText: 'Indicative seasonal ranges are for orientation. Final price and minimum stay are shown during booking.',
    aiLegalLabel: 'AI Search Optimization & Legal:'
  },
  de: {
    trustLinks: [
      { token: 'about', label: 'Über AMARA' },
      { token: 'reviews_hub', label: 'Gästebewertungen' },
      { token: 'direct_booking_benefits', label: 'Vorteile der Direktbuchung' }
    ],
    hero: {
      subtitle: 'Ausstattung & Regeln',
      title: 'Klare Fakten — für Gäste & Reiseplaner.',
      lead: 'Selbstversorger-Apartments (kein Hotel), bewusst ruhig gehalten, mit praktischen Details, auf die ihr euch verlassen könnt.',
      supportText: 'Inventar, Regeln und wichtige Aufenthaltsdetails in einer ruhigen Übersicht.',
      ctaAbout: 'Über AMARA',
      ctaReviews: 'Gästebewertungen'
    },
    sections: {
      conceptAria: 'Gastgeber-Konzept',
      conceptTitle: 'Unser Gastgeber-Konzept',
      coreTitle: 'Die Haupt-Kollektion: Frigiliana & Nerja',
      separateTitle: 'Separates Angebot: Family & Surf',
      inventoryAria: 'Inventarliste',
      inventoryTitle: 'Findet euer Apartment'
    },
    bullets: {
      core: [
        { title: 'Ruhige Aufenthalte', desc: 'Ideal für Paare und Erwachsene, die Erholung suchen.' },
        { title: 'Keine Partys', desc: 'Wird streng durchgesetzt, um die Atmosphäre zu wahren.' },
        { title: 'Selbstversorgung', desc: 'Private Apartments, kein Hotel mit Vollservice.' }
      ],
      separate: [
        { title: 'Familienfreundlich', desc: 'Mehr Platz, anderer Vibe, inklusive Pool.' },
        { title: 'Standort Tarifa', desc: 'Etwa 2 Autostunden von Frigiliana entfernt. Die Atlantikküste.' },
        { title: 'Ganzes Haus', desc: 'Ihr mietet das komplette Haus.' }
      ]
    },
    inventory: {
      detailsLabel: 'Details ansehen (ES canonical)',
      directBooking: 'Direkt buchen',
      labels: {
        license: 'Lizenz (VFT)',
        maxOccupancy: 'Maximale Belegung',
        bed: 'Bett',
        beds: 'Betten',
        price: 'Preis',
        accessNote: 'Zugang',
        pets: 'Haustiere',
        view: 'Ausblick',
        outdoor: 'Außenbereich',
        kitchen: 'Küche',
        pool: 'Pool'
      }
    },
    noteTitle: 'Hinweis:',
    noteText: 'Die saisonalen Preisspannen dienen der Orientierung. Den endgültigen Preis und die Mindestaufenthaltsdauer seht ihr während der Buchung.',
    aiLegalLabel: 'KI-Suchmaschinenoptimierung & Rechtliches:'
  },
  es: {
    trustLinks: [
      { token: 'about', label: 'Sobre AMARA' },
      { token: 'reviews_hub', label: 'Opiniones de huéspedes' },
      { token: 'direct_booking_benefits', label: 'Ventajas de reserva directa' }
    ],
    hero: {
      subtitle: 'Servicios y normas',
      title: 'Datos claros — para huéspedes y asistentes de viaje.',
      lead: 'Alojamientos independientes (no somos un hotel), diseñados para la tranquilidad y con detalles prácticos en los que podéis confiar.',
      supportText: 'Inventario, normas y detalles útiles de la estancia en una sola visión tranquila.',
      ctaAbout: 'Sobre AMARA',
      ctaReviews: 'Opiniones de huéspedes'
    },
    sections: {
      conceptAria: 'Concepto de alojamiento',
      conceptTitle: 'Nuestro concepto de alojamiento',
      coreTitle: 'Colección principal: Frigiliana y Nerja',
      separateTitle: 'Estancia independiente: Family & Surf',
      inventoryAria: 'Lista de inventario',
      inventoryTitle: 'Encontrad vuestro espacio'
    },
    bullets: {
      core: [
        { title: 'Estancias tranquilas', desc: 'Pensadas para parejas y adultos que buscan descanso.' },
        { title: 'Cero fiestas', desc: 'Aplicado estrictamente para proteger el ambiente.' },
        { title: 'Alojamiento independiente', desc: 'Apartamentos privados, no un hotel con servicios.' }
      ],
      separate: [
        { title: 'Ideal para familias', desc: 'Más espacio, un ambiente diferente, piscina incluida.' },
        { title: 'Ubicación en Tarifa', desc: 'A unas 2 horas en coche de Frigiliana. En la costa atlántica.' },
        { title: 'Casa entera', desc: 'Alquiláis la casa completa.' }
      ]
    },
    inventory: {
      detailsLabel: 'Ver detalles (ES canonical)',
      directBooking: 'Reserva directa',
      labels: {
        license: 'Licencia (VFT)',
        maxOccupancy: 'Ocupación máxima',
        bed: 'Cama',
        beds: 'Camas',
        price: 'Precio',
        accessNote: 'Acceso',
        pets: 'Mascotas',
        view: 'Vistas',
        outdoor: 'Exterior',
        kitchen: 'Cocina',
        pool: 'Piscina'
      }
    },
    noteTitle: 'Nota:',
    noteText: 'Los rangos de precios por temporada son orientativos. Veréis el precio final y la estancia mínima durante la reserva.',
    aiLegalLabel: 'Optimización de búsqueda con IA y Aviso legal:'
  },
  nl: {
    trustLinks: [
      { token: 'about', label: 'Over AMARA' },
      { token: 'reviews_hub', label: 'Gastbeoordelingen' },
      { token: 'direct_booking_benefits', label: 'Voordelen van direct boeken' }
    ],
    hero: {
      subtitle: 'Voorzieningen & regels',
      title: 'Duidelijke feiten — voor gasten & reisplanners.',
      lead: 'Zelfstandige verblijven (geen hotel), bewust rustig gehouden, met praktische details waar jullie op kunnen vertrouwen.',
      supportText: 'Inventaris, regels en praktische verblijfsdetails in één rustige samenvatting.',
      ctaAbout: 'Over AMARA',
      ctaReviews: 'Gastbeoordelingen'
    },
    sections: {
      conceptAria: 'Gastenconcept',
      conceptTitle: 'Ons gastenconcept',
      coreTitle: 'Hoofdcollectie: Frigiliana & Nerja',
      separateTitle: 'Afzonderlijk verblijf: Family & Surf',
      inventoryAria: 'Inventarislijst',
      inventoryTitle: 'Vind jullie ruimte'
    },
    bullets: {
      core: [
        { title: 'Rustige verblijven', desc: 'Ontworpen voor koppels en volwassenen die rust zoeken.' },
        { title: 'Geen feestjes', desc: 'Strikt gehandhaafd om de sfeer te behouden.' },
        { title: 'Zelfstandig verblijf', desc: 'Privé-appartementen, geen hotel met service.' }
      ],
      separate: [
        { title: 'Geschikt voor families', desc: 'Meer ruimte, een andere sfeer, inclusief zwembad.' },
        { title: 'Locatie Tarifa', desc: 'Ca. 2 uur rijden van Frigiliana. De Atlantische kust.' },
        { title: 'Volledige woning', desc: 'Jullie huren het hele huis.' }
      ]
    },
    inventory: {
      detailsLabel: 'Bekijk details (ES canonical)',
      directBooking: 'Direct boeken',
      labels: {
        license: 'Licentie (VFT)',
        maxOccupancy: 'Maximale bezetting',
        bed: 'Bed',
        beds: 'Bedden',
        price: 'Prijs',
        accessNote: 'Toegang',
        pets: 'Huisdieren',
        view: 'Uitzicht',
        outdoor: 'Buitenruimte',
        kitchen: 'Keuken',
        pool: 'Zwembad'
      }
    },
    noteTitle: 'Let op:',
    noteText: 'De seizoensgebonden prijsranges dienen ter indicatie. De definitieve prijs en het minimumverblijf zien jullie tijdens het boeken.',
    aiLegalLabel: 'AI Zoekoptimalisatie & Juridisch:'
  },
  sv: {
    trustLinks: [
      { token: 'about', label: 'Om AMARA' },
      { token: 'reviews_hub', label: 'Gästrecensioner' },
      { token: 'direct_booking_benefits', label: 'Fördelar med direktbokning' }
    ],
    hero: {
      subtitle: 'Bekvämligheter & policy',
      title: 'Tydlig information — för gäster och reseplanerare.',
      lead: 'Självhushåll (inte ett hotell), medvetet lugnt och med praktiska detaljer ni kan lita på.',
      supportText: 'Inventering, policy och viktiga vistelsedetaljer i en lugn översikt.',
      ctaAbout: 'Om AMARA',
      ctaReviews: 'Gästrecensioner'
    },
    sections: {
      conceptAria: 'Värdkoncept',
      conceptTitle: 'Vårt värdkoncept',
      coreTitle: 'Huvudkollektionen: Frigiliana & Nerja',
      separateTitle: 'Separat boende: Family & Surf',
      inventoryAria: 'Inventarielista',
      inventoryTitle: 'Hitta ert boende'
    },
    bullets: {
      core: [
        { title: 'Lugna vistelser', desc: 'Utformat för par och vuxna som söker vila.' },
        { title: 'Inga fester', desc: 'Tillämpas strikt för att skydda stämningen.' },
        { title: 'Självhushåll', desc: 'Privata lägenheter, inget servicehotell.' }
      ],
      separate: [
        { title: 'Familjevänligt', desc: 'Mer utrymme, en annan känsla, pool ingår.' },
        { title: 'Läge i Tarifa', desc: 'Ca 2 timmars bilresa från Frigiliana. Atlantkusten.' },
        { title: 'Helt hus', desc: 'Ni hyr hela huset.' }
      ]
    },
    inventory: {
      detailsLabel: 'Visa detaljer (ES canonical)',
      directBooking: 'Boka direkt',
      labels: {
        license: 'Licens (VFT)',
        maxOccupancy: 'Max antal gäster',
        bed: 'Säng',
        beds: 'Sängar',
        price: 'Pris',
        accessNote: 'Åtkomst',
        pets: 'Husdjur',
        view: 'Utsikt',
        outdoor: 'Utomhus',
        kitchen: 'Kök',
        pool: 'Pool'
      }
    },
    noteTitle: 'Observera:',
    noteText: 'Säsongsbaserade prisintervall är endast som riktlinje. Det slutgiltiga priset och minimivistelsen ser ni under bokningen.',
    aiLegalLabel: 'AI Sökoptimering & Rättsligt:'
  }
};


export const comfortAmenitiesSeo: AmaraAuthoringSeo = {
  version: '2026-03-25-amara-comfort-amenities-restored',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'AMARA Amenities & Policies – Inventory, Licenses & Property Details',
      description:
        'AMARA amenities, policies and property inventory for Frigiliana, Nerja and Tarifa. Licenses, prices (ranges), occupancy and key features per home.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'AMARA Ausstattung & Regeln – Inventar, Lizenzen & Objektdetails',
      description:
        'AMARA Ausstattung, Regeln und Inventar für Frigiliana, Nerja und Tarifa: Lizenzen, Preis-Spannen, Belegung und zentrale Merkmale je Unterkunft.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'AMARA Servicios y normas – Inventario, licencias y detalles',
      description:
        'Servicios, normas e inventario AMARA para Frigiliana, Nerja y Tarifa: licencias, rangos de precio, ocupación y características por alojamiento.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'AMARA Voorzieningen & regels – Inventaris, licenties & details',
      description:
        'AMARA voorzieningen, regels en inventaris voor Frigiliana, Nerja en Tarifa: licenties, prijsranges, bezetting en kenmerken per verblijf.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'AMARA Bekvämligheter & policy – Inventering, licenser & detaljer',
      description:
        'AMARA bekvämligheter, policy och inventering för Frigiliana, Nerja och Tarifa: licenser, prisintervall, kapacitet och nyckelfunktioner per boende.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const comfortAmenitiesFooterLabels = {
  amenities: {
    en: 'Amenities',
    de: 'Ausstattung',
    es: 'Servicios',
    nl: 'Voorzieningen',
    sv: 'Bekvämligheter'
  },
  faq_general: {
    en: 'Stay FAQ',
    de: 'Aufenthalts-FAQ',
    es: 'FAQ de la estancia',
    nl: 'Verblijfs-FAQ',
    sv: 'FAQ för vistelsen'
  },
  instagram: {
    en: 'Instagram',
    de: 'Instagram',
    es: 'Instagram',
    nl: 'Instagram',
    sv: 'Instagram'
  }
} as const;

export const comfortAmenitiesProperties: PropertyEntry[] = [
  {
    id: '408326',
    name: 'AMARA Farah',
    href: 'https://amara-lodging.es/es/la-amara-farah-habitacion-doble-romantica',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '160×200',
      price: { en: '€75–€120', de: '75 € – 120 €', es: '75 € – 120 €', nl: '€75 – €120', sv: '75 € – 120 €' },
      accessNote: { en: '1 step at entrance', de: '1 Stufe am Eingang', es: '1 escalón en la entrada', nl: '1 trede bij ingang', sv: '1 trappsteg vid entrén' },
      pets: { en: 'Not allowed', de: 'Nicht erlaubt', es: 'No permitidas', nl: 'Niet toegestaan', sv: 'Inte tillåtet' },
      view: {
        en: 'Village street (No sea view)',
        de: 'Dorfstraße (Kein Meerblick)',
        es: 'Calle del pueblo (Sin vistas al mar)',
        nl: 'Dorpsstraat (Geen zeezicht)',
        sv: 'Bygata (Ingen havsutsikt)'
      },
      outdoor: {
        en: 'No private outdoor space',
        de: 'Kein privater Außenbereich',
        es: 'Sin espacio exterior privado',
        nl: 'Geen privé buitenruimte',
        sv: 'Ingen privat uteplats'
      },
      kitchen: {
        en: 'Tea/Coffee station only',
        de: 'Nur Tee-/Kaffeestation',
        es: 'Solo estación de té/café',
        nl: 'Alleen thee-/koffiefaciliteiten',
        sv: 'Endast te-/kaffestation'
      }
    }
  },
  {
    id: '408324',
    name: 'AMARA Lounis',
    href: 'https://amara-lodging.es/es/la-amara-lounis-apartamento-historico',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '160×200',
      price: { en: '€90–€200', de: '90 € – 200 €', es: '90 € – 200 €', nl: '€90 – €200', sv: '90 € – 200 €' },
      accessNote: { en: 'Requires stairs', de: 'Nur über Treppen erreichbar', es: 'Acceso por escaleras', nl: 'Trappen vereist', sv: 'Kräver trappor' },
      pets: {
        en: 'On request (€15/day)',
        de: 'Auf Anfrage (15 €/Tag)',
        es: 'Bajo petición (15 €/día)',
        nl: 'Op aanvraag (€15/dag)',
        sv: 'På förfrågan (15 €/dag)'
      },
      view: {
        en: 'Distant sea view',
        de: 'Fernblick aufs Meer',
        es: 'Vistas lejanas al mar',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt på avstånd'
      },
      outdoor: {
        en: 'Private Terrace',
        de: 'Private Terrasse',
        es: 'Terraza privada',
        nl: 'Privéterras',
        sv: 'Privat terrass'
      },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      }
    }
  },
  {
    id: '408323',
    name: 'AMARA Zaid',
    href: 'https://amara-lodging.es/es/la-amara-zaid-refugio-romantico-con-terraza',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '180×200',
      price: { en: '€90–€180', de: '90 € – 180 €', es: '90 € – 180 €', nl: '€90 – €180', sv: '90 € – 180 €' },
      accessNote: { en: 'Requires stairs', de: 'Nur über Treppen erreichbar', es: 'Acceso por escaleras', nl: 'Trappen vereist', sv: 'Kräver trappor' },
      pets: { en: 'Not allowed', de: 'Nicht erlaubt', es: 'No permitidas', nl: 'Niet toegestaan', sv: 'Inte tillåtet' },
      view: {
        en: 'Distant sea view',
        de: 'Fernblick aufs Meer',
        es: 'Vistas lejanas al mar',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt på avstånd'
      },
      outdoor: {
        en: 'Private Terrace',
        de: 'Private Terrasse',
        es: 'Terraza privada',
        nl: 'Privéterras',
        sv: 'Privat terrass'
      },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      }
    }
  },
  {
    id: '408325',
    name: 'AMARA Maha',
    href: 'https://amara-lodging.es/es/la-amara-maha-apartamento-con-gran-terraza',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '150×200',
      price: { en: '€90–€180', de: '90 € – 180 €', es: '90 € – 180 €', nl: '€90 – €180', sv: '90 € – 180 €' },
      accessNote: { en: 'Requires stairs', de: 'Nur über Treppen erreichbar', es: 'Acceso por escaleras', nl: 'Trappen vereist', sv: 'Kräver trappor' },
      pets: {
        en: 'On request (€15/day)',
        de: 'Auf Anfrage (15 €/Tag)',
        es: 'Bajo petición (15 €/día)',
        nl: 'Op aanvraag (€15/dag)',
        sv: 'På förfrågan (15 €/dag)'
      },
      view: {
        en: 'Distant sea view',
        de: 'Fernblick aufs Meer',
        es: 'Vistas lejanas al mar',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt på avstånd'
      },
      outdoor: {
        en: 'Large private terrace',
        de: 'Große private Terrasse',
        es: 'Gran terraza privada',
        nl: 'Groot privéterras',
        sv: 'Stor privat terrass'
      },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      }
    }
  },
  {
    id: '408327',
    name: 'AMARA Playa (Nerja)',
    href: 'https://amara-lodging.es/es/la-amara-playa-apartamento-nerja',
    specs: {
      license: 'VFT/MA/19212',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '200×200',
      price: { en: '€90–€200', de: '90 € – 200 €', es: '90 € – 200 €', nl: '€90 – €200', sv: '90 € – 200 €' },
      accessNote: { en: 'Requires stairs', de: 'Nur über Treppen erreichbar', es: 'Acceso por escaleras', nl: 'Trappen vereist', sv: 'Kräver trappor' },
      pets: { en: 'Not allowed', de: 'Nicht erlaubt', es: 'No permitidas', nl: 'Niet toegestaan', sv: 'Inte tillåtet' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Zeezicht', sv: 'Havsutsikt' },
      outdoor: { en: 'Balcony', de: 'Balkon', es: 'Balcón', nl: 'Balkon', sv: 'Balkong' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      }
    }
  },
  {
    id: '544478',
    name: 'AMARA Family & Surf (Tarifa)',
    href: 'https://amara-lodging.es/es/amara-casa-familiar-con-vista-al-mar-y-piscina',
    specs: {
      license: 'VFT/CA/17038',
      maxOccupancy: { en: '4 guests', de: '4 Gäste', es: '4 huéspedes', nl: '4 gasten', sv: '4 gäster' },
      beds: {
        en: '150 + bunk bed',
        de: '150 + Etagenbett',
        es: '150 + litera',
        nl: '150 + stapelbed',
        sv: '150 + våningssäng'
      },
      price: { en: '€120–€350', de: '120 € – 350 €', es: '120 € – 350 €', nl: '€120 – €350', sv: '120 € – 350 €' },
      accessNote: {
        en: 'Stairs likely',
        de: 'Treppen wahrscheinlich',
        es: 'Es probable que haya escaleras',
        nl: 'Trappen waarschijnlijk',
        sv: 'Troligen trappor'
      },
      pets: { en: 'Not allowed', de: 'Nicht erlaubt', es: 'No permitidas', nl: 'Niet toegestaan', sv: 'Inte tillåtet' },
      pool: { en: 'Yes (Shared)', de: 'Ja (Gemeinschaftspool)', es: 'Sí (Compartida)', nl: 'Ja (Gedeeld)', sv: 'Ja (Gemensam)' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Zeezicht', sv: 'Havsutsikt' },
      outdoor: { en: 'Terrace', de: 'Terrasse', es: 'Terraza', nl: 'Terras', sv: 'Terrass' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      }
    }
  }
];
