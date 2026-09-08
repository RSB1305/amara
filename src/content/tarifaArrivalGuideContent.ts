import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const tarifaArrivalGuideSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-tarifa-property-arrival-v1.0',
  pageType: 'A',
  entityKey: 'amara-family-surf',
  languages: {
    en: { title: 'Getting to AMARA Family & Surf Tarifa: garage & bus', description: 'The way to AMARA Family & Surf, Mar Adriático 29 in La Marina: underground garage with your own space, lift to the door, arriving by bus.', robots: 'noindex, follow', canonical: 'auto' },
    de: { title: 'Anfahrt zu AMARA Family & Surf Tarifa: Garage & Bus', description: 'Der Weg zu AMARA Family & Surf, Mar Adriático 29 in La Marina: Tiefgarage mit eigenem Stellplatz, Aufzug bis zur Tür, Ankunft mit dem Bus.', robots: 'noindex, follow', canonical: 'auto' },
    es: { title: 'Cómo llegar a AMARA Family & Surf Tarifa: garaje y autobús', description: 'El camino a AMARA Family & Surf, Mar Adriático 29 en La Marina: garaje subterráneo con plaza propia, ascensor hasta la puerta, llegada en autobús.', robots: 'noindex, follow', canonical: 'auto' },
    nl: { title: 'Aankomst bij AMARA Family & Surf Tarifa: garage & bus', description: 'De weg naar AMARA Family & Surf, Mar Adriático 29 in La Marina: ondergrondse garage met eigen plek, lift tot de deur, aankomst met de bus.', robots: 'noindex, follow', canonical: 'auto' },
    sv: { title: 'Vägen till AMARA Family & Surf Tarifa: garage & buss', description: 'Vägen till AMARA Family & Surf, Mar Adriático 29 i La Marina: garage med egen plats, hiss ända till dörren, ankomst med buss.', robots: 'noindex, follow', canonical: 'auto' }
  }
};

export const tarifaArrivalGuideCopy = {
  header: {
    eyebrow: l('Arrival · AMARA Family & Surf', 'Anfahrt · AMARA Family & Surf', 'Llegada · AMARA Family & Surf', 'Aankomst · AMARA Family & Surf', 'Ankomst · AMARA Family & Surf'),
    title: l('Arriving at AMARA Family & Surf', 'Ankommen bei AMARA Family & Surf', 'Llegar a AMARA Family & Surf', 'Aankomen bij AMARA Family & Surf', 'Att komma fram till AMARA Family & Surf'),
    subtitle: l('Mar Adriático 29 in La Marina, with your own space in the underground garage. From the car to the apartment door the lift does the work.', 'Mar Adriático 29 in La Marina, mit eigenem Stellplatz in der Tiefgarage. Vom Auto bis zur Wohnungstür fährt der Aufzug.', 'Mar Adriático 29 en La Marina, con plaza propia en el garaje subterráneo. Del coche a la puerta del apartamento os lleva el ascensor.', 'Mar Adriático 29 in La Marina, met eigen plek in de ondergrondse garage. Van de auto tot de deur van het appartement rijdt de lift.', 'Mar Adriático 29 i La Marina, med egen plats i garaget under huset. Från bilen till lägenhetsdörren går hissen.')
  },
  content: {
    journeyIntro: {
      title: l('From further away', 'Von weiter her', 'Desde más lejos', 'Van verder weg', 'Från längre bort'),
      text: l('This page starts in Tarifa. The N-340, airports, bus and ferry are in the travel guide, parking in town in the parking guide.', 'Diese Seite beginnt in Tarifa. N-340, Flughäfen, Bus und Fähre stehen im Anreiseguide, das Parken in der Stadt im Parkguide.', 'Esta página empieza en Tarifa. La N-340, aeropuertos, autobús y ferry están en la guía de llegada, el aparcamiento en el pueblo en la guía de parking.', 'Deze pagina begint in Tarifa. N-340, luchthavens, bus en veerboot staan in de reisgids, parkeren in de stad in de parkeergids.', 'Den här sidan börjar i Tarifa. N-340, flygplatser, buss och färja finns i reseguiden, parkeringen i stan i parkeringsguiden.'),
      cta: l('Getting to Tarifa', 'Anreise nach Tarifa', 'Cómo llegar a Tarifa', 'Aankomst in Tarifa', 'Resan till Tarifa'),
      parkingCta: l('Parking in Tarifa', 'Parken in Tarifa', 'Aparcar en Tarifa', 'Parkeren in Tarifa', 'Parkering i Tarifa')
    },
    parking: {
      title: l('Right into the underground garage', 'Bis in die Tiefgarage', 'Hasta el garaje subterráneo', 'Tot in de ondergrondse garage', 'Ända in i garaget'),
      text: l('Into the sat-nav: Mar Adriático 29, Tarifa. The complex is called Las Terrazas de la Marina. Your space in the underground garage is reserved; access and space number are in your arrival message.', 'Ins Navi: Mar Adriático 29, Tarifa. Die Wohnanlage heißt Las Terrazas de la Marina. Euer Stellplatz in der Tiefgarage ist reserviert; Zufahrt und Platznummer stehen in eurer Anreise-Nachricht.', 'En el navegador: Mar Adriático 29, Tarifa. La urbanización se llama Las Terrazas de la Marina. Vuestra plaza en el garaje está reservada; el acceso y el número de plaza están en vuestro mensaje de llegada.', 'In de navigatie: Mar Adriático 29, Tarifa. Het wooncomplex heet Las Terrazas de la Marina. Je plek in de ondergrondse garage is gereserveerd; toegang en plaatsnummer staan in je aankomstbericht.', 'I GPS:en: Mar Adriático 29, Tarifa. Bostadsområdet heter Las Terrazas de la Marina. Er plats i garaget är reserverad; infart och platsnummer står i ert ankomstmeddelande.')
    },
    walkingAccess: {
      title: l('No steps to the door', 'Ohne Stufen bis zur Tür', 'Sin escalones hasta la puerta', 'Zonder treden tot de deur', 'Utan trappsteg till dörren'),
      text: l('From the garage the lift goes right to the apartment door; outside and in the building there are no steps. Only inside the apartment does a staircase lead up to the bedrooms.', 'Von der Garage fährt der Aufzug bis vor die Wohnungstür, draußen und im Haus gibt es keine Stufen. Erst in der Wohnung führt eine Treppe hinauf zu den Schlafzimmern.', 'Desde el garaje el ascensor llega hasta la puerta del apartamento; fuera y en el edificio no hay escalones. Solo dentro de la vivienda una escalera sube a los dormitorios.', 'Vanuit de garage gaat de lift tot voor de deur van het appartement, buiten en in het gebouw zijn er geen treden. Pas in de woning leidt een trap omhoog naar de slaapkamers.', 'Från garaget går hissen ända fram till lägenhetsdörren, utomhus och i huset finns inga trappsteg. Först inne i lägenheten leder en trappa upp till sovrummen.')
    },
    arrivalTip: {
      title: l('By car or taxi', 'Mit Auto oder Taxi', 'En coche o taxi', 'Met auto of taxi', 'Med bil eller taxi'),
      text: l('Enter Mar Adriático 29 before you reach Tarifa; “Tarifa” alone leads into the old town. You are heading for the La Marina neighbourhood.\n\nBest to have the garage instructions from your message to hand before you turn into the entrance.', 'Gebt Mar Adriático 29 ein, bevor ihr in Tarifa seid; „Tarifa“ allein führt in die Altstadt. Ihr fahrt ins Viertel La Marina.\n\nDie Garagenhinweise aus eurer Nachricht liegen am besten griffbereit, bevor ihr in die Zufahrt einbiegt.', 'Poned Mar Adriático 29 antes de llegar a Tarifa; «Tarifa» a secas lleva al casco antiguo. Vais al barrio de La Marina.\n\nMejor tener a mano las indicaciones del garaje de vuestro mensaje antes de girar hacia la entrada.', 'Voer Mar Adriático 29 in voordat je in Tarifa bent; “Tarifa” alleen leidt naar de oude stad. Je rijdt naar de wijk La Marina.\n\nHoud de garage-aanwijzingen uit je bericht het best bij de hand voordat je de inrit indraait.', 'Skriv in Mar Adriático 29 innan ni är i Tarifa; bara ”Tarifa” leder in i gamla stan. Ni kör till kvarteret La Marina.\n\nHa gärna garageanvisningarna från ert meddelande till hands innan ni svänger in mot infarten.'),
      taxiNote: l('Tell the driver “Las Terrazas de la Marina, Mar Adriático 29”.', 'Nennt dem Fahrer „Las Terrazas de la Marina, Mar Adriático 29“.', 'Decidle al conductor «Las Terrazas de la Marina, Mar Adriático 29».', 'Zeg de chauffeur “Las Terrazas de la Marina, Mar Adriático 29”.', 'Säg till föraren ”Las Terrazas de la Marina, Mar Adriático 29”.')
    },
    arrivalByBus: {
      title: l('From the bus', 'Vom Bus', 'Desde el autobús', 'Vanaf de bus', 'Från bussen'),
      text: l('The coaches stop at Calle Batalla del Salado. From there, with children, boards or suitcases, best take a taxi to Mar Adriático 29; walking works too, but with luggage the taxi is more pleasant.', 'Die Fernbusse halten an der Calle Batalla del Salado. Von dort mit Kindern, Boards oder Koffern am besten ein Taxi zur Mar Adriático 29; zu Fuß geht es auch, mit Gepäck ist das Taxi angenehmer.', 'Los autobuses paran en la calle Batalla del Salado. Desde allí, con niños, tablas o maletas, lo mejor es un taxi hasta Mar Adriático 29; a pie también se puede, con equipaje el taxi es más cómodo.', 'De streekbussen stoppen aan de Calle Batalla del Salado. Van daar met kinderen, boards of koffers het best een taxi naar Mar Adriático 29; te voet kan ook, met bagage is de taxi prettiger.', 'Fjärrbussarna stannar vid Calle Batalla del Salado. Därifrån är taxi bäst med barn, brädor eller resväskor till Mar Adriático 29; till fots går också, men med bagage är taxin behagligare.')
    },
    luggageAdvice: {
      title: l('The lift', 'Der Aufzug', 'El ascensor', 'De lift', 'Hissen'),
      text: l('From the garage and from the entrance the lift goes right to the apartment door, with all your luggage.', 'Von der Garage und vom Eingang fährt der Aufzug bis vor die Wohnungstür, mit allem Gepäck.', 'Desde el garaje y desde la entrada, el ascensor llega hasta la puerta del apartamento, con todo el equipaje.', 'Vanuit de garage en vanaf de ingang gaat de lift tot voor de deur van het appartement, met alle bagage.', 'Från garaget och från entrén går hissen ända fram till lägenhetsdörren, med allt bagage.')
    },
    faq: {
      title: l('Arrival FAQ', 'FAQ zur Anreise', 'Preguntas sobre la llegada', 'FAQ over de aankomst', 'Vanliga frågor om ankomst'),
      items: {
        en: [
          { question: 'Is a parking space included?', answer: 'Yes, a reserved space in the underground garage. Access and space number are in your arrival message.' },
          { question: 'What should we enter in navigation?', answer: 'Mar Adriático 29, Tarifa. The complex is called Las Terrazas de la Marina, in the La Marina neighbourhood.' },
          { question: 'Is the route from the garage step-free?', answer: 'Yes, the lift goes right to the apartment door. The stairs to the bedrooms only begin inside the apartment.' },
          { question: 'And by bus?', answer: 'From Calle Batalla del Salado by taxi or on foot to Mar Adriático 29.' }
        ],
        de: [
          { question: 'Ist ein Parkplatz dabei?', answer: 'Ja, ein reservierter Stellplatz in der Tiefgarage. Zufahrt und Platznummer stehen in eurer Anreise-Nachricht.' },
          { question: 'Was geben wir ins Navi ein?', answer: 'Mar Adriático 29, Tarifa. Die Anlage heißt Las Terrazas de la Marina, im Viertel La Marina.' },
          { question: 'Ist der Weg von der Garage stufenfrei?', answer: 'Ja, der Aufzug fährt bis vor die Wohnungstür. Die Treppe zu den Schlafzimmern beginnt erst in der Wohnung.' },
          { question: 'Und mit dem Bus?', answer: 'Ab der Calle Batalla del Salado mit dem Taxi oder zu Fuß zur Mar Adriático 29.' }
        ],
        es: [
          { question: '¿Hay plaza de aparcamiento incluida?', answer: 'Sí, una plaza reservada en el garaje subterráneo. El acceso y el número de plaza están en vuestro mensaje de llegada.' },
          { question: '¿Qué ponemos en el navegador?', answer: 'Mar Adriático 29, Tarifa. La urbanización se llama Las Terrazas de la Marina, en el barrio de La Marina.' },
          { question: '¿El trayecto desde el garaje no tiene escalones?', answer: 'Sí, el ascensor llega hasta la puerta del apartamento. La escalera a los dormitorios empieza ya dentro de la vivienda.' },
          { question: '¿Y en autobús?', answer: 'Desde la calle Batalla del Salado, en taxi o a pie hasta Mar Adriático 29.' }
        ],
        nl: [
          { question: 'Is er een parkeerplaats bij?', answer: 'Ja, een gereserveerde plek in de ondergrondse garage. Toegang en plaatsnummer staan in je aankomstbericht.' },
          { question: 'Wat voeren we in de navigatie in?', answer: 'Mar Adriático 29, Tarifa. Het complex heet Las Terrazas de la Marina, in de wijk La Marina.' },
          { question: 'Is de route vanaf de garage zonder treden?', answer: 'Ja, de lift gaat tot voor de deur van het appartement. De trap naar de slaapkamers begint pas in de woning.' },
          { question: 'En met de bus?', answer: 'Vanaf de Calle Batalla del Salado met de taxi of te voet naar Mar Adriático 29.' }
        ],
        sv: [
          { question: 'Ingår en parkeringsplats?', answer: 'Ja, en reserverad plats i garaget under huset. Infart och platsnummer står i ert ankomstmeddelande.' },
          { question: 'Vad anger vi i navigationen?', answer: 'Mar Adriático 29, Tarifa. Anläggningen heter Las Terrazas de la Marina, i kvarteret La Marina.' },
          { question: 'Är vägen från garaget stegfri?', answer: 'Ja, hissen går ända fram till lägenhetsdörren. Trappan till sovrummen börjar först inne i lägenheten.' },
          { question: 'Och med buss?', answer: 'Från Calle Batalla del Salado med taxi eller till fots till Mar Adriático 29.' }
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
    quickContact: l('On arrival', 'Bei der Ankunft', 'Al llegar', 'Bij aankomst', 'Vid ankomsten'),
    taxi: l('Open destination', 'Ziel öffnen', 'Abrir destino', 'Bestemming openen', 'Öppna destination'),
    emergency: l('Emergency', 'Notfall', 'Emergencias', 'Noodgeval', 'Nödfall'),
    mapTitle: l('The way to AMARA Family & Surf', 'Der Weg zu AMARA Family & Surf', 'El camino a AMARA Family & Surf', 'De weg naar AMARA Family & Surf', 'Vägen till AMARA Family & Surf'),
    taxiNoteLabel: l('For the taxi', 'Fürs Taxi', 'Para el taxi', 'Voor de taxi', 'För taxin'),
    routeTitle: l('Final destination', 'Letztes Ziel', 'Destino final', 'Eindbestemming', 'Slutdestination')
  }
};

export const tarifaArrivalGuideSteps = {
  en: ['Mar Adriático 29 into the sat-nav.', 'Look out for Las Terrazas de la Marina.', 'Before the entrance, open the garage instructions from your message.', 'Into the underground garage and onto your reserved space.', 'By lift from level -1 right to the apartment door.'],
  de: ['Mar Adriático 29 ins Navi.', 'Nach Las Terrazas de la Marina Ausschau halten.', 'Vor der Zufahrt die Garagenhinweise aus eurer Nachricht öffnen.', 'In die Tiefgarage und auf euren reservierten Platz.', 'Mit dem Aufzug von Ebene -1 bis vor die Wohnungstür.'],
  es: ['Mar Adriático 29 en el navegador.', 'Buscar Las Terrazas de la Marina.', 'Antes de la entrada, abrir las indicaciones del garaje de vuestro mensaje.', 'Al garaje subterráneo y a vuestra plaza reservada.', 'En ascensor desde el nivel -1 hasta la puerta del apartamento.'],
  nl: ['Mar Adriático 29 in de navigatie.', 'Uitkijken naar Las Terrazas de la Marina.', 'Vóór de inrit de garage-aanwijzingen uit je bericht openen.', 'De ondergrondse garage in en op je gereserveerde plek.', 'Met de lift van niveau -1 tot voor de deur van het appartement.'],
  sv: ['Mar Adriático 29 i GPS:en.', 'Håll utkik efter Las Terrazas de la Marina.', 'Öppna garageanvisningarna från ert meddelande före infarten.', 'In i garaget och till er reserverade plats.', 'Med hissen från plan -1 ända fram till lägenhetsdörren.']
};

export const tarifaArrivalGuideBusRoutes = {
  en: [{ id: 'taxi', title: 'By taxi', meta: 'With children, boards or suitcases', text: 'Say “Las Terrazas de la Marina, Mar Adriático 29”; the ride ends in front of the complex.' }, { id: 'walk', title: 'On foot', meta: 'With light luggage', text: 'From the bus through town to La Marina, a first walk through Tarifa.' }],
  de: [{ id: 'taxi', title: 'Mit dem Taxi', meta: 'Mit Kindern, Boards oder Koffern', text: 'Nennt „Las Terrazas de la Marina, Mar Adriático 29“; die Fahrt endet vor der Anlage.' }, { id: 'walk', title: 'Zu Fuß', meta: 'Mit leichtem Gepäck', text: 'Vom Bus durch die Stadt nach La Marina, ein erster Spaziergang durch Tarifa.' }],
  es: [{ id: 'taxi', title: 'En taxi', meta: 'Con niños, tablas o maletas', text: 'Decid «Las Terrazas de la Marina, Mar Adriático 29»; el trayecto termina delante de la urbanización.' }, { id: 'walk', title: 'A pie', meta: 'Con poco equipaje', text: 'Del autobús por el pueblo hasta La Marina, un primer paseo por Tarifa.' }],
  nl: [{ id: 'taxi', title: 'Met de taxi', meta: 'Met kinderen, boards of koffers', text: 'Noem “Las Terrazas de la Marina, Mar Adriático 29”; de rit eindigt voor het complex.' }, { id: 'walk', title: 'Te voet', meta: 'Met lichte bagage', text: 'Van de bus door de stad naar La Marina, een eerste wandeling door Tarifa.' }],
  sv: [{ id: 'taxi', title: 'Med taxi', meta: 'Med barn, brädor eller resväskor', text: 'Säg ”Las Terrazas de la Marina, Mar Adriático 29”; resan slutar framför anläggningen.' }, { id: 'walk', title: 'Till fots', meta: 'Med lätt bagage', text: 'Från bussen genom stan till La Marina, en första promenad genom Tarifa.' }]
};
