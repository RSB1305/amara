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
  languages: {
    en: {
      title: 'Beaches near Frigiliana & Nerja: Coastal Guide',
      description:
        'Compare six beaches near Frigiliana, Nerja and Maro, with honest advice on atmosphere, sea conditions, access, parking and when to go.',
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
        'Compara seis playas de Frigiliana, Nerja y Maro con consejos sinceros sobre ambiente, estado del mar, acceso, aparcamiento y mejor momento.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Stranden bij Frigiliana & Nerja: kustgids',
      description:
        'Vergelijk zes stranden bij Frigiliana, Nerja en Maro, met eerlijk advies over sfeer, zeecondities, bereikbaarheid, parkeren en timing.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Stränder nära Frigiliana & Nerja: kustguide',
      description:
        'Jämför sex stränder nära Frigiliana, Nerja och Maro med ärliga råd om känsla, havsförhållanden, tillgänglighet, parkering och tidpunkt.',
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
      subtitle: 'Compare access and sea conditions',
      paragraphs: [
        'From Frigiliana, every beach involves a drive down to the coast. From Nerja, the town beaches are close at hand and the Maro coves are a short trip east.',
        'Access, parking, shade, facilities and exposure to the sea differ sharply between the six beaches below. Check current conditions before leaving, especially for the natural coves.',
        'This is our honest shortlist for couples: six beaches, what each one does well, and what is worth knowing before you set out.'
      ],
      imageAlt:
        'Palm trees and the Mediterranean coast near AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'Choose your coast',
      quiet: 'Quiet coves',
      nature: 'Nature & water',
      nerja: 'Nerja classics',
      conditions: 'Conditions',
      practical: 'Good to know'
    },
    overview: {
      title: 'Town beaches in Nerja or natural coves near Maro?',
      intro:
        'Nerja and Maro sit close together on the map, yet they rarely offer the same kind of beach day. The best choice depends less on rankings than on timing, conditions and how much comfort you want.',
      items: [
        {
          title: 'Nerja',
          text:
            'Compact, visually striking beaches woven into town life. They are at their best early, later in the afternoon or beyond the busiest summer weeks.'
        },
        {
          title: 'Maro & the natural park',
          text:
            'A more open, protected coastline of cliffs, pebbly coves and clear-water potential. It rewards preparation and calm conditions.'
        },
        {
          title: 'Sea conditions',
          text:
            'Sunshine alone does not guarantee calm water. Wind and air movement can change clarity, surface and comfort from one day to the next.'
        },
        {
          title: 'The honest trade-off',
          text:
            'Facilities bring ease and more people. Wilder settings ask for more effort. Clearer water often comes with fewer services and less direct access.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Quiet coves & unhurried afternoons',
        intro:
          'These are the places we choose when the aim is a swim, a picnic or a few slow hours rather than a full-service beach day.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Nature, snorkelling & kayak days',
        intro:
          'East of Nerja, the protected Maro–Cerro Gordo coast is less developed and more dependent on the sea. Come for cliffs, open water and landscape rather than guaranteed convenience.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Classic Nerja & easy full beach days',
        intro:
          'Choose these when town, facilities and the beach should fit into one simple day. They are less secluded, but much easier to combine with lunch, a walk or the old centre.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'What changes a beach day',
      intro:
        'The same beach can feel completely different two days in a row. A little attention to timing and conditions is more useful here than chasing a definitive “best beach”.',
      items: [
        {
          title: 'Timing matters',
          text:
            'Small coves keep their character while there is space. In high season, early morning and late afternoon are usually calmer than the middle of the day.'
        },
        {
          title: 'Calm water is not guaranteed',
          text:
            'Air movement often shapes the sea more than temperature. A bright day can still bring chop or reduced visibility, so decide on snorkelling and kayaking when you arrive.'
        },
        {
          title: 'Maro’s waterfalls are seasonal',
          text:
            'The cliff waterfalls appear mainly after sustained rain, often in spring. During dry summer periods much of the water never reaches the coast; the landscape remains beautiful without them.'
        },
        {
          title: 'Comfort and nature rarely overlap',
          text:
            'Easy access and services usually mean more people. The quieter, clearer-water choices tend to involve pebbles, fewer facilities or a little more planning.'
        }
      ]
    },
    practical: {
      title: 'Practical essentials',
      intro:
        'A little preparation is enough to keep the day easy, especially around Maro and the natural park.',
      items: [
        {
          title: 'Parking',
          text:
            'Spaces are limited at Maro and the wilder coves. In high season, arrive before 10:00 or later in the afternoon, and always follow local access signs.'
        },
        {
          title: 'Gear',
          text:
            'Bring your own snorkelling gear for Maro and the quieter coves. The larger town beaches are the easier choice if you prefer rental shops and services nearby.'
        },
        {
          title: 'Food',
          text:
            'Choose Burriana for a long paella lunch, Cantarriján for fresh fish and central Nerja when tapas after the beach matters more than eating on the sand.'
        }
      ],
      accessNote: {
        before:
          'Summer vehicle access to Cantarriján can be regulated. Before setting out, check the ',
        label: 'current visitor information from the Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combine your day',
      intro:
        'The coast works especially well when the beach is one part of the day rather than the whole plan.',
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
            'Pair an early swim with an afternoon walk above Frigiliana, or save the longer Sierra Almijara routes for a cooler day.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        },
        {
          title: 'Choose the season first, then check the beach day',
          text:
            'The climate pattern helps you choose travel dates; it does not decide today’s swim. Check current heat, wind and sea conditions separately before choosing a beach, and use the weather guide for the seasonal context and AEMET forecast.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Compare weather and seasons'
        },
        {
          title: 'Combine Burriana with a daytime restaurant',
          text:
            'Burriana’s service profile keeps the beach and lunch in one place. AYO is directly on Paseo Burriana as a daytime option; check current operation before planning the beach day around it.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        },
        {
          title: 'Let a central Nerja beach afternoon become a sundowner',
          text:
            'If your coast day ends near Nerja’s old town, continue on foot to Cochran’s Terrace rather than treating sunset as a separate excursion. We watched it there ourselves in summer 2025; check current opening and terrace access before relying on the plan.',
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
        'When you want to combine the beach and town centre in one day, we look closely at the return route because it shapes your pace. Torrecilla connects comparatively easily with the centre, Carabeo often adds steps, and the return from Burriana is more demanding.',
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
      subtitle: 'Comparar acceso y estado del mar',
      paragraphs: [
        'Desde Frigiliana hay que bajar en coche para ir a cualquier playa. En Nerja, las playas urbanas quedan cerca y las calas de Maro están a un corto trayecto hacia el este.',
        'El acceso, el aparcamiento, la sombra, los servicios y la exposición al mar cambian mucho entre estas seis playas. Comprobad las condiciones antes de salir, sobre todo para las calas naturales.',
        'Esta es nuestra selección sincera para parejas: seis playas, lo mejor de cada una y lo que merece la pena saber antes de salir.'
      ],
      imageAlt:
        'Palmeras y costa mediterránea cerca de AMARA Playa en Nerja'
    },
    sectionNav: {
      coast: 'Elegir costa',
      quiet: 'Calas tranquilas',
      nature: 'Naturaleza y mar',
      nerja: 'Clásicos de Nerja',
      conditions: 'Condiciones',
      practical: 'Datos prácticos'
    },
    overview: {
      title: '¿Playas urbanas de Nerja o calas naturales de Maro?',
      intro:
        'Nerja y Maro están muy cerca en el mapa, pero rara vez ofrecen el mismo tipo de día. La mejor elección depende menos de los rankings que de la hora, el estado del mar y el nivel de comodidad que buscáis.',
      items: [
        {
          title: 'Nerja',
          text:
            'Playas compactas y muy visuales, integradas en la vida del pueblo. Se disfrutan más a primera hora, al final de la tarde o fuera de las semanas más concurridas del verano.'
        },
        {
          title: 'Maro y el paraje natural',
          text:
            'Una costa protegida, más abierta, con acantilados, calas de guijarros y posibilidades de agua especialmente clara. Premia la preparación y un mar en calma.'
        },
        {
          title: 'El estado del mar',
          text:
            'El sol no garantiza que el agua esté tranquila. El viento puede cambiar la visibilidad, la superficie y la sensación de baño de un día para otro.'
        },
        {
          title: 'La contrapartida real',
          text:
            'Los servicios aportan comodidad y también más gente. La naturaleza exige algo más de esfuerzo. El agua más clara suele venir con menos infraestructura y un acceso menos directo.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Calas tranquilas y tardes sin prisa',
        intro:
          'Son nuestras opciones para un baño, un pícnic o unas horas de calma, más que para pasar todo el día rodeados de servicios.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Naturaleza, snorkel y días de kayak',
        intro:
          'Al este de Nerja, la costa protegida de Maro–Cerro Gordo está menos urbanizada y depende mucho más del mar. Venid por los acantilados, el agua abierta y el paisaje, no por una comodidad garantizada.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Clásicos de Nerja y días de playa fáciles',
        intro:
          'Elegid estas playas cuando queráis reunir pueblo, servicios y mar en un solo día. Son menos solitarias, pero se combinan fácilmente con una comida, un paseo o el casco antiguo.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Lo que realmente cambia un día de playa',
      intro:
        'La misma playa puede sentirse completamente distinta en dos días consecutivos. Fijarse en la hora y las condiciones resulta más útil que perseguir una supuesta “mejor playa”.',
      items: [
        {
          title: 'La hora importa',
          text:
            'Las calas pequeñas conservan su encanto mientras queda espacio. En temporada alta, la mañana temprano y el final de la tarde suelen ser más tranquilos que el mediodía.'
        },
        {
          title: 'El agua tranquila no está garantizada',
          text:
            'El movimiento del aire condiciona el mar más que la temperatura. Un día soleado también puede traer oleaje o poca visibilidad; decidid sobre snorkel y kayak al llegar.'
        },
        {
          title: 'Las cascadas de Maro son estacionales',
          text:
            'Aparecen sobre todo después de lluvias continuadas, a menudo en primavera. Durante el verano seco gran parte del agua no llega a la costa; el paisaje sigue mereciendo la visita sin cascadas.'
        },
        {
          title: 'Comodidad y naturaleza rara vez coinciden',
          text:
            'El acceso sencillo y los servicios suelen atraer a más gente. Las opciones tranquilas y de agua clara normalmente implican guijarros, menos equipamiento o algo más de planificación.'
        }
      ]
    },
    practical: {
      title: 'Datos prácticos',
      intro:
        'Un poco de preparación basta para que el día resulte sencillo, especialmente en Maro y dentro del paraje natural.',
      items: [
        {
          title: 'Aparcamiento',
          text:
            'Las plazas son limitadas en Maro y las calas más naturales. En temporada alta, llegad antes de las 10:00 o a última hora de la tarde y respetad siempre la señalización local.'
        },
        {
          title: 'Equipo',
          text:
            'Llevad vuestro propio equipo de snorkel para Maro y las calas tranquilas. Las playas grandes del pueblo son más cómodas si preferís alquileres y servicios cercanos.'
        },
        {
          title: 'Dónde comer',
          text:
            'Burriana para una paella sin prisa, Cantarriján para pescado fresco y el centro de Nerja cuando apetece más tomar tapas después del baño que comer sobre la arena.'
        }
      ],
      accessNote: {
        before:
          'En verano puede regularse el acceso de vehículos a Cantarriján. Antes de salir, consultad la ',
        label: 'información actual para visitantes de la Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combinad el día',
      intro:
        'La costa funciona especialmente bien cuando la playa forma parte del día sin convertirse en todo el programa.',
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
            'Combinad un baño temprano con un paseo sobre Frigiliana, o reservad las rutas largas de la Sierra Almijara para un día más fresco.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        },
        {
          title: 'Elegid primero la época y comprobad después el día de playa',
          text:
            'El patrón climático ayuda a elegir las fechas, pero no decide el baño de hoy. Comprobad por separado el calor, el viento y el estado actual del mar antes de elegir playa, y usad la guía del tiempo para el contexto estacional y la previsión de AEMET.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Comparar tiempo y estaciones'
        },
        {
          title: 'Combinar Burriana con un restaurante de día',
          text:
            'El perfil de servicios de Burriana permite mantener playa y comida en un mismo lugar. AYO está directamente en Paseo Burriana como opción diurna; comprobad su actividad actual antes de planificar el día en torno al local.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        },
        {
          title: 'Convertir una tarde de playa en el centro en un atardecer',
          text:
            'Si el día de costa termina cerca del casco antiguo de Nerja, seguid a pie hasta Cochran’s Terrace en lugar de plantear la puesta de sol como otra excursión. La vimos allí personalmente en verano de 2025; comprobad la apertura y el acceso actual a la terraza.',
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
        'Cuando queréis combinar playa y centro en un mismo día, nos fijamos especialmente en el camino de vuelta porque marca vuestro ritmo. Torrecilla conecta con el centro con relativa facilidad, Carabeo suele añadir escaleras y el regreso desde Burriana resulta más exigente.',
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
      subtitle: 'Vergelijk bereikbaarheid en zeecondities',
      paragraphs: [
        'Vanuit Frigiliana rijden jullie voor elk strand naar beneden, naar de kust. In Nerja liggen de stadsstranden dichtbij; de baaien bij Maro liggen een korte rit naar het oosten.',
        'Bereikbaarheid, parkeren, schaduw, voorzieningen en blootstelling aan zee verschillen sterk tussen deze zes stranden. Controleer vóór vertrek de actuele omstandigheden, vooral bij de natuurbaaien.',
        'Dit is onze eerlijke selectie voor koppels: zes stranden, hun sterke kanten en wat jullie vooraf echt willen weten.'
      ],
      imageAlt:
        'Palmbomen en de Middellandse Zeekust bij AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'Kust kiezen',
      quiet: 'Rustige baaien',
      nature: 'Natuur & water',
      nerja: 'Nerja-klassiekers',
      conditions: 'Omstandigheden',
      practical: 'Praktisch'
    },
    overview: {
      title: 'Stadsstranden in Nerja of natuurbaaien bij Maro?',
      intro:
        'Nerja en Maro liggen vlak bij elkaar, maar voelen zelden hetzelfde. De beste keuze draait minder om ranglijstjes dan om timing, zeecondities en hoeveel comfort jullie die dag zoeken.',
      items: [
        {
          title: 'Nerja',
          text:
            'Compacte, karaktervolle stranden die deel uitmaken van het stadsleven. Ze zijn op hun best vroeg, later in de middag of buiten de drukste zomerweken.'
        },
        {
          title: 'Maro & het natuurgebied',
          text:
            'Een opener, beschermd kustlandschap met kliffen, kiezelbaaien en kans op opvallend helder water. Voorbereiding en een kalme zee worden beloond.'
        },
        {
          title: 'De toestand van de zee',
          text:
            'Zon alleen garandeert geen rustig water. Wind en luchtstroming kunnen zicht, golfslag en zwemcomfort van dag tot dag veranderen.'
        },
        {
          title: 'De eerlijke afweging',
          text:
            'Voorzieningen geven gemak én trekken mensen. Natuur vraagt wat meer moeite. Helderder water gaat vaak samen met minder service en een minder directe toegang.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Rustige baaien & trage middagen',
        intro:
          'Dit zijn onze keuzes voor een zwembeurt, een picknick of een paar kalme uren — niet voor een volledig georganiseerde stranddag.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Natuur, snorkelen & kajakken',
        intro:
          'Ten oosten van Nerja is de beschermde kust van Maro–Cerro Gordo minder ontwikkeld en sterker afhankelijk van de zee. Kom voor kliffen, open water en landschap, niet voor gegarandeerd gemak.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiekers & gemakkelijke stranddagen',
        intro:
          'Kies deze stranden als stad, voorzieningen en zee in één eenvoudige dag moeten passen. Ze zijn minder afgelegen, maar gemakkelijk te combineren met lunch, een wandeling of het oude centrum.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Wat een stranddag werkelijk verandert',
      intro:
        'Hetzelfde strand kan twee dagen achter elkaar totaal anders aanvoelen. Een beetje aandacht voor timing en omstandigheden helpt hier meer dan zoeken naar dat ene “beste strand”.',
      items: [
        {
          title: 'Timing telt',
          text:
            'Kleine baaien houden hun karakter zolang er ruimte is. In het hoogseizoen zijn de vroege ochtend en late middag meestal rustiger dan het midden van de dag.'
        },
        {
          title: 'Kalm water is niet vanzelfsprekend',
          text:
            'Luchtbeweging bepaalt de zee vaak sterker dan temperatuur. Ook een zonnige dag kan golven of minder zicht geven; beslis daarom pas ter plaatse over snorkelen en kajakken.'
        },
        {
          title: 'De watervallen van Maro zijn seizoensgebonden',
          text:
            'Ze verschijnen vooral na aanhoudende regen, vaak in het voorjaar. In droge zomermaanden bereikt veel water de kust niet; het landschap blijft ook zonder watervallen de moeite waard.'
        },
        {
          title: 'Comfort en natuur vallen zelden samen',
          text:
            'Gemakkelijke toegang en veel voorzieningen betekenen meestal meer mensen. Rustigere plekken met helder water vragen vaker om kiezels, minder service of wat extra planning.'
        }
      ]
    },
    practical: {
      title: 'Praktische aandachtspunten',
      intro:
        'Met een kleine voorbereiding blijft de dag eenvoudig, vooral rond Maro en in het beschermde natuurgebied.',
      items: [
        {
          title: 'Parkeren',
          text:
            'Bij Maro en de wildere baaien zijn plaatsen beperkt. Kom in het hoogseizoen vóór 10.00 uur of later in de middag en volg altijd de lokale toegangs- en parkeerborden.'
        },
        {
          title: 'Uitrusting',
          text:
            'Neem voor Maro en de rustige baaien jullie eigen snorkelspullen mee. De grotere stadsstranden zijn makkelijker als jullie verhuur en voorzieningen dichtbij willen.'
        },
        {
          title: 'Eten',
          text:
            'Kies Burriana voor een lange paellalunch, Cantarriján voor verse vis en het centrum van Nerja wanneer tapas na het strand belangrijker zijn dan eten op het zand.'
        }
      ],
      accessNote: {
        before:
          'In de zomer kan de autotoegang tot Cantarriján worden gereguleerd. Bekijk voor vertrek de ',
        label: 'actuele bezoekersinformatie van de Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Combineer jullie dag',
      intro:
        'De kust werkt bijzonder goed wanneer het strand een onderdeel van de dag is en niet het volledige programma.',
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
            'Combineer een vroege duik met een wandeling boven Frigiliana, of bewaar de langere routes in de Sierra Almijara voor een koelere dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        },
        {
          title: 'Kies eerst het seizoen en controleer dan de stranddag',
          text:
            'Het klimaatpatroon helpt bij het kiezen van reisdata, maar beslist niet over vandaag zwemmen. Controleer actuele hitte, wind en zeecondities afzonderlijk voordat jullie een strand kiezen en gebruik de weergids voor seizoenscontext en de AEMET-verwachting.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Vergelijk weer en seizoenen'
        },
        {
          title: 'Combineer Burriana met een restaurant voor overdag',
          text:
            'Burriana’s voorzieningenprofiel houdt strand en lunch op één plek. AYO ligt direct aan Paseo Burriana als optie voor overdag; controleer de actuele werking voordat jullie de stranddag eromheen plannen.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        },
        {
          title: 'Laat een strandmiddag in centraal Nerja overgaan in een sundowner',
          text:
            'Eindigt jullie kustdag bij de oude stad van Nerja, loop dan door naar Cochran’s Terrace in plaats van van de zonsondergang een nieuwe uitstap te maken. Wij zagen hem daar zelf in de zomer van 2025; controleer vooraf de actuele opening en toegang tot het terras.',
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
        'Willen jullie strand en centrum op één dag combineren, dan letten we vooral op de terugweg, omdat die jullie tempo bepaalt. Torrecilla sluit relatief gemakkelijk aan op het centrum, Carabeo brengt vaak trappen mee en de terugweg vanaf Burriana is zwaarder.',
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
      subtitle: 'Jämför tillgång och havsförhållanden',
      paragraphs: [
        'Från Frigiliana behöver ni köra ner till kusten för alla stränder. I Nerja ligger stadsstränderna nära; vikarna vid Maro ligger en kort bit österut.',
        'Tillgång, parkering, skugga, service och exponering mot havet skiljer sig tydligt mellan de sex stränderna. Kontrollera aktuella förhållanden före avfärd, särskilt vid naturvikarna.',
        'Här är vår ärliga lista för par: sex stränder, vad var och en gör bäst och vad som är bra att veta innan ni åker.'
      ],
      imageAlt:
        'Palmer och Medelhavskust nära AMARA Playa i Nerja'
    },
    sectionNav: {
      coast: 'Välj kust',
      quiet: 'Lugna vikar',
      nature: 'Natur & vatten',
      nerja: 'Nerja-klassiker',
      conditions: 'Förhållanden',
      practical: 'Bra att veta'
    },
    overview: {
      title: 'Stadsstränder i Nerja eller naturvikar vid Maro?',
      intro:
        'Nerja och Maro ligger nära varandra på kartan men känns sällan likadana. Det bästa valet handlar mindre om topplistor och mer om tidpunkt, havsförhållanden och hur mycket bekvämlighet ni vill ha.',
      items: [
        {
          title: 'Nerja',
          text:
            'Kompakta, karaktärsfulla stränder som är tätt sammanvävda med stadslivet. De är som bäst tidigt, senare på eftermiddagen eller utanför sommarens mest intensiva veckor.'
        },
        {
          title: 'Maro & naturområdet',
          text:
            'En öppnare, skyddad kust med klippor, klapperstensvikar och möjlighet till ovanligt klart vatten. Förberedelser och lugn sjö gör stor skillnad.'
        },
        {
          title: 'Havsförhållanden',
          text:
            'Sol garanterar inte lugnt vatten. Vind och luftrörelser kan förändra sikt, vågor och badkänsla från en dag till nästa.'
        },
        {
          title: 'Den ärliga avvägningen',
          text:
            'Service ger enkelhet och fler människor. Natur kräver lite mer ansträngning. Klarare vatten kommer ofta med färre bekvämligheter och mindre direkt tillgång.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Lugna vikar & långsamma eftermiddagar',
        intro:
          'Hit går vi för en simtur, en picknick eller några stilla timmar — inte för en fullt organiserad heldag på stranden.',
        beachIds: ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo']
      },
      {
        id: 'nature',
        title: 'Natur, snorkling & kajakdagar',
        intro:
          'Öster om Nerja är den skyddade Maro–Cerro Gordo-kusten mindre exploaterad och mer beroende av havet. Kom för klipporna, det öppna vattnet och landskapet, inte för garanterad bekvämlighet.',
        beachIds: ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan']
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiker & enkla heldagar',
        intro:
          'Välj dessa stränder när stad, service och hav ska rymmas i en enkel dag. De är mindre avskilda men lätta att kombinera med lunch, promenad eller den gamla stadskärnan.',
        beachIds: ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach']
      }
    ],
    conditions: {
      title: 'Det som faktiskt förändrar en stranddag',
      intro:
        'Samma strand kan kännas helt annorlunda två dagar i rad. Lite uppmärksamhet på tid och förhållanden hjälper mer än jakten på en enda “bästa strand”.',
      items: [
        {
          title: 'Tidpunkten spelar roll',
          text:
            'Små vikar behåller sin karaktär så länge det finns plats. Under högsäsong är tidig morgon och sen eftermiddag oftast lugnare än mitt på dagen.'
        },
        {
          title: 'Lugnt vatten är ingen garanti',
          text:
            'Luftrörelser formar ofta havet mer än temperaturen. Även en solig dag kan ge vågor eller sämre sikt; avgör därför snorkling och kajak när ni kommer fram.'
        },
        {
          title: 'Maros vattenfall är säsongsbundna',
          text:
            'De visar sig främst efter ihållande regn, ofta på våren. Under torra sommarmånader når mycket av vattnet aldrig kusten; landskapet är fortfarande vackert utan vattenfallen.'
        },
        {
          title: 'Bekvämlighet och natur möts sällan',
          text:
            'Enkel tillgång och mycket service innebär oftast fler människor. Lugnare val med klart vatten betyder oftare klappersten, färre bekvämligheter eller lite mer planering.'
        }
      ]
    },
    practical: {
      title: 'Praktiskt inför stranddagen',
      intro:
        'Lite förberedelse räcker för att dagen ska kännas enkel, särskilt runt Maro och i det skyddade naturområdet.',
      items: [
        {
          title: 'Parkering',
          text:
            'Platserna är begränsade vid Maro och de vildare vikarna. Under högsäsong är det bäst att komma före klockan 10 eller senare på eftermiddagen och alltid följa lokal skyltning.'
        },
        {
          title: 'Utrustning',
          text:
            'Ta med egen snorkelutrustning till Maro och de lugnare vikarna. De större stadsstränderna är enklare om ni föredrar uthyrning och service i närheten.'
        },
        {
          title: 'Mat',
          text:
            'Välj Burriana för en lång paellalunch, Cantarriján för färsk fisk och centrala Nerja när tapas efter stranden lockar mer än att äta direkt på sanden.'
        }
      ],
      accessNote: {
        before:
          'Sommartid kan biltrafiken till Cantarriján regleras. Kontrollera före avfärd den ',
        label: 'aktuella besöksinformationen från Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'Kombinera dagen',
      intro:
        'Kusten fungerar särskilt bra när stranden är en del av dagen och inte hela programmet.',
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
            'Kombinera ett tidigt dopp med en promenad ovanför Frigiliana, eller spara de längre lederna i Sierra Almijara till en svalare dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        },
        {
          title: 'Välj först årstid och kontrollera sedan stranddagen',
          text:
            'Klimatmönstret hjälper er att välja resdatum men avgör inte dagens bad. Kontrollera aktuell hetta, vind och havsläge var för sig innan ni väljer strand och använd väderguiden för säsongssammanhang och AEMET-prognos.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Jämför väder och årstider'
        },
        {
          title: 'Kombinera Burriana med en restaurang dagtid',
          text:
            'Burrianas serviceprofil håller stranden och lunchen på samma plats. AYO ligger direkt på Paseo Burriana som ett alternativ dagtid; kontrollera aktuell verksamhet innan ni planerar stranddagen kring restaurangen.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        },
        {
          title: 'Låt en strandeftermiddag i centrala Nerja bli en sundowner',
          text:
            'Om kustdagen slutar nära Nerjas gamla stad kan ni promenera vidare till Cochran’s Terrace i stället för att göra solnedgången till en ny utflykt. Vi såg den där själva sommaren 2025; kontrollera aktuell öppning och tillträde till terrassen innan ni bygger planen kring den.',
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
        'När ni vill kombinera stranden och centrum under samma dag tittar vi särskilt på vägen tillbaka, eftersom den påverkar ert tempo. Torrecilla har en relativt enkel koppling till centrum, Carabeo innebär ofta trappor och vägen tillbaka från Burriana är mer krävande.',
      nextCta: 'Vägar mellan Nerjas stränder och centrum'
    }
  }
};
