import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

export interface FrigilianaDayTripsPageCopy {
  footerHighlights: {
    dayTrips: string;
    beaches: string;
    restaurants: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
    availabilityCta: string;
  };
  sectionNav: {
    overview: string;
    malaga: string;
    granada: string;
    caminito: string;
    ronda: string;
    practical: string;
  };
  overview: {
    title: string;
    intro: string;
    rule: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  /** Recommendation record ids; the destination sections are built from the place copy (DR-GUEST-006). */
  destinationIds: readonly string[];
  practical: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_beaches_authority'
        | 'frigiliana_food_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    nextCta: string;
    parkingCta: string;
  };
}


export const frigilianaDayTripsSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-day-trips-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.day-trips'),
  article: {
    datePublished: '2026-07-29',
    dateModified: '2026-09-14',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Day Trips from Frigiliana: Málaga, Granada & Ronda',
      description:
        'Plan day trips from Frigiliana to Málaga, Granada, Caminito del Rey and Ronda with realistic drive times, ticket advice and relaxed itineraries.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana: Tagesausflüge Málaga, Granada & Ronda',
      description:
        'Plant Tagesausflüge von Frigiliana nach Málaga, Granada, zum Caminito del Rey und nach Ronda – mit Fahrzeiten, Ticket-Tipps und ruhigen Routen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana: excursiones a Málaga, Granada y Ronda',
      description:
        'Planificad excursiones desde Frigiliana a Málaga, Granada, Caminito del Rey y Ronda con tiempos orientativos, entradas y rutas sin prisas.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana: dagtochten naar Málaga, Granada & Ronda',
      description:
        'Plan dagtochten vanuit Frigiliana naar Málaga, Granada, Caminito del Rey en Ronda met rijtijden, ticketadvies en ontspannen routes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana: dagsutflykter Málaga, Granada & Ronda',
      description:
        'Planera dagsutflykter från Frigiliana till Málaga, Granada, Caminito del Rey och Ronda med körtider, biljettråd och lugna upplägg.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Every localization preserves the same destinations, planning cautions and
 * practical depth while using natural guest-facing language for its market.
 */
const frigilianaDayTripsContentCopy = {
  "footerHighlights": {
    "dayTrips": {
      en: 'Day trips',
      de: 'Tagesausflüge',
      es: 'Excursiones',
      nl: 'Dagtochten',
      sv: 'Dagsutflykter'
    } satisfies LocalizedText,
    "beaches": {
      en: 'Beach guide',
      de: 'Strand-Guide',
      es: 'Guía de playas',
      nl: 'Strandgids',
      sv: 'Strandguide'
    } satisfies LocalizedText,
    "restaurants": {
      en: 'Restaurant guide',
      de: 'Restaurant-Guide',
      es: 'Guía de restaurantes',
      nl: 'Restaurantgids',
      sv: 'Restaurangguide'
    } satisfies LocalizedText
  },
  "hero": {
    "kicker": {
      en: 'Andalusia guide',
      de: 'Andalusien-Guide',
      es: 'Guía de Andalucía',
      nl: 'Andalusië-gids',
      sv: 'Andalusienguide'
    } satisfies LocalizedText,
    "title": {
      en: 'Day trips from Frigiliana',
      de: 'Tagesausflüge ab Frigiliana',
      es: 'Excursiones desde Frigiliana',
      nl: 'Dagtochten vanuit Frigiliana',
      sv: 'Dagsutflykter från Frigiliana'
    } satisfies LocalizedText,
    "subtitle": {
      en: 'Culture, history and scenic drives',
      de: 'Kultur, Geschichte und Panoramastraßen',
      es: 'Cultura, historia y rutas panorámicas',
      nl: 'Cultuur, geschiedenis en mooie autoroutes',
      sv: 'Kultur, historia och vackra bilvägar'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
  "From Frigiliana, Málaga, Granada, the Caminito del Rey and Ronda each make a separate day out, with your stay in the village waiting at the end. By car, the first stretch takes you down from the village to the A-7; for a timed visit, allow for the walk from your accommodation to the car as well.",
  "Málaga is also reachable by bus via Nerja. Both connections matter on the way out and back. A car gives you more flexibility for Granada, the Caminito and Ronda; Ronda in particular needs a full day, with around two to two and a half hours of driving each way."
],
      de: [
  "Von Frigiliana aus könnt ihr Málaga, Granada, den Caminito del Rey und Ronda jeweils an einem eigenen Ausflugstag besuchen und abends wieder im Dorf wohnen. Mit dem Auto führt der erste Abschnitt vom Dorf hinunter zur A-7; für feste Einlasszeiten zählt deshalb auch der Weg von der Unterkunft zum Parkplatz.",
  "Málaga erreicht ihr außerdem mit dem Bus über Nerja. Dabei gehören beide Anschlüsse zur Hin- und Rückfahrt. Für Granada, den Caminito und Ronda gibt euch ein Auto mehr Spielraum; besonders Ronda braucht mit rund zwei bis zweieinhalb Stunden je Strecke einen ganzen Tag."
],
      es: [
  "Desde Frigiliana podéis dedicar un día a Málaga, Granada, el Caminito del Rey o Ronda y volver a dormir al pueblo. En coche, el primer tramo baja hasta la A-7; si tenéis una entrada con hora, también cuenta el camino desde vuestro alojamiento hasta el aparcamiento.",
  "Para Málaga podéis ir en autobús con cambio en Nerja. Los dos enlaces cuentan tanto a la ida como a la vuelta. El coche os da más margen para Granada, el Caminito y Ronda; esta última necesita un día completo, con unas dos a dos horas y media de conducción por trayecto."
],
      nl: [
  "Vanuit Frigiliana kunnen jullie Málaga, Granada, de Caminito del Rey en Ronda elk op een aparte dag bezoeken en ’s avonds terugkeren naar het dorp. Met de auto rijden jullie eerst omlaag naar de A-7; bij een bezoek met een vast tijdslot telt ook de wandeling van het verblijf naar de auto mee.",
  "Málaga is ook per bus via Nerja bereikbaar. Zowel heen als terug moeten de twee verbindingen aansluiten. Een auto geeft meer vrijheid voor Granada, de Caminito en Ronda; vooral Ronda vraagt een volle dag, met ongeveer twee tot tweeënhalf uur rijden per enkele reis."
],
      sv: [
  "Från Frigiliana kan ni besöka Málaga, Granada, Caminito del Rey och Ronda på var sin utflyktsdag och återvända till byn på kvällen. Med bil går första sträckan ner till A-7; vid ett besök med bokad entrétid räknas också promenaden från boendet till bilen.",
  "Málaga går även att nå med buss via Nerja. Båda anslutningarna behöver fungera på ut- och hemresan. En bil ger er större frihet för Granada, Caminito och Ronda; framför allt Ronda behöver en hel dag, med ungefär två till två och en halv timmes körning i varje riktning."
]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Whitewashed Frigiliana in the hills, a calm base for day trips through Andalusia',
      de: 'Das weiße Frigiliana in den Hügeln als ruhiger Ausgangspunkt für Ausflüge durch Andalusien',
      es: 'El pueblo blanco de Frigiliana entre colinas como base tranquila para recorrer Andalucía',
      nl: 'Het witte dorp Frigiliana in de heuvels als rustige uitvalsbasis voor dagtochten door Andalusië',
      sv: 'Den vita byn Frigiliana bland kullarna som lugn bas för dagsutflykter i Andalusien'
    } satisfies LocalizedText,
    "availabilityCta": {
      en: 'Check availability',
      de: 'Verfügbarkeit prüfen',
      es: 'Consultar disponibilidad',
      nl: 'Beschikbaarheid bekijken',
      sv: 'Kontrollera tillgänglighet'
    } satisfies LocalizedText
  },
  "sectionNav": {
    "overview": {
      en: 'Plan simply',
      de: 'Einfach planen',
      es: 'Plan sencillo',
      nl: 'Eenvoudig plannen',
      sv: 'Planera enkelt'
    } satisfies LocalizedText,
    "malaga": {
      en: 'Málaga',
      de: 'Málaga',
      es: 'Málaga',
      nl: 'Málaga',
      sv: 'Málaga'
    } satisfies LocalizedText,
    "granada": {
      en: 'Granada',
      de: 'Granada',
      es: 'Granada',
      nl: 'Granada',
      sv: 'Granada'
    } satisfies LocalizedText,
    "caminito": {
      en: 'Caminito',
      de: 'Caminito',
      es: 'Caminito',
      nl: 'Caminito',
      sv: 'Caminito'
    } satisfies LocalizedText,
    "ronda": {
      en: 'Ronda',
      de: 'Ronda',
      es: 'Ronda',
      nl: 'Ronda',
      sv: 'Ronda'
    } satisfies LocalizedText,
    "practical": {
      en: 'Practical',
      de: 'Praktisch',
      es: 'Información útil',
      nl: 'Praktisch',
      sv: 'Praktiskt'
    } satisfies LocalizedText
  },
  "overview": {
    "title": {
      en: 'Choose one memorable focus for the day',
      de: 'Ein prägendes Erlebnis pro Tag',
      es: 'Un gran motivo para cada día',
      nl: 'Kies één onvergetelijk middelpunt voor de dag',
      sv: 'Välj ett minnesvärt huvudmål för dagen'
    } satisfies LocalizedText,
    "intro": {
      en: 'The best day trips from Frigiliana focus on one main destination and leave the rest of the day flexible.',
      de: 'Die besten Tagesausflüge ab Frigiliana konzentrieren sich auf ein Hauptziel und lassen den Rest des Tages flexibel.',
      es: 'Las mejores excursiones desde Frigiliana no consisten en acumular monumentos. Funcionan cuando os centráis en un destino principal y dejáis flexible el resto de la jornada.',
      nl: 'De beste dagtochten vanuit Frigiliana draaien niet om zo veel mogelijk bezienswaardigheden. Ze werken wanneer de bestemming het tempo bepaalt en de rest van de dag flexibel blijft.',
      sv: 'De bästa dagsutflykterna från Frigiliana handlar inte om att samla sevärdheter. De fungerar när ni fokuserar på ett huvudmål och låter resten av dagen vara flexibel.'
    } satisfies LocalizedText,
    "rule": {
      en: "At the Alhambra and Caminito, your booked entry time determines your departure. The walk to the car, parking at the destination and the approach on foot all add to the journey.",
      de: "Bei Alhambra und Caminito bestimmt die gebuchte Einlasszeit den Aufbruch. Fußweg zum Auto, Parken am Ziel und Zugang gehören zur Reisezeit dazu.",
      es: "En la Alhambra y el Caminito, la hora de entrada marca la salida. A la conducción se suman el camino al coche, el aparcamiento y el acceso a pie en el destino.",
      nl: "Bij de Alhambra en Caminito bepaalt het geboekte tijdslot wanneer jullie vertrekken. De wandeling naar de auto, parkeren bij de bestemming en het laatste stuk te voet komen bij de reistijd.",
      sv: "Vid Alhambra och Caminito styr den bokade entrétiden när ni ger er av. Promenaden till bilen, parkering vid målet och gångvägen till entrén tillkommer."
    } satisfies LocalizedText,
    "reviewed": {
      en: 'As of July 2026',
      de: 'Stand Juli 2026',
      es: 'Actualizado en julio de 2026',
      nl: 'Stand juli 2026',
      sv: 'Uppdaterad juli 2026'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Easiest cultural day',
          de: 'Einfachster Kulturtag',
          es: 'El día cultural más fácil',
          nl: 'Eenvoudigste cultuurdag',
          sv: 'Enklaste kulturdagen'
        } satisfies LocalizedText,
        "text": {
          en: 'Choose Málaga for museums, a walkable historic centre, shopping and lunch by the city or port.',
          de: 'Málaga passt für Museen, eine gut begehbare Altstadt, Shopping und ein Mittagessen in der Stadt oder am Hafen.',
          es: 'Elegid Málaga para combinar museos, un casco histórico cómodo para caminar, compras y una comida en la ciudad o el puerto.',
          nl: 'Kies Málaga voor musea, een goed beloopbaar historisch centrum, winkelen en lunch in de stad of aan de haven.',
          sv: 'Välj Málaga för museer, en promenadvänlig gammal stad, shopping och lunch i staden eller vid hamnen.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Big history day',
          de: 'Großer Geschichtstag',
          es: 'Un gran día de historia',
          nl: 'Grote geschiedenisdag',
          sv: 'Stor historiedag'
        } satisfies LocalizedText,
        "text": {
          en: 'Choose Granada when the Alhambra, Moorish architecture and hilltop viewpoints are the main reason for going.',
          de: 'Granada ist richtig, wenn Alhambra, maurische Architektur und Aussichtspunkte der eigentliche Grund für den Ausflug sind.',
          es: 'Elegid Granada cuando la Alhambra, la arquitectura andalusí y los miradores sean el verdadero motivo de la salida.',
          nl: 'Kies Granada wanneer het Alhambra, Moorse architectuur en uitzichtpunten de belangrijkste reden voor de rit zijn.',
          sv: 'Välj Granada när Alhambra, morisk arkitektur och utsiktsplatser är den egentliga anledningen till resan.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Active nature day',
          de: 'Aktiver Naturtag',
          es: 'Un día activo en la naturaleza',
          nl: 'Actieve natuurdag',
          sv: 'Aktiv naturdag'
        } satisfies LocalizedText,
        "text": {
          en: 'Choose Caminito del Rey for a structured outdoor experience with advance booking, walking access and shuttle logistics.',
          de: 'Der Caminito del Rey bietet ein klar geplantes Naturerlebnis mit Reservierung, Zugangswegen und Shuttle.',
          es: 'Elegid el Caminito del Rey para una experiencia al aire libre bien estructurada, con reserva, acceso a pie y lanzadera.',
          nl: 'Kies Caminito del Rey voor een gestructureerde buitenervaring met reservering, aanlooproute en shuttle.',
          sv: 'Välj Caminito del Rey för en strukturerad naturupplevelse med bokning, anslutningsväg och transferbuss.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Longest scenic day',
          de: 'Längster Panoramatag',
          es: 'La ruta panorámica más larga',
          nl: 'Langste panoramadag',
          sv: 'Längsta panoramadagen'
        } satisfies LocalizedText,
        "text": {
          en: 'Choose Ronda for its gorge, Puente Nuevo and a slower road journey through changing Andalusian landscapes.',
          de: 'Ronda steht für die Schlucht, den Puente Nuevo und eine langsamere Fahrt durch wechselnde andalusische Landschaften.',
          es: 'Elegid Ronda por el desfiladero, el Puente Nuevo y un viaje más pausado entre paisajes andaluces cambiantes.',
          nl: 'Kies Ronda voor de kloof, de Puente Nuevo en een langzamere rit door wisselende Andalusische landschappen.',
          sv: 'Välj Ronda för ravinen, Puente Nuevo och en långsammare resa genom skiftande andalusiska landskap.'
        } satisfies LocalizedText
      }
    ]
  },
  "destinationIds": ['frigiliana.day-trips.malaga-city', 'frigiliana.day-trips.granada-alhambra', 'frigiliana.day-trips.caminito-del-rey', 'frigiliana.day-trips.ronda'] as const,
  "practical": {
    "title": {
      en: "Down from the village and back again",
      de: "Vom Dorf los und wieder hinauf",
      es: "Bajar del pueblo y volver a Frigiliana",
      nl: "Vanuit het dorp op pad en weer terug",
      sv: "Från byn ner till kusten och tillbaka"
    } satisfies LocalizedText,
    "intro": {
      en: "Your day starts at your accommodation in Frigiliana and ends with the walk from the car park or bus stop.",
      de: "Der Ausflug beginnt an eurer Unterkunft in Frigiliana und endet nach der Rückfahrt mit dem Fußweg vom Parkplatz oder der Haltestelle.",
      es: "El día empieza en vuestro alojamiento y termina con el recorrido a pie desde el aparcamiento o la parada.",
      nl: "De dag begint bij jullie verblijf in Frigiliana en eindigt met de wandeling vanaf de parkeerplaats of bushalte.",
      sv: "Dagen börjar vid ert boende i Frigiliana och slutar med promenaden från parkeringen eller busshållplatsen."
    } satisfies LocalizedText,
    "items": [
      {
        "id": "car" as const,
        "title": {
          en: "By car to the A-7",
          de: "Mit dem Auto zur A-7",
          es: "En coche hacia la A-7",
          nl: "Met de auto naar de A-7",
          sv: "Med bil till A-7"
        } satisfies LocalizedText,
        "text": {
          en: "The village access road takes you down to the coastal motorway. An early departure also includes reaching your parked car with everything you need for the day.",
          de: "Vom Dorf führt die Zufahrt hinunter zur Küstenautobahn. Für einen frühen Aufbruch gehören auch der Weg zum geparkten Auto und euer Gepäck dazu.",
          es: "La carretera de acceso baja del pueblo hasta la autovía de la costa. Salir temprano también supone llegar al coche aparcado con lo que lleváis para el día.",
          nl: "De toegangsweg loopt vanuit het dorp omlaag naar de kustsnelweg. Bij vroeg vertrekken hoort ook de wandeling naar de geparkeerde auto met jullie spullen voor de dag.",
          sv: "Tillfartsvägen går ner från byn till kustmotorvägen. En tidig avfärd omfattar också promenaden till den parkerade bilen med det ni behöver för dagen."
        } satisfies LocalizedText
      },
      {
        "id": "bus" as const,
        "title": {
          en: "Málaga via Nerja by bus",
          de: "Málaga mit Umstieg in Nerja",
          es: "Málaga con cambio en Nerja",
          nl: "Málaga met een overstap in Nerja",
          sv: "Málaga med byte i Nerja"
        } satisfies LocalizedText,
        "text": {
          en: "Travel from Frigiliana to Nerja first, then continue to Málaga. Before leaving, check that the connections work in both directions, particularly the final leg back to the village.",
          de: "Von Frigiliana fahrt ihr zuerst nach Nerja und von dort weiter nach Málaga. Vor dem Aufbruch braucht ihr für beide Richtungen passende Anschlüsse; besonders der letzte Abschnitt zurück ins Dorf ist wichtig.",
          es: "Primero vais de Frigiliana a Nerja y allí continuáis hacia Málaga. Antes de salir, comprobad los enlaces de ida y vuelta, especialmente el último tramo de regreso al pueblo.",
          nl: "Jullie reizen eerst van Frigiliana naar Nerja en daarna verder naar Málaga. Controleer voor vertrek de aansluitingen in beide richtingen, vooral het laatste deel terug naar het dorp.",
          sv: "Ni reser först från Frigiliana till Nerja och fortsätter sedan till Málaga. Kontrollera anslutningarna i båda riktningarna före avfärd, särskilt sista sträckan tillbaka till byn."
        } satisfies LocalizedText
      },
      {
        "id": "entry" as const,
        "title": {
          en: "Entry time comes first",
          de: "Einlasszeit vor Abfahrtszeit",
          es: "Primero, la hora de entrada",
          nl: "Het toegangstijdslot staat voorop",
          sv: "Entrétiden kommer först"
        } satisfies LocalizedText,
        "text": {
          en: "Book your Alhambra or Caminito ticket before setting your departure time. Add parking and access paths to the drive, plus the Caminito shuttle where your starting point requires it.",
          de: "Für die Alhambra und den Caminito bucht ihr zuerst den Eintritt. Zur Fahrt kommen Parken, Zugangswege und beim Caminito je nach Ausgangspunkt der Shuttle hinzu.",
          es: "Reservad la Alhambra o el Caminito antes de fijar la salida. Al trayecto se añaden aparcamiento y accesos a pie; en el Caminito, también la lanzadera según el punto de partida.",
          nl: "Boek eerst de Alhambra of Caminito en bepaal daarna de vertrektijd. Reken naast de rit ook parkeren en toegangspaden mee; bij de Caminito komt daar afhankelijk van het beginpunt de shuttle bij.",
          sv: "Boka Alhambra eller Caminito innan ni bestämmer avfärdstid. Lägg till parkering och gångvägar till körtiden; vid Caminito kan även skyttelbussen behövas beroende på startpunkt."
        } satisfies LocalizedText
      },
      {
        "id": "return" as const,
        "title": {
          en: "Back in Frigiliana",
          de: "Zurück nach Frigiliana",
          es: "De vuelta en Frigiliana",
          nl: "Terug in Frigiliana",
          sv: "Tillbaka i Frigiliana"
        } satisfies LocalizedText,
        "text": {
          en: "On your return, park by the village and walk back to your accommodation. Dinner in the village can follow on foot; another restaurant stop on the coast adds to the journey home.",
          de: "Nach der Rückfahrt parkt ihr wieder am Dorf und geht zur Unterkunft. Essen im Dorf lässt sich dann zu Fuß anschließen; ein weiterer Restaurantstopp an der Küste verlängert den Rückweg.",
          es: "Al regresar, aparcáis junto al pueblo y camináis hasta el alojamiento. Podéis salir a cenar a pie por Frigiliana; otra parada para comer en la costa alarga el regreso.",
          nl: "Bij terugkomst parkeren jullie bij het dorp en lopen naar het verblijf. Daarna kunnen jullie te voet uit eten in Frigiliana; een extra restaurantstop aan de kust verlengt de terugreis.",
          sv: "Efter hemresan parkerar ni vid byn och går till boendet. Sedan kan ni promenera ut för att äta i Frigiliana; ytterligare ett restaurangstopp vid kusten förlänger hemvägen."
        } satisfies LocalizedText
      }
    ]
  },
  "combine": {
    "title": {
      en: 'Balance the day with the rest of your stay',
      de: 'Den Ausflug mit dem restlichen Aufenthalt ausbalancieren',
      es: 'Equilibrad la excursión con el resto de la estancia',
      nl: 'Combineer de dagtocht met de rest van jullie verblijf',
      sv: 'Balansera utflykten med resten av vistelsen'
    } satisfies LocalizedText,
    "intro": {
      en: 'After a day of culture, walking or driving, coming back towards the coast feels restorative. Keep the following day lighter or plan dinner before you leave.',
      de: 'Nach einem Tag voller Kultur, Bewegung oder Fahrt wirkt die Rückkehr Richtung Küste erholsam. Haltet den Folgetag leichter oder plant das Abendessen schon vor der Abfahrt.',
      es: 'Después de un día de cultura, caminata o carretera, volver hacia la costa resulta reparador. Haced más ligero el día siguiente o dejad organizada la cena antes de salir.',
      nl: 'Na een dag vol cultuur, wandelen of autorijden voelt de terugkeer richting kust verfrissend. Houd de volgende dag lichter of regel het diner voordat jullie vertrekken.',
      sv: 'Efter en dag med kultur, vandring eller bilkörning känns återkomsten mot kusten uppfriskande. Håll nästa dag lättare eller planera middagen innan ni åker.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Beaches & coast',
          de: 'Strände & Küste',
          es: 'Playas y costa',
          nl: 'Stranden & kust',
          sv: 'Stränder & kust'
        } satisfies LocalizedText,
        "text": {
          en: 'Follow a longer excursion with a relaxed beach day around Nerja and the eastern Costa del Sol.',
          de: 'Lasst auf einen längeren Ausflug einen entspannten Strandtag rund um Nerja und an der östlichen Costa del Sol folgen.',
          es: 'Después de una excursión larga, dedicad el día siguiente a una playa tranquila en torno a Nerja y la Costa del Sol oriental.',
          nl: 'Laat op een langere uitstap een ontspannen stranddag rond Nerja en aan de oostelijke Costa del Sol volgen.',
          sv: 'Följ en längre utflykt med en lugn stranddag kring Nerja och den östra delen av Costa del Sol.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_beaches_authority' as const,
        "linkLabel": {
          en: 'See the beach guide',
          de: 'Zum Strand-Guide',
          es: 'Ver la guía de playas',
          nl: 'Bekijk de strandgids',
          sv: 'Se strandguiden'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Dining',
          de: 'Essen gehen',
          es: 'Restaurantes',
          nl: 'Uit eten',
          sv: 'Restauranger'
        } satisfies LocalizedText,
        "text": {
          en: 'Choose a local restaurant for the evening you return, or reserve somewhere near your route home.',
          de: 'Wählt für den Abend nach der Rückkehr ein Restaurant im Dorf oder reserviert einen passenden Ort entlang eurer Rückroute.',
          es: 'Elegid un restaurante del pueblo para la noche del regreso o reservad un lugar conveniente en la ruta de vuelta.',
          nl: 'Kies voor de avond na terugkomst een restaurant in het dorp of reserveer een handige plek langs de terugroute.',
          sv: 'Välj en lokal restaurang för kvällen när ni återvänder eller boka ett passande ställe längs vägen hem.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_food_authority' as const,
        "linkLabel": {
          en: 'See the restaurant guide',
          de: 'Zum Restaurant-Guide',
          es: 'Ver la guía de restaurantes',
          nl: 'Bekijk de restaurantgids',
          sv: 'Se restaurangguiden'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: "Back to your stay in the village",
      de: "Zurück in eure Unterkunft im Dorf",
      es: "Volver a vuestro alojamiento en el pueblo",
      nl: "Terug naar jullie verblijf in het dorp",
      sv: "Tillbaka till ert boende i byn"
    } satisfies LocalizedText,
    "lead": {
      en: "After the day out, the car stays parked. At our Casa AMARA, Lounis, Zaid, Maha and Farah each welcome two guests. Lounis, Zaid and Maha have private terraces for an evening outdoors; Farah is the compact suite in the same house.",
      de: "Nach dem Ausflug bleibt das Auto geparkt. In unserer Casa AMARA wohnen jeweils zwei Gäste in Lounis, Zaid, Maha oder Farah. Lounis, Zaid und Maha haben private Terrassen für den Abend draußen; Farah ist die kompakte Suite im selben Haus.",
      es: "Después de la excursión, el coche queda aparcado. En nuestra Casa AMARA, Lounis, Zaid, Maha y Farah alojan a dos personas cada uno. Lounis, Zaid y Maha tienen terrazas privadas para pasar la tarde al aire libre; Farah es la suite compacta de la misma casa.",
      nl: "Na de dagtocht blijft de auto staan. In ons Casa AMARA ontvangen Lounis, Zaid, Maha en Farah elk twee gasten. Lounis, Zaid en Maha hebben privéterrassen voor de avond buiten; Farah is de compacte suite in hetzelfde huis.",
      sv: "Efter utflykten står bilen kvar på parkeringen. I vårt Casa AMARA tar Lounis, Zaid, Maha och Farah emot två gäster vardera. Lounis, Zaid och Maha har privata terrasser för kvällen utomhus; Farah är den kompakta sviten i samma hus."
    } satisfies LocalizedText,
    "nextCta": {
      en: "Our stays in Frigiliana",
      de: "Unsere Unterkünfte in Frigiliana",
      es: "Nuestros alojamientos en Frigiliana",
      nl: "Onze verblijven in Frigiliana",
      sv: "Våra boenden i Frigiliana"
    } satisfies LocalizedText,
    "parkingCta": {
      en: "Parking for your return",
      de: "Parken für die Rückkehr",
      es: "Aparcar al volver",
      nl: "Parkeren bij terugkomst",
      sv: "Parkering när ni kommer tillbaka"
    } satisfies LocalizedText
  }
};

export const frigilianaDayTripsContent: Record<
  AmaraLanguage,
  FrigilianaDayTripsPageCopy
> = {
  en: resolveLocale(frigilianaDayTripsContentCopy, 'en'),
  de: resolveLocale(frigilianaDayTripsContentCopy, 'de'),
  es: resolveLocale(frigilianaDayTripsContentCopy, 'es'),
  nl: resolveLocale(frigilianaDayTripsContentCopy, 'nl'),
  sv: resolveLocale(frigilianaDayTripsContentCopy, 'sv')
};
