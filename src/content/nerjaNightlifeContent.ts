import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

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
  ogImage: '/images/amara-playa/apartment/chaparril-13.webp',
  languages: {
    en: {
      title: 'Nightlife in Nerja: Areas, Bars & Evening Guide',
      description:
        'Plan an evening in Nerja: old-town terraces, Plaza Tutti Frutti bars, Burriana beach dinners, flamenco and seasonal opening patterns.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nachtleben in Nerja: Viertel, Bars & Abend-Guide',
      description:
        'Nerjas Nachtleben nach Viertel und Stimmung planen: Altstadtterrassen, Plaza Tutti Frutti, Burriana, Flamenco, Jahreszeiten und Abendideen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Vida nocturna en Nerja: zonas, bares y ambiente',
      description:
        'Planificad la noche en Nerja según la zona y el ambiente: terrazas del casco antiguo, Plaza Tutti Frutti, Burriana, flamenco y propuestas fáciles.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Nachtleven in Nerja: buurten, bars & avondgids',
      description:
        'Plan het nachtleven in Nerja per buurt en sfeer: terrassen in de oude stad, Plaza Tutti Frutti, Burriana, flamenco en eenvoudige avondideeën.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nattliv i Nerja: områden, barer & kvällsguide',
      description:
        'Planera Nerjas nattliv efter område och känsla: terrasser i gamla stan, Plaza Tutti Frutti, Burriana, flamenco och enkla kvällsupplägg.',
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
      kicker: 'Evening guide',
      title:
        'Nightlife in Nerja — where to go after dark',
      paragraphs: [
        'Nerja is lively after dark, but it is not built around giant clubs or one all-night strip. Most evenings start with a sunset terrace, seafood or tapas; Plaza Tutti Frutti is the clearest option for later bars.',
        'Choose the old town and Balcón de Europa for dinner, wine and sea views. Choose Burriana for a beach dinner and open-air drinks. For flamenco, music or theatre, check the current programme before making plans.',
        'If you are staying in Frigiliana, arrange the journey back before the evening. Do not rely on walking between the towns or finding a taxi at the last minute.'
      ],
      imageAlt:
        'Calm AMARA Playa interior as a base for evenings in coastal Nerja'
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
      reviewed: 'Editorially reviewed: July 2026',
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
      title: 'The three main nightlife areas in Nerja',
      intro:
        'Most evenings centre on three areas. The old town is strongest around dinner and sunset, Plaza Tutti Frutti becomes livelier later, and Burriana keeps the evening beside the beach.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — the main bar-hopping area',
          paragraphs: [
            'Plaza Tutti Frutti is Nerja’s clearest nightlife hub. The value lies less in one venue than in the density: bars and later-night spots close together, people moving between them and a visible rise in energy as the evening progresses.',
            'Choose this area when you want movement rather than stillness. It works best after dinner; early in the evening it can feel transitional, while later it becomes the town’s most obvious social nightlife zone.'
          ],
          bestFor:
            'Bar-hopping, casual groups, later starts, younger energy and spontaneous nights.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & old town — our Cochran’s sundowner',
          paragraphs: [
            'This is Nerja’s most attractive evening zone. The Balcón is the landmark, but the real strength lies in the surrounding old-town streets, terraces and side lanes, where sunset becomes drinks and drinks become dinner.',
            'Our tested version is specific: in summer 2025 we left the car by AMARA Playa on Calle Castilla Pérez, walked into the centre and watched the sunset from Cochran’s Terrace over a Cuba Libre and a Mai Tai. We remember the walk as roughly 450 metres rather than a measured route. Check that the venue and terrace are operating before setting out.'
          ],
          bestFor:
            'Couples, date nights, sunset drinks, wine bars, terraces and calmer cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — relaxed coastal evenings',
          paragraphs: [
            'Burriana is not Nerja’s main late-night area. Come here for beach dinners and open-air drinks, especially in the warmer months.',
            'In summer it works particularly well as an extended beach day: you do not reset into nightlife, but let the afternoon continue into dinner and one more drink.'
          ],
          bestFor:
            'Summer evenings, beach restaurants, open-air drinks and couples.',
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
      title: 'Flamenco, live performance and Nerja’s local dimension',
      paragraphs: [
        'Nerja is not only about bars. Flamenco, live performance and cultural programming can give the evening a recognizably Andalusian dimension that a purely beach-led resort rarely offers.',
        'Nerja also schedules flamenco, music, dance and theatre. Programmes vary, so check current dates rather than assuming a regular weekly show.'
      ],
      items: [
        {
          title: 'Flamenco nights',
          text:
            'Approach a flamenco evening as a cultural experience rather than guaranteed nightly entertainment. It suits couples and travelers who want the night to feel rooted in southern Spain.',
          href: maps.flamenco,
          linkLabel: 'Search current flamenco options'
        },
        {
          title: 'Programmed cultural evenings',
          text:
            'The Centro Cultural Villa de Nerja schedules music, dance, theatre and seasonal performances, giving longer stays another evening format beyond dinner and drinks.',
          href: nerjaCultureProgramme,
          linkLabel: 'Check the official cultural programme'
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
      title: 'Combine your evening with the rest of the stay',
      intro:
        'A beach afternoon or an easy walk can lead naturally into dinner. Leave enough time to change and arrange transport if you are returning to Frigiliana.',
      items: [
        {
          title: 'Start at the beach',
          text:
            'A day at Burriana or another beach nearby creates the easiest transition into a coastal dinner and relaxed evening.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'See the beach guide'
        },
        {
          title: 'Walk before the evening',
          text:
            'A slower mountain, village or coastal walk makes dinner and drinks in Nerja feel even better — provided you leave enough time to reset.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        }
      ]
    },
    closing: {
      title: 'Why nightlife in Nerja works so well',
      lead:
        'Its strength is not competing with the coast’s biggest party destinations. It is offering several good versions of an evening in a compact setting: scenic, social, cultural, beach-led or late.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View AMARA Playa',
      stayReason:
        'The evening around the Balcón runs late, and AMARA Playa sits about five hundred metres away on the fifth floor with its rooms set back from the street — close enough to walk home, far enough to sleep.'
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
      kicker: 'Guide für den Abend',
      title:
        'Nachtleben in Nerja — wohin am Abend?',
      paragraphs: [
        'Nerja ist nach Einbruch der Dunkelheit lebendig, aber nicht auf riesige Clubs oder eine einzige Partymeile ausgerichtet. Die meisten Abende beginnen auf einer Terrasse, mit Fisch oder Tapas; rund um die Plaza Tutti Frutti findet ihr später die dichteste Barzone.',
        'Wählt Altstadt und Balcón de Europa für Abendessen, Wein und Meerblick. Wählt Burriana für ein Strandrestaurant und Drinks im Freien. Für Flamenco, Musik oder Theater prüft ihr am besten das aktuelle Programm.',
        'Wenn ihr in Frigiliana wohnt, organisiert die Rückfahrt vor dem Abend. Der Weg zwischen den Orten ist kein Nachtspaziergang, und ein kurzfristig verfügbares Taxi ist nicht garantiert.'
      ],
      imageAlt:
        'Ruhiges Interieur von AMARA Playa als Ausgangspunkt für Abende in Nerja'
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
      reviewed: 'Redaktionell geprüft: Juli 2026',
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
      title: 'Die drei wichtigsten Abendzonen in Nerja',
      intro:
        'Die meisten Abende konzentrieren sich auf drei Bereiche. Die Altstadt ist rund um Abendessen und Sonnenuntergang am stärksten, die Plaza Tutti Frutti wird später lebhafter und Burriana hält den Abend am Strand.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — die wichtigste Barzone',
          paragraphs: [
            'Die Plaza Tutti Frutti ist Nerjas deutlichster Treffpunkt für das spätere Nachtleben. Entscheidend ist weniger ein einzelnes Lokal als die Dichte: Bars und spätere Ausgehmöglichkeiten liegen nah beieinander, Menschen wechseln zwischen ihnen, und die Energie steigt im Verlauf des Abends.',
            'Wählt diese Gegend für Bars nach dem Abendessen. Früh kann sie noch ruhig wirken; später wird sie zur deutlichsten Ausgehzone der Stadt.'
          ],
          bestFor:
            'Bar-Hopping, lockere Gruppen, spätere Starts, jüngere Energie und spontane Nächte.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & Altstadt — unser Sundowner bei Cochran’s',
          paragraphs: [
            'Dies ist Nerjas schönste Abendzone. Der Balcón ist das Wahrzeichen, doch die eigentliche Stärke liegt in den umliegenden Altstadtgassen, Terrassen und kleinen Seitenstraßen, in denen aus dem Sonnenuntergang Drinks und aus Drinks ein Abendessen werden.',
            'Unsere selbst erprobte Variante ist konkret: Im Sommer 2025 ließen wir das Auto bei AMARA Playa an der Calle Castilla Pérez stehen, liefen ins Zentrum und sahen bei Cochran’s Terrace mit Cuba Libre und Mai Tai den Sonnenuntergang. Den Weg erinnern wir mit ungefähr 450 Metern; exakt vermessen ist er nicht. Prüft vor dem Aufbruch, ob Lokal und Terrasse aktuell geöffnet sind.'
          ],
          bestFor:
            'Paare, Dates, Drinks zum Sonnenuntergang, Weinbars, Terrassen und ruhigere Cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — entspannte Abende am Meer',
          paragraphs: [
            'Burriana ist nicht Nerjas wichtigste Zone für spätabends. Kommt hierher für Strandrestaurants und Drinks im Freien, besonders in den warmen Monaten.',
            'Besonders im Sommer funktioniert Burriana wie die Verlängerung eines Strandtages: Man wechselt nicht bewusst ins Nachtleben, sondern lässt den Nachmittag in Abendessen und einen weiteren Drink übergehen.'
          ],
          bestFor:
            'Sommerabende, Strandlokale, ruhigere Nächte, Paare und Atmosphäre am Meer.',
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
      title: 'Flamenco, Live-Auftritte und Nerjas lokale Seite',
      paragraphs: [
        'Nerja besteht am Abend nicht nur aus Bars. Flamenco, Live-Auftritte und Kulturprogramme können eine erkennbar andalusische Dimension hinzufügen, die ein reiner Strandort selten bietet.',
        'Nerja bietet außerdem Flamenco, Musik, Tanz und Theater. Programme ändern sich; prüft aktuelle Termine, statt von einer festen wöchentlichen Vorstellung auszugehen.'
      ],
      items: [
        {
          title: 'Flamenco-Abende',
          text:
            'Plant Flamenco als Kulturprogramm, nicht als garantiertes tägliches Angebot. Prüft aktuelle Termine vorab.',
          href: maps.flamenco,
          linkLabel: 'Aktuelle Flamenco-Angebote suchen'
        },
        {
          title: 'Geplante Kulturabende',
          text:
            'Das Centro Cultural Villa de Nerja zeigt Musik, Tanz, Theater und saisonale Aufführungen – eine zusätzliche Abendform für längere Aufenthalte jenseits von Essen und Drinks.',
          href: nerjaCultureProgramme,
          linkLabel: 'Offizielles Kulturprogramm prüfen'
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
      title: 'Verbindet den Abend mit dem restlichen Aufenthalt',
      intro:
        'Ein Nachmittag am Strand oder ein leichter Spaziergang lässt sich gut mit einem späteren Abendessen verbinden. Plant genug Zeit zum Umziehen und für die Rückfahrt nach Frigiliana ein.',
      items: [
        {
          title: 'Am Strand beginnen',
          text:
            'Ein Tag in Burriana oder an einem anderen nahen Strand schafft den einfachsten Übergang zu einem Abendessen an der Küste und einem entspannten Abend.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Zum Strand-Guide'
        },
        {
          title: 'Vorher spazieren gehen',
          text:
            'Ein ruhiger Weg in den Bergen, im Dorf oder an der Küste macht Abendessen und Drinks in Nerja noch angenehmer – wenn genug Zeit zum Umziehen bleibt.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        }
      ]
    },
    closing: {
      title: 'Warum Nerjas Nachtleben so gut funktioniert',
      lead:
        'Die Stärke liegt nicht im Wettbewerb mit den größten Partyorten der Küste, sondern in mehreren guten Versionen eines Abends auf engem Raum: schön, gesellig, kulturell, am Strand oder spät.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'AMARA Playa ansehen',
      stayReason:
        'Der Abend rund um den Balcón zieht sich, und AMARA Playa liegt rund fünfhundert Meter entfernt im fünften Stock, nach hinten ausgerichtet — nah genug für den Heimweg, weit genug zum Schlafen.'
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
      kicker: 'Guía para salir',
      title:
        'Vida nocturna en Nerja — dónde ir al caer la noche',
      paragraphs: [
        'Nerja está animada por la noche, pero no gira alrededor de discotecas enormes ni de una única calle de fiesta. Muchas noches empiezan con una terraza al atardecer, pescado o tapas; Plaza Tutti Frutti reúne la mayor concentración de bares para seguir después.',
        'Elegid el casco antiguo y el Balcón de Europa para cenar, tomar vino y ver el mar. Elegid Burriana para cenar junto a la playa y tomar algo al aire libre. Para flamenco, música o teatro, consultad el programa actual antes de hacer planes.',
        'Si os alojáis en Frigiliana, organizad la vuelta antes de salir. El trayecto entre ambos pueblos no es un paseo nocturno y no conviene depender de encontrar taxi a última hora.'
      ],
      imageAlt:
        'Interior tranquilo de AMARA Playa como base para salir por Nerja'
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
      reviewed: 'Revisión editorial: julio de 2026',
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
      title: 'Las tres zonas principales para salir por Nerja',
      intro:
        'La mayoría de las noches se concentran en tres áreas reconocibles. Este es el mapa práctico de la ciudad: cada zona responde a un ambiente distinto y la hora importa casi tanto como el lugar.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — la principal zona de bares',
          paragraphs: [
            'Plaza Tutti Frutti es el núcleo más claro de la noche nerjeña. Su valor no está tanto en un local concreto como en la concentración: bares y establecimientos que cierran más tarde muy próximos, gente que se mueve entre ellos y una energía que crece a medida que avanza la noche.',
            'Elegid esta zona cuando buscáis movimiento y no calma. Funciona mejor después de cenar; demasiado pronto puede parecer una zona de paso, mientras que más tarde se convierte en el punto social nocturno más evidente de la ciudad.'
          ],
          bestFor:
            'Ir de bar en bar, grupos informales, empezar tarde, ambiente joven y noches espontáneas.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa y casco antiguo — nuestro atardecer en Cochran’s',
          paragraphs: [
            'Es la zona más bonita para empezar la noche. El Balcón es el símbolo, pero la verdadera fuerza está en las calles, terrazas y rincones del casco antiguo, donde el atardecer se convierte en copas y las copas en cena.',
            'Nuestra versión está probada personalmente: en verano de 2025 dejamos el coche junto a AMARA Playa, en la calle Castilla Pérez, caminamos al centro y vimos la puesta de sol desde Cochran’s Terrace con un Cuba Libre y un Mai Tai. Recordamos unos 450 metros, no una ruta medida. Comprobad antes de salir que el local y la terraza estén abiertos.'
          ],
          bestFor:
            'Parejas, citas, copas al atardecer, bares de vinos, terrazas y cócteles tranquilos.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — noches relajadas junto al mar',
          paragraphs: [
            'Burriana no es la zona de ocio nocturno urbano más intensa de Nerja, pero sí una de las mejores cuando queréis que el mar siga formando parte de la noche. El ambiente gira en torno a cenas junto a la playa, copas al aire libre y un ritmo más suave.',
            'En verano funciona especialmente bien como prolongación del día de playa: no cambiáis de registro para “salir”, sino que dejáis que la tarde continúe con cena y una copa más.'
          ],
          bestFor:
            'Noches de verano, locales de playa, planes tranquilos, parejas y ambiente junto al mar.',
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
      title: 'Flamenco, actuaciones y la dimensión local de Nerja',
      paragraphs: [
        'Nerja no son solo bares. El flamenco, las actuaciones en directo y la programación cultural pueden añadir una dimensión claramente andaluza que un destino puramente playero rara vez ofrece.',
        'Por eso aquí “vida nocturna” significa más que bares y discotecas. La respuesta completa incluye terrazas, comida, ambiente de playa, lugares sociales y cultura. La programación cambia; comprobad las fechas actuales en lugar de dar por hecho un espectáculo semanal fijo.'
      ],
      items: [
        {
          title: 'Noches de flamenco',
          text:
            'Plantead el flamenco como una experiencia cultural y no como entretenimiento garantizado cada noche. Encaja con parejas y viajeros que quieren sentir el sur de España también al salir.',
          href: maps.flamenco,
          linkLabel: 'Buscar opciones actuales de flamenco'
        },
        {
          title: 'Noches culturales programadas',
          text:
            'El Centro Cultural Villa de Nerja programa música, danza, teatro y espectáculos estacionales, otra forma de pasar la noche durante estancias más largas.',
          href: nerjaCultureProgramme,
          linkLabel: 'Consultar la programación cultural oficial'
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
      title: 'Combinad la noche con el resto de la estancia',
      intro:
        'Las mejores noches de Nerja suelen funcionar porque el día anterior ha tenido el ritmo adecuado. Una tarde de playa o un paseo lento hacen que la cena y las copas surjan con naturalidad.',
      items: [
        {
          title: 'Empezar en la playa',
          text:
            'Un día en Burriana o en otra playa cercana crea la transición más sencilla hacia una cena junto al mar y una noche relajada.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Ver la guía de playas'
        },
        {
          title: 'Caminar antes de salir',
          text:
            'Un paseo tranquilo por la montaña, el pueblo o la costa mejora todavía más la cena y las copas en Nerja, siempre que dejéis tiempo para descansar y cambiaros.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        }
      ]
    },
    closing: {
      title: 'Por qué funciona tan bien la noche en Nerja',
      lead:
        'Su fuerza no está en competir con los grandes destinos de fiesta de la costa, sino en ofrecer varias buenas versiones de una noche en un entorno compacto: con vistas, social, cultural, junto al mar o hasta tarde.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver AMARA Playa',
      stayReason:
        'La noche alrededor del Balcón se alarga, y AMARA Playa está a unos quinientos metros, en la quinta planta y orientado hacia la parte trasera: lo bastante cerca para volver andando y lo bastante lejos para dormir.'
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
      kicker: 'Avondgids',
      title:
        'Nachtleven in Nerja — waar gaan jullie ’s avonds heen?',
      paragraphs: [
        'Nerja is ’s avonds levendig, maar draait niet om enorme clubs of één feeststrook. Veel avonden beginnen op een terras, met vis of tapas; rond Plaza Tutti Frutti zitten de meeste bars voor later.',
        'Kies de oude kern en het Balcón de Europa voor diner, wijn en zeezicht. Kies Burriana voor eten aan het strand en drankjes in de open lucht. Controleer voor flamenco, muziek of theater vooraf het actuele programma.',
        'Verblijven jullie in Frigiliana, regel dan de terugreis voordat jullie uitgaan. Tussen beide plaatsen lopen is ’s nachts niet praktisch en een taxi op het laatste moment is niet gegarandeerd.'
      ],
      imageAlt:
        'Rustig interieur van AMARA Playa als uitvalsbasis voor avonden in Nerja'
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
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
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
      title: 'De drie belangrijkste avondzones van Nerja',
      intro:
        'De meeste avonden vallen binnen drie herkenbare gebieden. Dit is de praktische kaart van de stad: elke zone heeft een andere sfeer en het tijdstip telt bijna even zwaar als de locatie.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — de belangrijkste barzone',
          paragraphs: [
            'Plaza Tutti Frutti is het duidelijkste centrum van Nerja’s latere nachtleven. De waarde zit minder in één zaak dan in de dichtheid: bars en plekken voor later liggen bij elkaar, mensen bewegen ertussen en de energie neemt zichtbaar toe naarmate de avond vordert.',
            'Kies dit gebied voor bars na het diner. Vroeg kan het nog rustig zijn; later wordt dit de duidelijkste uitgaanszone van de stad.'
          ],
          bestFor:
            'Langs bars gaan, informele groepen, later beginnen, jongere energie en spontane avonden.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & oude stad — onze sundowner bij Cochran’s',
          paragraphs: [
            'Dit is Nerja’s mooiste avondzone. Het Balcón is het herkenningspunt, maar de echte kracht ligt in de omliggende straatjes, terrassen en zijlanen, waar de zonsondergang overgaat in drankjes en drankjes in diner.',
            'Onze zelf beproefde versie is concreet: in de zomer van 2025 lieten we de auto bij AMARA Playa aan Calle Castilla Pérez staan, liepen naar het centrum en zagen vanaf Cochran’s Terrace de zon ondergaan met een Cuba Libre en een Mai Tai. We herinneren de afstand als ongeveer 450 meter; de route is niet exact gemeten. Controleer vóór vertrek of de zaak en het terras open zijn.'
          ],
          bestFor:
            'Stellen, dates, drankjes bij zonsondergang, wijnbars, terrassen en rustige cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — ontspannen avonden aan zee',
          paragraphs: [
            'Burriana is in klassieke stedelijke zin niet Nerja’s sterkste uitgaansgebied, maar wel een van de beste plekken wanneer de zee onderdeel van de nacht moet blijven. Verwacht diners aan het strand, drankjes buiten en een zachter tempo.',
            'Vooral in de zomer kunnen jullie de stranddag hier laten doorlopen in diner en nog één drankje.'
          ],
          bestFor:
            'Zomeravonden, strandbars, rustigere nachten, stellen en sfeer aan zee.',
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
      title: 'Flamenco, liveoptredens en Nerja’s lokale karakter',
      paragraphs: [
        'Nerja bestaat ’s avonds niet alleen uit bars. Flamenco, liveoptredens en culturele programmering kunnen een herkenbaar Andalusische laag toevoegen die een pure strandbestemming zelden biedt.',
        'Daarom betekent “nachtleven” hier meer dan bars en clubs. Het volledige beeld bestaat uit terrassen, eten, strandsfeer, sociale plekken en cultuur. Programma’s wisselen, dus controleer actuele data in plaats van uit te gaan van een vaste wekelijkse voorstelling.'
      ],
      items: [
        {
          title: 'Flamenco-avonden',
          text:
            'Benader flamenco als culturele ervaring en niet als gegarandeerd dagelijks vermaak. Het past bij stellen en reizigers die willen dat de avond geworteld voelt in Zuid-Spanje.',
          href: maps.flamenco,
          linkLabel: 'Zoek actuele flamenco-opties'
        },
        {
          title: 'Geprogrammeerde cultuuravonden',
          text:
            'Het Centro Cultural Villa de Nerja programmeert muziek, dans, theater en seizoensvoorstellingen en geeft langere verblijven een extra avondvorm naast diner en drankjes.',
          href: nerjaCultureProgramme,
          linkLabel: 'Bekijk het officiële cultuurprogramma'
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
      title: 'Combineer jullie avond met de rest van het verblijf',
      intro:
        'De beste avonden in Nerja werken vaak omdat de dag ervoor klopte. Een strandmiddag of rustige wandeling laat diner en drankjes daarna vanzelf ontstaan.',
      items: [
        {
          title: 'Begin op het strand',
          text:
            'Een dag in Burriana of op een ander nabijgelegen strand geeft de eenvoudigste overgang naar een diner aan zee en een ontspannen avond.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Bekijk de strandgids'
        },
        {
          title: 'Wandel voor de avond',
          text:
            'Een rustige berg-, dorps- of kustwandeling maakt diner en drankjes in Nerja nog prettiger, zolang jullie genoeg tijd laten om op te frissen.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        }
      ]
    },
    closing: {
      title: 'Waarom het nachtleven in Nerja zo goed werkt',
      lead:
        'De kracht ligt niet in concurreren met de grootste feestbestemmingen aan de kust, maar in meerdere goede versies van een avond op korte afstand: mooi, sociaal, cultureel, aan zee of laat.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Bekijk AMARA Playa',
      stayReason:
        'De avond rond het Balcón loopt door, en AMARA Playa ligt op zo’n vijfhonderd meter op de vijfde verdieping, met de kamers aan de achterzijde — dichtbij genoeg om terug te lopen, ver genoeg om te slapen.'
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
      kicker: 'Kvällsguide',
      title:
        'Nattliv i Nerja — vart går ni efter mörkrets inbrott?',
      paragraphs: [
        'Nerja är livligt efter mörkrets inbrott men kretsar inte kring stora klubbar eller en enda festgata. Många kvällar börjar på en terrass, med fisk eller tapas; kring Plaza Tutti Frutti finns den största koncentrationen av barer för senare.',
        'Välj gamla stan och Balcón de Europa för middag, vin och havsutsikt. Välj Burriana för middag vid stranden och drinkar utomhus. Kontrollera det aktuella programmet i förväg om ni vill se flamenco, musik eller teater.',
        'Om ni bor i Frigiliana ordnar ni resan tillbaka innan ni går ut. Vägen mellan orterna är ingen nattpromenad och taxi i sista minuten är inte garanterad.'
      ],
      imageAlt:
        'Lugn interiör på AMARA Playa som bas för kvällar i Nerja'
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
      reviewed: 'Redaktionellt granskat: juli 2026',
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
      title: 'Nerjas tre viktigaste kvällsområden',
      intro:
        'De flesta kvällar ryms inom tre tydliga områden. Det här är stadens praktiska karta: varje zon har sin egen känsla och tidpunkten betyder nästan lika mycket som platsen.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — det viktigaste barområdet',
          paragraphs: [
            'Plaza Tutti Frutti är Nerjas tydligaste centrum för det sena nattlivet. Värdet ligger mindre i ett enskilt ställe än i tätheten: barer och senare kvällsställen ligger nära varandra, människor rör sig mellan dem och energin ökar tydligt under kvällen.',
            'Välj området när ni vill ha rörelse snarare än stillhet. Det fungerar bäst efter middagen; tidigt kan det kännas som en övergång, medan det senare blir stadens tydligaste sociala nattlivszon.'
          ],
          bestFor:
            'Barrundor, avslappnade grupper, sena starter, yngre energi och spontana kvällar.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & gamla stan — vår sundowner på Cochran’s',
          paragraphs: [
            'Det här är Nerjas vackraste kvällsområde. Balcón är landmärket, men den verkliga styrkan ligger i gamla stans gator, terrasser och gränder där solnedgång blir drinkar och drinkar blir middag.',
            'Vår egen prövade version är konkret: sommaren 2025 lämnade vi bilen vid AMARA Playa på Calle Castilla Pérez, promenerade in till centrum och såg solnedgången från Cochran’s Terrace med en Cuba Libre och en Mai Tai. Vi minns sträckan som ungefär 450 meter; den är inte exakt uppmätt. Kontrollera före avfärd att stället och terrassen är öppna.'
          ],
          bestFor:
            'Par, dejter, drinkar i solnedgången, vinbarer, terrasser och lugna cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — avkopplade kvällar vid havet',
          paragraphs: [
            'Burriana är inte Nerjas starkaste nattlivsområde i klassisk urban mening, men en av de bästa platserna när havet ska förbli en del av kvällen. Räkna med strandmiddagar, drinkar utomhus och en mjukare rytm.',
            'Särskilt på sommaren fungerar området som en förlängd stranddag: ni byter inte över till nattliv utan låter eftermiddagen fortsätta med middag och en drink till.'
          ],
          bestFor:
            'Sommarkvällar, strandbarer, lugnare nätter, par och havsnära stämning.',
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
      title: 'Flamenco, liveframträdanden och Nerjas lokala dimension',
      paragraphs: [
        'Nerja handlar inte bara om barer på kvällen. Flamenco, liveframträdanden och kulturprogram kan ge en tydligt andalusisk dimension som en renodlad stranddestination sällan erbjuder.',
        'Därför betyder “nattliv” mer än barer och klubbar här. Helheten omfattar terrasser, mat, strandatmosfär, sociala platser och kultur. Programmen varierar, så kontrollera aktuella datum i stället för att förutsätta en fast veckoföreställning.'
      ],
      items: [
        {
          title: 'Flamencokvällar',
          text:
            'Se flamenco som en kulturupplevelse och inte som garanterad underhållning varje kväll. Det passar par och resenärer som vill att kvällen ska kännas förankrad i södra Spanien.',
          href: maps.flamenco,
          linkLabel: 'Sök aktuella flamencoalternativ'
        },
        {
          title: 'Programmerade kulturkvällar',
          text:
            'Centro Cultural Villa de Nerja erbjuder musik, dans, teater och säsongsföreställningar, vilket ger längre vistelser ett kvällsalternativ utöver middag och drinkar.',
          href: nerjaCultureProgramme,
          linkLabel: 'Se det officiella kulturprogrammet'
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
      title: 'Kombinera kvällen med resten av vistelsen',
      intro:
        'De bästa kvällarna i Nerja fungerar ofta för att dagen före hade rätt rytm. En eftermiddag vid stranden eller en lugn promenad gör middag och drinkar mer naturliga.',
      items: [
        {
          title: 'Börja vid stranden',
          text:
            'En dag i Burriana eller vid en annan strand i närheten ger den enklaste övergången till middag vid havet och en avkopplad kväll.',
          linkToken: 'frigiliana_beaches_authority',
          linkLabel: 'Se strandguiden'
        },
        {
          title: 'Promenera före kvällen',
          text:
            'En lugn bergs-, by- eller kustpromenad gör middag och drinkar i Nerja ännu trevligare, så länge ni lämnar tid att landa och byta om.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        }
      ]
    },
    closing: {
      title: 'Varför nattlivet i Nerja fungerar så bra',
      lead:
        'Styrkan ligger inte i att konkurrera med kustens största partydestinationer, utan i flera bra versioner av en kväll på liten yta: vacker, social, kulturell, havsnära eller sen.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Visa AMARA Playa',
      stayReason:
        'Kvällen kring Balcón drar ut på tiden, och AMARA Playa ligger cirka femhundra meter bort på femte våningen med rummen mot husets baksida — nära nog för hemvägen, långt nog för att sova.'
    }
  }
};
