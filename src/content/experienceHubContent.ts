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
  relatedKicker: string;
  relatedTitle: string;
  relatedIntro: string;
  viewAllLabel: string;
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
    relatedKicker: 'Continue exploring',
    relatedTitle: 'Choose another local guide',
    relatedIntro:
      'Open another topic for practical local detail, or return to the overview of all guides.',
    viewAllLabel: 'View all experiences',
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
    relatedKicker: 'Weiter entdecken',
    relatedTitle: 'Wählt einen weiteren lokalen Guide',
    relatedIntro:
      'Öffnet ein weiteres Thema mit praktischen Details oder kehrt zur Übersicht aller Guides zurück.',
    viewAllLabel: 'Alle Erlebnisse ansehen',
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
    relatedKicker: 'Seguir descubriendo',
    relatedTitle: 'Elegid otra guía local',
    relatedIntro:
      'Abrid otro tema con información práctica o volved a la vista general de todas las guías.',
    viewAllLabel: 'Ver todas las experiencias',
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
    relatedKicker: 'Verder ontdekken',
    relatedTitle: 'Kies een andere lokale gids',
    relatedIntro:
      'Open een ander onderwerp met praktische informatie of ga terug naar het overzicht van alle gidsen.',
    viewAllLabel: 'Bekijk alle ervaringen',
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
    relatedKicker: 'Fortsätt upptäcka',
    relatedTitle: 'Välj en annan lokal guide',
    relatedIntro:
      'Öppna ett annat ämne med praktisk information eller återvänd till översikten över alla guider.',
    viewAllLabel: 'Se alla upplevelser',
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
  version: '2026-08-14-frigiliana-experience-hub-v2.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Things to Do in Frigiliana',
      description:
        'Explore hiking, village food, festivals, the weekly market, wellness, day trips and nearby beaches through AMARA’s Frigiliana experience guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Aktivitäten und Erlebnisse in Frigiliana',
      description:
        'Wandern, Restaurants, Feste, Markt, Wellness, Ausflüge und nahe Strände: Entdeckt Frigiliana mit praktischen Tipps von AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Frigiliana',
      description:
        'Senderismo, gastronomía, fiestas, mercado, bienestar, excursiones y playas cercanas para disfrutar Frigiliana a vuestro ritmo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Frigiliana',
      description:
        'Ontdek wandelingen, dorpsrestaurants, feesten, de markt, wellness, dagtochten en nabijgelegen stranden in AMARA’s Frigiliana-gids.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Frigiliana',
      description:
        'Upptäck vandring, byrestauranger, festivaler, marknad, wellness, utflykter och närliggande stränder i AMARAs Frigiliana-guide.',
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
      kicker: 'Things to do in Frigiliana',
      title: 'Whitewashed streets, mountain paths and days with room to breathe.',
      paragraphs: [
        'Shape your days around five real possibilities: explore Frigiliana’s old town, walk into the mountain landscape, choose a coast day, continue into dinner and a Nerja sundowner, or return early for private time at your AMARA hideaway. Weather, energy and appetite decide the order; no fixed itinerary does.',
        'The choices below explain what each version of the day means for you before a link appears. Open a detailed guide only when route, beach, table, current conditions or the return becomes your next question.'
      ],
      imageAlt:
        'A whitewashed street in Frigiliana opening towards the surrounding hills',
      exploreCta: 'Choose your experience'
    },
    sectionNav: {
      editorial: 'Highlights',
      moods: 'Choose an activity',
      all: 'All guides',
      places: 'Two places'
    },
    editorial: {
      kicker: 'Three ways to start',
      title: 'A beach, a table worth booking or one good day trip.',
      intro:
        'Choose the beach for an easy day, find a restaurant by location and style of meal, or compare realistic travel times for one good day trip.',
      featuredIds: ['beaches', 'restaurants', 'dayTrips']
    },
    moods: {
      title: 'What would you like to do today?',
      intro:
        'Choose an activity to open the full guide with locations, practical notes and planning advice.',
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
        'beaches',
        'restaurants',
        'dayTrips',
        'festivals',
        'market',
        'wellness',
        'hiking'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Footpaths & views',
        title: 'Walk beyond the white village',
        text:
          'Choose an easy village circuit or a more demanding route into the Sierras de Tejeda, with clear notes on heat, terrain and preparation.',
        linkLabel: 'Open the hiking guide',
        imageAlt:
          'Frigiliana street with a view towards the mountain landscape'
      },
      beaches: {
        kicker: 'Mediterranean days',
        title: 'Find the right stretch of coast',
        text:
          'From easy-access town beaches to coves and longer coastal days, compare the character of the shore before choosing where to settle.',
        linkLabel: 'Open the beach guide',
        imageAlt: 'Palm trees and the Mediterranean on Nerja’s coast'
      },
      restaurants: {
        kicker: 'Food & tables',
        title: 'Choose dinner — and a tested Nerja sundowner',
        text:
          'Stay in Frigiliana for dinner, or make central Nerja the evening. Our concrete continuation is Cochran’s Terrace, where we watched the sunset in summer 2025; the restaurant guide keeps the meal choice and return practical.',
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
        kicker: 'Rest & reset',
        title: 'Leave room for a genuinely quiet day',
        text:
          'Compare a treatment at your accommodation with a massage in the countryside, including what to confirm before you book.',
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
      title: 'Choose where to stay, then plan the days.',
      lead:
        'AMARA has four stays in Frigiliana and one in Nerja, with both places easy to include in the same trip.',
      availabilityCta: 'Check availability',
      staysCta: 'View all stays'
    }
  },

  de: {
    footerHighlights: {
      hub: 'Alle Erlebnisse'
    },
    hero: {
      kicker: 'Aktivitäten in Frigiliana',
      title: 'Durch weiße Gassen, in die Berge oder für einen Tag ans Meer.',
      paragraphs: [
        'Von Casa AMARA beginnt der Tag mitten in Frigiliana. Ihr könnt einfach durch die Altstadt laufen, direkt in die Berglandschaft starten oder für Strand und Abend nach Nerja fahren. Dazwischen bleiben die Dinge, die wir selbst besonders mögen: morgens Brot holen, ohne Auto zum Essen gehen und später durch die ruhiger gewordenen Gassen nach Hause laufen.'
      ],
      imageAlt:
        'Weiße Gasse in Frigiliana mit Blick auf die umliegenden Berge',
      exploreCta: 'Ideen für euren Tag'
    },
    sectionNav: {
      editorial: 'Unsere Tipps',
      moods: 'Aktivität auswählen',
      all: 'Alle Guides',
      places: 'Zwei Orte'
    },
    editorial: {
      kicker: 'Damit würden wir anfangen',
      title: 'Vier gute Tage rund um Frigiliana',
      intro:
        'Küste, Essen, Wandern oder ein Ausflug: Jede Idee funktioniert für sich und führt bei Bedarf zu den praktischen Details.',
      featuredIds: ['hiking', 'beaches', 'restaurants']
    },
    moods: {
      title: 'Was möchtet ihr heute unternehmen?',
      intro:
        'Wählt eine Aktivität und öffnet den vollständigen Guide mit Orten, praktischen Hinweisen und Planungstipps.',
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
        'beaches',
        'restaurants',
        'hiking',
        'dayTrips',
        'festivals',
        'market',
        'wellness'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Wege & Weitblick',
        title: 'Vom Dorf direkt in die Berge',
        text:
          'Schon oberhalb der Altstadt öffnen sich Wege in Richtung Sierra. Im Sommer sind Hitze und fehlender Schatten entscheidend; für längere Strecken gehören Wasser, feste Schuhe und ein aktueller Routencheck dazu.',
        linkLabel: 'Zum Wanderguide',
        imageAlt: 'Frigilianas Altstadt mit Blick in die Berglandschaft'
      },
      beaches: {
        kicker: 'Tage am Mittelmeer',
        title: 'Für einen Tag hinunter ans Meer',
        text:
          'Nerjas Stadtstrände sind unkompliziert, die Buchten Richtung Maro natürlicher. Von Frigiliana wird daraus ein richtiger Küstentag – mit Bus, Taxi oder Auto und der Rückkehr ins Dorf am Abend.',
        linkLabel: 'Zum Strandguide',
        imageAlt: 'Palmen und Mittelmeer an der Küste von Nerja'
      },
      restaurants: {
        kicker: 'Essen & Abend',
        title: 'Zu Fuß zum Essen – oder zum Sonnenuntergang nach Nerja',
        text:
          'In Frigiliana könnt ihr vom Apartment zu kleinen Restaurants laufen. Für einen Abend am Meer mögen wir Cochran’s Terrace in Nerja; dort haben wir im Sommer 2025 selbst den Sonnenuntergang gesehen.',
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
        kicker: 'Ruhe & Regeneration',
        title: 'Plant bewusst einen ruhigen Tag ein',
        text:
          'Erholung in der Unterkunft, eine mobile Behandlung oder eine Massage auf dem Land — ohne aus Wellness den nächsten Terminplan zu machen.',
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
        'Lounis, Zaid und Maha haben jeweils eine private Terrasse mit Außendusche, Hängematte und zwei Liegen. Farah ist unsere kompakte Suite ohne private Terrasse. So könnt ihr die Unterkunft wählen, die wirklich zu euren Tagen passt.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Romantic Hideaways entdecken'
    }
  },

  es: {
    footerHighlights: {
      hub: 'Todas las experiencias'
    },
    hero: {
      kicker: 'Qué hacer en Frigiliana',
      title: 'Calles blancas, senderos de montaña y días sin prisa.',
      paragraphs: [
        'Podéis componer los días con cinco posibilidades reales: descubrir el casco antiguo de Frigiliana, caminar por la montaña, elegir una jornada de costa, seguir con cena y atardecer en Nerja o volver antes para disfrutar en privado de vuestro refugio AMARA. El tiempo, la energía y el apetito deciden el orden, no un itinerario fijo.',
        'La selección explica primero qué significa cada forma de pasar el día. Abrid una guía detallada solo cuando la ruta, la playa, la mesa, las condiciones actuales o el regreso se conviertan en la siguiente pregunta concreta.'
      ],
      imageAlt:
        'Calle blanca de Frigiliana abierta hacia las montañas cercanas',
      exploreCta: 'Elige tu experiencia'
    },
    sectionNav: {
      editorial: 'Destacados',
      moods: 'Elegir actividad',
      all: 'Todas las guías',
      places: 'Dos lugares'
    },
    editorial: {
      kicker: 'Tres formas de empezar',
      title: 'Una buena mesa, el mar y una fiesta que cambie el ritmo.',
      intro:
        'Empezad por la gastronomía o por un día de playa. Cuando el calendario coincide, las fiestas muestran otra forma de vivir el pueblo.',
      featuredIds: ['restaurants', 'beaches', 'festivals']
    },
    moods: {
      title: '¿Qué queréis hacer hoy?',
      intro:
        'Elegid una actividad para abrir la guía completa con lugares, consejos prácticos y ayuda para planificar.',
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
        'beaches',
        'festivals',
        'market',
        'wellness',
        'dayTrips',
        'hiking'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana y Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Senderos y vistas',
        title: 'Caminar más allá del pueblo blanco',
        text:
          'Desde un paseo sencillo cerca del casco antiguo hasta rutas más exigentes hacia las Sierras de Tejeda, con atención al calor, al terreno y a la preparación.',
        linkLabel: 'Ver la guía de senderismo',
        imageAlt: 'Frigiliana con las montañas al fondo'
      },
      beaches: {
        kicker: 'Días mediterráneos',
        title: 'Encontrar la playa adecuada para cada día',
        text:
          'Playas urbanas cómodas, pequeñas calas o una jornada más larga por la costa: comparad el ambiente antes de elegir.',
        linkLabel: 'Ver la guía de playas',
        imageAlt: 'Palmeras y mar Mediterráneo en la costa de Nerja'
      },
      restaurants: {
        kicker: 'Cocina y ambiente',
        title: 'Elegir la cena y un atardecer probado en Nerja',
        text:
          'Cenad en Frigiliana o convertid el centro de Nerja en vuestra noche. Nuestra continuación concreta es Cochran’s Terrace, donde vimos personalmente la puesta de sol en verano de 2025; la guía ordena la cena y el regreso.',
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
        kicker: 'Calma y bienestar',
        title: 'Reservar espacio para descansar de verdad',
        text:
          'Una jornada lenta, un tratamiento en el alojamiento o un masaje en el campo, sin llenar de obligaciones el tiempo de descanso.',
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
      title: 'Elegid dónde alojaros y planificad después los días.',
      lead:
        'AMARA tiene cuatro alojamientos en Frigiliana y uno en Nerja, y podéis incluir los dos lugares en el mismo viaje.',
      availabilityCta: 'Consultar disponibilidad',
      staysCta: 'Ver todos los alojamientos'
    }
  },

  nl: {
    footerHighlights: {
      hub: 'Alle ervaringen'
    },
    hero: {
      kicker: 'Wat te doen in Frigiliana',
      title: 'Witte straatjes, bergpaden en dagen met ruimte.',
      paragraphs: [
        'Stel jullie dagen samen uit vijf echte mogelijkheden: ontdek de oude stad van Frigiliana, wandel het berglandschap in, kies een dag aan de kust, ga verder met diner en een sundowner in Nerja of keer eerder terug voor privé-tijd in jullie AMARA-hideaway. Weer, energie en trek bepalen de volgorde, niet een vast programma.',
        'De keuzes hieronder leggen eerst uit wat elke dagvorm voor jullie betekent. Open pas een uitgebreide gids wanneer route, strand, tafel, actuele omstandigheden of terugweg de volgende concrete vraag wordt.'
      ],
      imageAlt:
        'Witte straat in Frigiliana met uitzicht richting de bergen',
      exploreCta: 'Kies een activiteit'
    },
    sectionNav: {
      editorial: 'Uitgelicht',
      moods: 'Kies een activiteit',
      all: 'Alle gidsen',
      places: 'Twee plaatsen'
    },
    editorial: {
      kicker: 'Drie manieren om te beginnen',
      title: 'Begin aan zee, kies een goede tafel en trek daarna de natuur in.',
      intro:
        'Een stranddag en een goed gekozen maaltijd vormen de makkelijke basis. Voeg een wandeling toe wanneer jullie actief de heuvels in willen.',
      featuredIds: ['beaches', 'restaurants', 'hiking']
    },
    moods: {
      title: 'Wat willen jullie vandaag doen?',
      intro:
        'Kies een activiteit en open de volledige gids met locaties, praktische informatie en planningstips.',
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
        'beaches',
        'restaurants',
        'hiking',
        'dayTrips',
        'market',
        'festivals',
        'wellness'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Paden & uitzicht',
        title: 'Loop verder dan het witte dorp',
        text:
          'Kies een ontspannen ronde rond Frigiliana of een steviger traject richting de Sierras de Tejeda, met heldere informatie over hitte, terrein en voorbereiding.',
        linkLabel: 'Open de wandelgids',
        imageAlt: 'Frigiliana met uitzicht op het berglandschap'
      },
      beaches: {
        kicker: 'Dagen aan zee',
        title: 'Vind het stuk kust dat bij jullie dag past',
        text:
          'Van makkelijk bereikbare stadsstranden tot kleine baaien en langere kustdagen: vergelijk sfeer en bereikbaarheid voordat jullie vertrekken.',
        linkLabel: 'Open de strandgids',
        imageAlt: 'Palmbomen en de Middellandse Zee aan de kust van Nerja'
      },
      restaurants: {
        kicker: 'Eten & sfeer',
        title: 'Kies het diner en een beproefde sundowner in Nerja',
        text:
          'Eet in Frigiliana of maak van centraal Nerja jullie avond. Onze concrete volgende stap is Cochran’s Terrace, waar we in de zomer van 2025 zelf de zon zagen ondergaan; de restaurantgids houdt dinerkeuze en terugreis praktisch.',
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
        kicker: 'Rust & herstel',
        title: 'Houd ruimte vrij voor een echt rustige dag',
        text:
          'Vergelijk een behandeling in jullie verblijf met een massage op het platteland, inclusief wat er vóór het boeken moet worden bevestigd.',
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
      title: 'Kies jullie verblijf en plan daarna de dagen.',
      lead:
        'AMARA heeft vier verblijven in Frigiliana en één in Nerja; beide plaatsen passen gemakkelijk in dezelfde reis.',
      availabilityCta: 'Beschikbaarheid checken',
      staysCta: 'Bekijk alle verblijven'
    }
  },

  sv: {
    footerHighlights: {
      hub: 'Alla upplevelser'
    },
    hero: {
      kicker: 'Att göra i Frigiliana',
      title: 'Vita gränder, bergsleder och dagar med gott om utrymme.',
      paragraphs: [
        'Sätt ihop dagarna av fem verkliga möjligheter: upptäck Frigilianas gamla stad, vandra ut i bergslandskapet, välj en dag vid kusten, fortsätt med middag och sundowner i Nerja eller återvänd tidigare för privat tid i ert AMARA-hideaway. Väder, energi och aptit avgör ordningen, inte ett fast schema.',
        'Valen nedan förklarar först vad varje sorts dag betyder för er. Öppna en detaljerad guide först när led, strand, bord, aktuella förhållanden eller hemresa blir nästa konkreta fråga.'
      ],
      imageAlt:
        'Vitkalkad gata i Frigiliana med utsikt mot bergen',
      exploreCta: 'Välj din upplevelse'
    },
    sectionNav: {
      editorial: 'Utvalt',
      moods: 'Välj aktivitet',
      all: 'Alla guider',
      places: 'Två platser'
    },
    editorial: {
      kicker: 'Tre sätt att börja',
      title: 'Börja vid havet, välj ett bra bord och lämna plats för vila.',
      intro:
        'En stranddag och en väl vald måltid är den enkla grunden. Lägg till wellness när vistelsen behöver ett lugnare tempo.',
      featuredIds: ['beaches', 'restaurants', 'wellness']
    },
    moods: {
      title: 'Vad vill ni göra i dag?',
      intro:
        'Välj en aktivitet och öppna hela guiden med platser, praktisk information och planeringsråd.',
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
        'beaches',
        'restaurants',
        'wellness',
        'dayTrips',
        'market',
        'festivals',
        'hiking'
      ],
      destinationLabels: {
        frigiliana: 'Frigiliana',
        nerja: 'Nerja',
        both: 'Frigiliana & Nerja'
      }
    },
    stories: {
      hiking: {
        kicker: 'Stigar & utsikt',
        title: 'Vandra vidare från den vita byn',
        text:
          'Välj en lättare runda nära Frigiliana eller en mer krävande led mot Sierras de Tejeda, med tydliga råd om värme, terräng och förberedelser.',
        linkLabel: 'Öppna vandringsguiden',
        imageAlt: 'Frigiliana med utsikt mot bergslandskapet'
      },
      beaches: {
        kicker: 'Dagar vid Medelhavet',
        title: 'Hitta stranden som passar dagen',
        text:
          'Lättillgängliga stadsstränder, mindre vikar eller en längre dag längs kusten — jämför stämning och tillgänglighet innan ni väljer.',
        linkLabel: 'Öppna strandguiden',
        imageAlt: 'Palmer och Medelhavet vid Nerjas kust'
      },
      restaurants: {
        kicker: 'Mat & stämning',
        title: 'Välj middag och en prövad sundowner i Nerja',
        text:
          'Ät i Frigiliana eller låt centrala Nerja bli kvällens mål. Vår konkreta fortsättning är Cochran’s Terrace, där vi själva såg solnedgången sommaren 2025; restaurangguiden håller val av middag och hemresa praktiska.',
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
        kicker: 'Vila & återhämtning',
        title: 'Ge plats åt en verkligt stilla dag',
        text:
          'Jämför en behandling i boendet med massage på landsbygden, inklusive vad ni bör bekräfta före bokningen.',
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
      title: 'Välj boende och planera sedan dagarna.',
      lead:
        'AMARA har fyra boenden i Frigiliana och ett i Nerja; båda platserna ryms enkelt i samma resa.',
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
