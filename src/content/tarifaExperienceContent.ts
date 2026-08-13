import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export const TARIFA_EXPERIENCE_TOKEN = 'tarifa_experience_hub' as const;

export type TarifaExperienceLinkToken =
  | 'location_tarifa'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_food_evening_life'
  | 'tarifa_nature_wildlife'
  | 'tarifa_old_town_history'
  | 'tarifa_bolonia_baelo_claudia';

export interface TarifaExperienceDayType {
  title: string;
  text: string;
}

export type TarifaExperienceWorldId =
  | 'beaches-coast'
  | 'wind-watersports'
  | 'food-evening-life'
  | 'nature-wildlife'
  | 'old-town-history'
  | 'bolonia-baelo-claudia';

export interface TarifaExperienceDiscoveryWorld {
  id: TarifaExperienceWorldId;
  label: string;
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
  discovery: {
    title: string;
    intro: string;
    worlds: TarifaExperienceDiscoveryWorld[];
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
        'Tarifa is famous for wind and kitesurfing, but that is only one way to experience it. Stay for a few days and you can move between Atlantic beaches, a historic Strait town, nature and wildlife, food shaped by the coast, and completely different days around Bolonia or across the water in Tangier.',
        'The key is not trying to do everything. Tarifa works best when you choose the kind of day that fits the conditions — and what you actually feel like doing.'
      ],
      imageAlt: 'Whale artwork and writing desk at AMARA Family & Surf in Tarifa'
    },
    discovery: {
      title: 'Six ways into Tarifa',
      intro:
        'Move from coast and wind to food, nature and history, with Bolonia adding a day where landscape and archaeology belong together.',
      worlds: [
        { id: 'beaches-coast', label: 'Beaches & Coast' },
        { id: 'wind-watersports', label: 'Wind & watersports' },
        { id: 'food-evening-life', label: 'Food & evening life' },
        { id: 'nature-wildlife', label: 'Nature & wildlife' },
        { id: 'old-town-history', label: 'Old Town & history' },
        { id: 'bolonia-baelo-claudia', label: 'Bolonia & Baelo Claudia' }
      ]
    },
    dayChooser: {
      title: 'Choose your Tarifa day',
      intro: [
        'Some days are for the beach. Some are for getting on the water. Others are better spent walking the Old Town, watching wildlife or heading farther along the coast.',
        `That flexibility is part of Tarifa's appeal, especially if you are staying for more than a weekend.`
      ],
      days: [
        {
          title: 'Coast day',
          text: 'Swim close to town, watch the kites farther along the Atlantic coast or let a wider landscape set the pace.'
        },
        {
          title: 'Wind & water day',
          text: 'Get onto the water if that is why you came. If it is not, let the conditions point you towards another Tarifa world.'
        },
        {
          title: 'Town & table day',
          text: 'Follow the old walls and streets, pause for lunch, then stay for dinner and the town’s evening rhythm.'
        },
        {
          title: 'Strait nature day',
          text: 'Walk towards a viewpoint, follow the migration landscape or keep a marine-wildlife excursion flexible around conditions.'
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
          `Levante and Poniente are part of Tarifa's identity. For kitesurfers and windsurfers, changing conditions are one of the main reasons to come. For everyone else, wind simply changes which kind of day feels most attractive.`,
          'Watersports are one major Tarifa world, not the whole destination. If kitesurfing is part of your stay, AMARA guests can be connected with our friends at Tarifa Surf Club before arrival to arrange lessons or equipment.'
        ],
        cta: {
          label: 'Explore wind & kitesurfing in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'A historic Strait town, from day into evening',
        paragraphs: [
          `Tarifa's position at the Strait shaped the historic town and its defensive character. The walls and close-grained streets give a walk here a clear relationship to the sea and the passage between continents.`,
          'Enter through Puerta de Jerez and make the 10th-century Castillo de Guzmán el Bueno an anchor for the day. These are not isolated monuments: together they make the Old Town feel like a place formed by its geography.',
          'The same streets then settle into a different rhythm around cafés, lunch and dinner. History gives the day its context; staying into the evening keeps the Old Town part of lived Tarifa rather than a sightseeing stop.'
        ],
        cta: { label: 'Explore the Old Town & its history', token: 'tarifa_old_town_history' }
      },
      {
        id: 'nature',
        title: 'The Strait is a landscape, not only a crossing',
        paragraphs: [
          'Parque Natural del Estrecho protects a maritime-terrestrial landscape around Tarifa where Atlantic and Mediterranean, Europe and Africa, meet. Looking towards the Strait reveals a larger geography than the beach alone.',
          'Walks and viewpoints offer perspectives towards Africa, while the Strait is an important migration corridor for birds moving between the two continents. A nature-led day can therefore stay on land and still feel distinctly Tarifa.',
          'Marine-wildlife excursions, including whale and dolphin watching, are another possibility from Tarifa. Conditions and sightings cannot be fixed in advance, so this is one experience worth keeping flexible.'
        ],
        cta: { label: 'Explore nature & wildlife', token: 'tarifa_nature_wildlife' }
      },
      {
        id: 'bolonia',
        title: 'Bolonia is worth a day of its own',
        paragraphs: [
          'Bolonia should not simply be filed under “another beach”. Its open coast sits beside the protected Duna de Bolonia and the archaeological complex of Baelo Claudia.',
          `Baelo's Roman urban structure remains especially legible, while its fish-salting and garum production show how closely the settlement's economy was tied to the coast.`,
          'Beach, dune landscape and Roman archaeology therefore make one coherent signature day — especially when you have enough time to let each part of the setting register.'
        ],
        cta: { label: 'Plan a Bolonia & Baelo Claudia day', token: 'tarifa_bolonia_baelo_claudia' }
      },
      {
        id: 'food',
        title: 'Taste the coast through Almadraba and atún rojo',
        paragraphs: [
          `Eating in Tarifa can carry the coastal story into lunch and the evening. Atlantic seafood is part of that context, with atún rojo — Atlantic bluefin tuna — holding a particular place in the town's fishing and culinary identity.`,
          'Almadraba is the long-established Cádiz-coast tradition of using a fixed net system to intercept migratory tuna, and Tarifa belongs to that tradition. It gives useful context to why red tuna appears so often in the food culture here.',
          'The point is not to assume that every tuna dish has the same origin. It is to recognise the relationship between coast, fishing and table, then make a considered lunch or dinner part of the Tarifa day.'
        ],
        cta: { label: 'Explore food & evening life', token: 'tarifa_food_evening_life' }
      },
      {
        id: 'tangier',
        title: 'Tangier as an optional day across the Strait',
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
          'With four to seven nights, Tarifa becomes much more interesting: you can choose different beaches, respond to the wind rather than fight it, add nature, Bolonia or a food-led town day and still leave space for an evening with no itinerary at all.',
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
        'Tarifa ist für Wind und Kitesurfen bekannt. Aber darauf lässt sich der Ort nicht reduzieren. Wenn ihr mehrere Tage bleibt, könnt ihr zwischen Atlantikstränden, einer historischen Stadt an der Meerenge, Natur, Küstenküche und ganz unterschiedlichen Ausflügen wechseln.',
        'Ihr müsst dabei nicht jeden Tag schon vorher festlegen. Gerade in Tarifa gehört es zum Aufenthalt, morgens zu schauen, worauf ihr Lust habt und welche Bedingungen dazu passen.'
      ],
      imageAlt: 'Walbild und Schreibtisch bei AMARA Family & Surf in Tarifa'
    },
    discovery: {
      title: 'Sechs Seiten von Tarifa',
      intro:
        'Von Küste und Wind über Essen, Natur und Geschichte bis zu einem Bolonia-Tag, an dem Landschaft und Archäologie zusammengehören.',
      worlds: [
        { id: 'beaches-coast', label: 'Strände & Küste' },
        { id: 'wind-watersports', label: 'Wind & Wassersport' },
        { id: 'food-evening-life', label: 'Essen & Ausgehen' },
        { id: 'nature-wildlife', label: 'Natur & Tierwelt' },
        { id: 'old-town-history', label: 'Altstadt & Geschichte' },
        { id: 'bolonia-baelo-claudia', label: 'Bolonia & Baelo Claudia' }
      ]
    },
    dayChooser: {
      title: 'Wählt euren Tarifa-Tag',
      intro: [],
      days: [
        {
          title: 'Ein Küstentag.',
          text: 'Nah am Ort baden, den Kitern am Atlantik zuschauen oder einer weiten Küstenlandschaft den Takt überlassen.'
        },
        {
          title: 'Ein Wind- und Wassertag.',
          text: 'Geht aufs Wasser, wenn ihr dafür gekommen seid. Wenn nicht, weisen die Bedingungen den Weg zu einer anderen Seite Tarifas.'
        },
        {
          title: 'Ein Altstadt- und Genusstag.',
          text: 'Folgt Mauern und Gassen, legt eine Pause zum Mittagessen ein und bleibt für den Rhythmus des Abends.'
        },
        {
          title: 'Ein Naturtag an der Meerenge.',
          text: 'Geht zu einem Aussichtspunkt, erlebt die Zugvogelroute oder haltet eine Tour zur Beobachtung von Meerestieren bewusst flexibel.'
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
          'Levante und Poniente prägen Tarifa. Für Kitesurfer und Windsurfer sind die wechselnden Bedingungen ein großer Teil der Faszination. Für alle anderen verändert der Wind vor allem, welche Art von Tag gerade attraktiv ist.',
          'Wassersport ist eine wichtige Seite Tarifas, aber nicht die ganze Destination. Wenn Kitesurfen zu eurem Urlaub gehört, können wir AMARA-Gäste vor der Anreise mit unseren Freunden vom Tarifa Surf Club verbinden, um Unterricht oder Material zu organisieren.'
        ],
        cta: {
          label: 'Wind & Kitesurfen in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'Historische Stadt an der Meerenge — vom Tag bis in den Abend',
        paragraphs: [
          'Tarifas Lage an der Meerenge hat die historische Stadt und ihren wehrhaften Charakter geprägt. Mauern und enge Gassen machen beim Rundgang spürbar, wie eng Stadt, Meer und die Passage zwischen den Kontinenten zusammengehören.',
          'Durch die Puerta de Jerez gelangt ihr in den ummauerten Stadtkern; das Castillo de Guzmán el Bueno aus dem 10. Jahrhundert gibt dem Tag einen klaren Orientierungspunkt. Gemeinsam lassen diese Orte die Geografie hinter der Geschichte sichtbar werden.',
          'Später finden dieselben Gassen rund um Cafés, Mittag- und Abendessen einen anderen Rhythmus. Die Geschichte gibt dem Tag seinen Rahmen; wer bis zum Abend bleibt, erlebt die Altstadt als Teil des heutigen Tarifa.'
        ],
        cta: { label: 'Altstadt & Geschichte entdecken', token: 'tarifa_old_town_history' }
      },
      {
        id: 'nature',
        title: 'Die Meerenge ist eine Landschaft, nicht nur eine Passage',
        paragraphs: [
          'Der Parque Natural del Estrecho schützt rund um Tarifa eine Landschaft an Land und im Meer, in der Atlantik und Mittelmeer sowie Europa und Afrika aufeinandertreffen. Der Blick zur Meerenge öffnet deshalb eine größere Perspektive als der Strand allein.',
          'Wege und Aussichtspunkte geben den Blick Richtung Afrika frei; zugleich ist die Meerenge ein wichtiger Zugkorridor für Vögel zwischen den Kontinenten. Ein Naturtag kann also vollständig an Land stattfinden und trotzdem unverkennbar nach Tarifa gehören.',
          'Auch Ausfahrten zur Beobachtung von Walen und Delfinen sind von Tarifa aus möglich. Bedingungen und Sichtungen lassen sich nicht fest einplanen, deshalb lohnt es sich, diese Erfahrung flexibel zu halten.'
        ],
        cta: { label: 'Natur & Tierwelt entdecken', token: 'tarifa_nature_wildlife' }
      },
      {
        id: 'bolonia',
        title: 'Bolonia ist mehr als ein weiterer Strand',
        paragraphs: [
          'An der offenen Küste von Bolonia liegen der geschützte Naturraum der Duna de Bolonia und der archäologische Komplex Baelo Claudia unmittelbar beieinander.',
          'In Baelo ist die Struktur einer römischen Stadt besonders gut ablesbar. Fischsalzung und die Herstellung von Garum zeigen zudem, wie eng ihre Wirtschaft mit der Küste verbunden war.',
          'Strand, Düne und römische Archäologie ergeben so einen stimmigen, für Tarifa typischen Tagesausflug — besonders, wenn ihr keinem Teil der Landschaft Eile aufzwingt.'
        ],
        cta: { label: 'Bolonia & Baelo Claudia planen', token: 'tarifa_bolonia_baelo_claudia' }
      },
      {
        id: 'food',
        title: 'Die Küste schmecken: Almadraba und atún rojo',
        paragraphs: [
          'Beim Essen setzt sich die Geschichte der Küste bis zum Mittag und in den Abend fort. Atlantischer Fisch und Meeresfrüchte gehören dazu; atún rojo, der Atlantische Blauflossen-Thunfisch, hat in Tarifas Fischerei- und Esskultur einen besonderen Platz.',
          'Almadraba bezeichnet die lange Tradition an der Küste von Cádiz, wandernde Thunfische mit einem fest installierten Netzsystem zu fangen. Tarifa gehört zu dieser Tradition — und damit wird verständlich, warum roter Thunfisch in der lokalen Esskultur so präsent ist.',
          'Das bedeutet nicht, dass jedes Thunfischgericht denselben Ursprung hat. Entscheidend ist die Verbindung von Küste, Fischerei und Tisch: Ein bewusst gewähltes Mittag- oder Abendessen kann deshalb selbst Teil des Tarifa-Tages sein.'
        ],
        cta: { label: 'Essen & Ausgehen entdecken', token: 'tarifa_food_evening_life' }
      },
      {
        id: 'tangier',
        title: 'Tanger als möglicher Tag jenseits der Meerenge',
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
          'Bei vier bis sieben Nächten wird Tarifa deutlich entspannter. Dann könnt ihr den Wind mitdenken statt gegen ihn zu planen, unterschiedliche Küstentage ausprobieren, Natur, Bolonia oder einen Altstadt- und Genusstag einbauen und trotzdem Zeit freihalten.'
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
        'Tarifa es conocida por el viento y el kitesurf, pero quedarse aquí varios días permite descubrir mucho más. Hay costa atlántica, una ciudad histórica marcada por el Estrecho, naturaleza, cocina ligada al mar y excursiones que combinan paisaje e historia.',
        'No hace falta convertir las vacaciones en una lista de cosas que tachar. Tarifa funciona mejor cuando dejáis un poco de margen para decidir cada día.'
      ],
      imageAlt: 'Ilustración de una ballena y escritorio de AMARA Family & Surf en Tarifa'
    },
    discovery: {
      title: 'Seis maneras de vivir Tarifa',
      intro:
        'De la costa y el viento a la gastronomía, la naturaleza y la historia, con un día en Bolonia que une paisaje y arqueología.',
      worlds: [
        { id: 'beaches-coast', label: 'Playas y costa' },
        { id: 'wind-watersports', label: 'Viento y deportes acuáticos' },
        { id: 'food-evening-life', label: 'Gastronomía y vida nocturna' },
        { id: 'nature-wildlife', label: 'Naturaleza y fauna' },
        { id: 'old-town-history', label: 'Casco antiguo e historia' },
        { id: 'bolonia-baelo-claudia', label: 'Bolonia y Baelo Claudia' }
      ]
    },
    dayChooser: {
      title: 'Un Tarifa distinto para cada día',
      intro: [],
      days: [
        {
          title: 'Día de costa',
          text: 'baño cerca del pueblo, cometas sobre el Atlántico o un paisaje abierto que marque el ritmo.'
        },
        {
          title: 'Día de viento y agua',
          text: 'salid al agua si habéis venido para ello; si no, dejad que las condiciones os lleven hacia otro mundo de Tarifa.'
        },
        {
          title: 'Día de casco antiguo y buena mesa',
          text: 'seguid las murallas y las calles, parad a comer y quedaos para el ritmo de la noche.'
        },
        {
          title: 'Día de naturaleza en el Estrecho',
          text: 'caminad hasta un mirador, seguid el paisaje migratorio o mantened flexible una salida para observar fauna marina.'
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
          'Levante y Poniente forman parte de Tarifa. Para quienes practican kitesurf o windsurf, las condiciones cambiantes son parte de la razón para venir. Para los demás, el viento simplemente cambia qué tipo de día resulta más atractivo.',
          'Los deportes acuáticos son uno de los grandes mundos de Tarifa, no el destino entero. Si el kitesurf forma parte de vuestra estancia, podemos poner a los huéspedes de AMARA en contacto con nuestros amigos de Tarifa Surf Club antes de llegar para organizar clases o material.'
        ],
        cta: {
          label: 'Viento y kitesurf en Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'Una ciudad histórica del Estrecho, del día a la noche',
        paragraphs: [
          'La posición de Tarifa junto al Estrecho marcó la ciudad histórica y su carácter defensivo. Sus murallas y calles recogidas muestran durante el paseo la relación entre la ciudad, el mar y el paso entre continentes.',
          'Entrad por la Puerta de Jerez y tomad como referencia el Castillo de Guzmán el Bueno, una fortaleza del siglo X. No son monumentos aislados: juntos muestran una ciudad formada por su geografía.',
          'Después, esas mismas calles encuentran otro ritmo alrededor de los cafés, el almuerzo y la cena. La historia da contexto al día; quedarse hasta la noche mantiene el casco antiguo dentro de la vida actual de Tarifa.'
        ],
        cta: { label: 'Descubrir el casco antiguo y su historia', token: 'tarifa_old_town_history' }
      },
      {
        id: 'nature',
        title: 'El Estrecho es un paisaje, no solo un paso',
        paragraphs: [
          'El Parque Natural del Estrecho protege alrededor de Tarifa un paisaje marítimo y terrestre donde se encuentran Atlántico y Mediterráneo, Europa y África. Mirar hacia el Estrecho amplía el horizonte mucho más allá de la playa.',
          'Los paseos y miradores abren perspectivas hacia África, mientras el Estrecho funciona como un importante corredor migratorio para las aves entre ambos continentes. Un día de naturaleza puede transcurrir en tierra y seguir siendo inconfundiblemente tarifeño.',
          'Las salidas desde Tarifa para observar ballenas y delfines son otra posibilidad. Las condiciones y los avistamientos no pueden fijarse de antemano, así que conviene mantener flexible esta experiencia.'
        ],
        cta: { label: 'Descubrir la naturaleza y la fauna', token: 'tarifa_nature_wildlife' }
      },
      {
        id: 'bolonia',
        title: 'Bolonia merece tiempo',
        paragraphs: [
          'La costa abierta de Bolonia comparte escenario con el Monumento Natural Duna de Bolonia y el conjunto arqueológico de Baelo Claudia.',
          'La estructura urbana romana de Baelo se conserva de forma especialmente legible. La salazón de pescado y la producción de garum muestran, además, hasta qué punto su economía estaba unida a la costa.',
          'Playa, duna y arqueología romana forman así una jornada completa y coherente, sobre todo si disponéis de tiempo para que cada parte del paisaje tenga su momento.'
        ],
        cta: { label: 'Preparar un día en Bolonia y Baelo Claudia', token: 'tarifa_bolonia_baelo_claudia' }
      },
      {
        id: 'food',
        title: 'Saborear la costa: almadraba y atún rojo',
        paragraphs: [
          'Comer en Tarifa puede prolongar la historia de la costa hasta el almuerzo y la noche. Los pescados y mariscos atlánticos forman parte del contexto, y el atún rojo ocupa un lugar especial en la cultura pesquera y gastronómica local.',
          'La almadraba es la tradición histórica de la costa gaditana que utiliza un sistema fijo de redes para interceptar el paso migratorio del atún. Tarifa forma parte de esa tradición, que explica la presencia del atún rojo en su cultura culinaria.',
          'Eso no significa que todos los platos de atún tengan el mismo origen. Se trata de reconocer la relación entre costa, pesca y mesa, y de hacer que un almuerzo o una cena elegidos con atención formen parte del día en Tarifa.'
        ],
        cta: { label: 'Descubrir la gastronomía y las noches de Tarifa', token: 'tarifa_food_evening_life' }
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
          'Con cuatro a siete noches podéis dejar más espacio a las condiciones, alternar días de costa, descubrir naturaleza, Bolonia o un día de casco antiguo y buena mesa, y seguir teniendo noches sin agenda.'
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
        'Tarifa staat bekend om wind en kitesurfen, maar een verblijf van een paar dagen laat een veel bredere bestemming zien. Wissel de Atlantische kust af met een historische stad aan de Straat, natuur, eten uit de zee en uitstappen waarin landschap en geschiedenis samenkomen.',
        'Juist hier hoeft niet iedere vakantiedag vooraf vast te staan.'
      ],
      imageAlt: 'Walviskunst en schrijftafel bij AMARA Family & Surf in Tarifa'
    },
    discovery: {
      title: 'Zes kanten van Tarifa',
      intro:
        'Van kust en wind tot eten, natuur en geschiedenis, met een dag in Bolonia waar landschap en archeologie samenkomen.',
      worlds: [
        { id: 'beaches-coast', label: 'Stranden & kust' },
        { id: 'wind-watersports', label: 'Wind & watersport' },
        { id: 'food-evening-life', label: 'Eten & uitgaan' },
        { id: 'nature-wildlife', label: 'Natuur & dieren' },
        { id: 'old-town-history', label: 'Oude stad & geschiedenis' },
        { id: 'bolonia-baelo-claudia', label: 'Bolonia & Baelo Claudia' }
      ]
    },
    dayChooser: {
      title: 'Kies je Tarifa-dag',
      intro: [],
      days: [
        {
          title: 'Kustdag',
          text: 'zwemmen dicht bij de stad, de kites langs de Atlantische kust bekijken of het open landschap het tempo laten bepalen.'
        },
        {
          title: 'Wind- en waterdag',
          text: 'ga het water op als je daarvoor bent gekomen; laat je anders door de omstandigheden naar een andere kant van Tarifa leiden.'
        },
        {
          title: 'Stad- en tafeldag',
          text: 'volg de oude muren en straten, pauzeer voor de lunch en blijf voor het ritme van de avond.'
        },
        {
          title: 'Natuurdag aan de Straat',
          text: 'wandel naar een uitzichtpunt, volg het landschap van de vogeltrek of houd een excursie op zee bewust flexibel.'
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
          'Levante en Poniente bepalen voor een deel wat er op het water gebeurt. Voor kite- en windsurfers zijn de veranderende omstandigheden juist de aantrekkingskracht. Voor anderen verandert de wind vooral welk soort dag op dat moment aantrekkelijk is.',
          'Watersport is een belangrijke wereld van Tarifa, maar niet de hele bestemming. Als kitesurfen bij jullie verblijf hoort, kunnen we AMARA-gasten vóór aankomst in contact brengen met onze vrienden van Tarifa Surf Club om lessen of materiaal te regelen.'
        ],
        cta: {
          label: 'Wind & kitesurfen in Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'Een historische stad aan de Straat, van dag tot avond',
        paragraphs: [
          'Tarifa’s ligging aan de Straat heeft de historische stad en haar verdedigende karakter gevormd. De muren en compacte straten laten tijdens een wandeling de relatie tussen de stad, de zee en de doorgang tussen continenten zien.',
          'Ga via de Puerta de Jerez de ommuurde kern binnen en gebruik het 10e-eeuwse Castillo de Guzmán el Bueno als herkenningspunt. Het zijn geen losse monumenten: samen maken ze zichtbaar hoe de geografie de stad heeft gevormd.',
          'Later vinden dezelfde straten een ander ritme rond cafés, lunch en diner. De geschiedenis geeft de dag context; door tot de avond te blijven, beleef je de oude stad als onderdeel van het huidige Tarifa.'
        ],
        cta: { label: 'Ontdek de oude stad & haar geschiedenis', token: 'tarifa_old_town_history' }
      },
      {
        id: 'nature',
        title: 'De Straat is een landschap, niet alleen een oversteek',
        paragraphs: [
          'Parque Natural del Estrecho beschermt rond Tarifa een landschap op land en in zee waar Atlantische Oceaan en Middellandse Zee, Europa en Afrika samenkomen. Wie naar de Straat kijkt, ziet een grotere geografie dan alleen het strand.',
          'Wandelingen en uitzichtpunten openen perspectieven richting Afrika, terwijl de Straat een belangrijke trekroute is voor vogels tussen beide continenten. Een natuurdag kan dus volledig op land blijven en toch onmiskenbaar bij Tarifa horen.',
          'Excursies om walvissen en dolfijnen te observeren zijn een andere mogelijkheid vanuit Tarifa. Omstandigheden en waarnemingen staan nooit vooraf vast, dus houd deze ervaring flexibel.'
        ],
        cta: { label: 'Ontdek natuur & dieren', token: 'tarifa_nature_wildlife' }
      },
      {
        id: 'bolonia',
        title: 'Maak van Bolonia een complete dag',
        paragraphs: [
          'De open kust van Bolonia deelt haar omgeving met het beschermde natuurmonument Duna de Bolonia en het archeologische complex Baelo Claudia.',
          'In Baelo is de structuur van een Romeinse stad bijzonder goed leesbaar. Viszouterijen en de productie van garum laten bovendien zien hoe nauw de economie met de kust verbonden was.',
          'Strand, duinlandschap en Romeinse archeologie vormen zo één samenhangende dag, vooral wanneer jullie ieder deel van de omgeving genoeg tijd geven.'
        ],
        cta: { label: 'Plan Bolonia & Baelo Claudia', token: 'tarifa_bolonia_baelo_claudia' }
      },
      {
        id: 'food',
        title: 'Proef de kust: almadraba en atún rojo',
        paragraphs: [
          'Eten in Tarifa kan het verhaal van de kust meenemen naar de lunch en de avond. Atlantische vis en zeevruchten horen bij die context; atún rojo, de Atlantische blauwvintonijn, heeft een bijzondere plaats in de lokale visserij- en eetcultuur.',
          'Almadraba is de lang bestaande traditie langs de kust van Cádiz waarbij een vast netwerk van netten migrerende tonijn onderschept. Tarifa maakt deel uit van die traditie, die verklaart waarom rode tonijn zo zichtbaar is in de eetcultuur.',
          'Dat betekent niet dat ieder tonijngerecht dezelfde herkomst heeft. Het gaat om de relatie tussen kust, visserij en tafel: een bewust gekozen lunch of diner kan daardoor zelf onderdeel worden van de Tarifa-dag.'
        ],
        cta: { label: 'Ontdek eten & uitgaan', token: 'tarifa_food_evening_life' }
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
          'Met vier tot zeven nachten ontstaat ruimte om van plan te veranderen, verschillende kustdagen te proberen en natuur, Bolonia of een stad- en tafeldag toe te voegen zonder dat de reis een checklist wordt.'
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
        'Tarifa är känt för vind och kitesurfing, men några dagar här visar en mycket bredare destination. Växla mellan Atlantkusten, en historisk stad vid sundet, natur, mat präglad av havet och utflykter där landskap och historia möts.',
        'Det fina med Tarifa är att varje dag inte måste planeras i förväg.'
      ],
      imageAlt: 'Valkonst och skrivbord på AMARA Family & Surf i Tarifa'
    },
    discovery: {
      title: 'Sex sidor av Tarifa',
      intro:
        'Från kust och vind till mat, natur och historia, med en dag i Bolonia där landskap och arkeologi hör samman.',
      worlds: [
        { id: 'beaches-coast', label: 'Stränder & kust' },
        { id: 'wind-watersports', label: 'Vind & vattensport' },
        { id: 'food-evening-life', label: 'Mat & kvällsliv' },
        { id: 'nature-wildlife', label: 'Natur & djurliv' },
        { id: 'old-town-history', label: 'Gamla stan & historia' },
        { id: 'bolonia-baelo-claudia', label: 'Bolonia & Baelo Claudia' }
      ]
    },
    dayChooser: {
      title: 'Välj er Tarifa-dag',
      intro: [],
      days: [
        {
          title: 'Kustdag',
          text: 'bada nära stan, se drakarna längs Atlantkusten eller låt det öppna landskapet bestämma tempot.'
        },
        {
          title: 'Vind- och vattendag',
          text: 'ge er ut på vattnet om det är därför ni kom; låt annars förhållandena leda vidare till en annan sida av Tarifa.'
        },
        {
          title: 'Gamla stan och mat',
          text: 'följ murar och gränder, pausa för lunch och stanna kvar när kvällen hittar sin rytm.'
        },
        {
          title: 'Naturdag vid sundet',
          text: 'gå till en utsiktsplats, följ flyttfåglarnas landskap eller håll en tur för att se havsdjur flexibel.'
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
          'Levante och Poniente påverkar vardagen vid kusten. För kite- och vindsurfare är de skiftande förhållandena en stor del av anledningen att resa hit. För andra förändrar vinden framför allt vilken sorts dag som känns mest lockande.',
          'Vattensport är en viktig del av Tarifa, men inte hela destinationen. Om kitesurfing ingår i er vistelse kan vi sätta AMARA-gäster i kontakt med våra vänner på Tarifa Surf Club före resan för att ordna lektioner eller utrustning.'
        ],
        cta: {
          label: 'Vind & kitesurfing i Tarifa',
          token: 'tarifa_wind_kitesurfing_authority'
        }
      },
      {
        id: 'old-town',
        title: 'En historisk stad vid sundet, från dag till kväll',
        paragraphs: [
          'Tarifas läge vid sundet har präglat den historiska staden och dess försvarskaraktär. Murarna och de täta gränderna visar sambandet mellan staden, havet och passagen mellan kontinenterna.',
          'Gå in i den muromgärdade stadskärnan genom Puerta de Jerez och använd Castillo de Guzmán el Bueno från 900-talet som riktmärke. Det är inte fristående monument; tillsammans visar de hur geografin har format staden.',
          'Senare hittar samma gränder en annan rytm kring kaféer, lunch och middag. Historien ger dagen sitt sammanhang, medan kvällen gör gamla stan till en del av dagens Tarifa.'
        ],
        cta: { label: 'Upptäck Gamla stan & historien', token: 'tarifa_old_town_history' }
      },
      {
        id: 'nature',
        title: 'Sundet är ett landskap, inte bara en överfart',
        paragraphs: [
          'Parque Natural del Estrecho skyddar ett landskap på land och i havet runt Tarifa, där Atlanten och Medelhavet, Europa och Afrika möts. Blicken mot sundet öppnar en större geografi än stranden ensam.',
          'Vandringar och utsiktsplatser ger perspektiv mot Afrika, samtidigt som sundet är en viktig flyttkorridor för fåglar mellan kontinenterna. En naturdag kan därför stanna helt på land och ändå kännas tydligt förankrad i Tarifa.',
          'Turer för att observera valar och delfiner är en annan möjlighet från Tarifa. Förhållanden och observationer kan aldrig bestämmas i förväg, så den upplevelsen mår bra av flexibilitet.'
        ],
        cta: { label: 'Upptäck natur & djurliv', token: 'tarifa_nature_wildlife' }
      },
      {
        id: 'bolonia',
        title: 'Bolonia är värt en egen dag',
        paragraphs: [
          'Bolonias öppna kust delar sin miljö med det skyddade naturmonumentet Duna de Bolonia och det arkeologiska området Baelo Claudia.',
          'I Baelo är strukturen i en romersk stad särskilt lätt att avläsa. Fisksaltning och tillverkning av garum visar dessutom hur nära ekonomin var knuten till kusten.',
          'Strand, dynlandskap och romersk arkeologi bildar därmed en sammanhållen dag, särskilt när ni ger varje del av platsen tillräckligt med tid.'
        ],
        cta: { label: 'Planera Bolonia & Baelo Claudia', token: 'tarifa_bolonia_baelo_claudia' }
      },
      {
        id: 'food',
        title: 'Smaka på kusten: almadraba och atún rojo',
        paragraphs: [
          'Maten i Tarifa kan föra kustens berättelse vidare in i lunchen och kvällen. Fisk och skaldjur från Atlanten hör till sammanhanget; atún rojo, den atlantiska blåfenade tonfisken, har en särskild plats i den lokala fiske- och matkulturen.',
          'Almadraba är den långa traditionen längs Cádizkusten där ett fast nätssystem fångar upp vandrande tonfisk. Tarifa ingår i den traditionen, som hjälper till att förklara varför röd tonfisk är så synlig i matkulturen.',
          'Det betyder inte att varje tonfiskrätt har samma ursprung. Poängen är sambandet mellan kust, fiske och bord: en omsorgsfullt vald lunch eller middag kan därför bli en del av själva Tarifa-dagen.'
        ],
        cta: { label: 'Upptäck mat & kvällsliv', token: 'tarifa_food_evening_life' }
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
          'Med fyra till sju nätter får ni utrymme att byta plan efter förhållandena, prova olika kustdagar och lägga till natur, Bolonia eller en dag med gamla stan och mat utan att semestern blir ett schema.'
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
