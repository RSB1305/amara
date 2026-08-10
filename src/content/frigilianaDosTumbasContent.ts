import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaDosTumbasPageCopy {
  footerHighlights: {
    dosTumbas: string;
    festivals: string;
    restaurants: string;
  };
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  trailer: {
    label: string;
    /** Shown before the embed loads — YouTube is only contacted after an explicit click. */
    privacyNote: string;
    loadAction: string;
  };
  intro: {
    title: string;
    text: string;
    reviewed: string;
  };
  locations: {
    title: string;
    intro: string;
    items: {
      title: string;
      subline: string;
      text: string;
    }[];
  };
  production: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  trust: {
    title: string;
    text: string;
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken: 'frigiliana_events_authority' | 'frigiliana_food_authority';
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

export const frigilianaDosTumbasSeo: AmaraAuthoringSeo = {
  version: '2026-08-01-frigiliana-dos-tumbas-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/05-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: "Frigiliana in Netflix's Dos Tumbas: Filming Locations Guide",
      description:
        "See Frigiliana through Netflix's thriller Dos Tumbas (Two Graves): where it was filmed, what it means for the old town, and how to plan a stay around it.",
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana in Dos Tumbas: Die Netflix-Drehorte',
      description:
        'Frigiliana im Netflix-Thriller Dos Tumbas: Wo gedreht wurde, was das für die Altstadt bedeutet und wie sich ein Aufenthalt darum planen lässt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana en Dos Tumbas: guía de localizaciones de Netflix',
      description:
        'Frigiliana en el thriller de Netflix Dos Tumbas: dónde se rodó, qué significa para el casco antiguo y cómo planificar una estancia en torno a la serie.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana in Dos Tumbas: de Netflix-filmlocaties',
      description:
        'Frigiliana in de Netflix-thriller Dos Tumbas: waar er is gefilmd, wat dat betekent voor de oude kern en hoe je een verblijf eromheen plant.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana i Dos Tumbas: Netflix inspelningsplatser',
      description:
        'Frigiliana i Netflix-thrillern Dos Tumbas: var serien spelades in, vad det betyder för gamla stan och hur ni kan planera en vistelse kring den.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page. Facts (director,
 * cast, release date, filming period, real place names) must stay identical
 * across languages; only guest-facing phrasing is localized.
 */
export const frigilianaDosTumbasContent: Record<
  AmaraLanguage,
  FrigilianaDosTumbasPageCopy
> = {
  en: {
    footerHighlights: {
      dosTumbas: 'Netflix filming locations',
      festivals: 'Festivals & traditions',
      restaurants: 'Restaurants & local food'
    },
    hero: {
      kicker: 'On screen · Netflix',
      title: "Frigiliana on screen: inside Dos Tumbas",
      paragraphs: [
        'Netflix’s three-part thriller Dos Tumbas (released 29 August 2025, known internationally as Two Graves) was filmed largely in Frigiliana’s old town, with further scenes across Nerja and Torrox. Directed by Kike Maíllo and created by novelist Agustín Martínez, it stars Kiti Mánver, Álvaro Morte and Hovik Keuchkerian.',
        'This guide is not a plot summary. It is a practical companion for guests who are already staying in the village and want to recognise the streets, squares and coastline that appear on screen.',
        'Production coverage confirms the crew filmed in the old town in 2024, including scenes shot during the real Feria de San Antonio, and along the coast between Nerja and Torrox. Exact shot-by-shot locations have not been officially published, so treat the details below as a well-sourced orientation, not a scene-by-scene map.'
      ],
      imageAlt: 'Whitewashed lanes of Frigiliana’s old town in afternoon light'
    },
    trailer: {
      label: 'Official trailer',
      privacyNote:
        'The trailer is hosted on YouTube. Loading it transmits your IP address to Google, which may also store data on your device.',
      loadAction: 'Load trailer'
    },
    intro: {
      title: 'What the series is, briefly',
      text:
        'Dos Tumbas follows a grandmother who starts her own investigation two years after two teenage girls disappeared. It is a co-production built around the same creative team behind the bestselling Carmen Mola thrillers, reuniting three actors previously seen together in La Casa de Papel.',
      reviewed: 'Editorially reviewed: August 2026'
    },
    locations: {
      title: 'Where the village appears',
      intro:
        'Coverage of the shoot points to three areas that guests staying in the old town can walk past directly, plus a short coastal detour toward Nerja and Torrox.',
      items: [
        {
          title: 'Calle Real and the old town lanes',
          subline: 'Frigiliana, Barrio Alto',
          text:
            'The production spent time filming along Calle Real and the stepped, whitewashed lanes of the upper village — the same streets guests walk between an AMARA apartment and the village centre.'
        },
        {
          title: 'Around the Iglesia de San Antonio',
          subline: 'Frigiliana, historic quarter',
          text:
            'Several scenes were shot near the small plazas around the Iglesia de San Antonio, coinciding with the real Feria de San Antonio pilgrimage and fair that fills this part of the village each June.'
        },
        {
          title: 'The Nerja–Torrox coastline',
          subline: 'Restinga Beach, on the Nerja/Torrox border',
          text:
            'For coastal scenes, the production used Restaurante La Restinga Beach on the Nerja–Torrox boundary, temporarily renamed “Restaurante Antonio” on screen. It remains a real, working beach restaurant today.'
        }
      ]
    },
    production: {
      title: 'Two things worth knowing before you look for the spots',
      intro:
        'A little context makes the streets more interesting to walk, and sets realistic expectations for what you will actually see.',
      items: [
        {
          title: 'It was filmed during a real fair',
          text:
            'Parts of the shoot overlapped with Frigiliana’s actual Feria de San Antonio in 2024. The crowds in some shots are genuine local celebrations, not extras — one reason the village feels so lived-in on screen.'
        },
        {
          title: 'There is no official location map',
          text:
            'Netflix and the production have not published a shot-by-shot location guide. What is documented publicly is the old town in general, the area around the church, and the Nerja/Torrox coast — so treat any very specific claim online with caution.'
        }
      ]
    },
    trust: {
      title: 'How this guide was put together',
      text:
        'We built this page from published production coverage and local reporting on the 2024 shoot, cross-checked against what is confirmed on screen and in cast/crew interviews, rather than from a single unverified source. Where a detail is not officially confirmed, we have said so above instead of presenting it as fact.'
    },
    combine: {
      title: 'Make it part of a real village day',
      intro:
        'The streets in the series are the same streets you can walk on any ordinary evening. Pair the walk with the parts of village life the show only hints at.',
      items: [
        {
          title: 'Visit during the real Feria de San Antonio',
          text:
            'The fair the crew filmed during still happens every June. Our festival guide covers dates, atmosphere and what to expect if you plan a stay around it.',
          linkToken: 'frigiliana_events_authority',
          linkLabel: 'See the festival guide'
        },
        {
          title: 'Find a table near where you have been walking',
          text:
            'Our restaurant guide compares village terraces on Calle Real with coastal tables near Nerja and Torrox, including the practical differences in travel and booking.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'See the restaurant guide'
        }
      ]
    },
    closing: {
      title: 'Stay where the old town begins',
      lead:
        'An AMARA apartment in Frigiliana puts Calle Real and the streets around the Iglesia de San Antonio within an easy walk, with Nerja and Torrox a short drive beyond.',
      availabilityCta: 'Check availability',
      apartmentsCta: 'View apartments'
    }
  },
  de: {
    footerHighlights: {
      dosTumbas: 'Netflix-Drehorte',
      festivals: 'Feste & Traditionen',
      restaurants: 'Restaurants & regionale Küche'
    },
    hero: {
      kicker: 'Auf der Leinwand · Netflix',
      title: 'Frigiliana im Bild: Dos Tumbas',
      paragraphs: [
        'Der dreiteilige Netflix-Thriller Dos Tumbas (Premiere am 29. August 2025, international als Two Graves bekannt) wurde größtenteils in Frigilianas Altstadt gedreht, mit weiteren Szenen in Nerja und Torrox. Regie führte Kike Maíllo, das Konzept stammt von der Autorin Agustín Martínez; es spielen Kiti Mánver, Álvaro Morte und Hovik Keuchkerian.',
        'Dieser Guide ist keine Inhaltsangabe. Er richtet sich an Gäste, die bereits im Dorf wohnen und die Gassen, Plätze und die Küste wiedererkennen möchten, die im Bild zu sehen sind.',
        'Berichte über die Produktion bestätigen Dreharbeiten 2024 in der Altstadt, teilweise während der echten Feria de San Antonio, sowie an der Küste zwischen Nerja und Torrox. Einzelne Einstellungsorte wurden nicht offiziell veröffentlicht — die folgenden Angaben sind daher eine gut belegte Orientierung, keine Szene-für-Szene-Karte.'
      ],
      imageAlt: 'Weiße Gassen der Altstadt von Frigiliana im Nachmittagslicht'
    },
    trailer: {
      label: 'Offizieller Trailer',
      privacyNote:
        'Der Trailer liegt bei YouTube. Beim Laden wird die IP-Adresse an Google übertragen; Google kann dabei auch Daten auf dem Gerät speichern.',
      loadAction: 'Trailer laden'
    },
    intro: {
      title: 'Worum es in der Serie geht, kurz gefasst',
      text:
        'Dos Tumbas erzählt von einer Großmutter, die zwei Jahre nach dem Verschwinden zweier jugendlicher Mädchen selbst zu ermitteln beginnt. Die Serie stammt vom Autorenteam hinter den erfolgreichen Carmen-Mola-Thrillern und vereint drei Schauspieler, die zuvor gemeinsam in La Casa de Papel zu sehen waren.',
      reviewed: 'Redaktionell geprüft: August 2026'
    },
    locations: {
      title: 'Wo das Dorf zu sehen ist',
      intro:
        'Berichte über die Dreharbeiten nennen drei Bereiche, an denen Gäste in der Altstadt direkt vorbeikommen, sowie einen kurzen Küstenabstecher Richtung Nerja und Torrox.',
      items: [
        {
          title: 'Calle Real und die Altstadtgassen',
          subline: 'Frigiliana, Barrio Alto',
          text:
            'Gedreht wurde entlang der Calle Real und der gestuften, weißen Gassen des oberen Dorfteils — dieselben Wege, die Gäste zwischen einem AMARA-Apartment und dem Dorfzentrum zurücklegen.'
        },
        {
          title: 'Rund um die Iglesia de San Antonio',
          subline: 'Frigiliana, historisches Zentrum',
          text:
            'Mehrere Szenen entstanden in den kleinen Plätzen rund um die Iglesia de San Antonio — zeitgleich mit der echten Wallfahrt und dem Fest der Feria de San Antonio, die diesen Dorfteil jeden Juni füllen.'
        },
        {
          title: 'Die Küste zwischen Nerja und Torrox',
          subline: 'Restinga Beach, an der Grenze Nerja/Torrox',
          text:
            'Für Küstenszenen nutzte die Produktion das Restaurante La Restinga Beach an der Grenze zwischen Nerja und Torrox, im Film vorübergehend „Restaurante Antonio“ genannt. Es ist bis heute ein echtes Strandrestaurant.'
        }
      ]
    },
    production: {
      title: 'Zwei Dinge, die vor der Spurensuche hilfreich sind',
      intro:
        'Etwas Hintergrund macht den Spaziergang interessanter und sorgt für realistische Erwartungen an das, was man tatsächlich sieht.',
      items: [
        {
          title: 'Gedreht wurde während eines echten Festes',
          text:
            'Ein Teil der Dreharbeiten fiel 2024 mit der echten Feria de San Antonio in Frigiliana zusammen. Die Menschenmengen in manchen Einstellungen sind echte Dorffeiern, keine Statisten — einer der Gründe, warum das Dorf im Bild so gelebt wirkt.'
        },
        {
          title: 'Es gibt keine offizielle Drehort-Karte',
          text:
            'Netflix und die Produktion haben keine Szene-für-Szene-Karte veröffentlicht. Öffentlich belegt sind die Altstadt allgemein, der Bereich um die Kirche und die Küste bei Nerja/Torrox — sehr spezifische Behauptungen im Netz sollten daher mit Vorsicht betrachtet werden.'
        }
      ]
    },
    trust: {
      title: 'Wie dieser Guide entstanden ist',
      text:
        'Diese Seite basiert auf veröffentlichten Produktionsberichten und lokaler Berichterstattung zu den Dreharbeiten 2024, abgeglichen mit dem, was im Bild und in Interviews von Cast und Crew bestätigt ist — nicht auf einer einzelnen, ungeprüften Quelle. Wo ein Detail nicht offiziell bestätigt ist, steht das oben so, statt es als Fakt darzustellen.'
    },
    combine: {
      title: 'Verbindet es mit echtem Dorfalltag',
      intro:
        'Die Straßen aus der Serie sind dieselben, die an jedem gewöhnlichen Abend begehbar sind. Kombiniert den Spaziergang mit dem Dorfleben, das die Serie nur andeutet.',
      items: [
        {
          title: 'Besucht die echte Feria de San Antonio',
          text:
            'Das Fest, während dessen gedreht wurde, findet weiterhin jeden Juni statt. Unser Festival-Guide zeigt Termine, Atmosphäre und Planungshinweise für einen Aufenthalt rund um das Fest.',
          linkToken: 'frigiliana_events_authority',
          linkLabel: 'Zum Festivalguide'
        },
        {
          title: 'Findet einen Tisch nahe der Wege, die ihr abgelaufen seid',
          text:
            'Unser Restaurantguide vergleicht Dorfterrassen an der Calle Real mit Tischen an der Küste bei Nerja und Torrox, einschließlich Anfahrt und Reservierung.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Zum Restaurantguide'
        }
      ]
    },
    closing: {
      title: 'Wohnt dort, wo die Altstadt beginnt',
      lead:
        'Ein AMARA-Apartment in Frigiliana bringt die Calle Real und die Gassen um die Iglesia de San Antonio in Gehweite, mit Nerja und Torrox nur eine kurze Fahrt entfernt.',
      availabilityCta: 'Verfügbarkeit prüfen',
      apartmentsCta: 'Apartments ansehen'
    }
  },
  es: {
    footerHighlights: {
      dosTumbas: 'Localizaciones de Netflix',
      festivals: 'Fiestas y tradiciones',
      restaurants: 'Restaurantes y gastronomía local'
    },
    hero: {
      kicker: 'En pantalla · Netflix',
      title: 'Frigiliana en pantalla: Dos Tumbas',
      paragraphs: [
        'El thriller de Netflix en tres episodios Dos Tumbas (estrenado el 29 de agosto de 2025) se rodó en gran parte en el casco antiguo de Frigiliana, con escenas adicionales en Nerja y Torrox. Dirigida por Kike Maíllo y creada por la escritora Agustín Martínez, está protagonizada por Kiti Mánver, Álvaro Morte y Hovik Keuchkerian.',
        'Esta guía no es un resumen del argumento. Es un acompañante práctico para quienes ya se alojan en el pueblo y quieren reconocer las calles, plazas y la costa que aparecen en la serie.',
        'La cobertura de la producción confirma rodaje en el casco antiguo en 2024, incluidas escenas durante la Feria de San Antonio real, y a lo largo de la costa entre Nerja y Torrox. No se han publicado localizaciones oficiales plano a plano, así que tomad lo que sigue como una orientación bien documentada, no como un mapa exacto.'
      ],
      imageAlt: 'Callejuelas encaladas del casco antiguo de Frigiliana por la tarde'
    },
    trailer: {
      label: 'Tráiler oficial',
      privacyNote:
        'El tráiler está alojado en YouTube. Al cargarlo se transmite la dirección IP a Google, que también puede almacenar datos en el dispositivo.',
      loadAction: 'Cargar el tráiler'
    },
    intro: {
      title: 'De qué trata la serie, en pocas líneas',
      text:
        'Dos Tumbas sigue a una abuela que inicia su propia investigación dos años después de la desaparición de dos adolescentes. La producción reúne al equipo creativo detrás de los thrillers de Carmen Mola y a tres actores que ya coincidieron en La Casa de Papel.',
      reviewed: 'Revisado editorialmente: agosto de 2026'
    },
    locations: {
      title: 'Dónde aparece el pueblo',
      intro:
        'La cobertura del rodaje señala tres zonas por las que los huéspedes alojados en el casco antiguo pasan directamente, además de una escapada corta hacia la costa de Nerja y Torrox.',
      items: [
        {
          title: 'Calle Real y las calles del casco antiguo',
          subline: 'Frigiliana, Barrio Alto',
          text:
            'La producción rodó a lo largo de la Calle Real y las calles escalonadas y encaladas de la parte alta del pueblo, las mismas que recorren los huéspedes entre un apartamento AMARA y el centro del pueblo.'
        },
        {
          title: 'Alrededor de la Iglesia de San Antonio',
          subline: 'Frigiliana, casco histórico',
          text:
            'Varias escenas se rodaron en las pequeñas plazas junto a la Iglesia de San Antonio, coincidiendo con la romería y feria real de San Antonio que llena esta parte del pueblo cada junio.'
        },
        {
          title: 'La costa entre Nerja y Torrox',
          subline: 'Restinga Beach, en el límite entre Nerja y Torrox',
          text:
            'Para las escenas costeras, la producción utilizó el Restaurante La Restinga Beach, en el límite entre Nerja y Torrox, rebautizado temporalmente como "Restaurante Antonio" en la ficción. Hoy sigue siendo un restaurante de playa en funcionamiento.'
        }
      ]
    },
    production: {
      title: 'Dos cosas útiles antes de buscar los escenarios',
      intro:
        'Un poco de contexto hace más interesante el paseo y ayuda a tener expectativas realistas sobre lo que realmente vais a ver.',
      items: [
        {
          title: 'Se rodó durante una fiesta real',
          text:
            'Parte del rodaje coincidió con la Feria de San Antonio real de Frigiliana en 2024. El gentío de algunas escenas son celebraciones locales genuinas, no extras, una de las razones por las que el pueblo se ve tan vivido en pantalla.'
        },
        {
          title: 'No existe un mapa oficial de localizaciones',
          text:
            'Netflix y la producción no han publicado una guía plano a plano. Lo documentado públicamente es el casco antiguo en general, la zona junto a la iglesia y la costa de Nerja/Torrox, así que conviene tomar con cautela cualquier afirmación muy concreta que circule en internet.'
        }
      ]
    },
    trust: {
      title: 'Cómo se ha elaborado esta guía',
      text:
        'Esta página se ha construido a partir de cobertura de producción publicada y reportajes locales sobre el rodaje de 2024, contrastados con lo que se confirma en pantalla y en entrevistas del reparto y el equipo, no a partir de una única fuente sin verificar. Cuando un detalle no está confirmado oficialmente, lo indicamos así en lugar de presentarlo como un hecho.'
    },
    combine: {
      title: 'Convertidlo en un día real de pueblo',
      intro:
        'Las calles de la serie son las mismas que se pueden recorrer cualquier tarde normal. Combinad el paseo con la vida del pueblo que la serie solo insinúa.',
      items: [
        {
          title: 'Visitad la Feria de San Antonio real',
          text:
            'La feria durante la que se rodó sigue celebrándose cada junio. Nuestra guía de fiestas cubre fechas, ambiente y qué esperar si planificáis la estancia alrededor de ella.',
          linkToken: 'frigiliana_events_authority',
          linkLabel: 'Ver la guía de fiestas'
        },
        {
          title: 'Buscad una mesa cerca de donde habéis paseado',
          text:
            'Nuestra guía de restaurantes compara las terrazas de la Calle Real con las mesas junto al mar cerca de Nerja y Torrox, incluido lo práctico sobre desplazamientos y reservas.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Ver la guía de restaurantes'
        }
      ]
    },
    closing: {
      title: 'Alojaos donde empieza el casco antiguo',
      lead:
        'Un apartamento AMARA en Frigiliana deja la Calle Real y las calles junto a la Iglesia de San Antonio a un paseo, con Nerja y Torrox a poca distancia en coche.',
      availabilityCta: 'Consultar disponibilidad',
      apartmentsCta: 'Ver apartamentos'
    }
  },
  nl: {
    footerHighlights: {
      dosTumbas: 'Netflix-filmlocaties',
      festivals: 'Feesten en tradities',
      restaurants: 'Restaurants en lokale keuken'
    },
    hero: {
      kicker: 'Op het scherm · Netflix',
      title: 'Frigiliana op het scherm: Dos Tumbas',
      paragraphs: [
        'De Netflix-thriller Dos Tumbas in drie afleveringen (uitgebracht op 29 augustus 2025) werd grotendeels gefilmd in de oude kern van Frigiliana, met extra scènes in Nerja en Torrox. Geregisseerd door Kike Maíllo en bedacht door schrijfster Agustín Martínez, met Kiti Mánver, Álvaro Morte en Hovik Keuchkerian in de hoofdrollen.',
        'Deze gids is geen verhaalsamenvatting. Het is een praktisch hulpmiddel voor gasten die al in het dorp verblijven en de straten, pleintjes en kustlijn willen herkennen die in beeld komen.',
        'Berichtgeving over de productie bevestigt opnames in de oude kern in 2024, waaronder tijdens de echte Feria de San Antonio, en langs de kust tussen Nerja en Torrox. Exacte locaties per scène zijn niet officieel gepubliceerd — zie onderstaande details dus als een goed onderbouwde oriëntatie, geen scène-voor-scène kaart.'
      ],
      imageAlt: 'Witte straatjes van Frigiliana’s oude kern in het middaglicht'
    },
    trailer: {
      label: 'Officiële trailer',
      privacyNote:
        'De trailer staat op YouTube. Bij het laden wordt het IP-adres doorgegeven aan Google, dat ook gegevens op het apparaat kan opslaan.',
      loadAction: 'Trailer laden'
    },
    intro: {
      title: 'Waar de serie kort over gaat',
      text:
        'Dos Tumbas volgt een grootmoeder die twee jaar na de verdwijning van twee tienermeisjes zelf een onderzoek start. De serie komt van het team achter de bestseller-thrillers van Carmen Mola en brengt drie acteurs samen die eerder al in La Casa de Papel speelden.',
      reviewed: 'Redactioneel gecontroleerd: augustus 2026'
    },
    locations: {
      title: 'Waar het dorp in beeld komt',
      intro:
        'Berichtgeving over de opnames wijst op drie plekken waar gasten in de oude kern direct langslopen, plus een korte kustuitstap richting Nerja en Torrox.',
      items: [
        {
          title: 'Calle Real en de straatjes van de oude kern',
          subline: 'Frigiliana, Barrio Alto',
          text:
            'Er werd gefilmd langs de Calle Real en de trapsgewijze, witte straatjes van het bovendorp — dezelfde route die gasten lopen tussen een AMARA-appartement en het dorpscentrum.'
        },
        {
          title: 'Rond de Iglesia de San Antonio',
          subline: 'Frigiliana, historisch centrum',
          text:
            'Meerdere scènes werden gefilmd op de kleine pleintjes rond de Iglesia de San Antonio, gelijktijdig met de echte bedevaart en kermis van de Feria de San Antonio die dit deel van het dorp elke juni vult.'
        },
        {
          title: 'De kust tussen Nerja en Torrox',
          subline: 'Restinga Beach, op de grens van Nerja en Torrox',
          text:
            'Voor de kustscènes gebruikte de productie Restaurante La Restinga Beach op de grens tussen Nerja en Torrox, in de serie tijdelijk omgedoopt tot “Restaurante Antonio”. Het is nog steeds een echt, werkend strandrestaurant.'
        }
      ]
    },
    production: {
      title: 'Twee dingen die handig zijn om te weten',
      intro:
        'Wat context maakt de wandeling interessanter en zorgt voor realistische verwachtingen over wat je daadwerkelijk ziet.',
      items: [
        {
          title: 'Er werd gefilmd tijdens een echt feest',
          text:
            'Een deel van de opnames viel in 2024 samen met de echte Feria de San Antonio in Frigiliana. De mensenmassa’s in sommige shots zijn echte dorpsfeesten, geen figuranten — een van de redenen waarom het dorp zo levensecht overkomt.'
        },
        {
          title: 'Er is geen officiële locatiekaart',
          text:
            'Netflix en de productie hebben geen scène-voor-scène locatiegids gepubliceerd. Publiek bevestigd is de oude kern in het algemeen, het gebied rond de kerk en de kust bij Nerja/Torrox — wees dus voorzichtig met zeer specifieke claims die online circuleren.'
        }
      ]
    },
    trust: {
      title: 'Hoe deze gids tot stand kwam',
      text:
        'Deze pagina is gebaseerd op gepubliceerde productieberichtgeving en lokale verslaggeving over de opnames van 2024, vergeleken met wat in beeld en in interviews met cast en crew is bevestigd — niet op één ongecontroleerde bron. Waar een detail niet officieel bevestigd is, staat dat hierboven zo vermeld in plaats van als feit gepresenteerd.'
    },
    combine: {
      title: 'Maak er een echte dorpsdag van',
      intro:
        'De straten uit de serie zijn dezelfde straten die je op een gewone avond kunt bewandelen. Combineer de wandeling met het dorpsleven waar de serie alleen naar verwijst.',
      items: [
        {
          title: 'Bezoek de echte Feria de San Antonio',
          text:
            'Het feest waartijdens werd gefilmd, vindt nog elk jaar in juni plaats. Onze festivalgids behandelt data, sfeer en planningstips voor een verblijf eromheen.',
          linkToken: 'frigiliana_events_authority',
          linkLabel: 'Bekijk de festivalgids'
        },
        {
          title: 'Zoek een tafel dicht bij waar je hebt gelopen',
          text:
            'Onze restaurantgids vergelijkt dorpsterrassen aan de Calle Real met tafels aan zee bij Nerja en Torrox, inclusief vervoer en reserveren.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Bekijk de restaurantgids'
        }
      ]
    },
    closing: {
      title: 'Verblijf waar de oude kern begint',
      lead:
        'Een AMARA-appartement in Frigiliana brengt de Calle Real en de straten rond de Iglesia de San Antonio op loopafstand, met Nerja en Torrox een korte rit verderop.',
      availabilityCta: 'Beschikbaarheid checken',
      apartmentsCta: 'Appartementen bekijken'
    }
  },
  sv: {
    footerHighlights: {
      dosTumbas: 'Netflix inspelningsplatser',
      festivals: 'Festivaler och traditioner',
      restaurants: 'Restauranger och lokal mat'
    },
    hero: {
      kicker: 'På skärmen · Netflix',
      title: 'Frigiliana på skärmen: Dos Tumbas',
      paragraphs: [
        'Netflix-thrillern Dos Tumbas i tre delar (släppt 29 augusti 2025) spelades till stor del in i Frigilianas gamla stad, med ytterligare scener i Nerja och Torrox. Regisserad av Kike Maíllo och skapad av författaren Agustín Martínez, med Kiti Mánver, Álvaro Morte och Hovik Keuchkerian i huvudrollerna.',
        'Den här guiden är ingen handlingssammanfattning. Den är en praktisk följeslagare för gäster som redan bor i byn och vill känna igen gator, torg och kustlinjen som syns i serien.',
        'Rapportering om inspelningen bekräftar att teamet filmade i gamla stan under 2024, bland annat under den verkliga Feria de San Antonio, samt längs kusten mellan Nerja och Torrox. Exakta platser scen för scen har inte publicerats officiellt — se därför detaljerna nedan som en väl underbyggd orientering, inte en exakt karta.'
      ],
      imageAlt: 'Vitkalkade gränder i Frigilianas gamla stad i eftermiddagsljus'
    },
    trailer: {
      label: 'Officiell trailer',
      privacyNote:
        'Trailern ligger hos YouTube. När den laddas överförs IP-adressen till Google, som även kan lagra data på enheten.',
      loadAction: 'Ladda trailern'
    },
    intro: {
      title: 'Vad serien handlar om, kort',
      text:
        'Dos Tumbas följer en mormor som startar sin egen utredning två år efter att två tonårsflickor försvann. Serien kommer från teamet bakom de framgångsrika Carmen Mola-thrillerna och för samman tre skådespelare som tidigare synts tillsammans i La Casa de Papel.',
      reviewed: 'Redaktionellt granskad: augusti 2026'
    },
    locations: {
      title: 'Var byn syns',
      intro:
        'Rapportering om inspelningen pekar ut tre områden som gäster i gamla stan går förbi direkt, plus en kort kustavstickare mot Nerja och Torrox.',
      items: [
        {
          title: 'Calle Real och gamla stans gränder',
          subline: 'Frigiliana, Barrio Alto',
          text:
            'Inspelningen skedde längs Calle Real och de trappstegsformade, vita gränderna i den övre delen av byn — samma vägar som gäster går mellan en AMARA-lägenhet och bycentrum.'
        },
        {
          title: 'Runt Iglesia de San Antonio',
          subline: 'Frigiliana, historiska centrum',
          text:
            'Flera scener spelades in vid de små torgen kring Iglesia de San Antonio, samtidigt som den verkliga vallfärden och marknaden Feria de San Antonio som fyller den här delen av byn varje juni.'
        },
        {
          title: 'Kusten mellan Nerja och Torrox',
          subline: 'Restinga Beach, vid gränsen Nerja/Torrox',
          text:
            'För kustscenerna använde produktionen Restaurante La Restinga Beach vid gränsen mellan Nerja och Torrox, tillfälligt omdöpt till “Restaurante Antonio” i serien. Det är fortfarande en riktig, öppen strandrestaurang.'
        }
      ]
    },
    production: {
      title: 'Två saker som är bra att veta innan ni letar efter platserna',
      intro:
        'Lite bakgrund gör promenaden mer intressant och ger rimliga förväntningar på vad ni faktiskt kommer att se.',
      items: [
        {
          title: 'Inspelningen skedde under en verklig fest',
          text:
            'Delar av inspelningen sammanföll med Frigilianas verkliga Feria de San Antonio 2024. Folkmassorna i vissa scener är äkta byfester, inte statister — en av anledningarna till att byn känns så levande i serien.'
        },
        {
          title: 'Det finns ingen officiell platskarta',
          text:
            'Netflix och produktionen har inte publicerat någon scen-för-scen-guide. Det som är offentligt bekräftat är gamla stan i allmänhet, området kring kyrkan och kusten vid Nerja/Torrox — var därför försiktig med mycket specifika påståenden som cirkulerar online.'
        }
      ]
    },
    trust: {
      title: 'Så här togs den här guiden fram',
      text:
        'Den här sidan bygger på publicerad produktionsrapportering och lokal bevakning av inspelningen 2024, jämförd med det som bekräftas i serien och i intervjuer med skådespelare och team — inte på en enda okontrollerad källa. Där en detalj inte är officiellt bekräftad har vi skrivit det ovan istället för att presentera det som fakta.'
    },
    combine: {
      title: 'Gör det till en riktig bydag',
      intro:
        'Gatorna i serien är samma gator ni kan gå på vilken vanlig kväll som helst. Kombinera promenaden med det byliv som serien bara antyder.',
      items: [
        {
          title: 'Besök den verkliga Feria de San Antonio',
          text:
            'Festen som teamet filmade under hålls fortfarande varje juni. Vår festivalguide går igenom datum, stämning och vad ni bör planera för kring festen.',
          linkToken: 'frigiliana_events_authority',
          linkLabel: 'Se festivalguiden'
        },
        {
          title: 'Hitta ett bord nära där ni har gått',
          text:
            'Vår restaurangguide jämför byterrasser vid Calle Real med bord vid havet nära Nerja och Torrox, inklusive resa och bokning.',
          linkToken: 'frigiliana_food_authority',
          linkLabel: 'Se restaurangguiden'
        }
      ]
    },
    closing: {
      title: 'Bo där gamla stan börjar',
      lead:
        'En AMARA-lägenhet i Frigiliana lägger Calle Real och gränderna kring Iglesia de San Antonio inom promenadavstånd, med Nerja och Torrox en kort bilfärd bort.',
      availabilityCta: 'Se tillgänglighet',
      apartmentsCta: 'Visa lägenheter'
    }
  }
};
