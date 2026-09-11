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
  title: l('Parking in Nerja', 'Parken in Nerja', 'Aparcar en Nerja', 'Parkeren in Nerja', 'Parkering i Nerja'),
  standfirst: l(
    'For the centre there are the Balcón de Europa and Parque Verano Azul car parks, for Burriana an area of its own in the east. AMARA Playa has no parking space of its own — and does not need one: you unload at the door and then park free in the neighbourhood.',
    'Fürs Zentrum gibt es die Parkhäuser Balcón de Europa und Parque Verano Azul, für Burriana einen eigenen Bereich im Osten. AMARA Playa hat keinen eigenen Stellplatz — braucht aber auch keinen: Ihr ladet vor der Tür aus und stellt das Auto danach kostenfrei in der Nachbarschaft ab.',
    'Para el centro están los parkings Balcón de Europa y Parque Verano Azul, para Burriana una zona propia en el este. AMARA Playa no tiene plaza propia, ni le hace falta: descargáis en la puerta y aparcáis después gratis en el barrio.',
    'Voor het centrum zijn er de parkeergarages Balcón de Europa en Parque Verano Azul, voor Burriana een eigen zone in het oosten. AMARA Playa heeft geen eigen parkeerplaats — en heeft er ook geen nodig: je laadt voor de deur uit en parkeert daarna gratis in de buurt.',
    'För centrum finns parkeringshusen Balcón de Europa och Parque Verano Azul, för Burriana ett eget område i öster. AMARA Playa har ingen egen parkeringsplats — och behöver ingen: ni lastar av vid dörren och parkerar sedan gratis i grannskapet.'
  ),
  note: l(
    'Unload at the door, park free in the neighbourhood, done.',
    'Vor der Tür ausladen, kostenfrei in der Nachbarschaft parken, fertig.',
    'Descargar en la puerta, aparcar gratis en el barrio, y listo.',
    'Voor de deur uitladen, gratis in de buurt parkeren, klaar.',
    'Lasta av vid dörren, parkera gratis i grannskapet, klart.'
  ),
  updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
};

const facts = [
  { label: l('For the centre', 'Fürs Zentrum', 'Para el centro', 'Voor het centrum', 'För centrum'), value: l('Balcón de Europa or Parque Verano Azul', 'Balcón de Europa oder Parque Verano Azul', 'Balcón de Europa o Parque Verano Azul', 'Balcón de Europa of Parque Verano Azul', 'Balcón de Europa eller Parque Verano Azul') },
  { label: l('For Burriana', 'Für Burriana', 'Para Burriana', 'Voor Burriana', 'För Burriana'), value: l('Its own area on the eastern side', 'Ein eigener Bereich im Osten', 'Su propia zona, al este', 'Een eigen gebied aan de oostkant', 'Ett eget område på östra sidan') },
  { label: l('At AMARA Playa', 'Bei AMARA Playa', 'En AMARA Playa', 'Bij AMARA Playa', 'Vid AMARA Playa'), value: l('Free street parking in the neighbourhood', 'Kostenfreies Straßenparken in der Nachbarschaft', 'Aparcamiento gratuito en la calle, en el barrio', 'Gratis straatparkeren in de buurt', 'Gratis gatuparkering i grannskapet') },
  { label: l('Fixed spaces', 'Feste Plätze', 'Plazas fijas', 'Vaste plekken', 'Fasta platser'), value: l('None; free neighbourhood spaces, car park as backup', 'Gibt es nicht; kostenfreie Plätze in der Nähe, Parkhaus als Reserve', 'No existen; plazas gratuitas en el barrio, parking de reserva', 'Bestaan niet; gratis plekken in de buurt, parkeergarage als reserve', 'Finns inte; gratis platser i grannskapet, parkeringshus i reserv') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'parking-reality',
    eyebrow: l('By destination', 'Nach Ziel', 'Según destino', 'Per bestemming', 'Efter mål'),
    title: l('The destination first, then the space', 'Erst das Ziel, dann der Platz', 'Primero el destino, luego la plaza', 'Eerst het doel, dan de plek', 'Först målet, sedan platsen'),
    paragraphs: [
      l(
        'For old town, Balcón and shops: Balcón de Europa or Parque Verano Azul, plus street spaces nearby. Burriana lies lower and to the east: right for a Burriana day.',
        'Für Altstadt, Balcón und Geschäfte: Balcón de Europa oder Parque Verano Azul, dazu Straßenplätze in der Nähe. Burriana liegt tiefer und östlich: richtig für einen Burriana-Tag.',
        'Para casco antiguo, Balcón y tiendas: Balcón de Europa o Parque Verano Azul, más plazas en la calle cerca. Burriana queda más abajo y al este: lo justo para un día de Burriana.',
        'Voor oude stad, Balcón en winkels: Balcón de Europa of Parque Verano Azul, plus straatplekken in de buurt. Burriana ligt lager en oostelijk: goed voor een Burriana-dag.',
        'För gamla stan, Balcón och affärer: Balcón de Europa eller Parque Verano Azul, plus gatuplatser i närheten. Burriana ligger lägre och österut: rätt för en Burrianadag.'
      ),
      l(
        'In high season and on market days it gets full; on Tuesdays that affects the Almijara area. **A sure space a few streets on beats any lap around the block.**',
        'In der Hochsaison und an Markttagen wird es voll; dienstags betrifft das den Bereich Almijara. **Ein sicherer Platz ein paar Straßen weiter schlägt jede Runde um den Block.**',
        'En temporada alta y los días de mercado se llena; los martes afecta a la zona de Almijara. **Una plaza segura unas calles más allá vale más que cualquier vuelta a la manzana.**',
        'In het hoogseizoen en op marktdagen wordt het vol; op dinsdag geldt dat voor de zone Almijara. **Een zekere plek een paar straten verder wint van elk rondje om het blok.**',
        'Under högsäsong och på marknadsdagar blir det fullt; på tisdagar gäller det området Almijara. **En säker plats några gator bort slår varje varv runt kvarteret.**'
      )
    ]
  },
  {
    id: 'arrival-luggage',
    eyebrow: l('With luggage', 'Mit Gepäck', 'Con maletas', 'Met bagage', 'Med bagage'),
    title: l('Unloading and parking are two different moments', 'Ausladen und Parken sind zwei verschiedene Momente', 'Descargar y aparcar son dos momentos distintos', 'Uitladen en parkeren zijn twee momenten', 'Avlastning och parkering är två olika moment'),
    paragraphs: [
      l(
        'AMARA Playa has no parking space of its own; the car stands a few streets on.',
        'AMARA Playa hat keinen eigenen Stellplatz; das Auto steht ein paar Straßen weiter.',
        'AMARA Playa no tiene plaza propia; el coche se queda unas calles más allá.',
        'AMARA Playa heeft geen eigen parkeerplaats; de auto staat een paar straten verder.',
        'AMARA Playa har ingen egen parkeringsplats; bilen står några gator bort.'
      ),
      l(
        'Unload at the door if traffic allows: one person takes the luggage, the other parks the car in one of the free spaces in the neighbourhood. It is quick and saves the trip through town. **If stopping is not possible right then, a taxi brings you the last few metres.**',
        'Vor der Tür ausladen, wenn der Verkehr es zulässt: Eine Person nimmt das Gepäck, die andere stellt das Auto auf einen der kostenfreien Plätze in der Nachbarschaft. Das geht schnell und spart den Weg durch die Stadt. **Geht das Halten gerade nicht, bringt euch ein Taxi die letzten Meter.**',
        'Descargar en la puerta si el tráfico lo permite: una persona coge el equipaje, la otra deja el coche en una de las plazas gratuitas del barrio. Es rápido y ahorra el rodeo por la ciudad. **Si en ese momento no se puede parar, un taxi os trae los últimos metros.**',
        'Voor de deur uitladen als het verkeer het toelaat: één persoon neemt de bagage, de ander zet de auto op een van de gratis plekken in de buurt. Dat gaat snel en scheelt de rit door de stad. **Kan stoppen op dat moment niet, dan brengt een taxi jullie de laatste meters.**',
        'Lasta av vid dörren om trafiken tillåter: en person tar bagaget, den andra ställer bilen på en av de gratis platserna i grannskapet. Det går snabbt och sparar vägen genom stan. **Går det inte att stanna just då tar en taxi er de sista metrarna.**'
      )
    ]
  },
  {
    id: 'last-mile',
    eyebrow: l('The last stretch', 'Der letzte Weg', 'El último tramo', 'Het laatste stuk', 'Sista biten'),
    title: l('Ten steps to the lift', 'Zehn Stufen bis zum Aufzug', 'Diez escalones hasta el ascensor', 'Tien treden tot de lift', 'Tio trappsteg till hissen'),
    paragraphs: [
      l(
        'On the way into AMARA Playa there are ten steps: five in front of the building, five inside, then the lift goes up to the fifth floor.',
        'Auf dem Weg in AMARA Playa liegen zehn Stufen: fünf vor dem Gebäude, fünf im Haus, dann fährt der Aufzug in den fünften Stock.',
        'En el camino a AMARA Playa hay diez escalones: cinco delante del edificio, cinco dentro, y luego el ascensor sube a la quinta planta.',
        'Op weg naar binnen in AMARA Playa liggen tien treden: vijf voor het gebouw, vijf binnen, daarna gaat de lift naar de vijfde verdieping.',
        'På vägen in i AMARA Playa är det tio trappsteg: fem framför huset, fem inne, sedan går hissen upp till femte våningen.'
      ),
      l(
        '**If luggage or mobility play a role, ask us before booking.** We will describe the way to you, every step included.',
        '**Wenn Gepäck oder Mobilität eine Rolle spielen, fragt uns vor der Buchung.** Wir beschreiben euch den Weg mit jeder Stufe.',
        '**Si el equipaje o la movilidad importan, preguntadnos antes de reservar.** Os describimos el camino escalón a escalón.',
        '**Als bagage of mobiliteit een rol spelen, vraag het ons vóór het boeken.** We beschrijven je de weg met elke trede.',
        '**Om bagage eller rörlighet spelar roll, fråga oss före bokningen.** Vi beskriver vägen för er, varje trappsteg inräknat.'
      )
    ]
  },
  {
    id: 'amara-boundary',
    eyebrow: l('Coming to us', 'Zu uns', 'Hasta nosotros', 'Naar ons toe', 'Till oss'),
    title: l('For AMARA Playa: park once, then walk', 'Für AMARA Playa: einmal parken, dann laufen', 'Para AMARA Playa: aparcad una vez y caminad', 'Voor AMARA Playa: één keer parkeren, dan lopen', 'Till AMARA Playa: parkera en gång och gå sedan'),
    paragraphs: [
      l(
        'Torrecilla beach is about 200 metres away and the Balcón de Europa about 500. For a stay here you rarely need the paid car park at all: parking in the neighbourhood is usually free, and on most days the car can simply stay where you left it.',
        'Zum Strand Torrecilla sind es rund 200 Meter, zum Balcón de Europa etwa 500. Das kostenpflichtige Parkhaus braucht ihr für einen Aufenthalt hier meist gar nicht: In der Nachbarschaft parkt ihr in der Regel kostenfrei, und an den meisten Tagen kann das Auto einfach stehen bleiben.',
        'La playa de Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500. Para una estancia aquí casi nunca hace falta el parking de pago: en el barrio se aparca normalmente gratis y, la mayoría de los días, el coche puede quedarse donde esté.',
        "Het Torrecilla-strand ligt op ongeveer 200 meter en het Balcón de Europa op zo'n 500. Voor een verblijf hier heb je de betaalde parkeergarage meestal helemaal niet nodig: in de buurt parkeer je doorgaans gratis, en op de meeste dagen kan de auto gewoon blijven staan.",
        'Torrecillastranden ligger cirka 200 meter bort och Balcón de Europa omkring 500. För en vistelse här behöver ni oftast inte det avgiftsbelagda parkeringshuset alls: i grannskapet parkerar ni vanligtvis gratis, och de flesta dagar kan bilen helt enkelt stå kvar.'
      ),
      l(
        '**Before arrival you get the exact approach and the way to the apartment.** A reserved parking space does not exist in Nerja for anyone — but neighbourhood spaces are usually free and easy to find; only at the height of summer is the car park the backup.',
        '**Vor der Anreise bekommt ihr die genaue Anfahrt und den Weg zur Wohnung.** Einen reservierten Stellplatz gibt es in Nerja für niemanden — Plätze in der Nachbarschaft sind aber meist kostenfrei und leicht zu finden; nur im Hochsommer ist das Parkhaus die Reserve.',
        '**Antes de la llegada recibís el acceso exacto y el camino hasta el apartamento.** Una plaza reservada no existe en Nerja para nadie, pero las plazas del barrio suelen ser gratuitas y fáciles de encontrar; solo en pleno verano el parking es la reserva.',
        '**Vóór de aankomst krijg je de precieze route en de weg naar de woning.** Een gereserveerde parkeerplaats bestaat in Nerja voor niemand — maar plekken in de buurt zijn meestal gratis en makkelijk te vinden; alleen in de hoogzomer is de parkeergarage de reserve.',
        '**Före ankomsten får ni den exakta vägen hit och vägen till lägenheten.** En reserverad parkeringsplats finns inte för någon i Nerja — men platser i grannskapet är oftast gratis och lätta att hitta; bara mitt i sommaren är parkeringshuset reserven.'
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
    intro: l('The car-park facts come from the town hall. Everything about AMARA Playa and its steps comes from us.', 'Die Angaben zu den Parkanlagen stammen von der Stadtverwaltung. Alles zu AMARA Playa und seinen Stufen kommt von uns.', 'Los datos de los aparcamientos proceden del ayuntamiento. Todo lo relativo a AMARA Playa y sus escalones viene de nosotros.', 'De gegevens over de parkings komen van de gemeente. Alles over AMARA Playa en de treden komt van ons.', 'Uppgifterna om parkeringarna kommer från kommunen. Allt om AMARA Playa och dess trappsteg kommer från oss.')[lang],
    checked: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')[lang],
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
