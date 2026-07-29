import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type RestaurantKey =
  | 'theGarden'
  | 'gloriaBendita'
  | 'laTaperia'
  | 'restaurant34'
  | 'oliva'
  | 'moGastrotapas'
  | 'laPuntilla'
  | 'elPulguilla'
  | 'ayo'
  | 'elAcebuchal';

interface RestaurantCopy {
  title: string;
  bestFor: string;
  description: string;
  tip: string;
  goodToKnow: string;
}

export interface FrigilianaRestaurantCard extends RestaurantCopy {
  mapHref: string;
  websiteHref: string;
}

export interface FrigilianaRestaurantSection {
  id: 'frigiliana' | 'special-nerja' | 'tapas-seafood' | 'acebuchal';
  title: string;
  intro: string;
  restaurants: FrigilianaRestaurantCard[];
}

export interface FrigilianaRestaurantsPageCopy {
  cardLabels: {
    bestFor: string;
    tip: string;
    goodToKnow: string;
    map: string;
    website: string;
  };
  footerHighlights: {
    restaurants: string;
    beaches: string;
    hiking: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  sectionNav: {
    choose: string;
    frigiliana: string;
    specialNerja: string;
    tapasSeafood: string;
    acebuchal: string;
    planning: string;
  };
  overview: {
    title: string;
    intro: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  restaurantSections: FrigilianaRestaurantSection[];
  planning: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_beaches_authority'
        | 'frigiliana_hiking_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    availabilityCta: string;
    apartmentsCta: string;
  };
}

const restaurantLinks: Record<
  RestaurantKey,
  { mapHref: string; websiteHref: string }
> = {
  theGarden: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=The+Garden+Restaurant+Frigiliana',
    websiteHref: 'https://thegardenfrigiliana.com/inicio/'
  },
  gloriaBendita: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana',
    websiteHref: 'https://frigiliana.es/places/gloria-bendita/'
  },
  laTaperia: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana',
    websiteHref: 'https://www.lataperiafrigiliana.com/indexesp.html'
  },
  restaurant34: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Restaurant+34+Nerja',
    websiteHref:
      'https://hotelcarabeo.com/boutique_hotels_esp/boutique_hotels_nerja_restaurant34_esp.asp'
  },
  oliva: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja',
    websiteHref: 'https://www.restauranteoliva.com/english.html'
  },
  moGastrotapas: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Mo+Gastrotapas+Nerja',
    websiteHref: 'https://mogastrotapas.eatbu.com/?lang=es'
  },
  laPuntilla: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja',
    websiteHref: 'https://www.lapuntillanerja.es/'
  },
  elPulguilla: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=El+Pulguilla+Nerja',
    websiteHref: 'https://www.elpulguilla.com/'
  },
  ayo: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Chiringuito+AYO+Nerja',
    websiteHref: 'https://chiringuitoayonerja.es/es/'
  },
  elAcebuchal: {
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal+Frigiliana',
    websiteHref: 'https://www.elacebuchal.com/'
  }
};

function restaurant(
  key: RestaurantKey,
  copy: RestaurantCopy
): FrigilianaRestaurantCard {
  return { ...copy, ...restaurantLinks[key] };
}

export const frigilianaRestaurantsSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-restaurants-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Restaurants in Frigiliana & Nerja | AMARA Guide',
      description:
        'Ten restaurants in Frigiliana and Nerja chosen by mood, with honest AMARA tips for terraces, special dinners, tapas, seafood and a destination lunch.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Restaurants in Frigiliana & Nerja | AMARA Guide',
      description:
        'Zehn Restaurants in Frigiliana und Nerja nach Anlass ausgewählt – mit ehrlichen AMARA-Tipps zu Terrassen, besonderen Abenden, Tapas und Fisch.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Restaurantes en Frigiliana y Nerja | Guía AMARA',
      description:
        'Diez restaurantes de Frigiliana y Nerja elegidos según el momento, con consejos sinceros sobre terrazas, cenas especiales, tapas, pescado y excursiones.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Restaurants in Frigiliana & Nerja | AMARA-gids',
      description:
        'Tien restaurants in Frigiliana en Nerja, gekozen per sfeer, met eerlijke AMARA-tips voor terrassen, bijzondere diners, tapas, vis en een lunchuitstap.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Restauranger i Frigiliana & Nerja | AMARA-guide',
      description:
        'Tio restauranger i Frigiliana och Nerja, valda efter tillfälle, med ärliga AMARA-tips om terrasser, speciella middagar, tapas, fisk och utflyktslunch.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve every recommendation, caveat and practical detail
 * while using native guest-facing language for each market.
 */
export const frigilianaRestaurantsContent: Record<
  AmaraLanguage,
  FrigilianaRestaurantsPageCopy
> = {
  en: {
    cardLabels: {
      bestFor: 'Best for',
      tip: 'AMARA insider tip',
      goodToKnow: 'Good to know',
      map: 'Open in Google Maps',
      website: 'Official information'
    },
    footerHighlights: {
      restaurants: 'Restaurants & local food',
      beaches: 'Beaches & coast',
      hiking: 'Hiking & nature'
    },
    hero: {
      kicker: 'Local dining guide',
      title: 'Restaurants in Frigiliana & Nerja — where we send our guests',
      paragraphs: [
        'A memorable dinner here can mean a terrace above Frigiliana, creative plates in Nerja or fresh fish served at the pace of a busy local bar. Those are different evenings, and the right choice depends on the mood.',
        'This is not a ranking or a directory. It is a concise selection we use for our own guests, with the trade-offs that matter before you reserve.',
        'Opening days and menus change with the season. Use the guide to choose, then confirm the latest details directly with the restaurant.'
      ],
      imageAlt:
        'Whitewashed Frigiliana above the hills and Mediterranean coast'
    },
    sectionNav: {
      choose: 'Choose by mood',
      frigiliana: 'Frigiliana evenings',
      specialNerja: 'Special nights',
      tapasSeafood: 'Tapas & seafood',
      acebuchal: 'Destination lunch',
      planning: 'Plan the evening'
    },
    overview: {
      title: 'Start with the evening you want',
      intro:
        'The most useful distinction is not “best” versus “second best”, but atmosphere, distance and how formal you want the meal to feel.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Stay in Frigiliana',
          text:
            'Choose the village when a beautiful walk home, whitewashed streets and a slower evening matter more than a large menu of options.'
        },
        {
          title: 'Make it an occasion',
          text:
            'Nerja has the stronger choice for a polished dinner, tasting menus and sea-view terraces. Reserve and plan a taxi or sober driver.'
        },
        {
          title: 'Eat like a local',
          text:
            'For tapas and fish, accept a little noise and pace. The liveliest rooms are often more rewarding than the prettiest tables.'
        },
        {
          title: 'Turn lunch into an outing',
          text:
            'El Acebuchal is not a quick meal on the way somewhere else. Pair it with the countryside and let lunch become the destination.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Frigiliana evenings — atmosphere without the drive home',
        intro:
          'These three work for different village moods: a sunset terrace, a lively plaza or a small, intimate table.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Sunset, views and a romantic village dinner',
            description:
              'High in Barribarto, The Garden combines a terrace over the village and coast with a seasonal, internationally minded menu.',
            tip:
              'Request an outdoor table when booking and arrive before sunset. The changing light, followed by the walk down through the old quarter, is part of the evening.',
            goodToKnow:
              'The terrace is limited and the approach includes Frigiliana’s stepped streets. Reserve ahead and wear comfortable shoes.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'A lively first evening and easy village access',
            description:
              'On Plaza de las Tres Culturas, Gloria Bendita serves contemporary Mediterranean cooking with international influences in an animated central setting.',
            tip:
              'Choose an outside table when you want to watch the plaza come alive. It is an easy first-night option without climbing deep into Barribarto.',
            goodToKnow:
              'The mood is social rather than secluded. Check current opening days before making it the fixed plan for your arrival evening.'
          }),
          restaurant('laTaperia', {
            title: 'La Tapería',
            bestFor: 'An intimate table and plates to share',
            description:
              'A small Frigiliana restaurant whose tapas draw on Mediterranean, international and Arabic flavours rather than a single rigid style.',
            tip:
              'Share several smaller plates and leave room to follow the kitchen’s suggestions for the evening. That suits the scale of the room better than rushing one course.',
            goodToKnow:
              'This is a small dining room. Reserve rather than relying on a walk-in table, especially at weekends and in high season.'
          })
        ]
      },
      {
        id: 'special-nerja',
        title: 'Special nights in Nerja',
        intro:
          'For a more polished dinner, Nerja adds sea views, contemporary cooking and the chance to make the meal the main event.',
        restaurants: [
          restaurant('restaurant34', {
            title: 'Restaurant 34',
            bestFor: 'Sea views and an elegant date night',
            description:
              'Restaurant 34 at Hotel Carabeo uses local produce and offers several dining spaces, including a summer terrace facing the Mediterranean.',
            tip:
              'Ask specifically which terrace or sea-view tables are available, then confirm the current booking conditions before choosing the table.',
            goodToKnow:
              'Some front-row sea-view reservations can carry separate conditions or a supplement. Treat the restaurant’s current confirmation as definitive.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'A celebration or an unhurried modern dinner',
            description:
              'Close to Plaza de España, Oliva serves contemporary Mediterranean cuisine and has been included in the Michelin Guide since 2016.',
            tip:
              'Treat Oliva as the evening rather than a stop between plans: reserve, allow time for several courses and ask about the terrace if that matters to you.',
            goodToKnow:
              'This is one of the more polished choices in the guide. Check the current menu and kitchen days directly before committing to a special date.'
          }),
          restaurant('moGastrotapas', {
            title: 'Mo Gastrotapas',
            bestFor: 'Creative sharing plates and wine',
            description:
              'A modern gastro-tapas restaurant away from the busiest old-town strip, with imaginative plates and a more relaxed contemporary feel.',
            tip:
              'Order several dishes for the table and ask the team to balance richer plates with fresher ones. Sharing is the best way to understand the kitchen.',
            goodToKnow:
              'Opening days can vary, so check directly and reserve. It is better approached as a planned dinner than an improvised late walk-in.'
          })
        ]
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, fish & the lively side of Nerja',
        intro:
          'These are not hushed dining rooms. Come for fresh fish, local rhythm and the kind of meal where atmosphere matters as much as presentation.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Fresh fish and a fast, local lunch',
            description:
              'La Puntilla is a long-standing seafood address known for fish brought in daily, tapas and an energetic service rhythm.',
            tip:
              'Go for lunch and ask what fish is best that day instead of deciding everything in advance. The daily choice is more useful than chasing one famous dish.',
            goodToKnow:
              'Expect conversation, movement and a busy room. It is a local-style seafood meal, not a quiet romantic lunch.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Central tapas, fried fish and people-watching',
            description:
              'A few streets from the Balcón de Europa, El Pulguilla is one of Nerja’s classic stops for seafood, fried fish, tapas and larger portions.',
            tip:
              'Choose the bar when you want the tapas experience; choose a table or terrace when you want a full meal. They are two different ways to use the same place.',
            goodToKnow:
              'It can be crowded and loud at peak times. Arrive early or accept the bustle as part of the experience.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'A relaxed beach lunch and wood-fired paella',
            description:
              'A Burriana institution since 1969, AYO is built around daytime beach eating, paella cooked over wood and straightforward fish and skewers.',
            tip:
              'Combine it with a morning swim and arrive ready for a casual, sociable lunch. The setting makes more sense as part of a beach day than as a formal dinner.',
            goodToKnow:
              'Think daytime chiringuito, not quiet evening restaurant. Confirm seasonal opening information before travelling only for the meal.'
          })
        ]
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch as a destination',
        intro:
          'The lost village sits beyond Frigiliana in the natural park. The journey, the landscape and the meal belong together.',
        restaurants: [
          restaurant('elAcebuchal', {
            title: 'Restaurante El Acebuchal',
            bestFor: 'A countryside outing and rustic Andalusian cooking',
            description:
              'In the restored hamlet of El Acebuchal, the restaurant centres on traditional meats, homemade bread and desserts in a setting far removed from the coast.',
            tip:
              'Make it the reward after a walk or a slow drive into the hills. Allow time for the route and for lunch rather than trying to fit it between coastal plans.',
            goodToKnow:
              'Access is rural and opening arrangements matter. Check the route, current hours and reservation options directly before setting out.'
          })
        ]
      }
    ],
    planning: {
      title: 'Plan the evening, then let it unfold',
      intro:
        'A few practical choices prevent most disappointments without turning dinner into a timetable.',
      items: [
        {
          title: 'Reserve the right places',
          text:
            'Book terraces and special-occasion restaurants ahead. For casual tapas, flexibility and an earlier arrival are often more useful than a formal reservation.'
        },
        {
          title: 'Check the same week',
          text:
            'Opening days, winter breaks and menus change. We deliberately do not reproduce hours here; confirm them through the restaurant’s current information.'
        },
        {
          title: 'Decide who is driving',
          text:
            'Frigiliana dinners can end with a walk home. For Nerja, arrange a taxi or a sober driver before the first glass of wine.'
        },
        {
          title: 'Expect a later rhythm',
          text:
            'Dinner in Spain starts later than in northern Europe. If you prefer a quiet table, use the first seating rather than fighting the local peak.'
        }
      ],
      note:
        'Our selection is independent and based on the experience we want guests to have. We do not sell restaurant bookings, and restaurants can change menus, prices and opening arrangements without notice.'
    },
    combine: {
      title: 'Build the day around the meal',
      intro:
        'The most memorable meals often work because the rest of the day leads naturally towards them.',
      items: [
        {
          title: 'Beach morning, long lunch',
          text:
            'Swim at Burriana before AYO, or use central Nerja’s beaches before an early seafood lunch at La Puntilla or El Pulguilla.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Hills, then a village table',
          text:
            'Finish a walk above Frigiliana with dinner in the village, or make El Acebuchal the reward at the end of a countryside outing.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        }
      ]
    },
    closing: {
      title: 'Come home slowly',
      lead:
        'The best ending is often simple: one last turn through the whitewashed streets, the village quietening around you and no need to rush the evening.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View apartments'
    }
  },
  de: {
    cardLabels: {
      bestFor: 'Ideal für',
      tip: 'AMARA Insider-Tipp',
      goodToKnow: 'Gut zu wissen',
      map: 'In Google Maps öffnen',
      website: 'Offizielle Informationen'
    },
    footerHighlights: {
      restaurants: 'Restaurants & regionale Küche',
      beaches: 'Strände & Küste',
      hiking: 'Wandern & Natur'
    },
    hero: {
      kicker: 'Restaurant-Guide aus der Region',
      title: 'Restaurants in Frigiliana & Nerja — unsere Empfehlungen für Gäste',
      paragraphs: [
        'Ein besonderer Abend kann hier vieles sein: ein Tisch über den Dächern Frigilianas, kreative Küche in Nerja oder fangfrischer Fisch in einer lebhaften Bar. Das sind ganz unterschiedliche Erlebnisse – entscheidend ist, wonach dir gerade ist.',
        'Diese Seite ist weder Rangliste noch vollständiges Verzeichnis. Sie versammelt eine überschaubare Auswahl, die wir auch unseren Gästen empfehlen, einschließlich der Details, die vor der Reservierung wirklich zählen.',
        'Ruhetage und Speisekarten ändern sich je nach Saison. Nutze den Guide für die Auswahl und bestätige die aktuellen Angaben anschließend direkt beim Restaurant.'
      ],
      imageAlt:
        'Das weiße Dorf Frigiliana über den Hügeln und der Mittelmeerküste'
    },
    sectionNav: {
      choose: 'Nach Stimmung wählen',
      frigiliana: 'Abende in Frigiliana',
      specialNerja: 'Besondere Abende',
      tapasSeafood: 'Tapas & Fisch',
      acebuchal: 'Ausflugslunch',
      planning: 'Den Abend planen'
    },
    overview: {
      title: 'Beginne mit dem Abend, den du dir wünschst',
      intro:
        'Hilfreicher als eine Rangliste sind Atmosphäre, Entfernung und die Frage, wie besonders oder unkompliziert sich das Essen anfühlen soll.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'In Frigiliana bleiben',
          text:
            'Wähle das Dorf, wenn dir weiße Gassen, ein schöner Heimweg zu Fuß und ein ruhiger Abend wichtiger sind als eine möglichst große Auswahl.'
        },
        {
          title: 'Einen besonderen Abend planen',
          text:
            'Nerja bietet mehr Auswahl für gehobene Küche, Menüs und Terrassen mit Meerblick. Reserviere und plane Taxi oder Fahrer gleich mit.'
        },
        {
          title: 'Essen wie die Einheimischen',
          text:
            'Bei Tapas und Fisch gehören Tempo und etwas Lautstärke dazu. Oft sind die lebhaftesten Räume spannender als die schönsten Tische.'
        },
        {
          title: 'Aus dem Mittagessen einen Ausflug machen',
          text:
            'El Acebuchal ist kein schneller Zwischenstopp. Verbinde das Essen mit der Landschaft und mache den Lunch selbst zum Ziel.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Abende in Frigiliana — Atmosphäre ohne Heimfahrt',
        intro:
          'Diese drei Adressen stehen für unterschiedliche Dorfabende: Sonnenuntergang auf der Terrasse, lebhafter Platz oder ein kleiner, intimer Gastraum.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Sonnenuntergang, Aussicht und ein romantisches Dinner',
            description:
              'Hoch im Barribarto verbindet The Garden eine Terrasse mit Blick über Dorf und Küste mit einer saisonalen, international geprägten Küche.',
            tip:
              'Bitte bei der Reservierung um einen Außentisch und komme vor Sonnenuntergang. Das wechselnde Licht und der spätere Weg durch die Altstadt gehören zum Abend dazu.',
            goodToKnow:
              'Die Terrasse ist klein, der Weg führt über Frigilianas Treppengassen. Früh reservieren und bequeme Schuhe tragen.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'Einen lebhaften ersten Abend mit kurzem Weg',
            description:
              'An der Plaza de las Tres Culturas serviert Gloria Bendita moderne mediterrane Küche mit internationalen Einflüssen in zentraler, lebendiger Lage.',
            tip:
              'Ein Außentisch lohnt sich, wenn du das Treiben auf dem Platz magst. Für den Ankunftsabend ist das unkompliziert, ohne tief ins steile Barribarto zu laufen.',
            goodToKnow:
              'Die Stimmung ist gesellig, nicht abgeschieden. Prüfe die aktuellen Öffnungstage, bevor du den Ankunftsabend fest darauf ausrichtest.'
          }),
          restaurant('laTaperia', {
            title: 'La Tapería',
            bestFor: 'Einen kleinen Tisch und Gerichte zum Teilen',
            description:
              'Ein kleines Restaurant, dessen Tapas mediterrane, internationale und arabische Aromen verbinden, ohne sich auf eine starre Küchenrichtung festzulegen.',
            tip:
              'Teilt mehrere kleine Gerichte und lasst Raum für die Empfehlungen der Küche. Das passt besser zu diesem intimen Ort als ein schnelles Einzelgericht.',
            goodToKnow:
              'Der Gastraum ist klein. Besonders am Wochenende und in der Hochsaison besser reservieren, statt auf einen freien Tisch zu hoffen.'
          })
        ]
      },
      {
        id: 'special-nerja',
        title: 'Besondere Abende in Nerja',
        intro:
          'Für ein feineres Dinner bietet Nerja Meerblick, moderne Küche und Restaurants, bei denen das Essen selbst zum Abendprogramm wird.',
        restaurants: [
          restaurant('restaurant34', {
            title: 'Restaurant 34',
            bestFor: 'Meerblick und ein elegantes Date',
            description:
              'Das Restaurant 34 im Hotel Carabeo arbeitet mit regionalen Produkten und hat mehrere Bereiche, darunter eine sommerliche Terrasse zum Mittelmeer.',
            tip:
              'Frage konkret, welche Terrassen- oder Meerblicktische verfügbar sind, und bestätige vor der Auswahl die aktuell geltenden Reservierungsbedingungen.',
            goodToKnow:
              'Für Tische in der ersten Meerblickreihe können besondere Bedingungen oder ein Aufpreis gelten. Maßgeblich ist die aktuelle Bestätigung des Restaurants.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'Einen Anlass oder ein entspanntes modernes Dinner',
            description:
              'Nahe der Plaza de España serviert Oliva zeitgemäße mediterrane Küche und wird seit 2016 im Guide Michelin geführt.',
            tip:
              'Plane Oliva als eigentlichen Abend: reservieren, Zeit für mehrere Gänge lassen und bei Interesse nach der Terrasse fragen.',
            goodToKnow:
              'Oliva gehört zu den eleganteren Empfehlungen. Für einen besonderen Termin Speisekarte und Küchenzeiten noch einmal direkt prüfen.'
          }),
          restaurant('moGastrotapas', {
            title: 'Mo Gastrotapas',
            bestFor: 'Kreative Teller zum Teilen und Wein',
            description:
              'Ein modernes Gastro-Tapas-Restaurant abseits des belebtesten Altstadtstreifens, mit ideenreichen Gerichten und entspannter, zeitgemäßer Atmosphäre.',
            tip:
              'Bestellt mehrere Teller für den Tisch und bittet das Team um eine gute Mischung aus kräftigen und frischen Gerichten. So erschließt sich die Küche am besten.',
            goodToKnow:
              'Die Öffnungstage können wechseln. Direkt prüfen und reservieren – diese Adresse funktioniert besser als geplantes Dinner denn als später spontaner Versuch.'
          })
        ]
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, Fisch & Nerjas lebendige Seite',
        intro:
          'Das sind keine stillen Speisesäle. Hier geht es um frischen Fisch, lokalen Rhythmus und Mahlzeiten, bei denen die Atmosphäre genauso zählt wie die Präsentation.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Frischen Fisch und einen schnellen lokalen Lunch',
            description:
              'La Puntilla ist eine alteingesessene Fischadresse, bekannt für täglich frische Ware, Tapas und einen zügigen, energiegeladenen Service.',
            tip:
              'Gehe mittags und frage, welcher Fisch an diesem Tag besonders gut ist. Das ist hilfreicher, als sich vorher auf ein berühmtes Gericht festzulegen.',
            goodToKnow:
              'Rechne mit Gesprächen, Bewegung und einem vollen Raum. Das ist ein lokales Fischessen, kein ruhiges romantisches Mittagessen.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Zentrale Tapas, frittierten Fisch und Menschenbeobachten',
            description:
              'Nur wenige Gassen vom Balcón de Europa entfernt ist El Pulguilla ein Nerja-Klassiker für Meeresfrüchte, frittierten Fisch, Tapas und größere Portionen.',
            tip:
              'Wähle die Bar für das Tapas-Erlebnis, Tisch oder Terrasse für ein vollständiges Essen. So entstehen aus derselben Adresse zwei sehr unterschiedliche Abende.',
            goodToKnow:
              'Zu Stoßzeiten wird es voll und laut. Früh kommen oder die lebhafte Stimmung bewusst als Teil des Erlebnisses annehmen.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'Einen lockeren Strandlunch und Paella vom Holzfeuer',
            description:
              'AYO gehört seit 1969 zum Burriana-Strand und steht für Essen am Tag, Paella vom Holzfeuer sowie unkomplizierten Fisch und Spieße.',
            tip:
              'Mit einem Bad am Vormittag verbinden und auf einen geselligen, zwanglosen Lunch einstellen. Als Teil des Strandtags funktioniert AYO besser denn als formelles Dinner.',
            goodToKnow:
              'Denke an Chiringuito am Tag, nicht an ein stilles Abendrestaurant. Saisonale Öffnung prüfen, bevor du nur für das Essen hinfährst.'
          })
        ]
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — das Mittagessen als Ziel',
        intro:
          'Das „verlorene Dorf“ liegt hinter Frigiliana im Naturpark. Anfahrt, Landschaft und Essen gehören hier zusammen.',
        restaurants: [
          restaurant('elAcebuchal', {
            title: 'Restaurante El Acebuchal',
            bestFor: 'Einen Ausflug aufs Land und rustikale andalusische Küche',
            description:
              'Im restaurierten Weiler El Acebuchal stehen traditionelle Fleischgerichte, hausgemachtes Brot und Desserts im Mittelpunkt – weit weg vom Küstentrubel.',
            tip:
              'Mache das Essen zum Abschluss einer Wanderung oder einer langsamen Fahrt in die Berge. Plane Zeit für den Weg und den Lunch ein, statt ihn zwischen Küstenpläne zu quetschen.',
            goodToKnow:
              'Die Anfahrt ist ländlich, aktuelle Öffnung entscheidend. Route, Zeiten und Reservierung direkt prüfen, bevor du aufbrichst.'
          })
        ]
      }
    ],
    planning: {
      title: 'Den Abend planen und dann geschehen lassen',
      intro:
        'Ein paar praktische Entscheidungen verhindern die meisten Enttäuschungen, ohne aus dem Dinner einen Stundenplan zu machen.',
      items: [
        {
          title: 'Die richtigen Orte reservieren',
          text:
            'Terrassen und Restaurants für besondere Anlässe früh buchen. Bei unkomplizierten Tapas helfen Flexibilität und frühes Erscheinen oft mehr als eine formelle Reservierung.'
        },
        {
          title: 'In derselben Woche prüfen',
          text:
            'Ruhetage, Winterpausen und Karten ändern sich. Deshalb nennen wir bewusst keine Öffnungszeiten; bestätige sie über die aktuellen Angaben des Restaurants.'
        },
        {
          title: 'Vorher klären, wer fährt',
          text:
            'In Frigiliana endet das Dinner mit einem Spaziergang nach Hause. Für Nerja Taxi oder nüchternen Fahrer vor dem ersten Glas Wein organisieren.'
        },
        {
          title: 'Mit einem späteren Rhythmus rechnen',
          text:
            'In Spanien beginnt das Abendessen später als in Nordeuropa. Wer es ruhiger mag, nimmt die erste Tischzeit statt der lokalen Stoßzeit.'
        }
      ],
      note:
        'Unsere Auswahl ist unabhängig und orientiert sich an dem Erlebnis, das wir Gästen wünschen. Wir vermitteln keine Restaurantbuchungen; Karten, Preise und Öffnungstage können sich ohne Ankündigung ändern.'
    },
    combine: {
      title: 'Den Tag auf das Essen zulaufen lassen',
      intro:
        'Oft bleiben Mahlzeiten besonders in Erinnerung, weil der restliche Tag ganz natürlich auf sie hinführt.',
      items: [
        {
          title: 'Vormittags Strand, danach langer Lunch',
          text:
            'Vor AYO am Burriana-Strand baden oder einen zentralen Nerja-Strand mit einem frühen Fischessen bei La Puntilla oder El Pulguilla verbinden.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Erst die Hügel, dann ein Dorftisch',
          text:
            'Eine Wanderung oberhalb Frigilianas mit einem Dinner im Dorf beenden oder El Acebuchal zum Ziel eines Ausflugs in die Landschaft machen.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        }
      ]
    },
    closing: {
      title: 'Langsam nach Hause kommen',
      lead:
        'Der schönste Abschluss ist oft ganz einfach: eine letzte Kurve durch die weißen Gassen, das Dorf wird stiller und der Abend muss noch lange nicht enden.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
    }
  },
  es: {
    cardLabels: {
      bestFor: 'Ideal para',
      tip: 'Consejo AMARA',
      goodToKnow: 'Conviene saber',
      map: 'Abrir en Google Maps',
      website: 'Información oficial'
    },
    footerHighlights: {
      restaurants: 'Restaurantes y cocina local',
      beaches: 'Playas y costa',
      hiking: 'Senderismo y naturaleza'
    },
    hero: {
      kicker: 'Guía gastronómica local',
      title: 'Restaurantes en Frigiliana y Nerja — los que recomendamos a nuestros huéspedes',
      paragraphs: [
        'Una cena memorable puede ser una mesa sobre los tejados de Frigiliana, platos creativos en Nerja o pescado fresco al ritmo de un bar local lleno de vida. Son planes distintos, y la elección depende del ambiente que apetezca.',
        'Esto no es un ranking ni un directorio. Es una selección breve que utilizamos con nuestros propios huéspedes, con los matices que de verdad conviene conocer antes de reservar.',
        'Los días de apertura y las cartas cambian con la temporada. Usa la guía para elegir y confirma después la información más reciente directamente con el restaurante.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea'
    },
    sectionNav: {
      choose: 'Elegir según el plan',
      frigiliana: 'Noches en Frigiliana',
      specialNerja: 'Cenas especiales',
      tapasSeafood: 'Tapas y pescado',
      acebuchal: 'Almuerzo con excursión',
      planning: 'Preparar la velada'
    },
    overview: {
      title: 'Empieza por la velada que te apetece',
      intro:
        'Más útil que decidir cuál es “el mejor” es pensar en el ambiente, la distancia y el grado de formalidad que buscas.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'Quedarse en Frigiliana',
          text:
            'Elige el pueblo si valoras volver andando entre calles blancas y disfrutar de una noche tranquila más que tener una lista interminable de opciones.'
        },
        {
          title: 'Celebrar una ocasión',
          text:
            'Nerja ofrece más variedad para cocina cuidada, menús y terrazas con vistas al mar. Reserva y deja previsto el taxi o quién conducirá.'
        },
        {
          title: 'Comer con ambiente local',
          text:
            'En las casas de tapas y pescado hay ritmo y algo de ruido. Muchas veces el comedor con más vida resulta más interesante que la mesa más bonita.'
        },
        {
          title: 'Convertir el almuerzo en excursión',
          text:
            'El Acebuchal no es una parada rápida. Combínalo con el paisaje y deja que el almuerzo sea el destino del día.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Noches en Frigiliana — ambiente sin tener que conducir',
        intro:
          'Tres maneras distintas de cenar en el pueblo: una terraza al atardecer, una plaza animada o una mesa pequeña e íntima.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Atardecer, vistas y una cena romántica',
            description:
              'En la parte alta del Barribarto, The Garden une una terraza sobre el pueblo y la costa con una cocina de temporada de inspiración internacional.',
            tip:
              'Pide mesa exterior al reservar y llega antes del atardecer. La luz cambiante y el paseo de vuelta por el casco antiguo forman parte de la experiencia.',
            goodToKnow:
              'La terraza tiene pocas mesas y se llega por las calles escalonadas de Frigiliana. Reserva con tiempo y lleva calzado cómodo.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'Una primera noche animada y de fácil acceso',
            description:
              'En la plaza de las Tres Culturas, Gloria Bendita propone cocina mediterránea contemporánea con influencias internacionales en un entorno céntrico y vivo.',
            tip:
              'Busca mesa fuera si te gusta ver cómo se anima la plaza. Es una opción sencilla para la primera noche sin subir hasta lo alto del Barribarto.',
            goodToKnow:
              'El ambiente es social, no íntimo. Comprueba los días de apertura antes de convertirlo en el plan fijo para la noche de llegada.'
          }),
          restaurant('laTaperia', {
            title: 'La Tapería',
            bestFor: 'Una mesa íntima y platos para compartir',
            description:
              'Un restaurante pequeño cuyas tapas mezclan sabores mediterráneos, internacionales y árabes sin encerrarse en una sola etiqueta.',
            tip:
              'Comparte varios platos y déjate aconsejar por la cocina sobre lo mejor de esa noche. Encaja mejor con el tamaño del local que pedir deprisa un único plato.',
            goodToKnow:
              'El comedor es reducido. Los fines de semana y en temporada alta, reserva en lugar de confiar en encontrar mesa al pasar.'
          })
        ]
      },
      {
        id: 'special-nerja',
        title: 'Cenas especiales en Nerja',
        intro:
          'Para una velada más cuidada, Nerja suma vistas al mar, cocina contemporánea y restaurantes en los que la cena es el plan principal.',
        restaurants: [
          restaurant('restaurant34', {
            title: 'Restaurant 34',
            bestFor: 'Vistas al mar y una cita elegante',
            description:
              'Restaurant 34, en Hotel Carabeo, trabaja con producto local y ofrece varios espacios, entre ellos una terraza de verano frente al Mediterráneo.',
            tip:
              'Pregunta qué mesas de terraza o con vistas están disponibles y confirma las condiciones actuales antes de elegir una ubicación concreta.',
            goodToKnow:
              'Algunas mesas de primera línea pueden tener condiciones o suplemento propios. La confirmación vigente del restaurante es la referencia válida.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'Una celebración o una cena moderna sin prisas',
            description:
              'Cerca de la plaza de España, Oliva ofrece cocina mediterránea contemporánea y figura en la Guía Michelin desde 2016.',
            tip:
              'Haz de Oliva el plan de la noche: reserva, deja tiempo para varios platos y pregunta por la terraza si es importante para ti.',
            goodToKnow:
              'Es una de las opciones más refinadas de la guía. Para una fecha señalada, confirma directamente la carta y los días de cocina.'
          }),
          restaurant('moGastrotapas', {
            title: 'Mo Gastrotapas',
            bestFor: 'Platos creativos para compartir y vino',
            description:
              'Un gastrobar moderno fuera del tramo más concurrido del casco antiguo, con platos imaginativos y un ambiente contemporáneo relajado.',
            tip:
              'Pide varios platos para la mesa y deja que el equipo combine propuestas intensas con otras más frescas. Compartiendo se entiende mejor su cocina.',
            goodToKnow:
              'Los días de apertura pueden variar. Comprueba y reserva: funciona mejor como cena pensada que como intento improvisado a última hora.'
          })
        ]
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, pescado y el lado más vivo de Nerja',
        intro:
          'No son comedores silenciosos. Ven por el pescado fresco, el ritmo local y una comida en la que el ambiente importa tanto como la presentación.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Pescado fresco y un almuerzo local con ritmo',
            description:
              'La Puntilla es una casa de pescado con larga trayectoria, conocida por el género diario, las tapas y un servicio rápido y enérgico.',
            tip:
              'Ve a mediodía y pregunta qué pescado está mejor ese día en lugar de decidirlo todo de antemano. La recomendación diaria vale más que perseguir un plato famoso.',
            goodToKnow:
              'Habrá conversación, movimiento y un comedor lleno. Es una comida marinera al estilo local, no un almuerzo romántico y silencioso.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Tapas céntricas, fritura y observar el ambiente',
            description:
              'A pocas calles del Balcón de Europa, El Pulguilla es un clásico de Nerja para marisco, pescado frito, tapas y raciones.',
            tip:
              'Elige la barra si buscas tapeo; mesa o terraza si quieres una comida completa. Son dos maneras distintas de disfrutar del mismo sitio.',
            goodToKnow:
              'En hora punta puede estar lleno y ser ruidoso. Llega pronto o acepta ese bullicio como parte de la experiencia.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'Un almuerzo informal de playa y paella a la leña',
            description:
              'Presente en Burriana desde 1969, AYO gira en torno a la comida diurna, la paella a la leña y el pescado y los espetos sin complicaciones.',
            tip:
              'Combínalo con un baño por la mañana y ve con ganas de un almuerzo informal y animado. Tiene más sentido dentro de un día de playa que como cena formal.',
            goodToKnow:
              'Piensa en chiringuito de día, no en restaurante tranquilo de noche. Confirma la apertura estacional antes de desplazarte solo para comer.'
          })
        ]
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — el almuerzo como destino',
        intro:
          'La aldea perdida se encuentra más allá de Frigiliana, dentro del parque natural. El trayecto, el paisaje y la comida forman un único plan.',
        restaurants: [
          restaurant('elAcebuchal', {
            title: 'Restaurante El Acebuchal',
            bestFor: 'Una excursión rural y cocina andaluza rústica',
            description:
              'En la aldea restaurada de El Acebuchal, el restaurante se centra en carnes tradicionales, pan casero y postres, lejos del ritmo de la costa.',
            tip:
              'Conviértelo en la recompensa después de una ruta o de un paseo lento en coche por la sierra. Reserva tiempo para llegar y comer sin encajarlo entre planes costeros.',
            goodToKnow:
              'El acceso es rural y la apertura importa. Comprueba directamente la ruta, los horarios actuales y la posibilidad de reservar antes de salir.'
          })
        ]
      }
    ],
    planning: {
      title: 'Prepara la velada y después déjate llevar',
      intro:
        'Unas pocas decisiones prácticas evitan la mayoría de decepciones sin convertir la cena en un horario rígido.',
      items: [
        {
          title: 'Reserva donde importa',
          text:
            'Reserva con tiempo las terrazas y las cenas especiales. Para tapas informales suelen servir más la flexibilidad y llegar pronto que una reserva formal.'
        },
        {
          title: 'Comprueba esa misma semana',
          text:
            'Los descansos, cierres de invierno y cartas cambian. Por eso no reproducimos horarios: confírmalos en la información actual del restaurante.'
        },
        {
          title: 'Decide quién conduce',
          text:
            'En Frigiliana puedes volver andando después de cenar. Para Nerja, organiza taxi o conductor antes de la primera copa de vino.'
        },
        {
          title: 'Cuenta con un ritmo más tardío',
          text:
            'En España se cena más tarde que en el norte de Europa. Si prefieres calma, elige el primer turno en vez de la hora de mayor ambiente local.'
        }
      ],
      note:
        'Nuestra selección es independiente y responde a la experiencia que queremos para los huéspedes. No vendemos reservas; las cartas, los precios y los días de apertura pueden cambiar sin previo aviso.'
    },
    combine: {
      title: 'Haz que el día conduzca hacia la mesa',
      intro:
        'Las comidas más memorables suelen funcionar porque el resto del día lleva hasta ellas de manera natural.',
      items: [
        {
          title: 'Playa por la mañana, sobremesa larga',
          text:
            'Báñate en Burriana antes de AYO o combina las playas del centro de Nerja con un almuerzo temprano de pescado en La Puntilla o El Pulguilla.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Primero la sierra, después una mesa en el pueblo',
          text:
            'Termina una ruta sobre Frigiliana con una cena en el pueblo o convierte El Acebuchal en la recompensa de una salida por el campo.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        }
      ]
    },
    closing: {
      title: 'Vuelve a casa sin prisa',
      lead:
        'El mejor final suele ser sencillo: una última curva entre las calles blancas, el pueblo que se va calmando y ninguna necesidad de apresurar la noche.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver apartamentos'
    }
  },
  nl: {
    cardLabels: {
      bestFor: 'Ideaal voor',
      tip: 'AMARA-insidertip',
      goodToKnow: 'Goed om te weten',
      map: 'Openen in Google Maps',
      website: 'Officiële informatie'
    },
    footerHighlights: {
      restaurants: 'Restaurants & lokale keuken',
      beaches: 'Stranden & kust',
      hiking: 'Wandelen & natuur'
    },
    hero: {
      kicker: 'Lokale restaurantgids',
      title: 'Restaurants in Frigiliana & Nerja — onze adressen voor gasten',
      paragraphs: [
        'Een bijzondere avond kan hier een terras boven Frigiliana zijn, creatieve gerechten in Nerja of verse vis in het tempo van een levendige lokale bar. Dat zijn verschillende ervaringen; de juiste keuze hangt af van je stemming.',
        'Dit is geen ranglijst en ook geen compleet overzicht. Het is een compacte selectie die we met onze eigen gasten delen, inclusief de afwegingen die ertoe doen voordat je reserveert.',
        'Openingsdagen en menu’s veranderen per seizoen. Gebruik de gids om te kiezen en controleer de meest recente informatie daarna rechtstreeks bij het restaurant.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust'
    },
    sectionNav: {
      choose: 'Kies op sfeer',
      frigiliana: 'Avonden in Frigiliana',
      specialNerja: 'Bijzondere avonden',
      tapasSeafood: 'Tapas & vis',
      acebuchal: 'Lunch als uitstap',
      planning: 'Plan de avond'
    },
    overview: {
      title: 'Begin bij de avond waar je zin in hebt',
      intro:
        'Nuttiger dan zoeken naar “de beste” zijn de sfeer, de afstand en hoe informeel of bijzonder de maaltijd moet voelen.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Blijf in Frigiliana',
          text:
            'Kies het dorp als witte straatjes, een mooie wandeling naar huis en een rustige avond belangrijker zijn dan een eindeloze hoeveelheid opties.'
        },
        {
          title: 'Maak er een gelegenheid van',
          text:
            'Nerja biedt meer keuze voor verfijnde diners, menu’s en terrassen met zeezicht. Reserveer en regel meteen een taxi of nuchtere chauffeur.'
        },
        {
          title: 'Eet met de locals',
          text:
            'Bij tapas en vis horen tempo en wat geluid. De levendigste zaak is vaak interessanter dan de tafel met het mooiste uitzicht.'
        },
        {
          title: 'Maak van de lunch een uitstap',
          text:
            'El Acebuchal is geen snelle tussenstop. Combineer de maaltijd met het landschap en maak van de lunch het doel van de dag.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Avonden in Frigiliana — sfeer zonder terugrit',
        intro:
          'Drie verschillende dorpsavonden: een terras bij zonsondergang, een levendig plein of een kleine, intieme tafel.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Zonsondergang, uitzicht en een romantisch diner',
            description:
              'Hoog in Barribarto combineert The Garden een terras over het dorp en de kust met een seizoenskeuken met internationale invloeden.',
            tip:
              'Vraag bij het reserveren om een buitentafel en kom vóór zonsondergang. Het veranderende licht en de wandeling terug door de oude wijk horen bij de avond.',
            goodToKnow:
              'Het terras is klein en de route loopt via de trappenstraten van Frigiliana. Reserveer op tijd en draag comfortabele schoenen.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'Een levendige eerste avond met gemakkelijke toegang',
            description:
              'Aan Plaza de las Tres Culturas serveert Gloria Bendita eigentijdse mediterrane gerechten met internationale invloeden in een centrale, levendige omgeving.',
            tip:
              'Kies buiten als je het plein tot leven wilt zien komen. Het is een makkelijke optie voor de eerste avond, zonder hoog Barribarto in te lopen.',
            goodToKnow:
              'De sfeer is sociaal, niet afgezonderd. Controleer de actuele openingsdagen voordat je je aankomstavond hier volledig omheen plant.'
          }),
          restaurant('laTaperia', {
            title: 'La Tapería',
            bestFor: 'Een intieme tafel en gerechten om te delen',
            description:
              'Een klein restaurant waar mediterrane, internationale en Arabische smaken samenkomen in tapas die zich niet in één vaste keuken laten vangen.',
            tip:
              'Deel verschillende kleine gerechten en volg voor een deel de suggesties van de keuken. Dat past beter bij deze intieme plek dan snel één hoofdgerecht eten.',
            goodToKnow:
              'De eetzaal is klein. Reserveer in het weekend en het hoogseizoen liever dan te rekenen op een vrije tafel.'
          })
        ]
      },
      {
        id: 'special-nerja',
        title: 'Bijzondere avonden in Nerja',
        intro:
          'Voor een verfijnder diner biedt Nerja zeezicht, eigentijdse keukens en restaurants waar de maaltijd het hoofdprogramma van de avond is.',
        restaurants: [
          restaurant('restaurant34', {
            title: 'Restaurant 34',
            bestFor: 'Zeezicht en een elegante date night',
            description:
              'Restaurant 34 in Hotel Carabeo werkt met lokale producten en heeft verschillende eetruimtes, waaronder een zomerterras aan de Middellandse Zee.',
            tip:
              'Vraag specifiek welke terras- of zeezichttafels beschikbaar zijn en bevestig de actuele reserveringsvoorwaarden voordat je een plek kiest.',
            goodToKnow:
              'Voor sommige tafels op de eerste rij kunnen aparte voorwaarden of een toeslag gelden. De actuele bevestiging van het restaurant is leidend.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'Een viering of een modern diner zonder haast',
            description:
              'Vlak bij Plaza de España serveert Oliva eigentijdse mediterrane gerechten en staat het restaurant sinds 2016 in de Michelin Gids.',
            tip:
              'Zie Oliva als de avond zelf: reserveer, neem tijd voor meerdere gangen en vraag naar het terras als dat voor jou belangrijk is.',
            goodToKnow:
              'Dit is een van de meer verfijnde keuzes in de gids. Controleer voor een bijzondere datum rechtstreeks het huidige menu en de keukendagen.'
          }),
          restaurant('moGastrotapas', {
            title: 'Mo Gastrotapas',
            bestFor: 'Creatieve deelgerechten en wijn',
            description:
              'Een moderne gastro-tapaszaak buiten het drukste deel van de oude stad, met fantasierijke gerechten en een ontspannen eigentijdse sfeer.',
            tip:
              'Bestel verschillende gerechten voor de tafel en laat het team rijkere en frissere smaken combineren. Door te delen leer je de keuken het best kennen.',
            goodToKnow:
              'Openingsdagen kunnen wisselen. Controleer en reserveer; dit werkt beter als gepland diner dan als late spontane poging.'
          })
        ]
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, vis & de levendige kant van Nerja',
        intro:
          'Dit zijn geen fluisterstille restaurants. Kom voor verse vis, lokaal ritme en een maaltijd waarbij de sfeer net zo belangrijk is als de presentatie.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Verse vis en een vlotte lokale lunch',
            description:
              'La Puntilla is een gevestigde viszaak, bekend om dagelijks verse aanvoer, tapas en een energiek servicetempo.',
            tip:
              'Ga lunchen en vraag welke vis die dag op zijn best is, in plaats van alles vooraf te bepalen. Het dagadvies is nuttiger dan één beroemd gerecht najagen.',
            goodToKnow:
              'Verwacht gesprekken, beweging en een volle ruimte. Dit is een lokale vismaaltijd, geen stille romantische lunch.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Centrale tapas, gefrituurde vis en mensen kijken',
            description:
              'Een paar straten van Balcón de Europa is El Pulguilla een klassieker in Nerja voor zeevruchten, gefrituurde vis, tapas en grotere porties.',
            tip:
              'Kies de bar voor de tapaservaring; neem een tafel of het terras voor een volledige maaltijd. Het zijn twee verschillende manieren om dezelfde zaak te beleven.',
            goodToKnow:
              'Op piekmomenten kan het druk en luid zijn. Kom vroeg of omarm de levendigheid als onderdeel van de ervaring.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'Een ontspannen strandlunch en paella op houtvuur',
            description:
              'AYO hoort sinds 1969 bij Burriana en draait om eten overdag, paella boven houtvuur en ongecompliceerde vis en espetos.',
            tip:
              'Combineer het met een ochtendduik en reken op een informele, gezellige lunch. Als onderdeel van een stranddag klopt de plek beter dan als formeel diner.',
            goodToKnow:
              'Denk aan een chiringuito overdag, niet aan een rustig avondrestaurant. Controleer de seizoensopening voordat je alleen voor de maaltijd afreist.'
          })
        ]
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch als bestemming',
        intro:
          'Het verloren dorp ligt voorbij Frigiliana in het natuurpark. De rit, het landschap en de maaltijd vormen samen het plan.',
        restaurants: [
          restaurant('elAcebuchal', {
            title: 'Restaurante El Acebuchal',
            bestFor: 'Een uitstap naar het platteland en rustieke Andalusische gerechten',
            description:
              'In het herstelde gehucht El Acebuchal draait het restaurant om traditioneel vlees, huisgemaakt brood en desserts, ver van de drukke kust.',
            tip:
              'Maak de lunch de beloning na een wandeling of rustige rit door de heuvels. Geef de route en de maaltijd tijd in plaats van ze tussen kustplannen te persen.',
            goodToKnow:
              'De toegang is landelijk en de opening is belangrijk. Controleer route, actuele tijden en reserveringsmogelijkheden rechtstreeks voordat je vertrekt.'
          })
        ]
      }
    ],
    planning: {
      title: 'Plan de avond en laat hem daarna ontstaan',
      intro:
        'Een paar praktische keuzes voorkomen de meeste teleurstellingen zonder van het diner een strak schema te maken.',
      items: [
        {
          title: 'Reserveer waar het telt',
          text:
            'Boek terrassen en restaurants voor bijzondere gelegenheden vooraf. Bij informele tapas zijn flexibiliteit en vroeg aankomen vaak nuttiger dan een formele reservering.'
        },
        {
          title: 'Controleer in dezelfde week',
          text:
            'Rustdagen, wintersluitingen en menu’s veranderen. Daarom nemen we geen openingstijden over; bevestig ze via de actuele informatie van het restaurant.'
        },
        {
          title: 'Bepaal vooraf wie rijdt',
          text:
            'Na een diner in Frigiliana kun je naar huis wandelen. Regel voor Nerja vóór het eerste glas wijn een taxi of nuchtere chauffeur.'
        },
        {
          title: 'Reken op een later ritme',
          text:
            'In Spanje begint het diner later dan in Noord-Europa. Wil je rust, kies dan de eerste zitting in plaats van het lokale piekmoment.'
        }
      ],
      note:
        'Onze selectie is onafhankelijk en draait om de ervaring die we gasten willen bieden. We verkopen geen restaurantreserveringen; menu’s, prijzen en openingsdagen kunnen zonder bericht veranderen.'
    },
    combine: {
      title: 'Laat de dag naar de maaltijd toe werken',
      intro:
        'De meest memorabele maaltijden werken vaak juist omdat de rest van de dag er vanzelf naartoe leidt.',
      items: [
        {
          title: 'Strand in de ochtend, lange lunch',
          text:
            'Zwem bij Burriana vóór AYO, of combineer de centrale stranden van Nerja met een vroege vislunch bij La Puntilla of El Pulguilla.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Eerst de heuvels, dan een tafel in het dorp',
          text:
            'Sluit een wandeling boven Frigiliana af met een diner in het dorp, of maak El Acebuchal de beloning van een tocht door het landschap.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        }
      ]
    },
    closing: {
      title: 'Kom rustig thuis',
      lead:
        'Het mooiste einde is vaak eenvoudig: nog één bocht door de witte straatjes, het dorp dat stiller wordt en geen enkele reden om de avond te haasten.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Appartementen bekijken'
    }
  },
  sv: {
    cardLabels: {
      bestFor: 'Passar bäst för',
      tip: 'AMARA:s insidertips',
      goodToKnow: 'Bra att veta',
      map: 'Öppna i Google Maps',
      website: 'Officiell information'
    },
    footerHighlights: {
      restaurants: 'Restauranger & lokal mat',
      beaches: 'Stränder & kust',
      hiking: 'Vandring & natur'
    },
    hero: {
      kicker: 'Lokal restaurangguide',
      title: 'Restauranger i Frigiliana & Nerja — våra tips till gäster',
      paragraphs: [
        'En minnesvärd middag kan vara en terrass ovanför Frigiliana, kreativa rätter i Nerja eller färsk fisk i tempot på en livlig lokal bar. Det är olika kvällar, och rätt val beror på vilket humör du är på.',
        'Det här är varken en rankning eller en fullständig katalog. Det är ett kort urval som vi delar med våra egna gäster, tillsammans med de avvägningar som är viktiga före bokningen.',
        'Öppningsdagar och menyer ändras med säsongen. Använd guiden för att välja och bekräfta sedan aktuell information direkt med restaurangen.'
      ],
      imageAlt:
        'Den vita byn Frigiliana ovanför kullarna och Medelhavskusten'
    },
    sectionNav: {
      choose: 'Välj efter känsla',
      frigiliana: 'Kvällar i Frigiliana',
      specialNerja: 'Speciella kvällar',
      tapasSeafood: 'Tapas & fisk',
      acebuchal: 'Lunchutflykt',
      planning: 'Planera kvällen'
    },
    overview: {
      title: 'Börja med kvällen du längtar efter',
      intro:
        'Det är mer användbart att tänka på stämning, avstånd och hur avslappnad eller speciell måltiden ska kännas än att leta efter ”den bästa”.',
      reviewed: 'Redaktionellt granskad: juli 2026',
      items: [
        {
          title: 'Stanna i Frigiliana',
          text:
            'Välj byn när vita gränder, en vacker promenad hem och en lugn kväll betyder mer än ett mycket stort restaurangutbud.'
        },
        {
          title: 'Gör kvällen speciell',
          text:
            'Nerja har fler alternativ för elegantare middagar, avsmakningsmenyer och terrasser med havsutsikt. Boka och ordna taxi eller nykter förare.'
        },
        {
          title: 'Ät som lokalborna',
          text:
            'Tapas och fisk kommer med tempo och lite ljud. Den livligaste lokalen är ofta mer givande än bordet med den vackraste utsikten.'
        },
        {
          title: 'Gör lunchen till en utflykt',
          text:
            'El Acebuchal är inget snabbt stopp på väg någon annanstans. Kombinera måltiden med landskapet och låt lunchen bli dagens mål.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Kvällar i Frigiliana — stämning utan bilresan hem',
        intro:
          'Tre olika bykvällar: en terrass i solnedgången, ett livligt torg eller ett litet och intimt bord.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Solnedgång, utsikt och en romantisk middag',
            description:
              'Högt uppe i Barribarto förenar The Garden en terrass över byn och kusten med en säsongsbetonad meny med internationella influenser.',
            tip:
              'Be om ett utebord när du bokar och kom före solnedgången. Det skiftande ljuset och promenaden ner genom gamla stan är en del av kvällen.',
            goodToKnow:
              'Terrassen är liten och vägen dit går via Frigilianas trappgränder. Boka i god tid och använd bekväma skor.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'En livlig första kväll med enkel tillgång',
            description:
              'Vid Plaza de las Tres Culturas serverar Gloria Bendita modern medelhavsmat med internationella influenser i ett centralt och livligt läge.',
            tip:
              'Välj ett utebord om du vill se torget vakna till liv. Det är ett enkelt val första kvällen utan att gå långt upp i Barribarto.',
            goodToKnow:
              'Stämningen är social snarare än avskild. Kontrollera aktuella öppningsdagar innan du bygger hela ankomstkvällen kring restaurangen.'
          }),
          restaurant('laTaperia', {
            title: 'La Tapería',
            bestFor: 'Ett intimt bord och rätter att dela',
            description:
              'En liten restaurang där tapas hämtar smaker från Medelhavet, internationell matlagning och det arabiska köket utan att låsas vid en enda stil.',
            tip:
              'Dela flera mindre rätter och låt kökets rekommendationer styra en del av beställningen. Det passar den intima lokalen bättre än en snabb huvudrätt.',
            goodToKnow:
              'Matsalen är liten. Boka hellre än att hoppas på ett ledigt bord, särskilt under helger och högsäsong.'
          })
        ]
      },
      {
        id: 'special-nerja',
        title: 'Speciella kvällar i Nerja',
        intro:
          'För en mer elegant middag erbjuder Nerja havsutsikt, modern matlagning och restauranger där måltiden får vara kvällens huvudnummer.',
        restaurants: [
          restaurant('restaurant34', {
            title: 'Restaurant 34',
            bestFor: 'Havsutsikt och en elegant dejtkväll',
            description:
              'Restaurant 34 på Hotel Carabeo arbetar med lokala råvaror och har flera matsalar, däribland en sommarterrass mot Medelhavet.',
            tip:
              'Fråga specifikt vilka terrass- eller havsutsiktsbord som finns och bekräfta de aktuella bokningsvillkoren innan du väljer plats.',
            goodToKnow:
              'Vissa bord närmast havet kan ha särskilda villkor eller ett tillägg. Restaurangens aktuella bekräftelse gäller.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'Ett firande eller en modern middag utan brådska',
            description:
              'Nära Plaza de España serverar Oliva modern medelhavsmat och restaurangen har funnits med i Michelinguiden sedan 2016.',
            tip:
              'Låt Oliva vara kvällens plan: boka, ge flera rätter gott om tid och fråga om terrassen om den är viktig för dig.',
            goodToKnow:
              'Det här är ett av guidens mer eleganta val. Kontrollera aktuell meny och köksdagar direkt inför ett särskilt datum.'
          }),
          restaurant('moGastrotapas', {
            title: 'Mo Gastrotapas',
            bestFor: 'Kreativa smårätter att dela och vin',
            description:
              'En modern gastro-tapasrestaurang utanför den mest intensiva delen av gamla stan, med fantasifulla rätter och avslappnad samtida känsla.',
            tip:
              'Beställ flera rätter till bordet och låt teamet balansera fylligare smaker med fräschare. Genom att dela får ni bäst bild av köket.',
            goodToKnow:
              'Öppningsdagarna kan variera. Kontrollera och boka; restaurangen passar bättre för en planerad middag än ett sent spontant försök.'
          })
        ]
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, fisk & Nerjas livliga sida',
        intro:
          'Det här är inga tysta matsalar. Kom för färsk fisk, lokal rytm och en måltid där stämningen betyder lika mycket som presentationen.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Färsk fisk och en snabb lokal lunch',
            description:
              'La Puntilla är en väletablerad fiskrestaurang, känd för dagens färska fångst, tapas och ett energiskt serveringstempo.',
            tip:
              'Gå dit till lunch och fråga vilken fisk som är bäst just den dagen i stället för att bestämma allt i förväg. Dagens råd är mer värt än en enda berömd rätt.',
            goodToKnow:
              'Räkna med samtal, rörelse och en full lokal. Det är en lokal fiskmåltid, inte en stillsam romantisk lunch.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Centrala tapas, friterad fisk och folkliv',
            description:
              'Några gränder från Balcón de Europa är El Pulguilla en klassiker i Nerja för skaldjur, friterad fisk, tapas och större portioner.',
            tip:
              'Välj baren för tapaskänslan; ta ett bord eller terrassen för en hel måltid. Det är två olika sätt att uppleva samma ställe.',
            goodToKnow:
              'Det kan vara trångt och högljutt vid rusningstid. Kom tidigt eller se sorlet som en del av upplevelsen.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'En avslappnad strandlunch och vedeldad paella',
            description:
              'AYO har hört till Burriana sedan 1969 och kretsar kring lunch vid stranden, vedeldad paella samt enkel fisk och spett.',
            tip:
              'Kombinera med ett morgondopp och kom inställd på en ledig, social lunch. Som del av en stranddag fungerar AYO bättre än som formell middag.',
            goodToKnow:
              'Tänk chiringuito på dagen, inte en stilla kvällsrestaurang. Kontrollera säsongsöppningen innan du åker dit enbart för maten.'
          })
        ]
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch som utflyktsmål',
        intro:
          'Den förlorade byn ligger bortom Frigiliana i naturparken. Vägen, landskapet och måltiden hör ihop.',
        restaurants: [
          restaurant('elAcebuchal', {
            title: 'Restaurante El Acebuchal',
            bestFor: 'En utflykt på landet och rustik andalusisk mat',
            description:
              'I den återuppbyggda byn El Acebuchal står traditionella kötträtter, hembakat bröd och desserter i centrum, långt från kustens tempo.',
            tip:
              'Gör lunchen till belöningen efter en vandring eller långsam bilfärd i bergen. Ge resan och måltiden tid i stället för att klämma in dem mellan kustplaner.',
            goodToKnow:
              'Vägen är lantlig och aktuella öppettider viktiga. Kontrollera rutt, tider och bokningsmöjlighet direkt innan avfärd.'
          })
        ]
      }
    ],
    planning: {
      title: 'Planera kvällen och låt den sedan utvecklas',
      intro:
        'Några praktiska val förebygger de flesta besvikelser utan att göra middagen till ett strikt schema.',
      items: [
        {
          title: 'Boka där det spelar roll',
          text:
            'Boka terrasser och restauranger för speciella tillfällen i förväg. För enkel tapas är flexibilitet och tidig ankomst ofta mer värdefullt än en formell bokning.'
        },
        {
          title: 'Kontrollera samma vecka',
          text:
            'Vilodagar, vinterstängningar och menyer ändras. Därför återger vi inga öppettider; bekräfta dem via restaurangens aktuella information.'
        },
        {
          title: 'Bestäm vem som kör',
          text:
            'Efter middag i Frigiliana kan du promenera hem. Ordna taxi eller nykter förare till Nerja före kvällens första glas vin.'
        },
        {
          title: 'Räkna med en senare rytm',
          text:
            'I Spanien börjar middagen senare än i norra Europa. Vill du ha lugn, välj den första sittningen i stället för den lokala rusningstiden.'
        }
      ],
      note:
        'Vårt urval är oberoende och utgår från upplevelsen vi vill ge gäster. Vi säljer inga restaurangbokningar; menyer, priser och öppningsdagar kan ändras utan förvarning.'
    },
    combine: {
      title: 'Låt dagen leda fram till måltiden',
      intro:
        'De mest minnesvärda måltiderna fungerar ofta för att resten av dagen leder naturligt fram till dem.',
      items: [
        {
          title: 'Strand på morgonen, lång lunch',
          text:
            'Bada vid Burriana före AYO, eller kombinera Nerjas centrala stränder med en tidig fisklunch på La Puntilla eller El Pulguilla.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Först bergen, sedan ett bord i byn',
          text:
            'Avsluta en vandring ovanför Frigiliana med middag i byn, eller gör El Acebuchal till belöningen efter en tur på landsbygden.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        }
      ]
    },
    closing: {
      title: 'Kom hem långsamt',
      lead:
        'Det finaste slutet är ofta enkelt: en sista sväng genom de vita gränderna, byn som blir allt tystare och ingen anledning att skynda på kvällen.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se lägenheter'
    }
  }
};
