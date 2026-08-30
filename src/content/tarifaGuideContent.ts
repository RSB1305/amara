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
  cards: TarifaGuideCard[];
}

export interface TarifaGuideSource {
  label: LocalizedText;
  href: string;
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
    lead: LocalizedText;
    editorialNote: LocalizedText;
    updated: LocalizedText;
  };
  facts: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
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
  'Tarifa Wind & Kitesurfing Guide | Levante and Poniente',
  'Tarifa Wind- & Kitesurf-Guide | Levante und Poniente',
  'Guía de viento y kitesurf en Tarifa | Levante y Poniente',
  'Tarifa wind- en kitesurfgids | Levante en Poniente',
  'Tarifa vind- och kitesurfguide | Levante och Poniente'
);

const windDescriptions = l(
  'A practical guide to Levante, Poniente, the main Tarifa kite areas and the safety checks that matter before entering the water.',
  'Ein praktischer Guide zu Levante, Poniente, wichtigen Kitezonen und den entscheidenden Sicherheitschecks vor dem Start.',
  'Una guía práctica sobre Levante, Poniente, las principales zonas de kite y las comprobaciones de seguridad antes de entrar al agua.',
  'Een praktische gids voor Levante, Poniente, de belangrijkste kitegebieden en de veiligheidschecks vóór je het water op gaat.',
  'En praktisk guide till Levante, Poniente, de viktigaste kiteområdena och säkerhetskontrollerna innan du går ut på vattnet.'
);

const wind: TarifaGuideContent = {
  id: 'wind',
  token: 'tarifa_wind_kitesurfing_authority',
  seo: buildSeo('2026-08-03-tarifa-wind-kitesurfing-v1.0', 'B', windTitles, windDescriptions),
  navLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  breadcrumbLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa Experience Guide', 'Guía de experiencias en Tarifa', 'Tarifa Experience Guide', 'Tarifa upplevelseguide'),
    title: l('Read the wind before choosing the water', 'Erst den Wind lesen, dann den Spot wählen', 'Leer el viento antes de elegir el agua', 'Lees eerst de wind, kies daarna het water', 'Läs vinden innan du väljer vatten'),
    lead: l('Levante and Poniente give Tarifa two very different faces. This guide explains the practical difference, where the principal kite areas sit and when local instruction matters more than any online guide.', 'Levante und Poniente geben Tarifa zwei sehr unterschiedliche Gesichter. Dieser Guide erklärt den praktischen Unterschied, ordnet die wichtigsten Kitezonen ein und zeigt, wann Hinweise vor Ort wichtiger sind als jeder Online-Guide.', 'Levante y Poniente muestran dos caras muy distintas de Tarifa. Esta guía explica la diferencia práctica, sitúa las principales zonas de kite y aclara cuándo la información local importa más que cualquier guía en línea.', 'Levante en Poniente geven Tarifa twee heel verschillende gezichten. Deze gids legt het praktische verschil uit, plaatst de belangrijkste kitegebieden in context en maakt duidelijk wanneer lokale instructies zwaarder wegen dan welke online gids ook.', 'Levante och Poniente ger Tarifa två helt olika ansikten. Guiden förklarar den praktiska skillnaden, sätter de viktigaste kiteområdena i sitt sammanhang och visar när lokal vägledning väger tyngre än en nätguide.'),
    editorialNote: sharedEditorialNote,
    updated: sharedUpdated
  },
  facts: [
    { label: l('Levante', 'Levante', 'Levante', 'Levante', 'Levante'), value: l('Easterly · often offshore', 'Östlich · häufig ablandig', 'De este · a menudo de tierra', 'Oostelijk · vaak aflandig', 'Ostlig · ofta frånlandsvind') },
    { label: l('Poniente', 'Poniente', 'Poniente', 'Poniente', 'Poniente'), value: l('Westerly · generally more onshore', 'Westlich · meist stärker auflandig', 'De oeste · generalmente más de mar', 'Westelijk · doorgaans meer aanlandig', 'Västlig · generellt mer pålandsvind') },
    { label: l('Daily rule', 'Tägliche Regel', 'Regla diaria', 'Dagelijkse regel', 'Daglig regel'), value: l('Check forecast, flags and zones', 'Vorhersage, Flaggen und Zonen prüfen', 'Revisar previsión, banderas y zonas', 'Controleer verwachting, vlaggen en zones', 'Kontrollera prognos, flaggor och zoner') }
  ],
  sections: [
    {
      id: 'winds',
      eyebrow: l('The two wind systems', 'Die zwei Windsysteme', 'Los dos sistemas de viento', 'De twee windsystemen', 'De två vindsystemen'),
      title: l('Levante and Poniente in practical terms', 'Levante und Poniente praktisch erklärt', 'Levante y Poniente en términos prácticos', 'Levante en Poniente in de praktijk', 'Levante och Poniente i praktiken'),
      intro: l('Direction is only the beginning. Strength, gusts, tide, swell, local effects and your own level all influence whether a session is appropriate.', 'Die Richtung ist nur der Anfang. Stärke, Böen, Gezeiten, Wellengang, lokale Effekte und das eigene Niveau entscheiden mit, ob eine Session angemessen ist.', 'La dirección es solo el principio. Intensidad, rachas, marea, oleaje, efectos locales y nivel personal determinan si una sesión resulta adecuada.', 'Richting is pas het begin. Kracht, windvlagen, getij, deining, lokale effecten en je eigen niveau bepalen samen of een sessie verantwoord is.', 'Riktningen är bara början. Styrka, byar, tidvatten, dyning, lokala effekter och din egen nivå avgör om en session är lämplig.'),
      cards: [
        { kicker: l('East wind', 'Ostwind', 'Viento de este', 'Oostenwind', 'Ostlig vind'), title: l('Levante: powerful and demanding', 'Levante: kraftvoll und anspruchsvoll', 'Levante: potente y exigente', 'Levante: krachtig en veeleisend', 'Levante: kraftfull och krävande'), text: l('Levante is often warmer, drier and offshore or cross-offshore along exposed sections. Flat water can look inviting while the direction increases the consequence of equipment failure or drift.', 'Levante ist häufig wärmer, trockener und an offenen Abschnitten ablandig oder schräg ablandig. Flaches Wasser kann einladend wirken, während die Richtung die Folgen von Materialproblemen oder Abdrift deutlich verschärft.', 'El Levante suele ser más cálido, seco y de tierra o cruzado de tierra en tramos expuestos. El agua plana puede parecer atractiva, aunque la dirección agrava las consecuencias de una avería o una deriva.', 'Levante is vaak warmer, droger en aflandig of schuin aflandig langs open stukken. Vlak water kan aantrekkelijk lijken, terwijl de richting de gevolgen van materiaalpech of afdrijven vergroot.', 'Levante är ofta varmare, torrare och frånlands- eller snett frånlandsvind längs öppna sträckor. Platt vatten kan se lockande ut samtidigt som riktningen ökar konsekvenserna av utrustningsfel eller drift.') },
        { kicker: l('West wind', 'Westwind', 'Viento de oeste', 'Westenwind', 'Västlig vind'), title: l('Poniente: steadier, but never automatic', 'Poniente: gleichmäßiger, aber nie automatisch sicher', 'Poniente: más estable, pero nunca automático', 'Poniente: gelijkmatiger, maar nooit vanzelf veilig', 'Poniente: jämnare, men aldrig automatiskt säker'), text: l('Poniente generally reaches the Atlantic beaches from the sea and may feel more forgiving. Waves, current, changing strength and busy launch areas still require an honest level check.', 'Poniente erreicht die Atlantikstrände meist vom Meer und kann zugänglicher wirken. Wellen, Strömung, wechselnde Stärke und volle Startbereiche verlangen trotzdem eine ehrliche Einschätzung des eigenen Niveaus.', 'El Poniente suele llegar del mar a las playas atlánticas y puede resultar más accesible. Oleaje, corriente, cambios de intensidad y zonas de salida concurridas siguen exigiendo una valoración honesta del nivel.', 'Poniente komt doorgaans vanaf zee aan op de Atlantische stranden en kan toegankelijker voelen. Golven, stroming, wisselende kracht en drukke startzones vragen nog steeds om een eerlijke niveau-inschatting.', 'Poniente når oftast Atlantstränderna från havet och kan kännas mer förlåtande. Vågor, ström, skiftande styrka och trånga startområden kräver ändå en ärlig nivåbedömning.') }
      ]
    },
    {
      id: 'areas',
      eyebrow: l('Main areas', 'Wichtige Bereiche', 'Zonas principales', 'Belangrijkste gebieden', 'Viktiga områden'),
      title: l('Use spot names as orientation, not permission', 'Spotnamen dienen zur Orientierung, nicht als Erlaubnis', 'Los nombres orientan, no conceden permiso', 'Spotnamen geven richting, geen toestemming', 'Spotnamn ger orientering, inte tillstånd'),
      intro: l('Beach zoning, marked channels and local restrictions can change how a familiar name works on a particular day. Current signs always take priority.', 'Strandzonen, markierte Korridore und lokale Einschränkungen können verändern, wie ein bekannter Spot an einem bestimmten Tag funktioniert. Aktuelle Beschilderung hat immer Vorrang.', 'La zonificación, los canales señalizados y las restricciones locales pueden cambiar el uso de un lugar conocido. La señalización vigente siempre tiene prioridad.', 'Strandzonering, gemarkeerde vaargeulen en lokale beperkingen kunnen het gebruik van een bekende plek per dag veranderen. Actuele borden hebben altijd voorrang.', 'Strandzoner, markerade kanaler och lokala begränsningar kan ändra hur en känd plats fungerar en viss dag. Aktuell skyltning gäller alltid först.'),
      cards: [
        { kicker: l('Broad Atlantic beach', 'Weiter Atlantikstrand', 'Amplia playa atlántica', 'Breed Atlantisch strand', 'Bred Atlantstrand'), title: l('Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte'), text: l('A principal kitesurf area with designated school and launch infrastructure in the municipal beach plan. Space does not remove the need to respect bathing areas, wildlife zones and marked access.', 'Eine zentrale Kitesurfzone mit im kommunalen Strandplan ausgewiesener Schul- und Startinfrastruktur. Die Weite entbindet nicht von der Pflicht, Badebereiche, Naturschutzzonen und markierte Zugänge zu respektieren.', 'Una de las principales zonas de kitesurf, con infraestructura de escuelas y salida prevista en el plan municipal. La amplitud no exime de respetar zonas de baño, espacios naturales y accesos señalizados.', 'Een belangrijk kitesurfgebied met school- en startinfrastructuur in het gemeentelijke strandplan. De ruimte betekent niet dat zwemzones, natuurgebieden en gemarkeerde toegangen genegeerd mogen worden.', 'Ett centralt kitesurfområde med skol- och startinfrastruktur i kommunens strandplan. Utrymmet innebär inte att badzoner, naturområden eller markerade tillträden kan ignoreras.') },
        { kicker: l('Wind landmark', 'Windklassiker', 'Referencia del viento', 'Windklassieker', 'Vindklassiker'), title: l('Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros'), text: l('Known for wind sports and a dramatic dune setting. It includes marked areas for watersports and bathers; density and local effects make an on-site assessment essential.', 'Bekannt für Windsport und eindrucksvolle Dünenlandschaft. Es gibt markierte Bereiche für Wassersport und Badende; Auslastung und lokale Effekte machen die Einschätzung vor Ort unverzichtbar.', 'Conocida por los deportes de viento y su paisaje de dunas. Cuenta con zonas señalizadas para deportes y baño; la afluencia y los efectos locales exigen valorar la situación sobre el terreno.', 'Bekend om windsport en het indrukwekkende duinlandschap. Er zijn gemarkeerde zones voor sporters en zwemmers; drukte en lokale effecten maken beoordeling ter plaatse noodzakelijk.', 'Känd för vindsport och dramatiskt dynlandskap. Markerade områden finns för sport och bad; trängsel och lokala effekter gör bedömning på plats nödvändig.') },
        { kicker: l('Protected landscape', 'Geschützte Landschaft', 'Paisaje protegido', 'Beschermd landschap', 'Skyddat landskap'), title: l('Lagoons and river mouths', 'Lagunen und Flussmündungen', 'Lagunas y desembocaduras', 'Lagunes en riviermondingen', 'Laguner och flodmynningar'), text: l('These sensitive environments are not freestyle playgrounds by default. Follow conservation signs and current official rules, and never assume that water access is permitted because others are using it.', 'Diese empfindlichen Lebensräume sind nicht automatisch Freestyle-Reviere. Naturschutzhinweise und aktuelle offizielle Regeln müssen beachtet werden; die Nutzung durch andere ist kein Nachweis einer Erlaubnis.', 'Estos entornos sensibles no son zonas de freestyle por defecto. Hay que seguir la señalización ambiental y las normas vigentes; que otras personas entren al agua no demuestra que esté permitido.', 'Deze kwetsbare gebieden zijn niet automatisch freestylezones. Volg natuurbeschermingsborden en actuele regels; het feit dat anderen het water gebruiken betekent niet dat dit toegestaan is.', 'Dessa känsliga miljöer är inte automatiskt freestyleområden. Följ naturskyltning och aktuella regler; att andra använder vattnet betyder inte att det är tillåtet.') }
      ]
    },
    {
      id: 'checklist',
      eyebrow: l('Before launching', 'Vor dem Start', 'Antes de salir', 'Vóór de start', 'Före start'),
      title: l('A five-minute check that changes the session', 'Fünf Minuten, die die Session verändern', 'Cinco minutos que cambian la sesión', 'Vijf minuten die de sessie veranderen', 'Fem minuter som förändrar sessionen'),
      intro: l('Experienced riders also pause before rigging. Conditions, zoning and rescue coverage are day-specific.', 'Auch erfahrene Fahrer halten vor dem Aufbau kurz inne. Bedingungen, Zonierung und Rettungsabdeckung sind tagesabhängig.', 'Los riders con experiencia también se detienen antes de montar. Las condiciones, la zonificación y la cobertura de rescate dependen del día.', 'Ook ervaren riders staan stil vóór het optuigen. Omstandigheden, zonering en reddingsdekking verschillen per dag.', 'Även erfarna åkare stannar upp före riggning. Förhållanden, zoner och räddningstäckning varierar från dag till dag.'),
      cards: [
        { kicker: l('1', '1', '1', '1', '1'), title: l('Forecast and real water', 'Vorhersage und tatsächliches Wasserbild', 'Previsión y realidad en el agua', 'Verwachting en werkelijk waterbeeld', 'Prognos och verkligt vatten'), text: l('Compare the forecast with what is happening at the beach: direction, gusts, clouds, swell and other competent riders.', 'Vergleicht die Vorhersage mit dem tatsächlichen Bild am Strand: Richtung, Böen, Wolken, Wellengang und andere kompetente Fahrer.', 'Compara la previsión con lo que sucede en la playa: dirección, rachas, nubes, oleaje y otros riders competentes.', 'Vergelijk de verwachting met wat je op het strand ziet: richting, vlagen, bewolking, deining en andere ervaren riders.', 'Jämför prognosen med verkligheten på stranden: riktning, byar, moln, dyning och andra kompetenta åkare.') },
        { kicker: l('2', '2', '2', '2', '2'), title: l('Zone, flag and exit plan', 'Zone, Flagge und Ausstiegsplan', 'Zona, bandera y plan de salida', 'Zone, vlag en uitwijkplan', 'Zon, flagga och exitplan'), text: l('Identify the permitted launch, bathing areas, obstacles and where you would land if the wind or equipment changed.', 'Klärt den erlaubten Startbereich, Badezonen, Hindernisse und den Landeplatz für den Fall, dass Wind oder Material sich verändern.', 'Identifica la zona autorizada de salida, las áreas de baño, los obstáculos y dónde aterrizarías si cambian el viento o el material.', 'Bepaal de toegestane start, zwemzones, obstakels en waar je landt als wind of materiaal verandert.', 'Identifiera tillåten start, badzoner, hinder och var du skulle landa om vind eller utrustning förändras.') },
        { kicker: l('3', '3', '3', '3', '3'), title: l('Level, equipment and local advice', 'Niveau, Material und lokaler Rat', 'Nivel, material y consejo local', 'Niveau, materiaal en lokaal advies', 'Nivå, utrustning och lokala råd'), text: l('If the match is uncertain, use a qualified local school or guide. Beginners should not independently interpret strong or offshore conditions.', 'Wenn die Einschätzung unsicher ist, nutzt eine qualifizierte lokale Schule oder einen Guide. Anfänger sollten starke oder ablandige Bedingungen nicht eigenständig interpretieren.', 'Si la situación no está clara, recurre a una escuela o guía local cualificado. Los principiantes no deben interpretar por su cuenta condiciones fuertes o de tierra.', 'Bij twijfel kies je een gekwalificeerde lokale school of gids. Beginners moeten harde of aflandige omstandigheden niet zelfstandig beoordelen.', 'Vid osäkerhet bör du anlita en kvalificerad lokal skola eller guide. Nybörjare ska inte själva bedöma starka eller frånlandsvindar.') }
      ]
    }
  ],
  notice: {
    eyebrow: l('Safety first', 'Sicherheit zuerst', 'La seguridad primero', 'Veiligheid eerst', 'Säkerheten först'),
    title: l('Offshore wind changes the consequence of every mistake', 'Ablandiger Wind verändert die Folgen jedes Fehlers', 'El viento de tierra cambia las consecuencias de cualquier error', 'Aflandige wind vergroot de gevolgen van elke fout', 'Frånlandsvind förändrar följderna av varje misstag'),
    text: l('Do not enter the water because a spot is famous or other riders are out. Respect current zones and flags, never ride beyond your proven level, and seek qualified local advice whenever conditions are strong, gusty or offshore.', 'Geht nicht aufs Wasser, nur weil ein Spot bekannt ist oder andere fahren. Beachtet aktuelle Zonen und Flaggen, überschreitet niemals euer nachgewiesenes Niveau und holt bei starken, böigen oder ablandigen Bedingungen qualifizierten Rat vor Ort ein.', 'No entres al agua porque el lugar sea famoso o porque haya otras personas navegando. Respeta zonas y banderas, no superes tu nivel demostrado y busca asesoramiento local cualificado con viento fuerte, racheado o de tierra.', 'Ga niet het water op omdat een spot beroemd is of anderen varen. Respecteer actuele zones en vlaggen, blijf binnen je aantoonbare niveau en vraag gekwalificeerd lokaal advies bij harde, vlagerige of aflandige wind.', 'Gå inte ut bara för att platsen är berömd eller andra är på vattnet. Respektera aktuella zoner och flaggor, håll dig inom bevisad nivå och sök kvalificerad lokal rådgivning vid stark, byig eller frånlandsvind.')
  },
  faq: [
    { question: l('Which wind is better for beginners?', 'Welcher Wind ist besser für Anfänger?', '¿Qué viento es mejor para principiantes?', 'Welke wind is beter voor beginners?', 'Vilken vind är bäst för nybörjare?'), answer: l('Poniente often feels more accessible because it generally reaches the Atlantic beaches from the sea, but there is no automatic beginner day. A qualified school must assess the actual location, strength, waves and zoning.', 'Poniente wirkt oft zugänglicher, weil er die Atlantikstrände meist vom Meer erreicht. Einen automatisch sicheren Anfängertag gibt es dennoch nicht. Eine qualifizierte Schule muss Ort, Stärke, Wellen und Zonierung aktuell beurteilen.', 'El Poniente suele resultar más accesible porque llega generalmente del mar, pero no existe un día automáticamente apto para principiantes. Una escuela cualificada debe valorar lugar, intensidad, olas y zonificación.', 'Poniente voelt vaak toegankelijker omdat hij meestal vanaf zee komt, maar er bestaat geen automatisch veilige beginnersdag. Een gekwalificeerde school moet plek, kracht, golven en zonering beoordelen.', 'Poniente känns ofta mer tillgänglig eftersom den vanligtvis kommer från havet, men ingen dag är automatiskt en nybörjardag. En kvalificerad skola måste bedöma plats, styrka, vågor och zoner.') },
    { question: l('Can I kite anywhere along Los Lances?', 'Kann ich überall an Los Lances kiten?', '¿Se puede hacer kite en cualquier punto de Los Lances?', 'Kun je overal langs Los Lances kiten?', 'Kan man kitesurfa överallt längs Los Lances?'), answer: l('No. Los Lances includes different sections, bathing areas, protected environments and marked watersport infrastructure. Use only the currently permitted zones and access points.', 'Nein. Los Lances umfasst unterschiedliche Abschnitte, Badebereiche, geschützte Lebensräume und markierte Wassersport-Infrastruktur. Nutzt nur aktuell erlaubte Zonen und Zugänge.', 'No. Los Lances incluye tramos distintos, zonas de baño, espacios protegidos e infraestructura señalizada para deportes. Utiliza únicamente zonas y accesos autorizados.', 'Nee. Los Lances bestaat uit verschillende delen, zwemzones, beschermde natuur en gemarkeerde watersportinfrastructuur. Gebruik alleen de op dat moment toegestane zones en toegangen.', 'Nej. Los Lances omfattar olika delar, badzoner, skyddade miljöer och markerad vattensportinfrastruktur. Använd endast för tillfället tillåtna zoner och tillträden.') },
    { question: l('Do online forecasts replace local advice?', 'Ersetzen Online-Vorhersagen lokalen Rat?', '¿Las previsiones en línea sustituyen el consejo local?', 'Vervangen online verwachtingen lokaal advies?', 'Ersätter nätprognoser lokala råd?'), answer: l('No. Forecasts are planning tools. Beach observations, official flags, marked zones and qualified local operators provide the final context.', 'Nein. Vorhersagen sind Planungswerkzeuge. Beobachtungen am Strand, offizielle Flaggen, markierte Zonen und qualifizierte lokale Anbieter liefern den entscheidenden Kontext.', 'No. Las previsiones sirven para planificar. La observación en la playa, las banderas, las zonas señalizadas y los operadores cualificados aportan el contexto definitivo.', 'Nee. Verwachtingen zijn planningstools. Observatie op het strand, officiële vlaggen, gemarkeerde zones en gekwalificeerde lokale aanbieders geven de doorslaggevende context.', 'Nej. Prognoser är planeringsverktyg. Observationer på stranden, officiella flaggor, markerade zoner och kvalificerade lokala aktörer ger det avgörande sammanhanget.') }
  ],
  sources: [officialKiteSource, beachPlanSource, officialBeachSource],
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
