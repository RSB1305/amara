import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-20', dateModified: '2026-08-31', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorRoute: 'about' };

export const frigilianaParkingGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-31-frigiliana-parking-v2.1', pageType: 'A', entityKey: 'amara-brand', article,
  languages: {
    en: { title: 'Parking in Frigiliana: Where to Leave the Car', description: 'For overnight guests, parking in Frigiliana is usually straightforward. Most pressure comes from day visitors; timing your arrival makes the last stretch easier.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Parken in Frigiliana: Wo ihr das Auto lasst', description: 'Für Übernachtungsgäste ist Parken in Frigiliana normalerweise unkompliziert. Der größte Andrang kommt von Tagesgästen; die passende Ankunftszeit macht es leichter.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aparcar en Frigiliana: dónde dejar el coche', description: 'Para quienes se alojan en Frigiliana, aparcar suele ser sencillo. La mayor afluencia viene de los visitantes de día; elegir bien la hora facilita la llegada.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Parkeren in Frigiliana: waar laat je de auto', description: 'Voor wie in Frigiliana overnacht, is parkeren meestal eenvoudig. De grootste drukte komt van dagbezoekers; met de juiste aankomsttijd gaat het makkelijker.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Parkering i Frigiliana: var lämnar man bilen', description: 'För er som övernattar i Frigiliana är parkeringen oftast enkel. Det största trycket kommer från dagsbesökare; rätt ankomsttid gör det lättare.', robots: 'index, follow', canonical: 'auto' }
  }
};

const navLabel = l('Parking & Accessibility', 'Parken & Erreichbarkeit', 'Aparcamiento y acceso', 'Parkeren & toegankelijkheid', 'Parkering & tillgänglighet');

const hero = {
  eyebrow: l('Parking & access · Frigiliana', 'Parken & Erreichbarkeit · Frigiliana', 'Aparcamiento y acceso · Frigiliana', 'Parkeren & toegankelijkheid · Frigiliana', 'Parkering & tillgänglighet · Frigiliana'),
  title: l('Parking in Frigiliana', 'Parken in Frigiliana', 'Aparcar en Frigiliana', 'Parkeren in Frigiliana', 'Parkering i Frigiliana'),
  subtitle: l('Parking in Frigiliana for overnight guests, made easy', 'Einfach parken als Übernachtungsgäste', 'Aparcar fácilmente si os alojáis en Frigiliana', 'Eenvoudig parkeren als jullie in Frigiliana overnachten', 'Enkel parkering för er som övernattar i Frigiliana'),
  standfirst: l(
    'If you stay overnight in Frigiliana, parking is usually not a problem. It gets full because of day visitors between eleven and five; by then your car is usually parked, or you are at the beach.',
    'Wenn ihr in Frigiliana übernachtet, ist Parken normalerweise kein Problem. Voll wird es durch Tagesgäste zwischen elf und fünf; dann steht euer Auto meist schon, oder ihr seid gerade am Strand.',
    'Si os alojáis en Frigiliana, aparcar normalmente no es problema. Se llena por los visitantes de día entre las once y las cinco; para entonces vuestro coche suele estar ya aparcado, o vosotros en la playa.',
    'Wie in Frigiliana overnacht, heeft met parkeren meestal geen probleem. Vol wordt het door dagjesmensen tussen elf en vijf; dan staat jullie auto meestal al, of zijn jullie net op het strand.',
    'Övernattar ni i Frigiliana är parkering normalt inget problem. Fullt blir det av dagsbesökare mellan elva och fem; då står er bil oftast redan, eller så är ni på stranden.'
  ),
  summaryEyebrow: l('In short', 'Kurz gesagt', 'En resumen', 'Kort gezegd', 'Kort sagt'),
  summary: l(
    'Come before eleven or after five, park under the plaza or on Avenida Carlos Cano and walk the last metres. That is the whole trick.',
    'Kommt vor elf oder nach fünf, parkt unter der Plaza oder an der Avenida Carlos Cano und geht die letzten Meter zu Fuß. Das ist der ganze Trick.',
    'Venid antes de las once o después de las cinco, aparcad bajo la plaza o en la avenida Carlos Cano y recorred los últimos metros a pie. Ese es todo el truco.',
    'Kom voor elf of na vijf, parkeer onder het plein of aan Avenida Carlos Cano en loop de laatste meters. Dat is de hele truc.',
    'Kom före elva eller efter fem, parkera under torget eller på Avenida Carlos Cano och gå de sista metrarna. Det är hela knepet.'
  ),
  note: l(
    'Tell us your arrival time and we tell you whether the lanes are open.',
    'Sagt uns eure Ankunftszeit, wir sagen euch, ob die Gassen offen sind.',
    'Decidnos vuestra hora de llegada y os diremos si las calles están abiertas.',
    'Zeg ons jullie aankomsttijd en we zeggen of de steegjes open zijn.',
    'Säg er ankomsttid så säger vi om gränderna är öppna.'
  ),
  updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
};

const facts = [
  { label: l('The village streets', 'Die Dorfstraßen', 'Las calles del pueblo', 'De dorpsstraten', 'Byns gator'), value: l('Usually closed from about 10–11 until around 17:00', 'Meist von etwa 10–11 bis gegen 17 Uhr gesperrt', 'Suelen cerrarse de 10–11 h a las 17 h', 'Meestal dicht van ongeveer 10–11 tot 17 uur', 'Oftast avstängda från cirka 10–11 till omkring 17') },
  { label: l('Where to leave it', 'Wo ihr es abstellt', 'Dónde dejarlo', 'Waar je hem laat', 'Var ni lämnar den'), value: l('Paid car park below Plaza de las Tres Culturas', 'Kostenpflichtiger Parkplatz unter der Plaza de las Tres Culturas', 'Aparcamiento de pago bajo la Plaza de las Tres Culturas', 'Betaalde parking onder de Plaza de las Tres Culturas', 'Avgiftsparkering under Plaza de las Tres Culturas') },
  { label: l('The last stretch', 'Der letzte Weg', 'El último tramo', 'Het laatste stuk', 'Sista biten'), value: l('Gradients, cobbles and steps', 'Steigung, Pflaster und Stufen', 'Cuestas, adoquines y escalones', 'Hellingen, kasseien en trappen', 'Backar, kullersten och trappsteg') },
  { label: l('Fixed spaces', 'Feste Plätze', 'Plazas fijas', 'Vaste plekken', 'Fasta platser'), value: l('None in the village; usually free anyway', 'Gibt es im Dorf nicht; frei ist meist trotzdem', 'No las hay en el pueblo; aun así casi siempre hay sitio', 'Zijn er in het dorp niet; vrij is er meestal toch', 'Finns inte i byn; ledigt är det oftast ändå') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'parking-reality',
    eyebrow: l('Timing', 'Zeitpunkt', 'La hora', 'Timing', 'Tidpunkt'),
    title: l('Arrive before eleven or after five', 'Kommt vor elf oder nach fünf', 'Llegad antes de las once o después de las cinco', 'Kom voor elf of na vijf', 'Kom före elva eller efter fem'),
    paragraphs: [
      l(
        'Over the years we see the same rhythm: day visitors arrive late in the morning and leave in the early afternoon. Our guests often do the opposite: to the beach in the morning, back when the village is empty again.',
        'Über die Jahre sehen wir denselben Rhythmus: Tagesgäste kommen am späten Vormittag und fahren am frühen Nachmittag. Unsere Gäste machen oft das Gegenteil: morgens an den Strand, zurück, wenn das Dorf wieder leer ist.',
        'Con los años vemos el mismo ritmo: los visitantes de día llegan a última hora de la mañana y se van a primera hora de la tarde. Nuestros huéspedes suelen hacer lo contrario: a la playa por la mañana, de vuelta cuando el pueblo vuelve a estar vacío.',
        'Door de jaren zien we hetzelfde ritme: dagjesmensen komen laat in de ochtend en vertrekken vroeg in de middag. Onze gasten doen vaak het omgekeerde: ’s ochtends naar het strand, terug als het dorp weer leeg is.',
        'Genom åren ser vi samma rytm: dagsbesökare kommer sent på förmiddagen och åker tidigt på eftermiddagen. Våra gäster gör ofta tvärtom: till stranden på morgonen, tillbaka när byn är tom igen.'
      ),
      l(
        '**If you can choose your arrival time: before eleven or after five.** Then the streets are open and the last stretch is short.',
        '**Wenn ihr euch die Ankunftszeit aussuchen könnt: vor elf oder nach fünf.** Dann sind die Straßen offen und der letzte Weg kurz.',
        '**Si podéis elegir la hora de llegada: antes de las once o después de las cinco.** Entonces las calles están abiertas y el último tramo es corto.',
        '**Als jullie de aankomsttijd kunnen kiezen: voor elf of na vijf.** Dan zijn de straten open en is de laatste weg kort.',
        '**Kan ni välja ankomsttid: före elva eller efter fem.** Då är gatorna öppna och den sista biten kort.'
      )
    ]
  },
  {
    id: 'arrival-luggage',
    eyebrow: l('With luggage', 'Mit Gepäck', 'Con maletas', 'Met bagage', 'Med bagage'),
    title: l('The lane is drivable in theory. We would still walk.', 'Die Gasse ist theoretisch befahrbar. Wir würden trotzdem laufen.', 'La calle es transitable en teoría. Aun así, iríamos andando.', 'De steeg is in theorie berijdbaar. Toch zouden we lopen.', 'Gränden går i teorin att köra på. Vi skulle ändå gå.'),
    paragraphs: [
      l(
        'It is narrow enough that a scratch on the hire car happens quickly, and sorting it out afterwards costs more time than the walk ever could.',
        'Sie ist eng genug, dass ein Kratzer am Mietwagen schnell passiert, und die Abwicklung danach kostet mehr Zeit als der Fußweg je könnte.',
        'Es tan estrecha que un rasguño en el coche de alquiler llega enseguida, y arreglarlo después cuesta más tiempo del que jamás costaría el paseo.',
        'Ze is smal genoeg dat een kras op de huurauto snel gebeurt, en de afhandeling daarna kost meer tijd dan de wandeling ooit zou kunnen.',
        'Den är trång nog att en skråma på hyrbilen lätt uppstår, och att reda ut det efteråt tar mer tid än promenaden någonsin skulle.'
      ),
      l(
        'Delivery vans for the restaurants and shops often stand in the middle of the lane. **On foot you are usually faster and always calmer.**',
        'Lieferwagen für Restaurants und Läden stehen oft mitten in der Gasse. **Zu Fuß seid ihr meistens schneller und immer entspannter.**',
        'Las furgonetas de reparto de restaurantes y tiendas suelen quedarse en medio de la calle. **A pie sois casi siempre más rápidos y siempre más tranquilos.**',
        'Bestelwagens voor de restaurants en winkels staan vaak midden in het steegje. **Te voet zijn jullie meestal sneller en altijd rustiger.**',
        'Leveransbilar till restauranger och butiker står ofta mitt i gränden. **Till fots är ni oftast snabbare och alltid lugnare.**'
      )
    ]
  },
  {
    id: 'last-mile',
    eyebrow: l('The walk', 'Der Weg', 'El tramo', 'De route', 'Vägen'),
    title: l('The map shows metres, the village has steps', 'Die Karte zeigt Meter, das Dorf hat Stufen', 'El mapa muestra metros, el pueblo tiene escalones', 'De kaart toont meters, het dorp heeft treden', 'Kartan visar meter, byn har trappsteg'),
    paragraphs: [
      l(
        'The way from the car to the door has gradient, cobbles and steps. A space that looks close on the map can be above or below.',
        'Der Weg vom Auto zur Tür hat Steigung, Pflaster und Stufen. Ein Platz, der auf der Karte nah wirkt, kann oben oder unten liegen.',
        'El camino del coche a la puerta tiene cuesta, empedrado y escalones. Una plaza que en el mapa parece cerca puede estar arriba o abajo.',
        'De weg van de auto naar de deur heeft helling, kinderkopjes en treden. Een plek die op de kaart dichtbij lijkt, kan boven of beneden liggen.',
        'Vägen från bilen till dörren har lutning, kullersten och trappsteg. En plats som ser nära ut på kartan kan ligga ovanför eller nedanför.'
      ),
      l(
        '**If luggage or mobility play a role, ask us before you book.** We describe the way to your apartment with surface and step count.',
        '**Wenn Gepäck oder Mobilität eine Rolle spielen, fragt uns vor der Buchung.** Wir beschreiben euch den Weg zu eurer Wohnung mit Untergrund und Stufenzahl.',
        '**Si el equipaje o la movilidad importan, preguntadnos antes de reservar.** Os describimos el camino hasta vuestro apartamento con el tipo de suelo y el número de escalones.',
        '**Als bagage of mobiliteit een rol spelen, vraag het ons voordat jullie boeken.** We beschrijven de weg naar jullie appartement met ondergrond en aantal treden.',
        '**Om bagage eller rörlighet spelar roll, fråga oss innan ni bokar.** Vi beskriver vägen till er lägenhet med underlag och antal trappsteg.'
      )
    ]
  },
  {
    id: 'amara-boundary',
    eyebrow: l('Coming to us', 'Zu uns', 'Hasta nosotros', 'Naar ons toe', 'Till oss'),
    title: l('For Casa AMARA: Avenida Carlos Cano', 'Für Casa AMARA: Avenida Carlos Cano', 'Para Casa AMARA: Avenida Carlos Cano', 'Voor Casa AMARA: Avenida Carlos Cano', 'Till Casa AMARA: Avenida Carlos Cano'),
    paragraphs: [
      l(
        'There is usually space on Avenida Carlos Cano, and from there it is a short walk up to our shared front door. None of the four apartments has a space of its own.',
        'An der Avenida Carlos Cano ist meistens Platz, und von dort ist es ein kurzer Weg bergauf bis zu unserer gemeinsamen Haustür. Einen eigenen Stellplatz hat keine der vier Wohnungen.',
        'En la avenida Carlos Cano casi siempre hay sitio, y desde allí es un corto paseo cuesta arriba hasta nuestra puerta común. Ninguno de los cuatro apartamentos tiene plaza propia.',
        'Aan Avenida Carlos Cano is meestal plek, en van daar is het een korte weg omhoog naar onze gezamenlijke voordeur. Geen van de vier appartementen heeft een eigen plek.',
        'På Avenida Carlos Cano finns det oftast plats, och därifrån är det en kort väg uppför till vår gemensamma ytterdörr. Ingen av de fyra lägenheterna har egen parkeringsplats.'
      ),
      l(
        '**Before you arrive you get the exact route with a photo of the front door.** Send us your arrival time and we tell you whether the streets are open then.',
        '**Vor der Anreise bekommt ihr den genauen Weg mit einem Foto der Haustür.** Schickt uns eure Ankunftszeit, dann sagen wir euch, ob die Straßen dann offen sind.',
        '**Antes de llegar recibís el camino exacto con una foto de la puerta.** Enviadnos vuestra hora de llegada y os decimos si las calles están abiertas a esa hora.',
        '**Vóór de aankomst krijgen jullie de exacte route met een foto van de voordeur.** Stuur ons jullie aankomsttijd en we zeggen of de straten dan open zijn.',
        '**Före ankomsten får ni den exakta vägen med ett foto av ytterdörren.** Skicka er ankomsttid så säger vi om gatorna är öppna då.'
      )
    ]
  }
];

const related = [
  { token: 'getting_to_frigiliana' as const, label: l('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Ta sig till Frigiliana'), text: l('Airport, roads and the drive up from the coast.', 'Flughafen, Straßen und die Fahrt von der Küste hinauf.', 'Aeropuerto, carreteras y la subida desde la costa.', 'Luchthaven, wegen en de rit vanaf de kust omhoog.', 'Flygplats, vägar och färden upp från kusten.') },
  { token: 'frigiliana_stairs' as const, label: l('Where to stay in Frigiliana', 'Wo in Frigiliana übernachten?', 'Dónde alojarse en Frigiliana', 'Waar overnachten in Frigiliana?', 'Var ska man bo i Frigiliana?'), text: l('Old town, newer village or campo: what lies where.', 'Altstadt, neuer Ort oder Campo: was wo liegt.', 'Casco antiguo, parte nueva o campo: qué hay dónde.', 'Oude kern, nieuwer deel of campo: wat waar ligt.', 'Gamla byn, nya delen eller campo: vad som ligger var.') },
  { token: 'nerja_vs_frigiliana' as const, label: l('Frigiliana or Nerja?', 'Frigiliana oder Nerja?', '¿Frigiliana o Nerja?', 'Frigiliana of Nerja?', 'Frigiliana eller Nerja?'), text: l('The beach town with flat walks, a quarter of an hour below.', 'Der Strandort mit flachen Wegen, eine Viertelstunde unterhalb.', 'El pueblo de playa con caminos llanos, a un cuarto de hora más abajo.', 'De strandplaats met vlakke wegen, een kwartier lager.', 'Strandorten med plana vägar, en kvart nedanför.') }
];

const sourceRows = [
  { label: l('Turismo de Frigiliana · street map', 'Turismo de Frigiliana · Ortsplan', 'Turismo de Frigiliana · callejero', 'Turismo de Frigiliana · plattegrond', 'Turismo de Frigiliana · gatukarta'), text: l('The official layout of the village and its historic streets.', 'Der offizielle Ortsplan mit den historischen Gassen.', 'El plano oficial del pueblo y sus calles históricas.', 'De officiële plattegrond van het dorp en de historische straten.', 'Den officiella kartan över byn och dess historiska gator.'), href: 'https://www.turismofrigiliana.es/es/callejero.html' },
  { label: l('Ayuntamiento de Frigiliana · old-town traffic rules', 'Ayuntamiento de Frigiliana · Verkehrsordnung Altstadt', 'Ayuntamiento de Frigiliana · ordenanza de tráfico', 'Ayuntamiento de Frigiliana · verkeersverordening', 'Ayuntamiento de Frigiliana · trafikförordning'), text: l('The 2011 traffic ordinance and the 2018 deliberation on repealing it.', 'Die Verkehrsordnung von 2011 und die Beratung über ihre Aufhebung 2018.', 'La ordenanza de tráfico de 2011 y la deliberación de 2018 sobre su derogación.', 'De verkeersverordening van 2011 en de beraadslaging over de intrekking in 2018.', 'Trafikförordningen från 2011 och överläggningen om att upphäva den 2018.'), href: 'https://frigiliana.es/memoria-de-derogacion-ordenanza-trafico-casco-antiguo/' }
];

const makeLocale = (lang: AmaraLanguage): ParkingGuideLocale => ({
  navLabel: navLabel[lang],
  hero: { eyebrow: hero.eyebrow[lang], title: hero.title[lang], subtitle: hero.subtitle[lang], standfirst: hero.standfirst[lang], summaryEyebrow: hero.summaryEyebrow[lang], summary: hero.summary[lang], note: hero.note[lang], updated: hero.updated[lang] },
  facts: facts.map((item) => ({ label: item.label[lang], value: item.value[lang] })),
  sections: sections.map((section) => ({ id: section.id, eyebrow: section.eyebrow[lang], title: section.title[lang], paragraphs: section.paragraphs.map((p) => p[lang]) })),
  related: {
    eyebrow: l('Keep reading', 'Weiterlesen', 'Seguir leyendo', 'Verder lezen', 'Läs vidare')[lang],
    title: l('Getting here and the walks', 'Anreise und Wege', 'Llegada y caminos', 'Aankomst en wegen', 'Resan hit och vägarna')[lang],
    links: related.map((item) => ({ token: item.token, label: item.label[lang], text: item.text[lang] }))
  },
  sources: {
    eyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor')[lang],
    title: l('Where these details come from', 'Woher diese Angaben kommen', 'De dónde salen estos datos', 'Waar deze gegevens vandaan komen', 'Varifrån uppgifterna kommer')[lang],
    intro: l('Town map and traffic rules from the municipality; the rhythm of arrivals and the advice to walk from us.', 'Ortsplan und Verkehrsregeln von der Gemeinde; der Rhythmus der Ankünfte und der Rat, zu Fuß zu gehen, von uns.', 'Plano y normas de tráfico del ayuntamiento; el ritmo de las llegadas y el consejo de ir a pie, nuestros.', 'Plattegrond en verkeersregels van de gemeente; het ritme van de aankomsten en het advies om te lopen van ons.', 'Karta och trafikregler från kommunen; rytmen i ankomsterna och rådet att gå från oss.')[lang],
    checked: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')[lang],
    links: sourceRows.map((row) => ({ label: row.label[lang], text: row.text[lang], href: row.href }))
  },
  closing: {
    eyebrow: l('Parking at AMARA', 'Parken bei AMARA', 'Aparcar en AMARA', 'Parkeren bij AMARA', 'Parkering hos AMARA')[lang],
    title: l('Tell us when you arrive', 'Sagt uns, wann ihr ankommt', 'Contadnos cuándo llegáis', 'Vertel ons wanneer jullie aankomen', 'Berätta när ni kommer')[lang],
    body: l('We send you the route, the photo of the front door and tell you whether the streets are open at that time.', 'Wir schicken euch den Weg, das Foto der Haustür und sagen euch, ob die Straßen zu der Zeit offen sind.', 'Os enviamos el camino, la foto de la puerta y os decimos si las calles están abiertas a esa hora.', 'We sturen jullie de route, de foto van de voordeur en zeggen of de straten op dat moment open zijn.', 'Vi skickar er vägen, fotot av ytterdörren och säger om gatorna är öppna vid den tiden.')[lang],
    locationLabel: l('Explore Frigiliana', 'Frigiliana entdecken', 'Descubrir Frigiliana', 'Ontdek Frigiliana', 'Upptäck Frigiliana')[lang],
    propertyLabel: l('View AMARA homes', 'AMARA-Häuser ansehen', 'Ver los alojamientos AMARA', 'Bekijk de AMARA-verblijven', 'Se AMARA-boendena')[lang]
  }
});

export const frigilianaParkingGuideContent = Object.fromEntries(langs.map((lang) => [lang, makeLocale(lang)])) as Record<AmaraLanguage, ParkingGuideLocale>;
