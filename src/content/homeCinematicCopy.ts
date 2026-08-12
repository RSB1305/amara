/**
 * Homepage cinematic band — 5-language copy (SSOT per field).
 * Used by HomePage.astro + HomeCinematicMain.astro props.
 */
import type { AmaraLanguage } from '../types/seo';
import { airbnbRatingLabel, airbnbReviewEvidence } from './reviewEvidence';
import { stayCollectionLabels } from './stayCollectionLabels';

export type CopyRow = Record<AmaraLanguage, string>;

export const cinematicHeroKicker: CopyRow = {
  en: 'Holiday stays in Andalusia',
  de: 'Ferienunterkünfte in Andalusien',
  es: 'Alojamientos en Andalucía',
  nl: 'Vakantieverblijven in Andalusië',
  sv: 'Semesterboenden i Andalusien'
};

export const cinematicHeroLead: CopyRow = {
  en: 'Frigiliana, Nerja and Tarifa. Three very different ways to stay in Andalusia.',
  de: 'Frigiliana, Nerja und Tarifa. Drei ganz unterschiedliche Arten, Andalusien zu erleben.',
  es: 'Frigiliana, Nerja y Tarifa. Tres formas muy distintas de disfrutar Andalucía.',
  nl: 'Frigiliana, Nerja en Tarifa. Drie heel verschillende manieren om in Andalusië te verblijven.',
  sv: 'Frigiliana, Nerja och Tarifa. Tre helt olika sätt att bo i Andalusien.'
};

export const cinematicHeroImageAlt: CopyRow = {
  en: 'Whitewashed terraces and palm trees at AMARA Lounis in Frigiliana',
  de: 'Weiß getünchte Terrassen und Palmen bei AMARA Lounis in Frigiliana',
  es: 'Terrazas encaladas y palmeras en AMARA Lounis, Frigiliana',
  nl: 'Witgekalkte terrassen en palmbomen bij AMARA Lounis in Frigiliana',
  sv: 'Vitkalkade terrasser och palmer vid AMARA Lounis i Frigiliana'
};

export const cinematicScrollHint: CopyRow = {
  en: 'Scroll to discover',
  de: 'Mehr entdecken',
  es: 'Desplázate para descubrir',
  nl: 'Scroll om te ontdekken',
  sv: 'Scrolla för att upptäcka'
};

export const cinematicPhilosophyPart1: CopyRow = {
  en: 'Every stay is different.',
  de: 'Jede Unterkunft ist individuell.',
  es: 'Cada alojamiento es distinto.',
  nl: 'Elk verblijf is anders.',
  sv: 'Varje boende är unikt.'
};

export const cinematicPhilosophyAccent: CopyRow = {
  en: 'That is exactly the point.',
  de: 'Genau das soll so sein.',
  es: 'Y así debe ser.',
  nl: 'Precies zoals het hoort.',
  sv: 'Precis som det ska vara.'
};

export const cinematicPhilosophyLabel: CopyRow = {
  en: 'About AMARA',
  de: 'Über AMARA',
  es: 'Sobre AMARA',
  nl: 'Over AMARA',
  sv: 'Om AMARA'
};

export const cinematicPhilosophyP1: CopyRow = {
  en: 'AMARA is not a hotel chain. We look after a small number of individual holiday stays in Frigiliana, Nerja and Tarifa. Some sit among historic village lanes; others are close to the sea. We manage every one ourselves and know each of them well.',
  de: 'AMARA ist keine Hotelkette. Wir vermieten eine kleine Anzahl individuell eingerichteter Ferienunterkünfte in Frigiliana, Nerja und Tarifa. Manche liegen mitten in historischen Gassen, andere fast direkt am Meer. Gemeinsam ist ihnen, dass wir sie selbst betreuen und sehr genau kennen.',
  es: 'AMARA no es una cadena hotelera. Gestionamos un pequeño número de alojamientos con personalidad propia en Frigiliana, Nerja y Tarifa. Algunos están entre calles históricas; otros, muy cerca del mar. Los llevamos nosotros mismos y conocemos bien cada uno.',
  nl: 'AMARA is geen hotelketen. We beheren een klein aantal eigenzinnige vakantieverblijven in Frigiliana, Nerja en Tarifa. Sommige liggen midden in historische straatjes, andere vlak bij zee. We zorgen er zelf voor en kennen elk verblijf door en door.',
  sv: 'AMARA är ingen hotellkedja. Vi tar hand om ett litet antal personliga semesterboenden i Frigiliana, Nerja och Tarifa. Några ligger mitt bland historiska gränder, andra nära havet. Vi sköter dem själva och känner varje boende väl.'
};

export const cinematicPhilosophyP2: CopyRow = {
  en: 'Casa AMARA stands in Frigiliana’s protected old town. We restored the house between 2020 and 2022. During the work, old walls came to light in which our architect recognised the Moorish construction that shaped this part of Andalusia for centuries.',
  de: 'Casa AMARA steht mitten in Frigilianas historischer Altstadt. Wir haben das Haus von 2020 bis 2022 restauriert. Dabei kamen alte Mauern zum Vorschein, in denen unser Architekt noch die maurische Bauweise erkannte, die diesen Teil Andalusiens über Jahrhunderte geprägt hat.',
  es: 'Casa AMARA está en pleno casco antiguo de Frigiliana. Restauramos la casa entre 2020 y 2022. Durante las obras aparecieron muros antiguos en los que nuestro arquitecto reconoció la construcción andalusí que marcó esta parte de Andalucía durante siglos.',
  nl: 'Casa AMARA staat midden in de beschermde oude kern van Frigiliana. We restaureerden het huis tussen 2020 en 2022. Daarbij kwamen oude muren tevoorschijn waarin onze architect de Moorse bouwwijze herkende die dit deel van Andalusië eeuwenlang heeft gevormd.',
  sv: 'Casa AMARA ligger mitt i Frigilianas skyddade gamla stad. Vi restaurerade huset mellan 2020 och 2022. Under arbetet kom gamla murar fram där vår arkitekt kände igen den moriska byggnadsteknik som präglade den här delen av Andalusien i århundraden.'
};

export const cinematicCollectionEyebrow: CopyRow = {
  en: 'Our stays',
  de: 'Unsere Unterkünfte',
  es: 'Nuestros alojamientos',
  nl: 'Onze verblijven',
  sv: 'Våra boenden'
};

export const cinematicCollectionTitle: CopyRow = {
  en: 'Which one suits your trip?',
  de: 'Welche passt zu euch?',
  es: '¿Cuál encaja con vuestro viaje?',
  nl: 'Welk verblijf past bij jullie reis?',
  sv: 'Vilket boende passar er resa?'
};

export const cinematicTrustQuote: CopyRow = {
  en: 'Our guests can judge AMARA better than we can.',
  de: 'Unsere Gäste können AMARA besser beurteilen als wir selbst.',
  es: 'Nuestros huéspedes pueden hablar de AMARA mejor que nosotros.',
  nl: 'Onze gasten kunnen AMARA beter beoordelen dan wijzelf.',
  sv: 'Våra gäster kan bedöma AMARA bättre än vi själva.'
};

export const cinematicTrustCta: CopyRow = {
  en: `Read all ${airbnbReviewEvidence.reviewCountLabel} reviews`,
  de: `Alle ${airbnbReviewEvidence.reviewCountLabel} Bewertungen lesen`,
  es: `Leer las ${airbnbReviewEvidence.reviewCountLabel} reseñas`,
  nl: `Lees alle ${airbnbReviewEvidence.reviewCountLabel} beoordelingen`,
  sv: `Läs alla ${airbnbReviewEvidence.reviewCountLabel} recensioner`
};

/** Primary action of the closing trust band — the site's strongest conversion moment. */
export const cinematicTrustCtaPrimary: CopyRow = {
  en: 'Check Availability',
  de: 'Verfügbarkeit prüfen',
  es: 'Consultar disponibilidad',
  nl: 'Beschikbaarheid checken',
  sv: 'Se tillgänglighet'
};

export const cinematicStatReviewsValue = String(airbnbReviewEvidence.reviewCountLabel);
export const cinematicStatRatingValue: CopyRow = airbnbRatingLabel;

export const cinematicStatReviewsLabel: CopyRow = {
  en: 'Verified Reviews',
  de: 'Verifizierte Bewertungen',
  es: 'Reseñas verificadas',
  nl: 'Geverifieerde reviews',
  sv: 'Verifierade recensioner'
};

export const cinematicStatRatingLabel: CopyRow = {
  en: 'Average Rating',
  de: 'Durchschnittsnote',
  es: 'Valoración media',
  nl: 'Gemiddelde score',
  sv: 'Genomsnittligt betyg'
};

export const cinematicGuideEyebrow: CopyRow = {
  en: 'Choose the right location',
  de: 'Die richtige Lage',
  es: 'Elegid bien la zona',
  nl: 'Kies de juiste ligging',
  sv: 'Välj rätt läge'
};

export const cinematicGuideTitle: CopyRow = {
  en: "Know where you're going? Now choose where to stay.",
  de: 'Ihr wisst, wohin? Jetzt zählt, wo genau ihr wohnt.',
  es: '¿Ya sabéis adónde vais? Ahora toca elegir dónde alojarse.',
  nl: 'Weten jullie al waarheen? Kies dan waar je precies wilt verblijven.',
  sv: 'Vet ni redan vart ni vill? Då återstår att välja var ni ska bo.'
};

export interface CinematicGuideLinkDef {
  token: string;
  label: CopyRow;
  text: CopyRow;
}

export const cinematicGuideLinks: CinematicGuideLinkDef[] = [
  {
    token: 'frigiliana_stairs',
    label: {
      en: 'Where to stay in Frigiliana',
      de: 'Wo in Frigiliana übernachten?',
      es: 'Dónde alojarse en Frigiliana',
      nl: 'Waar overnachten in Frigiliana?',
      sv: 'Var ska man bo i Frigiliana?'
    },
    text: {
      en: 'Historic centre or newer village? Upper Barribarto or lower in the old town? See how slopes, walking routes and the exact position shape the stay.',
      de: 'Altstadt oder neuerer Ortsteil? Weiter oben im Barribarto oder vergleichsweise niedrig im historischen Zentrum? Seht, wie Steigungen, Wege und die genaue Lage euren Aufenthalt verändern.',
      es: '¿Casco histórico o zona más moderna? ¿Arriba en el Barribarto o más abajo dentro del pueblo antiguo? Ved cómo las cuestas, los recorridos a pie y la ubicación concreta cambian la estancia.',
      nl: 'Historische kern of moderner dorpsdeel? Hoog in Barribarto of lager in het oude dorp? Ontdek hoe hellingen, wandelroutes en de precieze ligging jullie verblijf beïnvloeden.',
      sv: 'Historiska bykärnan eller den modernare delen? Högt i Barribarto eller längre ner i gamla byn? Se hur backar, gångvägar och det exakta läget påverkar vistelsen.'
    }
  },
  {
    token: 'location_nerja',
    label: {
      en: 'Where to stay in Nerja',
      de: 'Wo in Nerja übernachten?',
      es: 'Dónde alojarse en Nerja',
      nl: 'Waar overnachten in Nerja?',
      sv: 'Var ska man bo i Nerja?'
    },
    text: {
      en: 'Old Town, Torrecilla, Carabeo, Burriana or the residential hills? Compare beach access, walking, mobility and everyday life.',
      de: 'Altstadt, Torrecilla, Carabeo, Burriana oder die Wohnlagen am Hang? Vergleicht Strandnähe, Wege, Mobilität und den Alltag vor Ort.',
      es: '¿Casco antiguo, Torrecilla, Carabeo, Burriana o las zonas residenciales de las colinas? Comparad playa, recorridos a pie, movilidad y vida cotidiana.',
      nl: 'Oude centrum, Torrecilla, Carabeo, Burriana of de woonwijken in de heuvels? Vergelijk strand, wandelroutes, mobiliteit en het dagelijks leven.',
      sv: 'Gamla stan, Torrecilla, Carabeo, Burriana eller bostadsområdena på höjderna? Jämför närhet till stranden, gångvägar, mobilitet och vardagsliv.'
    }
  }
];

/** Navigation (shared with homepage Navigation.astro) */
export const navExperiences: CopyRow = {
  en: 'Experiences',
  de: 'Erlebnisse',
  es: 'Experiencias',
  nl: 'Ervaringen',
  sv: 'Upplevelser'
};

// Compatibility export for the untracked Design Lab consumer; the vocabulary is owned centrally.
export const navApartments: CopyRow = stayCollectionLabels.shortLabel;

export const navReviews: CopyRow = {
  en: 'Reviews',
  de: 'Bewertungen',
  es: 'Reseñas',
  nl: 'Reviews',
  sv: 'Recensioner'
};

export const navSoonBadge: CopyRow = {
  en: 'Soon',
  de: 'Bald',
  es: 'Pronto',
  nl: 'Binnenkort',
  sv: 'Snart'
};

/** Four chips — trust band */
export const cinematicTrustChips: Record<AmaraLanguage, string[]> = {
  en: ['Sea views', 'Private terraces', 'Direct host contact', 'Verified guest reviews'],
  de: ['Meerblick', 'Private Terrassen', 'Ruhige Lagen', 'Hochwertige Betten'],
  es: ['Vistas al mar', 'Terrazas privadas', 'Contacto directo con el anfitrión', 'Reseñas verificadas'],
  nl: ['Zeezicht', 'Privéterrassen', 'Direct contact met de host', 'Geverifieerde beoordelingen'],
  sv: ['Havsutsikt', 'Privata terrasser', 'Direktkontakt med värden', 'Verifierade recensioner']
};

export type CinematicAptToken = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'casa';

export interface CinematicAptDef {
  id: string;
  token: CinematicAptToken;
  name: string;
  subtitle: CopyRow;
  meta: CopyRow;
  desc: CopyRow;
  imageAlt: CopyRow;
  exploreLabel: CopyRow;
}

export const cinematicApartments: CinematicAptDef[] = [
  {
    id: 'farah',
    token: 'farah',
    name: 'Farah',
    subtitle: {
      en: 'For short stays in Frigiliana',
      de: 'Für kurze Aufenthalte in Frigiliana',
      es: 'Para estancias cortas en Frigiliana',
      nl: 'Voor een kort verblijf in Frigiliana',
      sv: 'För kortare vistelser i Frigiliana'
    },
    meta: {
      en: 'Frigiliana • 2 guests',
      de: 'Frigiliana • 2 Gäste',
      es: 'Frigiliana • 2 huéspedes',
      nl: 'Frigiliana • 2 gasten',
      sv: 'Frigiliana • 2 gäster'
    },
    desc: {
      en: 'Best for one or two nights: a bedroom, kitchenette and only one step at the entrance. No terrace and no full kitchen.',
      de: 'Ideal für ein oder zwei Nächte: Schlafzimmer, Teeküche und nur eine Stufe am Hauseingang. Keine Terrasse und keine vollständige Küche.',
      es: 'Pensada para una o dos noches: dormitorio, pequeña zona de cocina y un único escalón en la entrada. No tiene terraza ni cocina completa.',
      nl: 'Handig voor één of twee nachten: een slaapkamer, kitchenette en slechts één trede bij de ingang. Geen privéterras en geen volledige keuken.',
      sv: 'Passar bäst för en eller två nätter: sovrum, pentry och bara ett trappsteg vid entrén. Ingen terrass och inget komplett kök.'
    },
    imageAlt: {
      en: 'Bright bedroom with a green wooden window and brick arches in AMARA Farah, Frigiliana',
      de: 'Helles Schlafzimmer mit grünem Holzfenster und Backsteinbögen in AMARA Farah in Frigiliana',
      es: 'Dormitorio luminoso con ventana de madera verde y arcos de ladrillo en AMARA Farah, Frigiliana',
      nl: 'Lichte slaapkamer met groen houten raam en bakstenen bogen in AMARA Farah in Frigiliana',
      sv: 'Ljust sovrum med grönt träfönster och tegelvalv i AMARA Farah i Frigiliana'
    },
    exploreLabel: {
      en: 'Explore Farah',
      de: 'Farah entdecken',
      es: 'Explorar Farah',
      nl: 'Ontdek Farah',
      sv: 'Utforska Farah'
    }
  },
  {
    id: 'lounis',
    token: 'lounis',
    name: 'Lounis',
    subtitle: {
      en: 'Historic Apartment',
      de: 'Historisches Apartment mit Terrasse',
      es: 'Apartamento histórico',
      nl: 'Historisch appartement',
      sv: 'Historisk lägenhet'
    },
    meta: {
      en: 'Frigiliana • 2 guests',
      de: 'Frigiliana • 2 Gäste',
      es: 'Frigiliana • 2 huéspedes',
      nl: 'Frigiliana • 2 gasten',
      sv: 'Frigiliana • 2 gäster'
    },
    desc: {
      en: 'Views across the mango and avocado plantations to the sea. The terrace stays shaded in the morning and gets sun from around midday.',
      de: 'Blick über die Mango- und Avocadoplantagen bis zum Meer. Morgens liegt die Terrasse im Schatten, ab Mittag in der Sonne.',
      es: 'Vistas sobre los cultivos de mango y aguacate hasta el mar. La terraza tiene sombra por la mañana y sol a partir del mediodía.',
      nl: 'Uitzicht over de mango- en avocadoplantages tot aan zee. Het terras ligt ’s ochtends in de schaduw en krijgt vanaf de middag zon.',
      sv: 'Utsikt över mango- och avokadoplantagerna ända till havet. Terrassen ligger i skugga på morgonen och får sol från ungefär mitt på dagen.'
    },
    imageAlt: {
      en: 'Whitewashed terraces and palm trees at AMARA Lounis in Frigiliana',
      de: 'Weiß getünchte Terrassen und Palmen bei AMARA Lounis in Frigiliana',
      es: 'Terrazas encaladas y palmeras en AMARA Lounis, Frigiliana',
      nl: 'Witgekalkte terrassen en palmbomen bij AMARA Lounis in Frigiliana',
      sv: 'Vitkalkade terrasser och palmer vid AMARA Lounis i Frigiliana'
    },
    exploreLabel: {
      en: 'Explore Lounis',
      de: 'Lounis entdecken',
      es: 'Explorar Lounis',
      nl: 'Ontdek Lounis',
      sv: 'Utforska Lounis'
    }
  },
  {
    id: 'zaid',
    token: 'zaid',
    name: 'Zaid',
    subtitle: {
      en: 'Terrace Apartment',
      de: 'Eine Etage höher, mit weiterem Blick',
      es: 'Apartamento con terraza',
      nl: 'Terrasappartement',
      sv: 'Terrasslägenhet'
    },
    meta: {
      en: 'Frigiliana • 2 guests',
      de: 'Frigiliana • 2 Gäste',
      es: 'Frigiliana • 2 huéspedes',
      nl: 'Frigiliana • 2 gasten',
      sv: 'Frigiliana • 2 gäster'
    },
    desc: {
      en: 'A private terrace one floor above Lounis, with a wider view and the broadest bed in Casa AMARA at 180 × 200 cm.',
      de: 'Private Terrasse über den Plantagen und mit 180 × 200 cm das breiteste Bett in Casa AMARA.',
      es: 'Terraza privada una planta por encima de Lounis, con vistas más amplias y la cama más ancha de Casa AMARA: 180 × 200 cm.',
      nl: 'Een privéterras één verdieping boven Lounis, met ruimer uitzicht en het breedste bed van Casa AMARA: 180 × 200 cm.',
      sv: 'Privat terrass en våning ovanför Lounis, med vidare utsikt och Casa AMARAs bredaste säng: 180 × 200 cm.'
    },
    imageAlt: {
      en: 'Outdoor rain shower with handmade tiles on the private terrace of AMARA Zaid in Frigiliana',
      de: 'Außendusche mit handgefertigten Fliesen auf der privaten Terrasse von AMARA Zaid in Frigiliana',
      es: 'Ducha exterior con azulejos artesanales en la terraza privada de AMARA Zaid, Frigiliana',
      nl: 'Buitendouche met handgemaakte tegels op het privéterras van AMARA Zaid in Frigiliana',
      sv: 'Utomhusdusch med handgjorda kakelplattor på AMARA Zaids privata terrass i Frigiliana'
    },
    exploreLabel: {
      en: 'Explore Zaid',
      de: 'Zaid entdecken',
      es: 'Explorar Zaid',
      nl: 'Ontdek Zaid',
      sv: 'Utforska Zaid'
    }
  },
  {
    id: 'maha',
    token: 'maha',
    name: 'Maha',
    subtitle: {
      en: 'Old Town Apartment',
      de: '60 m² private Terrasse',
      es: 'Apartamento en casco antiguo',
      nl: 'Appartement in oude stad',
      sv: 'Lägenhet i gamla stan'
    },
    meta: {
      en: 'Frigiliana • 2 guests',
      de: 'Frigiliana • 2 Gäste',
      es: 'Frigiliana • 2 huéspedes',
      nl: 'Frigiliana • 2 gasten',
      sv: 'Frigiliana • 2 gäster'
    },
    desc: {
      en: 'The largest terrace in the house: 60 m² with an outdoor kitchen and the widest view. Maha sits at the top of Casa AMARA.',
      de: 'Die größte Terrasse im Haus, mit Außenküche und weitem Blick. Das Apartment liegt ganz oben in Casa AMARA.',
      es: 'La terraza más grande de la casa: 60 m², cocina exterior y las vistas más amplias. Maha ocupa la parte más alta de Casa AMARA.',
      nl: 'Het grootste terras van het huis: 60 m², met buitenkeuken en het ruimste uitzicht. Maha ligt helemaal boven in Casa AMARA.',
      sv: 'Husets största terrass: 60 m² med utekök och den vidaste utsikten. Maha ligger högst upp i Casa AMARA.'
    },
    imageAlt: {
      en: 'Shaded private terrace with an outdoor sofa at AMARA Maha in Frigiliana',
      de: 'Beschattete private Terrasse mit Outdoor-Sofa bei AMARA Maha in Frigiliana',
      es: 'Terraza privada con sombra y sofá exterior en AMARA Maha, Frigiliana',
      nl: 'Beschaduwd privéterras met buitenbank bij AMARA Maha in Frigiliana',
      sv: 'Skuggad privat terrass med utomhussoffa på AMARA Maha i Frigiliana'
    },
    exploreLabel: {
      en: 'Explore Maha',
      de: 'Maha entdecken',
      es: 'Explorar Maha',
      nl: 'Ontdek Maha',
      sv: 'Utforska Maha'
    }
  },
  {
    id: 'playa',
    token: 'playa',
    name: 'Playa',
    subtitle: {
      en: 'Nerja Beach Apartment',
      de: '100 Meter vom Strand in Nerja',
      es: 'Apartamento de playa en Nerja',
      nl: 'Strandappartement Nerja',
      sv: 'Strandlägenhet Nerja'
    },
    meta: {
      en: 'Nerja • 2 guests',
      de: 'Nerja • 2 Gäste',
      es: 'Nerja • 2 huéspedes',
      nl: 'Nerja • 2 gasten',
      sv: 'Nerja • 2 gäster'
    },
    desc: {
      en: '100 metres from Torrecilla beach and 500 metres from the Balcón de Europa. Fifth floor with lift, side sea view and a 200 × 200 cm bed.',
      de: 'Nur 500 Meter bis zum Balcón de Europa und trotzdem ruhig. Im fünften Stock mit Aufzug und einem 200 × 200 cm großen Bett.',
      es: 'A 100 metros de la playa de Torrecilla y 500 del Balcón de Europa. Quinta planta con ascensor, vistas laterales al mar y cama de 200 × 200 cm.',
      nl: 'Op 100 meter van het strand van Torrecilla en 500 meter van het Balcón de Europa. Vijfde verdieping met lift, zijdelings zeezicht en een bed van 200 × 200 cm.',
      sv: '100 meter från Torrecillastranden och 500 meter från Balcón de Europa. Femte våningen med hiss, havsutsikt åt sidan och en säng på 200 × 200 cm.'
    },
    imageAlt: {
      en: 'Blue-and-white living and dining room with balcony at AMARA Playa in Nerja',
      de: 'Blau-weißer Wohn- und Essbereich mit Balkon bei AMARA Playa in Nerja',
      es: 'Salón comedor en azul y blanco con balcón en AMARA Playa, Nerja',
      nl: 'Blauw-witte woon- en eetkamer met balkon bij AMARA Playa in Nerja',
      sv: 'Blåvitt vardagsrum och matplats med balkong på AMARA Playa i Nerja'
    },
    exploreLabel: {
      en: 'Explore Playa',
      de: 'Playa entdecken',
      es: 'Explorar Playa',
      nl: 'Ontdek Playa',
      sv: 'Utforska Playa'
    }
  },
  {
    id: 'casa',
    token: 'casa',
    name: 'Family & Surf',
    subtitle: {
      en: 'Penthouse',
      de: 'Penthouse in Tarifa für bis zu vier Gäste',
      es: 'Ático',
      nl: 'Penthouse',
      sv: 'Penthouse'
    },
    meta: {
      en: 'Tarifa • Family stay',
      de: 'Tarifa • Familienaufenthalt',
      es: 'Tarifa • estancia familiar',
      nl: 'Tarifa • gezinsverblijf',
      sv: 'Tarifa • familjevistelse'
    },
    desc: {
      en: 'Two floors, two bedrooms and two bathrooms, with a terrace facing the Atlantic. Suitable for couples and families of up to four.',
      de: 'Zwei Schlafzimmer, zwei Bäder, direkter Atlantikblick, Gemeinschaftspool und ein reservierter Tiefgaragenplatz.',
      es: 'Dos plantas, dos dormitorios y dos baños, con terraza frente al Atlántico. Para parejas y familias de hasta cuatro personas.',
      nl: 'Twee verdiepingen, twee slaapkamers en twee badkamers, met een terras op de Atlantische Oceaan. Voor stellen en gezinnen tot vier personen.',
      sv: 'Två våningar, två sovrum och två badrum samt en terrass mot Atlanten. Passar både par och familjer på upp till fyra personer.'
    },
    imageAlt: {
      en: 'Living room with colorful artwork and an open staircase at AMARA Family & Surf in Tarifa',
      de: 'Wohnzimmer mit farbenfroher Kunst und offener Treppe bei AMARA Family & Surf in Tarifa',
      es: 'Salón con obras de arte coloridas y escalera abierta en AMARA Family & Surf, Tarifa',
      nl: 'Woonkamer met kleurrijke kunst en open trap bij AMARA Family & Surf in Tarifa',
      sv: 'Vardagsrum med färgstark konst och öppen trappa på AMARA Family & Surf i Tarifa'
    },
    exploreLabel: {
      en: 'Explore Family & Surf',
      de: 'Family & Surf entdecken',
      es: 'Explorar Family & Surf',
      nl: 'Ontdek Family & Surf',
      sv: 'Utforska Family & Surf'
    }
  }
];
