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
    /** Second heading below the H1: the keyword tail, one step smaller (DR-DESIGN). */
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
    /** Dark hero-tile summary: a short takeaway plus a mini table of contents. */
    summary: {
      eyebrow: string;
      body: string;
      items: Array<{ id: string; label: string; value: string }>;
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
        'Ten restaurants in Frigiliana and Nerja where we eat ourselves: terraces above the village, tapas in Nerja, fish on the beach.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Restaurant-Tipps für Frigiliana & Nerja',
      description:
        'Zehn Restaurants in Frigiliana und Nerja, in denen wir selbst essen: Terrassen über dem Dorf, Tapas in Nerja, Fisch am Strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Restaurantes en Frigiliana y Nerja',
      description:
        'Diez restaurantes en Frigiliana y Nerja en los que comemos nosotros: terrazas sobre el pueblo, tapas en Nerja, pescado en la playa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Restauranttips voor Frigiliana & Nerja',
      description:
        'Tien restaurants in Frigiliana en Nerja waar we zelf eten: terrassen boven het dorp, tapas in Nerja, vis op het strand.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Restauranger i Frigiliana & Nerja',
      description:
        'Tio restauranger i Frigiliana och Nerja där vi själva äter: terrasser över byn, tapas i Nerja, fisk på stranden.',
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
      kicker: 'Where we eat out',
      title: 'Restaurants in Frigiliana & Nerja',
      subtitle: 'For the evening in the village and the day by the sea',
      paragraphs: [
        'Dinner here can mean a terrace above Frigiliana, creative plates in Nerja or fresh fish in a busy local bar. Those are different evenings, with different travel and booking needs.',
        'Ten addresses in Frigiliana and Nerja that we like ourselves, with what counts before you reserve: terrace, location, size of the room.',
        'Booking is worth it almost everywhere at the weekend.'
      ],
      imageAlt:
        'Whitewashed Frigiliana above the hills and Mediterranean coast',
      summary: {
        eyebrow: 'On this page',
        body:
          'Ten restaurants in Frigiliana and Nerja, sorted by place and occasion.',
        items: [
          { id: 'frigiliana', label: 'Frigiliana', value: 'Village evenings you can walk home from' },
          { id: 'nerja', label: 'Nerja', value: 'Special menus, tapas and fresh fish' },
          { id: 'acebuchal', label: 'El Acebuchal', value: 'Lunch as a small outing' },
          { id: 'reviewed', label: 'Reviewed', value: 'July 2026' }
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
        'For the evening what counts is how it should feel: loud or quiet, short or long, in the village or by the sea.',
      reviewed: 'As of July 2026',
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
          title: 'Closing days',
          text:
            'Closing days and winter breaks change; a call in the afternoon settles the evening.'
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
        ''
    },
    combine: {
      title: 'Build the day around the meal',
      intro:
        'The most memorable meals often work because the rest of the day leads naturally towards them.',
      items: [
        {
          title: 'Burriana and lunch as one beach day',
          text:
            'For a beach day with a restaurant on the sand: AYO at Burriana, paella from the big pan, for decades.',
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
            'After dinner at the Balcón or in the old town we like to walk on to Cochran’s Terrace. In summer 2025 we watched the sun go down there over a Cuba Libre and a Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'See our Nerja evening'
        }
      ]
    },
    closing: {
      title: 'When dinner falls on a festival evening',
      lead:
        'If your evening falls on a procession or a festival, the lanes are full and the access routes different. We tell you when to set off.',
      nextCta: 'To the festivals'
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
      kicker: 'Wo wir essen gehen',
      title: 'Restaurants in Frigiliana & Nerja',
      subtitle: 'Für den Abend im Dorf und den Tag am Meer',
      paragraphs: [
        'Ein besonderer Abend kann hier vieles sein: ein Tisch über den Dächern Frigilianas, kreative Küche in Nerja oder fangfrischer Fisch in einer lebhaften Bar. Das sind ganz unterschiedliche Erlebnisse – entscheidend ist, wonach euch gerade ist.',
        'Zehn Adressen in Frigiliana und Nerja, die wir selbst mögen, mit dem, was vor der Reservierung zählt: Terrasse, Lage, Größe des Raums.',
        'Reservieren lohnt sich am Wochenende fast überall.'
      ],
      imageAlt:
        'Das weiße Dorf Frigiliana über den Hügeln und der Mittelmeerküste',
      summary: {
        eyebrow: 'Auf dieser Seite',
        body:
          'Zehn Restaurants in Frigiliana und Nerja, nach Ort und Anlass sortiert.',
        items: [
          { id: 'frigiliana', label: 'Frigiliana', value: 'Abende im Dorf, zu Fuß nach Hause' },
          { id: 'nerja', label: 'Nerja', value: 'Besondere Menüs, Tapas und frischer Fisch' },
          { id: 'acebuchal', label: 'El Acebuchal', value: 'Mittagessen als kleiner Ausflug' },
          { id: 'reviewed', label: 'Stand', value: 'Juli 2026' }
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
        'Für den Abend zählt, wie er sich anfühlen soll: laut oder leise, kurz oder lang, im Dorf oder am Meer.',
      reviewed: 'Stand Juli 2026',
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
          title: 'Ruhetage',
          text:
            'Ruhetage und Winterpausen wechseln; ein Anruf am Nachmittag klärt den Abend.'
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
        ''
    },
    combine: {
      title: 'Den Tag auf das Essen zulaufen lassen',
      intro:
        'Oft bleiben Mahlzeiten besonders in Erinnerung, weil der restliche Tag ganz natürlich auf sie hinführt.',
      items: [
        {
          title: 'Burriana und Mittagessen als ein Strandtag',
          text:
            'Für einen Strandtag mit Restaurant am Sand: AYO am Burriana, Paella aus der großen Pfanne, seit Jahrzehnten.',
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
            'Nach einem Abendessen am Balcón oder in der Altstadt gehen wir gern weiter auf die Cochran’s Terrace. Im Sommer 2025 sahen wir dort bei Cuba Libre und Mai Tai die Sonne untergehen.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Zu unserem Nerja-Abend'
        }
      ]
    },
    closing: {
      title: 'Wenn euer Abendessen auf einen Festabend fällt',
      lead:
        'Fällt euer Abend auf eine Prozession oder ein Fest, sind die Gassen voll und die Zufahrten anders. Wir sagen euch, wann ihr losgehen solltet.',
      nextCta: 'Zu den Festen'
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
      kicker: 'Donde salimos a comer',
      title: 'Restaurantes en Frigiliana y Nerja',
      subtitle: 'Para la noche en el pueblo y el día junto al mar',
      paragraphs: [
        'Una cena memorable puede ser una mesa sobre los tejados de Frigiliana, platos creativos en Nerja o pescado fresco al ritmo de un bar local lleno de vida. Son planes distintos, y la elección depende del ambiente que apetezca.',
        'Diez direcciones en Frigiliana y Nerja que nos gustan a nosotros, con lo que cuenta antes de reservar: terraza, ubicación, tamaño del local.',
        'Reservar merece la pena casi en todas partes el fin de semana.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea',
      summary: {
        eyebrow: 'En esta página',
        body:
          'Diez restaurantes en Frigiliana y Nerja, ordenados por lugar y ocasión.',
        items: [
          { id: 'frigiliana', label: 'Frigiliana', value: 'Cenas en el pueblo, volvéis andando' },
          { id: 'nerja', label: 'Nerja', value: 'Menús especiales, tapas y pescado fresco' },
          { id: 'acebuchal', label: 'El Acebuchal', value: 'Comer como pequeña excursión' },
          { id: 'reviewed', label: 'Revisado', value: 'Julio 2026' }
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
        'Para la noche lo que cuenta es cómo queréis que sea: ruidosa o tranquila, corta o larga, en el pueblo o junto al mar.',
      reviewed: 'Actualizado en julio de 2026',
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
          title: 'Días de cierre',
          text:
            'Los días de cierre y las pausas de invierno cambian; una llamada por la tarde resuelve la noche.'
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
        ''
    },
    combine: {
      title: 'Haz que el día conduzca hacia la mesa',
      intro:
        'Las comidas más memorables suelen funcionar porque el resto del día lleva hasta ellas de manera natural.',
      items: [
        {
          title: 'Burriana y almuerzo como un solo día de playa',
          text:
            'Para un día de playa con restaurante en la arena: AYO en Burriana, paella de la paellera grande, desde hace décadas.',
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
            'Después de cenar en el Balcón o en el casco antiguo nos gusta seguir hasta Cochran’s Terrace. En el verano de 2025 vimos allí ponerse el sol con un cubalibre y un mai tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Ver nuestra noche en Nerja'
        }
      ]
    },
    closing: {
      title: 'Cuando vuestra cena coincide con una fiesta',
      lead:
        'Si vuestra noche coincide con una procesión o una fiesta, las calles están llenas y los accesos cambian. Os decimos cuándo salir.',
      nextCta: 'A las fiestas'
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
      kicker: 'Waar wij uit eten gaan',
      title: 'Restaurants in Frigiliana & Nerja',
      subtitle: 'Voor de avond in het dorp en de dag aan zee',
      paragraphs: [
        'Een bijzondere avond kan hier een terras boven Frigiliana zijn, creatieve gerechten in Nerja of verse vis in het tempo van een levendige lokale bar. Dat zijn verschillende ervaringen; de juiste keuze hangt af van je stemming.',
        'Tien adressen in Frigiliana en Nerja die we zelf goed vinden, met wat telt vóór het reserveren: terras, ligging, grootte van de ruimte.',
        'Reserveren loont in het weekend bijna overal.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust',
      summary: {
        eyebrow: 'Op deze pagina',
        body:
          'Tien restaurants in Frigiliana en Nerja, gesorteerd op plek en gelegenheid.',
        items: [
          { id: 'frigiliana', label: 'Frigiliana', value: 'Avonden in het dorp, lopend naar huis' },
          { id: 'nerja', label: 'Nerja', value: 'Speciale menu’s, tapas en verse vis' },
          { id: 'acebuchal', label: 'El Acebuchal', value: 'Lunch als klein uitstapje' },
          { id: 'reviewed', label: 'Bijgewerkt', value: 'Juli 2026' }
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
        'Voor de avond telt hoe hij moet voelen: luid of stil, kort of lang, in het dorp of aan zee.',
      reviewed: 'Stand juli 2026',
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
          title: 'Sluitingsdagen',
          text:
            'Sluitingsdagen en winterpauzes wisselen; een telefoontje in de middag regelt de avond.'
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
        ''
    },
    combine: {
      title: 'Laat de dag naar de maaltijd toe werken',
      intro:
        'De meest memorabele maaltijden werken vaak juist omdat de rest van de dag er vanzelf naartoe leidt.',
      items: [
        {
          title: 'Burriana en lunch als één stranddag',
          text:
            'Voor een stranddag met restaurant op het zand: AYO aan Burriana, paella uit de grote pan, al decennia.',
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
            'Na een diner aan de Balcón of in de oude stad lopen we graag door naar Cochran’s Terrace. In de zomer van 2025 zagen we daar de zon ondergaan met een Cuba Libre en een Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Bekijk onze avond in Nerja'
        }
      ]
    },
    closing: {
      title: 'Wanneer jullie diner op een feestavond valt',
      lead:
        'Valt jullie avond op een processie of een feest, dan zijn de steegjes vol en de toegangswegen anders. We zeggen jullie wanneer je moet vertrekken.',
      nextCta: 'Naar de feesten'
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
      kicker: 'Där vi äter ute',
      title: 'Restauranger i Frigiliana & Nerja',
      subtitle: 'För kvällen i byn och dagen vid havet',
      paragraphs: [
        'En minnesvärd middag kan vara en terrass ovanför Frigiliana, kreativa rätter i Nerja eller färsk fisk i tempot på en livlig lokal bar. Det är olika kvällar, och rätt val beror på vilket humör du är på.',
        'Tio adresser i Frigiliana och Nerja som vi själva gillar, med det som räknas innan ni bokar: terrass, läge, lokalens storlek.',
        'Att boka lönar sig nästan överallt på helgen.'
      ],
      imageAlt:
        'Den vita byn Frigiliana ovanför kullarna och Medelhavskusten',
      summary: {
        eyebrow: 'På den här sidan',
        body:
          'Tio restauranger i Frigiliana och Nerja, sorterade efter plats och tillfälle.',
        items: [
          { id: 'frigiliana', label: 'Frigiliana', value: 'Kvällar i byn, gå hem till fots' },
          { id: 'nerja', label: 'Nerja', value: 'Särskilda menyer, tapas och färsk fisk' },
          { id: 'acebuchal', label: 'El Acebuchal', value: 'Lunch som en liten utflykt' },
          { id: 'reviewed', label: 'Uppdaterad', value: 'Juli 2026' }
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
        'För kvällen räknas hur den ska kännas: högljudd eller stilla, kort eller lång, i byn eller vid havet.',
      reviewed: 'Uppdaterad juli 2026',
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
          title: 'Stängningsdagar',
          text:
            'Stängningsdagar och vinterpauser växlar; ett samtal på eftermiddagen ordnar kvällen.'
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
        ''
    },
    combine: {
      title: 'Låt dagen leda fram till måltiden',
      intro:
        'De mest minnesvärda måltiderna fungerar ofta för att resten av dagen leder naturligt fram till dem.',
      items: [
        {
          title: 'Burriana och lunch som en stranddag',
          text:
            'För en stranddag med restaurang på sanden: AYO vid Burriana, paella från den stora pannan, sedan årtionden.',
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
            'Efter en middag vid Balcón eller i gamla stan går vi gärna vidare till Cochran’s Terrace. Sommaren 2025 såg vi solen gå ner där över en Cuba Libre och en Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Se vår kväll i Nerja'
        }
      ]
    },
    closing: {
      title: 'När middagen sammanfaller med ett firande',
      lead:
        'Infaller er kväll på en procession eller en fest är gränderna fulla och tillfarterna annorlunda. Vi säger när ni bör gå.',
      nextCta: 'Till festerna'
    }
  }
};
