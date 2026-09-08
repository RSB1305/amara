import type { LinkToken } from '../lib/linkResolver';
import { routeOgImage } from '../lib/images/routeImages';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

interface NerjaExperienceAdditionCopy {
  navLabel: string;
  hero: {
    kicker: string;
    title: string;
    /** Optional second heading below the H1 (DR-DESIGN); set where the H1 is a keyword. */
    subtitle?: string;
    paragraphs: string[];
    imageAlt: string;
    /** Dark hero-tile summary: a short takeaway plus a mini table of contents. */
    summary?: {
      eyebrow: string;
      body: string;
      items: Array<{ id: string; label: string; value: string }>;
    };
  };
  overview: {
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  related: {
    title: string;
    items: Array<{ token: LinkToken; title: string; text: string; label: string }>;
  };
  closing: {
    title: string;
    lead: string;
    propertyLabel: string;
    hubLabel: string;
  };
}

const article = {
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

export const nerjaBeachesSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-beaches-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja.experience.beaches'),
  languages: {
    en: { title: 'Beaches in Nerja: Town Coves, Burriana & Maro', description: 'Nerja’s town beaches, Burriana and the coves near Maro: access, shade, space and facilities, with our tip for each.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Strände in Nerja: Stadtbuchten, Burriana & Maro', description: 'Nerjas Stadtstrände, Burriana und die Buchten bei Maro: Zugang, Schatten, Platz und Ausstattung, mit unserem Tipp zu jedem.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Playas de Nerja: calas urbanas, Burriana y Maro', description: 'Las playas urbanas de Nerja, Burriana y las calas de Maro: acceso, sombra, espacio y servicios, con nuestro consejo para cada una.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Stranden in Nerja: stadsbaaien, Burriana & Maro', description: 'Nerja’s stadsstranden, Burriana en de baaien bij Maro: toegang, schaduw, ruimte en voorzieningen, met onze tip bij elk.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Stränder i Nerja: stadsvikar, Burriana och Maro', description: 'Nerjas stadsstränder, Burriana och vikarna vid Maro: tillgång, skugga, plats och utrustning, med vårt tips för var och en.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaDayTripsSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-day-trips-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja.experience.day-trips'),
  languages: {
    en: { title: 'Day Trips from Nerja: Málaga, Granada & Ronda', description: 'Day trips from Nerja to Málaga, Granada, the Caminito del Rey and Ronda: driving time, tickets and the evening after by the sea.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Tagesausflüge ab Nerja: Málaga, Granada & Ronda', description: 'Tagesausflüge ab Nerja nach Málaga, Granada, zum Caminito del Rey und nach Ronda: Fahrzeit, Tickets und der Abend danach am Meer.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Excursiones desde Nerja: Málaga, Granada y Ronda', description: 'Excursiones de un día desde Nerja a Málaga, Granada, el Caminito del Rey y Ronda: tiempo de viaje, entradas y la noche de después junto al mar.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Dagtochten vanuit Nerja: Málaga, Granada & Ronda', description: 'Dagtochten vanuit Nerja naar Málaga, Granada, de Caminito del Rey en Ronda: rijtijd, tickets en de avond erna aan zee.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Dagsutflykter från Nerja: Málaga, Granada & Ronda', description: 'Dagsutflykter från Nerja till Málaga, Granada, Caminito del Rey och Ronda: körtid, biljetter och kvällen efter vid havet.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaFoodSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-food-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja.experience.food'),
  article,
  languages: {
    en: { title: 'Where to Eat in Nerja: Seafood, Tapas & Special Dinners', description: 'Eating in Nerja: seafood tapas, paella on Burriana beach and the special dinner with a reservation.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Essen in Nerja: Seafood, Tapas & besondere Dinner', description: 'Essen in Nerja: Seafood-Tapas, Paella am Burriana-Strand und das besondere Dinner mit Reservierung.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Dónde comer en Nerja: pescado, tapas y cenas especiales', description: 'Comer en Nerja: tapas de marisco, paella en la playa de Burriana y la cena especial con reserva.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Eten in Nerja: vis, tapas & bijzondere diners', description: 'Eten in Nerja: seafood-tapas, paella op het strand van Burriana en het bijzondere diner met reservering.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Äta i Nerja: fisk, tapas och speciella middagar', description: 'Att äta i Nerja: skaldjurstapas, paella på Burrianastranden och den särskilda middagen med bordsbokning.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaBeachesPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Beaches & coast',
    hero: { kicker: 'Nerja · Beaches', title: 'Beaches in Nerja', subtitle: 'Town coves, Burriana and the coast towards Maro', paragraphs: ['Nerja places small town coves, a full-service beach and the protected coast towards Maro within one compact area.', 'They differ in access, shade, space and facilities; here is which suits what.'], imageAlt: 'Palm trees and the Mediterranean coast in Nerja' },
    overview: { title: 'Three kinds of beach day', intro: 'How much time you have, how much comfort you want and whether the sea is calm enough for snorkelling.', items: [{ title: 'Easy from town', text: 'A central cove when the swim should belong to the Balcón, lunch or the evening walk.' }, { title: 'A complete beach day', text: 'Burriana has space, water sports and restaurants on the sand; a whole day without moving.' }, { title: 'More nature', text: 'Maro and Cantarriján: cliffs, clear water, pebbles instead of sunbeds.' }] },
    related: { title: 'Continue the day in Nerja', items: [{ token: 'nerja_food_authority', title: 'Food in Nerja', text: 'Turn a swim into a seafood lunch, tapas round or special dinner.', label: 'Open the food guide' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & Old Town', text: 'From the town beach up into the lanes and to the viewpoint.', label: 'Open the Balcón guide' }] },
    closing: { title: 'Stay close enough to let the sea decide the morning.', lead: 'AMARA Playa is 200 metres from Torrecilla beach, with the rest of Nerja’s coast ready for a different kind of day.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Strände & Küste',
    hero: { kicker: 'Nerja · Strände', title: 'Strände in Nerja', subtitle: 'Stadtbuchten, Burriana und die Küste nach Maro', paragraphs: ['In Nerja liegen kleine Stadtbuchten, ein voll ausgestatteter Strand und die geschützte Küste Richtung Maro nah beieinander.', 'Sie unterscheiden sich in Zugang, Schatten, Platz und Ausstattung; hier steht, welcher wofür taugt.'], imageAlt: 'Palmen und Mittelmeerküste in Nerja' },
    overview: { title: 'Drei Arten Strandtag', intro: 'Wie viel Zeit ihr habt, wie viel Komfort ihr wollt und ob das Meer ruhig genug zum Schnorcheln ist.', items: [{ title: 'Einfach aus dem Zentrum', text: 'Eine zentrale Bucht, wenn das Bad zu Balcón, Mittagessen oder Abendspaziergang gehören soll.' }, { title: 'Ein kompletter Strandtag', text: 'Burriana hat Platz, Wassersport und Restaurants am Sand; ein ganzer Tag ohne Umziehen.' }, { title: 'Mehr Natur', text: 'Maro und Cantarriján: Klippen, klares Wasser, Kies statt Liegen.' }] },
    related: { title: 'Den Tag in Nerja fortsetzen', items: [{ token: 'nerja_food_authority', title: 'Essen in Nerja', text: 'Aus dem Badetag wird ein Seafood-Lunch, eine Tapasrunde oder ein besonderes Dinner.', label: 'Food-Guide öffnen' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & Altstadt', text: 'Vom Stadtstrand hinauf in die Gassen und zum Aussichtspunkt.', label: 'Balcón-Guide öffnen' }] },
    closing: { title: 'Wohnt nah genug, damit das Meer den Morgen bestimmen darf.', lead: 'AMARA Playa liegt 200 Meter vom Torrecilla-Strand entfernt; für einen anderen Strandtag bleibt Nerjas übrige Küste offen.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Playas y costa',
    hero: { kicker: 'Nerja · Playas', title: 'Playas en Nerja', subtitle: 'Calas urbanas, Burriana y la costa hacia Maro', paragraphs: ['Nerja reúne calas urbanas, una playa con todos los servicios y la costa protegida hacia Maro en un espacio muy compacto.', 'Se diferencian en acceso, sombra, espacio y servicios; aquí está cuál sirve para qué.'], imageAlt: 'Palmeras y costa mediterránea en Nerja' },
    overview: { title: 'Tres tipos de día de playa', intro: 'Cuánto tiempo tenéis, cuánta comodidad queréis y si el mar está lo bastante tranquilo para hacer snorkel.', items: [{ title: 'Fácil desde el centro', text: 'Una cala central cuando el baño va con el Balcón, la comida o el paseo de la tarde.' }, { title: 'Un día completo de playa', text: 'Burriana tiene espacio, deportes acuáticos y restaurantes en la arena; un día entero sin moverse.' }, { title: 'Más naturaleza', text: 'Maro y Cantarriján: acantilados, agua clara, piedras en vez de hamacas.' }] },
    related: { title: 'Continuar el día en Nerja', items: [{ token: 'nerja_food_authority', title: 'Comer en Nerja', text: 'Convertid el baño en un almuerzo de pescado, una ruta de tapas o una cena especial.', label: 'Abrir la guía gastronómica' }, { token: 'nerja_balcon_de_europa', title: 'Balcón y casco antiguo', text: 'De la playa urbana arriba a las callejuelas y al mirador.', label: 'Abrir la guía del Balcón' }] },
    closing: { title: 'Alojaos lo bastante cerca para que el mar decida la mañana.', lead: 'AMARA Playa está a 200 metros de Torrecilla y el resto de la costa de Nerja ofrece un día de playa diferente.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Stranden & kust',
    hero: { kicker: 'Nerja · Stranden', title: 'Stranden in Nerja', subtitle: 'Stadsbaaien, Burriana en de kust naar Maro', paragraphs: ['Nerja brengt kleine stadsbaaien, een compleet uitgerust strand en de beschermde kust richting Maro samen in een compact gebied.', 'Ze verschillen in toegang, schaduw, ruimte en voorzieningen; hier staat welk strand waarvoor geschikt is.'], imageAlt: 'Palmbomen en de Middellandse Zeekust in Nerja' },
    overview: { title: 'Drie soorten stranddag', intro: 'Hoeveel tijd je hebt, hoeveel comfort je wilt en of de zee rustig genoeg is om te snorkelen.', items: [{ title: 'Makkelijk vanuit de stad', text: 'Een centrale baai als de duik bij de Balcón, de lunch of de avondwandeling moet horen.' }, { title: 'Een complete stranddag', text: 'Burriana heeft ruimte, watersport en restaurants aan het zand; een hele dag zonder te verkassen.' }, { title: 'Meer natuur', text: 'Maro en Cantarriján: kliffen, helder water, kiezels in plaats van ligbedden.' }] },
    related: { title: 'Ga verder met de dag in Nerja', items: [{ token: 'nerja_food_authority', title: 'Eten in Nerja', text: 'Maak van het zwemmen een vislunch, tapasronde of bijzonder diner.', label: 'Open de foodgids' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & oude stad', text: 'Van het stadsstrand omhoog de steegjes in en naar het uitzichtpunt.', label: 'Open de Balcón-gids' }] },
    closing: { title: 'Verblijf dichtbij genoeg om de zee de ochtend te laten bepalen.', lead: 'AMARA Playa ligt 200 meter van het Torrecilla-strand; de rest van Nerja’s kust biedt telkens een ander soort dag.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Stränder & kust',
    hero: { kicker: 'Nerja · Stränder', title: 'Stränder i Nerja', subtitle: 'Stadsvikar, Burriana och kusten mot Maro', paragraphs: ['Nerja samlar små stadsvikar, en strand med full service och den skyddade kusten mot Maro inom ett kompakt område.', 'De skiljer sig i tillgång, skugga, plats och utrustning; här står vilken som passar till vad.'], imageAlt: 'Palmer och Medelhavskust i Nerja' },
    overview: { title: 'Tre sorters stranddag', intro: 'Hur mycket tid ni har, hur mycket bekvämlighet ni vill ha och om havet är lugnt nog för snorkling.', items: [{ title: 'Enkelt från centrum', text: 'En central vik när badet ska höra ihop med Balcón, lunchen eller kvällspromenaden.' }, { title: 'En hel stranddag', text: 'Burriana har plats, vattensport och restauranger på sanden; en hel dag utan att flytta sig.' }, { title: 'Mer natur', text: 'Maro och Cantarriján: klippor, klart vatten, sten i stället för solstolar.' }] },
    related: { title: 'Fortsätt dagen i Nerja', items: [{ token: 'nerja_food_authority', title: 'Mat i Nerja', text: 'Låt badet fortsätta med fisklunch, tapas eller en speciell middag.', label: 'Öppna matguiden' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & gamla stan', text: 'Från stadsstranden upp i gränderna och till utsiktsplatsen.', label: 'Öppna Balcón-guiden' }] },
    closing: { title: 'Bo nära nog för att låta havet bestämma morgonen.', lead: 'AMARA Playa ligger 200 meter från Torrecilla-stranden och resten av Nerjas kust väntar när ni vill ha en annan dag.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};

export const nerjaDayTripsPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Day trips',
    hero: { kicker: 'Nerja · Day trips', title: 'Day trips from Nerja', subtitle: 'Málaga, Granada, Caminito del Rey, Ronda', paragraphs: ['Nerja is a coastal base with Málaga, Granada, Caminito del Rey and Ronda all possible as distinct days out.', 'One destination a day, the tickets for Alhambra and Caminito weeks ahead, and back to the sea in the evening.'], imageAlt: 'Nerja on the coast as a base for day trips through Andalusia' },
    overview: { title: 'One destination is enough', intro: 'The best day trips have a single reason to travel and enough unplanned time for lunch, a walk and the return.', items: [{ title: 'Most flexible', text: 'Málaga: museums, old town, market and lunch, without a fixed plan.' }, { title: 'Book first', text: 'Granada and the Caminito del Rey run on dated tickets; those first, the rest follows.' }, { title: 'Longest day', text: 'Ronda is the longest drive and gets the whole day.' }] },
    related: { title: 'Balance travel with an easy Nerja day', items: [{ token: 'nerja_beaches_authority', title: 'Beaches & coast', text: 'Stay close to the sea the day after.', label: 'Open the beach guide' }, { token: 'nerja_food_authority', title: 'Food in Nerja', text: 'For the evening after, a simple dinner nearby.', label: 'Open the food guide' }] },
    closing: { title: 'Travel for the day, then come home to the coast.', lead: 'AMARA Playa keeps the return simple: a quiet apartment near Torrecilla after museums, monuments or a long road through Andalusia.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Tagesausflüge',
    hero: { kicker: 'Nerja · Tagesausflüge', title: 'Tagesausflüge ab Nerja', subtitle: 'Málaga, Granada, Caminito del Rey, Ronda', paragraphs: ['Nerja ist eine Basis an der Küste, von der Málaga, Granada, der Caminito del Rey und Ronda jeweils als eigener Ausflugstag funktionieren.', 'Ein Ziel pro Tag, die Tickets für Alhambra und Caminito Wochen vorher, und abends zurück ans Meer.'], imageAlt: 'Nerja an der Küste als Basis für Tagesausflüge durch Andalusien' },
    overview: { title: 'Ein Ziel genügt', intro: 'Die besten Tagesausflüge haben einen klaren Reisegrund und genug freie Zeit für Lunch, Spaziergang und Rückfahrt.', items: [{ title: 'Am flexibelsten', text: 'Málaga: Museen, Altstadt, Markt und Mittagessen, ohne festen Plan.' }, { title: 'Zuerst buchen', text: 'Granada und der Caminito del Rey laufen über datierte Tickets; die zuerst, der Rest ergibt sich.' }, { title: 'Der längste Tag', text: 'Ronda ist die weiteste Fahrt und bekommt den ganzen Tag.' }] },
    related: { title: 'Reisetage mit einem einfachen Nerja-Tag ausgleichen', items: [{ token: 'nerja_beaches_authority', title: 'Strände & Küste', text: 'Am Tag danach nah am Meer bleiben.', label: 'Strandguide öffnen' }, { token: 'nerja_food_authority', title: 'Essen in Nerja', text: 'Für den Abend danach ein einfaches Dinner in der Nähe.', label: 'Food-Guide öffnen' }] },
    closing: { title: 'Tagsüber unterwegs, danach zurück an die Küste.', lead: 'AMARA Playa macht die Rückkehr einfach: ein ruhiges Apartment nahe Torrecilla nach Museen, Monumenten oder einer langen Andalusien-Fahrt.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Excursiones',
    hero: { kicker: 'Nerja · Excursiones', title: 'Excursiones desde Nerja', subtitle: 'Málaga, Granada, Caminito del Rey, Ronda', paragraphs: ['Nerja es una base costera desde la que Málaga, Granada, Caminito del Rey y Ronda funcionan como jornadas independientes.', 'Un destino por día, las entradas de la Alhambra y el Caminito semanas antes, y por la noche de vuelta al mar.'], imageAlt: 'Nerja en la costa como base para excursiones por Andalucía' },
    overview: { title: 'Un destino es suficiente', intro: 'Las mejores excursiones tienen un solo motivo principal y tiempo libre para comer, caminar y regresar sin prisas.', items: [{ title: 'La más flexible', text: 'Málaga: museos, casco antiguo, mercado y comida, sin plan fijo.' }, { title: 'Reservad primero', text: 'Granada y el Caminito del Rey van con entradas de fecha fija; esas primero, el resto sale solo.' }, { title: 'La jornada más larga', text: 'Ronda es el viaje más largo y se lleva el día entero.' }] },
    related: { title: 'Equilibrar el viaje con un día sencillo en Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Playas y costa', text: 'Al día siguiente, quedarse cerca del mar.', label: 'Abrir la guía de playas' }, { token: 'nerja_food_authority', title: 'Comer en Nerja', text: 'Para la noche de después, una cena sencilla cerca.', label: 'Abrir la guía gastronómica' }] },
    closing: { title: 'Viajad durante el día y volved a casa junto al mar.', lead: 'AMARA Playa simplifica el regreso: un apartamento tranquilo cerca de Torrecilla después de museos, monumentos o una larga carretera andaluza.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Dagtochten',
    hero: { kicker: 'Nerja · Dagtochten', title: 'Dagtochten vanuit Nerja', subtitle: 'Málaga, Granada, Caminito del Rey, Ronda', paragraphs: ['Nerja is een uitvalsbasis aan zee van waaruit Málaga, Granada, Caminito del Rey en Ronda elk als eigen dagtocht werken.', 'Eén bestemming per dag, de tickets voor Alhambra en Caminito weken vooraf, en ’s avonds terug naar zee.'], imageAlt: 'Nerja aan de kust als uitvalsbasis voor dagtochten door Andalusië' },
    overview: { title: 'Eén bestemming is genoeg', intro: 'De beste dagtochten hebben één duidelijke reden om te reizen en vrije tijd voor lunch, een wandeling en de terugweg.', items: [{ title: 'Meest flexibel', text: 'Málaga: musea, oude stad, markt en lunch, zonder vast plan.' }, { title: 'Eerst boeken', text: 'Granada en de Caminito del Rey lopen op gedateerde tickets; die eerst, de rest volgt vanzelf.' }, { title: 'Langste dag', text: 'Ronda is de verste rit en krijgt de hele dag.' }] },
    related: { title: 'Breng reizen in balans met een makkelijke dag in Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Stranden & kust', text: 'De dag erna dicht bij zee blijven.', label: 'Open de strandgids' }, { token: 'nerja_food_authority', title: 'Eten in Nerja', text: 'Voor de avond erna een eenvoudig diner in de buurt.', label: 'Open de foodgids' }] },
    closing: { title: 'Overdag op pad, daarna weer thuis aan de kust.', lead: 'AMARA Playa maakt de terugkeer eenvoudig: een rustig appartement bij Torrecilla na musea, monumenten of een lange rit door Andalusië.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Dagsutflykter',
    hero: { kicker: 'Nerja · Dagsutflykter', title: 'Dagsutflykter från Nerja', subtitle: 'Málaga, Granada, Caminito del Rey, Ronda', paragraphs: ['Nerja är en bas vid kusten där Málaga, Granada, Caminito del Rey och Ronda fungerar som var sin tydliga dagsutflykt.', 'Ett mål per dag, biljetterna till Alhambra och Caminito veckor i förväg, och på kvällen tillbaka till havet.'], imageAlt: 'Nerja vid kusten som bas för dagsutflykter i Andalusien' },
    overview: { title: 'Ett resmål räcker', intro: 'De bästa utflykterna har ett tydligt skäl att resa och fri tid för lunch, promenad och en lugn återfärd.', items: [{ title: 'Mest flexibel', text: 'Málaga: museer, gamla stan, marknad och lunch, utan fast plan.' }, { title: 'Boka först', text: 'Granada och Caminito del Rey går på daterade biljetter; de först, resten ger sig.' }, { title: 'Längsta dagen', text: 'Ronda är den längsta resan och får hela dagen.' }] },
    related: { title: 'Balansera resdagen med en enkel dag i Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Stränder & kust', text: 'Dagen efter: stanna nära havet.', label: 'Öppna strandguiden' }, { token: 'nerja_food_authority', title: 'Mat i Nerja', text: 'För kvällen efter en enkel middag i närheten.', label: 'Öppna matguiden' }] },
    closing: { title: 'Res under dagen och kom hem till kusten.', lead: 'AMARA Playa gör återkomsten enkel: en lugn lägenhet nära Torrecilla efter museer, monument eller en lång väg genom Andalusien.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};

export const nerjaFoodPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Food & restaurants',
    hero: { kicker: 'Nerja · Food', title: 'Food in Nerja', subtitle: 'Seafood bars, paella on the beach, dinner with a reservation', paragraphs: ['Nerja’s range runs from noisy seafood bars and a paella lunch by Burriana to contemporary dining for an evening that deserves a reservation.', 'Here is where we eat in Nerja; the phone numbers and a few more addresses are in the guest guide.'], imageAlt: 'Nerja centre and the Mediterranean coast, home to seafood bars, tapas and special dinners', summary: { eyebrow: 'On this page', body: 'Where to eat well in Nerja: seafood bars, paella lunch at Burriana, dinner with a reservation.', items: [ { id: 'tapas', label: 'Tapas & fish', value: 'Lively bars, fresh seafood' }, { id: 'dinner', label: 'Special dinner', value: 'Modern kitchens, sea-view tables' }, { id: 'burriana', label: 'Burriana', value: 'Paella lunch by the beach' }, { id: 'reviewed', label: 'Reviewed', value: 'August 2026' } ] } },
    overview: { title: 'Six ways to eat', intro: 'To the beach, into the tapas bar or for the long evening: Nerja has a place for every appetite.', items: [{ title: 'Seafood & tapas', text: 'Catch of the day, loud bar, paper napkins.' }, { title: 'Paella at lunch', text: 'Paella belongs to the beach day at Burriana, at midday, with sand on your feet.' }, { title: 'A special evening', text: 'A table with a sea view and several courses: for that you book a few days ahead.' }, { title: 'Beachfront', text: 'The chiringuito on the beach where you are lying anyway.' }, { title: 'Contemporary', text: 'Creative plates to share, no tie required.' }, { title: 'Local favourites', text: 'The places where the neighbours sit: come early, the bustle is part of it.' }] },
    related: { title: 'Build the day around the table', items: [{ token: 'nerja_beaches_authority', title: 'Beaches & coast', text: 'Swim first, then eat, no detour.', label: 'Open the beach guide' }, { token: 'nerja_nightlife_authority', title: 'Evening life', text: 'After dinner: sundowner at the Balcón or bars on Plaza Tutti Frutti.', label: 'Open the evening guide' }] },
    closing: { title: 'Eat well, then walk back towards the sea.', lead: 'From AMARA Playa, central Nerja, Torrecilla and the old-town dining streets stay close enough for the evening to remain easy.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Essen & Restaurants',
    hero: { kicker: 'Nerja · Essen', title: 'Essen in Nerja', subtitle: 'Seafood-Bars, Paella am Strand, Dinner mit Reservierung', paragraphs: ['Nerjas Auswahl reicht von lebhaften Seafood-Bars und Paella-Lunch am Burriana-Strand bis zum modernen Dinner für einen Abend mit Reservierung.', 'Hier steht, wo wir in Nerja essen; die Telefonnummern und ein paar Adressen mehr stehen im Gästeguide.'], imageAlt: 'Nerjas Zentrum und Mittelmeerküste mit Seafood-Bars, Tapas und besonderen Restaurants', summary: { eyebrow: 'Auf dieser Seite', body: 'Wo man in Nerja gut isst: Seafood-Bars, Paella-Lunch am Burriana, Dinner mit Reservierung.', items: [ { id: 'tapas', label: 'Tapas & Fisch', value: 'Lebhafte Bars, frischer Fisch' }, { id: 'dinner', label: 'Besonderes Dinner', value: 'Moderne Küche, Tische mit Meerblick' }, { id: 'burriana', label: 'Burriana', value: 'Paella mittags am Strand' }, { id: 'reviewed', label: 'Stand', value: 'August 2026' } ] } },
    overview: { title: 'Sechs Arten zu essen', intro: 'Zum Strand, in die Tapasbar oder zum langen Abend: Nerja hat für jeden Hunger einen Ort.', items: [{ title: 'Seafood & Tapas', text: 'Tagesfang, laute Bar, Papierservietten.' }, { title: 'Paella zum Lunch', text: 'Paella gehört zum Strandtag am Burriana, mittags, mit Sand an den Füßen.' }, { title: 'Ein besonderer Abend', text: 'Ein Tisch mit Meerblick und mehrere Gänge: dafür reserviert ihr ein paar Tage vorher.' }, { title: 'Direkt am Strand', text: 'Der Chiringuito am Strand, an dem ihr sowieso liegt.' }, { title: 'Modern', text: 'Kreative Teller zum Teilen, ohne Krawatte.' }, { title: 'Lokale Favoriten', text: 'Die Lokale, in denen die Nachbarn sitzen: früh kommen, der Trubel gehört dazu.' }] },
    related: { title: 'Den Tag um den Tisch bauen', items: [{ token: 'nerja_beaches_authority', title: 'Strände & Küste', text: 'Erst schwimmen, dann essen, ohne Umweg.', label: 'Strandguide öffnen' }, { token: 'nerja_nightlife_authority', title: 'Abendleben', text: 'Nach dem Dinner: Sundowner am Balcón oder Bars an der Plaza Tutti Frutti.', label: 'Abend-Guide öffnen' }] },
    closing: { title: 'Gut essen und danach zurück Richtung Meer laufen.', lead: 'Von AMARA Playa bleiben das Zentrum, Torrecilla und die Restaurantgassen der Altstadt nah genug für einen einfachen Abend.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Gastronomía y restaurantes',
    hero: { kicker: 'Nerja · Gastronomía', title: 'Comer en Nerja', subtitle: 'Bares de marisco, paella en la playa, cena con reserva', paragraphs: ['La oferta de Nerja va desde bares animados de pescado y una paella a mediodía en Burriana hasta cocina contemporánea para una noche que merece reserva.', 'Aquí está dónde comemos nosotros en Nerja; los teléfonos y algunas direcciones más están en la guía del huésped.'], imageAlt: 'Centro de Nerja y costa mediterránea con bares de pescado, tapas y restaurantes especiales', summary: { eyebrow: 'En esta página', body: 'Dónde se come bien en Nerja: bares de marisco, paella al mediodía en Burriana, cena con reserva.', items: [ { id: 'tapas', label: 'Tapas y pescado', value: 'Bares animados, pescado fresco' }, { id: 'dinner', label: 'Cena especial', value: 'Cocina moderna, mesas con vistas al mar' }, { id: 'burriana', label: 'Burriana', value: 'Paella a mediodía en la playa' }, { id: 'reviewed', label: 'Revisado', value: 'Agosto 2026' } ] } },
    overview: { title: 'Seis maneras de comer', intro: 'A la playa, al bar de tapas o para la noche larga: Nerja tiene un sitio para cada hambre.', items: [{ title: 'Pescado y tapas', text: 'Pescado del día, bar ruidoso, servilletas de papel.' }, { title: 'Paella al mediodía', text: 'La paella va con el día de playa en Burriana, a mediodía, con arena en los pies.' }, { title: 'Una noche especial', text: 'Una mesa con vistas al mar y varios platos: para eso reserváis unos días antes.' }, { title: 'Frente al mar', text: 'El chiringuito de la playa en la que ya estáis tumbados.' }, { title: 'Cocina contemporánea', text: 'Platos creativos para compartir, sin corbata.' }, { title: 'Favoritos locales', text: 'Los locales donde se sientan los vecinos: llegar pronto, el bullicio forma parte.' }] },
    related: { title: 'Construir el día alrededor de la mesa', items: [{ token: 'nerja_beaches_authority', title: 'Playas y costa', text: 'Primero nadar, luego comer, sin rodeos.', label: 'Abrir la guía de playas' }, { token: 'nerja_nightlife_authority', title: 'Vida nocturna', text: 'Después de cenar: copa al atardecer en el Balcón o bares en la Plaza Tutti Frutti.', label: 'Abrir la guía nocturna' }] },
    closing: { title: 'Comed bien y volved caminando hacia el mar.', lead: 'Desde AMARA Playa, el centro, Torrecilla y las calles de restaurantes del casco antiguo quedan cerca para una noche sencilla.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Eten & restaurants',
    hero: { kicker: 'Nerja · Eten', title: 'Eten in Nerja', subtitle: 'Seafoodbars, paella op het strand, diner met reservering', paragraphs: ['Nerja loopt uiteen van levendige visbars en paellalunch bij Burriana tot eigentijds dineren voor een avond die een reservering verdient.', 'Hier staat waar wij in Nerja eten; de telefoonnummers en nog een paar adressen staan in de gastengids.'], imageAlt: 'Het centrum en de Middellandse Zeekust van Nerja met visbars, tapas en bijzondere restaurants', summary: { eyebrow: 'Op deze pagina', body: 'Waar je in Nerja goed eet: seafoodbars, paella-lunch aan Burriana, diner met reservering.', items: [ { id: 'tapas', label: 'Tapas & vis', value: 'Levendige bars, verse vis' }, { id: 'dinner', label: 'Bijzonder diner', value: 'Moderne keukens, tafels met zeezicht' }, { id: 'burriana', label: 'Burriana', value: 'Paellalunch aan het strand' }, { id: 'reviewed', label: 'Bijgewerkt', value: 'Augustus 2026' } ] } },
    overview: { title: 'Zes manieren om te eten', intro: 'Naar het strand, de tapasbar in of voor de lange avond: Nerja heeft voor elke honger een plek.', items: [{ title: 'Vis & tapas', text: 'Dagvangst, luide bar, papieren servetten.' }, { title: 'Paella als lunch', text: 'Paella hoort bij de stranddag aan Burriana, ’s middags, met zand aan je voeten.' }, { title: 'Een bijzondere avond', text: 'Een tafel met zeezicht en meerdere gangen: daarvoor reserveer je een paar dagen vooraf.' }, { title: 'Aan het strand', text: 'De chiringuito op het strand waar je toch al ligt.' }, { title: 'Eigentijds', text: 'Creatieve borden om te delen, zonder stropdas.' }, { title: 'Lokale favorieten', text: 'De zaken waar de buren zitten: vroeg komen, de drukte hoort erbij.' }] },
    related: { title: 'Bouw de dag rond de tafel', items: [{ token: 'nerja_beaches_authority', title: 'Stranden & kust', text: 'Eerst zwemmen, dan eten, zonder omweg.', label: 'Open de strandgids' }, { token: 'nerja_nightlife_authority', title: 'Avondleven', text: 'Na het diner: sundowner aan de Balcón of bars op Plaza Tutti Frutti.', label: 'Open de avondgids' }] },
    closing: { title: 'Eet goed en wandel daarna terug richting zee.', lead: 'Vanuit AMARA Playa blijven het centrum, Torrecilla en de restaurantstraten van de oude stad dichtbij genoeg voor een makkelijke avond.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Mat & restauranger',
    hero: { kicker: 'Nerja · Mat', title: 'Mat i Nerja', subtitle: 'Skaldjursbarer, paella på stranden, middag med bordsbokning', paragraphs: ['Nerjas utbud sträcker sig från livliga fiskbarer och paellalunch vid Burriana till modern matlagning för en kväll som förtjänar en bokning.', 'Här står var vi äter i Nerja; telefonnumren och några adresser till finns i gästguiden.'], imageAlt: 'Nerjas centrum och Medelhavskust med fiskbarer, tapas och speciella restauranger', summary: { eyebrow: 'På den här sidan', body: 'Var man äter gott i Nerja: skaldjursbarer, paellalunch på Burriana, middag med bordsbokning.', items: [ { id: 'tapas', label: 'Tapas & fisk', value: 'Livliga barer, färsk fisk' }, { id: 'dinner', label: 'Särskild middag', value: 'Moderna kök, bord med havsutsikt' }, { id: 'burriana', label: 'Burriana', value: 'Paellalunch vid stranden' }, { id: 'reviewed', label: 'Uppdaterad', value: 'Augusti 2026' } ] } },
    overview: { title: 'Sex sätt att äta', intro: 'Till stranden, in på tapasbaren eller för den långa kvällen: Nerja har ett ställe för varje hunger.', items: [{ title: 'Fisk & tapas', text: 'Dagens fångst, högljudd bar, pappersservetter.' }, { title: 'Paella till lunch', text: 'Paella hör till stranddagen på Burriana, mitt på dagen, med sand på fötterna.' }, { title: 'En speciell kväll', text: 'Ett bord med havsutsikt och flera rätter: det bokar ni några dagar i förväg.' }, { title: 'Direkt vid stranden', text: 'Chiringuiton på stranden där ni ändå ligger.' }, { title: 'Modernt', text: 'Kreativa rätter att dela, utan slips.' }, { title: 'Lokala favoriter', text: 'Ställena där grannarna sitter: kom tidigt, stimmet hör till.' }] },
    related: { title: 'Bygg dagen kring bordet', items: [{ token: 'nerja_beaches_authority', title: 'Stränder & kust', text: 'Först simma, sedan äta, utan omväg.', label: 'Öppna strandguiden' }, { token: 'nerja_nightlife_authority', title: 'Kvällsliv', text: 'Efter middagen: sundowner vid Balcón eller barer på Plaza Tutti Frutti.', label: 'Öppna kvällsguiden' }] },
    closing: { title: 'Ät gott och promenera sedan tillbaka mot havet.', lead: 'Från AMARA Playa ligger centrum, Torrecilla och gamla stans restauranggator nära nog för en enkel kväll.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};

type DayTripDestinationId = 'malaga' | 'granada' | 'caminito' | 'ronda';

interface NerjaDayTripOriginContext {
  driveTimes: Record<DayTripDestinationId, string>;
  malagaSummary: string;
  rondaDetails: string;
  returnText: string;
}

/**
 * Only the consequences of starting and ending the day in Nerja live here.
 * Destination identity, venue facts, ticket cautions and visit advice remain
 * shared with the Frigiliana guide.
 */
export const nerjaDayTripOriginContext: Record<
  AmaraLanguage,
  NerjaDayTripOriginContext
> = {
  en: {
    driveTimes: {
      malaga: 'About 45–60 minutes via the A-7, depending on traffic',
      granada: 'About 1 hour 10 minutes to 1 hour 30 minutes inland, depending on traffic',
      caminito: 'About 1 hour 30 minutes to 1 hour 45 minutes, depending on route and traffic',
      ronda: 'About 2 hours 15–30 minutes each way, depending on route and traffic'
    },
    malagaSummary:
      'Málaga is the easiest cultural day trip from Nerja: a walkable historic centre, museums, excellent food and a modern port atmosphere. It is the most flexible choice when you want a rewarding day without a rigid schedule.',
    rondaDetails:
      'Leave Nerja early, explore the old and new sides of the gorge on foot and take time for a relaxed lunch. The longer coastal return makes daylight and a generous time margin more important than adding another stop.',
    returnText:
      'Leave margin for traffic, parking and an unhurried meal. Returning to Nerja before late evening keeps the arrival at the coast easy after a long day inland.'
  },
  de: {
    driveTimes: {
      malaga: 'Etwa 45–60 Minuten über die A-7, je nach Verkehr',
      granada: 'Etwa 1 Stunde 10 Minuten bis 1 Stunde 30 Minuten ins Landesinnere',
      caminito: 'Etwa 1 Stunde 30 Minuten bis 1 Stunde 45 Minuten, je nach Route und Verkehr',
      ronda: 'Etwa 2 Stunden 15–30 Minuten pro Strecke, je nach Route und Verkehr'
    },
    malagaSummary:
      'Málaga ist der unkomplizierteste kulturelle Tagesausflug ab Nerja: eine gut begehbare Altstadt, Museen, hervorragendes Essen und moderne Hafenatmosphäre. Die Stadt eignet sich besonders, wenn ihr einen lohnenden Tag ohne starren Zeitplan möchtet.',
    rondaDetails:
      'Fahrt früh in Nerja los, erkundet die alte und die neue Seite der Schlucht zu Fuß und nehmt euch Zeit für ein ruhiges Mittagessen. Wegen der längeren Rückfahrt an die Küste sind Tageslicht und ein großzügiger Puffer wichtiger als ein zusätzlicher Stopp.',
    returnText:
      'Lasst Puffer für Verkehr, Parkplatzsuche und ein entspanntes Essen. Wenn ihr vor dem späten Abend nach Nerja zurückkehrt, bleibt auch die Ankunft an der Küste nach einem langen Tag im Landesinneren einfach.'
  },
  es: {
    driveTimes: {
      malaga: 'Unos 45–60 minutos por la A-7, según el tráfico',
      granada: 'Entre 1 hora y 10 minutos y 1 hora y 30 minutos hacia el interior',
      caminito: 'Entre 1 hora y 30 minutos y 1 hora y 45 minutos, según la ruta',
      ronda: 'Entre 2 horas y 15 minutos y 2 horas y 30 minutos por sentido'
    },
    malagaSummary:
      'Málaga es la excursión cultural más sencilla desde Nerja: un centro histórico cómodo para recorrer a pie, museos, muy buena gastronomía y un puerto contemporáneo. Es la opción más flexible si queréis un día completo sin un horario rígido.',
    rondaDetails:
      'Salid temprano de Nerja, recorred a pie los dos lados del desfiladero y reservad tiempo para una comida tranquila. El regreso más largo hacia la costa hace que la luz del día y un margen amplio importen más que añadir otra parada.',
    returnText:
      'Dejad margen para el tráfico, el aparcamiento y una comida tranquila. Volver a Nerja antes de que sea demasiado tarde facilita la llegada a la costa después de una jornada larga en el interior.'
  },
  nl: {
    driveTimes: {
      malaga: 'Ongeveer 45–60 minuten via de A-7, afhankelijk van verkeer',
      granada: 'Ongeveer 1 uur en 10 minuten tot 1 uur en 30 minuten landinwaarts',
      caminito: 'Ongeveer 1 uur en 30 minuten tot 1 uur en 45 minuten, afhankelijk van route en verkeer',
      ronda: 'Ongeveer 2 uur en 15–30 minuten per enkele reis'
    },
    malagaSummary:
      'Málaga is de eenvoudigste culturele dagtocht vanuit Nerja: een beloopbaar historisch centrum, musea, uitstekend eten en een moderne havensfeer. Het is de meest flexibele keuze voor een boeiende dag zonder strak tijdschema.',
    rondaDetails:
      'Vertrek vroeg uit Nerja, verken beide kanten van de kloof te voet en neem tijd voor een ontspannen lunch. Door de langere terugrit naar de kust zijn daglicht en een ruime tijdsmarge belangrijker dan nog een extra stop.',
    returnText:
      'Houd marge voor verkeer, parkeren en een ontspannen maaltijd. Als jullie vóór de late avond in Nerja terug zijn, blijft de aankomst aan zee eenvoudig na een lange dag landinwaarts.'
  },
  sv: {
    driveTimes: {
      malaga: 'Cirka 45–60 minuter via A-7, beroende på trafik',
      granada: 'Cirka 1 timme och 10 minuter till 1 timme och 30 minuter inåt landet',
      caminito: 'Cirka 1 timme och 30 minuter till 1 timme och 45 minuter, beroende på väg och trafik',
      ronda: 'Cirka 2 timmar och 15–30 minuter per riktning'
    },
    malagaSummary:
      'Málaga är den enklaste kulturella dagsutflykten från Nerja: en promenadvänlig gammal stad, museer, utmärkt mat och en modern hamnmiljö. Det är det mest flexibla valet när ni vill ha en givande dag utan ett strikt schema.',
    rondaDetails:
      'Lämna Nerja tidigt, utforska båda sidorna av ravinen till fots och ta tid för en lugn lunch. Den längre återresan till kusten gör dagsljus och god tidsmarginal viktigare än ytterligare ett stopp.',
    returnText:
      'Lämna marginal för trafik, parkering och en avspänd måltid. Om ni återvänder till Nerja före sen kväll blir ankomsten till kusten enkel även efter en lång dag inåt landet.'
  }
};
