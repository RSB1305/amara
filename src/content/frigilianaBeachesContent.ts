import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';
import { stayCollectionLabels } from './stayCollectionLabels';

export interface FrigilianaBeachSection {
  id: 'quiet' | 'nature' | 'nerja';
  title: string;
  intro: string;
  /** Recommendation record ids; the cards are built from the place copy (DR-GUEST-006). */
  beachIds: readonly string[];
}

export interface FrigilianaBeachesPageCopy {
  beachCardLabels: {
    bestFor: string;
    tip: string;
    map: string;
  };
  footerHighlights: {
    beaches: string;
    hiking: string;
    stays: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
  };
  sectionNav: {
    coast: string;
    quiet: string;
    nature: string;
    nerja: string;
    conditions: string;
    practical: string;
  };
  overview: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  beachSections: FrigilianaBeachSection[];
  conditions: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  practical: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    accessNote: {
      before: string;
      label: string;
      after: string;
      href: string;
    };
  };
  combine: {
    title: string;
    intro: string;
    baseDecision: {
      before: string;
      linkLabel: string;
      after: string;
      linkToken: 'playa';
    };
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_hiking_authority'
        | 'weather_frigiliana'
        | 'location_nerja'
        | 'frigiliana_food_authority'
        | 'stay_search_results'
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


const cantarrijanAccessInfo =
  'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/acantilados-de-maro-cerro-gordo-2/255035';

export const frigilianaBeachesSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-beaches-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.beaches'),
  article: {
    datePublished: '2026-07-29',
    dateModified: '2026-09-09',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Beaches near Frigiliana & Nerja: Coastal Guide',
      description:
        'Six beaches near Frigiliana, Nerja and Maro: town beach or pebble cove, chiringuito or silence, and our tip for each.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Strände bei Frigiliana & Nerja: Küsten-Guide',
      description:
        'Sechs Strände bei Frigiliana, Nerja und Maro: Stadtstrand oder Kiesbucht, Chiringuito oder Stille, und unser Tipp zu jedem.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Playas cerca de Frigiliana y Nerja: guía de costa',
      description:
        'Seis playas cerca de Frigiliana, Nerja y Maro: playa urbana o cala de guijarros, chiringuito o silencio, y nuestro consejo para cada una.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Stranden bij Frigiliana & Nerja: kustgids',
      description:
        'Zes stranden bij Frigiliana, Nerja en Maro: stadsstrand of kiezelbaai, chiringuito of stilte, en onze tip bij elk.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Stränder nära Frigiliana & Nerja: kustguide',
      description:
        'Sex stränder nära Frigiliana, Nerja och Maro: stadsstrand eller stenvik, chiringuito eller stillhet, och vårt tips till var och en.',
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
export const frigilianaBeachesContent: Record<
  AmaraLanguage,
  FrigilianaBeachesPageCopy
> = {
  en: {
    beachCardLabels: {
      bestFor: 'Best for',
      tip: 'Our take',
      map: 'Open in Google Maps'
    },
    footerHighlights: {
      beaches: 'Beaches & coast',
      hiking: 'Hiking & nature',
      stays: stayCollectionLabels.structuralName.en
    },
    hero: {
      kicker: 'Coastal guide',
      title: 'Beaches near Frigiliana & Nerja',
      subtitle: 'Six beaches, one car, many days',
      paragraphs: [
        'From Frigiliana, every beach involves a drive down to the coast. From Nerja, the town beaches are close at hand and the Maro coves are a short trip east.',
        'Six beaches that differ clearly: sand or pebbles, chiringuito or silence, parking on the beach or a path down.',
        'Our six for couples, with what makes each one and our tip to go with it.'
      ],
      imageAlt:
        'Palm trees and the Mediterranean coast near AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'The coast',
      quiet: 'Quiet coves',
      nature: 'Nature & water',
      nerja: 'Nerja classics',
      conditions: 'Wind & timing',
      practical: 'Good to know'
    },
    overview: {
      title: 'Town beaches in Nerja or natural coves near Maro?',
      intro:
        'Nerja and Maro are ten minutes apart and feel like two coasts: promenade and chiringuitos here, rocks, pebbles and clear water there.',
      items: [
        {
          title: 'Nerja',
          text:
            'Compact town beaches with sunbeds, showers and restaurants on the sand, loveliest early or in the late afternoon.'
        },
        {
          title: 'Maro & the natural park',
          text:
            'Pebble coves beneath cliffs, water clear enough for snorkelling; in return a path down and little shade.'
        },
        {
          title: 'The wind makes the sea',
          text:
            'Wind makes waves, calm makes the water smooth and clear. Whether snorkelling or kayaking, the morning shows you.'
        },
        {
          title: 'Comfort or quiet',
          text:
            'Where there are sunbeds and restaurants, there are people. Where the water is clearest, there are pebbles and no kiosk.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Quiet coves & unhurried afternoons',
        intro:
          'For a swim, a picnic and a few slow hours.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Nature, snorkelling & kayak days',
        intro:
          'East of Nerja lies the protected Maro–Cerro Gordo coast: rocks, open water, landscape. Here the sea decides the day.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Classic Nerja & easy full beach days',
        intro:
          'For days when beach, lunch and old town belong together.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'What makes the beach day',
      intro:
        'The same beach is two beaches on two days. Time of day and wind decide more than the choice of cove.',
      items: [
        {
          title: 'Timing matters',
          text:
            'Small coves are small. In high summer they are yours in the morning and from five, everyone’s at midday.'
        },
        {
          title: 'The wind',
          text:
            'A sunny day can have waves. Take snorkel and kayak with you and decide at the water.'
        },
        {
          title: 'Maro’s waterfalls are seasonal',
          text:
            'The waterfalls on the cliffs run after rain, mostly in spring. In the dry summer the landscape remains; the water comes back later.'
        },
        {
          title: 'Sunbeds or pebbles',
          text:
            'Easy access and services mean people; the quiet spots with clear water have pebbles and a path.'
        }
      ]
    },
    practical: {
      title: 'Practical essentials',
      intro:
        'For Maro and the natural park: water, shade and shoes for the path.',
      items: [
        {
          title: 'Parking',
          text:
            'At Maro and the wilder coves spaces are scarce; in high summer come before ten or from the late afternoon.'
        },
        {
          title: 'Gear',
          text:
            'Pack your own snorkelling gear for Maro and the quieter coves; the town beaches have rental.'
        },
        {
          title: 'Food',
          text:
            'Choose Burriana for a long paella lunch, Cantarriján for fresh fish and central Nerja when tapas after the beach matters more than eating on the sand.'
        }
      ],
      accessNote: {
        before:
          'In summer, access to Cantarriján is regulated; here are the ',
        label: 'current visitor information from the Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combine your day',
      intro:
        'The beach is one part of the day; before and after, the village belongs to it.',
      baseDecision: {
        before:
          'Frigiliana remains a natural home base when the beach is a day trip. If spontaneous walk-to-beach access matters more, ',
        linkLabel: 'AMARA Playa in Nerja is 200 m from Torrecilla beach',
        after: '.',
        linkToken: 'playa'
      },
      items: [
        {
          title: 'From sea to summit',
          text:
            'An early swim and then a walk above Frigiliana; the long routes in the Sierra Almijara wait for a cooler day.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        },
        {
          title: 'Season and weather',
          text:
            'The climate says when you come; wind and sea say whether today is a beach day. Both are in the weather guide with the AEMET forecast.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Compare weather and seasons'
        },
        {
          title: 'Combine Burriana with a daytime restaurant',
          text:
            'At Burriana, beach and lunch lie side by side: AYO on Paseo Burriana, paella from the big pan, for decades.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        },
        {
          title: 'Let a central Nerja beach afternoon become a sundowner',
          text:
            'If the coast day ends near the old town, you walk on to Cochran’s Terrace. We watched the sunset there in summer 2025, with a Cuba Libre and a Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'See our Nerja sundowner'
        },
        {
          title: 'Which weeks are still open?',
          text:
            'The coast is a different day in May than in August. What is free on your dates comes with the total price for those nights.',
          linkToken: 'stay_search_results',
          linkLabel: 'See what is free on your dates'
        }
      ]
    },
    closing: {
      title: 'The beach route that fits your day',
      lead:
        'Torrecilla lies level with the centre, Carabeo has steps, from Burriana it is uphill back. AMARA Playa stands 200 metres from Torrecilla: beach, shower, evening in the old town, all on foot.',
      nextCta: 'Routes between Nerja’s beaches & centre'
    }
  },
  de: {
    beachCardLabels: {
      bestFor: 'Am besten für',
      tip: 'Unser Tipp',
      map: 'In Google Maps öffnen'
    },
    footerHighlights: {
      beaches: 'Strände & Küste',
      hiking: 'Wandern & Natur',
      stays: stayCollectionLabels.structuralName.de
    },
    hero: {
      kicker: 'Küsten-Guide',
      title: 'Strände bei Frigiliana & Nerja',
      subtitle: 'Sechs Strände, ein Auto, viele Tage',
      paragraphs: [
        'Von Frigiliana fahrt ihr für jeden Strand hinunter an die Küste. In Nerja liegen die Stadtstrände nahe; zu den Buchten bei Maro geht es ein Stück weiter nach Osten.',
        'Sechs Strände, die sich deutlich unterscheiden: Sand oder Kies, Chiringuito oder Stille, Parkplatz am Strand oder ein Pfad hinunter.',
        'Unsere sechs für Paare, mit dem, was jeden ausmacht, und unserem Tipp dazu.'
      ],
      imageAlt:
        'Palmen und Mittelmeerküste nahe AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'Die Küste',
      quiet: 'Ruhige Buchten',
      nature: 'Natur & Wasser',
      nerja: 'Nerja-Klassiker',
      conditions: 'Wind & Zeit',
      practical: 'Gut zu wissen'
    },
    overview: {
      title: 'Stadtstrände in Nerja oder Naturbuchten bei Maro?',
      intro:
        'Nerja und Maro liegen zehn Minuten auseinander und fühlen sich an wie zwei Küsten: hier Promenade und Chiringuitos, dort Felsen, Kies und klares Wasser.',
      items: [
        {
          title: 'Nerja',
          text:
            'Kompakte Stadtstrände mit Liegen, Duschen und Restaurants am Sand, am schönsten früh oder am späten Nachmittag.'
        },
        {
          title: 'Maro & der Naturpark',
          text:
            'Kiesbuchten unter Klippen, Wasser klar genug zum Schnorcheln; dafür ein Pfad hinunter und wenig Schatten.'
        },
        {
          title: 'Der Wind macht das Meer',
          text:
            'Wind macht Welle, Windstille macht das Wasser glatt und klar. Ob Schnorcheln oder Kajak, zeigt der Morgen.'
        },
        {
          title: 'Komfort oder Stille',
          text:
            'Wo Liegen und Restaurants sind, sind Menschen. Wo das Wasser am klarsten ist, gibt es Kies und keinen Kiosk.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Ruhige Buchten & langsame Nachmittage',
        intro:
          'Für eine Schwimmrunde, ein Picknick und ein paar langsame Stunden.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Natur, Schnorcheln & Kajaktage',
        intro:
          'Östlich von Nerja liegt die geschützte Küste von Maro–Cerro Gordo: Felsen, offenes Wasser, Landschaft. Hier entscheidet das Meer über den Tag.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Nerja-Klassiker & unkomplizierte Strandtage',
        intro:
          'Für Tage, an denen Strand, Mittagessen und Altstadt zusammengehören.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Was den Strandtag macht',
      intro:
        'Derselbe Strand ist an zwei Tagen zwei Strände. Uhrzeit und Wind entscheiden mehr als die Wahl der Bucht.',
      items: [
        {
          title: 'Der Zeitpunkt zählt',
          text:
            'Kleine Buchten sind klein. Im Hochsommer gehören sie morgens und ab fünf euch, mittags allen.'
        },
        {
          title: 'Der Wind',
          text:
            'Ein sonniger Tag kann Welle haben. Schnorchel und Kajak nehmt ihr mit und entscheidet am Wasser.'
        },
        {
          title: 'Maros Wasserfälle sind saisonal',
          text:
            'Die Wasserfälle an den Felsen laufen nach Regen, meist im Frühjahr. Im trockenen Sommer bleibt die Landschaft, das Wasser kommt später wieder.'
        },
        {
          title: 'Liegen oder Kies',
          text:
            'Einfacher Zugang und Service bedeuten Menschen; die stillen Plätze mit klarem Wasser haben Kies und einen Pfad.'
        }
      ]
    },
    practical: {
      title: 'Praktisch für den Strandtag',
      intro:
        'Für Maro und den Naturpark: Wasser, Schatten und Schuhe für den Pfad.',
      items: [
        {
          title: 'Parken',
          text:
            'Bei Maro und den wilderen Buchten sind die Plätze knapp; im Hochsommer vor zehn oder ab dem späten Nachmittag kommen.'
        },
        {
          title: 'Ausrüstung',
          text:
            'Für Maro und die ruhigeren Buchten die eigene Schnorchelausrüstung einpacken; an den Stadtstränden gibt es Verleih.'
        },
        {
          title: 'Essen',
          text:
            'Burriana passt für eine lange Paella-Pause, Cantarriján für frischen Fisch und Nerjas Zentrum, wenn Tapas nach dem Strand wichtiger sind als ein Restaurant direkt im Sand.'
        }
      ],
      accessNote: {
        before:
          'Im Sommer ist die Zufahrt nach Cantarriján geregelt; hier stehen die ',
        label: 'aktuellen Besucherhinweise der Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'So lässt sich der Tag verbinden',
      intro:
        'Der Strand ist ein Teil des Tages; davor und danach gehört das Dorf dazu.',
      baseDecision: {
        before:
          'Frigiliana bleibt eine stimmige Basis, wenn der Strand ein Tagesausflug ist. Wenn ihr lieber spontan zu Fuß ans Meer gehen möchtet, ',
        linkLabel: 'liegt AMARA Playa in Nerja 200 m vom Strand Torrecilla entfernt',
        after: '.',
        linkToken: 'playa'
      },
      items: [
        {
          title: 'Vom Meer in die Berge',
          text:
            'Ein frühes Bad und danach ein Spaziergang oberhalb von Frigiliana; die langen Routen in der Sierra Almijara warten auf einen kühleren Tag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        },
        {
          title: 'Jahreszeit und Wetter',
          text:
            'Das Klima sagt, wann ihr kommt; Wind und Meer sagen, ob heute Strandtag ist. Beides steht im Wetter-Guide mit der AEMET-Vorhersage.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Wetter und Jahreszeiten vergleichen'
        },
        {
          title: 'Burriana mit einem Tagesrestaurant verbinden',
          text:
            'Am Burriana liegen Strand und Mittagessen nebeneinander: AYO am Paseo Burriana, Paella aus der großen Pfanne, seit Jahrzehnten.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurant-Guide'
        },
        {
          title: 'Aus einem Strandnachmittag im Zentrum einen Sundowner machen',
          text:
            'Endet der Küstentag nahe der Altstadt, geht ihr zu Fuß weiter zur Cochran’s Terrace. Wir haben dort im Sommer 2025 den Sonnenuntergang gesehen, mit Cuba Libre und Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Zu unserem Nerja-Sundowner'
        },
        {
          title: 'Welche Wochen sind noch frei?',
          text:
            'Die Küste ist im Mai ein anderer Tag als im August. Was an euren Daten frei ist, seht ihr mit dem Gesamtpreis für diese Nächte.',
          linkToken: 'stay_search_results',
          linkLabel: 'Sehen, was an euren Daten frei ist'
        }
      ]
    },
    closing: {
      title: 'Der Strandweg, der zu eurem Tag passt',
      lead:
        'Torrecilla liegt eben am Zentrum, Carabeo hat Stufen, von Burriana geht es bergauf zurück. AMARA Playa steht 200 Meter von Torrecilla: Strand, Dusche, Abend in der Altstadt, alles zu Fuß.',
      nextCta: 'Wege zwischen Nerjas Stränden & Zentrum'
    }
  },
  es: {
    beachCardLabels: {
      bestFor: 'Ideal para',
      tip: 'Nuestro consejo',
      map: 'Abrir en Google Maps'
    },
    footerHighlights: {
      beaches: 'Playas y costa',
      hiking: 'Senderismo y naturaleza',
      stays: stayCollectionLabels.structuralName.es
    },
    hero: {
      kicker: 'Guía de costa',
      title: 'Playas cerca de Frigiliana y Nerja',
      subtitle: 'Seis playas, un coche, muchos días',
      paragraphs: [
        'Desde Frigiliana hay que bajar en coche para ir a cualquier playa. En Nerja, las playas urbanas quedan cerca y las calas de Maro están a un corto trayecto hacia el este.',
        'Seis playas claramente distintas: arena o guijarros, chiringuito o silencio, aparcamiento en la playa o un sendero de bajada.',
        'Nuestras seis para parejas, con lo que define a cada una y nuestro consejo.'
      ],
      imageAlt:
        'Palmeras y costa mediterránea cerca de AMARA Playa en Nerja'
    },
    sectionNav: {
      coast: 'La costa',
      quiet: 'Calas tranquilas',
      nature: 'Naturaleza y mar',
      nerja: 'Clásicos de Nerja',
      conditions: 'Viento y hora',
      practical: 'Datos prácticos'
    },
    overview: {
      title: '¿Playas urbanas de Nerja o calas naturales de Maro?',
      intro:
        'Nerja y Maro están a diez minutos y parecen dos costas: aquí paseo marítimo y chiringuitos, allí rocas, guijarros y agua clara.',
      items: [
        {
          title: 'Nerja',
          text:
            'Playas urbanas compactas con hamacas, duchas y restaurantes en la arena, más bonitas a primera hora o a última de la tarde.'
        },
        {
          title: 'Maro y el paraje natural',
          text:
            'Calas de guijarros bajo acantilados, agua lo bastante clara para hacer snorkel; a cambio, un sendero de bajada y poca sombra.'
        },
        {
          title: 'El viento hace el mar',
          text:
            'El viento trae olas, la calma deja el agua lisa y clara. Si toca snorkel o kayak, lo dice la mañana.'
        },
        {
          title: 'Comodidad o silencio',
          text:
            'Donde hay hamacas y restaurantes, hay gente. Donde el agua está más clara, hay guijarros y ningún chiringuito.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Calas tranquilas y tardes sin prisa',
        intro:
          'Para un baño, un pícnic y unas horas tranquilas.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Naturaleza, snorkel y días de kayak',
        intro:
          'Al este de Nerja está la costa protegida de Maro–Cerro Gordo: rocas, mar abierto, paisaje. Aquí el mar decide el día.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Clásicos de Nerja y días de playa fáciles',
        intro:
          'Para días en que playa, comida y casco antiguo van juntos.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Lo que hace el día de playa',
      intro:
        'La misma playa es dos playas en dos días. La hora y el viento deciden más que la elección de la cala.',
      items: [
        {
          title: 'La hora importa',
          text:
            'Las calas pequeñas son pequeñas. En pleno verano son vuestras por la mañana y a partir de las cinco, de todos a mediodía.'
        },
        {
          title: 'El viento',
          text:
            'Un día de sol puede tener olas. Llevad el snorkel y el kayak y decidid en el agua.'
        },
        {
          title: 'Las cascadas de Maro son estacionales',
          text:
            'Las cascadas de los acantilados corren después de la lluvia, sobre todo en primavera. En el verano seco queda el paisaje; el agua vuelve más tarde.'
        },
        {
          title: 'Hamacas o guijarros',
          text:
            'Acceso fácil y servicios significan gente; los sitios tranquilos con agua clara tienen guijarros y un sendero.'
        }
      ]
    },
    practical: {
      title: 'Datos prácticos',
      intro:
        'Para Maro y el parque natural: agua, sombra y calzado para el sendero.',
      items: [
        {
          title: 'Aparcamiento',
          text:
            'En Maro y las calas más salvajes las plazas escasean; en pleno verano, llegad antes de las diez o a partir de la última hora de la tarde.'
        },
        {
          title: 'Equipo',
          text:
            'Para Maro y las calas más tranquilas, llevad vuestro equipo de snorkel; en las playas urbanas hay alquiler.'
        },
        {
          title: 'Dónde comer',
          text:
            'Burriana para una paella sin prisa, Cantarriján para pescado fresco y el centro de Nerja cuando apetece más tomar tapas después del baño que comer sobre la arena.'
        }
      ],
      accessNote: {
        before:
          'En verano el acceso a Cantarriján está regulado; aquí están las ',
        label: 'información actual para visitantes de la Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combinad el día',
      intro:
        'La playa es una parte del día; antes y después, el pueblo forma parte de él.',
      baseDecision: {
        before:
          'Frigiliana sigue siendo una base muy lógica si la playa forma parte de una excursión. Si preferís bajar andando al mar cuando os apetezca, ',
        linkLabel: 'AMARA Playa en Nerja está a 200 m de la playa de Torrecilla',
        after: '.',
        linkToken: 'playa'
      },
      items: [
        {
          title: 'Del mar a la sierra',
          text:
            'Un baño temprano y después un paseo por encima de Frigiliana; las rutas largas de la Sierra Almijara esperan a un día más fresco.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        },
        {
          title: 'Estación y tiempo',
          text:
            'El clima dice cuándo venir; el viento y el mar dicen si hoy toca playa. Ambos están en la guía del tiempo con el pronóstico de AEMET.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Comparar tiempo y estaciones'
        },
        {
          title: 'Combinar Burriana con un restaurante de día',
          text:
            'En Burriana, playa y comida están juntas: AYO en el Paseo Burriana, paella de la paellera grande, desde hace décadas.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        },
        {
          title: 'Convertir una tarde de playa en el centro en un atardecer',
          text:
            'Si el día de costa termina cerca del casco antiguo, seguid a pie hasta Cochran’s Terrace. Allí vimos el atardecer en el verano de 2025, con un cubalibre y un mai tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Ver nuestro atardecer en Nerja'
        },
        {
          title: '¿Qué semanas quedan libres?',
          text:
            'La costa en mayo no es el mismo día que en agosto. Lo que hay libre en vuestras fechas aparece con el precio total de esas noches.',
          linkToken: 'stay_search_results',
          linkLabel: 'Ver qué hay libre en vuestras fechas'
        }
      ]
    },
    closing: {
      title: 'El camino a la playa que encaja con vuestro día',
      lead:
        'Torrecilla está a nivel del centro, Carabeo tiene escalones, desde Burriana la vuelta es cuesta arriba. AMARA Playa está a 200 metros de Torrecilla: playa, ducha, noche en el casco antiguo, todo a pie.',
      nextCta: 'Caminos entre las playas y el centro de Nerja'
    }
  },
  nl: {
    beachCardLabels: {
      bestFor: 'Het best voor',
      tip: 'Onze tip',
      map: 'Openen in Google Maps'
    },
    footerHighlights: {
      beaches: 'Stranden & kust',
      hiking: 'Wandelen & natuur',
      stays: stayCollectionLabels.structuralName.nl
    },
    hero: {
      kicker: 'Kustgids',
      title: 'Stranden bij Frigiliana & Nerja',
      subtitle: 'Zes stranden, één auto, veel dagen',
      paragraphs: [
        'Vanuit Frigiliana rijden jullie voor elk strand naar beneden, naar de kust. In Nerja liggen de stadsstranden dichtbij; de baaien bij Maro liggen een korte rit naar het oosten.',
        'Zes stranden die duidelijk verschillen: zand of kiezels, chiringuito of stilte, parkeren aan het strand of een pad naar beneden.',
        'Onze zes voor stellen, met wat elk bijzonder maakt en onze tip erbij.'
      ],
      imageAlt:
        'Palmbomen en de Middellandse Zeekust bij AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'De kust',
      quiet: 'Rustige baaien',
      nature: 'Natuur & water',
      nerja: 'Nerja-klassiekers',
      conditions: 'Wind & tijd',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Stadsstranden in Nerja of natuurbaaien bij Maro?',
      intro:
        'Nerja en Maro liggen tien minuten van elkaar en voelen als twee kusten: hier promenade en chiringuito’s, daar rotsen, kiezels en helder water.',
      items: [
        {
          title: 'Nerja',
          text:
            'Compacte stadsstranden met ligbedden, douches en restaurants op het zand, het mooist vroeg of in de late middag.'
        },
        {
          title: 'Maro & het natuurgebied',
          text:
            'Kiezelbaaien onder kliffen, water helder genoeg om te snorkelen; daarvoor een pad naar beneden en weinig schaduw.'
        },
        {
          title: 'De wind maakt de zee',
          text:
            'Wind maakt golven, windstilte maakt het water glad en helder. Of het snorkelen of kajakken wordt, laat de ochtend zien.'
        },
        {
          title: 'Comfort of stilte',
          text:
            'Waar ligbedden en restaurants zijn, zijn mensen. Waar het water het helderst is, zijn kiezels en geen kiosk.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Rustige baaien & trage middagen',
        intro:
          'Voor een zwemrondje, een picknick en een paar langzame uren.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Natuur, snorkelen & kajakken',
        intro:
          'Ten oosten van Nerja ligt de beschermde kust van Maro–Cerro Gordo: rotsen, open water, landschap. Hier bepaalt de zee de dag.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiekers & gemakkelijke stranddagen',
        intro:
          'Voor dagen waarop strand, lunch en oude stad bij elkaar horen.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Wat de stranddag maakt',
      intro:
        'Hetzelfde strand is op twee dagen twee stranden. Tijdstip en wind bepalen meer dan de keuze van de baai.',
      items: [
        {
          title: 'Timing telt',
          text:
            'Kleine baaien zijn klein. In de hoogzomer zijn ze ’s ochtends en vanaf vijf uur van jullie, ’s middags van iedereen.'
        },
        {
          title: 'De wind',
          text:
            'Een zonnige dag kan golven hebben. Neem snorkel en kajak mee en beslis aan het water.'
        },
        {
          title: 'De watervallen van Maro zijn seizoensgebonden',
          text:
            'De watervallen op de rotsen lopen na regen, meestal in het voorjaar. In de droge zomer blijft het landschap; het water komt later terug.'
        },
        {
          title: 'Ligbedden of kiezels',
          text:
            'Makkelijke toegang en service betekenen mensen; de stille plekken met helder water hebben kiezels en een pad.'
        }
      ]
    },
    practical: {
      title: 'Praktische aandachtspunten',
      intro:
        'Voor Maro en het natuurpark: water, schaduw en schoenen voor het pad.',
      items: [
        {
          title: 'Parkeren',
          text:
            'Bij Maro en de wildere baaien zijn plekken schaars; in de hoogzomer voor tienen komen of vanaf de late middag.'
        },
        {
          title: 'Uitrusting',
          text:
            'Voor Maro en de rustigere baaien de eigen snorkeluitrusting inpakken; op de stadsstranden is verhuur.'
        },
        {
          title: 'Eten',
          text:
            'Kies Burriana voor een lange paellalunch, Cantarriján voor verse vis en het centrum van Nerja wanneer tapas na het strand belangrijker zijn dan eten op het zand.'
        }
      ],
      accessNote: {
        before:
          'In de zomer is de toegang tot Cantarriján geregeld; hier staan de ',
        label: 'actuele bezoekersinformatie van de Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combineer jullie dag',
      intro:
        'Het strand is een deel van de dag; ervoor en erna hoort het dorp erbij.',
      baseDecision: {
        before:
          'Frigiliana blijft een logische uitvalsbasis wanneer het strand een daguitstap is. Willen jullie juist spontaan naar zee kunnen lopen, dan ',
        linkLabel: 'ligt AMARA Playa in Nerja op 200 m van het Torrecilla-strand',
        after: '.',
        linkToken: 'playa'
      },
      items: [
        {
          title: 'Van zee naar berg',
          text:
            'Een vroege duik en daarna een wandeling boven Frigiliana; de lange routes in de Sierra Almijara wachten op een koelere dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        },
        {
          title: 'Seizoen en weer',
          text:
            'Het klimaat zegt wanneer je komt; wind en zee zeggen of het vandaag stranddag is. Beide staan in de weergids met de AEMET-voorspelling.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Vergelijk weer en seizoenen'
        },
        {
          title: 'Combineer Burriana met een restaurant voor overdag',
          text:
            'Aan Burriana liggen strand en lunch naast elkaar: AYO aan Paseo Burriana, paella uit de grote pan, al decennia.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        },
        {
          title: 'Laat een strandmiddag in centraal Nerja overgaan in een sundowner',
          text:
            'Eindigt de kustdag bij de oude stad, dan loop je door naar Cochran’s Terrace. Daar zagen we in de zomer van 2025 de zon ondergaan, met een Cuba Libre en een Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Bekijk onze sundowner in Nerja'
        },
        {
          title: 'Welke weken zijn nog vrij?',
          text:
            'De kust is in mei een andere dag dan in augustus. Wat er op jullie data vrij is, zie je met de totaalprijs voor die nachten.',
          linkToken: 'stay_search_results',
          linkLabel: 'Bekijk wat vrij is op jullie data'
        }
      ]
    },
    closing: {
      title: 'De strandroute die bij jullie dag past',
      lead:
        'Torrecilla ligt vlak bij het centrum, Carabeo heeft treden, vanaf Burriana gaat het bergop terug. AMARA Playa staat 200 meter van Torrecilla: strand, douche, avond in de oude stad, alles te voet.',
      nextCta: 'Routes tussen de stranden en het centrum van Nerja'
    }
  },
  sv: {
    beachCardLabels: {
      bestFor: 'Bäst för',
      tip: 'Vårt tips',
      map: 'Öppna i Google Maps'
    },
    footerHighlights: {
      beaches: 'Stränder & kust',
      hiking: 'Vandring & natur',
      stays: stayCollectionLabels.structuralName.sv
    },
    hero: {
      kicker: 'Kustguide',
      title: 'Stränder nära Frigiliana & Nerja',
      subtitle: 'Sex stränder, en bil, många dagar',
      paragraphs: [
        'Från Frigiliana behöver ni köra ner till kusten för alla stränder. I Nerja ligger stadsstränderna nära; vikarna vid Maro ligger en kort bit österut.',
        'Sex stränder som skiljer sig tydligt: sand eller sten, chiringuito eller stillhet, parkering vid stranden eller en stig ner.',
        'Våra sex för par, med det som utmärker var och en och vårt tips därtill.'
      ],
      imageAlt:
        'Palmer och Medelhavskust nära AMARA Playa i Nerja'
    },
    sectionNav: {
      coast: 'Kusten',
      quiet: 'Lugna vikar',
      nature: 'Natur & vatten',
      nerja: 'Nerja-klassiker',
      conditions: 'Vind & tid',
      practical: 'Bra att veta'
    },
    overview: {
      title: 'Stadsstränder i Nerja eller naturvikar vid Maro?',
      intro:
        'Nerja och Maro ligger tio minuter från varandra och känns som två kuster: här strandpromenad och chiringuitos, där klippor, sten och klart vatten.',
      items: [
        {
          title: 'Nerja',
          text:
            'Kompakta stadsstränder med solstolar, duschar och restauranger på sanden, vackrast tidigt eller sent på eftermiddagen.'
        },
        {
          title: 'Maro & naturområdet',
          text:
            'Stenvikar under klippor, vatten klart nog för snorkling; i gengäld en stig ner och lite skugga.'
        },
        {
          title: 'Vinden gör havet',
          text:
            'Vind gör vågor, vindstilla gör vattnet slätt och klart. Om det blir snorkling eller kajak visar morgonen.'
        },
        {
          title: 'Komfort eller stillhet',
          text:
            'Där det finns solstolar och restauranger finns det människor. Där vattnet är klarast finns sten och ingen kiosk.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Lugna vikar & långsamma eftermiddagar',
        intro:
          'För en simtur, en picknick och några långsamma timmar.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Natur, snorkling & kajakdagar',
        intro:
          'Öster om Nerja ligger den skyddade kusten Maro–Cerro Gordo: klippor, öppet vatten, landskap. Här avgör havet dagen.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiker & enkla heldagar',
        intro:
          'För dagar då strand, lunch och gamla stan hör ihop.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Vad som gör stranddagen',
      intro:
        'Samma strand är två stränder på två dagar. Tid på dagen och vind avgör mer än valet av vik.',
      items: [
        {
          title: 'Tidpunkten spelar roll',
          text:
            'Små vikar är små. På högsommaren är de era på morgonen och från fem, allas mitt på dagen.'
        },
        {
          title: 'Vinden',
          text:
            'En solig dag kan ha vågor. Ta med snorkel och kajak och bestäm vid vattnet.'
        },
        {
          title: 'Maros vattenfall är säsongsbundna',
          text:
            'Vattenfallen på klipporna rinner efter regn, mest på våren. Under den torra sommaren finns landskapet kvar; vattnet kommer tillbaka senare.'
        },
        {
          title: 'Solstolar eller sten',
          text:
            'Lätt tillgång och service betyder människor; de stilla platserna med klart vatten har sten och en stig.'
        }
      ]
    },
    practical: {
      title: 'Praktiskt inför stranddagen',
      intro:
        'För Maro och naturparken: vatten, skugga och skor för stigen.',
      items: [
        {
          title: 'Parkering',
          text:
            'Vid Maro och de vildare vikarna är platserna få; på högsommaren kom före tio eller från sen eftermiddag.'
        },
        {
          title: 'Utrustning',
          text:
            'Packa egen snorkelutrustning för Maro och de lugnare vikarna; på stadsstränderna finns uthyrning.'
        },
        {
          title: 'Mat',
          text:
            'Välj Burriana för en lång paellalunch, Cantarriján för färsk fisk och centrala Nerja när tapas efter stranden lockar mer än att äta direkt på sanden.'
        }
      ],
      accessNote: {
        before:
          'På sommaren är tillfarten till Cantarriján reglerad; här finns ',
        label: 'aktuella besöksinformationen från Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Kombinera dagen',
      intro:
        'Stranden är en del av dagen; före och efter hör byn till.',
      baseDecision: {
        before:
          'Frigiliana är fortfarande en naturlig bas när stranden är en dagsutflykt. Om ni hellre vill kunna promenera spontant till havet ',
        linkLabel: 'ligger AMARA Playa i Nerja 200 m från Torrecillastranden',
        after: '.',
        linkToken: 'playa'
      },
      items: [
        {
          title: 'Från hav till berg',
          text:
            'Ett tidigt dopp och sedan en promenad ovanför Frigiliana; de långa rutterna i Sierra Almijara väntar på en svalare dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        },
        {
          title: 'Säsong och väder',
          text:
            'Klimatet säger när ni kommer; vind och hav säger om det är stranddag i dag. Båda finns i väderguiden med AEMET-prognosen.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Jämför väder och årstider'
        },
        {
          title: 'Kombinera Burriana med en restaurang dagtid',
          text:
            'Vid Burriana ligger strand och lunch sida vid sida: AYO på Paseo Burriana, paella från den stora pannan, sedan årtionden.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        },
        {
          title: 'Låt en strandeftermiddag i centrala Nerja bli en sundowner',
          text:
            'Slutar kustdagen nära gamla stan går ni vidare till Cochran’s Terrace. Där såg vi solnedgången sommaren 2025, med en Cuba Libre och en Mai Tai.',
          linkToken: 'nerja_nightlife_authority',
          linkLabel: 'Se vår sundowner i Nerja'
        },
        {
          title: 'Vilka veckor är lediga?',
          text:
            'Kusten är en annan dag i maj än i augusti. Vad som är ledigt era datum visas med totalpriset för de nätterna.',
          linkToken: 'stay_search_results',
          linkLabel: 'Se vad som är ledigt era datum'
        }
      ]
    },
    closing: {
      title: 'Strandvägen som passar er dag',
      lead:
        'Torrecilla ligger plant vid centrum, Carabeo har trappsteg, från Burriana är det uppför tillbaka. AMARA Playa står 200 meter från Torrecilla: strand, dusch, kväll i gamla stan, allt till fots.',
      nextCta: 'Vägar mellan Nerjas stränder och centrum'
    }
  }
};
