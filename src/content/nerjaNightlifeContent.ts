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
  };
}

const maps = {
  tuttiFrutti:
    'https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja',
  balcon:
    'https://www.google.com/maps/search/?api=1&query=Balcon+de+Europa+Nerja',
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
        'Plan nightlife in Nerja by area and mood: old-town terraces, Plaza Tutti Frutti, Burriana, flamenco, seasonal atmosphere and easy evening ideas.',
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
        'Nightlife in Nerja — the best areas, evening styles and where each mood belongs',
      paragraphs: [
        'Nightlife in Nerja works differently from the high-intensity party resorts farther west on the Costa del Sol. The town is lively and social after dark, but its strength is variety rather than giant clubs or one all-night strip: sunset terraces, seafood and tapas that turn into drinks, relaxed beach evenings and a central pub zone for a later, louder finish.',
        'That balance suits couples, groups of friends and families who still want to enjoy the centre in the early evening. You can build a beautiful night around the old town and sea, or move between central bars without committing to a full party-town atmosphere.',
        'The simplest way to understand Nerja after dark is geographically. Once you know the main zones, it becomes easy to choose between scenery and sunset, social bar-hopping, a beach-led evening or something cultural such as flamenco and live performance.'
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
        'Yes — especially for travelers who want a balanced evening scene rather than a pure party destination. Nerja is strongest for walkable evenings, sunset drinks, cocktail bars, seafood tapas, relaxed beach bars and one central late-night zone. It is less convincing if your only goal is large-scale clubbing until sunrise.',
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
            'Burriana when you want the beach, open air and a slower summer rhythm to remain part of the evening.'
        }
      ]
    },
    areas: {
      title: 'The three main nightlife areas in Nerja',
      intro:
        'Most evenings fall into three recognizable zones. This is the practical map of the town: each area serves a different mood, and timing matters almost as much as location.',
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
            '2. Balcón de Europa & old town — sunset, cocktails and scenery',
          paragraphs: [
            'This is Nerja’s most attractive evening zone. The Balcón is the landmark, but the real strength lies in the surrounding old-town streets, terraces and side lanes, where sunset becomes drinks and drinks become dinner.',
            'Travelers who value atmosphere, sea views, a walkable night and a more polished tone will usually start here. The appeal is not late-night momentum but making the whole evening feel special from the beginning.'
          ],
          bestFor:
            'Couples, date nights, sunset drinks, wine bars, terraces and calmer cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — relaxed coastal evenings',
          paragraphs: [
            'Burriana is not Nerja’s strongest nightlife area in the classic urban sense, but it is one of the best places when you want the sea to remain part of the night. Expect beach dinners, open-air drinks and a softer rhythm.',
            'In summer it works particularly well as an extended beach day: you do not reset into nightlife, but let the afternoon continue into dinner and one more drink.'
          ],
          bestFor:
            'Summer evenings, beach bars, slower nights, couples and a sea-led atmosphere.',
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
            'Burriana suits sea air, low pressure and a softer pace, especially on warm evenings.'
        },
        {
          title: 'Best all-round strategy',
          text:
            'Start around the Balcón or old town for sunset and first drinks, then move to the central pub zone only if you want a louder finish.'
        }
      ]
    },
    eveningStyles: {
      title: 'The kinds of nightlife Nerja does best',
      intro:
        'Nerja works when the evening unfolds rather than follows a rigid programme. Food, scenery and sociability can carry as much weight as the final bar.',
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
            'In warmer months, stay near the coast and let dinner and drinks remain connected to the open-air beach atmosphere rather than switching to an urban rhythm.'
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
        'That is why “nightlife” here means more than bars and clubs. The fuller answer includes terraces, food, beach atmosphere, social venues and cultural texture. Programmes vary, so check current dates rather than assuming a regular weekly show.'
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
            'Often the most balanced period: enough atmosphere for a strong evening, with less crowd pressure and more ease.'
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
        'Opening days, performance schedules and the atmosphere of individual areas change with the season. Check current information shortly before your evening.'
    },
    travelerFit: {
      title: 'Who nightlife in Nerja suits best',
      intro:
        'The town’s range makes it easy to build a suitable evening without forcing everyone into the same rhythm.',
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
            'Nerja can provide a lively night, but it is not primarily a hardcore clubbing destination. Its strength is range and quality of mood, not extremity.'
        }
      ]
    },
    plans: {
      title: 'Three easy ways to plan a night in Nerja',
      intro:
        'Use one simple sequence as a starting point, then leave space to decide how far the evening should continue.',
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
            'Yes, but the rhythm is smaller and more selective. The advantage is a more comfortable town with less pressure, although individual opening days should be checked.'
        }
      ]
    },
    combine: {
      title: 'Combine your evening with the rest of the stay',
      intro:
        'The best evenings in Nerja often work because the day was right first. A beach afternoon or a slower walk can make dinner and drinks feel more natural afterward.',
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
      apartmentsCta: 'View AMARA Playa'
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
        'Nachtleben in Nerja — die besten Viertel, Abendstimmungen und wo sie zu finden sind',
      paragraphs: [
        'Das Nachtleben in Nerja funktioniert anders als in den besonders intensiven Partyorten weiter westlich an der Costa del Sol. Nach Einbruch der Dunkelheit ist die Stadt lebendig und gesellig, doch ihre Stärke liegt in der Vielfalt statt in riesigen Clubs oder einer einzigen Partymeile: Terrassen zum Sonnenuntergang, Fisch und Tapas mit anschließendem Drink, entspannte Strandabende und eine zentrale Barzone für einen späteren, lauteren Abschluss.',
        'Diese Balance passt zu Paaren, Freundesgruppen und Familien, die das Zentrum auch am frühen Abend genießen möchten. Rund um Altstadt und Meer lässt sich ein schöner Abend gestalten; wer später mehr Bewegung sucht, kann zwischen den zentralen Bars wechseln, ohne sich gleich für einen reinen Partyurlaub zu entscheiden.',
        'Am einfachsten lässt sich Nerja am Abend geografisch verstehen. Wer die wichtigsten Zonen kennt, kann gezielt zwischen Aussicht und Sonnenuntergang, einer geselligen Bar-Runde, einem Abend am Strand oder einem Kulturprogramm mit Flamenco und Live-Auftritten wählen.'
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
        'Ja – besonders für Reisende, die eine ausgewogene Abendszene statt eines reinen Partyortes suchen. Nerja überzeugt mit gut begehbaren Abenden, Drinks zum Sonnenuntergang, Cocktailbars, Fisch und Tapas, entspannten Strandlokalen und einer zentralen Zone für später. Weniger passend ist die Stadt, wenn es ausschließlich um große Clubs bis zum Sonnenaufgang geht.',
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
            'Burriana, wenn Strand, offene Luft und ein langsamer Sommerrhythmus Teil des Abends bleiben sollen.'
        }
      ]
    },
    areas: {
      title: 'Die drei wichtigsten Abendzonen in Nerja',
      intro:
        'Die meisten Abende spielen sich in drei gut erkennbaren Bereichen ab. Das ist die praktische Karte der Stadt: Jede Zone steht für eine andere Stimmung, und der richtige Zeitpunkt ist fast ebenso wichtig wie der Ort.',
      items: [
        {
          title: '1. Plaza Tutti Frutti — die wichtigste Barzone',
          paragraphs: [
            'Die Plaza Tutti Frutti ist Nerjas deutlichster Treffpunkt für das spätere Nachtleben. Entscheidend ist weniger ein einzelnes Lokal als die Dichte: Bars und spätere Ausgehmöglichkeiten liegen nah beieinander, Menschen wechseln zwischen ihnen, und die Energie steigt im Verlauf des Abends.',
            'Wählen Sie diese Gegend, wenn Sie Bewegung statt Ruhe suchen. Am besten funktioniert sie nach dem Abendessen; früh wirkt sie manchmal noch wie im Übergang, später wird sie zur offensichtlichsten geselligen Nachtzone der Stadt.'
          ],
          bestFor:
            'Bar-Hopping, lockere Gruppen, spätere Starts, jüngere Energie und spontane Nächte.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & Altstadt — Sonnenuntergang und Cocktails',
          paragraphs: [
            'Dies ist Nerjas schönste Abendzone. Der Balcón ist das Wahrzeichen, doch die eigentliche Stärke liegt in den umliegenden Altstadtgassen, Terrassen und kleinen Seitenstraßen, in denen aus dem Sonnenuntergang Drinks und aus Drinks ein Abendessen werden.',
            'Wer Atmosphäre, Meerblick, kurze Wege und einen etwas gepflegteren Ton schätzt, beginnt meist hier. Es geht weniger um späte Dynamik als darum, den ganzen Abend von Anfang an besonders wirken zu lassen.'
          ],
          bestFor:
            'Paare, Dates, Drinks zum Sonnenuntergang, Weinbars, Terrassen und ruhigere Cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — entspannte Abende am Meer',
          paragraphs: [
            'Burriana ist im klassischen städtischen Sinn nicht Nerjas stärkste Ausgehzone, aber einer der besten Orte, wenn das Meer Teil des Abends bleiben soll. Erwarten Sie Strandrestaurants, Drinks im Freien und ein weicheres Tempo.',
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
        'Es gibt nicht den einen besten Bereich. Die sinnvolle Antwort hängt davon ab, mit wem Sie unterwegs sind und wie lebhaft die zweite Hälfte des Abends werden soll.',
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
            'Burriana passt zu Meeresluft, wenig Druck und einem sanfteren Tempo – besonders an warmen Abenden.'
        },
        {
          title: 'Beste Gesamtstrategie',
          text:
            'Beginnen Sie am Balcón oder in der Altstadt mit Sonnenuntergang und ersten Drinks. Wechseln Sie nur dann in die zentrale Barzone, wenn der Abschluss lauter werden darf.'
        }
      ]
    },
    eveningStyles: {
      title: 'Welche Art von Nachtleben Nerja besonders gut kann',
      intro:
        'Nerja ist am stärksten, wenn sich der Abend entwickelt, statt einem festen Programm zu folgen. Essen, Kulisse und Geselligkeit können genauso wichtig sein wie die letzte Bar.',
      items: [
        {
          title: 'Erst Tapas, dann Drinks',
          text:
            'Beginnen Sie mit Fisch oder Tapas und entscheiden Sie erst danach, ob es mit Cocktails oder einer lebhafteren Barzone weitergeht. Das wirkt lokal, flexibel und auch ohne große Partynacht vollständig.'
        },
        {
          title: 'Cocktails und Terrassen',
          text:
            'Eine schöne Terrasse, ein guter Drink und eine Umgebung, in der man gern bleibt, reichen oft aus. Genau darin liegt eine der natürlichsten Abendstärken Nerjas.'
        },
        {
          title: 'Ein Abend rund um den Strand',
          text:
            'Bleiben Sie in den wärmeren Monaten an der Küste und lassen Sie Abendessen und Drinks mit der offenen Strandatmosphäre verbunden, statt in einen städtischen Rhythmus zu wechseln.'
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
        'Deshalb bedeutet „Nachtleben“ hier mehr als Bars und Clubs. Zum vollständigen Bild gehören Terrassen, Essen, Strandatmosphäre, gesellige Lokale und Kultur. Programme ändern sich; prüfen Sie aktuelle Termine, statt von einer festen wöchentlichen Vorstellung auszugehen.'
      ],
      items: [
        {
          title: 'Flamenco-Abende',
          text:
            'Verstehen Sie einen Flamenco-Abend als kulturelles Erlebnis und nicht als garantiertes tägliches Unterhaltungsangebot. Er passt zu Paaren und kulturinteressierten Gästen, die den Süden Spaniens im Abend wiederfinden möchten.',
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
            'Oft die ausgewogenste Zeit: genügend Atmosphäre für einen guten Abend, aber weniger Andrang und mehr Leichtigkeit.'
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
        'Öffnungstage, Veranstaltungsprogramme und die Stimmung einzelner Viertel ändern sich saisonal. Prüfen Sie die aktuellen Angaben kurz vor dem Abend.'
    },
    travelerFit: {
      title: 'Für wen Nerjas Nachtleben besonders gut passt',
      intro:
        'Durch die Bandbreite lässt sich leicht ein Abend gestalten, ohne alle Beteiligten in denselben Rhythmus zu zwingen.',
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
            'In Nerja kann man lebhaft ausgehen, doch die Stadt ist kein Hardcore-Clubbing-Ziel. Ihre Stärke sind Auswahl und Qualität der Stimmung, nicht das Extrem.'
        }
      ]
    },
    plans: {
      title: 'Drei einfache Pläne für einen Abend in Nerja',
      intro:
        'Nutzen Sie eine einfache Reihenfolge als Ausgangspunkt und lassen Sie offen, wie weit der Abend später noch gehen soll.',
      items: [
        {
          title: 'Abend zu zweit',
          text:
            'Beginnen Sie am Balcón oder auf der Carabeo-Seite mit dem Sonnenuntergang, gehen Sie anschließend essen und schließen Sie mit einem ruhigen Cocktail oder einer Weinbar ab.'
        },
        {
          title: 'Abend mit Freunden',
          text:
            'Starten Sie mit Tapas, wechseln Sie später in die zentrale Barzone und lassen Sie die letzte Entscheidung offen: noch eine Bar, ein weiterer Drink oder ein später Abschluss.'
        },
        {
          title: 'Sommerabend am Meer',
          text:
            'Verbringen Sie den Nachmittag am Strand, bleiben Sie zum Abendessen in Burriana und setzen Sie den Abend entweder an der Küste oder lebhafter im Zentrum fort.'
        }
      ],
      transportNote:
        'Altstadt und zentrale Ausgehzonen sind innerhalb Nerjas gut zu Fuß erreichbar. Wenn Sie in Frigiliana wohnen, organisieren Sie die Rückfahrt vor dem Abend; der Weg zwischen den Orten ist nicht als nächtlicher Spaziergang gedacht, und auf ein kurzfristig verfügbares Taxi sollten Sie sich nicht verlassen.'
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
            'Ja, allerdings in kleinerem und selektiverem Rhythmus. Die Stadt ist dann angenehmer und weniger voll; die Öffnungstage einzelner Lokale sollten geprüft werden.'
        }
      ]
    },
    combine: {
      title: 'Verbinden Sie den Abend mit dem restlichen Aufenthalt',
      intro:
        'Die besten Abende in Nerja funktionieren oft deshalb, weil der Tag vorher gepasst hat. Ein Nachmittag am Strand oder ein langsamer Spaziergang lässt Essen und Drinks später natürlicher wirken.',
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
      apartmentsCta: 'AMARA Playa ansehen'
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
        'Vida nocturna en Nerja — las mejores zonas, estilos de noche y el ambiente de cada una',
      paragraphs: [
        'La vida nocturna de Nerja funciona de forma distinta a la de los destinos de fiesta intensa situados más al oeste de la Costa del Sol. La ciudad es animada y social al caer la noche, pero su gran ventaja es la variedad, no las discotecas enormes ni una única calle que no duerme: terrazas al atardecer, pescado y tapas que terminan en una copa, noches relajadas junto a la playa y una zona céntrica de bares para acabar más tarde y con más ambiente.',
        'Ese equilibrio encaja con parejas, grupos de amigos y familias que todavía quieren disfrutar del centro a primera hora de la noche. Podéis crear una velada preciosa alrededor del casco antiguo y el mar, o moveros entre bares céntricos sin asumir el ambiente de un destino dedicado por completo a la fiesta.',
        'La forma más útil de entender Nerja por la noche es geográfica. Cuando conocéis las zonas principales, resulta sencillo elegir entre paisaje y puesta de sol, una noche social de bar en bar, un plan junto a la playa o una propuesta cultural con flamenco y actuaciones en directo.'
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
        'Sí, sobre todo si buscáis una escena nocturna equilibrada y no un destino de fiesta pura. Nerja destaca por noches que se pueden recorrer a pie, copas al atardecer, coctelerías, pescado y tapas, locales relajados junto a la playa y una zona céntrica para seguir hasta más tarde. Convence menos si vuestro único objetivo son grandes discotecas hasta el amanecer.',
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
            '2. Balcón de Europa y casco antiguo — atardecer y cócteles',
          paragraphs: [
            'Es la zona más bonita para empezar la noche. El Balcón es el símbolo, pero la verdadera fuerza está en las calles, terrazas y rincones del casco antiguo, donde el atardecer se convierte en copas y las copas en cena.',
            'Quienes valoran el ambiente, las vistas al mar, caminar y un tono algo más cuidado suelen empezar aquí. No se trata tanto de mantener la energía hasta muy tarde como de que toda la velada resulte especial desde el principio.'
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
      apartmentsCta: 'Ver AMARA Playa'
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
        'Nachtleven in Nerja — de beste buurten, avondstijlen en waar elke sfeer thuishoort',
      paragraphs: [
        'Het nachtleven in Nerja werkt anders dan in de intensieve badplaatsen verder naar het westen aan de Costa del Sol. De stad is levendig en sociaal zodra het donker wordt, maar de kracht ligt in variatie, niet in enorme clubs of één strook die de hele nacht doorgaat: terrassen bij zonsondergang, vis en tapas die overgaan in een drankje, ontspannen avonden aan zee en een centrale barzone voor wie later en luidruchtiger wil eindigen.',
        'Die balans past bij stellen, vriendengroepen en gezinnen die in de vroege avond nog van het centrum willen genieten. Rond de oude stad en de zee bouwt u een mooie avond op, of u beweegt later tussen centrale bars zonder te kiezen voor de sfeer van een volledige feestbestemming.',
        'De handigste manier om Nerja na zonsondergang te begrijpen is geografisch. Wie de belangrijkste zones kent, kiest eenvoudig tussen uitzicht en zonsondergang, een sociale avond langs bars, een plan aan het strand of cultuur zoals flamenco en liveoptredens.'
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
        'Ja, vooral voor reizigers die een evenwichtige avondscene zoeken in plaats van een pure feestbestemming. Nerja is sterk in beloopbare avonden, drankjes bij zonsondergang, cocktailbars, vis en tapas, ontspannen strandbars en één centrale zone voor later. Minder overtuigend is de stad wanneer grote clubs tot zonsopkomst uw enige doel zijn.',
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
            'Kies dit gebied wanneer u beweging in plaats van stilte wilt. Het werkt het best na het diner; vroeg kan het nog als overgang voelen, later wordt het de meest uitgesproken sociale uitgaanszone van de stad.'
          ],
          bestFor:
            'Langs bars gaan, informele groepen, later beginnen, jongere energie en spontane avonden.',
          mapHref: maps.tuttiFrutti
        },
        {
          title:
            '2. Balcón de Europa & oude stad — zonsondergang en cocktails',
          paragraphs: [
            'Dit is Nerja’s mooiste avondzone. Het Balcón is het herkenningspunt, maar de echte kracht ligt in de omliggende straatjes, terrassen en zijlanen, waar de zonsondergang overgaat in drankjes en drankjes in diner.',
            'Reizigers die sfeer, zeezicht, een beloopbare avond en een verzorgdere toon waarderen, beginnen meestal hier. Het gaat minder om energie tot diep in de nacht dan om de hele avond vanaf het begin bijzonder te laten voelen.'
          ],
          bestFor:
            'Stellen, dates, drankjes bij zonsondergang, wijnbars, terrassen en rustige cocktails.',
          mapHref: maps.balcon
        },
        {
          title: '3. Burriana — ontspannen avonden aan zee',
          paragraphs: [
            'Burriana is in klassieke stedelijke zin niet Nerja’s sterkste uitgaansgebied, maar wel een van de beste plekken wanneer de zee onderdeel van de nacht moet blijven. Verwacht diners aan het strand, drankjes buiten en een zachter tempo.',
            'Vooral in de zomer werkt het als verlenging van de stranddag: u schakelt niet over naar nachtleven, maar laat de middag doorlopen in diner en nog één drankje.'
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
        'Er is niet één beste uitgaansgebied. Het nuttige antwoord hangt af van uw gezelschap en hoe levendig de tweede helft van de avond mag worden.',
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
            'Begin rond het Balcón of in de oude stad met zonsondergang en eerste drankjes. Ga alleen naar de centrale barzone als u luidruchtiger wilt eindigen.'
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
            'Begin met vis of tapas en beslis pas daarna of u doorgaat naar cocktails of een drukkere barzone. Het voelt lokaal, flexibel en compleet zonder dat een grote stapavond nodig is.'
        },
        {
          title: 'Cocktails en terrassen',
          text:
            'Eén mooi terras, een goed drankje en een omgeving waar u wilt blijven zijn vaak genoeg. Dit is een van Nerja’s meest natuurlijke avondvormen.'
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
        'Openingsdagen, voorstellingen en de sfeer per gebied veranderen met het seizoen. Controleer actuele informatie kort voor uw avond.'
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
        'De oude stad en centrale uitgaanszones zijn eenmaal in Nerja goed beloopbaar. Verblijft u in Frigiliana, regel dan vooraf het vervoer terug; tussen beide plaatsen lopen is ’s nachts niet praktisch en op het laatste moment een taxi vinden is niet gegarandeerd.'
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
      title: 'Combineer uw avond met de rest van het verblijf',
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
            'Een rustige berg-, dorps- of kustwandeling maakt diner en drankjes in Nerja nog prettiger, zolang u genoeg tijd laat om op te frissen.',
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
      apartmentsCta: 'Bekijk AMARA Playa'
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
        'Nattliv i Nerja — de bästa områdena, kvällsstilarna och var varje känsla hör hemma',
      paragraphs: [
        'Nattlivet i Nerja fungerar annorlunda än på de intensiva partydestinationerna längre västerut på Costa del Sol. Staden är livlig och social efter mörkrets inbrott, men styrkan ligger i variation snarare än stora klubbar eller en enda gata som håller igång hela natten: terrasser i solnedgången, fisk och tapas som övergår i drinkar, avkopplade kvällar vid stranden och ett centralt barområde för en senare och livligare avslutning.',
        'Den balansen passar par, vänskapsgrupper och familjer som fortfarande vill njuta av centrum tidigt på kvällen. Ni kan bygga en vacker kväll kring gamla stan och havet eller röra er mellan centrala barer utan att välja känslan av en renodlad partystad.',
        'Det enklaste sättet att förstå Nerja efter mörkrets inbrott är geografiskt. När ni känner till huvudområdena blir det lätt att välja mellan utsikt och solnedgång, social barrunda, en kväll vid stranden eller kultur som flamenco och liveframträdanden.'
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
        'Ja – särskilt för resenärer som vill ha en balanserad kvällsscen snarare än en ren partydestination. Nerja är starkt för promenadvänliga kvällar, drinkar i solnedgången, cocktailbarer, fisk och tapas, lugna strandbarer och ett centralt område för senare timmar. Staden passar sämre om det enda målet är stora klubbar fram till gryningen.',
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
            '2. Balcón de Europa & gamla stan — solnedgång och cocktails',
          paragraphs: [
            'Det här är Nerjas vackraste kvällsområde. Balcón är landmärket, men den verkliga styrkan ligger i gamla stans gator, terrasser och gränder där solnedgång blir drinkar och drinkar blir middag.',
            'Resenärer som uppskattar atmosfär, havsutsikt, promenadavstånd och en mer genomtänkt ton börjar oftast här. Det handlar mindre om sent tempo och mer om att hela kvällen känns speciell från början.'
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
      apartmentsCta: 'Visa AMARA Playa'
    }
  }
};
