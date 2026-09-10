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
  version: '2026-09-10-getting-to-frigiliana-v1.2-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Getting to Frigiliana: Car, Transfer & Bus',
      description:
        'From Málaga airport to Frigiliana: a good hour by rental car or transfer, by bus via Nerja. What comes with each option and how it continues in the village.',
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
        'Del aeropuerto de Málaga a Frigiliana: una hora larga en coche de alquiler o traslado, en autobús vía Nerja. Qué implica cada opción y cómo sigue en el pueblo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Naar Frigiliana: auto, transfer of bus',
      description:
        'Van de luchthaven Málaga naar Frigiliana: ruim een uur met huurauto of transfer, met de bus via Nerja. Wat bij elke route hoort en hoe het in het dorp verdergaat.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Resa till Frigiliana: bil, transfer och buss',
      description:
        'Från Málagas flygplats till Frigiliana: en dryg timme med hyrbil eller transfer, med buss via Nerja. Vad som hör till varje väg och hur det fortsätter i byn.',
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
      en: 'Getting here · Frigiliana',
      de: 'Anreise · Frigiliana',
      es: 'Cómo llegar · Frigiliana',
      nl: 'Aankomst · Frigiliana',
      sv: 'Resan hit · Frigiliana'
    } satisfies LocalizedText,
    title: {
      en: 'Getting to Frigiliana',
      de: 'Anreise nach Frigiliana',
      es: 'Cómo llegar a Frigiliana',
      nl: 'Naar Frigiliana reizen',
      sv: 'Resa till Frigiliana'
    } satisfies LocalizedText,
    lead: {
      en: 'From Málaga airport it is a good hour: first along the coast, from Nerja the winding road up into the village. Without a car you take the bus to Nerja and continue from there.',
      de: 'Vom Flughafen Málaga sind es gut eine Stunde: erst die Küste entlang, ab Nerja die Serpentinen hinauf ins Dorf. Wer ohne Auto kommt, fährt mit dem Bus nach Nerja und von dort weiter.',
      es: 'Desde el aeropuerto de Málaga es una hora larga: primero por la costa, desde Nerja las curvas hasta el pueblo. Sin coche se va en autobús a Nerja y desde allí se continúa.',
      nl: 'Vanaf de luchthaven Málaga is het ruim een uur: eerst langs de kust, vanaf Nerja de bochten omhoog naar het dorp. Zonder auto neem je de bus naar Nerja en ga je van daar verder.',
      sv: 'Från Málagas flygplats är det en dryg timme: först längs kusten, från Nerja serpentinerna upp till byn. Utan bil tar ni bussen till Nerja och fortsätter därifrån.'
    } satisfies LocalizedText,
    body: {
      en: 'The drive is part of arriving: the sea on your left, then the mountains, finally the white village above you.',
      de: 'Die Fahrt ist Teil der Ankunft: links das Meer, dann die Berge, zuletzt das weiße Dorf über euch.',
      es: 'El trayecto forma parte de la llegada: el mar a la izquierda, luego las montañas, al final el pueblo blanco sobre vosotros.',
      nl: 'De rit is deel van het aankomen: links de zee, dan de bergen, ten slotte het witte dorp boven jullie.',
      sv: 'Resan är en del av ankomsten: havet till vänster, sedan bergen, till sist den vita byn ovanför er.'
    } satisfies LocalizedText,
    primaryCta: {
      en: 'The three ways',
      de: 'Die drei Wege',
      es: 'Las tres opciones',
      nl: 'De drie routes',
      sv: 'De tre vägarna'
    } satisfies LocalizedText,
    secondaryCta: {
      en: 'Timetables',
      de: 'Fahrpläne',
      es: 'Horarios',
      nl: 'Dienstregelingen',
      sv: 'Tidtabeller'
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
      en: 'At a glance',
      de: 'Auf einen Blick',
      es: 'De un vistazo',
      nl: 'In het kort',
      sv: 'I korthet'
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
          en: 'A good 65 kilometres, along the coast.',
          de: 'Gut 65 Kilometer, die Küste entlang.',
          es: 'Unos 65 kilómetros largos, por la costa.',
          nl: 'Ruim 65 kilometer, langs de kust.',
          sv: 'Drygt 65 kilometer, längs kusten.'
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
          en: 'In summer, late in the afternoon, an hour and a half.',
          de: 'Im Sommer am späten Nachmittag auch anderthalb.',
          es: 'En verano, a última hora de la tarde, también hora y media.',
          nl: 'In de zomer, laat in de middag, ook anderhalf uur.',
          sv: 'På sommaren sent på eftermiddagen även en och en halv.'
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
          en: 'Bus to Nerja, then local bus or taxi up.',
          de: 'Bus bis Nerja, dann Ortsbus oder Taxi hinauf.',
          es: 'Autobús hasta Nerja, luego autobús local o taxi de subida.',
          nl: 'Bus tot Nerja, dan streekbus of taxi omhoog.',
          sv: 'Buss till Nerja, sedan lokalbuss eller taxi upp.'
        } satisfies LocalizedText
      }
    ]
  },
  options: {
    eyebrow: {
      en: 'Three ways',
      de: 'Drei Wege',
      es: 'Tres opciones',
      nl: 'Drie routes',
      sv: 'Tre vägar'
    } satisfies LocalizedText,
    title: {
      en: 'Rental car, transfer or bus',
      de: 'Mietwagen, Transfer oder Bus',
      es: 'Coche de alquiler, traslado o autobús',
      nl: 'Huurauto, transfer of bus',
      sv: 'Hyrbil, transfer eller buss'
    } satisfies LocalizedText,
    intro: {
      en: 'We always take the rental car ourselves. It costs extra, but the beach days and outings have been worth it every time. Transfer and bus get you to the village just as well.',
      de: 'Wir nehmen selbst immer den Mietwagen. Er kostet extra, aber die Strandtage und Ausflüge waren es uns jedes Mal wert. Transfer und Bus bringen euch ebenso ins Dorf.',
      es: 'Nosotros siempre cogemos el coche de alquiler. Cuesta más, pero los días de playa y las excursiones lo han valido cada vez. El traslado y el autobús os llevan al pueblo igual de bien.',
      nl: 'Wij nemen zelf altijd de huurauto. Hij kost extra, maar de stranddagen en uitjes waren het elke keer waard. Transfer en bus brengen jullie net zo goed naar het dorp.',
      sv: 'Vi tar själva alltid hyrbilen. Den kostar extra, men stranddagarna och utflykterna har varit värda det varje gång. Transfer och buss tar er lika bra till byn.'
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
        en: 'Duration',
        de: 'Dauer',
        es: 'Duración',
        nl: 'Duur',
        sv: 'Tid'
      } satisfies LocalizedText,
      bestFor: {
        en: 'Suits',
        de: 'Passt für',
        es: 'Para',
        nl: 'Past bij',
        sv: 'Passar'
      } satisfies LocalizedText,
      consideration: {
        en: 'Part of it',
        de: 'Dazu gehört',
        es: 'A tener en cuenta',
        nl: 'Hoort erbij',
        sv: 'Hör till'
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
          en: 'From the airport onto the A-7 heading east, off at Nerja and up the road to Frigiliana. At the end the village lies before you.',
          de: 'Vom Flughafen auf die A-7 nach Osten, bei Nerja ab und die Straße hinauf nach Frigiliana. Am Ende liegt das Dorf vor euch.',
          es: 'Desde el aeropuerto a la A-7 hacia el este, salida en Nerja y carretera arriba hasta Frigiliana. Al final el pueblo aparece delante de vosotros.',
          nl: 'Vanaf de luchthaven de A-7 op naar het oosten, bij Nerja eraf en de weg omhoog naar Frigiliana. Aan het einde ligt het dorp voor jullie.',
          sv: 'Från flygplatsen ut på A-7 österut, av vid Nerja och vägen upp till Frigiliana. I slutet ligger byn framför er.'
        },
        timing: {
          en: '**A good hour.**',
          de: '**Gut eine Stunde.**',
          es: '**Una hora larga.**',
          nl: '**Ruim een uur.**',
          sv: '**En dryg timme.**'
        },
        bestFor: {
          en: '**Beach days, outings, hikes** further out.',
          de: '**Strandtage, Ausflüge, Wanderungen** weiter draußen.',
          es: '**Días de playa, excursiones, rutas** más lejanas.',
          nl: '**Stranddagen, uitjes, wandelingen** verder weg.',
          sv: '**Stranddagar, utflykter, vandringar** längre bort.'
        },
        consideration: {
          en: '**The car stays in the underground car park** down in the village; from there you walk up. Electric car: the map shows the nearest charging points.',
          de: '**Das Auto bleibt in der Tiefgarage** unten im Ort, von dort geht es zu Fuß hinauf. Mit Elektroauto: Die Karte zeigt die nächsten Ladepunkte.',
          es: '**El coche se queda en el parking subterráneo** de la parte baja del pueblo; desde allí se sube a pie. Con coche eléctrico: el mapa muestra los puntos de recarga más cercanos.',
          nl: '**De auto blijft in de parkeergarage** beneden in het dorp; van daar loop je omhoog. Met een elektrische auto: de kaart toont de dichtstbijzijnde laadpunten.',
          sv: '**Bilen står kvar i parkeringshuset** nere i byn; därifrån går ni upp. Med elbil: kartan visar närmaste laddpunkter.'
        }
      },
      {
        id: 'transfer',
        kicker: {
          en: 'Most comfortable',
          de: 'Am bequemsten',
          es: 'Lo más cómodo',
          nl: 'Het comfortabelst',
          sv: 'Bekvämast'
        },
        title: {
          en: 'Private transfer or taxi',
          de: 'Privater Transfer oder Taxi',
          es: 'Transfer privado o taxi',
          nl: 'Privétransfer of taxi',
          sv: 'Privat transfer eller taxi'
        },
        summary: {
          en: 'A driver waits in the arrivals hall and takes you straight to the village, no changes.',
          de: 'Ein Fahrer wartet in der Ankunftshalle und bringt euch direkt bis ins Dorf, ohne Umstieg.',
          es: 'Un conductor espera en la sala de llegadas y os lleva directamente al pueblo, sin cambios.',
          nl: 'Een chauffeur wacht in de aankomsthal en brengt jullie rechtstreeks naar het dorp, zonder overstap.',
          sv: 'En chaufför väntar i ankomsthallen och tar er direkt till byn, utan byten.'
        },
        timing: {
          en: '**Same as the rental car**, a good hour.',
          de: '**Wie mit dem Mietwagen**, gut eine Stunde.',
          es: '**Como el coche de alquiler**, una hora larga.',
          nl: '**Zoals met de huurauto**, ruim een uur.',
          sv: '**Som med hyrbilen**, en dryg timme.'
        },
        bestFor: {
          en: '**Late flights, families, lots of luggage** and everyone who needs no car on site.',
          de: '**Späte Flüge, Familien, viel Gepäck** und alle, die vor Ort kein Auto brauchen.',
          es: '**Vuelos tardíos, familias, mucho equipaje** y quienes no necesitan coche durante la estancia.',
          nl: '**Late vluchten, gezinnen, veel bagage** en iedereen die ter plaatse geen auto nodig heeft.',
          sv: '**Sena flyg, familjer, mycket bagage** och alla som inte behöver bil på plats.'
        },
        consideration: {
          en: '**Fixed price, child seats and drop-off point** you settle when booking.',
          de: '**Festpreis, Kindersitze und Ausstiegspunkt** klärt ihr beim Buchen.',
          es: '**Precio fijo, sillas infantiles y punto de bajada** se acuerdan al reservar.',
          nl: '**Vaste prijs, kinderzitjes en uitstappunt** regel je bij het boeken.',
          sv: '**Fast pris, bilbarnstolar och avlämningsplats** gör ni upp vid bokningen.'
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
          en: 'A bus runs from the airport to Nerja; there you change to the local bus to Frigiliana or take a taxi.',
          de: 'Vom Flughafen fährt ein Bus nach Nerja; dort steigt ihr in den Ortsbus nach Frigiliana oder nehmt ein Taxi.',
          es: 'Desde el aeropuerto sale un autobús a Nerja; allí cambiáis al autobús local a Frigiliana o cogéis un taxi.',
          nl: 'Vanaf de luchthaven rijdt een bus naar Nerja; daar stap je over op de streekbus naar Frigiliana of neem je een taxi.',
          sv: 'Från flygplatsen går en buss till Nerja; där byter ni till lokalbussen till Frigiliana eller tar en taxi.'
        },
        timing: {
          en: '**Two to three hours** with the change, depending on the connection.',
          de: '**Zwei bis drei Stunden** mit Umstieg, je nach Anschluss.',
          es: '**De dos a tres horas** con el cambio, según la conexión.',
          nl: '**Twee tot drie uur** met overstap, afhankelijk van de aansluiting.',
          sv: '**Två till tre timmar** med byte, beroende på anslutningen.'
        },
        bestFor: {
          en: '**Daytime arrival, light luggage.**',
          de: '**Ankunft tagsüber, leichtes Gepäck.**',
          es: '**Llegada de día, poco equipaje.**',
          nl: '**Aankomst overdag, lichte bagage.**',
          sv: '**Ankomst på dagen, lätt bagage.**'
        },
        consideration: {
          en: '**On Sundays and in the evening the local bus runs less often**; then the taxi from Nerja is the answer.',
          de: '**Sonntags und abends fährt der Ortsbus seltener**; dann ist das Taxi ab Nerja die Lösung.',
          es: '**Los domingos y por la noche el autobús local pasa menos**; entonces el taxi desde Nerja es la solución.',
          nl: '**Op zondag en ’s avonds rijdt de streekbus minder vaak**; dan is de taxi vanaf Nerja de oplossing.',
          sv: '**På söndagar och kvällar går lokalbussen mer sällan**; då är taxi från Nerja lösningen.'
        }
      }
    ] satisfies GettingToFrigilianaOption[]
  },
  publicTransport: {
    title: {
      en: 'By bus, step by step',
      de: 'Mit dem Bus, Schritt für Schritt',
      es: 'En autobús, paso a paso',
      nl: 'Met de bus, stap voor stap',
      sv: 'Med buss, steg för steg'
    } satisfies LocalizedText,
    steps: [
      {
        num: '01',
        title: {
          en: 'Airport to Nerja',
          de: 'Flughafen nach Nerja',
          es: 'Del aeropuerto a Nerja',
          nl: 'Luchthaven naar Nerja',
          sv: 'Flygplatsen till Nerja'
        } satisfies LocalizedText,
        text: {
          en: 'The ALSA bus runs from the airport to the coast; the times for your day are linked below.',
          de: 'Der ALSA-Bus fährt vom Flughafen an die Küste; die Zeiten für euren Tag stehen unten verlinkt.',
          es: 'El autobús de ALSA va del aeropuerto a la costa; los horarios para vuestro día están enlazados abajo.',
          nl: 'De ALSA-bus rijdt van de luchthaven naar de kust; de tijden voor jullie dag staan onderaan gelinkt.',
          sv: 'ALSA-bussen går från flygplatsen till kusten; tiderna för er dag finns länkade nedan.'
        } satisfies LocalizedText
      },
      {
        num: '02',
        title: {
          en: 'Change in Nerja',
          de: 'Umstieg in Nerja',
          es: 'Cambio en Nerja',
          nl: 'Overstap in Nerja',
          sv: 'Byte i Nerja'
        } satisfies LocalizedText,
        text: {
          en: 'The bus station is on the upper edge of Nerja; local bus and taxis to Frigiliana leave from here.',
          de: 'Der Busbahnhof liegt am oberen Rand von Nerja; hier fahren Ortsbus und Taxis nach Frigiliana ab.',
          es: 'La estación de autobuses está en la parte alta de Nerja; desde aquí salen el autobús local y los taxis a Frigiliana.',
          nl: 'Het busstation ligt aan de bovenrand van Nerja; hier vertrekken streekbus en taxi’s naar Frigiliana.',
          sv: 'Busstationen ligger i övre kanten av Nerja; här avgår lokalbuss och taxi till Frigiliana.'
        } satisfies LocalizedText
      },
      {
        num: '03',
        title: {
          en: 'Up into the village',
          de: 'Hinauf ins Dorf',
          es: 'Subida al pueblo',
          nl: 'Omhoog naar het dorp',
          sv: 'Upp till byn'
        } satisfies LocalizedText,
        text: {
          en: 'The local bus takes about a quarter of an hour and stops at Plaza del Ingenio, down in the village — the same square where the taxis wait. If you would rather not wait, take a taxi.',
          de: 'Der Ortsbus braucht etwa eine Viertelstunde und hält an der Plaza del Ingenio unten im Ort — demselben Platz, an dem auch die Taxis stehen. Wer nicht warten will, nimmt ein Taxi.',
          es: 'El autobús local tarda un cuarto de hora y para en la Plaza del Ingenio, en la parte baja del pueblo, la misma plaza donde esperan los taxis. Quien no quiera esperar, coge un taxi.',
          nl: 'De streekbus rijdt ongeveer een kwartier en stopt aan de Plaza del Ingenio beneden in het dorp — hetzelfde plein waar ook de taxi’s staan. Wie niet wil wachten, neemt een taxi.',
          sv: 'Lokalbussen tar ungefär en kvart och stannar vid Plaza del Ingenio nere i byn — samma torg där taxibilarna står. Vill ni inte vänta tar ni en taxi.'
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
          en: 'Málaga. Most flights land there, and the drive is the shortest.',
          de: 'Málaga. Dort landen die meisten Flüge, und die Fahrt ist die kürzeste.',
          es: 'Málaga. Allí aterrizan la mayoría de vuelos, y el trayecto es el más corto.',
          nl: 'Málaga. Daar landen de meeste vluchten, en de rit is het kortst.',
          sv: 'Málaga. Där landar de flesta flygen, och resan är kortast.'
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
          en: 'As far as Nerja. From there the local bus or a taxi takes you up into the village.',
          de: 'Bis Nerja. Von dort bringen euch Ortsbus oder Taxi hinauf ins Dorf.',
          es: 'Hasta Nerja. Desde allí el autobús local o un taxi os suben al pueblo.',
          nl: 'Tot Nerja. Van daar brengen streekbus of taxi jullie omhoog naar het dorp.',
          sv: 'Till Nerja. Därifrån tar lokalbuss eller taxi er upp till byn.'
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
          en: 'Not in the village, there you are on foot. For beach days and outings yes; if you only want the village, transfer and bus do fine.',
          de: 'Im Dorf nicht, da seid ihr zu Fuß unterwegs. Für Strandtage und Ausflüge schon; wer nur das Dorf will, kommt mit Transfer und Bus gut aus.',
          es: 'En el pueblo no, allí vais a pie. Para días de playa y excursiones sí; quien solo quiere el pueblo se arregla bien con traslado y autobús.',
          nl: 'In het dorp niet, daar ben je te voet. Voor stranddagen en uitjes wel; wie alleen het dorp wil, komt met transfer en bus prima uit.',
          sv: 'Inte i byn, där går ni till fots. För stranddagar och utflykter ja; vill ni bara ha byn klarar ni er bra med transfer och buss.'
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
          en: 'A booked transfer. The driver tracks your flight, and you do not have to read a timetable at midnight.',
          de: 'Ein gebuchter Transfer. Der Fahrer verfolgt euren Flug, und ihr müsst um Mitternacht keinen Fahrplan lesen.',
          es: 'Un traslado reservado. El conductor sigue vuestro vuelo, y no tenéis que leer horarios a medianoche.',
          nl: 'Een geboekte transfer. De chauffeur volgt jullie vlucht, en jullie hoeven om middernacht geen dienstregeling te lezen.',
          sv: 'En bokad transfer. Chauffören följer ert flyg, och ni behöver inte läsa någon tidtabell vid midnatt.'
        } satisfies LocalizedText
      },
      {
        question: {
          en: 'Does it work with heavy luggage or limited mobility?',
          de: 'Klappt das mit viel Gepäck oder eingeschränkter Mobilität?',
          es: '¿Funciona con mucho equipaje o movilidad reducida?',
          nl: 'Lukt het met veel bagage of beperkte mobiliteit?',
          sv: 'Fungerar det med mycket bagage eller nedsatt rörlighet?'
        } satisfies LocalizedText,
        answer: {
          en: 'Car, taxi or bus brings you to the lower village; from there the old-town lanes are stepped and cobbled, not level. With a lot of luggage the short walk up is easier with two, and one of the Frigiliana taxis is an adapted seven-seater you can arrange in advance. The exact last stretch depends on your stay — the arrival guide covers it.',
          de: 'Auto, Taxi oder Bus bringen euch in den unteren Ort; von dort sind die Altstadtgassen gestuft und gepflastert, nicht eben. Mit viel Gepäck ist der kurze Weg hinauf zu zweit leichter, und eines der Frigiliana-Taxis ist ein angepasster Siebensitzer, den ihr vorab anfragen könnt. Die genaue letzte Strecke hängt von eurer Unterkunft ab — der Ankunftsguide zeigt sie.',
          es: 'El coche, el taxi o el autobús os dejan en la parte baja del pueblo; desde allí las callejuelas del casco son de escalones y adoquines, no llanas. Con mucho equipaje el corto tramo de subida se lleva mejor entre dos, y uno de los taxis de Frigiliana es un siete plazas adaptado que podéis pedir con antelación. El último tramo exacto depende de vuestro alojamiento: la guía de llegada lo detalla.',
          nl: 'Auto, taxi of bus brengt jullie naar het lagere dorp; vanaf daar zijn de steegjes van de oude kern getrapt en gekasseid, niet vlak. Met veel bagage gaat de korte klim makkelijker met z’n tweeën, en een van de taxi’s in Frigiliana is een aangepaste zevenzitter die je vooraf kunt regelen. Het exacte laatste stuk hangt af van jullie verblijf — de aankomstgids legt het uit.',
          sv: 'Bil, taxi eller buss tar er till nedre byn; därifrån är gamla byns gränder trappade och kullerstensbelagda, inte plana. Med mycket bagage går den korta vägen upp lättare när ni är två, och en av taxibilarna i Frigiliana är en anpassad sjusitsig som ni kan boka i förväg. Exakt sista biten beror på ert boende — ankomstguiden visar den.'
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
      en: 'The last metres to Casa AMARA',
      de: 'Die letzten Meter zu Casa AMARA',
      es: 'Los últimos metros hasta Casa AMARA',
      nl: 'De laatste meters naar Casa AMARA',
      sv: 'De sista metrarna till Casa AMARA'
    } satisfies LocalizedText,
    body: {
      en: 'This page brings you as far as the village. From there the arrival guide for Casa AMARA takes over: where the car stays, where you get out, which lane leads up.',
      de: 'Diese Seite bringt euch bis ins Dorf. Ab da übernimmt der Ankunftsguide für Casa AMARA: wo das Auto stehen bleibt, wo ihr aussteigt, welche Gasse hinaufführt.',
      es: 'Esta página os lleva hasta el pueblo. A partir de ahí toma el relevo la guía de llegada a Casa AMARA: dónde se queda el coche, dónde bajáis, qué callejuela sube.',
      nl: 'Deze pagina brengt jullie tot het dorp. Van daar neemt de aankomstgids voor Casa AMARA het over: waar de auto blijft, waar je uitstapt, welk steegje omhoog leidt.',
      sv: 'Den här sidan tar er till byn. Därifrån tar ankomstguiden för Casa AMARA över: var bilen står kvar, var ni stiger av, vilken gränd som leder upp.'
    } satisfies LocalizedText,
    access: {
      en: 'By rental car, taxi or bus, each from the best starting point for the short walk up.',
      de: 'Mit Mietwagen, Taxi oder Bus, jeweils vom besten Startpunkt für den kurzen Weg hinauf.',
      es: 'En coche de alquiler, taxi o autobús, cada uno desde el mejor punto de partida para el corto camino de subida.',
      nl: 'Met huurauto, taxi of bus, elk vanaf het beste startpunt voor de korte weg omhoog.',
      sv: 'Med hyrbil, taxi eller buss, var och en från bästa startpunkt för den korta vägen upp.'
    } satisfies LocalizedText,
    climb: {
      en: 'A large photo of our green front door is included. You will find it.',
      de: 'Ein großes Foto unserer grünen Haustür ist dabei. Die findet man.',
      es: 'Incluye una foto grande de nuestra puerta verde. Se encuentra.',
      nl: 'Een grote foto van onze groene voordeur zit erbij. Die vind je.',
      sv: 'Ett stort foto av vår gröna ytterdörr är med. Den hittar man.'
    } satisfies LocalizedText,
    parkingCta: {
      en: 'Parking in Frigiliana',
      de: 'Parken in Frigiliana',
      es: 'Aparcar en Frigiliana',
      nl: 'Parkeren in Frigiliana',
      sv: 'Parkering i Frigiliana'
    } satisfies LocalizedText,
    bookedCta: {
      en: 'To the arrival at Casa AMARA',
      de: 'Zur Ankunft bei Casa AMARA',
      es: 'A la llegada a Casa AMARA',
      nl: 'Naar de aankomst bij Casa AMARA',
      sv: 'Till ankomsten vid Casa AMARA'
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
      en: 'Explore further',
      de: 'Mehr erfahren',
      es: 'Explorar más',
      nl: 'Meer ontdekken',
      sv: 'Utforska mer'
    } satisfies LocalizedText,
    title: {
      en: 'Timetables and connections',
      de: 'Fahrpläne und Verbindungen',
      es: 'Horarios y conexiones',
      nl: 'Dienstregelingen en verbindingen',
      sv: 'Tidtabeller och förbindelser'
    } satisfies LocalizedText,
    intro: {
      en: 'The timetables are with Aena, ALSA and the municipality of Frigiliana.',
      de: 'Die Fahrpläne stehen bei Aena, ALSA und der Gemeinde Frigiliana.',
      es: 'Los horarios están en Aena, ALSA y el Ayuntamiento de Frigiliana.',
      nl: 'De dienstregelingen staan bij Aena, ALSA en de gemeente Frigiliana.',
      sv: 'Tidtabellerna finns hos Aena, ALSA och Frigilianas kommun.'
    } satisfies LocalizedText,
    checked: {
      en: 'As of September 2026',
      de: 'Stand September 2026',
      es: 'Actualizado en septiembre de 2026',
      nl: 'Stand september 2026',
      sv: 'Uppdaterad september 2026'
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
          en: 'All buses from the airport, including the one to Nerja.',
          de: 'Alle Busse ab Flughafen, darunter der nach Nerja.',
          es: 'Todos los autobuses desde el aeropuerto, incluido el de Nerja.',
          nl: 'Alle bussen vanaf de luchthaven, waaronder die naar Nerja.',
          sv: 'Alla bussar från flygplatsen, däribland den till Nerja.'
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
          en: 'Times and tickets for the ride to the coast.',
          de: 'Zeiten und Tickets für die Fahrt an die Küste.',
          es: 'Horarios y billetes para el trayecto a la costa.',
          nl: 'Tijden en tickets voor de rit naar de kust.',
          sv: 'Tider och biljetter för resan till kusten.'
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
          en: 'The local bus Nerja–Frigiliana with the current times and stops — worth a live look, the timetable changed recently.',
          de: 'Der Ortsbus Nerja–Frigiliana mit aktuellen Zeiten und Haltestellen — lohnt den Live-Blick, der Fahrplan hat sich zuletzt geändert.',
          es: 'El autobús local Nerja–Frigiliana con horarios y paradas actuales — conviene comprobarlo en vivo, el horario cambió hace poco.',
          nl: 'De streekbus Nerja–Frigiliana met actuele tijden en haltes — check het live, de dienstregeling is onlangs gewijzigd.',
          sv: 'Lokalbussen Nerja–Frigiliana med aktuella tider och hållplatser — värt en live-koll, tidtabellen ändrades nyligen.'
        } satisfies LocalizedText
      }
    ]
  },
  related: {
    title: {
      en: 'Around the journey',
      de: 'Rund um die Anreise',
      es: 'En torno al viaje',
      nl: 'Rond de aankomst',
      sv: 'Kring resan'
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
      en: 'And then you are here.',
      de: 'Und dann seid ihr da.',
      es: 'Y entonces ya estáis aquí.',
      nl: 'En dan zijn jullie er.',
      sv: 'Och sedan är ni här.'
    } satisfies LocalizedText,
    lead: {
      en: 'Casa AMARA stands in the old town, three apartments with their own terrace. The last stretch up is short, and up there it is quiet.',
      de: 'Casa AMARA steht in der Altstadt, drei Apartments mit eigener Terrasse. Der letzte Weg hinauf ist kurz, und oben ist es still.',
      es: 'Casa AMARA está en el casco antiguo, tres apartamentos con terraza propia. El último tramo de subida es corto, y arriba reina la calma.',
      nl: 'Casa AMARA staat in de oude kern, drie appartementen met eigen terras. De laatste weg omhoog is kort, en boven is het stil.',
      sv: 'Casa AMARA står i gamla byn, tre lägenheter med egen terrass. Den sista vägen upp är kort, och där uppe är det stilla.'
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
