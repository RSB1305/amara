import type { AmenitySpecIcon } from '../components/amenities/AmenitySpecRow.astro';
import type { AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

export type ComfortAmenityCategory =
  | 'essentials'
  | 'bathroom'
  | 'bedroom-laundry'
  | 'entertainment'
  | 'heating-cooling'
  | 'home-safety'
  | 'internet-office'
  | 'kitchen-dining'
  | 'outdoor'
  | 'facilities';

type ComfortAmenityCategoryOption = {
  key: 'all' | ComfortAmenityCategory;
  label: LocalizedText;
};

export type ComfortAmenityDefinition = {
  key: string;
  category: ComfortAmenityCategory;
  icon: AmenitySpecIcon;
  title: LocalizedText;
  description?: LocalizedText;
};

type ComfortAmenityOverride = {
  title?: LocalizedText;
  description?: LocalizedText | null;
};

const pelletStoveOverride: ComfortAmenityOverride = {
  title: {
    en: 'Pellet stove',
    de: 'Pelletofen',
    es: 'Estufa de pellets',
    nl: 'Pelletkachel',
    sv: 'Pelletskamin'
  },
  description: null
};

export const comfortAmenityFilterCopy: Record<
  AmaraLanguage,
  {
    propertyLabel: string;
    allProperties: string;
    amenityLabel: string;
    amenityHeading: string;
    noResults: string;
  }
> = {
  en: {
    propertyLabel: 'Choose a stay',
    allProperties: 'All stays',
    amenityLabel: 'Filter by amenity',
    amenityHeading: 'Amenities',
    noResults: 'No amenities match your current filters.'
  },
  de: {
    propertyLabel: 'Unterkunft auswählen',
    allProperties: 'Alle Unterkünfte',
    amenityLabel: 'Ausstattung filtern',
    amenityHeading: 'Ausstattung',
    noResults: 'Keine Ausstattung entspricht der aktuellen Filterauswahl.'
  },
  es: {
    propertyLabel: 'Elegid un alojamiento',
    allProperties: 'Todos los alojamientos',
    amenityLabel: 'Filtrar por equipamiento',
    amenityHeading: 'Equipamiento',
    noResults: 'Ningún elemento del equipamiento coincide con los filtros seleccionados.'
  },
  nl: {
    propertyLabel: 'Kies een verblijf',
    allProperties: 'Alle verblijven',
    amenityLabel: 'Filter op voorziening',
    amenityHeading: 'Voorzieningen',
    noResults: 'Geen voorzieningen komen overeen met de geselecteerde filters.'
  },
  sv: {
    propertyLabel: 'Välj boende',
    allProperties: 'Alla boenden',
    amenityLabel: 'Filtrera efter bekvämlighet',
    amenityHeading: 'Bekvämligheter',
    noResults: 'Inga bekvämligheter matchar de valda filtren.'
  }
};

export const comfortAmenityCategoryOptions: ComfortAmenityCategoryOption[] = [
  {
    key: 'all',
    label: { en: 'All', de: 'Alle', es: 'Todo', nl: 'Alle', sv: 'Alla' }
  },
  {
    key: 'essentials',
    label: {
      en: 'Essentials',
      de: 'Grundausstattung',
      es: 'Elementos básicos',
      nl: 'Basisvoorzieningen',
      sv: 'Basutrustning'
    }
  },
  {
    key: 'bathroom',
    label: { en: 'Bathroom', de: 'Badezimmer', es: 'Baño', nl: 'Badkamer', sv: 'Badrum' }
  },
  {
    key: 'bedroom-laundry',
    label: {
      en: 'Bedroom & laundry',
      de: 'Schlafzimmer & Wäsche',
      es: 'Dormitorio y ropa',
      nl: 'Slaapkamer & wasgoed',
      sv: 'Sovrum och tvätt'
    }
  },
  {
    key: 'entertainment',
    label: {
      en: 'Entertainment',
      de: 'Unterhaltung',
      es: 'Entretenimiento',
      nl: 'Entertainment',
      sv: 'Underhållning'
    }
  },
  {
    key: 'heating-cooling',
    label: {
      en: 'Heating & cooling',
      de: 'Heizung & Klimaanlage',
      es: 'Calefacción y aire acondicionado',
      nl: 'Verwarming en airconditioning',
      sv: 'Värme och luftkonditionering'
    }
  },
  {
    key: 'home-safety',
    label: {
      en: 'Home safety',
      de: 'Sicherheit',
      es: 'Seguridad en el alojamiento',
      nl: 'Veiligheid in huis',
      sv: 'Säkerhet i boendet'
    }
  },
  {
    key: 'internet-office',
    label: {
      en: 'Internet & workspace',
      de: 'Internet & Arbeiten',
      es: 'Internet y espacio de trabajo',
      nl: 'Internet & werkplek',
      sv: 'Internet och arbetsplats'
    }
  },
  {
    key: 'kitchen-dining',
    label: {
      en: 'Kitchen & dining',
      de: 'Küche & Essbereich',
      es: 'Cocina y comedor',
      nl: 'Keuken en eetruimte',
      sv: 'Kök och matplats'
    }
  },
  {
    key: 'outdoor',
    label: {
      en: 'Outdoor areas',
      de: 'Außenbereiche',
      es: 'Zonas exteriores',
      nl: 'Buitenruimtes',
      sv: 'Utomhusområden'
    }
  },
  {
    key: 'facilities',
    label: {
      en: 'Facilities',
      de: 'Weitere Ausstattung',
      es: 'Instalaciones',
      nl: 'Faciliteiten',
      sv: 'Faciliteter'
    }
  }
];

/**
 * One authored catalog keeps shared amenity presentation consistent.
 * Property-specific exclusions below preserve verified differences in the rental SSOT.
 */
export const expandedComfortAmenityPropertyIds = new Set([
  '408326',
  '408324',
  '408323',
  'maha',
  '408327',
  '544478'
]);

export const comfortAmenityExclusionsByPropertyId: Record<
  string,
  { categories?: ComfortAmenityCategory[]; keys?: string[] }
> = {
  '408326': {
    categories: ['outdoor'],
    keys: [
      'washing-machine',
      'fireplace',
      'carbon-monoxide-alarm',
      'stove',
      'microwave',
      'cooking-basics',
      'kitchen'
    ]
  },
  maha: {
    keys: ['washing-machine']
  },
  '408327': {
    keys: ['outdoor-shower', 'fireplace', 'sun-loungers', 'carbon-monoxide-alarm']
  },
  '544478': {
    keys: ['outdoor-shower', 'sun-loungers']
  }
};

export const comfortAmenityOverridesByPropertyId: Record<
  string,
  Record<string, ComfortAmenityOverride>
> = {
  '408324': {
    fireplace: pelletStoveOverride
  },
  '408323': {
    fireplace: pelletStoveOverride
  },
  maha: {
    fireplace: pelletStoveOverride
  },
  '544478': {
    fireplace: {
      title: {
        en: 'Wood-burning fireplace',
        de: 'Scheitholzkamin',
        es: 'Chimenea de leña',
        nl: 'Houtgestookte open haard',
        sv: 'Vedeldad eldstad'
      },
      description: null
    }
  }
};

export const expandedComfortAmenities: ComfortAmenityDefinition[] = [
  {
    key: 'clothing-storage',
    category: 'bedroom-laundry',
    icon: 'clothing-storage',
    title: {
      en: 'Clothing storage',
      de: 'Stauraum für Kleidung',
      es: 'Espacio para la ropa',
      nl: 'Opbergruimte voor kleding',
      sv: 'Klädförvaring'
    }
  },
  {
    key: 'outdoor-shower',
    category: 'outdoor',
    icon: 'outdoor-shower',
    title: {
      en: 'Outdoor shower',
      de: 'Außendusche',
      es: 'Ducha exterior',
      nl: 'Buitendouche',
      sv: 'Utomhusdusch'
    }
  },
  {
    key: 'crib',
    category: 'bedroom-laundry',
    icon: 'crib',
    title: { en: 'Crib', de: 'Babybett', es: 'Cuna', nl: 'Babybedje', sv: 'Spjälsäng' }
  },
  {
    key: 'bed-linens',
    category: 'bedroom-laundry',
    icon: 'bed-linens',
    title: { en: 'Bed linens', de: 'Bettwäsche', es: 'Ropa de cama', nl: 'Beddengoed', sv: 'Sängkläder' }
  },
  {
    key: 'bidet',
    category: 'bathroom',
    icon: 'bathroom',
    title: { en: 'Bidet', de: 'Bidet', es: 'Bidé', nl: 'Bidet', sv: 'Bidé' }
  },
  {
    key: 'iron',
    category: 'bedroom-laundry',
    icon: 'iron',
    title: { en: 'Iron', de: 'Bügeleisen', es: 'Plancha', nl: 'Strijkijzer', sv: 'Strykjärn' }
  },
  {
    key: 'shower-gel',
    category: 'bathroom',
    icon: 'toiletries',
    title: { en: 'Shower gel', de: 'Duschgel', es: 'Gel de ducha', nl: 'Douchegel', sv: 'Duschgel' }
  },
  {
    key: 'first-aid-kit',
    category: 'home-safety',
    icon: 'first-aid',
    title: {
      en: 'First aid kit',
      de: 'Erste-Hilfe-Set',
      es: 'Botiquín de primeros auxilios',
      nl: 'EHBO-doos',
      sv: 'Första hjälpen-kit'
    }
  },
  {
    key: 'outdoor-dining',
    category: 'outdoor',
    icon: 'outdoor-dining',
    title: {
      en: 'Outdoor dining area',
      de: 'Essbereich im Freien',
      es: 'Zona de comedor al aire libre',
      nl: 'Eethoek buiten',
      sv: 'Matplats utomhus'
    }
  },
  {
    key: 'dining-table',
    category: 'kitchen-dining',
    icon: 'dining-table',
    title: { en: 'Dining table', de: 'Esstisch', es: 'Mesa de comedor', nl: 'Eettafel', sv: 'Matbord' }
  },
  {
    key: 'ethernet',
    category: 'internet-office',
    icon: 'ethernet',
    title: {
      en: 'Ethernet connection',
      de: 'Ethernet-Verbindung',
      es: 'Conexión Ethernet',
      nl: 'Ethernetverbinding',
      sv: 'Ethernetanslutning'
    }
  },
  {
    key: 'room-darkening-shades',
    category: 'bedroom-laundry',
    icon: 'room-darkening',
    title: {
      en: 'Room-darkening shades',
      de: 'Fensterverdunklung',
      es: 'Persianas o cortinas opacas',
      nl: 'Raamverduistering',
      sv: 'Mörkläggningsgardiner'
    }
  },
  {
    key: 'tv',
    category: 'entertainment',
    icon: 'television',
    title: { en: 'Television', de: 'Fernseher', es: 'Televisor', nl: 'Televisie', sv: 'TV' },
    description: { en: 'HD television.', de: 'HD-Fernseher.', es: 'Televisor HD.', nl: 'HD-televisie.', sv: 'HD-TV.' }
  },
  {
    key: 'fire-extinguisher',
    category: 'home-safety',
    icon: 'fire-extinguisher',
    title: {
      en: 'Fire extinguisher',
      de: 'Feuerlöscher',
      es: 'Extintor de incendios',
      nl: 'Brandblusser',
      sv: 'Brandsläckare'
    }
  },
  {
    key: 'hair-dryer',
    category: 'bathroom',
    icon: 'hair-dryer',
    title: { en: 'Hair dryer', de: 'Föhn', es: 'Secador de pelo', nl: 'Föhn', sv: 'Hårtork' }
  },
  {
    key: 'outdoor-furniture',
    category: 'outdoor',
    icon: 'outdoor-furniture',
    title: {
      en: 'Outdoor furniture',
      de: 'Gartenmöbel',
      es: 'Muebles de exterior',
      nl: 'Buitenmeubilair',
      sv: 'Utemöbler'
    }
  },
  {
    key: 'freezer',
    category: 'kitchen-dining',
    icon: 'refrigerator',
    title: { en: 'Freezer', de: 'Gefrierschrank', es: 'Congelador', nl: 'Vriezer', sv: 'Frys' }
  },
  {
    key: 'dishes-silverware',
    category: 'kitchen-dining',
    icon: 'dishes',
    title: {
      en: 'Dishes and silverware',
      de: 'Geschirr und Besteck',
      es: 'Vajilla y cubiertos',
      nl: 'Servies en bestek',
      sv: 'Porslin och bestick'
    },
    description: {
      en: 'Plates, bowls, cups, cutlery and other utensils.',
      de: 'Teller, Schüsseln, Tassen, Besteck und andere Utensilien.',
      es: 'Platos, cuencos, tazas, cubiertos y otros utensilios.',
      nl: 'Borden, kommen, kopjes, bestek en ander keukengerei.',
      sv: 'Tallrikar, skålar, koppar, bestick och andra köksredskap.'
    }
  },
  {
    key: 'essentials',
    category: 'essentials',
    icon: 'essentials',
    title: {
      en: 'Essentials',
      de: 'Grundausstattung',
      es: 'Elementos básicos',
      nl: 'Basisvoorzieningen',
      sv: 'Grundläggande bekvämligheter'
    },
    description: {
      en: 'Towels, bed linen, soap and toilet paper.',
      de: 'Handtücher, Bettwäsche, Seife und Toilettenpapier.',
      es: 'Toallas, ropa de cama, jabón y papel higiénico.',
      nl: 'Handdoeken, beddengoed, zeep en toiletpapier.',
      sv: 'Handdukar, sängkläder, tvål och toalettpapper.'
    }
  },
  {
    key: 'cooking-basics',
    category: 'kitchen-dining',
    icon: 'cooking-basics',
    title: {
      en: 'Cooking basics',
      de: 'Grundausstattung zum Kochen',
      es: 'Utensilios básicos de cocina',
      nl: 'Basisbenodigdheden om te koken',
      sv: 'Grundläggande matlagningsutrustning'
    },
    description: {
      en: 'Pots and pans, oil, salt and pepper.',
      de: 'Töpfe und Pfannen, Öl, Salz und Pfeffer.',
      es: 'Ollas y sartenes, aceite, sal y pimienta.',
      nl: 'Potten en pannen, olie, zout en peper.',
      sv: 'Kastruller och stekpannor, olja, salt och peppar.'
    }
  },
  {
    key: 'heating',
    category: 'heating-cooling',
    icon: 'heating',
    title: { en: 'Heating', de: 'Heizung', es: 'Calefacción', nl: 'Verwarming', sv: 'Uppvärmning' }
  },
  {
    key: 'stove',
    category: 'kitchen-dining',
    icon: 'stove',
    title: { en: 'Stove', de: 'Herd', es: 'Placa de cocina', nl: 'Kookplaat', sv: 'Spis' },
    description: { en: 'Induction.', de: 'Induktion.', es: 'Inducción.', nl: 'Inductie.', sv: 'Induktion.' }
  },
  {
    key: 'coffee',
    category: 'kitchen-dining',
    icon: 'coffee',
    title: { en: 'Coffee', de: 'Kaffee', es: 'Café', nl: 'Koffie', sv: 'Kaffe' }
  },
  {
    key: 'coffee-maker',
    category: 'kitchen-dining',
    icon: 'coffee-maker',
    title: {
      en: 'Coffee maker',
      de: 'Kaffeemaschine',
      es: 'Cafetera',
      nl: 'Koffiezetapparaat',
      sv: 'Kaffebryggare'
    },
    description: {
      en: 'Espresso machine.',
      de: 'Espressomaschine.',
      es: 'Cafetera espresso.',
      nl: 'Espressomachine.',
      sv: 'Espressomaskin.'
    }
  },
  {
    key: 'fireplace',
    category: 'heating-cooling',
    icon: 'fireplace',
    title: { en: 'Fireplace', de: 'Kamin', es: 'Chimenea', nl: 'Open haard', sv: 'Eldstad' },
    description: { en: 'Pellets.', de: 'Pellets.', es: 'Pellets.', nl: 'Pellets.', sv: 'Pellets.' }
  },
  {
    key: 'hangers',
    category: 'bedroom-laundry',
    icon: 'clothing-storage',
    title: { en: 'Hangers', de: 'Kleiderbügel', es: 'Perchas', nl: 'Kledinghangers', sv: 'Galgar' }
  },
  {
    key: 'air-conditioning',
    category: 'heating-cooling',
    icon: 'air-conditioning',
    title: {
      en: 'Air conditioning',
      de: 'Klimaanlage',
      es: 'Aire acondicionado',
      nl: 'Airconditioning',
      sv: 'Luftkonditionering'
    },
    description: {
      en: 'Central air conditioning.',
      de: 'Zentrale Klimaanlage.',
      es: 'Aire acondicionado central.',
      nl: 'Centrale airconditioning.',
      sv: 'Central luftkonditionering.'
    }
  },
  {
    key: 'carbon-monoxide-alarm',
    category: 'home-safety',
    icon: 'safety-alarm',
    title: {
      en: 'Carbon monoxide alarm',
      de: 'Kohlenmonoxidmelder',
      es: 'Detector de monóxido de carbono',
      nl: 'Koolmonoxidemelder',
      sv: 'Kolmonoxidlarm'
    }
  },
  {
    key: 'kitchen',
    category: 'kitchen-dining',
    icon: 'kitchen',
    title: { en: 'Kitchen', de: 'Küche', es: 'Cocina', nl: 'Keuken', sv: 'Kök' }
  },
  {
    key: 'refrigerator',
    category: 'kitchen-dining',
    icon: 'refrigerator',
    title: { en: 'Refrigerator', de: 'Kühlschrank', es: 'Frigorífico', nl: 'Koelkast', sv: 'Kylskåp' }
  },
  {
    key: 'sun-loungers',
    category: 'outdoor',
    icon: 'sun-loungers',
    title: { en: 'Sun loungers', de: 'Sonnenliegen', es: 'Tumbonas', nl: 'Ligstoelen', sv: 'Solstolar' }
  },
  {
    key: 'microwave',
    category: 'kitchen-dining',
    icon: 'microwave',
    title: { en: 'Microwave', de: 'Mikrowelle', es: 'Microondas', nl: 'Magnetron', sv: 'Mikrovågsugn' }
  },
  {
    key: 'mini-fridge',
    category: 'kitchen-dining',
    icon: 'refrigerator',
    title: { en: 'Mini fridge', de: 'Minikühlschrank', es: 'Mininevera', nl: 'Minikoelkast', sv: 'Minikylskåp' }
  },
  {
    key: 'private-living-room',
    category: 'facilities',
    icon: 'living-room',
    title: {
      en: 'Private living room',
      de: 'Privates Wohnzimmer',
      es: 'Sala de estar privada',
      nl: 'Privéwoonkamer',
      sv: 'Privat vardagsrum'
    }
  },
  {
    key: 'smoke-alarm',
    category: 'home-safety',
    icon: 'smoke-alarm',
    title: {
      en: 'Smoke alarm',
      de: 'Rauchmelder',
      es: 'Detector de humo',
      nl: 'Rookmelder',
      sv: 'Brandvarnare'
    }
  },
  {
    key: 'cleaning-products',
    category: 'essentials',
    icon: 'cleaning-products',
    title: {
      en: 'Cleaning products',
      de: 'Reinigungsprodukte',
      es: 'Productos de limpieza',
      nl: 'Schoonmaakproducten',
      sv: 'Rengöringsprodukter'
    }
  },
  {
    key: 'soap-body-wash',
    category: 'bathroom',
    icon: 'toiletries',
    title: {
      en: 'Soap or body wash',
      de: 'Seife oder Duschgel',
      es: 'Jabón o gel de ducha',
      nl: 'Zeep of douchegel',
      sv: 'Tvål eller duschgel'
    }
  },
  {
    key: 'shampoo',
    category: 'bathroom',
    icon: 'toiletries',
    title: { en: 'Shampoo', de: 'Shampoo', es: 'Champú', nl: 'Shampoo', sv: 'Schampo' }
  },
  {
    key: 'workspace',
    category: 'internet-office',
    icon: 'workspace',
    title: {
      en: 'Dedicated workspace',
      de: 'Eigener Arbeitsbereich',
      es: 'Espacio de trabajo',
      nl: 'Eigen werkplek',
      sv: 'Egen arbetsplats'
    }
  },
  {
    key: 'patio-balcony',
    category: 'outdoor',
    icon: 'outdoor',
    title: {
      en: 'Patio or balcony',
      de: 'Terrasse oder Balkon',
      es: 'Patio o balcón',
      nl: 'Terras of balkon',
      sv: 'Uteplats eller balkong'
    },
    description: { en: 'Private.', de: 'Privat.', es: 'Privado.', nl: 'Privé.', sv: 'Privat.' }
  },
  {
    key: 'toaster',
    category: 'kitchen-dining',
    icon: 'toaster',
    title: { en: 'Toaster', de: 'Toaster', es: 'Tostadora', nl: 'Broodrooster', sv: 'Brödrost' }
  },
  {
    key: 'hot-water',
    category: 'bathroom',
    icon: 'hot-water',
    title: { en: 'Hot water', de: 'Warmwasser', es: 'Agua caliente', nl: 'Warm water', sv: 'Varmvatten' }
  },
  {
    key: 'washing-machine',
    category: 'bedroom-laundry',
    icon: 'washing-machine',
    title: { en: 'Washing machine', de: 'Waschmaschine', es: 'Lavadora', nl: 'Wasmachine', sv: 'Tvättmaskin' },
    description: {
      en: 'In the accommodation.',
      de: 'In der Unterkunft.',
      es: 'En el alojamiento.',
      nl: 'In de accommodatie.',
      sv: 'I boendet.'
    }
  },
  {
    key: 'kettle',
    category: 'kitchen-dining',
    icon: 'kettle',
    title: { en: 'Kettle', de: 'Wasserkocher', es: 'Hervidor de agua', nl: 'Waterkoker', sv: 'Vattenkokare' }
  },
  {
    key: 'wine-glasses',
    category: 'kitchen-dining',
    icon: 'wine-glasses',
    title: { en: 'Wine glasses', de: 'Weingläser', es: 'Copas de vino', nl: 'Wijnglazen', sv: 'Vinglas' }
  },
  {
    key: 'wifi',
    category: 'internet-office',
    icon: 'wifi',
    title: { en: 'Wi-Fi', de: 'WLAN', es: 'Wifi', nl: 'Wifi', sv: 'Wifi' },
    description: { en: '1 Gbps.', de: '1 Gbit/s.', es: '1 Gbit/s.', nl: '1 Gbit/s.', sv: '1 Gbit/s.' }
  },
  {
    key: 'drying-rack',
    category: 'bedroom-laundry',
    icon: 'drying-rack',
    title: {
      en: 'Clothes drying rack',
      de: 'Wäscheständer',
      es: 'Tendedero',
      nl: 'Droogrek',
      sv: 'Torkställning'
    }
  },
  {
    key: 'extra-pillows-blankets',
    category: 'bedroom-laundry',
    icon: 'extra-bedding',
    title: {
      en: 'Extra pillows and blankets',
      de: 'Zusätzliche Kissen und Decken',
      es: 'Almohadas y mantas adicionales',
      nl: 'Extra kussens en dekens',
      sv: 'Extra kuddar och filtar'
    }
  }
];
