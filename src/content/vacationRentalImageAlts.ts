import type { LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';
import type {
  VacationRentalEntity,
  VacationRentalEntityKey
} from './vacationRentalEntities';


const imageAltSubjects = {
  bedroom: {
    en: 'bright double bedroom', de: 'helles Doppelzimmer', es: 'dormitorio doble luminoso', nl: 'lichte tweepersoonsslaapkamer', sv: 'ljust dubbelrum'
  },
  bedroomFeatureWall: {
    en: 'double bed beside an exposed-brick wall', de: 'Doppelbett an einer Wand aus freigelegtem Ziegel', es: 'cama doble junto a una pared de ladrillo visto', nl: 'tweepersoonsbed naast een muur van zichtbare baksteen', sv: 'dubbelsäng intill en vägg med synligt tegel'
  },
  bedroomView: {
    en: 'double bed beside a window with views towards the sea', de: 'Doppelbett am Fenster mit Blick in Richtung Meer', es: 'cama doble junto a una ventana con vistas hacia el mar', nl: 'tweepersoonsbed bij het raam met uitzicht richting zee', sv: 'dubbelsäng vid ett fönster med utsikt mot havet'
  },
  bedroomStorage: {
    en: 'double bedroom with built-in storage', de: 'Doppelzimmer mit Einbauschränken', es: 'dormitorio doble con armarios empotrados', nl: 'tweepersoonsslaapkamer met ingebouwde kastruimte', sv: 'dubbelrum med inbyggd förvaring'
  },
  bunkRoom: {
    en: 'separate bedroom with a bunk bed and open shelving', de: 'separates Schlafzimmer mit Etagenbett und offenen Regalen', es: 'dormitorio independiente con litera y estanterías abiertas', nl: 'aparte slaapkamer met stapelbed en open planken', sv: 'separat sovrum med våningssäng och öppna hyllor'
  },
  bathroomSink: {
    en: 'washbasin and mirror in the bathroom', de: 'Waschbecken und Spiegel im Badezimmer', es: 'lavabo y espejo en el baño', nl: 'wastafel en spiegel in de badkamer', sv: 'handfat och spegel i badrummet'
  },
  bathroomShower: {
    en: 'bathroom with a walk-in shower', de: 'Badezimmer mit bodengleicher Dusche', es: 'baño con ducha a ras de suelo', nl: 'badkamer met inloopdouche', sv: 'badrum med dusch utan tröskel'
  },
  bathroomDoubleShower: {
    en: 'bathroom with a spacious glass shower', de: 'Badezimmer mit großzügiger Glasdusche', es: 'baño con amplia ducha acristalada', nl: 'badkamer met ruime glazen douche', sv: 'badrum med rymlig glasdusch'
  },
  bathroomDoorway: {
    en: 'view into the bathroom through historic wooden doors', de: 'Blick durch historische Holztüren ins Badezimmer', es: 'vista del baño a través de puertas históricas de madera', nl: 'zicht op de badkamer door historische houten deuren', sv: 'vy in i badrummet genom historiska trädörrar'
  },
  outdoorShower: {
    en: 'outdoor shower with handmade tiles', de: 'Außendusche mit handgefertigten Fliesen', es: 'ducha exterior con azulejos artesanales', nl: 'buitendouche met handgemaakte tegels', sv: 'utedusch med handgjorda kakelplattor'
  },
  teaKitchen: {
    en: 'tea kitchen with worktop, refrigerator and coffee maker', de: 'Teeküche mit Arbeitsfläche, Kühlschrank und Kaffeemaschine', es: 'zona de café y té con encimera, frigorífico y cafetera', nl: 'kleine kitchenette met werkblad, koelkast en koffiezetapparaat', sv: 'pentry med arbetsbänk, kylskåp och kaffebryggare'
  },
  kitchen: {
    en: 'fully equipped kitchen', de: 'voll ausgestattete Küche', es: 'cocina completamente equipada', nl: 'volledig uitgeruste keuken', sv: 'fullt utrustat kök'
  },
  kitchenBar: {
    en: 'open kitchen with breakfast bar', de: 'offene Küche mit Frühstückstheke', es: 'cocina abierta con barra de desayuno', nl: 'open keuken met ontbijtbar', sv: 'öppet kök med frukostbar'
  },
  kitchenDining: {
    en: 'kitchen and adjoining dining area', de: 'Küche mit angrenzendem Essbereich', es: 'cocina con comedor contiguo', nl: 'keuken met aangrenzende eethoek', sv: 'kök med intilliggande matplats'
  },
  outdoorKitchen: {
    en: 'outdoor kitchen on the private terrace', de: 'Außenküche auf der privaten Terrasse', es: 'cocina exterior en la terraza privada', nl: 'buitenkeuken op het privéterras', sv: 'utekök på den privata terrassen'
  },
  outdoorKitchenDetail: {
    en: 'sink and worktop in the outdoor kitchen', de: 'Spüle und Arbeitsfläche der Außenküche', es: 'fregadero y encimera de la cocina exterior', nl: 'spoelbak en werkblad van de buitenkeuken', sv: 'diskho och arbetsbänk i uteköket'
  },
  studioOverview: {
    en: 'open apartment with sleeping and living areas', de: 'offenes Apartment mit Schlaf- und Wohnbereich', es: 'apartamento diáfano con zona de descanso y salón', nl: 'open appartement met slaap- en woongedeelte', sv: 'öppen lägenhet med sov- och vardagsdel'
  },
  livingRoom: {
    en: 'comfortable living area with artwork', de: 'gemütlicher Wohnbereich mit Kunstwerken', es: 'acogedora zona de estar con obras de arte', nl: 'comfortabele zithoek met kunstwerken', sv: 'bekväm vardagsdel med konst'
  },
  livingTv: {
    en: 'living area with flat-screen TV', de: 'Wohnbereich mit Flachbildfernseher', es: 'zona de estar con televisor de pantalla plana', nl: 'zithoek met flatscreen-tv', sv: 'vardagsdel med platt-TV'
  },
  livingBalcony: {
    en: 'living area opening onto the balcony', de: 'Wohnbereich mit Zugang zum Balkon', es: 'zona de estar abierta al balcón', nl: 'zithoek die uitkomt op het balkon', sv: 'vardagsdel med utgång till balkongen'
  },
  livingKitchen: {
    en: 'living area with open kitchen', de: 'Wohnbereich mit offener Küche', es: 'zona de estar con cocina abierta', nl: 'zithoek met open keuken', sv: 'vardagsdel med öppet kök'
  },
  seating: {
    en: 'compact seating area with cushions', de: 'kompakter Sitzbereich mit Kissen', es: 'zona de estar compacta con cojines', nl: 'compacte zithoek met kussens', sv: 'kompakt sittgrupp med kuddar'
  },
  bench: {
    en: 'built-in bench with cushions', de: 'eingebaute Sitzbank mit Kissen', es: 'banco de obra con cojines', nl: 'ingebouwde zitbank met kussens', sv: 'inbyggd sittbänk med kuddar'
  },
  dining: {
    en: 'dining area with table and chairs', de: 'Essbereich mit Tisch und Stühlen', es: 'comedor con mesa y sillas', nl: 'eethoek met tafel en stoelen', sv: 'matplats med bord och stolar'
  },
  livingDining: {
    en: 'open living and dining area', de: 'offener Wohn- und Essbereich', es: 'zona abierta de salón y comedor', nl: 'open woon- en eetgedeelte', sv: 'öppen vardags- och matplats'
  },
  livingStairs: {
    en: 'open living area with stairs to the upper floor', de: 'offener Wohnbereich mit Treppe ins Obergeschoss', es: 'salón abierto con escalera a la planta superior', nl: 'open woonruimte met trap naar de bovenverdieping', sv: 'öppen vardagsdel med trappa till övervåningen'
  },
  hallway: {
    en: 'hallway connecting the rooms', de: 'Flur zwischen den Räumen', es: 'pasillo que conecta las estancias', nl: 'gang die de kamers met elkaar verbindt', sv: 'hall som förbinder rummen'
  },
  terraceSeating: {
    en: 'shaded seating area on the private terrace', de: 'beschatteter Sitzbereich auf der privaten Terrasse', es: 'zona de estar con sombra en la terraza privada', nl: 'beschutte zithoek op het privéterras', sv: 'skuggad sittgrupp på den privata terrassen'
  },
  terraceDining: {
    en: 'outdoor dining table on the private terrace', de: 'Esstisch im Freien auf der privaten Terrasse', es: 'mesa de comedor al aire libre en la terraza privada', nl: 'eettafel buiten op het privéterras', sv: 'matbord utomhus på den privata terrassen'
  },
  terraceSeaView: {
    en: 'private terrace with views towards the sea', de: 'private Terrasse mit Blick in Richtung Meer', es: 'terraza privada con vistas hacia el mar', nl: 'privéterras met uitzicht richting zee', sv: 'privat terrass med utsikt mot havet'
  },
  terraceCountryView: {
    en: 'private terrace overlooking the countryside', de: 'private Terrasse mit Blick über die Landschaft', es: 'terraza privada con vistas al campo', nl: 'privéterras met uitzicht over het landschap', sv: 'privat terrass med utsikt över landskapet'
  },
  terraceHammock: {
    en: 'hammock on the private terrace', de: 'Hängematte auf der privaten Terrasse', es: 'hamaca en la terraza privada', nl: 'hangmat op het privéterras', sv: 'hängmatta på den privata terrassen'
  },
  terraceEntrance: {
    en: 'entrance from the apartment onto the private terrace', de: 'Ausgang vom Apartment auf die private Terrasse', es: 'salida del apartamento a la terraza privada', nl: 'uitgang van het appartement naar het privéterras', sv: 'utgång från lägenheten till den privata terrassen'
  },
  terraceDaybed: {
    en: 'covered daybed on the private terrace', de: 'überdachtes Tagesbett auf der privaten Terrasse', es: 'tumbona cubierta en la terraza privada', nl: 'overdekt dagbed op het privéterras', sv: 'övertäckt dagbädd på den privata terrassen'
  },
  terraceStairs: {
    en: 'whitewashed steps and plants on the terrace', de: 'weiß getünchte Stufen und Pflanzen auf der Terrasse', es: 'escalones encalados y plantas en la terraza', nl: 'witgekalkte treden en planten op het terras', sv: 'vitkalkade trappsteg och växter på terrassen'
  },
  terraceWide: {
    en: 'wide view across the large private terrace', de: 'weiter Blick über die große private Terrasse', es: 'vista amplia de la gran terraza privada', nl: 'ruim zicht over het grote privéterras', sv: 'vid vy över den stora privata terrassen'
  },
  patioSeating: {
    en: 'chairs in the sheltered historic patio', de: 'Sitzplätze im geschützten historischen Patio', es: 'sillas en el patio histórico resguardado', nl: 'stoelen op de beschutte historische patio', sv: 'stolar på den skyddade historiska uteplatsen'
  },
  patioDining: {
    en: 'dining table in the sheltered patio', de: 'Esstisch im geschützten Patio', es: 'mesa de comedor en el patio resguardado', nl: 'eettafel op de beschutte patio', sv: 'matbord på den skyddade uteplatsen'
  },
  balconySeaView: {
    en: 'balcony with a side view of the sea', de: 'Balkon mit seitlichem Meerblick', es: 'balcón con vista lateral al mar', nl: 'balkon met zijdelings zeezicht', sv: 'balkong med havsutsikt åt sidan'
  },
  entranceDoor: {
    en: 'historic wooden entrance door', de: 'historische Eingangstür aus Holz', es: 'puerta de entrada histórica de madera', nl: 'historische houten voordeur', sv: 'historisk entrédörr i trä'
  },
  entranceHall: {
    en: 'whitewashed entrance hall with exposed brick', de: 'weiß getünchter Eingangsbereich mit freigelegtem Ziegel', es: 'entrada encalada con ladrillo visto', nl: 'witgekalkte entree met zichtbare baksteen', sv: 'vitkalkad entré med synligt tegel'
  },
  entranceStorage: {
    en: 'entrance area with open storage', de: 'Eingangsbereich mit offener Aufbewahrung', es: 'entrada con espacio de almacenaje abierto', nl: 'entree met open opbergruimte', sv: 'entré med öppen förvaring'
  },
  villageFacade: {
    en: 'whitewashed Casa AMARA facade in Frigiliana old town', de: 'weiß getünchte Fassade der Casa AMARA in Frigilianas Altstadt', es: 'fachada encalada de Casa AMARA en el casco antiguo de Frigiliana', nl: 'witgekalkte gevel van Casa AMARA in de oude kern van Frigiliana', sv: 'vitkalkad fasad på Casa AMARA i Frigilianas gamla stad'
  },
  villageStreet: {
    en: 'Casa AMARA on a whitewashed old-town street', de: 'Casa AMARA in einer weiß getünchten Altstadtgasse', es: 'Casa AMARA en una calle encalada del casco antiguo', nl: 'Casa AMARA in een witgekalkt straatje in de oude kern', sv: 'Casa AMARA på en vitkalkad gata i gamla stan'
  },
  keySafe: {
    en: 'key safe for self check-in', de: 'Schlüsseltresor für den Self Check-in', es: 'caja de llaves para la entrada autónoma', nl: 'sleutelkluis voor zelf inchecken', sv: 'nyckelbox för självincheckning'
  },
  keySafeGuide: {
    en: 'self check-in instructions beside the key safe', de: 'Self-Check-in-Anleitung neben dem Schlüsseltresor', es: 'instrucciones de entrada autónoma junto a la caja de llaves', nl: 'instructies voor zelf inchecken naast de sleutelkluis', sv: 'instruktioner för självincheckning intill nyckelboxen'
  },
  interiorStairs: {
    en: 'interior stairs between the apartment levels', de: 'Innentreppe zwischen den Ebenen des Apartments', es: 'escalera interior entre los niveles del apartamento', nl: 'binnentrap tussen de verdiepingen van het appartement', sv: 'inomhustrappa mellan lägenhetens våningsplan'
  },
  workspace: {
    en: 'work desk and TV beside an exposed-brick wall', de: 'Schreibtisch und Fernseher an einer Wand aus freigelegtem Ziegel', es: 'escritorio y televisor junto a una pared de ladrillo visto', nl: 'werkplek en tv naast een muur van zichtbare baksteen', sv: 'arbetsplats och TV intill en vägg med synligt tegel'
  },
  rooftopView: {
    en: 'rooftop terrace corner with views across Frigiliana', de: 'Ecke der Dachterrasse mit Blick über Frigiliana', es: 'rincón de la azotea con vistas sobre Frigiliana', nl: 'hoek van het dakterras met uitzicht over Frigiliana', sv: 'hörn på takterrassen med utsikt över Frigiliana'
  },
  surfStorage: {
    en: 'storage area for surf and beach equipment', de: 'Stauraum für Surf- und Strandausrüstung', es: 'espacio para guardar material de surf y playa', nl: 'opbergruimte voor surf- en strandspullen', sv: 'förvaring för surf- och strandutrustning'
  },
  pool: {
    en: 'shared outdoor pool in the residential complex', de: 'gemeinschaftlicher Außenpool der Wohnanlage', es: 'piscina exterior comunitaria del complejo', nl: 'gemeenschappelijk buitenzwembad van het complex', sv: 'gemensam utomhuspool i bostadsområdet'
  },
  poolView: {
    en: 'view across the shared pool towards the Atlantic', de: 'Blick über den Gemeinschaftspool in Richtung Atlantik', es: 'vista sobre la piscina comunitaria hacia el Atlántico', nl: 'uitzicht over het gemeenschappelijke zwembad richting de Atlantische Oceaan', sv: 'utsikt över den gemensamma poolen mot Atlanten'
  },
  beach: {
    en: 'Torrecilla beach near the apartment', de: 'Strand Torrecilla in der Nähe des Apartments', es: 'playa de Torrecilla cerca del apartamento', nl: 'Torrecilla-strand bij het appartement', sv: 'Torrecilla-stranden nära lägenheten'
  },
  plaza: {
    en: 'palm-lined plaza near Torrecilla beach', de: 'Platz mit Palmen nahe dem Strand Torrecilla', es: 'plaza con palmeras cerca de la playa de Torrecilla', nl: 'plein met palmbomen bij het Torrecilla-strand', sv: 'palmtorg nära Torrecilla-stranden'
  },
  stove: {
    en: 'pellet stove and flue in the apartment', de: 'Pelletofen mit Rauchrohr im Apartment', es: 'estufa de pellets y conducto en el apartamento', nl: 'pelletkachel met rookkanaal in het appartement', sv: 'pelletskamin med rökrör i lägenheten'
  }
} satisfies Record<string, LocalizedText>;

type ImageAltSubject = keyof typeof imageAltSubjects;

const subjectsByRental: Record<VacationRentalEntityKey, ImageAltSubject[]> = {
  'amara-farah': [
    'bedroom', 'bathroomSink', 'bedroom', 'bathroomShower', 'teaKitchen', 'bedroom',
    'entranceHall', 'entranceDoor', 'entranceHall', 'entranceHall', 'villageFacade',
    'villageStreet', 'keySafe', 'keySafeGuide'
  ],
  'amara-lounis': [
    'patioSeating', 'bathroomDoubleShower', 'terraceDining', 'patioSeating',
    'entranceHall', 'bench', 'livingTv', 'terraceCountryView', 'bedroomFeatureWall',
    'bathroomSink', 'kitchenDining', 'kitchen', 'patioDining', 'terraceSeaView',
    'dining', 'kitchen', 'kitchenBar', 'terraceSeating', 'terraceSeating',
    'terraceCountryView', 'bedroom', 'terraceDining', 'bathroomDoorway', 'outdoorShower'
  ],
  'amara-zaid': [
    'entranceHall', 'bedroomFeatureWall', 'bedroom', 'bathroomSink',
    'bathroomDoubleShower', 'kitchenDining', 'kitchen', 'terraceDaybed',
    'bathroomSink', 'kitchen', 'bedroomStorage', 'bedroomFeatureWall', 'interiorStairs',
    'workspace', 'terraceHammock', 'terraceCountryView', 'terraceDining',
    'terraceEntrance', 'outdoorShower', 'outdoorShower', 'outdoorShower'
  ],
  'amara-maha': [
    'terraceSeating', 'terraceDining', 'terraceStairs', 'terraceSeating', 'studioOverview',
    'bathroomSink', 'seating', 'rooftopView', 'outdoorKitchen', 'terraceSeating',
    'terraceWide', 'bedroom', 'livingTv', 'bathroomDoorway', 'entranceHall',
    'outdoorKitchen', 'seating', 'kitchen', 'interiorStairs', 'terraceHammock',
    'terraceEntrance', 'entranceDoor', 'outdoorKitchenDetail', 'stove'
  ],
  'amara-playa': [
    'studioOverview', 'kitchenBar', 'bedroomView', 'bedroom', 'bedroomStorage',
    'bathroomShower', 'balconySeaView', 'livingBalcony', 'seating', 'kitchenDining',
    'kitchenDining', 'kitchen', 'balconySeaView', 'studioOverview', 'livingKitchen',
    'livingKitchen', 'livingTv', 'livingTv', 'livingBalcony', 'livingBalcony',
    'bedroomView', 'plaza', 'beach', 'plaza'
  ],
  'amara-family-surf': [
    'livingDining', 'kitchen', 'surfStorage', 'livingRoom', 'livingStairs',
    'kitchenDining', 'bunkRoom', 'bathroomShower', 'livingRoom', 'kitchenBar',
    'livingRoom', 'dining', 'hallway', 'bathroomShower', 'terraceSeaView', 'pool',
    'livingTv', 'livingStairs', 'dining', 'bedroom', 'bedroomStorage', 'terraceEntrance',
    'poolView', 'entranceStorage'
  ]
};

export function getVacationRentalImageAlts(
  rental: VacationRentalEntity,
  lang: AmaraLanguage
): string[] {
  const subjects = subjectsByRental[rental.key];
  if (subjects.length !== rental.images.length) {
    throw new Error(
      `[Vacation rental image alts] ${rental.key} has ${rental.images.length} images but ${subjects.length} descriptions.`
    );
  }

  return rental.images.map((_, index) => {
    const subject = subjects[index];
    const description = subject ? imageAltSubjects[subject][lang] : undefined;
    return description ? `${rental.name}: ${description}` : rental.imageAlt[lang];
  });
}
