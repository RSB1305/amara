import type { AmaraLanguage } from '../types/seo';

export type WhereToStayGraphicPlace = 'frigiliana' | 'nerja' | 'tarifa';

export interface WhereToStayOrientationGraphicData {
  place: WhereToStayGraphicPlace;
  eyebrow: string;
  title: string;
  region: string;
  note: string;
  ariaLabel: string;
  labels: Record<string, string>;
}

const sharedNote: Record<AmaraLanguage, string> = {
  en: 'Schematic · not to scale',
  de: 'Schematisch · nicht maßstabsgetreu',
  es: 'Esquema · no está a escala',
  nl: 'Schematisch · niet op schaal',
  sv: 'Schematisk · ej skalenlig'
};

export const whereToStayOrientationGraphicContent: Record<
  WhereToStayGraphicPlace,
  Record<AmaraLanguage, WhereToStayOrientationGraphicData>
> = {
  frigiliana: {
    en: {
      place: 'frigiliana', eyebrow: 'Orientation by elevation', title: 'Frigiliana hillside', region: 'Village profile', note: sharedNote.en,
      ariaLabel: 'Schematic profile of Frigiliana showing the lower village, historic centre, upper Barribarto, Calle Real, Calle Chorruelo, the Church of San Antonio and AMARA opposite the church.',
      labels: { lower: 'Lower village', transition: 'Transition area', historic: 'Lower historic centre', upper: 'Upper Barribarto', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', church: 'Church of San Antonio', amara: 'AMARA' }
    },
    de: {
      place: 'frigiliana', eyebrow: 'Orientierung nach Höhenlage', title: 'Frigiliana am Hang', region: 'Ortsprofil', note: sharedNote.de,
      ariaLabel: 'Schematisches Profil von Frigiliana mit Unterdorf, historischem Ortskern, oberem Barribarto, Calle Real, Calle Chorruelo, der Kirche San Antonio und AMARA schräg gegenüber.',
      labels: { lower: 'Unterdorf', transition: 'Übergangsbereich', historic: 'Unterer historischer Ortskern', upper: 'Oberes Barribarto', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', church: 'Kirche San Antonio', amara: 'AMARA' }
    },
    es: {
      place: 'frigiliana', eyebrow: 'Orientación por desnivel', title: 'Frigiliana en la ladera', region: 'Perfil del pueblo', note: sharedNote.es,
      ariaLabel: 'Perfil esquemático de Frigiliana con el pueblo bajo, el casco histórico, Barribarto, Calle Real, Calle Chorruelo, la iglesia de San Antonio y AMARA enfrente en diagonal.',
      labels: { lower: 'Pueblo bajo', transition: 'Zona de transición', historic: 'Casco histórico bajo', upper: 'Barribarto alto', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', church: 'Iglesia de San Antonio', amara: 'AMARA' }
    },
    nl: {
      place: 'frigiliana', eyebrow: 'Oriëntatie op hoogte', title: 'Frigiliana tegen de helling', region: 'Dorpsprofiel', note: sharedNote.nl,
      ariaLabel: 'Schematisch profiel van Frigiliana met het benedendorp, de historische kern, hoog Barribarto, Calle Real, Calle Chorruelo, de kerk San Antonio en AMARA schuin tegenover de kerk.',
      labels: { lower: 'Benedendorp', transition: 'Overgangsgebied', historic: 'Lagere historische kern', upper: 'Hoog Barribarto', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', church: 'Kerk San Antonio', amara: 'AMARA' }
    },
    sv: {
      place: 'frigiliana', eyebrow: 'Orientering efter höjdläge', title: 'Frigiliana på sluttningen', region: 'Byprofil', note: sharedNote.sv,
      ariaLabel: 'Schematisk profil av Frigiliana med den nedre byn, historiska kärnan, övre Barribarto, Calle Real, Calle Chorruelo, San Antonio-kyrkan och AMARA snett mittemot kyrkan.',
      labels: { lower: 'Nedre byn', transition: 'Övergångsområde', historic: 'Nedre historiska kärnan', upper: 'Övre Barribarto', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', church: 'San Antonio-kyrkan', amara: 'AMARA' }
    }
  },
  nerja: {
    en: {
      place: 'nerja', eyebrow: 'Coast & neighbourhoods', title: 'Nerja areas', region: 'West → east', note: sharedNote.en,
      ariaLabel: 'Schematic orientation of Nerja showing Punta Lara, Torrecilla with AMARA Playa, the Old Town and Balcón, Carabeo, Burriana and the residential hills.',
      labels: { puntaLara: 'Punta Lara', torrecilla: 'Torrecilla', amara: 'AMARA Playa', oldTown: 'Old Town · Balcón', carabeo: 'Carabeo', burriana: 'Burriana', hills: 'Residential hills', sea: 'Mediterranean' }
    },
    de: {
      place: 'nerja', eyebrow: 'Küste & Stadtteile', title: 'Nerjas Lagen', region: 'West → Ost', note: sharedNote.de,
      ariaLabel: 'Schematische Orientierung von Nerja mit Punta Lara, Torrecilla und AMARA Playa, Altstadt und Balcón, Carabeo, Burriana sowie den Wohnvierteln am Hang.',
      labels: { puntaLara: 'Punta Lara', torrecilla: 'Torrecilla', amara: 'AMARA Playa', oldTown: 'Altstadt · Balcón', carabeo: 'Carabeo', burriana: 'Burriana', hills: 'Wohnviertel am Hang', sea: 'Mittelmeer' }
    },
    es: {
      place: 'nerja', eyebrow: 'Costa y barrios', title: 'Las zonas de Nerja', region: 'Oeste → este', note: sharedNote.es,
      ariaLabel: 'Orientación esquemática de Nerja con Punta Lara, Torrecilla y AMARA Playa, el casco antiguo y el Balcón, Carabeo, Burriana y las zonas residenciales en ladera.',
      labels: { puntaLara: 'Punta Lara', torrecilla: 'Torrecilla', amara: 'AMARA Playa', oldTown: 'Casco antiguo · Balcón', carabeo: 'Carabeo', burriana: 'Burriana', hills: 'Zonas residenciales', sea: 'Mediterráneo' }
    },
    nl: {
      place: 'nerja', eyebrow: 'Kust en buurten', title: 'De gebieden van Nerja', region: 'West → oost', note: sharedNote.nl,
      ariaLabel: 'Schematische oriëntatie van Nerja met Punta Lara, Torrecilla en AMARA Playa, het oude centrum en Balcón, Carabeo, Burriana en de woonwijken op de heuvel.',
      labels: { puntaLara: 'Punta Lara', torrecilla: 'Torrecilla', amara: 'AMARA Playa', oldTown: 'Oude centrum · Balcón', carabeo: 'Carabeo', burriana: 'Burriana', hills: 'Heuvelwijken', sea: 'Middellandse Zee' }
    },
    sv: {
      place: 'nerja', eyebrow: 'Kust & områden', title: 'Nerjas lägen', region: 'Väst → öst', note: sharedNote.sv,
      ariaLabel: 'Schematisk orientering av Nerja med Punta Lara, Torrecilla och AMARA Playa, gamla stan och Balcón, Carabeo, Burriana samt bostadsområdena på höjden.',
      labels: { puntaLara: 'Punta Lara', torrecilla: 'Torrecilla', amara: 'AMARA Playa', oldTown: 'Gamla stan · Balcón', carabeo: 'Carabeo', burriana: 'Burriana', hills: 'Bostadsområden på höjden', sea: 'Medelhavet' }
    }
  },
  tarifa: {
    en: {
      place: 'tarifa', eyebrow: 'Town & Atlantic edge', title: 'Tarifa areas', region: 'Coast → inland', note: sharedNote.en,
      ariaLabel: 'Schematic orientation of Tarifa showing Los Lances, La Marina with AMARA, the Old Town and the countryside and hills inland.',
      labels: { losLances: 'Los Lances', laMarina: 'La Marina', amara: 'AMARA · La Marina', oldTown: 'Old Town', campo: 'Countryside & hills', sea: 'Atlantic' }
    },
    de: {
      place: 'tarifa', eyebrow: 'Ort & Atlantikküste', title: 'Tarifas Lagen', region: 'Küste → Inland', note: sharedNote.de,
      ariaLabel: 'Schematische Orientierung von Tarifa mit Los Lances, La Marina und AMARA, der Altstadt sowie Campo und Hanglagen im Inland.',
      labels: { losLances: 'Los Lances', laMarina: 'La Marina', amara: 'AMARA · La Marina', oldTown: 'Altstadt', campo: 'Campo & Hanglagen', sea: 'Atlantik' }
    },
    es: {
      place: 'tarifa', eyebrow: 'Pueblo y costa atlántica', title: 'Las zonas de Tarifa', region: 'Costa → interior', note: sharedNote.es,
      ariaLabel: 'Orientación esquemática de Tarifa con Los Lances, La Marina y AMARA, el casco antiguo y el campo y las colinas del interior.',
      labels: { losLances: 'Los Lances', laMarina: 'La Marina', amara: 'AMARA · La Marina', oldTown: 'Casco antiguo', campo: 'Campo y colinas', sea: 'Atlántico' }
    },
    nl: {
      place: 'tarifa', eyebrow: 'Plaats & Atlantische kust', title: 'De gebieden van Tarifa', region: 'Kust → binnenland', note: sharedNote.nl,
      ariaLabel: 'Schematische oriëntatie van Tarifa met Los Lances, La Marina en AMARA, de oude stad en het campo en de heuvels landinwaarts.',
      labels: { losLances: 'Los Lances', laMarina: 'La Marina', amara: 'AMARA · La Marina', oldTown: 'Oude stad', campo: 'Campo & heuvels', sea: 'Atlantische Oceaan' }
    },
    sv: {
      place: 'tarifa', eyebrow: 'Stad & Atlantkust', title: 'Tarifas lägen', region: 'Kust → inland', note: sharedNote.sv,
      ariaLabel: 'Schematisk orientering av Tarifa med Los Lances, La Marina och AMARA, gamla stan samt landsbygden och höjderna inåt land.',
      labels: { losLances: 'Los Lances', laMarina: 'La Marina', amara: 'AMARA · La Marina', oldTown: 'Gamla stan', campo: 'Landsbygd & höjder', sea: 'Atlanten' }
    }
  }
};
