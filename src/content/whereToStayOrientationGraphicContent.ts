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
      place: 'frigiliana', eyebrow: 'Location in the historic centre', title: 'AMARA in Frigiliana’s old town', region: 'North ↑', note: 'Schematic · approximate elevations',
      ariaLabel: 'North-oriented schematic map of Frigiliana showing AMARA in the historic centre beside the Church of San Antonio, close to the MA-5105 main road and lower on the hillside than upper Barribarto.',
      labels: { oldTown: 'Historic centre', laterVillage: 'Later village', barribajo: 'Barribajo · lower old town', barribarto: 'Barribarto · higher and steeper', ma5105: 'MA-5105', mainRoad: 'Two-lane main road', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', historicAccess: 'Historic route · limited vehicle access', church: 'Church of San Antonio', amara: 'AMARA', amaraPosition: 'Central · lower on the hillside', ingenio: 'El Ingenio · 290 m', castle: 'Castillo de Lízar', villageHeight: 'Village reference · 315–318 m' }
    },
    de: {
      place: 'frigiliana', eyebrow: 'Lage im historischen Zentrum', title: 'AMARA in Frigilianas Altstadt', region: 'Nord ↑', note: 'Schematisch · Höhenangaben ungefähr',
      ariaLabel: 'Nordorientierte schematische Karte von Frigiliana mit AMARA im historischen Zentrum neben der Kirche San Antonio, nahe der Hauptstraße MA-5105 und vergleichsweise niedriger am Hang als das obere Barribarto.',
      labels: { oldTown: 'Historisches Zentrum', laterVillage: 'Neuerer Dorfteil', barribajo: 'Barribajo · untere Altstadt', barribarto: 'Barribarto · höher und steiler', ma5105: 'MA-5105', mainRoad: 'Zweispurige Hauptstraße', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', historicAccess: 'Historische Achse · zeitweise befahrbar', church: 'Kirche San Antonio', amara: 'AMARA', amaraPosition: 'Zentral · niedriger am Hang', ingenio: 'El Ingenio · 290 m', castle: 'Castillo de Lízar', villageHeight: 'Ortsreferenz · 315–318 m' }
    },
    es: {
      place: 'frigiliana', eyebrow: 'Ubicación en el casco histórico', title: 'AMARA en el casco antiguo de Frigiliana', region: 'Norte ↑', note: 'Esquema · cotas aproximadas',
      ariaLabel: 'Mapa esquemático orientado al norte de Frigiliana que muestra AMARA en el casco histórico junto a la iglesia de San Antonio, cerca de la carretera principal MA-5105 y a menor altura que el Barribarto alto.',
      labels: { oldTown: 'Casco histórico', laterVillage: 'Zona más moderna', barribajo: 'Barribajo · casco bajo', barribarto: 'Barribarto · más alto y empinado', ma5105: 'MA-5105', mainRoad: 'Carretera principal de dos carriles', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', historicAccess: 'Eje histórico · acceso limitado', church: 'Iglesia de San Antonio', amara: 'AMARA', amaraPosition: 'Céntrico · más bajo en la ladera', ingenio: 'El Ingenio · 290 m', castle: 'Castillo de Lízar', villageHeight: 'Referencia del pueblo · 315–318 m' }
    },
    nl: {
      place: 'frigiliana', eyebrow: 'Ligging in de historische kern', title: 'AMARA in de oude kern van Frigiliana', region: 'Noord ↑', note: 'Schematisch · hoogtes bij benadering',
      ariaLabel: 'Noordgerichte schematische kaart van Frigiliana met AMARA in de historische kern naast de San Antonio-kerk, dicht bij de hoofdweg MA-5105 en lager op de helling dan hoog Barribarto.',
      labels: { oldTown: 'Historische kern', laterVillage: 'Nieuwer dorpsdeel', barribajo: 'Barribajo · lagere oude kern', barribarto: 'Barribarto · hoger en steiler', ma5105: 'MA-5105', mainRoad: 'Tweebaans hoofdweg', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', historicAccess: 'Historische as · beperkt toegankelijk', church: 'San Antonio-kerk', amara: 'AMARA', amaraPosition: 'Centraal · lager op de helling', ingenio: 'El Ingenio · 290 m', castle: 'Castillo de Lízar', villageHeight: 'Dorpsreferentie · 315–318 m' }
    },
    sv: {
      place: 'frigiliana', eyebrow: 'Läge i den historiska byn', title: 'AMARA i Frigilianas gamla by', region: 'Norr ↑', note: 'Schematisk · ungefärliga höjder',
      ariaLabel: 'Nordorienterad schematisk karta över Frigiliana med AMARA i den historiska byn intill San Antonio-kyrkan, nära huvudvägen MA-5105 och lägre på sluttningen än övre Barribarto.',
      labels: { oldTown: 'Historiska byn', laterVillage: 'Nyare bydel', barribajo: 'Barribajo · nedre gamla byn', barribarto: 'Barribarto · högre och brantare', ma5105: 'MA-5105', mainRoad: 'Tvåfilig huvudväg', calleReal: 'Calle Real', calleChorruelo: 'Calle Chorruelo', historicAccess: 'Historisk axel · begränsad trafik', church: 'San Antonio-kyrkan', amara: 'AMARA', amaraPosition: 'Centralt · lägre på sluttningen', ingenio: 'El Ingenio · 290 m', castle: 'Castillo de Lízar', villageHeight: 'Byreferens · 315–318 m' }
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
