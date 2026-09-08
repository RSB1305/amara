import type { AmaraLanguage } from '../types/seo';
import type { WhereToStayCopy } from './whereToStayCopy';

/**
 * Where-to-stay body copy for Frigiliana (Type A redesign, approved 2026-09-08).
 * Rendered by the shared WhereToStayBody.astro (LocationTopicHero + orientation
 * map + LocationModule + am-text-* roles, never bespoke CSS). Frigiliana's
 * decision `factor` is height/steps on the slope. Emphasis is **double
 * asterisks** for InlineEmphasis. Unit lists carry stable `id`s so the
 * locale-parity contract checks identity across the five languages. The booking
 * CTA comes from the shared trustLabels.book, not from here.
 */
const de: WhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Frigiliana',
    title: 'Wo in Frigiliana übernachten',
    lede: 'Weißes Bergdorf über der Küste, steil an den Hang gebaut.',
    body: 'Maurisches Erbe im Barribarto, Panorama bis zum Mittelmeer, Kunsthandwerk in den Gassen, Ruhe abseits der Küstenhektik. Doch Frigiliana ist ein Hangdorf: Wo ihr wohnt, entscheidet euren Alltag — und vor allem, wie viele Stufen zwischen euch und dem Morgenkaffee liegen.',
    traits: ['**Pueblo blanco** · weißes Bergdorf', 'Maurisches Erbe', 'Panorama zum Meer', 'Kunsthandwerk', 'Felsige Wanderwege'],
    stats: [
      { id: 'altitude', k: '300 m', l: 'über dem Meer — Hangdorf, kein flacher Badeort' },
      { id: 'coast', k: '6 km', l: 'Luftlinie zur Küste in Nerja' },
      { id: 'parts', k: '3', l: 'Teile mit spürbar anderem Alltag' }
    ]
  },
  heroCtaZones: 'Die drei Teile ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Drei Teile, drei Aufenthalte. Worin sie sich unterscheiden, entscheidet vor allem die Höhe am Hang — deshalb direkt danach der Blick auf die Stufen.',
  glance: [
    { id: 'altstadt', title: 'Historische Altstadt', blurb: 'Charme, maurische Gassen — aber steil und viele Stufen' },
    { id: 'neu', title: 'Der neue Teil', blurb: 'Flacher, einfacheres Parken — ohne das historische Flair' },
    { id: 'campo', title: 'El Campo', blurb: 'Raum, Ruhe, Panorama — Auto meist praktisch oder nötig' }
  ],
  factorEyebrow: 'Frigilianas Wahrzeichen',
  factor: {
    title: 'Alles eine Frage der Höhe',
    intro: 'Frigilianas eigentliches Wahrzeichen sind nicht die Blumen an den Wänden, sondern die Stufen. Der Ort zieht sich steil den Hang hinauf — und ihr lauft ihn nicht einmal, sondern den ganzen Tag.',
    copy: 'Zwei Adressen, kaum hundert Meter auseinander, können dreißig Höhenmeter und mehrere Treppen trennen. Auf der Karte ist alles nah — in den Beinen nicht. Deshalb entscheidet in Frigiliana nicht die Entfernung, sondern die **Höhe** über euren Alltag.',
    note: 'Ein normaler Tag heißt: hinauf, hinunter — und wieder hinauf.',
    day: ['Morgens hoch zum Kaffee', 'Mit Einkäufen zurück den Hang', 'Hinunter zum Strand — und wieder hoch', 'Abends zum Essen ins Dorf', 'Im Dunkeln der Heimweg bergauf']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Die drei Teile von Frigiliana',
  zonesIntro: 'Grob gibt es drei Welten: die historische Altstadt, den neueren Teil darunter und den Campo außerhalb. Jede löst das Rauf und Runter anders — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Die historische Altstadt',
      h3: 'Der Charme — und der Hang',
      desc: 'Weiß getünchte Gassen, der maurische Grundriss, Cafés und Restaurants vor der Tür. Wunderschön — aber deutlich steiler als der neuere Teil, und schon innerhalb der Altstadt macht die Höhe den Unterschied. Sie teilt sich in zwei Viertel:',
      quarters: [
        { id: 'barribajo', name: 'Barribajo', note: 'Unten, entlang der Hauptachse (Calle Real / Chorruelo): flacher, besser erreichbar — hier liegt auch AMARA.' },
        { id: 'barribarto', name: 'Barribarto', note: 'Höher und steiler: der malerische, verwinkelte maurische Kern — mit den meisten Stufen.' }
      ],
      idealFor: 'Kulturreisende, Paare, Ästhetiker — Dorfleben und Atmosphäre direkt vor der Tür.',
      honest: 'Autofrei, Kopfsteinpflaster, Stufen. **Wo genau** ihr wohnt, macht hier den größten Unterschied.'
    },
    {
      id: 'neu',
      sub: 'Der neuere Teil',
      h3: 'Praktisch, flacher — ohne den alten Charme',
      desc: 'Unterhalb und südlich der Altstadt liegt der neuere Teil: breitere Straßen, einfachere Zufahrt und Parken, weniger Stufen. Bequem im Alltag — moderner und funktionaler geprägt.',
      idealFor: 'Wer Bequemlichkeit, Auto-Zufahrt und wenige Stufen über das Altstadt-Flair stellt.',
      honest: 'Moderner und funktionaler geprägt, aber ohne die historische Atmosphäre des Barribarto — die Altstadt beginnt erst nach einem Weg.'
    },
    {
      id: 'campo',
      sub: 'El Campo',
      h3: 'Landhaus, Raum und Stille',
      desc: 'Draußen im Grünen: Landhäuser mit Platz, Privatsphäre und weitem Panorama über die Sierra bis zur Küste — oft mit Pool. Frigiliana wird zum Ort, in den ihr hineinfahrt, statt vor der Haustür zu beginnen.',
      idealFor: 'Wer bewusst Abgeschiedenheit, Natur und Raum sucht.',
      honest: 'Für Einkäufe, Restaurants und spontane Dorfbesuche ist ein Auto bei vielen Campo-Lagen praktisch oder notwendig.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Frigiliana ideal ist',
  whoIntro: 'Frigiliana passt zu Gästen, die das ruhige, ursprüngliche Andalusien abseits der Küstenhektik suchen. Wer Strand und Trubel vor der Tür will, ist unten in Nerja oft besser aufgehoben.',
  who: [
    { id: 'quiet', title: 'Ruhesuchende', text: 'Stille Gassen, frühe Morgen, ein Ort, der abends zur Ruhe kommt statt laut zu werden.' },
    { id: 'couples', title: 'Paare', text: 'Private Terrassen mit Blick übers Grün, kurze Wege zum Abendessen, Zeit zu zweit.' },
    { id: 'culture', title: 'Kulturreisende', text: 'Maurischer Grundriss im Barribarto, Werkstätten und Kunsthandwerk, gewachsene Geschichte.' },
    { id: 'aesthetes', title: 'Ästhetiker', text: 'Weiß getünchte Fassaden, Blumengassen, das Licht über den Plantagen bis zum Meer.' }
  ],
  pointer: {
    text: '**Noch nicht sicher — Berg oder Küste?** Frigiliana = Dorf, Ruhe, Atmosphäre. Nerja = Strand, Küstenalltag, mehr Trubel.',
    linkLabel: 'Frigiliana oder Nerja im Detail vergleichen',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Der Altstadt-Charme, ohne den ständigen Anstieg',
    caption: 'Die Altstadt steigt oberhalb der Hauptachse deutlich den Hang hinauf; AMARA liegt vergleichsweise tief an der Calle Chorruelo.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'Die Altstadt steigt vom Hauptweg steil an — viele historische Adressen liegen deutlich höher am Hang, oben im Barribarto. Unsere Lage im Barribajo, an der **Calle Chorruelo**, setzt direkt an der ebenen Hauptachse an — mit echter Altstadt vor der Haustür, aber ohne dass jeder Einkauf zur Bergetappe wird. Deshalb haben wir hier investiert und das Haus über zwei Jahre restauriert.',
    facts: ['**Mit dem Auto erreichbar** innerhalb der geltenden Altstadt-Zufahrtsfenster', '**Farah** hat nur eine Eingangsstufe', '**Lounis & Zaid**: private Terrassen mit Blick übers Grün bis zum Meer'],
    honest: 'Ehrlich bleibt: voll ebenerdig mit eigenem Parkplatz → der neue Teil. Echte Abgeschiedenheit → El Campo. Für Altstadt-Charme mit vergleichsweise wenig Höhenmetern ist unsere Lage besonders praktisch.'
  }
};

const en: WhereToStayCopy = {
  hero: {
    eyebrow: 'Where to stay · Frigiliana',
    title: 'Where to stay in Frigiliana',
    lede: 'A white hill village above the coast, built steeply into the slope.',
    body: 'Moorish heritage in Barribarto, panorama to the Mediterranean, craft workshops in the lanes, quiet away from the coastal bustle. But Frigiliana is a hillside village: where you stay shapes your day — and above all, how many steps lie between you and your morning coffee.',
    traits: ['**Pueblo blanco** · white hill village', 'Moorish heritage', 'Panorama to the sea', 'Craftwork', 'Rocky trails'],
    stats: [
      { id: 'altitude', k: '300 m', l: 'above the sea — a hill village, not a flat beach resort' },
      { id: 'coast', k: '6 km', l: 'as the crow flies to the coast at Nerja' },
      { id: 'parts', k: '3', l: 'parts with a noticeably different daily life' }
    ]
  },
  heroCtaZones: 'See the three parts',
  glanceTitle: 'Which part suits you?',
  glanceIntro: 'Three parts, three kinds of stay. What sets them apart is above all the height on the slope — which is why the steps come right after.',
  glance: [
    { id: 'altstadt', title: 'Historic old town', blurb: 'Charm, Moorish lanes — but steep and many steps' },
    { id: 'neu', title: 'The newer part', blurb: 'Flatter, easier parking — without the historic character' },
    { id: 'campo', title: 'El Campo', blurb: 'Space, quiet, panorama — a car usually handy or needed' }
  ],
  factorEyebrow: 'Frigiliana’s real landmark',
  factor: {
    title: 'It all comes down to height',
    intro: 'Frigiliana’s real landmark isn’t the flowers on the walls but the steps. The village climbs steeply up the slope — and you don’t walk it once, but all day.',
    copy: 'Two addresses barely a hundred metres apart can be separated by thirty vertical metres and several flights of steps. On the map everything is close — in your legs it isn’t. That’s why in Frigiliana it isn’t distance but **height** that decides your day.',
    note: 'A normal day means: up, down — and up again.',
    day: ['Up for morning coffee', 'Back up the slope with the shopping', 'Down to the beach — and up again', 'Out to dinner in the village', 'The walk home uphill in the dark']
  },
  zonesEyebrow: 'The locations',
  zonesTitle: 'The three parts of Frigiliana',
  zonesIntro: 'Broadly there are three worlds: the historic old town, the newer part below it, and the campo outside. Each solves the ups and downs differently — and trades something else for it.',
  zones: [
    {
      id: 'altstadt',
      sub: 'The historic old town',
      h3: 'The charm — and the slope',
      desc: 'Whitewashed lanes, the Moorish layout, cafés and restaurants at the door. Gorgeous — but distinctly steeper than the newer part, and even within the old town the height makes the difference. It splits into two quarters:',
      quarters: [
        { id: 'barribajo', name: 'Barribajo', note: 'Lower, along the main axis (Calle Real / Chorruelo): flatter, easier to reach — where AMARA is, too.' },
        { id: 'barribarto', name: 'Barribarto', note: 'Higher and steeper: the picturesque, winding Moorish core — with the most steps.' }
      ],
      idealFor: 'Culture travellers, couples, aesthetes — village life and atmosphere right at the door.',
      honest: 'Car-free, cobbles, steps. **Where exactly** you stay makes the biggest difference here.'
    },
    {
      id: 'neu',
      sub: 'The newer part',
      h3: 'Practical, flatter — without the old charm',
      desc: 'Below and south of the old town lies the newer part: wider streets, easier access and parking, fewer steps. Comfortable day to day — more modern and functional in character.',
      idealFor: 'Those who value comfort, car access and few steps over old-town flair.',
      honest: 'More modern and functional in character, but without the historic atmosphere of Barribarto — the old town begins only after a walk.'
    },
    {
      id: 'campo',
      sub: 'El Campo',
      h3: 'A country house, space and quiet',
      desc: 'Out in the green: country houses with space, privacy and a wide panorama over the sierra to the coast — often with a pool. Frigiliana becomes a place you drive into rather than one that starts at your door.',
      idealFor: 'Those deliberately seeking seclusion, nature and space.',
      honest: 'For shopping, restaurants and spontaneous village visits, a car is handy or necessary at many campo locations.'
    }
  ],
  labelIdealFor: 'Best for',
  labelHonest: 'Honestly',
  whoTitle: 'Who Frigiliana is ideal for',
  whoIntro: 'Frigiliana suits guests who want the quiet, unspoilt Andalusia away from the coastal bustle. Those who want beach and buzz at the door are often better off down in Nerja.',
  who: [
    { id: 'quiet', title: 'Quiet-seekers', text: 'Quiet lanes, early mornings, a place that settles down in the evening rather than getting loud.' },
    { id: 'couples', title: 'Couples', text: 'Private terraces over the greenery, short walks to dinner, time for two.' },
    { id: 'culture', title: 'Culture travellers', text: 'The Moorish layout of Barribarto, workshops and crafts, history that grew over time.' },
    { id: 'aesthetes', title: 'Aesthetes', text: 'Whitewashed façades, flower-lined lanes, the light over the groves to the sea.' }
  ],
  pointer: {
    text: '**Not sure yet — mountain or coast?** Frigiliana = village, quiet, atmosphere. Nerja = beach, coastal life, more buzz.',
    linkLabel: 'Compare Frigiliana and Nerja in detail',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Why we chose this spot',
    title: 'The old-town charm, without the constant climb',
    caption: 'The old town climbs steeply above the main axis; AMARA sits comparatively low on Calle Chorruelo.',
    mapNote: '(see the orientation map above)',
    lead: 'The old town climbs steeply from the main path — many historic addresses lie noticeably higher on the slope, up in Barribarto. Our position in Barribajo, on **Calle Chorruelo**, sits right on the level main axis — with real old town at the door, but without every shopping trip becoming a mountain stage. That is why we invested here and restored the house over two years.',
    facts: ['**Reachable by car** within the current old-town access windows', '**Farah** has just one entrance step', '**Lounis & Zaid**: private terraces with views over the groves to the sea'],
    honest: 'To stay honest: fully step-free with your own parking → the newer part. Real seclusion → El Campo. For old-town charm with comparatively few vertical metres, our position is particularly practical.'
  }
};

const es: WhereToStayCopy = {
  hero: {
    eyebrow: 'Dónde alojarse · Frigiliana',
    title: 'Dónde alojarse en Frigiliana',
    lede: 'Un pueblo blanco sobre la costa, construido en plena ladera.',
    body: 'Herencia morisca en el Barribarto, panorama hasta el Mediterráneo, artesanía en las calles, calma lejos del bullicio de la costa. Pero Frigiliana es un pueblo en cuesta: dónde os alojáis marca vuestro día — y sobre todo, cuántos escalones hay entre vosotros y el café de la mañana.',
    traits: ['**Pueblo blanco** · pueblo blanco de montaña', 'Herencia morisca', 'Panorama al mar', 'Artesanía', 'Senderos rocosos'],
    stats: [
      { id: 'altitude', k: '300 m', l: 'sobre el mar — pueblo en cuesta, no un llano junto a la playa' },
      { id: 'coast', k: '6 km', l: 'en línea recta hasta la costa en Nerja' },
      { id: 'parts', k: '3', l: 'partes con un día a día muy distinto' }
    ]
  },
  heroCtaZones: 'Ver las tres partes',
  glanceTitle: '¿Qué parte encaja con vosotros?',
  glanceIntro: 'Tres partes, tres formas de alojarse. Lo que las diferencia es sobre todo la altura en la ladera — por eso viene justo después el tema de las escaleras.',
  glance: [
    { id: 'altstadt', title: 'Casco histórico', blurb: 'Encanto, calles moriscas — pero empinado y con escaleras' },
    { id: 'neu', title: 'La zona nueva', blurb: 'Más llano, mejor aparcamiento — sin el aire histórico' },
    { id: 'campo', title: 'El Campo', blurb: 'Espacio, calma, panorama — coche casi siempre útil o necesario' }
  ],
  factorEyebrow: 'El verdadero emblema de Frigiliana',
  factor: {
    title: 'Todo es cuestión de altura',
    intro: 'El verdadero emblema de Frigiliana no son las flores en las paredes, sino las escaleras. El pueblo sube empinado por la ladera — y no lo recorréis una vez, sino todo el día.',
    copy: 'Dos direcciones a apenas cien metros pueden estar separadas por treinta metros de desnivel y varios tramos de escaleras. En el mapa todo está cerca — en las piernas no. Por eso en Frigiliana no decide la distancia, sino la **altura**, vuestro día.',
    note: 'Un día normal es: subir, bajar — y volver a subir.',
    day: ['Subir a por el café de la mañana', 'Volver cuesta arriba con la compra', 'Bajar a la playa — y subir de nuevo', 'Salir a cenar al pueblo', 'La vuelta a casa cuesta arriba de noche']
  },
  zonesEyebrow: 'Las zonas',
  zonesTitle: 'Las tres partes de Frigiliana',
  zonesIntro: 'A grandes rasgos hay tres mundos: el casco histórico, la zona nueva por debajo y el campo a las afueras. Cada uno resuelve el sube y baja de otra forma — y a cambio cede algo distinto.',
  zones: [
    {
      id: 'altstadt',
      sub: 'El casco histórico',
      h3: 'El encanto — y la cuesta',
      desc: 'Calles encaladas, el trazado morisco, cafeterías y restaurantes en la puerta. Precioso — pero bastante más empinado que la zona nueva, y ya dentro del casco la altura marca la diferencia. Se divide en dos barrios:',
      quarters: [
        { id: 'barribajo', name: 'Barribajo', note: 'Abajo, junto al eje principal (calle Real / Chorruelo): más llano y accesible — aquí está también AMARA.' },
        { id: 'barribarto', name: 'Barribarto', note: 'Más arriba y empinado: el pintoresco y laberíntico núcleo morisco — con más escaleras.' }
      ],
      idealFor: 'Viajeros culturales, parejas, amantes del detalle — vida de pueblo y ambiente en la puerta.',
      honest: 'Sin coches, empedrado, escaleras. **Dónde exactamente** os alojáis marca aquí la mayor diferencia.'
    },
    {
      id: 'neu',
      sub: 'La zona nueva',
      h3: 'Práctica, más llana — sin el encanto antiguo',
      desc: 'Por debajo y al sur del casco está la parte nueva: calles más anchas, mejor acceso y aparcamiento, menos escaleras. Cómoda en el día a día — de carácter más moderno y funcional.',
      idealFor: 'Quienes valoran la comodidad, el acceso en coche y pocas escaleras por encima del aire del casco.',
      honest: 'De carácter más moderno y funcional, pero sin la atmósfera histórica del Barribarto — el casco empieza solo tras un paseo.'
    },
    {
      id: 'campo',
      sub: 'El Campo',
      h3: 'Casa de campo, espacio y calma',
      desc: 'En pleno verde: casas de campo con espacio, privacidad y un amplio panorama de la sierra al mar — a menudo con piscina. Frigiliana pasa a ser un lugar al que se conduce, en vez de empezar en la puerta.',
      idealFor: 'Quienes buscan a propósito aislamiento, naturaleza y espacio.',
      honest: 'Para la compra, los restaurantes y las visitas espontáneas al pueblo, en muchas ubicaciones del campo el coche es útil o necesario.'
    }
  ],
  labelIdealFor: 'Ideal para',
  labelHonest: 'Con franqueza',
  whoTitle: 'Para quién es ideal Frigiliana',
  whoIntro: 'Frigiliana encaja con quienes buscan la Andalucía tranquila y auténtica, lejos del bullicio costero. Quien quiere playa y ambiente en la puerta suele estar mejor abajo, en Nerja.',
  who: [
    { id: 'quiet', title: 'Quienes buscan calma', text: 'Calles tranquilas, mañanas temprano, un lugar que por la noche se calma en vez de animarse.' },
    { id: 'couples', title: 'Parejas', text: 'Terrazas privadas sobre el verde, poca distancia para cenar, tiempo para dos.' },
    { id: 'culture', title: 'Viajeros culturales', text: 'El trazado morisco del Barribarto, talleres y artesanía, historia con raíces.' },
    { id: 'aesthetes', title: 'Amantes del detalle', text: 'Fachadas encaladas, calles con flores, la luz sobre los cultivos hasta el mar.' }
  ],
  pointer: {
    text: '**¿Aún no lo tenéis claro — montaña o costa?** Frigiliana = pueblo, calma, ambiente. Nerja = playa, vida costera, más bullicio.',
    linkLabel: 'Comparar Frigiliana y Nerja en detalle',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Por qué elegimos esta ubicación',
    title: 'El encanto del casco, sin la subida constante',
    caption: 'El casco sube empinado por encima del eje principal; AMARA queda comparativamente bajo, en la calle Chorruelo.',
    mapNote: '(ver el mapa de orientación arriba)',
    lead: 'El casco sube empinado desde el camino principal — muchas direcciones históricas quedan bastante más arriba, en el Barribarto. Nuestra ubicación en el Barribajo, en la **calle Chorruelo**, se asienta justo en el eje principal llano — con casco auténtico en la puerta, pero sin que cada compra sea una etapa de montaña. Por eso invertimos aquí y restauramos la casa durante dos años.',
    facts: ['**Accesible en coche** dentro de las ventanas de acceso vigentes del casco', '**Farah** tiene un solo escalón de entrada', '**Lounis y Zaid**: terrazas privadas con vistas sobre el campo hasta el mar'],
    honest: 'Para ser honestos: totalmente sin escalones y con aparcamiento propio → la zona nueva. Aislamiento real → El Campo. Para el encanto del casco con comparativamente pocos metros de desnivel, nuestra ubicación es especialmente práctica.'
  }
};

const nl: WhereToStayCopy = {
  hero: {
    eyebrow: 'Waar overnachten · Frigiliana',
    title: 'Waar overnachten in Frigiliana',
    lede: 'Een wit bergdorp boven de kust, steil tegen de helling gebouwd.',
    body: 'Moors erfgoed in Barribarto, panorama tot aan de Middellandse Zee, ambacht in de straatjes, rust weg van de kustdrukte. Maar Frigiliana is een heuveldorp: waar je verblijft bepaalt je dag — en vooral hoeveel treden er tussen jou en de ochtendkoffie liggen.',
    traits: ['**Pueblo blanco** · wit bergdorp', 'Moors erfgoed', 'Panorama op zee', 'Ambacht', 'Rotsachtige paden'],
    stats: [
      { id: 'altitude', k: '300 m', l: 'boven zee — heuveldorp, geen vlakke badplaats' },
      { id: 'coast', k: '6 km', l: 'hemelsbreed naar de kust bij Nerja' },
      { id: 'parts', k: '3', l: 'delen met een merkbaar ander dagritme' }
    ]
  },
  heroCtaZones: 'Bekijk de drie delen',
  glanceTitle: 'Welk deel past bij jullie?',
  glanceIntro: 'Drie delen, drie soorten verblijf. Wat ze onderscheidt is vooral de hoogte op de helling — daarom komen de treden er direct na.',
  glance: [
    { id: 'altstadt', title: 'Historische kern', blurb: 'Charme, Moorse straatjes — maar steil en veel treden' },
    { id: 'neu', title: 'Het nieuwere deel', blurb: 'Vlakker, makkelijker parkeren — zonder de historische sfeer' },
    { id: 'campo', title: 'El Campo', blurb: 'Ruimte, rust, panorama — auto meestal handig of nodig' }
  ],
  factorEyebrow: 'Frigiliana’s echte kenmerk',
  factor: {
    title: 'Alles draait om de hoogte',
    intro: 'Frigiliana’s echte kenmerk zijn niet de bloemen aan de muren, maar de treden. Het dorp klimt steil tegen de helling op — en je loopt het niet één keer, maar de hele dag.',
    copy: 'Twee adressen op amper honderd meter kunnen dertig hoogtemeters en meerdere trappen uit elkaar liggen. Op de kaart is alles dichtbij — in je benen niet. Daarom bepaalt in Frigiliana niet de afstand, maar de **hoogte** je dag.',
    note: 'Een gewone dag is: omhoog, omlaag — en weer omhoog.',
    day: ['Omhoog voor de ochtendkoffie', 'Met de boodschappen terug de helling op', 'Omlaag naar het strand — en weer omhoog', '’s Avonds uit eten in het dorp', 'De weg naar huis bergop in het donker']
  },
  zonesEyebrow: 'De liggingen',
  zonesTitle: 'De drie delen van Frigiliana',
  zonesIntro: 'Grofweg zijn er drie werelden: de historische kern, het nieuwere deel eronder en de campo erbuiten. Elk lost het op en neer anders op — en levert daar iets anders voor in.',
  zones: [
    {
      id: 'altstadt',
      sub: 'De historische kern',
      h3: 'De charme — en de helling',
      desc: 'Witgekalkte straatjes, de Moorse plattegrond, cafés en restaurants voor de deur. Prachtig — maar duidelijk steiler dan het nieuwere deel, en al binnen de oude kern maakt de hoogte het verschil. Ze valt uiteen in twee wijken:',
      quarters: [
        { id: 'barribajo', name: 'Barribajo', note: 'Onderin, langs de hoofdas (Calle Real / Chorruelo): vlakker, beter bereikbaar — hier ligt ook AMARA.' },
        { id: 'barribarto', name: 'Barribarto', note: 'Hoger en steiler: de pittoreske, kronkelige Moorse kern — met de meeste treden.' }
      ],
      idealFor: 'Cultuurreizigers, stellen, liefhebbers van sfeer — dorpsleven en atmosfeer voor de deur.',
      honest: 'Autovrij, kasseien, treden. **Waar precies** je verblijft maakt hier het grootste verschil.'
    },
    {
      id: 'neu',
      sub: 'Het nieuwere deel',
      h3: 'Praktisch, vlakker — zonder de oude charme',
      desc: 'Onder en ten zuiden van de oude kern ligt het nieuwere deel: bredere straten, makkelijker toegang en parkeren, minder treden. Comfortabel in het dagelijks leven — moderner en functioneler van karakter.',
      idealFor: 'Wie comfort, autotoegang en weinig treden boven het kernflair stelt.',
      honest: 'Moderner en functioneler van karakter, maar zonder de historische sfeer van Barribarto — de oude kern begint pas na een stukje lopen.'
    },
    {
      id: 'campo',
      sub: 'El Campo',
      h3: 'Landhuis, ruimte en rust',
      desc: 'Buiten in het groen: landhuizen met ruimte, privacy en een weids panorama over de sierra tot de kust — vaak met zwembad. Frigiliana wordt een plek waar je naartoe rijdt in plaats van iets dat bij de voordeur begint.',
      idealFor: 'Wie bewust afzondering, natuur en ruimte zoekt.',
      honest: 'Voor boodschappen, restaurants en spontane dorpsbezoeken is een auto op veel campo-locaties handig of nodig.'
    }
  ],
  labelIdealFor: 'Ideaal voor',
  labelHonest: 'Eerlijk gezegd',
  whoTitle: 'Voor wie Frigiliana ideaal is',
  whoIntro: 'Frigiliana past bij gasten die het rustige, ongerepte Andalusië willen, weg van de kustdrukte. Wie strand en reuring voor de deur wil, zit vaak beter beneden in Nerja.',
  who: [
    { id: 'quiet', title: 'Rustzoekers', text: 'Stille straatjes, vroege ochtenden, een plek die ’s avonds tot rust komt in plaats van luid te worden.' },
    { id: 'couples', title: 'Stellen', text: 'Privéterrassen over het groen, korte loopjes naar het diner, tijd met z’n tweeën.' },
    { id: 'culture', title: 'Cultuurreizigers', text: 'De Moorse plattegrond van Barribarto, werkplaatsen en ambacht, gegroeide geschiedenis.' },
    { id: 'aesthetes', title: 'Liefhebbers van sfeer', text: 'Witgekalkte gevels, bloemrijke straatjes, het licht over de plantages tot de zee.' }
  ],
  pointer: {
    text: '**Nog niet zeker — berg of kust?** Frigiliana = dorp, rust, sfeer. Nerja = strand, kustleven, meer reuring.',
    linkLabel: 'Frigiliana en Nerja in detail vergelijken',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Waarom wij hier zitten',
    title: 'De charme van de oude kern, zonder het constante klimmen',
    caption: 'De oude kern klimt steil boven de hoofdas uit; AMARA ligt vergelijkbaar laag aan Calle Chorruelo.',
    mapNote: '(zie de oriëntatiekaart hierboven)',
    lead: 'De oude kern klimt steil vanaf het hoofdpad — veel historische adressen liggen merkbaar hoger, boven in Barribarto. Onze ligging in Barribajo, aan de **Calle Chorruelo**, zit pal op de vlakke hoofdas — met echte oude kern voor de deur, maar zonder dat elke boodschap een bergetappe wordt. Daarom investeerden we hier en restaureerden we het huis in twee jaar.',
    facts: ['**Met de auto bereikbaar** binnen de geldende toegangsvensters van de oude kern', '**Farah** heeft maar één opstap', '**Lounis & Zaid**: privéterrassen met uitzicht over het groen tot de zee'],
    honest: 'Eerlijk blijft: volledig gelijkvloers met eigen parkeerplaats → het nieuwere deel. Echte afzondering → El Campo. Voor kernkarakter met vergelijkenderwijs weinig hoogtemeters is onze ligging bijzonder praktisch.'
  }
};

const sv: WhereToStayCopy = {
  hero: {
    eyebrow: 'Var man bor · Frigiliana',
    title: 'Var man bor i Frigiliana',
    lede: 'En vit bergsby ovanför kusten, brant byggd in i sluttningen.',
    body: 'Moriskt arv i Barribarto, panorama mot Medelhavet, hantverk i gränderna, lugn borta från kustens vimmel. Men Frigiliana är en by i sluttning: var ni bor formar er dag — och framför allt hur många trappsteg som ligger mellan er och morgonkaffet.',
    traits: ['**Pueblo blanco** · vit bergsby', 'Moriskt arv', 'Panorama mot havet', 'Hantverk', 'Steniga leder'],
    stats: [
      { id: 'altitude', k: '300 m', l: 'över havet — bergsby, ingen platt badort' },
      { id: 'coast', k: '6 km', l: 'fågelvägen till kusten vid Nerja' },
      { id: 'parts', k: '3', l: 'delar med märkbart olika vardag' }
    ]
  },
  heroCtaZones: 'Se de tre delarna',
  glanceTitle: 'Vilken del passar er?',
  glanceIntro: 'Tre delar, tre sorters vistelse. Det som skiljer dem åt är framför allt höjden i sluttningen — därför kommer trapporna direkt efter.',
  glance: [
    { id: 'altstadt', title: 'Historiska gamla stan', blurb: 'Charm, moriska gränder — men brant och många trappsteg' },
    { id: 'neu', title: 'Den nyare delen', blurb: 'Flackare, enklare parkering — utan den historiska stämningen' },
    { id: 'campo', title: 'El Campo', blurb: 'Rymd, lugn, panorama — bil oftast praktisk eller nödvändig' }
  ],
  factorEyebrow: 'Frigilianas verkliga signum',
  factor: {
    title: 'Allt handlar om höjden',
    intro: 'Frigilianas verkliga signum är inte blommorna på väggarna utan trapporna. Byn klättrar brant uppför sluttningen — och ni går den inte en gång, utan hela dagen.',
    copy: 'Två adresser knappt hundra meter isär kan skiljas av trettio höjdmeter och flera trappor. På kartan är allt nära — i benen inte. Därför avgör inte avståndet i Frigiliana, utan **höjden**, er dag.',
    note: 'En vanlig dag är: upp, ner — och upp igen.',
    day: ['Upp till morgonkaffet', 'Tillbaka uppför med inköpen', 'Ner till stranden — och upp igen', 'Ut och äta i byn', 'Hemvägen uppför i mörkret']
  },
  zonesEyebrow: 'Lägena',
  zonesTitle: 'Frigilianas tre delar',
  zonesIntro: 'Grovt sett finns tre världar: den historiska gamla stan, den nyare delen nedanför och campon utanför. Var och en löser upp-och-ner på sitt sätt — och byter något annat mot det.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Den historiska gamla stan',
      h3: 'Charmen — och sluttningen',
      desc: 'Vitkalkade gränder, den moriska planen, kaféer och restauranger vid dörren. Vackert — men betydligt brantare än den nyare delen, och redan inom gamla stan gör höjden skillnaden. Den delas i två kvarter:',
      quarters: [
        { id: 'barribajo', name: 'Barribajo', note: 'Nedtill, längs huvudaxeln (Calle Real / Chorruelo): flackare, lättare att nå — här ligger även AMARA.' },
        { id: 'barribarto', name: 'Barribarto', note: 'Högre och brantare: den pittoreska, slingrande moriska kärnan — med flest trappsteg.' }
      ],
      idealFor: 'Kulturresenärer, par, estetiker — byliv och atmosfär precis vid dörren.',
      honest: 'Bilfritt, kullersten, trappor. **Var exakt** ni bor gör här störst skillnad.'
    },
    {
      id: 'neu',
      sub: 'Den nyare delen',
      h3: 'Praktisk, flackare — utan den gamla charmen',
      desc: 'Nedanför och söder om gamla stan ligger den nyare delen: bredare gator, enklare tillfart och parkering, färre trappsteg. Bekväm i vardagen — mer modern och funktionell i karaktären.',
      idealFor: 'De som värderar bekvämlighet, bilväg och få trappsteg framför gamla-stan-känslan.',
      honest: 'Mer modern och funktionell i karaktären, men utan Barribartos historiska atmosfär — gamla stan börjar först efter en promenad.'
    },
    {
      id: 'campo',
      sub: 'El Campo',
      h3: 'Lantställe, rymd och lugn',
      desc: 'Ute i det gröna: lantställen med rymd, avskildhet och vidsträckt panorama över sierran mot kusten — ofta med pool. Frigiliana blir en plats man kör till snarare än en som börjar vid dörren.',
      idealFor: 'De som medvetet söker avskildhet, natur och rymd.',
      honest: 'För inköp, restauranger och spontana bybesök är en bil praktisk eller nödvändig på många campo-lägen.'
    }
  ],
  labelIdealFor: 'Passar för',
  labelHonest: 'Ärligt',
  whoTitle: 'Vem Frigiliana är perfekt för',
  whoIntro: 'Frigiliana passar gäster som vill ha det lugna, ursprungliga Andalusien borta från kustvimlet. Den som vill ha strand och liv vid dörren har ofta bättre av att bo nere i Nerja.',
  who: [
    { id: 'quiet', title: 'De som söker lugn', text: 'Tysta gränder, tidiga morgnar, en plats som lugnar ner sig på kvällen i stället för att bli högljudd.' },
    { id: 'couples', title: 'Par', text: 'Privata terrasser över grönskan, korta vägar till middagen, tid för två.' },
    { id: 'culture', title: 'Kulturresenärer', text: 'Barribartos moriska plan, verkstäder och hantverk, historia som vuxit fram.' },
    { id: 'aesthetes', title: 'Estetiker', text: 'Vitkalkade fasader, blomstergränder, ljuset över odlingarna mot havet.' }
  ],
  pointer: {
    text: '**Inte säker än — berg eller kust?** Frigiliana = by, lugn, atmosfär. Nerja = strand, kustliv, mer liv.',
    linkLabel: 'Jämför Frigiliana och Nerja i detalj',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Därför valde vi det här läget',
    title: 'Gamla stans charm, utan den ständiga stigningen',
    caption: 'Gamla stan stiger brant ovanför huvudaxeln; AMARA ligger jämförelsevis lågt vid Calle Chorruelo.',
    mapNote: '(se orienteringskartan ovan)',
    lead: 'Gamla stan stiger brant från huvudvägen — många historiska adresser ligger märkbart högre, uppe i Barribarto. Vårt läge i Barribajo, vid **Calle Chorruelo**, ligger precis på den plana huvudaxeln — med riktig gammal stad vid dörren, men utan att varje inköpsrunda blir en bergsetapp. Därför investerade vi här och restaurerade huset under två år.',
    facts: ['**Nåbart med bil** inom gamla stans gällande tillfartsfönster', '**Farah** har bara ett entrésteg', '**Lounis & Zaid**: privata terrasser med utsikt över grönskan mot havet'],
    honest: 'Ärligt talat: helt trappfritt med egen parkering → den nyare delen. Verklig avskildhet → El Campo. För gammal-stans-charm med jämförelsevis få höjdmeter är vårt läge särskilt praktiskt.'
  }
};

export const frigilianaWhereToStayContent: Record<AmaraLanguage, WhereToStayCopy> = {
  de,
  en,
  es,
  nl,
  sv
};
