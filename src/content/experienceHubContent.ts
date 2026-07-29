import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

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
    first: string;
    second: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    availabilityCta: string;
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
  backLabel: string;
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
    menuSectionLabel: 'Local guide',
    menuOverviewLabel: 'Frigiliana & Nerja',
    menuOverviewDescription: 'The complete Frigiliana and Nerja experience guide.',
    breadcrumbLabel: 'Experiences',
    breadcrumbAriaLabel: 'Breadcrumb',
    backLabel: 'Back to all experiences',
    switcherLabel: 'Explore another experience',
    relatedKicker: 'Continue exploring',
    relatedTitle: 'Where the day could take you next',
    relatedIntro:
      'Move straight into another locally edited guide, or return to the complete collection.',
    viewAllLabel: 'View all experiences',
    labels: {
      hiking: 'Hiking',
      beaches: 'Beaches',
      restaurants: 'Food',
      festivals: 'Festivals',
      market: 'Market',
      dayTrips: 'Day trips',
      wellness: 'Wellness',
      nightlife: 'Nightlife'
    }
  },
  de: {
    menuLabel: 'Erlebnisse',
    menuSectionLabel: 'Lokaler Guide',
    menuOverviewLabel: 'Frigiliana & Nerja',
    menuOverviewDescription: 'Der vollständige Experience Guide für Frigiliana und Nerja.',
    breadcrumbLabel: 'Erlebnisse',
    breadcrumbAriaLabel: 'Brotkrümelnavigation',
    backLabel: 'Zurück zu allen Erlebnissen',
    switcherLabel: 'Ein anderes Erlebnis entdecken',
    relatedKicker: 'Weiter entdecken',
    relatedTitle: 'Wohin dich der nächste Tag führen könnte',
    relatedIntro:
      'Wechsle direkt in einen weiteren lokalen Guide oder kehre zur vollständigen Auswahl zurück.',
    viewAllLabel: 'Alle Erlebnisse ansehen',
    labels: {
      hiking: 'Wandern',
      beaches: 'Strände',
      restaurants: 'Essen',
      festivals: 'Feste',
      market: 'Markt',
      dayTrips: 'Ausflüge',
      wellness: 'Wellness',
      nightlife: 'Nachtleben'
    }
  },
  es: {
    menuLabel: 'Experiencias',
    menuSectionLabel: 'Guía local',
    menuOverviewLabel: 'Frigiliana & Nerja',
    menuOverviewDescription: 'La guía completa de experiencias en Frigiliana y Nerja.',
    breadcrumbLabel: 'Experiencias',
    breadcrumbAriaLabel: 'Migas de pan',
    backLabel: 'Volver a todas las experiencias',
    switcherLabel: 'Descubrir otra experiencia',
    relatedKicker: 'Seguir descubriendo',
    relatedTitle: 'Ideas para continuar el viaje',
    relatedIntro:
      'Pasad directamente a otra guía local o volved a la selección completa.',
    viewAllLabel: 'Ver todas las experiencias',
    labels: {
      hiking: 'Senderismo',
      beaches: 'Playas',
      restaurants: 'Gastronomía',
      festivals: 'Fiestas',
      market: 'Mercado',
      dayTrips: 'Excursiones',
      wellness: 'Bienestar',
      nightlife: 'Noche'
    }
  },
  nl: {
    menuLabel: 'Ervaringen',
    menuSectionLabel: 'Lokale gids',
    menuOverviewLabel: 'Frigiliana & Nerja',
    menuOverviewDescription: 'De complete ervaringengids voor Frigiliana en Nerja.',
    breadcrumbLabel: 'Ervaringen',
    breadcrumbAriaLabel: 'Broodkruimelnavigatie',
    backLabel: 'Terug naar alle ervaringen',
    switcherLabel: 'Ontdek een andere ervaring',
    relatedKicker: 'Verder ontdekken',
    relatedTitle: 'Waar de volgende dag je kan brengen',
    relatedIntro:
      'Ga meteen door naar een andere lokale gids of keer terug naar de volledige selectie.',
    viewAllLabel: 'Bekijk alle ervaringen',
    labels: {
      hiking: 'Wandelen',
      beaches: 'Stranden',
      restaurants: 'Eten',
      festivals: 'Feesten',
      market: 'Markt',
      dayTrips: 'Dagtochten',
      wellness: 'Wellness',
      nightlife: 'Uitgaan'
    }
  },
  sv: {
    menuLabel: 'Upplevelser',
    menuSectionLabel: 'Lokal guide',
    menuOverviewLabel: 'Frigiliana & Nerja',
    menuOverviewDescription: 'Den kompletta upplevelseguiden för Frigiliana och Nerja.',
    breadcrumbLabel: 'Upplevelser',
    breadcrumbAriaLabel: 'Brödsmulenavigering',
    backLabel: 'Tillbaka till alla upplevelser',
    switcherLabel: 'Upptäck en annan upplevelse',
    relatedKicker: 'Fortsätt upptäcka',
    relatedTitle: 'Vart nästa dag kan leda',
    relatedIntro:
      'Fortsätt direkt till en annan lokal guide eller återvänd till hela urvalet.',
    viewAllLabel: 'Se alla upplevelser',
    labels: {
      hiking: 'Vandring',
      beaches: 'Stränder',
      restaurants: 'Mat',
      festivals: 'Festivaler',
      market: 'Marknad',
      dayTrips: 'Utflykter',
      wellness: 'Wellness',
      nightlife: 'Kvällsliv'
    }
  }
};

export const experienceHubSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-experience-hub-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Things to Do in Frigiliana & Nerja',
      description:
        'Explore beaches, food, culture, day trips, village life and evenings in Frigiliana and Nerja through AMARA’s locally edited experience guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Erlebnisse in Frigiliana & Nerja',
      description:
        'Wandern, Strände, Kultur, Restaurants und Ausflüge: Entdecke Frigiliana und Nerja mit dem redaktionell kuratierten AMARA Experience Guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Frigiliana y Nerja',
      description:
        'Gastronomía, fiestas, mercado, playas y noches en Nerja: una selección local para disfrutar Frigiliana y la Axarquía a vuestro ritmo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Frigiliana & Nerja',
      description:
        'Ontdek stranden, wandelingen, dagtochten, gastronomie en dorpsleven met de zelfstandig te plannen ervaringengids van AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Frigiliana & Nerja',
      description:
        'Upptäck stränder, lugna dagar, mat, utflykter och byliv i Frigiliana och Nerja med AMARAs lokalt utvalda guide.',
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
      hub: 'All experiences',
      first: 'Beach guide',
      second: 'Day trips'
    },
    hero: {
      kicker: 'Frigiliana & Nerja · The local edit',
      title: 'Two places. More than one way to spend the day.',
      paragraphs: [
        'Frigiliana gives you whitewashed lanes, long lunches and the foothills. Nerja adds the Mediterranean, lively terraces and evenings by the coast.',
        'This is not a checklist. It is an edited starting point for choosing the kind of day that suits you — then following the full local guide when something feels right.'
      ],
      imageAlt:
        'A whitewashed street in Frigiliana opening towards the surrounding hills',
      availabilityCta: 'Check availability'
    },
    sectionNav: {
      editorial: 'The edit',
      moods: 'Choose a mood',
      all: 'All experiences',
      places: 'Two places'
    },
    editorial: {
      kicker: 'This edition',
      title: 'Start with the coast. Add a village, a table and one good detour.',
      intro:
        'A beach day can be the base rather than the whole holiday. Pair it with Frigiliana’s slower rhythm, an Andalusian day trip or a table worth lingering over.',
      featuredIds: ['beaches', 'dayTrips', 'restaurants']
    },
    moods: {
      title: 'What would make today feel right?',
      intro:
        'Begin with the mood, not the map. Every choice opens the full guide with practical detail.',
      items: [
        { label: 'Sea air', id: 'beaches' },
        { label: 'A cultural detour', id: 'dayTrips' },
        { label: 'A memorable table', id: 'restaurants' },
        { label: 'An evening out', id: 'nightlife' }
      ]
    },
    catalog: {
      kicker: 'The full collection',
      title: 'Every AMARA experience guide',
      intro:
        'The editorial order changes by edition; access does not. Browse every guide and shape a stay that feels entirely your own.',
      order: [
        'beaches',
        'dayTrips',
        'restaurants',
        'festivals',
        'nightlife',
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
        title: 'Eat by mood, not by ranking',
        text:
          'Village terraces, creative cooking, seafood and relaxed local favourites — choose the atmosphere first, then the table.',
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
        title: 'Take the weekly market at village pace',
        text:
          'A practical guide to when to go, what to expect and how to combine market morning with coffee and a slow walk through Frigiliana.',
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
          'Build a slower rhythm around rest, an in-stay treatment or a countryside massage, without turning wellbeing into another schedule.',
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
      kicker: 'One stay, two rhythms',
      title: 'Frigiliana for the pause. Nerja for the pulse.',
      intro:
        'The two places are close enough to combine, but distinct enough to change the feeling of a day.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Choose the village for quiet mornings, historic streets, mountain views, local meals and evenings that naturally slow down.',
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
      title: 'Choose the stay. Let the days take shape.',
      lead:
        'AMARA places you close to both rhythms: the intimacy of Frigiliana and the coast at Nerja.',
      availabilityCta: 'Check availability',
      staysCta: 'View all stays'
    }
  },

  de: {
    footerHighlights: {
      hub: 'Alle Erlebnisse',
      first: 'Wandern',
      second: 'Tagesausflüge'
    },
    hero: {
      kicker: 'Frigiliana & Nerja · Die lokale Auswahl',
      title: 'Zwischen weißen Gassen, Bergen und Mittelmeer.',
      paragraphs: [
        'In Frigiliana beginnt der Tag langsam: mit Ruhe, weitem Blick und Wegen, die direkt aus dem Dorf hinausführen. Nerja ergänzt das Meer, lebendige Terrassen und Abende an der Küste.',
        'Dieser Guide ist keine Sehenswürdigkeitenliste. Er hilft dir, zuerst den Charakter deines Tages zu wählen — und führt dich dann in den passenden Detailguide.'
      ],
      imageAlt:
        'Weiße Gasse in Frigiliana mit Blick auf die umliegenden Berge',
      availabilityCta: 'Verfügbarkeit prüfen'
    },
    sectionNav: {
      editorial: 'Unsere Auswahl',
      moods: 'Nach Stimmung',
      all: 'Alle Erlebnisse',
      places: 'Zwei Orte'
    },
    editorial: {
      kicker: 'Diese Ausgabe',
      title: 'Erst hinaus in die Landschaft. Danach bleibt Zeit für Genuss.',
      intro:
        'Frigiliana ist ein idealer Ausgangspunkt für aktive Tage, ohne dass der Aufenthalt zum Sportprogramm werden muss. Eine gute Route, ein lohnender Ausflug oder ein Fest im Dorf genügen völlig.',
      featuredIds: ['hiking', 'dayTrips', 'festivals']
    },
    moods: {
      title: 'Wonach ist dir heute?',
      intro:
        'Beginne mit der Stimmung, nicht mit einer langen Liste. Hinter jeder Auswahl wartet der vollständige Guide.',
      items: [
        { label: 'Raus in die Natur', id: 'hiking' },
        { label: 'Kultur entdecken', id: 'dayTrips' },
        { label: 'Gut essen', id: 'restaurants' },
        { label: 'Ans Meer', id: 'beaches' }
      ]
    },
    catalog: {
      kicker: 'Die ganze Sammlung',
      title: 'Alle AMARA Experience Guides',
      intro:
        'Die Reihenfolge ist auf diese Ausgabe abgestimmt. Verfügbar bleiben selbstverständlich alle Erlebnisse in Frigiliana und Nerja.',
      order: [
        'hiking',
        'dayTrips',
        'restaurants',
        'festivals',
        'beaches',
        'market',
        'wellness',
        'nightlife'
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
          'Wähle zwischen einer entspannten Runde am Dorf und anspruchsvolleren Wegen Richtung Sierras de Tejeda — mit klaren Hinweisen zu Hitze, Gelände und Vorbereitung.',
        linkLabel: 'Zum Wanderguide',
        imageAlt: 'Frigilianas Altstadt mit Blick in die Berglandschaft'
      },
      beaches: {
        kicker: 'Tage am Mittelmeer',
        title: 'Finde den Strand, der zu deinem Tag passt',
        text:
          'Stadtstrand, kleine Bucht oder längerer Küstentag: Der Guide vergleicht Atmosphäre und Zugänglichkeit, bevor du dich entscheidest.',
        linkLabel: 'Zum Strandguide',
        imageAlt: 'Palmen und Mittelmeer an der Küste von Nerja'
      },
      restaurants: {
        kicker: 'Küche & Atmosphäre',
        title: 'Erst die Stimmung wählen, dann den Tisch',
        text:
          'Dachterrasse im Dorf, kreative Küche, Fisch am Meer oder unkompliziertes Lieblingslokal — hier zählt der passende Abend, nicht eine Rangliste.',
        linkLabel: 'Zum Restaurantguide',
        imageAlt: 'Sonnige weiße Altstadtgasse in Frigiliana'
      },
      festivals: {
        kicker: 'Kultur & Kalender',
        title: 'Frigiliana, wenn das ganze Dorf zusammenkommt',
        text:
          'Lerne die wichtigsten Feste, ihre Stimmung und die praktischen Besonderheiten kennen, bevor Straßen und Plätze sich füllen.',
        linkLabel: 'Zum Festivalguide',
        imageAlt: 'Traditionelle weiße Häuser an einer Gasse in Frigiliana'
      },
      market: {
        kicker: 'Lokales Leben',
        title: 'Ein Marktvormittag im Rhythmus des Dorfes',
        text:
          'Wann du kommen solltest, was dich erwartet und wie sich Markt, Kaffee und ein ruhiger Rundgang sinnvoll verbinden lassen.',
        linkLabel: 'Zum Marktguide',
        imageAlt: 'Weiße Häuser und Pflanzentöpfe in Frigiliana'
      },
      dayTrips: {
        kicker: 'Ein Ziel für den Tag',
        title: 'Lass einen andalusischen Ort den Tag bestimmen',
        text:
          'Vergleiche Málaga, Granada, den Caminito del Rey und Ronda mit realistischen Fahrzeiten und Planungshinweisen.',
        linkLabel: 'Zum Tagesausflugsguide',
        imageAlt: 'Frigiliana in der andalusischen Hügellandschaft'
      },
      wellness: {
        kicker: 'Ruhe & Regeneration',
        title: 'Plane bewusst einen wirklich ruhigen Tag ein',
        text:
          'Erholung in der Unterkunft, eine mobile Behandlung oder eine Massage auf dem Land — ohne aus Wellness den nächsten Terminplan zu machen.',
        linkLabel: 'Zum Wellnessguide',
        imageAlt: 'Ruhiges AMARA Schlafzimmer für eine erholsame Auszeit'
      },
      nightlife: {
        kicker: 'Nach Sonnenuntergang',
        title: 'Wähle den Nerja-Abend, der zu dir passt',
        text:
          'Beginne mit Essen und Terrasse, bleibe bei Livemusik oder ziehe lebhafter weiter. Der Guide trennt die unterschiedlichen Stimmungen klar.',
        linkLabel: 'Zum Nightlife-Guide',
        imageAlt: 'Helles AMARA Playa Apartment im Zentrum von Nerja'
      }
    },
    places: {
      kicker: 'Ein Aufenthalt, zwei Rhythmen',
      title: 'Frigiliana für die Ruhe. Nerja für das Leben an der Küste.',
      intro:
        'Beide Orte lassen sich leicht verbinden — und verändern dennoch sofort die Stimmung des Tages.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Das Dorf steht für ruhige Morgen, historische Gassen, Bergblicke, gutes Essen und Abende, die ganz von selbst langsamer werden.',
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
      title: 'Wähle die Unterkunft. Die Tage dürfen sich entwickeln.',
      lead:
        'Bei AMARA liegen beide Rhythmen nah: die persönliche Atmosphäre Frigilianas und die Küste von Nerja.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Alle Unterkünfte'
    }
  },

  es: {
    footerHighlights: {
      hub: 'Todas las experiencias',
      first: 'Restaurantes',
      second: 'Fiestas'
    },
    hero: {
      kicker: 'Frigiliana y Nerja · Selección local',
      title: 'Saborear el pueblo. Bajar al mar. Dejar que el día fluya.',
      paragraphs: [
        'Frigiliana invita a pasear sin prisa, sentarse a la mesa y vivir sus calles cuando el pueblo celebra. Nerja suma playas, terrazas y noches con más movimiento.',
        'No hemos creado una lista para verlo todo. Esta edición propone distintas maneras de disfrutar la zona y enlaza con la guía completa cuando encontráis un plan que os apetece.'
      ],
      imageAlt:
        'Calle blanca de Frigiliana abierta hacia las montañas cercanas',
      availabilityCta: 'Consultar disponibilidad'
    },
    sectionNav: {
      editorial: 'La selección',
      moods: 'Según el momento',
      all: 'Todas',
      places: 'Dos lugares'
    },
    editorial: {
      kicker: 'Esta edición',
      title: 'Una buena mesa, el pueblo en fiesta y la vida de cada semana.',
      intro:
        'La mejor forma de conocer Frigiliana no siempre empieza con un monumento. A veces comienza con el plato adecuado, una plaza llena o una mañana de mercado.',
      featuredIds: ['restaurants', 'festivals', 'market']
    },
    moods: {
      title: '¿Qué os apetece hoy?',
      intro:
        'Elegid primero el ambiente. Cada opción abre una guía completa con detalles prácticos.',
      items: [
        { label: 'Comer bien', id: 'restaurants' },
        { label: 'Vivir el pueblo', id: 'festivals' },
        { label: 'Bajar a la playa', id: 'beaches' },
        { label: 'Salir por Nerja', id: 'nightlife' }
      ]
    },
    catalog: {
      kicker: 'La colección completa',
      title: 'Todas las guías de experiencias AMARA',
      intro:
        'La selección editorial cambia según el idioma, pero ninguna experiencia desaparece. Aquí podéis explorar todas las opciones.',
      order: [
        'restaurants',
        'festivals',
        'market',
        'beaches',
        'nightlife',
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
        title: 'Elegir la mesa por el momento',
        text:
          'Terrazas en el pueblo, cocina creativa, pescado junto al mar y lugares sencillos que apetece repetir. No es un ranking: es una guía para acertar con el plan.',
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
        title: 'Una mañana de mercado sin prisas',
        text:
          'Cuándo ir, qué encontrar y cómo combinar el mercado semanal con un café y un paseo tranquilo por el pueblo.',
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
      kicker: 'Una estancia, dos ritmos',
      title: 'Frigiliana para bajar el ritmo. Nerja para acercarse al mar.',
      intro:
        'Están muy cerca y se combinan con facilidad, pero cada lugar cambia por completo el tono del día.',
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
      title: 'Elegid el alojamiento. El resto del día puede surgir.',
      lead:
        'AMARA os acerca a los dos ritmos: la intimidad de Frigiliana y el Mediterráneo en Nerja.',
      availabilityCta: 'Consultar disponibilidad',
      staysCta: 'Ver todos los alojamientos'
    }
  },

  nl: {
    footerHighlights: {
      hub: 'Alle ervaringen',
      first: 'Stranden',
      second: 'Wandelen'
    },
    hero: {
      kicker: 'Frigiliana & Nerja · Zelf op pad',
      title: 'Kust, bergpaden en dorpsleven — allemaal binnen handbereik.',
      paragraphs: [
        'Frigiliana geeft je witte straatjes, uitzicht en routes die bij het dorp beginnen. Nerja voegt de Middellandse Zee, terrassen en levendige avonden toe.',
        'Deze gids laat je zelfstandig kiezen. Begin bij het soort dag waar je zin in hebt en open daarna de uitgebreide gids met de praktische details.'
      ],
      imageAlt:
        'Witte straat in Frigiliana met uitzicht richting de bergen',
      availabilityCta: 'Beschikbaarheid checken'
    },
    sectionNav: {
      editorial: 'De selectie',
      moods: 'Kies je sfeer',
      all: 'Alles bekijken',
      places: 'Twee plaatsen'
    },
    editorial: {
      kicker: 'Deze editie',
      title: 'Begin aan zee. Trek er daarna op je eigen manier op uit.',
      intro:
        'Een stranddag, een goed geplande wandeling en een vrije dagtocht passen hier moeiteloos naast elkaar. Kies één duidelijke richting en houd de rest van de dag open.',
      featuredIds: ['beaches', 'hiking', 'dayTrips']
    },
    moods: {
      title: 'Waar heb je vandaag zin in?',
      intro:
        'Kies eerst het gevoel. Elke optie leidt naar een complete gids waarmee je zelf verder plant.',
      items: [
        { label: 'Naar zee', id: 'beaches' },
        { label: 'Actief naar buiten', id: 'hiking' },
        { label: 'Een dag op pad', id: 'dayTrips' },
        { label: 'Eten als een local', id: 'restaurants' }
      ]
    },
    catalog: {
      kicker: 'De volledige collectie',
      title: 'Alle AMARA-ervaringengidsen',
      intro:
        'De volgorde past bij deze editie, maar alle mogelijkheden blijven beschikbaar. Combineer ze zoals het bij jouw verblijf past.',
      order: [
        'beaches',
        'hiking',
        'dayTrips',
        'market',
        'restaurants',
        'festivals',
        'wellness',
        'nightlife'
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
        title: 'Vind het stuk kust dat bij je dag past',
        text:
          'Van makkelijk bereikbare stadsstranden tot kleine baaien en langere kustdagen: vergelijk sfeer en bereikbaarheid voordat je vertrekt.',
        linkLabel: 'Open de strandgids',
        imageAlt: 'Palmbomen en de Middellandse Zee aan de kust van Nerja'
      },
      restaurants: {
        kicker: 'Eten & sfeer',
        title: 'Kies eerst de sfeer, daarna de tafel',
        text:
          'Een dakterras in het dorp, creatieve keuken, vis aan zee of een ongecompliceerde lokale favoriet — geen ranglijst, wel de juiste avond.',
        linkLabel: 'Open de restaurantgids',
        imageAlt: 'Zonnige witte straat in Frigiliana'
      },
      festivals: {
        kicker: 'Cultuur & kalender',
        title: 'Beleef Frigiliana wanneer het dorp samenkomt',
        text:
          'Lees wat de belangrijkste feesten bijzonder maakt, hoe de straten veranderen en wat je vooraf moet plannen op drukke dagen.',
        linkLabel: 'Open de feestengids',
        imageAlt: 'Traditionele witte huizen in een straat van Frigiliana'
      },
      market: {
        kicker: 'Lokaal leven',
        title: 'Neem de weekmarkt op dorpstempo',
        text:
          'Wanneer je het beste gaat, wat je kunt verwachten en hoe je markt, koffie en een rustige dorpswandeling combineert.',
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
          'Vertraag in je verblijf, boek een behandeling aan huis of kies een massage op het platteland — zonder van ontspanning een programma te maken.',
        linkLabel: 'Open de wellnessgids',
        imageAlt: 'Rustige AMARA-slaapkamer voor een ontspannen verblijf'
      },
      nightlife: {
        kicker: 'Na zonsondergang',
        title: 'Kies de Nerja-avond die bij je past',
        text:
          'Begin met diner en een terras, luister naar livemuziek of zoek later meer levendigheid. De gids maakt het verschil tussen de sferen duidelijk.',
        linkLabel: 'Open de uitgaansgids',
        imageAlt: 'Licht interieur van AMARA Playa in het centrum van Nerja'
      }
    },
    places: {
      kicker: 'Eén verblijf, twee ritmes',
      title: 'Frigiliana voor de rust. Nerja voor het leven aan zee.',
      intro:
        'De plaatsen liggen dicht bij elkaar, maar geven een dag elk een totaal ander karakter.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Kies het dorp voor rustige ochtenden, historische straatjes, berguitzicht, lokale tafels en avonden die vanzelf vertragen.',
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
      title: 'Kies je verblijf. Vul de dagen op jouw manier.',
      lead:
        'Met AMARA liggen beide ritmes dichtbij: het intieme Frigiliana en de kust van Nerja.',
      availabilityCta: 'Beschikbaarheid checken',
      staysCta: 'Bekijk alle verblijven'
    }
  },

  sv: {
    footerHighlights: {
      hub: 'Alla upplevelser',
      first: 'Stränder',
      second: 'Välmående'
    },
    hero: {
      kicker: 'Frigiliana & Nerja · Ett lugnare urval',
      title: 'Havet nära. Byn ännu närmare. Gott om tid för båda.',
      paragraphs: [
        'Frigiliana bjuder på vita gränder, långa måltider och ett lugn som infinner sig av sig självt. Nerja kompletterar med Medelhavet, strandpromenader och kvällar med mer liv.',
        'Guiden hjälper er att välja känslan för dagen, inte att fylla ett schema. När något lockar finns hela den lokala guiden ett klick bort.'
      ],
      imageAlt:
        'Vitkalkad gata i Frigiliana med utsikt mot bergen',
      availabilityCta: 'Se tillgänglighet'
    },
    sectionNav: {
      editorial: 'Vårt urval',
      moods: 'Välj känsla',
      all: 'Alla upplevelser',
      places: 'Två platser'
    },
    editorial: {
      kicker: 'Den här utgåvan',
      title: 'Börja vid havet. Låt resten av dagen gå i ett mjukare tempo.',
      intro:
        'Kusten är nära, men den behöver inte fylla hela vistelsen. Varva strand med återhämtning, god mat och en utflykt som får ta den tid den tar.',
      featuredIds: ['beaches', 'wellness', 'dayTrips']
    },
    moods: {
      title: 'Vad längtar ni efter i dag?',
      intro:
        'Börja med känslan. Varje val leder vidare till en fullständig guide med praktiska råd.',
      items: [
        { label: 'Havsluft', id: 'beaches' },
        { label: 'En riktigt lugn dag', id: 'wellness' },
        { label: 'God mat', id: 'restaurants' },
        { label: 'En utflykt', id: 'dayTrips' }
      ]
    },
    catalog: {
      kicker: 'Hela samlingen',
      title: 'Alla AMARAs upplevelseguider',
      intro:
        'Ordningen är anpassad för den här utgåvan, men alla guider finns kvar. Välj fritt och skapa er egen rytm.',
      order: [
        'beaches',
        'wellness',
        'dayTrips',
        'restaurants',
        'market',
        'festivals',
        'hiking',
        'nightlife'
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
        title: 'Välj känslan först och bordet sedan',
        text:
          'En takterrass i byn, kreativ matlagning, fisk vid havet eller en avslappnad lokal favorit — guiden handlar om rätt kväll, inte en topplista.',
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
        title: 'Ta veckomarknaden i byns tempo',
        text:
          'När det är bäst att gå, vad ni kan förvänta er och hur marknaden kan kombineras med kaffe och en lugn promenad.',
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
          'Sakta ner i boendet, välj en behandling på plats eller en massage på landsbygden — utan att göra återhämtning till ännu ett schema.',
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
      kicker: 'En vistelse, två rytmer',
      title: 'Frigiliana för pausen. Nerja för livet vid havet.',
      intro:
        'Platserna ligger nära varandra men ger dagen två helt olika uttryck.',
      frigiliana: {
        title: 'Frigiliana',
        text:
          'Välj byn för stilla morgnar, historiska gränder, bergsutsikt, lokala måltider och kvällar som naturligt saktar ner.',
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
      title: 'Välj boendet. Låt dagarna ta form i sin egen takt.',
      lead:
        'Med AMARA finns båda rytmerna nära: Frigilianas intimitet och Nerjas kust.',
      availabilityCta: 'Se tillgänglighet',
      staysCta: 'Se alla boenden'
    }
  }
};
