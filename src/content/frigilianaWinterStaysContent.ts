import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type StayKey = 'lounis' | 'zaid' | 'maha';

interface WinterStayCardCopy {
  title: string;
  text: string;
  cta: string;
  imageAlt: string;
}

interface FrigilianaWinterStaysCopy {
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cta: string;
    imageAlt: string;
  };
  village: {
    title: string;
    paragraphs: string[];
    weatherLink: string;
  };
  comfort: {
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  pelletStays: {
    title: string;
    stays: Record<StayKey, WinterStayCardCopy>;
  };
  farah: {
    title: string;
    paragraphs: string[];
    cta: string;
    imageAlt: string;
  };
  coast: {
    title: string;
    paragraphs: string[];
    cta: string;
    imageAlt: string;
  };
  duration: {
    title: string;
    paragraphs: string[];
  };
  chooser: {
    title: string;
    stays: Record<'farah' | StayKey, string>;
    closing: string;
    cta: string;
  };
  planning: {
    title: string;
    weather: { text: string; link: string };
    whereToStay: { text: string; link: string };
    comparison: { text: string; link: string };
  };
  finalCta: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
}

export const frigilianaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-11-frigiliana-winter-stays-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Winter Stays in Frigiliana | Heated AMARA Apartments',
      description:
        'Stay in Frigiliana for a winter break of a few days to three weeks, with heating, bathroom underfloor heating, pellet stoves and the Mediterranean coast nearby.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Winterurlaub in Frigiliana | Beheizte AMARA-Unterkünfte',
      description:
        'Winterurlaub in Frigiliana für ein paar Tage bis drei Wochen: historisches Dorf, Heizung, Fußbodenheizung im Bad, Pelletofen und die Küste bei Nerja ganz nah.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Invierno en Frigiliana | Alojamientos AMARA con calefacción',
      description:
        'Alojaos en Frigiliana unos días o hasta tres semanas en invierno, con calefacción, suelo radiante en los baños, estufas de pellets y la costa de Nerja cerca.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Winterverblijf in Frigiliana | Verwarmde AMARA-verblijven',
      description:
        'Verblijf enkele dagen tot drie weken in Frigiliana in de winter, met verwarming, vloerverwarming in de badkamers, pelletkachels en de kust bij Nerja dichtbij.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vintervistelse i Frigiliana | Uppvärmda AMARA-boenden',
      description:
        'Bo i Frigiliana några dagar eller upp till tre veckor på vintern, med värme, golvvärme i badrummen, pelletskaminer och Nerjas kust nära.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/** English is the semantic source of truth; every locale preserves the approved page job and depth. */
export const frigilianaWinterStaysContent: Record<
  AmaraLanguage,
  FrigilianaWinterStaysCopy
> = {
  en: {
    hero: {
      kicker: 'WINTER IN ANDALUSIA',
      title: 'Winter stays in Frigiliana',
      paragraphs: [
        'Frigiliana settles into a different rhythm in winter. The lanes become quieter, walking and hiking are more comfortable, and Nerja, Maro and the Mediterranean remain close enough for days by the coast.',
        'Spend your winter days among the white houses of the old village – for a few nights, a week or up to three weeks.',
        'And when you come home in the evening, something that matters far less in summer becomes important: a historic house that is comfortable indoors too.'
      ],
      cta: 'Check winter availability',
      imageAlt: 'White houses and quiet lanes in the historic village of Frigiliana'
    },
    village: {
      title: 'Frigiliana when the village slows down',
      paragraphs: [
        'Many people first discover Frigiliana on a summer day. Winter brings a different experience.',
        'Morning starts inside the old village. Walk out for breakfast or through the lanes, use the milder part of the day for a walk or hike, then head towards Nerja or the coast if you feel like the sea.',
        'In the evening, you return to Frigiliana. Restaurants and village life remain part of the stay, while the large summer visitor flows play a much smaller role in the day.',
        "For guests who want mild winter days together with the feeling of actually living somewhere for a while, this is one of Frigiliana's most appealing seasons."
      ],
      weatherLink: 'Weather & Seasons'
    },
    comfort: {
      title: 'Winter outside. Comfort inside.',
      paragraphs: [
        'A historic Andalusian house feels different in winter than it does in high summer, so indoor comfort matters.',
        'All four AMARA stays in Frigiliana have heating. Casa AMARA also has underfloor heating in the bathrooms.',
        'Lounis, Zaid and Maha add a pellet stove.',
        'Fast Wi-Fi, generous bathrooms and large showers bring everyday comfort inside a house whose historic fabric has developed over centuries.',
        'Spend the day exploring Frigiliana and the surrounding area, then come home to a warm and comfortable place in the evening.'
      ],
      imageAlt: 'Pellet stove beside the historic walls inside Casa AMARA in Frigiliana'
    },
    pelletStays: {
      title: 'Three stays with pellet stoves',
      stays: {
        lounis: {
          title: 'Lounis',
          text: 'Historic rooms, a private terrace and a pellet stove make Lounis a strong choice for couples spending a winter break or a little longer in the heart of Frigiliana.',
          cta: 'View Lounis',
          imageAlt: 'Private terrace at AMARA Lounis in historic Frigiliana'
        },
        zaid: {
          title: 'Zaid',
          text: 'Zaid combines its historic-village location with a private terrace, heating and a pellet stove – well suited to days outside and quieter winter evenings at home.',
          cta: 'View Zaid',
          imageAlt: 'Private terrace at AMARA Zaid in historic Frigiliana'
        },
        maha: {
          title: 'Maha',
          text: 'Alongside its pellet stove, Maha has an approximately 60 m² private terrace and an outdoor kitchen, giving you particularly generous private outdoor space for a longer winter holiday.',
          cta: 'View Maha',
          imageAlt: 'Large private terrace and outdoor kitchen at AMARA Maha in Frigiliana'
        }
      }
    },
    farah: {
      title: 'Farah for a shorter winter break',
      paragraphs: [
        'Farah is a more compact way to stay inside historic Frigiliana during winter.',
        "Heating is part of the stay, together with Casa AMARA's position near San Antonio in the heart of the old village.",
        'For a shorter winter break, that can be a very simple combination: Frigiliana outside the door and a comfortable place to return to in the evening.'
      ],
      cta: 'View Farah',
      imageAlt: 'Historic interior at AMARA Farah in the old village of Frigiliana'
    },
    coast: {
      title: 'Frigiliana at home. Nerja and the sea for the day.',
      paragraphs: [
        'Village and coast work particularly well together in winter.',
        'Frigiliana can be where you wake up in the morning and come home in the evening, while Nerja, Maro and the coast remain part of your days.',
        'A hire car gives you more freedom for coastal walks, larger grocery shops and wider day trips. For a straightforward day in Nerja, the bus can also work.',
        'If immediate beach access matters more to you than living in the historic village, AMARA Playa in Nerja may be the better fit.'
      ],
      cta: 'Explore Frigiliana & Nerja',
      imageAlt: 'Mediterranean coast at Nerja below the hills around Frigiliana'
    },
    duration: {
      title: 'From a few winter nights to three weeks',
      paragraphs: [
        "AMARA's Frigiliana winter stays are intended for holiday guests staying from a few nights up to a maximum of three weeks.",
        'You may simply want a short break. You may have a full week. Or you may want two or three weeks to travel more slowly and let Frigiliana become home for a little while.',
        'That leaves plenty of time for the village, the surrounding landscape and days beside the Mediterranean.'
      ]
    },
    chooser: {
      title: 'Which AMARA stay fits your winter holiday?',
      stays: {
        farah: 'A compact winter stay in the heart of the historic village.',
        lounis: 'Private terrace + pellet stove.',
        zaid: 'Private terrace + pellet stove.',
        maha: 'Pellet stove + approximately 60 m² private terrace + outdoor kitchen.'
      },
      closing: "All four stays are inside Casa AMARA in Frigiliana's historic centre and have heating.",
      cta: 'View the four stays'
    },
    planning: {
      title: 'Plan winter in Frigiliana',
      weather: {
        text: 'For temperatures, rainfall, seasonal differences and month-by-month planning, continue to our',
        link: 'Weather & Seasons guide'
      },
      whereToStay: {
        text: 'For slopes, stairs and the practical differences between parts of the village, use our',
        link: 'Where to Stay guide'
      },
      comparison: {
        text: 'And for the way Frigiliana and Nerja can work together during the same holiday, continue to our',
        link: 'Frigiliana & Nerja comparison'
      }
    },
    finalCta: {
      title: 'Your winter at Casa AMARA',
      paragraphs: [
        'Winter shows a quieter side of Frigiliana, with more room for the village, the surrounding landscape and days shaped at your own pace.',
        'In the evening, return to a historic house where old walls, modern heating, warm bathrooms and – in three stays – pellet stoves are all part of the winter experience.'
      ],
      cta: 'Check winter availability'
    }
  },
  de: {
    hero: {
      kicker: 'WINTER IN ANDALUSIEN',
      title: 'Winterurlaub in Frigiliana',
      paragraphs: [
        'Im Winter verändert Frigiliana seinen Rhythmus. Die Gassen werden ruhiger, Spaziergänge und Wanderungen angenehmer und Nerja, Maro und das Mittelmeer bleiben für den Tag ganz in der Nähe.',
        'Ihr verbringt eure Wintertage zwischen den alten weißen Häusern Frigilianas – für ein paar Tage, eine Woche oder bis zu drei Wochen.',
        'Und wenn ihr am Abend zurückkommt, zählt etwas, das im Sommer kaum jemand erwähnt: ein Zuhause, in dem man sich auch drinnen wohlfühlt.'
      ],
      cta: 'Winterverfügbarkeit prüfen',
      imageAlt: 'Weiße Häuser und ruhige Gassen im historischen Frigiliana'
    },
    village: {
      title: 'Frigiliana, wenn das Dorf ruhiger wird',
      paragraphs: [
        'Viele lernen Frigiliana an einem Sommertag kennen. Im Winter erlebt ihr das Dorf anders.',
        'Morgens beginnt der Tag direkt in der Altstadt. Ihr geht zu Fuß zum Frühstück oder durch die Gassen, nutzt die milderen Stunden für einen Spaziergang oder eine Wanderung und könnt später nach Nerja oder an die Küste fahren.',
        'Am Abend kehrt ihr wieder nach Frigiliana zurück. Restaurants und Dorfleben bleiben Teil des Aufenthalts, während die großen Besucherströme des Sommers den Tag deutlich weniger prägen.',
        'Wenn ihr milde Wintertage mit einem Ort verbinden möchtet, an dem ihr wirklich einige Tage lebt, zeigt Frigiliana gerade in dieser Jahreszeit eine besonders schöne Seite.'
      ],
      weatherLink: 'Mehr über Wetter & Jahreszeiten'
    },
    comfort: {
      title: 'Winter draußen. Komfort drinnen.',
      paragraphs: [
        'Ein historisches andalusisches Haus fühlt sich im Winter anders an als im Hochsommer. Deshalb ist für uns Winterkomfort ein wichtiges Thema.',
        'Alle vier AMARA-Unterkünfte in Frigiliana verfügen über Heizung. In Casa AMARA gibt es außerdem Fußbodenheizung in den Badezimmern.',
        'In Lounis, Zaid und Maha gehört zusätzlich ein Pelletofen zur Ausstattung.',
        'Dazu kommen schnelles WLAN, großzügige Badezimmer und große Duschen – moderner Komfort innerhalb eines Hauses, dessen historische Substanz über Jahrhunderte gewachsen ist.',
        'So könnt ihr morgens Frigiliana und die Umgebung entdecken und euch abends auf einen warmen, komfortablen Rückzugsort freuen.'
      ],
      imageAlt: 'Pelletofen neben historischen Mauern in Casa AMARA in Frigiliana'
    },
    pelletStays: {
      title: 'Drei Unterkünfte mit Pelletofen',
      stays: {
        lounis: {
          title: 'Lounis',
          text: 'Historische Räume, eigene Terrasse und Pelletofen. Lounis passt besonders gut zu Paaren, die einige Wintertage oder auch etwas länger mitten in Frigiliana verbringen möchten.',
          cta: 'Lounis ansehen',
          imageAlt: 'Private Terrasse von AMARA Lounis im historischen Frigiliana'
        },
        zaid: {
          title: 'Zaid',
          text: 'Zaid verbindet die Lage im historischen Dorf mit privater Terrasse, Heizung und Pelletofen – für Tage draußen und ruhigere Winterabende zuhause.',
          cta: 'Zaid ansehen',
          imageAlt: 'Private Terrasse von AMARA Zaid im historischen Frigiliana'
        },
        maha: {
          title: 'Maha',
          text: 'Maha bietet zusätzlich zum Pelletofen eine private Terrasse von rund 60 m² und eine Outdoor-Küche. Gerade für einen längeren Winterurlaub bietet sie besonders viel privaten Außenraum.',
          cta: 'Maha ansehen',
          imageAlt: 'Große private Terrasse mit Outdoor-Küche von AMARA Maha in Frigiliana'
        }
      }
    },
    farah: {
      title: 'Farah für einen kürzeren Winteraufenthalt',
      paragraphs: [
        'Farah ist eine kompaktere Möglichkeit für einen Winteraufenthalt mitten im historischen Frigiliana.',
        'Auch hier gehört Heizung zum Aufenthalt, ebenso die Lage in Casa AMARA nahe San Antonio und damit direkt im alten Dorf.',
        'Für einen kürzeren Winterurlaub kann genau diese Kombination interessant sein: Frigiliana vor der Haustür und ein komfortabler Rückzugsort für den Abend.'
      ],
      cta: 'Farah ansehen',
      imageAlt: 'Historisches Interieur von AMARA Farah in Frigilianas Altstadt'
    },
    coast: {
      title: 'Frigiliana zuhause. Nerja und das Meer für den Tag.',
      paragraphs: [
        'Im Winter lassen sich Dorf und Küste besonders gut miteinander verbinden.',
        'Frigiliana kann der Ort sein, an dem ihr morgens aufwacht und abends nach Hause kommt. Nerja, Maro und die Küste bleiben Teil eurer Urlaubstage.',
        'Für Strandspaziergänge, größere Einkäufe oder weitere Ausflüge gibt euch ein Mietwagen zusätzliche Freiheit. Für einen einfachen Tag in Nerja kann auch die Busverbindung funktionieren.',
        'Wenn für euch unmittelbare Strandnähe wichtiger ist als das Wohnen im historischen Dorf, kann AMARA Playa in Nerja die passendere Wahl sein.'
      ],
      cta: 'Frigiliana & Nerja entdecken',
      imageAlt: 'Mittelmeerküste bei Nerja unterhalb der Hügel von Frigiliana'
    },
    duration: {
      title: 'Von ein paar Wintertagen bis zu drei Wochen',
      paragraphs: [
        'AMARA richtet den Winteraufenthalt bewusst an Urlaubsgäste für einige Tage bis maximal drei Wochen.',
        'Vielleicht möchtet ihr nur einige Tage raus. Vielleicht habt ihr eine Woche Zeit. Oder ihr möchtet zwei oder drei Wochen langsamer reisen und Frigiliana tatsächlich zum temporären Zuhause machen.',
        'So bleibt viel Zeit für das Dorf, die Umgebung und Tage am Mittelmeer.'
      ]
    },
    chooser: {
      title: 'Welcher AMARA-Aufenthalt passt zu eurem Winterurlaub?',
      stays: {
        farah: 'Kompakter Winteraufenthalt mitten im historischen Dorf.',
        lounis: 'Private Terrasse + Pelletofen.',
        zaid: 'Private Terrasse + Pelletofen.',
        maha: 'Pelletofen + rund 60 m² private Terrasse + Outdoor-Küche.'
      },
      closing: 'Alle vier Unterkünfte befinden sich in Casa AMARA im historischen Zentrum von Frigiliana und verfügen über Heizung.',
      cta: 'Die vier Unterkünfte ansehen'
    },
    planning: {
      title: 'Winter in Frigiliana planen',
      weather: {
        text: 'Wenn ihr mehr über die Jahreszeit selbst wissen möchtet, findet ihr Temperaturen, Regen, saisonale Unterschiede und Reisezeitinformationen in unserem',
        link: 'Wetter- und Jahreszeitenguide'
      },
      whereToStay: {
        text: 'Wenn euch Lage, Treppen und tägliche Wege interessieren, erklärt unser',
        link: 'Where-to-Stay-Guide die verschiedenen Bereiche Frigilianas'
      },
      comparison: {
        text: 'Und wenn ihr wissen möchtet, wie sich Frigiliana und Nerja im selben Urlaub ergänzen, führt euch unser',
        link: 'Vergleich durch beide Aufenthaltsmodelle'
      }
    },
    finalCta: {
      title: 'Euer Winter in Casa AMARA',
      paragraphs: [
        'Im Winter zeigt Frigiliana eine ruhigere Seite: mehr Raum für das Dorf, die Landschaft und Tage, die ihr nach eurem eigenen Tempo gestaltet.',
        'Am Abend kommt ihr zurück in ein historisches Haus, in dem alte Mauern, moderne Heizung, warme Badezimmer und – in drei Unterkünften – der Pelletofen zusammengehören.'
      ],
      cta: 'Winterverfügbarkeit prüfen'
    }
  },
  es: {
    hero: {
      kicker: 'INVIERNO EN ANDALUCÍA',
      title: 'Alojarse en Frigiliana en invierno',
      paragraphs: [
        'En invierno Frigiliana cambia de ritmo. Las calles están más tranquilas, caminar y hacer rutas resulta más agradable y Nerja, Maro y el Mediterráneo siguen estando cerca para pasar el día junto al mar.',
        'Podéis vivir vuestros días de invierno entre las casas blancas del casco antiguo durante unas noches, una semana o hasta tres semanas.',
        'Y al volver por la tarde cobra importancia algo que en verano apenas se nota: sentirse a gusto también dentro de una casa histórica.'
      ],
      cta: 'Consultar disponibilidad en invierno',
      imageAlt: 'Casas blancas y calles tranquilas del casco histórico de Frigiliana'
    },
    village: {
      title: 'Frigiliana cuando el pueblo se tranquiliza',
      paragraphs: [
        'Mucha gente conoce Frigiliana por primera vez durante una visita de verano. El invierno permite vivirlo de otra manera.',
        'La mañana empieza en pleno casco antiguo. Podéis salir andando a desayunar, recorrer las calles, aprovechar las horas más suaves para caminar o hacer una ruta y después acercaros a Nerja o a la costa.',
        'Por la tarde volvéis a Frigiliana. Los restaurantes y la vida del pueblo siguen formando parte de la estancia, mientras la afluencia de visitantes del verano tiene mucho menos peso en el día.',
        'Para quienes quieren combinar días suaves de invierno con la sensación de vivir durante un tiempo en un pueblo de verdad, esta estación tiene un encanto especial.'
      ],
      weatherLink: 'Clima y estaciones'
    },
    comfort: {
      title: 'Invierno fuera. Confort dentro.',
      paragraphs: [
        'Una casa histórica andaluza se vive de forma distinta en invierno que en pleno verano, por eso el confort interior importa.',
        'Los cuatro alojamientos AMARA de Frigiliana tienen calefacción. Casa AMARA cuenta además con suelo radiante en los baños.',
        'Lounis, Zaid y Maha disponen también de estufa de pellets.',
        'El wifi rápido, los baños amplios y las duchas grandes aportan comodidad cotidiana dentro de una casa cuya estructura histórica se ha formado a lo largo de los siglos.',
        'Así podéis pasar el día descubriendo Frigiliana y sus alrededores y volver por la tarde a un espacio cálido y confortable.'
      ],
      imageAlt: 'Estufa de pellets junto a los muros históricos de Casa AMARA en Frigiliana'
    },
    pelletStays: {
      title: 'Tres alojamientos con estufa de pellets',
      stays: {
        lounis: {
          title: 'Lounis',
          text: 'Estancias históricas, terraza privada y estufa de pellets. Lounis funciona muy bien para parejas que quieren pasar unos días de invierno, o algo más de tiempo, en pleno Frigiliana.',
          cta: 'Ver Lounis',
          imageAlt: 'Terraza privada de AMARA Lounis en el Frigiliana histórico'
        },
        zaid: {
          title: 'Zaid',
          text: 'Zaid combina su ubicación en el pueblo histórico con terraza privada, calefacción y estufa de pellets, ideal para días fuera y tardes de invierno más tranquilas en casa.',
          cta: 'Ver Zaid',
          imageAlt: 'Terraza privada de AMARA Zaid en el Frigiliana histórico'
        },
        maha: {
          title: 'Maha',
          text: 'Además de la estufa de pellets, Maha ofrece una terraza privada de unos 60 m² y cocina exterior, con mucho espacio exterior privado para unas vacaciones de invierno algo más largas.',
          cta: 'Ver Maha',
          imageAlt: 'Gran terraza privada con cocina exterior de AMARA Maha en Frigiliana'
        }
      }
    },
    farah: {
      title: 'Farah para una escapada de invierno más corta',
      paragraphs: [
        'Farah es una opción más compacta para alojarse en pleno Frigiliana histórico durante el invierno.',
        'Cuenta con calefacción y comparte la ubicación de Casa AMARA junto a San Antonio, directamente dentro del casco antiguo.',
        'Para una escapada de invierno más corta puede ser una combinación muy cómoda: Frigiliana al salir por la puerta y un lugar agradable al que volver por la tarde.'
      ],
      cta: 'Ver Farah',
      imageAlt: 'Interior histórico de AMARA Farah en el casco antiguo de Frigiliana'
    },
    coast: {
      title: 'Frigiliana como casa. Nerja y el mar durante el día.',
      paragraphs: [
        'En invierno el pueblo y la costa se combinan especialmente bien.',
        'Frigiliana puede ser el lugar donde despertáis y al que volvéis por la tarde, mientras Nerja, Maro y la costa forman parte de vuestros días.',
        'Un coche de alquiler os da más libertad para paseos junto al mar, compras grandes y excursiones por la zona. Para un día sencillo en Nerja también puede servir el autobús.',
        'Si para vosotros pesa más tener la playa inmediatamente cerca que vivir en el pueblo histórico, AMARA Playa en Nerja puede encajar mejor.'
      ],
      cta: 'Descubrir Frigiliana y Nerja',
      imageAlt: 'Costa mediterránea de Nerja bajo las colinas de Frigiliana'
    },
    duration: {
      title: 'De unas noches de invierno a tres semanas',
      paragraphs: [
        'Las estancias de invierno de AMARA en Frigiliana están pensadas para vacaciones de unas noches hasta un máximo de tres semanas.',
        'Quizá queráis simplemente una escapada. Tal vez tengáis una semana. O quizá dos o tres semanas para viajar con más calma y convertir Frigiliana en casa durante un tiempo.',
        'Así queda tiempo de sobra para disfrutar del pueblo, el paisaje y los días junto al Mediterráneo.'
      ]
    },
    chooser: {
      title: '¿Qué alojamiento AMARA encaja con vuestro invierno?',
      stays: {
        farah: 'Una estancia compacta en pleno pueblo histórico.',
        lounis: 'Terraza privada + estufa de pellets.',
        zaid: 'Terraza privada + estufa de pellets.',
        maha: 'Estufa de pellets + terraza privada de unos 60 m² + cocina exterior.'
      },
      closing: 'Los cuatro alojamientos están en Casa AMARA, en el centro histórico de Frigiliana, y disponen de calefacción.',
      cta: 'Ver los cuatro alojamientos'
    },
    planning: {
      title: 'Planear el invierno en Frigiliana',
      weather: {
        text: 'Para temperaturas, lluvia, diferencias entre estaciones y planificación por meses, consultad nuestra guía de',
        link: 'Clima y estaciones'
      },
      whereToStay: {
        text: 'Para conocer cuestas, escaleras y diferencias prácticas entre las distintas zonas del pueblo, utilizad nuestra guía',
        link: 'Dónde alojarse'
      },
      comparison: {
        text: 'Y para entender cómo Frigiliana y Nerja pueden complementarse durante las mismas vacaciones, continuad con nuestra comparación',
        link: 'Frigiliana y Nerja'
      }
    },
    finalCta: {
      title: 'Vuestro invierno en Casa AMARA',
      paragraphs: [
        'El invierno muestra una cara más tranquila de Frigiliana, con más espacio para el pueblo, el paisaje y días vividos a vuestro propio ritmo.',
        'Al caer la tarde volvéis a una casa histórica donde los muros antiguos, la calefacción moderna, los baños cálidos y –en tres alojamientos– las estufas de pellets forman parte de la experiencia de invierno.'
      ],
      cta: 'Consultar disponibilidad en invierno'
    }
  },
  nl: {
    hero: {
      kicker: 'WINTER IN ANDALUSIË',
      title: 'Winterverblijf in Frigiliana',
      paragraphs: [
        'In de winter krijgt Frigiliana een ander ritme. De straatjes worden rustiger, wandelen is aangenamer en Nerja, Maro en de Middellandse Zee blijven dichtbij voor een dag aan de kust.',
        'Breng jullie winterdagen door tussen de witte huizen van het oude dorp – een paar nachten, een week of maximaal drie weken.',
        "Wanneer jullie 's avonds thuiskomen, wordt iets belangrijk dat in de zomer veel minder opvalt: ook binnen comfortabel kunnen wonen in een historisch huis."
      ],
      cta: 'Bekijk winterbeschikbaarheid',
      imageAlt: 'Witte huizen en rustige straatjes in het historische Frigiliana'
    },
    village: {
      title: 'Frigiliana wanneer het dorp rustiger wordt',
      paragraphs: [
        'Veel mensen leren Frigiliana kennen tijdens een zomerse dagtrip. In de winter ervaren jullie het dorp anders.',
        'De ochtend begint midden in de oude kern. Loop naar buiten voor ontbijt of een wandeling door de straatjes, gebruik de mildere uren voor een langere wandeling en rijd later eventueel naar Nerja of de kust.',
        "'s Avonds keren jullie terug naar Frigiliana. Restaurants en het dorpsleven blijven onderdeel van het verblijf, terwijl de grote bezoekersstromen van de zomer veel minder bepalend zijn.",
        'Voor wie milde winterdagen wil combineren met een plek waar je werkelijk enkele dagen woont, is dit een bijzonder fijne tijd om Frigiliana te ervaren.'
      ],
      weatherLink: 'Weer & seizoenen'
    },
    comfort: {
      title: 'Winter buiten. Comfort binnen.',
      paragraphs: [
        'Een historisch Andalusisch huis voelt in de winter anders dan midden in de zomer. Daarom is comfort binnenshuis belangrijk.',
        'Alle vier de AMARA-verblijven in Frigiliana hebben verwarming. Casa AMARA heeft bovendien vloerverwarming in de badkamers.',
        'Lounis, Zaid en Maha hebben daarnaast een pelletkachel.',
        'Snelle wifi, ruime badkamers en grote douches zorgen voor hedendaags comfort binnen een huis waarvan de historische structuur door de eeuwen heen is gegroeid.',
        "Zo kunnen jullie overdag Frigiliana en de omgeving ontdekken en 's avonds terugkeren naar een warme, comfortabele plek."
      ],
      imageAlt: 'Pelletkachel naast de historische muren van Casa AMARA in Frigiliana'
    },
    pelletStays: {
      title: 'Drie verblijven met pelletkachel',
      stays: {
        lounis: {
          title: 'Lounis',
          text: 'Historische kamers, een privéterras en pelletkachel maken Lounis geschikt voor stellen die enkele winterdagen of wat langer midden in Frigiliana willen verblijven.',
          cta: 'Bekijk Lounis',
          imageAlt: 'Privéterras van AMARA Lounis in historisch Frigiliana'
        },
        zaid: {
          title: 'Zaid',
          text: 'Zaid combineert de ligging in het historische dorp met een privéterras, verwarming en pelletkachel – prettig na dagen buiten en voor rustige winteravonden thuis.',
          cta: 'Bekijk Zaid',
          imageAlt: 'Privéterras van AMARA Zaid in historisch Frigiliana'
        },
        maha: {
          title: 'Maha',
          text: 'Naast de pelletkachel heeft Maha een privéterras van ongeveer 60 m² en een buitenkeuken, met bijzonder veel privé-buitenruimte voor een langer winterverblijf.',
          cta: 'Bekijk Maha',
          imageAlt: 'Groot privéterras met buitenkeuken van AMARA Maha in Frigiliana'
        }
      }
    },
    farah: {
      title: 'Farah voor een korter winterverblijf',
      paragraphs: [
        'Farah is een compactere manier om in de winter midden in historisch Frigiliana te verblijven.',
        'Ook hier hoort verwarming bij het verblijf, samen met de ligging van Casa AMARA vlak bij San Antonio in de oude dorpskern.',
        "Voor een kortere wintervakantie kan dat precies genoeg zijn: Frigiliana direct buiten de deur en een comfortabele plek om 's avonds naar terug te keren."
      ],
      cta: 'Bekijk Farah',
      imageAlt: 'Historisch interieur van AMARA Farah in de oude kern van Frigiliana'
    },
    coast: {
      title: 'Frigiliana als thuis. Nerja en de zee voor overdag.',
      paragraphs: [
        'In de winter passen dorp en kust bijzonder goed bij elkaar.',
        "Frigiliana kan de plek zijn waar jullie wakker worden en 's avonds thuiskomen, terwijl Nerja, Maro en de kust onderdeel blijven van de dag.",
        'Een huurauto geeft meer vrijheid voor wandelingen aan zee, grotere boodschappen en uitstapjes in de omgeving. Voor een eenvoudige dag in Nerja kan ook de bus werken.',
        'Als directe toegang tot het strand belangrijker is dan wonen in het historische dorp, kan AMARA Playa in Nerja beter passen.'
      ],
      cta: 'Ontdek Frigiliana & Nerja',
      imageAlt: 'Middellandse Zeekust bij Nerja onder de heuvels rond Frigiliana'
    },
    duration: {
      title: 'Van enkele winternachten tot drie weken',
      paragraphs: [
        'De winterverblijven van AMARA in Frigiliana zijn bedoeld voor vakanties van enkele nachten tot maximaal drie weken.',
        'Misschien willen jullie er gewoon even tussenuit. Misschien hebben jullie een hele week. Of twee of drie weken om rustiger te reizen en Frigiliana tijdelijk als thuis te ervaren.',
        'Dat geeft volop tijd voor het dorp, het landschap en dagen aan de Middellandse Zee.'
      ]
    },
    chooser: {
      title: 'Welk AMARA-verblijf past bij jullie wintervakantie?',
      stays: {
        farah: 'Een compact winterverblijf midden in het historische dorp.',
        lounis: 'Privéterras + pelletkachel.',
        zaid: 'Privéterras + pelletkachel.',
        maha: 'Pelletkachel + privéterras van ongeveer 60 m² + buitenkeuken.'
      },
      closing: 'Alle vier verblijven liggen in Casa AMARA in het historische centrum van Frigiliana en hebben verwarming.',
      cta: 'Bekijk de vier verblijven'
    },
    planning: {
      title: 'Plan de winter in Frigiliana',
      weather: {
        text: 'Voor temperaturen, regen, seizoensverschillen en planning per maand vinden jullie meer in onze gids',
        link: 'Weer & seizoenen'
      },
      whereToStay: {
        text: 'Voor hellingen, trappen en de praktische verschillen tussen delen van het dorp is er onze gids',
        link: 'Waar overnachten'
      },
      comparison: {
        text: 'En voor de manier waarop Frigiliana en Nerja elkaar tijdens dezelfde vakantie aanvullen, lees onze vergelijking',
        link: 'Frigiliana & Nerja'
      }
    },
    finalCta: {
      title: 'Jullie winter in Casa AMARA',
      paragraphs: [
        'In de winter laat Frigiliana een rustigere kant zien, met meer ruimte voor het dorp, het landschap en dagen in jullie eigen tempo.',
        "'s Avonds keren jullie terug naar een historisch huis waar oude muren, moderne verwarming, warme badkamers en – in drie verblijven – pelletkachels samen deel uitmaken van de winterervaring."
      ],
      cta: 'Bekijk winterbeschikbaarheid'
    }
  },
  sv: {
    hero: {
      kicker: 'VINTER I ANDALUSIEN',
      title: 'Vintervistelse i Frigiliana',
      paragraphs: [
        'På vintern får Frigiliana ett annat tempo. Gränderna blir lugnare, promenader och vandringar behagligare och Nerja, Maro och Medelhavet finns fortfarande nära för dagar vid kusten.',
        'Tillbringa vinterdagarna bland de vita husen i den gamla byn – några nätter, en vecka eller upp till tre veckor.',
        'När ni kommer hem på kvällen blir något som märks mycket mindre på sommaren viktigt: att också ha det varmt och bekvämt inne i ett historiskt hus.'
      ],
      cta: 'Se tillgänglighet i vinter',
      imageAlt: 'Vita hus och lugna gränder i historiska Frigiliana'
    },
    village: {
      title: 'Frigiliana när byn blir lugnare',
      paragraphs: [
        'Många möter Frigiliana första gången under en sommardag. På vintern får ni uppleva byn på ett annat sätt.',
        'Morgonen börjar mitt i den gamla byn. Gå ut för frukost eller en promenad i gränderna, använd dagens mildare timmar till en längre vandring och åk sedan vidare mot Nerja eller kusten om ni vill ha havet.',
        'På kvällen återvänder ni till Frigiliana. Restauranger och byliv fortsätter att vara en del av vistelsen, medan sommarens stora besöksströmmar spelar en mindre roll.',
        'För er som vill kombinera mildare vinterdagar med känslan av att faktiskt bo på en plats under en tid är vintern en fin tid att upptäcka Frigiliana.'
      ],
      weatherLink: 'Väder & årstider'
    },
    comfort: {
      title: 'Vinter ute. Komfort inne.',
      paragraphs: [
        'Ett historiskt andalusiskt hus känns annorlunda på vintern än mitt i högsommaren. Därför spelar komforten inomhus stor roll.',
        'Alla fyra AMARA-boenden i Frigiliana har uppvärmning. Casa AMARA har dessutom golvvärme i badrummen.',
        'Lounis, Zaid och Maha har också pelletskamin.',
        'Snabbt wifi, rymliga badrum och stora duschar ger modern vardagskomfort i ett hus vars historiska struktur vuxit fram under århundraden.',
        'Tillbringa dagen i Frigiliana och omgivningarna och kom sedan hem till en varm och bekväm plats på kvällen.'
      ],
      imageAlt: 'Pelletskamin intill de historiska väggarna i Casa AMARA i Frigiliana'
    },
    pelletStays: {
      title: 'Tre boenden med pelletskamin',
      stays: {
        lounis: {
          title: 'Lounis',
          text: 'Historiska rum, privat terrass och pelletskamin gör Lounis till ett bra val för par som vill tillbringa några vinterdagar eller lite längre mitt i Frigiliana.',
          cta: 'Se Lounis',
          imageAlt: 'Privat terrass på AMARA Lounis i historiska Frigiliana'
        },
        zaid: {
          title: 'Zaid',
          text: 'Zaid kombinerar läget i den historiska byn med privat terrass, uppvärmning och pelletskamin – bra för dagar ute och lugnare vinterkvällar hemma.',
          cta: 'Se Zaid',
          imageAlt: 'Privat terrass på AMARA Zaid i historiska Frigiliana'
        },
        maha: {
          title: 'Maha',
          text: 'Utöver pelletskaminen har Maha en privat terrass på omkring 60 m² och ett utomhuskök, vilket ger gott om privat utomhusutrymme under en längre vintersemester.',
          cta: 'Se Maha',
          imageAlt: 'Stor privat terrass med utomhuskök på AMARA Maha i Frigiliana'
        }
      }
    },
    farah: {
      title: 'Farah för en kortare vintervistelse',
      paragraphs: [
        'Farah är ett mer kompakt sätt att bo mitt i historiska Frigiliana under vintern.',
        'Här finns uppvärmning, tillsammans med Casa AMARA:s läge nära San Antonio direkt i den gamla byn.',
        'För en kortare vintersemester kan det vara en enkel och fin kombination: Frigiliana utanför dörren och en bekväm plats att komma hem till på kvällen.'
      ],
      cta: 'Se Farah',
      imageAlt: 'Historisk interiör på AMARA Farah i Frigilianas gamla by'
    },
    coast: {
      title: 'Frigiliana som hemma. Nerja och havet på dagen.',
      paragraphs: [
        'På vintern passar by och kust särskilt bra tillsammans.',
        'Frigiliana kan vara platsen där ni vaknar på morgonen och kommer hem på kvällen, medan Nerja, Maro och kusten fortsätter att vara en del av dagarna.',
        'En hyrbil ger större frihet för promenader längs havet, större inköp och utflykter i området. För en enkel dag i Nerja kan även bussen fungera.',
        'Om direkt närhet till stranden är viktigare än att bo i den historiska byn kan AMARA Playa i Nerja passa bättre.'
      ],
      cta: 'Upptäck Frigiliana & Nerja',
      imageAlt: 'Medelhavskusten vid Nerja nedanför kullarna kring Frigiliana'
    },
    duration: {
      title: 'Från några vinternätter till tre veckor',
      paragraphs: [
        'AMARA:s vintervistelser i Frigiliana är avsedda för semesterresor från några nätter upp till maximalt tre veckor.',
        'Kanske vill ni bara komma bort några dagar. Kanske har ni en hel vecka. Eller två eller tre veckor för att resa långsammare och låta Frigiliana bli hemma för en liten stund.',
        'Det ger gott om tid för byn, landskapet och dagar vid Medelhavet.'
      ]
    },
    chooser: {
      title: 'Vilket AMARA-boende passar er vintersemester?',
      stays: {
        farah: 'En kompakt vintervistelse mitt i den historiska byn.',
        lounis: 'Privat terrass + pelletskamin.',
        zaid: 'Privat terrass + pelletskamin.',
        maha: 'Pelletskamin + cirka 60 m² privat terrass + utomhuskök.'
      },
      closing: 'Alla fyra boenden finns i Casa AMARA i Frigilianas historiska centrum och har uppvärmning.',
      cta: 'Se de fyra boendena'
    },
    planning: {
      title: 'Planera vintern i Frigiliana',
      weather: {
        text: 'För temperaturer, regn, skillnader mellan årstiderna och planering månad för månad finns vår guide',
        link: 'Väder & årstider'
      },
      whereToStay: {
        text: 'För backar, trappor och de praktiska skillnaderna mellan olika delar av byn finns vår guide',
        link: 'Var ska man bo'
      },
      comparison: {
        text: 'Och för hur Frigiliana och Nerja kan komplettera varandra under samma semester kan ni läsa vår jämförelse',
        link: 'Frigiliana & Nerja'
      }
    },
    finalCta: {
      title: 'Er vinter i Casa AMARA',
      paragraphs: [
        'På vintern visar Frigiliana en lugnare sida, med mer utrymme för byn, landskapet och dagar i ert eget tempo.',
        'På kvällen kommer ni hem till ett historiskt hus där gamla väggar, modern uppvärmning, varma badrum och – i tre boenden – pelletskaminer tillsammans blir en del av vintervistelsen.'
      ],
      cta: 'Se tillgänglighet i vinter'
    }
  }
};
