import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';

/**
 * Tarifa kitesurf beginner guide — an educational spoke beneath the kitesurf
 * cluster. It is preparation and review around real lessons, never a substitute
 * for a qualified school on the water. Safety-critical statements stay bounded:
 * systems vary by bar and manufacturer, and kite size and conditions remain a
 * teacher's call. The evidence base is VDWS, ISO 21853, Duotone, IKO and North.
 */
export type LocalizedGuideText = Record<AmaraLanguage, string>;

export interface TarifaKitesurfGuideContent {
  id: string;
  token: LinkToken;
  seo: AmaraAuthoringSeo;
  navLabel: LocalizedGuideText;
  breadcrumbLabel: LocalizedGuideText;
  hero: {
    eyebrow: LocalizedGuideText;
    title: LocalizedGuideText;
    standfirst: LocalizedGuideText;
    note: LocalizedGuideText;
    updated: LocalizedGuideText;
  };
  facts: Array<{ label: LocalizedGuideText; value: LocalizedGuideText }>;
  sections: Array<{ id: string; eyebrow: LocalizedGuideText; title: LocalizedGuideText; paragraphs: LocalizedGuideText[] }>;
  host: { eyebrow: LocalizedGuideText; title: LocalizedGuideText; paragraphs: LocalizedGuideText[] };
  related: {
    eyebrow: LocalizedGuideText;
    title: LocalizedGuideText;
    links: Array<{ token: LinkToken; label: LocalizedGuideText; text: LocalizedGuideText }>;
  };
  sources: {
    eyebrow: LocalizedGuideText;
    title: LocalizedGuideText;
    intro: LocalizedGuideText;
    checked: LocalizedGuideText;
    links: Array<{ label: LocalizedGuideText; text: LocalizedGuideText; href: string }>;
  };
  closing: {
    eyebrow: LocalizedGuideText;
    title: LocalizedGuideText;
    body: LocalizedGuideText;
    hubLabel: LocalizedGuideText;
    propertyLabel: LocalizedGuideText;
  };
}

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedGuideText => ({ en, de, es, nl, sv });

const seo: AmaraAuthoringSeo = {
  version: '2026-09-04-tarifa-kitesurf-beginner-guide-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-09-04',
    dateModified: '2026-09-04',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: { title: 'Kitesurfing for Beginners | Tarifa Learn-to-Kite Guide', description: 'Learn how kitesurfing works before your first lesson in Tarifa: the kite, the wind window, the safety cascade and the real learning path — with gear arranged through AMARA.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Kitesurfen für Anfänger | Tarifa Lern-Guide', description: 'Versteht Kitesurfen vor der ersten Stunde in Tarifa: Kite, Windfenster, Safety-Kaskade und der echte Lernweg – mit Material über AMARA organisiert.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Kitesurf para principiantes | Guía de Tarifa', description: 'Entiende cómo funciona el kitesurf antes de tu primera clase en Tarifa: la cometa, la ventana de viento, la cascada de seguridad y el aprendizaje real, con material a través de AMARA.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Kitesurfen voor beginners | Tarifa leergids', description: 'Begrijp hoe kitesurfen werkt vóór je eerste les in Tarifa: de kite, het windvenster, de veiligheidscascade en het echte leerpad — met materiaal via AMARA geregeld.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Kitesurfing för nybörjare | Tarifa-guide', description: 'Förstå hur kitesurfing fungerar före din första lektion i Tarifa: kiten, vindfönstret, säkerhetskaskaden och den verkliga inlärningsvägen — med utrustning via AMARA.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const tarifaKitesurfBeginnerGuide: TarifaKitesurfGuideContent = {
  id: 'kitesurf-beginner-guide',
  token: 'tarifa_kitesurf_beginner_guide',
  seo,
  navLabel: l('Beginner guide', 'Anfänger-Guide', 'Guía de iniciación', 'Beginnersgids', 'Nybörjarguide'),
  breadcrumbLabel: l('Beginner guide', 'Anfänger-Guide', 'Guía de iniciación', 'Beginnersgids', 'Nybörjarguide'),
  hero: {
    eyebrow: l('Tarifa kitesurf guide', 'Tarifa Kitesurf-Guide', 'Guía de kitesurf en Tarifa', 'Tarifa kitesurfgids', 'Tarifa kitesurfguide'),
    title: l(
      'Learn the wind before you learn the board',
      'Lernt den Wind, bevor ihr das Board lernt',
      'Aprende el viento antes que la tabla',
      'Leer eerst de wind, dan de board',
      'Lär dig vinden före brädan'
    ),
    standfirst: l(
      'Kitesurfing starts with controlling a wind-powered kite, not with standing on a board. A good school breaks it into steps: understand the wind and the wind window, operate the safety systems without looking, fly a trainer kite, body-drag, relaunch, and only then water-start and ride. Read this guide before and after your lessons so the beach vocabulary already makes sense. It is preparation, never a substitute for a qualified school on the water — a mis-steered kite can accelerate you in seconds, which is exactly what supervised training exists to prevent.',
      'Kitesurfen beginnt damit, einen vom Wind angetriebenen Kite zu kontrollieren, nicht damit, auf einem Board zu stehen. Eine gute Schule zerlegt das in Schritte: Wind und Windfenster verstehen, die Safety-Systeme blind bedienen, einen Trainerkite fliegen, Bodydrag, Relaunch – und erst dann Wasserstart und Fahren. Lest diesen Guide vor und nach euren Stunden, damit die Sprache am Strand schon sitzt. Er ist Vorbereitung, kein Ersatz für eine qualifizierte Schule am Wasser – ein falsch gesteuerter Kite kann euch in Sekunden beschleunigen, und genau das verhindert betreutes Training.',
      'El kitesurf empieza controlando una cometa impulsada por el viento, no de pie sobre una tabla. Una buena escuela lo divide en pasos: entender el viento y la ventana de viento, manejar los sistemas de seguridad sin mirar, volar una cometa de entrenamiento, hacer bodydrag, relanzar y solo entonces el waterstart y navegar. Lee esta guía antes y después de tus clases para que el vocabulario de la playa ya te suene. Es preparación, nunca un sustituto de una escuela cualificada en el agua: una cometa mal dirigida puede acelerarte en segundos, y para eso existe la formación supervisada.',
      'Kitesurfen begint met het beheersen van een door wind aangedreven kite, niet met staan op een board. Een goede school splitst het in stappen: wind en windvenster begrijpen, de veiligheidssystemen zonder kijken bedienen, een trainerkite vliegen, bodydraggen, relaunchen en pas dan de waterstart en varen. Lees deze gids vóór en na je lessen, zodat het strandjargon al klopt. Het is voorbereiding, nooit een vervanging van een gekwalificeerde school op het water — een verkeerd gestuurde kite kan je in seconden versnellen, en daarvoor bestaat begeleide training.',
      'Kitesurfing börjar med att kontrollera en vinddriven kite, inte med att stå på en bräda. En bra skola delar upp det i steg: förstå vinden och vindfönstret, sköta säkerhetssystemen utan att titta, flyga en träningskite, bodydrag, relaunch och först därefter vattenstart och åkning. Läs guiden före och efter dina lektioner så att orden på stranden redan sitter. Den är förberedelse, aldrig en ersättning för en kvalificerad skola på vattnet — en felstyrd kite kan accelerera dig på sekunder, och det är just vad handledd träning finns till för.'
    ),
    note: l(
      'Preparation and review for real lessons, not a substitute for professional instruction. Safety systems and procedures differ by bar and manufacturer; learn and practise them on your own equipment with a qualified instructor.',
      'Vorbereitung und Nachbereitung für echte Stunden, kein Ersatz für professionellen Unterricht. Safety-Systeme und Abläufe unterscheiden sich je nach Bar und Hersteller; lernt und übt sie an eurem eigenen Material mit einer qualifizierten Lehrkraft.',
      'Preparación y repaso para clases reales, no un sustituto de la instrucción profesional. Los sistemas de seguridad y los procedimientos varían según la barra y el fabricante; apréndelos y practícalos con tu propio material y un instructor cualificado.',
      'Voorbereiding en herhaling voor echte lessen, geen vervanging van professionele instructie. Veiligheidssystemen en procedures verschillen per bar en fabrikant; leer en oefen ze op je eigen materiaal met een gekwalificeerde instructeur.',
      'Förberedelse och repetition för riktiga lektioner, inte en ersättning för professionell instruktion. Säkerhetssystem och rutiner skiljer sig mellan bar och tillverkare; lär och öva dem på din egen utrustning med en kvalificerad instruktör.'
    ),
    updated: l('Guide checked in September 2026', 'Guide geprüft im September 2026', 'Guía revisada en septiembre de 2026', 'Gids gecontroleerd in september 2026', 'Guide kontrollerad i september 2026')
  },
  facts: [
    { label: l('The order', 'Die Reihenfolge', 'El orden', 'De volgorde', 'Ordningen'), value: l('Kite control before the board', 'Kitekontrolle vor dem Board', 'Control de la cometa antes que la tabla', 'Kitecontrole vóór de board', 'Kitekontroll före brädan') },
    { label: l('Safety cascade', 'Safety-Kaskade', 'Cascada de seguridad', 'Veiligheidscascade', 'Säkerhetskaskad'), value: l('Sheet out → chicken-loop release → leash release', 'Auspowern → Chicken-Loop-Release → Leash-Release', 'Despotenciar → soltar chicken loop → soltar leash', 'Uitsheeten → chicken loop los → leash los', 'Släpp trycket → chicken loop-release → leash-release') },
    { label: l('Golden rule', 'Goldene Regel', 'Regla de oro', 'Gouden regel', 'Gyllene regel'), value: l('Control over power, not power', 'Kontrolle über die Power, nicht Power', 'Control de la potencia, no potencia', 'Controle over de kracht, niet kracht', 'Kontroll över kraften, inte kraft') }
  ],
  sections: [
    {
      id: 'the-system',
      eyebrow: l('01 · Your system', '01 · Dein System', '01 · Tu equipo', '01 · Je systeem', '01 · Ditt system'),
      title: l('Kite, bar, chicken loop and harness', 'Kite, Bar, Chicken Loop und Trapez', 'Cometa, barra, chicken loop y arnés', 'Kite, bar, chicken loop en trapeze', 'Kite, bar, chicken loop och sele'),
      paragraphs: [
        l(
          'Think of the kite as the motor: the wind drives it, and it turns that into pull. The lines carry the pull to the bar; the bar steers left and right and, on a modern depower kite, also changes how much power you feel. The chicken loop connects the bar to your harness — and it usually carries your most important quick release.',
          'Stellt euch den Kite als Motor vor: Der Wind treibt ihn an, und er wandelt das in Zug um. Die Leinen tragen den Zug zur Bar; die Bar lenkt links und rechts und verändert bei einem modernen Depower-Kite auch, wie viel Leistung ihr spürt. Der Chicken Loop verbindet die Bar mit eurem Trapez – und hier sitzt meist euer wichtigstes Quick Release.',
          'Piensa en la cometa como el motor: el viento la impulsa y ella lo convierte en tracción. Las líneas llevan la tracción a la barra; la barra dirige a izquierda y derecha y, en una cometa con depower moderno, también cambia cuánta potencia sientes. El chicken loop une la barra con tu arnés, y ahí suele estar tu quick release más importante.',
          'Zie de kite als de motor: de wind drijft hem aan en hij zet dat om in trekkracht. De lijnen brengen de kracht naar de bar; de bar stuurt links en rechts en verandert bij een moderne depowerkite ook hoeveel kracht je voelt. De chicken loop verbindt de bar met je trapeze — en daar zit meestal je belangrijkste quick release.',
          'Se kiten som motorn: vinden driver den och den omvandlar det till drag. Linorna för draget till baren; baren styr vänster och höger och ändrar på en modern depowerkite även hur mycket kraft du känner. Chicken loop-en kopplar baren till din sele — och där sitter oftast din viktigaste quick release.'
        ),
        l(
          'The most useful habit from day one: the harness carries the pull, your hands only steer. Clinging to the bar with both arms means the system is fighting you. Hands light, kite calm.',
          'Die nützlichste Gewohnheit ab dem ersten Tag: Das Trapez trägt den Zug, eure Hände steuern nur. Wer sich mit beiden Armen an die Bar klammert, arbeitet gegen das System. Hände locker, Kite ruhig.',
          'El hábito más útil desde el primer día: el arnés soporta la tracción, tus manos solo dirigen. Aferrarse a la barra con los dos brazos es luchar contra el sistema. Manos sueltas, cometa tranquila.',
          'De nuttigste gewoonte vanaf dag één: het trapeze draagt de kracht, je handen sturen alleen. Je met beide armen vastklampen aan de bar betekent tegen het systeem werken. Handen los, kite rustig.',
          'Den nyttigaste vanan från dag ett: selen bär draget, dina händer styr bara. Att klamra sig fast vid baren med båda armarna är att jobba mot systemet. Lösa händer, lugn kite.'
        )
      ]
    },
    {
      id: 'wind-window',
      eyebrow: l('02 · The wind window', '02 · Das Windfenster', '02 · La ventana de viento', '02 · Het windvenster', '02 · Vindfönstret'),
      title: l('Where the kite makes power, and where it rests', 'Wo der Kite Leistung macht – und wo er ruht', 'Dónde genera potencia la cometa y dónde descansa', 'Waar de kite kracht maakt en waar hij rust', 'Var kiten skapar kraft och var den vilar'),
      paragraphs: [
        l(
          'Stand with your back to the wind and imagine a giant half-clock in front of you. The edges — near 9, 12 and 3 o’clock — hold little pull, which is why launching, landing and parking the kite happen there. Deeper and lower, towards the centre, is the power zone. Send the kite quickly through it and it pulls hard; that is the controlled impulse a water-start needs, and the unwanted surge a careless steering move creates.',
          'Stellt euch mit dem Rücken zum Wind und denkt euch eine riesige halbe Uhr vor euch. Die Ränder – bei etwa 9, 12 und 3 Uhr – haben wenig Zug; deshalb finden Start, Landung und Parken des Kites dort statt. Weiter innen und tiefer, zur Mitte hin, liegt die Powerzone. Schickt den Kite schnell hindurch, zieht er kräftig; das ist der kontrollierte Impuls für den Wasserstart – und der ungewollte Ruck bei einer unbedachten Lenkbewegung.',
          'Ponte de espaldas al viento e imagina un enorme medio reloj delante de ti. Los bordes —cerca de las 9, las 12 y las 3— tienen poca tracción; por eso ahí se despega, se aterriza y se aparca la cometa. Más adentro y más abajo, hacia el centro, está la zona de potencia. Si mandas la cometa rápido a través de ella, tira con fuerza: ese es el impulso controlado del waterstart y el tirón no deseado de un giro descuidado.',
          'Ga met je rug naar de wind staan en stel je een enorme halve klok voor je voor. De randen — bij ongeveer 9, 12 en 3 uur — hebben weinig trekkracht; daarom gebeuren opstijgen, landen en parkeren daar. Dieper en lager, naar het midden, ligt de powerzone. Stuur de kite er snel doorheen en hij trekt hard; dat is de gecontroleerde impuls voor een waterstart en de ongewenste ruk van een onvoorzichtige stuurbeweging.',
          'Stå med ryggen mot vinden och föreställ dig en jättelik halvklocka framför dig. Kanterna — kring 9, 12 och 3 — har lite drag; därför sker start, landning och parkering där. Längre in och lägre, mot mitten, ligger kraftzonen. Skicka kiten snabbt genom den och den drar hårt; det är den kontrollerade impulsen för en vattenstart och den oönskade rycket från en slarvig styrrörelse.'
        ),
        l(
          'A common beginner idea is that a bigger kite simply means more power. It is not that simple: power depends on wind strength, position in the window, flying speed, trim, board, rider weight and the kite model. That is why kite size is a decision for your instructor, never a copy of what the next rider is on.',
          'Ein häufiger Anfängergedanke: Ein größerer Kite bedeute einfach mehr Power. So einfach ist es nicht: Leistung hängt von Windstärke, Position im Fenster, Fluggeschwindigkeit, Trim, Board, Fahrergewicht und Kite-Modell ab. Deshalb ist die Kitegröße eine Entscheidung eurer Lehrkraft, nie eine Kopie dessen, was der Nachbar fährt.',
          'Una idea frecuente de principiante es que una cometa más grande significa más potencia sin más. No es tan simple: la potencia depende de la fuerza del viento, la posición en la ventana, la velocidad de vuelo, el trim, la tabla, el peso del rider y el modelo. Por eso la talla de la cometa la decide tu instructor, nunca una copia de lo que lleva el de al lado.',
          'Een veelvoorkomend beginnersidee is dat een grotere kite gewoon meer kracht betekent. Zo simpel is het niet: kracht hangt af van windkracht, positie in het venster, vliegsnelheid, trim, board, rijdersgewicht en model. Daarom is de kitemaat een beslissing van je instructeur, nooit een kopie van wat de buurman vaart.',
          'En vanlig nybörjartanke är att en större kite helt enkelt betyder mer kraft. Så enkelt är det inte: kraften beror på vindstyrka, position i fönstret, flyghastighet, trim, bräda, åkarvikt och modell. Därför är kitestorleken ett beslut för din instruktör, aldrig en kopia av vad grannen kör.'
        )
      ]
    },
    {
      id: 'safety',
      eyebrow: l('03 · Safety first', '03 · Sicherheit zuerst', '03 · Seguridad primero', '03 · Veiligheid eerst', '03 · Säkerhet först'),
      title: l('Plan how the session ends before it starts', 'Plant das Ende der Session, bevor sie beginnt', 'Planifica el final de la sesión antes de empezar', 'Plan hoe de sessie eindigt voordat hij begint', 'Planera hur passet slutar innan det börjar'),
      paragraphs: [
        l(
          'Before any launch, run a check: wind direction and where you drift if everything stops, wind quality, weather, clear downwind space, a safe launch area, water hazards, the right kite, lines untangled, and a quick release you can find with your eyes closed. Beginners want side-onshore or side-shore wind and plenty of room; offshore wind is a clear no.',
          'Vor jedem Start ein Check: Windrichtung und wohin ihr treibt, wenn alles stoppt, Windqualität, Wetter, freier Downwind-Raum, sichere Startfläche, Wassergefahren, der passende Kite, entwirrte Leinen und ein Quick Release, das ihr mit geschlossenen Augen findet. Anfänger wollen side-onshore oder sideshore und viel Platz; ablandiger Wind ist ein klares Nein.',
          'Antes de cada despegue, haz una comprobación: dirección del viento y hacia dónde derivas si todo se detiene, calidad del viento, tiempo, espacio libre a sotavento, zona de despegue segura, peligros del agua, la cometa adecuada, líneas sin enredos y un quick release que encuentres con los ojos cerrados. Los principiantes quieren viento side-onshore o sideshore y espacio de sobra; el viento offshore es un no claro.',
          'Vóór elke launch een check: windrichting en waarheen je drijft als alles stopt, windkwaliteit, weer, vrije downwindruimte, een veilige launchzone, watergevaren, de juiste kite, ontwarde lijnen en een quick release die je met gesloten ogen vindt. Beginners willen side-onshore of sideshore wind en veel ruimte; aflandige wind is een duidelijk nee.',
          'Före varje start, gör en koll: vindriktning och vart du driver om allt stannar, vindkvalitet, väder, fri downwindyta, ett säkert startområde, vattenfaror, rätt kite, otrasslade linor och en quick release du hittar med slutna ögon. Nybörjare vill ha side-onshore eller sidevind och gott om plats; frånlandsvind är ett tydligt nej.'
        ),
        l(
          'Modern bars have a safety cascade: first let the bar out to lose most of the pull; if that is not enough, release the chicken-loop quick release so the kite flags out on its safety line; in a real emergency, release the leash for a full separation. The exact motion and reset differ between systems, so you train it on your own bar — and you practise self-rescue on a good day so you can do it on a bad one.',
          'Moderne Bars haben eine Safety-Kaskade: zuerst die Bar loslassen, um den meisten Zug zu verlieren; reicht das nicht, das Chicken-Loop-Quick-Release auslösen, sodass der Kite an der Safety-Line ausflaggt; im echten Notfall die Leash lösen für die vollständige Trennung. Bewegung und Reset unterscheiden sich je System, also trainiert ihr das an eurer eigenen Bar – und übt Self-Rescue am guten Tag, um sie am schlechten zu können.',
          'Las barras modernas tienen una cascada de seguridad: primero suelta la barra para perder casi toda la tracción; si no basta, activa el quick release del chicken loop para que la cometa quede en bandera en su línea de seguridad; en una emergencia real, suelta el leash para separarte del todo. El movimiento y el rearme varían según el sistema, así que se entrena con tu propia barra, y el autorrescate se practica un buen día para poder hacerlo uno malo.',
          'Moderne bars hebben een veiligheidscascade: laat eerst de bar los om het meeste trek te verliezen; is dat niet genoeg, activeer dan de chicken-loop quick release zodat de kite uitvlagt aan zijn veiligheidslijn; bij een echte noodsituatie laat je de leash los voor volledige loskoppeling. Beweging en reset verschillen per systeem, dus je traint het op je eigen bar — en je oefent self-rescue op een goede dag om het op een slechte te kunnen.',
          'Moderna barer har en säkerhetskaskad: släpp först ut baren för att tappa det mesta av draget; räcker inte det, utlös chicken loop-quick release så att kiten flaggar ut på sin säkerhetslina; i en verklig nödsituation, släpp leash-en för full frikoppling. Rörelse och återställning skiljer sig mellan system, så du tränar det på din egen bar — och övar self-rescue en bra dag för att klara den en dålig.'
        )
      ]
    },
    {
      id: 'learning-path',
      eyebrow: l('04 · The learning path', '04 · Der Lernweg', '04 · El aprendizaje', '04 · Het leerpad', '04 · Inlärningsvägen'),
      title: l('You earn the board by making kite control boring', 'Ihr verdient das Board, indem Kitekontrolle langweilig wird', 'Te ganas la tabla cuando el control de la cometa aburre', 'Je verdient de board als kitecontrole saai wordt', 'Du förtjänar brädan när kitekontrollen blir tråkig'),
      paragraphs: [
        l(
          'The order that saves the most frustration is the one schools use: theory and the wind window, dry safety practice, a trainer kite to program your hands, calm control with a full kite, power and directional body-drag, relaunch, then the water-start and first rides, and finally holding and running upwind. Progress is measured in skills reliably done, not in hours logged.',
          'Die Reihenfolge, die den meisten Frust spart, ist die der Schulen: Theorie und Windfenster, trockene Safety-Übung, ein Trainerkite, um die Hände zu programmieren, ruhige Kontrolle mit vollem Kite, Power- und Richtungs-Bodydrag, Relaunch, dann Wasserstart und erste Fahrten und schließlich Höhe halten und laufen. Fortschritt misst sich in zuverlässig beherrschten Fertigkeiten, nicht in geloggten Stunden.',
          'El orden que ahorra más frustración es el de las escuelas: teoría y ventana de viento, práctica de seguridad en seco, una cometa de entrenamiento para programar las manos, control tranquilo con cometa completa, bodydrag de potencia y direccional, relanzamiento, luego el waterstart y las primeras navegadas, y por fin mantener y ganar barlovento. El progreso se mide en destrezas fiables, no en horas.',
          'De volgorde die de meeste frustratie bespaart, is die van de scholen: theorie en windvenster, droge veiligheidsoefening, een trainerkite om je handen te programmeren, rustige controle met een volledige kite, power- en richtingsbodydrag, relaunch, dan de waterstart en eerste ritten, en ten slotte hoogte houden en upwind lopen. Vooruitgang meet je in betrouwbaar beheerste vaardigheden, niet in uren.',
          'Ordningen som sparar mest frustration är skolornas: teori och vindfönster, torr säkerhetsövning, en träningskite för att programmera händerna, lugn kontroll med full kite, kraft- och riktningsbodydrag, relaunch, sedan vattenstart och första åken, och till sist att hålla och gå upwind. Framsteg mäts i färdigheter man klarar tillförlitligt, inte i loggade timmar.'
        ),
        l(
          'Body-drag deserves patience even though the board looks more exciting: it is how you recover a board after a fall, and it is a core safety skill, not a chore to skip. When the water-start comes, let the kite lift your hips over the board rather than pulling yourself up against it.',
          'Bodydrag verdient Geduld, auch wenn das Board spannender aussieht: So bergt ihr nach einem Sturz euer Board, und es ist eine zentrale Sicherheitsfertigkeit, keine überspringbare Pflicht. Beim Wasserstart lasst den Kite eure Hüfte über das Board heben, statt euch dagegen hochzuziehen.',
          'El bodydrag merece paciencia aunque la tabla parezca más emocionante: así recuperas la tabla tras una caída y es una destreza de seguridad clave, no un trámite que saltarse. Cuando llegue el waterstart, deja que la cometa levante tus caderas sobre la tabla en vez de tirar de ti contra ella.',
          'Bodydrag verdient geduld, ook al lijkt de board spannender: zo haal je na een val je board terug en het is een kernveiligheidsvaardigheid, geen klus om over te slaan. Als de waterstart komt, laat de kite je heupen over de board tillen in plaats van jezelf ertegen op te trekken.',
          'Bodydrag förtjänar tålamod även om brädan ser mer spännande ut: så hämtar du brädan efter ett fall och det är en central säkerhetsfärdighet, inte något att hoppa över. När vattenstarten kommer, låt kiten lyfta höften över brädan i stället för att dra dig upp mot den.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('AMARA host perspective', 'AMARA Host-Perspektive', 'Perspectiva del anfitrión de AMARA', 'Perspectief van de AMARA-host', 'AMARA-värdens perspektiv'),
    title: l('A learning base, with the gear sorted', 'Eine Lernbasis, mit organisiertem Material', 'Una base para aprender, con el material resuelto', 'Een leerbasis, met het materiaal geregeld', 'En lärbas, med utrustningen ordnad'),
    paragraphs: [
      l(
        'Tarifa is one of Europe’s great places to learn, and Family & Surf in La Marina puts you minutes from the water. We do not teach on the water ourselves — that is the school’s job — but we help you start well: we point you to the right lessons and coordinate your gear with the club so you can rent everything, in current up-to-date material, waiting at the apartment when you arrive.',
        'Tarifa gehört zu Europas besten Orten zum Lernen, und Family & Surf in La Marina bringt euch in wenige Minuten ans Wasser. Wir unterrichten nicht selbst am Wasser – das ist Sache der Schule – aber wir helfen euch beim guten Start: Wir verweisen euch auf die passenden Stunden und stimmen euer Material mit dem Club ab, sodass ihr alles leihen könnt, in aktuellem, neuem Material, das bei der Ankunft in der Wohnung bereitliegt.',
        'Tarifa es uno de los grandes sitios de Europa para aprender, y Family & Surf, en La Marina, te deja a minutos del agua. No enseñamos nosotros en el agua —eso es cosa de la escuela— pero te ayudamos a empezar bien: te orientamos hacia las clases adecuadas y coordinamos tu material con el club, de modo que puedas alquilarlo todo, con material actual y reciente, esperando en el apartamento a tu llegada.',
        'Tarifa is een van de beste plekken van Europa om te leren, en Family & Surf in La Marina zet je op minuten van het water. Wij geven zelf geen les op het water — dat is de school — maar we helpen je goed te starten: we wijzen je op de juiste lessen en stemmen je materiaal af met de club, zodat je alles kunt huren, met actueel, nieuw materiaal dat bij aankomst in het appartement klaarligt.',
        'Tarifa är en av Europas bästa platser att lära sig på, och Family & Surf i La Marina sätter dig minuter från vattnet. Vi undervisar inte själva på vattnet — det är skolans uppgift — men vi hjälper dig att börja bra: vi lotsar dig till rätt lektioner och samordnar din utrustning med klubben så att du kan hyra allt, i aktuellt, nytt material som väntar i lägenheten vid ankomst.'
      ),
      l(
        'Tell us your dates, level and sizes and whether you want to rent or buy. Getting the equipment and the lesson booking out of the way before you land means your first day is about the wind and the water, not logistics.',
        'Sagt uns eure Daten, euer Niveau, eure Größen und ob ihr leihen oder kaufen wollt. Material und Stundenbuchung vor der Ankunft zu klären heißt: Euer erster Tag dreht sich um Wind und Wasser, nicht um Logistik.',
        'Cuéntanos tus fechas, tu nivel y tus tallas y si quieres alquilar o comprar. Resolver el material y la reserva de clases antes de aterrizar significa que tu primer día va del viento y el agua, no de la logística.',
        'Vertel ons je data, niveau en maten en of je wilt huren of kopen. Materiaal en lesboeking vóór aankomst regelen betekent dat je eerste dag over de wind en het water gaat, niet over logistiek.',
        'Berätta dina datum, din nivå och dina storlekar och om du vill hyra eller köpa. Att lösa utrustning och lektionsbokning innan du landar betyder att din första dag handlar om vinden och vattnet, inte logistik.'
      )
    ]
  },
  related: {
    eyebrow: l('The same kite stay', 'Derselbe Kite-Aufenthalt', 'La misma estancia de kite', 'Hetzelfde kiteverblijf', 'Samma kitevistelse'),
    title: l('Turn preparation into a booked first day', 'Aus Vorbereitung einen gebuchten ersten Tag machen', 'Convierte la preparación en un primer día reservado', 'Maak van voorbereiding een geboekte eerste dag', 'Gör förberedelsen till en bokad första dag'),
    links: [
      { token: 'tarifa_kite_school', label: l('Kite school in Tarifa', 'Kiteschule in Tarifa', 'Escuela de kite en Tarifa', 'Kiteschool in Tarifa', 'Kiteskola i Tarifa'), text: l('Book real lessons on the water: semi-private, private or Help 2 Kite.', 'Bucht echte Stunden am Wasser: semi-privat, privat oder Help 2 Kite.', 'Reserva clases reales en el agua: semiprivadas, privadas o Help 2 Kite.', 'Boek echte lessen op het water: semi-privé, privé of Help 2 Kite.', 'Boka riktiga lektioner på vattnet: halvprivat, privat eller Help 2 Kite.') },
      { token: 'tarifa_kite_equipment', label: l('Kite equipment & rental', 'Kite-Ausrüstung & Verleih', 'Material de kite y alquiler', 'Kitemateriaal & verhuur', 'Kiteutrustning & uthyrning'), text: l('Rent everything in current material, coordinated through AMARA and waiting at the apartment.', 'Leiht alles in aktuellem Material, über AMARA organisiert und bereit in der Wohnung.', 'Alquila todo con material actual, coordinado por AMARA y esperando en el apartamento.', 'Huur alles met actueel materiaal, via AMARA geregeld en klaar in het appartement.', 'Hyr allt i aktuellt material, samordnat via AMARA och redo i lägenheten.') },
      { token: 'tarifa_wind_kitesurfing_authority', label: l('Wind, weather & safety', 'Wind, Wetter & Sicherheit', 'Viento, tiempo y seguridad', 'Wind, weer & veiligheid', 'Vind, väder & säkerhet'), text: l('Read a Tarifa forecast before you trust it, plus the rules and rescue on the beach.', 'Lest einen Tarifa-Forecast, bevor ihr ihm traut, dazu Regeln und Rescue am Strand.', 'Lee un parte de Tarifa antes de fiarte, con las normas y el rescate en la playa.', 'Lees een Tarifa-forecast voordat je hem vertrouwt, plus de regels en rescue op het strand.', 'Läs en Tarifa-prognos innan du litar på den, plus reglerna och räddning på stranden.') }
    ]
  },
  sources: {
    eyebrow: l('Editorial transparency', 'Redaktionelle Transparenz', 'Transparencia editorial', 'Redactionele transparantie', 'Redaktionell transparens'),
    title: l('What this guide is built on', 'Worauf dieser Guide beruht', 'En qué se basa esta guía', 'Waarop deze gids berust', 'Vad guiden bygger på'),
    intro: l(
      'These are teaching and standards references for the stable principles. Your instructor, your equipment and the conditions on the day always take priority.',
      'Dies sind Ausbildungs- und Normreferenzen für die stabilen Prinzipien. Eure Lehrkraft, euer Material und die Bedingungen des Tages haben immer Vorrang.',
      'Son referencias de formación y de normas para los principios estables. Tu instructor, tu material y las condiciones del día siempre tienen prioridad.',
      'Dit zijn opleidings- en normreferenties voor de vaste principes. Je instructeur, je materiaal en de omstandigheden van de dag hebben altijd voorrang.',
      'Detta är utbildnings- och standardreferenser för de stabila principerna. Din instruktör, din utrustning och dagens förhållanden gäller alltid först.'
    ),
    checked: l('References checked in September 2026', 'Referenzen geprüft im September 2026', 'Referencias consultadas en septiembre de 2026', 'Referenties gecontroleerd in september 2026', 'Referenser kontrollerade i september 2026'),
    links: [
      { label: l('VDWS · Kiteboarding training & safety', 'VDWS · Kiteboarding-Ausbildung & Safety', 'VDWS · Formación y seguridad de kite', 'VDWS · Kiteopleiding & veiligheid', 'VDWS · Kiteutbildning & säkerhet'), text: l('Competence-based beginner progression and the spot, wind, material and emergency checks.', 'Kompetenzbasierte Anfängerprogression und die Spot-, Wind-, Material- und Notfallchecks.', 'Progresión por competencias y los controles de spot, viento, material y emergencia.', 'Competentiegerichte beginnersprogressie en de spot-, wind-, materiaal- en noodchecks.', 'Kompetensbaserad nybörjarprogression och kontroller av spot, vind, material och nöd.'), href: 'https://www.vdws.de/' },
      { label: l('ISO 21853:2020 · Kiteboarding release systems', 'ISO 21853:2020 · Kiteboarding-Release-Systeme', 'ISO 21853:2020 · Sistemas de liberación de kite', 'ISO 21853:2020 · Kite-ontkoppelsystemen', 'ISO 21853:2020 · Frikopplingssystem för kite'), text: l('International minimum safety requirements and test methods for kite release systems.', 'Internationale Mindest-Sicherheitsanforderungen und Prüfverfahren für Kite-Release-Systeme.', 'Requisitos mínimos internacionales de seguridad y métodos de ensayo de los sistemas de liberación.', 'Internationale minimale veiligheidseisen en testmethoden voor kite-ontkoppelsystemen.', 'Internationella minimikrav på säkerhet och provningsmetoder för frikopplingssystem.'), href: 'https://www.iso.org/standard/71922.html' },
      { label: l('Duotone Kiteboarding · Learn to kite', 'Duotone Kiteboarding · Kiten lernen', 'Duotone Kiteboarding · Aprender a kitesurfear', 'Duotone Kiteboarding · Leren kitesurfen', 'Duotone Kiteboarding · Lär dig kite'), text: l('Manufacturer guidance on bar function, suitable beginner gear and learning conditions.', 'Herstellerhinweise zu Bar-Funktion, geeignetem Anfängermaterial und Lernbedingungen.', 'Orientación del fabricante sobre la barra, el material de iniciación y las condiciones de aprendizaje.', 'Fabrikantadvies over barfunctie, geschikt beginnersmateriaal en leeromstandigheden.', 'Tillverkarens vägledning om barfunktion, lämplig nybörjarutrustning och inlärningsförhållanden.'), href: 'https://www.duotonesports.com/' }
    ]
  },
  closing: {
    eyebrow: l('Stay in Tarifa', 'In Tarifa bleiben', 'Alojarse en Tarifa', 'Verblijven in Tarifa', 'Bo i Tarifa'),
    title: l('Arrive prepared, learn on the water', 'Vorbereitet ankommen, am Wasser lernen', 'Llega preparado, aprende en el agua', 'Kom voorbereid aan, leer op het water', 'Kom förberedd, lär dig på vattnet'),
    body: l('Reading the wind, the safety cascade and the learning path before you arrive makes your first lesson calmer and safer. From Family & Surf you are minutes from the beach, and we coordinate lessons and gear with the club so the equipment is at the apartment and the only thing left to do is get on the water.', 'Wind, Safety-Kaskade und Lernweg vor der Ankunft zu lesen, macht eure erste Stunde ruhiger und sicherer. Von Family & Surf seid ihr in wenigen Minuten am Strand, und wir stimmen Stunden und Material mit dem Club ab, sodass die Ausrüstung in der Wohnung liegt und nur noch eines bleibt: aufs Wasser.', 'Leer el viento, la cascada de seguridad y el aprendizaje antes de llegar hace tu primera clase más tranquila y segura. Desde Family & Surf estás a minutos de la playa, y coordinamos clases y material con el club para que el equipo esté en el apartamento y solo quede una cosa: entrar al agua.', 'De wind, de veiligheidscascade en het leerpad lezen vóór aankomst maakt je eerste les rustiger en veiliger. Vanaf Family & Surf ben je op minuten van het strand, en we stemmen lessen en materiaal af met de club, zodat de uitrusting in het appartement ligt en alleen het water nog rest.', 'Att läsa vinden, säkerhetskaskaden och inlärningsvägen före ankomst gör din första lektion lugnare och säkrare. Från Family & Surf är du minuter från stranden, och vi samordnar lektioner och utrustning med klubben så att utrustningen finns i lägenheten och det enda som återstår är att ge sig ut på vattnet.'),
    hubLabel: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
    propertyLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf')
  }
};
