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
      'Hiking around Frigiliana: four routes worth planning',
      'Wandern rund um Frigiliana: vier Routen, die sich lohnen',
      'Senderismo en Frigiliana: cuatro rutas que merece la pena planear',
      'Wandelen rond Frigiliana: vier routes om goed te plannen',
      'Vandring runt Frigiliana: fyra turer att planera'
    ),
    paragraphs: textList(
      [
        'For a hiking day from Frigiliana, choose between Cruz de Pinto for a panoramic circuit, the Río Higuerón and its cahorros for a gorge route, the full ascent of El Fuerte, or GR 249 Stage 6 to Cómpeta. These are four different commitments, not interchangeable suggestions. AMARA helps you choose the route and judge the day; the linked official information and Komoot route provide the actual start, track and navigation. Río Chíllar is not an alternative here: access remains closed and the notice below is informational only.',
        'Casa AMARA is a convenient place to begin your day in the historic centre. It is not an official trailhead, and we do not add invented walking times, steps or elevation from the house to a route.'
      ],
      [
        'Für einen Wandertag ab Frigiliana wählt ihr zwischen dem Panoramarundweg Cruz de Pinto, dem Río Higuerón mit seinen Cahorros, dem vollständigen Aufstieg auf den El Fuerte oder der GR-249-Etappe 6 bis Cómpeta. Das sind vier unterschiedliche Vorhaben, keine austauschbaren Tipps. AMARA hilft euch bei Auswahl und Tagesplanung; den tatsächlichen Start, den Track und die Navigation liefern die verlinkten offiziellen Angaben und Komoot. Der Río Chíllar ist hier keine Alternative: Der Zugang bleibt geschlossen, der Hinweis weiter unten dient nur der Information.',
        'Casa AMARA ist ein praktischer Ausgangspunkt für euren Tag im historischen Zentrum. Sie ist kein offizieller Trailhead; wir erfinden deshalb keine Gehzeiten, Stufen oder Höhenmeter vom Haus bis zu einer Route.'
      ],
      [
        'Para una jornada de senderismo desde Frigiliana, elegid entre el circuito panorámico de la Cruz de Pinto, el río Higuerón y sus cahorros, la subida completa a El Fuerte o la etapa 6 del GR 249 hasta Cómpeta. Son cuatro planes distintos, no sugerencias intercambiables. AMARA os ayuda a escoger y a valorar el día; la salida real, el track y la navegación corresponden a la información oficial y a Komoot enlazados. El río Chíllar no es una alternativa: el acceso sigue cerrado y el aviso inferior es solo informativo.',
        'Casa AMARA es un punto práctico desde el que empezar el día en el casco histórico. No es el inicio oficial de ningún sendero y no añadimos tiempos, escalones ni desniveles inventados desde la casa.'
      ],
      [
        'Voor een wandeldag vanuit Frigiliana kiezen jullie uit de panoramische ronde naar Cruz de Pinto, de Río Higuerón met zijn cahorros, de volledige klim naar El Fuerte of etappe 6 van de GR 249 naar Cómpeta. Het zijn vier verschillende ondernemingen, geen inwisselbare tips. AMARA helpt bij de keuze en de planning van de dag; de echte start, route en navigatie komen van de gelinkte officiële informatie en Komoot. Río Chíllar is hier geen alternatief: de toegang blijft gesloten en de melding hieronder is alleen informatief.',
        'Casa AMARA is een praktisch vertrekpunt voor jullie dag in de historische kern. Het is geen officiële trailhead; daarom voegen we geen verzonnen looptijden, treden of hoogtemeters vanaf het huis toe.'
      ],
      [
        'För en vandringsdag från Frigiliana väljer ni mellan panoramaslingan Cruz de Pinto, Río Higuerón och dess cahorros, hela stigningen till El Fuerte eller GR 249 etapp 6 till Cómpeta. Det är fyra olika åtaganden, inte utbytbara tips. AMARA hjälper er att välja och bedöma dagen; den faktiska starten, spåret och navigeringen finns i den länkade officiella informationen och på Komoot. Río Chíllar är inget alternativ här: tillträdet är fortfarande stängt och meddelandet nedan är endast information.',
        'Casa AMARA är en praktisk utgångspunkt för dagen i den historiska bykärnan. Det är ingen officiell ledstart, och vi lägger därför inte till påhittade gångtider, trappsteg eller höjdmeter från huset.'
      ]
    ),
    imageAlt: text(
      'White houses of Frigiliana below the rocky Sierra Almijara',
      'Weiße Häuser von Frigiliana unter der felsigen Sierra Almijara',
      'Casas blancas de Frigiliana bajo la sierra Almijara',
      'Witte huizen van Frigiliana onder de rotsachtige Sierra Almijara',
      'Frigilianas vita hus nedanför den klippiga Sierra Almijara'
    )
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
      ['Nerja Town Council states that access to Río Chíllar remains closed. Do not plan or attempt the recreational river route. This notice records the current restriction; it is not a route card and contains no workaround. Check the council notice for any later official change.'],
      ['Der Gemeinderat von Nerja erklärt, dass der Zugang zum Río Chíllar weiterhin gesperrt ist. Plant oder versucht die Freizeitroute durch den Fluss nicht. Dieser Hinweis dokumentiert die aktuelle Einschränkung; er ist keine Routenkarte und enthält keine Umgehung. Prüft die Mitteilung der Gemeinde auf spätere offizielle Änderungen.'],
      ['El Ayuntamiento de Nerja indica que el acceso al río Chíllar continúa cerrado. No planifiquéis ni intentéis la ruta recreativa por el río. Este aviso recoge la restricción vigente; no es una ficha de ruta ni ofrece alternativas para eludirla. Consultad el aviso municipal para cualquier cambio oficial posterior.'],
      ['De gemeente Nerja meldt dat de toegang tot Río Chíllar gesloten blijft. Plan of onderneem de recreatieve rivierroute niet. Deze melding legt de huidige beperking vast; het is geen routekaart en bevat geen omweg. Controleer het gemeentelijke bericht voor een latere officiële wijziging.'],
      ['Nerjas kommun uppger att tillträdet till Río Chíllar fortfarande är stängt. Planera eller försök inte den rekreativa flodrutten. Meddelandet återger den aktuella begränsningen; det är inget ruttkort och innehåller ingen omväg. Kontrollera kommunens besked för en senare officiell ändring.']
    ),
    checked: text('Official notice checked 27 August 2026', 'Offizieller Hinweis geprüft am 27. August 2026', 'Aviso oficial comprobado el 27 de agosto de 2026', 'Officieel bericht gecontroleerd op 27 augustus 2026', 'Officiellt besked kontrollerat 27 augusti 2026'),
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
