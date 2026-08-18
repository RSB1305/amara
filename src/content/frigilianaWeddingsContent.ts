import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type WeddingPlanningLinkToken =
  | 'getting_to_frigiliana'
  | 'frigiliana_parking'
  | 'frigiliana_stairs'
  | 'weather_frigiliana';

interface FrigilianaWeddingsCopy {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    paragraphs: string[];
    cta: string;
    imageAlt: string;
  };
  village: {
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  nearChurch: {
    title: string;
    paragraphs: string[];
    distance: string;
    distanceLabel: string;
    imageAlt: string;
  };
  stayOptions: {
    title: string;
    intro: string;
    items: Array<{
      eyebrow: string;
      title: string;
      text: string;
    }>;
    note: string;
    cta: string;
    apartmentsCta: string;
  };
  prepare: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
    }>;
    note: string;
    imageAlt: string;
  };
  planning: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
      linkLabel: string;
      linkToken: WeddingPlanningLinkToken;
    }>;
    churchNote: string;
    churchLinkLabel: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  closing: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
  footerHighlights: {
    weddings: string;
    location: string;
    stays: string;
  };
}

export const frigilianaWeddingsSeo: AmaraAuthoringSeo = {
  version: '2026-08-18-frigiliana-weddings-v1.0-C',
  pageType: 'C',
  entityKey: 'amara-brand',
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Getting Married in Frigiliana | Stay near the Church',
      description:
        'Plan a wedding in Frigiliana and stay around 15 metres from San Antonio church. Book one or two AMARA apartments, or Casa AMARA for up to 8 guests.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Heiraten in Frigiliana | Unterkunft nahe der Kirche',
      description:
        'Heiraten in Frigiliana und rund 15 Meter von San Antonio übernachten: ein oder zwei AMARA-Apartments oder Casa AMARA für bis zu 8 Gäste.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Casarse en Frigiliana | Alojamiento junto a la iglesia',
      description:
        'Celebrad vuestra boda en Frigiliana y alojaos a unos 15 metros de la iglesia de San Antonio: uno o dos apartamentos, o Casa AMARA para hasta 8 huéspedes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Trouwen in Frigiliana | Overnachten bij de kerk',
      description:
        'Trouwen in Frigiliana en op circa 15 meter van de San Antonio-kerk verblijven: één of twee appartementen, of heel Casa AMARA voor maximaal 8 gasten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Gifta sig i Frigiliana | Bo nära kyrkan',
      description:
        'Planera bröllop i Frigiliana och bo cirka 15 meter från San Antonio-kyrkan: en eller två lägenheter, eller hela Casa AMARA för upp till 8 gäster.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaWeddingsContent: Record<
  AmaraLanguage,
  FrigilianaWeddingsCopy
> = {
  en: {
    hero: {
      kicker: 'A WEDDING IN ANDALUSIA',
      title: 'Getting married in Frigiliana',
      lead:
        'A white village, a seventeenth-century church and a place to stay only a few steps from the ceremony.',
      paragraphs: [
        'San Antonio de Padua church stands in the heart of Frigiliana’s old town. **Casa AMARA is diagonally opposite, around 15 metres away.**',
        'That makes the house a particularly practical base for the couple, close family or wedding guests who want to stay in the village and avoid another journey immediately before the ceremony.'
      ],
      cta: 'See the accommodation options',
      imageAlt: 'Entrance of San Antonio de Padua church in Frigiliana'
    },
    village: {
      title: 'Why couples choose Frigiliana for their wedding',
      paragraphs: [
        'Frigiliana brings the ceremony into the everyday fabric of a historic Andalusian village. White houses, narrow lanes and the small church square create a setting that feels intimate rather than staged.',
        'The parish church is San Antonio de Padua, built in the seventeenth century. Church arrangements, available dates and current requirements must always be agreed directly with the parish.',
        'For guests, the practical question comes next: where to stay, get ready and return after the celebration. This is where Casa AMARA’s location is unusual.'
      ],
      imageAlt: 'White houses in the historic centre of Frigiliana'
    },
    nearChurch: {
      title: 'Accommodation diagonally opposite the church',
      paragraphs: [
        'Casa AMARA is on Calle Chorruelo, where it meets Calle Real, around 15 metres from San Antonio church. There is no transfer from the accommodation to the ceremony and no long walk through the village in wedding clothes.',
        'During a booked stay, the couple or guests can get ready in their own accommodation, take a final moment in private and walk over when it is time.',
        'The short distance is just as useful afterwards: guests staying at AMARA return to the house in a few steps. If the reception is elsewhere, arrange the taxi, shuttle or pickup with the venue or wedding planner in good time.'
      ],
      distance: '≈ 15 m',
      distanceLabel: 'from Casa AMARA to San Antonio church',
      imageAlt: 'Casa AMARA on Calle Chorruelo in Frigiliana old town'
    },
    stayOptions: {
      title: 'Stay at AMARA',
      intro:
        'For couples and wedding guests looking for accommodation in Frigiliana, Casa AMARA offers four independent stays for two guests each. Depending on availability, a wedding booking can be kept small or bring a close group together in the same house.',
      items: [
        {
          eyebrow: 'ONE STAY',
          title: 'For the couple or two guests',
          text:
            'Book one private AMARA stay for one or two people who want to sleep and get ready close to the church.'
        },
        {
          eyebrow: 'TWO STAYS',
          title: 'For up to four guests',
          text:
            'Two independent stays keep two couples, the wedding party or close family near one another while preserving private space.'
        },
        {
          eyebrow: 'THE WHOLE HOUSE',
          title: 'For up to eight guests',
          text:
            'Subject to combined availability, all four stays in Casa AMARA can be reserved together for up to eight overnight guests.'
        }
      ],
      note:
        'A whole-house booking means four independent accommodations in the same historic building, not one shared event villa. Casa AMARA is for overnight stays; parties and events are not part of the normal accommodation use.',
      cta: 'Check availability',
      apartmentsCta: 'Compare the AMARA stays'
    },
    prepare: {
      title: 'Get ready without a long journey',
      intro:
        'This quiet preparation before the ceremony is often called getting ready. In the final hour, a booked AMARA stay gives you a private base next to the church rather than a hotel room or villa outside the village.',
      items: [
        {
          title: 'A private place before the ceremony',
          text:
            'Use your own bathroom and accommodation to dress, make final adjustments and take a quiet moment before leaving.'
        },
        {
          title: 'Wedding clothes, fewer logistics',
          text:
            'The church is only a few steps away, so there is no need to plan a car or taxi for the final part of the journey.'
        },
        {
          title: 'Close guests under one roof',
          text:
            'Separate stays in the same house allow a small group to remain nearby without giving up privacy.'
        }
      ],
      note:
        'Access for getting ready is part of the confirmed overnight stay. Any early arrival or timing outside the booked check-in period must be agreed in advance.',
      imageAlt: 'Private bathroom and mirror in an AMARA apartment in Frigiliana'
    },
    planning: {
      title: 'Plan a wedding stay in Frigiliana',
      intro:
        'The ceremony may be close, but arrival and village logistics still deserve an early plan, especially when several guests travel at the same time.',
      items: [
        {
          title: 'Arrive in Frigiliana',
          text:
            'Compare car, taxi and public-transport options and allow enough time for luggage and wedding clothes.',
          linkLabel: 'How to get to Frigiliana',
          linkToken: 'getting_to_frigiliana'
        },
        {
          title: 'Plan parking before the day',
          text:
            'The old town has limited vehicle access. Wedding dates and village events can increase demand, so guests should know their parking plan before arrival.',
          linkLabel: 'Parking in Frigiliana',
          linkToken: 'frigiliana_parking'
        },
        {
          title: 'Understand streets and stairs',
          text:
            'Frigiliana is a hillside village. Check routes and steps when elderly relatives, small children or formal shoes are part of the day.',
          linkLabel: 'Village streets and stairs',
          linkToken: 'frigiliana_stairs'
        },
        {
          title: 'Plan for the weather and season',
          text:
            'Check typical temperatures, rain and evening conditions so clothing, walking times and transfers suit your date.',
          linkLabel: 'Weather in Frigiliana',
          linkToken: 'weather_frigiliana'
        }
      ],
      churchNote:
        'For current information about Catholic ceremonies, documents, dates and parish arrangements, contact San Antonio de Padua parish directly.',
      churchLinkLabel: 'Official parish information'
    },
    faq: {
      title: 'Questions about weddings and accommodation in Frigiliana',
      items: [
        {
          question: 'How close is Casa AMARA to San Antonio church?',
          answer:
            'Casa AMARA is diagonally opposite the church, around 15 metres away. The exact route is only a few steps through the historic centre.'
        },
        {
          question: 'Can the couple get ready at AMARA before the wedding?',
          answer:
            'Yes, during a confirmed overnight stay the couple can use their private accommodation and bathroom to get ready. Early access outside the confirmed check-in time must be arranged in advance.'
        },
        {
          question: 'Can wedding guests stay in the same house?',
          answer:
            'Yes. One stay sleeps up to two guests, two stays up to four, and all four stays in Casa AMARA can accommodate up to eight overnight guests when they are available together.'
        },
        {
          question: 'Is Casa AMARA a wedding or reception venue?',
          answer:
            'No. Casa AMARA is accommodation near San Antonio church. Parties and events are not included in normal accommodation use; the ceremony and reception take place elsewhere.'
        },
        {
          question: 'How do we arrange a church wedding in Frigiliana?',
          answer:
            'Dates, Catholic requirements and ceremony arrangements are managed by the parish. Confirm the current process directly with San Antonio de Padua before making dependent travel plans.'
        }
      ]
    },
    closing: {
      title: 'Stay a few steps from your wedding in Frigiliana',
      paragraphs: [
        'Choose one private stay, bring four guests together in two, or reserve all four AMARA stays for a close group of up to eight people.',
        'The location stays the same: Casa AMARA in the old town, around 15 metres from San Antonio church.'
      ],
      cta: 'Check wedding-stay availability'
    },
    footerHighlights: {
      weddings: 'Getting married in Frigiliana',
      location: 'Where is Casa AMARA?',
      stays: 'Compare AMARA stays'
    }
  },
  de: {
    hero: {
      kicker: 'HOCHZEIT IN ANDALUSIEN',
      title: 'Heiraten in Frigiliana',
      lead:
        'Ein weißes Dorf, eine Kirche aus dem 17. Jahrhundert und eure Unterkunft nur wenige Schritte von der Trauung entfernt.',
      paragraphs: [
        'Die Kirche San Antonio de Padua steht mitten in Frigilianas Altstadt. **Casa AMARA liegt schräg gegenüber, rund 15 Meter entfernt.**',
        'Damit ist das Haus eine besonders praktische Basis für das Brautpaar, enge Familie oder Hochzeitsgäste, die im Dorf übernachten und unmittelbar vor der Trauung keine weitere Anreise möchten.'
      ],
      cta: 'Unterkunftsmöglichkeiten ansehen',
      imageAlt: 'Eingang der Kirche San Antonio de Padua in Frigiliana'
    },
    village: {
      title: 'Warum Paare in Frigiliana heiraten',
      paragraphs: [
        'In Frigiliana wird die Hochzeit Teil eines historischen andalusischen Dorfes. Weiße Häuser, enge Gassen und der kleine Kirchplatz schaffen einen Rahmen, der persönlich wirkt statt inszeniert.',
        'Die Pfarrkirche San Antonio de Padua wurde im 17. Jahrhundert erbaut. Kirchliche Voraussetzungen, mögliche Termine und die aktuellen Abläufe stimmt ihr immer direkt mit der Pfarrei ab.',
        'Für die Gäste folgt gleich die praktische Frage: Wo können sie übernachten, sich in Ruhe fertig machen und nach der Feier zurückkehren? Genau hier ist die Lage von Casa AMARA außergewöhnlich.'
      ],
      imageAlt: 'Weiße Häuser im historischen Zentrum von Frigiliana'
    },
    nearChurch: {
      title: 'Die Unterkunft schräg gegenüber',
      paragraphs: [
        'Casa AMARA liegt in der Calle Chorruelo am Übergang zur Calle Real, rund 15 Meter von der Kirche San Antonio entfernt. Zwischen Unterkunft und Trauung braucht ihr keinen Transfer und keinen langen Weg durch das Dorf in festlicher Kleidung.',
        'Während eures gebuchten Aufenthalts könnt ihr euch im eigenen Apartment fertig machen, letzte Details vorbereiten und noch einen ruhigen Moment haben, bevor ihr zur Kirche hinübergeht.',
        'Auch später ist die kurze Entfernung angenehm: Wer bei AMARA übernachtet, ist mit wenigen Schritten wieder im Haus. Liegt die Hochzeitsfeier anschließend an einem anderen Ort, stimmt Taxi, Shuttle oder Abholung frühzeitig mit der Feierlocation oder dem Wedding Planner ab.'
      ],
      distance: '≈ 15 m',
      distanceLabel: 'von Casa AMARA bis zur Kirche San Antonio',
      imageAlt: 'Casa AMARA in der Calle Chorruelo in Frigilianas Altstadt'
    },
    stayOptions: {
      title: 'Übernachten bei AMARA',
      intro:
        'Als Unterkunft für Hochzeitsgäste in Frigiliana bietet Casa AMARA vier eigenständige Unterkünfte für jeweils zwei Gäste. Je nach Verfügbarkeit kann eure Hochzeitsbuchung klein bleiben oder eine enge Gruppe im selben Haus zusammenbringen.',
      items: [
        {
          eyebrow: 'EINE UNTERKUNFT',
          title: 'Für das Brautpaar oder zwei Gäste',
          text:
            'Bucht eine private AMARA-Unterkunft für ein oder zwei Personen, die nahe der Kirche schlafen und sich dort fertig machen möchten.'
        },
        {
          eyebrow: 'ZWEI UNTERKÜNFTE',
          title: 'Für bis zu vier Gäste',
          text:
            'Zwei eigenständige Unterkünfte bringen Trauzeugen, zwei Paare oder enge Familie nah zusammen und bewahren trotzdem den privaten Rückzugsraum.'
        },
        {
          eyebrow: 'DAS GANZE HAUS',
          title: 'Für bis zu acht Gäste',
          text:
            'Wenn alle vier Unterkünfte gemeinsam verfügbar sind, könnt ihr Casa AMARA für bis zu acht Übernachtungsgäste zusammen reservieren.'
        }
      ],
      note:
        'Eine Buchung des ganzen Hauses bedeutet vier eigenständige Unterkünfte im selben historischen Gebäude – keine gemeinsame Eventvilla. Casa AMARA ist zum Übernachten da; Feiern und Veranstaltungen gehören nicht zur normalen Nutzung der Unterkunft.',
      cta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'AMARA-Unterkünfte vergleichen'
    },
    prepare: {
      title: 'Vor der Hochzeit in Ruhe fertig machen',
      intro:
        'Die ruhige Vorbereitung vor der Trauung wird häufig als Getting Ready bezeichnet. Gerade in der letzten Stunde gibt euch eine gebuchte AMARA-Unterkunft einen privaten Rückzugsort direkt neben der Kirche – statt eines Hotelzimmers oder einer Villa außerhalb des Dorfes.',
      items: [
        {
          title: 'Ein privater Ort vor der Trauung',
          text:
            'Nutzt euer eigenes Bad und die Unterkunft zum Ankleiden, für letzte Vorbereitungen und für einen ruhigen Moment vor dem Aufbruch.'
        },
        {
          title: 'Festliche Kleidung, weniger Logistik',
          text:
            'Bis zur Kirche sind es nur wenige Schritte. Für den letzten Teil des Weges müsst ihr deshalb weder Auto noch Taxi organisieren.'
        },
        {
          title: 'Enge Gäste unter einem Dach',
          text:
            'Mehrere getrennte Unterkünfte im selben Haus halten eine kleine Gruppe nah beieinander, ohne dass ihr auf Privatsphäre verzichten müsst.'
        }
      ],
      note:
        'Das Fertigmachen ist während des bestätigten Übernachtungsaufenthalts möglich. Eine frühere Anreise oder ein Zugang außerhalb der gebuchten Check-in-Zeit muss vorab abgestimmt werden.',
      imageAlt: 'Privates Badezimmer mit Spiegel in einem AMARA-Apartment in Frigiliana'
    },
    planning: {
      title: 'Hochzeit in Frigiliana praktisch planen',
      intro:
        'Der Weg zur Kirche ist kurz, doch Anreise und Dorfwege solltet ihr früh planen – besonders wenn mehrere Gäste ungefähr gleichzeitig eintreffen.',
      items: [
        {
          title: 'Nach Frigiliana anreisen',
          text:
            'Vergleicht Auto, Taxi und öffentliche Verkehrsmittel und plant für Gepäck und Hochzeitskleidung ausreichend Zeit ein.',
          linkLabel: 'Anreise nach Frigiliana',
          linkToken: 'getting_to_frigiliana'
        },
        {
          title: 'Parken vor dem Hochzeitstag klären',
          text:
            'Die Altstadt ist für Fahrzeuge nur eingeschränkt zugänglich. Hochzeitstermine und Dorffeste können die Nachfrage erhöhen, deshalb sollten Gäste ihren Parkplatz vor der Anreise kennen.',
          linkLabel: 'Parken in Frigiliana',
          linkToken: 'frigiliana_parking'
        },
        {
          title: 'Gassen und Treppen einschätzen',
          text:
            'Frigiliana liegt am Hang. Prüft Wege und Stufen frühzeitig, wenn ältere Angehörige, kleine Kinder oder festliche Schuhe Teil des Tages sind.',
          linkLabel: 'Gassen und Treppen in Frigiliana',
          linkToken: 'frigiliana_stairs'
        },
        {
          title: 'Wetter und Jahreszeit einplanen',
          text:
            'Prüft typische Temperaturen, Regen und die Bedingungen am Abend, damit Kleidung, Fußwege und Transfers zu eurem Termin passen.',
          linkLabel: 'Wetter in Frigiliana',
          linkToken: 'weather_frigiliana'
        }
      ],
      churchNote:
        'Aktuelle Informationen zu katholischer Trauung, Unterlagen, Terminen und Abläufen erhaltet ihr direkt bei der Pfarrei San Antonio de Padua.',
      churchLinkLabel: 'Offizielle Pfarrinformationen'
    },
    faq: {
      title: 'Fragen zu Hochzeit und Unterkunft in Frigiliana',
      items: [
        {
          question: 'Wie nah liegt Casa AMARA an der Kirche San Antonio?',
          answer:
            'Casa AMARA liegt schräg gegenüber, rund 15 Meter von der Kirche entfernt. Durch die Altstadt sind es tatsächlich nur wenige Schritte.'
        },
        {
          question: 'Kann sich das Brautpaar vor der Hochzeit bei AMARA fertig machen?',
          answer:
            'Ja. Während eines bestätigten Übernachtungsaufenthalts kann das Brautpaar die private Unterkunft und das eigene Bad nutzen. Ein früherer Zugang außerhalb der bestätigten Check-in-Zeit muss vorab abgestimmt werden.'
        },
        {
          question: 'Können Hochzeitsgäste gemeinsam im selben Haus übernachten?',
          answer:
            'Ja. Eine Unterkunft bietet Platz für bis zu zwei Gäste, zwei Unterkünfte für bis zu vier und alle vier Unterkünfte in Casa AMARA gemeinsam für bis zu acht Übernachtungsgäste, sofern sie zusammen verfügbar sind.'
        },
        {
          question: 'Ist Casa AMARA eine Hochzeits- oder Feierlocation?',
          answer:
            'Nein. Casa AMARA ist eine Unterkunft nahe der Kirche San Antonio. Feiern und Veranstaltungen gehören nicht zur normalen Nutzung; Trauung und Hochzeitsfeier finden an anderen Orten statt.'
        },
        {
          question: 'Wie organisiert man eine kirchliche Hochzeit in Frigiliana?',
          answer:
            'Termine, katholische Voraussetzungen und die Durchführung der Trauung organisiert die Pfarrei. Klärt den aktuellen Ablauf direkt mit San Antonio de Padua, bevor ihr davon abhängige Reisen bucht.'
        }
      ]
    },
    closing: {
      title: 'Nur wenige Schritte von eurer Hochzeit in Frigiliana übernachten',
      paragraphs: [
        'Wählt eine private Unterkunft, bringt vier Gäste in zwei Apartments zusammen oder reserviert alle vier AMARA-Unterkünfte für eine enge Gruppe von bis zu acht Personen.',
        'Die Lage bleibt dieselbe: Casa AMARA in der Altstadt, rund 15 Meter von der Kirche San Antonio entfernt.'
      ],
      cta: 'Verfügbarkeit zur Hochzeit prüfen'
    },
    footerHighlights: {
      weddings: 'Heiraten in Frigiliana',
      location: 'Wo liegt Casa AMARA?',
      stays: 'AMARA-Unterkünfte vergleichen'
    }
  },
  es: {
    hero: {
      kicker: 'UNA BODA EN ANDALUCÍA',
      title: 'Casarse en Frigiliana',
      lead:
        'Un pueblo blanco, una iglesia del siglo XVII y vuestro alojamiento a pocos pasos de la ceremonia.',
      paragraphs: [
        'La iglesia de San Antonio de Padua está en pleno casco antiguo de Frigiliana. **Casa AMARA queda en diagonal, a unos 15 metros.**',
        'Por eso es una base especialmente práctica para la pareja, la familia cercana o los invitados que quieren dormir en el pueblo y evitar otro desplazamiento justo antes de la ceremonia.'
      ],
      cta: 'Ver opciones de alojamiento',
      imageAlt: 'Entrada de la iglesia de San Antonio de Padua en Frigiliana'
    },
    village: {
      title: 'Por qué las parejas eligen Frigiliana para su boda',
      paragraphs: [
        'En Frigiliana la boda forma parte de un pueblo histórico andaluz. Las casas blancas, las calles estrechas y la pequeña plaza de la iglesia crean un entorno íntimo y natural.',
        'La parroquia de San Antonio de Padua se construyó en el siglo XVII. Los requisitos religiosos, las fechas disponibles y la organización vigente deben acordarse siempre directamente con la parroquia.',
        'Después llega la cuestión práctica para los invitados: dónde dormir, prepararse con calma y volver tras la celebración. Ahí es donde la ubicación de Casa AMARA resulta excepcional.'
      ],
      imageAlt: 'Casas blancas del centro histórico de Frigiliana'
    },
    nearChurch: {
      title: 'El alojamiento justo enfrente, en diagonal',
      paragraphs: [
        'Casa AMARA está en la calle Chorruelo, junto al comienzo de la calle Real, a unos 15 metros de la iglesia de San Antonio. No necesitáis traslado hasta la ceremonia ni un largo paseo por el pueblo con la ropa de boda.',
        'Durante vuestra estancia reservada podéis prepararos en vuestro propio alojamiento, ultimar detalles y disfrutar de un momento tranquilo antes de cruzar hacia la iglesia.',
        'La distancia también se agradece después: quienes se alojan en AMARA vuelven a la casa en pocos pasos. Si la celebración continúa en otro lugar, acordad con tiempo el taxi, traslado o recogida con el espacio de celebración o wedding planner.'
      ],
      distance: '≈ 15 m',
      distanceLabel: 'desde Casa AMARA hasta la iglesia de San Antonio',
      imageAlt: 'Casa AMARA en la calle Chorruelo del casco antiguo de Frigiliana'
    },
    stayOptions: {
      title: 'Alojarse en AMARA',
      intro:
        'Como alojamiento para invitados de boda en Frigiliana, Casa AMARA reúne cuatro alojamientos independientes para dos huéspedes cada uno. Según disponibilidad, la reserva puede ser pequeña o reunir a un grupo cercano dentro de la misma casa.',
      items: [
        {
          eyebrow: 'UN ALOJAMIENTO',
          title: 'Para la pareja o dos invitados',
          text:
            'Reservad un alojamiento AMARA privado para una o dos personas que quieran dormir y prepararse cerca de la iglesia.'
        },
        {
          eyebrow: 'DOS ALOJAMIENTOS',
          title: 'Para un máximo de cuatro huéspedes',
          text:
            'Dos alojamientos independientes mantienen cerca a dos parejas, testigos o familiares sin perder el espacio privado.'
        },
        {
          eyebrow: 'TODA LA CASA',
          title: 'Para un máximo de ocho huéspedes',
          text:
            'Si los cuatro alojamientos están disponibles a la vez, podéis reservar Casa AMARA en conjunto para hasta ocho huéspedes.'
        }
      ],
      note:
        'Reservar toda la casa significa disponer de cuatro alojamientos independientes en el mismo edificio histórico, no de una villa común para eventos. Casa AMARA es para pernoctar; las fiestas y los eventos no forman parte del uso habitual del alojamiento.',
      cta: 'Consultar disponibilidad',
      apartmentsCta: 'Comparar alojamientos AMARA'
    },
    prepare: {
      title: 'Prepararse con calma antes de la boda',
      intro:
        'Esta preparación tranquila antes de la ceremonia suele llamarse getting ready. Durante la última hora, un alojamiento AMARA reservado os da una base privada junto a la iglesia, en lugar de un hotel o una villa fuera del pueblo.',
      items: [
        {
          title: 'Un espacio privado antes de la ceremonia',
          text:
            'Utilizad vuestro propio baño y alojamiento para vestiros, ultimar detalles y tener un momento tranquilo antes de salir.'
        },
        {
          title: 'Ropa de boda, menos logística',
          text:
            'La iglesia está a pocos pasos, por lo que no hace falta organizar coche ni taxi para el último tramo.'
        },
        {
          title: 'Invitados cercanos bajo el mismo techo',
          text:
            'Varios alojamientos separados dentro de la misma casa mantienen unido al grupo sin renunciar a la privacidad.'
        }
      ],
      note:
        'El uso para prepararos forma parte de la estancia confirmada. Cualquier llegada anticipada o acceso fuera del horario de entrada reservado debe acordarse previamente.',
      imageAlt: 'Baño privado con espejo en un apartamento AMARA de Frigiliana'
    },
    planning: {
      title: 'Planificar una boda en Frigiliana',
      intro:
        'La iglesia está cerca, pero conviene planificar con tiempo la llegada y los recorridos por el pueblo, sobre todo si varios invitados llegan a la vez.',
      items: [
        {
          title: 'Llegar a Frigiliana',
          text:
            'Comparad coche, taxi y transporte público y reservad tiempo suficiente para el equipaje y la ropa de boda.',
          linkLabel: 'Cómo llegar a Frigiliana',
          linkToken: 'getting_to_frigiliana'
        },
        {
          title: 'Resolver el aparcamiento antes de la boda',
          text:
            'El acceso de vehículos al casco antiguo es limitado. Las bodas y fiestas del pueblo pueden aumentar la demanda, así que conviene saber dónde aparcar antes de llegar.',
          linkLabel: 'Aparcar en Frigiliana',
          linkToken: 'frigiliana_parking'
        },
        {
          title: 'Conocer las calles y escaleras',
          text:
            'Frigiliana está en una ladera. Revisad rutas y peldaños si participan familiares mayores, niños pequeños o zapatos de vestir.',
          linkLabel: 'Calles y escaleras de Frigiliana',
          linkToken: 'frigiliana_stairs'
        },
        {
          title: 'Tener en cuenta el tiempo y la estación',
          text:
            'Consultad las temperaturas habituales, la lluvia y las condiciones al anochecer para adaptar la ropa, los trayectos a pie y los traslados a la fecha elegida.',
          linkLabel: 'Tiempo y clima en Frigiliana',
          linkToken: 'weather_frigiliana'
        }
      ],
      churchNote:
        'Para información actual sobre bodas católicas, documentación, fechas y organización parroquial, contactad directamente con la parroquia de San Antonio de Padua.',
      churchLinkLabel: 'Información oficial de la parroquia'
    },
    faq: {
      title: 'Preguntas sobre bodas y alojamiento en Frigiliana',
      items: [
        {
          question: '¿A qué distancia está Casa AMARA de la iglesia de San Antonio?',
          answer:
            'Casa AMARA queda en diagonal, a unos 15 metros de la iglesia. El recorrido por el casco histórico son realmente pocos pasos.'
        },
        {
          question: '¿Puede la pareja prepararse en AMARA antes de la boda?',
          answer:
            'Sí. Durante una estancia confirmada la pareja puede utilizar su alojamiento y baño privados. Cualquier acceso anterior a la hora de entrada confirmada debe acordarse previamente.'
        },
        {
          question: '¿Pueden los invitados alojarse juntos en la misma casa?',
          answer:
            'Sí. Un alojamiento admite hasta dos huéspedes, dos alojamientos hasta cuatro y los cuatro alojamientos de Casa AMARA hasta ocho huéspedes cuando están disponibles conjuntamente.'
        },
        {
          question: '¿Casa AMARA es un lugar para bodas o celebraciones?',
          answer:
            'No. Casa AMARA es un alojamiento cerca de la iglesia de San Antonio. Las fiestas y eventos no forman parte del uso normal; la ceremonia y la celebración se realizan en otros lugares.'
        },
        {
          question: '¿Cómo se organiza una boda religiosa en Frigiliana?',
          answer:
            'Las fechas, los requisitos católicos y la organización de la ceremonia corresponden a la parroquia. Confirmad el proceso actual directamente con San Antonio de Padua antes de reservar viajes que dependan de la fecha.'
        }
      ]
    },
    closing: {
      title: 'Alojaos a pocos pasos de vuestra boda en Frigiliana',
      paragraphs: [
        'Elegid un alojamiento privado, reunid a cuatro huéspedes en dos o reservad los cuatro alojamientos AMARA para un grupo cercano de hasta ocho personas.',
        'La ubicación siempre es la misma: Casa AMARA en el casco antiguo, a unos 15 metros de la iglesia de San Antonio.'
      ],
      cta: 'Consultar disponibilidad para la boda'
    },
    footerHighlights: {
      weddings: 'Casarse en Frigiliana',
      location: '¿Dónde está Casa AMARA?',
      stays: 'Comparar alojamientos AMARA'
    }
  },
  nl: {
    hero: {
      kicker: 'EEN BRUILOFT IN ANDALUSIË',
      title: 'Trouwen in Frigiliana',
      lead:
        'Een wit dorp, een kerk uit de zeventiende eeuw en jullie verblijf op slechts een paar stappen van de ceremonie.',
      paragraphs: [
        'De kerk San Antonio de Padua staat midden in de oude kern van Frigiliana. **Casa AMARA ligt er schuin tegenover, op ongeveer 15 meter afstand.**',
        'Daardoor is het huis een bijzonder praktische uitvalsbasis voor het bruidspaar, naaste familie of bruiloftsgasten die in het dorp willen overnachten en vlak voor de ceremonie geen extra rit willen maken.'
      ],
      cta: 'Bekijk de verblijfsmogelijkheden',
      imageAlt: 'Ingang van de kerk San Antonio de Padua in Frigiliana'
    },
    village: {
      title: 'Waarom stellen kiezen voor trouwen in Frigiliana',
      paragraphs: [
        'In Frigiliana wordt de bruiloft onderdeel van een historisch Andalusisch dorp. Witte huizen, smalle straatjes en het kleine kerkplein vormen een intieme, vanzelfsprekende omgeving.',
        'De parochiekerk San Antonio de Padua werd in de zeventiende eeuw gebouwd. Kerkelijke voorwaarden, beschikbare data en de actuele procedure moeten altijd rechtstreeks met de parochie worden afgestemd.',
        'Daarna volgt voor gasten de praktische vraag: waar kunnen zij slapen, zich rustig klaarmaken en na de viering terugkomen? Juist daar is de ligging van Casa AMARA uitzonderlijk.'
      ],
      imageAlt: 'Witte huizen in het historische centrum van Frigiliana'
    },
    nearChurch: {
      title: 'Het verblijf schuin tegenover de kerk',
      paragraphs: [
        'Casa AMARA ligt aan Calle Chorruelo, bij de overgang naar Calle Real, op ongeveer 15 meter van de San Antonio-kerk. Tussen verblijf en ceremonie is geen transfer of lange wandeling in feestkleding nodig.',
        'Tijdens jullie geboekte verblijf kunnen jullie je in de eigen accommodatie klaarmaken, de laatste details verzorgen en nog even tot rust komen voordat jullie naar de kerk lopen.',
        'Ook daarna is de korte afstand prettig: gasten die bij AMARA slapen, zijn in een paar stappen terug in het huis. Vindt het feest daarna op een andere locatie plaats, stem taxi, shuttle of ophaalpunt dan tijdig af met de feestlocatie of weddingplanner.'
      ],
      distance: '≈ 15 m',
      distanceLabel: 'van Casa AMARA naar de San Antonio-kerk',
      imageAlt: 'Casa AMARA aan Calle Chorruelo in de oude kern van Frigiliana'
    },
    stayOptions: {
      title: 'Overnachten bij AMARA',
      intro:
        'Als accommodatie voor bruiloftsgasten in Frigiliana biedt Casa AMARA vier zelfstandige verblijven voor elk twee gasten. Afhankelijk van de beschikbaarheid kan de boeking klein blijven of een hechte groep in hetzelfde huis samenbrengen.',
      items: [
        {
          eyebrow: 'ÉÉN VERBLIJF',
          title: 'Voor het bruidspaar of twee gasten',
          text:
            'Boek één privéverblijf van AMARA voor één of twee personen die dicht bij de kerk willen slapen en zich daar willen klaarmaken.'
        },
        {
          eyebrow: 'TWEE VERBLIJVEN',
          title: 'Voor maximaal vier gasten',
          text:
            'Twee zelfstandige verblijven houden twee stellen, getuigen of naaste familie dicht bij elkaar en geven iedereen toch privéruimte.'
        },
        {
          eyebrow: 'HET HELE HUIS',
          title: 'Voor maximaal acht gasten',
          text:
            'Wanneer alle vier de verblijven tegelijk beschikbaar zijn, kunnen jullie heel Casa AMARA reserveren voor maximaal acht overnachtende gasten.'
        }
      ],
      note:
        'Het hele huis boeken betekent vier zelfstandige accommodaties in hetzelfde historische gebouw, niet één gedeelde evenementen-villa. Casa AMARA is bedoeld om te overnachten; feesten en evenementen horen niet bij het normale gebruik.',
      cta: 'Bekijk beschikbaarheid',
      apartmentsCta: 'Vergelijk de AMARA-verblijven'
    },
    prepare: {
      title: 'Rustig klaarmaken voor de bruiloft',
      intro:
        'Deze rustige voorbereiding voor de ceremonie wordt vaak de getting ready genoemd. In het laatste uur geeft een geboekt AMARA-verblijf jullie een privébasis naast de kerk, in plaats van een hotelkamer of villa buiten het dorp.',
      items: [
        {
          title: 'Een privéplek voor de ceremonie',
          text:
            'Gebruik jullie eigen badkamer en verblijf om je aan te kleden, de laatste details te verzorgen en even rustig te worden voor vertrek.'
        },
        {
          title: 'Feestkleding, minder logistiek',
          text:
            'De kerk ligt op slechts een paar stappen, zodat voor het laatste deel van de route geen auto of taxi nodig is.'
        },
        {
          title: 'Naaste gasten onder één dak',
          text:
            'Meerdere aparte verblijven in hetzelfde huis houden een kleine groep bij elkaar zonder dat iemand privacy hoeft op te geven.'
        }
      ],
      note:
        'Klaarmaken is mogelijk tijdens het bevestigde overnachtingsverblijf. Vroege aankomst of toegang buiten de geboekte inchecktijd moet vooraf worden afgesproken.',
      imageAlt: 'Privébadkamer met spiegel in een AMARA-appartement in Frigiliana'
    },
    planning: {
      title: 'Een bruiloftsverblijf in Frigiliana plannen',
      intro:
        'De ceremonie is dichtbij, maar aankomst en routes door het dorp verdienen een vroeg plan, zeker wanneer meerdere gasten rond dezelfde tijd arriveren.',
      items: [
        {
          title: 'Naar Frigiliana reizen',
          text:
            'Vergelijk auto, taxi en openbaar vervoer en plan voldoende tijd voor bagage en bruiloftskleding.',
          linkLabel: 'Naar Frigiliana reizen',
          linkToken: 'getting_to_frigiliana'
        },
        {
          title: 'Parkeren vooraf regelen',
          text:
            'De oude kern is beperkt toegankelijk voor auto’s. Bruiloften en dorpsfeesten kunnen de druk verhogen, dus gasten moeten voor aankomst weten waar zij willen parkeren.',
          linkLabel: 'Parkeren in Frigiliana',
          linkToken: 'frigiliana_parking'
        },
        {
          title: 'Straatjes en trappen begrijpen',
          text:
            'Frigiliana ligt tegen een helling. Controleer routes en treden wanneer oudere familieleden, kleine kinderen of nette schoenen deel van de dag zijn.',
          linkLabel: 'Straatjes en trappen in Frigiliana',
          linkToken: 'frigiliana_stairs'
        },
        {
          title: 'Houd rekening met weer en seizoen',
          text:
            'Bekijk gebruikelijke temperaturen, regen en avondomstandigheden, zodat kleding, looproutes en transfers bij jullie datum passen.',
          linkLabel: 'Weer in Frigiliana',
          linkToken: 'weather_frigiliana'
        }
      ],
      churchNote:
        'Neem voor actuele informatie over katholieke huwelijken, documenten, data en parochieafspraken rechtstreeks contact op met de parochie San Antonio de Padua.',
      churchLinkLabel: 'Officiële parochie-informatie'
    },
    faq: {
      title: 'Vragen over trouwen en overnachten in Frigiliana',
      items: [
        {
          question: 'Hoe dicht ligt Casa AMARA bij de San Antonio-kerk?',
          answer:
            'Casa AMARA ligt schuin tegenover de kerk, op ongeveer 15 meter afstand. Door de historische kern zijn het werkelijk maar een paar stappen.'
        },
        {
          question: 'Kan het bruidspaar zich voor de bruiloft bij AMARA klaarmaken?',
          answer:
            'Ja. Tijdens een bevestigd overnachtingsverblijf kan het bruidspaar de privéaccommodatie en eigen badkamer gebruiken. Eerdere toegang dan de bevestigde inchecktijd moet vooraf worden afgesproken.'
        },
        {
          question: 'Kunnen bruiloftsgasten samen in hetzelfde huis verblijven?',
          answer:
            'Ja. Eén verblijf biedt plaats aan maximaal twee gasten, twee verblijven aan vier en alle vier de verblijven van Casa AMARA samen aan maximaal acht overnachtende gasten wanneer ze tegelijk beschikbaar zijn.'
        },
        {
          question: 'Is Casa AMARA een trouw- of feestlocatie?',
          answer:
            'Nee. Casa AMARA is accommodatie bij de San Antonio-kerk. Feesten en evenementen horen niet bij het normale gebruik; de ceremonie en receptie vinden elders plaats.'
        },
        {
          question: 'Hoe regel je een kerkelijk huwelijk in Frigiliana?',
          answer:
            'Data, katholieke voorwaarden en de organisatie van de ceremonie worden door de parochie beheerd. Bevestig de actuele procedure rechtstreeks met San Antonio de Padua voordat jullie afhankelijke reizen boeken.'
        }
      ]
    },
    closing: {
      title: 'Overnacht op een paar stappen van jullie bruiloft in Frigiliana',
      paragraphs: [
        'Kies één privéverblijf, breng vier gasten samen in twee of reserveer alle vier AMARA-verblijven voor een hechte groep van maximaal acht personen.',
        'De ligging blijft gelijk: Casa AMARA in de oude kern, op ongeveer 15 meter van de San Antonio-kerk.'
      ],
      cta: 'Bekijk beschikbaarheid voor de bruiloft'
    },
    footerHighlights: {
      weddings: 'Trouwen in Frigiliana',
      location: 'Waar ligt Casa AMARA?',
      stays: 'Vergelijk AMARA-verblijven'
    }
  },
  sv: {
    hero: {
      kicker: 'ETT BRÖLLOP I ANDALUSIEN',
      title: 'Gifta sig i Frigiliana',
      lead:
        'En vit by, en kyrka från 1600-talet och ert boende bara några steg från vigseln.',
      paragraphs: [
        'San Antonio de Padua-kyrkan ligger mitt i Frigilianas gamla by. **Casa AMARA ligger snett mittemot, cirka 15 meter bort.**',
        'Det gör huset till en ovanligt praktisk bas för brudparet, den närmaste familjen eller bröllopsgäster som vill bo i byn och slippa ännu en resa strax före vigseln.'
      ],
      cta: 'Se boendealternativen',
      imageAlt: 'Ingången till San Antonio de Padua-kyrkan i Frigiliana'
    },
    village: {
      title: 'Varför par väljer att gifta sig i Frigiliana',
      paragraphs: [
        'I Frigiliana blir bröllopet en del av en historisk andalusisk by. Vita hus, smala gränder och det lilla kyrktorget skapar en intim miljö som känns naturlig.',
        'Församlingskyrkan San Antonio de Padua byggdes på 1600-talet. Kyrkliga krav, möjliga datum och aktuella rutiner måste alltid stämmas av direkt med församlingen.',
        'Sedan kommer den praktiska frågan för gästerna: var kan de sova, göra sig i ordning i lugn och ro och återvända efter firandet? Där är Casa AMARAs läge ovanligt.'
      ],
      imageAlt: 'Vita hus i Frigilianas historiska centrum'
    },
    nearChurch: {
      title: 'Boendet snett mittemot kyrkan',
      paragraphs: [
        'Casa AMARA ligger på Calle Chorruelo vid övergången till Calle Real, cirka 15 meter från San Antonio-kyrkan. Mellan boendet och vigseln behövs ingen transfer eller lång promenad genom byn i bröllopskläder.',
        'Under er bokade vistelse kan ni göra er i ordning i det egna boendet, förbereda de sista detaljerna och få en lugn stund innan ni går över till kyrkan.',
        'Den korta sträckan är lika värdefull efteråt: gäster som bor på AMARA är tillbaka i huset på några få steg. Om festen fortsätter på en annan plats bör taxi, transfer eller upphämtning stämmas av i god tid med festplatsen eller bröllopskoordinatorn.'
      ],
      distance: '≈ 15 m',
      distanceLabel: 'från Casa AMARA till San Antonio-kyrkan',
      imageAlt: 'Casa AMARA på Calle Chorruelo i Frigilianas gamla by'
    },
    stayOptions: {
      title: 'Bo hos AMARA',
      intro:
        'Som boende för bröllopsgäster i Frigiliana erbjuder Casa AMARA fyra fristående boenden för två gäster vardera. Beroende på tillgänglighet kan bokningen vara liten eller samla en nära grupp i samma hus.',
      items: [
        {
          eyebrow: 'ETT BOENDE',
          title: 'För brudparet eller två gäster',
          text:
            'Boka ett privat AMARA-boende för en eller två personer som vill sova och göra sig i ordning nära kyrkan.'
        },
        {
          eyebrow: 'TVÅ BOENDEN',
          title: 'För upp till fyra gäster',
          text:
            'Två fristående boenden håller två par, vittnen eller nära familj nära varandra och ger samtidigt privat utrymme.'
        },
        {
          eyebrow: 'HELA HUSET',
          title: 'För upp till åtta gäster',
          text:
            'När alla fyra boenden är lediga samtidigt kan ni boka hela Casa AMARA för upp till åtta övernattande gäster.'
        }
      ],
      note:
        'Att boka hela huset betyder fyra fristående boenden i samma historiska byggnad, inte en gemensam evenemangsvilla. Casa AMARA är till för övernattning; fester och evenemang ingår inte i normal användning.',
      cta: 'Se tillgänglighet',
      apartmentsCta: 'Jämför AMARA-boendena'
    },
    prepare: {
      title: 'Gör er i ordning utan en lång resa',
      intro:
        'Den lugna förberedelsen före vigseln kallas ofta getting ready. Under den sista timmen ger ett bokat AMARA-boende er en privat bas bredvid kyrkan i stället för ett hotellrum eller en villa utanför byn.',
      items: [
        {
          title: 'En privat plats före vigseln',
          text:
            'Använd ert eget badrum och boende för att klä er, ordna de sista detaljerna och få en lugn stund innan ni går.'
        },
        {
          title: 'Högtidskläder, mindre logistik',
          text:
            'Kyrkan ligger bara några steg bort, så ingen bil eller taxi behövs för den sista delen av vägen.'
        },
        {
          title: 'Nära gäster under samma tak',
          text:
            'Flera separata boenden i samma hus håller en liten grupp nära utan att någon behöver ge upp sin integritet.'
        }
      ],
      note:
        'Möjligheten att göra sig i ordning gäller under den bekräftade övernattningen. Tidig ankomst eller tillträde utanför bokad incheckningstid måste avtalas i förväg.',
      imageAlt: 'Privat badrum med spegel i en AMARA-lägenhet i Frigiliana'
    },
    planning: {
      title: 'Planera ett bröllopsboende i Frigiliana',
      intro:
        'Vigseln är nära, men ankomst och vägar genom byn behöver planeras tidigt, särskilt när flera gäster kommer ungefär samtidigt.',
      items: [
        {
          title: 'Resa till Frigiliana',
          text:
            'Jämför bil, taxi och kollektivtrafik och lämna gott om tid för bagage och bröllopskläder.',
          linkLabel: 'Så tar ni er till Frigiliana',
          linkToken: 'getting_to_frigiliana'
        },
        {
          title: 'Planera parkering i förväg',
          text:
            'Gamla stan har begränsad biltrafik. Bröllop och byfester kan öka trycket, så gäster bör känna till sin parkeringsplan före ankomst.',
          linkLabel: 'Parkering i Frigiliana',
          linkToken: 'frigiliana_parking'
        },
        {
          title: 'Förstå gränder och trappor',
          text:
            'Frigiliana ligger på en sluttning. Kontrollera vägar och trappsteg när äldre släktingar, små barn eller fina skor är en del av dagen.',
          linkLabel: 'Gränder och trappor i Frigiliana',
          linkToken: 'frigiliana_stairs'
        },
        {
          title: 'Planera efter väder och årstid',
          text:
            'Kontrollera normala temperaturer, regn och kvällsförhållanden så att kläder, promenader och transfer passar ert datum.',
          linkLabel: 'Vädret i Frigiliana',
          linkToken: 'weather_frigiliana'
        }
      ],
      churchNote:
        'För aktuell information om katolsk vigsel, dokument, datum och församlingens rutiner kontaktar ni San Antonio de Padua-församlingen direkt.',
      churchLinkLabel: 'Officiell församlingsinformation'
    },
    faq: {
      title: 'Frågor om bröllop och boende i Frigiliana',
      items: [
        {
          question: 'Hur nära ligger Casa AMARA San Antonio-kyrkan?',
          answer:
            'Casa AMARA ligger snett mittemot kyrkan, cirka 15 meter bort. Genom den historiska bykärnan är det verkligen bara några få steg.'
        },
        {
          question: 'Kan brudparet göra sig i ordning på AMARA före bröllopet?',
          answer:
            'Ja. Under en bekräftad övernattning kan brudparet använda det privata boendet och det egna badrummet. Tidigare tillträde än bekräftad incheckningstid måste avtalas i förväg.'
        },
        {
          question: 'Kan bröllopsgäster bo tillsammans i samma hus?',
          answer:
            'Ja. Ett boende rymmer upp till två gäster, två boenden upp till fyra och alla fyra boenden i Casa AMARA upp till åtta övernattande gäster när de är lediga samtidigt.'
        },
        {
          question: 'Är Casa AMARA en plats för bröllop eller fest?',
          answer:
            'Nej. Casa AMARA är boende nära San Antonio-kyrkan. Fester och evenemang ingår inte i normal användning; vigsel och mottagning sker på andra platser.'
        },
        {
          question: 'Hur ordnar man en kyrklig vigsel i Frigiliana?',
          answer:
            'Datum, katolska krav och genomförandet av vigseln hanteras av församlingen. Bekräfta den aktuella processen direkt med San Antonio de Padua innan ni bokar resor som beror på datumet.'
        }
      ]
    },
    closing: {
      title: 'Bo några steg från ert bröllop i Frigiliana',
      paragraphs: [
        'Välj ett privat boende, samla fyra gäster i två eller boka alla fyra AMARA-boenden för en nära grupp på upp till åtta personer.',
        'Läget är alltid detsamma: Casa AMARA i gamla stan, cirka 15 meter från San Antonio-kyrkan.'
      ],
      cta: 'Se tillgänglighet för bröllopet'
    },
    footerHighlights: {
      weddings: 'Gifta sig i Frigiliana',
      location: 'Var ligger Casa AMARA?',
      stays: 'Jämför AMARA-boenden'
    }
  }
};
