import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-21', dateModified: '2026-09-14', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorRoute: 'about' };

export const nerjaParkingSeo: AmaraAuthoringSeo = {
  version: '2026-09-14-nerja-parking-v3.0', pageType: 'A', entityKey: 'amara-brand', article,
  languages: {
    en: { title: 'Parking in Nerja: An Easy Arrival at Playa Torrecilla', description: 'Nerja has parking well sorted — central car parks and plenty of free street parking. At AMARA Playa you pull up at the door, unload and park easily nearby.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Parken in Nerja: entspannt ankommen an der Playa Torrecilla', description: 'Nerja hat das Parken gut organisiert — zentrale Parkhäuser und viel kostenloses Straßenparken. Bei AMARA Playa haltet ihr vor der Tür, ladet aus und parkt entspannt nebenan.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aparcar en Nerja: llegada tranquila a Playa Torrecilla', description: 'Nerja tiene el aparcamiento bien resuelto: parkings céntricos y mucho aparcamiento gratuito en la calle. En AMARA Playa paráis en la puerta, descargáis y aparcáis cerca.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Parkeren in Nerja: ontspannen aankomen bij Playa Torrecilla', description: 'Nerja heeft het parkeren goed geregeld — centrale parkeergarages en veel gratis straatparkeren. Bij AMARA Playa stop je voor de deur, laadt uit en parkeert makkelijk in de buurt.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Parkering i Nerja: en enkel ankomst till Playa Torrecilla', description: 'Nerja har parkeringen väl ordnad — centrala parkeringshus och gott om gratis gatuparkering. Vid AMARA Playa stannar ni vid dörren, lastar av och parkerar enkelt i närheten.', robots: 'index, follow', canonical: 'auto' }
  }
};

const navLabel = l('Parking & Accessibility', 'Parken & Erreichbarkeit', 'Aparcamiento y acceso', 'Parkeren & toegankelijkheid', 'Parkering & tillgänglighet');

const hero = {
  eyebrow: l('Parking & access · Nerja', 'Parken & Erreichbarkeit · Nerja', 'Aparcamiento y acceso · Nerja', 'Parkeren & toegankelijkheid · Nerja', 'Parkering & tillgänglighet · Nerja'),
  title: l('Parking in Nerja', 'Parken in Nerja', 'Aparcar en Nerja', 'Parkeren in Nerja', 'Parkering i Nerja'),
  standfirst: l(
    "Nerja is one of the loveliest, liveliest towns on this coast — so of course summers are busy. Parking won't spoil that: the town has invested properly, there are central car parks, and in the residential streets you park free in plenty of places. At AMARA Playa you're right in the middle of it, a few steps from the beach. You pull up at the door, unload the cases and leave the car in one of the streets nearby — often right outside, otherwise a few dozen metres on. No circling half the town. Every spot and tip is in your guest app.",
    'Nerja ist einer der schönsten, lebendigsten Orte an dieser Küste — klar, dass im Sommer viel los ist. Beim Parken macht euch das nichts aus: Die Stadt hat richtig investiert, es gibt zentrale Parkhäuser, und in den Wohnvierteln parkt man vielerorts kostenlos. Bei uns an der Playa Torrecilla wohnt ihr mittendrin, wenige Schritte vom Strand. Ihr haltet vor der Tür, ladet die Koffer aus und stellt das Auto ganz entspannt in einer der Straßen nebenan ab — oft direkt davor, sonst ein paar Dutzend Meter weiter. Kein Suchen über die halbe Stadt. Alle Plätze und Tipps stehen in eurer Gäste-App.',
    'Nerja es uno de los pueblos más bonitos y con más vida de esta costa: normal que en verano haya movimiento. Aparcar no os lo va a estropear: el ayuntamiento ha invertido de verdad, hay parkings céntricos y en las calles de los barrios se aparca gratis en muchos sitios. En AMARA Playa vivís en pleno centro, a unos pasos de la playa. Paráis en la puerta, bajáis las maletas y dejáis el coche en una de las calles de al lado — muchas veces justo delante, si no, unas decenas de metros más allá. Sin dar vueltas por medio pueblo. Todas las plazas y consejos están en vuestra app de huéspedes.',
    "Nerja is een van de mooiste, levendigste plaatsen aan deze kust — logisch dat het 's zomers druk is. Parkeren bederft dat niet: de gemeente heeft flink geïnvesteerd, er zijn centrale parkeergarages, en in de woonstraten parkeer je op veel plekken gratis. Bij AMARA Playa woon je er middenin, op een paar passen van het strand. Je stopt voor de deur, laadt de koffers uit en zet de auto rustig in een van de straten ernaast — vaak vlak ervoor, anders een paar tientallen meters verder. Geen zoektocht door het halve dorp. Alle plekken en tips staan in jullie gastenapp.",
    'Nerja är en av de vackraste, livligaste orterna på den här kusten — inte konstigt att somrarna är fulla av liv. Parkeringen förstör inte det: kommunen har satsat på riktigt, det finns centrala parkeringshus, och i bostadskvarteren parkerar man gratis på många ställen. Vid AMARA Playa bor ni mitt i alltihop, några steg från stranden. Ni stannar vid dörren, lastar av väskorna och ställer bilen lugnt på en av gatorna intill — ofta precis utanför, annars några tiotal meter bort. Inget letande genom halva stan. Alla platser och tips finns i er gästapp.'
  ),
  note: l(
    'Unload at the door, park nearby, done.',
    'Vor der Tür ausladen, nebenan parken, fertig.',
    'Descargar en la puerta, aparcar al lado, y listo.',
    'Voor de deur uitladen, ernaast parkeren, klaar.',
    'Lasta av vid dörren, parkera intill, klart.'
  ),
  updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026')
};

const facts = [
  { label: l('Location', 'Lage', 'Ubicación', 'Ligging', 'Läge'), value: l('A few steps to the beach & the Balcón', 'Wenige Schritte zu Strand & Balcón', 'A unos pasos de la playa y el Balcón', 'Een paar passen van strand & Balcón', 'Några steg till stranden & Balcón') },
  { label: l('Arriving', 'Ankommen', 'Al llegar', 'Aankomen', 'Vid ankomst'), value: l('Unload at the door, park nearby', 'Vor der Tür ausladen, nebenan parken', 'Descargar en la puerta, aparcar al lado', 'Voor de deur uitladen, ernaast parkeren', 'Lasta av vid dörren, parkera intill') },
  { label: l('In the streets', 'Im Viertel', 'En el barrio', 'In de buurt', 'I kvarteren'), value: l('Street parking, often free', 'Straßenparken, oft kostenlos', 'Aparcamiento en calle, a menudo gratis', 'Straatparkeren, vaak gratis', 'Gatuparkering, ofta gratis') },
  { label: l("When it's busy", "Wenn's voll ist", 'Si está lleno', 'Als het druk is', 'När det är fullt'), value: l('A central car park as an easy backup', 'Zentrales Parkhaus als entspannte Reserve', 'Un parking céntrico como reserva tranquila', 'Centrale parkeergarage als rustige reserve', 'Centralt parkeringshus som lugn reserv') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'parking-reality',
    eyebrow: l('Well sorted', 'Gut organisiert', 'Bien resuelto', 'Goed geregeld', 'Väl ordnat'),
    title: l('Nerja has parking well in hand', 'Nerja hat das Parken im Griff', 'Nerja tiene el aparcamiento resuelto', 'Nerja heeft het parkeren onder controle', 'Nerja har parkeringen under kontroll'),
    paragraphs: [
      l(
        'Nerja is popular, and summers are busy — that comes with a town everyone wants to visit. The council has put real work in: central car parks at the Balcón de Europa and the Parque Verano Azul, freshly marked bays and a display that points you to free spaces. More is on the way, from smart parking down at Burriana to a large car park that is planned. On top of that, the residential streets offer free parking in plenty of places. In short: what once cost you patience is easy today.',
        'Nerja ist beliebt, und im Sommer ist ordentlich was los — das gehört zu einem Ort, an den alle wollen. Die Stadt hat kräftig nachgelegt: zentrale Parkhäuser am Balcón de Europa und am Parque Verano Azul, frisch markierte Plätze und eine Anzeige für freie Stellplätze. Weiteres ist unterwegs, von Smart-Parking an der Burriana bis zu einem geplanten großen Parkhaus. Dazu parkt man in den Wohnvierteln vielerorts kostenlos. Kurz: Was hier früher Nerven gekostet hat, geht heute ganz entspannt.',
        'Nerja gusta, y en verano hay movimiento: es lo que tiene un pueblo al que todos quieren ir. El ayuntamiento se ha puesto las pilas: parkings céntricos en el Balcón de Europa y en el Parque Verano Azul, plazas recién pintadas y un panel que os lleva a los sitios libres. Y llega más: aparcamiento inteligente en Burriana y un gran parking en proyecto. Además, en las calles de los barrios se aparca gratis en muchos sitios. En resumen: lo que antes costaba paciencia, hoy es fácil.',
        "Nerja is geliefd, en 's zomers is het druk — dat hoort bij een plaats waar iedereen heen wil. De gemeente heeft flink werk verzet: centrale parkeergarages bij de Balcón de Europa en het Parque Verano Azul, vers gemarkeerde plekken en een display dat je naar vrije plaatsen wijst. Er komt meer aan, van smart parking bij Burriana tot een geplande grote parkeergarage. Daarbij parkeer je in de woonstraten op veel plekken gratis. Kortom: wat vroeger geduld kostte, gaat nu moeiteloos.",
        'Nerja är omtyckt, och somrarna är livliga — det hör till en ort dit alla vill. Kommunen har lagt ner riktigt arbete: centrala parkeringshus vid Balcón de Europa och Parque Verano Azul, nymålade platser och en skylt som visar lediga platser. Mer är på gång, från smart parkering nere vid Burriana till ett stort parkeringshus som är planerat. Dessutom parkerar man gratis på många ställen i bostadskvarteren. Kort sagt: det som förr kostade tålamod är lätt i dag.'
      )
    ]
  },
  {
    id: 'amara-boundary',
    eyebrow: l('At our place', 'Bei uns', 'En AMARA Playa', 'Bij ons', 'Hos oss'),
    title: l('At our place on Playa Torrecilla', 'Bei uns an der Playa Torrecilla', 'En Playa Torrecilla, con nosotros', 'Bij ons aan de Playa Torrecilla', 'Hos oss vid Playa Torrecilla'),
    paragraphs: [
      l(
        "You're right in the middle of it, a few steps from Torrecilla beach and the Balcón de Europa. Arriving is simple: pull up at the door, unload the cases and leave the car in one of the streets nearby — often right outside, otherwise a few dozen metres on, and you stroll over with your bags.",
        'Ihr wohnt mittendrin, wenige Schritte vom Strand Torrecilla und vom Balcón de Europa. Die Ankunft ist einfach: vor die Tür fahren, Koffer ausladen und das Auto ganz entspannt in einer der Straßen nebenan abstellen — oft direkt davor, sonst ein paar Dutzend Meter weiter, und ihr schlendert mit dem Gepäck herüber.',
        'Vivís en pleno centro, a unos pasos de la playa de Torrecilla y del Balcón de Europa. Llegar es sencillo: paráis en la puerta, bajáis las maletas y dejáis el coche tranquilamente en una de las calles de al lado — muchas veces justo delante, si no, unas decenas de metros más allá, y os acercáis paseando con el equipaje.',
        'Je woont er middenin, op een paar passen van het Torrecilla-strand en de Balcón de Europa. Aankomen is simpel: stop voor de deur, laad de koffers uit en zet de auto rustig in een van de straten ernaast — vaak vlak ervoor, anders een paar tientallen meters verder, en je loopt met de bagage over.',
        'Ni bor mitt i alltihop, några steg från Torrecillastranden och Balcón de Europa. Ankomsten är enkel: stanna vid dörren, lasta av väskorna och ställ bilen lugnt på en av gatorna intill — ofta precis utanför, annars några tiotal meter bort, och ni promenerar över med bagaget.'
      ),
      l(
        "Once the car is parked, most guests leave it there all week: the beach, the old town and the restaurants are all on foot. The exact spots in the neighbourhood and every arrival tip are in your guest app — and if you're coming with a lot of luggage, just tell us and we'll make it easy.",
        'Steht das Auto erst, bleibt es bei den meisten die ganze Woche stehen: Strand, Altstadt und Restaurants liegen zu Fuß. Die genauen Plätze in der Nachbarschaft und alle Tipps zur Anreise findet ihr in eurer Gäste-App — und kommt ihr mit viel Gepäck, sagt uns kurz Bescheid, wir machen es euch leicht.',
        'Una vez aparcado, la mayoría lo deja ahí toda la semana: la playa, el casco antiguo y los restaurantes se hacen a pie. Las plazas concretas del barrio y todos los consejos de llegada están en vuestra app de huéspedes — y si venís con mucho equipaje, avisadnos y os lo ponemos fácil.',
        'Staat de auto er eenmaal, dan laten de meesten hem de hele week staan: strand, oude stad en restaurants zijn te voet. De precieze plekken in de buurt en alle aankomsttips staan in jullie gastenapp — en kom je met veel bagage, laat het ons weten, dan maken we het makkelijk.',
        'När bilen väl står kvar låter de flesta den stå hela veckan: stranden, gamla stan och restaurangerna når ni till fots. De exakta platserna i grannskapet och alla ankomsttips finns i er gästapp — och kommer ni med mycket bagage, säg till så gör vi det enkelt.'
      )
    ]
  }
];

const related = [
  { token: 'getting_to_nerja' as const, label: l('Getting to Nerja', 'Anreise nach Nerja', 'Cómo llegar a Nerja', 'Naar Nerja reizen', 'Ta sig till Nerja'), text: l('Airports, the A-7 and the coach arrival.', 'Flughäfen, die A-7 und die Ankunft mit dem Fernbus.', 'Aeropuertos, la A-7 y la llegada en autobús.', 'Luchthavens, de A-7 en aankomst met de bus.', 'Flygplatser, A-7 och ankomst med buss.') },
  { token: 'nerja_where_to_stay' as const, label: l('Where to Stay', 'Wo übernachten', 'Dónde alojarse', 'Waar overnachten', 'Var ska man bo'), text: l('Centre, hillside or Burriana: what lies where.', 'Zentrum, Hang oder Burriana: was wo liegt.', 'Centro, ladera o Burriana: qué hay dónde.', 'Centrum, helling of Burriana: wat waar ligt.', 'Centrum, sluttning eller Burriana: vad som ligger var.') },
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
    title: l('Arrival and location', 'Anreise und Lage', 'Llegada y ubicación', 'Aankomst en ligging', 'Ankomst och läge')[lang],
    links: related.map((item) => ({ token: item.token, label: item.label[lang], text: item.text[lang] }))
  },
  sources: {
    eyebrow: l('Explore further', 'Mehr erfahren', 'Explorar más', 'Meer ontdekken', 'Utforska mer')[lang],
    title: l('Where these details come from', 'Woher diese Angaben kommen', 'De dónde salen estos datos', 'Waar deze gegevens vandaan komen', 'Varifrån uppgifterna kommer')[lang],
    intro: l('The car-park facts come from the town hall. Everything about AMARA Playa and its neighbourhood comes from us.', 'Die Angaben zu den Parkanlagen stammen von der Stadtverwaltung. Alles zu AMARA Playa und seiner Nachbarschaft kommt von uns.', 'Los datos de los aparcamientos proceden del ayuntamiento. Todo lo relativo a AMARA Playa y su barrio viene de nosotros.', 'De gegevens over de parkings komen van de gemeente. Alles over AMARA Playa en de buurt komt van ons.', 'Uppgifterna om parkeringarna kommer från kommunen. Allt om AMARA Playa och grannskapet kommer från oss.')[lang],
    checked: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')[lang],
    links: sourceRows.map((row) => ({ label: row.label[lang], text: row.text[lang], href: row.href }))
  },
  closing: {
    eyebrow: l('Parking at AMARA', 'Parken bei AMARA', 'Aparcar en AMARA', 'Parkeren bij AMARA', 'Parkering hos AMARA')[lang],
    title: l('Tell us when you arrive', 'Sagt uns, wann ihr ankommt', 'Contadnos cuándo llegáis', 'Vertel ons wanneer jullie aankomen', 'Berätta när ni kommer')[lang],
    body: l('We will send you the approach, the way to the door and where to park best in the neighbourhood.', 'Wir schicken euch die Anfahrt, den Weg zur Tür und wo ihr in der Nachbarschaft am besten parkt.', 'Os enviaremos la aproximación, el camino hasta la puerta y dónde aparcar mejor en el barrio.', 'We sturen jullie de aanrijroute, de weg naar de deur en waar je in de buurt het best parkeert.', 'Vi skickar infarten, vägen till dörren och var ni bäst parkerar i grannskapet.')[lang],
    locationLabel: l('Explore Nerja', 'Nerja entdecken', 'Descubrir Nerja', 'Ontdek Nerja', 'Upptäck Nerja')[lang],
    propertyLabel: l('View AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Se AMARA Playa')[lang]
  }
});

export const nerjaParkingContent = Object.fromEntries(langs.map((lang) => [lang, makeLocale(lang)])) as Record<AmaraLanguage, ParkingGuideLocale>;
