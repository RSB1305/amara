import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, Resolved } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });



const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

export const tarifaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-tarifa-geography-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Tarifa? Strait, Atlantic, Mediterranean and Africa',
      description: 'Why Tarifa is Europe’s southernmost mainland city: Punta de Tarifa, the 1808 causeway, Strait, Atlantic coast and Africa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Tarifa? Atlantik, Mittelmeer, Meerenge und Afrika',
      description: 'Warum Tarifa Europas südlichste Festlandstadt ist: Punta de Tarifa, Damm von 1808, Meerenge, Atlantikküste und Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Tarifa: Atlántico, Mediterráneo y África',
      description: 'Por qué Tarifa es la ciudad más meridional de la Europa continental: Punta de Tarifa, dique de 1808, Estrecho y África.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Tarifa? Oceaan, Middellandse Zee en Afrika',
      description: 'Waarom Tarifa de zuidelijkste stad op het Europese vasteland is: Punta de Tarifa, dam van 1808, Straat en Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Tarifa? Atlanten, Medelhavet, sundet och Afrika',
      description: 'Varför Tarifa är Europas sydligaste stad på fastlandet: Punta de Tarifa, vallen från 1808, sundet och Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=11035',
  ign: 'https://www.ign.es/web/preguntas-frecuentes',
  island: 'https://turismodetarifa.com/que-visitar/isla-tarifa/',
  history: 'https://turismodetarifa.com/que-visitar/historia/',
  marineFramework: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/I_Marco%20General_Estrecho%20y%20Alboran_tcm30-130896.pdf',
  continentalDistance: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/parteiiianalisiseconomicoysocialdmesal_tcm30-498343.pdf',
  emergencyPlan: 'https://www.aytotarifa.com/wp-content/uploads/2024/11/Plan-de-Emergencia-municipal-Ayuntamiento-de-Tarifa.pdf',
  losLances: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/playa-de-los-lances/255035',
  laMarina: 'https://www.aytotarifa.com/wp-content/uploads/2024/08/Anuncio-Encargo-gestion-servicios-de-aparcamientos-municipales-temporada-2024.pdf',
  officialTarifa: 'https://www.andalucia.org/listing/tarifa/19308102/',
  naturalPark: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-del-estrecho',
  tarifaNature: 'https://turismodetarifa.com/que-hacer/parques-naturales-senderismo/',
  coastalPlan: 'https://www.juntadeandalucia.es/boja/2003/18/1',
  aemetWind: 'https://repositorio.aemet.es/bitstream/20.500.11765/16813/1/TyC_2024_84%20%289%29.pdf',
  summerTime: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-4026',
  solarTime: 'https://www.timeanddate.com/sun/%409796343?month=6'
} as const;

export const tarifaGeographyContent = {
  navLabel: l("Geography & Orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
  hero: {
    eyebrow: l("Tarifa geography guide", "Geografie-Guide Tarifa", "Guía geográfica de Tarifa", "Geografiegids Tarifa", "Geografiguide Tarifa"),
    title: l("Where is Tarifa?", "Wo liegt Tarifa?", "¿Dónde está Tarifa?", "Waar ligt Tarifa?", "Var ligger Tarifa?"),
    subtitle: l("Europe’s southernmost mainland city", "Die südlichste Stadt des europäischen Festlands", "La ciudad más meridional de la Europa continental", "De zuidelijkste stad op het Europese vasteland", "Europas sydligaste stad på fastlandet"),
    standfirst: l("Tarifa is **Europe’s southernmost mainland city**. Punta de Tarifa lies on the island joined to town by the 1808 causeway; westward opens the Atlantic coast, while the Strait and Mediterranean-facing coast continue east.", "Tarifa ist die **südlichste Stadt auf dem europäischen Festland**. Die Punta de Tarifa liegt auf der Insel, die seit 1808 über einen Damm mit der Stadt verbunden ist; westlich öffnet sich die Atlantikküste, östlich folgen Meerenge und mediterrane Küste.", "Tarifa es la **ciudad más meridional de la Europa continental**. Punta de Tarifa está en la isla unida a la ciudad por el dique de 1808; al oeste se abre el litoral atlántico y al este continúan el Estrecho y la costa mediterránea.", "Tarifa is de **zuidelijkste stad op het Europese vasteland**. Punta de Tarifa ligt op het eiland dat sinds de dam van 1808 met de stad is verbonden; westwaarts opent de Atlantische kust en oostwaarts volgen Straat en mediterrane kust.", "Tarifa är **Europas sydligaste stad på fastlandet**. Punta de Tarifa ligger på ön som sedan 1808 är förbunden med staden genom vallen; västerut öppnar Atlantkusten och österut fortsätter sundet och den mediterrana kusten."),
    note: l("Orientation and official figures. Wind, water and visibility change from day to day — check the forecast for your own dates.", "Orientierung und amtliche Zahlen. Wind, Wasser und Sicht ändern sich täglich – prüft die Vorhersage für eure Reisedaten.", "Orientación y datos oficiales. El viento, el agua y la visibilidad cambian a diario: consultad la previsión para vuestras fechas.", "Oriëntatie en officiële cijfers. Wind, water en zicht wisselen per dag — check de verwachting voor jullie eigen data.", "Orientering och officiella siffror. Vind, vatten och sikt växlar från dag till dag – kolla prognosen för era egna datum."),
    updated: l("Geography checked in August 2026", "Geografie geprüft im August 2026", "Geografía comprobada en agosto de 2026", "Geografie gecontroleerd in augustus 2026", "Geografin granskad i augusti 2026")
  },
  facts: [
    {
      label: l("Municipality", "Gemeindegebiet", "Municipio", "Gemeente", "Kommun"),
      value: l("419.93 km² · eight population centres", "419,93 km² · acht Siedlungskerne", "419,93 km² · ocho núcleos", "419,93 km² · acht woonkernen", "419,93 km² · åtta ortskärnor")
    },
    {
      label: l("Southern landmark", "Südlicher Bezugspunkt", "Referencia sur", "Zuidelijk punt", "Sydligt riktmärke"),
      value: l("Punta de Tarifa · about 36° N", "Punta de Tarifa · etwa 36° N", "Punta de Tarifa · unos 36° N", "Punta de Tarifa · circa 36° N", "Punta de Tarifa · cirka 36° N")
    },
    {
      label: l("Strait scale", "Breite der Meerenge", "Anchura del Estrecho", "Straatbreedte", "Sundets bredd"),
      value: l("About 14 km at central/eastern narrow sections", "Zentral/östlich etwa 14 km", "Tramos centrales/orientales · unos 14 km", "Centraal/oostelijk · circa 14 km", "Centralt/österut · cirka 14 km")
    },
    {
      label: l("Europe–Africa minimum", "Europa–Afrika minimal", "Europa–África mínimo", "Europa–Afrika minimum", "Europa–Afrika minimum"),
      value: l("About 14.4 km in the Strait zone", "Im Gebiet der Meerenge etwa 14,4 km", "Zona del Estrecho · unos 14,4 km", "Straatgebied · circa 14,4 km", "Sundsområdet · cirka 14,4 km")
    }
  ],
  orientation: {
    eyebrow: l("Orientation at a glance", "Orientierung auf einen Blick", "Orientación de un vistazo", "Oriëntatie in één oogopslag", "Orientering i korthet"),
    title: l("Read Tarifa from town to island, west coast and Strait", "Tarifa von der Stadt zur Insel, Westküste und Meerenge lesen", "Leed Tarifa desde la ciudad hacia la isla, el oeste y el Estrecho", "Lees Tarifa van stad naar eiland, westkust en Straat", "Läs Tarifa från staden till ön, västkusten och sundet"),
    intro: l("Four fixed points that make the rest of the map easy to read.", "Vier feste Punkte, mit denen sich der Rest der Karte von selbst erklärt.", "Cuatro puntos fijos con los que el resto del mapa se explica solo.", "Vier vaste punten waarmee de rest van de kaart zichzelf verklaart.", "Fyra fasta punkter som gör resten av kartan lätt att läsa."),
    items: [
      {
        label: l("Principal settlement", "Hauptort", "Núcleo principal", "Hoofdplaats", "Huvudort"),
        value: l("Tarifa · official reference 8 m", "Tarifa · amtlicher Bezug 8 m", "Tarifa · referencia oficial 8 m", "Tarifa · officiële referentie 8 m", "Tarifa · officiell referens 8 m")
      },
      {
        label: l("Southern axis", "Südachse", "Eje sur", "Zuidas", "Sydaxel"),
        value: l("Town · port · 1808 causeway · Isla de Tarifa", "Stadt · Hafen · Damm von 1808 · Isla de Tarifa", "Ciudad · puerto · dique de 1808 · Isla de Tarifa", "Stad · haven · dam van 1808 · Isla de Tarifa", "Stad · hamn · vallen från 1808 · Isla de Tarifa")
      },
      {
        label: l("West / Atlantic", "Westen / Atlantik", "Oeste / Atlántico", "West / Atlantisch", "Väst / Atlanten"),
        value: l("Los Lances · 226 ha protected natural area", "Los Lances · 226 ha geschütztes Naturgebiet", "Los Lances · espacio natural protegido de 226 ha", "Los Lances · beschermd natuurgebied 226 ha", "Los Lances · skyddat naturområde 226 ha")
      },
      {
        label: l("East / Strait", "Osten / Meerenge", "Este / Estrecho", "Oost / Straat", "Öst / Sundet"),
        value: l("Playa Chica · exchange toward the Mediterranean", "Playa Chica · Austausch Richtung Mittelmeer", "Playa Chica · intercambio hacia el Mediterráneo", "Playa Chica · uitwisseling naar de Middellandse Zee", "Playa Chica · utbyte mot Medelhavet")
      }
    ]
  },
  sections: [
    {
      id: "strait-of-gibraltar",
      eyebrow: l("01 · The narrow passage", "01 · Die schmale Passage", "01 · El paso estrecho", "01 · De smalle doorgang", "01 · Den smala passagen"),
      title: l("The Strait of Gibraltar sets the scale", "Die Straße von Gibraltar setzt den Maßstab", "El Estrecho de Gibraltar marca la escala", "De Straat van Gibraltar bepaalt de schaal", "Gibraltarsund sätter skalan"),
      paragraphs: [
        l("The Strait links the Atlantic Ocean with the Mediterranean and separates southern Europe from northern Africa. MITECO describes it as roughly 50 kilometres long, about 40 kilometres wide in the west and approximately 14 kilometres at its central and eastern narrow sections.", "Die Meerenge verbindet Atlantik und Mittelmeer und trennt Südeuropa von Nordafrika. MITECO beschreibt sie mit rund 50 Kilometern Länge, etwa 40 Kilometern Breite im Westen und ungefähr 14 Kilometern in den zentralen und östlichen Engstellen.", "MITECO describe el Estrecho con unos 50 kilómetros de longitud, cerca de 40 kilómetros de anchura al oeste y unos 14 en sus pasos centrales y orientales.", "MITECO beschrijft de Straat als circa 50 km lang, ongeveer 40 km breed in het westen en circa 14 km op centrale en oostelijke smalle delen.", "MITECO beskriver sundet som cirka 50 km långt, omkring 40 km brett i väster och cirka 14 km i centrala och östra smala delar."),
        l("At its narrowest, about 14.4 kilometres separate Europe from Africa. On clear days the Moroccan coast and the mountains behind it are visible from the town and from the beaches.", "An der engsten Stelle trennen Europa und Afrika ungefähr 14,4 Kilometer. An klaren Tagen sind die marokkanische Küste und die Berge dahinter vom Ort und von den Stränden aus zu sehen.", "En su punto más estrecho, unos 14,4 kilómetros separan Europa de África. En días claros se ven la costa marroquí y las montañas que la respaldan desde la ciudad y desde las playas.", "Op het smalste punt scheiden ongeveer 14,4 km Europa van Afrika. Op heldere dagen zijn de Marokkaanse kust en de bergen erachter zichtbaar vanuit de stad en vanaf de stranden.", "På det smalaste stället skiljer ungefär 14,4 km Europa från Afrika. Klara dagar syns den marockanska kusten och bergen bakom den från staden och från stränderna.")
      ]
    },
    {
      id: "atlantic-mediterranean",
      eyebrow: l("02 · Two coastal settings", "02 · Zwei Küstenwelten", "02 · Dos entornos costeros", "02 · Twee kustlandschappen", "02 · Två kustmiljöer"),
      title: l("Atlantic west, Mediterranean east", "Atlantik im Westen, Mittelmeer im Osten", "Atlántico al oeste, Mediterráneo al este", "Atlantische Oceaan west, Middellandse Zee oost", "Atlanten i väster, Medelhavet i öster"),
      paragraphs: [
        l("Local official orientation treats the island causeway as the meeting point: Playa Chica lies on the Strait/Mediterranean side, while Los Lances and Valdevaqueros extend west along the Atlantic coast.", "Die lokale amtliche Orientierung behandelt den Inseldamm als Treffpunkt: Playa Chica liegt auf der Seite von Meerenge und Mittelmeer, Los Lances und Valdevaqueros ziehen sich westwärts an der Atlantikküste entlang.", "La orientación local sitúa en el dique el encuentro: Playa Chica queda del lado del Estrecho y Los Lances–Valdevaqueros se extienden al oeste por el Atlántico.", "Lokale oriëntatie gebruikt de dam als ontmoetingspunt: Playa Chica ligt aan de Straatkant en Los Lances–Valdevaqueros loopt westwaarts langs de Atlantische kust.", "Lokal orientering använder vallen som mötespunkt: Playa Chica ligger på sundsidan och Los Lances–Valdevaqueros går västerut längs Atlantkusten."),
        l("MITECO describes the Strait and Alborán as a transition and exchange zone between Atlantic and Mediterranean water masses. The causeway is the line locals use to tell the two sides apart; in the water itself the two seas simply mix.", "MITECO beschreibt Meerenge und Alborán als Übergangs- und Austauschzone atlantischer und mediterraner Wassermassen. Der Damm ist die Linie, an der man vor Ort die beiden Seiten unterscheidet; im Wasser selbst vermischen sich die zwei Meere.", "MITECO describe una zona de transición e intercambio entre masas de agua atlánticas y mediterráneas. El dique es la línea con la que aquí se distinguen los dos lados; en el agua, los dos mares simplemente se mezclan.", "MITECO beschrijft een overgang en uitwisseling tussen Atlantische en mediterrane watermassa’s. De dam is de lijn waarmee men hier de twee kanten uit elkaar houdt; in het water zelf mengen de twee zeeën zich gewoon.", "MITECO beskriver övergång och utbyte mellan atlantiska och mediterrana vattenmassor. Vallen är linjen man använder här för att skilja de två sidorna åt; i vattnet blandas de två haven helt enkelt."),
        l("The municipality classifies about 33.5 kilometres of its coast as Atlantic and 10.5 kilometres as Mediterranean. That is why an exposed Atlantic afternoon at Los Lances and a calm hour at Playa Chica can belong to the same day.", "Die Gemeinde ordnet etwa 33,5 Kilometer ihrer Küste dem Atlantik und 10,5 Kilometer dem Mittelmeer zu. Deshalb können ein windiger Atlantiknachmittag an Los Lances und eine ruhige Stunde an der Playa Chica zum selben Tag gehören.", "El municipio clasifica unos 33,5 km de su costa como atlántica y 10,5 km como mediterránea. Por eso una tarde de Atlántico abierto en Los Lances y una hora tranquila en Playa Chica pueden pertenecer al mismo día.", "De gemeente rekent circa 33,5 km van haar kust tot de Atlantische Oceaan en 10,5 km tot de Middellandse Zee. Daardoor kunnen een winderige Atlantische middag bij Los Lances en een rustig uur op Playa Chica bij dezelfde dag horen.", "Kommunen räknar cirka 33,5 km av sin kust som Atlantkust och 10,5 km som mediterran kust. Därför kan en blåsig atlantisk eftermiddag vid Los Lances och en lugn timme på Playa Chica höra till samma dag.")
      ]
    },
    {
      id: "europe-africa",
      eyebrow: l("03 · Two continents", "03 · Zwei Kontinente", "03 · Dos continentes", "03 · Twee continenten", "03 · Två kontinenter"),
      title: l("Europe and Africa share the horizon", "Europa und Afrika teilen sich den Horizont", "Europa y África comparten el horizonte", "Europa en Afrika delen de horizon", "Europa och Afrika delar horisonten"),
      paragraphs: [
        l("IGN places Punta de Tarifa almost exactly on 36 degrees north. It sits on Isla de Tarifa, which was separate from the town before the causeway connected it in 1808.", "Das IGN verortet die Punta de Tarifa nahezu genau auf 36 Grad Nord. Sie liegt auf der Isla de Tarifa, die bis zum Bau des Damms im Jahr 1808 von der Stadt getrennt war.", "IGN sitúa Punta de Tarifa casi exactamente en 36° N, sobre la isla conectada a la ciudad por el dique de 1808.", "IGN plaatst Punta de Tarifa vrijwel exact op 36° N, op het eiland dat in 1808 met de stad werd verbonden.", "IGN placerar Punta de Tarifa nästan exakt på 36° N, på ön som anslöts till staden 1808."),
        l("Tarifa is therefore the southernmost city on the European mainland. Several European islands lie further south, but no mainland town does.", "Tarifa ist damit die südlichste Stadt des europäischen Festlands. Mehrere europäische Inseln liegen weiter südlich, aber kein Ort auf dem Festland.", "Tarifa es, por tanto, la ciudad más meridional de la Europa continental. Varias islas europeas quedan más al sur, pero ninguna población peninsular.", "Tarifa is daarmee de zuidelijkste stad op het Europese vasteland. Verschillende Europese eilanden liggen zuidelijker, maar geen enkele plaats op het vasteland.", "Tarifa är därmed den sydligaste staden på det europeiska fastlandet. Flera europeiska öar ligger längre söderut, men ingen ort på fastlandet.")
      ]
    },
    {
      id: "town-coast-hinterland",
      eyebrow: l("04 · Three landscapes", "04 · Drei Landschaften", "04 · Tres paisajes", "04 · Drie landschappen", "04 · Tre landskap"),
      title: l("Town, coast and hinterland sit close together", "Stadt, Küste und Hinterland liegen nah beieinander", "Ciudad, costa e interior están muy cerca", "Stad, kust en achterland liggen dicht bij elkaar", "Stad, kust och inland ligger nära varandra"),
      paragraphs: [
        l("Tarifa town occupies a compact coastal position, while beaches, low ground, hills and the protected landscapes of El Estrecho and Los Alcornocales spread around it.", "Tarifas kompakter Stadtraum liegt direkt an der Küste; rundherum breiten sich Strände, tiefere Ebenen, Hügel und die geschützten Landschaften von El Estrecho und Los Alcornocales aus.", "El núcleo compacto ocupa la costa junto a playas, terrenos bajos y colinas.", "De compacte stad ligt naast stranden, laag land en heuvels.", "Den kompakta staden ligger vid stränder, lågland och kullar."),
        l("A short map distance can therefore lead to a very different day: urban streets, exposed coast and rising inland terrain are separate settings. Multi-day plans work better when they alternate rather than treating Tarifa as one continuous beach strip.", "Eine kurze Distanz auf der Karte kann deshalb zu einem ganz anderen Tag führen: Stadtgassen, offene Küste und ansteigendes Hinterland sind eigene Umgebungen. Über mehrere Tage lohnt sich der Wechsel.", "Los Lances es un espacio protegido de 226 hectáreas al noroeste de la ciudad.", "Los Lances is een beschermd gebied van 226 hectare ten noordwesten van de stad.", "Los Lances är ett skyddat område på 226 hektar nordväst om staden.")
      ]
    },
    {
      id: "topography",
      eyebrow: l("05 · Relief and exposure", "05 · Relief und Exposition", "05 · Relieve y exposición", "05 · Reliëf en blootstelling", "05 · Relief och exponering"),
      title: l("Elevation changes routes, views and effort", "Höhe verändert Weg, Aussicht und Aufwand", "La altura cambia el camino, las vistas y el esfuerzo", "Hoogte verandert route, uitzicht en inspanning", "Höjd förändrar väg, utsikt och ansträngning"),
      paragraphs: [
        l("The protected coast includes plains, cliffs, hills and mountain massifs. Official local route mapping shows how terrain can rise from near sea level into the Cerros del Estrecho over a relatively short distance.", "Die geschützte Küste umfasst Ebenen, Klippen, Hügel und Bergmassive. Offizielle lokale Routenkarten zeigen, wie das Gelände auf kurzer Strecke vom Meer in die Cerros del Estrecho ansteigen kann.", "La costa incluye llanuras, acantilados, colinas y macizos.", "De kust bevat vlaktes, kliffen, heuvels en massieven.", "Kusten rymmer slätter, klippor, kullar och massiv."),
        l("That matters more than a distance figure alone: elevation changes walking effort, exposure and the kind of viewpoint you reach. A route should not be assumed flat simply because its start and finish both carry a Tarifa address.", "Das sagt oft mehr als eine reine Entfernung: Höhenmeter verändern Gehaufwand, Exposition und Aussichtspunkt. Ein Weg ist nicht automatisch flach, nur weil Start und Ziel beide eine Adresse in Tarifa tragen.", "El desnivel cambia el esfuerzo a pie, la exposición al viento y el tipo de mirador al que llegáis.", "Hoogteverschil verandert de inspanning te voet, de blootstelling aan wind en het soort uitzichtpunt dat je bereikt.", "Höjdskillnad förändrar ansträngningen till fots, exponeringen för vind och vilken sorts utsiktsplats ni når.")
      ]
    },
    {
      id: "east-west",
      eyebrow: l("06 · Direction and daylight", "06 · Richtung und Tageslicht", "06 · Dirección y luz", "06 · Richting en daglicht", "06 · Riktning och dagsljus"),
      title: l("West is the open Atlantic coast", "Im Westen beginnt die offene Atlantikküste", "Al oeste se abre la costa atlántica", "In het westen opent de Atlantische kust", "I väster öppnar Atlantkusten"),
      paragraphs: [
        l("The westbound line from Tarifa runs past Los Lances toward Valdevaqueros and the broader Atlantic coast. Eastbound movement stays with the Strait and the Mediterranean-facing side of the region.", "Westwärts führt Tarifas Linie über Los Lances nach Valdevaqueros und an die weitere Atlantikküste. Ostwärts bleibt ihr an der Meerenge und auf der mediterranen Seite der Region.", "Los Lances y Valdevaqueros orientan al oeste; Playa Chica y el Estrecho, al este.", "Los Lances en Valdevaqueros wijzen west; Playa Chica en de Straat oost.", "Los Lances och Valdevaqueros orienterar västerut; Playa Chica och sundet österut."),
        l("Tarifa’s far-western position in mainland Spain, combined with Spanish summer time, produces very late summer sunsets by the clock. In practice that gives you a long, usable afternoon and evening.", "Tarifas weit westliche Lage auf dem spanischen Festland sorgt zusammen mit der spanischen Sommerzeit für sehr späte Sonnenuntergänge nach der Uhr. In der Praxis bleiben Nachmittag und Abend dadurch lange nutzbar.", "La posición occidental y la hora oficial producen atardeceres muy tardíos según el reloj, así que la tarde y la noche se aprovechan durante mucho rato.", "De westelijke ligging en de officiële tijd geven zeer late zonsondergangen op de klok, waardoor middag en avond lang bruikbaar blijven.", "Det västliga läget och den officiella tiden ger mycket sena solnedgångar på klockan, så eftermiddag och kväll går att använda länge.")
      ]
    },
    {
      id: "wind-geography",
      eyebrow: l("07 · The wind corridor", "07 · Der Windkorridor", "07 · El corredor del viento", "07 · De windcorridor", "07 · Vindkorridoren"),
      title: l("Why geography is part of Tarifa’s wind story", "Warum Geografie zu Tarifas Windgeschichte gehört", "Por qué la geografía forma parte del viento de Tarifa", "Waarom geografie bij Tarifas wind hoort", "Varför geografin hör till Tarifas vind"),
      paragraphs: [
        l("The Strait works as a funnel. The same weather system produces very different days depending on whether the wind arrives from the east as Levante or from the west as Poniente.", "Die Meerenge wirkt wie ein Trichter. Dieselbe Wetterlage ergibt sehr unterschiedliche Tage, je nachdem ob der Wind als Levante von Osten oder als Poniente von Westen kommt.", "El Estrecho funciona como un embudo. La misma situación meteorológica da días muy distintos según llegue el viento de levante, desde el este, o de poniente, desde el oeste.", "De Straat werkt als een trechter. Dezelfde weersituatie levert heel verschillende dagen op, afhankelijk van of de wind als Levante uit het oosten of als Poniente uit het westen komt.", "Sundet fungerar som en tratt. Samma väderläge ger mycket olika dagar beroende på om vinden kommer som Levante från öster eller som Poniente från väster."),
        l("Which beach works on a given day is therefore a wind question rather than a map question — the wind guide and a current forecast answer it.", "Welcher Strand an einem Tag funktioniert, ist deshalb eine Windfrage und keine Kartenfrage – das beantworten der Wind-Guide und die aktuelle Vorhersage.", "Qué playa funciona cada día es, por tanto, una cuestión de viento y no de mapa: eso lo responden la guía de viento y la previsión actual.", "Welk strand op een dag werkt is daarom een windvraag en geen kaartvraag — dat beantwoorden de windgids en de actuele verwachting.", "Vilken strand som fungerar en viss dag är därför en vindfråga och inte en kartfråga – det svarar vindguiden och den aktuella prognosen på.")
      ]
    },
    {
      id: "amara-la-marina",
      eyebrow: l("08 · Your base in La Marina", "08 · Euer Ausgangspunkt in La Marina", "08 · Vuestra base en La Marina", "08 · Jullie basis in La Marina", "08 · Er bas i La Marina"),
      title: l("What Tarifa’s geography means at AMARA", "Was Tarifas Geografie beim AMARA bedeutet", "Qué significa la geografía de Tarifa en AMARA", "Wat Tarifas geografie betekent bij AMARA", "Vad Tarifas geografi betyder vid AMARA"),
      paragraphs: [
        l("AMARA Family & Surf sits in La Marina, on the western edge of town. Playa Los Lances is about five minutes on foot, the Old Town ten to fifteen minutes along the sea, and Valdevaqueros roughly ten minutes by car on the N-340.", "AMARA Family & Surf liegt in La Marina, am westlichen Rand des Ortes. Zur Playa Los Lances sind es etwa fünf Minuten zu Fuß, in die Altstadt zehn bis fünfzehn Minuten am Meer entlang und nach Valdevaqueros rund zehn Minuten mit dem Auto über die N-340.", "AMARA Family & Surf está en La Marina, en el borde occidental de la ciudad. La Playa de Los Lances queda a unos cinco minutos a pie, el casco antiguo a diez o quince minutos junto al mar y Valdevaqueros a unos diez minutos en coche por la N-340.", "AMARA Family & Surf ligt in La Marina, aan de westrand van de stad. Playa Los Lances is ongeveer vijf minuten lopen, de oude stad tien tot vijftien minuten langs zee en Valdevaqueros circa tien minuten met de auto over de N-340.", "AMARA Family & Surf ligger i La Marina, i stadens västra kant. Playa Los Lances ligger ungefär fem minuter bort till fots, gamla stan tio till femton minuter längs havet och Valdevaqueros cirka tio minuter med bil på N-340."),
        l("That is the map above in everyday form: the open Atlantic to the west, and past the causeway to the east, the Strait and the calmer side.", "Das ist die Karte von oben im Alltag: im Westen der offene Atlantik, im Osten hinter dem Damm die Meerenge und die ruhigere Seite.", "Es el mapa anterior en su versión cotidiana: al oeste el Atlántico abierto y, al este pasado el dique, el Estrecho y el lado más tranquilo.", "Dat is de kaart hierboven in dagelijkse vorm: in het westen de open Atlantische Oceaan, in het oosten voorbij de dam de Straat en de rustigere kant.", "Det är kartan ovan i vardagsform: i väster den öppna Atlanten, i öster bortom vallen sundet och den lugnare sidan.")
      ]
    }
  ],
  related: {
    eyebrow: l("Continue with the practical detail", "Weiter mit dem praktischen Detail", "Seguid con el detalle práctico", "Verder met het praktische detail", "Fortsätt med det praktiska"),
    title: l("Where to go from here", "Weiter mit dem praktischen Teil", "Por dónde seguir", "Waar jullie verder kunnen", "Vidare härifrån"),
    links: [
      {
        token: "getting_to_tarifa" as LinkToken,
        label: l("Arrival & Mobility", "Anreise & Mobilität", "Llegada y movilidad", "Aankomst & mobiliteit", "Ankomst & mobilitet"),
        text: l("Road, bus, airports, port and the final journey to AMARA.", "Straße, Bus, Flughäfen, Hafen und der letzte Abschnitt zum AMARA.", "Carretera, autobús, aeropuertos, puerto y el último tramo hasta AMARA.", "Weg, bus, luchthavens, haven en het laatste deel naar AMARA.", "Väg, buss, flygplatser, hamn och sista sträckan till AMARA.")
      },
      {
        token: "tarifa_where_to_stay" as LinkToken,
        label: l("Where to Stay / Areas", "Wo übernachten / Lagen", "Dónde alojarse / zonas", "Waar overnachten / gebieden", "Var ska man bo / områden"),
        text: l("Compare the daily trade-offs between Tarifa’s accommodation settings.", "Die täglichen Unterschiede zwischen Tarifas Wohnlagen vergleichen.", "Comparad las diferencias diarias entre los entornos de alojamiento.", "Vergelijk de dagelijkse verschillen tussen Tarifas verblijfssettings.", "Jämför vardagsskillnaderna mellan Tarifas boendemiljöer.")
      },
      {
        token: "tarifa_wind_kitesurfing_authority" as LinkToken,
        label: l("Wind & Watersports", "Wind & Wassersport", "Viento y deportes acuáticos", "Wind & watersport", "Vind & vattensport"),
        text: l("Move from geographic context to technical wind depth and current-condition planning.", "Vom geografischen Kontext zur technischen Windtiefe und aktuellen Planung.", "Pasad del contexto geográfico al detalle técnico y a las condiciones actuales.", "Ga van geografische context naar technische windinformatie en actuele planning.", "Gå från geografiskt sammanhang till teknisk vindinformation och aktuell planering.")
      },
      {
        token: "tarifa_experience_hub" as LinkToken,
        label: l("Tarifa Experience", "Tarifa erleben", "Experiencias en Tarifa", "Tarifa beleven", "Upplev Tarifa"),
        text: l("Turn the orientation into beaches, nature, history and days out.", "Aus Orientierung werden Strände, Natur, Geschichte und Ausflugstage.", "Convertid la orientación en playas, naturaleza, historia y excursiones.", "Vertaal de oriëntatie naar stranden, natuur, geschiedenis en uitstappen.", "Gör orienteringen till stränder, natur, historia och utflykter.")
      }
    ]
  },
  sources: {
    eyebrow: l("Evidence behind the guide", "Belege hinter dem Guide", "Base documental de la guía", "Onderbouwing van de gids", "Underlag för guiden"),
    title: l("The official sources behind this guide", "Die amtlichen Quellen hinter diesem Guide", "Las fuentes oficiales de esta guía", "De officiële bronnen achter deze gids", "De officiella källorna bakom guiden"),
    intro: l("The figures on this page come from IGN, SIMA, MITECO, the municipality of Tarifa and the Junta de Andalucía.", "Die Zahlen auf dieser Seite stammen von IGN, SIMA, MITECO, der Gemeinde Tarifa und der Junta de Andalucía.", "Las cifras de esta página proceden del IGN, SIMA, MITECO, el Ayuntamiento de Tarifa y la Junta de Andalucía.", "De cijfers op deze pagina komen van IGN, SIMA, MITECO, de gemeente Tarifa en de Junta de Andalucía.", "Siffrorna på den här sidan kommer från IGN, SIMA, MITECO, Tarifas kommun och Junta de Andalucía."),
    checked: l("Sources checked in August 2026.", "Quellen geprüft im August 2026.", "Fuentes comprobadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor granskade i augusti 2026."),
    links: [
      {
        label: l("SIMA · Tarifa", "SIMA · Tarifa", "SIMA · Tarifa", "SIMA · Tarifa", "SIMA · Tarifa"),
        text: l("Official municipal area, principal-settlement reference and population-centre count.", "Amtliche Gemeindefläche, Hauptortreferenz und Zahl der Siedlungskerne.", "Superficie municipal, referencia del núcleo y número de núcleos.", "Gemeenteoppervlakte, hoofdplaatsreferentie en woonkernen.", "Kommunyta, huvudortsreferens och ortskärnor."),
        href: sharedSources.sima
      },
      {
        label: l("Instituto Geográfico Nacional · Punta de Tarifa", "Instituto Geográfico Nacional · Punta de Tarifa", "IGN · Punta de Tarifa", "IGN · Punta de Tarifa", "IGN · Punta de Tarifa"),
        text: l("Official coordinates for Spain’s southern geographic reference point.", "Offizielle Koordinaten des südlichen geografischen Bezugspunkts Spaniens.", "Coordenadas oficiales de la referencia meridional.", "Officiële coördinaten van het zuidelijke referentiepunt.", "Officiella koordinater för sydpunkten."),
        href: sharedSources.ign
      },
      {
        label: l("Tarifa Tourism · Isla de Tarifa", "Tarifa Tourismus · Isla de Tarifa", "Turismo de Tarifa · Isla de Tarifa", "Toerisme Tarifa · Isla de Tarifa", "Tarifas turistbyrå · Isla de Tarifa"),
        text: l("Official local causeway history and two-seas orientation.", "Amtliche Ortsinformation zu Dammgeschichte und Zwei-Meere-Orientierung.", "Historia del dique y orientación local de los dos mares.", "Damgeschiedenis en lokale tweezeeënoriëntatie.", "Vallens historia och lokal tvåhavskarta."),
        href: sharedSources.island
      },
      {
        label: l("MITECO · Strait and Alborán", "MITECO · Meerenge und Alborán", "MITECO · Estrecho y Alborán", "MITECO · Straat en Alborán", "MITECO · Sundet och Alborán"),
        text: l("Official dimensions, water exchange and transition-zone context.", "Amtliche Maße, Wasseraustausch und Übergangszone.", "Dimensiones, intercambio de aguas y zona de transición.", "Afmetingen, wateruitwisseling en overgangszone.", "Dimensioner, vattenutbyte och övergångszon."),
        href: sharedSources.marineFramework
      },
      {
        label: l("MITECO · Europe–Africa distance", "MITECO · Europa–Afrika-Abstand", "MITECO · Europa–África", "MITECO · Europa–Afrika", "MITECO · Europa–Afrika"),
        text: l("Official regional minimum separation of approximately 14.4 kilometres.", "Amtlicher regionaler Minimalabstand von rund 14,4 Kilometern.", "Distancia mínima regional aproximada de 14,4 km.", "Regionale minimumafstand van circa 14,4 km.", "Regionalt minimiavstånd cirka 14,4 km."),
        href: sharedSources.continentalDistance
      },
      {
        label: l("Ayuntamiento de Tarifa · Coast", "Ayuntamiento de Tarifa · Küste", "Ayuntamiento de Tarifa · Costa", "Ayuntamiento de Tarifa · Kust", "Ayuntamiento de Tarifa · Kust"),
        text: l("Municipal Atlantic and Mediterranean coastline classification.", "Kommunale Zuordnung zu Atlantik und Mittelmeer.", "Clasificación atlántica y mediterránea del litoral.", "Atlantische en mediterrane kustclassificatie.", "Atlantisk och mediterran kustklassning."),
        href: sharedSources.emergencyPlan
      },
      {
        label: l("Junta de Andalucía · Los Lances", "Junta de Andalucía · Los Lances", "Junta de Andalucía · Los Lances", "Junta de Andalucía · Los Lances", "Junta de Andalucía · Los Lances"),
        text: l("Official protected-area size and location.", "Amtliche Fläche und Lage des Schutzgebiets.", "Superficie protegida y ubicación.", "Beschermde oppervlakte en ligging.", "Skyddad yta och läge."),
        href: sharedSources.losLances
      }
    ]
  },
  closing: {
    eyebrow: l("Keep your bearings", "Behaltet die Richtung", "Mantened la orientación", "Houd jullie oriëntatie", "Behåll riktningen"),
    title: l("Let direction shape the day, not dictate it", "Lasst die Richtung den Tag formen, nicht bestimmen", "Que la dirección dé forma al día, sin imponerlo", "Laat richting de dag vormen, niet dicteren", "Låt riktningen forma dagen, inte styra den"),
    body: l("Tarifa’s map becomes useful when it stays flexible: town on foot, western coast when conditions suit, and the Strait as the constant reference. Return to the Location guide or continue into the experiences that geography makes possible.", "Tarifas Karte hilft am meisten, wenn sie flexibel bleibt: Stadt zu Fuß, Westküste bei passenden Bedingungen und die Meerenge als fester Bezugspunkt. Kehrt zum Lage-Guide zurück oder entdeckt, welche Erlebnisse diese Geografie ermöglicht.", "El mapa de Tarifa resulta útil cuando conserva flexibilidad: ciudad a pie, costa occidental cuando acompañan las condiciones y el Estrecho como referencia constante. Volved a la guía de ubicación o continuad con las experiencias que permite esta geografía.", "Tarifas kaart werkt het best wanneer ze flexibel blijft: stad te voet, westkust als de condities passen en de Straat als vast referentiepunt. Ga terug naar de locatiegids of verder naar de ervaringen die deze geografie mogelijk maakt.", "Tarifas karta är mest användbar när den förblir flexibel: staden till fots, västkusten när förhållandena passar och sundet som fast referens. Gå tillbaka till lägesguiden eller vidare till upplevelserna som geografin möjliggör."),
    locationLabel: l("Back to Tarifa Location", "Zurück zum Tarifa Lage-Guide", "Volver a Ubicación Tarifa", "Terug naar Tarifa Locatie", "Tillbaka till Tarifa lägesguide"),
    experienceLabel: l("Explore Tarifa experiences", "Tarifa-Erlebnisse entdecken", "Explorar experiencias en Tarifa", "Ontdek ervaringen in Tarifa", "Upptäck upplevelser i Tarifa")
  }
};

/**
 * Leaf-localized geography copy: the page is described once and every authored
 * string carries its five locales (`DR-CONTENT-STRUCT-001`). A page resolves the
 * whole tree at its boundary with `resolveLocale`, so the renderers below it keep
 * receiving plain strings.
 */
export type TarifaGeographyLocale = Resolved<typeof tarifaGeographyContent>;
export type TarifaGeographySection = TarifaGeographyLocale['sections'][number];
