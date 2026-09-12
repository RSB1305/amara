import type { LocalizedText } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export type NerjaExperienceThemeId =
  | 'beaches'
  | 'dayTrips'
  | 'balcon'
  | 'caves'
  | 'veranoAzul'
  | 'food'
  | 'nightlife';





export const nerjaExperienceHubSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-experience-hub-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('nerja.experience'),
  languages: {
    en: {
      title: 'Things to Do in Nerja: Coast, Caves & Evenings',
      description: 'Beaches, food, day trips, the old town, the caves and the evening: seven sides of Nerja, each with its own guide and the details worth knowing before you go.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja erleben: Küste, Höhlen & Abende',
      description: 'Strände, Essen, Tagesausflüge, Altstadt, Höhlen und der Abend: sieben Seiten von Nerja, jede mit eigenem Guide und den Details, die man vorher wissen sollte.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Nerja: costa, cuevas y noches',
      description: 'Playas, gastronomía, excursiones, casco antiguo, cuevas y la noche: siete facetas de Nerja, cada una con su propia guía y los detalles que conviene saber antes de ir.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Nerja: kust, grotten & avonden',
      description: 'Stranden, eten, dagtochten, de oude stad, de grotten en de avond: zeven kanten van Nerja, elk met een eigen gids en de details die je vooraf wilt weten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Nerja: kust, grottor & kvällar',
      description: 'Stränder, mat, dagsutflykter, gamla stan, grottorna och kvällen: sju sidor av Nerja, var och en med egen guide och de detaljer som är bra att veta i förväg.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaExperienceHubContent = {
  hero: {
    eyebrow: l("Experiences in Nerja", "Erlebnisse in Nerja", "Experiencias en Nerja", "Ervaringen in Nerja", "Upplevelser i Nerja"),
    title: l("Things to do in Nerja", "Nerja erleben", "Qué hacer en Nerja", "Wat te doen in Nerja", "Att göra i Nerja"),
    subtitle: l("Beach in the morning, Nerja in the evening.", "Morgens an den Strand, abends durch Nerja.", "Playa por la mañana, Nerja al caer la tarde.", "'s Ochtends naar het strand, 's avonds Nerja in.", "Strand på morgonen, Nerja på kvällen."),
    standfirst: l("Nerja is a small town on the sea whose old town ends at the Balcón de Europa, with the Sierra behind it and beaches to both sides. From our apartment, Torrecilla is about 200 metres and the Balcón about 500, so a Nerja day stays simple: swim before breakfast, wander the old town later, pick a terrace for dinner. The caves at Maro, the coves to the east and a day in Frigiliana, Málaga or Granada are close enough when you want a change of scene.", "Nerja ist eine Kleinstadt am Meer, deren Altstadt am Balcón de Europa endet, mit der Sierra im Rücken und Stränden zu beiden Seiten. Von unserer Wohnung sind es etwa 200 Meter bis Torrecilla und rund 500 bis zum Balcón, ein Nerja-Tag bleibt also einfach: vor dem Frühstück ins Meer, später durch die Altstadt, abends auf eine Terrasse. Die Höhlen bei Maro, die Buchten Richtung Osten und ein Tag in Frigiliana, Málaga oder Granada liegen nah genug, wenn ihr Abwechslung wollt.", "Nerja es una pequeña ciudad junto al mar cuyo casco antiguo termina en el Balcón de Europa, con la sierra detrás y playas a ambos lados. Desde nuestro apartamento hay unos 200 metros hasta Torrecilla y unos 500 hasta el Balcón, así que un día en Nerja sigue siendo sencillo: un baño antes del desayuno, un paseo por el casco antiguo y una terraza para cenar. Las cuevas de Maro, las calas hacia el este y un día en Frigiliana, Málaga o Granada quedan lo bastante cerca para cuando apetezca cambiar.", "Nerja is een kleine stad aan zee waarvan de oude kern eindigt bij het Balcón de Europa, met de Sierra in de rug en stranden aan weerszijden. Vanaf ons appartement is het ongeveer 200 meter naar Torrecilla en zo'n 500 naar het Balcón, dus een dag in Nerja blijft eenvoudig: zwemmen voor het ontbijt, later door de oude stad, 's avonds een terras. De grotten bij Maro, de baaien naar het oosten en een dag Frigiliana, Málaga of Granada liggen dichtbij genoeg als je afwisseling wilt.", "Nerja är en liten stad vid havet vars gamla stan slutar vid Balcón de Europa, med bergen i ryggen och stränder på båda sidor. Från vår lägenhet är det cirka 200 meter till Torrecilla och runt 500 till Balcón, så en Nerjadag förblir enkel: ett dopp före frukost, en promenad i gamla stan senare, en terrass till middagen. Grottorna vid Maro, vikarna österut och en dag i Frigiliana, Málaga eller Granada ligger nära nog när ni vill byta miljö."),
  },
  intro: {
    eyebrow: l("Four good ways to spend a day", "Vier gute Ideen für euren Tag", "Cuatro buenas formas de pasar el día", "Vier fijne manieren om de dag door te brengen", "Fyra fina sätt att tillbringa dagen"),
    title: l("Close by or out for the day", "Ganz in der Nähe oder einen Tag unterwegs", "Cerca de casa o de excursión", "Dicht bij huis of een dag op pad", "Nära hemmet eller på dagsutflykt"),
    text: l("These are the four things we would start with: the coast, the caves, good food and one unhurried day trip.", "Damit würden wir anfangen: Küste, Höhlen, gutes Essen und ein Tagesausflug ohne Zeitdruck.", "Nosotros empezaríamos por aquí: la costa, las cuevas, buena comida y una excursión sin prisas.", "Hier zouden wij mee beginnen: de kust, de grotten, lekker eten en één ontspannen dagtocht.", "Vi skulle börja här: kusten, grottorna, god mat och en dagsutflykt utan stress.")
  },
  moreThemes: {
    eyebrow: l("Three more sides of Nerja", "Drei weitere Seiten von Nerja", "Tres facetas más de Nerja", "Nog drie kanten van Nerja", "Tre andra sidor av Nerja"),
    title: l("Old-town views, local memory and the evening", "Altstadtblicke, Ortsgeschichte und der Abend", "Vistas del casco antiguo, memoria local y vida nocturna", "Uitzicht in de oude stad, lokaal geheugen en de avond", "Gamla stans utsikter, lokala minnen och kvällen"),
    text: l("The Balcón gives the centre its clearest orientation point, Verano Azul adds a cultural route through town, and Nerja's compact evening areas take over after dinner.", "Der Balcón ist der klarste Orientierungspunkt im Zentrum, Verano Azul führt als kulturelle Spur durch den Ort, und nach dem Essen übernehmen Nerjas kompakte Abendviertel.", "El Balcón es el punto de orientación más claro del centro, Verano Azul aporta una ruta cultural por la localidad y, después de cenar, toman el relevo las zonas nocturnas de Nerja.", "Het Balcón is het duidelijkste oriëntatiepunt in het centrum, Verano Azul vormt een culturele route door de plaats en na het eten nemen Nerja's compacte avondbuurten het over.", "Balcón är den tydligaste orienteringspunkten i centrum, Verano Azul lägger ett kulturellt spår genom staden och efter middagen tar Nerjas kompakta kvällsområden vid.")
  },
  seasons: {
    eyebrow: l("Through the year", "Übers Jahr", "A lo largo del año", "Door het jaar", "Genom året"),
    title: l("Summer by the sea, winter in the sun", "Sommer am Meer, Winter in der Sonne", "Verano junto al mar, invierno al sol", "Zomer aan zee, winter in de zon", "Sommar vid havet, vinter i solen"),
    text: l("In summer the beaches and the old town are full and the sea is at its warmest from July into October. Spring and autumn are the months for the caves, Frigiliana and the coastal paths. In winter the town stays awake: many restaurants open, midday sun on the Balcón, beach walks in a jumper.", "Im Sommer sind Strände und Altstadt voll, das Meer ist von Juli bis in den Oktober am wärmsten. Frühling und Herbst sind die Monate für die Höhlen, Frigiliana und die Küstenwege. Im Winter bleibt der Ort wach: viele Restaurants offen, mittags Sonne auf dem Balcón, Strandspaziergänge im Pullover.", "En verano las playas y el casco antiguo están llenos y el mar está en su punto más cálido de julio a octubre. Primavera y otoño son los meses para las cuevas, Frigiliana y los senderos de la costa. En invierno el pueblo sigue despierto: muchos restaurantes abiertos, sol de mediodía en el Balcón, paseos por la playa con jersey.", "In de zomer zijn de stranden en de oude stad vol en is de zee van juli tot in oktober het warmst. Lente en herfst zijn de maanden voor de grotten, Frigiliana en de kustpaden. In de winter blijft de stad wakker: veel restaurants open, middagzon op het Balcón, strandwandelingen in een trui.", "På sommaren är stränderna och gamla stan fulla och havet som varmast från juli in i oktober. Vår och höst är månaderna för grottorna, Frigiliana och kuststigarna. På vintern håller staden sig vaken: många restauranger öppna, middagssol på Balcón, strandpromenader i tröja."),
    linkLabel: l("Monthly values and what they mean for your dates", "Monatswerte und was sie für eure Reisezeit bedeuten", "Valores mensuales y qué significan para vuestras fechas", "Maandwaarden en wat ze voor jullie reisdata betekenen", "Månadsvärden och vad de betyder för era datum"),
    token: "nerja_weather" as LinkToken
  },
  themes: [
    {
      id: "beaches",
      title: l("Beaches & coast", "Strände & Küste", "Playas y costa", "Stranden & kust", "Stränder & kust"),
      text: l("Torrecilla is the easy everyday beach from AMARA Playa. For clearer water and a wilder setting, the coves towards Maro are worth the extra journey.", "Torrecilla ist von AMARA Playa der unkomplizierte Strand für jeden Tag. Für klareres Wasser und eine naturbelassenere Umgebung lohnt sich der zusätzliche Weg Richtung Maro.", "Torrecilla es la playa fácil para el día a día desde AMARA Playa. Para encontrar aguas más transparentes y un entorno más natural, merece la pena acercarse a las calas de Maro.", "Torrecilla is vanaf AMARA Playa het makkelijke strand voor elke dag. Voor helderder water en een natuurlijkere omgeving is de extra reis richting Maro de moeite waard.", "Torrecilla är den enkla vardagsstranden från AMARA Playa. För klarare vatten och mer natur är vikarna mot Maro värda den extra resan."),
      token: "nerja_beaches_authority" as LinkToken,
      linkLabel: l("Compare Torrecilla with the coves near Maro", "Torrecilla mit den Buchten bei Maro vergleichen", "Comparar Torrecilla con las calas de Maro", "Vergelijk Torrecilla met de baaien bij Maro", "Jämför Torrecilla med vikarna vid Maro")
    },
    {
      id: "food",
      title: l("Food & restaurants", "Essen & Restaurants", "Gastronomía y restaurantes", "Eten & restaurants", "Mat & restauranger"),
      text: l("Lunch can be grilled fish or paella by the sea; in the evening, the old town adds tapas bars and restaurants. Popular tables are worth reserving.", "Mittags passen gegrillter Fisch oder Paella am Meer; abends kommen in der Altstadt Tapasbars und Restaurants dazu. Für beliebte Tische lohnt sich eine Reservierung.", "Al mediodía apetecen pescado a la brasa o paella junto al mar; por la noche, el casco antiguo suma bares de tapas y restaurantes. Conviene reservar las mesas más solicitadas.", "Bij de lunch passen gegrilde vis of paella aan zee; 's avonds komen daar in de oude stad tapasbars en restaurants bij. Voor populaire tafels is reserveren verstandig.", "Till lunch passar grillad fisk eller paella vid havet; på kvällen väntar tapasbarer och restauranger i gamla stan. Populära bord är värda att boka."),
      token: "nerja_food_authority" as LinkToken,
      linkLabel: l("Match lunch by the sea with dinner in the old town", "Mittagessen am Meer und Abendessen in der Altstadt verbinden", "Combinar un almuerzo junto al mar con una cena en el casco antiguo", "Combineer lunch aan zee met diner in de oude stad", "Kombinera lunch vid havet med middag i gamla stan")
    },
    {
      id: "dayTrips",
      title: l("Day trips", "Tagesausflüge", "Excursiones", "Dagtochten", "Dagsutflykter"),
      text: l("Frigiliana is close enough for a few hours. Málaga, Granada, Caminito del Rey and Ronda each deserve their own day rather than being combined in a rush.", "Frigiliana liegt nah genug für ein paar Stunden. Málaga, Granada, der Caminito del Rey und Ronda verdienen jeweils einen eigenen Tag statt einer hastigen Kombination.", "Frigiliana está lo bastante cerca para pasar unas horas. Málaga, Granada, el Caminito del Rey y Ronda merecen cada uno su propio día, sin combinarlos con prisas.", "Frigiliana ligt dichtbij genoeg voor een paar uur. Málaga, Granada, Caminito del Rey en Ronda verdienen elk een eigen dag, zonder haastige combinaties.", "Frigiliana ligger nära nog för några timmar. Málaga, Granada, Caminito del Rey och Ronda förtjänar var sin dag i stället för en stressig kombination."),
      token: "nerja_daytrips_authority" as LinkToken,
      linkLabel: l("See which destinations deserve a full day", "Sehen, welche Ziele einen ganzen Tag verdienen", "Ver qué destinos merecen un día entero", "Bekijk welke bestemmingen een hele dag verdienen", "Se vilka utflyktsmål som förtjänar en hel dag"),
      asideToken: "nerja_parking" as LinkToken,
      asideLabel: l("A hire car for the outing days only: where it parks in Nerja", "Mietwagen nur für die Ausflugstage: wo er in Nerja steht", "Coche de alquiler solo para los días de excursión: dónde aparcarlo en Nerja", "Huurauto alleen voor de uitstapdagen: waar hij in Nerja staat", "Hyrbil bara för utflyktsdagarna: var den står i Nerja")
    },
    {
      id: "caves",
      title: l("Nerja Caves", "Höhlen von Nerja", "Cueva de Nerja", "Grotten van Nerja", "Nerjagrottorna"),
      text: l("The caves are near Maro and work well as a half-day outing. Timed admission and the steps inside make checking current tickets and access details worthwhile.", "Die Höhlen liegen bei Maro und eignen sich gut für einen halben Tag. Wegen der festen Einlasszeiten und der Stufen im Inneren solltet ihr Tickets und Zugang vorher aktuell prüfen.", "Las cuevas están junto a Maro y encajan bien en una salida de medio día. Como la entrada tiene horario y hay escalones dentro, conviene comprobar antes los billetes y el acceso.", "De grotten liggen bij Maro en zijn geschikt voor een halve dag. Door de tijdsloten en trappen binnen is het verstandig om tickets en toegang vooraf te controleren.", "Grottorna ligger vid Maro och passar bra som en halvdagsutflykt. Tidsbestämt inträde och trapporna inne gör det klokt att kontrollera biljetter och tillgänglighet i förväg."),
      token: "nerja_caves" as LinkToken,
      linkLabel: l("Check tickets, steps and access before you go", "Tickets, Stufen und Zugang vor dem Besuch prüfen", "Comprobar entradas, escalones y acceso antes de ir", "Controleer tickets, trappen en toegang voor vertrek", "Kontrollera biljetter, trappor och tillträde före besöket")
    },
    {
      id: "balcon",
      title: l("Balcón & Old Town", "Balcón & Altstadt", "Balcón y casco antiguo", "Balcón & oude stad", "Balcón & gamla stan"),
      text: l("The Balcón de Europa is the viewing terrace at the end of the old town, with the coast in view to both sides. The pedestrian lanes behind it lead to squares, the church and the steps down to Calahonda beach.", "Der Balcón de Europa ist die Aussichtsterrasse am Ende der Altstadt, mit Blick auf die Küste nach beiden Seiten. Dahinter führen die Fußgängergassen zu Plätzen, zur Kirche und über Treppen hinunter zum Strand von Calahonda.", "El Balcón de Europa es la terraza mirador al final del casco antiguo, con la costa a la vista hacia ambos lados. Detrás, las calles peatonales llevan a plazas, a la iglesia y, por escaleras, a la playa de Calahonda.", "Het Balcón de Europa is het uitzichtterras aan het einde van de oude stad, met de kust aan beide kanten in zicht. De autovrije straatjes erachter leiden naar pleinen, de kerk en via trappen naar het strand van Calahonda.", "Balcón de Europa är utsiktsterrassen i slutet av gamla stan, med kusten i sikte åt båda håll. Gågatorna bakom leder till torg, kyrkan och via trappor ner till Calahonda-stranden."),
      token: "nerja_balcon_de_europa" as LinkToken,
      linkLabel: l("Start a walk through central Nerja at the Balcón", "Am Balcón zu einem Rundgang durch Nerjas Zentrum starten", "Empezar en el Balcón un paseo por el centro de Nerja", "Begin bij het Balcón aan een wandeling door het centrum", "Börja en promenad genom centrala Nerja vid Balcón")
    },
    {
      id: "veranoAzul",
      title: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
      text: l("The 1981 series that made Nerja known across Spain: filming spots on the beaches, the Chanquete statue and the boat La Dorada in the park. A short walk that is childhood for many Spanish guests.", "Die Serie von 1981, die Nerja in ganz Spanien bekannt machte: Drehorte an den Stränden, die Chanquete-Statue und das Boot La Dorada im Park. Ein kurzer Spaziergang, der für viele spanische Gäste Kindheit ist.", "La serie de 1981 que dio a conocer Nerja en toda España: localizaciones en las playas, la estatua de Chanquete y el barco La Dorada en el parque. Un paseo corto que para muchos es pura infancia.", "De serie uit 1981 die Nerja in heel Spanje bekend maakte: filmlocaties op de stranden, het Chanquete-standbeeld en de boot La Dorada in het park. Een korte wandeling die voor veel Spaanse gasten jeugd is.", "Serien från 1981 som gjorde Nerja känt i hela Spanien: inspelningsplatser på stränderna, Chanquete-statyn och båten La Dorada i parken. En kort promenad som för många spanska gäster är barndom."),
      token: "nerja_verano_azul" as LinkToken,
      linkLabel: l("Follow the series through Nerja's landmarks", "Den Spuren der Serie durch Nerjas Schauplätze folgen", "Seguir la serie por los lugares emblemáticos de Nerja", "Volg de serie langs de herkenningspunten van Nerja", "Följ serien mellan Nerjas välkända platser")
    },
    {
      id: "nightlife",
      title: l("Evening life", "Abendleben", "Vida nocturna", "Avondleven", "Kvällsliv"),
      text: l("Choose between dinner and a terrace, live music or a livelier late evening. Nerja has several evening areas with different moods; which one fits depends on the night you want.", "Wählt zwischen Essen und Terrasse, Live-Musik oder einem lebhafteren späten Abend. Nerja hat mehrere Ausgehviertel mit eigenem Ton; welches passt, hängt vom Abend ab, den ihr wollt.", "Elegid entre cena y terraza, música en directo o una noche más animada. Nerja tiene varias zonas de salida con ambientes distintos; cuál encaja depende de la noche que busquéis.", "Kies tussen diner en terras, livemuziek of een levendigere late avond. Nerja heeft meerdere uitgaansbuurten met elk een eigen sfeer; welke past, hangt af van de avond die je wilt.", "Välj mellan middag och terrass, livemusik eller en livligare sen kväll. Nerja har flera kvällsområden med olika stämning; vilket som passar beror på vilken kväll ni vill ha."),
      token: "nerja_nightlife_authority" as LinkToken,
      linkLabel: l("Match the evening to Nerja's different areas", "Den Abend mit Nerjas unterschiedlichen Vierteln abstimmen", "Elegir la zona de Nerja que encaja con la noche", "Kies de Nerja-wijk die bij jullie avond past", "Hitta området i Nerja som passar er kväll")
    }
  ],
  closing: {
    eyebrow: l("Stay close to the sea", "Nah am Meer wohnen", "Alojarse cerca del mar", "Dicht bij zee verblijven", "Bo nära havet"),
    title: l("Stay close enough to do the simple things twice.", "Nah genug, um die einfachen Dinge zweimal zu machen.", "Lo bastante cerca para repetir las cosas sencillas.", "Dichtbij genoeg om de eenvoudige dingen nog een keer te doen.", "Nära nog för att göra de enkla sakerna en gång till."),
    text: l("From AMARA Playa you can return to Torrecilla for a second swim or walk into the old town again after dinner. That short distance is what makes the location so pleasant.", "Von AMARA Playa könnt ihr für ein zweites Bad noch einmal nach Torrecilla gehen oder nach dem Essen durch die Altstadt zurücklaufen. Genau diese kurzen Wege machen die Lage so angenehm.", "Desde AMARA Playa podéis volver a Torrecilla para daros otro baño o regresar andando por el casco antiguo después de cenar. Esas distancias cortas hacen que la ubicación resulte tan agradable.", "Vanaf AMARA Playa loop je makkelijk terug naar Torrecilla voor een tweede duik of na het eten nog eens door de oude stad. Juist die korte afstanden maken de ligging zo prettig.", "Från AMARA Playa kan ni gå tillbaka till Torrecilla för ett andra dopp eller ta en ny promenad genom gamla stan efter middagen. De korta avstånden gör läget så trivsamt."),
    stayLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa")
  }
};
