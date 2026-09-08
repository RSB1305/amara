import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { ParkingGuideLocale, ParkingGuideSection } from './parkingGuideContent';

type Localized = Record<AmaraLanguage, string>;
const l = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({ en, de, es, nl, sv });
const langs: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];
const article = { datePublished: '2026-08-21', dateModified: '2026-08-29', authorName: 'Robert Sebastian Böhmer', authorType: 'Person' as const, authorRoute: 'about' };

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
    'AMARA Family & Surf comes with a reserved underground parking space: arrive, drive in, done. That counts most in July and August, when Tarifa is full. The garage solves the accommodation; for a beach further west or an evening in the old town, tell us the destination and we will tell you where to park.',
    'Zu AMARA Family & Surf gehört ein reservierter Tiefgaragenplatz: ankommen, hineinfahren, fertig. Das zählt vor allem im Juli und August, wenn Tarifa voll ist. Die Garage löst die Unterkunft; für einen Strand weiter westlich oder einen Abend in der Altstadt sagt ihr uns das Ziel, und wir sagen euch, wo ihr parkt.',
    'AMARA Family & Surf incluye una plaza reservada en el garaje subterráneo: llegar, entrar, listo. Eso cuenta sobre todo en julio y agosto, cuando Tarifa está llena. El garaje resuelve el alojamiento; para una playa más al oeste o una noche en el casco antiguo, decidnos el destino y os decimos dónde aparcar.',
    'Bij AMARA Family & Surf hoort een gereserveerde plek in de ondergrondse garage: aankomen, naar binnen rijden, klaar. Dat telt vooral in juli en augustus, als Tarifa vol is. De garage lost het verblijf op; voor een strand verder westelijk of een avond in de oude stad zeg je ons het doel, en wij zeggen waar je parkeert.',
    'Till AMARA Family & Surf hör en reserverad plats i garaget under huset: kom fram, kör in, klart. Det räknas mest i juli och augusti, när Tarifa är fullt. Garaget löser boendet; för en strand längre västerut eller en kväll i gamla stan säger ni oss målet, och vi säger var ni parkerar.'
  ),
  note: l(
    'You get the exact garage entrance and access with your arrival information.',
    'Die genaue Garagenzufahrt und den Zugang bekommt ihr mit euren Ankunftsinformationen.',
    'La entrada exacta al garaje y el acceso os llegan con la información de llegada.',
    'De precieze garage-ingang en toegang krijgen jullie bij de aankomstinformatie.',
    'Den exakta garageinfarten och åtkomsten får ni med er ankomstinformation.'
  ),
  updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
};

const facts = [
  { label: l('At AMARA Family & Surf', 'Bei AMARA Family & Surf', 'En AMARA Family & Surf', 'Bij AMARA Family & Surf', 'Vid AMARA Family & Surf'), value: l('A reserved underground space is included', 'Ein reservierter Tiefgaragenplatz ist enthalten', 'Incluye plaza reservada en el garaje', 'Een gereserveerde garageplaats inbegrepen', 'En reserverad garageplats ingår') },
  { label: l('Hardest months', 'Schwierigste Monate', 'Meses más difíciles', 'Lastigste maanden', 'Svåraste månaderna'), value: l('July and August', 'Juli und August', 'Julio y agosto', 'Juli en augustus', 'Juli och augusti') },
  { label: l('For the town', 'Für die Stadt', 'Para el pueblo', 'Voor de stad', 'För staden'), value: l('Leave the car in the garage and walk', 'Auto in der Garage lassen und laufen', 'Dejad el coche en el garaje y andad', 'Laat de auto in de garage en loop', 'Lämna bilen i garaget och gå') },
  { label: l('For a beach day', 'Für einen Strandtag', 'Para un día de playa', 'Voor een stranddag', 'För en stranddag'), value: l('Every beach has its own access', 'Jeder Strand hat seine eigene Zufahrt', 'Cada playa tiene su propio acceso', 'Elk strand heeft zijn eigen toegang', 'Varje strand har sin egen infart') }
] as const;

const sections: Array<{ id: ParkingGuideSection['id']; eyebrow: Localized; title: Localized; paragraphs: Localized[] }> = [
  {
    id: 'arrival-luggage',
    eyebrow: l('Arrival', 'Ankunft', 'Llegada', 'Aankomst', 'Ankomst'),
    title: l('You drive in and you are done', 'Ihr fahrt hinein und seid fertig', 'Entráis y ya está', 'Jullie rijden naar binnen en klaar', 'Ni kör in och är klara'),
    paragraphs: [
      l(
        'From the car into the lift, from the lift to the apartment door, without a single step outside.',
        'Vom Auto in den Aufzug, vom Aufzug vor die Wohnungstür, ohne eine Stufe draußen.',
        'Del coche al ascensor, del ascensor a la puerta del apartamento, sin un solo escalón fuera.',
        'Van de auto in de lift, van de lift tot voor de deur van het appartement, zonder één trede buiten.',
        'Från bilen in i hissen, från hissen fram till lägenhetsdörren, utan ett enda trappsteg utomhus.'
      ),
      l(
        '**Inside the apartment a staircase leads to the bedrooms.** If that matters to you, ask us before booking; we will describe the way from the garage to the door.',
        '**In der Wohnung führt eine Treppe zu den Schlafzimmern.** Wenn das für euch zählt, fragt uns vor der Buchung; wir beschreiben euch den Weg von der Garage bis zur Tür.',
        '**Dentro de la vivienda una escalera lleva a los dormitorios.** Si eso os importa, preguntadnos antes de reservar; os describimos el camino del garaje a la puerta.',
        '**In de woning leidt een trap naar de slaapkamers.** Als dat voor jullie telt, vraag het ons vóór het boeken; we beschrijven de weg van de garage tot de deur.',
        '**I lägenheten leder en trappa till sovrummen.** Om det räknas för er, fråga oss före bokningen; vi beskriver vägen från garaget till dörren.'
      )
    ]
  },
  {
    id: 'parking-reality',
    eyebrow: l('In town', 'In der Stadt', 'En el pueblo', 'In de stad', 'I staden'),
    title: l('Town, port and beaches: three different parking questions', 'Stadt, Hafen und Strände: drei verschiedene Parkfragen', 'Pueblo, puerto y playas: tres preguntas de aparcamiento distintas', 'Stad, haven en stranden: drie verschillende parkeervragen', 'Stan, hamnen och stränderna: tre olika parkeringsfrågor'),
    paragraphs: [
      l(
        'A space for an evening in the old town says little about a windy beach day further west. Each destination has its own access, its own rules, its own season.',
        'Ein Platz für den Abend in der Altstadt sagt wenig über einen windigen Strandtag weiter westlich. Jedes Ziel hat eigene Zufahrt, eigene Regeln, eigene Saison.',
        'Una plaza para una noche en el casco antiguo dice poco sobre un día de playa con viento más al oeste. Cada destino tiene su acceso, sus normas, su temporada.',
        'Een plek voor de avond in de oude stad zegt weinig over een winderige stranddag verder westelijk. Elk doel heeft zijn eigen toegang, eigen regels, eigen seizoen.',
        'En plats för kvällen i gamla stan säger lite om en blåsig stranddag längre västerut. Varje mål har egen infart, egna regler, egen säsong.'
      ),
      l(
        '**Tell us where you want to go, and we will tell you where to park.**',
        '**Sagt uns, wohin ihr wollt, dann sagen wir euch, wo ihr parkt.**',
        '**Decidnos adónde queréis ir y os decimos dónde aparcar.**',
        '**Zeg ons waar je heen wilt, dan zeggen we waar je parkeert.**',
        '**Säg oss vart ni vill, så säger vi var ni parkerar.**'
      )
    ]
  },
  {
    id: 'seasonal-rules',
    eyebrow: l('High season', 'Hochsaison', 'Temporada alta', 'Hoogseizoen', 'Högsäsong'),
    title: l('July and August', 'Juli und August', 'Julio y agosto', 'Juli en augustus', 'Juli och augusti'),
    paragraphs: [
      l(
        'In these two months public parking in Tarifa is hardest; we then plan every drive more carefully and appreciate our own garage a great deal.',
        'In diesen beiden Monaten ist öffentliches Parken in Tarifa am schwierigsten; wir planen dann jede Fahrt sorgfältiger und schätzen die eigene Garage sehr.',
        'En estos dos meses el aparcamiento público en Tarifa es lo más difícil; entonces planeamos cada trayecto con más cuidado y valoramos mucho el garaje propio.',
        'In deze twee maanden is openbaar parkeren in Tarifa het moeilijkst; wij plannen dan elke rit zorgvuldiger en zijn erg blij met de eigen garage.',
        'Under de här två månaderna är allmän parkering i Tarifa svårast; då planerar vi varje resa noggrannare och uppskattar det egna garaget mycket.'
      ),
      l(
        'Machines and payment methods have changed; **the sign where you park is what applies.**',
        'Automaten und Bezahlart haben sich geändert; **das Schild dort, wo ihr parkt, gilt.**',
        'Los parquímetros y la forma de pago han cambiado; **lo que rige es la señal del sitio donde aparcáis.**',
        'Automaten en betaalwijze zijn veranderd; **het bord daar waar je parkeert, geldt.**',
        'Automater och betalsätt har ändrats; **skylten där ni parkerar är det som gäller.**'
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
    checked: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')[lang],
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
