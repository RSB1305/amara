import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-20', dateModified: '2026-08-29', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorSlug: 'staying-with-us' };

export const frigilianaParkingGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-frigiliana-parking-v2.0', pageType: 'A', entityKey: 'amara-brand', article,
  languages: {
    en: { title: 'Parking in Frigiliana: Where to Leave the Car', description: 'Park below the old town and walk up. The two village streets usually close to traffic from late morning until around 5 pm, and the last stretch has cobbles and steps.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Parken in Frigiliana: Wo ihr das Auto lasst', description: 'Parkt unterhalb der Altstadt und lauft hinauf. Die beiden Dorfstraßen sind meist vom späten Vormittag bis etwa 17 Uhr gesperrt, und der letzte Weg hat Pflaster und Stufen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aparcar en Frigiliana: dónde dejar el coche', description: 'Aparcad debajo del casco antiguo y subid a pie. Las dos calles del pueblo suelen cerrarse desde media mañana hasta las 17 h, y el último tramo tiene adoquines y escalones.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Parkeren in Frigiliana: waar laat je de auto', description: 'Parkeer onder de oude kern en loop omhoog. De twee dorpsstraten zijn meestal van laat in de ochtend tot ongeveer 17 uur afgesloten, en het laatste stuk heeft kasseien en trappen.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Parkering i Frigiliana: var lämnar man bilen', description: 'Parkera nedanför gamla stan och gå upp. Byns två gator är oftast avstängda från sen förmiddag till omkring 17, och sista biten har kullersten och trappsteg.', robots: 'index, follow', canonical: 'auto' }
  }
};

const navLabel = l('Parking & Accessibility', 'Parken & Erreichbarkeit', 'Aparcamiento y acceso', 'Parkeren & toegankelijkheid', 'Parkering & tillgänglighet');

const hero = {
  eyebrow: l('Parking & access · Frigiliana', 'Parken & Erreichbarkeit · Frigiliana', 'Aparcamiento y acceso · Frigiliana', 'Parkeren & toegankelijkheid · Frigiliana', 'Parkering & tillgänglighet · Frigiliana'),
  title: l('Park below, walk up', 'Unten parken, hinauflaufen', 'Aparcad abajo y subid andando', 'Beneden parkeren, omhoog lopen', 'Parkera nedanför och gå upp'),
  standfirst: l(
    'That is our advice for almost every arrival, luggage included. Practically only two streets run through Frigiliana — Calle Real and its continuation Calle Chorruelo — and because of the day visitors the local police usually close them from somewhere between ten and eleven in the morning until around five. There is a paid car park below Plaza de las Tres Culturas, and permitted spaces along the approach roads. None of it can be reserved, so we cannot promise you a space for the minute you arrive. What we can tell you is which times are easier and what the last stretch is like.',
    'Das ist unser Rat für fast jede Ankunft, auch mit Koffer. Durch Frigiliana führen praktisch nur zwei Straßen — die Calle Real und ihre Verlängerung, die Calle Chorruelo —, und wegen der Tagesgäste sperrt die örtliche Polizei sie meist zwischen zehn und elf Uhr bis etwa 17 Uhr. Unterhalb der Plaza de las Tres Culturas gibt es einen kostenpflichtigen Parkplatz, dazu erlaubte Plätze an den Zufahrtsstraßen. Reservieren lässt sich davon nichts, einen Platz für die Minute eurer Ankunft können wir euch also nicht versprechen. Sagen können wir euch, welche Zeiten leichter sind und wie der letzte Weg aussieht.',
    'Ese es nuestro consejo para casi toda llegada, también con maletas. Por Frigiliana pasan prácticamente solo dos calles —la Calle Real y su continuación, la Calle Chorruelo— y, por los visitantes de día, la policía local suele cerrarlas entre las diez y las once de la mañana hasta alrededor de las cinco. Debajo de la Plaza de las Tres Culturas hay un aparcamiento de pago, y plazas permitidas en las vías de acceso. Nada de eso se puede reservar, así que no podemos prometeros una plaza para el minuto en que lleguéis. Sí podemos deciros qué horas son más fáciles y cómo es el último tramo.',
    'Dat is ons advies voor bijna elke aankomst, ook met bagage. Door Frigiliana lopen praktisch maar twee straten — de Calle Real en het verlengde daarvan, de Calle Chorruelo — en vanwege de dagbezoekers sluit de lokale politie ze meestal tussen tien en elf uur tot ongeveer vijf uur. Onder de Plaza de las Tres Culturas ligt een betaalde parkeerplaats, en langs de toegangswegen zijn toegestane plekken. Reserveren kan niet, dus een plek voor het moment van jullie aankomst kunnen we niet beloven. Wel kunnen we zeggen welke tijden makkelijker zijn en hoe het laatste stuk eruitziet.',
    'Det är vårt råd inför nästan varje ankomst, även med bagage. Genom Frigiliana går i praktiken bara två gator — Calle Real och dess fortsättning Calle Chorruelo — och på grund av dagsbesökarna stänger lokalpolisen dem oftast någon gång mellan tio och elva på förmiddagen till omkring fem. Nedanför Plaza de las Tres Culturas finns en avgiftsbelagd parkering, och tillåtna platser längs infartsvägarna. Inget av det går att boka, så vi kan inte lova er en plats för minuten ni kommer. Vi kan däremot säga vilka tider som är lättare och hur sista biten ser ut.'
  ),
  note: l(
    'On the day, the signs on the street always come first.',
    'Vor Ort haben die Schilder auf der Straße immer Vorrang.',
    'Sobre el terreno, las señales de la calle siempre mandan.',
    'Ter plaatse hebben de borden op straat altijd voorrang.',
    'På plats gäller alltid skyltarna på gatan.'
  ),
  updated: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')
};

const facts = [
  { label: l('The village streets', 'Die Dorfstraßen', 'Las calles del pueblo', 'De dorpsstraten', 'Byns gator'), value: l('Usually closed from about 10–11 until around 17:00', 'Meist von etwa 10–11 bis gegen 17 Uhr gesperrt', 'Suelen cerrarse de 10–11 h a las 17 h', 'Meestal dicht van ongeveer 10–11 tot 17 uur', 'Oftast avstängda från cirka 10–11 till omkring 17') },
  { label: l('Where to leave it', 'Wo ihr es abstellt', 'Dónde dejarlo', 'Waar je hem laat', 'Var ni lämnar den'), value: l('Paid car park below Plaza de las Tres Culturas', 'Kostenpflichtiger Parkplatz unter der Plaza de las Tres Culturas', 'Aparcamiento de pago bajo la Plaza de las Tres Culturas', 'Betaalde parking onder de Plaza de las Tres Culturas', 'Avgiftsparkering under Plaza de las Tres Culturas') },
  { label: l('The last stretch', 'Der letzte Weg', 'El último tramo', 'Het laatste stuk', 'Sista biten'), value: l('Gradients, cobbles and steps', 'Steigung, Pflaster und Stufen', 'Cuestas, adoquines y escalones', 'Hellingen, kasseien en trappen', 'Backar, kullersten och trappsteg') },
  { label: l('What we cannot do', 'Was wir nicht können', 'Lo que no podemos', 'Wat we niet kunnen', 'Vad vi inte kan'), value: l('Reserve or guarantee a space', 'Einen Platz reservieren oder garantieren', 'Reservar o garantizar una plaza', 'Een plek reserveren of garanderen', 'Reservera eller garantera en plats') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'parking-reality',
    eyebrow: l('Timing', 'Zeitpunkt', 'La hora', 'Timing', 'Tidpunkt'),
    title: l('Arrive before eleven or after five', 'Kommt vor elf oder nach fünf', 'Llegad antes de las once o después de las cinco', 'Kom voor elf of na vijf', 'Kom före elva eller efter fem'),
    paragraphs: [
      l(
        'Over the years we have watched a clear rhythm: many day visitors arrive late in the morning and leave in the early afternoon. Our own guests often do the opposite — they head for the beach around then and come back later.',
        'Über die Jahre haben wir einen klaren Rhythmus beobachtet: Viele Tagesgäste kommen am späteren Vormittag und fahren am frühen Nachmittag wieder. Unsere eigenen Gäste machen oft das Gegenteil — sie fahren dann an den Strand und kommen später zurück.',
        'Con los años hemos visto un ritmo claro: muchos visitantes de día llegan a media mañana y se van a primera hora de la tarde. Nuestros huéspedes suelen hacer lo contrario: se van entonces a la playa y vuelven más tarde.',
        'Door de jaren heen zien we een duidelijk ritme: veel dagbezoekers komen laat in de ochtend en vertrekken in de vroege middag. Onze eigen gasten doen vaak het omgekeerde — ze gaan dan naar het strand en komen later terug.',
        'Genom åren har vi sett en tydlig rytm: många dagsbesökare kommer sent på förmiddagen och åker i tidig eftermiddag. Våra egna gäster gör ofta tvärtom — de åker till stranden då och kommer tillbaka senare.'
      ),
      l(
        'These are not measured occupancy figures, just what we see year after year. **If you can choose your arrival time, before eleven or after five makes the last stretch noticeably easier.**',
        'Das sind keine gemessenen Auslastungszahlen, sondern das, was wir Jahr für Jahr sehen. **Wenn ihr euch die Ankunftszeit aussuchen könnt, macht vor elf oder nach fünf den letzten Weg deutlich leichter.**',
        'No son datos medidos de ocupación, sino lo que vemos año tras año. **Si podéis elegir la hora de llegada, antes de las once o después de las cinco hace el último tramo mucho más fácil.**',
        'Dit zijn geen gemeten bezettingscijfers, maar wat we jaar in jaar uit zien. **Als jullie de aankomsttijd kunnen kiezen, maakt voor elf of na vijf het laatste stuk merkbaar makkelijker.**',
        'Det här är inga uppmätta beläggningssiffror, utan vad vi ser år efter år. **Om ni kan välja ankomsttid gör före elva eller efter fem sista biten märkbart lättare.**'
      )
    ]
  },
  {
    id: 'arrival-luggage',
    eyebrow: l('With luggage', 'Mit Gepäck', 'Con maletas', 'Met bagage', 'Med bagage'),
    title: l('The lane is drivable in theory. We would still walk.', 'Die Gasse ist theoretisch befahrbar. Wir würden trotzdem laufen.', 'La calle es transitable en teoría. Aun así, iríamos andando.', 'De steeg is in theorie berijdbaar. Toch zouden we lopen.', 'Gränden går i teorin att köra på. Vi skulle ändå gå.'),
    paragraphs: [
      l(
        'It is narrow enough that a scratch on a hire car is a real risk if you are not used to Spanish village streets, and sorting that out afterwards costs far more than the walk ever does.',
        'Sie ist eng genug, dass eine Schramme am Mietwagen ein echtes Risiko ist, wenn ihr schmale spanische Dorfstraßen nicht gewohnt seid — und die Abwicklung danach kostet mehr als der Fußweg je könnte.',
        'Es lo bastante estrecha como para que un arañazo en el coche de alquiler sea un riesgo real si no estáis acostumbrados a las calles de pueblo españolas, y resolverlo después cuesta mucho más que el paseo.',
        'Hij is smal genoeg dat een kras op de huurauto een reëel risico is als je smalle Spaanse dorpsstraten niet gewend bent — en dat afhandelen kost daarna veel meer dan de wandeling ooit doet.',
        'Den är smal nog att en repa på hyrbilen är en verklig risk om ni inte är vana vid spanska byggator, och att reda ut det efteråt kostar långt mer än promenaden någonsin gör.'
      ),
      l(
        'Delivery vans for the restaurants and shops can block the lane completely, so even outside the closed hours you may not get through. **On foot you are usually faster, and always calmer.**',
        'Lieferwagen für Restaurants und Geschäfte können die Gasse komplett blockieren; auch außerhalb der Sperrzeiten kommt ihr also nicht sicher durch. **Zu Fuß seid ihr meistens schneller und immer entspannter.**',
        'Las furgonetas de reparto de restaurantes y tiendas pueden bloquear la calle por completo, así que ni siquiera fuera del horario de cierre está garantizado el paso. **A pie soléis ir más rápido y siempre más tranquilos.**',
        'Bestelbusjes voor restaurants en winkels kunnen de steeg volledig blokkeren, dus ook buiten de afsluittijden kom je er niet zeker door. **Te voet ben je meestal sneller en altijd rustiger.**',
        'Leveransbilar till restauranger och butiker kan blockera gränden helt, så inte ens utanför de avstängda timmarna är det säkert att ni kommer fram. **Till fots är ni oftast snabbare och alltid lugnare.**'
      )
    ]
  },
  {
    id: 'last-mile',
    eyebrow: l('The walk', 'Der Weg', 'El tramo', 'De route', 'Vägen'),
    title: l('Distance on a map says almost nothing here', 'Entfernung auf der Karte sagt hier fast nichts', 'La distancia en el mapa aquí dice muy poco', 'Afstand op de kaart zegt hier bijna niets', 'Avstånd på kartan säger nästan ingenting här'),
    paragraphs: [
      l(
        'The route from the car to a door can include gradients, cobbles and steps. A space close by on the map does not prove a step-free route, and a marked accessible bay does not describe what comes after it.',
        'Der Weg vom Auto bis zur Tür kann Steigungen, Pflaster und Stufen enthalten. Ein Platz, der auf der Karte nah wirkt, beweist keine stufenfreie Route, und ein ausgewiesener Behindertenparkplatz beschreibt nicht, was danach kommt.',
        'El recorrido del coche a la puerta puede incluir cuestas, adoquines y escalones. Una plaza cercana en el mapa no demuestra una ruta sin escalones, y una plaza reservada no describe lo que viene después.',
        'De route van de auto naar de deur kan hellingen, kasseien en trappen bevatten. Een plek die op de kaart dichtbij lijkt, bewijst geen route zonder treden, en een gehandicaptenplaats beschrijft niet wat erna komt.',
        'Vägen från bilen till dörren kan innehålla backar, kullersten och trappsteg. En plats som ser nära ut på kartan bevisar ingen trappfri väg, och en markerad handikapplats beskriver inte vad som kommer efter den.'
      ),
      l(
        '**If luggage or mobility matters for your decision, ask us before you book.** We will describe the actual route to your apartment — surfaces and step counts, not the word "accessible".',
        '**Wenn Gepäck oder Mobilität für eure Entscheidung zählen, fragt uns vor der Buchung.** Wir beschreiben euch den tatsächlichen Weg zu eurer Wohnung: Untergrund und Stufenzahl statt des Wortes „barrierefrei“.',
        '**Si el equipaje o la movilidad influyen en vuestra decisión, preguntadnos antes de reservar.** Os describiremos el recorrido real hasta vuestro alojamiento: superficies y número de escalones, no la palabra "accesible".',
        '**Als bagage of mobiliteit meetelt in jullie beslissing, vraag het ons vóór het boeken.** We beschrijven de werkelijke route naar jullie appartement: ondergrond en aantal treden, niet het woord "toegankelijk".',
        '**Om bagage eller rörlighet spelar roll för ert beslut, fråga oss innan ni bokar.** Vi beskriver den faktiska vägen till er lägenhet: underlag och antal trappsteg, inte ordet "tillgänglig".'
      )
    ]
  },
  {
    id: 'amara-boundary',
    eyebrow: l('Coming to us', 'Zu uns', 'Hasta nosotros', 'Naar ons toe', 'Till oss'),
    title: l('For Casa AMARA: Avenida Carlos Cano', 'Für Casa AMARA: Avenida Carlos Cano', 'Para Casa AMARA: Avenida Carlos Cano', 'Voor Casa AMARA: Avenida Carlos Cano', 'Till Casa AMARA: Avenida Carlos Cano'),
    paragraphs: [
      l(
        'There is usually space on Avenida Carlos Cano, and from there it is a short walk up to our shared front door. None of our four apartments has a private space, and we cannot hold one for you.',
        'An der Avenida Carlos Cano ist meistens Platz, und von dort ist es ein kurzer Weg bergauf bis zu unserer gemeinsamen Haustür. Keine unserer vier Wohnungen hat einen privaten Stellplatz, und freihalten können wir keinen.',
        'En la Avenida Carlos Cano suele haber sitio, y desde allí queda un tramo corto cuesta arriba hasta nuestra puerta común. Ninguno de nuestros cuatro alojamientos tiene plaza privada, y no podemos reservaros una.',
        'Aan de Avenida Carlos Cano is meestal plek, en vandaar is het een kort stuk omhoog naar onze gezamenlijke voordeur. Geen van onze vier appartementen heeft een eigen plek, en vrijhouden kunnen we er geen.',
        'På Avenida Carlos Cano finns oftast plats, och därifrån är det en kort bit uppför till vår gemensamma port. Ingen av våra fyra lägenheter har egen parkering, och vi kan inte hålla en plats åt er.'
      ),
      l(
        '**Before you arrive you get the exact route with a photo of the door.** Send us your arrival time and we will tell you whether the streets are likely to be open when you get here.',
        '**Vor der Anreise bekommt ihr den genauen Weg mit einem Foto der Haustür.** Schickt uns eure Ankunftszeit, dann sagen wir euch, ob die Straßen zu dem Zeitpunkt voraussichtlich offen sind.',
        '**Antes de llegar recibís el recorrido exacto con una foto de la puerta.** Enviadnos vuestra hora de llegada y os diremos si las calles estarán previsiblemente abiertas entonces.',
        '**Vóór aankomst krijgen jullie de exacte route met een foto van de voordeur.** Stuur ons jullie aankomsttijd, dan zeggen we of de straten dan waarschijnlijk open zijn.',
        '**Före ankomst får ni den exakta vägen med ett foto på porten.** Skicka er ankomsttid, så säger vi om gatorna troligen är öppna då.'
      )
    ]
  }
];

const related = [
  { token: 'getting_to_frigiliana' as const, label: l('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Ta sig till Frigiliana'), text: l('Airport, roads and the drive up from the coast.', 'Flughafen, Straßen und die Fahrt von der Küste hinauf.', 'Aeropuerto, carreteras y la subida desde la costa.', 'Luchthaven, wegen en de rit vanaf de kust omhoog.', 'Flygplats, vägar och färden upp från kusten.') },
  { token: 'frigiliana_stairs' as const, label: l('Streets & Stairs', 'Gassen & Treppen', 'Calles y escaleras', 'Straten & trappen', 'Gator & trappor'), text: l('How the slopes and steps shape an ordinary day here.', 'Wie Steigungen und Stufen einen normalen Tag hier prägen.', 'Cómo las cuestas y los escalones marcan un día normal aquí.', 'Hoe hellingen en treden een gewone dag hier bepalen.', 'Hur backar och trappsteg präglar en vanlig dag här.') },
  { token: 'nerja_vs_frigiliana' as const, label: l('Frigiliana or Nerja?', 'Frigiliana oder Nerja?', '¿Frigiliana o Nerja?', 'Frigiliana of Nerja?', 'Frigiliana eller Nerja?'), text: l('If the walk up is the sticking point, the coast is the other option.', 'Wenn der Weg hinauf der Knackpunkt ist, ist die Küste die Alternative.', 'Si la subida es el problema, la costa es la alternativa.', 'Als de klim het knelpunt is, is de kust het alternatief.', 'Om vägen uppför är knuten är kusten alternativet.') }
];

const sourceRows = [
  { label: l('Turismo de Frigiliana · street map', 'Turismo de Frigiliana · Ortsplan', 'Turismo de Frigiliana · callejero', 'Turismo de Frigiliana · plattegrond', 'Turismo de Frigiliana · gatukarta'), text: l('The official layout of the village and its historic streets.', 'Der offizielle Ortsplan mit den historischen Gassen.', 'El plano oficial del pueblo y sus calles históricas.', 'De officiële plattegrond van het dorp en de historische straten.', 'Den officiella kartan över byn och dess historiska gator.'), href: 'https://www.turismofrigiliana.es/es/callejero.html' },
  { label: l('Ayuntamiento de Frigiliana · old-town traffic rules', 'Ayuntamiento de Frigiliana · Verkehrsordnung Altstadt', 'Ayuntamiento de Frigiliana · ordenanza de tráfico', 'Ayuntamiento de Frigiliana · verkeersverordening', 'Ayuntamiento de Frigiliana · trafikförordning'), text: l('The 2011 ordinance — and the 2018 deliberation on repealing it, which is why we do not quote it as current.', 'Die Verkehrsordnung von 2011 — und die Beratung über ihre Aufhebung 2018, weshalb wir sie nicht als geltend zitieren.', 'La ordenanza de 2011 y la deliberación de 2018 sobre su derogación, por lo que no la citamos como vigente.', 'De verordening van 2011 en het beraad over intrekking in 2018, daarom citeren we die niet als geldend.', 'Förordningen från 2011 och överläggningen 2018 om att upphäva den, därför citerar vi den inte som gällande.'), href: 'https://frigiliana.es/memoria-de-derogacion-ordenanza-trafico-casco-antiguo/' }
];

const makeLocale = (lang: AmaraLanguage): ParkingGuideLocale => ({
  navLabel: navLabel[lang],
  hero: { eyebrow: hero.eyebrow[lang], title: hero.title[lang], standfirst: hero.standfirst[lang], note: hero.note[lang], updated: hero.updated[lang] },
  facts: facts.map((item) => ({ label: item.label[lang], value: item.value[lang] })),
  sections: sections.map((section) => ({ id: section.id, eyebrow: section.eyebrow[lang], title: section.title[lang], paragraphs: section.paragraphs.map((p) => p[lang]) })),
  related: {
    eyebrow: l('Keep reading', 'Weiterlesen', 'Seguir leyendo', 'Verder lezen', 'Läs vidare')[lang],
    title: l('Getting here, and what the walk is like', 'Die Anreise — und wie sich der Weg anfühlt', 'Cómo llegar y cómo es el camino', 'De reis hierheen en hoe de route aanvoelt', 'Resan hit och hur vägen känns')[lang],
    links: related.map((item) => ({ token: item.token, label: item.label[lang], text: item.text[lang] }))
  },
  sources: {
    eyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor')[lang],
    title: l('Where these details come from', 'Woher diese Angaben kommen', 'De dónde salen estos datos', 'Waar deze gegevens vandaan komen', 'Varifrån uppgifterna kommer')[lang],
    intro: l('The street layout and the traffic rules come from official village sources. The rhythm of arrivals and the advice to walk come from us.', 'Ortsplan und Verkehrsregeln stammen aus offiziellen Quellen des Dorfes. Der Rhythmus der Ankünfte und der Rat, zu Fuß zu gehen, kommen von uns.', 'El plano y las normas de tráfico proceden de fuentes oficiales del pueblo. El ritmo de las llegadas y el consejo de ir andando vienen de nosotros.', 'De plattegrond en verkeersregels komen uit officiële dorpsbronnen. Het ritme van de aankomsten en het advies om te lopen komen van ons.', 'Gatukartan och trafikreglerna kommer från byns officiella källor. Ankomsternas rytm och rådet att gå kommer från oss.')[lang],
    checked: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')[lang],
    links: sourceRows.map((row) => ({ label: row.label[lang], text: row.text[lang], href: row.href }))
  },
  closing: {
    eyebrow: l('Parking at AMARA', 'Parken bei AMARA', 'Aparcar en AMARA', 'Parkeren bij AMARA', 'Parkering hos AMARA')[lang],
    title: l('Tell us when you arrive', 'Sagt uns, wann ihr ankommt', 'Contadnos cuándo llegáis', 'Vertel ons wanneer jullie aankomen', 'Berätta när ni kommer')[lang],
    body: l('We will send you the route, the door photo and whether the streets are likely to be open at that hour.', 'Wir schicken euch den Weg, das Foto der Haustür und die Einschätzung, ob die Straßen zu der Zeit offen sind.', 'Os enviaremos el recorrido, la foto de la puerta y si las calles estarán abiertas a esa hora.', 'We sturen jullie de route, de foto van de voordeur en of de straten op dat uur open zijn.', 'Vi skickar vägen, fotot på porten och om gatorna troligen är öppna vid den tiden.')[lang],
    locationLabel: l('Explore Frigiliana', 'Frigiliana entdecken', 'Descubrir Frigiliana', 'Ontdek Frigiliana', 'Upptäck Frigiliana')[lang],
    propertyLabel: l('View AMARA homes', 'AMARA-Häuser ansehen', 'Ver los alojamientos AMARA', 'Bekijk de AMARA-verblijven', 'Se AMARA-boendena')[lang]
  }
});

export const frigilianaParkingGuideContent = Object.fromEntries(langs.map((lang) => [lang, makeLocale(lang)])) as Record<AmaraLanguage, ParkingGuideLocale>;
