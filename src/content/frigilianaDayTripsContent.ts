import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

interface DayTripDestination {
  id: 'malaga' | 'granada' | 'caminito' | 'ronda';
  kicker: string;
  title: string;
  summary: string;
  facts: {
    label: string;
    value: string;
  }[];
  planningTitle: string;
  callout: string;
  details: string;
  officialHref: string;
  officialLabel: string;
}

export interface FrigilianaDayTripsPageCopy {
  footerHighlights: {
    dayTrips: string;
    beaches: string;
    restaurants: string;
  };
  hero: {
    kicker: string;
    title: string;
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
  destinations: DayTripDestination[];
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
    availabilityCta: string;
    staysCta: string;
  };
}

const officialLinks = {
  malaga: 'https://visita.malaga.eu/',
  alhambraEn: 'https://www.alhambra-patronato.es/en/visit',
  alhambraEs: 'https://www.alhambra-patronato.es/visitar',
  caminitoEn: 'https://www.caminitodelrey.info/en',
  caminitoEs: 'https://www.caminitodelrey.info/es',
  ronda: 'https://info.turismoderonda.es/'
} as const;

export const frigilianaDayTripsSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-day-trips-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
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
export const frigilianaDayTripsContent: Record<
  AmaraLanguage,
  FrigilianaDayTripsPageCopy
> = {
  en: {
    footerHighlights: {
      dayTrips: 'Day trips',
      beaches: 'Beach guide',
      restaurants: 'Restaurant guide'
    },
    hero: {
      kicker: 'Andalusia guide',
      title:
        'Day trips from Frigiliana: culture, history and scenic drives',
      paragraphs: [
        'Staying in Frigiliana gives you a rare advantage: you sleep in calm hill air, yet some of Andalusia’s most memorable places are within reach for a day.',
        'Frigiliana remains your base; the day trip is the accent. Pick one main highlight, add a relaxed meal and perhaps one extra stop, then return for a quiet village evening instead of turning the day into a checklist.'
      ],
      imageAlt:
        'Whitewashed Frigiliana in the hills, a calm base for day trips through Andalusia',
      availabilityCta: 'Check availability'
    },
    sectionNav: {
      overview: 'Plan simply',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Practical'
    },
    overview: {
      title: 'Choose one memorable focus for the day',
      intro:
        'The best day trips from Frigiliana are not about collecting landmarks. They work when the destination sets the rhythm and the rest of the day stays flexible.',
      rule:
        'Simple planning rule: choose one main highlight, leave by around 09:00 and keep enough margin for a calm return to the village.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Easiest cultural day',
          text:
            'Choose Málaga for museums, a walkable historic centre, shopping and lunch by the city or port.'
        },
        {
          title: 'Big history day',
          text:
            'Choose Granada when the Alhambra, Moorish architecture and hilltop viewpoints are the main reason for going.'
        },
        {
          title: 'Active nature day',
          text:
            'Choose Caminito del Rey for a structured outdoor experience with advance booking, walking access and shuttle logistics.'
        },
        {
          title: 'Longest scenic day',
          text:
            'Choose Ronda for its gorge, Puente Nuevo and a slower road journey through changing Andalusian landscapes.'
        }
      ]
    },
    destinations: [
      {
        id: 'malaga',
        kicker: 'City & culture',
        title: 'Málaga City',
        summary:
          'Málaga is the easiest cultural day trip from Frigiliana: a walkable historic centre, museums, excellent food and a modern port atmosphere. It is the most flexible choice when you want a rewarding day without a rigid schedule.',
        facts: [
          {
            label: 'Typical drive',
            value: 'About 50 minutes via the A-7, depending on traffic'
          },
          {
            label: 'Best for',
            value: 'Museums, shopping and dining'
          },
          {
            label: 'Style',
            value: 'Easy, adjustable and relatively low-stress'
          }
        ],
        planningTitle: 'Plan it like this',
        callout:
          'A central car park around the port and Muelle Uno is a practical starting point, but check current access and availability before you leave.',
        details:
          'Walk into the centre along the port and park, then choose one cultural anchor: the Museo Picasso Málaga or the Alcazaba both work well. Leave room for an unhurried lunch around Atarazanas Market rather than trying to cover every museum.',
        officialHref: officialLinks.malaga,
        officialLabel: 'Official Málaga visitor information'
      },
      {
        id: 'granada',
        kicker: 'History & romance',
        title: 'Granada and the Alhambra',
        summary:
          'Granada is an Andalusian classic: Moorish architecture, tea houses, the Albaicín and the Alhambra framed by the Sierra Nevada. It deserves a full day and rewards the extra planning.',
        facts: [
          {
            label: 'Typical drive',
            value: 'About 1 hour 10 minutes inland, depending on traffic'
          },
          {
            label: 'Best for',
            value: 'Architecture, history and viewpoints'
          },
          {
            label: 'Style',
            value: 'A full day that is worth the effort'
          }
        ],
        planningTitle: 'The ticket reality',
        callout:
          'Alhambra demand is high. Book through the official channel as soon as your dates are fixed and check the timed entry shown for the Nasrid Palaces.',
        details:
          'If Alhambra tickets are unavailable, the day still works beautifully: explore the Albaicín and finish at Mirador de San Nicolás for views across to the palace complex. Keep the schedule light enough to enjoy Granada rather than rushing between districts.',
        officialHref: officialLinks.alhambraEn,
        officialLabel: 'Official Alhambra visit and tickets'
      },
      {
        id: 'caminito',
        kicker: 'Adventure',
        title: 'Caminito del Rey',
        summary:
          'Caminito del Rey is a spectacular route through the Gaitanes Gorge, with paths and boardwalks attached to dramatic limestone walls. It combines geology, broad views and a genuine sense of occasion.',
        facts: [
          {
            label: 'Typical drive',
            value: 'About 1 hour 30 minutes, depending on traffic'
          },
          {
            label: 'Best for',
            value: 'Nature, active days and photography'
          },
          {
            label: 'Style',
            value: 'Structured: booking, access walk and shuttle'
          }
        ],
        planningTitle: 'Know before you go',
        callout:
          'The route is linear and one-way. Allow roughly 3–4 hours for the full experience, including access paths, and plan the shuttle connection back to your starting point.',
        details:
          'Reserve in advance through the official website. General admission is suitable if you prefer to walk independently; an official guided visit is optional. The route is not a good fit for strong vertigo, and children under eight are not permitted.',
        officialHref: officialLinks.caminitoEn,
        officialLabel: 'Official Caminito del Rey information and tickets'
      },
      {
        id: 'ronda',
        kicker: 'Scenic drive',
        title: 'Ronda and the gorge',
        summary:
          'Ronda is defined by the Puente Nuevo spanning the deep Tajo gorge. The town is cinematic, historic and intensely scenic, and the longer journey makes it feel like a true day out.',
        facts: [
          {
            label: 'Typical drive',
            value: 'About 2 hours each way, depending on route and traffic'
          },
          {
            label: 'Best for',
            value: 'Landscapes, romance and iconic views'
          },
          {
            label: 'Style',
            value: 'A longer drive with a slower pace'
          }
        ],
        planningTitle: 'Make the journey part of the day',
        callout:
          'The changing landscapes and wide views are part of Ronda’s appeal, so leave enough daylight and avoid squeezing other major stops into the same trip.',
        details:
          'Leave Frigiliana by around 09:00, explore the old and new sides of the gorge on foot and take time for a relaxed lunch. Starting early gives you a comfortable margin for the return before late evening.',
        officialHref: officialLinks.ronda,
        officialLabel: 'Official Ronda visitor information'
      }
    ],
    practical: {
      title: 'Practical essentials',
      intro:
        'A small amount of preparation makes these days much calmer. Treat driving times as estimates and recheck tickets, opening hours, road conditions and public transport close to your date.',
      items: [
        {
          title: 'Car and public transport',
          text:
            'A car is strongly recommended for Granada, Ronda and Caminito del Rey. Málaga may be possible by public transport, but check current connections and the return schedule before relying on it.'
        },
        {
          title: 'Summer heat',
          text:
            'Inland destinations can become extremely hot in summer. Start early, carry water and build shade and rest into the middle of the day.'
        },
        {
          title: 'Sundays and opening hours',
          text:
            'Sunday opening varies by museum, shop and restaurant. Check the exact places you want to visit instead of assuming a general schedule.'
        },
        {
          title: 'A calm return',
          text:
            'Leave margin for traffic, parking and an unhurried meal. Returning before late evening preserves the contrast that makes Frigiliana such a rewarding base.'
        }
      ]
    },
    combine: {
      title: 'Balance the day with the rest of your stay',
      intro:
        'After a day of culture, walking or driving, coming back towards the coast feels restorative. Keep the following day lighter or plan dinner before you leave.',
      items: [
        {
          title: 'Beaches',
          text:
            'Follow a longer excursion with a relaxed beach day around Nerja and the eastern Costa del Sol.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Dining',
          text:
            'Choose a local restaurant for the evening you return, or reserve somewhere near your route home.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        }
      ]
    },
    closing: {
      title: 'The joy of returning',
      lead:
        'After a day of culture and movement, the drive back up the hill feels like a reset: quieter air, cooler temperatures and an unhurried evening in the village.',
      availabilityCta: 'Check availability',
      staysCta: 'View Frigiliana stays'
    }
  },
  de: {
    footerHighlights: {
      dayTrips: 'Tagesausflüge',
      beaches: 'Strand-Guide',
      restaurants: 'Restaurant-Guide'
    },
    hero: {
      kicker: 'Andalusien-Guide',
      title:
        'Tagesausflüge ab Frigiliana: Kultur, Geschichte und Panoramastraßen',
      paragraphs: [
        'Ein Aufenthalt in Frigiliana bietet einen seltenen Vorteil: Ihr schlaft in der ruhigen Luft der Hügel und erreicht dennoch einige der eindrucksvollsten Orte Andalusiens innerhalb eines Tages.',
        'Frigiliana bleibt eure Basis; der Ausflug setzt den Akzent. Wählt ein großes Highlight, ergänzt ein entspanntes Essen und vielleicht einen weiteren Stopp und kehrt anschließend zu einem ruhigen Abend im Dorf zurück, statt den Tag in eine Checkliste zu verwandeln.'
      ],
      imageAlt:
        'Das weiße Frigiliana in den Hügeln als ruhiger Ausgangspunkt für Ausflüge durch Andalusien',
      availabilityCta: 'Verfügbarkeit prüfen'
    },
    sectionNav: {
      overview: 'Einfach planen',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Ein prägendes Erlebnis pro Tag',
      intro:
        'Die besten Tagesausflüge ab Frigiliana leben nicht davon, möglichst viele Sehenswürdigkeiten abzuhaken. Sie funktionieren, wenn das Hauptziel den Rhythmus vorgibt und der Rest des Tages flexibel bleibt.',
      rule:
        'Einfache Planungsregel: Wählt ein Hauptziel, fahrt gegen 09:00 Uhr los und lasst genügend Puffer für eine ruhige Rückkehr ins Dorf.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'Einfachster Kulturtag',
          text:
            'Málaga passt für Museen, eine gut begehbare Altstadt, Shopping und ein Mittagessen in der Stadt oder am Hafen.'
        },
        {
          title: 'Großer Geschichtstag',
          text:
            'Granada ist richtig, wenn Alhambra, maurische Architektur und Aussichtspunkte der eigentliche Grund für den Ausflug sind.'
        },
        {
          title: 'Aktiver Naturtag',
          text:
            'Der Caminito del Rey bietet ein klar geplantes Naturerlebnis mit Reservierung, Zugangswegen und Shuttle.'
        },
        {
          title: 'Längster Panoramatag',
          text:
            'Ronda steht für die Schlucht, den Puente Nuevo und eine langsamere Fahrt durch wechselnde andalusische Landschaften.'
        }
      ]
    },
    destinations: [
      {
        id: 'malaga',
        kicker: 'Stadt & Kultur',
        title: 'Málaga',
        summary:
          'Málaga ist der unkomplizierteste kulturelle Tagesausflug ab Frigiliana: eine gut begehbare Altstadt, Museen, hervorragendes Essen und moderne Hafenatmosphäre. Die Stadt eignet sich besonders, wenn ihr einen lohnenden Tag ohne starren Zeitplan möchtet.',
        facts: [
          {
            label: 'Typische Fahrzeit',
            value: 'Etwa 50 Minuten über die A-7, je nach Verkehr'
          },
          {
            label: 'Ideal für',
            value: 'Museen, Shopping und gutes Essen'
          },
          {
            label: 'Charakter',
            value: 'Einfach, flexibel und vergleichsweise entspannt'
          }
        ],
        planningTitle: 'So lässt sich der Tag aufbauen',
        callout:
          'Ein zentrales Parkhaus im Bereich Hafen und Muelle Uno ist ein praktischer Ausgangspunkt. Prüft vor der Abfahrt jedoch die aktuelle Zufahrt und Verfügbarkeit.',
        details:
          'Geht vom Hafen durch den Park ins Zentrum und wählt einen kulturellen Schwerpunkt: Das Museo Picasso Málaga oder die Alcazaba eignen sich beide. Plant lieber ein entspanntes Mittagessen rund um den Mercado de Atarazanas ein, als jedes Museum besuchen zu wollen.',
        officialHref: officialLinks.malaga,
        officialLabel: 'Offizielle Besucherinformationen für Málaga'
      },
      {
        id: 'granada',
        kicker: 'Geschichte & Romantik',
        title: 'Granada und die Alhambra',
        summary:
          'Granada ist ein andalusischer Klassiker: maurische Architektur, Teehäuser, der Albaicín und die Alhambra vor der Sierra Nevada. Die Stadt verdient einen ganzen Tag und belohnt die zusätzliche Planung.',
        facts: [
          {
            label: 'Typische Fahrzeit',
            value: 'Etwa 1 Stunde 10 Minuten ins Landesinnere, je nach Verkehr'
          },
          {
            label: 'Ideal für',
            value: 'Architektur, Geschichte und Aussichtspunkte'
          },
          {
            label: 'Charakter',
            value: 'Ein ganzer Tag, der den Aufwand wert ist'
          }
        ],
        planningTitle: 'Die Realität der Tickets',
        callout:
          'Die Nachfrage für die Alhambra ist hoch. Bucht über den offiziellen Kanal, sobald eure Daten feststehen, und beachtet das Zeitfenster für die Nasridenpaläste auf dem Ticket.',
        details:
          'Wenn keine Alhambra-Tickets mehr verfügbar sind, lohnt sich der Tag trotzdem: Erkundet den Albaicín und beendet ihn am Mirador de San Nicolás mit Blick auf die Palastanlage. Haltet den Ablauf bewusst schlank, damit Granada nicht zur Hetzjagd zwischen Stadtvierteln wird.',
        officialHref: officialLinks.alhambraEn,
        officialLabel: 'Offizielle Alhambra-Informationen und Tickets'
      },
      {
        id: 'caminito',
        kicker: 'Abenteuer',
        title: 'Caminito del Rey',
        summary:
          'Der Caminito del Rey führt spektakulär durch die Gaitanes-Schlucht, teils auf Wegen, teils auf Stegen an steilen Kalksteinwänden. Geologie, weite Ausblicke und das besondere Gefühl dieses Ortes machen den Tag unverwechselbar.',
        facts: [
          {
            label: 'Typische Fahrzeit',
            value: 'Etwa 1 Stunde 30 Minuten, je nach Verkehr'
          },
          {
            label: 'Ideal für',
            value: 'Natur, aktive Tage und Fotografie'
          },
          {
            label: 'Charakter',
            value: 'Strukturiert: Reservierung, Zugangsweg und Shuttle'
          }
        ],
        planningTitle: 'Vorher wissen',
        callout:
          'Die Route ist linear und nur in eine Richtung begehbar. Rechnet für das gesamte Erlebnis einschließlich der Zugangswege mit etwa 3–4 Stunden und plant den Shuttle zurück zum Ausgangspunkt ein.',
        details:
          'Reserviert vorab über die offizielle Website. Der allgemeine Eintritt reicht, wenn ihr selbstständig gehen möchtet; eine offizielle Führung ist optional. Bei starker Höhenangst ist die Route ungeeignet, und Kinder unter acht Jahren dürfen nicht hinein.',
        officialHref: officialLinks.caminitoEn,
        officialLabel: 'Offizielle Caminito-Informationen und Tickets'
      },
      {
        id: 'ronda',
        kicker: 'Panoramafahrt',
        title: 'Ronda und die Schlucht',
        summary:
          'Ronda wird vom Puente Nuevo geprägt, der die tiefe Tajo-Schlucht überspannt. Die Stadt ist filmreif, geschichtsträchtig und ausgesprochen malerisch; durch die längere Anfahrt fühlt sie sich wie ein echter großer Ausflug an.',
        facts: [
          {
            label: 'Typische Fahrzeit',
            value: 'Etwa 2 Stunden pro Strecke, je nach Route und Verkehr'
          },
          {
            label: 'Ideal für',
            value: 'Landschaften, Romantik und ikonische Ausblicke'
          },
          {
            label: 'Charakter',
            value: 'Längere Fahrt mit langsamerem Rhythmus'
          }
        ],
        planningTitle: 'Die Fahrt gehört zum Tag',
        callout:
          'Wechselnde Landschaften und weite Blicke sind Teil von Rondas Reiz. Plant genügend Tageslicht ein und kombiniert den Ausflug nicht mit weiteren großen Zielen.',
        details:
          'Fahrt gegen 09:00 Uhr in Frigiliana los, erkundet die alte und die neue Seite der Schlucht zu Fuß und nehmt euch Zeit für ein ruhiges Mittagessen. Der frühe Start schafft einen angenehmen Puffer für die Rückfahrt vor dem späten Abend.',
        officialHref: officialLinks.ronda,
        officialLabel: 'Offizielle Besucherinformationen für Ronda'
      }
    ],
    practical: {
      title: 'Praktische Grundlagen',
      intro:
        'Ein wenig Vorbereitung macht diese Tage deutlich ruhiger. Betrachtet Fahrzeiten als Richtwerte und prüft Tickets, Öffnungszeiten, Straßenbedingungen und öffentliche Verbindungen kurz vor eurem Termin erneut.',
      items: [
        {
          title: 'Auto und öffentliche Verkehrsmittel',
          text:
            'Für Granada, Ronda und den Caminito del Rey ist ein Auto sehr zu empfehlen. Málaga kann mit öffentlichen Verkehrsmitteln funktionieren; prüft aber aktuelle Verbindungen und die Rückfahrt, bevor ihr euch darauf verlasst.'
        },
        {
          title: 'Sommerhitze',
          text:
            'Im Landesinneren kann es im Sommer extrem heiß werden. Startet früh, nehmt Wasser mit und plant für die Mittagszeit Schatten und Pausen ein.'
        },
        {
          title: 'Sonntage und Öffnungszeiten',
          text:
            'Sonntags unterscheiden sich die Öffnungszeiten je nach Museum, Geschäft und Restaurant. Prüft eure konkreten Ziele, statt von einem allgemeinen Rhythmus auszugehen.'
        },
        {
          title: 'Ruhige Rückkehr',
          text:
            'Lasst Puffer für Verkehr, Parkplatzsuche und ein entspanntes Essen. Eine Rückkehr vor dem späten Abend bewahrt den Kontrast, der Frigiliana als Basis so angenehm macht.'
        }
      ]
    },
    combine: {
      title: 'Den Ausflug mit dem restlichen Aufenthalt ausbalancieren',
      intro:
        'Nach einem Tag voller Kultur, Bewegung oder Fahrt wirkt die Rückkehr Richtung Küste erholsam. Haltet den Folgetag leichter oder plant das Abendessen schon vor der Abfahrt.',
      items: [
        {
          title: 'Strände',
          text:
            'Lasst auf einen längeren Ausflug einen entspannten Strandtag rund um Nerja und an der östlichen Costa del Sol folgen.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Essen gehen',
          text:
            'Wählt für den Abend nach der Rückkehr ein Restaurant im Dorf oder reserviert einen passenden Ort entlang eurer Rückroute.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurant-Guide'
        }
      ]
    },
    closing: {
      title: 'Die Freude am Zurückkommen',
      lead:
        'Nach einem Tag voller Kultur und Bewegung wirkt die Fahrt zurück in die Hügel wie ein Neustart: ruhigere Luft, kühlere Temperaturen und ein Abend ohne Eile im Dorf.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Unterkünfte in Frigiliana ansehen'
    }
  },
  es: {
    footerHighlights: {
      dayTrips: 'Excursiones',
      beaches: 'Guía de playas',
      restaurants: 'Guía de restaurantes'
    },
    hero: {
      kicker: 'Guía de Andalucía',
      title:
        'Excursiones desde Frigiliana: cultura, historia y rutas panorámicas',
      paragraphs: [
        'Alojarse en Frigiliana ofrece una ventaja poco habitual: dormís en la tranquilidad de las colinas y, aun así, podéis llegar en el día a algunos de los lugares más memorables de Andalucía.',
        'Frigiliana sigue siendo vuestra base; la excursión pone el acento. Elegid un gran atractivo, añadid una comida sin prisas y quizá una parada más, y regresad para disfrutar de una noche tranquila en el pueblo en lugar de convertir el día en una lista de obligaciones.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana entre colinas como base tranquila para recorrer Andalucía',
      availabilityCta: 'Consultar disponibilidad'
    },
    sectionNav: {
      overview: 'Plan sencillo',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Información útil'
    },
    overview: {
      title: 'Un gran motivo para cada día',
      intro:
        'Las mejores excursiones desde Frigiliana no consisten en acumular monumentos. Funcionan cuando el destino principal marca el ritmo y el resto de la jornada conserva cierta flexibilidad.',
      rule:
        'Regla sencilla: elegid un atractivo principal, salid hacia las 09:00 y dejad margen suficiente para regresar al pueblo sin prisas.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'El día cultural más fácil',
          text:
            'Elegid Málaga para combinar museos, un casco histórico cómodo para caminar, compras y una comida en la ciudad o el puerto.'
        },
        {
          title: 'Un gran día de historia',
          text:
            'Elegid Granada cuando la Alhambra, la arquitectura andalusí y los miradores sean el verdadero motivo de la salida.'
        },
        {
          title: 'Un día activo en la naturaleza',
          text:
            'Elegid el Caminito del Rey para una experiencia al aire libre bien estructurada, con reserva, acceso a pie y lanzadera.'
        },
        {
          title: 'La ruta panorámica más larga',
          text:
            'Elegid Ronda por el desfiladero, el Puente Nuevo y un viaje más pausado entre paisajes andaluces cambiantes.'
        }
      ]
    },
    destinations: [
      {
        id: 'malaga',
        kicker: 'Ciudad y cultura',
        title: 'Málaga',
        summary:
          'Málaga es la excursión cultural más sencilla desde Frigiliana: un centro histórico cómodo para recorrer a pie, museos, muy buena gastronomía y un puerto contemporáneo. Es la opción más flexible si queréis un día completo sin un horario rígido.',
        facts: [
          {
            label: 'Trayecto habitual',
            value: 'Unos 50 minutos por la A-7, según el tráfico'
          },
          {
            label: 'Ideal para',
            value: 'Museos, compras y gastronomía'
          },
          {
            label: 'Estilo',
            value: 'Fácil, adaptable y relativamente tranquilo'
          }
        ],
        planningTitle: 'Una forma sencilla de organizarlo',
        callout:
          'Un aparcamiento céntrico en la zona del puerto y Muelle Uno es un buen punto de partida, aunque conviene comprobar el acceso y la disponibilidad antes de salir.',
        details:
          'Caminad hacia el centro por el puerto y el parque y escoged un foco cultural: el Museo Picasso Málaga o la Alcazaba funcionan muy bien. Reservad tiempo para comer con calma en torno al Mercado de Atarazanas en lugar de intentar visitar todos los museos.',
        officialHref: officialLinks.malaga,
        officialLabel: 'Información turística oficial de Málaga'
      },
      {
        id: 'granada',
        kicker: 'Historia y romanticismo',
        title: 'Granada y la Alhambra',
        summary:
          'Granada es un clásico andaluz: arquitectura nazarí, teterías, el Albaicín y la Alhambra con Sierra Nevada al fondo. Merece un día completo y recompensa la planificación adicional.',
        facts: [
          {
            label: 'Trayecto habitual',
            value: 'Aproximadamente 1 hora y 10 minutos hacia el interior'
          },
          {
            label: 'Ideal para',
            value: 'Arquitectura, historia y miradores'
          },
          {
            label: 'Estilo',
            value: 'Un día completo que merece el esfuerzo'
          }
        ],
        planningTitle: 'La realidad de las entradas',
        callout:
          'La demanda de la Alhambra es alta. Reservad por el canal oficial en cuanto tengáis las fechas y comprobad la hora asignada para los Palacios Nazaríes.',
        details:
          'Si ya no quedan entradas para la Alhambra, la excursión sigue mereciendo mucho la pena: recorred el Albaicín y terminad en el Mirador de San Nicolás contemplando el conjunto palaciego. Mantened el programa ligero para disfrutar de Granada sin correr de un barrio a otro.',
        officialHref: officialLinks.alhambraEs,
        officialLabel: 'Visita y entradas oficiales de la Alhambra'
      },
      {
        id: 'caminito',
        kicker: 'Aventura',
        title: 'Caminito del Rey',
        summary:
          'El Caminito del Rey recorre de forma espectacular el Desfiladero de los Gaitanes, con senderos y pasarelas sujetas a grandes paredes de caliza. Combina geología, vistas amplias y una auténtica sensación de aventura.',
        facts: [
          {
            label: 'Trayecto habitual',
            value: 'Aproximadamente 1 hora y 30 minutos, según el tráfico'
          },
          {
            label: 'Ideal para',
            value: 'Naturaleza, actividad y fotografía'
          },
          {
            label: 'Estilo',
            value: 'Estructurado: reserva, acceso a pie y lanzadera'
          }
        ],
        planningTitle: 'Lo que conviene saber',
        callout:
          'El recorrido es lineal y de sentido único. Calculad unas 3–4 horas para la experiencia completa, incluidos los caminos de acceso, y planificad la lanzadera de regreso al punto de partida.',
        details:
          'Reservad con antelación en la web oficial. La entrada general es adecuada si preferís caminar por vuestra cuenta; la visita guiada oficial es opcional. No es una buena opción si sufrís vértigo intenso y no se permite el acceso a menores de ocho años.',
        officialHref: officialLinks.caminitoEs,
        officialLabel: 'Información y entradas oficiales del Caminito'
      },
      {
        id: 'ronda',
        kicker: 'Ruta panorámica',
        title: 'Ronda y el desfiladero',
        summary:
          'Ronda está marcada por el Puente Nuevo, que cruza el profundo Tajo. La ciudad es cinematográfica, histórica y muy fotogénica; el trayecto más largo hace que se sienta como una auténtica jornada de viaje.',
        facts: [
          {
            label: 'Trayecto habitual',
            value: 'Unas 2 horas por sentido, según la ruta y el tráfico'
          },
          {
            label: 'Ideal para',
            value: 'Paisajes, romanticismo y vistas emblemáticas'
          },
          {
            label: 'Estilo',
            value: 'Más carretera y un ritmo más lento'
          }
        ],
        planningTitle: 'El viaje forma parte del día',
        callout:
          'Los paisajes cambiantes y las vistas abiertas son parte del atractivo de Ronda. Salid con suficiente luz y no añadáis otra visita importante a la misma jornada.',
        details:
          'Salid de Frigiliana hacia las 09:00, recorred a pie los dos lados del desfiladero y reservad tiempo para una comida tranquila. Empezar temprano deja un margen cómodo para regresar antes de que se haga tarde.',
        officialHref: officialLinks.ronda,
        officialLabel: 'Información turística oficial de Ronda'
      }
    ],
    practical: {
      title: 'Información práctica esencial',
      intro:
        'Un poco de preparación hace que estas jornadas sean mucho más tranquilas. Considerad los tiempos de conducción como orientativos y volved a comprobar entradas, horarios, carreteras y transporte público cerca de vuestra fecha.',
      items: [
        {
          title: 'Coche y transporte público',
          text:
            'El coche es muy recomendable para Granada, Ronda y el Caminito del Rey. Málaga puede ser viable en transporte público, pero comprobad las conexiones actuales y el regreso antes de depender de ellas.'
        },
        {
          title: 'Calor en verano',
          text:
            'Los destinos del interior pueden alcanzar temperaturas extremas en verano. Empezad temprano, llevad agua y reservad sombra y pausas para las horas centrales.'
        },
        {
          title: 'Domingos y horarios',
          text:
            'La apertura dominical cambia según el museo, la tienda o el restaurante. Comprobad los lugares concretos que queréis visitar en lugar de dar por hecho un horario general.'
        },
        {
          title: 'Regreso sin prisas',
          text:
            'Dejad margen para el tráfico, el aparcamiento y una comida tranquila. Volver antes de que sea demasiado tarde conserva el contraste que convierte a Frigiliana en una base tan agradable.'
        }
      ]
    },
    combine: {
      title: 'Equilibrad la excursión con el resto de la estancia',
      intro:
        'Después de un día de cultura, caminata o carretera, volver hacia la costa resulta reparador. Haced más ligero el día siguiente o dejad organizada la cena antes de salir.',
      items: [
        {
          title: 'Playas',
          text:
            'Después de una excursión larga, dedicad el día siguiente a una playa tranquila en torno a Nerja y la Costa del Sol oriental.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Restaurantes',
          text:
            'Elegid un restaurante del pueblo para la noche del regreso o reservad un lugar conveniente en la ruta de vuelta.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        }
      ]
    },
    closing: {
      title: 'El placer de regresar',
      lead:
        'Después de un día de cultura y movimiento, subir de nuevo hacia las colinas se siente como un reinicio: aire más tranquilo, temperaturas más frescas y una noche sin prisas en el pueblo.',
      availabilityCta: 'Consultar disponibilidad',
      staysCta: 'Ver alojamientos en Frigiliana'
    }
  },
  nl: {
    footerHighlights: {
      dayTrips: 'Dagtochten',
      beaches: 'Strandgids',
      restaurants: 'Restaurantgids'
    },
    hero: {
      kicker: 'Andalusië-gids',
      title:
        'Dagtochten vanuit Frigiliana: cultuur, geschiedenis en mooie autoroutes',
      paragraphs: [
        'Een verblijf in Frigiliana heeft een bijzonder voordeel: u slaapt in de rustige heuvels, terwijl enkele van de meest indrukwekkende plekken van Andalusië binnen één dag bereikbaar zijn.',
        'Frigiliana blijft uw uitvalsbasis; de dagtocht legt het accent. Kies één hoofdattractie, voeg een ontspannen maaltijd en eventueel één extra stop toe en keer terug voor een rustige dorpsavond, in plaats van van de dag een checklist te maken.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana in de heuvels als rustige uitvalsbasis voor dagtochten door Andalusië',
      availabilityCta: 'Beschikbaarheid bekijken'
    },
    sectionNav: {
      overview: 'Eenvoudig plannen',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Kies één onvergetelijk middelpunt voor de dag',
      intro:
        'De beste dagtochten vanuit Frigiliana draaien niet om zo veel mogelijk bezienswaardigheden. Ze werken wanneer de bestemming het tempo bepaalt en de rest van de dag flexibel blijft.',
      rule:
        'Eenvoudige planningsregel: kies één hoofdactiviteit, vertrek rond 09.00 uur en houd genoeg marge voor een rustige terugkeer naar het dorp.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Eenvoudigste cultuurdag',
          text:
            'Kies Málaga voor musea, een goed beloopbaar historisch centrum, winkelen en lunch in de stad of aan de haven.'
        },
        {
          title: 'Grote geschiedenisdag',
          text:
            'Kies Granada wanneer het Alhambra, Moorse architectuur en uitzichtpunten de belangrijkste reden voor de rit zijn.'
        },
        {
          title: 'Actieve natuurdag',
          text:
            'Kies Caminito del Rey voor een gestructureerde buitenervaring met reservering, aanlooproute en shuttle.'
        },
        {
          title: 'Langste panoramadag',
          text:
            'Kies Ronda voor de kloof, de Puente Nuevo en een langzamere rit door wisselende Andalusische landschappen.'
        }
      ]
    },
    destinations: [
      {
        id: 'malaga',
        kicker: 'Stad & cultuur',
        title: 'Málaga',
        summary:
          'Málaga is de eenvoudigste culturele dagtocht vanuit Frigiliana: een beloopbaar historisch centrum, musea, uitstekend eten en een moderne havensfeer. Het is de meest flexibele keuze voor een boeiende dag zonder strak tijdschema.',
        facts: [
          {
            label: 'Gebruikelijke rijtijd',
            value: 'Ongeveer 50 minuten via de A-7, afhankelijk van verkeer'
          },
          {
            label: 'Ideaal voor',
            value: 'Musea, winkelen en uit eten'
          },
          {
            label: 'Stijl',
            value: 'Eenvoudig, flexibel en relatief ontspannen'
          }
        ],
        planningTitle: 'Zo kunt u de dag indelen',
        callout:
          'Een centrale parkeergarage rond de haven en Muelle Uno is een praktisch vertrekpunt. Controleer wel de actuele toegang en beschikbaarheid voordat u vertrekt.',
        details:
          'Loop via de haven en het park naar het centrum en kies één cultureel anker: het Museo Picasso Málaga of de Alcazaba zijn allebei goede opties. Houd ruimte voor een ontspannen lunch rond de Mercado de Atarazanas in plaats van elk museum te willen zien.',
        officialHref: officialLinks.malaga,
        officialLabel: 'Officiële bezoekersinformatie voor Málaga'
      },
      {
        id: 'granada',
        kicker: 'Geschiedenis & romantiek',
        title: 'Granada en het Alhambra',
        summary:
          'Granada is een Andalusische klassieker: Moorse architectuur, theehuizen, het Albaicín en het Alhambra met de Sierra Nevada op de achtergrond. De stad verdient een volle dag en beloont extra voorbereiding.',
        facts: [
          {
            label: 'Gebruikelijke rijtijd',
            value: 'Ongeveer 1 uur en 10 minuten landinwaarts'
          },
          {
            label: 'Ideaal voor',
            value: 'Architectuur, geschiedenis en uitzichtpunten'
          },
          {
            label: 'Stijl',
            value: 'Een volle dag die de inspanning waard is'
          }
        ],
        planningTitle: 'De realiteit van tickets',
        callout:
          'De vraag naar Alhambra-tickets is groot. Boek via het officiële kanaal zodra uw data vaststaan en controleer het tijdslot voor de Nasridische paleizen op uw ticket.',
        details:
          'Zijn er geen Alhambra-tickets meer, dan blijft de dag de moeite waard: verken het Albaicín en eindig bij Mirador de San Nicolás met uitzicht op het paleiscomplex. Houd het programma bewust licht zodat u Granada beleeft zonder tussen wijken te haasten.',
        officialHref: officialLinks.alhambraEn,
        officialLabel: 'Officiële Alhambra-informatie en tickets'
      },
      {
        id: 'caminito',
        kicker: 'Avontuur',
        title: 'Caminito del Rey',
        summary:
          'Caminito del Rey loopt spectaculair door de Gaitanes-kloof, deels over paden en deels over loopbruggen tegen steile kalkstenen wanden. Geologie, weidse uitzichten en het bijzondere karakter maken dit tot een unieke dag.',
        facts: [
          {
            label: 'Gebruikelijke rijtijd',
            value: 'Ongeveer 1 uur en 30 minuten, afhankelijk van verkeer'
          },
          {
            label: 'Ideaal voor',
            value: 'Natuur, actieve dagen en fotografie'
          },
          {
            label: 'Stijl',
            value: 'Gestructureerd: reservering, aanlooproute en shuttle'
          }
        ],
        planningTitle: 'Goed om vooraf te weten',
        callout:
          'De route is lineair en eenrichtingsverkeer. Reken voor de volledige ervaring, inclusief aanlooppaden, op ongeveer 3–4 uur en plan de shuttle terug naar uw startpunt.',
        details:
          'Reserveer vooraf via de officiële website. Algemene toegang is geschikt als u zelfstandig wilt lopen; een officiële rondleiding is optioneel. De route past niet bij ernstige hoogtevrees en kinderen jonger dan acht jaar hebben geen toegang.',
        officialHref: officialLinks.caminitoEn,
        officialLabel: 'Officiële Caminito-informatie en tickets'
      },
      {
        id: 'ronda',
        kicker: 'Panoramarit',
        title: 'Ronda en de kloof',
        summary:
          'Ronda wordt bepaald door de Puente Nuevo boven de diepe Tajo-kloof. De stad is filmisch, historisch en bijzonder fotogeniek; door de langere reis voelt dit echt als een grote dagtocht.',
        facts: [
          {
            label: 'Gebruikelijke rijtijd',
            value: 'Ongeveer 2 uur per enkele reis, afhankelijk van route'
          },
          {
            label: 'Ideaal voor',
            value: 'Landschappen, romantiek en iconische uitzichten'
          },
          {
            label: 'Stijl',
            value: 'Een langere rit met een rustiger tempo'
          }
        ],
        planningTitle: 'Maak de reis onderdeel van de dag',
        callout:
          'De wisselende landschappen en weidse uitzichten horen bij de aantrekkingskracht van Ronda. Vertrek met voldoende daglicht en voeg geen andere grote bestemming aan dezelfde dag toe.',
        details:
          'Vertrek rond 09.00 uur uit Frigiliana, verken beide kanten van de kloof te voet en neem tijd voor een ontspannen lunch. Een vroege start geeft een comfortabele marge voor de terugrit vóór de late avond.',
        officialHref: officialLinks.ronda,
        officialLabel: 'Officiële bezoekersinformatie voor Ronda'
      }
    ],
    practical: {
      title: 'Praktische basisinformatie',
      intro:
        'Een beetje voorbereiding maakt deze dagen veel rustiger. Zie rijtijden als indicatie en controleer tickets, openingstijden, wegomstandigheden en openbaar vervoer opnieuw vlak voor uw datum.',
      items: [
        {
          title: 'Auto en openbaar vervoer',
          text:
            'Een auto is sterk aan te raden voor Granada, Ronda en Caminito del Rey. Málaga kan met openbaar vervoer haalbaar zijn, maar controleer actuele verbindingen en de terugreis voordat u daarop rekent.'
        },
        {
          title: 'Zomerhitte',
          text:
            'Bestemmingen landinwaarts kunnen in de zomer extreem heet worden. Begin vroeg, neem water mee en plan schaduw en rust tijdens het heetste deel van de dag.'
        },
        {
          title: 'Zondagen en openingstijden',
          text:
            'Opening op zondag verschilt per museum, winkel en restaurant. Controleer de concrete plekken die u wilt bezoeken in plaats van uit te gaan van één algemeen schema.'
        },
        {
          title: 'Rustige terugkeer',
          text:
            'Houd marge voor verkeer, parkeren en een ontspannen maaltijd. Terugkeren vóór de late avond bewaart het contrast dat Frigiliana zo prettig maakt als uitvalsbasis.'
        }
      ]
    },
    combine: {
      title: 'Breng de dagtocht in balans met de rest van uw verblijf',
      intro:
        'Na een dag vol cultuur, wandelen of autorijden voelt de terugkeer richting kust verfrissend. Houd de volgende dag lichter of regel het diner voordat u vertrekt.',
      items: [
        {
          title: 'Stranden',
          text:
            'Laat op een langere uitstap een ontspannen stranddag rond Nerja en aan de oostelijke Costa del Sol volgen.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Uit eten',
          text:
            'Kies voor de avond na terugkomst een restaurant in het dorp of reserveer een handige plek langs de terugroute.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        }
      ]
    },
    closing: {
      title: 'Het plezier van thuiskomen',
      lead:
        'Na een dag vol cultuur en beweging voelt de rit terug de heuvel op als een reset: rustigere lucht, koelere temperaturen en een avond zonder haast in het dorp.',
      availabilityCta: 'Beschikbaarheid bekijken',
      staysCta: 'Bekijk verblijven in Frigiliana'
    }
  },
  sv: {
    footerHighlights: {
      dayTrips: 'Dagsutflykter',
      beaches: 'Strandguide',
      restaurants: 'Restaurangguide'
    },
    hero: {
      kicker: 'Andalusienguide',
      title:
        'Dagsutflykter från Frigiliana: kultur, historia och vackra bilvägar',
      paragraphs: [
        'En vistelse i Frigiliana har en ovanlig fördel: ni sover i kullarnas lugna luft men kan ändå nå några av Andalusiens mest minnesvärda platser över dagen.',
        'Frigiliana förblir er bas; utflykten sätter accenten. Välj en huvudupplevelse, lägg till en lugn måltid och möjligen ett extra stopp och återvänd sedan till en stillsam kväll i byn i stället för att göra dagen till en checklista.'
      ],
      imageAlt:
        'Den vita byn Frigiliana bland kullarna som lugn bas för dagsutflykter i Andalusien',
      availabilityCta: 'Kontrollera tillgänglighet'
    },
    sectionNav: {
      overview: 'Planera enkelt',
      malaga: 'Málaga',
      granada: 'Granada',
      caminito: 'Caminito',
      ronda: 'Ronda',
      practical: 'Praktiskt'
    },
    overview: {
      title: 'Välj ett minnesvärt huvudmål för dagen',
      intro:
        'De bästa dagsutflykterna från Frigiliana handlar inte om att samla sevärdheter. De fungerar när resmålet sätter rytmen och resten av dagen får förbli flexibel.',
      rule:
        'Enkel planeringsregel: välj en huvudupplevelse, åk omkring 09.00 och lämna tillräckligt med marginal för en lugn återkomst till byn.',
      reviewed: 'Redaktionellt granskad: juli 2026',
      items: [
        {
          title: 'Enklaste kulturdagen',
          text:
            'Välj Málaga för museer, en promenadvänlig gammal stad, shopping och lunch i staden eller vid hamnen.'
        },
        {
          title: 'Stor historiedag',
          text:
            'Välj Granada när Alhambra, morisk arkitektur och utsiktsplatser är den egentliga anledningen till resan.'
        },
        {
          title: 'Aktiv naturdag',
          text:
            'Välj Caminito del Rey för en strukturerad naturupplevelse med bokning, anslutningsväg och transferbuss.'
        },
        {
          title: 'Längsta panoramadagen',
          text:
            'Välj Ronda för ravinen, Puente Nuevo och en långsammare resa genom skiftande andalusiska landskap.'
        }
      ]
    },
    destinations: [
      {
        id: 'malaga',
        kicker: 'Stad & kultur',
        title: 'Málaga',
        summary:
          'Málaga är den enklaste kulturella dagsutflykten från Frigiliana: en promenadvänlig gammal stad, museer, utmärkt mat och en modern hamnmiljö. Det är det mest flexibla valet när ni vill ha en givande dag utan ett strikt schema.',
        facts: [
          {
            label: 'Normal körtid',
            value: 'Cirka 50 minuter via A-7, beroende på trafik'
          },
          {
            label: 'Passar bäst för',
            value: 'Museer, shopping och restauranger'
          },
          {
            label: 'Stil',
            value: 'Enkel, flexibel och relativt avspänd'
          }
        ],
        planningTitle: 'Planera dagen så här',
        callout:
          'Ett centralt parkeringsgarage vid hamnen och Muelle Uno är en praktisk utgångspunkt. Kontrollera aktuell åtkomst och tillgänglighet innan ni åker.',
        details:
          'Promenera in mot centrum via hamnen och parken och välj ett kulturellt ankare: Museo Picasso Málaga eller Alcazaba fungerar båda bra. Lämna plats för en lugn lunch kring Mercado de Atarazanas i stället för att försöka hinna med varje museum.',
        officialHref: officialLinks.malaga,
        officialLabel: 'Officiell besöksinformation för Málaga'
      },
      {
        id: 'granada',
        kicker: 'Historia & romantik',
        title: 'Granada och Alhambra',
        summary:
          'Granada är en andalusisk klassiker: morisk arkitektur, tehus, Albaicín och Alhambra med Sierra Nevada i bakgrunden. Staden förtjänar en hel dag och belönar lite extra planering.',
        facts: [
          {
            label: 'Normal körtid',
            value: 'Cirka 1 timme och 10 minuter inåt landet'
          },
          {
            label: 'Passar bäst för',
            value: 'Arkitektur, historia och utsiktsplatser'
          },
          {
            label: 'Stil',
            value: 'En heldag som är värd ansträngningen'
          }
        ],
        planningTitle: 'Verkligheten kring biljetter',
        callout:
          'Efterfrågan på Alhambra-biljetter är hög. Boka via den officiella kanalen så snart datumen är bestämda och kontrollera tidsluckan för Nasridpalatsen på biljetten.',
        details:
          'Om Alhambra-biljetterna är slut är dagen fortfarande mycket givande: utforska Albaicín och avsluta vid Mirador de San Nicolás med utsikt mot palatsområdet. Håll schemat lätt så att ni kan uppleva Granada utan att stressa mellan stadsdelarna.',
        officialHref: officialLinks.alhambraEn,
        officialLabel: 'Officiell Alhambra-information och biljetter'
      },
      {
        id: 'caminito',
        kicker: 'Äventyr',
        title: 'Caminito del Rey',
        summary:
          'Caminito del Rey går spektakulärt genom Gaitanesravinen, delvis på stigar och delvis på gångbroar längs branta kalkstensväggar. Geologi, vida vyer och platsens speciella känsla gör dagen unik.',
        facts: [
          {
            label: 'Normal körtid',
            value: 'Cirka 1 timme och 30 minuter, beroende på trafik'
          },
          {
            label: 'Passar bäst för',
            value: 'Natur, aktiva dagar och fotografering'
          },
          {
            label: 'Stil',
            value: 'Strukturerad: bokning, anslutningsväg och transferbuss'
          }
        ],
        planningTitle: 'Bra att veta före besöket',
        callout:
          'Leden är linjär och går endast i en riktning. Räkna med cirka 3–4 timmar för hela upplevelsen inklusive anslutningsvägar och planera transferbussen tillbaka till startpunkten.',
        details:
          'Boka i förväg via den officiella webbplatsen. Allmän entré passar om ni vill gå självständigt; en officiell guidad tur är valfri. Leden passar inte vid stark höjdrädsla och barn under åtta år får inte gå in.',
        officialHref: officialLinks.caminitoEn,
        officialLabel: 'Officiell Caminito-information och biljetter'
      },
      {
        id: 'ronda',
        kicker: 'Panoramatur',
        title: 'Ronda och ravinen',
        summary:
          'Ronda präglas av Puente Nuevo över den djupa Tajo-ravinen. Staden är filmisk, historisk och mycket fotogenisk, och den längre resan får utflykten att kännas som en riktig heldag.',
        facts: [
          {
            label: 'Normal körtid',
            value: 'Cirka 2 timmar per riktning, beroende på väg och trafik'
          },
          {
            label: 'Passar bäst för',
            value: 'Landskap, romantik och ikoniska vyer'
          },
          {
            label: 'Stil',
            value: 'En längre körning i lugnare tempo'
          }
        ],
        planningTitle: 'Låt resan bli en del av dagen',
        callout:
          'De skiftande landskapen och vida vyerna är en del av Rondas dragningskraft. Åk medan det finns gott om dagsljus och lägg inte till något annat stort resmål samma dag.',
        details:
          'Lämna Frigiliana omkring 09.00, utforska båda sidorna av ravinen till fots och ta tid för en lugn lunch. En tidig start ger bekväm marginal för återresan före sen kväll.',
        officialHref: officialLinks.ronda,
        officialLabel: 'Officiell besöksinformation för Ronda'
      }
    ],
    practical: {
      title: 'Praktiska grunder',
      intro:
        'Lite förberedelse gör dessa dagar betydligt lugnare. Se körtiderna som uppskattningar och kontrollera biljetter, öppettider, vägförhållanden och kollektivtrafik igen nära ert datum.',
      items: [
        {
          title: 'Bil och kollektivtrafik',
          text:
            'Bil rekommenderas starkt för Granada, Ronda och Caminito del Rey. Málaga kan fungera med kollektivtrafik, men kontrollera aktuella anslutningar och hemresan innan ni förlitar er på den.'
        },
        {
          title: 'Sommarvärme',
          text:
            'Resmål inåt landet kan bli extremt varma på sommaren. Börja tidigt, ta med vatten och planera skugga och pauser under dagens hetaste timmar.'
        },
        {
          title: 'Söndagar och öppettider',
          text:
            'Söndagsöppet varierar mellan museer, butiker och restauranger. Kontrollera de konkreta platser ni vill besöka i stället för att anta ett gemensamt schema.'
        },
        {
          title: 'Lugn återkomst',
          text:
            'Lämna marginal för trafik, parkering och en avspänd måltid. En återkomst före sen kväll bevarar kontrasten som gör Frigiliana till en så givande bas.'
        }
      ]
    },
    combine: {
      title: 'Balansera utflykten med resten av vistelsen',
      intro:
        'Efter en dag med kultur, vandring eller bilkörning känns återkomsten mot kusten uppfriskande. Håll nästa dag lättare eller planera middagen innan ni åker.',
      items: [
        {
          title: 'Stränder',
          text:
            'Följ en längre utflykt med en lugn stranddag kring Nerja och den östra delen av Costa del Sol.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Restauranger',
          text:
            'Välj en lokal restaurang för kvällen när ni återvänder eller boka ett passande ställe längs vägen hem.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        }
      ]
    },
    closing: {
      title: 'Glädjen i att återvända',
      lead:
        'Efter en dag fylld av kultur och rörelse känns vägen tillbaka upp i kullarna som en nystart: lugnare luft, svalare temperaturer och en kväll utan brådska i byn.',
      availabilityCta: 'Kontrollera tillgänglighet',
      staysCta: 'Se boenden i Frigiliana'
    }
  }
};
