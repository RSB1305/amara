import type { LocalizedText } from '../types/content';
export type { LocalizedText };
import type { AmaraLanguage } from '../types/seo';
import type { VacationRentalEntity } from './vacationRentalEntities';


export const vacationRentalHostLanguages: LocalizedText = {
  en: 'German, English and Spanish',
  de: 'Deutsch, Englisch und Spanisch',
  es: 'alemán, inglés y español',
  nl: 'Duits, Engels en Spaans',
  sv: 'tyska, engelska och spanska'
};

export const vacationRentalRegionLabel: LocalizedText = {
  en: 'Andalusia',
  de: 'Andalusien',
  es: 'Andalucía',
  nl: 'Andalusië',
  sv: 'Andalusien'
};

export const vacationRentalCountryLabel: LocalizedText = {
  en: 'Spain',
  de: 'Spanien',
  es: 'España',
  nl: 'Spanje',
  sv: 'Spanien'
};

export const vacationRentalPriceLocales: Record<AmaraLanguage, string> = {
  en: 'en-GB',
  de: 'de-DE',
  es: 'es-ES',
  nl: 'nl-NL',
  sv: 'sv-SE'
};

export const getVacationRentalTvLabel = (sizeInches: number): LocalizedText => ({
  en: `${sizeInches}″ Flat-screen TV`,
  de: `${sizeInches}″ Flachbild-TV`,
  es: `TV de pantalla plana de ${sizeInches}″`,
  nl: `${sizeInches}″ flatscreen-tv`,
  sv: `${sizeInches}″ platt-TV`
});

export const getVacationRentalSunLoungerLabel = (count: string): LocalizedText => ({
  en: `${count} sun loungers`,
  de: `${count} Sonnenliegen`,
  es: `${count} tumbonas`,
  nl: `${count} ligbedden`,
  sv: `${count} solstolar`
});

export const getVacationRentalVehicleAccessLabel = (
  hours: NonNullable<VacationRentalEntity['accessFacts']['vehicleAccessHours']>
): LocalizedText => ({
  en: `Until ${hours.until} and from ${hours.from}`,
  de: `Bis ${hours.until} Uhr und ab ${hours.from} Uhr`,
  es: `Hasta las ${hours.until} y a partir de las ${hours.from}`,
  nl: `Tot ${hours.until.replace(':', '.')} uur en vanaf ${hours.from.replace(':', '.')} uur`,
  sv: `Fram till kl. ${hours.until.replace(':', '.')} och från kl. ${hours.from.replace(':', '.')}`
});

export const ui = {
  checkAvailability: {
    en: 'Check availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Consultar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Se tillgänglighet'
  },
  // The guest chooses dates; the price follows from them. Naming both as things
  // to be chosen reads, in German especially, as if the price were negotiable.
  chooseDates: {
    en: 'Choose your dates',
    de: 'Reisedaten wählen',
    es: 'Elegir fechas',
    nl: 'Data kiezen',
    sv: 'Välj datum'
  },
  indicativePriceNote: {
    en: 'Indicative and season-dependent. The exact total for your dates comes from the live calendar below.',
    de: 'Richtwert, saisonabhängig. Den genauen Gesamtpreis für eure Reisedaten zeigt der Live-Kalender unten.',
    es: 'Precio orientativo según la temporada. El precio total exacto para vuestras fechas lo da el calendario en directo.',
    nl: 'Indicatief en afhankelijk van het seizoen. De exacte totaalprijs voor jullie data komt uit de live kalender.',
    sv: 'Vägledande och säsongsberoende. Det exakta totalpriset för era datum kommer från livekalendern nedan.'
  },
  keyFactsLabel: {
    en: 'Key facts at a glance',
    de: 'Eckdaten auf einen Blick',
    es: 'Datos clave de un vistazo',
    nl: 'Kerngegevens in één oogopslag',
    sv: 'Nyckelfakta i korthet'
  },
  readReviews: {
    en: 'Guest reviews',
    de: 'Gästebewertung',
    es: 'Reseñas de huéspedes',
    nl: 'Gastbeoordelingen',
    sv: 'Gästrecensioner'
  },
  hostProfile: {
    en: 'Your host',
    de: 'Euer Gastgeber',
    es: 'Vuestro anfitrión',
    nl: 'Jullie host',
    sv: 'Er värd'
  },
  externalProfilesLabel: {
    en: 'External profiles',
    de: 'Externe Profile',
    es: 'Perfiles externos',
    nl: 'Externe profielen',
    sv: 'Externa profiler'
  },
  externalReviewLinkLabels: {
    airbnb: {
      en: 'Airbnb',
      de: 'Airbnb',
      es: 'Airbnb',
      nl: 'Airbnb',
      sv: 'Airbnb'
    },
    booking: {
      en: 'Booking.com',
      de: 'Booking.com',
      es: 'Booking.com',
      nl: 'Booking.com',
      sv: 'Booking.com'
    }
  },
  opensInNewTab: {
    en: 'Opens in a new tab',
    de: 'Öffnet in einem neuen Tab',
    es: 'Se abre en una pestaña nueva',
    nl: 'Opent in een nieuw tabblad',
    sv: 'Öppnas i en ny flik'
  },
  factsTitle: {
    en: 'Key facts',
    de: 'Eckdaten',
    es: 'Datos clave',
    nl: 'Kerngegevens',
    sv: 'Fakta'
  },
  detailsTitle: {
    en: 'The accommodation in detail',
    de: 'Die Unterkunft im Detail',
    es: 'El alojamiento en detalle',
    nl: 'De accommodatie in detail',
    sv: 'Boendet i detalj'
  },
  additionalDetails: {
    en: 'Beds, access, parking & more',
    de: 'Betten, Zugang, Parken & mehr',
    es: 'Camas, acceso, aparcamiento y más',
    nl: 'Bedden, toegang, parkeren en meer',
    sv: 'Sängar, tillträde, parkering med mera'
  },
  galleryTitle: {
    en: 'Photos of the accommodation',
    de: 'Bilder der Unterkunft',
    es: 'Fotos del alojamiento',
    nl: 'Foto’s van de accommodatie',
    sv: 'Bilder från boendet'
  },
  seasonalPriceNote: {
    en: 'Seasonal indicative price range. Availability, minimum stay and the final total including cleaning costs and any service fee are shown in the booking system for your dates.',
    de: 'Saisonabhängige Richtpreisspanne. Verfügbarkeit, Mindestaufenthalt und den Gesamtpreis einschließlich Reinigungskosten und einer eventuellen Servicegebühr zeigt das Buchungssystem für eure Reisedaten.',
    es: 'Rango orientativo según la temporada. El sistema de reservas muestra para vuestras fechas la disponibilidad, la estancia mínima y el precio total, incluidos los gastos de limpieza y cualquier cargo de servicio.',
    nl: 'Indicatieve prijsrange per seizoen. Het boekingssysteem toont voor jullie data de beschikbaarheid, het minimumverblijf en de totaalprijs, inclusief schoonmaak- en eventuele servicekosten.',
    sv: 'Vägledande säsongspris. Bokningssystemet visar tillgänglighet, minsta vistelse och totalpris inklusive städning och eventuell serviceavgift för era datum.'
  },
  priceChecked: {
    en: 'Price checked',
    de: 'Preisstand',
    es: 'Precio revisado',
    nl: 'Prijs gecontroleerd',
    sv: 'Pris kontrollerat'
  },
  sameHouseTitle: {
    en: 'Other stays in the same house',
    de: 'Weitere Unterkünfte im selben Haus',
    es: 'Otros alojamientos en la misma casa',
    nl: 'Andere verblijven in hetzelfde huis',
    sv: 'Fler boenden i samma hus'
  },
  groupStay: {
    en: 'Casa AMARA for 4–8 guests',
    de: 'Casa AMARA für 4–8 Gäste',
    es: 'Casa AMARA para 4–8 huéspedes',
    nl: 'Casa AMARA voor 4–8 gasten',
    sv: 'Casa AMARA för 4–8 gäster'
  },
  amenitiesTitle: {
    en: 'Included amenities',
    de: 'Ausstattung',
    es: 'Servicios incluidos',
    nl: 'Inbegrepen voorzieningen',
    sv: 'Bekvämligheter som ingår'
  },
  additionalAmenities: {
    en: 'More included amenities',
    de: 'Weitere enthaltene Ausstattung',
    es: 'Más servicios incluidos',
    nl: 'Meer inbegrepen voorzieningen',
    sv: 'Fler bekvämligheter som ingår'
  },
  moreAmenities: {
    en: 'More about Comfort & Amenities',
    de: 'Mehr unter Komfort & Ausstattung',
    es: 'Más sobre confort y servicios',
    nl: 'Meer over comfort en voorzieningen',
    sv: 'Läs mer om komfort och bekvämligheter'
  },
  locationTitle: {
    en: 'Location and arrival',
    de: 'Lage und Anreise',
    es: 'Ubicación y llegada',
    nl: 'Locatie en aankomst',
    sv: 'Läge och ankomst'
  },
  arrivalGuide: {
    en: 'Arrival guide',
    de: 'Anreise-Guide',
    es: 'Guía de llegada',
    nl: 'Aankomstgids',
    sv: 'Ankomstguide'
  },
  locationBodyWithGuides: {
    en: 'Our local guides cover the important details about arrival, access and the surrounding area. Guest reviews show how others experienced their stay.',
    de: 'In unseren Ortsguides findet ihr alles Wichtige zu Anreise, Zugang und Umgebung. In den Gästebewertungen lest ihr, wie andere ihren Aufenthalt erlebt haben.',
    es: 'En nuestras guías locales encontraréis lo importante sobre la llegada, el acceso y el entorno. Las reseñas cuentan cómo vivieron otros huéspedes su estancia.',
    nl: 'In onze lokale gidsen vinden jullie alles wat belangrijk is voor aankomst, toegang en de omgeving. In de beoordelingen lees je hoe andere gasten hun verblijf hebben ervaren.',
    sv: 'I våra lokala guider hittar ni det viktigaste om ankomst, tillträde och omgivningar. I omdömena kan ni läsa hur andra gäster upplevde sin vistelse.'
  },
  locationBodyWithoutGuides: {
    en: 'Here you will find the practical details about the stay. Guest reviews show how others experienced the accommodation.',
    de: 'Hier findet ihr die praktischen Details zur Unterkunft. In den Gästebewertungen lest ihr, wie andere ihren Aufenthalt erlebt haben.',
    es: 'Aquí encontraréis los detalles prácticos del alojamiento. Las reseñas cuentan cómo vivieron otros huéspedes su estancia.',
    nl: 'Hier vinden jullie de praktische details over het verblijf. In de beoordelingen lees je hoe andere gasten de accommodatie hebben ervaren.',
    sv: 'Här hittar ni den praktiska informationen om boendet. I omdömena kan ni läsa hur andra gäster upplevde sin vistelse.'
  },
  frigilianaLocationGuide: {
    en: 'Frigiliana',
    de: 'Frigiliana',
    es: 'Frigiliana',
    nl: 'Frigiliana',
    sv: 'Frigiliana'
  },
  experiencesGuide: {
    en: 'Experiences',
    de: 'Erlebnisse',
    es: 'Experiencias',
    nl: 'Ervaringen',
    sv: 'Upplevelser'
  },
  tarifaLocationGuide: {
    en: 'Where to stay in Tarifa',
    de: 'Wo in Tarifa übernachten?',
    es: 'Dónde alojarse en Tarifa',
    nl: 'Waar overnachten in Tarifa?',
    sv: 'Var ska man bo i Tarifa?'
  },
  tarifaBeachesGuide: {
    en: 'Beaches',
    de: 'Strände',
    es: 'Playas',
    nl: 'Stranden',
    sv: 'Stränder'
  },
  tarifaWindGuide: {
    en: 'Wind & Kitesurfing',
    de: 'Wind & Kitesurfen',
    es: 'Viento y kitesurf',
    nl: 'Wind & kitesurfen',
    sv: 'Vind & kitesurfing'
  },
  labels: {
    license: {
      en: 'License number',
      de: 'Lizenznummer',
      es: 'Número de licencia',
      nl: 'Licentienummer',
      sv: 'Licensnummer'
    },
    guests: {
      en: 'Guests',
      de: 'Gäste',
      es: 'Huéspedes',
      nl: 'Gasten',
      sv: 'Gäster'
    },
    bedrooms: {
      en: 'Bedrooms',
      de: 'Schlafzimmer',
      es: 'Dormitorios',
      nl: 'Slaapkamers',
      sv: 'Sovrum'
    },
    // The facts table labels a column and is capitalised accordingly. The hero
    // row reads as a running phrase, so it needs its own casing and plural per
    // language rather than a reused column heading.
    guestsInline: {
      en: '{count} guests',
      de: '{count} Gäste',
      es: '{count} huéspedes',
      nl: '{count} gasten',
      sv: '{count} gäster'
    },
    guestInline: {
      en: '{count} guest',
      de: '{count} Gast',
      es: '{count} huésped',
      nl: '{count} gast',
      sv: '{count} gäst'
    },
    bedroomsInline: {
      en: '{count} bedrooms',
      de: '{count} Schlafzimmer',
      es: '{count} dormitorios',
      nl: '{count} slaapkamers',
      sv: '{count} sovrum'
    },
    bedroomInline: {
      en: '{count} bedroom',
      de: '{count} Schlafzimmer',
      es: '{count} dormitorio',
      nl: '{count} slaapkamer',
      sv: '{count} sovrum'
    },
    bathrooms: {
      en: 'Bathrooms',
      de: 'Badezimmer',
      es: 'Baños',
      nl: 'Badkamers',
      sv: 'Badrum'
    },
    interiorArea: {
      en: 'Interior space',
      de: 'Innenfläche',
      es: 'Superficie interior',
      nl: 'Binnenoppervlakte',
      sv: 'Inomhusyta'
    },
    interiorExteriorArea: {
      en: 'Interior / outdoor space',
      de: 'Innenfläche / Außenfläche',
      es: 'Superficie interior / exterior',
      nl: 'Binnenoppervlakte / buitenoppervlakte',
      sv: 'Inomhusyta / utomhusyta'
    },
    hostLanguages: {
      en: 'Guest communication',
      de: 'Gästekommunikation',
      es: 'Idiomas de atención',
      nl: 'Gastcommunicatie',
      sv: 'Gästkommunikation'
    },
    fullAddress: {
      en: 'Full address',
      de: 'Vollständige Adresse',
      es: 'Dirección completa',
      nl: 'Volledig adres',
      sv: 'Fullständig adress'
    },
    bedSize: {
      en: 'Bed type and size',
      de: 'Bettart und -größe',
      es: 'Tipo y tamaño de cama',
      nl: 'Bedtype en -maat',
      sv: 'Sängtyp och storlek'
    },
    pricePerNight: {
      en: 'Price per night',
      de: 'Preis pro Nacht',
      es: 'Precio por noche',
      nl: 'Prijs per nacht',
      sv: 'Pris per natt'
    },
    checkin: {
      en: 'Check-in',
      de: 'Check-in',
      es: 'Entrada',
      nl: 'Check-in',
      sv: 'Incheckning'
    },
    checkout: {
      en: 'Check-out',
      de: 'Check-out',
      es: 'Salida',
      nl: 'Check-out',
      sv: 'Utcheckning'
    },
    access: {
      en: 'Accessibility & steps',
      de: 'Zugänglichkeit & Stufen',
      es: 'Accesibilidad y escalones',
      nl: 'Toegankelijkheid & treden',
      sv: 'Tillgänglighet & trappsteg'
    },
    vehicleAccess: {
      en: 'Vehicle access to the door',
      de: 'Zufahrt zur Haustür',
      es: 'Acceso en coche hasta la puerta',
      nl: 'Auto tot aan de voordeur',
      sv: 'Bilinfart fram till dörren'
    },
    pets: {
      en: 'Pets',
      de: 'Haustiere',
      es: 'Mascotas',
      nl: 'Huisdieren',
      sv: 'Husdjur'
    },
    selfCheckin: {
      en: 'Self check-in',
      de: 'Self Check-in',
      es: 'Entrada autónoma',
      nl: 'Zelf inchecken',
      sv: 'Självincheckning'
    },
    parking: {
      en: 'Parking',
      de: 'Parken',
      es: 'Aparcamiento',
      nl: 'Parkeren',
      sv: 'Parkering'
    },
    available: {
      en: 'Available',
      de: 'Verfügbar',
      es: 'Disponible',
      nl: 'Beschikbaar',
      sv: 'Tillgängligt'
    },
    freeParking: {
      en: 'Free parking',
      de: 'Kostenloses Parken',
      es: 'Aparcamiento gratuito',
      nl: 'Gratis parkeren',
      sv: 'Gratis parkering'
    },
    kitchen: {
      en: 'Kitchen',
      de: 'Küche',
      es: 'Cocina',
      nl: 'Keuken',
      sv: 'Kök'
    },
    outdoor: {
      en: 'Outdoor',
      de: 'Außenbereich',
      es: 'Exterior',
      nl: 'Buitenruimte',
      sv: 'Utomhus'
    },
    view: {
      en: 'View',
      de: 'Ausblick',
      es: 'Vistas',
      nl: 'Uitzicht',
      sv: 'Utsikt'
    }
  }
} satisfies Record<string, unknown>;

export const amenityLabels: Record<string, LocalizedText> = {
  ac: { en: 'Air conditioning', de: 'Klimaanlage', es: 'Aire acondicionado', nl: 'Airconditioning', sv: 'Luftkonditionering' },
  balcony: { en: 'Balcony', de: 'Balkon', es: 'Balcón', nl: 'Balkon', sv: 'Balkong' },
  beachAccess: { en: 'Beach access nearby', de: 'Strand in der Nähe', es: 'Playa cercana', nl: 'Strand dichtbij', sv: 'Strand nära' },
  childFriendly: { en: 'Child friendly', de: 'Familienfreundlich', es: 'Apto para niños', nl: 'Kindvriendelijk', sv: 'Barnvänligt' },
  heating: { en: 'Heating', de: 'Heizung', es: 'Calefacción', nl: 'Verwarming', sv: 'Värme' },
  internetType: { en: 'Internet', de: 'Internet', es: 'Internet', nl: 'Internet', sv: 'Internet' },
  kitchen: { en: 'Kitchen', de: 'Küche', es: 'Cocina', nl: 'Keuken', sv: 'Kök' },
  rainShower: { en: 'Rain shower', de: 'Regendusche', es: 'Ducha de lluvia', nl: 'Regendouche', sv: 'Regndusch' },
  doubleRainShower: { en: 'Double shower / Rain shower', de: 'Doppeldusche / Regendusche', es: 'Ducha doble / Ducha de lluvia', nl: 'Dubbele douche / Regendouche', sv: 'Dubbeldusch / Regndusch' },
  elevator: { en: 'Lift', de: 'Aufzug', es: 'Ascensor', nl: 'Lift', sv: 'Hiss' },
  washingMachine: { en: 'Washing machine', de: 'Waschmaschine', es: 'Lavadora', nl: 'Wasmachine', sv: 'Tvättmaskin' },
  fireplace: { en: 'Fireplace', de: 'Kamin', es: 'Chimenea', nl: 'Open haard', sv: 'Eldstad' },
  licenseNum: { en: 'License number', de: 'Lizenznummer', es: 'Número de licencia', nl: 'Licentienummer', sv: 'Licensnummer' },
  outdoorGrill: { en: 'Outdoor grill', de: 'Outdoor-Grill', es: 'Barbacoa exterior', nl: 'Buitengrill', sv: 'Utomhusgrill' },
  parkingType: { en: 'Parking', de: 'Parken', es: 'Aparcamiento', nl: 'Parkeren', sv: 'Parkering' },
  patio: { en: 'Terrace', de: 'Terrasse', es: 'Terraza', nl: 'Terras', sv: 'Terrass' },
  privatePatio: { en: 'Private patio', de: 'Privater Patio', es: 'Patio privado', nl: 'Privépatio', sv: 'Privat uteplats' },
  privateTerrace: { en: 'Private terrace', de: 'Private Terrasse', es: 'Terraza privada', nl: 'Privéterras', sv: 'Privat terrass' },
  pelletStove: { en: 'Pellet stove', de: 'Pelletofen', es: 'Estufa de pellets', nl: 'Pelletkachel', sv: 'Pelletskamin' },
  pool: { en: 'Pool', de: 'Pool', es: 'Piscina', nl: 'Zwembad', sv: 'Pool' },
  poolType: { en: 'Pool type', de: 'Pooltyp', es: 'Tipo de piscina', nl: 'Zwembadtype', sv: 'Pooltyp' },
  selfCheckinCheckout: { en: 'Self check-in', de: 'Self Check-in', es: 'Entrada autónoma', nl: 'Zelf inchecken', sv: 'Självincheckning' },
  hammock: { en: 'Hammock', de: 'Hängematte', es: 'Hamaca', nl: 'Hangmat', sv: 'Hängmatta' },
  outdoorShower: { en: 'Outdoor shower', de: 'Außendusche', es: 'Ducha exterior', nl: 'Buitendouche', sv: 'Utomhusdusch' },
  sunLoungers: { en: 'Sun loungers', de: 'Sonnenliegen', es: 'Tumbonas', nl: 'Ligbedden', sv: 'Solstolar' },
  tv: { en: 'TV', de: 'TV', es: 'TV', nl: 'TV', sv: 'TV' },
  wifi: { en: 'WiFi', de: 'WLAN', es: 'WiFi', nl: 'Wifi', sv: 'WiFi' }
};

export const amenityValueLabels: Record<string, LocalizedText> = {
  Free: { en: 'Included', de: 'Inklusive', es: 'Incluido', nl: 'Inbegrepen', sv: 'Ingår' },
  Outdoor: { en: 'Outdoor', de: 'Im Freien', es: 'Exterior', nl: 'Buiten', sv: 'Utomhus' },
  ReservedUndergroundIncluded: {
    en: 'Reserved underground parking space included',
    de: 'Reservierter Tiefgaragenstellplatz inklusive',
    es: 'Plaza de aparcamiento subterráneo reservada incluida',
    nl: 'Gereserveerde ondergrondse parkeerplaats inbegrepen',
    sv: 'Reserverad garageplats under mark ingår'
  }
};

export const highSpeedFiberInternet: LocalizedText = {
  en: 'High-speed fiber internet',
  de: 'Highspeed-Glasfaser-Internet',
  es: 'Internet de fibra de alta velocidad',
  nl: 'Snel glasvezelinternet',
  sv: 'Fiberinternet med hög hastighet'
};

export const coolingAndHeating: LocalizedText = {
  en: 'Air conditioning — Cooling & Heating',
  de: 'Klimaanlage — Kühlen & Heizen',
  es: 'Aire acondicionado — Frío y calor',
  nl: 'Airconditioning — Koelen en verwarmen',
  sv: 'Luftkonditionering — Kyla och värme'
};

export const bathroomUnderfloorHeating: LocalizedText = {
  en: 'Underfloor heating in the bathroom',
  de: 'Fußbodenheizung im Bad',
  es: 'Suelo radiante en el baño',
  nl: 'Vloerverwarming in de badkamer',
  sv: 'Golvvärme i badrummet'
};

export const privateTerraceAreaLabel: LocalizedText = {
  en: 'Interior / Private terrace',
  de: 'Innen / Private Terrasse',
  es: 'Interior / Terraza privada',
  nl: 'Binnen / Privéterras',
  sv: 'Inomhus / Privat terrass'
};

export const terraceAreaLabel: LocalizedText = {
  en: 'Interior / Terrace',
  de: 'Innen / Terrasse',
  es: 'Interior / Terraza',
  nl: 'Binnen / Terras',
  sv: 'Inomhus / Terrass'
};

export const outdoorPool: LocalizedText = {
  en: 'Outdoor pool',
  de: 'Außenpool',
  es: 'Piscina exterior',
  nl: 'Buitenzwembad',
  sv: 'Utomhuspool'
};

export const bunkBedLabel: LocalizedText = {
  en: 'Bunk bed (2 single beds)',
  de: 'Etagenbett (2 Einzelbetten)',
  es: 'Litera (2 camas individuales)',
  nl: 'Stapelbed (2 eenpersoonsbedden)',
  sv: 'Våningssäng (2 enkelsängar)'
};

export const bedTypeLabels: Record<VacationRentalEntity['bed'][number]['typeOfBed'], LocalizedText> = {
  Queen: {
    en: 'Queen-size bed',
    de: 'Queensize-Bett',
    es: 'Cama queen size',
    nl: 'Queensizebed',
    sv: 'Queensize-säng'
  },
  King: {
    en: 'King-size bed',
    de: 'Kingsize-Bett',
    es: 'Cama king size',
    nl: 'Kingsizebed',
    sv: 'Kingsize-säng'
  },
  Double: {
    en: 'Double bed',
    de: 'Doppelbett',
    es: 'Cama doble',
    nl: 'Tweepersoonsbed',
    sv: 'Dubbelsäng'
  },
  Single: {
    en: 'Single bed',
    de: 'Einzelbett',
    es: 'Cama individual',
    nl: 'Eenpersoonsbed',
    sv: 'Enkelsäng'
  }
};
