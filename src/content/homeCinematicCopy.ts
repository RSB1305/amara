import type { LinkToken } from '../lib/linkResolver';
/**
 * Homepage cinematic band — 5-language copy (SSOT per field).
 * Used by HomePage.astro + HomeCinematicMain.astro props.
 */
import type { AmaraLanguage } from '../types/seo';
import { airbnbRatingLabel, airbnbReviewEvidence } from './reviewEvidence';
import { stayCollectionLabels } from './stayCollectionLabels';

export type CopyRow = Record<AmaraLanguage, string>;

/** Deliberately Spanish in every locale as AMARA's fixed hospitality welcome. */
export const cinematicWelcome = 'Bienvenidos a AMARA';

export const cinematicHeroKicker: CopyRow = {
  en: 'Romantic Hideaways',
  de: 'Romantic Hideaways',
  es: 'Romantic Hideaways',
  nl: 'Romantic Hideaways',
  sv: 'Romantic Hideaways'
};

export const cinematicHeroLead: CopyRow = {
  en: 'Special places for shared time as a couple — among Frigiliana’s whitewashed lanes, by the Mediterranean in Nerja and beneath Tarifa’s wide Atlantic sky.',
  de: 'Besondere Orte für gemeinsame Zeit zu zweit – zwischen Frigilianas weißen Altstadtgassen, am Mittelmeer in Nerja und unter Tarifas weitem Atlantikhimmel.',
  es: 'Lugares especiales para compartir tiempo en pareja: entre las callejuelas blancas de Frigiliana, junto al Mediterráneo en Nerja y bajo el inmenso cielo atlántico de Tarifa.',
  nl: 'Bijzondere plekken voor waardevolle tijd samen — tussen de witgekalkte straatjes van Frigiliana, aan de Middellandse Zee in Nerja en onder de weidse Atlantische hemel van Tarifa.',
  sv: 'Speciella platser för värdefull tid tillsammans — bland Frigilianas vitkalkade gränder, vid Medelhavet i Nerja och under Tarifas vida atlanthimmel.'
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
  en: 'Six Romantic Hideaways.',
  de: 'Sechs Romantic Hideaways.',
  es: 'Seis Romantic Hideaways.',
  nl: 'Zes Romantic Hideaways.',
  sv: 'Sex Romantic Hideaways.'
};

export const cinematicPhilosophyAccent: CopyRow = {
  en: 'Which one feels like your place?',
  de: 'Welcher Ort fühlt sich nach euch an?',
  es: '¿Cuál puede ser vuestro lugar?',
  nl: 'Welke plek voelt als die van jullie?',
  sv: 'Vilken plats känns som er?'
};

export const cinematicPhilosophyLabel: CopyRow = {
  en: 'About AMARA',
  de: 'Über AMARA',
  es: 'Sobre AMARA',
  nl: 'Over AMARA',
  sv: 'Om AMARA'
};

export const cinematicPhilosophyP1: CopyRow = {
  en: 'AMARA brings together six individually furnished Romantic Hideaways in Frigiliana, Nerja and Tarifa. Each offers a different setting for time together: among old-town lanes, close to the Mediterranean or beneath Tarifa’s wide Atlantic sky. **We look after every stay ourselves**, know its story and its character, and help you choose the place that feels right for the two of you. Family & Surf in Tarifa is as much a generous hideaway for two as it is a stay for up to four guests.',
  de: 'AMARA vereint sechs individuell eingerichtete Romantic Hideaways in Frigiliana, Nerja und Tarifa. Jedes schafft auf seine eigene Weise Raum für gemeinsame Zeit: in weißen Altstadtgassen, nah am Mittelmeer oder unter Tarifas weitem Atlantikhimmel. **Wir betreuen jede Unterkunft selbst**, kennen ihre Geschichte und ihre Eigenheiten und helfen euch, den Ort zu finden, der zu euch passt. Family & Surf in Tarifa ist ebenso ein großzügiges Hideaway für zwei wie eine Unterkunft für bis zu vier Gäste.',
  es: 'AMARA reúne seis Romantic Hideaways con personalidad propia en Frigiliana, Nerja y Tarifa. Cada uno ofrece un escenario distinto para compartir tiempo juntos: entre callejuelas del casco antiguo, cerca del Mediterráneo o bajo el inmenso cielo atlántico de Tarifa. **Cuidamos personalmente cada alojamiento**, conocemos su historia y sus particularidades y os ayudamos a encontrar el lugar que encaja con vosotros. Family & Surf en Tarifa es tanto un refugio amplio para dos como un alojamiento para un máximo de cuatro huéspedes.',
  nl: 'AMARA brengt zes individueel ingerichte Romantic Hideaways in Frigiliana, Nerja en Tarifa samen. Elk biedt een andere omgeving voor tijd samen: tussen straatjes in de oude stad, dicht bij de Middellandse Zee of onder de weidse Atlantische hemel van Tarifa. **We beheren elk verblijf zelf**, kennen het verhaal en de eigenheid ervan en helpen jullie de plek te kiezen die bij jullie past. Family & Surf in Tarifa is zowel een royale hideaway voor twee als een verblijf voor maximaal vier gasten.',
  sv: 'AMARA samlar sex individuellt inredda Romantic Hideaways i Frigiliana, Nerja och Tarifa. Varje boende ger sin egen inramning åt tiden tillsammans: bland gränder i gamla stan, nära Medelhavet eller under Tarifas vida atlanthimmel. **Vi tar hand om varje boende själva**, känner dess historia och karaktär och hjälper er att välja platsen som känns rätt för just er. Family & Surf i Tarifa är både ett rymligt hideaway för två och ett boende för upp till fyra gäster.'
};

export const cinematicPhilosophyP2: CopyRow = {
  en: 'Casa AMARA stands in Frigiliana’s protected old town. We restored the house between 2020 and 2022. During the work, old walls came to light in which our architect recognised the Moorish construction that shaped this part of Andalusia for centuries.',
  de: 'Casa AMARA steht mitten in Frigilianas historischer Altstadt. Wir haben das Haus von 2020 bis 2022 restauriert. Dabei kamen alte Mauern zum Vorschein, in denen unser Architekt noch die maurische Bauweise erkannte, die diesen Teil Andalusiens über Jahrhunderte geprägt hat.',
  es: 'Casa AMARA está en pleno casco antiguo de Frigiliana. Restauramos la casa entre 2020 y 2022. Durante las obras aparecieron muros antiguos en los que nuestro arquitecto reconoció la construcción andalusí que marcó esta parte de Andalucía durante siglos.',
  nl: 'Casa AMARA staat midden in de beschermde oude kern van Frigiliana. We restaureerden het huis tussen 2020 en 2022. Daarbij kwamen oude muren tevoorschijn waarin onze architect de Moorse bouwwijze herkende die dit deel van Andalusië eeuwenlang heeft gevormd.',
  sv: 'Casa AMARA ligger mitt i Frigilianas skyddade gamla stad. Vi restaurerade huset mellan 2020 och 2022. Under arbetet kom gamla murar fram där vår arkitekt kände igen den moriska byggnadsteknik som präglade den här delen av Andalusien i århundraden.'
};

export const cinematicCollectionEyebrow: CopyRow = {
  en: 'Our Romantic Hideaways',
  de: 'Unsere Romantic Hideaways',
  es: 'Nuestros Romantic Hideaways',
  nl: 'Onze Romantic Hideaways',
  sv: 'Våra Romantic Hideaways'
};

export const cinematicCollectionTitle: CopyRow = {
  en: 'Find the hideaway for your time together.',
  de: 'Findet das Hideaway für eure gemeinsame Zeit.',
  es: 'Encontrad vuestro lugar para compartir tiempo juntos.',
  nl: 'Vind de hideaway voor jullie tijd samen.',
  sv: 'Hitta ert hideaway för tiden tillsammans.'
};

/**
 * Verbatim guest review, German original. The trust band shows a guest voice,
 * not AMARA talking about reviews; translations are marked as translations.
 */
export const cinematicTrustQuote: CopyRow = {
  en: 'We especially enjoyed the hours on the balcony, with that dreamlike view of the surrounding mountains and the Andalusian coast.',
  de: 'Besonders die Stunden auf dem Balkon mit dem traumhaften Blick auf die umliegenden Berge und die andalusische Küste haben wir sehr genossen.',
  es: 'Disfrutamos especialmente de las horas en el balcón, con esas vistas de ensueño a las montañas de alrededor y a la costa andaluza.',
  nl: 'We genoten vooral van de uren op het balkon, met dat droomachtige uitzicht op de omliggende bergen en de Andalusische kust.',
  sv: 'Vi njöt särskilt av timmarna på balkongen, med den drömlika utsikten över bergen runt omkring och den andalusiska kusten.'
};

export const cinematicTrustQuoteAttribution: CopyRow = {
  en: 'Filip, Berlin · Airbnb review, May 2026',
  de: 'Filip, Berlin · Airbnb-Bewertung, Mai 2026',
  es: 'Filip, Berlín · reseña en Airbnb, mayo de 2026',
  nl: 'Filip, Berlijn · Airbnb-beoordeling, mei 2026',
  sv: 'Filip, Berlin · Airbnb-omdöme, maj 2026'
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
  token: LinkToken;
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

/** Authored trust-band chips; the evidence chips are prepended at render. */
export const cinematicTrustChips: Record<AmaraLanguage, string[]> = {
  en: ['Real property details', 'Personal host contact'],
  de: ['Konkrete Unterkunftsdetails', 'Persönlicher Kontakt'],
  es: ['Detalles reales de cada alojamiento', 'Contacto personal'],
  nl: ['Concrete details per verblijf', 'Persoonlijk contact'],
  sv: ['Konkreta detaljer om varje boende', 'Personlig kontakt']
};

export type CinematicAptToken = 'farah' | 'lounis' | 'zaid' | 'maha' | 'playa' | 'tarifa';

export interface CinematicAptDef {
  id: string;
  token: CinematicAptToken;
  name: string;
  subtitle: CopyRow;
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
      en: 'Compact suite in the old town',
      de: 'Kompakte Suite in der Altstadt',
      es: 'Suite compacta en el casco antiguo',
      nl: 'Compacte suite in de oude kern',
      sv: 'Kompakt svit i gamla stan'
    },
    desc: {
      en: 'Two separate rooms, a tea kitchen for the morning coffee and **just one step at the entrance**. Made for short stays.',
      de: 'Zwei getrennte Räume, eine Teeküche für den Morgenkaffee und **nur eine Stufe am Eingang**. Gemacht für kurze Aufenthalte.',
      es: 'Dos estancias separadas, una zona de café y té para el desayuno y **un único escalón en la entrada**. Pensada para estancias cortas.',
      nl: 'Twee aparte ruimtes, een kitchenette voor de ochtendkoffie en **slechts één trede bij de ingang**. Gemaakt voor korte verblijven.',
      sv: 'Två separata rum, ett pentry för morgonkaffet och **bara ett trappsteg vid entrén**. Gjord för korta vistelser.'
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
      en: 'Historic apartment with an old well',
      de: 'Historisches Apartment mit altem Brunnen',
      es: 'Apartamento histórico con pozo antiguo',
      nl: 'Historisch appartement met oude waterput',
      sv: 'Historisk lägenhet med gammal brunn'
    },
    desc: {
      en: 'Behind the terrace lies an **eight-metre-deep private well**, and beside it a sheltered cave. The restoration brought Moorish masonry and the original floor tiles back to light.',
      de: 'Hinter der Terrasse liegt ein **acht Meter tiefer Privatbrunnen**, daneben eine geschützte Höhle. Bei der Restaurierung kamen maurische Mauern und die alten Originalfliesen wieder zum Vorschein.',
      es: 'Detrás de la terraza hay un **pozo privado de ocho metros de profundidad** y, junto a él, una cueva resguardada. La restauración sacó a la luz muros andalusíes y los azulejos originales.',
      nl: 'Achter het terras ligt een **acht meter diepe privéwaterput**, met daarnaast een beschutte grot. Bij de restauratie kwamen Moorse muren en de originele vloertegels weer tevoorschijn.',
      sv: 'Bakom terrassen finns en **åtta meter djup privat brunn** och intill den en skyddad grotta. Vid restaureringen kom moriska murar och de ursprungliga golvplattorna fram igen.'
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
      en: 'Terrace apartment with a wide view',
      de: 'Terrassen-Apartment mit weitem Blick',
      es: 'Apartamento con terraza y vistas amplias',
      nl: 'Terrasappartement met ruim uitzicht',
      sv: 'Terrasslägenhet med vid utsikt'
    },
    desc: {
      en: 'The terrace sits above the mango and avocado plantations, and the view reaches the sea. Inside stands **the widest bed in Casa AMARA**.',
      de: 'Die Terrasse liegt über den Mango- und Avocadoplantagen, der Blick reicht bis zum Meer. Drinnen steht **das breiteste Bett von Casa AMARA**.',
      es: 'La terraza se asoma sobre los cultivos de mango y aguacate, y la vista llega hasta el mar. Dentro está **la cama más ancha de Casa AMARA**.',
      nl: 'Het terras ligt boven de mango- en avocadoplantages, en het uitzicht reikt tot aan zee. Binnen staat **het breedste bed van Casa AMARA**.',
      sv: 'Terrassen ligger ovanför mango- och avokadoplantagerna, och utsikten når ända till havet. Inne står **Casa AMARAs bredaste säng**.'
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
      en: 'Roof terrace under open sky',
      de: 'Dachterrasse unter freiem Himmel',
      es: 'Terraza en la azotea, a cielo abierto',
      nl: 'Dakterras onder de blote hemel',
      sv: 'Takterrass under bar himmel'
    },
    desc: {
      en: 'At the top of the house, with the widest view and **an outdoor kitchen for cooking in the open air**.',
      de: 'Ganz oben im Haus, mit der weitesten Aussicht und einer **Außenküche zum Kochen im Freien**.',
      es: 'En lo más alto de la casa, con las vistas más amplias y **una cocina exterior para cocinar al aire libre**.',
      nl: 'Helemaal boven in het huis, met het ruimste uitzicht en **een buitenkeuken om in de open lucht te koken**.',
      sv: 'Högst upp i huset, med den vidaste utsikten och **ett utekök för matlagning under bar himmel**.'
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
      en: 'Between the beach and the Balcón de Europa',
      de: 'Zwischen Strand und Balcón de Europa',
      es: 'Entre la playa y el Balcón de Europa',
      nl: 'Tussen het strand en het Balcón de Europa',
      sv: 'Mellan stranden och Balcón de Europa'
    },
    desc: {
      en: 'Two hundred metres to Torrecilla beach, five hundred to the Balcón de Europa — **and quiet all the same**, on the fifth floor with a lift.',
      de: 'Zweihundert Meter zum Sandstrand von Torrecilla, fünfhundert zum Balcón de Europa – **und trotzdem ruhig**, im fünften Stock mit Aufzug.',
      es: 'Doscientos metros hasta la playa de Torrecilla, quinientos hasta el Balcón de Europa, y **aun así tranquilo**, en la quinta planta con ascensor.',
      nl: 'Tweehonderd meter naar het strand van Torrecilla, vijfhonderd naar het Balcón de Europa — **en toch rustig**, op de vijfde verdieping met lift.',
      sv: 'Tvåhundra meter till Torrecillastranden, femhundra till Balcón de Europa – **och ändå lugnt**, på femte våningen med hiss.'
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
    id: 'tarifa',
    token: 'tarifa',
    name: 'Family & Surf',
    subtitle: {
      en: 'Two levels above the Atlantic',
      de: 'Zwei Ebenen über dem Atlantik',
      es: 'Dos plantas sobre el Atlántico',
      nl: 'Twee verdiepingen boven de Atlantische Oceaan',
      sv: 'Två våningar över Atlanten'
    },
    desc: {
      en: 'A main bedroom and a second room with a bunk bed, two bathrooms, a shared pool and **your own underground parking**. From the terrace, the sun sets over the Atlantic.',
      de: 'Hauptschlafzimmer und ein zweites Zimmer mit Hochbett, zwei Bäder, Gemeinschaftspool und **eigene Tiefgarage**. Von der Terrasse geht die Sonne über dem Atlantik unter.',
      es: 'Dormitorio principal y una segunda habitación con litera, dos baños, piscina comunitaria y **garaje propio**. Desde la terraza, el sol se pone sobre el Atlántico.',
      nl: 'Een hoofdslaapkamer en een tweede kamer met stapelbed, twee badkamers, een gedeeld zwembad en **een eigen plek in de parkeergarage**. Vanaf het terras gaat de zon onder boven de Atlantische Oceaan.',
      sv: 'Ett huvudsovrum och ett andra rum med våningssäng, två badrum, gemensam pool och **eget garage**. Från terrassen går solen ner över Atlanten.'
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
/* =========================================================
   HERO PROOF STRIP
   Opening trust and booking signals. Detailed evidence and conditions stay in
   their later sections instead of repeating these summaries verbatim.
========================================================= */

export const cinematicHeroProofRating: CopyRow = {
  en: `${airbnbRatingLabel.en} from ${airbnbReviewEvidence.reviewCountLabel} Airbnb reviews`,
  de: `${airbnbRatingLabel.de} aus ${airbnbReviewEvidence.reviewCountLabel} Airbnb-Bewertungen`,
  es: `${airbnbRatingLabel.es} de ${airbnbReviewEvidence.reviewCountLabel} reseñas en Airbnb`,
  nl: `${airbnbRatingLabel.nl} uit ${airbnbReviewEvidence.reviewCountLabel} Airbnb-beoordelingen`,
  sv: `${airbnbRatingLabel.sv} från ${airbnbReviewEvidence.reviewCountLabel} Airbnb-omdömen`
};

export const cinematicHeroDirectBenefitsLabel: CopyRow = {
  en: 'Direct booking benefits',
  de: 'Vorteile der Direktbuchung',
  es: 'Ventajas de la reserva directa',
  nl: 'Voordelen van direct boeken',
  sv: 'Fördelar med direktbokning'
};

/* =========================================================
   THREE PLACES
   The home weights the locations deliberately: four of the six stays
   are in Frigiliana, so Frigiliana leads this section.
========================================================= */

export const cinematicPlacesEyebrow: CopyRow = {
  en: 'Three places, one host',
  de: 'Drei Orte, ein Gastgeber',
  es: 'Tres lugares, un anfitrión',
  nl: 'Drie plekken, één gastheer',
  sv: 'Tre platser, en värd'
};

export const cinematicPlacesTitle: CopyRow = {
  en: 'A mountain village, a town by the sea and an Atlantic coast. We host in all three.',
  de: 'Ein Bergdorf, eine Stadt am Meer und eine Atlantikküste. An allen drei Orten sind wir zu Hause.',
  es: 'Un pueblo de montaña, una ciudad junto al mar y una costa atlántica. Estamos en los tres.',
  nl: 'Een bergdorp, een stad aan zee en een Atlantische kust. Op alle drie zijn we thuis.',
  sv: 'En bergsby, en stad vid havet och en atlantkust. På alla tre är vi hemma.'
};

/** `{n}` is replaced with the number of stays actually registered for the place. */
export const cinematicPlacesCountLabel: CopyRow = {
  en: '{n} of six hideaways',
  de: '{n} von sechs Hideaways',
  es: '{n} de seis hideaways',
  nl: '{n} van zes hideaways',
  sv: '{n} av sex hideaways'
};

export interface CinematicPlaceDef {
  id: 'frigiliana' | 'nerja' | 'tarifa';
  /** Matches the `city` value carried by the vacation rental entities. */
  city: 'Frigiliana' | 'Nerja' | 'Tarifa';
  token: LinkToken;
  character: CopyRow;
  /** Only distances and durations already verified in AMARA content are stated. */
  travel: CopyRow;
  ctaLabel: CopyRow;
}

export const cinematicPlaces: CinematicPlaceDef[] = [
  {
    id: 'frigiliana',
    city: 'Frigiliana',
    token: 'location_frigiliana',
    character: {
      en: 'A white mountain village above the mango and avocado plantations. Four of our stays are here, all in Casa AMARA in the protected old town.',
      de: 'Ein weißes Bergdorf über den Mango- und Avocadoplantagen. Vier unserer Unterkünfte liegen hier, alle in Casa AMARA in der historischen Altstadt.',
      es: 'Un pueblo blanco de montaña sobre los cultivos de mango y aguacate. Cuatro de nuestros alojamientos están aquí, todos en Casa AMARA, en el casco antiguo protegido.',
      nl: 'Een wit bergdorp boven de mango- en avocadoplantages. Vier van onze verblijven liggen hier, allemaal in Casa AMARA in de beschermde oude kern.',
      sv: 'En vit bergsby ovanför mango- och avokadoodlingarna. Fyra av våra boenden ligger här, alla i Casa AMARA i den skyddade gamla stadskärnan.'
    },
    travel: {
      en: '50–60 minutes by car from Málaga airport · 10 minutes to Nerja',
      de: '50–60 Minuten mit dem Auto ab Flughafen Málaga · 10 Minuten nach Nerja',
      es: '50–60 minutos en coche desde el aeropuerto de Málaga · 10 minutos a Nerja',
      nl: '50–60 minuten met de auto vanaf de luchthaven van Málaga · 10 minuten naar Nerja',
      sv: '50–60 minuter med bil från Málagas flygplats · 10 minuter till Nerja'
    },
    ctaLabel: {
      en: 'Frigiliana as a place to stay',
      de: 'Frigiliana',
      es: 'Frigiliana como lugar donde alojarse',
      nl: 'Frigiliana als plek om te verblijven',
      sv: 'Frigiliana som plats att bo på'
    }
  },
  {
    id: 'nerja',
    city: 'Nerja',
    token: 'location_nerja',
    character: {
      en: 'The Mediterranean, the Balcón de Europa and a town that keeps working all year round. One apartment, fifth floor with a lift.',
      de: 'Das Mittelmeer, der Balcón de Europa und eine Stadt, die das ganze Jahr über funktioniert. Ein Apartment, im fünften Stock mit Aufzug.',
      es: 'El Mediterráneo, el Balcón de Europa y una ciudad que funciona todo el año. Un apartamento, en la quinta planta con ascensor.',
      nl: 'De Middellandse Zee, het Balcón de Europa en een stad die het hele jaar door blijft draaien. Eén appartement, vijfde verdieping met lift.',
      sv: 'Medelhavet, Balcón de Europa och en stad som fungerar året om. En lägenhet, femte våningen med hiss.'
    },
    travel: {
      en: '200 metres to Torrecilla beach · 10 minutes to Frigiliana',
      de: '200 Meter zum Strand von Torrecilla · 10 Minuten nach Frigiliana',
      es: '200 metros hasta la playa de Torrecilla · 10 minutos a Frigiliana',
      nl: '200 meter naar het strand van Torrecilla · 10 minuten naar Frigiliana',
      sv: '200 meter till Torrecillastranden · 10 minuter till Frigiliana'
    },
    ctaLabel: {
      en: 'Nerja as a place to stay',
      de: 'Nerja',
      es: 'Nerja como lugar donde alojarse',
      nl: 'Nerja als plek om te verblijven',
      sv: 'Nerja som plats att bo på'
    }
  },
  {
    id: 'tarifa',
    city: 'Tarifa',
    token: 'location_tarifa',
    character: {
      en: 'Where the Mediterranean meets the Atlantic, with wind, wide beaches and Africa on the horizon. One penthouse over two floors.',
      de: 'Wo das Mittelmeer auf den Atlantik trifft, mit Wind, weiten Stränden und Afrika am Horizont. Ein Penthouse über zwei Etagen.',
      es: 'Donde el Mediterráneo se encuentra con el Atlántico, con viento, playas amplias y África en el horizonte. Un ático de dos plantas.',
      nl: 'Waar de Middellandse Zee de Atlantische Oceaan ontmoet, met wind, brede stranden en Afrika aan de horizon. Eén penthouse over twee verdiepingen.',
      sv: 'Där Medelhavet möter Atlanten, med vind, vida stränder och Afrika vid horisonten. Ett penthouse över två våningar.'
    },
    travel: {
      en: '10–15 minutes on foot to the old town · supermarket directly opposite',
      de: '10–15 Minuten zu Fuß in die Altstadt · Supermarkt direkt gegenüber',
      es: '10–15 minutos a pie hasta el casco antiguo · supermercado justo enfrente',
      nl: '10–15 minuten lopen naar de oude stad · supermarkt direct aan de overkant',
      sv: '10–15 minuters promenad till Gamla stan · stormarknad direkt mittemot'
    },
    ctaLabel: {
      en: 'Tarifa as a place to stay',
      de: 'Tarifa',
      es: 'Tarifa como lugar donde alojarse',
      nl: 'Tarifa als plek om te verblijven',
      sv: 'Tarifa som plats att bo på'
    }
  }
];

/* =========================================================
   NERJA / FRIGILIANA BRIDGE
   Most arriving search interest names Nerja, while four of the six
   stays are in Frigiliana. This band exists to close that gap
   honestly instead of leaving the two locations as parallel silos.
========================================================= */

export const cinematicBridgeEyebrow: CopyRow = {
  en: 'Nerja or Frigiliana?',
  de: 'Nerja oder Frigiliana?',
  es: '¿Nerja o Frigiliana?',
  nl: 'Nerja of Frigiliana?',
  sv: 'Nerja eller Frigiliana?'
};

/**
 * Ten, not fifteen: the drive between Nerja and Frigiliana is the low end of
 * the drive the places band now states for both directions.
 */
export const cinematicBridgeTitle: CopyRow = {
  en: 'Ten minutes apart, and two quite different holidays.',
  de: 'Zehn Minuten auseinander – und zwei ziemlich verschiedene Urlaube.',
  es: 'A diez minutos el uno del otro, y dos vacaciones bastante distintas.',
  nl: 'Tien minuten uit elkaar, en twee heel verschillende vakanties.',
  sv: 'Tio minuter isär – och två ganska olika semestrar.'
};

export const cinematicBridgeBody: CopyRow = {
  en: 'Nerja puts the sea on your doorstep, with a promenade and everything open the whole year. Frigiliana gives you a village that goes quiet after dinner, a view across the plantations and a short drive to those same beaches. Plenty of guests come for one and spend their evenings in the other.',
  de: 'Nerja legt euch das Meer vor die Tür, mit Promenade und ganzjährig geöffneten Adressen. Frigiliana gibt euch ein Dorf, das nach dem Abendessen still wird, den Blick über die Plantagen und eine kurze Fahrt zu genau diesen Stränden. Viele Gäste kommen wegen des einen und verbringen die Abende im anderen.',
  es: 'Nerja os pone el mar en la puerta, con paseo marítimo y todo abierto durante todo el año. Frigiliana os da un pueblo que se queda en silencio después de cenar, vistas sobre los cultivos y un trayecto corto hasta esas mismas playas. Muchos huéspedes vienen por uno y acaban pasando las tardes en el otro.',
  nl: 'Nerja legt de zee voor jullie deur, met een boulevard en het hele jaar alles open. Frigiliana geeft jullie een dorp dat na het eten stil wordt, uitzicht over de plantages en een korte rit naar diezelfde stranden. Veel gasten komen voor het een en brengen hun avonden door in het ander.',
  sv: 'Nerja lägger havet utanför dörren, med strandpromenad och allt öppet året om. Frigiliana ger er en by som tystnar efter middagen, utsikt över odlingarna och en kort körtur till samma stränder. Många gäster kommer för det ena och tillbringar kvällarna i det andra.'
};

/**
 * Verbatim guest review, German original. Translations are marked as such in
 * the other locales: a citation is never re-authored as if the guest had said
 * it in that language.
 */
export const cinematicBridgeQuote: CopyRow = {
  en: 'We had actually planned to spend most of our time in Nerja (we had a rental car), but in the end we were mostly in Frigiliana in the evenings for dinner, because it is simply so beautiful there.',
  de: 'Wir hatten eigentlich geplant, die meiste Zeit in Nerja zu verbringen (wir hatten ein Mietauto), aber waren dann doch vor allem abends zum Essen in Frigiliana, weil es einfach so schön dort ist.',
  es: 'En realidad habíamos planeado pasar la mayor parte del tiempo en Nerja (teníamos coche de alquiler), pero al final cenábamos sobre todo en Frigiliana, porque sencillamente es preciosa.',
  nl: 'We waren eigenlijk van plan het grootste deel van de tijd in Nerja door te brengen (we hadden een huurauto), maar uiteindelijk waren we ’s avonds vooral in Frigiliana om te eten, omdat het daar gewoon zo mooi is.',
  sv: 'Vi hade egentligen planerat att tillbringa största delen av tiden i Nerja (vi hade hyrbil), men till slut var vi mest i Frigiliana på kvällarna för att äta, för det är helt enkelt så vackert där.'
};

export const cinematicBridgeQuoteAttribution: CopyRow = {
  en: 'Vivian · Airbnb review, August 2026',
  de: 'Vivian · Airbnb-Bewertung, August 2026',
  es: 'Vivian · reseña en Airbnb, agosto de 2026',
  nl: 'Vivian · Airbnb-beoordeling, augustus 2026',
  sv: 'Vivian · Airbnb-omdöme, augusti 2026'
};

export const cinematicBridgeCtaLabel: CopyRow = {
  en: 'Compare Nerja and Frigiliana',
  de: 'Nerja und Frigiliana vergleichen',
  es: 'Comparar Nerja y Frigiliana',
  nl: 'Nerja en Frigiliana vergelijken',
  sv: 'Jämför Nerja och Frigiliana'
};

/** Shown with a translated citation so the provenance stays visible. */
export const cinematicQuoteTranslationNote: CopyRow = {
  en: 'Translated from the German original.',
  de: 'Im deutschen Original.',
  es: 'Traducido del original en alemán.',
  nl: 'Vertaald uit het Duitse origineel.',
  sv: 'Översatt från det tyska originalet.'
};

/* =========================================================
   COLLECTION CARD FACTS
   Interior and terrace areas come from the rental entities, so the
   four Frigiliana stays finally read as four different places.
========================================================= */

export const cinematicFactInteriorLabel: CopyRow = {
  en: 'Interior',
  de: 'Wohnfläche',
  es: 'Superficie',
  nl: 'Woonoppervlak',
  sv: 'Boyta'
};

export const cinematicFactTerraceLabel: CopyRow = {
  en: 'Terrace',
  de: 'Terrasse',
  es: 'Terraza',
  nl: 'Terras',
  sv: 'Terrass'
};

export const cinematicCollectionCtaLabel: CopyRow = {
  en: 'Compare all six side by side',
  de: 'Alle sechs im Vergleich',
  es: 'Comparar los seis',
  nl: 'Alle zes vergelijken',
  sv: 'Jämför alla sex'
};

/* =========================================================
   DIRECT BOOKING
   The reason to book here rather than through a platform. The claims
   themselves are owned by directBookingBenefitsContent.ts.
========================================================= */

export const cinematicDirectEyebrow: CopyRow = {
  en: 'Booking direct with AMARA',
  de: 'Direkt bei AMARA buchen',
  es: 'Reservar directamente con AMARA',
  nl: 'Direct boeken bij AMARA',
  sv: 'Boka direkt hos AMARA'
};

export const cinematicDirectTitle: CopyRow = {
  en: 'The same stay, without the platform in between.',
  de: 'Derselbe Aufenthalt, ohne Plattform dazwischen.',
  es: 'La misma estancia, sin plataforma de por medio.',
  nl: 'Hetzelfde verblijf, zonder platform ertussen.',
  sv: 'Samma vistelse, utan plattform emellan.'
};

export const cinematicDirectCtaLabel: CopyRow = {
  en: 'What booking direct gives you',
  de: 'Was euch die Direktbuchung bringt',
  es: 'Qué os aporta reservar directamente',
  nl: 'Wat direct boeken jullie oplevert',
  sv: 'Vad direktbokning ger er'
};

/* =========================================================
   POSITIONING
========================================================= */

export const cinematicHoneymoonEyebrow: CopyRow = {
  en: 'Honeymoon',
  de: 'Flitterwochen',
  es: 'Luna de miel',
  nl: 'Huwelijksreis',
  sv: 'Smekmånad'
};

export const cinematicHoneymoonTitle: CopyRow = {
  en: 'Planning the first trip as a married couple?',
  de: 'Plant ihr die erste Reise als Ehepaar?',
  es: '¿Estáis planeando el primer viaje como pareja casada?',
  nl: 'Plannen jullie de eerste reis als getrouwd stel?',
  sv: 'Planerar ni den första resan som gifta?'
};

export const cinematicHoneymoonCtaLabel: CopyRow = {
  en: 'Hideaways for a honeymoon',
  de: 'Hideaways für die Flitterwochen',
  es: 'Hideaways para la luna de miel',
  nl: 'Hideaways voor de huwelijksreis',
  sv: 'Hideaways för smekmånaden'
};

/* =========================================================
   HOST
   The brand leads; the host appears at avatar scale with a route
   to the full story on the about page.
========================================================= */

export const cinematicHostLabel: CopyRow = {
  en: 'About AMARA ❤︎ and your host',
  de: 'Über AMARA ❤︎ und euren Gastgeber',
  es: 'Sobre AMARA ❤︎ y vuestro anfitrión',
  nl: 'Over AMARA ❤︎ en jullie gastheer',
  sv: 'Om AMARA ❤︎ och er värd'
};

export const cinematicHostAvatarAlt: CopyRow = {
  en: 'Robert, host of the AMARA stays in Andalusia',
  de: 'Robert, Gastgeber der AMARA-Unterkünfte in Andalusien',
  es: 'Robert, anfitrión de los alojamientos AMARA en Andalucía',
  nl: 'Robert, gastheer van de AMARA-verblijven in Andalusië',
  sv: 'Robert, värd för AMARA-boendena i Andalusien'
};

/* =========================================================
   CARD FACTS
   The card carries the same three dimensions for every stay, so a reader can
   compare them. An earlier version showed a ranked selection of amenity flags
   instead, which quietly lied: four stays have an underfloor-heated bathroom,
   only one had room to say so, and its neighbours read as if they did not.
   A missing measurement cannot mislead the same way — no terrace figure means
   no terrace, which is true. The romance is argued on the rental pages, which
   already carry the hammock, the outdoor shower and the historic well.
========================================================= */

/**
 * Screen-reader names for the three measurements. The glyph carries them
 * visually; without these the row would read as three bare numbers.
 */
export const cinematicFactOutdoorLabel: CopyRow = {
  en: 'Outdoor area',
  de: 'Außenbereich',
  es: 'Zona exterior',
  nl: 'Buitenruimte',
  sv: 'Uteplats'
};

export const cinematicFactBedLabel: CopyRow = {
  en: 'Bed',
  de: 'Bett',
  es: 'Cama',
  nl: 'Bed',
  sv: 'Säng'
};

export const cinematicFactBalconyLabel: CopyRow = {
  en: 'Balcony',
  de: 'Balkon',
  es: 'Balcón',
  nl: 'Balkon',
  sv: 'Balkong'
};

/** Splits the indicative price so the amount reads and the rest recedes. */
export const cinematicPriceFromLabel: CopyRow = {
  en: 'from',
  de: 'ab',
  es: 'desde',
  nl: 'vanaf',
  sv: 'från'
};

/** Set solid against the amount: "90 €/Nacht". */
export const cinematicPriceUnitLabel: CopyRow = {
  en: '/night',
  de: '/Nacht',
  es: '/noche',
  nl: '/nacht',
  sv: '/natt'
};

/* =========================================================
   POSITIONING PROOF
   "Romantic Hideaways" was asserted on the home and evidenced nowhere. These
   lines carry the claim. They name the stays rather than counting them: the
   page already had three "{n} of six" labels in the places band, and stating
   the proof as three more fractions turned the brand statement into
   arithmetic. The names are derived from the verified amenity flags, so the
   proof still cannot drift away from the product.
========================================================= */

/** Joins the final two names in a list: "Lounis, Zaid and Maha". */
export const cinematicListConjunction: CopyRow = {
  en: 'and',
  de: 'und',
  es: 'y',
  nl: 'en',
  sv: 'och'
};

export const cinematicPositioningLabel: CopyRow = {
  en: 'Why hideaways',
  de: 'Warum Hideaways',
  es: 'Por qué hideaways',
  nl: 'Waarom hideaways',
  sv: 'Därför hideaways'
};

export const cinematicPositioningTerraces: CopyRow = {
  en: '{stays}: a private terrace with a hammock, two loungers and an outdoor shower',
  de: '{stays}: private Terrasse mit Hängematte, zwei Liegen und Außendusche',
  es: '{stays}: terraza privada con hamaca, dos tumbonas y ducha exterior',
  nl: '{stays}: een privéterras met hangmat, twee ligbedden en buitendouche',
  sv: '{stays}: privat terrass med hängmatta, två solsängar och utomhusdusch'
};

export const cinematicPositioningStoves: CopyRow = {
  en: 'A stove for the cooler months in {stays}',
  de: 'Kaminofen für die kühlen Monate in {stays}',
  es: 'Estufa para los meses fríos en {stays}',
  nl: 'Een kachel voor de koelere maanden in {stays}',
  sv: 'Kamin för de svalare månaderna i {stays}'
};

export const cinematicPositioningEntrances: CopyRow = {
  en: 'Every stay has its own entrance and self check-in — no reception, no shared corridor',
  de: 'Überall eigener Eingang und Self-Check-in – keine Rezeption, kein geteilter Flur',
  es: 'En todos, entrada propia y check-in autónomo: sin recepción ni pasillos compartidos',
  nl: 'Overal een eigen ingang en self-check-in – geen receptie, geen gedeelde gang',
  sv: 'Överallt egen ingång och self check-in – ingen reception, ingen delad korridor'
};
