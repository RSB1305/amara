/**
 * Homepage cinematic band — 5-language copy (SSOT per field).
 * Used by HomePage.astro + HomeCinematicMain.tsx props.
 */
import type { AmaraLanguage } from '../types/seo';

export type CopyRow = Record<AmaraLanguage, string>;

export const cinematicHeroKicker: CopyRow = {
  en: 'Romantic Hideaways',
  de: 'Romantische Hideaways',
  es: 'Refugios románticos',
  nl: 'Romantische hideaways',
  sv: 'Romantiska tillflyktsorter'
};

export const cinematicHeroLead: CopyRow = {
  en: 'A place to arrive, exhale, and truly stay.',
  de: 'Ein Ort zum Ankommen, Durchatmen und wirklich Bleiben.',
  es: 'Un lugar para llegar, exhalar y quedarse de verdad.',
  nl: 'Een plek om aan te komen, uit te ademen en echt te blijven.',
  sv: 'En plats att komma till, andas ut och verkligen stanna.'
};

export const cinematicScrollHint: CopyRow = {
  en: 'Scroll to discover',
  de: 'Scrollen zum Entdecken',
  es: 'Desplázate para descubrir',
  nl: 'Scroll om te ontdekken',
  sv: 'Scrolla för att upptäcka'
};

export const cinematicPhilosophyPart1: CopyRow = {
  en: 'Not just passing through, but',
  de: 'Nicht nur Durchreisen, sondern',
  es: 'No solo de paso, sino',
  nl: 'Niet alleen passeren, maar',
  sv: 'Inte bara på genomresa, utan'
};

export const cinematicPhilosophyAccent: CopyRow = {
  en: 'belonging.',
  de: 'Zugehörigkeit.',
  es: 'pertenecer.',
  nl: 'thuishoren.',
  sv: 'att höra hemma.'
};

export const cinematicPhilosophyLabel: CopyRow = {
  en: 'The Philosophy',
  de: 'Die Philosophie',
  es: 'La filosofía',
  nl: 'De filosofie',
  sv: 'Filosofin'
};

export const cinematicPhilosophyP1: CopyRow = {
  en: 'AMARA is a curated collection of private boutique apartments in the white village of Frigiliana, plus one calm seaside escape in Nerja. Created for guests who value privacy, atmosphere, and a slower rhythm of travel.',
  de: 'AMARA ist eine kuratierte Sammlung privater Boutique-Apartments im weißen Dorf Frigiliana plus einem ruhigen Küstenort in Nerja. Für Gäste, die Privatsphäre, Atmosphäre und ein langsameres Reisetempo schätzen.',
  es: 'AMARA es una colección curada de apartamentos boutique privados en el pueblo blanco de Frigiliana, más un refugio costero tranquilo en Nerja. Pensado para quienes valoran la privacidad, la atmósfera y un ritmo de viaje más pausado.',
  nl: 'AMARA is een gecureerde collectie privé boutique-appartementen in het witte dorp Frigiliana, plus één rustige kustontsnapping in Nerja. Voor gasten die privacy, sfeer en een langzamer reisritme waarderen.',
  sv: 'AMARA är en kurerad samling privata boutiquelägenheter i den vita byn Frigiliana, plus ett lugnt kustnära alternativ i Nerja. För gäster som värdesätter integritet, stämning och ett långsammare resande.'
};

export const cinematicPhilosophyP2: CopyRow = {
  en: 'Casa AMARA in Frigiliana dates back more than 800 years and was carefully restored in 2022. Today, it stands as one of the village icons — quietly woven into the fabric of Frigiliana itself.',
  de: 'Casa AMARA in Frigiliana ist über 800 Jahre alt und wurde 2022 sorgfältig restauriert. Heute ist es eines der Dorfikonen — leise im Gefüge von Frigiliana verwoben.',
  es: 'Casa AMARA en Frigiliana tiene más de 800 años y fue restaurada con mimo en 2022. Hoy es uno de los iconos del pueblo — tejida con discreción en la vida de Frigiliana.',
  nl: 'Casa AMARA in Frigiliana is meer dan 800 jaar oud en werd in 2022 zorgvuldig gerestaureerd. Vandaag is het een van de dorpsiconen — onopvallend verweven met Frigiliana.',
  sv: 'Casa AMARA i Frigiliana är mer än 800 år gammal och restaurerades omsorgsfullt 2022. Idag är det en av byns ikoner — diskret vävd in i Frigilianas väv.'
};

export const cinematicCollectionEyebrow: CopyRow = {
  en: 'The Collection',
  de: 'Die Kollektion',
  es: 'La colección',
  nl: 'De collectie',
  sv: 'Kollektionen'
};

export const cinematicCollectionTitle: CopyRow = {
  en: 'Spaces to breathe.',
  de: 'Räume zum Atmen.',
  es: 'Espacios para respirar.',
  nl: 'Ruimte om te ademen.',
  sv: 'Utrymmen att andas i.'
};

export const cinematicTrustQuote: CopyRow = {
  en: 'Calm stays, terrace mornings, quiet nights, deep sleep — thoughtfully hosted.',
  de: 'Ruhige Aufenthalte, Terrassenmorgen, leise Nächte, tiefer Schlaf — durchdacht betreut.',
  es: 'Estancias tranquilas, mañanas en la terraza, noches en silencio, sueño profundo — con un cuidado meditado.',
  nl: 'Rustige verblijven, terrasochtenden, stille nachten, diepe slaap — doordacht gehost.',
  sv: 'Lugna vistelser, terrassmorgnar, tysta nätter, djup sömn — omsorgsfullt värdskap.'
};

export const cinematicTrustCta: CopyRow = {
  en: 'Read all 500+ reviews',
  de: 'Alle 500+ Bewertungen lesen',
  es: 'Leer las más de 500 reseñas',
  nl: 'Lees alle 500+ beoordelingen',
  sv: 'Läs alla 500+ recensioner'
};

export const cinematicStatReviewsValue = '500+';
export const cinematicStatRatingValue = '4.95';

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

/** Navigation (shared with homepage Navigation.astro) */
export const navExperiences: CopyRow = {
  en: 'Experiences',
  de: 'Erlebnisse',
  es: 'Experiencias',
  nl: 'Ervaringen',
  sv: 'Upplevelser'
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
  en: ['Sea views', 'Large private terraces', 'Quiet locations', 'Premium bedding'],
  de: ['Meerblick', 'Große private Terrassen', 'Ruhige Lagen', 'Premium-Bettwäsche'],
  es: ['Vistas al mar', 'Grandes terrazas privadas', 'Ubicaciones tranquilas', 'Ropa de cama premium'],
  nl: ['Zeezicht', 'Grote privéterrassen', 'Rustige locaties', 'Premium beddengoed'],
  sv: ['Havsutsikt', 'Stora privata terrasser', 'Tysta lägen', 'Premium sängkläder']
};

export type CinematicAptToken = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'casa';

export interface CinematicAptDef {
  id: string;
  token: CinematicAptToken;
  img: string;
  name: string;
  subtitle: CopyRow;
  meta: CopyRow;
  desc: CopyRow;
  exploreLabel: CopyRow;
}

export const cinematicApartments: CinematicAptDef[] = [
  {
    id: 'farah',
    token: 'farah',
    img: 'https://l.icdbcdn.com/oh/3c79ee18-d231-4066-bbce-1b20c4732057.jpg',
    name: 'Farah',
    subtitle: {
      en: 'Boutique Retreat',
      de: 'Boutique-Refugium',
      es: 'Refugio boutique',
      nl: 'Boutique-retraite',
      sv: 'Boutique-reträtt'
    },
    meta: {
      en: 'Frigiliana • 2 guests',
      de: 'Frigiliana • 2 Gäste',
      es: 'Frigiliana • 2 huéspedes',
      nl: 'Frigiliana • 2 gasten',
      sv: 'Frigiliana • 2 gäster'
    },
    desc: {
      en: "A romantic boutique room with character — ideal for shorter trips. Designed with a deep respect for the village's Moorish past.",
      de: 'Ein romantisches Boutique-Zimmer mit Charakter — ideal für kürzere Aufenthalte. Entworfen mit tiefem Respekt für die maurische Geschichte des Dorfes.',
      es: 'Una habitación boutique romántica con carácter — ideal para estancias cortas. Diseñada con profundo respeto por el pasado morisco del pueblo.',
      nl: 'Een romantische boutiquekamer met karakter — ideaal voor kortere verblijven. Ontworpen met diep respect voor het Moorse verleden van het dorp.',
      sv: 'Ett romantiskt boutiquerum med karaktär — idealiskt för kortare vistelser. Utformat med djup respekt för byns moriska förflutna.'
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
    img: 'https://l.icdbcdn.com/oh/882b7732-0b8a-4d00-b9af-16271f78d09e.jpg',
    name: 'Lounis',
    subtitle: {
      en: 'Historic Apartment',
      de: 'Historisches Apartment',
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
      en: 'Historic charm with terrace time and a sense of space. High ceilings and original beams tell stories of centuries past.',
      de: 'Historischer Charme mit Terrassenzeit und Raumgefühl. Hohe Decken und alte Balken erzählen von vergangenen Jahrhunderten.',
      es: 'Encanto histórico con tiempo en la terraza y sensación de espacio. Techos altos y vigas originales cuentan siglos de historia.',
      nl: 'Historische charme met terrastijd en ruimtegevoel. Hoge plafonds en originele balken vertellen verhalen uit vroeger.',
      sv: 'Historiskt charm med terrasstid och rymd. Höga tak och originalbalkar berättar om århundraden.'
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
    img: 'https://l.icdbcdn.com/oh/392c7773-50bf-4814-955d-da26457f6440.jpg',
    name: 'Zaid',
    subtitle: {
      en: 'Terrace Apartment',
      de: 'Terrassen-Apartment',
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
      en: 'A calm retreat with a private terrace — made for slow mornings, coffee in the sun, and watching the village wake up.',
      de: 'Ein ruhiges Refugium mit privater Terrasse — für langsame Morgen, Kaffee in der Sonne und zusehen, wie das Dorf erwacht.',
      es: 'Un refugio tranquilo con terraza privada — para mañanas lentas, café al sol y ver despertar el pueblo.',
      nl: 'Een rustige plek met privéterras — voor trage ochtenden, koffie in de zon en het dorp dat ontwaakt.',
      sv: 'Ett lugnt tillflyktsort med privat terrass — för långsamma morgnar, kaffe i solen och byn som vaknar.'
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
    img: 'https://l.icdbcdn.com/oh/3e9884fa-4453-4aa8-8dae-fb54d6a87456.jpg',
    name: 'Maha',
    subtitle: {
      en: 'Old Town Apartment',
      de: 'Altstadt-Apartment',
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
      en: 'A terrace apartment designed for lingering in the white village. Elevated views and a seamless blend of indoor and outdoor living.',
      de: 'Ein Terrassen-Apartment zum Verweilen im weißen Dorf. Erhöhte Aussicht und ein nahtloses Zusammenspiel von innen und außen.',
      es: 'Un apartamento con terraza pensado para quedarse en el pueblo blanco. Vistas elevadas y una fusión natural de interior y exterior.',
      nl: 'Een terrasappartement om te blijven hangen in het witte dorp. Verhoogd uitzicht en een naadloze mix van binnen en buiten.',
      sv: 'En terrasslägenhet för att dröja kvar i den vita byn. Höjd över byn och en sömlös blandning av inne och ute.'
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
    img: 'https://l.icdbcdn.com/oh/46e112f1-729d-4a76-9c7a-df53cb2e2626.jpg',
    name: 'Playa',
    subtitle: {
      en: 'Nerja Beach Apartment',
      de: 'Strand-Apartment Nerja',
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
      en: 'A relaxed seaside base for couples who want the sea close by. The sound of the waves is your constant companion.',
      de: 'Eine entspannte Küstenbasis für Paare, die das Meer nah haben wollen. Das Rauschen der Wellen ist euer ständiger Begleiter.',
      es: 'Una base costera relajada para parejas que quieren el mar cerca. El sonido de las olas es vuestra compañía constante.',
      nl: 'Een ontspannen kustbasis voor koppels die de zee dichtbij willen. Het geluid van de golven is je constante metgezel.',
      sv: 'En avslappnad kustbas för par som vill ha havet nära. Vågornas brus är er ständiga följeslagare.'
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
    img: 'https://l.icdbcdn.com/oh/aa11c018-1653-4e74-9bcc-831dc0f8a3e7.jpg',
    name: 'Ocean View',
    subtitle: {
      en: 'Penthouse',
      de: 'Penthouse',
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
      en: 'A spacious home for surfers and families — intentionally different. Where the Mediterranean meets the Atlantic.',
      de: 'Ein geräumiges Zuhause für Surfer und Familien — bewusst anders. Wo Mittelmeer und Atlantik aufeinandertreffen.',
      es: 'Un hogar amplio para surfistas y familias — distinto a propósito. Donde el Mediterráneo se encuentra con el Atlántico.',
      nl: 'Een ruim thuis voor surfers en gezinnen — bewust anders. Waar de Middellandse Zee en de Atlantische Oceaan elkaar ontmoeten.',
      sv: 'Ett rymligt hem för surfare och familjer — medvetet annorlunda. Där Medelhavet möter Atlanten.'
    },
    exploreLabel: {
      en: 'Explore Ocean View',
      de: 'Ocean View entdecken',
      es: 'Explorar Ocean View',
      nl: 'Ontdek Ocean View',
      sv: 'Utforska Ocean View'
    }
  }
];
