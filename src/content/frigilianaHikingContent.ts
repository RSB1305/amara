import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList, Resolved } from '../types/content';
import { resolveLocale } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';
import { routeOgImage } from '../lib/images/routeImages';

const text = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

const textList = (
  en: string[],
  de: string[],
  es: string[],
  nl: string[],
  sv: string[]
): LocalizedTextList => ({ en, de, es, nl, sv });

interface HikingRouteSection {
  id: 'village-routes' | 'mountain-routes';
  title: LocalizedText;
  intro: LocalizedText;
  /** Recommendation record ids; the route cards are built from the place copy (DR-GUEST-006). */
  routeIds: readonly string[];
}

interface HikingContextLink {
  id: 'after-the-walk' | 'dates' | 'restaurants' | 'location';
  token: LinkToken;
  title: LocalizedText;
  text: LocalizedText;
  label: LocalizedText;
}

export const frigilianaHikingContent = {
  routeCardLabels: {
    statsAriaLabel: text('Route essentials', 'Eckdaten der Route', 'Datos de la ruta', 'Routegegevens', 'Turens fakta'),
    duration: text('Duration', 'Dauer', 'Duración', 'Duur', 'Tid'),
    elevationGain: text('Elevation gain', 'Höhenmeter', 'Desnivel positivo', 'Hoogtemeters', 'Höjdmeter'),
    distance: text('Distance', 'Distanz', 'Distancia', 'Afstand', 'Distans'),
    difficulty: text('Difficulty', 'Schwierigkeit', 'Dificultad', 'Moeilijkheid', 'Svårighetsgrad'),
    experience: text('Why choose it', 'Warum diese Route', 'Por qué elegirla', 'Waarom deze route', 'Varför välja den')
  },
  footerHighlights: {
    hiking: text('Hiking & nature', 'Wandern & Natur', 'Senderismo y naturaleza', 'Wandelen & natuur', 'Vandring & natur'),
    guide: text('Frigiliana guide', 'Frigiliana Guide', 'Guía de Frigiliana', 'Frigiliana-gids', 'Guide till Frigiliana'),
    stays: stayCollectionLabels.structuralName
  },
  hero: {
    kicker: text('Four routes, chosen with care', 'Vier sorgfältig ausgewählte Routen', 'Cuatro rutas elegidas con criterio', 'Vier zorgvuldig gekozen routes', 'Fyra noggrant valda turer'),
    title: text(
      'Hiking around Frigiliana',
      'Wandern rund um Frigiliana',
      'Senderismo en Frigiliana',
      'Wandelen rond Frigiliana',
      'Vandring runt Frigiliana'
    ),
    subtitle: text(
      'Four routes worth planning',
      'Vier Routen, die sich lohnen',
      'Cuatro rutas que merece la pena planear',
      'Vier routes om goed te plannen',
      'Fyra turer att planera'
    ),
    paragraphs: textList(
      [
        'A hiking day from Frigiliana: the loop to Cruz de Pinto with views over village and sea, the Río Higuerón with its cahorros, the long climb up El Fuerte or the GR 249 stage to Cómpeta. Four very different days; start, track and navigation come from the official hiking guide and from Komoot.',
        'Casa AMARA stands in the middle of the village; to the starting points you walk a few minutes through the lanes or drive a short way.'
      ],
      [
        'Ein Wandertag ab Frigiliana: der Rundweg zur Cruz de Pinto mit Blick über Dorf und Meer, der Río Higuerón mit seinen Cahorros, der lange Aufstieg auf den El Fuerte oder die Etappe des GR 249 bis Cómpeta. Vier sehr verschiedene Tage; Start, Track und Navigation kommen vom offiziellen Wanderführer und von Komoot.',
        'Casa AMARA steht mitten im Dorf; zu den Startpunkten geht ihr ein paar Minuten durch die Gassen oder fahrt ein Stück mit dem Auto.'
      ],
      [
        'Un día de senderismo desde Frigiliana: el circuito a la Cruz de Pinto con vistas al pueblo y al mar, el río Higuerón con sus cahorros, la larga subida a El Fuerte o la etapa del GR 249 hasta Cómpeta. Cuatro días muy distintos; salida, track y navegación vienen de la guía oficial de senderos y de Komoot.',
        'Casa AMARA está en pleno pueblo; hasta los puntos de salida andáis unos minutos por las callejuelas o conducís un trecho.'
      ],
      [
        'Een wandeldag vanuit Frigiliana: de ronde naar Cruz de Pinto met uitzicht over dorp en zee, de Río Higuerón met zijn cahorros, de lange klim naar El Fuerte of de etappe van de GR 249 naar Cómpeta. Vier heel verschillende dagen; start, track en navigatie komen uit de officiële wandelgids en van Komoot.',
        'Casa AMARA staat midden in het dorp; naar de startpunten loop je een paar minuten door de steegjes of rijd je een stukje.'
      ],
      [
        'En vandringsdag från Frigiliana: slingan till Cruz de Pinto med utsikt över by och hav, Río Higuerón med sina cahorros, den långa stigningen upp på El Fuerte eller GR 249-etappen till Cómpeta. Fyra mycket olika dagar; start, spår och navigation kommer från den officiella vandringsguiden och från Komoot.',
        'Casa AMARA står mitt i byn; till startpunkterna går ni några minuter genom gränderna eller kör en bit.'
      ]
    ),
    imageAlt: text(
      'White houses of Frigiliana below the rocky Sierra Almijara',
      'Weiße Häuser von Frigiliana unter der felsigen Sierra Almijara',
      'Casas blancas de Frigiliana bajo la sierra Almijara',
      'Witte huizen van Frigiliana onder de rotsachtige Sierra Almijara',
      'Frigilianas vita hus nedanför den klippiga Sierra Almijara'
    ),
    summary: {
      eyebrow: text('On this page', 'Auf dieser Seite', 'En esta página', 'Op deze pagina', 'På den här sidan'),
      body: text(
        'Four hikes from Frigiliana: panoramic loop, gorge, summit and GR stage, with start, track and what the day asks of you.',
        'Vier Wanderungen ab Frigiliana: Panoramarundweg, Schlucht, Gipfel und GR-Etappe, mit Start, Track und dem, was der Tag verlangt.',
        'Cuatro rutas desde Frigiliana: circuito panorámico, garganta, cumbre y etapa del GR, con salida, track y lo que exige el día.',
        'Vier wandelingen vanuit Frigiliana: panoramaronde, kloof, top en GR-etappe, met start, track en wat de dag vraagt.',
        'Fyra vandringar från Frigiliana: panoramaslinga, ravin, topp och GR-etapp, med start, spår och vad dagen kräver.'
      ),
      items: [
        { label: text('Cruz de Pinto', 'Cruz de Pinto', 'Cruz de Pinto', 'Cruz de Pinto', 'Cruz de Pinto'), value: text('Panoramic loop', 'Panoramarundweg', 'Circuito panorámico', 'Panoramaronde', 'Panoramaslinga') },
        { label: text('Río Higuerón', 'Río Higuerón', 'Río Higuerón', 'Río Higuerón', 'Río Higuerón'), value: text('Gorge and cahorros', 'Schlucht & Cahorros', 'Garganta y cahorros', 'Kloof en cahorros', 'Ravin och cahorros') },
        { label: text('El Fuerte', 'El Fuerte', 'El Fuerte', 'El Fuerte', 'El Fuerte'), value: text('The full summit', 'Der volle Gipfel', 'La cumbre completa', 'De volledige top', 'Hela toppen') },
        { label: text('GR 249 · Stage 6', 'GR 249 · Etappe 6', 'GR 249 · Etapa 6', 'GR 249 · Etappe 6', 'GR 249 · Etapp 6'), value: text('Stage to Cómpeta', 'nach Cómpeta', 'hasta Cómpeta', 'naar Cómpeta', 'till Cómpeta') }
      ]
    }
  },
  routeSections: [
    {
      id: 'village-routes',
      title: text('Two routes close to the village', 'Zwei Routen nahe am Dorf', 'Dos rutas cerca del pueblo', 'Twee routes dicht bij het dorp', 'Två turer nära byn'),
      intro: text(
        'Cruz de Pinto is the open panoramic walk; the Higuerón runs through changing riverbed terrain. For both, the linked track is more exact than any description from memory — take it with you.',
        'Die Cruz de Pinto ist der offene Panoramaweg, der Higuerón führt durchs wechselnde Flussbett. Für beide gilt: Der verlinkte Track ist genauer als jede Wegbeschreibung aus dem Gedächtnis — nehmt ihn mit.',
        'La Cruz de Pinto es la ruta panorámica abierta; el Higuerón recorre el cauce cambiante. Para ambas, el track enlazado es más exacto que cualquier descripción de memoria: llevadlo con vosotros.',
        'Cruz de Pinto is de open panoramaroute; de Higuerón loopt door de wisselende rivierbedding. Voor beide geldt: het gelinkte spoor is nauwkeuriger dan elke beschrijving uit het hoofd — neem het mee.',
        'Cruz de Pinto är den öppna panoramaturen; Higuerón går genom den skiftande flodbädden. För båda gäller att det länkade spåret är exaktare än någon vägbeskrivning ur minnet — ta med det.'
      ),
      routeIds: ['frigiliana.hiking.cruz-de-pinto', 'frigiliana.hiking.rio-higueron']
    },
    {
      id: 'mountain-routes',
      title: text('A summit and a full mountain stage', 'Ein Gipfel und eine vollständige Bergetappe', 'Una cumbre y una etapa completa de montaña', 'Een top en een volledige bergetappe', 'En topp och en hel bergsetapp'),
      intro: text(
        'El Fuerte is the complete summit route. GR 249 Stage 6 is a linear day across the mountains to Cómpeta. Both demand an early decision based on weather, fitness and the return plan.',
        'El Fuerte meint hier die vollständige Gipfelroute. Die GR-249-Etappe 6 ist ein linearer Bergtag bis Cómpeta. Für beide braucht ihr früh eine klare Entscheidung nach Wetter, Kondition und Rückfahrt.',
        'El Fuerte se refiere aquí a la ruta completa hasta la cumbre. La etapa 6 del GR 249 es una jornada lineal de montaña hasta Cómpeta. Ambas exigen decidir temprano según el tiempo, la forma física y el regreso.',
        'El Fuerte betekent hier de volledige route naar de top. Etappe 6 van de GR 249 is een lineaire bergdag naar Cómpeta. Voor beide is vroeg een duidelijke keuze nodig op basis van weer, conditie en terugreis.',
        'El Fuerte avser här hela turen till toppen. GR 249 etapp 6 är en linjär bergsdag till Cómpeta. Båda kräver ett tidigt beslut utifrån väder, kondition och hemresa.'
      ),
      routeIds: ['frigiliana.hiking.el-fuerte', 'frigiliana.hiking.gr-249-stage-6']
    }
  ] satisfies HikingRouteSection[],
  closureNotice: {
    id: 'rio-chillar-closure',
    eyebrow: text('Current closure', 'Aktuelle Sperrung', 'Cierre vigente', 'Huidige afsluiting', 'Aktuell avstängning'),
    title: text('Río Chíllar is not a route recommendation', 'Der Río Chíllar ist keine Routenempfehlung', 'El río Chíllar no es una ruta recomendada', 'Río Chíllar is geen routeadvies', 'Río Chíllar är ingen rekommenderad rutt'),
    paragraphs: textList(
      ['According to the council, the Río Chíllar near Nerja remains closed; the river walk is therefore off.'],
      ['Der Río Chíllar bei Nerja ist laut Gemeinde weiterhin gesperrt; die Flusswanderung fällt deshalb aus.'],
      ['Según el ayuntamiento, el río Chíllar junto a Nerja sigue cerrado; la ruta por el río queda por tanto descartada.'],
      ['Volgens de gemeente blijft de Río Chíllar bij Nerja gesloten; de rivierwandeling valt daarom af.'],
      ['Enligt kommunen är Río Chíllar vid Nerja fortfarande avspärrad; flodvandringen utgår därför.']
    ),
    checked: text('As of 27 August 2026', 'Stand 27. August 2026', 'Actualizado el 27 de agosto de 2026', 'Stand 27 augustus 2026', 'Uppdaterad 27 augusti 2026'),
    linkLabel: text('Read the Nerja Town Council notice', 'Mitteilung der Gemeinde Nerja lesen', 'Leer el aviso del Ayuntamiento de Nerja', 'Lees het bericht van de gemeente Nerja', 'Läs Nerja kommuns meddelande'),
    href: 'https://www.nerja.es/el-acceso-al-rio-chillar-permanece-cerrado/'
  },
  practical: {
    title: text('Choose what suits the day', 'Was heute gut passt', 'Elegid lo que encaja con el día', 'Kies wat bij de dag past', 'Välj det som passar dagen'),
    items: [
      {
        id: 'weather',
        title: text('Start with the weather', 'Startet mit dem Wetter', 'Empezad por el tiempo', 'Begin met het weer', 'Börja med vädret'),
        text: text('Use the climate pattern to choose the season, then use AEMET for the actual route day. Heat changes the start time on Cruz de Pinto, El Fuerte and GR 249; recent rain and riverbed conditions are an additional decision for the Higuerón.', 'Nutzt das Klimamuster für die Reisezeit und AEMET für den konkreten Routentag. Hitze verändert die Startzeit bei Cruz de Pinto, El Fuerte und GR 249; beim Higuerón kommen jüngster Regen und die Bedingungen im Flussbett als eigene Entscheidung hinzu.', 'Usad el patrón climático para elegir la época y AEMET para el día concreto. El calor cambia la hora de salida en Cruz de Pinto, El Fuerte y GR 249; para el Higuerón se suman la lluvia reciente y las condiciones del cauce.', 'Gebruik het klimaatpatroon voor het seizoen en AEMET voor de concrete routedag. Hitte verandert de starttijd op Cruz de Pinto, El Fuerte en GR 249; bij de Higuerón zijn recente regen en de toestand van de rivierbedding een extra beslissing.', 'Använd klimatmönstret för årstiden och AEMET för den konkreta vandringsdagen. Hetta ändrar starttiden på Cruz de Pinto, El Fuerte och GR 249; för Higuerón är nyligt regn och förhållandena i flodbädden ytterligare ett beslut.'),
        token: 'weather_frigiliana',
        label: text('Compare climate and open AEMET', 'Klima vergleichen und AEMET öffnen', 'Comparar el clima y abrir AEMET', 'Vergelijk klimaat en open AEMET', 'Jämför klimat och öppna AEMET')
      },
      {
        id: 'navigation',
        title: text('Carry the route', 'Route mitnehmen', 'Llevad la ruta', 'Neem de route mee', 'Ta med rutten'),
        text: text('Save the chosen track before setting out. The route then stays clear even without reliable mobile coverage.', 'Speichert den gewählten Track vor dem Start. So bleibt die Route auch ohne zuverlässigen Mobilfunk klar.', 'Guardad el track elegido antes de salir. Así tendréis clara la ruta incluso sin buena cobertura.', 'Sla de gekozen track voor vertrek op. Zo blijft de route ook zonder betrouwbaar mobiel bereik duidelijk.', 'Spara det valda spåret före start. Då är rutten tydlig även utan pålitlig mobiltäckning.')
      },
      {
        id: 'water-footwear',
        title: text('Water and footwear', 'Wasser und Schuhe', 'Agua y calzado', 'Water en schoenen', 'Vatten och skor'),
        text: text('Take enough water and shoes suited to the ground. Turn back if heat, rain or the terrain no longer fits the plan.', 'Nehmt ausreichend Wasser und passende Schuhe mit. Kehrt um, wenn Hitze, Regen oder Untergrund nicht mehr zum Plan passen.', 'Llevad agua suficiente y calzado adecuado. Dad la vuelta si el calor, la lluvia o el terreno dejan de encajar con el plan.', 'Neem genoeg water en passende schoenen mee. Keer om als hitte, regen of ondergrond niet meer bij het plan passen.', 'Ta med tillräckligt med vatten och lämpliga skor. Vänd om ifall värme, regn eller underlag inte längre passar planen.')
      }
    ]
  },
  combine: {
    title: text('Connect the hike to the rest of the stay', 'Die Wanderung mit dem restlichen Aufenthalt verbinden', 'Conectad la ruta con el resto de la estancia', 'Verbind de wandeling met de rest van het verblijf', 'Koppla vandringen till resten av vistelsen'),
    intro: text('Once the route choice is clear, these are the next useful questions.', 'Wenn die Route feststeht, sind das die nächsten hilfreichen Fragen.', 'Cuando la ruta esté clara, estas son las siguientes preguntas útiles.', 'Als de routekeuze duidelijk is, zijn dit de volgende nuttige vragen.', 'När rutten är vald är det här de nästa användbara frågorna.'),
    items: [
      {
        id: 'after-the-walk',
        token: 'amenities',
        title: text('Where do you come back to?', 'Wohin kommt ihr zurück?', '¿A dónde volvéis?', 'Waar kom je op terug?', 'Vart kommer ni tillbaka?'),
        text: text('After four hours on the mountain the outdoor shower on your own terrace is the best part of the day. Lounis, Zaid and Maha each have one, with a hammock and two loungers.', 'Nach vier Stunden am Berg ist die Außendusche auf der eigenen Terrasse das Beste am Tag. Lounis, Zaid und Maha haben je eine, dazu Hängematte und zwei Liegen.', 'Después de cuatro horas en la sierra, la ducha exterior de vuestra propia terraza es lo mejor del día. Lounis, Zaid y Maha tienen una cada uno, con hamaca y dos tumbonas.', 'Na vier uur in de bergen is de buitendouche op je eigen terras het beste van de dag. Lounis, Zaid en Maha hebben er elk een, met hangmat en twee ligbedden.', 'Efter fyra timmar i bergen är utduschen på er egen terrass det bästa med dagen. Lounis, Zaid och Maha har var sin, med hängmatta och två solsängar.'),
        label: text('What is waiting in the apartments', 'Was in den Apartments wartet', 'Qué os espera en los apartamentos', 'Wat er in de appartementen klaarstaat', 'Vad som väntar i lägenheterna')
      },
      {
        id: 'dates',
        token: 'stay_search_results',
        title: text('When do you want to walk?', 'Wann wollt ihr laufen?', '¿Cuándo queréis caminar?', 'Wanneer willen jullie lopen?', 'När vill ni vandra?'),
        text: text('Spring and autumn are the best time for the long routes, because shade stops being the deciding factor. What is free in your weeks comes with dates and a total price.', 'Frühling und Herbst sind die beste Zeit für die langen Routen, weil der Schatten dann nicht mehr entscheidet. Was in euren Wochen frei ist, seht ihr mit Datum und Gesamtpreis.', 'Primavera y otoño son la mejor época para las rutas largas, porque la sombra deja de ser lo decisivo. Lo que hay libre en vuestras semanas aparece con fechas y precio total.', 'Lente en herfst zijn de beste tijd voor de lange routes, omdat schaduw dan niet meer beslist. Wat er in jullie weken vrij is, zie je met data en totaalprijs.', 'Vår och höst är bästa tiden för de långa lederna, eftersom skuggan då inte längre avgör. Vad som är ledigt under era veckor visas med datum och totalpris.'),
        label: text('See what is free on your dates', 'Sehen, was an euren Daten frei ist', 'Ver qué hay libre en vuestras fechas', 'Bekijk wat vrij is op jullie data', 'Se vad som är ledigt era datum')
      },
      {
        id: 'restaurants',
        token: 'frigiliana_food_authority',
        title: text('Where will you eat afterwards?', 'Wo esst ihr danach?', '¿Dónde comeréis después?', 'Waar eten jullie daarna?', 'Var äter ni efteråt?'),
        text: text('After four hours uphill nobody picks a restaurant well. That is why we settle on one before setting off.', 'Nach vier Stunden bergauf entscheidet man Restaurants schlecht. Deshalb suchen wir vorher eines aus.', 'Después de cuatro horas de subida nadie elige bien un restaurante. Por eso lo decidimos antes de salir.', 'Na vier uur klimmen kiest niemand nog goed een restaurant. Daarom kiezen we er vooraf een.', 'Efter fyra timmar uppför väljer ingen restaurang bra. Därför bestämmer vi en i förväg.'),
        label: text('See Frigiliana restaurants', 'Restaurants in Frigiliana ansehen', 'Ver restaurantes de Frigiliana', 'Bekijk restaurants in Frigiliana', 'Se restauranger i Frigiliana')
      },
      {
        id: 'location',
        token: 'location_frigiliana',
        title: text('Why use Frigiliana as the base?', 'Warum Frigiliana als Basis?', '¿Por qué usar Frigiliana como base?', 'Waarom Frigiliana als uitvalsbasis?', 'Varför ha Frigiliana som bas?'),
        text: text('Place the village, coast and Sierra in one practical orientation before planning the rest of the stay.', 'Ordnet Dorf, Küste und Sierra praktisch ein, bevor ihr den restlichen Aufenthalt plant.', 'Situad el pueblo, la costa y la sierra antes de planear el resto de la estancia.', 'Plaats dorp, kust en Sierra in één praktisch overzicht voor de rest van het verblijf.', 'Sätt byn, kusten och Sierra i ett praktiskt sammanhang före resten av planeringen.'),
        label: text('Open Frigiliana location guide', 'Frigiliana Location Guide öffnen', 'Abrir la guía de ubicación de Frigiliana', 'Open de Frigiliana-locatiegids', 'Öppna Frigilianas platsguide')
      }
    ] satisfies HikingContextLink[]
  },
  guided: {
    eyebrow: text('Prefer to be guided', 'Lieber geführt', 'Mejor con guía', 'Liever begeleid', 'Hellre guidat'),
    title: text(
      'Rather walk with a guide?',
      'Lieber mit Guide wandern?',
      '¿Preferís caminar con guía?',
      'Liever met een gids wandelen?',
      'Vill ni hellre vandra med guide?'
    ),
    paragraphs: textList(
      [
        'If you would rather not plan the routes yourself, a local partner runs guided walking holidays right here in the Sierras de Tejeda, Alhama y Almijara around Frigiliana. Spanish Walking Adventures puts together bespoke trips for small groups — you choose the dates, the length of stay and whether you want it self-catered or all-inclusive with the guided walks arranged for you.',
        'It is an independent operator, not part of AMARA, so the walks, prices and languages are theirs to confirm — enquire with them directly and tell them you are staying with us.'
      ],
      [
        'Wenn ihr die Routen nicht selbst planen möchtet: Ein lokaler Partner bietet geführte Wanderreisen genau hier in der Sierra de Tejeda, Alhama y Almijara rund um Frigiliana. Spanish Walking Adventures stellt maßgeschneiderte Touren für kleine Gruppen zusammen — ihr wählt Termine, Aufenthaltsdauer und ob selbstversorgt oder all-inclusive mit organisierten geführten Wanderungen.',
        'Es ist ein unabhängiger Anbieter, nicht Teil von AMARA; Wanderungen, Preise und Sprachen bestätigt er selbst — fragt am besten direkt an und sagt, dass ihr bei uns wohnt.'
      ],
      [
        'Si preferís no planear las rutas por vuestra cuenta, un socio local ofrece vacaciones de senderismo guiado aquí mismo, en las Sierras de Tejeda, Alhama y Almijara, alrededor de Frigiliana. Spanish Walking Adventures prepara viajes a medida para grupos pequeños: elegís las fechas, la duración y si lo queréis en régimen libre o todo incluido con las caminatas guiadas organizadas.',
        'Es un operador independiente, no forma parte de AMARA, así que las rutas, los precios y los idiomas los confirman ellos; escribidles directamente y decidles que os alojáis con nosotros.'
      ],
      [
        'Als je de routes liever niet zelf plant: een lokale partner verzorgt begeleide wandelvakanties precies hier, in de Sierras de Tejeda, Alhama y Almijara rond Frigiliana. Spanish Walking Adventures stelt reizen op maat samen voor kleine groepen — je kiest de data, de duur en of je het zelfverzorgend of all-inclusive wilt met de begeleide wandelingen geregeld.',
        'Het is een onafhankelijke aanbieder, geen onderdeel van AMARA; de wandelingen, prijzen en talen bevestigen zij zelf — neem rechtstreeks contact op en vermeld dat je bij ons verblijft.'
      ],
      [
        'Om ni hellre slipper planera turerna själva: en lokal partner ordnar guidade vandringssemestrar just här, i Sierra de Tejeda, Alhama y Almijara runt Frigiliana. Spanish Walking Adventures sätter ihop skräddarsydda resor för små grupper — ni väljer datum, längd och om ni vill ha självhushåll eller allt-inkluderat med de guidade vandringarna ordnade.',
        'Det är en fristående aktör, inte en del av AMARA; vandringarna, priserna och språken bekräftar de själva — hör av er direkt och nämn att ni bor hos oss.'
      ]
    ),
    linkLabel: text(
      'Spanish Walking Adventures',
      'Spanish Walking Adventures',
      'Spanish Walking Adventures',
      'Spanish Walking Adventures',
      'Spanish Walking Adventures'
    ),
    linkContext: text(
      'Guided walking holidays in the Sierras around Frigiliana — enquire directly',
      'Geführte Wanderreisen in den Sierras rund um Frigiliana — direkt anfragen',
      'Vacaciones de senderismo guiado en las sierras de Frigiliana — consulta directa',
      'Begeleide wandelvakanties in de sierras rond Frigiliana — rechtstreeks aanvragen',
      'Guidade vandringssemestrar i bergen runt Frigiliana — fråga direkt'
    ),
    href: 'https://spanishwalkingadventures.com/'
  },
  closing: {
    title: text('Steps that suit your stay', 'Stufen, die zu eurem Aufenthalt passen', 'Escaleras que encajan con vuestra estancia', 'Trappen die bij jullie verblijf passen', 'Trappor som passar er vistelse'),
    lead: text('After a day on Frigiliana’s walking routes, we also look at the steps inside your accommodation because they shape your comfort. Farah continues on one level after the shared entrance step; Lounis, Zaid and Maha each add further stairs.', 'Nach einem Tag auf Frigilianas Wanderwegen achten wir auch auf die Stufen in eurer Unterkunft, denn sie prägen euren Komfort. Farah verläuft nach der gemeinsamen Eingangsstufe auf einer Ebene; Lounis, Zaid und Maha haben jeweils zusätzliche Treppen.', 'Después de un día por las rutas de Frigiliana, también nos fijamos en las escaleras del alojamiento porque influyen en vuestro descanso. Farah continúa en un solo nivel tras el peldaño de la entrada compartida; Lounis, Zaid y Maha suman más escaleras.', 'Na een dag op de wandelroutes van Frigiliana letten we ook op de trappen in jullie accommodatie, omdat die jullie comfort bepalen. Farah loopt na de gedeelde entreetrede door op één niveau; Lounis, Zaid en Maha hebben elk extra trappen.', 'Efter en dag på Frigilianas vandringsleder tittar vi också på trapporna i boendet, eftersom de påverkar er komfort. Farah fortsätter på ett plan efter det gemensamma entrésteget; Lounis, Zaid och Maha har ytterligare trappor.'),
    nextCta: text('Steps at our Frigiliana stays', 'Stufen in unseren Frigiliana-Unterkünften', 'Escaleras en nuestros alojamientos de Frigiliana', 'Trappen in onze verblijven in Frigiliana', 'Trappor i våra boenden i Frigiliana')
  }
} as const;

export type FrigilianaHikingPageCopy = Resolved<typeof frigilianaHikingContent>;

export function getFrigilianaHikingContent(lang: AmaraLanguage): FrigilianaHikingPageCopy {
  return resolveLocale(frigilianaHikingContent, lang);
}

export const frigilianaHikingSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-hiking-v2.2',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.hiking'),
  languages: {
    en: {
      title: 'Hiking in Frigiliana: 4 routes & current advice',
      description: 'Compare four curated Frigiliana hikes, use official route sources and Komoot for navigation, and check the current Río Chíllar closure.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wandern in Frigiliana: 4 Routen & aktuelle Hinweise',
      description: 'Vier kuratierte Wanderungen rund um Frigiliana vergleichen, offizielle Quellen und Komoot zur Navigation nutzen und die Chíllar-Sperrung prüfen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Senderismo en Frigiliana: 4 rutas y avisos actuales',
      description: 'Comparad cuatro rutas seleccionadas en Frigiliana, usad fuentes oficiales y Komoot para navegar y consultad el cierre del río Chíllar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wandelen in Frigiliana: 4 routes & actuele info',
      description: 'Vergelijk vier gekozen wandelingen rond Frigiliana, gebruik officiële bronnen en Komoot voor navigatie en bekijk de afsluiting van Río Chíllar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vandring i Frigiliana: 4 turer & aktuell information',
      description: 'Jämför fyra utvalda vandringar runt Frigiliana, använd officiella källor och Komoot för navigering och kontrollera avstängningen av Río Chíllar.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};
