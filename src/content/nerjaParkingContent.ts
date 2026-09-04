import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-21', dateModified: '2026-08-29', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorRoute: 'about' };

export const nerjaParkingSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-nerja-parking-v2.0', pageType: 'A', entityKey: 'amara-brand', article,
  languages: {
    en: { title: 'Parking in Nerja: Pick the Area, Then the Space', description: 'Balcón de Europa and Verano Azul serve the centre, Burriana serves its own beach. AMARA Playa has no private space, so plan for legal street parking.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Parken in Nerja: Erst die Zone, dann der Platz', description: 'Balcón de Europa und Verano Azul bedienen das Zentrum, Burriana seinen eigenen Strand. AMARA Playa hat keinen privaten Stellplatz — plant mit legalem Straßenparken.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aparcar en Nerja: primero la zona, luego la plaza', description: 'Balcón de Europa y Verano Azul sirven al centro, Burriana a su propia playa. AMARA Playa no tiene plaza privada: contad con aparcar legalmente en la calle.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Parkeren in Nerja: eerst het gebied, dan de plek', description: 'Balcón de Europa en Verano Azul bedienen het centrum, Burriana zijn eigen strand. AMARA Playa heeft geen eigen plek — reken op legaal straatparkeren.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Parkering i Nerja: först området, sedan platsen', description: 'Balcón de Europa och Verano Azul betjänar centrum, Burriana sin egen strand. AMARA Playa har ingen egen plats — räkna med laglig gatuparkering.', robots: 'index, follow', canonical: 'auto' }
  }
};

const navLabel = l('Parking & Accessibility', 'Parken & Erreichbarkeit', 'Aparcamiento y acceso', 'Parkeren & toegankelijkheid', 'Parkering & tillgänglighet');

const hero = {
  eyebrow: l('Parking & access · Nerja', 'Parken & Erreichbarkeit · Nerja', 'Aparcamiento y acceso · Nerja', 'Parkeren & toegankelijkheid · Nerja', 'Parkering & tillgänglighet · Nerja'),
  title: l('There is no one best car park in Nerja', 'In Nerja gibt es nicht den einen besten Parkplatz', 'En Nerja no hay un único aparcamiento mejor', 'In Nerja is er niet één beste parkeerplek', 'Det finns ingen enda bästa parkering i Nerja'),
  standfirst: l(
    'It depends on where you are going. Balcón de Europa and Parque Verano Azul serve the centre; Burriana has its own parking on the eastern side of town and is not a substitute for the centre. Verano Azul was freshly marked out in February 2026. AMARA Playa has no private space, so plan for legal street parking near Torrecilla — and treat unloading and parking as two separate steps. We cannot reserve a space anywhere in Nerja, and we would rather say so than let you arrive expecting one.',
    'Es kommt darauf an, wohin ihr wollt. Balcón de Europa und Parque Verano Azul bedienen das Zentrum; Burriana hat östlich seinen eigenen Parkbereich und ersetzt das Zentrum nicht. Verano Azul wurde im Februar 2026 neu markiert. AMARA Playa hat keinen privaten Stellplatz — plant also mit legalem Straßenparken nahe Torrecilla und behandelt Ausladen und Parken als zwei getrennte Schritte. Reservieren können wir in Nerja nirgends etwas, und das sagen wir lieber, als euch mit falscher Erwartung ankommen zu lassen.',
    'Depende de adónde vayáis. Balcón de Europa y Parque Verano Azul sirven al centro; Burriana tiene su propio aparcamiento al este y no sustituye al centro. Verano Azul se remarcó en febrero de 2026. AMARA Playa no tiene plaza privada, así que contad con aparcar legalmente en la calle cerca de Torrecilla y tratad la descarga y el aparcamiento como dos pasos distintos. No podemos reservar plaza en ningún punto de Nerja, y preferimos decirlo a que lleguéis esperando una.',
    'Dat hangt af van waar jullie heen gaan. Balcón de Europa en Parque Verano Azul bedienen het centrum; Burriana heeft aan de oostkant zijn eigen parking en vervangt het centrum niet. Verano Azul werd in februari 2026 opnieuw uitgemarkeerd. AMARA Playa heeft geen eigen plek, dus reken op legaal straatparkeren bij Torrecilla en behandel uitladen en parkeren als twee losse stappen. We kunnen nergens in Nerja een plek reserveren, en dat zeggen we liever dan jullie met die verwachting te laten aankomen.',
    'Det beror på vart ni ska. Balcón de Europa och Parque Verano Azul betjänar centrum; Burriana har sin egen parkering på östra sidan och ersätter inte centrum. Verano Azul målades om i februari 2026. AMARA Playa har ingen egen plats, så räkna med laglig gatuparkering nära Torrecilla och behandla avlastning och parkering som två separata steg. Vi kan inte reservera en plats någonstans i Nerja, och det säger vi hellre än låter er komma med den förväntningen.'
  ),
  note: l(
    'On the day, the signs and displays at the car park always come first.',
    'Vor Ort haben Schilder und Anzeigen an der Anlage immer Vorrang.',
    'Sobre el terreno, las señales y los paneles del aparcamiento siempre mandan.',
    'Ter plaatse hebben de borden en displays bij de parking altijd voorrang.',
    'På plats gäller alltid skyltarna och displayerna vid parkeringen.'
  ),
  updated: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')
};

const facts = [
  { label: l('For the centre', 'Fürs Zentrum', 'Para el centro', 'Voor het centrum', 'För centrum'), value: l('Balcón de Europa or Parque Verano Azul', 'Balcón de Europa oder Parque Verano Azul', 'Balcón de Europa o Parque Verano Azul', 'Balcón de Europa of Parque Verano Azul', 'Balcón de Europa eller Parque Verano Azul') },
  { label: l('For Burriana', 'Für Burriana', 'Para Burriana', 'Voor Burriana', 'För Burriana'), value: l('Its own area on the eastern side', 'Ein eigener Bereich im Osten', 'Su propia zona, al este', 'Een eigen gebied aan de oostkant', 'Ett eget område på östra sidan') },
  { label: l('At AMARA Playa', 'Bei AMARA Playa', 'En AMARA Playa', 'Bij AMARA Playa', 'Vid AMARA Playa'), value: l('Street parking, no private space', 'Straßenparken, kein privater Stellplatz', 'Aparcamiento en calle, sin plaza privada', 'Straatparkeren, geen eigen plek', 'Gatuparkering, ingen egen plats') },
  { label: l('What we cannot do', 'Was wir nicht können', 'Lo que no podemos', 'Wat we niet kunnen', 'Vad vi inte kan'), value: l('Reserve or guarantee a space', 'Einen Platz reservieren oder garantieren', 'Reservar o garantizar una plaza', 'Een plek reserveren of garanderen', 'Reservera eller garantera en plats') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'parking-reality',
    eyebrow: l('By destination', 'Nach Ziel', 'Según destino', 'Per bestemming', 'Efter mål'),
    title: l('Choose the part of town before you look for a space', 'Wählt den Ortsteil, bevor ihr einen Platz sucht', 'Elegid la zona antes de buscar plaza', 'Kies het stadsdeel voordat je een plek zoekt', 'Välj stadsdel innan ni letar plats'),
    paragraphs: [
      l(
        'For the old town, the Balcón and the shops, start with Balcón de Europa or Parque Verano Azul and compare them with legal street parking nearby. Burriana sits lower and to the east: it is right for a Burriana day, not a stand-in for the centre.',
        'Für Altstadt, Balcón und Geschäfte beginnt ihr mit Balcón de Europa oder Parque Verano Azul und vergleicht mit legalem Straßenparken in der Nähe. Burriana liegt tiefer und östlich: richtig für einen Burriana-Tag, kein Ersatz fürs Zentrum.',
        'Para el casco antiguo, el Balcón y las tiendas, empezad por Balcón de Europa o Parque Verano Azul y comparad con aparcamiento legal en la calle cerca. Burriana queda más abajo y al este: sirve para un día en Burriana, no como sustituto del centro.',
        'Voor de oude kern, het Balcón en de winkels begin je bij Balcón de Europa of Parque Verano Azul en vergelijk je met legaal straatparkeren in de buurt. Burriana ligt lager en oostelijker: goed voor een Burriana-dag, geen vervanging voor het centrum.',
        'För gamla stan, Balcón och butikerna börjar ni med Balcón de Europa eller Parque Verano Azul och jämför med laglig gatuparkering i närheten. Burriana ligger lägre och österut: rätt för en Burriana-dag, inte en ersättning för centrum.'
      ),
      l(
        'Pressure rises in high season and around events, and the Tuesday market affects the Almijara area. **Choose a legal spot before you reach the tightest streets and count the short walk as part of the plan** — it beats circling for the closest possible space.',
        'In der Hochsaison und rund um Veranstaltungen wird es voller, und der Dienstagsmarkt wirkt sich auf den Bereich Almijara aus. **Sucht euch einen legalen Platz, bevor ihr in die engsten Straßen fahrt, und rechnet den kurzen Fußweg mit ein** — das schlägt jede Runde auf der Suche nach dem nächstgelegenen Platz.',
        'La presión sube en temporada alta y con eventos, y el mercadillo del martes afecta a la zona de Almijara. **Buscad un sitio legal antes de entrar en las calles más estrechas y contad el paseo corto como parte del plan**: es mejor que dar vueltas buscando la plaza más cercana.',
        'De druk stijgt in het hoogseizoen en rond evenementen, en de dinsdagmarkt raakt de Almijara-zone. **Kies een legale plek voordat je de smalste straten in rijdt en reken het korte loopje mee** — dat is beter dan rondjes rijden voor de dichtstbijzijnde plek.',
        'Trycket ökar i högsäsong och kring evenemang, och tisdagsmarknaden påverkar Almijara-området. **Välj en laglig plats innan ni når de trängsta gatorna och räkna in den korta promenaden** — det slår att cirkla efter närmaste möjliga plats.'
      )
    ]
  },
  {
    id: 'arrival-luggage',
    eyebrow: l('With luggage', 'Mit Gepäck', 'Con maletas', 'Met bagage', 'Med bagage'),
    title: l('Unloading and parking are two different moments', 'Ausladen und Parken sind zwei verschiedene Momente', 'Descargar y aparcar son dos momentos distintos', 'Uitladen en parkeren zijn twee momenten', 'Avlastning och parkering är två olika moment'),
    paragraphs: [
      l(
        'AMARA Playa has no private parking. Do not plan on leaving the car at the building or finding a space right on Calle Castilla Pérez the minute you pull up.',
        'AMARA Playa hat keinen privaten Stellplatz. Plant nicht damit, das Auto am Haus abzustellen oder in der Calle Castilla Pérez sofort einen Platz zu finden.',
        'AMARA Playa no tiene aparcamiento privado. No contéis con dejar el coche en el edificio ni con encontrar plaza en la Calle Castilla Pérez nada más llegar.',
        'AMARA Playa heeft geen eigen parkeerplaats. Reken er niet op de auto bij het gebouw te laten of meteen een plek te vinden in de Calle Castilla Pérez.',
        'AMARA Playa har ingen egen parkering. Räkna inte med att lämna bilen vid huset eller hitta en plats på Calle Castilla Pérez direkt.'
      ),
      l(
        'If the signs allow a stop, use it only to drop the bags: one of you handles the luggage while the driver continues to a car park or a legal street space. **If stopping is not possible, a taxi for the last leg beats blocking the street.**',
        'Wenn die Beschilderung einen Halt erlaubt, nutzt ihn nur zum Ausladen: Eine Person nimmt das Gepäck, während die andere zu einer Anlage oder einem legalen Straßenplatz weiterfährt. **Wenn Halten nicht geht, ist ein Taxi für die letzte Etappe besser, als die Straße zu blockieren.**',
        'Si las señales permiten parar, usadlo solo para dejar el equipaje: uno se ocupa de las maletas mientras el otro sigue hasta un aparcamiento o una plaza legal. **Si no se puede parar, un taxi para el último tramo es mejor que bloquear la calle.**',
        'Als de borden stoppen toestaan, gebruik dat alleen om de tassen af te zetten: een van jullie neemt de bagage terwijl de bestuurder doorrijdt naar een parking of legale plek. **Kan er niet gestopt worden, dan is een taxi voor het laatste stuk beter dan de straat blokkeren.**',
        'Om skyltarna tillåter stopp, använd det bara för att lämna av väskorna: en tar bagaget medan föraren kör vidare till en parkering eller laglig gatuplats. **Går det inte att stanna är en taxi för sista biten bättre än att blockera gatan.**'
      )
    ]
  },
  {
    id: 'last-mile',
    eyebrow: l('The last stretch', 'Der letzte Weg', 'El último tramo', 'Het laatste stuk', 'Sista biten'),
    title: l('A nearby street does not mean a step-free route', 'Eine nahe Straße bedeutet keine stufenfreie Route', 'Una calle cercana no significa ruta sin escalones', 'Een straat dichtbij betekent geen route zonder treden', 'En gata nära betyder inte en trappfri väg'),
    paragraphs: [
      l(
        'There are steps on the way into AMARA Playa: five outside the building and five more inside, before the lift up to the fifth floor. Kerbs and gradients along the way count too.',
        'Auf dem Weg in AMARA Playa liegen Stufen: fünf vor dem Gebäude und fünf weitere im Haus, bevor der Aufzug in den fünften Stock fährt. Bordsteine und Steigungen unterwegs zählen ebenfalls.',
        'En el acceso a AMARA Playa hay escalones: cinco delante del edificio y otros cinco dentro, antes del ascensor al quinto piso. Los bordillos y las pendientes del camino también cuentan.',
        'Op de weg naar AMARA Playa liggen treden: vijf buiten het gebouw en nog vijf binnen, vóór de lift naar de vijfde verdieping. Stoepranden en hellingen onderweg tellen ook mee.',
        'På vägen in till AMARA Playa finns trappsteg: fem utanför huset och fem till inne, före hissen upp till femte våningen. Kantstenar och lutningar på vägen räknas också.'
      ),
      l(
        '**If walking, luggage or mobility matters for your decision, ask us before you book.** We would rather describe the route honestly than have you find out on arrival.',
        '**Wenn Laufen, Gepäck oder Mobilität für eure Entscheidung zählen, fragt uns vor der Buchung.** Wir beschreiben euch den Weg lieber ehrlich, als dass ihr ihn bei der Ankunft entdeckt.',
        '**Si caminar, el equipaje o la movilidad influyen en vuestra decisión, preguntadnos antes de reservar.** Preferimos describiros el camino con franqueza a que lo descubráis al llegar.',
        '**Als lopen, bagage of mobiliteit meetelt in jullie beslissing, vraag het ons vóór het boeken.** We beschrijven de route liever eerlijk dan dat jullie het bij aankomst ontdekken.',
        '**Om gång, bagage eller rörlighet spelar roll för ert beslut, fråga oss innan ni bokar.** Vi beskriver hellre vägen ärligt än att ni upptäcker den vid ankomsten.'
      )
    ]
  },
  {
    id: 'amara-boundary',
    eyebrow: l('Coming to us', 'Zu uns', 'Hasta nosotros', 'Naar ons toe', 'Till oss'),
    title: l('For AMARA Playa: park once, then walk', 'Für AMARA Playa: einmal parken, dann laufen', 'Para AMARA Playa: aparcad una vez y caminad', 'Voor AMARA Playa: één keer parkeren, dan lopen', 'Till AMARA Playa: parkera en gång och gå sedan'),
    paragraphs: [
      l(
        'Torrecilla beach is about 200 metres away and the Balcón de Europa about 500. For most central days the car can simply stay where you left it.',
        'Zum Strand Torrecilla sind es rund 200 Meter, zum Balcón de Europa etwa 500. An den meisten Tagen im Zentrum kann das Auto einfach stehen bleiben.',
        'La playa de Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500. La mayoría de los días en el centro el coche puede quedarse donde esté.',
        "Het Torrecilla-strand ligt op ongeveer 200 meter en het Balcón de Europa op zo'n 500. Op de meeste centrumdagen kan de auto gewoon blijven staan.",
        'Torrecillastranden ligger cirka 200 meter bort och Balcón de Europa omkring 500. De flesta dagar i centrum kan bilen helt enkelt stå kvar.'
      ),
      l(
        '**Before you arrive you get the exact approach and the route to the apartment.** What that message will never contain is a promised parking space — nobody in Nerja can give you one.',
        '**Vor der Anreise bekommt ihr die genaue Anfahrt und den Weg zur Wohnung.** Was darin nie stehen wird, ist ein zugesagter Stellplatz — den kann euch in Nerja niemand geben.',
        '**Antes de llegar recibís la aproximación exacta y el recorrido hasta el apartamento.** Lo que ese mensaje nunca incluirá es una plaza prometida: nadie en Nerja puede dárosla.',
        '**Vóór aankomst krijgen jullie de precieze aanrijroute en de weg naar het appartement.** Wat er nooit in staat, is een toegezegde parkeerplek — die kan niemand in Nerja geven.',
        '**Före ankomst får ni den exakta infarten och vägen till lägenheten.** Vad det meddelandet aldrig innehåller är en utlovad parkeringsplats — den kan ingen i Nerja ge er.'
      )
    ]
  }
];

const related = [
  { token: 'getting_to_nerja' as const, label: l('Getting to Nerja', 'Anreise nach Nerja', 'Cómo llegar a Nerja', 'Naar Nerja reizen', 'Ta sig till Nerja'), text: l('Airports, the A-7 and the coach arrival.', 'Flughäfen, die A-7 und die Ankunft mit dem Fernbus.', 'Aeropuertos, la A-7 y la llegada en autobús.', 'Luchthavens, de A-7 en aankomst met de bus.', 'Flygplatser, A-7 och ankomst med buss.') },
  { token: 'nerja_where_to_stay' as const, label: l('Where to Stay', 'Wo übernachten', 'Dónde alojarse', 'Waar overnachten', 'Var ska man bo'), text: l('The area decides the parking strategy, not the other way round.', 'Die Lage entscheidet über die Parkstrategie, nicht umgekehrt.', 'La zona decide la estrategia de aparcamiento, no al revés.', 'Het gebied bepaalt de parkeerstrategie, niet andersom.', 'Området avgör parkeringsstrategin, inte tvärtom.') },
  { token: 'nerja_beaches_authority' as const, label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Which beach is walkable and which one is a drive.', 'Welcher Strand zu Fuß geht und welcher eine Fahrt ist.', 'Qué playa se anda y a cuál se va en coche.', 'Welk strand loopbaar is en welk een ritje.', 'Vilken strand man går till och vilken man kör till.') }
];

const sourceRows = [
  { label: l('Ayuntamiento de Nerja · Verano Azul markings', 'Ayuntamiento de Nerja · Markierungen Verano Azul', 'Ayuntamiento de Nerja · señalización de Verano Azul', 'Ayuntamiento de Nerja · markering Verano Azul', 'Ayuntamiento de Nerja · markering vid Verano Azul'), text: l('The February 2026 repainting of spaces and road markings.', 'Die Neumarkierung von Plätzen und Fahrbahn im Februar 2026.', 'El repintado de plazas y señalización de febrero de 2026.', 'Het opnieuw markeren van plekken en wegmarkering in februari 2026.', 'Ommålningen av platser och vägmarkeringar i februari 2026.'), href: 'https://www.nerja.es/el-ayuntamiento-sigue-mejorando-los-aparcamientos-municipales-con-la-pintura-integral-del-verano-azul/' },
  { label: l('Ayuntamiento de Nerja · Balcón space guidance', 'Ayuntamiento de Nerja · Leitsystem Balcón', 'Ayuntamiento de Nerja · guiado de plazas del Balcón', 'Ayuntamiento de Nerja · parkeergeleiding Balcón', 'Ayuntamiento de Nerja · platsvisning vid Balcón'), text: l('The guidance system showing free spaces at the Balcón car park.', 'Das Leitsystem, das freie Plätze an der Anlage Balcón anzeigt.', 'El sistema que muestra las plazas libres en el aparcamiento del Balcón.', 'Het systeem dat vrije plekken bij de Balcón-parking toont.', 'Systemet som visar lediga platser vid Balcón-parkeringen.'), href: 'https://www.nerja.es/el-ayuntamiento-completara-el-guiado-de-plazas-libres-del-aparcamiento-balcon-de-europa/' }
];

const makeLocale = (lang: AmaraLanguage): ParkingGuideLocale => ({
  navLabel: navLabel[lang],
  hero: { eyebrow: hero.eyebrow[lang], title: hero.title[lang], standfirst: hero.standfirst[lang], note: hero.note[lang], updated: hero.updated[lang] },
  facts: facts.map((item) => ({ label: item.label[lang], value: item.value[lang] })),
  sections: sections.map((section) => ({ id: section.id, eyebrow: section.eyebrow[lang], title: section.title[lang], paragraphs: section.paragraphs.map((p) => p[lang]) })),
  related: {
    eyebrow: l('Keep reading', 'Weiterlesen', 'Seguir leyendo', 'Verder lezen', 'Läs vidare')[lang],
    title: l('Getting here, and which area suits you', 'Die Anreise — und welche Lage zu euch passt', 'Cómo llegar y qué zona os encaja', 'De reis hierheen en welk gebied bij jullie past', 'Resan hit och vilket område som passar er')[lang],
    links: related.map((item) => ({ token: item.token, label: item.label[lang], text: item.text[lang] }))
  },
  sources: {
    eyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor')[lang],
    title: l('Where these details come from', 'Woher diese Angaben kommen', 'De dónde salen estos datos', 'Waar deze gegevens vandaan komen', 'Varifrån uppgifterna kommer')[lang],
    intro: l('The car-park facts come from the town hall. Everything about AMARA Playa and its steps comes from us.', 'Die Angaben zu den Parkanlagen stammen von der Stadtverwaltung. Alles zu AMARA Playa und seinen Stufen kommt von uns.', 'Los datos de los aparcamientos proceden del ayuntamiento. Todo lo relativo a AMARA Playa y sus escalones viene de nosotros.', 'De gegevens over de parkings komen van de gemeente. Alles over AMARA Playa en de treden komt van ons.', 'Uppgifterna om parkeringarna kommer från kommunen. Allt om AMARA Playa och dess trappsteg kommer från oss.')[lang],
    checked: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')[lang],
    links: sourceRows.map((row) => ({ label: row.label[lang], text: row.text[lang], href: row.href }))
  },
  closing: {
    eyebrow: l('Parking at AMARA', 'Parken bei AMARA', 'Aparcar en AMARA', 'Parkeren bij AMARA', 'Parkering hos AMARA')[lang],
    title: l('Tell us when you arrive', 'Sagt uns, wann ihr ankommt', 'Contadnos cuándo llegáis', 'Vertel ons wanneer jullie aankomen', 'Berätta när ni kommer')[lang],
    body: l('We will send you the approach, the route to the door and what the steps look like on the way in.', 'Wir schicken euch die Anfahrt, den Weg zur Tür und wie die Stufen auf dem Weg hinein aussehen.', 'Os enviaremos la aproximación, el recorrido hasta la puerta y cómo son los escalones del acceso.', 'We sturen jullie de aanrijroute, de weg naar de deur en hoe de treden er onderweg uitzien.', 'Vi skickar infarten, vägen till dörren och hur trappstegen på vägen in ser ut.')[lang],
    locationLabel: l('Explore Nerja', 'Nerja entdecken', 'Descubrir Nerja', 'Ontdek Nerja', 'Upptäck Nerja')[lang],
    propertyLabel: l('View AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Se AMARA Playa')[lang]
  }
});

export const nerjaParkingContent = Object.fromEntries(langs.map((lang) => [lang, makeLocale(lang)])) as Record<AmaraLanguage, ParkingGuideLocale>;
