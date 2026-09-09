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
    lede: 'Windiger Zipfel zwischen zwei Meeren — flaches Strandviertel am Wasser, Altstadt hinter Mauern und ansteigende Hänge mit Blick.',
    body: 'Wo Atlantik und Mittelmeer aufeinandertreffen: eine maurisch geprägte Altstadt hinter alten Mauern, der kilometerlange Strand von Los Lances und ganzjährig Wind. Zwei Dinge entscheiden, wo ihr am besten wohnt — wie viel Wind ihr vor der Tür wollt und wie das Terrain ist: flacher, ebener Grund unten am Wasser oder ansteigende Hanglagen mit Blick über die Meerenge. Wir wohnen im flachen La Marina, direkt hinter dem Strand.',
    traits: ['**Levante & Poniente**', 'Flach am Wasser', 'Altstadt hinter Mauern', 'Kite-Revier', 'Ganzjährig'],
    stats: [
      { id: 'winds', k: '2', l: 'prägende Winde: Levante von Ost, Poniente von West' },
      { id: 'beach', k: '10 km', l: 'offener Sandstrand nach Norden: Los Lances bis Valdevaqueros' },
      { id: 'parts', k: '5', l: 'Lagen mit spürbar anderem Alltag — von flach am Wasser bis Hang' }
    ]
  },
  heroCtaZones: 'Die fünf Lagen ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Zwei Fragen entscheiden in Tarifa: wie viel Wind ihr vor der Tür wollt — und wie eben die Wege sein sollen. Danach sortieren sich die Lagen fast von selbst.',
  glance: [
    { id: 'losLancesSur', title: 'Flach & direkt am Wasser', blurb: 'Los Lances Sur mit La Marina — ebene Straßen, Strand vor der Tür, entspanntes Parken' },
    { id: 'centro', title: 'Mittendrin im Ort', blurb: 'Altstadt und Neustadt — kurze Wege, Supermärkte, Cafés; die Gassen eng und windgeschützt' },
    { id: 'hanglagen', title: 'Höhe, Ruhe & Weite', blurb: 'Hanglagen und Umland — Blick über die Meerenge, dafür Steigung und Auto' }
  ],
  accommodation: {
    eyebrow: 'Was Tarifa an Betten hat',
    title: 'Vom Surf-Hostel bis zur Finca',
    intro: 'Tarifa ist kein Ort der großen Hotelburgen. Das Gros sind Ferienwohnungen und -häuser, dazu kleine, meist inhabergeführte Hotels im Ort, ein paar Hostels für die Surf-Szene und Fincas im Umland. Was es kostet, hängt vor allem an der Saison: im windstarken Hochsommer zieht es an, in der Nebensaison wird es spürbar günstiger.',
    types: [
      { id: 'apartments', name: 'Ferienwohnungen & -häuser', note: 'Das größte Angebot — von der einfachen Wohnung bis zum modernen Penthouse mit Pool. In La Marina und der Neustadt am dichtesten, ideal für Selbstversorger, Familien und alle mit Material.' },
      { id: 'hotels', name: 'Kleine Hotels & Boutique', note: 'Überschaubar und oft inhabergeführt, viele in und um die Altstadt und an der Strandstraße. Mittleres bis gehobenes Niveau; große Ketten sucht man hier vergeblich.' },
      { id: 'hostels', name: 'Hostels & Pensionen', note: 'Für die Surf- und Kite-Szene: einfache Betten, oft mit Gemeinschaftsküche und Platz fürs Board. Günstig, gesellig, meist zentral oder strandnah.' },
      { id: 'fincas', name: 'Fincas & Landhäuser', note: 'Im Umland Richtung Naturpark: Ruhe, Weite und Blick — dafür braucht ihr das Auto für jeden Weg in den Ort oder an den Strand.' }
    ]
  },
  factorEyebrow: 'Worauf es in Tarifa ankommt',
  factor: {
    title: 'Wind und Wege — die zwei Fragen',
    intro: 'Tarifa liegt am südlichsten Zipfel des Festlands, wo Atlantik und Mittelmeer aufeinandertreffen, und gilt als einer der windigsten Orte Europas. Zwei Winde prägen den Alltag: der kräftige Levante von Osten und der mildere Poniente von Westen. Die zweite Frage ist das Terrain — Ort und Strandviertel sind flach, landeinwärts steigen die Hänge merklich an.',
    copy: 'Am offenen Strand ist der Wind das Programm — ideal zum Kiten, weniger zum ruhigen Sonnenbad. Hinter den Altstadtmauern ist es spürbar geschützter, dafür eng und mit Kopfsteinpflaster. Am ebensten wohnt ihr unten am Wasser, wo die Straßen breit und flach sind. Die beste Lage ist die, deren **Verhältnis zu Wind und Wegen** zu eurem Urlaub passt.',
    note: 'Ein Tag in Tarifa: morgens über flache Wege an den Strand, mittags im Ort, nachmittags aufs Wasser — und abends windgeschützt beim Essen?',
    day: ['Morgens über flache Wege an den Strand von Los Lances', 'Mittags Tapas in der Altstadt', 'Nachmittags aufs Wasser bei Levante', 'Abends geschützt hinter den Mauern', 'Nachts — Windrauschen oder Ruhe?']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Tarifas fünf Lagen',
  zonesIntro: 'Von der flachen Küste ins ansteigende Inland: fünf Lagen, die sich nicht nach Sehenswürdigkeiten unterscheiden, sondern nach Alltag — wie flach die Wege sind, wie nah Strand und Ort liegen und wie viel Auto ihr braucht.',
  zones: [
    {
      id: 'casco',
      sub: 'Zone 1 · Casco Antiguo',
      h3: 'Die historische Altstadt — flach, aber eng und gepflastert',
      desc: 'Innerhalb der alten Stadtmauern: weiße, extrem enge und verwinkelte Gassen, historisch gezielt als Schutz vor Wind und Hitze gebaut. Das Terrain ist weitgehend flach, aber überall Kopfsteinpflaster. Praktisch eine Fußgängerzone — alles zu Fuß erreichbar, direkte Parkplätze an den Unterkünften gibt es nicht.',
      idealFor: 'Wer mitten im Leben zwischen Tapas-Bars und Läden wohnen und den Wind aussperren will.',
      honest: 'Koffer rollen über Kopfsteinpflaster vom Rand der Altstadt herein; für das tägliche Ein- und Ausladen von großem Kite-Material ist das mühsam, und Parken ist knapp.'
    },
    {
      id: 'centro',
      sub: 'Zone 2 · Centro & Neustadt',
      h3: 'Das urbane Zentrum — flach und alltagspraktisch',
      desc: 'Flaches Terrain rund um den historischen Kern, mit modernem Straßenraster und befestigten Bürgersteigen. Hier ist die Dichte an Supermärkten und Alltagsinfrastruktur am höchsten.',
      idealFor: 'Familien und Selbstversorger, die zu Fuß einkaufen wollen und das Auto griffbereit an der Straße für Fahrten zu entfernteren Stränden brauchen.',
      honest: 'Kein Postkarten-Kopfsteinpflaster und weniger Altstadt-Romantik — dafür leicht begehbar und praktisch.'
    },
    {
      id: 'losLancesSur',
      sub: 'Zone 3 · Los Lances Sur',
      h3: 'Das direkte Strandviertel — eben, am Wasser, hier wohnen wir',
      desc: 'Absolut flaches Küstengebiet auf Meereshöhe, direkt hinter dem südlichen Ende des kilometerlangen Sandstrandes. Breite, befestigte Straßen, keine Steigungen und — verglichen mit der Altstadt — eine sehr entspannte Parksituation. Hier liegt das Barrio La Marina.',
      quarters: [
        { id: 'marina', name: 'La Marina', note: 'Moderne, breite Straßen, Tiefgaragen und Aufzüge, Strand und Promenade vor der Tür. Über flache Wege in wenigen Minuten bei den Supermärkten und Cafés der Neustadt — hier wohnt AMARA.' }
      ],
      idealFor: 'Surfer und Familien mit Material und Strandgepäck, die zu Fuß ans Wasser und im Alltag das Auto stehen lassen wollen.',
      honest: 'Offener und windiger als hinter den Mauern; wer absolute Ruhe abseits von allem sucht, ist im Umland richtiger.'
    },
    {
      id: 'hanglagen',
      sub: 'Zone 4 · Hanglagen im Norden',
      h3: 'Die höhergelegenen Viertel — Blick, aber Steigung',
      desc: 'Landeinwärts, jenseits von Küstenstreifen und Altstadt, steigt das Terrain merklich an. Die Wohngebiete ziehen sich den Hang hinauf, teils über steile Cuestas — dafür spektakulärer Blick über die Straße von Gibraltar.',
      idealFor: 'Wer den Ausblick und etwas Distanz zum Trubel sucht und mobil genug für die Steigung ist.',
      honest: 'Der Rückweg vom Strand oder nach dem Abendessen ist zu Fuß anstrengend; für Kinderwagen oder eingeschränkte Mobilität sind diese Lagen weniger zu empfehlen.'
    },
    {
      id: 'umland',
      sub: 'Zone 5 · Außenbezirke & Küsten-Urbanisationen',
      h3: 'Valdevaqueros, Punta Paloma, El Cuartón — Weite und Dünen',
      desc: 'El Cuartón und La Peña liegen landeinwärts an den steileren Hängen der Naturparks; die Strandzonen Valdevaqueros und Punta Paloma im Westen prägen mächtige Sanddünen und ein weitläufiges, wenig bebautes Umfeld. Viel Ruhe abseits des Sommertrubels.',
      idealFor: 'Wer Weite, Natur und Nähe zu den westlichen Kite-Spots über die kurzen Wege im Ort stellt.',
      honest: 'Das direkte Angebot an Infrastruktur ist deutlich dünner — für Einkäufe oder den Weg ins Zentrum ist ein Mietwagen hier zwingend.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Tarifa ideal ist',
  whoIntro: 'Tarifa passt zu Gästen, die Wind, Wasser und eine lebendige Altstadt zwischen zwei Meeren suchen — mit dem Kite-Revier vor der Tür. Wer vor allem ruhiges Strandbaden ohne Wind möchte, ist an der geschützteren Küste um Nerja besser aufgehoben.',
  who: [
    { id: 'families', title: 'Familien', text: 'Flacher, weiter Strand zum Toben, ebene Wege am Wasser für Kinderwagen und Strandgepäck, dazu die Altstadt zum Bummeln — Tarifa ist entspannt für Kinder.' },
    { id: 'kite', title: 'Kite- & Windsurfer', text: 'Los Lances und Valdevaqueros vor der Tür, Levante und Poniente fast das ganze Jahr.' },
    { id: 'active', title: 'Aktive & Naturnahe', text: 'Wandern am Kap, Whale-Watching in der Meerenge, Ausflüge nach Bolonia — zwischen zwei Meeren.' },
    { id: 'longstay', title: 'Ruhesuchende', text: 'Wer abschalten will, findet im Umland Weite und Ruhe — und im Ort trotzdem Alltag und Leben.' }
  ],
  pointer: {
    text: '**Noch unsicher, wie viel Wind ihr wollt?** Der Wind ist Tarifas Programm — an manchen Tagen sanft, an anderen kräftig. Ein Blick auf Winde und Reviere hilft bei der Wahl.',
    linkLabel: 'Wind & Kitesurfen in Tarifa ansehen',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'La Marina — flach am Wasser, mittendrin und doch bereit für die Spots',
    caption: 'La Marina liegt in Los Lances Sur: ebener Grund direkt hinter dem Strand, fließender Übergang in die Neustadt.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'In Tarifa muss man oft wählen: Strand *oder* Ort, Wind *oder* Ruhe, Blick *oder* kurze Wege. **AMARA liegt in La Marina** — dem flachen Strandviertel in Los Lances Sur. Breite, ebene Straßen, Tiefgarage und Aufzug, der Strand vor der Tür und über flache Wege in wenigen Minuten bei den Supermärkten und Cafés der Neustadt. Das Auto könnt ihr im Alltag stehen lassen — und habt es dennoch griffbereit, wenn ihr mit dem Material zu den Spots nach Valdevaqueros aufbrecht. Gerade außerhalb des Hochsommers spielt das seine Stärke aus: wenig Betrieb, kurze Wege, und Wind gibt es in Tarifa fast das ganze Jahr.',
    facts: ['**Flach & eben** — breite Straßen, Tiefgarage, Aufzug, kein Kopfsteinpflaster', '**Strand vor der Tür** — zu Fuß ans Wasser, mit Board oder Kinderwagen', '**Neustadt in Minuten** — Supermärkte und Cafés über ebene Wege', '**Auto bereit** — im Alltag stehen lassen, für Valdevaqueros griffbereit'],
    honest: 'Ehrlich bleibt: hinter den Altstadtmauern wohnt ihr windgeschützter, und den Blick über die Meerenge habt ihr oben an den Hanglagen. Für flache Wege, Strand und Ort in einem — gerade mit Material oder Kindern — ist La Marina genau richtig.'
  }
};

const en: WhereToStayCopy = {
  hero: {
    eyebrow: 'Where to stay · Tarifa',
    title: 'Where to stay in Tarifa',
    lede: 'A windy spit between two seas — a flat beach quarter at the water, a walled old town and rising hills with a view.',
    body: 'Where the Atlantic and the Mediterranean meet: a Moorish-flavoured old town behind ancient walls, the kilometre-long beach of Los Lances and wind all year round. Two things decide where you stay best — how much wind you want at the door, and the terrain: flat, even ground down by the water or rising hillsides with a view across the strait. We live in flat La Marina, right behind the beach.',
    traits: ['**Levante & Poniente**', 'Flat by the water', 'Walled old town', 'Kite grounds', 'Year-round'],
    stats: [
      { id: 'winds', k: '2', l: 'defining winds: Levante from the east, Poniente from the west' },
      { id: 'beach', k: '10 km', l: 'open sand northward: Los Lances to Valdevaqueros' },
      { id: 'parts', k: '5', l: 'areas with a noticeably different daily life — from flat by the water to hillside' }
    ]
  },
  heroCtaZones: 'See the five areas',
  glanceTitle: 'Which part suits you?',
  glanceIntro: 'Two questions decide in Tarifa: how much wind you want at the door — and how flat the walk should be. After that the areas sort themselves out.',
  glance: [
    { id: 'losLancesSur', title: 'Flat & right by the water', blurb: 'Los Lances Sur with La Marina — level streets, beach at the door, easy parking' },
    { id: 'centro', title: 'In the thick of town', blurb: 'Old town and new town — short walks, supermarkets, cafés; the lanes narrow and sheltered' },
    { id: 'hanglagen', title: 'Height, quiet & space', blurb: 'Hillside districts and outskirts — a view across the strait, but a climb and a car' }
  ],
  accommodation: {
    eyebrow: 'What Tarifa has for beds',
    title: 'From surf hostel to finca',
    intro: 'Tarifa is no place of big hotel blocks. The bulk are holiday apartments and houses, plus small, mostly owner-run hotels in town, a few hostels for the surf crowd and fincas out in the countryside. What it costs comes down mostly to the season: it climbs in the windy high summer and drops noticeably off-season.',
    types: [
      { id: 'apartments', name: 'Holiday apartments & houses', note: 'The largest choice — from a simple flat to a modern penthouse with a pool. Densest in La Marina and the new town, ideal for self-caterers, families and anyone with kit.' },
      { id: 'hotels', name: 'Small hotels & boutique', note: 'Modest in number and often owner-run, many in and around the old town and along the beach road. Mid to upper level; you won’t find the big chains here.' },
      { id: 'hostels', name: 'Hostels & guesthouses', note: 'For the surf and kite crowd: simple beds, often with a shared kitchen and space for a board. Cheap, sociable, usually central or near the beach.' },
      { id: 'fincas', name: 'Fincas & country houses', note: 'In the countryside towards the natural park: quiet, space and a view — but you need the car for every trip into town or to the beach.' }
    ]
  },
  factorEyebrow: 'What matters in Tarifa',
  factor: {
    title: 'Wind and walks — the two questions',
    intro: 'Tarifa sits at the southernmost tip of the mainland, where the Atlantic and the Mediterranean meet, and counts as one of the windiest places in Europe. Two winds shape the day: the strong Levante from the east and the gentler Poniente from the west. The second question is the terrain — the town and the beach quarter are flat, and inland the hills climb noticeably.',
    copy: 'On the open beach the wind is the whole show — perfect for kiting, less so for quiet sunbathing. Behind the old-town walls it’s noticeably more sheltered, but narrow and cobbled. You stay on the most level ground down by the water, where the streets are wide and flat. The best area is the one whose **relationship to wind and walks** suits your holiday.',
    note: 'A day in Tarifa: down to the beach on flat paths in the morning, the town at midday, on the water in the afternoon — and dinner out of the wind in the evening?',
    day: ['Down to Los Lances beach on flat paths in the morning', 'Tapas in the old town at midday', 'Onto the water in the Levante in the afternoon', 'Sheltered behind the walls in the evening', 'At night — wind in the ears or quiet?']
  },
  zonesEyebrow: 'The areas',
  zonesTitle: 'Tarifa’s five areas',
  zonesIntro: 'From the flat coast to the rising inland: five areas that differ not by their sights but by daily life — how flat the walk is, how close the beach and the town are, and how much car you need.',
  zones: [
    {
      id: 'casco',
      sub: 'Zone 1 · Casco Antiguo',
      h3: 'The historic old town — flat, but narrow and cobbled',
      desc: 'Inside the old walls: white, very narrow and winding lanes, built on purpose as shelter from wind and heat. The ground is largely flat, but cobbled throughout. Effectively a pedestrian zone — everything on foot, and no parking right at the accommodations.',
      idealFor: 'Those who want to live in the thick of it, among tapas bars and shops, and shut out the wind.',
      honest: 'Suitcases roll in over cobbles from the edge of the old town; loading and unloading big kite kit daily is a chore, and parking is tight.'
    },
    {
      id: 'centro',
      sub: 'Zone 2 · Centre & new town',
      h3: 'The urban centre — flat and practical for daily life',
      desc: 'Flat ground around the historic core, with a modern street grid and paved pavements. This is where the density of supermarkets and everyday infrastructure is highest.',
      idealFor: 'Families and self-caterers who want to shop on foot and keep the car handy on the street for trips to further beaches.',
      honest: 'No picture-postcard cobbles and less old-town romance — but easy to walk and practical.'
    },
    {
      id: 'losLancesSur',
      sub: 'Zone 3 · Los Lances Sur',
      h3: 'The beach quarter itself — flat, at the water, where we live',
      desc: 'Completely flat coastal ground at sea level, right behind the southern end of the kilometre-long sandy beach. Wide, paved streets, no climbs and — compared with the old town — a very relaxed parking situation. This is where the Barrio La Marina lies.',
      quarters: [
        { id: 'marina', name: 'La Marina', note: 'Modern, wide streets, underground garages and lifts, the beach and promenade at the door. On flat paths a few minutes to the supermarkets and cafés of the new town — this is where AMARA is.' }
      ],
      idealFor: 'Surfers and families with kit and beach gear who want to walk to the water and leave the car for the everyday.',
      honest: 'More open and windier than behind the walls; if you want absolute quiet away from it all, the outskirts suit you better.'
    },
    {
      id: 'hanglagen',
      sub: 'Zone 4 · Hillside districts to the north',
      h3: 'The higher districts — a view, but a climb',
      desc: 'Inland, beyond the coastal strip and the old town, the ground climbs noticeably. The residential areas run up the slope, partly over steep cuestas — in return, a spectacular view across the Strait of Gibraltar.',
      idealFor: 'Those after the view and a little distance from the bustle, and mobile enough for the climb.',
      honest: 'The way back from the beach or after dinner is tiring on foot; for a pushchair or limited mobility these areas are less advisable.'
    },
    {
      id: 'umland',
      sub: 'Zone 5 · Outskirts & coastal urbanisations',
      h3: 'Valdevaqueros, Punta Paloma, El Cuartón — space and dunes',
      desc: 'El Cuartón and La Peña sit inland on the steeper slopes of the natural parks; the beach zones of Valdevaqueros and Punta Paloma to the west are shaped by huge sand dunes and a wide, barely built-up setting. Plenty of quiet away from the summer bustle.',
      idealFor: 'Those who put space, nature and closeness to the western kite spots above short walks in town.',
      honest: 'The direct infrastructure is much thinner here — for shopping or the trip into the centre a rental car is essential.'
    }
  ],
  labelIdealFor: 'Best for',
  labelHonest: 'Honestly',
  whoTitle: 'Who Tarifa is ideal for',
  whoIntro: 'Tarifa suits guests who want wind, water and a lively old town between two seas — with the kite grounds at the door. Those who mainly want calm, wind-free beach days are better off on the more sheltered coast around Nerja.',
  who: [
    { id: 'families', title: 'Families', text: 'A flat, wide beach to run around on, level paths by the water for pushchairs and beach gear, plus the old town to wander — Tarifa is easy-going for kids.' },
    { id: 'kite', title: 'Kite & windsurfers', text: 'Los Lances and Valdevaqueros at the door, Levante and Poniente almost all year.' },
    { id: 'active', title: 'Active & nature lovers', text: 'Walking on the cape, whale-watching in the strait, trips to Bolonia — between two seas.' },
    { id: 'longstay', title: 'Peace-seekers', text: 'Those who want to switch off find space and quiet in the outskirts — and everyday life and buzz still in town.' }
  ],
  pointer: {
    text: '**Not sure how much wind you want?** The wind is Tarifa’s whole thing — gentle on some days, strong on others. A look at the winds and the spots helps you choose.',
    linkLabel: 'See wind & kitesurfing in Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Why we chose this spot',
    title: 'La Marina — flat by the water, right in it and yet ready for the spots',
    caption: 'La Marina lies in Los Lances Sur: level ground right behind the beach, a fluid transition into the new town.',
    mapNote: '(see the orientation map above)',
    lead: 'In Tarifa you often have to choose: beach *or* town, wind *or* quiet, a view *or* short walks. **AMARA is in La Marina** — the flat beach quarter in Los Lances Sur. Wide, level streets, an underground garage and a lift, the beach at the door and, on flat paths, a few minutes to the supermarkets and cafés of the new town. You can leave the car for the everyday — and still have it ready when you set off with the kit to the spots at Valdevaqueros. Outside the high summer it really comes into its own: little traffic, short walks, and wind Tarifa has almost all year.',
    facts: ['**Flat & level** — wide streets, underground garage, lift, no cobbles', '**Beach at the door** — on foot to the water, with a board or a pushchair', '**New town in minutes** — supermarkets and cafés on level paths', '**Car ready** — leave it for the everyday, ready for Valdevaqueros'],
    honest: 'To stay honest: behind the old-town walls you live more sheltered from the wind, and the view across the strait is up on the hillsides. For flat walks, beach and town in one — especially with kit or kids — La Marina is just right.'
  }
};

const es: WhereToStayCopy = {
  hero: {
    eyebrow: 'Dónde alojarse · Tarifa',
    title: 'Dónde alojarse en Tarifa',
    lede: 'Un extremo ventoso entre dos mares — un llano barrio de playa junto al agua, un casco amurallado y laderas que ascienden con vistas.',
    body: 'Donde el Atlántico y el Mediterráneo se encuentran: un casco antiguo de aire árabe tras murallas centenarias, la playa kilométrica de Los Lances y viento todo el año. Dos cosas deciden dónde os conviene alojaros — cuánto viento queréis en la puerta y cómo es el terreno: suelo llano y a ras del agua o laderas que suben con vistas al estrecho. Nosotros vivimos en el llano La Marina, justo detrás de la playa.',
    traits: ['**Levante y Poniente**', 'Llano junto al agua', 'Casco amurallado', 'Zona de kite', 'Todo el año'],
    stats: [
      { id: 'winds', k: '2', l: 'vientos que marcan el día: Levante del este, Poniente del oeste' },
      { id: 'beach', k: '10 km', l: 'arena abierta hacia el norte: de Los Lances a Valdevaqueros' },
      { id: 'parts', k: '5', l: 'zonas con un día a día muy distinto — de lo llano junto al agua a la ladera' }
    ]
  },
  heroCtaZones: 'Ver las cinco zonas',
  glanceTitle: '¿Qué parte encaja con vosotros?',
  glanceIntro: 'Dos preguntas deciden en Tarifa: cuánto viento queréis en la puerta — y cuán llano debe ser el paseo. Después las zonas se ordenan casi solas.',
  glance: [
    { id: 'losLancesSur', title: 'Llano y junto al agua', blurb: 'Los Lances Sur con La Marina — calles a nivel, playa en la puerta, aparcar sin agobios' },
    { id: 'centro', title: 'En pleno pueblo', blurb: 'Casco antiguo y ciudad nueva — todo cerca, supermercados, cafeterías; las callejuelas estrechas y al abrigo' },
    { id: 'hanglagen', title: 'Altura, calma y amplitud', blurb: 'Laderas y afueras — vistas al estrecho, pero cuesta y coche' }
  ],
  accommodation: {
    eyebrow: 'Qué ofrece Tarifa para dormir',
    title: 'Del hostel surfero a la finca',
    intro: 'Tarifa no es lugar de grandes moles hoteleras. El grueso son apartamentos y casas de vacaciones, además de hoteles pequeños, casi siempre de gestión familiar, en el pueblo, algunos hostels para el ambiente surfero y fincas en el campo. El precio depende sobre todo de la temporada: sube en el ventoso pleno verano y baja de forma notable en temporada baja.',
    types: [
      { id: 'apartments', name: 'Apartamentos y casas de vacaciones', note: 'La mayor oferta — desde el piso sencillo hasta el ático moderno con piscina. Más densa en La Marina y la ciudad nueva, ideal para quien cocina, familias y quien lleva material.' },
      { id: 'hotels', name: 'Hoteles pequeños y boutique', note: 'Pocos y a menudo de gestión familiar, muchos en el casco antiguo y sus alrededores y en la calle de la playa. Nivel medio-alto; grandes cadenas aquí no hay.' },
      { id: 'hostels', name: 'Hostels y pensiones', note: 'Para el ambiente del surf y el kite: camas sencillas, a menudo con cocina común y sitio para la tabla. Económicos, sociables, casi siempre céntricos o junto a la playa.' },
      { id: 'fincas', name: 'Fincas y casas de campo', note: 'En el campo hacia el parque natural: calma, amplitud y vistas — pero necesitáis el coche para cada ida al pueblo o a la playa.' }
    ]
  },
  factorEyebrow: 'Lo que cuenta en Tarifa',
  factor: {
    title: 'Viento y caminos — las dos preguntas',
    intro: 'Tarifa se asienta en el extremo más al sur del continente, donde el Atlántico y el Mediterráneo se encuentran, y está considerada uno de los lugares más ventosos de Europa. Dos vientos marcan el día: el fuerte Levante del este y el más suave Poniente del oeste. La segunda pregunta es el terreno — el pueblo y el barrio de playa son llanos, y hacia el interior las laderas suben de forma notable.',
    copy: 'En la playa abierta el viento es el protagonista — ideal para el kite, menos para tomar el sol con calma. Tras las murallas del casco se está bastante más resguardado, pero estrecho y con adoquines. Donde más llano se vive es abajo, junto al agua, con calles anchas y a nivel. La mejor zona es aquella cuya **relación con el viento y los caminos** encaja con vuestras vacaciones.',
    note: 'Un día en Tarifa: por la mañana a la playa por caminos llanos, al mediodía el pueblo, por la tarde al agua — ¿y a cenar al abrigo del viento por la noche?',
    day: ['Por la mañana a la playa de Los Lances por caminos llanos', 'Al mediodía, tapas en el casco', 'Por la tarde, al agua con Levante', 'Por la noche, al abrigo de las murallas', 'De madrugada, ¿rumor del viento o calma?']
  },
  zonesEyebrow: 'Las zonas',
  zonesTitle: 'Las cinco zonas de Tarifa',
  zonesIntro: 'De la costa llana al interior que asciende: cinco zonas que no se distinguen por sus atractivos, sino por el día a día — cuán llano es el paseo, cuán cerca quedan la playa y el pueblo y cuánto coche necesitáis.',
  zones: [
    {
      id: 'casco',
      sub: 'Zona 1 · Casco antiguo',
      h3: 'El casco histórico — llano, pero estrecho y adoquinado',
      desc: 'Dentro de las viejas murallas: callejuelas blancas, muy estrechas y sinuosas, trazadas a propósito como refugio del viento y el calor. El terreno es en su mayoría llano, pero de adoquín por todas partes. En la práctica, una zona peatonal — todo a pie y sin aparcamiento junto a los alojamientos.',
      idealFor: 'Quien quiere vivir en plena vida, entre bares de tapas y tiendas, y dejar el viento fuera.',
      honest: 'Las maletas ruedan sobre adoquines desde el borde del casco; cargar y descargar a diario el material de kite es incómodo, y aparcar es difícil.'
    },
    {
      id: 'centro',
      sub: 'Zona 2 · Centro y ciudad nueva',
      h3: 'El centro urbano — llano y práctico para el día a día',
      desc: 'Terreno llano en torno al núcleo histórico, con trazado moderno y aceras pavimentadas. Aquí es donde más densidad hay de supermercados e infraestructura cotidiana.',
      idealFor: 'Familias y quienes cocinan, que quieren comprar a pie y tener el coche a mano en la calle para ir a playas más lejanas.',
      honest: 'Sin adoquines de postal y con menos encanto de casco antiguo — pero fácil de caminar y práctico.'
    },
    {
      id: 'losLancesSur',
      sub: 'Zona 3 · Los Lances Sur',
      h3: 'El propio barrio de playa — llano, junto al agua, donde vivimos',
      desc: 'Terreno costero completamente llano a nivel del mar, justo detrás del extremo sur de la playa kilométrica. Calles anchas y pavimentadas, sin cuestas y — comparado con el casco — una situación de aparcamiento muy relajada. Aquí se encuentra el Barrio La Marina.',
      quarters: [
        { id: 'marina', name: 'La Marina', note: 'Calles modernas y anchas, garajes subterráneos y ascensores, la playa y el paseo en la puerta. Por caminos llanos, a pocos minutos de los supermercados y cafeterías de la ciudad nueva — aquí vive AMARA.' }
      ],
      idealFor: 'Surfistas y familias con material y bártulos de playa que quieren ir al agua a pie y dejar el coche para el día a día.',
      honest: 'Más abierto y ventoso que tras las murallas; quien busca calma absoluta lejos de todo está mejor en las afueras.'
    },
    {
      id: 'hanglagen',
      sub: 'Zona 4 · Laderas al norte',
      h3: 'Los barrios altos — vistas, pero cuesta',
      desc: 'Hacia el interior, más allá de la franja costera y el casco, el terreno sube de forma notable. Las zonas residenciales trepan por la ladera, en parte por cuestas empinadas — a cambio, vistas espectaculares del estrecho de Gibraltar.',
      idealFor: 'Quien busca las vistas y algo de distancia del bullicio, y tiene movilidad para la cuesta.',
      honest: 'La vuelta de la playa o tras la cena se hace pesada a pie; para carritos o movilidad reducida estas zonas son menos recomendables.'
    },
    {
      id: 'umland',
      sub: 'Zona 5 · Afueras y urbanizaciones de costa',
      h3: 'Valdevaqueros, Punta Paloma, El Cuartón — amplitud y dunas',
      desc: 'El Cuartón y La Peña quedan tierra adentro en las laderas más empinadas de los parques naturales; las zonas de playa de Valdevaqueros y Punta Paloma al oeste las marcan enormes dunas de arena y un entorno amplio y apenas urbanizado. Mucha calma lejos del bullicio veraniego.',
      idealFor: 'Quien pone la amplitud, la naturaleza y la cercanía a los spots de kite del oeste por encima de tenerlo todo cerca en el pueblo.',
      honest: 'La infraestructura directa aquí es bastante más escasa — para la compra o ir al centro, el coche de alquiler es imprescindible.'
    }
  ],
  labelIdealFor: 'Ideal para',
  labelHonest: 'Con franqueza',
  whoTitle: 'Para quién es ideal Tarifa',
  whoIntro: 'Tarifa encaja con quienes quieren viento, agua y un casco animado entre dos mares — con la zona de kite en la puerta. Quien busca sobre todo playa tranquila sin viento está mejor en la costa más resguardada de Nerja.',
  who: [
    { id: 'families', title: 'Familias', text: 'Playa llana y amplia para corretear, caminos a nivel junto al agua para carritos y bártulos de playa, y además el casco para pasear — Tarifa es cómoda para los niños.' },
    { id: 'kite', title: 'Kite y windsurfistas', text: 'Los Lances y Valdevaqueros en la puerta, Levante y Poniente casi todo el año.' },
    { id: 'active', title: 'Activos y amantes de la naturaleza', text: 'Senderismo en el cabo, avistamiento de cetáceos en el estrecho, excursiones a Bolonia — entre dos mares.' },
    { id: 'longstay', title: 'Quienes buscan calma', text: 'Quien quiere desconectar encuentra amplitud y calma en las afueras — y en el pueblo, aun así, vida diaria y ambiente.' }
  ],
  pointer: {
    text: '**¿Aún no sabéis cuánto viento queréis?** El viento es la seña de Tarifa — suave unos días, fuerte otros. Un vistazo a los vientos y las zonas ayuda a decidir.',
    linkLabel: 'Ver viento y kitesurf en Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Por qué elegimos esta ubicación',
    title: 'La Marina — llana junto al agua, en el centro y lista para los spots',
    caption: 'La Marina está en Los Lances Sur: terreno llano justo detrás de la playa, con paso fluido a la ciudad nueva.',
    mapNote: '(ver el mapa de orientación arriba)',
    lead: 'En Tarifa a menudo hay que elegir: playa *o* pueblo, viento *o* calma, vistas *o* todo cerca. **AMARA está en La Marina** — el llano barrio de playa de Los Lances Sur. Calles anchas y a nivel, garaje subterráneo y ascensor, la playa en la puerta y, por caminos llanos, a pocos minutos de los supermercados y cafeterías de la ciudad nueva. El coche podéis dejarlo para el día a día — y tenerlo listo cuando salís con el material a los spots de Valdevaqueros. Fuera del pleno verano es cuando más luce: poco trajín, todo cerca, y viento en Tarifa hay casi todo el año.',
    facts: ['**Llano y a nivel** — calles anchas, garaje, ascensor, sin adoquines', '**Playa en la puerta** — al agua a pie, con tabla o carrito', '**Ciudad nueva en minutos** — supermercados y cafeterías por caminos llanos', '**Coche listo** — dejarlo para el día a día, a punto para Valdevaqueros'],
    honest: 'Para ser honestos: tras las murallas se vive más al abrigo del viento, y las vistas del estrecho están arriba, en las laderas. Para caminos llanos, playa y pueblo en uno — sobre todo con material o niños — La Marina es justo lo que buscáis.'
  }
};

const nl: WhereToStayCopy = {
  hero: {
    eyebrow: 'Waar overnachten · Tarifa',
    title: 'Waar overnachten in Tarifa',
    lede: 'Een winderige landtong tussen twee zeeën — een vlakke strandwijk aan het water, een ommuurde oude stad en oplopende hellingen met uitzicht.',
    body: 'Waar de Atlantische Oceaan en de Middellandse Zee elkaar raken: een Moors gekleurde oude stad achter eeuwenoude muren, het kilometerslange strand van Los Lances en wind het hele jaar. Twee dingen bepalen waar je het beste zit — hoeveel wind je voor de deur wilt en hoe het terrein is: vlakke, egale grond beneden aan het water of oplopende hellingen met zicht over de zeestraat. Wij wonen in het vlakke La Marina, vlak achter het strand.',
    traits: ['**Levante & Poniente**', 'Vlak aan het water', 'Ommuurde oude stad', 'Kitegebied', 'Het hele jaar'],
    stats: [
      { id: 'winds', k: '2', l: 'bepalende winden: Levante uit het oosten, Poniente uit het westen' },
      { id: 'beach', k: '10 km', l: 'open zand naar het noorden: Los Lances tot Valdevaqueros' },
      { id: 'parts', k: '5', l: 'gebieden met een merkbaar ander dagritme — van vlak aan het water tot helling' }
    ]
  },
  heroCtaZones: 'Bekijk de vijf gebieden',
  glanceTitle: 'Welk deel past bij jullie?',
  glanceIntro: 'Twee vragen beslissen in Tarifa: hoeveel wind je voor de deur wilt — en hoe vlak de looproute moet zijn. Daarna sorteren de gebieden zich bijna vanzelf.',
  glance: [
    { id: 'losLancesSur', title: 'Vlak & direct aan het water', blurb: 'Los Lances Sur met La Marina — vlakke straten, strand voor de deur, ontspannen parkeren' },
    { id: 'centro', title: 'Middenin het dorp', blurb: 'Oude stad en nieuwe stad — korte loopjes, supermarkten, cafés; de straatjes smal en beschut' },
    { id: 'hanglagen', title: 'Hoogte, rust & ruimte', blurb: 'Hellingwijken en buitengebied — zicht over de zeestraat, maar klim en auto' }
  ],
  accommodation: {
    eyebrow: 'Wat Tarifa aan bedden heeft',
    title: 'Van surfhostel tot finca',
    intro: 'Tarifa is geen plek van grote hotelblokken. Het gros zijn vakantieappartementen en -huizen, plus kleine, meestal familiehotels in het dorp, een paar hostels voor de surfscene en fincas in het buitengebied. Wat het kost hangt vooral van het seizoen af: het loopt op in de winderige hoogzomer en zakt merkbaar in het laagseizoen.',
    types: [
      { id: 'apartments', name: 'Vakantieappartementen & -huizen', note: 'Het grootste aanbod — van het eenvoudige appartement tot het moderne penthouse met zwembad. Het dichtst in La Marina en de nieuwe stad, ideaal voor zelfverzorgers, gezinnen en iedereen met materiaal.' },
      { id: 'hotels', name: 'Kleine hotels & boutique', note: 'Beperkt in aantal en vaak familiebeheer, veel in en om de oude stad en aan de strandweg. Midden- tot hoger niveau; grote ketens vind je hier niet.' },
      { id: 'hostels', name: 'Hostels & pensions', note: 'Voor de surf- en kitescene: eenvoudige bedden, vaak met gedeelde keuken en plek voor je board. Goedkoop, gezellig, meestal centraal of vlak bij het strand.' },
      { id: 'fincas', name: 'Fincas & landhuizen', note: 'In het buitengebied richting natuurpark: rust, ruimte en uitzicht — maar je hebt de auto nodig voor elke rit naar het dorp of het strand.' }
    ]
  },
  factorEyebrow: 'Waar het in Tarifa om gaat',
  factor: {
    title: 'Wind en wegen — de twee vragen',
    intro: 'Tarifa ligt op de zuidelijkste punt van het vasteland, waar de Atlantische Oceaan en de Middellandse Zee elkaar raken, en geldt als een van de winderigste plekken van Europa. Twee winden bepalen de dag: de krachtige Levante uit het oosten en de mildere Poniente uit het westen. De tweede vraag is het terrein — het dorp en de strandwijk zijn vlak, en landinwaarts lopen de hellingen merkbaar op.',
    copy: 'Op het open strand is de wind het hele programma — ideaal om te kiten, minder om rustig te zonnen. Achter de stadsmuren is het merkbaar beschutter, maar smal en met kasseien. Het vlakst woon je beneden aan het water, waar de straten breed en vlak zijn. Het beste gebied is dat waarvan de **verhouding tot wind en wegen** bij jullie vakantie past.',
    note: 'Een dag in Tarifa: ’s ochtends over vlakke wegen naar het strand, rond het middaguur het dorp, in de namiddag het water op — en ’s avonds uit de wind dineren?',
    day: ['’s Ochtends over vlakke wegen naar het strand van Los Lances', 'Rond het middaguur tapas in de oude stad', 'In de namiddag het water op bij Levante', '’s Avonds beschut achter de muren', '’s Nachts — windgeruis of rust?']
  },
  zonesEyebrow: 'De gebieden',
  zonesTitle: 'Tarifa’s vijf gebieden',
  zonesIntro: 'Van de vlakke kust naar het oplopende binnenland: vijf gebieden die niet verschillen in bezienswaardigheden, maar in dagelijks leven — hoe vlak de looproute is, hoe dichtbij strand en dorp liggen en hoeveel auto je nodig hebt.',
  zones: [
    {
      id: 'casco',
      sub: 'Zone 1 · Casco Antiguo',
      h3: 'De historische oude stad — vlak, maar smal en kasseien',
      desc: 'Binnen de oude muren: witte, heel smalle en kronkelige straatjes, bewust gebouwd als beschutting tegen wind en hitte. Het terrein is grotendeels vlak, maar overal kasseien. In de praktijk een voetgangerszone — alles te voet, en geen parkeerplaats direct bij de accommodaties.',
      idealFor: 'Wie middenin het leven wil wonen, tussen tapasbars en winkels, en de wind buiten wil sluiten.',
      honest: 'Koffers rollen over kasseien vanaf de rand van de oude stad; dagelijks groot kitemateriaal in- en uitladen is een gedoe, en parkeren is krap.'
    },
    {
      id: 'centro',
      sub: 'Zone 2 · Centrum & nieuwe stad',
      h3: 'Het stadscentrum — vlak en praktisch voor elke dag',
      desc: 'Vlak terrein rond de historische kern, met een modern stratenpatroon en verharde trottoirs. Hier is de dichtheid aan supermarkten en dagelijkse voorzieningen het hoogst.',
      idealFor: 'Gezinnen en zelfverzorgers die te voet willen boodschappen doen en de auto bij de hand houden aan de straat voor ritten naar verder gelegen stranden.',
      honest: 'Geen kasseien als op een ansichtkaart en minder oude-stadsromantiek — maar goed beloopbaar en praktisch.'
    },
    {
      id: 'losLancesSur',
      sub: 'Zone 3 · Los Lances Sur',
      h3: 'De strandwijk zelf — vlak, aan het water, waar wij wonen',
      desc: 'Volledig vlak kustgebied op zeeniveau, vlak achter het zuidelijke uiteinde van het kilometerslange zandstrand. Brede, verharde straten, geen klimmen en — vergeleken met de oude stad — een heel ontspannen parkeersituatie. Hier ligt het Barrio La Marina.',
      quarters: [
        { id: 'marina', name: 'La Marina', note: 'Moderne, brede straten, ondergrondse garages en liften, het strand en de boulevard voor de deur. Over vlakke wegen in een paar minuten bij de supermarkten en cafés van de nieuwe stad — hier woont AMARA.' }
      ],
      idealFor: 'Surfers en gezinnen met materiaal en strandspullen die te voet naar het water willen en de auto voor het dagelijkse laten staan.',
      honest: 'Opener en winderiger dan achter de muren; wie absolute rust weg van alles zoekt, zit beter in het buitengebied.'
    },
    {
      id: 'hanglagen',
      sub: 'Zone 4 · Hellingwijken in het noorden',
      h3: 'De hoger gelegen wijken — uitzicht, maar klim',
      desc: 'Landinwaarts, voorbij de kuststrook en de oude stad, loopt het terrein merkbaar op. De woonwijken klimmen tegen de helling op, deels over steile cuestas — in ruil daarvoor een spectaculair zicht over de Straat van Gibraltar.',
      idealFor: 'Wie het uitzicht en wat afstand tot de drukte zoekt en fit genoeg is voor de klim.',
      honest: 'De terugweg van het strand of na het diner is te voet vermoeiend; voor een kinderwagen of beperkte mobiliteit zijn deze wijken minder aan te raden.'
    },
    {
      id: 'umland',
      sub: 'Zone 5 · Buitenwijken & kusturbanisaties',
      h3: 'Valdevaqueros, Punta Paloma, El Cuartón — ruimte en duinen',
      desc: 'El Cuartón en La Peña liggen landinwaarts op de steilere hellingen van de natuurparken; de strandzones Valdevaqueros en Punta Paloma in het westen worden getekend door machtige zandduinen en een weidse, nauwelijks bebouwde omgeving. Veel rust weg van de zomerdrukte.',
      idealFor: 'Wie ruimte, natuur en nabijheid tot de westelijke kitespots boven korte loopjes in het dorp stelt.',
      honest: 'De directe voorzieningen zijn hier flink dunner — voor boodschappen of de rit naar het centrum is een huurauto onmisbaar.'
    }
  ],
  labelIdealFor: 'Ideaal voor',
  labelHonest: 'Eerlijk gezegd',
  whoTitle: 'Voor wie Tarifa ideaal is',
  whoIntro: 'Tarifa past bij gasten die wind, water en een levendige oude stad tussen twee zeeën willen — met het kitegebied voor de deur. Wie vooral rustige stranddagen zonder wind zoekt, zit beter aan de beschuttere kust rond Nerja.',
  who: [
    { id: 'families', title: 'Gezinnen', text: 'Een vlak, weids strand om op te ravotten, vlakke wegen aan het water voor kinderwagens en strandspullen, plus de oude stad om te slenteren — Tarifa is ontspannen voor kinderen.' },
    { id: 'kite', title: 'Kite- & windsurfers', text: 'Los Lances en Valdevaqueros voor de deur, Levante en Poniente bijna het hele jaar.' },
    { id: 'active', title: 'Actievelingen & natuurliefhebbers', text: 'Wandelen op de kaap, walvissen spotten in de zeestraat, uitstapjes naar Bolonia — tussen twee zeeën.' },
    { id: 'longstay', title: 'Rustzoekers', text: 'Wie wil ontschakelen vindt in het buitengebied ruimte en rust — en in het dorp toch dagelijks leven en drukte.' }
  ],
  pointer: {
    text: '**Nog niet zeker hoeveel wind je wilt?** De wind is hét kenmerk van Tarifa — de ene dag zacht, de andere krachtig. Een blik op de winden en de spots helpt bij de keuze.',
    linkLabel: 'Bekijk wind & kitesurfen in Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Waarom wij hier zitten',
    title: 'La Marina — vlak aan het water, middenin en toch klaar voor de spots',
    caption: 'La Marina ligt in Los Lances Sur: vlakke grond vlak achter het strand, met een vloeiende overgang naar de nieuwe stad.',
    mapNote: '(zie de oriëntatiekaart hierboven)',
    lead: 'In Tarifa moet je vaak kiezen: strand *of* dorp, wind *of* rust, uitzicht *of* korte loopjes. **AMARA ligt in La Marina** — de vlakke strandwijk in Los Lances Sur. Brede, vlakke straten, een ondergrondse garage en een lift, het strand voor de deur en, over vlakke wegen, een paar minuten naar de supermarkten en cafés van de nieuwe stad. De auto kun je voor het dagelijkse laten staan — en toch bij de hand hebben als je met het materiaal naar de spots bij Valdevaqueros vertrekt. Juist buiten de hoogzomer komt dat tot zijn recht: weinig drukte, korte loopjes, en wind heeft Tarifa bijna het hele jaar.',
    facts: ['**Vlak & egaal** — brede straten, ondergrondse garage, lift, geen kasseien', '**Strand voor de deur** — te voet naar het water, met board of kinderwagen', '**Nieuwe stad in minuten** — supermarkten en cafés over vlakke wegen', '**Auto klaar** — voor het dagelijkse laten staan, klaar voor Valdevaqueros'],
    honest: 'Eerlijk blijft: achter de stadsmuren woon je beschutter tegen de wind, en het zicht over de zeestraat heb je boven in de hellingwijken. Voor vlakke wegen, strand en dorp in één — zeker met materiaal of kinderen — is La Marina precies goed.'
  }
};

const sv: WhereToStayCopy = {
  hero: {
    eyebrow: 'Var man bor · Tarifa',
    title: 'Var man bor i Tarifa',
    lede: 'En blåsig udde mellan två hav — en flack strandstadsdel vid vattnet, en muromgärdad gamla stan och stigande sluttningar med utsikt.',
    body: 'Där Atlanten och Medelhavet möts: en morisk gamla stan bakom uråldriga murar, den kilometerlånga stranden Los Lances och vind året runt. Två saker avgör var ni bor bäst — hur mycket vind ni vill ha vid dörren och hur terrängen är: flack, jämn mark nere vid vattnet eller stigande sluttningar med utsikt över sundet. Vi bor i flacka La Marina, precis bakom stranden.',
    traits: ['**Levante & Poniente**', 'Flackt vid vattnet', 'Muromgärdad gamla stan', 'Kiterevir', 'Året runt'],
    stats: [
      { id: 'winds', k: '2', l: 'präglande vindar: Levante från öst, Poniente från väst' },
      { id: 'beach', k: '10 km', l: 'öppen sand norrut: Los Lances till Valdevaqueros' },
      { id: 'parts', k: '5', l: 'lägen med märkbart olika vardag — från flackt vid vattnet till sluttning' }
    ]
  },
  heroCtaZones: 'Se de fem lägena',
  glanceTitle: 'Vilken del passar er?',
  glanceIntro: 'Två frågor avgör i Tarifa: hur mycket vind ni vill ha vid dörren — och hur flack promenaden ska vara. Sedan sorterar sig lägena nästan av sig själva.',
  glance: [
    { id: 'losLancesSur', title: 'Flackt & direkt vid vattnet', blurb: 'Los Lances Sur med La Marina — jämna gator, strand vid dörren, avslappnad parkering' },
    { id: 'centro', title: 'Mitt i orten', blurb: 'Gamla stan och nya staden — korta avstånd, mataffärer, kaféer; gränderna trånga och i lä' },
    { id: 'hanglagen', title: 'Höjd, lugn & rymd', blurb: 'Sluttningskvarter och omland — utsikt över sundet, men backe och bil' }
  ],
  accommodation: {
    eyebrow: 'Vad Tarifa har av sängar',
    title: 'Från surfhostel till finca',
    intro: 'Tarifa är ingen plats för stora hotellblock. Merparten är semesterlägenheter och -hus, plus små, oftast familjedrivna hotell i orten, några hostel för surfarlivet och fincas på landsbygden. Vad det kostar beror mest på säsongen: det stiger under den blåsiga högsommaren och sjunker märkbart under lågsäsong.',
    types: [
      { id: 'apartments', name: 'Semesterlägenheter & -hus', note: 'Det största utbudet — från den enkla lägenheten till den moderna takvåningen med pool. Tätast i La Marina och nya staden, perfekt för självhushåll, familjer och alla med utrustning.' },
      { id: 'hotels', name: 'Små hotell & boutique', note: 'Få till antalet och ofta familjedrivna, många i och kring gamla stan och längs strandgatan. Mellan- till högre nivå; de stora kedjorna finns inte här.' },
      { id: 'hostels', name: 'Hostel & pensionat', note: 'För surf- och kitelivet: enkla sängar, ofta med gemensamt kök och plats för brädan. Billigt, sällskapligt, oftast centralt eller nära stranden.' },
      { id: 'fincas', name: 'Fincas & lanthus', note: 'På landsbygden mot naturparken: lugn, rymd och utsikt — men ni behöver bilen för varje resa in till orten eller till stranden.' }
    ]
  },
  factorEyebrow: 'Vad som räknas i Tarifa',
  factor: {
    title: 'Vind och vägar — de två frågorna',
    intro: 'Tarifa ligger på fastlandets sydligaste spets, där Atlanten och Medelhavet möts, och räknas som en av Europas blåsigaste platser. Två vindar präglar dagen: den kraftiga Levante från öst och den mildare Poniente från väst. Den andra frågan är terrängen — orten och strandstadsdelen är flacka, och inåt land stiger sluttningarna märkbart.',
    copy: 'På den öppna stranden är vinden hela poängen — perfekt för kite, mindre för lugnt solbad. Bakom gamla stans murar är det märkbart mer i lä, men trångt och med kullersten. Flackast bor ni nere vid vattnet, där gatorna är breda och jämna. Det bästa läget är det vars **förhållande till vind och vägar** passar er semester.',
    note: 'En dag i Tarifa: på morgonen till stranden på flacka vägar, vid lunch orten, på eftermiddagen ut på vattnet — och middag i lä på kvällen?',
    day: ['På morgonen till Los Lances strand på flacka vägar', 'Vid lunch tapas i gamla stan', 'På eftermiddagen ut på vattnet i Levante', 'På kvällen i lä bakom murarna', 'På natten — vindbrus eller lugn?']
  },
  zonesEyebrow: 'Lägena',
  zonesTitle: 'Tarifas fem lägen',
  zonesIntro: 'Från den flacka kusten till det stigande inlandet: fem lägen som inte skiljer sig åt genom sevärdheter utan genom vardagen — hur flack promenaden är, hur nära strand och ort ligger och hur mycket bil ni behöver.',
  zones: [
    {
      id: 'casco',
      sub: 'Zon 1 · Casco Antiguo',
      h3: 'Den historiska gamla stan — flack, men trång och kullerstensbelagd',
      desc: 'Innanför de gamla murarna: vita, mycket trånga och slingrande gränder, medvetet byggda som skydd mot vind och hetta. Marken är till största delen flack, men kullersten överallt. I praktiken en gågata — allt till fots, och ingen parkering direkt vid boendena.',
      idealFor: 'Den som vill bo mitt i livet, bland tapasbarer och butiker, och stänga ute vinden.',
      honest: 'Resväskorna rullas över kullersten från gamla stans kant; att dagligen lasta i och ur stor kiteutrustning är besvärligt, och parkering är knapp.'
    },
    {
      id: 'centro',
      sub: 'Zon 2 · Centrum & nya staden',
      h3: 'Det urbana centrumet — flackt och praktiskt för vardagen',
      desc: 'Flack mark runt den historiska kärnan, med modernt gatunät och asfalterade trottoarer. Här är tätheten av mataffärer och vardagsservice som störst.',
      idealFor: 'Familjer och självhushåll som vill handla till fots och ha bilen nära på gatan för resor till mer avlägsna stränder.',
      honest: 'Ingen vykorts-kullersten och mindre gamla-stan-romantik — men lättgången och praktisk.'
    },
    {
      id: 'losLancesSur',
      sub: 'Zon 3 · Los Lances Sur',
      h3: 'Själva strandstadsdelen — flack, vid vattnet, där vi bor',
      desc: 'Helt flack kustmark i havsnivå, precis bakom den södra änden av den kilometerlånga sandstranden. Breda, asfalterade gator, inga backar och — jämfört med gamla stan — en mycket avslappnad parkeringssituation. Här ligger Barrio La Marina.',
      quarters: [
        { id: 'marina', name: 'La Marina', note: 'Moderna, breda gator, garage under jord och hissar, stranden och strandpromenaden vid dörren. På flacka vägar några minuter till mataffärer och kaféer i nya staden — här bor AMARA.' }
      ],
      idealFor: 'Surfare och familjer med utrustning och strandpackning som vill gå till vattnet och låta bilen stå i vardagen.',
      honest: 'Öppnare och blåsigare än bakom murarna; den som vill ha absolut lugn långt från allt trivs bättre i utkanterna.'
    },
    {
      id: 'hanglagen',
      sub: 'Zon 4 · Sluttningskvarter i norr',
      h3: 'De högre kvarteren — utsikt, men backe',
      desc: 'Inåt land, bortom kuststräckan och gamla stan, stiger marken märkbart. Bostadsområdena klättrar uppför sluttningen, delvis via branta cuestas — i gengäld en spektakulär utsikt över Gibraltarsundet.',
      idealFor: 'Den som söker utsikten och lite avstånd från vimlet, och är rörlig nog för backen.',
      honest: 'Vägen tillbaka från stranden eller efter middagen är tröttsam till fots; för barnvagn eller nedsatt rörlighet är dessa lägen mindre att rekommendera.'
    },
    {
      id: 'umland',
      sub: 'Zon 5 · Utkanter & kusturbanisationer',
      h3: 'Valdevaqueros, Punta Paloma, El Cuartón — rymd och dyner',
      desc: 'El Cuartón och La Peña ligger inåt land på naturparkernas brantare sluttningar; strandzonerna Valdevaqueros och Punta Paloma i väster präglas av mäktiga sanddyner och en vidsträckt, knappt bebyggd omgivning. Gott om lugn borta från sommarvimlet.',
      idealFor: 'Den som sätter rymd, natur och närhet till de västra kitespotarna framför korta avstånd i orten.',
      honest: 'Den direkta servicen är betydligt glesare här — för inköp eller resan in till centrum är en hyrbil ett måste.'
    }
  ],
  labelIdealFor: 'Passar för',
  labelHonest: 'Ärligt',
  whoTitle: 'Vem Tarifa är perfekt för',
  whoIntro: 'Tarifa passar gäster som vill ha vind, vatten och en livlig gamla stan mellan två hav — med kitereviret vid dörren. Den som främst vill ha lugna stranddagar utan vind trivs bättre på den mer skyddade kusten kring Nerja.',
  who: [
    { id: 'families', title: 'Familjer', text: 'En platt, vidsträckt strand att springa på, jämna vägar vid vattnet för barnvagnar och strandpackning, plus gamla stan att strosa i — Tarifa är avslappnat för barn.' },
    { id: 'kite', title: 'Kite- & vindsurfare', text: 'Los Lances och Valdevaqueros vid dörren, Levante och Poniente nästan hela året.' },
    { id: 'active', title: 'Aktiva & naturnära', text: 'Vandring på udden, valskådning i sundet, utflykter till Bolonia — mellan två hav.' },
    { id: 'longstay', title: 'Lugnsökare', text: 'Den som vill koppla av finner rymd och lugn i utkanterna — och ändå vardag och liv i orten.' }
  ],
  pointer: {
    text: '**Osäkra på hur mycket vind ni vill ha?** Vinden är Tarifas signum — mild vissa dagar, kraftig andra. En titt på vindarna och reviren hjälper er att välja.',
    linkLabel: 'Se vind & kitesurfing i Tarifa',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Därför valde vi det här läget',
    title: 'La Marina — flackt vid vattnet, mitt i och ändå redo för spotarna',
    caption: 'La Marina ligger i Los Lances Sur: jämn mark precis bakom stranden, med en flytande övergång till nya staden.',
    mapNote: '(se orienteringskartan ovan)',
    lead: 'I Tarifa måste man ofta välja: strand *eller* ort, vind *eller* lugn, utsikt *eller* korta avstånd. **AMARA ligger i La Marina** — den flacka strandstadsdelen i Los Lances Sur. Breda, jämna gator, garage under jord och hiss, stranden vid dörren och, på flacka vägar, några minuter till mataffärer och kaféer i nya staden. Bilen kan ni låta stå i vardagen — och ändå ha den redo när ni ger er av med utrustningen till spotarna vid Valdevaqueros. Just utanför högsommaren kommer det till sin rätt: lite folk, korta avstånd, och vind har Tarifa nästan hela året.',
    facts: ['**Flackt & jämnt** — breda gator, garage under jord, hiss, ingen kullersten', '**Stranden vid dörren** — till fots till vattnet, med bräda eller barnvagn', '**Nya staden på minuter** — mataffärer och kaféer på jämna vägar', '**Bilen redo** — låt den stå i vardagen, redo för Valdevaqueros'],
    honest: 'Ärligt talat: bakom gamla stans murar bor ni mer i lä, och utsikten över sundet har ni uppe i sluttningskvarteren. För flacka vägar, strand och ort i ett — särskilt med utrustning eller barn — är La Marina precis rätt.'
  }
};

export const tarifaWhereToStayBody: Record<AmaraLanguage, WhereToStayCopy> = {
  de,
  en,
  es,
  nl,
  sv
};
