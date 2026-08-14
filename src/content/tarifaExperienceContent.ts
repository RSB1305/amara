import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export const TARIFA_EXPERIENCE_TOKEN = 'tarifa_experience_hub' as const;

export type TarifaExperienceLinkToken =
  | 'location_tarifa'
  | 'casa'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_food_evening_life'
  | 'tarifa_nature_wildlife'
  | 'tarifa_old_town_history'
  | 'tarifa_bolonia_baelo_claudia';

export interface TarifaExperienceDayType {
  title: string;
  text: string;
  /** Routes to the spoke that owns this topic, so the hub links instead of retelling. */
  token?: TarifaExperienceLinkToken;
  linkLabel?: string;
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
    token: TarifaExperienceLinkToken;
    /** Secondary route back into the location guide. */
    secondaryLabel?: string;
    secondaryToken?: TarifaExperienceLinkToken;
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
      title: 'Which day suits today?',
      intro: [
        'In a strong Levante only Valdevaqueros really works — that is where the rescue boats are and where everything is set up for it. The small, family-friendly Playa Chica is not a good choice then. In a Poniente, or when the air is still, it is the other way round.',
        'So you do not plan Tarifa in advance. You look outside in the morning and decide then. Six kinds of day to choose from:'
      ],
      days: [
        {
          title: 'A coast day.',
          text: 'Swim close to town or watch the kites farther west. Which beach works today depends on the wind.',
          token: 'tarifa_beaches_authority',
          linkLabel: 'Tarifa’s beaches'
        },
        {
          title: 'A wind and water day.',
          text: 'Onto the water if that is why you came. Beginners too — through our friends at Tarifa Surf Club, which we arrange before you arrive.',
          token: 'tarifa_wind_kitesurfing_authority',
          linkLabel: 'Wind & kitesurfing'
        },
        {
          title: 'An Old Town day.',
          text: 'Through the Puerta de Jerez into the walled core, the Castillo as your anchor, and the Strait behind you the whole way.',
          token: 'tarifa_old_town_history',
          linkLabel: 'Old Town & history'
        },
        {
          title: 'An evening and table day.',
          text: 'Red tuna from the Almadraba tradition, then Calle Batalla del Salado and the Old Town streets.',
          token: 'tarifa_food_evening_life',
          linkLabel: 'Food & evening life'
        },
        {
          title: 'A Strait nature day.',
          text: 'Viewpoints looking across to Africa, the bird migration corridor, or a whale and dolphin trip — that one stays deliberately flexible.',
          token: 'tarifa_nature_wildlife',
          linkLabel: 'Nature & wildlife'
        },
        {
          title: 'A Bolonia day.',
          text: 'Open coast, protected dune and the Roman town of Baelo Claudia — that is a whole day, not a stopover.',
          token: 'tarifa_bolonia_baelo_claudia',
          linkLabel: 'Bolonia & Baelo Claudia'
        }
      ]
    },
    sections: [
      {
        id: 'our-day',
        title: 'What a Tarifa day looks like for us',
        paragraphs: [
          'A very good breakfast first — an açaí bowl at Café SURLA or Powerhouse. Then we wait for the wind to arrive in the afternoon.',
          'Out of season we walk the five minutes from our door to Playa Los Lances and kite there. In high season we take the car to Valdevaqueros, ten minutes on the N-340. Then into town for the evening.',
          'And this is the part that is hard to put into words: Tarifa has a feel of its own. You sit in a bar in the evening and a kitesurfing world champion is sitting next to you. In summer it is still warm, the narrow streets are warmly lit, and you understand why people come back every year.'
        ]
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
        title: 'Two nights is a different thing from two weeks',
        paragraphs: [
          'With two or three nights we would not even try to fit everything in. Coast, Old Town and one signature experience are enough.',
          'From four to seven nights Tarifa gets easier: you plan with the wind instead of against it. If a day is too windy for the beach, you go into the Old Town or out to Bolonia — and the windy day becomes a kite day rather than a lost one.',
          'What we like best is fourteen nights. Not because Tarifa has that much to see, but because that is when you stop planning days.'
        ]
      }
    ],
    closing: {
      title: 'For us, Tarifa is the most beautiful place on this planet.',
      lead: 'Once you know which days you want to spend here, all that is missing is where you wake up.',
      ctaLabel: 'View AMARA Family & Surf',
      token: 'casa',
      secondaryLabel: 'Where to stay in Tarifa',
      secondaryToken: 'location_tarifa'
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
      title: 'Welcher Tag passt heute?',
      intro: [
        'Bei starkem Levante funktioniert praktisch nur Valdevaqueros – dort sind die Rettungsboote, dort ist alles darauf eingestellt. Die kleine, familienfreundliche Playa Chica ist dann keine gute Wahl. Bei Poniente oder ruhiger Luft dreht sich das um.',
        'Deshalb plant man Tarifa nicht auf Vorrat durch. Man schaut morgens nach draußen und entscheidet dann. Sechs Tagesformen, aus denen ihr wählen könnt:'
      ],
      days: [
        {
          title: 'Ein Küstentag.',
          text: 'Nah am Ort baden oder weiter westlich den Kitern zuschauen. Welcher Strand heute passt, hängt vom Wind ab.',
          token: 'tarifa_beaches_authority',
          linkLabel: 'Tarifas Strände'
        },
        {
          title: 'Ein Wind- und Wassertag.',
          text: 'Aufs Wasser, wenn ihr dafür gekommen seid. Anfänger ebenso – über unsere Freunde vom Tarifa Surf Club, mit denen wir das vor eurer Anreise organisieren.',
          token: 'tarifa_wind_kitesurfing_authority',
          linkLabel: 'Wind & Kitesurfen'
        },
        {
          title: 'Ein Altstadttag.',
          text: 'Durch die Puerta de Jerez in den ummauerten Kern, das Castillo als Ankerpunkt, und die Meerenge ist dabei immer im Rücken.',
          token: 'tarifa_old_town_history',
          linkLabel: 'Altstadt & Geschichte'
        },
        {
          title: 'Ein Abend- und Esstag.',
          text: 'Roter Thunfisch aus der Almadraba-Tradition, später die Calle Batalla del Salado und die Gassen der Altstadt.',
          token: 'tarifa_food_evening_life',
          linkLabel: 'Essen & Ausgehen'
        },
        {
          title: 'Ein Naturtag an der Meerenge.',
          text: 'Aussichtspunkte mit Blick nach Afrika, der Zugvogelkorridor, oder eine Ausfahrt zu Walen und Delfinen – die bleibt bewusst flexibel.',
          token: 'tarifa_nature_wildlife',
          linkLabel: 'Natur & Tierwelt'
        },
        {
          title: 'Ein Bolonia-Tag.',
          text: 'Offene Küste, geschützte Düne und die römische Stadt Baelo Claudia – das ist ein ganzer Tag, kein Zwischenstopp.',
          token: 'tarifa_bolonia_baelo_claudia',
          linkLabel: 'Bolonia & Baelo Claudia'
        }
      ]
    },
    sections: [
      {
        id: 'our-day',
        title: 'So sieht bei uns ein Tarifa-Tag aus',
        paragraphs: [
          'Morgens ein sehr gutes Frühstück – eine Açaí-Bowl im Café SURLA oder im Powerhouse. Dann warten wir ab, bis der Wind am Nachmittag kommt.',
          'In der Nebensaison laufen wir von der Haustür die fünf Minuten zur Playa Los Lances und gehen dort kiten. In der Hauptsaison nehmen wir das Auto nach Valdevaqueros, zehn Minuten über die N-340. Abends dann in die Stadt.',
          'Und das ist der Teil, der schwer zu beschreiben ist: Tarifa hat einen eigenen Vibe. Man sitzt abends in einer Bar, und neben einem sitzt ein Weltmeister im Kitesurfen. Im Sommer ist es dann noch warm, die Gassen sind warm beleuchtet, und man versteht, warum Leute jedes Jahr wiederkommen.'
        ]
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
        title: 'Zwei Nächte sind etwas anderes als zwei Wochen',
        paragraphs: [
          'Bei zwei oder drei Nächten würden wir gar nicht erst versuchen, alles unterzubringen. Küste, Altstadt und ein besonderes Erlebnis reichen.',
          'Ab vier bis sieben Nächten wird Tarifa entspannter: Dann plant ihr mit dem Wind statt gegen ihn. Ist ein Tag zu windig für den Strand, geht ihr in die Altstadt oder nach Bolonia – und der Windtag wird zum Kitetag statt zum verlorenen Tag.',
          'Am liebsten sind uns vierzehn Tage. Nicht weil Tarifa so viel zu sehen hätte, sondern weil man erst dann aufhört, Tage zu planen.'
        ]
      }
    ],
    closing: {
      title: 'Tarifa ist für uns der schönste Ort auf diesem Planeten.',
      lead: 'Wenn ihr wisst, welche Tage ihr hier verbringen wollt, fehlt nur noch der Ort, an dem ihr aufwacht.',
      ctaLabel: 'AMARA Family & Surf ansehen',
      token: 'casa',
      secondaryLabel: 'Wo in Tarifa übernachten?',
      secondaryToken: 'location_tarifa'
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
      title: '¿Qué día encaja hoy?',
      intro: [
        'Con levante fuerte solo funciona de verdad Valdevaqueros: allí están las lanchas de rescate y todo está preparado para ello. La pequeña Playa Chica, ideal para familias, no es entonces buena elección. Con poniente o con el aire en calma ocurre al revés.',
        'Por eso Tarifa no se planifica de antemano. Se mira fuera por la mañana y se decide entonces. Seis tipos de día entre los que elegir:'
      ],
      days: [
        {
          title: 'Un día de costa.',
          text: 'Bañarse cerca del pueblo o ver las cometas más al oeste. Qué playa funciona hoy depende del viento.',
          token: 'tarifa_beaches_authority',
          linkLabel: 'Las playas de Tarifa'
        },
        {
          title: 'Un día de viento y agua.',
          text: 'Al agua, si habéis venido para eso. También quienes empiezan, con nuestros amigos del Tarifa Surf Club, que organizamos antes de vuestra llegada.',
          token: 'tarifa_wind_kitesurfing_authority',
          linkLabel: 'Viento y kitesurf'
        },
        {
          title: 'Un día de casco antiguo.',
          text: 'Por la Puerta de Jerez al recinto amurallado, el Castillo como referencia, y el Estrecho siempre a la espalda.',
          token: 'tarifa_old_town_history',
          linkLabel: 'Casco antiguo e historia'
        },
        {
          title: 'Un día de mesa y noche.',
          text: 'Atún rojo de la tradición almadrabera y, después, la Calle Batalla del Salado y las calles del casco antiguo.',
          token: 'tarifa_food_evening_life',
          linkLabel: 'Comer y salir'
        },
        {
          title: 'Un día de naturaleza en el Estrecho.',
          text: 'Miradores hacia África, el corredor migratorio de aves o una salida para ver ballenas y delfines: esa conviene dejarla flexible.',
          token: 'tarifa_nature_wildlife',
          linkLabel: 'Naturaleza y fauna'
        },
        {
          title: 'Un día de Bolonia.',
          text: 'Costa abierta, duna protegida y la ciudad romana de Baelo Claudia: eso es un día entero, no una parada.',
          token: 'tarifa_bolonia_baelo_claudia',
          linkLabel: 'Bolonia y Baelo Claudia'
        }
      ]
    },
    sections: [
      {
        id: 'our-day',
        title: 'Así es un día en Tarifa para nosotros',
        paragraphs: [
          'Primero un desayuno muy bueno: un bol de açaí en el Café SURLA o en Powerhouse. Luego esperamos a que el viento llegue por la tarde.',
          'En temporada baja bajamos andando los cinco minutos desde nuestra puerta hasta la Playa Los Lances y hacemos kite allí. En temporada alta cogemos el coche hasta Valdevaqueros, diez minutos por la N-340. Y por la noche, al pueblo.',
          'Y esta es la parte difícil de explicar: Tarifa tiene un ambiente propio. Estás por la noche en un bar y a tu lado se sienta un campeón del mundo de kitesurf. En verano todavía hace calor, las calles están cálidamente iluminadas, y entiendes por qué hay gente que vuelve cada año.'
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
        title: 'Dos noches no son lo mismo que dos semanas',
        paragraphs: [
          'Con dos o tres noches ni siquiera intentaríamos encajarlo todo. Costa, casco antiguo y una experiencia principal bastan.',
          'A partir de cuatro o siete noches Tarifa se vuelve más fácil: planificáis con el viento y no contra él. Si un día sopla demasiado para la playa, os vais al casco antiguo o a Bolonia, y el día de viento se convierte en día de kite en lugar de un día perdido.',
          'Lo que más nos gusta son catorce noches. No porque Tarifa tenga tanto que ver, sino porque es entonces cuando se deja de planificar días.'
        ]
      }
    ],
    closing: {
      title: 'Para nosotros, Tarifa es el lugar más bonito de este planeta.',
      lead: 'Cuando sabéis qué días queréis pasar aquí, solo falta el lugar donde despertar.',
      ctaLabel: 'Ver AMARA Family & Surf',
      token: 'casa',
      secondaryLabel: 'Dónde alojarse en Tarifa',
      secondaryToken: 'location_tarifa'
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
      title: 'Welke dag past vandaag?',
      intro: [
        'Bij sterke levante werkt praktisch alleen Valdevaqueros — daar liggen de reddingsboten en daar is alles erop ingericht. Het kleine, gezinsvriendelijke Playa Chica is dan geen goede keuze. Bij poniente of bij stille lucht is het andersom.',
        'Daarom plan je Tarifa niet vooruit. Je kijkt ’s ochtends naar buiten en beslist dan. Zes soorten dagen om uit te kiezen:'
      ],
      days: [
        {
          title: 'Een kustdag.',
          text: 'Zwemmen dicht bij het dorp of verderop naar het westen de kites bekijken. Welk strand vandaag werkt, hangt van de wind af.',
          token: 'tarifa_beaches_authority',
          linkLabel: 'De stranden van Tarifa'
        },
        {
          title: 'Een wind- en waterdag.',
          text: 'Het water op, als je daarvoor bent gekomen. Beginners ook — via onze vrienden van Tarifa Surf Club, wat we vóór jullie aankomst regelen.',
          token: 'tarifa_wind_kitesurfing_authority',
          linkLabel: 'Wind & kitesurfen'
        },
        {
          title: 'Een oude-stadsdag.',
          text: 'Door de Puerta de Jerez de ommuurde kern in, het Castillo als ankerpunt, en de Straat de hele tijd in je rug.',
          token: 'tarifa_old_town_history',
          linkLabel: 'Oude stad & geschiedenis'
        },
        {
          title: 'Een avond- en tafeldag.',
          text: 'Rode tonijn uit de almadraba-traditie, later de Calle Batalla del Salado en de straatjes van de oude stad.',
          token: 'tarifa_food_evening_life',
          linkLabel: 'Eten & uitgaan'
        },
        {
          title: 'Een natuurdag aan de Straat.',
          text: 'Uitzichtpunten richting Afrika, de vogeltrekcorridor, of een tocht naar walvissen en dolfijnen — die houden we bewust flexibel.',
          token: 'tarifa_nature_wildlife',
          linkLabel: 'Natuur & dierenwereld'
        },
        {
          title: 'Een Bolonia-dag.',
          text: 'Open kust, beschermd duin en de Romeinse stad Baelo Claudia — dat is een hele dag, geen tussenstop.',
          token: 'tarifa_bolonia_baelo_claudia',
          linkLabel: 'Bolonia & Baelo Claudia'
        }
      ]
    },
    sections: [
      {
        id: 'our-day',
        title: 'Zo ziet een dag in Tarifa er bij ons uit',
        paragraphs: [
          'Eerst een heel goed ontbijt — een açaí-bowl bij Café SURLA of Powerhouse. Daarna wachten we tot de wind in de middag opkomt.',
          'In het laagseizoen lopen we de vijf minuten van onze deur naar Playa Los Lances en kitesurfen daar. In het hoogseizoen nemen we de auto naar Valdevaqueros, tien minuten over de N-340. ’s Avonds de stad in.',
          'En dan het deel dat lastig te beschrijven is: Tarifa heeft een eigen sfeer. Je zit ’s avonds in een bar en naast je zit een wereldkampioen kitesurfen. In de zomer is het dan nog warm, de straatjes zijn warm verlicht, en je begrijpt waarom mensen elk jaar terugkomen.'
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
        title: 'Twee nachten is iets anders dan twee weken',
        paragraphs: [
          'Met twee of drie nachten zouden we niet eens proberen alles erin te proppen. Kust, oude stad en één bijzondere ervaring zijn genoeg.',
          'Vanaf vier tot zeven nachten wordt Tarifa makkelijker: dan plan je mét de wind in plaats van ertegen. Is een dag te winderig voor het strand, dan ga je de oude stad in of naar Bolonia — en de winderige dag wordt een kitedag in plaats van een verloren dag.',
          'Het liefst zien we veertien nachten. Niet omdat Tarifa zoveel te zien heeft, maar omdat je dan ophoudt met dagen plannen.'
        ]
      }
    ],
    closing: {
      title: 'Voor ons is Tarifa de mooiste plek op deze planeet.',
      lead: 'Als jullie weten welke dagen jullie hier willen doorbrengen, ontbreekt alleen nog de plek waar jullie wakker worden.',
      ctaLabel: 'Bekijk AMARA Family & Surf',
      token: 'casa',
      secondaryLabel: 'Waar overnachten in Tarifa?',
      secondaryToken: 'location_tarifa'
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
        id: 'our-day',
        title: 'Så ser en dag i Tarifa ut för oss',
        paragraphs: [
          'Först en riktigt bra frukost — en açaí-bowl på Café SURLA eller Powerhouse. Sedan väntar vi på att vinden ska komma på eftermiddagen.',
          'Under lågsäsong går vi de fem minuterna från dörren ner till Playa Los Lances och kitar där. Under högsäsong tar vi bilen till Valdevaqueros, tio minuter på N-340. På kvällen in till stan.',
          'Och här kommer det som är svårt att sätta ord på: Tarifa har en egen känsla. Man sitter på en bar om kvällen och bredvid sitter en världsmästare i kitesurfing. På sommaren är det fortfarande varmt, gränderna är varmt upplysta, och man förstår varför folk kommer tillbaka år efter år.'
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
        title: 'Två nätter är något annat än två veckor',
        paragraphs: [
          'Med två eller tre nätter skulle vi inte ens försöka få med allt. Kust, gamla stan och en större upplevelse räcker.',
          'Från fyra till sju nätter blir Tarifa enklare: då planerar ni med vinden i stället för mot den. Är en dag för blåsig för stranden går ni in i gamla stan eller ut till Bolonia — och blåsdagen blir en kitedag i stället för en förlorad dag.',
          'Helst ser vi fjorton nätter. Inte för att Tarifa har så mycket att se, utan för att det är då man slutar planera dagar.'
        ]
      }
    ],
    closing: {
      title: 'För oss är Tarifa den vackraste platsen på den här planeten.',
      lead: 'När ni vet vilka dagar ni vill tillbringa här återstår bara platsen där ni vaknar.',
      ctaLabel: 'Visa AMARA Family & Surf',
      token: 'casa',
      secondaryLabel: 'Var ska man bo i Tarifa?',
      secondaryToken: 'location_tarifa'
    }
  }
} satisfies Record<AmaraLanguage, TarifaExperiencePageCopy>;
