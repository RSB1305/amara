import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaBalconSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaBalconLocale {
  navLabel: string;
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: NerjaBalconSection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    propertyLabel: string;
    locationLabel: string;
  };
}

const article = {
  datePublished: '2026-08-14',
  dateModified: '2026-08-14',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const sharedSources = {
  municipality: 'https://www.nerja.es/',
  culture: 'https://cultura.nerja.es/'
};

export const nerjaBalconSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-balcon-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Balcón de Europa, Nerja: The Gun Battery Behind the View',
      description:
        'The most photographed terrace on this coast was built as a coastal gun battery. What to see, when to go, and which part of the royal story is only tradition.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Balcón de Europa in Nerja: Die Kanonenbatterie hinter der Aussicht',
      description:
        'Die meistfotografierte Terrasse dieser Küste war eine Küstenbatterie: was ihr seht, wann ihr hingeht und welcher Teil der Königsgeschichte Überlieferung ist.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Balcón de Europa, Nerja: la batería que hay detrás de las vistas',
      description:
        'El mirador más fotografiado de esta costa nació como batería de costa. Qué se ve, cuándo ir y qué parte de la historia del rey es solo tradición oral.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Balcón de Europa in Nerja: de batterij achter het uitzicht',
      description:
        'Het meest gefotografeerde terras van deze kust was een kustbatterij. Wat jullie zien, wanneer je gaat, en welk deel van het koningsverhaal overlevering is.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Balcón de Europa i Nerja: batteriet bakom utsikten',
      description:
        'Kustens mest fotograferade terrass byggdes som ett kustbatteri. Vad ni ser, när ni ska gå dit och vilken del av kungahistorien som bara är tradition.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaBalconContent: Record<AmaraLanguage, NerjaBalconLocale> = {
  en: {
    navLabel: 'Balcón de Europa',
    breadcrumbLabel: 'Balcón de Europa',
    hero: {
      eyebrow: 'Nerja · Balcón de Europa',
      title: 'The Balcón de Europa is no hidden gem — which is exactly why it works',
      standfirst:
        'A viewing terrace on a rock spur at the end of the old town, with the open Mediterranean below it. Every guidebook names it and every visitor stands there, yet it has not been ruined. That has to do with what lies underneath it, and with what the people of Nerja still use it for.',
      note: 'A guide written by your hosts. Events and street life change; treat this as orientation rather than a programme.',
      updated: 'Last checked in August 2026'
    },
    facts: [
      { label: 'From AMARA Playa', value: 'About 500 metres on foot' },
      { label: 'Access', value: 'Free, open at all hours' },
      { label: 'Quietest hours', value: 'Before 10am and after 10pm' },
      { label: 'Still standing there', value: 'Two cannons from the old battery' }
    ],
    sections: [
      {
        id: 'the-view',
        eyebrow: 'The first impression',
        title: 'You walk through a lane and suddenly stand above the sea',
        paragraphs: [
          'Nerja’s old town leads you there without announcing it. You follow narrow streets between whitewashed houses, and then the road simply stops. What remains is an avenue of palms on a rock, and the open Mediterranean below.',
          'To the left the view runs east over Calahonda and the coves; to the right it opens west across Torrecilla and the beach. On a clear day the Sierra Almijara stands behind you. This is the point where it becomes obvious why Nerja was built exactly where it was built.',
          'Honestly: you will not be alone. This is the most photographed spot on the coast east of Málaga, and between 11am and 7pm you feel it — street musicians, ice cream, tour groups. If you want quiet, the time of day matters more than anything else on this page.'
        ]
      },
      {
        id: 'the-name',
        eyebrow: 'The name',
        title: 'The story about the king, and the part of it that is tradition',
        paragraphs: [
          'The story goes like this: after the severe earthquake that struck this region at the end of the nineteenth century, the King of Spain visited the damaged towns, stepped onto this rock spur and called it “el balcón de Europa”. The name stayed.',
          'That is how it is told in Nerja, and the statue at the entrance to the terrace shows exactly that scene. We pass the story on the way it is told — as tradition, not as a documented quotation. Anyone standing here should know they are standing on a name that comes from an anecdote.',
          'It does not make the place any less beautiful. It does mean that the more interesting history is not the one on the statue, but the one under your feet.'
        ]
      },
      {
        id: 'the-fort',
        eyebrow: 'What lies underneath',
        title: 'Before the viewing terrace, this was a gun battery',
        paragraphs: [
          'The rock spur was not built as a lookout. It carried a coastal fortification, the Batería de la Concepción, watching a stretch of coast that was defended by a chain of towers and batteries.',
          'Two cannons still stand on the terrace today. Most visitors photograph them without realising that they are the reason this square has the shape it has. The Balcón is round and juts forward because a battery needs a field of fire — not because someone was planning a panorama.',
          'That is the part we like telling most: the best-known postcard view in this part of Andalusia is a side effect of a military installation.'
        ]
      },
      {
        id: 'when-to-go',
        eyebrow: 'The practical part',
        title: 'There are three completely different Balcóns in a single day',
        paragraphs: [
          'Early, before ten, the terrace belongs to the people who live here. Older men on the benches, dog walkers, someone with a coffee. The light comes in low from the east across the coves. If you want to see the place once without an audience, that is the hour.',
          'At midday it is busy. Coaches stop above, the musicians play, and the terrace becomes a thoroughfare. Perfectly fine to walk through, but not something to travel for.',
          'After sunset the lamps come on, the day visitors are gone, and it turns back into somewhere you stop and stand. What you do not need is a ticket, a time slot or a reservation. What you do need is the willingness to come twice, because the first visit is almost always at the wrong hour.'
        ]
      },
      {
        id: 'from-our-door',
        eyebrow: 'From our door',
        title: 'Five hundred metres, and that is why you simply go again',
        paragraphs: [
          'From AMARA Playa it is roughly 500 metres to the terrace — a distance you walk after dinner without planning it. That is the whole difference between having seen the Balcón and having been there.',
          'We were guests in this same apartment for years before we bought it. In that time the walk to the Balcón was never a sightseeing item; it was a habit.',
          'If you stay in the centre you go three times. If you stay outside town you go once — and then you have seen the midday Balcón, which is the least interesting of the three.'
        ]
      }
    ],
    related: {
      eyebrow: 'Keep reading',
      title: 'Where the evening goes from here',
      links: [
        {
          token: 'nerja_nightlife_authority',
          label: 'Evenings in Nerja',
          text: 'Which quarter suits which kind of evening, once you leave the terrace.'
        },
        {
          token: 'nerja_geography',
          label: 'Location & orientation',
          text: 'Why the beaches lie below the town rather than in front of it.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Sources',
      intro:
        'The Balcón is public space with no operator, so there are no opening times or ticket details to cite. For historical context we stay with what local institutions publish, and the story around the visiting king is marked as tradition because it cannot be sourced as a quotation.',
      checked: 'Sources checked in August 2026.',
      links: [
        {
          label: 'Ayuntamiento de Nerja',
          text: 'The municipality, for current local information and announcements.',
          href: sharedSources.municipality
        },
        {
          label: 'Cultura Nerja',
          text: 'The municipal culture service, for heritage and the current programme.',
          href: sharedSources.culture
        }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'The Balcón is not a sight you tick off. It is a walk you get into the habit of.',
      body: 'From our door it is five minutes. That is enough to see it empty in the morning and lit in the evening — and those are two different places.',
      propertyLabel: 'View AMARA Playa',
      locationLabel: 'Back to the Nerja location guide'
    }
  },
  de: {
    navLabel: 'Balcón de Europa',
    breadcrumbLabel: 'Balcón de Europa',
    hero: {
      eyebrow: 'Nerja · Balcón de Europa',
      title: 'Der Balcón de Europa ist kein Geheimtipp — und genau deshalb funktioniert er',
      standfirst:
        'Eine Aussichtsterrasse auf einem Felsvorsprung am Ende der Altstadt, darunter das offene Mittelmeer. Jeder Reiseführer nennt ihn, jeder Besucher steht dort, und trotzdem ist er nicht kaputtgegangen. Das liegt an dem, was unter ihm liegt — und daran, wofür die Menschen in Nerja ihn bis heute benutzen.',
      note: 'Ein Guide eurer Gastgeber. Veranstaltungen und Straßenleben wechseln; nehmt das als Orientierung, nicht als Programm.',
      updated: 'Zuletzt geprüft im August 2026'
    },
    facts: [
      { label: 'Von AMARA Playa', value: 'Rund 500 Meter zu Fuß' },
      { label: 'Zugang', value: 'Frei, zu jeder Tageszeit' },
      { label: 'Ruhigste Zeit', value: 'Vor 10 und nach 22 Uhr' },
      { label: 'Was noch dort steht', value: 'Zwei Kanonen der alten Batterie' }
    ],
    sections: [
      {
        id: 'the-view',
        eyebrow: 'Der erste Eindruck',
        title: 'Man geht durch eine Gasse und steht plötzlich über dem Meer',
        paragraphs: [
          'Die Altstadt von Nerja führt euch dorthin, ohne es anzukündigen. Ihr lauft durch enge Straßen zwischen weiß getünchten Häusern, und dann hört der Weg einfach auf. Was bleibt, ist eine Palmenallee auf einem Felsen und darunter das offene Mittelmeer.',
          'Nach links geht der Blick über Calahonda und die Buchten nach Osten, nach rechts öffnet er sich über Torrecilla und den Strand nach Westen. Bei klarer Sicht steht die Sierra Almijara im Rücken. Es ist der Punkt, an dem sich von selbst erklärt, warum Nerja genau dort gebaut wurde, wo es steht.',
          'Ehrlich dazu: Ihr werdet nicht allein sein. Das ist der meistfotografierte Ort der Küste östlich von Málaga, und zwischen 11 und 19 Uhr merkt man das — Straßenmusik, Eis, Reisegruppen. Wer Ruhe möchte, für den zählt die Tageszeit mehr als alles andere auf dieser Seite.'
        ]
      },
      {
        id: 'the-name',
        eyebrow: 'Der Name',
        title: 'Die Geschichte mit dem König — und was daran Überlieferung ist',
        paragraphs: [
          'Die Erzählung geht so: Nach dem schweren Erdbeben, das diese Region Ende des 19. Jahrhunderts traf, besuchte der spanische König die beschädigten Orte, trat auf diesen Felsvorsprung und nannte ihn „el balcón de Europa". Der Name blieb.',
          'So wird es in Nerja erzählt, und die Statue am Zugang zur Terrasse zeigt genau diese Szene. Wir geben die Geschichte weiter, wie sie erzählt wird — als Überlieferung, nicht als belegtes Zitat. Wer hier steht, sollte wissen, dass er auf einem Namen steht, der aus einer Anekdote stammt.',
          'Schöner wird der Ort dadurch nicht weniger. Es heißt nur: Die interessantere Geschichte ist nicht die auf der Statue, sondern die unter euren Füßen.'
        ]
      },
      {
        id: 'the-fort',
        eyebrow: 'Was darunter liegt',
        title: 'Vor der Aussichtsterrasse stand hier eine Kanonenbatterie',
        paragraphs: [
          'Der Felsvorsprung war nicht als Aussichtspunkt gedacht. Er trug eine Küstenbefestigung, die Batería de la Concepción, und überwachte einen Küstenabschnitt, der durch eine Kette von Türmen und Batterien gesichert war.',
          'Zwei Kanonen stehen heute noch auf der Terrasse. Die meisten Besucher fotografieren sie, ohne zu wissen, dass sie der Grund für die Form dieses Platzes sind. Der Balcón ist rund und ragt vor, weil eine Batterie Schussfeld braucht — nicht, weil jemand einen Rundblick geplant hätte.',
          'Das ist der Teil, den wir am liebsten erzählen: Der bekannteste Postkartenblick dieser Ecke Andalusiens ist der Nebeneffekt einer militärischen Anlage.'
        ]
      },
      {
        id: 'when-to-go',
        eyebrow: 'Der praktische Teil',
        title: 'Es gibt drei völlig verschiedene Balcóns an einem Tag',
        paragraphs: [
          'Früh, vor zehn, gehört die Terrasse den Menschen, die hier leben. Ältere Herren auf den Bänken, Hundebesitzer, jemand mit Kaffee. Das Licht kommt flach von Osten über die Buchten. Wenn ihr den Ort einmal ohne Publikum sehen wollt, ist das die Stunde.',
          'Mittags ist es voll. Reisebusse halten oben, die Musiker spielen, die Terrasse wird zum Durchgangsort. Zum Durchlaufen völlig in Ordnung, aber nichts, wofür man extra kommt.',
          'Nach Sonnenuntergang geht die Beleuchtung an, die Tagesgäste sind weg, und es wird wieder ein Ort zum Stehenbleiben. Was ihr nicht braucht: Ticket, Zeitfenster, Reservierung. Was ihr braucht: die Bereitschaft, zweimal hinzugehen — denn der erste Besuch ist fast immer der zur falschen Zeit.'
        ]
      },
      {
        id: 'from-our-door',
        eyebrow: 'Von unserer Tür',
        title: 'Fünfhundert Meter, und deshalb geht man einfach nochmal hin',
        paragraphs: [
          'Von AMARA Playa sind es rund 500 Meter bis zur Terrasse — eine Strecke, die man abends nach dem Essen läuft, ohne sie zu planen. Genau darin liegt der Unterschied zwischen „den Balcón gesehen haben" und „am Balcón gewesen sein".',
          'Wir waren jahrelang selbst Gäste in genau dieser Wohnung, bevor wir sie gekauft haben. In dieser Zeit war der Weg zum Balcón nie ein Programmpunkt, sondern eine Gewohnheit.',
          'Wer im Zentrum wohnt, geht dreimal hin. Wer außerhalb wohnt, einmal — und hat dann den Mittagsbalcón gesehen, den langweiligsten der drei.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Wie der Abend von hier aus weitergeht',
      links: [
        {
          token: 'nerja_nightlife_authority',
          label: 'Abends in Nerja',
          text: 'Welches Viertel zu welchem Abend passt, wenn ihr die Terrasse verlasst.'
        },
        {
          token: 'nerja_geography',
          label: 'Lage & Orientierung',
          text: 'Warum die Strände unter dem Ort liegen und nicht vor ihm.'
        }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Quellen',
      intro:
        'Der Balcón ist öffentlicher Raum ohne Betreiber — es gibt weder Öffnungszeiten noch Ticketangaben zu belegen. Für die historische Einordnung bleiben wir bei dem, was örtliche Institutionen veröffentlichen, und die Geschichte um den König ist bewusst als Überlieferung gekennzeichnet, weil sie sich nicht als Zitat belegen lässt.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        {
          label: 'Ayuntamiento de Nerja',
          text: 'Die Gemeinde, für aktuelle örtliche Informationen und Ankündigungen.',
          href: sharedSources.municipality
        },
        {
          label: 'Cultura Nerja',
          text: 'Das städtische Kulturamt, für Kulturerbe und aktuelles Programm.',
          href: sharedSources.culture
        }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Der Balcón ist keine Sehenswürdigkeit, die man abhakt. Er ist ein Weg, den man sich angewöhnt.',
      body: 'Von unserer Tür sind es fünf Minuten. Das reicht, um ihn morgens leer und abends beleuchtet zu sehen — und das sind zwei verschiedene Orte.',
      propertyLabel: 'AMARA Playa ansehen',
      locationLabel: 'Zurück zum Nerja Lage-Guide'
    }
  },
  es: {
    navLabel: 'Balcón de Europa',
    breadcrumbLabel: 'Balcón de Europa',
    hero: {
      eyebrow: 'Nerja · Balcón de Europa',
      title: 'El Balcón de Europa no es ningún secreto — y precisamente por eso funciona',
      standfirst:
        'Un mirador sobre un espolón rocoso al final del casco antiguo, con el Mediterráneo abierto debajo. Toda guía lo menciona y todo visitante se asoma, y aun así no se ha echado a perder. Eso tiene que ver con lo que hay debajo y con el uso que los nerjeños siguen dándole.',
      note: 'Una guía escrita por vuestros anfitriones. Los eventos y la vida en la calle cambian; tomadlo como orientación, no como programa.',
      updated: 'Revisado por última vez en agosto de 2026'
    },
    facts: [
      { label: 'Desde AMARA Playa', value: 'Unos 500 metros a pie' },
      { label: 'Acceso', value: 'Libre, a cualquier hora' },
      { label: 'Horas más tranquilas', value: 'Antes de las 10 y después de las 22' },
      { label: 'Lo que sigue allí', value: 'Dos cañones de la antigua batería' }
    ],
    sections: [
      {
        id: 'the-view',
        eyebrow: 'La primera impresión',
        title: 'Cruzáis una calle estrecha y de pronto estáis sobre el mar',
        paragraphs: [
          'El casco antiguo de Nerja os lleva hasta allí sin anunciarlo. Camináis entre casas encaladas por calles estrechas y, de repente, la calle se acaba. Lo que queda es un paseo de palmeras sobre la roca y, debajo, el Mediterráneo abierto.',
          'A la izquierda la vista se va hacia el este, sobre Calahonda y las calas; a la derecha se abre hacia el oeste, sobre Torrecilla y la playa. Con el día claro, la Sierra Almijara queda a vuestra espalda. Es el punto en el que se entiende solo por qué Nerja se levantó justo aquí.',
          'Con sinceridad: no estaréis solos. Es el lugar más fotografiado de esta costa al este de Málaga, y entre las 11 y las 19 se nota — música callejera, helados, grupos. Si buscáis tranquilidad, la hora del día importa más que cualquier otra cosa de esta página.'
        ]
      },
      {
        id: 'the-name',
        eyebrow: 'El nombre',
        title: 'La historia del rey y la parte que es tradición oral',
        paragraphs: [
          'El relato dice así: tras el fuerte terremoto que sacudió esta región a finales del siglo XIX, el rey de España visitó los pueblos dañados, salió a este espolón rocoso y lo llamó «el balcón de Europa». El nombre se quedó.',
          'Así se cuenta en Nerja, y la estatua a la entrada del mirador representa exactamente esa escena. Nosotros transmitimos la historia como se transmite — como tradición, no como cita documentada. Quien se asoma aquí debería saber que está sobre un nombre nacido de una anécdota.',
          'El lugar no pierde belleza por ello. Solo significa que la historia más interesante no es la de la estatua, sino la que tenéis bajo los pies.'
        ]
      },
      {
        id: 'the-fort',
        eyebrow: 'Lo que hay debajo',
        title: 'Antes del mirador, aquí había una batería de cañones',
        paragraphs: [
          'El espolón no se pensó como mirador. Sostenía una fortificación costera, la Batería de la Concepción, y vigilaba un tramo de costa defendido por una cadena de torres y baterías.',
          'Dos cañones siguen hoy en el mirador. La mayoría de los visitantes los fotografía sin saber que son la razón de la forma de esta plaza. El Balcón es redondo y se adelanta porque una batería necesita campo de tiro, no porque alguien planeara una panorámica.',
          'Esa es la parte que más nos gusta contar: la vista de postal más conocida de esta esquina de Andalucía es el efecto secundario de una instalación militar.'
        ]
      },
      {
        id: 'when-to-go',
        eyebrow: 'La parte práctica',
        title: 'En un mismo día hay tres Balcones completamente distintos',
        paragraphs: [
          'Temprano, antes de las diez, el mirador es de quienes viven aquí. Señores mayores en los bancos, gente paseando al perro, alguien con un café. La luz entra rasante desde el este sobre las calas. Si queréis verlo una vez sin público, esa es la hora.',
          'A mediodía está lleno. Los autocares paran arriba, suenan los músicos y el mirador se convierte en un sitio de paso. Está bien para cruzarlo, pero no es algo por lo que merezca la pena venir.',
          'Después de la puesta de sol se encienden las luces, los visitantes de día se han ido y vuelve a ser un lugar donde uno se para. No hace falta entrada, ni hora reservada, ni reserva. Hace falta estar dispuestos a ir dos veces: la primera visita casi siempre cae a la hora equivocada.'
        ]
      },
      {
        id: 'from-our-door',
        eyebrow: 'Desde nuestra puerta',
        title: 'Quinientos metros, y por eso uno vuelve sin pensarlo',
        paragraphs: [
          'Desde AMARA Playa hay unos 500 metros hasta el mirador — una distancia que se hace después de cenar sin planificarla. Ahí está la diferencia entre «haber visto el Balcón» y «haber estado en el Balcón».',
          'Fuimos huéspedes de este mismo apartamento durante años antes de comprarlo. En ese tiempo, el paseo hasta el Balcón nunca fue un punto del programa: era una costumbre.',
          'Quien se aloja en el centro va tres veces. Quien se aloja fuera va una — y entonces ha visto el Balcón de mediodía, el menos interesante de los tres.'
        ]
      }
    ],
    related: {
      eyebrow: 'Seguir leyendo',
      title: 'Por dónde sigue la noche desde aquí',
      links: [
        {
          token: 'nerja_nightlife_authority',
          label: 'Las noches en Nerja',
          text: 'Qué zona encaja con qué tipo de noche cuando dejáis el mirador.'
        },
        {
          token: 'nerja_geography',
          label: 'Situación y orientación',
          text: 'Por qué las playas quedan debajo del pueblo y no delante de él.'
        }
      ]
    },
    sources: {
      eyebrow: 'Detrás de esta guía',
      title: 'Fuentes',
      intro:
        'El Balcón es espacio público sin gestor, así que no hay horarios ni entradas que documentar. Para el contexto histórico nos ceñimos a lo que publican las instituciones locales, y la historia del rey se señala como tradición oral porque no puede documentarse como cita.',
      checked: 'Fuentes consultadas en agosto de 2026.',
      links: [
        {
          label: 'Ayuntamiento de Nerja',
          text: 'El ayuntamiento, para información local actual y avisos.',
          href: sharedSources.municipality
        },
        {
          label: 'Cultura Nerja',
          text: 'El servicio municipal de cultura, para patrimonio y programación.',
          href: sharedSources.culture
        }
      ]
    },
    closing: {
      eyebrow: 'De vuelta a la estancia',
      title: 'El Balcón no es un monumento que se tacha de la lista. Es un paseo que se convierte en costumbre.',
      body: 'Desde nuestra puerta son cinco minutos. Suficiente para verlo vacío por la mañana e iluminado por la noche — y son dos lugares distintos.',
      propertyLabel: 'Ver AMARA Playa',
      locationLabel: 'Volver a la guía de Nerja'
    }
  },
  nl: {
    navLabel: 'Balcón de Europa',
    breadcrumbLabel: 'Balcón de Europa',
    hero: {
      eyebrow: 'Nerja · Balcón de Europa',
      title: 'De Balcón de Europa is geen geheime tip — en juist daarom werkt hij',
      standfirst:
        'Een uitkijkterras op een rotspunt aan het einde van de oude stad, met daaronder de open Middellandse Zee. Elke reisgids noemt hem en elke bezoeker staat er, en toch is hij niet kapotgegaan. Dat komt door wat eronder ligt — en door waar de mensen van Nerja hem nog steeds voor gebruiken.',
      note: 'Een gids geschreven door jullie gastheren. Evenementen en straatleven wisselen; zie dit als oriëntatie, niet als programma.',
      updated: 'Laatst gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Vanaf AMARA Playa', value: 'Ongeveer 500 meter lopen' },
      { label: 'Toegang', value: 'Vrij, op elk uur' },
      { label: 'Rustigste uren', value: 'Voor 10 en na 22 uur' },
      { label: 'Wat er nog staat', value: 'Twee kanonnen van de oude batterij' }
    ],
    sections: [
      {
        id: 'the-view',
        eyebrow: 'De eerste indruk',
        title: 'Je loopt door een steegje en staat opeens boven zee',
        paragraphs: [
          'De oude stad van Nerja brengt jullie er naartoe zonder het aan te kondigen. Je loopt door smalle straten tussen witgekalkte huizen, en dan houdt de weg gewoon op. Wat overblijft is een palmenlaan op een rots, en daaronder de open Middellandse Zee.',
          'Naar links gaat het uitzicht oostwaarts over Calahonda en de baaitjes, naar rechts opent het zich westwaarts over Torrecilla en het strand. Bij helder weer staat de Sierra Almijara in jullie rug. Dit is het punt waarop vanzelf duidelijk wordt waarom Nerja precies hier gebouwd is.',
          'Eerlijk erbij: jullie zullen niet alleen zijn. Dit is de meest gefotografeerde plek van de kust ten oosten van Málaga, en tussen 11 en 19 uur merk je dat — straatmuziek, ijs, reisgroepen. Wie rust zoekt, voor die telt het tijdstip meer dan al het andere op deze pagina.'
        ]
      },
      {
        id: 'the-name',
        eyebrow: 'De naam',
        title: 'Het verhaal over de koning, en het deel dat overlevering is',
        paragraphs: [
          'Het verhaal gaat zo: na de zware aardbeving die deze streek aan het eind van de negentiende eeuw trof, bezocht de Spaanse koning de beschadigde dorpen, stapte op deze rotspunt en noemde hem „el balcón de Europa". De naam bleef.',
          'Zo wordt het in Nerja verteld, en het standbeeld bij de ingang van het terras toont precies dat tafereel. Wij geven het verhaal door zoals het verteld wordt — als overlevering, niet als gedocumenteerd citaat. Wie hier staat, mag weten dat hij op een naam staat die uit een anekdote komt.',
          'De plek wordt er niet minder mooi van. Het betekent alleen dat de interessantere geschiedenis niet die op het standbeeld is, maar die onder jullie voeten.'
        ]
      },
      {
        id: 'the-fort',
        eyebrow: 'Wat eronder ligt',
        title: 'Vóór het uitkijkterras stond hier een kanonnenbatterij',
        paragraphs: [
          'De rotspunt was niet als uitzichtpunt bedoeld. Hij droeg een kustversterking, de Batería de la Concepción, en bewaakte een stuk kust dat door een keten van torens en batterijen verdedigd werd.',
          'Twee kanonnen staan er vandaag nog. De meeste bezoekers fotograferen ze zonder te weten dat zij de reden zijn voor de vorm van dit plein. De Balcón is rond en steekt vooruit omdat een batterij schootsveld nodig heeft — niet omdat iemand een panorama plande.',
          'Dat is het stuk dat wij het liefst vertellen: het bekendste ansichtkaartuitzicht van deze hoek van Andalusië is het neveneffect van een militaire installatie.'
        ]
      },
      {
        id: 'when-to-go',
        eyebrow: 'Het praktische deel',
        title: 'Op één dag zijn er drie totaal verschillende Balcóns',
        paragraphs: [
          'Vroeg, voor tienen, is het terras van de mensen die hier wonen. Oudere heren op de bankjes, hondenuitlaters, iemand met koffie. Het licht valt laag vanuit het oosten over de baaitjes. Willen jullie de plek één keer zonder publiek zien, dan is dat het uur.',
          '’s Middags is het druk. Touringcars stoppen boven, de muzikanten spelen en het terras wordt een doorgang. Prima om doorheen te lopen, maar niets om voor te komen.',
          'Na zonsondergang gaat de verlichting aan, de dagbezoekers zijn weg, en het wordt weer een plek om stil te staan. Wat jullie niet nodig hebben: kaartje, tijdslot, reservering. Wat wel: de bereidheid om twee keer te gaan — want het eerste bezoek valt bijna altijd op het verkeerde uur.'
        ]
      },
      {
        id: 'from-our-door',
        eyebrow: 'Vanaf onze deur',
        title: 'Vijfhonderd meter, en daarom loop je er gewoon nog eens heen',
        paragraphs: [
          'Vanaf AMARA Playa is het ongeveer 500 meter tot het terras — een afstand die je na het eten loopt zonder hem te plannen. Precies daarin zit het verschil tussen „de Balcón gezien hebben" en „op de Balcón geweest zijn".',
          'Wij waren jarenlang zelf gast in dit appartement voordat we het kochten. In die tijd was de wandeling naar de Balcón nooit een programmapunt, maar een gewoonte.',
          'Wie in het centrum verblijft, gaat drie keer. Wie buiten verblijft, één keer — en heeft dan de middagbalcón gezien, de minst interessante van de drie.'
        ]
      }
    ],
    related: {
      eyebrow: 'Verder lezen',
      title: 'Hoe de avond vanaf hier verdergaat',
      links: [
        {
          token: 'nerja_nightlife_authority',
          label: '’s Avonds in Nerja',
          text: 'Welke buurt bij welke avond past zodra jullie het terras verlaten.'
        },
        {
          token: 'nerja_geography',
          label: 'Ligging & oriëntatie',
          text: 'Waarom de stranden ónder het dorp liggen en niet ervoor.'
        }
      ]
    },
    sources: {
      eyebrow: 'Achter deze gids',
      title: 'Bronnen',
      intro:
        'De Balcón is openbare ruimte zonder beheerder, dus er zijn geen openingstijden of tickets te documenteren. Voor de historische context houden we ons aan wat lokale instellingen publiceren, en het verhaal rond de koning is als overlevering gemarkeerd omdat het niet als citaat te onderbouwen is.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        {
          label: 'Ayuntamiento de Nerja',
          text: 'De gemeente, voor actuele lokale informatie en mededelingen.',
          href: sharedSources.municipality
        },
        {
          label: 'Cultura Nerja',
          text: 'De gemeentelijke cultuurdienst, voor erfgoed en programmering.',
          href: sharedSources.culture
        }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'De Balcón is geen bezienswaardigheid die je afvinkt. Het is een wandeling die een gewoonte wordt.',
      body: 'Vanaf onze deur is het vijf minuten. Genoeg om hem ’s ochtends leeg en ’s avonds verlicht te zien — en dat zijn twee verschillende plekken.',
      propertyLabel: 'Bekijk AMARA Playa',
      locationLabel: 'Terug naar de Nerja-gids'
    }
  },
  sv: {
    navLabel: 'Balcón de Europa',
    breadcrumbLabel: 'Balcón de Europa',
    hero: {
      eyebrow: 'Nerja · Balcón de Europa',
      title: 'Balcón de Europa är inget smultronställe — och just därför fungerar den',
      standfirst:
        'En utsiktsterrass på en klippudde i slutet av gamla stan, med öppna Medelhavet nedanför. Varje guidebok nämner den och varje besökare står där, ändå har den inte blivit förstörd. Det beror på vad som ligger under den — och på vad Nerjaborna fortfarande använder den till.',
      note: 'En guide skriven av era värdar. Evenemang och gatuliv växlar; se detta som orientering, inte som program.',
      updated: 'Senast kontrollerad i augusti 2026'
    },
    facts: [
      { label: 'Från AMARA Playa', value: 'Ungefär 500 meter till fots' },
      { label: 'Tillträde', value: 'Fritt, dygnet runt' },
      { label: 'Lugnaste tiderna', value: 'Före 10 och efter 22' },
      { label: 'Det som står kvar', value: 'Två kanoner från det gamla batteriet' }
    ],
    sections: [
      {
        id: 'the-view',
        eyebrow: 'Första intrycket',
        title: 'Man går genom en gränd och står plötsligt ovanför havet',
        paragraphs: [
          'Nerjas gamla stan leder er dit utan att förvarna. Ni går genom smala gator mellan vitkalkade hus, och sedan tar vägen helt enkelt slut. Kvar finns en palmallé på en klippa och nedanför det öppna Medelhavet.',
          'Åt vänster går blicken österut över Calahonda och vikarna, åt höger öppnar den sig västerut över Torrecilla och stranden. En klar dag står Sierra Almijara i ryggen. Det är punkten där det förklarar sig självt varför Nerja byggdes just här.',
          'Ärligt talat: ni kommer inte att vara ensamma. Det här är den mest fotograferade platsen på kusten öster om Málaga, och mellan 11 och 19 märks det — gatumusik, glass, resegrupper. Den som vill ha lugn bryr sig mer om tiden på dygnet än om något annat på den här sidan.'
        ]
      },
      {
        id: 'the-name',
        eyebrow: 'Namnet',
        title: 'Historien om kungen — och den del av den som är tradition',
        paragraphs: [
          'Berättelsen går så här: efter den svåra jordbävning som drabbade regionen i slutet av 1800-talet besökte Spaniens kung de skadade orterna, klev ut på den här klippudden och kallade den ”el balcón de Europa”. Namnet blev kvar.',
          'Så berättas det i Nerja, och statyn vid ingången till terrassen visar exakt den scenen. Vi för historien vidare som den berättas — som tradition, inte som belagt citat. Den som står här bör veta att hen står på ett namn som kommer ur en anekdot.',
          'Platsen blir inte mindre vacker av det. Det betyder bara att den intressantare historien inte är den på statyn, utan den under era fötter.'
        ]
      },
      {
        id: 'the-fort',
        eyebrow: 'Det som ligger under',
        title: 'Före utsiktsterrassen stod här ett kanonbatteri',
        paragraphs: [
          'Klippudden var inte tänkt som utsiktsplats. Den bar en kustbefästning, Batería de la Concepción, och bevakade en kuststräcka som försvarades av en kedja av torn och batterier.',
          'Två kanoner står kvar på terrassen än i dag. De flesta besökare fotograferar dem utan att veta att de är skälet till torgets form. Balcón är rund och skjuter fram för att ett batteri behöver skottfält — inte för att någon planerade en panoramavy.',
          'Det är den del vi helst berättar: det mest kända vykortsmotivet i det här hörnet av Andalusien är en bieffekt av en militär anläggning.'
        ]
      },
      {
        id: 'when-to-go',
        eyebrow: 'Det praktiska',
        title: 'På en och samma dag finns tre helt olika Balcón',
        paragraphs: [
          'Tidigt, före tio, tillhör terrassen dem som bor här. Äldre herrar på bänkarna, hundägare, någon med kaffe. Ljuset kommer lågt från öster över vikarna. Vill ni se platsen en gång utan publik är det den timmen.',
          'Mitt på dagen är det fullt. Bussar stannar ovanför, musikerna spelar och terrassen blir en genomfartsplats. Helt okej att gå igenom, men inget att resa för.',
          'Efter solnedgången tänds belysningen, dagsbesökarna är borta och det blir åter en plats att stanna upp på. Vad ni inte behöver: biljett, tidsfönster, bokning. Vad ni behöver: viljan att gå dit två gånger — det första besöket hamnar nästan alltid på fel timme.'
        ]
      },
      {
        id: 'from-our-door',
        eyebrow: 'Från vår dörr',
        title: 'Femhundra meter, och därför går man dit en gång till',
        paragraphs: [
          'Från AMARA Playa är det ungefär 500 meter till terrassen — en sträcka man går efter maten utan att planera den. Just där ligger skillnaden mellan att ha sett Balcón och att ha varit på Balcón.',
          'Vi var själva gäster i just den här lägenheten i flera år innan vi köpte den. Under den tiden var promenaden till Balcón aldrig en programpunkt, utan en vana.',
          'Den som bor i centrum går dit tre gånger. Den som bor utanför går en gång — och har då sett middagsbalcón, den minst intressanta av de tre.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Vart kvällen tar vägen härifrån',
      links: [
        {
          token: 'nerja_nightlife_authority',
          label: 'Kvällar i Nerja',
          text: 'Vilken stadsdel som passar vilken sorts kväll när ni lämnar terrassen.'
        },
        {
          token: 'nerja_geography',
          label: 'Läge och orientering',
          text: 'Varför stränderna ligger under orten och inte framför den.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bakom guiden',
      title: 'Källor',
      intro:
        'Balcón är offentlig plats utan driftansvarig, så det finns varken öppettider eller biljetter att belägga. För den historiska inramningen håller vi oss till vad lokala institutioner publicerar, och historien om kungen är markerad som tradition eftersom den inte går att belägga som citat.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        {
          label: 'Ayuntamiento de Nerja',
          text: 'Kommunen, för aktuell lokal information och meddelanden.',
          href: sharedSources.municipality
        },
        {
          label: 'Cultura Nerja',
          text: 'Kommunens kulturförvaltning, för kulturarv och aktuellt program.',
          href: sharedSources.culture
        }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'Balcón är ingen sevärdhet man bockar av. Det är en promenad man vänjer sig vid.',
      body: 'Från vår dörr tar det fem minuter. Det räcker för att se den tom på morgonen och upplyst på kvällen — och det är två olika platser.',
      propertyLabel: 'Se AMARA Playa',
      locationLabel: 'Tillbaka till Nerja-guiden'
    }
  }
};
