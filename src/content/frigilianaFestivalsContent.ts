import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type FestivalSeasonId =
  | 'january'
  | 'spring'
  | 'may-june'
  | 'summer'
  | 'autumn-winter';

interface FestivalEvent {
  name: string;
  timing: string;
  place: string;
  dateStatus: string;
  summary: string;
  officialHref?: string;
}

interface FestivalSeason {
  id: FestivalSeasonId;
  title: string;
  intro: string;
  events: FestivalEvent[];
}

interface FestivalExperience {
  title: string;
  timing: string;
  place: string;
  dateStatus: string;
  description: string;
  planningNote: string;
  officialHref?: string;
}

export interface FrigilianaFestivalsPageCopy {
  cardLabels: {
    timing: string;
    place: string;
    dateStatus: string;
    officialInformation: string;
    amaraNote: string;
  };
  footerHighlights: {
    festivals: string;
    restaurants: string;
    beaches: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  sectionNav: {
    choose: string;
    calendar: string;
    experiences: string;
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
  calendar: {
    title: string;
    intro: string;
    seasons: FestivalSeason[];
  };
  experiences: {
    title: string;
    intro: string;
    items: FestivalExperience[];
  };
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
        | 'frigiliana_food_authority'
        | 'frigiliana_beaches_authority';
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

const officialLinks = {
  frigilianaTraditions: 'https://frigiliana.es/fiestas-y-tradiciones/',
  threeCultures2026:
    'https://frigiliana.es/frigiliana-celebrara-una-nueva-edicion-del-festival-3-culturas-del-27-al-30-de-agosto-de-2026/',
  sanIsidro2026:
    'https://www.nerja.es/nerja-celebra-la-romeria-de-san-isidro-2026-con-tradicion-musica-y-homenaje-a-los-agricultores/',
  sanJuan2026:
    'https://www.nerja.es/nerja-celebrara-la-noche-de-san-juan-con-musica-y-la-tradicional-quema-del-jua/',
  cuevaDeNerja: 'https://cuevadenerja.es/',
  nerjaCouncil: 'https://www.nerja.es/'
} as const;

export const frigilianaFestivalsSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-festivals-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Festivals in Frigiliana & Nerja | AMARA Guide',
      description:
        'Plan festivals in Frigiliana and Nerja with a seasonal calendar, confirmed 2026 dates and honest advice on crowds, parking and programmes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Feste in Frigiliana & Nerja | AMARA Guide',
      description:
        'Feste in Frigiliana und Nerja planen: Saisonkalender, bestätigte Termine 2026 und ehrliche Hinweise zu Andrang, Parken und Programmen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Fiestas en Frigiliana y Nerja | Guía AMARA',
      description:
        'Planificad las fiestas de Frigiliana y Nerja con calendario estacional, fechas confirmadas de 2026 y consejos sobre aforo, acceso y programas.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Feesten in Frigiliana & Nerja | AMARA-gids',
      description:
        'Plan feesten in Frigiliana en Nerja met een seizoenskalender, bevestigde data voor 2026 en eerlijk advies over drukte, parkeren en programma’s.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Festivaler i Frigiliana & Nerja | AMARA-guide',
      description:
        'Planera festivaler i Frigiliana och Nerja med säsongskalender, bekräftade datum för 2026 och råd om trängsel, parkering och program.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve every date qualification, caveat and planning detail
 * while using native guest-facing language for each market.
 */
export const frigilianaFestivalsContent: Record<
  AmaraLanguage,
  FrigilianaFestivalsPageCopy
> = {
  en: {
    cardLabels: {
      timing: 'When',
      place: 'Where',
      dateStatus: 'Date status',
      officialInformation: 'Official information',
      amaraNote: 'AMARA planning note'
    },
    footerHighlights: {
      festivals: 'Festivals & traditions',
      restaurants: 'Restaurants & local food',
      beaches: 'Beaches & coast'
    },
    hero: {
      kicker: 'Festivals & local traditions',
      title: 'Festivals in Frigiliana & Nerja — a year shaped by tradition',
      paragraphs: [
        'The Axarquía changes rhythm throughout the year: quiet village streets fill with processions, pilgrims cross Nerja in decorated carts, and summer nights move to the beach or Frigiliana’s historic quarter.',
        'This guide is designed to help you choose a travel period and understand the atmosphere before you go. It combines recurring traditions with a small number of dates officially confirmed for 2026.',
        'Exact routes, times and programmes can change, even when a celebration has a traditional feast day. Treat the calendar as a planning map and check the linked official information shortly before your visit.'
      ],
      imageAlt:
        'Whitewashed Frigiliana above the hills and Mediterranean coast'
    },
    sectionNav: {
      choose: 'Choose the mood',
      calendar: 'Year at a glance',
      experiences: 'Signature events',
      planning: 'Plan well'
    },
    overview: {
      title: 'Start with the kind of day you want',
      intro:
        'A village saint’s day, a solemn procession and a major summer festival are very different experiences. Choose by atmosphere first, then use the date status to plan with the right level of certainty.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Village traditions',
          text:
            'Frigiliana’s smaller celebrations feel close to local life. Expect decorated streets, religious traditions and programmes that may be published only shortly beforehand.'
        },
        {
          title: 'Processions & pilgrimages',
          text:
            'Semana Santa and San Isidro are visually memorable but affect traffic and access. They reward an early start and a flexible plan.'
        },
        {
          title: 'Summer nights',
          text:
            'San Juan, coastal celebrations and open-air music bring energy and late finishes. Beaches and central streets can be exceptionally busy.'
        },
        {
          title: 'Festival weekends',
          text:
            'The Three Cultures Festival transforms Frigiliana on a much larger scale. It is worth planning accommodation, transport and dinner well ahead.'
        }
      ]
    },
    calendar: {
      title: 'The festival year at a glance',
      intro:
        'Traditional feast days are useful anchors, but the public programme around them is not automatically fixed. “Confirmed for 2026” refers only to information already published by the relevant council.',
      seasons: [
        {
          id: 'january',
          title: 'January | Saints and new beginnings',
          intro:
            'The year opens with family celebrations and some of the area’s oldest local traditions.',
          events: [
            {
              name: 'Cabalgata de Reyes Magos',
              timing: '5 January',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Traditional annual date',
              summary:
                'The Three Kings arrive in evening parades for families. Routes, start times and the scale of each procession are announced locally and can change.'
            },
            {
              name: 'San Sebastián',
              timing: 'Around 20 January',
              place: 'Frigiliana',
              dateStatus: 'Programme varies by year',
              summary:
                'Frigiliana honours San Sebastián with a local religious and community celebration. Procession details and accompanying activities depend on the annual programme.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'San Antón',
              timing: 'Around 16–17 January',
              place: 'Maro',
              dateStatus: 'Traditional dates; programme varies',
              summary:
                'Maro’s celebration combines devotion to San Antón with street life and popular traditions. Check the current Nerja programme before travelling.',
              officialHref: officialLinks.nerjaCouncil
            }
          ]
        },
        {
          id: 'spring',
          title: 'February–April | Costumes, processions and local produce',
          intro:
            'Spring dates move with the calendar. Carnival is playful; Semana Santa is ceremonial and should be approached with respect.',
          events: [
            {
              name: 'Carnival',
              timing: 'February or March',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Date changes each year',
              summary:
                'Costumes, parades and stage events bring a lively, family-oriented atmosphere. Each town publishes its own dates and route.'
            },
            {
              name: 'Semana Santa',
              timing: 'March or April',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Dates follow Easter',
              summary:
                'Religious brotherhoods carry images through streets filled with incense, music and spectators. Processions can close roads and alter dinner and transport plans.'
            },
            {
              name: 'Día de la Miel de Caña',
              timing: 'Usually in spring',
              place: 'Frigiliana',
              dateStatus: 'Date and programme vary',
              summary:
                'A local celebration centred on Frigiliana’s sugar-cane honey tradition, with activities and tastings shaped by the year’s official programme.',
              officialHref: officialLinks.frigilianaTraditions
            }
          ]
        },
        {
          id: 'may-june',
          title: 'May–June | Flowers, pilgrimage and midsummer',
          intro:
            'This is one of the richest periods for traditional dress, decorated streets and celebrations that move through public space.',
          events: [
            {
              name: 'Cruces de Mayo',
              timing: 'Around 3 May',
              place: 'Frigiliana',
              dateStatus: 'Traditional period; programme varies',
              summary:
                'Flower-covered crosses appear around the village, accompanied by food, music and neighbourhood hospitality. Locations and activities vary.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Romería de San Isidro',
              timing: '15 May',
              place: 'Nerja to the Nerja Cave grounds',
              dateStatus: 'Confirmed for 2026',
              summary:
                'After the morning ceremonies, decorated carts, horses, musicians and people in traditional dress travel from the Balcón de Europa towards the cave grounds.',
              officialHref: officialLinks.sanIsidro2026
            },
            {
              name: 'Feria de San Antonio',
              timing: 'Around 13 June',
              place: 'Frigiliana',
              dateStatus: 'Traditional period; programme varies',
              summary:
                'Frigiliana’s fair brings concerts, attractions and community events over several days. The exact schedule and traffic arrangements change annually.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Noche de San Juan',
              timing: 'Night of 23 June',
              place: 'Burriana Beach, Nerja',
              dateStatus: 'Confirmed for 2026',
              summary:
                'A late beach celebration with music, the traditional burning of the Júa, fireworks and midnight rituals by the sea. Local rules for fires, camping and waste still apply.',
              officialHref: officialLinks.sanJuan2026
            }
          ]
        },
        {
          id: 'summer',
          title: 'July–August | The coast, concerts and Frigiliana’s biggest weekend',
          intro:
            'Summer events are atmospheric and often crowded. Heat, late finishes and limited parking are part of the practical picture.',
          events: [
            {
              name: 'Virgen del Carmen',
              timing: 'Around 16 July',
              place: 'Nerja',
              dateStatus: 'Traditional date; programme varies',
              summary:
                'The patron saint of seafarers is honoured with a maritime procession and celebrations by the coast. Viewing areas become busy well before the procession.'
            },
            {
              name: 'Nerja Cave music programme',
              timing: 'Summer',
              place: 'Nerja Cave area',
              dateStatus: 'Programme and tickets vary',
              summary:
                'Concerts and cultural performances are scheduled separately each season. Check the official programme, venue and ticket conditions before booking.',
              officialHref: officialLinks.cuevaDeNerja
            },
            {
              name: 'Fiesta Blanca',
              timing: 'Usually in August',
              place: 'Nerja coast',
              dateStatus: 'Not a fixed annual date',
              summary:
                'A high-energy open-air party associated with white clothing, DJs and a late finish. Do not rely on a historic date until the council publishes the current programme.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Festival Frigiliana 3 Culturas',
              timing: '27–30 August 2026',
              place: 'Frigiliana historic quarter',
              dateStatus: 'Confirmed for 2026',
              summary:
                'Four days of music, street culture, a medieval market and food traditions transform the village. The dates are confirmed; individual programme details are published separately.',
              officialHref: officialLinks.threeCultures2026
            }
          ]
        },
        {
          id: 'autumn-winter',
          title: 'September–December | Fairs and the close of the year',
          intro:
            'The pace softens after August, although local fairs can still fill streets and change transport for several days.',
          events: [
            {
              name: 'Feria de las Maravillas',
              timing: 'Around early September',
              place: 'Maro',
              dateStatus: 'Date and programme vary',
              summary:
                'Maro’s local fair combines concerts, attractions and community traditions. Check the year’s exact dates with Nerja council.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Feria de Nerja',
              timing: 'Usually in October',
              place: 'Nerja',
              dateStatus: 'Dates change each year',
              summary:
                'One of Nerja’s largest annual celebrations, with daytime and evening activity across several days. Traffic, parking and noise patterns change noticeably.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Christmas and New Year',
              timing: 'December–1 January',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Programme varies by town',
              summary:
                'Lights, concerts and public gatherings mark the festive season. New Year’s Eve arrangements should be checked locally rather than assumed.'
            }
          ]
        }
      ]
    },
    experiences: {
      title: 'Four celebrations worth planning around',
      intro:
        'These events are more than calendar entries. Each changes the use of streets, transport and public space, so the practical context matters as much as the spectacle.',
      items: [
        {
          title: 'Festival Frigiliana 3 Culturas',
          timing: '27–30 August 2026',
          place: 'Frigiliana historic quarter',
          dateStatus: 'Dates officially confirmed',
          description:
            'Frigiliana’s largest cultural weekend brings together music, a medieval market, street performances and food traditions in the old town. The village feels completely different from an ordinary summer evening.',
          planningNote:
            'Arrive well before the evening peak, wear shoes suited to steep cobbled streets and do not count on parking close to the historic centre. Confirm individual concerts and programme times when the full schedule is released.',
          officialHref: officialLinks.threeCultures2026
        },
        {
          title: 'Semana Santa',
          timing: 'March or April',
          place: 'Frigiliana & Nerja',
          dateStatus: 'Movable religious dates',
          description:
            'Incense, bands, candlelight and slow processions create a powerful atmosphere. This is a living religious tradition, not a staged visitor event, and the tone varies from quiet anticipation to dense evening crowds.',
          planningNote:
            'Choose one procession rather than trying to follow everything. Allow extra time for road closures, avoid crossing a procession route and reserve dinner with flexibility.'
        },
        {
          title: 'Romería de San Isidro',
          timing: '15 May',
          place: 'Nerja to the Nerja Cave grounds',
          dateStatus: '2026 celebration confirmed',
          description:
            'Decorated carts, horses, traditional dress and music accompany the pilgrimage from central Nerja towards the cave grounds. It is colourful, social and one of the area’s most participatory days.',
          planningNote:
            'Expect a long, warm day and major changes to traffic. Start in Nerja if you want to see the procession depart; use the special transport arrangements if the council confirms them for your visit.',
          officialHref: officialLinks.sanIsidro2026
        },
        {
          title: 'Noche de San Juan',
          timing: 'Night of 23 June',
          place: 'Burriana Beach, Nerja',
          dateStatus: '2026 celebration confirmed',
          description:
            'Music, fireworks, the burning of the Júa and midnight rituals turn Burriana into a large communal beach celebration. The atmosphere is informal, energetic and much busier than a normal beach evening.',
          planningNote:
            'Go without expecting a quiet dinner or easy beachfront parking. Follow the current municipal rules for fires, camping and rubbish, and arrange the return journey before the late-night peak.',
          officialHref: officialLinks.sanJuan2026
        }
      ]
    },
    planning: {
      title: 'Plan the celebration without losing the holiday',
      intro:
        'A little preparation makes these days much easier. Programmes often appear close to the event, while road access and parking can change for rehearsals, processions and evening peaks.',
      items: [
        {
          title: 'Check the current programme',
          text:
            'Use council or organiser pages for the exact day, route and start time. Social posts and old calendars often remain visible after a programme has changed.'
        },
        {
          title: 'Treat parking as part of the plan',
          text:
            'For major Frigiliana events, park outside the historic centre and expect to walk uphill. In Nerja, choose a meeting point away from the busiest beach or procession route.'
        },
        {
          title: 'Book only what needs booking',
          text:
            'Many street celebrations and processions are free. Concerts, seated performances and popular restaurants may require tickets or reservations; verify the operator’s conditions.'
        },
        {
          title: 'Leave room for local rhythm',
          text:
            'Do not turn the day into a checklist. One procession, one concert or a few hours at the festival is often enough, especially in summer heat or with young children.'
        }
      ],
      note:
        'Dates marked as confirmed refer to information available in July 2026. Weather, safety measures and municipal decisions can still alter routes, times or access, so check again shortly before setting out.'
    },
    combine: {
      title: 'Build a balanced day around the event',
      intro:
        'The best festival days often include a quieter counterpoint: a relaxed lunch before the crowds or the sea before an evening programme begins.',
      items: [
        {
          title: 'Choose dinner before the streets fill',
          text:
            'Use our restaurant guide to find a village terrace, a special dinner in Nerja or an easy meal away from the busiest event zone.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        },
        {
          title: 'Start with a few hours by the sea',
          text:
            'For summer celebrations, a calm morning at the coast can make the late finish feel much easier. Choose the beach for the conditions you prefer.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        }
      ]
    },
    closing: {
      title: 'A calm base between the celebrations',
      lead:
        'Stay close enough to join the atmosphere, with a quieter place to return to when the music and crowds are over.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View apartments'
    }
  },
  de: {
    cardLabels: {
      timing: 'Wann',
      place: 'Wo',
      dateStatus: 'Terminstatus',
      officialInformation: 'Offizielle Informationen',
      amaraNote: 'AMARA Planungshinweis'
    },
    footerHighlights: {
      festivals: 'Feste & Traditionen',
      restaurants: 'Restaurants & regionale Küche',
      beaches: 'Strände & Küste'
    },
    hero: {
      kicker: 'Feste & gelebte Traditionen',
      title:
        'Feste in Frigiliana & Nerja — ein Jahr im Rhythmus der Tradition',
      paragraphs: [
        'Im Laufe des Jahres verändert die Axarquía immer wieder ihren Rhythmus: Ruhige Dorfgassen füllen sich mit Prozessionen, geschmückte Wagen ziehen durch Nerja und in den Sommernächten verlagert sich das Leben an den Strand oder in Frigilianas Altstadt.',
        'Dieser Guide hilft euch dabei, eine passende Reisezeit zu wählen und die Stimmung vorab einzuschätzen. Er verbindet wiederkehrende Traditionen mit einigen wenigen Terminen, die für 2026 bereits offiziell bestätigt sind.',
        'Genaue Routen, Uhrzeiten und Programme können sich auch bei Festen mit traditionellem Feiertag ändern. Nutzt den Kalender als Planungshilfe und prüft kurz vor eurem Besuch noch einmal die verlinkten offiziellen Informationen.'
      ],
      imageAlt:
        'Das weiße Dorf Frigiliana oberhalb der Hügel und der Mittelmeerküste'
    },
    sectionNav: {
      choose: 'Die passende Stimmung',
      calendar: 'Das Jahr im Überblick',
      experiences: 'Besondere Feste',
      planning: 'Gut planen'
    },
    overview: {
      title: 'Beginnt mit dem Tag, den ihr erleben möchtet',
      intro:
        'Ein Heiligenfest im Dorf, eine feierliche Prozession und ein großes Sommerfestival fühlen sich völlig unterschiedlich an. Entscheidet zuerst nach Atmosphäre und nutzt anschließend den Terminstatus für eine realistische Planung.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'Dorftraditionen',
          text:
            'Die kleineren Feste in Frigiliana sind eng mit dem örtlichen Leben verbunden. Rechnet mit geschmückten Gassen, religiösen Bräuchen und Programmen, die manchmal erst kurz vorher erscheinen.'
        },
        {
          title: 'Prozessionen & Wallfahrten',
          text:
            'Semana Santa und San Isidro sind eindrucksvoll, beeinflussen aber Verkehr und Zufahrten. Ein früher Start und ein flexibler Tagesplan zahlen sich aus.'
        },
        {
          title: 'Sommernächte',
          text:
            'San Juan, Feste an der Küste und Open-Air-Musik bringen viel Energie und späte Nächte. Strände und zentrale Straßen können außergewöhnlich voll werden.'
        },
        {
          title: 'Festivalwochenenden',
          text:
            'Das Festival der drei Kulturen verwandelt Frigiliana in deutlich größerem Maßstab. Unterkunft, Anreise und Abendessen solltet ihr frühzeitig planen.'
        }
      ]
    },
    calendar: {
      title: 'Das Festjahr im Überblick',
      intro:
        'Traditionelle Feiertage sind gute Orientierungspunkte, das öffentliche Rahmenprogramm ist jedoch nicht automatisch jedes Jahr gleich. „Für 2026 bestätigt“ bezieht sich ausschließlich auf bereits veröffentlichte Angaben der zuständigen Gemeinde.',
      seasons: [
        {
          id: 'january',
          title: 'Januar | Heiligenfeste und ein neuer Anfang',
          intro:
            'Das Jahr beginnt mit Familienfesten und einigen der ältesten örtlichen Traditionen.',
          events: [
            {
              name: 'Cabalgata de Reyes Magos',
              timing: '5. Januar',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Traditioneller jährlicher Termin',
              summary:
                'Die Heiligen Drei Könige ziehen am Abend in familienfreundlichen Umzügen ein. Route, Beginn und Umfang werden vor Ort angekündigt und können sich ändern.'
            },
            {
              name: 'San Sebastián',
              timing: 'Um den 20. Januar',
              place: 'Frigiliana',
              dateStatus: 'Programm wechselt jährlich',
              summary:
                'Frigiliana ehrt San Sebastián mit einem religiösen und gemeinschaftlichen Fest. Ablauf der Prozession und Begleitveranstaltungen richten sich nach dem jeweiligen Jahresprogramm.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'San Antón',
              timing: 'Um den 16.–17. Januar',
              place: 'Maro',
              dateStatus: 'Traditionelle Tage; Programm variabel',
              summary:
                'Maros Fest verbindet die Verehrung des San Antón mit Leben auf den Straßen und volkstümlichen Bräuchen. Prüft vor der Fahrt das aktuelle Programm der Gemeinde Nerja.',
              officialHref: officialLinks.nerjaCouncil
            }
          ]
        },
        {
          id: 'spring',
          title: 'Februar–April | Kostüme, Prozessionen und regionale Produkte',
          intro:
            'Die Frühlingstermine bewegen sich mit dem Kalender. Der Karneval ist verspielt, die Semana Santa feierlich und sollte respektvoll erlebt werden.',
          events: [
            {
              name: 'Karneval',
              timing: 'Februar oder März',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Termin ändert sich jährlich',
              summary:
                'Kostüme, Umzüge und Bühnenprogramme sorgen für eine lebhafte, familienfreundliche Stimmung. Beide Orte veröffentlichen ihre eigenen Termine und Routen.'
            },
            {
              name: 'Semana Santa',
              timing: 'März oder April',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Termine richten sich nach Ostern',
              summary:
                'Bruderschaften tragen Heiligenfiguren durch Straßen voller Weihrauch, Musik und Zuschauer. Prozessionen können Straßen sperren und Pläne für Abendessen oder Anreise verändern.'
            },
            {
              name: 'Día de la Miel de Caña',
              timing: 'Meist im Frühjahr',
              place: 'Frigiliana',
              dateStatus: 'Termin und Programm variieren',
              summary:
                'Ein örtliches Fest rund um Frigilianas Tradition des Zuckerrohrsirups, dessen Aktivitäten und Verkostungen vom offiziellen Jahresprogramm abhängen.',
              officialHref: officialLinks.frigilianaTraditions
            }
          ]
        },
        {
          id: 'may-june',
          title: 'Mai–Juni | Blumen, Wallfahrt und Mittsommer',
          intro:
            'Diese Zeit ist besonders reich an Trachten, geschmückten Straßen und Festen, die sich durch den öffentlichen Raum bewegen.',
          events: [
            {
              name: 'Cruces de Mayo',
              timing: 'Um den 3. Mai',
              place: 'Frigiliana',
              dateStatus: 'Traditionelle Zeit; Programm variabel',
              summary:
                'Im Dorf erscheinen mit Blumen geschmückte Kreuze, begleitet von Essen, Musik und nachbarschaftlicher Gastfreundschaft. Orte und Aktivitäten wechseln.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Romería de San Isidro',
              timing: '15. Mai',
              place: 'Von Nerja zum Gelände der Höhle von Nerja',
              dateStatus: 'Für 2026 bestätigt',
              summary:
                'Nach den morgendlichen Feierlichkeiten ziehen geschmückte Wagen, Pferde, Musiker und Menschen in Tracht vom Balcón de Europa in Richtung Höhlengelände.',
              officialHref: officialLinks.sanIsidro2026
            },
            {
              name: 'Feria de San Antonio',
              timing: 'Um den 13. Juni',
              place: 'Frigiliana',
              dateStatus: 'Traditionelle Zeit; Programm variabel',
              summary:
                'Frigilianas Feria bringt über mehrere Tage Konzerte, Fahrgeschäfte und gemeinschaftliche Veranstaltungen ins Dorf. Zeitplan und Verkehrsführung ändern sich jährlich.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Noche de San Juan',
              timing: 'Nacht zum 24. Juni',
              place: 'Playa Burriana, Nerja',
              dateStatus: 'Für 2026 bestätigt',
              summary:
                'Ein spätes Strandfest mit Musik, der traditionellen Verbrennung des Júa, Feuerwerk und Mitternachtsritualen am Meer. Die örtlichen Regeln zu Feuer, Camping und Abfall gelten weiterhin.',
              officialHref: officialLinks.sanJuan2026
            }
          ]
        },
        {
          id: 'summer',
          title:
            'Juli–August | Küste, Konzerte und Frigilianas größtes Wochenende',
          intro:
            'Sommerveranstaltungen sind stimmungsvoll und häufig sehr voll. Hitze, späte Endzeiten und knappe Parkplätze gehören zur praktischen Realität.',
          events: [
            {
              name: 'Virgen del Carmen',
              timing: 'Um den 16. Juli',
              place: 'Nerja',
              dateStatus: 'Traditioneller Termin; Programm variabel',
              summary:
                'Die Schutzheilige der Seeleute wird mit einer maritimen Prozession und Festlichkeiten an der Küste geehrt. Gute Aussichtspunkte füllen sich lange vor Beginn.'
            },
            {
              name: 'Musikprogramm der Höhle von Nerja',
              timing: 'Im Sommer',
              place: 'Gelände der Höhle von Nerja',
              dateStatus: 'Programm und Tickets variieren',
              summary:
                'Konzerte und Kulturveranstaltungen werden jede Saison separat geplant. Prüft vor der Buchung das offizielle Programm, den Spielort und die Ticketbedingungen.',
              officialHref: officialLinks.cuevaDeNerja
            },
            {
              name: 'Fiesta Blanca',
              timing: 'Meist im August',
              place: 'Küste von Nerja',
              dateStatus: 'Kein dauerhaft fester Termin',
              summary:
                'Eine energiegeladene Open-Air-Party mit weißer Kleidung, DJs und spätem Ende. Verlasst euch nicht auf einen früheren Termin, bevor die Gemeinde das aktuelle Programm veröffentlicht.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Festival Frigiliana 3 Culturas',
              timing: '27.–30. August 2026',
              place: 'Altstadt von Frigiliana',
              dateStatus: 'Für 2026 bestätigt',
              summary:
                'Vier Tage mit Musik, Straßenkultur, Mittelaltermarkt und kulinarischen Traditionen verwandeln das Dorf. Die Termine stehen fest; einzelne Programmpunkte werden separat veröffentlicht.',
              officialHref: officialLinks.threeCultures2026
            }
          ]
        },
        {
          id: 'autumn-winter',
          title: 'September–Dezember | Ferias und Jahresausklang',
          intro:
            'Nach August wird das Tempo ruhiger, örtliche Ferias können Straßen und Verkehr aber weiterhin für mehrere Tage verändern.',
          events: [
            {
              name: 'Feria de las Maravillas',
              timing: 'Etwa Anfang September',
              place: 'Maro',
              dateStatus: 'Termin und Programm variieren',
              summary:
                'Maros örtliche Feria verbindet Konzerte, Fahrgeschäfte und gemeinschaftliche Traditionen. Prüft die genauen Jahrestermine bei der Gemeinde Nerja.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Feria de Nerja',
              timing: 'Meist im Oktober',
              place: 'Nerja',
              dateStatus: 'Termine ändern sich jährlich',
              summary:
                'Eines der größten jährlichen Feste Nerjas mit Tages- und Abendprogramm über mehrere Tage. Verkehr, Parkmöglichkeiten und Geräuschpegel verändern sich deutlich.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Weihnachten und Neujahr',
              timing: 'Dezember–1. Januar',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Programm variiert je nach Ort',
              summary:
                'Beleuchtung, Konzerte und öffentliche Zusammenkünfte prägen die Festzeit. Die konkreten Pläne für Silvester solltet ihr vor Ort prüfen und nicht voraussetzen.'
            }
          ]
        }
      ]
    },
    experiences: {
      title: 'Vier Feste, um die sich eine Reise planen lässt',
      intro:
        'Diese Ereignisse sind mehr als Kalendereinträge. Sie verändern Straßen, Verkehr und öffentliche Räume — deshalb ist der praktische Kontext genauso wichtig wie das Erlebnis.',
      items: [
        {
          title: 'Festival Frigiliana 3 Culturas',
          timing: '27.–30. August 2026',
          place: 'Altstadt von Frigiliana',
          dateStatus: 'Termine offiziell bestätigt',
          description:
            'Frigilianas größtes Kulturwochenende verbindet Musik, Mittelaltermarkt, Straßenkunst und kulinarische Traditionen in der Altstadt. Das Dorf fühlt sich dann völlig anders an als an einem gewöhnlichen Sommerabend.',
          planningNote:
            'Kommt deutlich vor dem abendlichen Höhepunkt, tragt Schuhe für steile Pflastergassen und rechnet nicht mit einem Parkplatz nahe der Altstadt. Prüft einzelne Konzerte und Uhrzeiten, sobald das vollständige Programm erscheint.',
          officialHref: officialLinks.threeCultures2026
        },
        {
          title: 'Semana Santa',
          timing: 'März oder April',
          place: 'Frigiliana & Nerja',
          dateStatus: 'Bewegliche religiöse Termine',
          description:
            'Weihrauch, Musikkapellen, Kerzenlicht und langsame Prozessionen schaffen eine intensive Atmosphäre. Dies ist eine lebendige religiöse Tradition und keine inszenierte Besucherattraktion; die Stimmung reicht von stiller Erwartung bis zu dichtem abendlichem Andrang.',
          planningNote:
            'Wählt eine Prozession aus, statt alles verfolgen zu wollen. Plant zusätzliche Zeit für Straßensperren ein, kreuzt keine Prozessionsroute und reserviert das Abendessen mit etwas Flexibilität.'
        },
        {
          title: 'Romería de San Isidro',
          timing: '15. Mai',
          place: 'Von Nerja zum Gelände der Höhle von Nerja',
          dateStatus: 'Feier 2026 bestätigt',
          description:
            'Geschmückte Wagen, Pferde, Trachten und Musik begleiten die Wallfahrt vom Zentrum Nerjas zum Höhlengelände. Der Tag ist farbenfroh, gesellig und eines der Feste mit der stärksten Beteiligung in der Region.',
          planningNote:
            'Rechnet mit einem langen, warmen Tag und deutlichen Verkehrsänderungen. Beginnt in Nerja, wenn ihr den Start des Zuges sehen möchtet, und nutzt Sonderverbindungen, falls die Gemeinde sie für euren Besuch bestätigt.',
          officialHref: officialLinks.sanIsidro2026
        },
        {
          title: 'Noche de San Juan',
          timing: 'Nacht zum 24. Juni',
          place: 'Playa Burriana, Nerja',
          dateStatus: 'Feier 2026 bestätigt',
          description:
            'Musik, Feuerwerk, die Verbrennung des Júa und Rituale um Mitternacht verwandeln Burriana in ein großes gemeinschaftliches Strandfest. Die Atmosphäre ist ungezwungen, energiegeladen und viel voller als an einem normalen Strandabend.',
          planningNote:
            'Erwartet weder ein ruhiges Abendessen noch einfache Parkmöglichkeiten direkt am Strand. Beachtet die aktuellen Gemeinderegeln zu Feuer, Camping und Müll und organisiert die Rückfahrt vor dem nächtlichen Höhepunkt.',
          officialHref: officialLinks.sanJuan2026
        }
      ]
    },
    planning: {
      title: 'Das Fest erleben, ohne den Urlaub zu verplanen',
      intro:
        'Mit etwas Vorbereitung werden diese Tage deutlich entspannter. Programme erscheinen oft erst kurz vor dem Fest, während Zufahrten und Parkmöglichkeiten schon für Proben, Prozessionen und Abendspitzen verändert werden können.',
      items: [
        {
          title: 'Das aktuelle Programm prüfen',
          text:
            'Nutzt Gemeinde- oder Veranstalterseiten für Tag, Route und Beginn. Beiträge in sozialen Medien und alte Kalender bleiben oft sichtbar, obwohl sich das Programm geändert hat.'
        },
        {
          title: 'Parken als Teil der Planung verstehen',
          text:
            'Bei großen Festen in Frigiliana parkt ihr am besten außerhalb der Altstadt und rechnet mit einem Weg bergauf. In Nerja hilft ein Treffpunkt abseits des belebtesten Strandes oder der Prozessionsroute.'
        },
        {
          title: 'Nur buchen, was wirklich gebucht werden muss',
          text:
            'Viele Straßenfeste und Prozessionen sind kostenlos. Konzerte, Veranstaltungen mit Sitzplätzen und beliebte Restaurants können Tickets oder Reservierungen verlangen; prüft die Bedingungen direkt beim Anbieter.'
        },
        {
          title: 'Platz für den örtlichen Rhythmus lassen',
          text:
            'Macht aus dem Tag keine Checkliste. Eine Prozession, ein Konzert oder einige Stunden auf dem Festival reichen oft aus — besonders bei Sommerhitze oder mit kleinen Kindern.'
        }
      ],
      note:
        'Als bestätigt gekennzeichnete Termine beziehen sich auf den Informationsstand Juli 2026. Wetter, Sicherheitsmaßnahmen und Gemeindeentscheidungen können Routen, Zeiten oder Zufahrten dennoch verändern; prüft deshalb kurz vor dem Aufbruch erneut.'
    },
    combine: {
      title: 'Ein ausgewogener Tag rund um das Fest',
      intro:
        'Die schönsten Festtage haben oft einen ruhigen Gegenpol: ein entspanntes Mittagessen vor dem Andrang oder ein paar Stunden am Meer, bevor das Abendprogramm beginnt.',
      items: [
        {
          title: 'Das Abendessen planen, bevor sich die Gassen füllen',
          text:
            'Unser Restaurantguide hilft euch bei der Wahl zwischen Dorfplatz, besonderem Abend in Nerja und einer unkomplizierten Mahlzeit abseits der größten Menschenmenge.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurantguide'
        },
        {
          title: 'Mit einigen Stunden am Meer beginnen',
          text:
            'Bei Sommerfesten macht ein ruhiger Vormittag an der Küste den späten Abend deutlich leichter. Wählt den Strand passend zu euren gewünschten Bedingungen.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strandguide'
        }
      ]
    },
    closing: {
      title: 'Ein ruhiger Rückzugsort zwischen den Festen',
      lead:
        'Nah genug, um die besondere Stimmung mitzuerleben — und ruhig genug, um nach Musik und Menschenmengen wieder anzukommen.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
    }
  },
  es: {
    cardLabels: {
      timing: 'Cuándo',
      place: 'Dónde',
      dateStatus: 'Estado de la fecha',
      officialInformation: 'Información oficial',
      amaraNote: 'Consejo AMARA para organizaros'
    },
    footerHighlights: {
      festivals: 'Fiestas y tradiciones',
      restaurants: 'Restaurantes y cocina local',
      beaches: 'Playas y costa'
    },
    hero: {
      kicker: 'Fiestas y tradiciones vivas',
      title:
        'Fiestas en Frigiliana y Nerja — un año marcado por la tradición',
      paragraphs: [
        'La Axarquía cambia de ritmo a lo largo del año: las calles tranquilas se llenan de procesiones, las carretas engalanadas cruzan Nerja y las noches de verano se trasladan a la playa o al casco histórico de Frigiliana.',
        'Esta guía os ayudará a elegir época de viaje y a entender el ambiente antes de salir. Reúne tradiciones recurrentes con un pequeño número de fechas ya confirmadas oficialmente para 2026.',
        'Los recorridos, horarios y programas pueden cambiar incluso cuando la fiesta está ligada a un día tradicional. Usad el calendario como mapa de planificación y consultad la información oficial enlazada poco antes de vuestra visita.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea'
    },
    sectionNav: {
      choose: 'Elegid el ambiente',
      calendar: 'El año de un vistazo',
      experiences: 'Fiestas imprescindibles',
      planning: 'Organizaros bien'
    },
    overview: {
      title: 'Empezad por el tipo de día que queréis vivir',
      intro:
        'Una fiesta patronal de pueblo, una procesión solemne y un gran festival de verano son experiencias muy distintas. Elegid primero por el ambiente y utilizad después el estado de la fecha para organizaros con el grado de certeza adecuado.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'Tradiciones de pueblo',
          text:
            'Las celebraciones pequeñas de Frigiliana están muy ligadas a la vida local. Encontraréis calles engalanadas, costumbres religiosas y programas que a veces se publican con poca antelación.'
        },
        {
          title: 'Procesiones y romerías',
          text:
            'La Semana Santa y San Isidro son muy vistosos, pero modifican el tráfico y los accesos. Conviene empezar temprano y mantener un plan flexible.'
        },
        {
          title: 'Noches de verano',
          text:
            'San Juan, las celebraciones de la costa y la música al aire libre aportan energía y terminan tarde. Las playas y las calles céntricas pueden llenarse muchísimo.'
        },
        {
          title: 'Fines de semana de festival',
          text:
            'El Festival de las Tres Culturas transforma Frigiliana a gran escala. Merece la pena prever con tiempo el alojamiento, el transporte y la cena.'
        }
      ]
    },
    calendar: {
      title: 'El año festivo de un vistazo',
      intro:
        'Los días tradicionales sirven como referencia, pero el programa público que los acompaña no es necesariamente fijo. “Confirmada para 2026” se refiere solo a información ya publicada por el ayuntamiento correspondiente.',
      seasons: [
        {
          id: 'january',
          title: 'Enero | Santos y nuevos comienzos',
          intro:
            'El año empieza con celebraciones familiares y algunas de las tradiciones locales más antiguas.',
          events: [
            {
              name: 'Cabalgata de Reyes Magos',
              timing: '5 de enero',
              place: 'Frigiliana y Nerja',
              dateStatus: 'Fecha tradicional anual',
              summary:
                'Los Reyes Magos llegan al atardecer en cabalgatas pensadas para las familias. El recorrido, la hora de salida y la envergadura se anuncian localmente y pueden cambiar.'
            },
            {
              name: 'San Sebastián',
              timing: 'Alrededor del 20 de enero',
              place: 'Frigiliana',
              dateStatus: 'El programa varía cada año',
              summary:
                'Frigiliana honra a San Sebastián con una celebración religiosa y vecinal. Los detalles de la procesión y las actividades paralelas dependen del programa anual.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'San Antón',
              timing: 'En torno al 16–17 de enero',
              place: 'Maro',
              dateStatus: 'Días tradicionales; programa variable',
              summary:
                'La fiesta de Maro une la devoción a San Antón con el ambiente en la calle y las tradiciones populares. Consultad el programa actual de Nerja antes de desplazaros.',
              officialHref: officialLinks.nerjaCouncil
            }
          ]
        },
        {
          id: 'spring',
          title: 'Febrero–abril | Disfraces, procesiones y producto local',
          intro:
            'Las fechas de primavera se mueven con el calendario. El Carnaval es desenfadado; la Semana Santa es ceremonial y conviene vivirla con respeto.',
          events: [
            {
              name: 'Carnaval',
              timing: 'Febrero o marzo',
              place: 'Frigiliana y Nerja',
              dateStatus: 'La fecha cambia cada año',
              summary:
                'Disfraces, pasacalles y actuaciones crean un ambiente animado y familiar. Cada municipio publica sus propias fechas y recorrido.'
            },
            {
              name: 'Semana Santa',
              timing: 'Marzo o abril',
              place: 'Frigiliana y Nerja',
              dateStatus: 'Las fechas dependen de la Semana Santa',
              summary:
                'Las cofradías llevan sus imágenes por calles llenas de incienso, música y público. Las procesiones pueden cortar vías y alterar los planes de cena y transporte.'
            },
            {
              name: 'Día de la Miel de Caña',
              timing: 'Habitualmente en primavera',
              place: 'Frigiliana',
              dateStatus: 'La fecha y el programa varían',
              summary:
                'Una celebración local dedicada a la tradición de la miel de caña de Frigiliana, con actividades y degustaciones que dependen del programa oficial de cada edición.',
              officialHref: officialLinks.frigilianaTraditions
            }
          ]
        },
        {
          id: 'may-june',
          title: 'Mayo–junio | Flores, romería y comienzo del verano',
          intro:
            'Es una de las épocas más ricas en trajes tradicionales, calles adornadas y celebraciones que ocupan el espacio público.',
          events: [
            {
              name: 'Cruces de Mayo',
              timing: 'Alrededor del 3 de mayo',
              place: 'Frigiliana',
              dateStatus: 'Periodo tradicional; programa variable',
              summary:
                'Por el pueblo aparecen cruces cubiertas de flores, acompañadas de comida, música y hospitalidad vecinal. Los puntos y las actividades varían.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Romería de San Isidro',
              timing: '15 de mayo',
              place: 'Desde Nerja hasta el recinto de la Cueva de Nerja',
              dateStatus: 'Confirmada para 2026',
              summary:
                'Tras los actos de la mañana, carretas engalanadas, caballos, músicos y romeros con trajes tradicionales parten del Balcón de Europa hacia el recinto de la Cueva.',
              officialHref: officialLinks.sanIsidro2026
            },
            {
              name: 'Feria de San Antonio',
              timing: 'Alrededor del 13 de junio',
              place: 'Frigiliana',
              dateStatus: 'Periodo tradicional; programa variable',
              summary:
                'La feria de Frigiliana reúne durante varios días conciertos, atracciones y actividades vecinales. El horario y la regulación del tráfico cambian cada año.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Noche de San Juan',
              timing: 'Noche del 23 de junio',
              place: 'Playa de Burriana, Nerja',
              dateStatus: 'Confirmada para 2026',
              summary:
                'Una celebración nocturna con música, la tradicional quema del Júa, fuegos artificiales y ritos de medianoche junto al mar. Siguen vigentes las normas locales sobre hogueras, acampada y residuos.',
              officialHref: officialLinks.sanJuan2026
            }
          ]
        },
        {
          id: 'summer',
          title:
            'Julio–agosto | La costa, los conciertos y el gran fin de semana de Frigiliana',
          intro:
            'Los eventos estivales tienen mucho ambiente y suelen estar concurridos. El calor, los horarios tardíos y el aparcamiento limitado forman parte de la realidad práctica.',
          events: [
            {
              name: 'Virgen del Carmen',
              timing: 'Alrededor del 16 de julio',
              place: 'Nerja',
              dateStatus: 'Fecha tradicional; programa variable',
              summary:
                'La patrona de los marineros se honra con una procesión marítima y celebraciones junto a la costa. Las zonas con buena visibilidad se llenan mucho antes de la salida.'
            },
            {
              name: 'Programación musical de la Cueva de Nerja',
              timing: 'Verano',
              place: 'Entorno de la Cueva de Nerja',
              dateStatus: 'El programa y las entradas varían',
              summary:
                'Los conciertos y espectáculos culturales se programan por separado cada temporada. Antes de reservar, comprobad el programa, el recinto y las condiciones de las entradas.',
              officialHref: officialLinks.cuevaDeNerja
            },
            {
              name: 'Fiesta Blanca',
              timing: 'Normalmente en agosto',
              place: 'Costa de Nerja',
              dateStatus: 'No tiene una fecha anual fija',
              summary:
                'Una fiesta al aire libre muy animada, asociada a la ropa blanca, los DJ y un final tardío. No deis por válida una fecha antigua hasta que el Ayuntamiento publique el programa actual.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Festival Frigiliana 3 Culturas',
              timing: '27–30 de agosto de 2026',
              place: 'Casco histórico de Frigiliana',
              dateStatus: 'Confirmado para 2026',
              summary:
                'Cuatro días de música, cultura en la calle, mercado medieval y tradiciones gastronómicas transforman el pueblo. Las fechas están confirmadas; los detalles del programa se publican aparte.',
              officialHref: officialLinks.threeCultures2026
            }
          ]
        },
        {
          id: 'autumn-winter',
          title: 'Septiembre–diciembre | Ferias y final de año',
          intro:
            'Después de agosto el ritmo baja, aunque las ferias locales todavía pueden llenar las calles y modificar el tráfico durante varios días.',
          events: [
            {
              name: 'Feria de las Maravillas',
              timing: 'Alrededor de principios de septiembre',
              place: 'Maro',
              dateStatus: 'La fecha y el programa varían',
              summary:
                'La feria local de Maro combina conciertos, atracciones y tradiciones vecinales. Consultad las fechas exactas de cada año con el Ayuntamiento de Nerja.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Feria de Nerja',
              timing: 'Normalmente en octubre',
              place: 'Nerja',
              dateStatus: 'Las fechas cambian cada año',
              summary:
                'Una de las mayores celebraciones anuales de Nerja, con actividad diurna y nocturna durante varios días. El tráfico, el aparcamiento y el nivel de ruido cambian de forma notable.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Navidad y Año Nuevo',
              timing: 'Diciembre–1 de enero',
              place: 'Frigiliana y Nerja',
              dateStatus: 'El programa varía según el municipio',
              summary:
                'La iluminación, los conciertos y los encuentros públicos marcan las fiestas. Conviene consultar localmente los actos de Nochevieja en lugar de darlos por hechos.'
            }
          ]
        }
      ]
    },
    experiences: {
      title: 'Cuatro celebraciones en torno a las que merece la pena viajar',
      intro:
        'Son mucho más que una fecha en el calendario. Modifican el uso de las calles, el transporte y el espacio público, por lo que el contexto práctico importa tanto como el espectáculo.',
      items: [
        {
          title: 'Festival Frigiliana 3 Culturas',
          timing: '27–30 de agosto de 2026',
          place: 'Casco histórico de Frigiliana',
          dateStatus: 'Fechas confirmadas oficialmente',
          description:
            'El gran fin de semana cultural de Frigiliana reúne música, mercado medieval, espectáculos callejeros y tradiciones gastronómicas en el casco antiguo. El pueblo se siente completamente distinto a una noche normal de verano.',
          planningNote:
            'Llegad bastante antes del momento de mayor afluencia, llevad calzado apropiado para las calles empedradas y empinadas y no contéis con aparcar cerca del casco histórico. Comprobad los conciertos y horarios cuando se publique el programa completo.',
          officialHref: officialLinks.threeCultures2026
        },
        {
          title: 'Semana Santa',
          timing: 'Marzo o abril',
          place: 'Frigiliana y Nerja',
          dateStatus: 'Fechas religiosas móviles',
          description:
            'El incienso, las bandas, las velas y el paso lento de las procesiones crean un ambiente muy intenso. Es una tradición religiosa viva, no un espectáculo preparado para visitantes, y puede pasar de la espera silenciosa a calles muy concurridas por la noche.',
          planningNote:
            'Elegid una procesión en vez de intentar seguirlas todas. Dejad margen para los cortes de tráfico, no crucéis el recorrido procesional y reservad la cena con flexibilidad.'
        },
        {
          title: 'Romería de San Isidro',
          timing: '15 de mayo',
          place: 'Desde Nerja hasta el recinto de la Cueva de Nerja',
          dateStatus: 'Celebración de 2026 confirmada',
          description:
            'Carretas engalanadas, caballos, trajes tradicionales y música acompañan la romería desde el centro de Nerja hasta la Cueva. Es una jornada colorida, social y una de las más participativas de la zona.',
          planningNote:
            'Contad con un día largo y caluroso y con cambios importantes de tráfico. Empezad en Nerja si queréis ver la salida y utilizad el transporte especial si el Ayuntamiento lo confirma para vuestra visita.',
          officialHref: officialLinks.sanIsidro2026
        },
        {
          title: 'Noche de San Juan',
          timing: 'Noche del 23 de junio',
          place: 'Playa de Burriana, Nerja',
          dateStatus: 'Celebración de 2026 confirmada',
          description:
            'La música, los fuegos artificiales, la quema del Júa y los ritos de medianoche convierten Burriana en una gran celebración comunitaria junto al mar. El ambiente es informal, enérgico y mucho más concurrido que una noche de playa normal.',
          planningNote:
            'No esperéis una cena tranquila ni aparcamiento fácil junto a la playa. Respetad las normas municipales vigentes sobre hogueras, acampada y residuos y organizad la vuelta antes de que llegue el momento de mayor afluencia.',
          officialHref: officialLinks.sanJuan2026
        }
      ]
    },
    planning: {
      title: 'Disfrutad la fiesta sin convertir las vacaciones en una agenda',
      intro:
        'Un poco de preparación facilita mucho estos días. Los programas suelen aparecer cerca de la fecha, mientras que los accesos y el aparcamiento pueden modificarse por ensayos, procesiones y horas punta.',
      items: [
        {
          title: 'Consultad el programa actual',
          text:
            'Usad las páginas del ayuntamiento o del organizador para confirmar día, recorrido y hora de inicio. Las publicaciones antiguas y las redes sociales pueden seguir visibles después de un cambio.'
        },
        {
          title: 'Incluid el aparcamiento en el plan',
          text:
            'Para los grandes eventos de Frigiliana, aparcad fuera del casco histórico y contad con caminar cuesta arriba. En Nerja, acordad un punto de encuentro alejado de la playa o la procesión más concurrida.'
        },
        {
          title: 'Reservad solo lo que lo requiera',
          text:
            'Muchas fiestas callejeras y procesiones son gratuitas. Los conciertos, espectáculos con asiento y restaurantes populares pueden requerir entrada o reserva; comprobad las condiciones con el operador.'
        },
        {
          title: 'Dejad espacio al ritmo local',
          text:
            'No convirtáis el día en una lista. Una procesión, un concierto o unas horas de festival suelen ser suficientes, especialmente con el calor del verano o con niños pequeños.'
        }
      ],
      note:
        'Las fechas marcadas como confirmadas corresponden a la información disponible en julio de 2026. El tiempo, las medidas de seguridad y las decisiones municipales todavía pueden modificar recorridos, horarios o accesos; volved a comprobarlos poco antes de salir.'
    },
    combine: {
      title: 'Completad la fiesta con un día equilibrado',
      intro:
        'Los mejores días festivos suelen tener un contrapunto tranquilo: una comida relajada antes de la afluencia o el mar antes de que empiece el programa nocturno.',
      items: [
        {
          title: 'Elegid la cena antes de que se llenen las calles',
          text:
            'Nuestra guía de restaurantes os ayudará a encontrar una terraza en el pueblo, una cena especial en Nerja o una opción sencilla alejada de la zona más concurrida.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        },
        {
          title: 'Empezad con unas horas junto al mar',
          text:
            'En las fiestas de verano, una mañana tranquila en la costa hace que la noche larga resulte más llevadera. Elegid la playa según las condiciones que prefiráis.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        }
      ]
    },
    closing: {
      title: 'Una base tranquila entre celebraciones',
      lead:
        'Lo bastante cerca para compartir el ambiente y con un lugar sereno al que volver cuando terminen la música y las multitudes.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver apartamentos'
    }
  },
  nl: {
    cardLabels: {
      timing: 'Wanneer',
      place: 'Waar',
      dateStatus: 'Status van de datum',
      officialInformation: 'Officiële informatie',
      amaraNote: 'AMARA-planningstip'
    },
    footerHighlights: {
      festivals: 'Feesten & tradities',
      restaurants: 'Restaurants & lokale keuken',
      beaches: 'Stranden & kust'
    },
    hero: {
      kicker: 'Feesten & levende tradities',
      title:
        'Feesten in Frigiliana & Nerja — een jaar in het ritme van traditie',
      paragraphs: [
        'De Axarquía verandert het hele jaar door van ritme: rustige dorpsstraten vullen zich met processies, versierde wagens trekken door Nerja en zomeravonden verplaatsen zich naar het strand of de oude wijk van Frigiliana.',
        'Deze gids helpt u een reisperiode te kiezen en vooraf te begrijpen welke sfeer u kunt verwachten. Terugkerende tradities worden gecombineerd met een klein aantal data dat voor 2026 officieel is bevestigd.',
        'Exacte routes, tijden en programma’s kunnen veranderen, ook als een feest aan een traditionele datum is verbonden. Gebruik de kalender als planningsoverzicht en controleer de gelinkte officiële informatie kort voor uw bezoek.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust'
    },
    sectionNav: {
      choose: 'Kies de sfeer',
      calendar: 'Het jaar in één oogopslag',
      experiences: 'Bijzondere feesten',
      planning: 'Goed plannen'
    },
    overview: {
      title: 'Begin met het soort dag dat u wilt beleven',
      intro:
        'Een dorpsfeest rond een heilige, een plechtige processie en een groot zomerfestival voelen totaal verschillend. Kies eerst de sfeer en gebruik daarna de datumstatus om met de juiste mate van zekerheid te plannen.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Dorpstradities',
          text:
            'De kleinere vieringen in Frigiliana liggen dicht bij het lokale leven. Reken op versierde straten, religieuze gebruiken en programma’s die soms pas kort van tevoren verschijnen.'
        },
        {
          title: 'Processies & bedevaarten',
          text:
            'Semana Santa en San Isidro zijn visueel indrukwekkend, maar beïnvloeden verkeer en bereikbaarheid. Vroeg beginnen en flexibel plannen loont.'
        },
        {
          title: 'Zomernachten',
          text:
            'San Juan, feesten aan de kust en openluchtmuziek brengen energie en late eindtijden. Stranden en centrale straten kunnen uitzonderlijk druk worden.'
        },
        {
          title: 'Festivalweekenden',
          text:
            'Het Festival van de Drie Culturen verandert Frigiliana op veel grotere schaal. Plan accommodatie, vervoer en het diner ruim vooraf.'
        }
      ]
    },
    calendar: {
      title: 'Het feestjaar in één oogopslag',
      intro:
        'Traditionele feestdagen zijn nuttige ankerpunten, maar het publieke programma eromheen ligt niet automatisch vast. “Bevestigd voor 2026” verwijst alleen naar informatie die al door de betrokken gemeente is gepubliceerd.',
      seasons: [
        {
          id: 'january',
          title: 'Januari | Heiligen en een nieuw begin',
          intro:
            'Het jaar begint met familiefeesten en enkele van de oudste lokale tradities.',
          events: [
            {
              name: 'Cabalgata de Reyes Magos',
              timing: '5 januari',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Traditionele jaarlijkse datum',
              summary:
                'De Drie Koningen arriveren tijdens avondoptochten voor gezinnen. Route, begintijd en omvang worden lokaal bekendgemaakt en kunnen veranderen.'
            },
            {
              name: 'San Sebastián',
              timing: 'Rond 20 januari',
              place: 'Frigiliana',
              dateStatus: 'Programma verschilt per jaar',
              summary:
                'Frigiliana eert San Sebastián met een religieuze en lokale viering. Details van de processie en extra activiteiten hangen af van het jaarprogramma.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'San Antón',
              timing: 'Rond 16–17 januari',
              place: 'Maro',
              dateStatus: 'Traditionele dagen; programma wisselt',
              summary:
                'Maro’s viering verbindt de verering van San Antón met straatleven en volkstradities. Controleer vóór vertrek het actuele programma van de gemeente Nerja.',
              officialHref: officialLinks.nerjaCouncil
            }
          ]
        },
        {
          id: 'spring',
          title: 'Februari–april | Kostuums, processies en streekproducten',
          intro:
            'De voorjaarsdata bewegen mee met de kalender. Carnaval is uitbundig; Semana Santa ceremonieel en vraagt om respect.',
          events: [
            {
              name: 'Carnaval',
              timing: 'Februari of maart',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Datum verandert ieder jaar',
              summary:
                'Kostuums, optochten en podiumprogramma’s zorgen voor een levendige familiesfeer. Beide plaatsen publiceren hun eigen data en route.'
            },
            {
              name: 'Semana Santa',
              timing: 'Maart of april',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Data volgen Pasen',
              summary:
                'Broederschappen dragen heiligenbeelden door straten met wierook, muziek en toeschouwers. Processies kunnen wegen afsluiten en plannen voor diner of vervoer beïnvloeden.'
            },
            {
              name: 'Día de la Miel de Caña',
              timing: 'Meestal in het voorjaar',
              place: 'Frigiliana',
              dateStatus: 'Datum en programma wisselen',
              summary:
                'Een lokaal feest rond Frigiliana’s traditie van suikerrietstroop, met activiteiten en proeverijen die door het officiële jaarprogramma worden bepaald.',
              officialHref: officialLinks.frigilianaTraditions
            }
          ]
        },
        {
          id: 'may-june',
          title: 'Mei–juni | Bloemen, bedevaart en midzomer',
          intro:
            'Dit is een van de rijkste periodes voor klederdracht, versierde straten en vieringen die de openbare ruimte innemen.',
          events: [
            {
              name: 'Cruces de Mayo',
              timing: 'Rond 3 mei',
              place: 'Frigiliana',
              dateStatus: 'Traditionele periode; programma wisselt',
              summary:
                'Door het dorp verschijnen met bloemen bedekte kruisen, begeleid door eten, muziek en gastvrijheid van de buurten. Locaties en activiteiten variëren.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Romería de San Isidro',
              timing: '15 mei',
              place: 'Van Nerja naar het terrein bij de Grot van Nerja',
              dateStatus: 'Bevestigd voor 2026',
              summary:
                'Na de ochtendceremonies trekken versierde wagens, paarden, muzikanten en mensen in traditionele kleding vanaf het Balcón de Europa naar het grottenterrein.',
              officialHref: officialLinks.sanIsidro2026
            },
            {
              name: 'Feria de San Antonio',
              timing: 'Rond 13 juni',
              place: 'Frigiliana',
              dateStatus: 'Traditionele periode; programma wisselt',
              summary:
                'Frigiliana’s feria brengt meerdere dagen concerten, attracties en activiteiten voor de gemeenschap. Programma en verkeersmaatregelen veranderen jaarlijks.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Noche de San Juan',
              timing: 'Nacht van 23 juni',
              place: 'Burriana-strand, Nerja',
              dateStatus: 'Bevestigd voor 2026',
              summary:
                'Een laat strandfeest met muziek, de traditionele verbranding van de Júa, vuurwerk en middernachtrituelen aan zee. Lokale regels voor vuur, kamperen en afval blijven van kracht.',
              officialHref: officialLinks.sanJuan2026
            }
          ]
        },
        {
          id: 'summer',
          title:
            'Juli–augustus | De kust, concerten en Frigiliana’s grootste weekend',
          intro:
            'Zomerevenementen zijn sfeervol en vaak druk. Hitte, late eindtijden en beperkte parkeerruimte horen bij het praktische plaatje.',
          events: [
            {
              name: 'Virgen del Carmen',
              timing: 'Rond 16 juli',
              place: 'Nerja',
              dateStatus: 'Traditionele datum; programma wisselt',
              summary:
                'De beschermheilige van zeelieden wordt geëerd met een processie op zee en vieringen aan de kust. Plekken met goed zicht worden ruim voor het vertrek druk.'
            },
            {
              name: 'Muziekprogramma bij de Grot van Nerja',
              timing: 'Zomer',
              place: 'Omgeving van de Grot van Nerja',
              dateStatus: 'Programma en tickets wisselen',
              summary:
                'Concerten en culturele voorstellingen worden elk seizoen apart gepland. Controleer vóór het boeken het officiële programma, de locatie en de ticketvoorwaarden.',
              officialHref: officialLinks.cuevaDeNerja
            },
            {
              name: 'Fiesta Blanca',
              timing: 'Meestal in augustus',
              place: 'Kust van Nerja',
              dateStatus: 'Geen vaste jaarlijkse datum',
              summary:
                'Een energiek openluchtfeest dat draait om witte kleding, dj’s en een laat einde. Vertrouw niet op een oude datum voordat de gemeente het actuele programma publiceert.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Festival Frigiliana 3 Culturas',
              timing: '27–30 augustus 2026',
              place: 'Historisch centrum van Frigiliana',
              dateStatus: 'Bevestigd voor 2026',
              summary:
                'Vier dagen met muziek, straatcultuur, een middeleeuwse markt en culinaire tradities veranderen het dorp. De data zijn bevestigd; programmagegevens volgen afzonderlijk.',
              officialHref: officialLinks.threeCultures2026
            }
          ]
        },
        {
          id: 'autumn-winter',
          title: 'September–december | Feria’s en het einde van het jaar',
          intro:
            'Na augustus wordt het rustiger, al kunnen lokale feria’s straten en verkeer nog steeds meerdere dagen veranderen.',
          events: [
            {
              name: 'Feria de las Maravillas',
              timing: 'Rond begin september',
              place: 'Maro',
              dateStatus: 'Datum en programma wisselen',
              summary:
                'Maro’s lokale feria combineert concerten, attracties en gemeenschapstradities. Controleer de precieze data van dit jaar bij de gemeente Nerja.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Feria de Nerja',
              timing: 'Meestal in oktober',
              place: 'Nerja',
              dateStatus: 'Data veranderen ieder jaar',
              summary:
                'Een van Nerja’s grootste jaarlijkse feesten, met activiteiten overdag en ’s avonds gedurende meerdere dagen. Verkeer, parkeren en geluidsniveau veranderen merkbaar.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Kerst en nieuwjaar',
              timing: 'December–1 januari',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Programma verschilt per plaats',
              summary:
                'Verlichting, concerten en openbare bijeenkomsten bepalen de feestperiode. Controleer de plannen voor oudejaarsavond lokaal in plaats van ze te veronderstellen.'
            }
          ]
        }
      ]
    },
    experiences: {
      title: 'Vier feesten waarvoor u bewust kunt reizen',
      intro:
        'Dit zijn meer dan kalenderdata. Ze veranderen straten, vervoer en openbare ruimte; daarom is de praktische context even belangrijk als het spektakel.',
      items: [
        {
          title: 'Festival Frigiliana 3 Culturas',
          timing: '27–30 augustus 2026',
          place: 'Historisch centrum van Frigiliana',
          dateStatus: 'Data officieel bevestigd',
          description:
            'Frigiliana’s grootste culturele weekend combineert muziek, een middeleeuwse markt, straatvoorstellingen en culinaire tradities in de oude wijk. Het dorp voelt volledig anders dan op een gewone zomeravond.',
          planningNote:
            'Kom ruim vóór de avondpiek, draag schoenen voor steile geplaveide straten en reken niet op parkeren vlak bij het centrum. Controleer afzonderlijke concerten en tijden zodra het volledige programma verschijnt.',
          officialHref: officialLinks.threeCultures2026
        },
        {
          title: 'Semana Santa',
          timing: 'Maart of april',
          place: 'Frigiliana & Nerja',
          dateStatus: 'Verschuivende religieuze data',
          description:
            'Wierook, muziekkorpsen, kaarslicht en trage processies scheppen een krachtige sfeer. Dit is een levende religieuze traditie, geen voorstelling voor bezoekers, en de stemming loopt uiteen van stille verwachting tot dichte avondmenigten.',
          planningNote:
            'Kies één processie in plaats van alles te willen volgen. Houd extra tijd vrij voor wegafsluitingen, steek een processieroute niet over en reserveer het diner met enige flexibiliteit.'
        },
        {
          title: 'Romería de San Isidro',
          timing: '15 mei',
          place: 'Van Nerja naar het terrein bij de Grot van Nerja',
          dateStatus: 'Viering voor 2026 bevestigd',
          description:
            'Versierde wagens, paarden, traditionele kleding en muziek begeleiden de bedevaart vanuit het centrum van Nerja naar het grottenterrein. Het is kleurrijk, sociaal en een van de meest breed gedragen dagen in de streek.',
          planningNote:
            'Reken op een lange, warme dag en grote verkeerswijzigingen. Begin in Nerja als u het vertrek wilt zien en gebruik speciaal vervoer als de gemeente dat voor uw bezoek bevestigt.',
          officialHref: officialLinks.sanIsidro2026
        },
        {
          title: 'Noche de San Juan',
          timing: 'Nacht van 23 juni',
          place: 'Burriana-strand, Nerja',
          dateStatus: 'Viering voor 2026 bevestigd',
          description:
            'Muziek, vuurwerk, de verbranding van de Júa en middernachtrituelen maken van Burriana één groot gemeenschappelijk strandfeest. De sfeer is informeel, energiek en veel drukker dan op een gewone strandavond.',
          planningNote:
            'Ga niet uit van een rustig diner of eenvoudig parkeren aan het strand. Volg de actuele gemeentelijke regels voor vuur, kamperen en afval en regel de terugreis vóór de nachtelijke piek.',
          officialHref: officialLinks.sanJuan2026
        }
      ]
    },
    planning: {
      title: 'Beleef het feest zonder uw vakantie vol te plannen',
      intro:
        'Met wat voorbereiding verlopen deze dagen veel rustiger. Programma’s verschijnen vaak kort voor het feest, terwijl toegang en parkeren al door repetities, processies en avondpieken kunnen veranderen.',
      items: [
        {
          title: 'Controleer het actuele programma',
          text:
            'Gebruik websites van gemeente of organisator voor de exacte dag, route en begintijd. Sociale berichten en oude kalenders blijven soms zichtbaar nadat een programma is gewijzigd.'
        },
        {
          title: 'Maak parkeren deel van het plan',
          text:
            'Parkeer bij grote evenementen in Frigiliana buiten het historische centrum en reken op bergop lopen. Spreek in Nerja af buiten het drukste strand of de processieroute.'
        },
        {
          title: 'Boek alleen wat geboekt moet worden',
          text:
            'Veel straatfeesten en processies zijn gratis. Concerten, voorstellingen met zitplaatsen en populaire restaurants kunnen tickets of reserveringen vereisen; controleer de voorwaarden bij de aanbieder.'
        },
        {
          title: 'Laat ruimte voor het lokale ritme',
          text:
            'Maak van de dag geen checklist. Eén processie, één concert of een paar uur festival is vaak genoeg, zeker in zomerhitte of met jonge kinderen.'
        }
      ],
      note:
        'Als bevestigd gemarkeerde data verwijzen naar de informatie die in juli 2026 beschikbaar was. Weer, veiligheidsmaatregelen en gemeentelijke besluiten kunnen routes, tijden of bereikbaarheid alsnog veranderen; controleer die kort voor vertrek opnieuw.'
    },
    combine: {
      title: 'Bouw een evenwichtige dag rond het feest',
      intro:
        'De fijnste festivaldagen hebben vaak een rustig tegenwicht: een ontspannen lunch vóór de drukte of de zee voordat het avondprogramma begint.',
      items: [
        {
          title: 'Kies het diner voordat de straten vollopen',
          text:
            'Gebruik onze restaurantgids voor een terras in het dorp, een bijzonder diner in Nerja of een eenvoudige maaltijd buiten de drukste evenementenzone.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        },
        {
          title: 'Begin met een paar uur aan zee',
          text:
            'Bij zomerfeesten maakt een rustige ochtend aan de kust de late avond veel aangenamer. Kies het strand bij de omstandigheden die u prettig vindt.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        }
      ]
    },
    closing: {
      title: 'Een rustige uitvalsbasis tussen de feesten',
      lead:
        'Dicht genoeg om de sfeer mee te maken, met een rustige plek om terug te keren zodra muziek en drukte voorbij zijn.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Bekijk de appartementen'
    }
  },
  sv: {
    cardLabels: {
      timing: 'När',
      place: 'Var',
      dateStatus: 'Datumstatus',
      officialInformation: 'Officiell information',
      amaraNote: 'AMARA:s planeringstips'
    },
    footerHighlights: {
      festivals: 'Festivaler & traditioner',
      restaurants: 'Restauranger & lokal mat',
      beaches: 'Stränder & kust'
    },
    hero: {
      kicker: 'Festivaler & levande traditioner',
      title:
        'Festivaler i Frigiliana & Nerja — ett år präglat av tradition',
      paragraphs: [
        'Axarquía byter rytm under året: lugna bygator fylls av processioner, dekorerade vagnar rör sig genom Nerja och sommarkvällarna flyttar till stranden eller Frigilianas historiska kvarter.',
        'Den här guiden hjälper er att välja restid och förstå stämningen i förväg. Den kombinerar återkommande traditioner med ett mindre antal datum som redan har bekräftats officiellt för 2026.',
        'Exakta rutter, tider och program kan ändras även när en högtid har ett traditionellt datum. Använd kalendern som planeringskarta och kontrollera den länkade officiella informationen strax före ert besök.'
      ],
      imageAlt:
        'Den vitkalkade byn Frigiliana ovanför kullarna och Medelhavskusten'
    },
    sectionNav: {
      choose: 'Välj stämning',
      calendar: 'Året i korthet',
      experiences: 'Särskilda festivaler',
      planning: 'Planera väl'
    },
    overview: {
      title: 'Börja med vilken sorts dag ni vill uppleva',
      intro:
        'En helgondag i byn, en högtidlig procession och en stor sommarfestival är helt olika upplevelser. Välj först efter stämning och använd sedan datumstatusen för att planera med rätt grad av säkerhet.',
      reviewed: 'Redaktionellt granskat: juli 2026',
      items: [
        {
          title: 'Bytraditioner',
          text:
            'Frigilianas mindre firanden ligger nära det lokala livet. Räkna med dekorerade gator, religiösa traditioner och program som ibland publiceras först strax före högtiden.'
        },
        {
          title: 'Processioner & pilgrimsfärder',
          text:
            'Semana Santa och San Isidro är visuellt minnesvärda men påverkar trafik och framkomlighet. En tidig start och en flexibel plan lönar sig.'
        },
        {
          title: 'Sommarnätter',
          text:
            'San Juan, kustfiranden och utomhusmusik ger energi och sena avslut. Stränder och centrala gator kan bli ovanligt fulla.'
        },
        {
          title: 'Festivalhelger',
          text:
            'Festivalen för de tre kulturerna förändrar Frigiliana i mycket större skala. Planera boende, transport och middag i god tid.'
        }
      ]
    },
    calendar: {
      title: 'Festivalåret i korthet',
      intro:
        'Traditionella högtidsdagar är bra hållpunkter, men det offentliga programmet runt dem är inte automatiskt fast. ”Bekräftat för 2026” avser endast information som redan har publicerats av berörd kommun.',
      seasons: [
        {
          id: 'january',
          title: 'Januari | Helgon och nya början',
          intro:
            'Året inleds med familjefiranden och några av områdets äldsta lokala traditioner.',
          events: [
            {
              name: 'Cabalgata de Reyes Magos',
              timing: '5 januari',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Traditionellt årligt datum',
              summary:
                'De tre vise männen anländer i kvällsparader för familjer. Rutt, starttid och omfattning meddelas lokalt och kan ändras.'
            },
            {
              name: 'San Sebastián',
              timing: 'Omkring 20 januari',
              place: 'Frigiliana',
              dateStatus: 'Programmet varierar från år till år',
              summary:
                'Frigiliana hedrar San Sebastián med ett religiöst och lokalt firande. Processionens detaljer och kringaktiviteter beror på årets program.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'San Antón',
              timing: 'Omkring 16–17 januari',
              place: 'Maro',
              dateStatus: 'Traditionella dagar; varierande program',
              summary:
                'Maros firande förenar vördnaden för San Antón med folkliv och lokala traditioner. Kontrollera Nerja kommuns aktuella program före resan.',
              officialHref: officialLinks.nerjaCouncil
            }
          ]
        },
        {
          id: 'spring',
          title: 'Februari–april | Kostymer, processioner och lokala råvaror',
          intro:
            'Vårens datum följer kalendern. Karnevalen är lekfull; Semana Santa är högtidlig och bör upplevas med respekt.',
          events: [
            {
              name: 'Karneval',
              timing: 'Februari eller mars',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Datumet ändras varje år',
              summary:
                'Kostymer, parader och scenprogram skapar en livlig, familjevänlig stämning. Båda orterna publicerar egna datum och rutter.'
            },
            {
              name: 'Semana Santa',
              timing: 'Mars eller april',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Datumen följer påsken',
              summary:
                'Religiösa brödraskap bär helgonbilder genom gator fyllda av rökelse, musik och åskådare. Processioner kan stänga vägar och påverka middags- och transportplaner.'
            },
            {
              name: 'Día de la Miel de Caña',
              timing: 'Vanligen på våren',
              place: 'Frigiliana',
              dateStatus: 'Datum och program varierar',
              summary:
                'Ett lokalt firande kring Frigilianas tradition av sockerrörssirap, med aktiviteter och provsmakningar som formas av årets officiella program.',
              officialHref: officialLinks.frigilianaTraditions
            }
          ]
        },
        {
          id: 'may-june',
          title: 'Maj–juni | Blommor, pilgrimsfärd och midsommar',
          intro:
            'Det här är en av de rikaste perioderna för folkdräkter, dekorerade gator och firanden som tar plats i det offentliga rummet.',
          events: [
            {
              name: 'Cruces de Mayo',
              timing: 'Omkring 3 maj',
              place: 'Frigiliana',
              dateStatus: 'Traditionell period; varierande program',
              summary:
                'Blomsterklädda kors syns runt om i byn, tillsammans med mat, musik och gästfrihet från kvarteren. Platser och aktiviteter varierar.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Romería de San Isidro',
              timing: '15 maj',
              place: 'Från Nerja till området vid Nerjagrottan',
              dateStatus: 'Bekräftat för 2026',
              summary:
                'Efter morgonens ceremonier färdas dekorerade vagnar, hästar, musiker och människor i folkdräkt från Balcón de Europa mot grottområdet.',
              officialHref: officialLinks.sanIsidro2026
            },
            {
              name: 'Feria de San Antonio',
              timing: 'Omkring 13 juni',
              place: 'Frigiliana',
              dateStatus: 'Traditionell period; varierande program',
              summary:
                'Frigilianas feria bjuder under flera dagar på konserter, attraktioner och aktiviteter för byn. Program och trafiklösningar ändras varje år.',
              officialHref: officialLinks.frigilianaTraditions
            },
            {
              name: 'Noche de San Juan',
              timing: 'Natten den 23 juni',
              place: 'Burrianastranden, Nerja',
              dateStatus: 'Bekräftat för 2026',
              summary:
                'Ett sent strandfirande med musik, den traditionella bränningen av Júa, fyrverkerier och midnattsritualer vid havet. Lokala regler för eld, camping och avfall gäller fortfarande.',
              officialHref: officialLinks.sanJuan2026
            }
          ]
        },
        {
          id: 'summer',
          title:
            'Juli–augusti | Kusten, konserter och Frigilianas största helg',
          intro:
            'Sommarens evenemang är stämningsfulla och ofta fulla. Värme, sena avslut och begränsad parkering hör till den praktiska bilden.',
          events: [
            {
              name: 'Virgen del Carmen',
              timing: 'Omkring 16 juli',
              place: 'Nerja',
              dateStatus: 'Traditionellt datum; varierande program',
              summary:
                'Sjöfararnas skyddshelgon hedras med en procession till havs och firande vid kusten. Platser med bra utsikt blir fulla långt före starten.'
            },
            {
              name: 'Musikprogram vid Nerjagrottan',
              timing: 'Sommaren',
              place: 'Området vid Nerjagrottan',
              dateStatus: 'Program och biljetter varierar',
              summary:
                'Konserter och kulturföreställningar planeras separat varje säsong. Kontrollera officiellt program, spelplats och biljettvillkor före bokning.',
              officialHref: officialLinks.cuevaDeNerja
            },
            {
              name: 'Fiesta Blanca',
              timing: 'Vanligen i augusti',
              place: 'Nerjas kust',
              dateStatus: 'Inget fast årligt datum',
              summary:
                'En energifylld utomhusfest förknippad med vita kläder, dj:ar och ett sent avslut. Lita inte på ett historiskt datum innan kommunen publicerar aktuellt program.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Festival Frigiliana 3 Culturas',
              timing: '27–30 augusti 2026',
              place: 'Frigilianas historiska kvarter',
              dateStatus: 'Bekräftat för 2026',
              summary:
                'Fyra dagar med musik, gatukultur, medeltidsmarknad och mattraditioner förändrar byn. Datumen är bekräftade; detaljer i programmet publiceras separat.',
              officialHref: officialLinks.threeCultures2026
            }
          ]
        },
        {
          id: 'autumn-winter',
          title: 'September–december | Ferior och årets avslutning',
          intro:
            'Efter augusti blir tempot lugnare, även om lokala ferior fortfarande kan fylla gator och förändra trafiken under flera dagar.',
          events: [
            {
              name: 'Feria de las Maravillas',
              timing: 'Omkring början av september',
              place: 'Maro',
              dateStatus: 'Datum och program varierar',
              summary:
                'Maros lokala feria förenar konserter, attraktioner och bytraditioner. Kontrollera årets exakta datum hos Nerja kommun.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Feria de Nerja',
              timing: 'Vanligen i oktober',
              place: 'Nerja',
              dateStatus: 'Datumen ändras varje år',
              summary:
                'En av Nerjas största årliga fester, med aktiviteter dag och kväll under flera dagar. Trafik, parkering och ljudnivå förändras märkbart.',
              officialHref: officialLinks.nerjaCouncil
            },
            {
              name: 'Jul och nyår',
              timing: 'December–1 januari',
              place: 'Frigiliana & Nerja',
              dateStatus: 'Programmet varierar mellan orterna',
              summary:
                'Belysning, konserter och offentliga sammankomster präglar högtiden. Kontrollera planerna för nyårsafton lokalt i stället för att utgå från dem.'
            }
          ]
        }
      ]
    },
    experiences: {
      title: 'Fyra firanden att planera en resa kring',
      intro:
        'De här evenemangen är mer än kalenderposter. De förändrar gator, transporter och offentliga platser, så den praktiska informationen är lika viktig som upplevelsen.',
      items: [
        {
          title: 'Festival Frigiliana 3 Culturas',
          timing: '27–30 augusti 2026',
          place: 'Frigilianas historiska kvarter',
          dateStatus: 'Datumen är officiellt bekräftade',
          description:
            'Frigilianas största kulturhelg förenar musik, medeltidsmarknad, gatuföreställningar och mattraditioner i den gamla bydelen. Byn känns helt annorlunda än under en vanlig sommarkväll.',
          planningNote:
            'Kom i god tid före kvällens mest intensiva timmar, använd skor för branta kullerstensgator och räkna inte med parkering nära centrum. Kontrollera enskilda konserter och tider när hela programmet släpps.',
          officialHref: officialLinks.threeCultures2026
        },
        {
          title: 'Semana Santa',
          timing: 'Mars eller april',
          place: 'Frigiliana & Nerja',
          dateStatus: 'Rörliga religiösa datum',
          description:
            'Rökelse, musikkårer, levande ljus och långsamma processioner skapar en stark stämning. Det här är en levande religiös tradition, inte en iscensatt turistattraktion, och känslan växlar mellan tyst förväntan och täta kvällsfolkmassor.',
          planningNote:
            'Välj en procession i stället för att försöka följa allt. Lägg in extra tid för vägavstängningar, korsa inte processionsrutten och boka middag med viss flexibilitet.'
        },
        {
          title: 'Romería de San Isidro',
          timing: '15 maj',
          place: 'Från Nerja till området vid Nerjagrottan',
          dateStatus: 'Firandet 2026 är bekräftat',
          description:
            'Dekorerade vagnar, hästar, folkdräkter och musik följer pilgrimsfärden från centrala Nerja mot grottområdet. Dagen är färgstark, social och ett av områdets mest deltagarintensiva firanden.',
          planningNote:
            'Räkna med en lång, varm dag och stora trafikförändringar. Börja i Nerja om ni vill se starten och använd specialtrafiken om kommunen bekräftar den för ert besök.',
          officialHref: officialLinks.sanIsidro2026
        },
        {
          title: 'Noche de San Juan',
          timing: 'Natten den 23 juni',
          place: 'Burrianastranden, Nerja',
          dateStatus: 'Firandet 2026 är bekräftat',
          description:
            'Musik, fyrverkerier, bränningen av Júa och midnattsritualer gör Burriana till ett stort gemensamt strandfirande. Stämningen är informell, energisk och mycket livligare än en vanlig strandkväll.',
          planningNote:
            'Förvänta er varken en lugn middag eller enkel parkering vid stranden. Följ kommunens aktuella regler för eld, camping och avfall och planera hemresan före nattens mest intensiva timmar.',
          officialHref: officialLinks.sanJuan2026
        }
      ]
    },
    planning: {
      title: 'Upplev festen utan att överplanera semestern',
      intro:
        'Lite förberedelse gör de här dagarna betydligt enklare. Program publiceras ofta nära evenemanget, medan tillfarter och parkering kan ändras redan inför repetitioner, processioner och kvällstoppar.',
      items: [
        {
          title: 'Kontrollera aktuellt program',
          text:
            'Använd kommunens eller arrangörens sidor för exakt dag, rutt och starttid. Inlägg i sociala medier och äldre kalendrar kan ligga kvar efter att programmet har ändrats.'
        },
        {
          title: 'Gör parkeringen till en del av planen',
          text:
            'Parkera utanför historiska centrum vid stora evenemang i Frigiliana och räkna med att gå uppför. Bestäm en mötesplats i Nerja utanför den mest besökta stranden eller processionsrutten.'
        },
        {
          title: 'Boka bara det som kräver bokning',
          text:
            'Många gatufester och processioner är gratis. Konserter, föreställningar med sittplatser och populära restauranger kan kräva biljett eller bokning; kontrollera arrangörens villkor.'
        },
        {
          title: 'Lämna plats för den lokala rytmen',
          text:
            'Gör inte dagen till en checklista. En procession, en konsert eller några timmar på festivalen räcker ofta, särskilt i sommarvärme eller med små barn.'
        }
      ],
      note:
        'Datum som märkts som bekräftade avser information tillgänglig i juli 2026. Väder, säkerhetsåtgärder och kommunala beslut kan ändå ändra rutter, tider eller tillträde; kontrollera igen strax före avfärd.'
    },
    combine: {
      title: 'Skapa en balanserad dag kring firandet',
      intro:
        'De bästa festivaldagarna har ofta en lugn motvikt: en avslappnad lunch före folkmassorna eller havet innan kvällsprogrammet börjar.',
      items: [
        {
          title: 'Välj middag innan gatorna fylls',
          text:
            'Använd vår restaurangguide för att hitta en byterrass, en speciell middag i Nerja eller en enkel måltid utanför den mest intensiva festivalzonen.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        },
        {
          title: 'Börja med några timmar vid havet',
          text:
            'Vid sommarfester gör en lugn morgon vid kusten den sena kvällen mycket enklare. Välj strand efter de förhållanden ni föredrar.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        }
      ]
    },
    closing: {
      title: 'En lugn bas mellan firandena',
      lead:
        'Tillräckligt nära för att uppleva stämningen, med en lugn plats att återvända till när musiken och folkmassorna är över.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se boendena'
    }
  }
};
