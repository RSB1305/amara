import type { LocalizedText } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export type NerjaExperienceThemeId =
  | 'beaches'
  | 'dayTrips'
  | 'balcon'
  | 'caves'
  | 'veranoAzul'
  | 'food'
  | 'nightlife';





export const nerjaExperienceHubSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-experience-hub-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Things to Do in Nerja: Coast, Caves & Evenings',
      description: 'Explore Nerja through its beaches, food, day trips, old town, caves and evening life with AMARA’s destination-specific guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja erleben: Küste, Höhlen & Abende',
      description: 'Entdeckt Nerja mit Stränden, Restaurants, Tagesausflügen, Altstadt, Höhlen und Abendleben im eigenen AMARA Erlebnis-Guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Nerja: costa, cuevas y noches',
      description: 'Descubrid Nerja a través de sus playas, gastronomía, excursiones, casco antiguo, cuevas y vida nocturna, cada tema con su propia guía de AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Nerja: kust, grotten & avonden',
      description: 'Ontdek Nerja via stranden, restaurants, dagtochten, de oude stad, de grotten en het avondleven, elk thema met een eigen AMARA-gids.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Nerja: kust, grottor & kvällar',
      description: 'Upptäck Nerja genom stränder, mat, dagsutflykter, gamla stan, grottor och kvällsliv – varje tema har en egen AMARA-guide med praktiska råd.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaExperienceHubContent = {
  hero: {
    eyebrow: l("Experiences in Nerja", "Erlebnisse in Nerja", "Experiencias en Nerja", "Ervaringen in Nerja", "Upplevelser i Nerja"),
    title: l("Beach in the morning, Nerja in the evening.", "Morgens an den Strand, abends durch Nerja.", "Playa por la mañana, Nerja al caer la tarde.", "'s Ochtends naar het strand, 's avonds Nerja in.", "Strand på morgonen, Nerja på kvällen."),
    standfirst: l("From AMARA Playa, Torrecilla is about 200 metres away and the Balcón de Europa about 500 metres. That makes an easy Nerja day wonderfully simple: swim before breakfast, wander through the old town later and choose a terrace for dinner. The caves, Maro and longer day trips are there when you want a change of scene.", "Von AMARA Playa sind es etwa 200 Meter bis Torrecilla und ungefähr 500 Meter bis zum Balcón de Europa. Ein schöner Tag in Nerja ist deshalb ganz unkompliziert: vor dem Frühstück ins Meer, später durch die Altstadt und am Abend auf eine Terrasse. Für Abwechslung liegen die Höhlen, Maro und längere Tagesausflüge nah genug.", "Desde AMARA Playa hay unos 200 metros hasta Torrecilla y unos 500 hasta el Balcón de Europa. Así, un buen día en Nerja puede ser muy sencillo: un baño antes del desayuno, un paseo por el casco antiguo y una terraza para cenar. Las cuevas, Maro y las excursiones más largas quedan para cuando apetezca cambiar de ambiente.", "Vanaf AMARA Playa is het ongeveer 200 meter naar Torrecilla en 500 meter naar het Balcón de Europa. Een fijne dag in Nerja is daardoor heel eenvoudig: zwemmen voor het ontbijt, later door de oude stad slenteren en 's avonds eten op een terras. De grotten, Maro en langere dagtochten zorgen voor afwisseling.", "Från AMARA Playa är det cirka 200 meter till Torrecilla och cirka 500 meter till Balcón de Europa. En fin dag i Nerja kan därför vara enkel: ett morgondopp före frukost, en promenad i gamla stan senare och middag på en terrass. Grottorna, Maro och längre dagsutflykter finns nära när ni vill byta miljö."),
    imageAlt: l("Aerial view of Nerja and the Mediterranean coast", "Luftaufnahme von Nerja und der Mittelmeerküste", "Vista aérea de Nerja y la costa mediterránea", "Luchtfoto van Nerja en de Middellandse Zeekust", "Flygvy över Nerja och Medelhavskusten")
  },
  intro: {
    eyebrow: l("Four good ways to spend a day", "Vier gute Ideen für euren Tag", "Cuatro buenas formas de pasar el día", "Vier fijne manieren om de dag door te brengen", "Fyra fina sätt att tillbringa dagen"),
    title: l("Close by or out for the day", "Ganz in der Nähe oder einen Tag unterwegs", "Cerca de casa o de excursión", "Dicht bij huis of een dag op pad", "Nära hemmet eller på dagsutflykt"),
    text: l("These are the four things we would start with: the coast, the caves, good food and one unhurried day trip.", "Damit würden wir anfangen: Küste, Höhlen, gutes Essen und ein Tagesausflug ohne Zeitdruck.", "Nosotros empezaríamos por aquí: la costa, las cuevas, buena comida y una excursión sin prisas.", "Hier zouden wij mee beginnen: de kust, de grotten, lekker eten en één ontspannen dagtocht.", "Vi skulle börja här: kusten, grottorna, god mat och en dagsutflykt utan stress.")
  },
  themes: [
    {
      id: "beaches",
      title: l("Beaches & coast", "Strände & Küste", "Playas y costa", "Stranden & kust", "Stränder & kust"),
      text: l("Torrecilla is the easy everyday beach from AMARA Playa. For clearer water and a wilder setting, the coves towards Maro are worth the extra journey.", "Torrecilla ist von AMARA Playa der unkomplizierte Strand für jeden Tag. Für klareres Wasser und eine naturbelassenere Umgebung lohnt sich der zusätzliche Weg Richtung Maro.", "Torrecilla es la playa fácil para el día a día desde AMARA Playa. Para encontrar aguas más transparentes y un entorno más natural, merece la pena acercarse a las calas de Maro.", "Torrecilla is vanaf AMARA Playa het makkelijke strand voor elke dag. Voor helderder water en een natuurlijkere omgeving is de extra reis richting Maro de moeite waard.", "Torrecilla är den enkla vardagsstranden från AMARA Playa. För klarare vatten och mer natur är vikarna mot Maro värda den extra resan."),
      token: "nerja_beaches_authority" as LinkToken,
      linkLabel: l("Open the beach guide", "Strandguide öffnen", "Abrir la guía de playas", "Open de strandgids", "Öppna strandguiden")
    },
    {
      id: "food",
      title: l("Food & restaurants", "Essen & Restaurants", "Gastronomía y restaurantes", "Eten & restaurants", "Mat & restauranger"),
      text: l("Lunch can be grilled fish or paella by the sea; in the evening, the old town adds tapas bars and restaurants. Popular tables are worth reserving.", "Mittags passen gegrillter Fisch oder Paella am Meer; abends kommen in der Altstadt Tapasbars und Restaurants dazu. Für beliebte Tische lohnt sich eine Reservierung.", "Al mediodía apetecen pescado a la brasa o paella junto al mar; por la noche, el casco antiguo suma bares de tapas y restaurantes. Conviene reservar las mesas más solicitadas.", "Bij de lunch passen gegrilde vis of paella aan zee; 's avonds komen daar in de oude stad tapasbars en restaurants bij. Voor populaire tafels is reserveren verstandig.", "Till lunch passar grillad fisk eller paella vid havet; på kvällen väntar tapasbarer och restauranger i gamla stan. Populära bord är värda att boka."),
      token: "nerja_food_authority" as LinkToken,
      linkLabel: l("Open the food guide", "Food-Guide öffnen", "Abrir la guía gastronómica", "Open de foodgids", "Öppna matguiden")
    },
    {
      id: "dayTrips",
      title: l("Day trips", "Tagesausflüge", "Excursiones", "Dagtochten", "Dagsutflykter"),
      text: l("Frigiliana is close enough for a few hours. Málaga, Granada, Caminito del Rey and Ronda each deserve their own day rather than being combined in a rush.", "Frigiliana liegt nah genug für ein paar Stunden. Málaga, Granada, der Caminito del Rey und Ronda verdienen jeweils einen eigenen Tag statt einer hastigen Kombination.", "Frigiliana está lo bastante cerca para pasar unas horas. Málaga, Granada, el Caminito del Rey y Ronda merecen cada uno su propio día, sin combinarlos con prisas.", "Frigiliana ligt dichtbij genoeg voor een paar uur. Málaga, Granada, Caminito del Rey en Ronda verdienen elk een eigen dag, zonder haastige combinaties.", "Frigiliana ligger nära nog för några timmar. Málaga, Granada, Caminito del Rey och Ronda förtjänar var sin dag i stället för en stressig kombination."),
      token: "nerja_daytrips_authority" as LinkToken,
      linkLabel: l("Open the day-trip guide", "Tagesausflugs-Guide öffnen", "Abrir la guía de excursiones", "Open de dagtochtengids", "Öppna utflyktsguiden")
    },
    {
      id: "caves",
      title: l("Nerja Caves", "Höhlen von Nerja", "Cueva de Nerja", "Grotten van Nerja", "Nerjagrottorna"),
      text: l("The caves are near Maro and work well as a half-day outing. Timed admission and the steps inside make checking current tickets and access details worthwhile.", "Die Höhlen liegen bei Maro und eignen sich gut für einen halben Tag. Wegen der festen Einlasszeiten und der Stufen im Inneren solltet ihr Tickets und Zugang vorher aktuell prüfen.", "Las cuevas están junto a Maro y encajan bien en una salida de medio día. Como la entrada tiene horario y hay escalones dentro, conviene comprobar antes los billetes y el acceso.", "De grotten liggen bij Maro en zijn geschikt voor een halve dag. Door de tijdsloten en trappen binnen is het verstandig om tickets en toegang vooraf te controleren.", "Grottorna ligger vid Maro och passar bra som en halvdagsutflykt. Tidsbestämt inträde och trapporna inne gör det klokt att kontrollera biljetter och tillgänglighet i förväg."),
      token: "nerja_caves" as LinkToken,
      linkLabel: l("Open the cave guide", "Höhlen-Guide öffnen", "Abrir la guía de la cueva", "Open de grottengids", "Öppna grottguiden")
    },
    {
      id: "balcon",
      title: l("Balcón & Old Town", "Balcón & Altstadt", "Balcón y casco antiguo", "Balcón & oude stad", "Balcón & gamla stan"),
      text: l("Use the Balcón de Europa as the starting point for sea views, pedestrian streets and an unhurried walk through central Nerja.", "Nutzt den Balcón de Europa als Ausgangspunkt für Meerblick, Fußgängerzonen und einen entspannten Rundgang durch Nerjas Zentrum.", "Tomad el Balcón de Europa como punto de partida para disfrutar del mar, las calles peatonales y un paseo tranquilo por el centro.", "Gebruik het Balcón de Europa als vertrekpunt voor zeezicht, autovrije straten en een ontspannen wandeling door het centrum.", "Använd Balcón de Europa som startpunkt för havsutsikt, gågator och en lugn promenad genom centrala Nerja."),
      token: "nerja_balcon_de_europa" as LinkToken,
      linkLabel: l("Open the Balcón guide", "Balcón-Guide öffnen", "Abrir la guía del Balcón", "Open de Balcón-gids", "Öppna Balcón-guiden")
    },
    {
      id: "veranoAzul",
      title: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
      text: l("Explore where the series changed Nerja and why the town still carries its landmarks in local memory.", "Erfahrt, wo die Serie gedreht wurde und warum Nerja als Serienort noch immer im kulturellen Gedächtnis verankert ist.", "Revelad por qué la serie sigue viva en la memoria de generaciones y qué partes de Nerja siguen identificando ese legado.", "Ontdek waarom de serie nog steeds mee-evolueert met de manier waarop men naar Nerja kijkt.", "Upptäck varför serien fortfarande sätter tonen i hur Nerja minns platsen."),
      token: "nerja_verano_azul" as LinkToken,
      linkLabel: l("Open the Verano Azul guide", "Verano Azul-Guide öffnen", "Abrir la guía de Verano Azul", "Open de Verano Azul-gids", "Öppna Verano Azul-guiden")
    },
    {
      id: "nightlife",
      title: l("Evening life", "Abendleben", "Vida nocturna", "Avondleven", "Kvällsliv"),
      text: l("Choose between dinner and a terrace, live music or a livelier late evening—this is a Nerja experience, not a Frigiliana promise.", "Wählt zwischen Essen und Terrasse, Live-Musik oder einem lebhafteren späten Abend. Das ist ein Nerja-Erlebnis, kein Versprechen für Frigiliana.", "Elegid entre cena y terraza, música en directo o una noche más animada. Es una experiencia de Nerja, no una promesa de Frigiliana.", "Kies tussen diner en terras, livemuziek of een levendigere late avond. Dit hoort bij Nerja, niet bij de belofte van Frigiliana.", "Välj mellan middag och terrass, livemusik eller en livligare sen kväll. Det är en Nerja-upplevelse, inte ett Frigiliana-löfte."),
      token: "nerja_nightlife_authority" as LinkToken,
      linkLabel: l("Open the evening guide", "Abend-Guide öffnen", "Abrir la guía de la noche", "Open de avondgids", "Öppna kvällsguiden")
    }
  ],
  closing: {
    eyebrow: l("Stay close to the sea", "Nah am Meer wohnen", "Alojarse cerca del mar", "Dicht bij zee verblijven", "Bo nära havet"),
    title: l("Stay close enough to do the simple things twice.", "Nah genug, um die einfachen Dinge zweimal zu machen.", "Lo bastante cerca para repetir las cosas sencillas.", "Dichtbij genoeg om de eenvoudige dingen nog een keer te doen.", "Nära nog för att göra de enkla sakerna en gång till."),
    text: l("From AMARA Playa you can return to Torrecilla for a second swim or walk into the old town again after dinner. That short distance is what makes the location so pleasant.", "Von AMARA Playa könnt ihr für ein zweites Bad noch einmal nach Torrecilla gehen oder nach dem Essen durch die Altstadt zurücklaufen. Genau diese kurzen Wege machen die Lage so angenehm.", "Desde AMARA Playa podéis volver a Torrecilla para daros otro baño o regresar andando por el casco antiguo después de cenar. Esas distancias cortas hacen que la ubicación resulte tan agradable.", "Vanaf AMARA Playa loop je makkelijk terug naar Torrecilla voor een tweede duik of na het eten nog eens door de oude stad. Juist die korte afstanden maken de ligging zo prettig.", "Från AMARA Playa kan ni gå tillbaka till Torrecilla för ett andra dopp eller ta en ny promenad genom gamla stan efter middagen. De korta avstånden gör läget så trivsamt."),
    stayLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa")
  }
};
