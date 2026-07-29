import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaOderNerjaPageCopy {
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

const untranslatedSeo = {
  title: 'AMARA',
  description: '',
  robots: 'noindex, nofollow',
  canonical: 'auto' as const
};

export const frigilianaOderNerjaSeo: AmaraAuthoringSeo = {
  version: '2026-07-28-frigiliana-oder-nerja-v1',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  languages: {
    en: untranslatedSeo, // TODO: Translate before enabling an English route.
    de: {
      title: 'Frigiliana oder Nerja: Wo übernachten? | AMARA',
      description:
        'Frigiliana oder Nerja – welcher Ort passt besser zu Paaren? Ehrlicher Gastgebervergleich zu Ruhe, Meer, Klima, Anreise und Ausflügen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: untranslatedSeo, // TODO: Translate before enabling a Spanish route.
    nl: untranslatedSeo, // TODO: Translate before enabling a Dutch route.
    sv: untranslatedSeo // TODO: Translate before enabling a Swedish route.
  }
};

/**
 * German is the semantic source for this page.
 * Null entries are deliberate publication guards: add a complete native
 * translation before enabling another locale in getStaticPaths().
 */
export const frigilianaOderNerjaContent: Record<
  AmaraLanguage,
  FrigilianaOderNerjaPageCopy | null
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
      eyebrow: '800 Years / Alhambra',
      title: 'Sleeping in one of the oldest houses in the village',
      text:
        "Frigiliana's old town is considered one of the best-preserved Moorish-Mudéjar quarters in the province of Málaga – created by the same culture that built the Alhambra in Granada. The houses grew organically up the slope over centuries: narrow stepped alleys, no room with a right angle, each house expanded, sold, and rebuilt over time. When we carefully restored AMARA Lounis in 2022 and uncovered the old walls, our architect was visibly impressed: he recognised the same construction method as the Alhambra in Granada – the same Moorish signature that shaped this quarter centuries ago. Sleeping in a house with such roots is a different feeling than in any coastal hotel. Nerja, for all its liveliness, cannot offer that."
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
        ' (Grupo Fajardo) to get there and back: from Monday to Saturday, there are about a dozen connections in each direction during the day. The last regular bus from Frigiliana down to Nerja on weekdays is around 9:00 PM (until 10:00 PM in high summer), and back up from Nerja around 8:30 PM (with an additional service at 9:30 PM in July and August). Fewer buses run on Sundays and public holidays. So, a car is more convenient for late evenings – but during the day, you can be at the beach in ten minutes and back in your quiet retreat just as quickly.'
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
      eyebrow: '800 Jahre / Alhambra',
      title: 'Schlafen in einem der ältesten Häuser des Dorfes',
      text:
        'Frigilianas Altstadt gilt als eines der am besten erhaltenen maurisch-mudéjar geprägten Altstadtviertel der Provinz Málaga – angelegt von derselben Kultur, die in Granada die Alhambra schuf. Die Häuser wuchsen über Jahrhunderte organisch den Hang hinauf: enge Stufengassen, kein Zimmer mit rechtem Winkel, jedes Haus im Lauf der Zeit erweitert, verkauft, umgebaut. Als wir AMARA Lounis 2022 behutsam restaurierten und die alten Mauern freilegten, war unser Architekt sichtlich beeindruckt: Er erkannte darin dieselbe Bauweise wie die der Alhambra in Granada – dieselbe maurische Handschrift, die dieses Viertel vor Jahrhunderten geprägt hat. In einem Haus mit solchen Wurzeln zu schlafen, ist ein anderes Gefühl als in jedem Küstenhotel. Das kann Nerja bei aller Lebendigkeit nicht bieten.'
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
  es: null, // TODO: Translate from the approved German source.
  nl: null, // TODO: Translate from the approved German source.
  sv: null // TODO: Translate from the approved German source.
};
