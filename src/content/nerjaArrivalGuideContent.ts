import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const nerjaArrivalGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-nerja-property-arrival-v1.0',
  pageType: 'A',
  entityKey: 'amara-playa',
  languages: {
    en: { title: 'Getting to AMARA Playa Nerja: address, parking & bus', description: 'The way to AMARA Playa, Calle Castilla Pérez 60: unload at the door, then park, from the bus station on foot or by taxi.', robots: 'noindex, follow', canonical: 'auto' },
    de: { title: 'Anfahrt zu AMARA Playa Nerja: Adresse, Parken & Bus', description: 'Der Weg zu AMARA Playa, Calle Castilla Pérez 60: vor der Tür ausladen, danach parken, vom Busbahnhof zu Fuß oder mit dem Taxi.', robots: 'noindex, follow', canonical: 'auto' },
    es: { title: 'Cómo llegar a AMARA Playa Nerja: dirección, parking y autobús', description: 'El camino a AMARA Playa, calle Castilla Pérez 60: descargar en la puerta, aparcar después, desde la estación de autobuses a pie o en taxi.', robots: 'noindex, follow', canonical: 'auto' },
    nl: { title: 'Aankomst bij AMARA Playa Nerja: adres, parkeren & bus', description: 'De weg naar AMARA Playa, Calle Castilla Pérez 60: voor de deur uitladen, daarna parkeren, vanaf het busstation te voet of met de taxi.', robots: 'noindex, follow', canonical: 'auto' },
    sv: { title: 'Vägen till AMARA Playa Nerja: adress, parkering & buss', description: 'Vägen till AMARA Playa, Calle Castilla Pérez 60: lasta av vid dörren, parkera sedan, från busstationen till fots eller med taxi.', robots: 'noindex, follow', canonical: 'auto' }
  }
};

export const nerjaArrivalGuideCopy = {
  header: {
    eyebrow: l('Arrival · AMARA Playa', 'Anfahrt · AMARA Playa', 'Llegada · AMARA Playa', 'Aankomst · AMARA Playa', 'Ankomst · AMARA Playa'),
    title: l('Arriving at AMARA Playa', 'Ankommen bei AMARA Playa', 'Llegar a AMARA Playa', 'Aankomen bij AMARA Playa', 'Att komma fram till AMARA Playa'),
    subtitle: l('Calle Castilla Pérez 60, fifth floor, in the middle of Nerja. You unload at the door; the car then parks a few streets on.', 'Calle Castilla Pérez 60, fünfter Stock, mitten in Nerja. Vor der Tür ladet ihr aus, das Auto parkt danach ein paar Straßen weiter.', 'Calle Castilla Pérez 60, quinta planta, en pleno Nerja. Descargáis en la puerta y el coche aparca después unas calles más allá.', 'Calle Castilla Pérez 60, vijfde verdieping, midden in Nerja. Voor de deur laad je uit, de auto parkeert daarna een paar straten verder.', 'Calle Castilla Pérez 60, femte våningen, mitt i Nerja. Vid dörren lastar ni av, bilen parkerar sedan några gator bort.')
  },
  content: {
    journeyIntro: {
      title: l('From further away', 'Von weiter her', 'Desde más lejos', 'Van verder weg', 'Från längre bort'),
      text: l('This page starts in Nerja. Airport, transfer and bus are in the travel guide, the car parks in the parking guide.', 'Diese Seite beginnt in Nerja. Flughafen, Transfer und Bus stehen im Anreiseguide, die Parkplätze im Parkguide.', 'Esta página empieza en Nerja. Aeropuerto, traslado y autobús están en la guía de llegada, los aparcamientos en la guía de parking.', 'Deze pagina begint in Nerja. Luchthaven, transfer en bus staan in de reisgids, de parkeerplaatsen in de parkeergids.', 'Den här sidan börjar i Nerja. Flygplats, transfer och buss finns i reseguiden, parkeringarna i parkeringsguiden.'),
      cta: l('Getting to Nerja', 'Anreise nach Nerja', 'Cómo llegar a Nerja', 'Aankomst in Nerja', 'Resan till Nerja'),
      parkingCta: l('Parking in Nerja', 'Parken in Nerja', 'Aparcar en Nerja', 'Parkeren in Nerja', 'Parkering i Nerja')
    },
    parking: {
      title: l('Right to the front door', 'Bis vor die Haustür', 'Hasta la puerta de casa', 'Tot voor de voordeur', 'Ända fram till dörren'),
      text: l('Enter Calle Castilla Pérez 60 into the sat-nav. In front of the entrance you can stop briefly and unload the luggage; the apartment has no parking space of its own, so the car then goes to a street space or into the car park.', 'Gebt Calle Castilla Pérez 60 ins Navi ein. Vor dem Eingang könnt ihr kurz halten und das Gepäck ausladen; einen eigenen Stellplatz hat das Apartment nicht, das Auto kommt danach auf einen Straßenplatz oder ins Parkhaus.', 'Poned calle Castilla Pérez 60 en el navegador. Delante de la entrada podéis parar un momento y descargar el equipaje; el apartamento no tiene plaza propia, el coche va después a una plaza en la calle o al parking.', 'Voer Calle Castilla Pérez 60 in de navigatie in. Voor de ingang kun je kort stoppen en de bagage uitladen; een eigen parkeerplaats heeft het appartement niet, de auto gaat daarna naar een plek op straat of de parkeergarage.', 'Skriv in Calle Castilla Pérez 60 i GPS:en. Framför entrén kan ni stanna kort och lasta av bagaget; någon egen parkeringsplats har lägenheten inte, bilen kör sedan till en gatuplats eller in i parkeringshuset.')
    },
    walkingAccess: {
      title: l('Ten steps, then the lift', 'Zehn Stufen bis zum Aufzug', 'Diez escalones hasta el ascensor', 'Tien treden tot de lift', 'Tio trappsteg till hissen'),
      text: l('The lift takes you comfortably to the fifth floor. Before the lift door, though, there are ten steps to manage: five in front of the main entrance and five more in the hallway.', 'Der Aufzug bringt euch bequem in den fünften Stock. Bis zur Aufzugstür müsst ihr allerdings zehn Stufen überwinden: fünf vor dem Haupteingang und fünf weitere im Flur.', 'El ascensor os sube cómodamente a la quinta planta. Antes de la puerta del ascensor, eso sí, hay diez escalones que salvar: cinco delante de la entrada principal y otros cinco en el portal.', 'De lift brengt jullie comfortabel naar de vijfde verdieping. Tot aan de liftdeur zijn er wel tien treden te nemen: vijf voor de hoofdingang en nog eens vijf in de hal.', 'Hissen tar er bekvämt upp till femte våningen. Fram till hissdörren är det dock tio trappsteg att ta: fem framför huvudentrén och fem till i hallen.')
    },
    arrivalTip: {
      title: l('By car or taxi', 'Mit Auto oder Taxi', 'En coche o taxi', 'Met auto of taxi', 'Med bil eller taxi'),
      text: l('The house number belongs in the sat-nav, not just “Nerja”. With two of you the simplest way is this: one carries the luggage up, the other drives the car to the car park.\n\nIn high season the streets around the centre are full; the parking guide shows where there is still room.', 'Ins Navi gehört die Hausnummer, nicht nur „Nerja“. Zu zweit geht es am einfachsten so: Einer trägt das Gepäck hinauf, der andere fährt das Auto zum Parkplatz.\n\nIn der Hochsaison sind die Straßen ums Zentrum voll; der Parkguide zeigt, wo dann noch Platz ist.', 'En el navegador va el número, no solo «Nerja». Entre dos, lo más sencillo: uno sube el equipaje, el otro lleva el coche al aparcamiento.\n\nEn temporada alta las calles del centro están llenas; la guía de parking dice dónde queda sitio.', 'In de navigatie hoort het huisnummer, niet alleen “Nerja”. Met z’n tweeën gaat het het makkelijkst zo: de een draagt de bagage naar boven, de ander rijdt de auto naar de parkeerplaats.\n\nIn het hoogseizoen zijn de straten rond het centrum vol; de parkeergids laat zien waar dan nog plek is.', 'I GPS:en ska husnumret in, inte bara ”Nerja”. Är ni två går det enklast så här: en bär upp bagaget, den andra kör bilen till parkeringen.\n\nUnder högsäsong är gatorna kring centrum fulla; parkeringsguiden visar var det då fortfarande finns plats.'),
      taxiNote: l('A taxi can stop right in front of the entrance; show the driver the address with the house number.', 'Ein Taxi kann direkt vor dem Eingang halten; zeigt dem Fahrer die Adresse mit Hausnummer.', 'Un taxi puede parar justo delante de la entrada; enseñadle al conductor la dirección con el número.', 'Een taxi kan direct voor de ingang stoppen; toon de chauffeur het adres met huisnummer.', 'En taxi kan stanna direkt framför entrén; visa föraren adressen med husnummer.')
    },
    arrivalByBus: {
      title: l('From the bus station', 'Vom Busbahnhof', 'Desde la estación de autobuses', 'Vanaf het busstation', 'Från busstationen'),
      text: l('The bus station is at the upper edge of town, the apartment a kilometre further down. A quarter of an hour on foot, with a lot of luggage a short taxi ride.', 'Der Busbahnhof liegt am oberen Rand der Stadt, das Apartment einen Kilometer weiter unten. Zu Fuß eine Viertelstunde, mit viel Gepäck ein kurzes Taxi.', 'La estación de autobuses está en el borde alto de la ciudad, el apartamento un kilómetro más abajo. A pie un cuarto de hora, con mucho equipaje un taxi corto.', 'Het busstation ligt aan de bovenrand van de stad, het appartement een kilometer lager. Te voet een kwartier, met veel bagage een korte taxirit.', 'Busstationen ligger i stadens övre kant, lägenheten en kilometer längre ner. Till fots en kvart, med mycket bagage en kort taxiresa.')
    },
    luggageAdvice: {
      title: l('Unload first, then park', 'Erst ausladen, dann parken', 'Primero descargar, luego aparcar', 'Eerst uitladen, dan parkeren', 'Lasta av först, parkera sedan'),
      text: l('The suitcases come out of the car at the front door, the car then goes to a parking space. That way nobody carries luggage through half the town.', 'Die Koffer kommen an der Haustür aus dem Auto, das Auto danach auf einen Parkplatz. So trägt niemand Gepäck durch die halbe Stadt.', 'Las maletas salen del coche en la puerta de casa, el coche va después a una plaza. Así nadie carga el equipaje por media ciudad.', 'De koffers gaan bij de voordeur uit de auto, de auto daarna naar een parkeerplaats. Zo draagt niemand bagage door de halve stad.', 'Resväskorna kommer ur bilen vid dörren, bilen kör sedan till en parkeringsplats. Så bär ingen bagage genom halva stan.')
    },
    faq: {
      title: l('Arrival FAQ', 'FAQ zur Anreise', 'Preguntas sobre la llegada', 'FAQ over de aankomst', 'Vanliga frågor om ankomst'),
      items: {
        en: [
          { question: 'Does AMARA Playa have a parking space?', answer: 'Not one of its own. You park on the street or in one of the public car parks; the parking guide shows which.' },
          { question: 'Can we unload at the door?', answer: 'Yes, a short stop to unload is fine. The car then goes on to the car park.' },
          { question: 'Can we walk from the bus station?', answer: 'Yes, about a kilometre and a quarter of an hour downhill. With a lot of luggage the taxi is more comfortable.' },
          { question: 'How do we enter the building?', answer: 'Completely flexible and with no reception. You open the house door and the apartment door yourselves with a code. We send you the exact access details in good time before you arrive, so a late arrival at night works without any trouble.' }
        ],
        de: [
          { question: 'Hat AMARA Playa einen Parkplatz?', answer: 'Einen eigenen nicht. Ihr parkt auf der Straße oder in einem der öffentlichen Parkhäuser; der Parkguide zeigt, welche.' },
          { question: 'Können wir vor der Tür ausladen?', answer: 'Ja, kurz halten und ausladen geht. Danach fährt das Auto zum Parkplatz.' },
          { question: 'Können wir vom Busbahnhof laufen?', answer: 'Ja, etwa einen Kilometer und eine Viertelstunde bergab. Mit viel Gepäck ist das Taxi bequemer.' },
          { question: 'Wie kommen wir ins Gebäude?', answer: 'Ganz flexibel und ohne Rezeption. Ihr öffnet die Haus- und Wohnungstür autonom per Code. Die genauen Zugangsdaten schicken wir euch rechtzeitig vor eurer Anreise, sodass auch eine späte Ankunft nachts problemlos klappt.' }
        ],
        es: [
          { question: '¿Tiene AMARA Playa aparcamiento?', answer: 'Propio no. Aparcáis en la calle o en uno de los parkings públicos; la guía de aparcamiento dice cuáles.' },
          { question: '¿Podemos descargar en la puerta?', answer: 'Sí, parar un momento y descargar se puede. Después el coche va al aparcamiento.' },
          { question: '¿Podemos ir andando desde la estación de autobuses?', answer: 'Sí, alrededor de un kilómetro y un cuarto de hora cuesta abajo. Con mucho equipaje el taxi es más cómodo.' },
          { question: '¿Cómo entramos en el edificio?', answer: 'Con total flexibilidad y sin recepción. Abrís la puerta del edificio y la del apartamento vosotros mismos con un código. Os enviamos los datos de acceso exactos con tiempo antes de vuestra llegada, de modo que una llegada tardía por la noche no supone ningún problema.' }
        ],
        nl: [
          { question: 'Heeft AMARA Playa een parkeerplaats?', answer: 'Geen eigen. Je parkeert op straat of in een van de openbare parkeergarages; de parkeergids laat zien welke.' },
          { question: 'Kunnen we voor de deur uitladen?', answer: 'Ja, kort stoppen en uitladen kan. Daarna rijdt de auto naar de parkeerplaats.' },
          { question: 'Kunnen we vanaf het busstation lopen?', answer: 'Ja, ongeveer een kilometer en een kwartier bergaf. Met veel bagage is de taxi comfortabeler.' },
          { question: 'Hoe komen we het gebouw binnen?', answer: 'Helemaal flexibel en zonder receptie. Je opent de deur van het gebouw en van het appartement zelf met een code. De precieze toegangsgegevens sturen we je op tijd vóór aankomst, zodat ook een late aankomst ’s nachts probleemloos verloopt.' }
        ],
        sv: [
          { question: 'Har AMARA Playa en parkeringsplats?', answer: 'Ingen egen. Ni parkerar på gatan eller i ett av de allmänna parkeringshusen; parkeringsguiden visar vilka.' },
          { question: 'Kan vi lasta av vid dörren?', answer: 'Ja, att stanna kort och lasta av går bra. Sedan kör bilen vidare till parkeringen.' },
          { question: 'Kan vi gå från busstationen?', answer: 'Ja, ungefär en kilometer och en kvart nedför. Med mycket bagage är taxin bekvämare.' },
          { question: 'Hur kommer vi in i byggnaden?', answer: 'Helt flexibelt och utan reception. Ni öppnar portdörren och lägenhetsdörren själva med en kod. De exakta åtkomstuppgifterna skickar vi er i god tid före ankomsten, så att en sen ankomst på natten fungerar utan problem.' }
        ]
      }
    }
  },
  sidebar: {
    title: l('AMARA Playa arrival summary', 'AMARA Playa auf einen Blick', 'Resumen de llegada a AMARA Playa', 'AMARA Playa in het kort', 'AMARA Playa i korthet'),
    address: l('Address', 'Adresse', 'Dirección', 'Adres', 'Adress'),
    dropOff: l('Unloading', 'Ausladen', 'Descargar', 'Uitladen', 'Lasta av'),
    walkingDistance: l('From the bus station', 'Vom Busbahnhof', 'Desde la estación', 'Vanaf het busstation', 'Från busstationen'),
    busStop: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
    walkingValue: l('approx. 15 min · 1 km', 'ca. 15 Min. · 1 km', 'aprox. 15 min · 1 km', 'ca. 15 min · 1 km', 'ca 15 min · 1 km'),
    quickContact: l('On arrival', 'Bei der Ankunft', 'Al llegar', 'Bij aankomst', 'Vid ankomsten'),
    taxi: l('Open destination', 'Ziel öffnen', 'Abrir destino', 'Bestemming openen', 'Öppna destination'),
    emergency: l('Emergency', 'Notfall', 'Emergencias', 'Noodgeval', 'Nödfall'),
    mapTitle: l('The way to AMARA Playa', 'Der Weg zu AMARA Playa', 'El camino a AMARA Playa', 'De weg naar AMARA Playa', 'Vägen till AMARA Playa'),
    taxiNoteLabel: l('For the taxi', 'Fürs Taxi', 'Para el taxi', 'Voor de taxi', 'För taxin'),
    routeTitle: l('Final destination', 'Letztes Ziel', 'Destino final', 'Eindbestemming', 'Slutdestination')
  }
};

export const nerjaArrivalGuideSteps = {
  en: ['Calle Castilla Pérez 60 into the sat-nav.', 'Stop briefly in front of the entrance, if traffic allows, and unload the luggage.', 'Take the car to a street space or the car park.', 'Back to the entrance and up to the fifth floor by lift.', 'The access details are in your arrival message.'],
  de: ['Calle Castilla Pérez 60 ins Navi.', 'Vor dem Eingang kurz halten, wenn der Verkehr es zulässt, und das Gepäck ausladen.', 'Das Auto auf einen Straßenplatz oder ins Parkhaus bringen.', 'Zurück zum Eingang und mit dem Aufzug in den fünften Stock.', 'Der Zugang steht in eurer Anreise-Nachricht.'],
  es: ['Calle Castilla Pérez 60 en el navegador.', 'Parar un momento delante de la entrada, si el tráfico lo permite, y descargar el equipaje.', 'Llevar el coche a una plaza en la calle o al parking.', 'Volver a la entrada y subir en ascensor a la quinta planta.', 'El acceso está en vuestro mensaje de llegada.'],
  nl: ['Calle Castilla Pérez 60 in de navigatie.', 'Kort voor de ingang stoppen, als het verkeer het toelaat, en de bagage uitladen.', 'De auto naar een plek op straat of de parkeergarage brengen.', 'Terug naar de ingang en met de lift naar de vijfde verdieping.', 'De toegang staat in je aankomstbericht.'],
  sv: ['Calle Castilla Pérez 60 i GPS:en.', 'Stanna kort framför entrén, om trafiken tillåter, och lasta av bagaget.', 'Köra bilen till en gatuplats eller parkeringshuset.', 'Tillbaka till entrén och med hissen upp till femte våningen.', 'Hur ni kommer in står i ert ankomstmeddelande.']
};

export const nerjaArrivalGuideBusRoutes = {
  en: [{ id: 'walk', title: 'On foot', meta: 'Approx. 15 minutes · 1 km', text: 'A quarter of an hour downhill through town, with light luggage a first look at Nerja.' }, { id: 'taxi', title: 'By taxi', meta: 'With several suitcases', text: 'Show the address Calle Castilla Pérez 60; the ride ends right at the entrance.' }],
  de: [{ id: 'walk', title: 'Zu Fuß', meta: 'Ca. 15 Minuten · 1 km', text: 'Eine Viertelstunde bergab durch die Stadt, mit leichtem Gepäck ein erster Blick auf Nerja.' }, { id: 'taxi', title: 'Mit dem Taxi', meta: 'Mit mehreren Koffern', text: 'Zeigt die Adresse Calle Castilla Pérez 60; die Fahrt endet direkt vor dem Eingang.' }],
  es: [{ id: 'walk', title: 'A pie', meta: 'Aprox. 15 minutos · 1 km', text: 'Un cuarto de hora cuesta abajo por la ciudad, con poco equipaje un primer vistazo a Nerja.' }, { id: 'taxi', title: 'En taxi', meta: 'Con varias maletas', text: 'Mostrad la dirección calle Castilla Pérez 60; el trayecto termina justo delante de la entrada.' }],
  nl: [{ id: 'walk', title: 'Te voet', meta: 'Ca. 15 minuten · 1 km', text: 'Een kwartier bergaf door de stad, met lichte bagage een eerste blik op Nerja.' }, { id: 'taxi', title: 'Met de taxi', meta: 'Met meerdere koffers', text: 'Toon het adres Calle Castilla Pérez 60; de rit eindigt direct voor de ingang.' }],
  sv: [{ id: 'walk', title: 'Till fots', meta: 'Ca 15 minuter · 1 km', text: 'En kvart nedför genom stan, med lätt bagage en första blick på Nerja.' }, { id: 'taxi', title: 'Med taxi', meta: 'Med flera resväskor', text: 'Visa adressen Calle Castilla Pérez 60; resan slutar direkt framför entrén.' }]
};
