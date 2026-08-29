import type { LocalizedText } from '../types/content';
import type {
  AmaraAuthoringSeo,
  AmaraEntityKey,
  AmaraLanguage
} from '../types/seo';

export type VacationRentalEntityKey = Exclude<AmaraEntityKey, 'amara-brand'>;
export type VacationRentalToken = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'tarifa';
export type VacationRentalBookingKey = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'tarifa';

export interface VacationRentalBed {
  numberOfBeds: number;
  typeOfBed: 'Queen' | 'King' | 'Double' | 'Single';
  label: string;
}

export interface VacationRentalAccessFacts {
  outsideStepsBeforeEntrance: number;
  buildingEntranceSteps: number;
  insideBuildingStepsToUnitOrLift: number;
  internalStairs: 'none' | 'few-down' | 'few' | 'to-bedrooms';
  lift: 'none' | 'to-floor' | 'to-unit-door';
  routeToVillageCore: 'step-free' | 'not-verified';
  parkingToUnit: 'not-provided' | 'not-verified';
  vehicleAccessHours?: {
    until: string;
    from: string;
  };
}

export interface VacationRentalAmenityFeature {
  name: string;
  value: boolean | string;
}

export interface VacationRentalPricing {
  currency: 'EUR';
  indicativeFrom: number;
  indicativeTo: number;
  lastVerified: string;
}

export interface VacationRentalEntity {
  key: VacationRentalEntityKey;
  token: VacationRentalToken;
  /** Stable AMARA-facing Booking Gateway key; never a provider identifier. */
  bookingKey: VacationRentalBookingKey;
  slug: string;
  identifier: string;
  /** Stable authored card-join key; never a provider property ID. */
  propertyId: string;
  name: string;
  shortName: string;
  additionalType: 'Apartment' | 'House' | 'VacationRental';
  accommodationType: 'EntirePlace' | 'PrivateRoom';
  license: string;
  street: string;
  city: string;
  zip: string;
  region: string;
  country: 'ES';
  latitude: number;
  longitude: number;
  bedrooms: number;
  bathrooms: number;
  rooms?: number;
  /** Usable interior floor area in square metres. */
  interiorAreaSqm?: number;
  /** Private terrace, patio or balcony area in square metres. */
  exteriorAreaSqm?: number;
  occupancy: number;
  bed: VacationRentalBed[];
  tvSizeInches: 40 | 50 | 60;
  /** Indicative build-time pricing only. Lodgify owns the final price for selected dates. */
  pricing: VacationRentalPricing;
  bathroomUnderfloorHeating: boolean;
  checkinTime: string;
  checkoutTime: string;
  // Booking links are derived per language from `slug` — see src/lib/directBooking.ts.
  sameAs: string[];
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  eyebrow: LocalizedText;
  headline: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  highlights: Record<AmaraLanguage, string[]>;
  accessFacts: VacationRentalAccessFacts;
  accessNote: LocalizedText;
  /** Accommodation-specific pet policy shown on rental and comparison pages. */
  petsNote: LocalizedText;
  kitchenNote: LocalizedText;
  outdoorNote: LocalizedText;
  viewNote: LocalizedText;
  /** Shown under the full address. */
  addressNote?: LocalizedText;
  /**
   * The first eight entries form both the visible listing set and the
   * VacationRental JSON-LD image set. They must include at least one bedroom,
   * one bathroom and one common-area image.
   */
  images: string[];
  imageAlt: LocalizedText;
  amenityFeatures: VacationRentalAmenityFeature[];
}

interface FamilySurfConversionLocale {
  surf: {
    kicker: string;
    title: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaToken: 'tarifa_wind_kitesurfing_authority';
  };
  family: {
    title?: string;
    paragraphs: string[];
  };
}

const languages: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

export function formatVacationRentalBedDimensions(label: string): string | undefined {
  const dimensions = /^(\d+)\s*x\s*(\d+)$/i.exec(label.trim());
  return dimensions ? `${dimensions[1]} × ${dimensions[2]} cm` : undefined;
}

export function formatVacationRentalPriceRange(
  pricing: VacationRentalPricing,
  lang: AmaraLanguage,
  currencyStyle: 'code' | 'symbol' = 'code'
): string {
  const { currency, indicativeFrom: minimum, indicativeTo: maximum } = pricing;

  if (currencyStyle === 'symbol') {
    return lang === 'en' || lang === 'nl'
      ? `€${minimum}–€${maximum}`
      : `${minimum} € – ${maximum} €`;
  }

  return lang === 'en'
    ? `${currency} ${minimum}-${maximum}`
    : lang === 'nl'
      ? `${currency} ${minimum} - ${currency} ${maximum}`
      : `${minimum} ${currency} - ${maximum} ${currency}`;
}

export function formatVacationRentalFromPrice(
  pricing: VacationRentalPricing,
  lang: AmaraLanguage,
  includeUnit = true
): string {
  const amount = lang === 'en' || lang === 'nl'
    ? `€${pricing.indicativeFrom}`
    : `${pricing.indicativeFrom} €`;

  const prefix: Record<AmaraLanguage, string> = {
    en: 'From',
    de: 'Ab',
    es: 'Desde',
    nl: 'Vanaf',
    sv: 'Från'
  };

  const unit: Record<AmaraLanguage, string> = {
    en: 'per night',
    de: 'pro Nacht',
    es: 'por noche',
    nl: 'per nacht',
    sv: 'per natt'
  };

  return `${prefix[lang]} ${amount}${includeUnit ? ` ${unit[lang]}` : ''}`;
}

export function toVacationRentalPriceRange(pricing: VacationRentalPricing): string {
  return `${pricing.currency} ${pricing.indicativeFrom}-${pricing.indicativeTo}`;
}
const frigilianaAddress = {
  street: 'Calle Chorruelo 5',
  city: 'Frigiliana',
  zip: '29788',
  region: 'Andalusia',
  country: 'ES' as const,
  latitude: 36.793171,
  longitude: -3.899107,
  addressNote: {
    en: 'From Casa AMARA, you are right in the heart of the village: Calle Chorruelo continues into Calle Real, Frigiliana’s lively main street with restaurants, bars and small shops. The church tower is only about 15 metres away. Plaza de las Tres Culturas is just around 550 metres away, and the route there has no stairs — a particularly convenient setting in Frigiliana’s historic old town.',
    de: 'Von Casa AMARA seid ihr direkt mittendrin: Die Calle Chorruelo geht in die Calle Real über, Frigilianas lebendige Hauptstraße mit Restaurants, Bars und kleinen Geschäften. Der Kirchturm ist nur etwa 15 Meter entfernt. Zur Plaza de las Tres Culturas sind es nur rund 550 Meter, und der Weg dorthin kommt ganz ohne Treppen aus – eine besonders angenehme Lage in der historischen Altstadt von Frigiliana.',
    es: 'Desde Casa AMARA estáis en pleno corazón del pueblo: la Calle Chorruelo continúa en la Calle Real, la animada calle principal de Frigiliana, con restaurantes, bares y pequeñas tiendas. El campanario está a solo unos 15 metros. Hasta la Plaza de las Tres Culturas hay apenas unos 550 metros y el recorrido no tiene escaleras, una ubicación especialmente cómoda en el casco histórico de Frigiliana.',
    nl: 'Vanuit Casa AMARA sta je midden in het dorp: Calle Chorruelo gaat over in Calle Real, de levendige hoofdstraat van Frigiliana met restaurants, bars en kleine winkels. De kerktoren ligt op slechts ongeveer 15 meter afstand. Naar Plaza de las Tres Culturas is het maar zo’n 550 meter en de route heeft geen trappen — een bijzonder prettige ligging in de historische oude kern van Frigiliana.',
    sv: 'Från Casa AMARA bor du mitt i byn: Calle Chorruelo fortsätter in i Calle Real, Frigilianas livliga huvudgata med restauranger, barer och små butiker. Kyrktornet ligger bara cirka 15 meter bort. Till Plaza de las Tres Culturas är det bara omkring 550 meter och vägen dit är helt utan trappor — ett särskilt bekvämt läge i Frigilianas historiska gamla stad.'
  }
};

function withLicense(
  license: string,
  features: VacationRentalAmenityFeature[]
): VacationRentalAmenityFeature[] {
  return [
    ...features,
    { name: 'licenseNum', value: `Andalusia: ${license}` }
  ];
}

export const vacationRentalEntities: VacationRentalEntity[] = [
  {
    key: 'amara-farah',
    token: 'farah',
    bookingKey: 'farah',
    slug: 'la-amara-farah',
    identifier: 'amara-lodging-farah',
    propertyId: 'farah',
    name: 'AMARA Farah',
    shortName: 'Farah',
    additionalType: 'VacationRental',
    accommodationType: 'EntirePlace',
    license: 'A/MA/01767',
    ...frigilianaAddress,
    bedrooms: 1,
    bathrooms: 1,
    rooms: 2,
    interiorAreaSqm: 19,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'Queen', label: '160 x 200' }],
    tvSizeInches: 40,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 75,
      indicativeTo: 120,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: true,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-farah-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/52229175'
    ],
    seoTitle: {
      en: 'Farah: compact suite in Frigiliana | AMARA',
      de: 'Farah: kompakte Suite in Frigiliana | AMARA',
      es: 'Farah: suite compacta en Frigiliana | AMARA',
      nl: 'Farah: compacte suite in Frigiliana | AMARA',
      sv: 'Farah: kompakt svit i Frigiliana | AMARA'
    },
    seoDescription: {
      en: 'AMARA Farah in historic Frigiliana: a compact suite for 2 with a separate bedroom and tea kitchen. One step at the entrance and none after that.',
      de: 'AMARA Farah in Frigilianas Altstadt: eine kompakte Suite für 2 mit separatem Schlafzimmer und Teeküche. Eine Stufe am Eingang, danach keine mehr.',
      es: 'AMARA Farah en el casco antiguo de Frigiliana: una suite compacta para 2 con dormitorio separado y zona de café y té. Un escalón en la entrada y ninguno más.',
      nl: 'AMARA Farah in het oude Frigiliana: een compacte suite voor 2 met aparte slaapkamer en kitchenette. Eén trede bij de ingang en daarna geen meer.',
      sv: 'AMARA Farah i gamla Frigiliana: en kompakt svit för 2 med separat sovrum och pentry. Ett trappsteg vid entrén, inga fler därefter.'
    },
    eyebrow: {
      en: 'Frigiliana old town',
      de: 'Altstadt Frigiliana',
      es: 'Casco antiguo de Frigiliana',
      nl: 'Oude kern van Frigiliana',
      sv: 'Frigilianas gamla stad'
    },
    headline: {
      en: 'A compact suite for short stays in the old town',
      de: 'Kompakte Suite für kurze Aufenthalte in der Altstadt',
      es: 'Una suite compacta para estancias cortas en el casco antiguo',
      nl: 'Een compacte suite voor korte verblijven in de oude kern',
      sv: 'En kompakt svit för kortare vistelser i gamla stan'
    },
    lead: {
      en: 'Farah is a compact, self-contained suite in Frigiliana’s historic centre, with a separate bedroom and tea kitchen for coffee and light meals.',
      de: 'Farah ist eine kompakte, abgeschlossene Suite im historischen Zentrum von Frigiliana – mit separatem Schlafzimmer und Teeküche für Kaffee und kleine Mahlzeiten.',
      es: 'Farah es una suite compacta e independiente en el centro histórico de Frigiliana, con dormitorio separado y zona de café y té para preparar bebidas y comidas ligeras.',
      nl: 'Farah is een compacte, zelfstandige suite in het historische centrum van Frigiliana, met aparte slaapkamer en kitchenette voor koffie en lichte maaltijden.',
      sv: 'Farah är en kompakt, självständig svit i Frigilianas historiska centrum, med separat sovrum och pentry för kaffe och enklare måltider.'
    },
    description: {
      en: 'Farah has two separate rooms: the bedroom and a tea kitchen with a refrigerator. A stool at the worktop can also serve as a small desk. The compact setup is designed for shorter stays; there is no full kitchen or private outdoor space.',
      de: 'Farah besteht aus zwei getrennten Räumen: dem Schlafzimmer und der Teeküche mit Kühlschrank. Ein Hocker an der Arbeitsplatte dient bei Bedarf als kleiner Arbeitsplatz. Die kompakte Ausstattung ist auf kürzere Aufenthalte ausgerichtet; eine voll ausgestattete Küche und einen privaten Außenbereich gibt es nicht.',
      es: 'Farah se distribuye en dos estancias separadas: el dormitorio y una zona de café y té con frigorífico. Un taburete junto a la encimera también puede servir como pequeño espacio de trabajo. El equipamiento compacto está pensado para estancias cortas; no hay cocina completa ni espacio exterior privado.',
      nl: 'Farah bestaat uit twee aparte ruimtes: de slaapkamer en een kleine kitchenette met koelkast. Een kruk aan het werkblad kan ook als kleine werkplek dienen. De compacte uitrusting is gericht op kortere verblijven; er is geen volledige keuken of eigen buitenruimte.',
      sv: 'Farah består av två separata rum: sovrummet och ett pentry med kylskåp. En pall vid bänkskivan kan också fungera som en liten arbetsplats. Den kompakta utrustningen är anpassad för kortare vistelser; fullt kök och privat uteplats saknas.'
    },
    highlights: {
      en: ['Just one step at the entrance', 'Two separate rooms', 'Tea kitchen with refrigerator'],
      de: ['Nur eine Stufe am Eingang', 'Zwei getrennte Räume', 'Teeküche mit Kühlschrank'],
      es: ['Un único escalón en la entrada', 'Dos estancias separadas', 'Zona de café y té con frigorífico'],
      nl: ['Slechts één trede bij de ingang', 'Twee aparte ruimtes', 'Kleine kitchenette met koelkast'],
      sv: ['Bara ett trappsteg vid entrén', 'Två separata rum', 'Pentry med kylskåp']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 0,
      buildingEntranceSteps: 1,
      insideBuildingStepsToUnitOrLift: 0,
      internalStairs: 'none',
      lift: 'none',
      routeToVillageCore: 'step-free',
      parkingToUnit: 'not-provided',
      vehicleAccessHours: { until: '11:00', from: '17:00' }
    },
    accessNote: {
      en: 'One step at the main entrance. After that, all rooms are on one level — the only one of the four Casa AMARA stays with no further steps.',
      de: 'Eine Stufe am Haupteingang. Danach liegen alle Räume auf einer Ebene – als einzige der vier Casa-AMARA-Unterkünfte ohne weitere Stufen.',
      es: 'Un escalón en la entrada principal. Después, todas las estancias están en una sola planta: es el único de los cuatro alojamientos de Casa AMARA sin más escalones.',
      nl: 'Eén trede bij de hoofdingang. Daarna liggen alle ruimtes op één niveau — als enige van de vier Casa AMARA-verblijven zonder verdere treden.',
      sv: 'Ett trappsteg vid huvudentrén. Därefter ligger alla rum på samma plan — det enda av de fyra Casa AMARA-boendena utan fler trappsteg.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Tea kitchen with refrigerator',
      de: 'Teeküche mit Kühlschrank',
      es: 'Zona de café y té con frigorífico',
      nl: 'Kleine kitchenette met koelkast',
      sv: 'Pentry med kylskåp'
    },
    outdoorNote: {
      en: 'No private outdoor space',
      de: 'Kein privater Außenbereich',
      es: 'Sin espacio exterior privado',
      nl: 'Geen private buitenruimte',
      sv: 'Ingen privat uteplats'
    },
    viewNote: {
      en: 'Village street',
      de: 'Dorfstraße',
      es: 'Calle del pueblo',
      nl: 'Dorpsstraat',
      sv: 'Bygata'
    },
    images: [
      '/images/amara-farah/67-amara-frigiliana.jpg',
      '/images/amara-farah/65-amara-frigiliana.jpg',
      '/images/amara-farah/66-amara-frigiliana.jpg',
      '/images/amara-farah/68-amara-frigiliana.jpg',
      '/images/amara-farah/69-amara-frigiliana.jpg',
      '/images/amara-farah/72-amara-frigiliana.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-entrada.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-bonita-purta-de-madeira-farah.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-entrada-ii.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-entrada-iii.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-fuerra-ii.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-fuerra.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-guia-de-claves-ii.jpg',
      '/images/amara-entrada/casa-amara-frigiliana-guia-de-claves.jpg'
    ],
    imageAlt: {
      en: 'AMARA Farah self-contained boutique suite in Frigiliana',
      de: 'Abgeschlossene Boutique-Suite AMARA Farah in Frigiliana',
      es: 'Suite boutique independiente AMARA Farah en Frigiliana',
      nl: 'Zelfstandige boutique-suite AMARA Farah in Frigiliana',
      sv: 'Självständig boutique-svit AMARA Farah i Frigiliana'
    },
    amenityFeatures: withLicense('A/MA/01767', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'rainShower', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'kitchen', value: false },
      { name: 'petsAllowed', value: false }
    ])
  },
  {
    key: 'amara-lounis',
    token: 'lounis',
    bookingKey: 'lounis',
    slug: 'la-amara-lounis',
    identifier: 'amara-lodging-lounis',
    propertyId: 'lounis',
    name: 'AMARA Lounis',
    shortName: 'Lounis',
    additionalType: 'Apartment',
    accommodationType: 'EntirePlace',
    license: 'A/MA/01767',
    ...frigilianaAddress,
    bedrooms: 1,
    bathrooms: 1,
    rooms: 3,
    interiorAreaSqm: 70,
    exteriorAreaSqm: 39,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'Queen', label: '160 x 200' }],
    tvSizeInches: 40,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 90,
      indicativeTo: 180,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: true,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-lounis-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/632415709742535474'
    ],
    seoTitle: {
      en: 'Lounis: historic terrace apartment in Frigiliana | AMARA',
      de: 'Lounis: historisches Terrassenapartment in Frigiliana | AMARA',
      es: 'Lounis: apartamento histórico con terraza en Frigiliana | AMARA',
      nl: 'Lounis: historisch terrasappartement in Frigiliana | AMARA',
      sv: 'Lounis: historisk lägenhet med terrass i Frigiliana | AMARA'
    },
    seoDescription: {
      en: 'Lounis, the house’s largest apartment for 2: private terrace with an eight-metre historic well, Moorish walls and original floor tiles.',
      de: 'Lounis, das größte Apartment im Haus für 2: private Terrasse mit einem acht Meter tiefen historischen Brunnen, maurische Mauern und Originalfliesen.',
      es: 'Lounis, el apartamento más grande de la casa para 2: terraza privada con pozo histórico de ocho metros, muros andalusíes y baldosas originales.',
      nl: 'Lounis, het grootste appartement in huis voor 2: privéterras met acht meter diepe historische put, Moorse muren en originele vloertegels.',
      sv: 'Lounis, husets största lägenhet för 2: privat terrass med åtta meter djup historisk brunn, moriska murar och ursprungliga golvplattor.'
    },
    eyebrow: {
      en: 'Historic apartment',
      de: 'Historisches Apartment',
      es: 'Apartamento histórico',
      nl: 'Historisch appartement',
      sv: 'Historisk lägenhet'
    },
    headline: {
      en: '70 m², a private terrace and historic walls',
      de: '70 m², private Terrasse und historische Mauern',
      es: '70 m², terraza privada y muros históricos',
      nl: '70 m², een privéterras en historische muren',
      sv: '70 m², privat terrass och historiska murar'
    },
    lead: {
      en: 'Lounis is the largest apartment at Casa AMARA: 70 m² inside and a 39 m² private terrace. It has a full kitchen, historic walls and a secured eight-metre well.',
      de: 'Lounis ist die größte Wohnung in Casa AMARA: 70 m² innen und eine 39 m² große private Terrasse. Dazu kommen eine voll ausgestattete Küche, historische Mauern und ein gesicherter acht Meter tiefer Brunnen.',
      es: 'Lounis es el apartamento más grande de Casa AMARA: 70 m² interiores y una terraza privada de 39 m². Tiene cocina completa, muros históricos y un pozo protegido de ocho metros.',
      nl: 'Lounis is het grootste appartement van Casa AMARA: 70 m² binnen en een privéterras van 39 m². Het heeft een volledige keuken, historische muren en een beveiligde put van acht meter diep.',
      sv: 'Lounis är den största lägenheten i Casa AMARA: 70 m² inomhus och en privat terrass på 39 m². Här finns ett fullt kök, historiska murar och en säkrad åtta meter djup brunn.'
    },
    description: {
      en: 'The **private terrace** overlooks the mango and avocado groves towards the sea. It is shaded in the morning and sunny from around midday; outside you have a hammock, two loungers and a Moroccan-style shower.\n\nThe secured historic well still holds water but is not used as domestic or drinking water. During the 2020–2022 restoration, Moorish masonry and original floor tiles were uncovered and preserved.',
      de: 'Von der **privaten Terrasse** blickt ihr über Mango- und Avocadoplantagen bis zum Meer. Morgens liegt sie im Schatten, ab etwa Mittag in der Sonne; draußen stehen eine Hängematte, zwei Liegen und eine marokkanisch gestaltete Dusche bereit.\n\nDer gesicherte historische Brunnen führt noch Wasser, wird aber nicht als Haus- oder Trinkwasser genutzt. Bei der Restaurierung von 2020 bis 2022 kamen maurisches Mauerwerk und Originalfliesen zum Vorschein, die wir erhalten haben.',
      es: 'La **terraza privada** mira sobre las plantaciones de mango y aguacate hacia el mar. Por la mañana está en sombra y desde alrededor del mediodía recibe el sol; fuera tenéis hamaca, dos tumbonas y una ducha de estilo marroquí.\n\nEl pozo histórico protegido todavía contiene agua, pero no se utiliza como agua doméstica ni potable. Durante la restauración de 2020 a 2022 aparecieron muros andalusíes y baldosas originales que conservamos.',
      nl: 'Vanaf het **privéterras** kijken jullie over de mango- en avocadoplantages richting zee. ’s Ochtends ligt het in de schaduw en vanaf ongeveer het middaguur in de zon; buiten staan een hangmat, twee ligstoelen en een Marokkaans vormgegeven douche.\n\nDe beveiligde historische put bevat nog water, maar wordt niet gebruikt als huishoud- of drinkwater. Bij de restauratie van 2020 tot 2022 kwamen Moors metselwerk en originele vloertegels tevoorschijn, die we hebben behouden.',
      sv: 'Från den **privata terrassen** ser ni över mango- och avokadoodlingarna mot havet. På morgonen ligger den i skugga och från omkring middagstid i sol; ute finns en hängmatta, två solsängar och en marockanskt utformad dusch.\n\nDen säkrade historiska brunnen innehåller fortfarande vatten men används inte som hushålls- eller dricksvatten. Vid restaureringen 2020–2022 kom moriskt murverk och ursprungliga golvplattor fram, som vi bevarade.'
    },
    highlights: {
      en: ['Eight-metre private well and sheltered “cave” nook', 'Moorish walls and rediscovered original floor tiles', 'Sun from midday, cafés close by along Calle Real'],
      de: ['Acht Meter tiefer Privatbrunnen und geschützte „Höhle“', 'Maurische Mauern und wiederentdeckte Originalfliesen', 'Sonne ab Mittag, Cafés direkt an der Calle Real'],
      es: ['Pozo privado de ocho metros y rincón resguardado que llamamos «cueva»', 'Muros andalusíes y baldosas originales redescubiertas', 'Sol desde el mediodía y cafés muy cerca en la calle Real'],
      nl: ['Acht meter diepe privéput en beschutte “grot”', 'Moorse muren en teruggevonden originele vloertegels', 'Zon vanaf de middag, cafés vlakbij aan Calle Real'],
      sv: ['Åtta meter djup privat brunn och skyddad “grotta”', 'Moriska murar och återfunna ursprungliga golvplattor', 'Sol från middagstid, kaféer nära längs Calle Real']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 0,
      buildingEntranceSteps: 1,
      insideBuildingStepsToUnitOrLift: 0,
      internalStairs: 'few-down',
      lift: 'none',
      routeToVillageCore: 'step-free',
      parkingToUnit: 'not-provided',
      vehicleAccessHours: { until: '11:00', from: '17:00' }
    },
    accessNote: {
      en: 'One step at the main entrance, then a few down inside the apartment.',
      de: 'Eine Stufe am Haupteingang, im Apartment einige Stufen nach unten.',
      es: 'Un escalón en la entrada principal y algunos hacia abajo dentro del apartamento.',
      nl: 'Eén trede bij de hoofdingang, binnen enkele naar beneden.',
      sv: 'Ett trappsteg vid huvudentrén, sedan några nedåt inne i lägenheten.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: 'Private terrace',
      de: 'Private Terrasse',
      es: 'Terraza privada',
      nl: 'Privéterras',
      sv: 'Privat terrass'
    },
    viewNote: {
      en: 'Groves in front, sea beyond',
      de: 'Plantagen im Vordergrund, Meer dahinter',
      es: 'Plantaciones delante, mar al fondo',
      nl: 'Plantages op de voorgrond, zee daarachter',
      sv: 'Odlingar närmast, havet bortom'
    },
    images: [
      '/images/amara-lounis/104-amara-frigiliana.jpg',
      '/images/amara-lounis/09-amara-frigiliana.jpg',
      '/images/amara-lounis/15-amara-frigiliana.jpg',
      '/images/amara-lounis/17-amara-frigiliana.jpg',
      '/images/amara-lounis/18-amara-frigiliana.jpg',
      '/images/amara-lounis/20-amara-frigiliana.jpg',
      '/images/amara-lounis/21-amara-frigiliana.jpg',
      '/images/amara-lounis/28-amara-frigiliana.jpg',
      '/images/amara-lounis/01-amara-frigiliana.jpg',
      '/images/amara-lounis/04-amara-frigiliana.jpg',
      '/images/amara-lounis/05-amara-frigiliana.jpg',
      '/images/amara-lounis/10-amara-frigiliana.jpg',
      '/images/amara-lounis/11-amara-frigiliana.jpg',
      '/images/amara-lounis/12-amara-frigiliana.jpg',
      '/images/amara-lounis/13-amara-frigiliana.jpg',
      '/images/amara-lounis/14-amara-frigiliana.jpg',
      '/images/amara-lounis/16-amara-frigiliana.jpg',
      '/images/amara-lounis/19-amara-frigiliana.jpg',
      '/images/amara-lounis/22-amara-frigiliana.jpg',
      '/images/amara-lounis/23-amara-frigiliana.jpg',
      '/images/amara-lounis/25-amara-frigiliana.jpg',
      '/images/amara-lounis/26-amara-frigiliana.jpg',
      '/images/amara-lounis/110-amara-frigiliana.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-lounis-ducha-exterior.jpg'
    ],
    imageAlt: {
      en: 'AMARA Lounis historic apartment in Frigiliana',
      de: 'AMARA Lounis historisches Apartment in Frigiliana',
      es: 'Apartamento histórico AMARA Lounis en Frigiliana',
      nl: 'AMARA Lounis historisch appartement in Frigiliana',
      sv: 'AMARA Lounis historisk lägenhet i Frigiliana'
    },
    amenityFeatures: withLicense('A/MA/01767', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'doubleRainShower', value: true },
      { name: 'washingMachine', value: true },
      { name: 'pelletStove', value: true },
      { name: 'kitchen', value: true },
      { name: 'privatePatio', value: true },
      { name: 'privateTerrace', value: true },
      { name: 'sunLoungers', value: '2' },
      { name: 'hammock', value: true },
      { name: 'outdoorShower', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false }
    ])
  },
  {
    key: 'amara-zaid',
    token: 'zaid',
    bookingKey: 'zaid',
    slug: 'la-amara-zaid',
    identifier: 'amara-lodging-zaid',
    propertyId: 'zaid',
    name: 'AMARA Zaid',
    shortName: 'Zaid',
    additionalType: 'Apartment',
    accommodationType: 'EntirePlace',
    license: 'A/MA/01767',
    ...frigilianaAddress,
    bedrooms: 1,
    bathrooms: 1,
    rooms: 3,
    interiorAreaSqm: 33,
    exteriorAreaSqm: 20,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'King', label: '180 x 200' }],
    tvSizeInches: 40,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 90,
      indicativeTo: 180,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: true,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-zaid-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/643474398791611415'
    ],
    seoTitle: {
      en: 'Zaid: Frigiliana old town apartment, king bed | AMARA',
      de: 'Zaid: Altstadt-Apartment Frigiliana, Kingsize-Bett | AMARA',
      es: 'Zaid: apartamento en el casco antiguo de Frigiliana | AMARA',
      nl: 'Zaid: appartement oude kern Frigiliana, kingsize bed | AMARA',
      sv: 'Zaid: lägenhet i gamla Frigiliana, kingsize-säng | AMARA'
    },
    seoDescription: {
      en: 'Frigiliana old-town apartment for 2, one floor up: a wider view over the groves, private terrace, and a king bed at 180 × 200. Six steps from the door.',
      de: 'Apartment in Frigilianas Altstadt für 2, eine Etage höher: weiter Blick über die Plantagen, Terrasse und Kingsize-Bett 180 × 200. Sechs Stufen.',
      es: 'Apartamento en el casco antiguo de Frigiliana para 2, una planta más arriba: vistas más amplias, terraza y cama de 180 × 200. Seis escalones.',
      nl: 'Appartement in de oude kern van Frigiliana voor 2, een verdieping hoger: ruimer uitzicht, terras en kingsize bed 180 × 200. Zes treden.',
      sv: 'Lägenhet i gamla Frigiliana för 2, en våning upp: vidare utsikt över odlingarna, terrass och kingsize-säng 180 × 200. Sex trappsteg.'
    },
    eyebrow: {
      en: 'Private terrace, one floor higher',
      de: 'Private Terrasse, eine Etage höher',
      es: 'Terraza privada, una planta más arriba',
      nl: 'Privéterras, één verdieping hoger',
      sv: 'Privat terrass, en våning upp'
    },
    headline: {
      en: 'King bed and private terrace, one floor higher',
      de: 'Kingsize-Bett und private Terrasse, eine Etage höher',
      es: 'Cama king y terraza privada, una planta más arriba',
      nl: 'Kingsize bed en privéterras, één verdieping hoger',
      sv: 'Kingsize-säng och privat terrass, en våning upp'
    },
    lead: {
      en: 'Zaid sits one floor above Lounis. You have a 180 × 200 bed, a full kitchen and a private terrace overlooking the groves towards the sea. Six steps lead up to the apartment.',
      de: 'Zaid liegt eine Etage über Lounis. Ihr habt ein 180 × 200 cm großes Bett, eine voll ausgestattete Küche und eine private Terrasse mit Blick über die Plantagen bis zum Meer. Zur Wohnung führen sechs Stufen.',
      es: 'Zaid está una planta por encima de Lounis. Tenéis una cama de 180 × 200 cm, cocina completa y terraza privada con vistas sobre el campo hacia el mar. Seis escalones llevan hasta el apartamento.',
      nl: 'Zaid ligt één verdieping boven Lounis. Jullie hebben een bed van 180 × 200 cm, een volledige keuken en een privéterras met uitzicht over de plantages richting zee. Zes treden leiden naar het appartement.',
      sv: 'Zaid ligger en våning ovanför Lounis. Ni har en säng på 180 × 200 cm, ett fullt kök och en privat terrass med utsikt över odlingarna mot havet. Sex trappsteg leder upp till lägenheten.'
    },
    description: {
      en: 'From the terrace, the same view as the floor below, only further: the mango and avocado groves of Frigiliana Campo, the sea behind them. Sun arrives around midday and stays until evening — mornings the terrace is in shade. Zaid was built onto Lounis centuries later, and part of that older structure is still in its walls.',
      de: 'Von der Terrasse derselbe Blick wie eine Etage tiefer, nur weiter: die Mango- und Avocadoplantagen des Frigiliana Campo, dahinter das Meer. Die Sonne kommt gegen zwölf und bleibt bis zum Abend – morgens liegt die Terrasse im Schatten. Zaid wurde Jahrhunderte nach Lounis auf dessen Mauern gesetzt; ein Teil der alten Bausubstanz steckt noch darin.',
      es: 'Desde la terraza, la misma vista que un piso más abajo, solo que más lejos: las plantaciones de mango y aguacate del campo de Frigiliana, y el mar al fondo. El sol llega hacia el mediodía y se queda hasta la tarde; por la mañana la terraza está en sombra. Zaid se construyó sobre Lounis siglos después, y parte de aquella fábrica antigua sigue en sus muros.',
      nl: 'Vanaf het terras hetzelfde uitzicht als een verdieping lager, alleen verder: de mango- en avocadoplantages van het Frigiliana Campo, met de zee daarachter. De zon komt rond het middaguur en blijft tot de avond; ’s ochtends ligt het terras in de schaduw. Zaid werd eeuwen later op Lounis gebouwd, en een deel van dat oude metselwerk zit nog in de muren.',
      sv: 'Från terrassen samma utsikt som våningen under, fast längre: mango- och avokadoodlingarna i Frigiliana Campo, med havet bakom. Solen kommer vid tolvtiden och stannar till kvällen; på morgonen ligger terrassen i skugga. Zaid byggdes ovanpå Lounis århundraden senare, och en del av det gamla murverket finns kvar i väggarna.'
    },
    highlights: {
      en: ['One floor up, further view', 'Widest bed in the house, 180 × 200', 'Terrace over the groves'],
      de: ['Eine Etage höher, weiterer Blick', 'Breitestes Bett im Haus, 180 × 200', 'Terrasse über den Plantagen'],
      es: ['Una planta más arriba, vista más amplia', 'La cama más ancha de la casa, 180 × 200', 'Terraza sobre el campo'],
      nl: ['Een verdieping hoger, verder uitzicht', 'Breedste bed van het huis, 180 × 200', 'Terras boven de plantages'],
      sv: ['En våning upp, vidare utsikt', 'Husets bredaste säng, 180 × 200', 'Terrass över odlingarna']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 0,
      buildingEntranceSteps: 1,
      insideBuildingStepsToUnitOrLift: 6,
      internalStairs: 'none',
      lift: 'none',
      routeToVillageCore: 'step-free',
      parkingToUnit: 'not-provided',
      vehicleAccessHours: { until: '11:00', from: '17:00' }
    },
    accessNote: {
      en: 'One step at the main entrance, six more up to the apartment.',
      de: 'Eine Stufe am Haupteingang, sechs weitere bis zur Wohnung.',
      es: 'Un escalón en la entrada principal y seis más hasta el apartamento.',
      nl: 'Eén trede bij de hoofdingang, zes verder omhoog naar het appartement.',
      sv: 'Ett trappsteg vid huvudentrén, sex till upp till lägenheten.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: 'Private terrace',
      de: 'Private Terrasse',
      es: 'Terraza privada',
      nl: 'Privéterras',
      sv: 'Privat terrass'
    },
    viewNote: {
      en: 'Groves in front, sea beyond — from one floor higher',
      de: 'Plantagen im Vordergrund, Meer dahinter – eine Etage höher',
      es: 'Plantaciones delante, mar al fondo, desde una planta más alta',
      nl: 'Plantages op de voorgrond, zee daarachter, een verdieping hoger',
      sv: 'Odlingar närmast, havet bortom — från en våning högre'
    },
    images: [
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano-3.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina-3.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-3.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-4.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-escalera.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-escritorio.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-3.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-4.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-6.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-zaid-ducha-exterior.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-zaid-ducha-exterior-ii.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-zaid-ducha-exterior-iii.jpg'
    ],
    imageAlt: {
      en: 'AMARA Zaid terrace apartment in Frigiliana',
      de: 'AMARA Zaid Terrassenapartment in Frigiliana',
      es: 'Apartamento con terraza AMARA Zaid en Frigiliana',
      nl: 'AMARA Zaid terrasappartement in Frigiliana',
      sv: 'AMARA Zaid terrasslägenhet i Frigiliana'
    },
    amenityFeatures: withLicense('A/MA/01767', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'doubleRainShower', value: true },
      { name: 'washingMachine', value: true },
      { name: 'pelletStove', value: true },
      { name: 'kitchen', value: true },
      { name: 'privateTerrace', value: true },
      { name: 'sunLoungers', value: '2' },
      { name: 'hammock', value: true },
      { name: 'outdoorShower', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false }
    ])
  },
  {
    key: 'amara-maha',
    token: 'maha',
    bookingKey: 'maha',
    slug: 'la-amara-maha',
    identifier: 'amara-lodging-maha',
    propertyId: 'maha',
    name: 'AMARA Maha',
    shortName: 'Maha',
    additionalType: 'Apartment',
    accommodationType: 'EntirePlace',
    license: 'A/MA/01767',
    ...frigilianaAddress,
    bedrooms: 1,
    bathrooms: 1,
    rooms: 3,
    interiorAreaSqm: 35,
    exteriorAreaSqm: 64,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'Double', label: '150 x 200' }],
    tvSizeInches: 40,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 90,
      indicativeTo: 180,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: true,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-maha-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/643486091667223317'
    ],
    seoTitle: {
      en: 'Maha: Frigiliana apartment with a 64 m² terrace | AMARA',
      de: 'Maha: Apartment mit 64 m² Terrasse, Frigiliana | AMARA',
      es: 'Maha: apartamento en Frigiliana con terraza de 64 m² | AMARA',
      nl: 'Maha: appartement Frigiliana met terras van 64 m² | AMARA',
      sv: 'Maha: lägenhet i Frigiliana med 64 m² terrass | AMARA'
    },
    seoDescription: {
      en: 'A 64 m² terrace with an outdoor kitchen, highest in the house: a Frigiliana apartment for 2 with the widest view.',
      de: '64 m² Terrasse mit Außenküche, ganz oben im Haus: Ferienwohnung in Frigiliana für 2 mit der weitesten Aussicht.',
      es: 'Terraza de 64 m² con cocina exterior, en lo más alto de la casa: apartamento en Frigiliana para 2 con las vistas más amplias.',
      nl: 'Terras van 64 m² met buitenkeuken, het hoogst in huis: appartement in Frigiliana voor 2 met het verste uitzicht.',
      sv: '64 m² terrass med utekök, högst upp i huset: lägenhet i Frigiliana för 2 med den vidaste utsikten.'
    },
    eyebrow: {
      en: 'Large private terrace',
      de: 'Große private Terrasse',
      es: 'Gran terraza privada',
      nl: 'Groot privéterras',
      sv: 'Stor privat terrass'
    },
    headline: {
      en: '64 m² private terrace with an outdoor kitchen',
      de: '64 m² private Terrasse mit Außenküche',
      es: 'Terraza privada de 64 m² con cocina exterior',
      nl: 'Privéterras van 64 m² met buitenkeuken',
      sv: '64 m² privat terrass med utekök'
    },
    lead: {
      en: 'Choose Maha if outdoor space matters most: a 64 m² private terrace, outdoor kitchen, hammock and two loungers. Inside there is a 150 × 200 bed, but no washing machine.',
      de: 'Maha passt zu euch, wenn euch viel Platz draußen wichtig ist: 64 m² private Terrasse, Außenküche, Hängematte und zwei Liegen. Drinnen gibt es ein 150 × 200 cm großes Bett, aber keine Waschmaschine.',
      es: 'Maha os encaja si lo más importante es el espacio exterior: terraza privada de 64 m², cocina exterior, hamaca y dos tumbonas. Dentro hay una cama de 150 × 200 cm, pero no lavadora.',
      nl: 'Kies Maha als veel buitenruimte het belangrijkst is: een privéterras van 64 m², buitenkeuken, hangmat en twee ligstoelen. Binnen staat een bed van 150 × 200 cm, maar er is geen wasmachine.',
      sv: 'Välj Maha om gott om uteplats är viktigast: en privat terrass på 64 m², utekök, hängmatta och två solsängar. Inne finns en säng på 150 × 200 cm, men ingen tvättmaskin.'
    },
    description: {
      en: 'Here the terrace is the actual living room. All three AMARA terrace apartments have a hammock, two loungers and an outdoor shower — but Maha gives you more room around them, plus an outdoor kitchen the others do not have. Maha sits highest in the house and has the widest view. In exchange the bed is 150 centimetres, narrower than in Lounis or Zaid, and there is no washing machine.',
      de: 'Die Terrasse ist hier das eigentliche Wohnzimmer. Hängematte, zwei Liegen und Außendusche gibt es in allen drei AMARA-Apartments mit Terrasse – bei Maha aber mit mehr Platz und dazu einer Außenküche, die es sonst nirgends gibt. Maha liegt am höchsten im Haus und hat die weiteste Aussicht. Dafür ist das Bett mit 150 Zentimetern schmaler als in Lounis oder Zaid, und eine Waschmaschine gibt es nicht.',
      es: 'Aquí la terraza es el verdadero salón. Los tres apartamentos AMARA con terraza tienen hamaca, dos tumbonas y ducha exterior; en Maha, además, hay mucho más espacio y una cocina exterior que no tiene ningún otro. Maha está en lo más alto de la casa y ofrece las vistas más amplias. A cambio, la cama mide 150 centímetros, es más estrecha que la de Lounis o Zaid y no hay lavadora.',
      nl: 'Hier is het terras de eigenlijke woonkamer. Alle drie de AMARA-appartementen met terras hebben een hangmat, twee ligbedden en een buitendouche — bij Maha staat er veel meer ruimte omheen en is er bovendien een buitenkeuken die de andere niet hebben. Maha ligt het hoogst in het huis en heeft het verste uitzicht. Daar staat tegenover dat het bed 150 centimeter breed is, smaller dan in Lounis of Zaid, en dat er geen wasmachine is.',
      sv: 'Här är terrassen det egentliga vardagsrummet. Alla tre AMARA-lägenheter med terrass har hängmatta, två solsängar och utedusch — hos Maha finns det mycket mer plats runt dem, plus ett utekök som de andra saknar. Maha ligger högst i huset och har den vidaste utsikten. I gengäld är sängen 150 centimeter, smalare än i Lounis och Zaid, och någon tvättmaskin finns inte.'
    },
    highlights: {
      en: ['64 m² terrace, open to the sky', 'Outdoor kitchen for cooking outside', 'The widest view in the house'],
      de: ['64 m² Terrasse unter freiem Himmel', 'Außenküche zum Kochen im Freien', 'Die weiteste Aussicht im Haus'],
      es: ['Terraza de 64 m² abierta al cielo', 'Cocina exterior para cocinar fuera', 'Las vistas más amplias de la casa'],
      nl: ['Terras van 64 m², open naar de hemel', 'Buitenkeuken om buiten te koken', 'Het verste uitzicht van het huis'],
      sv: ['64 m² terrass under bar himmel', 'Utekök för matlagning utomhus', 'Husets vidaste utsikt']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 0,
      buildingEntranceSteps: 1,
      insideBuildingStepsToUnitOrLift: 6,
      internalStairs: 'few',
      lift: 'none',
      routeToVillageCore: 'step-free',
      parkingToUnit: 'not-provided',
      vehicleAccessHours: { until: '11:00', from: '17:00' }
    },
    accessNote: {
      en: 'One step at the main entrance, six up to the apartment, a few more inside.',
      de: 'Eine Stufe am Haupteingang, sechs bis zur Wohnung, einige weitere im Apartment.',
      es: 'Un escalón en la entrada principal, seis hasta el apartamento y algunos más dentro.',
      nl: 'Eén trede bij de hoofdingang, zes tot het appartement en binnen nog enkele.',
      sv: 'Ett trappsteg vid huvudentrén, sex upp till lägenheten och några till inne.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: '64 m² terrace with outdoor kitchen',
      de: '64 m² Terrasse mit Außenküche',
      es: 'Terraza de 64 m² con cocina exterior',
      nl: 'Terras van 64 m² met buitenkeuken',
      sv: '64 m² terrass med utekök'
    },
    viewNote: {
      en: 'Groves and sea, from the top of the house',
      de: 'Plantagen und Meer, von ganz oben im Haus',
      es: 'Campo y mar, desde lo más alto de la casa',
      nl: 'Plantages en zee, vanaf het hoogste punt van het huis',
      sv: 'Odlingar och hav, från husets högsta punkt'
    },
    images: [
      '/images/amara-maha/29-amara-frigiliana.jpg',
      '/images/amara-maha/30-amara-frigiliana.jpg',
      '/images/amara-maha/31-amara-frigiliana.jpg',
      '/images/amara-maha/35-amara-frigiliana.jpg',
      '/images/amara-maha/38-amara-frigiliana.jpg',
      '/images/amara-maha/40-amara-frigiliana.jpg',
      '/images/amara-maha/42-amara-frigiliana.jpg',
      '/images/amara-maha/91-amara-frigiliana.jpg',
      '/images/amara-maha/32-amara-frigiliana.jpg',
      '/images/amara-maha/33-amara-frigiliana.jpg',
      '/images/amara-maha/34-amara-frigiliana.jpg',
      '/images/amara-maha/36-amara-frigiliana.jpg',
      '/images/amara-maha/37-amara-frigiliana.jpg',
      '/images/amara-maha/39-amara-frigiliana.jpg',
      '/images/amara-maha/41-amara-frigiliana.jpg',
      '/images/amara-maha/43-amara-frigiliana.jpg',
      '/images/amara-maha/44-amara-frigiliana.jpg',
      '/images/amara-maha/45-amara-frigiliana.jpg',
      '/images/amara-maha/46-amara-frigiliana.jpg',
      '/images/amara-maha/88-amara-frigiliana.jpg',
      '/images/amara-maha/109-amara-frigiliana.jpg',
      '/images/amara-maha/111-amara-frigiliana.jpg',
      '/images/amara-maha/112-amara-frigiliana.jpg',
      '/images/amara-insta-facebook/casa-amara-frigiliana-maha-chimenea.jpg'
    ],
    imageAlt: {
      en: 'AMARA Maha apartment with large terrace in Frigiliana',
      de: 'AMARA Maha Apartment mit großer Terrasse in Frigiliana',
      es: 'Apartamento AMARA Maha con gran terraza en Frigiliana',
      nl: 'AMARA Maha appartement met groot terras in Frigiliana',
      sv: 'AMARA Maha lägenhet med stor terrass i Frigiliana'
    },
    amenityFeatures: withLicense('A/MA/01767', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'rainShower', value: true },
      { name: 'pelletStove', value: true },
      { name: 'kitchen', value: true },
      { name: 'privateTerrace', value: true },
      { name: 'sunLoungers', value: '2' },
      { name: 'hammock', value: true },
      { name: 'outdoorShower', value: true },
      { name: 'outdoorGrill', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false }
    ])
  },
  {
    key: 'amara-playa',
    token: 'playa',
    bookingKey: 'playa',
    slug: 'la-amara-playa',
    identifier: 'amara-lodging-playa',
    propertyId: 'playa',
    name: 'AMARA Playa',
    shortName: 'Playa',
    additionalType: 'Apartment',
    accommodationType: 'EntirePlace',
    license: 'VFT/MA/19212',
    street: 'Calle Castilla Perez 60',
    city: 'Nerja',
    zip: '29780',
    region: 'Andalusia',
    country: 'ES',
    latitude: 36.743558,
    longitude: -3.88052,
    addressNote: {
      en: 'AMARA Playa is around 200 metres from Torrecilla beach and around 500 metres from the Balcón de Europa. The sea, the heart of Nerja, restaurants and shops are all easy to reach on foot, while the apartment itself remains pleasantly quiet.',
      de: 'AMARA Playa liegt rund 200 Meter vom Strand Torrecilla und etwa 500 Meter vom Balcón de Europa entfernt. Das Meer, das Herz von Nerja, Restaurants und Geschäfte sind bequem zu Fuß erreichbar – gleichzeitig wohnt ihr hier angenehm ruhig.',
      es: 'AMARA Playa está a unos 200 metros de la playa de Torrecilla y a unos 500 metros del Balcón de Europa. El mar, el corazón de Nerja, los restaurantes y las tiendas quedan a un paseo cómodo, mientras el apartamento se mantiene agradablemente tranquilo.',
      nl: 'AMARA Playa ligt op ongeveer 200 meter van het Torrecilla-strand en circa 500 meter van het Balcón de Europa. De zee, het hart van Nerja, restaurants en winkels zijn gemakkelijk te voet bereikbaar, terwijl het appartement zelf aangenaam rustig blijft.',
      sv: 'AMARA Playa ligger cirka 200 meter från Torrecillastranden och omkring 500 meter från Balcón de Europa. Havet, Nerjas hjärta, restauranger och butiker nås enkelt till fots, samtidigt som lägenheten är behagligt lugn.'
    },
    bedrooms: 1,
    bathrooms: 1,
    rooms: 2,
    interiorAreaSqm: 37,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'King', label: '200 x 200' }],
    tvSizeInches: 50,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 90,
      indicativeTo: 180,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: false,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/cozy-apartment-next-to-the-beach-and-nerja-center.de.html',
      'https://www.airbnb.com/rooms/52215543'
    ],
    seoTitle: {
      en: 'Playa: Nerja apartment, 200 m from the beach | AMARA',
      de: 'Playa: Apartment 200 m vom Strand, Nerja | AMARA',
      es: 'Playa: apartamento en Nerja a 200 m de la playa | AMARA',
      nl: 'Playa: appartement Nerja, 200 m van het strand | AMARA',
      sv: 'Playa: lägenhet i Nerja, 200 m från stranden | AMARA'
    },
    seoDescription: {
      en: 'AMARA Playa in Nerja: 200 m to Torrecilla beach, 500 m to the Balcón de Europa, and still quiet. Small apartment for 2 on the fifth floor, with a lift.',
      de: 'AMARA Playa in Nerja: 200 m zum Strand Torrecilla, 500 m zum Balcón de Europa – und trotzdem ruhig. Kleines Apartment für 2 im fünften Stock, mit Aufzug.',
      es: 'AMARA Playa en Nerja: a 200 m de la playa de Torrecilla y 500 m del Balcón de Europa. Apartamento tranquilo para 2 en la quinta planta, con ascensor.',
      nl: 'AMARA Playa in Nerja: 200 m van het Torrecilla-strand en 500 m van het Balcón de Europa. Rustig appartement voor 2 op de vijfde verdieping, met lift.',
      sv: 'AMARA Playa i Nerja: 200 m till Torrecillastranden, 500 m till Balcón de Europa — och ändå tyst. Liten lägenhet för 2 på femte våningen, med hiss.'
    },
    eyebrow: {
      en: 'Nerja coast',
      de: 'Küste von Nerja',
      es: 'Costa de Nerja',
      nl: 'Kust van Nerja',
      sv: 'Nerjas kust'
    },
    headline: {
      en: '200 metres from the beach, with a balcony and 200 × 200 bed',
      de: '200 Meter zum Strand, mit Balkon und 200 × 200 cm Bett',
      es: 'A 200 metros de la playa, con balcón y cama de 200 × 200 cm',
      nl: '200 meter van het strand, met balkon en bed van 200 × 200 cm',
      sv: '200 meter från stranden, med balkong och säng på 200 × 200 cm'
    },
    lead: {
      en: 'Playa is a compact fifth-floor apartment around 200 metres from Torrecilla beach. It has a full kitchen, washing machine, balcony and lift; ten steps lead to the lift.',
      de: 'Playa ist ein kompaktes Apartment im fünften Stock, rund 200 Meter vom Strand Torrecilla entfernt. Es hat eine voll ausgestattete Küche, Waschmaschine, Balkon und Aufzug; bis zum Aufzug sind zehn Stufen zu überwinden.',
      es: 'Playa es un apartamento compacto en la quinta planta, a unos 200 metros de la playa de Torrecilla. Tiene cocina completa, lavadora, balcón y ascensor; hay diez escalones hasta llegar al ascensor.',
      nl: 'Playa is een compact appartement op de vijfde verdieping, op ongeveer 200 meter van het Torrecilla-strand. Het heeft een volledige keuken, wasmachine, balkon en lift; tot aan de lift zijn er tien treden.',
      sv: 'Playa är en kompakt lägenhet på femte våningen, cirka 200 meter från Torrecillastranden. Här finns fullt kök, tvättmaskin, balkong och hiss; tio trappsteg leder fram till hissen.'
    },
    description: {
      en: 'At 37 m², Playa is one of our smaller apartments. The fifth-floor position gives you a side sea view from the balcony and keeps the apartment away from most street noise. The 200 × 200 bed is the largest in any AMARA stay.',
      de: 'Mit 37 m² gehört Playa zu unseren kleineren Apartments. Durch die Lage im fünften Stock habt ihr vom Balkon einen seitlichen Meerblick und seid weit vom meisten Straßenlärm entfernt. Das 200 × 200 cm große Bett ist das größte in einer AMARA-Unterkunft.',
      es: 'Con 37 m², Playa es uno de nuestros apartamentos más pequeños. La quinta planta ofrece vistas laterales al mar desde el balcón y aleja el alojamiento de gran parte del ruido de la calle. La cama de 200 × 200 cm es la más grande de AMARA.',
      nl: 'Met 37 m² is Playa een van onze kleinere appartementen. Door de ligging op de vijfde verdieping hebben jullie vanaf het balkon zijdelings zeezicht en blijft het meeste straatgeluid op afstand. Het bed van 200 × 200 cm is het grootste van alle AMARA-verblijven.',
      sv: 'Med 37 m² är Playa en av våra mindre lägenheter. Läget på femte våningen ger havsutsikt från sidan från balkongen och håller det mesta gatuljudet på avstånd. Sängen på 200 × 200 cm är den största i något AMARA-boende.'
    },
    highlights: {
      en: ['Side sea view from the balcony', 'Quiet on the fifth floor, with a lift', 'Largest AMARA bed, 200 × 200'],
      de: ['Seitlicher Meerblick vom Balkon', 'Ruhig im fünften Stock, mit Aufzug', 'Größtes AMARA-Bett, 200 × 200'],
      es: ['Vistas laterales al mar desde el balcón', 'Tranquilo en la quinta planta, con ascensor', 'La cama AMARA más grande, 200 × 200'],
      nl: ['Zijdelings zeezicht vanaf het balkon', 'Rustig op de vijfde verdieping, met lift', 'Grootste AMARA-bed, 200 × 200'],
      sv: ['Havsutsikt från sidan, från balkongen', 'Tyst på femte våningen, med hiss', 'Största AMARA-sängen, 200 × 200']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 5,
      buildingEntranceSteps: 0,
      insideBuildingStepsToUnitOrLift: 5,
      internalStairs: 'none',
      lift: 'to-floor',
      routeToVillageCore: 'not-verified',
      parkingToUnit: 'not-provided'
    },
    accessNote: {
      en: 'Lift to the fifth floor. Before it, five steps outside the building and another five inside.',
      de: 'Aufzug in den fünften Stock. Davor fünf Stufen vor dem Gebäude und weitere fünf im Haus.',
      es: 'Ascensor hasta la quinta planta. Antes, cinco escalones fuera del edificio y otros cinco dentro.',
      nl: 'Lift naar de vijfde verdieping. Daarvoor vijf treden buiten het gebouw en nog eens vijf binnen.',
      sv: 'Hiss till femte våningen. Dessförinnan fem trappsteg utanför huset och ytterligare fem inne.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: 'Balcony',
      de: 'Balkon',
      es: 'Balcón',
      nl: 'Balkon',
      sv: 'Balkong'
    },
    viewNote: {
      en: 'Side sea view from the balcony',
      de: 'Seitlicher Meerblick vom Balkon',
      es: 'Vistas laterales al mar desde el balcón',
      nl: 'Zijdelings zeezicht vanaf het balkon',
      sv: 'Havsutsikt från sidan, från balkongen'
    },
    images: [
      '/images/amara-playa/apartment/chaparril-13.webp',
      '/images/amara-playa/apartment/chaparril-01.webp',
      '/images/amara-playa/apartment/chaparril-02.webp',
      '/images/amara-playa/apartment/chaparril-03.webp',
      '/images/amara-playa/apartment/chaparril-04.webp',
      '/images/amara-playa/apartment/chaparril-05.webp',
      '/images/amara-playa/apartment/chaparril-06.webp',
      '/images/amara-playa/apartment/chaparril-07.webp',
      '/images/amara-playa/apartment/chaparril-08.webp',
      '/images/amara-playa/apartment/chaparril-09.webp',
      '/images/amara-playa/apartment/chaparril-10.webp',
      '/images/amara-playa/apartment/chaparril-11.webp',
      '/images/amara-playa/apartment/chaparril-12.webp',
      '/images/amara-playa/apartment/chaparril-14.webp',
      '/images/amara-playa/apartment/chaparril-15.webp',
      '/images/amara-playa/apartment/chaparril-16.webp',
      '/images/amara-playa/apartment/chaparril-17.webp',
      '/images/amara-playa/apartment/chaparril-18.webp',
      '/images/amara-playa/apartment/chaparril-19.webp',
      '/images/amara-playa/apartment/chaparril-20.webp',
      '/images/amara-playa/apartment/chaparril-21.webp',
      '/images/amara-playa/apartment/chaparril-22.webp',
      '/images/amara-playa/apartment/chaparril-23.webp',
      '/images/amara-playa/apartment/chaparril-24.webp'
    ],
    imageAlt: {
      en: 'AMARA Playa Nerja beach apartment with sea view',
      de: 'AMARA Playa Strandapartment in Nerja mit Meerblick',
      es: 'Apartamento AMARA Playa en Nerja con vistas al mar',
      nl: 'AMARA Playa strandappartement in Nerja met zeezicht',
      sv: 'AMARA Playa strandlägenhet i Nerja med havsutsikt'
    },
    amenityFeatures: withLicense('VFT/MA/19212', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'rainShower', value: true },
      { name: 'washingMachine', value: true },
      { name: 'kitchen', value: true },
      { name: 'balcony', value: true },
      { name: 'beachAccess', value: true },
      { name: 'elevator', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false }
    ])
  },
  {
    key: 'amara-family-surf',
    token: 'tarifa',
    bookingKey: 'tarifa',
    slug: 'la-amara-family-and-surf',
    identifier: 'amara-lodging-family-surf',
    propertyId: 'tarifa',
    name: 'AMARA Family & Surf',
    shortName: 'Family & Surf',
    additionalType: 'House',
    accommodationType: 'EntirePlace',
    license: 'VFT/CA/17038',
    street: 'Calle Mar Adriatico 29',
    city: 'Tarifa',
    zip: '11380',
    region: 'Andalusia',
    country: 'ES',
    latitude: 36.02381,
    longitude: -5.611906,
    addressNote: {
      en: 'AMARA Family & Surf is on Tarifa’s western edge, around 500 metres from the kilometre-long Los Lances beach and about a 10–15-minute walk from the Old Town. From here, you can reach the centre easily on foot and leave Tarifa quickly by car; a private underground parking space belongs to the apartment. A supermarket is directly opposite, Helena’s Kitchen is in the building, and the apartment is part of a modern residential complex.',
      de: 'AMARA Family & Surf liegt am westlichen Rand von Tarifa, rund 500 Meter vom kilometerlangen Strand Los Lances und etwa 10–15 Gehminuten von der Altstadt entfernt. Von hier erreicht ihr das Zentrum bequem zu Fuß und seid mit dem Auto schnell aus Tarifa heraus; zur Wohnung gehört ein privater Tiefgaragenstellplatz. Ein Supermarkt liegt direkt gegenüber, Helena’s Kitchen befindet sich im Gebäude, und die Wohnung ist Teil einer modernen Wohnanlage.',
      es: 'AMARA Family & Surf está en el extremo oeste de Tarifa, a unos 500 metros de la extensa playa de Los Lances y a unos 10–15 minutos a pie del casco antiguo. Desde aquí se llega cómodamente al centro andando y se sale rápidamente de Tarifa en coche; el apartamento incluye una plaza privada en el garaje subterráneo. Hay un supermercado justo enfrente, Helena’s Kitchen está en el mismo edificio y el apartamento forma parte de un complejo residencial moderno.',
      nl: 'AMARA Family & Surf ligt aan de westelijke rand van Tarifa, op ongeveer 500 meter van het kilometerslange strand Los Lances en circa 10–15 minuten lopen van de oude stad. Het centrum is gemakkelijk te voet bereikbaar en met de auto zijn jullie snel de stad uit; bij het appartement hoort een eigen ondergrondse parkeerplaats. Er ligt een supermarkt direct aan de overkant, Helena’s Kitchen bevindt zich in het gebouw en het appartement maakt deel uit van een modern wooncomplex.',
      sv: 'AMARA Family & Surf ligger i Tarifas västra utkant, cirka 500 meter från den kilometerlånga stranden Los Lances och ungefär 10–15 minuters promenad från gamla stan. Centrum nås enkelt till fots och med bil kommer ni snabbt ut ur Tarifa; en privat plats i underjordiskt garage hör till lägenheten. En mataffär ligger direkt mittemot, Helena’s Kitchen finns i byggnaden och lägenheten ingår i ett modernt bostadskomplex.'
    },
    bedrooms: 2,
    bathrooms: 2,
    rooms: 4,
    interiorAreaSqm: 75,
    exteriorAreaSqm: 12,
    occupancy: 4,
    bed: [
      { numberOfBeds: 1, typeOfBed: 'Double', label: '150 x 200' },
      { numberOfBeds: 2, typeOfBed: 'Single', label: 'Bunk bed' }
    ],
    tvSizeInches: 60,
    pricing: {
      currency: 'EUR',
      indicativeFrom: 140,
      indicativeTo: 350,
      lastVerified: '2026-08-17'
    },
    bathroomUnderfloorHeating: false,
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/surfers-home-with-oceanview-and-pool.de.html',
      'https://www.airbnb.com/rooms/803371111851036443'
    ],
    seoTitle: {
      en: 'Family & Surf: Tarifa with Pool & Parking | AMARA',
      de: 'Family & Surf: Tarifa mit Pool & Garage | AMARA',
      es: 'Family & Surf: Tarifa con piscina y garaje | AMARA',
      nl: 'Family & Surf: Tarifa met zwembad en garage | AMARA',
      sv: 'Family & Surf: Tarifa med pool och garage | AMARA'
    },
    seoDescription: {
      en: 'A spacious Tarifa stay for two or parents with younger children, with Atlantic terrace, shared pool and underground parking. Kitesurfing can be arranged before arrival.',
      de: 'Großzügige Tarifa-Unterkunft für zwei oder Eltern mit jüngeren Kindern, mit Atlantikterrasse, Gemeinschaftspool und Tiefgarage. Kitesurfen kann vorab organisiert werden.',
      es: 'Alojamiento amplio en Tarifa para dos o para padres con niños pequeños, con terraza al Atlántico, piscina comunitaria y garaje. El kitesurf puede organizarse antes de llegar.',
      nl: 'Ruim verblijf in Tarifa voor twee of ouders met jonge kinderen, met Atlantisch terras, gedeeld zwembad en eigen garage. Kitesurfen kan vooraf worden geregeld.',
      sv: 'Rymligt boende i Tarifa för två eller föräldrar med yngre barn, med Atlantterrass, gemensam pool och eget garage. Kitesurfing kan ordnas före ankomsten.'
    },
    eyebrow: {
      en: 'Tarifa · Atlantic terrace and pool',
      de: 'Tarifa · Atlantikterrasse und Pool',
      es: 'Tarifa · Terraza atlántica y piscina',
      nl: 'Tarifa · Atlantisch terras en zwembad',
      sv: 'Tarifa · Atlantterrass och pool'
    },
    headline: {
      en: 'Two bedrooms, pool and garage in Tarifa',
      de: 'Zwei Schlafzimmer, Pool und Garage in Tarifa',
      es: 'Dos dormitorios, piscina y garaje en Tarifa',
      nl: 'Twee slaapkamers, zwembad en garage in Tarifa',
      sv: 'Två sovrum, pool och garage i Tarifa'
    },
    lead: {
      en: '75 m² over two levels, with two bedrooms, two bathrooms, a private Atlantic-facing terrace, shared pool and reserved underground parking. The layout works best for two adults with one or two younger children.',
      de: '75 m² auf zwei Ebenen, mit zwei Schlafzimmern, zwei Bädern, privater Terrasse zum Atlantik, Gemeinschaftspool und reserviertem Tiefgaragenplatz. Die Aufteilung passt am besten für zwei Erwachsene mit einem oder zwei jüngeren Kindern.',
      es: '75 m² en dos niveles, con dos dormitorios, dos baños, terraza privada orientada al Atlántico, piscina comunitaria y plaza reservada en el garaje. La distribución funciona mejor para dos adultos con uno o dos niños pequeños.',
      nl: '75 m² over twee niveaus, met twee slaapkamers, twee badkamers, een privéterras aan de Atlantische Oceaan, een gedeeld zwembad en een gereserveerde garageplaats. De indeling past het best bij twee volwassenen met een of twee jonge kinderen.',
      sv: '75 m² i två plan, med två sovrum, två badrum, privat terrass mot Atlanten, gemensam pool och reserverad garageplats. Planlösningen passar bäst för två vuxna med ett eller två yngre barn.'
    },
    description: {
      en: 'The main bedroom has a 150 × 200 cm double bed; the second bedroom has a bunk bed with two single sleeping places. Both bedrooms are upstairs. The apartment also has two bathrooms, a large kitchen and lift access to the front door.',
      de: 'Im Hauptschlafzimmer steht ein 150 × 200 cm großes Doppelbett, im zweiten Schlafzimmer ein Hochbett mit zwei einzelnen Schlafplätzen. Beide Schlafzimmer liegen oben. Außerdem gibt es zwei Bäder, eine große Küche und einen Aufzug bis vor die Wohnungstür.',
      es: 'El dormitorio principal tiene una cama doble de 150 × 200 cm; el segundo, una litera con dos camas individuales. Ambos dormitorios están arriba. El apartamento también cuenta con dos baños, cocina amplia y ascensor hasta la puerta.',
      nl: 'In de hoofdslaapkamer staat een tweepersoonsbed van 150 × 200 cm; de tweede slaapkamer heeft een stapelbed met twee aparte slaapplaatsen. Beide slaapkamers liggen boven. Verder zijn er twee badkamers, een ruime keuken en een lift tot aan de voordeur.',
      sv: 'I huvudsovrummet finns en dubbelsäng på 150 × 200 cm; det andra sovrummet har en våningssäng med två separata sovplatser. Båda sovrummen ligger på övervåningen. Lägenheten har också två badrum, ett stort kök och hiss fram till dörren.'
    },
    highlights: {
      en: ['75 m² over two levels', 'Two bedrooms and two bathrooms', 'Shared pool and underground parking'],
      de: ['75 m² auf zwei Ebenen', 'Zwei Schlafzimmer und zwei Bäder', 'Gemeinschaftspool und Tiefgarage'],
      es: ['75 m² en dos niveles', 'Dos dormitorios y dos baños', 'Piscina comunitaria y garaje'],
      nl: ['75 m² over twee niveaus', 'Twee slaapkamers en twee badkamers', 'Gedeeld zwembad en parkeergarage'],
      sv: ['75 m² i två plan', 'Två sovrum och två badrum', 'Gemensam pool och garage']
    },
    accessFacts: {
      outsideStepsBeforeEntrance: 0,
      buildingEntranceSteps: 0,
      insideBuildingStepsToUnitOrLift: 0,
      internalStairs: 'to-bedrooms',
      lift: 'to-unit-door',
      routeToVillageCore: 'not-verified',
      parkingToUnit: 'not-verified'
    },
    accessNote: {
      en: 'No steps outside or in the building — the lift reaches the apartment door. Inside, stairs lead up to the bedrooms.',
      de: 'Keine Stufen draußen und keine im Haus – der Aufzug fährt bis vor die Wohnungstür. Drinnen führen Stufen hinauf zu den Schlafzimmern.',
      es: 'Sin escalones fuera ni en el edificio: el ascensor llega hasta la puerta. Dentro, unas escaleras suben a los dormitorios.',
      nl: 'Geen treden buiten of in het gebouw — de lift komt tot aan de voordeur. Binnen leiden trappen omhoog naar de slaapkamers.',
      sv: 'Inga trappsteg ute eller i huset — hissen når fram till dörren. Inne leder trappor upp till sovrummen.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: 'Terrace and shared pool',
      de: 'Terrasse und Gemeinschaftspool',
      es: 'Terraza y piscina compartida',
      nl: 'Terras en gedeeld zwembad',
      sv: 'Terrass och gemensam pool'
    },
    viewNote: {
      en: 'Direct view over the Atlantic',
      de: 'Direkter Blick über den Atlantik',
      es: 'Vistas directas sobre el Atlántico',
      nl: 'Direct zicht over de Atlantische Oceaan',
      sv: 'Direkt utsikt över Atlanten'
    },
    images: [
      '/images/amara-tarifa/amara-tarifa-apartment01.webp',
      '/images/amara-tarifa/amara-tarifa-apartment02.webp',
      '/images/amara-tarifa/amara-tarifa-apartment03.webp',
      '/images/amara-tarifa/amara-tarifa-apartment04.webp',
      '/images/amara-tarifa/amara-tarifa-apartment05.webp',
      '/images/amara-tarifa/amara-tarifa-apartment06.webp',
      '/images/amara-tarifa/amara-tarifa-apartment11.webp',
      '/images/amara-tarifa/amara-tarifa-apartment13.webp',
      '/images/amara-tarifa/amara-tarifa-apartment07.webp',
      '/images/amara-tarifa/amara-tarifa-apartment08.webp',
      '/images/amara-tarifa/amara-tarifa-apartment09.webp',
      '/images/amara-tarifa/amara-tarifa-apartment10.webp',
      '/images/amara-tarifa/amara-tarifa-apartment12.webp',
      '/images/amara-tarifa/amara-tarifa-apartment14.webp',
      '/images/amara-tarifa/amara-tarifa-apartment15.webp',
      '/images/amara-tarifa/amara-tarifa-apartment16.webp',
      '/images/amara-tarifa/amara-tarifa-apartment17.webp',
      '/images/amara-tarifa/amara-tarifa-apartment18.webp',
      '/images/amara-tarifa/amara-tarifa-apartment19.webp',
      '/images/amara-tarifa/amara-tarifa-apartment20.webp',
      '/images/amara-tarifa/amara-tarifa-apartment21.webp',
      '/images/amara-tarifa/amara-tarifa-apartment22.webp',
      '/images/amara-tarifa/amara-tarifa-apartment23.webp',
      '/images/amara-tarifa/amara-tarifa-apartment24.webp'
    ],
    imageAlt: {
      en: 'AMARA Family & Surf ocean-view house in Tarifa',
      de: 'AMARA Family & Surf Haus mit Meerblick in Tarifa',
      es: 'Casa AMARA Family & Surf con vistas al mar en Tarifa',
      nl: 'AMARA Family & Surf huis met zeezicht in Tarifa',
      sv: 'AMARA Family & Surf hus med havsutsikt i Tarifa'
    },
    amenityFeatures: withLicense('VFT/CA/17038', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'ac', value: true },
      { name: 'tv', value: true },
      { name: 'rainShower', value: true },
      { name: 'washingMachine', value: true },
      { name: 'fireplace', value: true },
      { name: 'kitchen', value: true },
      { name: 'patio', value: true },
      { name: 'pool', value: true },
      { name: 'poolType', value: 'Outdoor' },
      { name: 'elevator', value: true },
      { name: 'childFriendly', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'ReservedUndergroundIncluded' }
    ])
  }
];

/** Public conversion proof for AMARA Family & Surf only. Operational details remain in the noindex Guest Guide. */
export const familySurfConversionContent: Record<AmaraLanguage, FamilySurfConversionLocale> = {
  en: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfing, organised before you arrive',
      paragraphs: [
        `You do not need to start your stay by looking for a kitesurf school, instructor or rental shop. We can connect you with our friends at Tarifa Surf Club before you travel.`,
        'Lessons, instructor contact and rental equipment can be arranged in advance. The equipment can be ready at the accommodation when you arrive.'
      ],
      ctaLabel: 'Wind & Kitesurfing in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Travelling with younger children?',
      paragraphs: [
        'The second bedroom has a bunk bed with two single sleeping places. The apartment sleeps four, but the layout works better for two adults with one or two younger children than for four adults.'
      ]
    }
  },
  de: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfen – schon vor der Anreise organisiert',
      paragraphs: [
        'Ihr müsst euren Aufenthalt nicht damit beginnen, eine Kitesurfschule, einen Lehrer oder einen Materialverleih zu suchen. Wir bringen euch vor der Reise mit unseren Freunden vom Tarifa Surf Club in Kontakt.',
        'Unterricht, Kitelehrer und Leihmaterial lassen sich vorab abstimmen. Das Equipment kann bei eurer Ankunft an der Unterkunft bereitstehen.'
      ],
      ctaLabel: 'Wind & Kitesurfen in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Reist ihr mit jüngeren Kindern?',
      paragraphs: [
        'Im zweiten Schlafzimmer steht ein Hochbett mit zwei einzelnen Schlafplätzen. Die Wohnung bietet Platz für vier, passt von der Aufteilung aber besser zu zwei Erwachsenen mit einem oder zwei jüngeren Kindern als zu vier Erwachsenen.'
      ]
    }
  },
  es: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurf organizado antes de vuestra llegada',
      paragraphs: [
        'No tenéis que empezar la estancia buscando escuela de kitesurf, instructor o tienda de alquiler. Antes del viaje podemos poneros en contacto con nuestros amigos de Tarifa Surf Club.',
        'Las clases, el instructor y el material de alquiler pueden organizarse con antelación. El equipo puede estar preparado en el alojamiento cuando lleguéis.'
      ],
      ctaLabel: 'Viento y kitesurf en Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: '¿Viajáis con niños pequeños?',
      paragraphs: [
        'El segundo dormitorio tiene una litera con dos camas individuales. El alojamiento admite a cuatro huéspedes, pero la distribución funciona mejor para dos adultos con uno o dos niños pequeños que para cuatro adultos.'
      ]
    }
  },
  nl: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfen geregeld vóór jullie aankomst',
      paragraphs: [
        'Jullie hoeven het verblijf niet te beginnen met zoeken naar een kitesurfschool, instructeur of verhuurshop. Voor de reis kunnen we jullie in contact brengen met onze vrienden van Tarifa Surf Club.',
        'Lessen, een instructeur en huurmateriaal kunnen vooraf worden geregeld. De uitrusting kan bij aankomst bij de accommodatie klaarstaan.'
      ],
      ctaLabel: 'Wind & kitesurfen in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Reizen jullie met jonge kinderen?',
      paragraphs: [
        'De tweede slaapkamer heeft een stapelbed met twee aparte slaapplaatsen. De woning biedt plaats aan vier gasten, maar de indeling past beter bij twee volwassenen met een of twee jonge kinderen dan bij vier volwassenen.'
      ]
    }
  },
  sv: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfing ordnad innan ni kommer',
      paragraphs: [
        'Ni behöver inte börja vistelsen med att leta efter kitesurfskola, instruktör eller uthyrning. Före resan kan vi sätta er i kontakt med våra vänner på Tarifa Surf Club.',
        'Lektioner, instruktör och hyrutrustning kan ordnas i förväg. Utrustningen kan finnas klar vid boendet när ni anländer.'
      ],
      ctaLabel: 'Vind & kitesurfing i Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Reser ni med yngre barn?',
      paragraphs: [
        'Det andra sovrummet har en våningssäng med två separata sovplatser. Boendet rymmer fyra gäster, men planlösningen passar bättre för två vuxna med ett eller två yngre barn än för fyra vuxna.'
      ]
    }
  }
};

export const vacationRentalSlugs = vacationRentalEntities.map((entity) => entity.slug);

export const vacationRentalEntitiesByKey = Object.fromEntries(
  vacationRentalEntities.map((entity) => [entity.key, entity])
) as Record<VacationRentalEntityKey, VacationRentalEntity>;

export const vacationRentalEntitiesBySlug = Object.fromEntries(
  vacationRentalEntities.map((entity) => [entity.slug, entity])
) as Record<string, VacationRentalEntity>;

export const vacationRentalEntitiesByToken = Object.fromEntries(
  vacationRentalEntities.map((entity) => [entity.token, entity])
) as Record<VacationRentalToken, VacationRentalEntity>;

export function getVacationRentalBySlug(slug: string): VacationRentalEntity | undefined {
  return vacationRentalEntitiesBySlug[slug];
}

export function buildVacationRentalSeo(entity: VacationRentalEntity): AmaraAuthoringSeo {
  return {
    version: `2026-07-18-${entity.slug}-vacation-rental-v1`,
    pageType: 'D',
    schemaType: 'lodging',
    entityKey: entity.key,
    languages: Object.fromEntries(
      languages.map((lang) => [
        lang,
        {
          title: entity.seoTitle[lang],
          description: entity.seoDescription[lang],
          robots: 'index, follow',
          canonical: 'auto'
        }
      ])
    ) as AmaraAuthoringSeo['languages'],
    ogImage: entity.images[0]
  };
}
