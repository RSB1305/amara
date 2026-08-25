import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const nerjaArrivalGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-nerja-property-arrival-v1.0',
  pageType: 'A',
  entityKey: 'amara-playa',
  languages: {
    en: { title: 'Arrival at AMARA Playa Nerja: Address, Parking & Bus', description: 'Arrive calmly at AMARA Playa, Calle Castilla Pérez 60 in Nerja: luggage stop, public parking, bus-station walk and final access.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Anreise zu AMARA Playa Nerja: Adresse, Parken & Bus', description: 'Kommt entspannt zu AMARA Playa in der Calle Castilla Pérez 60: Gepäckstopp, öffentliches Parken, Weg vom Busbahnhof und letzter Zugang.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Llegada a AMARA Playa Nerja: dirección, parking y autobús', description: 'Llegad con calma a AMARA Playa, Calle Castilla Pérez 60: parada para equipaje, aparcamiento público, camino desde la estación y acceso final.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Aankomst bij AMARA Playa Nerja: adres, parkeren en bus', description: 'Kom rustig aan bij AMARA Playa aan Calle Castilla Pérez 60: bagagestop, openbaar parkeren, route vanaf het busstation en laatste toegang.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Ankomst till AMARA Playa Nerja: adress, parkering och buss', description: 'Kom smidigt till AMARA Playa på Calle Castilla Pérez 60: bagagestopp, allmän parkering, väg från busstationen och sista sträckan.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const nerjaArrivalGuideCopy = {
  header: {
    eyebrow: l('AMARA Playa arrival guide', 'Anreise-Guide AMARA Playa', 'Guía de llegada a AMARA Playa', 'Aankomstgids AMARA Playa', 'Ankomstguide AMARA Playa'),
    title: l('Arriving at AMARA Playa in Nerja', 'Ankunft bei AMARA Playa in Nerja', 'Llegada a AMARA Playa en Nerja', 'Aankomst bij AMARA Playa in Nerja', 'Ankomst till AMARA Playa i Nerja'),
    subtitle: l('The apartment is central and easy to reach. **Unload first, then park** — that small sequence makes arrival much calmer.', 'Das Apartment liegt zentral und ist gut erreichbar. **Ladet zuerst das Gepäck aus und parkt danach** – diese kleine Reihenfolge macht die Ankunft deutlich entspannter.', 'El apartamento es céntrico y fácil de alcanzar. **Descargad primero y aparcad después**: ese pequeño orden hace la llegada mucho más tranquila.', 'Het appartement ligt centraal en is goed bereikbaar. **Laad eerst de bagage uit en parkeer daarna** — die volgorde maakt de aankomst veel rustiger.', 'Lägenheten ligger centralt och är lätt att nå. **Lasta av först och parkera sedan** – den ordningen gör ankomsten mycket lugnare.')
  },
  content: {
    journeyIntro: {
      title: l('Plan the whole journey first', 'Zuerst die gesamte Anreise planen', 'Planificad primero todo el viaje', 'Plan eerst de hele reis', 'Planera först hela resan'),
      text: l('This page handles the final arrival at the apartment. For airports, transfers and regional buses, start with the Nerja travel guide; the parking guide compares the current public options.', 'Diese Seite übernimmt die letzte Etappe zum Apartment. Für Flughäfen, Transfers und Regionalbusse beginnt ihr mit dem Nerja-Anreiseguide; der Parkguide vergleicht die aktuellen öffentlichen Möglichkeiten.', 'Esta página explica el último tramo hasta el apartamento. Para aeropuertos, traslados y autobuses regionales, empezad por la guía de viaje a Nerja; la guía de aparcamiento compara las opciones públicas actuales.', 'Deze pagina behandelt het laatste stuk naar het appartement. Begin voor luchthavens, transfers en regionale bussen bij de reisgids voor Nerja; de parkeergids vergelijkt de actuele openbare opties.', 'Den här sidan beskriver den sista sträckan till lägenheten. Börja med Nerjas reseguide för flygplatser, transfer och regionalbussar; parkeringsguiden jämför aktuella allmänna alternativ.'),
      cta: l('Plan the journey to Nerja', 'Anreise nach Nerja planen', 'Planificar el viaje a Nerja', 'Plan de reis naar Nerja', 'Planera resan till Nerja'),
      parkingCta: l('Compare parking in Nerja', 'Parkmöglichkeiten in Nerja vergleichen', 'Comparar aparcamiento en Nerja', 'Parkeren in Nerja vergelijken', 'Jämför parkering i Nerja')
    },
    parking: {
      title: l('Navigate to the apartment entrance for the luggage stop', 'Für den Gepäckstopp zum Apartment-Eingang navigieren', 'Navegad hasta la entrada para descargar el equipaje', 'Navigeer voor de bagagestop naar de ingang', 'Navigera till entrén för bagagestoppet'),
      text: l('AMARA Playa is at Calle Castilla Pérez 60. You can reach the entrance by car and stop briefly if the current street rules and traffic allow it. The apartment has no private parking space, so do not leave the car at the building; continue to a legal street space or public facility.', 'AMARA Playa liegt in der Calle Castilla Pérez 60. Ihr könnt bis zum Eingang fahren und dort kurz halten, sofern die aktuellen Straßenregeln und der Verkehr es erlauben. Das Apartment hat keinen privaten Stellplatz; lasst das Auto deshalb nicht am Gebäude stehen, sondern fahrt zu einem legalen Straßenplatz oder einer öffentlichen Anlage weiter.', 'AMARA Playa está en Calle Castilla Pérez 60. Podéis llegar en coche hasta la entrada y parar brevemente si lo permiten las normas vigentes y el tráfico. El apartamento no tiene plaza privada; no dejéis el coche en el edificio y continuad hasta una plaza legal o un aparcamiento público.', 'AMARA Playa ligt aan Calle Castilla Pérez 60. Jullie kunnen tot de ingang rijden en er kort stoppen als de actuele regels en het verkeer dat toelaten. Het appartement heeft geen privéplek; laat de auto dus niet bij het gebouw staan en rijd door naar een legale straatplek of openbare voorziening.', 'AMARA Playa ligger på Calle Castilla Pérez 60. Ni kan köra fram till entrén och stanna kort om aktuella regler och trafik tillåter det. Lägenheten har ingen privat plats; lämna därför inte bilen vid huset utan fortsätt till laglig gatuparkering eller en allmän anläggning.')
    },
    walkingAccess: {
      title: l('Level street arrival and lift to the fifth floor', 'Ebene Ankunft auf Straßenniveau und Aufzug in den fünften Stock', 'Llegada llana desde la calle y ascensor a la quinta planta', 'Vlakke aankomst vanaf straat en lift naar de vijfde verdieping', 'Plan ankomst från gatan och hiss till femte våningen'),
      text: l('The entrance is reached from street level without exterior steps. A lift serves the apartment floor; booked guests receive the exact building-entry and check-in instructions privately before arrival.', 'Den Eingang erreicht ihr vom Straßenniveau ohne Außentreppen. Ein Aufzug fährt zur Apartment-Etage; die genauen Gebäude- und Check-in-Hinweise erhalten gebuchte Gäste vor der Anreise privat.', 'Se llega a la entrada desde la calle sin escalones exteriores. Hay ascensor hasta la planta del apartamento; las instrucciones exactas de acceso y entrada se envían en privado antes de la llegada.', 'De ingang is vanaf straatniveau zonder buitentrappen bereikbaar. Een lift gaat naar de verdieping van het appartement; geboekte gasten ontvangen de precieze toegangs- en incheckinformatie privé voor aankomst.', 'Entrén nås från gatunivå utan trappsteg utomhus. Hiss går till lägenhetens våning; bokade gäster får exakta instruktioner för byggnad och incheckning privat före ankomst.')
    },
    arrivalTip: {
      title: l('Arrival by car or taxi', 'Anreise mit Auto oder Taxi', 'Llegada en coche o taxi', 'Aankomst met auto of taxi', 'Ankomst med bil eller taxi'),
      text: l('Set Calle Castilla Pérez 60 as the destination, not just “Nerja”. Approach the entrance calmly and only stop where the live street situation permits.\n\nWith two people, the simplest sequence is for one person to take the bags while the driver continues to the chosen parking option. In high season, keep a second parking option ready instead of circling the closest streets.', 'Gebt Calle Castilla Pérez 60 als Ziel ein, nicht nur „Nerja“. Fahrt den Eingang ruhig an und haltet nur dort, wo die aktuelle Straßensituation es erlaubt.\n\nZu zweit ist die einfachste Reihenfolge: Eine Person übernimmt das Gepäck, während die andere zur gewählten Parkmöglichkeit weiterfährt. Haltet in der Hochsaison eine zweite Option bereit, statt in den nächsten Straßen immer wieder Runden zu drehen.', 'Introducid Calle Castilla Pérez 60 como destino, no solo «Nerja». Acercaos con calma y parad únicamente donde lo permita la situación actual de la calle.\n\nSi sois dos, lo más sencillo es que una persona se ocupe del equipaje mientras la otra continúa hasta el aparcamiento elegido. En temporada alta, llevad una segunda opción pensada en vez de dar vueltas por las calles cercanas.', 'Stel Calle Castilla Pérez 60 in als bestemming, niet alleen “Nerja”. Rijd rustig naar de ingang en stop alleen waar de actuele straatsituatie dat toestaat.\n\nMet z’n tweeën is de eenvoudigste volgorde: één persoon neemt de bagage mee terwijl de bestuurder verdergaat naar de gekozen parkeerplek. Houd in het hoogseizoen een tweede optie klaar in plaats van rondjes te rijden in de dichtstbijzijnde straten.', 'Ange Calle Castilla Pérez 60 som mål, inte bara ”Nerja”. Kör lugnt fram och stanna endast där den aktuella gatusituationen tillåter det.\n\nOm ni är två är det enklast att en person tar väskorna medan föraren fortsätter till vald parkering. Ha ett andra alternativ redo under högsäsong i stället för att köra runt på de närmaste gatorna.'),
      taxiNote: l('A taxi can stop at the apartment entrance when the current traffic situation allows. Show the full address to avoid being left elsewhere in central Nerja.', 'Ein Taxi kann bei passender Verkehrssituation am Apartment-Eingang halten. Zeigt die vollständige Adresse, damit ihr nicht an einer anderen Stelle im Zentrum aussteigt.', 'Un taxi puede parar en la entrada cuando lo permita el tráfico. Mostrad la dirección completa para evitar que os deje en otro punto del centro.', 'Een taxi kan bij de ingang stoppen als het verkeer dat toelaat. Toon het volledige adres om niet elders in het centrum te worden afgezet.', 'En taxi kan stanna vid entrén när trafiken tillåter det. Visa hela adressen så att ni inte släpps av någon annanstans i centrum.')
    },
    arrivalByBus: {
      title: l('From Nerja bus station to AMARA Playa', 'Vom Busbahnhof Nerja zu AMARA Playa', 'Desde la estación de autobuses hasta AMARA Playa', 'Van het busstation van Nerja naar AMARA Playa', 'Från Nerjas busstation till AMARA Playa'),
      text: l('Most regional buses arrive at Nerja bus station. The apartment is around 1 km away; choose between walking and a short taxi ride according to your luggage and the weather.', 'Die meisten Regionalbusse kommen am Busbahnhof Nerja an. Das Apartment liegt ungefähr 1 km entfernt; entscheidet je nach Gepäck und Wetter zwischen Fußweg und kurzer Taxifahrt.', 'La mayoría de los autobuses regionales llegan a la estación de Nerja. El apartamento está a aproximadamente 1 km; elegid entre ir andando o tomar un taxi corto según el equipaje y el tiempo.', 'De meeste regionale bussen komen aan bij het busstation van Nerja. Het appartement ligt op ongeveer 1 km; kies afhankelijk van bagage en weer tussen lopen en een korte taxirit.', 'De flesta regionalbussar anländer till Nerjas busstation. Lägenheten ligger cirka 1 km bort; välj promenad eller en kort taxiresa efter bagage och väder.')
    },
    luggageAdvice: {
      title: l('Treat unloading and parking as two separate steps', 'Gepäckstopp und Parken als zwei Schritte planen', 'Separad la descarga del aparcamiento', 'Zie uitladen en parkeren als twee stappen', 'Planera avlastning och parkering som två steg'),
      text: l('Do not carry bags from an uncertain parking space if a legal short stop at the entrance is possible. After unloading, the final parking place may still involve a walk, especially in busy periods.', 'Tragt das Gepäck nicht unnötig von einem ungewissen Stellplatz, wenn ein legaler kurzer Halt am Eingang möglich ist. Nach dem Ausladen kann der endgültige Parkplatz vor allem in vollen Zeiten trotzdem einen Fußweg bedeuten.', 'No carguéis con las maletas desde una plaza incierta si es posible hacer una parada breve y legal en la entrada. Después de descargar, el aparcamiento definitivo puede quedar a cierta distancia, sobre todo en épocas concurridas.', 'Draag de bagage niet vanaf een onzekere parkeerplek als een korte legale stop bij de ingang mogelijk is. Na het uitladen kan de uiteindelijke parkeerplek vooral in drukke tijden nog een wandeling betekenen.', 'Bär inte väskorna från en osäker parkeringsplats om ett kort lagligt stopp vid entrén är möjligt. Efter avlastning kan den slutliga platsen ändå innebära en promenad, särskilt under välbesökta perioder.')
    },
    faq: {
      title: l('Arrival FAQ', 'FAQ zur Anreise', 'Preguntas sobre la llegada', 'FAQ over de aankomst', 'Vanliga frågor om ankomst'),
      items: {
        en: [
          { question: 'Does AMARA Playa have private parking?', answer: 'No. Use legal street parking or a public facility and keep a second option in mind during busy periods.' },
          { question: 'Can we unload at the entrance?', answer: 'You can drive to the entrance and stop briefly when current signs, rules and traffic allow it. Treat this as a luggage stop, not as parking.' },
          { question: 'Can we walk from Nerja bus station?', answer: 'Yes. The route is around 1 km and typically takes about 15 minutes; a taxi is easier with substantial luggage.' },
          { question: 'How do we enter the building?', answer: 'Booked guests receive the exact building-entry and check-in instructions privately before arrival.' }
        ],
        de: [
          { question: 'Hat AMARA Playa einen privaten Parkplatz?', answer: 'Nein. Nutzt legales Straßenparken oder eine öffentliche Anlage und haltet in vollen Zeiten eine zweite Möglichkeit bereit.' },
          { question: 'Können wir am Eingang ausladen?', answer: 'Ihr könnt bis zum Eingang fahren und kurz halten, wenn aktuelle Schilder, Regeln und Verkehr es erlauben. Betrachtet das als Gepäckstopp, nicht als Parkplatz.' },
          { question: 'Können wir vom Busbahnhof Nerja laufen?', answer: 'Ja. Der Weg ist ungefähr 1 km lang und dauert meist etwa 15 Minuten; mit viel Gepäck ist ein Taxi bequemer.' },
          { question: 'Wie kommen wir ins Gebäude?', answer: 'Gebuchte Gäste erhalten die genauen Gebäude- und Check-in-Hinweise vor der Anreise privat.' }
        ],
        es: [
          { question: '¿AMARA Playa tiene aparcamiento privado?', answer: 'No. Utilizad plazas legales en la calle o un aparcamiento público y llevad una segunda opción pensada en épocas concurridas.' },
          { question: '¿Podemos descargar en la entrada?', answer: 'Podéis llegar hasta la entrada y parar brevemente cuando lo permitan las señales, las normas y el tráfico. Es una parada para equipaje, no un aparcamiento.' },
          { question: '¿Podemos ir andando desde la estación?', answer: 'Sí. El recorrido es de aproximadamente 1 km y suele durar unos 15 minutos; con mucho equipaje resulta más cómodo un taxi.' },
          { question: '¿Cómo entramos en el edificio?', answer: 'Los huéspedes con reserva reciben en privado las instrucciones exactas de acceso y entrada antes de llegar.' }
        ],
        nl: [
          { question: 'Heeft AMARA Playa een privéparkeerplaats?', answer: 'Nee. Gebruik legale straatplekken of een openbare voorziening en houd in drukke tijden een tweede optie achter de hand.' },
          { question: 'Kunnen we bij de ingang uitladen?', answer: 'Jullie kunnen tot de ingang rijden en kort stoppen als actuele borden, regels en verkeer dat toelaten. Zie dit als bagagestop, niet als parkeerplek.' },
          { question: 'Kunnen we vanaf het busstation lopen?', answer: 'Ja. De route is ongeveer 1 km en duurt meestal circa 15 minuten; met veel bagage is een taxi comfortabeler.' },
          { question: 'Hoe komen we het gebouw binnen?', answer: 'Geboekte gasten ontvangen de precieze toegangs- en incheckinformatie privé voor aankomst.' }
        ],
        sv: [
          { question: 'Har AMARA Playa privat parkering?', answer: 'Nej. Använd laglig gatuparkering eller en allmän anläggning och ha ett andra alternativ under välbesökta perioder.' },
          { question: 'Kan vi lasta av vid entrén?', answer: 'Ni kan köra fram och stanna kort när aktuella skyltar, regler och trafik tillåter det. Se det som ett bagagestopp, inte som parkering.' },
          { question: 'Kan vi gå från busstationen?', answer: 'Ja. Sträckan är cirka 1 km och tar vanligtvis omkring 15 minuter; med mycket bagage är taxi bekvämare.' },
          { question: 'Hur kommer vi in i byggnaden?', answer: 'Bokade gäster får exakta instruktioner för byggnad och incheckning privat före ankomst.' }
        ]
      }
    }
  },
  sidebar: {
    title: l('AMARA Playa arrival summary', 'AMARA Playa auf einen Blick', 'Resumen de llegada a AMARA Playa', 'AMARA Playa in het kort', 'AMARA Playa i korthet'),
    address: l('Address', 'Adresse', 'Dirección', 'Adres', 'Adress'),
    dropOff: l('Luggage stop', 'Gepäckstopp', 'Parada para equipaje', 'Bagagestop', 'Bagagestopp'),
    walkingDistance: l('From the bus station', 'Vom Busbahnhof', 'Desde la estación', 'Vanaf het busstation', 'Från busstationen'),
    busStop: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
    walkingValue: l('approx. 15 min · 1 km', 'ca. 15 Min. · 1 km', 'aprox. 15 min · 1 km', 'ca. 15 min · 1 km', 'ca 15 min · 1 km'),
    quickContact: l('Useful on arrival', 'Nützlich bei der Ankunft', 'Útil al llegar', 'Handig bij aankomst', 'Bra vid ankomst'),
    taxi: l('Open destination', 'Ziel öffnen', 'Abrir destino', 'Bestemming openen', 'Öppna destination'),
    emergency: l('Emergency', 'Notfall', 'Emergencias', 'Noodgeval', 'Nödfall'),
    mapTitle: l('Destination and street-level arrival at AMARA Playa', 'Ziel und Ankunft auf Straßenniveau bei AMARA Playa', 'Destino y llegada a pie de calle a AMARA Playa', 'Bestemming en aankomst op straatniveau bij AMARA Playa', 'Destination och ankomst på gatunivå vid AMARA Playa'),
    taxiNoteLabel: l('Taxi note', 'Taxihinweis', 'Nota sobre el taxi', 'Taxitip', 'Taxitips'),
    routeTitle: l('Final destination', 'Letztes Ziel', 'Destino final', 'Eindbestemming', 'Slutdestination')
  }
};

export const nerjaArrivalGuideSteps = {
  en: ['Navigate to Calle Castilla Pérez 60.', 'Check the live street signs before stopping.', 'Unload the luggage at the entrance if a legal stop is possible.', 'Move the car to a legal street space or public facility.', 'Use the private check-in instructions to enter the building.'],
  de: ['Navigiert zur Calle Castilla Pérez 60.', 'Prüft vor dem Halt die aktuellen Straßenschilder.', 'Ladet das Gepäck am Eingang aus, wenn ein legaler Halt möglich ist.', 'Bringt das Auto zu einem legalen Straßenplatz oder einer öffentlichen Anlage.', 'Nutzt die privaten Check-in-Hinweise für den Gebäudezugang.'],
  es: ['Navegad hasta Calle Castilla Pérez 60.', 'Comprobad las señales vigentes antes de parar.', 'Descargad el equipaje en la entrada si es posible parar legalmente.', 'Llevad el coche a una plaza legal o un aparcamiento público.', 'Utilizad las instrucciones privadas para entrar en el edificio.'],
  nl: ['Navigeer naar Calle Castilla Pérez 60.', 'Controleer de actuele borden voordat jullie stoppen.', 'Laad bij de ingang uit als een legale stop mogelijk is.', 'Breng de auto naar een legale straatplek of openbare voorziening.', 'Gebruik de privé-incheckinformatie om het gebouw binnen te gaan.'],
  sv: ['Navigera till Calle Castilla Pérez 60.', 'Kontrollera aktuella skyltar innan ni stannar.', 'Lasta av vid entrén om ett lagligt stopp är möjligt.', 'Flytta bilen till laglig gatuparkering eller en allmän anläggning.', 'Använd de privata incheckningsinstruktionerna för att komma in.']
};

export const nerjaArrivalGuideBusRoutes = {
  en: [{ title: 'Walk from the bus station', meta: 'Approx. 15 minutes · 1 km', text: 'A practical option with manageable luggage. Check the live walking route before departure.' }, { title: 'Short local taxi ride', meta: 'Best with several bags', text: 'Show the full Calle Castilla Pérez 60 address so the journey ends at the apartment entrance.' }],
  de: [{ title: 'Vom Busbahnhof laufen', meta: 'Ca. 15 Minuten · 1 km', text: 'Mit gut handhabbarem Gepäck eine praktische Möglichkeit. Prüft vor der Abfahrt den aktuellen Fußweg.' }, { title: 'Kurze Fahrt mit dem lokalen Taxi', meta: 'Am besten mit mehreren Koffern', text: 'Zeigt die vollständige Adresse Calle Castilla Pérez 60, damit die Fahrt am Apartment-Eingang endet.' }],
  es: [{ title: 'Ir andando desde la estación', meta: 'Aprox. 15 minutos · 1 km', text: 'Una opción práctica con equipaje manejable. Comprobad la ruta peatonal actual antes de salir.' }, { title: 'Trayecto corto en taxi local', meta: 'Mejor con varias maletas', text: 'Mostrad la dirección completa, Calle Castilla Pérez 60, para llegar a la entrada del apartamento.' }],
  nl: [{ title: 'Lopen vanaf het busstation', meta: 'Ca. 15 minuten · 1 km', text: 'Een praktische optie met hanteerbare bagage. Controleer voor vertrek de actuele wandelroute.' }, { title: 'Korte rit met een lokale taxi', meta: 'Het beste met meerdere koffers', text: 'Toon het volledige adres Calle Castilla Pérez 60 zodat de rit bij de ingang eindigt.' }],
  sv: [{ title: 'Promenera från busstationen', meta: 'Ca 15 minuter · 1 km', text: 'Ett praktiskt alternativ med lätthanterligt bagage. Kontrollera aktuell gångväg före avresa.' }, { title: 'Kort resa med lokal taxi', meta: 'Bäst med flera väskor', text: 'Visa hela adressen Calle Castilla Pérez 60 så att resan slutar vid lägenhetens entré.' }]
};
