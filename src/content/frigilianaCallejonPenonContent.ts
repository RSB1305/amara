import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaCallejonPenonSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-callejon-penon-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/05-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-11', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Callejón del Peñón & the Miradores of Frigiliana', description: 'The steep lane in Frigiliana’s upper quarter that is both the village’s most photographed corner and its clearest view of El Fuerte — the mountain that was the site of the 1569 battle.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Callejón del Peñón & die Miradores von Frigiliana', description: 'Die steile Gasse im oberen Viertel von Frigiliana, zugleich der meistfotografierte Winkel des Dorfes und sein klarster Blick auf El Fuerte — den Berg, der Schauplatz der Schlacht von 1569 war.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'El callejón del Peñón y los miradores de Frigiliana', description: 'La calle empinada de la parte alta de Frigiliana, a la vez el rincón más fotografiado del pueblo y su vista más clara de El Fuerte, el monte que fue escenario de la batalla de 1569.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Callejón del Peñón & de miradores van Frigiliana', description: 'Het steile straatje in de bovenwijk van Frigiliana, tegelijk de meest gefotografeerde hoek van het dorp en het helderste uitzicht op El Fuerte — de berg die het toneel was van de slag van 1569.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Callejón del Peñón & Frigilianas miradorer', description: 'Den branta gränden i Frigilianas övre stadsdel, på en gång byns mest fotograferade vrå och dess tydligaste vy mot El Fuerte — berget som var platsen för slaget 1569.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Names the specific viewpoints the Barribarto quarter page leaves
 * general. Authored from the operator brief and the existing El Fuerte / 1569 facts. Some
 * upper lanes are adarves (half-private) — the walk must respect that. No photograph yet:
 * typographic cover.
 */
export const frigilianaCallejonPenonCopy = {
  hero: {
    kicker: l('Old town · Callejón del Peñón', 'Altstadt · Callejón del Peñón', 'Casco antiguo · Callejón del Peñón', 'Oude kern · Callejón del Peñón', 'Gamla stan · Callejón del Peñón'),
    title: l('Callejón del Peñón & the miradores', 'Callejón del Peñón & die Miradores', 'El callejón del Peñón y los miradores', 'Callejón del Peñón & de miradores', 'Callejón del Peñón & miradorerna'),
    subtitle: l(
      'The photographed lane that frames the 1569 mountain',
      'Die fotografierte Gasse, die den Berg von 1569 rahmt',
      'La calle fotografiada que enmarca el monte de 1569',
      'Het gefotografeerde straatje dat de berg van 1569 omlijst',
      'Den fotograferade gränden som ramar in 1569 års berg'
    ),
    paragraphs: [
      l(
        'High in the Barribarto, the steep Callejón del Peñón is the corner every visitor photographs — whitewashed walls, worn steps, pots of geraniums. But turn where it opens and it does something the postcard never says: it frames El Fuerte, the mountain massif directly above the village, and that is exactly where the battle of 1569 was fought. The most photogenic lane in Frigiliana is also its clearest window onto its hardest history.',
        'Hoch im Barribarto ist der steile Callejón del Peñón der Winkel, den jeder Besucher fotografiert — gekalkte Wände, ausgetretene Stufen, Geranientöpfe. Doch dort, wo er sich öffnet, tut er etwas, das die Postkarte nie sagt: Er rahmt El Fuerte, das Bergmassiv direkt über dem Dorf — und genau dort wurde 1569 gekämpft. Die fotogenste Gasse Frigilianas ist zugleich sein klarstes Fenster auf seine härteste Geschichte.',
        'En lo alto del Barribarto, el empinado callejón del Peñón es el rincón que todo visitante fotografía: muros encalados, escalones gastados, macetas de geranios. Pero donde se abre hace algo que la postal nunca dice: enmarca El Fuerte, el macizo justo sobre el pueblo, y ahí mismo se libró la batalla de 1569. La calle más fotogénica de Frigiliana es también su ventana más clara a su historia más dura.',
        'Hoog in het Barribarto is het steile Callejón del Peñón de hoek die elke bezoeker fotografeert — witgekalkte muren, versleten treden, potten geraniums. Maar waar het zich opent, doet het iets wat de ansichtkaart nooit zegt: het omlijst El Fuerte, het bergmassief pal boven het dorp, en precies daar werd in 1569 gevochten. Het meest fotogenieke straatje van Frigiliana is ook zijn helderste venster op zijn hardste geschiedenis.',
        'Högt upp i Barribarto är den branta Callejón del Peñón den vrå varje besökare fotograferar — vitkalkade väggar, nötta trappsteg, krukor med pelargoner. Men där den öppnar sig gör den något som vykortet aldrig säger: den ramar in El Fuerte, bergsmassivet rakt ovanför byn, och just där utkämpades slaget 1569. Frigilianas mest fotogeniska gränd är också dess tydligaste fönster mot dess hårdaste historia.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: 'Peñón', label: l('The steep lane in the upper quarter', 'Die steile Gasse im oberen Viertel', 'La calle empinada de la parte alta', 'Het steile straatje in de bovenwijk', 'Den branta gränden i övre stadsdelen') },
      { value: 'Foto', label: l('One of the village’s best-known corners', 'Einer der bekanntesten Winkel des Dorfes', 'Uno de los rincones más conocidos del pueblo', 'Een van de bekendste hoeken van het dorp', 'En av byns mest kända vrår') },
      { value: 'El Fuerte', label: l('The view opens to the 1569 battle mountain', 'Der Blick öffnet sich zum Schlachtberg von 1569', 'La vista se abre al monte de la batalla de 1569', 'Het uitzicht opent naar de slagberg van 1569', 'Vyn öppnar sig mot 1569 års slagberg') },
      { value: 'Mirador', label: l('Viewpoints over the old town’s roofs', 'Aussichtspunkte über die Dächer der Altstadt', 'Miradores sobre los tejados del casco antiguo', 'Uitkijkpunten over de daken van de oude kern', 'Utsiktspunkter över gamla stans tak') }
    ],
    note: l(
      'Some upper lanes are adarves — half-private passages serving only their own houses; walk them with that in mind.',
      'Manche oberen Gassen sind Adarves — halbprivate Durchgänge, die nur ihre eigenen Häuser erschließen; geht sie mit diesem Wissen.',
      'Algunas calles altas son adarves —pasajes semiprivados que solo dan servicio a sus casas—; recorredlas con eso presente.',
      'Sommige hoge straatjes zijn adarves — halfprivé doorgangen die alleen hun eigen huizen ontsluiten; loop ze met dat in gedachten.',
      'Vissa övre gränder är adarves — halvprivata passager som bara betjänar sina egna hus; gå dem med det i åtanke.'
    )
  },
  sections: [
    {
      eyebrow: l('The lane', 'Die Gasse', 'La calle', 'Het straatje', 'Gränden'),
      title: l('The corner everyone photographs', 'Der Winkel, den alle fotografieren', 'El rincón que todos fotografían', 'De hoek die iedereen fotografeert', 'Vrån alla fotograferar'),
      text: l(
        'The Callejón del Peñón is the picture most people carry home from Frigiliana: a narrow, stepped lane in the medieval upper quarter, walls limewashed white, flowers spilling from the ledges. It is steep and cobbled, so it asks for shoes with grip and a slow pace — which suits it, because the reward is not just the frame but where it points.',
        'Der Callejón del Peñón ist das Bild, das die meisten aus Frigiliana mitnehmen: eine schmale, gestufte Gasse im mittelalterlichen Oberviertel, weiß gekalkte Wände, Blumen, die von den Simsen quellen. Sie ist steil und gepflastert, verlangt also Schuhe mit Profil und ein langsames Tempo — was ihr entgegenkommt, denn der Lohn ist nicht nur der Rahmen, sondern wohin er zeigt.',
        'El callejón del Peñón es la imagen que la mayoría se lleva de Frigiliana: una calle estrecha y escalonada en la parte alta medieval, muros encalados de blanco, flores desbordando los alféizares. Es empinada y empedrada, así que pide calzado con agarre y paso lento, lo que le va bien, porque la recompensa no es solo el encuadre, sino hacia dónde apunta.',
        'Het Callejón del Peñón is het beeld dat de meesten van Frigiliana meenemen: een smal, getrapt straatje in de middeleeuwse bovenwijk, wit gekalkte muren, bloemen die van de randen tuimelen. Het is steil en geplaveid en vraagt dus om schoenen met grip en een traag tempo — wat het past, want de beloning is niet alleen de omlijsting, maar waar ze naar wijst.',
        'Callejón del Peñón är bilden de flesta bär hem från Frigiliana: en smal, trappad gränd i den medeltida övre stadsdelen, vitkalkade väggar, blommor som väller ut från avsatserna. Den är brant och stenlagd och ber därför om skor med grepp och ett långsamt tempo — vilket passar den, för belöningen är inte bara ramen utan vart den pekar.'
      )
    },
    {
      eyebrow: l('The view of El Fuerte', 'Der Blick auf El Fuerte', 'La vista de El Fuerte', 'Het uitzicht op El Fuerte', 'Vyn mot El Fuerte'),
      title: l('Where the picture becomes history', 'Wo das Bild zur Geschichte wird', 'Donde la foto se vuelve historia', 'Waar de foto geschiedenis wordt', 'Där bilden blir historia'),
      text: l(
        'Where the lane opens, El Fuerte fills the view — the mountain rising straight above the village. That is not a neutral backdrop. El Fuerte was the site of the 1569 battle, the last stand of the Morisco revolt whose whole story the ceramic panels tell a few lanes away. Stand here and the two things you have been looking at all day, the pretty white village and its violent history, line up in a single frame.',
        'Dort, wo sich die Gasse öffnet, füllt El Fuerte den Blick — der Berg, der direkt über dem Dorf aufsteigt. Das ist keine neutrale Kulisse. El Fuerte war der Schauplatz der Schlacht von 1569, des letzten Widerstands des Morisken-Aufstands, dessen ganze Geschichte die Keramiktafeln wenige Gassen weiter erzählen. Steht hier, und die beiden Dinge, die ihr den ganzen Tag angesehen habt — das hübsche weiße Dorf und seine gewaltsame Geschichte — fügen sich in ein einziges Bild.',
        'Donde la calle se abre, El Fuerte llena la vista: el monte que se alza justo sobre el pueblo. No es un telón neutro. El Fuerte fue el escenario de la batalla de 1569, la última resistencia de la rebelión morisca cuya historia entera cuentan los azulejos unas calles más allá. Poneos aquí y las dos cosas que habéis estado mirando todo el día —el bonito pueblo blanco y su historia violenta— se alinean en un solo encuadre.',
        'Waar het straatje zich opent, vult El Fuerte het uitzicht — de berg die pal boven het dorp oprijst. Dat is geen neutrale achtergrond. El Fuerte was het toneel van de slag van 1569, het laatste verzet van de Moriskenopstand wiens hele verhaal de keramiekpanelen een paar straatjes verderop vertellen. Sta hier en de twee dingen waar je de hele dag naar hebt gekeken — het mooie witte dorp en zijn gewelddadige geschiedenis — vallen samen in één beeld.',
        'Där gränden öppnar sig fyller El Fuerte vyn — berget som reser sig rakt ovanför byn. Det är ingen neutral fond. El Fuerte var platsen för slaget 1569, moriskupprorets sista motstånd vars hela historia keramikpanelerna några gränder bort berättar. Stå här och de två sakerna ni sett på hela dagen — den vackra vita byn och dess våldsamma historia — ställer upp sig i en enda bild.'
      )
    },
    {
      eyebrow: l('The miradores', 'Die Miradores', 'Los miradores', 'De miradores', 'Miradorerna'),
      title: l('Where to stand, and when', 'Wo man steht, und wann', 'Dónde situarse, y cuándo', 'Waar te staan, en wanneer', 'Var man står, och när'),
      text: l(
        'Around the Peñón the upper quarter offers a handful of small miradores — openings and terraces that give out over the tiled roofs and the valley. Early and late are best: the low sun rakes across the white walls and the mountain, and the lanes are quiet. Remember that some of these passages are adarves, half-private and serving only their own houses, so tread lightly and keep to the open viewpoints.',
        'Rund um den Peñón bietet das obere Viertel eine Handvoll kleiner Miradores — Öffnungen und Terrassen, die über die Ziegeldächer und das Tal hinausgehen. Früh und spät ist es am schönsten: Die tiefe Sonne streift über die weißen Wände und den Berg, und die Gassen sind still. Denkt daran, dass manche dieser Durchgänge Adarves sind, halbprivat und nur ihren eigenen Häusern dienend — tretet also leise auf und bleibt an den offenen Aussichtspunkten.',
        'En torno al Peñón, la parte alta ofrece un puñado de pequeños miradores: aberturas y terrazas que dan sobre los tejados y el valle. Temprano y al atardecer es lo mejor: el sol bajo roza los muros blancos y el monte, y las calles están tranquilas. Recordad que algunos de esos pasajes son adarves, semiprivados y al servicio solo de sus casas, así que pisad con cuidado y quedaos en los miradores abiertos.',
        'Rond de Peñón biedt de bovenwijk een handvol kleine miradores — openingen en terrassen die uitkijken over de pannendaken en het dal. Vroeg en laat is het mooist: de lage zon strijkt over de witte muren en de berg, en de straatjes zijn stil. Onthoud dat sommige van deze doorgangen adarves zijn, halfprivé en alleen voor hun eigen huizen, dus loop zacht en blijf bij de open uitkijkpunten.',
        'Runt Peñón erbjuder övre stadsdelen en handfull små miradorer — öppningar och terrasser som ger utsikt över tegeltaken och dalen. Tidigt och sent är bäst: den låga solen stryker över de vita väggarna och berget, och gränderna är tysta. Kom ihåg att några av dessa passager är adarves, halvprivata och till för sina egna hus, så trampa varsamt och håll er till de öppna utsiktspunkterna.'
      )
    }
  ],
  pullQuote: l(
    'The prettiest lane in the village opens straight onto the mountain where 1569 ended.',
    'Die schönste Gasse des Dorfes öffnet sich geradewegs auf den Berg, an dem 1569 endete.',
    'La calle más bonita del pueblo se abre justo al monte donde acabó 1569.',
    'Het mooiste straatje van het dorp opent recht op de berg waar 1569 eindigde.',
    'Byns vackraste gränd öppnar sig rakt mot berget där 1569 slutade.'
  ),
  closing: {
    title: l('Time it for the light', 'Plant es fürs Licht', 'Buscad la luz', 'Kies het juiste licht', 'Sikta på ljuset'),
    lead: l(
      'The Callejón del Peñón is a short, steep climb up from Casa AMARA into the Barribarto. Go early or late for the light on El Fuerte, and pair the view with the ceramic panels and the ruined Castillo de Lizar that tell you what you are looking at.',
      'Der Callejón del Peñón ist ein kurzer, steiler Anstieg von Casa AMARA hinauf ins Barribarto. Geht früh oder spät wegen des Lichts auf El Fuerte und verbindet den Blick mit den Keramiktafeln und der Ruine des Castillo de Lizar, die euch sagen, was ihr da seht.',
      'El callejón del Peñón es una subida corta y empinada desde Casa AMARA hasta el Barribarto. Id temprano o al atardecer por la luz sobre El Fuerte, y combinad la vista con los azulejos y los restos del castillo de Lízar, que os dicen qué estáis mirando.',
      'Het Callejón del Peñón is een korte, steile klim vanaf Casa AMARA het Barribarto in. Ga vroeg of laat voor het licht op El Fuerte, en combineer het uitzicht met de keramiekpanelen en de ruïne van het Castillo de Lizar die je vertellen waar je naar kijkt.',
      'Callejón del Peñón är en kort, brant klättring från Casa AMARA upp i Barribarto. Gå tidigt eller sent för ljuset på El Fuerte, och kombinera vyn med keramikpanelerna och ruinen av Castillo de Lizar som talar om vad ni ser.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
