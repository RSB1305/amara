import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { trustLabels } from './trustLabels';
import {
  formatVacationRentalPriceRange,
  vacationRentalEntities,
  type VacationRentalAmenityFeature,
  type VacationRentalBed,
  type VacationRentalEntity
} from './vacationRentalEntities';

type LocalizedText = Record<AmaraLanguage, string>;
const languages: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
type NavEntry = { token: LinkToken; label: string };
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
  bathroomUnderfloorHeating?: LocalizedText;
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
        bathroomUnderfloorHeating: string;
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
      subtitle: 'Compare before you book.',
      title: 'Beds, terraces, kitchens & access.',
      lead: 'Farah has a kitchenette but no full kitchen; Playa has lift access after seven steps; and three Frigiliana apartments have private terraces.',
      supportText: 'Compare occupancy, bed sizes, access, parking, pets, views and seasonal price ranges for every AMARA stay.',
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
        bathroomUnderfloorHeating: 'Bathroom underfloor heating',
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
      subtitle: 'Vor der Buchung vergleichen.',
      title: 'Betten, Terrassen, Küchen & Zugang.',
      lead: 'Farah hat eine Teeküche, aber keine vollständige Küche; bei Playa führen sieben Stufen zum Aufzug; und drei Apartments in Frigiliana haben private Terrassen.',
      supportText: 'Vergleicht Belegung, Bettgrößen, Zugang, Parken, Haustiere, Ausblick und saisonale Preisspannen aller AMARA-Unterkünfte.',
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
        bathroomUnderfloorHeating: 'Fußbodenheizung im Bad',
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
      subtitle: 'Comparad antes de reservar.',
      title: 'Camas, terrazas, cocinas y acceso.',
      lead: 'Farah tiene una pequeña zona de cocina, pero no cocina completa; en Playa hay siete escalones antes del ascensor; y tres apartamentos de Frigiliana cuentan con terraza privada.',
      supportText: 'Comparad capacidad, tamaño de las camas, acceso, aparcamiento, mascotas, vistas y precios orientativos de todos los alojamientos AMARA.',
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
        bathroomUnderfloorHeating: 'Suelo radiante en el baño',
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
      subtitle: 'Vergelijk voordat jullie boeken.',
      title: 'Bedden, terrassen, keukens & toegang.',
      lead: 'Farah heeft een kitchenette maar geen volledige keuken; bij Playa zijn er zeven treden vóór de lift; en drie appartementen in Frigiliana hebben een privéterras.',
      supportText: 'Vergelijk bezetting, bedmaten, toegang, parkeren, huisdieren, uitzicht en seizoensprijzen van alle AMARA-verblijven.',
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
        bathroomUnderfloorHeating: 'Vloerverwarming in de badkamer',
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
      subtitle: 'Jämför innan ni bokar.',
      title: 'Sängar, terrasser, kök & tillträde.',
      lead: 'Farah har pentry men inget komplett kök; till hissen i Playa leder sju trappsteg; och tre lägenheter i Frigiliana har privat terrass.',
      supportText: 'Jämför antal gäster, sängmått, tillträde, parkering, husdjur, utsikt och säsongspriser för alla AMARA-boenden.',
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
        bathroomUnderfloorHeating: 'Golvvärme i badrummet',
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

const localizedYes: LocalizedText = {
  en: 'Yes',
  de: 'Ja',
  es: 'Sí',
  nl: 'Ja',
  sv: 'Ja'
};

const localizedSharedPool: LocalizedText = {
  en: 'Shared pool',
  de: 'Gemeinschaftspool',
  es: 'Piscina comunitaria',
  nl: 'Gedeeld zwembad',
  sv: 'Gemensam pool'
};

const localizedPrivatePatioAndTerrace: LocalizedText = {
  en: 'Private patio & private terrace',
  de: 'Privater Patio & private Terrasse',
  es: 'Patio privado y terraza privada',
  nl: 'Privépatio en privéterras',
  sv: 'Privat uteplats och privat terrass'
};

const localizedReservedParking: LocalizedText = {
  en: 'Reserved underground parking space included',
  de: 'Reservierter Tiefgaragenstellplatz inklusive',
  es: 'Plaza de aparcamiento subterránea reservada incluida',
  nl: 'Gereserveerde ondergrondse parkeerplaats inbegrepen',
  sv: 'Reserverad garageplats under mark ingår'
};

const localizedCoolingAndHeating: LocalizedText = {
  en: 'Cooling & heating',
  de: 'Kühlen & Heizen',
  es: 'Frío y calor',
  nl: 'Koelen & verwarmen',
  sv: 'Kyla & värme'
};

const localizedRainShower: LocalizedText = {
  en: 'Rain Shower',
  de: 'Regendusche',
  es: 'Ducha de lluvia',
  nl: 'Regendouche',
  sv: 'Regndusch'
};

const localizedDoubleRainShower: LocalizedText = {
  en: 'Double Shower / Rain Shower',
  de: 'Doppeldusche / Regendusche',
  es: 'Ducha doble / Ducha de lluvia',
  nl: 'Dubbele douche / Regendouche',
  sv: 'Dubbeldusch / Regndusch'
};

const bunkBedLabel: LocalizedText = {
  en: 'bunk bed',
  de: 'Etagenbett',
  es: 'litera',
  nl: 'stapelbed',
  sv: 'våningssäng'
};

function amenityValue(
  rental: VacationRentalEntity,
  name: string
): VacationRentalAmenityFeature['value'] | undefined {
  return rental.amenityFeatures.find((feature) => feature.name === name)?.value;
}

function hasAmenity(rental: VacationRentalEntity, name: string): boolean {
  return amenityValue(rental, name) === true;
}

function localizeGuestCount(count: number): LocalizedText {
  return {
    en: `${count} ${count === 1 ? 'guest' : 'guests'}`,
    de: `${count} ${count === 1 ? 'Gast' : 'Gäste'}`,
    es: `${count} ${count === 1 ? 'huésped' : 'huéspedes'}`,
    nl: `${count} ${count === 1 ? 'gast' : 'gasten'}`,
    sv: `${count} ${count === 1 ? 'gäst' : 'gäster'}`
  };
}

function normalizeBedSize(label: string): string {
  return label.replace(/\s+x\s+/i, '×');
}

function localizeBeds(beds: VacationRentalBed[]): LocalizedText {
  return Object.fromEntries(
    languages.map((lang) => [
      lang,
      beds.map((bed) => (
        bed.label === 'Bunk bed'
          ? bunkBedLabel[lang]
          : normalizeBedSize(bed.label)
      )).join(' + ')
    ])
  ) as LocalizedText;
}

function buildComfortProperty(rental: VacationRentalEntity): PropertyEntry {
  const bedSummary = localizeBeds(rental.bed);
  const privatePatioAndTerrace =
    hasAmenity(rental, 'privatePatio') && hasAmenity(rental, 'privateTerrace');
  const parking = amenityValue(rental, 'parkingType') === 'ReservedUndergroundIncluded'
    ? localizedReservedParking
    : undefined;
  const sunLoungers = amenityValue(rental, 'sunLoungers');
  const shower = hasAmenity(rental, 'doubleRainShower')
    ? localizedDoubleRainShower
    : hasAmenity(rental, 'rainShower')
      ? localizedRainShower
      : undefined;

  return {
    id: rental.propertyId,
    name: `${rental.name}, ${rental.city}`,
    href: `/${rental.slug}`,
    specs: {
      license: rental.license,
      maxOccupancy: localizeGuestCount(rental.occupancy),
      ...(rental.bed.length === 1
        ? { bed: bedSummary.en }
        : { beds: bedSummary }),
      price: Object.fromEntries(
        languages.map((lang) => [
          lang,
          formatVacationRentalPriceRange(rental.priceRange, lang, 'symbol')
        ])
      ) as LocalizedText,
      accessNote: rental.accessNote,
      ...(parking ? { parking } : {}),
      pets: rental.petsNote,
      ...(hasAmenity(rental, 'pool') ? { pool: localizedSharedPool } : {}),
      view: rental.viewNote,
      outdoor: privatePatioAndTerrace
        ? localizedPrivatePatioAndTerrace
        : rental.outdoorNote,
      ...(typeof sunLoungers === 'string'
        ? { sunLoungers: Object.fromEntries(languages.map((lang) => [lang, sunLoungers])) as LocalizedText }
        : {}),
      ...(hasAmenity(rental, 'hammock') ? { hammock: localizedYes } : {}),
      ...(hasAmenity(rental, 'outdoorShower') ? { outdoorShower: localizedYes } : {}),
      kitchen: rental.kitchenNote,
      ...(hasAmenity(rental, 'washingMachine') ? { washingMachine: localizedYes } : {}),
      ...(hasAmenity(rental, 'pelletStove') ? { pelletStove: localizedYes } : {}),
      ...(hasAmenity(rental, 'fireplace') ? { fireplace: localizedYes } : {}),
      ...(shower ? { shower } : {}),
      ...(rental.bathroomUnderfloorHeating
        ? { bathroomUnderfloorHeating: localizedYes }
        : {}),
      airCon: localizedCoolingAndHeating
    }
  };
}

export const comfortAmenitiesProperties: PropertyEntry[] =
  vacationRentalEntities.map(buildComfortProperty);
