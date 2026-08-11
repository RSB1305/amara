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
      lead: 'A practical comparison from hosts with apartments in both places.',
      intro:
        'Frigiliana and Nerja are only about ten minutes apart by car, which makes them easy to combine in one holiday. The more useful question is not which one you want to visit, but where you want to wake up and come home to in the evening. Choose Frigiliana when the historic village should feel like home, with Nerja, Maro and the beaches for days by the coast. Nerja fits better when walking straight to the beach and deciding spontaneously between the sea, restaurants and coastal life matters most.',
      imageAlt: 'White houses and alleys in Frigiliana with a view towards the coast'
    },
    coreQuestion: {
      eyebrow: 'The Real Question',
      title: 'Where do you want to wake up – and come home to?',
      text:
        'Frigiliana puts the historic village around you at the beginning and end of the day: quiet lanes in the morning, restaurants on foot in the evening, and the coast as an easy daytime option. Nerja puts beaches, seaside life and a broader choice of coastal services directly outside the door. The distance is short; the real difference is the setting that shapes your daily rhythm.'
    },
    decisionFactors: {
      eyebrow: 'Decision Factors',
      title: 'Calm, Beach Access, Climate: What Matters Most to You?',
      text:
        'Use this overview to compare the daily rhythm of each place. With Frigiliana and Nerja only about ten minutes apart by car, village life and the coast can remain part of the same holiday.'
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
        "Frigiliana's old town is considered one of the best-preserved Moorish-Mudéjar quarters in the province of Málaga – created by the same culture that built the Alhambra in Granada. The houses grew organically up the slope over centuries: narrow stepped alleys, no room with a right angle, each house expanded, sold, and rebuilt over time. When we carefully restored AMARA Lounis from 2020 to 2022 and uncovered the old walls, our architect was visibly impressed: he recognised the same construction method as the Alhambra in Granada – the same Moorish signature that shaped this quarter centuries ago. Sleeping in a house with such roots is a different feeling than in a coastal hotel. It is one of Frigiliana's defining strengths, while Nerja's distinctive appeal begins with life beside the sea."
    },
    comparison: {
      eyebrow: 'The Honest Comparison',
      title: 'Two home bases, two daily rhythms',
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
        "A stay in Frigiliana can pair village mornings and evenings with beach days in Nerja or Maro. From Nerja, Frigiliana remains close enough for an easy visit between days by the sea. The choice is the setting you want around you when the day begins and where you want to come home to at night."
    },
    transport: {
      eyebrow: 'Village and coast',
      title: 'From Frigiliana, the coast stays within easy reach',
      beforeBusLink:
        'The drive from Frigiliana to Nerja takes about ten minutes, making a beach day easy to include. There are several large car parks before you enter Nerja; it gets tighter in the centre, but it’s manageable. If you are travelling without a car, you can use the ',
      busLinkLabel: 'public bus',
      afterBusLink:
        ' (Grupo Fajardo) to get there and back: from Monday to Saturday, there are about a dozen connections in each direction during the day. The last regular bus from Frigiliana down to Nerja on weekdays is around 9:00 PM (until 10:00 PM in high summer), and back up from Nerja around 8:30 PM (with an additional service at 9:30 PM in July and August). Fewer buses run on Sundays and public holidays. So, a car is more convenient for late evenings – but during the day, you can be at the beach in ten minutes and back in the quieter village just as quickly.'
    },
    booking: {
      eyebrow: 'Booking Fork',
      title: 'Choose the setting that should feel like home',
      frigiliana: {
        title: 'Choose Frigiliana for village mornings and quiet evenings',
        text:
          'Then our boutique apartments in Frigiliana for couples are the right choice – with the sea just ten minutes away.',
        collectionCta: 'View apartments'
      },
      nerja: {
        title: 'Choose Nerja for beach-first days',
        text:
          'AMARA Playa fits when immediate beach walkability and spontaneous coastal life matter most.',
        cta: 'View AMARA Playa'
      }
    }
  },
  de: {
    hero: {
      eyebrow: 'Entscheidungshilfe',
      title: 'Frigiliana oder Nerja – wo übernachten?',
      lead:
        'Ein praktischer Vergleich von Gastgebern mit Unterkünften in beiden Orten.',
      intro:
        'Frigiliana und Nerja liegen nur etwa zehn Autominuten auseinander und lassen sich im Urlaub sehr gut miteinander verbinden. Die wichtigere Frage ist deshalb nicht, welchen Ort ihr besuchen möchtet, sondern wo ihr morgens aufwachen und abends nach Hause kommen wollt. Frigiliana passt zu euch, wenn das historische Dorf euer Zuhause sein soll und Nerja, Maro und die Strände eure Tage am Meer ergänzen. Nerja ist die stimmigere Basis, wenn ihr spontan zu Fuß zum Strand, ans Meer oder zum Restaurant gehen möchtet.',
      imageAlt:
        'Weiße Häuser und Gassen in Frigiliana mit Blick Richtung Küste'
    },
    coreQuestion: {
      eyebrow: 'Die eigentliche Frage',
      title: 'Wo wollt ihr aufwachen – und abends nach Hause kommen?',
      text:
        'In Frigiliana beginnt und endet euer Tag mitten im historischen Dorf: morgens in ruhigen Gassen, abends zu Fuß auf dem Weg zum Restaurant und tagsüber mit der Küste als unkomplizierter Option. In Nerja liegen Strände, Küstenleben und ein breiteres Angebot direkt vor der Tür. Die Entfernung ist kurz; den Unterschied macht die Umgebung, die euren Tagesrhythmus prägt.'
    },
    decisionFactors: {
      eyebrow: 'Entscheidungsfaktoren',
      title: 'Ruhe, Strandnähe, Klima: Was ist euch am wichtigsten?',
      text:
        'Diese Übersicht zeigt euch den unterschiedlichen Tagesrhythmus beider Orte. Da Frigiliana und Nerja nur etwa zehn Autominuten auseinanderliegen, können Dorfleben und Küste Teil desselben Urlaubs bleiben.'
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
        'Frigilianas Altstadt gilt als eines der am besten erhaltenen maurisch-mudéjar geprägten Altstadtviertel der Provinz Málaga – angelegt von derselben Kultur, die in Granada die Alhambra schuf. Die Häuser wuchsen über Jahrhunderte organisch den Hang hinauf: enge Stufengassen, kein Zimmer mit rechtem Winkel, jedes Haus im Lauf der Zeit erweitert, verkauft, umgebaut. Als wir AMARA Lounis von 2020 bis 2022 behutsam restaurierten und die alten Mauern freilegten, war unser Architekt sichtlich beeindruckt: Er erkannte darin dieselbe Bauweise wie die der Alhambra in Granada – dieselbe maurische Handschrift, die dieses Viertel vor Jahrhunderten geprägt hat. In einem Haus mit solchen Wurzeln zu schlafen, ist ein anderes Gefühl als in einem Küstenhotel. Darin liegt eine besondere Stärke Frigilianas; Nerjas eigener Reiz beginnt dagegen mit dem Leben am Meer.'
    },
    comparison: {
      eyebrow: 'Der ehrliche Vergleich',
      title: 'Zwei Urlaubsbasen, zwei Tagesrhythmen',
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
        'Ein Aufenthalt in Frigiliana verbindet Dorfmorgen und ruhige Abende mit Strandtagen in Nerja oder Maro. Von Nerja aus bleibt Frigiliana nah genug für einen unkomplizierten Besuch zwischen den Tagen am Meer. Entscheidend ist die Umgebung, in der euer Tag beginnen und in die ihr abends nach Hause kommen sollt.'
    },
    transport: {
      eyebrow: 'Dorf und Küste',
      title: 'Von Frigiliana bleibt die Küste gut erreichbar',
      beforeBusLink:
        'Die Fahrt von Frigiliana nach Nerja dauert rund zehn Minuten, sodass sich ein Strandtag unkompliziert einplanen lässt. Vor Nerja gibt es mehrere große Parkplätze; im Zentrum wird es enger, aber es ist machbar. Wer ohne Auto reist, kommt mit dem ',
      busLinkLabel: 'öffentlichen Bus',
      afterBusLink:
        ' (Grupo Fajardo) hin und zurück: Montag bis Samstag fahren tagsüber rund ein Dutzend Verbindungen je Richtung. Von Frigiliana hinunter nach Nerja fährt der letzte reguläre Bus werktags gegen 21:00 Uhr (im Hochsommer bis 22:00 Uhr), zurück von Nerja hinauf gegen 20:30 Uhr (im Juli und August zusätzlich um 21:30 Uhr). Sonntags und feiertags fahren weniger Busse. Für späte Abende ist ein Auto also bequemer – aber tagsüber seid ihr in zehn Minuten am Strand und ebenso schnell wieder in eurer Ruhe.'
    },
    booking: {
      eyebrow: 'Buchungs-Gabelung',
      title: 'Wählt den Ort, an dem ihr euch im Urlaub zu Hause fühlen wollt',
      frigiliana: {
        title: 'Frigiliana für Dorfmorgen und ruhige Abende',
        text:
          'Dann sind unsere Boutique-Apartments in Frigiliana für Paare die richtige Wahl – mit dem Meer zehn Minuten entfernt.',
        collectionCta: 'Apartments ansehen'
      },
      nerja: {
        title: 'Nerja für Urlaubstage mit dem Strand direkt vor der Tür',
        text:
          'AMARA Playa passt zu euch, wenn der Strand sofort zu Fuß erreichbar sein und das Küstenleben spontan beginnen soll.',
        cta: 'AMARA Playa ansehen'
      }
    }
  },
  es: {
    hero: {
      eyebrow: 'Guía para decidir',
      title: 'Frigiliana o Nerja: ¿dónde alojarse?',
      lead:
        'Una comparativa práctica de anfitriones con alojamientos en ambos lugares.',
      intro:
        'Frigiliana y Nerja están a unos diez minutos en coche y se combinan con mucha facilidad en unas mismas vacaciones. La pregunta importante no es cuál queréis visitar, sino dónde queréis despertar y adónde queréis volver al anochecer. Frigiliana encaja cuando el pueblo histórico debe ser vuestro hogar y Nerja, Maro y las playas completan los días junto al mar. Nerja funciona mejor como base si lo prioritario es ir andando a la playa y decidir sobre la marcha entre el mar, los restaurantes y la vida de la costa.',
      imageAlt:
        'Casas blancas y callejuelas de Frigiliana con vistas hacia la costa'
    },
    coreQuestion: {
      eyebrow: 'La pregunta clave',
      title: '¿Dónde queréis despertar y volver al anochecer?',
      text:
        'En Frigiliana, el día empieza y termina dentro del pueblo histórico: callejuelas tranquilas por la mañana, restaurantes a pie por la noche y la costa como plan fácil durante el día. Nerja sitúa las playas, la vida junto al mar y una oferta costera más amplia nada más salir de casa. La distancia es corta; la diferencia real está en el entorno que marca vuestro ritmo diario.'
    },
    decisionFactors: {
      eyebrow: 'Factores para decidir',
      title: 'Calma, playa y clima: ¿qué os importa más?',
      text:
        'Esta comparativa muestra el ritmo diario de cada lugar. Como Frigiliana y Nerja están a unos diez minutos en coche, el pueblo y la costa pueden formar parte de las mismas vacaciones.'
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
        'El casco antiguo de Frigiliana está considerado uno de los barrios morisco-mudéjares mejor conservados de la provincia de Málaga, nacido de la misma cultura que levantó la Alhambra de Granada. Durante siglos, las casas crecieron de forma orgánica por la ladera: callejuelas escalonadas, habitaciones sin ángulos rectos y viviendas ampliadas, vendidas y transformadas con el tiempo. Cuando restauramos cuidadosamente AMARA Lounis de 2020 a 2022 y dejamos al descubierto los muros antiguos, nuestro arquitecto quedó visiblemente impresionado: reconoció el mismo método constructivo de la Alhambra, la misma huella morisca que dio forma a este barrio hace siglos. Dormir en una casa con estas raíces se siente de otra manera que hacerlo en un hotel de costa. Es una de las grandes cualidades de Frigiliana; el atractivo propio de Nerja comienza, en cambio, con la vida junto al mar.'
    },
    comparison: {
      eyebrow: 'La comparativa sincera',
      title: 'Dos bases, dos ritmos de vacaciones',
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
        'Alojarse en Frigiliana permite combinar mañanas y noches de pueblo con días de playa en Nerja o Maro. Desde Nerja, Frigiliana sigue lo bastante cerca para visitarla cómodamente entre jornadas junto al mar. La elección está en el entorno donde queréis empezar el día y al que queréis volver por la noche.'
    },
    transport: {
      eyebrow: 'Pueblo y costa',
      title: 'Desde Frigiliana, la costa sigue estando muy cerca',
      beforeBusLink:
        'Nerja está a unos diez minutos en coche desde Frigiliana, por lo que resulta fácil incluir un día de playa. Antes de entrar en el centro hay varios aparcamientos grandes; dentro las calles son más estrechas, pero se puede gestionar. Si viajáis sin coche, podéis utilizar el ',
      busLinkLabel: 'autobús público',
      afterBusLink:
        ' de Grupo Fajardo para ir y volver. De lunes a sábado hay alrededor de una docena de servicios diurnos en cada sentido. Entre semana, el último autobús regular de Frigiliana a Nerja sale hacia las 21:00 —hasta las 22:00 en pleno verano— y el último de regreso sube aproximadamente a las 20:30, con un servicio adicional a las 21:30 en julio y agosto. Los domingos y festivos hay menos conexiones. Para volver tarde, el coche es más cómodo; durante el día, en cambio, podéis estar en la playa en diez minutos y regresar con la misma rapidez a vuestro refugio tranquilo.'
    },
    booking: {
      eyebrow: 'El momento de elegir',
      title: 'Elegid el lugar al que queréis volver cada día',
      frigiliana: {
        title: 'Frigiliana para mañanas de pueblo y noches tranquilas',
        text:
          'Entonces nuestros apartamentos boutique para parejas en Frigiliana son la opción adecuada, con el mar a solo diez minutos.',
        collectionCta: 'Ver apartamentos'
      },
      nerja: {
        title: 'Nerja para unas vacaciones con la playa en primer plano',
        text:
          'AMARA Playa encaja si lo más importante es llegar andando a la playa y disfrutar de la costa con total espontaneidad.',
        cta: 'Ver AMARA Playa'
      }
    }
  },
  nl: {
    hero: {
      eyebrow: 'Keuzehulp',
      title: 'Frigiliana of Nerja: waar verblijven?',
      lead:
        'Een praktische vergelijking van hosts met verblijven in beide plaatsen.',
      intro:
        'Frigiliana en Nerja liggen maar ongeveer tien minuten rijden van elkaar en laten zich gemakkelijk combineren tijdens één vakantie. De belangrijkste vraag is daarom niet welke plaats jullie willen bezoeken, maar waar jullie willen wakker worden en ’s avonds willen thuiskomen. Frigiliana past wanneer het historische dorp als thuisbasis moet voelen en Nerja, Maro en de stranden de dagen aan zee invullen. Nerja werkt beter als uitvalsbasis wanneer direct naar het strand lopen en spontaan kiezen tussen zee, restaurants en kustleven vooropstaan.',
      imageAlt:
        'Witte huizen en steegjes in Frigiliana met uitzicht richting de kust'
    },
    coreQuestion: {
      eyebrow: 'De echte vraag',
      title: 'Waar willen jullie wakker worden en thuiskomen?',
      text:
        'In Frigiliana begint en eindigt de dag midden in het historische dorp: rustige steegjes in de ochtend, restaurants op loopafstand in de avond en de kust als gemakkelijke optie overdag. In Nerja liggen stranden, het leven aan zee en een ruimer aanbod aan de kust direct buiten de deur. De afstand is klein; het echte verschil is de omgeving die jullie dagritme bepaalt.'
    },
    decisionFactors: {
      eyebrow: 'Beslissende factoren',
      title: 'Rust, strand en klimaat: wat vinden jullie het belangrijkst?',
      text:
        'Dit overzicht vergelijkt het dagelijkse ritme van beide plaatsen. Omdat Frigiliana en Nerja maar ongeveer tien minuten rijden van elkaar liggen, kunnen het dorpsleven en de kust deel blijven van dezelfde vakantie.'
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
        'De oude stad van Frigiliana geldt als een van de best bewaarde Moors-Mudéjarwijken van de provincie Málaga, gevormd door dezelfde cultuur die het Alhambra in Granada bouwde. De huizen groeiden eeuwenlang organisch tegen de helling op: smalle steegjes met trappen, kamers zonder rechte hoek en woningen die door de jaren heen werden uitgebreid, verkocht en verbouwd. Toen we AMARA Lounis van 2020 tot 2022 zorgvuldig restaureerden en de oude muren blootlegden, was onze architect zichtbaar onder de indruk. Hij herkende dezelfde bouwmethode als bij het Alhambra, dezelfde Moorse signatuur die deze wijk eeuwen geleden vormde. Slapen in een huis met zulke wortels voelt anders dan in een hotel aan de kust. Dat is een van Frigiliana’s onderscheidende kwaliteiten; de eigen aantrekkingskracht van Nerja begint juist bij het leven aan zee.'
    },
    comparison: {
      eyebrow: 'De eerlijke vergelijking',
      title: 'Twee uitvalsbases, twee vakantieritmes',
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
        'Een verblijf in Frigiliana combineert dorpsmorgens en rustige avonden met stranddagen in Nerja of Maro. Vanuit Nerja blijft Frigiliana dichtbij genoeg voor een ontspannen bezoek tussen de dagen aan zee. De keuze draait om de omgeving waarin jullie de dag willen beginnen en ’s avonds willen thuiskomen.'
    },
    transport: {
      eyebrow: 'Dorp en kust',
      title: 'Vanuit Frigiliana blijft de kust gemakkelijk bereikbaar',
      beforeBusLink:
        'De rit van Frigiliana naar Nerja duurt ongeveer tien minuten, waardoor een stranddag gemakkelijk in te plannen is. Voor de toegang tot Nerja liggen meerdere grote parkeerterreinen; in het centrum wordt het krapper, maar het is goed te doen. Reizen jullie zonder auto, dan kunnen jullie de ',
      busLinkLabel: 'openbare bus',
      afterBusLink:
        ' van Grupo Fajardo nemen. Van maandag tot en met zaterdag rijden overdag ongeveer twaalf bussen per richting. Op werkdagen vertrekt de laatste reguliere bus van Frigiliana naar Nerja rond 21.00 uur —in het hoogseizoen tot 22.00 uur— en vanuit Nerja omhoog rond 20.30 uur, met in juli en augustus nog een extra rit om 21.30 uur. Op zon- en feestdagen rijden minder bussen. Voor late avonden is een auto dus handiger, maar overdag staan jullie in tien minuten op het strand en zijn jullie net zo snel terug in de rust.'
    },
    booking: {
      eyebrow: 'Het keuzemoment',
      title: 'Kies de plek waar jullie elke dag willen thuiskomen',
      frigiliana: {
        title: 'Frigiliana voor dorpsmorgens en rustige avonden',
        text:
          'Dan zijn onze boutique-appartementen voor stellen in Frigiliana de juiste keuze, met de zee op slechts tien minuten afstand.',
        collectionCta: 'Bekijk de appartementen'
      },
      nerja: {
        title: 'Nerja voor vakantiedagen met het strand voorop',
        text:
          'AMARA Playa past wanneer direct naar het strand lopen en spontaan genieten van het kustleven het belangrijkst zijn.',
        cta: 'Bekijk AMARA Playa'
      }
    }
  },
  sv: {
    hero: {
      eyebrow: 'Vägledning inför valet',
      title: 'Frigiliana eller Nerja: var ska man bo?',
      lead:
        'En praktisk jämförelse från värdar med boenden på båda platserna.',
      intro:
        'Frigiliana och Nerja ligger bara omkring tio minuters bilresa från varandra och är enkla att kombinera under samma semester. Den viktigaste frågan är därför inte vilken ort ni vill besöka, utan var ni vill vakna och komma hem på kvällen. Frigiliana passar när den historiska byn ska vara ert hem och Nerja, Maro och stränderna fyller dagarna vid havet. Nerja fungerar bättre som bas när det viktigaste är att kunna promenera direkt till stranden och spontant välja mellan havet, restaurangerna och kustlivet.',
      imageAlt:
        'Vita hus och gränder i Frigiliana med utsikt mot kusten'
    },
    coreQuestion: {
      eyebrow: 'Den verkliga frågan',
      title: 'Var vill ni vakna och komma hem på kvällen?',
      text:
        'I Frigiliana börjar och slutar dagen mitt i den historiska byn: lugna gränder på morgonen, restauranger på gångavstånd på kvällen och kusten som ett enkelt alternativ under dagen. I Nerja finns stränderna, livet vid havet och ett bredare kustutbud direkt utanför dörren. Avståndet är kort; den verkliga skillnaden är miljön som formar er dagsrytm.'
    },
    decisionFactors: {
      eyebrow: 'Faktorer som avgör',
      title: 'Lugn, strand och klimat: vad är viktigast för er?',
      text:
        'Översikten jämför vardagsrytmen på de båda orterna. Eftersom Frigiliana och Nerja bara ligger omkring tio minuters bilresa från varandra kan bylivet och kusten vara delar av samma semester.'
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
        'Frigilianas gamla stad räknas som ett av de bäst bevarade morisk-mudéjarpräglade kvarteren i provinsen Málaga, skapat av samma kultur som byggde Alhambra i Granada. Under århundraden växte husen organiskt uppför sluttningen: smala gränder med trappor, rum utan räta vinklar och bostäder som byggdes ut, såldes och förändrades över tid. När vi varsamt restaurerade AMARA Lounis 2020–2022 och blottlade de gamla murarna blev vår arkitekt tydligt imponerad. Han kände igen samma byggmetod som i Alhambra, samma moriska signatur som formade kvarteret för flera hundra år sedan. Att sova i ett hus med sådana rötter känns annorlunda än på ett kusthotell. Det är en av Frigilianas särskilda styrkor, medan Nerjas egen attraktionskraft börjar med livet vid havet.'
    },
    comparison: {
      eyebrow: 'Den ärliga jämförelsen',
      title: 'Två semesterbaser, två dagsrytmer',
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
        'En vistelse i Frigiliana kombinerar bymorgnar och lugna kvällar med stranddagar i Nerja eller Maro. Från Nerja ligger Frigiliana fortfarande nära nog för ett enkelt besök mellan dagarna vid havet. Valet handlar om miljön där ni vill börja dagen och komma hem på kvällen.'
    },
    transport: {
      eyebrow: 'By och kust',
      title: 'Från Frigiliana är kusten fortfarande lätt att nå',
      beforeBusLink:
        'Bilresan från Frigiliana till Nerja tar ungefär tio minuter, så en stranddag är enkel att planera in. Innan ni kör in i Nerja finns flera stora parkeringar; i centrum blir det trängre, men det går att hantera. Reser ni utan bil kan ni använda den ',
      busLinkLabel: 'allmänna bussen',
      afterBusLink:
        ' från Grupo Fajardo för att ta er fram och tillbaka. Från måndag till lördag går ungefär ett dussin avgångar i vardera riktningen under dagen. På vardagar går den sista ordinarie bussen från Frigiliana ner till Nerja omkring klockan 21.00 —under högsommaren fram till 22.00— och tillbaka upp från Nerja omkring 20.30, med en extra avgång 21.30 i juli och augusti. På söndagar och helgdagar går färre bussar. För sena kvällar är bil därför smidigare, men dagtid når ni stranden på tio minuter och är lika snabbt tillbaka i lugnet.'
    },
    booking: {
      eyebrow: 'Dags att välja',
      title: 'Välj platsen som ska kännas som hemma',
      frigiliana: {
        title: 'Frigiliana för bymorgnar och lugna kvällar',
        text:
          'Då är våra boutiquelägenheter för par i Frigiliana rätt val, med havet bara tio minuter bort.',
        collectionCta: 'Se lägenheterna'
      },
      nerja: {
        title: 'Nerja för semesterdagar med stranden i centrum',
        text:
          'AMARA Playa passar när det viktigaste är att kunna promenera direkt till stranden och spontant ta del av kustlivet.',
        cta: 'Se AMARA Playa'
      }
    }
  }
};
