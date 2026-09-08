import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';


export interface GettingToFrigilianaOption {
  id: 'car' | 'transfer' | 'bus';
  kicker: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  timing: LocalizedText;
  bestFor: LocalizedText;
  consideration: LocalizedText;
}

export const gettingToFrigilianaSeo: AmaraAuthoringSeo = {
  version: '2026-08-18-getting-to-frigiliana-v1.1-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Getting to Frigiliana: Car, Transfer & Bus',
      description:
        'Plan your journey from Málaga Airport to Frigiliana by rental car, private transfer or bus via Nerja, with practical arrival guidance.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Anreise nach Frigiliana: Auto, Transfer & Bus',
      description:
        'Vom Flughafen Málaga nach Frigiliana: gut eine Stunde mit Mietwagen oder Transfer, mit dem Bus über Nerja. Was zu jedem Weg gehört und wie es im Dorf weitergeht.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cómo llegar a Frigiliana: coche, transfer y autobús',
      description:
        'Planificad el trayecto desde el aeropuerto de Málaga hasta Frigiliana en coche, transfer privado o autobús, con tiempos, cambio en Nerja y llegada al pueblo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Naar Frigiliana: auto, transfer of bus',
      description:
        'Plan de reis van Málaga Airport naar Frigiliana met huurauto, privétransfer of bus: reistijden, de overstap in Nerja en de aankomst in het dorp.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Resa till Frigiliana: bil, transfer och buss',
      description:
        'Planera resan från Málaga flygplats till Frigiliana med hyrbil, privat transfer eller buss: restider, bytet i Nerja och ankomsten till byn.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const gettingToFrigilianaExternalLinks = {
  airportBus:
    'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
  alsa: 'https://www.alsa.com/en/coach/malaga-nerja',
  localBus: 'https://frigiliana.es/horario-autobuses/'
} as const;

export const gettingToFrigilianaCopy = {
  nav: {
    brand: {
      en: 'Frigiliana',
      de: 'Frigiliana',
      es: 'Frigiliana',
      nl: 'Frigiliana',
      sv: 'Frigiliana'
    } satisfies LocalizedText,
    links: [
      {
        token: 'location_frigiliana',
        label: {
          en: 'Frigiliana',
          de: 'Frigiliana',
          es: 'Frigiliana',
          nl: 'Frigiliana',
          sv: 'Frigiliana'
        } satisfies LocalizedText
      },
      {
        token: 'frigiliana_parking',
        label: {
          en: 'Parking',
          de: 'Parken',
          es: 'Aparcamiento',
          nl: 'Parkeren',
          sv: 'Parkering'
        } satisfies LocalizedText
      },
      {
        token: 'getting_to_frigiliana',
        label: {
          en: 'Getting here',
          de: 'Anreise',
          es: 'Cómo llegar',
          nl: 'Erheen reizen',
          sv: 'Resa hit'
        } satisfies LocalizedText
      }
    ]
  },
  hero: {
    eyebrow: {
      en: 'Travel planning · Frigiliana',
      de: 'Anreise · Frigiliana',
      es: 'Planificar el viaje · Frigiliana',
      nl: 'Reisplanning · Frigiliana',
      sv: 'Reseplanering · Frigiliana'
    } satisfies LocalizedText,
    title: {
      en: 'Getting to Frigiliana',
      de: 'Anreise nach Frigiliana',
      es: 'Cómo llegar a Frigiliana',
      nl: 'Naar Frigiliana reizen',
      sv: 'Resa till Frigiliana'
    } satisfies LocalizedText,
    lead: {
      en: 'Málaga-Costa del Sol Airport is the main gateway to Frigiliana. By road, plan roughly one hour in normal traffic; by public transport, the practical connection runs through Nerja.',
      de: 'Vom Flughafen Málaga sind es gut eine Stunde: erst die Küste entlang, ab Nerja die Serpentinen hinauf ins Dorf. Wer ohne Auto kommt, fährt mit dem Bus nach Nerja und von dort weiter.',
      es: 'El aeropuerto de Málaga-Costa del Sol es la principal puerta de entrada a Frigiliana. Por carretera conviene calcular alrededor de una hora con tráfico normal; en transporte público, la conexión práctica pasa por Nerja.',
      nl: 'Málaga-Costa del Sol Airport is de belangrijkste toegangspoort tot Frigiliana. Reken over de weg bij normaal verkeer op ongeveer een uur; met het openbaar vervoer loopt de praktische verbinding via Nerja.',
      sv: 'Málaga-Costa del Sol flygplats är den vanligaste utgångspunkten för resan till Frigiliana. Med bil tar resan ungefär en timme i normal trafik; med kollektivtrafik går den praktiska förbindelsen via Nerja.'
    } satisfies LocalizedText,
    body: {
      en: 'The best option depends less on distance than on your arrival time, luggage, and how much freedom you want during the stay. This guide separates those choices clearly.',
      de: 'Die Fahrt ist Teil der Ankunft: links das Meer, dann die Berge, zuletzt das weiße Dorf über euch.',
      es: 'La mejor opción depende menos de la distancia que de la hora de llegada, el equipaje y la libertad que queráis durante la estancia. Esta guía separa claramente cada alternativa.',
      nl: 'De beste keuze hangt minder af van de afstand dan van jullie aankomsttijd, bagage en hoeveel vrijheid jullie tijdens het verblijf willen. Deze gids zet de opties duidelijk naast elkaar.',
      sv: 'Det bästa alternativet beror mindre på avståndet än på ankomsttid, bagage och hur stor frihet ni vill ha under vistelsen. Guiden skiljer tydligt mellan alternativen.'
    } satisfies LocalizedText,
    primaryCta: {
      en: 'Compare arrival options',
      de: 'Die drei Wege',
      es: 'Comparar opciones',
      nl: 'Reisopties vergelijken',
      sv: 'Jämför resealternativ'
    } satisfies LocalizedText,
    secondaryCta: {
      en: 'Official timetables',
      de: 'Fahrpläne',
      es: 'Horarios oficiales',
      nl: 'Officiële dienstregelingen',
      sv: 'Officiella tidtabeller'
    } satisfies LocalizedText,
    imageAlt: {
      en: 'White houses of Frigiliana on the hillside',
      de: 'Weiße Häuser von Frigiliana am Berghang',
      es: 'Casas blancas de Frigiliana en la ladera',
      nl: 'Witte huizen van Frigiliana tegen de heuvel',
      sv: 'Vita hus i Frigiliana på bergssluttningen'
    } satisfies LocalizedText
  },
  facts: {
    title: {
      en: 'The journey at a glance',
      de: 'Auf einen Blick',
      es: 'El trayecto de un vistazo',
      nl: 'De reis in het kort',
      sv: 'Resan i korthet'
    } satisfies LocalizedText,
    items: [
      {
        label: {
          en: 'Main airport',
          de: 'Nächster Flughafen',
          es: 'Aeropuerto principal',
          nl: 'Belangrijkste luchthaven',
          sv: 'Närmaste huvudflygplats'
        } satisfies LocalizedText,
        value: {
          en: 'Málaga · AGP',
          de: 'Málaga · AGP',
          es: 'Málaga · AGP',
          nl: 'Málaga · AGP',
          sv: 'Málaga · AGP'
        } satisfies LocalizedText,
        note: {
          en: 'The usual gateway for international arrivals.',
          de: 'Gut 65 Kilometer, die Küste entlang.',
          es: 'La puerta de entrada habitual para vuelos internacionales.',
          nl: 'De gebruikelijke toegangspoort voor internationale aankomsten.',
          sv: 'Den vanligaste flygplatsen för internationella ankomster.'
        } satisfies LocalizedText
      },
      {
        label: {
          en: 'Road journey',
          de: 'Fahrtzeit',
          es: 'Trayecto por carretera',
          nl: 'Reis over de weg',
          sv: 'Restid med bil'
        } satisfies LocalizedText,
        value: {
          en: 'About 1 hour',
          de: 'Etwa 1 Stunde',
          es: 'Aproximadamente 1 hora',
          nl: 'Ongeveer 1 uur',
          sv: 'Cirka 1 timme'
        } satisfies LocalizedText,
        note: {
          en: 'Allow more time during busy periods or roadworks.',
          de: 'Im Sommer am späten Nachmittag auch anderthalb.',
          es: 'Calculad más tiempo con tráfico intenso u obras.',
          nl: 'Plan extra tijd bij druk verkeer of wegwerkzaamheden.',
          sv: 'Lägg till tid vid hög trafik eller vägarbeten.'
        } satisfies LocalizedText
      },
      {
        label: {
          en: 'Public transport',
          de: 'Öffentliche Verkehrsmittel',
          es: 'Transporte público',
          nl: 'Openbaar vervoer',
          sv: 'Kollektivtrafik'
        } satisfies LocalizedText,
        value: {
          en: 'Change in Nerja',
          de: 'Umstieg in Nerja',
          es: 'Cambio en Nerja',
          nl: 'Overstappen in Nerja',
          sv: 'Byte i Nerja'
        } satisfies LocalizedText,
        note: {
          en: 'Continue by local bus or taxi up to Frigiliana.',
          de: 'Bus bis Nerja, dann Ortsbus oder Taxi hinauf.',
          es: 'Desde allí se continúa en autobús local o taxi hasta Frigiliana.',
          nl: 'Ga vanaf daar met de lokale bus of taxi omhoog naar Frigiliana.',
          sv: 'Fortsätt därifrån med lokalbuss eller taxi upp till Frigiliana.'
        } satisfies LocalizedText
      }
    ]
  },
  options: {
    eyebrow: {
      en: 'Choose your route',
      de: 'Drei Wege',
      es: 'Elegid vuestra ruta',
      nl: 'Kies jullie route',
      sv: 'Välj resväg'
    } satisfies LocalizedText,
    title: {
      en: 'Three practical ways to arrive',
      de: 'Mietwagen, Transfer oder Bus',
      es: 'Tres formas prácticas de llegar',
      nl: 'Drie praktische manieren om aan te komen',
      sv: 'Tre praktiska sätt att ta sig hit'
    } satisfies LocalizedText,
    intro: {
      en: 'We always take a rental car ourselves. It costs extra, but the flexibility has been worth it every time. Transfers and buses work too — compare effort, cost and the connection after landing.',
      de: 'Wir nehmen selbst immer den Mietwagen. Er kostet extra, aber die Strandtage und Ausflüge waren es uns jedes Mal wert. Transfer und Bus bringen euch ebenso ins Dorf.',
      es: 'Nosotros siempre alquilamos coche. Cuesta más, pero la flexibilidad nos ha compensado cada vez. El transfer y el autobús también funcionan: comparad esfuerzo, coste y la conexión después de aterrizar.',
      nl: 'Zelf nemen we altijd een huurauto. Dat kost extra, maar de vrijheid was het ons tot nu toe elke keer waard. Transfer en bus werken ook — vergelijk moeite, kosten en de aansluiting na de landing.',
      sv: 'Själva tar vi alltid hyrbil. Det kostar extra, men friheten har varit värd det varje gång. Transfer och buss fungerar också – jämför besvär, kostnad och anslutningen efter landningen.'
    } satisfies LocalizedText,
    recommendationLabel: {
      en: 'Our recommendation',
      de: 'Unsere Empfehlung',
      es: 'Nuestra recomendación',
      nl: 'Onze aanbeveling',
      sv: 'Vår rekommendation'
    } satisfies LocalizedText,
    labels: {
      timing: {
        en: 'Journey',
        de: 'Dauer',
        es: 'Trayecto',
        nl: 'Reis',
        sv: 'Resa'
      } satisfies LocalizedText,
      bestFor: {
        en: 'Best for',
        de: 'Passt für',
        es: 'Ideal para',
        nl: 'Geschikt voor',
        sv: 'Passar bäst för'
      } satisfies LocalizedText,
      consideration: {
        en: 'Plan for',
        de: 'Dazu gehört',
        es: 'A tener en cuenta',
        nl: 'Houd rekening met',
        sv: 'Tänk på'
      } satisfies LocalizedText
    },
    items: [
      {
        id: 'car',
        kicker: {
          en: 'Most flexible',
          de: 'Am flexibelsten',
          es: 'Máxima flexibilidad',
          nl: 'Meeste vrijheid',
          sv: 'Mest flexibelt'
        },
        title: {
          en: 'Rental car',
          de: 'Mietwagen',
          es: 'Coche de alquiler',
          nl: 'Huurauto',
          sv: 'Hyrbil'
        },
        summary: {
          en: 'The direct route from the airport follows the coast before turning inland and uphill from Nerja to Frigiliana.',
          de: 'Vom Flughafen auf die A-7 nach Osten, bei Nerja ab und die Straße hinauf nach Frigiliana. Am Ende liegt das Dorf vor euch.',
          es: 'La ruta directa desde el aeropuerto sigue la costa y, a partir de Nerja, sube hacia el interior hasta Frigiliana.',
          nl: 'De directe route vanaf de luchthaven volgt de kust en gaat vanaf Nerja landinwaarts omhoog naar Frigiliana.',
          sv: 'Den direkta vägen från flygplatsen följer kusten och går sedan uppåt från Nerja mot Frigiliana.'
        },
        timing: {
          en: '**Roughly one hour** in normal traffic.',
          de: '**Gut eine Stunde.**',
          es: '**Alrededor de una hora** con tráfico normal.',
          nl: '**Ongeveer een uur** bij normaal verkeer.',
          sv: '**Ungefär en timme** i normal trafik.'
        },
        bestFor: {
          en: 'Guests planning **beaches, day trips, or several stops** during the stay.',
          de: '**Strandtage, Ausflüge, Wanderungen** weiter draußen.',
          es: 'Quienes quieran **visitar playas, hacer excursiones o moverse por distintos lugares**.',
          nl: 'Gasten die **stranden, dagtochten of meerdere bestemmingen** tijdens het verblijf plannen.',
          sv: 'Gäster som planerar **stränder, dagsutflykter eller flera stopp** under vistelsen.'
        },
        consideration: {
          en: '**Parking and the final walk matter** in Frigiliana; old-town access is not door to door. Driving an electric car? Plan your charging ahead; the map shows the nearest public charging points.',
          de: '**Das Auto bleibt in der Tiefgarage** unten im Ort, von dort geht es zu Fuß hinauf. Mit Elektroauto: Die Karte zeigt die nächsten Ladepunkte.',
          es: 'En Frigiliana importan **el aparcamiento y el último tramo a pie**; no todo el casco antiguo permite llegar hasta la puerta. ¿Llegáis en coche eléctrico? Planificad la carga con antelación; el mapa muestra los puntos de recarga públicos más cercanos.',
          nl: '**Parkeren en het laatste stuk lopen zijn belangrijk**; in de oude kern rijden jullie niet overal tot aan de deur. Komen jullie met een elektrische auto? Plan het laden vooraf; de kaart toont de dichtstbijzijnde openbare laadpunten.',
          sv: '**Parkering och sista sträckan till fots är viktiga**; i gamla stan går det inte alltid att köra ända fram. Kommer ni med elbil? Planera laddningen i förväg; kartan visar de närmaste offentliga laddstationerna.'
        }
      },
      {
        id: 'transfer',
        kicker: {
          en: 'Least logistics',
          de: 'Am bequemsten',
          es: 'La opción más sencilla',
          nl: 'Minste geregel',
          sv: 'Minst planering'
        },
        title: {
          en: 'Private transfer or taxi',
          de: 'Privater Transfer oder Taxi',
          es: 'Transfer privado o taxi',
          nl: 'Privétransfer of taxi',
          sv: 'Privat transfer eller taxi'
        },
        summary: {
          en: 'A pre-booked driver meets your flight and takes you directly towards Frigiliana without a change in Nerja.',
          de: 'Ein Fahrer wartet in der Ankunftshalle und bringt euch direkt bis ins Dorf, ohne Umstieg.',
          es: 'Un conductor reservado con antelación os recoge en el aeropuerto y os lleva hacia Frigiliana sin cambiar en Nerja.',
          nl: 'Een vooraf geboekte chauffeur haalt jullie op bij de luchthaven en rijdt zonder overstap in Nerja richting Frigiliana.',
          sv: 'En förbokad förare möter er på flygplatsen och kör direkt mot Frigiliana utan byte i Nerja.'
        },
        timing: {
          en: '**Similar road time to a rental car**; pickup and drop-off should be agreed in advance.',
          de: '**Wie mit dem Mietwagen**, gut eine Stunde.',
          es: '**Un tiempo similar al coche de alquiler**; conviene acordar antes la recogida y el punto de bajada.',
          nl: '**Vergelijkbare reistijd als met een huurauto**; spreek ophaal- en afzetpunt vooraf af.',
          sv: '**Ungefär samma restid som med hyrbil**; bestäm hämtning och avlämningsplats i förväg.'
        },
        bestFor: {
          en: '**Late arrivals, families, or heavier luggage**, and guests who do not need a car during the stay.',
          de: '**Späte Flüge, Familien, viel Gepäck** und alle, die vor Ort kein Auto brauchen.',
          es: '**Llegadas tardías, familias o equipaje pesado**, y quienes no necesiten coche durante la estancia.',
          nl: '**Late aankomsten, gezinnen of veel bagage**, en gasten die tijdens het verblijf geen auto nodig hebben.',
          sv: '**Sena ankomster, familjer eller mycket bagage**, och gäster som inte behöver bil under vistelsen.'
        },
        consideration: {
          en: '**Ask for a fixed quote** and confirm luggage, child seats, flight monitoring, and the exact drop-off point.',
          de: '**Festpreis, Kindersitze und Ausstiegspunkt** klärt ihr beim Buchen.',
          es: '**Pedid un precio cerrado** y confirmad equipaje, sillas infantiles, seguimiento del vuelo y punto exacto de bajada.',
          nl: '**Vraag een vaste prijs** en bevestig bagage, kinderzitjes, vluchtcontrole en het exacte afzetpunt.',
          sv: '**Be om fast pris** och bekräfta bagage, barnstolar, flygbevakning och exakt avlämningsplats.'
        }
      },
      {
        id: 'bus',
        kicker: {
          en: 'Lowest cost',
          de: 'Am günstigsten',
          es: 'La opción más económica',
          nl: 'Laagste kosten',
          sv: 'Lägst kostnad'
        },
        title: {
          en: 'Bus via Nerja',
          de: 'Bus über Nerja',
          es: 'Autobús vía Nerja',
          nl: 'Bus via Nerja',
          sv: 'Buss via Nerja'
        },
        summary: {
          en: 'Aena lists an airport–Nerja coach connection. From Nerja, continue to Frigiliana by local bus or taxi.',
          de: 'Vom Flughafen fährt ein Bus nach Nerja; dort steigt ihr in den Ortsbus nach Frigiliana oder nehmt ein Taxi.',
          es: 'Aena indica una conexión de autobús entre el aeropuerto y Nerja. Desde Nerja se continúa a Frigiliana en autobús local o taxi.',
          nl: 'Aena vermeldt een busverbinding tussen de luchthaven en Nerja. Vanaf Nerja reizen jullie verder met de lokale bus of taxi.',
          sv: 'Aena anger en bussförbindelse mellan flygplatsen och Nerja. Från Nerja fortsätter ni med lokalbuss eller taxi.'
        },
        timing: {
          en: '**Connection times vary.** Check both timetables for your travel date and allow a generous buffer in Nerja.',
          de: '**Zwei bis drei Stunden** mit Umstieg, je nach Anschluss.',
          es: '**Los enlaces varían.** Consultad ambos horarios para la fecha del viaje y dejad margen suficiente en Nerja.',
          nl: '**Aansluittijden verschillen.** Controleer beide dienstregelingen voor jullie reisdatum en plan ruim overstaptijd in Nerja.',
          sv: '**Anslutningstiderna varierar.** Kontrollera båda tidtabellerna för resdagen och lägg in god marginal i Nerja.'
        },
        bestFor: {
          en: '**Daytime arrivals with light luggage** and travellers comfortable coordinating two services.',
          de: '**Ankunft tagsüber, leichtes Gepäck.**',
          es: '**Llegadas diurnas con equipaje ligero** y viajeros cómodos coordinando dos servicios.',
          nl: '**Aankomst overdag met lichte bagage** en reizigers die twee verbindingen prettig vinden.',
          sv: '**Ankomst dagtid med lätt bagage** och resenärer som är bekväma med att samordna två förbindelser.'
        },
        consideration: {
          en: '**The local timetable can change**, including on Sundays, holidays, and in summer.',
          de: '**Sonntags und abends fährt der Ortsbus seltener**; dann ist das Taxi ab Nerja die Lösung.',
          es: '**El horario local puede cambiar**, especialmente domingos, festivos y en verano.',
          nl: '**De lokale dienstregeling kan wijzigen**, vooral op zon- en feestdagen en in de zomer.',
          sv: '**Den lokala tidtabellen kan ändras**, särskilt på söndagar, helgdagar och under sommaren.'
        }
      }
    ] satisfies GettingToFrigilianaOption[]
  },
  publicTransport: {
    title: {
      en: 'Public transport, step by step',
      de: 'Mit dem Bus, Schritt für Schritt',
      es: 'Transporte público, paso a paso',
      nl: 'Met het openbaar vervoer, stap voor stap',
      sv: 'Kollektivtrafik, steg för steg'
    } satisfies LocalizedText,
    steps: [
      {
        num: '01',
        title: {
          en: 'Check Airport to Nerja',
          de: 'Flughafen nach Nerja',
          es: 'Comprobad aeropuerto–Nerja',
          nl: 'Controleer luchthaven–Nerja',
          sv: 'Kontrollera flygplats–Nerja'
        } satisfies LocalizedText,
        text: {
          en: 'Search ALSA for your exact date and flight time. Not every service follows the same stopping pattern.',
          de: 'Der ALSA-Bus fährt vom Flughafen an die Küste; die Zeiten für euren Tag stehen unten verlinkt.',
          es: 'Consultad ALSA para la fecha y hora exactas. No todos los servicios realizan las mismas paradas.',
          nl: 'Zoek bij ALSA op jullie exacte datum en vluchttijd. Niet iedere rit heeft hetzelfde haltepatroon.',
          sv: 'Sök hos ALSA för exakt datum och flygtid. Alla avgångar har inte samma stopp.'
        } satisfies LocalizedText
      },
      {
        num: '02',
        title: {
          en: 'Arrive at Nerja bus station',
          de: 'Umstieg in Nerja',
          es: 'Llegad a la estación de Nerja',
          nl: 'Kom aan bij het busstation van Nerja',
          sv: 'Anländ till Nerjas busstation'
        } satisfies LocalizedText,
        text: {
          en: 'Nerja is the transfer point for the final journey inland to Frigiliana.',
          de: 'Der Busbahnhof liegt am oberen Rand von Nerja; hier fahren Ortsbus und Taxis nach Frigiliana ab.',
          es: 'Nerja es el punto de enlace para el último tramo hacia el interior, hasta Frigiliana.',
          nl: 'Nerja is het overstappunt voor het laatste traject landinwaarts naar Frigiliana.',
          sv: 'Nerja är bytespunkten för den sista sträckan inåt landet till Frigiliana.'
        } satisfies LocalizedText
      },
      {
        num: '03',
        title: {
          en: 'Continue by local bus or taxi',
          de: 'Hinauf ins Dorf',
          es: 'Continuad en autobús local o taxi',
          nl: 'Ga verder met lokale bus of taxi',
          sv: 'Fortsätt med lokalbuss eller taxi'
        } satisfies LocalizedText,
        text: {
          en: 'Match the municipal Nerja–Frigiliana timetable to your arrival. A taxi is the practical fallback if the connection is long.',
          de: 'Der Ortsbus braucht eine Viertelstunde und hält an der Calle Real unten im Ort. Wer nicht warten will, nimmt ein Taxi.',
          es: 'Coordinad el horario municipal Nerja–Frigiliana con vuestra llegada. Si la espera es larga, el taxi es la alternativa práctica.',
          nl: 'Stem de gemeentelijke dienstregeling Nerja–Frigiliana af op jullie aankomst. Bij lange wachttijd is een taxi de praktische uitwijkmogelijkheid.',
          sv: 'Matcha kommunens tidtabell Nerja–Frigiliana med er ankomst. Vid lång väntetid är taxi ett praktiskt alternativ.'
        } satisfies LocalizedText
      }
    ],
    faqTitle: {
      en: 'Questions before you travel',
      de: 'Fragen vor der Reise',
      es: 'Preguntas antes de viajar',
      nl: 'Vragen voor vertrek',
      sv: 'Frågor före resan'
    } satisfies LocalizedText,
    faq: [
      {
        question: {
          en: 'Which airport is best for Frigiliana?',
          de: 'Welcher Flughafen eignet sich am besten für Frigiliana?',
          es: '¿Qué aeropuerto es el mejor para Frigiliana?',
          nl: 'Welke luchthaven is het beste voor Frigiliana?',
          sv: 'Vilken flygplats passar bäst för Frigiliana?'
        } satisfies LocalizedText,
        answer: {
          en: 'Málaga-Costa del Sol Airport (AGP) is the usual choice. It offers the most flight connections and the clearest onward transport options towards Nerja and Frigiliana.',
          de: 'Málaga. Dort landen die meisten Flüge, und die Fahrt ist die kürzeste.',
          es: 'Málaga-Costa del Sol (AGP) suele ser la mejor opción. Ofrece más conexiones aéreas y las alternativas más claras para continuar hacia Nerja y Frigiliana.',
          nl: 'Málaga-Costa del Sol (AGP) is doorgaans de beste keuze. De luchthaven biedt de meeste vluchten en de duidelijkste verbindingen richting Nerja en Frigiliana.',
          sv: 'Málaga-Costa del Sol (AGP) är oftast det bästa valet. Flygplatsen har flest flygförbindelser och tydligast vidare transport mot Nerja och Frigiliana.'
        } satisfies LocalizedText
      },
      {
        question: {
          en: 'Is there a direct bus from Málaga Airport to Frigiliana?',
          de: 'Gibt es einen direkten Bus vom Flughafen Málaga nach Frigiliana?',
          es: '¿Hay autobús directo del aeropuerto de Málaga a Frigiliana?',
          nl: 'Is er een rechtstreekse bus van Málaga Airport naar Frigiliana?',
          sv: 'Finns det direktbuss från Málaga flygplats till Frigiliana?'
        } satisfies LocalizedText,
        answer: {
          en: 'Plan on changing in Nerja. Aena lists an airport–Nerja service, and the final section to Frigiliana is covered by the local bus or a taxi.',
          de: 'Bis Nerja. Von dort bringen euch Ortsbus oder Taxi hinauf ins Dorf.',
          es: 'Contad con un cambio en Nerja. Aena indica una conexión aeropuerto–Nerja; el último tramo hasta Frigiliana se hace en autobús local o taxi.',
          nl: 'Reken op een overstap in Nerja. Aena vermeldt een verbinding luchthaven–Nerja; het laatste deel naar Frigiliana gaat met lokale bus of taxi.',
          sv: 'Räkna med byte i Nerja. Aena anger en förbindelse flygplats–Nerja; sista delen till Frigiliana går med lokalbuss eller taxi.'
        } satisfies LocalizedText
      },
      {
        question: {
          en: 'Do I need a car in Frigiliana?',
          de: 'Brauche ich in Frigiliana ein Auto?',
          es: '¿Necesito coche en Frigiliana?',
          nl: 'Heb ik een auto nodig in Frigiliana?',
          sv: 'Behöver jag bil i Frigiliana?'
        } satisfies LocalizedText,
        answer: {
          en: 'Not necessarily. The village itself is best explored on foot. A car is useful for beaches and day trips, while a transfer plus local buses can work well for a village-focused stay.',
          de: 'Im Dorf nicht, da seid ihr zu Fuß unterwegs. Für Strandtage und Ausflüge schon; wer nur das Dorf will, kommt mit Transfer und Bus gut aus.',
          es: 'No necesariamente. El pueblo se disfruta mejor a pie. El coche resulta práctico para playas y excursiones; para una estancia centrada en el pueblo pueden funcionar bien el transfer y los autobuses locales.',
          nl: 'Niet per se. Het dorp zelf verkennen jullie het best te voet. Een auto is handig voor stranden en dagtochten; voor een verblijf dat vooral om het dorp draait, werken transfer en lokale bussen goed.',
          sv: 'Inte nödvändigtvis. Själva byn upplevs bäst till fots. Bil är praktiskt för stränder och utflykter, medan transfer och lokalbuss kan fungera bra för en vistelse med fokus på byn.'
        } satisfies LocalizedText
      },
      {
        question: {
          en: 'What is best for a late flight?',
          de: 'Was ist bei einem späten Flug am sinnvollsten?',
          es: '¿Qué conviene para un vuelo que llega tarde?',
          nl: 'Wat is het beste bij een late vlucht?',
          sv: 'Vad passar bäst vid ett sent flyg?'
        } satisfies LocalizedText,
        answer: {
          en: 'A pre-booked transfer is usually the calmest choice because local bus connections become less frequent later in the day. Confirm flight monitoring and the drop-off point before departure.',
          de: 'Ein gebuchter Transfer. Der Fahrer verfolgt euren Flug, und ihr müsst um Mitternacht keinen Fahrplan lesen.',
          es: 'Un transfer reservado suele ser la opción más tranquila, porque las conexiones locales son menos frecuentes al final del día. Confirmad antes del vuelo el seguimiento y el punto de bajada.',
          nl: 'Een vooraf geboekte transfer is meestal de rustigste keuze, omdat lokale busverbindingen later op de dag minder vaak rijden. Bevestig vluchtcontrole en afzetpunt voor vertrek.',
          sv: 'En förbokad transfer är oftast lugnast eftersom lokala bussar går mer sällan senare på dagen. Bekräfta flygbevakning och avlämningsplats före avresa.'
        } satisfies LocalizedText
      }
    ]
  },
  reality: {
    eyebrow: {
      en: 'Arrived in the village',
      de: 'Im Dorf angekommen',
      es: 'Ya en el pueblo',
      nl: 'Aangekomen in het dorp',
      sv: 'Framme i byn'
    } satisfies LocalizedText,
    title: {
      en: 'From Frigiliana, continue to Casa AMARA',
      de: 'Die letzten Meter zu Casa AMARA',
      es: 'Desde Frigiliana, continuad hasta Casa AMARA',
      nl: 'Van Frigiliana verder naar Casa AMARA',
      sv: 'Från Frigiliana vidare till Casa AMARA'
    } satisfies LocalizedText,
    body: {
      en: 'This guide brings you as far as Frigiliana. Once you reach the village, our Casa AMARA arrival guide takes over and shows you the exact final approach to the house.',
      de: 'Diese Seite bringt euch bis ins Dorf. Ab da übernimmt der Ankunftsguide für Casa AMARA: wo das Auto stehen bleibt, wo ihr aussteigt, welche Gasse hinaufführt.',
      es: 'Esta guía os lleva hasta Frigiliana. Cuando lleguéis al pueblo, nuestra guía de llegada a Casa AMARA continúa con el último trayecto exacto hasta la casa.',
      nl: 'Deze gids brengt jullie tot Frigiliana. Zodra jullie het dorp bereiken, neemt onze aankomstgids voor Casa AMARA het over met de exacte laatste route naar het huis.',
      sv: 'Den här guiden tar er till Frigiliana. När ni når byn tar vår ankomstguide för Casa AMARA vid och visar den exakta sista vägen till huset.'
    } satisfies LocalizedText,
    access: {
      en: 'It covers arrival by rental car, taxi and bus, including the recommended point to start the short final walk.',
      de: 'Mit Mietwagen, Taxi oder Bus, jeweils vom besten Startpunkt für den kurzen Weg hinauf.',
      es: 'Incluye la llegada en coche de alquiler, taxi y autobús, además del punto recomendado para comenzar el corto tramo final a pie.',
      nl: 'Daar vinden jullie de aankomst met huurauto, taxi en bus, plus het aanbevolen beginpunt voor de korte laatste wandeling.',
      sv: 'Där beskrivs ankomsten med hyrbil, taxi och buss samt den rekommenderade startpunkten för den korta sista promenaden.'
    } satisfies LocalizedText,
    climb: {
      en: 'The step-by-step directions and the large photo of our green front door make the handover in the village simple.',
      de: 'Ein großes Foto unserer grünen Haustür ist dabei. Die findet man.',
      es: 'Las indicaciones paso a paso y la foto grande de nuestra puerta verde facilitan la orientación en el pueblo.',
      nl: 'De stapsgewijze route en de grote foto van onze groene voordeur maken de oriëntatie in het dorp eenvoudig.',
      sv: 'Steg-för-steg-beskrivningen och den stora bilden av vår gröna ytterdörr gör det enkelt att hitta i byn.'
    } satisfies LocalizedText,
    parkingCta: {
      en: 'Understand parking in Frigiliana',
      de: 'Parken in Frigiliana',
      es: 'Entender el aparcamiento en Frigiliana',
      nl: 'Lees hoe parkeren in Frigiliana werkt',
      sv: 'Förstå parkering i Frigiliana'
    } satisfies LocalizedText,
    bookedCta: {
      en: 'Open the Casa AMARA arrival guide',
      de: 'Zur Ankunft bei Casa AMARA',
      es: 'Abrir la guía de llegada a Casa AMARA',
      nl: 'Aankomstgids voor Casa AMARA openen',
      sv: 'Öppna ankomstguiden för Casa AMARA'
    } satisfies LocalizedText,
    imageAlt: {
      en: 'Stepped historic lane in Frigiliana',
      de: 'Historische Gasse mit Stufen in Frigiliana',
      es: 'Calle histórica con escalones en Frigiliana',
      nl: 'Historisch straatje met trappen in Frigiliana',
      sv: 'Historisk gränd med trappor i Frigiliana'
    } satisfies LocalizedText
  },
  sources: {
    eyebrow: {
      en: 'Check before departure',
      de: 'Quellen',
      es: 'Comprobad antes de salir',
      nl: 'Controleer voor vertrek',
      sv: 'Kontrollera före avresa'
    } satisfies LocalizedText,
    title: {
      en: 'Official travel information',
      de: 'Fahrpläne und Verbindungen',
      es: 'Información oficial de viaje',
      nl: 'Officiële reisinformatie',
      sv: 'Officiell reseinformation'
    } satisfies LocalizedText,
    intro: {
      en: 'Transport schedules can change by date, season, Sunday, or public holiday. Use these sources shortly before travelling rather than relying on a saved timetable.',
      de: 'Die Fahrpläne stehen bei Aena, ALSA und der Gemeinde Frigiliana.',
      es: 'Los horarios pueden cambiar según la fecha, la temporada, los domingos o los festivos. Consultad estas fuentes poco antes del viaje en lugar de confiar en un horario guardado.',
      nl: 'Dienstregelingen kunnen per datum, seizoen, zondag of feestdag wijzigen. Controleer deze bronnen kort voor vertrek in plaats van op een opgeslagen schema te vertrouwen.',
      sv: 'Tidtabeller kan ändras beroende på datum, säsong, söndag eller helgdag. Kontrollera dessa källor strax före resan i stället för att förlita er på en sparad tidtabell.'
    } satisfies LocalizedText,
    checked: {
      en: 'Information checked in July 2026.',
      de: 'Stand Juli 2026',
      es: 'Información revisada en julio de 2026.',
      nl: 'Informatie gecontroleerd in juli 2026.',
      sv: 'Informationen kontrollerades i juli 2026.'
    } satisfies LocalizedText,
    links: [
      {
        key: 'airportBus',
        label: {
          en: 'Aena · Buses from Málaga Airport',
          de: 'Aena · Busse ab Flughafen Málaga',
          es: 'Aena · Autobuses desde el aeropuerto de Málaga',
          nl: 'Aena · Bussen vanaf Málaga Airport',
          sv: 'Aena · Bussar från Málaga flygplats'
        } satisfies LocalizedText,
        text: {
          en: 'Airport overview, including the Nerja connection.',
          de: 'Alle Busse ab Flughafen, darunter der nach Nerja.',
          es: 'Resumen del aeropuerto, incluida la conexión con Nerja.',
          nl: 'Luchthavenoverzicht, inclusief de verbinding naar Nerja.',
          sv: 'Flygplatsöversikt inklusive förbindelsen till Nerja.'
        } satisfies LocalizedText
      },
      {
        key: 'alsa',
        label: {
          en: 'ALSA · Málaga to Nerja',
          de: 'ALSA · Málaga nach Nerja',
          es: 'ALSA · Málaga–Nerja',
          nl: 'ALSA · Málaga naar Nerja',
          sv: 'ALSA · Málaga till Nerja'
        } satisfies LocalizedText,
        text: {
          en: 'Search live coach times and book the first stage.',
          de: 'Zeiten und Tickets für die Fahrt an die Küste.',
          es: 'Consultar horarios actuales y reservar el primer tramo.',
          nl: 'Zoek actuele bustijden en boek het eerste traject.',
          sv: 'Sök aktuella busstider och boka den första sträckan.'
        } satisfies LocalizedText
      },
      {
        key: 'localBus',
        label: {
          en: 'Frigiliana Council · Local bus',
          de: 'Gemeinde Frigiliana · Lokaler Bus',
          es: 'Ayuntamiento de Frigiliana · Autobús local',
          nl: 'Gemeente Frigiliana · Lokale bus',
          sv: 'Frigiliana kommun · Lokalbuss'
        } satisfies LocalizedText,
        text: {
          en: 'Current Nerja–Frigiliana departure times and stop locations.',
          de: 'Der Ortsbus Nerja–Frigiliana mit Zeiten und Haltestellen.',
          es: 'Horarios y paradas actuales de Nerja–Frigiliana.',
          nl: 'Actuele vertrektijden en haltes voor Nerja–Frigiliana.',
          sv: 'Aktuella avgångstider och hållplatser för Nerja–Frigiliana.'
        } satisfies LocalizedText
      }
    ]
  },
  related: {
    title: {
      en: 'Continue planning Frigiliana',
      de: 'Rund um die Anreise',
      es: 'Seguid planificando Frigiliana',
      nl: 'Plan Frigiliana verder',
      sv: 'Fortsätt planera Frigiliana'
    } satisfies LocalizedText,
    links: [
      {
        token: 'location_frigiliana',
        label: {
          en: 'Frigiliana guide',
          de: 'Frigiliana-Guide',
          es: 'Guía de Frigiliana',
          nl: 'Frigiliana-gids',
          sv: 'Frigiliana-guide'
        } satisfies LocalizedText
      },
      {
        token: 'frigiliana_parking',
        label: {
          en: 'Parking in Frigiliana',
          de: 'Parken in Frigiliana',
          es: 'Aparcamiento en Frigiliana',
          nl: 'Parkeren in Frigiliana',
          sv: 'Parkering i Frigiliana'
        } satisfies LocalizedText
      },
      {
        token: 'arrival_guide',
        label: {
          en: 'Arrival at AMARA',
          de: 'Anreise zu AMARA',
          es: 'Llegada a AMARA',
          nl: 'Aankomst bij AMARA',
          sv: 'Ankomst till AMARA'
        } satisfies LocalizedText
      },
      {
        token: 'location_nerja',
        label: {
          en: 'Nerja guide',
          de: 'Nerja-Guide',
          es: 'Guía de Nerja',
          nl: 'Nerja-gids',
          sv: 'Nerja-guide'
        } satisfies LocalizedText
      }
    ]
  },
  closing: {
    title: {
      en: 'Choose the stay. Then choose the journey.',
      de: 'Und dann seid ihr da.',
      es: 'Elegid la estancia. Después, el trayecto.',
      nl: 'Kies het verblijf. Kies daarna de reis.',
      sv: 'Välj boendet. Välj sedan resan.'
    } satisfies LocalizedText,
    lead: {
      en: 'Once you know whether your stay is village-first, beach-first, or built around day trips, the right arrival option becomes much clearer.',
      de: 'Casa AMARA steht in der Altstadt, drei Apartments mit eigener Terrasse. Der letzte Weg hinauf ist kurz, und oben ist es still.',
      es: 'Cuando sepáis si vuestra estancia gira en torno al pueblo, la playa o las excursiones, la mejor forma de llegar quedará mucho más clara.',
      nl: 'Zodra duidelijk is of jullie verblijf om het dorp, het strand of dagtochten draait, wordt de juiste reisoptie veel eenvoudiger.',
      sv: 'När ni vet om vistelsen främst handlar om byn, stranden eller utflykter blir rätt resealternativ mycket tydligare.'
    } satisfies LocalizedText,
    apartmentsCta: {
      en: 'View AMARA stays',
      de: 'AMARA-Unterkünfte ansehen',
      es: 'Ver alojamientos AMARA',
      nl: 'Bekijk AMARA-verblijven',
      sv: 'Se AMARA-boenden'
    } satisfies LocalizedText,
    directBookingCta: {
      en: 'Direct booking benefits',
      de: 'Vorteile der Direktbuchung',
      es: 'Ventajas de reservar directamente',
      nl: 'Voordelen van direct boeken',
      sv: 'Fördelar med direktbokning'
    } satisfies LocalizedText
  }
} as const;
