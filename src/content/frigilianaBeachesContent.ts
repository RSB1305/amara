import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';

export interface FrigilianaBeachCard {
  title: string;
  bestFor: string;
  description: string;
  tip: string;
  mapHref: string;
}

export interface FrigilianaBeachSection {
  id: 'quiet' | 'nature' | 'nerja';
  title: string;
  intro: string;
  beaches: FrigilianaBeachCard[];
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
      linkToken: 'frigiliana_hiking_authority' | 'weather_frigiliana' | 'location_nerja';
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

const beachMaps = {
  carabeillo:
    'https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja',
  playazo:
    'https://www.google.com/maps/search/?api=1&query=Playa+El+Playazo+Nerja',
  maro: 'https://www.google.com/maps/search/?api=1&query=Playa+de+Maro',
  cantarrijan:
    'https://www.google.com/maps/search/?api=1&query=Playa+de+Cantarrijan',
  calahonda:
    'https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja',
  burriana:
    'https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja'
} as const;

const cantarrijanAccessInfo =
  'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/acantilados-de-maro-cerro-gordo-2/255035';

export const frigilianaBeachesSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-beaches-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-playa/apartment/chaparril-22.webp',
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
        'Sechs Strände bei Frigiliana, Nerja und Maro im Vergleich – mit ehrlichen Tipps zu Atmosphäre, Bedingungen, Zugang, Parken und Tageszeit.',
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
      title: 'Beaches near Frigiliana & Nerja — compare access and sea conditions',
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
        beaches: [
          {
            title: 'Carabeíllo Beach',
            bestFor: 'A quiet swim, couples and early hours',
            description:
              'A small cove tucked between Burriana and Nerja’s centre. Greenery spills down the cliffs and gives it a secluded, almost tropical character despite its town location.',
            tip:
              'We often choose Carabeíllo for a quiet afternoon swim for two. Early in the day it can feel surprisingly private; once the limited space fills, that intimacy disappears quickly.',
            mapHref: beachMaps.carabeillo
          },
          {
            title: 'El Playazo',
            bestFor: 'Picnics, long walks and room to spread out',
            description:
              'Nerja’s longest and most spacious beach feels more rustic than the central coves. Its scale makes it easier to find breathing room when the smaller beaches feel crowded.',
            tip:
              'This is our favourite picnic beach. Pack local cheese and olives, walk a little beyond the main access points and settle where the beach feels less organised.',
            mapHref: beachMaps.playazo
          }
        ]
      },
      {
        id: 'nature',
        title: 'Nature, snorkelling & kayak days',
        intro:
          'East of Nerja, the protected Maro–Cerro Gordo coast is less developed and more dependent on the sea. Come for cliffs, open water and landscape rather than guaranteed convenience.',
        beaches: [
          {
            title: 'Maro Beach',
            bestFor: 'Snorkelling, kayaking and dramatic scenery',
            description:
              'Cliffs rise directly behind this pebbly beach, and the water can be noticeably clearer than in town. It is the natural starting point for snorkelling and kayak trips along the coast.',
            tip:
              'If the sea is calm, renting a kayak is the memorable choice. Paddle for the cliffs and coves rather than for a promised waterfall: the falls depend on recent rain and are not always running.',
            mapHref: beachMaps.maro
          },
          {
            title: 'Cantarriján',
            bestFor: 'Protected nature, relaxed bathing and a fish lunch',
            description:
              'Set inside the natural park, Cantarriján combines a wild setting with a relaxed, clothing-optional atmosphere and beach restaurants known for fresh seafood.',
            tip:
              'Make time for lunch at a chiringuito rather than treating this as a quick stop. In summer, vehicle access may be regulated, so check the current arrangements before leaving.',
            mapHref: beachMaps.cantarrijan
          }
        ]
      },
      {
        id: 'nerja',
        title: 'Classic Nerja & easy full beach days',
        intro:
          'Choose these when town, facilities and the beach should fit into one simple day. They are less secluded, but much easier to combine with lunch, a walk or the old centre.',
        beaches: [
          {
            title: 'Calahonda',
            bestFor: 'A morning swim, the old town and a short beach stop',
            description:
              'Nerja’s most recognisable little cove sits directly below the Balcón de Europa, framed by old fishermen’s cottages and the historic centre above.',
            tip:
              'Go before 10:00. The light on the white cottages and the calmer water make the morning feel special, before the Balcón and the cove become busy.',
            mapHref: beachMaps.calahonda
          },
          {
            title: 'Burriana Beach',
            bestFor: 'A comfortable full day with everything nearby',
            description:
              'Wide, lively and well equipped, Burriana works when you want showers, sunbeds, water activities and restaurants without moving the car again.',
            tip:
              'It makes an easy date day: swim in the morning, take a long lunch — perhaps paella at Chiringuito AYO — then finish with a walk along the beach.',
            mapHref: beachMaps.burriana
          }
        ]
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
          title: 'Let the weather choose the order',
          text:
            'In hot summer weather, swim early and keep exposed walking away from midday. In spring and autumn, a longer route can lead the plan and the coast can remain the flexible part of the day.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Compare weather and seasons'
        },
        {
          title: 'Nerja after the swim',
          text:
            'Calahonda and Burriana are easy to combine with the Balcón de Europa, the old centre, tapas and an evening by the coast.',
          linkToken: 'location_nerja',
          linkLabel: 'Explore Nerja'
        }
      ]
    },
    closing: {
      title: 'After the beach',
      lead:
        'Shake off the salt, leave the busy coast behind and let the evening settle into Frigiliana — or stay close enough to walk back from the sea in Nerja.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View apartments'
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
      title: 'Strände bei Frigiliana & Nerja — Zugang und Bedingungen vergleichen',
      paragraphs: [
        'Von Frigiliana fahrt ihr für jeden Strand hinunter an die Küste. In Nerja liegen die Stadtstrände nahe; zu den Buchten bei Maro geht es ein Stück weiter nach Osten.',
        'Zugang, Parken, Schatten, Infrastruktur und Seegang unterscheiden sich bei den sechs Stränden deutlich. Prüft vor der Abfahrt die aktuellen Bedingungen, besonders bei den Naturbuchten.',
        'Hier kommt unsere ehrliche Auswahl für Paare: sechs Strände, ihre jeweiligen Stärken und das, was ihr vor der Abfahrt wissen solltet.'
      ],
      imageAlt:
        'Palmen und Mittelmeerküste nahe AMARA Playa in Nerja'
    },
    sectionNav: {
      coast: 'Küste wählen',
      quiet: 'Ruhige Buchten',
      nature: 'Natur & Wasser',
      nerja: 'Nerja-Klassiker',
      conditions: 'Bedingungen',
      practical: 'Gut zu wissen'
    },
    overview: {
      title: 'Stadtstrände in Nerja oder Naturbuchten bei Maro?',
      intro:
        'Nerja und Maro liegen auf der Karte dicht beieinander und fühlen sich trotzdem selten gleich an. Entscheidend ist weniger eine Rangliste als die Frage, wann ihr fahrt, wie das Meer ist und wie viel Komfort ihr möchtet.',
      items: [
        {
          title: 'Nerja',
          text:
            'Kompakte, markante Strände, die eng mit dem Stadtleben verbunden sind. Am schönsten sind sie früh, am späteren Nachmittag oder außerhalb der vollsten Sommerwochen.'
        },
        {
          title: 'Maro & der Naturpark',
          text:
            'Eine offenere, geschützte Küste mit Felsen, Kiesbuchten und der Chance auf besonders klares Wasser. Gute Vorbereitung und ruhige See zahlen sich aus.'
        },
        {
          title: 'Bedingungen auf dem Meer',
          text:
            'Sonne allein garantiert noch kein ruhiges Wasser. Wind und Luftbewegung verändern Sicht, Oberfläche und Badegefühl oft von einem Tag auf den nächsten.'
        },
        {
          title: 'Der ehrliche Kompromiss',
          text:
            'Infrastruktur bringt Bequemlichkeit und mehr Menschen. Natur verlangt etwas mehr Aufwand. Klares Wasser geht häufig mit weniger Service und schwierigerem Zugang einher.'
        }
      ]
    },
    beachSections: [
      {
        id: 'quiet',
        title: 'Ruhige Buchten & langsame Nachmittage',
        intro:
          'Diese Strände wählen wir für eine Schwimmrunde, ein Picknick oder ein paar entspannte Stunden — nicht für den perfekt organisierten Ganztagesplatz.',
        beaches: [
          {
            title: 'Playa Carabeíllo',
            bestFor: 'Ruhiges Schwimmen, Paare und frühe Stunden',
            description:
              'Die kleine Bucht liegt versteckt zwischen Burriana und Nerjas Zentrum. Grün fällt über die Felsen herab und gibt ihr trotz der Stadtnähe eine intime, fast tropische Atmosphäre.',
            tip:
              'Wir kommen gern für eine ruhige Schwimmrunde zu zweit hierher. Früh am Tag wirkt Carabeíllo überraschend privat; sobald der begrenzte Platz voll wird, verschwindet genau dieser Reiz schnell.',
            mapHref: beachMaps.carabeillo
          },
          {
            title: 'El Playazo',
            bestFor: 'Picknick, lange Spaziergänge und viel Platz',
            description:
              'Nerjas längster und weitläufigster Strand wirkt rustikaler als die zentralen Buchten. Seine Größe macht es leichter, noch Freiraum zu finden, wenn die kleinen Strände bereits voll sind.',
            tip:
              'El Playazo ist unser Lieblingsstrand für ein Picknick. Lokalen Käse und Oliven einpacken, ein Stück von den Hauptzugängen weggehen und dort bleiben, wo der Strand weniger organisiert wirkt.',
            mapHref: beachMaps.playazo
          }
        ]
      },
      {
        id: 'nature',
        title: 'Natur, Schnorcheln & Kajaktage',
        intro:
          'Östlich von Nerja ist die geschützte Küste von Maro–Cerro Gordo weniger erschlossen und stärker vom Meer abhängig. Hier geht es um Felsen, offenes Wasser und Landschaft — nicht um garantierte Bequemlichkeit.',
        beaches: [
          {
            title: 'Playa de Maro',
            bestFor: 'Schnorcheln, Kajak und dramatische Küste',
            description:
              'Direkt hinter dem Kiesstrand steigen die Felsen auf; das Wasser kann deutlich klarer sein als in der Stadt. Maro ist der natürliche Ausgangspunkt für Schnorchel- und Kajaktouren entlang der Küste.',
            tip:
              'Bei ruhiger See ist ein Kajak die schönste Wahl. Paddelt wegen der Felsen und Buchten los, nicht wegen eines versprochenen Wasserfalls: Die Fälle hängen vom Regen ab und führen nicht immer Wasser.',
            mapHref: beachMaps.maro
          },
          {
            title: 'Cantarriján',
            bestFor: 'Geschützte Natur, entspanntes Baden und Fischessen',
            description:
              'Mitten im Naturpark verbindet Cantarriján eine wilde Umgebung mit einer entspannten Atmosphäre, in der Baden mit oder ohne Badekleidung selbstverständlich nebeneinandersteht, und Strandrestaurants, die für frischen Fisch bekannt sind.',
            tip:
              'Plant Zeit für ein Mittagessen im Chiringuito ein, statt nur kurz vorbeizuschauen. Im Sommer kann die Zufahrt geregelt sein; prüft deshalb vor der Abfahrt die aktuellen Hinweise.',
            mapHref: beachMaps.cantarrijan
          }
        ]
      },
      {
        id: 'nerja',
        title: 'Nerja-Klassiker & unkomplizierte Strandtage',
        intro:
          'Diese Strände passen, wenn Ort, Infrastruktur und Meer in einen einfachen Tag gehören sollen. Sie sind weniger abgeschieden, lassen sich dafür bequem mit Mittagessen, Spaziergang oder Altstadt verbinden.',
        beaches: [
          {
            title: 'Calahonda',
            bestFor: 'Morgenbad, Altstadt und kurze Strandpause',
            description:
              'Nerjas bekannteste kleine Bucht liegt direkt unter dem Balcón de Europa, eingerahmt von alten Fischerhäuschen und der historischen Stadt oberhalb.',
            tip:
              'Kommt vor 10 Uhr. Das Morgenlicht auf den weißen Häusern und das ruhigere Wasser sind besonders schön, bevor Balcón und Bucht lebhaft werden.',
            mapHref: beachMaps.calahonda
          },
          {
            title: 'Playa Burriana',
            bestFor: 'Komfortabler Ganztag mit allem in der Nähe',
            description:
              'Breit, lebendig und gut ausgestattet: Burriana passt, wenn Duschen, Liegen, Wassersport und Restaurants erreichbar sein sollen, ohne das Auto noch einmal zu bewegen.',
            tip:
              'Daraus wird leicht ein schöner Tag zu zweit: morgens schwimmen, lange zu Mittag essen — vielleicht Paella im Chiringuito AYO — und anschließend am Strand entlanglaufen.',
            mapHref: beachMaps.burriana
          }
        ]
      }
    ],
    conditions: {
      title: 'Was einen Strandtag wirklich verändert',
      intro:
        'Derselbe Strand kann sich an zwei aufeinanderfolgenden Tagen völlig anders anfühlen. Etwas Aufmerksamkeit für Zeitpunkt und Bedingungen hilft hier mehr als die Suche nach dem einen „besten Strand“.',
      items: [
        {
          title: 'Der Zeitpunkt zählt',
          text:
            'Kleine Buchten behalten ihren Charakter nur, solange noch Platz ist. In der Hochsaison sind früher Morgen und später Nachmittag meist ruhiger als die Mittagsstunden.'
        },
        {
          title: 'Ruhiges Wasser ist nicht garantiert',
          text:
            'Luftbewegung prägt das Meer oft stärker als die Temperatur. Auch ein sonniger Tag kann Wellen oder schlechtere Sicht bringen — entscheidet über Schnorcheln und Kajak deshalb erst vor Ort.'
        },
        {
          title: 'Maros Wasserfälle sind saisonal',
          text:
            'Die Wasserfälle an den Felsen entstehen vor allem nach längerem Regen, häufig im Frühjahr. Im trockenen Sommer erreicht vieles die Küste nicht; die Landschaft bleibt auch ohne Wasserfälle reizvoll.'
        },
        {
          title: 'Komfort und Natur überschneiden sich selten',
          text:
            'Einfacher Zugang und viel Service bedeuten meist mehr Menschen. Ruhigere Plätze mit klarerem Wasser bringen häufiger Kies, weniger Infrastruktur oder etwas mehr Planung mit sich.'
        }
      ]
    },
    practical: {
      title: 'Praktisch für den Strandtag',
      intro:
        'Ein wenig Vorbereitung reicht, damit der Tag entspannt bleibt — besonders rund um Maro und im Naturpark.',
      items: [
        {
          title: 'Parken',
          text:
            'Bei Maro und den wilderen Buchten sind Plätze begrenzt. In der Hochsaison am besten vor 10 Uhr oder erst am späteren Nachmittag kommen und immer die örtliche Beschilderung beachten.'
        },
        {
          title: 'Ausrüstung',
          text:
            'Für Maro und die ruhigeren Buchten eigene Schnorchelausrüstung mitbringen. Die größeren Stadtstrände sind einfacher, wenn ihr Verleih und weitere Angebote in der Nähe möchtet.'
        },
        {
          title: 'Essen',
          text:
            'Burriana passt für eine lange Paella-Pause, Cantarriján für frischen Fisch und Nerjas Zentrum, wenn Tapas nach dem Strand wichtiger sind als ein Restaurant direkt im Sand.'
        }
      ],
      accessNote: {
        before:
          'Im Sommer kann die Zufahrt nach Cantarriján geregelt sein. Prüft vor der Abfahrt die ',
        label: 'aktuellen Besucherhinweise der Junta de Andalucía',
        after: '.',
        href: cantarrijanAccessInfo
      }
    },
    combine: {
      title: 'So lässt sich der Tag verbinden',
      intro:
        'Die Küste funktioniert besonders gut, wenn der Strand ein Teil des Tages ist und nicht das gesamte Programm.',
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
            'Verbindet ein frühes Bad mit einem Spaziergang oberhalb Frigilianas — oder hebt euch die längeren Routen in der Sierra Almijara für einen kühleren Tag auf.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        },
        {
          title: 'Lasst das Wetter über die Reihenfolge entscheiden',
          text:
            'Bei heißem Sommerwetter gehört das Bad in die frühen Stunden und ein offener Weg nicht in die Mittagshitze. Im Frühling und Herbst kann die längere Route den Tag bestimmen und die Küste der flexible Teil bleiben.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Wetter und Jahreszeiten vergleichen'
        },
        {
          title: 'Nerja nach dem Schwimmen',
          text:
            'Calahonda und Burriana lassen sich leicht mit dem Balcón de Europa, der Altstadt, Tapas und einem Abend an der Küste kombinieren.',
          linkToken: 'location_nerja',
          linkLabel: 'Nerja entdecken'
        }
      ]
    },
    closing: {
      title: 'Nach dem Strand',
      lead:
        'Salz abspülen, die lebhafte Küste hinter sich lassen und den Abend in Frigiliana ruhig werden lassen — oder in Nerja so nah wohnen, dass ihr zu Fuß vom Meer zurückkommt.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
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
      title: 'Playas cerca de Frigiliana y Nerja — comparar acceso y estado del mar',
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
        beaches: [
          {
            title: 'Playa de Carabeíllo',
            bestFor: 'Un baño tranquilo, parejas y primeras horas',
            description:
              'Esta pequeña cala se esconde entre Burriana y el centro de Nerja. La vegetación cae por los acantilados y crea un ambiente íntimo, casi tropical, pese a estar dentro del pueblo.',
            tip:
              'Solemos elegir Carabeíllo para nadar tranquilos en pareja. A primera hora puede parecer casi privada; cuando se llena su espacio reducido, pierde rápidamente esa intimidad.',
            mapHref: beachMaps.carabeillo
          },
          {
            title: 'El Playazo',
            bestFor: 'Pícnic, paseos largos y espacio',
            description:
              'La playa más larga y amplia de Nerja tiene un aire más rústico que las calas del centro. Su tamaño permite encontrar un poco de distancia cuando las playas pequeñas ya están llenas.',
            tip:
              'Es nuestra favorita para llevar un pícnic. Comprad queso y aceitunas de la zona, alejaos un poco de los accesos principales y buscad el tramo menos organizado.',
            mapHref: beachMaps.playazo
          }
        ]
      },
      {
        id: 'nature',
        title: 'Naturaleza, snorkel y días de kayak',
        intro:
          'Al este de Nerja, la costa protegida de Maro–Cerro Gordo está menos urbanizada y depende mucho más del mar. Venid por los acantilados, el agua abierta y el paisaje, no por una comodidad garantizada.',
        beaches: [
          {
            title: 'Playa de Maro',
            bestFor: 'Snorkel, kayak y paisaje de acantilados',
            description:
              'Los acantilados se levantan justo detrás de esta playa de guijarros y el agua puede estar bastante más clara que en el centro. Es un punto natural para hacer snorkel o recorrer la costa en kayak.',
            tip:
              'Con el mar en calma, alquilar un kayak es la opción más memorable. Id por las calas y los acantilados, no por la promesa de una cascada: depende de las lluvias y no siempre lleva agua.',
            mapHref: beachMaps.maro
          },
          {
            title: 'Cantarriján',
            bestFor: 'Naturaleza protegida, baño relajado y pescado',
            description:
              'Dentro del paraje natural, Cantarriján combina un entorno salvaje con tradición naturista, bañador opcional y chiringuitos conocidos por el pescado fresco.',
            tip:
              'Reservad tiempo para comer en un chiringuito en lugar de convertirla en una parada rápida. En verano puede regularse el acceso de vehículos; comprobad las condiciones antes de salir.',
            mapHref: beachMaps.cantarrijan
          }
        ]
      },
      {
        id: 'nerja',
        title: 'Clásicos de Nerja y días de playa fáciles',
        intro:
          'Elegid estas playas cuando queráis reunir pueblo, servicios y mar en un solo día. Son menos solitarias, pero se combinan fácilmente con una comida, un paseo o el casco antiguo.',
        beaches: [
          {
            title: 'Calahonda',
            bestFor: 'Baño matinal, casco antiguo y visita corta',
            description:
              'La cala más reconocible de Nerja está justo debajo del Balcón de Europa, enmarcada por antiguas casas de pescadores y el centro histórico situado sobre ella.',
            tip:
              'Llegad antes de las 10:00. La luz de la mañana sobre las casas blancas y el agua más tranquila tienen algo especial, antes de que el Balcón y la cala se animen.',
            mapHref: beachMaps.calahonda
          },
          {
            title: 'Playa de Burriana',
            bestFor: 'Un día completo y cómodo con todo cerca',
            description:
              'Amplia, animada y bien equipada, Burriana funciona cuando queréis duchas, hamacas, actividades acuáticas y restaurantes sin tener que volver a mover el coche.',
            tip:
              'Es un plan de pareja muy fácil: baño por la mañana, sobremesa larga — quizá con una paella en el Chiringuito AYO — y paseo junto al mar para terminar.',
            mapHref: beachMaps.burriana
          }
        ]
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
          title: 'Dejad que el tiempo decida el orden',
          text:
            'Con calor de verano, bañarse temprano y evitar el mediodía en rutas expuestas funciona mejor. En primavera y otoño, la ruta larga puede marcar el día y la costa quedar como la parte flexible.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Comparar tiempo y estaciones'
        },
        {
          title: 'Nerja después del baño',
          text:
            'Calahonda y Burriana se combinan fácilmente con el Balcón de Europa, el casco antiguo, unas tapas y una tarde junto al mar.',
          linkToken: 'location_nerja',
          linkLabel: 'Descubrir Nerja'
        }
      ]
    },
    closing: {
      title: 'Después de la playa',
      lead:
        'Dejad atrás la sal y el bullicio para volver a una tarde tranquila en Frigiliana — o quedaos en Nerja lo bastante cerca como para regresar andando desde el mar.',
      availabilityCta: 'Comprobar disponibilidad',
      apartmentsCta: 'Ver apartamentos'
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
      title: 'Stranden bij Frigiliana & Nerja — vergelijk bereikbaarheid en zeecondities',
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
        beaches: [
          {
            title: 'Playa Carabeíllo',
            bestFor: 'Rustig zwemmen, koppels en vroege uren',
            description:
              'Deze kleine baai ligt verscholen tussen Burriana en het centrum van Nerja. Groen loopt langs de rotsen naar beneden en geeft de plek ondanks de stadse ligging een intieme, bijna tropische sfeer.',
            tip:
              'Wij kiezen Carabeíllo graag voor een rustige zwembeurt met z’n tweeën. Vroeg op de dag voelt de baai verrassend privé; zodra de beperkte ruimte volloopt, verdwijnt die intimiteit snel.',
            mapHref: beachMaps.carabeillo
          },
          {
            title: 'El Playazo',
            bestFor: 'Picknicken, lange wandelingen en veel ruimte',
            description:
              'Het langste en ruimste strand van Nerja oogt rustieker dan de centrale baaien. Door de lengte is er eerder nog wat ademruimte als de kleinere stranden al vol aanvoelen.',
            tip:
              'Dit is ons favoriete picknickstrand. Neem lokale kaas en olijven mee, loop een stukje voorbij de belangrijkste toegangen en zoek het deel waar het strand minder georganiseerd voelt.',
            mapHref: beachMaps.playazo
          }
        ]
      },
      {
        id: 'nature',
        title: 'Natuur, snorkelen & kajakken',
        intro:
          'Ten oosten van Nerja is de beschermde kust van Maro–Cerro Gordo minder ontwikkeld en sterker afhankelijk van de zee. Kom voor kliffen, open water en landschap, niet voor gegarandeerd gemak.',
        beaches: [
          {
            title: 'Playa de Maro',
            bestFor: 'Snorkelen, kajakken en indrukwekkende kliffen',
            description:
              'Direct achter dit kiezelstrand rijzen de kliffen op; het water kan merkbaar helderder zijn dan in de stad. Maro is een logisch vertrekpunt voor snorkelen en kajaktochten langs de kust.',
            tip:
              'Bij een kalme zee is een kajak de mooiste keuze. Peddel voor de kliffen en baaien, niet voor een beloofde waterval: de watervallen hangen af van recente regen en stromen lang niet altijd.',
            mapHref: beachMaps.maro
          },
          {
            title: 'Cantarriján',
            bestFor: 'Beschermde natuur, ontspannen zwemmen en verse vis',
            description:
              'Midden in het natuurgebied combineert Cantarriján een wilde omgeving met een ontspannen sfeer waar badkleding optioneel is en chiringuitos verse vis serveren.',
            tip:
              'Maak tijd voor de lunch in plaats van hier alleen kort te stoppen. In de zomer kan autotoegang worden gereguleerd; controleer daarom voor vertrek de actuele regeling.',
            mapHref: beachMaps.cantarrijan
          }
        ]
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiekers & gemakkelijke stranddagen',
        intro:
          'Kies deze stranden als stad, voorzieningen en zee in één eenvoudige dag moeten passen. Ze zijn minder afgelegen, maar gemakkelijk te combineren met lunch, een wandeling of het oude centrum.',
        beaches: [
          {
            title: 'Calahonda',
            bestFor: 'Een ochtendduik, de oude stad en een korte stop',
            description:
              'Het bekendste kleine strand van Nerja ligt direct onder het Balcón de Europa, omringd door oude vissershuisjes en het historische centrum erboven.',
            tip:
              'Ga vóór 10.00 uur. Het ochtendlicht op de witte huisjes en het kalmere water zijn bijzonder, voordat zowel het Balcón als de baai drukker worden.',
            mapHref: beachMaps.calahonda
          },
          {
            title: 'Playa Burriana',
            bestFor: 'Een comfortabele hele dag met alles dichtbij',
            description:
              'Burriana is breed, levendig en goed uitgerust. Het werkt wanneer jullie douches, ligbedden, watersport en restaurants willen zonder de auto opnieuw te verplaatsen.',
            tip:
              'Dit wordt moeiteloos een fijne dag samen: ’s ochtends zwemmen, lang lunchen — bijvoorbeeld met paella bij Chiringuito AYO — en afsluiten met een strandwandeling.',
            mapHref: beachMaps.burriana
          }
        ]
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
          title: 'Laat het weer de volgorde bepalen',
          text:
            'Zwem bij heet zomerweer vroeg en houd open wandelroutes buiten de middaghitte. In lente en herfst kan de langere route de dag bepalen en blijft de kust het flexibele onderdeel.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Vergelijk weer en seizoenen'
        },
        {
          title: 'Nerja na het zwemmen',
          text:
            'Calahonda en Burriana zijn eenvoudig te combineren met het Balcón de Europa, de oude stad, tapas en een avond aan de kust.',
          linkToken: 'location_nerja',
          linkLabel: 'Ontdek Nerja'
        }
      ]
    },
    closing: {
      title: 'Na het strand',
      lead:
        'Spoel het zout af, laat de levendige kust achter jullie en keer terug naar Frigiliana — of verblijf in Nerja dichtbij genoeg om vanaf zee terug te lopen.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Appartementen bekijken'
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
      title: 'Stränder nära Frigiliana & Nerja — jämför tillgång och havsförhållanden',
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
        beaches: [
          {
            title: 'Playa Carabeíllo',
            bestFor: 'Lugna simturer, par och tidiga timmar',
            description:
              'Den lilla viken ligger gömd mellan Burriana och centrala Nerja. Grönskan faller ned längs klipporna och skapar en intim, nästan tropisk känsla trots närheten till staden.',
            tip:
              'Vi väljer gärna Carabeíllo för en lugn simtur på tu man hand. Tidigt kan viken kännas förvånansvärt privat; när den begränsade ytan fylls försvinner den känslan snabbt.',
            mapHref: beachMaps.carabeillo
          },
          {
            title: 'El Playazo',
            bestFor: 'Picknick, långa promenader och gott om plats',
            description:
              'Nerjas längsta och rymligaste strand har en rustikare känsla än vikarna i centrum. Storleken gör det lättare att hitta luft när de mindre stränderna redan känns fulla.',
            tip:
              'Det här är vår favorit för picknick. Ta med lokal ost och oliver, gå en bit bort från huvudingångarna och slå er ned där stranden känns mindre organiserad.',
            mapHref: beachMaps.playazo
          }
        ]
      },
      {
        id: 'nature',
        title: 'Natur, snorkling & kajakdagar',
        intro:
          'Öster om Nerja är den skyddade Maro–Cerro Gordo-kusten mindre exploaterad och mer beroende av havet. Kom för klipporna, det öppna vattnet och landskapet, inte för garanterad bekvämlighet.',
        beaches: [
          {
            title: 'Playa de Maro',
            bestFor: 'Snorkling, kajak och dramatisk kust',
            description:
              'Klipporna reser sig direkt bakom klapperstensstranden och vattnet kan vara märkbart klarare än inne i staden. Maro är en naturlig startpunkt för snorkling och kajakturer längs kusten.',
            tip:
              'När havet är lugnt är en kajak det mest minnesvärda valet. Paddla för vikarna och klipporna, inte för ett utlovat vattenfall: fallen beror på regn och rinner inte alltid.',
            mapHref: beachMaps.maro
          },
          {
            title: 'Cantarriján',
            bestFor: 'Skyddad natur, avslappnade bad och färsk fisk',
            description:
              'Mitt i naturområdet kombinerar Cantarriján vild omgivning med en avslappnad atmosfär där badkläder är valfria och strandrestauranger serverar färsk fisk.',
            tip:
              'Avsätt tid för lunch på en chiringuito i stället för att bara göra ett kort stopp. Sommartid kan biltrafiken regleras, så kontrollera aktuell information innan ni åker.',
            mapHref: beachMaps.cantarrijan
          }
        ]
      },
      {
        id: 'nerja',
        title: 'Nerja-klassiker & enkla heldagar',
        intro:
          'Välj dessa stränder när stad, service och hav ska rymmas i en enkel dag. De är mindre avskilda men lätta att kombinera med lunch, promenad eller den gamla stadskärnan.',
        beaches: [
          {
            title: 'Calahonda',
            bestFor: 'Morgondopp, gamla stan och ett kort strandstopp',
            description:
              'Nerjas mest välkända lilla vik ligger direkt nedanför Balcón de Europa, inramad av gamla fiskarhus och den historiska stadskärnan ovanför.',
            tip:
              'Kom före klockan 10. Morgonljuset över de vita husen och det lugnare vattnet är speciellt, innan både Balcón och viken blir livligare.',
            mapHref: beachMaps.calahonda
          },
          {
            title: 'Playa Burriana',
            bestFor: 'En bekväm heldag med allt nära',
            description:
              'Burriana är bred, livlig och välutrustad. Den passar när ni vill ha duschar, solstolar, vattenaktiviteter och restauranger utan att behöva flytta bilen igen.',
            tip:
              'Det blir lätt en fin dag tillsammans: morgondopp, lång lunch — kanske paella på Chiringuito AYO — och en promenad längs stranden som avslutning.',
            mapHref: beachMaps.burriana
          }
        ]
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
          title: 'Låt vädret bestämma ordningen',
          text:
            'Vid hett sommarväder passar ett tidigt dopp och öppna vandringar bör hållas borta från middagshettan. På vår och höst kan den längre turen styra dagen och kusten vara den flexibla delen.',
          linkToken: 'weather_frigiliana',
          linkLabel: 'Jämför väder och årstider'
        },
        {
          title: 'Nerja efter badet',
          text:
            'Calahonda och Burriana är lätta att kombinera med Balcón de Europa, gamla stan, tapas och en kväll vid kusten.',
          linkToken: 'location_nerja',
          linkLabel: 'Upptäck Nerja'
        }
      ]
    },
    closing: {
      title: 'Efter stranden',
      lead:
        'Skölj av saltet, lämna den livliga kusten och låt kvällen landa i Frigilianas lugn — eller bo i Nerja nära nog för att promenera hem från havet.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se lägenheter'
    }
  }
};
