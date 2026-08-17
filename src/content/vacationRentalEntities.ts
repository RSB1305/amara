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
  // Not rendered on the rental page — pets are shown on Comfort & Amenities only.
  petsNote: LocalizedText;
  kitchenNote: LocalizedText;
  outdoorNote: LocalizedText;
  viewNote: LocalizedText;
  /** Shown under the full address. Frigiliana only — the four apartments share one street. */
  addressNote?: LocalizedText;
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
  lang: AmaraLanguage
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

  return `${prefix[lang]} ${amount}`;
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
    en: 'Calle Chorruelo is where Calle Real carries on — the village’s main street, with its restaurants, bars and shops. From Casa AMARA you reach them without a step. The Plaza de las Tres Culturas is about 550 metres away, with no stairs; the first part is uphill before the route becomes much flatter. In Frigiliana’s old town, that is rare.',
    de: 'Die Calle Chorruelo ist die Verlängerung der Calle Real – der Hauptstraße des Dorfes mit ihren Restaurants, Bars und Geschäften. Von der Casa AMARA erreicht man sie stufenlos. Bis zur Plaza de las Tres Culturas sind es etwa 550 Meter, ohne Stufen; der erste Abschnitt führt bergauf, danach wird der Weg deutlich flacher. In Frigilianas Altstadt ist das selten.',
    es: 'La Calle Chorruelo es la continuación de la Calle Real, la calle principal del pueblo, con sus restaurantes, bares y tiendas. Desde la Casa AMARA se llega sin un solo escalón. Hasta la Plaza de las Tres Culturas hay unos 550 metros, sin escaleras; el primer tramo es cuesta arriba y después el recorrido se vuelve mucho más llano. En el casco antiguo de Frigiliana eso es poco común.',
    nl: 'De Calle Chorruelo is het verlengde van de Calle Real, de hoofdstraat van het dorp met zijn restaurants, bars en winkels. Vanaf Casa AMARA bereik je die zonder één trede. Naar de Plaza de las Tres Culturas is het ongeveer 550 meter, zonder trappen; het eerste deel loopt bergop, waarna de route veel vlakker wordt. In de oude kern van Frigiliana is dat zeldzaam.',
    sv: 'Calle Chorruelo är förlängningen av Calle Real, byns huvudgata med restauranger, barer och butiker. Från Casa AMARA når du dem utan ett enda trappsteg. Till Plaza de las Tres Culturas är det cirka 550 meter, utan trappor; den första delen går uppför, därefter blir vägen betydligt flackare. I Frigilianas gamla by är det ovanligt.'
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
      en: 'Farah: Frigiliana suite, even for two nights | AMARA',
      de: 'Farah: Suite in Frigiliana, auch für 2 Nächte | AMARA',
      es: 'Farah: suite en Frigiliana, incluso 2 noches | AMARA',
      nl: 'Farah: suite in Frigiliana, ook voor 2 nachten | AMARA',
      sv: 'Farah: svit i Frigiliana, även för 2 nätter | AMARA'
    },
    seoDescription: {
      en: 'AMARA Farah in historic Frigiliana: a boutique suite for 2, bookable for one or two nights. One step at the entrance and none after that.',
      de: 'AMARA Farah in der Altstadt von Frigiliana: Boutique-Suite für 2 Gäste, auch für ein oder zwei Nächte. Eine Stufe am Eingang, danach keine mehr.',
      es: 'AMARA Farah en el casco antiguo de Frigiliana: suite boutique para 2, también para una o dos noches. Un escalón en la entrada y ninguno más.',
      nl: 'AMARA Farah in het oude Frigiliana: boutique-suite voor 2, ook voor één of twee nachten. Eén trede bij de ingang en daarna geen meer.',
      sv: 'AMARA Farah i gamla Frigiliana: boutique-svit för 2, även för en eller två nätter. Ett trappsteg vid entrén, inga fler därefter.'
    },
    eyebrow: {
      en: 'Frigiliana old town',
      de: 'Altstadt Frigiliana',
      es: 'Casco antiguo de Frigiliana',
      nl: 'Oude kern van Frigiliana',
      sv: 'Frigilianas gamla stad'
    },
    headline: {
      en: 'Made for short stays in the old town',
      de: 'Für kurze Aufenthalte in der Altstadt',
      es: 'Pensada para estancias cortas en el casco antiguo',
      nl: 'Gemaakt voor korte verblijven in de oude kern',
      sv: 'Gjord för korta vistelser i gamla byn'
    },
    lead: {
      en: 'Most places in Frigiliana will not take a booking for one or two nights. Farah is built for exactly that — usually from two nights, at short notice sometimes one.',
      de: 'Die meisten Unterkünfte in Frigiliana nehmen keine Gäste für ein oder zwei Nächte. Farah ist genau dafür gemacht – in der Regel ab zwei Nächten, kurzfristig auch für eine.',
      es: 'La mayoría de los alojamientos de Frigiliana no aceptan reservas de una o dos noches. Farah está pensada justo para eso: normalmente desde dos noches y, si surge, también una.',
      nl: 'De meeste adressen in Frigiliana nemen geen boeking aan voor één of twee nachten. Farah is daar juist voor gemaakt — meestal vanaf twee nachten, op korte termijn soms één.',
      sv: 'De flesta boenden i Frigiliana tar inte emot bokningar på en eller två nätter. Farah är byggd för just det — vanligtvis från två nätter, med kort varsel ibland en.'
    },
    description: {
      en: 'One step at the main entrance and none after it — of the four places in the house, Farah is the only one that needs no stairs at all. Two rooms: the bedroom, and a second with the tea kitchen, where a stool at the worktop doubles as a desk. There is no full kitchen and no terrace. For two nights you rarely miss either; for a week you would.',
      de: 'Vom Haupteingang bis zur Wohnungstür führt eine einzige Stufe, danach keine mehr – als einzige der vier Unterkünfte im Haus kommt Farah ganz ohne Treppen aus. Zwei Räume: das Schlafzimmer und ein zweiter mit der Teeküche, dort steht ein Hocker an der Arbeitsplatte, die sich auch als Schreibtisch nutzen lässt. Eine richtige Küche und eine Terrasse gibt es nicht – für zwei Nächte fehlt beides selten, für eine Woche schon.',
      es: 'Un escalón en la entrada principal y ninguno más: de los cuatro alojamientos de la casa, Farah es el único sin escaleras. Dos estancias: el dormitorio y otra con la zona de café y té, donde un taburete junto a la encimera sirve también de escritorio. No hay cocina completa ni terraza. Para dos noches rara vez se echan de menos; para una semana, sí.',
      nl: 'Eén trede bij de hoofdingang en daarna geen enkele meer — van de vier adressen in het huis is Farah de enige zonder trappen. Twee kamers: de slaapkamer en een tweede met de theekeuken, waar een kruk aan het werkblad ook als bureau dient. Een volledige keuken en een terras zijn er niet. Voor twee nachten mis je ze zelden; voor een week wel.',
      sv: 'Ett trappsteg vid huvudentrén och inga fler efter det — av husets fyra boenden är Farah det enda helt utan trappor. Två rum: sovrummet och ett andra med tekök, där en pall vid bänkskivan också fungerar som skrivbord. Fullt kök och terrass saknas. På två nätter märks det sällan; på en vecka gör det det.'
    },
    highlights: {
      en: ['One step, and no more', 'Takes one or two nights', 'Bedroom and tea kitchen'],
      de: ['Nur eine Stufe, sonst keine', 'Auch für ein oder zwei Nächte', 'Schlafzimmer und Teeküche'],
      es: ['Un escalón y ninguno más', 'Admite una o dos noches', 'Dormitorio y zona de café y té'],
      nl: ['Eén trede, verder geen', 'Ook voor één of twee nachten', 'Slaapkamer en theekeuken'],
      sv: ['Ett trappsteg, inga fler', 'Tar emot en eller två nätter', 'Sovrum och tekök']
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
      en: 'One step at the main entrance, none after that. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, danach keine mehr. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal y ninguno más. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, daarna geen meer. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, inga fler därefter. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'Pets are not allowed',
      de: 'Haustiere nicht erlaubt',
      es: 'No se admiten mascotas',
      nl: 'Huisdieren niet toegestaan',
      sv: 'Husdjur är inte tillåtna'
    },
    kitchenNote: {
      en: 'Coffee and tea station only',
      de: 'Nur Kaffee- und Teestation',
      es: 'Solo zona de café y té',
      nl: 'Alleen koffie- en theefaciliteiten',
      sv: 'Endast kaffe- och tehörna'
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
      en: 'Step-free to the restaurants and the plaza: a Frigiliana old-town apartment for 2, terrace over the groves, Moorish walls. Small dogs on request.',
      de: 'Stufenlos zu Restaurants und Plaza: Ferienwohnung in Frigilianas Altstadt für 2, Terrasse über den Plantagen, maurische Mauern. Kleine Hunde auf Anfrage.',
      es: 'Sin escalones hasta los restaurantes y la plaza: apartamento en el casco antiguo de Frigiliana para 2, terraza sobre el campo, muros andalusíes.',
      nl: 'Trapvrij naar de restaurants en het plein: appartement in de oude kern van Frigiliana voor 2, terras boven de plantages. Kleine honden op aanvraag.',
      sv: 'Trappfritt till restauranger och torget: lägenhet i gamla Frigiliana för 2, terrass över odlingarna, moriska murar. Små hundar på förfrågan.'
    },
    eyebrow: {
      en: 'Historic apartment',
      de: 'Historisches Apartment',
      es: 'Apartamento histórico',
      nl: 'Historisch appartement',
      sv: 'Historisk lägenhet'
    },
    headline: {
      en: 'Old-town apartment facing the campo',
      de: 'Altstadt-Apartment mit Blick ins Campo',
      es: 'Apartamento en el casco antiguo frente al campo',
      nl: 'Appartement in de oude kern met zicht op de plantages',
      sv: 'Lägenhet i gamla byn med utsikt över odlingarna'
    },
    lead: {
      en: 'The largest of the four apartments in the house — and still just for two. Old, quiet, right in the village: a terrace in the afternoon sun, the pellet stove for cooler evenings.',
      de: 'Die größte der vier Wohnungen im Haus – und trotzdem nur für zwei. Alt, ruhig, mitten im Dorf: Terrasse in der Nachmittagssonne, abends der Pelletofen.',
      es: 'El más grande de los cuatro apartamentos de la casa, y aun así solo para dos. Antiguo, tranquilo, en pleno pueblo: terraza al sol de la tarde y estufa de pellets para las noches frescas.',
      nl: 'Het grootste van de vier appartementen in het huis — en toch maar voor twee. Oud, rustig, midden in het dorp: een terras in de middagzon, ’s avonds de pelletkachel.',
      sv: 'Den största av husets fyra lägenheter — och ändå bara för två. Gammal, lugn, mitt i byn: terrass i eftermiddagssolen, pelletskamin på kvällen.'
    },
    description: {
      en: 'From the terrace you look across the mango and avocado groves of Frigiliana Campo, the sea behind them. Sun reaches it around midday and stays until evening — shaded in the morning, which keeps breakfast cool. Birds early, silence at night. Lounis stands beside the church, where the village’s oldest houses are: during the restoration from 2020 to 2022 the old walls came to light, and our architect recognised Moorish construction, the era that shaped Andalusia all the way to the Alhambra. The tiles from Málaga are what guests ask about most.',
      de: 'Von der Terrasse geht der Blick über die Mango- und Avocadoplantagen des Frigiliana Campo, dahinter das Meer. Ab zwölf liegt sie in der Sonne und bleibt es bis zum Abend – morgens im Schatten, dafür kühl beim Frühstück. Morgens die Vögel, nachts Stille. Lounis steht direkt an der Kirche, wo die ältesten Häuser des Dorfes stehen: Bei der Restaurierung von 2020 bis 2022 kamen die alten Mauern zum Vorschein, und unser Architekt erkannte die Bauweise der Mauren – jener Epoche, die Andalusien bis hin zur Alhambra geprägt hat. Nach den Fliesen aus Málaga werden wir am häufigsten gefragt.',
      es: 'Desde la terraza se ve el campo de Frigiliana, sus plantaciones de mango y aguacate, y el mar al fondo. El sol llega hacia el mediodía y se queda hasta la tarde; por la mañana hay sombra, que se agradece en el desayuno. Pájaros temprano, silencio de noche. Lounis está junto a la iglesia, donde se levantan las casas más antiguas del pueblo: en la restauración de 2020 a 2022 aparecieron los muros originales y nuestro arquitecto reconoció la construcción andalusí, la de la época que dejó su huella en Andalucía hasta la Alhambra. Por los azulejos de Málaga es por lo que más preguntan los huéspedes.',
      nl: 'Vanaf het terras kijk je over de mango- en avocadoplantages van het Frigiliana Campo, met de zee daarachter. De zon komt er rond het middaguur en blijft tot de avond; ’s ochtends ligt het in de schaduw, wat het ontbijt aangenaam koel houdt. Vogels in de vroegte, stilte ’s nachts. Lounis staat pal naast de kerk, waar de oudste huizen van het dorp staan: bij de restauratie van 2020 tot 2022 kwamen de oude muren tevoorschijn en onze architect herkende Moorse bouwkunst, de periode die Andalusië tot aan het Alhambra heeft gevormd. Naar de tegels uit Málaga wordt het vaakst gevraagd.',
      sv: 'Från terrassen ser du ut över mango- och avokadoodlingarna i Frigiliana Campo, med havet bakom. Solen når den vid tolvtiden och stannar till kvällen; på morgonen ligger den i skugga, vilket håller frukosten sval. Fåglar tidigt, tystnad om natten. Lounis ligger intill kyrkan, där byns äldsta hus står: vid restaureringen 2020–2022 kom de gamla murarna fram, och vår arkitekt kände igen morisk byggnadsteknik, den epok som präglat Andalusien ända fram till Alhambra. Det är kaklet från Málaga som gästerna frågar mest om.'
    },
    highlights: {
      en: ['Moorish walls, uncovered 2020–2022', 'Step-free to the cafés', 'Terrace over the groves'],
      de: ['Maurische Mauern, 2020–2022 freigelegt', 'Stufenlos zu den Cafés', 'Terrasse über den Plantagen'],
      es: ['Muros andalusíes, descubiertos en 2020–2022', 'Sin escalones hasta los cafés', 'Terraza sobre el campo'],
      nl: ['Moorse muren, blootgelegd 2020–2022', 'Zonder trap naar de cafés', 'Terras boven de plantages'],
      sv: ['Moriska murar, frilagda 2020–2022', 'Trappfritt till kaféerna', 'Terrass över odlingarna']
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
      en: 'One step at the main entrance, then a few down inside the apartment. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, im Apartment einige Stufen nach unten. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal y algunos hacia abajo dentro del apartamento. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, binnen enkele naar beneden. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, sedan några nedåt inne i lägenheten. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'Small dogs on request (€15/day)',
      de: 'Kleine Hunde auf Anfrage (15 €/Tag)',
      es: 'Perros pequeños bajo petición (15 €/día)',
      nl: 'Kleine honden op aanvraag (€15/dag)',
      sv: 'Små hundar på förfrågan (15 €/dag)'
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
      '/images/amara-lounis/15-amara-frigiliana.jpg',
      '/images/amara-lounis/17-amara-frigiliana.jpg',
      '/images/amara-lounis/18-amara-frigiliana.jpg',
      '/images/amara-lounis/19-amara-frigiliana.jpg',
      '/images/amara-lounis/20-amara-frigiliana.jpg',
      '/images/amara-lounis/21-amara-frigiliana.jpg',
      '/images/amara-lounis/28-amara-frigiliana.jpg',
      '/images/amara-lounis/01-amara-frigiliana.jpg',
      '/images/amara-lounis/04-amara-frigiliana.jpg',
      '/images/amara-lounis/05-amara-frigiliana.jpg',
      '/images/amara-lounis/09-amara-frigiliana.jpg',
      '/images/amara-lounis/10-amara-frigiliana.jpg',
      '/images/amara-lounis/11-amara-frigiliana.jpg',
      '/images/amara-lounis/12-amara-frigiliana.jpg',
      '/images/amara-lounis/13-amara-frigiliana.jpg',
      '/images/amara-lounis/14-amara-frigiliana.jpg',
      '/images/amara-lounis/16-amara-frigiliana.jpg',
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
      { name: 'petsAllowed', value: true }
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
      en: 'One step at the main entrance, six more up to the apartment. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, sechs weitere bis zur Wohnung. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal y seis más hasta el apartamento. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, zes verder omhoog naar het appartement. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, sex till upp till lägenheten. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'No pets — Lounis and Maha take small dogs',
      de: 'Keine Haustiere – dafür gibt es Lounis und Maha',
      es: 'No se admiten mascotas; Lounis y Maha sí aceptan perros pequeños',
      nl: 'Geen huisdieren — bij Lounis en Maha kunnen kleine honden wel',
      sv: 'Inga husdjur — men Lounis och Maha tar emot små hundar'
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
      en: 'Maha: Frigiliana apartment with a 60 m² terrace | AMARA',
      de: 'Maha: Apartment mit 60 m² Terrasse, Frigiliana | AMARA',
      es: 'Maha: apartamento en Frigiliana con terraza de 60 m² | AMARA',
      nl: 'Maha: appartement Frigiliana met terras van 60 m² | AMARA',
      sv: 'Maha: lägenhet i Frigiliana med 60 m² terrass | AMARA'
    },
    seoDescription: {
      en: 'A 60 m² terrace with an outdoor kitchen, highest in the house: a Frigiliana apartment for 2 with the widest view. Small dogs on request.',
      de: '60 m² Terrasse mit Außenküche, ganz oben im Haus: Ferienwohnung in Frigiliana für 2 mit der weitesten Aussicht. Kleine Hunde auf Anfrage.',
      es: 'Terraza de 60 m² con cocina exterior, en lo más alto de la casa: apartamento en Frigiliana para 2 con las vistas más amplias. Perros pequeños bajo petición.',
      nl: 'Terras van 60 m² met buitenkeuken, het hoogst in huis: appartement in Frigiliana voor 2 met het verste uitzicht. Kleine honden op aanvraag.',
      sv: '60 m² terrass med utekök, högst upp i huset: lägenhet i Frigiliana för 2 med den vidaste utsikten. Små hundar på förfrågan.'
    },
    eyebrow: {
      en: 'Large private terrace',
      de: 'Große private Terrasse',
      es: 'Gran terraza privada',
      nl: 'Groot privéterras',
      sv: 'Stor privat terrass'
    },
    headline: {
      en: 'Sixty square metres of open-air terrace',
      de: 'Sechzig Quadratmeter Terrasse unter freiem Himmel',
      es: 'Sesenta metros cuadrados de terraza al aire libre',
      nl: 'Zestig vierkante meter terras onder de blote hemel',
      sv: 'Sextio kvadratmeter terrass under bar himmel'
    },
    lead: {
      en: 'Maha’s terrace measures 60 square metres, open to the sky, with parasols and partly shaded by sails. Plus a small outdoor kitchen — if you like cooking outside, this is where you can.',
      de: 'Mahas Terrasse misst 60 Quadratmeter – offen zum Himmel, mit Sonnenschirmen und teilweise von Sonnensegeln beschattet. Dazu eine kleine Außenküche: Wer draußen kochen möchte, kann es hier.',
      es: 'La terraza de Maha mide 60 metros cuadrados, abierta al cielo, con sombrillas y en parte cubierta por velas de sombra. Y una pequeña cocina exterior: quien quiera cocinar al aire libre, aquí puede.',
      nl: 'Het terras van Maha meet 60 vierkante meter, open naar de hemel, met parasols en deels beschaduwd door schaduwdoeken. Plus een kleine buitenkeuken: wie graag buiten kookt, kan dat hier.',
      sv: 'Mahas terrass mäter 60 kvadratmeter, öppen mot himlen, med parasoll och delvis skuggad av solsegel. Dessutom ett litet utekök: den som vill laga mat utomhus kan göra det här.'
    },
    description: {
      en: 'Here the terrace is the actual living room. All three AMARA terrace apartments have a hammock, two loungers and an outdoor shower — but Maha gives you more room around them, plus an outdoor kitchen the others do not have. Maha sits highest in the house and has the widest view. In exchange the bed is 150 centimetres, narrower than in Lounis or Zaid, and there is no washing machine.',
      de: 'Die Terrasse ist hier das eigentliche Wohnzimmer. Hängematte, zwei Liegen und Außendusche gibt es in allen drei AMARA-Apartments mit Terrasse – bei Maha aber mit mehr Platz und dazu einer Außenküche, die es sonst nirgends gibt. Maha liegt am höchsten im Haus und hat die weiteste Aussicht. Dafür ist das Bett mit 150 Zentimetern schmaler als in Lounis oder Zaid, und eine Waschmaschine gibt es nicht.',
      es: 'Aquí la terraza es el verdadero salón. Los tres apartamentos AMARA con terraza tienen hamaca, dos tumbonas y ducha exterior; en Maha, además, hay mucho más espacio y una cocina exterior que no tiene ningún otro. Maha está en lo más alto de la casa y ofrece las vistas más amplias. A cambio, la cama mide 150 centímetros, es más estrecha que la de Lounis o Zaid y no hay lavadora.',
      nl: 'Hier is het terras de eigenlijke woonkamer. Alle drie de AMARA-appartementen met terras hebben een hangmat, twee ligbedden en een buitendouche — bij Maha staat er veel meer ruimte omheen en is er bovendien een buitenkeuken die de andere niet hebben. Maha ligt het hoogst in het huis en heeft het verste uitzicht. Daar staat tegenover dat het bed 150 centimeter breed is, smaller dan in Lounis of Zaid, en dat er geen wasmachine is.',
      sv: 'Här är terrassen det egentliga vardagsrummet. Alla tre AMARA-lägenheter med terrass har hängmatta, två solsängar och utedusch — hos Maha finns det mycket mer plats runt dem, plus ett utekök som de andra saknar. Maha ligger högst i huset och har den vidaste utsikten. I gengäld är sängen 150 centimeter, smalare än i Lounis och Zaid, och någon tvättmaskin finns inte.'
    },
    highlights: {
      en: ['60 m² terrace, open to the sky', 'Outdoor kitchen for cooking outside', 'The widest view in the house'],
      de: ['60 m² Terrasse unter freiem Himmel', 'Außenküche zum Kochen im Freien', 'Die weiteste Aussicht im Haus'],
      es: ['Terraza de 60 m² abierta al cielo', 'Cocina exterior para cocinar fuera', 'Las vistas más amplias de la casa'],
      nl: ['Terras van 60 m², open naar de hemel', 'Buitenkeuken om buiten te koken', 'Het verste uitzicht van het huis'],
      sv: ['60 m² terrass under bar himmel', 'Utekök för matlagning utomhus', 'Husets vidaste utsikt']
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
      en: 'One step at the main entrance, six up to the apartment, a few more inside. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, sechs bis zur Wohnung, einige weitere im Apartment. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal, seis hasta el apartamento y algunos más dentro. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, zes tot het appartement en binnen nog enkele. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, sex upp till lägenheten och några till inne. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'Small dogs on request (€15/day)',
      de: 'Kleine Hunde auf Anfrage (15 €/Tag)',
      es: 'Perros pequeños bajo petición (15 €/día)',
      nl: 'Kleine honden op aanvraag (€15/dag)',
      sv: 'Små hundar på förfrågan (15 €/dag)'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: '60 m² terrace with outdoor kitchen',
      de: '60 m² Terrasse mit Außenküche',
      es: 'Terraza de 60 m² con cocina exterior',
      nl: 'Terras van 60 m² met buitenkeuken',
      sv: '60 m² terrass med utekök'
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
      { name: 'petsAllowed', value: true }
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
    bedrooms: 1,
    bathrooms: 1,
    rooms: 2,
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
      en: 'Playa: Nerja apartment, 100 m from the beach | AMARA',
      de: 'Playa: Apartment 100 m vom Strand, Nerja | AMARA',
      es: 'Playa: apartamento en Nerja a 100 m de la playa | AMARA',
      nl: 'Playa: appartement Nerja, 100 m van het strand | AMARA',
      sv: 'Playa: lägenhet i Nerja, 100 m från stranden | AMARA'
    },
    seoDescription: {
      en: 'AMARA Playa in Nerja: 100 m to Torrecilla beach, 500 m to the Balcón de Europa, and still quiet. Small apartment for 2 on the fifth floor, with a lift.',
      de: 'AMARA Playa in Nerja: 100 m zum Strand Torrecilla, 500 m zum Balcón de Europa – und trotzdem ruhig. Kleines Apartment für 2 im fünften Stock, mit Aufzug.',
      es: 'AMARA Playa en Nerja: a 100 m de la playa de Torrecilla y 500 m del Balcón de Europa. Apartamento tranquilo para 2 en la quinta planta, con ascensor.',
      nl: 'AMARA Playa in Nerja: 100 m van het Torrecilla-strand en 500 m van het Balcón de Europa. Rustig appartement voor 2 op de vijfde verdieping, met lift.',
      sv: 'AMARA Playa i Nerja: 100 m till Torrecillastranden, 500 m till Balcón de Europa — och ändå tyst. Liten lägenhet för 2 på femte våningen, med hiss.'
    },
    eyebrow: {
      en: 'Nerja coast',
      de: 'Küste von Nerja',
      es: 'Costa de Nerja',
      nl: 'Kust van Nerja',
      sv: 'Nerjas kust'
    },
    headline: {
      en: 'A hundred metres from the beach, and still quiet',
      de: 'Hundert Meter zum Strand, und trotzdem still',
      es: 'A cien metros de la playa y aun así tranquilo',
      nl: 'Honderd meter van het strand, en toch stil',
      sv: 'Hundra meter från stranden, och ändå tyst'
    },
    lead: {
      en: 'It is 100 metres to Torrecilla beach and 500 to the Balcón de Europa. And it is still quiet here — in Nerja, that combination is the rare part.',
      de: 'Zum Strand Torrecilla sind es 100 Meter, zum Balcón de Europa 500. Und trotzdem ist es hier ruhig – in Nerja ist das die seltene Kombination.',
      es: 'Hasta la playa de Torrecilla hay 100 metros; hasta el Balcón de Europa, 500. Y aun así aquí se está tranquilo: en Nerja, esa combinación es lo raro.',
      nl: 'Naar het strand Torrecilla is het 100 meter, naar het Balcón de Europa 500. En toch is het hier rustig — in Nerja is dat de zeldzame combinatie.',
      sv: 'Till Torrecillastranden är det 100 meter, till Balcón de Europa 500. Och ändå är det tyst här — i Nerja är det kombinationen som är ovanlig.'
    },
    description: {
      en: 'Playa is small, and that is exactly what guests come back to: it feels snug rather than tight. Fifth floor with a lift — which is where both the view and the quiet come from, a hundred metres from the beach. The sea view is a side one, not a panorama, but the sea itself really is at the door. Full kitchen, washing machine, balcony, a 50-inch screen, and at 200 × 200 the largest bed of any AMARA place.',
      de: 'Playa ist klein, und genau das schätzen die Gäste: Es wirkt gemütlich, nicht knapp. Fünfter Stock mit Aufzug – daher kommen der Blick und die Ruhe, hundert Meter vom Strand entfernt. Der Meerblick ist ein seitlicher, kein Panorama, dafür liegt das Meer wirklich vor der Tür. Komplette Küche, Waschmaschine, Balkon, ein 50-Zoll-Bildschirm und mit 200 × 200 das größte Bett aller AMARA-Unterkünfte.',
      es: 'Playa es pequeño, y es justo lo que los huéspedes valoran: resulta acogedor, no estrecho. Quinta planta con ascensor: de ahí vienen las vistas y la calma, a cien metros de la playa. Las vistas al mar son laterales, no panorámicas, pero el mar está de verdad en la puerta. Cocina completa, lavadora, balcón, pantalla de 50 pulgadas y, con 200 × 200, la cama más grande de todos los alojamientos AMARA.',
      nl: 'Playa is klein, en juist dat waarderen gasten: het voelt knus, niet krap. Vijfde verdieping met lift — daar komen het uitzicht en de rust vandaan, op honderd meter van het strand. Het zeezicht is zijdelings, geen panorama, maar de zee ligt echt voor de deur. Volledige keuken, wasmachine, balkon, een scherm van 50 inch en met 200 × 200 het grootste bed van alle AMARA-adressen.',
      sv: 'Playa är litet, och det är precis vad gästerna uppskattar: det känns ombonat, inte trångt. Femte våningen med hiss — därifrån kommer både utsikten och lugnet, hundra meter från stranden. Havsutsikten är en sidoutsikt, inget panorama, men havet ligger verkligen utanför dörren. Fullt kök, tvättmaskin, balkong, en 50-tums skärm och med 200 × 200 den största sängen av alla AMARA-boenden.'
    },
    highlights: {
      en: ['100 m to the beach, 500 m to the Balcón de Europa', 'Quiet on the fifth floor, with a lift', 'Largest AMARA bed, 200 × 200'],
      de: ['100 m zum Strand, 500 m zum Balcón de Europa', 'Ruhig im fünften Stock, mit Aufzug', 'Größtes AMARA-Bett, 200 × 200'],
      es: ['100 m a la playa, 500 m al Balcón de Europa', 'Tranquilo en la quinta planta, con ascensor', 'La cama AMARA más grande, 200 × 200'],
      nl: ['100 m naar het strand, 500 m naar het Balcón de Europa', 'Rustig op de vijfde verdieping, met lift', 'Grootste AMARA-bed, 200 × 200'],
      sv: ['100 m till stranden, 500 m till Balcón de Europa', 'Tyst på femte våningen, med hiss', 'Största AMARA-sängen, 200 × 200']
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
    bedrooms: 2,
    bathrooms: 2,
    rooms: 4,
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
      en: 'AMARA Romantic Days · Tarifa',
      de: 'AMARA Romantic Days · Tarifa',
      es: 'AMARA Romantic Days · Tarifa',
      nl: 'AMARA Romantic Days · Tarifa',
      sv: 'AMARA Romantic Days · Tarifa'
    },
    headline: {
      en: 'Atlantic sunsets, Tarifa on foot and the freedom to surf',
      de: 'Atlantik-Sonnenuntergänge, Tarifa zu Fuß und Freiheit fürs Kitesurfen',
      es: 'Atardeceres atlánticos, Tarifa a pie y libertad para practicar kitesurf',
      nl: 'Atlantische zonsondergangen, Tarifa te voet en alle vrijheid om te kitesurfen',
      sv: 'Solnedgång över Atlanten, Tarifa till fots och frihet att kitesurfa'
    },
    lead: {
      en: [
        'A spacious Tarifa home that works beautifully for two: Atlantic views from the terrace, the Old Town within walking distance and your own underground parking when you want to head farther along the coast.',
        `For couples who kitesurf — or want to learn — our cooperation with Tarifa Surf Club makes the sport unusually easy to build into the stay. And if you now travel with younger children, the separate bunk-bed room gives you useful extra flexibility without changing the apartment's couple-first character.`
      ].join('\n\n'),
      de: [
        'Eine großzügige Tarifa-Unterkunft, die wunderbar für zwei funktioniert: Atlantikblick von der Terrasse, die Altstadt zu Fuß erreichbar und ein eigener Tiefgaragenstellplatz, wenn ihr weiter entlang der Küste fahren möchtet.',
        'Für Paare, die kiten – oder es lernen möchten –, macht unsere Kooperation mit dem Tarifa Surf Club den Sport besonders unkompliziert. Und wenn ihr inzwischen mit kleineren Kindern reist, bietet das separate Hochbettzimmer zusätzliche Flexibilität, ohne dass die Wohnung ihren Charakter als AMARA-Unterkunft für Paare verliert.'
      ].join('\n\n'),
      es: [
        'Una casa amplia en Tarifa que funciona especialmente bien para dos: vistas al Atlántico desde la terraza, el casco antiguo a poca distancia andando y vuestra propia plaza de garaje subterráneo cuando queráis moveros por la costa.',
        'Para parejas que practican kitesurf —o quieren aprender— nuestra colaboración con Tarifa Surf Club facilita mucho la experiencia. Y si ahora viajáis con niños pequeños, el dormitorio separado con litera aporta flexibilidad adicional sin convertir el apartamento en una vivienda pensada principalmente para grupos.'
      ].join('\n\n'),
      nl: [
        'Een ruime woning in Tarifa die uitstekend werkt voor twee: Atlantisch uitzicht vanaf het terras, de oude stad op loopafstand en een eigen ondergrondse parkeerplaats wanneer jullie verder langs de kust willen.',
        'Voor stellen die kitesurfen — of het willen leren — maakt onze samenwerking met Tarifa Surf Club de sport bijzonder eenvoudig onderdeel van de reis. Reizen jullie inmiddels met jonge kinderen, dan biedt de aparte kamer met stapelbed extra flexibiliteit zonder dat de woning haar couple-first karakter verliest.'
      ].join('\n\n'),
      sv: [
        'Ett rymligt boende i Tarifa som fungerar mycket bra för två: Atlantutsikt från terrassen, gamla stan på gångavstånd och egen plats i underjordiskt garage när ni vill ta bilen längre längs kusten.',
        'För par som kitesurfar — eller vill lära sig — gör samarbetet med Tarifa Surf Club sporten ovanligt enkel att lägga in i vistelsen. Reser ni numera med yngre barn ger det separata rummet med våningssäng extra flexibilitet utan att boendet tappar sitt fokus på par.'
      ].join('\n\n')
    },
    description: {
      en: [
        'Set over two levels, AMARA Family & Surf combines a main bedroom with a 150 × 200 cm double bed, a separate bunk-bed room, two bathrooms, a large kitchen and an Atlantic-facing terrace for sunsets.',
        'The apartment is in Urbanización La Marina, with a supermarket directly opposite and the Old Town roughly 10–15 minutes away on foot. Your reserved underground parking space makes it easy to leave the car when you do not need it — and use it whenever you want to head west towards Valdevaqueros, the kite beaches or a day trip.',
        'The technical occupancy is four guests, but the sleeping layout is particularly well suited to a couple or to parents travelling with younger children.'
      ].join('\n\n'),
      de: [
        'AMARA Family & Surf erstreckt sich über zwei Ebenen und verbindet ein Hauptschlafzimmer mit 150 × 200 cm Doppelbett, ein separates Hochbettzimmer, zwei Badezimmer, eine große Küche und eine Terrasse mit Atlantikblick und Sonnenuntergang.',
        'Die Wohnung liegt in der Urbanización La Marina. Der Supermarkt befindet sich direkt gegenüber, die Altstadt erreicht ihr ungefähr in 10–15 Minuten zu Fuß. Der eigene Tiefgaragenstellplatz bedeutet: Das Auto kann stehen bleiben, wenn ihr es nicht braucht – und ihr könnt unkompliziert Richtung Valdevaqueros, Kite-Strände oder Ausflüge starten.',
        'Die technische Belegung beträgt vier Gäste. Von der Schlafaufteilung her passt die Wohnung besonders gut zu einem Paar oder zu Eltern, die mit kleineren Kindern reisen.'
      ].join('\n\n'),
      es: [
        'AMARA Family & Surf se distribuye en dos niveles y cuenta con dormitorio principal con cama doble de 150 × 200 cm, un dormitorio separado con litera, dos baños, cocina amplia y terraza con vistas al Atlántico y al atardecer.',
        'La vivienda está en Urbanización La Marina. El supermercado está justo enfrente y el casco antiguo queda aproximadamente a 10–15 minutos andando. La plaza privada en el garaje subterráneo permite dejar el coche cuando no lo necesitáis y utilizarlo fácilmente para ir hacia Valdevaqueros, las playas de kite o una excursión.',
        'La capacidad técnica es de cuatro huéspedes, pero la distribución resulta especialmente adecuada para una pareja o para padres que viajan con niños pequeños.'
      ].join('\n\n'),
      nl: [
        'AMARA Family & Surf ligt verdeeld over twee niveaus en heeft een hoofdslaapkamer met een tweepersoonsbed van 150 × 200 cm, een aparte kamer met stapelbed, twee badkamers, een ruime keuken en een terras met Atlantisch uitzicht en zonsondergang.',
        'De woning ligt in Urbanización La Marina. De supermarkt ligt direct aan de overkant en de oude stad is ongeveer 10–15 minuten lopen. Dankzij de eigen ondergrondse parkeerplaats kan de auto blijven staan wanneer jullie hem niet nodig hebben en gemakkelijk worden gebruikt voor Valdevaqueros, de kite-stranden of uitstapjes.',
        'De technische capaciteit is vier gasten, maar de slaapindeling past vooral goed bij een stel of bij ouders die met jonge kinderen reizen.'
      ].join('\n\n'),
      sv: [
        'AMARA Family & Surf är fördelat på två plan och har ett huvudsovrum med dubbelsäng på 150 × 200 cm, ett separat rum med våningssäng, två badrum, ett stort kök och en terrass med utsikt över Atlanten och solnedgången.',
        'Boendet ligger i Urbanización La Marina. Mataffären finns direkt mittemot och gamla stan ligger ungefär 10–15 minuters promenad bort. Den egna garageplatsen gör att bilen kan stå när ni inte behöver den och användas smidigt när ni vill köra mot Valdevaqueros, kitesurfstränderna eller andra utflykter.',
        'Den tekniska kapaciteten är fyra gäster, men sovlösningen passar särskilt bra för ett par eller föräldrar som reser med yngre barn.'
      ].join('\n\n')
    },
    highlights: {
      en: [
        'Room to enjoy Tarifa together\n75 m² over two levels, with a main double bedroom and additional bunk-bed room.',
        'Atlantic evenings at home\nA private terrace with Atlantic views and sunset as a quieter counterpoint to active days outside.',
        `Town on foot, coast by car\nOld Town around 10–15 minutes away on foot, private underground parking and easy westbound access towards Tarifa's kite beaches.`
      ],
      de: [
        'Viel Raum für gemeinsame Tarifa-Tage\n75 m² auf zwei Ebenen mit Hauptschlafzimmer und zusätzlichem Hochbettzimmer.',
        'Atlantikabende auf der eigenen Terrasse\nMeerblick und Sonnenuntergang als ruhiger Gegenpol zu aktiven Tagen draußen.',
        'Altstadt zu Fuß, Küste mit dem Auto\nCa. 10–15 Minuten in die Altstadt, eigener Tiefgaragenplatz und unkomplizierte Fahrtrichtung zu den westlichen Kite-Stränden.'
      ],
      es: [
        'Espacio para disfrutar Tarifa juntos\n75 m² en dos niveles, dormitorio principal y habitación adicional con litera.',
        'Atardeceres sobre el Atlántico\nTerraza privada con vistas al mar para terminar el día con calma.',
        'Centro a pie, costa en coche\nCasco antiguo a unos 10–15 minutos andando, plaza propia de garaje y salida cómoda hacia las playas occidentales.'
      ],
      nl: [
        'Ruimte om Tarifa samen te beleven\n75 m² over twee niveaus, met hoofdslaapkamer en extra stapelbedkamer.',
        'Atlantische avonden op het terras\nEigen buitenruimte met uitzicht op zee en zonsondergang.',
        'Stad te voet, kust met de auto\nOude stad op circa 10–15 minuten lopen, eigen garage en eenvoudige route naar de westelijke kite-stranden.'
      ],
      sv: [
        'Gott om plats för Tarifa tillsammans\n75 m² på två plan med huvudsovrum och extra rum med våningssäng.',
        'Atlantkvällar på den egna terrassen\nHavsutsikt och solnedgång efter en dag ute.',
        'Gamla stan till fots, kusten med bil\nCirka 10–15 minuter till gamla stan, eget garage och enkel väg mot de västra kitesurfstränderna.'
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
      '/images/amara-tarifa/amara-tarifa-apartment07.webp',
      '/images/amara-tarifa/amara-tarifa-apartment08.webp',
      '/images/amara-tarifa/amara-tarifa-apartment09.webp',
      '/images/amara-tarifa/amara-tarifa-apartment10.webp',
      '/images/amara-tarifa/amara-tarifa-apartment11.webp',
      '/images/amara-tarifa/amara-tarifa-apartment12.webp',
      '/images/amara-tarifa/amara-tarifa-apartment13.webp',
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
