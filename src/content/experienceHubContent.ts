import { MARKET_CURATED } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';

export type ExperienceId =
  | 'hiking'
  | 'beaches'
  | 'restaurants'
  | 'festivals'
  | 'market'
  | 'dayTrips'
  | 'wellness'
  | 'nightlife';

type ExperienceDestination = 'frigiliana' | 'nerja' | 'both';

type ExperienceLinkToken =
  | 'frigiliana_hiking_authority'
  | 'frigiliana_beaches_authority'
  | 'frigiliana_food_authority'
  | 'frigiliana_events_authority'
  | 'frigiliana_market'
  | 'frigiliana_daytrips_authority'
  | 'frigiliana_wellness_authority'
  | 'nerja_nightlife_authority';

type ExperienceDiscoveryLinkToken =
  | 'romantic_hideaways'
  | 'frigiliana_weddings'
  | 'frigiliana_old_town';

interface ExperienceDiscoveryLink {
  label: string;
  token: ExperienceDiscoveryLinkToken;
}

export interface ExperienceDefinition {
  id: ExperienceId;
  token: ExperienceLinkToken;
  destination: ExperienceDestination;
  image: string;
}

interface ExperienceEditorial {
  kicker: string;
  title: string;
  text: string;
  linkLabel: string;
  imageAlt: string;
}

interface ExperienceHubPageCopy {
  footerHighlights: {
    hub: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    exploreCta: string;
  };
  sectionNav: {
    editorial: string;
    moods: string;
    all: string;
    places: string;
  };
  editorial: {
    kicker: string;
    title: string;
    intro: string;
    featuredIds: [ExperienceId, ExperienceId, ExperienceId];
  };
  moods: {
    title: string;
    intro: string;
    /**
     * Declares that `items` below is chosen per market rather than translated.
     *
     * Each locale leads with the four experiences its readers arrive looking
     * for — German with hiking, Spanish with the festival calendar, Dutch with
     * walking, Swedish with wellness — and gives each one its own mood phrase
     * rather than a translation of the English label. Without this declaration
     * the locale parity contract would read five different selections as drift
     * and report a content gap, which is precisely what it should do for every
     * list that does not carry it.
     */
    curation: typeof MARKET_CURATED;
    items: {
      label: string;
      id: ExperienceId;
    }[];
    discoveryLinks: ExperienceDiscoveryLink[];
  };
  catalog: {
    kicker: string;
    title: string;
    intro: string;
    curation: typeof MARKET_CURATED;
    order: ExperienceId[];
    destinationLabels: Record<ExperienceDestination, string>;
  };
  stories: Record<ExperienceId, ExperienceEditorial>;
  places: {
    kicker: string;
    title: string;
    intro: string;
    frigiliana: {
      title: string;
      text: string;
      linkLabel: string;
    };
    nerja: {
      title: string;
      text: string;
      linkLabel: string;
    };
  };
  closing: {
    title: string;
    lead: string;
    availabilityCta: string;
    staysCta: string;
  };
}

const villageImageBase =
  '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB';

/**
 * Semantic experience catalogue.
 *
 * Facts that must not drift between market editions live here. Editorial
 * priority, wording and story order remain intentionally locale-owned below.
 */
export const experienceCatalog: Record<ExperienceId, ExperienceDefinition> = {
  hiking: {
    id: 'hiking',
    token: 'frigiliana_hiking_authority',
    destination: 'frigiliana',
    image: '/images/hero-frigiliana.jpg'
  },
  beaches: {
    id: 'beaches',
    token: 'frigiliana_beaches_authority',
    destination: 'both',
    image: '/images/amara-playa/apartment/chaparril-22.webp'
  },
  restaurants: {
    id: 'restaurants',
    token: 'frigiliana_food_authority',
    destination: 'both',
    image: `${villageImageBase}/08-frigiliana-pueblo.jpg`
  },
  festivals: {
    id: 'festivals',
    token: 'frigiliana_events_authority',
    destination: 'frigiliana',
    image: `${villageImageBase}/05-frigiliana-pueblo.jpg`
  },
  market: {
    id: 'market',
    token: 'frigiliana_market',
    destination: 'frigiliana',
    image: `${villageImageBase}/06-frigiliana-pueblo.jpg`
  },
  dayTrips: {
    id: 'dayTrips',
    token: 'frigiliana_daytrips_authority',
    destination: 'both',
    image: `${villageImageBase}/02-frigiliana-pueblo.jpg`
  },
  wellness: {
    id: 'wellness',
    token: 'frigiliana_wellness_authority',
    destination: 'frigiliana',
    image: '/images/amara-maha/38-amara-frigiliana.jpg'
  },
  nightlife: {
    id: 'nightlife',
    token: 'nerja_nightlife_authority',
    destination: 'nerja',
    image: '/images/amara-playa/apartment/chaparril-13.webp'
  }
};

export interface ExperienceNavigationCopy {
  menuLabel: string;
  menuSectionLabel: string;
  menuOverviewLabel: string;
  menuOverviewDescription: string;
  breadcrumbLabel: string;
  breadcrumbAriaLabel: string;
  switcherLabel: string;
  labels: Record<ExperienceId, string>;
}

/**
 * Short navigation language stays separate from editorial headlines so global
 * menus, breadcrumbs and page-to-page controls remain compact and predictable.
 */
export const experienceNavigationContent: Record<
  AmaraLanguage,
  ExperienceNavigationCopy
> = {
  en: {
    menuLabel: 'Experiences',
    menuSectionLabel: 'Experience guides',
    menuOverviewLabel: 'Frigiliana',
    menuOverviewDescription: 'Village life, mountain paths and slow days around your AMARA stay.',
    breadcrumbLabel: 'Experiences',
    breadcrumbAriaLabel: 'Breadcrumb',
    switcherLabel: 'Explore another experience',
    labels: {
      hiking: 'Hiking',
      beaches: 'Beaches & coast',
      restaurants: 'Food & restaurants',
      festivals: 'Festivals',
      market: 'Market',
      dayTrips: 'Day trips',
      wellness: 'Wellness',
      nightlife: 'Evening life'
    }
  },
  de: {
    menuLabel: 'Erlebnisse',
    menuSectionLabel: 'Erlebnis-Guides',
    menuOverviewLabel: 'Frigiliana',
    menuOverviewDescription: 'Dorfleben, Bergwege und ruhige Tage rund um euren AMARA-Aufenthalt.',
    breadcrumbLabel: 'Erlebnisse',
    breadcrumbAriaLabel: 'Brotkrümelnavigation',
    switcherLabel: 'Ein anderes Erlebnis entdecken',
    labels: {
      hiking: 'Wandern',
      beaches: 'Strände & Küste',
      restaurants: 'Essen & Restaurants',
      festivals: 'Feste',
      market: 'Wochenmarkt',
      dayTrips: 'Tagesausflüge',
      wellness: 'Wellness',
      nightlife: 'Abendleben'
    }
  },
  es: {
    menuLabel: 'Experiencias',
    menuSectionLabel: 'Guías de experiencias',
    menuOverviewLabel: 'Frigiliana',
    menuOverviewDescription: 'Vida de pueblo, senderos y días tranquilos durante vuestra estancia en AMARA.',
    breadcrumbLabel: 'Experiencias',
    breadcrumbAriaLabel: 'Migas de pan',
    switcherLabel: 'Descubrir otra experiencia',
    labels: {
      hiking: 'Senderismo',
      beaches: 'Playas y costa',
      restaurants: 'Gastronomía y restaurantes',
      festivals: 'Fiestas',
      market: 'Mercado',
      dayTrips: 'Excursiones',
      wellness: 'Bienestar',
      nightlife: 'Vida nocturna'
    }
  },
  nl: {
    menuLabel: 'Ervaringen',
    menuSectionLabel: 'Ervaringengidsen',
    menuOverviewLabel: 'Frigiliana',
    menuOverviewDescription: 'Dorpsleven, bergpaden en rustige dagen rond jullie verblijf bij AMARA.',
    breadcrumbLabel: 'Ervaringen',
    breadcrumbAriaLabel: 'Broodkruimelnavigatie',
    switcherLabel: 'Ontdek een andere ervaring',
    labels: {
      hiking: 'Wandelen',
      beaches: 'Stranden & kust',
      restaurants: 'Eten & restaurants',
      festivals: 'Feesten',
      market: 'Markt',
      dayTrips: 'Dagtochten',
      wellness: 'Wellness',
      nightlife: 'Avondleven'
    }
  },
  sv: {
    menuLabel: 'Upplevelser',
    menuSectionLabel: 'Upplevelseguider',
    menuOverviewLabel: 'Frigiliana',
    menuOverviewDescription: 'Byliv, bergsleder och lugna dagar under er vistelse på AMARA.',
    breadcrumbLabel: 'Upplevelser',
    breadcrumbAriaLabel: 'Brödsmulenavigering',
    switcherLabel: 'Upptäck en annan upplevelse',
    labels: {
      hiking: 'Vandring',
      beaches: 'Stränder & kust',
      restaurants: 'Mat & restauranger',
      festivals: 'Festivaler',
      market: 'Marknad',
      dayTrips: 'Dagsutflykter',
      wellness: 'Wellness',
      nightlife: 'Kvällsliv'
    }
  }
};

export const experienceHubSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-frigiliana-experience-hub-v2.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Things to Do in Frigiliana',
      description:
        'Walk through Frigiliana, head into the hills, spend a day by the sea or simply slow down at Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Aktivitäten und Erlebnisse in Frigiliana',
      description:
        'Lauft durch Frigiliana, startet in die Berge, verbringt einen Tag am Meer oder macht es euch einfach bei Casa AMARA gemütlich.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Frigiliana',
      description:
        'Pasead por Frigiliana, salid a la montaña, pasad el día junto al mar o disfrutad sin prisas de Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Frigiliana',
      description:
        'Wandel door Frigiliana, trek de heuvels in, breng een dag aan zee door of doe het rustig aan bij Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Frigiliana',
      description:
        'Promenera genom Frigiliana, ge er ut i bergen, tillbringa en dag vid havet eller ta det lugnt på Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Each language is a distinct editorial edition, not a translated card order.
 * English remains the semantic reference for facts; locale editions own their
 * story hierarchy and guest-facing emphasis.
 */
export const experienceHubContent: Record<
  AmaraLanguage,
  ExperienceHubPageCopy
> = {
  en: {
    footerHighlights: {
      hub: 'All experiences'
    },
    hero: {
      kicker: 'Your days in Frigiliana',
      title: 'Morning in the village, later the hills or the sea.',
      paragraphs: [
        'At Casa AMARA, the day begins in the middle of Frigiliana. Pick up bread, wander through the old lanes, walk into the hills or head down to Nerja for the beach. In the evening, you can eat in the village and simply walk home. There is no programme to complete — every day can be different.'
      ],
      imageAlt:
        'A whitewashed street in Frigiliana opening towards the surrounding hills',
      exploreCta: 'See how the day could unfold'
    },
    sectionNav: {
      editorial: 'Highlights',
      moods: 'Choose an activity',
      all: 'All guides',
      places: 'Two places'
    },
    editorial: {
      kicker: 'What we enjoy ourselves',
      title: 'Four easy ways to spend a day from Casa AMARA.',
      intro:
        'Stay in the village, add some movement, go to the sea or leave the day deliberately empty. Each works on its own.',
      featuredIds: ['restaurants', 'hiking', 'beaches']
    },
    moods: {
      title: 'What would you like to do today?',
      intro:
        'Each one names the places we go ourselves, what they cost in time, and when they are worth it.',
      curation: MARKET_CURATED,
      items: [
        { label: 'Sea air', id: 'beaches' },
        { label: 'A cultural detour', id: 'dayTrips' },
        { label: 'A memorable table', id: 'restaurants' },
        { label: 'A quiet reset', id: 'wellness' }
      ],
      discoveryLinks: [
        {
          label: stayCollectionLabels.compareLabel.en,
          token: 'romantic_hideaways'
        },
        {
          label: 'Getting married in Frigiliana',
          token: 'frigiliana_weddings'
        },
        {
          label: 'Old town & history',
          token: 'frigiliana_old_town'
        }
      ]
    },
    catalog: {
      kicker: 'Plan your days',
      title: 'All AMARA local guides',
      intro:
        'Browse seven guides shaped around a stay in Frigiliana, from walking out of the village to planning a market morning or a nearby beach day.',
      curation: MARKET_CURATED,
      order: [
        'restaurants',
        'hiking',
        'beaches',
        'wellness',
        'dayTrips',
        'festivals',
        'market'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'A day with more movement',
        title: 'Walk from the white village into the hills',
        text:
          'The landscape begins just above the old town, with short walks as well as longer routes. Check the heat, weather and exact track before leaving.',
        linkLabel: 'Open the hiking guide',
        imageAlt:
          'Frigiliana street with a view towards the mountain landscape'
      },
      beaches: {
        kicker: 'When you feel like the sea',
        title: 'Head down to Nerja for a beach day',
        text:
          'Nerja is close enough for a relaxed day by the water. In the evening, return to Frigiliana, walk out for dinner and leave the car where it is.',
        linkLabel: 'Open the beach guide',
        imageAlt: 'Palm trees and the Mediterranean on Nerja’s coast'
      },
      restaurants: {
        kicker: 'Village mornings & evenings',
        title: 'Pick up bread, wander the lanes and walk out to dinner',
        text:
          'Some of our favourite days are the simplest: breakfast in the village, time at Casa AMARA and a small restaurant in the evening. No car and no timetable needed.',
        linkLabel: 'Open the restaurant guide',
        imageAlt: 'Sunlit whitewashed lane in Frigiliana'
      },
      festivals: {
        kicker: 'Culture & calendar',
        title: 'Meet Frigiliana when the village comes together',
        text:
          'Understand the character of the main festivals, what the streets feel like and what to plan before arriving on a busy day.',
        linkLabel: 'Open the festival guide',
        imageAlt: 'Traditional white houses along a Frigiliana street'
      },
      market: {
        kicker: 'Local life',
        title: 'Plan a Thursday market morning in Frigiliana',
        text:
          'Check the typical time, stall mix, parking and how to continue through the old town after the market.',
        linkLabel: 'Open the market guide',
        imageAlt: 'Whitewashed homes and flowerpots in Frigiliana'
      },
      dayTrips: {
        kicker: 'One good detour',
        title: 'Let one Andalusian place shape the day',
        text:
          'Compare Málaga, Granada, Caminito del Rey and Ronda with realistic planning notes, rather than trying to fit everything into one route.',
        linkLabel: 'Open the day-trip guide',
        imageAlt: 'Frigiliana in the Andalusian hills'
      },
      wellness: {
        kicker: 'A day without an excursion',
        title: 'Stay home and enjoy the hideaway',
        text:
          'Depending on your stay, a terrace, a hammock, a book and nowhere else to be can be enough. The wellness guide is there if you would like to add a treatment rather than another outing.',
        linkLabel: 'Open the wellness guide',
        imageAlt: 'Calm AMARA bedroom prepared for a restful stay'
      },
      nightlife: {
        kicker: 'After sunset',
        title: 'Choose your kind of Nerja evening',
        text:
          'Start with dinner and a terrace, continue with live music or head somewhere livelier — the guide separates the moods clearly.',
        linkLabel: 'Open the nightlife guide',
        imageAlt: 'Bright AMARA Playa interior in central Nerja'
      }
    },
    places: {
      kicker: 'One stay, two nearby places',
      title: 'Stay in Frigiliana, visit Nerja — or choose the coast.',
      intro:
        'The two places are close enough to combine, but the village and coast offer different walking, dining and evening options.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Choose the village for historic streets, mountain views, local meals and walking routes that begin near the old town.',
        linkLabel: 'Explore Frigiliana'
      },
      nerja: {
        title: 'Nerja',
        text:
          'Choose the coast for beaches, sea-facing walks, a broader choice of restaurants and an evening that can keep going.',
        linkLabel: 'Explore Nerja'
      }
    },
    closing: {
      title: 'And in the evening, walk home through the old village.',
      lead:
        'Lounis, Zaid and Maha have private terraces; Farah is our compact suite without one. We are happy to tell you honestly which stay has the details that matter to you.',
      availabilityCta: 'Check availability',
      staysCta: 'View all stays'
    }
  },

  de: {
    footerHighlights: {
      hub: 'Alle Erlebnisse'
    },
    hero: {
      kicker: 'Eure Tage in Frigiliana',
      title: 'Morgens durchs Dorf, später in die Berge oder ans Meer.',
      paragraphs: [
        'Bei Casa AMARA beginnt der Tag mitten in Frigiliana. Ihr holt morgens Brot, lauft durch die alten Gassen, startet in die Berge oder fahrt für einen Strandtag hinunter nach Nerja. Abends könnt ihr im Dorf essen gehen und danach einfach nach Hause laufen. Es gibt kein Programm, das ihr abhaken müsst – macht das, was an diesem Tag zu euch passt.'
      ],
      imageAlt:
        'Weiße Gasse in Frigiliana mit Blick auf die umliegenden Berge',
      exploreCta: 'So könnte euer Tag aussehen'
    },
    sectionNav: {
      editorial: 'Unsere Tipps',
      moods: 'Aktivität auswählen',
      all: 'Alle Guides',
      places: 'Zwei Orte'
    },
    editorial: {
      kicker: 'Was wir selbst gerne machen',
      title: 'Vier einfache Arten, einen Tag bei Casa AMARA zu verbringen',
      intro:
        'Bleibt im Dorf, bewegt euch draußen, fahrt ans Meer oder lasst den Tag bewusst frei. Jede Idee funktioniert für sich.',
      featuredIds: ['restaurants', 'hiking', 'beaches']
    },
    moods: {
      title: 'Was möchtet ihr heute unternehmen?',
      intro:
        'Jeder nennt die Orte, an die wir selbst gehen, wie viel Zeit sie kosten und wann sie sich lohnen.',
      curation: MARKET_CURATED,
      items: [
        { label: 'Raus in die Natur', id: 'hiking' },
        { label: 'Kultur entdecken', id: 'dayTrips' },
        { label: 'Gut essen', id: 'restaurants' },
        { label: 'Ans Meer', id: 'beaches' }
      ],
      discoveryLinks: [
        {
          label: stayCollectionLabels.compareLabel.de,
          token: 'romantic_hideaways'
        },
        {
          label: 'Heiraten in Frigiliana',
          token: 'frigiliana_weddings'
        },
        {
          label: 'Altstadt & Geschichte',
          token: 'frigiliana_old_town'
        }
      ]
    },
    catalog: {
      kicker: 'Eure Tage planen',
      title: 'Alle lokalen AMARA-Guides',
      intro:
        'Sieben Guides beantworten unterschiedliche Fragen rund um euren Aufenthalt in Frigiliana – vom Wanderweg bis zum Marktbesuch oder einem nahen Strandtag.',
      curation: MARKET_CURATED,
      order: [
        'restaurants',
        'hiking',
        'beaches',
        'wellness',
        'dayTrips',
        'festivals',
        'market'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Ein Tag mit mehr Bewegung',
        title: 'Von den weißen Gassen hinaus in die Berge',
        text:
          'Oberhalb der Altstadt beginnt direkt die Landschaft – mit kurzen Spaziergängen ebenso wie mit längeren Routen. Prüft vor dem Start Hitze, Wetter und den genauen Weg.',
        linkLabel: 'Zum Wanderguide',
        imageAlt: 'Frigilianas Altstadt mit Blick in die Berglandschaft'
      },
      beaches: {
        kicker: 'Wenn euch nach Meer ist',
        title: 'Für einen Strandtag hinunter nach Nerja',
        text:
          'Nerja ist nah genug für einen entspannten Tag am Wasser. Abends kommt ihr nach Frigiliana zurück, geht zu Fuß essen und lasst das Auto stehen.',
        linkLabel: 'Zum Strandguide',
        imageAlt: 'Palmen und Mittelmeer an der Küste von Nerja'
      },
      restaurants: {
        kicker: 'Morgens und abends im Dorf',
        title: 'Brot holen, durch die Gassen laufen und später zu Fuß essen gehen',
        text:
          'Manche unserer liebsten Tage sind ganz einfach: Frühstück im Dorf, Zeit bei Casa AMARA und abends ein kleines Restaurant. Dafür braucht ihr weder Auto noch Zeitplan.',
        linkLabel: 'Zum Restaurantguide',
        imageAlt: 'Sonnige weiße Altstadtgasse in Frigiliana'
      },
      festivals: {
        kicker: 'Kultur & Kalender',
        title: 'Frigiliana, wenn das ganze Dorf zusammenkommt',
        text:
          'Lernt die wichtigsten Feste, ihre Stimmung und die praktischen Besonderheiten kennen, bevor Straßen und Plätze sich füllen.',
        linkLabel: 'Zum Festivalguide',
        imageAlt: 'Traditionelle weiße Häuser an einer Gasse in Frigiliana'
      },
      market: {
        kicker: 'Lokales Leben',
        title: 'Den Donnerstagsmarkt in Frigiliana planen',
        text:
          'Typische Uhrzeit, Stände, Parken und der anschließende Weg durch die Altstadt auf einen Blick.',
        linkLabel: 'Zum Marktguide',
        imageAlt: 'Weiße Häuser und Pflanzentöpfe in Frigiliana'
      },
      dayTrips: {
        kicker: 'Ein Ziel für den Tag',
        title: 'Málaga, Granada oder der Caminito del Rey',
        text:
          'Jedes dieser Ziele verdient einen eigenen Tag. So bleibt genug Zeit vor Ort und ihr kommt am Abend zurück nach Frigiliana, ohne mehrere Orte hastig miteinander zu verbinden.',
        linkLabel: 'Zum Tagesausflugsguide',
        imageAlt: 'Frigiliana in der andalusischen Hügellandschaft'
      },
      wellness: {
        kicker: 'Ein Tag ohne Ausflugsziel',
        title: 'Einfach in der Unterkunft bleiben',
        text:
          'Je nach Unterkunft können Terrasse, Hängematte, ein Buch und sonst nichts völlig reichen. Im Wellnessguide findet ihr eine Behandlung, falls ihr eurem ruhigen Tag doch etwas hinzufügen möchtet.',
        linkLabel: 'Zum Wellnessguide',
        imageAlt: 'Ruhiges AMARA Schlafzimmer für eine erholsame Auszeit'
      },
      nightlife: {
        kicker: 'Nach Sonnenuntergang',
        title: 'Wählt den Nerja-Abend, der zu euch passt',
        text:
          'Beginnt mit Essen und Terrasse, bleibt bei Livemusik oder zieht lebhafter weiter. Der Guide trennt die unterschiedlichen Möglichkeiten klar.',
        linkLabel: 'Zum Nightlife-Guide',
        imageAlt: 'Helles AMARA Playa Apartment im Zentrum von Nerja'
      }
    },
    places: {
      kicker: 'Ein Aufenthalt, zwei nahe Orte',
      title: 'In Frigiliana wohnen, Nerja besuchen — oder direkt an die Küste.',
      intro:
        'Beide Orte lassen sich leicht verbinden, bieten aber unterschiedliche Möglichkeiten zum Spazierengehen, Essen und Ausgehen.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Wählt das Dorf für historische Gassen, Bergblicke, lokale Restaurants und Wanderwege, die nahe der Altstadt beginnen.',
        linkLabel: 'Frigiliana entdecken'
      },
      nerja: {
        title: 'Nerja',
        text:
          'Die Küste bringt Strände, Spaziergänge am Meer, eine größere Restaurantauswahl und Abende, die länger dauern dürfen.',
        linkLabel: 'Nerja entdecken'
      }
    },
    closing: {
      title: 'Und am Ende wieder nach Hause durch die Altstadt.',
      lead:
        'Lounis, Zaid und Maha haben jeweils eine private Terrasse mit Außendusche, Hängematte und zwei Liegen. Farah ist unsere kompakte Suite ohne private Terrasse. Wir sagen euch gern ehrlich, welche Unterkunft die Details hat, die euch wichtig sind.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Romantic Hideaways entdecken'
    }
  },

  es: {
    footerHighlights: {
      hub: 'Todas las experiencias'
    },
    hero: {
      kicker: 'Vuestros días en Frigiliana',
      title: 'Por la mañana el pueblo; después, la montaña o el mar.',
      paragraphs: [
        'En Casa AMARA el día empieza en pleno Frigiliana. Podéis comprar pan, pasear por las calles antiguas, salir a la montaña o bajar a Nerja para pasar el día en la playa. Por la noche cenáis en el pueblo y volvéis a casa andando. No hay ningún programa que completar: cada día puede ser distinto.'
      ],
      imageAlt:
        'Calle blanca de Frigiliana abierta hacia las montañas cercanas',
      exploreCta: 'Así podría ser vuestro día'
    },
    sectionNav: {
      editorial: 'Destacados',
      moods: 'Elegir actividad',
      all: 'Todas las guías',
      places: 'Dos lugares'
    },
    editorial: {
      kicker: 'Lo que también nos gusta hacer',
      title: 'Cuatro formas sencillas de pasar el día desde Casa AMARA.',
      intro:
        'Quedaos en el pueblo, salid a caminar, bajad al mar o dejad el día libre. Cada opción funciona por sí sola.',
      featuredIds: ['restaurants', 'hiking', 'beaches']
    },
    moods: {
      title: '¿Qué queréis hacer hoy?',
      intro:
        'Cada uno nombra los sitios a los que vamos nosotros, cuánto tiempo llevan y cuándo merecen la pena.',
      curation: MARKET_CURATED,
      items: [
        { label: 'Comer bien', id: 'restaurants' },
        { label: 'Vivir el pueblo', id: 'festivals' },
        { label: 'Bajar a la playa', id: 'beaches' },
        { label: 'Un día de calma', id: 'wellness' }
      ],
      discoveryLinks: [
        {
          label: stayCollectionLabels.compareLabel.es,
          token: 'romantic_hideaways'
        },
        {
          label: 'Casarse en Frigiliana',
          token: 'frigiliana_weddings'
        },
        {
          label: 'Casco antiguo e historia',
          token: 'frigiliana_old_town'
        }
      ]
    },
    catalog: {
      kicker: 'Planificad los días',
      title: 'Todas las guías locales de AMARA',
      intro:
        'Siete guías responden a preguntas distintas sobre una estancia en Frigiliana, desde los senderos y el mercado hasta una playa cercana.',
      curation: MARKET_CURATED,
      order: [
        'restaurants',
        'hiking',
        'beaches',
        'wellness',
        'dayTrips',
        'festivals',
        'market'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana y Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Un día con más movimiento',
        title: 'Salir de las calles blancas hacia la montaña',
        text:
          'El paisaje empieza justo por encima del casco antiguo, con paseos cortos y rutas más largas. Comprobad antes el calor, el tiempo y el recorrido exacto.',
        linkLabel: 'Ver la guía de senderismo',
        imageAlt: 'Frigiliana con las montañas al fondo'
      },
      beaches: {
        kicker: 'Cuando apetece el mar',
        title: 'Bajar a Nerja para pasar el día en la playa',
        text:
          'Nerja está lo bastante cerca para disfrutar de un día tranquilo junto al agua. Por la noche volvéis a Frigiliana, salís a cenar andando y dejáis el coche aparcado.',
        linkLabel: 'Ver la guía de playas',
        imageAlt: 'Palmeras y mar Mediterráneo en la costa de Nerja'
      },
      restaurants: {
        kicker: 'Mañanas y noches en el pueblo',
        title: 'Comprar pan, pasear por las calles y salir a cenar andando',
        text:
          'Algunos de nuestros días favoritos son los más sencillos: desayunar en el pueblo, disfrutar de Casa AMARA y cenar en un restaurante pequeño. Sin coche y sin horarios.',
        linkLabel: 'Ver la guía de restaurantes',
        imageAlt: 'Calle blanca de Frigiliana iluminada por el sol'
      },
      festivals: {
        kicker: 'Cultura y calendario',
        title: 'Conocer Frigiliana cuando el pueblo se reúne',
        text:
          'Descubrid el carácter de sus fiestas principales, cómo cambia el ambiente de las calles y qué conviene prever en los días más concurridos.',
        linkLabel: 'Ver la guía de fiestas',
        imageAlt: 'Casas blancas tradicionales en una calle de Frigiliana'
      },
      market: {
        kicker: 'Vida local',
        title: 'Planificar el mercadillo de los jueves en Frigiliana',
        text:
          'Horario habitual, tipos de puestos, aparcamiento y cómo seguir después por el casco antiguo.',
        linkLabel: 'Ver la guía del mercado',
        imageAlt: 'Casas encaladas y macetas en Frigiliana'
      },
      dayTrips: {
        kicker: 'Una escapada',
        title: 'Dedicar el día a un solo lugar andaluz',
        text:
          'Comparad Málaga, Granada, Caminito del Rey y Ronda con tiempos y consejos realistas, sin convertir la excursión en una carrera.',
        linkLabel: 'Ver la guía de excursiones',
        imageAlt: 'Frigiliana entre las colinas de Andalucía'
      },
      wellness: {
        kicker: 'Un día sin excursiones',
        title: 'Quedarse y disfrutar del alojamiento',
        text:
          'Según el alojamiento, una terraza, una hamaca, un libro y ningún otro plan pueden ser suficientes. La guía de bienestar os ayuda si queréis añadir un tratamiento en vez de otra salida.',
        linkLabel: 'Ver la guía de bienestar',
        imageAlt: 'Dormitorio tranquilo de AMARA preparado para descansar'
      },
      nightlife: {
        kicker: 'Después del atardecer',
        title: 'Elegir vuestra noche en Nerja',
        text:
          'Cena y terraza, música en directo o un ambiente más animado. La guía separa cada estilo para que sepáis dónde empezar.',
        linkLabel: 'Ver la guía de noche',
        imageAlt: 'Interior luminoso de AMARA Playa en el centro de Nerja'
      }
    },
    places: {
      kicker: 'Una estancia, dos lugares cercanos',
      title: 'Alojarse en Frigiliana, visitar Nerja — o elegir la costa.',
      intro:
        'Están muy cerca y se combinan con facilidad, pero ofrecen opciones distintas para caminar, comer y salir por la noche.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'El pueblo ofrece mañanas tranquilas, calles históricas, vistas a la montaña, cocina local y noches serenas.',
        linkLabel: 'Descubrir Frigiliana'
      },
      nerja: {
        title: 'Nerja',
        text:
          'La costa aporta playas, paseos junto al mar, más variedad de restaurantes y noches con mayor movimiento.',
        linkLabel: 'Descubrir Nerja'
      }
    },
    closing: {
      title: 'Y por la noche, volvéis a casa por el casco antiguo.',
      lead:
        'Lounis, Zaid y Maha tienen terraza privada; Farah es nuestra suite compacta sin terraza. Os diremos con sinceridad qué alojamiento tiene los detalles que más os importan.',
      availabilityCta: 'Consultar disponibilidad',
      staysCta: 'Ver todos los alojamientos'
    }
  },

  nl: {
    footerHighlights: {
      hub: 'Alle ervaringen'
    },
    hero: {
      kicker: 'Jullie dagen in Frigiliana',
      title: 'In de ochtend het dorp, daarna de bergen of de zee.',
      paragraphs: [
        'Bij Casa AMARA begint de dag midden in Frigiliana. Haal brood, wandel door de oude straatjes, trek de heuvels in of ga naar Nerja voor een stranddag. ’s Avonds eten jullie in het dorp en lopen daarna gewoon naar huis. Er is geen programma om af te werken: elke dag mag anders zijn.'
      ],
      imageAlt:
        'Witte straat in Frigiliana met uitzicht richting de bergen',
      exploreCta: 'Zo kan jullie dag eruitzien'
    },
    sectionNav: {
      editorial: 'Uitgelicht',
      moods: 'Kies een activiteit',
      all: 'Alle gidsen',
      places: 'Twee plaatsen'
    },
    editorial: {
      kicker: 'Wat wij zelf graag doen',
      title: 'Vier eenvoudige manieren om een dag vanuit Casa AMARA door te brengen.',
      intro:
        'Blijf in het dorp, ga bewegen, zoek de zee op of laat de dag bewust leeg. Elke keuze werkt op zichzelf.',
      featuredIds: ['restaurants', 'hiking', 'beaches']
    },
    moods: {
      title: 'Wat willen jullie vandaag doen?',
      intro:
        'Elke gids noemt de plekken waar we zelf komen, hoeveel tijd ze kosten en wanneer ze de moeite waard zijn.',
      curation: MARKET_CURATED,
      items: [
        { label: 'Naar zee', id: 'beaches' },
        { label: 'Actief naar buiten', id: 'hiking' },
        { label: 'Een dag op pad', id: 'dayTrips' },
        { label: 'Eten als een local', id: 'restaurants' }
      ],
      discoveryLinks: [
        {
          label: stayCollectionLabels.compareLabel.nl,
          token: 'romantic_hideaways'
        },
        {
          label: 'Trouwen in Frigiliana',
          token: 'frigiliana_weddings'
        },
        {
          label: 'Oude kern & geschiedenis',
          token: 'frigiliana_old_town'
        }
      ]
    },
    catalog: {
      kicker: 'Plan jullie dagen',
      title: 'Alle lokale gidsen van AMARA',
      intro:
        'Zeven gidsen beantwoorden verschillende vragen rond een verblijf in Frigiliana, van wandelen en de markt tot een stranddag in de buurt.',
      curation: MARKET_CURATED,
      order: [
        'restaurants',
        'hiking',
        'beaches',
        'wellness',
        'dayTrips',
        'festivals',
        'market'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Een dag met meer beweging',
        title: 'Loop vanuit de witte straatjes de heuvels in',
        text:
          'Het landschap begint direct boven de oude kern, met korte wandelingen en langere routes. Controleer vooraf de hitte, het weer en het precieze traject.',
        linkLabel: 'Open de wandelgids',
        imageAlt: 'Frigiliana met uitzicht op het berglandschap'
      },
      beaches: {
        kicker: 'Als jullie zin hebben in zee',
        title: 'Ga naar Nerja voor een stranddag',
        text:
          'Nerja ligt dichtbij genoeg voor een ontspannen dag aan het water. ’s Avonds keren jullie terug naar Frigiliana, lopen naar een restaurant en laten de auto staan.',
        linkLabel: 'Open de strandgids',
        imageAlt: 'Palmbomen en de Middellandse Zee aan de kust van Nerja'
      },
      restaurants: {
        kicker: 'Ochtenden en avonden in het dorp',
        title: 'Haal brood, wandel door de straatjes en ga later te voet uit eten',
        text:
          'Sommige van onze favoriete dagen zijn heel eenvoudig: ontbijten in het dorp, tijd bij Casa AMARA en ’s avonds een klein restaurant. Zonder auto en zonder tijdschema.',
        linkLabel: 'Open de restaurantgids',
        imageAlt: 'Zonnige witte straat in Frigiliana'
      },
      festivals: {
        kicker: 'Cultuur & kalender',
        title: 'Beleef Frigiliana wanneer het dorp samenkomt',
        text:
          'Lees wat de belangrijkste feesten bijzonder maakt, hoe de straten veranderen en wat jullie vooraf moeten plannen op drukke dagen.',
        linkLabel: 'Open de feestengids',
        imageAlt: 'Traditionele witte huizen in een straat van Frigiliana'
      },
      market: {
        kicker: 'Lokaal leven',
        title: 'Plan de donderdagmarkt in Frigiliana',
        text:
          'Bekijk de gebruikelijke tijd, soorten kramen, parkeren en hoe jullie daarna door de oude kern verdergaan.',
        linkLabel: 'Open de marktgids',
        imageAlt: 'Witte huizen en plantenpotten in Frigiliana'
      },
      dayTrips: {
        kicker: 'Eén goede omweg',
        title: 'Laat één Andalusische bestemming de dag bepalen',
        text:
          'Vergelijk Málaga, Granada, Caminito del Rey en Ronda met realistische reistijden en planningsadvies.',
        linkLabel: 'Open de dagtochtengids',
        imageAlt: 'Frigiliana tussen de Andalusische heuvels'
      },
      wellness: {
        kicker: 'Een dag zonder uitstapje',
        title: 'Blijf thuis en geniet van het verblijf',
        text:
          'Afhankelijk van het verblijf kunnen een terras, een hangmat, een boek en verder niets hoeven genoeg zijn. De wellnessgids helpt als jullie liever een behandeling toevoegen dan nog een uitstapje.',
        linkLabel: 'Open de wellnessgids',
        imageAlt: 'Rustige AMARA-slaapkamer voor een ontspannen verblijf'
      },
      nightlife: {
        kicker: 'Na zonsondergang',
        title: 'Kies de Nerja-avond die bij jullie past',
        text:
          'Begin met diner en een terras, luister naar livemuziek of zoek later meer levendigheid. De gids maakt het verschil tussen de sferen duidelijk.',
        linkLabel: 'Open de uitgaansgids',
        imageAlt: 'Licht interieur van AMARA Playa in het centrum van Nerja'
      }
    },
    places: {
      kicker: 'Eén verblijf, twee plaatsen dichtbij',
      title: 'Verblijf in Frigiliana, bezoek Nerja — of kies de kust.',
      intro:
        'De plaatsen liggen dicht bij elkaar, maar bieden andere mogelijkheden voor wandelen, eten en uitgaan.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Kies het dorp voor historische straatjes, berguitzicht, lokale restaurants en wandelroutes die vlak bij de oude kern beginnen.',
        linkLabel: 'Ontdek Frigiliana'
      },
      nerja: {
        title: 'Nerja',
        text:
          'Kies de kust voor stranden, wandelingen langs zee, meer restaurantkeuze en een avond die langer mag duren.',
        linkLabel: 'Ontdek Nerja'
      }
    },
    closing: {
      title: 'En ’s avonds lopen jullie door de oude kern naar huis.',
      lead:
        'Lounis, Zaid en Maha hebben een privéterras; Farah is onze compacte suite zonder terras. We vertellen jullie graag eerlijk welk verblijf de details heeft die belangrijk voor jullie zijn.',
      availabilityCta: 'Beschikbaarheid checken',
      staysCta: 'Bekijk alle verblijven'
    }
  },

  sv: {
    footerHighlights: {
      hub: 'Alla upplevelser'
    },
    hero: {
      kicker: 'Era dagar i Frigiliana',
      title: 'Byn på morgonen, sedan bergen eller havet.',
      paragraphs: [
        'På Casa AMARA börjar dagen mitt i Frigiliana. Hämta bröd, promenera genom de gamla gränderna, ge er ut i bergen eller åk till Nerja för en stranddag. På kvällen äter ni i byn och går sedan bara hem. Det finns inget program att hinna med – varje dag får se olika ut.'
      ],
      imageAlt:
        'Vitkalkad gata i Frigiliana med utsikt mot bergen',
      exploreCta: 'Så kan er dag se ut'
    },
    sectionNav: {
      editorial: 'Utvalt',
      moods: 'Välj aktivitet',
      all: 'Alla guider',
      places: 'Två platser'
    },
    editorial: {
      kicker: 'Det vi själva gärna gör',
      title: 'Fyra enkla sätt att tillbringa en dag från Casa AMARA.',
      intro:
        'Stanna i byn, rör på er, åk till havet eller lämna dagen medvetet tom. Varje val fungerar för sig.',
      featuredIds: ['restaurants', 'hiking', 'beaches']
    },
    moods: {
      title: 'Vad vill ni göra i dag?',
      intro:
        'Var och en nämner platserna vi själva går till, hur mycket tid de tar och när de är värda det.',
      curation: MARKET_CURATED,
      items: [
        { label: 'Havsluft', id: 'beaches' },
        { label: 'En riktigt lugn dag', id: 'wellness' },
        { label: 'God mat', id: 'restaurants' },
        { label: 'En utflykt', id: 'dayTrips' }
      ],
      discoveryLinks: [
        {
          label: stayCollectionLabels.compareLabel.sv,
          token: 'romantic_hideaways'
        },
        {
          label: 'Gifta sig i Frigiliana',
          token: 'frigiliana_weddings'
        },
        {
          label: 'Gamla stan & historia',
          token: 'frigiliana_old_town'
        }
      ]
    },
    catalog: {
      kicker: 'Planera dagarna',
      title: 'Alla AMARAs lokala guider',
      intro:
        'Sju guider svarar på olika frågor om en vistelse i Frigiliana, från vandring och marknad till en stranddag i närheten.',
      curation: MARKET_CURATED,
      order: [
        'restaurants',
        'hiking',
        'beaches',
        'wellness',
        'dayTrips',
        'festivals',
        'market'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'En dag med mer rörelse',
        title: 'Gå från de vita gränderna ut i bergen',
        text:
          'Landskapet börjar strax ovanför gamla byn, med både korta promenader och längre turer. Kontrollera värme, väder och den exakta rutten före start.',
        linkLabel: 'Öppna vandringsguiden',
        imageAlt: 'Frigiliana med utsikt mot bergslandskapet'
      },
      beaches: {
        kicker: 'När ni längtar efter havet',
        title: 'Åk ner till Nerja för en stranddag',
        text:
          'Nerja ligger nära nog för en avkopplande dag vid vattnet. På kvällen återvänder ni till Frigiliana, går ut och äter och låter bilen stå.',
        linkLabel: 'Öppna strandguiden',
        imageAlt: 'Palmer och Medelhavet vid Nerjas kust'
      },
      restaurants: {
        kicker: 'Morgnar och kvällar i byn',
        title: 'Hämta bröd, gå genom gränderna och promenera ut till middagen',
        text:
          'Några av våra favoritdagar är de enklaste: frukost i byn, tid på Casa AMARA och en liten restaurang på kvällen. Ingen bil och inget tidsschema behövs.',
        linkLabel: 'Öppna restaurangguiden',
        imageAlt: 'Solbelyst vit gata i Frigiliana'
      },
      festivals: {
        kicker: 'Kultur & kalender',
        title: 'Möt Frigiliana när byn samlas',
        text:
          'Lär känna de viktigaste festerna, hur stämningen på gatorna förändras och vad som är bra att planera under välbesökta dagar.',
        linkLabel: 'Öppna festivalguiden',
        imageAlt: 'Traditionella vita hus längs en gata i Frigiliana'
      },
      market: {
        kicker: 'Lokalt liv',
        title: 'Planera torsdagsmarknaden i Frigiliana',
        text:
          'Se vanlig tid, typer av stånd, parkering och hur ni kan fortsätta genom gamla byn efter marknaden.',
        linkLabel: 'Öppna marknadsguiden',
        imageAlt: 'Vitkalkade hus och krukväxter i Frigiliana'
      },
      dayTrips: {
        kicker: 'En väl vald utflykt',
        title: 'Låt en andalusisk plats forma dagen',
        text:
          'Jämför Málaga, Granada, Caminito del Rey och Ronda med realistiska restider och råd för en dag utan onödig brådska.',
        linkLabel: 'Öppna utflyktsguiden',
        imageAlt: 'Frigiliana bland Andalusiens kullar'
      },
      wellness: {
        kicker: 'En dag utan utflykt',
        title: 'Stanna hemma och njut av boendet',
        text:
          'Beroende på boendet kan en terrass, en hängmatta, en bok och ingen annanstans att vara räcka. Wellnessguiden finns om ni hellre vill lägga till en behandling än ännu en utflykt.',
        linkLabel: 'Öppna wellnessguiden',
        imageAlt: 'Lugnt AMARA-sovrum för en avkopplande vistelse'
      },
      nightlife: {
        kicker: 'Efter solnedgången',
        title: 'Välj den Nerja-kväll som passar er',
        text:
          'Börja med middag och en terrass, fortsätt med livemusik eller sök mer puls senare. Guiden skiljer tydligt mellan stämningarna.',
        linkLabel: 'Öppna kvällsguiden',
        imageAlt: 'Ljus interiör i AMARA Playa centralt i Nerja'
      }
    },
    places: {
      kicker: 'En vistelse, två platser nära varandra',
      title: 'Bo i Frigiliana, besök Nerja — eller välj kusten.',
      intro:
        'Platserna ligger nära varandra men erbjuder olika möjligheter för promenader, mat och kvällsliv.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Välj byn för historiska gränder, bergsutsikt, lokala restauranger och vandringsleder som börjar nära gamla stan.',
        linkLabel: 'Upptäck Frigiliana'
      },
      nerja: {
        title: 'Nerja',
        text:
          'Välj kusten för stränder, promenader längs havet, fler restauranger och en kväll som gärna får fortsätta.',
        linkLabel: 'Upptäck Nerja'
      }
    },
    closing: {
      title: 'Och på kvällen går ni hem genom gamla byn.',
      lead:
        'Lounis, Zaid och Maha har privata terrasser; Farah är vår kompakta svit utan terrass. Vi berättar gärna ärligt vilket boende som har detaljerna som betyder mest för er.',
      availabilityCta: 'Se tillgänglighet',
      staysCta: 'Se alla boenden'
    }
  }
};

export type ExperienceHubConnectionToken =
  | 'weather_frigiliana'
  | 'frigiliana_old_town'
  | 'nerja_nightlife_authority'
  | 'romantic_hideaways';

export interface ExperienceHubConnectionCopy {
  title: string;
  intro: string;
  items: {
    id: 'conditions' | 'village' | 'coast-evening' | 'hideaway-return';
    title: string;
    text: string;
    linkToken: ExperienceHubConnectionToken;
    linkLabel: string;
  }[];
}

export const experienceHubConnections: Record<AmaraLanguage, ExperienceHubConnectionCopy> = {
  en: {
    title: 'Build your own day — and follow the next real question',
    intro:
      'These are not fixed itineraries. Start with what suits you now; weather, place and appetite create the next useful choice.',
    items: [
      {
        id: 'conditions',
        title: 'Let the conditions choose between paths and coast',
        text:
          'A warm, calm day can suit the sea; a cooler start may open a longer walk. Use the seasonal pattern for travel planning and the current forecast for today’s decision.',
        linkToken: 'weather_frigiliana',
        linkLabel: 'Compare weather and seasons'
      },
      {
        id: 'village',
        title: 'Understand the village before choosing the next stop',
        text:
          'Frigiliana’s lanes, hillside form and historic core change how a short walk, a restaurant evening and the return to Casa AMARA fit together.',
        linkToken: 'frigiliana_old_town',
        linkLabel: 'Walk through the old town'
      },
      {
        id: 'coast-evening',
        title: 'Let a central Nerja coast day become a sundowner',
        text:
          'If the beach afternoon ends near the old town, continue on foot to Cochran’s Terrace. We watched the sunset there ourselves in summer 2025; check current opening before relying on the plan.',
        linkToken: 'nerja_nightlife_authority',
        linkLabel: 'See our Nerja sundowner'
      },
      {
        id: 'hideaway-return',
        title: 'Decide how the day should end in private',
        text:
          'After mountains, coast or dinner, the accommodation becomes part of the experience. Compare the AMARA stays by their real setting and property-specific features.',
        linkToken: 'romantic_hideaways',
        linkLabel: 'Compare Romantic Hideaways'
      }
    ]
  },
  de: {
    title: 'Stellt euren Tag selbst zusammen — und folgt der nächsten echten Frage',
    intro:
      'Das sind keine festen Tagespläne. Beginnt mit dem, was heute zu euch passt; Wetter, Ort und Appetit ergeben die nächste sinnvolle Entscheidung.',
    items: [
      {
        id: 'conditions',
        title: 'Lasst die Bedingungen zwischen Wegen und Küste entscheiden',
        text:
          'Ein warmer, ruhiger Tag kann ans Meer führen; ein kühler Start öffnet vielleicht eine längere Wanderung. Für die Reisezeit zählt das saisonale Muster, für heute die aktuelle Vorhersage.',
        linkToken: 'weather_frigiliana',
        linkLabel: 'Wetter und Jahreszeiten vergleichen'
      },
      {
        id: 'village',
        title: 'Versteht das Dorf, bevor ihr den nächsten Ort auswählt',
        text:
          'Frigilianas Gassen, Hanglage und historischer Kern verändern, wie ein Spaziergang, ein Restaurantabend und der Rückweg zu Casa AMARA zusammenpassen.',
        linkToken: 'frigiliana_old_town',
        linkLabel: 'Durch die Altstadt gehen'
      },
      {
        id: 'coast-evening',
        title: 'Lasst einen Küstentag im Nerja-Zentrum zum Sundowner werden',
        text:
          'Endet der Strandnachmittag nahe der Altstadt, geht zu Fuß weiter zu Cochran’s Terrace. Wir haben dort im Sommer 2025 selbst den Sonnenuntergang gesehen; prüft vorab die aktuelle Öffnung.',
        linkToken: 'nerja_nightlife_authority',
        linkLabel: 'Unseren Nerja-Sundowner ansehen'
      },
      {
        id: 'hideaway-return',
        title: 'Entscheidet, wie der Tag privat ausklingen soll',
        text:
          'Nach Bergen, Küste oder Abendessen wird die Unterkunft Teil des Erlebnisses. Vergleicht die AMARA Hideaways nach ihrer tatsächlichen Lage und ihren jeweils belegten Eigenschaften.',
        linkToken: 'romantic_hideaways',
        linkLabel: 'Romantic Hideaways vergleichen'
      }
    ]
  },
  es: {
    title: 'Cread vuestro propio día y seguid la siguiente pregunta real',
    intro:
      'No son itinerarios fijos. Empezad por lo que os apetece ahora; el tiempo, el lugar y el hambre crean la siguiente elección útil.',
    items: [
      {
        id: 'conditions',
        title: 'Dejad que las condiciones decidan entre senderos y costa',
        text:
          'Un día cálido y tranquilo puede llevar al mar; un comienzo fresco quizá permita una ruta más larga. Usad el patrón estacional para las fechas y la previsión actual para hoy.',
        linkToken: 'weather_frigiliana',
        linkLabel: 'Comparar tiempo y estaciones'
      },
      {
        id: 'village',
        title: 'Entended el pueblo antes de elegir la siguiente parada',
        text:
          'Las calles, la ladera y el casco histórico de Frigiliana cambian cómo encajan un paseo, una cena y el regreso a Casa AMARA.',
        linkToken: 'frigiliana_old_town',
        linkLabel: 'Recorrer el casco antiguo'
      },
      {
        id: 'coast-evening',
        title: 'Convertid una tarde de costa en un atardecer en Nerja',
        text:
          'Si la playa termina cerca del casco antiguo, seguid andando hasta Cochran’s Terrace. Vimos allí personalmente la puesta de sol en verano de 2025; comprobad antes la apertura actual.',
        linkToken: 'nerja_nightlife_authority',
        linkLabel: 'Ver nuestro atardecer en Nerja'
      },
      {
        id: 'hideaway-return',
        title: 'Decidid cómo queréis terminar el día en privado',
        text:
          'Después de la montaña, la costa o la cena, el alojamiento forma parte de la experiencia. Comparad los refugios AMARA según su ubicación real y sus características verificadas.',
        linkToken: 'romantic_hideaways',
        linkLabel: 'Comparar Romantic Hideaways'
      }
    ]
  },
  nl: {
    title: 'Stel jullie eigen dag samen en volg de volgende echte vraag',
    intro:
      'Dit zijn geen vaste routes. Begin met wat nu past; weer, plaats en trek bepalen de volgende nuttige keuze.',
    items: [
      {
        id: 'conditions',
        title: 'Laat de omstandigheden kiezen tussen paden en kust',
        text:
          'Een warme, rustige dag kan naar zee leiden; een koele start maakt misschien een langere wandeling mogelijk. Gebruik het seizoen voor reisdata en de actuele verwachting voor vandaag.',
        linkToken: 'weather_frigiliana',
        linkLabel: 'Vergelijk weer en seizoenen'
      },
      {
        id: 'village',
        title: 'Begrijp het dorp voordat jullie de volgende plek kiezen',
        text:
          'Frigiliana’s straatjes, helling en historische kern bepalen hoe een wandeling, restaurantavond en terugkeer naar Casa AMARA bij elkaar passen.',
        linkToken: 'frigiliana_old_town',
        linkLabel: 'Loop door de oude stad'
      },
      {
        id: 'coast-evening',
        title: 'Laat een kustmiddag in centraal Nerja een sundowner worden',
        text:
          'Eindigt de strandmiddag bij de oude stad, loop dan door naar Cochran’s Terrace. Wij zagen daar zelf de zon ondergaan in de zomer van 2025; controleer vooraf de actuele opening.',
        linkToken: 'nerja_nightlife_authority',
        linkLabel: 'Bekijk onze sundowner in Nerja'
      },
      {
        id: 'hideaway-return',
        title: 'Kies hoe de dag privé mag eindigen',
        text:
          'Na bergen, kust of diner wordt de accommodatie onderdeel van de ervaring. Vergelijk de AMARA-hideaways op hun werkelijke ligging en per verblijf bewezen kenmerken.',
        linkToken: 'romantic_hideaways',
        linkLabel: 'Vergelijk Romantic Hideaways'
      }
    ]
  },
  sv: {
    title: 'Sätt ihop er egen dag och följ nästa verkliga fråga',
    intro:
      'Det här är inga fasta resplaner. Börja med det som passar nu; väder, plats och aptit skapar nästa användbara val.',
    items: [
      {
        id: 'conditions',
        title: 'Låt förhållandena välja mellan stigar och kust',
        text:
          'En varm och lugn dag kan passa havet; en sval start kanske öppnar en längre vandring. Använd säsongsmönstret för resdatum och den aktuella prognosen för dagens beslut.',
        linkToken: 'weather_frigiliana',
        linkLabel: 'Jämför väder och årstider'
      },
      {
        id: 'village',
        title: 'Förstå byn innan ni väljer nästa stopp',
        text:
          'Frigilianas gränder, sluttning och historiska kärna påverkar hur en promenad, restaurangkväll och återkomst till Casa AMARA hänger ihop.',
        linkToken: 'frigiliana_old_town',
        linkLabel: 'Gå genom gamla stan'
      },
      {
        id: 'coast-evening',
        title: 'Låt en kusteftermiddag i centrala Nerja bli en sundowner',
        text:
          'Om strandeftermiddagen slutar nära gamla stan kan ni promenera vidare till Cochran’s Terrace. Vi såg själva solnedgången där sommaren 2025; kontrollera aktuell öppning i förväg.',
        linkToken: 'nerja_nightlife_authority',
        linkLabel: 'Se vår sundowner i Nerja'
      },
      {
        id: 'hideaway-return',
        title: 'Bestäm hur dagen ska avslutas privat',
        text:
          'Efter berg, kust eller middag blir boendet en del av upplevelsen. Jämför AMARA-hideaways efter deras verkliga läge och de egenskaper som är verifierade för varje boende.',
        linkToken: 'romantic_hideaways',
        linkLabel: 'Jämför Romantic Hideaways'
      }
    ]
  }
};
