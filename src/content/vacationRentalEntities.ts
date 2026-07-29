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
  priceRange: string;
  priceLabel: LocalizedText;
  checkinTime: string;
  checkoutTime: string;
  bookingUrl: string;
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
    accommodationType: 'PrivateRoom',
    license: 'A/MA/01767',
    ...frigilianaAddress,
    bedrooms: 1,
    bathrooms: 1,
    rooms: 1,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'Queen', label: '160 x 200' }],
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
    bookingUrl: 'https://www.booking.com/hotel/es/das-amara-farah-in-der-altstadt-von-frigiliana.de.html',
    sameAs: ['https://www.booking.com/hotel/es/das-amara-farah-in-der-altstadt-von-frigiliana.de.html'],
    seoTitle: {
      en: 'AMARA Farah | Private Boutique Room in Frigiliana',
      de: 'AMARA Farah | Privates Boutique-Zimmer in Frigiliana',
      es: 'AMARA Farah | Habitación boutique privada en Frigiliana',
      nl: 'AMARA Farah | Private boutiquekamer in Frigiliana',
      sv: 'AMARA Farah | Privat boutiquerum i Frigiliana'
    },
    seoDescription: {
      en: 'AMARA Farah is a private boutique room in historic Frigiliana for 2 guests, with private bathroom, calm village setting, and verified AMARA hosting.',
      de: 'AMARA Farah ist ein privates Boutique-Zimmer in der Altstadt von Frigiliana für 2 Gäste, mit eigenem Bad und ruhiger AMARA-Gastlichkeit.',
      es: 'AMARA Farah es una habitación boutique privada en Frigiliana para 2 huéspedes, con baño privado, ambiente tranquilo y hospitalidad AMARA.',
      nl: 'AMARA Farah is een private boutiquekamer in historisch Frigiliana voor 2 gasten, met eigen badkamer en rustige AMARA-gastvrijheid.',
      sv: 'AMARA Farah är ett privat boutiquerum i historiska Frigiliana för 2 gäster, med eget badrum och lugnt AMARA-värdskap.'
    },
    eyebrow: {
      en: 'Frigiliana old town',
      de: 'Altstadt Frigiliana',
      es: 'Casco antiguo de Frigiliana',
      nl: 'Oude kern van Frigiliana',
      sv: 'Frigilianas gamla stad'
    },
    headline: {
      en: 'Private boutique room for calm short stays',
      de: 'Privates Boutique-Zimmer für ruhige Kurzaufenthalte',
      es: 'Habitación boutique privada para estancias tranquilas',
      nl: 'Private boutiquekamer voor rustige korte verblijven',
      sv: 'Privat boutiquerum för lugna kortare vistelser'
    },
    lead: {
      en: 'A compact, romantic AMARA stay with private entrance, private bathroom, coffee and tea station, and the old village just outside the door.',
      de: 'Ein kompaktes, romantisches AMARA-Zimmer mit eigenem Eingang, eigenem Bad, Kaffee- und Teestation und dem alten Dorf direkt vor der Tür.',
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
      en: ['Private room for 2 guests', 'Private bathroom', 'Coffee and tea station'],
      de: ['Privates Zimmer für 2 Gäste', 'Eigenes Bad', 'Kaffee- und Teestation'],
      es: ['Habitación privada para 2 huéspedes', 'Baño privado', 'Zona de café y té'],
      nl: ['Private kamer voor 2 gasten', 'Eigen badkamer', 'Koffie- en theefaciliteiten'],
      sv: ['Privat rum för 2 gäster', 'Eget badrum', 'Kaffe- och tehörna']
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
      '/images/amara-insta-facebook/casa-amara-frigiliana-bonita-purta-de-madeira-farah.jpg'
    ],
    imageAlt: {
      en: 'AMARA Farah private boutique room in Frigiliana',
      de: 'AMARA Farah privates Boutique-Zimmer in Frigiliana',
      es: 'Habitación boutique privada AMARA Farah en Frigiliana',
      nl: 'AMARA Farah private boutiquekamer in Frigiliana',
      sv: 'AMARA Farah privat boutiquerum i Frigiliana'
    },
    amenityFeatures: withLicense('A/MA/01767', [
      { name: 'wifi', value: true },
      { name: 'internetType', value: 'Free' },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'kitchen', value: false },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'Free' }
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
    bookingUrl: 'https://www.booking.com/hotel/es/das-amara-lounis-in-der-altstadt-von-frigiliana.de.html',
    sameAs: ['https://www.booking.com/hotel/es/das-amara-lounis-in-der-altstadt-von-frigiliana.de.html'],
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
      en: 'Old-town apartment with terrace time',
      de: 'Altstadt-Apartment mit Terrassenzeit',
      es: 'Apartamento de casco antiguo con terraza',
      nl: 'Appartement in de oude kern met terrastijd',
      sv: 'Lägenhet i gamla byn med terrassliv'
    },
    lead: {
      en: 'A full private apartment in Casa AMARA with village character, kitchen, terrace moments, and a distant sea-facing outlook.',
      de: 'Ein vollwertiges privates Apartment in Casa AMARA mit Dorfcharakter, Küche, Terrassenmomenten und Blick Richtung Meer.',
      es: 'Un apartamento privado completo en Casa AMARA, con carácter de pueblo, cocina, terraza y vistas hacia el mar.',
      nl: 'Een volledig prive-appartement in Casa AMARA met dorpskarakter, keuken, terrasmomenten en uitzicht richting zee.',
      sv: 'En hel privat lägenhet i Casa AMARA med bykaraktär, kök, terrassliv och blick mot havet.'
    },
    description: {
      en: 'Lounis is made for couples who want the old village around them and a private place to slow down between terrace mornings, walks, and quiet evenings.',
      de: 'Lounis ist für Paare gemacht, die das alte Dorf um sich herum spüren und zwischen Terrassenmorgen, Spaziergängen und ruhigen Abenden entschleunigen möchten.',
      es: 'Lounis esta pensado para parejas que quieren sentir el pueblo antiguo y bajar el ritmo entre mananas en la terraza, paseos y noches tranquilas.',
      nl: 'Lounis is gemaakt voor koppels die het oude dorp om zich heen willen voelen en willen vertragen tussen terrasochtenden, wandelingen en stille avonden.',
      sv: 'Lounis är skapad för par som vill känna den gamla byn omkring sig och sakta ner mellan terrassmorgnar, promenader och lugna kvällar.'
    },
    highlights: {
      en: ['Entire apartment for 2 guests', 'Private terrace', 'Full indoor kitchen'],
      de: ['Ganzes Apartment für 2 Gäste', 'Private Terrasse', 'Voll ausgestattete Küche'],
      es: ['Apartamento completo para 2 huéspedes', 'Terraza privada', 'Cocina completa'],
      nl: ['Volledig appartement voor 2 gasten', 'Privéterras', 'Volledige keuken'],
      sv: ['Hel lägenhet för 2 gäster', 'Privat terrass', 'Fullt kök']
    },
    accessNote: {
      en: 'Requires stairs',
      de: 'Nur über Treppen erreichbar',
      es: 'Acceso por escaleras',
      nl: 'Trappen vereist',
      sv: 'Kräver trappor'
    },
    petsNote: {
      en: 'Pets on request',
      de: 'Haustiere auf Anfrage',
      es: 'Mascotas bajo petición',
      nl: 'Huisdieren op aanvraag',
      sv: 'Husdjur på förfrågan'
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
      en: 'Distant sea view',
      de: 'Fernblick aufs Meer',
      es: 'Vistas lejanas al mar',
      nl: 'Uitzicht op zee in de verte',
      sv: 'Havsutsikt på avstånd'
    },
    images: [
      '/images/amara-lounis/104-amara-frigiliana.jpg',
      '/images/amara-lounis/15-amara-frigiliana.jpg',
      '/images/amara-lounis/17-amara-frigiliana.jpg',
      '/images/amara-lounis/18-amara-frigiliana.jpg',
      '/images/amara-lounis/19-amara-frigiliana.jpg',
      '/images/amara-lounis/20-amara-frigiliana.jpg',
      '/images/amara-lounis/21-amara-frigiliana.jpg',
      '/images/amara-lounis/28-amara-frigiliana.jpg'
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
      { name: 'kitchen', value: true },
      { name: 'patio', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'petsAllowed', value: true },
      { name: 'parkingType', value: 'Free' }
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
    bookingUrl: 'https://www.booking.com/hotel/es/das-amara-zaid-in-der-altstadt-von-frigiliana.de.html',
    sameAs: ['https://www.booking.com/hotel/es/das-amara-zaid-in-der-altstadt-von-frigiliana.de.html'],
    seoTitle: {
      en: 'AMARA Zaid | Romantic Terrace Apartment in Frigiliana',
      de: 'AMARA Zaid | Romantisches Terrassenapartment in Frigiliana',
      es: 'AMARA Zaid | Apartamento romántico con terraza en Frigiliana',
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
      en: 'Terrace apartment for slow mornings',
      de: 'Terrassenapartment für langsame Morgen',
      es: 'Apartamento con terraza para mananas lentas',
      nl: 'Terrasappartement voor langzame ochtenden',
      sv: 'Terrasslägenhet för långsamma morgnar'
    },
    lead: {
      en: 'A calm apartment for two with private terrace, full kitchen, king bed, and Frigiliana old-town rhythm.',
      de: 'Ein ruhiges Apartment für zwei mit privater Terrasse, voll ausgestatteter Küche, Kingsize-Bett und Altstadt-Rhythmus.',
      es: 'Un apartamento tranquilo para dos, con terraza privada, cocina completa, cama king size y ritmo de casco antiguo.',
      nl: 'Een rustig appartement voor twee, met privéterras, volledige keuken, kingsize bed en het ritme van de oude kern.',
      sv: 'En lugn lägenhet för två med privat terrass, fullt kök, kingsize-säng och den gamla byns rytm.'
    },
    description: {
      en: 'Zaid is the choice when terrace life matters: breakfast outside, village light, quiet evenings, and a private base between Frigiliana and beach days near Nerja.',
      de: 'Zaid ist die Wahl, wenn Terrassenzeit wichtig ist: Frühstück draußen, Dorflicht, ruhige Abende und eine private Basis zwischen Frigiliana und Strandtagen bei Nerja.',
      es: 'Zaid es la elección cuando la terraza importa: desayunos al aire libre, luz de pueblo, noches tranquilas y una base privada entre Frigiliana y días de playa en Nerja.',
      nl: 'Zaid is de keuze wanneer terrastijd belangrijk is: ontbijt buiten, dorpslicht, stille avonden en een private basis tussen Frigiliana en stranddagen bij Nerja.',
      sv: 'Zaid är valet när terrasslivet spelar roll: frukost ute, byljus, stilla kvällar och en privat bas mellan Frigiliana och stranddagar vid Nerja.'
    },
    highlights: {
      en: ['Entire apartment for 2 guests', 'Private terrace', 'King bed'],
      de: ['Ganzes Apartment für 2 Gäste', 'Private Terrasse', 'Kingsize-Bett'],
      es: ['Apartamento completo para 2 huéspedes', 'Terraza privada', 'Cama king size'],
      nl: ['Volledig appartement voor 2 gasten', 'Privéterras', 'Kingsize bed'],
      sv: ['Hel lägenhet för 2 gäster', 'Privat terrass', 'Kingsize-säng']
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
      en: 'Private terrace',
      de: 'Private Terrasse',
      es: 'Terraza privada',
      nl: 'Privéterras',
      sv: 'Privat terrass'
    },
    viewNote: {
      en: 'Distant sea view',
      de: 'Fernblick aufs Meer',
      es: 'Vistas lejanas al mar',
      nl: 'Uitzicht op zee in de verte',
      sv: 'Havsutsikt på avstånd'
    },
    images: [
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-dormitorio-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-cocina-2.jpg',
      '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza.jpg'
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
      { name: 'kitchen', value: true },
      { name: 'patio', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'Free' }
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
    bookingUrl: 'https://www.booking.com/hotel/es/das-amara-maha-in-der-altstadt-von-frigiliana.de.html',
    sameAs: ['https://www.booking.com/hotel/es/das-amara-maha-in-der-altstadt-von-frigiliana.de.html'],
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
      en: 'Village apartment made for lingering',
      de: 'Dorfapartment für längere Momente',
      es: 'Apartamento de pueblo para quedarse',
      nl: 'Dorpsappartement om te blijven hangen',
      sv: 'Bylägenhet för att dröja kvar'
    },
    lead: {
      en: 'A full private apartment with a large terrace, quiet old-town setting, kitchen, and space to let the day unfold slowly.',
      de: 'Ein privates Apartment mit großer Terrasse, ruhiger Altstadtlage, Küche und genug Raum, damit der Tag langsam werden darf.',
      es: 'Un apartamento privado con gran terraza, ubicación tranquila en el casco antiguo, cocina y espacio para vivir el día despacio.',
      nl: 'Een privaat appartement met groot terras, rustige ligging in de oude kern, keuken en ruimte om de dag langzaam te laten verlopen.',
      sv: 'En privat lägenhet med stor terrass, lugnt läge i gamla byn, kök och utrymme för att låta dagen gå långsamt.'
    },
    description: {
      en: 'Maha is for guests who want a stronger outdoor rhythm in Frigiliana: terrace breakfasts, sunset pauses, a full apartment setup, and the white village at walking pace.',
      de: 'Maha ist für Gäste, die in Frigiliana stärker draußen leben möchten: Frühstück auf der Terrasse, Pausen im Abendlicht, vollwertiges Apartment und das weiße Dorf zu Fuß.',
      es: 'Maha es para huéspedes que quieren vivir más al aire libre en Frigiliana: desayunos en la terraza, pausas al atardecer, apartamento completo y pueblo blanco a pie.',
      nl: 'Maha is voor gasten die in Frigiliana meer buiten willen leven: ontbijt op het terras, pauzes in het avondlicht, een volledig appartement en het witte dorp te voet.',
      sv: 'Maha är för gäster som vill leva mer ute i Frigiliana: frukost på terrassen, pauser i kvällsljuset, en hel lägenhet och den vita byn till fots.'
    },
    highlights: {
      en: ['Entire apartment for 2 guests', 'Large private terrace', 'Outdoor kitchen detail'],
      de: ['Ganzes Apartment für 2 Gäste', 'Große private Terrasse', 'Outdoor-Küchendetail'],
      es: ['Apartamento completo para 2 huéspedes', 'Gran terraza privada', 'Detalle de cocina exterior'],
      nl: ['Volledig appartement voor 2 gasten', 'Groot privéterras', 'Buitenkeukendetail'],
      sv: ['Hel lägenhet för 2 gäster', 'Stor privat terrass', 'Detalj för utekök']
    },
    accessNote: {
      en: 'Requires stairs',
      de: 'Nur über Treppen erreichbar',
      es: 'Acceso por escaleras',
      nl: 'Trappen vereist',
      sv: 'Kräver trappor'
    },
    petsNote: {
      en: 'Pets on request',
      de: 'Haustiere auf Anfrage',
      es: 'Mascotas bajo petición',
      nl: 'Huisdieren op aanvraag',
      sv: 'Husdjur på förfrågan'
    },
    kitchenNote: {
      en: 'Full indoor kitchen',
      de: 'Voll ausgestattete Küche',
      es: 'Cocina completa',
      nl: 'Volledige keuken',
      sv: 'Fullt kök'
    },
    outdoorNote: {
      en: 'Large private terrace',
      de: 'Große private Terrasse',
      es: 'Gran terraza privada',
      nl: 'Groot privéterras',
      sv: 'Stor privat terrass'
    },
    viewNote: {
      en: 'Distant sea view',
      de: 'Fernblick aufs Meer',
      es: 'Vistas lejanas al mar',
      nl: 'Uitzicht op zee in de verte',
      sv: 'Havsutsikt på avstånd'
    },
    images: [
      '/images/amara-maha/29-amara-frigiliana.jpg',
      '/images/amara-maha/30-amara-frigiliana.jpg',
      '/images/amara-maha/31-amara-frigiliana.jpg',
      '/images/amara-maha/35-amara-frigiliana.jpg',
      '/images/amara-maha/38-amara-frigiliana.jpg',
      '/images/amara-maha/40-amara-frigiliana.jpg',
      '/images/amara-maha/42-amara-frigiliana.jpg',
      '/images/amara-maha/91-amara-frigiliana.jpg'
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
      { name: 'kitchen', value: true },
      { name: 'patio', value: true },
      { name: 'outdoorGrill', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'petsAllowed', value: true },
      { name: 'parkingType', value: 'Free' }
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
    rooms: 3,
    occupancy: 2,
    bed: [{ numberOfBeds: 1, typeOfBed: 'King', label: '200 x 200' }],
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
    bookingUrl: 'https://www.booking.com/hotel/es/cozy-apartment-next-to-the-beach-and-nerja-center.de.html',
    sameAs: ['https://www.booking.com/hotel/es/cozy-apartment-next-to-the-beach-and-nerja-center.de.html'],
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
      '/images/amara-playa/apartment/chaparril-07.webp'
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
      { name: 'kitchen', value: true },
      { name: 'balcony', value: true },
      { name: 'beachAccess', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'Free' }
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
    bathrooms: 1,
    rooms: 4,
    occupancy: 4,
    bed: [
      { numberOfBeds: 1, typeOfBed: 'Double', label: '150 x 200' },
      { numberOfBeds: 2, typeOfBed: 'Single', label: 'Bunk bed' }
    ],
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
    bookingUrl: 'https://www.booking.com/hotel/es/surfers-home-with-oceanview-and-pool.de.html',
    sameAs: ['https://www.booking.com/hotel/es/surfers-home-with-oceanview-and-pool.de.html'],
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
      en: 'Stairs likely',
      de: 'Treppen wahrscheinlich',
      es: 'Es probable que haya escaleras',
      nl: 'Trappen waarschijnlijk',
      sv: 'Troligen trappor'
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
      '/images/amara-tarifa/amara-tarifa-apartment08.webp'
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
      { name: 'kitchen', value: true },
      { name: 'patio', value: true },
      { name: 'pool', value: true },
      { name: 'poolType', value: 'Outdoor' },
      { name: 'childFriendly', value: true },
      { name: 'selfCheckinCheckout', value: true },
      { name: 'heating', value: true },
      { name: 'tv', value: true },
      { name: 'petsAllowed', value: false },
      { name: 'parkingType', value: 'Free' }
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
