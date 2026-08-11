import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaHikingRouteCard {
  title: string;
  text: string;
  duration?: string;
  elevationGain?: string;
  distance?: string;
  difficulty?: string;
  experience: string;
  statusLink?: {
    before: string;
    label: string;
    after: string;
    href: string;
  };
}

export interface FrigilianaHikingRouteSection {
  id: string;
  title: string;
  intro?: string;
  routes: FrigilianaHikingRouteCard[];
}

export interface FrigilianaHikingPageCopy {
  routeCardLabels: {
    statsAriaLabel: string;
    duration: string;
    elevationGain: string;
    distance: string;
    difficulty: string;
    experience: string;
  };
  footerHighlights: {
    hiking: string;
    guide: string;
    stays: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  sectionNav: {
    panorama: string;
    gentle: string;
    rivers: string;
    summits: string;
    practical: string;
  };
  routeSections: FrigilianaHikingRouteSection[];
  practical: {
    title: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    availabilityCta: string;
    apartmentsCta: string;
  };
}

export const frigilianaHikingSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-hiking-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Hiking in Frigiliana: Trails & Nature Guide',
      description:
        'Hike around Frigiliana on panoramic trails, gentle walks, river routes and Sierra Almijara summits, with timings and practical advice.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wandern in Frigiliana: Routen & Natur-Guide',
      description:
        'Wandern rund um Frigiliana: Panorama-Touren, sanfte Wege, Flusswanderungen und Gipfel in der Sierra Almijara – mit Zeiten und praktischen Tipps.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Senderismo en Frigiliana: rutas y naturaleza',
      description:
        'Rutas de senderismo alrededor de Frigiliana: panorámicas, paseos suaves, recorridos fluviales y cumbres de la Sierra Almijara, con tiempos y consejos prácticos.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wandelen in Frigiliana: routes & natuurgids',
      description:
        'Wandelen rond Frigiliana: panoramaroutes, rustige paden, rivierwandelingen en toppen in de Sierra Almijara, met tijden en praktische tips.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vandring i Frigiliana: leder & naturguide',
      description:
        'Vandra runt Frigiliana på panoramaleder, lugna stigar, flodvandringar och toppar i Sierra Almijara, med tider och praktiska råd.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Each localized copy preserves the same facts and information depth while
 * using native hospitality and hiking language for its market.
 */
export const frigilianaHikingContent: Record<
  AmaraLanguage,
  FrigilianaHikingPageCopy | null
> = {
  en: {
    routeCardLabels: {
      statsAriaLabel: 'Route essentials',
      duration: 'Duration',
      elevationGain: 'Elevation gain',
      distance: 'Distance',
      difficulty: 'Difficulty',
      experience: 'The experience'
    },
    footerHighlights: {
      hiking: 'Hiking & nature',
      guide: 'Frigiliana guide',
      stays: 'AMARA stays'
    },
    hero: {
      kicker: 'Nature guide',
      title:
        'Hiking & nature around Frigiliana — into the Sierra Almijara',
      paragraphs: [
        'The trails of Sierras de Tejeda, Almijara y Alhama Natural Park begin directly behind Frigiliana, across limestone peaks, pine forest and open slopes above the Mediterranean.',
        'The selection below is arranged by effort, from a short circuit above the village to the summit of El Fuerte.',
        'Suitable GPX tracks for these routes are available on Komoot and Wikiloc.'
      ],
      imageAlt:
        'View through Frigiliana’s whitewashed houses towards the foothills of the Sierra Almijara'
    },
    sectionNav: {
      panorama: 'Panoramas',
      gentle: 'Gentle walks',
      rivers: 'River walks',
      summits: 'Summits',
      practical: 'Good to know'
    },
    routeSections: [
      {
        id: 'panorama',
        title: 'Panoramic hikes (3–4 hours, moderate)',
        intro:
          'After rain, the higher trails above the valleys dry more quickly and are usually more comfortable than the riverbeds. These are our reliable choices for a moderate half-day hike.',
        routes: [
          {
            title: 'Frigiliana → Cruz de Pinto (circular route)',
            duration: '3–3.5 hrs',
            elevationGain: '+480 m',
            distance: '7–8 km',
            difficulty: 'moderate',
            experience:
              'Open hillsides and wide coastal views just above the village.',
            text:
              'A panoramic circuit above Frigiliana, crossing open slopes with far-reaching views towards the coast. It is one of the more dependable options after rain because the ground dries quickly. Tip: start from the upper edge of the village to enjoy the best views right at the beginning.'
          },
          {
            title: 'El Fuerte (as far as the viewpoints)',
            duration: '2–3 hrs',
            difficulty: 'moderate',
            experience:
              'Wide views well before the summit on a moderate half-day hike.',
            text:
              'This is the classic walk behind Frigiliana, without the need to go all the way to the top. The path to the viewpoints already delivers a dramatic outlook. After rain, take care on the rocky sections; shoes with reliable grip make a real difference.'
          }
        ]
      },
      {
        id: 'gentle',
        title: 'Gentle walks & viewpoints',
        intro:
          'For a shorter walk or a late-afternoon outing, with no specialist equipment required.',
        routes: [
          {
            title: 'The Lízar & acequia trail',
            duration: 'approx. 1 hr',
            elevationGain: 'low',
            distance: '2–3 km',
            difficulty: 'flat',
            experience:
              'Old irrigation channels, the avocado valley and the sea in the evening light.',
            text:
              'Follow the old irrigation channels, or acequias, above the village. This mostly level, levada-style path keeps the avocado valley and the sea in view throughout. Start near the Lízar reservoir or the castle ruins above the old town. It is particularly lovely at sunset.'
          },
          {
            title: 'Historic-quarter circuit (Barribarto)',
            duration: 'approx. 45 min',
            distance: 'approx. 2 km',
            difficulty: 'steps / steep',
            experience:
              'Moorish lanes and twelve ceramic panels tell Frigiliana’s story as you walk.',
            text:
              'Wander through the upper Moorish quarter, with cobbled lanes, archways and hand-painted ceramic panels. Follow all twelve panels for a short, self-guided introduction to the Morisco uprising.'
          }
        ]
      },
      {
        id: 'rivers',
        title: 'River walks (a summer speciality)',
        intro:
          'Andalusia’s famous “wet hikes”, where the riverbed itself becomes the trail.',
        routes: [
          {
            title: 'Río Higuerón (Frigiliana)',
            duration: '2–3 hrs',
            elevationGain: 'low',
            distance: '4–5 km',
            difficulty: 'moderate',
            experience:
              'A quiet riverbed walk through narrow cahorros, starting in Frigiliana.',
            text:
              'This is the quieter local option. From the village centre, descend into the riverbed and walk through the cahorros — narrow rock gorges. A candid note: for much of the route, the Higuerón is a dry riverbed. Whether water is flowing, and how much, depends on rainfall and the season; when there is water, it is usually no more than ankle-deep. That is precisely what makes the route pleasant in high summer and noticeably calmer than the Chíllar. Water shoes or sports sandals with good grip are recommended.'
          },
          {
            title: 'Río Chíllar (Nerja)',
            experience:
              'Ankle-deep water and narrow marble gorges — once access reopens.',
            text:
              'The celebrated classic: walking through ankle-deep water into narrow marble gorges. It is beautiful, but currently closed. Access has been suspended since August 2023 for fire-prevention and safety reasons. A controlled reopening is being prepared, but there is no confirmed date.',
            statusLink: {
              before: 'Before visiting, ',
              label: 'check the official status',
              after:
                ' on Nerja Town Council’s website. Once it reopens, choose a weekday in June or September, or set off at 8:00 am — July and August are very busy.',
              href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
            }
          }
        ]
      },
      {
        id: 'summits',
        title: 'Summits & destinations',
        routes: [
          {
            title: 'El Fuerte (summit)',
            duration: 'approx. 4 hrs',
            elevationGain: '+700 m',
            distance: '8–9 km',
            difficulty: 'challenging',
            experience:
              'Frigiliana’s grand panorama — on clear days, as far as the Sierra Nevada and the African coast.',
            text:
              'Frigiliana’s signature hike climbs directly behind the village. The historic fortress site commands a wide panorama, reaching the Sierra Nevada and across to the African coast on clear days. Start early for the cool morning air. The path is steep and rocky.'
          },
          {
            title: 'El Acebuchal circuit',
            duration: 'approx. 4.5 hrs',
            distance: 'approx. 13 km',
            difficulty: 'moderate',
            experience:
              'Pine forest, a lost village and a rustic lunch stop in one walk.',
            text:
              'Walk through pine forest to the “lost village” of El Acebuchal, abandoned after the Civil War and lovingly restored. It is an ideal combination of nature and a rustic lunch stop. Reserve a table at the village restaurant in advance and carry some cash.'
          }
        ]
      }
    ],
    practical: {
      title: 'Practical notes',
      items: [
        {
          title: 'After rain',
          text:
            'Avoid narrow gorges and choose higher trails. Wear shoes with good tread.'
        },
        {
          title: 'Best season',
          text: 'October to May is best. In summer, walk only early in the day.'
        },
        {
          title: 'Navigation',
          text:
            'The trails are natural and not manicured. We recommend a GPX app such as Komoot or Wikiloc.'
        },
        {
          title: 'Water',
          text:
            'There are no drinking fountains on the trails. Carry at least 1.5 litres per person.'
        }
      ]
    },
    combine: {
      title: 'After the walk',
      intro:
        'Stay in Frigiliana for dinner, or drive down to the coast for a swim and an early lunch. If you use a nature trail, plan to be back before dark.',
      items: [
        {
          title: 'Beaches',
          text:
            'Put your feet up. Head down to the coast for a swim in the Mediterranean.'
        },
        {
          title: 'Food',
          text:
            'Choose one of the village restaurants or terraces after your walk.'
        }
      ]
    },
    closing: {
      title: 'Stay in Frigiliana, walk from the village',
      lead:
        'From Frigiliana’s old town you can begin several routes on foot. For a beach day, Nerja sits below the village on the coast.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View apartments'
    }
  },
  de: {
    routeCardLabels: {
      statsAriaLabel: 'Eckdaten der Tour',
      duration: 'Dauer',
      elevationGain: 'Höhenmeter',
      distance: 'Distanz',
      difficulty: 'Schwierigkeit',
      experience: 'Das Erlebnis'
    },
    footerHighlights: {
      hiking: 'Wandern & Natur',
      guide: 'Frigiliana-Guide',
      stays: 'AMARA-Unterkünfte'
    },
    hero: {
      kicker: 'Natur-Guide',
      title:
        'Wandern & Natur rund um Frigiliana — unterwegs in der Sierra Almijara',
      paragraphs: [
        'Direkt hinter Frigiliana beginnen die Wege des Naturparks Sierras de Tejeda, Almijara y Alhama: schroffe Kalksteingipfel, Pinienwald und offene Blicke bis zum Mittelmeer.',
        'Unten findet ihr unsere Auswahl nach Anstrengung sortiert — von einer kurzen Runde oberhalb des Dorfes bis zum Gipfel des El Fuerte.',
        'Passende GPX-Spuren zu diesen Wegen findet ihr auf Komoot und Wikiloc.'
      ],
      imageAlt:
        'Blick durch Frigilianas weiße Häuser auf die Ausläufer der Sierra Almijara'
    },
    sectionNav: {
      panorama: 'Panorama',
      gentle: 'Sanfte Wege',
      rivers: 'Flusswanderungen',
      summits: 'Gipfel',
      practical: 'Gut zu wissen'
    },
    routeSections: [
      {
        id: 'panorama',
        title: 'Panorama-Touren (3–4 Stunden, moderat)',
        intro:
          'Nach Regen trocknen die höher gelegenen Wege über den Tälern schneller ab und laufen sich angenehmer als die Flussbetten. Das sind unsere Standard-Empfehlungen für eine moderate Halbtagestour.',
        routes: [
          {
            title: 'Frigiliana → Cruz de Pinto (Rundweg)',
            duration: '3–3,5 Std.',
            elevationGain: '+480 hm',
            distance: '7–8 km',
            difficulty: 'moderat',
            experience:
              'Offene Hänge und weite Küstenblicke direkt oberhalb des Dorfes.',
            text:
              'Eine Panorama-Runde oberhalb des Dorfes, mit offenen Hängen und weitem Blick auf die Küste. Nach Regen eine der verlässlichsten Touren, weil das Gelände schnell abtrocknet. Startet am oberen Dorfrand; dort beginnt der aussichtsreiche Abschnitt.'
          },
          {
            title: 'El Fuerte (bis zu den Aussichtspunkten)',
            duration: '2–3 Std.',
            difficulty: 'moderat',
            experience:
              'Dramatische Aussicht schon vor dem Gipfel — ideal für eine moderate Halbtagestour.',
            text:
              'Die klassische Wanderung hinter Frigiliana — ihr müsst aber nicht bis ganz oben. Schon der Weg zu den Aussichtspunkten öffnet den Blick weit über Dorf und Küste. Passt nach Regen auf den felsigen Passagen auf; Schuhe mit gutem Profil machen einen großen Unterschied.'
          }
        ]
      },
      {
        id: 'gentle',
        title: 'Sanfte Wege & Aussichtspunkte',
        intro:
          'Für eine kürzere Runde oder einen Spaziergang am späten Nachmittag, ohne besondere Ausrüstung.',
        routes: [
          {
            title: 'Der Lizar- & Acequia-Weg',
            duration: 'ca. 1 Std.',
            elevationGain: 'gering',
            distance: '2–3 km',
            difficulty: 'flach',
            experience:
              'Alte Bewässerungskanäle, Avocadotal und Meer im Licht des Sonnenuntergangs.',
            text:
              'Folgt den alten Bewässerungskanälen (acequias) oberhalb des Dorfes. Der fast flache Weg führt am Avocadotal entlang und blickt zum Meer. Ihr könnt am Lízar-Stausee oder an der Burgruine oberhalb der Altstadt beginnen; am späten Nachmittag liegt die Strecke im weicheren Licht.'
          },
          {
            title: 'Runde durchs historische Viertel (Barribarto)',
            duration: 'ca. 45 Min.',
            distance: 'ca. 2 km',
            difficulty: 'Treppen/steil',
            experience:
              'Maurische Gassen und zwölf Keramiktafeln erzählen Frigilianas Geschichte im Vorbeigehen.',
            text:
              'Geht durch das obere maurische Viertel mit seinen Kopfsteinpflastergassen, Torbögen und handbemalten Keramiktafeln. Die zwölf Tafeln erzählen der Reihe nach vom Morisken-Aufstand.'
          }
        ]
      },
      {
        id: 'rivers',
        title: 'Flusswanderungen (Sommer-Spezial)',
        intro:
          'Andalusiens berühmte „nasse Wanderungen“, bei denen der Weg selbst das Flussbett ist.',
        routes: [
          {
            title: 'Río Higuerón (Frigiliana)',
            duration: '2–3 Std.',
            elevationGain: 'gering',
            distance: '4–5 km',
            difficulty: 'moderat',
            experience:
              'Eine ruhige Flussbettwanderung durch schmale Cahorros direkt ab Frigiliana.',
            text:
              'Die ruhige, ortsnahe Variante. Vom Dorfzentrum steigt ihr hinab ins Flussbett und lauft durch die Cahorros — schmale Felsschluchten. Der Higuerón ist über weite Strecken ein trockenes Flussbett. Ob und wie viel Wasser fließt, hängt von Regen und Jahreszeit ab; wenn Wasser da ist, reicht es meist nur bis zu den Knöcheln. Im Hochsommer ist die Route dadurch oft einfacher und deutlich ruhiger als der Chíllar. Nehmt Wasserschuhe oder griffige Sportsandalen mit.'
          },
          {
            title: 'Río Chíllar (Nerja)',
            experience:
              'Knöcheltiefes Wasser und enge Marmorschluchten — sobald der Zugang wieder geöffnet ist.',
            text:
              'Der berühmte Klassiker: durch knöcheltiefes Wasser in enge Marmorschluchten. Wunderschön, aber aktuell gesperrt. Der Zugang ist seit August 2023 aus Brandschutz- und Sicherheitsgründen geschlossen; eine Wiedereröffnung mit kontrolliertem Zugang ist in Vorbereitung, aber ohne festes Datum.',
            statusLink: {
              before: 'Bitte vor dem Besuch den ',
              label: 'offiziellen Status prüfen',
              after:
                ' (Link zur Stadt Nerja). Sobald wieder offen: an Wochentagen im Juni/September gehen oder um 8:00 Uhr starten — im Juli/August ist es sehr voll.',
              href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
            }
          }
        ]
      },
      {
        id: 'summits',
        title: 'Gipfel & Ziele',
        routes: [
          {
            title: 'El Fuerte (Gipfel)',
            duration: 'ca. 4 Std.',
            elevationGain: '+700 hm',
            distance: '8–9 km',
            difficulty: 'anspruchsvoll',
            experience:
              'Frigilianas großer Rundumblick — an klaren Tagen bis zur Sierra Nevada und zur afrikanischen Küste.',
            text:
              'Die Signatur-Wanderung, die direkt hinter Frigiliana aufsteigt. Ein historischer Festungsplatz mit weitem Rundumblick — an klaren Tagen bis zur Sierra Nevada und hinüber zur afrikanischen Küste. Timing: Früh starten (kühle Morgenluft). Der Weg ist steil und felsig.'
          },
          {
            title: 'El Acebuchal-Runde',
            duration: 'ca. 4,5 Std.',
            distance: 'ca. 13 km',
            difficulty: 'moderat',
            experience:
              'Pinienwald, verlorenes Dorf und rustikale Mittagspause in einer Tour.',
            text:
              'Eine Wanderung durch Pinienwald zum „verlorenen Dorf“ El Acebuchal — ein nach dem Bürgerkrieg verlassener und restaurierter Weiler. Reserviert im Dorfrestaurant vorab einen Tisch und nehmt Bargeld mit.'
          }
        ]
      }
    ],
    practical: {
      title: 'Gut zu wissen (Praktisches)',
      items: [
        {
          title: 'Nach Regen',
          text:
            'Enge Schluchten meiden, höhere Wege wählen. Schuhe mit Profil.'
        },
        {
          title: 'Jahreszeit',
          text: 'Am besten Oktober–Mai. Im Sommer nur früh morgens.'
        },
        {
          title: 'Orientierung',
          text:
            'Die Wege sind naturbelassen. Wir empfehlen GPX-Apps wie Komoot oder Wikiloc.'
        },
        {
          title: 'Wasser',
          text:
            'Keine Brunnen auf den Wegen. Mindestens 1,5 l pro Person mitnehmen.'
        }
      ]
    },
    combine: {
      title: 'Nach der Wanderung',
      intro:
        'Bleibt zum Abendessen in Frigiliana oder fahrt für ein Bad und einen frühen Lunch hinunter an die Küste. Plant die Rückkehr vor Einbruch der Dunkelheit, wenn ihr einen Naturweg geht.',
      items: [
        {
          title: 'Strände',
          text:
            'Beine hochlegen. Runter zur Küste für ein Bad im Mittelmeer.'
        },
        {
          title: 'Essen',
          text:
            'Wählt nach der Wanderung eines der Restaurants oder eine Terrasse im Dorf.'
        }
      ]
    },
    closing: {
      title: 'In Frigiliana wohnen, vom Dorf aus loswandern',
      lead:
        'Von Frigilianas Altstadt könnt ihr zu mehreren Wegen direkt zu Fuß starten. Für einen Strandtag liegt Nerja unten an der Küste.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
    }
  },
  es: {
    routeCardLabels: {
      statsAriaLabel: 'Datos de la ruta',
      duration: 'Duración',
      elevationGain: 'Desnivel',
      distance: 'Distancia',
      difficulty: 'Dificultad',
      experience: 'La experiencia'
    },
    footerHighlights: {
      hiking: 'Senderismo y naturaleza',
      guide: 'Guía de Frigiliana',
      stays: 'Alojamientos AMARA'
    },
    hero: {
      kicker: 'Guía de naturaleza',
      title:
        'Senderismo y naturaleza alrededor de Frigiliana — caminos de la Sierra Almijara',
      paragraphs: [
        'Los senderos del Parque Natural de las Sierras de Tejeda, Almijara y Alhama empiezan justo detrás de Frigiliana, entre cumbres calizas, pinares y laderas abiertas sobre el Mediterráneo.',
        'Hemos ordenado la selección por esfuerzo, desde una ruta corta sobre el pueblo hasta la cumbre de El Fuerte.',
        'En Komoot y Wikiloc encontraréis tracks GPX adecuados para estas rutas.'
      ],
      imageAlt:
        'Vista entre las casas blancas de Frigiliana hacia las estribaciones de la Sierra Almijara'
    },
    sectionNav: {
      panorama: 'Panorámicas',
      gentle: 'Paseos suaves',
      rivers: 'Rutas fluviales',
      summits: 'Cumbres',
      practical: 'Información práctica'
    },
    routeSections: [
      {
        id: 'panorama',
        title: 'Rutas panorámicas (3–4 horas, dificultad moderada)',
        intro:
          'Después de llover, los senderos elevados sobre los valles se secan antes y suelen resultar más agradables que los cauces. Son nuestras recomendaciones habituales para una ruta moderada de media jornada.',
        routes: [
          {
            title: 'Frigiliana → Cruz de Pinto (ruta circular)',
            duration: '3–3,5 h',
            elevationGain: '+480 m',
            distance: '7–8 km',
            difficulty: 'moderada',
            experience:
              'Laderas abiertas y amplias vistas de la costa, justo por encima del pueblo.',
            text:
              'Una ruta circular panorámica por encima de Frigiliana, entre laderas abiertas y con vistas despejadas hacia la costa. Después de llover es una de las opciones más fiables, ya que el terreno se seca con rapidez. Consejo: empezad en la parte alta del pueblo para disfrutar de las mejores vistas desde el principio.'
          },
          {
            title: 'El Fuerte (hasta los miradores)',
            duration: '2–3 h',
            difficulty: 'moderada',
            experience:
              'Vistas espectaculares antes de alcanzar la cumbre — ideal para una ruta moderada de media jornada.',
            text:
              'Es la caminata clásica detrás de Frigiliana, pero no hace falta llegar hasta arriba. El recorrido hasta los miradores ya recompensa con una panorámica impresionante. Después de llover, extremad la precaución en los tramos rocosos; un calzado con buen agarre marca una gran diferencia.'
          }
        ]
      },
      {
        id: 'gentle',
        title: 'Paseos suaves y miradores',
        intro:
          'Ideales para un día de descanso activo o un paseo a la hora dorada, sin necesidad de equipo especial.',
        routes: [
          {
            title: 'Camino de Lízar y las acequias',
            duration: 'aprox. 1 h',
            elevationGain: 'poco',
            distance: '2–3 km',
            difficulty: 'llano',
            experience:
              'Acequias históricas, el valle de aguacates y el mar a la luz del atardecer.',
            text:
              'Seguid las antiguas acequias por encima del pueblo. Es un camino prácticamente llano, al estilo de las levadas, con vistas constantes sobre el valle de aguacates y el mar. Se puede empezar junto al embalse de Lízar o cerca de las ruinas del castillo, por encima del casco antiguo. Al atardecer resulta especialmente bonito.'
          },
          {
            title: 'Recorrido por el casco histórico (Barribarto)',
            duration: 'aprox. 45 min',
            distance: 'aprox. 2 km',
            difficulty: 'escalones / cuestas',
            experience:
              'Calles moriscas y doce paneles de cerámica cuentan la historia de Frigiliana durante el paseo.',
            text:
              'Pasead por la parte alta del antiguo barrio morisco, entre calles empedradas, arcos y paneles de cerámica pintados a mano. Seguid los doce paneles para descubrir por vuestra cuenta una breve historia de la rebelión de los moriscos.'
          }
        ]
      },
      {
        id: 'rivers',
        title: 'Rutas por el río (especial de verano)',
        intro:
          'Las famosas rutas de agua andaluzas, en las que se camina por el propio cauce.',
        routes: [
          {
            title: 'Río Higuerón (Frigiliana)',
            duration: '2–3 h',
            elevationGain: 'poco',
            distance: '4–5 km',
            difficulty: 'moderada',
            experience:
              'Una ruta tranquila por el cauce y sus estrechos cahorros, directamente desde Frigiliana.',
            text:
              'Es la alternativa local y más tranquila. Desde el centro del pueblo se baja al cauce para caminar por los cahorros, estrechas gargantas de roca. Conviene saberlo: durante buena parte del recorrido, el Higuerón es un cauce seco. La presencia y cantidad de agua dependen de la lluvia y de la época del año; cuando hay agua, normalmente no pasa de los tobillos. Precisamente por eso resulta agradable en pleno verano y bastante más tranquilo que el Chíllar. Se recomienda llevar calzado de agua o sandalias deportivas con buena suela.'
          },
          {
            title: 'Río Chíllar (Nerja)',
            experience:
              'Agua hasta los tobillos y estrechos cañones de mármol — cuando vuelva a abrir el acceso.',
            text:
              'El gran clásico: caminar por agua hasta los tobillos entre estrechos cañones de mármol. Es precioso, pero actualmente permanece cerrado. El acceso está clausurado desde agosto de 2023 por motivos de prevención de incendios y seguridad. Se está preparando una reapertura con acceso controlado, aunque todavía no hay una fecha confirmada.',
            statusLink: {
              before: 'Antes de ir, ',
              label: 'comprobad el estado oficial',
              after:
                ' en la web del Ayuntamiento de Nerja. Cuando vuelva a abrir, id entre semana en junio o septiembre, o empezad a las 8:00; en julio y agosto hay mucha afluencia.',
              href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
            }
          }
        ]
      },
      {
        id: 'summits',
        title: 'Cumbres y destinos',
        routes: [
          {
            title: 'El Fuerte (cumbre)',
            duration: 'aprox. 4 h',
            elevationGain: '+700 m',
            distance: '8–9 km',
            difficulty: 'exigente',
            experience:
              'La gran panorámica de Frigiliana — en días despejados, hasta Sierra Nevada y la costa africana.',
            text:
              'La ruta emblemática de Frigiliana asciende directamente por detrás del pueblo. El antiguo enclave defensivo ofrece una panorámica inmensa que, en días despejados, alcanza Sierra Nevada y la costa africana. Empezad temprano para aprovechar el aire fresco de la mañana. El camino es empinado y pedregoso.'
          },
          {
            title: 'Ruta circular de El Acebuchal',
            duration: 'aprox. 4,5 h',
            distance: 'aprox. 13 km',
            difficulty: 'moderada',
            experience:
              'Pinar, pueblo perdido y un almuerzo rústico en una misma ruta.',
            text:
              'La ruta atraviesa pinares hasta llegar al “pueblo perdido” de El Acebuchal, abandonado después de la Guerra Civil y restaurado con mucho cuidado. Combina perfectamente naturaleza y una parada para un almuerzo rústico. Reservad mesa con antelación en el restaurante del pueblo y llevad algo de efectivo.'
          }
        ]
      }
    ],
    practical: {
      title: 'Información práctica',
      items: [
        {
          title: 'Después de llover',
          text:
            'Evitad los barrancos estrechos y elegid senderos elevados. Llevad calzado con buena suela.'
        },
        {
          title: 'Época del año',
          text:
            'La mejor época es de octubre a mayo. En verano, caminad solo a primera hora.'
        },
        {
          title: 'Orientación',
          text:
            'Los senderos se mantienen en estado natural. Recomendamos una aplicación con GPX, como Komoot o Wikiloc.'
        },
        {
          title: 'Agua',
          text:
            'No hay fuentes de agua potable en las rutas. Llevad al menos 1,5 litros por persona.'
        }
      ]
    },
    combine: {
      title: 'Después de la ruta',
      intro:
        'Podéis quedaros a cenar en Frigiliana o bajar a la costa para bañaros y almorzar temprano. Si vais por un sendero natural, calculad el regreso antes de que anochezca.',
      items: [
        {
          title: 'Playas',
          text:
            'Descansad las piernas y bajad a la costa para bañaros en el Mediterráneo.'
        },
        {
          title: 'Comer',
          text:
            'Elegid después de la ruta uno de los restaurantes o terrazas del pueblo.'
        }
      ]
    },
    closing: {
      title: 'Alojaros en Frigiliana y salir a pie desde el pueblo',
      lead:
        'Desde el casco antiguo de Frigiliana podéis empezar varias rutas a pie. Para un día de playa, Nerja queda abajo, junto a la costa.',
      availabilityCta: 'Comprobar disponibilidad',
      apartmentsCta: 'Ver apartamentos'
    }
  },
  nl: {
    routeCardLabels: {
      statsAriaLabel: 'Routegegevens',
      duration: 'Duur',
      elevationGain: 'Hoogtemeters',
      distance: 'Afstand',
      difficulty: 'Moeilijkheid',
      experience: 'De belevenis'
    },
    footerHighlights: {
      hiking: 'Wandelen & natuur',
      guide: 'Frigiliana-gids',
      stays: 'AMARA-verblijven'
    },
    hero: {
      kicker: 'Natuurgids',
      title:
        'Wandelen en natuur rond Frigiliana — de Sierra Almijara in',
      paragraphs: [
        'De paden van natuurpark Sierras de Tejeda, Almijara y Alhama beginnen direct achter Frigiliana, tussen kalkpieken, dennenbossen en open hellingen boven de Middellandse Zee.',
        'Hieronder staat de selectie op inspanning gerangschikt, van een korte ronde boven het dorp tot de top van El Fuerte.',
        'Bij deze routes zijn passende GPX-tracks te vinden op Komoot en Wikiloc.'
      ],
      imageAlt:
        'Uitzicht tussen de witte huizen van Frigiliana naar de uitlopers van de Sierra Almijara'
    },
    sectionNav: {
      panorama: 'Panorama',
      gentle: 'Rustige paden',
      rivers: 'Rivierwandelingen',
      summits: 'Toppen',
      practical: 'Goed om te weten'
    },
    routeSections: [
      {
        id: 'panorama',
        title: 'Panoramawandelingen (3–4 uur, gemiddeld)',
        intro:
          'Na regen drogen de hoger gelegen paden boven de dalen sneller op en lopen ze meestal prettiger dan de rivierbeddingen. Dit zijn onze vaste keuzes voor een gematigde wandeling van een halve dag.',
        routes: [
          {
            title: 'Frigiliana → Cruz de Pinto (rondwandeling)',
            duration: '3–3,5 uur',
            elevationGain: '+480 hm',
            distance: '7–8 km',
            difficulty: 'gemiddeld',
            experience:
              'Open hellingen en weids uitzicht op de kust, direct boven het dorp.',
            text:
              'Een panoramische rondwandeling boven Frigiliana, over open hellingen met een weids uitzicht richting de kust. Na regen is dit een van de betrouwbaardere routes, omdat de ondergrond snel opdroogt. Tip: begin aan de bovenrand van het dorp; dan krijgen jullie het mooiste uitzicht meteen aan het begin.'
          },
          {
            title: 'El Fuerte (tot aan de uitzichtpunten)',
            duration: '2–3 uur',
            difficulty: 'gemiddeld',
            experience:
              'Indrukwekkend uitzicht ruim vóór de top — ideaal voor een gematigde wandeling van een halve dag.',
            text:
              'Dit is de klassieke wandeling achter Frigiliana, zonder dat jullie helemaal naar de top hoeven. Het pad naar de uitzichtpunten beloont al met een indrukwekkend panorama. Wees na regen voorzichtig op de rotsachtige stukken; schoenen met een goede grip maken echt verschil.'
          }
        ]
      },
      {
        id: 'gentle',
        title: 'Rustige paden & uitzichtpunten',
        intro:
          'Ideaal voor een actieve rustdag of een wandeling in het gouden avondlicht, zonder speciale uitrusting.',
        routes: [
          {
            title: 'Het Lízar- en acequiapad',
            duration: 'ca. 1 uur',
            elevationGain: 'weinig',
            distance: '2–3 km',
            difficulty: 'vlak',
            experience:
              'Oude irrigatiekanalen, de avocadovallei en de zee in het avondlicht.',
            text:
              'Volg de oude irrigatiekanalen, de acequias, boven het dorp. Dit vrijwel vlakke pad in levadastijl biedt voortdurend uitzicht over de avocadovallei en de zee. Jullie kunnen beginnen bij het Lízar-reservoir of bij de kasteelruïne boven de oude kern. Vooral bij zonsondergang is het hier prachtig.'
          },
          {
            title: 'Rondje door de oude kern (Barribarto)',
            duration: 'ca. 45 min.',
            distance: 'ca. 2 km',
            difficulty: 'trappen / steil',
            experience:
              'Moorse straatjes en twaalf keramische panelen vertellen onderweg het verhaal van Frigiliana.',
            text:
              'Dwaal door de hoger gelegen Moorse wijk, langs geplaveide straatjes, poorten en handbeschilderde keramische panelen. Volg alle twaalf panelen voor een korte wandeling door de geschiedenis van de opstand van de Morisken.'
          }
        ]
      },
      {
        id: 'rivers',
        title: 'Rivierwandelingen (zomerspecial)',
        intro:
          'De beroemde “natte wandelingen” van Andalusië, waarbij de rivierbedding zelf het pad vormt.',
        routes: [
          {
            title: 'Río Higuerón (Frigiliana)',
            duration: '2–3 uur',
            elevationGain: 'weinig',
            distance: '4–5 km',
            difficulty: 'gemiddeld',
            experience:
              'Een rustige wandeling door de rivierbedding en smalle cahorros, rechtstreeks vanuit Frigiliana.',
            text:
              'Dit is de rustigere, lokale variant. Vanuit het dorpscentrum dalen jullie af naar de rivierbedding en lopen jullie door de cahorros, smalle rotskloven. Goed om eerlijk te weten: de Higuerón is over een groot deel van de route een droge rivierbedding. Of er water stroomt en hoeveel, hangt af van de regen en het seizoen; als er water staat, komt het meestal niet hoger dan de enkels. Juist daardoor is de route midden in de zomer aangenaam en duidelijk rustiger dan de Chíllar. Waterschoenen of sportsandalen met een goede grip zijn aan te raden.'
          },
          {
            title: 'Río Chíllar (Nerja)',
            experience:
              'Enkeldiep water en smalle marmeren kloven — zodra de toegang weer opengaat.',
            text:
              'De beroemde klassieker: door enkeldiep water naar smalle marmeren kloven wandelen. De route is prachtig, maar momenteel gesloten. De toegang is sinds augustus 2023 afgesloten vanwege brandpreventie en veiligheid. Er wordt gewerkt aan heropening met gereguleerde toegang, maar een vaste datum is er nog niet.',
            statusLink: {
              before: 'Controleer voor vertrek de ',
              label: 'officiële status',
              after:
                ' op de website van de gemeente Nerja. Zodra de route weer open is, kiezen jullie het best een doordeweekse dag in juni of september, of vertrekken jullie om 8.00 uur — in juli en augustus is het erg druk.',
              href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
            }
          }
        ]
      },
      {
        id: 'summits',
        title: 'Toppen & bestemmingen',
        routes: [
          {
            title: 'El Fuerte (top)',
            duration: 'ca. 4 uur',
            elevationGain: '+700 hm',
            distance: '8–9 km',
            difficulty: 'uitdagend',
            experience:
              'Het grote panorama van Frigiliana — op heldere dagen tot de Sierra Nevada en de Afrikaanse kust.',
            text:
              'De kenmerkende wandeling van Frigiliana klimt direct achter het dorp omhoog. Vanaf de historische vestingplek reikt het panorama op heldere dagen tot de Sierra Nevada en de Afrikaanse kust. Vertrek vroeg voor de koele ochtendlucht. Het pad is steil en rotsachtig.'
          },
          {
            title: 'Rondwandeling El Acebuchal',
            duration: 'ca. 4,5 uur',
            distance: 'ca. 13 km',
            difficulty: 'gemiddeld',
            experience:
              'Dennenbos, een verloren dorp en een rustieke lunch in één wandeling.',
            text:
              'De wandeling loopt door dennenbos naar het “verloren dorp” El Acebuchal, dat na de Burgeroorlog werd verlaten en liefdevol is hersteld. Het is een mooie combinatie van natuur en een rustieke lunchpauze. Reserveer vooraf een tafel in het dorpsrestaurant en neem contant geld mee.'
          }
        ]
      }
    ],
    practical: {
      title: 'Praktische informatie',
      items: [
        {
          title: 'Na regen',
          text:
            'Vermijd smalle kloven en kies hoger gelegen paden. Draag schoenen met een goed profiel.'
        },
        {
          title: 'Beste seizoen',
          text:
            'Oktober tot en met mei is de beste periode. Wandel in de zomer alleen vroeg in de ochtend.'
        },
        {
          title: 'Navigatie',
          text:
            'De paden zijn natuurlijk en niet aangelegd. Wij raden een GPX-app zoals Komoot of Wikiloc aan.'
        },
        {
          title: 'Water',
          text:
            'Langs de routes zijn geen drinkwaterpunten. Neem minstens 1,5 liter per persoon mee.'
        }
      ]
    },
    combine: {
      title: 'Na de wandeling',
      intro:
        'Blijf in Frigiliana voor het diner, of rijd naar de kust voor een duik en een vroege lunch. Plan op een natuurpad de terugweg vóór het donker wordt.',
      items: [
        {
          title: 'Stranden',
          text:
            'Geef jullie benen rust en ga naar de kust voor een duik in de Middellandse Zee.'
        },
        {
          title: 'Eten',
          text:
            'Kies na de wandeling een van de restaurants of terrassen in het dorp.'
        }
      ]
    },
    closing: {
      title: 'Overnachten in Frigiliana, wandelen vanaf het dorp',
      lead:
        'Vanuit de oude kern van Frigiliana kunnen jullie verschillende routes te voet beginnen. Voor een stranddag ligt Nerja beneden aan de kust.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Bekijk appartementen'
    }
  },
  sv: {
    routeCardLabels: {
      statsAriaLabel: 'Turinformation',
      duration: 'Tid',
      elevationGain: 'Höjdmeter',
      distance: 'Distans',
      difficulty: 'Svårighetsgrad',
      experience: 'Upplevelsen'
    },
    footerHighlights: {
      hiking: 'Vandring & natur',
      guide: 'Frigiliana-guide',
      stays: 'AMARA-boenden'
    },
    hero: {
      kicker: 'Naturguide',
      title:
        'Vandring och natur runt Frigiliana — ut i Sierra Almijara',
      paragraphs: [
        'Lederna i naturparken Sierras de Tejeda, Almijara y Alhama börjar direkt bakom Frigiliana, bland kalkstenstoppar, pinjeskog och öppna sluttningar ovanför Medelhavet.',
        'Förslagen nedan är ordnade efter ansträngningsnivå, från en kort slinga ovanför byn till toppen av El Fuerte.',
        'Passande GPX-spår för turerna finns på Komoot och Wikiloc.'
      ],
      imageAlt:
        'Utsikt mellan Frigilianas vitkalkade hus mot Sierra Almijaras utlöpare'
    },
    sectionNav: {
      panorama: 'Panorama',
      gentle: 'Lugna leder',
      rivers: 'Flodvandringar',
      summits: 'Toppturer',
      practical: 'Bra att veta'
    },
    routeSections: [
      {
        id: 'panorama',
        title: 'Panoramavandringar (3–4 timmar, medelsvåra)',
        intro:
          'Efter regn torkar de högre lederna ovanför dalarna snabbare och är oftast behagligare än flodbäddarna. Det här är våra säkra val för en medelsvår halvdagstur.',
        routes: [
          {
            title: 'Frigiliana → Cruz de Pinto (rundslinga)',
            duration: '3–3,5 tim.',
            elevationGain: '+480 höjdmeter',
            distance: '7–8 km',
            difficulty: 'medelsvår',
            experience:
              'Öppna sluttningar och vida kustvyer direkt ovanför byn.',
            text:
              'En panoramaslinga ovanför Frigiliana, över öppna sluttningar med vid utsikt mot kusten. Efter regn är det ett av de mer pålitliga alternativen eftersom marken torkar snabbt. Tips: börja vid den övre delen av byn, så får ni den vackraste utsikten redan i början.'
          },
          {
            title: 'El Fuerte (fram till utsiktsplatserna)',
            duration: '2–3 tim.',
            difficulty: 'medelsvår',
            experience:
              'Dramatiska vyer långt före toppen — perfekt för en medelsvår halvdagstur.',
            text:
              'Det här är den klassiska vandringen bakom Frigiliana, men ni behöver inte gå hela vägen till toppen. Redan leden till utsiktsplatserna bjuder på ett dramatiskt panorama. Var försiktiga på de steniga partierna efter regn; skor med bra grepp gör stor skillnad.'
          }
        ]
      },
      {
        id: 'gentle',
        title: 'Lugna leder & utsiktsplatser',
        intro:
          'Passar bra för en aktiv vilodag eller en promenad i kvällens gyllene ljus, utan särskild utrustning.',
        routes: [
          {
            title: 'Lízar- och acequialeden',
            duration: 'ca 1 tim.',
            elevationGain: 'liten',
            distance: '2–3 km',
            difficulty: 'flack',
            experience:
              'Gamla bevattningskanaler, avokadodalen och havet i kvällsljuset.',
            text:
              'Följ de gamla bevattningskanalerna, acequias, ovanför byn. Den nästan helt flacka leden påminner om Madeiras levador och ger hela tiden utsikt över avokadodalen och havet. Börja vid Lízar-reservoaren eller slottsruinen ovanför gamla stan. Särskilt fin vid solnedgången.'
          },
          {
            title: 'Rundslinga genom gamla stan (Barribarto)',
            duration: 'ca 45 min.',
            distance: 'ca 2 km',
            difficulty: 'trappor / brant',
            experience:
              'Moriska gränder och tolv keramikpaneler berättar Frigilianas historia längs vägen.',
            text:
              'Strosa genom den övre moriska stadsdelen, bland kullerstensgränder, valv och handmålade keramikpaneler. Följ de tolv panelerna för en kort vandring på egen hand genom historien om moriskernas uppror.'
          }
        ]
      },
      {
        id: 'rivers',
        title: 'Flodvandringar (sommarfavoriter)',
        intro:
          'Andalusiens berömda “våta vandringar”, där själva flodbädden blir leden.',
        routes: [
          {
            title: 'Río Higuerón (Frigiliana)',
            duration: '2–3 tim.',
            elevationGain: 'liten',
            distance: '4–5 km',
            difficulty: 'medelsvår',
            experience:
              'En lugn vandring genom flodbädden och smala cahorros, direkt från Frigiliana.',
            text:
              'Det här är det lugnare, lokala alternativet. Från byns centrum går ni ner i flodbädden och vidare genom cahorros, smala klippklyftor. Bra att känna till: under stora delar av sträckan är Higuerón en torr flodbädd. Om det finns vatten och hur mycket beror på regnet och årstiden; när vatten finns når det oftast bara till anklarna. Just därför är turen behaglig under högsommaren och betydligt lugnare än Chíllar. Vattenskor eller sportsandaler med bra grepp rekommenderas.'
          },
          {
            title: 'Río Chíllar (Nerja)',
            experience:
              'Ankeldjupt vatten och smala marmorklyftor — när tillträdet öppnar igen.',
            text:
              'Den berömda klassikern: att vandra genom ankeldjupt vatten in i smala marmorklyftor. Det är mycket vackert, men leden är för närvarande stängd. Tillträdet har varit avstängt sedan augusti 2023 av brandförebyggande skäl och säkerhetsskäl. En kontrollerad återöppning förbereds, men något fast datum finns ännu inte.',
            statusLink: {
              before: 'Kontrollera före besöket den ',
              label: 'officiella statusen',
              after:
                ' på Nerja kommuns webbplats. När leden öppnar igen är en vardag i juni eller september bäst, alternativt en start klockan 8.00 — i juli och augusti är det mycket folk.',
              href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
            }
          }
        ]
      },
      {
        id: 'summits',
        title: 'Toppar & utflyktsmål',
        routes: [
          {
            title: 'El Fuerte (toppen)',
            duration: 'ca 4 tim.',
            elevationGain: '+700 höjdmeter',
            distance: '8–9 km',
            difficulty: 'krävande',
            experience:
              'Frigilianas stora panorama — klara dagar ända till Sierra Nevada och Afrikas kust.',
            text:
              'Frigilianas signaturvandring stiger direkt bakom byn. Från den historiska fästningsplatsen öppnar sig ett stort panorama som klara dagar når Sierra Nevada och Afrikas kust. Börja tidigt för att ta vara på den svala morgonluften. Leden är brant och stenig.'
          },
          {
            title: 'Rundslingan till El Acebuchal',
            duration: 'ca 4,5 tim.',
            distance: 'ca 13 km',
            difficulty: 'medelsvår',
            experience:
              'Pinjeskog, en förlorad by och en rustik lunchpaus på samma tur.',
            text:
              'Vandringen går genom pinjeskog till den “förlorade byn” El Acebuchal, som övergavs efter inbördeskriget och senare restaurerades med stor omsorg. Det är en fin kombination av natur och en rustik lunchpaus. Boka bord på byrestaurangen i förväg och ta med kontanter.'
          }
        ]
      }
    ],
    practical: {
      title: 'Praktiskt att veta',
      items: [
        {
          title: 'Efter regn',
          text:
            'Undvik smala raviner och välj högre leder. Använd skor med bra mönster.'
        },
        {
          title: 'Bästa säsong',
          text:
            'Oktober till maj är bäst. Under sommaren bör ni bara vandra tidigt på morgonen.'
        },
        {
          title: 'Navigation',
          text:
            'Lederna är naturliga och inte tillrättalagda. Vi rekommenderar en GPX-app som Komoot eller Wikiloc.'
        },
        {
          title: 'Vatten',
          text:
            'Det finns inga dricksvattenfontäner längs lederna. Ta med minst 1,5 liter per person.'
        }
      ]
    },
    combine: {
      title: 'Efter vandringen',
      intro:
        'Stanna i Frigiliana för middag eller åk ner till kusten för ett bad och en tidig lunch. På en naturstig bör ni planera att vara tillbaka före mörkrets inbrott.',
      items: [
        {
          title: 'Stränder',
          text:
            'Låt benen vila och åk ner till kusten för ett dopp i Medelhavet.'
        },
        {
          title: 'Mat',
          text:
            'Välj någon av byns restauranger eller terrasser efter vandringen.'
        }
      ]
    },
    closing: {
      title: 'Bo i Frigiliana och börja vandringen i byn',
      lead:
        'Från Frigilianas gamla by kan ni börja flera leder till fots. För en stranddag ligger Nerja nere vid kusten.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se boenden'
    }
  }
};
