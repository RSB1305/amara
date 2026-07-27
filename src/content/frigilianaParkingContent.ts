import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaParkingExternalLinks = {
  officialStreetMap: 'https://www.turismofrigiliana.es/es/callejero.html',
  liveParkingMap:
    'https://www.google.com/maps/search/?api=1&query=aparcamiento+publico+Frigiliana'
} as const;

export const frigilianaParkingSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-parking-v2.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Parking in Frigiliana: Where to Park',
      description:
        'Plan parking in Frigiliana with practical guidance on public parking, old-town access, luggage, and the final walk.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Parken in Frigiliana: So plant ihr die Ankunft',
      description:
        'Praktische Orientierung zu öffentlichen Parkmöglichkeiten, Altstadtzufahrt, Gepäck und dem letzten Fußweg in Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Aparcar en Frigiliana: cómo planificar la llegada',
      description:
        'Información práctica sobre aparcamiento público, acceso al casco antiguo, equipaje y el último tramo a pie en Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Parkeren in Frigiliana: plan uw aankomst',
      description:
        'Praktische uitleg over openbaar parkeren, toegang tot de oude kern, bagage en het laatste stuk lopen in Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Parkering i Frigiliana: planera ankomsten',
      description:
        'Praktisk vägledning om allmän parkering, tillträde till gamla stan, bagage och den sista promenaden i Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaParkingCopy = {
  nav: {
    brand: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
    links: [
      {
        token: 'location_frigiliana',
        label: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana')
      },
      {
        token: 'frigiliana_parking',
        label: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering')
      },
      {
        token: 'frigiliana_stairs',
        label: l(
          'Streets & stairs',
          'Gassen & Treppen',
          'Calles y escaleras',
          'Straten & trappen',
          'Gränder & trappor'
        )
      }
    ]
  },
  hero: {
    eyebrow: l(
      'Practical arrival · Frigiliana',
      'Praktische Ankunft · Frigiliana',
      'Llegada práctica · Frigiliana',
      'Praktische aankomst · Frigiliana',
      'Praktisk ankomst · Frigiliana'
    ),
    title: l(
      'Parking in Frigiliana',
      'Parken in Frigiliana',
      'Aparcar en Frigiliana',
      'Parkeren in Frigiliana',
      'Parkering i Frigiliana'
    ),
    lead: l(
      'Frigiliana has parking, but its historic hillside centre was not designed for door-to-door car access. A calm arrival starts by separating the place where you leave the car from the place where you stay.',
      'In Frigiliana gibt es Parkmöglichkeiten, doch die historische Altstadt am Hang ist nicht für eine Anfahrt bis vor jede Haustür gebaut. Eine entspannte Ankunft beginnt damit, Parkplatz und Unterkunft getrennt zu planen.',
      'Frigiliana dispone de aparcamiento, pero su casco histórico en ladera no está pensado para llegar en coche hasta cada puerta. Una llegada tranquila empieza por planificar por separado dónde dejar el coche y dónde está el alojamiento.',
      'Frigiliana heeft parkeermogelijkheden, maar de historische kern tegen de heuvel is niet ontworpen voor toegang met de auto tot aan iedere voordeur. Een ontspannen aankomst begint door parkeerplek en verblijf apart te plannen.',
      'Det finns parkering i Frigiliana, men den historiska bykärnan på sluttningen är inte byggd för biltrafik ända fram till varje dörr. En lugn ankomst börjar med att planera parkering och boende som två olika platser.'
    ),
    body: l(
      'Expect to use signed public or permitted street parking around the lower or outer village, then complete the final section on foot. On arrival, current road signs always take priority over old screenshots or saved instructions.',
      'Rechnet damit, einen ausgeschilderten öffentlichen Parkplatz oder einen erlaubten Stellplatz im unteren beziehungsweise äußeren Ortsbereich zu nutzen und den letzten Abschnitt zu Fuß zurückzulegen. Vor Ort gilt immer die aktuelle Beschilderung – nicht ein alter Screenshot oder eine gespeicherte Wegbeschreibung.',
      'Contad con utilizar un aparcamiento público señalizado o una plaza permitida en la zona baja o exterior del pueblo y completar el último tramo a pie. Al llegar, la señalización actual siempre tiene prioridad sobre capturas o indicaciones antiguas.',
      'Houd rekening met een aangegeven openbare parking of toegestane plek in het lagere of buitenste deel van het dorp en leg het laatste stuk te voet af. Actuele verkeersborden gaan bij aankomst altijd vóór oude screenshots of opgeslagen aanwijzingen.',
      'Räkna med skyltad allmän parkering eller tillåten gatuparkering i den nedre eller yttre delen av byn och gå den sista sträckan. Aktuell skyltning på plats gäller alltid före gamla skärmbilder eller sparade anvisningar.'
    ),
    primaryCta: l(
      'Compare parking options',
      'Parkmöglichkeiten vergleichen',
      'Comparar opciones',
      'Vergelijk parkeeropties',
      'Jämför parkeringsalternativ'
    ),
    secondaryCta: l(
      'Understand the final walk',
      'Den letzten Fußweg verstehen',
      'Entender el último tramo',
      'Begrijp het laatste stuk',
      'Förstå den sista promenaden'
    ),
    imageAlt: l(
      'Approach to the white hillside village of Frigiliana',
      'Zufahrt zum weißen Hangdorf Frigiliana',
      'Acceso al pueblo blanco de Frigiliana',
      'Toegangsweg tot het witte heuveldorp Frigiliana',
      'Infarten till den vita bergsbyn Frigiliana'
    )
  },
  facts: {
    title: l(
      'What to expect before you arrive',
      'Was ihr vor der Ankunft wissen solltet',
      'Qué conviene saber antes de llegar',
      'Wat u vóór aankomst kunt verwachten',
      'Vad ni bör veta före ankomst'
    ),
    items: [
      {
        label: l('Historic centre', 'Historische Altstadt', 'Casco histórico', 'Historische kern', 'Historisk kärna'),
        value: l('Narrow & regulated', 'Eng & reguliert', 'Estrecho y regulado', 'Smal & gereguleerd', 'Smalt & reglerat'),
        note: l(
          'Do not assume that you can drive to, stop at, or park beside an old-town address.',
          'Geht nicht davon aus, dass ihr eine Altstadtadresse direkt anfahren, dort halten oder daneben parken könnt.',
          'No deis por hecho que podréis llegar en coche, parar o aparcar junto a una dirección del casco antiguo.',
          'Ga er niet van uit dat u tot een adres in de oude kern kunt rijden, daar kunt stoppen of ernaast kunt parkeren.',
          'Utgå inte från att ni kan köra till, stanna vid eller parkera bredvid en adress i gamla stan.'
        )
      },
      {
        label: l('Visitor parking', 'Besucherparkplätze', 'Aparcamiento de visitantes', 'Bezoekersparkeren', 'Besöksparkering'),
        value: l('Follow live signs', 'Aktuellen Schildern folgen', 'Seguid las señales', 'Volg actuele borden', 'Följ aktuell skyltning'),
        note: l(
          'Availability, restrictions, fees, and access can change. Decide from the signs you see on arrival.',
          'Verfügbarkeit, Einschränkungen, Gebühren und Zufahrt können sich ändern. Entscheidet anhand der Beschilderung bei eurer Ankunft.',
          'La disponibilidad, las restricciones, las tarifas y el acceso pueden cambiar. Decidid según la señalización que encontréis al llegar.',
          'Beschikbaarheid, beperkingen, tarieven en toegang kunnen wijzigen. Beslis aan de hand van de borden bij aankomst.',
          'Tillgänglighet, begränsningar, avgifter och infart kan ändras. Utgå från skyltningen när ni anländer.'
        )
      },
      {
        label: l('Final section', 'Letzter Abschnitt', 'Último tramo', 'Laatste stuk', 'Sista sträckan'),
        value: l('Usually on foot', 'Meist zu Fuß', 'Normalmente a pie', 'Meestal te voet', 'Vanligen till fots'),
        note: l(
          'The route may include gradients, cobbles, or steps, so include luggage and mobility in the plan.',
          'Der Weg kann Steigungen, Pflaster oder Stufen enthalten. Denkt deshalb Gepäck und Mobilität mit.',
          'La ruta puede incluir cuestas, empedrado o escalones, por lo que conviene contar con el equipaje y la movilidad.',
          'De route kan hellingen, kasseien of trappen bevatten. Neem bagage en mobiliteit dus mee in de planning.',
          'Vägen kan innehålla lutningar, stenläggning eller trappor. Ta därför med bagage och rörlighet i planeringen.'
        )
      }
    ]
  },
  options: {
    eyebrow: l('Parking strategy', 'Parkstrategie', 'Estrategia de aparcamiento', 'Parkeerstrategie', 'Parkeringsstrategi'),
    title: l(
      'Three realistic ways to handle the car',
      'Drei realistische Wege, mit dem Auto umzugehen',
      'Tres formas realistas de gestionar el coche',
      'Drie realistische manieren om met de auto om te gaan',
      'Tre realistiska sätt att hantera bilen'
    ),
    intro: l(
      'The best option depends on the current signs and the exact access to your accommodation. These are practical categories, not guaranteed spaces.',
      'Welche Option am besten passt, hängt von der aktuellen Beschilderung und dem genauen Zugang zur Unterkunft ab. Das sind praktische Kategorien, keine garantierten Stellplätze.',
      'La mejor opción depende de la señalización actual y del acceso exacto al alojamiento. Son categorías prácticas, no plazas garantizadas.',
      'De beste optie hangt af van de actuele borden en de exacte toegang tot uw verblijf. Dit zijn praktische categorieën, geen gegarandeerde parkeerplaatsen.',
      'Det bästa alternativet beror på aktuell skyltning och den exakta vägen till boendet. Detta är praktiska kategorier, inte garanterade platser.'
    ),
    labels: {
      bestFor: l('Best for', 'Sinnvoll für', 'Adecuado para', 'Geschikt voor', 'Passar för'),
      remember: l('Remember', 'Wichtig', 'Recordad', 'Onthoud', 'Tänk på')
    },
    items: [
      {
        number: '01',
        title: l(
          'Signed public parking',
          'Ausgeschildertes öffentliches Parken',
          'Aparcamiento público señalizado',
          'Aangegeven openbaar parkeren',
          'Skyltad allmän parkering'
        ),
        summary: l(
          'Look for current visitor-parking signs around Plaza de las Tres Culturas and the lower village. This is usually the clearest starting point for a first visit.',
          'Achtet rund um die Plaza de las Tres Culturas und im unteren Ort auf die aktuelle Besucherparkplatz-Beschilderung. Für den ersten Besuch ist das meist der klarste Ausgangspunkt.',
          'Buscad la señalización actual para visitantes en torno a la Plaza de las Tres Culturas y la zona baja. Suele ser el punto de partida más claro para una primera visita.',
          'Let op actuele bezoekersborden rond Plaza de las Tres Culturas en in het lagere dorp. Dit is meestal het duidelijkste vertrekpunt voor een eerste bezoek.',
          'Leta efter aktuell besöksskyltning kring Plaza de las Tres Culturas och den nedre byn. Det är oftast den tydligaste utgångspunkten vid ett första besök.'
        ),
        bestFor: l(
          'A simple, sign-led arrival without trying to enter the historic lanes.',
          'Eine einfache Ankunft nach Beschilderung, ohne in die historischen Gassen hineinzufahren.',
          'Una llegada sencilla siguiendo las señales, sin intentar entrar en las calles históricas.',
          'Een eenvoudige aankomst via de bewegwijzering, zonder de historische straatjes in te rijden.',
          'En enkel ankomst enligt skyltningen utan att försöka köra in i de historiska gränderna.'
        ),
        remember: l(
          'Check the displayed terms, height limits, opening access, and payment information before leaving the car.',
          'Prüft vor dem Abstellen die vor Ort angegebenen Bedingungen, Höhenbegrenzungen, Zufahrt und Zahlungsinformationen.',
          'Comprobad las condiciones indicadas, el límite de altura, el acceso y la información de pago antes de dejar el coche.',
          'Controleer vóór het parkeren de aangegeven voorwaarden, hoogtebeperking, toegang en betaalinformatie.',
          'Kontrollera angivna villkor, höjdbegränsning, infart och betalningsinformation innan ni lämnar bilen.'
        )
      },
      {
        number: '02',
        title: l(
          'Permitted street or outer-village parking',
          'Erlaubtes Parken am Straßenrand oder Ortsrand',
          'Aparcamiento permitido en calle o periferia',
          'Toegestaan parkeren langs straat of dorpsrand',
          'Tillåten parkering längs gata eller i utkanten'
        ),
        summary: l(
          'Legal spaces may be available along approach roads or around the outer village. Only use clearly permitted places and read every restriction.',
          'Entlang der Zufahrtsstraßen oder am Ortsrand können erlaubte Stellplätze verfügbar sein. Nutzt nur eindeutig zulässige Plätze und beachtet jede Einschränkung.',
          'Puede haber plazas legales en las vías de acceso o en la periferia. Utilizad solo lugares claramente permitidos y leed todas las restricciones.',
          'Langs toegangswegen of aan de dorpsrand kunnen legale plekken beschikbaar zijn. Gebruik alleen duidelijk toegestane plaatsen en lees iedere beperking.',
          'Lagliga platser kan finnas längs infartsvägar eller i byns utkant. Använd bara tydligt tillåtna platser och läs alla begränsningar.'
        ),
        bestFor: l(
          'Drivers who are comfortable checking signs and walking farther if necessary.',
          'Fahrerinnen und Fahrer, die Beschilderung sicher prüfen und bei Bedarf weiter laufen können.',
          'Conductores que sepan interpretar la señalización y puedan caminar algo más si hace falta.',
          'Bestuurders die borden goed kunnen beoordelen en zo nodig wat verder kunnen lopen.',
          'Förare som kan tolka skyltningen och gå en längre sträcka vid behov.'
        ),
        remember: l(
          'Never block entrances, narrow turning areas, pedestrian routes, or emergency access.',
          'Blockiert niemals Einfahrten, enge Wendebereiche, Fußwege oder Rettungszufahrten.',
          'No bloqueéis entradas, zonas estrechas de giro, recorridos peatonales ni accesos de emergencia.',
          'Blokkeer nooit ingangen, smalle keerruimtes, voetgangersroutes of toegang voor hulpdiensten.',
          'Blockera aldrig infarter, smala vändytor, gångvägar eller räddningsvägar.'
        )
      },
      {
        number: '03',
        title: l(
          'Confirmed luggage drop-off',
          'Bestätigter Gepäck-Ausstiegspunkt',
          'Punto de bajada confirmado para equipaje',
          'Bevestigd afzetpunt voor bagage',
          'Bekräftad avlämning för bagage'
        ),
        summary: l(
          'Some accommodations can give an exact, legal point for a brief luggage drop-off. Use it only when the host has confirmed the route and current access.',
          'Manche Unterkünfte können einen genauen, erlaubten Punkt zum kurzen Ausladen nennen. Nutzt ihn nur, wenn der Gastgeber Route und aktuelle Zufahrt bestätigt hat.',
          'Algunos alojamientos pueden indicar un punto exacto y permitido para bajar el equipaje. Utilizadlo solo si el anfitrión ha confirmado la ruta y el acceso actual.',
          'Sommige verblijven kunnen een exact, toegestaan punt geven om kort bagage uit te laden. Gebruik dit alleen als de host de route en actuele toegang heeft bevestigd.',
          'Vissa boenden kan ange en exakt och tillåten plats för kort avlastning. Använd den bara när värden har bekräftat vägen och aktuell tillgänglighet.'
        ),
        bestFor: l(
          'Heavy luggage, children, or guests who need to minimise the carrying distance.',
          'Schweres Gepäck, Kinder oder Gäste, die den Trageweg möglichst kurz halten müssen.',
          'Equipaje pesado, niños o personas que necesiten reducir al mínimo la distancia cargando.',
          'Zware bagage, kinderen of gasten die de draagafstand zo kort mogelijk moeten houden.',
          'Tungt bagage, barn eller gäster som behöver minimera bärsträckan.'
        ),
        remember: l(
          'A drop-off point is not a parking promise. One person may need to continue to the parking area afterwards.',
          'Ein Ausstiegspunkt ist keine Parkzusage. Eine Person muss das Auto anschließend möglicherweise zum Parkplatz bringen.',
          'Un punto de bajada no garantiza aparcamiento. Después, una persona quizá tenga que llevar el coche a la zona de estacionamiento.',
          'Een afzetpunt is geen parkeerbelofte. Iemand moet de auto daarna mogelijk naar de parkeerzone brengen.',
          'En avlämningsplats är ingen parkeringsgaranti. En person kan behöva köra vidare till parkeringen efteråt.'
        )
      }
    ]
  },
  arrival: {
    title: l(
      'A calm arrival in four steps',
      'Entspannt ankommen in vier Schritten',
      'Una llegada tranquila en cuatro pasos',
      'Rustig aankomen in vier stappen',
      'En lugn ankomst i fyra steg'
    ),
    steps: [
      {
        num: '01',
        title: l('Check the exact address', 'Genaue Adresse prüfen', 'Comprobad la dirección exacta', 'Controleer het exacte adres', 'Kontrollera den exakta adressen'),
        text: l(
          'Before departure, ask whether your accommodation provides a current route or legal drop-off point.',
          'Fragt vor der Abfahrt, ob eure Unterkunft eine aktuelle Route oder einen erlaubten Ausstiegspunkt nennt.',
          'Antes de salir, preguntad si el alojamiento facilita una ruta actual o un punto legal de bajada.',
          'Vraag vóór vertrek of uw verblijf een actuele route of toegestaan afzetpunt geeft.',
          'Fråga före avresa om boendet har en aktuell väg eller tillåten avlämningsplats.'
        )
      },
      {
        num: '02',
        title: l('Follow signs on arrival', 'Vor Ort den Schildern folgen', 'Seguid las señales al llegar', 'Volg borden bij aankomst', 'Följ skyltarna vid ankomst'),
        text: l(
          'Use current parking and traffic signs rather than forcing navigation to the front door.',
          'Orientiert euch an der aktuellen Park- und Verkehrsbeschilderung, statt die Navigation bis vor die Haustür zu erzwingen.',
          'Seguid la señalización actual de tráfico y aparcamiento en vez de obligar al navegador a llegar hasta la puerta.',
          'Volg actuele parkeer- en verkeersborden in plaats van de navigatie tot aan de voordeur te forceren.',
          'Följ aktuell parkerings- och trafikskyltning i stället för att tvinga navigeringen ända fram till dörren.'
        )
      },
      {
        num: '03',
        title: l('Unload only where permitted', 'Nur erlaubt ausladen', 'Descargad solo donde esté permitido', 'Laad alleen uit waar toegestaan', 'Lasta av bara där det är tillåtet'),
        text: l(
          'Keep narrow roads and entrances clear. If no legal drop-off exists, park first and carry luggage from there.',
          'Haltet enge Straßen und Einfahrten frei. Gibt es keinen erlaubten Ausstiegspunkt, parkt zuerst und tragt das Gepäck von dort.',
          'Dejad libres las calles estrechas y las entradas. Si no hay un punto legal de bajada, aparcad primero y llevad el equipaje desde allí.',
          'Houd smalle wegen en ingangen vrij. Is er geen toegestaan afzetpunt, parkeer dan eerst en draag de bagage vanaf daar.',
          'Håll smala vägar och infarter fria. Om ingen tillåten avlämning finns, parkera först och bär bagaget därifrån.'
        )
      },
      {
        num: '04',
        title: l('Save the parking position', 'Parkposition speichern', 'Guardad la ubicación del coche', 'Bewaar de parkeerlocatie', 'Spara bilens position'),
        text: l(
          'Mark the car location on your phone and photograph any restriction or closing information you need for the return.',
          'Markiert den Standort im Handy und fotografiert alle Einschränkungen oder Schließinformationen, die ihr für die Rückkehr braucht.',
          'Guardad la ubicación en el móvil y fotografiad las restricciones o información de cierre que necesitéis para volver.',
          'Markeer de auto op uw telefoon en fotografeer beperkingen of sluitingsinformatie die u voor de terugweg nodig hebt.',
          'Markera bilen i telefonen och fotografera begränsningar eller stängningsinformation som behövs inför återkomsten.'
        )
      }
    ],
    faqTitle: l(
      'Parking questions',
      'Fragen zum Parken',
      'Preguntas sobre aparcamiento',
      'Vragen over parkeren',
      'Frågor om parkering'
    ),
    faq: [
      {
        question: l(
          'Can I park in Frigiliana old town?',
          'Kann ich in Frigilianas Altstadt parken?',
          '¿Puedo aparcar en el casco antiguo?',
          'Kan ik in de oude kern parkeren?',
          'Kan jag parkera i gamla stan?'
        ),
        answer: l(
          'Do not plan on it as a visitor. Historic streets are narrow and traffic is regulated. Follow current access and parking signs and use a legal visitor option outside the restricted lanes.',
          'Plant das als Besucher nicht ein. Die historischen Gassen sind eng und der Verkehr ist reguliert. Folgt der aktuellen Zufahrts- und Parkbeschilderung und nutzt eine erlaubte Besucheroption außerhalb der eingeschränkten Gassen.',
          'No lo planifiquéis como visitantes. Las calles históricas son estrechas y el tráfico está regulado. Seguid las señales actuales de acceso y aparcamiento y utilizad una opción legal fuera de las calles restringidas.',
          'Plan hier als bezoeker niet op. De historische straatjes zijn smal en verkeer is gereguleerd. Volg actuele toegangs- en parkeerborden en gebruik een legale bezoekersoptie buiten de beperkte straten.',
          'Planera inte för det som besökare. De historiska gränderna är smala och trafiken reglerad. Följ aktuell tillträdes- och parkeringsskyltning och använd ett lagligt besöksalternativ utanför de begränsade gränderna.'
        )
      },
      {
        question: l(
          'Is parking free?',
          'Ist das Parken kostenlos?',
          '¿El aparcamiento es gratuito?',
          'Is parkeren gratis?',
          'Är parkeringen gratis?'
        ),
        answer: l(
          'That depends on the exact facility or street and can change. Read the terms shown at the space or entrance; do not rely on an old online price.',
          'Das hängt vom jeweiligen Parkplatz oder Straßenabschnitt ab und kann sich ändern. Lest die Bedingungen am Stellplatz oder an der Einfahrt und verlasst euch nicht auf einen alten Online-Preis.',
          'Depende de la instalación o calle concreta y puede cambiar. Leed las condiciones indicadas en la plaza o entrada y no confiéis en un precio antiguo publicado en internet.',
          'Dat hangt af van de exacte faciliteit of straat en kan veranderen. Lees de voorwaarden bij de plek of ingang en vertrouw niet op een oude onlineprijs.',
          'Det beror på den exakta anläggningen eller gatan och kan ändras. Läs villkoren vid platsen eller infarten och lita inte på ett gammalt pris på nätet.'
        )
      },
      {
        question: l(
          'Is there a public car park?',
          'Gibt es einen öffentlichen Parkplatz?',
          '¿Hay aparcamiento público?',
          'Is er een openbare parking?',
          'Finns det allmän parkering?'
        ),
        answer: l(
          'Visitor parking is signposted around the lower village, including the Plaza de las Tres Culturas area. Facilities, availability, access, and terms can change, so confirm them from the live signs when you arrive.',
          'Im unteren Ort ist Besucherparken ausgeschildert, unter anderem im Bereich der Plaza de las Tres Culturas. Anlagen, Verfügbarkeit, Zufahrt und Bedingungen können sich ändern; prüft sie deshalb bei der Ankunft anhand der aktuellen Schilder.',
          'Hay aparcamiento para visitantes señalizado en la zona baja, incluido el entorno de la Plaza de las Tres Culturas. Las instalaciones, la disponibilidad, el acceso y las condiciones pueden cambiar; comprobadlos en la señalización al llegar.',
          'In het lagere dorp staat bezoekersparkeren aangegeven, onder meer rond Plaza de las Tres Culturas. Faciliteiten, beschikbaarheid, toegang en voorwaarden kunnen veranderen; controleer ze daarom bij aankomst op de actuele borden.',
          'Besöksparkering är skyltad i den nedre byn, bland annat kring Plaza de las Tres Culturas. Anläggningar, tillgänglighet, infart och villkor kan ändras; kontrollera därför aktuell skyltning vid ankomst.'
        )
      },
      {
        question: l(
          'What if I have heavy luggage or limited mobility?',
          'Was ist bei schwerem Gepäck oder eingeschränkter Mobilität?',
          '¿Qué hago si llevo equipaje pesado o tengo movilidad reducida?',
          'Wat bij zware bagage of beperkte mobiliteit?',
          'Vad gäller vid tungt bagage eller nedsatt rörlighet?'
        ),
        answer: l(
          'Ask the accommodation for an exact, legal drop-off point and for precise details about the route from there or from parking to the door. General village advice is not specific enough for accessibility decisions.',
          'Bittet die Unterkunft um einen genauen, erlaubten Ausstiegspunkt und präzise Angaben zum Weg von dort beziehungsweise vom Parkplatz bis zur Tür. Allgemeine Ortsinformationen reichen für Entscheidungen zur Zugänglichkeit nicht aus.',
          'Pedid al alojamiento un punto exacto y legal para bajar y detalles precisos sobre el recorrido desde allí o desde el aparcamiento hasta la puerta. La información general del pueblo no basta para decidir sobre accesibilidad.',
          'Vraag het verblijf om een exact, toegestaan afzetpunt en precieze informatie over de route vanaf daar of de parkeerplek tot aan de deur. Algemene dorpsinformatie is niet specifiek genoeg voor toegankelijkheidsbeslissingen.',
          'Be boendet om en exakt och tillåten avlämningsplats samt precisa uppgifter om vägen därifrån eller från parkeringen till dörren. Allmän byinformation räcker inte för beslut om tillgänglighet.'
        )
      }
    ]
  },
  timing: {
    eyebrow: l('Busy moments', 'Belebte Zeiten', 'Momentos de mayor afluencia', 'Drukke momenten', 'Intensiva tider'),
    title: l(
      'Give the arrival a time buffer',
      'Plant für die Ankunft einen Zeitpuffer ein',
      'Dejad margen de tiempo para llegar',
      'Plan extra tijd voor aankomst',
      'Lägg in tidsmarginal vid ankomst'
    ),
    body: l(
      'Parking can take longer during weekends, holidays, local events, and the busiest visiting hours. Arriving with daylight and without a tightly timed reservation immediately afterwards makes it easier to read signs, find a legal space, and complete the walk calmly.',
      'An Wochenenden, Feiertagen, bei lokalen Veranstaltungen und zu den stärksten Besuchszeiten kann die Parkplatzsuche länger dauern. Wenn ihr bei Tageslicht und ohne direkt anschließenden engen Termin ankommt, könnt ihr Schilder ruhiger lesen, einen erlaubten Platz finden und den Fußweg entspannt zurücklegen.',
      'Encontrar aparcamiento puede llevar más tiempo durante fines de semana, festivos, eventos locales y las horas de mayor afluencia. Llegar con luz y sin una reserva con horario ajustado justo después facilita leer las señales, encontrar una plaza legal y completar el recorrido con calma.',
      'Parkeren kan langer duren in weekenden, op feestdagen, tijdens lokale evenementen en op de drukste bezoekuren. Bij daglicht en zonder direct aansluitende strakke reservering hebt u meer rust om borden te lezen, een legale plek te vinden en het laatste stuk te lopen.',
      'Parkering kan ta längre tid under helger, högtider, lokala evenemang och de mest intensiva besökstiderna. Ankomst i dagsljus och utan en snäv bokning direkt efteråt gör det lättare att läsa skyltar, hitta en laglig plats och gå sista sträckan i lugn och ro.'
    ),
    imageAlt: l(
      'Road and white houses on the approach to Frigiliana',
      'Straße und weiße Häuser bei der Zufahrt nach Frigiliana',
      'Carretera y casas blancas al llegar a Frigiliana',
      'Weg en witte huizen bij de toegang tot Frigiliana',
      'Väg och vita hus vid infarten till Frigiliana'
    )
  },
  walk: {
    title: l(
      'The final walk is part of the parking plan',
      'Der letzte Fußweg gehört zur Parkplanung',
      'El último tramo a pie forma parte del plan',
      'Het laatste stuk lopen hoort bij het parkeerplan',
      'Den sista promenaden ingår i parkeringsplanen'
    ),
    body: l(
      'The closest space on a map is not always the easiest route. Gradient, cobbles, steps, luggage, and the return after dark can matter more than a few extra metres.',
      'Der auf der Karte nächste Stellplatz bietet nicht immer den leichtesten Weg. Steigung, Pflaster, Stufen, Gepäck und der Rückweg im Dunkeln können wichtiger sein als ein paar zusätzliche Meter.',
      'La plaza más cercana en el mapa no siempre ofrece el recorrido más fácil. La pendiente, el empedrado, los escalones, el equipaje y la vuelta de noche pueden importar más que unos metros adicionales.',
      'De dichtstbijzijnde plek op de kaart geeft niet altijd de eenvoudigste route. Helling, kasseien, trappen, bagage en de terugweg in het donker kunnen belangrijker zijn dan een paar extra meter.',
      'Den närmaste platsen på kartan ger inte alltid den enklaste vägen. Lutning, stenläggning, trappor, bagage och hemvägen i mörker kan vara viktigare än några extra meter.'
    ),
    cta: l(
      'Read the streets & stairs guide',
      'Guide zu Gassen & Treppen lesen',
      'Leer la guía de calles y escaleras',
      'Lees de gids over straten en trappen',
      'Läs guiden om gränder och trappor'
    )
  },
  liveInfo: {
    eyebrow: l('Live information', 'Aktuelle Informationen', 'Información actual', 'Actuele informatie', 'Aktuell information'),
    title: l(
      'Use the map to orientate — and the signs to decide',
      'Nutzt die Karte zur Orientierung – und die Schilder zur Entscheidung',
      'Usad el mapa para orientaros y las señales para decidir',
      'Gebruik de kaart voor oriëntatie en de borden voor uw beslissing',
      'Använd kartan för orientering och skyltarna för beslut'
    ),
    intro: l(
      'The official street map helps you understand the old and new village. A live map search can locate nearby parking, but neither replaces the restrictions and terms displayed on site.',
      'Der offizielle Ortsplan hilft, Alt- und Neuort zu verstehen. Eine aktuelle Kartensuche kann Parkmöglichkeiten in der Nähe zeigen, ersetzt aber ebenso wenig wie der Ortsplan die Beschränkungen und Bedingungen vor Ort.',
      'El callejero oficial ayuda a entender el casco histórico y la zona nueva. Una búsqueda actual puede localizar aparcamientos cercanos, pero ni el mapa ni la búsqueda sustituyen las restricciones y condiciones indicadas en el lugar.',
      'De officiële stratenkaart helpt om de oude en nieuwe kern te begrijpen. Een actuele kaartzoekopdracht kan parkeren in de buurt tonen, maar geen van beide vervangt de beperkingen en voorwaarden ter plaatse.',
      'Den officiella gatukartan hjälper er att förstå den gamla och nya bydelen. En aktuell kartsökning kan visa närliggande parkering, men varken kartan eller sökningen ersätter begränsningar och villkor på plats.'
    ),
    checked: l(
      'Editorial check · July 2026',
      'Redaktionell geprüft · Juli 2026',
      'Revisión editorial · julio de 2026',
      'Redactioneel gecontroleerd · juli 2026',
      'Redaktionellt kontrollerad · juli 2026'
    ),
    links: [
      {
        key: 'officialStreetMap',
        label: l('Official Frigiliana street map', 'Offizieller Ortsplan Frigiliana', 'Callejero oficial de Frigiliana', 'Officiële stratenkaart van Frigiliana', 'Officiell gatukarta över Frigiliana'),
        text: l(
          'Tourism map for the historic and new parts of the village.',
          'Tourismuskarte für den historischen und den neueren Ortsteil.',
          'Mapa turístico del casco histórico y la zona nueva.',
          'Toeristische kaart van de historische en nieuwe kern.',
          'Turistkarta över den historiska och den nya bydelen.'
        )
      },
      {
        key: 'liveParkingMap',
        label: l('Open live parking search', 'Aktuelle Parkplatzsuche öffnen', 'Abrir búsqueda actual de aparcamiento', 'Open actuele parkeerzoekopdracht', 'Öppna aktuell parkeringssökning'),
        text: l(
          'Use for orientation, then confirm every rule from the signs on site.',
          'Zur Orientierung nutzen und anschließend jede Regel anhand der Schilder vor Ort prüfen.',
          'Utilizadla para orientaros y confirmad después cada norma en la señalización del lugar.',
          'Gebruik dit voor oriëntatie en bevestig daarna iedere regel op de borden ter plaatse.',
          'Använd den för orientering och bekräfta sedan varje regel på skyltningen på plats.'
        )
      }
    ]
  },
  related: {
    title: l('Continue planning', 'Weiter planen', 'Seguid planificando', 'Plan verder', 'Fortsätt planera'),
    links: [
      {
        token: 'frigiliana_stairs',
        label: l('Streets, slopes & stairs', 'Gassen, Steigungen & Treppen', 'Calles, cuestas y escaleras', 'Straten, hellingen & trappen', 'Gränder, lutningar & trappor')
      },
      {
        token: 'getting_to_frigiliana',
        label: l('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Resa till Frigiliana')
      },
      {
        token: 'arrival_guide',
        label: l('Arrival at AMARA', 'Ankunft bei AMARA', 'Llegada a AMARA', 'Aankomst bij AMARA', 'Ankomst till AMARA')
      },
      {
        token: 'location_frigiliana',
        label: l('Frigiliana guide', 'Frigiliana-Guide', 'Guía de Frigiliana', 'Frigiliana-gids', 'Frigiliana-guide')
      }
    ]
  },
  closing: {
    title: l(
      'Park legally. Arrive without rushing.',
      'Legal parken. Ohne Eile ankommen.',
      'Aparcad legalmente. Llegad sin prisas.',
      'Parkeer legaal. Kom zonder haast aan.',
      'Parkera lagligt. Anländ utan stress.'
    ),
    lead: l(
      'A few minutes of preparation turn Frigiliana’s unusual street structure from a surprise into a manageable part of the journey.',
      'Ein paar Minuten Vorbereitung machen Frigilianas besondere Straßenstruktur von einer Überraschung zu einem gut planbaren Teil der Reise.',
      'Unos minutos de preparación convierten la particular estructura de las calles de Frigiliana en una parte manejable del viaje, no en una sorpresa.',
      'Een paar minuten voorbereiding maken van Frigiliana’s bijzondere stratenstructuur een beheersbaar deel van de reis in plaats van een verrassing.',
      'Några minuters förberedelse gör Frigilianas ovanliga gatustruktur till en hanterbar del av resan i stället för en överraskning.'
    ),
    streetsCta: l(
      'Understand the final walk',
      'Den letzten Fußweg verstehen',
      'Entender el último tramo',
      'Begrijp het laatste stuk',
      'Förstå den sista promenaden'
    ),
    gettingHereCta: l(
      'Plan the journey',
      'Anreise planen',
      'Planificar el viaje',
      'Plan de reis',
      'Planera resan'
    )
  }
} as const;
