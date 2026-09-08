import type { AmaraLanguage } from '../types/seo';
import type { WhereToStayCopy } from './whereToStayCopy';

/**
 * Nerja Where-to-stay body (Type A redesign). Nerja's decision factor is
 * proximity on the coast (beach vs centre vs quiet), not Frigiliana's height.
 * AMARA Playa sits at Torrecilla — city beach plus five minutes to the Balcón.
 * Emphasis is **double asterisks** for InlineEmphasis; unit lists carry stable
 * `id`s for the locale-parity contract. Booking CTA comes from trustLabels.book.
 */
const de: WhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Nerja',
    title: 'Wo in Nerja übernachten',
    lede: 'Lebendiger Küstenort über dem Meer — mit Stränden und dem Balcón de Europa.',
    body: 'Weiße Gassen an den Klippen, der berühmte Balcón de Europa, Sandstrände wie Torrecilla und Burriana, dazu ganzjährige Infrastruktur. Nerja ist kompakt und meist eben — hier entscheidet nicht die Höhe wie in Frigiliana, sondern die Nähe: zum Strand, zum Zentrum, zur Ruhe.',
    traits: ['**Balcón de Europa**', 'Sandstrände', 'Tapas & Leben', 'Höhlen von Nerja', 'Ganzjährig'],
    stats: [
      { id: 'balcon', k: '5 Min', l: 'zu Fuß von Torrecilla zum Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'Stadtstrände vor der Tür: Torrecilla & Burriana' },
      { id: 'parts', k: '3', l: 'Teile mit spürbar anderem Alltag' }
    ]
  },
  heroCtaZones: 'Die drei Teile ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Drei Teile, drei Aufenthalte. Worin sie sich unterscheiden, entscheidet hier vor allem die Nähe — zum Strand, zum Zentrum und zur Ruhe.',
  glance: [
    { id: 'altstadt', title: 'Altstadt & Balcón', blurb: 'Tapas, Leben, der berühmte Balkon — mittendrin, im Sommer voll' },
    { id: 'strand', title: 'Die Strandzonen', blurb: 'Torrecilla & Burriana — das Meer direkt vor der Tür' },
    { id: 'hang', title: 'Wohnviertel am Hang', blurb: 'Ruhiger, mehr Platz — dafür Auto oder Weg zum Zentrum' }
  ],
  factorEyebrow: 'Worauf es in Nerja ankommt',
  factor: {
    title: 'Alles eine Frage der Nähe',
    intro: 'Nerja ist kompakt und meist eben — kein Bergdorf. Deshalb entscheidet hier nicht die Höhe, sondern die Nähe: Wie weit ist es morgens zum Strand, abends zu den Tapas, und wie ruhig wird die Nacht?',
    copy: 'Wenige hundert Meter machen den Unterschied zwischen „Strand vor der Tür“ und „erst mit dem Auto“, zwischen „mitten im Abendleben“ und „ruhige Nacht“. Die beste Lage ist die, deren **Nähe** zu eurem Urlaub passt.',
    note: 'Ein Tag am Meer: morgens Strand, tagsüber im Ort, abends Tapas — und nachts Ruhe?',
    day: ['Morgens an den Strand', 'Kaffee und Einkäufe im Ort', 'Nachmittags zum Balcón de Europa', 'Abends Tapas in der Altstadt', 'Nachts — laut oder ruhig?']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Die drei Teile von Nerja',
  zonesIntro: 'Grob gibt es drei Welten: die lebendige Altstadt am Balcón, die Strandzonen und die ruhigeren Wohnviertel am Hang. Jede löst die Nähe anders — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Altstadt & Balcón de Europa',
      h3: 'Mittendrin — Leben, Tapas, der Balkon',
      desc: 'Die weißen Gassen rund um den Balcón de Europa: Restaurants, Tapas-Bars, Geschäfte und der berühmte Aussichtsbalkon über dem Meer. Alles fußläufig, den ganzen Tag Leben — im Hochsommer aber auch voll und abends lebhaft.',
      idealFor: 'Wer das Zentrum und die Restaurants vor der Tür will und Trubel nicht scheut.',
      honest: 'Im Sommer voll und abends laut; Parken ist schwierig, der nächste Sandstrand ein kurzer Weg.'
    },
    {
      id: 'strand',
      sub: 'Die Strandzonen',
      h3: 'Das Meer direkt vor der Tür',
      desc: 'Direkt an den Stadtstränden — hier teilt sich die Zone in zwei:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'Am Fuß der Altstadt: Stadtstrand direkt und nur 5 Minuten zum Balcón — hier liegt AMARA Playa.' },
        { id: 'burriana', name: 'Burriana', note: 'Der große, klassische Sandstrand mit Strandbars; entspannter Strandtag, etwas weiter vom Zentrum.' }
      ],
      idealFor: 'Strandliebhaber und Familien, die morgens direkt ans Wasser wollen.',
      honest: 'Burriana ist im Sommer belebt; zum historischen Zentrum lauft ihr von dort ein Stück.'
    },
    {
      id: 'hang',
      sub: 'Wohnviertel am Hang',
      h3: 'Ruhe, Raum — dafür der Weg',
      desc: 'Die urbanisierten Hanglagen wie Capistrano oder Punta Lara: ruhiger, mehr Platz, oft mit Pool und Blick. Dafür sind Strand, Restaurants und Zentrum meist ein Weg mit dem Auto.',
      idealFor: 'Wer Ruhe, Aussicht und Raum über die direkte Nähe zum Meer stellt.',
      honest: 'Für Strand, Einkäufe und Abendessen ist ein Auto hier meist praktisch oder nötig.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Nerja ideal ist',
  whoIntro: 'Nerja passt zu Gästen, die Strand, Küstenleben und komfortable Infrastruktur wollen — spanische Tradition mit dem Meer vor der Tür. Wer das ruhige Bergdorf abseits der Küste sucht, ist oben in Frigiliana besser aufgehoben.',
  who: [
    { id: 'families', title: 'Familien', text: 'Sandstrände zum Buddeln, kurze Wege, Eis am Balcón — Nerja ist für Kinder gemacht.' },
    { id: 'beach', title: 'Strandliebhaber', text: 'Torrecilla und Burriana vor der Tür, dazu die versteckten Buchten Richtung Maro.' },
    { id: 'sun', title: 'Sonnenhungrige', text: 'Milde Winter, lange Saison, das Meer fast das ganze Jahr zum Greifen nah.' },
    { id: 'longstay', title: 'Langzeitgäste', text: 'Ganzjährige Infrastruktur, Ärzte, Märkte, Cafés — ein Ort zum Ankommen, nicht nur für eine Woche.' }
  ],
  pointer: {
    text: '**Noch nicht sicher — Küste oder Berg?** Nerja = Strand, Leben, Meer vor der Tür. Frigiliana = Dorf, Ruhe, Panorama.',
    linkLabel: 'Nerja oder Frigiliana im Detail vergleichen',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Strand vor der Tür — und trotzdem mittendrin',
    caption: 'Torrecilla liegt am Fuß der Altstadt: Stadtstrand direkt, der Balcón de Europa nur wenige Minuten entfernt.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'In Nerja muss man sich oft entscheiden: Strand *oder* Zentrum, Nähe *oder* Ruhe. **AMARA Playa liegt in Torrecilla** — am Fuß der Altstadt, mit dem Stadtstrand direkt vor der Tür und nur rund fünf Minuten zu Fuß zum Balcón de Europa und den Restaurants. Dabei ruhiger als die Altstadt selbst.',
    facts: ['**Stadtstrand Torrecilla** direkt vor der Tür', '**5 Minuten** zu Fuß zum Balcón de Europa und den Tapas', '**Ruhiger** als die belebte Altstadt — ohne den Weg mit dem Auto'],
    honest: 'Ehrlich bleibt: den größten, entspanntesten Strandtag habt ihr an Burriana; wer Ruhe und Raum über Nähe stellt, ist am Hang besser aufgehoben. Für Strand und Zentrum in einem ist Torrecilla der süße Punkt.'
  }
};

const en: WhereToStayCopy = {
  hero: {
    eyebrow: 'Where to stay · Nerja',
    title: 'Where to stay in Nerja',
    lede: 'A lively coastal town above the sea — with beaches and the Balcón de Europa.',
    body: 'White lanes on the cliffs, the famous Balcón de Europa, sandy beaches like Torrecilla and Burriana, plus year-round infrastructure. Nerja is compact and mostly flat — here it isn’t height that decides, as in Frigiliana, but proximity: to the beach, to the centre, to quiet.',
    traits: ['**Balcón de Europa**', 'Sandy beaches', 'Tapas & life', 'Nerja Caves', 'Year-round'],
    stats: [
      { id: 'balcon', k: '5 min', l: 'on foot from Torrecilla to the Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'city beaches at the door: Torrecilla & Burriana' },
      { id: 'parts', k: '3', l: 'parts with a noticeably different daily life' }
    ]
  },
  heroCtaZones: 'See the three parts',
  glanceTitle: 'Which part suits you?',
  glanceIntro: 'Three parts, three kinds of stay. What sets them apart here is above all proximity — to the beach, the centre and quiet.',
  glance: [
    { id: 'altstadt', title: 'Old Town & Balcón', blurb: 'Tapas, life, the famous balcony — right in it, packed in summer' },
    { id: 'strand', title: 'The beach zones', blurb: 'Torrecilla & Burriana — the sea right at the door' },
    { id: 'hang', title: 'Residential hills', blurb: 'Quieter, more space — but a car or a walk to the centre' }
  ],
  factorEyebrow: 'What matters in Nerja',
  factor: {
    title: 'It all comes down to proximity',
    intro: 'Nerja is compact and mostly flat — no hill village. So here it isn’t height that decides, but proximity: how far is it to the beach in the morning, to the tapas in the evening, and how quiet is the night?',
    copy: 'A few hundred metres make the difference between “beach at the door” and “car first”, between “right in the evening buzz” and “a quiet night”. The best location is the one whose **proximity** suits your holiday.',
    note: 'A day by the sea: beach in the morning, the town by day, tapas in the evening — and a quiet night?',
    day: ['Down to the beach in the morning', 'Coffee and shopping in town', 'To the Balcón de Europa in the afternoon', 'Tapas in the old town in the evening', 'At night — loud or quiet?']
  },
  zonesEyebrow: 'The locations',
  zonesTitle: 'The three parts of Nerja',
  zonesIntro: 'Broadly there are three worlds: the lively old town by the Balcón, the beach zones, and the quieter residential hills. Each solves proximity differently — and trades something else for it.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Old Town & Balcón de Europa',
      h3: 'Right in it — life, tapas, the balcony',
      desc: 'The white lanes around the Balcón de Europa: restaurants, tapas bars, shops and the famous viewing balcony over the sea. All on foot, life all day — but in high summer it’s busy and lively at night.',
      idealFor: 'Those who want the centre and restaurants at the door and don’t mind the bustle.',
      honest: 'Busy in summer and loud at night; parking is hard, and the nearest sandy beach is a short walk.'
    },
    {
      id: 'strand',
      sub: 'The beach zones',
      h3: 'The sea right at the door',
      desc: 'Right on the city beaches — here the zone splits in two:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'At the foot of the old town: the city beach right there and just 5 minutes to the Balcón — where AMARA Playa is.' },
        { id: 'burriana', name: 'Burriana', note: 'The big, classic sandy beach with beach bars; a relaxed beach day, a bit further from the centre.' }
      ],
      idealFor: 'Beach lovers and families who want to be at the water first thing.',
      honest: 'Burriana is busy in summer; from there it’s a bit of a walk to the historic centre.'
    },
    {
      id: 'hang',
      sub: 'Residential hills',
      h3: 'Quiet, space — but the journey',
      desc: 'The urbanised hillsides like Capistrano or Punta Lara: quieter, more space, often with a pool and a view. In return, the beach, restaurants and centre are usually a drive away.',
      idealFor: 'Those who value quiet, a view and space over being right by the sea.',
      honest: 'For the beach, shopping and dinner, a car is usually handy or necessary here.'
    }
  ],
  labelIdealFor: 'Best for',
  labelHonest: 'Honestly',
  whoTitle: 'Who Nerja is ideal for',
  whoIntro: 'Nerja suits guests who want beach, coastal life and comfortable infrastructure — Spanish tradition with the sea at the door. Those looking for the quiet mountain village away from the coast are better off up in Frigiliana.',
  who: [
    { id: 'families', title: 'Families', text: 'Sandy beaches to dig in, short walks, ice cream by the Balcón — Nerja is made for kids.' },
    { id: 'beach', title: 'Beach lovers', text: 'Torrecilla and Burriana at the door, plus the hidden coves towards Maro.' },
    { id: 'sun', title: 'Sun-seekers', text: 'Mild winters, a long season, the sea within reach almost all year.' },
    { id: 'longstay', title: 'Long-stay guests', text: 'Year-round infrastructure, doctors, markets, cafés — a place to settle in, not just for a week.' }
  ],
  pointer: {
    text: '**Not sure yet — coast or mountain?** Nerja = beach, life, the sea at the door. Frigiliana = village, quiet, panorama.',
    linkLabel: 'Compare Nerja and Frigiliana in detail',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Why we chose this spot',
    title: 'Beach at the door — and still right in it',
    caption: 'Torrecilla sits at the foot of the old town: the city beach right there, the Balcón de Europa just minutes away.',
    mapNote: '(see the orientation map above)',
    lead: 'In Nerja you often have to choose: beach *or* centre, proximity *or* quiet. **AMARA Playa is in Torrecilla** — at the foot of the old town, with the city beach right at the door and only about five minutes on foot to the Balcón de Europa and the restaurants. And quieter than the old town itself.',
    facts: ['**Torrecilla city beach** right at the door', '**5 minutes** on foot to the Balcón de Europa and the tapas', '**Quieter** than the busy old town — without the drive'],
    honest: 'To stay honest: your biggest, most relaxed beach day is at Burriana; those who value quiet and space over proximity are better off in the hills. For beach and centre in one, Torrecilla is the sweet spot.'
  }
};

const es: WhereToStayCopy = {
  hero: {
    eyebrow: 'Dónde alojarse · Nerja',
    title: 'Dónde alojarse en Nerja',
    lede: 'Un animado pueblo costero sobre el mar — con playas y el Balcón de Europa.',
    body: 'Calles blancas sobre los acantilados, el famoso Balcón de Europa, playas de arena como Torrecilla y Burriana, y una infraestructura durante todo el año. Nerja es compacta y casi llana — aquí no decide la altura, como en Frigiliana, sino la cercanía: a la playa, al centro, a la calma.',
    traits: ['**Balcón de Europa**', 'Playas de arena', 'Tapas y ambiente', 'Cuevas de Nerja', 'Todo el año'],
    stats: [
      { id: 'balcon', k: '5 min', l: 'a pie de Torrecilla al Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'playas urbanas en la puerta: Torrecilla y Burriana' },
      { id: 'parts', k: '3', l: 'partes con un día a día muy distinto' }
    ]
  },
  heroCtaZones: 'Ver las tres partes',
  glanceTitle: '¿Qué parte encaja con vosotros?',
  glanceIntro: 'Tres partes, tres formas de alojarse. Lo que las diferencia aquí es sobre todo la cercanía — a la playa, al centro y a la calma.',
  glance: [
    { id: 'altstadt', title: 'Casco antiguo y Balcón', blurb: 'Tapas, ambiente, el famoso balcón — en el centro, lleno en verano' },
    { id: 'strand', title: 'Las zonas de playa', blurb: 'Torrecilla y Burriana — el mar en la puerta' },
    { id: 'hang', title: 'Zonas residenciales en ladera', blurb: 'Más tranquilo, más espacio — pero coche o paseo al centro' }
  ],
  factorEyebrow: 'Lo que cuenta en Nerja',
  factor: {
    title: 'Todo es cuestión de cercanía',
    intro: 'Nerja es compacta y casi llana — no es un pueblo de montaña. Aquí no decide la altura, sino la cercanía: qué lejos está la playa por la mañana, las tapas por la noche, y qué tan tranquila es la noche.',
    copy: 'Unos cientos de metros marcan la diferencia entre „playa en la puerta“ y „primero el coche“, entre „en pleno ambiente nocturno“ y „una noche tranquila“. La mejor ubicación es aquella cuya **cercanía** encaja con vuestras vacaciones.',
    note: 'Un día junto al mar: playa por la mañana, el pueblo de día, tapas por la noche — ¿y una noche tranquila?',
    day: ['Por la mañana, a la playa', 'Café y compras en el pueblo', 'Por la tarde, al Balcón de Europa', 'Por la noche, tapas en el casco', 'De madrugada, ¿ruido o calma?']
  },
  zonesEyebrow: 'Las zonas',
  zonesTitle: 'Las tres partes de Nerja',
  zonesIntro: 'A grandes rasgos hay tres mundos: el animado casco antiguo junto al Balcón, las zonas de playa y las tranquilas zonas residenciales en ladera. Cada una resuelve la cercanía de otra forma — y a cambio cede algo distinto.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Casco antiguo y Balcón de Europa',
      h3: 'En el centro — ambiente, tapas, el balcón',
      desc: 'Las calles blancas en torno al Balcón de Europa: restaurantes, bares de tapas, tiendas y el famoso mirador sobre el mar. Todo a pie, ambiente todo el día — pero en pleno verano está lleno y animado de noche.',
      idealFor: 'Quienes quieren el centro y los restaurantes en la puerta y no rehúyen el bullicio.',
      honest: 'Lleno en verano y ruidoso de noche; aparcar es difícil y la playa de arena más cercana queda a un paseo corto.'
    },
    {
      id: 'strand',
      sub: 'Las zonas de playa',
      h3: 'El mar en la puerta',
      desc: 'Junto a las playas urbanas — aquí la zona se divide en dos:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'Al pie del casco: la playa urbana justo ahí y a solo 5 minutos del Balcón — aquí está AMARA Playa.' },
        { id: 'burriana', name: 'Burriana', note: 'La gran playa de arena clásica con chiringuitos; un día de playa relajado, algo más lejos del centro.' }
      ],
      idealFor: 'Amantes de la playa y familias que quieren estar en el agua a primera hora.',
      honest: 'Burriana está concurrida en verano; desde ahí, al centro histórico hay un paseo.'
    },
    {
      id: 'hang',
      sub: 'Zonas residenciales en ladera',
      h3: 'Calma, espacio — pero el trayecto',
      desc: 'Las urbanizaciones en ladera como Capistrano o Punta Lara: más tranquilas, más espacio, a menudo con piscina y vistas. A cambio, la playa, los restaurantes y el centro suelen quedar en coche.',
      idealFor: 'Quienes valoran la calma, las vistas y el espacio por encima de estar junto al mar.',
      honest: 'Para la playa, la compra y la cena, aquí el coche suele ser útil o necesario.'
    }
  ],
  labelIdealFor: 'Ideal para',
  labelHonest: 'Con franqueza',
  whoTitle: 'Para quién es ideal Nerja',
  whoIntro: 'Nerja encaja con quienes quieren playa, vida costera e infraestructura cómoda — tradición española con el mar en la puerta. Quien busca el tranquilo pueblo de montaña, lejos de la costa, está mejor arriba, en Frigiliana.',
  who: [
    { id: 'families', title: 'Familias', text: 'Playas de arena para cavar, paseos cortos, helado en el Balcón — Nerja está hecha para los niños.' },
    { id: 'beach', title: 'Amantes de la playa', text: 'Torrecilla y Burriana en la puerta, además de las calas escondidas hacia Maro.' },
    { id: 'sun', title: 'Amantes del sol', text: 'Inviernos suaves, temporada larga, el mar a un paso casi todo el año.' },
    { id: 'longstay', title: 'Estancias largas', text: 'Infraestructura todo el año, médicos, mercados, cafeterías — un lugar para instalarse, no solo una semana.' }
  ],
  pointer: {
    text: '**¿Aún no lo tenéis claro — costa o montaña?** Nerja = playa, ambiente, el mar en la puerta. Frigiliana = pueblo, calma, panorama.',
    linkLabel: 'Comparar Nerja y Frigiliana en detalle',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Por qué elegimos esta ubicación',
    title: 'Playa en la puerta — y aun así en el centro',
    caption: 'Torrecilla está al pie del casco: la playa urbana justo ahí, el Balcón de Europa a pocos minutos.',
    mapNote: '(ver el mapa de orientación arriba)',
    lead: 'En Nerja a menudo hay que elegir: playa *o* centro, cercanía *o* calma. **AMARA Playa está en Torrecilla** — al pie del casco, con la playa urbana en la puerta y a solo unos cinco minutos a pie del Balcón de Europa y los restaurantes. Y más tranquila que el propio casco.',
    facts: ['**Playa urbana de Torrecilla** en la puerta', '**5 minutos** a pie al Balcón de Europa y las tapas', '**Más tranquila** que el casco animado — sin el coche'],
    honest: 'Para ser honestos: el día de playa más grande y relajado lo tenéis en Burriana; quien valora la calma y el espacio por encima de la cercanía está mejor en la ladera. Para playa y centro en uno, Torrecilla es el punto dulce.'
  }
};

const nl: WhereToStayCopy = {
  hero: {
    eyebrow: 'Waar overnachten · Nerja',
    title: 'Waar overnachten in Nerja',
    lede: 'Een levendig kustplaatsje boven zee — met stranden en de Balcón de Europa.',
    body: 'Witte straatjes op de kliffen, de beroemde Balcón de Europa, zandstranden als Torrecilla en Burriana, plus voorzieningen het hele jaar door. Nerja is compact en meestal vlak — hier beslist niet de hoogte zoals in Frigiliana, maar de nabijheid: tot het strand, het centrum, de rust.',
    traits: ['**Balcón de Europa**', 'Zandstranden', 'Tapas & leven', 'Grotten van Nerja', 'Het hele jaar'],
    stats: [
      { id: 'balcon', k: '5 min', l: 'te voet van Torrecilla naar de Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'stadsstranden voor de deur: Torrecilla & Burriana' },
      { id: 'parts', k: '3', l: 'delen met een merkbaar ander dagritme' }
    ]
  },
  heroCtaZones: 'Bekijk de drie delen',
  glanceTitle: 'Welk deel past bij jullie?',
  glanceIntro: 'Drie delen, drie soorten verblijf. Wat ze hier onderscheidt is vooral de nabijheid — tot het strand, het centrum en de rust.',
  glance: [
    { id: 'altstadt', title: 'Oude kern & Balcón', blurb: 'Tapas, leven, het beroemde balkon — middenin, in de zomer vol' },
    { id: 'strand', title: 'De strandzones', blurb: 'Torrecilla & Burriana — de zee pal voor de deur' },
    { id: 'hang', title: 'Woonwijken op de heuvel', blurb: 'Rustiger, meer ruimte — maar auto of loopje naar het centrum' }
  ],
  factorEyebrow: 'Waar het in Nerja om gaat',
  factor: {
    title: 'Alles draait om nabijheid',
    intro: 'Nerja is compact en meestal vlak — geen bergdorp. Hier beslist niet de hoogte, maar de nabijheid: hoe ver is het ’s ochtends naar het strand, ’s avonds naar de tapas, en hoe rustig wordt de nacht?',
    copy: 'Een paar honderd meter maken het verschil tussen „strand voor de deur“ en „eerst de auto“, tussen „middenin het avondleven“ en „een rustige nacht“. De beste ligging is die waarvan de **nabijheid** bij jullie vakantie past.',
    note: 'Een dag aan zee: ’s ochtends strand, overdag het dorp, ’s avonds tapas — en een rustige nacht?',
    day: ['’s Ochtends naar het strand', 'Koffie en boodschappen in het dorp', '’s Middags naar de Balcón de Europa', '’s Avonds tapas in de oude kern', '’s Nachts — luid of rustig?']
  },
  zonesEyebrow: 'De liggingen',
  zonesTitle: 'De drie delen van Nerja',
  zonesIntro: 'Grofweg zijn er drie werelden: de levendige oude kern bij de Balcón, de strandzones en de rustigere woonwijken op de heuvel. Elk lost de nabijheid anders op — en levert daar iets anders voor in.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Oude kern & Balcón de Europa',
      h3: 'Middenin — leven, tapas, het balkon',
      desc: 'De witte straatjes rond de Balcón de Europa: restaurants, tapasbars, winkels en het beroemde uitkijkbalkon over zee. Alles te voet, de hele dag leven — maar in de hoogzomer druk en ’s avonds levendig.',
      idealFor: 'Wie het centrum en restaurants voor de deur wil en drukte niet schuwt.',
      honest: 'Vol in de zomer en ’s avonds luid; parkeren is lastig, en het dichtstbijzijnde zandstrand is een kort stukje lopen.'
    },
    {
      id: 'strand',
      sub: 'De strandzones',
      h3: 'De zee pal voor de deur',
      desc: 'Pal aan de stadsstranden — hier splitst de zone zich in tweeën:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'Aan de voet van de oude kern: het stadsstrand direct en maar 5 minuten naar de Balcón — hier ligt AMARA Playa.' },
        { id: 'burriana', name: 'Burriana', note: 'Het grote, klassieke zandstrand met strandtenten; een relaxte stranddag, iets verder van het centrum.' }
      ],
      idealFor: 'Strandliefhebbers en gezinnen die ’s ochtends meteen aan het water willen.',
      honest: 'Burriana is druk in de zomer; van daar is het een stukje lopen naar het historische centrum.'
    },
    {
      id: 'hang',
      sub: 'Woonwijken op de heuvel',
      h3: 'Rust, ruimte — maar de weg',
      desc: 'De verkavelde hellingen zoals Capistrano of Punta Lara: rustiger, meer ruimte, vaak met zwembad en uitzicht. Daar staat tegenover dat strand, restaurants en centrum meestal met de auto zijn.',
      idealFor: 'Wie rust, uitzicht en ruimte boven vlak bij zee zijn stelt.',
      honest: 'Voor het strand, boodschappen en het diner is een auto hier meestal handig of nodig.'
    }
  ],
  labelIdealFor: 'Ideaal voor',
  labelHonest: 'Eerlijk gezegd',
  whoTitle: 'Voor wie Nerja ideaal is',
  whoIntro: 'Nerja past bij gasten die strand, kustleven en comfortabele voorzieningen willen — Spaanse traditie met de zee voor de deur. Wie het rustige bergdorp weg van de kust zoekt, zit beter boven in Frigiliana.',
  who: [
    { id: 'families', title: 'Gezinnen', text: 'Zandstranden om te graven, korte loopjes, ijs bij de Balcón — Nerja is gemaakt voor kinderen.' },
    { id: 'beach', title: 'Strandliefhebbers', text: 'Torrecilla en Burriana voor de deur, plus de verborgen baaien richting Maro.' },
    { id: 'sun', title: 'Zonaanbidders', text: 'Milde winters, een lang seizoen, de zee bijna het hele jaar binnen handbereik.' },
    { id: 'longstay', title: 'Langverblijvers', text: 'Voorzieningen het hele jaar, artsen, markten, cafés — een plek om te landen, niet alleen voor een week.' }
  ],
  pointer: {
    text: '**Nog niet zeker — kust of berg?** Nerja = strand, leven, de zee voor de deur. Frigiliana = dorp, rust, panorama.',
    linkLabel: 'Nerja en Frigiliana in detail vergelijken',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Waarom wij hier zitten',
    title: 'Strand voor de deur — en toch middenin',
    caption: 'Torrecilla ligt aan de voet van de oude kern: het stadsstrand direct, de Balcón de Europa op enkele minuten.',
    mapNote: '(zie de oriëntatiekaart hierboven)',
    lead: 'In Nerja moet je vaak kiezen: strand *of* centrum, nabijheid *of* rust. **AMARA Playa ligt in Torrecilla** — aan de voet van de oude kern, met het stadsstrand pal voor de deur en maar zo’n vijf minuten lopen naar de Balcón de Europa en de restaurants. En rustiger dan de oude kern zelf.',
    facts: ['**Stadsstrand Torrecilla** pal voor de deur', '**5 minuten** lopen naar de Balcón de Europa en de tapas', '**Rustiger** dan de drukke oude kern — zonder de auto'],
    honest: 'Eerlijk blijft: je grootste, meest relaxte stranddag heb je bij Burriana; wie rust en ruimte boven nabijheid stelt, zit beter op de heuvel. Voor strand en centrum in één is Torrecilla de zoete plek.'
  }
};

const sv: WhereToStayCopy = {
  hero: {
    eyebrow: 'Var man bor · Nerja',
    title: 'Var man bor i Nerja',
    lede: 'En livlig kustort ovanför havet — med stränder och Balcón de Europa.',
    body: 'Vita gränder på klipporna, den berömda Balcón de Europa, sandstränder som Torrecilla och Burriana, plus infrastruktur året runt. Nerja är kompakt och mestadels platt — här avgör inte höjden som i Frigiliana, utan närheten: till stranden, till centrum, till lugnet.',
    traits: ['**Balcón de Europa**', 'Sandstränder', 'Tapas & liv', 'Nerjagrottorna', 'Året runt'],
    stats: [
      { id: 'balcon', k: '5 min', l: 'till fots från Torrecilla till Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'stadsstränder vid dörren: Torrecilla & Burriana' },
      { id: 'parts', k: '3', l: 'delar med märkbart olika vardag' }
    ]
  },
  heroCtaZones: 'Se de tre delarna',
  glanceTitle: 'Vilken del passar er?',
  glanceIntro: 'Tre delar, tre sorters vistelse. Det som skiljer dem åt här är framför allt närheten — till stranden, centrum och lugnet.',
  glance: [
    { id: 'altstadt', title: 'Gamla stan & Balcón', blurb: 'Tapas, liv, den berömda balkongen — mitt i, fullt på sommaren' },
    { id: 'strand', title: 'Strandzonerna', blurb: 'Torrecilla & Burriana — havet precis vid dörren' },
    { id: 'hang', title: 'Bostadsområden på höjden', blurb: 'Lugnare, mer plats — men bil eller promenad till centrum' }
  ],
  factorEyebrow: 'Vad som räknas i Nerja',
  factor: {
    title: 'Allt handlar om närheten',
    intro: 'Nerja är kompakt och mestadels platt — ingen bergsby. Här avgör inte höjden, utan närheten: hur långt är det till stranden på morgonen, till tapasen på kvällen, och hur lugn blir natten?',
    copy: 'Några hundra meter gör skillnaden mellan ”strand vid dörren” och ”bil först”, mellan ”mitt i kvällslivet” och ”en lugn natt”. Det bästa läget är det vars **närhet** passar er semester.',
    note: 'En dag vid havet: strand på morgonen, orten på dagen, tapas på kvällen — och en lugn natt?',
    day: ['På morgonen ner till stranden', 'Kaffe och inköp i orten', 'På eftermiddagen till Balcón de Europa', 'På kvällen tapas i gamla stan', 'På natten — högljutt eller lugnt?']
  },
  zonesEyebrow: 'Lägena',
  zonesTitle: 'Nerjas tre delar',
  zonesIntro: 'Grovt sett finns tre världar: den livliga gamla stan vid Balcón, strandzonerna och de lugnare bostadsområdena på höjden. Var och en löser närheten på sitt sätt — och byter något annat mot det.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Gamla stan & Balcón de Europa',
      h3: 'Mitt i — liv, tapas, balkongen',
      desc: 'De vita gränderna kring Balcón de Europa: restauranger, tapasbarer, butiker och den berömda utsiktsbalkongen över havet. Allt till fots, liv hela dagen — men på högsommaren är det fullt och livligt på kvällen.',
      idealFor: 'De som vill ha centrum och restauranger vid dörren och inte skyr vimlet.',
      honest: 'Fullt på sommaren och högljutt på natten; parkering är svårt, och närmaste sandstrand är en kort promenad.'
    },
    {
      id: 'strand',
      sub: 'Strandzonerna',
      h3: 'Havet precis vid dörren',
      desc: 'Precis vid stadsstränderna — här delar sig zonen i två:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'Vid foten av gamla stan: stadsstranden direkt och bara 5 minuter till Balcón — här ligger AMARA Playa.' },
        { id: 'burriana', name: 'Burriana', note: 'Den stora, klassiska sandstranden med strandbarer; en avslappnad stranddag, lite längre från centrum.' }
      ],
      idealFor: 'Strandälskare och familjer som vill vara vid vattnet på morgonen.',
      honest: 'Burriana är livligt på sommaren; därifrån är det en bit att gå till det historiska centrumet.'
    },
    {
      id: 'hang',
      sub: 'Bostadsområden på höjden',
      h3: 'Lugn, rymd — men resan',
      desc: 'De bebyggda sluttningarna som Capistrano eller Punta Lara: lugnare, mer plats, ofta med pool och utsikt. I gengäld ligger stranden, restaurangerna och centrum oftast en bilfärd bort.',
      idealFor: 'De som värderar lugn, utsikt och rymd framför att vara precis vid havet.',
      honest: 'För stranden, inköp och middag är en bil här oftast praktisk eller nödvändig.'
    }
  ],
  labelIdealFor: 'Passar för',
  labelHonest: 'Ärligt',
  whoTitle: 'Vem Nerja är perfekt för',
  whoIntro: 'Nerja passar gäster som vill ha strand, kustliv och bekväm infrastruktur — spansk tradition med havet vid dörren. Den som söker den lugna bergsbyn borta från kusten har bättre av att bo uppe i Frigiliana.',
  who: [
    { id: 'families', title: 'Familjer', text: 'Sandstränder att gräva i, korta promenader, glass vid Balcón — Nerja är gjort för barn.' },
    { id: 'beach', title: 'Strandälskare', text: 'Torrecilla och Burriana vid dörren, plus de dolda vikarna mot Maro.' },
    { id: 'sun', title: 'Solälskare', text: 'Milda vintrar, lång säsong, havet inom räckhåll nästan hela året.' },
    { id: 'longstay', title: 'Långtidsgäster', text: 'Infrastruktur året runt, läkare, marknader, kaféer — en plats att landa på, inte bara för en vecka.' }
  ],
  pointer: {
    text: '**Inte säker än — kust eller berg?** Nerja = strand, liv, havet vid dörren. Frigiliana = by, lugn, panorama.',
    linkLabel: 'Jämför Nerja och Frigiliana i detalj',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Därför valde vi det här läget',
    title: 'Strand vid dörren — och ändå mitt i',
    caption: 'Torrecilla ligger vid foten av gamla stan: stadsstranden direkt, Balcón de Europa bara minuter bort.',
    mapNote: '(se orienteringskartan ovan)',
    lead: 'I Nerja måste man ofta välja: strand *eller* centrum, närhet *eller* lugn. **AMARA Playa ligger i Torrecilla** — vid foten av gamla stan, med stadsstranden precis vid dörren och bara omkring fem minuters promenad till Balcón de Europa och restaurangerna. Och lugnare än gamla stan själv.',
    facts: ['**Stadsstranden Torrecilla** precis vid dörren', '**5 minuter** till fots till Balcón de Europa och tapasen', '**Lugnare** än den livliga gamla stan — utan bilfärd'],
    honest: 'Ärligt talat: din största, mest avslappnade stranddag har du vid Burriana; den som värderar lugn och rymd framför närhet trivs bättre på höjden. För strand och centrum i ett är Torrecilla den söta punkten.'
  }
};

export const nerjaWhereToStayContent: Record<AmaraLanguage, WhereToStayCopy> = {
  de,
  en,
  es,
  nl,
  sv
};
