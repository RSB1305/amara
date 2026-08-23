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
    title: l("Sea, old streets and evenings with more movement.", "Meer, Altstadt und Abende mit mehr Bewegung.", "Mar, calles antiguas y noches con más movimiento.", "Zee, oude straten en avonden met meer levendigheid.", "Hav, gamla gränder och kvällar med mer rörelse."),
    standfirst: l("Nerja has its own rhythm: mornings by the Mediterranean, cultural landmarks close to town and a wider choice after sunset. This guide keeps that experience separate from village life in Frigiliana.", "Nerja hat einen eigenen Rhythmus: morgens ans Mittelmeer, kulturelle Orte nah am Zentrum und nach Sonnenuntergang mehr Auswahl. Dieser Guide trennt das Küstenerlebnis klar vom Dorfleben in Frigiliana.", "Nerja tiene un ritmo propio: mañanas junto al Mediterráneo, lugares culturales cerca del centro y más opciones al caer la tarde. Esta guía separa claramente esa experiencia de la vida de pueblo en Frigiliana.", "Nerja heeft een eigen ritme: ochtenden aan de Middellandse Zee, culturele plekken dicht bij het centrum en meer keuze na zonsondergang. Deze gids houdt dat duidelijk gescheiden van het dorpsleven in Frigiliana.", "Nerja har sin egen rytm: morgnar vid Medelhavet, kultur nära centrum och fler val efter solnedgången. Guiden skiljer tydligt den upplevelsen från bylivet i Frigiliana."),
    imageAlt: l("Aerial view of Nerja and the Mediterranean coast", "Luftaufnahme von Nerja und der Mittelmeerküste", "Vista aérea de Nerja y la costa mediterránea", "Luchtfoto van Nerja en de Middellandse Zeekust", "Flygvy över Nerja och Medelhavskusten")
  },
  intro: {
    eyebrow: l("Choose the kind of day", "Wählt euren Tag", "Elegid el tipo de día", "Kies het soort dag", "Välj dagens riktning"),
    title: l("Start with the coast, then add one clear experience.", "Beginnt an der Küste und ergänzt ein klares Erlebnis.", "Empezad por la costa y añadid una experiencia clara.", "Begin aan de kust en voeg één duidelijke ervaring toe.", "Börja vid kusten och lägg till en tydlig upplevelse."),
    text: l("Start with the two essentials—beaches and food—then choose a day trip, the Balcón, the caves or the kind of evening that fits your stay.", "Beginnt mit den beiden Grundlagen – Stränden und Essen – und wählt danach Tagesausflug, Balcón, Höhlen oder den Abend, der zu eurem Aufenthalt passt.", "Empezad por las dos prioridades —playas y gastronomía— y elegid después una excursión, el Balcón, las cuevas o la noche que encaje con la estancia.", "Begin met de twee basiskeuzes — stranden en eten — en kies daarna een dagtocht, het Balcón, de grotten of de avond die bij jullie verblijf past.", "Börja med de två grunderna — stränder och mat — och välj sedan en dagsutflykt, Balcón, grottorna eller den kväll som passar vistelsen.")
  },
  themes: [
    {
      id: "beaches",
      title: l("Beaches & coast", "Strände & Küste", "Playas y costa", "Stranden & kust", "Stränder & kust"),
      text: l("Compare easy town beaches with the more natural coves towards Maro, then choose by access, conditions and the pace you want.", "Vergleicht gut erreichbare Stadtstrände mit den natürlicheren Buchten Richtung Maro und wählt nach Zugang, Bedingungen und gewünschtem Tempo.", "Comparad las playas urbanas de acceso sencillo con las calas más naturales hacia Maro y elegid según el acceso, las condiciones y el ritmo del día.", "Vergelijk makkelijk bereikbare stadsstranden met natuurlijkere baaien richting Maro en kies op basis van toegang, omstandigheden en tempo.", "Jämför lättillgängliga stadsstränder med naturligare vikar mot Maro och välj efter tillgång, förhållanden och önskat tempo."),
      token: "nerja_beaches_authority" as LinkToken,
      linkLabel: l("Open the beach guide", "Strandguide öffnen", "Abrir la guía de playas", "Open de strandgids", "Öppna strandguiden")
    },
    {
      id: "food",
      title: l("Food & restaurants", "Essen & Restaurants", "Gastronomía y restaurantes", "Eten & restaurants", "Mat & restauranger"),
      text: l("Choose between seafood tapas, a paella lunch by the beach and a special dinner worth reserving.", "Wählt zwischen Seafood-Tapas, Paella zum Strandlunch und einem besonderen Dinner mit Reservierung.", "Elegid entre tapas de pescado, una paella a mediodía junto a la playa y una cena especial con reserva.", "Kies tussen vistapas, een paellalunch bij het strand en een bijzonder diner dat een reservering verdient.", "Välj mellan fisktapas, paellalunch vid stranden och en speciell middag som förtjänar en bokning."),
      token: "nerja_food_authority" as LinkToken,
      linkLabel: l("Open the food guide", "Food-Guide öffnen", "Abrir la guía gastronómica", "Open de foodgids", "Öppna matguiden")
    },
    {
      id: "dayTrips",
      title: l("Day trips", "Tagesausflüge", "Excursiones", "Dagtochten", "Dagsutflykter"),
      text: l("Compare Málaga, Granada, Caminito del Rey and Ronda without trying to turn several destinations into one rushed day.", "Vergleicht Málaga, Granada, den Caminito del Rey und Ronda, ohne mehrere Ziele in einen gehetzten Tag zu pressen.", "Comparad Málaga, Granada, Caminito del Rey y Ronda sin intentar meter varios destinos en una jornada acelerada.", "Vergelijk Málaga, Granada, Caminito del Rey en Ronda zonder meerdere bestemmingen in één gehaaste dag te persen.", "Jämför Málaga, Granada, Caminito del Rey och Ronda utan att pressa flera resmål in i en stressig dag."),
      token: "nerja_daytrips_authority" as LinkToken,
      linkLabel: l("Open the day-trip guide", "Tagesausflugs-Guide öffnen", "Abrir la guía de excursiones", "Open de dagtochtengids", "Öppna utflyktsguiden")
    },
    {
      id: "balcon",
      title: l("Balcón & Old Town", "Balcón & Altstadt", "Balcón y casco antiguo", "Balcón & oude stad", "Balcón & gamla stan"),
      text: l("Use the Balcón de Europa as the starting point for sea views, pedestrian streets and an unhurried walk through central Nerja.", "Nutzt den Balcón de Europa als Ausgangspunkt für Meerblick, Fußgängerzonen und einen entspannten Rundgang durch Nerjas Zentrum.", "Tomad el Balcón de Europa como punto de partida para disfrutar del mar, las calles peatonales y un paseo tranquilo por el centro.", "Gebruik het Balcón de Europa als vertrekpunt voor zeezicht, autovrije straten en een ontspannen wandeling door het centrum.", "Använd Balcón de Europa som startpunkt för havsutsikt, gågator och en lugn promenad genom centrala Nerja."),
      token: "nerja_balcon_de_europa" as LinkToken,
      linkLabel: l("Open the Balcón guide", "Balcón-Guide öffnen", "Abrir la guía del Balcón", "Open de Balcón-gids", "Öppna Balcón-guiden")
    },
    {
      id: "caves",
      title: l("Nerja Caves", "Höhlen von Nerja", "Cueva de Nerja", "Grotten van Nerja", "Nerjagrottorna"),
      text: l("Plan the cave visit as a distinct cultural experience, with realistic timing and the practical details that matter before arrival.", "Plant den Höhlenbesuch als eigenständiges Kulturerlebnis – mit realistischem Zeitbedarf und den wichtigen Details vor der Ankunft.", "Planificad la visita como una experiencia cultural propia, con tiempos realistas y la información práctica necesaria antes de llegar.", "Plan de grotten als een zelfstandige culturele ervaring, met realistische tijden en praktische informatie voor vertrek.", "Planera grottbesöket som en egen kulturupplevelse med realistisk tidsåtgång och praktiska detaljer före ankomsten."),
      token: "nerja_caves" as LinkToken,
      linkLabel: l("Open the cave guide", "Höhlen-Guide öffnen", "Abrir la guía de la cueva", "Open de grottengids", "Öppna grottguiden")
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
    title: l("Let Nerja set its own rhythm.", "Lasst Nerja seinen eigenen Rhythmus bestimmen.", "Dejad que Nerja marque su propio ritmo.", "Laat Nerja zijn eigen ritme bepalen.", "Låt Nerja sätta sin egen rytm."),
    text: l("AMARA Playa gives you a quiet base close to the coast while the town’s beaches, old streets and evenings remain within easy reach.", "AMARA Playa ist eure ruhige Basis nahe der Küste, während Strände, Altstadt und Nerjas Abende gut erreichbar bleiben.", "AMARA Playa ofrece una base tranquila cerca de la costa, con las playas, el casco antiguo y las noches de Nerja a vuestro alcance.", "AMARA Playa is een rustige uitvalsbasis bij de kust, terwijl stranden, oude straten en avondleven dichtbij blijven.", "AMARA Playa är en lugn bas nära kusten, med stränder, gamla gränder och Nerjas kvällar inom räckhåll."),
    stayLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa")
  }
};
