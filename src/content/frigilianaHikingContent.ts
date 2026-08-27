import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList, Resolved } from '../types/content';
import { resolveLocale } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';

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

interface HikingSourceLink {
  id: string;
  label: LocalizedText;
  context: LocalizedText;
  href: string;
}

interface HikingRoute {
  id: 'cruz-de-pinto' | 'rio-higueron-cahorros' | 'el-fuerte-summit' | 'gr-249-stage-6';
  title: LocalizedText;
  duration?: LocalizedText;
  elevationGain?: LocalizedText;
  distance?: LocalizedText;
  difficulty: LocalizedText;
  experience: LocalizedText;
  paragraphs: LocalizedTextList;
  links: HikingSourceLink[];
}

interface HikingRouteSection {
  id: 'village-routes' | 'mountain-routes';
  title: LocalizedText;
  intro: LocalizedText;
  routes: HikingRoute[];
}

interface HikingContextLink {
  id: 'weather' | 'restaurants' | 'location';
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
        'Choose the open panorama of Cruz de Pinto or the changing riverbed terrain of the Higuerón. Check the linked route before leaving: the exact track matters more than a description from memory.',
        'Wählt zwischen dem offenen Panorama der Cruz de Pinto und dem wechselnden Flussbett des Higuerón. Prüft vor dem Aufbruch den verlinkten Track – der genaue Verlauf ist wichtiger als eine Wegbeschreibung aus dem Gedächtnis.',
        'Elegid entre el panorama abierto de la Cruz de Pinto y el terreno cambiante del cauce del Higuerón. Revisad el track enlazado antes de salir: el recorrido exacto importa más que una descripción de memoria.',
        'Kies het open panorama van Cruz de Pinto of de wisselende rivierbedding van de Higuerón. Controleer de gelinkte route voor vertrek: het exacte spoor is belangrijker dan een beschrijving uit het hoofd.',
        'Välj den öppna panoramaturen Cruz de Pinto eller Higueróns skiftande flodbädd. Kontrollera den länkade rutten före start – det exakta spåret är viktigare än en vägbeskrivning ur minnet.'
      ),
      routes: [
        {
          id: 'cruz-de-pinto',
          title: text('Cruz de Pinto circuit', 'Cruz-de-Pinto-Rundweg', 'Ruta circular de la Cruz de Pinto', 'Rondwandeling Cruz de Pinto', 'Rundslingan Cruz de Pinto'),
          duration: text('3 hrs · official route', '3 Std. · offizielle Route', '3 h · ruta oficial', '3 uur · officiële route', '3 tim · officiell rutt'),
          distance: text('5.8 km · official route', '5,8 km · offizielle Route', '5,8 km · ruta oficial', '5,8 km · officiële route', '5,8 km · officiell rutt'),
          difficulty: text('Easy in the official listing; footing still matters', 'Offiziell leicht; Trittsicherheit bleibt wichtig', 'Fácil en la ficha oficial; el terreno sigue importando', 'Officieel eenvoudig; tredzekerheid blijft belangrijk', 'Lätt enligt den officiella listan; stadigt steg behövs ändå'),
          experience: text('Open slopes, the small shrine and views back to village and coast.', 'Offene Hänge, die kleine Kapelle und der Blick zurück auf Dorf und Küste.', 'Laderas abiertas, la pequeña ermita y vistas al pueblo y la costa.', 'Open hellingen, de kleine kapel en uitzicht terug op dorp en kust.', 'Öppna sluttningar, det lilla kapellet och vyer tillbaka mot byn och kusten.'),
          paragraphs: textList(
            ['Choose Cruz de Pinto when you want a defined circuit and broad views without committing to a summit day. The official route listing supplies the baseline; use the current Komoot route for the exact line and any route notices. Open ground means sun and wind are part of the decision.'],
            ['Cruz de Pinto passt, wenn ihr einen klaren Rundweg mit weitem Blick sucht, ohne einen Gipfeltag daraus zu machen. Die offizielle Routenübersicht liefert die Basis; für den genauen Verlauf und aktuelle Hinweise nutzt ihr Komoot. Auf dem offenen Gelände gehören Sonne und Wind zur Entscheidung.'],
            ['La Cruz de Pinto encaja si buscáis un circuito definido y buenas vistas sin dedicar el día a una cumbre. La ficha oficial aporta la base; usad la ruta actual de Komoot para el trazado exacto y posibles avisos. En terreno abierto, el sol y el viento forman parte de la decisión.'],
            ['Cruz de Pinto past als jullie een duidelijke rondwandeling met weids uitzicht zoeken, zonder er een topdag van te maken. De officiële route geeft de basis; gebruik de actuele Komoot-route voor het exacte verloop en eventuele meldingen. Op open terrein horen zon en wind bij de keuze.'],
            ['Cruz de Pinto passar när ni vill ha en tydlig rundslinga med vid utsikt utan att göra dagen till en topptur. Den officiella rutten ger basuppgifterna; använd den aktuella Komoot-rutten för exakt sträckning och eventuella meddelanden. På öppen mark påverkar sol och vind beslutet.']
          ),
          links: [
            {
              id: 'cruz-official',
              label: text('Official Cruz de Pinto route', 'Offizielle Route Cruz de Pinto', 'Ruta oficial de la Cruz de Pinto', 'Officiële route Cruz de Pinto', 'Officiell rutt Cruz de Pinto'),
              context: text('Route baseline from Frigiliana Tourism.', 'Routenbasis von Frigiliana Turismo.', 'Ficha base de Turismo de Frigiliana.', 'Routebasis van Frigiliana Tourism.', 'Grunduppgifter från Frigiliana Turismo.'),
              href: 'https://www.turismofrigiliana.es/en/frigiliana-cruz-de-pinto-en.html'
            },
            {
              id: 'cruz-komoot',
              label: text('Open the route on Komoot', 'Route auf Komoot öffnen', 'Abrir la ruta en Komoot', 'Open de route in Komoot', 'Öppna rutten på Komoot'),
              context: text('Track, map and navigation.', 'Track, Karte und Navigation.', 'Track, mapa y navegación.', 'Track, kaart en navigatie.', 'Spår, karta och navigering.'),
              href: 'https://www.komoot.com/es-es/smarttour/44782526'
            }
          ]
        },
        {
          id: 'rio-higueron-cahorros',
          title: text('Río Higuerón and the Cahorros', 'Río Higuerón und die Cahorros', 'Río Higuerón y los Cahorros', 'Río Higuerón en de Cahorros', 'Río Higuerón och Cahorros'),
          duration: text('2.5 hrs · official Cahorros route', '2,5 Std. · offizielle Cahorros-Route', '2,5 h · ruta oficial de los Cahorros', '2,5 uur · officiële Cahorros-route', '2,5 tim · officiell Cahorros-rutt'),
          distance: text('4.6 km · official Cahorros route', '4,6 km · offizielle Cahorros-Route', '4,6 km · ruta oficial de los Cahorros', '4,6 km · officiële Cahorros-route', '4,6 km · officiell Cahorros-rutt'),
          difficulty: text('Easy in the official listing; conditions can change', 'Offiziell leicht; Bedingungen können wechseln', 'Fácil en la ficha oficial; las condiciones cambian', 'Officieel eenvoudig; omstandigheden kunnen veranderen', 'Lätt enligt den officiella listan; förhållanden kan skifta'),
          experience: text('A riverbed route into narrow rock passages close to Frigiliana.', 'Eine Flussbett-Route durch schmale Felspassagen nahe Frigiliana.', 'Una ruta por el cauce entre pasos estrechos de roca cerca de Frigiliana.', 'Een route door de rivierbedding en smalle rotspassages bij Frigiliana.', 'En tur i flodbädden genom smala klippassager nära Frigiliana.'),
          paragraphs: textList(
            ['The Higuerón is the local gorge choice, but a riverbed is not a fixed surface. Water, loose stone and passability change after weather. Check the forecast first, then use the linked route rather than following an improvised line. If conditions are doubtful, choose an open route instead.'],
            ['Der Higuerón ist die ortsnahe Schluchtenroute, doch ein Flussbett ist kein gleichbleibender Weg. Wasser, loses Gestein und Passierbarkeit verändern sich mit dem Wetter. Prüft zuerst die Vorhersage und folgt dann dem verlinkten Track statt einer improvisierten Linie. Bei Zweifel wählt ihr eine offene Route.'],
            ['El Higuerón es la opción local de garganta, pero un cauce no es una superficie fija. El agua, la piedra suelta y la posibilidad de paso cambian con el tiempo. Consultad primero la previsión y seguid después el track enlazado, no una línea improvisada. Si hay dudas, elegid una ruta abierta.'],
            ['De Higuerón is de lokale kloofroute, maar een rivierbedding is geen vaste ondergrond. Water, losse stenen en begaanbaarheid veranderen met het weer. Bekijk eerst de verwachting en volg daarna de gelinkte route in plaats van zelf een lijn te improviseren. Kies bij twijfel een open route.'],
            ['Higuerón är den lokala ravinturen, men en flodbädd är inget fast underlag. Vatten, lösa stenar och framkomlighet förändras med vädret. Kontrollera prognosen först och följ sedan den länkade rutten i stället för en improviserad linje. Välj en öppen rutt om ni är osäkra.']
          ),
          links: [
            {
              id: 'cahorros-official',
              label: text('Official Frigiliana walking routes', 'Offizielle Wanderwege Frigilianas', 'Rutas oficiales de Frigiliana', 'Officiële wandelroutes van Frigiliana', 'Frigilianas officiella vandringsleder'),
              context: text('Cahorros route baseline from Frigiliana Tourism.', 'Basisdaten zur Cahorros-Route von Frigiliana Turismo.', 'Ficha base de los Cahorros de Turismo de Frigiliana.', 'Basisgegevens voor de Cahorros-route van Frigiliana Tourism.', 'Grunduppgifter för Cahorros från Frigiliana Turismo.'),
              href: 'https://www.turismofrigiliana.es/en/walking-routes.html'
            },
            {
              id: 'cahorros-komoot',
              label: text('Open a Cahorros route on Komoot', 'Cahorros-Route auf Komoot öffnen', 'Abrir una ruta de los Cahorros en Komoot', 'Open een Cahorros-route in Komoot', 'Öppna en Cahorros-rutt på Komoot'),
              context: text('Track, map and navigation.', 'Track, Karte und Navigation.', 'Track, mapa y navegación.', 'Track, kaart en navigatie.', 'Spår, karta och navigering.'),
              href: 'https://www.komoot.com/de-de/smarttour/e995581742/ruta-cahorros-y-cruz-de-felix-circular-desde-frigiliana-por-el-parque-natural-sierra-de-tejeda-almijara-y-alhama'
            }
          ]
        }
      ]
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
      routes: [
        {
          id: 'el-fuerte-summit',
          title: text('El Fuerte summit', 'El Fuerte – Gipfel', 'Cumbre de El Fuerte', 'Top van El Fuerte', 'El Fuerte – toppen'),
          duration: text('4 hrs · official route', '4 Std. · offizielle Route', '4 h · ruta oficial', '4 uur · officiële route', '4 tim · officiell rutt'),
          elevationGain: text('631–633 m · official route', '631–633 Hm · offizielle Route', '631–633 m · ruta oficial', '631–633 hm · officiële route', '631–633 höjdmeter · officiell rutt'),
          distance: text('7.4 km · official route', '7,4 km · offizielle Route', '7,4 km · ruta oficial', '7,4 km · officiële route', '7,4 km · officiell rutt'),
          difficulty: text('Moderate officially; steep and rocky in practice', 'Offiziell mittel; praktisch steil und felsig', 'Media oficialmente; en la práctica, empinada y rocosa', 'Officieel gemiddeld; in de praktijk steil en rotsachtig', 'Medelsvår officiellt; i praktiken brant och stenig'),
          experience: text('The full ascent above Frigiliana to a 360-degree summit panorama.', 'Der vollständige Aufstieg über Frigiliana zu einem 360-Grad-Panorama.', 'La subida completa sobre Frigiliana hasta una panorámica de 360 grados.', 'De volledige klim boven Frigiliana naar een panorama van 360 graden.', 'Hela stigningen ovanför Frigiliana till ett 360-graders panorama.'),
          paragraphs: textList(
            ['This is the complete summit route. The official description begins at Plaza del Ingenio and climbs through the old town before continuing onto exposed, rocky terrain. Use that description for the official start and route facts, and check weather before committing to the ascent.'],
            ['Das ist die vollständige Gipfelroute. Die offizielle Beschreibung beginnt an der Plaza del Ingenio, führt durch die Altstadt und anschließend in offenes, felsiges Gelände. Nutzt sie für offiziellen Start und Routendaten und prüft das Wetter, bevor ihr euch für den Aufstieg entscheidet.'],
            ['Esta es la ruta completa hasta la cumbre. La descripción oficial comienza en la plaza del Ingenio, atraviesa el casco histórico y continúa por terreno abierto y rocoso. Usadla para la salida y los datos oficiales y comprobad el tiempo antes de iniciar la subida.'],
            ['Dit is de volledige route naar de top. De officiële beschrijving begint op Plaza del Ingenio, gaat door de oude kern en loopt daarna over open, rotsachtig terrein. Gebruik die voor de officiële start en routegegevens en controleer het weer voor de klim.'],
            ['Det här är hela toppturen. Den officiella beskrivningen börjar på Plaza del Ingenio, går genom den gamla bykärnan och fortsätter över öppen, stenig terräng. Använd den för officiell start och ruttfakta och kontrollera vädret före stigningen.']
          ),
          links: [
            {
              id: 'fuerte-official',
              label: text('Official El Fuerte route', 'Offizielle El-Fuerte-Route', 'Ruta oficial de El Fuerte', 'Officiële route El Fuerte', 'Officiell rutt El Fuerte'),
              context: text('Start, route description and official figures.', 'Start, Routenbeschreibung und offizielle Werte.', 'Salida, descripción y datos oficiales.', 'Start, routebeschrijving en officiële gegevens.', 'Start, ruttbeskrivning och officiella uppgifter.'),
              href: 'https://www.turismofrigiliana.es/es/el-fuerte.html'
            },
            {
              id: 'fuerte-komoot',
              label: text('Compare the current track on Komoot', 'Aktuellen Track auf Komoot vergleichen', 'Comparar el track actual en Komoot', 'Vergelijk de actuele track op Komoot', 'Jämför aktuellt spår på Komoot'),
              context: text('Map and device navigation.', 'Karte und Gerätenavigation.', 'Mapa y navegación en el dispositivo.', 'Kaart en apparaatnavigatie.', 'Karta och enhetsnavigering.'),
              href: 'https://www.komoot.com/es-es/guide/1588959/rutas-de-senderismo-en-frigiliana'
            }
          ]
        },
        {
          id: 'gr-249-stage-6',
          title: text('GR 249 · Stage 6: Frigiliana to Cómpeta', 'GR 249 · Etappe 6: Frigiliana–Cómpeta', 'GR 249 · Etapa 6: Frigiliana–Cómpeta', 'GR 249 · Etappe 6: Frigiliana–Cómpeta', 'GR 249 · Etapp 6: Frigiliana–Cómpeta'),
          duration: text('Full day · linear stage', 'Ganzer Tag · lineare Etappe', 'Día completo · etapa lineal', 'Volle dag · lineaire etappe', 'Heldag · linjär etapp'),
          distance: text('23.7 km · linked Komoot stage', '23,7 km · verlinkte Komoot-Etappe', '23,7 km · etapa enlazada de Komoot', '23,7 km · gelinkte Komoot-etappe', '23,7 km · länkad Komoot-etapp'),
          difficulty: text('Challenging', 'Anspruchsvoll', 'Exigente', 'Zwaar', 'Krävande'),
          experience: text('A committed mountain crossing to Cómpeta, with the return arranged first.', 'Eine anspruchsvolle Bergquerung bis Cómpeta – mit vorher geklärter Rückfahrt.', 'Una travesía exigente hasta Cómpeta, con el regreso organizado de antemano.', 'Een serieuze bergtocht naar Cómpeta, met de terugreis vooraf geregeld.', 'En krävande bergsetapp till Cómpeta, med hemresan ordnad i förväg.'),
          paragraphs: textList(
            ['Stage 6 is the one route here that does not bring you back to Frigiliana. It crosses mountain terrain to Cómpeta, so arrange the return before departure and treat the official topoguide as the authority for the stage. Komoot can carry the track on your device; it does not replace weather judgment or the official route information.'],
            ['Etappe 6 ist die einzige Route dieser Auswahl, die nicht nach Frigiliana zurückführt. Sie quert das Bergland bis Cómpeta: Organisiert die Rückfahrt vor dem Start und behandelt die offizielle Topoguía als maßgebliche Quelle. Komoot bringt den Track aufs Gerät, ersetzt aber weder Wetterentscheidung noch offizielle Routeninformation.'],
            ['La etapa 6 es la única ruta de esta selección que no regresa a Frigiliana. Cruza la sierra hasta Cómpeta: organizad la vuelta antes de salir y tomad la topoguía oficial como referencia principal. Komoot lleva el track al dispositivo, pero no sustituye la valoración meteorológica ni la información oficial.'],
            ['Etappe 6 is de enige route in deze selectie die niet terugkeert naar Frigiliana. Ze steekt het berggebied over naar Cómpeta: regel de terugreis voor vertrek en gebruik de officiële topogids als leidende bron. Komoot zet de track op jullie apparaat, maar vervangt de weerinschatting of officiële route-informatie niet.'],
            ['Etapp 6 är den enda turen här som inte återvänder till Frigiliana. Den korsar bergsterräng till Cómpeta: ordna hemresan före start och använd den officiella topoguiden som huvudkälla. Komoot ger spåret i enheten men ersätter varken väderbedömning eller officiell ruttinformation.']
          ),
          links: [
            {
              id: 'gr249-official',
              label: text('Official GR 249 topoguide', 'Offizielle Topoguía des GR 249', 'Topoguía oficial del GR 249', 'Officiële topogids van de GR 249', 'Officiell topoguide för GR 249'),
              context: text('Diputación de Málaga · Stage 6.', 'Diputación de Málaga · Etappe 6.', 'Diputación de Málaga · Etapa 6.', 'Diputación de Málaga · Etappe 6.', 'Diputación de Málaga · Etapp 6.'),
              href: 'https://static.malaga.es/malaga/subidas/descargas/archivos/7/1/370917/topoguia-gr-249-gran-senda-de-malaga-%28edicion-noviembre-2021%29.pdf'
            },
            {
              id: 'gr249-komoot',
              label: text('Open Stage 6 on Komoot', 'Etappe 6 auf Komoot öffnen', 'Abrir la etapa 6 en Komoot', 'Open etappe 6 in Komoot', 'Öppna etapp 6 på Komoot'),
              context: text('Track, map and device navigation.', 'Track, Karte und Gerätenavigation.', 'Track, mapa y navegación en el dispositivo.', 'Track, kaart en apparaatnavigatie.', 'Spår, karta och enhetsnavigering.'),
              href: 'https://www.komoot.com/es-es/tour/898242181'
            }
          ]
        }
      ]
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
    title: text('Decide with the day, not only the route name', 'Entscheidet nach dem Tag, nicht nur nach dem Routennamen', 'Decidid según el día, no solo por el nombre de la ruta', 'Kies op basis van de dag, niet alleen de routenaam', 'Välj efter dagen, inte bara efter ruttnamnet'),
    items: [
      {
        id: 'weather',
        title: text('Weather first', 'Wetter zuerst', 'Primero, el tiempo', 'Eerst het weer', 'Vädret först'),
        text: text('In July and August, put the exposed climbs of Cruz de Pinto, El Fuerte and the long GR 249 stage into the early hours and keep them away from midday heat. For the Higuerón, rain and the conditions of the previous days matter as well. Use the seasonal pattern first, then AEMET for the actual day.', 'Im Juli und August gehören die offenen Anstiege von Cruz de Pinto, El Fuerte und der langen GR-249-Etappe in die frühen Stunden und nicht in die Mittagshitze. Beim Higuerón zählen zusätzlich Regen und die Bedingungen der vorherigen Tage. Nutzt zuerst das Saisonmuster und danach AEMET für den konkreten Tag.', 'En julio y agosto, situad las subidas expuestas de la Cruz de Pinto, El Fuerte y la larga etapa del GR 249 en las primeras horas y fuera del calor del mediodía. En el Higuerón también importan la lluvia y las condiciones de los días anteriores. Usad primero el patrón estacional y después AEMET para el día concreto.', 'Plan in juli en augustus de open beklimmingen van Cruz de Pinto, El Fuerte en de lange GR 249-etappe in de vroege uren en buiten de middaghitte. Voor de Higuerón tellen ook regen en de omstandigheden van de dagen ervoor. Gebruik eerst het seizoenspatroon en daarna AEMET voor de concrete dag.', 'I juli och augusti lägger ni de öppna stigningarna på Cruz de Pinto, El Fuerte och den långa GR 249-etappen under de tidiga timmarna och utanför middagshettan. För Higuerón spelar även regn och de föregående dagarnas förhållanden roll. Använd först säsongsmönstret och sedan AEMET för den aktuella dagen.')
      },
      {
        id: 'navigation',
        title: text('Carry the route', 'Route mitnehmen', 'Llevad la ruta', 'Neem de route mee', 'Ta med rutten'),
        text: text('Open the official source and save the chosen Komoot track before leaving. Do not rely on sparse signs or mobile coverage alone.', 'Öffnet die offizielle Quelle und speichert den gewählten Komoot-Track vor dem Aufbruch. Verlasst euch nicht allein auf wenige Schilder oder Mobilfunk.', 'Abrid la fuente oficial y guardad el track elegido de Komoot antes de salir. No dependáis solo de una señalización escasa o de la cobertura móvil.', 'Open de officiële bron en sla de gekozen Komoot-track op voor vertrek. Vertrouw niet alleen op beperkte markering of mobiel bereik.', 'Öppna den officiella källan och spara det valda Komoot-spåret före start. Förlita er inte enbart på gles skyltning eller mobiltäckning.')
      },
      {
        id: 'water-footwear',
        title: text('Water and footwear', 'Wasser und Schuhe', 'Agua y calzado', 'Water en schoenen', 'Vatten och skor'),
        text: text('Carry enough water for the chosen commitment and wear footwear suited to rock, loose ground or a riverbed. Turn back when conditions do not match the plan.', 'Nehmt ausreichend Wasser für das gewählte Vorhaben mit und tragt Schuhe für Fels, losen Untergrund oder Flussbett. Kehrt um, wenn die Bedingungen nicht zum Plan passen.', 'Llevad agua suficiente para el plan elegido y calzado adecuado para roca, terreno suelto o cauce. Dad la vuelta si las condiciones no encajan con el plan.', 'Neem genoeg water mee voor de gekozen tocht en draag schoenen voor rotsen, losse ondergrond of rivierbedding. Keer om als de omstandigheden niet bij het plan passen.', 'Ta med tillräckligt med vatten för den valda turen och skor för klippor, löst underlag eller flodbädd. Vänd om när förhållandena inte stämmer med planen.')
      }
    ]
  },
  combine: {
    title: text('Connect the hike to the rest of the stay', 'Die Wanderung mit dem restlichen Aufenthalt verbinden', 'Conectad la ruta con el resto de la estancia', 'Verbind de wandeling met de rest van het verblijf', 'Koppla vandringen till resten av vistelsen'),
    intro: text('Once the route choice is clear, these are the next useful questions.', 'Wenn die Route feststeht, sind das die nächsten hilfreichen Fragen.', 'Cuando la ruta esté clara, estas son las siguientes preguntas útiles.', 'Als de routekeuze duidelijk is, zijn dit de volgende nuttige vragen.', 'När rutten är vald är det här de nästa användbara frågorna.'),
    items: [
      {
        id: 'weather',
        token: 'weather_frigiliana',
        title: text('Will the day suit this route?', 'Passt der Tag zu dieser Route?', '¿Encaja el día con esta ruta?', 'Past de dag bij deze route?', 'Passar dagen för den här rutten?'),
        text: text('The weather guide explains why spring and autumn are often more forgiving for longer routes, why exposed summer routes belong in the morning and when the current AEMET forecast must change the plan.', 'Der Wetter-Guide erklärt, warum Frühling und Herbst für längere Routen häufig angenehmer sind, warum offene Sommerrouten in den Morgen gehören und wann die aktuelle AEMET-Vorhersage den Plan verändern muss.', 'La guía del tiempo explica por qué primavera y otoño suelen ser más llevaderos para rutas largas, por qué las rutas expuestas de verano corresponden a la mañana y cuándo la previsión actual de AEMET debe cambiar el plan.', 'De weergids legt uit waarom lente en herfst vaak prettiger zijn voor langere routes, waarom open zomerroutes in de ochtend horen en wanneer de actuele AEMET-verwachting het plan moet veranderen.', 'Väderguiden förklarar varför vår och höst ofta är mer förlåtande för längre turer, varför öppna sommarleder hör till morgonen och när AEMETs aktuella prognos måste ändra planen.'),
        label: text('Open weather guide', 'Wetter-Guide öffnen', 'Abrir la guía del tiempo', 'Open de weergids', 'Öppna väderguiden')
      },
      {
        id: 'restaurants',
        token: 'frigiliana_food_authority',
        title: text('Where will you eat afterwards?', 'Wo esst ihr danach?', '¿Dónde comeréis después?', 'Waar eten jullie daarna?', 'Var äter ni efteråt?'),
        text: text('Choose a village restaurant after the route instead of leaving the final decision to tired legs.', 'Wählt nach der Route ein Restaurant im Dorf, statt die letzte Entscheidung müden Beinen zu überlassen.', 'Elegid un restaurante del pueblo para después de la ruta y no dejéis la última decisión a unas piernas cansadas.', 'Kies vooraf een restaurant in het dorp, zodat vermoeide benen niet de laatste beslissing nemen.', 'Välj en restaurang i byn efter turen i stället för att låta trötta ben ta det sista beslutet.'),
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
    title: text('Stay in Frigiliana, choose the mountain day well', 'In Frigiliana wohnen und den Bergtag gut wählen', 'Alojarse en Frigiliana y elegir bien el día de montaña', 'Verblijf in Frigiliana en kies de bergdag goed', 'Bo i Frigiliana och välj bergsdagen väl'),
    lead: text('Casa AMARA places you in the historic centre for the start and finish of the day. The route itself remains governed by its official start, current conditions and chosen navigation.', 'Casa AMARA liegt im historischen Zentrum – praktisch für Anfang und Ende des Tages. Für die Route selbst zählen offizieller Start, aktuelle Bedingungen und die gewählte Navigation.', 'Casa AMARA os sitúa en el casco histórico para empezar y terminar el día. La ruta se rige por su salida oficial, las condiciones actuales y la navegación elegida.', 'Casa AMARA ligt in de historische kern voor het begin en einde van de dag. Voor de route zelf gelden de officiële start, actuele omstandigheden en gekozen navigatie.', 'Casa AMARA ligger i den historiska bykärnan för dagens början och slut. Själva rutten styrs av officiell start, aktuella förhållanden och vald navigering.'),
    availabilityCta: text('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet'),
    staysCta: text('View Frigiliana stays', 'Unterkünfte in Frigiliana ansehen', 'Ver alojamientos en Frigiliana', 'Bekijk verblijven in Frigiliana', 'Se boenden i Frigiliana')
  }
} as const;

export type FrigilianaHikingPageCopy = Resolved<typeof frigilianaHikingContent>;

export function getFrigilianaHikingContent(lang: AmaraLanguage): FrigilianaHikingPageCopy {
  return resolveLocale(frigilianaHikingContent, lang);
}

export const frigilianaHikingSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-hiking-v2.1',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/hero-frigiliana.jpg',
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
