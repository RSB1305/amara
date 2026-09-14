import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
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
    dateModified: '2026-09-14',
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
const nerjaNightlifeContentCopy = {
  "cardLabels": {
    "bestFor": {
      en: 'Best for',
      de: 'Besonders passend für',
      es: 'Ideal para',
      nl: 'Geschikt voor',
      sv: 'Passar bäst för'
    } satisfies LocalizedText,
    "map": {
      en: 'View on map',
      de: 'Auf der Karte öffnen',
      es: 'Ver en el mapa',
      nl: 'Bekijk op de kaart',
      sv: 'Visa på kartan'
    } satisfies LocalizedText
  },
  "footerHighlights": {
    "nightlife": {
      en: 'Nightlife & evenings',
      de: 'Nachtleben & Abende',
      es: 'Vida nocturna y tardes',
      nl: 'Nachtleven & avonden',
      sv: 'Nattliv & kvällar'
    } satisfies LocalizedText,
    "nerja": {
      en: 'Nerja guide',
      de: 'Nerja-Guide',
      es: 'Guía de Nerja',
      nl: 'Nerja-gids',
      sv: 'Nerja-guide'
    } satisfies LocalizedText,
    "apartments": {
      en: 'AMARA Playa',
      de: 'AMARA Playa',
      es: 'AMARA Playa',
      nl: 'AMARA Playa',
      sv: 'AMARA Playa'
    } satisfies LocalizedText
  },
  "hero": {
    "kicker": {
      en: 'Nerja in the evening',
      de: 'Nerja am Abend',
      es: 'Nerja por la noche',
      nl: 'Nerja ’s avonds',
      sv: 'Nerja på kvällen'
    } satisfies LocalizedText,
    "title": {
      en: 'Nerja after sunset',
      de: 'Nerja nach Sonnenuntergang',
      es: 'Nerja después del atardecer',
      nl: 'Nerja na zonsondergang',
      sv: 'Nerja efter solnedgången'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
        'The evening in Nerja begins on a terrace, with fish or tapas and the view from the Balcón over the sea. Later it wanders into the lanes, and whoever is not ready to go home ends up at Plaza Tutti Frutti, where the bars stand door to door.',
        "Nerja has three areas for an evening out: the Balcón and old town for dinner and a terrace drink, Plaza Tutti Frutti for bars, and Burriana for a meal by the beach.",
        "If you are staying with us in Frigiliana, arrange a taxi back before heading out. The journey home takes you from the coast back up to the village."
      ],
      de: [
        'Der Abend in Nerja beginnt auf einer Terrasse, mit Fisch oder Tapas und dem Blick vom Balcón aufs Meer. Später wandert er in die Gassen, und wer noch nicht nach Hause will, landet an der Plaza Tutti Frutti, wo die Bars Tür an Tür stehen.',
        "In Nerja habt ihr drei Ecken für den Abend: Balcón und Altstadt für Essen und Terrassen, die Plaza Tutti Frutti für eine Runde durch die Bars und Burriana für einen Tisch am Strand.",
        "Wenn ihr bei uns in Frigiliana wohnt, bestellt ihr das Taxi für den Rückweg am besten vor dem Abend. Zurück geht es von der Küste hinauf ins Dorf."
      ],
      es: [
        'La noche en Nerja empieza en una terraza, con pescado o tapas y la vista del Balcón sobre el mar. Luego se mueve a las callejuelas, y quien aún no quiere volver a casa acaba en la Plaza Tutti Frutti, donde los bares están puerta con puerta.',
        "En Nerja tenéis tres zonas para salir: el Balcón y el casco antiguo para cenar y tomar algo en una terraza, la plaza Tutti Frutti para ir de bares y Burriana para comer junto a la playa.",
        "Si os alojáis con nosotros en Frigiliana, conviene reservar el taxi de vuelta antes de salir. El regreso os lleva desde la costa de nuevo al pueblo."
      ],
      nl: [
        'De avond in Nerja begint op een terras, met vis of tapas en het uitzicht vanaf de Balcón over de zee. Later trekt hij de steegjes in, en wie nog niet naar huis wil, landt op Plaza Tutti Frutti, waar de bars deur aan deur staan.',
        "In Nerja kunnen jullie op drie plekken de avond doorbrengen: bij het Balcón en in het centrum voor eten en een terras, rond Plaza Tutti Frutti voor de bars en op Burriana voor een tafel aan het strand.",
        "Als jullie bij ons in Frigiliana verblijven, regel dan voor vertrek een taxi terug. De terugrit gaat vanaf de kust weer omhoog naar het dorp."
      ],
      sv: [
        'Kvällen i Nerja börjar på en terrass, med fisk eller tapas och utsikten från Balcón över havet. Senare vandrar den in i gränderna, och den som inte vill hem ännu hamnar på Plaza Tutti Frutti, där barerna står dörr mot dörr.',
        "I Nerja finns tre områden för kvällen: Balcón och gamla stan för middag och terrasser, Plaza Tutti Frutti för barer och Burriana för ett bord vid stranden.",
        "Om ni bor hos oss i Frigiliana är det bra att boka taxi hem innan ni går ut. Hemresan går från kusten upp till byn igen."
      ]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Calm AMARA Playa interior as a base for evenings in coastal Nerja',
      de: 'Ruhiges Interieur von AMARA Playa als Ausgangspunkt für Abende in Nerja',
      es: 'Interior tranquilo de AMARA Playa como base para salir por Nerja',
      nl: 'Rustig interieur van AMARA Playa als uitvalsbasis voor avonden in Nerja',
      sv: 'Lugn interiör på AMARA Playa som bas för kvällar i Nerja'
    } satisfies LocalizedText,
    "summary": {
      "eyebrow": {
        en: 'On this page',
        de: 'Auf dieser Seite',
        es: 'En esta página',
        nl: 'Op deze pagina',
        sv: 'På den här sidan'
      } satisfies LocalizedText,
      "body": {
        en: 'Three corners for the evening, a sundowner we drink ourselves, and flamenco when the programme fits.',
        de: 'Drei Ecken für den Abend, ein Sundowner, den wir selbst trinken, und Flamenco, wenn das Programm passt.',
        es: 'Tres rincones para la noche, un atardecer con copa que tomamos nosotros mismos, y flamenco cuando cuadra el programa.',
        nl: 'Drie hoeken voor de avond, een sundowner die we zelf drinken, en flamenco als het programma past.',
        sv: 'Tre hörn för kvällen, en sundowner vi själva dricker, och flamenco när programmet passar.'
      } satisfies LocalizedText,
      "items": [
        {
          "id": 'late-night' as const,
          "label": {
            en: 'Late hour',
            de: 'Späte Stunde',
            es: 'Hora tardía',
            nl: 'Late uur',
            sv: 'Sen timme'
          } satisfies LocalizedText,
          "value": {
            en: 'Plaza Tutti Frutti',
            de: 'Plaza Tutti Frutti',
            es: 'Plaza Tutti Frutti',
            nl: 'Plaza Tutti Frutti',
            sv: 'Plaza Tutti Frutti'
          } satisfies LocalizedText
        },
        {
          "id": 'view' as const,
          "label": {
            en: 'With a view',
            de: 'Mit Aussicht',
            es: 'Con vistas',
            nl: 'Met uitzicht',
            sv: 'Med utsikt'
          } satisfies LocalizedText,
          "value": {
            en: 'Balcón & old town',
            de: 'Balcón & Altstadt',
            es: 'Balcón y casco antiguo',
            nl: 'Balcón & oude stad',
            sv: 'Balcón & gamla stan'
          } satisfies LocalizedText
        },
        {
          "id": 'water' as const,
          "label": {
            en: 'By the water',
            de: 'Am Wasser',
            es: 'Junto al mar',
            nl: 'Aan het water',
            sv: 'Vid vattnet'
          } satisfies LocalizedText,
          "value": {
            en: 'Burriana',
            de: 'Burriana',
            es: 'Burriana',
            nl: 'Burriana',
            sv: 'Burriana'
          } satisfies LocalizedText
        },
        {
          "id": 'reviewed' as const,
          "label": {
            en: 'Reviewed',
            de: 'Stand',
            es: 'Revisado',
            nl: 'Bijgewerkt',
            sv: 'Uppdaterad'
          } satisfies LocalizedText,
          "value": {
            en: "September 2026",
            de: "September 2026",
            es: "Septiembre de 2026",
            nl: "September 2026",
            sv: "September 2026"
          } satisfies LocalizedText
        }
      ]
    }
  },
  "sectionNav": {
    "overview": {
      en: 'Quick answer',
      de: 'Kurzantwort',
      es: 'Respuesta rápida',
      nl: 'Kort antwoord',
      sv: 'Kort svar'
    } satisfies LocalizedText,
    "areas": {
      en: 'Main areas',
      de: 'Die Viertel',
      es: 'Zonas principales',
      nl: 'Hoofdzones',
      sv: 'Huvudområden'
    } satisfies LocalizedText,
    "styles": {
      en: 'Evening styles',
      de: 'Abendstile',
      es: 'Tipos de noche',
      nl: 'Avondstijlen',
      sv: 'Kvällsstilar'
    } satisfies LocalizedText,
    "culture": {
      en: 'Culture',
      de: 'Kultur',
      es: 'Cultura',
      nl: 'Cultuur',
      sv: 'Kultur'
    } satisfies LocalizedText,
    "seasons": {
      en: 'Seasons',
      de: 'Jahreszeiten',
      es: 'Temporadas',
      nl: 'Seizoenen',
      sv: 'Säsonger'
    } satisfies LocalizedText,
    "planning": {
      en: 'Plan a night',
      de: 'Abend planen',
      es: 'Planear la noche',
      nl: 'Avond plannen',
      sv: 'Planera kvällen'
    } satisfies LocalizedText,
    "faq": {
      en: 'FAQ',
      de: 'FAQ',
      es: 'Preguntas',
      nl: 'FAQ',
      sv: 'FAQ'
    } satisfies LocalizedText
  },
  "overview": {
    "kicker": {
      en: 'Quick answer',
      de: 'Kurzantwort',
      es: 'Respuesta rápida',
      nl: 'Kort antwoord',
      sv: 'Kort svar'
    } satisfies LocalizedText,
    "title": {
      en: 'Is Nerja good for nightlife?',
      de: 'Ist Nerja für Nachtleben geeignet?',
      es: '¿Merece la pena salir de noche en Nerja?',
      nl: 'Is Nerja goed voor nachtleven?',
      sv: 'Är Nerja bra för nattliv?'
    } satisfies LocalizedText,
    "intro": {
      en: 'Yes, if you want dinner, terraces, cocktail bars and one compact late-night area within the same town. Choose another destination if large clubs until sunrise are the main reason for the trip.',
      de: 'Ja, wenn ihr Abendessen, Terrassen, Cocktailbars und eine kompakte Zone für später im selben Ort möchtet. Wählt ein anderes Ziel, wenn große Clubs bis zum Sonnenaufgang der Hauptgrund der Reise sind.',
      es: 'Sí, si queréis cena, terrazas, coctelerías y una zona compacta para seguir hasta más tarde en la misma localidad. Elegid otro destino si el objetivo principal son grandes discotecas hasta el amanecer.',
      nl: 'Ja, als jullie diner, terrassen, cocktailbars en één compacte zone voor later in dezelfde plaats willen. Kies een andere bestemming als grote clubs tot zonsopkomst het belangrijkste doel zijn.',
      sv: 'Ja, om ni vill ha middag, terrasser, cocktailbarer och ett kompakt område för senare på samma ort. Välj ett annat resmål om stora klubbar till gryningen är huvudsyftet med resan.'
    } satisfies LocalizedText,
    "reviewed": {
      en: 'As of July 2026',
      de: 'Stand Juli 2026',
      es: 'Actualizado en julio de 2026',
      nl: 'Stand juli 2026',
      sv: 'Uppdaterad juli 2026'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Best for',
          de: 'Besonders passend für',
          es: 'Ideal para',
          nl: 'Geschikt voor',
          sv: 'Passar bäst för'
        } satisfies LocalizedText,
        "text": {
          en: 'Couples, mixed groups, scenic evenings, terrace drinks and nights that move naturally from tapas to cocktails.',
          de: 'Paare, gemischte Gruppen, stimmungsvolle Abende, Terrassendrinks und Nächte, die entspannt von Tapas zu Cocktails übergehen.',
          es: 'Parejas, grupos mixtos, noches con buenas vistas, copas en terrazas y planes que pasan con naturalidad de las tapas a los cócteles.',
          nl: 'Stellen, gemengde groepen, sfeervolle avonden, drankjes op terrassen en nachten die vanzelf van tapas naar cocktails overgaan.',
          sv: 'Par, blandade grupper, vackra kvällar, terrassdrinkar och nätter som naturligt går från tapas till cocktails.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Main late-night zone',
          de: 'Wichtigste späte Zone',
          es: 'Zona principal hasta tarde',
          nl: 'Belangrijkste late zone',
          sv: 'Viktigaste sena området'
        } satisfies LocalizedText,
        "text": {
          en: 'Plaza Tutti Frutti and the nearby central streets, where bars sit close together and the atmosphere grows later.',
          de: 'Plaza Tutti Frutti und die angrenzenden Straßen, wo viele Bars nah beieinanderliegen und die Stimmung später zunimmt.',
          es: 'Plaza Tutti Frutti y las calles céntricas cercanas, con bares próximos entre sí y un ambiente que aumenta más tarde.',
          nl: 'Plaza Tutti Frutti en de omliggende straten, waar bars dicht bij elkaar liggen en de sfeer later op gang komt.',
          sv: 'Plaza Tutti Frutti och gatorna intill, där barerna ligger tätt och stämningen växer senare på kvällen.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Best scenic zone',
          de: 'Schönste Kulisse',
          es: 'Zona con mejores vistas',
          nl: 'Mooiste avondzone',
          sv: 'Vackraste kvällsområdet'
        } satisfies LocalizedText,
        "text": {
          en: 'Balcón de Europa and the old town for sunset, dinner, wine bars and a polished evening without formality.',
          de: 'Balcón de Europa und Altstadt für Sonnenuntergang, Abendessen, Weinbars und einen gepflegten Abend ohne Förmlichkeit.',
          es: 'Balcón de Europa y casco antiguo para el atardecer, la cena, bares de vinos y una noche cuidada sin formalidades.',
          nl: 'Balcón de Europa en de oude stad voor zonsondergang, diner, wijnbars en een verzorgde avond zonder formaliteit.',
          sv: 'Balcón de Europa och gamla stan för solnedgång, middag, vinbarer och en stilfull kväll utan formalitet.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Best coastal zone',
          de: 'Beste Küstenzone',
          es: 'Mejor zona costera',
          nl: 'Beste kustzone',
          sv: 'Bästa kustområdet'
        } satisfies LocalizedText,
        "text": {
          en: 'Burriana for dinner by the beach and open-air drinks in the warmer months.',
          de: 'Burriana für Abendessen am Strand und Drinks im Freien in den warmen Monaten.',
          es: 'Burriana cuando queréis que la playa, el aire libre y un ritmo suave de verano sigan formando parte de la noche.',
          nl: 'Burriana wanneer strand, buitenlucht en een zachter zomerritme deel van de avond moeten blijven.',
          sv: 'Burriana när stranden, utomhusmiljön och ett mjukare sommartempo ska fortsätta vara en del av kvällen.'
        } satisfies LocalizedText
      }
    ]
  },
  "areas": {
    "title": {
      en: 'Three corners, three evenings',
      de: 'Drei Ecken, drei Abende',
      es: 'Tres rincones, tres noches',
      nl: 'Drie hoeken, drie avonden',
      sv: 'Tre hörn, tre kvällar'
    } satisfies LocalizedText,
    "intro": {
      en: "The Balcón and the bars around Plaza Tutti Frutti are in the centre. Burriana lies farther east along the coast; an evening there means a separate walk or taxi ride back.",
      de: "Balcón und die Bars an der Plaza Tutti Frutti liegen im Zentrum. Burriana liegt weiter östlich an der Küste; für einen Abend dort kommt ein eigener Fußweg oder eine Taxifahrt zurück hinzu.",
      es: "El Balcón y los bares de la plaza Tutti Frutti están en el centro. Burriana queda más al este, junto a la costa; una cena allí supone añadir el paseo o el taxi de vuelta.",
      nl: "Het Balcón en de bars rond Plaza Tutti Frutti liggen in het centrum. Burriana ligt verder naar het oosten aan de kust; na een avond daar volgt nog een wandeling of taxirit terug.",
      sv: "Balcón och barerna kring Plaza Tutti Frutti ligger i centrum. Burriana ligger längre österut längs kusten; efter en kväll där återstår en promenad eller taxiresa hem."
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Plaza Tutti Frutti, the late hour',
          de: 'Plaza Tutti Frutti, die späte Stunde',
          es: 'Plaza Tutti Frutti, la hora tardía',
          nl: 'Plaza Tutti Frutti, het late uur',
          sv: 'Plaza Tutti Frutti, den sena timmen'
        } satisfies LocalizedText,
        "paragraphs": {
          en: [
            'A small square with bars door to door around it. Early in the evening it is still quiet here; later the square fills, the music gets louder, and you move from one bar to the next without leaving the street.',
            'Come here when the evening should carry on after dinner.'
          ],
          de: [
            'Ein kleiner Platz, um den die Bars Tür an Tür stehen. Früh am Abend ist es hier noch ruhig; später füllt sich der Platz, die Musik wird lauter, und man wechselt von einer Bar zur nächsten, ohne die Straße zu verlassen.',
            'Kommt her, wenn der Abend nach dem Essen weitergehen soll.'
          ],
          es: [
            'Una plaza pequeña rodeada de bares puerta con puerta. A primera hora de la noche aún está tranquila; luego la plaza se llena, la música sube, y se pasa de un bar a otro sin salir de la calle.',
            'Venid aquí cuando la noche deba continuar después de cenar.'
          ],
          nl: [
            'Een klein plein met bars deur aan deur eromheen. Vroeg op de avond is het hier nog rustig; later loopt het plein vol, wordt de muziek luider en ga je van de ene bar naar de volgende zonder de straat te verlaten.',
            'Kom hierheen als de avond na het eten verder moet gaan.'
          ],
          sv: [
            'Ett litet torg med barer dörr mot dörr runtom. Tidigt på kvällen är det fortfarande stilla här; senare fylls torget, musiken blir högre, och man går från en bar till nästa utan att lämna gatan.',
            'Kom hit när kvällen ska fortsätta efter maten.'
          ]
        } satisfies LocalizedTextList,
        "bestFor": {
          en: 'Bar-hopping, groups, late starts.',
          de: 'Bar-Hopping, Gruppen, späte Starts.',
          es: 'Ir de bar en bar, grupos, empezar tarde.',
          nl: 'Bar-hopping, groepen, late starts.',
          sv: 'Barrunda, grupper, sena starter.'
        } satisfies LocalizedText,
        "mapHref": maps.tuttiFrutti
      },
      {
        "title": {
          en: 'Balcón and old town, our sundowner',
          de: 'Balcón und Altstadt, unser Sundowner',
          es: 'Balcón y casco antiguo, nuestro atardecer',
          nl: 'Balcón en oude stad, onze sundowner',
          sv: 'Balcón och gamla stan, vår sundowner'
        } satisfies LocalizedText,
        "paragraphs": {
          en: [
            'The Balcón de Europa is the stage; the lanes behind it are the evening: terraces, wine bars, small restaurants where sunset turns into a drink and the drink into dinner.',
            'Our sundowner: from AMARA Playa on foot into the centre, onto the terrace at Cochran’s, Cuba Libre and Mai Tai, the sun goes down, the sea turns dark. In summer 2025 that is how we did it, and we will do it again.'
          ],
          de: [
            'Der Balcón de Europa ist die Bühne, die Gassen dahinter sind der Abend: Terrassen, Weinbars, kleine Restaurants, in denen aus dem Sonnenuntergang ein Drink und aus dem Drink ein Abendessen wird.',
            'Unser Sundowner: von AMARA Playa zu Fuß ins Zentrum, auf die Terrasse von Cochran’s, Cuba Libre und Mai Tai, die Sonne geht unter, das Meer wird dunkel. Im Sommer 2025 haben wir das so gemacht, und wir machen es wieder.'
          ],
          es: [
            'El Balcón de Europa es el escenario, las callejuelas de detrás son la noche: terrazas, bares de vinos, pequeños restaurantes donde el atardecer se convierte en una copa y la copa en una cena.',
            'Nuestro atardecer: desde AMARA Playa a pie hasta el centro, a la terraza de Cochran’s, cubalibre y mai tai, el sol se pone, el mar se oscurece. En el verano de 2025 lo hicimos así, y lo repetiremos.'
          ],
          nl: [
            'De Balcón de Europa is het podium, de steegjes erachter zijn de avond: terrassen, wijnbars, kleine restaurants waar de zonsondergang een drankje wordt en het drankje een diner.',
            'Onze sundowner: vanaf AMARA Playa te voet naar het centrum, het terras van Cochran’s op, Cuba Libre en Mai Tai, de zon gaat onder, de zee wordt donker. In de zomer van 2025 deden we het zo, en we doen het weer.'
          ],
          sv: [
            'Balcón de Europa är scenen, gränderna bakom är kvällen: terrasser, vinbarer, små restauranger där solnedgången blir en drink och drinken en middag.',
            'Vår sundowner: från AMARA Playa till fots in till centrum, upp på Cochran’s terrass, Cuba Libre och Mai Tai, solen går ner, havet blir mörkt. Sommaren 2025 gjorde vi så, och vi gör det igen.'
          ]
        } satisfies LocalizedTextList,
        "bestFor": {
          en: 'Couples, sunset, wine, terraces, quiet cocktails.',
          de: 'Paare, Sonnenuntergang, Wein, Terrassen, leise Cocktails.',
          es: 'Parejas, atardecer, vino, terrazas, cócteles tranquilos.',
          nl: 'Stellen, zonsondergang, wijn, terrassen, rustige cocktails.',
          sv: 'Par, solnedgång, vin, terrasser, stilla cocktails.'
        } satisfies LocalizedText,
        "mapHref": maps.balcon
      },
      {
        "title": {
          en: 'Burriana, evenings by the sea',
          de: 'Burriana, Abende am Meer',
          es: 'Burriana, noches junto al mar',
          nl: 'Burriana, avonden aan zee',
          sv: 'Burriana, kvällar vid havet'
        } satisfies LocalizedText,
        "paragraphs": {
          en: [
            'The beach day flows into the evening: a table at the chiringuito, espetos from the fire, a drink while the sand cools.'
          ],
          de: [
            'Der Strandtag geht in den Abend über: ein Tisch im Chiringuito, Espetos vom Feuer, dazu ein Drink, während der Sand kühl wird.'
          ],
          es: [
            'El día de playa se convierte en noche: una mesa en el chiringuito, espetos a la brasa, una copa mientras la arena se enfría.'
          ],
          nl: [
            'De stranddag loopt over in de avond: een tafel in de chiringuito, espetos van het vuur, een drankje terwijl het zand afkoelt.'
          ],
          sv: [
            'Stranddagen övergår i kväll: ett bord på chiringuiton, espetos från elden, en drink medan sanden svalnar.'
          ]
        } satisfies LocalizedTextList,
        "bestFor": {
          en: "A meal by the beach after a day at the sea.",
          de: "Essen am Strand nach einem Tag am Meer.",
          es: "Comer junto a la playa después de un día de mar.",
          nl: "Eten aan het strand na een dag aan zee.",
          sv: "Mat vid stranden efter en dag vid havet."
        } satisfies LocalizedText,
        "mapHref": maps.burriana
      }
    ]
  },
  "areaComparison": {
    "title": {
      en: 'Which area suits which kind of evening?',
      de: 'Welche Zone passt zu welchem Abend?',
      es: '¿Qué zona encaja con cada tipo de noche?',
      nl: 'Welke zone past bij welke avond?',
      sv: 'Vilket område passar vilken sorts kväll?'
    } satisfies LocalizedText,
    "intro": {
      en: 'There is no single best nightlife zone. The useful answer depends on who you are with and how lively you want the second half of the night to become.',
      de: 'Es gibt nicht den einen besten Bereich. Entscheidend ist, mit wem ihr unterwegs seid und wie lebhaft die zweite Hälfte des Abends werden soll.',
      es: 'No existe una única zona mejor. La respuesta depende de con quién vais y de cuánto ambiente queréis para la segunda parte de la noche.',
      nl: 'Er is niet één beste uitgaansgebied. De keuze hangt af van jullie gezelschap en hoe levendig de tweede helft van de avond mag worden.',
      sv: 'Det finns inte ett enda bästa område. Det användbara svaret beror på sällskapet och hur livlig den andra halvan av kvällen ska bli.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Best for couples',
          de: 'Am besten für Paare',
          es: 'La mejor para parejas',
          nl: 'Beste voor stellen',
          sv: 'Bäst för par'
        } satisfies LocalizedText,
        "text": {
          en: 'The Balcón de Europa and old town usually win for their combination of scenery, walkability, drinks and dinner.',
          de: 'Balcón de Europa und Altstadt gewinnen meist durch die Kombination aus Kulisse, kurzen Wegen, Drinks und Abendessen.',
          es: 'El Balcón de Europa y el casco antiguo suelen ganar por su combinación de paisaje, distancias a pie, copas y cena.',
          nl: 'Balcón de Europa en de oude stad winnen meestal door de combinatie van uitzicht, loopafstand, drankjes en diner.',
          sv: 'Balcón de Europa och gamla stan vinner oftast genom kombinationen av utsikt, promenadavstånd, drinkar och middag.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Best for bar-hopping',
          de: 'Am besten für Bar-Hopping',
          es: 'La mejor para ir de bar en bar',
          nl: 'Beste om langs bars te gaan',
          sv: 'Bäst för barrunda'
        } satisfies LocalizedText,
        "text": {
          en: 'Plaza Tutti Frutti is the clearest answer because the concentration of venues makes it easy to move from one stop to the next.',
          de: 'Die Plaza Tutti Frutti ist die klarste Wahl, weil die hohe Dichte an Lokalen den Wechsel von einer Station zur nächsten erleichtert.',
          es: 'Plaza Tutti Frutti es la respuesta más clara porque la concentración de locales facilita pasar de uno a otro.',
          nl: 'Plaza Tutti Frutti is het duidelijkste antwoord, omdat de concentratie van zaken een eenvoudige doorloop van de ene naar de andere plek geeft.',
          sv: 'Plaza Tutti Frutti är det tydligaste svaret eftersom koncentrationen av ställen gör det enkelt att gå vidare.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Best for relaxed nights',
          de: 'Am besten für ruhige Abende',
          es: 'La mejor para una noche relajada',
          nl: 'Beste voor rustige avonden',
          sv: 'Bäst för lugna kvällar'
        } satisfies LocalizedText,
        "text": {
          en: 'Burriana suits beach dinners and open-air drinks, especially on warm evenings.',
          de: 'Burriana passt zu Strandrestaurants und Drinks im Freien – besonders an warmen Abenden.',
          es: 'Burriana combina aire de mar, poca presión y un ritmo suave, especialmente durante las noches cálidas.',
          nl: 'Burriana past bij zeelucht, weinig druk en een zachter tempo, vooral op warme avonden.',
          sv: 'Burriana passar havsluft, låg press och ett mjukare tempo, särskilt under varma kvällar.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Best all-round strategy',
          de: 'Beste Gesamtstrategie',
          es: 'La estrategia más completa',
          nl: 'Beste totaalstrategie',
          sv: 'Bästa helhetsstrategin'
        } satisfies LocalizedText,
        "text": {
          en: 'Start around the Balcón or old town for sunset and dinner, then move to Plaza Tutti Frutti only if you want later bars.',
          de: 'Beginnt am Balcón oder in der Altstadt mit Sonnenuntergang und Abendessen. Wechselt nur dann zur Plaza Tutti Frutti, wenn ihr später noch Bars möchtet.',
          es: 'Empezad en el Balcón o el casco antiguo para ver el atardecer y tomar las primeras copas. Id después a la zona céntrica de bares solo si queréis acabar con más ruido.',
          nl: 'Begin rond het Balcón of in de oude stad met zonsondergang en diner. Ga alleen naar de centrale barzone als jullie later nog bars willen.',
          sv: 'Börja vid Balcón eller i gamla stan med solnedgång och första drinkar. Gå vidare till det centrala barområdet bara om ni vill ha en livligare avslutning.'
        } satisfies LocalizedText
      }
    ]
  },
  "eveningStyles": {
    "title": {
      en: 'The kinds of nightlife Nerja does best',
      de: 'Welche Art von Nachtleben Nerja besonders gut kann',
      es: 'Los tipos de noche que Nerja sabe hacer mejor',
      nl: 'De vormen van nachtleven waarin Nerja uitblinkt',
      sv: 'De sorters nattliv som Nerja gör bäst'
    } satisfies LocalizedText,
    "intro": {
      en: 'Food, views and bars sit close enough together to keep plans flexible. Start with dinner and decide later whether to continue.',
      de: 'Essen, Aussicht und Bars liegen nah genug beieinander, um flexibel zu bleiben. Beginnt mit dem Abendessen und entscheidet danach, ob ihr weiterzieht.',
      es: 'Nerja funciona cuando la noche se desarrolla de forma natural y no como un programa rígido. La comida, el paisaje y la compañía pueden pesar tanto como el último bar.',
      nl: 'Nerja werkt wanneer de avond zich ontvouwt in plaats van een strak programma te volgen. Eten, omgeving en gezelschap kunnen even belangrijk zijn als de laatste bar.',
      sv: 'Nerja fungerar när kvällen får utvecklas i stället för att följa ett strikt program. Mat, miljö och sällskap kan väga lika tungt som den sista baren.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Tapas first, drinks after',
          de: 'Erst Tapas, dann Drinks',
          es: 'Primero tapas, después copas',
          nl: 'Eerst tapas, daarna drankjes',
          sv: 'Tapas först, drinkar sedan'
        } satisfies LocalizedText,
        "text": {
          en: 'Begin with seafood or tapas and only then decide whether to continue to cocktails or a busier bar area. It feels local, flexible and complete without requiring a big night out.',
          de: 'Beginnt mit Fisch oder Tapas und entscheidet erst danach, ob es mit Cocktails oder zur Plaza Tutti Frutti weitergeht.',
          es: 'Empezad con pescado o tapas y decidid más tarde si queréis seguir con cócteles o una zona más animada. Es un plan local, flexible y completo sin necesidad de una gran noche de fiesta.',
          nl: 'Begin met vis of tapas en beslis pas daarna of jullie doorgaan naar cocktails of een drukkere barzone.',
          sv: 'Börja med fisk eller tapas och bestäm först därefter om ni vill fortsätta med cocktails eller ett livligare barområde. Det känns lokalt, flexibelt och fullständigt utan en stor utekväll.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Cocktails and terraces',
          de: 'Cocktails und Terrassen',
          es: 'Cócteles y terrazas',
          nl: 'Cocktails en terrassen',
          sv: 'Cocktails och terrasser'
        } satisfies LocalizedText,
        "text": {
          en: 'One beautiful terrace, a good drink and a setting worth staying in are often enough. This is one of Nerja’s most natural evening formats.',
          de: 'Eine schöne Terrasse, ein guter Drink und eine Umgebung, in der man gern bleibt, reichen oft aus. Genau darin liegt eine der natürlichsten Abendstärken Nerjas.',
          es: 'Una terraza bonita, una buena copa y un entorno en el que apetece quedarse suelen ser suficientes. Es uno de los formatos de noche que mejor encajan con Nerja.',
          nl: 'Eén mooi terras, een goed drankje en een omgeving waar jullie willen blijven zijn vaak genoeg.',
          sv: 'En vacker terrass, en god drink och en miljö där man gärna stannar räcker ofta. Det här är ett av Nerjas mest naturliga kvällsupplägg.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'A beach-led evening',
          de: 'Ein Abend rund um den Strand',
          es: 'Una noche ligada a la playa',
          nl: 'Een avond rond het strand',
          sv: 'En kväll kring stranden'
        } satisfies LocalizedText,
        "text": {
          en: 'In warmer months, stay near the coast for dinner and open-air drinks instead of moving into the central bar area.',
          de: 'Bleibt in den wärmeren Monaten für Abendessen und Drinks an der Küste, statt in die zentrale Barzone zu wechseln.',
          es: 'Durante los meses cálidos, quedaos cerca de la costa y mantened la cena y las copas conectadas con el ambiente abierto de la playa, sin cambiar a un ritmo urbano.',
          nl: 'Blijf in warme maanden bij de kust en houd diner en drankjes verbonden met de open strandatmosfeer in plaats van over te schakelen op een stedelijk ritme.',
          sv: 'Stanna nära kusten under varmare månader och låt middag och drinkar förbli kopplade till den öppna strandatmosfären i stället för att byta till stadstempo.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'A later, more social bar night',
          de: 'Später und geselliger',
          es: 'Más tarde y más social',
          nl: 'Later en socialer',
          sv: 'Senare och mer socialt'
        } satisfies LocalizedText,
        "text": {
          en: 'Nerja can still become louder and younger. The key is choosing the central zone and arriving at the right time rather than expecting the whole town to feel like a party strip.',
          de: 'Nerja kann später durchaus lauter und jünger werden. Entscheidend sind die zentrale Zone und der richtige Zeitpunkt – nicht die Erwartung, dass die ganze Stadt wie eine Partymeile funktioniert.',
          es: 'Nerja también puede volverse más joven y ruidosa. La clave está en elegir la zona céntrica y la hora adecuada, no en esperar que toda la ciudad funcione como una calle de fiesta.',
          nl: 'Nerja kan later zeker luidruchtiger en jonger worden. De sleutel is de centrale zone en het juiste tijdstip, niet de verwachting dat de hele stad als feeststrook werkt.',
          sv: 'Nerja kan bli både yngre och livligare senare. Nyckeln är det centrala området och rätt tid, inte att förvänta sig att hela staden ska kännas som en partygata.'
        } satisfies LocalizedText
      }
    ]
  },
  "culture": {
    "title": {
      en: 'Flamenco and cultural evenings',
      de: 'Flamenco und Kulturabende',
      es: 'Flamenco y noches de cultura',
      nl: 'Flamenco en cultuuravonden',
      sv: 'Flamenco och kulturkvällar'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
        'Besides bars, Nerja also has stages. Flamenco happens in small venues and at the fiestas; the Centro Cultural Villa de Nerja shows music, dance and theatre.',
        'Programmes change with the season; the current one is linked here.'
      ],
      de: [
        'Nerja hat neben Bars auch Bühnen. Flamenco gibt es in kleinen Lokalen und zu den Festen, das Centro Cultural Villa de Nerja zeigt Musik, Tanz und Theater.',
        'Die Programme wechseln mit der Saison; das aktuelle steht hier verlinkt.'
      ],
      es: [
        'Además de bares, Nerja también tiene escenarios. Hay flamenco en locales pequeños y en las fiestas; el Centro Cultural Villa de Nerja programa música, danza y teatro.',
        'Los programas cambian con la temporada; el actual está enlazado aquí.'
      ],
      nl: [
        'Naast bars heeft Nerja ook podia. Flamenco is er in kleine zaaltjes en op de feesten; het Centro Cultural Villa de Nerja brengt muziek, dans en theater.',
        'De programma’s wisselen met het seizoen; het actuele staat hier gelinkt.'
      ],
      sv: [
        'Förutom barer har Nerja också scener. Flamenco finns på små ställen och vid festerna; Centro Cultural Villa de Nerja visar musik, dans och teater.',
        'Programmen växlar med säsongen; det aktuella finns länkat här.'
      ]
    } satisfies LocalizedTextList,
    "items": [
      {
        "title": {
          en: 'Flamenco nights',
          de: 'Flamenco-Abende',
          es: 'Noches de flamenco',
          nl: 'Flamenco-avonden',
          sv: 'Flamencokvällar'
        } satisfies LocalizedText,
        "text": {
          en: 'Small tablaos, fiestas and summer evenings; the dates change.',
          de: 'Kleine Tablaos, Feste und Sommerabende; die Termine wechseln.',
          es: 'Tablaos pequeños, fiestas y noches de verano; las fechas cambian.',
          nl: 'Kleine tablaos, feesten en zomeravonden; de data wisselen.',
          sv: 'Små tablaos, fester och sommarkvällar; datumen växlar.'
        } satisfies LocalizedText,
        "href": maps.flamenco,
        "linkLabel": {
          en: 'Search flamenco in Nerja',
          de: 'Flamenco in Nerja suchen',
          es: 'Buscar flamenco en Nerja',
          nl: 'Flamenco in Nerja zoeken',
          sv: 'Sök flamenco i Nerja'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Centro Cultural Villa de Nerja',
          de: 'Centro Cultural Villa de Nerja',
          es: 'Centro Cultural Villa de Nerja',
          nl: 'Centro Cultural Villa de Nerja',
          sv: 'Centro Cultural Villa de Nerja'
        } satisfies LocalizedText,
        "text": {
          en: 'Music, dance, theatre and the seasonal programme at the town’s cultural centre.',
          de: 'Musik, Tanz, Theater und Saisonprogramm im Kulturzentrum der Stadt.',
          es: 'Música, danza, teatro y programa de temporada en el centro cultural de la ciudad.',
          nl: 'Muziek, dans, theater en seizoensprogramma in het cultuurcentrum van de stad.',
          sv: 'Musik, dans, teater och säsongsprogram på stadens kulturcentrum.'
        } satisfies LocalizedText,
        "href": nerjaCultureProgramme,
        "linkLabel": {
          en: 'To the programme',
          de: 'Zum Programm',
          es: 'Al programa',
          nl: 'Naar het programma',
          sv: 'Till programmet'
        } satisfies LocalizedText
      }
    ]
  },
  "seasonality": {
    "title": {
      en: 'How nightlife in Nerja changes by season',
      de: 'Wie sich Nerjas Nachtleben mit den Jahreszeiten verändert',
      es: 'Cómo cambia la noche de Nerja según la temporada',
      nl: 'Hoe het nachtleven met de seizoenen verandert',
      sv: 'Hur nattlivet förändras med säsongen'
    } satisfies LocalizedText,
    "intro": {
      en: 'Nerja does not rely on one year-round formula. The same evening can feel very different in August, October or January while remaining recognizably Nerja.',
      de: 'Nerja folgt nicht das ganze Jahr derselben Formel. Ein Abend kann sich im August, Oktober oder Januar deutlich anders anfühlen und bleibt dennoch typisch Nerja.',
      es: 'Nerja no depende de una única fórmula durante todo el año. Una noche de agosto, octubre o enero puede sentirse muy distinta y seguir siendo reconociblemente nerjeña.',
      nl: 'Nerja leunt niet het hele jaar op één formule. Een avond kan in augustus, oktober of januari heel anders aanvoelen en toch duidelijk Nerja blijven.',
      sv: 'Nerja bygger inte på samma formel året runt. En kväll kan kännas helt olika i augusti, oktober och januari och ändå vara tydligt Nerja.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Summer',
          de: 'Sommer',
          es: 'Verano',
          nl: 'Zomer',
          sv: 'Sommar'
        } satisfies LocalizedText,
        "text": {
          en: 'The town feels fuller, evenings start later, terraces stay active longer and Burriana becomes more rewarding.',
          de: 'Die Stadt ist voller, Abende beginnen später, Terrassen bleiben länger belebt und Burriana wird attraktiver.',
          es: 'La ciudad está más llena, las noches empiezan más tarde, las terrazas mantienen el ambiente durante más horas y Burriana gana atractivo.',
          nl: 'De stad is voller, avonden beginnen later, terrassen blijven langer actief en Burriana wordt aantrekkelijker.',
          sv: 'Staden är fullare, kvällarna börjar senare, terrasserna håller igång längre och Burriana blir mer givande.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Shoulder season',
          de: 'Vor- und Nachsaison',
          es: 'Temporada media',
          nl: 'Voor- en naseizoen',
          sv: 'Mellansäsong'
        } satisfies LocalizedText,
        "text": {
          en: 'Enough venues remain active for dinner and drinks, usually with fewer crowds than summer.',
          de: 'Genügend Lokale bleiben für Abendessen und Drinks aktiv, meist mit weniger Andrang als im Sommer.',
          es: 'Suele ser el momento más equilibrado: ambiente suficiente para una buena noche, con menos presión de gente y mayor facilidad.',
          nl: 'Vaak de beste balans: genoeg sfeer voor een sterke avond, met minder drukte en meer gemak.',
          sv: 'Ofta den bästa balansen: tillräckligt med atmosfär för en bra kväll, med mindre trängsel och större enkelhet.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Winter',
          de: 'Winter',
          es: 'Invierno',
          nl: 'Winter',
          sv: 'Vinter'
        } satisfies LocalizedText,
        "text": {
          en: 'The nightlife layer becomes smaller and more selective, but the town remains sociable. Fewer places carry more of the evening energy.',
          de: 'Die Ausgehszene wird kleiner und selektiver, die Stadt bleibt jedoch gesellig. Weniger Lokale tragen mehr von der Abendstimmung.',
          es: 'La escena nocturna se hace más pequeña y selectiva, aunque la ciudad sigue siendo social. Menos locales concentran una mayor parte del ambiente.',
          nl: 'Het nachtleven wordt kleiner en selectiever, maar de stad blijft sociaal. Een kleiner aantal zaken draagt meer van de avondsfeer.',
          sv: 'Nattlivet blir mindre och mer selektivt, men staden förblir social. Färre ställen bär en större del av kvällsenergin.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Festivals',
          de: 'Feste',
          es: 'Fiestas',
          nl: 'Feesten',
          sv: 'Festivaler'
        } satisfies LocalizedText,
        "text": {
          en: 'At certain points in the year, public celebrations broaden the meaning of nightlife far beyond bars alone.',
          de: 'Zu bestimmten Zeiten im Jahr erweitern öffentliche Feiern das Nachtleben weit über Bars hinaus.',
          es: 'En determinados momentos del año, las celebraciones públicas amplían el concepto de noche mucho más allá de los bares.',
          nl: 'Op bepaalde momenten verbreden openbare vieringen de betekenis van nachtleven tot ver buiten bars alleen.',
          sv: 'Vid vissa tider på året breddar offentliga firanden betydelsen av nattliv långt bortom enbart barer.'
        } satisfies LocalizedText
      }
    ],
    "note": {
      en: 'Opening days and performance schedules change with the season. Check current information shortly before your evening.',
      de: 'Öffnungstage und Veranstaltungsprogramme ändern sich saisonal. Prüft die aktuellen Angaben kurz vor dem Abend.',
      es: 'Los días de apertura, la programación y el ambiente de cada zona cambian con la temporada. Consultad la información actual poco antes de salir.',
      nl: 'Openingsdagen en voorstellingen veranderen met het seizoen. Controleer actuele informatie kort voor jullie avond.',
      sv: 'Öppningsdagar, föreställningar och atmosfären i de olika områdena ändras med säsongen. Kontrollera aktuell information strax före kvällen.'
    } satisfies LocalizedText
  },
  "travelerFit": {
    "title": {
      en: 'Who nightlife in Nerja suits best',
      de: 'Für wen Nerjas Nachtleben besonders gut passt',
      es: 'Para quién encaja mejor la vida nocturna de Nerja',
      nl: 'Voor wie het nachtleven van Nerja het best past',
      sv: 'Vem Nerjas nattliv passar bäst för'
    } satisfies LocalizedText,
    "intro": {
      en: 'Dinner, terraces and later bars are separate enough that a group can stop at different points in the evening.',
      de: 'Abendessen, Terrassen und spätere Bars sind klar genug getrennt, dass eine Gruppe zu unterschiedlichen Zeitpunkten Schluss machen kann.',
      es: 'La variedad de la ciudad permite crear una noche adecuada sin obligar a todo el grupo a seguir el mismo ritmo.',
      nl: 'Door de variatie is een geschikte avond eenvoudig op te bouwen zonder iedereen in hetzelfde ritme te dwingen.',
      sv: 'Stadens bredd gör det enkelt att skapa en passande kväll utan att tvinga hela sällskapet in i samma rytm.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Couples',
          de: 'Paare',
          es: 'Parejas',
          nl: 'Stellen',
          sv: 'Par'
        } satisfies LocalizedText,
        "text": {
          en: 'Nerja is especially strong for couples because evenings can remain scenic, walkable and varied. Sunset, dinner and one beautiful place for drinks already feel complete.',
          de: 'Nerja ist für Paare besonders stark, weil Abende schön, gut zu Fuß und abwechslungsreich bleiben können. Sonnenuntergang, Abendessen und ein besonderer Ort für Drinks fühlen sich bereits vollständig an.',
          es: 'Nerja funciona especialmente bien para parejas porque la noche puede seguir siendo bonita, transitable y variada. Puesta de sol, cena y un lugar especial para tomar algo ya forman un plan completo.',
          nl: 'Nerja is bijzonder sterk voor stellen omdat avonden mooi, beloopbaar en gevarieerd kunnen blijven. Zonsondergang, diner en één bijzondere plek voor een drankje voelen al compleet.',
          sv: 'Nerja är särskilt bra för par eftersom kvällarna kan förbli vackra, promenadvänliga och varierade. Solnedgång, middag och ett fint ställe för drinkar känns redan komplett.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Groups of friends',
          de: 'Freundesgruppen',
          es: 'Grupos de amigos',
          nl: 'Vriendengroepen',
          sv: 'Vänskapsgrupper'
        } satisfies LocalizedText,
        "text": {
          en: 'The town works well for groups who want flexibility: something social and perhaps something later, without requiring a full-scale club destination.',
          de: 'Die Stadt passt zu Gruppen, die flexibel bleiben möchten: erst gesellig, vielleicht später lebhafter, aber nicht zwingend in einem großen Clubziel.',
          es: 'La ciudad encaja con grupos que buscan flexibilidad: algo social y quizá más ambiente después, sin necesitar un gran destino de discotecas.',
          nl: 'De stad past bij groepen die flexibiliteit zoeken: iets sociaals en misschien later iets levendigers, zonder dat een grote clubbestemming nodig is.',
          sv: 'Staden passar grupper som vill ha flexibilitet: något socialt och kanske något livligare senare, utan att behöva en stor klubbdestination.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Families in town',
          de: 'Familien im Zentrum',
          es: 'Familias en el centro',
          nl: 'Gezinnen in het centrum',
          sv: 'Familjer i centrum'
        } satisfies LocalizedText,
        "text": {
          en: 'Early evening still belongs to the wider public life of the centre, which feels more comfortable than a nightlife-only resort strip.',
          de: 'Der frühe Abend gehört weiterhin zum allgemeinen öffentlichen Leben der Stadt und wirkt angenehmer als in einem reinen Nachtleben-Resort.',
          es: 'La primera parte de la noche sigue perteneciendo a la vida pública general de la ciudad y resulta más cómoda que una zona dedicada únicamente al ocio nocturno.',
          nl: 'De vroege avond blijft onderdeel van het brede openbare leven van de stad en voelt comfortabeler dan een resort dat alleen om nachtleven draait.',
          sv: 'Den tidiga kvällen är fortfarande en del av stadens bredare folkliv och känns bekvämare än en semesterort som bara kretsar kring nattliv.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Maximum-intensity party seekers',
          de: 'Maximale Partyintensität',
          es: 'Quienes buscan máxima intensidad',
          nl: 'Maximale feestintensiteit',
          sv: 'Maximal partyintensitet'
        } satisfies LocalizedText,
        "text": {
          en: 'Nerja can provide a lively night, but it is not a large-scale clubbing destination.',
          de: 'In Nerja kann man lebhaft ausgehen, doch die Stadt ist kein Ziel für große Clubs bis zum Morgen.',
          es: 'Nerja puede ofrecer una noche animada, pero no es principalmente un destino de discotecas extremas. Su fuerza está en la variedad y la calidad del ambiente.',
          nl: 'Nerja kan een levendige nacht bieden, maar is niet primair een hardcore clubbestemming. De kracht ligt in keuze en kwaliteit van sfeer, niet in extremen.',
          sv: 'Nerja kan erbjuda en livlig natt men är inte främst en destination för intensivt klubbliv. Styrkan ligger i valmöjligheter och kvaliteten på stämningen.'
        } satisfies LocalizedText
      }
    ]
  },
  "plans": {
    "title": {
      en: 'Three easy ways to plan a night in Nerja',
      de: 'Drei einfache Pläne für einen Abend in Nerja',
      es: 'Tres formas sencillas de organizar una noche en Nerja',
      nl: 'Drie eenvoudige manieren om een avond te plannen',
      sv: 'Tre enkla sätt att planera en kväll i Nerja'
    } satisfies LocalizedText,
    "intro": {
      en: 'Pick a starting area and decide after dinner whether to continue.',
      de: 'Wählt einen Startpunkt und entscheidet nach dem Abendessen, ob ihr weiterziehen möchtet.',
      es: 'Utilizad una secuencia sencilla como punto de partida y dejad margen para decidir hasta dónde queréis alargar la noche.',
      nl: 'Gebruik één eenvoudige volgorde als startpunt en houd ruimte om later te beslissen hoe lang de avond doorgaat.',
      sv: 'Använd en enkel följd som startpunkt och lämna utrymme att senare bestämma hur långt kvällen ska fortsätta.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Date night',
          de: 'Abend zu zweit',
          es: 'Noche en pareja',
          nl: 'Avond voor twee',
          sv: 'Kväll för två'
        } satisfies LocalizedText,
        "text": {
          en: 'Start near the Balcón or Carabeo side for sunset, continue into dinner, then finish with a quieter cocktail or wine bar.',
          de: 'Beginnt am Balcón oder auf der Carabeo-Seite mit dem Sonnenuntergang, geht anschließend essen und schließt mit einem Cocktail oder einer Weinbar ab.',
          es: 'Empezad cerca del Balcón o la zona de Carabeo para ver el atardecer, continuad con la cena y terminad con un cóctel tranquilo o un bar de vinos.',
          nl: 'Begin bij het Balcón of aan de Carabeo-kant voor zonsondergang, ga daarna dineren en sluit af met een rustige cocktail of wijnbar.',
          sv: 'Börja vid Balcón eller på Carabeosidan för solnedgången, fortsätt med middag och avsluta med en lugn cocktail eller vinbar.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Friends’ night',
          de: 'Abend mit Freunden',
          es: 'Noche con amigos',
          nl: 'Avond met vrienden',
          sv: 'Kväll med vänner'
        } satisfies LocalizedText,
        "text": {
          en: 'Begin with tapas, move into the central pub zone later and leave the final choice open: another bar, one more drink or a late finish.',
          de: 'Startet mit Tapas und wechselt später zur Plaza Tutti Frutti, wenn ihr noch eine Bar oder einen späteren Abschluss möchtet.',
          es: 'Comenzad con tapas, pasad más tarde a la zona céntrica de bares y dejad abierta la última decisión: otro local, una copa más o acabar tarde.',
          nl: 'Start met tapas, ga later naar de centrale barzone en laat de laatste keuze open: nog een bar, één drankje meer of een late afsluiting.',
          sv: 'Börja med tapas, gå vidare till det centrala barområdet senare och lämna sista valet öppet: en bar till, en drink till eller en sen avslutning.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Beach-led summer night',
          de: 'Sommerabend am Meer',
          es: 'Noche de verano junto al mar',
          nl: 'Zomeravond aan zee',
          sv: 'Sommarkväll vid havet'
        } satisfies LocalizedText,
        "text": {
          en: 'Spend the afternoon by the sea, stay for dinner at Burriana and either keep the night coastal or return to the centre for more movement.',
          de: 'Verbringt den Nachmittag am Strand, bleibt zum Abendessen in Burriana und entscheidet danach zwischen Küste und Zentrum.',
          es: 'Pasad la tarde en la playa, quedaos a cenar en Burriana y mantened la noche en la costa o regresad al centro si os apetece más movimiento.',
          nl: 'Breng de middag aan zee door, blijf voor diner in Burriana en houd de avond aan de kust of ga terug naar het centrum voor meer beweging.',
          sv: 'Tillbringa eftermiddagen vid havet, stanna för middag i Burriana och behåll kvällen vid kusten eller återvänd till centrum för mer rörelse.'
        } satisfies LocalizedText
      }
    ],
    "transportNote": {
      en: 'The old town and central nightlife zones are walkable once you are in Nerja. If you are staying in Frigiliana, arrange your return transport before the evening; do not assume that walking between the two towns or finding a taxi at the last minute will be practical.',
      de: 'Altstadt und zentrale Ausgehzonen sind innerhalb Nerjas gut zu Fuß erreichbar. Wenn ihr in Frigiliana wohnt, organisiert die Rückfahrt vor dem Abend; der Weg zwischen den Orten ist kein Nachtspaziergang, und auf ein kurzfristig verfügbares Taxi solltet ihr euch nicht verlassen.',
      es: 'El casco antiguo y las zonas céntricas se recorren bien a pie una vez en Nerja. Si os alojáis en Frigiliana, organizad el transporte de regreso antes de salir: caminar de noche entre ambas localidades no es una opción práctica ni conviene depender de encontrar taxi en el último momento.',
      nl: 'De oude stad en centrale uitgaanszones zijn eenmaal in Nerja goed beloopbaar. Verblijven jullie in Frigiliana, regel dan vooraf het vervoer terug; tussen beide plaatsen lopen is ’s nachts niet praktisch en op het laatste moment een taxi vinden is niet gegarandeerd.',
      sv: 'Gamla stan och de centrala kvällsområdena är promenadvänliga när ni väl är i Nerja. Om ni bor i Frigiliana bör hemresan ordnas före kvällen; att gå mellan orterna på natten är inte praktiskt och en taxi i sista minuten kan inte garanteras.'
    } satisfies LocalizedText
  },
  "faq": {
    "title": {
      en: 'Frequently asked questions about nightlife in Nerja',
      de: 'Häufige Fragen zum Nachtleben in Nerja',
      es: 'Preguntas frecuentes sobre la noche en Nerja',
      nl: 'Veelgestelde vragen over het nachtleven in Nerja',
      sv: 'Vanliga frågor om nattlivet i Nerja'
    } satisfies LocalizedText,
    "items": [
      {
        "question": {
          en: 'Where is the main nightlife area in Nerja?',
          de: 'Wo liegt die wichtigste Ausgehzone in Nerja?',
          es: '¿Dónde está la principal zona nocturna de Nerja?',
          nl: 'Waar ligt de belangrijkste uitgaanszone van Nerja?',
          sv: 'Var ligger Nerjas viktigaste nattlivsområde?'
        } satisfies LocalizedText,
        "answer": {
          en: 'The main late-night concentration is around Plaza Tutti Frutti and nearby central streets. The Balcón and old town are better for scenic, earlier and more relaxed evenings.',
          de: 'Das spätere Nachtleben konzentriert sich rund um die Plaza Tutti Frutti und die angrenzenden zentralen Straßen. Balcón und Altstadt eignen sich besser für schöne, frühere und ruhigere Abende.',
          es: 'La mayor concentración para seguir hasta tarde está alrededor de Plaza Tutti Frutti y las calles céntricas cercanas. El Balcón y el casco antiguo encajan mejor con noches bonitas, tempranas y relajadas.',
          nl: 'De grootste concentratie voor later ligt rond Plaza Tutti Frutti en de omliggende straten. Het Balcón en de oude stad passen beter bij mooie, vroegere en rustigere avonden.',
          sv: 'Den största koncentrationen för senare timmar finns runt Plaza Tutti Frutti och de centrala gatorna intill. Balcón och gamla stan passar bättre för vackra, tidigare och lugnare kvällar.'
        } satisfies LocalizedText
      },
      {
        "question": {
          en: 'Is Nerja better for couples or party groups?',
          de: 'Passt Nerja besser zu Paaren oder Partygruppen?',
          es: '¿Nerja es mejor para parejas o para grupos de fiesta?',
          nl: 'Is Nerja beter voor stellen of feestgroepen?',
          sv: 'Är Nerja bättre för par eller partygrupper?'
        } satisfies LocalizedText,
        "answer": {
          en: 'Overall, Nerja is strongest for couples, mixed groups and travelers who want several evening options. Groups can still find a later, livelier atmosphere around Plaza Tutti Frutti.',
          de: 'Insgesamt ist Nerja besonders stark für Paare, gemischte Gruppen und Gäste, die mehrere Optionen möchten. Rund um die Plaza Tutti Frutti finden Gruppen dennoch eine spätere und lebhaftere Stimmung.',
          es: 'En conjunto, Nerja destaca para parejas, grupos mixtos y viajeros que quieren varias opciones. Los grupos también encuentran un ambiente más tardío y animado alrededor de Plaza Tutti Frutti.',
          nl: 'In het algemeen is Nerja het sterkst voor stellen, gemengde groepen en reizigers die meerdere opties willen. Groepen vinden rond Plaza Tutti Frutti ook een latere en levendigere sfeer.',
          sv: 'Överlag är Nerja starkast för par, blandade grupper och resenärer som vill ha flera alternativ. Grupper hittar ändå en senare och livligare atmosfär runt Plaza Tutti Frutti.'
        } satisfies LocalizedText
      },
      {
        "question": {
          en: 'Is there nightlife near the beach?',
          de: 'Gibt es Nachtleben am Strand?',
          es: '¿Hay vida nocturna cerca de la playa?',
          nl: 'Is er nachtleven bij het strand?',
          sv: 'Finns det nattliv nära stranden?'
        } satisfies LocalizedText,
        "answer": {
          en: 'Yes. Burriana is the clearest beach-led evening area, especially in warmer months, although its atmosphere is usually more relaxed than the central pub zone.',
          de: 'Ja. Burriana ist besonders in den wärmeren Monaten die klarste Zone für einen Abend am Strand, meist jedoch entspannter als der zentrale Barbereich.',
          es: 'Sí. Burriana es la zona más clara para una noche ligada a la playa, especialmente en los meses cálidos, aunque suele ser más relajada que el área céntrica de bares.',
          nl: 'Ja. Burriana is vooral in warme maanden de duidelijkste strandgerichte avondzone, al blijft de sfeer meestal rustiger dan rond de centrale bars.',
          sv: 'Ja. Burriana är det tydligaste strandnära kvällsområdet, särskilt under varmare månader, men atmosfären är vanligtvis lugnare än i det centrala barområdet.'
        } satisfies LocalizedText
      },
      {
        "question": {
          en: 'Is nightlife in Nerja still worthwhile in winter?',
          de: 'Lohnt sich Nerjas Nachtleben auch im Winter?',
          es: '¿Merece la pena salir por Nerja en invierno?',
          nl: 'Is het nachtleven in de winter nog de moeite waard?',
          sv: 'Är nattlivet värt det även på vintern?'
        } satisfies LocalizedText,
        "answer": {
          en: 'Yes, but fewer venues open and some operate on reduced days. Check individual opening times before setting out.',
          de: 'Ja, aber weniger Lokale öffnen und manche haben reduzierte Öffnungstage. Prüft die Zeiten der einzelnen Lokale vorab.',
          es: 'Sí, pero con un ritmo más pequeño y selectivo. La ventaja es una ciudad cómoda y menos saturada, aunque conviene comprobar los días de apertura.',
          nl: 'Ja, maar met een kleiner en selectiever ritme. De stad voelt comfortabeler en minder druk, al is het verstandig openingsdagen vooraf te controleren.',
          sv: 'Ja, men i mindre och mer selektiv skala. Fördelen är att staden känns bekvämare och mindre pressad, även om öppningsdagar bör kontrolleras.'
        } satisfies LocalizedText
      }
    ]
  },
  "combine": {
    "title": {
      en: 'Let the evening grow out of the day',
      de: 'Ein Abend, der aus dem Tag entsteht',
      es: 'Una noche que nace del propio día',
      nl: 'Een avond die uit de dag voortkomt',
      sv: 'En kväll som växer fram ur dagen'
    } satisfies LocalizedText,
    "intro": {
      en: 'Dinner in Nerja can lead naturally to a terrace or the later bars. If that is not your kind of evening, the town has several other ways to spend the day.',
      de: 'Aus einem Abendessen in Nerja werden leicht eine Terrasse und später noch ein paar Bars. Wenn das nicht euer Abend ist, bietet der Ort andere Rhythmen für den Tag.',
      es: 'En Nerja, una cena puede continuar de forma natural en una terraza y, más tarde, entre bares. Si no es la noche que buscáis, la localidad ofrece otros ritmos para el día.',
      nl: 'Een diner in Nerja loopt gemakkelijk door naar een terras en later naar de bars. Past dat niet bij jullie avond, dan biedt de plaats andere ritmes voor de dag.',
      sv: 'En middag i Nerja kan enkelt fortsätta på en terrass och senare bland barerna. Om det inte är er sorts kväll finns flera andra rytmer för dagen.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Move from dinner into the evening',
          de: 'Vom Essen in den Abend',
          es: 'De la cena a la noche',
          nl: 'Van het diner de avond in',
          sv: 'Från middagen vidare in i kvällen'
        } satisfies LocalizedText,
        "text": {
          en: 'Lunch by the sea and dinner in the old town lead into different evenings. The central bars are the better starting point when you want the night to continue.',
          de: 'Mittagessen am Meer und Abendessen in der Altstadt führen in unterschiedliche Abende. Wenn es später weitergehen soll, sind die zentralen Bars der bessere Ausgangspunkt.',
          es: 'Un almuerzo junto al mar y una cena en el casco antiguo llevan a noches diferentes. Si queréis seguir hasta más tarde, los bares del centro son el mejor punto de partida.',
          nl: 'Lunch aan zee en diner in de oude stad leiden tot verschillende avonden. Willen jullie later doorgaan, dan vormen de centrale bars het betere vertrekpunt.',
          sv: 'Lunch vid havet och middag i gamla stan leder till olika sorters kvällar. Om ni vill fortsätta senare är barerna i centrum den bättre startpunkten.'
        } satisfies LocalizedText,
        "linkToken": 'nerja_food_authority' as const,
        "linkLabel": {
          en: 'Find the dinner setting that suits the evening',
          de: 'Das passende Umfeld für Essen und Abend finden',
          es: 'Encontrar el ambiente de cena que encaja con la noche',
          nl: 'Vind de dineromgeving die bij de avond past',
          sv: 'Hitta middagsmiljön som passar kvällen'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Keep another Nerja day open',
          de: 'Einen anderen Nerja-Tag offenlassen',
          es: 'Dejar abierto otro día en Nerja',
          nl: 'Houd een andere Nerja-dag open',
          sv: 'Lämna plats för en annan Nerja-dag'
        } satisfies LocalizedText,
        "text": {
          en: 'If a late evening is not the plan, beaches, caves, the Balcón, Verano Azul and day trips give the stay a different rhythm.',
          de: 'Wenn ein später Abend nicht zu euch passt, geben Strände, Höhlen, Balcón, Verano Azul und Tagesausflüge dem Aufenthalt einen anderen Rhythmus.',
          es: 'Si no os apetece alargar la noche, las playas, las cuevas, el Balcón, Verano Azul y las excursiones dan otro ritmo a la estancia.',
          nl: 'Als een late avond niet het plan is, geven stranden, grotten, het Balcón, Verano Azul en dagtochten het verblijf een ander ritme.',
          sv: 'Om en sen kväll inte passar ger stränder, grottor, Balcón, Verano Azul och dagsutflykter vistelsen en annan rytm.'
        } satisfies LocalizedText,
        "linkToken": 'nerja_experience_hub' as const,
        "linkLabel": {
          en: 'See Nerja through coast, caves, culture and evenings',
          de: 'Nerja über Küste, Höhlen, Kultur und Abende erleben',
          es: 'Vivir Nerja entre costa, cuevas, cultura y noches',
          nl: 'Beleef Nerja via kust, grotten, cultuur en avonden',
          sv: 'Upplev Nerja genom kust, grottor, kultur och kvällar'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: 'And then home, on foot',
      de: 'Und dann nach Hause, zu Fuß',
      es: 'Y después a casa, a pie',
      nl: 'En dan naar huis, te voet',
      sv: 'Och sedan hem, till fots'
    } satisfies LocalizedText,
    "lead": {
      en: 'Its strength is not competing with the coast’s biggest party destinations. It is offering several good versions of an evening in a compact setting: scenic, social, cultural, beach-led or late.',
      de: 'Die Stärke liegt nicht im Wettbewerb mit den größten Partyorten der Küste, sondern in mehreren guten Versionen eines Abends auf engem Raum: schön, gesellig, kulturell, am Strand oder spät.',
      es: 'Su fuerza no está en competir con los grandes destinos de fiesta de la costa, sino en ofrecer varias buenas versiones de una noche en un entorno compacto: con vistas, social, cultural, junto al mar o hasta tarde.',
      nl: 'De kracht ligt niet in concurreren met de grootste feestbestemmingen aan de kust, maar in meerdere goede versies van een avond op korte afstand: mooi, sociaal, cultureel, aan zee of laat.',
      sv: 'Styrkan ligger inte i att konkurrera med kustens största partydestinationer, utan i flera bra versioner av en kväll på liten yta: vacker, social, kulturell, havsnära eller sen.'
    } satisfies LocalizedText,
    "availabilityCta": {
      en: 'Check availability',
      de: 'Verfügbarkeit prüfen',
      es: 'Consultar disponibilidad',
      nl: 'Beschikbaarheid bekijken',
      sv: 'Kontrollera tillgänglighet'
    } satisfies LocalizedText,
    "apartmentsCta": {
      en: 'View AMARA Playa',
      de: 'AMARA Playa ansehen',
      es: 'Ver AMARA Playa',
      nl: 'Bekijk AMARA Playa',
      sv: 'Visa AMARA Playa'
    } satisfies LocalizedText,
    "stayReason": {
      en: "Our AMARA Playa is around 500 metres from the Balcón de Europa, so you can walk home from an evening in the centre. The apartment faces the courtyard on the fifth floor; ten steps lead to the lift. Bar and terrace opening hours depend on the venue and season.",
      de: "Unsere AMARA Playa liegt rund 500 Meter vom Balcón de Europa entfernt. Nach einem Abend im Zentrum könnt ihr zu Fuß nach Hause gehen. Die Wohnung liegt im fünften Stock zum Innenhof; vor dem Aufzug liegen zehn Stufen. Öffnungszeiten von Bars und Terrassen hängen vom Lokal und der Saison ab.",
      es: "Nuestra AMARA Playa está a unos 500 metros del Balcón de Europa, así que podéis volver andando después de una noche en el centro. El apartamento da al patio interior y está en la quinta planta; hay diez escalones antes del ascensor. Los horarios de bares y terrazas dependen del local y de la temporada.",
      nl: "Ons AMARA Playa ligt op ongeveer 500 meter van het Balcón de Europa. Na een avond in het centrum kunnen jullie naar huis lopen. Het appartement ligt op de vijfde verdieping aan de binnenplaats; vóór de lift zijn er tien treden. De openingstijden van bars en terrassen verschillen per zaak en seizoen.",
      sv: "Vår AMARA Playa ligger ungefär 500 meter från Balcón de Europa, så ni kan gå hem efter en kväll i centrum. Lägenheten vetter mot innergården på femte våningen; före hissen finns tio trappsteg. Barernas och terrassernas öppettider varierar med ställe och säsong."
    } satisfies LocalizedText
  }
};

export const nerjaNightlifeContent: Record<
  AmaraLanguage,
  NerjaNightlifePageCopy
> = {
  en: resolveLocale(nerjaNightlifeContentCopy, 'en'),
  de: resolveLocale(nerjaNightlifeContentCopy, 'de'),
  es: resolveLocale(nerjaNightlifeContentCopy, 'es'),
  nl: resolveLocale(nerjaNightlifeContentCopy, 'nl'),
  sv: resolveLocale(nerjaNightlifeContentCopy, 'sv')
};
