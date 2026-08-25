import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const tarifaArrivalGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-tarifa-property-arrival-v1.0',
  pageType: 'A',
  entityKey: 'amara-family-surf',
  languages: {
    en: { title: 'Arrival at AMARA Family & Surf Tarifa: Garage & Bus', description: 'Arrive at AMARA Family & Surf, Mar Adriático 29 in La Marina: building approach, reserved underground parking, bus and luggage guidance.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Anreise zu AMARA Family & Surf Tarifa: Garage & Bus', description: 'Kommt zu AMARA Family & Surf in der Mar Adriático 29: Gebäudezufahrt, reservierte Tiefgarage, Bus und Gepäckhinweise.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Llegada a AMARA Family & Surf Tarifa: garaje y autobús', description: 'Llegad a AMARA Family & Surf, Mar Adriático 29: acceso al residencial, garaje reservado, autobús y consejos de equipaje.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Aankomst bij AMARA Family & Surf Tarifa: garage en bus', description: 'Kom aan bij AMARA Family & Surf aan Mar Adriático 29: toegang tot het complex, gereserveerde garage, bus en bagageadvies.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Ankomst till AMARA Family & Surf Tarifa: garage och buss', description: 'Kom till AMARA Family & Surf på Mar Adriático 29: infart till området, reserverat garage, buss och bagageråd.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const tarifaArrivalGuideCopy = {
  header: {
    eyebrow: l('AMARA Family & Surf arrival guide', 'Anreise-Guide AMARA Family & Surf', 'Guía de llegada a AMARA Family & Surf', 'Aankomstgids AMARA Family & Surf', 'Ankomstguide AMARA Family & Surf'),
    title: l('Arriving at AMARA Family & Surf in Tarifa', 'Ankunft bei AMARA Family & Surf in Tarifa', 'Llegada a AMARA Family & Surf en Tarifa', 'Aankomst bij AMARA Family & Surf in Tarifa', 'Ankomst till AMARA Family & Surf i Tarifa'),
    subtitle: l('Your destination is **Mar Adriático 29 in La Marina**, with a reserved underground parking space for the apartment.', 'Euer Ziel ist **Mar Adriático 29 in La Marina**; zum Apartment gehört ein reservierter Tiefgaragenstellplatz.', 'Vuestro destino es **Mar Adriático 29, en La Marina**, con una plaza reservada en el garaje subterráneo.', 'Jullie bestemming is **Mar Adriático 29 in La Marina**, met een gereserveerde plek in de ondergrondse garage.', 'Ert mål är **Mar Adriático 29 i La Marina**, med en reserverad plats i det underjordiska garaget.')
  },
  content: {
    journeyIntro: {
      title: l('Plan the journey to Tarifa first', 'Zuerst die Anreise nach Tarifa planen', 'Planificad primero el viaje a Tarifa', 'Plan eerst de reis naar Tarifa', 'Planera först resan till Tarifa'),
      text: l('This page handles the final arrival at the apartment. For the N-340, airports, regional buses and ferry arrival, start with the Tarifa travel guide; the parking guide explains the wider local context.', 'Diese Seite übernimmt die letzte Etappe zum Apartment. Für N-340, Flughäfen, Regionalbusse und Fährankunft beginnt ihr mit dem Tarifa-Anreiseguide; der Parkguide erklärt den größeren örtlichen Zusammenhang.', 'Esta página explica el último tramo hasta el apartamento. Para la N-340, aeropuertos, autobuses regionales y ferris, empezad por la guía de viaje a Tarifa; la guía de aparcamiento explica el contexto local.', 'Deze pagina behandelt het laatste stuk naar het appartement. Begin voor de N-340, luchthavens, regionale bussen en ferry bij de reisgids voor Tarifa; de parkeergids geeft de bredere lokale context.', 'Den här sidan beskriver sista sträckan till lägenheten. Börja med Tarifas reseguide för N-340, flygplatser, regionalbussar och färja; parkeringsguiden förklarar det lokala sammanhanget.'),
      cta: l('Plan the journey to Tarifa', 'Anreise nach Tarifa planen', 'Planificar el viaje a Tarifa', 'Plan de reis naar Tarifa', 'Planera resan till Tarifa'),
      parkingCta: l('Read the Tarifa parking guide', 'Parkguide Tarifa lesen', 'Leer la guía de aparcamiento', 'Lees de parkeergids voor Tarifa', 'Läs Tarifas parkeringsguide')
    },
    parking: {
      title: l('Navigate to Las Terrazas de la Marina', 'Zur Anlage Las Terrazas de la Marina navigieren', 'Navegad hasta Las Terrazas de la Marina', 'Navigeer naar Las Terrazas de la Marina', 'Navigera till Las Terrazas de la Marina'),
      text: l('AMARA Family & Surf is at Mar Adriático 29 in the Las Terrazas de la Marina residential complex. The apartment includes a reserved underground parking space. Exact garage access, the assigned space and building-entry instructions are shared privately with booked guests before arrival.', 'AMARA Family & Surf liegt in der Mar Adriático 29 in der Wohnanlage Las Terrazas de la Marina. Zum Apartment gehört ein reservierter Tiefgaragenstellplatz. Die genaue Garagenzufahrt, der zugewiesene Platz und die Hinweise zum Gebäudezugang erhalten gebuchte Gäste vor der Anreise privat.', 'AMARA Family & Surf está en Mar Adriático 29, en el residencial Las Terrazas de la Marina. El apartamento incluye una plaza reservada en el garaje subterráneo. El acceso exacto, la plaza asignada y las instrucciones del edificio se envían en privado antes de la llegada.', 'AMARA Family & Surf ligt aan Mar Adriático 29 in het wooncomplex Las Terrazas de la Marina. Bij het appartement hoort een gereserveerde plek in de ondergrondse garage. De precieze toegang, toegewezen plek en gebouwinstructies worden vóór aankomst privé gedeeld.', 'AMARA Family & Surf ligger på Mar Adriático 29 i bostadsområdet Las Terrazas de la Marina. Lägenheten har en reserverad plats i det underjordiska garaget. Exakt infart, tilldelad plats och instruktioner för byggnaden delas privat före ankomst.')
    },
    walkingAccess: {
      title: l('Step-free route to the apartment door', 'Stufenfreier Weg bis zur Apartmenttür', 'Recorrido sin escalones hasta la puerta', 'Route zonder treden tot aan de deur', 'Stegfri väg till lägenhetsdörren'),
      text: l('There are no exterior or shared-building steps on the route to the apartment, and the lift reaches the apartment door. Inside the two-level apartment, stairs lead to the bedrooms.', 'Auf dem Weg zum Apartment gibt es draußen und im gemeinschaftlichen Gebäude keine Stufen; der Aufzug fährt bis vor die Apartmenttür. Innerhalb der zweigeschossigen Wohnung führen Treppen zu den Schlafzimmern.', 'No hay escalones exteriores ni en las zonas comunes hasta el apartamento, y el ascensor llega a la puerta. Dentro de la vivienda de dos niveles hay escaleras hacia los dormitorios.', 'Op de route naar het appartement zijn buiten en in het gedeelde gebouw geen treden; de lift komt tot aan de deur. Binnen in het appartement met twee niveaus leiden trappen naar de slaapkamers.', 'Det finns inga trappsteg utomhus eller i gemensamma delar på vägen till lägenheten, och hissen går till dörren. Inne i lägenheten i två plan leder trappor till sovrummen.')
    },
    arrivalTip: {
      title: l('Arrival by car or taxi', 'Anreise mit Auto oder Taxi', 'Llegada en coche o taxi', 'Aankomst met auto of taxi', 'Ankomst med bil eller taxi'),
      text: l('Set Mar Adriático 29 as the destination before entering Tarifa; “Tarifa” alone is not precise enough. Look for the Las Terrazas de la Marina residential complex in La Marina.\n\nIf you arrive by car, keep the private garage instructions ready before the final approach. Do not publish or forward access codes or remote-control details; they belong only in the booked-guest arrival message.', 'Gebt Mar Adriático 29 schon vor der Einfahrt nach Tarifa als Ziel ein; „Tarifa“ allein ist nicht genau genug. Sucht nach der Wohnanlage Las Terrazas de la Marina in La Marina.\n\nWenn ihr mit dem Auto kommt, haltet die privaten Garagenhinweise vor der letzten Zufahrt bereit. Veröffentlicht oder teilt keine Zugangscodes oder Details zu Fernbedienungen; sie gehören nur in die Anreiseinformation für gebuchte Gäste.', 'Introducid Mar Adriático 29 antes de entrar en Tarifa; «Tarifa» por sí solo no es suficientemente preciso. Buscad el residencial Las Terrazas de la Marina, en La Marina.\n\nSi llegáis en coche, tened preparadas las instrucciones privadas del garaje antes del acceso final. No publiquéis ni reenviéis códigos o detalles de mandos; pertenecen únicamente al mensaje para huéspedes con reserva.', 'Stel Mar Adriático 29 in voordat jullie Tarifa binnenrijden; alleen “Tarifa” is niet precies genoeg. Zoek het wooncomplex Las Terrazas de la Marina in La Marina.\n\nHoud bij aankomst met de auto de privé-garage-instructies klaar voor het laatste stuk. Publiceer of deel geen toegangscodes of details over afstandsbedieningen; die horen alleen in het bericht voor geboekte gasten.', 'Ange Mar Adriático 29 innan ni kör in i Tarifa; bara ”Tarifa” är inte tillräckligt exakt. Leta efter bostadsområdet Las Terrazas de la Marina i La Marina.\n\nHa de privata garageinstruktionerna redo före sista infarten om ni kommer med bil. Publicera eller vidarebefordra inte koder eller information om fjärrkontroller; det hör endast hemma i meddelandet till bokade gäster.'),
      taxiNote: l('Tell the driver “Las Terrazas de la Marina, Mar Adriático 29”. The building name often makes the drop-off easier.', 'Nennt dem Fahrer „Las Terrazas de la Marina, Mar Adriático 29“. Der Name der Anlage erleichtert den Ausstieg oft.', 'Decid al conductor «Las Terrazas de la Marina, Mar Adriático 29». El nombre del residencial suele facilitar la llegada.', 'Noem “Las Terrazas de la Marina, Mar Adriático 29”. De naam van het complex maakt de afzet vaak eenvoudiger.', 'Säg ”Las Terrazas de la Marina, Mar Adriático 29”. Namnet på området gör ofta avlämningen enklare.')
    },
    arrivalByBus: {
      title: l('From the Tarifa coach stop to AMARA', 'Von der Bushaltestelle Tarifa zu AMARA', 'Desde la parada de Tarifa hasta AMARA', 'Van de bushalte in Tarifa naar AMARA', 'Från busshållplatsen i Tarifa till AMARA'),
      text: l('Coaches arrive on Calle Batalla del Salado, not at the apartment. Continue to Mar Adriático 29 in La Marina; choose a taxi with children, boards or several bags, or check the live walking route before travel.', 'Fernbusse kommen an der Calle Batalla del Salado an, nicht am Apartment. Fahrt weiter zur Mar Adriático 29 in La Marina; nehmt mit Kindern, Boards oder mehreren Koffern ein Taxi oder prüft vor der Reise den aktuellen Fußweg.', 'Los autobuses llegan a la calle Batalla del Salado, no al apartamento. Continuad hasta Mar Adriático 29, en La Marina; tomad un taxi con niños, tablas o varias maletas, o comprobad la ruta a pie antes del viaje.', 'Bussen komen aan in Calle Batalla del Salado, niet bij het appartement. Reis verder naar Mar Adriático 29 in La Marina; neem met kinderen, boards of meerdere koffers een taxi of controleer voor vertrek de actuele wandelroute.', 'Bussar anländer på Calle Batalla del Salado, inte vid lägenheten. Fortsätt till Mar Adriático 29 i La Marina; ta taxi med barn, brädor eller flera väskor, eller kontrollera aktuell gångväg före resan.')
    },
    luggageAdvice: {
      title: l('Use the lift from the garage or entrance', 'Aufzug ab Garage oder Eingang nutzen', 'Utilizad el ascensor desde el garaje o la entrada', 'Gebruik de lift vanaf garage of ingang', 'Använd hissen från garaget eller entrén'),
      text: l('The lift removes steps from the shared route to the apartment door, which helps with bags and sports equipment. Keep luggage controlled in the garage and shared areas, and follow the private access sequence sent before arrival.', 'Der Aufzug macht den gemeinschaftlichen Weg bis zur Apartmenttür stufenfrei und hilft mit Gepäck oder Sportausrüstung. Behaltet eure Sachen in Garage und Gemeinschaftsbereichen bei euch und folgt der privaten Zugangsfolge aus der Anreiseinformation.', 'El ascensor evita escalones hasta la puerta y facilita el trayecto con maletas o material deportivo. Mantened el equipaje controlado en el garaje y las zonas comunes y seguid la secuencia privada enviada antes de llegar.', 'De lift maakt de gedeelde route tot aan de deur vrij van treden en helpt met bagage of sportuitrusting. Houd spullen bij jullie in garage en gemeenschappelijke ruimten en volg de privé-toegangsvolgorde die voor aankomst is gestuurd.', 'Hissen gör den gemensamma vägen till dörren stegfri och underlättar med bagage eller sportutrustning. Håll uppsikt över saker i garage och gemensamma utrymmen och följ den privata åtkomstordningen som skickats före ankomst.')
    },
    faq: {
      title: l('Arrival FAQ', 'FAQ zur Anreise', 'Preguntas sobre la llegada', 'FAQ over de aankomst', 'Vanliga frågor om ankomst'),
      items: {
        en: [
          { question: 'Is parking included?', answer: 'Yes. The apartment has one reserved underground parking space. Exact access and space details are sent privately to booked guests.' },
          { question: 'What should we enter in navigation?', answer: 'Use Mar Adriático 29, Tarifa, and look for Las Terrazas de la Marina in the La Marina neighbourhood.' },
          { question: 'Is the route from the garage step-free?', answer: 'Yes. The lift reaches the apartment door; stairs begin only inside the apartment and lead to the bedrooms.' },
          { question: 'What if we arrive by coach?', answer: 'Continue from Calle Batalla del Salado to the apartment by local taxi or a live-checked walking route.' }
        ],
        de: [
          { question: 'Ist ein Parkplatz enthalten?', answer: 'Ja. Zum Apartment gehört ein reservierter Tiefgaragenstellplatz. Die genaue Zufahrt und Stellplatzangabe erhalten gebuchte Gäste privat.' },
          { question: 'Was geben wir ins Navi ein?', answer: 'Nutzt Mar Adriático 29, Tarifa, und sucht nach Las Terrazas de la Marina im Viertel La Marina.' },
          { question: 'Ist der Weg von der Garage stufenfrei?', answer: 'Ja. Der Aufzug fährt bis vor die Apartmenttür; Treppen beginnen erst innerhalb der Wohnung und führen zu den Schlafzimmern.' },
          { question: 'Was gilt bei Anreise mit dem Bus?', answer: 'Fahrt ab Calle Batalla del Salado mit einem lokalen Taxi oder über einen aktuell geprüften Fußweg zum Apartment weiter.' }
        ],
        es: [
          { question: '¿Está incluido el aparcamiento?', answer: 'Sí. El apartamento tiene una plaza reservada en el garaje subterráneo. El acceso y la plaza exactos se envían en privado.' },
          { question: '¿Qué ponemos en el navegador?', answer: 'Usad Mar Adriático 29, Tarifa, y buscad Las Terrazas de la Marina en el barrio de La Marina.' },
          { question: '¿El trayecto desde el garaje no tiene escalones?', answer: 'Sí. El ascensor llega a la puerta; las escaleras comienzan solo dentro de la vivienda y suben a los dormitorios.' },
          { question: '¿Qué hacemos si llegamos en autobús?', answer: 'Continuad desde la calle Batalla del Salado en taxi local o siguiendo una ruta peatonal comprobada en directo.' }
        ],
        nl: [
          { question: 'Is parkeren inbegrepen?', answer: 'Ja. Het appartement heeft één gereserveerde plek in de ondergrondse garage. De precieze toegang en plek worden privé gedeeld.' },
          { question: 'Wat voeren we in de navigatie in?', answer: 'Gebruik Mar Adriático 29, Tarifa, en zoek Las Terrazas de la Marina in de wijk La Marina.' },
          { question: 'Is de route vanaf de garage zonder treden?', answer: 'Ja. De lift komt tot aan de deur; trappen beginnen pas binnen en leiden naar de slaapkamers.' },
          { question: 'Wat doen we als we met de bus komen?', answer: 'Reis vanaf Calle Batalla del Salado verder met een lokale taxi of een actueel gecontroleerde wandelroute.' }
        ],
        sv: [
          { question: 'Ingår parkering?', answer: 'Ja. Lägenheten har en reserverad plats i det underjordiska garaget. Exakt infart och plats delas privat.' },
          { question: 'Vad anger vi i navigationen?', answer: 'Använd Mar Adriático 29, Tarifa, och leta efter Las Terrazas de la Marina i La Marina.' },
          { question: 'Är vägen från garaget stegfri?', answer: 'Ja. Hissen går till lägenhetsdörren; trappor börjar först inne i lägenheten och leder till sovrummen.' },
          { question: 'Vad gör vi om vi kommer med buss?', answer: 'Fortsätt från Calle Batalla del Salado med lokal taxi eller en aktuellt kontrollerad gångväg.' }
        ]
      }
    }
  },
  sidebar: {
    title: l('AMARA Family & Surf arrival summary', 'AMARA Family & Surf auf einen Blick', 'Resumen de llegada a AMARA Family & Surf', 'AMARA Family & Surf in het kort', 'AMARA Family & Surf i korthet'),
    address: l('Address', 'Adresse', 'Dirección', 'Adres', 'Adress'),
    dropOff: l('Residential complex', 'Wohnanlage', 'Residencial', 'Wooncomplex', 'Bostadsområde'),
    walkingDistance: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
    busStop: l('Coach arrival', 'Busankunft', 'Llegada en autobús', 'Aankomst met de bus', 'Bussankomst'),
    walkingValue: l('reserved underground space', 'reservierter Tiefgaragenplatz', 'plaza subterránea reservada', 'gereserveerde plek ondergronds', 'reserverad plats under jord'),
    quickContact: l('Useful on arrival', 'Nützlich bei der Ankunft', 'Útil al llegar', 'Handig bij aankomst', 'Bra vid ankomst'),
    taxi: l('Open destination', 'Ziel öffnen', 'Abrir destino', 'Bestemming openen', 'Öppna destination'),
    emergency: l('Emergency', 'Notfall', 'Emergencias', 'Noodgeval', 'Nödfall'),
    mapTitle: l('Destination and building approach for AMARA Family & Surf', 'Ziel und Gebäudezufahrt zu AMARA Family & Surf', 'Destino y acceso al residencial de AMARA Family & Surf', 'Bestemming en toegang tot AMARA Family & Surf', 'Destination och infart till AMARA Family & Surf'),
    taxiNoteLabel: l('Taxi note', 'Taxihinweis', 'Nota sobre el taxi', 'Taxitip', 'Taxitips'),
    routeTitle: l('Final destination', 'Letztes Ziel', 'Destino final', 'Eindbestemming', 'Slutdestination')
  }
};

export const tarifaArrivalGuideSteps = {
  en: ['Navigate to Mar Adriático 29.', 'Look for Las Terrazas de la Marina.', 'Open the private arrival instructions before the final approach.', 'Follow the assigned garage-access sequence.', 'Take the lift from level -1 to the apartment door.'],
  de: ['Navigiert zur Mar Adriático 29.', 'Sucht nach Las Terrazas de la Marina.', 'Öffnet vor der letzten Zufahrt die private Anreiseinformation.', 'Folgt der beschriebenen Zufahrt zum zugewiesenen Garagenplatz.', 'Nehmt den Aufzug von Ebene -1 bis vor die Apartmenttür.'],
  es: ['Navegad hasta Mar Adriático 29.', 'Buscad Las Terrazas de la Marina.', 'Abrid las instrucciones privadas antes del acceso final.', 'Seguid la secuencia indicada hasta la plaza asignada.', 'Tomad el ascensor desde el nivel -1 hasta la puerta.'],
  nl: ['Navigeer naar Mar Adriático 29.', 'Zoek Las Terrazas de la Marina.', 'Open vóór het laatste stuk de privé-aankomstinformatie.', 'Volg de beschreven toegang naar de toegewezen garageplek.', 'Neem de lift van niveau -1 tot aan de deur.'],
  sv: ['Navigera till Mar Adriático 29.', 'Leta efter Las Terrazas de la Marina.', 'Öppna den privata ankomstinformationen före sista infarten.', 'Följ instruktionerna till den tilldelade garageplatsen.', 'Ta hissen från nivå -1 till lägenhetsdörren.']
};

export const tarifaArrivalGuideBusRoutes = {
  en: [{ id: 'taxi', title: 'Local taxi for the final leg', meta: 'Best with children, boards or several bags', text: 'Ask for Las Terrazas de la Marina at Mar Adriático 29 so the driver has both the complex name and address.' }, { id: 'walk', title: 'Walk from Calle Batalla del Salado', meta: 'Check the live route before travel', text: 'A coach stops in town, not at the apartment. Confirm the current walking route and conditions before relying on it.' }],
  de: [{ id: 'taxi', title: 'Lokales Taxi für die letzte Etappe', meta: 'Am besten mit Kindern, Boards oder mehreren Koffern', text: 'Nennt Las Terrazas de la Marina in der Mar Adriático 29, damit der Fahrer Anlagenamen und Adresse hat.' }, { id: 'walk', title: 'Ab Calle Batalla del Salado laufen', meta: 'Aktuellen Weg vor der Reise prüfen', text: 'Der Bus hält im Ort, nicht am Apartment. Prüft Fußweg und Bedingungen aktuell, bevor ihr damit plant.' }],
  es: [{ id: 'taxi', title: 'Taxi local para el último tramo', meta: 'Mejor con niños, tablas o varias maletas', text: 'Pedid Las Terrazas de la Marina, Mar Adriático 29, para que el conductor tenga el nombre y la dirección.' }, { id: 'walk', title: 'Ir andando desde Batalla del Salado', meta: 'Comprobad la ruta antes del viaje', text: 'El autobús para en la localidad, no en el apartamento. Confirmad la ruta y las condiciones actuales antes de contar con ella.' }],
  nl: [{ id: 'taxi', title: 'Lokale taxi voor het laatste stuk', meta: 'Het beste met kinderen, boards of meerdere koffers', text: 'Vraag om Las Terrazas de la Marina aan Mar Adriático 29 zodat de chauffeur naam en adres heeft.' }, { id: 'walk', title: 'Lopen vanaf Calle Batalla del Salado', meta: 'Controleer de actuele route voor vertrek', text: 'De bus stopt in de stad, niet bij het appartement. Bevestig route en omstandigheden voordat jullie erop rekenen.' }],
  sv: [{ id: 'taxi', title: 'Lokal taxi för sista sträckan', meta: 'Bäst med barn, brädor eller flera väskor', text: 'Be om Las Terrazas de la Marina på Mar Adriático 29 så att föraren har både namn och adress.' }, { id: 'walk', title: 'Promenera från Calle Batalla del Salado', meta: 'Kontrollera aktuell väg före resan', text: 'Bussen stannar i staden, inte vid lägenheten. Bekräfta gångväg och förhållanden innan ni planerar efter den.' }]
};
