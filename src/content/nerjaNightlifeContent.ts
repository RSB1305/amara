import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

interface NightlifeArea {
  title: string;
  paragraphs: string[];
  bestFor: string;
  mapHref: string;
}

export interface NerjaNightlifePageCopy {
  cardLabels: {
    bestFor: string;
    map: string;
  };
  footerHighlights: {
    nightlife: string;
    nerja: string;
    apartments: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    /** Dark hero-tile summary: a short takeaway plus a mini table of contents. */
    summary?: {
      eyebrow: string;
      body: string;
      items: Array<{ id: string; label: string; value: string }>;
    };
  };
  sectionNav: {
    overview: string;
    areas: string;
    styles: string;
    culture: string;
    seasons: string;
    planning: string;
    faq: string;
  };
  overview: {
    kicker: string;
    title: string;
    intro: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  areas: {
    title: string;
    intro: string;
    items: NightlifeArea[];
  };
  areaComparison: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  eveningStyles: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  culture: {
    title: string;
    paragraphs: string[];
    items: {
      title: string;
      text: string;
      href: string;
      linkLabel: string;
    }[];
  };
  seasonality: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  travelerFit: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  plans: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    transportNote: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'nerja_food_authority'
        | 'nerja_experience_hub';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    availabilityCta: string;
    apartmentsCta: string;
    /** The chain to the stay; the lead above argues about the town, not about us. */
    stayReason: string;
  };
}

const maps = {
  tuttiFrutti:
    'https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja',
  balcon:
    'https://maps.app.goo.gl/cSVGuSWBMMRCs5m77',
  burriana:
    'https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja',
  flamenco:
    'https://www.google.com/maps/search/?api=1&query=flamenco+Nerja'
} as const;

const nerjaCultureProgramme = 'https://cultura.nerja.es/';

export const nerjaNightlifeSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-nerja-nightlife-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja.experience.nightlife'),
  article: {
    datePublished: '2026-07-29',
    dateModified: '2026-09-09',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Nerja in the evening: Balcón, Tutti Frutti & Burriana',
      description:
        'The evening in Nerja: sundowner at the Balcón, bars on Plaza Tutti Frutti, beach restaurants in Burriana, plus flamenco and cultural evenings.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja am Abend: Balcón, Tutti Frutti & Burriana',
      description:
        'Der Abend in Nerja: Sundowner am Balcón, Bars an der Plaza Tutti Frutti, Strandlokale in Burriana, dazu Flamenco und Kulturabende.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Nerja por la noche: Balcón, Tutti Frutti y Burriana',
      description:
        'La noche en Nerja: atardecer con copa en el Balcón, bares en la Plaza Tutti Frutti, chiringuitos en Burriana, además de flamenco y noches de cultura.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Nerja ’s avonds: Balcón, Tutti Frutti & Burriana',
      description:
        'De avond in Nerja: sundowner aan de Balcón, bars op Plaza Tutti Frutti, strandtenten in Burriana, plus flamenco en cultuuravonden.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nerja på kvällen: Balcón, Tutti Frutti & Burriana',
      description:
        'Kvällen i Nerja: sundowner vid Balcón, barer på Plaza Tutti Frutti, strandrestauranger i Burriana, plus flamenco och kulturkvällar.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve every area distinction, seasonal qualification and
 * planning caveat while using natural guest-facing language in each market.
 */
export const nerjaNightlifeContent: Record<
  AmaraLanguage,
  NerjaNightlifePageCopy
> = {
  en: {
    cardLabels: {
      bestFor: 'Best for',
      map: 'View on map'
    },
    footerHighlights: {
      nightlife: 'Nightlife & evenings',
      nerja: 'Nerja guide',
      apartments: 'AMARA Playa'
    },
    hero: {
      kicker: 'Nerja in the evening',
      title:
        'Nerja after sunset',
      paragraphs: [
        'The evening in Nerja begins on a terrace, with fish or tapas and the view from the Balcón over the sea. Later it wanders into the lanes, and whoever is not ready to go home ends up at Plaza Tutti Frutti, where the bars stand door to door.',
        'Instead of big clubs, Nerja has three corners that each make their own evening: Balcón and old town for dinner and the sundowner, Plaza Tutti Frutti for the late hour, Burriana for evenings with your feet in the sand.',
        'If you are staying with us in Frigiliana, best order the taxi for the way back before the evening; the way between the towns is a drive, not a walk.'
      ],
      imageAlt:
        'Calm AMARA Playa interior as a base for evenings in coastal Nerja',
      summary: {
        eyebrow: 'On this page',
        body:
          'Three corners for the evening, a sundowner we drink ourselves, and flamenco when the programme fits.',
        items: [
          { id: 'late-night', label: 'Late hour', value: 'Plaza Tutti Frutti' },
          { id: 'view', label: 'With a view', value: 'Balcón & old town' },
          { id: 'water', label: 'By the water', value: 'Burriana' },
          { id: 'reviewed', label: 'Reviewed', value: 'July 2026' }
        ]
      }
    },
    sectionNav: {
      overview: 'Quick answer',
      areas: 'Main areas',
      styles: 'Evening styles',
      culture: 'Culture',
      seasons: 'Seasons',
      planning: 'Plan a night',
      faq: 'FAQ'
    },
    overview: {
      kicker: 'Quick answer',
      title: 'Is Nerja good for nightlife?',
      intro:
        'Yes, if you want dinner, terraces, cocktail bars and one compact late-night area within the same town. Choose another destination if large clubs until sunrise are the main reason for the trip.',
      reviewed: 'As of July 2026',
      items: [
        {
          title: 'Best for',
          text:
            'Couples, mixed groups, scenic evenings, terrace drinks and nights that move naturally from tapas to cocktails.'
        },
        {
          title: 'Main late-night zone',
          text:
            'Plaza Tutti Frutti and the nearby central streets, where bars sit close together and the atmosphere grows later.'
        },
        {
          title: 'Best scenic zone',
          text:
            'Balcón de Europa and the old town for sunset, dinner, wine bars and a polished evening without formality.'
        },
        {
          title: 'Best coastal zone',
          text:
            'Burriana for dinner by the beach and open-air drinks in the warmer months.'
        }
      ]
    },
    areas: {
      title: 'Three corners, three evenings',
      intro:
        'The old town for the start, Plaza Tutti Frutti for later, Burriana for summer. All on foot.',
      items: [
        {
          title: 'Plaza Tutti Frutti, the late hour',
          paragraphs: [
            'A small square with bars door to door around it. Early in the evening it is still quiet here; later the square fills, the music gets louder, and you move from one bar to the next without leaving the street.',
            'Come here when the evening should carry on after dinner.'
          ],
          bestFor:
            'Bar-hopping, groups, late starts.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            'Balcón and old town, our sundowner',
          paragraphs: [
            'The Balcón de Europa is the stage; the lanes behind it are the evening: terraces, wine bars, small restaurants where sunset turns into a drink and the drink into dinner.',
            'Our sundowner: from AMARA Playa on foot into the centre, onto the terrace at Cochran’s, Cuba Libre and Mai Tai, the sun goes down, the sea turns dark. In summer 2025 that is how we did it, and we will do it again.'
          ],
          bestFor:
            'Couples, sunset, wine, terraces, quiet cocktails.',
          mapHref: maps.balcon
        },
        {
          title: 'Burriana, evenings by the sea',
          paragraphs: [
            'The beach day flows into the evening: a table at the chiringuito, espetos from the fire, a drink while the sand cools.',
            'In summer the beach restaurants stay open late; in winter Burriana in the evening belongs to the walkers.'
          ],
          bestFor:
            'Summer evenings, beach restaurants, quieter nights.',
          mapHref: maps.burriana
        }
      ]
    },
    areaComparison: {
      title: 'Which area suits which kind of evening?',
      intro:
        'There is no single best nightlife zone. The useful answer depends on who you are with and how lively you want the second half of the night to become.',
      items: [
        {
          title: 'Best for couples',
          text:
            'The Balcón de Europa and old town usually win for their combination of scenery, walkability, drinks and dinner.'
        },
        {
          title: 'Best for bar-hopping',
          text:
            'Plaza Tutti Frutti is the clearest answer because the concentration of venues makes it easy to move from one stop to the next.'
        },
        {
          title: 'Best for relaxed nights',
          text:
            'Burriana suits beach dinners and open-air drinks, especially on warm evenings.'
        },
        {
          title: 'Best all-round strategy',
          text:
            'Start around the Balcón or old town for sunset and dinner, then move to Plaza Tutti Frutti only if you want later bars.'
        }
      ]
    },
    eveningStyles: {
      title: 'The kinds of nightlife Nerja does best',
      intro:
        'Food, views and bars sit close enough together to keep plans flexible. Start with dinner and decide later whether to continue.',
      items: [
        {
          title: 'Tapas first, drinks after',
          text:
            'Begin with seafood or tapas and only then decide whether to continue to cocktails or a busier bar area. It feels local, flexible and complete without requiring a big night out.'
        },
        {
          title: 'Cocktails and terraces',
          text:
            'One beautiful terrace, a good drink and a setting worth staying in are often enough. This is one of Nerja’s most natural evening formats.'
        },
        {
          title: 'A beach-led evening',
          text:
            'In warmer months, stay near the coast for dinner and open-air drinks instead of moving into the central bar area.'
        },
        {
          title: 'A later, more social bar night',
          text:
            'Nerja can still become louder and younger. The key is choosing the central zone and arriving at the right time rather than expecting the whole town to feel like a party strip.'
        }
      ]
    },
    culture: {
      title: 'Flamenco and cultural evenings',
      paragraphs: [
        'Besides bars, Nerja also has stages. Flamenco happens in small venues and at the fiestas; the Centro Cultural Villa de Nerja shows music, dance and theatre.',
        'Programmes change with the season; the current one is linked here.'
      ],
      items: [
        {
          title: 'Flamenco nights',
          text:
            'Small tablaos, fiestas and summer evenings; the dates change.',
          href: maps.flamenco,
          linkLabel: 'Search flamenco in Nerja'
        },
        {
          title: 'Centro Cultural Villa de Nerja',
          text:
            'Music, dance, theatre and the seasonal programme at the town’s cultural centre.',
          href: nerjaCultureProgramme,
          linkLabel: 'To the programme'
        }
      ]
    },
    seasonality: {
      title: 'How nightlife in Nerja changes by season',
      intro:
        'Nerja does not rely on one year-round formula. The same evening can feel very different in August, October or January while remaining recognizably Nerja.',
      items: [
        {
          title: 'Summer',
          text:
            'The town feels fuller, evenings start later, terraces stay active longer and Burriana becomes more rewarding.'
        },
        {
          title: 'Shoulder season',
          text:
            'Enough venues remain active for dinner and drinks, usually with fewer crowds than summer.'
        },
        {
          title: 'Winter',
          text:
            'The nightlife layer becomes smaller and more selective, but the town remains sociable. Fewer places carry more of the evening energy.'
        },
        {
          title: 'Festivals',
          text:
            'At certain points in the year, public celebrations broaden the meaning of nightlife far beyond bars alone.'
        }
      ],
      note:
        'Opening days and performance schedules change with the season. Check current information shortly before your evening.'
    },
    travelerFit: {
      title: 'Who nightlife in Nerja suits best',
      intro:
        'Dinner, terraces and later bars are separate enough that a group can stop at different points in the evening.',
      items: [
        {
          title: 'Couples',
          text:
            'Nerja is especially strong for couples because evenings can remain scenic, walkable and varied. Sunset, dinner and one beautiful place for drinks already feel complete.'
        },
        {
          title: 'Groups of friends',
          text:
            'The town works well for groups who want flexibility: something social and perhaps something later, without requiring a full-scale club destination.'
        },
        {
          title: 'Families in town',
          text:
            'Early evening still belongs to the wider public life of the centre, which feels more comfortable than a nightlife-only resort strip.'
        },
        {
          title: 'Maximum-intensity party seekers',
          text:
            'Nerja can provide a lively night, but it is not a large-scale clubbing destination.'
        }
      ]
    },
    plans: {
      title: 'Three easy ways to plan a night in Nerja',
      intro:
        'Pick a starting area and decide after dinner whether to continue.',
      items: [
        {
          title: 'Date night',
          text:
            'Start near the Balcón or Carabeo side for sunset, continue into dinner, then finish with a quieter cocktail or wine bar.'
        },
        {
          title: 'Friends’ night',
          text:
            'Begin with tapas, move into the central pub zone later and leave the final choice open: another bar, one more drink or a late finish.'
        },
        {
          title: 'Beach-led summer night',
          text:
            'Spend the afternoon by the sea, stay for dinner at Burriana and either keep the night coastal or return to the centre for more movement.'
        }
      ],
      transportNote:
        'The old town and central nightlife zones are walkable once you are in Nerja. If you are staying in Frigiliana, arrange your return transport before the evening; do not assume that walking between the two towns or finding a taxi at the last minute will be practical.'
    },
    faq: {
      title: 'Frequently asked questions about nightlife in Nerja',
      items: [
        {
          question: 'Where is the main nightlife area in Nerja?',
          answer:
            'The main late-night concentration is around Plaza Tutti Frutti and nearby central streets. The Balcón and old town are better for scenic, earlier and more relaxed evenings.'
        },
        {
          question: 'Is Nerja better for couples or party groups?',
          answer:
            'Overall, Nerja is strongest for couples, mixed groups and travelers who want several evening options. Groups can still find a later, livelier atmosphere around Plaza Tutti Frutti.'
        },
        {
          question: 'Is there nightlife near the beach?',
          answer:
            'Yes. Burriana is the clearest beach-led evening area, especially in warmer months, although its atmosphere is usually more relaxed than the central pub zone.'
        },
        {
          question: 'Is nightlife in Nerja still worthwhile in winter?',
          answer:
            'Yes, but fewer venues open and some operate on reduced days. Check individual opening times before setting out.'
        }
      ]
    },
    combine: {
      title: 'Let the evening grow out of the day',
      intro:
        'Dinner in Nerja can lead naturally to a terrace or the later bars. If that is not your kind of evening, the town has several other ways to spend the day.',
      items: [
        {
          title: 'Move from dinner into the evening',
          text:
            'Lunch by the sea and dinner in the old town lead into different evenings. The central bars are the better starting point when you want the night to continue.',
          linkToken: 'nerja_food_authority',
          linkLabel: 'Find the dinner setting that suits the evening'
        },
        {
          title: 'Keep another Nerja day open',
          text:
            'If a late evening is not the plan, beaches, caves, the Balcón, Verano Azul and day trips give the stay a different rhythm.',
          linkToken: 'nerja_experience_hub',
          linkLabel: 'See Nerja through coast, caves, culture and evenings'
        }
      ]
    },
    closing: {
      title: 'And then home, on foot',
      lead:
        'Its strength is not competing with the coast’s biggest party destinations. It is offering several good versions of an evening in a compact setting: scenic, social, cultural, beach-led or late.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View AMARA Playa',
      stayReason:
        'AMARA Playa is a few hundred metres from the Balcón, on the fifth floor, facing the back: close enough to walk home, quiet enough to sleep.'
    }
  },
  de: {
    cardLabels: {
      bestFor: 'Besonders passend für',
      map: 'Auf der Karte öffnen'
    },
    footerHighlights: {
      nightlife: 'Nachtleben & Abende',
      nerja: 'Nerja-Guide',
      apartments: 'AMARA Playa'
    },
    hero: {
      kicker: 'Nerja am Abend',
      title:
        'Nerja nach Sonnenuntergang',
      paragraphs: [
        'Der Abend in Nerja beginnt auf einer Terrasse, mit Fisch oder Tapas und dem Blick vom Balcón aufs Meer. Später wandert er in die Gassen, und wer noch nicht nach Hause will, landet an der Plaza Tutti Frutti, wo die Bars Tür an Tür stehen.',
        'Statt großer Clubs hat Nerja drei Ecken, die jede ihren eigenen Abend machen: Balcón und Altstadt zum Essen und für den Sundowner, die Plaza Tutti Frutti für die späte Stunde, Burriana für Abende mit den Füßen im Sand.',
        'Wer bei uns in Frigiliana wohnt, bestellt das Taxi für den Rückweg am besten vor dem Abend; der Weg zwischen den Orten ist eine Autofahrt, kein Spaziergang.'
      ],
      imageAlt:
        'Ruhiges Interieur von AMARA Playa als Ausgangspunkt für Abende in Nerja',
      summary: {
        eyebrow: 'Auf dieser Seite',
        body:
          'Drei Ecken für den Abend, ein Sundowner, den wir selbst trinken, und Flamenco, wenn das Programm passt.',
        items: [
          { id: 'late-night', label: 'Späte Stunde', value: 'Plaza Tutti Frutti' },
          { id: 'view', label: 'Mit Aussicht', value: 'Balcón & Altstadt' },
          { id: 'water', label: 'Am Wasser', value: 'Burriana' },
          { id: 'reviewed', label: 'Stand', value: 'Juli 2026' }
        ]
      }
    },
    sectionNav: {
      overview: 'Kurzantwort',
      areas: 'Die Viertel',
      styles: 'Abendstile',
      culture: 'Kultur',
      seasons: 'Jahreszeiten',
      planning: 'Abend planen',
      faq: 'FAQ'
    },
    overview: {
      kicker: 'Kurzantwort',
      title: 'Ist Nerja für Nachtleben geeignet?',
      intro:
        'Ja, wenn ihr Abendessen, Terrassen, Cocktailbars und eine kompakte Zone für später im selben Ort möchtet. Wählt ein anderes Ziel, wenn große Clubs bis zum Sonnenaufgang der Hauptgrund der Reise sind.',
      reviewed: 'Stand Juli 2026',
      items: [
        {
          title: 'Besonders passend für',
          text:
            'Paare, gemischte Gruppen, stimmungsvolle Abende, Terrassendrinks und Nächte, die entspannt von Tapas zu Cocktails übergehen.'
        },
        {
          title: 'Wichtigste späte Zone',
          text:
            'Plaza Tutti Frutti und die angrenzenden Straßen, wo viele Bars nah beieinanderliegen und die Stimmung später zunimmt.'
        },
        {
          title: 'Schönste Kulisse',
          text:
            'Balcón de Europa und Altstadt für Sonnenuntergang, Abendessen, Weinbars und einen gepflegten Abend ohne Förmlichkeit.'
        },
        {
          title: 'Beste Küstenzone',
          text:
            'Burriana für Abendessen am Strand und Drinks im Freien in den warmen Monaten.'
        }
      ]
    },
    areas: {
      title: 'Drei Ecken, drei Abende',
      intro:
        'Die Altstadt für den Anfang, die Plaza Tutti Frutti für später, Burriana für den Sommer. Alles zu Fuß erreichbar.',
      items: [
        {
          title: 'Plaza Tutti Frutti, die späte Stunde',
          paragraphs: [
            'Ein kleiner Platz, um den die Bars Tür an Tür stehen. Früh am Abend ist es hier noch ruhig; später füllt sich der Platz, die Musik wird lauter, und man wechselt von einer Bar zur nächsten, ohne die Straße zu verlassen.',
            'Kommt her, wenn der Abend nach dem Essen weitergehen soll.'
          ],
          bestFor:
            'Bar-Hopping, Gruppen, späte Starts.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            'Balcón und Altstadt, unser Sundowner',
          paragraphs: [
            'Der Balcón de Europa ist die Bühne, die Gassen dahinter sind der Abend: Terrassen, Weinbars, kleine Restaurants, in denen aus dem Sonnenuntergang ein Drink und aus dem Drink ein Abendessen wird.',
            'Unser Sundowner: von AMARA Playa zu Fuß ins Zentrum, auf die Terrasse von Cochran’s, Cuba Libre und Mai Tai, die Sonne geht unter, das Meer wird dunkel. Im Sommer 2025 haben wir das so gemacht, und wir machen es wieder.'
          ],
          bestFor:
            'Paare, Sonnenuntergang, Wein, Terrassen, leise Cocktails.',
          mapHref: maps.balcon
        },
        {
          title: 'Burriana, Abende am Meer',
          paragraphs: [
            'Der Strandtag geht in den Abend über: ein Tisch im Chiringuito, Espetos vom Feuer, dazu ein Drink, während der Sand kühl wird.',
            'Im Sommer bleiben die Strandlokale lang offen; im Winter gehört Burriana am Abend den Spaziergängern.'
          ],
          bestFor:
            'Sommerabende, Strandlokale, ruhigere Nächte.',
          mapHref: maps.burriana
        }
      ]
    },
    areaComparison: {
      title: 'Welche Zone passt zu welchem Abend?',
      intro:
        'Es gibt nicht den einen besten Bereich. Entscheidend ist, mit wem ihr unterwegs seid und wie lebhaft die zweite Hälfte des Abends werden soll.',
      items: [
        {
          title: 'Am besten für Paare',
          text:
            'Balcón de Europa und Altstadt gewinnen meist durch die Kombination aus Kulisse, kurzen Wegen, Drinks und Abendessen.'
        },
        {
          title: 'Am besten für Bar-Hopping',
          text:
            'Die Plaza Tutti Frutti ist die klarste Wahl, weil die hohe Dichte an Lokalen den Wechsel von einer Station zur nächsten erleichtert.'
        },
        {
          title: 'Am besten für ruhige Abende',
          text:
            'Burriana passt zu Strandrestaurants und Drinks im Freien – besonders an warmen Abenden.'
        },
        {
          title: 'Beste Gesamtstrategie',
          text:
            'Beginnt am Balcón oder in der Altstadt mit Sonnenuntergang und Abendessen. Wechselt nur dann zur Plaza Tutti Frutti, wenn ihr später noch Bars möchtet.'
        }
      ]
    },
    eveningStyles: {
      title: 'Welche Art von Nachtleben Nerja besonders gut kann',
      intro:
        'Essen, Aussicht und Bars liegen nah genug beieinander, um flexibel zu bleiben. Beginnt mit dem Abendessen und entscheidet danach, ob ihr weiterzieht.',
      items: [
        {
          title: 'Erst Tapas, dann Drinks',
          text:
            'Beginnt mit Fisch oder Tapas und entscheidet erst danach, ob es mit Cocktails oder zur Plaza Tutti Frutti weitergeht.'
        },
        {
          title: 'Cocktails und Terrassen',
          text:
            'Eine schöne Terrasse, ein guter Drink und eine Umgebung, in der man gern bleibt, reichen oft aus. Genau darin liegt eine der natürlichsten Abendstärken Nerjas.'
        },
        {
          title: 'Ein Abend rund um den Strand',
          text:
            'Bleibt in den wärmeren Monaten für Abendessen und Drinks an der Küste, statt in die zentrale Barzone zu wechseln.'
        },
        {
          title: 'Später und geselliger',
          text:
            'Nerja kann später durchaus lauter und jünger werden. Entscheidend sind die zentrale Zone und der richtige Zeitpunkt – nicht die Erwartung, dass die ganze Stadt wie eine Partymeile funktioniert.'
        }
      ]
    },
    culture: {
      title: 'Flamenco und Kulturabende',
      paragraphs: [
        'Nerja hat neben Bars auch Bühnen. Flamenco gibt es in kleinen Lokalen und zu den Festen, das Centro Cultural Villa de Nerja zeigt Musik, Tanz und Theater.',
        'Die Programme wechseln mit der Saison; das aktuelle steht hier verlinkt.'
      ],
      items: [
        {
          title: 'Flamenco-Abende',
          text:
            'Kleine Tablaos, Feste und Sommerabende; die Termine wechseln.',
          href: maps.flamenco,
          linkLabel: 'Flamenco in Nerja suchen'
        },
        {
          title: 'Centro Cultural Villa de Nerja',
          text:
            'Musik, Tanz, Theater und Saisonprogramm im Kulturzentrum der Stadt.',
          href: nerjaCultureProgramme,
          linkLabel: 'Zum Programm'
        }
      ]
    },
    seasonality: {
      title: 'Wie sich Nerjas Nachtleben mit den Jahreszeiten verändert',
      intro:
        'Nerja folgt nicht das ganze Jahr derselben Formel. Ein Abend kann sich im August, Oktober oder Januar deutlich anders anfühlen und bleibt dennoch typisch Nerja.',
      items: [
        {
          title: 'Sommer',
          text:
            'Die Stadt ist voller, Abende beginnen später, Terrassen bleiben länger belebt und Burriana wird attraktiver.'
        },
        {
          title: 'Vor- und Nachsaison',
          text:
            'Genügend Lokale bleiben für Abendessen und Drinks aktiv, meist mit weniger Andrang als im Sommer.'
        },
        {
          title: 'Winter',
          text:
            'Die Ausgehszene wird kleiner und selektiver, die Stadt bleibt jedoch gesellig. Weniger Lokale tragen mehr von der Abendstimmung.'
        },
        {
          title: 'Feste',
          text:
            'Zu bestimmten Zeiten im Jahr erweitern öffentliche Feiern das Nachtleben weit über Bars hinaus.'
        }
      ],
      note:
        'Öffnungstage und Veranstaltungsprogramme ändern sich saisonal. Prüft die aktuellen Angaben kurz vor dem Abend.'
    },
    travelerFit: {
      title: 'Für wen Nerjas Nachtleben besonders gut passt',
      intro:
        'Abendessen, Terrassen und spätere Bars sind klar genug getrennt, dass eine Gruppe zu unterschiedlichen Zeitpunkten Schluss machen kann.',
      items: [
        {
          title: 'Paare',
          text:
            'Nerja ist für Paare besonders stark, weil Abende schön, gut zu Fuß und abwechslungsreich bleiben können. Sonnenuntergang, Abendessen und ein besonderer Ort für Drinks fühlen sich bereits vollständig an.'
        },
        {
          title: 'Freundesgruppen',
          text:
            'Die Stadt passt zu Gruppen, die flexibel bleiben möchten: erst gesellig, vielleicht später lebhafter, aber nicht zwingend in einem großen Clubziel.'
        },
        {
          title: 'Familien im Zentrum',
          text:
            'Der frühe Abend gehört weiterhin zum allgemeinen öffentlichen Leben der Stadt und wirkt angenehmer als in einem reinen Nachtleben-Resort.'
        },
        {
          title: 'Maximale Partyintensität',
          text:
            'In Nerja kann man lebhaft ausgehen, doch die Stadt ist kein Ziel für große Clubs bis zum Morgen.'
        }
      ]
    },
    plans: {
      title: 'Drei einfache Pläne für einen Abend in Nerja',
      intro:
        'Wählt einen Startpunkt und entscheidet nach dem Abendessen, ob ihr weiterziehen möchtet.',
      items: [
        {
          title: 'Abend zu zweit',
          text:
            'Beginnt am Balcón oder auf der Carabeo-Seite mit dem Sonnenuntergang, geht anschließend essen und schließt mit einem Cocktail oder einer Weinbar ab.'
        },
        {
          title: 'Abend mit Freunden',
          text:
            'Startet mit Tapas und wechselt später zur Plaza Tutti Frutti, wenn ihr noch eine Bar oder einen späteren Abschluss möchtet.'
        },
        {
          title: 'Sommerabend am Meer',
          text:
            'Verbringt den Nachmittag am Strand, bleibt zum Abendessen in Burriana und entscheidet danach zwischen Küste und Zentrum.'
        }
      ],
      transportNote:
        'Altstadt und zentrale Ausgehzonen sind innerhalb Nerjas gut zu Fuß erreichbar. Wenn ihr in Frigiliana wohnt, organisiert die Rückfahrt vor dem Abend; der Weg zwischen den Orten ist kein Nachtspaziergang, und auf ein kurzfristig verfügbares Taxi solltet ihr euch nicht verlassen.'
    },
    faq: {
      title: 'Häufige Fragen zum Nachtleben in Nerja',
      items: [
        {
          question: 'Wo liegt die wichtigste Ausgehzone in Nerja?',
          answer:
            'Das spätere Nachtleben konzentriert sich rund um die Plaza Tutti Frutti und die angrenzenden zentralen Straßen. Balcón und Altstadt eignen sich besser für schöne, frühere und ruhigere Abende.'
        },
        {
          question: 'Passt Nerja besser zu Paaren oder Partygruppen?',
          answer:
            'Insgesamt ist Nerja besonders stark für Paare, gemischte Gruppen und Gäste, die mehrere Optionen möchten. Rund um die Plaza Tutti Frutti finden Gruppen dennoch eine spätere und lebhaftere Stimmung.'
        },
        {
          question: 'Gibt es Nachtleben am Strand?',
          answer:
            'Ja. Burriana ist besonders in den wärmeren Monaten die klarste Zone für einen Abend am Strand, meist jedoch entspannter als der zentrale Barbereich.'
        },
        {
          question: 'Lohnt sich Nerjas Nachtleben auch im Winter?',
          answer:
            'Ja, aber weniger Lokale öffnen und manche haben reduzierte Öffnungstage. Prüft die Zeiten der einzelnen Lokale vorab.'
        }
      ]
    },
    combine: {
      title: 'Ein Abend, der aus dem Tag entsteht',
      intro:
        'Aus einem Abendessen in Nerja werden leicht eine Terrasse und später noch ein paar Bars. Wenn das nicht euer Abend ist, bietet der Ort andere Rhythmen für den Tag.',
      items: [
        {
          title: 'Vom Essen in den Abend',
          text:
            'Mittagessen am Meer und Abendessen in der Altstadt führen in unterschiedliche Abende. Wenn es später weitergehen soll, sind die zentralen Bars der bessere Ausgangspunkt.',
          linkToken: 'nerja_food_authority',
          linkLabel: 'Das passende Umfeld für Essen und Abend finden'
        },
        {
          title: 'Einen anderen Nerja-Tag offenlassen',
          text:
            'Wenn ein später Abend nicht zu euch passt, geben Strände, Höhlen, Balcón, Verano Azul und Tagesausflüge dem Aufenthalt einen anderen Rhythmus.',
          linkToken: 'nerja_experience_hub',
          linkLabel: 'Nerja über Küste, Höhlen, Kultur und Abende erleben'
        }
      ]
    },
    closing: {
      title: 'Und dann nach Hause, zu Fuß',
      lead:
        'Die Stärke liegt nicht im Wettbewerb mit den größten Partyorten der Küste, sondern in mehreren guten Versionen eines Abends auf engem Raum: schön, gesellig, kulturell, am Strand oder spät.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'AMARA Playa ansehen',
      stayReason:
        'AMARA Playa liegt ein paar Hundert Meter vom Balcón, im fünften Stock, nach hinten hinaus: nah genug für den Heimweg zu Fuß, ruhig genug zum Schlafen.'
    }
  },
  es: {
    cardLabels: {
      bestFor: 'Ideal para',
      map: 'Ver en el mapa'
    },
    footerHighlights: {
      nightlife: 'Vida nocturna y tardes',
      nerja: 'Guía de Nerja',
      apartments: 'AMARA Playa'
    },
    hero: {
      kicker: 'Nerja por la noche',
      title:
        'Nerja después del atardecer',
      paragraphs: [
        'La noche en Nerja empieza en una terraza, con pescado o tapas y la vista del Balcón sobre el mar. Luego se mueve a las callejuelas, y quien aún no quiere volver a casa acaba en la Plaza Tutti Frutti, donde los bares están puerta con puerta.',
        'En lugar de grandes discotecas, Nerja tiene tres rincones que hacen cada uno su propia noche: el Balcón y el casco antiguo para cenar y ver el atardecer, la Plaza Tutti Frutti para las horas tardías, Burriana para noches con los pies en la arena.',
        'Quien se aloja con nosotros en Frigiliana, mejor pide el taxi para la vuelta antes de la noche; el camino entre los dos pueblos es un trayecto en coche, no un paseo.'
      ],
      imageAlt:
        'Interior tranquilo de AMARA Playa como base para salir por Nerja',
      summary: {
        eyebrow: 'En esta página',
        body:
          'Tres rincones para la noche, un atardecer con copa que tomamos nosotros mismos, y flamenco cuando cuadra el programa.',
        items: [
          { id: 'late-night', label: 'Hora tardía', value: 'Plaza Tutti Frutti' },
          { id: 'view', label: 'Con vistas', value: 'Balcón y casco antiguo' },
          { id: 'water', label: 'Junto al mar', value: 'Burriana' },
          { id: 'reviewed', label: 'Revisado', value: 'Julio 2026' }
        ]
      }
    },
    sectionNav: {
      overview: 'Respuesta rápida',
      areas: 'Zonas principales',
      styles: 'Tipos de noche',
      culture: 'Cultura',
      seasons: 'Temporadas',
      planning: 'Planear la noche',
      faq: 'Preguntas'
    },
    overview: {
      kicker: 'Respuesta rápida',
      title: '¿Merece la pena salir de noche en Nerja?',
      intro:
        'Sí, si queréis cena, terrazas, coctelerías y una zona compacta para seguir hasta más tarde en la misma localidad. Elegid otro destino si el objetivo principal son grandes discotecas hasta el amanecer.',
      reviewed: 'Actualizado en julio de 2026',
      items: [
        {
          title: 'Ideal para',
          text:
            'Parejas, grupos mixtos, noches con buenas vistas, copas en terrazas y planes que pasan con naturalidad de las tapas a los cócteles.'
        },
        {
          title: 'Zona principal hasta tarde',
          text:
            'Plaza Tutti Frutti y las calles céntricas cercanas, con bares próximos entre sí y un ambiente que aumenta más tarde.'
        },
        {
          title: 'Zona con mejores vistas',
          text:
            'Balcón de Europa y casco antiguo para el atardecer, la cena, bares de vinos y una noche cuidada sin formalidades.'
        },
        {
          title: 'Mejor zona costera',
          text:
            'Burriana cuando queréis que la playa, el aire libre y un ritmo suave de verano sigan formando parte de la noche.'
        }
      ]
    },
    areas: {
      title: 'Tres rincones, tres noches',
      intro:
        'El casco antiguo para empezar, la Plaza Tutti Frutti para más tarde, Burriana para el verano. Todo a pie.',
      items: [
        {
          title: 'Plaza Tutti Frutti, la hora tardía',
          paragraphs: [
            'Una plaza pequeña rodeada de bares puerta con puerta. A primera hora de la noche aún está tranquila; luego la plaza se llena, la música sube, y se pasa de un bar a otro sin salir de la calle.',
            'Venid aquí cuando la noche deba continuar después de cenar.'
          ],
          bestFor:
            'Ir de bar en bar, grupos, empezar tarde.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            'Balcón y casco antiguo, nuestro atardecer',
          paragraphs: [
            'El Balcón de Europa es el escenario, las callejuelas de detrás son la noche: terrazas, bares de vinos, pequeños restaurantes donde el atardecer se convierte en una copa y la copa en una cena.',
            'Nuestro atardecer: desde AMARA Playa a pie hasta el centro, a la terraza de Cochran’s, cubalibre y mai tai, el sol se pone, el mar se oscurece. En el verano de 2025 lo hicimos así, y lo repetiremos.'
          ],
          bestFor:
            'Parejas, atardecer, vino, terrazas, cócteles tranquilos.',
          mapHref: maps.balcon
        },
        {
          title: 'Burriana, noches junto al mar',
          paragraphs: [
            'El día de playa se convierte en noche: una mesa en el chiringuito, espetos a la brasa, una copa mientras la arena se enfría.',
            'En verano los chiringuitos abren hasta tarde; en invierno Burriana por la noche es de los paseantes.'
          ],
          bestFor:
            'Noches de verano, chiringuitos, noches más tranquilas.',
          mapHref: maps.burriana
        }
      ]
    },
    areaComparison: {
      title: '¿Qué zona encaja con cada tipo de noche?',
      intro:
        'No existe una única zona mejor. La respuesta depende de con quién vais y de cuánto ambiente queréis para la segunda parte de la noche.',
      items: [
        {
          title: 'La mejor para parejas',
          text:
            'El Balcón de Europa y el casco antiguo suelen ganar por su combinación de paisaje, distancias a pie, copas y cena.'
        },
        {
          title: 'La mejor para ir de bar en bar',
          text:
            'Plaza Tutti Frutti es la respuesta más clara porque la concentración de locales facilita pasar de uno a otro.'
        },
        {
          title: 'La mejor para una noche relajada',
          text:
            'Burriana combina aire de mar, poca presión y un ritmo suave, especialmente durante las noches cálidas.'
        },
        {
          title: 'La estrategia más completa',
          text:
            'Empezad en el Balcón o el casco antiguo para ver el atardecer y tomar las primeras copas. Id después a la zona céntrica de bares solo si queréis acabar con más ruido.'
        }
      ]
    },
    eveningStyles: {
      title: 'Los tipos de noche que Nerja sabe hacer mejor',
      intro:
        'Nerja funciona cuando la noche se desarrolla de forma natural y no como un programa rígido. La comida, el paisaje y la compañía pueden pesar tanto como el último bar.',
      items: [
        {
          title: 'Primero tapas, después copas',
          text:
            'Empezad con pescado o tapas y decidid más tarde si queréis seguir con cócteles o una zona más animada. Es un plan local, flexible y completo sin necesidad de una gran noche de fiesta.'
        },
        {
          title: 'Cócteles y terrazas',
          text:
            'Una terraza bonita, una buena copa y un entorno en el que apetece quedarse suelen ser suficientes. Es uno de los formatos de noche que mejor encajan con Nerja.'
        },
        {
          title: 'Una noche ligada a la playa',
          text:
            'Durante los meses cálidos, quedaos cerca de la costa y mantened la cena y las copas conectadas con el ambiente abierto de la playa, sin cambiar a un ritmo urbano.'
        },
        {
          title: 'Más tarde y más social',
          text:
            'Nerja también puede volverse más joven y ruidosa. La clave está en elegir la zona céntrica y la hora adecuada, no en esperar que toda la ciudad funcione como una calle de fiesta.'
        }
      ]
    },
    culture: {
      title: 'Flamenco y noches de cultura',
      paragraphs: [
        'Además de bares, Nerja también tiene escenarios. Hay flamenco en locales pequeños y en las fiestas; el Centro Cultural Villa de Nerja programa música, danza y teatro.',
        'Los programas cambian con la temporada; el actual está enlazado aquí.'
      ],
      items: [
        {
          title: 'Noches de flamenco',
          text:
            'Tablaos pequeños, fiestas y noches de verano; las fechas cambian.',
          href: maps.flamenco,
          linkLabel: 'Buscar flamenco en Nerja'
        },
        {
          title: 'Centro Cultural Villa de Nerja',
          text:
            'Música, danza, teatro y programa de temporada en el centro cultural de la ciudad.',
          href: nerjaCultureProgramme,
          linkLabel: 'Al programa'
        }
      ]
    },
    seasonality: {
      title: 'Cómo cambia la noche de Nerja según la temporada',
      intro:
        'Nerja no depende de una única fórmula durante todo el año. Una noche de agosto, octubre o enero puede sentirse muy distinta y seguir siendo reconociblemente nerjeña.',
      items: [
        {
          title: 'Verano',
          text:
            'La ciudad está más llena, las noches empiezan más tarde, las terrazas mantienen el ambiente durante más horas y Burriana gana atractivo.'
        },
        {
          title: 'Temporada media',
          text:
            'Suele ser el momento más equilibrado: ambiente suficiente para una buena noche, con menos presión de gente y mayor facilidad.'
        },
        {
          title: 'Invierno',
          text:
            'La escena nocturna se hace más pequeña y selectiva, aunque la ciudad sigue siendo social. Menos locales concentran una mayor parte del ambiente.'
        },
        {
          title: 'Fiestas',
          text:
            'En determinados momentos del año, las celebraciones públicas amplían el concepto de noche mucho más allá de los bares.'
        }
      ],
      note:
        'Los días de apertura, la programación y el ambiente de cada zona cambian con la temporada. Consultad la información actual poco antes de salir.'
    },
    travelerFit: {
      title: 'Para quién encaja mejor la vida nocturna de Nerja',
      intro:
        'La variedad de la ciudad permite crear una noche adecuada sin obligar a todo el grupo a seguir el mismo ritmo.',
      items: [
        {
          title: 'Parejas',
          text:
            'Nerja funciona especialmente bien para parejas porque la noche puede seguir siendo bonita, transitable y variada. Puesta de sol, cena y un lugar especial para tomar algo ya forman un plan completo.'
        },
        {
          title: 'Grupos de amigos',
          text:
            'La ciudad encaja con grupos que buscan flexibilidad: algo social y quizá más ambiente después, sin necesitar un gran destino de discotecas.'
        },
        {
          title: 'Familias en el centro',
          text:
            'La primera parte de la noche sigue perteneciendo a la vida pública general de la ciudad y resulta más cómoda que una zona dedicada únicamente al ocio nocturno.'
        },
        {
          title: 'Quienes buscan máxima intensidad',
          text:
            'Nerja puede ofrecer una noche animada, pero no es principalmente un destino de discotecas extremas. Su fuerza está en la variedad y la calidad del ambiente.'
        }
      ]
    },
    plans: {
      title: 'Tres formas sencillas de organizar una noche en Nerja',
      intro:
        'Utilizad una secuencia sencilla como punto de partida y dejad margen para decidir hasta dónde queréis alargar la noche.',
      items: [
        {
          title: 'Noche en pareja',
          text:
            'Empezad cerca del Balcón o la zona de Carabeo para ver el atardecer, continuad con la cena y terminad con un cóctel tranquilo o un bar de vinos.'
        },
        {
          title: 'Noche con amigos',
          text:
            'Comenzad con tapas, pasad más tarde a la zona céntrica de bares y dejad abierta la última decisión: otro local, una copa más o acabar tarde.'
        },
        {
          title: 'Noche de verano junto al mar',
          text:
            'Pasad la tarde en la playa, quedaos a cenar en Burriana y mantened la noche en la costa o regresad al centro si os apetece más movimiento.'
        }
      ],
      transportNote:
        'El casco antiguo y las zonas céntricas se recorren bien a pie una vez en Nerja. Si os alojáis en Frigiliana, organizad el transporte de regreso antes de salir: caminar de noche entre ambas localidades no es una opción práctica ni conviene depender de encontrar taxi en el último momento.'
    },
    faq: {
      title: 'Preguntas frecuentes sobre la noche en Nerja',
      items: [
        {
          question: '¿Dónde está la principal zona nocturna de Nerja?',
          answer:
            'La mayor concentración para seguir hasta tarde está alrededor de Plaza Tutti Frutti y las calles céntricas cercanas. El Balcón y el casco antiguo encajan mejor con noches bonitas, tempranas y relajadas.'
        },
        {
          question: '¿Nerja es mejor para parejas o para grupos de fiesta?',
          answer:
            'En conjunto, Nerja destaca para parejas, grupos mixtos y viajeros que quieren varias opciones. Los grupos también encuentran un ambiente más tardío y animado alrededor de Plaza Tutti Frutti.'
        },
        {
          question: '¿Hay vida nocturna cerca de la playa?',
          answer:
            'Sí. Burriana es la zona más clara para una noche ligada a la playa, especialmente en los meses cálidos, aunque suele ser más relajada que el área céntrica de bares.'
        },
        {
          question: '¿Merece la pena salir por Nerja en invierno?',
          answer:
            'Sí, pero con un ritmo más pequeño y selectivo. La ventaja es una ciudad cómoda y menos saturada, aunque conviene comprobar los días de apertura.'
        }
      ]
    },
    combine: {
      title: 'Una noche que nace del propio día',
      intro:
        'En Nerja, una cena puede continuar de forma natural en una terraza y, más tarde, entre bares. Si no es la noche que buscáis, la localidad ofrece otros ritmos para el día.',
      items: [
        {
          title: 'De la cena a la noche',
          text:
            'Un almuerzo junto al mar y una cena en el casco antiguo llevan a noches diferentes. Si queréis seguir hasta más tarde, los bares del centro son el mejor punto de partida.',
          linkToken: 'nerja_food_authority',
          linkLabel: 'Encontrar el ambiente de cena que encaja con la noche'
        },
        {
          title: 'Dejar abierto otro día en Nerja',
          text:
            'Si no os apetece alargar la noche, las playas, las cuevas, el Balcón, Verano Azul y las excursiones dan otro ritmo a la estancia.',
          linkToken: 'nerja_experience_hub',
          linkLabel: 'Vivir Nerja entre costa, cuevas, cultura y noches'
        }
      ]
    },
    closing: {
      title: 'Y después a casa, a pie',
      lead:
        'Su fuerza no está en competir con los grandes destinos de fiesta de la costa, sino en ofrecer varias buenas versiones de una noche en un entorno compacto: con vistas, social, cultural, junto al mar o hasta tarde.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver AMARA Playa',
      stayReason:
        'AMARA Playa está a unos cientos de metros del Balcón, en un quinto, hacia la parte trasera: lo bastante cerca para volver a pie, lo bastante tranquilo para dormir.'
    }
  },
  nl: {
    cardLabels: {
      bestFor: 'Geschikt voor',
      map: 'Bekijk op de kaart'
    },
    footerHighlights: {
      nightlife: 'Nachtleven & avonden',
      nerja: 'Nerja-gids',
      apartments: 'AMARA Playa'
    },
    hero: {
      kicker: 'Nerja ’s avonds',
      title:
        'Nerja na zonsondergang',
      paragraphs: [
        'De avond in Nerja begint op een terras, met vis of tapas en het uitzicht vanaf de Balcón over de zee. Later trekt hij de steegjes in, en wie nog niet naar huis wil, landt op Plaza Tutti Frutti, waar de bars deur aan deur staan.',
        'In plaats van grote clubs heeft Nerja drie hoeken die elk hun eigen avond maken: Balcón en oude stad voor het eten en de sundowner, Plaza Tutti Frutti voor het late uur, Burriana voor avonden met de voeten in het zand.',
        'Wie bij ons in Frigiliana woont, bestelt de taxi voor de terugweg het best vóór de avond; de weg tussen de plaatsen is een autorit, geen wandeling.'
      ],
      imageAlt:
        'Rustig interieur van AMARA Playa als uitvalsbasis voor avonden in Nerja',
      summary: {
        eyebrow: 'Op deze pagina',
        body:
          'Drie hoeken voor de avond, een sundowner die we zelf drinken, en flamenco als het programma past.',
        items: [
          { id: 'late-night', label: 'Late uur', value: 'Plaza Tutti Frutti' },
          { id: 'view', label: 'Met uitzicht', value: 'Balcón & oude stad' },
          { id: 'water', label: 'Aan het water', value: 'Burriana' },
          { id: 'reviewed', label: 'Bijgewerkt', value: 'Juli 2026' }
        ]
      }
    },
    sectionNav: {
      overview: 'Kort antwoord',
      areas: 'Hoofdzones',
      styles: 'Avondstijlen',
      culture: 'Cultuur',
      seasons: 'Seizoenen',
      planning: 'Avond plannen',
      faq: 'FAQ'
    },
    overview: {
      kicker: 'Kort antwoord',
      title: 'Is Nerja goed voor nachtleven?',
      intro:
        'Ja, als jullie diner, terrassen, cocktailbars en één compacte zone voor later in dezelfde plaats willen. Kies een andere bestemming als grote clubs tot zonsopkomst het belangrijkste doel zijn.',
      reviewed: 'Stand juli 2026',
      items: [
        {
          title: 'Geschikt voor',
          text:
            'Stellen, gemengde groepen, sfeervolle avonden, drankjes op terrassen en nachten die vanzelf van tapas naar cocktails overgaan.'
        },
        {
          title: 'Belangrijkste late zone',
          text:
            'Plaza Tutti Frutti en de omliggende straten, waar bars dicht bij elkaar liggen en de sfeer later op gang komt.'
        },
        {
          title: 'Mooiste avondzone',
          text:
            'Balcón de Europa en de oude stad voor zonsondergang, diner, wijnbars en een verzorgde avond zonder formaliteit.'
        },
        {
          title: 'Beste kustzone',
          text:
            'Burriana wanneer strand, buitenlucht en een zachter zomerritme deel van de avond moeten blijven.'
        }
      ]
    },
    areas: {
      title: 'Drie hoeken, drie avonden',
      intro:
        'De oude stad om te beginnen, Plaza Tutti Frutti voor later, Burriana voor de zomer. Alles te voet.',
      items: [
        {
          title: 'Plaza Tutti Frutti, het late uur',
          paragraphs: [
            'Een klein plein met bars deur aan deur eromheen. Vroeg op de avond is het hier nog rustig; later loopt het plein vol, wordt de muziek luider en ga je van de ene bar naar de volgende zonder de straat te verlaten.',
            'Kom hierheen als de avond na het eten verder moet gaan.'
          ],
          bestFor:
            'Bar-hopping, groepen, late starts.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            'Balcón en oude stad, onze sundowner',
          paragraphs: [
            'De Balcón de Europa is het podium, de steegjes erachter zijn de avond: terrassen, wijnbars, kleine restaurants waar de zonsondergang een drankje wordt en het drankje een diner.',
            'Onze sundowner: vanaf AMARA Playa te voet naar het centrum, het terras van Cochran’s op, Cuba Libre en Mai Tai, de zon gaat onder, de zee wordt donker. In de zomer van 2025 deden we het zo, en we doen het weer.'
          ],
          bestFor:
            'Stellen, zonsondergang, wijn, terrassen, rustige cocktails.',
          mapHref: maps.balcon
        },
        {
          title: 'Burriana, avonden aan zee',
          paragraphs: [
            'De stranddag loopt over in de avond: een tafel in de chiringuito, espetos van het vuur, een drankje terwijl het zand afkoelt.',
            'In de zomer blijven de strandtenten lang open; in de winter is Burriana ’s avonds van de wandelaars.'
          ],
          bestFor:
            'Zomeravonden, strandtenten, rustigere nachten.',
          mapHref: maps.burriana
        }
      ]
    },
    areaComparison: {
      title: 'Welke zone past bij welke avond?',
      intro:
        'Er is niet één beste uitgaansgebied. De keuze hangt af van jullie gezelschap en hoe levendig de tweede helft van de avond mag worden.',
      items: [
        {
          title: 'Beste voor stellen',
          text:
            'Balcón de Europa en de oude stad winnen meestal door de combinatie van uitzicht, loopafstand, drankjes en diner.'
        },
        {
          title: 'Beste om langs bars te gaan',
          text:
            'Plaza Tutti Frutti is het duidelijkste antwoord, omdat de concentratie van zaken een eenvoudige doorloop van de ene naar de andere plek geeft.'
        },
        {
          title: 'Beste voor rustige avonden',
          text:
            'Burriana past bij zeelucht, weinig druk en een zachter tempo, vooral op warme avonden.'
        },
        {
          title: 'Beste totaalstrategie',
          text:
            'Begin rond het Balcón of in de oude stad met zonsondergang en diner. Ga alleen naar de centrale barzone als jullie later nog bars willen.'
        }
      ]
    },
    eveningStyles: {
      title: 'De vormen van nachtleven waarin Nerja uitblinkt',
      intro:
        'Nerja werkt wanneer de avond zich ontvouwt in plaats van een strak programma te volgen. Eten, omgeving en gezelschap kunnen even belangrijk zijn als de laatste bar.',
      items: [
        {
          title: 'Eerst tapas, daarna drankjes',
          text:
            'Begin met vis of tapas en beslis pas daarna of jullie doorgaan naar cocktails of een drukkere barzone.'
        },
        {
          title: 'Cocktails en terrassen',
          text:
            'Eén mooi terras, een goed drankje en een omgeving waar jullie willen blijven zijn vaak genoeg.'
        },
        {
          title: 'Een avond rond het strand',
          text:
            'Blijf in warme maanden bij de kust en houd diner en drankjes verbonden met de open strandatmosfeer in plaats van over te schakelen op een stedelijk ritme.'
        },
        {
          title: 'Later en socialer',
          text:
            'Nerja kan later zeker luidruchtiger en jonger worden. De sleutel is de centrale zone en het juiste tijdstip, niet de verwachting dat de hele stad als feeststrook werkt.'
        }
      ]
    },
    culture: {
      title: 'Flamenco en cultuuravonden',
      paragraphs: [
        'Naast bars heeft Nerja ook podia. Flamenco is er in kleine zaaltjes en op de feesten; het Centro Cultural Villa de Nerja brengt muziek, dans en theater.',
        'De programma’s wisselen met het seizoen; het actuele staat hier gelinkt.'
      ],
      items: [
        {
          title: 'Flamenco-avonden',
          text:
            'Kleine tablaos, feesten en zomeravonden; de data wisselen.',
          href: maps.flamenco,
          linkLabel: 'Flamenco in Nerja zoeken'
        },
        {
          title: 'Centro Cultural Villa de Nerja',
          text:
            'Muziek, dans, theater en seizoensprogramma in het cultuurcentrum van de stad.',
          href: nerjaCultureProgramme,
          linkLabel: 'Naar het programma'
        }
      ]
    },
    seasonality: {
      title: 'Hoe het nachtleven met de seizoenen verandert',
      intro:
        'Nerja leunt niet het hele jaar op één formule. Een avond kan in augustus, oktober of januari heel anders aanvoelen en toch duidelijk Nerja blijven.',
      items: [
        {
          title: 'Zomer',
          text:
            'De stad is voller, avonden beginnen later, terrassen blijven langer actief en Burriana wordt aantrekkelijker.'
        },
        {
          title: 'Voor- en naseizoen',
          text:
            'Vaak de beste balans: genoeg sfeer voor een sterke avond, met minder drukte en meer gemak.'
        },
        {
          title: 'Winter',
          text:
            'Het nachtleven wordt kleiner en selectiever, maar de stad blijft sociaal. Een kleiner aantal zaken draagt meer van de avondsfeer.'
        },
        {
          title: 'Feesten',
          text:
            'Op bepaalde momenten verbreden openbare vieringen de betekenis van nachtleven tot ver buiten bars alleen.'
        }
      ],
      note:
        'Openingsdagen en voorstellingen veranderen met het seizoen. Controleer actuele informatie kort voor jullie avond.'
    },
    travelerFit: {
      title: 'Voor wie het nachtleven van Nerja het best past',
      intro:
        'Door de variatie is een geschikte avond eenvoudig op te bouwen zonder iedereen in hetzelfde ritme te dwingen.',
      items: [
        {
          title: 'Stellen',
          text:
            'Nerja is bijzonder sterk voor stellen omdat avonden mooi, beloopbaar en gevarieerd kunnen blijven. Zonsondergang, diner en één bijzondere plek voor een drankje voelen al compleet.'
        },
        {
          title: 'Vriendengroepen',
          text:
            'De stad past bij groepen die flexibiliteit zoeken: iets sociaals en misschien later iets levendigers, zonder dat een grote clubbestemming nodig is.'
        },
        {
          title: 'Gezinnen in het centrum',
          text:
            'De vroege avond blijft onderdeel van het brede openbare leven van de stad en voelt comfortabeler dan een resort dat alleen om nachtleven draait.'
        },
        {
          title: 'Maximale feestintensiteit',
          text:
            'Nerja kan een levendige nacht bieden, maar is niet primair een hardcore clubbestemming. De kracht ligt in keuze en kwaliteit van sfeer, niet in extremen.'
        }
      ]
    },
    plans: {
      title: 'Drie eenvoudige manieren om een avond te plannen',
      intro:
        'Gebruik één eenvoudige volgorde als startpunt en houd ruimte om later te beslissen hoe lang de avond doorgaat.',
      items: [
        {
          title: 'Avond voor twee',
          text:
            'Begin bij het Balcón of aan de Carabeo-kant voor zonsondergang, ga daarna dineren en sluit af met een rustige cocktail of wijnbar.'
        },
        {
          title: 'Avond met vrienden',
          text:
            'Start met tapas, ga later naar de centrale barzone en laat de laatste keuze open: nog een bar, één drankje meer of een late afsluiting.'
        },
        {
          title: 'Zomeravond aan zee',
          text:
            'Breng de middag aan zee door, blijf voor diner in Burriana en houd de avond aan de kust of ga terug naar het centrum voor meer beweging.'
        }
      ],
      transportNote:
        'De oude stad en centrale uitgaanszones zijn eenmaal in Nerja goed beloopbaar. Verblijven jullie in Frigiliana, regel dan vooraf het vervoer terug; tussen beide plaatsen lopen is ’s nachts niet praktisch en op het laatste moment een taxi vinden is niet gegarandeerd.'
    },
    faq: {
      title: 'Veelgestelde vragen over het nachtleven in Nerja',
      items: [
        {
          question: 'Waar ligt de belangrijkste uitgaanszone van Nerja?',
          answer:
            'De grootste concentratie voor later ligt rond Plaza Tutti Frutti en de omliggende straten. Het Balcón en de oude stad passen beter bij mooie, vroegere en rustigere avonden.'
        },
        {
          question: 'Is Nerja beter voor stellen of feestgroepen?',
          answer:
            'In het algemeen is Nerja het sterkst voor stellen, gemengde groepen en reizigers die meerdere opties willen. Groepen vinden rond Plaza Tutti Frutti ook een latere en levendigere sfeer.'
        },
        {
          question: 'Is er nachtleven bij het strand?',
          answer:
            'Ja. Burriana is vooral in warme maanden de duidelijkste strandgerichte avondzone, al blijft de sfeer meestal rustiger dan rond de centrale bars.'
        },
        {
          question: 'Is het nachtleven in de winter nog de moeite waard?',
          answer:
            'Ja, maar met een kleiner en selectiever ritme. De stad voelt comfortabeler en minder druk, al is het verstandig openingsdagen vooraf te controleren.'
        }
      ]
    },
    combine: {
      title: 'Een avond die uit de dag voortkomt',
      intro:
        'Een diner in Nerja loopt gemakkelijk door naar een terras en later naar de bars. Past dat niet bij jullie avond, dan biedt de plaats andere ritmes voor de dag.',
      items: [
        {
          title: 'Van het diner de avond in',
          text:
            'Lunch aan zee en diner in de oude stad leiden tot verschillende avonden. Willen jullie later doorgaan, dan vormen de centrale bars het betere vertrekpunt.',
          linkToken: 'nerja_food_authority',
          linkLabel: 'Vind de dineromgeving die bij de avond past'
        },
        {
          title: 'Houd een andere Nerja-dag open',
          text:
            'Als een late avond niet het plan is, geven stranden, grotten, het Balcón, Verano Azul en dagtochten het verblijf een ander ritme.',
          linkToken: 'nerja_experience_hub',
          linkLabel: 'Beleef Nerja via kust, grotten, cultuur en avonden'
        }
      ]
    },
    closing: {
      title: 'En dan naar huis, te voet',
      lead:
        'De kracht ligt niet in concurreren met de grootste feestbestemmingen aan de kust, maar in meerdere goede versies van een avond op korte afstand: mooi, sociaal, cultureel, aan zee of laat.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Bekijk AMARA Playa',
      stayReason:
        'AMARA Playa ligt een paar honderd meter van de Balcón, op de vijfde verdieping, aan de achterkant: dichtbij genoeg om naar huis te lopen, rustig genoeg om te slapen.'
    }
  },
  sv: {
    cardLabels: {
      bestFor: 'Passar bäst för',
      map: 'Visa på kartan'
    },
    footerHighlights: {
      nightlife: 'Nattliv & kvällar',
      nerja: 'Nerja-guide',
      apartments: 'AMARA Playa'
    },
    hero: {
      kicker: 'Nerja på kvällen',
      title:
        'Nerja efter solnedgången',
      paragraphs: [
        'Kvällen i Nerja börjar på en terrass, med fisk eller tapas och utsikten från Balcón över havet. Senare vandrar den in i gränderna, och den som inte vill hem ännu hamnar på Plaza Tutti Frutti, där barerna står dörr mot dörr.',
        'I stället för stora klubbar har Nerja tre hörn som var för sig gör sin egen kväll: Balcón och gamla stan för middag och sundowner, Plaza Tutti Frutti för den sena timmen, Burriana för kvällar med fötterna i sanden.',
        'Bor ni hos oss i Frigiliana är det bäst att beställa taxin för hemvägen före kvällen; vägen mellan orterna är en bilfärd, inte en promenad.'
      ],
      imageAlt:
        'Lugn interiör på AMARA Playa som bas för kvällar i Nerja',
      summary: {
        eyebrow: 'På den här sidan',
        body:
          'Tre hörn för kvällen, en sundowner vi själva dricker, och flamenco när programmet passar.',
        items: [
          { id: 'late-night', label: 'Sen timme', value: 'Plaza Tutti Frutti' },
          { id: 'view', label: 'Med utsikt', value: 'Balcón & gamla stan' },
          { id: 'water', label: 'Vid vattnet', value: 'Burriana' },
          { id: 'reviewed', label: 'Uppdaterad', value: 'Juli 2026' }
        ]
      }
    },
    sectionNav: {
      overview: 'Kort svar',
      areas: 'Huvudområden',
      styles: 'Kvällsstilar',
      culture: 'Kultur',
      seasons: 'Säsonger',
      planning: 'Planera kvällen',
      faq: 'FAQ'
    },
    overview: {
      kicker: 'Kort svar',
      title: 'Är Nerja bra för nattliv?',
      intro:
        'Ja, om ni vill ha middag, terrasser, cocktailbarer och ett kompakt område för senare på samma ort. Välj ett annat resmål om stora klubbar till gryningen är huvudsyftet med resan.',
      reviewed: 'Uppdaterad juli 2026',
      items: [
        {
          title: 'Passar bäst för',
          text:
            'Par, blandade grupper, vackra kvällar, terrassdrinkar och nätter som naturligt går från tapas till cocktails.'
        },
        {
          title: 'Viktigaste sena området',
          text:
            'Plaza Tutti Frutti och gatorna intill, där barerna ligger tätt och stämningen växer senare på kvällen.'
        },
        {
          title: 'Vackraste kvällsområdet',
          text:
            'Balcón de Europa och gamla stan för solnedgång, middag, vinbarer och en stilfull kväll utan formalitet.'
        },
        {
          title: 'Bästa kustområdet',
          text:
            'Burriana när stranden, utomhusmiljön och ett mjukare sommartempo ska fortsätta vara en del av kvällen.'
        }
      ]
    },
    areas: {
      title: 'Tre hörn, tre kvällar',
      intro:
        'Gamla stan till att börja med, Plaza Tutti Frutti för senare, Burriana för sommaren. Allt till fots.',
      items: [
        {
          title: 'Plaza Tutti Frutti, den sena timmen',
          paragraphs: [
            'Ett litet torg med barer dörr mot dörr runtom. Tidigt på kvällen är det fortfarande stilla här; senare fylls torget, musiken blir högre, och man går från en bar till nästa utan att lämna gatan.',
            'Kom hit när kvällen ska fortsätta efter maten.'
          ],
          bestFor:
            'Barrunda, grupper, sena starter.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            'Balcón och gamla stan, vår sundowner',
          paragraphs: [
            'Balcón de Europa är scenen, gränderna bakom är kvällen: terrasser, vinbarer, små restauranger där solnedgången blir en drink och drinken en middag.',
            'Vår sundowner: från AMARA Playa till fots in till centrum, upp på Cochran’s terrass, Cuba Libre och Mai Tai, solen går ner, havet blir mörkt. Sommaren 2025 gjorde vi så, och vi gör det igen.'
          ],
          bestFor:
            'Par, solnedgång, vin, terrasser, stilla cocktails.',
          mapHref: maps.balcon
        },
        {
          title: 'Burriana, kvällar vid havet',
          paragraphs: [
            'Stranddagen övergår i kväll: ett bord på chiringuiton, espetos från elden, en drink medan sanden svalnar.',
            'På sommaren har strandrestaurangerna öppet länge; på vintern tillhör Burriana på kvällen promenerarna.'
          ],
          bestFor:
            'Sommarkvällar, strandrestauranger, lugnare nätter.',
          mapHref: maps.burriana
        }
      ]
    },
    areaComparison: {
      title: 'Vilket område passar vilken sorts kväll?',
      intro:
        'Det finns inte ett enda bästa område. Det användbara svaret beror på sällskapet och hur livlig den andra halvan av kvällen ska bli.',
      items: [
        {
          title: 'Bäst för par',
          text:
            'Balcón de Europa och gamla stan vinner oftast genom kombinationen av utsikt, promenadavstånd, drinkar och middag.'
        },
        {
          title: 'Bäst för barrunda',
          text:
            'Plaza Tutti Frutti är det tydligaste svaret eftersom koncentrationen av ställen gör det enkelt att gå vidare.'
        },
        {
          title: 'Bäst för lugna kvällar',
          text:
            'Burriana passar havsluft, låg press och ett mjukare tempo, särskilt under varma kvällar.'
        },
        {
          title: 'Bästa helhetsstrategin',
          text:
            'Börja vid Balcón eller i gamla stan med solnedgång och första drinkar. Gå vidare till det centrala barområdet bara om ni vill ha en livligare avslutning.'
        }
      ]
    },
    eveningStyles: {
      title: 'De sorters nattliv som Nerja gör bäst',
      intro:
        'Nerja fungerar när kvällen får utvecklas i stället för att följa ett strikt program. Mat, miljö och sällskap kan väga lika tungt som den sista baren.',
      items: [
        {
          title: 'Tapas först, drinkar sedan',
          text:
            'Börja med fisk eller tapas och bestäm först därefter om ni vill fortsätta med cocktails eller ett livligare barområde. Det känns lokalt, flexibelt och fullständigt utan en stor utekväll.'
        },
        {
          title: 'Cocktails och terrasser',
          text:
            'En vacker terrass, en god drink och en miljö där man gärna stannar räcker ofta. Det här är ett av Nerjas mest naturliga kvällsupplägg.'
        },
        {
          title: 'En kväll kring stranden',
          text:
            'Stanna nära kusten under varmare månader och låt middag och drinkar förbli kopplade till den öppna strandatmosfären i stället för att byta till stadstempo.'
        },
        {
          title: 'Senare och mer socialt',
          text:
            'Nerja kan bli både yngre och livligare senare. Nyckeln är det centrala området och rätt tid, inte att förvänta sig att hela staden ska kännas som en partygata.'
        }
      ]
    },
    culture: {
      title: 'Flamenco och kulturkvällar',
      paragraphs: [
        'Förutom barer har Nerja också scener. Flamenco finns på små ställen och vid festerna; Centro Cultural Villa de Nerja visar musik, dans och teater.',
        'Programmen växlar med säsongen; det aktuella finns länkat här.'
      ],
      items: [
        {
          title: 'Flamencokvällar',
          text:
            'Små tablaos, fester och sommarkvällar; datumen växlar.',
          href: maps.flamenco,
          linkLabel: 'Sök flamenco i Nerja'
        },
        {
          title: 'Centro Cultural Villa de Nerja',
          text:
            'Musik, dans, teater och säsongsprogram på stadens kulturcentrum.',
          href: nerjaCultureProgramme,
          linkLabel: 'Till programmet'
        }
      ]
    },
    seasonality: {
      title: 'Hur nattlivet förändras med säsongen',
      intro:
        'Nerja bygger inte på samma formel året runt. En kväll kan kännas helt olika i augusti, oktober och januari och ändå vara tydligt Nerja.',
      items: [
        {
          title: 'Sommar',
          text:
            'Staden är fullare, kvällarna börjar senare, terrasserna håller igång längre och Burriana blir mer givande.'
        },
        {
          title: 'Mellansäsong',
          text:
            'Ofta den bästa balansen: tillräckligt med atmosfär för en bra kväll, med mindre trängsel och större enkelhet.'
        },
        {
          title: 'Vinter',
          text:
            'Nattlivet blir mindre och mer selektivt, men staden förblir social. Färre ställen bär en större del av kvällsenergin.'
        },
        {
          title: 'Festivaler',
          text:
            'Vid vissa tider på året breddar offentliga firanden betydelsen av nattliv långt bortom enbart barer.'
        }
      ],
      note:
        'Öppningsdagar, föreställningar och atmosfären i de olika områdena ändras med säsongen. Kontrollera aktuell information strax före kvällen.'
    },
    travelerFit: {
      title: 'Vem Nerjas nattliv passar bäst för',
      intro:
        'Stadens bredd gör det enkelt att skapa en passande kväll utan att tvinga hela sällskapet in i samma rytm.',
      items: [
        {
          title: 'Par',
          text:
            'Nerja är särskilt bra för par eftersom kvällarna kan förbli vackra, promenadvänliga och varierade. Solnedgång, middag och ett fint ställe för drinkar känns redan komplett.'
        },
        {
          title: 'Vänskapsgrupper',
          text:
            'Staden passar grupper som vill ha flexibilitet: något socialt och kanske något livligare senare, utan att behöva en stor klubbdestination.'
        },
        {
          title: 'Familjer i centrum',
          text:
            'Den tidiga kvällen är fortfarande en del av stadens bredare folkliv och känns bekvämare än en semesterort som bara kretsar kring nattliv.'
        },
        {
          title: 'Maximal partyintensitet',
          text:
            'Nerja kan erbjuda en livlig natt men är inte främst en destination för intensivt klubbliv. Styrkan ligger i valmöjligheter och kvaliteten på stämningen.'
        }
      ]
    },
    plans: {
      title: 'Tre enkla sätt att planera en kväll i Nerja',
      intro:
        'Använd en enkel följd som startpunkt och lämna utrymme att senare bestämma hur långt kvällen ska fortsätta.',
      items: [
        {
          title: 'Kväll för två',
          text:
            'Börja vid Balcón eller på Carabeosidan för solnedgången, fortsätt med middag och avsluta med en lugn cocktail eller vinbar.'
        },
        {
          title: 'Kväll med vänner',
          text:
            'Börja med tapas, gå vidare till det centrala barområdet senare och lämna sista valet öppet: en bar till, en drink till eller en sen avslutning.'
        },
        {
          title: 'Sommarkväll vid havet',
          text:
            'Tillbringa eftermiddagen vid havet, stanna för middag i Burriana och behåll kvällen vid kusten eller återvänd till centrum för mer rörelse.'
        }
      ],
      transportNote:
        'Gamla stan och de centrala kvällsområdena är promenadvänliga när ni väl är i Nerja. Om ni bor i Frigiliana bör hemresan ordnas före kvällen; att gå mellan orterna på natten är inte praktiskt och en taxi i sista minuten kan inte garanteras.'
    },
    faq: {
      title: 'Vanliga frågor om nattlivet i Nerja',
      items: [
        {
          question: 'Var ligger Nerjas viktigaste nattlivsområde?',
          answer:
            'Den största koncentrationen för senare timmar finns runt Plaza Tutti Frutti och de centrala gatorna intill. Balcón och gamla stan passar bättre för vackra, tidigare och lugnare kvällar.'
        },
        {
          question: 'Är Nerja bättre för par eller partygrupper?',
          answer:
            'Överlag är Nerja starkast för par, blandade grupper och resenärer som vill ha flera alternativ. Grupper hittar ändå en senare och livligare atmosfär runt Plaza Tutti Frutti.'
        },
        {
          question: 'Finns det nattliv nära stranden?',
          answer:
            'Ja. Burriana är det tydligaste strandnära kvällsområdet, särskilt under varmare månader, men atmosfären är vanligtvis lugnare än i det centrala barområdet.'
        },
        {
          question: 'Är nattlivet värt det även på vintern?',
          answer:
            'Ja, men i mindre och mer selektiv skala. Fördelen är att staden känns bekvämare och mindre pressad, även om öppningsdagar bör kontrolleras.'
        }
      ]
    },
    combine: {
      title: 'En kväll som växer fram ur dagen',
      intro:
        'En middag i Nerja kan enkelt fortsätta på en terrass och senare bland barerna. Om det inte är er sorts kväll finns flera andra rytmer för dagen.',
      items: [
        {
          title: 'Från middagen vidare in i kvällen',
          text:
            'Lunch vid havet och middag i gamla stan leder till olika sorters kvällar. Om ni vill fortsätta senare är barerna i centrum den bättre startpunkten.',
          linkToken: 'nerja_food_authority',
          linkLabel: 'Hitta middagsmiljön som passar kvällen'
        },
        {
          title: 'Lämna plats för en annan Nerja-dag',
          text:
            'Om en sen kväll inte passar ger stränder, grottor, Balcón, Verano Azul och dagsutflykter vistelsen en annan rytm.',
          linkToken: 'nerja_experience_hub',
          linkLabel: 'Upplev Nerja genom kust, grottor, kultur och kvällar'
        }
      ]
    },
    closing: {
      title: 'Och sedan hem, till fots',
      lead:
        'Styrkan ligger inte i att konkurrera med kustens största partydestinationer, utan i flera bra versioner av en kväll på liten yta: vacker, social, kulturell, havsnära eller sen.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Visa AMARA Playa',
      stayReason:
        'AMARA Playa ligger några hundra meter från Balcón, på femte våningen, mot baksidan: nära nog för att gå hem, tyst nog för att sova.'
    }
  }
};
