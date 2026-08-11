import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type WellnessProviderKey = 'frigilianaWellness' | 'lidia';

interface WellnessProviderCopy {
  name: string;
  imageAlt?: string;
  title: string;
  summary: string;
  highlights: {
    title: string;
    text: string;
  }[];
  bestFor: string;
}

export interface FrigilianaWellnessProvider extends WellnessProviderCopy {
  id: WellnessProviderKey;
  websiteHref: string;
  whatsappHref: string;
}

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
    paragraphs: string[];
    imageAlt: string;
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
    items: FrigilianaWellnessProvider[];
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
    availabilityCta: string;
    apartmentsCta: string;
  };
}

const providerLinks: Record<
  WellnessProviderKey,
  { websiteHref: string; whatsappHref: string }
> = {
  frigilianaWellness: {
    websiteHref: 'https://www.frigilianawellness.com/',
    whatsappHref: 'https://wa.me/34711074662'
  },
  lidia: {
    websiteHref: 'https://www.masajecalifornianoconlidia.com/',
    whatsappHref: 'https://wa.me/34696555875'
  }
};

function provider(
  id: WellnessProviderKey,
  copy: WellnessProviderCopy
): FrigilianaWellnessProvider {
  return { id, ...copy, ...providerLinks[id] };
}

export const frigilianaWellnessSeo: AmaraAuthoringSeo = {
  version: '2026-07-29-frigiliana-wellness-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
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
        'Zwei unabhängige Wellness-Anbieter bei Frigiliana im Vergleich: mobile Spa-Anwendungen in eurer Unterkunft oder kalifornische Massage auf dem Land.',
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
      title: 'Wellness & spa experiences in Frigiliana',
      paragraphs: [
        'If you want to set aside a few hours for a treatment, there are two quite different options near Frigiliana.',
        'Frigiliana Wellness comes to your villa or apartment and offers a broader spa and beauty menu. Lidia receives guests for Californian massage at her countryside location near Frigiliana. Both are independent providers, and you book with them directly.'
      ],
      imageAlt:
        'The whitewashed village of Frigiliana above the hills and Mediterranean coast'
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
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          imageAlt: 'Outdoor massage beside a pool in the hills around Frigiliana',
          title: 'Mobile spa & pamper days',
          summary:
            'A mobile service for spa and beauty treatments at your villa or apartment. It is the simpler option if you do not want to travel for the appointment.',
          highlights: [
            {
              title: 'They come to you',
              text:
                'Treatments can take place at your villa or apartment; confirm that your exact address is covered when booking.'
            },
            {
              title: 'Spa & beauty focus',
              text:
                'The menu extends beyond massage, which is useful if several people want different treatments.'
            },
            {
              title: 'A broad treatment menu',
              text:
                'A useful choice when you want options beyond massage and would like to combine several treatments.'
            }
          ],
          bestFor:
            'Guests who want mobile treatments, a broader menu or appointments for more than one person.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Californian massage in the countryside',
          summary:
            'A personal Californian massage session at Lidia’s countryside location near Frigiliana. You travel to her rather than receiving the treatment at your accommodation.',
          highlights: [
            {
              title: 'A countryside setting',
              text:
                'You travel to her location near Frigiliana, creating a clear change of scene for the appointment.'
            },
            {
              title: 'Californian massage focus',
              text:
                'The session centres on the long, flowing movements associated with Californian massage.'
            },
            {
              title: 'Quiet one-to-one setting',
              text:
                'This option is centred on one personal massage session in a quiet countryside setting.'
            }
          ],
          bestFor:
            'Guests who specifically want Californian massage and do not mind travelling to the appointment.'
        })
      ]
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
      title: 'Four apartments in Frigiliana’s old town',
      lead:
        'Compare Farah, Lounis, Zaid and Maha, then check availability for your dates.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View the apartments'
    }
  },
  de: {
    cardLabels: {
      bestFor: 'Besonders passend für',
      website: 'Website öffnen',
      whatsapp: 'WhatsApp'
    },
    footerHighlights: {
      wellness: 'Wellness & ruhige Tage',
      restaurants: 'Restaurants & regionale Küche',
      hiking: 'Wandern & Natur'
    },
    hero: {
      kicker: 'Massage & Spa-Anwendungen bei Frigiliana',
      title: 'Wellness- und Spa-Erlebnisse in Frigiliana',
      paragraphs: [
        'Wenn ihr ein paar Stunden für eine Anwendung reservieren möchtet, gibt es bei Frigiliana zwei recht unterschiedliche Möglichkeiten.',
        'Frigiliana Wellness kommt in eure Villa oder euer Apartment und bietet ein breiteres Spa- und Beauty-Angebot. Lidia empfängt Gäste zur kalifornischen Massage an ihrem Ort auf dem Land bei Frigiliana. Beide arbeiten unabhängig; ihr bucht direkt bei ihnen.'
      ],
      imageAlt:
        'Das weiße Dorf Frigiliana über den Hügeln und der Mittelmeerküste'
    },
    sectionNav: {
      choose: 'Nach Ort wählen',
      providers: 'Die Anbieter',
      compare: 'Vergleich',
      planning: 'Den Tag planen'
    },
    overview: {
      title: 'Möchtet ihr bleiben oder hinausfahren?',
      intro:
        'Der wichtigste Unterschied ist praktisch: Frigiliana Wellness kommt in eure Unterkunft; für Lidia fahrt ihr zu ihrem Ort auf dem Land.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'Wellness in der Unterkunft',
          text:
            'Frigiliana Wellness kommt in eure Villa oder euer Apartment. Vor und nach dem Termin entfällt damit die Fahrt.'
        },
        {
          title: 'Massage auf dem Land',
          text:
            'Für einen Termin bei Lidia bestätigt ihr den Ort nahe Frigiliana und plant Hin- und Rückfahrt ein.'
        },
        {
          title: 'Verwöhnen & Auswahl',
          text:
            'Wählt die mobile Variante, wenn ihr Beauty-Anwendungen möchtet oder mehrere Leistungen kombinieren wollt.'
        },
        {
          title: 'Ruhe & Fokus',
          text:
            'Wählt die Variante auf dem Land, wenn ihr gezielt eine kalifornische Massage in ruhiger Einzelbetreuung möchtet.'
        }
      ]
    },
    providers: {
      title: 'Eine kommt zu euch; eine empfängt euch auf dem Land',
      intro:
        'Vergleicht Terminort, Art der Anwendungen und wie viel Zeit ihr dafür einplanen möchtet.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          imageAlt: 'Massage im Freien an einem Pool in den Hügeln rund um Frigiliana',
          title: 'Mobiler Spa- und Verwöhntag',
          summary:
            'Ein mobiler Service für Spa- und Beauty-Anwendungen in eurer Villa oder eurem Apartment. Die einfachere Wahl, wenn ihr für den Termin nicht fahren möchtet.',
          highlights: [
            {
              title: 'Kommt zu euch',
              text:
                'Die Anwendungen können in eurer Villa oder eurem Apartment stattfinden. Bestätigt bei der Buchung, dass eure genaue Adresse abgedeckt ist.'
            },
            {
              title: 'Spa- und Beauty-Fokus',
              text:
                'Das Angebot geht über Massagen hinaus – praktisch, wenn mehrere Personen unterschiedliche Anwendungen möchten.'
            },
            {
              title: 'Breites Behandlungsangebot',
              text:
                'Eine gute Wahl, wenn ihr mehr als eine Massage sucht oder mehrere Anwendungen kombinieren möchtet.'
            }
          ],
          bestFor:
            'Gäste, die mobile Anwendungen, eine breitere Auswahl oder Termine für mehrere Personen möchten.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Kalifornische Massage auf dem Land',
          summary:
            'Eine persönliche kalifornische Massage an Lidias Ort auf dem Land bei Frigiliana. Ihr fahrt zu ihr; die Anwendung findet nicht in eurer Unterkunft statt.',
          highlights: [
            {
              title: 'Ruhige Lage auf dem Land',
              text:
                'Ihr fahrt zu ihrem Ort nahe Frigiliana. Lasst euch Treffpunkt und Anfahrt vorab bestätigen.'
            },
            {
              title: 'Fokus auf kalifornische Massage',
              text:
                'Im Mittelpunkt stehen die langen, fließenden Bewegungen der kalifornischen Massage.'
            },
            {
              title: 'Ruhige Einzelbetreuung',
              text:
                'Diese Variante konzentriert sich auf eine persönliche Massage in ruhiger Umgebung auf dem Land.'
            }
          ],
          bestFor:
            'Gäste, die gezielt eine kalifornische Massage möchten und für den Termin gern hinausfahren.'
        })
      ]
    },
    comparison: {
      title: 'Der praktische Unterschied',
      intro:
        'Beginnt mit Ort und Art der Anwendung. Diese beiden Fragen machen die Wahl meist einfach.',
      labels: {
        mood: 'Art des Termins',
        logistics: 'Ablauf',
        ideal: 'Passend, wenn'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Mobile Spa- und Beauty-Anwendungen, auch für mehrere Gäste.',
          logistics:
            'Ihr bleibt in eurer Villa oder eurem Apartment; die Anwendungen kommen zu euch.',
          ideal:
            'Ihr Anwendungen in der Unterkunft oder mehr Auswahl als Massage allein möchtet.'
        },
        {
          name: 'Lidia',
          mood: 'Persönliche kalifornische Massage in ruhiger Umgebung auf dem Land.',
          logistics:
            'Ihr fahrt zu ihrem Ort auf dem Land nahe Frigiliana.',
          ideal:
            'Ihr gezielt eine kalifornische Massage möchtet und gern zum Termin fahrt.'
        }
      ],
      tip:
        'Falls ihr unsicher seid, entscheidet nach dem Ablauf: mit Frigiliana Wellness in der Unterkunft bleiben oder für den Termin zu Lidia fahren.'
    },
    planning: {
      title: 'Direkt buchen und Details bestätigen',
      intro:
        'Verfügbarkeit, Anwendungen, Preise und Treffpunkte können sich ändern. Klärt sie direkt mit dem Anbieter, bevor ihr den übrigen Tag plant.',
      items: [
        {
          title: 'Direkt buchen',
          text:
            'Fragt über die Website oder per WhatsApp nach Verfügbarkeit, aktuellen Anwendungen und Preisen.'
        },
        {
          title: 'Ort bestätigen',
          text:
            'Teilt bei einer mobilen Anwendung die Unterkunftsdaten mit. Lasst euch bei Lidia Treffpunkt und Anfahrt bestätigen.'
        },
        {
          title: 'Nach Ablauf wählen',
          text:
            'Entscheidet, ob ihr Anwendungen in der Unterkunft für eine oder mehrere Personen oder eine einzelne kalifornische Massage auf dem Land möchtet.'
        },
        {
          title: 'Zeit danach lassen',
          text:
            'Lasst vor der nächsten Restaurantreservierung, Fahrt oder Aktivität genug Zeit – besonders für die Rückfahrt von Lidia.'
        }
      ],
      note:
        'Die Anwendungen sind persönliche Wellness-Erlebnisse und keine medizinischen oder therapeutischen Leistungen. Die Buchung erfolgt direkt bei unabhängigen externen Anbietern.'
    },
    combine: {
      title: 'Was davor und danach passt',
      intro:
        'Haltet die Stunden rund um den Termin einfach. Ein Essen in der Nähe oder ein kurzer Spaziergang lässt sich leichter kombinieren als ein eng getakteter Ausflug.',
      items: [
        {
          title: 'In Ruhe essen gehen',
          text:
            'Wählt eine Terrasse in Frigiliana oder ein besonderes Abendessen in Nerja und lasst zwischen Anwendung und Reservierung ausreichend Zeit.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurant-Guide'
        },
        {
          title: 'Spazieren, aber entspannt',
          text:
            'Ein kurzer Weg durch das Dorf oder die Landschaft passt gut zur gleichen Stimmung. Anspruchsvolle Touren dürfen warten, wenn Erholung Vorrang hat.',
          linkToken: 'frigiliana_hiking_authority',
          linkLabel: 'Zum Wander-Guide'
        }
      ]
    },
    closing: {
      title: 'Vier Apartments in Frigilianas Altstadt',
      lead:
        'Vergleicht Farah, Lounis, Zaid und Maha und prüft dann die Verfügbarkeit für eure Reisedaten.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
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
      title: 'Experiencias de bienestar y spa en Frigiliana',
      paragraphs: [
        'Si queréis reservar unas horas para un tratamiento, hay dos opciones bastante distintas cerca de Frigiliana.',
        'Frigiliana Wellness se desplaza hasta vuestra villa o apartamento y ofrece una carta más amplia de spa y belleza. Lidia recibe para masaje californiano en su espacio rural cerca de Frigiliana. Ambos son proveedores independientes y se reserva directamente con ellos.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea'
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
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          imageAlt: 'Masaje al aire libre junto a una piscina en las colinas de Frigiliana',
          title: 'Spa a domicilio y días de mimos',
          summary:
            'Una experiencia de spa clásica y relajada, centrada en la comodidad, la belleza y la facilidad. Resulta especialmente práctica si queréis que el bienestar venga a vosotros sin reorganizar el resto del día.',
          highlights: [
            {
              title: 'Se desplazan hasta vosotros',
              text:
                'Los tratamientos pueden realizarse en vuestra villa o apartamento, con privacidad y sin trayectos adicionales.'
            },
            {
              title: 'Belleza y cuidado personal',
              text:
                'El ambiente es familiar y sencillo, perfecto para un día de spa relajado o compartido.'
            },
            {
              title: 'Una oferta amplia',
              text:
                'Una opción útil si buscáis algo más que un masaje o queréis combinar varios tratamientos.'
            }
          ],
          bestFor:
            'Un cómodo “spa en casa”, flexible y con un punto social.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Masaje californiano en el campo',
          summary:
            'Una sesión personal de masaje californiano en el espacio rural de Lidia cerca de Frigiliana. Os desplazáis hasta allí; el tratamiento no se realiza en vuestro alojamiento.',
          highlights: [
            {
              title: 'Un entorno rural',
              text:
                'Os desplazáis hasta su espacio cerca de Frigiliana, creando una verdadera separación con el resto de la jornada.'
            },
            {
              title: 'Masaje californiano',
              text:
                'La sesión se centra en los movimientos largos y fluidos propios del masaje californiano.'
            },
            {
              title: 'Entorno tranquilo y personal',
              text:
                'La experiencia es tranquila, personal y deliberadamente pausada.'
            }
          ],
          bestFor:
            'Quienes buscan específicamente masaje californiano y no tienen inconveniente en desplazarse hasta la cita.'
        })
      ]
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
      title: 'Cuatro apartamentos en el casco antiguo de Frigiliana',
      lead:
        'Comparad Farah, Lounis, Zaid y Maha y consultad después la disponibilidad para vuestras fechas.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver los apartamentos'
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
      title: 'Wellness- en spa-ervaringen in Frigiliana',
      paragraphs: [
        'Als jullie een paar uur voor een behandeling willen reserveren, zijn er twee heel verschillende opties bij Frigiliana.',
        'Frigiliana Wellness komt naar jullie villa of appartement en biedt een breder spa- en beautymenu. Lidia ontvangt gasten voor Californische massage op haar landelijke locatie bij Frigiliana. Beide aanbieders zijn onafhankelijk; jullie boeken rechtstreeks bij hen.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust'
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
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          imageAlt: 'Massage in de buitenlucht bij een zwembad in de heuvels rond Frigiliana',
          title: 'Mobiele spa & verwenmomenten',
          summary:
            'Een mobiele service voor spa- en beautybehandelingen in jullie villa of appartement. De eenvoudigste optie als jullie niet voor de afspraak willen reizen.',
          highlights: [
            {
              title: 'Ze komen naar jullie toe',
              text:
                'De behandelingen kunnen in jullie villa of appartement plaatsvinden. Bevestig bij het boeken dat jullie exacte adres wordt bediend.'
            },
            {
              title: 'Verwen- en beautyfocus',
              text:
                'De sfeer is vertrouwd en ongecompliceerd en past goed bij een ontspannen of gezellige spadag.'
            },
            {
              title: 'Ruime behandelingskeuze',
              text:
                'Een handige keuze wanneer jullie meer zoeken dan alleen massage of meerdere behandelingen willen combineren.'
            }
          ],
          bestFor:
            'Een comfortabele “spa aan huis”-dag met een flexibel en gezellig karakter.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Californische massage op het platteland',
          summary:
            'Een persoonlijke Californische massagesessie op Lidia’s landelijke locatie bij Frigiliana. Jullie reizen naar haar toe; de behandeling vindt niet in jullie verblijf plaats.',
          highlights: [
            {
              title: 'Landelijke omgeving',
              text:
                'Jullie reizen naar haar locatie bij Frigiliana. Bevestig het ontmoetingspunt en de route vooraf.'
            },
            {
              title: 'Californische massage',
              text:
                'De sessie draait om de lange, vloeiende bewegingen van Californische massage.'
            },
            {
              title: 'Rustige één-op-éénsetting',
              text:
                'De ervaring is stil, persoonlijk en bewust zonder haast.'
            }
          ],
          bestFor:
            'Gasten die specifiek Californische massage willen en graag naar de afspraak reizen.'
        })
      ]
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
      title: 'Vier appartementen in de oude kern van Frigiliana',
      lead:
        'Vergelijk Farah, Lounis, Zaid en Maha en bekijk daarna de beschikbaarheid voor jullie data.',
      availabilityCta: 'Beschikbaarheid bekijken',
      apartmentsCta: 'Bekijk de appartementen'
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
      title: 'Wellness- och spaupplevelser i Frigiliana',
      paragraphs: [
        'Om ni vill avsätta några timmar för en behandling finns det två ganska olika alternativ nära Frigiliana.',
        'Frigiliana Wellness kommer till er villa eller lägenhet och erbjuder en bredare meny av spa- och skönhetsbehandlingar. Lidia tar emot för kalifornisk massage på sin plats på landsbygden nära Frigiliana. Båda är oberoende aktörer och ni bokar direkt med dem.'
      ],
      imageAlt:
        'Den vitkalkade byn Frigiliana ovanför kullarna och Medelhavskusten'
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
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          imageAlt: 'Utomhusmassage vid en pool i kullarna runt Frigiliana',
          title: 'Mobil spa- och avkopplingsdag',
          summary:
            'En avslappnad, klassisk spaupplevelse med fokus på komfort, skönhet och enkelhet. Särskilt praktiskt när ni vill att wellness ska komma till er utan att resten av dagen behöver planeras om.',
          highlights: [
            {
              title: 'De kommer till er',
              text:
                'Behandlingarna kan göras i er villa eller lägenhet – privat, bekvämt och utan extra resa.'
            },
            {
              title: 'Fokus på avkoppling och skönhet',
              text:
                'Känslan är välbekant och okomplicerad och passar en avslappnad eller social spadag.'
            },
            {
              title: 'Brett behandlingsutbud',
              text:
                'Ett bra val när ni söker mer än massage eller vill kombinera flera behandlingar.'
            }
          ],
          bestFor:
            'En bekväm “spa hemma”-dag med flexibel och social känsla.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Kalifornisk massage på landsbygden',
          summary:
            'En personlig kalifornisk massagesession på Lidias plats på landsbygden nära Frigiliana. Ni åker till henne; behandlingen sker inte i ert boende.',
          highlights: [
            {
              title: 'Lantlig miljö',
              text:
                'Ni åker till hennes plats nära Frigiliana och skapar på så sätt ett tydligt avbrott från resten av dagen.'
            },
            {
              title: 'Fokus på kalifornisk massage',
              text:
                'Sessionen fokuserar på de långa, flödande rörelser som hör till kalifornisk massage.'
            },
            {
              title: 'Lugn personlig miljö',
              text:
                'Upplevelsen är stillsam, personlig och medvetet utan brådska.'
            }
          ],
          bestFor:
            'Gäster som specifikt vill ha kalifornisk massage och gärna reser till besöket.'
        })
      ]
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
      title: 'Fyra lägenheter i Frigilianas gamla stad',
      lead:
        'Jämför Farah, Lounis, Zaid och Maha och kontrollera sedan tillgängligheten för era datum.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se boendena'
    }
  }
};
