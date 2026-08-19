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
      market: 'Markt',
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
        'Frigiliana is shaped by whitewashed lanes, long lunches, village traditions and the foothills that begin beyond the old town.',
        'Use the guides below for hiking, food, festivals, the Thursday market, wellness, day trips and nearby beaches, all chosen for a calm stay in and around the village.'
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
        title: 'Compare village terraces, Nerja dining and seafood',
        text:
          'See which places need a reservation, which Frigiliana tables are walkable from Casa AMARA and when a taxi or driver matters for Nerja.',
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
      title: 'Zwischen weißen Gassen, Bergwegen und ruhigen Tagen.',
      paragraphs: [
        'Frigiliana bietet euch weiße Gassen, weite Ausblicke, Dorfterrassen und Wanderwege, die direkt am Ort beginnen.',
        'Entdeckt Wandern, Restaurants, Feste, den Wochenmarkt, Wellness, Ausflüge und nahe Strände – passend zu ruhigen Tagen im und rund um das Dorf.'
      ],
      imageAlt:
        'Weiße Gasse in Frigiliana mit Blick auf die umliegenden Berge',
      exploreCta: 'Erlebnis auswählen'
    },
    sectionNav: {
      editorial: 'Unsere Tipps',
      moods: 'Aktivität auswählen',
      all: 'Alle Guides',
      places: 'Zwei Orte'
    },
    editorial: {
      kicker: 'Drei gute Ausgangspunkte',
      title: 'Beginnt am Meer, plant gutes Essen und nehmt die Landschaft dazu.',
      intro:
        'Ein Strandtag und ein gutes Restaurant gehören zu den einfachsten Entscheidungen. Wenn ihr danach aktiv hinauswollt, beginnt die Sierra direkt oberhalb des Dorfes.',
      featuredIds: ['beaches', 'restaurants', 'hiking']
    },
    moods: {
      title: 'Was möchtet ihr heute unternehmen?',
      intro:
        'Wählt eine Aktivität und öffnet den vollständigen Guide mit Orten, praktischen Hinweisen und Planungstipps.',
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
        title: 'Zu Fuß über das weiße Dorf hinaus',
        text:
          'Wählt zwischen einer entspannten Runde am Dorf und anspruchsvolleren Wegen Richtung Sierras de Tejeda — mit klaren Hinweisen zu Hitze, Gelände und Vorbereitung.',
        linkLabel: 'Zum Wanderguide',
        imageAlt: 'Frigilianas Altstadt mit Blick in die Berglandschaft'
      },
      beaches: {
        kicker: 'Tage am Mittelmeer',
        title: 'Findet den Strand, der zu eurem Tag passt',
        text:
          'Stadtstrand, kleine Bucht oder längerer Küstentag: Der Guide vergleicht Atmosphäre und Zugänglichkeit, bevor ihr euch entscheidet.',
        linkLabel: 'Zum Strandguide',
        imageAlt: 'Palmen und Mittelmeer an der Küste von Nerja'
      },
      restaurants: {
        kicker: 'Küche & Atmosphäre',
        title: 'Dorfterrassen, Dinner in Nerja und frischen Fisch vergleichen',
        text:
          'Lest, wo ihr reservieren solltet, welche Restaurants in Frigiliana von Casa AMARA zu Fuß erreichbar sind und wann ihr für Nerja Taxi oder Fahrer braucht.',
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
        title: 'Lasst einen andalusischen Ort den Tag bestimmen',
        text:
          'Vergleicht Málaga, Granada, den Caminito del Rey und Ronda mit realistischen Fahrzeiten und Planungshinweisen.',
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
      title: 'Wählt die Unterkunft und plant anschließend eure Tage.',
      lead:
        'AMARA hat vier Unterkünfte in Frigiliana und eine in Nerja; beide Orte lassen sich gut in derselben Reise verbinden.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Alle Unterkünfte'
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
        'Frigiliana ofrece calles blancas, restaurantes de pueblo, tradiciones locales y senderos que empiezan cerca del casco antiguo.',
        'Descubrid rutas, gastronomía, fiestas, mercado, bienestar, excursiones y playas cercanas para disfrutar días tranquilos dentro y alrededor del pueblo.'
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
        title: 'Comparar terrazas del pueblo, cenas en Nerja y pescado fresco',
        text:
          'Ved dónde conviene reservar, qué restaurantes de Frigiliana quedan a pie de Casa AMARA y cuándo hace falta taxi o conductor para Nerja.',
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
        'Frigiliana biedt witte straatjes, dorpsrestaurants, lokale tradities en wandelroutes die bij de oude kern beginnen.',
        'Ontdek wandelen, eten, feesten, de markt, wellness, dagtochten en stranden in de buurt, passend bij rustige dagen in en rond het dorp.'
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
        title: 'Vergelijk dorpsterrassen, dineren in Nerja en verse vis',
        text:
          'Lees waar jullie moeten reserveren, welke restaurants in Frigiliana op loopafstand van Casa AMARA liggen en wanneer voor Nerja een taxi of chauffeur nodig is.',
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
        'Frigiliana bjuder på vita gränder, byrestauranger, lokala traditioner och vandringsleder som börjar nära gamla stan.',
        'Upptäck vandring, mat, festivaler, marknad, wellness, utflykter och närliggande stränder för lugna dagar i och runt byn.'
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
        title: 'Jämför byterrasser, middagar i Nerja och färsk fisk',
        text:
          'Läs var ni bör boka, vilka restauranger i Frigiliana som ligger på gångavstånd från Casa AMARA och när taxi eller förare behövs till Nerja.',
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
