import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { vacationRentalEntitiesByKey } from './vacationRentalEntities';
import type { WinterStaysLocale } from './winterStaysContent';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const playa = vacationRentalEntitiesByKey['amara-playa'];
const hasPlayaAmenity = (name: string) =>
  playa.amenityFeatures.some((feature) => feature.name === name && feature.value === true);

if (!['wifi', 'washingMachine', 'kitchen', 'balcony', 'elevator'].every(hasPlayaAmenity)) {
  throw new Error('[Nerja Winter Stays] AMARA Playa copy is out of sync with vacationRentalEntities.');
}

const article = {
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const nerjaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-21-nerja-winter-stays-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Nerja in Winter: Winter Sun, Coast & Longer Stays', description: 'Plan a winter stay in Nerja around coastal walks, town life, all-weather culture and AMARA Playa — with honest limits on weather and seasonal beach services.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Nerja im Winter: Wintersonne, Küste & längere Aufenthalte', description: 'Plant Nerja im Winter mit Küstenspaziergängen, Stadtleben, wetterfesten Kulturzielen und AMARA Playa – ohne falsche Wetter- oder Strandversprechen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Nerja en invierno: sol, costa y estancias más largas', description: 'Planificad Nerja en invierno con paseos costeros, vida urbana, cultura para días variables y AMARA Playa, sin promesas falsas de tiempo o playa.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Nerja in de winter: winterzon, kust & langer verblijf', description: 'Plan Nerja in de winter rond kustwandelingen, stadsleven, cultuur voor wisselweer en AMARA Playa — met eerlijke grenzen rond weer en stranddiensten.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Nerja på vintern: vintersol, kust & längre vistelser', description: 'Planera Nerja på vintern med kustpromenader, stadsliv, kultur för skiftande dagar och AMARA Playa — utan falska väder- eller strandlöften.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sourceHrefs = {
  travelIntent: 'https://etc-corporate.org/reports/monitoring-sentiment-for-intra-european-travel-autumn-25-winter-2026/',
  cave: 'https://cuevadenerja.es/',
  museum: 'https://cuevadenerja.es/museodenerja/',
  lifeguards: 'https://www.nerja.es/el-servicio-de-vigilancia-y-socorrismo-de-playas-se-amplia-hasta-los-50-efectivos/'
} as const;

export const nerjaWinterStaysContent = {
  navLabel: l("Winter Stays", "Winteraufenthalte", "Estancias de invierno", "Winterverblijven", "Vintervistelser"),
  hero: {
    eyebrow: l("Winter stays · Nerja", "Winteraufenthalte · Nerja", "Estancias de invierno · Nerja", "Winterverblijven · Nerja", "Vintervistelser · Nerja"),
    title: l("Winter by the sea, with a town around you", "Winter am Meer – mit einer Stadt drum herum", "Invierno junto al mar, con una ciudad alrededor", "Winter aan zee, met een stad eromheen", "Vinter vid havet, med en stad omkring er"),
    standfirst: l("Nerja in winter is more than a search for a warmer number on a weather app. The coast remains part of everyday life, the town gives you alternatives when conditions change, and places such as the Cueva de Nerja and Museo de Nerja add genuine all-weather depth. The trade-off is important: the sea is not a heated pool, beach services are seasonal and no climate average guarantees your week.", "Nerja im Winter ist mehr als die Suche nach einer wärmeren Zahl in der Wetter-App. Die Küste bleibt Teil des Alltags, die Stadt bietet Alternativen bei wechselnden Bedingungen und Orte wie die Cueva de Nerja und das Museo de Nerja geben auch unbeständigen Tagen Substanz. Der wichtige Gegenpol: Das Meer ist kein beheizter Pool, Strandservices sind saisonal und kein Klimamittelwert garantiert eure Woche.", "Nerja en invierno es más que buscar una cifra más alta en la aplicación del tiempo. La costa sigue presente en la vida diaria, la ciudad ofrece alternativas cuando cambian las condiciones y la Cueva de Nerja y el Museo de Nerja aportan contenido real para cualquier tiempo. La contrapartida importa: el mar no es una piscina climatizada, los servicios de playa son estacionales y ninguna media garantiza vuestra semana.", "Nerja in de winter is meer dan zoeken naar een warmer getal in een weerapp. De kust blijft deel van het dagelijks leven, de stad biedt alternatieven wanneer omstandigheden veranderen en de Cueva de Nerja en het Museo de Nerja geven wisselende dagen echte inhoud. De keerzijde telt: de zee is geen verwarmd zwembad, stranddiensten zijn seizoensgebonden en geen klimaatgemiddelde garandeert jullie week.", "Nerja på vintern är mer än att leta efter en varmare siffra i en väderapp. Kusten är kvar i vardagen, staden ger alternativ när villkoren skiftar och Cueva de Nerja samt Museo de Nerja ger verkligt innehåll för alla väder. Motvikten är viktig: havet är ingen uppvärmd pool, strandtjänster är säsongsbundna och inget klimatmedel garanterar er vecka."),
    note: l("This guide separates published opening patterns and seasonal services from general impressions. Always check current hours, sea conditions and forecasts.", "Dieser Guide trennt veröffentlichte Öffnungsmuster und saisonale Services von allgemeinen Eindrücken. Prüft Öffnungszeiten, Meer und Vorhersage aktuell.", "La guía separa horarios publicados y servicios estacionales de impresiones generales. Comprobad horarios, mar y previsión actual.", "De gids scheidt gepubliceerde openingstijden en seizoensdiensten van algemene indrukken. Controleer actuele uren, zee en verwachting.", "Guiden skiljer publicerade öppningsmönster och säsongstjänster från allmänna intryck. Kontrollera aktuella tider, hav och prognos."),
    updated: l("Research and destination sources reviewed August 2026", "Recherche und Ortsquellen geprüft im August 2026", "Investigación y fuentes revisadas en agosto de 2026", "Onderzoek en bronnen gecontroleerd in augustus 2026", "Research och platskällor granskade i augusti 2026"),
    mark: l("WINTER", "WINTER", "INVIERNO", "WINTER", "VINTER")
  },
  facts: [
    {
      label: l("The appeal", "Der Reiz", "El atractivo", "De aantrekkingskracht", "Lockelsen"),
      value: l("Coast, daylight and everyday town life", "Küste, Tageslicht und städtischer Alltag", "Costa, luz y vida cotidiana", "Kust, daglicht en dagelijks stadsleven", "Kust, dagsljus och vardagligt stadsliv")
    },
    {
      label: l("All-weather anchors", "Bei jedem Wetter", "Para cualquier tiempo", "Voor elk weer", "För alla väder"),
      value: l("Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja")
    },
    {
      label: l("Remember", "Wichtig", "Recordad", "Onthoud", "Kom ihåg"),
      value: l("Sea conditions and beach services are seasonal", "Meer und Strandservices bleiben saisonabhängig", "Mar y servicios de playa son estacionales", "Zee en stranddiensten zijn seizoensgebonden", "Hav och strandtjänster är säsongsbundna")
    },
    {
      label: l("At AMARA Playa", "In AMARA Playa", "En AMARA Playa", "In AMARA Playa", "I AMARA Playa"),
      value: l("Kitchen · washing machine · Wi-Fi · lift · balcony", "Küche · Waschmaschine · WLAN · Aufzug · Balkon", "Cocina · lavadora · wifi · ascensor · balcón", "Keuken · wasmachine · wifi · lift · balkon", "Kök · tvättmaskin · wifi · hiss · balkong")
    }
  ],
  sections: [
    {
      id: "when-summer-leaves",
      eyebrow: l("01 · Why winter", "01 · Warum Winter", "01 · Por qué invierno", "01 · Waarom winter", "01 · Varför vinter"),
      title: l("Why Nerja works beyond the beach season", "Warum Nerja jenseits der Strandsaison funktioniert", "Por qué Nerja funciona fuera de la temporada de playa", "Waarom Nerja buiten het strandseizoen werkt", "Varför Nerja fungerar utanför strandsäsongen"),
      paragraphs: [
        l("Winter travel can be motivated by brighter days, fewer crowds, better value and avoiding peak heat. Nerja adds a practical advantage: coast and town sit together, so a stay does not depend on one perfect beach forecast.", "Winterreisen können durch hellere Tage, weniger Andrang, bessere Preise und das Vermeiden großer Hitze motiviert sein. Nerja verbindet Küste und Stadt, sodass der Aufenthalt nicht von einer perfekten Strandvorhersage abhängt.", "Los días luminosos, menos aglomeraciones, el valor y evitar el calor intenso pueden motivar el viaje. Nerja une costa y ciudad, de modo que la estancia no depende de una previsión perfecta.", "Lichtere dagen, minder drukte, waarde en het vermijden van hitte kunnen motieven zijn. Nerja combineert kust en stad, zodat het verblijf niet van één perfecte stranddag afhangt.", "Ljusare dagar, färre folkmassor, värde och att undvika stark värme kan motivera resan. Nerja kombinerar kust och stad så vistelsen inte beror på en perfekt strandprognos."),
        l("Winter is an invitation to use the coast differently — for walks, light, views and an ordinary daily rhythm — with cultural and indoor options alongside.", "Das bedeutet nicht, dass Winter wie Sommer ist. Die Küste wird anders genutzt: für Spaziergänge, Licht, Ausblicke und Alltag, ergänzt durch kulturelle und wetterfeste Optionen.", "No significa que el invierno sea verano: la costa sirve para pasear, mirar y vivir el día a día, con opciones culturales cuando cambia el tiempo.", "Winter is geen zomer: gebruik de kust voor wandelen, licht en uitzicht, met cultuur als het weer verandert.", "Vintern är inte sommar: använd kusten för promenader, ljus och utsikt, med kultur när vädret skiftar.")
      ]
    },
    {
      id: "northern-winter",
      eyebrow: l("02 · Local winter", "02 · Lokaler Winter", "02 · Invierno local", "02 · Lokale winter", "02 · Lokal vinter"),
      title: l("A coastal town, not a resort switched off for the season", "Eine Küstenstadt – kein Ferienort mit ausgeschaltetem Schalter", "Una ciudad costera, no un complejo apagado", "Een kuststad, geen resort dat wordt uitgeschakeld", "En kuststad, inte en avstängd semesterort"),
      paragraphs: [
        l("Nerja keeps its residents, streets, shops and cultural life through the winter, though opening hours and individual businesses change with the season.", "Nerja behält im Winter seine Bewohner, Straßen, Geschäfte und Kulturorte – Öffnungszeiten und einzelne Betriebe ändern sich allerdings mit der Saison.", "Nerja mantiene en invierno sus residentes, calles, comercios y vida cultural, aunque los horarios y algunos negocios cambian con la temporada.", "Nerja houdt bewoners, straten en cultuur, maar we zeggen niet dat alles precies als in de zomer draait. Uren veranderen.", "Nerja behåller sina boende, gator, butiker och sitt kulturliv på vintern – öppettider och enskilda verksamheter ändras dock med säsongen."),
        l("What can be stated more precisely is that the Cueva de Nerja publishes a year-round 2026 opening pattern with closure dates, while Museo de Nerja publishes regular opening through the year and describes an ongoing cultural programme. Check again for your dates.", "Konkreter ist: Die Cueva de Nerja veröffentlicht für 2026 ein ganzjähriges Öffnungsmuster mit Schließtagen. Das Museo de Nerja nennt regelmäßige Öffnung über das Jahr und ein fortlaufendes Kulturprogramm. Prüft beides für eure Daten.", "La Cueva publica un patrón anual 2026 con cierres concretos; el Museo publica horarios regulares y actividad cultural durante el año. Comprobad las fechas.", "De grot publiceert voor 2026 een jaarpatroon met sluitingsdagen; het museum regelmatige uren en een cultureel programma. Controleer jullie data.", "Grottan publicerar ett årsmönster för 2026 med stängningsdagar; museet regelbundna tider och kulturprogram. Kontrollera era datum.")
      ]
    },
    {
      id: "winter-light",
      eyebrow: l("03 · A realistic day", "03 · Ein realistischer Tag", "03 · Un día realista", "03 · Een realistische dag", "03 · En realistisk dag"),
      title: l("Coast when it is inviting, culture when it is not", "Küste, wenn sie einlädt – Kultur, wenn nicht", "Costa cuando invita, cultura cuando no", "Kust wanneer het uitnodigt, cultuur wanneer niet", "Kust när den lockar, kultur när den inte gör det"),
      paragraphs: [
        l("A winter day can begin with a walk near Torrecilla or through the centre, continue with lunch in town and use the cave or museum when conditions make a longer coast plan less attractive.", "Ein Wintertag kann mit einem Spaziergang bei Torrecilla oder durch das Zentrum beginnen, mit Mittagessen weitergehen und Höhle oder Museum einbauen, wenn längere Küstenpläne weniger attraktiv sind.", "Podéis empezar cerca de Torrecilla o en el centro, comer en la ciudad y recurrir a la cueva o al museo si la costa no invita a un plan largo.", "Begin bij Torrecilla of in het centrum, lunch in de stad en kies grot of museum wanneer een lang kustplan minder aantrekkelijk is.", "Börja vid Torrecilla eller i centrum, ät lunch i stan och välj grotta eller museum när en lång kustplan känns mindre bra."),
        l("Leave space in the schedule. You may get a bright terrace afternoon, a cloudy walking day or weather that makes time at home the better choice. A flexible sequence is more realistic than a list of guaranteed outdoor experiences.", "Lasst Spielraum: sonniger Terrassennachmittag, bewölkter Wandertag oder Zeit zuhause sind alles realistische Varianten.", "Dejad margen para terraza, paseo nublado o tiempo en casa. La flexibilidad es más realista que garantizar experiencias exteriores.", "Laat ruimte voor terras, bewolkte wandeling of thuisblijven. Flexibiliteit is realistischer dan garanties.", "Lämna utrymme för terrass, molnig promenad eller tid hemma. Flexibilitet är mer realistisk än garantier.")
      ]
    },
    {
      id: "changing-days",
      eyebrow: l("04 · Weather boundary", "04 · Wettergrenze", "04 · Límite meteorológico", "04 · Weersgrens", "04 · Vädergräns"),
      title: l("Milder is not the same as predictable", "Milder bedeutet nicht vorhersehbar", "Más suave no significa previsible", "Zachter is niet hetzelfde als voorspelbaar", "Mildare betyder inte förutsägbart"),
      paragraphs: [
        l("Nerja’s Climate & Seasons guide explains the coastal setting, seasonal rain and sea temperatures. Use it for long-term orientation, then use the current official forecast and sea information for the dates of your stay.", "Der Klima-Guide erklärt Küstenlage, Regenverteilung und Wassertemperaturen. Danach zählen die offizielle Vorhersage und aktuelle Meerinformationen für eure Reisedaten.", "La guía climática explica costa, lluvia y mar. Para vuestras fechas importan la previsión oficial y la información marítima actual.", "De klimaatgids legt kust, regen en zee uit. Gebruik daarna actuele officiële verwachting en zee-informatie.", "Klimatguiden förklarar kust, regn och hav. Använd sedan aktuell officiell prognos och havsinformation."),
        l("We do not borrow Málaga Airport values as if they were measured in Nerja, and we do not transfer Torrox’s historic climate superlative. Winter planning should stay useful and local without pretending the future week is known.", "Wir geben Málaga-Flughafenwerte nicht als Nerja-Messung aus und übertragen den historischen Torrox-Superlativ nicht. Nützliche Planung braucht keine falsche Sicherheit.", "No presentamos datos del aeropuerto de Málaga como mediciones de Nerja ni trasladamos el superlativo histórico de Torrox.", "We presenteren Málaga Airport niet als Nerja-meting en nemen Torrox’ historische superlatief niet over.", "Vi presenterar inte Málaga flygplats som Nerja-mätning och överför inte Torrox historiska superlativ.")
      ]
    },
    {
      id: "quieter-tarifa",
      eyebrow: l("05 · Stay longer", "05 · Länger bleiben", "05 · Quedarse más", "05 · Langer blijven", "05 · Stanna längre"),
      title: l("What changes when a holiday becomes a routine", "Was sich ändert, wenn Urlaub zur Routine wird", "Cuando las vacaciones se convierten en rutina", "Wanneer vakantie routine wordt", "När semester blir rutin"),
      paragraphs: [
        l("A longer stay changes the questions. Grocery shopping, laundry, cooking, Wi-Fi and an easy route home matter more than fitting every landmark into two days.", "Bei längeren Aufenthalten werden Einkaufen, Wäsche, Kochen, WLAN und der einfache Heimweg wichtiger als ein dichtes Sehenswürdigkeitenprogramm.", "En una estancia larga importan compra, colada, cocina, wifi y regreso sencillo más que acumular visitas.", "Boodschappen, wassen, koken, wifi en eenvoudig thuiskomen worden belangrijker dan elk hoogtepunt in twee dagen.", "Matinköp, tvätt, matlagning, wifi och enkel väg hem blir viktigare än att pressa in allt på två dagar."),
        l("Searches for “winter rental” can imply monthly or residential stays. AMARA Playa is presented here as a holiday home; the actual duration, price and conditions are those shown in the current booking process.", "„Winter Rental“ kann Monats- oder Wohnmiete erwarten lassen. AMARA Playa wird als Ferienwohnung angeboten; Dauer, Preis und Konditionen zeigt der aktuelle Buchungsprozess.", "“Winter rental” puede sugerir alquiler mensual. AMARA Playa es vivienda turística; duración, precio y condiciones son los del proceso de reserva actual.", "“Winter rental” kan maandhuur suggereren. AMARA Playa is vakantieverblijf; actuele boeking toont duur, prijs en voorwaarden.", "“Winter rental” kan antyda månadshyra. AMARA Playa är semesterboende; aktuell bokning visar längd, pris och villkor.")
      ]
    },
    {
      id: "winter-day",
      eyebrow: l("06 · Home comfort", "06 · Wohnkomfort", "06 · Confort en casa", "06 · Comfort thuis", "06 · Komfort hemma"),
      title: l("AMARA Playa as a compact everyday base", "AMARA Playa als kompakte Alltagsbasis", "AMARA Playa como base cotidiana compacta", "AMARA Playa als compacte dagelijkse basis", "AMARA Playa som kompakt vardagsbas"),
      paragraphs: [
        l("AMARA Playa is a 37 m² fifth-floor apartment for two with a lift. Current property records include a kitchen, washing machine, Wi-Fi and balcony — practical features when you stay long enough to develop a routine.", "AMARA Playa ist ein 37 m² großes Apartment für zwei im fünften Stock mit Aufzug. Die aktuellen Objektdaten nennen Küche, Waschmaschine, WLAN und Balkon.", "AMARA Playa es un apartamento de 37 m² para dos, en la quinta planta con ascensor. Los registros actuales incluyen cocina, lavadora, wifi y balcón.", "AMARA Playa is 37 m² voor twee op de vijfde verdieping met lift. Actuele objectdata noemt keuken, wasmachine, wifi en balkon.", "AMARA Playa är 37 m² för två på femte våningen med hiss. Aktuell objektdata omfattar kök, tvättmaskin, wifi och balkong."),
        l("Winter suitability is not reduced to an amenity list. If temperature control, workspace or a particular sun orientation is decisive, confirm it before booking rather than relying on a general destination page.", "Wenn Temperaturregelung, Arbeitsplatz oder eine bestimmte Sonnenausrichtung entscheidend sind, bestätigt diese Punkte vor der Buchung.", "Si climatización, espacio de trabajo u orientación solar son decisivos, confirmadlos antes de reservar.", "Bevestig klimaatregeling, werkplek of zonligging als die beslissend zijn.", "Bekräfta temperaturkontroll, arbetsplats eller solläge om det är avgörande.")
      ]
    },
    {
      id: "home-matters",
      eyebrow: l("07 · Fit and non-fit", "07 · Passt – oder passt nicht", "07 · Encaja o no", "07 · Past wel of niet", "07 · Passar eller inte"),
      title: l("Who will enjoy Nerja in winter — and who may not", "Wer Nerja im Winter genießen wird", "Quién disfrutará Nerja en invierno", "Wie Nerja in de winter waardeert", "Vem uppskattar Nerja på vintern?"),
      paragraphs: [
        l("It can suit couples who want the coast close, everyday town life and alternatives to beach time. It also works for guests who prefer a compact base and like to move through the destination on foot.", "Nerja kann zu Paaren passen, die Küste, städtischen Alltag und Alternativen zum Strand suchen und eine kompakte Basis bevorzugen.", "Puede encajar con parejas que quieren costa, vida urbana y alternativas a la playa desde una base compacta.", "Het past bij stellen die kust, stadsleven en alternatieven voor strandtijd vanuit een compacte basis zoeken.", "Det kan passa par som vill ha kust, stadsliv och alternativ till strandtid från en kompakt bas."),
        l("It may not fit guests seeking guaranteed swimming weather, full summer beach services, a large apartment or a residential monthly let. Winter is a coastal stay with variation, not a substitute for July.", "Weniger passend ist es bei garantiertem Badewetter, vollständigem Sommer-Strandservice, viel Wohnfläche oder dem Wunsch nach offener Monatsmiete.", "Encaja menos si necesitáis baño garantizado, todos los servicios estivales, una vivienda grande o alquiler mensual residencial.", "Minder bij gegarandeerd zwemweer, volledige zomerdiensten, veel woonruimte of residentiële maandhuur.", "Mindre för garanterat badväder, alla sommartjänster, stor bostad eller bostadsmånadshyra.")
      ]
    },
    {
      id: "who-enjoys-winter",
      eyebrow: l("08 · Plan with local context", "08 · Mit Ortskenntnis planen", "08 · Planificar con contexto", "08 · Plannen met context", "08 · Planera med sammanhang"),
      title: l("Check what changes with the season", "Prüft, was sich mit der Saison verändert", "Comprobad lo que cambia con la temporada", "Controleer wat per seizoen verandert", "Kontrollera vad som ändras med säsongen"),
      paragraphs: [
        l("Municipal lifeguard and surveillance services are described as seasonal summer operations. That does not mean the coast is closed; it means winter swimming and sea access require current conditions and personal judgement.", "Kommunale Überwachungs- und Rettungsdienste am Strand werden als saisonale Sommerangebote beschrieben. Das bedeutet nicht geschlossene Küste, sondern mehr Verantwortung für aktuelle Bedingungen.", "La vigilancia y el socorrismo municipal se describen como servicios estivales. La costa no está cerrada, pero exige condiciones actuales y criterio personal.", "Gemeentelijke strandbewaking en redding worden als zomerdienst beschreven. De kust is niet dicht, maar actuele omstandigheden tellen.", "Kommunal strandbevakning och räddning beskrivs som sommartjänster. Kusten är inte stängd, men aktuella villkor styr."),
        l("Use the weather, geography and where-to-stay guides for stable orientation. Recheck museum hours, transport, businesses and official safety information close to travel.", "Nutzt Wetter, Geografie und Wo übernachten für stabile Orientierung. Öffnungszeiten, Verkehr, Betriebe und Sicherheit prüft ihr kurz vor der Reise.", "Usad clima, geografía y zonas para lo estable; revisad horarios, transporte y seguridad cerca del viaje.", "Gebruik weer, geografie en verblijfszones voor vaste context; controleer uren, vervoer en veiligheid kort voor vertrek.", "Använd väder, geografi och områden för stabil kontext; kontrollera tider, transport och säkerhet nära resan.")
      ]
    },
    {
      id: "amara-la-marina",
      eyebrow: l("09 · Your winter base", "09 · Eure Winterbasis", "09 · Vuestra base", "09 · Jullie basis", "09 · Er bas"),
      title: l("Choose Nerja for the coast-and-town combination", "Wählt Nerja für die Verbindung aus Küste und Stadt", "Elegid Nerja por la combinación de costa y ciudad", "Kies Nerja voor kust én stad", "Välj Nerja för kust och stad tillsammans"),
      paragraphs: [
        l("AMARA Playa places two guests close to Torrecilla and central Nerja while providing the everyday basics of an apartment. Its winter value is the combination of location and routine, not an invented promise about permanent sun.", "AMARA Playa liegt für zwei Gäste nahe Torrecilla und dem Zentrum und bietet die praktischen Grundlagen eines Apartments. Der Winterwert liegt in Lage und Routine, nicht in einem Sonnengarantie-Versprechen.", "AMARA Playa acerca a dos huéspedes a Torrecilla y al centro con los básicos cotidianos de un apartamento. Su valor está en esa combinación cotidiana.", "AMARA Playa brengt twee gasten dicht bij Torrecilla en het centrum met dagelijkse appartementbasis. De waarde is ligging en routine, geen zonbelofte.", "AMARA Playa placerar två gäster nära Torrecilla och centrum med lägenhetens vardagsgrunder. Värdet är läge och rutin, inte solgaranti."),
        l("First decide whether that coastal-town model fits your trip. Then view the apartment and current booking conditions. If village atmosphere and a historic home matter more, compare Frigiliana before choosing.", "Entscheidet zuerst, ob dieses Aufenthaltsmodell passt. Danach seht ihr euch Apartment und aktuelle Buchungsbedingungen an; für Dorfatmosphäre vergleicht ihr Frigiliana.", "Decidid si encaja el modelo costero y urbano; después consultad apartamento y condiciones. Comparad Frigiliana si preferís pueblo histórico.", "Bepaal eerst of dit model past; bekijk dan appartement en voorwaarden. Vergelijk Frigiliana voor historische dorpssfeer.", "Avgör om modellen passar; se sedan lägenhet och villkor. Jämför Frigiliana för historisk bykänsla.")
      ]
    }
  ],
  related: {
    eyebrow: l("Continue planning", "Weiter planen", "Seguir planificando", "Verder plannen", "Planera vidare"),
    title: l("Connect the winter idea to the real place", "Die Winteridee mit dem echten Ort verbinden", "Conectad el invierno con el lugar real", "Verbind het winteridee met de echte plek", "Koppla vinteridén till den verkliga platsen"),
    links: [
      {
        token: "nerja_weather" as LinkToken,
        label: l("Weather & Seasons", "Wetter & Jahreszeiten", "Clima y estaciones", "Weer & seizoenen", "Väder & årstider"),
        text: l("Coastal climate, sea temperature and current-forecast boundaries.", "Küstenklima, Wassertemperatur und Grenzen der Vorhersage.", "Clima costero, mar y límites de la previsión.", "Kustklimaat, zee en voorspellingsgrenzen.", "Kustklimat, hav och prognosgränser.")
      },
      {
        token: "nerja_where_to_stay" as LinkToken,
        label: l("Where to Stay", "Wo übernachten", "Dónde alojarse", "Waar verblijven", "Var ska man bo"),
        text: l("Areas, routes and the practical meaning of staying near the coast or centre.", "Lagen, Wege und die praktische Bedeutung von Küsten- oder Zentrumsnähe.", "Zonas, recorridos y significado práctico de costa o centro.", "Gebieden, routes en kust- of centrumligging.", "Områden, vägar och kust- eller centrumläge.")
      },
      {
        token: "nerja_geography" as LinkToken,
        label: l("Geography & Orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
        text: l("Cliffs, beaches, town and the landscape around Nerja.", "Klippen, Strände, Stadt und Landschaft.", "Acantilados, playas, ciudad y paisaje.", "Kliffen, stranden, stad en landschap.", "Klippor, stränder, stad och landskap.")
      },
      {
        token: "nerja_daily_life" as LinkToken,
        label: l("Daily Life & Essentials", "Alltag & Versorgung", "Vida diaria y servicios", "Dagelijks leven", "Vardag & service"),
        text: l("Shopping, services and ordinary practical planning.", "Einkaufen, Services und praktische Planung.", "Compras, servicios y planificación.", "Winkels, diensten en planning.", "Inköp, tjänster och planering.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these facts come from", "Woher diese Angaben stammen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l("Published opening patterns and seasonal beach services come from official destination sources; the general winter travel motives from European research.", "Öffnungsmuster und saisonale Strandservices stammen aus offiziellen Quellen, die allgemeinen Reisemotive im Winter aus europäischer Forschung.", "Los horarios y los servicios estacionales proceden de fuentes oficiales; los motivos generales de viaje, de la investigación europea.", "Openingstijden en seizoensdiensten komen uit officiële bronnen, de algemene winterse reismotieven uit Europees onderzoek.", "Öppettider och säsongstjänster kommer från officiella källor, de allmänna vintermotiven från europeisk forskning."),
    checked: l("Sources reviewed 21 August 2026", "Quellen geprüft am 21. August 2026", "Fuentes revisadas el 21 de agosto de 2026", "Bronnen gecontroleerd op 21 augustus 2026", "Källor granskade 21 augusti 2026"),
    links: [
      {
        label: l("European Travel Commission · winter travel sentiment", "European Travel Commission · Reisestimmung im Winter", "European Travel Commission · invierno", "European Travel Commission · winter", "European Travel Commission · vinter"),
        text: l("European intentions and the boundary between survey plans and bookings.", "Absichten und Grenze zwischen Befragungsplan und Buchung.", "Intenciones y diferencia entre planes y reservas.", "Intenties versus boekingen.", "Avsikter jämfört med bokningar."),
        href: "https://etc-corporate.org/reports/monitoring-sentiment-for-intra-european-travel-autumn-25-winter-2026/"
      },
      {
        label: l("Cueva de Nerja · 2026 opening information", "Cueva de Nerja · Öffnungszeiten 2026", "Cueva de Nerja · horarios 2026", "Cueva de Nerja · uren 2026", "Cueva de Nerja · tider 2026"),
        text: l("Published year-round pattern with specified closure dates.", "Veröffentlichtes Jahresmuster mit benannten Schließtagen.", "Patrón anual publicado con cierres.", "Gepubliceerd jaarpatroon.", "Publicerat årsmönster."),
        href: "https://cuevadenerja.es/"
      },
      {
        label: l("Museo de Nerja · opening and programme", "Museo de Nerja · Öffnung und Programm", "Museo de Nerja · horarios y programa", "Museo de Nerja · uren en programma", "Museo de Nerja · tider och program"),
        text: l("Published hours and cultural activity information.", "Veröffentlichte Zeiten und Kulturinformationen.", "Información cultural publicada.", "Gepubliceerde cultuurinformatie.", "Publicerad kulturinformation."),
        href: "https://cuevadenerja.es/museodenerja/"
      },
      {
        label: l("Ayuntamiento de Nerja · beach surveillance", "Ayuntamiento de Nerja · Strandüberwachung", "Ayuntamiento · vigilancia de playas", "Gemeente · strandbewaking", "Kommunen · strandbevakning"),
        text: l("Municipal description of the seasonal summer service.", "Kommunale Beschreibung des saisonalen Sommerdienstes.", "Descripción del servicio estival.", "Beschrijving zomerdienst.", "Beskrivning av sommartjänst."),
        href: "https://www.nerja.es/el-servicio-de-vigilancia-y-socorrismo-de-playas-se-amplia-hasta-los-50-efectivos/"
      }
    ]
  },
  closing: {
    eyebrow: l("Winter on the coast, honestly explained", "Winter an der Küste, ehrlich erklärt", "Invierno en la costa, explicado con honestidad", "Winter aan de kust, eerlijk uitgelegd", "Vinter vid kusten, ärligt förklarad"),
    title: l("Choose Nerja for the life around the sea", "Wählt Nerja für das Leben rund um das Meer", "Elegid Nerja por la vida alrededor del mar", "Kies Nerja voor het leven rond de zee", "Välj Nerja för livet kring havet"),
    body: l("Nerja can make winter feel more open without turning it into guaranteed summer. If coast, town and a compact apartment routine are the right combination, continue to AMARA Playa and check the current conditions for your stay.", "Nerja kann den Winter offener wirken lassen, ohne ihn zum garantierten Sommer zu erklären. Wenn Küste, Stadt und kompakter Apartmentalltag passen, geht weiter zu AMARA Playa.", "Nerja abre el invierno sin fingir que es verano. Si encajan costa, ciudad y un apartamento compacto, continuad a AMARA Playa.", "Nerja kan winter opener maken zonder gegarandeerde zomer te beloven. Past kust, stad en compact appartementleven, ga dan door naar AMARA Playa.", "Nerja kan göra vintern öppnare utan att lova garanterad sommar. Om kust, stad och kompakt lägenhetsliv passar, fortsätt till AMARA Playa."),
    locationLabel: l("Explore Nerja", "Nerja entdecken", "Descubrir Nerja", "Ontdek Nerja", "Upptäck Nerja"),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Visa AMARA Playa")
  }
};
