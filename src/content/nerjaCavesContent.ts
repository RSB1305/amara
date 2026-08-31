import type { LocalizedText } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface NerjaCavesSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaCavesLocale {
  navLabel: string;
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: NerjaCavesSection[];
  personal: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    propertyLabel: string;
    locationLabel: string;
  };
}

const article = {
  datePublished: '2026-08-14',
  dateModified: '2026-08-20',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

const sharedSources = {
  official: 'https://cuevadenerja.es/salas-de-la-cueva-de-nerja/',
  access: 'https://cuevadenerja.es/como-llegar-a-la-cueva-de-nerja/',
  cuevaTren: 'https://cuevadenerja.es/tren-a-la-cueva-de-nerja/',
  dating:
    'https://www.uco.es/investigacion/ucci/es/noticias-gen/item/3001-cuestionan-la-autoria-neandertal-del-arte-rupestre-a-traves-de-la-cueva-de-nerja',
  provincia: 'https://www.malaga.es/en/laprovincia/naturaleza/lis_cd-1690/cueva-de-nerja'
};

export const nerjaCavesSeo: AmaraAuthoringSeo = {
  version: '2026-08-20-nerja-caves-v1.1',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Caves of Nerja: The Column, the Paintings and What You See',
      description:
        'Found by five teenagers in 1959: the world’s largest joined column, cave paintings whose age was revised, and which galleries visitors can enter.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Höhlen von Nerja: Säule, Malereien und was ihr wirklich seht',
      description:
        '1959 von fünf Jugendlichen gefunden: die größte zusammengewachsene Tropfsteinsäule der Welt, Malereien mit korrigiertem Alter und die zugänglichen Galerien.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cueva de Nerja: la columna, las pinturas y lo que se ve',
      description:
        'Descubierta en 1959 por cinco jóvenes: la mayor columna del mundo, pinturas cuya datación se revisó y qué galerías se pueden visitar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Grotten van Nerja: de zuil, de schilderingen en wat je ziet',
      description:
        'In 1959 gevonden door vijf jongeren: de grootste samengegroeide druipsteenzuil ter wereld, schilderingen met herziene datering en de open galerijen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Nerjas grottor: pelaren, målningarna och vad ni faktiskt ser',
      description:
        'Hittad 1959 av fem ungdomar: världens största sammanvuxna droppstenspelare, målningar med reviderad datering och vilka gallerier som är öppna.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaCavesContent = {
  navLabel: l("Caves of Nerja", "Höhlen von Nerja", "Cueva de Nerja", "Grotten van Nerja", "Nerjas grottor"),
  breadcrumbLabel: l("Caves of Nerja", "Höhlen von Nerja", "Cueva de Nerja", "Grotten van Nerja", "Nerjas grottor"),
  hero: {
    eyebrow: l("Nerja · Caves", "Nerja · Höhlen", "Nerja · Cueva", "Nerja · Grotten", "Nerja · Grottorna"),
    title: l("Five teenagers went looking for bats and found a cathedral", "Fünf Jugendliche suchten Fledermäuse und fanden eine Kathedrale", "Cinco jóvenes buscaban murciélagos y encontraron una catedral", "Vijf jongeren zochten vleermuizen en vonden een kathedraal", "Fem ungdomar letade efter fladdermöss och hittade en katedral"),
    standfirst: l("The Caves of Nerja are **the most visited thing in the area, and the most misreported**. This is what is actually established: who found them, what the record-holding column really is, and why the famous date on the paintings turned out to be wrong.", "Die Höhlen von Nerja sind **die meistbesuchte Sehenswürdigkeit der Gegend – und die am häufigsten falsch beschriebene**. Hier steht, was gesichert ist: wer sie fand, was die Rekordsäule wirklich ist und warum das berühmte Alter der Malereien nicht stimmt.", "La Cueva de Nerja es **lo más visitado de la zona y también lo peor contado**. Aquí está lo que está establecido: quién la encontró, qué es realmente la columna del récord y por qué la famosa datación de las pinturas no se sostiene.", "De grotten van Nerja zijn **de best bezochte bezienswaardigheid van de streek en tegelijk de slechtst beschreven**. Hier staat wat vaststaat: wie ze vond, wat de recordzuil werkelijk is en waarom de beroemde datering van de schilderingen niet klopt.", "Nerjas grottor är **traktens mest besökta sevärdhet och samtidigt den som beskrivs sämst**. Här står det som är fastslaget: vem som hittade dem, vad rekordpelaren faktiskt är och varför den berömda dateringen av målningarna inte håller."),
    note: l("Opening hours, prices and time slots change and are deliberately not listed here — check the operator before you go.", "Öffnungszeiten, Preise und Zeitfenster ändern sich und stehen hier bewusst nicht – prüft sie vor dem Besuch beim Betreiber.", "Horarios, precios y franjas horarias cambian y no se indican aquí: consultadlos en la fundación antes de ir.", "Openingstijden, prijzen en tijdvakken veranderen en staan hier bewust niet — controleer ze vooraf bij de beheerder.", "Öppettider, priser och tidsluckor ändras och anges medvetet inte här — kontrollera dem hos anläggningen före besöket."),
    updated: l("Reviewed August 2026", "Geprüft im August 2026", "Revisado en agosto de 2026", "Gecontroleerd in augustus 2026", "Granskad i augusti 2026")
  },
  facts: [
    {
      label: l("Discovered", "Entdeckt", "Descubierta", "Ontdekt", "Upptäckt"),
      value: l("12 January 1959", "12. Januar 1959", "12 de enero de 1959", "12 januari 1959", "12 januari 1959")
    },
    {
      label: l("Explored length", "Erforschte Länge", "Longitud explorada", "Verkende lengte", "Utforskad längd"),
      value: l("4,823 metres", "4.823 Meter", "4.823 metros", "4.823 meter", "4 823 meter")
    },
    {
      label: l("The column", "Die Säule", "La columna", "De zuil", "Pelaren"),
      value: l("32 m tall · Guinness record since 1989", "32 m hoch · Guinness-Rekord seit 1989", "32 m · récord Guinness desde 1989", "32 m · Guinness-record sinds 1989", "32 m · Guinnessrekord sedan 1989")
    },
    {
      label: l("The visit", "Der Rundgang", "La visita", "Het bezoek", "Besöket"),
      value: l("45–60 min · over 458 steps", "45–60 Min · über 458 Stufen", "45–60 min · más de 458 escalones", "45–60 min · ruim 458 treden", "45–60 min · över 458 trappsteg")
    }
  ],
  sections: [
    {
      id: "discovery",
      eyebrow: l("The find", "Der Fund", "El hallazgo", "De vondst", "Fyndet"),
      title: l("Bats gave it away", "Die Fledermäuse haben sie verraten", "Los murciélagos la delataron", "De vleermuizen verraadden haar", "Fladdermössen avslöjade den"),
      paragraphs: [
        l("On 12 January 1959 five young men from Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas and Manuel Muñoz — squeezed through a narrow karst shaft called La Mina.", "Am 12. Januar 1959 zwängten sich fünf junge Männer aus Maro – Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas und Manuel Muñoz – durch einen engen Karstschacht namens La Mina.", "El 12 de enero de 1959, cinco jóvenes de Maro —Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas y Manuel Muñoz— se colaron por una estrecha sima kárstica llamada La Mina.", "Op 12 januari 1959 wrongen vijf jonge mannen uit Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas en Manuel Muñoz — zich door een nauwe karstschacht genaamd La Mina.", "Den 12 januari 1959 trängde sig fem unga män från Maro — Miguel Muñoz, José Luis Barbero, José Torres, Francisco Navas och Manuel Muñoz — genom ett trångt karstschakt som heter La Mina."),
        l("They had been watching bats fly in and out of it in the evenings and cleared away the stone formations blocking the way. Behind it lay a system that is now explored to a length of 4,823 metres.", "Sie hatten abends beobachtet, wie dort Fledermäuse ein- und ausflogen, und die störenden Sinterformationen freigelegt. Dahinter lag ein System, das heute auf einer Länge von 4.823 Metern erforscht ist.", "Habían observado por la tarde cómo entraban y salían murciélagos y retiraron las formaciones que bloqueaban el paso. Detrás había un sistema hoy explorado en 4.823 metros.", "Ze hadden ’s avonds vleermuizen in en uit zien vliegen en de druipsteenformaties weggehaald die de doorgang blokkeerden. Daarachter lag een stelsel dat nu over 4.823 meter is verkend.", "De hade sett fladdermöss flyga in och ut om kvällarna och frilade droppstensformationerna som blockerade vägen. Bakom låg ett system som i dag är utforskat på 4 823 meter.")
      ]
    },
    {
      id: "column",
      eyebrow: l("The record", "Der Rekord", "El récord", "Het record", "Rekordet"),
      title: l("What the Guinness entry actually says", "Was im Guinness-Eintrag wirklich steht", "Lo que dice de verdad el registro Guinness", "Wat er werkelijk in het Guinness-record staat", "Vad Guinnessposten faktiskt säger"),
      paragraphs: [
        l("In the Sala del Cataclismo stands a free-standing column formed where a stalagmite and a stalactite grew into one another. The operator gives its height as 32 metres and its base as 13 by 7 metres.", "Im Sala del Cataclismo steht eine freistehende Säule, entstanden dort, wo ein Stalagmit und ein Stalaktit zusammengewachsen sind. Der Betreiber gibt ihre Höhe mit 32 Metern an, die Basis mit 13 mal 7 Metern.", "En la Sala del Cataclismo se alza una columna exenta, formada donde una estalagmita y una estalactita se unieron. La fundación indica 32 metros de altura y una base de 13 por 7 metros.", "In de Sala del Cataclismo staat een vrijstaande zuil, ontstaan waar een stalagmiet en een stalactiet aan elkaar groeiden. De beheerder geeft 32 meter hoogte en een basis van 13 bij 7 meter.", "I Sala del Cataclismo står en fristående pelare, bildad där en stalagmit och en stalaktit vuxit ihop. Anläggningen anger höjden till 32 meter och basen till 13 gånger 7 meter."),
        l("It has held a Guinness World Record since 1989 — not 1994, as is often repeated — and the title is precise: the largest column formed by the merging of a stalagmite and a stalactite.", "Den Guinness-Weltrekord hält sie seit 1989 – nicht seit 1994, wie oft wiederholt wird – und der Titel ist präzise: die größte Säule, die durch das Zusammenwachsen von Stalagmit und Stalaktit entstanden ist.", "Tiene el récord Guinness desde 1989 —no desde 1994, como suele repetirse— y el título es preciso: la columna más grande del mundo formada por la unión de una estalagmita y una estalactita.", "Ze heeft het Guinness-wereldrecord sinds 1989 — niet sinds 1994, zoals vaak wordt herhaald — en de titel is precies: de grootste zuil gevormd door het samengroeien van een stalagmiet en een stalactiet.", "Den har Guinness världsrekord sedan 1989 — inte sedan 1994, som ofta upprepas — och titeln är exakt: den största pelare som bildats genom att en stalagmit och en stalaktit vuxit samman."),
        l("Calling it \"the world’s largest stalagmite\" is wrong. Once the two have joined, it is no longer a stalagmite; it is a column. The distinction matters because it is the only claim here that is actually certified.", "„Größter Stalagmit der Welt\" ist dagegen falsch. Sobald beide zusammengewachsen sind, ist es kein Stalagmit mehr, sondern eine Säule. Der Unterschied zählt, weil dies die einzige Aussage hier ist, die tatsächlich zertifiziert wurde.", "Llamarla «la mayor estalagmita del mundo» es incorrecto. Una vez unidas, ya no es una estalagmita, sino una columna. La distinción importa porque es la única afirmación de esta página que está realmente certificada.", "„Grootste stalagmiet ter wereld\" is onjuist. Zodra beide zijn samengegroeid, is het geen stalagmiet meer maar een zuil. Het verschil telt, omdat dit de enige bewering op deze pagina is die daadwerkelijk gecertificeerd is.", "Att kalla den ”världens största stalagmit” är fel. När de två har vuxit ihop är det inte längre en stalagmit utan en pelare. Skillnaden spelar roll, eftersom det är det enda påstående på den här sidan som faktiskt är certifierat.")
      ]
    },
    {
      id: "paintings",
      eyebrow: l("The paintings", "Die Malereien", "Las pinturas", "De schilderingen", "Målningarna"),
      title: l("The date everyone quotes was withdrawn", "Das Alter, das alle zitieren, wurde zurückgezogen", "La fecha que todo el mundo cita fue retirada", "De datering die iedereen citeert is ingetrokken", "Dateringen alla citerar har dragits tillbaka"),
      paragraphs: [
        l("In 2012 a research team dated charcoal found beside the red animal figures to between 42,300 and 43,500 years. That is older than the arrival of Homo sapiens in southern Iberia, so the paintings were proposed as the work of Neanderthals — and, if true, the oldest known art of humankind.", "2012 datierte ein Forschungsteam Holzkohle neben den roten Tierfiguren auf 42.300 bis 43.500 Jahre. Das liegt vor der Ankunft des Homo sapiens in Südspanien – also wurden die Malereien Neandertalern zugeschrieben und wären damit die älteste bekannte Kunst der Menschheit gewesen.", "En 2012 un equipo dató carbón hallado junto a las figuras rojas de animales entre 42.300 y 43.500 años. Eso es anterior a la llegada del Homo sapiens al sur peninsular, así que se propuso que las pinturas eran obra de neandertales y, de ser cierto, el arte más antiguo de la humanidad.", "In 2012 dateerde een onderzoeksteam houtskool naast de rode dierfiguren op 42.300 tot 43.500 jaar. Dat is ouder dan de komst van Homo sapiens in Zuid-Iberië, dus werden de schilderingen aan neanderthalers toegeschreven — en zouden ze de oudste bekende kunst van de mensheid zijn.", "År 2012 daterade ett forskarlag träkol intill de röda djurfigurerna till mellan 42 300 och 43 500 år. Det är äldre än Homo sapiens ankomst till södra Iberiska halvön, så målningarna föreslogs vara neandertalarnas verk — och i så fall mänsklighetens äldsta kända konst."),
        l("That reading did not survive testing. A 2020 paper in the Journal of Archaeological Science showed that the calcite crusts used for uranium-thorium dating behave as an open system here, producing wildly inverted ages. One layer that sits above an 18,000–20,000-year-old charcoal deposit returned a calculated age of 118,900 years.", "Diese Lesart hielt der Überprüfung nicht stand. Eine Arbeit von 2020 im Journal of Archaeological Science zeigte, dass sich die für die Uran-Thorium-Datierung genutzten Calcitkrusten hier wie ein offenes System verhalten und dabei völlig verdrehte Alter liefern. Eine Schicht oberhalb einer 18.000 bis 20.000 Jahre alten Holzkohlelage ergab rechnerisch 118.900 Jahre.", "Esa lectura no superó la comprobación. Un trabajo de 2020 en el Journal of Archaeological Science demostró que las costras de calcita usadas para la datación uranio-torio se comportan aquí como un sistema abierto y arrojan edades invertidas. Una capa situada sobre un carbón de 18.000–20.000 años dio 118.900 años.", "Die lezing hield geen stand. Een studie uit 2020 in het Journal of Archaeological Science toonde aan dat de voor uranium-thoriumdatering gebruikte calcietkorsten zich hier als een open systeem gedragen en volledig omgekeerde ouderdommen opleveren. Een laag boven houtskool van 18.000–20.000 jaar gaf rekenkundig 118.900 jaar.", "Den tolkningen höll inte. En studie från 2020 i Journal of Archaeological Science visade att de kalcitskorpor som använts för uran-toriumdatering här beter sig som ett öppet system och ger helt omkastade åldrar. Ett lager ovanför träkol daterat till 18 000–20 000 år gav beräknat 118 900 år."),
        l("José Luis Sanchidrián, who led the original 2012 work, is a co-author of the paper that corrected it. Today the paintings are placed in the Upper Palaeolithic and attributed to Homo sapiens. The Neanderthal thesis is considered closed — which is a better story than the one it replaced, not a worse one.", "José Luis Sanchidrián, der die ursprüngliche Studie von 2012 geleitet hatte, ist Mitautor der Arbeit, die sie korrigiert. Heute gelten die Malereien als jungpaläolithisch und werden dem Homo sapiens zugeschrieben. Die Neandertaler-These ist damit erledigt – und das ist die bessere Geschichte, nicht die schlechtere.", "José Luis Sanchidrián, que dirigió el trabajo de 2012, firma como coautor el estudio que lo corrige. Hoy las pinturas se sitúan en el Paleolítico superior y se atribuyen al Homo sapiens. La tesis neandertal se considera cerrada, y esa es la mejor historia, no la peor.", "José Luis Sanchidrián, die het oorspronkelijke werk van 2012 leidde, is medeauteur van de studie die het corrigeert. Vandaag worden de schilderingen in het jong-paleolithicum geplaatst en aan Homo sapiens toegeschreven. De neanderthalerthese geldt als gesloten — en dat is het betere verhaal, niet het slechtere.", "José Luis Sanchidrián, som ledde det ursprungliga arbetet 2012, är medförfattare till studien som korrigerar det. I dag placeras målningarna i yngre paleolitikum och tillskrivs Homo sapiens. Neandertalartesen betraktas som avslutad — och det är den bättre historien, inte den sämre.")
      ]
    },
    {
      id: "what-you-see",
      eyebrow: l("Before you go", "Vor dem Besuch", "Antes de ir", "Voor je gaat", "Före besöket"),
      title: l("Most of the cave is closed, and that is the point", "Der größte Teil der Höhle ist gesperrt, und das ist gut so", "La mayor parte de la cueva está cerrada, y está bien así", "Het grootste deel van de grot is gesloten, en dat is maar goed ook", "Största delen av grottan är stängd, och det är bra så"),
      paragraphs: [
        l("Visitors walk the Galerías Turísticas: the halls of the Fantasmas, the Belén, the Cascadas, the Cataclismo and the Torca. The Galerías Altas and Galerías Nuevas are closed to the public to protect sinter basins and limit heat and humidity.", "Besucher gehen die Galerías Turísticas: die Säle der Fantasmas, den Belén, die Cascadas, den Cataclismo und die Torca. Die Galerías Altas und die Galerías Nuevas sind für die Öffentlichkeit gesperrt, um Sinterbecken zu schützen und Wärme- und Feuchtigkeitseintrag zu begrenzen.", "La visita recorre las Galerías Turísticas: las salas de los Fantasmas, el Belén, las Cascadas, el Cataclismo y la Torca. Las Galerías Altas y las Galerías Nuevas están cerradas al público para proteger los gours y limitar el calor y la humedad.", "Bezoekers lopen de Galerías Turísticas: de zalen van de Fantasmas, de Belén, de Cascadas, de Cataclismo en de Torca. De Galerías Altas en Galerías Nuevas zijn gesloten voor publiek om sinterbekkens te beschermen en warmte en vocht te beperken.", "Besökare går Galerías Turísticas: salarna Fantasmas, Belén, Cascadas, Cataclismo och Torca. Galerías Altas och Galerías Nuevas är stängda för allmänheten för att skydda sinterbassänger och begränsa värme och fukt."),
        l("The painted chambers are not on the route at all and cannot be seen. They are presented instead through high-resolution scans and virtual reality at the Museo de Nerja on Plaza de España — which is the honest way to visit them.", "Die bemalten Kammern liegen gar nicht am Weg und sind nicht zu sehen. Sie werden stattdessen über hochauflösende Scans und Virtual Reality im Museo de Nerja an der Plaza de España gezeigt – und das ist der ehrliche Weg, sie zu besuchen.", "Las cámaras pintadas no están en el recorrido y no pueden verse. Se presentan mediante escaneados de alta resolución y realidad virtual en el Museo de Nerja, en la Plaza de España: esa es la forma honesta de visitarlas.", "De beschilderde kamers liggen niet aan de route en zijn niet te zien. Ze worden getoond via hogeresolutiescans en virtual reality in het Museo de Nerja aan de Plaza de España — dat is de eerlijke manier om ze te bezoeken.", "De målade kamrarna ligger inte längs rutten och går inte att se. De visas i stället genom högupplösta skanningar och virtuell verklighet på Museo de Nerja vid Plaza de España — och det är det ärliga sättet att besöka dem."),
        l("One practical warning: the route has more than 458 steps up and down, with damp ground in places. It is not accessible, and pushchairs and wheelchairs cannot be taken in.", "Ein praktischer Hinweis: Der Rundgang führt über mehr als 458 Stufen auf und ab, streckenweise auf feuchtem Untergrund. Er ist nicht barrierefrei; Kinderwagen und Rollstühle können nicht mitgenommen werden.", "Un aviso práctico: el recorrido supera los 458 escalones de subida y bajada, con suelo húmedo en tramos. No es accesible, y no se admiten carritos ni sillas de ruedas.", "Een praktische waarschuwing: de route telt meer dan 458 treden omhoog en omlaag, plaatselijk met vochtige ondergrond. Hij is niet toegankelijk; kinderwagens en rolstoelen kunnen niet mee.", "En praktisk varning: rutten har över 458 trappsteg upp och ner, delvis på fuktigt underlag. Den är inte tillgänglighetsanpassad; barnvagnar och rullstolar kan inte tas med.")
      ]
    },
    {
      id: "getting-there",
      eyebrow: l("Getting there", "Anreise zur Höhle", "Cómo llegar", "Erheen reizen", "Ta sig dit"),
      title: l("The cave is by Maro, not in central Nerja", "Die Höhle liegt bei Maro und nicht im Zentrum von Nerja", "La cueva está junto a Maro, no en el centro de Nerja", "De grot ligt bij Maro, niet in centraal Nerja", "Grottan ligger vid Maro, inte i centrala Nerja"),
      paragraphs: [
        l("From Nerja, the realistic choices are a private car, taxi or a scheduled coach towards the cave and Maro. The operator has parking at the cave site, but current access, charges and opening arrangements should be checked before the visit rather than copied into a permanent guide.", "Von Nerja sind privates Auto, Taxi oder ein Linienbus in Richtung Höhle und Maro die realistischen Möglichkeiten. Am Höhlengelände gibt es laut Betreiber Parkplätze; aktuelle Zufahrt, Gebühren und Betriebsbedingungen solltet ihr vor dem Besuch prüfen, statt sie dauerhaft aus einem Reise-Guide zu übernehmen.", "Desde Nerja, las opciones realistas son coche privado, taxi o autobús de línea hacia la cueva y Maro. La fundación dispone de aparcamiento en el recinto, pero conviene comprobar accesos, tarifas y condiciones vigentes antes de la visita en lugar de fijarlos en una guía permanente.", "Vanuit Nerja zijn een eigen auto, taxi of lijndienst richting de grot en Maro de realistische keuzes. Volgens de beheerder is er parkeergelegenheid op het grotterrein, maar controleer toegang, kosten en actuele opening vooraf in plaats van die gegevens permanent in een reisgids vast te leggen.", "Från Nerja är egen bil, taxi eller linjebuss mot grottan och Maro de realistiska alternativen. Enligt anläggningen finns parkering vid grottområdet, men kontrollera aktuell infart, avgift och öppethållande före besöket i stället för att låsa uppgifterna i en permanent guide."),
        l("For public transport, use the current operator and Alsa journey information: stops and service patterns can change, and the final walk depends on the service selected. A taxi is the simplest door-to-door alternative when timing, luggage or mobility makes that connection awkward.", "Für öffentliche Verkehrsmittel nutzt ihr die aktuellen Angaben des Betreibers und die Alsa-Reiseauskunft: Haltestellen und Verbindungen können sich ändern, und der letzte Fußweg hängt von der gewählten Fahrt ab. Ein Taxi ist die einfachste direkte Alternative, wenn Zeiten, Gepäck oder Mobilität den Anschluss umständlich machen.", "Para el transporte público, consultad la información actual de la fundación y el buscador de Alsa: las paradas y servicios pueden cambiar, y el último tramo a pie depende de la opción elegida. El taxi es la alternativa directa más sencilla si los horarios, el equipaje o la movilidad complican esa conexión.", "Gebruik voor openbaar vervoer de actuele informatie van de beheerder en de reisplanner van Alsa: haltes en diensten kunnen veranderen en de laatste wandeling hangt af van de gekozen verbinding. Een taxi is het eenvoudigste directe alternatief wanneer tijden, bagage of mobiliteit de aansluiting lastig maken.", "För kollektivtrafik använder ni anläggningens aktuella information och Alsas reseplanerare: hållplatser och trafikupplägg kan ändras, och den sista promenaden beror på vald förbindelse. Taxi är det enklaste direkta alternativet när tider, bagage eller rörlighet gör anslutningen besvärlig."),
        l("The operator’s CuevaTren page currently states that the tourist road train is not available in its products. Do not plan around an old timetable; check the official page again if the service is important to your day.", "Auf der CuevaTren-Seite erklärt der Betreiber derzeit, dass der touristische Straßenzug in seinen Produkten nicht verfügbar ist. Plant nicht mit einem alten Fahrplan; prüft die offizielle Seite erneut, falls der Zug für euren Tag wichtig wäre.", "La página oficial de CuevaTren indica actualmente que el tren turístico por carretera no está disponible en los productos de la fundación. No planifiquéis el día con un horario antiguo; volved a consultar la página oficial si el servicio es importante para vosotros.", "De officiële CuevaTren-pagina vermeldt momenteel dat het toeristische wegtreintje niet beschikbaar is in de producten van de beheerder. Plan niet met een oude dienstregeling; controleer de officiële pagina opnieuw als deze dienst belangrijk is voor jullie dag.", "Den officiella CuevaTren-sidan anger för närvarande att turisttåget på väg inte finns tillgängligt i anläggningens produkter. Planera inte efter en gammal tidtabell; kontrollera den officiella sidan igen om tjänsten är viktig för er dag.")
      ]
    }
  ],
  personal: {
    eyebrow: l("Our own visit", "Unser eigener Besuch", "Nuestra propia visita", "Ons eigen bezoek", "Vårt eget besök"),
    title: l("What we did not expect: flying through the galleries that are closed", "Womit wir nicht gerechnet hatten: durch die gesperrten Galerien fliegen", "Lo que no esperábamos: volar por las galerías cerradas", "Waar we niet op gerekend hadden: door de gesloten galerijen vliegen", "Det vi inte hade räknat med: att flyga genom de stängda gångarna"),
    paragraphs: [
      l("Alongside the walking route there is a VR experience called “El Gran Viaje Interior”. We did not pay anything extra for it, and we nearly walked past it. That would have been a mistake.", "Neben dem Rundgang gibt es ein VR-Erlebnis, „El Gran Viaje Interior\". Wir haben dafür nichts extra bezahlt und wären fast daran vorbeigelaufen. Das wäre ein Fehler gewesen.", "Junto al recorrido a pie hay una experiencia de realidad virtual, «El Gran Viaje Interior». No pagamos nada aparte y estuvimos a punto de pasar de largo. Habría sido un error.", "Naast de wandelroute is er een VR-ervaring, „El Gran Viaje Interior\". We hebben er niets extra voor betaald en waren er bijna langsgelopen. Dat zou een fout zijn geweest.", "Vid sidan av vandringsrundan finns en VR-upplevelse, ”El Gran Viaje Interior”. Vi betalade inget extra för den och gick nästan förbi. Det hade varit ett misstag."),
      l("You sit down, put on a headset, and the film first takes you over Nerja from the air — genuinely striking footage — then shows how the cave was formed, and finally flies you through galleries visitors are not allowed to enter. It runs about twelve minutes, and because it is filmed in 360 degrees you look wherever you want while you move. That is what makes it work: you are not watching a film, you are turning your head in a place you will never stand in.", "Man setzt sich hin, bekommt eine Brille auf, und der Film führt euch zuerst von oben über Nerja — wirklich beeindruckende Aufnahmen —, zeigt dann, wie die Höhle entstanden ist, und fliegt am Ende durch Galerien, die Besucher nicht betreten dürfen. Es dauert etwa zwölf Minuten, und weil in 360 Grad gefilmt wurde, schaut ihr dabei dorthin, wohin ihr wollt. Genau das macht den Unterschied: Ihr seht keinen Film, ihr dreht den Kopf an einem Ort, an dem ihr nie stehen werdet.", "Uno se sienta, le colocan unas gafas, y la película os lleva primero sobre Nerja desde el aire —imágenes realmente impresionantes—, después muestra cómo se formó la cueva y termina volando por galerías en las que no se puede entrar. Dura unos doce minutos, y como está grabada en 360 grados miráis a donde queráis mientras avanzáis. Ahí está la diferencia: no veis una película, giráis la cabeza en un lugar donde nunca vais a estar.", "Je gaat zitten, krijgt een bril op, en de film neemt jullie eerst vanuit de lucht mee over Nerja — werkelijk indrukwekkende beelden —, laat daarna zien hoe de grot is ontstaan en vliegt tot slot door galerijen die bezoekers niet mogen betreden. Het duurt ongeveer twaalf minuten, en omdat er in 360 graden is gefilmd, kijken jullie ondertussen waarheen je wilt. Precies dat maakt het verschil: je kijkt niet naar een film, je draait je hoofd op een plek waar je nooit zult staan.", "Man sätter sig ner, får på sig ett headset, och filmen tar er först över Nerja från luften — verkligen slående bilder — visar sedan hur grottan bildades och flyger till sist genom gångar som besökare inte får gå in i. Den håller på i ungefär tolv minuter, och eftersom den är filmad i 360 grader tittar ni vart ni vill medan ni rör er. Det är just det som gör skillnaden: ni ser inte en film, ni vrider på huvudet på en plats där ni aldrig kommer att stå."),
      l("The cave itself does the rest. It stays cool inside — nine degrees, we were told — which in high summer is the most pleasant hour of the day. And on one of the rare days when it rains, this is the one thing on this coast that does not care about the weather.", "Den Rest erledigt die Höhle selbst. Drinnen bleibt es kühl — neun Grad, hieß es —, und im Hochsommer ist das die angenehmste Stunde des Tages. Und an einem der seltenen Regentage ist das die eine Sache an dieser Küste, der das Wetter egal ist.", "El resto lo hace la propia cueva. Dentro se mantiene fresca —nueve grados, nos dijeron—, y en pleno verano esa es la hora más agradable del día. Y en uno de esos días raros de lluvia, es lo único de esta costa a lo que el tiempo le da igual.", "De rest doet de grot zelf. Binnen blijft het koel — negen graden, werd ons verteld — en in de hoogzomer is dat het aangenaamste uur van de dag. En op een van die zeldzame regendagen is dit het enige aan deze kust waar het weer niets toe doet.", "Resten sköter grottan själv. Inne håller sig svalt — nio grader, fick vi höra — och mitt i sommaren är det dygnets behagligaste timme. Och en av de sällsynta regndagarna är det här det enda på den här kusten som struntar i vädret.")
    ],
    imageAlt: l("Putting on a VR headset in the El Gran Viaje Interior room at the Caves of Nerja", "Aufsetzen der VR-Brille im Raum von El Gran Viaje Interior an der Cueva de Nerja", "Colocándose las gafas de realidad virtual en la sala de El Gran Viaje Interior, en la Cueva de Nerja", "Een VR-bril opzetten in de zaal van El Gran Viaje Interior bij de Grotten van Nerja", "Någon sätter på sig ett VR-headset i salen för El Gran Viaje Interior vid Nerjagrottorna")
  },
  related: {
    eyebrow: l("Continue", "Weiterlesen", "Seguir leyendo", "Verder lezen", "Läs vidare"),
    title: l("Around the caves", "Rund um die Höhlen", "Alrededor de la cueva", "Rond de grotten", "Runt grottorna"),
    links: [
      {
        token: "nerja_geography" as LinkToken,
        label: l("Geography & orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
        text: l("Maro, the cliffs and how the eastern side of the municipality fits together.", "Maro, die Steilküste und wie die Ostseite der Gemeinde zusammenhängt.", "Maro, los acantilados y cómo encaja el lado oriental del municipio.", "Maro, de kliffen en hoe de oostkant van de gemeente in elkaar zit.", "Maro, klipporna och hur kommunens östra sida hänger ihop.")
      },
      {
        token: "nerja_weather" as LinkToken,
        label: l("Weather & seasons", "Wetter & Jahreszeiten", "Tiempo y estaciones", "Weer & seizoenen", "Väder & årstider"),
        text: l("The cave holds its own climate — outside, the season decides your day.", "Die Höhle hat ihr eigenes Klima – draußen entscheidet die Jahreszeit über euren Tag.", "La cueva tiene su propio clima; fuera, la estación decide vuestro día.", "De grot heeft haar eigen klimaat; buiten bepaalt het seizoen jullie dag.", "Grottan har sitt eget klimat; utanför avgör årstiden er dag.")
      },
      {
        token: "nerja_experience_hub" as LinkToken,
        label: l("Choose the rest of your Nerja day", "Den restlichen Nerja-Tag gestalten", "Completar el resto del día en Nerja", "Vul de rest van jullie dag in Nerja in", "Fyll resten av dagen i Nerja"),
        text: l("The timed cave visit takes only part of the day; beaches, the Balcón, food and Nerja's evening areas give the remaining hours a clear direction.", "Der Besuch mit festem Zeitfenster nimmt nur einen Teil des Tages ein. Strände, Balcón, Essen und Nerjas Abendviertel geben den übrigen Stunden eine klare Richtung.", "La visita con horario ocupa solo una parte del día; las playas, el Balcón, la gastronomía y las zonas nocturnas de Nerja dan forma al resto de las horas.", "Het grotbezoek met tijdslot neemt maar een deel van de dag in; stranden, het Balcón, eten en de avondbuurten van Nerja geven richting aan de resterende uren.", "Grottbesöket med tidsbestämt inträde tar bara en del av dagen; stränderna, Balcón, maten och Nerjas kvällsområden ger resten av timmarna en tydlig riktning.")
      }
    ]
  },
  sources: {
    eyebrow: l("Behind this guide", "Belege hinter dem Guide", "Detrás de esta guía", "Achter deze gids", "Bakom guiden"),
    title: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    intro: l("Measurements and access come from the cave operator and public bodies; the dating history from the peer-reviewed literature. Prices, hours and time slots change and are not stated here.", "Maße und Zugänglichkeit stammen vom Höhlenbetreiber und von öffentlichen Stellen, die Datierungsgeschichte aus der begutachteten Fachliteratur. Preise, Zeiten und Zeitfenster ändern sich und stehen hier nicht.", "Medidas y accesos proceden de la fundación y de organismos públicos; la historia de la datación, de la literatura revisada por pares. Precios, horarios y franjas cambian y no se recogen aquí.", "Maten en toegang komen van de beheerder en van overheidsinstanties, de dateringsgeschiedenis uit peer-reviewed literatuur. Prijzen, tijden en tijdvakken veranderen en staan hier niet.", "Mått och tillgänglighet kommer från anläggningen och offentliga myndigheter, dateringshistoriken från granskad facklitteratur. Priser, tider och tidsluckor ändras och anges inte här."),
    checked: l("Sources checked in August 2026.", "Quellen geprüft im August 2026.", "Fuentes consultadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("Fundación Cueva de Nerja · The halls", "Fundación Cueva de Nerja · Die Säle", "Fundación Cueva de Nerja · Las salas", "Fundación Cueva de Nerja · De zalen", "Fundación Cueva de Nerja · Salarna"),
        text: l("The operator on the galleries, the column and what is open to visitors.", "Der Betreiber zu Galerien, Säule und dem, was Besuchern offensteht.", "La fundación sobre las galerías, la columna y lo que se puede visitar.", "De beheerder over de galerijen, de zuil en wat open is voor bezoekers.", "Anläggningen om gallerierna, pelaren och vad som är öppet för besökare."),
        href: sharedSources.official
      },
      {
        label: l("Fundación Cueva de Nerja · How to get there", "Fundación Cueva de Nerja · Anreise", "Fundación Cueva de Nerja · Cómo llegar", "Fundación Cueva de Nerja · Bereikbaarheid", "Fundación Cueva de Nerja · Ta sig dit"),
        text: l("The operator on access by car, scheduled coach and parking at the cave site.", "Der Betreiber zur Anreise mit Auto und Linienbus sowie zum Parken am Höhlengelände.", "La fundación sobre el acceso en coche y autobús de línea y el aparcamiento del recinto.", "De beheerder over toegang per auto en lijndienst en parkeren op het grotterrein.", "Anläggningen om tillfart med bil och linjebuss samt parkering vid grottområdet."),
        href: sharedSources.access
      },
      {
        label: l("Fundación Cueva de Nerja · CuevaTren status", "Fundación Cueva de Nerja · Status des CuevaTren", "Fundación Cueva de Nerja · Estado de CuevaTren", "Fundación Cueva de Nerja · Status CuevaTren", "Fundación Cueva de Nerja · CuevaTren-status"),
        text: l("The operator currently marks the tourist road train as unavailable in its products.", "Der Betreiber kennzeichnet den touristischen Straßenzug derzeit als nicht in seinen Produkten verfügbar.", "La fundación indica actualmente que el tren turístico no está disponible en sus productos.", "De beheerder vermeldt momenteel dat het toeristische wegtreintje niet beschikbaar is in zijn producten.", "Anläggningen anger för närvarande att turisttåget inte finns tillgängligt i dess produkter."),
        href: sharedSources.cuevaTren
      },
      {
        label: l("Universidad de Córdoba · Questioning the Neanderthal authorship", "Universidad de Córdoba · Zweifel an der Neandertaler-Autorschaft", "Universidad de Córdoba · Se cuestiona la autoría neandertal", "Universidad de Córdoba · Twijfel over neanderthalerauteurschap", "Universidad de Córdoba · Neandertalarnas upphovsmannaskap ifrågasatt"),
        text: l("The university on the study that revised the dating of the paintings.", "Die Universität zur Studie, die die Datierung der Malereien revidiert hat.", "La universidad sobre el estudio que revisó la datación de las pinturas.", "De universiteit over de studie die de datering van de schilderingen herzag.", "Universitetet om studien som reviderade dateringen av målningarna."),
        href: sharedSources.dating
      },
      {
        label: l("Diputación de Málaga · Cueva de Nerja", "Diputación de Málaga · Cueva de Nerja", "Diputación de Málaga · Cueva de Nerja", "Diputación de Málaga · Cueva de Nerja", "Diputación de Málaga · Cueva de Nerja"),
        text: l("Public provincial information on the cave and its setting.", "Öffentliche Provinzinformation zur Höhle und ihrer Umgebung.", "Información pública provincial sobre la cueva y su entorno.", "Openbare provinciale informatie over de grot en haar omgeving.", "Offentlig provinsinformation om grottan och dess omgivning."),
        href: sharedSources.provincia
      }
    ]
  },
  closing: {
    eyebrow: l("Back to the stay", "Zurück zum Aufenthalt", "De vuelta a la estancia", "Terug naar het verblijf", "Tillbaka till vistelsen"),
    title: l("An hour underground, and the rest of the day is still yours.", "Eine Stunde unter der Erde – und der Rest des Tages gehört noch euch.", "Una hora bajo tierra y el resto del día sigue siendo vuestro.", "Een uur onder de grond, en de rest van de dag is nog van jullie.", "En timme under jord — och resten av dagen är fortfarande er."),
    body: l("The caves sit four kilometres east of the centre. From our door it is a short drive there and a shorter walk back to the sea.", "Die Höhlen liegen vier Kilometer östlich des Zentrums. Von unserer Tür ist es eine kurze Fahrt hin und ein noch kürzerer Weg zurück ans Meer.", "La cueva está cuatro kilómetros al este del centro. Desde nuestra puerta es un trayecto corto de ida y un paseo aún más corto de vuelta al mar.", "De grotten liggen vier kilometer ten oosten van het centrum. Vanaf onze deur is het een korte rit heen en een nog kortere wandeling terug naar zee.", "Grottorna ligger fyra kilometer öster om centrum. Från vår dörr är det en kort körning dit och en ännu kortare promenad tillbaka till havet."),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Visa AMARA Playa"),
    locationLabel: l("Back to the Nerja location guide", "Zurück zum Nerja Lage-Guide", "Volver a la guía de ubicación de Nerja", "Terug naar de Nerja locatiegids", "Tillbaka till Nerjas lägesguide")
  }
};
