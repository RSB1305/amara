import type {
  AmaraAuthoringSeo,
  AmaraEntityKey,
  AmaraLanguage
} from '../types/seo';

export type VacationRentalEntityKey = Exclude<AmaraEntityKey, 'amara-brand'>;
export type VacationRentalToken = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'casa';
type LocalizedText = Record<AmaraLanguage, string>;

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
  slug: string;
  identifier: string;
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
    slug: 'la-amara-farah',
    identifier: 'amara-lodging-408326',
    propertyId: '408326',
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
      en: 'Farah: cosy double room in Frigiliana | AMARA',
      de: 'Farah: gemütliches Doppelzimmer in Frigiliana | AMARA',
      es: 'Farah: habitación doble acogedora en Frigiliana | AMARA',
      nl: 'Farah: knusse tweepersoonskamer in Frigiliana | AMARA',
      sv: 'Farah: ombonat dubbelrum i Frigiliana | AMARA'
    },
    seoDescription: {
      en: 'AMARA Farah in historic Frigiliana: a small, cosy double room for 2 guests. One step at the entrance and none after that.',
      de: 'AMARA Farah in der Altstadt von Frigiliana: ein kleines, gemütliches Doppelzimmer für 2 Gäste. Eine Stufe am Eingang, danach keine mehr.',
      es: 'AMARA Farah en el casco antiguo de Frigiliana: una habitación doble pequeña y acogedora para 2 huéspedes. Un escalón en la entrada y ninguno más.',
      nl: 'AMARA Farah in het oude Frigiliana: een kleine, knusse tweepersoonskamer voor 2 gasten. Eén trede bij de ingang en daarna geen meer.',
      sv: 'AMARA Farah i gamla Frigiliana: ett litet, ombonat dubbelrum för 2 gäster. Ett trappsteg vid entrén, inga fler därefter.'
    },
    eyebrow: {
      en: 'Frigiliana old town',
      de: 'Altstadt Frigiliana',
      es: 'Casco antiguo de Frigiliana',
      nl: 'Oude kern van Frigiliana',
      sv: 'Frigilianas gamla stad'
    },
    headline: {
      en: 'For short stays in Frigiliana’s old town',
      de: 'Für kurze Aufenthalte in Frigilianas Altstadt',
      es: 'Para estancias cortas en el casco antiguo de Frigiliana',
      nl: 'Voor korte verblijven in de oude kern van Frigiliana',
      sv: 'För kortare vistelser i Frigilianas gamla stad'
    },
    lead: {
      en: 'Farah is a small, cosy double room in Frigiliana’s historic centre — ideal for guests who like to make coffee and prepare a light meal.',
      de: 'Farah ist ein kleines, gemütliches Doppelzimmer im historischen Zentrum von Frigiliana – ideal für Gäste, die sich gern einen Kaffee und eine kleine Mahlzeit zubereiten.',
      es: 'Farah es una habitación doble pequeña y acogedora en el centro histórico de Frigiliana, ideal para quienes disfrutan preparando un café y una comida ligera.',
      nl: 'Farah is een kleine, knusse tweepersoonskamer in het historische centrum van Frigiliana – ideaal voor gasten die graag koffie en een kleine maaltijd klaarmaken.',
      sv: 'Farah är ett litet, ombonat dubbelrum i Frigilianas historiska centrum – perfekt för gäster som gärna ordnar kaffe och en enklare måltid.'
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
    slug: 'la-amara-lounis',
    identifier: 'amara-lodging-408324',
    propertyId: '408324',
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
      en: 'Lounis: Frigiliana apartment, step-free to town | AMARA',
      de: 'Lounis: Ferienwohnung Frigiliana, stufenlos ins Dorf | AMARA',
      es: 'Lounis: apartamento en Frigiliana, centro sin escalones | AMARA',
      nl: 'Lounis: appartement Frigiliana, trapvrij naar het dorp | AMARA',
      sv: 'Lounis: lägenhet i Frigiliana, trappfritt till byn | AMARA'
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
      en: 'A historic sanctuary for two',
      de: 'Ein historischer Rückzugsort für zwei',
      es: 'Un refugio histórico para dos',
      nl: 'Een historisch toevluchtsoord voor twee',
      sv: 'En historisk tillflyktsort för två'
    },
    lead: {
      en: 'The largest of the house’s four apartments, deliberately kept for two. Lounis’s walls belong to the oldest fabric of the house: Moorish masonry, rediscovered original floor tiles and a private terrace with an eight-metre historic well.',
      de: 'Die größte der vier Wohnungen im Haus – und bewusst nur für zwei. Die Mauern von Lounis gehören zur ältesten Bausubstanz des Hauses: maurisches Mauerwerk, wiederentdeckte Originalfliesen und eine private Terrasse mit einem acht Meter tiefen historischen Brunnen.',
      es: 'El más grande de los cuatro apartamentos de la casa, pensado deliberadamente solo para dos. Los muros de Lounis forman parte de la estructura más antigua del edificio: mampostería andalusí, baldosas originales redescubiertas y una terraza privada con un pozo histórico de ocho metros de profundidad.',
      nl: 'Het grootste van de vier appartementen in het huis, bewust alleen voor twee. De muren van Lounis behoren tot het oudste deel van het gebouw: Moors metselwerk, teruggevonden originele vloertegels en een privéterras met een acht meter diepe historische put.',
      sv: 'Den största av husets fyra lägenheter, medvetet bara för två. Lounis murar hör till husets äldsta byggnadsdelar: moriskt murverk, återfunna ursprungliga golvplattor och en privat terrass med en åtta meter djup historisk brunn.'
    },
    description: {
      en: 'The private terrace looks across the mango and avocado groves of Frigiliana Campo, with the sea beyond. Sun reaches it around midday and stays until evening; mornings remain pleasantly shaded. Set into the terrace is an exceptionally well-preserved eight-metre historic well, exclusive to Lounis. It still holds water and is secured by a sturdy grate; the water is not used as domestic or drinking water. Behind it are the Moroccan-style outdoor shower and, to its left, a sheltered nook we call our “cave”. According to the story passed down with the house, chickens were once kept there. Today it is a quiet, intimate retreat that feels especially protected in the soft evening light. During the 2020–2022 restoration, old walls and beautiful exposed brickwork emerged; our architect recognised Moorish construction. Beneath later floor coverings we also discovered the apartment’s original historic tiles and carefully restored them. A fully equipped kitchen and a light-filled bathroom with a large window and double shower complete the apartment. A hammock and two loungers wait outside: birds in the morning, sun from midday, silence at night.',
      de: 'Von der privaten Terrasse blickt ihr über die Mango- und Avocadoplantagen des Frigiliana Campo bis zum Meer. Ab etwa Mittag liegt sie in der Sonne; morgens bleibt sie angenehm schattig. In die Terrasse ist ein außergewöhnlich gut erhaltener, acht Meter tiefer historischer Brunnen eingelassen, der ausschließlich zu Lounis gehört. Er führt bis heute Wasser und ist mit einem stabilen Gitter gesichert; als Haus- oder Trinkwasser wird es nicht genutzt. Hinter dem Brunnen liegen die marokkanisch gestaltete Außendusche und links davon eine kleine geschützte Nische, die wir unsere „Höhle“ nennen. Nach der überlieferten Geschichte des Hauses wurden dort früher Hühner gehalten. Heute ist sie ein stiller, intimer Rückzugsort, der sich im warmen Abendlicht besonders geborgen anfühlt. Bei der Restaurierung von 2020 bis 2022 kamen alte Mauern und besonders schönes Sichtmauerwerk zum Vorschein; unser Architekt erkannte darin maurische Bauweise. Unter späteren Bodenbelägen entdeckten wir außerdem die originalen historischen Fliesen des Apartments und restaurierten sie sorgfältig. Dazu kommen eine voll ausgestattete Küche sowie ein lichtdurchflutetes Badezimmer mit großem Fenster und Doppeldusche. Draußen warten Hängematte und zwei Sonnenliegen: morgens Vögel, ab Mittag Sonne, nachts Stille.',
      es: 'Desde la terraza privada se contemplan las plantaciones de mango y aguacate del campo de Frigiliana, con el mar al fondo. El sol llega hacia el mediodía y se queda hasta la tarde; por la mañana hay una sombra agradable. Integrado en la terraza se conserva un pozo histórico de ocho metros de profundidad que pertenece exclusivamente a Lounis. Todavía tiene agua y está protegido por una rejilla resistente; el agua no se utiliza en la vivienda ni como agua potable. Detrás está la ducha exterior de inspiración marroquí y, a su izquierda, un pequeño rincón resguardado al que llamamos nuestra «cueva». Según la historia que nos transmitieron sobre la casa, antiguamente se criaban gallinas allí. Hoy es un refugio íntimo y tranquilo que, con la luz suave del atardecer, transmite una especial sensación de cobijo. Durante la restauración de 2020 a 2022 aparecieron muros antiguos y un precioso ladrillo visto; nuestro arquitecto reconoció una construcción andalusí. Bajo pavimentos posteriores descubrimos también las baldosas históricas originales del apartamento y las restauramos cuidadosamente. Completan el espacio una cocina totalmente equipada y un baño lleno de luz, con gran ventana y ducha doble. Fuera esperan la hamaca y dos tumbonas: pájaros por la mañana, sol desde el mediodía y silencio por la noche.',
      nl: 'Vanaf het privéterras kijk je over de mango- en avocadoplantages van het Frigiliana Campo, met de zee daarachter. Rond het middaguur komt de zon en die blijft tot de avond; ’s ochtends is er aangename schaduw. In het terras ligt een uitzonderlijk goed bewaarde historische put van acht meter diep, exclusief voor Lounis. De put bevat nog altijd water en is beveiligd met een stevig rooster; het water wordt niet gebruikt als huishoud- of drinkwater. Achter de put ligt de Marokkaans vormgegeven buitendouche en links daarvan een beschutte nis die we onze “grot” noemen. Volgens de overgeleverde geschiedenis van het huis werden daar vroeger kippen gehouden. Nu is het een stille, intieme plek die in het zachte avondlicht een bijzonder geborgen gevoel geeft. Tijdens de restauratie van 2020 tot 2022 kwamen oude muren en prachtig zichtbaar metselwerk tevoorschijn; onze architect herkende de Moorse bouwwijze. Onder latere vloerbedekking vonden we bovendien de originele historische vloertegels van het appartement, die we zorgvuldig hebben gerestaureerd. Verder zijn er een volledig uitgeruste keuken en een lichte badkamer met een groot raam en dubbele douche. Buiten wachten een hangmat en twee ligstoelen: vogels in de ochtend, zon vanaf de middag en stilte in de nacht.',
      sv: 'Från den privata terrassen ser du ut över mango- och avokadoodlingarna i Frigiliana Campo, med havet bakom. Solen når terrassen kring middagstid och stannar till kvällen; på morgonen finns behaglig skugga. I terrassen ligger en ovanligt välbevarad historisk brunn, åtta meter djup och exklusiv för Lounis. Brunnen är fortfarande vattenförande och säkrad med ett stabilt galler; vattnet används inte som hushålls- eller dricksvatten. Bakom brunnen finns den marockanskt utformade uteduschen och till vänster en skyddad liten nisch som vi kallar vår “grotta”. Enligt husets muntligt traderade historia hölls höns där förr. I dag är det en stilla, intim plats som känns särskilt ombonad i det mjuka kvällsljuset. Vid restaureringen 2020–2022 kom gamla murar och vackert synligt tegel fram; vår arkitekt kände igen moriskt byggnadssätt. Under senare golvlager fann vi också lägenhetens ursprungliga historiska golvplattor och restaurerade dem omsorgsfullt. Ett fullt utrustat kök och ett ljust badrum med stort fönster och dubbeldusch fullbordar lägenheten. Utomhus väntar hängmattan och två solstolar: fåglar på morgonen, sol från middagstid och tystnad om natten.'
    },
    highlights: {
      en: ['Eight-metre private well and sheltered “cave” nook', 'Moorish walls and rediscovered original floor tiles', 'Sun from midday, step-free to the cafés'],
      de: ['Acht Meter tiefer Privatbrunnen und geschützte „Höhle“', 'Maurische Mauern und wiederentdeckte Originalfliesen', 'Sonne ab Mittag, stufenlos zu den Cafés'],
      es: ['Pozo privado de ocho metros y rincón resguardado que llamamos «cueva»', 'Muros andalusíes y baldosas originales redescubiertas', 'Sol desde el mediodía y sin escalones hasta los cafés'],
      nl: ['Acht meter diepe privéput en beschutte “grot”', 'Moorse muren en teruggevonden originele vloertegels', 'Zon vanaf de middag, zonder trap naar de cafés'],
      sv: ['Åtta meter djup privat brunn och skyddad “grotta”', 'Moriska murar och återfunna ursprungliga golvplattor', 'Sol från middagstid, trappfritt till kaféerna']
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
    slug: 'la-amara-zaid',
    identifier: 'amara-lodging-408323',
    propertyId: '408323',
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
      en: 'The upper floor above the groves',
      de: 'Die obere Etage über den Plantagen',
      es: 'La planta de arriba sobre el campo',
      nl: 'De bovenverdieping boven de plantages',
      sv: 'Övervåningen ovanför odlingarna'
    },
    lead: {
      en: 'Zaid sits one floor above Lounis: the same view across the groves, only further. And the widest bed in the house, 180 × 200.',
      de: 'Zaid liegt eine Etage über Lounis: derselbe Blick über die Plantagen, nur weiter. Dazu das breiteste Bett im Haus, 180 × 200.',
      es: 'Zaid está una planta por encima de Lounis: la misma vista sobre el campo, solo que más lejos. Y la cama más ancha de la casa, 180 × 200.',
      nl: 'Zaid ligt een verdieping boven Lounis: hetzelfde uitzicht over de plantages, alleen verder. En het breedste bed van het huis, 180 × 200.',
      sv: 'Zaid ligger en våning ovanför Lounis: samma utsikt över odlingarna, fast längre. Och husets bredaste säng, 180 × 200.'
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
    slug: 'la-amara-maha',
    identifier: 'amara-lodging-408325',
    propertyId: '408325',
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
      en: 'Sixty-four square metres of open-air terrace',
      de: 'Vierundsechzig Quadratmeter Terrasse unter freiem Himmel',
      es: 'Sesenta y cuatro metros cuadrados de terraza al aire libre',
      nl: 'Vierenzestig vierkante meter terras onder de blote hemel',
      sv: 'Sextiofyra kvadratmeter terrass under bar himmel'
    },
    lead: {
      en: 'Maha’s terrace measures 64 square metres, open to the sky, with parasols and partly shaded by sails. Plus a small outdoor kitchen — if you like cooking outside, this is where you can.',
      de: 'Mahas Terrasse misst 64 Quadratmeter – offen zum Himmel, mit Sonnenschirmen und teilweise von Sonnensegeln beschattet. Dazu eine kleine Außenküche: Wer draußen kochen möchte, kann es hier.',
      es: 'La terraza de Maha mide 64 metros cuadrados, abierta al cielo, con sombrillas y en parte cubierta por velas de sombra. Y una pequeña cocina exterior: quien quiera cocinar al aire libre, aquí puede.',
      nl: 'Het terras van Maha meet 64 vierkante meter, open naar de hemel, met parasols en deels beschaduwd door schaduwdoeken. Plus een kleine buitenkeuken: wie graag buiten kookt, kan dat hier.',
      sv: 'Mahas terrass mäter 64 kvadratmeter, öppen mot himlen, med parasoll och delvis skuggad av solsegel. Dessutom ett litet utekök: den som vill laga mat utomhus kan göra det här.'
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
    slug: 'la-amara-playa',
    identifier: 'amara-lodging-408327',
    propertyId: '408327',
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
      en: 'A quiet fifth-floor retreat for two',
      de: 'Ein ruhiger Rückzugsort für zwei im fünften Stock',
      es: 'Un refugio tranquilo para dos en la quinta planta',
      nl: 'Een rustige plek voor twee op de vijfde verdieping',
      sv: 'En lugn plats för två på femte våningen'
    },
    lead: {
      en: 'Compact and carefully equipped, with a generous 200 × 200 bed, a balcony and the calm that comes with being high above the street.',
      de: 'Kompakt und sorgfältig ausgestattet, mit einem großzügigen Bett von 200 × 200, Balkon und der Ruhe hoch über der Straße.',
      es: 'Compacto y equipado con cuidado, con una amplia cama de 200 × 200, balcón y la tranquilidad de estar por encima de la calle.',
      nl: 'Compact en zorgvuldig ingericht, met een royaal bed van 200 × 200, een balkon en de rust van een plek hoog boven de straat.',
      sv: 'Kompakt och omsorgsfullt utrustat, med en generös säng på 200 × 200, balkong och lugnet högt ovanför gatan.'
    },
    description: {
      en: 'Playa is small, and that is exactly what guests come back to: it feels snug rather than tight. The lift takes you to the fifth floor, where both the side sea view and the quiet come from. Full kitchen, washing machine, balcony, a 50-inch screen, and at 200 × 200 the largest bed of any AMARA place.',
      de: 'Playa ist klein, und genau das schätzen die Gäste: Es wirkt gemütlich, nicht knapp. Der Aufzug bringt euch in den fünften Stock, dem das Apartment seinen seitlichen Meerblick und seine Ruhe verdankt. Komplette Küche, Waschmaschine, Balkon, ein 50-Zoll-Bildschirm und mit 200 × 200 das größte Bett aller AMARA-Unterkünfte.',
      es: 'Playa es pequeño, y es justo lo que los huéspedes valoran: resulta acogedor, no estrecho. El ascensor lleva hasta la quinta planta, de donde vienen las vistas laterales al mar y la calma. Cocina completa, lavadora, balcón, pantalla de 50 pulgadas y, con 200 × 200, la cama más grande de todos los alojamientos AMARA.',
      nl: 'Playa is klein, en juist dat waarderen gasten: het voelt knus, niet krap. De lift brengt jullie naar de vijfde verdieping, waar het zijdelingse zeezicht en de rust vandaan komen. Volledige keuken, wasmachine, balkon, een scherm van 50 inch en met 200 × 200 het grootste bed van alle AMARA-adressen.',
      sv: 'Playa är litet, och det är precis vad gästerna uppskattar: det känns ombonat, inte trångt. Hissen tar er till femte våningen, som ger både havsutsikten från sidan och lugnet. Fullt kök, tvättmaskin, balkong, en 50-tums skärm och med 200 × 200 den största sängen av alla AMARA-boenden.'
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
    token: 'casa',
    slug: 'la-amara-family-and-surf',
    identifier: 'amara-lodging-544478',
    propertyId: '544478',
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
      en: 'AMARA Family & Surf | Romantic Tarifa Stay with Pool & Parking',
      de: 'AMARA Family & Surf | Romantisch wohnen in Tarifa mit Pool & Garage',
      es: 'AMARA Family & Surf | Estancia romántica en Tarifa con piscina y garaje',
      nl: 'AMARA Family & Surf | Romantisch verblijf in Tarifa met zwembad & garage',
      sv: 'AMARA Family & Surf | Romantiskt boende i Tarifa med pool & garage'
    },
    seoDescription: {
      en: 'A spacious Tarifa stay for couples, with Atlantic sunset terrace, pool and underground parking. Kitesurf lessons and equipment can be arranged before arrival.',
      de: 'Großzügige Tarifa-Unterkunft für Paare mit Atlantikterrasse, Pool und Tiefgarage. Kitekurs und Material können schon vor der Anreise organisiert werden.',
      es: 'Alojamiento amplio en Tarifa para parejas, con terraza al Atlántico, piscina y garaje privado. Clases y material de kitesurf pueden organizarse antes de llegar.',
      nl: 'Ruim verblijf in Tarifa voor stellen met Atlantisch terras, zwembad en eigen garage. Kitesurflessen en materiaal kunnen vóór aankomst worden geregeld.',
      sv: 'Rymligt boende i Tarifa för par med Atlantterrass, pool och eget garage. Kitesurflektioner och utrustning kan ordnas redan före ankomsten.'
    },
    eyebrow: {
      en: 'AMARA Romantic Stays · Tarifa',
      de: 'AMARA Romantic Stays · Tarifa',
      es: 'AMARA Romantic Stays · Tarifa',
      nl: 'AMARA Romantic Stays · Tarifa',
      sv: 'AMARA Romantic Stays · Tarifa'
    },
    headline: {
      en: 'Atlantic sunsets and the freedom to surf',
      de: 'Atlantik-Sonnenuntergänge und Freiheit fürs Kitesurfen',
      es: 'Atardeceres atlánticos y libertad para practicar kitesurf',
      nl: 'Atlantische zonsondergangen en alle vrijheid om te kitesurfen',
      sv: 'Solnedgång över Atlanten och frihet att kitesurfa'
    },
    lead: {
      en: [
        'A spacious two-level Tarifa home that works beautifully for two, with Atlantic views from the private terrace and room to slow down between active days by the sea.',
        `For couples who kitesurf — or want to learn — our cooperation with Tarifa Surf Club makes the sport unusually easy to build into the stay. And if you now travel with younger children: this is the one AMARA stay where a separate bunk-bed room gives you that flexibility, without changing the apartment's couple-first character.`
      ].join('\n\n'),
      de: [
        'Eine großzügige Tarifa-Unterkunft auf zwei Ebenen, die wunderbar für zwei funktioniert: mit Atlantikblick von der privaten Terrasse und viel Raum zum Ankommen zwischen aktiven Tagen am Meer.',
        'Für Paare, die kiten – oder es lernen möchten –, macht unsere Kooperation mit dem Tarifa Surf Club den Sport besonders unkompliziert. Und wenn ihr inzwischen mit kleineren Kindern reist: Als einzige AMARA-Unterkunft bietet Family & Surf mit dem separaten Hochbettzimmer diese Flexibilität – ohne dass die Wohnung ihren Charakter für Paare verliert.'
      ].join('\n\n'),
      es: [
        'Una casa amplia en Tarifa, distribuida en dos niveles y especialmente agradable para dos, con vistas al Atlántico desde la terraza privada y espacio para descansar entre días activos junto al mar.',
        'Para parejas que practican kitesurf —o quieren aprender— nuestra colaboración con Tarifa Surf Club facilita mucho la experiencia. Y si ahora viajáis con niños pequeños: este es el único alojamiento AMARA donde el dormitorio separado con litera aporta esa flexibilidad, sin que el apartamento deje de estar pensado para dos.'
      ].join('\n\n'),
      nl: [
        'Een ruime woning in Tarifa over twee niveaus die uitstekend werkt voor twee, met Atlantisch uitzicht vanaf het eigen terras en ruimte om tot rust te komen tussen actieve dagen aan zee.',
        'Voor stellen die kitesurfen — of het willen leren — maakt onze samenwerking met Tarifa Surf Club de sport bijzonder eenvoudig onderdeel van de reis. Reizen jullie inmiddels met jonge kinderen: dit is het enige AMARA-verblijf waar de aparte kamer met stapelbed die flexibiliteit biedt, zonder dat de woning haar couple-first karakter verliest.'
      ].join('\n\n'),
      sv: [
        'Ett rymligt boende i Tarifa på två plan som fungerar mycket bra för två, med Atlantutsikt från den privata terrassen och gott om plats att varva ner mellan aktiva dagar vid havet.',
        'För par som kitesurfar — eller vill lära sig — gör samarbetet med Tarifa Surf Club sporten ovanligt enkel att lägga in i vistelsen. Reser ni numera med yngre barn: det här är det enda AMARA-boendet där ett separat rum med våningssäng ger den flexibiliteten, utan att boendet tappar sitt fokus på par.'
      ].join('\n\n')
    },
    description: {
      en: [
        'Set over two levels, AMARA Family & Surf combines a main bedroom with a 150 × 200 cm double bed, a separate bunk-bed room, two bathrooms, a large kitchen and an Atlantic-facing terrace for sunsets.',
        'The technical occupancy is four guests, but the sleeping layout is particularly well suited to a couple or to parents travelling with younger children.'
      ].join('\n\n'),
      de: [
        'AMARA Family & Surf erstreckt sich über zwei Ebenen und verbindet ein Hauptschlafzimmer mit 150 × 200 cm Doppelbett, ein separates Hochbettzimmer, zwei Badezimmer, eine große Küche und eine Terrasse mit Atlantikblick und Sonnenuntergang.',
        'Die technische Belegung beträgt vier Gäste. Von der Schlafaufteilung her passt die Wohnung besonders gut zu einem Paar oder zu Eltern, die mit kleineren Kindern reisen.'
      ].join('\n\n'),
      es: [
        'AMARA Family & Surf se distribuye en dos niveles y cuenta con dormitorio principal con cama doble de 150 × 200 cm, un dormitorio separado con litera, dos baños, cocina amplia y terraza con vistas al Atlántico y al atardecer.',
        'La capacidad técnica es de cuatro huéspedes, pero la distribución resulta especialmente adecuada para una pareja o para padres que viajan con niños pequeños.'
      ].join('\n\n'),
      nl: [
        'AMARA Family & Surf ligt verdeeld over twee niveaus en heeft een hoofdslaapkamer met een tweepersoonsbed van 150 × 200 cm, een aparte kamer met stapelbed, twee badkamers, een ruime keuken en een terras met Atlantisch uitzicht en zonsondergang.',
        'De technische capaciteit is vier gasten, maar de slaapindeling past vooral goed bij een stel of bij ouders die met jonge kinderen reizen.'
      ].join('\n\n'),
      sv: [
        'AMARA Family & Surf är fördelat på två plan och har ett huvudsovrum med dubbelsäng på 150 × 200 cm, ett separat rum med våningssäng, två badrum, ett stort kök och en terrass med utsikt över Atlanten och solnedgången.',
        'Den tekniska kapaciteten är fyra gäster, men sovlösningen passar särskilt bra för ett par eller föräldrar som reser med yngre barn.'
      ].join('\n\n')
    },
    highlights: {
      en: [
        'Room to enjoy Tarifa together\n75 m² over two levels, with a main double bedroom and additional bunk-bed room.',
        'Atlantic evenings at home\nA private terrace with Atlantic views and sunset as a quieter counterpoint to active days outside.',
        'Comfort across two levels\nTwo bathrooms, a large kitchen and lift access to the apartment door.'
      ],
      de: [
        'Viel Raum für gemeinsame Tarifa-Tage\n75 m² auf zwei Ebenen mit Hauptschlafzimmer und zusätzlichem Hochbettzimmer.',
        'Atlantikabende auf der eigenen Terrasse\nMeerblick und Sonnenuntergang als ruhiger Gegenpol zu aktiven Tagen draußen.',
        'Komfort auf zwei Ebenen\nZwei Badezimmer, eine große Küche und der Aufzug bis vor die Wohnungstür.'
      ],
      es: [
        'Espacio para disfrutar Tarifa juntos\n75 m² en dos niveles, dormitorio principal y habitación adicional con litera.',
        'Atardeceres sobre el Atlántico\nTerraza privada con vistas al mar para terminar el día con calma.',
        'Comodidad en dos niveles\nDos baños, una cocina amplia y ascensor hasta la puerta del apartamento.'
      ],
      nl: [
        'Ruimte om Tarifa samen te beleven\n75 m² over twee niveaus, met hoofdslaapkamer en extra stapelbedkamer.',
        'Atlantische avonden op het terras\nEigen buitenruimte met uitzicht op zee en zonsondergang.',
        'Comfort over twee niveaus\nTwee badkamers, een ruime keuken en een lift tot aan de voordeur.'
      ],
      sv: [
        'Gott om plats för Tarifa tillsammans\n75 m² på två plan med huvudsovrum och extra rum med våningssäng.',
        'Atlantkvällar på den egna terrassen\nHavsutsikt och solnedgång efter en dag ute.',
        'Komfort på två plan\nTvå badrum, ett stort kök och hiss hela vägen till lägenhetsdörren.'
      ]
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
        `Tarifa is one of Europe's great places to kitesurf. Staying with AMARA means you do not have to begin your holiday by looking for a school, instructor or rental shop.`,
        'We can connect you directly with our friends at Tarifa Surf Club before you arrive. Lessons, instructor contact and rental equipment can be organised in advance, and equipment can be prepared so it is available at the accommodation when you arrive.',
        'If the wind is already good on your first day, you can spend less time organising and more time on the water.'
      ],
      ctaLabel: 'Wind & Kitesurfing in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Travelling with younger children?',
      paragraphs: [
        'The second bedroom has a bunk bed with two single sleeping places. That makes the apartment particularly practical for parents travelling with younger children while keeping the main bedroom to themselves.',
        'We describe the apartment as accommodating up to four guests because that is its technical capacity — but it is not positioned as a conventional four-adult sleeping arrangement.'
      ]
    }
  },
  de: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfen – schon vor der Anreise organisiert',
      paragraphs: [
        'Tarifa gehört zu den großen europäischen Kitesurf-Destinationen. Als AMARA-Gast müsst ihr euren Urlaub aber nicht damit beginnen, erst eine Schule, einen Lehrer oder einen Materialverleih zu suchen.',
        'Wir bringen euch bereits vor der Reise direkt mit unseren Freunden vom Tarifa Surf Club in Kontakt. Unterricht, Kitelehrer und Rental-Material können vorab abgestimmt werden. Das Equipment kann so organisiert werden, dass es bei eurer Ankunft an der Unterkunft bereitsteht.',
        'Wenn am Ankunftstag bereits guter Wind ist, verliert ihr keine wertvolle Zeit mit Organisation – sondern könnt im Idealfall direkt aufs Wasser.'
      ],
      ctaLabel: 'Wind & Kitesurfen in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      title: 'Ihr reist inzwischen mit kleineren Kindern?',
      paragraphs: [
        'Im zweiten Schlafzimmer befindet sich ein Hochbett mit zwei einzelnen Schlafplätzen. Dadurch können Eltern ihr eigenes Schlafzimmer behalten, während die Kinder einen separaten Schlafbereich haben.',
        'Die technische Belegung der Wohnung beträgt vier Personen. Wir möchten sie dennoch nicht als klassische Unterkunft für vier Erwachsene positionieren. Besonders gut passt die Aufteilung zu einem Paar oder zu Eltern mit jüngeren Kindern.'
      ]
    }
  },
  es: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurf organizado antes de vuestra llegada',
      paragraphs: [
        'Tarifa es uno de los grandes destinos europeos para practicar kitesurf. Alojaros con AMARA significa que no tenéis que empezar las vacaciones buscando escuela, instructor o tienda de alquiler.',
        'Podemos poneros en contacto directo con nuestros amigos de Tarifa Surf Club antes de vuestra llegada. Las clases, el instructor y el material de alquiler pueden organizarse previamente, y el equipo puede prepararse para estar disponible en el alojamiento cuando lleguéis.',
        'Si el viento ya acompaña el primer día, podéis dedicar menos tiempo a organizar y más tiempo al agua.'
      ],
      ctaLabel: 'Viento y kitesurf en Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      paragraphs: [
        'El segundo dormitorio dispone de una litera con dos camas individuales. Por eso la distribución funciona especialmente bien para padres que viajan con niños pequeños y quieren conservar su propio dormitorio.',
        'La capacidad técnica es de cuatro personas, pero no presentamos la vivienda como una configuración convencional para cuatro adultos.'
      ]
    }
  },
  nl: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfen geregeld vóór jullie aankomst',
      paragraphs: [
        `Tarifa is een van Europa's bekendste bestemmingen voor kitesurfen. Als AMARA-gast hoeven jullie de vakantie niet te beginnen met het zoeken naar een school, instructeur of verhuurshop.`,
        'We kunnen jullie voor aankomst direct in contact brengen met onze vrienden van Tarifa Surf Club. Lessen, instructeur en huurmateriaal kunnen vooraf worden geregeld en de uitrusting kan worden voorbereid zodat die bij aankomst bij de accommodatie beschikbaar is.',
        'Is de wind op jullie eerste dag al goed, dan gaat er minder tijd verloren aan organisatie en kan de vakantie direct beginnen.'
      ],
      ctaLabel: 'Wind & kitesurfen in Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      paragraphs: [
        'De tweede slaapkamer heeft een stapelbed met twee aparte slaapplaatsen. Dat maakt de woning bijzonder praktisch voor ouders met jonge kinderen die hun eigen slaapkamer willen behouden.',
        'De technische capaciteit is vier personen, maar we positioneren de woning niet als een standaard slaapopstelling voor vier volwassenen.'
      ]
    }
  },
  sv: {
    surf: {
      kicker: 'AMARA × Tarifa Surf Club',
      title: 'Kitesurfing ordnad innan ni kommer',
      paragraphs: [
        'Tarifa är en av Europas stora destinationer för kitesurfing. Som AMARA-gäst behöver ni inte börja semestern med att leta efter skola, instruktör eller uthyrning.',
        'Vi kan sätta er i direkt kontakt med våra vänner på Tarifa Surf Club redan före resan. Lektioner, instruktör och hyrutrustning kan ordnas i förväg, och utrustningen kan förberedas så att den finns vid boendet när ni anländer.',
        'Om vinden redan är bra första dagen kan ni lägga mindre tid på organisation och mer tid på vattnet.'
      ],
      ctaLabel: 'Vind & kitesurfing i Tarifa',
      ctaToken: 'tarifa_wind_kitesurfing_authority'
    },
    family: {
      paragraphs: [
        'Det andra sovrummet har en våningssäng med två separata sovplatser. Det passar särskilt bra för föräldrar med yngre barn som vill behålla huvudsovrummet för sig själva.',
        'Den tekniska kapaciteten är fyra personer, men boendet positioneras inte som en vanlig sovlösning för fyra vuxna.'
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
