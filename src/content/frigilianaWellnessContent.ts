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
        'Compare two independent wellness providers near Frigiliana: mobile spa treatments at your accommodation or Californian massage in the countryside.',
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
        'Compara dos experiencias de bienestar cerca de Frigiliana: tratamientos a domicilio o un masaje tranquilo en plena naturaleza.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wellness bij Frigiliana: spa en massage',
      description:
        'Vergelijk twee onafhankelijke wellnessaanbieders bij Frigiliana: behandelingen in jullie verblijf of Californische massage buiten het dorp.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Wellness & spa i Frigiliana',
      description:
        'Jämför två utvalda wellnessupplevelser nära Frigiliana: behandlingar i boendet eller en stillsam massage på landsbygden.',
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
      bestFor: 'Best for',
      website: 'Open website',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & slow days',
      restaurants: 'Restaurants & local food',
      hiking: 'Hiking & nature'
    },
    hero: {
      kicker: 'Massage & spa treatments near Frigiliana',
      title: 'Wellness & spa in Frigiliana',
      subtitle: 'Two calm options near Frigiliana',
      paragraphs: [
        'If you want to set aside a few hours for a treatment, there are two quite different options near Frigiliana.',
        'Frigiliana Wellness comes to your villa or apartment and offers a broader spa and beauty menu. Lidia receives guests for Californian massage at her countryside location near Frigiliana. Both are independent providers, and you book with them directly.'
      ],
    },
    sectionNav: {
      choose: 'Choose by location',
      providers: 'The providers',
      compare: 'Compare',
      planning: 'Plan your day'
    },
    overview: {
      title: 'Would you rather stay in or travel out?',
      intro:
        'The clearest difference is practical: Frigiliana Wellness brings treatments to your accommodation; for Lidia, you travel to her countryside location.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Treatments at your accommodation',
          text:
            'Frigiliana Wellness comes to your villa or apartment, so there is no journey before or after the appointment.'
        },
        {
          title: 'Massage in the countryside',
          text:
            'For a session with Lidia, confirm her location near Frigiliana and plan the journey there and back.'
        },
        {
          title: 'Pamper & variety',
          text:
            'Choose the mobile option if you want beauty treatments or to combine more than one service.'
        },
        {
          title: 'Quiet & focused',
          text:
            'Choose the countryside option if you specifically want Californian massage in a quiet, one-to-one setting.'
        }
      ]
    },
    providers: {
      title: 'One comes to you; one welcomes you outside the village',
      intro:
        'Compare where the appointment happens, the type of treatments offered and how much of the day you want to set aside.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Compare the practical difference',
      intro:
        'Start with location and treatment type. Those two questions usually make the choice straightforward.',
      labels: {
        mood: 'Session style',
        logistics: 'Logistics',
        ideal: 'Choose it when'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Mobile spa and beauty treatments; suitable for more than one guest.',
          logistics:
            'Stay at your villa or apartment; the treatments come to you.',
          ideal:
            'You want treatments at the accommodation or a broader menu than massage alone.'
        },
        {
          name: 'Lidia',
          mood: 'Personal Californian massage in a quiet countryside setting.',
          logistics:
            'Travel to her countryside location near Frigiliana.',
          ideal:
            'You specifically want Californian massage and are happy to travel to the session.'
        }
      ],
      tip:
        'If you are unsure, decide by logistics: stay at home with Frigiliana Wellness, or go somewhere quiet for a while with Lidia.'
    },
    planning: {
      title: 'Book direct and confirm the details',
      intro:
        'Availability, treatments, prices and meeting details can change. Confirm them with the provider before you arrange the rest of the day.',
      items: [
        {
          title: 'Book directly',
          text:
            'Use the provider’s website or WhatsApp contact to ask about availability, treatment options and current prices.'
        },
        {
          title: 'Confirm the setting',
          text:
            'For a mobile treatment, share the accommodation details. For Lidia, confirm the meeting point and journey before setting off.'
        },
        {
          title: 'Choose by format',
          text:
            'Decide whether you want treatments at home for one or more guests, or a single Californian massage session in the countryside.'
        },
        {
          title: 'Leave time afterward',
          text:
            'Leave enough time before the next restaurant booking, drive or activity, especially when you need to travel back from Lidia.'
        }
      ],
      note:
        'Treatments are personal wellness experiences and are not medical or therapeutic services. Bookings are made directly with independent external providers.'
    },
    combine: {
      title: 'What to plan before and after',
      intro:
        'Keep the hours around the appointment simple. A nearby meal or an easy walk is easier to combine than a tightly timed excursion.',
      items: [
        {
          title: 'Add an unhurried meal',
          text:
            'Choose a terrace in Frigiliana or a special dinner in Nerja and leave enough time between the treatment and your reservation.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        },
        {
          title: 'Walk, but keep it gentle',
          text:
            'A short village or countryside walk can suit the same mood. Save demanding routes for another day if rest is the priority.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'See the hiking guide'
        }
      ]
    },
    closing: {
      title: 'The apartment shapes the quiet hours around your treatment',
      lead:
        'If you choose a mobile treatment at your accommodation, its layout and comfort shape the hours around it. We compare each stay’s terrace, kitchen and access; Lounis, Zaid and Maha each have a private terrace.',
      nextCta: 'Compare comfort & amenities'
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
      bestFor: 'Ideal para',
      website: 'Abrir la web',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Bienestar y días tranquilos',
      restaurants: 'Restaurantes y cocina local',
      hiking: 'Senderismo y naturaleza'
    },
    hero: {
      kicker: 'Masajes y tratamientos de spa cerca de Frigiliana',
      title: 'Bienestar y spa en Frigiliana',
      subtitle: 'Dos opciones tranquilas cerca de Frigiliana',
      paragraphs: [
        'Si queréis reservar unas horas para un tratamiento, hay dos opciones bastante distintas cerca de Frigiliana.',
        'Frigiliana Wellness se desplaza hasta vuestra villa o apartamento y ofrece una carta más amplia de spa y belleza. Lidia recibe para masaje californiano en su espacio rural cerca de Frigiliana. Ambos son proveedores independientes y se reserva directamente con ellos.'
      ],
    },
    sectionNav: {
      choose: 'Elegir por ubicación',
      providers: 'Los proveedores',
      compare: 'Comparar',
      planning: 'Planificar el día'
    },
    overview: {
      title: '¿Preferís quedaros o desplazaros?',
      intro:
        'La diferencia principal es práctica: Frigiliana Wellness lleva los tratamientos hasta vuestro alojamiento; para ver a Lidia, os desplazáis a su espacio rural.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'Bienestar en casa',
          text:
            'Frigiliana Wellness se desplaza hasta vuestra villa o apartamento, así que no necesitáis viajar antes ni después de la cita.'
        },
        {
          title: 'Masaje en el campo',
          text:
            'Para una sesión con Lidia, confirmad su ubicación cerca de Frigiliana y planificad la ida y la vuelta.'
        },
        {
          title: 'Mimos y variedad',
          text:
            'La opción a domicilio encaja si buscáis comodidad, tratamientos de belleza y una oferta más amplia sin tener que desplazaros.'
        },
        {
          title: 'Calma y atención',
          text:
            'Elegid la opción rural si buscáis específicamente masaje californiano en un entorno tranquilo y personal.'
        }
      ]
    },
    providers: {
      title: 'Una se desplaza; la otra os recibe en el campo',
      intro:
        'Comparad dónde se realiza la cita, el tipo de tratamientos y cuánto tiempo queréis reservar.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Comparad la diferencia práctica',
      intro:
        'Empezad por la ubicación y el tipo de tratamiento. Esas dos preguntas suelen resolver la elección.',
      labels: {
        mood: 'Tipo de sesión',
        logistics: 'Logística',
        ideal: 'Elegidla si'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Ligero, cómodo y, si queréis, algo más social.',
          logistics:
            'Os quedáis en la villa o el apartamento; los tratamientos llegan hasta allí.',
          ideal:
            'Buscáis bienestar fácil, sensación de día de mimos y muy poca planificación.'
        },
        {
          name: 'Lidia',
          mood: 'Masaje californiano personal en un entorno rural tranquilo.',
          logistics:
            'Os desplazáis hasta su espacio rural cerca de Frigiliana.',
          ideal:
            'Queréis específicamente masaje californiano y os parece bien desplazaros.'
        }
      ],
      tip:
        'Si dudáis, elegid según la logística: quedaros en casa con Frigiliana Wellness o salir unas horas a un lugar tranquilo con Lidia.'
    },
    planning: {
      title: 'Mantened sencillo el resto del día',
      intro:
        'Las citas, los tratamientos disponibles y las ubicaciones pueden cambiar. Confirmad directamente los detalles prácticos antes de organizar el resto de la jornada alrededor de la reserva.',
      items: [
        {
          title: 'Reservar directamente',
          text:
            'Utilizad la web o WhatsApp de cada proveedor para consultar disponibilidad, tratamientos actuales y precios.'
        },
        {
          title: 'Confirmar el lugar',
          text:
            'Para un tratamiento a domicilio, facilitad los datos del alojamiento. Con Lidia, confirmad el punto de encuentro y el trayecto.'
        },
        {
          title: 'Elegir según el formato',
          text:
            'Decidid si queréis tratamientos a domicilio para una o varias personas o una sesión individual de masaje californiano en el campo.'
        },
        {
          title: 'Dejar tiempo después',
          text:
            'Dejad tiempo antes de la siguiente comida, trayecto o actividad, sobre todo para volver desde el espacio de Lidia.'
        }
      ],
      note:
        'Los tratamientos son experiencias personales de bienestar y no servicios médicos ni terapéuticos. Las reservas se realizan directamente con proveedores externos independientes.'
    },
    combine: {
      title: 'Qué planear antes y después',
      intro:
        'Mantened sencillas las horas alrededor de la cita. Una comida cercana o un paseo fácil combinan mejor que una excursión con horarios ajustados.',
      items: [
        {
          title: 'Añadir una comida sin prisa',
          text:
            'Elegid una terraza en Frigiliana o una cena especial en Nerja y dejad margen suficiente entre el tratamiento y la reserva.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        },
        {
          title: 'Pasear, pero con calma',
          text:
            'Un paseo corto por el pueblo o el campo combina bien con el mismo ánimo. Dejad las rutas exigentes para otro día si descansar es la prioridad.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Ver la guía de senderismo'
        }
      ]
    },
    closing: {
      title: 'El apartamento marca las horas tranquilas alrededor del tratamiento',
      lead:
        'Si elegís un tratamiento móvil en vuestro alojamiento, la distribución y el confort marcan las horas anteriores y posteriores. Comparamos terrazas, cocinas y accesos; Lounis, Zaid y Maha cuentan con terraza privada.',
      nextCta: 'Comparar confort y servicios'
    }
  },
  nl: {
    cardLabels: {
      bestFor: 'Geschikt voor',
      website: 'Website openen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & rustige dagen',
      restaurants: 'Restaurants & lokale keuken',
      hiking: 'Wandelen & natuur'
    },
    hero: {
      kicker: 'Vertragen · Opladen · Loslaten',
      title: 'Wellness & spa in Frigiliana',
      subtitle: 'Twee rustige mogelijkheden bij Frigiliana',
      paragraphs: [
        'Als jullie een paar uur voor een behandeling willen reserveren, zijn er twee heel verschillende opties bij Frigiliana.',
        'Frigiliana Wellness komt naar jullie villa of appartement en biedt een breder spa- en beautymenu. Lidia ontvangt gasten voor Californische massage op haar landelijke locatie bij Frigiliana. Beide aanbieders zijn onafhankelijk; jullie boeken rechtstreeks bij hen.'
      ],
    },
    sectionNav: {
      choose: 'Kies op locatie',
      providers: 'De aanbieders',
      compare: 'Vergelijken',
      planning: 'Jullie dag plannen'
    },
    overview: {
      title: 'Blijven jullie liever thuis of gaan jullie eropuit?',
      intro:
        'Het duidelijkste verschil is praktisch: Frigiliana Wellness brengt behandelingen naar jullie verblijf; voor Lidia reizen jullie naar haar landelijke locatie.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Behandelingen in jullie verblijf',
          text:
            'Frigiliana Wellness komt naar jullie villa of appartement, zodat er voor en na de afspraak geen rit nodig is.'
        },
        {
          title: 'Massage op het platteland',
          text:
            'Bevestig voor een afspraak met Lidia haar locatie bij Frigiliana en plan de heen- en terugreis.'
        },
        {
          title: 'Verwennerij & keuze',
          text:
            'De mobiele optie past wanneer comfort, beautybehandelingen en een ruimer aanbod belangrijker zijn dan eropuit gaan.'
        },
        {
          title: 'Rust & aandacht',
          text:
            'Kies de landelijke optie als jullie specifiek Californische massage in een rustige één-op-éénsetting willen.'
        }
      ]
    },
    providers: {
      title: 'De een komt naar jullie toe; de ander ontvangt jullie buiten het dorp',
      intro:
        'Vergelijk waar de afspraak plaatsvindt, het soort behandelingen en hoeveel tijd jullie ervoor willen reserveren.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Vergelijk het praktische verschil',
      intro:
        'Begin met locatie en behandelingstype. Die twee vragen maken de keuze meestal eenvoudig.',
      labels: {
        mood: 'Type sessie',
        logistics: 'Praktisch',
        ideal: 'Kies dit wanneer'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Licht, comfortabel en desgewenst wat gezelliger.',
          logistics:
            'Jullie blijven in de villa of het appartement; de behandelingen komen naar jullie toe.',
          ideal:
            'Jullie behandelingen in het verblijf of meer keuze dan alleen massage willen.'
        },
        {
          name: 'Lidia',
          mood: 'Persoonlijke Californische massage in een rustige landelijke omgeving.',
          logistics:
            'Jullie gaan naar haar landelijke locatie bij Frigiliana.',
          ideal:
            'Jullie specifiek Californische massage willen en graag naar de afspraak reizen.'
        }
      ],
      tip:
        'Twijfelen jullie nog? Kies dan op basis van de logistiek: thuisblijven met Frigiliana Wellness of voor de afspraak naar Lidia reizen.'
    },
    planning: {
      title: 'Houd ook de rest van de dag eenvoudig',
      intro:
        'Afspraken, beschikbare behandelingen en locaties kunnen veranderen. Bevestig de praktische details rechtstreeks voordat jullie de rest van de dag rond de boeking plannen.',
      items: [
        {
          title: 'Rechtstreeks boeken',
          text:
            'Vraag via de website of WhatsApp van de aanbieder naar beschikbaarheid, actuele behandelingen en prijzen.'
        },
        {
          title: 'Locatie bevestigen',
          text:
            'Deel voor een mobiele behandeling de gegevens van jullie verblijf. Bevestig bij Lidia het ontmoetingspunt en de route.'
        },
        {
          title: 'Kies op format',
          text:
            'Kies tussen behandelingen aan huis voor één of meer gasten en een individuele Californische massagesessie op het platteland.'
        },
        {
          title: 'Laat tijd vrij',
          text:
            'Plan niet direct daarna een gehaaste maaltijd, rit of activiteit. De rustige overgang hoort bij de ervaring.'
        }
      ],
      note:
        'De behandelingen zijn persoonlijke wellnesservaringen en geen medische of therapeutische diensten. Jullie boeken rechtstreeks bij onafhankelijke externe aanbieders.'
    },
    combine: {
      title: 'Maak er een echt rustige dag van',
      intro:
        'Wellness werkt hier het best wanneer het niet nog een punt op een lange lijst is. Combineer het met één ontspannen maaltijd of een lichte wandeling, niet met een vol programma.',
      items: [
        {
          title: 'Voeg een ontspannen maaltijd toe',
          text:
            'Kies een terras in Frigiliana of een bijzonder diner in Nerja en laat voldoende tijd tussen de behandeling en jullie reservering.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        },
        {
          title: 'Wandel, maar houd het licht',
          text:
            'Een korte wandeling door het dorp of de natuur past goed bij dezelfde sfeer. Bewaar zwaardere routes voor een andere dag wanneer rust vooropstaat.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Bekijk de wandelgids'
        }
      ]
    },
    closing: {
      title: 'Het appartement bepaalt de rustige uren rond jullie behandeling',
      lead:
        'Kiezen jullie voor een mobiele behandeling bij jullie verblijf, dan bepalen indeling en comfort de uren ervoor en erna. We vergelijken terrassen, keukens en toegang; Lounis, Zaid en Maha hebben elk een privéterras.',
      nextCta: 'Comfort en voorzieningen vergelijken'
    }
  },
  sv: {
    cardLabels: {
      bestFor: 'Passar bäst för',
      website: 'Öppna webbplatsen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & lugna dagar',
      restaurants: 'Restauranger & lokal mat',
      hiking: 'Vandring & natur'
    },
    hero: {
      kicker: 'Massage & spabehandlingar nära Frigiliana',
      title: 'Wellness & spa i Frigiliana',
      subtitle: 'Två lugna alternativ nära Frigiliana',
      paragraphs: [
        'Om ni vill avsätta några timmar för en behandling finns det två ganska olika alternativ nära Frigiliana.',
        'Frigiliana Wellness kommer till er villa eller lägenhet och erbjuder en bredare meny av spa- och skönhetsbehandlingar. Lidia tar emot för kalifornisk massage på sin plats på landsbygden nära Frigiliana. Båda är oberoende aktörer och ni bokar direkt med dem.'
      ],
    },
    sectionNav: {
      choose: 'Välj efter plats',
      providers: 'Aktörerna',
      compare: 'Jämför',
      planning: 'Planera dagen'
    },
    overview: {
      title: 'Vill ni stanna hemma eller åka iväg?',
      intro:
        'Den tydligaste skillnaden är praktisk: Frigiliana Wellness tar behandlingarna till ert boende; till Lidia åker ni till hennes plats på landsbygden.',
      reviewed: 'Redaktionellt granskat: juli 2026',
      items: [
        {
          title: 'Wellness i boendet',
          text:
            'Frigiliana Wellness kommer till er villa eller lägenhet, så ni behöver inte resa före eller efter besöket.'
        },
        {
          title: 'Massage på landsbygden',
          text:
            'Inför ett besök hos Lidia bekräftar ni platsen nära Frigiliana och planerar resan dit och tillbaka.'
        },
        {
          title: 'Avkoppling & valmöjligheter',
          text:
            'Det mobila alternativet passar när komfort, skönhetsbehandlingar och ett bredare utbud är viktigare än att åka iväg.'
        },
        {
          title: 'Stillhet & fokus',
          text:
            'Välj landsbygdsalternativet om ni specifikt vill ha kalifornisk massage i en lugn personlig miljö.'
        }
      ]
    },
    providers: {
      title: 'Den ena kommer till er; den andra tar emot på landsbygden',
      intro:
        'Jämför var besöket sker, vilken typ av behandlingar som erbjuds och hur mycket tid ni vill avsätta.',
      providerIds: ['frigiliana.wellness.frigiliana-wellness', 'frigiliana.wellness.lidia-california-massage']
    },
    comparison: {
      title: 'Vilket alternativ passar er?',
      intro:
        'Börja med plats och behandlingstyp. De två frågorna brukar göra valet enkelt.',
      labels: {
        mood: 'Typ av session',
        logistics: 'Praktiskt',
        ideal: 'Välj detta när'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Lätt, bekvämt och om ni vill lite mer socialt.',
          logistics:
            'Ni stannar i villan eller lägenheten; behandlingarna kommer till er.',
          ideal:
            'Ni vill ha enkel wellness, en avkopplande spadag och minimalt med planering.'
        },
        {
          name: 'Lidia',
          mood: 'Personlig kalifornisk massage i en lugn lantlig miljö.',
          logistics:
            'Ni åker till hennes lantliga plats nära Frigiliana.',
          ideal:
            'Ni specifikt vill ha kalifornisk massage och gärna åker till besöket.'
        }
      ],
      tip:
        'Om ni är osäkra, välj efter logistiken: stanna hemma med Frigiliana Wellness eller åk iväg till några lugna timmar hos Lidia.'
    },
    planning: {
      title: 'Låt resten av dagen vara lika enkel',
      intro:
        'Tider, tillgängliga behandlingar och platser kan ändras. Bekräfta det praktiska direkt innan ni formar resten av dagen kring bokningen.',
      items: [
        {
          title: 'Boka direkt',
          text:
            'Använd aktörens webbplats eller WhatsApp för att fråga om tillgänglighet, aktuella behandlingar och priser.'
        },
        {
          title: 'Bekräfta platsen',
          text:
            'Dela uppgifter om boendet för en mobil behandling. Bekräfta mötesplats och resväg med Lidia innan ni åker.'
        },
        {
          title: 'Välj efter upplägg',
          text:
            'Välj mellan behandlingar i boendet för en eller flera gäster och en individuell kalifornisk massagesession på landsbygden.'
        },
        {
          title: 'Lämna tid efteråt',
          text:
            'Lämna tid före nästa måltid, bilresa eller aktivitet, särskilt för resan tillbaka från Lidia.'
        }
      ],
      note:
        'Behandlingarna är personliga wellnessupplevelser och inte medicinska eller terapeutiska tjänster. Bokning sker direkt hos oberoende externa aktörer.'
    },
    combine: {
      title: 'Vad ni kan planera före och efter',
      intro:
        'Håll timmarna runt besöket enkla. En måltid i närheten eller en lätt promenad är enklare att kombinera än en utflykt med snäva tider.',
      items: [
        {
          title: 'Lägg till en måltid utan brådska',
          text:
            'Välj en terrass i Frigiliana eller en speciell middag i Nerja och lämna gott om tid mellan behandlingen och bokningen.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        },
        {
          title: 'Promenera, men håll det lätt',
          text:
            'En kort promenad genom byn eller landskapet passar samma känsla. Spara krävande leder till en annan dag om vila är prioriterat.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Se vandringsguiden'
        }
      ]
    },
    closing: {
      title: 'Lägenheten formar de lugna timmarna kring er behandling',
      lead:
        'Om ni väljer en mobil behandling i ert boende formar planlösning och komfort timmarna före och efter. Vi jämför terrasser, kök och tillträde; Lounis, Zaid och Maha har var sin privat terrass.',
      nextCta: 'Jämför komfort och bekvämligheter'
    }
  }
};
