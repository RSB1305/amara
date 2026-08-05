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
      en: 'AMARA Farah is a self-contained boutique suite in historic Frigiliana for 2 guests, with its own entrance, bedroom, bathroom, and coffee and tea kitchenette.',
      de: 'AMARA Farah ist eine abgeschlossene Boutique-Suite in der Altstadt von Frigiliana für 2 Gäste, mit eigenem Eingang, Schlafzimmer, Bad und Teeküche.',
      es: 'AMARA Farah es una suite boutique independiente en Frigiliana para 2 huéspedes, con entrada, dormitorio, baño y zona de café y té propios.',
      nl: 'AMARA Farah is een zelfstandige boutique-suite in historisch Frigiliana voor 2 gasten, met eigen ingang, slaapkamer, badkamer en koffie- en theefaciliteiten.',
      sv: 'AMARA Farah är en självständig boutique-svit i historiska Frigiliana för 2 gäster, med egen ingång, sovrum, badrum samt kaffe- och tehörna.'
    },
    eyebrow: {
      en: 'Frigiliana old town',
      de: 'Altstadt Frigiliana',
      es: 'Casco antiguo de Frigiliana',
      nl: 'Oude kern van Frigiliana',
      sv: 'Frigilianas gamla stad'
    },
    headline: {
      en: 'Self-contained boutique suite for calm short stays',
      de: 'Abgeschlossene Boutique-Suite für ruhige Kurzaufenthalte',
      es: 'Suite boutique independiente para estancias tranquilas',
      nl: 'Zelfstandige boutique-suite voor rustige korte verblijven',
      sv: 'Självständig boutique-svit för lugna kortare vistelser'
    },
    lead: {
      en: 'A compact, romantic AMARA stay with private entrance, private bathroom, coffee and tea station, and the old village just outside the door.',
      de: 'Eine kompakte, romantische AMARA-Suite mit eigenem Eingang, eigenem Bad, Teeküche und dem alten Dorf direkt vor der Tür.',
      es: 'Una estancia AMARA compacta y romántica, con entrada privada, baño privado, zona de café y té y el pueblo antiguo a pocos pasos.',
      nl: 'Een compacte, romantische AMARA-stay met eigen ingang, eigen badkamer, koffie- en theefaciliteiten en het oude dorp direct buiten.',
      sv: 'En kompakt och romantisk AMARA-vistelse med egen ingång, eget badrum, kaffe- och tehörna och den gamla byn utanför dörren.'
    },
    description: {
      en: 'Farah suits couples who want the AMARA atmosphere without needing a full apartment kitchen or terrace. It is designed for easy arrivals, quiet nights, and simple village days.',
      de: 'Farah passt zu Paaren, die die AMARA-Atmosphäre suchen, aber keine voll ausgestattete Apartmentküche oder Terrasse brauchen. Ideal für einfache Anreise, ruhige Nächte und entspannte Dorftage.',
      es: 'Farah encaja con parejas que buscan la atmósfera AMARA sin necesitar una cocina completa ni terraza privada. Es ideal para llegar fácil, dormir tranquilo y disfrutar del pueblo.',
      nl: 'Farah past bij koppels die de AMARA-sfeer zoeken zonder volledige keuken of terras nodig te hebben. Ideaal voor eenvoudige aankomst, stille nachten en rustige dorpsdagen.',
      sv: 'Farah passar par som vill ha AMARA-känslan utan att behöva fullt kök eller privat terrass. Perfekt för enkel ankomst, lugna nätter och stilla dagar i byn.'
    },
    highlights: {
      en: ['Self-contained suite for 2 guests', 'Private bathroom', 'Coffee and tea kitchenette'],
      de: ['Abgeschlossene Suite für 2 Gäste', 'Eigenes Bad', 'Teeküche'],
      es: ['Suite independiente para 2 huéspedes', 'Baño privado', 'Zona de café y té'],
      nl: ['Zelfstandige suite voor 2 gasten', 'Eigen badkamer', 'Koffie- en theefaciliteiten'],
      sv: ['Självständig svit för 2 gäster', 'Eget badrum', 'Kaffe- och tehörna']
    },
    accessNote: {
      en: '1 step at entrance',
      de: '1 Stufe am Eingang',
      es: '1 escalón en la entrada',
      nl: '1 trede bij de ingang',
      sv: '1 trappsteg vid entrén'
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
      en: 'Calle Chorruelo is where Calle Real carries on. You can drive to the door and reach Frigiliana’s restaurants, bars and shops without a step — the Plaza de las Tres Culturas is about 400 metres away, and not one stair in between. In Frigiliana’s old town, that is rare.',
      de: 'Die Calle Chorruelo ist die Verlängerung der Calle Real. Man kann bis vor die Tür fahren und die Restaurants, Bars und Geschäfte von Frigiliana stufenlos erkunden – bis zur Plaza de las Tres Culturas sind es rund 400 Meter, ohne eine einzige Treppe. In Frigilianas Altstadt ist das selten.',
      es: 'La Calle Chorruelo es la continuación de la Calle Real. Se puede llegar en coche hasta la puerta y recorrer los restaurantes, bares y tiendas de Frigiliana sin un solo escalón: hasta la Plaza de las Tres Culturas hay unos 400 metros, todos llanos. En el casco antiguo de Frigiliana eso es poco común.',
      nl: 'De Calle Chorruelo is het verlengde van de Calle Real. Je rijdt tot aan de deur en verkent de restaurants, bars en winkels van Frigiliana zonder één trede — naar de Plaza de las Tres Culturas is het zo’n 400 meter, volledig vlak. In de oude kern van Frigiliana is dat zeldzaam.',
      sv: 'Calle Chorruelo är förlängningen av Calle Real. Du kan köra ända fram till dörren och utforska Frigilianas restauranger, barer och butiker utan ett enda trappsteg — till Plaza de las Tres Culturas är det ungefär 400 meter, hela vägen plant. I Frigilianas gamla by är det ovanligt.'
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
      en: 'One step at the house door, then a few down inside the apartment',
      de: 'Eine Stufe an der Haustür, im Apartment einige Stufen nach unten',
      es: 'Un escalón en la puerta y algunos hacia abajo dentro del apartamento',
      nl: 'Eén trede bij de huisdeur, binnen enkele naar beneden',
      sv: 'Ett trappsteg vid porten, sedan några nedåt inne i lägenheten'
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
      en: 'One step at the house door, six more up to the apartment',
      de: 'Eine Stufe an der Haustür, sechs weitere bis zur Wohnung',
      es: 'Un escalón en la puerta y seis más hasta el apartamento',
      nl: 'Eén trede bij de huisdeur, zes verder omhoog naar het appartement',
      sv: 'Ett trappsteg vid porten, sex till upp till lägenheten'
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
      en: 'One step at the house door, six up to the apartment, a few more inside',
      de: 'Eine Stufe an der Haustür, sechs bis zur Wohnung, einige weitere im Apartment',
      es: 'Un escalón en la puerta, seis hasta el apartamento y algunos más dentro',
      nl: 'Eén trede bij de huisdeur, zes tot het appartement en binnen nog enkele',
      sv: 'Ett trappsteg vid porten, sex upp till lägenheten och några till inne'
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
      en: 'AMARA Playa is a Nerja beach apartment for 2 guests, with balcony, sea view, kitchen, bathroom, and a calm base near Torrecilla Beach.',
      de: 'AMARA Playa ist ein Strandapartment in Nerja für 2 Gäste, mit Balkon, Meerblick, Küche, Bad und ruhiger Lage nahe Torrecilla.',
      es: 'AMARA Playa es un apartamento en Nerja para 2 huéspedes, con balcón, vistas al mar, cocina, baño y base tranquila junto a Torrecilla.',
      nl: 'AMARA Playa is een strandappartement in Nerja voor 2 gasten, met balkon, zeezicht, keuken, badkamer en rustige ligging bij Torrecilla.',
      sv: 'AMARA Playa är en strandlägenhet i Nerja för 2 gäster, med balkong, havsutsikt, kök, badrum och lugnt läge nära Torrecilla.'
    },
    eyebrow: {
      en: 'Nerja coast',
      de: 'Küste von Nerja',
      es: 'Costa de Nerja',
      nl: 'Kust van Nerja',
      sv: 'Nerjas kust'
    },
    headline: {
      en: 'Beach apartment near the sea',
      de: 'Strandapartment nahe am Meer',
      es: 'Apartamento de playa cerca del mar',
      nl: 'Strandappartement dicht bij zee',
      sv: 'Strandlägenhet nära havet'
    },
    lead: {
      en: 'A relaxed coastal apartment for two, close to the sea, restaurants, Nerja center, and easy beach routines.',
      de: 'Ein entspanntes Apartment an der Küste für zwei, nah am Meer, an Restaurants, am Zentrum von Nerja und einfachen Strandtagen.',
      es: 'Un apartamento costero relajado para dos, cerca del mar, restaurantes, el centro de Nerja y días de playa sencillos.',
      nl: 'Een ontspannen kustappartement voor twee, dicht bij zee, restaurants, het centrum van Nerja en eenvoudige stranddagen.',
      sv: 'En avslappnad kustlägenhet för två, nära havet, restauranger, Nerjas centrum och enkla stranddagar.'
    },
    description: {
      en: 'Playa is the AMARA choice when the trip should start with the sea: beach walks, balcony moments, a full apartment setup, and Nerja close at hand.',
      de: 'Playa ist die AMARA-Wahl, wenn die Reise mit dem Meer beginnen soll: Strandspaziergänge, Balkonmomente, vollwertiges Apartment und Nerja direkt erreichbar.',
      es: 'Playa es la opción AMARA cuando el viaje empieza por el mar: paseos por la playa, momentos en el balcón, apartamento completo y Nerja a mano.',
      nl: 'Playa is de AMARA-keuze wanneer de reis met de zee begint: strandwandelingen, balkonmomenten, een volledig appartement en Nerja dichtbij.',
      sv: 'Playa är AMARA-valet när resan ska börja vid havet: strandpromenader, balkongstunder, en hel lägenhet och Nerja nära.'
    },
    highlights: {
      en: ['Entire apartment for 2 guests', 'Balcony and sea view', 'Beach access nearby'],
      de: ['Ganzes Apartment für 2 Gäste', 'Balkon und Meerblick', 'Strand in der Nähe'],
      es: ['Apartamento completo para 2 huéspedes', 'Balcón y vistas al mar', 'Playa cercana'],
      nl: ['Volledig appartement voor 2 gasten', 'Balkon en zeezicht', 'Strand dichtbij'],
      sv: ['Hel lägenhet för 2 gäster', 'Balkong och havsutsikt', 'Strand nära']
    },
    accessNote: {
      en: 'Requires stairs',
      de: 'Nur über Treppen erreichbar',
      es: 'Acceso por escaleras',
      nl: 'Trappen vereist',
      sv: 'Kräver trappor'
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
      en: 'Sea view',
      de: 'Meerblick',
      es: 'Vistas al mar',
      nl: 'Zeezicht',
      sv: 'Havsutsikt'
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
