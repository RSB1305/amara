import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

export interface FrigilianaRestaurantSection {
  id: 'frigiliana' | 'special-nerja' | 'tapas-seafood' | 'acebuchal';
  title: string;
  intro: string;
  /** Recommendation record ids; the cards are built from the place copy (DR-GUEST-006). */
  restaurantIds: readonly string[];
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
    /** Dark hero-tile summary: a short takeaway plus a mini table of contents. */
    summary: {
      eyebrow: string;
      body: string;
      items: Array<{ label: string; value: string }>;
    };
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
    nextCta: string;
  };
}

export const frigilianaRestaurantsSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-restaurants-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.restaurants'),
  article: {
    datePublished: '2026-07-01',
    dateModified: '2026-08-27',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
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
      tip: 'Good to know',
      goodToKnow: 'Before you go',
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
        'Whitewashed Frigiliana above the hills and Mediterranean coast',
      summary: {
        eyebrow: 'On this page',
        body:
          'A curated pick of restaurants in Frigiliana and Nerja — sorted by place and occasion, not a ranking. Choose here, then confirm opening days with the restaurant.',
        items: [
          { label: 'Frigiliana', value: 'Village evenings you can walk home from' },
          { label: 'Nerja', value: 'Special menus, tapas and fresh fish' },
          { label: 'El Acebuchal', value: 'Lunch as a small outing' },
          { label: 'Reviewed', value: 'July 2026' }
        ]
      }
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
            'Dinner in the village means you walk home. Ask us about a specific restaurant and we will tell you what that walk is like from our door.'
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
        restaurantIds: ['frigiliana.restaurants.el-jardin', 'frigiliana.restaurants.gloria-bendita', 'frigiliana.restaurants.la-taperia']
      },
      {
        id: 'special-nerja',
        title: 'Special nights in Nerja',
        intro:
          'For a more polished dinner, Nerja adds sea views, contemporary cooking and the chance to make the meal the main event.',
        restaurantIds: ['nerja.restaurants.restaurant-34', 'nerja.restaurants.oliva', 'nerja.restaurants.mo-gastrotapas']
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, fish & the lively side of Nerja',
        intro:
          'These are not hushed dining rooms. Come for fresh fish, quick service, conversation and full tables.',
        restaurantIds: ['nerja.restaurants.la-puntilla', 'nerja.restaurants.el-pulguilla', 'nerja.restaurants.chiringuito-ayo']
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch as a destination',
        intro:
          'The lost village sits beyond Frigiliana in the natural park. The journey, the landscape and the meal belong together.',
        restaurantIds: ['frigiliana.restaurants.el-acebuchal']
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
            'Check opening days, winter breaks and current menus directly with the restaurant during the week of your visit.'
        },
        {
          title: 'Decide who is driving',
          text:
            'If alcohol is part of the evening, decide your return before reserving and confirm the walking route or taxi plan for that specific restaurant.'
        },
        {
          title: 'Expect dinner to start later',
          text:
            'Dinner in Spain starts later than in northern Europe. If you prefer a quiet table, use the first seating rather than fighting the local peak.'
        }
      ],
      note:
        'We choose restaurants independently for the experience they can add to your stay. For current menus, prices, opening days and reservations, contact the restaurant directly.'
    },
    combine: {
      title: 'Build the day around the meal',
      intro:
        'The most memorable meals often work because the rest of the day leads naturally towards them.',
      items: [
        {
          title: 'Burriana and lunch as one beach day',
          text:
            'If you want a beach day with restaurants and services close by, AYO sits directly on Burriana beach for lunch. Use our beach guide for access and choosing the stretch of coast that suits your day, and check AYO’s current opening before you go.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Hills, then a village table',
          text:
            'A longer or more demanding route leaves less time before dinner. Choose the route length in our hiking guide and leave enough margin before your restaurant reservation.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        },
        {
          title: 'After dinner in central Nerja: a sunset drink',
          text:
            'After dinner near the Balcón or old town, we like to continue to Cochran’s Terrace for a sunset drink. In summer 2025, we watched the sun go down there over a Cuba Libre and a Mai Tai. Check the current opening before you go.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'See our Nerja evening'
        }
      ]
    },
    closing: {
      title: 'When dinner falls on a festival evening',
      lead:
        'If your reservation coincides with a procession or larger celebration, busy streets and changed access can shape the best dinner time and your walk home. We check the current programme and confirmed date before choosing the table.',
      nextCta: 'Check festival dates & programmes'
    }
  },
  de: {
    cardLabels: {
      bestFor: 'Ideal für',
      tip: 'Gut zu wissen',
      goodToKnow: 'Vor dem Besuch',
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
        'Das weiße Dorf Frigiliana über den Hügeln und der Mittelmeerküste',
      summary: {
        eyebrow: 'Auf dieser Seite',
        body:
          'Eine kuratierte Auswahl an Restaurants in Frigiliana und Nerja — nach Ort und Anlass sortiert, keine Rangliste. Hier vorwählen, Öffnungszeiten dann direkt beim Lokal bestätigen.',
        items: [
          { label: 'Frigiliana', value: 'Abende im Dorf, zu Fuß nach Hause' },
          { label: 'Nerja', value: 'Besondere Menüs, Tapas und frischer Fisch' },
          { label: 'El Acebuchal', value: 'Mittagessen als kleiner Ausflug' },
          { label: 'Stand', value: 'Juli 2026' }
        ]
      }
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
            'Abendessen im Dorf heißt, ihr lauft nach Hause. Fragt uns nach einem bestimmten Restaurant, dann sagen wir euch, wie dieser Weg von unserer Tür aus aussieht.'
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
        restaurantIds: ['frigiliana.restaurants.el-jardin', 'frigiliana.restaurants.gloria-bendita', 'frigiliana.restaurants.la-taperia']
      },
      {
        id: 'special-nerja',
        title: 'Besondere Abende in Nerja',
        intro:
          'Für ein feineres Dinner bietet Nerja Meerblick, moderne Küche und Restaurants, bei denen das Essen selbst zum Abendprogramm wird.',
        restaurantIds: ['nerja.restaurants.restaurant-34', 'nerja.restaurants.oliva', 'nerja.restaurants.mo-gastrotapas']
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, Fisch & Nerjas lebendige Seite',
        intro:
          'Das sind keine stillen Speisesäle. Hier geht es um frischen Fisch, lokalen Rhythmus und Mahlzeiten, bei denen die Atmosphäre genauso zählt wie die Präsentation.',
        restaurantIds: ['nerja.restaurants.la-puntilla', 'nerja.restaurants.el-pulguilla', 'nerja.restaurants.chiringuito-ayo']
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — das Mittagessen als Ziel',
        intro:
          'Das „verlorene Dorf“ liegt hinter Frigiliana im Naturpark. Anfahrt, Landschaft und Essen gehören hier zusammen.',
        restaurantIds: ['frigiliana.restaurants.el-acebuchal']
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
            'Prüft Ruhetage, Winterpausen und die aktuelle Karte in der Woche eures Besuchs direkt beim Restaurant.'
        },
        {
          title: 'Vorher klären, wer fährt',
          text:
            'Wenn Alkohol zum Abend gehört, klärt eure Rückfahrt vor der Reservierung und stimmt Fußweg oder Taxi für das konkrete Restaurant ab.'
        },
        {
          title: 'Mit einem späteren Rhythmus rechnen',
          text:
            'In Spanien beginnt das Abendessen später als in Nordeuropa. Wer es ruhiger mag, nimmt die erste Tischzeit statt der lokalen Stoßzeit.'
        }
      ],
      note:
        'Wir wählen Restaurants unabhängig nach dem Erlebnis aus, das sie eurem Aufenthalt geben können. Aktuelle Karten, Preise, Öffnungstage und Reservierungen klärt ihr direkt mit dem Restaurant.'
    },
    combine: {
      title: 'Den Tag auf das Essen zulaufen lassen',
      intro:
        'Oft bleiben Mahlzeiten besonders in Erinnerung, weil der restliche Tag ganz natürlich auf sie hinführt.',
      items: [
        {
          title: 'Burriana und Mittagessen als ein Strandtag',
          text:
            'Wenn ihr einen Strandtag mit Restaurants und Angeboten in direkter Nähe möchtet, liegt AYO für den Lunch direkt am Burriana-Strand. Nutzt unseren Strand-Guide für Zugang und Strandwahl und prüft vorab AYOs aktuelle Öffnung.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Erst die Hügel, dann ein Dorftisch',
          text:
            'Eine längere oder anspruchsvollere Route lässt weniger Zeit bis zum Abendessen. Wählt den passenden Routenumfang im Wander-Guide und plant genügend Puffer bis zu eurer Reservierung ein.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        },
        {
          title: 'Nach dem Essen im Zentrum: ein Sundowner',
          text:
            'Nach einem Abendessen beim Balcón oder in der Altstadt gehen wir gern für einen Sundowner auf die Cochran’s Terrace weiter. Im Sommer 2025 sahen wir dort bei Cuba Libre und Mai Tai die Sonne untergehen. Prüft vor eurem Abend die aktuelle Öffnung.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Zu unserem Nerja-Abend'
        }
      ]
    },
    closing: {
      title: 'Wenn euer Abendessen auf einen Festabend fällt',
      lead:
        'Fällt eure Reservierung mit einer Prozession oder einem größeren Fest zusammen, prägen volle Gassen und geänderte Zufahrten die beste Essenszeit und euren Heimweg. Wir prüfen das aktuelle Programm und den bestätigten Termin, bevor wir den Tisch auswählen.',
      nextCta: 'Festtermine & Programme prüfen'
    }
  },
  es: {
    cardLabels: {
      bestFor: 'Ideal para',
      tip: 'Conviene saber',
      goodToKnow: 'Antes de ir',
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
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea',
      summary: {
        eyebrow: 'En esta página',
        body:
          'Una selección de restaurantes en Frigiliana y Nerja, ordenada por lugar y ocasión, no un ranking. Elegid aquí y confirmad los horarios directamente con el restaurante.',
        items: [
          { label: 'Frigiliana', value: 'Cenas en el pueblo, volvéis andando' },
          { label: 'Nerja', value: 'Menús especiales, tapas y pescado fresco' },
          { label: 'El Acebuchal', value: 'Comer como pequeña excursión' },
          { label: 'Revisado', value: 'Julio 2026' }
        ]
      }
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
            'Cenar en el pueblo significa volver andando. Preguntadnos por un restaurante concreto y os contamos cómo es ese camino desde nuestra puerta.'
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
        restaurantIds: ['frigiliana.restaurants.el-jardin', 'frigiliana.restaurants.gloria-bendita', 'frigiliana.restaurants.la-taperia']
      },
      {
        id: 'special-nerja',
        title: 'Cenas especiales en Nerja',
        intro:
          'Para una velada más cuidada, Nerja suma vistas al mar, cocina contemporánea y restaurantes en los que la cena es el plan principal.',
        restaurantIds: ['nerja.restaurants.restaurant-34', 'nerja.restaurants.oliva', 'nerja.restaurants.mo-gastrotapas']
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, pescado y el lado más vivo de Nerja',
        intro:
          'No son comedores silenciosos. Ven por el pescado fresco, el ritmo local y una comida en la que el ambiente importa tanto como la presentación.',
        restaurantIds: ['nerja.restaurants.la-puntilla', 'nerja.restaurants.el-pulguilla', 'nerja.restaurants.chiringuito-ayo']
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — el almuerzo como destino',
        intro:
          'La aldea perdida se encuentra más allá de Frigiliana, dentro del parque natural. El trayecto, el paisaje y la comida forman un único plan.',
        restaurantIds: ['frigiliana.restaurants.el-acebuchal']
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
          title: 'Comprobad esa misma semana',
          text:
            'Comprobad directamente con el restaurante los días de descanso, cierres de invierno y la carta actual durante la semana de vuestra visita.'
        },
        {
          title: 'Decidid quién conduce',
          text:
            'Si el alcohol forma parte de la noche, decidid el regreso antes de reservar y concretad la ruta a pie o el taxi para ese restaurante.'
        },
        {
          title: 'Cuenta con un ritmo más tardío',
          text:
            'En España se cena más tarde que en el norte de Europa. Si prefieres calma, elige el primer turno en vez de la hora de mayor ambiente local.'
        }
      ],
      note:
        'Elegimos los restaurantes de forma independiente por la experiencia que pueden aportar a vuestra estancia. Para cartas, precios, días de apertura y reservas actuales, contactad directamente con el restaurante.'
    },
    combine: {
      title: 'Haz que el día conduzca hacia la mesa',
      intro:
        'Las comidas más memorables suelen funcionar porque el resto del día lleva hasta ellas de manera natural.',
      items: [
        {
          title: 'Burriana y almuerzo como un solo día de playa',
          text:
            'Si queréis un día de playa con restaurantes y servicios cerca, AYO está directamente en la playa de Burriana para el almuerzo. Usad nuestra guía de playas para el acceso y la elección del tramo de costa, y comprobad antes la apertura actual de AYO.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Primero la sierra, después una mesa en el pueblo',
          text:
            'Una ruta más larga o exigente deja menos tiempo antes de la cena. Elegid la distancia adecuada en nuestra guía de senderismo y dejad margen suficiente antes de vuestra reserva.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        },
        {
          title: 'Después de cenar en el centro: una copa al atardecer',
          text:
            'Después de cenar cerca del Balcón o del casco antiguo, nos gusta continuar la noche con una copa al atardecer en Cochran’s Terrace. En verano de 2025 vimos allí ponerse el sol con un Cuba Libre y un Mai Tai. Comprobad el horario actual antes de ir.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Ver nuestra noche en Nerja'
        }
      ]
    },
    closing: {
      title: 'Cuando vuestra cena coincide con una fiesta',
      lead:
        'Si vuestra reserva coincide con una procesión o una gran celebración, las calles concurridas y los cambios de acceso marcan la mejor hora para cenar y el regreso. Comprobamos el programa actual y la fecha confirmada antes de elegir la mesa.',
      nextCta: 'Consultar fechas y programas'
    }
  },
  nl: {
    cardLabels: {
      bestFor: 'Ideaal voor',
      tip: 'Goed om te weten',
      goodToKnow: 'Voor jullie gaan',
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
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust',
      summary: {
        eyebrow: 'Op deze pagina',
        body:
          'Een samengestelde keuze aan restaurants in Frigiliana en Nerja — op plek en gelegenheid, geen ranglijst. Kies hier voor en bevestig openingstijden rechtstreeks bij het restaurant.',
        items: [
          { label: 'Frigiliana', value: 'Avonden in het dorp, lopend naar huis' },
          { label: 'Nerja', value: 'Speciale menu’s, tapas en verse vis' },
          { label: 'El Acebuchal', value: 'Lunch als klein uitstapje' },
          { label: 'Bijgewerkt', value: 'Juli 2026' }
        ]
      }
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
            'Eten in het dorp betekent dat je naar huis loopt. Vraag ons naar een bepaald restaurant, dan vertellen we hoe die route vanaf onze deur is.'
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
        restaurantIds: ['frigiliana.restaurants.el-jardin', 'frigiliana.restaurants.gloria-bendita', 'frigiliana.restaurants.la-taperia']
      },
      {
        id: 'special-nerja',
        title: 'Bijzondere avonden in Nerja',
        intro:
          'Voor een verfijnder diner biedt Nerja zeezicht, eigentijdse keukens en restaurants waar de maaltijd het hoofdprogramma van de avond is.',
        restaurantIds: ['nerja.restaurants.restaurant-34', 'nerja.restaurants.oliva', 'nerja.restaurants.mo-gastrotapas']
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, vis & de levendige kant van Nerja',
        intro:
          'Dit zijn geen fluisterstille restaurants. Kom voor verse vis, lokaal ritme en een maaltijd waarbij de sfeer net zo belangrijk is als de presentatie.',
        restaurantIds: ['nerja.restaurants.la-puntilla', 'nerja.restaurants.el-pulguilla', 'nerja.restaurants.chiringuito-ayo']
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch als bestemming',
        intro:
          'Het verloren dorp ligt voorbij Frigiliana in het natuurpark. De rit, het landschap en de maaltijd vormen samen het plan.',
        restaurantIds: ['frigiliana.restaurants.el-acebuchal']
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
            'Controleer rustdagen, wintersluitingen en het actuele menu in de week van jullie bezoek rechtstreeks bij het restaurant.'
        },
        {
          title: 'Bepaal vooraf wie rijdt',
          text:
            'Hoort alcohol bij de avond, regel dan vóór de reservering jullie terugreis en stem de looproute of taxi af op het gekozen restaurant.'
        },
        {
          title: 'Reken op een later ritme',
          text:
            'In Spanje begint het diner later dan in Noord-Europa. Wil je rust, kies dan de eerste zitting in plaats van het lokale piekmoment.'
        }
      ],
      note:
        'Wij kiezen restaurants onafhankelijk op basis van wat ze aan jullie verblijf kunnen toevoegen. Voor actuele menu’s, prijzen, openingsdagen en reserveringen nemen jullie rechtstreeks contact op met het restaurant.'
    },
    combine: {
      title: 'Laat de dag naar de maaltijd toe werken',
      intro:
        'De meest memorabele maaltijden werken vaak juist omdat de rest van de dag er vanzelf naartoe leidt.',
      items: [
        {
          title: 'Burriana en lunch als één stranddag',
          text:
            'Willen jullie een stranddag met restaurants en voorzieningen dichtbij, dan ligt AYO direct aan het strand van Burriana voor de lunch. Gebruik onze strandgids voor toegang en strandkeuze en controleer vooraf de actuele opening van AYO.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Eerst de heuvels, dan een tafel in het dorp',
          text:
            'Een langere of zwaardere route laat minder tijd over voor het diner. Kies de passende route in onze wandelgids en plan voldoende speling vóór jullie reservering.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        },
        {
          title: 'Na een diner in het centrum: een drankje bij zonsondergang',
          text:
            'Na een diner bij het Balcón of in de oude stad gaan we graag door naar Cochran’s Terrace voor een drankje bij zonsondergang. In de zomer van 2025 zagen we daar de zon ondergaan met een Cuba Libre en een Mai Tai. Controleer vooraf de actuele openingstijden.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Bekijk onze avond in Nerja'
        }
      ]
    },
    closing: {
      title: 'Wanneer jullie diner op een feestavond valt',
      lead:
        'Valt jullie reservering samen met een processie of groot feest, dan bepalen drukke straten en gewijzigde toegang de beste tijd om te eten en jullie terugweg. We controleren het actuele programma en de bevestigde datum voordat we de tafel kiezen.',
      nextCta: 'Bekijk feestdata & programma’s'
    }
  },
  sv: {
    cardLabels: {
      bestFor: 'Passar bäst för',
      tip: 'Bra att veta',
      goodToKnow: 'Innan ni går',
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
        'Den vita byn Frigiliana ovanför kullarna och Medelhavskusten',
      summary: {
        eyebrow: 'På den här sidan',
        body:
          'Ett kuraterat urval restauranger i Frigiliana och Nerja — ordnat efter plats och tillfälle, ingen rangordning. Välj här och bekräfta öppettider direkt med restaurangen.',
        items: [
          { label: 'Frigiliana', value: 'Kvällar i byn, gå hem till fots' },
          { label: 'Nerja', value: 'Särskilda menyer, tapas och färsk fisk' },
          { label: 'El Acebuchal', value: 'Lunch som en liten utflykt' },
          { label: 'Uppdaterad', value: 'Juli 2026' }
        ]
      }
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
            'Middag i byn betyder att ni går hem. Fråga oss om en viss restaurang, så berättar vi hur den vägen är från vår dörr.'
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
        restaurantIds: ['frigiliana.restaurants.el-jardin', 'frigiliana.restaurants.gloria-bendita', 'frigiliana.restaurants.la-taperia']
      },
      {
        id: 'special-nerja',
        title: 'Speciella kvällar i Nerja',
        intro:
          'För en mer elegant middag erbjuder Nerja havsutsikt, modern matlagning och restauranger där måltiden får vara kvällens huvudnummer.',
        restaurantIds: ['nerja.restaurants.restaurant-34', 'nerja.restaurants.oliva', 'nerja.restaurants.mo-gastrotapas']
      },
      {
        id: 'tapas-seafood',
        title: 'Tapas, fisk & Nerjas livliga sida',
        intro:
          'Det här är inga tysta matsalar. Kom för färsk fisk, lokal rytm och en måltid där stämningen betyder lika mycket som presentationen.',
        restaurantIds: ['nerja.restaurants.la-puntilla', 'nerja.restaurants.el-pulguilla', 'nerja.restaurants.chiringuito-ayo']
      },
      {
        id: 'acebuchal',
        title: 'El Acebuchal — lunch som utflyktsmål',
        intro:
          'Den förlorade byn ligger bortom Frigiliana i naturparken. Vägen, landskapet och måltiden hör ihop.',
        restaurantIds: ['frigiliana.restaurants.el-acebuchal']
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
            'Kontrollera vilodagar, vinterstängningar och aktuell meny direkt med restaurangen under veckan för ert besök.'
        },
        {
          title: 'Bestäm vem som kör',
          text:
            'Om alkohol ingår i kvällen, bestäm hemresan före bokningen och planera promenadväg eller taxi för den valda restaurangen.'
        },
        {
          title: 'Räkna med en senare rytm',
          text:
            'I Spanien börjar middagen senare än i norra Europa. Vill du ha lugn, välj den första sittningen i stället för den lokala rusningstiden.'
        }
      ],
      note:
        'Vi väljer restauranger oberoende utifrån vad de kan tillföra er vistelse. För aktuella menyer, priser, öppningsdagar och bokningar kontaktar ni restaurangen direkt.'
    },
    combine: {
      title: 'Låt dagen leda fram till måltiden',
      intro:
        'De mest minnesvärda måltiderna fungerar ofta för att resten av dagen leder naturligt fram till dem.',
      items: [
        {
          title: 'Burriana och lunch som en stranddag',
          text:
            'Om ni vill ha en stranddag med restauranger och service nära till hands ligger AYO direkt på Burrianastranden för lunch. Använd vår strandguide för tillträde och strandval och kontrollera AYOs aktuella öppettider i förväg.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Först bergen, sedan ett bord i byn',
          text:
            'En längre eller mer krävande led lämnar mindre tid före middagen. Välj en passande rutt i vår vandringsguide och lägg in tillräcklig marginal före er bokning.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        },
        {
          title: 'Efter middag i centrum: en drink i solnedgången',
          text:
            'Efter en middag nära Balcón eller gamla stan fortsätter vi gärna till Cochran’s Terrace för en drink i solnedgången. Sommaren 2025 såg vi solen gå ner där med en Cuba Libre och en Mai Tai. Kontrollera de aktuella öppettiderna före ert besök.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Se vår kväll i Nerja'
        }
      ]
    },
    closing: {
      title: 'När middagen sammanfaller med ett firande',
      lead:
        'Om er bokning sammanfaller med en procession eller ett större firande påverkar folktäta gränder och ändrad framkomlighet både middagstiden och vägen hem. Vi kontrollerar det aktuella programmet och det bekräftade datumet innan vi väljer bord.',
      nextCta: 'Kontrollera datum & program'
    }
  }
};
