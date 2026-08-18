import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type CasaAmaraGroupGuideToken =
  | 'getting_to_frigiliana'
  | 'frigiliana_parking'
  | 'frigiliana_stairs'
  | 'location_frigiliana';

type StayToken = 'farah' | 'lounis' | 'zaid' | 'maha';

interface CasaAmaraGroupsCopy {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    facts: string;
    qualifier: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  model: {
    eyebrow: string;
    title: string;
    intro: string;
    options: Array<{ guests: string; title: string; text: string }>;
    note: string;
  };
  stays: {
    eyebrow: string;
    title: string;
    intro: string;
    contexts: Record<StayToken, string>;
    linkLabel: string;
    labels: {
      guests: string;
      bathroom: string;
      bed: string;
      kitchen: string;
      outdoor: string;
      access: string;
    };
  };
  connection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ title: string; text: string }>;
    imageAlt: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    intro: string;
    worksTitle: string;
    works: string[];
    limitsTitle: string;
    limits: string[];
    note: string;
    imageAlt: string;
  };
  location: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    links: Array<{ token: CasaAmaraGroupGuideToken; label: string; text: string }>;
  };
  booking: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    steps: Array<{ num: string; headline: string; text: string }>;
    primaryCta: string;
    secondaryCta: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  closing: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    groups: string;
    location: string;
    stays: string;
  };
}

export const casaAmaraGroupsSeo: AmaraAuthoringSeo = {
  version: '2026-08-18-casa-amara-groups-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-maha/29-amara-frigiliana.jpg',
  languages: {
    en: {
      title: 'Accommodation for 4–8 in Frigiliana | Casa AMARA',
      description: 'Stay together in Frigiliana with your own space: three apartments and one double room for 4–8 guests at Casa AMARA. Combined stays by enquiry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Unterkunft für 4–8 Personen in Frigiliana | Casa AMARA',
      description: 'Gemeinsam in Frigiliana wohnen und trotzdem Privatsphäre haben: drei Apartments und ein Doppelzimmer für 4–8 Gäste. Kombinierte Buchung auf Anfrage.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojamiento para 4–8 en Frigiliana | Casa AMARA',
      description: 'Alojaos juntos en Frigiliana conservando vuestro espacio: tres apartamentos y una habitación doble para 4–8 huéspedes. Reserva conjunta bajo consulta.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Verblijf voor 4–8 personen in Frigiliana | Casa AMARA',
      description: 'Samen verblijven in Frigiliana met eigen ruimte: drie appartementen en één tweepersoonskamer voor 4–8 gasten. Gecombineerd verblijf op aanvraag.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Boende för 4–8 personer i Frigiliana | Casa AMARA',
      description: 'Bo tillsammans i Frigiliana med eget utrymme: tre lägenheter och ett dubbelrum för 4–8 gäster. Kombinerad vistelse bokas på förfrågan.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const casaAmaraGroupsContent: Record<AmaraLanguage, CasaAmaraGroupsCopy> = {
  en: {
    hero: {
      kicker: 'FRIGILIANA · 4–8 GUESTS',
      title: 'Stay together. Keep your own space.',
      lead: 'Casa AMARA brings three apartments and one double room together under one historic roof in Frigiliana — a calm base for 4–8 registered overnight guests.',
      facts: '3 apartments · 1 double room · 4 private bathrooms',
      qualifier: 'Designed for small groups who value privacy and quiet. **It is not a party house or an event venue.**',
      primaryCta: 'Enquire for 4–8 guests',
      secondaryCta: 'Compare the four stays',
      imageAlt: 'Large shaded terrace at Casa AMARA Maha in Frigiliana'
    },
    model: {
      eyebrow: 'ONE HOUSE, SEVERAL STAYS',
      title: 'Book the space your group actually needs',
      intro: 'Each AMARA stay accommodates up to two guests. We coordinate **two, three or four stays for the same dates**, depending on your group size and the available combination.',
      options: [
        { guests: '4 GUESTS', title: 'Two private stays', text: 'A natural fit for two couples or four adults who want to be close without sharing every room.' },
        { guests: '5–6 GUESTS', title: 'Three private stays', text: 'Three separate sleeping spaces and three bathrooms create an easy rhythm for families or friends.' },
        { guests: '7–8 GUESTS', title: 'All four stays', text: 'Reserve Farah, Lounis, Zaid and Maha together and Casa AMARA is exclusive to your group.' }
      ],
      note: 'The exact combination depends on availability. A booking of all four stays guarantees exclusive use of the house.'
    },
    stays: {
      eyebrow: 'THE FOUR STAYS',
      title: 'Different characters, one address',
      intro: 'All four stays are at Calle Chorruelo 5 in Frigiliana. Each has its own entrance and private bathroom; the three apartments have full kitchens, while Farah has a compact tea kitchen.',
      contexts: {
        farah: 'A compact double room for the guests who prefer simple, easy access and do not need a full kitchen.',
        lounis: 'The largest interior space, with a generous private terrace and a full kitchen.',
        zaid: 'A private apartment and terrace that can be connected with Maha for a coordinated group stay.',
        maha: 'A bright apartment with a 64 m² terrace, outdoor kitchen and the largest place for the group to sit together.'
      },
      linkLabel: 'View this stay',
      labels: { guests: 'guests', bathroom: 'private bathroom', bed: 'Bed', kitchen: 'Kitchen', outdoor: 'Outdoor space', access: 'Access' }
    },
    connection: {
      eyebrow: 'CONNECTED WHEN YOU NEED IT',
      title: 'Zaid and Maha can become one connected group zone',
      paragraphs: [
        'Zaid and Maha are linked by an outdoor staircase with a small lockable door. It normally stays closed. When both apartments are booked for one group, we can open it so the apartments and their terraces connect directly.',
        'Maha’s large terrace has seating for up to eight people. It is a place to talk, read and share an evening — but there is no dining table set up for eight and no shared indoor lounge.'
      ],
      facts: [
        { title: 'Together', text: 'Same house, same address, connected Zaid–Maha terraces when booked as one group, and seating for eight on Maha’s terrace.' },
        { title: 'Still private', text: 'Four separate stays, four private bathrooms, separate sleeping spaces and three full kitchens plus Farah’s tea kitchen.' },
        { title: 'Exclusive at full-house level', text: 'When all four stays are reserved together, no other guests stay in Casa AMARA.' }
      ],
      imageAlt: 'Outdoor staircase and lockable connection between the Zaid and Maha terraces at Casa AMARA'
    },
    fit: {
      eyebrow: 'IS CASA AMARA RIGHT FOR YOU?',
      title: 'A quiet house for people travelling together — not a conventional villa',
      intro: 'Casa AMARA works best when your group wants a shared location and independent personal space. The historic house and old-town setting are part of the experience, so clarity matters before you enquire.',
      worksTitle: 'Especially well suited to',
      works: ['Two to four couples', 'Adult families and multigenerational trips', 'Quiet groups of friends', 'Wedding guests sleeping near San Antonio church'],
      limitsTitle: 'Important to know',
      limits: ['No pool and no shared indoor living room', 'No dining setup for eight people', 'No parties, events or unregistered gatherings', 'Steps and stairs differ by stay'],
      note: 'This is not an eight-person villa behind one front door. It is a small house of four independent stays that can be coordinated for one group.',
      imageAlt: 'White façade of Casa AMARA in Frigiliana old town'
    },
    location: {
      eyebrow: 'IN FRIGILIANA OLD TOWN',
      title: 'Village life begins outside the door',
      paragraphs: [
        'Casa AMARA sits beside Calle Real, close to restaurants, bars, small shops and San Antonio church. Your group can split up easily and meet again without planning every movement around a car.',
        'Frigiliana is a hillside village. There is no parking at the house, vehicle access in the old town can be time-restricted, and some routes include steps. Our practical guides help every member of the group arrive with the right expectations.'
      ],
      links: [
        { token: 'getting_to_frigiliana', label: 'Getting to Frigiliana', text: 'Compare airport, bus, taxi and car options.' },
        { token: 'frigiliana_parking', label: 'Parking in Frigiliana', text: 'Know where to leave the car before arrival.' },
        { token: 'frigiliana_stairs', label: 'Streets and stairs', text: 'Understand the terrain and access before choosing rooms.' },
        { token: 'location_frigiliana', label: 'Living in the village', text: 'See what the old-town location feels like day to day.' }
      ]
    },
    booking: {
      eyebrow: 'COMBINED AVAILABILITY',
      title: 'One enquiry, coordinated by us',
      paragraphs: [
        'Our current booking system cannot place several AMARA stays into one online checkout. Combined stays are therefore arranged directly with us by enquiry.',
        'Tell us your dates, total guest count and preferred setup. We will check which stays are available together and reply with the suitable combination and next booking steps.'
      ],
      steps: [
        { num: '01', headline: 'Send your dates', text: 'Include arrival, departure and the number of registered overnight guests.' },
        { num: '02', headline: 'We check the combination', text: 'We match two, three or four available stays to your group.' },
        { num: '03', headline: 'Receive a coordinated offer', text: 'We confirm the setup, availability and how to complete the reservations.' }
      ],
      primaryCta: 'Enquire about your dates',
      secondaryCta: 'Compare individual stays'
    },
    faq: {
      title: 'Questions before you enquire',
      items: [
        { question: 'Can eight people stay at Casa AMARA?', answer: 'Yes. Farah, Lounis, Zaid and Maha each accommodate up to two guests, giving a total capacity of eight registered overnight guests.' },
        { question: 'Do we have the whole house to ourselves?', answer: 'Yes, if all four stays are reserved together. That combination guarantees exclusive use of Casa AMARA for your group.' },
        { question: 'Are all four stays connected inside?', answer: 'No. They remain independent stays. Zaid and Maha can be connected via their outdoor staircase and terraces when both are booked for the same group.' },
        { question: 'Can all eight of us eat together at one table?', answer: 'There is seating for eight on Maha’s terrace, but no dining table set up for eight and no shared indoor dining room.' },
        { question: 'Does every stay have a kitchen?', answer: 'Lounis, Zaid and Maha have full kitchens. Farah has a compact tea kitchen with a refrigerator, not a full kitchen.' },
        { question: 'Can we book the combination instantly online?', answer: 'Not yet. Availability across several stays is checked and coordinated manually, so please send us an enquiry.' },
        { question: 'Are celebrations or parties allowed?', answer: 'No. Casa AMARA is intended for quiet overnight stays, not parties, events or unregistered gatherings.' }
      ]
    },
    closing: {
      title: 'Tell us who is travelling',
      text: 'Share your dates and group size. We will tell you honestly which combination works — and whether Casa AMARA is the right fit.',
      cta: 'Enquire for 4–8 guests'
    },
    footer: { groups: 'Casa AMARA for 4–8', location: 'Frigiliana location', stays: 'Compare all stays' }
  },

  de: {
    hero: {
      kicker: 'FRIGILIANA · 4–8 GÄSTE',
      title: 'Gemeinsam reisen. Mit eigenem Rückzugsort.',
      lead: 'Casa AMARA vereint drei Apartments und ein Doppelzimmer unter einem historischen Dach in Frigiliana – eine ruhige Basis für 4–8 angemeldete Übernachtungsgäste.',
      facts: '3 Apartments · 1 Doppelzimmer · 4 private Bäder',
      qualifier: 'Für kleine Gruppen, denen Privatsphäre und Ruhe wichtig sind. **Kein Partyhaus und keine Eventlocation.**',
      primaryCta: 'Für 4–8 Gäste anfragen',
      secondaryCta: 'Die vier Unterkünfte vergleichen',
      imageAlt: 'Große schattige Terrasse von Casa AMARA Maha in Frigiliana'
    },
    model: {
      eyebrow: 'EIN HAUS, MEHRERE UNTERKÜNFTE',
      title: 'Bucht genau den Raum, den eure Gruppe braucht',
      intro: 'Jede AMARA Unterkunft ist für maximal zwei Gäste ausgelegt. Je nach Gruppengröße und Verfügbarkeit koordinieren wir **für denselben Zeitraum zwei, drei oder vier Unterkünfte**.',
      options: [
        { guests: '4 GÄSTE', title: 'Zwei private Unterkünfte', text: 'Ideal für zwei Paare oder vier Erwachsene, die nah beieinander wohnen möchten, ohne jeden Raum zu teilen.' },
        { guests: '5–6 GÄSTE', title: 'Drei private Unterkünfte', text: 'Drei getrennte Schlafbereiche und drei Bäder schaffen einen entspannten Rhythmus für Familie oder Freunde.' },
        { guests: '7–8 GÄSTE', title: 'Alle vier Unterkünfte', text: 'Bucht Farah, Lounis, Zaid und Maha gemeinsam – dann gehört Casa AMARA exklusiv eurer Gruppe.' }
      ],
      note: 'Die genaue Kombination hängt von der Verfügbarkeit ab. Die gemeinsame Buchung aller vier Unterkünfte garantiert die Exklusivität des Hauses.'
    },
    stays: {
      eyebrow: 'DIE VIER UNTERKÜNFTE',
      title: 'Unterschiedlicher Charakter, dieselbe Adresse',
      intro: 'Alle vier Unterkünfte liegen in der Calle Chorruelo 5 in Frigiliana. Jede hat einen eigenen Eingang und ein privates Bad; die drei Apartments besitzen eine vollwertige Küche, Farah eine kompakte Teeküche.',
      contexts: {
        farah: 'Ein kompaktes Doppelzimmer für Gäste, die es einfach mögen, einen leichten Zugang schätzen und keine vollwertige Küche brauchen.',
        lounis: 'Der größte Innenraum im Haus, dazu eine großzügige private Terrasse und eine vollwertige Küche.',
        zaid: 'Ein privates Apartment mit Terrasse, das für Gruppen direkt mit Maha verbunden werden kann.',
        maha: 'Ein helles Apartment mit 64 m² Terrasse, Außenküche und dem größten gemeinsamen Sitzbereich.'
      },
      linkLabel: 'Unterkunft ansehen',
      labels: { guests: 'Gäste', bathroom: 'privates Bad', bed: 'Bett', kitchen: 'Küche', outdoor: 'Außenbereich', access: 'Zugang' }
    },
    connection: {
      eyebrow: 'VERBUNDEN, WENN IHR ES BRAUCHT',
      title: 'Zaid und Maha werden zum verbundenen Gruppenbereich',
      paragraphs: [
        'Zaid und Maha sind über eine Außentreppe mit einer kleinen verschließbaren Tür verbunden. Normalerweise bleibt sie zu. Bucht eine Gruppe beide Apartments, öffnen wir sie auf Wunsch, sodass Apartments und Terrassen direkt miteinander verbunden sind.',
        'Auf Mahas großer Terrasse gibt es Sitzplätze für bis zu acht Personen. Sie eignet sich für Gespräche, Lesen und gemeinsame Abende – allerdings gibt es keinen Esstisch für acht und keinen gemeinsamen Innenwohnraum.'
      ],
      facts: [
        { title: 'Gemeinsam', text: 'Dasselbe Haus, dieselbe Adresse, verbundene Zaid–Maha-Terrassen bei Gruppenbuchung und Sitzplätze für acht auf Mahas Terrasse.' },
        { title: 'Trotzdem privat', text: 'Vier eigenständige Unterkünfte, vier private Bäder, getrennte Schlafräume sowie drei vollwertige Küchen plus Farahs Teeküche.' },
        { title: 'Exklusiv bei Komplettbuchung', text: 'Sind alle vier Unterkünfte gemeinsam gebucht, wohnen keine anderen Gäste in Casa AMARA.' }
      ],
      imageAlt: 'Außentreppe und verschließbare Verbindung zwischen den Terrassen von Zaid und Maha in Casa AMARA'
    },
    fit: {
      eyebrow: 'PASST CASA AMARA ZU EUCH?',
      title: 'Ein ruhiges Haus für gemeinsam Reisende – keine klassische Villa',
      intro: 'Casa AMARA passt am besten, wenn ihr einen gemeinsamen Standort und zugleich persönliche Rückzugsräume sucht. Das historische Haus und die Altstadtlage gehören zum Erlebnis; deshalb sollten die Rahmenbedingungen vor der Anfrage klar sein.',
      worksTitle: 'Besonders passend für',
      works: ['Zwei bis vier Paare', 'Erwachsene Familien und Mehrgenerationenreisen', 'Ruhige Freundesgruppen', 'Hochzeitsgäste nahe der Kirche San Antonio'],
      limitsTitle: 'Wichtig zu wissen',
      limits: ['Kein Pool und kein gemeinsamer Innenwohnraum', 'Kein Essplatz für acht Personen', 'Keine Partys, Events oder nicht angemeldete Treffen', 'Stufen und Treppen unterscheiden sich je Unterkunft'],
      note: 'Dies ist keine Villa für acht Personen hinter einer gemeinsamen Eingangstür, sondern ein kleines Haus mit vier eigenständigen Unterkünften, die für eine Gruppe koordiniert werden können.',
      imageAlt: 'Weiße Fassade von Casa AMARA in der Altstadt von Frigiliana'
    },
    location: {
      eyebrow: 'IN FRIGILIANAS ALTSTADT',
      title: 'Das Dorfleben beginnt vor der Tür',
      paragraphs: [
        'Casa AMARA liegt direkt an der Calle Real, nahe Restaurants, Bars, kleinen Geschäften und der Kirche San Antonio. Eure Gruppe kann sich unkompliziert aufteilen und wieder treffen, ohne jeden Weg rund um ein Auto planen zu müssen.',
        'Frigiliana ist ein Bergdorf. Am Haus gibt es keinen Parkplatz, die Zufahrt in die Altstadt kann zeitlich eingeschränkt sein und manche Wege führen über Stufen. Unsere praktischen Guides helfen allen, mit den richtigen Erwartungen anzureisen.'
      ],
      links: [
        { token: 'getting_to_frigiliana', label: 'Anreise nach Frigiliana', text: 'Flughafen, Bus, Taxi und Mietwagen vergleichen.' },
        { token: 'frigiliana_parking', label: 'Parken in Frigiliana', text: 'Vor der Anreise wissen, wo das Auto stehen kann.' },
        { token: 'frigiliana_stairs', label: 'Gassen und Treppen', text: 'Gelände und Zugänge vor der Zimmerwahl verstehen.' },
        { token: 'location_frigiliana', label: 'Leben im Dorf', text: 'Erfahrt, wie sich die Altstadtlage im Alltag anfühlt.' }
      ]
    },
    booking: {
      eyebrow: 'GEMEINSAME VERFÜGBARKEIT',
      title: 'Eine Anfrage, von uns koordiniert',
      paragraphs: [
        'Unser aktuelles Buchungssystem kann mehrere AMARA Unterkünfte noch nicht in einem Online-Checkout zusammenführen. Kombinierte Aufenthalte organisieren wir deshalb direkt per Anfrage.',
        'Nennt uns eure Reisedaten, die Gästezahl und eure Wunschaufteilung. Wir prüfen, welche Unterkünfte gemeinsam verfügbar sind, und antworten mit der passenden Kombination und den nächsten Buchungsschritten.'
      ],
      steps: [
        { num: '01', headline: 'Reisedaten senden', text: 'Bitte Anreise, Abreise und Zahl der angemeldeten Übernachtungsgäste angeben.' },
        { num: '02', headline: 'Wir prüfen die Kombination', text: 'Wir stimmen zwei, drei oder vier verfügbare Unterkünfte auf eure Gruppe ab.' },
        { num: '03', headline: 'Koordiniertes Angebot erhalten', text: 'Wir bestätigen Aufteilung, Verfügbarkeit und den Weg zur Buchung.' }
      ],
      primaryCta: 'Verfügbarkeit anfragen',
      secondaryCta: 'Einzelne Unterkünfte vergleichen'
    },
    faq: {
      title: 'Fragen vor eurer Anfrage',
      items: [
        { question: 'Können acht Personen in Casa AMARA übernachten?', answer: 'Ja. Farah, Lounis, Zaid und Maha bieten jeweils Platz für maximal zwei Gäste – insgesamt also für acht angemeldete Übernachtungsgäste.' },
        { question: 'Haben wir das ganze Haus für uns?', answer: 'Ja, wenn alle vier Unterkünfte gemeinsam reserviert werden. Diese Kombination garantiert die exklusive Nutzung von Casa AMARA für eure Gruppe.' },
        { question: 'Sind alle vier Unterkünfte innen verbunden?', answer: 'Nein. Sie bleiben eigenständige Unterkünfte. Zaid und Maha können über Außentreppe und Terrassen verbunden werden, wenn beide für dieselbe Gruppe gebucht sind.' },
        { question: 'Können alle acht gemeinsam an einem Tisch essen?', answer: 'Auf Mahas Terrasse gibt es Sitzplätze für acht, aber keinen Esstisch für acht und keinen gemeinsamen Essbereich im Haus.' },
        { question: 'Hat jede Unterkunft eine Küche?', answer: 'Lounis, Zaid und Maha haben vollwertige Küchen. Farah besitzt eine kompakte Teeküche mit Kühlschrank, keine vollwertige Küche.' },
        { question: 'Können wir die Kombination sofort online buchen?', answer: 'Noch nicht. Die gemeinsame Verfügbarkeit mehrerer Unterkünfte wird manuell geprüft und koordiniert – bitte sendet uns eine Anfrage.' },
        { question: 'Sind Feiern oder Partys erlaubt?', answer: 'Nein. Casa AMARA ist für ruhige Übernachtungsaufenthalte gedacht, nicht für Partys, Events oder nicht angemeldete Treffen.' }
      ]
    },
    closing: {
      title: 'Erzählt uns, wer mitreist',
      text: 'Schickt uns eure Daten und Gruppengröße. Wir sagen euch ehrlich, welche Kombination funktioniert – und ob Casa AMARA zu euch passt.',
      cta: 'Für 4–8 Gäste anfragen'
    },
    footer: { groups: 'Casa AMARA für 4–8', location: 'Lage in Frigiliana', stays: 'Alle Unterkünfte vergleichen' }
  },

  es: {
    hero: {
      kicker: 'FRIGILIANA · 4–8 HUÉSPEDES',
      title: 'Viajar juntos. Con vuestro propio espacio.',
      lead: 'Casa AMARA reúne tres apartamentos y una habitación doble bajo un mismo techo histórico en Frigiliana: una base tranquila para 4–8 huéspedes alojados.',
      facts: '3 apartamentos · 1 habitación doble · 4 baños privados',
      qualifier: 'Pensado para grupos pequeños que valoran la privacidad y la tranquilidad. **No es una casa de fiestas ni un espacio para eventos.**',
      primaryCta: 'Consultar para 4–8 huéspedes',
      secondaryCta: 'Comparar los cuatro alojamientos',
      imageAlt: 'Gran terraza con sombra de Casa AMARA Maha en Frigiliana'
    },
    model: {
      eyebrow: 'UNA CASA, VARIOS ALOJAMIENTOS',
      title: 'Reservad el espacio que vuestro grupo necesita',
      intro: 'Cada alojamiento AMARA admite un máximo de dos huéspedes. Coordinamos **dos, tres o cuatro alojamientos para las mismas fechas**, según el tamaño del grupo y la combinación disponible.',
      options: [
        { guests: '4 HUÉSPEDES', title: 'Dos alojamientos privados', text: 'Una opción natural para dos parejas o cuatro adultos que quieren estar cerca sin compartir todas las estancias.' },
        { guests: '5–6 HUÉSPEDES', title: 'Tres alojamientos privados', text: 'Tres zonas de descanso y tres baños independientes facilitan el ritmo de familiares o amigos.' },
        { guests: '7–8 HUÉSPEDES', title: 'Los cuatro alojamientos', text: 'Reservad juntos Farah, Lounis, Zaid y Maha y Casa AMARA será exclusiva para vuestro grupo.' }
      ],
      note: 'La combinación exacta depende de la disponibilidad. Reservar conjuntamente los cuatro alojamientos garantiza la exclusividad de toda la casa.'
    },
    stays: {
      eyebrow: 'LOS CUATRO ALOJAMIENTOS',
      title: 'Personalidades distintas, una misma dirección',
      intro: 'Los cuatro alojamientos están en Calle Chorruelo 5, Frigiliana. Cada uno tiene entrada y baño privados; los tres apartamentos disponen de cocina completa y Farah, de una pequeña zona para té y café.',
      contexts: {
        farah: 'Una habitación doble compacta para quien prefiere sencillez, un acceso fácil y no necesita cocina completa.',
        lounis: 'El mayor espacio interior de la casa, con una amplia terraza privada y cocina completa.',
        zaid: 'Apartamento y terraza privados que pueden conectarse con Maha para una estancia de grupo coordinada.',
        maha: 'Un apartamento luminoso con 64 m² de terraza, cocina exterior y el mayor espacio para reuniros.'
      },
      linkLabel: 'Ver este alojamiento',
      labels: { guests: 'huéspedes', bathroom: 'baño privado', bed: 'Cama', kitchen: 'Cocina', outdoor: 'Espacio exterior', access: 'Acceso' }
    },
    connection: {
      eyebrow: 'CONECTADOS CUANDO LO NECESITÁIS',
      title: 'Zaid y Maha pueden formar una zona de grupo conectada',
      paragraphs: [
        'Zaid y Maha están unidos por una escalera exterior con una pequeña puerta que se puede cerrar. Normalmente permanece cerrada. Cuando ambos apartamentos se reservan para un mismo grupo, podemos abrirla para conectar directamente apartamentos y terrazas.',
        'La gran terraza de Maha tiene asientos para ocho personas. Es un lugar para charlar, leer y compartir la tarde, pero no hay una mesa de comedor preparada para ocho ni un salón interior común.'
      ],
      facts: [
        { title: 'Juntos', text: 'La misma casa y dirección, terrazas Zaid–Maha conectadas para el grupo y asientos para ocho en la terraza de Maha.' },
        { title: 'Con privacidad', text: 'Cuatro alojamientos independientes, cuatro baños privados, dormitorios separados y tres cocinas completas más la pequeña zona de Farah.' },
        { title: 'Exclusividad al reservar todo', text: 'Cuando se reservan juntos los cuatro alojamientos, no se alojan otros huéspedes en Casa AMARA.' }
      ],
      imageAlt: 'Escalera exterior y puerta de conexión entre las terrazas de Zaid y Maha en Casa AMARA'
    },
    fit: {
      eyebrow: '¿ES CASA AMARA PARA VOSOTROS?',
      title: 'Una casa tranquila para viajar juntos, no una villa convencional',
      intro: 'Casa AMARA funciona mejor si buscáis una ubicación compartida y espacios personales independientes. La casa histórica y el casco antiguo forman parte de la experiencia, por eso conviene tener claros los detalles antes de consultar.',
      worksTitle: 'Especialmente adecuado para',
      works: ['De dos a cuatro parejas', 'Familias adultas y viajes multigeneracionales', 'Grupos tranquilos de amigos', 'Invitados de boda cerca de la iglesia de San Antonio'],
      limitsTitle: 'Importante saberlo',
      limits: ['Sin piscina ni salón interior común', 'Sin comedor preparado para ocho personas', 'Sin fiestas, eventos ni reuniones con personas no alojadas', 'Los escalones y escaleras varían según el alojamiento'],
      note: 'No es una villa para ocho personas tras una sola puerta, sino una pequeña casa con cuatro alojamientos independientes que pueden coordinarse para un grupo.',
      imageAlt: 'Fachada blanca de Casa AMARA en el casco antiguo de Frigiliana'
    },
    location: {
      eyebrow: 'EN EL CASCO ANTIGUO DE FRIGILIANA',
      title: 'La vida del pueblo empieza al salir de casa',
      paragraphs: [
        'Casa AMARA está junto a Calle Real, cerca de restaurantes, bares, pequeñas tiendas y la iglesia de San Antonio. El grupo puede separarse y volver a encontrarse fácilmente sin organizar cada movimiento alrededor del coche.',
        'Frigiliana es un pueblo en ladera. No hay aparcamiento en la casa, el acceso de vehículos al casco antiguo puede estar limitado por horarios y algunas rutas tienen escalones. Nuestras guías prácticas ayudan a todos a llegar con expectativas claras.'
      ],
      links: [
        { token: 'getting_to_frigiliana', label: 'Cómo llegar a Frigiliana', text: 'Comparad aeropuerto, autobús, taxi y coche.' },
        { token: 'frigiliana_parking', label: 'Aparcar en Frigiliana', text: 'Sabed dónde dejar el coche antes de llegar.' },
        { token: 'frigiliana_stairs', label: 'Calles y escaleras', text: 'Entended el terreno y los accesos antes de elegir habitaciones.' },
        { token: 'location_frigiliana', label: 'Vivir en el pueblo', text: 'Descubrid cómo es el día a día en el casco antiguo.' }
      ]
    },
    booking: {
      eyebrow: 'DISPONIBILIDAD CONJUNTA',
      title: 'Una consulta coordinada por nosotros',
      paragraphs: [
        'Nuestro sistema actual no permite añadir varios alojamientos AMARA a un único proceso de reserva online. Por eso coordinamos directamente las estancias combinadas mediante consulta.',
        'Indicadnos fechas, número total de huéspedes y distribución preferida. Comprobaremos qué alojamientos están disponibles a la vez y responderemos con la combinación adecuada y los pasos para reservar.'
      ],
      steps: [
        { num: '01', headline: 'Enviad las fechas', text: 'Incluid llegada, salida y número de huéspedes que se alojarán.' },
        { num: '02', headline: 'Comprobamos la combinación', text: 'Ajustamos dos, tres o cuatro alojamientos disponibles a vuestro grupo.' },
        { num: '03', headline: 'Recibid una propuesta coordinada', text: 'Confirmamos distribución, disponibilidad y cómo completar las reservas.' }
      ],
      primaryCta: 'Consultar vuestras fechas',
      secondaryCta: 'Comparar alojamientos individuales'
    },
    faq: {
      title: 'Preguntas antes de consultar',
      items: [
        { question: '¿Pueden alojarse ocho personas en Casa AMARA?', answer: 'Sí. Farah, Lounis, Zaid y Maha admiten hasta dos huéspedes cada uno: ocho huéspedes alojados en total.' },
        { question: '¿Tendremos toda la casa para nosotros?', answer: 'Sí, si reserváis juntos los cuatro alojamientos. Esa combinación garantiza el uso exclusivo de Casa AMARA para vuestro grupo.' },
        { question: '¿Los cuatro alojamientos están conectados por dentro?', answer: 'No. Siguen siendo alojamientos independientes. Zaid y Maha pueden conectarse mediante su escalera exterior y las terrazas cuando ambos se reservan para el mismo grupo.' },
        { question: '¿Podemos comer los ocho juntos en una mesa?', answer: 'Hay asientos para ocho en la terraza de Maha, pero no una mesa de comedor preparada para ocho ni un comedor interior común.' },
        { question: '¿Todos los alojamientos tienen cocina?', answer: 'Lounis, Zaid y Maha tienen cocina completa. Farah dispone de una pequeña zona con frigorífico para té y café, no de una cocina completa.' },
        { question: '¿Podemos reservar la combinación online al instante?', answer: 'Todavía no. Comprobamos y coordinamos manualmente la disponibilidad de varios alojamientos; enviadnos una consulta.' },
        { question: '¿Se permiten celebraciones o fiestas?', answer: 'No. Casa AMARA está pensada para estancias tranquilas, no para fiestas, eventos ni reuniones con personas no alojadas.' }
      ]
    },
    closing: {
      title: 'Contadnos quién viaja',
      text: 'Compartid fechas y tamaño del grupo. Os diremos con claridad qué combinación funciona y si Casa AMARA encaja con vuestro viaje.',
      cta: 'Consultar para 4–8 huéspedes'
    },
    footer: { groups: 'Casa AMARA para 4–8', location: 'Ubicación en Frigiliana', stays: 'Comparar alojamientos' }
  },

  nl: {
    hero: {
      kicker: 'FRIGILIANA · 4–8 GASTEN',
      title: 'Samen op reis. Met een eigen plek.',
      lead: 'Casa AMARA brengt drie appartementen en één tweepersoonskamer samen onder één historisch dak in Frigiliana: een rustige uitvalsbasis voor 4–8 geregistreerde verblijfsgasten.',
      facts: '3 appartementen · 1 tweepersoonskamer · 4 privébadkamers',
      qualifier: 'Voor kleine groepen die privacy en rust waarderen. **Geen feesthuis en geen evenementenlocatie.**',
      primaryCta: 'Informeer voor 4–8 gasten',
      secondaryCta: 'Vergelijk de vier verblijven',
      imageAlt: 'Groot schaduwrijk terras van Casa AMARA Maha in Frigiliana'
    },
    model: {
      eyebrow: 'ÉÉN HUIS, MEERDERE VERBLIJVEN',
      title: 'Boek de ruimte die jullie groep echt nodig heeft',
      intro: 'Elk AMARA-verblijf biedt plaats aan maximaal twee gasten. Afhankelijk van groepsgrootte en beschikbaarheid coördineren we **twee, drie of vier verblijven voor dezelfde data**.',
      options: [
        { guests: '4 GASTEN', title: 'Twee privéverblijven', text: 'Een logische keuze voor twee stellen of vier volwassenen die dichtbij elkaar willen zijn zonder alle ruimtes te delen.' },
        { guests: '5–6 GASTEN', title: 'Drie privéverblijven', text: 'Drie aparte slaapruimtes en drie badkamers geven familie of vrienden een ontspannen ritme.' },
        { guests: '7–8 GASTEN', title: 'Alle vier verblijven', text: 'Boek Farah, Lounis, Zaid en Maha samen en Casa AMARA is exclusief voor jullie groep.' }
      ],
      note: 'De precieze combinatie hangt af van de beschikbaarheid. Een gezamenlijke boeking van alle vier verblijven garandeert exclusief gebruik van het huis.'
    },
    stays: {
      eyebrow: 'DE VIER VERBLIJVEN',
      title: 'Een eigen karakter, hetzelfde adres',
      intro: 'Alle vier verblijven liggen aan Calle Chorruelo 5 in Frigiliana. Elk heeft een eigen ingang en privébadkamer; de drie appartementen hebben een volledige keuken en Farah een compacte pantry voor thee en koffie.',
      contexts: {
        farah: 'Een compacte tweepersoonskamer voor gasten die eenvoud en gemakkelijke toegang waarderen en geen volledige keuken nodig hebben.',
        lounis: 'De grootste binnenruimte van het huis, met een ruim privéterras en een volledige keuken.',
        zaid: 'Een privéappartement met terras dat voor een groepsverblijf rechtstreeks met Maha kan worden verbonden.',
        maha: 'Een licht appartement met 64 m² terras, buitenkeuken en de ruimste plek om samen te zitten.'
      },
      linkLabel: 'Bekijk dit verblijf',
      labels: { guests: 'gasten', bathroom: 'privébadkamer', bed: 'Bed', kitchen: 'Keuken', outdoor: 'Buitenruimte', access: 'Toegang' }
    },
    connection: {
      eyebrow: 'VERBONDEN WANNEER JULLIE DAT WILLEN',
      title: 'Zaid en Maha kunnen één verbonden groepszone worden',
      paragraphs: [
        'Zaid en Maha zijn verbonden via een buitentrap met een kleine afsluitbare deur. Normaal blijft die dicht. Wanneer één groep beide appartementen boekt, kunnen we de deur openen zodat appartementen en terrassen rechtstreeks met elkaar verbonden zijn.',
        'Op het grote terras van Maha zijn zitplaatsen voor acht personen. Het is een plek om te praten, lezen en samen de avond door te brengen, maar er staat geen eettafel voor acht en er is geen gemeenschappelijke woonkamer binnen.'
      ],
      facts: [
        { title: 'Samen', text: 'Hetzelfde huis en adres, verbonden terrassen van Zaid en Maha bij een groepsboeking en zitplaatsen voor acht op het terras van Maha.' },
        { title: 'Toch privé', text: 'Vier zelfstandige verblijven, vier privébadkamers, aparte slaapruimtes en drie volledige keukens plus Farahs pantry.' },
        { title: 'Exclusief bij volledige boeking', text: 'Wanneer alle vier verblijven samen zijn geboekt, verblijven er geen andere gasten in Casa AMARA.' }
      ],
      imageAlt: 'Buitentrap en afsluitbare verbinding tussen de terrassen van Zaid en Maha in Casa AMARA'
    },
    fit: {
      eyebrow: 'PAST CASA AMARA BIJ JULLIE?',
      title: 'Een rustig huis voor samenreizigers, geen traditionele villa',
      intro: 'Casa AMARA werkt het best wanneer jullie één locatie en toch een eigen plek zoeken. Het historische huis en de ligging in de oude kern horen bij de ervaring; daarom moeten de praktische details vooraf duidelijk zijn.',
      worksTitle: 'Bijzonder geschikt voor',
      works: ['Twee tot vier stellen', 'Volwassen families en reizen met meerdere generaties', 'Rustige vriendengroepen', 'Bruiloftsgasten vlak bij de San Antonio-kerk'],
      limitsTitle: 'Goed om te weten',
      limits: ['Geen zwembad en geen gezamenlijke woonkamer binnen', 'Geen eetopstelling voor acht personen', 'Geen feesten, evenementen of bijeenkomsten met niet-geregistreerde gasten', 'Treden en trappen verschillen per verblijf'],
      note: 'Dit is geen villa voor acht personen achter één voordeur. Het is een klein huis met vier zelfstandige verblijven die voor één groep kunnen worden gecoördineerd.',
      imageAlt: 'Witte gevel van Casa AMARA in de oude kern van Frigiliana'
    },
    location: {
      eyebrow: 'IN DE OUDE KERN VAN FRIGILIANA',
      title: 'Het dorpsleven begint voor de deur',
      paragraphs: [
        'Casa AMARA ligt naast Calle Real, dicht bij restaurants, bars, kleine winkels en de San Antonio-kerk. Jullie kunnen gemakkelijk ieder iets anders doen en elkaar weer ontmoeten zonder elke verplaatsing rond een auto te plannen.',
        'Frigiliana ligt tegen een heuvel. Er is geen parkeergelegenheid bij het huis, toegang met de auto tot de oude kern kan tijdgebonden zijn en sommige routes hebben trappen. Onze praktische gidsen helpen iedereen met de juiste verwachtingen te arriveren.'
      ],
      links: [
        { token: 'getting_to_frigiliana', label: 'Naar Frigiliana reizen', text: 'Vergelijk luchthaven, bus, taxi en auto.' },
        { token: 'frigiliana_parking', label: 'Parkeren in Frigiliana', text: 'Weet vóór aankomst waar de auto kan staan.' },
        { token: 'frigiliana_stairs', label: 'Straten en trappen', text: 'Begrijp terrein en toegang voordat jullie kamers kiezen.' },
        { token: 'location_frigiliana', label: 'Leven in het dorp', text: 'Ontdek hoe de oude-kernlocatie dagelijks aanvoelt.' }
      ]
    },
    booking: {
      eyebrow: 'GECOMBINEERDE BESCHIKBAARHEID',
      title: 'Eén aanvraag, door ons gecoördineerd',
      paragraphs: [
        'Ons huidige boekingssysteem kan meerdere AMARA-verblijven nog niet in één online checkout plaatsen. Daarom regelen we gecombineerde verblijven rechtstreeks via een aanvraag.',
        'Stuur ons jullie data, het totale aantal gasten en de gewenste indeling. Wij bekijken welke verblijven tegelijk beschikbaar zijn en antwoorden met de passende combinatie en vervolgstappen.'
      ],
      steps: [
        { num: '01', headline: 'Stuur jullie data', text: 'Vermeld aankomst, vertrek en het aantal geregistreerde verblijfsgasten.' },
        { num: '02', headline: 'Wij bekijken de combinatie', text: 'We stemmen twee, drie of vier beschikbare verblijven af op jullie groep.' },
        { num: '03', headline: 'Ontvang een gecoördineerd voorstel', text: 'We bevestigen indeling, beschikbaarheid en hoe de reserveringen worden afgerond.' }
      ],
      primaryCta: 'Informeer naar jullie data',
      secondaryCta: 'Vergelijk afzonderlijke verblijven'
    },
    faq: {
      title: 'Vragen vóór jullie aanvraag',
      items: [
        { question: 'Kunnen acht personen in Casa AMARA verblijven?', answer: 'Ja. Farah, Lounis, Zaid en Maha bieden elk plaats aan maximaal twee gasten: in totaal acht geregistreerde verblijfsgasten.' },
        { question: 'Hebben we het hele huis voor onszelf?', answer: 'Ja, wanneer alle vier verblijven samen zijn gereserveerd. Die combinatie garandeert exclusief gebruik van Casa AMARA door jullie groep.' },
        { question: 'Zijn alle vier verblijven binnen met elkaar verbonden?', answer: 'Nee. Het blijven zelfstandige verblijven. Zaid en Maha kunnen via hun buitentrap en terrassen worden verbonden wanneer beide voor dezelfde groep zijn geboekt.' },
        { question: 'Kunnen we met acht personen aan één tafel eten?', answer: 'Op Maha’s terras zijn zitplaatsen voor acht, maar er is geen eettafel voor acht en geen gezamenlijke eetruimte binnen.' },
        { question: 'Heeft elk verblijf een keuken?', answer: 'Lounis, Zaid en Maha hebben een volledige keuken. Farah heeft een compacte pantry met koelkast voor thee en koffie, geen volledige keuken.' },
        { question: 'Kunnen we de combinatie direct online boeken?', answer: 'Nog niet. De gezamenlijke beschikbaarheid van meerdere verblijven wordt handmatig gecontroleerd en gecoördineerd; stuur ons een aanvraag.' },
        { question: 'Zijn vieringen of feesten toegestaan?', answer: 'Nee. Casa AMARA is bedoeld voor rustige overnachtingen, niet voor feesten, evenementen of bijeenkomsten met niet-geregistreerde gasten.' }
      ]
    },
    closing: {
      title: 'Vertel ons wie er reist',
      text: 'Deel jullie data en groepsgrootte. We vertellen eerlijk welke combinatie werkt en of Casa AMARA bij jullie reis past.',
      cta: 'Informeer voor 4–8 gasten'
    },
    footer: { groups: 'Casa AMARA voor 4–8', location: 'Locatie in Frigiliana', stays: 'Alle verblijven vergelijken' }
  },

  sv: {
    hero: {
      kicker: 'FRIGILIANA · 4–8 GÄSTER',
      title: 'Res tillsammans. Med ett eget utrymme.',
      lead: 'Casa AMARA samlar tre lägenheter och ett dubbelrum under samma historiska tak i Frigiliana – en lugn bas för 4–8 registrerade övernattande gäster.',
      facts: '3 lägenheter · 1 dubbelrum · 4 privata badrum',
      qualifier: 'För små grupper som värdesätter avskildhet och lugn. **Inget partyhus och ingen evenemangslokal.**',
      primaryCta: 'Skicka förfrågan för 4–8 gäster',
      secondaryCta: 'Jämför de fyra boendena',
      imageAlt: 'Stor skuggig terrass vid Casa AMARA Maha i Frigiliana'
    },
    model: {
      eyebrow: 'ETT HUS, FLERA BOENDEN',
      title: 'Boka det utrymme som gruppen faktiskt behöver',
      intro: 'Varje AMARA-boende rymmer högst två gäster. Beroende på gruppstorlek och tillgänglighet samordnar vi **två, tre eller fyra boenden för samma datum**.',
      options: [
        { guests: '4 GÄSTER', title: 'Två privata boenden', text: 'Ett naturligt val för två par eller fyra vuxna som vill bo nära utan att dela alla utrymmen.' },
        { guests: '5–6 GÄSTER', title: 'Tre privata boenden', text: 'Tre separata sovutrymmen och tre badrum ger familj eller vänner en avslappnad rytm.' },
        { guests: '7–8 GÄSTER', title: 'Alla fyra boendena', text: 'Boka Farah, Lounis, Zaid och Maha tillsammans så är Casa AMARA exklusivt för er grupp.' }
      ],
      note: 'Den exakta kombinationen beror på tillgängligheten. En gemensam bokning av alla fyra boenden garanterar exklusiv tillgång till hela huset.'
    },
    stays: {
      eyebrow: 'DE FYRA BOENDENA',
      title: 'Olika karaktär, samma adress',
      intro: 'Alla fyra boenden ligger på Calle Chorruelo 5 i Frigiliana. Varje boende har egen ingång och privat badrum; de tre lägenheterna har fullständiga kök och Farah ett kompakt tekök.',
      contexts: {
        farah: 'Ett kompakt dubbelrum för gäster som uppskattar enkelhet och lätt tillträde och inte behöver ett fullständigt kök.',
        lounis: 'Husets största inomhusyta, med en rymlig privat terrass och ett fullständigt kök.',
        zaid: 'En privat lägenhet med terrass som kan kopplas direkt till Maha för en samordnad gruppvistelse.',
        maha: 'En ljus lägenhet med 64 m² terrass, utekök och den största platsen för gruppen att sitta tillsammans.'
      },
      linkLabel: 'Se boendet',
      labels: { guests: 'gäster', bathroom: 'privat badrum', bed: 'Säng', kitchen: 'Kök', outdoor: 'Uteplats', access: 'Tillträde' }
    },
    connection: {
      eyebrow: 'SAMMANKOPPLAT NÄR NI BEHÖVER DET',
      title: 'Zaid och Maha kan bli en sammanhängande gruppzon',
      paragraphs: [
        'Zaid och Maha länkas av en utomhustrappa med en liten låsbar dörr. Den är normalt stängd. När samma grupp bokar båda lägenheterna kan vi öppna den så att lägenheterna och terrasserna ansluter direkt till varandra.',
        'På Mahas stora terrass finns sittplatser för åtta personer. Här kan ni prata, läsa och dela kvällen, men det finns inget matbord dukat för åtta och inget gemensamt vardagsrum inomhus.'
      ],
      facts: [
        { title: 'Tillsammans', text: 'Samma hus och adress, sammanlänkade Zaid–Maha-terrasser vid gruppbokning och sittplatser för åtta på Mahas terrass.' },
        { title: 'Ändå privat', text: 'Fyra fristående boenden, fyra privata badrum, separata sovutrymmen och tre fullständiga kök plus Farahs tekök.' },
        { title: 'Exklusivt vid full bokning', text: 'När alla fyra boenden bokas tillsammans bor inga andra gäster i Casa AMARA.' }
      ],
      imageAlt: 'Utomhustrappa och låsbar förbindelse mellan terrasserna vid Zaid och Maha i Casa AMARA'
    },
    fit: {
      eyebrow: 'PASSAR CASA AMARA ER?',
      title: 'Ett lugnt hus för er som reser tillsammans – ingen vanlig villa',
      intro: 'Casa AMARA passar bäst när gruppen vill ha en gemensam plats och samtidigt egna privata utrymmen. Det historiska huset och läget i gamla stan är en del av upplevelsen, så de praktiska ramarna behöver vara tydliga före förfrågan.',
      worksTitle: 'Passar särskilt bra för',
      works: ['Två till fyra par', 'Vuxna familjer och generationsresor', 'Lugna kompisgäng', 'Bröllopsgäster nära San Antonio-kyrkan'],
      limitsTitle: 'Viktigt att veta',
      limits: ['Ingen pool och inget gemensamt vardagsrum inomhus', 'Ingen gemensam matplats för åtta personer', 'Inga fester, evenemang eller sammankomster med oregistrerade gäster', 'Trappsteg och trappor skiljer sig mellan boendena'],
      note: 'Det här är inte en villa för åtta personer bakom en gemensam ytterdörr, utan ett litet hus med fyra fristående boenden som kan samordnas för en grupp.',
      imageAlt: 'Vit fasad på Casa AMARA i Frigilianas gamla stad'
    },
    location: {
      eyebrow: 'I FRIGILIANAS GAMLA STAD',
      title: 'Bylivet börjar utanför dörren',
      paragraphs: [
        'Casa AMARA ligger intill Calle Real, nära restauranger, barer, små butiker och San Antonio-kyrkan. Gruppen kan enkelt dela upp sig och mötas igen utan att planera varje förflyttning kring en bil.',
        'Frigiliana är en by på en sluttning. Det finns ingen parkering vid huset, fordonstrafik i gamla stan kan vara tidsbegränsad och vissa vägar har trappsteg. Våra praktiska guider hjälper alla att komma förberedda.'
      ],
      links: [
        { token: 'getting_to_frigiliana', label: 'Resa till Frigiliana', text: 'Jämför flygplats, buss, taxi och bil.' },
        { token: 'frigiliana_parking', label: 'Parkering i Frigiliana', text: 'Ta reda på var bilen kan stå före ankomst.' },
        { token: 'frigiliana_stairs', label: 'Gator och trappor', text: 'Förstå terräng och tillträde innan ni väljer rum.' },
        { token: 'location_frigiliana', label: 'Livet i byn', text: 'Se hur läget i gamla stan fungerar till vardags.' }
      ]
    },
    booking: {
      eyebrow: 'GEMENSAM TILLGÄNGLIGHET',
      title: 'En förfrågan, samordnad av oss',
      paragraphs: [
        'Vårt nuvarande bokningssystem kan ännu inte lägga flera AMARA-boenden i samma onlinekassa. Kombinerade vistelser ordnas därför direkt med oss genom en förfrågan.',
        'Ange datum, totalt antal gäster och önskad fördelning. Vi kontrollerar vilka boenden som är lediga samtidigt och svarar med lämplig kombination och nästa bokningssteg.'
      ],
      steps: [
        { num: '01', headline: 'Skicka era datum', text: 'Ange ankomst, avresa och antal registrerade övernattande gäster.' },
        { num: '02', headline: 'Vi kontrollerar kombinationen', text: 'Vi matchar två, tre eller fyra lediga boenden med gruppen.' },
        { num: '03', headline: 'Få ett samordnat förslag', text: 'Vi bekräftar fördelning, tillgänglighet och hur bokningarna slutförs.' }
      ],
      primaryCta: 'Fråga om era datum',
      secondaryCta: 'Jämför enskilda boenden'
    },
    faq: {
      title: 'Frågor före förfrågan',
      items: [
        { question: 'Kan åtta personer bo i Casa AMARA?', answer: 'Ja. Farah, Lounis, Zaid och Maha rymmer högst två gäster vardera, sammanlagt åtta registrerade övernattande gäster.' },
        { question: 'Har vi hela huset för oss själva?', answer: 'Ja, om alla fyra boenden bokas tillsammans. Den kombinationen garanterar exklusiv användning av Casa AMARA för er grupp.' },
        { question: 'Är alla fyra boenden sammanlänkade inomhus?', answer: 'Nej. De förblir fristående boenden. Zaid och Maha kan kopplas samman via utomhustrappan och terrasserna när båda bokas för samma grupp.' },
        { question: 'Kan alla åtta äta tillsammans vid samma bord?', answer: 'Det finns sittplatser för åtta på Mahas terrass, men inget matbord för åtta och ingen gemensam matsal inomhus.' },
        { question: 'Har varje boende ett kök?', answer: 'Lounis, Zaid och Maha har fullständiga kök. Farah har ett kompakt tekök med kylskåp, inte ett fullständigt kök.' },
        { question: 'Kan vi boka kombinationen direkt online?', answer: 'Inte ännu. Gemensam tillgänglighet för flera boenden kontrolleras och samordnas manuellt, så skicka en förfrågan.' },
        { question: 'Är firanden eller fester tillåtna?', answer: 'Nej. Casa AMARA är avsett för lugna övernattningar, inte för fester, evenemang eller sammankomster med oregistrerade gäster.' }
      ]
    },
    closing: {
      title: 'Berätta vilka som reser',
      text: 'Skicka era datum och gruppstorlek. Vi svarar ärligt på vilken kombination som fungerar och om Casa AMARA passar er resa.',
      cta: 'Skicka förfrågan för 4–8 gäster'
    },
    footer: { groups: 'Casa AMARA för 4–8', location: 'Läget i Frigiliana', stays: 'Jämför alla boenden' }
  }
};
