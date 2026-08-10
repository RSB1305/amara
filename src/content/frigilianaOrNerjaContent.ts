import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaOrNerjaPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    intro: string;
    imageAlt: string;
  };
  coreQuestion: {
    eyebrow: string;
    title: string;
    text: string;
  };
  evening: {
    eyebrow: string;
    title: string;
    text: string;
  };
  decisionFactors: {
    eyebrow: string;
    title: string;
    text: string;
  };
  history: {
    eyebrow: string;
    title: string;
    text: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    frigiliana: {
      title: string;
      text: string;
    };
    nerja: {
      title: string;
      text: string;
    };
    conclusion: string;
  };
  transport: {
    eyebrow: string;
    title: string;
    beforeBusLink: string;
    busLinkLabel: string;
    afterBusLink: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    frigiliana: {
      title: string;
      text: string;
      collectionCta: string;
    };
    nerja: {
      title: string;
      text: string;
      cta: string;
    };
  };
}

export const frigilianaOrNerjaSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-or-nerja-v2',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Frigiliana or Nerja: Where to Stay?',
      description:
        'Frigiliana or Nerja—which suits your stay better? An honest host comparison of calm, beaches, climate, transport and day trips.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana oder Nerja: Wo übernachten?',
      description:
        'Frigiliana oder Nerja – welcher Ort passt besser zu Paaren? Ehrlicher Gastgebervergleich zu Ruhe, Meer, Klima, Anreise und Ausflügen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana o Nerja: ¿dónde alojarse?',
      description:
        'Frigiliana o Nerja: comparativa sincera de anfitriones sobre tranquilidad, playa, clima, transporte y excursiones para elegir dónde alojarse.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana of Nerja: waar verblijven?',
      description:
        'Frigiliana of Nerja: een eerlijke vergelijking van rust, strand, klimaat, vervoer en dagtochten door hosts met verblijven in beide plaatsen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana eller Nerja: var ska man bo?',
      description:
        'Frigiliana eller Nerja: en ärlig värdjämförelse av lugn, strand, klimat, transport och utflykter för att välja rätt plats att bo på.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page. Every localization
 * preserves its meaning and practical depth in natural guest-facing language.
 */
export const frigilianaOrNerjaContent: Record<
  AmaraLanguage,
  FrigilianaOrNerjaPageCopy
> = {
  en: {
    hero: {
      eyebrow: 'Decision Guide',
      title: 'Frigiliana or Nerja – Where to Stay?',
      lead: 'The honest answer from hosts who have apartments in both places.',
      intro:
        'Anyone planning a trip to Andalusia will soon face this question. The usual travel blogs offer a convenient answer: stay in Nerja, and just visit Frigiliana as a day trip. We see it differently – and we can be honest because we have places in both towns. Our goal is not to push you in one direction or the other, but to help you find the right place for your holiday. First off: the two towns are only a ten-minute drive apart. This is not a major life decision – it’s more a matter of nuance. And that nuance is: where do you want to be in the evening and at night?',
      imageAlt: 'White houses and alleys in Frigiliana with a view towards the coast'
    },
    coreQuestion: {
      eyebrow: 'The Real Question',
      title: 'Is quiet enough – with the buzz of life ten minutes away?',
      text:
        'At its heart, the decision comes down to a single question: Are you happy with the beach, restaurants, and bustle being a ten-minute drive away, in exchange for peace and quiet in the evenings? Or do you want to be right in the middle of the action? For some, the tranquillity of the mountain village is the real holiday, with the sea comfortably within reach. For others, the vibrant life needs to be right on their doorstep. Both are valid – it just depends on what kind of person you are.'
    },
    decisionFactors: {
      eyebrow: 'Decision Factors',
      title: 'Calm, Beach Access, Climate: What Matters Most to You?',
      text:
        'Use this overview to quickly see which town better fits your priorities. Both places are only 10 minutes apart, so you can always enjoy the benefits of the other.'
    },
    evening: {
      eyebrow: 'Frigiliana in the Evening',
      title: 'In the evening, Frigiliana belongs to its guests',
      text:
        "Frigiliana is a mountain village in the truest sense of the word – steep alleys, stairs, hardly a car passing through. This changes everything as soon as the last day-trip buses leave the village. What remains is calm. A real, rare calm. Around 8 PM, the small restaurants slowly open. People sit at tables in the alleys, eating and talking – it feels less like tourism and more like being in the village with friends for the evening. All around are the white houses with their colourful doors, bougainvillea on the walls, and beyond, the view of the sea and the avocado and mango plantations of the Axarquía. This is the Frigiliana moment a day tourist never experiences. They are long back on the coast, while the village settles down and, for a few hours, belongs to those who stay."
    },
    history: {
      eyebrow: 'Moorish heritage / Alhambra',
      title: 'Sleeping in one of the oldest houses in the village',
      text:
        "Frigiliana's old town is considered one of the best-preserved Moorish-Mudéjar quarters in the province of Málaga – created by the same culture that built the Alhambra in Granada. The houses grew organically up the slope over centuries: narrow stepped alleys, no room with a right angle, each house expanded, sold, and rebuilt over time. When we carefully restored AMARA Lounis from 2020 to 2022 and uncovered the old walls, our architect was visibly impressed: he recognised the same construction method as the Alhambra in Granada – the same Moorish signature that shaped this quarter centuries ago. Sleeping in a house with such roots is a different feeling than in any coastal hotel. Nerja, for all its liveliness, cannot offer that."
    },
    comparison: {
      eyebrow: 'The Honest Comparison',
      title: 'Two styles, no better or worse',
      frigiliana: {
        title: 'Frigiliana – Calm, Nature, History',
        text:
          'For couples who want peace and quiet at night, value village character and views, and enjoy being in nature. There are many hiking trails around Frigiliana into the Sierra. A bonus, especially in summer: it is often noticeably cooler up in the mountain village than on the coast – the nights are significantly more pleasant.'
      },
      nerja: {
        title: 'Nerja – Sea, Vibrancy, Right Outside',
        text:
          'For guests who want the lively life right on their doorstep: the beach within walking distance, plenty of restaurants, and a buzz. Nerja became famous in Spain through the cult TV series "Verano Azul" (1980s) and has its own unique, summery pulse. If you are looking for proximity to the sea and the hustle and bustle, this is the place for you.'
      },
      conclusion:
        "And the best part: you can always enjoy the other's style. Many guests sleep peacefully in Frigiliana's cooler climate – and still enjoy Nerja's beach and vibrancy during the day, or go hiking. You don't have to choose one type of holiday. Just where you lay your head at night."
    },
    transport: {
      eyebrow: 'But how do I get to the sea?',
      title: "You don't have to choose between calm and the coast",
      beforeBusLink:
        'The most common concern about Frigiliana is: can I still get to the sea? The answer is straightforward. The drive to Nerja takes about ten minutes. There are several large car parks before you enter Nerja; it gets tighter in the centre, but it’s manageable. If you are travelling without a car, you can use the ',
      busLinkLabel: 'public bus',
      afterBusLink:
        ' (Grupo Fajardo) to get there and back: from Monday to Saturday, there are about a dozen connections in each direction during the day. The last regular bus from Frigiliana down to Nerja on weekdays is around 9:00 PM (until 10:00 PM in high summer), and back up from Nerja around 8:30 PM (with an additional service at 9:30 PM in July and August). Fewer buses run on Sundays and public holidays. So, a car is more convenient for late evenings – but during the day, you can be at the beach in ten minutes and back in the quieter village just as quickly.'
    },
    booking: {
      eyebrow: 'Booking Fork',
      title: 'Which place is right for you?',
      frigiliana: {
        title: 'You want calm, climate, and village character',
        text:
          'Then our boutique apartments in Frigiliana for couples are the right choice – with the sea just ten minutes away.',
        collectionCta: 'View apartments'
      },
      nerja: {
        title: 'You want to be in the heart of coastal life',
        text:
          'Then AMARA Playa in Nerja is your place – with the beach and vibrancy right on your doorstep.',
        cta: 'View AMARA Playa'
      }
    }
  },
  de: {
    hero: {
      eyebrow: 'Entscheidungshilfe',
      title: 'Frigiliana oder Nerja – wo übernachten?',
      lead:
        'Die ehrliche Antwort von Gastgebern, die in beiden Orten vermieten.',
      intro:
        'Wer Andalusien plant, stößt schnell auf diese Frage. Die gängigen Reiseblogs geben eine bequeme Antwort: in Nerja wohnen, Frigiliana nur als Tagesausflug. Wir sehen das anders – und wir können ehrlich sein, weil wir in beiden Orten Unterkünfte haben. Uns geht es nicht darum, euch in die eine oder andere Richtung zu drängen, sondern darum, dass ihr am richtigen Ort für euren Urlaub landet. Vorweg: Die beiden Orte liegen nur zehn Autominuten auseinander. Das ist keine große Grundsatzentscheidung – eher eine Frage der Nuance. Und die Nuance ist: Wo wollt ihr abends und nachts sein?',
      imageAlt:
        'Weiße Häuser und Gassen in Frigiliana mit Blick Richtung Küste'
    },
    coreQuestion: {
      eyebrow: 'Die eigentliche Frage',
      title:
        'Reicht euch Ruhe – mit dem lebendigen Leben zehn Minuten entfernt?',
      text:
        'Im Kern läuft die Entscheidung auf eine einzige Frage hinaus: Reicht es euch, dass Strand, Restaurants und Trubel zehn Autominuten entfernt sind – und ihr habt dafür abends eure Ruhe? Oder wollt ihr mitten im lebendigen Leben wohnen? Für die einen ist die Ruhe des Bergdorfs der eigentliche Urlaub, mit dem Meer bequem in Reichweite. Für die anderen muss das pulsierende Leben direkt vor der Tür sein. Beides ist richtig – es kommt nur darauf an, welcher Typ ihr seid.'
    },
    decisionFactors: {
      eyebrow: 'Entscheidungsfaktoren',
      title: 'Ruhe, Strandnähe, Klima: Was ist euch am wichtigsten?',
      text:
        'Nutzt diese Übersicht, um schnell zu sehen, welcher Ort besser zu euren Prioritäten passt. Beide Orte sind nur 10 Minuten voneinander entfernt, sodass ihr immer die Vorteile des anderen mitnutzen könnt.'
    },
    evening: {
      eyebrow: 'Frigiliana am Abend',
      title: 'Frigiliana am Abend gehört den Gästen',
      text:
        'Frigiliana ist ein Bergdorf im Wortsinn – steile Gassen, Treppen, kaum ein Auto, das durchfährt. Genau das verändert alles, sobald die letzten Tagesbusse das Dorf verlassen. Was bleibt, ist Ruhe. Eine echte, seltene Ruhe. Gegen 20 Uhr öffnen langsam die kleinen Restaurants. Man setzt sich an die Tische in den Gassen, es wird gegessen und geredet – es fühlt sich weniger an wie Tourismus und mehr, als wäre man abends mit Freunden im Dorf. Ringsum die weißen Häuser mit ihren farbigen Türen, Bougainvillea an den Mauern, und dahinter der Blick aufs Meer und über die Avocado- und Mangoplantagen der Axarquía. Das ist der Frigiliana-Moment, den ein Tagestourist nie erlebt. Er ist längst zurück an der Küste, während das Dorf zur Ruhe kommt und für ein paar Stunden denen gehört, die bleiben.'
    },
    history: {
      eyebrow: 'Maurisches Erbe / Alhambra',
      title: 'Schlafen in einem der ältesten Häuser des Dorfes',
      text:
        'Frigilianas Altstadt gilt als eines der am besten erhaltenen maurisch-mudéjar geprägten Altstadtviertel der Provinz Málaga – angelegt von derselben Kultur, die in Granada die Alhambra schuf. Die Häuser wuchsen über Jahrhunderte organisch den Hang hinauf: enge Stufengassen, kein Zimmer mit rechtem Winkel, jedes Haus im Lauf der Zeit erweitert, verkauft, umgebaut. Als wir AMARA Lounis von 2020 bis 2022 behutsam restaurierten und die alten Mauern freilegten, war unser Architekt sichtlich beeindruckt: Er erkannte darin dieselbe Bauweise wie die der Alhambra in Granada – dieselbe maurische Handschrift, die dieses Viertel vor Jahrhunderten geprägt hat. In einem Haus mit solchen Wurzeln zu schlafen, ist ein anderes Gefühl als in jedem Küstenhotel. Das kann Nerja bei aller Lebendigkeit nicht bieten.'
    },
    comparison: {
      eyebrow: 'Der ehrliche Vergleich',
      title: 'Zwei Stile, kein besser oder schlechter',
      frigiliana: {
        title: 'Frigiliana – Ruhe, Natur, Geschichte',
        text:
          'Für Paare, die abends und nachts ihre Ruhe möchten, Wert auf Dorfcharakter und Ausblick legen und gern in der Natur sind. Rund um Frigiliana gibt es viele Wanderwege in die Sierra. Ein Pluspunkt gerade im Sommer: Oben im Bergdorf ist es oft spürbar kühler als an der Küste – die Nächte sind spürbar angenehmer.'
      },
      nerja: {
        title: 'Nerja – Meer, Lebendigkeit, direkt raus',
        text:
          'Für Gäste, die das lebendige Leben direkt vor der Tür wollen: Strand zu Fuß erreichbar, viele Restaurants, Betrieb. Nerja ist in Spanien durch die Kult-Fernsehserie „Verano azul“ (1980er) berühmt geworden und hat einen ganz eigenen, sommerlichen Puls. Wer die Nähe zum Meer und den Trubel sucht, ist hier richtig.'
      },
      conclusion:
        'Und das Schöne: Jeder kann den Stil des anderen mitnutzen. Viele Gäste schlafen in Frigiliana in Ruhe und im kühleren Klima – und haben tagsüber trotzdem Nerjas Strand und Lebendigkeit, oder gehen wandern. Man muss sich nicht für einen Urlaub entscheiden. Nur dafür, wo man abends den Kopf hinlegt.'
    },
    transport: {
      eyebrow: 'Aber wie komme ich ans Meer?',
      title: 'Ihr müsst euch nicht zwischen Ruhe und Strand entscheiden',
      beforeBusLink:
        'Die häufigste Sorge bei Frigiliana ist: Komme ich dann noch ans Meer? Die Antwort ist unkompliziert. Die Fahrt nach Nerja dauert rund zehn Minuten. Vor Nerja gibt es mehrere große Parkplätze; im Zentrum wird es enger, aber es ist machbar. Wer ohne Auto reist, kommt mit dem ',
      busLinkLabel: 'öffentlichen Bus',
      afterBusLink:
        ' (Grupo Fajardo) hin und zurück: Montag bis Samstag fahren tagsüber rund ein Dutzend Verbindungen je Richtung. Von Frigiliana hinunter nach Nerja fährt der letzte reguläre Bus werktags gegen 21:00 Uhr (im Hochsommer bis 22:00 Uhr), zurück von Nerja hinauf gegen 20:30 Uhr (im Juli und August zusätzlich um 21:30 Uhr). Sonntags und feiertags fahren weniger Busse. Für späte Abende ist ein Auto also bequemer – aber tagsüber seid ihr in zehn Minuten am Strand und ebenso schnell wieder in eurer Ruhe.'
    },
    booking: {
      eyebrow: 'Buchungs-Gabelung',
      title: 'Welcher Ort passt zu euch?',
      frigiliana: {
        title: 'Ihr wollt Ruhe, Klima und Dorfcharakter',
        text:
          'Dann sind unsere Boutique-Apartments in Frigiliana für Paare die richtige Wahl – mit dem Meer zehn Minuten entfernt.',
        collectionCta: 'Apartments ansehen'
      },
      nerja: {
        title: 'Ihr wollt mitten im Küstenleben wohnen',
        text:
          'Dann ist AMARA Playa in Nerja euer Ort – Strand und Lebendigkeit direkt vor der Tür.',
        cta: 'AMARA Playa ansehen'
      }
    }
  },
  es: {
    hero: {
      eyebrow: 'Guía para decidir',
      title: 'Frigiliana o Nerja: ¿dónde alojarse?',
      lead:
        'La respuesta sincera de anfitriones con apartamentos en ambos lugares.',
      intro:
        'Quien prepara un viaje a Andalucía no tarda en hacerse esta pregunta. Muchos blogs de viajes ofrecen una respuesta cómoda: alojarse en Nerja y visitar Frigiliana solo como excursión de un día. Nosotros lo vemos de otra manera, y podemos hablar con franqueza porque tenemos alojamientos en ambos pueblos. No queremos llevaros hacia uno u otro, sino ayudaros a encontrar el lugar que mejor encaje con vuestras vacaciones. Para empezar, solo hay unos diez minutos en coche entre ambos. No es una decisión trascendental, sino una cuestión de matices. Y el matiz decisivo es este: ¿dónde queréis estar al caer la tarde y por la noche?',
      imageAlt:
        'Casas blancas y callejuelas de Frigiliana con vistas hacia la costa'
    },
    coreQuestion: {
      eyebrow: 'La pregunta clave',
      title:
        '¿Os basta la tranquilidad si el ambiente está a diez minutos?',
      text:
        'En el fondo, la decisión se reduce a una sola pregunta: ¿os compensa tener la playa, los restaurantes y el ambiente a diez minutos en coche a cambio de disfrutar de calma por la noche? ¿O preferís estar en pleno movimiento? Para algunas personas, la tranquilidad del pueblo de montaña es la esencia de las vacaciones, con el mar cómodamente cerca. Para otras, la vida animada debe empezar justo al salir de casa. Ambas opciones son válidas; todo depende del tipo de estancia que buscáis.'
    },
    decisionFactors: {
      eyebrow: 'Factores para decidir',
      title: 'Calma, playa y clima: ¿qué os importa más?',
      text:
        'Esta comparativa permite ver rápidamente qué lugar encaja mejor con vuestras prioridades. Frigiliana y Nerja están a solo diez minutos, así que siempre podéis disfrutar de las ventajas del otro.'
    },
    evening: {
      eyebrow: 'Frigiliana al anochecer',
      title: 'Por la noche, Frigiliana pertenece a quienes se alojan aquí',
      text:
        'Frigiliana es un pueblo de montaña en el sentido más literal: callejuelas empinadas, escaleras y apenas coches atravesándolo. Todo cambia cuando se marchan los últimos autobuses de excursionistas. Lo que queda es calma, una calma auténtica y poco habitual. Hacia las ocho, los pequeños restaurantes empiezan a abrir. La gente se sienta a las mesas de las callejuelas, cena y conversa; se siente menos como turismo y más como pasar la noche en el pueblo entre amigos. Alrededor aparecen las casas blancas con puertas de colores, buganvillas sobre los muros y, al fondo, el mar y las plantaciones de aguacates y mangos de la Axarquía. Es el momento de Frigiliana que quien viene solo de día nunca vive. Ya ha regresado a la costa mientras el pueblo baja el ritmo y, durante unas horas, pertenece a quienes se quedan.'
    },
    history: {
      eyebrow: 'Herencia andalusí / Alhambra',
      title: 'Dormir en una de las casas más antiguas del pueblo',
      text:
        'El casco antiguo de Frigiliana está considerado uno de los barrios morisco-mudéjares mejor conservados de la provincia de Málaga, nacido de la misma cultura que levantó la Alhambra de Granada. Durante siglos, las casas crecieron de forma orgánica por la ladera: callejuelas escalonadas, habitaciones sin ángulos rectos y viviendas ampliadas, vendidas y transformadas con el tiempo. Cuando restauramos cuidadosamente AMARA Lounis de 2020 a 2022 y dejamos al descubierto los muros antiguos, nuestro arquitecto quedó visiblemente impresionado: reconoció el mismo método constructivo de la Alhambra, la misma huella morisca que dio forma a este barrio hace siglos. Dormir en una casa con estas raíces se siente de otra manera que hacerlo en cualquier hotel de costa. Nerja, pese a toda su vitalidad, no puede ofrecer eso.'
    },
    comparison: {
      eyebrow: 'La comparativa sincera',
      title: 'Dos estilos, ninguno mejor que el otro',
      frigiliana: {
        title: 'Frigiliana: calma, naturaleza e historia',
        text:
          'Para parejas que quieren tranquilidad por la noche, valoran el carácter del pueblo y las vistas, y disfrutan de la naturaleza. Desde Frigiliana parten numerosas rutas hacia la sierra. Otra ventaja, especialmente en verano, es que el pueblo de montaña suele estar sensiblemente más fresco que la costa y las noches resultan mucho más agradables.'
      },
      nerja: {
        title: 'Nerja: mar y ambiente al salir de casa',
        text:
          'Para huéspedes que quieren vida y movimiento justo al otro lado de la puerta: playa a pie, muchos restaurantes y un ambiente animado. Nerja se hizo famosa en España gracias a la serie de culto «Verano Azul», de los años ochenta, y conserva un pulso veraniego muy propio. Si buscáis cercanía al mar y más actividad, este es vuestro lugar.'
      },
      conclusion:
        'Lo mejor es que siempre podéis disfrutar del estilo del otro lugar. Muchas personas duermen con calma y temperaturas más frescas en Frigiliana, pero durante el día disfrutan de las playas y el ambiente de Nerja o salen a caminar. No tenéis que elegir un único tipo de vacaciones, solo dónde queréis descansar por la noche.'
    },
    transport: {
      eyebrow: '¿Y cómo llego al mar?',
      title: 'No tenéis que elegir entre tranquilidad y costa',
      beforeBusLink:
        'La duda más habitual sobre Frigiliana es si resulta fácil llegar al mar. La respuesta es sencilla. Nerja está a unos diez minutos en coche. Antes de entrar en el centro hay varios aparcamientos grandes; dentro las calles son más estrechas, pero se puede gestionar. Si viajáis sin coche, podéis utilizar el ',
      busLinkLabel: 'autobús público',
      afterBusLink:
        ' de Grupo Fajardo para ir y volver. De lunes a sábado hay alrededor de una docena de servicios diurnos en cada sentido. Entre semana, el último autobús regular de Frigiliana a Nerja sale hacia las 21:00 —hasta las 22:00 en pleno verano— y el último de regreso sube aproximadamente a las 20:30, con un servicio adicional a las 21:30 en julio y agosto. Los domingos y festivos hay menos conexiones. Para volver tarde, el coche es más cómodo; durante el día, en cambio, podéis estar en la playa en diez minutos y regresar con la misma rapidez a vuestro refugio tranquilo.'
    },
    booking: {
      eyebrow: 'El momento de elegir',
      title: '¿Qué lugar encaja mejor con vosotros?',
      frigiliana: {
        title: 'Buscáis calma, buen clima y carácter de pueblo',
        text:
          'Entonces nuestros apartamentos boutique para parejas en Frigiliana son la opción adecuada, con el mar a solo diez minutos.',
        collectionCta: 'Ver apartamentos'
      },
      nerja: {
        title: 'Queréis estar en pleno ambiente de la costa',
        text:
          'Entonces AMARA Playa, en Nerja, es vuestro lugar, con la playa y la vida de la costa justo al salir de casa.',
        cta: 'Ver AMARA Playa'
      }
    }
  },
  nl: {
    hero: {
      eyebrow: 'Keuzehulp',
      title: 'Frigiliana of Nerja: waar verblijven?',
      lead:
        'Het eerlijke antwoord van hosts met appartementen in beide plaatsen.',
      intro:
        'Wie een reis naar Andalusië plant, komt al snel voor deze vraag te staan. Veel reisblogs geven een eenvoudig antwoord: verblijf in Nerja en bezoek Frigiliana alleen als dagtocht. Wij kijken daar anders naar en kunnen daar open over zijn, omdat we in beide plaatsen accommodaties hebben. We willen jullie niet de ene of de andere kant op sturen, maar helpen de plek te kiezen die echt bij jullie vakantie past. Om te beginnen liggen de twee plaatsen slechts tien minuten rijden van elkaar. Het is geen ingrijpende keuze, maar vooral een kwestie van nuance. En die nuance is: waar willen jullie aan het einde van de middag en ’s avonds zijn?',
      imageAlt:
        'Witte huizen en steegjes in Frigiliana met uitzicht richting de kust'
    },
    coreQuestion: {
      eyebrow: 'De echte vraag',
      title:
        'Is rust genoeg als de levendigheid op tien minuten afstand ligt?',
      text:
        'Uiteindelijk draait de keuze om één vraag: vinden jullie het prettig dat strand, restaurants en levendigheid op tien minuten rijden liggen, in ruil voor rustige avonden? Of willen jullie midden in het bruisende leven verblijven? Voor sommigen is de stilte van het bergdorp precies wat vakantie betekent, met de zee comfortabel binnen bereik. Voor anderen moet de bedrijvigheid direct voor de deur beginnen. Beide keuzes zijn goed; het hangt af van het soort verblijf dat bij jullie past.'
    },
    decisionFactors: {
      eyebrow: 'Beslissende factoren',
      title: 'Rust, strand en klimaat: wat vinden jullie het belangrijkst?',
      text:
        'Met dit overzicht zien jullie snel welke plaats het beste aansluit bij jullie prioriteiten. Frigiliana en Nerja liggen maar tien minuten uit elkaar, zodat de voordelen van de andere plek altijd binnen bereik blijven.'
    },
    evening: {
      eyebrow: 'Frigiliana in de avond',
      title: 'In de avond is Frigiliana van zijn gasten',
      text:
        'Frigiliana is een bergdorp in de meest letterlijke zin: steile steegjes, trappen en nauwelijks doorgaand autoverkeer. Alles verandert zodra de laatste bussen met dagjesmensen vertrekken. Wat overblijft is rust, echte en zeldzame rust. Rond acht uur openen de kleine restaurants langzaam hun deuren. Mensen zitten aan tafels in de steegjes, eten en praten; het voelt minder als toerisme en meer als een avond met vrienden in het dorp. Rondom staan de witte huizen met kleurrijke deuren en bougainville tegen de muren, met daarachter uitzicht op zee en de avocado- en mangoplantages van de Axarquía. Dit is het Frigiliana-moment dat een dagbezoeker nooit meemaakt. Die is al terug aan de kust terwijl het dorp tot rust komt en een paar uur lang toebehoort aan de mensen die blijven.'
    },
    history: {
      eyebrow: 'Moors erfgoed / Alhambra',
      title: 'Slapen in een van de oudste huizen van het dorp',
      text:
        'De oude stad van Frigiliana geldt als een van de best bewaarde Moors-Mudéjarwijken van de provincie Málaga, gevormd door dezelfde cultuur die het Alhambra in Granada bouwde. De huizen groeiden eeuwenlang organisch tegen de helling op: smalle steegjes met trappen, kamers zonder rechte hoek en woningen die door de jaren heen werden uitgebreid, verkocht en verbouwd. Toen we AMARA Lounis van 2020 tot 2022 zorgvuldig restaureerden en de oude muren blootlegden, was onze architect zichtbaar onder de indruk. Hij herkende dezelfde bouwmethode als bij het Alhambra, dezelfde Moorse signatuur die deze wijk eeuwen geleden vormde. Slapen in een huis met zulke wortels voelt anders dan in welk hotel aan de kust ook. Dat kan Nerja, ondanks alle levendigheid, niet bieden.'
    },
    comparison: {
      eyebrow: 'De eerlijke vergelijking',
      title: 'Twee stijlen, zonder beter of slechter',
      frigiliana: {
        title: 'Frigiliana: rust, natuur en geschiedenis',
        text:
          'Voor stellen die ’s avonds en ’s nachts rust willen, dorpskarakter en uitzicht waarderen en graag in de natuur zijn. Rond Frigiliana lopen veel wandelroutes de sierra in. Een extra voordeel, vooral in de zomer, is dat het bergdorp vaak merkbaar koeler is dan de kust en de nachten er aanzienlijk aangenamer zijn.'
      },
      nerja: {
        title: 'Nerja: zee en levendigheid voor de deur',
        text:
          'Voor gasten die het bruisende leven direct voor de deur willen: het strand op loopafstand, veel restaurants en volop reuring. Nerja werd in Spanje beroemd door de cultserie ‘Verano Azul’ uit de jaren tachtig en heeft een heel eigen zomers ritme. Wie dicht bij zee en midden in de bedrijvigheid wil zijn, zit hier goed.'
      },
      conclusion:
        'Het mooie is dat jullie altijd van de stijl van de andere plaats kunnen genieten. Veel gasten slapen rustig in het koelere klimaat van Frigiliana en genieten overdag toch van het strand en de levendigheid van Nerja, of trekken de natuur in. Jullie hoeven niet voor één soort vakantie te kiezen, alleen voor de plek waar jullie ’s avonds willen slapen.'
    },
    transport: {
      eyebrow: 'Maar hoe kom ik bij zee?',
      title: 'Jullie hoeven niet te kiezen tussen rust en de kust',
      beforeBusLink:
        'De meest gestelde vraag over Frigiliana is of de zee nog gemakkelijk bereikbaar is. Het antwoord is eenvoudig. De rit naar Nerja duurt ongeveer tien minuten. Voor de toegang tot Nerja liggen meerdere grote parkeerterreinen; in het centrum wordt het krapper, maar het is goed te doen. Reizen jullie zonder auto, dan kunnen jullie de ',
      busLinkLabel: 'openbare bus',
      afterBusLink:
        ' van Grupo Fajardo nemen. Van maandag tot en met zaterdag rijden overdag ongeveer twaalf bussen per richting. Op werkdagen vertrekt de laatste reguliere bus van Frigiliana naar Nerja rond 21.00 uur —in het hoogseizoen tot 22.00 uur— en vanuit Nerja omhoog rond 20.30 uur, met in juli en augustus nog een extra rit om 21.30 uur. Op zon- en feestdagen rijden minder bussen. Voor late avonden is een auto dus handiger, maar overdag staan jullie in tien minuten op het strand en zijn jullie net zo snel terug in de rust.'
    },
    booking: {
      eyebrow: 'Het keuzemoment',
      title: 'Welke plaats past bij jullie?',
      frigiliana: {
        title: 'Jullie zoeken rust, klimaat en dorpskarakter',
        text:
          'Dan zijn onze boutique-appartementen voor stellen in Frigiliana de juiste keuze, met de zee op slechts tien minuten afstand.',
        collectionCta: 'Bekijk de appartementen'
      },
      nerja: {
        title: 'Jullie willen midden in het leven aan de kust verblijven',
        text:
          'Dan is AMARA Playa in Nerja jullie plek, met het strand en de levendigheid direct voor de deur.',
        cta: 'Bekijk AMARA Playa'
      }
    }
  },
  sv: {
    hero: {
      eyebrow: 'Vägledning inför valet',
      title: 'Frigiliana eller Nerja: var ska man bo?',
      lead:
        'Det ärliga svaret från värdar med lägenheter på båda platserna.',
      intro:
        'Den som planerar en resa till Andalusien ställs snart inför den här frågan. Många resebloggar ger ett enkelt svar: bo i Nerja och besök Frigiliana som en dagsutflykt. Vi ser annorlunda på saken och kan vara öppna eftersom vi har boenden på båda orterna. Vårt mål är inte att styra er åt det ena eller andra hållet, utan att hjälpa er hitta den plats som passar semestern bäst. Till att börja med ligger orterna bara tio minuters bilresa från varandra. Det är inget avgörande livsval, utan en fråga om nyanser. Och den viktigaste nyansen är: var vill ni vara på kvällen och natten?',
      imageAlt:
        'Vita hus och gränder i Frigiliana med utsikt mot kusten'
    },
    coreQuestion: {
      eyebrow: 'Den verkliga frågan',
      title: 'Räcker lugnet när folklivet finns tio minuter bort?',
      text:
        'I grunden handlar valet om en enda fråga: känns det bra att ha stranden, restaurangerna och folklivet tio minuters bilresa bort i utbyte mot lugna kvällar? Eller vill ni bo mitt i allt? För vissa är stillheten i bergsbyn själva semestern, med havet bekvämt inom räckhåll. För andra behöver det livliga utbudet finnas precis utanför dörren. Båda valen är rätt; det beror bara på vilken typ av vistelse som passar er.'
    },
    decisionFactors: {
      eyebrow: 'Faktorer som avgör',
      title: 'Lugn, strand och klimat: vad är viktigast för er?',
      text:
        'Översikten visar snabbt vilken ort som bäst motsvarar era prioriteringar. Frigiliana och Nerja ligger bara tio minuter från varandra, så ni kan alltid ta del av fördelarna på den andra platsen.'
    },
    evening: {
      eyebrow: 'Frigiliana på kvällen',
      title: 'På kvällen tillhör Frigiliana sina gäster',
      text:
        'Frigiliana är en bergsby i ordets mest bokstavliga mening: branta gränder, trappor och knappt någon genomfartstrafik. Allt förändras när de sista bussarna med dagsbesökare lämnar byn. Kvar blir lugnet, ett äkta och sällsynt lugn. Vid åttatiden börjar de små restaurangerna öppna. Människor sitter vid bord i gränderna, äter och pratar; det känns mindre som turism och mer som en kväll i byn med vänner. Runt omkring syns de vita husen med färgstarka dörrar, bougainvillea längs väggarna och längre bort havet och Axarquías avokado- och mangoodlingar. Det är Frigiliana-ögonblicket som en dagsbesökare aldrig upplever. De är sedan länge tillbaka vid kusten medan byn varvar ner och under några timmar tillhör dem som stannar.'
    },
    history: {
      eyebrow: 'Moriskt arv / Alhambra',
      title: 'Sov i ett av byns äldsta hus',
      text:
        'Frigilianas gamla stad räknas som ett av de bäst bevarade morisk-mudéjarpräglade kvarteren i provinsen Málaga, skapat av samma kultur som byggde Alhambra i Granada. Under århundraden växte husen organiskt uppför sluttningen: smala gränder med trappor, rum utan räta vinklar och bostäder som byggdes ut, såldes och förändrades över tid. När vi varsamt restaurerade AMARA Lounis 2020–2022 och blottlade de gamla murarna blev vår arkitekt tydligt imponerad. Han kände igen samma byggmetod som i Alhambra, samma moriska signatur som formade kvarteret för flera hundra år sedan. Att sova i ett hus med sådana rötter känns annorlunda än på vilket kusthotell som helst. Det kan Nerja, trots all sin livlighet, inte erbjuda.'
    },
    comparison: {
      eyebrow: 'Den ärliga jämförelsen',
      title: 'Två stilar, ingen bättre eller sämre',
      frigiliana: {
        title: 'Frigiliana: lugn, natur och historia',
        text:
          'För par som vill ha lugn på kvällen och natten, uppskattar bykaraktär och utsikt och gärna vistas i naturen. Runt Frigiliana finns många vandringsleder som leder ut i sierran. En extra fördel, särskilt på sommaren, är att bergsbyn ofta är märkbart svalare än kusten och nätterna betydligt behagligare.'
      },
      nerja: {
        title: 'Nerja: hav och folkliv utanför dörren',
        text:
          'För gäster som vill ha det livliga utbudet precis utanför dörren: stranden på gångavstånd, många restauranger och rörelse. Nerja blev känt i Spanien genom kultserien ”Verano Azul” från 1980-talet och har en helt egen sommarpuls. Om närheten till havet och mer folkliv är viktigast passar Nerja bäst.'
      },
      conclusion:
        'Det fina är att ni alltid kan njuta av den andra ortens stil. Många gäster sover lugnt i Frigilianas svalare klimat men njuter ändå av Nerjas stränder och folkliv på dagen, eller ger sig ut och vandrar. Ni behöver inte välja en enda sorts semester, bara var ni vill lägga huvudet på kvällen.'
    },
    transport: {
      eyebrow: 'Men hur tar jag mig till havet?',
      title: 'Ni behöver inte välja mellan lugnet och kusten',
      beforeBusLink:
        'Den vanligaste frågan om Frigiliana är om det fortfarande är enkelt att ta sig till havet. Svaret är ja. Bilresan till Nerja tar ungefär tio minuter. Innan ni kör in i Nerja finns flera stora parkeringar; i centrum blir det trängre, men det går att hantera. Reser ni utan bil kan ni använda den ',
      busLinkLabel: 'allmänna bussen',
      afterBusLink:
        ' från Grupo Fajardo för att ta er fram och tillbaka. Från måndag till lördag går ungefär ett dussin avgångar i vardera riktningen under dagen. På vardagar går den sista ordinarie bussen från Frigiliana ner till Nerja omkring klockan 21.00 —under högsommaren fram till 22.00— och tillbaka upp från Nerja omkring 20.30, med en extra avgång 21.30 i juli och augusti. På söndagar och helgdagar går färre bussar. För sena kvällar är bil därför smidigare, men dagtid når ni stranden på tio minuter och är lika snabbt tillbaka i lugnet.'
    },
    booking: {
      eyebrow: 'Dags att välja',
      title: 'Vilken plats passar er?',
      frigiliana: {
        title: 'Ni söker lugn, klimat och bykaraktär',
        text:
          'Då är våra boutiquelägenheter för par i Frigiliana rätt val, med havet bara tio minuter bort.',
        collectionCta: 'Se lägenheterna'
      },
      nerja: {
        title: 'Ni vill bo mitt i livet vid kusten',
        text:
          'Då är AMARA Playa i Nerja er plats, med stranden och folklivet precis utanför dörren.',
        cta: 'Se AMARA Playa'
      }
    }
  }
};
