import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

export interface FrigilianaWellnessPageCopy {
  cardLabels: {
    bestFor: string;
    website: string;
    whatsapp: string;
  };
  footerHighlights: {
    wellness: string;
    restaurants: string;
    hiking: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  sectionNav: {
    choose: string;
    providers: string;
    compare: string;
    planning: string;
  };
  overview: {
    title: string;
    intro: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  providers: {
    title: string;
    intro: string;
    /** Recommendation record ids; the provider cards are built from the place copy (DR-GUEST-006). */
    providerIds: readonly string[];
  };
  comparison: {
    title: string;
    intro: string;
    labels: {
      mood: string;
      logistics: string;
      ideal: string;
    };
    items: {
      name: string;
      mood: string;
      logistics: string;
      ideal: string;
    }[];
    tip: string;
  };
  planning: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_food_authority'
        | 'frigiliana_hiking_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    nextCta: string;
  };
}

export const frigilianaWellnessSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-wellness-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.wellness'),
  languages: {
    en: {
      title: 'Wellness & Spa in Frigiliana',
      description:
        'Massage and spa near Frigiliana: Frigiliana Wellness comes to your house, Lidia welcomes you for her Californian massage in the countryside. Two addresses, booked directly.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wellness & Spa bei Frigiliana',
      description:
        'Massage und Spa bei Frigiliana: Frigiliana Wellness kommt zu euch ins Haus, Lidia empfängt euch für ihre kalifornische Massage auf dem Land. Zwei Adressen, direkt zu buchen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Bienestar y spa en Frigiliana',
      description:
        'Masaje y spa cerca de Frigiliana: Frigiliana Wellness viene a vuestra casa, Lidia os recibe para su masaje californiano en el campo. Dos direcciones, reserva directa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wellness bij Frigiliana: spa en massage',
      description:
        'Massage en spa bij Frigiliana: Frigiliana Wellness komt naar jullie huis, Lidia ontvangt jullie voor haar Californische massage op het land. Twee adressen, direct te boeken.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Wellness & spa i Frigiliana',
      description:
        'Massage och spa nära Frigiliana: Frigiliana Wellness kommer hem till er, Lidia tar emot er för sin kaliforniska massage på landet. Två adresser, bokas direkt.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve the provider distinctions, booking context and
 * non-medical qualification in natural guest-facing language.
 */
export const frigilianaWellnessContent: Record<
  AmaraLanguage,
  FrigilianaWellnessPageCopy
> = {
  en: {
    cardLabels: {
      bestFor: 'Suits',
      website: 'Open website',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & slow days',
      restaurants: 'Restaurants & local food',
      hiking: 'Hiking & nature'
    },
    hero: {
      kicker: 'Massage & spa near Frigiliana',
      title: 'An afternoon for your back',
      subtitle: 'Two addresses near Frigiliana',
      paragraphs: [
        'After the village stairs or a day on the water, a massage does you good. Near Frigiliana there are two addresses for it.',
        'Frigiliana Wellness brings the table to your house, with massages and beauty treatments for one or more people. Lidia welcomes you for her Californian massage in the countryside near Frigiliana; you drive to her.'
      ],
    },
    sectionNav: {
      choose: 'At home or out',
      providers: 'The two addresses',
      compare: 'The difference',
      planning: 'Booking'
    },
    overview: {
      title: 'Stay in or drive out',
      intro:
        'The difference is simple: Frigiliana Wellness comes to you, to Lidia you drive.',
      reviewed: 'As of July 2026',
      items: [
        {
          title: 'At the house',
          text:
            'Frigiliana Wellness sets up the table at your place. Terrace before, terrace after, no driving.'
        },
        {
          title: 'In the campo',
          text:
            'To Lidia you drive out into the countryside. The appointment lasts as long as the massage, the afternoon a little longer.'
        },
        {
          title: 'More than massage',
          text:
            'Beauty treatments and massages for two are what Frigiliana Wellness offers.'
        },
        {
          title: 'One massage, in peace',
          text:
            'Lidia does Californian massage, alone with you and without a clock.'
        }
      ]
    },
    providers: {
      title: 'One comes to you, one welcomes you',
      intro:
        'Both work independently of us; you book with them directly.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'The difference',
      intro:
        'Two questions are enough: where do you want to lie, and what should it be.',
      labels: {
        mood: 'What',
        logistics: 'Where',
        ideal: 'Right if'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Massages and beauty treatments, also for several guests.',
          logistics:
            'At your place, in the villa or apartment.',
          ideal:
            'you want to stay in or want more than one massage.'
        },
        {
          name: 'Lidia',
          mood: 'Californian massage, personal and in peace.',
          logistics:
            'In the countryside near Frigiliana; you drive there.',
          ideal:
            'you want exactly this massage and the drive out may be part of it.'
        }
      ],
      tip:
        'If in doubt: whoever wants to lie on their own terrace after the appointment books Frigiliana Wellness.'
    },
    planning: {
      title: 'Book directly',
      intro:
        'Availability, treatments and prices you get directly from the two of them, by website or WhatsApp.',
      items: [
        {
          title: 'Ask',
          text:
            'Date, time, the treatment you want, for how many people.'
        },
        {
          title: 'Give the address',
          text:
            'Frigiliana Wellness needs your accommodation; Lidia sends you the directions to her.'
        },
        {
          title: 'Keep the day free',
          text:
            'After the massage, not straight into the car or the restaurant. An hour on the terrace is part of it.'
        },
        {
          title: 'Just ask',
          text:
            'If you are unsure what fits: both advise you beforehand, and so do we.'
        }
      ],
      note:
        'Both work independently of AMARA and offer wellness, not medical treatment.'
    },
    combine: {
      title: 'Before and after',
      intro:
        'A slow day suits it best.',
      items: [
        {
          title: 'Eat out, without a clock',
          text:
            'A terrace in the village in the evening, with enough distance from the massage.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        },
        {
          title: 'A short walk instead of a tour',
          text:
            'Once through the village or a little way into the campo. The mountain trails wait for another day.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        }
      ]
    },
    closing: {
      title: 'Then out onto your own terrace',
      lead:
        'Lounis, Zaid and Maha each have a private terrace. Once the table is packed away again, the rest of the day stays quiet.',
      nextCta: 'View amenities'
    }
  },
  de: {
    cardLabels: {
      bestFor: 'Passt für',
      website: 'Website öffnen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & ruhige Tage',
      restaurants: 'Restaurants & regionale Küche',
      hiking: 'Wandern & Natur'
    },
    hero: {
      kicker: 'Massage & Spa bei Frigiliana',
      title: 'Ein Nachmittag für den Rücken',
      subtitle: 'Zwei Adressen bei Frigiliana',
      paragraphs: [
        'Nach den Treppen des Dorfes oder einem Tag auf dem Wasser tut eine Massage gut. Bei Frigiliana gibt es dafür zwei Adressen.',
        'Frigiliana Wellness kommt mit der Liege zu euch ins Haus, mit Massagen und Beauty-Anwendungen für eine oder mehrere Personen. Lidia empfängt euch für ihre kalifornische Massage auf dem Land bei Frigiliana; zu ihr fahrt ihr hin.'
      ],
    },
    sectionNav: {
      choose: 'Zu Hause oder draußen',
      providers: 'Die beiden Adressen',
      compare: 'Der Unterschied',
      planning: 'Buchen'
    },
    overview: {
      title: 'Bleiben oder hinausfahren',
      intro:
        'Der Unterschied ist einfach: Frigiliana Wellness kommt zu euch, zu Lidia fahrt ihr.',
      reviewed: 'Stand Juli 2026',
      items: [
        {
          title: 'Im Haus',
          text:
            'Frigiliana Wellness baut die Liege bei euch auf. Vorher Terrasse, nachher Terrasse, keine Fahrt.'
        },
        {
          title: 'Im Campo',
          text:
            'Zu Lidia fahrt ihr hinaus aufs Land. Der Termin dauert so lange wie die Massage, der Nachmittag etwas länger.'
        },
        {
          title: 'Mehr als Massage',
          text:
            'Beauty-Anwendungen und Massagen für zwei gibt es bei Frigiliana Wellness.'
        },
        {
          title: 'Eine Massage, in Ruhe',
          text:
            'Lidia macht kalifornische Massage, allein mit euch und ohne Uhr.'
        }
      ]
    },
    providers: {
      title: 'Eine kommt zu euch, eine empfängt euch',
      intro:
        'Beide arbeiten unabhängig von uns; ihr bucht direkt bei ihnen.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Der Unterschied',
      intro:
        'Zwei Fragen genügen: Wo wollt ihr liegen, und was soll es sein.',
      labels: {
        mood: 'Was',
        logistics: 'Wo',
        ideal: 'Passt, wenn'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Massagen und Beauty-Anwendungen, auch für mehrere Gäste.',
          logistics:
            'Bei euch im Haus, in Villa oder Apartment.',
          ideal:
            'ihr im Haus bleiben oder mehr als eine Massage möchtet.'
        },
        {
          name: 'Lidia',
          mood: 'Kalifornische Massage, persönlich und in Ruhe.',
          logistics:
            'Auf dem Land bei Frigiliana; ihr fahrt hin.',
          ideal:
            'ihr genau diese Massage möchtet und die Fahrt hinaus dazugehören darf.'
        }
      ],
      tip:
        'Im Zweifel: Wer nach dem Termin auf der eigenen Terrasse liegen will, bucht Frigiliana Wellness.'
    },
    planning: {
      title: 'Direkt buchen',
      intro:
        'Verfügbarkeit, Anwendungen und Preise bekommt ihr direkt bei den beiden, per Website oder WhatsApp.',
      items: [
        {
          title: 'Anfragen',
          text:
            'Datum, Uhrzeit, gewünschte Anwendung, für wie viele Personen.'
        },
        {
          title: 'Adresse nennen',
          text:
            'Frigiliana Wellness braucht eure Unterkunft; Lidia schickt euch die Anfahrt zu ihr.'
        },
        {
          title: 'Den Tag freihalten',
          text:
            'Nach der Massage nicht gleich ins Auto oder ins Restaurant. Eine Stunde Terrasse gehört dazu.'
        },
        {
          title: 'Einfach fragen',
          text:
            'Wenn ihr unsicher seid, was passt: Beide beraten euch vorab, und wir auch.'
        }
      ],
      note:
        'Beide arbeiten unabhängig von AMARA und bieten Wellness an, keine medizinische Behandlung.'
    },
    combine: {
      title: 'Davor und danach',
      intro:
        'Ein langsamer Tag passt am besten dazu.',
      items: [
        {
          title: 'Essen gehen, ohne Uhr',
          text:
            'Eine Terrasse im Dorf am Abend, mit genug Abstand zur Massage.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurant-Guide'
        },
        {
          title: 'Ein kurzer Weg statt einer Tour',
          text:
            'Einmal durchs Dorf oder ein Stück ins Campo. Die Bergwege warten auf einen anderen Tag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        }
      ]
    },
    closing: {
      title: 'Danach auf die eigene Terrasse',
      lead:
        'Lounis, Zaid und Maha haben jede eine private Terrasse. Wenn die Liege wieder eingepackt ist, bleibt der Rest des Tages still.',
      nextCta: 'Ausstattung ansehen'
    }
  },
  es: {
    cardLabels: {
      bestFor: 'Para',
      website: 'Abrir la web',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Bienestar y días tranquilos',
      restaurants: 'Restaurantes y cocina local',
      hiking: 'Senderismo y naturaleza'
    },
    hero: {
      kicker: 'Masaje y spa cerca de Frigiliana',
      title: 'Una tarde para la espalda',
      subtitle: 'Dos direcciones cerca de Frigiliana',
      paragraphs: [
        'Después de las escaleras del pueblo o de un día en el agua, un masaje sienta bien. Cerca de Frigiliana hay dos direcciones para ello.',
        'Frigiliana Wellness viene a vuestra casa con la camilla, con masajes y tratamientos de belleza para una o varias personas. Lidia os recibe para su masaje californiano en el campo cerca de Frigiliana; a ella vais vosotros.'
      ],
    },
    sectionNav: {
      choose: 'En casa o fuera',
      providers: 'Las dos direcciones',
      compare: 'La diferencia',
      planning: 'Reservar'
    },
    overview: {
      title: 'Quedarse o salir',
      intro:
        'La diferencia es sencilla: Frigiliana Wellness viene a vosotros, a Lidia vais vosotros.',
      reviewed: 'Actualizado en julio de 2026',
      items: [
        {
          title: 'En casa',
          text:
            'Frigiliana Wellness monta la camilla en vuestra casa. Terraza antes, terraza después, sin coche.'
        },
        {
          title: 'En el campo',
          text:
            'A Lidia vais al campo. La cita dura lo que el masaje, la tarde un poco más.'
        },
        {
          title: 'Más que un masaje',
          text:
            'Tratamientos de belleza y masajes para dos los tenéis con Frigiliana Wellness.'
        },
        {
          title: 'Un masaje, con calma',
          text:
            'Lidia hace masaje californiano, a solas con vosotros y sin reloj.'
        }
      ]
    },
    providers: {
      title: 'Una viene a vosotros, otra os recibe',
      intro:
        'Ambas trabajan de forma independiente de nosotros; reserváis directamente con ellas.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'La diferencia',
      intro:
        'Bastan dos preguntas: dónde queréis tumbaros y qué queréis.',
      labels: {
        mood: 'Qué',
        logistics: 'Dónde',
        ideal: 'Ideal si'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Masajes y tratamientos de belleza, también para varias personas.',
          logistics:
            'En vuestra casa, en la villa o el apartamento.',
          ideal:
            'queréis quedaros en casa o queréis más que un masaje.'
        },
        {
          name: 'Lidia',
          mood: 'Masaje californiano, personal y con calma.',
          logistics:
            'En el campo cerca de Frigiliana; vais vosotros.',
          ideal:
            'queréis exactamente este masaje y el trayecto puede formar parte de ello.'
        }
      ],
      tip:
        'En caso de duda: quien quiera tumbarse en su propia terraza después de la cita, reserva Frigiliana Wellness.'
    },
    planning: {
      title: 'Reservar directamente',
      intro:
        'Disponibilidad, tratamientos y precios los tenéis directamente con ellas, por web o WhatsApp.',
      items: [
        {
          title: 'Preguntar',
          text:
            'Fecha, hora, tratamiento deseado, para cuántas personas.'
        },
        {
          title: 'Indicar la dirección',
          text:
            'Frigiliana Wellness necesita vuestro alojamiento; Lidia os envía cómo llegar hasta ella.'
        },
        {
          title: 'Dejar el día libre',
          text:
            'Después del masaje, nada de coche ni restaurante enseguida. Una hora de terraza forma parte.'
        },
        {
          title: 'Simplemente preguntad',
          text:
            'Si no sabéis qué encaja: las dos os asesoran antes, y nosotros también.'
        }
      ],
      note:
        'Ambas trabajan de forma independiente de AMARA y ofrecen bienestar, no tratamiento médico.'
    },
    combine: {
      title: 'Antes y después',
      intro:
        'Un día tranquilo es lo que mejor le va.',
      items: [
        {
          title: 'Salir a comer, sin reloj',
          text:
            'Una terraza en el pueblo por la noche, con suficiente margen después del masaje.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        },
        {
          title: 'Un paseo corto en vez de una ruta',
          text:
            'Una vuelta por el pueblo o un trecho por el campo. Los senderos de montaña esperan a otro día.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        }
      ]
    },
    closing: {
      title: 'Después, a vuestra propia terraza',
      lead:
        'Lounis, Zaid y Maha tienen cada uno una terraza privada. Cuando la camilla vuelve a estar guardada, el resto del día se queda en calma.',
      nextCta: 'Ver el equipamiento'
    }
  },
  nl: {
    cardLabels: {
      bestFor: 'Past bij',
      website: 'Website openen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & rustige dagen',
      restaurants: 'Restaurants & lokale keuken',
      hiking: 'Wandelen & natuur'
    },
    hero: {
      kicker: 'Massage & spa bij Frigiliana',
      title: 'Een middag voor de rug',
      subtitle: 'Twee adressen bij Frigiliana',
      paragraphs: [
        'Na de trappen van het dorp of een dag op het water doet een massage goed. Bij Frigiliana zijn daar twee adressen voor.',
        'Frigiliana Wellness komt met de behandeltafel naar jullie huis, met massages en beautybehandelingen voor een of meer personen. Lidia ontvangt jullie voor haar Californische massage op het land bij Frigiliana; naar haar rijden jullie toe.'
      ],
    },
    sectionNav: {
      choose: 'Thuis of buiten',
      providers: 'De twee adressen',
      compare: 'Het verschil',
      planning: 'Boeken'
    },
    overview: {
      title: 'Blijven of eropuit',
      intro:
        'Het verschil is simpel: Frigiliana Wellness komt naar jullie, naar Lidia rijden jullie.',
      reviewed: 'Stand juli 2026',
      items: [
        {
          title: 'In huis',
          text:
            'Frigiliana Wellness zet de tafel bij jullie op. Terras ervoor, terras erna, geen rit.'
        },
        {
          title: 'In de campo',
          text:
            'Naar Lidia rijden jullie het land op. De afspraak duurt zolang als de massage, de middag iets langer.'
        },
        {
          title: 'Meer dan massage',
          text:
            'Beautybehandelingen en massages voor twee vind je bij Frigiliana Wellness.'
        },
        {
          title: 'Eén massage, in rust',
          text:
            'Lidia doet Californische massage, alleen met jullie en zonder klok.'
        }
      ]
    },
    providers: {
      title: 'De ene komt naar jullie, de andere ontvangt jullie',
      intro:
        'Beide werken onafhankelijk van ons; jullie boeken rechtstreeks bij hen.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Het verschil',
      intro:
        'Twee vragen zijn genoeg: waar willen jullie liggen, en wat moet het worden.',
      labels: {
        mood: 'Wat',
        logistics: 'Waar',
        ideal: 'Past als'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Massages en beautybehandelingen, ook voor meerdere gasten.',
          logistics:
            'Bij jullie in huis, in de villa of het appartement.',
          ideal:
            'jullie thuis willen blijven of meer dan één massage willen.'
        },
        {
          name: 'Lidia',
          mood: 'Californische massage, persoonlijk en in rust.',
          logistics:
            'Op het land bij Frigiliana; jullie rijden erheen.',
          ideal:
            'jullie precies deze massage willen en de rit erbij mag horen.'
        }
      ],
      tip:
        'Bij twijfel: wie na de afspraak op het eigen terras wil liggen, boekt Frigiliana Wellness.'
    },
    planning: {
      title: 'Direct boeken',
      intro:
        'Beschikbaarheid, behandelingen en prijzen krijgen jullie rechtstreeks bij hen, via website of WhatsApp.',
      items: [
        {
          title: 'Aanvragen',
          text:
            'Datum, tijd, gewenste behandeling, voor hoeveel personen.'
        },
        {
          title: 'Adres doorgeven',
          text:
            'Frigiliana Wellness heeft jullie accommodatie nodig; Lidia stuurt jullie de route naar haar.'
        },
        {
          title: 'De dag vrijhouden',
          text:
            'Na de massage niet meteen de auto of het restaurant in. Een uur terras hoort erbij.'
        },
        {
          title: 'Vraag het gewoon',
          text:
            'Als jullie niet zeker weten wat past: beiden adviseren jullie vooraf, en wij ook.'
        }
      ],
      note:
        'Beide werken onafhankelijk van AMARA en bieden wellness, geen medische behandeling.'
    },
    combine: {
      title: 'Ervoor en erna',
      intro:
        'Een langzame dag past er het beste bij.',
      items: [
        {
          title: 'Uit eten, zonder klok',
          text:
            'Een terras in het dorp ’s avonds, met genoeg afstand tot de massage.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        },
        {
          title: 'Een korte wandeling in plaats van een tocht',
          text:
            'Eén keer door het dorp of een stukje de campo in. De bergpaden wachten op een andere dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        }
      ]
    },
    closing: {
      title: 'Daarna naar het eigen terras',
      lead:
        'Lounis, Zaid en Maha hebben elk een privéterras. Als de tafel weer is ingepakt, blijft de rest van de dag stil.',
      nextCta: 'Voorzieningen bekijken'
    }
  },
  sv: {
    cardLabels: {
      bestFor: 'Passar',
      website: 'Öppna webbplatsen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & lugna dagar',
      restaurants: 'Restauranger & lokal mat',
      hiking: 'Vandring & natur'
    },
    hero: {
      kicker: 'Massage & spa nära Frigiliana',
      title: 'En eftermiddag för ryggen',
      subtitle: 'Två adresser nära Frigiliana',
      paragraphs: [
        'Efter byns trappor eller en dag på vattnet gör en massage gott. Nära Frigiliana finns två adresser för det.',
        'Frigiliana Wellness kommer med bänken hem till er, med massage och skönhetsbehandlingar för en eller flera personer. Lidia tar emot er för sin kaliforniska massage på landet nära Frigiliana; till henne kör ni.'
      ],
    },
    sectionNav: {
      choose: 'Hemma eller ute',
      providers: 'De två adresserna',
      compare: 'Skillnaden',
      planning: 'Boka'
    },
    overview: {
      title: 'Stanna eller åka ut',
      intro:
        'Skillnaden är enkel: Frigiliana Wellness kommer till er, till Lidia kör ni.',
      reviewed: 'Uppdaterad juli 2026',
      items: [
        {
          title: 'Hemma',
          text:
            'Frigiliana Wellness ställer upp bänken hos er. Terrass före, terrass efter, ingen körning.'
        },
        {
          title: 'På landet',
          text:
            'Till Lidia kör ni ut på landet. Besöket varar lika länge som massagen, eftermiddagen lite längre.'
        },
        {
          title: 'Mer än massage',
          text:
            'Skönhetsbehandlingar och massage för två finns hos Frigiliana Wellness.'
        },
        {
          title: 'En massage, i lugn och ro',
          text:
            'Lidia ger kalifornisk massage, ensam med er och utan klocka.'
        }
      ]
    },
    providers: {
      title: 'En kommer till er, en tar emot er',
      intro:
        'Båda arbetar oberoende av oss; ni bokar direkt hos dem.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Skillnaden',
      intro:
        'Två frågor räcker: var vill ni ligga, och vad ska det vara.',
      labels: {
        mood: 'Vad',
        logistics: 'Var',
        ideal: 'Passar om'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Massage och skönhetsbehandlingar, även för flera gäster.',
          logistics:
            'Hos er, i villan eller lägenheten.',
          ideal:
            'ni vill stanna hemma eller vill ha mer än en massage.'
        },
        {
          name: 'Lidia',
          mood: 'Kalifornisk massage, personlig och i lugn och ro.',
          logistics:
            'På landet nära Frigiliana; ni kör dit.',
          ideal:
            'ni vill ha exakt den här massagen och resan ut får vara en del av det.'
        }
      ],
      tip:
        'Om ni tvekar: den som vill ligga på sin egen terrass efter behandlingen bokar Frigiliana Wellness.'
    },
    planning: {
      title: 'Boka direkt',
      intro:
        'Tillgänglighet, behandlingar och priser får ni direkt av dem, via webbplats eller WhatsApp.',
      items: [
        {
          title: 'Fråga',
          text:
            'Datum, tid, önskad behandling, för hur många personer.'
        },
        {
          title: 'Ange adressen',
          text:
            'Frigiliana Wellness behöver ert boende; Lidia skickar er vägbeskrivningen till henne.'
        },
        {
          title: 'Håll dagen fri',
          text:
            'Efter massagen inte direkt in i bilen eller till restaurangen. En timme på terrassen hör till.'
        },
        {
          title: 'Fråga bara',
          text:
            'Om ni är osäkra på vad som passar: båda ger råd i förväg, och det gör vi också.'
        }
      ],
      note:
        'Båda arbetar oberoende av AMARA och erbjuder wellness, inte medicinsk behandling.'
    },
    combine: {
      title: 'Före och efter',
      intro:
        'En långsam dag passar bäst.',
      items: [
        {
          title: 'Äta ute, utan klocka',
          text:
            'En terrass i byn på kvällen, med tillräckligt avstånd till massagen.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        },
        {
          title: 'En kort promenad i stället för en tur',
          text:
            'En gång genom byn eller en bit ut på landet. Bergslederna väntar på en annan dag.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        }
      ]
    },
    closing: {
      title: 'Sedan ut på den egna terrassen',
      lead:
        'Lounis, Zaid och Maha har var sin privat terrass. När bänken är inpackad igen förblir resten av dagen stilla.',
      nextCta: 'Se utrustningen'
    }
  }
};
