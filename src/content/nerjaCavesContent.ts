import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaCavesSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaCavesLocale {
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
  sections: NerjaCavesSection[];
  personal: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
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
  official: 'https://cuevadenerja.es/salas-de-la-cueva-de-nerja/',
  dating:
    'https://www.uco.es/investigacion/ucci/es/noticias-gen/item/3001-cuestionan-la-autoria-neandertal-del-arte-rupestre-a-traves-de-la-cueva-de-nerja',
  provincia: 'https://www.malaga.es/en/laprovincia/naturaleza/lis_cd-1690/cueva-de-nerja'
};

export const nerjaCavesSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-caves-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Caves of Nerja: The Column, the Paintings and What You Actually See',
      description:
        'Found by five teenagers in 1959: the world’s largest joined column, cave paintings whose age was revised, and which galleries visitors can enter.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Höhlen von Nerja: Die Säule, die Malereien und was ihr wirklich seht',
      description:
        '1959 von fünf Jugendlichen gefunden: die größte zusammengewachsene Tropfsteinsäule der Welt, Malereien mit korrigiertem Alter und die zugänglichen Galerien.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cueva de Nerja: la columna, las pinturas y lo que se ve de verdad',
      description:
        'Descubierta en 1959 por cinco jóvenes: la mayor columna del mundo, pinturas cuya datación se revisó y qué galerías se pueden visitar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Grotten van Nerja: de zuil, de schilderingen en wat je echt ziet',
      description:
        'In 1959 gevonden door vijf jongeren: de grootste samengegroeide druipsteenzuil ter wereld, schilderingen met herziene datering en de open galerijen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nerjas grottor: pelaren, målningarna och vad ni faktiskt ser',
      description:
        'Hittad 1959 av fem ungdomar: världens största sammanvuxna droppstenspelare, målningar med reviderad datering och vilka gallerier som är öppna.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaCavesContent: Record<AmaraLanguage, NerjaCavesLocale> = {
  en: {
    navLabel: 'Caves of Nerja',
    breadcrumbLabel: 'Caves of Nerja',
    hero: {
      eyebrow: 'Nerja · Caves',
      title: 'Five teenagers went looking for bats and found a cathedral',
      standfirst:
        'The Caves of Nerja are the most visited thing in the area, and the most misreported. This is what is actually established: who found them, what the record-holding column really is, and why the famous date on the paintings turned out to be wrong.',
      note: 'Opening hours, prices and time slots change and are deliberately not listed here — check the operator before you go.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'Discovered', value: '12 January 1959' },
      { label: 'Explored length', value: '4,823 metres' },
      { label: 'The column', value: '32 m tall · Guinness record since 1989' },
      { label: 'The visit', value: '45–60 min · over 458 steps' }
    ],
    sections: [
      {
        id: 'discovery',
        eyebrow: 'The find',
        title: 'Bats gave it away',
        paragraphs: [
          'On 12 January 1959 five young men from Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas and Manuel Muñoz — squeezed through a narrow karst shaft called La Mina.',
          'They had been watching bats fly in and out of it in the evenings and cleared away the stone formations blocking the way. Behind it lay a system that is now explored to a length of 4,823 metres.'
        ]
      },
      {
        id: 'column',
        eyebrow: 'The record',
        title: 'What the Guinness entry actually says',
        paragraphs: [
          'In the Sala del Cataclismo stands a free-standing column formed where a stalagmite and a stalactite grew into one another. The operator gives its height as 32 metres and its base as 13 by 7 metres.',
          'It has held a Guinness World Record since 1989 — not 1994, as is often repeated — and the title is precise: the largest column formed by the merging of a stalagmite and a stalactite.',
          'Calling it "the world’s largest stalagmite" is wrong. Once the two have joined, it is no longer a stalagmite; it is a column. The distinction matters because it is the only claim here that is actually certified.'
        ]
      },
      {
        id: 'paintings',
        eyebrow: 'The paintings',
        title: 'The date everyone quotes was withdrawn',
        paragraphs: [
          'In 2012 a research team dated charcoal found beside the red animal figures to between 42,300 and 43,500 years. That is older than the arrival of Homo sapiens in southern Iberia, so the paintings were proposed as the work of Neanderthals — and, if true, the oldest known art of humankind.',
          'That reading did not survive testing. A 2020 paper in the Journal of Archaeological Science showed that the calcite crusts used for uranium-thorium dating behave as an open system here, producing wildly inverted ages. One layer that sits above an 18,000–20,000-year-old charcoal deposit returned a calculated age of 118,900 years.',
          'José Luis Sanchidrián, who led the original 2012 work, is a co-author of the paper that corrected it. Today the paintings are placed in the Upper Palaeolithic and attributed to Homo sapiens. The Neanderthal thesis is considered closed — which is a better story than the one it replaced, not a worse one.'
        ]
      },
      {
        id: 'what-you-see',
        eyebrow: 'Before you go',
        title: 'Most of the cave is closed, and that is the point',
        paragraphs: [
          'Visitors walk the Galerías Turísticas: the halls of the Fantasmas, the Belén, the Cascadas, the Cataclismo and the Torca. The Galerías Altas and Galerías Nuevas are closed to the public to protect sinter basins and limit heat and humidity.',
          'The painted chambers are not on the route at all and cannot be seen. They are presented instead through high-resolution scans and virtual reality at the Museo de Nerja on Plaza de España — which is the honest way to visit them.',
          'One practical warning: the route has more than 458 steps up and down, with damp ground in places. It is not accessible, and pushchairs and wheelchairs cannot be taken in.'
        ]
      }
    ],
    personal: {
      eyebrow: 'Our own visit',
      title: 'What we did not expect: flying through the galleries that are closed',
      paragraphs: [
        'Alongside the walking route there is a VR experience called “El Gran Viaje Interior”. We did not pay anything extra for it, and we nearly walked past it. That would have been a mistake.',
        'You sit down, put on a headset, and the film first takes you over Nerja from the air — genuinely striking footage — then shows how the cave was formed, and finally flies you through galleries visitors are not allowed to enter. It runs about twelve minutes, and because it is filmed in 360 degrees you look wherever you want while you move. That is what makes it work: you are not watching a film, you are turning your head in a place you will never stand in.',
        'The cave itself does the rest. It stays cool inside — nine degrees, we were told — which in high summer is the most pleasant hour of the day. And on one of the rare days when it rains, this is the one thing on this coast that does not care about the weather.'
      ],
      imageAlt: 'Putting on a VR headset in the El Gran Viaje Interior room at the Caves of Nerja'
    },
    related: {
      eyebrow: 'Continue',
      title: 'Around the caves',
      links: [
        {
          token: 'nerja_geography',
          label: 'Geography & orientation',
          text: 'Maro, the cliffs and how the eastern side of the municipality fits together.'
        },
        {
          token: 'nerja_weather',
          label: 'Weather & seasons',
          text: 'The cave holds its own climate — outside, the season decides your day.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Sources',
      intro:
        'Measurements and access come from the cave operator and public bodies; the dating history from the peer-reviewed literature. Prices, hours and time slots change and are not stated here.',
      checked: 'Sources checked in August 2026.',
      links: [
        {
          label: 'Fundación Cueva de Nerja · The halls',
          text: 'The operator on the galleries, the column and what is open to visitors.',
          href: sharedSources.official
        },
        {
          label: 'Universidad de Córdoba · Questioning the Neanderthal authorship',
          text: 'The university on the study that revised the dating of the paintings.',
          href: sharedSources.dating
        },
        {
          label: 'Diputación de Málaga · Cueva de Nerja',
          text: 'Public provincial information on the cave and its setting.',
          href: sharedSources.provincia
        }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'An hour underground, and the rest of the day is still yours.',
      body: 'The caves sit four kilometres east of the centre. From our door it is a short drive there and a shorter walk back to the sea.',
      propertyLabel: 'View AMARA Playa',
      locationLabel: 'Back to the Nerja location guide'
    }
  },
  de: {
    navLabel: 'Höhlen von Nerja',
    breadcrumbLabel: 'Höhlen von Nerja',
    hero: {
      eyebrow: 'Nerja · Höhlen',
      title: 'Fünf Jugendliche suchten Fledermäuse und fanden eine Kathedrale',
      standfirst:
        'Die Höhlen von Nerja sind die meistbesuchte Sehenswürdigkeit der Gegend – und die am häufigsten falsch beschriebene. Hier steht, was gesichert ist: wer sie fand, was die Rekordsäule wirklich ist und warum das berühmte Alter der Malereien nicht stimmt.',
      note: 'Öffnungszeiten, Preise und Zeitfenster ändern sich und stehen hier bewusst nicht – prüft sie vor dem Besuch beim Betreiber.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Entdeckt', value: '12. Januar 1959' },
      { label: 'Erforschte Länge', value: '4.823 Meter' },
      { label: 'Die Säule', value: '32 m hoch · Guinness-Rekord seit 1989' },
      { label: 'Der Rundgang', value: '45–60 Min · über 458 Stufen' }
    ],
    sections: [
      {
        id: 'discovery',
        eyebrow: 'Der Fund',
        title: 'Die Fledermäuse haben sie verraten',
        paragraphs: [
          'Am 12. Januar 1959 zwängten sich fünf junge Männer aus Maro – Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas und Manuel Muñoz – durch einen engen Karstschacht namens La Mina.',
          'Sie hatten abends beobachtet, wie dort Fledermäuse ein- und ausflogen, und die störenden Sinterformationen freigelegt. Dahinter lag ein System, das heute auf einer Länge von 4.823 Metern erforscht ist.'
        ]
      },
      {
        id: 'column',
        eyebrow: 'Der Rekord',
        title: 'Was im Guinness-Eintrag wirklich steht',
        paragraphs: [
          'Im Sala del Cataclismo steht eine freistehende Säule, entstanden dort, wo ein Stalagmit und ein Stalaktit zusammengewachsen sind. Der Betreiber gibt ihre Höhe mit 32 Metern an, die Basis mit 13 mal 7 Metern.',
          'Den Guinness-Weltrekord hält sie seit 1989 – nicht seit 1994, wie oft wiederholt wird – und der Titel ist präzise: die größte Säule, die durch das Zusammenwachsen von Stalagmit und Stalaktit entstanden ist.',
          '„Größter Stalagmit der Welt" ist dagegen falsch. Sobald beide zusammengewachsen sind, ist es kein Stalagmit mehr, sondern eine Säule. Der Unterschied zählt, weil dies die einzige Aussage hier ist, die tatsächlich zertifiziert wurde.'
        ]
      },
      {
        id: 'paintings',
        eyebrow: 'Die Malereien',
        title: 'Das Alter, das alle zitieren, wurde zurückgezogen',
        paragraphs: [
          '2012 datierte ein Forschungsteam Holzkohle neben den roten Tierfiguren auf 42.300 bis 43.500 Jahre. Das liegt vor der Ankunft des Homo sapiens in Südspanien – also wurden die Malereien Neandertalern zugeschrieben und wären damit die älteste bekannte Kunst der Menschheit gewesen.',
          'Diese Lesart hielt der Überprüfung nicht stand. Eine Arbeit von 2020 im Journal of Archaeological Science zeigte, dass sich die für die Uran-Thorium-Datierung genutzten Calcitkrusten hier wie ein offenes System verhalten und dabei völlig verdrehte Alter liefern. Eine Schicht oberhalb einer 18.000 bis 20.000 Jahre alten Holzkohlelage ergab rechnerisch 118.900 Jahre.',
          'José Luis Sanchidrián, der die ursprüngliche Studie von 2012 geleitet hatte, ist Mitautor der Arbeit, die sie korrigiert. Heute gelten die Malereien als jungpaläolithisch und werden dem Homo sapiens zugeschrieben. Die Neandertaler-These ist damit erledigt – und das ist die bessere Geschichte, nicht die schlechtere.'
        ]
      },
      {
        id: 'what-you-see',
        eyebrow: 'Vor dem Besuch',
        title: 'Der größte Teil der Höhle ist gesperrt, und das ist gut so',
        paragraphs: [
          'Besucher gehen die Galerías Turísticas: die Säle der Fantasmas, den Belén, die Cascadas, den Cataclismo und die Torca. Die Galerías Altas und die Galerías Nuevas sind für die Öffentlichkeit gesperrt, um Sinterbecken zu schützen und Wärme- und Feuchtigkeitseintrag zu begrenzen.',
          'Die bemalten Kammern liegen gar nicht am Weg und sind nicht zu sehen. Sie werden stattdessen über hochauflösende Scans und Virtual Reality im Museo de Nerja an der Plaza de España gezeigt – und das ist der ehrliche Weg, sie zu besuchen.',
          'Ein praktischer Hinweis: Der Rundgang führt über mehr als 458 Stufen auf und ab, streckenweise auf feuchtem Untergrund. Er ist nicht barrierefrei; Kinderwagen und Rollstühle können nicht mitgenommen werden.'
        ]
      }
    ],
    personal: {
      eyebrow: 'Unser eigener Besuch',
      title: 'Womit wir nicht gerechnet hatten: durch die gesperrten Galerien fliegen',
      paragraphs: [
        'Neben dem Rundgang gibt es ein VR-Erlebnis, „El Gran Viaje Interior". Wir haben dafür nichts extra bezahlt und wären fast daran vorbeigelaufen. Das wäre ein Fehler gewesen.',
        'Man setzt sich hin, bekommt eine Brille auf, und der Film führt euch zuerst von oben über Nerja — wirklich beeindruckende Aufnahmen —, zeigt dann, wie die Höhle entstanden ist, und fliegt am Ende durch Galerien, die Besucher nicht betreten dürfen. Es dauert etwa zwölf Minuten, und weil in 360 Grad gefilmt wurde, schaut ihr dabei dorthin, wohin ihr wollt. Genau das macht den Unterschied: Ihr seht keinen Film, ihr dreht den Kopf an einem Ort, an dem ihr nie stehen werdet.',
        'Den Rest erledigt die Höhle selbst. Drinnen bleibt es kühl — neun Grad, hieß es —, und im Hochsommer ist das die angenehmste Stunde des Tages. Und an einem der seltenen Regentage ist das die eine Sache an dieser Küste, der das Wetter egal ist.'
      ],
      imageAlt: 'Aufsetzen der VR-Brille im Raum von El Gran Viaje Interior an der Cueva de Nerja'
    },
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Rund um die Höhlen',
      links: [
        {
          token: 'nerja_geography',
          label: 'Geografie & Orientierung',
          text: 'Maro, die Steilküste und wie die Ostseite der Gemeinde zusammenhängt.'
        },
        {
          token: 'nerja_weather',
          label: 'Wetter & Jahreszeiten',
          text: 'Die Höhle hat ihr eigenes Klima – draußen entscheidet die Jahreszeit über euren Tag.'
        }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Quellen',
      intro:
        'Maße und Zugänglichkeit stammen vom Höhlenbetreiber und von öffentlichen Stellen, die Datierungsgeschichte aus der begutachteten Fachliteratur. Preise, Zeiten und Zeitfenster ändern sich und stehen hier nicht.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        {
          label: 'Fundación Cueva de Nerja · Die Säle',
          text: 'Der Betreiber zu Galerien, Säule und dem, was Besuchern offensteht.',
          href: sharedSources.official
        },
        {
          label: 'Universidad de Córdoba · Zweifel an der Neandertaler-Autorschaft',
          text: 'Die Universität zur Studie, die die Datierung der Malereien revidiert hat.',
          href: sharedSources.dating
        },
        {
          label: 'Diputación de Málaga · Cueva de Nerja',
          text: 'Öffentliche Provinzinformation zur Höhle und ihrer Umgebung.',
          href: sharedSources.provincia
        }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Eine Stunde unter der Erde – und der Rest des Tages gehört noch euch.',
      body: 'Die Höhlen liegen vier Kilometer östlich des Zentrums. Von unserer Tür ist es eine kurze Fahrt hin und ein noch kürzerer Weg zurück ans Meer.',
      propertyLabel: 'AMARA Playa ansehen',
      locationLabel: 'Zurück zum Nerja Lage-Guide'
    }
  },
  es: {
    navLabel: 'Cueva de Nerja',
    breadcrumbLabel: 'Cueva de Nerja',
    hero: {
      eyebrow: 'Nerja · Cueva',
      title: 'Cinco jóvenes buscaban murciélagos y encontraron una catedral',
      standfirst:
        'La Cueva de Nerja es lo más visitado de la zona y también lo peor contado. Aquí está lo que está establecido: quién la encontró, qué es realmente la columna del récord y por qué la famosa datación de las pinturas no se sostiene.',
      note: 'Horarios, precios y franjas horarias cambian y no se indican aquí: consultadlos en la fundación antes de ir.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Descubierta', value: '12 de enero de 1959' },
      { label: 'Longitud explorada', value: '4.823 metros' },
      { label: 'La columna', value: '32 m · récord Guinness desde 1989' },
      { label: 'La visita', value: '45–60 min · más de 458 escalones' }
    ],
    sections: [
      {
        id: 'discovery',
        eyebrow: 'El hallazgo',
        title: 'Los murciélagos la delataron',
        paragraphs: [
          'El 12 de enero de 1959, cinco jóvenes de Maro —Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas y Manuel Muñoz— se colaron por una estrecha sima kárstica llamada La Mina.',
          'Habían observado por la tarde cómo entraban y salían murciélagos y retiraron las formaciones que bloqueaban el paso. Detrás había un sistema hoy explorado en 4.823 metros.'
        ]
      },
      {
        id: 'column',
        eyebrow: 'El récord',
        title: 'Lo que dice de verdad el registro Guinness',
        paragraphs: [
          'En la Sala del Cataclismo se alza una columna exenta, formada donde una estalagmita y una estalactita se unieron. La fundación indica 32 metros de altura y una base de 13 por 7 metros.',
          'Tiene el récord Guinness desde 1989 —no desde 1994, como suele repetirse— y el título es preciso: la columna más grande del mundo formada por la unión de una estalagmita y una estalactita.',
          'Llamarla «la mayor estalagmita del mundo» es incorrecto. Una vez unidas, ya no es una estalagmita, sino una columna. La distinción importa porque es la única afirmación de esta página que está realmente certificada.'
        ]
      },
      {
        id: 'paintings',
        eyebrow: 'Las pinturas',
        title: 'La fecha que todo el mundo cita fue retirada',
        paragraphs: [
          'En 2012 un equipo dató carbón hallado junto a las figuras rojas de animales entre 42.300 y 43.500 años. Eso es anterior a la llegada del Homo sapiens al sur peninsular, así que se propuso que las pinturas eran obra de neandertales y, de ser cierto, el arte más antiguo de la humanidad.',
          'Esa lectura no superó la comprobación. Un trabajo de 2020 en el Journal of Archaeological Science demostró que las costras de calcita usadas para la datación uranio-torio se comportan aquí como un sistema abierto y arrojan edades invertidas. Una capa situada sobre un carbón de 18.000–20.000 años dio 118.900 años.',
          'José Luis Sanchidrián, que dirigió el trabajo de 2012, firma como coautor el estudio que lo corrige. Hoy las pinturas se sitúan en el Paleolítico superior y se atribuyen al Homo sapiens. La tesis neandertal se considera cerrada, y esa es la mejor historia, no la peor.'
        ]
      },
      {
        id: 'what-you-see',
        eyebrow: 'Antes de ir',
        title: 'La mayor parte de la cueva está cerrada, y está bien así',
        paragraphs: [
          'La visita recorre las Galerías Turísticas: las salas de los Fantasmas, el Belén, las Cascadas, el Cataclismo y la Torca. Las Galerías Altas y las Galerías Nuevas están cerradas al público para proteger los gours y limitar el calor y la humedad.',
          'Las cámaras pintadas no están en el recorrido y no pueden verse. Se presentan mediante escaneados de alta resolución y realidad virtual en el Museo de Nerja, en la Plaza de España: esa es la forma honesta de visitarlas.',
          'Un aviso práctico: el recorrido supera los 458 escalones de subida y bajada, con suelo húmedo en tramos. No es accesible, y no se admiten carritos ni sillas de ruedas.'
        ]
      }
    ],
    personal: {
      eyebrow: 'Nuestra propia visita',
      title: 'Lo que no esperábamos: volar por las galerías cerradas',
      paragraphs: [
        'Junto al recorrido a pie hay una experiencia de realidad virtual, «El Gran Viaje Interior». No pagamos nada aparte y estuvimos a punto de pasar de largo. Habría sido un error.',
        'Uno se sienta, le colocan unas gafas, y la película os lleva primero sobre Nerja desde el aire —imágenes realmente impresionantes—, después muestra cómo se formó la cueva y termina volando por galerías en las que no se puede entrar. Dura unos doce minutos, y como está grabada en 360 grados miráis a donde queráis mientras avanzáis. Ahí está la diferencia: no veis una película, giráis la cabeza en un lugar donde nunca vais a estar.',
        'El resto lo hace la propia cueva. Dentro se mantiene fresca —nueve grados, nos dijeron—, y en pleno verano esa es la hora más agradable del día. Y en uno de esos días raros de lluvia, es lo único de esta costa a lo que el tiempo le da igual.'
      ],
      imageAlt: 'Colocándose las gafas de realidad virtual en la sala de El Gran Viaje Interior, en la Cueva de Nerja'
    },
    related: {
      eyebrow: 'Seguir leyendo',
      title: 'Alrededor de la cueva',
      links: [
        {
          token: 'nerja_geography',
          label: 'Geografía y orientación',
          text: 'Maro, los acantilados y cómo encaja el lado oriental del municipio.'
        },
        {
          token: 'nerja_weather',
          label: 'Tiempo y estaciones',
          text: 'La cueva tiene su propio clima; fuera, la estación decide vuestro día.'
        }
      ]
    },
    sources: {
      eyebrow: 'Detrás de esta guía',
      title: 'Fuentes',
      intro:
        'Medidas y accesos proceden de la fundación y de organismos públicos; la historia de la datación, de la literatura revisada por pares. Precios, horarios y franjas cambian y no se recogen aquí.',
      checked: 'Fuentes consultadas en agosto de 2026.',
      links: [
        {
          label: 'Fundación Cueva de Nerja · Las salas',
          text: 'La fundación sobre las galerías, la columna y lo que se puede visitar.',
          href: sharedSources.official
        },
        {
          label: 'Universidad de Córdoba · Se cuestiona la autoría neandertal',
          text: 'La universidad sobre el estudio que revisó la datación de las pinturas.',
          href: sharedSources.dating
        },
        {
          label: 'Diputación de Málaga · Cueva de Nerja',
          text: 'Información pública provincial sobre la cueva y su entorno.',
          href: sharedSources.provincia
        }
      ]
    },
    closing: {
      eyebrow: 'De vuelta a la estancia',
      title: 'Una hora bajo tierra y el resto del día sigue siendo vuestro.',
      body: 'La cueva está cuatro kilómetros al este del centro. Desde nuestra puerta es un trayecto corto de ida y un paseo aún más corto de vuelta al mar.',
      propertyLabel: 'Ver AMARA Playa',
      locationLabel: 'Volver a la guía de ubicación de Nerja'
    }
  },
  nl: {
    navLabel: 'Grotten van Nerja',
    breadcrumbLabel: 'Grotten van Nerja',
    hero: {
      eyebrow: 'Nerja · Grotten',
      title: 'Vijf jongeren zochten vleermuizen en vonden een kathedraal',
      standfirst:
        'De grotten van Nerja zijn de best bezochte bezienswaardigheid van de streek en tegelijk de slechtst beschreven. Hier staat wat vaststaat: wie ze vond, wat de recordzuil werkelijk is en waarom de beroemde datering van de schilderingen niet klopt.',
      note: 'Openingstijden, prijzen en tijdvakken veranderen en staan hier bewust niet — controleer ze vooraf bij de beheerder.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Ontdekt', value: '12 januari 1959' },
      { label: 'Verkende lengte', value: '4.823 meter' },
      { label: 'De zuil', value: '32 m · Guinness-record sinds 1989' },
      { label: 'Het bezoek', value: '45–60 min · ruim 458 treden' }
    ],
    sections: [
      {
        id: 'discovery',
        eyebrow: 'De vondst',
        title: 'De vleermuizen verraadden haar',
        paragraphs: [
          'Op 12 januari 1959 wrongen vijf jonge mannen uit Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas en Manuel Muñoz — zich door een nauwe karstschacht genaamd La Mina.',
          'Ze hadden ’s avonds vleermuizen in en uit zien vliegen en de druipsteenformaties weggehaald die de doorgang blokkeerden. Daarachter lag een stelsel dat nu over 4.823 meter is verkend.'
        ]
      },
      {
        id: 'column',
        eyebrow: 'Het record',
        title: 'Wat er werkelijk in het Guinness-record staat',
        paragraphs: [
          'In de Sala del Cataclismo staat een vrijstaande zuil, ontstaan waar een stalagmiet en een stalactiet aan elkaar groeiden. De beheerder geeft 32 meter hoogte en een basis van 13 bij 7 meter.',
          'Ze heeft het Guinness-wereldrecord sinds 1989 — niet sinds 1994, zoals vaak wordt herhaald — en de titel is precies: de grootste zuil gevormd door het samengroeien van een stalagmiet en een stalactiet.',
          '„Grootste stalagmiet ter wereld" is onjuist. Zodra beide zijn samengegroeid, is het geen stalagmiet meer maar een zuil. Het verschil telt, omdat dit de enige bewering op deze pagina is die daadwerkelijk gecertificeerd is.'
        ]
      },
      {
        id: 'paintings',
        eyebrow: 'De schilderingen',
        title: 'De datering die iedereen citeert is ingetrokken',
        paragraphs: [
          'In 2012 dateerde een onderzoeksteam houtskool naast de rode dierfiguren op 42.300 tot 43.500 jaar. Dat is ouder dan de komst van Homo sapiens in Zuid-Iberië, dus werden de schilderingen aan neanderthalers toegeschreven — en zouden ze de oudste bekende kunst van de mensheid zijn.',
          'Die lezing hield geen stand. Een studie uit 2020 in het Journal of Archaeological Science toonde aan dat de voor uranium-thoriumdatering gebruikte calcietkorsten zich hier als een open systeem gedragen en volledig omgekeerde ouderdommen opleveren. Een laag boven houtskool van 18.000–20.000 jaar gaf rekenkundig 118.900 jaar.',
          'José Luis Sanchidrián, die het oorspronkelijke werk van 2012 leidde, is medeauteur van de studie die het corrigeert. Vandaag worden de schilderingen in het jong-paleolithicum geplaatst en aan Homo sapiens toegeschreven. De neanderthalerthese geldt als gesloten — en dat is het betere verhaal, niet het slechtere.'
        ]
      },
      {
        id: 'what-you-see',
        eyebrow: 'Voor je gaat',
        title: 'Het grootste deel van de grot is gesloten, en dat is maar goed ook',
        paragraphs: [
          'Bezoekers lopen de Galerías Turísticas: de zalen van de Fantasmas, de Belén, de Cascadas, de Cataclismo en de Torca. De Galerías Altas en Galerías Nuevas zijn gesloten voor publiek om sinterbekkens te beschermen en warmte en vocht te beperken.',
          'De beschilderde kamers liggen niet aan de route en zijn niet te zien. Ze worden getoond via hogeresolutiescans en virtual reality in het Museo de Nerja aan de Plaza de España — dat is de eerlijke manier om ze te bezoeken.',
          'Een praktische waarschuwing: de route telt meer dan 458 treden omhoog en omlaag, plaatselijk met vochtige ondergrond. Hij is niet toegankelijk; kinderwagens en rolstoelen kunnen niet mee.'
        ]
      }
    ],
    personal: {
      eyebrow: 'Ons eigen bezoek',
      title: 'Waar we niet op gerekend hadden: door de gesloten galerijen vliegen',
      paragraphs: [
        'Naast de wandelroute is er een VR-ervaring, „El Gran Viaje Interior". We hebben er niets extra voor betaald en waren er bijna langsgelopen. Dat zou een fout zijn geweest.',
        'Je gaat zitten, krijgt een bril op, en de film neemt jullie eerst vanuit de lucht mee over Nerja — werkelijk indrukwekkende beelden —, laat daarna zien hoe de grot is ontstaan en vliegt tot slot door galerijen die bezoekers niet mogen betreden. Het duurt ongeveer twaalf minuten, en omdat er in 360 graden is gefilmd, kijken jullie ondertussen waarheen je wilt. Precies dat maakt het verschil: je kijkt niet naar een film, je draait je hoofd op een plek waar je nooit zult staan.',
        'De rest doet de grot zelf. Binnen blijft het koel — negen graden, werd ons verteld — en in de hoogzomer is dat het aangenaamste uur van de dag. En op een van die zeldzame regendagen is dit het enige aan deze kust waar het weer niets toe doet.'
      ],
      imageAlt: 'Een VR-bril opzetten in de zaal van El Gran Viaje Interior bij de Grotten van Nerja'
    },
    related: {
      eyebrow: 'Verder lezen',
      title: 'Rond de grotten',
      links: [
        {
          token: 'nerja_geography',
          label: 'Geografie & oriëntatie',
          text: 'Maro, de kliffen en hoe de oostkant van de gemeente in elkaar zit.'
        },
        {
          token: 'nerja_weather',
          label: 'Weer & seizoenen',
          text: 'De grot heeft haar eigen klimaat; buiten bepaalt het seizoen jullie dag.'
        }
      ]
    },
    sources: {
      eyebrow: 'Achter deze gids',
      title: 'Bronnen',
      intro:
        'Maten en toegang komen van de beheerder en van overheidsinstanties, de dateringsgeschiedenis uit peer-reviewed literatuur. Prijzen, tijden en tijdvakken veranderen en staan hier niet.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        {
          label: 'Fundación Cueva de Nerja · De zalen',
          text: 'De beheerder over de galerijen, de zuil en wat open is voor bezoekers.',
          href: sharedSources.official
        },
        {
          label: 'Universidad de Córdoba · Twijfel over neanderthalerauteurschap',
          text: 'De universiteit over de studie die de datering van de schilderingen herzag.',
          href: sharedSources.dating
        },
        {
          label: 'Diputación de Málaga · Cueva de Nerja',
          text: 'Openbare provinciale informatie over de grot en haar omgeving.',
          href: sharedSources.provincia
        }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'Een uur onder de grond, en de rest van de dag is nog van jullie.',
      body: 'De grotten liggen vier kilometer ten oosten van het centrum. Vanaf onze deur is het een korte rit heen en een nog kortere wandeling terug naar zee.',
      propertyLabel: 'Bekijk AMARA Playa',
      locationLabel: 'Terug naar de Nerja locatiegids'
    }
  },
  sv: {
    navLabel: 'Nerjas grottor',
    breadcrumbLabel: 'Nerjas grottor',
    hero: {
      eyebrow: 'Nerja · Grottorna',
      title: 'Fem ungdomar letade efter fladdermöss och hittade en katedral',
      standfirst:
        'Nerjas grottor är traktens mest besökta sevärdhet och samtidigt den som beskrivs sämst. Här står det som är fastslaget: vem som hittade dem, vad rekordpelaren faktiskt är och varför den berömda dateringen av målningarna inte håller.',
      note: 'Öppettider, priser och tidsluckor ändras och anges medvetet inte här — kontrollera dem hos anläggningen före besöket.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'Upptäckt', value: '12 januari 1959' },
      { label: 'Utforskad längd', value: '4 823 meter' },
      { label: 'Pelaren', value: '32 m · Guinnessrekord sedan 1989' },
      { label: 'Besöket', value: '45–60 min · över 458 trappsteg' }
    ],
    sections: [
      {
        id: 'discovery',
        eyebrow: 'Fyndet',
        title: 'Fladdermössen avslöjade den',
        paragraphs: [
          'Den 12 januari 1959 trängde sig fem unga män från Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas och Manuel Muñoz — genom ett trångt karstschakt som heter La Mina.',
          'De hade sett fladdermöss flyga in och ut om kvällarna och frilade droppstensformationerna som blockerade vägen. Bakom låg ett system som i dag är utforskat på 4 823 meter.'
        ]
      },
      {
        id: 'column',
        eyebrow: 'Rekordet',
        title: 'Vad Guinnessposten faktiskt säger',
        paragraphs: [
          'I Sala del Cataclismo står en fristående pelare, bildad där en stalagmit och en stalaktit vuxit ihop. Anläggningen anger höjden till 32 meter och basen till 13 gånger 7 meter.',
          'Den har Guinness världsrekord sedan 1989 — inte sedan 1994, som ofta upprepas — och titeln är exakt: den största pelare som bildats genom att en stalagmit och en stalaktit vuxit samman.',
          'Att kalla den ”världens största stalagmit” är fel. När de två har vuxit ihop är det inte längre en stalagmit utan en pelare. Skillnaden spelar roll, eftersom det är det enda påstående på den här sidan som faktiskt är certifierat.'
        ]
      },
      {
        id: 'paintings',
        eyebrow: 'Målningarna',
        title: 'Dateringen alla citerar har dragits tillbaka',
        paragraphs: [
          'År 2012 daterade ett forskarlag träkol intill de röda djurfigurerna till mellan 42 300 och 43 500 år. Det är äldre än Homo sapiens ankomst till södra Iberiska halvön, så målningarna föreslogs vara neandertalarnas verk — och i så fall mänsklighetens äldsta kända konst.',
          'Den tolkningen höll inte. En studie från 2020 i Journal of Archaeological Science visade att de kalcitskorpor som använts för uran-toriumdatering här beter sig som ett öppet system och ger helt omkastade åldrar. Ett lager ovanför träkol daterat till 18 000–20 000 år gav beräknat 118 900 år.',
          'José Luis Sanchidrián, som ledde det ursprungliga arbetet 2012, är medförfattare till studien som korrigerar det. I dag placeras målningarna i yngre paleolitikum och tillskrivs Homo sapiens. Neandertalartesen betraktas som avslutad — och det är den bättre historien, inte den sämre.'
        ]
      },
      {
        id: 'what-you-see',
        eyebrow: 'Före besöket',
        title: 'Största delen av grottan är stängd, och det är bra så',
        paragraphs: [
          'Besökare går Galerías Turísticas: salarna Fantasmas, Belén, Cascadas, Cataclismo och Torca. Galerías Altas och Galerías Nuevas är stängda för allmänheten för att skydda sinterbassänger och begränsa värme och fukt.',
          'De målade kamrarna ligger inte längs rutten och går inte att se. De visas i stället genom högupplösta skanningar och virtuell verklighet på Museo de Nerja vid Plaza de España — och det är det ärliga sättet att besöka dem.',
          'En praktisk varning: rutten har över 458 trappsteg upp och ner, delvis på fuktigt underlag. Den är inte tillgänglighetsanpassad; barnvagnar och rullstolar kan inte tas med.'
        ]
      }
    ],
    personal: {
      eyebrow: 'Vårt eget besök',
      title: 'Det vi inte hade räknat med: att flyga genom de stängda gångarna',
      paragraphs: [
        'Vid sidan av vandringsrundan finns en VR-upplevelse, ”El Gran Viaje Interior”. Vi betalade inget extra för den och gick nästan förbi. Det hade varit ett misstag.',
        'Man sätter sig ner, får på sig ett headset, och filmen tar er först över Nerja från luften — verkligen slående bilder — visar sedan hur grottan bildades och flyger till sist genom gångar som besökare inte får gå in i. Den håller på i ungefär tolv minuter, och eftersom den är filmad i 360 grader tittar ni vart ni vill medan ni rör er. Det är just det som gör skillnaden: ni ser inte en film, ni vrider på huvudet på en plats där ni aldrig kommer att stå.',
        'Resten sköter grottan själv. Inne håller sig svalt — nio grader, fick vi höra — och mitt i sommaren är det dygnets behagligaste timme. Och en av de sällsynta regndagarna är det här det enda på den här kusten som struntar i vädret.'
      ],
      imageAlt: 'Någon sätter på sig ett VR-headset i salen för El Gran Viaje Interior vid Nerjagrottorna'
    },
    related: {
      eyebrow: 'Läs vidare',
      title: 'Runt grottorna',
      links: [
        {
          token: 'nerja_geography',
          label: 'Geografi & orientering',
          text: 'Maro, klipporna och hur kommunens östra sida hänger ihop.'
        },
        {
          token: 'nerja_weather',
          label: 'Väder & årstider',
          text: 'Grottan har sitt eget klimat; utanför avgör årstiden er dag.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bakom guiden',
      title: 'Källor',
      intro:
        'Mått och tillgänglighet kommer från anläggningen och offentliga myndigheter, dateringshistoriken från granskad facklitteratur. Priser, tider och tidsluckor ändras och anges inte här.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        {
          label: 'Fundación Cueva de Nerja · Salarna',
          text: 'Anläggningen om gallerierna, pelaren och vad som är öppet för besökare.',
          href: sharedSources.official
        },
        {
          label: 'Universidad de Córdoba · Neandertalarnas upphovsmannaskap ifrågasatt',
          text: 'Universitetet om studien som reviderade dateringen av målningarna.',
          href: sharedSources.dating
        },
        {
          label: 'Diputación de Málaga · Cueva de Nerja',
          text: 'Offentlig provinsinformation om grottan och dess omgivning.',
          href: sharedSources.provincia
        }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'En timme under jord — och resten av dagen är fortfarande er.',
      body: 'Grottorna ligger fyra kilometer öster om centrum. Från vår dörr är det en kort körning dit och en ännu kortare promenad tillbaka till havet.',
      propertyLabel: 'Visa AMARA Playa',
      locationLabel: 'Tillbaka till Nerjas lägesguide'
    }
  }
};
