import type { AmaraLanguage } from '../types/seo';
import type { WhereToStayCopy } from './whereToStayCopy';

/**
 * Tarifa Where-to-stay body (Type A redesign). Tarifa's decision factor is the
 * wind: Levante from the east, Poniente from the west, and how exposed or
 * sheltered you want to be — plus whether you walk or drive. AMARA sits in
 * La Marina, the quarter between the walled old town and the beach.
 * Emphasis is **double asterisks** for InlineEmphasis; unit lists carry stable
 * `id`s for the locale-parity contract. Booking CTA comes from trustLabels.book.
 */
const de: WhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Tarifa',
    title: 'Wo in Tarifa übernachten',
    lede: 'Windiger Zipfel zwischen zwei Meeren — Altstadt hinter Mauern, weite Strände und das Kite-Revier vor der Tür.',
    body: 'Wo Atlantik und Mittelmeer aufeinandertreffen: eine maurisch geprägte Altstadt hinter alten Mauern, der lange Strand von Los Lances und ganzjährig Wind. In Tarifa entscheidet nicht die Höhe wie in Frigiliana und nicht nur die Nähe wie in Nerja, sondern der Wind: Wie viel davon wollt ihr vor der Tür — und wollt ihr laufen oder fahren?',
    traits: ['**Levante & Poniente**', 'Kite & Wind', 'Altstadt hinter Mauern', 'Zwei Meere', 'Ganzjährig'],
    stats: [
      { id: 'winds', k: '2', l: 'prägende Winde: Levante von Ost, Poniente von West' },
      { id: 'beach', k: '10 km', l: 'offener Sandstrand nach Norden: Los Lances bis Valdevaqueros' },
      { id: 'parts', k: '3', l: 'Lagen mit spürbar anderem Alltag' }
    ]
  },
  heroCtaZones: 'Die drei Teile ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Drei Lagen, drei Aufenthalte. Worin sie sich hier unterscheiden, entscheidet vor allem der Wind — und ob ihr zu Fuß oder mit dem Auto unterwegs seid.',
  glance: [
    { id: 'altstadt', title: 'Altstadt & La Marina', blurb: 'Gassen, Tapas, kurze Wege — geschützt vor dem Wind, im Sommer belebt' },
    { id: 'strand', title: 'Los Lances & Strand', blurb: 'Kite, Wind, weite Fläche — offen und windig' },
    { id: 'campo', title: 'Campo & Hanglagen', blurb: 'Ruhe, Weite, Blick — dafür Auto und teils voller Wind' }
  ],
  factorEyebrow: 'Worauf es in Tarifa ankommt',
  factor: {
    title: 'Alles eine Frage des Windes',
    intro: 'Tarifa liegt am südlichsten Zipfel des europäischen Festlands, dort wo Atlantik und Mittelmeer aufeinandertreffen — und gilt als einer der windigsten Orte Europas. Zwei Winde prägen den Alltag: der kräftige Levante von Osten und der mildere Poniente von Westen. Deshalb entscheidet hier nicht Höhe oder Nähe, sondern: Wie viel Wind wollt ihr vor der Tür?',
    copy: 'Am offenen Strand ist der Wind das Programm — ideal zum Kiten, weniger zum ruhigen Sonnenbad. Hinter den Altstadtmauern ist es spürbar geschützter. Die beste Lage ist die, deren **Verhältnis zum Wind** zu eurem Urlaub passt — und ob ihr dafür lauft oder das Auto braucht.',
    note: 'Ein Tag in Tarifa: morgens Strand, mittags im Ort, nachmittags aufs Wasser — und abends windgeschützt beim Essen?',
    day: ['Morgens an den Strand von Los Lances', 'Mittags Tapas in der Altstadt', 'Nachmittags aufs Wasser bei Levante', 'Abends geschützt hinter den Mauern', 'Nachts — Windrauschen oder Ruhe?']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Die drei Teile von Tarifa',
  zonesIntro: 'Grob gibt es drei Welten: den geschützten Kern aus Altstadt und La Marina, die offene Strandzone um Los Lances und das ruhigere Campo mit seinen Hanglagen. Jede steht anders zum Wind — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Altstadt & La Marina',
      h3: 'Der geschützte Kern — Gassen, Tapas, kurze Wege',
      desc: 'Der historische Ort hinter den alten Mauern und das angrenzende Hafenviertel — hier teilt sich der Kern in zwei:',
      quarters: [
        { id: 'casco', name: 'Altstadt (Casco)', note: 'Maurisch geprägte Gassen hinter den Mauern: am geschütztesten vor dem Wind, viel Leben — dafür eng und wenig Parkraum.' },
        { id: 'marina', name: 'La Marina', note: 'Das Viertel zwischen Altstadt und Strand: zu Fuß in den Ort und ans Wasser — hier liegt AMARA.' }
      ],
      idealFor: 'Wer Ort, Restaurants und Strand zu Fuß erreichen und dem Wind ausweichen können will.',
      honest: 'Im Sommer und bei Fährbetrieb belebt, Parken ist knapp; der breite Kitestrand liegt ein Stück Richtung Norden.'
    },
    {
      id: 'strand',
      sub: 'Los Lances & die Strandzone',
      h3: 'Wo der Wind das Programm ist',
      desc: 'Der lange Sandstrand nördlich des Orts, bis Valdevaqueros: hier spielt sich das Kite- und Windleben ab, weite Fläche, Strandbars. Dafür ist es offen und windig — und je weiter draußen, desto mehr braucht ihr das Auto.',
      idealFor: 'Kite- und Windsurfer und alle, die morgens direkt ans (windige) Wasser wollen.',
      honest: 'Bei Levante wird es richtig windig; ruhiges Sonnenbaden ist hier die Ausnahme, und zum Ort fahrt oder lauft ihr ein Stück.'
    },
    {
      id: 'campo',
      sub: 'Campo & Hanglagen',
      h3: 'Ruhe, Raum — dafür das Auto',
      desc: 'Das Umland und die Hügel Richtung N-340: Fincas, Weite, oft Blick über die Meerenge nach Afrika. Ruhiger und mehr Platz — aber Strand, Ort und Abendessen sind hier ein Weg mit dem Auto, und manche Kuppe steht selbst voll im Wind.',
      idealFor: 'Wer Ruhe, Weite und Blick über die direkte Nähe zu Ort und Strand stellt.',
      honest: 'Ohne Auto geht hier wenig; und windgeschützt ist längst nicht jede Lage im Campo.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Tarifa ideal ist',
  whoIntro: 'Tarifa passt zu Gästen, die Wind, Wasser und eine lebendige Altstadt zwischen zwei Meeren suchen — mit dem Kite-Revier vor der Tür. Wer vor allem ruhiges Strandbaden ohne Wind möchte, ist an der geschützteren Küste um Nerja besser aufgehoben.',
  who: [
    { id: 'families', title: 'Familien', text: 'Flacher, weiter Strand zum Toben, Wind zum Drachensteigen, dazu die Altstadt — Tarifa ist entspannt für Kinder.' },
    { id: 'kite', title: 'Kite- & Windsurfer', text: 'Los Lances und Valdevaqueros vor der Tür, Levante und Poniente fast das ganze Jahr.' },
    { id: 'active', title: 'Aktive & Naturnahe', text: 'Wandern am Kap, Whale-Watching in der Meerenge, Ausflüge nach Bolonia — zwischen zwei Meeren.' },
    { id: 'longstay', title: 'Ruhesuchende', text: 'Wer abschalten will, findet im Campo Weite und Ruhe — und im Ort trotzdem Alltag und Leben.' }
  ],
  pointer: {
    text: '**Noch unsicher, wie viel Wind ihr wollt?** Der Wind ist Tarifas Programm — an manchen Tagen sanft, an anderen kräftig. Ein Blick auf Winde und Reviere hilft bei der Wahl.',
    linkLabel: 'Wind & Kitesurfen in Tarifa ansehen',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Zwischen Mauern und Wasser — mittendrin, aber geschützt',
    caption: 'La Marina liegt zwischen Altstadt und Strand: zu Fuß in den Ort, zu Fuß ans Wasser — und windgeschützter als der offene Strand.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'In Tarifa muss man sich oft entscheiden: Strand *oder* Ort, Wind *oder* Ruhe. **AMARA liegt in La Marina** — dem Viertel zwischen der Altstadt und dem Strand. Von hier sind es wenige Minuten zu Fuß in die Gassen mit den Tapas-Bars und ebenso wenige zum Wasser. Und geschützter als draußen am offenen Los Lances.',
    facts: ['**La Marina** — zwischen Altstadt und Strand', '**Zu Fuß** in den Ort und ans Wasser', '**Geschützter** als der offene Kitestrand — ohne den Weg mit dem Auto'],
    honest: 'Ehrlich bleibt: den echten Kite-Tag habt ihr draußen an Los Lances und Valdevaqueros; wer Weite und Blick über Nähe stellt, ist im Campo besser aufgehoben. Für Ort und Strand in einem ist La Marina genau richtig.'
  }
};

const en: WhereToStayCopy = {
  hero: {
    eyebrow: 'Where to stay · Tarifa',
    title: 'Where to stay in Tarifa',
    lede: 'A windy spit between two seas — a walled old town, wide beaches and the kite grounds at the door.',
    body: 'Where the Atlantic and the Mediterranean meet: a Moorish-flavoured old town behind ancient walls, the long beach of Los Lances and wind all year round. In Tarifa it isn’t height that decides, as in Frigiliana, nor proximity alone, as in Nerja, but the wind: how much of it do you want at the door — and do you want to walk or drive?',
    traits: ['**Levante & Poniente**', 'Kite & wind', 'Walled old town', 'Two seas', 'Year-round'],
    stats: [
      { id: 'winds', k: '2', l: 'defining winds: Levante from the east, Poniente from the west' },
      { id: 'beach', k: '10 km', l: 'open sand northward: Los Lances to Valdevaqueros' },
      { id: 'parts', k: '3', l: 'parts with a noticeably different daily life' }
    ]
  },
  heroCtaZones: 'See the three parts',
  glanceTitle: 'Which part suits you?',
  glanceIntro: 'Three locations, three kinds of stay. What sets them apart here is above all the wind — and whether you get around on foot or by car.',
  glance: [
    { id: 'altstadt', title: 'Old Town & La Marina', blurb: 'Lanes, tapas, short walks — sheltered from the wind, busy in summer' },
    { id: 'strand', title: 'Los Lances & beach', blurb: 'Kite, wind, open space — exposed and windy' },
    { id: 'campo', title: 'Campo & hills', blurb: 'Quiet, space, views — but a car, and some spots full in the wind' }
  ],
  factorEyebrow: 'What matters in Tarifa',
  factor: {
    title: 'It all comes down to the wind',
    intro: 'Tarifa sits at the southernmost tip of mainland Europe, where the Atlantic and the Mediterranean meet — and it counts as one of the windiest places in Europe. Two winds shape daily life: the strong Levante from the east and the gentler Poniente from the west. So here it isn’t height or proximity that decides, but: how much wind do you want at the door?',
    copy: 'On the open beach the wind is the whole show — perfect for kiting, less so for quiet sunbathing. Behind the old-town walls it’s noticeably more sheltered. The best location is the one whose **relationship to the wind** suits your holiday — and whether you walk for it or need the car.',
    note: 'A day in Tarifa: beach in the morning, the town at midday, on the water in the afternoon — and dinner out of the wind in the evening?',
    day: ['Down to Los Lances beach in the morning', 'Tapas in the old town at midday', 'Onto the water in the Levante in the afternoon', 'Sheltered behind the walls in the evening', 'At night — wind in the ears or quiet?']
  },
  zonesEyebrow: 'The locations',
  zonesTitle: 'The three parts of Tarifa',
  zonesIntro: 'Broadly there are three worlds: the sheltered core of the old town and La Marina, the open beach zone around Los Lances, and the quieter campo with its hillsides. Each stands differently to the wind — and trades something else for it.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Old Town & La Marina',
      h3: 'The sheltered core — lanes, tapas, short walks',
      desc: 'The historic town behind the old walls and the harbour quarter next to it — here the core splits in two:',
      quarters: [
        { id: 'casco', name: 'Old Town (Casco)', note: 'Moorish-flavoured lanes behind the walls: the most sheltered from the wind, plenty of life — but narrow, with little parking.' },
        { id: 'marina', name: 'La Marina', note: 'The quarter between the old town and the beach: on foot into town and to the water — where AMARA is.' }
      ],
      idealFor: 'Those who want town, restaurants and beach on foot, and the option to duck out of the wind.',
      honest: 'Busy in summer and with the ferry traffic, parking is tight; the wide kite beach is a way to the north.'
    },
    {
      id: 'strand',
      sub: 'Los Lances & the beach zone',
      h3: 'Where the wind is the whole show',
      desc: 'The long sandy beach north of town, out to Valdevaqueros: this is where the kite and wind life happens, wide open space, beach bars. In return it’s exposed and windy — and the further out, the more you need the car.',
      idealFor: 'Kite and windsurfers, and anyone who wants to be at the (windy) water first thing.',
      honest: 'In the Levante it gets seriously windy; quiet sunbathing is the exception here, and it’s a drive or a walk into town.'
    },
    {
      id: 'campo',
      sub: 'Campo & hills',
      h3: 'Quiet, space — but the car',
      desc: 'The countryside and the hills towards the N-340: fincas, open space, often a view across the strait to Africa. Quieter and more room — but the beach, the town and dinner are a drive from here, and some ridges stand full in the wind themselves.',
      idealFor: 'Those who value quiet, space and a view over being right by town and beach.',
      honest: 'Without a car there’s little going on here; and not every spot in the campo is out of the wind.'
    }
  ],
  labelIdealFor: 'Best for',
  labelHonest: 'Honestly',
  whoTitle: 'Who Tarifa is ideal for',
  whoIntro: 'Tarifa suits guests who want wind, water and a lively old town between two seas — with the kite grounds at the door. Those who mainly want calm, wind-free beach days are better off on the more sheltered coast around Nerja.',
  who: [
    { id: 'families', title: 'Families', text: 'A flat, wide beach to run around on, wind for flying kites, plus the old town — Tarifa is easy-going for kids.' },
    { id: 'kite', title: 'Kite & windsurfers', text: 'Los Lances and Valdevaqueros at the door, Levante and Poniente almost all year.' },
    { id: 'active', title: 'Active & nature lovers', text: 'Walking on the cape, whale-watching in the strait, trips to Bolonia — between two seas.' },
    { id: 'longstay', title: 'Peace-seekers', text: 'Those who want to switch off find space and quiet in the campo — and everyday life and buzz still in town.' }
  ],
  pointer: {
    text: '**Not sure how much wind you want?** The wind is Tarifa’s whole thing — gentle on some days, strong on others. A look at the winds and the spots helps you choose.',
    linkLabel: 'See wind & kitesurfing in Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Why we chose this spot',
    title: 'Between the walls and the water — right in it, but sheltered',
    caption: 'La Marina sits between the old town and the beach: on foot into town, on foot to the water — and more sheltered than the open beach.',
    mapNote: '(see the orientation map above)',
    lead: 'In Tarifa you often have to choose: beach *or* town, wind *or* quiet. **AMARA is in La Marina** — the quarter between the old town and the beach. From here it’s a few minutes on foot into the lanes with the tapas bars, and just as few to the water. And more sheltered than out on the open Los Lances.',
    facts: ['**La Marina** — between the old town and the beach', '**On foot** into town and to the water', '**More sheltered** than the open kite beach — without the drive'],
    honest: 'To stay honest: your real kite day is out at Los Lances and Valdevaqueros; those who value space and a view over proximity are better off in the campo. For town and beach in one, La Marina is the sweet spot.'
  }
};

const es: WhereToStayCopy = {
  hero: {
    eyebrow: 'Dónde alojarse · Tarifa',
    title: 'Dónde alojarse en Tarifa',
    lede: 'Un extremo ventoso entre dos mares — un casco antiguo amurallado, playas amplias y la zona de kite en la puerta.',
    body: 'Donde el Atlántico y el Mediterráneo se encuentran: un casco antiguo de aire árabe tras murallas centenarias, la larga playa de Los Lances y viento todo el año. En Tarifa no decide la altura, como en Frigiliana, ni solo la cercanía, como en Nerja, sino el viento: ¿cuánto queréis tener en la puerta — y preferís andar o conducir?',
    traits: ['**Levante y Poniente**', 'Kite y viento', 'Casco amurallado', 'Dos mares', 'Todo el año'],
    stats: [
      { id: 'winds', k: '2', l: 'vientos que marcan el día: Levante del este, Poniente del oeste' },
      { id: 'beach', k: '10 km', l: 'arena abierta hacia el norte: de Los Lances a Valdevaqueros' },
      { id: 'parts', k: '3', l: 'partes con un día a día muy distinto' }
    ]
  },
  heroCtaZones: 'Ver las tres partes',
  glanceTitle: '¿Qué parte encaja con vosotros?',
  glanceIntro: 'Tres zonas, tres formas de alojarse. Lo que las diferencia aquí es sobre todo el viento — y si os movéis a pie o en coche.',
  glance: [
    { id: 'altstadt', title: 'Casco antiguo y La Marina', blurb: 'Callejuelas, tapas, todo cerca — al abrigo del viento, animado en verano' },
    { id: 'strand', title: 'Los Lances y playa', blurb: 'Kite, viento, gran extensión — abierto y ventoso' },
    { id: 'campo', title: 'Campo y laderas', blurb: 'Calma, amplitud, vistas — pero coche, y algún punto muy expuesto al viento' }
  ],
  factorEyebrow: 'Lo que cuenta en Tarifa',
  factor: {
    title: 'Todo es cuestión de viento',
    intro: 'Tarifa se asienta en el extremo más al sur de la Europa continental, donde el Atlántico y el Mediterráneo se encuentran — y está considerada uno de los lugares más ventosos de Europa. Dos vientos marcan el día a día: el fuerte Levante del este y el más suave Poniente del oeste. Por eso aquí no decide la altura ni la cercanía, sino: ¿cuánto viento queréis en la puerta?',
    copy: 'En la playa abierta el viento es el protagonista — ideal para el kite, menos para tomar el sol con calma. Tras las murallas del casco se está notablemente más resguardado. La mejor ubicación es aquella cuya **relación con el viento** encaja con vuestras vacaciones — y si para ello andáis o necesitáis el coche.',
    note: 'Un día en Tarifa: playa por la mañana, el pueblo al mediodía, al agua por la tarde — ¿y a cenar al abrigo del viento por la noche?',
    day: ['Por la mañana, a la playa de Los Lances', 'Al mediodía, tapas en el casco', 'Por la tarde, al agua con Levante', 'Por la noche, al abrigo de las murallas', 'De madrugada, ¿rumor del viento o calma?']
  },
  zonesEyebrow: 'Las zonas',
  zonesTitle: 'Las tres partes de Tarifa',
  zonesIntro: 'A grandes rasgos hay tres mundos: el núcleo resguardado del casco y La Marina, la zona abierta de playa en torno a Los Lances y el campo más tranquilo con sus laderas. Cada uno se planta de otra forma ante el viento — y a cambio cede algo distinto.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Casco antiguo y La Marina',
      h3: 'El núcleo resguardado — callejuelas, tapas, todo cerca',
      desc: 'El casco histórico tras las viejas murallas y el barrio portuario contiguo — aquí el núcleo se divide en dos:',
      quarters: [
        { id: 'casco', name: 'Casco antiguo', note: 'Callejuelas de aire árabe tras las murallas: lo más resguardado del viento, mucha vida — pero estrecho y con poco aparcamiento.' },
        { id: 'marina', name: 'La Marina', note: 'El barrio entre el casco y la playa: a pie al pueblo y al agua — aquí está AMARA.' }
      ],
      idealFor: 'Quienes quieren pueblo, restaurantes y playa a pie, y poder resguardarse del viento.',
      honest: 'Concurrido en verano y con el tráfico del ferry, aparcar es difícil; la ancha playa de kite queda un trecho al norte.'
    },
    {
      id: 'strand',
      sub: 'Los Lances y la zona de playa',
      h3: 'Donde el viento es el protagonista',
      desc: 'La larga playa de arena al norte del pueblo, hasta Valdevaqueros: aquí transcurre la vida del kite y el viento, gran extensión, chiringuitos. A cambio es abierto y ventoso — y cuanto más lejos, más necesitáis el coche.',
      idealFor: 'Kitesurfistas y windsurfistas, y quienes quieren estar en el agua (ventosa) a primera hora.',
      honest: 'Con Levante se pone muy ventoso; tomar el sol con calma es la excepción, y al pueblo se va en coche o dando un paseo.'
    },
    {
      id: 'campo',
      sub: 'Campo y laderas',
      h3: 'Calma, espacio — pero el coche',
      desc: 'El campo y las colinas hacia la N-340: fincas, amplitud, a menudo vistas del estrecho hacia África. Más tranquilo y con más espacio — pero la playa, el pueblo y la cena quedan en coche, y algún alto está de lleno en el viento.',
      idealFor: 'Quienes valoran la calma, la amplitud y las vistas por encima de estar junto al pueblo y la playa.',
      honest: 'Sin coche aquí se hace poco; y no toda ubicación del campo está resguardada del viento.'
    }
  ],
  labelIdealFor: 'Ideal para',
  labelHonest: 'Con franqueza',
  whoTitle: 'Para quién es ideal Tarifa',
  whoIntro: 'Tarifa encaja con quienes quieren viento, agua y un casco animado entre dos mares — con la zona de kite en la puerta. Quien busca sobre todo playa tranquila sin viento está mejor en la costa más resguardada de Nerja.',
  who: [
    { id: 'families', title: 'Familias', text: 'Playa llana y amplia para corretear, viento para volar cometas, y además el casco antiguo — Tarifa es cómoda para los niños.' },
    { id: 'kite', title: 'Kite y windsurfistas', text: 'Los Lances y Valdevaqueros en la puerta, Levante y Poniente casi todo el año.' },
    { id: 'active', title: 'Activos y amantes de la naturaleza', text: 'Senderismo en el cabo, avistamiento de cetáceos en el estrecho, excursiones a Bolonia — entre dos mares.' },
    { id: 'longstay', title: 'Quienes buscan calma', text: 'Quien quiere desconectar encuentra amplitud y calma en el campo — y en el pueblo, aun así, vida diaria y ambiente.' }
  ],
  pointer: {
    text: '**¿Aún no sabéis cuánto viento queréis?** El viento es la seña de Tarifa — suave unos días, fuerte otros. Un vistazo a los vientos y las zonas ayuda a decidir.',
    linkLabel: 'Ver viento y kitesurf en Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Por qué elegimos esta ubicación',
    title: 'Entre las murallas y el agua — en el centro, pero al abrigo',
    caption: 'La Marina está entre el casco y la playa: a pie al pueblo, a pie al agua — y más resguardada que la playa abierta.',
    mapNote: '(ver el mapa de orientación arriba)',
    lead: 'En Tarifa a menudo hay que elegir: playa *o* pueblo, viento *o* calma. **AMARA está en La Marina** — el barrio entre el casco y la playa. Desde aquí son unos minutos a pie hasta las callejuelas con los bares de tapas, y otros tantos hasta el agua. Y más resguardada que en la playa abierta de Los Lances.',
    facts: ['**La Marina** — entre el casco y la playa', '**A pie** al pueblo y al agua', '**Más resguardada** que la playa de kite abierta — sin el coche'],
    honest: 'Para ser honestos: el verdadero día de kite lo tenéis fuera, en Los Lances y Valdevaqueros; quien valora la amplitud y las vistas por encima de la cercanía está mejor en el campo. Para pueblo y playa en uno, La Marina es el punto dulce.'
  }
};

const nl: WhereToStayCopy = {
  hero: {
    eyebrow: 'Waar overnachten · Tarifa',
    title: 'Waar overnachten in Tarifa',
    lede: 'Een winderige landtong tussen twee zeeën — een ommuurde oude stad, weidse stranden en het kitegebied voor de deur.',
    body: 'Waar de Atlantische Oceaan en de Middellandse Zee elkaar raken: een Moors gekleurde oude stad achter eeuwenoude muren, het lange strand van Los Lances en wind het hele jaar. In Tarifa beslist niet de hoogte zoals in Frigiliana, en niet alleen de nabijheid zoals in Nerja, maar de wind: hoeveel ervan wil je voor de deur — en wil je lopen of rijden?',
    traits: ['**Levante & Poniente**', 'Kite & wind', 'Ommuurde oude stad', 'Twee zeeën', 'Het hele jaar'],
    stats: [
      { id: 'winds', k: '2', l: 'bepalende winden: Levante uit het oosten, Poniente uit het westen' },
      { id: 'beach', k: '10 km', l: 'open zand naar het noorden: Los Lances tot Valdevaqueros' },
      { id: 'parts', k: '3', l: 'delen met een merkbaar ander dagritme' }
    ]
  },
  heroCtaZones: 'Bekijk de drie delen',
  glanceTitle: 'Welk deel past bij jullie?',
  glanceIntro: 'Drie liggingen, drie soorten verblijf. Wat ze hier onderscheidt is vooral de wind — en of je te voet of met de auto gaat.',
  glance: [
    { id: 'altstadt', title: 'Oude stad & La Marina', blurb: 'Straatjes, tapas, korte loopjes — beschut tegen de wind, druk in de zomer' },
    { id: 'strand', title: 'Los Lances & strand', blurb: 'Kite, wind, weidse vlakte — open en winderig' },
    { id: 'campo', title: 'Campo & heuvels', blurb: 'Rust, ruimte, uitzicht — maar auto, en sommige plekken vol in de wind' }
  ],
  factorEyebrow: 'Waar het in Tarifa om gaat',
  factor: {
    title: 'Alles draait om de wind',
    intro: 'Tarifa ligt op de zuidelijkste punt van het Europese vasteland, waar de Atlantische Oceaan en de Middellandse Zee elkaar raken — en geldt als een van de winderigste plekken van Europa. Twee winden bepalen het dagelijks leven: de krachtige Levante uit het oosten en de mildere Poniente uit het westen. Daarom beslist hier niet de hoogte of de nabijheid, maar: hoeveel wind wil je voor de deur?',
    copy: 'Op het open strand is de wind het hele programma — ideaal om te kiten, minder om rustig te zonnen. Achter de stadsmuren is het merkbaar beschutter. De beste ligging is die waarvan de **verhouding tot de wind** bij jullie vakantie past — en of je ervoor loopt of de auto nodig hebt.',
    note: 'Een dag in Tarifa: ’s ochtends strand, rond het middaguur in het dorp, in de namiddag het water op — en ’s avonds uit de wind dineren?',
    day: ['’s Ochtends naar het strand van Los Lances', 'Rond het middaguur tapas in de oude stad', 'In de namiddag het water op bij Levante', '’s Avonds beschut achter de muren', '’s Nachts — windgeruis of rust?']
  },
  zonesEyebrow: 'De liggingen',
  zonesTitle: 'De drie delen van Tarifa',
  zonesIntro: 'Grofweg zijn er drie werelden: de beschutte kern van de oude stad en La Marina, de open strandzone rond Los Lances en het rustigere campo met zijn hellingen. Elk staat anders tegenover de wind — en levert daar iets anders voor in.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Oude stad & La Marina',
      h3: 'De beschutte kern — straatjes, tapas, korte loopjes',
      desc: 'De historische stad achter de oude muren en de aangrenzende havenwijk — hier splitst de kern zich in tweeën:',
      quarters: [
        { id: 'casco', name: 'Oude stad (Casco)', note: 'Moors gekleurde straatjes achter de muren: het meest beschut tegen de wind, veel leven — maar smal en weinig parkeerruimte.' },
        { id: 'marina', name: 'La Marina', note: 'De wijk tussen de oude stad en het strand: te voet het dorp in en naar het water — hier ligt AMARA.' }
      ],
      idealFor: 'Wie dorp, restaurants en strand te voet wil bereiken en de wind kan ontwijken.',
      honest: 'Druk in de zomer en met het veerverkeer, parkeren is krap; het brede kitestrand ligt een stuk naar het noorden.'
    },
    {
      id: 'strand',
      sub: 'Los Lances & de strandzone',
      h3: 'Waar de wind het programma is',
      desc: 'Het lange zandstrand ten noorden van het dorp, tot Valdevaqueros: hier speelt het kite- en windleven zich af, weidse vlakte, strandtenten. Daar staat tegenover dat het open en winderig is — en hoe verder weg, hoe meer je de auto nodig hebt.',
      idealFor: 'Kite- en windsurfers, en iedereen die ’s ochtends meteen aan het (winderige) water wil.',
      honest: 'Bij Levante wordt het echt winderig; rustig zonnen is hier de uitzondering, en naar het dorp is het rijden of een stuk lopen.'
    },
    {
      id: 'campo',
      sub: 'Campo & heuvels',
      h3: 'Rust, ruimte — maar de auto',
      desc: 'Het buitengebied en de heuvels richting de N-340: fincas, ruimte, vaak zicht over de zeestraat naar Afrika. Rustiger en meer plek — maar strand, dorp en diner zijn van hieruit met de auto, en sommige heuveltoppen staan zelf vol in de wind.',
      idealFor: 'Wie rust, ruimte en uitzicht boven de directe nabijheid van dorp en strand stelt.',
      honest: 'Zonder auto lukt hier weinig; en lang niet elke plek in de campo ligt uit de wind.'
    }
  ],
  labelIdealFor: 'Ideaal voor',
  labelHonest: 'Eerlijk gezegd',
  whoTitle: 'Voor wie Tarifa ideaal is',
  whoIntro: 'Tarifa past bij gasten die wind, water en een levendige oude stad tussen twee zeeën willen — met het kitegebied voor de deur. Wie vooral rustige stranddagen zonder wind zoekt, zit beter aan de beschuttere kust rond Nerja.',
  who: [
    { id: 'families', title: 'Gezinnen', text: 'Een vlak, weids strand om op te ravotten, wind om vliegers op te laten, plus de oude stad — Tarifa is ontspannen voor kinderen.' },
    { id: 'kite', title: 'Kite- & windsurfers', text: 'Los Lances en Valdevaqueros voor de deur, Levante en Poniente bijna het hele jaar.' },
    { id: 'active', title: 'Actievelingen & natuurliefhebbers', text: 'Wandelen op de kaap, walvissen spotten in de zeestraat, uitstapjes naar Bolonia — tussen twee zeeën.' },
    { id: 'longstay', title: 'Rustzoekers', text: 'Wie wil ontschakelen vindt in de campo ruimte en rust — en in het dorp toch dagelijks leven en drukte.' }
  ],
  pointer: {
    text: '**Nog niet zeker hoeveel wind je wilt?** De wind is hét kenmerk van Tarifa — de ene dag zacht, de andere krachtig. Een blik op de winden en de spots helpt bij de keuze.',
    linkLabel: 'Bekijk wind & kitesurfen in Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Waarom wij hier zitten',
    title: 'Tussen de muren en het water — middenin, maar beschut',
    caption: 'La Marina ligt tussen de oude stad en het strand: te voet het dorp in, te voet naar het water — en beschutter dan het open strand.',
    mapNote: '(zie de oriëntatiekaart hierboven)',
    lead: 'In Tarifa moet je vaak kiezen: strand *of* dorp, wind *of* rust. **AMARA ligt in La Marina** — de wijk tussen de oude stad en het strand. Van hier is het een paar minuten lopen naar de straatjes met de tapasbars, en net zo weinig naar het water. En beschutter dan buiten op het open Los Lances.',
    facts: ['**La Marina** — tussen de oude stad en het strand', '**Te voet** het dorp in en naar het water', '**Beschutter** dan het open kitestrand — zonder de auto'],
    honest: 'Eerlijk blijft: je echte kitedag heb je buiten bij Los Lances en Valdevaqueros; wie ruimte en uitzicht boven nabijheid stelt, zit beter in de campo. Voor dorp en strand in één is La Marina de zoete plek.'
  }
};

const sv: WhereToStayCopy = {
  hero: {
    eyebrow: 'Var man bor · Tarifa',
    title: 'Var man bor i Tarifa',
    lede: 'En blåsig udde mellan två hav — en muromgärdad gamla stan, vidsträckta stränder och kitereviret vid dörren.',
    body: 'Där Atlanten och Medelhavet möts: en morisk gamla stan bakom uråldriga murar, den långa stranden Los Lances och vind året runt. I Tarifa avgör inte höjden som i Frigiliana, och inte bara närheten som i Nerja, utan vinden: hur mycket av den vill ni ha vid dörren — och vill ni gå eller köra?',
    traits: ['**Levante & Poniente**', 'Kite & vind', 'Muromgärdad gamla stan', 'Två hav', 'Året runt'],
    stats: [
      { id: 'winds', k: '2', l: 'präglande vindar: Levante från öst, Poniente från väst' },
      { id: 'beach', k: '10 km', l: 'öppen sand norrut: Los Lances till Valdevaqueros' },
      { id: 'parts', k: '3', l: 'delar med märkbart olika vardag' }
    ]
  },
  heroCtaZones: 'Se de tre delarna',
  glanceTitle: 'Vilken del passar er?',
  glanceIntro: 'Tre lägen, tre sorters vistelse. Det som skiljer dem åt här är framför allt vinden — och om ni tar er fram till fots eller med bil.',
  glance: [
    { id: 'altstadt', title: 'Gamla stan & La Marina', blurb: 'Gränder, tapas, korta avstånd — i lä för vinden, livligt på sommaren' },
    { id: 'strand', title: 'Los Lances & strand', blurb: 'Kite, vind, vidsträckt yta — öppet och blåsigt' },
    { id: 'campo', title: 'Landsbygd & höjder', blurb: 'Lugn, rymd, utsikt — men bil, och vissa punkter fullt i vinden' }
  ],
  factorEyebrow: 'Vad som räknas i Tarifa',
  factor: {
    title: 'Allt handlar om vinden',
    intro: 'Tarifa ligger på det europeiska fastlandets sydligaste spets, där Atlanten och Medelhavet möts — och räknas som en av Europas blåsigaste platser. Två vindar präglar vardagen: den kraftiga Levante från öst och den mildare Poniente från väst. Därför avgör inte höjden eller närheten här, utan: hur mycket vind vill ni ha vid dörren?',
    copy: 'På den öppna stranden är vinden hela poängen — perfekt för kite, mindre för lugnt solbad. Bakom gamla stans murar är det märkbart mer skyddat. Det bästa läget är det vars **förhållande till vinden** passar er semester — och om ni går dit eller behöver bilen.',
    note: 'En dag i Tarifa: strand på morgonen, orten vid lunch, ut på vattnet på eftermiddagen — och middag i lä på kvällen?',
    day: ['På morgonen ner till Los Lances strand', 'Vid lunch tapas i gamla stan', 'På eftermiddagen ut på vattnet i Levante', 'På kvällen i lä bakom murarna', 'På natten — vindbrus eller lugn?']
  },
  zonesEyebrow: 'Lägena',
  zonesTitle: 'Tarifas tre delar',
  zonesIntro: 'Grovt sett finns tre världar: den skyddade kärnan av gamla stan och La Marina, den öppna strandzonen kring Los Lances och den lugnare landsbygden med sina sluttningar. Var och en står olika mot vinden — och byter något annat mot det.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Gamla stan & La Marina',
      h3: 'Den skyddade kärnan — gränder, tapas, korta avstånd',
      desc: 'Den historiska orten bakom de gamla murarna och det angränsande hamnkvarteret — här delar sig kärnan i två:',
      quarters: [
        { id: 'casco', name: 'Gamla stan (Casco)', note: 'Moriska gränder bakom murarna: mest skyddat från vinden, mycket liv — men trångt och ont om parkering.' },
        { id: 'marina', name: 'La Marina', note: 'Kvarteret mellan gamla stan och stranden: till fots in till orten och till vattnet — här ligger AMARA.' }
      ],
      idealFor: 'De som vill nå ort, restauranger och strand till fots och kunna komma undan vinden.',
      honest: 'Livligt på sommaren och med färjetrafiken, parkering är knappt; den breda kitestranden ligger en bit norrut.'
    },
    {
      id: 'strand',
      sub: 'Los Lances & strandzonen',
      h3: 'Där vinden är hela poängen',
      desc: 'Den långa sandstranden norr om orten, bort mot Valdevaqueros: här utspelar sig kite- och vindlivet, vidsträckt yta, strandbarer. I gengäld är det öppet och blåsigt — och ju längre ut, desto mer behöver ni bilen.',
      idealFor: 'Kite- och vindsurfare, och alla som vill vara vid det (blåsiga) vattnet på morgonen.',
      honest: 'I Levante blir det rejält blåsigt; lugnt solbad är undantaget här, och in till orten kör eller går ni en bit.'
    },
    {
      id: 'campo',
      sub: 'Landsbygd & höjder',
      h3: 'Lugn, rymd — men bilen',
      desc: 'Landsbygden och höjderna mot N-340: fincas, rymd, ofta utsikt över sundet mot Afrika. Lugnare och mer plats — men stranden, orten och middagen ligger en bilfärd bort, och vissa krön står själva fullt i vinden.',
      idealFor: 'De som värderar lugn, rymd och utsikt framför att vara precis vid ort och strand.',
      honest: 'Utan bil händer här inte mycket; och långt ifrån varje läge på landsbygden ligger i lä.'
    }
  ],
  labelIdealFor: 'Passar för',
  labelHonest: 'Ärligt',
  whoTitle: 'Vem Tarifa är perfekt för',
  whoIntro: 'Tarifa passar gäster som vill ha vind, vatten och en livlig gamla stan mellan två hav — med kitereviret vid dörren. Den som främst vill ha lugna stranddagar utan vind trivs bättre på den mer skyddade kusten kring Nerja.',
  who: [
    { id: 'families', title: 'Familjer', text: 'En platt, vidsträckt strand att springa på, vind för drakflygning, plus gamla stan — Tarifa är avslappnat för barn.' },
    { id: 'kite', title: 'Kite- & vindsurfare', text: 'Los Lances och Valdevaqueros vid dörren, Levante och Poniente nästan hela året.' },
    { id: 'active', title: 'Aktiva & naturnära', text: 'Vandring på udden, valskådning i sundet, utflykter till Bolonia — mellan två hav.' },
    { id: 'longstay', title: 'Lugnsökare', text: 'Den som vill koppla av finner rymd och lugn på landsbygden — och ändå vardag och liv i orten.' }
  ],
  pointer: {
    text: '**Osäkra på hur mycket vind ni vill ha?** Vinden är Tarifas signum — mild vissa dagar, kraftig andra. En titt på vindarna och reviren hjälper er att välja.',
    linkLabel: 'Se vind & kitesurfing i Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Därför valde vi det här läget',
    title: 'Mellan murarna och vattnet — mitt i, men skyddat',
    caption: 'La Marina ligger mellan gamla stan och stranden: till fots in till orten, till fots till vattnet — och mer i lä än den öppna stranden.',
    mapNote: '(se orienteringskartan ovan)',
    lead: 'I Tarifa måste man ofta välja: strand *eller* ort, vind *eller* lugn. **AMARA ligger i La Marina** — kvarteret mellan gamla stan och stranden. Härifrån är det några minuters promenad in i gränderna med tapasbarerna, och lika kort till vattnet. Och mer i lä än ute på öppna Los Lances.',
    facts: ['**La Marina** — mellan gamla stan och stranden', '**Till fots** in till orten och till vattnet', '**Mer i lä** än den öppna kitestranden — utan bilfärd'],
    honest: 'Ärligt talat: din riktiga kitedag har du ute vid Los Lances och Valdevaqueros; den som värderar rymd och utsikt framför närhet trivs bättre på landsbygden. För ort och strand i ett är La Marina den söta punkten.'
  }
};

export const tarifaWhereToStayBody: Record<AmaraLanguage, WhereToStayCopy> = {
  de,
  en,
  es,
  nl,
  sv
};
