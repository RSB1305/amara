import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import { routeOgImage } from '../lib/images/routeImages';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

interface NerjaExperiencePracticalCopy {
  title: string;
  intro: string;
  items: Array<{ id: string; title: string; text: string }>;
}

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

const nerjaBeachesPageContentCopy = {
  "navLabel": {
    en: 'Beaches & coast',
    de: 'Strände & Küste',
    es: 'Playas y costa',
    nl: 'Stranden & kust',
    sv: 'Stränder & kust'
  } satisfies LocalizedText,
  "hero": {
    "kicker": {
      en: 'Nerja · Beaches',
      de: 'Nerja · Strände',
      es: 'Nerja · Playas',
      nl: 'Nerja · Stranden',
      sv: 'Nerja · Stränder'
    } satisfies LocalizedText,
    "title": {
      en: 'Beaches in Nerja',
      de: 'Strände in Nerja',
      es: 'Playas en Nerja',
      nl: 'Stranden in Nerja',
      sv: 'Stränder i Nerja'
    } satisfies LocalizedText,
    "subtitle": {
      en: 'Town coves, Burriana and the coast towards Maro',
      de: 'Stadtbuchten, Burriana und die Küste nach Maro',
      es: 'Calas urbanas, Burriana y la costa hacia Maro',
      nl: 'Stadsbaaien, Burriana en de kust naar Maro',
      sv: 'Stadsvikar, Burriana och kusten mot Maro'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
  "From our AMARA Playa, Torrecilla is around 200 metres away on foot, so a swim can fit between breakfast and the next part of your day. For the small coves by the Balcón de Europa, walk through the centre; Calahonda is reached by stairs from there.",
  "Burriana has beach restaurants for a longer day by the sea. Maro and Cantarriján are separate coastal outings, with a journey and seasonal access arrangements. The choice also depends on whether you want to pop back to the apartment or spend the whole day out."
],
      de: [
  "Von unserer AMARA Playa erreicht ihr Torrecilla nach rund 200 Metern zu Fuß. So passt ein Bad auch zwischen Frühstück und den nächsten Teil des Tages. Für die kleinen Buchten am Balcón de Europa geht ihr durchs Zentrum; Calahonda erreicht ihr dort über eine Treppe.",
  "Burriana bietet Strandrestaurants für einen längeren Tag am Meer. Maro und Cantarriján sind dagegen eigene Küstenausflüge: Anfahrt und saisonaler Zugang gehören dazu. Die Wahl hängt deshalb auch davon ab, ob ihr später kurz zur Wohnung zurückmöchtet oder den ganzen Tag unterwegs bleibt."
],
      es: [
  "Desde nuestro AMARA Playa llegáis a Torrecilla tras unos 200 metros a pie. Así, un baño cabe entre el desayuno y el siguiente plan del día. Para las pequeñas calas junto al Balcón de Europa, atravesáis el centro; a Calahonda bajáis por una escalera.",
  "Burriana tiene restaurantes en la playa para pasar más horas junto al mar. Maro y Cantarriján son excursiones costeras con desplazamiento y acceso regulado en temporada. La elección depende también de si queréis volver un rato al apartamento o pasar todo el día fuera."
],
      nl: [
  "Vanuit ons AMARA Playa lopen jullie ongeveer 200 meter naar Torrecilla. Zo past zwemmen ook tussen het ontbijt en het volgende deel van de dag. Voor de kleine baaien bij de Balcón de Europa wandelen jullie door het centrum; naar Calahonda gaat een trap omlaag.",
  "Burriana heeft strandrestaurants voor een langere dag aan zee. Maro en Cantarriján zijn aparte uitstapjes langs de kust, met een reis en seizoensgebonden toegang. De keuze hangt er dus ook van af of jullie tussendoor terug willen naar het appartement of de hele dag op pad blijven."
],
      sv: [
  "Från vår AMARA Playa går ni ungefär 200 meter till Torrecilla. Ett bad ryms därför även mellan frukosten och nästa del av dagen. Till de små vikarna vid Balcón de Europa promenerar ni genom centrum; vid Calahonda går en trappa ner till stranden.",
  "Burriana har strandrestauranger för en längre dag vid havet. Maro och Cantarriján är egna kustutflykter med en resa och säsongsregler för tillträdet. Valet beror därför också på om ni vill kunna gå tillbaka till lägenheten en stund eller vara ute hela dagen."
]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Palm trees and the Mediterranean coast in Nerja',
      de: 'Palmen und Mittelmeerküste in Nerja',
      es: 'Palmeras y costa mediterránea en Nerja',
      nl: 'Palmbomen en de Middellandse Zeekust in Nerja',
      sv: 'Palmer och Medelhavskust i Nerja'
    } satisfies LocalizedText
  },
  "overview": {
    "title": {
      en: 'Three kinds of beach day',
      de: 'Drei Arten Strandtag',
      es: 'Tres tipos de día de playa',
      nl: 'Drie soorten stranddag',
      sv: 'Tre sorters stranddag'
    } satisfies LocalizedText,
    "intro": {
      en: 'How much time you have, how much comfort you want and whether the sea is calm enough for snorkelling.',
      de: 'Wie viel Zeit ihr habt, wie viel Komfort ihr wollt und ob das Meer ruhig genug zum Schnorcheln ist.',
      es: 'Cuánto tiempo tenéis, cuánta comodidad queréis y si el mar está lo bastante tranquilo para hacer snorkel.',
      nl: 'Hoeveel tijd je hebt, hoeveel comfort je wilt en of de zee rustig genoeg is om te snorkelen.',
      sv: 'Hur mycket tid ni har, hur mycket bekvämlighet ni vill ha och om havet är lugnt nog för snorkling.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Easy from town',
          de: 'Einfach aus dem Zentrum',
          es: 'Fácil desde el centro',
          nl: 'Makkelijk vanuit de stad',
          sv: 'Enkelt från centrum'
        } satisfies LocalizedText,
        "text": {
          en: 'A central cove when the swim should belong to the Balcón, lunch or the evening walk.',
          de: 'Eine zentrale Bucht, wenn das Bad zu Balcón, Mittagessen oder Abendspaziergang gehören soll.',
          es: 'Una cala central cuando el baño va con el Balcón, la comida o el paseo de la tarde.',
          nl: 'Een centrale baai als de duik bij de Balcón, de lunch of de avondwandeling moet horen.',
          sv: 'En central vik när badet ska höra ihop med Balcón, lunchen eller kvällspromenaden.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'A complete beach day',
          de: 'Ein kompletter Strandtag',
          es: 'Un día completo de playa',
          nl: 'Een complete stranddag',
          sv: 'En hel stranddag'
        } satisfies LocalizedText,
        "text": {
          en: 'Burriana has space, water sports and restaurants on the sand; a whole day without moving.',
          de: 'Burriana hat Platz, Wassersport und Restaurants am Sand; ein ganzer Tag ohne Umziehen.',
          es: 'Burriana tiene espacio, deportes acuáticos y restaurantes en la arena; un día entero sin moverse.',
          nl: 'Burriana heeft ruimte, watersport en restaurants aan het zand; een hele dag zonder te verkassen.',
          sv: 'Burriana har plats, vattensport och restauranger på sanden; en hel dag utan att flytta sig.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'More nature',
          de: 'Mehr Natur',
          es: 'Más naturaleza',
          nl: 'Meer natuur',
          sv: 'Mer natur'
        } satisfies LocalizedText,
        "text": {
          en: 'Maro and Cantarriján: cliffs, clear water, pebbles instead of sunbeds.',
          de: 'Maro und Cantarriján: Klippen, klares Wasser, Kies statt Liegen.',
          es: 'Maro y Cantarriján: acantilados, agua clara, piedras en vez de hamacas.',
          nl: 'Maro en Cantarriján: kliffen, helder water, kiezels in plaats van ligbedden.',
          sv: 'Maro och Cantarriján: klippor, klart vatten, sten i stället för solstolar.'
        } satisfies LocalizedText
      }
    ]
  },
  "related": {
    "title": {
      en: 'Continue the day in Nerja',
      de: 'Den Tag in Nerja fortsetzen',
      es: 'Continuar el día en Nerja',
      nl: 'Ga verder met de dag in Nerja',
      sv: 'Fortsätt dagen i Nerja'
    } satisfies LocalizedText,
    "items": [
      {
        "token": 'nerja_food_authority' as const,
        "title": {
          en: 'Food in Nerja',
          de: 'Essen in Nerja',
          es: 'Comer en Nerja',
          nl: 'Eten in Nerja',
          sv: 'Mat i Nerja'
        } satisfies LocalizedText,
        "text": {
          en: 'Turn a swim into a seafood lunch, tapas round or special dinner.',
          de: 'Aus dem Badetag wird ein Seafood-Lunch, eine Tapasrunde oder ein besonderes Dinner.',
          es: 'Convertid el baño en un almuerzo de pescado, una ruta de tapas o una cena especial.',
          nl: 'Maak van het zwemmen een vislunch, tapasronde of bijzonder diner.',
          sv: 'Låt badet fortsätta med fisklunch, tapas eller en speciell middag.'
        } satisfies LocalizedText,
        "label": {
          en: 'Open the food guide',
          de: 'Food-Guide öffnen',
          es: 'Abrir la guía gastronómica',
          nl: 'Open de foodgids',
          sv: 'Öppna matguiden'
        } satisfies LocalizedText
      },
      {
        "token": 'nerja_balcon_de_europa' as const,
        "title": {
          en: 'Balcón & Old Town',
          de: 'Balcón & Altstadt',
          es: 'Balcón y casco antiguo',
          nl: 'Balcón & oude stad',
          sv: 'Balcón & gamla stan'
        } satisfies LocalizedText,
        "text": {
          en: 'From the town beach up into the lanes and to the viewpoint.',
          de: 'Vom Stadtstrand hinauf in die Gassen und zum Aussichtspunkt.',
          es: 'De la playa urbana arriba a las callejuelas y al mirador.',
          nl: 'Van het stadsstrand omhoog de steegjes in en naar het uitzichtpunt.',
          sv: 'Från stadsstranden upp i gränderna och till utsiktsplatsen.'
        } satisfies LocalizedText,
        "label": {
          en: 'Open the Balcón guide',
          de: 'Balcón-Guide öffnen',
          es: 'Abrir la guía del Balcón',
          nl: 'Open de Balcón-gids',
          sv: 'Öppna Balcón-guiden'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: "A beach stay with your own apartment in Nerja",
      de: "Euer Strandtag mit einer Wohnung in Nerja",
      es: "Vuestra estancia de playa con apartamento en Nerja",
      nl: "Een strandverblijf met een eigen appartement in Nerja",
      sv: "Strandsemester med egen lägenhet i Nerja"
    } satisfies LocalizedText,
    "lead": {
      en: "Our AMARA Playa combines a central location with a quiet courtyard setting and a private balcony with a side sea view. In the evening, you have a choice between your own kitchen and the town’s restaurants.",
      de: "Unsere AMARA Playa verbindet die zentrale Lage mit einem ruhigen Innenhof und einem privaten Balkon mit seitlichem Meerblick. Abends habt ihr die Wahl zwischen der eigenen Küche und den Restaurants im Ort.",
      es: "Nuestro AMARA Playa combina una ubicación céntrica con la tranquilidad del patio interior y un balcón privado con vistas laterales al mar. Por la noche podéis cocinar en casa o salir a los restaurantes del pueblo.",
      nl: "Ons AMARA Playa combineert een centrale ligging met rust aan de binnenplaats en een privébalkon met zijdelings zeezicht. ’s Avonds kunnen jullie zelf koken of in Nerja uit eten gaan.",
      sv: "Vår AMARA Playa kombinerar ett centralt läge med lugnet mot innergården och en privat balkong med sidoutsikt mot havet. På kvällen kan ni laga mat själva eller äta på restaurang i Nerja."
    } satisfies LocalizedText,
    "propertyLabel": {
      en: 'View AMARA Playa',
      de: 'AMARA Playa ansehen',
      es: 'Ver AMARA Playa',
      nl: 'Bekijk AMARA Playa',
      sv: 'Se AMARA Playa'
    } satisfies LocalizedText,
    "hubLabel": {
      en: 'All Nerja experiences',
      de: 'Alle Nerja-Erlebnisse',
      es: 'Todas las experiencias de Nerja',
      nl: 'Alle ervaringen in Nerja',
      sv: 'Alla upplevelser i Nerja'
    } satisfies LocalizedText
  },
  "practical": {
    "title": {
      en: "Beach days from AMARA Playa",
      de: "Strandtage ab AMARA Playa",
      es: "Días de playa desde AMARA Playa",
      nl: "Stranddagen vanuit AMARA Playa",
      sv: "Stranddagar från AMARA Playa"
    } satisfies LocalizedText,
    "intro": {
      en: "At the town beaches, the apartment remains part of your day. For Maro and Cantarriján, take what you need until you return.",
      de: "Für die Stadtstrände bleibt die Wohnung Teil des Tages. Bei Maro und Cantarriján nehmt ihr mit, was ihr bis zur Rückkehr braucht.",
      es: "En las playas urbanas, el apartamento sigue formando parte del día. Para Maro y Cantarriján, lleváis lo necesario hasta la vuelta.",
      nl: "Bij de stadsstranden blijft het appartement onderdeel van de dag. Voor Maro en Cantarriján nemen jullie mee wat nodig is tot de terugkomst.",
      sv: "Vid stadsstränderna förblir lägenheten en del av dagen. Till Maro och Cantarriján tar ni med det ni behöver tills ni kommer tillbaka."
    } satisfies LocalizedText,
    "items": [
      {
        "id": "local" as const,
        "title": {
          en: "Walk to the water",
          de: "Zu Fuß ans Wasser",
          es: "Al agua a pie",
          nl: "Te voet naar het water",
          sv: "Till fots till vattnet"
        } satisfies LocalizedText,
        "text": {
          en: "Torrecilla is close to our apartment. For the coves by the Balcón, continue through the centre; at Calahonda, stairs lead from the viewpoint down to the sand.",
          de: "Torrecilla liegt nah an unserer Wohnung. Zu den Buchten am Balcón geht ihr weiter durchs Zentrum; bei Calahonda führt die Treppe vom Aussichtspunkt hinunter zum Sand.",
          es: "Torrecilla está cerca de nuestro apartamento. Para las calas del Balcón, seguís por el centro; en Calahonda, la escalera baja desde el mirador hasta la arena.",
          nl: "Torrecilla ligt dicht bij ons appartement. Voor de baaien bij de Balcón lopen jullie verder door het centrum; bij Calahonda gaat de trap vanaf het uitzichtpunt omlaag naar het zand.",
          sv: "Torrecilla ligger nära vår lägenhet. Till vikarna vid Balcón fortsätter ni genom centrum; vid Calahonda leder trappan från utsiktsplatsen ner till sanden."
        } satisfies LocalizedText
      },
      {
        "id": "coast" as const,
        "title": {
          en: "A separate outing to the east",
          de: "Ein eigener Ausflug nach Osten",
          es: "Una excursión hacia el este",
          nl: "Een aparte tocht naar het oosten",
          sv: "En egen utflykt österut"
        } satisfies LocalizedText,
        "text": {
          en: "For Maro and Cantarriján, consider the journey and final beach access together. Seasonal restrictions can require a shuttle. Bring water, sun protection and shoes for the approach.",
          de: "Für Maro und Cantarriján plant ihr die Anfahrt und den letzten Weg zum Strand zusammen. Saisonale Zufahrtsregeln können einen Shuttle nötig machen. Wasser, Sonnenschutz und Schuhe für den Zugang gehören für diesen Tag dazu.",
          es: "Para Maro y Cantarriján, el desplazamiento y el último acceso a la playa van juntos. Las restricciones de temporada pueden requerir una lanzadera. Llevad agua, protección solar y calzado para el camino.",
          nl: "Voor Maro en Cantarriján horen de reis en het laatste toegangspad bij elkaar. Seizoensbeperkingen kunnen een shuttle nodig maken. Neem water, zonbescherming en schoenen voor het pad mee.",
          sv: "För Maro och Cantarriján hör resan och sista tillträdesvägen ihop. Säsongens regler kan kräva skyttelbuss. Ta med vatten, solskydd och skor för gångvägen."
        } satisfies LocalizedText
      },
      {
        "id": "return" as const,
        "title": {
          en: "Back to the apartment between outings",
          de: "Zwischendurch zurück zur Wohnung",
          es: "Volver un rato al apartamento",
          nl: "Tussendoor terug naar het appartement",
          sv: "Tillbaka till lägenheten mellan baden"
        } satisfies LocalizedText,
        "text": {
          en: "After swimming, you can shower, make something to eat or use the washing machine at AMARA Playa. There are ten steps before the lift; the apartment is on the fifth floor.",
          de: "Nach dem Baden könnt ihr in der AMARA Playa duschen, selbst etwas zu essen machen oder die Waschmaschine nutzen. Vor dem Aufzug liegen zehn Stufen; die Wohnung ist im fünften Stock.",
          es: "Después del baño, en AMARA Playa podéis ducharos, preparar algo de comer o poner la lavadora. Hay diez escalones antes del ascensor; el apartamento está en la quinta planta.",
          nl: "Na het zwemmen kunnen jullie bij AMARA Playa douchen, iets te eten maken of de wasmachine gebruiken. Voor de lift zijn tien treden; het appartement ligt op de vijfde verdieping.",
          sv: "Efter badet kan ni duscha, laga något att äta eller använda tvättmaskinen i AMARA Playa. Det finns tio trappsteg före hissen; lägenheten ligger på femte våningen."
        } satisfies LocalizedText
      }
    ]
  }
};

export const nerjaBeachesPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy & { practical: NerjaExperiencePracticalCopy }> = {
  en: resolveLocale(nerjaBeachesPageContentCopy, 'en'),
  de: resolveLocale(nerjaBeachesPageContentCopy, 'de'),
  es: resolveLocale(nerjaBeachesPageContentCopy, 'es'),
  nl: resolveLocale(nerjaBeachesPageContentCopy, 'nl'),
  sv: resolveLocale(nerjaBeachesPageContentCopy, 'sv')
};

const nerjaDayTripsPageContentCopy = {
  "navLabel": {
    en: 'Day trips',
    de: 'Tagesausflüge',
    es: 'Excursiones',
    nl: 'Dagtochten',
    sv: 'Dagsutflykter'
  } satisfies LocalizedText,
  "hero": {
    "kicker": {
      en: 'Nerja · Day trips',
      de: 'Nerja · Tagesausflüge',
      es: 'Nerja · Excursiones',
      nl: 'Nerja · Dagtochten',
      sv: 'Nerja · Dagsutflykter'
    } satisfies LocalizedText,
    "title": {
      en: 'Day trips from Nerja',
      de: 'Tagesausflüge ab Nerja',
      es: 'Excursiones desde Nerja',
      nl: 'Dagtochten vanuit Nerja',
      sv: 'Dagsutflykter från Nerja'
    } satisfies LocalizedText,
    "subtitle": {
      en: 'Málaga, Granada, Caminito del Rey, Ronda',
      de: 'Málaga, Granada, Caminito del Rey, Ronda',
      es: 'Málaga, Granada, Caminito del Rey, Ronda',
      nl: 'Málaga, Granada, Caminito del Rey, Ronda',
      sv: 'Málaga, Granada, Caminito del Rey, Ronda'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
  "From Nerja, you can visit Málaga, Granada, the Caminito del Rey or Ronda and return to the coast in the evening. Málaga is reachable by bus from Nerja, so a stay at our AMARA Playa can work with a hire car just for individual trips to the other destinations.",
  "Your Alhambra and Caminito entry slots set the timing for those days. Ronda is the furthest drive, at around two hours fifteen to thirty minutes each way. Once back in Nerja, allow for parking and the walk to the apartment."
],
      de: [
  "Von Nerja aus besucht ihr Málaga, Granada, den Caminito del Rey oder Ronda und kehrt abends an die Küste zurück. Für Málaga könnt ihr den Bus ab Nerja nehmen; ein Aufenthalt in unserer AMARA Playa lässt sich deshalb auch mit einzelnen Mietwagentagen für die anderen Ziele verbinden.",
  "Granada und der Caminito richten sich nach euren gebuchten Einlasszeiten. Ronda liegt mit etwa zwei Stunden und fünfzehn bis dreißig Minuten pro Strecke am weitesten entfernt. Nach der Rückfahrt gehören in Nerja noch Parken und der Weg zur Wohnung dazu."
],
      es: [
  "Desde Nerja podéis visitar Málaga, Granada, el Caminito del Rey o Ronda y regresar a la costa por la tarde. A Málaga podéis ir en autobús desde Nerja; así, una estancia en nuestro AMARA Playa puede combinarse con un coche de alquiler solo para las excursiones a los otros destinos.",
  "Las entradas con hora de la Alhambra y el Caminito marcan esos días. Ronda es el trayecto más largo: unas dos horas y cuarto a dos horas y media por sentido. Al volver a Nerja, quedan el aparcamiento y el camino hasta el apartamento."
],
      nl: [
  "Vanuit Nerja bezoeken jullie Málaga, Granada, de Caminito del Rey of Ronda en keren ’s avonds terug naar de kust. Naar Málaga gaat een bus vanuit Nerja. Een verblijf in ons AMARA Playa is daardoor te combineren met een huurauto alleen voor de uitstapjes naar de andere bestemmingen.",
  "Bij Granada en de Caminito bepalen jullie geboekte toegangstijden het dagritme. Ronda ligt het verst weg, op ongeveer twee uur en een kwartier tot tweeënhalf uur rijden per enkele reis. Terug in Nerja volgen nog het parkeren en de wandeling naar het appartement."
],
      sv: [
  "Från Nerja kan ni besöka Málaga, Granada, Caminito del Rey eller Ronda och återvända till kusten på kvällen. Till Málaga kan ni ta bussen från Nerja. En vistelse i vår AMARA Playa går därför att kombinera med hyrbil enbart för utflykterna till de andra målen.",
  "Vid Granada och Caminito styr de bokade entrétiderna dagen. Ronda ligger längst bort, ungefär två timmar och en kvart till två och en halv timme med bil i varje riktning. Tillbaka i Nerja återstår parkeringen och promenaden till lägenheten."
]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Nerja on the coast as a base for day trips through Andalusia',
      de: 'Nerja an der Küste als Basis für Tagesausflüge durch Andalusien',
      es: 'Nerja en la costa como base para excursiones por Andalucía',
      nl: 'Nerja aan de kust als uitvalsbasis voor dagtochten door Andalusië',
      sv: 'Nerja vid kusten som bas för dagsutflykter i Andalusien'
    } satisfies LocalizedText
  },
  "overview": {
    "title": {
      en: 'One destination is enough',
      de: 'Ein Ziel genügt',
      es: 'Un destino es suficiente',
      nl: 'Eén bestemming is genoeg',
      sv: 'Ett resmål räcker'
    } satisfies LocalizedText,
    "intro": {
      en: 'The best day trips have a single reason to travel and enough unplanned time for lunch, a walk and the return.',
      de: 'Die besten Tagesausflüge haben einen klaren Reisegrund und genug freie Zeit für Lunch, Spaziergang und Rückfahrt.',
      es: 'Las mejores excursiones tienen un solo motivo principal y tiempo libre para comer, caminar y regresar sin prisas.',
      nl: 'De beste dagtochten hebben één duidelijke reden om te reizen en vrije tijd voor lunch, een wandeling en de terugweg.',
      sv: 'De bästa utflykterna har ett tydligt skäl att resa och fri tid för lunch, promenad och en lugn återfärd.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Most flexible',
          de: 'Am flexibelsten',
          es: 'La más flexible',
          nl: 'Meest flexibel',
          sv: 'Mest flexibel'
        } satisfies LocalizedText,
        "text": {
          en: 'Málaga: museums, old town, market and lunch, without a fixed plan.',
          de: 'Málaga: Museen, Altstadt, Markt und Mittagessen, ohne festen Plan.',
          es: 'Málaga: museos, casco antiguo, mercado y comida, sin plan fijo.',
          nl: 'Málaga: musea, oude stad, markt en lunch, zonder vast plan.',
          sv: 'Málaga: museer, gamla stan, marknad och lunch, utan fast plan.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Book first',
          de: 'Zuerst buchen',
          es: 'Reservad primero',
          nl: 'Eerst boeken',
          sv: 'Boka först'
        } satisfies LocalizedText,
        "text": {
          en: 'Granada and the Caminito del Rey run on dated tickets; those first, the rest follows.',
          de: 'Granada und der Caminito del Rey laufen über datierte Tickets; die zuerst, der Rest ergibt sich.',
          es: 'Granada y el Caminito del Rey van con entradas de fecha fija; esas primero, el resto sale solo.',
          nl: 'Granada en de Caminito del Rey lopen op gedateerde tickets; die eerst, de rest volgt vanzelf.',
          sv: 'Granada och Caminito del Rey går på daterade biljetter; de först, resten ger sig.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Longest day',
          de: 'Der längste Tag',
          es: 'La jornada más larga',
          nl: 'Langste dag',
          sv: 'Längsta dagen'
        } satisfies LocalizedText,
        "text": {
          en: 'Ronda is the longest drive and gets the whole day.',
          de: 'Ronda ist die weiteste Fahrt und bekommt den ganzen Tag.',
          es: 'Ronda es el viaje más largo y se lleva el día entero.',
          nl: 'Ronda is de verste rit en krijgt de hele dag.',
          sv: 'Ronda är den längsta resan och får hela dagen.'
        } satisfies LocalizedText
      }
    ]
  },
  "related": {
    "title": {
      en: 'Balance travel with an easy Nerja day',
      de: 'Reisetage mit einem einfachen Nerja-Tag ausgleichen',
      es: 'Equilibrar el viaje con un día sencillo en Nerja',
      nl: 'Breng reizen in balans met een makkelijke dag in Nerja',
      sv: 'Balansera resdagen med en enkel dag i Nerja'
    } satisfies LocalizedText,
    "items": [
      {
        "token": 'nerja_beaches_authority' as const,
        "title": {
          en: 'Beaches & coast',
          de: 'Strände & Küste',
          es: 'Playas y costa',
          nl: 'Stranden & kust',
          sv: 'Stränder & kust'
        } satisfies LocalizedText,
        "text": {
          en: 'Stay close to the sea the day after.',
          de: 'Am Tag danach nah am Meer bleiben.',
          es: 'Al día siguiente, quedarse cerca del mar.',
          nl: 'De dag erna dicht bij zee blijven.',
          sv: 'Dagen efter: stanna nära havet.'
        } satisfies LocalizedText,
        "label": {
          en: 'Open the beach guide',
          de: 'Strandguide öffnen',
          es: 'Abrir la guía de playas',
          nl: 'Open de strandgids',
          sv: 'Öppna strandguiden'
        } satisfies LocalizedText
      },
      {
        "token": 'nerja_food_authority' as const,
        "title": {
          en: 'Food in Nerja',
          de: 'Essen in Nerja',
          es: 'Comer en Nerja',
          nl: 'Eten in Nerja',
          sv: 'Mat i Nerja'
        } satisfies LocalizedText,
        "text": {
          en: 'For the evening after, a simple dinner nearby.',
          de: 'Für den Abend danach ein einfaches Dinner in der Nähe.',
          es: 'Para la noche de después, una cena sencilla cerca.',
          nl: 'Voor de avond erna een eenvoudig diner in de buurt.',
          sv: 'För kvällen efter en enkel middag i närheten.'
        } satisfies LocalizedText,
        "label": {
          en: 'Open the food guide',
          de: 'Food-Guide öffnen',
          es: 'Abrir la guía gastronómica',
          nl: 'Open de foodgids',
          sv: 'Öppna matguiden'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: "Back to AMARA Playa after your day out",
      de: "Nach dem Ausflug zurück zur AMARA Playa",
      es: "Volver a AMARA Playa después de la excursión",
      nl: "Na de dagtocht terug naar AMARA Playa",
      sv: "Tillbaka till AMARA Playa efter utflykten"
    } satisfies LocalizedText,
    "lead": {
      en: "At our courtyard-facing apartment, you can cook after the trip or spend the evening on the balcony with its side sea view. The apartment has a full kitchen and a 200 × 200 cm bed.",
      de: "In unserer zum Innenhof gelegenen Wohnung könnt ihr nach dem Ausflug selbst kochen oder den Abend auf dem Balkon mit seitlichem Meerblick verbringen. Die voll ausgestattete Küche und das 200 × 200 cm große Bett gehören zur Wohnung.",
      es: "En nuestro apartamento orientado al patio interior podéis cocinar al volver o pasar la tarde en el balcón con vistas laterales al mar. Tenéis cocina completa y una cama de 200 × 200 cm.",
      nl: "In ons appartement aan de binnenplaats kunnen jullie na de uitstap zelf koken of op het balkon met zijdelings zeezicht zitten. De woning heeft een complete keuken en een bed van 200 × 200 cm.",
      sv: "I vår lägenhet mot innergården kan ni laga mat efter utflykten eller tillbringa kvällen på balkongen med sidoutsikt mot havet. Lägenheten har komplett kök och en säng på 200 × 200 cm."
    } satisfies LocalizedText,
    "propertyLabel": {
      en: 'View AMARA Playa',
      de: 'AMARA Playa ansehen',
      es: 'Ver AMARA Playa',
      nl: 'Bekijk AMARA Playa',
      sv: 'Se AMARA Playa'
    } satisfies LocalizedText,
    "hubLabel": {
      en: 'All Nerja experiences',
      de: 'Alle Nerja-Erlebnisse',
      es: 'Todas las experiencias de Nerja',
      nl: 'Alle ervaringen in Nerja',
      sv: 'Alla upplevelser i Nerja'
    } satisfies LocalizedText
  }
};

export const nerjaDayTripsPageContent: Record<AmaraLanguage, NerjaExperienceAdditionCopy> = {
  en: resolveLocale(nerjaDayTripsPageContentCopy, 'en'),
  de: resolveLocale(nerjaDayTripsPageContentCopy, 'de'),
  es: resolveLocale(nerjaDayTripsPageContentCopy, 'es'),
  nl: resolveLocale(nerjaDayTripsPageContentCopy, 'nl'),
  sv: resolveLocale(nerjaDayTripsPageContentCopy, 'sv')
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
  practical: NerjaExperiencePracticalCopy;
}

/**
 * Only the consequences of starting and ending the day in Nerja live here.
 * Destination identity, venue facts, ticket cautions and visit advice remain
 * shared with the Frigiliana guide.
 */
const nerjaDayTripOriginContextCopy = {
  "driveTimes": {
    "malaga": {
      en: 'About 45–60 minutes via the A-7, depending on traffic',
      de: 'Etwa 45–60 Minuten über die A-7, je nach Verkehr',
      es: 'Unos 45–60 minutos por la A-7, según el tráfico',
      nl: 'Ongeveer 45–60 minuten via de A-7, afhankelijk van verkeer',
      sv: 'Cirka 45–60 minuter via A-7, beroende på trafik'
    } satisfies LocalizedText,
    "granada": {
      en: 'About 1 hour 10 minutes to 1 hour 30 minutes inland, depending on traffic',
      de: 'Etwa 1 Stunde 10 Minuten bis 1 Stunde 30 Minuten ins Landesinnere',
      es: 'Entre 1 hora y 10 minutos y 1 hora y 30 minutos hacia el interior',
      nl: 'Ongeveer 1 uur en 10 minuten tot 1 uur en 30 minuten landinwaarts',
      sv: 'Cirka 1 timme och 10 minuter till 1 timme och 30 minuter inåt landet'
    } satisfies LocalizedText,
    "caminito": {
      en: 'About 1 hour 30 minutes to 1 hour 45 minutes, depending on route and traffic',
      de: 'Etwa 1 Stunde 30 Minuten bis 1 Stunde 45 Minuten, je nach Route und Verkehr',
      es: 'Entre 1 hora y 30 minutos y 1 hora y 45 minutos, según la ruta',
      nl: 'Ongeveer 1 uur en 30 minuten tot 1 uur en 45 minuten, afhankelijk van route en verkeer',
      sv: 'Cirka 1 timme och 30 minuter till 1 timme och 45 minuter, beroende på väg och trafik'
    } satisfies LocalizedText,
    "ronda": {
      en: 'About 2 hours 15–30 minutes each way, depending on route and traffic',
      de: 'Etwa 2 Stunden 15–30 Minuten pro Strecke, je nach Route und Verkehr',
      es: 'Entre 2 horas y 15 minutos y 2 horas y 30 minutos por sentido',
      nl: 'Ongeveer 2 uur en 15–30 minuten per enkele reis',
      sv: 'Cirka 2 timmar och 15–30 minuter per riktning'
    } satisfies LocalizedText
  },
  "malagaSummary": {
    en: 'Málaga is the easiest cultural day trip from Nerja: a walkable historic centre, museums, excellent food and a modern port atmosphere. It is the most flexible choice when you want a rewarding day without a rigid schedule.',
    de: 'Málaga ist der unkomplizierteste kulturelle Tagesausflug ab Nerja: eine gut begehbare Altstadt, Museen, hervorragendes Essen und moderne Hafenatmosphäre. Die Stadt eignet sich besonders, wenn ihr einen lohnenden Tag ohne starren Zeitplan möchtet.',
    es: 'Málaga es la excursión cultural más sencilla desde Nerja: un centro histórico cómodo para recorrer a pie, museos, muy buena gastronomía y un puerto contemporáneo. Es la opción más flexible si queréis un día completo sin un horario rígido.',
    nl: 'Málaga is de eenvoudigste culturele dagtocht vanuit Nerja: een beloopbaar historisch centrum, musea, uitstekend eten en een moderne havensfeer. Het is de meest flexibele keuze voor een boeiende dag zonder strak tijdschema.',
    sv: 'Málaga är den enklaste kulturella dagsutflykten från Nerja: en promenadvänlig gammal stad, museer, utmärkt mat och en modern hamnmiljö. Det är det mest flexibla valet när ni vill ha en givande dag utan ett strikt schema.'
  } satisfies LocalizedText,
  "rondaDetails": {
    en: 'Leave Nerja early, explore the old and new sides of the gorge on foot and take time for a relaxed lunch. The longer coastal return makes daylight and a generous time margin more important than adding another stop.',
    de: 'Fahrt früh in Nerja los, erkundet die alte und die neue Seite der Schlucht zu Fuß und nehmt euch Zeit für ein ruhiges Mittagessen. Wegen der längeren Rückfahrt an die Küste sind Tageslicht und ein großzügiger Puffer wichtiger als ein zusätzlicher Stopp.',
    es: 'Salid temprano de Nerja, recorred a pie los dos lados del desfiladero y reservad tiempo para una comida tranquila. El regreso más largo hacia la costa hace que la luz del día y un margen amplio importen más que añadir otra parada.',
    nl: 'Vertrek vroeg uit Nerja, verken beide kanten van de kloof te voet en neem tijd voor een ontspannen lunch. Door de langere terugrit naar de kust zijn daglicht en een ruime tijdsmarge belangrijker dan nog een extra stop.',
    sv: 'Lämna Nerja tidigt, utforska båda sidorna av ravinen till fots och ta tid för en lugn lunch. Den längre återresan till kusten gör dagsljus och god tidsmarginal viktigare än ytterligare ett stopp.'
  } satisfies LocalizedText,
  "practical": {
    "title": {
      en: "Setting out from Nerja",
      de: "Von Nerja aus unterwegs",
      es: "Salir de excursión desde Nerja",
      nl: "Vanuit Nerja op pad",
      sv: "På utflykt från Nerja"
    } satisfies LocalizedText,
    "intro": {
      en: "Málaga by bus, the other destinations by car: your transport shapes how the day starts and ends in Nerja.",
      de: "Málaga mit dem Bus, die weiteren Ziele mit dem Auto: Das Verkehrsmittel bestimmt, wie euer Ausflug in Nerja beginnt und endet.",
      es: "Málaga en autobús y los otros destinos en coche: el transporte determina cómo empieza y termina el día en Nerja.",
      nl: "Málaga per bus, de andere bestemmingen met de auto: het vervoer bepaalt hoe jullie dag in Nerja begint en eindigt.",
      sv: "Málaga med buss, de andra målen med bil: färdsättet avgör hur dagen börjar och slutar i Nerja."
    } satisfies LocalizedText,
    "items": [
      {
        "id": "bus" as const,
        "title": {
          en: "Málaga by bus from Nerja",
          de: "Málaga direkt ab Nerja",
          es: "Málaga en autobús desde Nerja",
          nl: "Met de bus vanuit Nerja naar Málaga",
          sv: "Buss från Nerja till Málaga"
        } satisfies LocalizedText,
        "text": {
          en: "You can board the bus in Nerja for a day in Málaga. That saves finding city parking; your return depends on the service back to Nerja.",
          de: "Für den Stadtbesuch könnt ihr in Nerja in den Bus steigen. So entfällt die Parkplatzsuche in Málaga; die Rückfahrt richtet sich nach der Verbindung nach Nerja.",
          es: "Podéis subir al autobús en Nerja para visitar Málaga. Así os ahorráis buscar aparcamiento en la ciudad; la vuelta depende de la conexión hacia Nerja.",
          nl: "Voor een dag Málaga stappen jullie in Nerja op de bus. Zo hoeven jullie in de stad geen parkeerplaats te zoeken; de terugreis hangt af van de verbinding naar Nerja.",
          sv: "För en dag i Málaga kan ni stiga på bussen i Nerja. Då slipper ni leta parkering i staden; hemresan följer förbindelsen tillbaka till Nerja."
        } satisfies LocalizedText
      },
      {
        "id": "car" as const,
        "title": {
          en: "A car for your day trips",
          de: "Ein Auto für die Ausflugstage",
          es: "Un coche para las excursiones",
          nl: "Een auto voor de uitstapjes",
          sv: "En bil för utflyktsdagarna"
        } satisfies LocalizedText,
        "text": {
          en: "A car gives you flexibility for Granada, Ronda and the Caminito. On your other days in central Nerja, beaches, restaurants and shops are reachable on foot.",
          de: "Granada, Ronda und der Caminito sind mit dem Auto flexibel erreichbar. In Nerjas Zentrum könnt ihr Strand, Restaurants und Geschäfte während der übrigen Urlaubstage zu Fuß verbinden.",
          es: "El coche os da flexibilidad para Granada, Ronda y el Caminito. El resto de los días, en el centro de Nerja podéis unir playas, restaurantes y tiendas a pie.",
          nl: "Met een auto hebben jullie meer vrijheid voor Granada, Ronda en de Caminito. Op de andere vakantiedagen zijn strand, restaurants en winkels in het centrum van Nerja te voet bereikbaar.",
          sv: "Med bil har ni större frihet att besöka Granada, Ronda och Caminito. Under övriga dagar når ni stränder, restauranger och butiker till fots i centrala Nerja."
        } satisfies LocalizedText
      },
      {
        "id": "entry" as const,
        "title": {
          en: "Allow time at the destination",
          de: "Zeit am Ziel einrechnen",
          es: "Tiempo para llegar a la entrada",
          nl: "Tijd bij de bestemming",
          sv: "Tid fram till entrén"
        } satisfies LocalizedText,
        "text": {
          en: "Your booked entry time at the Alhambra or Caminito is the fixed point. Add parking and access paths to the drive; at the Caminito, the shuttle journey also depends on where you leave the car.",
          de: "Die gebuchte Einlasszeit an der Alhambra oder am Caminito ist der feste Punkt. Parken und Zugangswege kommen zur Fahrt hinzu; beim Caminito hängt auch der Shuttleweg davon ab, wo ihr das Auto abstellt.",
          es: "La hora reservada en la Alhambra o el Caminito es el punto fijo. Sumad aparcamiento y acceso a pie a la conducción; en el Caminito, el recorrido en lanzadera también depende de dónde dejéis el coche.",
          nl: "Het geboekte tijdslot bij de Alhambra of Caminito is het vaste punt. Parkeren en toegangspaden komen boven op de rit; bij de Caminito hangt ook de shuttle af van waar jullie parkeren.",
          sv: "Den bokade entrétiden vid Alhambra eller Caminito är den fasta punkten. Parkering och gångvägar tillkommer utöver körningen; vid Caminito beror även skyttelbussen på var ni parkerar."
        } satisfies LocalizedText
      },
      {
        "id": "return" as const,
        "title": {
          en: "Park, then walk home",
          de: "Parken, dann zu Fuß nach Hause",
          es: "Aparcar y volver andando",
          nl: "Parkeren en naar huis lopen",
          sv: "Parkera och promenera hem"
        } satisfies LocalizedText,
        "text": {
          en: "Back in Nerja, park the car and walk to AMARA Playa. Before the lift there are ten steps, five outside and five inside; the lift takes you to the fifth floor.",
          de: "Zurück in Nerja parkt ihr das Auto und geht zur AMARA Playa. Vor dem Aufzug liegen zehn Stufen, fünf draußen und fünf im Haus; der Aufzug fährt in den fünften Stock.",
          es: "De vuelta en Nerja, aparcáis y camináis hasta AMARA Playa. Antes del ascensor hay diez escalones, cinco fuera y cinco dentro; el ascensor sube a la quinta planta.",
          nl: "Terug in Nerja parkeren jullie en lopen naar AMARA Playa. Voor de lift zijn tien treden, vijf buiten en vijf binnen; de lift gaat naar de vijfde verdieping.",
          sv: "Tillbaka i Nerja parkerar ni och går till AMARA Playa. Före hissen finns tio trappsteg, fem ute och fem inne; hissen går till femte våningen."
        } satisfies LocalizedText
      }
    ]
  }
};

export const nerjaDayTripOriginContext: Record<
  AmaraLanguage,
  NerjaDayTripOriginContext
> = {
  en: resolveLocale(nerjaDayTripOriginContextCopy, 'en'),
  de: resolveLocale(nerjaDayTripOriginContextCopy, 'de'),
  es: resolveLocale(nerjaDayTripOriginContextCopy, 'es'),
  nl: resolveLocale(nerjaDayTripOriginContextCopy, 'nl'),
  sv: resolveLocale(nerjaDayTripOriginContextCopy, 'sv')
};
