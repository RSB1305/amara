import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const nerjaArrivalGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-nerja-property-arrival-v1.0',
  pageType: 'A',
  entityKey: 'amara-playa',
  languages: {
    en: { title: 'Arrival at AMARA Playa Nerja: Address, Parking & Bus', description: 'Arrive calmly at AMARA Playa, Calle Castilla Pérez 60 in Nerja: luggage stop, public parking, bus-station walk and final access.', robots: 'noindex, follow', canonical: 'auto' },
    de: { title: 'Anfahrt zu AMARA Playa Nerja: Adresse, Parken & Bus', description: 'Der Weg zu AMARA Playa, Calle Castilla Pérez 60: vor der Tür ausladen, danach parken, vom Busbahnhof zu Fuß oder mit dem Taxi.', robots: 'noindex, follow', canonical: 'auto' },
    es: { title: 'Llegada a AMARA Playa Nerja: dirección, parking y autobús', description: 'Llegad con calma a AMARA Playa, Calle Castilla Pérez 60: parada para equipaje, aparcamiento público, camino desde la estación y acceso final.', robots: 'noindex, follow', canonical: 'auto' },
    nl: { title: 'Aankomst bij AMARA Playa Nerja: adres, parkeren en bus', description: 'Kom rustig aan bij AMARA Playa aan Calle Castilla Pérez 60: bagagestop, openbaar parkeren, route vanaf het busstation en laatste toegang.', robots: 'noindex, follow', canonical: 'auto' },
    sv: { title: 'Ankomst till AMARA Playa Nerja: adress, parkering och buss', description: 'Kom smidigt till AMARA Playa på Calle Castilla Pérez 60: bagagestopp, allmän parkering, väg från busstationen och sista sträckan.', robots: 'noindex, follow', canonical: 'auto' }
  }
};

export const nerjaArrivalGuideCopy = {
  header: {
    eyebrow: l('AMARA Playa arrival guide', 'Anfahrt · AMARA Playa', 'Guía de llegada a AMARA Playa', 'Aankomstgids AMARA Playa', 'Ankomstguide AMARA Playa'),
    title: l('Arriving at AMARA Playa in Nerja', 'Ankommen bei AMARA Playa', 'Llegada a AMARA Playa en Nerja', 'Aankomst bij AMARA Playa in Nerja', 'Ankomst till AMARA Playa i Nerja'),
    subtitle: l('The apartment is central and easy to reach. **Unload first, then park** — that small sequence makes arrival much calmer.', 'Calle Castilla Pérez 60, fünfter Stock, mitten in Nerja. Vor der Tür ladet ihr aus, das Auto parkt danach ein paar Straßen weiter.', 'El apartamento es céntrico y fácil de alcanzar. **Descargad primero y aparcad después**: ese pequeño orden hace la llegada mucho más tranquila.', 'Het appartement ligt centraal en is goed bereikbaar. **Laad eerst de bagage uit en parkeer daarna** — die volgorde maakt de aankomst veel rustiger.', 'Lägenheten ligger centralt och är lätt att nå. **Lasta av först och parkera sedan** – den ordningen gör ankomsten mycket lugnare.')
  },
  content: {
    journeyIntro: {
      title: l('Plan the whole journey first', 'Von weiter her', 'Planificad primero todo el viaje', 'Plan eerst de hele reis', 'Planera först hela resan'),
      text: l('This page handles the final arrival at the apartment. For airports, transfers and regional buses, start with the Nerja travel guide; the parking guide compares the current public options.', 'Diese Seite beginnt in Nerja. Flughafen, Transfer und Bus stehen im Anreiseguide, die Parkplätze im Parkguide.', 'Esta página explica el último tramo hasta el apartamento. Para aeropuertos, traslados y autobuses regionales, empezad por la guía de viaje a Nerja; la guía de aparcamiento compara las opciones públicas actuales.', 'Deze pagina behandelt het laatste stuk naar het appartement. Begin voor luchthavens, transfers en regionale bussen bij de reisgids voor Nerja; de parkeergids vergelijkt de actuele openbare opties.', 'Den här sidan beskriver den sista sträckan till lägenheten. Börja med Nerjas reseguide för flygplatser, transfer och regionalbussar; parkeringsguiden jämför aktuella allmänna alternativ.'),
      cta: l('Plan the journey to Nerja', 'Anreise nach Nerja', 'Planificar el viaje a Nerja', 'Plan de reis naar Nerja', 'Planera resan till Nerja'),
      parkingCta: l('Compare parking in Nerja', 'Parken in Nerja', 'Comparar aparcamiento en Nerja', 'Parkeren in Nerja vergelijken', 'Jämför parkering i Nerja')
    },
    parking: {
      title: l('Navigate to the apartment entrance for the luggage stop', 'Bis vor die Haustür', 'Navegad hasta la entrada para descargar el equipaje', 'Navigeer voor de bagagestop naar de ingang', 'Navigera till entrén för bagagestoppet'),
      text: l('AMARA Playa is at Calle Castilla Pérez 60. You can reach the entrance by car and stop briefly if the current street rules and traffic allow it. The apartment has no private parking space, so do not leave the car at the building; continue to a legal street space or public facility.', 'Gebt Calle Castilla Pérez 60 ins Navi ein. Vor dem Eingang könnt ihr kurz halten und das Gepäck ausladen; einen eigenen Stellplatz hat das Apartment nicht, das Auto kommt danach auf einen Straßenplatz oder ins Parkhaus.', 'AMARA Playa está en Calle Castilla Pérez 60. Podéis llegar en coche hasta la entrada y parar brevemente si lo permiten las normas vigentes y el tráfico. El apartamento no tiene plaza privada; no dejéis el coche en el edificio y continuad hasta una plaza legal o un aparcamiento público.', 'AMARA Playa ligt aan Calle Castilla Pérez 60. Jullie kunnen tot de ingang rijden en er kort stoppen als de actuele regels en het verkeer dat toelaten. Het appartement heeft geen privéplek; laat de auto dus niet bij het gebouw staan en rijd door naar een legale straatplek of openbare voorziening.', 'AMARA Playa ligger på Calle Castilla Pérez 60. Ni kan köra fram till entrén och stanna kort om aktuella regler och trafik tillåter det. Lägenheten har ingen privat plats; lämna därför inte bilen vid huset utan fortsätt till laglig gatuparkering eller en allmän anläggning.')
    },
    walkingAccess: {
      title: l('Level street arrival and lift to the fifth floor', 'Ebenerdig hinein, mit dem Aufzug hinauf', 'Llegada llana desde la calle y ascensor a la quinta planta', 'Vlakke aankomst vanaf straat en lift naar de vijfde verdieping', 'Plan ankomst från gatan och hiss till femte våningen'),
      text: l('The entrance is reached from street level without exterior steps. A lift serves the apartment floor; booked guests receive the exact building-entry and check-in instructions privately before arrival.', 'Der Eingang liegt auf Straßenniveau, der Aufzug bringt euch in den fünften Stock. Wie ihr ins Gebäude kommt, steht in eurer Anreise-Nachricht vor dem Check-in.', 'Se llega a la entrada desde la calle sin escalones exteriores. Hay ascensor hasta la planta del apartamento; las instrucciones exactas de acceso y entrada se envían en privado antes de la llegada.', 'De ingang is vanaf straatniveau zonder buitentrappen bereikbaar. Een lift gaat naar de verdieping van het appartement; geboekte gasten ontvangen de precieze toegangs- en incheckinformatie privé voor aankomst.', 'Entrén nås från gatunivå utan trappsteg utomhus. Hiss går till lägenhetens våning; bokade gäster får exakta instruktioner för byggnad och incheckning privat före ankomst.')
    },
    arrivalTip: {
      title: l('Arrival by car or taxi', 'Mit Auto oder Taxi', 'Llegada en coche o taxi', 'Aankomst met auto of taxi', 'Ankomst med bil eller taxi'),
      text: l('Set Calle Castilla Pérez 60 as the destination, not just “Nerja”. Approach the entrance calmly and only stop where the live street situation permits.\n\nWith two people, the simplest sequence is for one person to take the bags while the driver continues to the chosen parking option. In high season, keep a second parking option ready instead of circling the closest streets.', 'Ins Navi gehört die Hausnummer, nicht nur „Nerja“. Zu zweit geht es am einfachsten so: Einer trägt das Gepäck hinauf, der andere fährt das Auto zum Parkplatz.\n\nIn der Hochsaison sind die Straßen ums Zentrum voll; der Parkguide zeigt, wo dann noch Platz ist.', 'Introducid Calle Castilla Pérez 60 como destino, no solo «Nerja». Acercaos con calma y parad únicamente donde lo permita la situación actual de la calle.\n\nSi sois dos, lo más sencillo es que una persona se ocupe del equipaje mientras la otra continúa hasta el aparcamiento elegido. En temporada alta, llevad una segunda opción pensada en vez de dar vueltas por las calles cercanas.', 'Stel Calle Castilla Pérez 60 in als bestemming, niet alleen “Nerja”. Rijd rustig naar de ingang en stop alleen waar de actuele straatsituatie dat toestaat.\n\nMet z’n tweeën is de eenvoudigste volgorde: één persoon neemt de bagage mee terwijl de bestuurder verdergaat naar de gekozen parkeerplek. Houd in het hoogseizoen een tweede optie klaar in plaats van rondjes te rijden in de dichtstbijzijnde straten.', 'Ange Calle Castilla Pérez 60 som mål, inte bara ”Nerja”. Kör lugnt fram och stanna endast där den aktuella gatusituationen tillåter det.\n\nOm ni är två är det enklast att en person tar väskorna medan föraren fortsätter till vald parkering. Ha ett andra alternativ redo under högsäsong i stället för att köra runt på de närmaste gatorna.'),
      taxiNote: l('A taxi can stop at the apartment entrance when the current traffic situation allows. Show the full address to avoid being left elsewhere in central Nerja.', 'Ein Taxi kann direkt vor dem Eingang halten; zeigt dem Fahrer die Adresse mit Hausnummer.', 'Un taxi puede parar en la entrada cuando lo permita el tráfico. Mostrad la dirección completa para evitar que os deje en otro punto del centro.', 'Een taxi kan bij de ingang stoppen als het verkeer dat toelaat. Toon het volledige adres om niet elders in het centrum te worden afgezet.', 'En taxi kan stanna vid entrén när trafiken tillåter det. Visa hela adressen så att ni inte släpps av någon annanstans i centrum.')
    },
    arrivalByBus: {
      title: l('From Nerja bus station to AMARA Playa', 'Vom Busbahnhof', 'Desde la estación de autobuses hasta AMARA Playa', 'Van het busstation van Nerja naar AMARA Playa', 'Från Nerjas busstation till AMARA Playa'),
      text: l('Most regional buses arrive at Nerja bus station. The apartment is around 1 km away; choose between walking and a short taxi ride according to your luggage and the weather.', 'Der Busbahnhof liegt am oberen Rand der Stadt, das Apartment einen Kilometer weiter unten. Zu Fuß eine Viertelstunde, mit viel Gepäck ein kurzes Taxi.', 'La mayoría de los autobuses regionales llegan a la estación de Nerja. El apartamento está a aproximadamente 1 km; elegid entre ir andando o tomar un taxi corto según el equipaje y el tiempo.', 'De meeste regionale bussen komen aan bij het busstation van Nerja. Het appartement ligt op ongeveer 1 km; kies afhankelijk van bagage en weer tussen lopen en een korte taxirit.', 'De flesta regionalbussar anländer till Nerjas busstation. Lägenheten ligger cirka 1 km bort; välj promenad eller en kort taxiresa efter bagage och väder.')
    },
    luggageAdvice: {
      title: l('Treat unloading and parking as two separate steps', 'Erst ausladen, dann parken', 'Separad la descarga del aparcamiento', 'Zie uitladen en parkeren als twee stappen', 'Planera avlastning och parkering som två steg'),
      text: l('Do not carry bags from an uncertain parking space if a legal short stop at the entrance is possible. After unloading, the final parking place may still involve a walk, especially in busy periods.', 'Die Koffer kommen an der Haustür aus dem Auto, das Auto danach auf einen Parkplatz. So trägt niemand Gepäck durch die halbe Stadt.', 'No carguéis con las maletas desde una plaza incierta si es posible hacer una parada breve y legal en la entrada. Después de descargar, el aparcamiento definitivo puede quedar a cierta distancia, sobre todo en épocas concurridas.', 'Draag de bagage niet vanaf een onzekere parkeerplek als een korte legale stop bij de ingang mogelijk is. Na het uitladen kan de uiteindelijke parkeerplek vooral in drukke tijden nog een wandeling betekenen.', 'Bär inte väskorna från en osäker parkeringsplats om ett kort lagligt stopp vid entrén är möjligt. Efter avlastning kan den slutliga platsen ändå innebära en promenad, särskilt under välbesökta perioder.')
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
          { question: 'Hat AMARA Playa einen Parkplatz?', answer: 'Einen eigenen nicht. Ihr parkt auf der Straße oder in einem der öffentlichen Parkhäuser; der Parkguide zeigt, welche.' },
          { question: 'Können wir vor der Tür ausladen?', answer: 'Ja, kurz halten und ausladen geht. Danach fährt das Auto zum Parkplatz.' },
          { question: 'Können wir vom Busbahnhof laufen?', answer: 'Ja, etwa einen Kilometer und eine Viertelstunde bergab. Mit viel Gepäck ist das Taxi bequemer.' },
          { question: 'Wie kommen wir ins Gebäude?', answer: 'Das steht in eurer Anreise-Nachricht, die ihr vor dem Check-in bekommt.' }
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
    dropOff: l('Luggage stop', 'Ausladen', 'Parada para equipaje', 'Bagagestop', 'Bagagestopp'),
    walkingDistance: l('From the bus station', 'Vom Busbahnhof', 'Desde la estación', 'Vanaf het busstation', 'Från busstationen'),
    busStop: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
    walkingValue: l('approx. 15 min · 1 km', 'ca. 15 Min. · 1 km', 'aprox. 15 min · 1 km', 'ca. 15 min · 1 km', 'ca 15 min · 1 km'),
    quickContact: l('Useful on arrival', 'Bei der Ankunft', 'Útil al llegar', 'Handig bij aankomst', 'Bra vid ankomst'),
    taxi: l('Open destination', 'Ziel öffnen', 'Abrir destino', 'Bestemming openen', 'Öppna destination'),
    emergency: l('Emergency', 'Notfall', 'Emergencias', 'Noodgeval', 'Nödfall'),
    mapTitle: l('Destination and street-level arrival at AMARA Playa', 'Der Weg zu AMARA Playa', 'Destino y llegada a pie de calle a AMARA Playa', 'Bestemming en aankomst op straatniveau bij AMARA Playa', 'Destination och ankomst på gatunivå vid AMARA Playa'),
    taxiNoteLabel: l('Taxi note', 'Fürs Taxi', 'Nota sobre el taxi', 'Taxitip', 'Taxitips'),
    routeTitle: l('Final destination', 'Letztes Ziel', 'Destino final', 'Eindbestemming', 'Slutdestination')
  }
};

export const nerjaArrivalGuideSteps = {
  en: ['Navigate to Calle Castilla Pérez 60.', 'Check the live street signs before stopping.', 'Unload the luggage at the entrance if a legal stop is possible.', 'Move the car to a legal street space or public facility.', 'Use the private check-in instructions to enter the building.'],
  de: ['Calle Castilla Pérez 60 ins Navi.', 'Vor dem Eingang kurz halten, wenn der Verkehr es zulässt, und das Gepäck ausladen.', 'Das Auto auf einen Straßenplatz oder ins Parkhaus bringen.', 'Zurück zum Eingang und mit dem Aufzug in den fünften Stock.', 'Der Zugang steht in eurer Anreise-Nachricht.'],
  es: ['Navegad hasta Calle Castilla Pérez 60.', 'Comprobad las señales vigentes antes de parar.', 'Descargad el equipaje en la entrada si es posible parar legalmente.', 'Llevad el coche a una plaza legal o un aparcamiento público.', 'Utilizad las instrucciones privadas para entrar en el edificio.'],
  nl: ['Navigeer naar Calle Castilla Pérez 60.', 'Controleer de actuele borden voordat jullie stoppen.', 'Laad bij de ingang uit als een legale stop mogelijk is.', 'Breng de auto naar een legale straatplek of openbare voorziening.', 'Gebruik de privé-incheckinformatie om het gebouw binnen te gaan.'],
  sv: ['Navigera till Calle Castilla Pérez 60.', 'Kontrollera aktuella skyltar innan ni stannar.', 'Lasta av vid entrén om ett lagligt stopp är möjligt.', 'Flytta bilen till laglig gatuparkering eller en allmän anläggning.', 'Använd de privata incheckningsinstruktionerna för att komma in.']
};

export const nerjaArrivalGuideBusRoutes = {
  en: [{ id: 'walk', title: 'Walk from the bus station', meta: 'Approx. 15 minutes · 1 km', text: 'A practical option with manageable luggage. Check the live walking route before departure.' }, { id: 'taxi', title: 'Short local taxi ride', meta: 'Best with several bags', text: 'Show the full Calle Castilla Pérez 60 address so the journey ends at the apartment entrance.' }],
  de: [{ id: 'walk', title: 'Zu Fuß', meta: 'Ca. 15 Minuten · 1 km', text: 'Eine Viertelstunde bergab durch die Stadt, mit leichtem Gepäck ein erster Blick auf Nerja.' }, { id: 'taxi', title: 'Mit dem Taxi', meta: 'Mit mehreren Koffern', text: 'Zeigt die Adresse Calle Castilla Pérez 60; die Fahrt endet direkt vor dem Eingang.' }],
  es: [{ id: 'walk', title: 'Ir andando desde la estación', meta: 'Aprox. 15 minutos · 1 km', text: 'Una opción práctica con equipaje manejable. Comprobad la ruta peatonal actual antes de salir.' }, { id: 'taxi', title: 'Trayecto corto en taxi local', meta: 'Mejor con varias maletas', text: 'Mostrad la dirección completa, Calle Castilla Pérez 60, para llegar a la entrada del apartamento.' }],
  nl: [{ id: 'walk', title: 'Lopen vanaf het busstation', meta: 'Ca. 15 minuten · 1 km', text: 'Een praktische optie met hanteerbare bagage. Controleer voor vertrek de actuele wandelroute.' }, { id: 'taxi', title: 'Korte rit met een lokale taxi', meta: 'Het beste met meerdere koffers', text: 'Toon het volledige adres Calle Castilla Pérez 60 zodat de rit bij de ingang eindigt.' }],
  sv: [{ id: 'walk', title: 'Promenera från busstationen', meta: 'Ca 15 minuter · 1 km', text: 'Ett praktiskt alternativ med lätthanterligt bagage. Kontrollera aktuell gångväg före avresa.' }, { id: 'taxi', title: 'Kort resa med lokal taxi', meta: 'Bäst med flera väskor', text: 'Visa hela adressen Calle Castilla Pérez 60 så att resan slutar vid lägenhetens entré.' }]
};
