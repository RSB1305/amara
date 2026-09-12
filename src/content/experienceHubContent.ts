import { MARKET_CURATED } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';
import { routeOgImage } from '../lib/images/routeImages';

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
    /** Second heading below the H1: the evocative line, one step smaller (DR-DESIGN). */
    subtitle?: string;
    paragraphs: string[];
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
  /** Lead card: the old town owns the strongest experience corridor and is not part of the shared catalogue ids. */
  oldTownStory: ExperienceEditorial;
  /** What the year does to a Frigiliana day; the weather page is the corridor. */
  seasons: {
    kicker: string;
    title: string;
    text: string;
    linkLabel: string;
  };
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
  ogImage: routeOgImage('frigiliana.experience'),
  languages: {
    en: {
      title: 'Things to Do in Frigiliana: Village, Hills, Sea and Day Trips',
      description:
        'Walk through Frigiliana, head into the hills, spend a day by the sea or simply slow down at Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Erlebnisse in Frigiliana: Dorf, Berge, Meer und Ausflüge',
      description:
        'Lauft durch Frigiliana, startet in die Berge, verbringt einen Tag am Meer oder macht es euch einfach bei Casa AMARA gemütlich.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Frigiliana: pueblo, montaña, mar y excursiones',
      description:
        'Pasead por Frigiliana, salid a la montaña, pasad el día junto al mar o disfrutad sin prisas de Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Frigiliana: dorp, bergen, zee en dagtochten',
      description:
        'Wandel door Frigiliana, trek de heuvels in, breng een dag aan zee door of doe het rustig aan bij Casa AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Frigiliana: by, berg, hav och utflykter',
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
      title: 'Experiences in Frigiliana',
      subtitle: 'Morning in the village, later the hills or the sea.',
      paragraphs: [
        'Frigiliana sits on the southern slope of the Sierra de Almijara, ten minutes by car above Nerja: white lanes from Morisco times, the old sugar-cane factory El Ingenio at the foot of the village, walking routes from the front door and the sea down on the coast. Day visitors come through the middle of the day; early morning and evening, the village is yours. A day here is a choice between the lanes, the hills, the beach and one place in Andalusia, and almost every one ends at a table in the village.'
      ],
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
      title: 'Five ways to spend a day in Frigiliana',
      intro:
        'Stay in the village, walk up into the hills, drive down to the sea, cross Andalusia for a day or leave the day open. Each fills a whole day, and all of them end back in the lanes.',
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
        }
      ]
    },
    catalog: {
      kicker: 'Plan your days',
      title: 'All AMARA local guides',
      intro:
        'Eight guides answer different questions about a stay in Frigiliana, from the old town and the walking routes to a market morning or a nearby beach day.',
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
        title: 'Four routes from the village',
        text:
          'The start points are a few minutes through the lanes or a short drive away. The Cruz de Pinto loop is the view over village and sea, the Río Higuerón the gorge with its Cahorros, El Fuerte the long climb of about four hours, and the GR 249 stage runs to Cómpeta. In summer, set off early.',
        linkLabel: 'Choose the route by length and climb, with start point and track',
        imageAlt:
          'Frigiliana street with a view towards the mountain landscape'
      },
      beaches: {
        kicker: 'When you feel like the sea',
        title: 'Six beaches, all by car',
        text:
          'From Frigiliana you drive down for every beach: the town beaches in Nerja are close, the coves near Maro a little further east. Sand or pebbles, chiringuito or quiet, a car park on the beach or a path down, that is what sets the six apart. In the evening you are back in the village and the car stays put.',
        linkLabel: 'See which beach has sand, a chiringuito and a car park',
        imageAlt: 'Palm trees and the Mediterranean on Nerja’s coast'
      },
      restaurants: {
        kicker: 'Evenings in the village, lunch by the sea',
        title: 'Ten tables we like ourselves',
        text:
          'A table above the roofs of Frigiliana, creative cooking in Nerja or fresh fish in a lively bar: three different evenings. In the village you walk there and back; at weekends a reservation is worth it almost everywhere.',
        linkLabel: 'Choose the table for the evening by terrace, setting and size of the room',
        imageAlt: 'Sunlit whitewashed lane in Frigiliana'
      },
      festivals: {
        kicker: 'Culture & calendar',
        title: 'Processions in the lanes, summer nights in the village',
        text:
          'Over the year the Axarquía changes its rhythm: processions through the village lanes, decorated floats in Nerja, and in summer life moves into Frigiliana’s old town, densest at the Festival 3 Culturas at the end of August. The town halls publish programmes and times only shortly before each festival; if you travel for one, plan the month, not the day.',
        linkLabel: 'Check which festival falls in your travel dates and what it feels like',
        imageAlt: 'Traditional white houses along a Frigiliana street'
      },
      market: {
        kicker: 'Local life',
        title: 'Thursday is market day',
        text:
          'Every Thursday morning from about eight to two, all year: fruit and vegetables, olives and cheese, clothes and household goods, a few stalls for visitors. Loveliest between ten and twelve, then a coffee and up into the lanes. In holiday weeks the date can move.',
        linkLabel: 'Look up the hours, the stalls and the way up into the old town',
        imageAlt: 'Whitewashed homes and flowerpots in Frigiliana'
      },
      dayTrips: {
        kicker: 'One place for the day',
        title: 'One place per day: Málaga, Granada, Ronda',
        text:
          'You sleep in the quiet air of the hills and still reach the great places of Andalusia within a day. One highlight, a relaxed meal, perhaps one stop, and back to the village in the evening. Combine two and you see little of either.',
        linkLabel: 'Compare which place suits how many hours of driving',
        imageAlt: 'Frigiliana in the Andalusian hills'
      },
      wellness: {
        kicker: 'A day without a destination',
        title: 'A massage after the village steps',
        text:
          'Two addresses near Frigiliana: Frigiliana Wellness brings the table to your house, for Lidia and her Californian massage you drive out into the countryside. The rest of the day can be terrace, hammock and a book.',
        linkLabel: 'Stay in or drive out: compare the two addresses',
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
    oldTownStory: {
      kicker: 'Old town & history',
      title: 'Reading the village: twelve ceramic panels, El Ingenio and the lanes of the Barribarto',
      text:
        'Since 2014 the whole village core has been protected, not a single building. Twelve ceramic panels along the lanes tell what happened here in 1569; the old sugar-cane factory El Ingenio sits at the bottom, the steep curves of the Barribarto above. An unhurried hour covers most of it, and the same lane is worth walking at two times of day.',
      linkLabel: 'See which panel tells what, and in which order to walk them',
      imageAlt: 'Frigiliana’s white village on the hillside in evening light'
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
    seasons: {
      kicker: 'Through the year',
      title: 'Hiking in spring, sea in summer, sun in winter',
      text:
        'Spring and autumn are the hiking months, and late April to June and late August hold the village\'s big festivals. In summer you set off early and give the afternoon to the sea or the shade of the terrace. In winter Frigiliana is quiet, the midday sun is enough to sit outside, and the lanes are yours.',
      linkLabel: 'Weather by month: what counts for hiking, beach and winter'
    },
    closing: {
      title: 'And in the evening, walk home through the old village.',
      lead:
        'Lounis, Zaid and Maha have private terraces; Farah is our compact suite without one. We are happy to tell you honestly which stay has the details that matter to you.',
      availabilityCta: 'Check availability',
      staysCta: 'See the stays in Frigiliana'
    }
  },

  de: {
    footerHighlights: {
      hub: 'Alle Erlebnisse'
    },
    hero: {
      kicker: 'Eure Tage in Frigiliana',
      title: 'Erlebnisse in Frigiliana',
      subtitle: 'Morgens durchs Dorf, später in die Berge oder ans Meer.',
      paragraphs: [
        'Frigiliana liegt am Südhang der Sierra de Almijara, zehn Autominuten über Nerja: weiße Gassen aus moriskischer Zeit, die alte Zuckerrohrfabrik El Ingenio am unteren Dorfrand, Wanderwege ab Haustür und das Meer unten an der Küste. Tagsüber kommen die Ausflügler, früh am Morgen und abends gehört das Dorf euch. Ein Tag hier ist eine Wahl zwischen Gassen, Bergen, Strand und einem Ziel in Andalusien, und fast jeder endet an einem Tisch im Dorf.'
      ],
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
      title: 'Fünf Arten, einen Tag in Frigiliana zu verbringen',
      intro:
        'Im Dorf bleiben, hinauf in die Berge, hinunter ans Meer, einmal quer durch Andalusien oder ein Tag ohne Ziel. Jede Art füllt einen ganzen Tag, und alle enden abends wieder in den Gassen.',
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
        }
      ]
    },
    catalog: {
      kicker: 'Eure Tage planen',
      title: 'Alle lokalen AMARA-Guides',
      intro:
        'Acht Guides beantworten unterschiedliche Fragen rund um euren Aufenthalt in Frigiliana – von der Altstadt über die Wanderwege bis zum Marktbesuch oder einem nahen Strandtag.',
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
        title: 'Vier Wege ab dem Dorf',
        text:
          'Die Startpunkte liegen ein paar Minuten durch die Gassen oder ein kurzes Stück mit dem Auto entfernt. Der Rundweg zur Cruz de Pinto ist die Aussicht über Dorf und Meer, der Río Higuerón die Schlucht mit den Cahorros, der El Fuerte der lange Aufstieg von rund vier Stunden, die Etappe des GR 249 führt bis Cómpeta. Im Sommer geht ihr früh los.',
        linkLabel: 'Nach Länge und Steigung die passende Route wählen, mit Start und Track',
        imageAlt: 'Frigilianas Altstadt mit Blick in die Berglandschaft'
      },
      beaches: {
        kicker: 'Wenn euch nach Meer ist',
        title: 'Sechs Strände, alle mit dem Auto',
        text:
          'Von Frigiliana fahrt ihr für jeden Strand hinunter: In Nerja liegen die Stadtstrände nah, zu den Buchten bei Maro geht es ein Stück weiter nach Osten. Sand oder Kies, Chiringuito oder Stille, Parkplatz am Strand oder ein Pfad hinunter, das unterscheidet die sechs. Abends seid ihr zurück im Dorf und lasst das Auto stehen.',
        linkLabel: 'Sehen, welcher Strand Sand, Chiringuito und Parkplatz hat',
        imageAlt: 'Palmen und Mittelmeer an der Küste von Nerja'
      },
      restaurants: {
        kicker: 'Abends im Dorf, mittags am Meer',
        title: 'Zehn Tische, die wir selbst mögen',
        text:
          'Ein Tisch über den Dächern Frigilianas, kreative Küche in Nerja oder fangfrischer Fisch in einer lebhaften Bar: drei verschiedene Abende. Im Dorf geht ihr zu Fuß hin und zurück; am Wochenende lohnt sich fast überall eine Reservierung.',
        linkLabel: 'Nach Terrasse, Lage und Raumgröße den Tisch für den Abend wählen',
        imageAlt: 'Sonnige weiße Altstadtgasse in Frigiliana'
      },
      festivals: {
        kicker: 'Kultur & Kalender',
        title: 'Prozessionen in den Gassen, Sommernächte im Dorf',
        text:
          'Im Lauf des Jahres wechselt die Axarquía ihren Rhythmus: Prozessionen durch die Dorfgassen, geschmückte Wagen in Nerja, im Sommer verlagert sich das Leben in Frigilianas Altstadt, Ende August beim Festival 3 Culturas am dichtesten. Die Gemeinden veröffentlichen Programme und Uhrzeiten erst kurz vor dem Fest; wer die Reise danach richtet, plant den Monat, nicht den Tag.',
        linkLabel: 'Nachsehen, welches Fest in eure Reisezeit fällt und wie es sich anfühlt',
        imageAlt: 'Traditionelle weiße Häuser an einer Gasse in Frigiliana'
      },
      market: {
        kicker: 'Lokales Leben',
        title: 'Donnerstag ist Markt',
        text:
          'Jeden Donnerstagvormittag von etwa acht bis zwei, das ganze Jahr: Obst und Gemüse, Oliven und Käse, Kleider und Haushaltskram, ein paar Stände für Besucher. Am schönsten zwischen zehn und zwölf, danach ein Kaffee und hinauf in die Gassen. In Feiertagswochen kann der Termin wandern.',
        linkLabel: 'Uhrzeit, Stände und den Weg hinauf in die Altstadt nachlesen',
        imageAlt: 'Weiße Häuser und Pflanzentöpfe in Frigiliana'
      },
      dayTrips: {
        kicker: 'Ein Ziel für den Tag',
        title: 'Ein Ziel pro Tag: Málaga, Granada, Ronda',
        text:
          'Ihr schlaft in der ruhigen Luft der Hügel und erreicht die großen Orte Andalusiens innerhalb eines Tages. Ein Highlight, ein entspanntes Essen, vielleicht ein Stopp, und abends zurück ins Dorf. Wer zwei Ziele verbindet, sieht von beiden wenig.',
        linkLabel: 'Vergleichen, welches Ziel zu wie vielen Stunden Fahrt passt',
        imageAlt: 'Frigiliana in der andalusischen Hügellandschaft'
      },
      wellness: {
        kicker: 'Ein Tag ohne Ziel',
        title: 'Eine Massage nach den Treppen des Dorfes',
        text:
          'Zwei Adressen bei Frigiliana: Frigiliana Wellness kommt mit der Liege zu euch ins Haus, zu Lidia und ihrer kalifornischen Massage fahrt ihr aufs Land hinaus. Der Rest des Tages darf Terrasse, Hängematte und ein Buch sein.',
        linkLabel: 'Bleiben oder hinausfahren: die beiden Adressen vergleichen',
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
    oldTownStory: {
      kicker: 'Altstadt & Geschichte',
      title: 'Das Dorf lesen: zwölf Keramiktafeln, El Ingenio und die Gassen des Barribarto',
      text:
        'Seit 2014 steht der ganze Ortskern unter Schutz, nicht ein einzelnes Bauwerk. Zwölf Keramiktafeln erzählen entlang der Gassen, was hier 1569 geschah; unten liegt die alte Zuckerrohrfabrik El Ingenio, oben die steilen Kurven des Barribarto. Eine geruhsame Stunde reicht für das meiste, und dieselbe Gasse lohnt sich zu zwei Tageszeiten.',
      linkLabel: 'Sehen, welche Tafel was erzählt und in welcher Reihenfolge ihr sie abgeht',
      imageAlt: 'Frigilianas weißes Dorf am Hang im Abendlicht'
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
    seasons: {
      kicker: 'Übers Jahr',
      title: 'Wandern im Frühling, Meer im Sommer, Sonne im Winter',
      text:
        'Frühling und Herbst sind die Wandermonate, und von Ende April bis Juni sowie Ende August liegen die großen Feste des Dorfes. Im Sommer geht ihr früh los, der Nachmittag gehört dem Meer oder dem Schatten der Terrasse. Im Winter ist Frigiliana still, die Mittagssonne reicht für draußen, und die Gassen gehören euch.',
      linkLabel: 'Wetter je Monat: was für Wandern, Strand und Winter zählt'
    },
    closing: {
      title: 'Und am Ende wieder nach Hause durch die Altstadt.',
      lead:
        'Lounis, Zaid und Maha haben jeweils eine private Terrasse mit Außendusche, Hängematte und zwei Liegen. Farah ist unsere kompakte Suite ohne private Terrasse. Wir sagen euch gern ehrlich, welche Unterkunft die Details hat, die euch wichtig sind.',
      availabilityCta: 'Verfügbarkeit prüfen',
      staysCta: 'Unterkünfte in Frigiliana ansehen'
    }
  },

  es: {
    footerHighlights: {
      hub: 'Todas las experiencias'
    },
    hero: {
      kicker: 'Vuestros días en Frigiliana',
      title: 'Experiencias en Frigiliana',
      subtitle: 'Por la mañana el pueblo; después, la montaña o el mar.',
      paragraphs: [
        'Frigiliana está en la ladera sur de la Sierra de Almijara, a diez minutos en coche por encima de Nerja: calles blancas de origen morisco, la antigua fábrica de caña de azúcar El Ingenio en la parte baja del pueblo, senderos que empiezan en la puerta de casa y el mar abajo, en la costa. De día llegan los visitantes; a primera hora y por la noche el pueblo es vuestro. Un día aquí es elegir entre las calles, la montaña, la playa y un destino de Andalucía, y casi todos terminan en una mesa del pueblo.'
      ],
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
      title: 'Cinco maneras de pasar un día en Frigiliana',
      intro:
        'Quedarse en el pueblo, subir a la montaña, bajar al mar, cruzar Andalucía por un día o dejar el día sin plan. Cada una llena un día entero, y todas terminan de noche en las calles.',
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
        }
      ]
    },
    catalog: {
      kicker: 'Planificad los días',
      title: 'Todas las guías locales de AMARA',
      intro:
        'Ocho guías responden a preguntas distintas sobre una estancia en Frigiliana: del casco antiguo y los senderos al mercado o una playa cercana.',
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
        title: 'Cuatro rutas desde el pueblo',
        text:
          'Los puntos de salida están a unos minutos por las calles o a un corto trayecto en coche. La vuelta a la Cruz de Pinto es la vista sobre el pueblo y el mar; el río Higuerón, la garganta con sus Cahorros; El Fuerte, la subida larga de unas cuatro horas; y la etapa del GR 249 llega hasta Cómpeta. En verano, salid temprano.',
        linkLabel: 'Elegir la ruta por longitud y desnivel, con inicio y track',
        imageAlt: 'Frigiliana con las montañas al fondo'
      },
      beaches: {
        kicker: 'Cuando apetece el mar',
        title: 'Seis playas, todas en coche',
        text:
          'Desde Frigiliana bajáis en coche a cualquier playa: las de Nerja quedan cerca, las calas de Maro un poco más al este. Arena o grava, chiringuito o silencio, aparcamiento en la playa o un sendero de bajada: eso distingue a las seis. Por la noche estáis de vuelta en el pueblo y el coche se queda aparcado.',
        linkLabel: 'Ver qué playa tiene arena, chiringuito y aparcamiento',
        imageAlt: 'Palmeras y mar Mediterráneo en la costa de Nerja'
      },
      restaurants: {
        kicker: 'Noches en el pueblo, almuerzos junto al mar',
        title: 'Diez mesas que nos gustan a nosotros',
        text:
          'Una mesa sobre los tejados de Frigiliana, cocina creativa en Nerja o pescado fresco en un bar animado: tres noches distintas. En el pueblo vais y volvéis andando; los fines de semana conviene reservar casi en todas partes.',
        linkLabel: 'Elegir la mesa de la noche por terraza, ubicación y tamaño del local',
        imageAlt: 'Calle blanca de Frigiliana iluminada por el sol'
      },
      festivals: {
        kicker: 'Cultura y calendario',
        title: 'Procesiones por las calles, noches de verano en el pueblo',
        text:
          'A lo largo del año la Axarquía cambia de ritmo: procesiones por las calles del pueblo, carrozas engalanadas en Nerja y, en verano, la vida se traslada al casco antiguo de Frigiliana, con el Festival 3 Culturas a finales de agosto como momento más intenso. Los ayuntamientos publican programas y horarios poco antes de cada fiesta; si viajáis por una, planificad el mes, no el día.',
        linkLabel: 'Comprobar qué fiesta cae en vuestras fechas y cómo se vive',
        imageAlt: 'Casas blancas tradicionales en una calle de Frigiliana'
      },
      market: {
        kicker: 'Vida local',
        title: 'Los jueves hay mercadillo',
        text:
          'Cada jueves por la mañana, de unas ocho a dos, todo el año: fruta y verdura, aceitunas y queso, ropa y menaje, algunos puestos para visitantes. Lo mejor entre las diez y las doce; después, un café y a subir por las calles. En semanas con festivo la fecha puede cambiar.',
        linkLabel: 'Consultar horario, puestos y el camino de subida al casco antiguo',
        imageAlt: 'Casas encaladas y macetas en Frigiliana'
      },
      dayTrips: {
        kicker: 'Un destino para el día',
        title: 'Un destino por día: Málaga, Granada, Ronda',
        text:
          'Dormís en el aire tranquilo de las colinas y llegáis a los grandes lugares de Andalucía en un día. Un punto fuerte, una comida sin prisa, quizá una parada, y por la noche de vuelta al pueblo. Quien junta dos destinos ve poco de ambos.',
        linkLabel: 'Comparar qué destino encaja con cuántas horas de coche',
        imageAlt: 'Frigiliana entre las colinas de Andalucía'
      },
      wellness: {
        kicker: 'Un día sin destino',
        title: 'Un masaje después de las escaleras del pueblo',
        text:
          'Dos direcciones cerca de Frigiliana: Frigiliana Wellness viene con la camilla a vuestra casa; a Lidia y su masaje californiano vais vosotros, al campo. El resto del día puede ser terraza, hamaca y un libro.',
        linkLabel: 'Quedarse o salir: comparar las dos direcciones',
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
    oldTownStory: {
      kicker: 'Casco antiguo e historia',
      title: 'Leer el pueblo: doce paneles de cerámica, El Ingenio y las calles del Barribarto',
      text:
        'Desde 2014 está protegido todo el casco histórico, no un edificio suelto. Doce paneles de cerámica cuentan por las calles lo que ocurrió aquí en 1569; abajo queda la antigua fábrica de caña de azúcar El Ingenio, arriba las curvas empinadas del Barribarto. Una hora sin prisa cubre casi todo, y la misma calle merece dos horas distintas del día.',
      linkLabel: 'Ver qué cuenta cada panel y en qué orden recorrerlos',
      imageAlt: 'El pueblo blanco de Frigiliana en la ladera con luz de tarde'
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
    seasons: {
      kicker: 'A lo largo del año',
      title: 'Senderismo en primavera, mar en verano, sol en invierno',
      text:
        'Primavera y otoño son los meses de senderismo, y entre finales de abril y junio, y a finales de agosto, caen las grandes fiestas del pueblo. En verano se sale temprano y la tarde es para el mar o la sombra de la terraza. En invierno Frigiliana está tranquila, el sol del mediodía basta para estar fuera y las calles son vuestras.',
      linkLabel: 'El tiempo por meses: lo que cuenta para senderismo, playa e invierno'
    },
    closing: {
      title: 'Y por la noche, volvéis a casa por el casco antiguo.',
      lead:
        'Lounis, Zaid y Maha tienen terraza privada; Farah es nuestra suite compacta sin terraza. Os diremos con sinceridad qué alojamiento tiene los detalles que más os importan.',
      availabilityCta: 'Consultar disponibilidad',
      staysCta: 'Ver los alojamientos en Frigiliana'
    }
  },

  nl: {
    footerHighlights: {
      hub: 'Alle ervaringen'
    },
    hero: {
      kicker: 'Jullie dagen in Frigiliana',
      title: 'Ervaringen in Frigiliana',
      subtitle: 'In de ochtend het dorp, daarna de bergen of de zee.',
      paragraphs: [
        'Frigiliana ligt op de zuidhelling van de Sierra de Almijara, tien minuten rijden boven Nerja: witte straatjes met een Moors verleden, de oude suikerrietfabriek El Ingenio onderaan het dorp, wandelroutes vanaf de voordeur en de zee beneden aan de kust. Overdag komen de dagjesmensen; vroeg in de ochtend en ’s avonds is het dorp van jullie. Een dag hier is kiezen tussen de straatjes, de bergen, het strand en één plek in Andalusië, en bijna elke dag eindigt aan een tafel in het dorp.'
      ],
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
      title: 'Vijf manieren om een dag in Frigiliana door te brengen',
      intro:
        'In het dorp blijven, de bergen in, naar zee, één dag dwars door Andalusië of een dag zonder plan. Elke manier vult een hele dag, en allemaal eindigen ze ’s avonds weer in de straatjes.',
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
        }
      ]
    },
    catalog: {
      kicker: 'Plan jullie dagen',
      title: 'Alle lokale gidsen van AMARA',
      intro:
        'Acht gidsen beantwoorden verschillende vragen rond een verblijf in Frigiliana, van de oude kern en de wandelroutes tot de markt of een stranddag in de buurt.',
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
        title: 'Vier routes vanuit het dorp',
        text:
          'De startpunten liggen een paar minuten door de straatjes of een kort stuk met de auto. De ronde naar de Cruz de Pinto is het uitzicht over dorp en zee, de Río Higuerón de kloof met de Cahorros, El Fuerte de lange klim van zo’n vier uur, en de etappe van de GR 249 loopt tot Cómpeta. In de zomer vertrekken jullie vroeg.',
        linkLabel: 'Kies de route op lengte en klim, met startpunt en track',
        imageAlt: 'Frigiliana met uitzicht op het berglandschap'
      },
      beaches: {
        kicker: 'Als jullie zin hebben in zee',
        title: 'Zes stranden, allemaal met de auto',
        text:
          'Vanuit Frigiliana rijden jullie voor elk strand naar beneden: de stadsstranden van Nerja liggen dichtbij, de baaien bij Maro een stukje verder naar het oosten. Zand of kiezels, chiringuito of stilte, parkeren op het strand of een pad naar beneden, dat maakt het verschil tussen de zes. ’s Avonds zijn jullie terug in het dorp en blijft de auto staan.',
        linkLabel: 'Zie welk strand zand, een chiringuito en een parkeerplaats heeft',
        imageAlt: 'Palmbomen en de Middellandse Zee aan de kust van Nerja'
      },
      restaurants: {
        kicker: '’s Avonds in het dorp, ’s middags aan zee',
        title: 'Tien tafels die wij zelf goed vinden',
        text:
          'Een tafel boven de daken van Frigiliana, creatieve keuken in Nerja of verse vis in een levendige bar: drie verschillende avonden. In het dorp lopen jullie heen en terug; in het weekend loont reserveren bijna overal.',
        linkLabel: 'Kies de tafel voor de avond op terras, ligging en grootte van de zaak',
        imageAlt: 'Zonnige witte straat in Frigiliana'
      },
      festivals: {
        kicker: 'Cultuur & kalender',
        title: 'Processies door de straatjes, zomernachten in het dorp',
        text:
          'Door het jaar heen verandert de Axarquía van ritme: processies door de dorpsstraatjes, versierde wagens in Nerja, en in de zomer verplaatst het leven zich naar de oude kern van Frigiliana, het drukst tijdens het Festival 3 Culturas eind augustus. De gemeenten publiceren programma’s en tijden pas kort voor elk feest; wie ervoor reist, plant de maand, niet de dag.',
        linkLabel: 'Kijk welk feest in jullie reisperiode valt en hoe het voelt',
        imageAlt: 'Traditionele witte huizen in een straat van Frigiliana'
      },
      market: {
        kicker: 'Lokaal leven',
        title: 'Donderdag is marktdag',
        text:
          'Elke donderdagochtend van ongeveer acht tot twee, het hele jaar: groente en fruit, olijven en kaas, kleding en huishoudspullen, een paar kramen voor bezoekers. Het mooist tussen tien en twaalf, daarna een koffie en omhoog de straatjes in. In weken met een feestdag kan de datum verschuiven.',
        linkLabel: 'Tijden, kramen en de weg omhoog naar de oude kern nalezen',
        imageAlt: 'Witte huizen en plantenpotten in Frigiliana'
      },
      dayTrips: {
        kicker: 'Eén bestemming voor de dag',
        title: 'Eén bestemming per dag: Málaga, Granada, Ronda',
        text:
          'Jullie slapen in de rustige lucht van de heuvels en bereiken de grote plekken van Andalusië toch binnen een dag. Eén hoogtepunt, een ontspannen maaltijd, misschien een tussenstop, en ’s avonds terug naar het dorp. Wie twee bestemmingen combineert, ziet van allebei weinig.',
        linkLabel: 'Vergelijk welke bestemming past bij hoeveel uur rijden',
        imageAlt: 'Frigiliana tussen de Andalusische heuvels'
      },
      wellness: {
        kicker: 'Een dag zonder bestemming',
        title: 'Een massage na de trappen van het dorp',
        text:
          'Twee adressen bij Frigiliana: Frigiliana Wellness komt met de massagetafel bij jullie thuis, naar Lidia en haar Californische massage rijden jullie het land in. De rest van de dag mag terras, hangmat en een boek zijn.',
        linkLabel: 'Blijven of erop uit: vergelijk de twee adressen',
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
    oldTownStory: {
      kicker: 'Oude kern & geschiedenis',
      title: 'Het dorp lezen: twaalf keramiektegels, El Ingenio en de straatjes van het Barribarto',
      text:
        'Sinds 2014 is de hele oude kern beschermd, niet één gebouw. Twaalf keramiektegels langs de straatjes vertellen wat hier in 1569 gebeurde; onderaan ligt de oude suikerrietfabriek El Ingenio, bovenaan de steile bochten van het Barribarto. Een rustig uur is genoeg voor het meeste, en dezelfde straat is op twee momenten van de dag de moeite waard.',
      linkLabel: 'Zie welke tegel wat vertelt en in welke volgorde jullie ze lopen',
      imageAlt: 'Het witte dorp Frigiliana op de helling in avondlicht'
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
    seasons: {
      kicker: 'Door het jaar',
      title: 'Wandelen in de lente, zee in de zomer, zon in de winter',
      text:
        'Lente en herfst zijn de wandelmaanden, en van eind april tot juni en eind augustus vallen de grote feesten van het dorp. In de zomer vertrek je vroeg en is de middag voor de zee of de schaduw van het terras. In de winter is Frigiliana stil, de middagzon is genoeg om buiten te zitten en de straatjes zijn van jullie.',
      linkLabel: 'Weer per maand: wat telt voor wandelen, strand en winter'
    },
    closing: {
      title: 'En ’s avonds lopen jullie door de oude kern naar huis.',
      lead:
        'Lounis, Zaid en Maha hebben een privéterras; Farah is onze compacte suite zonder terras. We vertellen jullie graag eerlijk welk verblijf de details heeft die belangrijk voor jullie zijn.',
      availabilityCta: 'Beschikbaarheid checken',
      staysCta: 'Bekijk de verblijven in Frigiliana'
    }
  },

  sv: {
    footerHighlights: {
      hub: 'Alla upplevelser'
    },
    hero: {
      kicker: 'Era dagar i Frigiliana',
      title: 'Upplevelser i Frigiliana',
      subtitle: 'Byn på morgonen, sedan bergen eller havet.',
      paragraphs: [
        'Frigiliana ligger på Sierra de Almijaras sydsluttning, tio minuter med bil ovanför Nerja: vita gränder med moriskt arv, den gamla sockerrörsfabriken El Ingenio i byns nedre del, vandringsleder från ytterdörren och havet nere vid kusten. På dagen kommer dagsbesökarna; tidigt på morgonen och på kvällen är byn er. En dag här är ett val mellan gränderna, bergen, stranden och en plats i Andalusien, och nästan varje dag slutar vid ett bord i byn.'
      ],
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
      title: 'Fem sätt att tillbringa en dag i Frigiliana',
      intro:
        'Stanna i byn, gå upp i bergen, åk ner till havet, korsa Andalusien för en dag eller lämna dagen öppen. Varje sätt fyller en hel dag, och alla slutar på kvällen i gränderna igen.',
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
        }
      ]
    },
    catalog: {
      kicker: 'Planera dagarna',
      title: 'Alla AMARAs lokala guider',
      intro:
        'Åtta guider svarar på olika frågor om en vistelse i Frigiliana, från gamla stan och vandringslederna till marknaden eller en stranddag i närheten.',
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
        title: 'Fyra leder från byn',
        text:
          'Startpunkterna ligger några minuter genom gränderna eller en kort bit med bil. Rundan till Cruz de Pinto är utsikten över by och hav, Río Higuerón ravinen med Cahorros, El Fuerte den långa stigningen på omkring fyra timmar, och etappen på GR 249 går till Cómpeta. På sommaren ger ni er ut tidigt.',
        linkLabel: 'Välj led efter längd och stigning, med start och spår',
        imageAlt: 'Frigiliana med utsikt mot bergslandskapet'
      },
      beaches: {
        kicker: 'När ni längtar efter havet',
        title: 'Sex stränder, alla med bil',
        text:
          'Från Frigiliana kör ni ner till varje strand: stadsstränderna i Nerja ligger nära, vikarna vid Maro en bit längre österut. Sand eller grus, chiringuito eller stillhet, parkering vid stranden eller en stig ner, det skiljer de sex åt. På kvällen är ni tillbaka i byn och bilen får stå.',
        linkLabel: 'Se vilken strand som har sand, chiringuito och parkering',
        imageAlt: 'Palmer och Medelhavet vid Nerjas kust'
      },
      restaurants: {
        kicker: 'Kvällar i byn, luncher vid havet',
        title: 'Tio bord som vi själva gillar',
        text:
          'Ett bord över Frigilianas tak, kreativt kök i Nerja eller nyfångad fisk i en livlig bar: tre olika kvällar. I byn går ni dit och hem till fots; på helger lönar det sig att boka nästan överallt.',
        linkLabel: 'Välj kvällens bord efter terrass, läge och lokalens storlek',
        imageAlt: 'Solbelyst vit gata i Frigiliana'
      },
      festivals: {
        kicker: 'Kultur & kalender',
        title: 'Processioner i gränderna, sommarnätter i byn',
        text:
          'Under året byter Axarquía rytm: processioner genom byns gränder, smyckade vagnar i Nerja, och på sommaren flyttar livet in i Frigilianas gamla stan, som tätast under Festival 3 Culturas i slutet av augusti. Kommunerna publicerar program och tider först strax före varje fest; den som reser för en fest planerar månaden, inte dagen.',
        linkLabel: 'Se vilken fest som infaller under er resa och hur den känns',
        imageAlt: 'Traditionella vita hus längs en gata i Frigiliana'
      },
      market: {
        kicker: 'Lokalt liv',
        title: 'Torsdag är marknadsdag',
        text:
          'Varje torsdagsförmiddag från ungefär åtta till två, året runt: frukt och grönsaker, oliver och ost, kläder och husgeråd, några stånd för besökare. Vackrast mellan tio och tolv, sedan en kaffe och upp i gränderna. Under helgveckor kan datumet flytta sig.',
        linkLabel: 'Läs om tider, stånd och vägen upp till gamla stan',
        imageAlt: 'Vitkalkade hus och krukväxter i Frigiliana'
      },
      dayTrips: {
        kicker: 'Ett mål för dagen',
        title: 'Ett mål per dag: Málaga, Granada, Ronda',
        text:
          'Ni sover i kullarnas lugna luft och når ändå Andalusiens stora platser inom en dag. En höjdpunkt, en avslappnad måltid, kanske ett stopp, och på kvällen tillbaka till byn. Den som kombinerar två mål ser lite av båda.',
        linkLabel: 'Jämför vilket mål som passar hur många timmars körning',
        imageAlt: 'Frigiliana bland Andalusiens kullar'
      },
      wellness: {
        kicker: 'En dag utan mål',
        title: 'En massage efter byns trappor',
        text:
          'Två adresser nära Frigiliana: Frigiliana Wellness kommer med bänken hem till er, till Lidia och hennes kaliforniska massage åker ni ut på landet. Resten av dagen får vara terrass, hängmatta och en bok.',
        linkLabel: 'Stanna eller åka ut: jämför de två adresserna',
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
    oldTownStory: {
      kicker: 'Gamla stan & historia',
      title: 'Läsa byn: tolv keramiktavlor, El Ingenio och gränderna i Barribarto',
      text:
        'Sedan 2014 är hela den gamla bykärnan skyddad, inte en enskild byggnad. Tolv keramiktavlor längs gränderna berättar vad som hände här 1569; nedanför ligger den gamla sockerrörsfabriken El Ingenio, ovanför de branta svängarna i Barribarto. En lugn timme räcker för det mesta, och samma gränd är värd ett besök vid två tider på dagen.',
      linkLabel: 'Se vilken tavla som berättar vad och i vilken ordning ni går dem',
      imageAlt: 'Frigilianas vita by på sluttningen i kvällsljus'
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
    seasons: {
      kicker: 'Genom året',
      title: 'Vandring på våren, hav på sommaren, sol på vintern',
      text:
        'Vår och höst är vandringsmånaderna, och från slutet av april till juni samt i slutet av augusti ligger byns stora fester. På sommaren ger ni er ut tidigt och eftermiddagen tillhör havet eller skuggan på terrassen. På vintern är Frigiliana stilla, middagssolen räcker för att sitta ute och gränderna är era.',
      linkLabel: 'Väder per månad: vad som räknas för vandring, strand och vinter'
    },
    closing: {
      title: 'Och på kvällen går ni hem genom gamla byn.',
      lead:
        'Lounis, Zaid och Maha har privata terrasser; Farah är vår kompakta svit utan terrass. Vi berättar gärna ärligt vilket boende som har detaljerna som betyder mest för er.',
      availabilityCta: 'Se tillgänglighet',
      staysCta: 'Se boendena i Frigiliana'
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
