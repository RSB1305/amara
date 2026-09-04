import type { LocalizedText } from '../types/content';
export type { LocalizedText };
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaGuideId = 'overview' | 'wind' | 'beaches';

export interface TarifaGuideCard {
  kicker: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
}

export interface TarifaGuideSection {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  /** Prose sections carry paragraphs; card sections carry cards. A section has one or the other. */
  paragraphs?: LocalizedText[];
  cards?: TarifaGuideCard[];
}

export interface TarifaGuideSource {
  label: LocalizedText;
  href: string;
}

export interface TarifaPartnershipService {
  id: 'kite-school' | 'kitecamp' | 'rental' | 'shop';
  eyebrow: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
  href: string;
}

export interface TarifaKitePartnership {
  eyebrow: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  personalNote: LocalizedText;
  imageAlt: LocalizedText;
  imageCaption: LocalizedText;
  servicesTitle: LocalizedText;
  services: TarifaPartnershipService[];
  contactText: LocalizedText;
  contactLabel: LocalizedText;
  contactMessage: LocalizedText;
  partnerLabel: LocalizedText;
}

export interface TarifaLocationLink {
  label: string;
  token:
    | 'tarifa'
    | 'tarifa_experience_hub'
    | 'tarifa_beaches_authority'
    | 'tarifa_wind_kitesurfing_authority';
}

export interface TarifaLocationCard {
  title: string;
  paragraphs: string[];
  fit?: string;
}

export interface TarifaLocationTextSection {
  id: string;
  title: string;
  paragraphs: string[];
  links?: TarifaLocationLink[];
}

export interface TarifaLocationAuthorityCopy {
  hero: {
    eyebrow: string;
    title: string;
    lead: string[];
    editorialNote: string;
    updated: string;
  };
  microLocations: {
    title: string;
    items: TarifaLocationCard[];
    clarification: string;
    link: TarifaLocationLink;
  };
  car: TarifaLocationTextSection;
  wind: TarifaLocationTextSection;
  seasons: TarifaLocationTextSection;
  stayFits: {
    title: string;
    items: TarifaLocationCard[];
  };
  dailyLife: TarifaLocationTextSection;
  tradeoffs: {
    title: string;
    intro?: string;
    items: string[];
    closing?: string[];
  };
  amara: {
    title: string;
    paragraphs: string[];
    facts: string[];
    imageAlt: string;
  };
  closing: {
    title: string;
    primary: TarifaLocationLink;
    secondary: TarifaLocationLink;
  };
}

interface TarifaGuideBase {
  token: LinkToken;
  seo: AmaraAuthoringSeo;
  navLabel: LocalizedText;
  breadcrumbLabel: LocalizedText;
}

export interface TarifaLocationGuideContent extends TarifaGuideBase {
  id: 'overview';
  location: Record<AmaraLanguage, TarifaLocationAuthorityCopy>;
}

export interface TarifaTopicGuideContent extends TarifaGuideBase {
  id: Exclude<TarifaGuideId, 'overview'>;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle?: LocalizedText;
    lead: LocalizedText;
    /** Optional pull line rendered after the lead. */
    accent?: LocalizedText;
    editorialNote: LocalizedText;
    updated: LocalizedText;
  };
  facts: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
  partnership?: TarifaKitePartnership;
  sections: TarifaGuideSection[];
  notice: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
  };
  faq: Array<{
    question: LocalizedText;
    answer: LocalizedText;
  }>;
  sources: TarifaGuideSource[];
  related: TarifaGuideId[];
}

export type TarifaGuideContent = TarifaLocationGuideContent | TarifaTopicGuideContent;

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

const article = {
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

const buildSeo = (
  version: string,
  pageType: AmaraAuthoringSeo['pageType'],
  titles: LocalizedText,
  descriptions: LocalizedText,
  articleMetadata = article
): AmaraAuthoringSeo => ({
  version,
  pageType,
  entityKey: 'amara-brand',
  article: articleMetadata,
  languages: {
    en: { title: titles.en, description: descriptions.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: titles.de, description: descriptions.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: titles.es, description: descriptions.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: titles.nl, description: descriptions.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: titles.sv, description: descriptions.sv, robots: 'index, follow', canonical: 'auto' }
  }
});

const sharedEditorialNote = l(
  'An independent AMARA orientation guide for planning your stay — not a live conditions service.',
  'Ein unabhängiger AMARA-Guide zur Reiseplanung – kein Live-Dienst für aktuelle Bedingungen.',
  'Una guía independiente de AMARA para planificar la estancia; no es un servicio de condiciones en directo.',
  'Een onafhankelijke AMARA-gids voor jullie reisplanning — geen live informatiedienst.',
  'En oberoende AMARA-guide för reseplanering – inte en tjänst för liveförhållanden.'
);

const sharedUpdated = l(
  'Reviewed August 2026',
  'Geprüft im August 2026',
  'Revisado en agosto de 2026',
  'Gecontroleerd in augustus 2026',
  'Granskad i augusti 2026'
);

const officialBeachSource: TarifaGuideSource = {
  label: l(
    'Tarifa Tourism: beaches',
    'Tourismus Tarifa: Strände',
    'Turismo de Tarifa: playas',
    'Toerisme Tarifa: stranden',
    'Tarifas turistbyrå: stränder'
  ),
  href: 'https://turismodetarifa.com/en/beaches/'
};

const beachPlanSource: TarifaGuideSource = {
  label: l(
    'Tarifa Town Council: Beach Use Plan 2024–2027',
    'Stadt Tarifa: Strandnutzungsplan 2024–2027',
    'Ayuntamiento de Tarifa: Plan de Playas 2024–2027',
    'Gemeente Tarifa: strandplan 2024–2027',
    'Tarifas kommun: strandplan 2024–2027'
  ),
  href: 'https://www.aytotarifa.com/notices/plan-de-explotacion-de-playas-2024-2027/'
};

const officialKiteSource: TarifaGuideSource = {
  label: l(
    'Tarifa Tourism: kitesurfing',
    'Tourismus Tarifa: Kitesurfen',
    'Turismo de Tarifa: kitesurf',
    'Toerisme Tarifa: kitesurfen',
    'Tarifas turistbyrå: kitesurfing'
  ),
  href: 'https://turismodetarifa.com/que-hacer/kitesurf/'
};

const gkaYouthWorldsSource: TarifaGuideSource = {
  label: l(
    'GKA Kite World Tour: Youth Kite World Championships Tarifa 2026',
    'GKA Kite World Tour: Jugend-Weltmeisterschaft in Tarifa 2026',
    'GKA Kite World Tour: Mundial juvenil de kite en Tarifa 2026',
    'GKA Kite World Tour: jeugd-WK kitesurfen Tarifa 2026',
    'GKA Kite World Tour: junior-VM i kite, Tarifa 2026'
  ),
  href: 'https://www.gkakiteworldtour.com/event/gka-youth-kite-world-championships-tarifa-2026/'
};

const tarifaSurfClubSource: TarifaGuideSource = {
  label: l(
    'Tarifa Surf Club: kite school, kitecamps and equipment',
    'Tarifa Surf Club: Kiteschule, Kitecamps und Material',
    'Tarifa Surf Club: escuela, kitecamps y material',
    'Tarifa Surf Club: kiteschool, kitecamps en materiaal',
    'Tarifa Surf Club: kiteskola, kitecamps och utrustning'
  ),
  href: 'https://tarifasurfclub.com/'
};

const overviewTitles = l(
  'Where to Stay in Tarifa: Old Town, Beach or La Marina',
  'Wo in Tarifa übernachten? Altstadt, La Marina oder Strand',
  'Dónde alojarse en Tarifa: casco antiguo, La Marina o playa',
  'Waar overnachten in Tarifa: oude stad, La Marina of strand',
  'Var ska man bo i Tarifa: gamla stan, La Marina eller stranden'
);

const overviewDescriptions = l(
  'Where should you stay in Tarifa? Compare the Old Town, La Marina, Los Lances and countryside for walkability, beaches, parking, wind and everyday life.',
  'Welche Lage passt zu eurem Tarifa-Aufenthalt? Vergleicht Altstadt, La Marina, Los Lances und Umland nach Fußläufigkeit, Strand, Auto, Parken und Alltag.',
  '¿Dónde alojarse en Tarifa? Compara casco antiguo, La Marina, Los Lances y alrededores según playa, coche, aparcamiento, distancias y vida diaria.',
  'Waar kunnen jullie het beste verblijven in Tarifa? Vergelijk oude stad, La Marina, Los Lances en buitengebied op strand, lopen, parkeren, auto en dagelijks gemak.',
  'Var är bäst att bo i Tarifa? Jämför gamla stan, La Marina, Los Lances och landsbygden utifrån strand, gångavstånd, bil, parkering och vardag.'
);

// Annotated with its concrete variant rather than the union, so consumers that need
// the location copy (the A3 where-to-stay route) keep that guarantee.
export const overview: TarifaLocationGuideContent = {
  id: 'overview',
  token: 'location_tarifa',
  seo: buildSeo(
    '2026-08-21-tarifa-location-v4.0',
    'A',
    overviewTitles,
    overviewDescriptions,
    { ...article, dateModified: '2026-08-12' }
  ),
  navLabel: l('Overview', 'Überblick', 'Visión general', 'Overzicht', 'Översikt'),
  breadcrumbLabel: l('Tarifa', 'Tarifa', 'Tarifa', 'Tarifa', 'Tarifa'),
  location: {
    en: {
      hero: {
        eyebrow: 'AMARA location guide',
        title: 'Where to stay in Tarifa',
        lead: [
          'Choose the Old Town if you want restaurants, historic streets and evening life at the door — and can accept trickier parking and livelier nights. La Marina balances town, beach and easier car use. Along Los Lances, the beach and watersports come first while the Old Town becomes less spontaneous. Outside town you gain space and quiet but depend on the car. The best base is simply the one whose trade-off fits your days in Tarifa.'
        ],
        editorialNote: sharedEditorialNote.en,
        updated: sharedUpdated.en
      },
      microLocations: {
        title: 'Where to stay in Tarifa',
        items: [
          {
            title: 'Old Town — for maximum immediacy',
            paragraphs: [
              `Staying inside or directly around the historic centre puts Tarifa's restaurants, cafés, shops and evening life closest to you.`,
              'It is a strong choice if you want to walk almost everywhere and do not expect to use your car several times a day.',
              'The trade-off is equally clear: historic streets were not designed around modern cars. Parking and luggage can require more planning, and streets close to the evening scene may be lively well into the night during busy periods.'
            ],
            fit: 'Old Town keeps couples, first-time visitors and short stays close to town life, with less convenience for the car.'
          },
          {
            title: 'La Marina — for balance',
            paragraphs: [
              '“La Marina” is how the newer part of town is known in practice. Official planning documents call part of it La Marina I; either way it describes the same area west of the centre.',
              'You are still part of town rather than staying in an isolated beach resort, but everyday logistics and car use can be easier than inside the historic centre. That makes this area particularly interesting for guests who want to combine Tarifa on foot with beaches, kitesurfing or excursions by car.',
              'It does not give you the historic Old Town immediately outside your door. In return, it can offer a more balanced relationship between town, coast and mobility.'
            ],
            fit: 'La Marina gives couples, surf-minded travellers and longer stays a flexible, practical base.'
          },
          {
            title: 'Los Lances corridor — for a beach-first stay',
            paragraphs: [
              'Farther along the Atlantic coast, the balance changes again.',
              'The beach becomes the centre of the stay. Depending on the exact location, reaching restaurants, shops and the Old Town becomes less spontaneous and the car becomes more useful.',
              'That can be exactly right if being close to the open coast and watersports matters more than stepping into town every evening.'
            ],
            fit: 'Los Lances brings beach and watersports to the foreground, with more of the day organised around a car.'
          },
          {
            title: 'Countryside — for space and quiet',
            paragraphs: [
              'Fincas and villas outside Tarifa offer a completely different stay.',
              'They can provide privacy, space and landscape, but the price of that freedom is mobility: shopping, dinner, beaches and town usually become car journeys.'
            ],
            fit: 'The countryside trades walkability for the seclusion you came to Tarifa to enjoy.'
          }
        ],
        clarification: 'Valdevaqueros and Punta Paloma belong to this wider beach-and-surf landscape more than to everyday Tarifa town life. Bolonia is better understood as a separate excursion destination rather than another neighbourhood of Tarifa.',
        link: { label: `Explore Tarifa's beaches`, token: 'tarifa_beaches_authority' }
      },
      car: {
        id: 'car-and-parking',
        title: 'Do you need a car in Tarifa?',
        paragraphs: [
          'Not necessarily.',
          'A central stay can work very well without one, particularly if your priority is the Old Town, nearby beaches and everyday life on foot.',
          'A car becomes more valuable when you want to visit different Atlantic beaches, reach Valdevaqueros or Punta Paloma regularly, explore the region or build kitesurfing into several days of the stay.',
          'The more important question is therefore not simply:',
          '“Do you need a car?”',
          'but:',
          '“Will you want to use it every day — and how easy will that be from where you stay?”',
          'That distinction matters particularly in busy periods.'
        ]
      },
      wind: {
        id: 'wind-and-location',
        title: 'How much does the wind matter when choosing where to stay?',
        paragraphs: [
          'Wind is part of Tarifa, but it should not determine every accommodation decision.',
          'Open coastal locations experience the conditions differently from more built-up parts of town, and the value of a terrace or outdoor space can depend on its actual orientation and shelter.',
          'For watersports travellers, another factor matters just as much: how easily can you leave town toward the western kite and surf areas?',
          'Which beach or activity suits a given day is a question for the experience and wind guides. For choosing where to stay, the point is simpler:',
          'wind changes how you use the location, not whether Tarifa works at all.'
        ],
        links: [
          { label: 'Explore what to do in Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Explore wind & kitesurfing', token: 'tarifa_wind_kitesurfing_authority' }
        ]
      },
      seasons: {
        id: 'seasons',
        title: 'Tarifa changes through the year',
        paragraphs: [
          'The geography stays the same. The way you use it does not.',
          'Summer brings the greatest intensity: more visitors, more evening activity and more pressure on roads and parking.',
          'Outside peak summer, town life can feel easier and quieter, while longer stays place more importance on practical questions such as shopping, heating, workspace and how often you want to drive.',
          'There is no universally best season. The better question is which version of Tarifa fits your stay.'
        ]
      },
      stayFits: {
        title: 'Four kinds of stay, four different priorities',
        items: [
          {
            title: 'Couples',
            paragraphs: [
              'If dinner on foot and historic atmosphere are the priority, the Old Town is difficult to beat.',
              'If you want those evenings but also expect to use the car for beaches, nature or day trips, a residential urban base such as La Marina can provide a useful middle ground.'
            ]
          },
          {
            title: 'Surf-minded couples',
            paragraphs: [
              'You do not have to choose between staying in town and making kitesurfing an important part of the trip.',
              'A base that combines walkable Tarifa with uncomplicated car access toward the western beaches can make both parts of the stay work together.'
            ]
          },
          {
            title: 'Couples travelling with young children',
            paragraphs: [
              'Daily logistics become more important: groceries, easy use of the car, flexible beach choice and the possibility of returning home without turning every outing into a complicated journey.',
              'For this type of stay, the most atmospheric location is not automatically the most practical one.'
            ]
          },
          {
            title: 'Longer stays',
            paragraphs: ['For a week or more, ordinary life matters increasingly: shopping, parking, quieter nights, storage, workspace and whether the car remains easy to use.']
          }
        ]
      },
      dailyLife: {
        id: 'daily-life',
        title: 'What everyday life feels like depends on the base',
        paragraphs: [
          'A good location is not only about the distance to a landmark.',
          'Over several nights, smaller questions start to matter:',
          'Can you buy groceries without making a trip of it?',
          'Can you walk to dinner?',
          'Can you leave the car parked when you do not need it?',
          'Can you use it easily when you do?',
          'Is the beach part of your daily routine or something you drive to?',
          'These are often more important than being a few hundred metres closer to one attraction.'
        ]
      },
      tradeoffs: {
        title: 'The trade-offs are real',
        intro: 'There is no Tarifa location that wins every category.',
        items: [
          'Old Town gives you maximum immediacy, but less convenient car logistics and potentially more evening activity.',
          'La Marina and the newer urban areas sacrifice some doorstep historic atmosphere in exchange for a more balanced everyday base.',
          'Los Lances brings the Atlantic and watersports closer, but everyday town life can become less spontaneous.',
          'Countryside gives you space and privacy, but almost everything becomes a drive.'
        ],
        closing: ['Choosing well means deciding which trade-off you actually want.']
      },
      amara: {
        title: 'Why AMARA chose La Marina',
        paragraphs: [
          'AMARA Family & Surf is in Urbanización La Marina.',
          'For our own guests, that gives the location a very practical combination:',
          `That is why we see La Marina not as a compromise between town and coast, but as a particularly flexible base for the kind of Tarifa stay many of our guests want: dinner on foot, beaches and kitesurfing by car when needed, and no daily search for somewhere to park when you return.`
        ],
        facts: [
          'a private underground parking space;',
          'a supermarket directly opposite;',
          'the Old Town can be reached on foot, with the exact route and destination determining the walk;',
          `a position in Tarifa's newer north-western urban fabric, while each westbound driving route depends on current traffic.`
        ],
        imageAlt: 'Living space at AMARA Family & Surf in La Marina, Tarifa'
      },
      closing: {
        title: 'Once you know how you want Tarifa to work for you, choosing where to stay becomes much easier.',
        primary: { label: 'Explore what to do in Tarifa', token: 'tarifa_experience_hub' },
        secondary: { label: 'Discover AMARA Family & Surf', token: 'tarifa' }
      }
    },
    de: {
      hero: {
        eyebrow: 'AMARA Lage-Guide',
        title: 'Wo in Tarifa übernachten?',
        lead: [
          'Wählt die Altstadt, wenn ihr Restaurants, historische Gassen und das Abendleben direkt vor der Tür möchtet – und schwierigeres Parken sowie lebhaftere Nächte in Kauf nehmt. La Marina verbindet Stadt, Strand und eine einfachere Autonutzung. Am Los Lances stehen Strand und Wassersport im Vordergrund, während die Altstadt weniger spontan erreichbar ist. Außerhalb gewinnt ihr Ruhe und Platz, seid aber auf das Auto angewiesen. Am besten passt die Lage, deren Nachteil euch im Urlaub am wenigsten stört.'
        ],
        editorialNote: sharedEditorialNote.de,
        updated: sharedUpdated.de
      },
      microLocations: {
        title: 'Die wichtigsten Lagen zum Übernachten',
        items: [
          {
            title: 'Altstadt — wenn ihr mitten im Geschehen wohnen möchtet',
            paragraphs: ['Im historischen Zentrum liegen Restaurants, Cafés, kleine Geschäfte und das abendliche Tarifa unmittelbar vor der Haustür.', 'Wenn ihr möglichst viel zu Fuß machen und das Auto während des Aufenthalts wenig nutzen möchtet, ist das eine sehr attraktive Variante.', 'Der Nachteil gehört aber zur gleichen Lage: enge historische Straßen und moderner Autoverkehr passen nicht immer gut zusammen. Parken und Gepäck können mehr Planung verlangen. Und je näher ihr am abendlichen Leben wohnt, desto weniger sollte absolute Ruhe selbstverständlich erwartet werden.'],
            fit: 'In der Altstadt erleben Paare, Erstbesucher und Gäste auf kürzeren Reisen Tarifa besonders nah; das Auto bleibt dafür weniger bequem.'
          },
          {
            title: 'La Marina — wenn ihr vieles miteinander verbinden möchtet',
            paragraphs: ['Amtliche Planungsunterlagen verwenden für einen Teil des neueren Stadtgefüges die Bezeichnung La Marina I. Als Guide-Begriff bleibt „La Marina“ eine praktische Orientierung und keine trennscharfe touristische Viertelgrenze.', 'Ihr wohnt weiterhin im Ort und könnt das Stadtleben zu Fuß erreichen, habt aber gleichzeitig andere Voraussetzungen für Fahrten zu Stränden, Kitesurfen oder Ausflügen als in der Altstadt.', 'Die historische Atmosphäre beginnt nicht direkt vor der Haustür. Dafür kann diese Lage im Alltag sehr ausgewogen funktionieren.'],
            fit: 'La Marina bietet Paaren, aktiven Gästen, Kitesurfern und bei längeren Aufenthalten eine flexible Basis.'
          },
          {
            title: 'Los Lances — wenn Strand und Wassersport im Vordergrund stehen',
            paragraphs: ['Weiter entlang der Atlantikküste verschiebt sich der Schwerpunkt.', 'Der Strand wird stärker zum Mittelpunkt des Aufenthalts. Gleichzeitig wird die spontane Verbindung zur Altstadt – je nach genauer Lage – schwächer und das Auto gewinnt an Bedeutung.', 'Wenn ihr hauptsächlich wegen Strand, Wind und Wassersport kommt, kann genau das richtig sein.'],
            fit: 'Am Los-Lances-Korridor stehen Strand und Wassersport im Vordergrund, nicht das unmittelbare Stadtleben.'
          },
          {
            title: 'Umland — wenn Ruhe und Raum wichtiger sind',
            paragraphs: ['Fincas und Häuser außerhalb Tarifas bieten eine andere Art des Aufenthalts.', 'Mehr Raum, Natur und Privatsphäre bedeuten gleichzeitig: Einkaufen, Essen, Strand und Altstadt werden meist zu Autofahrten.'],
            fit: 'Im Umland ist die Abgeschiedenheit Teil des Aufenthalts – nicht nur eine Folge der Lage.'
          }
        ],
        clarification: 'Valdevaqueros und Punta Paloma würden wir eher als spezielle Strand-/Surf-Umfelder betrachten als als normales Tarifa-Stadtleben. Bolonia ist wiederum ein eigenes Ausflugsziel und keine Tarifa-Mikrolage.',
        link: { label: 'Tarifas Strände entdecken', token: 'tarifa_beaches_authority' }
      },
      car: {
        id: 'car-and-parking',
        title: 'Braucht man in Tarifa ein Auto?',
        paragraphs: ['Nicht unbedingt.', 'Wenn ihr zentral wohnt und euch vor allem Altstadt, nahe Strände und ein Alltag zu Fuß interessieren, lässt sich Tarifa sehr gut ohne tägliche Autofahrten erleben.', 'Ein Auto wird wertvoller, sobald unterschiedliche Strände, Valdevaqueros, Punta Paloma, regionale Ausflüge oder regelmäßiges Kitesurfen Teil des Aufenthalts werden.', 'Deshalb ist die wichtigere Frage nicht:', '„Braucht ihr ein Auto?“', 'sondern:', '„Wie häufig wollt ihr es benutzen – und wie unkompliziert funktioniert das von eurer Unterkunft aus?“']
      },
      wind: {
        id: 'wind-and-location',
        title: 'Welche Rolle spielt der Wind für die Lage?',
        paragraphs: ['Wind gehört zu Tarifa.', 'Offene Küstenlagen erleben die Bedingungen anders als dichter bebaute Teile des Ortes. Auch die Nutzbarkeit einer Terrasse oder eines Balkons hängt von der konkreten Ausrichtung und dem tatsächlichen Windschutz ab.', 'Für Kitesurfer kommt ein weiterer Punkt hinzu: Wie unkompliziert kommt man von der Unterkunft Richtung westliche Spots?', 'Welche Strände bei welchen Bedingungen funktionieren, gehört auf unsere Experience- und Kitesurfing-Seiten. Für die Lageentscheidung genügt die Erkenntnis:', 'Der Wind verändert, wie ihr eure Base nutzt – er macht nicht automatisch eine Lage gut oder schlecht.'],
        links: [{ label: 'Tarifa erleben', token: 'tarifa_experience_hub' }, { label: 'Wind & Kitesurfen in Tarifa', token: 'tarifa_wind_kitesurfing_authority' }]
      },
      seasons: {
        id: 'seasons',
        title: 'Tarifa verändert sich mit der Jahreszeit',
        paragraphs: ['Im Sommer wird Tarifa deutlich intensiver.', 'Mehr Menschen, mehr Abendleben und mehr Verkehr machen die genaue Lage und insbesondere die Autonutzung relevanter.', 'Außerhalb der Hochsaison wird es ruhiger. Bei längeren Aufenthalten gewinnen dafür andere Dinge an Bedeutung: Einkauf, Wohnkomfort, Arbeitsplatz, Heizung und die Frage, wie häufig man tatsächlich fahren möchte.', 'Die beste Lage kann deshalb je nach Art des Aufenthalts unterschiedlich sein.']
      },
      stayFits: {
        title: 'Vier Reisearten, vier unterschiedliche Prioritäten',
        items: [
          { title: 'Für Paare', paragraphs: ['Wenn ihr Altstadt, Restaurants und den Abend unmittelbar erleben möchtet, ist das historische Zentrum sehr attraktiv.', 'Wenn ihr dieselben Abende zu Fuß erreichen, tagsüber aber flexibel mit Auto und Strand sein möchtet, wird eine Lage wie La Marina interessanter.'] },
          { title: 'Für Paare, die kiten oder surfen', paragraphs: ['Ihr müsst euch nicht zwingend zwischen Tarifa-Stadt und Surftrip entscheiden.', 'Eine Lage, aus der ihr abends zu Fuß in die Stadt und tagsüber unkompliziert mit dem Auto Richtung westliche Kite-Spots kommt, verbindet beide Teile des Urlaubs.'] },
          { title: 'Für Paare, die inzwischen mit kleineren Kindern reisen', paragraphs: ['Dann verändert sich die Priorität.', 'Einkaufen, Auto, flexible Strandwahl und unkomplizierte Rückwege werden wichtiger. Die atmosphärischste Lage ist dann nicht automatisch die praktischste.'] },
          { title: 'Für längere Aufenthalte', paragraphs: ['Nach einer Woche zählen nicht mehr nur Sehenswürdigkeiten.', 'Alltag, Einkauf, Parken, ruhigere Nächte und einfache Mobilität werden spürbar wichtiger.'] }
        ]
      },
      dailyLife: {
        id: 'daily-life',
        title: 'Alltag ist Teil der Lage',
        paragraphs: ['Nach mehreren Tagen zählen oft ganz andere Dinge als am ersten Urlaubstag:', 'Könnt ihr schnell einkaufen?', 'Könnt ihr abends zu Fuß essen gehen?', 'Kann das Auto stehen bleiben, wenn ihr es nicht braucht?', 'Und könnt ihr es unkompliziert nutzen, wenn ihr weiter an die Küste möchtet?', 'Die richtige Lage macht aus diesen Fragen entweder Alltag – oder tägliche Organisation.']
      },
      tradeoffs: {
        title: 'Jede Lage hat ihren Preis',
        items: ['Altstadt: maximale Unmittelbarkeit, dafür weniger komfortabel mit Auto und nicht überall ruhig.', 'La Marina: weniger historische Atmosphäre unmittelbar vor der Tür, dafür eine ausgeglichene Kombination aus Stadt, Alltag und Mobilität.', 'Los Lances: mehr Strand und Wassersport, dafür weniger spontane Stadtintegration.', 'Umland: Ruhe und Raum, dafür starke Autoabhängigkeit.'],
        closing: ['Es geht deshalb nicht darum, die „beste“ Gegend zu finden.', 'Sondern diejenige, deren Nachteile euch am wenigsten stören und deren Vorteile ihr tatsächlich nutzt.']
      },
      amara: {
        title: 'Warum AMARA in La Marina liegt',
        paragraphs: ['AMARA Family & Surf befindet sich in der Urbanización La Marina.', 'Für uns ist La Marina kein Kompromiss, sondern eine praktische Basis: Ihr geht abends zu Fuß in die Altstadt, fahrt tagsüber zum Strand oder Kitesurfen und habt bei der Rückkehr einen festen Stellplatz.'],
        facts: ['eigener Tiefgaragenstellplatz;', 'Supermarkt direkt gegenüber;', 'die Altstadt ist zu Fuß erreichbar, wobei Zielpunkt und genaue Route den Weg bestimmen;', 'Lage im neueren nordwestlichen Stadtgefüge; die konkrete Fahrt nach Westen hängt von der aktuellen Verkehrsführung ab.'],
        imageAlt: 'Wohnbereich bei AMARA Family & Surf in La Marina, Tarifa'
      },
      closing: {
        title: 'Wenn ihr wisst, wie ihr Tarifa nutzen möchtet, wird die Wahl der richtigen Lage deutlich einfacher.',
        primary: { label: 'Tarifa erleben', token: 'tarifa_experience_hub' },
        secondary: { label: 'AMARA Family & Surf entdecken', token: 'tarifa' }
      }
    },
    es: {
      hero: {
        eyebrow: 'Guía de ubicación AMARA',
        title: 'Dónde alojarse en Tarifa',
        lead: ['Elegid el casco antiguo si queréis restaurantes, calles históricas y ambiente nocturno a la puerta, y no os importa que aparcar sea más difícil. La Marina equilibra ciudad, playa y un uso más cómodo del coche. En Los Lances mandan la playa y los deportes acuáticos, mientras el centro queda menos a mano. Fuera del pueblo ganáis espacio y tranquilidad, pero dependéis del coche. La mejor zona es la que encaja con el ritmo real de vuestros días.'],
        editorialNote: sharedEditorialNote.es,
        updated: sharedUpdated.es
      },
      microLocations: {
        title: 'Las principales zonas para alojarse',
        items: [
          {
            title: 'Casco antiguo — para vivir Tarifa desde dentro',
            paragraphs: ['Aquí están muy cerca restaurantes, cafeterías, tiendas y gran parte de la vida nocturna.', 'Es una opción muy buena si queréis moveros principalmente a pie y utilizar poco el coche.', 'El contrapunto es evidente: las calles históricas no están pensadas para el tráfico moderno. Aparcar y mover equipaje puede requerir más planificación y determinadas calles pueden ser animadas por la noche.'],
            fit: 'En el casco antiguo, parejas, primeras visitas y estancias cortas tienen la vida del centro a un paso, con menos comodidad para el coche.'
          },
          {
            title: 'La Marina — para combinar ciudad, costa y coche',
            paragraphs: ['La documentación urbanística oficial utiliza el nombre La Marina I para una parte del tejido urbano más reciente. Como modelo para visitantes, «La Marina» sigue siendo una orientación práctica, no un barrio turístico con límites exactos.', 'Seguís estando dentro del pueblo y podéis llegar andando al centro, pero la relación con el coche y las salidas hacia las playas difiere de la del casco antiguo.', 'No tenéis la arquitectura histórica nada más salir de casa. A cambio, la zona puede ofrecer un equilibrio muy cómodo para una estancia de varios días.'],
            fit: 'La Marina ofrece una base flexible para parejas, viajeros activos, aficionados al kitesurf y estancias más largas.'
          },
          {
            title: 'Los Lances — para una estancia centrada en playa y agua',
            paragraphs: ['A medida que avanzáis hacia la costa atlántica, cambia la lógica de la estancia.', 'La playa gana protagonismo y, según la ubicación exacta, el casco antiguo deja de formar parte tan espontánea de la vida diaria.', 'El coche se vuelve más útil.'],
            fit: 'En el corredor de Los Lances, la playa y los deportes acuáticos pasan a primer plano, por delante de la vida del centro.'
          },
          {
            title: 'Campo y alrededores — para buscar espacio y tranquilidad',
            paragraphs: ['Las fincas y alojamientos fuera de Tarifa ofrecen privacidad y entorno natural.', 'Pero esa tranquilidad implica desplazamientos en coche para prácticamente todo: compras, restaurantes, playas y centro.']
          }
        ],
        clarification: 'Valdevaqueros y Punta Paloma forman parte de este paisaje de costa y surf más que de la vida urbana de Tarifa. Bolonia, en cambio, es un destino propio para una excursión.',
        link: { label: 'Descubrir las playas de Tarifa', token: 'tarifa_beaches_authority' }
      },
      car: {
        id: 'car-and-parking',
        title: '¿Hace falta coche?',
        paragraphs: ['No necesariamente.', 'Desde una zona urbana podéis disfrutar gran parte de Tarifa andando.', 'El coche empieza a aportar mucho más valor si queréis moveros entre diferentes playas, ir regularmente a Valdevaqueros, descubrir los alrededores o practicar kitesurf varios días.', 'La pregunta más útil es:', '¿cuántas veces vais a querer mover el coche durante la estancia y qué fácil será hacerlo desde vuestro alojamiento?']
      },
      wind: {
        id: 'wind-and-location',
        title: 'El viento también influye en cómo se vive una zona',
        paragraphs: ['Levante y Poniente forman parte de Tarifa.', 'Las zonas abiertas junto a la costa reciben las condiciones de otra manera que las calles urbanas más protegidas. Y cualquier afirmación sobre una terraza o espacio exterior depende siempre de la orientación real del alojamiento.', 'Para quienes practican kitesurf, también importa lo fácil que sea salir hacia las playas del oeste.', 'La elección del mejor spot para cada día pertenece a nuestra guía de experiencias. Aquí la conclusión es más sencilla:', 'el viento cambia cómo utilizáis vuestra base.'],
        links: [{ label: 'Descubrir qué hacer en Tarifa', token: 'tarifa_experience_hub' }, { label: 'Viento y kitesurf en Tarifa', token: 'tarifa_wind_kitesurfing_authority' }]
      },
      seasons: {
        id: 'seasons',
        title: 'Tarifa según la época del año',
        paragraphs: ['En verano aumenta notablemente la intensidad del pueblo: más visitantes, más movimiento nocturno y más presión sobre tráfico y aparcamiento.', 'Fuera de los meses más concurridos, la estancia puede ser más tranquila. En viajes largos empiezan a importar más aspectos cotidianos como las compras, el confort de la vivienda o la necesidad real de conducir.']
      },
      stayFits: {
        title: 'Cuatro formas de viajar, cuatro prioridades distintas',
        items: [
          { title: 'Parejas', paragraphs: ['El casco antiguo funciona especialmente bien si queréis salir y estar directamente dentro de la vida del centro.', 'La Marina puede resultar más interesante si queréis seguir llegando andando a ese ambiente y al mismo tiempo utilizar el coche con facilidad.'] },
          { title: 'Parejas que practican kitesurf o surf', paragraphs: ['No tenéis por qué elegir entre una estancia urbana y unas vacaciones de surf.', 'Una base con acceso sencillo hacia las playas occidentales y el centro a pie puede combinar ambas cosas.'] },
          { title: 'Parejas que ahora viajan con niños pequeños', paragraphs: ['Entonces pesan más cuestiones como compras, coche, flexibilidad para elegir playa y facilidad para volver al alojamiento.'] },
          { title: 'Estancias más largas', paragraphs: ['A partir de varios días, la vida cotidiana importa casi tanto como las atracciones.'] }
        ]
      },
      dailyLife: {
        id: 'daily-life',
        title: 'La vida diaria también define una buena ubicación',
        paragraphs: ['¿Podéis comprar sin coger el coche?', '¿Podéis ir andando a cenar?', '¿Podéis dejar aparcado el coche cuando no lo necesitáis?', '¿Y podéis utilizarlo fácilmente cuando queréis salir hacia otra playa?', 'En una estancia de varios días estas preguntas cuentan mucho.']
      },
      tradeoffs: {
        title: 'Ninguna zona lo ofrece todo',
        items: ['Casco antiguo: máxima proximidad y ambiente, con más fricción para el coche y posible ruido.', 'La Marina: menos carácter histórico inmediato, pero una combinación equilibrada de ciudad, costa y movilidad.', 'Los Lances: prioridad a playa y deporte, con menor espontaneidad para el centro.', 'Alrededores: espacio y tranquilidad a cambio de dependencia del coche.']
      },
      amara: {
        title: 'Por qué AMARA está en La Marina',
        paragraphs: ['AMARA Family & Surf se encuentra en Urbanización La Marina.', 'Para nuestros huéspedes, la ubicación combina varios elementos prácticos:', 'Para nosotros, eso convierte La Marina en una base especialmente flexible para quienes quieren disfrutar Tarifa a pie y seguir teniendo libertad para moverse por la costa.'],
        facts: ['plaza propia en garaje subterráneo;', 'supermercado justo enfrente;', 'el casco antiguo se puede alcanzar a pie, pero el recorrido depende del destino y de la ruta exacta;', 'posición en el tejido urbano más reciente del noroeste; la salida concreta hacia poniente depende del tráfico vigente.'],
        imageAlt: 'Salón de AMARA Family & Surf en La Marina, Tarifa'
      },
      closing: {
        title: 'Cuando sabéis cómo queréis vivir Tarifa, elegir dónde alojaros resulta mucho más fácil.',
        primary: { label: 'Descubrir qué hacer en Tarifa', token: 'tarifa_experience_hub' },
        secondary: { label: 'Conocer AMARA Family & Surf', token: 'tarifa' }
      }
    },
    nl: {
      hero: {
        eyebrow: 'AMARA locatiegids',
        title: 'Waar overnachten in Tarifa?',
        lead: [
          'Kies de oude stad als jullie restaurants, historische straatjes en avondleven voor de deur willen, en lastiger parkeren geen probleem vinden. La Marina combineert stad, strand en makkelijker autogebruik. Langs Los Lances staan strand en watersport voorop en ligt de oude stad minder vanzelfsprekend binnen bereik. Buiten Tarifa krijgen jullie ruimte en rust, maar zijn jullie afhankelijk van de auto. De beste uitvalsbasis is de plek waarvan de afweging bij jullie vakantiedagen past.'
        ],
        editorialNote: sharedEditorialNote.nl,
        updated: sharedUpdated.nl
      },
      microLocations: {
        title: 'De belangrijkste plekken om te verblijven',
        items: [
          {
            title: 'Oude stad — voor maximale levendigheid en gemak te voet',
            paragraphs: [
              'Restaurants, cafés, winkels en het avondleven liggen hier dichtbij.',
              'Wie veel wil lopen en de auto weinig nodig heeft, zit hier sterk.',
              `Daar staat tegenover dat historische straten minder handig zijn voor modern autoverkeer en parkeren. Sommige straten kunnen in drukke periodes ook tot laat levendig blijven.`
            ]
          },
          {
            title: 'La Marina — voor een evenwichtige uitvalsbasis',
            paragraphs: [
              'Officiële plandocumenten gebruiken de naam La Marina I voor een deel van het nieuwere stedelijke weefsel. Als gidsmodel blijft “La Marina” een praktische oriëntatie en geen exact begrensde toeristische wijk.',
              'De oude stad blijft bereikbaar te voet, terwijl de auto gemakkelijker onderdeel kan blijven van het verblijf voor stranden, kitesurfen en uitstapjes.',
              'Jullie hebben niet direct de historische sfeer voor de deur, maar krijgen daar meer flexibiliteit voor terug.'
            ]
          },
          {
            title: 'Los Lances — wanneer strand op één staat',
            paragraphs: [
              'Verder langs de Atlantische kust wordt strand steeds meer het middelpunt.',
              'Afhankelijk van de exacte plek wordt de verbinding met de oude stad minder spontaan en wordt de auto belangrijker.'
            ]
          },
          {
            title: 'Buiten Tarifa — voor ruimte en rust',
            paragraphs: [
              `Finca's en villa's buiten de stad bieden privacy en natuur.`,
              'Daarvoor wordt vrijwel iedere dagelijkse activiteit een autorit.'
            ]
          }
        ],
        clarification: 'Valdevaqueros en Punta Paloma horen eerder bij de bredere surf- en strandwereld dan bij dagelijks stadsleven. Bolonia is een apart uitstapje.',
        link: { label: 'Ontdek de stranden van Tarifa', token: 'tarifa_beaches_authority' }
      },
      car: {
        id: 'car-and-parking',
        title: 'Hebben jullie een auto nodig?',
        paragraphs: [
          'Niet per se.',
          'Vanuit Tarifa zelf kan veel te voet.',
          'Een auto wordt vooral waardevol wanneer verschillende stranden, Valdevaqueros, de regio of regelmatig kitesurfen onderdeel van jullie verblijf zijn.',
          'Daarom is de betere vraag:',
          'hoe vaak willen jullie de auto gebruiken en hoe gemakkelijk is dat vanuit jullie accommodatie?'
        ]
      },
      wind: {
        id: 'wind-and-location',
        title: 'Wat betekent de wind voor jullie verblijfplaats?',
        paragraphs: [
          'Wind hoort bij Tarifa.',
          'Open kustlocaties ervaren de omstandigheden anders dan dichter bebouwde stedelijke zones. De werkelijke bruikbaarheid van terrassen en balkons hangt bovendien af van de specifieke ligging en beschutting.',
          'Voor kitesurfers speelt ook mee hoe gemakkelijk jullie richting de westelijke spots rijden.',
          'De gedetailleerde strandkeuze hoort bij onze Experience-gids. Voor Location is vooral belangrijk dat de wind bepaalt hoe jullie een plek gebruiken.'
        ],
        links: [
          { label: 'Ontdek Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Wind & kitesurfen in Tarifa', token: 'tarifa_wind_kitesurfing_authority' }
        ]
      },
      seasons: {
        id: 'seasons',
        title: 'Tarifa verandert met het seizoen',
        paragraphs: [
          'In de zomer wordt alles intensiever: bezoekers, verkeer, avondleven en parkeerdruk.',
          'Buiten het hoogseizoen wordt het rustiger en gaan bij langere verblijven dagelijkse zaken zwaarder wegen: boodschappen, comfort, werkruimte en mobiliteit.'
        ]
      },
      stayFits: {
        title: 'Vier soorten reizen, vier verschillende prioriteiten',
        items: [
          { title: 'Stellen', paragraphs: ['De oude stad is sterk als restaurants en sfeer vooropstaan.', 'La Marina wordt interessant wanneer jullie hetzelfde stadsleven te voet willen combineren met meer vrijheid voor de auto.'] },
          { title: 'Stellen die kitesurfen of surfen', paragraphs: ['Jullie hoeven stad en sport niet tegenover elkaar te zetten.', 'Een stedelijke base met gemakkelijke toegang richting de westelijke stranden kan beide combineren.'] },
          { title: 'Stellen die met jonge kinderen reizen', paragraphs: ['Boodschappen, auto, verschillende strandopties en praktische terugwegen worden dan belangrijker.'] },
          { title: 'Langere verblijven', paragraphs: ['Hoe langer jullie blijven, hoe belangrijker dagelijkse logistiek wordt.'] }
        ]
      },
      dailyLife: {
        id: 'daily-life',
        title: 'Dagelijks gemak telt',
        paragraphs: ['Kunnen jullie gemakkelijk boodschappen doen?', 'Kunnen jullie lopen naar het avondeten?', 'Kan de auto blijven staan als jullie hem niet nodig hebben?', 'Kunnen jullie hem zonder gedoe gebruiken wanneer jullie verder langs de kust willen?', 'Een goede locatie maakt deze dingen vanzelfsprekend.']
      },
      tradeoffs: {
        title: 'Elke locatie heeft een compromis',
        items: [`Oude stad: maximaal stadsgevoel, minder gemakkelijk met de auto en mogelijk levendiger 's nachts.`, 'La Marina: minder historische sfeer direct voor de deur, maar een sterke balans tussen stad en mobiliteit.', 'Los Lances: meer strand en sport, minder spontaan stadsleven.', 'Buitengebied: ruimte en rust, maar afhankelijk van de auto.']
      },
      amara: {
        title: 'Waarom AMARA in La Marina ligt',
        paragraphs: ['AMARA Family & Surf ligt in Urbanización La Marina.', 'Voor onze gasten betekent dat:', 'Daardoor zien we La Marina als een bijzonder flexibele uitvalsbasis voor gasten die Tarifa te voet willen beleven én vrij willen zijn om met de auto de kust te verkennen.'],
        facts: ['een eigen ondergrondse parkeerplaats;', 'een supermarkt direct aan de overkant;', 'de oude stad is te voet bereikbaar, waarbij bestemming en exacte route de wandeling bepalen;', 'ligging in het nieuwere noordwestelijke stadsweefsel; de concrete route naar het westen hangt af van het actuele verkeer.'],
        imageAlt: 'Woonruimte van AMARA Family & Surf in La Marina, Tarifa'
      },
      closing: {
        title: 'Als jullie weten hoe jullie Tarifa willen gebruiken, wordt kiezen waar jullie verblijven veel eenvoudiger.',
        primary: { label: 'Ontdek Tarifa', token: 'tarifa_experience_hub' },
        secondary: { label: 'Bekijk AMARA Family & Surf', token: 'tarifa' }
      }
    },
    sv: {
      hero: {
        eyebrow: 'AMARA platsguide',
        title: 'Var ska man bo i Tarifa?',
        lead: [
          'Välj gamla stan om ni vill ha restauranger, historiska gränder och kvällsliv utanför dörren och kan acceptera krångligare parkering. La Marina kombinerar stad, strand och enklare bilanvändning. Längs Los Lances står strand och vattensport i centrum, medan gamla stan blir mindre spontan. Utanför Tarifa får ni lugn och utrymme men blir beroende av bilen. Den bästa basen är den vars avvägning passar era semesterdagar.'
        ],
        editorialNote: sharedEditorialNote.sv,
        updated: sharedUpdated.sv
      },
      microLocations: {
        title: 'De viktigaste områdena att bo i',
        items: [
          {
            title: 'Gamla stan — för stadsliv direkt utanför dörren',
            paragraphs: ['Här ligger restauranger, kaféer, butiker och kvällsliv nära.', 'Om ni vill gå till det mesta och använda bilen sällan är det ett starkt alternativ.', 'Nackdelen är att historiska gator inte alltid fungerar smidigt med bil och parkering. Vissa delar kan också vara livliga på kvällarna under högsäsong.']
          },
          {
            title: 'La Marina — för balans',
            paragraphs: ['”La Marina” är namnet på den nyare delen av staden i praktiken. Officiella planeringsdokument kallar en del av den La Marina I – det handlar om samma område väster om centrum.', 'Gamla stan kan fortfarande nås till fots, medan relationen till bil och utfarter mot stränderna skiljer sig från den historiska kärnan.', 'Den historiska miljön börjar inte precis utanför dörren, men vardagen kan bli mer flexibel.']
          },
          {
            title: 'Los Lances — när stranden står i centrum',
            paragraphs: ['Längre ut mot Atlantkusten blir stranden en större del av själva boendet.', 'Beroende på exakt läge blir gamla stan mindre spontan och bilen viktigare.']
          },
          {
            title: 'Landsbygden — för lugn och utrymme',
            paragraphs: ['Boenden utanför Tarifa kan erbjuda mer plats, privatliv och natur.', 'I gengäld kräver nästan allt bil: mat, strand, restauranger och stad.']
          }
        ],
        clarification: 'Valdevaqueros och Punta Paloma hör mer till Tarifas surf- och kustlandskap än till vardagslivet i staden. Bolonia är bäst att se som ett eget utflyktsmål.',
        link: { label: 'Upptäck Tarifas stränder', token: 'tarifa_beaches_authority' }
      },
      car: {
        id: 'car-and-parking',
        title: 'Behöver man bil i Tarifa?',
        paragraphs: ['Inte nödvändigtvis.', 'Från en central urban bas fungerar mycket till fots.', 'Bilen blir framför allt värdefull om ni vill besöka olika stränder, åka ofta till Valdevaqueros, utforska regionen eller kitesurfa flera dagar.', 'Den viktigare frågan är därför:', 'hur ofta vill ni använda bilen och hur enkelt är det från där ni bor?']
      },
      wind: {
        id: 'wind-and-location',
        title: 'Hur påverkar vinden valet av område?',
        paragraphs: ['Vinden är en del av Tarifa.', 'Öppna kustlägen upplever förhållandena annorlunda än tätare bebyggda delar av staden. Hur användbar en terrass eller balkong är beror också på den exakta orienteringen och skyddet.', 'För kitesurfare spelar det dessutom roll hur enkelt det är att köra västerut mot surfstränderna.', 'Dagens strandval hör hemma i upplevelseguiden. För boendet är poängen enklare: vinden påverkar hur ni använder er bas.'],
        links: [
          { label: 'Upplev Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Vind & kitesurfing i Tarifa', token: 'tarifa_wind_kitesurfing_authority' }
        ]
      },
      seasons: {
        id: 'seasons',
        title: 'Tarifa förändras under året',
        paragraphs: ['Sommaren innebär mer folk, mer kvällsliv, mer trafik och större parkeringspress.', 'Utanför högsäsong blir staden lugnare. Under längre vistelser får vardagliga frågor större betydelse: matinköp, bostadskomfort, arbetsplats och hur ofta bilen behövs.']
      },
      stayFits: {
        title: 'Fyra slags resor, fyra olika prioriteringar',
        items: [
          { title: 'Par', paragraphs: ['Gamla stan passar bra när atmosfär, restauranger och kvällar står högst på listan.', 'La Marina blir intressant när ni vill behålla gångavstånd till stan men samtidigt kunna använda bilen enkelt.'] },
          { title: 'Par som kitesurfar eller surfar', paragraphs: ['Ni behöver inte välja mellan stadssemester och surfresa.', 'En urban bas med enkel bilväg mot de västra stränderna kan kombinera båda.'] },
          { title: 'Par som reser med yngre barn', paragraphs: ['Då får matinköp, bil, flexibel strandplanering och enkla vardagsrutiner större betydelse.'] },
          { title: 'Längre vistelser', paragraphs: ['Ju längre ni stannar, desto viktigare blir vardagslogistiken.'] }
        ]
      },
      dailyLife: {
        id: 'daily-life',
        title: 'Vardagen avgör mer än man tror',
        paragraphs: ['Kan ni handla utan att göra en utflykt av det?', 'Kan ni promenera till middagen?', 'Kan bilen stå när ni inte behöver den?', 'Kan ni enkelt använda den när ni vill längre längs kusten?', 'Det är sådant som gör en bra bas bra även efter fem eller sju dagar.']
      },
      tradeoffs: {
        title: 'Alla områden innebär en kompromiss',
        items: ['Gamla stan: maximalt stadsliv, men mindre smidigt med bil och ibland mer kvällsljud.', 'La Marina: mindre historisk miljö direkt utanför dörren, men en bra balans mellan stad och mobilitet.', 'Los Lances: mer strand och sport, mindre spontan stad.', 'Landsbygden: lugn och utrymme, men bilberoende.']
      },
      amara: {
        title: 'Varför AMARA ligger i La Marina',
        paragraphs: ['AMARA Family & Surf ligger i Urbanización La Marina.', 'För våra gäster innebär läget:', 'Därför ser vi La Marina som en särskilt flexibel bas för gäster som vill uppleva Tarifa till fots och samtidigt kunna använda bilen fritt för kust, kitesurfing och utflykter.'],
        facts: ['egen plats i underjordiskt garage;', 'mataffär direkt mittemot;', 'gamla stan kan nås till fots, men målpunkt och exakt väg avgör promenaden;', 'läge i den nyare nordvästra stadsstrukturen; den konkreta vägen västerut beror på aktuell trafik.'],
        imageAlt: 'Vardagsrum på AMARA Family & Surf i La Marina, Tarifa'
      },
      closing: {
        title: 'När ni vet hur ni vill använda Tarifa blir det mycket enklare att välja var ni ska bo.',
        primary: { label: 'Upplev Tarifa', token: 'tarifa_experience_hub' },
        secondary: { label: 'Se AMARA Family & Surf', token: 'tarifa' }
      }
    }
  }
};

const windTitles = l(
  'Kitesurfing in Tarifa: Wind, Spots, Kite School & Stay | AMARA',
  'Kitesurfen in Tarifa: Wind, Spots, Kiteschule & Wohnen | AMARA',
  'Kitesurf en Tarifa: viento, spots, escuela y alojamiento | AMARA',
  'Kitesurfen in Tarifa: wind, spots, kiteschool & verblijf | AMARA',
  'Kitesurfing i Tarifa: vind, spots, kiteskola & boende | AMARA'
);

const windDescriptions = l(
  'Europe’s wind capital: Levante and Poniente, Playa de Los Lances below the terrace, lessons with Tarifa Surf Club and the apartment at AMARA. Separately or together.',
  'Europas Windhauptstadt: Levante und Poniente, die Playa de Los Lances vor der Terrasse, Kurse beim Tarifa Surf Club und die Wohnung bei AMARA. Einzeln oder zusammen.',
  'La capital europea del viento: levante y poniente, la playa de Los Lances bajo la terraza, cursos con Tarifa Surf Club y el apartamento de AMARA. Por separado o juntos.',
  'De windhoofdstad van Europa: levante en poniente, Playa de Los Lances onder het terras, lessen bij Tarifa Surf Club en het appartement van AMARA. Apart of samen.',
  'Europas vindhuvudstad: levante och poniente, Playa de Los Lances nedanför terrassen, kurser hos Tarifa Surf Club och lägenheten hos AMARA. Var för sig eller tillsammans.'
);

const windEditorialNote = l(
  'We live and kite here ourselves. Prices and dates carry their date; official rules and signage on the beach take priority.',
  'Wir wohnen und kiten hier selbst. Preise und Daten mit Stand; amtliche Regeln und Beschilderung vor Ort gehen vor.',
  'Vivimos y navegamos aquí. Precios y fechas con su fecha de revisión; las normas oficiales y la señalización en la playa tienen prioridad.',
  'We wonen en kiten hier zelf. Prijzen en data met datum; officiële regels en borden op het strand gaan voor.',
  'Vi bor och kitar här själva. Priser och datum med datumstämpel; officiella regler och skyltning på stranden gäller först.'
);

const windUpdated = l(
  'Reviewed September 2026',
  'Geprüft im September 2026',
  'Revisado en septiembre de 2026',
  'Gecontroleerd in september 2026',
  'Granskad i september 2026'
);

const wind: TarifaGuideContent = {
  id: 'wind',
  token: 'tarifa_wind_kitesurfing_authority',
  seo: buildSeo(
    '2026-09-04-tarifa-kitesurfing-hub-v4.0',
    'B',
    windTitles,
    windDescriptions,
    { ...article, dateModified: '2026-09-04' }
  ),
  navLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  breadcrumbLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  hero: {
    eyebrow: l('Tarifa, Costa de la Luz', 'Tarifa, Costa de la Luz', 'Tarifa, Costa de la Luz', 'Tarifa, Costa de la Luz', 'Tarifa, Costa de la Luz'),
    title: l(
      'Kitesurfing in Tarifa',
      'Kitesurfen in Tarifa',
      'Kitesurf en Tarifa',
      'Kitesurfen in Tarifa',
      'Kitesurfing i Tarifa'
    ),
    subtitle: l(
      'Europe’s wind capital. Wind almost all year, sand to the horizon, and the old town in the evening.',
      'Europas Windhauptstadt. Wind fast das ganze Jahr, Sand bis zum Horizont, und abends die Altstadt.',
      'La capital europea del viento. Viento casi todo el año, arena hasta el horizonte y, por la noche, el casco antiguo.',
      'De windhoofdstad van Europa. Bijna het hele jaar wind, zand tot aan de horizon, en ’s avonds de oude stad.',
      'Europas vindhuvudstad. Vind nästan hela året, sand ända till horisonten, och gamla stan på kvällen.'
    ),
    lead: l(
      'Tarifa is where the pros live. They train here, the youth world championship is ridden here, and every year beginners from all over the world make their first metres here. If you can kite in Tarifa, you can kite anywhere. People say that here because it is true: **two winds, flat water and waves, all on one beach.**',
      'Tarifa ist der Ort, an dem die Profis wohnen. Hier trainieren sie, hier fährt der Nachwuchs seine Weltmeisterschaft, und hier machen jedes Jahr Anfänger aus aller Welt ihre ersten Meter. Wer in Tarifa kiten kann, kann überall kiten. Das sagt man hier, weil es stimmt: **zwei Winde, flaches Wasser und Welle, alles an einem Strand.**',
      'Tarifa es el sitio donde viven los profesionales. Aquí entrenan, aquí se corre el mundial juvenil y aquí, cada año, principiantes de todo el mundo hacen sus primeros metros. Quien sabe navegar en Tarifa sabe navegar en cualquier parte. Aquí se dice porque es verdad: **dos vientos, agua plana y ola, todo en una misma playa.**',
      'Tarifa is de plek waar de profs wonen. Hier trainen ze, hier wordt het jeugd-WK gereden, en hier maken elk jaar beginners van over de hele wereld hun eerste meters. Wie in Tarifa kan kiten, kan overal kiten. Dat zeggen ze hier omdat het klopt: **twee winden, vlak water en golven, allemaal op één strand.**',
      'Tarifa är platsen där proffsen bor. Här tränar de, här körs junior-VM, och här tar nybörjare från hela världen sina första meter varje år. Den som kan kita i Tarifa kan kita var som helst. Det säger man här för att det stämmer: **två vindar, platt vatten och våg, allt på en och samma strand.**'
    ),
    accent: l(
      'A place for people who want to be on the water.',
      'Ein Ort für Leute, die aufs Wasser wollen.',
      'Un sitio para gente que quiere estar en el agua.',
      'Een plek voor mensen die het water op willen.',
      'En plats för folk som vill ut på vattnet.'
    ),
    editorialNote: windEditorialNote,
    updated: windUpdated
  },
  facts: [
    { label: l('Levante', 'Levante', 'Levante', 'Levante', 'Levante'), value: l('From the east, warm and strong, flat water off Los Lances', 'Aus Osten, warm und kräftig, flaches Wasser vor Los Lances', 'Del este, cálido y fuerte, agua plana frente a Los Lances', 'Uit het oosten, warm en krachtig, vlak water voor Los Lances', 'Från öster, varm och kraftig, platt vatten utanför Los Lances') },
    { label: l('Poniente', 'Poniente', 'Poniente', 'Poniente', 'Poniente'), value: l('From the Atlantic, steadier, with waves', 'Vom Atlantik, gleichmäßiger, mit Welle', 'Del Atlántico, más constante, con ola', 'Van de Atlantische Oceaan, gelijkmatiger, met golven', 'Från Atlanten, jämnare, med våg') },
    { label: l('Playa de Los Lances', 'Playa de Los Lances', 'Playa de Los Lances', 'Playa de Los Lances', 'Playa de Los Lances'), value: l('Below the terrace, on foot in the off-season', 'Vor der Terrasse, in der Nebensaison zu Fuß', 'Bajo la terraza; en temporada baja, a pie', 'Onder het terras, in het laagseizoen te voet', 'Nedanför terrassen, till fots under lågsäsong') }
  ],
  partnership: {
    eyebrow: l('AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club'),
    title: l(
      'One message is enough, the other one knows',
      'Eine Nachricht reicht, der andere weiß Bescheid',
      'Con un mensaje basta; el otro ya lo sabe',
      'Eén bericht is genoeg, de ander weet ervan',
      'Ett meddelande räcker, den andre vet'
    ),
    intro: l(
      'Mark runs Tarifa Surf Club with Simone. **We have known each other for years and see each other almost every day**, which is why the practical things fit together: the gear is in the apartment, we cover the deposit for rental gear with the club, and if you write to Mark, you have reached us too. And the other way round.',
      'Mark führt den Tarifa Surf Club mit Simone. **Wir kennen uns seit Jahren und sehen uns fast täglich**, deshalb passen die praktischen Dinge zusammen: Das Material liegt in der Wohnung, die Kaution fürs Leihmaterial übernehmen wir beim Club, und wer Mark schreibt, hat auch uns erreicht. Und umgekehrt.',
      'Mark dirige Tarifa Surf Club con Simone. **Nos conocemos desde hace años y nos vemos casi a diario**, por eso lo práctico encaja: el material está en el apartamento, la fianza del material de alquiler la cubrimos nosotros con el club y, si escribís a Mark, también nos habéis llegado a nosotros. Y al revés.',
      'Mark leidt Tarifa Surf Club samen met Simone. **We kennen elkaar al jaren en zien elkaar bijna dagelijks**, daarom passen de praktische dingen in elkaar: het materiaal ligt in het appartement, de borg voor huurmateriaal nemen wij bij de club voor onze rekening, en wie Mark schrijft, heeft ook ons bereikt. En andersom.',
      'Mark driver Tarifa Surf Club tillsammans med Simone. **Vi har känt varandra i många år och ses nästan varje dag**, och därför passar det praktiska ihop: utrustningen ligger i lägenheten, depositionen för hyrutrustning står vi för hos klubben, och den som skriver till Mark har nått oss också. Och tvärtom.'
    ),
    personalNote: l(
      'You can book each on its own or both together: the apartment with us, the kiting with the club. Either way, one message is enough.',
      'Ihr könnt beides einzeln buchen oder zusammen: die Wohnung bei uns, das Kiten beim Club. So oder so reicht eine Nachricht.',
      'Podéis reservar cada cosa por separado o las dos juntas: el apartamento con nosotros, el kite con el club. En cualquier caso, con un mensaje basta.',
      'Jullie kunnen allebei apart boeken of samen: het appartement bij ons, het kiten bij de club. Hoe dan ook is één bericht genoeg.',
      'Ni kan boka var sak för sig eller båda tillsammans: lägenheten hos oss, kitingen hos klubben. Hur som helst räcker ett meddelande.'
    ),
    imageAlt: l(
      'Mark from Tarifa Surf Club and Robert from AMARA in Tarifa',
      'Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa',
      'Mark de Tarifa Surf Club y Robert de AMARA en Tarifa',
      'Mark van Tarifa Surf Club en Robert van AMARA in Tarifa',
      'Mark från Tarifa Surf Club och Robert från AMARA i Tarifa'
    ),
    imageCaption: l(
      'Mark and Robert in Tarifa',
      'Mark und Robert in Tarifa',
      'Mark y Robert en Tarifa',
      'Mark en Robert in Tarifa',
      'Mark och Robert i Tarifa'
    ),
    servicesTitle: l(
      'The complete Tarifa Surf Club offer',
      'Das gesamte Angebot des Tarifa Surf Club',
      'Toda la oferta de Tarifa Surf Club',
      'Het volledige aanbod van Tarifa Surf Club',
      'Hela utbudet hos Tarifa Surf Club'
    ),
    services: [
      {
        id: 'kite-school',
        eyebrow: l('Kite school', 'Kiteschule', 'Escuela de kitesurf', 'Kiteschool', 'Kiteskola'),
        title: l('Courses for every level', 'Kurse für jedes Level', 'Cursos para todos los niveles', 'Lessen voor elk niveau', 'Kurser för alla nivåer'),
        text: l('Group and private tuition for first water starts, progression and confident riding.', 'Gruppen- und Privatkurse für erste Wasserstarts, Fortschritte und sicheres Fahren.', 'Clases en grupo y privadas para las primeras salidas, progresar y navegar con seguridad.', 'Groeps- en privélessen voor de eerste waterstart, progressie en zeker varen.', 'Grupp- och privatlektioner för vattenstart, utveckling och trygg åkning.'),
        href: 'https://tarifasurfclub.com/kitekurs-in-tarifa'
      },
      {
        id: 'kitecamp',
        eyebrow: l('Kitecamp', 'Kitecamp', 'Kitecamp', 'Kitecamp', 'Kitecamp'),
        title: l('Several days focused on kiting', 'Mehrere Tage ganz im Zeichen des Kitens', 'Varios días centrados en el kite', 'Meerdere dagen volledig gericht op kiten', 'Flera dagar med kite i fokus'),
        text: l('A coordinated programme with coaching, time on the water and the right package for your level.', 'Ein abgestimmtes Programm mit Betreuung, Zeit auf dem Wasser und dem passenden Paket für euer Niveau.', 'Un programa coordinado con clases, tiempo en el agua y el paquete adecuado para vuestro nivel.', 'Een afgestemd programma met begeleiding, tijd op het water en een passend pakket voor jullie niveau.', 'Ett samordnat program med coaching, tid på vattnet och rätt paket för er nivå.'),
        href: 'https://tarifasurfclub.com/kitecamp-in-tarifa-spanien'
      },
      {
        id: 'rental',
        eyebrow: l('Rental', 'Verleih', 'Alquiler', 'Verhuur', 'Uthyrning'),
        title: l('Equipment ready for your session', 'Material passend zu eurer Session', 'Material preparado para vuestra sesión', 'Materiaal voor jullie sessie', 'Utrustning för er session'),
        text: l('Rent current kite equipment with personal advice on setup and conditions.', 'Aktuelles Kitematerial leihen, mit persönlicher Beratung zu Setup und Bedingungen.', 'Alquilad material actual con asesoramiento personal sobre equipo y condiciones.', 'Huur actueel kitemateriaal met persoonlijk advies over setup en omstandigheden.', 'Hyr aktuell kiteutrustning med personlig rådgivning om setup och förhållanden.'),
        href: 'https://tarifasurfclub.com/kite-equipment-rental'
      },
      {
        id: 'shop',
        eyebrow: l('Shop', 'Shop', 'Tienda', 'Shop', 'Butik'),
        title: l('Buy equipment with local advice', 'Material mit lokalem Rat kaufen', 'Comprar material con asesoramiento local', 'Materiaal kopen met lokaal advies', 'Köp utrustning med lokala råd'),
        text: l('Find kites, boards, accessories and support from a team that knows Tarifa conditions.', 'Kites, Boards und Zubehör mit Beratung eines Teams, das die Bedingungen in Tarifa kennt.', 'Kites, tablas y accesorios con el apoyo de un equipo que conoce las condiciones de Tarifa.', 'Kites, boards en accessoires met advies van een team dat de omstandigheden in Tarifa kent.', 'Kites, brädor och tillbehör med stöd från ett team som känner Tarifas förhållanden.'),
        href: 'https://shop.tarifasurfclub.com/'
      }
    ],
    contactText: l(
      'Send us your dates, number of guests, kite level and what you have in mind. We reply personally, and Mark is in the loop.',
      'Schickt uns Reisedaten, Personenzahl, Kite-Level und was ihr vorhabt. Wir antworten persönlich, und Mark weiß Bescheid.',
      'Enviadnos fechas, número de personas, nivel de kite y lo que tenéis en mente. Respondemos personalmente, y Mark está al tanto.',
      'Stuur ons reisdata, aantal gasten, kiteniveau en wat jullie van plan zijn. We antwoorden persoonlijk, en Mark weet ervan.',
      'Skicka resedatum, antal gäster, kitenivå och vad ni har tänkt er. Vi svarar personligen, och Mark är med på noterna.'
    ),
    contactLabel: l(
      'Message AMARA',
      'Nachricht an AMARA',
      'Escribir a AMARA',
      'Bericht aan AMARA',
      'Skriv till AMARA'
    ),
    contactMessage: l(
      'Hello AMARA, we are interested in a Tarifa stay with kitesurfing. Travel dates: / Number of guests: / Kite level: / Courses, kitecamp or equipment:',
      'Hallo AMARA, wir interessieren uns für einen Tarifa-Aufenthalt mit Kitesurfen. Reisedaten: / Anzahl Gäste: / Kite-Level: / Kurse, Kitecamp oder Material:',
      'Hola AMARA, nos interesa una estancia en Tarifa con kitesurf. Fechas: / Número de huéspedes: / Nivel de kite: / Cursos, kitecamp o material:',
      'Hallo AMARA, we zijn geïnteresseerd in een verblijf in Tarifa met kitesurfen. Reisdata: / Aantal gasten: / Kite-niveau: / Lessen, kitecamp of materiaal:',
      'Hej AMARA, vi är intresserade av en vistelse i Tarifa med kitesurfing. Resedatum: / Antal gäster: / Kitenivå: / Kurser, kitecamp eller utrustning:'
    ),
    partnerLabel: l(
      'Visit Tarifa Surf Club',
      'Tarifa Surf Club besuchen',
      'Visitar Tarifa Surf Club',
      'Bezoek Tarifa Surf Club',
      'Besök Tarifa Surf Club'
    )
  },
  sections: [
    {
      id: 'why',
      eyebrow: l('Why Tarifa', 'Warum Tarifa', 'Por qué Tarifa', 'Waarom Tarifa', 'Varför Tarifa'),
      title: l(
        'Two winds that take turns, and one beach that handles both',
        'Zwei Winde, die sich abwechseln, und ein Strand, der beide kann',
        'Dos vientos que se turnan y una playa que sirve para los dos',
        'Twee winden die elkaar afwisselen, en één strand dat allebei aankan',
        'Två vindar som turas om, och en strand som klarar båda'
      ),
      intro: l(
        'The Levante from the east, the Poniente from the Atlantic, and Playa de Los Lances in between.',
        'Der Levante aus Osten, der Poniente vom Atlantik, und dazwischen die Playa de Los Lances.',
        'El levante del este, el poniente del Atlántico y, en medio, la playa de Los Lances.',
        'De levante uit het oosten, de poniente van de oceaan, en daartussen Playa de Los Lances.',
        'Levante från öster, poniente från Atlanten, och däremellan Playa de Los Lances.'
      ),
      paragraphs: [
        l(
          'The Levante comes from the east, warm and strong, and turns the water off Los Lances as flat as a lake. The Poniente comes off the Atlantic, steadier, and brings the waves with it. Between them lies Playa de Los Lances: kilometres long, with marked school and launch areas, and regarded as one of the best kite spots in Europe. **You can see it from our terrace.**',
          'Der Levante kommt aus Osten, warm und kräftig, und macht das Wasser vor Los Lances flach wie einen See. Der Poniente kommt vom Atlantik, gleichmäßiger, und bringt die Welle mit. Dazwischen liegt die Playa de Los Lances: kilometerlang, mit ausgewiesenen Schul- und Startbereichen, und sie gilt als einer der besten Kitespots Europas. **Von unserer Terrasse aus seht ihr sie.**',
          'El levante llega del este, cálido y fuerte, y deja el agua frente a Los Lances plana como un lago. El poniente llega del Atlántico, más constante, y trae la ola. En medio está la playa de Los Lances: kilómetros de arena, con zonas señalizadas de escuela y de salida, y considerada uno de los mejores spots de kite de Europa. **Desde nuestra terraza la veis.**',
          'De levante komt uit het oosten, warm en krachtig, en maakt het water voor Los Lances zo vlak als een meer. De poniente komt van de Atlantische Oceaan, gelijkmatiger, en brengt de golven mee. Daartussen ligt Playa de Los Lances: kilometers lang, met aangewezen school- en startzones, en het geldt als een van de beste kitespots van Europa. **Vanaf ons terras zien jullie het liggen.**',
          'Levante kommer från öster, varm och kraftig, och gör vattnet utanför Los Lances platt som en sjö. Poniente kommer från Atlanten, jämnare, och tar vågen med sig. Däremellan ligger Playa de Los Lances: kilometerlång, med utmärkta skol- och startzoner, och den räknas som en av Europas bästa kitespots. **Från vår terrass ser ni den.**'
        ),
        l(
          'In the off-season you walk down from AMARA. In high summer, when Los Lances fills up, you drive to Valdevaqueros, the dune bay a little further north.',
          'In der Nebensaison geht ihr von AMARA zu Fuß hinunter. Im Hochsommer, wenn es an Los Lances voll wird, fahrt ihr mit dem Auto nach Valdevaqueros, in die Dünenbucht ein Stück weiter nördlich.',
          'En temporada baja bajáis a pie desde AMARA. En pleno verano, cuando Los Lances se llena, vais en coche a Valdevaqueros, la bahía de dunas un poco más al norte.',
          'In het laagseizoen lopen jullie vanaf AMARA naar beneden. Hartje zomer, als Los Lances vol raakt, rijden jullie met de auto naar Valdevaqueros, de duinbaai iets verder naar het noorden.',
          'Under lågsäsong går ni ner till fots från AMARA. Mitt i sommaren, när Los Lances blir fullt, tar ni bilen till Valdevaqueros, dynbukten en bit längre norrut.'
        )
      ]
    },
    {
      id: 'day',
      eyebrow: l('A day in Tarifa', 'Ein Tag in Tarifa', 'Un día en Tarifa', 'Een dag in Tarifa', 'En dag i Tarifa'),
      title: l(
        'Coffee on the terrace in the morning, wind at midday, old town at night',
        'Morgens Kaffee auf der Terrasse, mittags Wind, abends Altstadt',
        'Café en la terraza por la mañana, viento a mediodía, casco antiguo por la noche',
        '’s Ochtends koffie op het terras, ’s middags wind, ’s avonds de oude stad',
        'Kaffe på terrassen på morgonen, vind vid lunch, gamla stan på kvällen'
      ),
      intro: l(
        'Tarifa is small enough to reach everything on foot, and lively enough that nobody has to go to bed early.',
        'Tarifa ist klein genug, dass ihr alles zu Fuß erreicht, und lebendig genug, dass keiner früh ins Bett muss.',
        'Tarifa es lo bastante pequeña para llegar a todo a pie y lo bastante viva para que nadie tenga que acostarse pronto.',
        'Tarifa is klein genoeg om alles te voet te bereiken, en levendig genoeg dat niemand vroeg naar bed hoeft.',
        'Tarifa är litet nog för att nå allt till fots, och levande nog för att ingen behöver gå och lägga sig tidigt.'
      ),
      paragraphs: [
        l(
          'A look at the water from the terrace before the coffee runs out: where the wind is coming from, whether the first kites are up. Around midday it usually picks up. Down to the beach, rig up, go. In the afternoon a second session or a nap in the shade. **Tapas in the old town in the evening**, and whoever wants to stays out late.',
          'Ein Blick von der Terrasse aufs Wasser, bevor der Kaffee alle ist: woher der Wind kommt, ob die ersten Kites schon stehen. Gegen Mittag legt er meist zu. Runter zum Strand, aufbauen, rein. Nachmittags die zweite Session oder ein Nickerchen im Schatten. **Abends Tapas in der Altstadt**, und wer will, bleibt bis in die Nacht.',
          'Un vistazo al agua desde la terraza antes de terminar el café: de dónde viene el viento, si ya hay cometas en el aire. Hacia mediodía suele apretar. Bajar a la playa, montar, entrar. Por la tarde, segunda sesión o siesta a la sombra. **Tapas en el casco antiguo por la noche** y, quien quiera, sigue hasta tarde.',
          'Een blik vanaf het terras op het water voordat de koffie op is: waar de wind vandaan komt, of de eerste kites al staan. Rond het middaguur trekt hij meestal aan. Naar het strand, opbouwen, erin. ’s Middags een tweede sessie of een dutje in de schaduw. **’s Avonds tapas in de oude stad**, en wie wil, blijft tot diep in de nacht.',
          'En blick från terrassen ut över vattnet innan kaffet är slut: varifrån vinden kommer, om de första kitarna redan står. Vid lunch brukar den öka. Ner till stranden, rigga, ut. På eftermiddagen en andra session eller en tupplur i skuggan. **Tapas i gamla stan på kvällen**, och den som vill stannar ute till sent.'
        )
      ]
    },
    {
      id: 'learn',
      eyebrow: l('Learning to kite', 'Kiten lernen', 'Aprender a navegar', 'Leren kiten', 'Lära sig kita'),
      title: l(
        'Two students, one instructor, three hours a day, and a boat out there',
        'Zwei Schüler, ein Lehrer, drei Stunden am Tag, und ein Boot draußen',
        'Dos alumnos, un instructor, tres horas al día y una lancha fuera',
        'Twee leerlingen, één instructeur, drie uur per dag, en een boot op het water',
        'Två elever, en instruktör, tre timmar om dagen, och en båt där ute'
      ),
      intro: l(
        'The wind is exactly what makes Tarifa a place to learn: it is here almost all year, and Tarifa Surf Club knows which beach works on which day.',
        'Gerade der Wind macht Tarifa zum Lernort: Er ist fast das ganze Jahr da, und der Tarifa Surf Club weiß, welcher Strand an welchem Tag passt.',
        'Justo el viento es lo que hace de Tarifa un sitio para aprender: está casi todo el año, y Tarifa Surf Club sabe qué playa funciona cada día.',
        'Juist de wind maakt Tarifa een plek om te leren: hij is er bijna het hele jaar, en Tarifa Surf Club weet welk strand op welke dag werkt.',
        'Just vinden gör Tarifa till en plats att lära sig på: den finns här nästan hela året, och Tarifa Surf Club vet vilken strand som fungerar vilken dag.'
      ),
      paragraphs: [
        l(
          'A course day at Tarifa Surf Club means **two students, one instructor, three hours a day, gear included**, and on days with offshore Levante the club’s boat is out on the water. The wind does the rest, and Tarifa has plenty of it.',
          'Ein Kurstag beim Tarifa Surf Club heißt: **zwei Schüler, ein Lehrer, drei Stunden am Tag, Material inklusive**, und an Tagen mit ablandigem Levante liegt das Boot des Clubs draußen. Den Rest macht der Wind, und davon hat Tarifa genug.',
          'Un día de curso en Tarifa Surf Club significa **dos alumnos, un instructor, tres horas al día, material incluido**, y los días de levante de tierra la lancha del club está fuera, en el agua. El resto lo pone el viento, y en Tarifa sobra.',
          'Een lesdag bij Tarifa Surf Club betekent **twee leerlingen, één instructeur, drie uur per dag, materiaal inbegrepen**, en op dagen met aflandige levante ligt de boot van de club buiten op het water. De rest doet de wind, en daar heeft Tarifa genoeg van.',
          'En kursdag hos Tarifa Surf Club betyder **två elever, en instruktör, tre timmar om dagen, utrustning ingår**, och på dagar med frånlandsvind från levante ligger klubbens båt ute på vattnet. Resten sköter vinden, och den har Tarifa gott om.'
        ),
        l(
          'If you already ride, ‘Help 2 Kite’ gives you company on the water: the club picks the spot, keeps an eye on your gear, and in offshore wind the boat is there. And if you need gear, arrange it beforehand and it is waiting in the apartment when you arrive.',
          'Wer schon fährt, findet mit „Help 2 Kite“ Gesellschaft auf dem Wasser: Der Club wählt den Spot, hat ein Auge auf euer Material, und bei ablandigem Wind ist das Boot dabei. Und wer Material braucht, findet es nach Absprache bei Ankunft schon in der Wohnung.',
          'Quien ya navega encuentra compañía en el agua con «Help 2 Kite»: el club elige el spot, vigila vuestro material y, con viento de tierra, la lancha está allí. Y quien necesita material lo encuentra, si lo acordamos antes, esperando en el apartamento al llegar.',
          'Wie al vaart, vindt met ‘Help 2 Kite’ gezelschap op het water: de club kiest de spot, houdt een oog op jullie materiaal, en bij aflandige wind is de boot erbij. En wie materiaal nodig heeft, vindt het na afspraak bij aankomst al in het appartement.',
          'Den som redan åker får sällskap på vattnet med ”Help 2 Kite”: klubben väljer spot, håller ett öga på er utrustning, och vid frånlandsvind är båten med. Och den som behöver utrustning hittar den, efter överenskommelse, redan i lägenheten vid ankomst.'
        )
      ]
    },
    {
      id: 'stay',
      eyebrow: l('Staying at AMARA', 'Wohnen bei AMARA', 'Alojarse en AMARA', 'Wonen bij AMARA', 'Bo hos AMARA'),
      title: l(
        'A view of Los Lances, an underground garage for the gear, and the club one message away',
        'Blick auf Los Lances, Tiefgarage fürs Material, und der Club eine Nachricht entfernt',
        'Vistas a Los Lances, garaje para el material y el club a un mensaje',
        'Uitzicht op Los Lances, een parkeergarage voor het materiaal, en de club één bericht verderop',
        'Utsikt över Los Lances, garage för utrustningen, och klubben ett meddelande bort'
      ),
      intro: l(
        'AMARA Family & Surf, on the western edge of Tarifa, between the old town and the beach.',
        'AMARA Family & Surf, am westlichen Rand von Tarifa, zwischen Altstadt und Strand.',
        'AMARA Family & Surf, en el borde oeste de Tarifa, entre el casco antiguo y la playa.',
        'AMARA Family & Surf, aan de westrand van Tarifa, tussen de oude stad en het strand.',
        'AMARA Family & Surf, i västra utkanten av Tarifa, mellan gamla stan och stranden.'
      ),
      paragraphs: [
        l(
          '**A private terrace facing the Atlantic, room for two or a small family**, a reserved space in the underground garage for car and boards, a supermarket right opposite, and the club one message away. If you would rather live right in the surf house, you book the club’s guesthouse directly with Mark.',
          '**Private Terrasse zum Atlantik, Platz für zwei oder eine kleine Familie**, ein reservierter Platz in der Tiefgarage für Auto und Boards, ein Supermarkt direkt gegenüber, und der Club eine Nachricht entfernt. Wer lieber mitten im Surferhaus wohnt: Das Guesthouse des Clubs bucht ihr direkt bei Mark.',
          '**Terraza privada al Atlántico, sitio para dos o una familia pequeña**, plaza reservada en el garaje subterráneo para coche y tablas, supermercado justo enfrente y el club a un mensaje. Si preferís vivir en plena casa de surferos, el guesthouse del club lo reserváis directamente con Mark.',
          '**Privéterras aan de Atlantische Oceaan, plek voor twee of een klein gezin**, een gereserveerde plaats in de ondergrondse garage voor auto en boards, een supermarkt recht tegenover, en de club één bericht verderop. Wie liever midden in het surfhuis woont: het guesthouse van de club boeken jullie rechtstreeks bij Mark.',
          '**Privat terrass mot Atlanten, plats för två eller en liten familj**, en reserverad plats i garaget för bil och brädor, en mataffär rakt över gatan, och klubben ett meddelande bort. Den som hellre bor mitt i surfarhuset bokar klubbens guesthouse direkt hos Mark.'
        )
      ]
    }
  ],
  notice: {
    eyebrow: l('Safety', 'Sicherheit', 'Seguridad', 'Veiligheid', 'Säkerhet'),
    title: l(
      'The wind can be offshore, and that is exactly why you learn properly here',
      'Der Wind kann ablandig sein, und genau deshalb lernt ihr hier richtig',
      'El viento puede ser de tierra, y justo por eso aquí se aprende bien',
      'De wind kan aflandig zijn, en juist daarom leren jullie het hier goed',
      'Vinden kan vara frånlands, och just därför lär ni er ordentligt här'
    ),
    text: l(
      'Tarifa challenges beginners. The Levante blows from the land out to sea, the beaches have zones and flags that apply, and AEMET issues warnings when it gets serious. **We show you how to read a forecast**, and the club decides with you when you go on the water. Nothing more is needed.',
      'Tarifa fordert Anfänger. Der Levante weht vom Land aufs Meer, die Strände haben Zonen und Flaggen, die gelten, und AEMET warnt, wenn es ernst wird. **Wir zeigen euch, wie ihr einen Forecast lest**, und der Club entscheidet mit euch, wann ihr aufs Wasser geht. Mehr braucht es nicht.',
      'Tarifa exige a los principiantes. El levante sopla de la tierra hacia el mar, las playas tienen zonas y banderas que se cumplen, y AEMET avisa cuando la cosa va en serio. **Os enseñamos a leer un parte**, y el club decide con vosotros cuándo entráis al agua. No hace falta más.',
      'Tarifa vraagt wat van beginners. De levante waait van het land naar zee, de stranden hebben zones en vlaggen die gelden, en AEMET waarschuwt als het serieus wordt. **We laten jullie zien hoe je een forecast leest**, en de club beslist samen met jullie wanneer jullie het water op gaan. Meer is er niet nodig.',
      'Tarifa ställer krav på nybörjare. Levante blåser från land ut mot havet, stränderna har zoner och flaggor som gäller, och AEMET varnar när det blir allvar. **Vi visar er hur man läser en prognos**, och klubben avgör tillsammans med er när ni går ut på vattnet. Mer behövs inte.'
    )
  },
  faq: [
    {
      question: l(
        'Can AMARA coordinate accommodation and kitesurfing together?',
        'Können wir Wohnung und Kurse zusammen buchen?',
        '¿Puede AMARA coordinar juntos el alojamiento y el kitesurf?',
        'Kan AMARA verblijf en kitesurfen samen regelen?',
        'Kan AMARA samordna boende och kitesurfing?'
      ),
      answer: l(
        'Yes. Send us your dates, number of guests, kite level and wishes. We coordinate your AMARA stay with the suitable Tarifa Surf Club course, kitecamp, coaching or equipment and bring the relevant booking details together for you. You can also book directly with the club; both partners know each other and coordinate.',
        'Ja, und genauso gut getrennt. Schickt uns Reisedaten, Personenzahl, Kite-Level und was ihr vorhabt. Wir halten die Wohnung fest und geben Mark Bescheid, der Kurs, Camp oder Material mit euch abstimmt. Das Kiten bucht und bezahlt ihr beim Club, die Wohnung bei uns.',
        'Sí. Enviadnos las fechas, el número de huéspedes, vuestro nivel y lo que buscáis. Coordinamos vuestra estancia en AMARA con el curso, kitecamp, clase o material adecuado de Tarifa Surf Club y reunimos los datos de reserva correspondientes. También podéis reservar directamente con el club; los dos socios se conocen y se coordinan.',
        'Ja. Stuur ons reisdata, aantal gasten, kite-niveau en jullie wensen. Wij stemmen het AMARA-verblijf af met de passende les, kitecamp, coaching of uitrusting van Tarifa Surf Club en brengen de juiste boekingsinformatie samen. Jullie kunnen ook rechtstreeks bij de club boeken; beide partners kennen elkaar en stemmen af.',
        'Ja. Skicka resedatum, antal gäster, kitenivå och önskemål. Vi samordnar AMARA-vistelsen med rätt kurs, kitecamp, coaching eller utrustning hos Tarifa Surf Club och samlar bokningsuppgifterna åt er. Ni kan också boka direkt hos klubben; de två partnerna känner varandra och samordnar.'
      )
    },
    {
      question: l(
        'Are kite school courses and kitecamps suitable for beginners?',
        'Können wir bei null anfangen?',
        '¿Los cursos de la escuela y los kitecamps son adecuados para principiantes?',
        'Zijn lessen van de kiteschool en kitecamps geschikt voor beginners?',
        'Passar kiteskolans kurser och kitecamps för nybörjare?'
      ),
      answer: l(
        'Tarifa Surf Club offers tuition for different levels. Share your experience and goals with us so the team can recommend the appropriate course format, supervision and schedule for the actual conditions.',
        'Ja. Beim Tarifa Surf Club lernt ihr zu zweit mit einem Lehrer, drei Stunden am Tag, Kite, Board, Neopren, Weste und Helm inklusive, und an Tagen mit ablandigem Wind liegt das Boot des Clubs draußen. Sagt uns, was ihr schon könnt, dann weiß Mark, womit er anfängt.',
        'Tarifa Surf Club ofrece clases para distintos niveles. Contadnos vuestra experiencia y objetivos para que el equipo pueda recomendar el formato, la atención y el horario adecuados a las condiciones reales.',
        'Tarifa Surf Club geeft les op verschillende niveaus. Deel jullie ervaring en doelen met ons, zodat het team de passende lesvorm, begeleiding en planning voor de actuele omstandigheden kan adviseren.',
        'Tarifa Surf Club erbjuder undervisning för olika nivåer. Berätta om er erfarenhet och era mål så att teamet kan rekommendera rätt kursform, handledning och upplägg för dagens förhållanden.'
      )
    },
    {
      question: l(
        'Can I rent or buy kite equipment in Tarifa?',
        'Können wir Material leihen oder kaufen?',
        '¿Puedo alquilar o comprar material de kite en Tarifa?',
        'Kan ik in Tarifa kitemateriaal huren of kopen?',
        'Kan jag hyra eller köpa kiteutrustning i Tarifa?'
      ),
      answer: l(
        'Tarifa Surf Club offers equipment rental and a shop for kites, boards and accessories. Tell us what you need and your level; we coordinate the contact so the team can advise you on the suitable setup.',
        'Beides, beim Tarifa Surf Club: komplette Sets, Einzelteile und Hydrofoil zum Leihen, dazu der Shop, in dem die Leihgebühr beim Kauf voll angerechnet wird. Die Kaution übernehmen wir für unsere Gäste beim Club, und nach Absprache liegt das Material bei Ankunft in der Wohnung. Alle Preise mit Stand stehen auf der Materialseite.',
        'Tarifa Surf Club ofrece alquiler y una tienda de kites, tablas y accesorios. Decidnos qué necesitáis y vuestro nivel; coordinamos el contacto para que el equipo pueda aconsejaros el equipo adecuado.',
        'Tarifa Surf Club heeft verhuur en een shop voor kites, boards en accessoires. Vertel ons wat jullie nodig hebben en op welk niveau jullie varen; wij regelen het contact voor advies over de passende setup.',
        'Tarifa Surf Club erbjuder uthyrning och en butik med kites, brädor och tillbehör. Berätta vad ni behöver och er nivå; vi samordnar kontakten så att teamet kan rekommendera rätt setup.'
      )
    },
    { question: l('Which wind is better for beginners?', 'Welcher Wind ist für Anfänger angenehmer?', '¿Qué viento es mejor para principiantes?', 'Welke wind is beter voor beginners?', 'Vilken vind är bäst för nybörjare?'), answer: l('Poniente often feels more accessible because it generally reaches the Atlantic beaches from the sea, but there is no automatic beginner day. A qualified school must assess the actual location, strength, waves and zoning.', 'Der Poniente kommt vom Atlantik auf den Strand, gleichmäßiger und mit Welle, und wirkt unter dem Kite oft ruhiger. Der Levante ist kräftiger und weht vom Land aufs Meer, deshalb liegt bei Levante das Boot des Clubs draußen. Welcher Tag für euch passt, entscheidet der Lehrer mit euch am Strand, mit Blick auf Stärke, Welle und Zonen.', 'El Poniente suele resultar más accesible porque llega generalmente del mar, pero no existe un día automáticamente apto para principiantes. Una escuela cualificada debe valorar lugar, intensidad, olas y zonificación.', 'Poniente voelt vaak toegankelijker omdat hij meestal vanaf zee komt, maar er bestaat geen automatisch veilige beginnersdag. Een gekwalificeerde school moet plek, kracht, golven en zonering beoordelen.', 'Poniente känns ofta mer tillgänglig eftersom den vanligtvis kommer från havet, men ingen dag är automatiskt en nybörjardag. En kvalificerad skola måste bedöma plats, styrka, vågor och zoner.') },
    { question: l('Can I kite anywhere along Los Lances?', 'Dürfen wir überall an Los Lances kiten?', '¿Se puede hacer kite en cualquier punto de Los Lances?', 'Kun je overal langs Los Lances kiten?', 'Kan man kitesurfa överallt längs Los Lances?'), answer: l('No. Los Lances includes different sections, bathing areas, protected environments and marked watersport infrastructure. Use only the currently permitted zones and access points.', 'Los Lances ist lang und hat Abschnitte: Badebereiche, Schul- und Startkorridore und die Lagune, in der Kitesurfen amtlich verboten ist. Wo ihr startet, zeigen euch Markierung und Bojen, und beim Club der Lehrer. Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'No. Los Lances incluye tramos distintos, zonas de baño, espacios protegidos e infraestructura señalizada para deportes. Utiliza únicamente zonas y accesos autorizados.', 'Nee. Los Lances bestaat uit verschillende delen, zwemzones, beschermde natuur en gemarkeerde watersportinfrastructuur. Gebruik alleen de op dat moment toegestane zones en toegangen.', 'Nej. Los Lances omfattar olika delar, badzoner, skyddade miljöer och markerad vattensportinfrastruktur. Använd endast för tillfället tillåtna zoner och tillträden.') },
    { question: l('Do online forecasts replace local advice?', 'Reicht Windguru, um den Tag zu planen?', '¿Las previsiones en línea sustituyen el consejo local?', 'Vervangen online verwachtingen lokaal advies?', 'Ersätter nätprognoser lokala råd?'), answer: l('No. Forecasts are planning tools. Beach observations, official flags, marked zones and qualified local operators provide the final context.', 'Zum Planen ja, und auch wir schauen morgens zuerst dort hin. Was ihr dann am Strand seht, zählt mehr: die tatsächliche Richtung, die Böen, die Welle, die Flaggen. Wie ihr die Tabelle lest, zeigen wir euch auf der Wind-Seite, zusammen mit den Werten von heute und den amtlichen Warnungen von AEMET.', 'No. Las previsiones sirven para planificar. La observación en la playa, las banderas, las zonas señalizadas y los operadores cualificados aportan el contexto definitivo.', 'Nee. Verwachtingen zijn planningstools. Observatie op het strand, officiële vlaggen, gemarkeerde zones en gekwalificeerde lokale aanbieders geven de doorslaggevende context.', 'Nej. Prognoser är planeringsverktyg. Observationer på stranden, officiella flaggor, markerade zoner och kvalificerade lokala aktörer ger det avgörande sammanhanget.') },
    {
      question: l('What does a course day cost?', 'Was kostet ein Kurstag?', '¿Cuánto cuesta un día de curso?', 'Wat kost een cursusdag?', 'Vad kostar en kursdag?'),
      answer: l(
        'At Tarifa Surf Club a semi-private course day (two students per instructor, three hours) costs 110 € per person for days 1 to 3 and 100 € from day 4; a private day (two hours) 150 € and then 135 €. Equipment is included. Prices as of 3 September 2026; booking and invoicing run through the club.',
        'Semi-privat, zwei Schüler pro Lehrer, drei Stunden: 110 € pro Person und Tag für die ersten drei Tage, ab dem vierten Tag 100 €. Privat, ein Schüler, zwei Stunden: 150 € am Tag, ab dem vierten Tag 135 €. Material inklusive. Preise des Tarifa Surf Club mit Stand 3. September 2026; gebucht und bezahlt wird beim Club.',
        'En Tarifa Surf Club, un día de curso semiprivado (dos alumnos por instructor, tres horas) cuesta 110 € por persona los días 1 a 3 y 100 € desde el día 4; un día privado (dos horas) 150 € y después 135 €. El material está incluido. Precios a 3 de septiembre de 2026; la reserva y la factura se gestionan con el club.',
        'Bij Tarifa Surf Club kost een semi-privé cursusdag (twee cursisten per instructeur, drie uur) 110 € per persoon op dag 1 tot 3 en 100 € vanaf dag 4; een privédag (twee uur) 150 € en daarna 135 €. Materiaal is inbegrepen. Prijzen per 3 september 2026; boeking en factuur lopen via de club.',
        'Hos Tarifa Surf Club kostar en semiprivat kursdag (två elever per instruktör, tre timmar) 110 € per person dag 1 till 3 och 100 € från dag 4; en privat dag (två timmar) 150 € och därefter 135 €. Utrustning ingår. Priser per den 3 september 2026; bokning och faktura går via klubben.'
      )
    },
    {
      question: l('When is the best time for a kite stay in Tarifa?', 'Wann kommen wir am besten?', '¿Cuál es la mejor época para un viaje de kite a Tarifa?', 'Wanneer is de beste tijd voor een kiteverblijf in Tarifa?', 'När är bästa tiden för en kitevistelse i Tarifa?'),
      answer: l(
        'Tarifa Surf Club runs its kitecamps from mid-September to mid-June. In that low season the way to the spot is short: Los Lances on foot; in high season more likely Valdevaqueros by car. Which day works on the water is always decided on the day itself.',
        'Von Mitte September bis Mitte Juni, wenn die Strände ruhiger sind und der Club seine Kitecamps fährt. Dann geht ihr von AMARA zu Fuß nach Los Lances. Im Hochsommer ist Los Lances voll, und ihr fahrt mit dem Auto nach Valdevaqueros. Welcher Tag aufs Wasser passt, seht ihr morgens von der Terrasse und entscheidet ihr am Strand.',
        'Tarifa Surf Club organiza sus kitecamps de mediados de septiembre a mediados de junio. En esa temporada baja el camino al spot es corto: Los Lances a pie; en temporada alta, más bien Valdevaqueros en coche. Qué día funciona en el agua se decide siempre ese mismo día.',
        'Tarifa Surf Club organiseert zijn kitecamps van half september tot half juni. In dat laagseizoen is de weg naar de spot kort: Los Lances te voet; in het hoogseizoen eerder Valdevaqueros met de auto. Welke dag op het water past, wordt altijd op de dag zelf beslist.',
        'Tarifa Surf Club håller sina kitecamps från mitten av september till mitten av juni. Under den lågsäsongen är vägen till spoten kort: Los Lances till fots; under högsäsongen snarare Valdevaqueros med bil. Vilken dag som fungerar på vattnet avgörs alltid samma dag.'
      )
    }
  ],
  sources: [tarifaSurfClubSource, officialKiteSource, beachPlanSource, officialBeachSource, gkaYouthWorldsSource],
  related: ['overview', 'beaches']
};

const beachTitles = l(
  'Best Beaches in Tarifa | Los Lances, Valdevaqueros & Bolonia',
  'Tarifas Strände | Los Lances, Valdevaqueros & Bolonia',
  'Playas de Tarifa | Los Lances, Valdevaqueros y Bolonia',
  'Stranden van Tarifa | Los Lances, Valdevaqueros & Bolonia',
  'Tarifas stränder | Los Lances, Valdevaqueros & Bolonia'
);

const beachDescriptions = l(
  'Compare Tarifa beaches for swimming, space, wind sports and nature, with practical guidance on zones, access and changing conditions.',
  'Tarifas Strände für Baden, Weite, Windsport und Natur vergleichen – mit Hinweisen zu Zonen, Zufahrt und wechselnden Bedingungen.',
  'Compara las playas de Tarifa para baño, espacio, deportes de viento y naturaleza, con orientación sobre zonas y accesos.',
  'Vergelijk de stranden van Tarifa voor zwemmen, ruimte, windsport en natuur, met uitleg over zones en bereikbaarheid.',
  'Jämför Tarifas stränder för bad, rymd, vindsport och natur, med vägledning om zoner och tillträde.'
);

const beaches: TarifaGuideContent = {
  id: 'beaches',
  token: 'tarifa_beaches_authority',
  seo: buildSeo('2026-08-03-tarifa-beaches-v1.0', 'B', beachTitles, beachDescriptions),
  navLabel: l('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'),
  breadcrumbLabel: l('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa Experience Guide', 'Guía de experiencias en Tarifa', 'Tarifa Experience Guide', 'Tarifa upplevelseguide'),
    title: l('Choose the beach for the day you actually have', 'Den Strand passend zum tatsächlichen Tag wählen', 'Elegir la playa para el día que realmente hace', 'Kies het strand dat past bij de dag van vandaag', 'Välj strand efter dagen du faktiskt har'),
    lead: l('Tarifa’s coastline stretches from a small Mediterranean cove to broad Atlantic beaches and the protected landscape around Bolonia. The best choice depends on wind, activity, season and the atmosphere you want.', 'Tarifas Küste reicht von einer kleinen Mittelmeerbucht über weite Atlantikstrände bis zur geschützten Landschaft rund um Bolonia. Die beste Wahl hängt von Wind, Aktivität, Saison und gewünschter Atmosphäre ab.', 'La costa de Tarifa va desde una pequeña cala mediterránea hasta amplias playas atlánticas y el paisaje protegido de Bolonia. La mejor elección depende del viento, la actividad, la temporada y el ambiente buscado.', 'De kust van Tarifa loopt van een kleine mediterrane baai tot brede Atlantische stranden en het beschermde landschap rond Bolonia. De beste keuze hangt af van wind, activiteit, seizoen en gewenste sfeer.', 'Tarifas kust sträcker sig från en liten Medelhavsvik till breda Atlantstränder och det skyddade landskapet kring Bolonia. Bästa valet beror på vind, aktivitet, säsong och önskad stämning.'),
    editorialNote: sharedEditorialNote,
    updated: sharedUpdated
  },
  facts: [
    { label: l('Coastline', 'Küstenlinie', 'Litoral', 'Kustlijn', 'Kustlinje'), value: l('Nearly 40 km in the municipality', 'Fast 40 km im Gemeindegebiet', 'Casi 40 km en el municipio', 'Bijna 40 km binnen de gemeente', 'Nästan 40 km inom kommunen') },
    { label: l('Two waters', 'Zwei Meere', 'Dos mares', 'Twee zeeën', 'Två hav'), value: l('Mediterranean and Atlantic', 'Mittelmeer und Atlantik', 'Mediterráneo y Atlántico', 'Middellandse Zee en Atlantische Oceaan', 'Medelhavet och Atlanten') },
    { label: l('Daily check', 'Täglicher Check', 'Comprobación diaria', 'Dagelijkse check', 'Daglig kontroll'), value: l('Wind, flags, zoning and access', 'Wind, Flaggen, Zonen und Zufahrt', 'Viento, banderas, zonas y accesos', 'Wind, vlaggen, zones en toegang', 'Vind, flaggor, zoner och tillträde') }
  ],
  sections: [
    {
      id: 'compare',
      eyebrow: l('Beach comparison', 'Strandvergleich', 'Comparativa de playas', 'Strandvergelijking', 'Strandjämförelse'),
      title: l('Four coastlines, four different days', 'Vier Küstenabschnitte, vier unterschiedliche Tage', 'Cuatro costas para cuatro días distintos', 'Vier kustgebieden, vier verschillende dagen', 'Fyra kustavsnitt för fyra olika dagar'),
      intro: l('Distance alone should not decide. Services, exposure, protected landscape and current zoning shape the experience.', 'Nicht nur die Entfernung entscheidet. Infrastruktur, Exposition, Naturschutz und aktuelle Zonierung prägen das Erlebnis.', 'La distancia no debe ser el único criterio. Servicios, exposición, paisaje protegido y zonificación vigente marcan la experiencia.', 'Afstand is niet het enige criterium. Voorzieningen, ligging, beschermd landschap en actuele zonering bepalen de ervaring.', 'Avståndet ska inte avgöra ensamt. Service, exponering, skyddat landskap och aktuella zoner formar upplevelsen.'),
      cards: [
        { kicker: l('Closest to town', 'Stadtnah', 'Junto a la ciudad', 'Dicht bij de stad', 'Nära staden'), title: l('Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur'), text: l('The urban-facing section offers straightforward access and more services. It can suit a classic beach visit, subject to current wind, bathing flags and marked activity areas.', 'Der stadtnahe Abschnitt bietet einfachen Zugang und mehr Infrastruktur. Er eignet sich für einen klassischen Strandtag – abhängig von aktuellem Wind, Badeflaggen und markierten Aktivitätsbereichen.', 'El tramo urbano ofrece acceso sencillo y más servicios. Puede encajar para un día de playa clásico, siempre según el viento, las banderas y las zonas de actividad señalizadas.', 'Het stedelijke deel biedt eenvoudige toegang en meer voorzieningen. Het kan passen bij een klassieke stranddag, afhankelijk van wind, zwemvlaggen en gemarkeerde activiteitenzones.', 'Den stadsnära delen har enkel tillgång och mer service. Den kan passa för en klassisk stranddag beroende på vind, badflaggor och markerade aktivitetsområden.') },
        { kicker: l('Space and wind', 'Weite und Wind', 'Espacio y viento', 'Ruimte en wind', 'Rymd och vind'), title: l('Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte'), text: l('A broad Atlantic setting associated with wind sports and protected natural areas. Choose the correct bathing or sport zone rather than treating the full beach as one shared space.', 'Ein weiter Atlantikstrand, geprägt von Windsport und geschützten Naturräumen. Wählt den passenden Bade- oder Sportbereich, statt den gesamten Strand als gemeinsame Fläche zu betrachten.', 'Un amplio paisaje atlántico ligado a los deportes de viento y a espacios naturales protegidos. Conviene elegir la zona de baño o deporte adecuada y no considerar toda la playa como un único espacio compartido.', 'Een breed Atlantisch strand met windsport en beschermde natuur. Kies de juiste zwem- of sportzone en behandel niet het hele strand als één gedeelde ruimte.', 'En bred Atlantmiljö förknippad med vindsport och skyddad natur. Välj rätt bad- eller sportzon i stället för att se hela stranden som en gemensam yta.') },
        { kicker: l('Wind-sport landscape', 'Windsport-Landschaft', 'Paisaje de deportes de viento', 'Windsportlandschap', 'Vindsportlandskap'), title: l('Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros'), text: l('A celebrated wind-sport beach with substantial dune scenery and marked areas for watersports and bathers. On busy days, the atmosphere is energetic rather than secluded.', 'Ein bekannter Windsportstrand mit eindrucksvoller Dünenlandschaft und markierten Bereichen für Wassersport und Badende. An vollen Tagen ist die Atmosphäre lebendig, nicht abgeschieden.', 'Una playa emblemática para los deportes de viento, con grandes dunas y zonas señalizadas para deporte y baño. En días concurridos, el ambiente es animado y no solitario.', 'Een bekende windsportplek met imposante duinen en gemarkeerde zones voor sporters en zwemmers. Op drukke dagen is de sfeer levendig, niet afgelegen.', 'En välkänd vindsportstrand med stora dyner och markerade områden för sport och bad. Under välbesökta dagar är stämningen livlig snarare än avskild.') },
        { kicker: l('Landscape and history', 'Landschaft und Geschichte', 'Paisaje e historia', 'Landschap en geschiedenis', 'Landskap och historia'), title: l('Bolonia', 'Bolonia', 'Bolonia', 'Bolonia', 'Bolonia'), text: l('A more remote bay known for its dune, natural setting and proximity to Baelo Claudia. Treat it as a full-day landscape visit and respect protected areas and access controls.', 'Eine abgelegenere Bucht, bekannt für Düne, Naturkulisse und die Nähe zu Baelo Claudia. Plant sie als ganzen Landschaftstag und respektiert Schutzbereiche sowie Zufahrtsregelungen.', 'Una bahía más apartada, conocida por su duna, su entorno natural y la cercanía de Baelo Claudia. Conviene plantearla como excursión de día completo y respetar espacios protegidos y controles de acceso.', 'Een meer afgelegen baai, bekend om de duin, natuur en nabijheid van Baelo Claudia. Zie het als een volledige dag in het landschap en respecteer beschermde zones en toegangsregels.', 'En mer avskild vik känd för sin dyn, naturmiljö och närheten till Baelo Claudia. Planera den som en heldag och respektera skyddade områden och tillträdesregler.') }
      ]
    },
    {
      id: 'choose',
      eyebrow: l('Choose by intention', 'Nach Wunsch auswählen', 'Elegir según el plan', 'Kies naar bedoeling', 'Välj efter syfte'),
      title: l('Start with the experience, then check the conditions', 'Erst das gewünschte Erlebnis, dann die Bedingungen prüfen', 'Primero la experiencia; después, las condiciones', 'Begin bij de ervaring en controleer daarna de omstandigheden', 'Börja med upplevelsen och kontrollera sedan förhållandena'),
      intro: l('A beach can serve different purposes on different days. Keep a second option rather than forcing the original plan.', 'Ein Strand kann an verschiedenen Tagen ganz unterschiedlich funktionieren. Haltet eine zweite Option bereit, statt den ursprünglichen Plan zu erzwingen.', 'Una playa puede funcionar de forma muy distinta según el día. Conviene tener una segunda opción en lugar de forzar el plan inicial.', 'Een strand kan per dag een andere functie hebben. Houd een tweede optie achter de hand in plaats van het oorspronkelijke plan door te drukken.', 'En strand kan fungera helt olika från dag till dag. Ha ett alternativ i stället för att tvinga igenom ursprungsplanen.'),
      cards: [
        { kicker: l('Swimming', 'Baden', 'Baño', 'Zwemmen', 'Bad'), title: l('Look for designated bathing water', 'Ausgewiesene Badebereiche wählen', 'Buscar zonas de baño señalizadas', 'Zoek aangewezen zwemwater', 'Välj markerade badområden'), text: l('Playa Chica and marked bathing sections can feel more suitable than an active kite zone. Flags and lifeguard instructions remain decisive.', 'Playa Chica und markierte Badeabschnitte können geeigneter wirken als eine aktive Kitezone. Flaggen und Anweisungen der Rettungskräfte bleiben entscheidend.', 'Playa Chica y los tramos señalizados para baño pueden resultar más adecuados que una zona activa de kite. Las banderas y las indicaciones de socorrismo son determinantes.', 'Playa Chica en gemarkeerde zwemgedeelten kunnen prettiger zijn dan een actieve kitezone. Vlaggen en aanwijzingen van reddingsdiensten zijn doorslaggevend.', 'Playa Chica och markerade badavsnitt kan passa bättre än en aktiv kitezon. Flaggor och badvaktens anvisningar är avgörande.') },
        { kicker: l('Wind sports', 'Windsport', 'Deportes de viento', 'Windsport', 'Vindsport'), title: l('Use the authorised sport infrastructure', 'Ausgewiesene Sportinfrastruktur nutzen', 'Utilizar la infraestructura deportiva autorizada', 'Gebruik toegestane sportinfrastructuur', 'Använd godkänd sportinfrastruktur'), text: l('Los Lances Norte and Valdevaqueros are key reference areas, but the permitted launch, school and bathing zones must be checked on site.', 'Los Lances Norte und Valdevaqueros sind zentrale Referenzbereiche; erlaubte Start-, Schul- und Badezonen müssen dennoch vor Ort geprüft werden.', 'Los Lances Norte y Valdevaqueros son zonas de referencia, pero hay que comprobar sobre el terreno las áreas autorizadas de salida, escuela y baño.', 'Los Lances Norte en Valdevaqueros zijn belangrijke gebieden, maar toegestane start-, school- en zwemzones moeten ter plaatse worden gecontroleerd.', 'Los Lances Norte och Valdevaqueros är viktiga referensområden, men tillåtna start-, skol- och badzoner måste kontrolleras på plats.') },
        { kicker: l('Quiet landscape', 'Ruhige Landschaft', 'Paisaje tranquilo', 'Rustig landschap', 'Lugnt landskap'), title: l('Go early and protect the place', 'Früh starten und den Ort schützen', 'Ir temprano y cuidar el lugar', 'Ga vroeg en bescherm de plek', 'Åk tidigt och skydda platsen'), text: l('Bolonia and natural sections reward an early start. Stay on permitted paths, carry waste out and do not climb or cross closed dune areas.', 'Bolonia und naturnahe Abschnitte belohnen einen frühen Start. Bleibt auf erlaubten Wegen, nehmt Abfall mit und betretet keine gesperrten Dünenbereiche.', 'Bolonia y los tramos naturales se disfrutan mejor temprano. Hay que usar caminos permitidos, retirar los residuos y no atravesar zonas dunares cerradas.', 'Bolonia en natuurlijke delen zijn het mooist vroeg. Blijf op toegestane paden, neem afval mee en betreed geen afgesloten duingebieden.', 'Bolonia och naturliga avsnitt uppskattas bäst tidigt. Håll dig på tillåtna stigar, ta med avfall och gå inte in i stängda dynområden.') }
      ]
    },
    {
      id: 'access',
      eyebrow: l('Practical access', 'Praktischer Zugang', 'Acceso práctico', 'Praktische bereikbaarheid', 'Praktiskt tillträde'),
      title: l('Parking is part of the beach decision', 'Parken gehört zur Strandentscheidung', 'El aparcamiento forma parte de la elección', 'Parkeren hoort bij de strandkeuze', 'Parkering är en del av strandvalet'),
      intro: l('Peak-season traffic, signed restrictions and protected landscapes can change the easy-looking option. Do not rely on one old map pin.', 'Verkehr in der Hochsaison, ausgeschilderte Einschränkungen und Schutzgebiete können eine scheinbar einfache Option verändern. Verlasst euch nicht auf einen alten Karten-Pin.', 'El tráfico de temporada alta, las restricciones señalizadas y los espacios protegidos pueden cambiar una opción que parecía sencilla. No conviene depender de un único punto antiguo en el mapa.', 'Drukte in het hoogseizoen, aangegeven beperkingen en beschermde natuur kunnen een ogenschijnlijk makkelijke optie veranderen. Vertrouw niet op één oude kaartpin.', 'Högsäsongstrafik, skyltade begränsningar och skyddade landskap kan förändra ett till synes enkelt val. Förlita dig inte på en gammal kartmarkering.'),
      cards: [
        { kicker: l('Before leaving', 'Vor der Abfahrt', 'Antes de salir', 'Vóór vertrek', 'Före avfärd'), title: l('Check the destination and a fallback', 'Ziel und Alternative prüfen', 'Comprobar destino y alternativa', 'Controleer bestemming en alternatief', 'Kontrollera mål och alternativ'), text: l('Confirm the intended beach section, current conditions and a second option before driving.', 'Prüft gewünschten Strandabschnitt, aktuelle Bedingungen und eine zweite Option vor der Abfahrt.', 'Confirma el tramo de playa, las condiciones actuales y una segunda opción antes de conducir.', 'Controleer het beoogde stranddeel, de actuele omstandigheden en een tweede optie vóór vertrek.', 'Bekräfta strandavsnitt, aktuella förhållanden och ett alternativ före körning.') },
        { kicker: l('On arrival', 'Bei Ankunft', 'Al llegar', 'Bij aankomst', 'Vid ankomst'), title: l('Signs override online memory', 'Beschilderung schlägt Online-Erinnerung', 'La señalización prevalece sobre internet', 'Borden gaan vóór online informatie', 'Skyltar går före nätminnet'), text: l('Follow current access, parking, environmental and safety signs even when a previous visit or app suggests otherwise.', 'Folgt aktueller Zufahrts-, Park-, Umwelt- und Sicherheitsbeschilderung, auch wenn ein früherer Besuch oder eine App etwas anderes nahelegt.', 'Sigue la señalización vigente de acceso, aparcamiento, medio ambiente y seguridad, aunque una visita anterior o una aplicación indiquen otra cosa.', 'Volg actuele toegangs-, parkeer-, milieu- en veiligheidsborden, ook als een eerder bezoek of app iets anders suggereert.', 'Följ aktuell skyltning för tillträde, parkering, miljö och säkerhet även om ett tidigare besök eller en app säger annat.') }
      ]
    }
  ],
  notice: {
    eyebrow: l('Shared coast', 'Gemeinsame Küste', 'Costa compartida', 'Gedeelde kust', 'Gemensam kust'),
    title: l('Bathing, sport and nature need separate space', 'Baden, Sport und Natur brauchen getrennte Räume', 'Baño, deporte y naturaleza necesitan espacios distintos', 'Zwemmen, sport en natuur hebben eigen ruimte nodig', 'Bad, sport och natur behöver egna ytor'),
    text: l('Use only the currently designated area for your activity. Keep clear of swimmers and wildlife zones, observe flags and barriers, and change beach when the day does not suit the original plan.', 'Nutzt nur den aktuell für eure Aktivität ausgewiesenen Bereich. Haltet Abstand zu Badenden und Naturschutzzonen, beachtet Flaggen und Absperrungen und wechselt den Strand, wenn der Tag nicht zum ursprünglichen Plan passt.', 'Utiliza únicamente la zona designada para tu actividad. Mantén distancia de bañistas y espacios naturales, respeta banderas y barreras y cambia de playa si el día no encaja con el plan inicial.', 'Gebruik alleen het gebied dat op dat moment voor jouw activiteit is aangewezen. Houd afstand van zwemmers en natuurzones, respecteer vlaggen en afzettingen en kies een ander strand als de dag niet past.', 'Använd endast området som för tillfället är avsett för din aktivitet. Håll avstånd till badande och naturzoner, respektera flaggor och avspärrningar och byt strand om dagen inte passar planen.')
  },
  faq: [
    { question: l('Which Tarifa beach is best for swimming?', 'Welcher Strand in Tarifa eignet sich am besten zum Baden?', '¿Qué playa de Tarifa es mejor para bañarse?', 'Welk strand in Tarifa is het beste om te zwemmen?', 'Vilken strand i Tarifa är bäst för bad?'), answer: l('There is no permanent winner. Playa Chica and designated bathing sections may be more comfortable on some days, while flags, wind and sea state decide the safe choice in real time.', 'Es gibt keinen dauerhaft besten Strand. Playa Chica und ausgewiesene Badeabschnitte können an manchen Tagen angenehmer sein; Flaggen, Wind und Seegang entscheiden jedoch aktuell über die sichere Wahl.', 'No hay una opción ganadora permanente. Playa Chica y las zonas señalizadas de baño pueden ser más cómodas algunos días, pero las banderas, el viento y el estado del mar determinan la elección segura.', 'Er is geen vaste winnaar. Playa Chica en aangewezen zwemzones kunnen op sommige dagen prettiger zijn, maar vlaggen, wind en zeegang bepalen de veilige keuze.', 'Det finns ingen ständig vinnare. Playa Chica och markerade badområden kan vara bekvämare vissa dagar, men flaggor, vind och sjö avgör det säkra valet.') },
    { question: l('Is Bolonia close enough for a half day?', 'Eignet sich Bolonia für einen halben Tag?', '¿Bolonia sirve para una excursión de medio día?', 'Is Bolonia geschikt voor een halve dag?', 'Passar Bolonia för en halvdag?'), answer: l('It can, but the dune, beach and nearby Baelo Claudia make a full, unhurried day more rewarding. Allow for seasonal traffic and access conditions.', 'Das ist möglich, doch Düne, Strand und das nahe Baelo Claudia lohnen einen ganzen, entspannten Tag. Saisonverkehr und Zufahrtsbedingungen sollten eingeplant werden.', 'Es posible, pero la duna, la playa y Baelo Claudia cercana merecen una jornada completa y sin prisas. Hay que contar con tráfico estacional y condiciones de acceso.', 'Dat kan, maar de duin, het strand en het nabijgelegen Baelo Claudia verdienen een volledige rustige dag. Houd rekening met seizoensdrukte en bereikbaarheid.', 'Det går, men dynen, stranden och närliggande Baelo Claudia blir bättre som en lugn heldag. Räkna med säsongstrafik och tillträdesförhållanden.') },
    { question: l('Are kitesurfing and swimming zones fixed all year?', 'Sind Kite- und Badezonen ganzjährig unverändert?', '¿Las zonas de kite y baño son iguales todo el año?', 'Zijn kite- en zwemzones het hele jaar hetzelfde?', 'Är kite- och badzoner samma hela året?'), answer: l('Do not assume so. Municipal plans, seasonal operation, signs and temporary safety measures determine actual use. Check the marked areas on arrival.', 'Geht nicht davon aus. Kommunale Pläne, saisonaler Betrieb, Beschilderung und temporäre Sicherheitsmaßnahmen bestimmen die tatsächliche Nutzung. Prüft die markierten Bereiche bei Ankunft.', 'No debe darse por hecho. Los planes municipales, el funcionamiento estacional, la señalización y las medidas temporales determinan el uso real. Comprueba las zonas al llegar.', 'Ga daar niet van uit. Gemeentelijke plannen, seizoensgebruik, borden en tijdelijke veiligheidsmaatregelen bepalen het werkelijke gebruik. Controleer de gemarkeerde zones bij aankomst.', 'Utgå inte från det. Kommunala planer, säsongsdrift, skyltning och tillfälliga säkerhetsåtgärder avgör användningen. Kontrollera markerade områden vid ankomst.') }
  ],
  sources: [officialBeachSource, beachPlanSource],
  related: ['overview', 'wind']
};

export const tarifaGuideContent: Record<TarifaGuideId, TarifaGuideContent> = {
  overview,
  wind,
  beaches
};
