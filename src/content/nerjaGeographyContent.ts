import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaGeographySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaGeographyLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  orientation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  sections: NerjaGeographySection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: string; label: string; text: string }>;
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
    locationLabel: string;
    propertyLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

/**
 * Public, verifiable sources. Shared across locales so a URL change stays a
 * single edit and every language keeps citing exactly the same reference.
 */
const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075',
  naturalPark:
    'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-sierras-de-tejeda-almijara-y-alhama',
  chillar: 'https://www.malaga.es/en/laprovincia/naturaleza/lis_cd-10589/vado-de-los-patos-rio-chillar-nerja',
  aemet: 'https://www.aemet.es/en/eltiempo/prediccion/municipios/nerja-id29075',
  /** WARTUNGSPUNKT: Río Chíllar closure. Re-check before each release. */
  chillarClosure: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
};

export const nerjaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-13-nerja-geography-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Nerja? Coast, Sierra Almijara and the Río Chíllar',
      description:
        'See where Nerja sits between the Mediterranean and the Sierra Almijara, why the town is built on a low cliff, and what that means for your days here.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Nerja? Küste, Sierra Almijara und der Río Chíllar',
      description:
        'Nerjas Lage zwischen Mittelmeer und Sierra Almijara: warum der Ort auf einer niedrigen Kliffkante steht und was das für eure Tage vor Ort bedeutet.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Nerja: costa, Sierra Almijara y el río Chíllar',
      description:
        'La posición de Nerja entre el Mediterráneo y la Sierra Almijara: por qué el pueblo se asienta sobre un acantilado bajo y qué significa para vuestros días aquí.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Nerja? Kust, Sierra Almijara en de Río Chíllar',
      description:
        'De ligging van Nerja tussen Middellandse Zee en Sierra Almijara: waarom het dorp op een lage klif staat en wat dat betekent voor jullie dagen hier.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Nerja? Kusten, Sierra Almijara och Río Chíllar',
      description:
        'Nerjas läge mellan Medelhavet och Sierra Almijara: varför orten ligger på en låg klippkant och vad det betyder för era dagar här.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaGeographyContent: Record<AmaraLanguage, NerjaGeographyLocale> = {
  en: {
    navLabel: 'Geography & orientation',
    hero: {
      eyebrow: 'Nerja · Geography & orientation',
      title: 'A town on a low cliff, with a 1,800-metre mountain behind it',
      standfirst:
        'Nerja is squeezed into a narrow strip between the Mediterranean and the Sierra Almijara. That strip is why the town stays walkable, why the beaches lie below rather than in front of it, and why almost every street eventually runs downhill to the sea.',
      note: 'Fixed geographic figures come from Spanish public sources. Conditions on the ground still change with season and weather.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'To Málaga', value: 'Roughly 50 km west along the coast' },
      { label: 'Municipal area', value: 'About 85 km², with 14.5 km of coast' },
      { label: 'Highest point', value: 'Pico Navachica, 1,832 m' },
      { label: 'Protected land', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Four bearings',
      title: 'Everything in Nerja is read from the sea upwards',
      intro:
        'Once you know these four directions, the town stops being a maze. Nerja is small enough that orientation is a one-day skill.',
      items: [
        { label: 'South', value: 'The Mediterranean, always downhill from you' },
        { label: 'North', value: 'The Sierra Almijara, rising steeply behind town' },
        { label: 'West', value: 'The Río Chíllar mouth and the quieter western beaches' },
        { label: 'East', value: 'Burriana, the Cuevas and the road towards Granada' }
      ]
    },
    sections: [
      {
        id: 'coast-and-cliff',
        eyebrow: 'The coastline',
        title: 'The beaches are below the town, not in front of it',
        paragraphs: [
          'Nerja does not sit on its beach. It sits on a low cliff above a series of coves, and that single fact shapes more of a stay here than any other.',
          'The municipality holds roughly 14.5 kilometres of coast, broken into separate bays rather than one continuous strand. Between them the rock comes right down to the water, which is why Nerja has many small beaches instead of one big one — and why each of them has its own character and its own way down.',
          'Practically, that means most beach visits include a descent and a climb. It is rarely far, but it is rarely flat either.'
        ]
      },
      {
        id: 'mountains-behind',
        eyebrow: 'The mountains',
        title: 'The Sierra Almijara starts where the town stops',
        paragraphs: [
          'Behind Nerja the land does not ease into hills — it climbs. The northern part of the municipality belongs to the Sierras de Tejeda, Almijara y Alhama Natural Park, declared in 1999 and covering some 40,662 hectares across Málaga and Granada provinces.',
          'The highest point above Nerja is Pico Navachica at 1,832 metres. From sea level to that summit is a horizontal distance most towns would use to reach a suburb.',
          'The same park also covers Frigiliana, fifteen minutes inland. Nerja and Frigiliana are not two unrelated places — they are the coastal and the mountain end of one landscape.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'The river',
        title: 'The Río Chíllar explains the western edge of town',
        paragraphs: [
          'The Chíllar rises above 1,200 metres in the Sierra Almijara and reaches the Mediterranean just west of the town centre, after a course of only about 17 kilometres.',
          'That is an unusually steep run — an average gradient of around 7.3 per cent — because the mountains stand so close to the sea. The Chíllar is best known as a walking route through its own gorge, but that route has been closed since August 2023. The authorities are preparing a limited-access model; no reopening date has been set.',
          'For orientation it matters in a simpler way: the Chíllar marks where Nerja ends to the west. Everything between the river and the old centre is the flatter, more residential side of town.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'What it means for a stay',
        title: 'Short distances, but almost never level ground',
        paragraphs: [
          'Nerja is compact. The distances that matter to a guest are measured in minutes, not kilometres, and the town centre can carry a whole holiday on foot.',
          'The variable is not distance but gradient. Two addresses the same number of minutes apart can feel very different depending on whether the walk home goes up or down — and that difference grows over a two-week stay, in August heat, or with a pushchair.',
          'AMARA Playa sits right in the centre: barely 500 metres to the Balcón de Europa, about 100 metres to Torrecilla beach. You do not need a car here. We were guests in this exact apartment for years ourselves — and did not hesitate for a second when we heard it was for sale.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue',
      title: 'From the map to the practical questions',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Arrival & mobility',
          text: 'Airports, the coach connection and the last stretch to the address.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Where to stay in Nerja',
          text: 'Torrecilla, the Old Town, Burriana and the upper areas compared.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Sources for the geographic figures',
      intro:
        'Area, elevation, protected status and river data come from Spanish public bodies. Anything that changes with weather or season is deliberately not given as a fixed number here.',
      checked: 'Sources checked in August 2026.',
      links: [
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Official municipal figures for area, elevation and population.',
          href: sharedSources.sima
        },
        {
          label: 'Junta de Andalucía · Sierras de Tejeda, Almijara y Alhama',
          text: 'Official record of the natural park, its extent and its 1999 declaration.',
          href: sharedSources.naturalPark
        },
        {
          label: 'Diputación de Málaga · Río Chíllar',
          text: 'Public provincial information on the river, its course and its setting.',
          href: sharedSources.chillar
        },
        {
          label: 'AEMET · Nerja',
          text: 'The national meteorological service, for current conditions rather than fixed claims.',
          href: sharedSources.aemet
        },
        {
          label: 'Ayuntamiento de Nerja · Río Chíllar access',
          text: 'The municipality’s own notice that the river route remains closed.',
          href: sharedSources.chillarClosure
        }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'The map only matters once it becomes your day.',
      body: 'Knowing where Nerja sits is useful. Knowing which side of town you wake up on is what actually shapes the holiday.',
      locationLabel: 'Back to the Nerja location guide',
      propertyLabel: 'View AMARA Playa'
    }
  },
  de: {
    navLabel: 'Geografie & Orientierung',
    hero: {
      eyebrow: 'Nerja · Geografie & Orientierung',
      title: 'Ein Ort auf niedriger Kliffkante, mit einem 1.800er im Rücken',
      standfirst:
        'Nerja liegt auf einem schmalen Streifen zwischen Mittelmeer und Sierra Almijara. Dieser Streifen ist der Grund, warum der Ort zu Fuß funktioniert, warum die Strände unter ihm liegen statt vor ihm – und warum fast jede Straße irgendwann bergab zum Meer führt.',
      note: 'Die festen geografischen Zahlen stammen aus spanischen amtlichen Quellen. Was sich mit Jahreszeit und Wetter ändert, steht hier bewusst nicht als feste Größe.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Nach Málaga', value: 'Rund 50 km westlich an der Küste' },
      { label: 'Gemeindefläche', value: 'Etwa 85 km², davon 14,5 km Küste' },
      { label: 'Höchster Punkt', value: 'Pico Navachica, 1.832 m' },
      { label: 'Schutzgebiet', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Vier Himmelsrichtungen',
      title: 'In Nerja liest man alles vom Meer aus nach oben',
      intro:
        'Wenn ihr diese vier Richtungen kennt, hört Nerja auf, ein Labyrinth zu sein. Der Ort ist klein genug, dass Orientierung eine Sache von einem Tag ist.',
      items: [
        { label: 'Süden', value: 'Das Mittelmeer – von euch aus immer bergab' },
        { label: 'Norden', value: 'Die Sierra Almijara, steil hinter dem Ort' },
        { label: 'Westen', value: 'Die Mündung des Río Chíllar und die ruhigeren Strände' },
        { label: 'Osten', value: 'Burriana, die Tropfsteinhöhle und die Straße Richtung Granada' }
      ]
    },
    sections: [
      {
        id: 'coast-and-cliff',
        eyebrow: 'Die Küste',
        title: 'Die Strände liegen unter dem Ort, nicht vor ihm',
        paragraphs: [
          'Nerja liegt nicht an seinem Strand. Es liegt auf einer niedrigen Kliffkante über einer Reihe von Buchten – und diese eine Tatsache prägt einen Aufenthalt hier mehr als alles andere.',
          'Zur Gemeinde gehören rund 14,5 Kilometer Küste, aufgeteilt in einzelne Buchten statt in einen durchgehenden Strand. Dazwischen reicht der Fels bis ans Wasser. Deshalb hat Nerja viele kleine Strände statt eines großen – und deshalb hat jeder von ihnen einen eigenen Charakter und einen eigenen Abgang.',
          'Praktisch heißt das: Zu fast jedem Strandbesuch gehören ein Abstieg und ein Aufstieg. Weit ist es selten. Eben aber auch nicht.'
        ]
      },
      {
        id: 'mountains-behind',
        eyebrow: 'Die Berge',
        title: 'Die Sierra Almijara beginnt dort, wo der Ort aufhört',
        paragraphs: [
          'Hinter Nerja geht das Land nicht in Hügel über – es steigt. Der nördliche Teil der Gemeinde gehört zum Naturpark Sierras de Tejeda, Almijara y Alhama, 1999 ausgewiesen und rund 40.662 Hektar groß, verteilt auf die Provinzen Málaga und Granada.',
          'Der höchste Punkt über Nerja ist der Pico Navachica mit 1.832 Metern. Die Strecke vom Meeresspiegel bis zu diesem Gipfel bräuchten andere Orte, um einen Vorort zu erreichen.',
          'Derselbe Naturpark umfasst auch Frigiliana, fünfzehn Minuten landeinwärts. Nerja und Frigiliana sind keine zwei zusammenhanglosen Orte – sie sind das Küsten- und das Bergende derselben Landschaft.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Der Fluss',
        title: 'Der Río Chíllar erklärt den westlichen Ortsrand',
        paragraphs: [
          'Der Chíllar entspringt oberhalb von 1.200 Metern in der Sierra Almijara und erreicht das Mittelmeer direkt westlich des Ortskerns – nach einem Lauf von nur etwa 17 Kilometern.',
          'Das ist ein ungewöhnlich steiler Weg, im Mittel rund 7,3 Prozent Gefälle, weil die Berge so nah am Meer stehen. Bekannt ist der Chíllar vor allem als Wanderroute durch die eigene Schlucht – die ist allerdings seit August 2023 gesperrt. Die Behörden bereiten ein Modell mit begrenztem Zugang vor; einen Öffnungstermin gibt es bislang nicht.',
          'Für die Orientierung zählt er auf einfachere Weise: Der Chíllar markiert, wo Nerja nach Westen endet. Alles zwischen dem Fluss und der Altstadt ist die flachere, wohnlichere Seite des Ortes.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Was das für den Aufenthalt heißt',
        title: 'Kurze Wege, aber fast nie ebene',
        paragraphs: [
          'Nerja ist kompakt. Die Entfernungen, die für Gäste zählen, misst man in Minuten, nicht in Kilometern – und der Ortskern trägt einen ganzen Urlaub zu Fuß.',
          'Die Variable ist nicht die Entfernung, sondern die Steigung. Zwei Adressen, die gleich viele Minuten auseinanderliegen, fühlen sich sehr unterschiedlich an, je nachdem ob der Heimweg hinauf oder hinunter führt. Über zwei Wochen, in der Augusthitze oder mit Kinderwagen wächst dieser Unterschied.',
          'AMARA Playa liegt mitten im Zentrum: knapp 500 Meter zum Balcón de Europa, gut 100 Meter zum Strand Torrecilla. Ein Auto braucht ihr hier nicht. Wir waren jahrelang selbst Gäste in genau dieser Wohnung – und mussten keine Sekunde zögern, als wir erfuhren, dass sie zum Verkauf steht.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Von der Karte zu den praktischen Fragen',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Anreise & Mobilität',
          text: 'Flughäfen, die Busverbindung und die letzte Etappe bis zur Adresse.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Wo in Nerja übernachten',
          text: 'Torrecilla, Altstadt, Burriana und die oberen Lagen im Vergleich.'
        }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Quellen zu den geografischen Zahlen',
      intro:
        'Fläche, Höhe, Schutzstatus und Flussdaten stammen von spanischen amtlichen Stellen. Was sich mit Wetter oder Jahreszeit ändert, steht hier bewusst nicht als feste Zahl.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Amtliche Gemeindedaten zu Fläche, Höhe und Einwohnerzahl.',
          href: sharedSources.sima
        },
        {
          label: 'Junta de Andalucía · Sierras de Tejeda, Almijara y Alhama',
          text: 'Amtlicher Eintrag zum Naturpark, seiner Größe und der Ausweisung von 1999.',
          href: sharedSources.naturalPark
        },
        {
          label: 'Diputación de Málaga · Río Chíllar',
          text: 'Öffentliche Provinzinformation zum Fluss, seinem Verlauf und seiner Umgebung.',
          href: sharedSources.chillar
        },
        {
          label: 'AEMET · Nerja',
          text: 'Der staatliche Wetterdienst – für aktuelle Bedingungen statt fester Aussagen.',
          href: sharedSources.aemet
        },
        {
          label: 'Ayuntamiento de Nerja · Zugang Río Chíllar',
          text: 'Die Mitteilung der Gemeinde selbst, dass die Flussroute weiterhin gesperrt ist.',
          href: sharedSources.chillarClosure
        }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Die Karte zählt erst, wenn sie euer Tag wird.',
      body: 'Zu wissen, wo Nerja liegt, ist nützlich. Zu wissen, auf welcher Seite des Ortes ihr aufwacht, prägt den Urlaub.',
      locationLabel: 'Zurück zum Nerja Lage-Guide',
      propertyLabel: 'AMARA Playa ansehen'
    }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: {
      eyebrow: 'Nerja · Geografía y orientación',
      title: 'Un pueblo sobre un acantilado bajo, con una sierra de 1.800 metros detrás',
      standfirst:
        'Nerja se encaja en una franja estrecha entre el Mediterráneo y la Sierra Almijara. Esa franja explica por qué el pueblo se recorre a pie, por qué las playas quedan debajo y no delante, y por qué casi todas las calles acaban bajando hacia el mar.',
      note: 'Las cifras geográficas fijas proceden de fuentes públicas españolas. Lo que cambia con la estación y el tiempo no se da aquí como dato fijo.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Hasta Málaga', value: 'Unos 50 km al oeste por la costa' },
      { label: 'Término municipal', value: 'Unos 85 km², con 14,5 km de costa' },
      { label: 'Punto más alto', value: 'Pico Navachica, 1.832 m' },
      { label: 'Espacio protegido', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Cuatro referencias',
      title: 'En Nerja todo se lee desde el mar hacia arriba',
      intro:
        'Con estas cuatro direcciones, Nerja deja de ser un laberinto. El pueblo es lo bastante pequeño como para orientarse en un día.',
      items: [
        { label: 'Sur', value: 'El Mediterráneo, siempre cuesta abajo desde vosotros' },
        { label: 'Norte', value: 'La Sierra Almijara, que sube abrupta detrás del pueblo' },
        { label: 'Oeste', value: 'La desembocadura del río Chíllar y las playas más tranquilas' },
        { label: 'Este', value: 'Burriana, la Cueva y la carretera hacia Granada' }
      ]
    },
    sections: [
      {
        id: 'coast-and-cliff',
        eyebrow: 'La costa',
        title: 'Las playas están debajo del pueblo, no delante',
        paragraphs: [
          'Nerja no está sobre su playa. Está sobre un acantilado bajo por encima de una sucesión de calas, y ese único hecho condiciona una estancia más que ningún otro.',
          'El municipio cuenta con unos 14,5 kilómetros de costa, repartidos en calas separadas y no en un arenal continuo. Entre ellas la roca llega hasta el agua. Por eso Nerja tiene muchas playas pequeñas en lugar de una grande, y por eso cada una tiene su carácter y su propia bajada.',
          'En la práctica: casi toda visita a la playa incluye una bajada y una subida. Lejos no suele estar. Llano tampoco.'
        ]
      },
      {
        id: 'mountains-behind',
        eyebrow: 'La montaña',
        title: 'La Sierra Almijara empieza donde termina el pueblo',
        paragraphs: [
          'Detrás de Nerja el terreno no pasa a colinas: sube. La parte norte del municipio pertenece al Parque Natural Sierras de Tejeda, Almijara y Alhama, declarado en 1999 y con unas 40.662 hectáreas entre las provincias de Málaga y Granada.',
          'El punto más alto sobre Nerja es el Pico Navachica, con 1.832 metros. La distancia horizontal que separa el nivel del mar de esa cumbre le serviría a otros pueblos para llegar a un barrio periférico.',
          'El mismo parque incluye Frigiliana, a quince minutos hacia el interior. Nerja y Frigiliana no son dos lugares sin relación: son el extremo costero y el extremo montañoso de un mismo paisaje.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'El río',
        title: 'El río Chíllar explica el borde occidental del pueblo',
        paragraphs: [
          'El Chíllar nace por encima de los 1.200 metros en la Sierra Almijara y llega al Mediterráneo justo al oeste del casco urbano, tras un recorrido de solo unos 17 kilómetros.',
          'Es un trazado insólitamente empinado —una pendiente media en torno al 7,3 por ciento— porque la montaña está muy cerca del mar. El Chíllar se conoce sobre todo como ruta de senderismo por su propio cauce, pero ese acceso está cerrado desde agosto de 2023. Se prepara un modelo de acceso limitado; todavía no hay fecha de reapertura.',
          'Para orientarse importa de una forma más simple: el Chíllar marca dónde acaba Nerja hacia el oeste. Todo lo que queda entre el río y el casco antiguo es el lado más llano y residencial del pueblo.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Qué significa para la estancia',
        title: 'Distancias cortas, pero casi nunca en llano',
        paragraphs: [
          'Nerja es compacta. Las distancias que importan a un huésped se miden en minutos, no en kilómetros, y el centro sostiene unas vacaciones enteras a pie.',
          'La variable no es la distancia, sino la pendiente. Dos direcciones separadas por los mismos minutos se viven de forma muy distinta según si la vuelta a casa es cuesta arriba o cuesta abajo. En dos semanas, con calor de agosto o con carrito, esa diferencia crece.',
          'AMARA Playa está en pleno centro: apenas 500 metros hasta el Balcón de Europa y unos 100 metros hasta la playa de Torrecilla. Aquí no hace falta coche. Durante años fuimos nosotros mismos huéspedes en este mismo apartamento, y no dudamos ni un segundo cuando supimos que se vendía.'
        ]
      }
    ],
    related: {
      eyebrow: 'Seguir leyendo',
      title: 'Del mapa a las preguntas prácticas',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Llegada y movilidad',
          text: 'Aeropuertos, la conexión en autobús y el último tramo hasta la dirección.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Dónde alojarse en Nerja',
          text: 'Torrecilla, el casco antiguo, Burriana y las zonas altas, comparados.'
        }
      ]
    },
    sources: {
      eyebrow: 'Detrás de esta guía',
      title: 'Fuentes de las cifras geográficas',
      intro:
        'Superficie, altitud, figura de protección y datos del río proceden de organismos públicos españoles. Lo que depende del tiempo o de la estación no se ofrece aquí como cifra fija.',
      checked: 'Fuentes consultadas en agosto de 2026.',
      links: [
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Datos municipales oficiales de superficie, altitud y población.',
          href: sharedSources.sima
        },
        {
          label: 'Junta de Andalucía · Sierras de Tejeda, Almijara y Alhama',
          text: 'Ficha oficial del parque natural, su extensión y su declaración de 1999.',
          href: sharedSources.naturalPark
        },
        {
          label: 'Diputación de Málaga · Río Chíllar',
          text: 'Información pública provincial sobre el río, su curso y su entorno.',
          href: sharedSources.chillar
        },
        {
          label: 'AEMET · Nerja',
          text: 'La agencia estatal de meteorología, para condiciones actuales y no para afirmaciones fijas.',
          href: sharedSources.aemet
        },
        {
          label: 'Ayuntamiento de Nerja · Acceso al río Chíllar',
          text: 'El aviso del propio Ayuntamiento de que la ruta del río sigue cerrada.',
          href: sharedSources.chillarClosure
        }
      ]
    },
    closing: {
      eyebrow: 'De vuelta a la estancia',
      title: 'El mapa solo cuenta cuando se convierte en vuestro día.',
      body: 'Saber dónde está Nerja es útil. Saber en qué lado del pueblo os despertáis es lo que de verdad marca las vacaciones.',
      locationLabel: 'Volver a la guía de ubicación de Nerja',
      propertyLabel: 'Ver AMARA Playa'
    }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: {
      eyebrow: 'Nerja · Geografie & oriëntatie',
      title: 'Een dorp op een lage klif, met een berg van 1.800 meter erachter',
      standfirst:
        'Nerja ligt geklemd op een smalle strook tussen de Middellandse Zee en de Sierra Almijara. Die strook verklaart waarom het dorp te belopen blijft, waarom de stranden eronder liggen in plaats van ervoor, en waarom bijna elke straat uiteindelijk naar zee afdaalt.',
      note: 'De vaste geografische cijfers komen uit Spaanse openbare bronnen. Wat met seizoen en weer verandert, staat hier bewust niet als vast getal.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Naar Málaga', value: 'Ongeveer 50 km westwaarts langs de kust' },
      { label: 'Gemeentelijk gebied', value: 'Circa 85 km², met 14,5 km kust' },
      { label: 'Hoogste punt', value: 'Pico Navachica, 1.832 m' },
      { label: 'Beschermd gebied', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Vier richtingen',
      title: 'In Nerja lees je alles vanaf de zee omhoog',
      intro:
        'Zodra jullie deze vier richtingen kennen, is Nerja geen doolhof meer. Het dorp is klein genoeg om je in één dag te oriënteren.',
      items: [
        { label: 'Zuid', value: 'De Middellandse Zee, vanaf jullie altijd bergaf' },
        { label: 'Noord', value: 'De Sierra Almijara, steil achter het dorp' },
        { label: 'West', value: 'De monding van de Río Chíllar en de rustiger stranden' },
        { label: 'Oost', value: 'Burriana, de druipsteengrot en de weg richting Granada' }
      ]
    },
    sections: [
      {
        id: 'coast-and-cliff',
        eyebrow: 'De kust',
        title: 'De stranden liggen ónder het dorp, niet ervoor',
        paragraphs: [
          'Nerja ligt niet aan zijn strand. Het ligt op een lage klif boven een reeks baaien, en dat ene feit bepaalt een verblijf hier meer dan wat ook.',
          'De gemeente telt ongeveer 14,5 kilometer kust, verdeeld over losse baaien in plaats van één doorlopend strand. Ertussen loopt de rots tot aan het water. Daarom heeft Nerja veel kleine stranden in plaats van één groot — en daarom heeft elk strand een eigen karakter en een eigen afdaling.',
          'Praktisch betekent dat: bij bijna elk strandbezoek hoort een afdaling en een klim. Ver is het zelden. Vlak ook niet.'
        ]
      },
      {
        id: 'mountains-behind',
        eyebrow: 'De bergen',
        title: 'De Sierra Almijara begint waar het dorp ophoudt',
        paragraphs: [
          'Achter Nerja gaat het land niet over in heuvels — het klimt. Het noordelijke deel van de gemeente hoort bij het natuurpark Sierras de Tejeda, Almijara y Alhama, aangewezen in 1999 en zo’n 40.662 hectare groot, verdeeld over de provincies Málaga en Granada.',
          'Het hoogste punt boven Nerja is de Pico Navachica met 1.832 meter. De horizontale afstand van zeeniveau tot die top hebben andere plaatsen nodig om een buitenwijk te bereiken.',
          'Datzelfde park omvat ook Frigiliana, vijftien minuten landinwaarts. Nerja en Frigiliana zijn geen twee losstaande plekken — ze zijn het kust- en het bergeinde van één landschap.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'De rivier',
        title: 'De Río Chíllar verklaart de westrand van het dorp',
        paragraphs: [
          'De Chíllar ontspringt boven de 1.200 meter in de Sierra Almijara en bereikt de Middellandse Zee net ten westen van het centrum, na een loop van slechts zo’n 17 kilometer.',
          'Dat is een ongewoon steil verval — gemiddeld rond 7,3 procent — doordat de bergen zo dicht bij zee staan. De Chíllar is vooral bekend als wandelroute door zijn eigen kloof, maar die is sinds augustus 2023 gesloten. Er wordt gewerkt aan een model met beperkte toegang; een datum voor heropening is er nog niet.',
          'Voor de oriëntatie telt hij eenvoudiger: de Chíllar markeert waar Nerja in het westen ophoudt. Alles tussen de rivier en de oude kern is de vlakkere, meer residentiële kant van het dorp.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Wat dat betekent voor het verblijf',
        title: 'Korte afstanden, maar bijna nooit vlak',
        paragraphs: [
          'Nerja is compact. De afstanden die voor gasten tellen meet je in minuten, niet in kilometers, en het centrum draagt een hele vakantie te voet.',
          'De variabele is niet de afstand maar het hoogteverschil. Twee adressen op evenveel minuten voelen heel verschillend, afhankelijk van of de weg naar huis omhoog of omlaag gaat. Over twee weken, in de augustushitte of met een kinderwagen groeit dat verschil.',
          'AMARA Playa ligt midden in het centrum: nog geen 500 meter tot de Balcón de Europa en zo’n 100 meter tot het strand Torrecilla. Een auto hebben jullie hier niet nodig. We waren jarenlang zelf gast in precies dit appartement — en twijfelden geen seconde toen we hoorden dat het te koop stond.'
        ]
      }
    ],
    related: {
      eyebrow: 'Verder lezen',
      title: 'Van de kaart naar de praktische vragen',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Aankomst & mobiliteit',
          text: 'Luchthavens, de busverbinding en het laatste stuk naar het adres.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Waar overnachten in Nerja',
          text: 'Torrecilla, de oude kern, Burriana en de hoger gelegen wijken vergeleken.'
        }
      ]
    },
    sources: {
      eyebrow: 'Achter deze gids',
      title: 'Bronnen voor de geografische cijfers',
      intro:
        'Oppervlakte, hoogte, beschermde status en riviergegevens komen van Spaanse overheidsinstanties. Wat met weer of seizoen verandert, staat hier bewust niet als vast getal.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Officiële gemeentelijke cijfers voor oppervlakte, hoogte en inwonertal.',
          href: sharedSources.sima
        },
        {
          label: 'Junta de Andalucía · Sierras de Tejeda, Almijara y Alhama',
          text: 'Officiële vermelding van het natuurpark, de omvang en de aanwijzing in 1999.',
          href: sharedSources.naturalPark
        },
        {
          label: 'Diputación de Málaga · Río Chíllar',
          text: 'Openbare provinciale informatie over de rivier, haar loop en omgeving.',
          href: sharedSources.chillar
        },
        {
          label: 'AEMET · Nerja',
          text: 'De nationale weerdienst — voor actuele omstandigheden, niet voor vaste uitspraken.',
          href: sharedSources.aemet
        },
        {
          label: 'Ayuntamiento de Nerja · Toegang Río Chíllar',
          text: 'De mededeling van de gemeente zelf dat de rivierroute gesloten blijft.',
          href: sharedSources.chillarClosure
        }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'De kaart telt pas als hij jullie dag wordt.',
      body: 'Weten waar Nerja ligt is nuttig. Weten aan welke kant van het dorp jullie wakker worden, bepaalt de vakantie.',
      locationLabel: 'Terug naar de Nerja locatiegids',
      propertyLabel: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: {
      eyebrow: 'Nerja · Geografi & orientering',
      title: 'En ort på en låg klippkant, med ett 1 800-metersberg bakom sig',
      standfirst:
        'Nerja ligger inklämt på en smal remsa mellan Medelhavet och Sierra Almijara. Den remsan är skälet till att orten fungerar till fots, till att stränderna ligger nedanför i stället för framför – och till att nästan varje gata till slut leder nedför mot havet.',
      note: 'De fasta geografiska siffrorna kommer från spanska offentliga källor. Det som ändras med årstid och väder anges medvetet inte som fast värde här.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'Till Málaga', value: 'Cirka 50 km västerut längs kusten' },
      { label: 'Kommunyta', value: 'Omkring 85 km², varav 14,5 km kust' },
      { label: 'Högsta punkt', value: 'Pico Navachica, 1 832 m' },
      { label: 'Skyddat område', value: 'Sierras de Tejeda, Almijara y Alhama' }
    ],
    orientation: {
      eyebrow: 'Fyra väderstreck',
      title: 'I Nerja läser man allt från havet och uppåt',
      intro:
        'När ni kan de här fyra riktningarna slutar Nerja vara en labyrint. Orten är liten nog för att orienteringen ska sitta på en dag.',
      items: [
        { label: 'Söder', value: 'Medelhavet – alltid nedförsbacke från er' },
        { label: 'Norr', value: 'Sierra Almijara, brant bakom orten' },
        { label: 'Väster', value: 'Río Chíllars mynning och de lugnare stränderna' },
        { label: 'Öster', value: 'Burriana, grottan och vägen mot Granada' }
      ]
    },
    sections: [
      {
        id: 'coast-and-cliff',
        eyebrow: 'Kusten',
        title: 'Stränderna ligger under orten, inte framför den',
        paragraphs: [
          'Nerja ligger inte vid sin strand. Orten ligger på en låg klippkant ovanför en rad vikar, och just det formar en vistelse här mer än något annat.',
          'Kommunen har omkring 14,5 kilometer kust, uppdelad i separata vikar i stället för en sammanhängande sandstrand. Mellan dem går berget ända ned i vattnet. Därför har Nerja många små stränder i stället för en stor – och därför har var och en sin egen karaktär och sin egen nedgång.',
          'I praktiken: nästan varje strandbesök innehåller en nedstigning och en uppstigning. Långt är det sällan. Platt är det inte heller.'
        ]
      },
      {
        id: 'mountains-behind',
        eyebrow: 'Bergen',
        title: 'Sierra Almijara börjar där orten slutar',
        paragraphs: [
          'Bakom Nerja övergår landet inte i kullar – det stiger. Kommunens norra del tillhör naturparken Sierras de Tejeda, Almijara y Alhama, avsatt 1999 och omkring 40 662 hektar stor, fördelad över provinserna Málaga och Granada.',
          'Högsta punkten ovanför Nerja är Pico Navachica på 1 832 meter. Det horisontella avstånd som skiljer havsytan från den toppen skulle andra orter behöva för att nå en förort.',
          'Samma park omfattar även Frigiliana, femton minuter inåt land. Nerja och Frigiliana är inte två orelaterade platser – de är kust- och bergsänden av ett och samma landskap.'
        ]
      },
      {
        id: 'rio-chillar',
        eyebrow: 'Floden',
        title: 'Río Chíllar förklarar ortens västra kant',
        paragraphs: [
          'Chíllar rinner upp över 1 200 meter i Sierra Almijara och når Medelhavet strax väster om ortskärnan, efter ett lopp på bara cirka 17 kilometer.',
          'Det är ett ovanligt brant lopp – i genomsnitt runt 7,3 procents lutning – eftersom bergen står så nära havet. Chíllar är mest känd som vandringsled genom sin egen ravin, men den är stängd sedan augusti 2023. Ett system med begränsat tillträde förbereds; något öppningsdatum finns ännu inte.',
          'För orienteringen spelar den en enklare roll: Chíllar markerar var Nerja tar slut åt väster. Allt mellan floden och gamla kärnan är ortens flackare, mer bostadsbetonade sida.'
        ]
      },
      {
        id: 'what-it-means',
        eyebrow: 'Vad det betyder för vistelsen',
        title: 'Korta avstånd, men nästan aldrig plana',
        paragraphs: [
          'Nerja är kompakt. De avstånd som betyder något för en gäst mäts i minuter, inte i kilometer, och ortskärnan bär en hel semester till fots.',
          'Variabeln är inte avståndet utan lutningen. Två adresser lika många minuter isär känns mycket olika beroende på om hemvägen går uppåt eller nedåt. Över två veckor, i augustivärmen eller med barnvagn växer den skillnaden.',
          'AMARA Playa ligger mitt i centrum: knappt 500 meter till Balcón de Europa och omkring 100 meter till stranden Torrecilla. Här behöver ni ingen bil. Vi var själva gäster i precis den här lägenheten i flera år — och tvekade inte en sekund när vi fick veta att den var till salu.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Från kartan till de praktiska frågorna',
      links: [
        {
          token: 'getting_to_nerja',
          label: 'Ankomst & mobilitet',
          text: 'Flygplatser, bussförbindelsen och sista sträckan fram till adressen.'
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Var man bor i Nerja',
          text: 'Torrecilla, gamla stan, Burriana och de högre områdena jämförda.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bakom guiden',
      title: 'Källor till de geografiska siffrorna',
      intro:
        'Yta, höjd, skyddsstatus och floddata kommer från spanska offentliga myndigheter. Det som ändras med väder eller årstid anges medvetet inte som fast siffra här.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Officiella kommunuppgifter om yta, höjd och befolkning.',
          href: sharedSources.sima
        },
        {
          label: 'Junta de Andalucía · Sierras de Tejeda, Almijara y Alhama',
          text: 'Officiell post om naturparken, dess omfattning och avsättningen 1999.',
          href: sharedSources.naturalPark
        },
        {
          label: 'Diputación de Málaga · Río Chíllar',
          text: 'Offentlig provinsinformation om floden, dess lopp och omgivning.',
          href: sharedSources.chillar
        },
        {
          label: 'AEMET · Nerja',
          text: 'Den statliga vädertjänsten – för aktuella förhållanden, inte för fasta påståenden.',
          href: sharedSources.aemet
        },
        {
          label: 'Ayuntamiento de Nerja · Tillträde till Río Chíllar',
          text: 'Kommunens eget besked om att flodleden fortfarande är stängd.',
          href: sharedSources.chillarClosure
        }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'Kartan betyder något först när den blir er dag.',
      body: 'Att veta var Nerja ligger är nyttigt. Att veta på vilken sida av orten ni vaknar är det som faktiskt formar semestern.',
      locationLabel: 'Tillbaka till Nerjas lägesguide',
      propertyLabel: 'Visa AMARA Playa'
    }
  }
};
