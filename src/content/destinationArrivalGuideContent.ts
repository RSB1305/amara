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
  /** Optional external action shown as a link under the card (e.g. a live charging-point map). */
  link?: { href: string; label: string; external?: boolean };
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
    heroText: 'An Alsa bus runs directly from Málaga airport to Nerja; it ends at the bus station, from where you continue by taxi or on foot. Transfer and rental car bring you to Calle Castilla Pérez 60, around 200 metres from Torrecilla beach. You park a few streets away, and before the lift there are ten steps: five outside the house, five inside.',
    optionsEyebrow: 'From Málaga Airport', optionsTitle: 'The coach goes direct, the car goes further',
    carEyebrow: 'Transfer or rental car', carTitle: 'To the door — and then a parking space', carText: 'With luggage the transfer is most comfortable. A rental car is worth it for Maro, Frigiliana and the Axarquía; for one or two day trips a car hired for those days is enough. Electric car: the map shows the nearest charging points.',
    busEyebrow: 'Direct Alsa coach', busTitle: 'Simple if you are staying in Nerja', busText: 'The direct bus from Málaga airport ends at the bus station at the top of Nerja; from there a quarter of an hour downhill on foot or five minutes by taxi.',
    parkingEyebrow: 'Arriving by car', parkingTitle: 'Parking a few streets away', parkingText: 'For the centre, the Balcón de Europa and Parque Verano Azul car parks are the nearest, plus street spaces nearby. The parking guide shows which area suits what.',
    finalEyebrow: 'The last few minutes', finalTitle: 'The destination is Calle Castilla Pérez 60', finalSteps: ['Taxis and transfers can drive to the full address directly.', 'From the bus station, continue by taxi — or on foot if the luggage allows it.', 'By car you unload at the door and then park a few streets away.'],
    closeEyebrow: 'Once you are here', closeTitle: 'In the centre the car stays parked', closeText: 'Torrecilla is about 200 metres away and the Balcón de Europa about 500. A car earns its place for Maro, Frigiliana or the wider Axarquía — one or two rental days often cover that.'
  },
  de: {
    heroTitle: 'Anreise nach Nerja und zu AMARA Playa',
    heroText: 'Vom Flughafen Málaga fährt ein Alsa-Bus direkt nach Nerja; er endet am Busbahnhof, von dort geht es mit dem Taxi oder zu Fuß weiter. Transfer und Mietwagen bringen euch bis zur Calle Castilla Pérez 60, rund 200 Meter vom Strand Torrecilla. Geparkt wird ein paar Straßen weiter, und vor dem Aufzug liegen zehn Stufen: fünf vor dem Haus, fünf drinnen.',
    optionsEyebrow: 'Ab Flughafen Málaga', optionsTitle: 'Der Bus fährt direkt, das Auto fährt weiter',
    carEyebrow: 'Transfer oder Mietwagen', carTitle: 'Bis vor die Tür — und dann ein Stellplatz', carText: 'Mit Gepäck ist der Transfer am bequemsten. Ein Mietwagen lohnt sich für Maro, Frigiliana und die Axarquía; für ein oder zwei Ausflugstage reicht ein Mietwagen auf Zeit. Mit Elektroauto: Die Karte zeigt die nächsten Ladepunkte.',
    busEyebrow: 'Direkter Alsa-Bus', busTitle: 'Einfach, wenn ihr in Nerja bleibt', busText: 'Der Direktbus vom Flughafen Málaga endet am Busbahnhof oben in Nerja; von dort eine Viertelstunde bergab zu Fuß oder fünf Minuten mit dem Taxi.',
    parkingEyebrow: 'Anreise mit dem Auto', parkingTitle: 'Parken ein paar Straßen weiter', parkingText: 'Fürs Zentrum sind die Parkhäuser Balcón de Europa und Parque Verano Azul die nächsten, dazu Straßenplätze in der Nähe. Der Park-Guide zeigt, welcher Bereich wofür passt.',
    finalEyebrow: 'Die letzten Minuten', finalTitle: 'Das Ziel ist Calle Castilla Pérez 60', finalSteps: ['Taxi und Transfer fahren die vollständige Adresse direkt an.', 'Vom Busbahnhof geht es mit dem Taxi weiter — oder zu Fuß, wenn das Gepäck es zulässt.', 'Mit dem Auto ladet ihr vor der Tür aus und parkt danach ein paar Straßen weiter.'],
    closeEyebrow: 'Vor Ort', closeTitle: 'Im Zentrum bleibt das Auto stehen', closeText: 'Torrecilla liegt rund 200 Meter entfernt, der Balcón de Europa etwa 500. Für Maro, Frigiliana oder die weitere Axarquía lohnt sich ein Auto — dafür reichen oft ein oder zwei Miettage.'
  },
  es: {
    heroTitle: 'Cómo llegar a Nerja y a AMARA Playa',
    heroText: 'Desde el aeropuerto de Málaga un autobús de Alsa va directo a Nerja; termina en la estación, desde donde se sigue en taxi o a pie. El traslado y el coche de alquiler os llevan hasta la calle Castilla Pérez 60, a unos 200 metros de la playa de Torrecilla. Se aparca unas calles más allá, y antes del ascensor hay diez escalones: cinco fuera de la casa, cinco dentro.',
    optionsEyebrow: 'Desde el aeropuerto de Málaga', optionsTitle: 'El autobús va directo; el coche llega más lejos',
    carEyebrow: 'Traslado o coche de alquiler', carTitle: 'Hasta la puerta y luego una plaza', carText: 'Con equipaje el traslado es lo más cómodo. El coche de alquiler merece la pena para Maro, Frigiliana y la Axarquía; para una o dos excursiones basta con alquilarlo esos días. Con coche eléctrico: el mapa muestra los puntos de recarga más cercanos.',
    busEyebrow: 'Autobús directo de Alsa', busTitle: 'Sencillo si os quedáis en Nerja', busText: 'El autobús directo desde el aeropuerto de Málaga termina en la estación, en la parte alta de Nerja; desde allí un cuarto de hora cuesta abajo a pie o cinco minutos en taxi.',
    parkingEyebrow: 'Llegar en coche', parkingTitle: 'Aparcar unas calles más allá', parkingText: 'Para el centro, los parkings Balcón de Europa y Parque Verano Azul son los más cercanos, además de plazas en la calle. La guía de aparcamiento explica qué zona sirve para qué.',
    finalEyebrow: 'Los últimos minutos', finalTitle: 'El destino es Calle Castilla Pérez 60', finalSteps: ['Taxis y traslados pueden ir directamente a la dirección completa.', 'Desde la estación de autobuses, seguid en taxi o a pie si el equipaje lo permite.', 'En coche descargáis en la puerta y luego aparcáis unas calles más allá.'],
    closeEyebrow: 'Ya en Nerja', closeTitle: 'En el centro el coche se queda aparcado', closeText: 'Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500. El coche compensa para Maro, Frigiliana o el resto de la Axarquía, y para eso suelen bastar uno o dos días de alquiler.'
  },
  nl: {
    heroTitle: 'Naar Nerja en AMARA Playa',
    heroText: 'Vanaf de luchthaven Málaga rijdt een Alsa-bus rechtstreeks naar Nerja; hij eindigt bij het busstation, van daar ga je verder met de taxi of te voet. Transfer en huurauto brengen jullie tot Calle Castilla Pérez 60, ongeveer 200 meter van het strand Torrecilla. Geparkeerd wordt een paar straten verder, en voor de lift zijn er tien treden: vijf buiten, vijf binnen.',
    optionsEyebrow: 'Vanaf Málaga Airport', optionsTitle: 'De bus rijdt direct, de auto rijdt verder',
    carEyebrow: 'Transfer of huurauto', carTitle: 'Tot de deur — en dan een plek', carText: 'Met bagage is de transfer het comfortabelst. Een huurauto loont voor Maro, Frigiliana en de Axarquía; voor een of twee uitjes volstaat een huurauto voor die dagen. Met een elektrische auto: de kaart toont de dichtstbijzijnde laadpunten.',
    busEyebrow: 'Directe Alsa-bus', busTitle: 'Eenvoudig als jullie in Nerja blijven', busText: 'De directe bus vanaf de luchthaven Málaga eindigt bij het busstation boven in Nerja; van daar een kwartier naar beneden te voet of vijf minuten met de taxi.',
    parkingEyebrow: 'Aankomst met de auto', parkingTitle: 'Parkeren een paar straten verder', parkingText: 'Voor het centrum zijn de parkeergarages Balcón de Europa en Parque Verano Azul de dichtstbijzijnde, plus straatplekken in de buurt. De parkeergids toont welk gebied waarvoor past.',
    finalEyebrow: 'De laatste minuten', finalTitle: 'De bestemming is Calle Castilla Pérez 60', finalSteps: ['Taxi en transfer kunnen rechtstreeks naar het volledige adres rijden.', 'Vanaf het busstation ga je verder met de taxi — of te voet als de bagage het toelaat.', 'Met de auto laad je voor de deur uit en parkeer je daarna een paar straten verder.'],
    closeEyebrow: 'Als je er bent', closeTitle: 'In het centrum blijft de auto staan', closeText: 'Torrecilla ligt op ongeveer 200 meter en het Balcón de Europa op zo\'n 500. Een auto verdient zich terug voor Maro, Frigiliana of de bredere Axarquía — daarvoor volstaan vaak één of twee huurdagen.'
  },
  sv: {
    heroTitle: 'Resa till Nerja och AMARA Playa',
    heroText: 'Från Málagas flygplats går en Alsa-buss direkt till Nerja; den slutar vid busstationen, därifrån fortsätter ni med taxi eller till fots. Transfer och hyrbil tar er till Calle Castilla Pérez 60, cirka 200 meter från stranden Torrecilla. Ni parkerar några gator bort, och före hissen är det tio trappsteg: fem utanför huset, fem inne.',
    optionsEyebrow: 'Från Málaga flygplats', optionsTitle: 'Bussen går direkt, bilen går längre',
    carEyebrow: 'Transfer eller hyrbil', carTitle: 'Ända fram till dörren — sedan en plats', carText: 'Med bagage är transfern bekvämast. En hyrbil lönar sig för Maro, Frigiliana och Axarquía; för en eller två utflyktsdagar räcker en hyrbil för de dagarna. Med elbil: kartan visar närmaste laddpunkter.',
    busEyebrow: 'Direktbuss med Alsa', busTitle: 'Enkelt om ni stannar i Nerja', busText: 'Direktbussen från Málagas flygplats slutar vid busstationen högst upp i Nerja; därifrån en kvart nedför till fots eller fem minuter med taxi.',
    parkingEyebrow: 'Ankomst med bil', parkingTitle: 'Parkering några gator bort', parkingText: 'För centrum är parkeringshusen Balcón de Europa och Parque Verano Azul närmast, plus gatuplatser i närheten. Parkeringsguiden visar vilket område som passar till vad.',
    finalEyebrow: 'De sista minuterna', finalTitle: 'Målet är Calle Castilla Pérez 60', finalSteps: ['Taxi och transfer kan köra direkt till den fullständiga adressen.', 'Från busstationen fortsätter ni med taxi — eller till fots om bagaget tillåter.', 'Med bil lastar ni av vid dörren och parkerar sedan några gator bort.'],
    closeEyebrow: 'Väl på plats', closeTitle: 'I centrum står bilen kvar', closeText: 'Torrecilla ligger cirka 200 meter bort och Balcón de Europa omkring 500. En bil är värd det för Maro, Frigiliana eller övriga Axarquía — ofta räcker en eller två hyrdagar.'
  }
} satisfies Record<AmaraLanguage, Record<string, string | string[]>>;


const text = (row: LocalizedText, lang: AmaraLanguage): string => row[lang] ?? row.en;
const withoutLegacyNumber = (value: string): string => value.replace(/^\d+\s*[·.:–—-]\s*/u, '');

const ui = {
  en: {
    factsTitle: 'The journey at a glance',
    gatewaysEyebrow: 'The starting point',
    gatewaysTitle: 'Where the journey begins',
    optionsEyebrow: 'On to the destination',
    optionsTitle: 'Three ways to the door',
    mobilityEyebrow: 'After arrival',
    mobilityTitle: 'Getting around locally',
    journey: 'Duration',
    bestFor: 'Suits',
    consideration: 'Part of it',
    nextStep: 'Onwards'
  },
  de: {
    factsTitle: 'Die Anreise auf einen Blick',
    gatewaysEyebrow: 'Der Ausgangspunkt',
    gatewaysTitle: 'Wo die Reise beginnt',
    optionsEyebrow: 'Weiter zum Ziel',
    optionsTitle: 'Drei Wege ans Ziel',
    mobilityEyebrow: 'Nach der Ankunft',
    mobilityTitle: 'Unterwegs vor Ort',
    journey: 'Dauer',
    bestFor: 'Passt für',
    consideration: 'Dazu gehört',
    nextStep: 'Weiter'
  },
  es: {
    factsTitle: 'El viaje de un vistazo',
    gatewaysEyebrow: 'El punto de partida',
    gatewaysTitle: 'Dónde comienza el trayecto',
    optionsEyebrow: 'Hacia el destino',
    optionsTitle: 'Tres caminos hasta la puerta',
    mobilityEyebrow: 'Después de llegar',
    mobilityTitle: 'Moverse por la zona',
    journey: 'Duración',
    bestFor: 'Para',
    consideration: 'A tener en cuenta',
    nextStep: 'Seguir'
  },
  nl: {
    factsTitle: 'De reis in het kort',
    gatewaysEyebrow: 'Het vertrekpunt',
    gatewaysTitle: 'Waar de reis begint',
    optionsEyebrow: 'Verder naar het doel',
    optionsTitle: 'Drie routes naar het doel',
    mobilityEyebrow: 'Na aankomst',
    mobilityTitle: 'Onderweg ter plaatse',
    journey: 'Duur',
    bestFor: 'Past bij',
    consideration: 'Hoort erbij',
    nextStep: 'Verder'
  },
  sv: {
    factsTitle: 'Resan i korthet',
    gatewaysEyebrow: 'Utgångspunkten',
    gatewaysTitle: 'Var resan börjar',
    optionsEyebrow: 'Vidare till målet',
    optionsTitle: 'Tre vägar till målet',
    mobilityEyebrow: 'Efter ankomsten',
    mobilityTitle: 'På väg på plats',
    journey: 'Tid',
    bestFor: 'Passar',
    consideration: 'Hör till',
    nextStep: 'Vidare'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

const structureUi = {
  en: {
    routeTitle: 'Plan the journey in three decisions', faqTitle: 'Questions before departure',
    airportQuestion: 'Which airport or gateway is the practical choice?', carQuestion: 'Do you need a car during your stay?', finalLegQuestion: 'Where does public transport end?',
    finalMileEyebrow: 'The final leg', finalMileTitle: 'The last minutes to the door',
    relatedEyebrow: 'Continue planning', relatedTitle: 'Connect arrival with location and stay', relatedIntro: 'Arrival shapes the first hour; the right location shapes every day after it.',
    locationText: 'Return to the complete destination overview.', areasText: 'Compare the areas that fit the stay you want.'
  },
  de: {
    routeTitle: 'Die Reise in drei Entscheidungen planen', faqTitle: 'Fragen vor der Abreise',
    airportQuestion: 'Welcher Flughafen oder Ausgangspunkt ist praktisch?', carQuestion: 'Braucht ihr während des Aufenthalts ein Auto?', finalLegQuestion: 'Wo endet der öffentliche Verkehr?',
    finalMileEyebrow: 'Die letzte Etappe', finalMileTitle: 'Die letzten Minuten bis zur Tür',
    relatedEyebrow: 'Weiter planen', relatedTitle: 'Anreise, Lage und Aufenthalt zusammen denken', relatedIntro: 'Die Anreise prägt die erste Stunde; die richtige Lage prägt jeden Tag danach.',
    locationText: 'Zur vollständigen Ortsübersicht zurückkehren.', areasText: 'Die Lagen vergleichen, die zum gewünschten Aufenthalt passen.'
  },
  es: {
    routeTitle: 'Planificad el viaje en tres decisiones', faqTitle: 'Preguntas antes de salir',
    airportQuestion: '¿Qué aeropuerto o punto de llegada resulta más práctico?', carQuestion: '¿Necesitáis coche durante la estancia?', finalLegQuestion: '¿Dónde termina el transporte público?',
    finalMileEyebrow: 'El último tramo', finalMileTitle: 'Los últimos minutos hasta la puerta',
    relatedEyebrow: 'Seguir planificando', relatedTitle: 'Conectad llegada, ubicación y estancia', relatedIntro: 'La llegada define la primera hora; la ubicación adecuada define cada día posterior.',
    locationText: 'Volved a la guía completa del destino.', areasText: 'Comparad las zonas que encajan con la estancia deseada.'
  },
  nl: {
    routeTitle: 'Plan de reis in drie beslissingen', faqTitle: 'Vragen voor vertrek',
    airportQuestion: 'Welke luchthaven of aankomstplek is praktisch?', carQuestion: 'Hebben jullie tijdens het verblijf een auto nodig?', finalLegQuestion: 'Waar eindigt het openbaar vervoer?',
    finalMileEyebrow: 'Het laatste traject', finalMileTitle: 'De laatste minuten tot de deur',
    relatedEyebrow: 'Verder plannen', relatedTitle: 'Verbind aankomst, ligging en verblijf', relatedIntro: 'De aankomst bepaalt het eerste uur; de juiste ligging bepaalt elke dag daarna.',
    locationText: 'Ga terug naar het volledige bestemmingsoverzicht.', areasText: 'Vergelijk de gebieden die bij het gewenste verblijf passen.'
  },
  sv: {
    routeTitle: 'Planera resan i tre beslut', faqTitle: 'Frågor före avresan',
    airportQuestion: 'Vilken flygplats eller ankomstpunkt är mest praktisk?', carQuestion: 'Behöver ni bil under vistelsen?', finalLegQuestion: 'Var slutar kollektivtrafiken?',
    finalMileEyebrow: 'Den sista sträckan', finalMileTitle: 'De sista minuterna till dörren',
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
      primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 66 km', time: '≈ 55 min' },
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

/** Live public-charging-point map for guests arriving in an electric car. */
const CHARGING_MAP_LABEL: Record<AmaraLanguage, string> = {
  en: 'Charging stations nearby (map)',
  de: 'Ladestationen in der Nähe (Karte)',
  es: 'Puntos de recarga cerca (mapa)',
  nl: 'Laadpunten in de buurt (kaart)',
  sv: 'Laddstationer i närheten (karta)'
};
const chargingMapLink = (place: string, lang: AmaraLanguage) => ({
  href: `https://www.google.com/maps/search/?api=1&query=EV+charging+station+${place}`,
  label: CHARGING_MAP_LABEL[lang],
  external: true
});

function frigilianaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const copy = gettingToFrigilianaCopy;
  const localizedFacts = copy.facts.items.map((fact) => ({
    label: text(fact.label, lang),
    value: text(fact.value, lang),
    description: text(fact.note, lang)
  }));
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
        consideration: text(option.consideration, lang),
        link: option.id === 'car' ? chargingMapLink('Frigiliana', lang) : undefined
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
    finalMile: {
      eyebrow: text(copy.reality.eyebrow, lang),
      title: text(copy.reality.title, lang),
      paragraphs: [
        text(copy.reality.body, lang),
        text(copy.reality.access, lang),
        text(copy.reality.climb, lang)
      ],
      links: [
        { token: 'arrival_guide', label: text(copy.reality.bookedCta, lang) },
        { token: 'frigiliana_parking', label: text(copy.reality.parkingCta, lang) }
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
        { id: 'by-car', eyebrow: display.carEyebrow as string, title: display.carTitle as string, summary: display.carText as string, details: [], icon: 'rental-car', link: chargingMapLink('Nerja', lang) },
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
      items: [sectionCard(airports, 'airport'), { ...sectionCard(port, 'coast'), details: [port.paragraphs[1]] }]
    },
    options: {
      eyebrow: ui[lang].optionsEyebrow,
      title: ui[lang].optionsTitle,
      labels: {
        timing: ui[lang].journey,
        bestFor: ui[lang].bestFor,
        consideration: ui[lang].consideration
      },
      items: [{ ...sectionCard(car, 'rental-car'), details: [car.paragraphs[1], car.paragraphs[3]], link: chargingMapLink('Tarifa', lang) }, { ...sectionCard(bus, 'bus'), details: [] }]
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
      paragraphs: [bus.paragraphs[1]],
      steps: [car.paragraphs[2], bus.paragraphs[2], port.paragraphs[2]],
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
