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
      title:
        'Frigiliana oder Nerja: Wo übernachten? Ehrlicher Vergleich für Paare | AMARA',
      description:
        'Frigiliana oder Nerja – wo übernachten? Ein ehrlicher Vergleich von den Gastgebern, die in beiden Orten vermieten. Ruhe vs. Meer, Klima, Anfahrt, Bus – mit Tipps für Paare.',
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
  en: null, // TODO: Translate from the approved German source.
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
