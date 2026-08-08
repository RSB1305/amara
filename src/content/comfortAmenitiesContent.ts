import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { trustLabels } from './trustLabels';

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
    es: 'Guía para huéspedes',
    nl: 'Gastgids',
    sv: 'Gästguide'
  },
  ctaLabel: trustLabels.book
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
      { token: 'about', label: trustLabels.about.en },
      { token: 'reviews_hub', label: trustLabels.reviews_hub.en },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.en }
    ],
    hero: {
      subtitle: 'Comfort lives in the details.',
      title: 'Thoughtful comfort, down to the details.',
      lead: "Well-equipped kitchens, private outdoor spaces, quiet settings and the small details you shouldn't have to think about — because we already have.",
      supportText: 'Compare amenities, key details and practical information for every AMARA stay at a glance.',
      ctaAbout: trustLabels.about.en,
      ctaReviews: trustLabels.reviews_hub.en
    },
    sections: {
      inventoryAria: 'Inventory list',
      inventoryTitle: 'Find the stay that suits you'
    },
    inventory: {
      directBooking: trustLabels.book.en,
      labels: {
        license: 'Tourist Registration Number',
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
    noteText: 'Seasonal price ranges are indicative. The final price and minimum stay are shown when you book.'
  },
  de: {
    trustLinks: [
      { token: 'about', label: trustLabels.about.de },
      { token: 'reviews_hub', label: trustLabels.reviews_hub.de },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.de }
    ],
    hero: {
      subtitle: 'Komfort steckt in den Details.',
      title: 'Durchdacht bis ins Detail.',
      lead: 'Gut ausgestattete Küchen, private Außenbereiche, ruhige Lagen und die kleinen Details, um die ihr euch keine Gedanken machen müsst – weil wir es längst getan haben.',
      supportText: 'Vergleicht Ausstattung, wichtige Details und praktische Informationen zu allen AMARA-Unterkünften auf einen Blick.',
      ctaAbout: trustLabels.about.de,
      ctaReviews: trustLabels.reviews_hub.de
    },
    sections: {
      inventoryAria: 'Inventarliste',
      inventoryTitle: 'Findet die Unterkunft, die zu euch passt'
    },
    inventory: {
      directBooking: trustLabels.book.de,
      labels: {
        license: 'Touristische Registrierungsnummer',
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
    noteText: 'Die saisonalen Preisspannen dienen zur Orientierung. Den endgültigen Preis und Mindestaufenthalt seht ihr bei der Buchung.'
  },
  es: {
    trustLinks: [
      { token: 'about', label: trustLabels.about.es },
      { token: 'reviews_hub', label: trustLabels.reviews_hub.es },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.es }
    ],
    hero: {
      subtitle: 'El confort está en los detalles.',
      title: 'Pensado hasta el último detalle.',
      lead: 'Cocinas bien equipadas, espacios exteriores privados, ubicaciones tranquilas y esos pequeños detalles de los que no tenéis que preocuparos, porque nosotros ya lo hemos hecho.',
      supportText: 'Comparad de un vistazo el equipamiento, los datos clave y la información práctica de cada alojamiento AMARA.',
      ctaAbout: trustLabels.about.es,
      ctaReviews: trustLabels.reviews_hub.es
    },
    sections: {
      inventoryAria: 'Lista de inventario',
      inventoryTitle: 'Encontrad el alojamiento que mejor os encaja'
    },
    inventory: {
      directBooking: trustLabels.book.es,
      labels: {
        license: 'Número de Registro Turístico',
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
    noteText: 'Los precios por temporada son orientativos. El precio final y la estancia mínima se muestran al reservar.'
  },
  nl: {
    trustLinks: [
      { token: 'about', label: trustLabels.about.nl },
      { token: 'reviews_hub', label: trustLabels.reviews_hub.nl },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.nl }
    ],
    hero: {
      subtitle: 'Comfort zit in de details.',
      title: 'Aan elk detail is gedacht.',
      lead: 'Goed uitgeruste keukens, privébuitenruimtes, rustige locaties en de kleine details waar jullie niet aan hoeven te denken, omdat wij dat al hebben gedaan.',
      supportText: 'Vergelijk in één oogopslag de voorzieningen, belangrijkste details en praktische informatie van elk AMARA-verblijf.',
      ctaAbout: trustLabels.about.nl,
      ctaReviews: trustLabels.reviews_hub.nl
    },
    sections: {
      inventoryAria: 'Inventarislijst',
      inventoryTitle: 'Vind het verblijf dat bij jullie past'
    },
    inventory: {
      directBooking: trustLabels.book.nl,
      labels: {
        license: 'Toeristisch registratienummer',
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
    noteText: 'De seizoensprijzen zijn indicatief. De definitieve prijs en minimale verblijfsduur zien jullie tijdens het boeken.'
  },
  sv: {
    trustLinks: [
      { token: 'about', label: trustLabels.about.sv },
      { token: 'reviews_hub', label: trustLabels.reviews_hub.sv },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.sv }
    ],
    hero: {
      subtitle: 'Komforten finns i detaljerna.',
      title: 'Genomtänkt in i minsta detalj.',
      lead: 'Välutrustade kök, privata uteplatser, lugna lägen och de små detaljer ni inte ska behöva tänka på, eftersom vi redan har gjort det.',
      supportText: 'Jämför bekvämligheter, viktiga detaljer och praktisk information för varje AMARA-boende i en tydlig översikt.',
      ctaAbout: trustLabels.about.sv,
      ctaReviews: trustLabels.reviews_hub.sv
    },
    sections: {
      inventoryAria: 'Inventarielista',
      inventoryTitle: 'Hitta boendet som passar er'
    },
    inventory: {
      directBooking: trustLabels.book.sv,
      labels: {
        license: 'Registreringsnummer för turistboende',
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
    noteText: 'Säsongspriserna är vägledande. Slutpriset och minsta antal nätter visas vid bokning.'
  }
};


export const comfortAmenitiesSeo: AmaraAuthoringSeo = {
  version: '2026-03-25-amara-comfort-amenities-restored',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Amenities & Stay Details',
      description:
        'Compare amenities, occupancy, access, seasonal price ranges and key stay details for AMARA accommodations in Frigiliana, Nerja and Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Ausstattung & Aufenthaltsdetails',
      description:
        'Vergleicht Ausstattung, Belegung, Zugang, saisonale Preisspannen und wichtige Details der AMARA-Unterkünfte in Frigiliana, Nerja und Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Equipamiento y detalles de la estancia',
      description:
        'Comparad equipamiento, ocupación, acceso, precios orientativos y datos clave de los alojamientos AMARA en Frigiliana, Nerja y Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Voorzieningen & verblijfsdetails',
      description:
        'Vergelijk voorzieningen, bezetting, toegang, seizoensprijzen en belangrijke verblijfsdetails voor AMARA in Frigiliana, Nerja en Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Bekvämligheter & boendedetaljer',
      description:
        'Jämför bekvämligheter, antal gäster, tillgänglighet, säsongspriser och viktiga boendedetaljer för AMARA i Frigiliana, Nerja och Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const comfortAmenitiesFooterLabels = {
  amenities: trustLabels.amenities,
  faq_general: trustLabels.faq_general,
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
      pets: { en: 'No pets', de: 'Keine Haustiere', es: 'Sin mascotas', nl: 'Geen huisdieren', sv: 'Inga husdjur' },
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
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
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
        de: 'Meerblick in der Ferne',
        es: 'Vistas al mar en la distancia',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt i fjärran'
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
        en: 'Fully equipped kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina totalmente equipada',
        nl: 'Volledig uitgeruste keuken',
        sv: 'Fullt utrustat kök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Double Shower / Rain Shower', de: 'Doppeldusche / Regendusche', es: 'Ducha doble / Ducha de lluvia', nl: 'Dubbele douche / Regendouche', sv: 'Dubbel dusch / Regndusch' },
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
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
      pets: { en: 'No pets', de: 'Keine Haustiere', es: 'Sin mascotas', nl: 'Geen huisdieren', sv: 'Inga husdjur' },
      view: {
        en: 'Distant sea view',
        de: 'Meerblick in der Ferne',
        es: 'Vistas al mar en la distancia',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt i fjärran'
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
        en: 'Fully equipped kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina totalmente equipada',
        nl: 'Volledig uitgeruste keuken',
        sv: 'Fullt utrustat kök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Double Shower / Rain Shower', de: 'Doppeldusche / Regendusche', es: 'Ducha doble / Ducha de lluvia', nl: 'Dubbele douche / Regendouche', sv: 'Dubbel dusch / Regndusch' },
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
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
        de: 'Meerblick in der Ferne',
        es: 'Vistas al mar en la distancia',
        nl: 'Uitzicht op zee in de verte',
        sv: 'Havsutsikt i fjärran'
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
        en: 'Fully equipped kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina totalmente equipada',
        nl: 'Volledig uitgeruste keuken',
        sv: 'Fullt utrustat kök'
      },
      pelletStove: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
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
      pets: { en: 'No pets', de: 'Keine Haustiere', es: 'Sin mascotas', nl: 'Geen huisdieren', sv: 'Inga husdjur' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Uitzicht op zee', sv: 'Havsutsikt' },
      outdoor: { en: 'Balcony', de: 'Balkon', es: 'Balcón', nl: 'Balkon', sv: 'Balkong' },
      kitchen: {
        en: 'Fully equipped kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina totalmente equipada',
        nl: 'Volledig uitgeruste keuken',
        sv: 'Fullt utrustat kök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
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
      pets: { en: 'No pets', de: 'Keine Haustiere', es: 'Sin mascotas', nl: 'Geen huisdieren', sv: 'Inga husdjur' },
      pool: { en: 'Shared pool', de: 'Gemeinschaftspool', es: 'Piscina comunitaria', nl: 'Gedeeld zwembad', sv: 'Gemensam pool' },
      view: { en: 'Sea view', de: 'Meerblick', es: 'Vistas al mar', nl: 'Uitzicht op zee', sv: 'Havsutsikt' },
      outdoor: { en: 'Terrace', de: 'Terrasse', es: 'Terraza', nl: 'Terras', sv: 'Terrass' },
      kitchen: {
        en: 'Fully equipped kitchen',
        de: 'Voll ausgestattete Küche',
        es: 'Cocina totalmente equipada',
        nl: 'Volledig uitgeruste keuken',
        sv: 'Fullt utrustat kök'
      },
      washingMachine: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      fireplace: { en: 'Yes', de: 'Ja', es: 'Sí', nl: 'Ja', sv: 'Ja' },
      shower: { en: 'Rain Shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
      airCon: { en: 'Cooling & heating', de: 'Kühlen & Heizen', es: 'Frío y calor', nl: 'Koelen & verwarmen', sv: 'Kyla & värme' }
    }
  }
];
