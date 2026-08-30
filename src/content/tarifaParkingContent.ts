import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-21', dateModified: '2026-08-29', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorSlug: 'staying-with-us' };

export const tarifaParkingSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-tarifa-parking-v2.0', pageType: 'A', entityKey: 'amara-brand', article,
  languages: {
    en: { title: 'Parking in Tarifa: A Garage Space Is Included', description: 'AMARA Family & Surf comes with a reserved underground space, so arrival is settled. July and August are the hardest months for public parking in town.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Parken in Tarifa: Ein Garagenplatz ist dabei', description: 'Zu AMARA Family & Surf gehört ein reservierter Tiefgaragenplatz — die Ankunft ist damit geklärt. Juli und August sind die schwierigsten Monate für öffentliches Parken.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aparcar en Tarifa: la plaza de garaje va incluida', description: 'AMARA Family & Surf incluye una plaza reservada en el garaje, así que la llegada está resuelta. Julio y agosto son los meses más difíciles para aparcar en la calle.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Parkeren in Tarifa: een garageplaats is inbegrepen', description: 'Bij AMARA Family & Surf hoort een gereserveerde garageplaats, dus de aankomst is geregeld. Juli en augustus zijn de lastigste maanden voor openbaar parkeren.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Parkering i Tarifa: en garageplats ingår', description: 'Till AMARA Family & Surf hör en reserverad garageplats, så ankomsten är löst. Juli och augusti är de svåraste månaderna för allmän parkering i staden.', robots: 'index, follow', canonical: 'auto' }
  }
};

const navLabel = l('Parking & Accessibility', 'Parken & Erreichbarkeit', 'Aparcamiento y acceso', 'Parkeren & toegankelijkheid', 'Parkering & tillgänglighet');

const hero = {
  eyebrow: l('Parking & access · Tarifa', 'Parken & Erreichbarkeit · Tarifa', 'Aparcamiento y acceso · Tarifa', 'Parkeren & toegankelijkheid · Tarifa', 'Parkering & tillgänglighet · Tarifa'),
  title: l('At AMARA, parking is already solved', 'Bei AMARA ist das Parken schon geklärt', 'En AMARA el aparcamiento ya está resuelto', 'Bij AMARA is parkeren al geregeld', 'Hos AMARA är parkeringen redan löst'),
  standfirst: l(
    'A reserved underground space comes with AMARA Family & Surf, so you arrive, drive in and stop looking. That matters most in July and August, which in our experience are the hardest months for public parking in Tarifa — we would not call it impossible, but we plan every drive more carefully then. The garage settles the apartment, not the rest of the day: a beach further west and an evening in the old town are separate decisions, each with its own access. Tell us where you are heading and we will look at that specific spot with you.',
    'Zu AMARA Family & Surf gehört ein reservierter Tiefgaragenplatz — ihr kommt an, fahrt hinein und hört auf zu suchen. Das zählt vor allem im Juli und August, die nach unserer Erfahrung die schwierigsten Monate fürs öffentliche Parken in Tarifa sind; unmöglich würden wir es nicht nennen, aber wir planen dann jede Fahrt sorgfältiger. Die Garage löst die Unterkunft, nicht den ganzen Tag: Ein Strand weiter westlich und ein Abend in der Altstadt sind eigene Entscheidungen mit eigener Zufahrt. Sagt uns euer Ziel, dann schauen wir uns genau diese Stelle mit euch an.',
    'AMARA Family & Surf incluye una plaza reservada en el garaje: llegáis, entráis y dejáis de buscar. Eso importa sobre todo en julio y agosto, que según nuestra experiencia son los meses más difíciles para aparcar en Tarifa; no lo llamaríamos imposible, pero entonces planificamos cada trayecto con más cuidado. El garaje resuelve el alojamiento, no todo el día: una playa más al oeste y una noche en el casco antiguo son decisiones aparte, con su propio acceso. Decidnos adónde vais y miramos ese punto concreto con vosotros.',
    'Bij AMARA Family & Surf hoort een gereserveerde plek in de parkeergarage — jullie komen aan, rijden naar binnen en stoppen met zoeken. Dat telt vooral in juli en augustus, in onze ervaring de lastigste maanden voor openbaar parkeren in Tarifa; onmogelijk zouden we het niet noemen, maar we plannen dan elke rit zorgvuldiger. De garage lost het verblijf op, niet de hele dag: een strand verder westelijk en een avond in de oude stad zijn aparte beslissingen, elk met eigen toegang. Zeg ons waar jullie heen gaan, dan kijken we samen naar die specifieke plek.',
    'Till AMARA Family & Surf hör en reserverad garageplats — ni kommer fram, kör in och slutar leta. Det betyder mest i juli och augusti, som enligt vår erfarenhet är de svåraste månaderna för allmän parkering i Tarifa; omöjligt skulle vi inte kalla det, men då planerar vi varje körning mer noggrant. Garaget löser boendet, inte hela dagen: en strand längre västerut och en kväll i gamla stan är egna beslut med egen infart. Säg vart ni ska, så tittar vi på just den platsen tillsammans med er.'
  ),
  note: l(
    'You get the exact garage entrance and access with your arrival information.',
    'Die genaue Garagenzufahrt und den Zugang bekommt ihr mit euren Ankunftsinformationen.',
    'La entrada exacta al garaje y el acceso os llegan con la información de llegada.',
    'De precieze garage-ingang en toegang krijgen jullie bij de aankomstinformatie.',
    'Den exakta garageinfarten och åtkomsten får ni med er ankomstinformation.'
  ),
  updated: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')
};

const facts = [
  { label: l('At AMARA Family & Surf', 'Bei AMARA Family & Surf', 'En AMARA Family & Surf', 'Bij AMARA Family & Surf', 'Vid AMARA Family & Surf'), value: l('A reserved underground space is included', 'Ein reservierter Tiefgaragenplatz ist enthalten', 'Incluye plaza reservada en el garaje', 'Een gereserveerde garageplaats inbegrepen', 'En reserverad garageplats ingår') },
  { label: l('Hardest months', 'Schwierigste Monate', 'Meses más difíciles', 'Lastigste maanden', 'Svåraste månaderna'), value: l('July and August, in our experience', 'Juli und August, nach unserer Erfahrung', 'Julio y agosto, según nuestra experiencia', 'Juli en augustus, in onze ervaring', 'Juli och augusti, enligt vår erfarenhet') },
  { label: l('For the town', 'Für die Stadt', 'Para el pueblo', 'Voor de stad', 'För staden'), value: l('Leave the car in the garage and walk', 'Auto in der Garage lassen und laufen', 'Dejad el coche en el garaje y andad', 'Laat de auto in de garage en loop', 'Lämna bilen i garaget och gå') },
  { label: l('For a beach day', 'Für einen Strandtag', 'Para un día de playa', 'Voor een stranddag', 'För en stranddag'), value: l('Check the access for that beach first', 'Erst die Zufahrt zu genau diesem Strand prüfen', 'Comprobad primero el acceso a esa playa', 'Check eerst de toegang tot dát strand', 'Kolla först infarten till just den stranden') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'arrival-luggage',
    eyebrow: l('Arrival', 'Ankunft', 'Llegada', 'Aankomst', 'Ankomst'),
    title: l('You drive in and you are done', 'Ihr fahrt hinein und seid fertig', 'Entráis y ya está', 'Jullie rijden naar binnen en klaar', 'Ni kör in och är klara'),
    paragraphs: [
      l(
        'No circling with a full car, no watching the clock on a loading bay. The lift goes up to the apartment door and there are no steps outside.',
        'Kein Kreisen mit vollem Auto, kein Blick auf die Uhr in einer Ladezone. Der Aufzug fährt bis vor die Wohnungstür, und draußen gibt es keine Stufen.',
        'Sin dar vueltas con el coche cargado ni mirar el reloj en una zona de carga. El ascensor sube hasta la puerta del apartamento y fuera no hay escalones.',
        'Geen rondjes rijden met een volle auto, geen klok in de gaten houden bij een laad- en loszone. De lift gaat tot aan de voordeur en buiten zijn er geen treden.',
        'Inget cirklande med full bil, ingen klockkoll i en lastzon. Hissen går ända fram till lägenhetsdörren och utomhus finns inga trappsteg.'
      ),
      l(
        '**Inside the apartment, steps lead up to the bedrooms.** If that matters for your decision, ask us before you book and we will describe the whole route from the garage level to the door.',
        '**In der Wohnung führen Stufen hinauf zu den Schlafzimmern.** Wenn das für eure Entscheidung zählt, fragt uns vor der Buchung — wir beschreiben euch den ganzen Weg von der Garagenebene bis zur Tür.',
        '**Dentro del apartamento, unos escalones suben a los dormitorios.** Si eso influye en vuestra decisión, preguntadnos antes de reservar y os describimos todo el recorrido desde el garaje hasta la puerta.',
        '**In het appartement leiden treden omhoog naar de slaapkamers.** Als dat meetelt in jullie beslissing, vraag het ons vóór het boeken; we beschrijven de hele route van het garageniveau tot de deur.',
        '**Inne i lägenheten leder trappsteg upp till sovrummen.** Om det spelar roll för ert beslut, fråga oss innan ni bokar, så beskriver vi hela vägen från garageplanet till dörren.'
      )
    ]
  },
  {
    id: 'parking-reality',
    eyebrow: l('In town', 'In der Stadt', 'En el pueblo', 'In de stad', 'I staden'),
    title: l('Town, old town, port and beaches are not interchangeable', 'Stadt, Altstadt, Hafen und Strände sind nicht austauschbar', 'Pueblo, casco antiguo, puerto y playas no son intercambiables', 'Stad, oude kern, haven en stranden zijn niet uitwisselbaar', 'Stad, gamla stan, hamn och stränder är inte utbytbara'),
    paragraphs: [
      l(
        'A space that works for an evening in the old town says very little about a windy beach day further west. Each has its own approach, its own rules and its own season.',
        'Ein Platz, der für einen Abend in der Altstadt funktioniert, sagt wenig über einen windigen Strandtag weiter westlich. Jedes Ziel hat eigene Zufahrt, eigene Regeln und eigene Saison.',
        'Una plaza que sirve para una noche en el casco antiguo dice poco sobre un día de playa con viento más al oeste. Cada sitio tiene su acceso, sus normas y su temporada.',
        'Een plek die werkt voor een avond in de oude kern zegt weinig over een winderige stranddag verder westelijk. Elk heeft een eigen toegang, eigen regels en eigen seizoen.',
        'En plats som fungerar för en kväll i gamla stan säger lite om en blåsig stranddag längre västerut. Var och en har egen infart, egna regler och egen säsong.'
      ),
      l(
        'That is why we never give one blanket parking answer for Tarifa. **Tell us the destination first, and we will look at the approach and the situation right there.**',
        'Deshalb geben wir für Tarifa nie eine pauschale Parkantwort. **Nennt uns zuerst euer Ziel, dann schauen wir auf die Zufahrt und die Situation genau dort.**',
        'Por eso nunca damos una respuesta general sobre aparcar en Tarifa. **Decidnos primero el destino y miramos el acceso y la situación justo ahí.**',
        'Daarom geven we voor Tarifa nooit één algemeen parkeerantwoord. **Noem eerst jullie bestemming, dan kijken we naar de toegang en de situatie precies daar.**',
        'Därför ger vi aldrig ett generellt parkeringssvar för Tarifa. **Säg först vart ni ska, så tittar vi på infarten och läget just där.**'
      )
    ]
  },
  {
    id: 'seasonal-rules',
    eyebrow: l('High season', 'Hochsaison', 'Temporada alta', 'Hoogseizoen', 'Högsäsong'),
    title: l('July and August need a different expectation', 'Juli und August brauchen eine andere Erwartung', 'Julio y agosto piden otra expectativa', 'Juli en augustus vragen om een andere verwachting', 'Juli och augusti kräver en annan förväntan'),
    paragraphs: [
      l(
        'We will say it plainly: those are the two months when public parking in Tarifa is hardest. We would not call it impossible, but we plan every drive more carefully then — and we appreciate the private garage a great deal.',
        'Wir sagen es offen: Das sind die beiden Monate, in denen öffentliches Parken in Tarifa am schwierigsten ist. Unmöglich würden wir es nicht nennen, aber wir planen dann jede Fahrt sorgfältiger — und schätzen die private Garage sehr.',
        'Lo decimos claro: son los dos meses en que aparcar en la vía pública en Tarifa es más difícil. No lo llamaríamos imposible, pero entonces planificamos cada trayecto con más cuidado y agradecemos mucho el garaje privado.',
        'We zeggen het gewoon: dat zijn de twee maanden waarin openbaar parkeren in Tarifa het lastigst is. Onmogelijk zouden we het niet noemen, maar we plannen dan elke rit zorgvuldiger — en zijn erg blij met de eigen garage.',
        'Vi säger det rakt ut: det är de två månader då allmän parkering i Tarifa är svårast. Omöjligt skulle vi inte kalla det, men då planerar vi varje körning mer noggrant — och uppskattar det privata garaget mycket.'
      ),
      l(
        'The municipal system has also been changing, including the machines and how you pay. **Read the sign where you actually park** — it is more reliable than any figure we could print here.',
        'Auch das kommunale System hat sich verändert, unter anderem bei Automaten und Bezahlart. **Lest das Schild dort, wo ihr tatsächlich parkt** — es ist verlässlicher als jede Zahl, die wir hier abdrucken könnten.',
        'El sistema municipal también ha ido cambiando, incluidos los parquímetros y la forma de pago. **Leed la señal donde realmente aparquéis**: es más fiable que cualquier cifra que pudiéramos poner aquí.',
        'Ook het gemeentelijke systeem is veranderd, inclusief de automaten en de betaalwijze. **Lees het bord waar je daadwerkelijk parkeert** — dat is betrouwbaarder dan elk getal dat wij hier kunnen afdrukken.',
        'Även det kommunala systemet har förändrats, bland annat automaterna och hur man betalar. **Läs skylten där ni faktiskt parkerar** — den är mer pålitlig än någon siffra vi kan trycka här.'
      )
    ]
  }
];

const related = [
  { token: 'getting_to_tarifa' as const, label: l('Getting to Tarifa', 'Anreise nach Tarifa', 'Cómo llegar a Tarifa', 'Naar Tarifa reizen', 'Ta sig till Tarifa'), text: l('Airports, the drive down and the coach connections.', 'Flughäfen, die Fahrt hinunter und die Busverbindungen.', 'Aeropuertos, el trayecto y las conexiones en autobús.', 'Luchthavens, de rit ernaartoe en de busverbindingen.', 'Flygplatser, färden dit och bussförbindelserna.') },
  { token: 'tarifa_beaches_authority' as const, label: l('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'), text: l('Each beach has its own access, and the wind decides which one fits.', 'Jeder Strand hat eine eigene Zufahrt, und der Wind entscheidet, welcher passt.', 'Cada playa tiene su acceso y el viento decide cuál encaja.', 'Elk strand heeft een eigen toegang, en de wind bepaalt welk past.', 'Varje strand har egen infart, och vinden avgör vilken som passar.') },
  { token: 'tarifa_where_to_stay' as const, label: l('Where to Stay', 'Wo übernachten', 'Dónde alojarse', 'Waar verblijven', 'Var ska man bo'), text: l('What each part of Tarifa is like to come home to.', 'Wie es sich anfühlt, in den einzelnen Teilen Tarifas nach Hause zu kommen.', 'Cómo es volver a casa en cada zona de Tarifa.', 'Hoe het is om in elk deel van Tarifa thuis te komen.', 'Hur det är att komma hem i Tarifas olika delar.') }
];

const sourceRows = [
  { label: l('Ayuntamiento de Tarifa · municipal parking authorisations', 'Ayuntamiento de Tarifa · kommunale Parkgenehmigungen', 'Ayuntamiento de Tarifa · autorizaciones de aparcamiento', 'Ayuntamiento de Tarifa · gemeentelijke parkeervergunningen', 'Ayuntamiento de Tarifa · kommunala parkeringstillstånd'), text: l('The 2026 process for annual spaces at Paseo del Retiro, which shows how the municipal system works.', 'Das Verfahren 2026 für Jahresplätze am Paseo del Retiro, das zeigt, wie das kommunale System funktioniert.', 'El proceso de 2026 para plazas anuales en el Paseo del Retiro, que muestra cómo funciona el sistema municipal.', 'De procedure van 2026 voor jaarplaatsen aan de Paseo del Retiro, die laat zien hoe het gemeentelijke systeem werkt.', 'Processen 2026 för årsplatser vid Paseo del Retiro, som visar hur det kommunala systemet fungerar.'), href: 'https://www.aytotarifa.com/notices/listado-de-aprobacion-de-listado-definitivo-de-personas-admitidas-en-el-proceso-de-concesion-de-autorizaciones-anuales-para-el-uso-de-plazas-de-estacionamiento-de-vehiculos-en-el-aparcamiento-municipa/' },
  { label: l('Ayuntamiento de Tarifa · beach management plan', 'Ayuntamiento de Tarifa · Strandbewirtschaftungsplan', 'Ayuntamiento de Tarifa · plan de explotación de playas', 'Ayuntamiento de Tarifa · strandexploitatieplan', 'Ayuntamiento de Tarifa · plan för stränderna'), text: l('The 2024–2027 plan behind seasonal beach access and services.', 'Der Plan 2024–2027 hinter Strandzufahrt und saisonalem Betrieb.', 'El plan 2024–2027 que hay detrás del acceso y los servicios de playa.', 'Het plan 2024–2027 achter strandtoegang en seizoensdiensten.', 'Planen 2024–2027 bakom strandtillträde och säsongsdrift.'), href: 'https://www.aytotarifa.com/notices/plan-de-explotacion-de-playas-2024-2027/' }
];

const makeLocale = (lang: AmaraLanguage): ParkingGuideLocale => ({
  navLabel: navLabel[lang],
  hero: { eyebrow: hero.eyebrow[lang], title: hero.title[lang], standfirst: hero.standfirst[lang], note: hero.note[lang], updated: hero.updated[lang] },
  facts: facts.map((item) => ({ label: item.label[lang], value: item.value[lang] })),
  sections: sections.map((section) => ({ id: section.id, eyebrow: section.eyebrow[lang], title: section.title[lang], paragraphs: section.paragraphs.map((p) => p[lang]) })),
  related: {
    eyebrow: l('Keep reading', 'Weiterlesen', 'Seguir leyendo', 'Verder lezen', 'Läs vidare')[lang],
    title: l('Getting here, and where the car is worth using', 'Die Anreise — und wann sich das Auto lohnt', 'Cómo llegar y cuándo merece la pena el coche', 'De reis hierheen en wanneer de auto loont', 'Resan hit och när bilen är värd att använda')[lang],
    links: related.map((item) => ({ token: item.token, label: item.label[lang], text: item.text[lang] }))
  },
  sources: {
    eyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor')[lang],
    title: l('Where these details come from', 'Woher diese Angaben kommen', 'De dónde salen estos datos', 'Waar deze gegevens vandaan komen', 'Varifrån uppgifterna kommer')[lang],
    intro: l('The municipal parking and beach documents come from the town hall. The garage space and the July and August experience come from us.', 'Die kommunalen Park- und Stranddokumente stammen von der Stadtverwaltung. Der Garagenplatz und die Erfahrung mit Juli und August kommen von uns.', 'Los documentos municipales de aparcamiento y playas proceden del ayuntamiento. La plaza de garaje y la experiencia de julio y agosto vienen de nosotros.', 'De gemeentelijke parkeer- en stranddocumenten komen van de gemeente. De garageplaats en de ervaring met juli en augustus komen van ons.', 'De kommunala parkerings- och stranddokumenten kommer från kommunen. Garageplatsen och erfarenheten av juli och augusti kommer från oss.')[lang],
    checked: l('Last checked in August 2026', 'Zuletzt im August 2026 nachgesehen', 'Revisado por última vez en agosto de 2026', 'Voor het laatst nagekeken in augustus 2026', 'Senast kontrollerat i augusti 2026')[lang],
    links: sourceRows.map((row) => ({ label: row.label[lang], text: row.text[lang], href: row.href }))
  },
  closing: {
    eyebrow: l('Parking at AMARA', 'Parken bei AMARA', 'Aparcar en AMARA', 'Parkeren bij AMARA', 'Parkering hos AMARA')[lang],
    title: l('Tell us where you are heading', 'Sagt uns, wohin ihr wollt', 'Contadnos adónde vais', 'Vertel ons waar jullie heen gaan', 'Berätta vart ni ska')[lang],
    body: l('The garage covers your arrival. For a specific beach or an evening in town, we will look at the access with you.', 'Die Garage deckt eure Ankunft ab. Für einen bestimmten Strand oder einen Abend in der Stadt schauen wir uns die Zufahrt mit euch an.', 'El garaje cubre vuestra llegada. Para una playa concreta o una noche en el pueblo, miramos el acceso con vosotros.', 'De garage dekt jullie aankomst. Voor een specifiek strand of een avond in de stad kijken we samen naar de toegang.', 'Garaget täcker er ankomst. För en viss strand eller en kväll i stan tittar vi på infarten tillsammans med er.')[lang],
    locationLabel: l('Explore Tarifa', 'Tarifa entdecken', 'Descubrir Tarifa', 'Ontdek Tarifa', 'Upptäck Tarifa')[lang],
    propertyLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Se AMARA Family & Surf')[lang]
  }
});

export const tarifaParkingContent = Object.fromEntries(langs.map((lang) => [lang, makeLocale(lang)])) as Record<AmaraLanguage, ParkingGuideLocale>;
