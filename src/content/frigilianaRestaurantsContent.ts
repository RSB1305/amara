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
        | 'frigiliana_hiking_authority'
        | 'nerja_nightlife_authority';
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
  version: '2026-08-27-frigiliana-restaurants-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  article: {
    datePublished: '2026-07-01',
    dateModified: '2026-08-27',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'amara-about-us'
  },
  languages: {
    en: {
      title: 'Restaurants in Frigiliana & Nerja',
      description:
        'Compare ten restaurants in Frigiliana and Nerja for village terraces, special dinners, tapas, seafood and a destination lunch.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Restaurant-Tipps für Frigiliana & Nerja',
      description:
        'Zehn Restaurants in Frigiliana und Nerja nach Anlass ausgewählt – mit ehrlichen AMARA-Tipps zu Terrassen, besonderen Abenden, Tapas und Fisch.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Restaurantes en Frigiliana y Nerja',
      description:
        'Diez restaurantes de Frigiliana y Nerja elegidos según el momento, con consejos sinceros sobre terrazas, cenas especiales, tapas, pescado y excursiones.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Restauranttips voor Frigiliana & Nerja',
      description:
        'Tien restaurants in Frigiliana en Nerja, gekozen per sfeer, met eerlijke AMARA-tips voor terrassen, bijzondere diners, tapas, vis en een lunchuitstap.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Restauranger i Frigiliana & Nerja',
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
      title: 'Restaurants in Frigiliana & Nerja — choose by place and occasion',
      paragraphs: [
        'Dinner here can mean a terrace above Frigiliana, creative plates in Nerja or fresh fish in a busy local bar. Those are different evenings, with different travel and booking needs.',
        'This is not a ranking or a directory. It is a concise editorial selection for guests, with the trade-offs that matter before you reserve.',
        'Opening days and menus change with the season. Use the guide to choose, then confirm the latest details directly with the restaurant.'
      ],
      imageAlt:
        'Whitewashed Frigiliana above the hills and Mediterranean coast'
    },
    sectionNav: {
      choose: 'Choose by location and meal',
      frigiliana: 'Frigiliana evenings',
      specialNerja: 'Special nights',
      tapasSeafood: 'Tapas & seafood',
      acebuchal: 'Destination lunch',
      planning: 'Plan the evening'
    },
    overview: {
      title: 'Start with the evening you want',
      intro:
        'Distance, noise level, booking requirements and the kind of meal you want are more useful than a ranking.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Stay in Frigiliana',
          text:
            'Choose the village when you want dinner to remain in Frigiliana. The exact route between a restaurant and Casa AMARA still has to be checked venue by venue.'
        },
        {
          title: 'Make it an occasion',
          text:
            'Nerja has the stronger choice for a polished dinner, tasting menus and sea-view terraces. Reserve and plan a taxi or sober driver.'
        },
        {
          title: 'Eat like a local',
          text:
            'For tapas and fish, expect conversation, movement and a full room. The busiest places often serve faster than formal dining rooms.'
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
        title: 'Frigiliana evenings — choose by village setting',
        intro:
          'These three addresses occupy different village settings and restaurant formats: Barribarto with a terrace, Plaza de las Tres Culturas and Avenida Carlos Cano.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'A terrace dinner in Barribarto',
            description:
              'The operator and municipality place The Garden on Calle del Santo Cristo in Barribarto and describe a terrace with an international, Mediterranean-influenced cuisine format.',
            tip:
              'If the terrace matters, ask the restaurant to confirm current terrace operation and table availability when booking.',
            goodToKnow:
              'A documented terrace does not establish sunset orientation, a particular view or the route back. Those details need a current confirmation or a first-hand AMARA note.'
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'A lively first evening and easy village access',
            description:
              'On Plaza de las Tres Culturas, Gloria Bendita serves contemporary Mediterranean cooking with international influences in an animated central setting.',
            tip:
              'Choose an outside table when you want to watch the plaza come alive. It is an easy first-night option without climbing deep into Barribarto.',
            goodToKnow:
              'Expect a social, busy room rather than a secluded table. Check current opening days before making it the fixed plan for your arrival evening.'
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
          'These are not hushed dining rooms. Come for fresh fish, quick service, conversation and full tables.',
        restaurants: [
          restaurant('laPuntilla', {
            title: 'La Puntilla',
            bestFor: 'Fresh fish and a fast, local lunch',
            description:
              'La Puntilla is a long-standing seafood address known for fish brought in daily, tapas and fast-moving service.',
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
            bestFor: 'A daytime beach lunch at Burriana',
            description:
              'AYO is at Paseo Burriana 15, directly on Playa Burriana, and publishes daytime service. It belongs to a beach-and-lunch plan rather than an evening dinner plan.',
            tip:
              'Choose Burriana first if its urban beach and service profile fit your day, then check AYO’s current opening and kitchen service.',
            goodToKnow:
              'Opening and menu details can change. Treat the venue as a current option, not a guaranteed part of the beach day.'
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
            'If alcohol is part of the evening, decide the return before you reserve. Do not infer a walk-home route or taxi availability from the destination name alone.'
        },
        {
          title: 'Expect dinner to start later',
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
          title: 'Burriana and lunch as one beach day',
          text:
            'If Burriana’s urban service profile suits you, AYO is directly on the beach as a daytime option. Check current operation and use the beach guide for access and beach choice.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Hills, then a village table',
          text:
            'A longer or more demanding route changes how much time remains for dinner. Use the hiking guide for the route commitment, then check a restaurant’s current operation separately; no route-to-table pairing is verified yet.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        },
        {
          title: 'After a central Nerja dinner: a tested sunset drink',
          text:
            'If dinner leaves you near the Balcón or old town, Cochran’s Terrace is our personally tested next step. We watched the sunset there in summer 2025 over a Cuba Libre and a Mai Tai. The exact restaurant we paired it with is no longer certain, so choose dinner separately and check Cochran’s current opening before you go.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'See our Nerja evening'
        }
      ]
    },
    closing: {
      title: 'Choose dinner and the return together',
      lead:
        'Casa AMARA is on Calle Chorruelo. A restaurant address alone does not establish the exact route back; confirm the venue and return before making alcohol part of the evening.',
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
      title: 'Restaurants in Frigiliana & Nerja — nach Lage und Anlass wählen',
      paragraphs: [
        'Ein besonderer Abend kann hier vieles sein: ein Tisch über den Dächern Frigilianas, kreative Küche in Nerja oder fangfrischer Fisch in einer lebhaften Bar. Das sind ganz unterschiedliche Erlebnisse – entscheidend ist, wonach euch gerade ist.',
        'Diese Seite ist weder Rangliste noch vollständiges Verzeichnis. Sie versammelt eine überschaubare redaktionelle Auswahl für Gäste, einschließlich der Details, die vor der Reservierung wirklich zählen.',
        'Ruhetage und Speisekarten ändern sich je nach Saison. Nutzt den Guide für die Auswahl und bestätigt die aktuellen Angaben anschließend direkt beim Restaurant.'
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
      title: 'Beginnt mit dem Abend, den ihr euch wünscht',
      intro:
        'Hilfreicher als eine Rangliste sind Atmosphäre, Entfernung und die Frage, wie besonders oder unkompliziert sich das Essen anfühlen soll.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'In Frigiliana bleiben',
          text:
            'Wählt das Dorf, wenn das Abendessen in Frigiliana bleiben soll. Den genauen Weg zwischen Restaurant und Casa AMARA müssen wir trotzdem für jede Adresse einzeln prüfen.'
        },
        {
          title: 'Einen besonderen Abend planen',
          text:
            'Nerja bietet mehr Auswahl für gehobene Küche, Menüs und Terrassen mit Meerblick. Reserviert und plant Taxi oder Fahrer gleich mit.'
        },
        {
          title: 'Essen wie die Einheimischen',
          text:
            'Bei Tapas und Fisch gehören Tempo und etwas Lautstärke dazu. Oft sind die lebhaftesten Räume spannender als die schönsten Tische.'
        },
        {
          title: 'Aus dem Mittagessen einen Ausflug machen',
          text:
            'El Acebuchal ist kein schneller Zwischenstopp. Verbindet das Essen mit der Landschaft und macht den Lunch selbst zum Ziel.'
        }
      ]
    },
    restaurantSections: [
      {
        id: 'frigiliana',
        title: 'Abende in Frigiliana — nach Ortslage wählen',
        intro:
          'Diese drei Adressen stehen für unterschiedliche Ortslagen und Restaurantformate: Barribarto mit Terrasse, Plaza de las Tres Culturas und Avenida Carlos Cano.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Ein Terrassenessen im Barribarto',
            description:
              'Betreiber und Gemeinde verorten The Garden an der Calle del Santo Cristo im Barribarto und beschreiben eine Terrasse sowie eine international und mediterran geprägte Küche.',
            tip:
              'Wenn euch die Terrasse wichtig ist, lasst euch bei der Reservierung den aktuellen Terrassenbetrieb und die Tischverfügbarkeit bestätigen.',
            goodToKnow:
              'Eine belegte Terrasse beweist weder Sonnenuntergangsrichtung noch eine bestimmte Aussicht oder den Rückweg. Dafür brauchen wir eine aktuelle Bestätigung oder eine eigene AMARA-Notiz.',
          }),
          restaurant('gloriaBendita', {
            title: 'Gloria Bendita',
            bestFor: 'Einen lebhaften ersten Abend mit kurzem Weg',
            description:
              'An der Plaza de las Tres Culturas serviert Gloria Bendita moderne mediterrane Küche mit internationalen Einflüssen in zentraler, lebendiger Lage.',
            tip:
              'Ein Außentisch lohnt sich, wenn ihr das Treiben auf dem Platz mögt. Für den Ankunftsabend ist das unkompliziert, ohne tief ins steile Barribarto zu laufen.',
            goodToKnow:
              'Die Stimmung ist gesellig, nicht abgeschieden. Prüft die aktuellen Öffnungstage, bevor ihr den Ankunftsabend fest darauf ausrichtet.'
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
              'Fragt konkret, welche Terrassen- oder Meerblicktische verfügbar sind, und bestätigt vor der Auswahl die aktuell geltenden Reservierungsbedingungen.',
            goodToKnow:
              'Für Tische in der ersten Meerblickreihe können besondere Bedingungen oder ein Aufpreis gelten. Maßgeblich ist die aktuelle Bestätigung des Restaurants.'
          }),
          restaurant('oliva', {
            title: 'Restaurante Oliva',
            bestFor: 'Einen Anlass oder ein entspanntes modernes Dinner',
            description:
              'Nahe der Plaza de España serviert Oliva zeitgemäße mediterrane Küche und wird seit 2016 im Guide Michelin geführt.',
            tip:
              'Plant Oliva als eigentlichen Abend: reserviert, lasst Zeit für mehrere Gänge und fragt bei Interesse nach der Terrasse.',
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
              'Geht mittags und fragt, welcher Fisch an diesem Tag besonders gut ist. Das ist hilfreicher, als euch vorher auf ein berühmtes Gericht festzulegen.',
            goodToKnow:
              'Rechnet mit Gesprächen, Bewegung und einem vollen Raum. Das ist ein lokales Fischessen, kein ruhiges romantisches Mittagessen.'
          }),
          restaurant('elPulguilla', {
            title: 'El Pulguilla',
            bestFor: 'Zentrale Tapas, frittierten Fisch und Menschenbeobachten',
            description:
              'Nur wenige Gassen vom Balcón de Europa entfernt ist El Pulguilla ein Nerja-Klassiker für Meeresfrüchte, frittierten Fisch, Tapas und größere Portionen.',
            tip:
              'Wählt die Bar für das Tapas-Erlebnis, Tisch oder Terrasse für ein vollständiges Essen. So entstehen aus derselben Adresse zwei sehr unterschiedliche Abende.',
            goodToKnow:
              'Zu Stoßzeiten wird es voll und laut. Früh kommen oder die lebhafte Stimmung bewusst als Teil des Erlebnisses annehmen.'
          }),
          restaurant('ayo', {
            title: 'Chiringuito AYO',
            bestFor: 'Ein Mittagessen am Burriana-Strand',
            description:
              'AYO liegt am Paseo Burriana 15 direkt an der Playa Burriana und veröffentlicht einen Tagesbetrieb. Der Ort gehört damit zu einem Strand-und-Mittagessen-Plan, nicht zu einem Abendessen.',
            tip:
              'Entscheidet zuerst, ob Burrianas urbanes Strand- und Serviceprofil zu eurem Tag passt, und prüft danach AYOs aktuelle Öffnung und Küchenzeiten.',
            goodToKnow:
              'Öffnung und Angebot können sich ändern. Behandelt AYO als aktuelle Option, nicht als garantierten Bestandteil des Strandtags.'
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
              'Macht das Essen zum Abschluss einer Wanderung oder einer ruhigen Fahrt in die Berge. Plant Zeit für den Weg und den Lunch ein, statt ihn zwischen Küstenpläne zu quetschen.',
            goodToKnow:
              'Die Anfahrt ist ländlich, aktuelle Öffnung entscheidend. Prüft Route, Zeiten und Reservierung direkt, bevor ihr aufbrecht.'
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
            'Ruhetage, Winterpausen und Karten ändern sich. Deshalb nennen wir bewusst keine Öffnungszeiten; bestätigt sie über die aktuellen Angaben des Restaurants.'
        },
        {
          title: 'Vorher klären, wer fährt',
          text:
            'Wenn Alkohol zum Abend gehört, klärt die Rückfahrt vor der Reservierung. Aus dem Ortsnamen allein lassen sich weder ein sicherer Heimweg zu Fuß noch Taxiverfügbarkeit ableiten.'
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
          title: 'Burriana und Mittagessen als ein Strandtag',
          text:
            'Wenn Burrianas urbanes Serviceprofil zu euch passt, liegt AYO direkt am Strand als Tagesoption. Prüft die aktuelle Öffnung und nutzt den Strand-Guide für Zugang und Strandwahl.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Erst die Hügel, dann ein Dorftisch',
          text:
            'Eine längere oder anspruchsvollere Route verändert, wie viel Zeit danach für ein Essen bleibt. Nutzt den Wander-Guide für den Routenumfang und prüft den aktuellen Restaurantbetrieb getrennt; eine konkrete Route-zu-Tisch-Kombination ist noch nicht verifiziert.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        },
        {
          title: 'Nach dem Essen im Zentrum: ein erprobter Sundowner',
          text:
            'Wenn euer Restaurant beim Balcón oder in der Altstadt liegt, ist Cochran’s Terrace unser persönlich erprobter nächster Schritt. Im Sommer 2025 sahen wir dort bei Cuba Libre und Mai Tai den Sonnenuntergang. Welches Restaurant wir davor besucht hatten, wissen wir nicht mehr sicher; wählt das Essen deshalb getrennt und prüft Cochran’s aktuelle Öffnung.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Zu unserem Nerja-Abend'
        }
      ]
    },
    closing: {
      title: 'Abendessen und Rückweg gemeinsam wählen',
      lead:
        'Casa AMARA liegt an der Calle Chorruelo. Eine Restaurantadresse belegt noch keinen konkreten Rückweg; bestätigt Adresse und Rückfahrt, bevor Alkohol Teil des Abends wird.',
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
      title: 'Restaurantes en Frigiliana y Nerja — elegid por zona y ocasión',
      paragraphs: [
        'Una cena memorable puede ser una mesa sobre los tejados de Frigiliana, platos creativos en Nerja o pescado fresco al ritmo de un bar local lleno de vida. Son planes distintos, y la elección depende del ambiente que apetezca.',
        'Esto no es un ranking ni un directorio. Es una selección editorial breve para huéspedes, con los matices que de verdad conviene conocer antes de reservar.',
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
            'Elegid el pueblo si queréis que la cena se mantenga en Frigiliana. Aun así, la ruta exacta entre cada restaurante y Casa AMARA debe comprobarse por separado.'
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
        title: 'Noches en Frigiliana — elegid según la zona del pueblo',
        intro:
          'Estas tres direcciones representan zonas y formatos distintos: Barribarto con terraza, Plaza de las Tres Culturas y Avenida Carlos Cano.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Una cena en terraza en Barribarto',
            description:
              'El operador y el ayuntamiento sitúan The Garden en la calle del Santo Cristo, en Barribarto, y describen una terraza y una cocina de influencias internacionales y mediterráneas.',
            tip:
              'Si la terraza es importante, pedid al restaurante que confirme su funcionamiento actual y la disponibilidad de mesas al reservar.',
            goodToKnow:
              'Una terraza documentada no demuestra la orientación del atardecer, una vista concreta ni la ruta de regreso. Esos detalles requieren confirmación actual o una nota propia de AMARA.',
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
            bestFor: 'Un almuerzo de playa en Burriana',
            description:
              'AYO está en Paseo Burriana 15, directamente en Playa Burriana, y publica servicio diurno. Forma parte de un plan de playa y almuerzo, no de una cena.',
            tip:
              'Decidid primero si el perfil urbano y de servicios de Burriana encaja con vuestro día y comprobad después la apertura y el servicio de cocina actuales de AYO.',
            goodToKnow:
              'La apertura y la oferta pueden cambiar. Tratad AYO como una opción actual, no como una parte garantizada del día de playa.'
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
            'Si el alcohol forma parte de la noche, decidid el regreso antes de reservar. El nombre del destino no demuestra una ruta peatonal segura ni disponibilidad de taxi.'
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
          title: 'Burriana y almuerzo como un solo día de playa',
          text:
            'Si el perfil urbano y de servicios de Burriana os encaja, AYO está directamente en la playa como opción diurna. Comprobad su actividad actual y usad la guía de playas para el acceso y la elección.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Primero la sierra, después una mesa en el pueblo',
          text:
            'Una ruta más larga o exigente cambia el tiempo disponible para cenar. Usad la guía de senderismo para valorar el compromiso de la ruta y comprobad aparte el funcionamiento actual del restaurante; aún no hay una combinación ruta-mesa verificada.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        },
        {
          title: 'Después de cenar en el centro: un atardecer probado',
          text:
            'Si cenáis cerca del Balcón o del casco antiguo, Cochran’s Terrace es nuestro siguiente paso probado personalmente. Allí vimos la puesta de sol en verano de 2025 con un Cuba Libre y un Mai Tai. Ya no recordamos con seguridad el restaurante anterior; elegid la cena por separado y comprobad la apertura actual de Cochran’s.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Ver nuestra noche en Nerja'
        }
      ]
    },
    closing: {
      title: 'Elegid juntos la cena y el regreso',
      lead:
        'Casa AMARA está en la calle Chorruelo. La dirección de un restaurante no demuestra la ruta exacta de vuelta; confirmad el local y el regreso antes de incluir alcohol en la noche.',
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
      title: 'Restaurants in Frigiliana & Nerja — kies op locatie en gelegenheid',
      paragraphs: [
        'Een bijzondere avond kan hier een terras boven Frigiliana zijn, creatieve gerechten in Nerja of verse vis in het tempo van een levendige lokale bar. Dat zijn verschillende ervaringen; de juiste keuze hangt af van je stemming.',
        'Dit is geen ranglijst en ook geen compleet overzicht. Het is een compacte redactionele selectie voor gasten, inclusief de afwegingen die ertoe doen voordat je reserveert.',
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
            'Kies het dorp wanneer het diner in Frigiliana moet blijven. De precieze route tussen elk restaurant en Casa AMARA moet nog steeds per adres worden gecontroleerd.'
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
        title: 'Avonden in Frigiliana — kies op ligging in het dorp',
        intro:
          'Deze drie adressen vertegenwoordigen verschillende dorpslocaties en restaurantvormen: Barribarto met terras, Plaza de las Tres Culturas en Avenida Carlos Cano.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'Een terrasdiner in Barribarto',
            description:
              'De exploitant en de gemeente plaatsen The Garden aan Calle del Santo Cristo in Barribarto en beschrijven een terras en een internationaal-mediterraan keukenconcept.',
            tip:
              'Als het terras belangrijk is, laat het restaurant bij de reservering de actuele terraswerking en tafelbeschikbaarheid bevestigen.',
            goodToKnow:
              'Een gedocumenteerd terras bewijst geen zonsondergangsrichting, specifiek uitzicht of terugroute. Die details vragen een actuele bevestiging of een eigen AMARA-notitie.',
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
            bestFor: 'Een lunch aan het Burriana-strand',
            description:
              'AYO ligt aan Paseo Burriana 15, direct aan Playa Burriana, en publiceert dagservice. Het hoort bij een strand-en-lunchplan, niet bij een avonddiner.',
            tip:
              'Bepaal eerst of Burriana’s stedelijke strand- en voorzieningenprofiel bij jullie dag past en controleer daarna de actuele opening en keukenservice van AYO.',
            goodToKnow:
              'Opening en aanbod kunnen veranderen. Zie AYO als een actuele optie, niet als een gegarandeerd onderdeel van de stranddag.'
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
            'Als alcohol bij de avond hoort, beslis dan vóór het reserveren over de terugreis. Uit alleen de plaatsnaam volgen geen veilige looproute of beschikbare taxi.'
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
          title: 'Burriana en lunch als één stranddag',
          text:
            'Als Burriana’s stedelijke voorzieningenprofiel bij jullie past, ligt AYO direct aan het strand als optie voor overdag. Controleer de actuele werking en gebruik de strandgids voor toegang en strandkeuze.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Eerst de heuvels, dan een tafel in het dorp',
          text:
            'Een langere of zwaardere route verandert hoeveel tijd er voor het diner overblijft. Gebruik de wandelgids voor de omvang van de route en controleer de actuele restaurantwerking apart; er is nog geen route-naar-tafelcombinatie geverifieerd.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        },
        {
          title: 'Na een diner in het centrum: een beproefde sundowner',
          text:
            'Eten jullie bij het Balcón of in de oude stad, dan is Cochran’s Terrace onze persoonlijk beproefde volgende stap. In de zomer van 2025 zagen we daar met een Cuba Libre en een Mai Tai de zon ondergaan. Welk restaurant eraan voorafging weten we niet meer zeker; kies het diner dus apart en controleer de actuele opening van Cochran’s.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Bekijk onze avond in Nerja'
        }
      ]
    },
    closing: {
      title: 'Kies diner en terugreis samen',
      lead:
        'Casa AMARA ligt aan Calle Chorruelo. Een restaurantadres bewijst nog geen precieze terugroute; bevestig locatie en terugreis voordat alcohol deel van de avond wordt.',
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
      title: 'Restauranger i Frigiliana & Nerja — välj efter plats och tillfälle',
      paragraphs: [
        'En minnesvärd middag kan vara en terrass ovanför Frigiliana, kreativa rätter i Nerja eller färsk fisk i tempot på en livlig lokal bar. Det är olika kvällar, och rätt val beror på vilket humör du är på.',
        'Det här är varken en rankning eller en fullständig katalog. Det är ett kort redaktionellt urval för gäster, tillsammans med de avvägningar som är viktiga före bokningen.',
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
            'Välj byn när middagen ska stanna i Frigiliana. Den exakta vägen mellan varje restaurang och Casa AMARA måste ändå kontrolleras separat.'
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
        title: 'Kvällar i Frigiliana — välj efter läget i byn',
        intro:
          'De tre adresserna representerar olika lägen och restaurangformat: Barribarto med terrass, Plaza de las Tres Culturas och Avenida Carlos Cano.',
        restaurants: [
          restaurant('theGarden', {
            title: 'The Garden Restaurant',
            bestFor: 'En terrassmiddag i Barribarto',
            description:
              'Operatören och kommunen placerar The Garden på Calle del Santo Cristo i Barribarto och beskriver en terrass samt ett internationellt och medelhavsinspirerat köksformat.',
            tip:
              'Om terrassen är viktig, be restaurangen bekräfta aktuell terrassdrift och bordstillgång vid bokningen.',
            goodToKnow:
              'En dokumenterad terrass bevisar inte solnedgångsriktning, en viss utsikt eller vägen tillbaka. Det kräver aktuell bekräftelse eller en egen AMARA-notering.',
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
            bestFor: 'En strandlunch vid Burriana',
            description:
              'AYO ligger på Paseo Burriana 15, direkt vid Playa Burriana, och publicerar dagservering. Restaurangen hör till en strand-och-lunchplan, inte till en kvällsmiddag.',
            tip:
              'Avgör först om Burrianas stadsstrand och serviceprofil passar er dag och kontrollera därefter AYOs aktuella öppettider och köksservering.',
            goodToKnow:
              'Öppettider och utbud kan ändras. Se AYO som ett aktuellt alternativ, inte som en garanterad del av stranddagen.'
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
            'Om alkohol ingår i kvällen, bestäm hemresan före bokningen. Ortsnamnet i sig bevisar varken en säker promenadväg hem eller tillgång till taxi.'
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
          title: 'Burriana och lunch som en stranddag',
          text:
            'Om Burrianas stadsstrand och serviceprofil passar er ligger AYO direkt vid stranden som ett alternativ dagtid. Kontrollera aktuell verksamhet och använd strandguiden för tillträde och strandval.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Först bergen, sedan ett bord i byn',
          text:
            'En längre eller mer krävande led ändrar hur mycket tid som återstår för middag. Använd vandringsguiden för ledens omfattning och kontrollera restaurangens aktuella drift separat; ingen led-till-bord-kombination är ännu verifierad.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        },
        {
          title: 'Efter middag i centrum: en prövad sundowner',
          text:
            'Om middagen ligger nära Balcón eller gamla stan är Cochran’s Terrace vårt personligen prövade nästa steg. Sommaren 2025 såg vi solnedgången där med en Cuba Libre och en Mai Tai. Vi minns inte längre säkert vilken restaurang vi åt på före besöket; välj därför middagen separat och kontrollera Cochran’s aktuella öppettider.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Se vår kväll i Nerja'
        }
      ]
    },
    closing: {
      title: 'Välj middag och hemresa tillsammans',
      lead:
        'Casa AMARA ligger på Calle Chorruelo. En restaurangadress bevisar inte den exakta vägen tillbaka; bekräfta plats och hemresa innan alkohol blir en del av kvällen.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se lägenheter'
    }
  }
};
