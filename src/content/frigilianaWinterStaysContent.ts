import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { vacationRentalEntitiesByKey } from './vacationRentalEntities';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

/** One authored sequence in the five AMARA locales. The locales may segment it differently. */
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

const winterRentalKeys = ['amara-farah', 'amara-lounis', 'amara-zaid', 'amara-maha'] as const;
const pelletStoveKeys = ['amara-lounis', 'amara-zaid', 'amara-maha'] as const;
const hasAmenity = (key: (typeof winterRentalKeys)[number], name: string) =>
  vacationRentalEntitiesByKey[key].amenityFeatures.some(
    (feature) => feature.name === name && feature.value === true
  );

if (
  !winterRentalKeys.every((key) => hasAmenity(key, 'heating'))
  || !winterRentalKeys.every((key) => vacationRentalEntitiesByKey[key].bathroomUnderfloorHeating)
  || !pelletStoveKeys.every((key) => hasAmenity(key, 'pelletStove'))
) {
  throw new Error('[Frigiliana Winter Stays] Winter-comfort copy is out of sync with vacationRentalEntities.');
}

const article = {
  datePublished: '2026-08-11',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const frigilianaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-21-frigiliana-winter-stays-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Frigiliana in Winter: Winter Sun & Longer Stays', description: 'Discover winter in Frigiliana: quieter village days, hill walks, realistic weather planning and heated AMARA stays for a few nights to three weeks.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Frigiliana im Winter: Wintersonne & längere Aufenthalte', description: 'Entdeckt Frigiliana im Winter: ruhigere Dorftage, Wanderungen, ehrliche Wetterplanung und beheizte AMARA-Unterkünfte für einige Nächte bis drei Wochen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Frigiliana en invierno: sol y estancias más largas', description: 'Descubrid Frigiliana en invierno: días tranquilos, rutas, planificación realista y alojamientos AMARA con calefacción para unas noches o hasta tres semanas.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Frigiliana in de winter: winterzon & langer verblijf', description: 'Ontdek Frigiliana in de winter: rustige dorpsdagen, wandelingen, eerlijke weersplanning en verwarmde AMARA-verblijven voor enkele nachten tot drie weken.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Frigiliana på vintern: vintersol & längre vistelser', description: 'Upptäck Frigiliana på vintern: lugnare dagar, vandring, realistisk väderplanering och uppvärmda AMARA-boenden för några nätter till tre veckor.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sourceHrefs = {
  travelIntent: 'https://etc-corporate.org/reports/monitoring-sentiment-for-intra-european-travel-autumn-25-winter-2026/',
  streets: 'https://turismofrigiliana.es/es/las-calles.html',
  elFuerte: 'https://www.turismofrigiliana.es/es/el-fuerte.html'
} as const;

export const frigilianaWinterStaysContent = {
  navLabel: l("Winter Stays", "Winteraufenthalte", "Estancias de invierno", "Winterverblijven", "Vintervistelser"),
  hero: {
    eyebrow: l("Winter stays · Frigiliana", "Winteraufenthalte · Frigiliana", "Estancias de invierno · Frigiliana", "Winterverblijven · Frigiliana", "Vintervistelser · Frigiliana"),
    title: l("A winter that makes room for the village", "Ein Winter mit mehr Raum für das Dorf", "Un invierno con más espacio para el pueblo", "Een winter met meer ruimte voor het dorp", "En vinter med mer plats för byn"),
    standfirst: l("Winter in Frigiliana exchanges northern darkness and summer intensity for brighter days, quieter lanes and time outdoors whenever conditions allow. The historic village remains steep, evenings can feel cool and some plans stay weather-dependent. That is precisely why the right home matters: a comfortable base for slow mornings, hill walks, coast days and evenings indoors.", "Der Winter in Frigiliana tauscht nordeuropäische Dunkelheit und sommerliche Intensität gegen hellere Tage, ruhigere Gassen und Zeit draußen, wann immer das Wetter mitspielt. Das historische Dorf bleibt steil, Abende können kühl wirken und manche Pläne bleiben wetterabhängig. Genau deshalb zählt das richtige Zuhause: als komfortable Basis für langsame Morgen, Wanderungen, Küstentage und Abende drinnen.", "El invierno en Frigiliana cambia la oscuridad del norte y la intensidad del verano por días más luminosos, calles tranquilas y tiempo al aire libre siempre que acompañen las condiciones. El casco histórico sigue siendo empinado, las tardes pueden sentirse frescas y algunos planes dependen del tiempo. Por eso importa la casa adecuada: una base cómoda para mañanas lentas, rutas, días de costa y tardes en el interior.", "De winter in Frigiliana verruilt noordelijke duisternis en zomerse drukte voor lichtere dagen, rustige straatjes en tijd buiten wanneer het weer meewerkt. Het historische dorp blijft steil, avonden kunnen fris aanvoelen en plannen blijven deels weersafhankelijk. Juist daarom telt het juiste huis: een comfortabele basis voor trage ochtenden, wandelingen, kustdagen en avonden binnen.", "Vintern i Frigiliana byter nordligt mörker och sommarens intensitet mot ljusare dagar, lugnare gränder och tid utomhus när vädret tillåter. Den historiska byn är fortfarande brant, kvällarna kan kännas svala och vissa planer förblir väderberoende. Därför betyder rätt hem mycket: en bekväm bas för långsamma morgnar, vandring, kustdagar och kvällar inomhus."),
    note: l("Destination facts are source-based. Home details come from AMARA’s current property records and should be checked again when booking.", "Ortsfakten sind quellenbasiert. Angaben zu den Unterkünften stammen aus den aktuellen AMARA-Objektdaten und sollten bei der Buchung bestätigt werden.", "Los datos del destino proceden de fuentes. La información de las casas procede de los registros actuales de AMARA y debe confirmarse al reservar.", "Bestemmingsfeiten zijn brongebaseerd. Huisdetails komen uit de actuele AMARA-objectgegevens en moeten bij boeking worden bevestigd.", "Fakta om platsen bygger på källor. Hemdetaljer kommer från AMARAs aktuella objektdata och bör bekräftas vid bokning."),
    updated: l("Research and property records reviewed August 2026", "Recherche und Objektdaten geprüft im August 2026", "Investigación y datos de las casas revisados en agosto de 2026", "Onderzoek en objectgegevens gecontroleerd in augustus 2026", "Research och objektdata granskade i augusti 2026"),
    mark: l("WINTER", "WINTER", "INVIERNO", "WINTER", "VINTER")
  },
  facts: [
    {
      label: l("The appeal", "Der Reiz", "El atractivo", "De aantrekkingskracht", "Lockelsen"),
      value: l("Village rhythm instead of peak-season intensity", "Dorfleben statt Hochsaison-Intensität", "Ritmo de pueblo frente a la intensidad estival", "Dorpsritme in plaats van hoogseizoendrukte", "Byrytm i stället för högsäsongens intensitet")
    },
    {
      label: l("Underfoot", "Unterwegs", "El terreno", "Onderweg", "Under fötterna"),
      value: l("Narrow, winding and steep historic streets", "Enge, verwinkelte und steile Altstadtgassen", "Calles estrechas, sinuosas y empinadas", "Smalle, kronkelende en steile straten", "Smala, slingrande och branta gator")
    },
    {
      label: l("Plan for", "Einplanen", "Conviene prever", "Reken op", "Planera för"),
      value: l("Flexible days and cooler evenings", "Flexible Tage und kühlere Abende", "Días flexibles y tardes más frescas", "Flexibele dagen en frisse avonden", "Flexibla dagar och svalare kvällar")
    },
    {
      label: l("At AMARA", "Bei AMARA", "En AMARA", "Bij AMARA", "Hos AMARA"),
      value: l("Heating · warm bathroom floors · three pellet stoves", "Heizung · warme Badböden · drei Pelletöfen", "Calefacción · suelo radiante · tres estufas de pellets", "Verwarming · warme badkamervloeren · drie pelletkachels", "Värme · varma badrumsgolv · tre pelletskaminer")
    }
  ],
  sections: [
    {
      id: "when-summer-leaves",
      eyebrow: l("01 · Why winter", "01 · Warum Winter", "01 · Por qué invierno", "01 · Waarom winter", "01 · Varför vinter"),
      title: l("Why leave northern winter for Frigiliana?", "Warum dem nordeuropäischen Winter nach Frigiliana entkommen?", "¿Por qué cambiar el invierno del norte por Frigiliana?", "Waarom de Noord-Europese winter inruilen voor Frigiliana?", "Varför lämna den nordiska vintern för Frigiliana?"),
      paragraphs: [
        l("The attraction is the combination of daylight, outdoor possibilities and a different pace. European travel research also points to fewer crowds, lower costs and avoiding extreme heat as important reasons for shifting trips away from peak months.", "Der Reiz ist die Verbindung aus Tageslicht, Möglichkeiten draußen und einem anderen Tempo. Europäische Reiseforschung nennt außerdem weniger Andrang, geringere Kosten und das Vermeiden extremer Hitze als wichtige Motive für Reisen außerhalb der Spitzenmonate.", "El atractivo es la combinación de luz, posibilidades al aire libre y otro ritmo. La investigación europea también señala menos aglomeraciones, ahorro y evitar el calor extremo como motivos para viajar fuera de los meses punta.", "De aantrekkingskracht is daglicht, buitenmogelijkheden en een ander tempo. Europees onderzoek noemt ook minder drukte, lagere kosten en het vermijden van extreme hitte als motieven voor reizen buiten de piekmaanden.", "Lockelsen är dagsljus, möjligheter utomhus och ett annat tempo. Europeisk forskning nämner också färre folkmassor, lägre kostnader och att undvika extrem värme som skäl att resa utanför toppmånaderna."),
        l("Frigiliana gives that choice a strong sense of place: white houses, a real hillside village and the Mediterranean landscape close by. Winter works best for guests who want to experience the destination rather than reproduce a summer beach holiday.", "Frigiliana gibt dieser Entscheidung einen unverwechselbaren Ort: weiße Häuser, ein echtes Hangdorf und die Mittelmeerlandschaft in der Nähe. Der Winter passt am besten, wenn ihr das Reiseziel erleben und keinen Sommer-Strandurlaub nachstellen möchtet.", "Frigiliana aporta un lugar con identidad: casas blancas, un pueblo real en la ladera y el paisaje mediterráneo cerca. Funciona mejor para quien quiere vivir el destino y no reproducir unas vacaciones de playa en verano.", "Frigiliana geeft die keuze karakter: witte huizen, een echt heuveldorp en het mediterrane landschap dichtbij. De winter past bij wie de bestemming wil beleven en geen zomerse strandvakantie wil nabootsen.", "Frigiliana ger valet en tydlig plats: vita hus, en riktig by på sluttningen och medelhavslandskapet nära. Vintern passar den som vill uppleva destinationen och inte återskapa en sommarsemester.")
      ]
    },
    {
      id: "northern-winter",
      eyebrow: l("02 · Local winter", "02 · Lokaler Winter", "02 · Invierno local", "02 · Lokale winter", "02 · Lokal vinter"),
      title: l("The village after the day visitors thin out", "Das Dorf, wenn weniger Tagesgäste unterwegs sind", "El pueblo cuando disminuyen las visitas del día", "Het dorp wanneer er minder dagbezoekers zijn", "Byn när färre dagsbesökare är på plats"),
      paragraphs: [
        l("The historic centre does not become flat or effortless in winter. Its narrow, winding and steep lanes remain part of everyday life, while quieter periods can make it easier to notice the architecture and landscape around them.", "Die Altstadt wird im Winter weder flach noch mühelos. Enge, verwinkelte und steile Gassen bleiben Teil des Alltags; in ruhigeren Phasen fallen Architektur und Landschaft dafür stärker auf.", "El casco histórico no deja de ser empinado en invierno. Las calles estrechas y sinuosas siguen formando parte de la vida cotidiana, aunque con menos afluencia se perciben mejor la arquitectura y el paisaje.", "De oude kern wordt in de winter niet vlak of moeiteloos. Smalle, kronkelende en steile straten blijven deel van het dagelijks leven; in rustigere periodes vallen architectuur en landschap sterker op.", "Gamla stan blir inte platt eller enkel på vintern. Smala, slingrande och branta gator förblir del av vardagen, men i lugnare perioder framträder arkitekturen och landskapet tydligare."),
        l("Do not plan around the assumption that every restaurant or service keeps summer hours. Check what matters for your dates and treat the village’s slower rhythm as part of the stay, not as a promise that everything will be open.", "Plant nicht mit der Annahme, dass jedes Restaurant oder jeder Service die Sommerzeiten behält. Prüft, was für eure Reisedaten wichtig ist, und versteht den langsameren Rhythmus als Teil des Aufenthalts – nicht als Versprechen, dass alles geöffnet bleibt.", "No deis por hecho que todos los negocios mantienen el horario de verano. Comprobad lo importante para vuestras fechas y entended el ritmo pausado como parte de la estancia, no como promesa de que todo estará abierto.", "Ga er niet van uit dat elke zaak zomeruren houdt. Controleer wat voor jullie data belangrijk is en zie het tragere ritme als onderdeel van het verblijf.", "Räkna inte med att alla verksamheter håller sommartider. Kontrollera det som är viktigt för era datum och se det långsammare tempot som en del av vistelsen.")
      ]
    },
    {
      id: "winter-light",
      eyebrow: l("03 · A realistic day", "03 · Ein realistischer Tag", "03 · Un día realista", "03 · Een realistische dag", "03 · En realistisk dag"),
      title: l("Build the day around what the weather gives you", "Nutzt, was der jeweilige Tag möglich macht", "Construid el día con lo que permita el tiempo", "Bouw de dag rond wat het weer toelaat", "Bygg dagen kring vad vädret tillåter"),
      paragraphs: [
        l("A good winter day might begin slowly in the village, use the clearer middle hours for the streets or a walk, and leave Nerja or the coast as an option rather than an obligation. The El Fuerte route starts in Frigiliana, but its steps and exposed terrain require a current conditions check.", "Ein guter Wintertag kann langsam im Dorf beginnen, die klareren Stunden für die Gassen oder eine Wanderung nutzen und Nerja oder die Küste als Möglichkeit offenlassen. Die Route El Fuerte beginnt in Frigiliana; Stufen und exponiertes Gelände verlangen jedoch eine aktuelle Prüfung der Bedingungen.", "Un buen día puede empezar despacio en el pueblo, aprovechar las horas más claras para pasear o caminar y dejar Nerja o la costa como opción. La ruta de El Fuerte parte de Frigiliana, pero sus escalones y terreno expuesto exigen comprobar las condiciones.", "Begin rustig in het dorp, gebruik heldere uren voor de straatjes of een wandeling en houd Nerja of de kust als optie. De route El Fuerte begint in Frigiliana, maar trappen en blootgesteld terrein vragen een actuele controle.", "Börja långsamt i byn, använd klara timmar till gränder eller vandring och låt Nerja eller kusten vara ett alternativ. El Fuerte börjar i Frigiliana men trappor och exponerad terräng kräver aktuell kontroll."),
        l("If rain or wind changes the plan, the day is not lost. A long lunch, time at home or a cultural stop towards Nerja belongs in a realistic winter itinerary. Flexibility is more useful than a rigid checklist.", "Wenn Regen oder Wind den Plan ändert, ist der Tag nicht verloren. Ein langes Mittagessen, Zeit zuhause oder ein kultureller Abstecher Richtung Nerja gehören zu einem realistischen Winterprogramm. Flexibilität ist wertvoller als eine starre Liste.", "Si la lluvia o el viento cambian el plan, el día no está perdido. Una comida larga, tiempo en casa o una visita cultural hacia Nerja también forman parte de un invierno realista.", "Verandert regen of wind het plan, dan is de dag niet verloren. Een lange lunch, tijd thuis of cultuur richting Nerja hoort bij een realistische winter.", "Om regn eller vind ändrar planen är dagen inte förlorad. En lång lunch, tid hemma eller kultur mot Nerja hör till en realistisk vinter.")
      ]
    },
    {
      id: "changing-days",
      eyebrow: l("04 · Weather boundary", "04 · Wettergrenze", "04 · Límite meteorológico", "04 · Weersgrens", "04 · Vädergräns"),
      title: l("Seasonal guidance is not your forecast", "Saisonale Orientierung ist keine Vorhersage", "La orientación estacional no es una previsión", "Seizoensinformatie is geen voorspelling", "Säsongsvägledning är inte en prognos"),
      paragraphs: ll(
        ["The climate guide explains long-term patterns, rainfall and the differences between the village and coast. For a winter stay, the practical message is simpler: bring layers, expect variation and check the official forecast before walks or longer outdoor plans."],
        ["Der Klima-Guide erklärt langfristige Muster, Niederschlag und die Unterschiede zwischen Dorf und Küste. Für euren Winteraufenthalt zählt vor allem: Kleidung in Schichten, wechselnde Bedingungen und die offizielle Vorhersage vor Wanderungen oder längeren Outdoor-Plänen."],
        ["La guía climática explica patrones, lluvia y diferencias entre pueblo y costa. Para la estancia importan las capas de ropa, aceptar variación y consultar la previsión oficial antes de rutas largas.", "No trasladamos a Frigiliana la antigua afirmación climática de Torrox ni prometemos temperaturas concretas. La página debe ayudar a decidir, no convertir medias en garantías."],
        ["De klimaatgids beschrijft patronen en verschillen tussen dorp en kust. Neem laagjes mee, verwacht variatie en controleer de officiële verwachting voor langere buitenplannen."],
        ["Klimatguiden förklarar mönster och skillnader mellan by och kust. Ta lager, vänta variation och kontrollera den officiella prognosen före längre utomhusplaner."]
      )
    },
    {
      id: "quieter-tarifa",
      eyebrow: l("05 · Stay longer", "05 · Länger bleiben", "05 · Quedarse más", "05 · Langer blijven", "05 · Stanna längre"),
      title: l("From a short reset to three unhurried weeks", "Vom kurzen Tapetenwechsel bis zu drei ruhigen Wochen", "De una pausa breve a tres semanas tranquilas", "Van een korte pauze tot drie rustige weken", "Från en kort paus till tre lugna veckor"),
      paragraphs: [
        l("A few nights can provide a change of scene; one to three weeks allow routines to develop. You can alternate village days, coast days and time at home instead of trying to fit every highlight into one forecast window.", "Ein paar Nächte schaffen Abstand; in ein bis drei Wochen entstehen Routinen. Dorf-, Küsten- und Zuhause-Tage lassen sich abwechseln, statt alle Höhepunkte in ein einziges Wetterfenster zu pressen.", "Unas noches cambian el escenario; entre una y tres semanas permiten crear rutinas y alternar pueblo, costa y casa según el tiempo.", "Enkele nachten geven afstand; één tot drie weken laten routines ontstaan en geven ruimte om dorp, kust en thuisdagen af te wisselen.", "Några nätter ger miljöombyte; en till tre veckor låter rutiner växa och ger utrymme för by-, kust- och hemmadagar."),
        l("AMARA’s current Frigiliana offer is for holiday stays of a few nights up to three weeks. It is not presented as residential overwintering or an open-ended monthly rental. Current availability and conditions apply.", "Das aktuelle Frigiliana-Angebot von AMARA umfasst Ferienaufenthalte von einigen Nächten bis zu drei Wochen. Es wird nicht als dauerhaftes Überwintern oder offene Monatsmiete angeboten. Es gelten die aktuellen Konditionen und Verfügbarkeiten.", "La oferta actual de AMARA en Frigiliana comprende estancias vacacionales de unas noches hasta tres semanas. No se presenta como alquiler residencial o mensual abierto; rigen disponibilidad y condiciones actuales.", "AMARA biedt in Frigiliana momenteel vakanties van enkele nachten tot drie weken, niet een open residentiële of maandelijkse huur. Actuele voorwaarden gelden.", "AMARAs aktuella erbjudande i Frigiliana är semestervistelser från några nätter till tre veckor, inte öppen bostads- eller månadshyra. Aktuella villkor gäller.")
      ]
    },
    {
      id: "winter-day",
      eyebrow: l("06 · Home comfort", "06 · Wohnkomfort", "06 · Confort en casa", "06 · Comfort thuis", "06 · Komfort hemma"),
      title: l("In winter, the house becomes part of the destination", "Im Winter wird das Zuhause Teil des Reiseziels", "En invierno, la casa forma parte del destino", "In de winter wordt het huis onderdeel van de bestemming", "På vintern blir hemmet en del av destinationen"),
      paragraphs: [
        l("All four AMARA stays in Frigiliana have heating and bathroom underfloor heating in the current property records. Lounis, Zaid and Maha also have pellet stoves. Those are practical differences when the evening is spent at home.", "Alle vier AMARA-Unterkünfte in Frigiliana verfügen laut aktuellen Objektdaten über Heizung und Fußbodenheizung im Bad. Lounis, Zaid und Maha haben zusätzlich einen Pelletofen. Diese praktischen Unterschiede zählen, wenn der Abend zuhause stattfindet.", "Los cuatro alojamientos AMARA en Frigiliana tienen calefacción y suelo radiante en el baño según los registros actuales. Lounis, Zaid y Maha cuentan además con estufa de pellets.", "Alle vier AMARA-verblijven hebben volgens de actuele objectgegevens verwarming en vloerverwarming in de badkamer. Lounis, Zaid en Maha hebben ook een pelletkachel.", "Alla fyra AMARA-boenden har enligt aktuell objektdata värme och golvvärme i badrummet. Lounis, Zaid och Maha har också pelletskamin."),
        l("Historic character does not remove the need for ordinary comfort. Choose by the space, terrace and equipment that fit your stay, and confirm any feature that is decisive for you before booking.", "Historischer Charakter ersetzt keinen Alltagskomfort. Wählt nach Raum, Terrasse und Ausstattung, die zu eurem Aufenthalt passen, und bestätigt vor der Buchung jedes Merkmal, das für euch entscheidend ist.", "El carácter histórico no sustituye la comodidad diaria. Elegid según espacio, terraza y equipamiento, y confirmad antes de reservar cualquier detalle decisivo.", "Kies op ruimte, terras en uitrusting en bevestig vóór boeking ieder detail dat doorslaggevend is.", "Välj efter yta, terrass och utrustning och bekräfta före bokning varje detalj som är avgörande för er.")
      ]
    },
    {
      id: "home-matters",
      eyebrow: l("07 · Fit and non-fit", "07 · Passt – oder passt nicht", "07 · Encaja o no encaja", "07 · Past wel of niet", "07 · Passar eller inte"),
      title: l("Who will enjoy Frigiliana in winter — and who may not", "Wer Frigiliana im Winter genießen wird", "Quién disfrutará Frigiliana en invierno", "Wie Frigiliana in de winter zal waarderen", "Vem uppskattar Frigiliana på vintern?"),
      paragraphs: [
        l("It can suit couples, walkers, slow travellers and guests who value village atmosphere more than constant entertainment. It also works well when the coast is an option but does not need to be outside the door.", "Die Jahreszeit kann zu Paaren, Wandernden, Slow Travellern und Gästen passen, denen Dorfatmosphäre wichtiger ist als ständige Unterhaltung. Sie funktioniert auch gut, wenn die Küste eine Option sein darf, aber nicht vor der Haustür liegen muss.", "Puede encajar con parejas, senderistas y viajeros lentos que valoran el ambiente del pueblo más que el entretenimiento continuo, y con quienes quieren la costa como opción.", "Het past bij stellen, wandelaars en langzame reizigers die dorpssfeer belangrijker vinden dan continu vermaak en de kust als optie zien.", "Det kan passa par, vandrare och långsamma resenärer som värderar byatmosfär mer än ständig underhållning och ser kusten som ett alternativ."),
        l("It may be a poor fit if steep streets are a serious barrier, if guaranteed beach weather is essential or if you expect every summer business and service to operate unchanged. Honest fit is more useful than a universal recommendation.", "Weniger passend ist sie, wenn steile Wege ein großes Hindernis sind, garantiertes Strandwetter unverzichtbar ist oder alle Sommerangebote unverändert verfügbar sein sollen. Ehrliche Passung hilft mehr als eine pauschale Empfehlung.", "Encaja menos si las cuestas son un obstáculo serio, necesitáis tiempo de playa garantizado o esperáis que toda la oferta de verano funcione igual.", "Het past minder bij wie steile straten moeilijk vindt, gegarandeerd strandweer nodig heeft of verwacht dat alles als in de zomer werkt.", "Det passar mindre om branta gator är ett stort hinder, garanterat strandväder krävs eller allt förväntas fungera som på sommaren.")
      ]
    },
    {
      id: "who-enjoys-winter",
      eyebrow: l("08 · Plan with local context", "08 · Mit Ortskenntnis planen", "08 · Planificar con contexto", "08 · Plannen met context", "08 · Planera med sammanhang"),
      title: l("Separate stable knowledge from today’s conditions", "Trennt stabiles Wissen von den Bedingungen heute", "Separad el conocimiento estable de las condiciones actuales", "Scheid vaste kennis van de omstandigheden van vandaag", "Skilj stabil kunskap från dagens villkor"),
      paragraphs: [
        l("Use the Weather & Seasons guide for climate context and the Where to Stay guide for slopes, stairs and daily routes. Then check the forecast, current opening hours and transport for your actual dates.", "Nutzt „Wetter & Jahreszeiten“ für den Klimakontext und „Wo übernachten“ für Steigungen, Treppen und tägliche Wege. Prüft anschließend Vorhersage, Öffnungszeiten und Verkehr für eure konkreten Reisedaten.", "Usad Clima y estaciones para el contexto y Dónde alojarse para cuestas, escaleras y recorridos. Después comprobad previsión, horarios y transporte para vuestras fechas.", "Gebruik Weer & seizoenen voor klimaat en Waar verblijven voor hellingen, trappen en routes. Controleer daarna verwachting, openingstijden en vervoer voor jullie data.", "Använd Väder & årstider för klimat och Var ska man bo för backar, trappor och vägar. Kontrollera sedan prognos, öppettider och transport för era datum."),
        l("AMARA’s role is to explain the village and the homes clearly. Personal winter routines and business recommendations will be added only when they can be dated and distinguished from general destination facts.", "AMARA erklärt Dorf und Unterkünfte so klar wie möglich. Persönliche Winterroutinen und Empfehlungen zu Betrieben ergänzen wir nur, wenn sie datiert und sauber von allgemeinen Ortsfakten getrennt werden können.", "AMARA explica pueblo y casas con claridad. Las rutinas personales y recomendaciones de negocios solo se añadirán cuando puedan fecharse y distinguirse de los hechos generales.", "Persoonlijke routines en bedrijfstips voegen we alleen toe wanneer ze gedateerd en duidelijk als ervaring te herkennen zijn.", "Personliga rutiner och företagstips läggs bara till när de kan dateras och tydligt märkas som erfarenhet.")
      ]
    },
    {
      id: "amara-la-marina",
      eyebrow: l("09 · Your winter base", "09 · Eure Winterbasis", "09 · Vuestra base", "09 · Jullie winterbasis", "09 · Er vinterbas"),
      title: l("Choose the Frigiliana stay that fits your winter", "Wählt die Unterkunft, die zu eurem Winter passt", "Elegid la casa que encaje con vuestro invierno", "Kies het verblijf dat bij jullie winter past", "Välj boendet som passar er vinter"),
      paragraphs: [
        l("Farah is the more compact option, while Lounis, Zaid and Maha add pellet stoves and different private outdoor spaces. The right choice depends on how long you stay, how much time you expect to spend at home and which features matter most.", "Farah ist die kompaktere Option; Lounis, Zaid und Maha ergänzen einen Pelletofen und unterschiedliche private Außenbereiche. Welche Unterkunft passt, hängt von Aufenthaltsdauer, Zeit zuhause und euren wichtigsten Ausstattungswünschen ab.", "Farah es la opción más compacta; Lounis, Zaid y Maha añaden estufa de pellets y distintos espacios exteriores privados. La elección depende de duración, tiempo en casa y prioridades.", "Farah is compacter; Lounis, Zaid en Maha voegen pelletkachels en verschillende buitenruimtes toe. De keuze hangt af van duur, tijd thuis en prioriteiten.", "Farah är kompaktare; Lounis, Zaid och Maha erbjuder pelletskaminer och olika privata uteplatser. Valet beror på längd, tid hemma och prioriteringar."),
        l("Start with the winter proposition, compare the individual homes and then check live availability. The page does not need a climate superlative: the real offer is a memorable village and a comfortable place to return to.", "Beginnt mit dem Wintergefühl, vergleicht dann die einzelnen Unterkünfte und prüft die Live-Verfügbarkeit. Die Seite braucht keinen Klima-Superlativ: Das echte Angebot ist ein besonderes Dorf und ein komfortabler Rückzugsort.", "Comparad los alojamientos y consultad la disponibilidad real. La propuesta no necesita un superlativo climático: consiste en un pueblo singular y una casa cómoda a la que volver.", "Vergelijk de huizen en controleer live beschikbaarheid. Het echte aanbod is een bijzonder dorp en een comfortabele plek om naar terug te keren.", "Jämför hemmen och kontrollera live-tillgänglighet. Det verkliga erbjudandet är en minnesvärd by och ett bekvämt hem att återvända till.")
      ]
    }
  ],
  related: {
    eyebrow: l("Continue planning", "Weiter planen", "Seguir planificando", "Verder plannen", "Planera vidare"),
    title: l("Put climate, terrain and location together", "Klima, Wege und Lage zusammendenken", "Unid clima, terreno y ubicación", "Combineer klimaat, terrein en ligging", "Kombinera klimat, terräng och läge"),
    links: [
      {
        token: "weather_frigiliana" as LinkToken,
        label: l("Weather & Seasons", "Wetter & Jahreszeiten", "Clima y estaciones", "Weer & seizoenen", "Väder & årstider"),
        text: l("Climate patterns, seasons and the official forecast boundary.", "Klimamuster, Jahreszeiten und die Grenze zur aktuellen Vorhersage.", "Patrones climáticos, estaciones y previsión actual.", "Klimaatpatronen, seizoenen en actuele verwachting.", "Klimatmönster, årstider och aktuell prognos.")
      },
      {
        token: "frigiliana_stairs" as LinkToken,
        label: l("Where to Stay", "Wo übernachten", "Dónde alojarse", "Waar verblijven", "Var ska man bo"),
        text: l("Slopes, stairs and how different parts of the village affect daily life.", "Steigungen, Treppen und die Unterschiede im Alltag der verschiedenen Lagen.", "Cuestas, escaleras y diferencias prácticas entre zonas.", "Hellingen, trappen en dagelijkse verschillen per zone.", "Backar, trappor och vardagliga skillnader mellan områden.")
      },
      {
        token: "frigiliana_geography" as LinkToken,
        label: l("Geography & Orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
        text: l("Understand the hillside village, the coast and the wider landscape.", "Das Hangdorf, die Küste und die größere Landschaft verstehen.", "El pueblo en ladera, la costa y el paisaje.", "Het heuveldorp, de kust en het landschap.", "Sluttningsbyn, kusten och landskapet.")
      },
      {
        token: "nerja_vs_frigiliana" as LinkToken,
        label: l("Frigiliana or Nerja?", "Frigiliana oder Nerja?", "¿Frigiliana o Nerja?", "Frigiliana of Nerja?", "Frigiliana eller Nerja?"),
        text: l("Compare village life with staying directly on the coast.", "Dorfleben mit einem Aufenthalt direkt an der Küste vergleichen.", "Comparad el pueblo con una estancia junto al mar.", "Vergelijk het dorp met direct verblijf aan de kust.", "Jämför byliv med boende direkt vid kusten.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these facts come from", "Woher diese Angaben stammen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l("Terrain and route context come from official destination sources, the travel motives from European research, and the comfort details from our own current property records.", "Gelände und Routenkontext stammen aus offiziellen Ortsquellen, die Reisemotive aus europäischer Reiseforschung und die Komfortangaben aus unseren eigenen aktuellen Objektdaten.", "El terreno y las rutas proceden de fuentes oficiales, los motivos de viaje de la investigación europea y los detalles de confort de nuestros propios registros actuales.", "Terrein en route komen uit officiële bronnen, de reismotieven uit Europees onderzoek en de comfortdetails uit onze eigen actuele objectgegevens.", "Terräng och rutt kommer från officiella källor, resmotiven från europeisk forskning och komfortuppgifterna från våra egna aktuella objektdata."),
    checked: l("Sources reviewed 21 August 2026", "Quellen geprüft am 21. August 2026", "Fuentes revisadas el 21 de agosto de 2026", "Bronnen gecontroleerd op 21 augustus 2026", "Källor granskade 21 augusti 2026"),
    links: [
      {
        label: l("European Travel Commission · winter travel sentiment", "European Travel Commission · Reisestimmung im Winter", "European Travel Commission · viajes de invierno", "European Travel Commission · winterreizen", "European Travel Commission · vinterresor"),
        text: l("European travel intent and the boundary between stated plans and actual bookings.", "Europäische Reiseabsichten und die Grenze zwischen Planung und tatsächlicher Buchung.", "Intención europea y diferencia entre planes y reservas.", "Europese intentie en het verschil tussen plannen en boekingen.", "Europeisk resavsikt och skillnaden mellan planer och bokningar."),
        href: sourceHrefs.travelIntent
      },
      {
        label: l("Turismo de Frigiliana · historic streets", "Turismo de Frigiliana · historische Gassen", "Turismo de Frigiliana · calles históricas", "Turismo de Frigiliana · historische straten", "Turismo de Frigiliana · historiska gator"),
        text: l("Official description of the old quarter’s narrow, winding and steep lanes.", "Offizielle Beschreibung der engen, verwinkelten und steilen Altstadtwege.", "Descripción oficial de las calles estrechas, sinuosas y empinadas.", "Officiële beschrijving van smalle, kronkelende en steile straten.", "Officiell beskrivning av smala, slingrande och branta gator."),
        href: sourceHrefs.streets
      },
      {
        label: l("Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte"),
        text: l("Official route context beginning in the village.", "Offizieller Routenkontext mit Start im Dorf.", "Contexto oficial de la ruta que comienza en el pueblo.", "Officiële routecontext vanuit het dorp.", "Officiell ruttkontext från byn."),
        href: sourceHrefs.elFuerte
      }
    ]
  },
  closing: {
    eyebrow: l("Winter, without the sales fiction", "Winter ohne Verkaufsfiktion", "Invierno sin ficción comercial", "Winter zonder verkoopfictie", "Vinter utan säljfiktion"),
    title: l("Stay for the village — choose the home for the evening", "Kommt wegen des Dorfes – wählt das Zuhause für den Abend", "Venid por el pueblo; elegid la casa para la tarde", "Kom voor het dorp; kies het huis voor de avond", "Kom för byn; välj hemmet för kvällen"),
    body: l("Frigiliana in winter rewards guests who want atmosphere, landscape and time rather than guaranteed summer conditions. Compare the AMARA homes, decide which winter comforts matter and check current availability for your dates.", "Frigiliana im Winter passt zu Gästen, die Atmosphäre, Landschaft und Zeit wichtiger finden als garantierte Sommerbedingungen. Vergleicht die AMARA-Unterkünfte, entscheidet über euren Winterkomfort und prüft die aktuelle Verfügbarkeit.", "Frigiliana en invierno recompensa a quien busca ambiente, paisaje y tiempo, no condiciones estivales garantizadas. Comparad las casas AMARA y consultad la disponibilidad actual.", "Frigiliana in de winter past bij gasten die sfeer, landschap en tijd waarderen boven gegarandeerde zomercondities. Vergelijk de AMARA-huizen en bekijk de actuele beschikbaarheid.", "Frigiliana på vintern passar gäster som värderar atmosfär, landskap och tid mer än garanterade sommarvillkor. Jämför AMARA-hemmen och se aktuell tillgänglighet."),
    locationLabel: l("Explore Frigiliana", "Frigiliana entdecken", "Descubrir Frigiliana", "Ontdek Frigiliana", "Upptäck Frigiliana"),
    propertyLabel: l("Check winter availability", "Winterverfügbarkeit prüfen", "Consultar disponibilidad", "Bekijk winterbeschikbaarheid", "Kontrollera vintertillgänglighet")
  }
};
