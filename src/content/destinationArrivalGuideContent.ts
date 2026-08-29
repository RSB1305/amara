import { resolveLocale } from '../types/content';
import type { LocalizedText } from '../types/content';
import type { ImageMetadata } from 'astro';
import type { ArrivalJourneyGraphicData } from '../components/location/ArrivalJourneyGraphic.astro';
import type { LocationGuideIconName } from '../components/location/LocationGuideIcon.astro';
import {
  gettingToFrigilianaCopy,
  gettingToFrigilianaExternalLinks,
  gettingToFrigilianaSeo
} from './gettingToFrigilianaContent';
import {
  frigilianaPreFooterCopy,
  getFrigilianaPreFooterDescription
} from './frigilianaPreFooterContent';
import { frigilianaDailyLifeContent } from './frigilianaDailyLifeContent';
import { frigilianaParkingCopy } from './frigilianaParkingContent';
import { gettingToNerjaContent, gettingToNerjaSeo } from './gettingToNerjaContent';
import { gettingToTarifaContent, gettingToTarifaSeo } from './gettingToTarifaContent';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type ArrivalGuideDestination = 'frigiliana' | 'nerja' | 'tarifa';

export interface ArrivalGuideCard {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  details: string[];
  icon: LocationGuideIconName;
  timing?: string;
  bestFor?: string;
  consideration?: string;
}

export interface ArrivalGuideSection {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ArrivalGuideCard[];
}

interface ArrivalGuideFact {
  label: string;
  value: string;
  description?: string;
}

interface ArrivalGuideSource {
  label: string;
  text: string;
  href: string;
}

interface ArrivalGuideLink {
  token: LinkToken;
  label: string;
  text?: string;
}

interface ArrivalGuideSteps {
  title: string;
  steps: Array<{ num: string; headline: string; text: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
}

interface ArrivalGuideFinalMile {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  stepIcons?: LocationGuideIconName[];
  image?: {
    src: ImageMetadata | string;
    alt: string;
  };
  links?: ArrivalGuideLink[];
}

export interface ArrivalGuidePageContent {
  destination: ArrivalGuideDestination;
  pageId: string;
  languageToken: LinkToken;
  navLabel: string;
  seo: AmaraAuthoringSeo;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    updated?: string;
    note?: string;
  };
  heroVisual: ArrivalJourneyGraphicData;
  author?: {
    name: string;
    token: LinkToken;
  };
  factsTitle: string;
  facts: ArrivalGuideFact[];
  factIcons: LocationGuideIconName[];
  gateways?: ArrivalGuideSection;
  options: ArrivalGuideSection & {
    recommendationLabel?: string;
    labels: {
      timing: string;
      bestFor: string;
      consideration: string;
    };
  };
  journeySteps?: ArrivalGuideSteps;
  mobility?: ArrivalGuideSection;
  parking?: ArrivalGuideCard;
  finalMile?: ArrivalGuideFinalMile;
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: ArrivalGuideSource[];
  };
  related?: {
    eyebrow: string;
    title: string;
    intro: string;
    links: ArrivalGuideLink[];
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    primary: ArrivalGuideLink;
    secondary: ArrivalGuideLink;
  };
  footerHighlights: ArrivalGuideLink[];
}

const nerjaArrivalUi = {
  en: {
    heroTitle: 'Getting to Nerja and AMARA Playa',
    heroText: 'Málaga Airport is the simplest gateway for most stays. From there, the direct Alsa coach is useful if your holiday will stay mostly in Nerja; a transfer or rental car takes you to the door and is more convenient for regional outings. AMARA Playa is at Calle Castilla Pérez 60, about 200 metres from Torrecilla beach. The coach stops elsewhere in town, and the apartment has no private parking.',
    optionsEyebrow: 'From Málaga Airport', optionsTitle: 'Bus or car: both work, for different holidays',
    carEyebrow: 'Transfer or rental car', carTitle: 'Door to door, with parking to solve', carText: 'A transfer is the easiest option with luggage. A rental car is useful for Maro, Frigiliana and the wider Axarquía, but it needs a legal public or street space after unloading.',
    busEyebrow: 'Direct Alsa coach', busTitle: 'Simple for a mostly car-free stay', busText: 'The coach connects Málaga Airport and Nerja. From Nerja bus station, continue to Calle Castilla Pérez 60 by taxi or on foot if the luggage allows it.',
    parkingEyebrow: 'Arriving by car', parkingTitle: 'There is no private parking at AMARA Playa', parkingText: 'Central public facilities and legal street parking are the realistic options. Availability, access and tariffs can change, especially in busy periods, so keep a second option in mind.',
    finalEyebrow: 'The last few minutes', finalTitle: 'Continue to Calle Castilla Pérez 60', finalSteps: ['By taxi or transfer, use the full AMARA Playa address.', 'By coach, the bus station is not the final stop; continue by taxi or on foot.', 'By car, unload only where current street rules permit, then move the car to a legal space.'],
    closeEyebrow: 'Once you are here', closeTitle: 'Most days in central Nerja work well on foot', closeText: 'Torrecilla beach is about 200 metres away and the Balcón de Europa about 500 metres. A car becomes useful when outings beyond Nerja are a regular part of the stay.'
  },
  de: {
    heroTitle: 'So kommt ihr nach Nerja und zu AMARA Playa',
    heroText: 'Für die meisten Aufenthalte ist der Flughafen Málaga der einfachste Ausgangspunkt. Von dort fährt Alsa direkt nach Nerja – praktisch, wenn ihr vor Ort meist zu Fuß unterwegs sein möchtet. Ein Transfer oder Mietwagen bringt euch bis zur Adresse und lohnt sich eher für Ausflüge. AMARA Playa liegt in der Calle Castilla Pérez 60, etwa 200 Meter vom Strand Torrecilla entfernt. Der Bus hält an einer anderen Stelle im Ort; einen privaten Parkplatz gibt es am Apartment nicht.',
    optionsEyebrow: 'Ab Flughafen Málaga', optionsTitle: 'Bus oder Auto – beides funktioniert, aber für unterschiedliche Reisen',
    carEyebrow: 'Transfer oder Mietwagen', carTitle: 'Bis zur Tür, danach ohne festen Stellplatz', carText: 'Mit Gepäck ist ein Transfer am bequemsten. Ein Mietwagen ist für Maro, Frigiliana und die Axarquía nützlich, braucht nach dem Ausladen aber einen legalen öffentlichen oder Straßenparkplatz.',
    busEyebrow: 'Direkter Alsa-Bus', busTitle: 'Einfach, wenn ihr Nerja meist zu Fuß erlebt', busText: 'Der Bus verbindet den Flughafen Málaga mit Nerja. Vom Busbahnhof geht es je nach Gepäck mit dem Taxi oder zu Fuß weiter zur Calle Castilla Pérez 60.',
    parkingEyebrow: 'Anreise mit dem Auto', parkingTitle: 'AMARA Playa hat keinen privaten Parkplatz', parkingText: 'Infrage kommen öffentliche Parkanlagen im Zentrum oder ein legaler Platz an der Straße. Verfügbarkeit, Zufahrt und Tarife können sich ändern – besonders in vollen Zeiten ist eine zweite Möglichkeit sinnvoll.',
    finalEyebrow: 'Die letzten Minuten', finalTitle: 'Das Ziel ist Calle Castilla Pérez 60', finalSteps: ['Taxi und Transfer können direkt die vollständige Adresse anfahren.', 'Vom Busbahnhof geht es mit dem Taxi oder – mit leichtem Gepäck – zu Fuß weiter.', 'Mit dem Auto ist Ausladen nur dort möglich, wo es die aktuellen Straßenregeln erlauben. Danach braucht der Wagen einen legalen Stellplatz.'],
    closeEyebrow: 'Vor Ort', closeTitle: 'Im Zentrum von Nerja braucht ihr an vielen Tagen kein Auto', closeText: 'Torrecilla liegt etwa 200 Meter entfernt, der Balcón de Europa ungefähr 500 Meter. Ein Auto lohnt sich vor allem dann, wenn Ausflüge außerhalb Nerjas regelmäßig dazugehören.'
  },
  es: {
    heroTitle: 'Cómo llegar a Nerja y a AMARA Playa',
    heroText: 'Para la mayoría de las estancias, el aeropuerto de Málaga es el punto de llegada más sencillo. Desde allí, Alsa ofrece un autobús directo a Nerja, práctico si pensáis moveros sobre todo a pie. Un traslado o coche de alquiler llega hasta la dirección y resulta más útil para excursiones. AMARA Playa está en Calle Castilla Pérez 60, a unos 200 metros de Torrecilla. El autobús para en otro punto del pueblo y el apartamento no incluye aparcamiento privado.',
    optionsEyebrow: 'Desde el aeropuerto de Málaga', optionsTitle: 'Autobús o coche: dos opciones para viajes distintos',
    carEyebrow: 'Traslado o coche de alquiler', carTitle: 'Hasta la puerta, pero sin plaza propia', carText: 'Con equipaje, el traslado es la opción más cómoda. El coche compensa para Maro, Frigiliana y la Axarquía, aunque después de descargar necesita un aparcamiento público o una plaza legal en la calle.',
    busEyebrow: 'Autobús directo de Alsa', busTitle: 'Sencillo para una estancia casi sin coche', busText: 'El autobús conecta el aeropuerto de Málaga con Nerja. Desde la estación, podéis seguir hasta Calle Castilla Pérez 60 en taxi o a pie si el equipaje lo permite.',
    parkingEyebrow: 'Llegada en coche', parkingTitle: 'AMARA Playa no tiene aparcamiento privado', parkingText: 'Las opciones reales son los aparcamientos públicos del centro y las plazas legales en la calle. Disponibilidad, accesos y tarifas pueden cambiar; en fechas concurridas conviene contar con una segunda opción.',
    finalEyebrow: 'Los últimos minutos', finalTitle: 'La dirección es Calle Castilla Pérez 60', finalSteps: ['En taxi o traslado, indicad la dirección completa de AMARA Playa.', 'Desde la estación de autobuses, continuad en taxi o a pie si lleváis poco equipaje.', 'En coche, descargad solo donde lo permitan las normas vigentes y después buscad una plaza legal.'],
    closeEyebrow: 'Una vez aquí', closeTitle: 'Muchos días en el centro de Nerja funcionan bien a pie', closeText: 'Torrecilla está a unos 200 metros y el Balcón de Europa a unos 500. El coche aporta más cuando las excursiones fuera de Nerja forman parte habitual de la estancia.'
  },
  nl: {
    heroTitle: 'Zo reizen jullie naar Nerja en AMARA Playa',
    heroText: 'Voor de meeste verblijven is Málaga Airport het eenvoudigste startpunt. Vanaf daar rijdt Alsa rechtstreeks naar Nerja, handig als jullie ter plaatse vooral willen lopen. Een transfer of huurauto brengt jullie tot het adres en is nuttiger voor uitstapjes in de regio. AMARA Playa ligt aan Calle Castilla Pérez 60, op ongeveer 200 meter van Torrecilla. De bus stopt elders in het dorp en het appartement heeft geen eigen parkeerplaats.',
    optionsEyebrow: 'Vanaf Málaga Airport', optionsTitle: 'Bus of auto: allebei mogelijk, voor een ander soort vakantie',
    carEyebrow: 'Transfer of huurauto', carTitle: 'Tot aan de deur, daarna zonder vaste plek', carText: 'Met bagage is een transfer het gemakkelijkst. Een huurauto is nuttig voor Maro, Frigiliana en de Axarquía, maar heeft na het uitladen een legale openbare of straatplek nodig.',
    busEyebrow: 'Rechtstreekse Alsa-bus', busTitle: 'Eenvoudig voor een verblijf dat grotendeels autovrij is', busText: 'De bus verbindt Málaga Airport met Nerja. Vanaf het busstation gaan jullie per taxi of, met lichte bagage, te voet verder naar Calle Castilla Pérez 60.',
    parkingEyebrow: 'Aankomst met de auto', parkingTitle: 'AMARA Playa heeft geen eigen parkeerplaats', parkingText: 'Openbare parkeervoorzieningen in het centrum en legale straatplekken zijn de reële opties. Beschikbaarheid, toegang en tarieven kunnen veranderen; houd in drukke perioden een tweede mogelijkheid achter de hand.',
    finalEyebrow: 'De laatste minuten', finalTitle: 'Het adres is Calle Castilla Pérez 60', finalSteps: ['Geef bij een taxi of transfer het volledige adres van AMARA Playa op.', 'Vanaf het busstation gaan jullie per taxi of met lichte bagage te voet verder.', 'Laad met de auto alleen uit waar de actuele verkeersregels dat toelaten en parkeer daarna op een legale plek.'],
    closeEyebrow: 'Eenmaal ter plaatse', closeTitle: 'In centraal Nerja kan de auto vaak blijven staan', closeText: 'Torrecilla ligt op ongeveer 200 meter en het Balcón de Europa op ongeveer 500 meter. Een auto is vooral nuttig als uitstapjes buiten Nerja regelmatig op het programma staan.'
  },
  sv: {
    heroTitle: 'Så tar ni er till Nerja och AMARA Playa',
    heroText: 'För de flesta vistelser är Málaga flygplats den enklaste utgångspunkten. Därifrån går Alsa direkt till Nerja, praktiskt om ni främst vill röra er till fots på plats. Transfer eller hyrbil tar er ända till adressen och passar bättre för utflykter. AMARA Playa ligger på Calle Castilla Pérez 60, cirka 200 meter från Torrecilla. Bussen stannar på en annan plats i staden och lägenheten har ingen privat parkering.',
    optionsEyebrow: 'Från Málaga flygplats', optionsTitle: 'Buss eller bil – båda fungerar för olika slags resor',
    carEyebrow: 'Transfer eller hyrbil', carTitle: 'Till dörren, men utan egen parkeringsplats', carText: 'Med bagage är transfer enklast. Hyrbil är användbar för Maro, Frigiliana och Axarquía, men efter avlastning behövs en laglig offentlig plats eller gatuparkering.',
    busEyebrow: 'Direktbuss med Alsa', busTitle: 'Enkelt för en vistelse mestadels utan bil', busText: 'Bussen går mellan Málaga flygplats och Nerja. Från busstationen fortsätter ni med taxi eller till fots om bagaget är lätt till Calle Castilla Pérez 60.',
    parkingEyebrow: 'Ankomst med bil', parkingTitle: 'AMARA Playa har ingen privat parkering', parkingText: 'Offentliga anläggningar i centrum och laglig gatuparkering är de realistiska alternativen. Tillgänglighet, infart och priser kan ändras; under välbesökta perioder är ett reservalternativ klokt.',
    finalEyebrow: 'De sista minuterna', finalTitle: 'Adressen är Calle Castilla Pérez 60', finalSteps: ['Ge taxi eller transfer hela adressen till AMARA Playa.', 'Från busstationen fortsätter ni med taxi eller till fots om bagaget är lätt.', 'Lasta endast ur bilen där aktuella regler tillåter det och parkera sedan på en laglig plats.'],
    closeEyebrow: 'När ni är framme', closeTitle: 'I centrala Nerja klarar ni många dagar utan bil', closeText: 'Torrecilla ligger cirka 200 meter bort och Balcón de Europa cirka 500 meter. Bil är främst användbar när utflykter utanför Nerja återkommer under vistelsen.'
  }
} satisfies Record<AmaraLanguage, Record<string, string | string[]>>;


const text = (row: LocalizedText, lang: AmaraLanguage): string => row[lang] ?? row.en;
const withoutLegacyNumber = (value: string): string => value.replace(/^\d+\s*[·.:–—-]\s*/u, '');

const ui = {
  en: {
    factsTitle: 'The journey at a glance',
    gatewaysEyebrow: 'Start with the gateway',
    gatewaysTitle: 'Where the journey begins',
    optionsEyebrow: 'Choose the onward journey',
    optionsTitle: 'Compare the practical ways to arrive',
    mobilityEyebrow: 'After arrival',
    mobilityTitle: 'How mobility works during the stay',
    journey: 'Journey',
    bestFor: 'Best for',
    consideration: 'Plan for',
    nextStep: 'Continue planning'
  },
  de: {
    factsTitle: 'Die Anreise auf einen Blick',
    gatewaysEyebrow: 'Beim Ausgangspunkt beginnen',
    gatewaysTitle: 'Wo die Reise beginnt',
    optionsEyebrow: 'Die Weiterreise wählen',
    optionsTitle: 'Die praktischen Anreisemöglichkeiten vergleichen',
    mobilityEyebrow: 'Nach der Ankunft',
    mobilityTitle: 'Wie die Mobilität während des Aufenthalts funktioniert',
    journey: 'Fahrt',
    bestFor: 'Geeignet für',
    consideration: 'Zu beachten',
    nextStep: 'Weiter planen'
  },
  es: {
    factsTitle: 'El viaje de un vistazo',
    gatewaysEyebrow: 'Empezad por el punto de llegada',
    gatewaysTitle: 'Dónde comienza el trayecto',
    optionsEyebrow: 'Elegid la continuación del viaje',
    optionsTitle: 'Comparad las formas prácticas de llegar',
    mobilityEyebrow: 'Después de llegar',
    mobilityTitle: 'Cómo funciona la movilidad durante la estancia',
    journey: 'Trayecto',
    bestFor: 'Ideal para',
    consideration: 'A tener en cuenta',
    nextStep: 'Seguir planificando'
  },
  nl: {
    factsTitle: 'De reis in het kort',
    gatewaysEyebrow: 'Begin bij het aankomstpunt',
    gatewaysTitle: 'Waar de reis begint',
    optionsEyebrow: 'Kies de verdere reis',
    optionsTitle: 'Vergelijk de praktische manieren om aan te komen',
    mobilityEyebrow: 'Na aankomst',
    mobilityTitle: 'Hoe mobiliteit tijdens het verblijf werkt',
    journey: 'Reis',
    bestFor: 'Geschikt voor',
    consideration: 'Houd rekening met',
    nextStep: 'Verder plannen'
  },
  sv: {
    factsTitle: 'Resan i korthet',
    gatewaysEyebrow: 'Börja med ankomstpunkten',
    gatewaysTitle: 'Var resan börjar',
    optionsEyebrow: 'Välj den fortsatta resan',
    optionsTitle: 'Jämför de praktiska sätten att komma fram',
    mobilityEyebrow: 'Efter ankomsten',
    mobilityTitle: 'Så fungerar resandet under vistelsen',
    journey: 'Resa',
    bestFor: 'Passar bäst för',
    consideration: 'Tänk på',
    nextStep: 'Fortsätt planera'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

const structureUi = {
  en: {
    routeTitle: 'Plan the journey in three decisions', faqTitle: 'Questions before departure',
    airportQuestion: 'Which airport or gateway is the practical choice?', carQuestion: 'Do you need a car during your stay?', finalLegQuestion: 'Where does public transport end?',
    finalMileEyebrow: 'The final leg', finalMileTitle: 'Continue all the way to the accommodation',
    relatedEyebrow: 'Continue planning', relatedTitle: 'Connect arrival with location and stay', relatedIntro: 'Arrival shapes the first hour; the right location shapes every day after it.',
    locationText: 'Return to the complete destination overview.', areasText: 'Compare the areas that fit the stay you want.'
  },
  de: {
    routeTitle: 'Die Reise in drei Entscheidungen planen', faqTitle: 'Fragen vor der Abreise',
    airportQuestion: 'Welcher Flughafen oder Ausgangspunkt ist praktisch?', carQuestion: 'Braucht ihr während des Aufenthalts ein Auto?', finalLegQuestion: 'Wo endet der öffentliche Verkehr?',
    finalMileEyebrow: 'Die letzte Etappe', finalMileTitle: 'Die Anreise bis zur Unterkunft zu Ende planen',
    relatedEyebrow: 'Weiter planen', relatedTitle: 'Anreise, Lage und Aufenthalt zusammen denken', relatedIntro: 'Die Anreise prägt die erste Stunde; die richtige Lage prägt jeden Tag danach.',
    locationText: 'Zur vollständigen Ortsübersicht zurückkehren.', areasText: 'Die Lagen vergleichen, die zum gewünschten Aufenthalt passen.'
  },
  es: {
    routeTitle: 'Planificad el viaje en tres decisiones', faqTitle: 'Preguntas antes de salir',
    airportQuestion: '¿Qué aeropuerto o punto de llegada resulta más práctico?', carQuestion: '¿Necesitáis coche durante la estancia?', finalLegQuestion: '¿Dónde termina el transporte público?',
    finalMileEyebrow: 'El último tramo', finalMileTitle: 'Planificad el trayecto hasta el alojamiento',
    relatedEyebrow: 'Seguir planificando', relatedTitle: 'Conectad llegada, ubicación y estancia', relatedIntro: 'La llegada define la primera hora; la ubicación adecuada define cada día posterior.',
    locationText: 'Volved a la guía completa del destino.', areasText: 'Comparad las zonas que encajan con la estancia deseada.'
  },
  nl: {
    routeTitle: 'Plan de reis in drie beslissingen', faqTitle: 'Vragen voor vertrek',
    airportQuestion: 'Welke luchthaven of aankomstplek is praktisch?', carQuestion: 'Hebben jullie tijdens het verblijf een auto nodig?', finalLegQuestion: 'Waar eindigt het openbaar vervoer?',
    finalMileEyebrow: 'Het laatste traject', finalMileTitle: 'Plan de reis helemaal tot aan de accommodatie',
    relatedEyebrow: 'Verder plannen', relatedTitle: 'Verbind aankomst, ligging en verblijf', relatedIntro: 'De aankomst bepaalt het eerste uur; de juiste ligging bepaalt elke dag daarna.',
    locationText: 'Ga terug naar het volledige bestemmingsoverzicht.', areasText: 'Vergelijk de gebieden die bij het gewenste verblijf passen.'
  },
  sv: {
    routeTitle: 'Planera resan i tre beslut', faqTitle: 'Frågor före avresan',
    airportQuestion: 'Vilken flygplats eller ankomstpunkt är mest praktisk?', carQuestion: 'Behöver ni bil under vistelsen?', finalLegQuestion: 'Var slutar kollektivtrafiken?',
    finalMileEyebrow: 'Den sista sträckan', finalMileTitle: 'Planera resan hela vägen till boendet',
    relatedEyebrow: 'Fortsätt planera', relatedTitle: 'Koppla samman ankomst, läge och vistelse', relatedIntro: 'Ankomsten formar den första timmen; rätt läge formar varje dag därefter.',
    locationText: 'Gå tillbaka till den fullständiga destinationsguiden.', areasText: 'Jämför områdena som passar vistelsen ni vill ha.'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

const visualUi = {
  en: {
    eyebrow: 'Arrival orientation', airport: 'Closest airport', mainAirport: 'Main airport', distance: 'By road', time: 'Typical drive',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Strait of Gibraltar',
    morocco: 'Morocco', tangier: 'Tangier', strait: 'Strait of Gibraltar', ferry: 'Ferry',
    aria: 'Map-style arrival overview for', coast: 'Coastal connection', coastValue: 'Nerja · 6 km · approx. 10 min',
    setting: 'Setting', frigilianaSetting: 'White village above the Mediterranean',
    beach: 'Nearest beach', beachValue: 'Torrecilla · approx. 200 m', oldTown: 'Old town', oldTownValue: 'Balcón de Europa · approx. 500 m',
    centre: 'Town centre', centreValue: 'Old Town · 10–15 min on foot', arrival: 'At AMARA', arrivalValue: 'Reserved underground parking'
  },
  de: {
    eyebrow: 'Anreise & Orientierung', airport: 'Nächster Flughafen', mainAirport: 'Hauptflughafen', distance: 'Straßendistanz', time: 'Typische Fahrzeit',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straße von Gibraltar',
    morocco: 'Marokko', tangier: 'Tanger', strait: 'Straße von Gibraltar', ferry: 'Fähre',
    aria: 'Kartografische Anreiseübersicht für', coast: 'Verbindung zur Küste', coastValue: 'Nerja · 6 km · ca. 10 Min.',
    setting: 'Lage', frigilianaSetting: 'Weißes Bergdorf über dem Mittelmeer',
    beach: 'Nächster Strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Altstadt', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Ortszentrum', centreValue: 'Altstadt · 10–15 Min. zu Fuß', arrival: 'Bei AMARA', arrivalValue: 'Reservierter Tiefgaragenplatz'
  },
  es: {
    eyebrow: 'Llegada y orientación', airport: 'Aeropuerto más cercano', mainAirport: 'Aeropuerto principal', distance: 'Por carretera', time: 'Tiempo habitual',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Estrecho de Gibraltar',
    morocco: 'Marruecos', tangier: 'Tánger', strait: 'Estrecho de Gibraltar', ferry: 'Ferry',
    aria: 'Resumen cartográfico de llegada a', coast: 'Conexión con la costa', coastValue: 'Nerja · 6 km · aprox. 10 min',
    setting: 'Entorno', frigilianaSetting: 'Pueblo blanco sobre el Mediterráneo',
    beach: 'Playa más cercana', beachValue: 'Torrecilla · aprox. 200 m', oldTown: 'Casco antiguo', oldTownValue: 'Balcón de Europa · aprox. 500 m',
    centre: 'Centro', centreValue: 'Casco antiguo · 10–15 min a pie', arrival: 'En AMARA', arrivalValue: 'Aparcamiento subterráneo reservado'
  },
  nl: {
    eyebrow: 'Aankomst & oriëntatie', airport: 'Dichtstbijzijnde luchthaven', mainAirport: 'Belangrijkste luchthaven', distance: 'Over de weg', time: 'Gebruikelijke rijtijd',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straat van Gibraltar',
    morocco: 'Marokko', tangier: 'Tanger', strait: 'Straat van Gibraltar', ferry: 'Veerboot',
    aria: 'Kaartoverzicht van de reis naar', coast: 'Verbinding met de kust', coastValue: 'Nerja · 6 km · ca. 10 min',
    setting: 'Ligging', frigilianaSetting: 'Wit bergdorp boven de Middellandse Zee',
    beach: 'Dichtstbijzijnde strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Oude centrum', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Centrum', centreValue: 'Oude centrum · 10–15 min lopen', arrival: 'Bij AMARA', arrivalValue: 'Gereserveerde ondergrondse parking'
  },
  sv: {
    eyebrow: 'Ankomst & orientering', airport: 'Närmaste flygplats', mainAirport: 'Huvudflygplats', distance: 'Vägavstånd', time: 'Normal körtid',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Gibraltarsundet',
    morocco: 'Marocko', tangier: 'Tanger', strait: 'Gibraltarsundet', ferry: 'Färja',
    aria: 'Kartöversikt för resan till', coast: 'Förbindelse till kusten', coastValue: 'Nerja · 6 km · ca 10 min',
    setting: 'Läge', frigilianaSetting: 'Vit bergsby ovanför Medelhavet',
    beach: 'Närmaste strand', beachValue: 'Torrecilla · ca 200 m', oldTown: 'Gamla stan', oldTownValue: 'Balcón de Europa · ca 500 m',
    centre: 'Centrum', centreValue: 'Gamla stan · 10–15 min till fots', arrival: 'Vid AMARA', arrivalValue: 'Reserverad underjordisk parkering'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

function arrivalHeroVisual(
  place: ArrivalGuideDestination,
  lang: AmaraLanguage
): ArrivalJourneyGraphicData {
  const labels = visualUi[lang];
  const shared = {
    place,
    eyebrow: labels.eyebrow,
    airportLabel: labels.airport,
    distanceLabel: labels.distance,
    timeLabel: labels.time
  } as const;

  if (place === 'frigiliana') {
    return {
      ...shared,
      destination: 'Frigiliana',
      region: labels.frigilianaRegion,
      primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 66 km', time: '≈ 50 min' },
      context: [
        { label: labels.coast, value: labels.coastValue },
        { label: labels.setting, value: labels.frigilianaSetting }
      ],
      ariaLabel: `${labels.aria} Frigiliana`
    };
  }

  if (place === 'nerja') {
    return {
      ...shared,
      destination: 'Nerja',
      region: labels.nerjaRegion,
      primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 61 km', time: '≈ 50 min' },
      context: [
        { label: labels.beach, value: labels.beachValue },
        { label: labels.oldTown, value: labels.oldTownValue }
      ],
      ariaLabel: `${labels.aria} Nerja`
    };
  }

  return {
    ...shared,
    destination: 'Tarifa',
    region: labels.tarifaRegion,
    airportLabel: labels.mainAirport,
    primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 150 km', time: '≈ 1 h 40' },
    otherAirports: [
      { code: 'GIB', distance: '≈ 50 km', time: '≈ 30 min' },
      { code: 'XRY', distance: '≈ 135 km', time: '≈ 1 h' }
    ],
    mapLabels: {
      morocco: labels.morocco,
      tangier: labels.tangier,
      strait: labels.strait,
      ferry: labels.ferry
    },
    context: [
      { label: labels.centre, value: labels.centreValue },
      { label: labels.arrival, value: labels.arrivalValue }
    ],
    ariaLabel: `${labels.aria} Tarifa`
  };
}

const sectionCard = (
  section: { id: string; eyebrow: string; title: string; paragraphs: readonly string[] },
  icon: LocationGuideIconName
): ArrivalGuideCard => ({
  id: section.id,
  eyebrow: withoutLegacyNumber(section.eyebrow),
  title: section.title,
  summary: section.paragraphs[0] ?? '',
  details: section.paragraphs.slice(1),
  icon
});

function articleAuthor(seo: AmaraAuthoringSeo): ArrivalGuidePageContent['author'] {
  return seo.article
    ? { name: seo.article.authorName, token: 'about' }
    : undefined;
}

function relatedGuides(
  lang: AmaraLanguage,
  locationToken: LinkToken,
  locationLabel: string,
  areasToken: LinkToken,
  areasLabel: string
): ArrivalGuidePageContent['related'] {
  const labels = structureUi[lang];
  return {
    eyebrow: labels.relatedEyebrow,
    title: labels.relatedTitle,
    intro: labels.relatedIntro,
    links: [
      { token: locationToken, label: locationLabel, text: labels.locationText },
      { token: areasToken, label: areasLabel, text: labels.areasText }
    ]
  };
}

function frigilianaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const copy = gettingToFrigilianaCopy;
  const localizedFacts = copy.facts.items.map((fact) => ({
    label: text(fact.label, lang),
    value: text(fact.value, lang),
    description: text(fact.note, lang)
  }));
  const dailyLife = frigilianaDailyLifeContent[lang];
  const dailyMobility = {
    id: 'daily-life-without-a-car',
    eyebrow: dailyLife.sections[0].eyebrow,
    title: dailyLife.sections[0].title,
    paragraphs: [dailyLife.mobilitySummary]
  };
  const localConnection = copy.publicTransport.steps[2];
  const flexibleCar = copy.options.items[0];
  const optionIcons = {
    car: 'rental-car',
    transfer: 'private-transfer',
    bus: 'bus'
  } satisfies Record<'car' | 'transfer' | 'bus', LocationGuideIconName>;

  return {
    destination: 'frigiliana',
    pageId: 'getting-to-frigiliana',
    languageToken: 'getting_to_frigiliana',
    navLabel: text(copy.nav.links[2].label, lang),
    seo: gettingToFrigilianaSeo,
    hero: {
      eyebrow: text(copy.hero.eyebrow, lang),
      title: text(copy.hero.title, lang),
      standfirst: `${text(copy.hero.lead, lang)} ${text(copy.hero.body, lang)}`
    },
    heroVisual: arrivalHeroVisual('frigiliana', lang),
    factsTitle: text(copy.facts.title, lang),
    facts: localizedFacts,
    factIcons: ['airport', 'journey-time', 'bus'],
    gateways: {
      eyebrow: ui[lang].gatewaysEyebrow,
      title: ui[lang].gatewaysTitle,
      items: [{
        id: 'malaga-airport',
        eyebrow: localizedFacts[0].label,
        title: localizedFacts[0].value,
        summary: localizedFacts[0].description,
        details: localizedFacts.slice(1).map((fact) => `${fact.label}: ${fact.value}. ${fact.description}`),
        icon: 'airport'
      }]
    },
    options: {
      eyebrow: text(copy.options.eyebrow, lang),
      title: text(copy.options.title, lang),
      intro: text(copy.options.intro, lang),
      recommendationLabel: text(copy.options.recommendationLabel, lang),
      labels: {
        timing: text(copy.options.labels.timing, lang),
        bestFor: text(copy.options.labels.bestFor, lang),
        consideration: text(copy.options.labels.consideration, lang)
      },
      items: copy.options.items.map((option) => ({
        id: option.id,
        eyebrow: text(option.kicker, lang),
        title: text(option.title, lang),
        summary: text(option.summary, lang),
        details: [],
        icon: optionIcons[option.id],
        timing: text(option.timing, lang),
        bestFor: text(option.bestFor, lang),
        consideration: text(option.consideration, lang)
      }))
    },
    journeySteps: {
      title: text(copy.publicTransport.title, lang),
      steps: copy.publicTransport.steps.map((step) => ({
        num: step.num,
        headline: text(step.title, lang),
        text: text(step.text, lang)
      })),
      faqTitle: text(copy.publicTransport.faqTitle, lang),
      faq: copy.publicTransport.faq.map((item) => ({
        question: text(item.question, lang),
        answer: text(item.answer, lang)
      }))
    },
    mobility: {
      eyebrow: ui[lang].mobilityEyebrow,
      title: ui[lang].mobilityTitle,
      items: [
        sectionCard(dailyMobility, 'walkable'),
        {
          id: 'nerja-connection',
          eyebrow: text(copy.publicTransport.title, lang),
          title: text(localConnection.title, lang),
          summary: text(localConnection.text, lang),
          details: [],
          icon: 'bus'
        },
        {
          id: 'regional-flexibility',
          eyebrow: text(flexibleCar.kicker, lang),
          title: text(flexibleCar.title, lang),
          summary: text(flexibleCar.bestFor, lang),
          details: [text(flexibleCar.consideration, lang)],
          icon: 'rental-car'
        }
      ]
    },
    parking: {
      id: 'parking-strategy',
      eyebrow: text(frigilianaParkingCopy.hero.eyebrow, lang),
      title: text(frigilianaParkingCopy.hero.title, lang),
      summary: text(frigilianaParkingCopy.hero.lead, lang),
      details: [text(frigilianaParkingCopy.hero.body, lang)],
      icon: 'rental-car'
    },
    finalMile: {
      eyebrow: text(copy.reality.eyebrow, lang),
      title: text(copy.reality.title, lang),
      paragraphs: [text(copy.reality.body, lang), text(copy.reality.access, lang), text(copy.reality.climb, lang)],
      image: {
        src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg',
        alt: text(copy.reality.imageAlt, lang)
      },
      links: [
        { token: 'arrival_guide', label: text(copy.reality.bookedCta, lang) }
      ]
    },
    sources: {
      eyebrow: text(copy.sources.eyebrow, lang),
      title: text(copy.sources.title, lang),
      intro: text(copy.sources.intro, lang),
      checked: text(copy.sources.checked, lang),
      links: copy.sources.links.map((source) => ({
        href: gettingToFrigilianaExternalLinks[source.key],
        label: text(source.label, lang),
        text: text(source.text, lang)
      }))
    },
    related: {
      eyebrow: frigilianaPreFooterCopy.eyebrow[lang],
      title: text(copy.related.title, lang),
      intro: frigilianaPreFooterCopy.intro[lang],
      links: copy.related.links.map((link) => ({
        token: link.token,
        label: text(link.label, lang),
        text: getFrigilianaPreFooterDescription(link.token, lang)
      }))
    },
    closing: {
      eyebrow: ui[lang].nextStep,
      title: text(copy.closing.title, lang),
      body: text(copy.closing.lead, lang),
      primary: { token: 'romantic_hideaways', label: text(copy.closing.apartmentsCta, lang) },
      secondary: { token: 'direct_booking_benefits', label: text(copy.closing.directBookingCta, lang) }
    },
    footerHighlights: [
      { token: 'getting_to_frigiliana', label: text(copy.nav.links[2].label, lang) },
      { token: 'frigiliana_parking', label: text(copy.nav.links[1].label, lang) },
      { token: 'romantic_hideaways', label: text(copy.closing.apartmentsCta, lang) }
    ]
  };
}

function nerjaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const content = resolveLocale(gettingToNerjaContent, lang);
  const display = nerjaArrivalUi[lang];

  return {
    destination: 'nerja',
    pageId: 'getting-to-nerja',
    languageToken: 'getting_to_nerja',
    navLabel: content.navLabel,
    seo: gettingToNerjaSeo,
    hero: {
      eyebrow: content.navLabel,
      title: display.heroTitle as string,
      standfirst: display.heroText as string,
      updated: content.hero.updated
    },
    heroVisual: arrivalHeroVisual('nerja', lang),
    author: articleAuthor(gettingToNerjaSeo),
    factsTitle: ui[lang].factsTitle,
    facts: content.facts,
    factIcons: ['village', 'coast', 'distance', 'rental-car'],
    options: {
      eyebrow: display.optionsEyebrow as string,
      title: display.optionsTitle as string,
      labels: {
        timing: ui[lang].journey,
        bestFor: ui[lang].bestFor,
        consideration: ui[lang].consideration
      },
      items: [
        { id: 'by-car', eyebrow: display.carEyebrow as string, title: display.carTitle as string, summary: display.carText as string, details: [], icon: 'rental-car' },
        { id: 'by-bus', eyebrow: display.busEyebrow as string, title: display.busTitle as string, summary: display.busText as string, details: [], icon: 'bus' }
      ]
    },
    parking: { id: 'parking', eyebrow: display.parkingEyebrow as string, title: display.parkingTitle as string, summary: display.parkingText as string, details: [], icon: 'rental-car' },
    finalMile: {
      eyebrow: display.finalEyebrow as string,
      title: display.finalTitle as string,
      paragraphs: [],
      steps: display.finalSteps as string[],
      stepIcons: ['taxi', 'rental-car', 'walkable']
    },
    sources: content.sources,
    closing: {
      eyebrow: display.closeEyebrow as string,
      title: display.closeTitle as string,
      body: display.closeText as string,
      primary: { token: 'location_nerja', label: content.closing.locationLabel },
      secondary: { token: 'nerja_where_to_stay', label: content.closing.areasLabel }
    },
    footerHighlights: [
      { token: 'getting_to_nerja', label: content.navLabel },
      { token: 'location_nerja', label: 'Nerja' },
      { token: 'nerja_where_to_stay', label: content.closing.areasLabel }
    ]
  };
}

function tarifaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const content = resolveLocale(gettingToTarifaContent, lang);
  /** Look sections up by id: the page slots are fixed, the authoring order is not. */
  const section = (id: string) => {
    const match = content.sections.find((entry) => entry.id === id);
    if (!match) {
      throw new Error(`[Tarifa arrival guide] Missing authored section "${id}".`);
    }
    return match;
  };
  const car = section('by-car');
  const bus = section('by-bus');
  const airports = section('airports');
  const port = section('port');
  const withoutCar = section('without-car');
  const westernCoast = section('western-coast');
  const parking = section('parking-mobility');

  return {
    destination: 'tarifa',
    pageId: 'getting-to-tarifa',
    languageToken: 'getting_to_tarifa',
    navLabel: content.navLabel,
    seo: gettingToTarifaSeo,
    hero: content.hero,
    heroVisual: arrivalHeroVisual('tarifa', lang),
    author: articleAuthor(gettingToTarifaSeo),
    factsTitle: ui[lang].factsTitle,
    facts: content.facts,
    factIcons: ['village', 'municipality', 'rental-car', 'supermarket'],
    gateways: {
      eyebrow: ui[lang].gatewaysEyebrow,
      title: ui[lang].gatewaysTitle,
      items: [sectionCard(airports, 'airport'), sectionCard(port, 'coast')]
    },
    options: {
      eyebrow: ui[lang].optionsEyebrow,
      title: ui[lang].optionsTitle,
      labels: {
        timing: ui[lang].journey,
        bestFor: ui[lang].bestFor,
        consideration: ui[lang].consideration
      },
      items: [sectionCard(car, 'rental-car'), sectionCard(bus, 'bus')]
    },
    journeySteps: {
      title: structureUi[lang].routeTitle,
      steps: [
        { num: '01', headline: airports.title, text: airports.paragraphs[0] },
        { num: '02', headline: ui[lang].optionsTitle, text: `${car.paragraphs[0]} ${bus.paragraphs[0]}` },
        { num: '03', headline: structureUi[lang].finalMileTitle, text: bus.paragraphs[2] }
      ],
      faqTitle: structureUi[lang].faqTitle,
      faq: [
        { question: structureUi[lang].airportQuestion, answer: airports.paragraphs[0] },
        { question: structureUi[lang].carQuestion, answer: withoutCar.paragraphs[0] },
        { question: structureUi[lang].finalLegQuestion, answer: bus.paragraphs[1] }
      ]
    },
    mobility: {
      eyebrow: ui[lang].mobilityEyebrow,
      title: ui[lang].mobilityTitle,
      items: [sectionCard(withoutCar, 'walkable'), sectionCard(westernCoast, 'coast')]
    },
    parking: sectionCard(parking, 'rental-car'),
    finalMile: {
      eyebrow: structureUi[lang].finalMileEyebrow,
      title: structureUi[lang].finalMileTitle,
      paragraphs: [bus.paragraphs[2]],
      steps: [car.paragraphs[2], bus.paragraphs[1], port.paragraphs[1]],
      stepIcons: ['rental-car', 'taxi', 'coast']
    },
    related: relatedGuides(
      lang,
      'location_tarifa',
      content.closing.locationLabel,
      'tarifa_where_to_stay',
      content.closing.areasLabel
    ),
    sources: content.sources,
    closing: {
      eyebrow: content.closing.eyebrow,
      title: content.closing.title,
      body: content.closing.body,
      primary: { token: 'location_tarifa', label: content.closing.locationLabel },
      secondary: { token: 'tarifa_where_to_stay', label: content.closing.areasLabel }
    },
    footerHighlights: [
      { token: 'getting_to_tarifa', label: content.navLabel },
      { token: 'location_tarifa', label: 'Tarifa' },
      { token: 'tarifa_where_to_stay', label: content.closing.areasLabel }
    ]
  };
}

export function getArrivalGuideContent(
  destination: ArrivalGuideDestination,
  lang: AmaraLanguage
): ArrivalGuidePageContent {
  if (destination === 'frigiliana') return frigilianaGuide(lang);
  if (destination === 'nerja') return nerjaGuide(lang);
  return tarifaGuide(lang);
}
