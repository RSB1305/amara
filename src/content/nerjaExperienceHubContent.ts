import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type NerjaExperienceThemeId =
  | 'beaches'
  | 'dayTrips'
  | 'balcon'
  | 'caves'
  | 'food'
  | 'nightlife';

type NerjaExperienceTheme = {
  id: NerjaExperienceThemeId;
  title: string;
  text: string;
  linkLabel: string;
  token: LinkToken;
};

type NerjaExperienceHubCopy = {
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  themes: NerjaExperienceTheme[];
  closing: {
    eyebrow: string;
    title: string;
    text: string;
    stayLabel: string;
  };
};

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
      description: 'Descubrid Nerja a través de sus playas, gastronomía, excursiones, casco antiguo, cuevas y vida nocturna.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Nerja: kust, grotten & avonden',
      description: 'Ontdek Nerja via stranden, restaurants, dagtochten, oude stad, grotten en avondleven in een eigen AMARA-gids.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Nerja: kust, grottor & kvällar',
      description: 'Upptäck Nerja genom stränder, mat, dagsutflykter, gamla stan, grottor och kvällsliv i AMARAs destinationsguide.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaExperienceHubContent: Record<AmaraLanguage, NerjaExperienceHubCopy> = {
  en: {
    hero: {
      eyebrow: 'Experiences in Nerja',
      title: 'Sea, old streets and evenings with more movement.',
      standfirst: 'Nerja has its own rhythm: mornings by the Mediterranean, cultural landmarks close to town and a wider choice after sunset. This guide keeps that experience separate from village life in Frigiliana.',
      imageAlt: 'Aerial view of Nerja and the Mediterranean coast'
    },
    intro: {
      eyebrow: 'Choose the kind of day',
      title: 'Start with the coast, then add one clear experience.',
      text: 'Start with the two essentials—beaches and food—then choose a day trip, the Balcón, the caves or the kind of evening that fits your stay.'
    },
    themes: [
      { id: 'beaches', title: 'Beaches & coast', text: 'Compare easy town beaches with the more natural coves towards Maro, then choose by access, conditions and the pace you want.', token: 'nerja_beaches_authority', linkLabel: 'Open the beach guide' },
      { id: 'food', title: 'Food & restaurants', text: 'Choose between seafood tapas, a paella lunch by the beach and a special dinner worth reserving.', token: 'nerja_food_authority', linkLabel: 'Open the food guide' },
      { id: 'dayTrips', title: 'Day trips', text: 'Compare Málaga, Granada, Caminito del Rey and Ronda without trying to turn several destinations into one rushed day.', token: 'nerja_daytrips_authority', linkLabel: 'Open the day-trip guide' },
      { id: 'balcon', title: 'Balcón & Old Town', text: 'Use the Balcón de Europa as the starting point for sea views, pedestrian streets and an unhurried walk through central Nerja.', token: 'nerja_balcon_de_europa', linkLabel: 'Open the Balcón guide' },
      { id: 'caves', title: 'Nerja Caves', text: 'Plan the cave visit as a distinct cultural experience, with realistic timing and the practical details that matter before arrival.', token: 'nerja_caves', linkLabel: 'Open the cave guide' },
      { id: 'nightlife', title: 'Evening life', text: 'Choose between dinner and a terrace, live music or a livelier late evening—this is a Nerja experience, not a Frigiliana promise.', token: 'nerja_nightlife_authority', linkLabel: 'Open the evening guide' }
    ],
    closing: { eyebrow: 'Stay close to the sea', title: 'Let Nerja set its own rhythm.', text: 'AMARA Playa gives you a quiet base close to the coast while the town’s beaches, old streets and evenings remain within easy reach.', stayLabel: 'View AMARA Playa' }
  },
  de: {
    hero: {
      eyebrow: 'Erlebnisse in Nerja',
      title: 'Meer, Altstadt und Abende mit mehr Bewegung.',
      standfirst: 'Nerja hat einen eigenen Rhythmus: morgens ans Mittelmeer, kulturelle Orte nah am Zentrum und nach Sonnenuntergang mehr Auswahl. Dieser Guide trennt das Küstenerlebnis klar vom Dorfleben in Frigiliana.',
      imageAlt: 'Luftaufnahme von Nerja und der Mittelmeerküste'
    },
    intro: {
      eyebrow: 'Wählt euren Tag',
      title: 'Beginnt an der Küste und ergänzt ein klares Erlebnis.',
      text: 'Beginnt mit den beiden Grundlagen – Stränden und Essen – und wählt danach Tagesausflug, Balcón, Höhlen oder den Abend, der zu eurem Aufenthalt passt.'
    },
    themes: [
      { id: 'beaches', title: 'Strände & Küste', text: 'Vergleicht gut erreichbare Stadtstrände mit den natürlicheren Buchten Richtung Maro und wählt nach Zugang, Bedingungen und gewünschtem Tempo.', token: 'nerja_beaches_authority', linkLabel: 'Strandguide öffnen' },
      { id: 'food', title: 'Essen & Restaurants', text: 'Wählt zwischen Seafood-Tapas, Paella zum Strandlunch und einem besonderen Dinner mit Reservierung.', token: 'nerja_food_authority', linkLabel: 'Food-Guide öffnen' },
      { id: 'caves', title: 'Höhlen von Nerja', text: 'Plant den Höhlenbesuch als eigenständiges Kulturerlebnis – mit realistischem Zeitbedarf und den wichtigen Details vor der Ankunft.', token: 'nerja_caves', linkLabel: 'Höhlen-Guide öffnen' },
      { id: 'dayTrips', title: 'Tagesausflüge', text: 'Vergleicht Málaga, Granada, den Caminito del Rey und Ronda, ohne mehrere Ziele in einen gehetzten Tag zu pressen.', token: 'nerja_daytrips_authority', linkLabel: 'Tagesausflugs-Guide öffnen' },
      { id: 'balcon', title: 'Balcón & Altstadt', text: 'Nutzt den Balcón de Europa als Ausgangspunkt für Meerblick, Fußgängerzonen und einen entspannten Rundgang durch Nerjas Zentrum.', token: 'nerja_balcon_de_europa', linkLabel: 'Balcón-Guide öffnen' },
      { id: 'nightlife', title: 'Abendleben', text: 'Wählt zwischen Essen und Terrasse, Live-Musik oder einem lebhafteren späten Abend. Das ist ein Nerja-Erlebnis, kein Versprechen für Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Abend-Guide öffnen' }
    ],
    closing: { eyebrow: 'Nah am Meer wohnen', title: 'Lasst Nerja seinen eigenen Rhythmus bestimmen.', text: 'AMARA Playa ist eure ruhige Basis nahe der Küste, während Strände, Altstadt und Nerjas Abende gut erreichbar bleiben.', stayLabel: 'AMARA Playa ansehen' }
  },
  es: {
    hero: {
      eyebrow: 'Experiencias en Nerja',
      title: 'Mar, calles antiguas y noches con más movimiento.',
      standfirst: 'Nerja tiene un ritmo propio: mañanas junto al Mediterráneo, lugares culturales cerca del centro y más opciones al caer la tarde. Esta guía separa claramente esa experiencia de la vida de pueblo en Frigiliana.',
      imageAlt: 'Vista aérea de Nerja y la costa mediterránea'
    },
    intro: {
      eyebrow: 'Elegid el tipo de día',
      title: 'Empezad por la costa y añadid una experiencia clara.',
      text: 'Empezad por las dos prioridades —playas y gastronomía— y elegid después una excursión, el Balcón, las cuevas o la noche que encaje con la estancia.'
    },
    themes: [
      { id: 'food', title: 'Gastronomía y restaurantes', text: 'Elegid entre tapas de pescado, una paella a mediodía junto a la playa y una cena especial con reserva.', token: 'nerja_food_authority', linkLabel: 'Abrir la guía gastronómica' },
      { id: 'beaches', title: 'Playas y costa', text: 'Comparad las playas urbanas de acceso sencillo con las calas más naturales hacia Maro y elegid según el acceso, las condiciones y el ritmo del día.', token: 'nerja_beaches_authority', linkLabel: 'Abrir la guía de playas' },
      { id: 'balcon', title: 'Balcón y casco antiguo', text: 'Tomad el Balcón de Europa como punto de partida para disfrutar del mar, las calles peatonales y un paseo tranquilo por el centro.', token: 'nerja_balcon_de_europa', linkLabel: 'Abrir la guía del Balcón' },
      { id: 'nightlife', title: 'Vida nocturna', text: 'Elegid entre cena y terraza, música en directo o una noche más animada. Es una experiencia de Nerja, no una promesa de Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Abrir la guía de la noche' },
      { id: 'caves', title: 'Cueva de Nerja', text: 'Planificad la visita como una experiencia cultural propia, con tiempos realistas y la información práctica necesaria antes de llegar.', token: 'nerja_caves', linkLabel: 'Abrir la guía de la cueva' },
      { id: 'dayTrips', title: 'Excursiones', text: 'Comparad Málaga, Granada, Caminito del Rey y Ronda sin intentar meter varios destinos en una jornada acelerada.', token: 'nerja_daytrips_authority', linkLabel: 'Abrir la guía de excursiones' }
    ],
    closing: { eyebrow: 'Alojarse cerca del mar', title: 'Dejad que Nerja marque su propio ritmo.', text: 'AMARA Playa ofrece una base tranquila cerca de la costa, con las playas, el casco antiguo y las noches de Nerja a vuestro alcance.', stayLabel: 'Ver AMARA Playa' }
  },
  nl: {
    hero: {
      eyebrow: 'Ervaringen in Nerja',
      title: 'Zee, oude straten en avonden met meer levendigheid.',
      standfirst: 'Nerja heeft een eigen ritme: ochtenden aan de Middellandse Zee, culturele plekken dicht bij het centrum en meer keuze na zonsondergang. Deze gids houdt dat duidelijk gescheiden van het dorpsleven in Frigiliana.',
      imageAlt: 'Luchtfoto van Nerja en de Middellandse Zeekust'
    },
    intro: {
      eyebrow: 'Kies het soort dag',
      title: 'Begin aan de kust en voeg één duidelijke ervaring toe.',
      text: 'Begin met de twee basiskeuzes — stranden en eten — en kies daarna een dagtocht, het Balcón, de grotten of de avond die bij jullie verblijf past.'
    },
    themes: [
      { id: 'beaches', title: 'Stranden & kust', text: 'Vergelijk makkelijk bereikbare stadsstranden met natuurlijkere baaien richting Maro en kies op basis van toegang, omstandigheden en tempo.', token: 'nerja_beaches_authority', linkLabel: 'Open de strandgids' },
      { id: 'food', title: 'Eten & restaurants', text: 'Kies tussen vistapas, een paellalunch bij het strand en een bijzonder diner dat een reservering verdient.', token: 'nerja_food_authority', linkLabel: 'Open de foodgids' },
      { id: 'dayTrips', title: 'Dagtochten', text: 'Vergelijk Málaga, Granada, Caminito del Rey en Ronda zonder meerdere bestemmingen in één gehaaste dag te persen.', token: 'nerja_daytrips_authority', linkLabel: 'Open de dagtochtengids' },
      { id: 'caves', title: 'Grotten van Nerja', text: 'Plan de grotten als een zelfstandige culturele ervaring, met realistische tijden en praktische informatie voor vertrek.', token: 'nerja_caves', linkLabel: 'Open de grottengids' },
      { id: 'balcon', title: 'Balcón & oude stad', text: 'Gebruik het Balcón de Europa als vertrekpunt voor zeezicht, autovrije straten en een ontspannen wandeling door het centrum.', token: 'nerja_balcon_de_europa', linkLabel: 'Open de Balcón-gids' },
      { id: 'nightlife', title: 'Avondleven', text: 'Kies tussen diner en terras, livemuziek of een levendigere late avond. Dit hoort bij Nerja, niet bij de belofte van Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Open de avondgids' }
    ],
    closing: { eyebrow: 'Dicht bij zee verblijven', title: 'Laat Nerja zijn eigen ritme bepalen.', text: 'AMARA Playa is een rustige uitvalsbasis bij de kust, terwijl stranden, oude straten en avondleven dichtbij blijven.', stayLabel: 'Bekijk AMARA Playa' }
  },
  sv: {
    hero: {
      eyebrow: 'Upplevelser i Nerja',
      title: 'Hav, gamla gränder och kvällar med mer rörelse.',
      standfirst: 'Nerja har sin egen rytm: morgnar vid Medelhavet, kultur nära centrum och fler val efter solnedgången. Guiden skiljer tydligt den upplevelsen från bylivet i Frigiliana.',
      imageAlt: 'Flygvy över Nerja och Medelhavskusten'
    },
    intro: {
      eyebrow: 'Välj dagens riktning',
      title: 'Börja vid kusten och lägg till en tydlig upplevelse.',
      text: 'Börja med de två grunderna — stränder och mat — och välj sedan en dagsutflykt, Balcón, grottorna eller den kväll som passar vistelsen.'
    },
    themes: [
      { id: 'beaches', title: 'Stränder & kust', text: 'Jämför lättillgängliga stadsstränder med naturligare vikar mot Maro och välj efter tillgång, förhållanden och önskat tempo.', token: 'nerja_beaches_authority', linkLabel: 'Öppna strandguiden' },
      { id: 'food', title: 'Mat & restauranger', text: 'Välj mellan fisktapas, paellalunch vid stranden och en speciell middag som förtjänar en bokning.', token: 'nerja_food_authority', linkLabel: 'Öppna matguiden' },
      { id: 'balcon', title: 'Balcón & gamla stan', text: 'Använd Balcón de Europa som startpunkt för havsutsikt, gågator och en lugn promenad genom centrala Nerja.', token: 'nerja_balcon_de_europa', linkLabel: 'Öppna Balcón-guiden' },
      { id: 'dayTrips', title: 'Dagsutflykter', text: 'Jämför Málaga, Granada, Caminito del Rey och Ronda utan att pressa flera resmål in i en stressig dag.', token: 'nerja_daytrips_authority', linkLabel: 'Öppna utflyktsguiden' },
      { id: 'caves', title: 'Nerjagrottorna', text: 'Planera grottbesöket som en egen kulturupplevelse med realistisk tidsåtgång och praktiska detaljer före ankomsten.', token: 'nerja_caves', linkLabel: 'Öppna grottguiden' },
      { id: 'nightlife', title: 'Kvällsliv', text: 'Välj mellan middag och terrass, livemusik eller en livligare sen kväll. Det är en Nerja-upplevelse, inte ett Frigiliana-löfte.', token: 'nerja_nightlife_authority', linkLabel: 'Öppna kvällsguiden' }
    ],
    closing: { eyebrow: 'Bo nära havet', title: 'Låt Nerja sätta sin egen rytm.', text: 'AMARA Playa är en lugn bas nära kusten, med stränder, gamla gränder och Nerjas kvällar inom räckhåll.', stayLabel: 'Se AMARA Playa' }
  }
};
