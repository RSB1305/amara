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

export interface VacationRentalAmenityFeature {
  name: string;
  value: boolean | string;
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
  priceRange: string;
  priceLabel: LocalizedText;
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
  accessNote: LocalizedText;
  petsNote: LocalizedText;
  kitchenNote: LocalizedText;
  outdoorNote: LocalizedText;
  viewNote: LocalizedText;
  images: string[];
  imageAlt: LocalizedText;
  amenityFeatures: VacationRentalAmenityFeature[];
}

const languages: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const frigilianaAddress = {
  street: 'Calle Chorruelo 5',
  city: 'Frigiliana',
  zip: '29788',
  region: 'Andalusia',
  country: 'ES' as const,
  latitude: 36.793171,
  longitude: -3.899107
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
    priceRange: 'EUR 75-120',
    priceLabel: {
      en: 'EUR 75-120',
      de: '75 EUR - 120 EUR',
      es: '75 EUR - 120 EUR',
      nl: 'EUR 75 - EUR 120',
      sv: '75 EUR - 120 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-farah-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/52229175'
    ],
    seoTitle: {
      en: 'AMARA Farah | Self-Contained Boutique Suite in Frigiliana',
      de: 'AMARA Farah | Abgeschlossene Boutique-Suite in Frigiliana',
      es: 'AMARA Farah | Suite boutique independiente en Frigiliana',
      nl: 'AMARA Farah | Zelfstandige boutique-suite in Frigiliana',
      sv: 'AMARA Farah | Självständig boutique-svit i Frigiliana'
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
    priceRange: 'EUR 90-180',
    priceLabel: {
      en: 'EUR 90-180',
      de: '90 EUR - 180 EUR',
      es: '90 EUR - 180 EUR',
      nl: 'EUR 90 - EUR 180',
      sv: '90 EUR - 180 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-lounis-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/632415709742535474'
    ],
    seoTitle: {
      en: 'AMARA Lounis | Historic Apartment in Frigiliana',
      de: 'AMARA Lounis | Historisches Apartment in Frigiliana',
      es: 'AMARA Lounis | Apartamento histórico en Frigiliana',
      nl: 'AMARA Lounis | Historisch appartement in Frigiliana',
      sv: 'AMARA Lounis | Historisk lägenhet i Frigiliana'
    },
    seoDescription: {
      en: 'AMARA Lounis is a historic Frigiliana apartment for 2 guests, with private terrace, kitchen, sea-facing outlook, and calm old-town character.',
      de: 'AMARA Lounis ist ein historisches Apartment in Frigiliana für 2 Gäste, mit privater Terrasse, Küche und ruhigem Altstadtcharakter.',
      es: 'AMARA Lounis es un apartamento histórico en Frigiliana para 2 huéspedes, con terraza privada, cocina y ambiente tranquilo de pueblo.',
      nl: 'AMARA Lounis is een historisch appartement in Frigiliana voor 2 gasten, met privéterras, keuken en rustige dorpssfeer.',
      sv: 'AMARA Lounis är en historisk lägenhet i Frigiliana för 2 gäster, med privat terrass, kök och lugn bykänsla.'
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
      en: 'Calle Chorruelo is where Calle Real carries on, which is why the restaurants, bars and shops of Frigiliana are reachable from here without a step. The Plaza de las Tres Culturas is about 400 metres away, and not one stair in between. In Frigiliana’s old town, that is rare.',
      de: 'Die Calle Chorruelo ist die Verlängerung der Calle Real – deshalb erreicht man von hier die Restaurants, Bars und Geschäfte von Frigiliana stufenlos. Bis zur Plaza de las Tres Culturas sind es rund 400 Meter, ohne eine einzige Treppe. In Frigilianas Altstadt ist das selten.',
      es: 'La Calle Chorruelo es la continuación de la Calle Real, y por eso desde aquí se llega a los restaurantes, bares y tiendas de Frigiliana sin un solo escalón. Hasta la Plaza de las Tres Culturas hay unos 400 metros, todos llanos. En el casco antiguo de Frigiliana eso es poco común.',
      nl: 'De Calle Chorruelo is het verlengde van de Calle Real, en daarom bereik je vanaf hier de restaurants, bars en winkels van Frigiliana zonder één trede. Naar de Plaza de las Tres Culturas is het zo’n 400 meter, volledig vlak. In de oude kern van Frigiliana is dat zeldzaam.',
      sv: 'Calle Chorruelo är förlängningen av Calle Real, och därför når du restauranger, barer och butiker i Frigiliana härifrån utan ett enda trappsteg. Till Plaza de las Tres Culturas är det ungefär 400 meter, hela vägen plant. I Frigilianas gamla by är det ovanligt.'
    },
    description: {
      en: 'From the terrace you look across the mango and avocado groves of Frigiliana Campo, the sea behind them. Sun reaches it around midday and stays until evening — shaded in the morning, which keeps breakfast cool. Birds early, silence at night. Lounis stands beside the church, where the village’s oldest houses are: during the 2020 renovation the old walls came to light, and our architect recognised Moorish construction, the era that shaped Andalusia all the way to the Alhambra. The tiles from Málaga are what guests ask about most.',
      de: 'Von der Terrasse geht der Blick über die Mango- und Avocadoplantagen des Frigiliana Campo, dahinter das Meer. Ab zwölf liegt sie in der Sonne und bleibt es bis zum Abend – morgens im Schatten, dafür kühl beim Frühstück. Morgens die Vögel, nachts Stille. Lounis steht direkt an der Kirche, wo die ältesten Häuser des Dorfes stehen: Beim Umbau 2020 kamen die alten Mauern zum Vorschein, und unser Architekt erkannte die Bauweise der Mauren – jener Epoche, die Andalusien bis hin zur Alhambra geprägt hat. Nach den Fliesen aus Málaga werden wir am häufigsten gefragt.',
      es: 'Desde la terraza se ve el campo de Frigiliana, sus plantaciones de mango y aguacate, y el mar al fondo. El sol llega hacia el mediodía y se queda hasta la tarde; por la mañana hay sombra, que se agradece en el desayuno. Pájaros temprano, silencio de noche. Lounis está junto a la iglesia, donde se levantan las casas más antiguas del pueblo: en la reforma de 2020 aparecieron los muros originales y nuestro arquitecto reconoció la construcción andalusí, la de la época que dejó su huella en Andalucía hasta la Alhambra. Por los azulejos de Málaga es por lo que más preguntan los huéspedes.',
      nl: 'Vanaf het terras kijk je over de mango- en avocadoplantages van het Frigiliana Campo, met de zee daarachter. De zon komt er rond het middaguur en blijft tot de avond; ’s ochtends ligt het in de schaduw, wat het ontbijt aangenaam koel houdt. Vogels in de vroegte, stilte ’s nachts. Lounis staat pal naast de kerk, waar de oudste huizen van het dorp staan: bij de verbouwing van 2020 kwamen de oude muren tevoorschijn en onze architect herkende Moorse bouwkunst, de periode die Andalusië tot aan het Alhambra heeft gevormd. Naar de tegels uit Málaga wordt het vaakst gevraagd.',
      sv: 'Från terrassen ser du ut över mango- och avokadoodlingarna i Frigiliana Campo, med havet bakom. Solen når den vid tolvtiden och stannar till kvällen; på morgonen ligger den i skugga, vilket håller frukosten sval. Fåglar tidigt, tystnad om natten. Lounis ligger intill kyrkan, där byns äldsta hus står: vid ombyggnaden 2020 kom de gamla murarna fram, och vår arkitekt kände igen morisk byggnadsteknik, den epok som präglat Andalusien ända fram till Alhambra. Det är kaklet från Málaga som gästerna frågar mest om.'
    },
    highlights: {
      en: ['Moorish walls, uncovered in 2020', 'Step-free to the cafés', 'Terrace over the groves'],
      de: ['Maurische Mauern, 2020 freigelegt', 'Stufenlos zu den Cafés', 'Terrasse über den Plantagen'],
      es: ['Muros andalusíes, descubiertos en 2020', 'Sin escalones hasta los cafés', 'Terraza sobre el campo'],
      nl: ['Moorse muren, in 2020 blootgelegd', 'Zonder trap naar de cafés', 'Terras boven de plantages'],
      sv: ['Moriska murar, frilagda 2020', 'Trappfritt till kaféerna', 'Terrass över odlingarna']
    },
    accessNote: {
      en: 'One step at the main entrance, then a few down inside the apartment. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, im Apartment einige Stufen nach unten. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal y algunos hacia abajo dentro del apartamento. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, binnen enkele naar beneden. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, sedan några nedåt inne i lägenheten. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'Small dogs on request',
      de: 'Kleine Hunde auf Anfrage',
      es: 'Perros pequeños bajo petición',
      nl: 'Kleine honden op aanvraag',
      sv: 'Små hundar på förfrågan'
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
    priceRange: 'EUR 90-180',
    priceLabel: {
      en: 'EUR 90-180',
      de: '90 EUR - 180 EUR',
      es: '90 EUR - 180 EUR',
      nl: 'EUR 90 - EUR 180',
      sv: '90 EUR - 180 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-zaid-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/643474398791611415'
    ],
    seoTitle: {
      en: 'AMARA Zaid | Romantic Terrace Apartment in Frigiliana',
      de: 'AMARA Zaid: Apartment mit Terrasse in Frigiliana',
      es: 'AMARA Zaid: apartamento romántico con terraza, Frigiliana',
      nl: 'AMARA Zaid | Romantisch terrasappartement in Frigiliana',
      sv: 'AMARA Zaid | Romantisk terrasslägenhet i Frigiliana'
    },
    seoDescription: {
      en: 'AMARA Zaid is a romantic terrace apartment in Frigiliana for 2 guests, with kitchen, private terrace, bathroom, and quiet village atmosphere.',
      de: 'AMARA Zaid ist ein romantisches Terrassenapartment in Frigiliana für 2 Gäste, mit Küche, privater Terrasse und ruhiger Dorfatmosphäre.',
      es: 'AMARA Zaid es un apartamento romántico con terraza en Frigiliana para 2 huéspedes, con cocina, baño privado y ambiente tranquilo.',
      nl: 'AMARA Zaid is een romantisch terrasappartement in Frigiliana voor 2 gasten, met keuken, badkamer en rustige dorpssfeer.',
      sv: 'AMARA Zaid är en romantisk terrasslägenhet i Frigiliana för 2 gäster, med kök, badrum och lugn byatmosfär.'
    },
    eyebrow: {
      en: 'Romantic terrace retreat',
      de: 'Romantischer Terrassenrueckzug',
      es: 'Refugio romántico con terraza',
      nl: 'Romantisch terrasverblijf',
      sv: 'Romantisk terrassvistelse'
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
    priceRange: 'EUR 90-180',
    priceLabel: {
      en: 'EUR 90-180',
      de: '90 EUR - 180 EUR',
      es: '90 EUR - 180 EUR',
      nl: 'EUR 90 - EUR 180',
      sv: '90 EUR - 180 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/das-amara-maha-in-der-altstadt-von-frigiliana.de.html',
      'https://www.airbnb.com/rooms/643486091667223317'
    ],
    seoTitle: {
      en: 'AMARA Maha | Apartment with Large Terrace in Frigiliana',
      de: 'AMARA Maha | Apartment mit großer Terrasse in Frigiliana',
      es: 'AMARA Maha | Apartamento con gran terraza en Frigiliana',
      nl: 'AMARA Maha | Appartement met groot terras in Frigiliana',
      sv: 'AMARA Maha | Lägenhet med stor terrass i Frigiliana'
    },
    seoDescription: {
      en: 'AMARA Maha is a private Frigiliana apartment for 2 guests, with large terrace, kitchen, bathroom, sea-facing outlook, and quiet AMARA hosting.',
      de: 'AMARA Maha ist ein privates Apartment in Frigiliana für 2 Gäste, mit großer Terrasse, Küche, Bad und ruhiger AMARA-Gastlichkeit.',
      es: 'AMARA Maha es un apartamento privado en Frigiliana para 2 huéspedes, con gran terraza, cocina, baño y ambiente tranquilo.',
      nl: 'AMARA Maha is een privaat appartement in Frigiliana voor 2 gasten, met groot terras, keuken, badkamer en rustige AMARA-sfeer.',
      sv: 'AMARA Maha är en privat lägenhet i Frigiliana för 2 gäster, med stor terrass, kök, badrum och lugnt AMARA-värdskap.'
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
      en: 'Here the terrace is the actual living room. Hammock, loungers and outdoor shower come with every AMARA apartment — but here with room to spread out, and an outdoor kitchen the others do not have. Maha sits highest in the house and has the widest view. In exchange the bed is 150 centimetres, narrower than in Lounis or Zaid, and there is no washing machine.',
      de: 'Die Terrasse ist hier das eigentliche Wohnzimmer. Hängematte, Liegen und Außendusche gibt es in jeder AMARA-Wohnung – hier aber mit Platz, und dazu eine Außenküche, die es sonst nirgends gibt. Maha liegt am höchsten im Haus und hat die weiteste Aussicht. Dafür ist das Bett mit 150 Zentimetern schmaler als in Lounis oder Zaid, und eine Waschmaschine gibt es nicht.',
      es: 'Aquí la terraza es el verdadero salón. Hamaca, tumbonas y ducha exterior las tienen todos los apartamentos AMARA, pero aquí con espacio de sobra, y además una cocina exterior que no hay en ningún otro. Maha es el más alto de la casa y el de vistas más amplias. A cambio, la cama mide 150 centímetros, más estrecha que en Lounis o Zaid, y no hay lavadora.',
      nl: 'Hier is het terras de eigenlijke woonkamer. Hangmat, ligbedden en buitendouche heeft elk AMARA-appartement — hier alleen met ruimte, en met een buitenkeuken die de andere niet hebben. Maha ligt het hoogst in het huis en heeft het verste uitzicht. Daar staat tegenover dat het bed 150 centimeter breed is, smaller dan in Lounis of Zaid, en dat er geen wasmachine is.',
      sv: 'Här är terrassen det egentliga vardagsrummet. Hängmatta, solsängar och utedusch finns i varje AMARA-lägenhet — men här med gott om plats, och dessutom ett utekök som ingen annan har. Maha ligger högst i huset och har den vidaste utsikten. I gengäld är sängen 150 centimeter, smalare än i Lounis och Zaid, och någon tvättmaskin finns inte.'
    },
    highlights: {
      en: ['60 m² terrace, open to the sky', 'Outdoor kitchen for cooking outside', 'The widest view in the house'],
      de: ['60 m² Terrasse unter freiem Himmel', 'Außenküche zum Kochen im Freien', 'Die weiteste Aussicht im Haus'],
      es: ['Terraza de 60 m² abierta al cielo', 'Cocina exterior para cocinar fuera', 'Las vistas más amplias de la casa'],
      nl: ['Terras van 60 m², open naar de hemel', 'Buitenkeuken om buiten te koken', 'Het verste uitzicht van het huis'],
      sv: ['60 m² terrass under bar himmel', 'Utekök för matlagning utomhus', 'Husets vidaste utsikt']
    },
    accessNote: {
      en: 'One step at the main entrance, six up to the apartment, a few more inside. Vehicle access until 11:00 and from 17:00.',
      de: 'Eine Stufe am Haupteingang, sechs bis zur Wohnung, einige weitere im Apartment. Zufahrt bis 11 und ab 17 Uhr.',
      es: 'Un escalón en la entrada principal, seis hasta el apartamento y algunos más dentro. Acceso en coche hasta las 11:00 y desde las 17:00.',
      nl: 'Eén trede bij de hoofdingang, zes tot het appartement en binnen nog enkele. Met de auto tot 11.00 uur en vanaf 17.00 uur.',
      sv: 'Ett trappsteg vid huvudentrén, sex upp till lägenheten och några till inne. Bilinfart fram till 11 och från 17.'
    },
    petsNote: {
      en: 'Small dogs on request',
      de: 'Kleine Hunde auf Anfrage',
      es: 'Perros pequeños bajo petición',
      nl: 'Kleine honden op aanvraag',
      sv: 'Små hundar på förfrågan'
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
    priceRange: 'EUR 90-180',
    priceLabel: {
      en: 'EUR 90-180',
      de: '90 EUR - 180 EUR',
      es: '90 EUR - 180 EUR',
      nl: 'EUR 90 - EUR 180',
      sv: '90 EUR - 180 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/cozy-apartment-next-to-the-beach-and-nerja-center.de.html',
      'https://www.airbnb.com/rooms/52215543'
    ],
    seoTitle: {
      en: 'AMARA Playa | Nerja Beach Apartment with Sea View',
      de: 'AMARA Playa | Strandapartment in Nerja mit Meerblick',
      es: 'AMARA Playa | Apartamento en Nerja con vistas al mar',
      nl: 'AMARA Playa | Strandappartement in Nerja met zeezicht',
      sv: 'AMARA Playa | Strandlägenhet i Nerja med havsutsikt'
    },
    seoDescription: {
      en: 'AMARA Playa in Nerja: 100 m to Torrecilla beach, 500 m to the Balcón de Europa, and still quiet. Small apartment for 2 on the fifth floor, with a lift.',
      de: 'AMARA Playa in Nerja: 100 m zum Strand Torrecilla, 500 m zum Balcón de Europa – und trotzdem ruhig. Kleines Apartment für 2 im fünften Stock, mit Aufzug.',
      es: 'AMARA Playa en Nerja: 100 m a la playa de Torrecilla, 500 m al Balcón de Europa y aun así tranquilo. Apartamento pequeño para 2 en la quinta planta, con ascensor.',
      nl: 'AMARA Playa in Nerja: 100 m naar het strand Torrecilla, 500 m naar het Balcón de Europa — en toch rustig. Klein appartement voor 2 op de vijfde verdieping, met lift.',
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
    accessNote: {
      en: 'Lift to the fifth floor. Before it, three steps outside the door and four inside.',
      de: 'Aufzug in den fünften Stock. Davor drei Stufen vor der Haustür und vier im Haus.',
      es: 'Ascensor hasta la quinta planta. Antes, tres escalones en la calle y cuatro dentro de la casa.',
      nl: 'Lift naar de vijfde verdieping. Daarvoor drie treden buiten en vier binnen.',
      sv: 'Hiss till femte våningen. Dessförinnan tre trappsteg utanför porten och fyra inne.'
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
    priceRange: 'EUR 140-350',
    priceLabel: {
      en: 'EUR 140-350',
      de: '140 EUR - 350 EUR',
      es: '140 EUR - 350 EUR',
      nl: 'EUR 140 - EUR 350',
      sv: '140 EUR - 350 EUR'
    },
    checkinTime: '15:00:00',
    checkoutTime: '11:00:00',
    sameAs: [
      'https://www.booking.com/hotel/es/surfers-home-with-oceanview-and-pool.de.html',
      'https://www.airbnb.com/rooms/803371111851036443'
    ],
    seoTitle: {
      en: 'AMARA Family & Surf | Ocean View House in Tarifa',
      de: 'AMARA Family & Surf | Haus mit Meerblick in Tarifa',
      es: 'AMARA Family & Surf | Casa con vistas al mar en Tarifa',
      nl: 'AMARA Family & Surf | Huis met zeezicht in Tarifa',
      sv: 'AMARA Family & Surf | Hus med havsutsikt i Tarifa'
    },
    seoDescription: {
      en: 'AMARA Family & Surf is a Tarifa holiday house for up to 4 guests, with sea view, terrace, pool access, kitchen, and a surf-friendly rhythm.',
      de: 'AMARA Family & Surf ist ein Ferienhaus in Tarifa für bis zu 4 Gäste, mit Meerblick, Terrasse, Poolzugang, Küche und Surf-Rhythmus.',
      es: 'AMARA Family & Surf es una casa vacacional en Tarifa para hasta 4 huéspedes, con vistas al mar, terraza, piscina, cocina y ritmo de surf.',
      nl: 'AMARA Family & Surf is een vakantiehuis in Tarifa voor maximaal 4 gasten, met zeezicht, terras, zwembad, keuken en surfsfeer.',
      sv: 'AMARA Family & Surf är ett semesterhus i Tarifa för upp till 4 gäster, med havsutsikt, terrass, pool, kök och surfkänsla.'
    },
    eyebrow: {
      en: 'Tarifa family and surf stay',
      de: 'Tarifa für Familie und Surf',
      es: 'Tarifa para familia y surf',
      nl: 'Tarifa voor gezin en surf',
      sv: 'Tarifa för familj och surf'
    },
    headline: {
      en: 'Ocean-view house with pool access',
      de: 'Haus mit Meerblick und Poolzugang',
      es: 'Casa con vistas al mar y piscina',
      nl: 'Huis met zeezicht en zwembad',
      sv: 'Hus med havsutsikt och pool'
    },
    lead: {
      en: 'A larger AMARA stay in Tarifa for guests who want more space, surf energy, sea views, terrace time, and a pool.',
      de: 'Ein größerer AMARA-Aufenthalt in Tarifa für Gäste, die mehr Platz, Surf-Energie, Meerblick, Terrasse und Pool suchen.',
      es: 'Una estancia AMARA más amplia en Tarifa para quienes buscan más espacio, energía de surf, vistas al mar, terraza y piscina.',
      nl: 'Een ruimer AMARA-verblijf in Tarifa voor gasten die meer ruimte, surfenergie, zeezicht, terras en zwembad zoeken.',
      sv: 'En större AMARA-vistelse i Tarifa för gäster som vill ha mer plats, surfenergi, havsutsikt, terrass och pool.'
    },
    description: {
      en: 'Family & Surf is intentionally different from the quiet couple apartments: more space, Atlantic light, pool access, and a practical setup for surf trips or small families.',
      de: 'Family & Surf ist bewusst anders als die ruhigen Apartments für Paare: mehr Platz, Atlantiklicht, Poolzugang und ein praktisches Setup für Surfreisen oder kleine Familien.',
      es: 'Family & Surf es diferente a los apartamentos tranquilos para parejas: más espacio, luz atlántica, piscina y una base práctica para surf o familias pequeñas.',
      nl: 'Family & Surf is bewust anders dan de rustige appartementen voor koppels: meer ruimte, Atlantisch licht, zwembad en een praktische basis voor surftrips of kleine gezinnen.',
      sv: 'Family & Surf är medvetet annorlunda än de lugna lägenheterna för par: mer plats, atlantljus, pool och en praktisk bas för surfresor eller små familjer.'
    },
    highlights: {
      en: ['Entire house for up to 4 guests', 'Sea view and terrace', 'Shared outdoor pool'],
      de: ['Ganzes Haus für bis zu 4 Gäste', 'Meerblick und Terrasse', 'Gemeinschaftspool'],
      es: ['Casa completa para hasta 4 huéspedes', 'Vistas al mar y terraza', 'Piscina compartida'],
      nl: ['Volledig huis voor maximaal 4 gasten', 'Zeezicht en terras', 'Gedeeld buitenzwembad'],
      sv: ['Helt hus för upp till 4 gäster', 'Havsutsikt och terrass', 'Gemensam utomhuspool']
    },
    accessNote: {
      en: 'Step-free entrance; internal steps within the apartment',
      de: 'Stufenloser Zugang; Stufen innerhalb des Apartments',
      es: 'Acceso sin escalones; hay escalones dentro del apartamento',
      nl: 'Drempelvrije toegang; traptreden in het appartement',
      sv: 'Stegfri entré; trappsteg inne i lägenheten'
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
      en: 'Sea view',
      de: 'Meerblick',
      es: 'Vistas al mar',
      nl: 'Zeezicht',
      sv: 'Havsutsikt'
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
      en: 'AMARA Family and Surf ocean-view house in Tarifa',
      de: 'AMARA Family and Surf Haus mit Meerblick in Tarifa',
      es: 'Casa AMARA Family and Surf con vistas al mar en Tarifa',
      nl: 'AMARA Family and Surf huis met zeezicht in Tarifa',
      sv: 'AMARA Family and Surf hus med havsutsikt i Tarifa'
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
      { name: 'childFriendly', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'ReservedUndergroundIncluded' }
    ])
  }
];

export const vacationRentalSlugs = vacationRentalEntities.map((entity) => entity.slug);

export const vacationRentalEntitiesByKey = Object.fromEntries(
  vacationRentalEntities.map((entity) => [entity.key, entity])
) as Record<VacationRentalEntityKey, VacationRentalEntity>;

export const vacationRentalEntitiesBySlug = Object.fromEntries(
  vacationRentalEntities.map((entity) => [entity.slug, entity])
) as Record<string, VacationRentalEntity>;

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
