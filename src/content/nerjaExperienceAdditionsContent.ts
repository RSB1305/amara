import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

interface NerjaExperienceAdditionCopy {
  navLabel: string;
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
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
  authorSlug: 'staying-with-us'
};

export const nerjaBeachesSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-beaches-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-playa/apartment/chaparril-22.webp',
  languages: {
    en: { title: 'Beaches in Nerja: Town Coves, Burriana & Maro', description: 'Compare Nerja’s town beaches, Burriana and the natural coves near Maro by access, atmosphere, facilities and sea conditions.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Strände in Nerja: Stadtbuchten, Burriana & Maro', description: 'Vergleicht Nerjas Stadtstrände, Burriana und die Naturbuchten bei Maro nach Zugang, Atmosphäre, Ausstattung und Meeresbedingungen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Playas de Nerja: calas urbanas, Burriana y Maro', description: 'Comparad las playas urbanas de Nerja, Burriana y las calas naturales de Maro según acceso, ambiente, servicios y estado del mar.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Stranden in Nerja: stadsbaaien, Burriana & Maro', description: 'Vergelijk de stadsstranden van Nerja, Burriana en de natuurbaaien bij Maro op toegang, sfeer, voorzieningen en zeecondities.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Stränder i Nerja: stadsvikar, Burriana och Maro', description: 'Jämför Nerjas stadsstränder, Burriana och naturvikarna vid Maro utifrån tillgång, stämning, service och havsförhållanden.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaDayTripsSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-day-trips-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: { title: 'Day Trips from Nerja: Málaga, Granada & Ronda', description: 'Plan day trips from Nerja to Málaga, Granada, Caminito del Rey and Ronda with ticket advice and realistic, relaxed itineraries.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Tagesausflüge ab Nerja: Málaga, Granada & Ronda', description: 'Plant Tagesausflüge von Nerja nach Málaga, Granada, zum Caminito del Rey und nach Ronda mit Ticket-Tipps und entspannten Abläufen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Excursiones desde Nerja: Málaga, Granada y Ronda', description: 'Planificad excursiones desde Nerja a Málaga, Granada, Caminito del Rey y Ronda con consejos sobre entradas y rutas sin prisas.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Dagtochten vanuit Nerja: Málaga, Granada & Ronda', description: 'Plan dagtochten vanuit Nerja naar Málaga, Granada, Caminito del Rey en Ronda met ticketadvies en ontspannen routes.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Dagsutflykter från Nerja: Málaga, Granada & Ronda', description: 'Planera dagsutflykter från Nerja till Málaga, Granada, Caminito del Rey och Ronda med biljettråd och lugna upplägg.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaFoodSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-food-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  article,
  languages: {
    en: { title: 'Where to Eat in Nerja: Seafood, Tapas & Special Dinners', description: 'Choose where to eat in Nerja, from seafood tapas and a Burriana paella lunch to contemporary restaurants for a special evening.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Essen in Nerja: Seafood, Tapas & besondere Dinner', description: 'Findet das passende Essen in Nerja – von Seafood-Tapas und Paella am Burriana-Strand bis zum besonderen modernen Dinner.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Dónde comer en Nerja: pescado, tapas y cenas especiales', description: 'Elegid dónde comer en Nerja: tapas de pescado, paella junto a Burriana y restaurantes contemporáneos para una cena especial.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Eten in Nerja: vis, tapas & bijzondere diners', description: 'Kies waar je eet in Nerja, van vistapas en een paellalunch bij Burriana tot eigentijdse restaurants voor een bijzondere avond.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Äta i Nerja: fisk, tapas och speciella middagar', description: 'Välj var ni ska äta i Nerja, från fisktapas och paellalunch vid Burriana till moderna restauranger för en speciell kväll.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaBeachesPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Beaches & coast',
    hero: { kicker: 'Nerja · Beaches', title: 'Choose the beach that fits the day, not the ranking', paragraphs: ['Nerja places small town coves, a full-service beach and the protected coast towards Maro within one compact area.', 'The useful differences are access, shade, facilities, space and the state of the sea. This guide compares them honestly so you can choose before carrying everything down the steps.'], imageAlt: 'Palm trees and the Mediterranean coast in Nerja' },
    overview: { title: 'Start with the kind of beach day you want', intro: 'The right choice changes with the hours you have, the comfort you want and whether the sea is calm enough for snorkelling or kayaking.', items: [{ title: 'Easy from town', text: 'Choose a central cove when a swim should combine naturally with the Balcón, lunch or an evening walk.' }, { title: 'A complete beach day', text: 'Burriana brings space, water activities and restaurants together without asking you to move again.' }, { title: 'More nature', text: 'Maro and Cantarriján trade convenience for cliffs, clearer-water potential and a less urban setting.' }] },
    related: { title: 'Continue the day in Nerja', items: [{ token: 'nerja_food_authority', title: 'Food in Nerja', text: 'Turn a swim into a seafood lunch, tapas round or special dinner.', label: 'Open the food guide' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & Old Town', text: 'Pair a central beach with the streets and viewpoints above it.', label: 'Open the Balcón guide' }] },
    closing: { title: 'Stay close enough to let the sea decide the morning.', lead: 'AMARA Playa is 200 metres from Torrecilla beach, with the rest of Nerja’s coast ready for a different kind of day.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Strände & Küste',
    hero: { kicker: 'Nerja · Strände', title: 'Wählt den Strand passend zum Tag – nicht nach einer Rangliste', paragraphs: ['In Nerja liegen kleine Stadtbuchten, ein voll ausgestatteter Strand und die geschützte Küste Richtung Maro nah beieinander.', 'Entscheidend sind Zugang, Schatten, Ausstattung, Platz und der aktuelle Zustand des Meeres. Dieser Guide vergleicht sie ehrlich, bevor ihr alles die Treppen hinuntertragt.'], imageAlt: 'Palmen und Mittelmeerküste in Nerja' },
    overview: { title: 'Beginnt mit dem Strandtag, den ihr wirklich wollt', intro: 'Die richtige Wahl hängt von eurer Zeit, dem gewünschten Komfort und davon ab, ob das Meer ruhig genug zum Schnorcheln oder Kajakfahren ist.', items: [{ title: 'Einfach aus dem Zentrum', text: 'Nehmt eine zentrale Bucht, wenn sich Schwimmen unkompliziert mit Balcón, Lunch oder Abendspaziergang verbinden soll.' }, { title: 'Ein kompletter Strandtag', text: 'Burriana verbindet Platz, Wassersport und Restaurants, ohne dass ihr zwischendurch weiterfahren müsst.' }, { title: 'Mehr Natur', text: 'Maro und Cantarriján tauschen Komfort gegen Klippen, potenziell klareres Wasser und eine weniger urbane Umgebung.' }] },
    related: { title: 'Den Tag in Nerja fortsetzen', items: [{ token: 'nerja_food_authority', title: 'Essen in Nerja', text: 'Aus dem Badetag wird ein Seafood-Lunch, eine Tapasrunde oder ein besonderes Dinner.', label: 'Food-Guide öffnen' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & Altstadt', text: 'Verbindet einen zentralen Strand mit den Gassen und Aussichtspunkten darüber.', label: 'Balcón-Guide öffnen' }] },
    closing: { title: 'Wohnt nah genug, damit das Meer den Morgen bestimmen darf.', lead: 'AMARA Playa liegt 200 Meter vom Torrecilla-Strand entfernt; für einen anderen Strandtag bleibt Nerjas übrige Küste offen.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Playas y costa',
    hero: { kicker: 'Nerja · Playas', title: 'Elegid la playa que encaje con el día, no con un ranking', paragraphs: ['Nerja reúne calas urbanas, una playa con todos los servicios y la costa protegida hacia Maro en un espacio muy compacto.', 'Lo que importa es el acceso, la sombra, los servicios, el espacio y el estado del mar. Esta guía compara cada opción antes de bajar cargados por las escaleras.'], imageAlt: 'Palmeras y costa mediterránea en Nerja' },
    overview: { title: 'Empezad por el tipo de día de playa que queréis', intro: 'La elección cambia según las horas disponibles, la comodidad que buscáis y si el mar está tranquilo para nadar, hacer snorkel o salir en kayak.', items: [{ title: 'Fácil desde el centro', text: 'Elegid una cala urbana cuando queráis combinar el baño con el Balcón, un almuerzo o un paseo al atardecer.' }, { title: 'Un día completo de playa', text: 'Burriana reúne espacio, actividades acuáticas y restaurantes sin necesidad de volver a moveros.' }, { title: 'Más naturaleza', text: 'Maro y Cantarriján cambian comodidad por acantilados, agua potencialmente más clara y un entorno menos urbano.' }] },
    related: { title: 'Continuar el día en Nerja', items: [{ token: 'nerja_food_authority', title: 'Comer en Nerja', text: 'Convertid el baño en un almuerzo de pescado, una ruta de tapas o una cena especial.', label: 'Abrir la guía gastronómica' }, { token: 'nerja_balcon_de_europa', title: 'Balcón y casco antiguo', text: 'Combinad una playa céntrica con las calles y miradores que quedan encima.', label: 'Abrir la guía del Balcón' }] },
    closing: { title: 'Alojaos lo bastante cerca para que el mar decida la mañana.', lead: 'AMARA Playa está a 200 metros de Torrecilla y el resto de la costa de Nerja ofrece un día de playa diferente.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Stranden & kust',
    hero: { kicker: 'Nerja · Stranden', title: 'Kies het strand dat bij de dag past, niet bij een ranglijst', paragraphs: ['Nerja brengt kleine stadsbaaien, een compleet uitgerust strand en de beschermde kust richting Maro samen in een compact gebied.', 'Toegang, schaduw, voorzieningen, ruimte en de toestand van de zee maken het verschil. Deze gids vergelijkt ze eerlijk voordat jullie alles de trappen af dragen.'], imageAlt: 'Palmbomen en de Middellandse Zeekust in Nerja' },
    overview: { title: 'Begin met het soort stranddag dat jullie willen', intro: 'De juiste keuze hangt af van de beschikbare tijd, het gewenste comfort en de vraag of de zee rustig genoeg is om te snorkelen of kajakken.', items: [{ title: 'Makkelijk vanuit de stad', text: 'Kies een centrale baai wanneer zwemmen vanzelf moet samengaan met het Balcón, lunch of een avondwandeling.' }, { title: 'Een complete stranddag', text: 'Burriana combineert ruimte, watersport en restaurants zonder dat jullie nog eens hoeven te verplaatsen.' }, { title: 'Meer natuur', text: 'Maro en Cantarriján ruilen gemak in voor kliffen, kans op helderder water en een minder stedelijke omgeving.' }] },
    related: { title: 'Ga verder met de dag in Nerja', items: [{ token: 'nerja_food_authority', title: 'Eten in Nerja', text: 'Maak van het zwemmen een vislunch, tapasronde of bijzonder diner.', label: 'Open de foodgids' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & oude stad', text: 'Combineer een centraal strand met de straten en uitzichtpunten erboven.', label: 'Open de Balcón-gids' }] },
    closing: { title: 'Verblijf dichtbij genoeg om de zee de ochtend te laten bepalen.', lead: 'AMARA Playa ligt 200 meter van het Torrecilla-strand; de rest van Nerja’s kust biedt telkens een ander soort dag.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Stränder & kust',
    hero: { kicker: 'Nerja · Stränder', title: 'Välj stranden som passar dagen, inte topplistan', paragraphs: ['Nerja samlar små stadsvikar, en strand med full service och den skyddade kusten mot Maro inom ett kompakt område.', 'Tillgång, skugga, service, utrymme och havets tillstånd avgör. Guiden jämför alternativen ärligt innan ni bär allt nedför trapporna.'], imageAlt: 'Palmer och Medelhavskust i Nerja' },
    overview: { title: 'Börja med den sorts stranddag ni vill ha', intro: 'Rätt val beror på tiden, bekvämligheten ni söker och om havet är lugnt nog för snorkling eller kajak.', items: [{ title: 'Enkelt från centrum', text: 'Välj en central vik när badet ska kombineras naturligt med Balcón, lunch eller en kvällspromenad.' }, { title: 'En hel stranddag', text: 'Burriana samlar utrymme, vattenaktiviteter och restauranger utan att ni behöver förflytta er igen.' }, { title: 'Mer natur', text: 'Maro och Cantarriján byter bekvämlighet mot klippor, chans till klarare vatten och en mindre urban miljö.' }] },
    related: { title: 'Fortsätt dagen i Nerja', items: [{ token: 'nerja_food_authority', title: 'Mat i Nerja', text: 'Låt badet fortsätta med fisklunch, tapas eller en speciell middag.', label: 'Öppna matguiden' }, { token: 'nerja_balcon_de_europa', title: 'Balcón & gamla stan', text: 'Kombinera en central strand med gränderna och utsiktsplatserna ovanför.', label: 'Öppna Balcón-guiden' }] },
    closing: { title: 'Bo nära nog för att låta havet bestämma morgonen.', lead: 'AMARA Playa ligger 200 meter från Torrecilla-stranden och resten av Nerjas kust väntar när ni vill ha en annan dag.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};

export const nerjaDayTripsPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Day trips',
    hero: { kicker: 'Nerja · Day trips', title: 'Let one Andalusian place shape the day', paragraphs: ['Nerja is a coastal base with Málaga, Granada, Caminito del Rey and Ronda all possible as distinct days out.', 'Choose one main destination, secure any timed ticket first and leave enough margin to return to the sea without turning the day into a checklist.'], imageAlt: 'Nerja on the coast as a base for day trips through Andalusia' },
    overview: { title: 'One destination is enough', intro: 'The best day trips have a single reason to travel and enough unplanned time for lunch, a walk and the return.', items: [{ title: 'Most flexible', text: 'Málaga works for museums, the historic centre, shopping and lunch without a rigid route.' }, { title: 'Book first', text: 'Granada and Caminito del Rey depend on dated tickets; secure the main visit before shaping the rest.' }, { title: 'Longest day', text: 'Ronda rewards the drive, but it should be the whole day rather than one stop among several.' }] },
    related: { title: 'Balance travel with an easy Nerja day', items: [{ token: 'nerja_beaches_authority', title: 'Beaches & coast', text: 'Keep the following day close to the sea and choose by conditions.', label: 'Open the beach guide' }, { token: 'nerja_food_authority', title: 'Food in Nerja', text: 'Choose a simple local dinner for the evening you return.', label: 'Open the food guide' }] },
    closing: { title: 'Travel for the day, then come home to the coast.', lead: 'AMARA Playa keeps the return simple: a quiet apartment near Torrecilla after museums, monuments or a long road through Andalusia.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Tagesausflüge',
    hero: { kicker: 'Nerja · Tagesausflüge', title: 'Lasst einen andalusischen Ort den Tag bestimmen', paragraphs: ['Nerja ist eine Basis an der Küste, von der Málaga, Granada, der Caminito del Rey und Ronda jeweils als eigener Ausflugstag funktionieren.', 'Wählt ein Hauptziel, sichert zuerst zeitgebundene Tickets und lasst genug Puffer für die Rückkehr ans Meer, statt den Tag in eine Checkliste zu verwandeln.'], imageAlt: 'Nerja an der Küste als Basis für Tagesausflüge durch Andalusien' },
    overview: { title: 'Ein Ziel genügt', intro: 'Die besten Tagesausflüge haben einen klaren Reisegrund und genug freie Zeit für Lunch, Spaziergang und Rückfahrt.', items: [{ title: 'Am flexibelsten', text: 'Málaga funktioniert für Museen, Altstadt, Shopping und Lunch, ohne dass ihr einen starren Ablauf braucht.' }, { title: 'Zuerst buchen', text: 'Granada und der Caminito del Rey hängen von datierten Tickets ab; sichert den Hauptbesuch vor der restlichen Planung.' }, { title: 'Der längste Tag', text: 'Ronda belohnt die Fahrt, sollte aber den ganzen Tag bekommen und nicht nur einer von mehreren Stopps sein.' }] },
    related: { title: 'Reisetage mit einem einfachen Nerja-Tag ausgleichen', items: [{ token: 'nerja_beaches_authority', title: 'Strände & Küste', text: 'Bleibt am Folgetag nah am Meer und wählt nach den aktuellen Bedingungen.', label: 'Strandguide öffnen' }, { token: 'nerja_food_authority', title: 'Essen in Nerja', text: 'Wählt für den Rückkehrabend ein unkompliziertes lokales Dinner.', label: 'Food-Guide öffnen' }] },
    closing: { title: 'Tagsüber unterwegs, danach zurück an die Küste.', lead: 'AMARA Playa macht die Rückkehr einfach: ein ruhiges Apartment nahe Torrecilla nach Museen, Monumenten oder einer langen Andalusien-Fahrt.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Excursiones',
    hero: { kicker: 'Nerja · Excursiones', title: 'Dejad que un lugar andaluz marque el día', paragraphs: ['Nerja es una base costera desde la que Málaga, Granada, Caminito del Rey y Ronda funcionan como jornadas independientes.', 'Elegid un destino principal, asegurad primero las entradas con horario y dejad margen para volver al mar sin convertir el día en una lista de tareas.'], imageAlt: 'Nerja en la costa como base para excursiones por Andalucía' },
    overview: { title: 'Un destino es suficiente', intro: 'Las mejores excursiones tienen un solo motivo principal y tiempo libre para comer, caminar y regresar sin prisas.', items: [{ title: 'La más flexible', text: 'Málaga permite combinar museos, centro histórico, compras y almuerzo sin una ruta rígida.' }, { title: 'Reservad primero', text: 'Granada y Caminito del Rey dependen de entradas fechadas; asegurad la visita principal antes de completar el día.' }, { title: 'La jornada más larga', text: 'Ronda compensa el trayecto, pero debe ocupar el día entero y no ser una parada entre muchas.' }] },
    related: { title: 'Equilibrar el viaje con un día sencillo en Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Playas y costa', text: 'Dejad el día siguiente cerca del mar y elegid según las condiciones.', label: 'Abrir la guía de playas' }, { token: 'nerja_food_authority', title: 'Comer en Nerja', text: 'Elegid una cena local sencilla para la noche de regreso.', label: 'Abrir la guía gastronómica' }] },
    closing: { title: 'Viajad durante el día y volved a casa junto al mar.', lead: 'AMARA Playa simplifica el regreso: un apartamento tranquilo cerca de Torrecilla después de museos, monumentos o una larga carretera andaluza.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Dagtochten',
    hero: { kicker: 'Nerja · Dagtochten', title: 'Laat één Andalusische plek de dag bepalen', paragraphs: ['Nerja is een uitvalsbasis aan zee van waaruit Málaga, Granada, Caminito del Rey en Ronda elk als eigen dagtocht werken.', 'Kies één hoofdbestemming, regel tickets met een tijdslot eerst en houd genoeg marge om zonder afvinklijst terug te keren naar zee.'], imageAlt: 'Nerja aan de kust als uitvalsbasis voor dagtochten door Andalusië' },
    overview: { title: 'Eén bestemming is genoeg', intro: 'De beste dagtochten hebben één duidelijke reden om te reizen en vrije tijd voor lunch, een wandeling en de terugweg.', items: [{ title: 'Meest flexibel', text: 'Málaga werkt voor musea, het historische centrum, winkelen en lunch zonder een strak programma.' }, { title: 'Eerst boeken', text: 'Granada en Caminito del Rey hangen af van gedateerde tickets; regel het hoofdbezoek voordat jullie de rest plannen.' }, { title: 'Langste dag', text: 'Ronda beloont de rit, maar verdient de hele dag in plaats van één halte tussen vele.' }] },
    related: { title: 'Breng reizen in balans met een makkelijke dag in Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Stranden & kust', text: 'Blijf de volgende dag bij zee en kies op basis van de omstandigheden.', label: 'Open de strandgids' }, { token: 'nerja_food_authority', title: 'Eten in Nerja', text: 'Kies een eenvoudig lokaal diner voor de avond waarop jullie terugkomen.', label: 'Open de foodgids' }] },
    closing: { title: 'Overdag op pad, daarna weer thuis aan de kust.', lead: 'AMARA Playa maakt de terugkeer eenvoudig: een rustig appartement bij Torrecilla na musea, monumenten of een lange rit door Andalusië.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Dagsutflykter',
    hero: { kicker: 'Nerja · Dagsutflykter', title: 'Låt en andalusisk plats forma dagen', paragraphs: ['Nerja är en bas vid kusten där Málaga, Granada, Caminito del Rey och Ronda fungerar som var sin tydliga dagsutflykt.', 'Välj ett huvudmål, säkra tidsbundna biljetter först och lämna marginal för att återvända till havet utan att göra dagen till en checklista.'], imageAlt: 'Nerja vid kusten som bas för dagsutflykter i Andalusien' },
    overview: { title: 'Ett resmål räcker', intro: 'De bästa utflykterna har ett tydligt skäl att resa och fri tid för lunch, promenad och en lugn återfärd.', items: [{ title: 'Mest flexibel', text: 'Málaga fungerar för museer, den historiska stadskärnan, shopping och lunch utan ett strikt upplägg.' }, { title: 'Boka först', text: 'Granada och Caminito del Rey kräver daterade biljetter; säkra huvudbesöket innan ni planerar resten.' }, { title: 'Längsta dagen', text: 'Ronda belönar resan, men bör få hela dagen i stället för att bli ett stopp bland flera.' }] },
    related: { title: 'Balansera resdagen med en enkel dag i Nerja', items: [{ token: 'nerja_beaches_authority', title: 'Stränder & kust', text: 'Håll nästa dag nära havet och välj efter förhållandena.', label: 'Öppna strandguiden' }, { token: 'nerja_food_authority', title: 'Mat i Nerja', text: 'Välj en enkel lokal middag för kvällen när ni kommer tillbaka.', label: 'Öppna matguiden' }] },
    closing: { title: 'Res under dagen och kom hem till kusten.', lead: 'AMARA Playa gör återkomsten enkel: en lugn lägenhet nära Torrecilla efter museer, monument eller en lång väg genom Andalusien.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};

export const nerjaFoodPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: {
    navLabel: 'Food & restaurants',
    hero: { kicker: 'Nerja · Food', title: 'Choose the meal before you choose the restaurant', paragraphs: ['Nerja’s range runs from noisy seafood bars and a paella lunch by Burriana to contemporary dining for an evening that deserves a reservation.', 'Our public shortlist distils the much larger AMARA Guest Guide into the choices that help most before a stay: what kind of meal, which part of town and how much planning it needs.'], imageAlt: 'Nerja centre and the Mediterranean coast, home to seafood bars, tapas and special dinners' },
    overview: { title: 'Six ways to think about eating in Nerja', intro: 'The long list becomes easier once you decide whether the meal belongs to the beach, the tapas bar or the evening.', items: [{ title: 'Seafood & tapas', text: 'Choose local energy, daily fish and a busy room rather than polished service.' }, { title: 'Paella at lunch', text: 'Treat rice as part of a Burriana beach day and plan it for lunchtime, not as a late dinner.' }, { title: 'A special evening', text: 'Reserve when the table, sea view or several-course dinner is meant to be the main event.' }, { title: 'Beachfront', text: 'Match lunch to the beach you already want instead of crossing town only for a menu.' }, { title: 'Contemporary', text: 'Use modern sharing plates when you want more invention without the formality of fine dining.' }, { title: 'Local favourites', text: 'Go earlier, stay flexible and accept that bustle is part of the appeal.' }] },
    related: { title: 'Build the day around the table', items: [{ token: 'nerja_beaches_authority', title: 'Beaches & coast', text: 'Choose the swim that leads naturally into lunch.', label: 'Open the beach guide' }, { token: 'nerja_nightlife_authority', title: 'Evening life', text: 'Decide whether dinner is the finish or the beginning of the night.', label: 'Open the evening guide' }] },
    closing: { title: 'Eat well, then walk back towards the sea.', lead: 'From AMARA Playa, central Nerja, Torrecilla and the old-town dining streets stay close enough for the evening to remain easy.', propertyLabel: 'View AMARA Playa', hubLabel: 'All Nerja experiences' }
  },
  de: {
    navLabel: 'Essen & Restaurants',
    hero: { kicker: 'Nerja · Essen', title: 'Wählt zuerst das Essen – und danach das Restaurant', paragraphs: ['Nerjas Auswahl reicht von lebhaften Seafood-Bars und Paella-Lunch am Burriana-Strand bis zum modernen Dinner für einen Abend mit Reservierung.', 'Unsere öffentliche Auswahl verdichtet den deutlich größeren AMARA Guest Guide auf die Fragen vor dem Aufenthalt: Welche Art Mahlzeit, welcher Teil Nerjas und wie viel Planung?'], imageAlt: 'Nerjas Zentrum und Mittelmeerküste mit Seafood-Bars, Tapas und besonderen Restaurants' },
    overview: { title: 'Sechs Arten, Essen in Nerja zu planen', intro: 'Die lange Liste wird einfach, sobald klar ist, ob das Essen zum Strand, zur Tapasbar oder zum Abend gehört.', items: [{ title: 'Seafood & Tapas', text: 'Wählt lokale Energie, Tagesfang und einen lebhaften Raum statt formellem Service.' }, { title: 'Paella zum Lunch', text: 'Plant Reisgerichte als Teil eines Burriana-Strandtages und mittags statt spät am Abend.' }, { title: 'Ein besonderer Abend', text: 'Reserviert, wenn Tisch, Meerblick oder mehrere Gänge das eigentliche Abendprogramm sind.' }, { title: 'Direkt am Strand', text: 'Stimmt den Lunch auf den gewünschten Strand ab, statt nur für eine Speisekarte quer durch Nerja zu fahren.' }, { title: 'Modern', text: 'Nehmt kreative Sharing-Gerichte, wenn ihr Neues ohne die Förmlichkeit eines Fine Dinings sucht.' }, { title: 'Lokale Favoriten', text: 'Kommt früher, bleibt flexibel und akzeptiert, dass Trubel zum Erlebnis gehört.' }] },
    related: { title: 'Den Tag um den Tisch bauen', items: [{ token: 'nerja_beaches_authority', title: 'Strände & Küste', text: 'Wählt das Bad, das natürlich in den Lunch übergeht.', label: 'Strandguide öffnen' }, { token: 'nerja_nightlife_authority', title: 'Abendleben', text: 'Entscheidet, ob das Dinner Abschluss oder Beginn des Abends ist.', label: 'Abend-Guide öffnen' }] },
    closing: { title: 'Gut essen und danach zurück Richtung Meer laufen.', lead: 'Von AMARA Playa bleiben das Zentrum, Torrecilla und die Restaurantgassen der Altstadt nah genug für einen einfachen Abend.', propertyLabel: 'AMARA Playa ansehen', hubLabel: 'Alle Nerja-Erlebnisse' }
  },
  es: {
    navLabel: 'Gastronomía y restaurantes',
    hero: { kicker: 'Nerja · Gastronomía', title: 'Elegid primero la comida y después el restaurante', paragraphs: ['La oferta de Nerja va desde bares animados de pescado y una paella a mediodía en Burriana hasta cocina contemporánea para una noche que merece reserva.', 'Nuestra selección pública resume la guía de huéspedes de AMARA, mucho más amplia, en las decisiones útiles antes del viaje: tipo de comida, zona y planificación.'], imageAlt: 'Centro de Nerja y costa mediterránea con bares de pescado, tapas y restaurantes especiales' },
    overview: { title: 'Seis formas de pensar dónde comer en Nerja', intro: 'La lista se vuelve sencilla cuando decidís si la comida pertenece a la playa, a la barra de tapas o a la noche.', items: [{ title: 'Pescado y tapas', text: 'Buscad energía local, pescado del día y un comedor vivo en lugar de un servicio formal.' }, { title: 'Paella al mediodía', text: 'Tratad el arroz como parte de un día en Burriana y reservadlo para el almuerzo, no para una cena tardía.' }, { title: 'Una noche especial', text: 'Reservad cuando la mesa, las vistas o varios platos sean el plan principal de la velada.' }, { title: 'Frente al mar', text: 'Ajustad el almuerzo a la playa elegida en vez de cruzar Nerja solo por una carta.' }, { title: 'Cocina contemporánea', text: 'Elegid platos creativos para compartir cuando queráis novedad sin la formalidad de la alta cocina.' }, { title: 'Favoritos locales', text: 'Llegad antes, mantened flexibilidad y aceptad que el ambiente animado forma parte de la experiencia.' }] },
    related: { title: 'Construir el día alrededor de la mesa', items: [{ token: 'nerja_beaches_authority', title: 'Playas y costa', text: 'Elegid el baño que continúe de forma natural con el almuerzo.', label: 'Abrir la guía de playas' }, { token: 'nerja_nightlife_authority', title: 'Vida nocturna', text: 'Decidid si la cena termina la noche o es solo el comienzo.', label: 'Abrir la guía nocturna' }] },
    closing: { title: 'Comed bien y volved caminando hacia el mar.', lead: 'Desde AMARA Playa, el centro, Torrecilla y las calles de restaurantes del casco antiguo quedan cerca para una noche sencilla.', propertyLabel: 'Ver AMARA Playa', hubLabel: 'Todas las experiencias de Nerja' }
  },
  nl: {
    navLabel: 'Eten & restaurants',
    hero: { kicker: 'Nerja · Eten', title: 'Kies eerst de maaltijd en daarna het restaurant', paragraphs: ['Nerja loopt uiteen van levendige visbars en paellalunch bij Burriana tot eigentijds dineren voor een avond die een reservering verdient.', 'Onze openbare selectie brengt de veel uitgebreidere AMARA Guest Guide terug tot de nuttigste keuzes vóór een verblijf: soort maaltijd, wijk en benodigde planning.'], imageAlt: 'Het centrum en de Middellandse Zeekust van Nerja met visbars, tapas en bijzondere restaurants' },
    overview: { title: 'Zes manieren om over eten in Nerja na te denken', intro: 'De lange lijst wordt eenvoudiger zodra jullie beslissen of de maaltijd bij het strand, de tapasbar of de avond hoort.', items: [{ title: 'Vis & tapas', text: 'Kies lokale energie, vis van de dag en een levendige ruimte boven gepolijste bediening.' }, { title: 'Paella als lunch', text: 'Maak rijst onderdeel van een Burriana-stranddag en plan het als lunch, niet als laat diner.' }, { title: 'Een bijzondere avond', text: 'Reserveer wanneer de tafel, het zeezicht of meerdere gangen het hoofdprogramma zijn.' }, { title: 'Aan het strand', text: 'Stem de lunch af op het strand dat jullie al willen bezoeken in plaats van de stad te doorkruisen voor één menu.' }, { title: 'Eigentijds', text: 'Kies moderne deelgerechten wanneer jullie vernieuwing zoeken zonder de formaliteit van fine dining.' }, { title: 'Lokale favorieten', text: 'Kom eerder, blijf flexibel en accepteer dat drukte bij de aantrekkingskracht hoort.' }] },
    related: { title: 'Bouw de dag rond de tafel', items: [{ token: 'nerja_beaches_authority', title: 'Stranden & kust', text: 'Kies de duik die vanzelf overgaat in lunch.', label: 'Open de strandgids' }, { token: 'nerja_nightlife_authority', title: 'Avondleven', text: 'Bepaal of het diner het einde of het begin van de avond is.', label: 'Open de avondgids' }] },
    closing: { title: 'Eet goed en wandel daarna terug richting zee.', lead: 'Vanuit AMARA Playa blijven het centrum, Torrecilla en de restaurantstraten van de oude stad dichtbij genoeg voor een makkelijke avond.', propertyLabel: 'Bekijk AMARA Playa', hubLabel: 'Alle ervaringen in Nerja' }
  },
  sv: {
    navLabel: 'Mat & restauranger',
    hero: { kicker: 'Nerja · Mat', title: 'Välj måltiden innan ni väljer restaurangen', paragraphs: ['Nerjas utbud sträcker sig från livliga fiskbarer och paellalunch vid Burriana till modern matlagning för en kväll som förtjänar en bokning.', 'Vårt offentliga urval kondenserar den betydligt större AMARA-gästguiden till de viktigaste valen före vistelsen: måltid, område och hur mycket planering som krävs.'], imageAlt: 'Nerjas centrum och Medelhavskust med fiskbarer, tapas och speciella restauranger' },
    overview: { title: 'Sex sätt att tänka kring mat i Nerja', intro: 'Den långa listan blir enklare när ni bestämmer om måltiden hör till stranden, tapasbaren eller kvällen.', items: [{ title: 'Fisk & tapas', text: 'Välj lokal energi, dagens fisk och ett livligt rum framför polerad service.' }, { title: 'Paella till lunch', text: 'Låt risrätten bli en del av en stranddag vid Burriana och planera den till lunch, inte sen middag.' }, { title: 'En speciell kväll', text: 'Boka när bordet, havsutsikten eller flera rätter ska vara kvällens huvudnummer.' }, { title: 'Direkt vid stranden', text: 'Matcha lunchen med stranden ni redan vill besöka i stället för att korsa staden för en meny.' }, { title: 'Modernt', text: 'Välj kreativa rätter att dela när ni vill ha nytänkande utan fine dining-formalitet.' }, { title: 'Lokala favoriter', text: 'Kom tidigare, var flexibla och acceptera att sorlet är en del av upplevelsen.' }] },
    related: { title: 'Bygg dagen kring bordet', items: [{ token: 'nerja_beaches_authority', title: 'Stränder & kust', text: 'Välj badet som naturligt fortsätter till lunch.', label: 'Öppna strandguiden' }, { token: 'nerja_nightlife_authority', title: 'Kvällsliv', text: 'Bestäm om middagen avslutar kvällen eller bara börjar den.', label: 'Öppna kvällsguiden' }] },
    closing: { title: 'Ät gott och promenera sedan tillbaka mot havet.', lead: 'Från AMARA Playa ligger centrum, Torrecilla och gamla stans restauranggator nära nog för en enkel kväll.', propertyLabel: 'Se AMARA Playa', hubLabel: 'Alla upplevelser i Nerja' }
  }
};
