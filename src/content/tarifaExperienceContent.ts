import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export const TARIFA_EXPERIENCE_TOKEN = 'tarifa_experience_hub' as const;

export type TarifaExperienceLinkToken =
  | 'location_tarifa'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority';

export interface TarifaExperienceDayType {
  title: string;
  text: string;
}

export interface TarifaExperienceSection {
  id: string;
  title: string;
  paragraphs: string[];
  cta?: {
    label: string;
    token: TarifaExperienceLinkToken;
  };
}

export interface TarifaExperiencePageCopy {
  navLabel: string;
  breadcrumbLabel: string;
  hero: {
    title: string;
    lead: string[];
    imageAlt: string;
  };
  dayChooser: {
    title: string;
    intro: string[];
    days: TarifaExperienceDayType[];
  };
  sections: TarifaExperienceSection[];
  closing: {
    title: string;
    lead: string;
    ctaLabel: string;
    token: 'location_tarifa';
  };
}

export const tarifaExperienceSeo: AmaraAuthoringSeo = {
  version: '2026-08-12-tarifa-experience-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-tarifa/amara-tarifa-apartment10.webp',
  languages: {
    en: {
      title: 'Things to Do in Tarifa: Beaches, Kitesurfing & Nature',
      description:
        'Discover what makes a stay in Tarifa different: beaches for every kind of day, kitesurfing, the Old Town, wildlife, Bolonia and trips across the Strait.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Tarifa erleben: Strände, Kitesurfen, Natur & Altstadt',
      description:
        'Was kann man in Tarifa unternehmen? Entdeckt unterschiedliche Strände, Kitesurfen, Altstadt-Abende, Natur an der Meerenge, Bolonia und mehr.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Tarifa: playas, kitesurf, naturaleza y casco antiguo',
      description:
        'Descubre Tarifa más allá del kitesurf: playas diferentes, casco antiguo, naturaleza del Estrecho, Bolonia y excursiones para una estancia de varios días.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Tarifa: stranden, kitesurfen, natuur en oude stad',
      description:
        'Ontdek Tarifa voorbij het kitesurfen: verschillende stranden, de oude stad, natuur rond de Straat van Gibraltar, Bolonia en bijzondere dagtrips.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Tarifa: stränder, kitesurfing, natur och gamla stan',
      description:
        'Upptäck Tarifa bortom kitesurfingen: olika stränder, gamla stan, naturen kring Gibraltarsundet, Bolonia och utflykter under en längre vistelse.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const tarifaExperienceContent = {
  en: {
    navLabel: 'Experiences',
    breadcrumbLabel: 'Experiences',
    hero: {
      title: 'Experiences in Tarifa: choose your kind of day',
      lead: [
        'Tarifa is famous for wind and kitesurfing, but that is only one way to experience it. Stay for a few days and you can move between Atlantic beaches, the Old Town, wildlife in the Strait of Gibraltar, long evenings over dinner and completely different days around Bolonia or across the water in Tangier.',
        'The key is not trying to do everything. Tarifa works best when you choose the kind of day that fits the conditions — and what you actually feel like doing.'
      ],
      imageAlt: 'Whale artwork and writing desk at AMARA Family & Surf in Tarifa'
    },
    dayChooser: {
      title: 'Choose your Tarifa day',
      intro: [
        'Some days are for the beach. Some are for getting on the water. Others are better spent walking the Old Town, watching wildlife or heading farther along the coast.',
        `That flexibility is part of Tarifa's appeal, especially if you are staying for more than a weekend.`
      ],
      days: [
        {
          title: 'Beach day',
          text: 'Swim close to town, watch the kites farther along the Atlantic coast or make the journey itself part of the experience at Bolonia.'
        },
        {
          title: 'Wind day',
          text: 'If you kite, Tarifa becomes a playground. If you do not, wind does not have to mean a lost day — it simply changes the plan.'
        },
        {
          title: 'Town day',
          text: 'Slow down in the Old Town, stay for dinner and see how Tarifa changes once the beach day ends.'
        },
        {
          title: 'Nature day',
          text: `The Strait is an important migration corridor both above and below the water, making wildlife one of Tarifa's strongest reasons to visit beyond surfing.`
        },
        {
          title: 'Bolonia day',
          text: 'Combine a broad Atlantic beach, the dune landscape and the Roman remains of Baelo Claudia in one outing.'
        }
      ]
    },
    sections: [
      {
        id: 'beaches',
        title: 'Beaches that do different jobs',
        paragraphs: [
          `Tarifa's beaches are not interchangeable.`,
          'A compact beach close to town gives you a very different day from the open Atlantic spaces of Los Lances or Valdevaqueros. Farther west, beaches become increasingly about landscape, wind and the journey itself.',
          'That is why we do not think in terms of one “best beach”. The better question is: what kind of beach day do you want today?'
        ],
        cta: {
          label: `Explore Tarifa's beaches`,
          token: 'tarifa_beaches_authority'
        }
      },
      {
        id: 'wind',
        title: 'Wind is part of Tarifa — especially if you kite',
        paragraphs: [
          `Levante and Poniente are part of Tarifa's identity. For kitesurfers and windsurfers, that is one of the main reasons to come. For everyone else, it simply means learning not to plan every day in exactly the same way.`,
          'If kitesurfing is part of your stay, AMARA guests can also be connected directly with our friends at Tarifa Surf Club before arrival. Lessons or equipment can be organised in advance, so you do not have to start your holiday by searching for a school or rental shop. Equipment can be arranged to be ready at the accommodation.'
        ],
        cta: {
          label: 'Understand wind & kitesurfing in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'The Old Town belongs to the evening',
        paragraphs: [
          'The Old Town is more than something to walk through between beach visits.',
          'Its narrow streets, historic buildings, cafés and restaurants give Tarifa another centre of gravity once the day on the coast winds down. Come back for a walk, stay for dinner and allow the evening to unfold rather than treating the centre as another sightseeing stop.',
          'For couples in particular, this contrast is part of what makes Tarifa work so well: an active day does not have to mean an active night.'
        ]
      },
      {
        id: 'nature',
        title: 'Look towards the Strait, not only the beach',
        paragraphs: [
          `Tarifa sits on one of Europe's most remarkable natural corridors.`,
          'Birds cross between Europe and Africa here, while whales and dolphins make the Strait a destination in its own right. Boat trips are seasonal and weather-dependent, so they are better treated as something to plan with flexibility rather than a guaranteed fixed point in your itinerary.',
          'Nature here is not an extra activity added to a beach holiday. It is part of what makes Tarifa geographically different.'
        ]
      },
      {
        id: 'bolonia',
        title: 'Bolonia is worth a day of its own',
        paragraphs: [
          'Bolonia should not simply be filed under “another beach”.',
          'The appeal is the combination: open coastline, dune landscape and the archaeological site of Baelo Claudia. Together they create one of the strongest day trips from Tarifa for guests who want more than another afternoon by the water.',
          'It works especially well when you have several nights and can give the outing enough time rather than squeezing it between other plans.'
        ]
      },
      {
        id: 'tangier',
        title: 'And then there is Africa',
        paragraphs: [
          `A trip across the Strait to Tangier is one of Tarifa's most unusual possibilities.`,
          'It can make a longer stay genuinely different, but it does not need to become the reason for visiting Tarifa. Ferry schedules, entry requirements and operating conditions can change, so current official information should always take precedence over any evergreen travel guide.',
          'Think of Tangier as an optional extra — particularly rewarding when you have enough time to enjoy Tarifa itself first.'
        ]
      },
      {
        id: 'stay-length',
        title: 'Give Tarifa enough time to change the plan',
        paragraphs: [
          'With two or three nights, combine the coast and Old Town with one signature experience.',
          'With four to seven nights, Tarifa becomes much more interesting: you can choose different beaches, respond to the wind rather than fight it, add wildlife or Bolonia and still leave space for an evening with no itinerary at all.',
          'That flexibility is one of the strongest reasons to stay rather than simply pass through.'
        ]
      }
    ],
    closing: {
      title: 'First decide how you want to experience Tarifa.',
      lead: 'Then decide where to stay.',
      ctaLabel: 'Where to stay in Tarifa',
      token: 'location_tarifa'
    }
  },
  de: {
    navLabel: 'Erlebnisse',
    breadcrumbLabel: 'Erlebnisse',
    hero: {
      title: 'Tarifa erleben: Welcher Tag passt heute zu euch?',
      lead: [
        'Tarifa ist für Wind und Kitesurfen bekannt. Aber darauf lässt sich der Ort nicht reduzieren. Wenn ihr mehrere Tage bleibt, könnt ihr zwischen Atlantikstränden, Altstadt, Natur an der Straße von Gibraltar und ganz unterschiedlichen Ausflügen wechseln.',
        'Ihr müsst dabei nicht jeden Tag schon vorher festlegen. Gerade in Tarifa gehört es zum Aufenthalt, morgens zu schauen, worauf ihr Lust habt und welche Bedingungen dazu passen.'
      ],
      imageAlt: 'Walbild und Schreibtisch bei AMARA Family & Surf in Tarifa'
    },
    dayChooser: {
      title: 'Wählt euren Tarifa-Tag',
      intro: [],
      days: [
        {
          title: 'Ein Strandtag.',
          text: 'Baden nah am Ort, den Kitern am Atlantik zuschauen oder weiter westlich einen ganzen Tag rund um Strand und Landschaft verbringen.'
        },
        {
          title: 'Ein Windtag.',
          text: 'Für Kiter ist das oft genau der Grund, nach Tarifa zu kommen. Wenn ihr nicht kitet, heißt Wind dagegen nicht automatisch, dass der Tag ausfällt.'
        },
        {
          title: 'Ein Altstadttag.',
          text: 'Durch die Gassen laufen, später essen gehen und erleben, wie sich Tarifa verändert, wenn der Strandtag vorbei ist.'
        },
        {
          title: 'Ein Naturtag.',
          text: 'Vogelzug, Meerenge, Wale und Delfine zeigen eine Seite Tarifas, die mit Wassersport wenig zu tun hat.'
        },
        {
          title: 'Ein Bolonia-Tag.',
          text: 'Strand, Dünenlandschaft und Baelo Claudia ergeben zusammen einen Ausflug, für den man sich ruhig Zeit nehmen kann.'
        }
      ]
    },
    sections: [
      {
        id: 'beaches',
        title: 'Nicht jeder Strand ist für denselben Tag gemacht',
        paragraphs: [
          'Playa Chica, Los Lances, Valdevaqueros oder Bolonia stehen nicht einfach für vier Versionen desselben Strandurlaubs.',
          'Manche funktionieren gut in Verbindung mit dem Ort, andere leben von Weite, Wind oder Landschaft. Deshalb halten wir wenig von einer pauschalen Liste der „besten Strände“.',
          'Die sinnvollere Frage lautet: Was möchtet ihr heute am Meer machen?'
        ],
        cta: {
          label: 'Tarifas Strände entdecken',
          token: 'tarifa_beaches_authority'
        }
      },
      {
        id: 'wind',
        title: 'Wind gehört zu Tarifa',
        paragraphs: [
          'Levante und Poniente prägen Tarifa. Für Kitesurfer ist das ein großer Teil der Faszination. Für alle anderen bedeutet es vor allem, den Tag ein wenig flexibler zu planen.',
          'Wenn Kitesurfen zu eurem Urlaub gehört, können wir AMARA-Gäste bereits vor der Anreise direkt mit unseren Freunden vom Tarifa Surf Club verbinden. Unterricht oder Material lassen sich vorab organisieren. Auf Wunsch kann das Equipment schon bei eurer Ankunft an der Unterkunft bereitstehen.',
          'Ihr müsst also nicht erst in Tarifa einen Shop oder eine Schule suchen, bevor euer erster Tag auf dem Wasser beginnen kann.'
        ],
        cta: {
          label: 'Wind & Kitesurfen in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'Die Altstadt beginnt nicht beim Sightseeing und endet nicht danach',
        paragraphs: [
          'Tarifas Altstadt funktioniert besonders schön als Gegenpol zum Tag draußen.',
          'Ihr könnt am Nachmittag durch die Gassen laufen, später zum Essen bleiben und den Abend ohne großen Plan weiterziehen lassen. Restaurants und Bars gehören dabei zum Stadtleben, ohne dass wir daraus eine endlose Empfehlungs-Liste machen müssen.',
          'Gerade für Paare ist dieser Wechsel reizvoll: tagsüber Meer, Sport oder Natur – abends gemeinsam zu Fuß durch die Altstadt.'
        ]
      },
      {
        id: 'nature',
        title: 'Tarifa liegt an einer außergewöhnlichen Naturroute',
        paragraphs: [
          'Die Straße von Gibraltar verbindet nicht nur zwei Meere und zwei Kontinente. Sie ist auch ein wichtiger Wanderkorridor für Vögel und Lebensraum verschiedener Wal- und Delfinarten.',
          'Walbeobachtungsfahrten sind saison- und wetterabhängig. Deshalb sollte man sie nicht wie einen garantiert stattfindenden Termin behandeln, sondern etwas Flexibilität einplanen.',
          'Für Nicht-Surfer ist genau diese Naturvielfalt einer der stärksten Gründe, länger in Tarifa zu bleiben.'
        ]
      },
      {
        id: 'bolonia',
        title: 'Bolonia ist mehr als ein weiterer Strand',
        paragraphs: [
          'Bolonia verbindet einen weitläufigen Küstenabschnitt mit Dünenlandschaft und der römischen Stadt Baelo Claudia.',
          'Das macht den Ausflug besonders: Ihr müsst euch nicht zwischen Strand und Kultur entscheiden. Beides lässt sich an einem Tag sinnvoll miteinander verbinden.'
        ]
      },
      {
        id: 'tangier',
        title: 'Ein anderer Kontinent als Tagesausflug',
        paragraphs: [
          'Von Tarifa aus ist auch Tanger erreichbar.',
          'Das ist ein außergewöhnlicher Zusatz zu einem längeren Aufenthalt, sollte Tarifa selbst aber nicht verdrängen. Fähren, Einreisebestimmungen und Betriebsbedingungen können sich ändern; dafür solltet ihr immer aktuelle offizielle Informationen nutzen.'
        ]
      },
      {
        id: 'stay-length',
        title: 'Zwei Nächte sind anders als eine Woche',
        paragraphs: [
          'Bei zwei oder drei Nächten würden wir nicht versuchen, alles unterzubringen: Küste, Altstadt und ein besonderes Erlebnis reichen.',
          'Bei vier bis sieben Nächten wird Tarifa deutlich entspannter. Dann könnt ihr den Wind mitdenken statt gegen ihn zu planen, unterschiedliche Strandtage ausprobieren, Bolonia oder Natur einbauen und trotzdem Zeit freihalten.'
        ]
      }
    ],
    closing: {
      title: 'Erst entscheiden, wie ihr Tarifa erleben möchtet.',
      lead: 'Dann die passende Lage wählen.',
      ctaLabel: 'Wo in Tarifa übernachten?',
      token: 'location_tarifa'
    }
  },
  es: {
    navLabel: 'Experiencias',
    breadcrumbLabel: 'Experiencias',
    hero: {
      title: 'Qué hacer en Tarifa: elegid el día que os apetece',
      lead: [
        'Tarifa es conocida por el viento y el kitesurf, pero quedarse aquí varios días permite descubrir mucho más. Hay días de playa, días de agua y viento, tardes en el casco antiguo, naturaleza en el Estrecho y excursiones que combinan costa, paisaje e historia.',
        'No hace falta convertir las vacaciones en una lista de cosas que tachar. Tarifa funciona mejor cuando dejáis un poco de margen para decidir cada día.'
      ],
      imageAlt: 'Ilustración de una ballena y escritorio de AMARA Family & Surf en Tarifa'
    },
    dayChooser: {
      title: 'Un Tarifa distinto para cada día',
      intro: [],
      days: [
        {
          title: 'Día de playa',
          text: 'cerca del pueblo o en la costa atlántica, según lo que busquéis.'
        },
        {
          title: 'Día de viento',
          text: 'perfecto si practicáis kite; simplemente diferente si no lo hacéis.'
        },
        {
          title: 'Día de casco antiguo',
          text: 'paseo, cena y una noche sin necesidad de planificar demasiado.'
        },
        {
          title: 'Día de naturaleza',
          text: 'aves migratorias, el Estrecho y fauna marina.'
        },
        {
          title: 'Día de Bolonia',
          text: 'playa, duna y Baelo Claudia en una misma salida.'
        }
      ]
    },
    sections: [
      {
        id: 'beaches',
        title: 'Elegir playa importa más que hacer un ranking',
        paragraphs: [
          'Las playas de Tarifa tienen personalidades muy distintas. Playa Chica no ofrece el mismo tipo de día que Los Lances, Valdevaqueros o Bolonia.',
          'Por eso la pregunta no debería ser «¿cuál es la mejor playa?», sino:',
          '¿qué tipo de día de playa queremos hoy?'
        ],
        cta: {
          label: 'Descubrir las playas de Tarifa',
          token: 'tarifa_beaches_authority'
        }
      },
      {
        id: 'wind',
        title: 'El viento forma parte del viaje',
        paragraphs: [
          'Levante y Poniente forman parte de Tarifa. Para quienes practican kitesurf son parte de la razón para venir. Para los demás, simplemente invitan a mantener cierta flexibilidad.',
          'Los huéspedes de AMARA que quieran practicar o aprender kitesurf pueden ponerse en contacto antes de llegar con nuestros amigos de Tarifa Surf Club. Podemos facilitar el contacto para organizar clases o material con antelación, y el equipo puede prepararse para estar disponible en el alojamiento a vuestra llegada.'
        ],
        cta: {
          label: 'Viento y kitesurf en Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'El casco antiguo cambia cuando termina el día de playa',
        paragraphs: [
          'El casco antiguo merece algo más que una visita rápida.',
          'Pasear por sus calles, quedarse a cenar y ver cómo empieza la noche forma parte de la experiencia de dormir en Tarifa. Es el contrapunto perfecto a un día activo junto al mar.'
        ]
      },
      {
        id: 'nature',
        title: 'El Estrecho también se mira hacia arriba y hacia el agua',
        paragraphs: [
          'Tarifa está situada en un corredor natural extraordinario entre Europa y África.',
          'La migración de aves y la presencia de cetáceos convierten la zona en mucho más que un destino de playa y deporte. Las salidas de avistamiento dependen de la temporada y del tiempo, por lo que conviene mantener los planes flexibles y comprobar siempre la información actual.'
        ]
      },
      {
        id: 'bolonia',
        title: 'Bolonia merece tiempo',
        paragraphs: [
          'Bolonia combina costa, paisaje dunar y el conjunto arqueológico de Baelo Claudia.',
          'Es uno de esos días en los que playa y cultura no compiten entre sí, sino que forman parte del mismo plan.'
        ]
      },
      {
        id: 'tangier',
        title: 'Tánger como posibilidad, no como obligación',
        paragraphs: [
          'La cercanía de Marruecos añade una dimensión poco habitual a una estancia en Tarifa.',
          'Una excursión a Tánger puede tener mucho sentido si disponéis de varios días. Los horarios de ferry y los requisitos de entrada pueden cambiar, así que la planificación práctica debe hacerse siempre con fuentes oficiales actualizadas.'
        ]
      },
      {
        id: 'stay-length',
        title: 'Tarifa mejora cuando no intentáis verlo todo',
        paragraphs: [
          'Con dos o tres noches, elegid bien: costa, casco antiguo y una experiencia principal.',
          'Con cuatro a siete noches podéis dejar más espacio a las condiciones, alternar playas, descubrir naturaleza o Bolonia y seguir teniendo noches sin agenda.'
        ]
      }
    ],
    closing: {
      title: 'Primero decidid cómo queréis vivir Tarifa.',
      lead: 'Después, elegid dónde alojaros.',
      ctaLabel: 'Dónde alojarse en Tarifa',
      token: 'location_tarifa'
    }
  },
  nl: {
    navLabel: 'Ervaringen',
    breadcrumbLabel: 'Ervaringen',
    hero: {
      title: 'Tarifa beleven: kies de dag die bij jullie past',
      lead: [
        'Tarifa staat bekend om wind en kitesurfen, maar een verblijf van een paar dagen laat een veel breder beeld zien. De ene dag draait om het strand, de volgende om de oude stad, natuur rond de Straat van Gibraltar of een uitstap richting Bolonia.',
        'Juist hier hoeft niet iedere vakantiedag vooraf vast te staan.'
      ],
      imageAlt: 'Walviskunst en schrijftafel bij AMARA Family & Surf in Tarifa'
    },
    dayChooser: {
      title: 'Kies je Tarifa-dag',
      intro: [],
      days: [
        {
          title: 'Stranddag',
          text: 'zwemmen dicht bij de stad of verder langs de Atlantische kust.'
        },
        {
          title: 'Winddag',
          text: 'ideaal voor kiters; voor anderen vooral een reden om het dagplan aan te passen.'
        },
        {
          title: 'Stadsdag',
          text: 'slenteren door de oude stad en blijven voor eten en de avond.'
        },
        {
          title: 'Natuurdag',
          text: 'trekvogels, walvissen en dolfijnen rond de Straat.'
        },
        {
          title: 'Bolonia-dag',
          text: 'strand, duinlandschap en Romeins Baelo Claudia combineren.'
        }
      ]
    },
    sections: [
      {
        id: 'beaches',
        title: 'De beste strandkeuze hangt af van de dag',
        paragraphs: [
          'Playa Chica, Los Lances, Valdevaqueros en Bolonia bieden heel verschillende ervaringen.',
          'Daarom vinden we een ranglijst van “de beste stranden” minder nuttig dan één eenvoudige vraag:',
          'Wat willen jullie vandaag aan zee doen?'
        ],
        cta: {
          label: 'Ontdek de stranden van Tarifa',
          token: 'tarifa_beaches_authority'
        }
      },
      {
        id: 'wind',
        title: 'Wind hoort bij Tarifa',
        paragraphs: [
          'Levante en Poniente bepalen voor een deel wat er op het water gebeurt. Voor kitesurfers is dat juist de aantrekkingskracht. Wie niet surft, hoeft een winderige dag echter niet als verloren te zien.',
          'AMARA-gasten die willen kitesurfen of het willen leren, kunnen we vóór aankomst direct in contact brengen met onze vrienden van Tarifa Surf Club. Lessen of materiaal kunnen vooraf worden geregeld en het materiaal kan bij aankomst bij de accommodatie klaarstaan.'
        ],
        cta: {
          label: 'Wind & kitesurfen in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'De oude stad is op haar best als je blijft hangen',
        paragraphs: [
          'De oude stad is geen bezienswaardigheid die je in een uur hoeft af te vinken.',
          'Loop er later op de dag naartoe, blijf eten en maak van de avond zelf onderdeel van het verblijf. Dat contrast tussen buiten zijn overdag en de stad in de avond maakt Tarifa ook aantrekkelijk voor stellen die helemaal niet voor watersport komen.'
        ]
      },
      {
        id: 'nature',
        title: 'De Straat van Gibraltar is een natuurgebied op wereldschaal',
        paragraphs: [
          'Tarifa ligt op een belangrijke route tussen Europa en Afrika.',
          'Vogeltrek en de aanwezigheid van walvissen en dolfijnen geven het gebied een heel ander karakter dan een gewone strandbestemming. Boottochten zijn afhankelijk van seizoen en weer, dus enige flexibiliteit hoort bij de planning.'
        ]
      },
      {
        id: 'bolonia',
        title: 'Maak van Bolonia een complete dag',
        paragraphs: [
          'Bij Bolonia komen strand, duinen en het Romeinse Baelo Claudia samen.',
          'Daardoor voelt het niet als nog een strandstop, maar als een volledige dagtrip die vooral goed past wanneer jullie wat langer in Tarifa blijven.'
        ]
      },
      {
        id: 'tangier',
        title: 'Tanger ligt dichtbij, maar hoeft niet centraal te staan',
        paragraphs: [
          'Een dag naar Tanger kan een verblijf in Tarifa bijzonder maken.',
          `Zie het vooral als extra mogelijkheid wanneer jullie voldoende tijd hebben. Vaarschema's en toegangsvoorwaarden kunnen veranderen; controleer daarvoor altijd actuele officiële informatie.`
        ]
      },
      {
        id: 'stay-length',
        title: 'Meer nachten geven Tarifa ruimte',
        paragraphs: [
          'Met twee of drie nachten zouden we kiezen voor kust, oude stad en één bijzondere activiteit.',
          'Met vier tot zeven nachten ontstaat ruimte om van plan te veranderen, meerdere strandtypes te proberen en natuur of Bolonia toe te voegen zonder dat de reis een checklist wordt.'
        ]
      }
    ],
    closing: {
      title: 'Bepaal eerst hoe jullie Tarifa willen beleven.',
      lead: 'Kies daarna waar jullie willen verblijven.',
      ctaLabel: 'Waar overnachten in Tarifa?',
      token: 'location_tarifa'
    }
  },
  sv: {
    navLabel: 'Upplevelser',
    breadcrumbLabel: 'Upplevelser',
    hero: {
      title: 'Upplev Tarifa: välj vilken sorts dag ni vill ha',
      lead: [
        'Tarifa är känt för vind och kitesurfing, men några dagar här visar en mycket bredare destination. Ni kan växla mellan Atlantstränder, gamla stan, naturen kring Gibraltarsundet och utflykter där kust, landskap och historia möts.',
        'Det fina med Tarifa är att varje dag inte måste planeras i förväg.'
      ],
      imageAlt: 'Valkonst och skrivbord på AMARA Family & Surf i Tarifa'
    },
    dayChooser: {
      title: 'Välj er Tarifa-dag',
      intro: [],
      days: [
        {
          title: 'Stranddag',
          text: 'bada nära stan eller sök öppnare Atlantkust längre västerut.'
        },
        {
          title: 'Vinddag',
          text: 'precis vad kitesurfare hoppas på, men inte en förlorad dag för andra.'
        },
        {
          title: 'Stadsdag',
          text: 'promenera i gamla stan och stanna kvar över middag och kväll.'
        },
        {
          title: 'Naturdag',
          text: 'fågelsträck och marina djur gör sundet till en upplevelse i sig.'
        },
        {
          title: 'Bolonia-dag',
          text: 'kombinera strand, sanddyner och romerska Baelo Claudia.'
        }
      ]
    },
    sections: [
      {
        id: 'beaches',
        title: 'Olika stränder passar olika dagar',
        paragraphs: [
          'Playa Chica, Los Lances, Valdevaqueros och Bolonia ger inte samma sorts strandupplevelse.',
          'Därför är frågan inte vilken strand som generellt är bäst, utan:',
          'Vilken sorts dag vid havet vill ni ha idag?'
        ],
        cta: {
          label: 'Upptäck Tarifas stränder',
          token: 'tarifa_beaches_authority'
        }
      },
      {
        id: 'wind',
        title: 'Vinden är en del av Tarifa',
        paragraphs: [
          'Levante och Poniente påverkar vardagen vid kusten. För kitesurfare är det en stor del av anledningen att resa hit. För andra innebär vinden framför allt att det är klokt att vara flexibel.',
          'AMARA-gäster som vill kitesurfa eller prova för första gången kan vi sätta i direkt kontakt med våra vänner på Tarifa Surf Club redan före resan. Lektioner eller utrustning kan ordnas i förväg, och utrustningen kan förberedas så att den finns vid boendet när ni kommer.'
        ],
        cta: {
          label: 'Vind & kitesurfing i Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'Gamla stan hör ihop med kvällen',
        paragraphs: [
          'Gamla stan är mer än ett stopp mellan två stranddagar.',
          'Gå dit senare på dagen, stanna på middag och låt kvällen bli en del av själva Tarifa-upplevelsen. För par är kontrasten mellan en aktiv dag utomhus och en lugnare kväll i stan en stor del av charmen.'
        ]
      },
      {
        id: 'nature',
        title: 'Gibraltarsundet är också en naturupplevelse',
        paragraphs: [
          'Området kring Tarifa ligger på en viktig passage mellan Europa och Afrika.',
          'Fågelmigration samt valar och delfiner gör naturen här ovanligt intressant även för den som aldrig ställer sig på en surfbräda. Båtturer är säsongs- och väderberoende, så de bör planeras med viss flexibilitet.'
        ]
      },
      {
        id: 'bolonia',
        title: 'Bolonia är värt en egen dag',
        paragraphs: [
          'Bolonia kombinerar Atlantstrand och sanddyner med det romerska Baelo Claudia.',
          'Det gör utflykten till mer än ännu ett strandbesök och passar särskilt bra när ni har flera dagar i området.'
        ]
      },
      {
        id: 'tangier',
        title: 'Tanger är en möjlighet på andra sidan sundet',
        paragraphs: [
          'Närheten till Marocko gör Tarifa ovanligt.',
          'En dagstur till Tanger kan vara ett spännande tillägg till en längre vistelse, men Tarifa behöver inte byggas runt utflykten. Färjetider och inreseregler kan förändras och bör alltid kontrolleras mot aktuella officiella källor.'
        ]
      },
      {
        id: 'stay-length',
        title: 'Ge Tarifa lite tid',
        paragraphs: [
          'Med två eller tre nätter är kust, gamla stan och en större upplevelse en bra kombination.',
          'Med fyra till sju nätter får ni utrymme att byta plan efter förhållandena, prova olika stranddagar och lägga till natur eller Bolonia utan att semestern blir ett schema.'
        ]
      }
    ],
    closing: {
      title: 'Bestäm först hur ni vill uppleva Tarifa.',
      lead: 'Välj sedan var ni vill bo.',
      ctaLabel: 'Var ska man bo i Tarifa?',
      token: 'location_tarifa'
    }
  }
} satisfies Record<AmaraLanguage, TarifaExperiencePageCopy>;
