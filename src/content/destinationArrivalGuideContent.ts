import { resolveLocale } from '../types/content';
import type { LocalizedText } from '../types/content';
import type { ImageMetadata } from 'astro';
import type { ArrivalJourneyGraphicData } from '../components/location/ArrivalJourneyGraphic.astro';
import type { LocationGuideIconName } from '../components/location/locationGuideIconContract';
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
    heroText: 'Aena lists a direct Alsa coach from Málaga Airport to Nerja — the simplest arrival if you plan to be on foot once you are here. It ends at the bus station, not at our door; with suitcases, take a taxi from there. A transfer or rental car brings you to the address itself: Calle Castilla Pérez 60, about 200 metres from Torrecilla beach. There is no private parking, so you park in a public facility or legally on the street. One more thing worth knowing in advance: before the lift there are five steps outside the building and five more inside.',
    optionsEyebrow: 'From Málaga Airport', optionsTitle: 'The coach goes direct, the car goes further',
    carEyebrow: 'Transfer or rental car', carTitle: 'To the door — and then a parking space', carText: 'With luggage a transfer is the easiest. A rental car earns its place for Maro, Frigiliana and the wider Axarquía, but after unloading it needs a legal public or street space. For one or two day trips, a car hired for those days is often enough.',
    busEyebrow: 'Direct Alsa coach', busTitle: 'Simple if you are staying in Nerja', busText: 'Aena confirms the direct connection between Málaga Airport and Nerja. It ends at the bus station, not at Calle Castilla Pérez 60 — walk it if the luggage is light, otherwise take a taxi.',
    parkingEyebrow: 'Arriving by car', parkingTitle: 'There is no private parking at AMARA Playa', parkingText: 'For the centre, Balcón de Europa and Parque Verano Azul are the obvious facilities, plus legal street parking nearby. None of it can be reserved. Choose the area before you drive into the tightest streets; the parking guide explains which one suits which destination.',
    finalEyebrow: 'The last few minutes', finalTitle: 'The destination is Calle Castilla Pérez 60', finalSteps: ['Taxis and transfers can drive to the full address directly.', 'From the bus station, continue by taxi — or on foot if the luggage allows it.', 'By car, unload only where the signs permit, then move the car to a legal space.'],
    closeEyebrow: 'Once you are here', closeTitle: 'In the centre you will not need a car most days', closeText: 'Torrecilla is about 200 metres away and the Balcón de Europa about 500. A car earns its place for Maro, Frigiliana or the wider Axarquía — one or two rental days often cover that.'
  },
  de: {
    heroTitle: 'Anreise nach Nerja und zu AMARA Playa',
    heroText: 'Aena führt eine direkte Alsa-Busverbindung vom Flughafen Málaga nach Nerja — die einfachste Anreise, wenn ihr vor Ort zu Fuß unterwegs sein wollt. Sie endet am Busbahnhof, nicht an unserer Tür; mit Koffern nehmt ihr von dort ein Taxi. Ein Transfer oder Mietwagen bringt euch bis zur Adresse: Calle Castilla Pérez 60, rund 200 Meter vom Strand Torrecilla. Einen privaten Parkplatz gibt es nicht, ihr parkt also in einer öffentlichen Anlage oder legal an der Straße. Und etwas, das ihr vorher wissen solltet: Vor dem Aufzug liegen fünf Stufen vor dem Gebäude und fünf weitere im Haus.',
    optionsEyebrow: 'Ab Flughafen Málaga', optionsTitle: 'Der Bus fährt direkt, das Auto fährt weiter',
    carEyebrow: 'Transfer oder Mietwagen', carTitle: 'Bis vor die Tür — und dann ein Stellplatz', carText: 'Mit Gepäck ist der Transfer am bequemsten. Ein Mietwagen lohnt sich für Maro, Frigiliana und die weitere Axarquía, braucht nach dem Ausladen aber einen legalen öffentlichen oder Straßenplatz. Für ein oder zwei Ausflugstage genügt oft ein Mietwagen auf Zeit.',
    busEyebrow: 'Direkter Alsa-Bus', busTitle: 'Einfach, wenn ihr in Nerja bleibt', busText: 'Aena bestätigt die Direktverbindung zwischen dem Flughafen Málaga und Nerja. Sie endet am Busbahnhof, nicht in der Calle Castilla Pérez 60 — mit leichtem Gepäck lauft ihr, sonst nehmt ihr ein Taxi.',
    parkingEyebrow: 'Anreise mit dem Auto', parkingTitle: 'AMARA Playa hat keinen privaten Parkplatz', parkingText: 'Fürs Zentrum sind Balcón de Europa und Parque Verano Azul die naheliegenden Anlagen, dazu legales Straßenparken in der Nähe. Reservieren lässt sich davon nichts. Wählt den Bereich, bevor ihr in die engsten Straßen fahrt; der Park-Guide erklärt, welcher wofür passt.',
    finalEyebrow: 'Die letzten Minuten', finalTitle: 'Das Ziel ist Calle Castilla Pérez 60', finalSteps: ['Taxi und Transfer fahren die vollständige Adresse direkt an.', 'Vom Busbahnhof geht es mit dem Taxi weiter — oder zu Fuß, wenn das Gepäck es zulässt.', 'Mit dem Auto ladet ihr nur dort aus, wo die Schilder es erlauben, und stellt den Wagen danach legal ab.'],
    closeEyebrow: 'Vor Ort', closeTitle: 'Im Zentrum braucht ihr an den meisten Tagen kein Auto', closeText: 'Torrecilla liegt rund 200 Meter entfernt, der Balcón de Europa etwa 500. Für Maro, Frigiliana oder die weitere Axarquía lohnt sich ein Auto — dafür reichen oft ein oder zwei Miettage.'
  },
  es: {
    heroTitle: 'Cómo llegar a Nerja y a AMARA Playa',
    heroText: 'Aena indica un autobús directo de Alsa entre el aeropuerto de Málaga y Nerja: la llegada más sencilla si pensáis moveros a pie una vez aquí. Termina en la estación de autobuses, no en nuestra puerta; con maletas, coged un taxi desde allí. Un traslado o un coche de alquiler os deja en la dirección: Calle Castilla Pérez 60, a unos 200 metros de la playa de Torrecilla. No hay plaza privada, así que se aparca en un aparcamiento público o legalmente en la calle. Y algo que conviene saber antes: delante del ascensor hay cinco escalones fuera del edificio y otros cinco dentro.',
    optionsEyebrow: 'Desde el aeropuerto de Málaga', optionsTitle: 'El autobús va directo; el coche llega más lejos',
    carEyebrow: 'Traslado o coche de alquiler', carTitle: 'Hasta la puerta y luego una plaza', carText: 'Con equipaje, el traslado es lo más cómodo. El coche de alquiler compensa para Maro, Frigiliana y el resto de la Axarquía, pero tras descargar necesita una plaza pública o legal en la calle. Para una o dos excursiones suele bastar alquilarlo solo esos días.',
    busEyebrow: 'Autobús directo de Alsa', busTitle: 'Sencillo si os quedáis en Nerja', busText: 'Aena confirma la conexión directa entre el aeropuerto de Málaga y Nerja. Termina en la estación de autobuses, no en la Calle Castilla Pérez 60: caminad si el equipaje es ligero y, si no, coged un taxi.',
    parkingEyebrow: 'Llegar en coche', parkingTitle: 'AMARA Playa no tiene aparcamiento privado', parkingText: 'Para el centro, Balcón de Europa y Parque Verano Azul son los aparcamientos evidentes, además de aparcar legalmente en la calle cerca. Nada de eso se reserva. Elegid la zona antes de entrar en las calles más estrechas; la guía de aparcamiento explica cuál sirve para cada destino.',
    finalEyebrow: 'Los últimos minutos', finalTitle: 'El destino es Calle Castilla Pérez 60', finalSteps: ['Taxis y traslados pueden ir directamente a la dirección completa.', 'Desde la estación de autobuses, seguid en taxi o a pie si el equipaje lo permite.', 'En coche, descargad solo donde lo permitan las señales y luego llevad el coche a una plaza legal.'],
    closeEyebrow: 'Ya en Nerja', closeTitle: 'En el centro no necesitaréis coche la mayoría de los días', closeText: 'Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500. El coche compensa para Maro, Frigiliana o el resto de la Axarquía, y para eso suelen bastar uno o dos días de alquiler.'
  },
  nl: {
    heroTitle: 'Naar Nerja en AMARA Playa',
    heroText: 'Aena vermeldt een directe Alsa-bus van Málaga Airport naar Nerja — de eenvoudigste aankomst als jullie hier vooral te voet willen zijn. Hij eindigt bij het busstation, niet bij onze deur; met koffers neem je daar een taxi. Een transfer of huurauto brengt jullie tot het adres zelf: Calle Castilla Pérez 60, ongeveer 200 meter van het Torrecilla-strand. Een eigen parkeerplaats is er niet, dus je parkeert in een openbare garage of legaal op straat. En nog iets om vooraf te weten: vóór de lift liggen vijf treden buiten het gebouw en nog vijf binnen.',
    optionsEyebrow: 'Vanaf Málaga Airport', optionsTitle: 'De bus rijdt direct, de auto rijdt verder',
    carEyebrow: 'Transfer of huurauto', carTitle: 'Tot de deur — en dan een plek', carText: 'Met bagage is een transfer het makkelijkst. Een huurauto verdient zich terug voor Maro, Frigiliana en de bredere Axarquía, maar heeft na het uitladen een legale openbare of straatplek nodig. Voor één of twee uitstapjes volstaat vaak een auto voor alleen die dagen.',
    busEyebrow: 'Directe Alsa-bus', busTitle: 'Eenvoudig als jullie in Nerja blijven', busText: 'Aena bevestigt de directe verbinding tussen Málaga Airport en Nerja. Hij eindigt bij het busstation, niet aan de Calle Castilla Pérez 60 — loop het als de bagage licht is, neem anders een taxi.',
    parkingEyebrow: 'Aankomst met de auto', parkingTitle: 'AMARA Playa heeft geen eigen parkeerplaats', parkingText: 'Voor het centrum zijn Balcón de Europa en Parque Verano Azul de voor de hand liggende parkings, plus legaal straatparkeren in de buurt. Reserveren kan niet. Kies het gebied voordat je de smalste straten in rijdt; de parkeergids legt uit welke waarvoor past.',
    finalEyebrow: 'De laatste minuten', finalTitle: 'De bestemming is Calle Castilla Pérez 60', finalSteps: ['Taxi en transfer kunnen rechtstreeks naar het volledige adres rijden.', 'Vanaf het busstation ga je verder met de taxi — of te voet als de bagage het toelaat.', 'Met de auto laad je alleen uit waar de borden dat toestaan en zet je hem daarna op een legale plek.'],
    closeEyebrow: 'Als je er bent', closeTitle: 'In het centrum heb je de meeste dagen geen auto nodig', closeText: 'Torrecilla ligt op ongeveer 200 meter en het Balcón de Europa op zo\'n 500. Een auto verdient zich terug voor Maro, Frigiliana of de bredere Axarquía — daarvoor volstaan vaak één of twee huurdagen.'
  },
  sv: {
    heroTitle: 'Resa till Nerja och AMARA Playa',
    heroText: 'Aena anger en direktbuss med Alsa från Málaga flygplats till Nerja — den enklaste ankomsten om ni tänker röra er till fots väl på plats. Den slutar vid busstationen, inte vid vår dörr; med resväskor tar ni taxi därifrån. En transfer eller hyrbil tar er ända till adressen: Calle Castilla Pérez 60, cirka 200 meter från Torrecillastranden. Det finns ingen egen parkering, så ni parkerar i ett allmänt garage eller lagligt på gatan. Och en sak värd att veta i förväg: före hissen finns fem trappsteg utanför huset och fem till inne i huset.',
    optionsEyebrow: 'Från Málaga flygplats', optionsTitle: 'Bussen går direkt, bilen går längre',
    carEyebrow: 'Transfer eller hyrbil', carTitle: 'Ända fram till dörren — sedan en plats', carText: 'Med bagage är transfern enklast. En hyrbil är värd det för Maro, Frigiliana och övriga Axarquía, men behöver efter avlastning en laglig allmän plats eller gatuplats. För en eller två utflyktsdagar räcker det ofta att hyra bil just de dagarna.',
    busEyebrow: 'Direktbuss med Alsa', busTitle: 'Enkelt om ni stannar i Nerja', busText: 'Aena bekräftar direktförbindelsen mellan Málaga flygplats och Nerja. Den slutar vid busstationen, inte på Calle Castilla Pérez 60 — gå om bagaget är lätt, ta annars taxi.',
    parkingEyebrow: 'Ankomst med bil', parkingTitle: 'AMARA Playa har ingen egen parkering', parkingText: 'För centrum är Balcón de Europa och Parque Verano Azul de självklara anläggningarna, plus laglig gatuparkering i närheten. Inget av det går att boka. Välj område innan ni kör in på de trängsta gatorna; parkeringsguiden förklarar vilket som passar vilket mål.',
    finalEyebrow: 'De sista minuterna', finalTitle: 'Målet är Calle Castilla Pérez 60', finalSteps: ['Taxi och transfer kan köra direkt till den fullständiga adressen.', 'Från busstationen fortsätter ni med taxi — eller till fots om bagaget tillåter.', 'Med bil lastar ni av bara där skyltarna tillåter och ställer sedan bilen på en laglig plats.'],
    closeEyebrow: 'Väl på plats', closeTitle: 'I centrum behöver ni ingen bil de flesta dagar', closeText: 'Torrecilla ligger cirka 200 meter bort och Balcón de Europa omkring 500. En bil är värd det för Maro, Frigiliana eller övriga Axarquía — ofta räcker en eller två hyrdagar.'
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
    carRental: 'Car · rental car', bus: 'Bus · via Nerja', transfer: 'Change',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Strait of Gibraltar',
    morocco: 'Morocco', tangier: 'Tangier', strait: 'Strait of Gibraltar', ferry: 'Ferry',
    aria: 'Map-style arrival overview for', frigilianaAria: 'Map-style arrival overview from Málaga Airport to Frigiliana and AMARA: the car or rental-car route runs directly, while the bus journey changes in Nerja and continues to Frigiliana.', coast: 'Coastal connection', coastValue: 'Nerja · 6 km · approx. 10 min',
    setting: 'Setting', frigilianaSetting: 'White village above the Mediterranean',
    beach: 'Nearest beach', beachValue: 'Torrecilla · approx. 200 m', oldTown: 'Old town', oldTownValue: 'Balcón de Europa · approx. 500 m',
    centre: 'Town centre', centreValue: 'Old Town · 10–15 min on foot', arrival: 'At AMARA', arrivalValue: 'Reserved underground parking'
  },
  de: {
    eyebrow: 'Anreise & Orientierung', airport: 'Nächster Flughafen', mainAirport: 'Hauptflughafen', distance: 'Straßendistanz', time: 'Typische Fahrzeit',
    carRental: 'Auto · Mietwagen', bus: 'Bus · über Nerja', transfer: 'Umstieg',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straße von Gibraltar',
    morocco: 'Marokko', tangier: 'Tanger', strait: 'Straße von Gibraltar', ferry: 'Fähre',
    aria: 'Kartografische Anreiseübersicht für', frigilianaAria: 'Kartografische Anreiseübersicht vom Flughafen Málaga nach Frigiliana und zu AMARA: Auto und Mietwagen fahren direkt; die Busreise führt mit Umstieg in Nerja weiter nach Frigiliana.', coast: 'Verbindung zur Küste', coastValue: 'Nerja · 6 km · ca. 10 Min.',
    setting: 'Lage', frigilianaSetting: 'Weißes Bergdorf über dem Mittelmeer',
    beach: 'Nächster Strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Altstadt', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Ortszentrum', centreValue: 'Altstadt · 10–15 Min. zu Fuß', arrival: 'Bei AMARA', arrivalValue: 'Reservierter Tiefgaragenplatz'
  },
  es: {
    eyebrow: 'Llegada y orientación', airport: 'Aeropuerto más cercano', mainAirport: 'Aeropuerto principal', distance: 'Por carretera', time: 'Tiempo habitual',
    carRental: 'Coche · alquiler', bus: 'Autobús · vía Nerja', transfer: 'Cambio',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Estrecho de Gibraltar',
    morocco: 'Marruecos', tangier: 'Tánger', strait: 'Estrecho de Gibraltar', ferry: 'Ferry',
    aria: 'Resumen cartográfico de llegada a', frigilianaAria: 'Resumen cartográfico del viaje desde el aeropuerto de Málaga hasta Frigiliana y AMARA: el coche o coche de alquiler continúa directamente; el autobús requiere un cambio en Nerja antes de seguir a Frigiliana.', coast: 'Conexión con la costa', coastValue: 'Nerja · 6 km · aprox. 10 min',
    setting: 'Entorno', frigilianaSetting: 'Pueblo blanco sobre el Mediterráneo',
    beach: 'Playa más cercana', beachValue: 'Torrecilla · aprox. 200 m', oldTown: 'Casco antiguo', oldTownValue: 'Balcón de Europa · aprox. 500 m',
    centre: 'Centro', centreValue: 'Casco antiguo · 10–15 min a pie', arrival: 'En AMARA', arrivalValue: 'Aparcamiento subterráneo reservado'
  },
  nl: {
    eyebrow: 'Aankomst & oriëntatie', airport: 'Dichtstbijzijnde luchthaven', mainAirport: 'Belangrijkste luchthaven', distance: 'Over de weg', time: 'Gebruikelijke rijtijd',
    carRental: 'Auto · huurauto', bus: 'Bus · via Nerja', transfer: 'Overstap',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straat van Gibraltar',
    morocco: 'Marokko', tangier: 'Tanger', strait: 'Straat van Gibraltar', ferry: 'Veerboot',
    aria: 'Kaartoverzicht van de reis naar', frigilianaAria: 'Kaartoverzicht van de reis van Málaga Airport naar Frigiliana en AMARA: de auto of huurauto rijdt rechtstreeks; voor de busreis stappen jullie in Nerja over en reizen daarna verder naar Frigiliana.', coast: 'Verbinding met de kust', coastValue: 'Nerja · 6 km · ca. 10 min',
    setting: 'Ligging', frigilianaSetting: 'Wit bergdorp boven de Middellandse Zee',
    beach: 'Dichtstbijzijnde strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Oude centrum', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Centrum', centreValue: 'Oude centrum · 10–15 min lopen', arrival: 'Bij AMARA', arrivalValue: 'Gereserveerde ondergrondse parking'
  },
  sv: {
    eyebrow: 'Ankomst & orientering', airport: 'Närmaste flygplats', mainAirport: 'Huvudflygplats', distance: 'Vägavstånd', time: 'Normal körtid',
    carRental: 'Bil · hyrbil', bus: 'Buss · via Nerja', transfer: 'Byte',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Gibraltarsundet',
    morocco: 'Marocko', tangier: 'Tanger', strait: 'Gibraltarsundet', ferry: 'Färja',
    aria: 'Kartöversikt för resan till', frigilianaAria: 'Kartöversikt från Málaga flygplats till Frigiliana och AMARA: bil eller hyrbil kör direkt; bussresan kräver byte i Nerja och fortsätter sedan till Frigiliana.', coast: 'Förbindelse till kusten', coastValue: 'Nerja · 6 km · ca 10 min',
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
      routeLabels: {
        carRental: labels.carRental,
        bus: labels.bus,
        transfer: labels.transfer
      },
      context: [
        { label: labels.coast, value: labels.coastValue },
        { label: labels.setting, value: labels.frigilianaSetting }
      ],
      ariaLabel: labels.frigilianaAria
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
