import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaOrNerjaPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lead: string;
    body: string[];
    imageAlt: string;
  };
  coreQuestion: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  decisionFactors: {
    eyebrow: string;
    title: string;
    items: {
      number: string;
      title: string;
      frigiliana: string;
      nerja: string;
    }[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    frigiliana: {
      title: string;
      paragraphs: string[];
      cta: string;
    };
    nerja: {
      title: string;
      paragraphs: string[];
      cta: string;
    };
  };
  experienceBoth: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
  microLocations: {
    eyebrow: string;
    title: string;
    frigiliana: {
      title: string;
      text: string;
      cta: string;
    };
    nerja: {
      title: string;
      text: string;
      cta: string;
    };
  };
  amara: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    frigilianaCta: string;
    nerjaCta: string;
  };
}

export const frigilianaOrNerjaSeo: AmaraAuthoringSeo = {
  version: '2026-08-12-frigiliana-or-nerja-v3',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Frigiliana or Nerja: Where to Stay? | AMARA',
      description:
        'Frigiliana or Nerja? Compare the everyday feel of village and coast, walking, beach access and mobility — then choose where you want to make your base.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana oder Nerja: Wo übernachten? | AMARA',
      description:
        'Frigiliana oder Nerja? Vergleicht Dorf und Küste im Alltag, Wege, Strandnähe und Mobilität – und entscheidet, wo ihr im Urlaub wohnen möchtet.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana o Nerja: ¿dónde alojarse? | AMARA',
      description:
        '¿Frigiliana o Nerja? Comparad el día a día en el pueblo y la costa, los recorridos a pie, el acceso a la playa y la movilidad para elegir dónde alojaros.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana of Nerja: waar overnachten? | AMARA',
      description:
        'Frigiliana of Nerja? Vergelijk het leven in het dorp en aan de kust, wandelroutes, strandtoegang en vervoer, en kies waar jullie willen verblijven.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana eller Nerja: var ska man bo? | AMARA',
      description:
        'Frigiliana eller Nerja? Jämför vardagen i byn och vid kusten, promenader, strandläge och hur ni tar er runt – och välj var ni vill bo.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth. Each locale preserves the same
 * decision path and claim boundaries in natural guest-facing language.
 */
export const frigilianaOrNerjaContent: Record<
  AmaraLanguage,
  FrigilianaOrNerjaPageCopy
> = {
  en: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana or Nerja',
      subtitle: 'Where to stay?',
      lead:
        'They are close enough to experience both. The real choice is which place you want around you at the beginning and end of each day.',
      body: [
        'Stay in Frigiliana and the historic village becomes home, with Nerja and the coast available for beach days and outings. Stay in Nerja and the sea, town and everyday coastal life become your starting point, while Frigiliana remains close enough to visit easily.',
        'You are not choosing which place to miss. You are choosing where you want to wake up.'
      ],
      imageAlt:
        'White houses and alleys in Frigiliana with a view towards the coast'
    },
    coreQuestion: {
      eyebrow: 'The real question',
      title: 'Where do you want to wake up — and come home to?',
      paragraphs: [
        'A day trip can show you both places. Staying there is different.',
        'Your base shapes the ordinary moments of the holiday: where you go for a morning coffee, what is outside the door after dinner, whether the beach is part of an everyday walk and how much transport you want to organise.',
        'Frigiliana and Nerja are close. Their daily rhythms are not the same.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Decision factors',
      title: 'Four differences that shape the stay.',
      items: [
        {
          number: '01',
          title: 'Everyday setting',
          frigiliana:
            'You wake up inside a historic hillside village, with white lanes, restaurants and village life around you.',
          nerja:
            'You wake up in a coastal town where beaches, shops, restaurants and everyday services can be integrated into the day, depending on the area you choose.'
        },
        {
          number: '02',
          title: 'Beach routine',
          frigiliana:
            'The coast becomes something you deliberately include in the day. You can spend hours by the sea and return to the village afterwards.',
          nerja:
            'In the right part of Nerja, going to the beach can be as spontaneous as going out for coffee or dinner. When spontaneous beach access and a coast-first daily routine matter most, Nerja can be the stronger base.'
        },
        {
          number: '03',
          title: 'Walking & topography',
          frigiliana:
            'The village climbs the hillside. The exact position within Frigiliana determines how much elevation, paving and steps become part of each return. A lower historic-core location can reduce repeated climbing, but lower does not mean flat or step-free.',
          nerja:
            'Nerja also has varied walking terrain: Old Town, Torrecilla, Carabeo, Burriana and the residential hills all create different patterns. If repeated climbs or stairs would materially reduce your enjoyment, a carefully selected central Nerja location may be the more practical base; the exact street, beach route and building access still matter.'
        },
        {
          number: '04',
          title: 'Car use & transport',
          frigiliana:
            'A car gives you the most freedom for beaches and the wider region, although a stay can also work without one if your plans remain relatively simple.',
          nerja:
            'A well-chosen central location can work very well without a car. Further out, a car becomes more useful — while central parking can also become part of the trade-off.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Choose your base',
      title: 'Two places. Two ways to start and end the day.',
      frigiliana: {
        title: 'Frigiliana as your base',
        paragraphs: [
          'Frigiliana can be the stronger base when the historic hillside village itself should be the overnight environment — quieter mornings and evenings beyond the main day-visitor rhythm, slower village-first days and a return to the old town at night.',
          'With an appropriate village or historic-core location, dinner and everyday village life can become part of the walking routine. The coast remains an outing rather than the defining address; a lower historic-core position can reduce repeated climbing, but it is neither automatically flat nor step-free.'
        ],
        cta: 'Explore staying in Frigiliana'
      },
      nerja: {
        title: 'Nerja as your base',
        paragraphs: [
          'Nerja may be the better base when spontaneous beach time and a coast-first daily routine take priority, especially in a carefully chosen central area where restaurants, shops and everyday services fit easily into the day.',
          'It may also be the more practical choice when repeated climbs or stairs are a major concern, but only after checking the exact street, beach route and building access: Torrecilla, the Old Town, Carabeo, Burriana and the residential hills offer noticeably different routines.'
        ],
        cta: 'Explore staying in Nerja'
      }
    },
    experienceBoth: {
      title: 'Choose where to wake up. Experience both.',
      paragraphs: [
        'Whichever base you choose, the other place does not disappear from the trip.',
        'Frigiliana and Nerja are close enough to combine during the same stay. Public transport, taxis and driving all make daytime movement between village and coast possible, while a car gives more flexibility for later evenings and wider plans.',
        'The places can share one trip, but the bases are not interchangeable: where you wake and return, whether coast or village is the daily default, and which walking and transport patterns you repeat still shape the stay.'
      ],
      cta: 'How to get between Frigiliana and the coast'
    },
    microLocations: {
      eyebrow: 'Once the base is clear',
      title: 'Then choose the right part of town or village.',
      frigiliana: {
        title: 'Staying in Frigiliana?',
        text:
          'Compare the lower historic centre, upper Barribarto, the newer lower village and countryside locations — including the walking and access differences that matter over several days.',
        cta: 'Where to stay in Frigiliana'
      },
      nerja: {
        title: 'Staying in Nerja?',
        text:
          'Compare the Old Town, Torrecilla, Carabeo, Burriana and the residential hills by beach access, walking, mobility and everyday routines.',
        cta: 'Where to stay in Nerja'
      }
    },
    amara: {
      eyebrow: 'Stay with AMARA',
      title: 'We host in both places.',
      paragraphs: [
        "AMARA has four stays in Frigiliana's historic centre and AMARA Playa in west-central Nerja.",
        'Choose the base first. Then choose the stay that fits the way you want to travel.'
      ],
      frigilianaCta: 'View AMARA stays in Frigiliana',
      nerjaCta: 'View AMARA Playa'
    }
  },
  de: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana oder Nerja',
      subtitle: 'Wo übernachten?',
      lead:
        'Beide Orte liegen nah genug beieinander, um sie während derselben Reise zu erleben. Entscheidend ist, welcher Ort euch morgens und abends umgeben soll.',
      body: [
        'Wohnt ihr in Frigiliana, wird das historische Dorf zu eurem Zuhause, während Nerja und die Küste für Strandtage und Ausflüge erreichbar bleiben. Wohnt ihr in Nerja, beginnen eure Tage am Meer und in der Stadt; Frigiliana lässt sich trotzdem leicht besuchen.',
        'Ihr entscheidet also nicht, auf welchen Ort ihr verzichtet. Ihr entscheidet, wo ihr aufwachen möchtet.'
      ],
      imageAlt:
        'Weiße Häuser und Gassen in Frigiliana mit Blick Richtung Küste'
    },
    coreQuestion: {
      eyebrow: 'Die eigentliche Frage',
      title: 'Wo wollt ihr aufwachen – und abends nach Hause kommen?',
      paragraphs: [
        'Bei einem Tagesausflug könnt ihr beide Orte kennenlernen. Dort zu wohnen, fühlt sich anders an.',
        'Euer Urlaubsort prägt die selbstverständlichen Momente: wo ihr morgens Kaffee trinkt, was nach dem Abendessen vor der Tür liegt, ob der Strand zum täglichen Spaziergang gehört und wie oft ihr eure Wege mit Bus, Taxi oder Auto planen möchtet.',
        'Frigiliana und Nerja liegen nah beieinander. Im Alltag fühlen sie sich dennoch unterschiedlich an.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Was im Alltag zählt',
      title: 'Vier Unterschiede, die euren Aufenthalt prägen.',
      items: [
        {
          number: '01',
          title: 'Die Umgebung im Alltag',
          frigiliana:
            'Ihr wacht in einem historischen Dorf am Hang auf. Weiße Gassen, Restaurants und das Dorfleben liegen direkt um euch herum.',
          nerja:
            'Ihr wacht in einer Küstenstadt auf. Je nach Viertel lassen sich Strände, Geschäfte, Restaurants und alles für den Alltag gut in den Tag einbauen.'
        },
        {
          number: '02',
          title: 'Der Weg zum Strand',
          frigiliana:
            'Ein Tag am Meer wird bewusst eingeplant. Ihr könnt Stunden an der Küste verbringen und danach ins Dorf zurückkehren.',
          nerja:
            'In der passenden Lage kann der Weg zum Strand so spontan sein wie der Gang zum Café oder Restaurant. Wenn spontaner Strandzugang und ein Alltag an der Küste im Mittelpunkt stehen, kann Nerja als Urlaubsort die bessere Wahl sein.'
        },
        {
          number: '03',
          title: 'Wege & Höhenunterschiede',
          frigiliana:
            'Das Dorf zieht sich den Hang hinauf. Die genaue Lage in Frigiliana entscheidet, wie viele Steigungen, gepflasterte Wege und Stufen zu jedem Rückweg gehören. Eine Lage im unteren historischen Zentrum kann wiederholte Anstiege verringern; „weiter unten“ bedeutet jedoch weder eben noch stufenlos.',
          nerja:
            'Auch in Nerja unterscheiden sich Steigungen, Treppen und Wege: Altstadt, Torrecilla, Carabeo, Burriana und die Wohnlagen am Hang bringen jeweils andere Anforderungen mit sich. Wenn wiederholte Anstiege oder Treppen den Urlaub deutlich beeinträchtigen würden, kann eine sorgfältig gewählte zentrale Lage in Nerja praktischer sein; die genaue Straße, der Weg zum Strand und der Gebäudezugang bleiben entscheidend.'
        },
        {
          number: '04',
          title: 'Auto & Verkehrsmittel',
          frigiliana:
            'Mit einem Auto seid ihr für Strände und Ausflüge in die Region am flexibelsten. Auch ohne Auto kann der Aufenthalt funktionieren, wenn eure Pläne überschaubar bleiben.',
          nerja:
            'In einer gut gewählten zentralen Lage kommt ihr sehr gut ohne Auto aus. Weiter außerhalb wird ein Auto nützlicher; im Zentrum müsst ihr zugleich das Parken berücksichtigen.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Wählt euren Urlaubsort',
      title: 'Zwei Orte. Zwei Arten, den Tag zu beginnen und ausklingen zu lassen.',
      frigiliana: {
        title: 'Frigiliana als Urlaubsort',
        paragraphs: [
          'Frigiliana kann als Urlaubsort die stärkere Wahl sein, wenn das historische Dorf am Hang selbst die Umgebung des Aufenthalts sein soll: ruhigere Morgen und Abende, wenn weniger Tagesgäste im Dorf sind, langsamere dorforientierte Tage und die Rückkehr in die Altstadt am Abend.',
          'Bei einer passenden Lage im Dorf oder historischen Zentrum können Restaurantbesuche und der Dorfalltag zu Fuß dazugehören. Die Küste bleibt ein Ausflug statt die bestimmende Adresse; eine Lage im unteren historischen Zentrum kann wiederholte Anstiege verringern, ist aber weder automatisch eben noch stufenlos.'
        ],
        cta: 'Wohnen in Frigiliana entdecken'
      },
      nerja: {
        title: 'Nerja als Urlaubsort',
        paragraphs: [
          'Nerja kann als Urlaubsort die bessere Wahl sein, wenn spontane Strandzeit und ein Alltag an der Küste Vorrang haben — besonders in einer sorgfältig gewählten zentralen Lage, in der Restaurants, Geschäfte und vieles für den Alltag gut erreichbar sind.',
          'Auch wenn wiederholte Anstiege oder Treppen stark ins Gewicht fallen, kann Nerja praktischer sein — aber erst nach Prüfung der genauen Straße, des Weges zum Strand und des Gebäudezugangs: Torrecilla, Altstadt, Carabeo, Burriana und die Wohnlagen am Hang bieten spürbar unterschiedliche Tagesabläufe.'
        ],
        cta: 'Wohnen in Nerja entdecken'
      }
    },
    experienceBoth: {
      title: 'Wählt, wo ihr aufwacht. Erlebt beide Orte.',
      paragraphs: [
        'Für welchen Urlaubsort ihr euch auch entscheidet: Der andere verschwindet nicht aus der Reise.',
        'Frigiliana und Nerja liegen nah genug beieinander, um sie während desselben Aufenthalts zu verbinden. Öffentliche Verkehrsmittel, Taxis und das Auto ermöglichen tagsüber Wege zwischen Dorf und Küste; mit einem Auto bleibt ihr für spätere Abende und weitere Ausflüge flexibler.',
        'Beide Orte können Teil derselben Reise sein, doch als Urlaubsbasis sind sie nicht austauschbar: Wo ihr aufwacht und zurückkehrt, ob Küste oder Dorf den Alltag bestimmt und welche Wege ihr täglich zu Fuß oder mit Verkehrsmitteln wiederholt, prägt den Aufenthalt.'
      ],
      cta: 'So kommt ihr zwischen Frigiliana und der Küste hin und her'
    },
    microLocations: {
      eyebrow: 'Wenn der Ort feststeht',
      title: 'Dann wählt die passende Lage im Dorf oder in der Stadt.',
      frigiliana: {
        title: 'Ihr wohnt in Frigiliana?',
        text:
          'Vergleicht das untere historische Zentrum, das obere Barribarto, den neueren tiefer gelegenen Ortsteil und Lagen im Umland – einschließlich der Unterschiede bei Wegen und Zugang, die über mehrere Tage zählen.',
        cta: 'Wo in Frigiliana übernachten?'
      },
      nerja: {
        title: 'Ihr wohnt in Nerja?',
        text:
          'Vergleicht Altstadt, Torrecilla, Carabeo, Burriana und die Wohnlagen am Hang nach Strandnähe, Wegen, Mobilität und Alltag vor Ort.',
        cta: 'Wo in Nerja übernachten?'
      }
    },
    amara: {
      eyebrow: 'Bei AMARA wohnen',
      title: 'AMARA bietet Unterkünfte in beiden Orten.',
      paragraphs: [
        'AMARA hat vier Unterkünfte im historischen Zentrum Frigilianas und AMARA Playa im westlichen Zentrum Nerjas.',
        'Wählt zuerst den Urlaubsort und danach die Unterkunft, die zu eurer Art zu reisen passt.'
      ],
      frigilianaCta: 'AMARA-Unterkünfte in Frigiliana ansehen',
      nerjaCta: 'AMARA Playa ansehen'
    }
  },
  es: {
    hero: {
      eyebrow: 'Frigiliana y Nerja',
      title: 'Frigiliana o Nerja',
      subtitle: '¿Dónde alojarse?',
      lead:
        'Están lo bastante cerca para conocer ambos lugares. La verdadera elección es cuál queréis tener a vuestro alrededor al empezar y terminar cada día.',
      body: [
        'Si os alojáis en Frigiliana, el pueblo histórico se convierte en vuestro hogar, mientras Nerja y la costa quedan a mano para días de playa y excursiones. Si os alojáis en Nerja, el mar, la localidad y la vida cotidiana de la costa son el punto de partida; Frigiliana sigue lo bastante cerca para visitarla con facilidad.',
        'No estáis eligiendo qué lugar perderos. Estáis eligiendo dónde queréis despertar.'
      ],
      imageAlt:
        'Casas blancas y callejuelas de Frigiliana con vistas hacia la costa'
    },
    coreQuestion: {
      eyebrow: 'La pregunta clave',
      title: '¿Dónde queréis despertar y volver al final del día?',
      paragraphs: [
        'Una excursión permite conocer ambos lugares. Alojarse en ellos es distinto.',
        'El lugar donde os quedáis marca los momentos cotidianos de las vacaciones: dónde tomáis el café por la mañana, qué hay al salir después de cenar, si la playa forma parte del paseo diario y cuánto transporte queréis organizar.',
        'Frigiliana y Nerja están cerca. Su vida cotidiana no tiene el mismo ritmo.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Claves para elegir',
      title: 'Cuatro diferencias que marcan la estancia.',
      items: [
        {
          number: '01',
          title: 'El entorno cotidiano',
          frigiliana:
            'Despertáis dentro de un pueblo histórico en la ladera, rodeados de calles blancas, restaurantes y vida de pueblo.',
          nerja:
            'Despertáis en una localidad costera donde, según la zona elegida, las playas, las tiendas, los restaurantes y los servicios cotidianos pueden integrarse fácilmente en el día.'
        },
        {
          number: '02',
          title: 'La playa en el día a día',
          frigiliana:
            'La costa es un plan que incorporáis de forma consciente. Podéis pasar horas junto al mar y regresar después al pueblo.',
          nerja:
            'En la zona adecuada de Nerja, ir a la playa puede ser tan espontáneo como salir a tomar un café o cenar. Cuando el acceso espontáneo a la playa y una rutina diaria centrada en la costa son prioritarios, Nerja puede ser la mejor base.'
        },
        {
          number: '03',
          title: 'Recorridos a pie y desnivel',
          frigiliana:
            'El pueblo asciende por la ladera. La ubicación concreta en Frigiliana determina cuánto desnivel, pavimento y escaleras forman parte de cada regreso. Una ubicación en la parte baja del casco histórico puede reducir las subidas repetidas, pero estar más abajo no significa que el recorrido sea llano ni esté libre de escalones.',
          nerja:
            'Nerja también presenta recorridos con distintos desniveles y escaleras: el casco antiguo, Torrecilla, Carabeo, Burriana y las zonas residenciales de las colinas plantean condiciones diferentes. Si repetir cuestas o escaleras reduciría de forma importante vuestro disfrute, una zona céntrica de Nerja elegida con cuidado puede resultar más práctica; la calle concreta, el acceso a la playa y la entrada del edificio siguen siendo decisivos.'
        },
        {
          number: '04',
          title: 'Coche y transporte',
          frigiliana:
            'Un coche ofrece la mayor libertad para ir a las playas y recorrer la zona, aunque la estancia también puede funcionar sin él si vuestros planes son relativamente sencillos.',
          nerja:
            'Una ubicación céntrica bien elegida puede funcionar muy bien sin coche. Más lejos del centro resulta más útil, mientras que en las zonas céntricas también hay que tener en cuenta el aparcamiento.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Elegid dónde alojaros',
      title: 'Dos lugares. Dos formas de empezar y terminar el día.',
      frigiliana: {
        title: 'Alojarse en Frigiliana',
        paragraphs: [
          'Frigiliana puede ser la mejor base cuando el pueblo histórico en la ladera debe ser el entorno de la estancia: mañanas y atardeceres más tranquilos cuando hay menos visitantes que pasan solo el día, jornadas más pausadas centradas en el pueblo y el regreso al casco antiguo por la noche.',
          'Con una ubicación adecuada en el pueblo o en el casco histórico, salir a cenar y la vida cotidiana pueden integrarse en los recorridos a pie. La costa sigue siendo una excursión en lugar de determinar dónde os alojáis; una posición en la parte baja del casco histórico puede reducir las subidas repetidas, pero eso no garantiza un recorrido llano ni libre de escalones.'
        ],
        cta: 'Descubrir cómo es alojarse en Frigiliana'
      },
      nerja: {
        title: 'Alojarse en Nerja',
        paragraphs: [
          'Nerja puede ser la mejor base cuando tienen prioridad la playa espontánea y una rutina diaria centrada en la costa, sobre todo en una zona céntrica elegida con cuidado donde los restaurantes, las tiendas y los servicios cotidianos se integren fácilmente en el día.',
          'También puede ser la opción más práctica cuando las cuestas o escaleras repetidas sean una preocupación importante, pero solo después de comprobar la calle concreta, el acceso a la playa y la entrada del edificio: Torrecilla, el casco antiguo, Carabeo, Burriana y las áreas residenciales de las colinas ofrecen rutinas claramente distintas.'
        ],
        cta: 'Descubrir cómo es alojarse en Nerja'
      }
    },
    experienceBoth: {
      title: 'Elegid dónde despertar. Disfrutad de ambos lugares.',
      paragraphs: [
        'Elijáis el lugar que elijáis, el otro no desaparece del viaje.',
        'Frigiliana y Nerja están lo bastante cerca para combinarlas durante la misma estancia. El transporte público, los taxis y el coche permiten desplazarse durante el día entre el pueblo y la costa; con coche tendréis más flexibilidad para volver más tarde y ampliar los planes.',
        'Ambos lugares pueden formar parte del mismo viaje, pero no son bases intercambiables: dónde despertáis y regresáis, si la costa o el pueblo marcan el día a día y qué recorridos a pie y formas de transporte repetís siguen definiendo la estancia.'
      ],
      cta: 'Cómo moverse entre Frigiliana y la costa'
    },
    microLocations: {
      eyebrow: 'Cuando el destino está claro',
      title: 'Después, elegid bien la zona del pueblo o la localidad.',
      frigiliana: {
        title: '¿Os alojáis en Frigiliana?',
        text:
          'Comparad la parte baja del casco histórico, el Barribarto alto, la zona moderna más baja y los alojamientos en el campo, incluidas las diferencias de acceso y recorridos a pie que importan durante varios días.',
        cta: 'Dónde alojarse en Frigiliana'
      },
      nerja: {
        title: '¿Os alojáis en Nerja?',
        text:
          'Comparad el casco antiguo, Torrecilla, Carabeo, Burriana y las zonas residenciales de las colinas según la playa, los recorridos a pie, la movilidad y la vida cotidiana.',
        cta: 'Dónde alojarse en Nerja'
      }
    },
    amara: {
      eyebrow: 'Alojaos con AMARA',
      title: 'Recibimos huéspedes en ambos lugares.',
      paragraphs: [
        'AMARA tiene cuatro alojamientos en el centro histórico de Frigiliana y AMARA Playa en la zona oeste del centro de Nerja.',
        'Elegid primero el lugar. Después, el alojamiento que mejor encaje con vuestra forma de viajar.'
      ],
      frigilianaCta: 'Ver alojamientos AMARA en Frigiliana',
      nerjaCta: 'Ver AMARA Playa'
    }
  },
  nl: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana of Nerja',
      subtitle: 'Waar overnachten?',
      lead:
        'De twee plaatsen liggen dicht genoeg bij elkaar om ze allebei te beleven. De echte keuze is in welke omgeving jullie elke dag willen beginnen en eindigen.',
      body: [
        'Verblijven jullie in Frigiliana, dan wordt het historische dorp jullie thuisplek en blijven Nerja en de kust binnen bereik voor stranddagen en uitstapjes. Verblijven jullie in Nerja, dan beginnen de dagen bij de zee en in de kustplaats; Frigiliana blijft dichtbij genoeg voor een ontspannen bezoek.',
        'Jullie kiezen dus niet welke plek jullie moeten missen. Jullie kiezen waar jullie wakker willen worden.'
      ],
      imageAlt:
        'Witte huizen en steegjes in Frigiliana met uitzicht richting de kust'
    },
    coreQuestion: {
      eyebrow: 'De echte vraag',
      title: 'Waar willen jullie wakker worden en aan het eind van de dag thuiskomen?',
      paragraphs: [
        'Tijdens een dagtocht krijgen jullie van beide plaatsen een indruk. Er verblijven is iets anders.',
        'De plek waar jullie verblijven bepaalt de gewone vakantiemomenten: waar jullie koffie halen in de ochtend, wat er na het eten buiten de deur te vinden is, of het strand bij een dagelijkse wandeling hoort en hoeveel vervoer jullie willen regelen.',
        'Frigiliana en Nerja liggen dicht bij elkaar. Het dagelijks leven voelt er niet hetzelfde.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Wat het verschil maakt',
      title: 'Vier verschillen die jullie verblijf bepalen.',
      items: [
        {
          number: '01',
          title: 'De omgeving van alledag',
          frigiliana:
            'Jullie worden wakker in een historisch dorp tegen de heuvel, met witte straatjes, restaurants en het dorpsleven om jullie heen.',
          nerja:
            'Jullie worden wakker in een kustplaats waar strand, winkels, restaurants en dagelijkse voorzieningen, afhankelijk van de buurt, gemakkelijk deel van de dag kunnen zijn.'
        },
        {
          number: '02',
          title: 'De rol van het strand',
          frigiliana:
            'Een dag aan de kust plannen jullie bewust in. Na een paar uur aan zee keren jullie weer terug naar het dorp.',
          nerja:
            'In de juiste buurt van Nerja kan naar het strand gaan net zo spontaan zijn als koffie drinken of uit eten gaan. Als spontane toegang tot het strand en een kustgerichte dagelijkse routine het belangrijkst zijn, kan Nerja de betere uitvalsbasis zijn.'
        },
        {
          number: '03',
          title: 'Lopen & hoogteverschillen',
          frigiliana:
            'Het dorp loopt tegen de heuvel omhoog. De precieze plek in Frigiliana bepaalt hoeveel stijging, bestrating en trappen bij elke terugweg horen. Een plek in het lagere deel van de historische kern kan herhaald klimwerk beperken, maar lager betekent niet dat de route vlak of trapvrij is.',
          nerja:
            'Ook in Nerja verschillen hellingen, trappen en wandelroutes: het oude centrum, Torrecilla, Carabeo, Burriana en de woonwijken in de heuvels stellen elk andere eisen. Als herhaald klimmen of traplopen het vakantieplezier duidelijk zou verminderen, kan een zorgvuldig gekozen centrale plek in Nerja praktischer zijn; de precieze straat, route naar het strand en toegang tot het gebouw blijven bepalend.'
        },
        {
          number: '04',
          title: 'Auto & vervoer',
          frigiliana:
            'Met een auto hebben jullie de meeste vrijheid voor stranden en de omgeving. Zonder auto kan een verblijf ook goed werken als de plannen relatief eenvoudig blijven.',
          nerja:
            'Op een goed gekozen centrale plek kunnen jullie prima zonder auto. Verder van het centrum wordt een auto nuttiger, terwijl parkeren in het centrum zelf ook meeweegt.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Kies waar jullie verblijven',
      title: 'Twee plaatsen. Twee manieren om de dag te beginnen en af te sluiten.',
      frigiliana: {
        title: 'Frigiliana als thuisplek',
        paragraphs: [
          'Frigiliana kan juist de betere uitvalsbasis zijn wanneer het historische dorp tegen de heuvel zelf de omgeving van het verblijf moet vormen: rustigere ochtenden en avonden buiten de drukste uren van dagjesmensen, een langzamer dorpsgericht ritme en thuiskomen in de oude kern.',
          'Vanuit een passende plek in het dorp of de historische kern kunnen uit eten gaan en het dagelijkse dorpsleven deel worden van de wandelroutine. De kust blijft een uitstapje in plaats van het adres te bepalen; een lagere plek in de historische kern kan herhaald klimwerk beperken, maar is niet automatisch vlak of trapvrij.'
        ],
        cta: 'Ontdek verblijven in Frigiliana'
      },
      nerja: {
        title: 'Nerja als thuisplek',
        paragraphs: [
          'Nerja kan de betere uitvalsbasis zijn wanneer spontane strandtijd en een kustgerichte dagelijkse routine vooropstaan, vooral vanuit een zorgvuldig gekozen centrale buurt waar restaurants, winkels en dagelijkse voorzieningen gemakkelijk in de dag passen.',
          'Ook wanneer herhaald klimmen of traplopen zwaar meeweegt, kan Nerja praktischer zijn — maar pas nadat de precieze straat, route naar het strand en toegang tot het gebouw zijn gecontroleerd: Torrecilla, het oude centrum, Carabeo, Burriana en de woonwijken in de heuvels brengen elk een andere dagelijkse routine mee.'
        ],
        cta: 'Ontdek verblijven in Nerja'
      }
    },
    experienceBoth: {
      title: 'Kies waar jullie wakker worden. Beleef ze allebei.',
      paragraphs: [
        'Welke plek jullie ook kiezen, de andere verdwijnt niet uit de reis.',
        'Frigiliana en Nerja liggen dicht genoeg bij elkaar om ze tijdens hetzelfde verblijf te combineren. Openbaar vervoer, taxi en auto maken verplaatsingen overdag tussen dorp en kust mogelijk; een auto geeft meer vrijheid voor latere avonden en uitstapjes verder weg.',
        'Beide plaatsen kunnen deel zijn van dezelfde reis, maar als uitvalsbasis zijn ze niet uitwisselbaar: waar jullie wakker worden en terugkeren, of de kust of het dorp jullie dagelijkse omgeving vormt en welke wandel- en vervoerspatronen jullie herhalen, blijft het verblijf bepalen.'
      ],
      cta: 'Zo reizen jullie tussen Frigiliana en de kust'
    },
    microLocations: {
      eyebrow: 'Als de plaats vaststaat',
      title: 'Kies vervolgens de juiste plek in het dorp of de stad.',
      frigiliana: {
        title: 'Verblijven jullie in Frigiliana?',
        text:
          'Vergelijk het lagere historische centrum, het hoger gelegen Barribarto, het nieuwere lagere dorpsdeel en locaties buiten het dorp, inclusief de verschillen in lopen en toegang die na een paar dagen merkbaar worden.',
        cta: 'Waar overnachten in Frigiliana?'
      },
      nerja: {
        title: 'Verblijven jullie in Nerja?',
        text:
          'Vergelijk het oude centrum, Torrecilla, Carabeo, Burriana en de woonwijken in de heuvels op toegang tot het strand, wandelroutes, vervoer en het dagelijks leven.',
        cta: 'Waar overnachten in Nerja?'
      }
    },
    amara: {
      eyebrow: 'Verblijf bij AMARA',
      title: 'We ontvangen gasten op beide plekken.',
      paragraphs: [
        'AMARA heeft vier verblijven in het historische centrum van Frigiliana en AMARA Playa in het westelijke deel van het centrum van Nerja.',
        'Kies eerst de plaats. Kies daarna het verblijf dat past bij de manier waarop jullie willen reizen.'
      ],
      frigilianaCta: 'Bekijk AMARA-verblijven in Frigiliana',
      nerjaCta: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana eller Nerja',
      subtitle: 'Var ska man bo?',
      lead:
        'De ligger så nära varandra att ni kan uppleva båda. Den verkliga frågan är vilken plats ni vill ha omkring er när dagen börjar och slutar.',
      body: [
        'Bor ni i Frigiliana blir den historiska byn ert hem, medan Nerja och kusten finns nära till hands för stranddagar och utflykter. Bor ni i Nerja börjar dagen vid havet och i kuststaden; Frigiliana ligger fortfarande nära nog för ett enkelt besök.',
        'Ni väljer alltså inte vilken plats ni ska avstå från. Ni väljer var ni vill vakna.'
      ],
      imageAlt:
        'Vita hus och gränder i Frigiliana med utsikt mot kusten'
    },
    coreQuestion: {
      eyebrow: 'Den verkliga frågan',
      title: 'Var vill ni vakna och komma hem i slutet av dagen?',
      paragraphs: [
        'En dagsutflykt kan ge er en bild av båda platserna. Att bo där är något annat.',
        'Platsen där ni bor präglar semesterns vardagsstunder: var ni tar morgonkaffet, vad som finns utanför dörren efter middagen, om stranden blir en del av den dagliga promenaden och hur mycket ni vill behöva planera för att ta er runt.',
        'Frigiliana och Nerja ligger nära varandra. Men vardagen har olika karaktär.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Det som påverkar vistelsen',
      title: 'Fyra skillnader att tänka på.',
      items: [
        {
          number: '01',
          title: 'Miljön omkring er',
          frigiliana:
            'Ni vaknar i en historisk by på bergssluttningen, med vita gränder, restauranger och byliv runt omkring.',
          nerja:
            'Ni vaknar i en kuststad där stränder, butiker, restauranger och vardagsservice kan bli en enkel del av dagen, beroende på vilket område ni väljer.'
        },
        {
          number: '02',
          title: 'Stranden i vardagen',
          frigiliana:
            'Kusten blir något ni medvetet planerar in. Ni kan tillbringa några timmar vid havet och återvända till byn efteråt.',
          nerja:
            'I rätt del av Nerja kan ett besök på stranden bli lika spontant som att gå ut för en kaffe eller middag. När spontan tillgång till stranden och en kustnära vardagsrytm väger tyngst kan Nerja vara det bättre valet som bas.'
        },
        {
          number: '03',
          title: 'Promenader & nivåskillnader',
          frigiliana:
            'Byn klättrar uppför sluttningen. Det exakta läget i Frigiliana avgör hur mycket backar, stenläggning och trappor som ingår i vägen hem. Ett läge i den lägre delen av den historiska bykärnan kan minska återkommande stigningar, men lägre betyder inte att vägen är plan eller trappfri.',
          nerja:
            'Även i Nerja varierar backar, trappor och promenadvägar: gamla stan, Torrecilla, Carabeo, Burriana och bostadsområdena på höjderna ställer olika krav. Om återkommande stigningar eller trappor tydligt skulle minska er trivsel kan ett noggrant valt centralt läge i Nerja vara mer praktiskt; den exakta gatan, vägen till stranden och tillträdet till byggnaden är fortfarande avgörande.'
        },
        {
          number: '04',
          title: 'Bil & transporter',
          frigiliana:
            'Med bil får ni störst frihet för stränder och utflykter i området. Det går också att bo utan bil om planerna är förhållandevis enkla.',
          nerja:
            'Med ett väl valt centralt läge fungerar det mycket bra utan bil. Längre ut blir bilen mer användbar, samtidigt som ni behöver ta hänsyn till parkeringen i centrum.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Välj var ni vill bo',
      title: 'Två platser. Två sätt att börja och avsluta dagen.',
      frigiliana: {
        title: 'Frigiliana som hem under resan',
        paragraphs: [
          'Frigiliana kan vara den starkare basen när den historiska byn på sluttningen ska vara vistelsens miljö: lugnare morgnar och kvällar utanför dagbesökarnas mest intensiva tider, ett långsammare byorienterat tempo och att återvända till gamla stan på kvällen.',
          'Med ett lämpligt läge i byn eller den historiska bykärnan kan restaurangbesök och vardagsliv bli en del av promenadrutinen. Kusten förblir en utflykt i stället för att avgöra var ni bor; ett lägre läge i den historiska bykärnan kan minska återkommande stigningar, men är inte automatiskt plant eller trappfritt.'
        ],
        cta: 'Upptäck hur det är att bo i Frigiliana'
      },
      nerja: {
        title: 'Nerja som hem under resan',
        paragraphs: [
          'Nerja kan vara den bättre basen när spontana stunder på stranden och en kustnära vardagsrytm prioriteras, särskilt i ett noggrant valt centralt område där restauranger, butiker och vardagsservice enkelt kan bli en del av dagen.',
          'Det kan också vara det mer praktiska valet när återkommande stigningar eller trappor är ett stort bekymmer, men först efter att den exakta gatan, vägen till stranden och tillträdet till byggnaden har kontrollerats: Torrecilla, gamla stan, Carabeo, Burriana och bostadsområdena på höjderna ger tydligt olika rutiner.'
        ],
        cta: 'Upptäck hur det är att bo i Nerja'
      }
    },
    experienceBoth: {
      title: 'Välj var ni vill vakna. Upplev båda.',
      paragraphs: [
        'Vilken plats ni än väljer försvinner inte den andra ur resan.',
        'Frigiliana och Nerja ligger nära nog för att kombineras under samma vistelse. Kollektivtrafik, taxi och bil gör det möjligt att röra sig mellan byn och kusten under dagen; med bil får ni större flexibilitet för sena kvällar och utflykter längre bort.',
        'Båda platserna kan ingå i samma resa, men som baser är de inte utbytbara: var ni vaknar och återvänder, om kusten eller byn präglar vardagen och vilka promenad- och transportmönster ni upprepar fortsätter att forma vistelsen.'
      ],
      cta: 'Så tar ni er mellan Frigiliana och kusten'
    },
    microLocations: {
      eyebrow: 'När platsen är vald',
      title: 'Välj sedan rätt del av byn eller staden.',
      frigiliana: {
        title: 'Ska ni bo i Frigiliana?',
        text:
          'Jämför den nedre historiska delen, övre Barribarto, den nyare delen längre ner och boenden på landsbygden, inklusive skillnader i promenader och tillgänglighet som märks under flera dagar.',
        cta: 'Var ska man bo i Frigiliana?'
      },
      nerja: {
        title: 'Ska ni bo i Nerja?',
        text:
          'Jämför gamla stan, Torrecilla, Carabeo, Burriana och bostadsområdena på höjderna utifrån närhet till stranden, promenader, hur ni tar er runt och vardagsliv.',
        cta: 'Var ska man bo i Nerja?'
      }
    },
    amara: {
      eyebrow: 'Bo hos AMARA',
      title: 'Vi finns på båda platserna.',
      paragraphs: [
        'AMARA har fyra boenden i Frigilianas historiska centrum och AMARA Playa i den västra delen av centrala Nerja.',
        'Välj plats först. Välj sedan det boende som passar ert sätt att resa.'
      ],
      frigilianaCta: 'Se AMARA-boenden i Frigiliana',
      nerjaCta: 'Se AMARA Playa'
    }
  }
};
