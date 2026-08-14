import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface TarifaWeatherSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface TarifaWeatherLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  comparison: {
    eyebrow: string;
    title: string;
    intro: string;
    periodLabel: string;
    monthLabels: [string, string];
    places: Array<{ place: string; july: string; august: string }>;
    note: string;
  };
  sections: TarifaWeatherSection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    areasLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const tarifaWeatherSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-weather-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Tarifa Weather & Climate: Seasons and Best Time to Visit',
      description: 'Plan for Tarifa weather, climate, seasons, Levante and Poniente, with practical advice for a real stay at AMARA in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wetter & Klima in Tarifa: Jahreszeiten und beste Reisezeit',
      description: 'Wetter, Klima, Jahreszeiten, Levante und Poniente in Tarifa – mit praktischen Hinweisen für euren Aufenthalt bei AMARA in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Tiempo y clima en Tarifa: estaciones y mejor época para viajar',
      description: 'Clima, estaciones, Levante y Poniente en Tarifa, con consejos prácticos para una estancia real en AMARA, en La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Weer en klimaat in Tarifa: seizoenen en beste reistijd',
      description: 'Plan jullie verblijf rond het weer, klimaat, de seizoenen, Levante en Poniente in Tarifa, vanuit AMARA in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Väder och klimat i Tarifa: årstider och bästa restid',
      description: 'Planera för Tarifas väder, klimat, årstider, Levante och Poniente – med praktiska råd för en vistelse på AMARA i La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sharedSources = {
  tarifaNormals: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=6001',
  sevillaNormals: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5783',
  cordobaNormals: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=5402',
  juntaWind: 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page/-/asset_publisher/4V1kD5gLiJkq/content/viento/20151',
  valdevaquerosRoad: 'https://www.juntadeandalucia.es/organismos/fomentoarticulaciondelterritorioyvivienda/servicios/actualidad/noticias/detalle/516190.html'
} as const;

const comparisonPlaces = [
  { place: 'Tarifa', july: '23.9°C', august: '24.5°C' },
  { place: 'Sevilla Airport', july: '36.0°C', august: '35.5°C' },
  { place: 'Córdoba Airport', july: '36.9°C', august: '36.5°C' }
];

export const tarifaWeatherContent: Record<AmaraLanguage, TarifaWeatherLocale> = {
  en: {
    navLabel: 'Weather & Seasons',
    hero: {
      eyebrow: 'Tarifa weather guide',
      title: 'Tarifa weather & seasons',
      standfirst: 'Tarifa does not have one single holiday season. Its coastal climate, Levante and Poniente shape how a multi-day stay feels — and from AMARA in La Marina, the useful question is how to make each kind of day work well.',
      note: 'A host-written climate guide based on official normals. Climate averages describe a pattern, not the forecast for your dates.',
      updated: 'Climate evidence reviewed August 2026'
    },
    facts: [
      { label: 'Climate evidence', value: 'AEMET 1981–2010 normals' },
      { label: 'Summer pattern', value: 'Mild for inland Andalusia · very dry' },
      { label: 'Wind names', value: 'Levante · Poniente' },
      { label: 'AMARA base', value: 'La Marina · Mar Adriático 29' }
    ],
    comparison: {
      eyebrow: 'A useful summer comparison',
      title: 'Tarifa is structurally milder than inland Andalusia in midsummer',
      intro: 'AEMET’s 1981–2010 average daily maxima show a clear coastal–inland difference. These are monthly climate averages, not a ceiling or a promise for any individual day.',
      periodLabel: 'Average daily maximum',
      monthLabels: ['July', 'August'],
      places: comparisonPlaces,
      note: 'July / August · AEMET 1981–2010 normals'
    },
    sections: [
      {
        id: 'climate-at-a-glance',
        eyebrow: '01 · The broad pattern',
        title: 'Tarifa climate at a glance',
        paragraphs: [
          'Tarifa’s position on the Strait gives it a maritime climate: summer maximums are moderated compared with inland Andalusia, while the year remains windy and the colder half carries much more of the rain.',
          'For a real stay, that means summer heat assumptions borrowed from Seville or Córdoba can mislead, but so can the idea that every coastal day will be calm and cloudless. Check the forecast for the dates, then keep one flexible option in the day.',
          'At AMARA, a supermarket directly opposite makes a quick change of meal or beach plan simple, while the Old Town remains about 10–15 minutes away on foot when the weather suits a walk.'
        ]
      },
      {
        id: 'levante-poniente',
        eyebrow: '02 · The two names you will hear',
        title: 'Levante & Poniente in an ordinary Tarifa stay',
        paragraphs: [
          'Levante is the easterly wind and is especially persistent around the Strait; Poniente arrives from the west and is associated with Atlantic weather. Direction, strength and local shelter all affect how either wind feels.',
          'For a normal holiday, the practical point is not to diagnose a watersports day. Wind can change the comfort of an exposed beach, a walk, a terrace or a westbound drive, so choose the setting after checking current conditions.',
          'From AMARA, town streets and the apartment give you alternatives to an exposed coast. If you drive toward Valdevaqueros or Punta Paloma, check road information too: the Junta regularly removes sand moved from the live dune onto the A-2325.'
        ]
      },
      {
        id: 'spring',
        eyebrow: '03 · Spring',
        title: 'Longer days, with room for changing conditions',
        paragraphs: [
          'Spring moves from the wetter part of the Tarifa year toward the drier summer pattern, but sunshine, showers and wind can still alternate over a multi-day visit.',
          'It is a good season for combining town, coast and landscape, provided the plan has layers, a rain option and no expectation that every afternoon will feel like summer.',
          'At AMARA, cooling-and-heating air-conditioning, heating and the wood-burning fireplace support cooler evenings, while practical westbound car access lets you use a brighter coastal window without making the whole stay depend on it.'
        ]
      },
      {
        id: 'summer',
        eyebrow: '04 · Summer',
        title: 'Dry, bright and milder than inland Andalusia',
        paragraphs: [
          'AEMET normals show very little rain in Tarifa in June, July and August. Average daily maxima are 23.9°C in July and 24.5°C in August, far below the corresponding inland readings at Sevilla and Córdoba airports.',
          'That comparison describes the climate, not tomorrow’s temperature. Summer can still bring strong sun, warm spells and persistent wind, so shade, water, sun protection and a current forecast remain part of the day.',
          'AMARA’s air-conditioning provides cooling at home. From La Marina you can walk to the Old Town in roughly 10–15 minutes or use the practical westbound route for the Atlantic coast, choosing timing and destination for the day’s conditions.'
        ]
      },
      {
        id: 'autumn',
        eyebrow: '05 · Autumn',
        title: 'A gradual seasonal change, not an instant switch',
        paragraphs: [
          'September still sits close to the summer pattern in AEMET’s temperature and rainfall normals, while October and November show a marked rise in average rainfall and a steady fall in temperature.',
          'Autumn can therefore offer rewarding beach, walking and town days, but a longer stay benefits from decisions made one or two days at a time rather than a fixed week of outdoor plans.',
          'At AMARA, the supermarket opposite is useful when weather changes the evening, and the apartment’s heating, cooling and wood-burning fireplace make it easier to move between a warm afternoon and a cooler or wetter night.'
        ]
      },
      {
        id: 'winter',
        eyebrow: '06 · Winter',
        title: 'Mild coastal temperatures, with more wind and rain in the mix',
        paragraphs: [
          'Winter in Tarifa remains mild in coastal-climate terms, but AEMET normals place much more rainfall in December, January and February than in summer. Wind and passing fronts can define individual days.',
          'The season rewards a stay with indoor comfort, useful everyday services and the freedom to move a walk or coastal outing to the better part of the forecast. It should not be sold as guaranteed winter sun.',
          'AMARA offers heating, cooling-and-heating air-conditioning and a wood-burning fireplace, with groceries directly opposite. This is only the seasonal overview; a dedicated winter-stay guide will cover longer routines separately.'
        ]
      },
      {
        id: 'best-time',
        eyebrow: '07 · Choosing your dates',
        title: 'Plan around the weather you prefer, not one “best season”',
        paragraphs: [
          'The best time to visit Tarifa depends on the days you want: dry summer rhythm, quieter walking weather, a mixed coast-and-town break or a longer winter stay. No month can guarantee a particular wind or sky.',
          'Start with climate for the broad pattern, then use the short-range forecast for actual plans. Keep technical wind and spot decisions with current specialist information rather than a seasonal generalisation.',
          'AMARA works as a flexible La Marina base: the Old Town is walkable, the western coast is practical by car, and the reserved underground space lets the car stay put when the better plan is close to home.'
        ]
      },
      {
        id: 'amara-by-season',
        eyebrow: '08 · Your base in La Marina',
        title: 'The AMARA version, season by season',
        paragraphs: [
          'Spring: bring layers and keep town, coast and landscape options open; AMARA’s heating and wood-burning fireplace give cooler evenings a comfortable landing.',
          'Summer: plan for sun and wind as well as temperature; cooling at the apartment, a supermarket opposite and easy choices between walking and a westbound drive keep the day uncomplicated.',
          'Autumn: decide from the nearer forecast as rainfall becomes more likely; the apartment’s heating and cooling help when daytime and evening feel different.',
          'Winter: prioritise comfort and flexibility; heating, the wood-burning fireplace, reserved underground parking and everyday shopping opposite make a change of plan easy.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue planning',
      title: 'Put the weather into place',
      links: [
        { token: 'tarifa_geography', label: 'Geography & Orientation', text: 'See how the Strait, Atlantic coast and westbound direction shape Tarifa.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Watersports', text: 'Continue to the specialist guide for wind systems, safety and watersports decisions.' },
        { token: 'tarifa_winter_stays', label: 'Winter Stays', text: 'Continue to the dedicated guide for a quieter, longer stay with changing Atlantic weather.' }
      ]
    },
    sources: {
      eyebrow: 'Evidence',
      title: 'Official climate and wind sources',
      intro: 'Climate statements use AEMET’s official 1981–2010 normals. Wind and dune-road context comes from the Junta de Andalucía.',
      checked: 'Sources reviewed August 2026',
      links: [
        { label: 'AEMET · Tarifa normals', text: 'Monthly temperature, rainfall and rain-day averages for station 6001.', href: sharedSources.tarifaNormals },
        { label: 'AEMET · Sevilla Airport normals', text: 'Official inland comparison for the July and August average daily maxima.', href: sharedSources.sevillaNormals },
        { label: 'AEMET · Córdoba Airport normals', text: 'Official inland comparison for the July and August average daily maxima.', href: sharedSources.cordobaNormals },
        { label: 'Junta de Andalucía · Wind in Andalusia', text: 'Regional account of Levante and Poniente around the Strait.', href: sharedSources.juntaWind },
        { label: 'Junta de Andalucía · Valdevaqueros dune road', text: '2024 works removing dune sand from the A-2325 toward Punta Paloma.', href: sharedSources.valdevaquerosRoad }
      ]
    },
    closing: {
      eyebrow: 'Choose a flexible base',
      title: 'Let Tarifa change the day, not the stay',
      body: 'AMARA in La Marina keeps the Old Town, everyday shopping and the western coast within a practical routine, with indoor comfort for the moments when the forecast changes the plan.',
      locationLabel: 'Explore Tarifa Location',
      areasLabel: 'Compare where to stay'
    }
  },
  de: {
    navLabel: 'Wetter & Jahreszeiten',
    hero: {
      eyebrow: 'Tarifa Wetter-Guide',
      title: 'Wetter & Jahreszeiten in Tarifa',
      standfirst: 'Tarifa hat nicht nur eine einzige Reisesaison. Küstenklima, Levante und Poniente prägen mehrtägige Aufenthalte – und bei AMARA in La Marina zählt vor allem, wie sich aus jedem Wetter ein guter Tag machen lässt.',
      note: 'Ein von Gastgebern verfasster Klima-Guide auf Basis offizieller Normalwerte. Klimamittel beschreiben ein Muster, nicht die Vorhersage für eure Reisedaten.',
      updated: 'Klimadaten geprüft im August 2026'
    },
    facts: [
      { label: 'Klimadaten', value: 'AEMET-Normalwerte 1981–2010' },
      { label: 'Sommermuster', value: 'Milder als im andalusischen Inland · sehr trocken' },
      { label: 'Windnamen', value: 'Levante · Poniente' },
      { label: 'AMARA-Basis', value: 'La Marina · Mar Adriático 29' }
    ],
    comparison: {
      eyebrow: 'Ein hilfreicher Sommervergleich',
      title: 'Tarifas Hochsommer ist klimatisch deutlich milder als das andalusische Inland',
      intro: 'Die mittleren Tageshöchstwerte von AEMET für 1981–2010 zeigen den klaren Unterschied zwischen Küste und Inland. Es sind Monatsmittel, keine Obergrenze und kein Versprechen für einzelne Tage.',
      periodLabel: 'Mittleres Tagesmaximum',
      monthLabels: ['Juli', 'August'],
      places: [
        { place: 'Tarifa', july: '23,9 °C', august: '24,5 °C' },
        { place: 'Flughafen Sevilla', july: '36,0 °C', august: '35,5 °C' },
        { place: 'Flughafen Córdoba', july: '36,9 °C', august: '36,5 °C' }
      ],
      note: 'Juli / August · AEMET-Normalwerte 1981–2010'
    },
    sections: [
      {
        id: 'climate-at-a-glance', eyebrow: '01 · Das große Muster', title: 'Tarifas Klima auf einen Blick', paragraphs: [
          'Die Lage an der Meerenge gibt Tarifa ein maritim geprägtes Klima: Die sommerlichen Höchstwerte sind gegenüber dem andalusischen Inland gedämpft, Wind begleitet das Jahr und deutlich mehr Regen fällt in der kühleren Jahreshälfte.',
          'Für den Aufenthalt heißt das: Sommererwartungen aus Sevilla oder Córdoba passen hier ebenso wenig wie die Annahme, jeder Küstentag sei windstill und wolkenlos. Prüft die Vorhersage und haltet eine Tagesoption flexibel.',
          'Bei AMARA erleichtert der Supermarkt direkt gegenüber einen spontanen Wechsel von Essens- oder Strandplänen; die Altstadt bleibt bei passendem Wetter etwa 10–15 Gehminuten entfernt.'
        ]
      },
      {
        id: 'levante-poniente', eyebrow: '02 · Zwei Namen, die ihr oft hört', title: 'Levante & Poniente im normalen Tarifa-Urlaub', paragraphs: [
          'Levante ist der Ostwind und rund um die Meerenge besonders ausdauernd; Poniente kommt aus Westen und gehört zum atlantischen Wettergeschehen. Richtung, Stärke und lokaler Schutz bestimmen, wie sich beide anfühlen.',
          'Im normalen Urlaub geht es nicht darum, einen Wassersporttag fachlich zu beurteilen. Wind verändert den Komfort an einem offenen Strand, beim Spaziergang, auf einer Terrasse oder bei der Fahrt nach Westen – wählt den Ort nach den aktuellen Bedingungen.',
          'Von AMARA bieten Stadt und Apartment Alternativen zur offenen Küste. Geht es mit dem Auto Richtung Valdevaqueros oder Punta Paloma, prüft auch die Straßenlage: Die Junta lässt regelmäßig Sand der aktiven Düne von der A-2325 räumen.'
        ]
      },
      {
        id: 'spring', eyebrow: '03 · Frühling', title: 'Längere Tage mit Spielraum für wechselndes Wetter', paragraphs: [
          'Im Frühling geht Tarifa von der regenreicheren Jahreshälfte allmählich in den trockenen Sommer über; Sonne, Schauer und Wind können sich während eines mehrtägigen Aufenthalts trotzdem abwechseln.',
          'Für eine Mischung aus Stadt, Küste und Natur ist das eine schöne Zeit, wenn leichte Schichten, eine Regenoption und keine Erwartung an durchgehend sommerliche Nachmittage zum Plan gehören.',
          'Bei AMARA sorgen Klimaanlage mit Kühl- und Heizfunktion, Heizung und Holzkamin an kühleren Abenden für Komfort; die praktische Ausfahrt nach Westen hilft, ein sonniges Zeitfenster an der Küste zu nutzen.'
        ]
      },
      {
        id: 'summer', eyebrow: '04 · Sommer', title: 'Trocken, hell und milder als im Inland', paragraphs: [
          'Die AEMET-Normalwerte zeigen für Juni, Juli und August sehr wenig Niederschlag. Tarifas mittlere Tageshöchstwerte liegen im Juli bei 23,9 °C und im August bei 24,5 °C – weit unter Sevilla und Córdoba.',
          'Dieser Vergleich beschreibt das Klima, nicht die Temperatur von morgen. Auch im Sommer gehören starke Sonne, warme Phasen und anhaltender Wind zu den Möglichkeiten; Schatten, Wasser, Sonnenschutz und die aktuelle Vorhersage bleiben wichtig.',
          'Bei AMARA kühlt die Klimaanlage das Apartment. Von La Marina erreicht ihr die Altstadt in etwa 10–15 Minuten zu Fuß oder fahrt praktisch nach Westen an die Atlantikküste – passend zu Bedingungen und Tageszeit.'
        ]
      },
      {
        id: 'autumn', eyebrow: '05 · Herbst', title: 'Ein allmählicher Wechsel statt plötzlichem Saisonende', paragraphs: [
          'Der September liegt in den Temperatur- und Niederschlagswerten von AEMET noch nah am Sommer; im Oktober und November steigt der mittlere Regen deutlich, während die Temperaturen nach und nach sinken.',
          'Strand, Spaziergänge und Stadt können im Herbst sehr lohnend sein. Bei einem längeren Aufenthalt lohnt es sich jedoch, ein bis zwei Tage im Voraus zu entscheiden statt eine ganze Outdoor-Woche festzulegen.',
          'Bei AMARA hilft der Supermarkt gegenüber, wenn das Wetter den Abend verändert; Heizung, Kühl- und Heizklimaanlage sowie Holzkamin fangen den Wechsel zwischen warmem Nachmittag und kühlerer oder nasser Nacht auf.'
        ]
      },
      {
        id: 'winter', eyebrow: '06 · Winter', title: 'Mildes Küstenklima, aber mehr Wind und Regen', paragraphs: [
          'Der Winter bleibt für ein Küstenklima mild, doch die AEMET-Normalwerte weisen für Dezember, Januar und Februar viel mehr Niederschlag aus als für den Sommer. Wind und Fronten können einzelne Tage prägen.',
          'Eine gute Winterbasis bietet Innenkomfort, praktische Versorgung und die Freiheit, Spaziergang oder Küstenausflug in das bessere Wetterfenster zu schieben. Garantierter Wintersonnenschein wäre das falsche Versprechen.',
          'AMARA bietet Heizung, Klimaanlage mit Kühl- und Heizfunktion und einen Holzkamin; Lebensmittel gibt es direkt gegenüber. Hier bleibt es beim Überblick – längere Winterroutinen gehören in den eigenen Winter-Guide.'
        ]
      },
      {
        id: 'best-time', eyebrow: '07 · Reisedaten wählen', title: 'Plant nach eurem Wunsch-Wetter statt nach einer „besten Reisezeit“', paragraphs: [
          'Die beste Reisezeit für Tarifa hängt von euren Wunschtagen ab: trockener Sommerrhythmus, ruhigeres Wanderwetter, eine Mischung aus Küste und Stadt oder ein längerer Winteraufenthalt. Kein Monat garantiert Wind oder Himmel.',
          'Nutzt das Klima für das grobe Muster und die Kurzfristprognose für den tatsächlichen Plan. Fachliche Wind- und Spotentscheidungen gehören zu aktuellen Spezialinformationen, nicht zu einer Saisonpauschale.',
          'AMARA bleibt eine flexible Basis in La Marina: Die Altstadt ist zu Fuß erreichbar, die Westküste praktisch mit dem Auto, und auf dem reservierten Tiefgaragenplatz kann der Wagen stehen bleiben, wenn der bessere Plan nah ist.'
        ]
      },
      {
        id: 'amara-by-season', eyebrow: '08 · Eure Basis in La Marina', title: 'Die AMARA-Version nach Jahreszeit', paragraphs: [
          'Frühling: Packt leichte Schichten ein und haltet Stadt, Küste und Natur offen; Heizung und Holzkamin machen kühlere Abende gemütlich.',
          'Sommer: Plant neben der Temperatur auch Sonne und Wind ein; Kühlung, der Supermarkt gegenüber und die Wahl zwischen Spaziergang und Westfahrt halten den Tag unkompliziert.',
          'Herbst: Entscheidet nach der näheren Vorhersage, wenn Regen wahrscheinlicher wird; Heizen und Kühlen gleichen Unterschiede zwischen Tag und Abend aus.',
          'Winter: Komfort und Flexibilität zählen; Heizung, Holzkamin, reservierte Tiefgarage und Einkaufen direkt gegenüber machen Planänderungen leicht.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterplanen', title: 'Das Wetter räumlich einordnen', links: [
        { token: 'tarifa_geography', label: 'Geografie & Orientierung', text: 'Wie Meerenge, Atlantikküste und die Richtung nach Westen Tarifa prägen.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Wassersport', text: 'Der Fachguide für Windsysteme, Sicherheit und Wassersportentscheidungen.' },
        { token: 'tarifa_winter_stays', label: 'Winteraufenthalte', text: 'Der eigene Guide für einen ruhigeren, längeren Aufenthalt bei wechselhaftem Atlantikwetter.' }
      ]
    },
    sources: {
      eyebrow: 'Belege', title: 'Offizielle Klima- und Windquellen', intro: 'Die Klimaaussagen beruhen auf den offiziellen AEMET-Normalwerten 1981–2010. Wind- und Dünenstraßenkontext stammen von der Junta de Andalucía.', checked: 'Quellen geprüft im August 2026', links: [
        { label: 'AEMET · Normalwerte Tarifa', text: 'Monatswerte für Temperatur, Niederschlag und Regentage an Station 6001.', href: sharedSources.tarifaNormals },
        { label: 'AEMET · Normalwerte Flughafen Sevilla', text: 'Offizieller Inlandvergleich für die mittleren Tageshöchstwerte im Juli und August.', href: sharedSources.sevillaNormals },
        { label: 'AEMET · Normalwerte Flughafen Córdoba', text: 'Offizieller Inlandvergleich für die mittleren Tageshöchstwerte im Juli und August.', href: sharedSources.cordobaNormals },
        { label: 'Junta de Andalucía · Wind in Andalusien', text: 'Regionale Einordnung von Levante und Poniente rund um die Meerenge.', href: sharedSources.juntaWind },
        { label: 'Junta de Andalucía · Straße an der Valdevaqueros-Düne', text: 'Arbeiten von 2024 zur Sandräumung auf der A-2325 Richtung Punta Paloma.', href: sharedSources.valdevaquerosRoad }
      ]
    },
    closing: { eyebrow: 'Eine flexible Basis wählen', title: 'Lasst Tarifa den Tag verändern, nicht den Aufenthalt', body: 'AMARA in La Marina hält Altstadt, Einkauf und Westküste in einer praktischen Routine zusammen – mit Innenkomfort, wenn die Vorhersage den Plan verändert.', locationLabel: 'Tarifa Lage entdecken', areasLabel: 'Wohnlagen vergleichen' }
  },
  es: {
    navLabel: 'Tiempo y estaciones',
    hero: {
      eyebrow: 'Guía del tiempo en Tarifa', title: 'Tiempo y estaciones en Tarifa', standfirst: 'Tarifa no tiene una única temporada de vacaciones. Su clima costero, el Levante y el Poniente cambian el ritmo de una estancia de varios días; desde AMARA, en La Marina, lo importante es saber aprovechar bien cada tipo de jornada.', note: 'Una guía climática escrita por anfitriones y basada en valores normales oficiales. Las medias describen un patrón, no el pronóstico para vuestras fechas.', updated: 'Datos climáticos revisados en agosto de 2026'
    },
    facts: [
      { label: 'Evidencia climática', value: 'Valores normales AEMET 1981–2010' },
      { label: 'Patrón de verano', value: 'Más suave que el interior andaluz · muy seco' },
      { label: 'Vientos', value: 'Levante · Poniente' },
      { label: 'Base AMARA', value: 'La Marina · Mar Adriático 29' }
    ],
    comparison: {
      eyebrow: 'Una comparación útil de verano', title: 'El pleno verano de Tarifa es climáticamente mucho más suave que el interior andaluz', intro: 'Las máximas diarias medias de AEMET para 1981–2010 muestran una diferencia clara entre costa e interior. Son medias mensuales, no un límite ni una promesa para un día concreto.', periodLabel: 'Máxima diaria media', monthLabels: ['Julio', 'Agosto'], places: [
        { place: 'Tarifa', july: '23,9 °C', august: '24,5 °C' },
        { place: 'Aeropuerto de Sevilla', july: '36,0 °C', august: '35,5 °C' },
        { place: 'Aeropuerto de Córdoba', july: '36,9 °C', august: '36,5 °C' }
      ], note: 'Julio / agosto · valores normales AEMET 1981–2010'
    },
    sections: [
      { id: 'climate-at-a-glance', eyebrow: '01 · El patrón general', title: 'El clima de Tarifa de un vistazo', paragraphs: [
        'La situación de Tarifa en el Estrecho crea un clima marítimo: las máximas estivales son más moderadas que en el interior andaluz, el viento acompaña todo el año y la mitad más fresca concentra mucha más lluvia.',
        'Para una estancia real, no conviene trasladar aquí las expectativas de calor de Sevilla o Córdoba, ni esperar que todos los días costeros sean tranquilos y despejados. Mirad la previsión y dejad una alternativa abierta.',
        'En AMARA, el supermercado justo enfrente simplifica un cambio de comida o de plan de playa; cuando apetece caminar, el casco antiguo queda a unos 10–15 minutos a pie.'
      ] },
      { id: 'levante-poniente', eyebrow: '02 · Dos nombres cotidianos', title: 'Levante y Poniente durante una estancia normal', paragraphs: [
        'El Levante sopla del este y destaca por su persistencia en el Estrecho; el Poniente llega del oeste y se asocia al tiempo atlántico. La dirección, la intensidad y el abrigo local cambian cómo se siente cada uno.',
        'En unas vacaciones normales no hace falta interpretar una jornada técnica de deportes acuáticos. El viento cambia el confort de una playa expuesta, un paseo, una terraza o una salida hacia el oeste, así que elegid el entorno con datos actuales.',
        'Desde AMARA, la ciudad y el apartamento ofrecen alternativas a la costa abierta. Si vais en coche hacia Valdevaqueros o Punta Paloma, comprobad también la carretera: la Junta retira periódicamente arena de la duna viva sobre la A-2325.'
      ] },
      { id: 'spring', eyebrow: '03 · Primavera', title: 'Días más largos y margen para cambios', paragraphs: [
        'La primavera avanza desde la parte más lluviosa del año hacia el verano seco, aunque sol, chubascos y viento todavía pueden alternarse durante una visita de varios días.',
        'Es una buena época para combinar pueblo, costa y paisaje si lleváis capas ligeras, una opción para la lluvia y ninguna exigencia de tardes siempre veraniegas.',
        'En AMARA, el aire acondicionado con frío y calor, la calefacción y la chimenea de leña aportan confort en noches frescas; la salida práctica hacia el oeste permite aprovechar una buena ventana en la costa.'
      ] },
      { id: 'summer', eyebrow: '04 · Verano', title: 'Seco, luminoso y más suave que el interior', paragraphs: [
        'Los valores normales de AEMET muestran muy poca lluvia en junio, julio y agosto. En Tarifa, las máximas diarias medias son 23,9 °C en julio y 24,5 °C en agosto, muy por debajo de Sevilla y Córdoba.',
        'La comparación describe el clima, no la temperatura de mañana. Sol intenso, episodios cálidos y viento persistente siguen siendo posibles; sombra, agua, protección solar y previsión actual forman parte del día.',
        'El aire acondicionado refresca AMARA. Desde La Marina podéis caminar unos 10–15 minutos al casco antiguo o salir cómodamente hacia la costa atlántica, eligiendo horario y destino según las condiciones.'
      ] },
      { id: 'autumn', eyebrow: '05 · Otoño', title: 'Un cambio gradual, no un final repentino', paragraphs: [
        'Septiembre aún se acerca al verano en las normales de temperatura y lluvia; octubre y noviembre muestran un aumento marcado de la precipitación media y un descenso progresivo de las temperaturas.',
        'El otoño puede regalar días magníficos de playa, paseo y pueblo, pero en una estancia larga funciona mejor decidir con uno o dos días de margen que fijar una semana completa al aire libre.',
        'En AMARA, el supermercado enfrente ayuda cuando cambia la tarde; calefacción, frío y calor por aire acondicionado y chimenea de leña acompañan el paso de una tarde templada a una noche fresca o lluviosa.'
      ] },
      { id: 'winter', eyebrow: '06 · Invierno', title: 'Temperaturas costeras suaves, con más viento y lluvia', paragraphs: [
        'El invierno de Tarifa sigue siendo suave en términos de clima costero, pero las normales de AEMET sitúan mucha más lluvia en diciembre, enero y febrero que en verano. El viento y los frentes pueden marcar días concretos.',
        'La temporada pide confort interior, servicios cotidianos útiles y libertad para mover un paseo o una salida a la costa a la mejor parte del pronóstico. No debe venderse como sol invernal garantizado.',
        'AMARA dispone de calefacción, aire acondicionado con frío y calor y chimenea de leña, con compras justo enfrente. Aquí damos solo la visión estacional; las rutinas largas tendrán su propia guía de invierno.'
      ] },
      { id: 'best-time', eyebrow: '07 · Elegir fechas', title: 'Planificad según el tiempo que preferís, no buscando una única “mejor época”', paragraphs: [
        'La mejor época para viajar a Tarifa depende de los días que queréis: ritmo seco de verano, tiempo más tranquilo para caminar, una escapada de costa y pueblo o una estancia larga de invierno. Ningún mes garantiza viento o cielo.',
        'Usad el clima para el patrón general y la previsión a corto plazo para el plan real. Las decisiones técnicas sobre viento y spots deben apoyarse en información especializada y actual.',
        'AMARA funciona como base flexible en La Marina: casco antiguo a pie, costa occidental práctica en coche y una plaza subterránea reservada para dejarlo aparcado cuando el mejor plan está cerca.'
      ] },
      { id: 'amara-by-season', eyebrow: '08 · Vuestra base en La Marina', title: 'La versión AMARA, estación por estación', paragraphs: [
        'Primavera: traed capas y mantened abiertas las opciones de pueblo, costa y paisaje; calefacción y chimenea de leña hacen agradables las noches más frescas.',
        'Verano: contad con sol y viento además de la temperatura; refrigeración, supermercado enfrente y la elección entre caminar o conducir al oeste simplifican el día.',
        'Otoño: decidid con la previsión cercana cuando aumenta la probabilidad de lluvia; calefacción y refrigeración compensan el contraste entre día y noche.',
        'Invierno: priorizad confort y flexibilidad; calefacción, chimenea, garaje subterráneo reservado y compras enfrente facilitan cualquier cambio de plan.'
      ] }
    ],
    related: { eyebrow: 'Seguid planificando', title: 'Poned el tiempo en su lugar', links: [
      { token: 'tarifa_geography', label: 'Geografía y orientación', text: 'Cómo el Estrecho, la costa atlántica y la dirección oeste organizan Tarifa.' },
      { token: 'tarifa_wind_kitesurfing_authority', label: 'Viento y deportes acuáticos', text: 'La guía especializada para sistemas de viento, seguridad y decisiones en el agua.' },
      { token: 'tarifa_winter_stays', label: 'Estancias de invierno', text: 'La guía específica para una estancia más tranquila y larga con el tiempo cambiante del Atlántico.' }
    ] },
    sources: { eyebrow: 'Fuentes', title: 'Fuentes oficiales de clima y viento', intro: 'Las afirmaciones climáticas utilizan los valores normales oficiales de AEMET 1981–2010. El contexto de viento y carretera junto a la duna procede de la Junta de Andalucía.', checked: 'Fuentes revisadas en agosto de 2026', links: [
      { label: 'AEMET · Valores normales de Tarifa', text: 'Medias mensuales de temperatura, precipitación y días de lluvia de la estación 6001.', href: sharedSources.tarifaNormals },
      { label: 'AEMET · Valores normales de Sevilla Aeropuerto', text: 'Comparación interior oficial de las máximas diarias medias de julio y agosto.', href: sharedSources.sevillaNormals },
      { label: 'AEMET · Valores normales de Córdoba Aeropuerto', text: 'Comparación interior oficial de las máximas diarias medias de julio y agosto.', href: sharedSources.cordobaNormals },
      { label: 'Junta de Andalucía · Viento en Andalucía', text: 'Descripción regional del Levante y el Poniente en el entorno del Estrecho.', href: sharedSources.juntaWind },
      { label: 'Junta de Andalucía · Carretera de la duna de Valdevaqueros', text: 'Trabajos de 2024 para retirar arena de la A-2325 hacia Punta Paloma.', href: sharedSources.valdevaquerosRoad }
    ] },
    closing: { eyebrow: 'Elegid una base flexible', title: 'Que Tarifa cambie el día, no la estancia', body: 'AMARA, en La Marina, reúne casco antiguo, compras cotidianas y costa occidental en una rutina práctica, con confort interior cuando la previsión cambia el plan.', locationLabel: 'Explorar Tarifa Location', areasLabel: 'Comparar dónde alojarse' }
  },
  nl: {
    navLabel: 'Weer & seizoenen',
    hero: { eyebrow: 'Weergids voor Tarifa', title: 'Weer & seizoenen in Tarifa', standfirst: 'Tarifa kent niet één vakantieseizoen. Het kustklimaat, de Levante en de Poniente bepalen het ritme van een verblijf van meerdere dagen – en vanuit AMARA in La Marina draait het vooral om wat op elke dag prettig werkt.', note: 'Een door hosts geschreven klimaatgids op basis van officiële klimaatnormalen. Gemiddelden beschrijven een patroon, niet de verwachting voor jullie reisdata.', updated: 'Klimaatbronnen gecontroleerd in augustus 2026' },
    facts: [
      { label: 'Klimaatbron', value: 'AEMET-normalen 1981–2010' },
      { label: 'Zomerpatroon', value: 'Milder dan het Andalusische binnenland · zeer droog' },
      { label: 'Windnamen', value: 'Levante · Poniente' },
      { label: 'AMARA-basis', value: 'La Marina · Mar Adriático 29' }
    ],
    comparison: { eyebrow: 'Een nuttige zomervergelijking', title: 'Tarifa is midden in de zomer structureel milder dan het Andalusische binnenland', intro: 'De gemiddelde dagelijkse maxima van AEMET voor 1981–2010 laten een duidelijk verschil tussen kust en binnenland zien. Het zijn maandgemiddelden, geen bovengrens of belofte voor een losse dag.', periodLabel: 'Gemiddeld dagelijks maximum', monthLabels: ['Juli', 'Augustus'], places: [
      { place: 'Tarifa', july: '23,9 °C', august: '24,5 °C' },
      { place: 'Luchthaven Sevilla', july: '36,0 °C', august: '35,5 °C' },
      { place: 'Luchthaven Córdoba', july: '36,9 °C', august: '36,5 °C' }
    ], note: 'Juli / augustus · AEMET-normalen 1981–2010' },
    sections: [
      { id: 'climate-at-a-glance', eyebrow: '01 · Het grote patroon', title: 'Het klimaat van Tarifa in het kort', paragraphs: [
        'Door de ligging aan de Straat van Gibraltar heeft Tarifa een zeeklimaat: zomerse maxima worden getemperd vergeleken met het Andalusische binnenland, wind hoort bij het jaar en de koelere helft krijgt veel meer regen.',
        'Voor een echt verblijf zijn zomerverwachtingen uit Sevilla of Córdoba dus misleidend, maar hetzelfde geldt voor het idee dat elke kustdag windstil en wolkeloos is. Bekijk de verwachting en houd één dagoptie flexibel.',
        'Bij AMARA maakt de supermarkt direct aan de overkant een snelle wissel van eet- of strandplan eenvoudig; bij geschikt weer ligt de oude stad op ongeveer 10–15 minuten lopen.'
      ] },
      { id: 'levante-poniente', eyebrow: '02 · Twee vertrouwde namen', title: 'Levante & Poniente tijdens een gewone vakantie', paragraphs: [
        'Levante is de oostenwind en is rond de Straat bijzonder aanhoudend; Poniente komt uit het westen en hoort bij Atlantisch weer. Richting, kracht en plaatselijke beschutting bepalen hoe beide aanvoelen.',
        'Voor een gewone vakantie hoeven jullie geen watersportdag te analyseren. Wind verandert het comfort op een open strand, tijdens een wandeling, op een terras of bij een rit naar het westen; kies de setting met de actuele omstandigheden in gedachten.',
        'Vanuit AMARA bieden stad en appartement alternatieven voor de open kust. Rijden jullie naar Valdevaqueros of Punta Paloma, controleer dan ook de weg: de Junta verwijdert geregeld zand van de levende duin op de A-2325.'
      ] },
      { id: 'spring', eyebrow: '03 · Voorjaar', title: 'Langere dagen met ruimte voor verandering', paragraphs: [
        'Het voorjaar beweegt van de nattere jaarhelft naar het droge zomerpatroon, maar zon, buien en wind kunnen elkaar tijdens een verblijf van meerdere dagen nog steeds afwisselen.',
        'Het is een fijne tijd om stad, kust en landschap te combineren, mits lichte lagen, een regenoptie en geen verwachting van uitsluitend zomerse middagen in het plan zitten.',
        'Bij AMARA bieden airconditioning voor koelen en verwarmen, verwarming en de houtgestookte open haard comfort op koelere avonden; de praktische westelijke route helpt een mooie periode aan de kust te benutten.'
      ] },
      { id: 'summer', eyebrow: '04 · Zomer', title: 'Droog, helder en milder dan het binnenland', paragraphs: [
        'De AEMET-normalen laten in juni, juli en augustus zeer weinig regen zien. In Tarifa zijn de gemiddelde dagelijkse maxima 23,9 °C in juli en 24,5 °C in augustus, veel lager dan bij Sevilla en Córdoba.',
        'Die vergelijking beschrijft het klimaat, niet de temperatuur van morgen. Felle zon, warme perioden en aanhoudende wind blijven mogelijk; schaduw, water, zonbescherming en de actuele verwachting horen bij de dag.',
        'AMARA heeft airconditioning om te koelen. Vanuit La Marina lopen jullie in circa 10–15 minuten naar de oude stad of rijden praktisch westwaarts naar de Atlantische kust, afgestemd op tijd en omstandigheden.'
      ] },
      { id: 'autumn', eyebrow: '05 · Najaar', title: 'Een geleidelijke omslag, geen plots einde', paragraphs: [
        'September ligt in de normalen voor temperatuur en regen nog dicht bij de zomer; in oktober en november neemt de gemiddelde neerslag duidelijk toe en dalen de temperaturen geleidelijk.',
        'Het najaar kan prachtige strand-, wandel- en stadsdagen bieden. Voor een langer verblijf werkt het beter om één of twee dagen vooruit te kiezen dan een hele buitenweek vast te leggen.',
        'Bij AMARA is de supermarkt tegenover handig als het weer de avond verandert; verwarming, koelen en verwarmen via de airconditioning en de houtgestookte open haard vangen het verschil tussen middag en avond op.'
      ] },
      { id: 'winter', eyebrow: '06 · Winter', title: 'Milde kusttemperaturen, met meer wind en regen', paragraphs: [
        'De winter in Tarifa blijft mild naar kustmaatstaven, maar AEMET plaatst veel meer regen in december, januari en februari dan in de zomer. Wind en passerende fronten kunnen losse dagen bepalen.',
        'Dit seizoen vraagt om binnencomfort, bruikbare dagelijkse voorzieningen en vrijheid om wandeling of kustrit naar het betere deel van de verwachting te schuiven. Gegarandeerde winterzon zou geen eerlijk verhaal zijn.',
        'AMARA heeft verwarming, airconditioning voor koelen en verwarmen en een houtgestookte open haard, met boodschappen direct aan de overkant. Langere winterroutines krijgen later hun eigen gids.'
      ] },
      { id: 'best-time', eyebrow: '07 · Reisdata kiezen', title: 'Plan rond het weer dat jullie prettig vinden, niet rond één “beste reistijd”', paragraphs: [
        'De beste reistijd voor Tarifa hangt af van de gewenste dagen: droog zomerritme, rustiger wandelweer, een mix van kust en stad of een langer winterverblijf. Geen maand garandeert een bepaalde wind of lucht.',
        'Gebruik klimaat voor het globale patroon en de korte verwachting voor het echte plan. Technische wind- en spotkeuzes horen bij actuele specialistische informatie, niet bij een algemene seizoensregel.',
        'AMARA is een flexibele basis in La Marina: de oude stad is beloopbaar, de westkust praktisch per auto en op de gereserveerde ondergrondse plek kan de auto blijven staan als het beste plan dichtbij is.'
      ] },
      { id: 'amara-by-season', eyebrow: '08 · Jullie basis in La Marina', title: 'De AMARA-versie per seizoen', paragraphs: [
        'Voorjaar: neem laagjes mee en houd stad, kust en landschap open; verwarming en de houtgestookte open haard geven koelere avonden een comfortabele afloop.',
        'Zomer: plan behalve temperatuur ook zon en wind in; verkoeling, de supermarkt tegenover en de keuze tussen lopen of westwaarts rijden houden de dag eenvoudig.',
        'Najaar: beslis met de nabije verwachting wanneer regenkans toeneemt; verwarmen en koelen helpen als dag en avond verschillend aanvoelen.',
        'Winter: comfort en flexibiliteit staan voorop; verwarming, open haard, gereserveerde ondergrondse parking en boodschappen tegenover maken omplannen makkelijk.'
      ] }
    ],
    related: { eyebrow: 'Verder plannen', title: 'Plaats het weer in de omgeving', links: [
      { token: 'tarifa_geography', label: 'Geografie & oriëntatie', text: 'Hoe de Straat, Atlantische kust en westelijke richting Tarifa vormgeven.' },
      { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersport', text: 'De specialistische gids voor windsystemen, veiligheid en watersportkeuzes.' },
      { token: 'tarifa_winter_stays', label: 'Winterverblijven', text: 'De aparte gids voor een rustiger, langer verblijf met wisselvallig Atlantisch weer.' }
    ] },
    sources: { eyebrow: 'Bronnen', title: 'Officiële klimaat- en windbronnen', intro: 'Klimaatuitspraken gebruiken de officiële AEMET-normalen voor 1981–2010. Context over wind en de duinweg komt van de Junta de Andalucía.', checked: 'Bronnen gecontroleerd in augustus 2026', links: [
      { label: 'AEMET · Normalen Tarifa', text: 'Maandgemiddelden voor temperatuur, neerslag en regendagen van station 6001.', href: sharedSources.tarifaNormals },
      { label: 'AEMET · Normalen luchthaven Sevilla', text: 'Officiële vergelijking voor de gemiddelde dagelijkse maxima in juli en augustus.', href: sharedSources.sevillaNormals },
      { label: 'AEMET · Normalen luchthaven Córdoba', text: 'Officiële vergelijking voor de gemiddelde dagelijkse maxima in juli en augustus.', href: sharedSources.cordobaNormals },
      { label: 'Junta de Andalucía · Wind in Andalusië', text: 'Regionale toelichting op Levante en Poniente rond de Straat.', href: sharedSources.juntaWind },
      { label: 'Junta de Andalucía · Weg bij de duin van Valdevaqueros', text: 'Werkzaamheden uit 2024 om zand van de A-2325 naar Punta Paloma te verwijderen.', href: sharedSources.valdevaquerosRoad }
    ] },
    closing: { eyebrow: 'Kies een flexibele basis', title: 'Laat Tarifa de dag veranderen, niet het verblijf', body: 'AMARA in La Marina houdt oude stad, dagelijkse boodschappen en westkust binnen een praktisch ritme, met binnencomfort wanneer de verwachting het plan verandert.', locationLabel: 'Ontdek Tarifa Location', areasLabel: 'Vergelijk waar overnachten' }
  },
  sv: {
    navLabel: 'Väder & årstider',
    hero: { eyebrow: 'Väderguide för Tarifa', title: 'Väder & årstider i Tarifa', standfirst: 'Tarifa har inte bara en enda semestersäsong. Kustklimatet, Levante och Poniente formar en vistelse över flera dagar – och från AMARA i La Marina är den viktiga frågan hur varje sorts dag kan bli riktigt bra.', note: 'En klimatguide skriven av värdar och baserad på officiella normalvärden. Klimatgenomsnitt beskriver ett mönster, inte prognosen för era datum.', updated: 'Klimatkällor granskade i augusti 2026' },
    facts: [
      { label: 'Klimatunderlag', value: 'AEMET-normalvärden 1981–2010' },
      { label: 'Sommarmönster', value: 'Mildare än Andalusiens inland · mycket torrt' },
      { label: 'Vindnamn', value: 'Levante · Poniente' },
      { label: 'AMARA-bas', value: 'La Marina · Mar Adriático 29' }
    ],
    comparison: { eyebrow: 'En användbar sommarjämförelse', title: 'Tarifa är klimatmässigt betydligt mildare än Andalusiens inland mitt i sommaren', intro: 'AEMET:s genomsnittliga dagshögsta för 1981–2010 visar en tydlig skillnad mellan kust och inland. Det är månadsmedel, inte ett tak eller ett löfte för en enskild dag.', periodLabel: 'Genomsnittligt dagshögsta', monthLabels: ['Juli', 'Augusti'], places: [
      { place: 'Tarifa', july: '23,9 °C', august: '24,5 °C' },
      { place: 'Sevillas flygplats', july: '36,0 °C', august: '35,5 °C' },
      { place: 'Córdobas flygplats', july: '36,9 °C', august: '36,5 °C' }
    ], note: 'Juli / augusti · AEMET-normalvärden 1981–2010' },
    sections: [
      { id: 'climate-at-a-glance', eyebrow: '01 · Det stora mönstret', title: 'Tarifas klimat i korthet', paragraphs: [
        'Läget vid Gibraltarsundet ger Tarifa ett maritimt klimat: sommarens högsta temperaturer dämpas jämfört med Andalusiens inland, vinden följer året och den svalare halvan får betydligt mer regn.',
        'För en riktig vistelse kan sommarförväntningar från Sevilla eller Córdoba därför bli fel – men också tanken att varje kustdag är vindstilla och molnfri. Kontrollera prognosen och håll ett alternativ öppet.',
        'På AMARA gör stormarknaden mittemot ett snabbt byte av middags- eller strandplan enkelt; när vädret passar ligger gamla stan ungefär 10–15 minuters promenad bort.'
      ] },
      { id: 'levante-poniente', eyebrow: '02 · Två namn ni ofta hör', title: 'Levante & Poniente under en vanlig Tarifavistelse', paragraphs: [
        'Levante är östvinden och särskilt ihållande kring sundet; Poniente kommer västerifrån och hör ihop med atlantiskt väder. Riktning, styrka och lokalt skydd avgör hur båda upplevs.',
        'På en vanlig semester behöver ni inte bedöma en teknisk vattensportdag. Vinden ändrar komforten på en öppen strand, en promenad, en terrass eller en bilfärd västerut – välj miljö efter aktuella förhållanden.',
        'Från AMARA ger staden och lägenheten alternativ till öppen kust. Kör ni mot Valdevaqueros eller Punta Paloma bör även vägen kontrolleras: Junta röjer återkommande sand från den levande dynen på A-2325.'
      ] },
      { id: 'spring', eyebrow: '03 · Vår', title: 'Längre dagar med utrymme för omväxling', paragraphs: [
        'Våren går från den regnigare delen av året mot det torra sommarmönstret, men sol, skurar och vind kan fortfarande växla under en vistelse på flera dagar.',
        'Det är en fin tid för stad, kust och landskap om packningen innehåller lager, planen ett regnalternativ och ingen förväntan om att varje eftermiddag känns som sommar.',
        'På AMARA ger luftkonditionering för kyla och värme, uppvärmning och den vedeldade eldstaden komfort på svalare kvällar; den praktiska vägen västerut hjälper er att utnyttja en ljus stund vid kusten.'
      ] },
      { id: 'summer', eyebrow: '04 · Sommar', title: 'Torrt, ljust och mildare än inlandet', paragraphs: [
        'AEMET:s normalvärden visar mycket lite regn i juni, juli och augusti. I Tarifa är genomsnittligt dagshögsta 23,9 °C i juli och 24,5 °C i augusti, klart lägre än i Sevilla och Córdoba.',
        'Jämförelsen beskriver klimatet, inte morgondagens temperatur. Stark sol, varma perioder och ihållande vind är fortfarande möjliga; skugga, vatten, solskydd och aktuell prognos hör till dagen.',
        'AMARA har luftkonditionering för svalka. Från La Marina går ni till gamla stan på cirka 10–15 minuter eller kör enkelt västerut mot Atlantkusten, med tid och mål valda efter dagens förhållanden.'
      ] },
      { id: 'autumn', eyebrow: '05 · Höst', title: 'En gradvis förändring, inte ett plötsligt slut', paragraphs: [
        'September ligger fortfarande nära sommaren i AEMET:s temperatur- och nederbördsnormaler; oktober och november visar tydligt mer genomsnittligt regn och gradvis lägre temperaturer.',
        'Hösten kan ge fina dagar för strand, promenader och stad. Under en längre vistelse fungerar beslut en eller två dagar i taget bättre än en helt låst utomhusvecka.',
        'På AMARA hjälper stormarknaden mittemot när vädret ändrar kvällen; uppvärmning, kyla och värme via luftkonditionering samt vedeldad eldstad möter skiftet mellan varm eftermiddag och sval eller blöt kväll.'
      ] },
      { id: 'winter', eyebrow: '06 · Vinter', title: 'Milt kustklimat, men mer vind och regn', paragraphs: [
        'Vintern i Tarifa är mild i kustklimatets mening, men AEMET:s normaler placerar mycket mer regn i december, januari och februari än på sommaren. Vind och fronter kan prägla enskilda dagar.',
        'Säsongen belönar inomhuskomfort, praktisk vardagsservice och frihet att flytta promenad eller kustutflykt till prognosens bättre del. Garanterad vintersol vore inget ärligt löfte.',
        'AMARA har uppvärmning, luftkonditionering för kyla och värme samt vedeldad eldstad, med matbutik mitt emot. Här stannar vi vid översikten; längre vinterrutiner får en egen guide.'
      ] },
      { id: 'best-time', eyebrow: '07 · Välj resdatum', title: 'Planera efter vädret ni tycker om, inte en enda “bästa restid”', paragraphs: [
        'Bästa tiden att resa till Tarifa beror på vilka dagar ni vill ha: torr sommarrytm, lugnare vandringsväder, en blandning av kust och stad eller en längre vintervistelse. Ingen månad garanterar vind eller himmel.',
        'Använd klimatet för det breda mönstret och korttidsprognosen för den riktiga planen. Tekniska vind- och platsval hör till aktuell specialistinformation, inte en generell säsongsregel.',
        'AMARA är en flexibel bas i La Marina: gamla stan nås till fots, västkusten praktiskt med bil och bilen kan stå på den reserverade underjordiska platsen när den bättre planen finns nära.'
      ] },
      { id: 'amara-by-season', eyebrow: '08 · Er bas i La Marina', title: 'AMARA-versionen, årstid för årstid', paragraphs: [
        'Vår: ta med lager och håll stad, kust och landskap öppna; uppvärmning och vedeldad eldstad ger svalare kvällar en behaglig avslutning.',
        'Sommar: planera för sol och vind utöver temperatur; svalka, stormarknad mittemot och valet mellan promenad och västlig bilfärd håller dagen enkel.',
        'Höst: besluta efter den närmare prognosen när regn blir vanligare; uppvärmning och svalka hjälper när dag och kväll känns olika.',
        'Vinter: prioritera komfort och flexibilitet; uppvärmning, eldstad, reserverad garageplats och vardagshandel mittemot gör det enkelt att ändra planen.'
      ] }
    ],
    related: { eyebrow: 'Planera vidare', title: 'Sätt vädret på kartan', links: [
      { token: 'tarifa_geography', label: 'Geografi & orientering', text: 'Hur sundet, Atlantkusten och riktningen västerut formar Tarifa.' },
      { token: 'tarifa_wind_kitesurfing_authority', label: 'Vind & vattensport', text: 'Specialistguiden för vindsystem, säkerhet och beslut om vattensport.' },
      { token: 'tarifa_winter_stays', label: 'Vintervistelser', text: 'Den särskilda guiden för en lugnare, längre vistelse med omväxlande Atlantväder.' }
    ] },
    sources: { eyebrow: 'Källor', title: 'Officiella klimat- och vindkällor', intro: 'Klimatuppgifterna använder AEMET:s officiella normalvärden för 1981–2010. Vind- och dynvägskontext kommer från Junta de Andalucía.', checked: 'Källor granskade i augusti 2026', links: [
      { label: 'AEMET · Normalvärden för Tarifa', text: 'Månadsmedel för temperatur, nederbörd och regndagar vid station 6001.', href: sharedSources.tarifaNormals },
      { label: 'AEMET · Normalvärden för Sevillas flygplats', text: 'Officiell inlandjämförelse av genomsnittligt dagshögsta i juli och augusti.', href: sharedSources.sevillaNormals },
      { label: 'AEMET · Normalvärden för Córdobas flygplats', text: 'Officiell inlandjämförelse av genomsnittligt dagshögsta i juli och augusti.', href: sharedSources.cordobaNormals },
      { label: 'Junta de Andalucía · Vind i Andalusien', text: 'Regional beskrivning av Levante och Poniente kring sundet.', href: sharedSources.juntaWind },
      { label: 'Junta de Andalucía · Vägen vid Valdevaquerosdynen', text: 'Arbeten 2024 för att röja sand från A-2325 mot Punta Paloma.', href: sharedSources.valdevaquerosRoad }
    ] },
    closing: { eyebrow: 'Välj en flexibel bas', title: 'Låt Tarifa ändra dagen, inte vistelsen', body: 'AMARA i La Marina håller gamla stan, vardagshandeln och västkusten inom en praktisk rytm, med inomhuskomfort när prognosen ändrar planen.', locationLabel: 'Upptäck Tarifa Location', areasLabel: 'Jämför boendeområden' }
  }
};
