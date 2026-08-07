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
  parking?: LocalizedText;
  pets: LocalizedText;
  pool?: LocalizedText;
  view: LocalizedText;
  outdoor?: LocalizedText;
  sunLoungers?: LocalizedText;
  hammock?: LocalizedText;
  outdoorShower?: LocalizedText;
  kitchen: LocalizedText;
  washingMachine?: LocalizedText;
  pelletStove?: LocalizedText;
  fireplace?: LocalizedText;
  shower?: LocalizedText;
  airCon: LocalizedText;
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
      inventoryAria: string;
      inventoryTitle: string;
    };
    inventory: {
      directBooking: string;
      labels: {
        license: string;
        maxOccupancy: string;
        bed: string;
        beds: string;
        price: string;
        accessNote: string;
        parking: string;
        pets: string;
        view: string;
        outdoor: string;
        sunLoungers: string;
        hammock: string;
        outdoorShower: string;
        kitchen: string;
        washingMachine: string;
        pelletStove: string;
        fireplace: string;
        shower: string;
        pool: string;
        airCon: string;
      };
    };
    noteTitle: string;
    noteText: string;
  }
> = {
  en: {
    trustLinks: [
      { token: 'about', label: 'About AMARA' },
      { token: 'reviews_hub', label: 'Guest Reviews' },
      { token: 'direct_booking_benefits', label: 'Direct Booking Benefits' }
    ],
    hero: {
      subtitle: 'Comfort & Amenities',
      title: 'Everything for a comfortable stay.',
      lead: 'Full kitchens, private terraces, quiet locations and the small details most guests never have to think about — because we already have.',
      supportText: 'Inventory, rules, and practical stay details in one calm overview.',
      ctaAbout: 'About Us',
      ctaReviews: 'Guest Reviews'
    },
    sections: {
      inventoryAria: 'Inventory list',
      inventoryTitle: 'Find your space'
    },
    inventory: {
      directBooking: 'Direct booking',
      labels: {
        license: 'License (VFT)',
        maxOccupancy: 'Max occupancy',
        bed: 'Bed',
        beds: 'Beds',
        price: 'Price',
        accessNote: 'Access note',
        parking: 'Parking',
        pets: 'Pets',
        view: 'View',
        outdoor: 'Outdoor',
        sunLoungers: 'Sun Loungers',
        hammock: 'Hammock',
        outdoorShower: 'Outdoor Shower',
        kitchen: 'Kitchen',
        washingMachine: 'Washing Machine',
        pelletStove: 'Pellet Stove',
        fireplace: 'Fireplace',
        shower: 'Shower',
        pool: 'Pool',
        airCon: 'Air Con'
      }
    },
    noteTitle: 'Note:',
    noteText: 'Indicative seasonal ranges are for orientation. Final price and minimum stay are shown during booking.'
  },
  de: {
    trustLinks: [
      { token: 'about', label: 'Über AMARA' },
      { token: 'reviews_hub', label: 'Gästebewertungen' },
      { token: 'direct_booking_benefits', label: 'Vorteile der Direktbuchung' }
    ],
    hero: {
      subtitle: 'Komfort & Ausstattung',
      title: 'Alles für einen komfortablen Aufenthalt.',
      lead: 'Voll ausgestattete Küchen, private Terrassen, ruhige Lagen und die kleinen Details, über die ihr euch keine Gedanken machen müsst — weil wir es längst getan haben.',
      supportText: 'Inventar, Regeln und wichtige Aufenthaltsdetails in einer ruhigen Übersicht.',
      ctaAbout: 'Über AMARA',
      ctaReviews: 'Gästebewertungen'
    },
    sections: {
      inventoryAria: 'Inventarliste',
      inventoryTitle: 'Findet euer Apartment'
    },
    inventory: {
      directBooking: 'Direkt buchen',
      labels: {
        license: 'Lizenz (VFT)',
        maxOccupancy: 'Maximale Belegung',
        bed: 'Bett',
        beds: 'Betten',
        price: 'Preis',
        accessNote: 'Zugang',
        parking: 'Parken',
        pets: 'Haustiere',
        view: 'Ausblick',
        outdoor: 'Außenbereich',
        sunLoungers: 'Sonnenliegen',
        hammock: 'Hängematte',
        outdoorShower: 'Außendusche',
        kitchen: 'Küche',
        washingMachine: 'Waschmaschine',
        pelletStove: 'Pelletofen',
        fireplace: 'Kamin',
        shower: 'Dusche',
        pool: 'Pool',
        airCon: 'Klimaanlage'
      }
    },
    noteTitle: 'Hinweis:',
    noteText: 'Die saisonalen Preisspannen dienen der Orientierung. Den endgültigen Preis und die Mindestaufenthaltsdauer seht ihr während der Buchung.'
  },
  es: {
    trustLinks: [
      { token: 'about', label: 'Sobre AMARA' },
      { token: 'reviews_hub', label: 'Opiniones de huéspedes' },
      { token: 'direct_booking_benefits', label: 'Ventajas de reserva directa' }
    ],
    hero: {
      subtitle: 'Confort y servicios',
      title: 'Todo para una estancia cómoda.',
      lead: 'Cocinas completas, terrazas privadas, ubicaciones tranquilas y los pequeños detalles en los que no tenéis que pensar — porque nosotros ya lo hemos hecho.',
      supportText: 'Inventario, normas y detalles útiles de la estancia en una sola visión tranquila.',
      ctaAbout: 'Sobre AMARA',
      ctaReviews: 'Opiniones de huéspedes'
    },
    sections: {
      inventoryAria: 'Lista de inventario',
      inventoryTitle: 'Encontrad vuestro espacio'
    },
    inventory: {
      directBooking: 'Reserva directa',
      labels: {
        license: 'Licencia (VFT)',
        maxOccupancy: 'Ocupación máxima',
        bed: 'Cama',
        beds: 'Camas',
        price: 'Precio',
        accessNote: 'Acceso',
        parking: 'Aparcamiento',
        pets: 'Mascotas',
        view: 'Vistas',
        outdoor: 'Exterior',
        sunLoungers: 'Tumbonas',
        hammock: 'Hamaca',
        outdoorShower: 'Ducha exterior',
        kitchen: 'Cocina',
        washingMachine: 'Lavadora',
        pelletStove: 'Estufa de pellets',
        fireplace: 'Chimenea',
        shower: 'Ducha',
        pool: 'Piscina',
        airCon: 'Aire acondicionado'
      }
    },
    noteTitle: 'Nota:',
    noteText: 'Los rangos de precios por temporada son orientativos. Veréis el precio final y la estancia mínima durante la reserva.'
  },
  nl: {
    trustLinks: [
      { token: 'about', label: 'Over AMARA' },
      { token: 'reviews_hub', label: 'Gastbeoordelingen' },
      { token: 'direct_booking_benefits', label: 'Voordelen van direct boeken' }
    ],
    hero: {
      subtitle: 'Comfort en voorzieningen',
      title: 'Alles voor een comfortabel verblijf.',
      lead: 'Volledig uitgeruste keukens, privéterrassen, rustige locaties en de kleine details waar je niet over hoeft na te denken — omdat wij dat al gedaan hebben.',
      supportText: 'Inventaris, regels en praktische verblijfsdetails in één rustige samenvatting.',
      ctaAbout: 'Over AMARA',
      ctaReviews: 'Gastbeoordelingen'
    },
    sections: {
      inventoryAria: 'Inventarislijst',
      inventoryTitle: 'Vind jullie ruimte'
    },
    inventory: {
      directBooking: 'Direct boeken',
      labels: {
        license: 'Licentie (VFT)',
        maxOccupancy: 'Maximale bezetting',
        bed: 'Bed',
        beds: 'Bedden',
        price: 'Prijs',
        accessNote: 'Toegang',
        parking: 'Parkeren',
        pets: 'Huisdieren',
        view: 'Uitzicht',
        outdoor: 'Buitenruimte',
        sunLoungers: 'Ligbedden',
        hammock: 'Hangmat',
        outdoorShower: 'Buitendouche',
        kitchen: 'Keuken',
        washingMachine: 'Wasmachine',
        pelletStove: 'Pelletkachel',
        fireplace: 'Open haard',
        shower: 'Douche',
        pool: 'Zwembad',
        airCon: 'Airconditioning'
      }
    },
    noteTitle: 'Let op:',
    noteText: 'De seizoensgebonden prijsranges dienen ter indicatie. De definitieve prijs en het minimumverblijf zien jullie tijdens het boeken.'
  },
  sv: {
    trustLinks: [
      { token: 'about', label: 'Om AMARA' },
      { token: 'reviews_hub', label: 'Gästrecensioner' },
      { token: 'direct_booking_benefits', label: 'Fördelar med direktbokning' }
    ],
    hero: {
      subtitle: 'Komfort och bekvämligheter',
      title: 'Allt för en bekväm vistelse.',
      lead: 'Fullt utrustade kök, privata terrasser, lugna lägen och de små detaljer ni aldrig behöver tänka på — för att vi redan har gjort det.',
      supportText: 'Inventering, policy och viktiga vistelsedetaljer i en lugn översikt.',
      ctaAbout: 'Om AMARA',
      ctaReviews: 'Gästrecensioner'
    },
    sections: {
      inventoryAria: 'Inventarielista',
      inventoryTitle: 'Hitta ert boende'
    },
    inventory: {
      directBooking: 'Boka direkt',
      labels: {
        license: 'Licens (VFT)',
        maxOccupancy: 'Max antal gäster',
        bed: 'Säng',
        beds: 'Sängar',
        price: 'Pris',
        accessNote: 'Åtkomst',
        parking: 'Parkering',
        pets: 'Husdjur',
        view: 'Utsikt',
        outdoor: 'Utomhus',
        sunLoungers: 'Solstolar',
        hammock: 'Hängmatta',
        outdoorShower: 'Utomhusdusch',
        kitchen: 'Kök',
        washingMachine: 'Tvättmaskin',
        pelletStove: 'Pelletskamin',
        fireplace: 'Eldstad',
        shower: 'Dusch',
        pool: 'Pool',
        airCon: 'Luftkonditionering'
      }
    },
    noteTitle: 'Observera:',
    noteText: 'Säsongsbaserade prisintervall är endast som riktlinje. Det slutgiltiga priset och minimivistelsen ser ni under bokningen.'
  }
};


export const comfortAmenitiesSeo: AmaraAuthoringSeo = {
  version: '2026-03-25-amara-comfort-amenities-restored',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Comfort & Amenities: Licenses and Details',
      description:
        'AMARA amenities, policies, licenses, price ranges, occupancy, and key apartment details for Frigiliana, Nerja, and Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Komfort & Ausstattung: Lizenzen und Details',
      description:
        'AMARA Ausstattung, Regeln, Lizenzen, Preis-Spannen, Belegung und Details je Unterkunft in Frigiliana, Nerja und Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Confort y servicios: licencias y detalles',
      description:
        'Servicios, normas, licencias, precios orientativos, ocupación y detalles de cada alojamiento AMARA en Frigiliana, Nerja y Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Comfort en voorzieningen: licenties en details',
      description:
        'AMARA voorzieningen, regels, licenties, prijsindicaties, bezetting en verblijfsdetails voor Frigiliana, Nerja en Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Komfort & bekvämligheter: licenser och detaljer',
      description:
        'AMARA bekvämligheter, policy, licenser, prisintervall, kapacitet och boendedetaljer för Frigiliana, Nerja och Tarifa.',
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
    name: 'AMARA Farah, Frigiliana',
    href: '/la-amara-farah',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '160×200',
      price: { en: '€75–€120', de: '75 € – 120 €', es: '75 € – 120 €', nl: '€75 – €120', sv: '75 € – 120 €' },
      accessNote: { en: '1 step at entrance', de: '1 Stufe am Eingang', es: '1 escalón en la entrada', nl: '1 trede bij ingang', sv: '1 trappsteg vid entrén' },
      pets: { en: 'Pet-free', de: 'Haustierfrei', es: 'Sin mascotas', nl: 'Huisdiervrij', sv: 'Husdjursfritt' },
      view: {
        en: 'Village street',
        de: 'Dorfstraße',
        es: 'Calle del pueblo',
        nl: 'Dorpsstraat',
        sv: 'Bygata'
      },
      kitchen: {
        en: 'Tea & coffee station',
        de: 'Tee-/Kaffeestation',
        es: 'Estación de té/café',
        nl: 'Thee-/koffiefaciliteiten',
        sv: 'Te-/kaffestation'
      },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  },
  {
    id: '408324',
    name: 'AMARA Lounis, Frigiliana',
    href: '/la-amara-lounis',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '160×200',
      price: { en: '€90–€200', de: '90 € – 200 €', es: '90 € – 200 €', nl: '€90 – €200', sv: '90 € – 200 €' },
      accessNote: { en: 'Stair access', de: 'Zugang über Treppen', es: 'Acceso por escaleras', nl: 'Toegang via trappen', sv: 'Åtkomst via trappa' },
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
        en: 'Private patio & private terrace',
        de: 'Privater Patio & private Terrasse',
        es: 'Patio privado y terraza privada',
        nl: 'Privépatio en privéterras',
        sv: 'Privat uteplats och privat terrass'
      },
      sunLoungers: { en: '2', de: '2', es: '2', nl: '2', sv: '2' },
      hammock: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      outdoorShower: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Double Shower / Rain Shower', de: 'Doppeldusche / Regendusche', es: 'Ducha doble / Ducha de lluvia', nl: 'Dubbele douche / Regendouche', sv: 'Dubbel dusch / Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  },
  {
    id: '408323',
    name: 'AMARA Zaid, Frigiliana',
    href: '/la-amara-zaid',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '180×200',
      price: { en: '€90–€180', de: '90 € – 180 €', es: '90 € – 180 €', nl: '€90 – €180', sv: '90 € – 180 €' },
      accessNote: { en: 'Stair access', de: 'Zugang über Treppen', es: 'Acceso por escaleras', nl: 'Toegang via trappen', sv: 'Åtkomst via trappa' },
      pets: { en: 'Pet-free', de: 'Haustierfrei', es: 'Sin mascotas', nl: 'Huisdiervrij', sv: 'Husdjursfritt' },
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
      sunLoungers: { en: '2', de: '2', es: '2', nl: '2', sv: '2' },
      hammock: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      outdoorShower: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Double Shower / Rain Shower', de: 'Doppeldusche / Regendusche', es: 'Ducha doble / Ducha de lluvia', nl: 'Dubbele douche / Regendouche', sv: 'Dubbel dusch / Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  },
  {
    id: '408325',
    name: 'AMARA Maha, Frigiliana',
    href: '/la-amara-maha',
    specs: {
      license: 'A/MA/01767',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '150×200',
      price: { en: '€90–€180', de: '90 € – 180 €', es: '90 € – 180 €', nl: '€90 – €180', sv: '90 € – 180 €' },
      accessNote: { en: 'Stair access', de: 'Zugang über Treppen', es: 'Acceso por escaleras', nl: 'Toegang via trappen', sv: 'Åtkomst via trappa' },
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
      sunLoungers: { en: '2', de: '2', es: '2', nl: '2', sv: '2' },
      hammock: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      outdoorShower: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  },
  {
    id: '408327',
    name: 'AMARA Playa, Nerja',
    href: '/la-amara-playa',
    specs: {
      license: 'VFT/MA/19212',
      maxOccupancy: { en: '2 guests', de: '2 Gäste', es: '2 huéspedes', nl: '2 gasten', sv: '2 gäster' },
      bed: '200×200',
      price: { en: '€90–€200', de: '90 € – 200 €', es: '90 € – 200 €', nl: '€90 – €200', sv: '90 € – 200 €' },
      accessNote: { en: 'Stair access', de: 'Zugang über Treppen', es: 'Acceso por escaleras', nl: 'Toegang via trappen', sv: 'Åtkomst via trappa' },
      pets: { en: 'Pet-free', de: 'Haustierfrei', es: 'Sin mascotas', nl: 'Huisdiervrij', sv: 'Husdjursfritt' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Zeezicht', sv: 'Havsutsikt' },
      outdoor: { en: 'Balcony', de: 'Balkon', es: 'Balcón', nl: 'Balkon', sv: 'Balkong' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  },
  {
    id: '544478',
    name: 'AMARA Family & Surf, Tarifa',
    href: '/la-amara-family-and-surf',
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
        en: 'Step-free entrance; internal steps within the apartment',
        de: 'Stufenloser Zugang; Stufen innerhalb des Apartments',
        es: 'Acceso sin escalones; hay escalones dentro del apartamento',
        nl: 'Drempelvrije toegang; traptreden in het appartement',
        sv: 'Stegfri entré; trappsteg inne i lägenheten'
      },
      parking: {
        en: 'Reserved underground parking space included',
        de: 'Reservierter Tiefgaragenstellplatz inklusive',
        es: 'Plaza de aparcamiento subterráneo reservada incluida',
        nl: 'Gereserveerde ondergrondse parkeerplaats inbegrepen',
        sv: 'Reserverad garageplats under mark ingår'
      },
      pets: { en: 'Pet-free', de: 'Haustierfrei', es: 'Sin mascotas', nl: 'Huisdiervrij', sv: 'Husdjursfritt' },
      pool: { en: 'Yes (Shared)', de: 'Ja (Gemeinschaftspool)', es: 'Sí (Compartida)', nl: 'Ja (Gedeeld)', sv: 'Ja (Gemensam)' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Zeezicht', sv: 'Havsutsikt' },
      outdoor: { en: 'Terrace', de: 'Terrasse', es: 'Terraza', nl: 'Terras', sv: 'Terrass' },
      kitchen: {
        en: 'Full indoor kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina interior completa',
        nl: 'Volledige binnenkeuken',
        sv: 'Fullt utrustat inomhuskök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      fireplace: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Yes. Cooling & Heating', de: 'Ja. Kühlen & Heizen', es: 'Sí. Frío y calor', nl: 'Ja. Koelen en verwarmen', sv: 'Ja. Kyla och värme' }
    }
  }
];
