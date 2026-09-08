import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaOrNerjaPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lead: string;
    body: string[];
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
        'Frigiliana or Nerja? Mountain village above or beach below, ten minutes apart. What differs in everyday life and where you wake up better.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana oder Nerja: Wo übernachten? | AMARA',
      description:
        'Frigiliana oder Nerja? Bergdorf oben oder Strand unten, zehn Minuten auseinander. Was sich im Alltag unterscheidet und wo ihr besser aufwacht.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana o Nerja: ¿dónde alojarse? | AMARA',
      description:
        '¿Frigiliana o Nerja? Pueblo de montaña arriba o playa abajo, a diez minutos. Qué cambia en el día a día y dónde se despierta mejor.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana of Nerja: waar overnachten? | AMARA',
      description:
        'Frigiliana of Nerja? Bergdorp boven of strand beneden, tien minuten van elkaar. Wat er in het dagelijks leven verschilt en waar je beter wakker wordt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana eller Nerja: var ska man bo? | AMARA',
      description:
        'Frigiliana eller Nerja? Bergsby ovanför eller strand nedanför, tio minuter från varandra. Vad som skiljer i vardagen och var ni vaknar bäst.',
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
      subtitle: 'Village above or sea below?',
      lead:
        'Ten minutes lie between the village and the beach. You only have to decide where you wake up.',
      body: [
        'In Frigiliana you wake up among white lanes, fetch bread at Manolo’s and drive ten minutes down for the beach. In Nerja you walk out of the door with a towel before breakfast and drive ten minutes up for a village evening.',
        'We have apartments in both places and enjoy living in both ourselves. Here is how everyday life differs.'
      ],
    },
    coreQuestion: {
      eyebrow: 'The real question',
      title: 'Where do you want to wake up, and where do you want to return to in the evening?',
      paragraphs: [
        'You can see both places in a day. Living there feels different: it is about the morning coffee, the walk home after dinner and whether the sea belongs to the stroll or to the outing.',
        'Frigiliana is a mountain village 300 metres above the sea, quiet in the evening once the day visitors have gone. Nerja is a coastal town with beaches, tapas bars and a centre that is open all year.',
        'Frigiliana and Nerja are close. Their daily rhythms are not the same.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Decision factors',
      title: 'Four differences you feel every day',
      items: [
        {
          number: '01',
          title: 'Outside the door',
          frigiliana:
            'White lanes, Calle Real with restaurants and bars, San Antonio 15 metres on. Visitors by day, the village in the morning and evening.',
          nerja:
            'Torrecilla beach 200 metres on, the Balcón 500. Carrefour in the same street, tapas in the old town, the promenade for the evening.'
        },
        {
          number: '02',
          title: 'The way to the sea',
          frigiliana:
            'A beach day is a drive: ten minutes down to Nerja, back up to the village for dinner in the evening.',
          nerja:
            'Into the water before breakfast and back to the beach after dinner. The sea belongs to the day like the coffee.'
        },
        {
          number: '03',
          title: 'Steps and slopes',
          frigiliana:
            'The village clings to the hillside. At our place in Calle Chorruelo it is one step at the front door, then level to Calle Real and the plaza; whoever lives higher up in the Barribarto has the hill twice a day.',
          nerja:
            'Nerja is largely flat. AMARA Playa is on the fifth floor with a lift; before the lift there are ten steps. It climbs towards Burriana and the upper neighbourhoods.'
        },
        {
          number: '04',
          title: 'Car',
          frigiliana:
            'For the village you need none, for beach and outings you do. You park on Avenida Carlos Cano, five minutes on foot from us.',
          nerja:
            'In the centre the car stays parked; for Maro, Frigiliana and the Axarquía one or two rental days are enough. You park in the car park or on the street; Playa has no space of its own.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Two places',
      title: 'Two places, two kinds of day',
      frigiliana: {
        title: 'Frigiliana, if…',
        paragraphs: [
          '… you want to walk home through white lanes in the evening, have the Sierra at your back in the morning and let the beach be an outing. After dinner you are home in five minutes, and in Lounis, Zaid and Maha your own terrace with outdoor shower is waiting.',
          'Frigiliana is busy by day and quiet in the evening. If you are after peace, you get it here from early evening.'
        ],
        cta: 'Our four apartments in Frigiliana'
      },
      nerja: {
        title: 'Nerja, if…',
        paragraphs: [
          '… you want to step out of the door with a towel in the morning, eat fish at La Puntilla in the evening and have a town that offers something all year: cave, museum, promenade, tapas bars. From AMARA Playa almost everything is on foot.',
          'Nerja is full and lively in summer; in winter the promenade is yours. For a couple who want sea and town in one, Torrecilla is the spot in between.'
        ],
        cta: 'AMARA Playa in Nerja'
      }
    },
    experienceBoth: {
      title: 'You get both; just decide where you sleep',
      paragraphs: [
        'Six kilometres and a ten-minute drive lie between village and coast. The bus runs between Nerja and Frigiliana; with a car you are free in the evening too.',
        'If you stay in Frigiliana, you drive down for the beach. If you stay in Nerja, you drive up for a village evening and order a taxi for the way back.',
        'The places can share one trip, but the bases are not interchangeable: where you wake and return, whether coast or village is the daily default, and which walking and transport patterns you repeat still shape the stay.'
      ],
      cta: 'Bus and taxi between Frigiliana and Nerja'
    },
    microLocations: {
      eyebrow: 'Once the base is clear',
      title: 'Then the location within the place',
      frigiliana: {
        title: 'Staying in Frigiliana?',
        text:
          'Old town, newer village or campo, and why the height on the hillside shapes your day.',
        cta: 'Where to stay in Frigiliana'
      },
      nerja: {
        title: 'Staying in Nerja?',
        text:
          'Old town, Torrecilla, Burriana or the hillsides, and why proximity counts here.',
        cta: 'Where to stay in Nerja'
      }
    },
    amara: {
      eyebrow: 'Stay with AMARA',
      title: 'We are in both places',
      paragraphs: [
        "Four apartments in Casa AMARA in the heart of Frigiliana’s old town, and AMARA Playa in Nerja, 200 metres from the beach.",
        'If you are torn, write and tell us how you like to holiday. We will tell you where you wake up better.'
      ],
      frigilianaCta: 'View AMARA stays in Frigiliana',
      nerjaCta: 'View AMARA Playa'
    }
  },
  de: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana oder Nerja',
      subtitle: 'Dorf oben oder Meer unten?',
      lead:
        'Zehn Minuten liegen zwischen dem Dorf und dem Strand. Ihr müsst euch nur entscheiden, wo ihr aufwacht.',
      body: [
        'In Frigiliana wacht ihr in weißen Gassen auf, holt Brot bei Manolo und fahrt für den Strand zehn Minuten hinunter. In Nerja geht ihr vor dem Frühstück mit dem Handtuch aus der Tür und fahrt für den Dorfabend zehn Minuten hinauf.',
        'Wir haben in beiden Orten Wohnungen und wohnen selbst in beiden gern. Hier steht, wie sich der Alltag unterscheidet.'
      ],
    },
    coreQuestion: {
      eyebrow: 'Die eigentliche Frage',
      title: 'Wo wollt ihr aufwachen, und wohin wollt ihr abends zurück?',
      paragraphs: [
        'Beide Orte seht ihr an einem Tag. Wohnen fühlt sich anders an: Es geht um den Kaffee am Morgen, den Weg nach dem Abendessen und darum, ob das Meer zum Spaziergang gehört oder zum Ausflug.',
        'Frigiliana ist ein Bergdorf, 300 Meter über dem Meer, abends ruhig, sobald die Tagesgäste weg sind. Nerja ist eine Küstenstadt mit Stränden, Tapasbars und einem Zentrum, das das ganze Jahr geöffnet hat.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Was im Alltag zählt',
      title: 'Vier Unterschiede, die ihr jeden Tag spürt',
      items: [
        {
          number: '01',
          title: 'Vor der Tür',
          frigiliana:
            'Weiße Gassen, die Calle Real mit Restaurants und Bars, San Antonio 15 Meter weiter. Tagsüber Besucher, morgens und abends das Dorf.',
          nerja:
            'Der Strand Torrecilla 200 Meter weiter, der Balcón 500. Carrefour in derselben Straße, Tapas in der Altstadt, die Promenade für den Abend.'
        },
        {
          number: '02',
          title: 'Der Weg zum Meer',
          frigiliana:
            'Ein Strandtag ist eine Fahrt: zehn Minuten hinunter nach Nerja, abends zurück ins Dorf zum Essen.',
          nerja:
            'Vor dem Frühstück ins Wasser und nach dem Abendessen noch einmal an den Strand. Das Meer gehört zum Tag wie der Kaffee.'
        },
        {
          number: '03',
          title: 'Stufen und Steigungen',
          frigiliana:
            'Das Dorf hängt am Hang. Bei uns in der Calle Chorruelo ist es eine Stufe an der Haustür, dann geht es eben zur Calle Real und zur Plaza; wer höher im Barribarto wohnt, hat den Hang jeden Tag zweimal.',
          nerja:
            'Nerja ist weitgehend eben. AMARA Playa liegt im fünften Stock mit Aufzug, vor dem Aufzug sind es zehn Stufen. Bergauf geht es Richtung Burriana und in die oberen Viertel.'
        },
        {
          number: '04',
          title: 'Auto',
          frigiliana:
            'Fürs Dorf braucht ihr keins, für Strand und Ausflüge schon. Geparkt wird an der Avenida Carlos Cano, fünf Minuten zu Fuß von uns.',
          nerja:
            'Im Zentrum bleibt das Auto stehen; für Maro, Frigiliana und die Axarquía reichen ein oder zwei Miettage. Geparkt wird im Parkhaus oder an der Straße, einen eigenen Platz hat Playa nicht.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Zwei Orte',
      title: 'Zwei Orte, zwei Arten von Tag',
      frigiliana: {
        title: 'Frigiliana, wenn …',
        paragraphs: [
          '… ihr abends durch weiße Gassen nach Hause gehen wollt, morgens die Sierra im Rücken habt und der Strand ein Ausflug sein darf. Nach dem Essen seid ihr in fünf Minuten zu Hause, und in Lounis, Zaid und Maha wartet die eigene Terrasse mit Außendusche.',
          'Frigiliana ist tagsüber gut besucht und abends ruhig. Wer die Ruhe sucht, bekommt sie hier ab dem frühen Abend.'
        ],
        cta: 'Unsere vier Wohnungen in Frigiliana'
      },
      nerja: {
        title: 'Nerja, wenn …',
        paragraphs: [
          '… ihr morgens mit dem Handtuch aus der Tür wollt, abends Fisch bei La Puntilla esst und die Stadt euch das ganze Jahr etwas bietet: Höhle, Museum, Promenade, Tapasbars. Von AMARA Playa geht fast alles zu Fuß.',
          'Nerja ist im Sommer voll und lebhaft, im Winter gehört euch die Promenade. Für ein Paar, das Meer und Stadt in einem will, ist Torrecilla die Lage dazwischen.'
        ],
        cta: 'AMARA Playa in Nerja'
      }
    },
    experienceBoth: {
      title: 'Ihr bekommt beides, entscheidet nur, wo ihr schlaft',
      paragraphs: [
        'Zwischen Dorf und Küste liegen sechs Kilometer und zehn Minuten Fahrt. Der Bus fährt zwischen Nerja und Frigiliana, mit dem Auto seid ihr auch abends frei.',
        'Wer in Frigiliana wohnt, fährt für den Strand hinunter. Wer in Nerja wohnt, fährt für den Dorfabend hinauf und bestellt für den Rückweg ein Taxi.'
      ],
      cta: 'Bus und Taxi zwischen Frigiliana und Nerja'
    },
    microLocations: {
      eyebrow: 'Wenn der Ort feststeht',
      title: 'Dann die Lage im Ort',
      frigiliana: {
        title: 'Ihr wohnt in Frigiliana?',
        text:
          'Altstadt, neuer Ortsteil oder Campo, und warum die Höhe am Hang euren Tag bestimmt.',
        cta: 'Wo in Frigiliana übernachten?'
      },
      nerja: {
        title: 'Ihr wohnt in Nerja?',
        text:
          'Altstadt, Torrecilla, Burriana oder die Hänge, und warum hier die Nähe zählt.',
        cta: 'Wo in Nerja übernachten?'
      }
    },
    amara: {
      eyebrow: 'Bei AMARA wohnen',
      title: 'Wir sind in beiden Orten',
      paragraphs: [
        'Vier Wohnungen in Casa AMARA mitten in Frigilianas Altstadt und AMARA Playa in Nerja, 200 Meter vom Strand.',
        'Wenn ihr schwankt, schreibt uns, wie ihr Urlaub macht. Wir sagen euch, wo ihr besser aufwacht.'
      ],
      frigilianaCta: 'AMARA-Unterkünfte in Frigiliana ansehen',
      nerjaCta: 'AMARA Playa ansehen'
    }
  },
  es: {
    hero: {
      eyebrow: 'Frigiliana y Nerja',
      title: 'Frigiliana o Nerja',
      subtitle: '¿Pueblo arriba o mar abajo?',
      lead:
        'Diez minutos separan el pueblo de la playa. Solo tenéis que decidir dónde despertar.',
      body: [
        'En Frigiliana despertáis entre callejuelas blancas, compráis el pan en Manolo y bajáis diez minutos hasta la playa. En Nerja salís por la puerta con la toalla antes del desayuno y subís diez minutos para pasar la noche en el pueblo.',
        'Tenemos apartamentos en los dos sitios y nos gusta vivir en ambos. Aquí explicamos en qué se diferencia el día a día.'
      ],
    },
    coreQuestion: {
      eyebrow: 'La pregunta clave',
      title: '¿Dónde queréis despertar, y adónde queréis volver por la noche?',
      paragraphs: [
        'Los dos sitios se ven en un día. Vivir allí es distinto: va del café de la mañana, del camino de vuelta después de cenar y de si el mar forma parte del paseo o de la excursión.',
        'Frigiliana es un pueblo de montaña a 300 metros sobre el mar, tranquilo por la noche cuando se van los visitantes de día. Nerja es una ciudad costera con playas, bares de tapas y un centro abierto todo el año.',
        'Frigiliana y Nerja están cerca. Su vida cotidiana no tiene el mismo ritmo.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Claves para elegir',
      title: 'Cuatro diferencias que notáis cada día',
      items: [
        {
          number: '01',
          title: 'Al salir por la puerta',
          frigiliana:
            'Callejuelas blancas, la calle Real con restaurantes y bares, San Antonio a 15 metros. De día visitantes, por la mañana y por la noche el pueblo.',
          nerja:
            'La playa de Torrecilla a 200 metros, el Balcón a 500. Carrefour en la misma calle, tapas en el casco antiguo, el paseo marítimo para la noche.'
        },
        {
          number: '02',
          title: 'El camino al mar',
          frigiliana:
            'Un día de playa es un trayecto: diez minutos bajando a Nerja, y por la noche de vuelta al pueblo a cenar.',
          nerja:
            'Al agua antes del desayuno y otra vez a la playa después de cenar. El mar forma parte del día como el café.'
        },
        {
          number: '03',
          title: 'Escalones y cuestas',
          frigiliana:
            'El pueblo cuelga de la ladera. En nuestra casa de la calle Chorruelo hay un escalón en la puerta y luego se va llano hasta la calle Real y la plaza; quien vive más arriba, en el Barribarto, tiene la cuesta dos veces al día.',
          nerja:
            'Nerja es en gran parte llana. AMARA Playa está en un quinto con ascensor; antes del ascensor hay diez escalones. Sube hacia Burriana y los barrios altos.'
        },
        {
          number: '04',
          title: 'Coche',
          frigiliana:
            'Para el pueblo no hace falta, para la playa y las excursiones sí. Se aparca en la avenida Carlos Cano, a cinco minutos a pie de nuestra casa.',
          nerja:
            'En el centro el coche se queda aparcado; para Maro, Frigiliana y la Axarquía bastan uno o dos días de alquiler. Se aparca en el parking o en la calle; Playa no tiene plaza propia.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Dos lugares',
      title: 'Dos lugares, dos tipos de día',
      frigiliana: {
        title: 'Frigiliana, si…',
        paragraphs: [
          '… queréis volver a casa por callejuelas blancas por la noche, tener la sierra a la espalda por la mañana y que la playa sea una excursión. Después de cenar estáis en casa en cinco minutos, y en Lounis, Zaid y Maha os espera vuestra propia terraza con ducha exterior.',
          'Frigiliana está muy visitada de día y tranquila por la noche. Quien busca calma la encuentra aquí desde primera hora de la tarde.'
        ],
        cta: 'Nuestros cuatro apartamentos en Frigiliana'
      },
      nerja: {
        title: 'Nerja, si…',
        paragraphs: [
          '… queréis salir por la puerta con la toalla por la mañana, cenar pescado en La Puntilla y tener una ciudad que ofrece algo todo el año: cueva, museo, paseo marítimo, bares de tapas. Desde AMARA Playa casi todo se hace a pie.',
          'Nerja está llena y animada en verano; en invierno el paseo es vuestro. Para una pareja que quiere mar y ciudad a la vez, Torrecilla es la ubicación intermedia.'
        ],
        cta: 'AMARA Playa en Nerja'
      }
    },
    experienceBoth: {
      title: 'Tenéis las dos cosas; solo decidid dónde dormir',
      paragraphs: [
        'Entre el pueblo y la costa hay seis kilómetros y diez minutos en coche. El autobús une Nerja y Frigiliana; con coche también sois libres por la noche.',
        'Quien se aloja en Frigiliana baja a la playa. Quien se aloja en Nerja sube para la noche en el pueblo y pide un taxi para volver.',
        'Ambos lugares pueden formar parte del mismo viaje, pero no son bases intercambiables: dónde despertáis y regresáis, si la costa o el pueblo marcan el día a día y qué recorridos a pie y formas de transporte repetís siguen definiendo la estancia.'
      ],
      cta: 'Autobús y taxi entre Frigiliana y Nerja'
    },
    microLocations: {
      eyebrow: 'Cuando el destino está claro',
      title: 'Después, la ubicación dentro del lugar',
      frigiliana: {
        title: '¿Os alojáis en Frigiliana?',
        text:
          'Casco antiguo, parte nueva o campo, y por qué la altura en la ladera marca vuestro día.',
        cta: 'Dónde alojarse en Frigiliana'
      },
      nerja: {
        title: '¿Os alojáis en Nerja?',
        text:
          'Casco antiguo, Torrecilla, Burriana o las laderas, y por qué aquí cuenta la cercanía.',
        cta: 'Dónde alojarse en Nerja'
      }
    },
    amara: {
      eyebrow: 'Alojaos con AMARA',
      title: 'Estamos en los dos lugares',
      paragraphs: [
        'Cuatro apartamentos en Casa AMARA, en pleno casco antiguo de Frigiliana, y AMARA Playa en Nerja, a 200 metros de la playa.',
        'Si dudáis, escribidnos y contadnos cómo son vuestras vacaciones. Os diremos dónde despertáis mejor.'
      ],
      frigilianaCta: 'Ver alojamientos AMARA en Frigiliana',
      nerjaCta: 'Ver AMARA Playa'
    }
  },
  nl: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana of Nerja',
      subtitle: 'Dorp boven of zee beneden?',
      lead:
        'Tien minuten liggen er tussen het dorp en het strand. Jullie hoeven alleen te beslissen waar je wakker wordt.',
      body: [
        'In Frigiliana word je wakker in witte steegjes, haal je brood bij Manolo en rijd je voor het strand tien minuten naar beneden. In Nerja loop je voor het ontbijt met je handdoek de deur uit en rijd je voor een dorpsavond tien minuten omhoog.',
        'We hebben in beide plaatsen appartementen en wonen zelf graag in beide. Hier staat hoe het dagelijks leven verschilt.'
      ],
    },
    coreQuestion: {
      eyebrow: 'De echte vraag',
      title: 'Waar willen jullie wakker worden, en waar willen jullie ’s avonds naar terug?',
      paragraphs: [
        'Beide plekken zie je op één dag. Wonen voelt anders: het gaat om de koffie in de ochtend, de weg terug na het eten en of de zee bij de wandeling hoort of bij het uitje.',
        'Frigiliana is een bergdorp, 300 meter boven de zee, ’s avonds rustig zodra de dagjesmensen weg zijn. Nerja is een kustplaats met stranden, tapasbars en een centrum dat het hele jaar open is.',
        'Frigiliana en Nerja liggen dicht bij elkaar. Het dagelijks leven voelt er niet hetzelfde.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Wat het verschil maakt',
      title: 'Vier verschillen die je elke dag merkt',
      items: [
        {
          number: '01',
          title: 'Voor de deur',
          frigiliana:
            'Witte steegjes, Calle Real met restaurants en bars, San Antonio 15 meter verder. Overdag bezoekers, ’s ochtends en ’s avonds het dorp.',
          nerja:
            'Het strand Torrecilla 200 meter verder, de Balcón 500. Carrefour in dezelfde straat, tapas in de oude stad, de promenade voor de avond.'
        },
        {
          number: '02',
          title: 'De weg naar de zee',
          frigiliana:
            'Een stranddag is een ritje: tien minuten naar beneden naar Nerja, ’s avonds terug naar het dorp om te eten.',
          nerja:
            'Voor het ontbijt het water in en na het diner nog een keer naar het strand. De zee hoort bij de dag zoals de koffie.'
        },
        {
          number: '03',
          title: 'Treden en hellingen',
          frigiliana:
            'Het dorp hangt tegen de helling. Bij ons in Calle Chorruelo is het één trede bij de voordeur, daarna vlak naar Calle Real en het plein; wie hoger in het Barribarto woont, heeft de helling elke dag twee keer.',
          nerja:
            'Nerja is grotendeels vlak. AMARA Playa ligt op de vijfde verdieping met lift; voor de lift zijn er tien treden. Omhoog gaat het richting Burriana en de hogere wijken.'
        },
        {
          number: '04',
          title: 'Auto',
          frigiliana:
            'Voor het dorp heb je er geen nodig, voor strand en uitjes wel. Parkeren doe je aan Avenida Carlos Cano, vijf minuten lopen van ons.',
          nerja:
            'In het centrum blijft de auto staan; voor Maro, Frigiliana en de Axarquía volstaan een of twee huurdagen. Parkeren doe je in de parkeergarage of op straat; Playa heeft geen eigen plek.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Twee plekken',
      title: 'Twee plekken, twee soorten dag',
      frigiliana: {
        title: 'Frigiliana, als…',
        paragraphs: [
          '… jullie ’s avonds door witte steegjes naar huis willen lopen, ’s ochtends de Sierra in de rug hebben en het strand een uitje mag zijn. Na het eten zijn jullie in vijf minuten thuis, en in Lounis, Zaid en Maha wacht het eigen terras met buitendouche.',
          'Frigiliana is overdag druk bezocht en ’s avonds rustig. Wie rust zoekt, vindt die hier vanaf de vroege avond.'
        ],
        cta: 'Onze vier appartementen in Frigiliana'
      },
      nerja: {
        title: 'Nerja, als…',
        paragraphs: [
          '… jullie ’s ochtends met je handdoek de deur uit willen, ’s avonds vis eten bij La Puntilla en een stad willen die het hele jaar iets biedt: grot, museum, promenade, tapasbars. Vanaf AMARA Playa gaat bijna alles te voet.',
          'Nerja is in de zomer vol en levendig, in de winter is de promenade van jullie. Voor een stel dat zee en stad in één wil, is Torrecilla de plek ertussenin.'
        ],
        cta: 'AMARA Playa in Nerja'
      }
    },
    experienceBoth: {
      title: 'Jullie krijgen beide, beslis alleen waar je slaapt',
      paragraphs: [
        'Tussen dorp en kust liggen zes kilometer en tien minuten rijden. De bus rijdt tussen Nerja en Frigiliana; met de auto zijn jullie ook ’s avonds vrij.',
        'Wie in Frigiliana woont, rijdt voor het strand naar beneden. Wie in Nerja woont, rijdt voor de dorpsavond omhoog en bestelt voor de terugweg een taxi.',
        'Beide plaatsen kunnen deel zijn van dezelfde reis, maar als uitvalsbasis zijn ze niet uitwisselbaar: waar jullie wakker worden en terugkeren, of de kust of het dorp jullie dagelijkse omgeving vormt en welke wandel- en vervoerspatronen jullie herhalen, blijft het verblijf bepalen.'
      ],
      cta: 'Bus en taxi tussen Frigiliana en Nerja'
    },
    microLocations: {
      eyebrow: 'Als de plaats vaststaat',
      title: 'Dan de ligging binnen de plaats',
      frigiliana: {
        title: 'Verblijven jullie in Frigiliana?',
        text:
          'Oude kern, nieuwer deel of campo, en waarom de hoogte op de helling je dag bepaalt.',
        cta: 'Waar overnachten in Frigiliana?'
      },
      nerja: {
        title: 'Verblijven jullie in Nerja?',
        text:
          'Oude stad, Torrecilla, Burriana of de hellingen, en waarom nabijheid hier telt.',
        cta: 'Waar overnachten in Nerja?'
      }
    },
    amara: {
      eyebrow: 'Verblijf bij AMARA',
      title: 'We zijn op beide plekken',
      paragraphs: [
        'Vier appartementen in Casa AMARA midden in de oude kern van Frigiliana en AMARA Playa in Nerja, 200 meter van het strand.',
        'Twijfelen jullie, schrijf ons dan hoe jullie vakantie vieren. We zeggen waar jullie beter wakker worden.'
      ],
      frigilianaCta: 'Bekijk AMARA-verblijven in Frigiliana',
      nerjaCta: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    hero: {
      eyebrow: 'Frigiliana & Nerja',
      title: 'Frigiliana eller Nerja',
      subtitle: 'Byn ovanför eller havet nedanför?',
      lead:
        'Tio minuter skiljer byn från stranden. Ni behöver bara bestämma var ni vaknar.',
      body: [
        'I Frigiliana vaknar ni bland vita gränder, hämtar bröd hos Manolo och kör tio minuter ner till stranden. I Nerja går ni ut genom dörren med handduken före frukost och kör tio minuter upp för en kväll i byn.',
        'Vi har lägenheter på båda platserna och bor själva gärna på båda. Här står hur vardagen skiljer sig.'
      ],
    },
    coreQuestion: {
      eyebrow: 'Den verkliga frågan',
      title: 'Var vill ni vakna, och vart vill ni återvända på kvällen?',
      paragraphs: [
        'Båda platserna ser ni på en dag. Att bo känns annorlunda: det handlar om morgonkaffet, vägen hem efter maten och om havet hör till promenaden eller till utflykten.',
        'Frigiliana är en bergsby 300 meter över havet, stilla på kvällen när dagsbesökarna åkt. Nerja är en kuststad med stränder, tapasbarer och ett centrum som är öppet året runt.',
        'Frigiliana och Nerja ligger nära varandra. Men vardagen har olika karaktär.'
      ]
    },
    decisionFactors: {
      eyebrow: 'Det som påverkar vistelsen',
      title: 'Fyra skillnader ni känner varje dag',
      items: [
        {
          number: '01',
          title: 'Utanför dörren',
          frigiliana:
            'Vita gränder, Calle Real med restauranger och barer, San Antonio 15 meter bort. Besökare på dagen, byn på morgonen och kvällen.',
          nerja:
            'Stranden Torrecilla 200 meter bort, Balcón 500. Carrefour på samma gata, tapas i gamla stan, strandpromenaden för kvällen.'
        },
        {
          number: '02',
          title: 'Vägen till havet',
          frigiliana:
            'En stranddag är en bilfärd: tio minuter ner till Nerja, tillbaka till byn för middag på kvällen.',
          nerja:
            'I vattnet före frukost och tillbaka till stranden efter middagen. Havet hör till dagen som kaffet.'
        },
        {
          number: '03',
          title: 'Trappsteg och backar',
          frigiliana:
            'Byn hänger på sluttningen. Hos oss på Calle Chorruelo är det ett trappsteg vid ytterdörren, sedan plant till Calle Real och torget; den som bor högre upp i Barribarto har backen två gånger om dagen.',
          nerja:
            'Nerja är till stor del platt. AMARA Playa ligger på femte våningen med hiss; före hissen är det tio trappsteg. Uppför går det mot Burriana och de övre kvarteren.'
        },
        {
          number: '04',
          title: 'Bil',
          frigiliana:
            'För byn behöver ni ingen, för strand och utflykter gör ni det. Ni parkerar på Avenida Carlos Cano, fem minuter till fots från oss.',
          nerja:
            'I centrum står bilen parkerad; för Maro, Frigiliana och Axarquía räcker en eller två hyrdagar. Ni parkerar i parkeringshuset eller på gatan; Playa har ingen egen plats.'
        }
      ]
    },
    comparison: {
      eyebrow: 'Två platser',
      title: 'Två platser, två sorters dag',
      frigiliana: {
        title: 'Frigiliana, om…',
        paragraphs: [
          '… ni vill gå hem genom vita gränder på kvällen, ha Sierran i ryggen på morgonen och låta stranden vara en utflykt. Efter maten är ni hemma på fem minuter, och i Lounis, Zaid och Maha väntar den egna terrassen med utedusch.',
          'Frigiliana är välbesökt på dagen och stilla på kvällen. Den som söker lugn får det här från tidig kväll.'
        ],
        cta: 'Våra fyra lägenheter i Frigiliana'
      },
      nerja: {
        title: 'Nerja, om…',
        paragraphs: [
          '… ni vill gå ut genom dörren med handduken på morgonen, äta fisk på La Puntilla på kvällen och ha en stad som erbjuder något året runt: grotta, museum, strandpromenad, tapasbarer. Från AMARA Playa går nästan allt till fots.',
          'Nerja är fullt och livligt på sommaren; på vintern är strandpromenaden er. För ett par som vill ha hav och stad i ett är Torrecilla läget mitt emellan.'
        ],
        cta: 'AMARA Playa i Nerja'
      }
    },
    experienceBoth: {
      title: 'Ni får båda, bestäm bara var ni sover',
      paragraphs: [
        'Mellan byn och kusten ligger sex kilometer och tio minuters bilfärd. Bussen går mellan Nerja och Frigiliana; med bil är ni fria även på kvällen.',
        'Den som bor i Frigiliana kör ner till stranden. Den som bor i Nerja kör upp för en kväll i byn och beställer taxi för hemvägen.',
        'Båda platserna kan ingå i samma resa, men som baser är de inte utbytbara: var ni vaknar och återvänder, om kusten eller byn präglar vardagen och vilka promenad- och transportmönster ni upprepar fortsätter att forma vistelsen.'
      ],
      cta: 'Buss och taxi mellan Frigiliana och Nerja'
    },
    microLocations: {
      eyebrow: 'När platsen är vald',
      title: 'Sedan läget på platsen',
      frigiliana: {
        title: 'Ska ni bo i Frigiliana?',
        text:
          'Gamla byn, nya delen eller campo, och varför höjden på sluttningen styr er dag.',
        cta: 'Var ska man bo i Frigiliana?'
      },
      nerja: {
        title: 'Ska ni bo i Nerja?',
        text:
          'Gamla stan, Torrecilla, Burriana eller sluttningarna, och varför närheten räknas här.',
        cta: 'Var ska man bo i Nerja?'
      }
    },
    amara: {
      eyebrow: 'Bo hos AMARA',
      title: 'Vi finns på båda platserna',
      paragraphs: [
        'Fyra lägenheter i Casa AMARA mitt i Frigilianas gamla by och AMARA Playa i Nerja, 200 meter från stranden.',
        'Om ni tvekar, skriv och berätta hur ni semestrar. Vi säger var ni vaknar bäst.'
      ],
      frigilianaCta: 'Se AMARA-boenden i Frigiliana',
      nerjaCta: 'Se AMARA Playa'
    }
  }
};
