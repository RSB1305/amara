import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type WellnessProviderKey = 'frigilianaWellness' | 'lidia';

interface WellnessProviderCopy {
  name: string;
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
  version: '2026-07-29-frigiliana-wellness-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
  languages: {
    en: {
      title: 'Wellness & Spa in Frigiliana | AMARA Guide',
      description:
        'Compare two carefully selected wellness experiences near Frigiliana: mobile spa treatments at your stay or a quiet countryside massage.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wellness & Spa in Frigiliana | AMARA Guide',
      description:
        'Zwei ausgewählte Wellness-Erlebnisse bei Frigiliana im Vergleich: mobile Behandlungen in der Unterkunft oder eine ruhige Massage auf dem Land.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Bienestar y spa en Frigiliana | Guía AMARA',
      description:
        'Compara dos experiencias de bienestar cerca de Frigiliana: tratamientos a domicilio o un masaje tranquilo en plena naturaleza.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wellness & spa in Frigiliana | AMARA-gids',
      description:
        'Vergelijk twee zorgvuldig gekozen wellnesservaringen bij Frigiliana: behandelingen in uw verblijf of een rustige massage buiten het dorp.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Wellness & spa i Frigiliana | AMARA-guide',
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
      kicker: 'Slow days · Restore · Disconnect',
      title: 'Wellness & spa experiences in Frigiliana',
      paragraphs: [
        'Frigiliana is not about rushing from activity to activity. Some of the best days here are the quiet ones — slow mornings, warm water, good food and treatments that help you truly switch off.',
        'Below are two carefully selected wellness providers in the Frigiliana and Nerja area. Their approaches are very different, so the right choice depends less on a ranking and more on the kind of day you want.'
      ],
      imageAlt:
        'The whitewashed village of Frigiliana above the hills and Mediterranean coast'
    },
    sectionNav: {
      choose: 'Choose your mood',
      providers: 'The providers',
      compare: 'Compare',
      planning: 'Plan your day'
    },
    overview: {
      title: 'Start with the kind of pause you need',
      intro:
        'Both options make space for a slower day, but the setting and rhythm are different. Choose between the ease of staying at home and the feeling of leaving the day behind somewhere quiet.',
      reviewed: 'Editorially reviewed: July 2026',
      items: [
        {
          title: 'Wellness at home',
          text:
            'Treatments come to your villa or apartment, so the day can stay relaxed and flexible from beginning to end.'
        },
        {
          title: 'A change of scene',
          text:
            'Travel to a quiet countryside setting and make the appointment feel like a small retreat away from your normal holiday rhythm.'
        },
        {
          title: 'Pamper & variety',
          text:
            'Choose the mobile option when comfort, beauty treatments and a wider menu matter more than travelling elsewhere.'
        },
        {
          title: 'Quiet & focused',
          text:
            'Choose the countryside option when you want a personal session, fewer distractions and an intentionally unhurried atmosphere.'
        }
      ]
    },
    providers: {
      title: 'Two different ways to unwind',
      intro:
        'Neither provider is presented as better. One brings a familiar spa day to your accommodation; the other offers a quieter massage experience at a countryside location near Frigiliana.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          title: 'Mobile spa & pamper days',
          summary:
            'A relaxed, classic spa experience centred on comfort, beauty and ease. It works especially well when you want wellness to come to you without reorganising the rest of the day.',
          highlights: [
            {
              title: 'They come to you',
              text:
                'Treatments can take place at your villa or apartment, keeping the day private and easy.'
            },
            {
              title: 'Pamper & beauty focus',
              text:
                'The atmosphere is familiar and uncomplicated — well suited to a relaxed or sociable spa day.'
            },
            {
              title: 'A broad treatment menu',
              text:
                'A useful choice when you want options beyond massage and would like to combine several treatments.'
            }
          ],
          bestFor:
            'A comfortable “spa at home” day with a flexible, sociable feel.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Calm, depth & retreat atmosphere',
          summary:
            'A quieter and more inward kind of wellness. Guests choose Lidia when they want deep relaxation, a slower pace and a personal massage experience away from the activity of the day.',
          highlights: [
            {
              title: 'A countryside setting',
              text:
                'You travel to her location near Frigiliana, creating a clear change of scene for the appointment.'
            },
            {
              title: 'Californian massage focus',
              text:
                'Long, flowing movements give the session a slow, grounding and calming rhythm.'
            },
            {
              title: 'Retreat-like atmosphere',
              text:
                'The experience is quiet, personal and intentionally unhurried.'
            }
          ],
          bestFor:
            'Guests looking for silence, a personal session and the feeling of a small retreat.'
        })
      ]
    },
    comparison: {
      title: 'Which one fits you?',
      intro:
        'Think of these as two different wellness moods. The most useful distinction is how you want the experience to fit into your day.',
      labels: {
        mood: 'Mood',
        logistics: 'Logistics',
        ideal: 'Choose it when'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Light, comfortable and potentially more sociable.',
          logistics:
            'Stay at your villa or apartment; the treatments come to you.',
          ideal:
            'You want easy wellness, a pamper-day feeling and minimal planning.'
        },
        {
          name: 'Lidia',
          mood: 'Quiet, personal and more retreat-like.',
          logistics:
            'Travel to her countryside location near Frigiliana.',
          ideal:
            'You want a real change of scene and a slower, more focused session.'
        }
      ],
      tip:
        'If you are unsure, decide by logistics: stay at home with Frigiliana Wellness, or go somewhere quiet for a while with Lidia.'
    },
    planning: {
      title: 'Keep the rest of the day just as simple',
      intro:
        'Appointments, available treatments and locations can change. Confirm the practical details directly before shaping the rest of your day around the booking.',
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
          title: 'Choose by energy',
          text:
            'A sociable pamper day and a quiet massage session create different rhythms. Pick the one that matches how you want to feel afterward.'
        },
        {
          title: 'Leave time afterward',
          text:
            'Avoid placing a rushed meal, drive or activity immediately after the appointment. The slower transition is part of the experience.'
        }
      ],
      note:
        'Treatments are personal wellness experiences and are not medical or therapeutic services. Bookings are made directly with independent external providers.'
    },
    combine: {
      title: 'Build a genuinely slow day',
      intro:
        'Wellness works best here when it is not another item on a checklist. Pair it with one calm meal or an easy walk rather than a tightly packed programme.',
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
      title: 'A quiet base for slower days',
      lead:
        'Stay in Frigiliana and give the day room to unfold — without rushing from one plan to the next.',
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
      kicker: 'Zur Ruhe kommen · Auftanken · Abschalten',
      title: 'Wellness- und Spa-Erlebnisse in Frigiliana',
      paragraphs: [
        'Frigiliana ist kein Ort, an dem man von einem Programmpunkt zum nächsten eilen muss. Zu den schönsten Tagen gehören oft die ruhigen: ein langsamer Morgen, warmes Wasser, gutes Essen und Anwendungen, bei denen man wirklich abschalten kann.',
        'Hier finden Sie zwei sorgfältig ausgewählte Wellness-Anbieter im Raum Frigiliana und Nerja. Ihre Ansätze unterscheiden sich deutlich – deshalb geht es nicht um ein Ranking, sondern darum, welche Art von Tag gerade zu Ihnen passt.'
      ],
      imageAlt:
        'Das weiße Dorf Frigiliana über den Hügeln und der Mittelmeerküste'
    },
    sectionNav: {
      choose: 'Stimmung wählen',
      providers: 'Die Anbieter',
      compare: 'Vergleich',
      planning: 'Den Tag planen'
    },
    overview: {
      title: 'Beginnen Sie mit der Pause, die Sie gerade brauchen',
      intro:
        'Beide Möglichkeiten schaffen Raum für einen langsameren Tag, doch Ort und Rhythmus sind verschieden. Entscheiden Sie zwischen dem Komfort in der eigenen Unterkunft und einem bewussten Ortswechsel ins Ruhige.',
      reviewed: 'Redaktionell geprüft: Juli 2026',
      items: [
        {
          title: 'Wellness in der Unterkunft',
          text:
            'Die Anwendungen kommen in Ihre Villa oder Ihr Apartment. So bleibt der gesamte Tag entspannt, privat und flexibel.'
        },
        {
          title: 'Bewusster Ortswechsel',
          text:
            'Fahren Sie zu einem ruhigen Ort auf dem Land und machen Sie aus dem Termin eine kleine Auszeit vom gewohnten Urlaubsrhythmus.'
        },
        {
          title: 'Verwöhnen & Auswahl',
          text:
            'Die mobile Variante passt, wenn Komfort, Beauty-Anwendungen und ein breiteres Angebot wichtiger sind als ein Ortswechsel.'
        },
        {
          title: 'Ruhe & Fokus',
          text:
            'Die Variante auf dem Land passt, wenn Sie sich eine persönliche Sitzung, wenige Ablenkungen und viel Ruhe wünschen.'
        }
      ]
    },
    providers: {
      title: 'Zwei unterschiedliche Wege zum Abschalten',
      intro:
        'Keiner der beiden Anbieter ist grundsätzlich die bessere Wahl. Der eine bringt einen klassischen Spa-Tag in Ihre Unterkunft, der andere bietet eine ruhigere Massage an einem Ort auf dem Land nahe Frigiliana.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          title: 'Mobiler Spa- und Verwöhntag',
          summary:
            'Ein entspanntes, klassisches Spa-Erlebnis mit Fokus auf Komfort, Beauty und unkomplizierter Planung. Besonders angenehm, wenn die Wellness zu Ihnen kommen soll und der restliche Tag unverändert bleiben darf.',
          highlights: [
            {
              title: 'Kommt zu Ihnen',
              text:
                'Die Anwendungen können in Ihrer Villa oder Ihrem Apartment stattfinden – privat, bequem und ohne zusätzliche Fahrt.'
            },
            {
              title: 'Verwöhn- und Beauty-Fokus',
              text:
                'Die Atmosphäre ist vertraut und unkompliziert und eignet sich gut für einen entspannten oder geselligen Spa-Tag.'
            },
            {
              title: 'Breites Behandlungsangebot',
              text:
                'Eine gute Wahl, wenn Sie mehr als eine Massage suchen oder mehrere Anwendungen kombinieren möchten.'
            }
          ],
          bestFor:
            'Einen komfortablen „Spa zu Hause“-Tag mit flexiblem, geselligem Charakter.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Ruhe, Tiefe & Rückzugsort',
          summary:
            'Eine stillere, stärker nach innen gerichtete Form der Entspannung. Gäste wählen Lidia, wenn sie tiefe Ruhe, ein langsameres Tempo und ein persönliches Massageerlebnis abseits des Tagesprogramms suchen.',
          highlights: [
            {
              title: 'Ruhige Lage auf dem Land',
              text:
                'Sie fahren zu ihrem Ort nahe Frigiliana und schaffen damit einen bewussten Abstand zum übrigen Tag.'
            },
            {
              title: 'Fokus auf kalifornische Massage',
              text:
                'Lange, fließende Bewegungen geben der Sitzung einen langsamen, erdenden und beruhigenden Rhythmus.'
            },
            {
              title: 'Atmosphäre wie bei einer Auszeit',
              text:
                'Das Erlebnis ist ruhig, persönlich und bewusst ohne Zeitdruck gestaltet.'
            }
          ],
          bestFor:
            'Gäste, die Stille, eine persönliche Sitzung und das Gefühl einer kleinen Auszeit suchen.'
        })
      ]
    },
    comparison: {
      title: 'Welche Variante passt zu Ihnen?',
      intro:
        'Betrachten Sie die Angebote als zwei unterschiedliche Wellness-Stimmungen. Entscheidend ist vor allem, wie sich das Erlebnis in Ihren Tag einfügen soll.',
      labels: {
        mood: 'Stimmung',
        logistics: 'Ablauf',
        ideal: 'Passend, wenn'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Leicht, komfortabel und auf Wunsch etwas geselliger.',
          logistics:
            'Sie bleiben in Ihrer Villa oder Ihrem Apartment; die Anwendungen kommen zu Ihnen.',
          ideal:
            'Sie unkomplizierte Wellness, Verwöhngefühl und möglichst wenig Planung wünschen.'
        },
        {
          name: 'Lidia',
          mood: 'Ruhig, persönlich und eher wie eine kleine Auszeit.',
          logistics:
            'Sie fahren zu ihrem Ort auf dem Land nahe Frigiliana.',
          ideal:
            'Sie bewusst den Ort wechseln und eine langsame, konzentrierte Sitzung erleben möchten.'
        }
      ],
      tip:
        'Falls Sie unsicher sind, entscheiden Sie nach dem Ablauf: mit Frigiliana Wellness zu Hause bleiben oder für einige ruhige Stunden zu Lidia fahren.'
    },
    planning: {
      title: 'Auch der restliche Tag darf einfach bleiben',
      intro:
        'Termine, verfügbare Anwendungen und Orte können sich ändern. Klären Sie die praktischen Einzelheiten direkt, bevor Sie den übrigen Tag um die Buchung herum planen.',
      items: [
        {
          title: 'Direkt buchen',
          text:
            'Fragen Sie über die Website oder per WhatsApp nach Verfügbarkeit, aktuellen Anwendungen und Preisen.'
        },
        {
          title: 'Ort bestätigen',
          text:
            'Teilen Sie bei einer mobilen Anwendung die Unterkunftsdaten mit. Lassen Sie sich bei Lidia Treffpunkt und Anfahrt bestätigen.'
        },
        {
          title: 'Nach Energie wählen',
          text:
            'Ein geselliger Verwöhntag hat einen anderen Rhythmus als eine ruhige Massage. Wählen Sie nach dem Gefühl, das Sie danach mitnehmen möchten.'
        },
        {
          title: 'Zeit danach lassen',
          text:
            'Planen Sie unmittelbar anschließend keine eilige Mahlzeit, Fahrt oder Aktivität. Der langsame Übergang gehört zur Auszeit.'
        }
      ],
      note:
        'Die Anwendungen sind persönliche Wellness-Erlebnisse und keine medizinischen oder therapeutischen Leistungen. Die Buchung erfolgt direkt bei unabhängigen externen Anbietern.'
    },
    combine: {
      title: 'Gestalten Sie einen wirklich ruhigen Tag',
      intro:
        'Wellness funktioniert hier am besten, wenn sie nicht zum nächsten Punkt auf einer langen Liste wird. Kombinieren Sie die Auszeit lieber mit einem entspannten Essen oder einem leichten Spaziergang.',
      items: [
        {
          title: 'In Ruhe essen gehen',
          text:
            'Wählen Sie eine Terrasse in Frigiliana oder ein besonderes Abendessen in Nerja und lassen Sie zwischen Anwendung und Reservierung ausreichend Zeit.',
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
      title: 'Ein ruhiger Ausgangspunkt für langsame Tage',
      lead:
        'Bleiben Sie in Frigiliana und geben Sie dem Tag Raum, sich ohne Eile zu entfalten.',
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
      kicker: 'Bajar el ritmo · Recuperar energía · Desconectar',
      title: 'Experiencias de bienestar y spa en Frigiliana',
      paragraphs: [
        'Frigiliana no invita a correr de una actividad a otra. Algunos de los mejores días son los más tranquilos: mañanas sin prisa, agua templada, buena comida y tratamientos que ayudan a desconectar de verdad.',
        'A continuación encontraréis dos proveedores de bienestar cuidadosamente seleccionados en la zona de Frigiliana y Nerja. Sus propuestas son muy distintas, así que no se trata de elegir al mejor, sino el tipo de día que más os apetece.'
      ],
      imageAlt:
        'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea'
    },
    sectionNav: {
      choose: 'Elegir ambiente',
      providers: 'Los proveedores',
      compare: 'Comparar',
      planning: 'Planificar el día'
    },
    overview: {
      title: 'Empezad por la pausa que necesitáis',
      intro:
        'Las dos opciones dejan espacio para un día más lento, pero cambian el entorno y el ritmo. Podéis elegir entre la comodidad de quedaros en vuestro alojamiento y la sensación de alejaros unas horas a un lugar tranquilo.',
      reviewed: 'Revisión editorial: julio de 2026',
      items: [
        {
          title: 'Bienestar en casa',
          text:
            'Los tratamientos llegan hasta vuestra villa o apartamento, para que el día siga siendo privado, flexible y relajado de principio a fin.'
        },
        {
          title: 'Cambiar de escenario',
          text:
            'Desplazaos a un entorno tranquilo en el campo y convertid la cita en una pequeña pausa fuera del ritmo habitual de las vacaciones.'
        },
        {
          title: 'Mimos y variedad',
          text:
            'La opción a domicilio encaja si buscáis comodidad, tratamientos de belleza y una oferta más amplia sin tener que desplazaros.'
        },
        {
          title: 'Calma y atención',
          text:
            'La opción en el campo encaja si preferís una sesión personal, pocas distracciones y un ambiente deliberadamente pausado.'
        }
      ]
    },
    providers: {
      title: 'Dos maneras distintas de desconectar',
      intro:
        'Ninguna propuesta es mejor que la otra. Una lleva un día de spa clásico hasta vuestro alojamiento; la otra ofrece un masaje más tranquilo en un entorno rural cerca de Frigiliana.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
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
          title: 'Calma, profundidad y ambiente de retiro',
          summary:
            'Una forma de bienestar más silenciosa e introspectiva. Quienes eligen a Lidia suelen buscar relajación profunda, un ritmo más lento y un masaje personal lejos de la actividad del día.',
          highlights: [
            {
              title: 'Un entorno rural',
              text:
                'Os desplazáis hasta su espacio cerca de Frigiliana, creando una verdadera separación con el resto de la jornada.'
            },
            {
              title: 'Masaje californiano',
              text:
                'Los movimientos largos y fluidos dan a la sesión un ritmo lento, envolvente y relajante.'
            },
            {
              title: 'Ambiente de retiro',
              text:
                'La experiencia es tranquila, personal y deliberadamente pausada.'
            }
          ],
          bestFor:
            'Quienes buscan silencio, una sesión personal y la sensación de una pequeña escapada.'
        })
      ]
    },
    comparison: {
      title: '¿Cuál encaja mejor con vosotros?',
      intro:
        'Pensad en dos estados de ánimo distintos. La diferencia más útil está en cómo queréis integrar la experiencia en vuestro día.',
      labels: {
        mood: 'Ambiente',
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
          mood: 'Tranquilo, personal y más cercano a un pequeño retiro.',
          logistics:
            'Os desplazáis hasta su espacio rural cerca de Frigiliana.',
          ideal:
            'Queréis cambiar de escenario y disfrutar de una sesión más lenta y centrada.'
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
          title: 'Elegir según la energía',
          text:
            'Un día de mimos compartido y un masaje tranquilo tienen ritmos distintos. Elegid según cómo queráis sentiros después.'
        },
        {
          title: 'Dejar tiempo después',
          text:
            'No coloquéis una comida con prisas, un trayecto o una actividad justo después. La transición lenta también forma parte de la experiencia.'
        }
      ],
      note:
        'Los tratamientos son experiencias personales de bienestar y no servicios médicos ni terapéuticos. Las reservas se realizan directamente con proveedores externos independientes.'
    },
    combine: {
      title: 'Cread un día realmente tranquilo',
      intro:
        'El bienestar funciona mejor aquí cuando no es otra casilla en una lista. Combinadlo con una comida sin prisa o un paseo suave, no con un programa demasiado apretado.',
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
      title: 'Una base tranquila para días sin prisa',
      lead:
        'Alojaos en Frigiliana y dejad que el día se desarrolle con espacio, sin correr de un plan al siguiente.',
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
        'Frigiliana draait niet om van de ene activiteit naar de andere rennen. Sommige van de fijnste dagen zijn juist de stille: een langzame ochtend, warm water, goed eten en behandelingen waarbij u echt even loslaat.',
        'Hieronder vindt u twee zorgvuldig gekozen wellnessaanbieders in de omgeving van Frigiliana en Nerja. Hun aanpak verschilt sterk, dus het gaat niet om wie beter is, maar om het soort dag waar u behoefte aan hebt.'
      ],
      imageAlt:
        'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust'
    },
    sectionNav: {
      choose: 'Kies uw sfeer',
      providers: 'De aanbieders',
      compare: 'Vergelijken',
      planning: 'Uw dag plannen'
    },
    overview: {
      title: 'Begin bij de pauze die u nodig hebt',
      intro:
        'Beide opties maken ruimte voor een tragere dag, maar de omgeving en het ritme zijn anders. Kies tussen het gemak van thuisblijven en het gevoel er even helemaal tussenuit te zijn op een rustige plek.',
      reviewed: 'Redactioneel gecontroleerd: juli 2026',
      items: [
        {
          title: 'Wellness in uw verblijf',
          text:
            'De behandelingen komen naar uw villa of appartement, zodat de dag van begin tot eind ontspannen, privé en flexibel blijft.'
        },
        {
          title: 'Even ergens anders',
          text:
            'Ga naar een rustige plek buiten het dorp en laat de afspraak voelen als een korte retraite, los van uw gewone vakantieritme.'
        },
        {
          title: 'Verwennerij & keuze',
          text:
            'De mobiele optie past wanneer comfort, beautybehandelingen en een ruimer aanbod belangrijker zijn dan eropuit gaan.'
        },
        {
          title: 'Rust & aandacht',
          text:
            'De optie op het platteland past wanneer u een persoonlijke sessie, weinig afleiding en een bewust rustig tempo zoekt.'
        }
      ]
    },
    providers: {
      title: 'Twee verschillende manieren om te ontspannen',
      intro:
        'Geen van beide aanbieders is per definitie beter. De een brengt een vertrouwde spadag naar uw accommodatie; de ander biedt een rustigere massage op een landelijke locatie bij Frigiliana.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
          title: 'Mobiele spa & verwenmomenten',
          summary:
            'Een ontspannen, klassieke spa-ervaring met comfort, beauty en gemak als uitgangspunt. Vooral prettig wanneer u de wellness naar u toe wilt laten komen zonder de rest van de dag om te gooien.',
          highlights: [
            {
              title: 'Ze komen naar u toe',
              text:
                'De behandelingen kunnen in uw villa of appartement plaatsvinden: privé, comfortabel en zonder extra rit.'
            },
            {
              title: 'Verwen- en beautyfocus',
              text:
                'De sfeer is vertrouwd en ongecompliceerd en past goed bij een ontspannen of gezellige spadag.'
            },
            {
              title: 'Ruime behandelingskeuze',
              text:
                'Een handige keuze wanneer u meer zoekt dan alleen massage of meerdere behandelingen wilt combineren.'
            }
          ],
          bestFor:
            'Een comfortabele “spa aan huis”-dag met een flexibel en gezellig karakter.'
        }),
        provider('lidia', {
          name: 'Masaje Californiano con Lidia',
          title: 'Rust, diepgang & retraitesfeer',
          summary:
            'Een stillere en meer naar binnen gerichte vorm van wellness. Gasten kiezen Lidia wanneer ze diepe ontspanning, een lager tempo en een persoonlijke massage buiten de drukte van de dag zoeken.',
          highlights: [
            {
              title: 'Landelijke omgeving',
              text:
                'U gaat naar haar locatie bij Frigiliana en maakt zo bewust afstand van de rest van de dag.'
            },
            {
              title: 'Californische massage',
              text:
                'Lange, vloeiende bewegingen geven de sessie een langzaam, aardend en rustgevend ritme.'
            },
            {
              title: 'Sfeer van een retraite',
              text:
                'De ervaring is stil, persoonlijk en bewust zonder haast.'
            }
          ],
          bestFor:
            'Gasten die stilte, persoonlijke aandacht en het gevoel van een korte retraite zoeken.'
        })
      ]
    },
    comparison: {
      title: 'Welke optie past bij u?',
      intro:
        'Zie het als twee verschillende wellnessstemmingen. Het belangrijkste verschil is de manier waarop u de ervaring in uw dag wilt laten passen.',
      labels: {
        mood: 'Sfeer',
        logistics: 'Praktisch',
        ideal: 'Kies dit wanneer'
      },
      items: [
        {
          name: 'Frigiliana Wellness',
          mood: 'Licht, comfortabel en desgewenst wat gezelliger.',
          logistics:
            'U blijft in uw villa of appartement; de behandelingen komen naar u toe.',
          ideal:
            'U makkelijke wellness, een verwendag en zo weinig mogelijk planning wilt.'
        },
        {
          name: 'Lidia',
          mood: 'Stil, persoonlijk en meer als een korte retraite.',
          logistics:
            'U gaat naar haar landelijke locatie bij Frigiliana.',
          ideal:
            'U echt even ergens anders wilt zijn en een langzame, gerichte sessie zoekt.'
        }
      ],
      tip:
        'Twijfelt u nog? Kies dan op basis van de logistiek: thuisblijven met Frigiliana Wellness of enkele rustige uren buitenshuis bij Lidia.'
    },
    planning: {
      title: 'Houd ook de rest van de dag eenvoudig',
      intro:
        'Afspraken, beschikbare behandelingen en locaties kunnen veranderen. Bevestig de praktische details rechtstreeks voordat u de rest van uw dag rond de boeking plant.',
      items: [
        {
          title: 'Rechtstreeks boeken',
          text:
            'Vraag via de website of WhatsApp van de aanbieder naar beschikbaarheid, actuele behandelingen en prijzen.'
        },
        {
          title: 'Locatie bevestigen',
          text:
            'Deel voor een mobiele behandeling de gegevens van uw verblijf. Bevestig bij Lidia het ontmoetingspunt en de route.'
        },
        {
          title: 'Kies op gevoel',
          text:
            'Een gezellige verwendag heeft een ander ritme dan een stille massage. Kies op basis van hoe u zich daarna wilt voelen.'
        },
        {
          title: 'Laat tijd vrij',
          text:
            'Plan niet direct daarna een gehaaste maaltijd, rit of activiteit. De rustige overgang hoort bij de ervaring.'
        }
      ],
      note:
        'De behandelingen zijn persoonlijke wellnesservaringen en geen medische of therapeutische diensten. U boekt rechtstreeks bij onafhankelijke externe aanbieders.'
    },
    combine: {
      title: 'Maak er een echt rustige dag van',
      intro:
        'Wellness werkt hier het best wanneer het niet nog een punt op een lange lijst is. Combineer het met één ontspannen maaltijd of een lichte wandeling, niet met een vol programma.',
      items: [
        {
          title: 'Voeg een ontspannen maaltijd toe',
          text:
            'Kies een terras in Frigiliana of een bijzonder diner in Nerja en laat voldoende tijd tussen de behandeling en uw reservering.',
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
      title: 'Een rustige basis voor langzame dagen',
      lead:
        'Verblijf in Frigiliana en geef de dag de ruimte om zich zonder haast te ontvouwen.',
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
      kicker: 'Sakta ner · Hämta ny energi · Koppla av',
      title: 'Wellness- och spaupplevelser i Frigiliana',
      paragraphs: [
        'Frigiliana handlar inte om att skynda från en aktivitet till nästa. Några av de bästa dagarna är de stilla: långsamma morgnar, varmt vatten, god mat och behandlingar som hjälper er att verkligen koppla av.',
        'Här finns två noggrant utvalda wellnessaktörer i området kring Frigiliana och Nerja. Deras upplägg skiljer sig tydligt, så frågan är inte vem som är bäst utan vilken sorts dag ni längtar efter.'
      ],
      imageAlt:
        'Den vitkalkade byn Frigiliana ovanför kullarna och Medelhavskusten'
    },
    sectionNav: {
      choose: 'Välj känsla',
      providers: 'Aktörerna',
      compare: 'Jämför',
      planning: 'Planera dagen'
    },
    overview: {
      title: 'Börja med den paus ni behöver',
      intro:
        'Båda alternativen ger plats åt en lugnare dag, men miljön och rytmen är olika. Välj mellan enkelheten i att stanna hemma och känslan av att lämna dagen bakom er på en stillsam plats.',
      reviewed: 'Redaktionellt granskat: juli 2026',
      items: [
        {
          title: 'Wellness i boendet',
          text:
            'Behandlingarna kommer till er villa eller lägenhet, så att dagen kan förbli privat, flexibel och avkopplad från början till slut.'
        },
        {
          title: 'Ett miljöombyte',
          text:
            'Åk till en lugn plats på landsbygden och låt besöket bli en liten retreat bortom den vanliga semesterrytmen.'
        },
        {
          title: 'Avkoppling & valmöjligheter',
          text:
            'Det mobila alternativet passar när komfort, skönhetsbehandlingar och ett bredare utbud är viktigare än att åka iväg.'
        },
        {
          title: 'Stillhet & fokus',
          text:
            'Alternativet på landsbygden passar när ni vill ha en personlig session, få distraktioner och ett medvetet lugnt tempo.'
        }
      ]
    },
    providers: {
      title: 'Två olika sätt att koppla av',
      intro:
        'Ingen av aktörerna presenteras som bättre än den andra. Den ena tar en klassisk spadag till ert boende, den andra erbjuder en stillsammare massage i lantlig miljö nära Frigiliana.',
      items: [
        provider('frigilianaWellness', {
          name: 'Frigiliana Wellness',
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
          title: 'Lugn, djup & retreatkänsla',
          summary:
            'En stillsammare och mer inåtvänd form av wellness. Gäster väljer Lidia när de söker djup avkoppling, ett långsammare tempo och en personlig massage bortom dagens aktiviteter.',
          highlights: [
            {
              title: 'Lantlig miljö',
              text:
                'Ni åker till hennes plats nära Frigiliana och skapar på så sätt ett tydligt avbrott från resten av dagen.'
            },
            {
              title: 'Fokus på kalifornisk massage',
              text:
                'Långa, flödande rörelser ger sessionen en långsam, jordande och lugnande rytm.'
            },
            {
              title: 'Atmosfär som en retreat',
              text:
                'Upplevelsen är stillsam, personlig och medvetet utan brådska.'
            }
          ],
          bestFor:
            'Gäster som söker tystnad, en personlig session och känslan av en liten retreat.'
        })
      ]
    },
    comparison: {
      title: 'Vilket alternativ passar er?',
      intro:
        'Se dem som två olika wellnesskänslor. Den viktigaste skillnaden är hur ni vill att upplevelsen ska passa in i dagen.',
      labels: {
        mood: 'Känsla',
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
          mood: 'Stillsamt, personligt och mer som en liten retreat.',
          logistics:
            'Ni åker till hennes lantliga plats nära Frigiliana.',
          ideal:
            'Ni vill byta miljö och uppleva en långsammare, mer fokuserad session.'
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
          title: 'Välj efter energi',
          text:
            'En social spadag har en annan rytm än en stillsam massage. Välj utifrån hur ni vill känna er efteråt.'
        },
        {
          title: 'Lämna tid efteråt',
          text:
            'Lägg inte en stressig måltid, bilresa eller aktivitet direkt efter besöket. Den långsamma övergången är en del av upplevelsen.'
        }
      ],
      note:
        'Behandlingarna är personliga wellnessupplevelser och inte medicinska eller terapeutiska tjänster. Bokning sker direkt hos oberoende externa aktörer.'
    },
    combine: {
      title: 'Skapa en verkligt lugn dag',
      intro:
        'Wellness fungerar bäst här när det inte blir ännu en punkt på en lång lista. Kombinera med en lugn måltid eller en enkel promenad i stället för ett fullspäckat program.',
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
      title: 'En lugn bas för långsamma dagar',
      lead:
        'Bo i Frigiliana och ge dagen utrymme att utvecklas utan att skynda från en plan till nästa.',
      availabilityCta: 'Kontrollera tillgänglighet',
      apartmentsCta: 'Se boendena'
    }
  }
};
