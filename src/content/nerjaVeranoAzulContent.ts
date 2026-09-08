import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface NerjaVeranoAzulSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}





const article = {
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

const officialSources = {
  rtveStory:
    'https://www.rtve.es/rtve/20180413/verano-azul/1713840.shtml',
  rtveProduction:
    'https://www.rtve.es/play/noticias/20111010/como-rodamos-verano-azul/465995.shtml',
  municipality: {
    profile: 'https://www.nerja.es/fallece-antonio-mercero-director-verano-azul/',
    route:
      'https://www.nerja.es/nerja-pone-en-marcha-la-ruta-turistica-de-verano-azul-con-una-aplicacion-de-realidad-aumentada/',
    anniversary:
      'https://www.nerja.es/nerja-conmemora-el-40-aniversario-del-inicio-del-rodaje-de-verano-azul/',
    anforas:
      'https://www.nerja.es/las-anforas-de-verano-azul-se-instalan-en-la-casa-consistorial/'
  }
};

export const nerjaVeranoAzulSeo: AmaraAuthoringSeo = {
  version: '2026-08-19-nerja-verano-azul-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Verano Azul in Nerja: Filming locations, the TV series phenomenon and its legacy',
      description:
        'The series that made Nerja a national landmark in Spain: shooting locations, how the production shaped local identity and what still remains visible in town today.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Verano Azul in Nerja: Drehorte und Spuren',
      description:
        'Die Serie, die Nerja in ganz Spanien bekannt machte: Drehorte am Strand, die Chanquete-Statue, La Dorada im Park und die AR-Route.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Verano Azul en Nerja: localizaciones, TV y huella actual',
      description:
        'La serie que convirtió a Nerja en referencia nacional: localizaciones, cómo marcó la identidad local y qué queda hoy de su legado.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Verano Azul in Nerja: opnames, TV-fenomeen en nalatenschap',
      description:
        'De serie die Nerja in de hele Spaanse media zichtbaar maakte: opnamelocaties, hoe dat de plaats heeft vormgegeven en wat er nog zichtbaar is.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title:
        'Verano Azul i Nerja: inspelning, TV-fenomen och arv',
      description:
        'Serien som gjorde Nerja känt över hela Spanien: inspelningsplatser, hur den formade platsens identitet och vad som fortfarande går att upptäcka.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaVeranoAzulContent = {
  navLabel: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
  breadcrumbLabel: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
  hero: {
    eyebrow: l("Nerja · TV memory", "Nerja · Serienkulisse", "Nerja · Memoria audiovisual", "Nerja · TV-geheugen", "Nerja · TV-minne"),
    title: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
    standfirst: l("The TV series Verano Azul is where many families met Nerja for the first time. It is also where the town acquired a shared visual memory that still shapes how locals speak about certain streets, the Balcón and the old coast.", "Für ein ganzes Land war Nerja zuerst ein Fernsehbild: die Jugendlichen auf ihren Rädern, Chanquete und sein Boot La Dorada, der Strand von Burriana. Die Serie lief vor über vierzig Jahren; ihre Orte stehen noch.", "Para muchas familias, Verano Azul fue la primera vez que oyó hablar de Nerja. La serie también dejó una memoria visual compartida que sigue presente en la vida cotidiana del municipio.", "Voor veel gezinnen was Verano Azul de eerste kennismaking met Nerja. De serie liet een gedeeld beeld achter dat nog in de lokale beleving meeloopt.", "För många hushåll var Verano Azul första gången de hörde talas om Nerja. Serien har lämnat en delad visuell minneskarta som fortfarande påverkar platsberättelsen."),
    note: l("Editorial guide written from verified public sources and municipal information. It avoids fan speculation and travel booking details.", "Drehorte, Statue und Park liegen im Zentrum von Nerja.", "La guía se basa en fuentes públicas verificables y evita la especulación de fandom y datos de alquileres o precios.", "Deze gids is gebaseerd op controleerbare publieke bronnen. Fan-schattingen en reserveringsdetails zijn bewust weggelaten.", "Guiden bygger på verifierade offentliga källor och exkluderar osäkra fanspecifikationer och bokningsdetaljer."),
    updated: l("Edited in August 2026", "Stand August 2026", "Revisada en agosto de 2026", "Bewerkt in augustus 2026", "Genomgången i augusti 2026")
  },
  facts: [
    {
      label: l("TV format", "TV-Format", "Formato", "TV-opzet", "TV-format"),
      value: l("19 episodes · TVE serial, three-season structure in production records", "19 Folgen, produziert von TVE", "19 capítulos · producción serial de TVE", "19 afleveringen · TVE-serie op basis van publieke bronnotities", "19 avsnitt · TVE-serie enligt publicerad produktionsstruktur")
    },
    {
      label: l("Broadcast run", "Ausstrahlung", "Emisión", "Uitzending", "Sändning"),
      value: l("11 Oct 1981 – 14 Feb 1982", "11. Oktober 1981 – 14. Februar 1982", "11 octubre de 1981 – 14 febrero de 1982", "11 oktober 1981 – 14 februari 1982", "11 oktober 1981 – 14 februari 1982")
    },
    {
      label: l("Audience reach", "Zuschauer", "Alcance", "Publiek", "Publikumsräckvidd"),
      value: l("Later episodes reported over 9 million viewers", "Über 9 Millionen bei späteren Folgen", "Episodios posteriores con más de 9 millones de espectadores", "In latere afleveringen door bronnen genoemd meer dan 9 miljoen kijkers", "Senare avsnitt angavs ha över 9 miljoner tittare")
    },
    {
      label: l("First day in Nerja", "Erster Drehtag", "Primer día de rodaje", "Eerste opnamedag", "Första inspelningsdag"),
      value: l("21 Aug 1979, Playa de Burriana", "21. August 1979, Playa de Burriana", "21 agosto de 1979, Playa de Burriana", "21 augustus 1979, Playa de Burriana", "21 augusti 1979, Playa de Burriana")
    },
    {
      label: l("Local legacy", "Heute", "Huella local", "Lokaal erfgoed", "Lokal påverkan"),
      value: l("Parque Verano Azul, La Dorada replica and an AR route launched in 2023", "Parque Verano Azul mit La Dorada, Chanquete-Statue, AR-Route seit 2023", "Parque Verano Azul, réplica de La Dorada y ruta de RA desde 2023", "Parque Verano Azul, La Dorada replica en AR-route sinds 2023", "Parque Verano Azul, La Dorada-replik och AR-rutt från 2023")
    }
  ],
  trailer: {
    label: l("Official Verano Azul trailer", "Offizieller Verano Azul Trailer", "Tráiler oficial de Verano Azul", "Officiële Verano Azul trailer", "Officiell trailer"),
    privacyNote: l("The trailer is hosted on YouTube. Loading it transmits your IP address to Google and may store data locally.", "Der Trailer liegt bei YouTube; beim Laden gehen Daten an Google.", "El tráiler está alojado en YouTube. Al cargarlo se transmite la IP a Google, que también puede guardar datos locales.", "De trailer staat op YouTube. Bij het laden gaat jullie IP naar Google, wat ook gegevens op het apparaat kan achterlaten.", "Trailern ligger hos YouTube. Vid laddning skickas IP-adressen till Google, som också kan lagra data lokalt."),
    loadAction: l("Load trailer", "Trailer laden", "Cargar tráiler", "Trailer laden", "Ladda trailern")
  },
  sections: [
    {
      id: "tv-phenomenon",
      eyebrow: l("The TV phenomenon", "Die Serie", "El fenómeno televisivo", "Het TV-fenomeen", "TV-fenomenet"),
      title: l("How this series became part of a whole generation’s memory", "Ein Sommer, den ganz Spanien gesehen hat", "Cómo se convirtió en memoria de varias generaciones", "Waarom de serie een deel van meerdere generaties geheugen is geworden", "Hur serien blev en del av flera generationers gemensamma minne"),
      paragraphs: [
        l("Verano Azul is not remembered only for its story. Its broadcast impact is equally part of its legacy: 19 episodes, and a first phase that reached a broad Spanish audience when shown on TVE.", "Verano Azul erzählt von einer Gruppe Jugendlicher, die ihre Sommerferien in Nerja verbringen, vom alten Fischer Chanquete und der Malerin Julia. 19 Folgen, ausgestrahlt zwischen Oktober 1981 und Februar 1982.", "Verano Azul no se recuerda solo por su argumento: también dejó una huella masiva en la emisión pública y en la cultura compartida.", "Verano Azul is niet alleen bekend om het verhaal, maar ook door de reikwijdte van de uitzending.", "Verano Azul minns vi inte enbart för handlingen, utan också för den stora spridningen i tv-sammanhang."),
        l("According to production and broadcast records, the original run is placed between 11 October 1981 and 14 February 1982, with later episodes repeatedly cited as drawing very high audience numbers.", "Die Serie wurde über Jahrzehnte wiederholt; Generationen kennen die Titelmelodie und die Fahrräder auf der Promenade. Wer in Spanien aufgewachsen ist, verbindet Nerja bis heute mit diesem Sommer.", "La documentación pública sitúa el primer bloque entre el 11 de octubre de 1981 y el 14 de febrero de 1982, y recoge una audiencia muy alta en capítulos posteriores.", "Publieke registraties noemen een uitzending tussen 11 oktober 1981 en 14 februari 1982 en een zeer hoge kijkdichtheid in latere afleveringen.", "Enligt tillgänglig officiell information sträckte sig första publicerade utsändning till perioden 11 oktober 1981 till 14 februari 1982, med mycket hög publik i senare avsnitt.")
      ]
    },
    {
      id: "why-nerja",
      eyebrow: l("Why Nerja", "Warum Nerja", "Por qué Nerja", "Waarom Nerja", "Varför Nerja"),
      title: l("Why the town was selected after scouting on the Mediterranean coast", "Warum die Produktion hier drehte", "Por qué el equipo eligió la localidad tras el localizador costero", "Waarom de locatiekeuze bij de opnames uitviel", "Varför produktionen valde platsen efter kustrekognoscering"),
      paragraphs: [
        l("The production’s early recce process in the Mediterranean landscape looked for places that offered varied light, sea access and lived-in streets within short travel reach.", "Das Team suchte einen Ort, an dem Strand, Altstadt und Straßen nah beieinanderliegen, so dass sich Szenen ohne lange Wege verbinden ließen.", "En los procesos de localización se buscó un entorno con vida urbana, luz costera y transiciones entre calle y mar.", "Tijdens scouting werd gezocht naar plekken met afwisseling van centrum, straten en open kust.", "I scouting fasen sökte teamet omväxlande miljöer: stadsliv, utsikt, kustljus och övergångar mellan nära och vida miljöer."),
        l("Nerja worked because production could move between intimate urban scenes and open shoreline settings with practical continuity. That flexibility made the town suitable for a long-format serial model.", "Nerja bot genau das: Burriana, den Balcón und die Gassen dahinter, alles in Gehweite. Am 21. August 1979 fiel am Strand von Burriana die erste Klappe.", "Nerja permitió sostener ese doble registro de manera eficiente: escenas de pueblo y escenas de costa en continuidad narrativa.", "Nerja bood die combinatie op schaal, waardoor sequenties met dagelijks leven en kusten in één productieschema samengebracht konden worden.", "Nerja passade för att kombinera dessa delar i ett hållbart schema med korta logistiska avstånd.")
      ]
    },
    {
      id: "nerja-in-the-series",
      eyebrow: l("Nerja as part of the series", "Die Drehorte", "Nerja en la serie", "Nerja in de serie", "Nerja i serien"),
      title: l("Playa de Burriana, Balcón de Europa, Cala Chica and the urban streets", "Burriana, Balcón, Cala Chica und die Gassen", "Playa de Burriana, Balcón, Cala Chica y calles del centro", "Playa de Burriana, Balcón, Cala Chica en stadsstraten", "Playa de Burriana, Balcón, Cala Chica och stadens gator"),
      paragraphs: [
        l("Nerja’s map inside the series includes multiple anchors: Playa de Burriana, Balcón de Europa, Cala Chica and the Cueva de Nerja, plus residential and commercial streets in and around the centre.", "Der Strand von Burriana, der Balcón de Europa, die kleine Bucht Cala Chica, die Cueva de Nerja und die Straßen des Zentrums: Wer heute durch Nerja geht, geht durch die Serie.", "El mapa serial incluye puntos claramente reconocibles: Playa de Burriana, Balcón de Europa, Cala Chica y la Cueva de Nerja, además de tramos urbanos del centro.", "De seriebeelden bevatten herkenbare ankerpunten als Playa de Burriana, Balcón de Europa, Cala Chica, de Cueva de Nerja en centrumwijken.", "Kända platser i serien innefattar Playa de Burriana, Balcón de Europa, Cala Chica och Cueva de Nerja samt flera urbana stråk i centrum."),
        l("The production also used the town’s transitions and road geography for movement and crowd continuity, not only its postcard scenes. This is one reason the series still feels geographically coherent despite the amount of screen time.", "Ein Teil der Szenen entstand weiter östlich bei Motril und Almuñécar; das Bild von Nerja aber ist das, das geblieben ist.", "La película aprovecha también los cambios de ritmo entre esos espacios, por eso el recorrido parece coherente y familiar pese a la distancia entre escenas.", "De opnames spelen met overgangen tussen die plekken, waardoor het beeld als één plekenset leesbaar blijft.", "Produktionen byggde på övergångar mellan dessa punkter, vilket gör att serien upplevs som ett sammanhängande geografiskt rum.")
      ]
    },
    {
      id: "chanquete-la-dorada",
      eyebrow: l("Chanquete and La Dorada", "Chanquete und La Dorada", "Chanquete y La Dorada", "Chanquete en La Dorada", "Chanquete och La Dorada"),
      title: l("How iconography was built and how the replica is presented today", "Der Fischer und sein Boot", "La iconicidad construida y la réplica contemporánea", "Hoe iconen zijn opgebouwd en hoe de replica nu staat", "Hur ikoniken skapades och hur repliken presenteras nu"),
      paragraphs: [
        l("Chanquete became the emotional centre of the show’s character world and still appears in guides, anecdotes and conversations among visitors.", "Chanquete, der alte Fischer, der auf seinem an Land gezogenen Boot La Dorada wohnt, ist die Figur, an die sich alle erinnern. Seine Statue steht heute an der Playa Calahonda, gleich unter dem Balcón.", "Chanquete quedó como icono del universo de la serie y forma parte de cómo se habla hoy de la ruta.", "Chanquete is uitgegroeid tot het sterkste herkenningspunt in de verhalen rond de serie.", "Chanquete blev en symbol för serien och återkommer i lokala samtal om förankringen."),
        l("La Dorada in Nerja was built as a purpose-made screen construction, not a historic surviving vessel location from the original shooting period. That distinction matters when you visit.", "La Dorada war eine Kulisse, für die Serie gebaut. Im Parque Verano Azul steht heute ein Nachbau des Boots, und davor stehen die Besucher für ihr Foto Schlange.", "La Dorada de Nerja fue un set funcional para la producción; su versión actual no es el barco original de rodaje conservado intacto.", "La Dorada in Nerja was destijds een functioneel opbouwset, niet het originele blijvend behouden vissersvaartuig.", "La Dorada i Nerja var ett planerat filmbygge för produktionen, inte en helt bevarad ursprungsbåt.")
      ]
    },
    {
      id: "changed-nerja",
      eyebrow: l("How Verano Azul changed Nerja", "Was blieb", "Cómo cambió Nerja Verano Azul", "Hoe Verano Azul Nerja veranderde", "Hur Verano Azul förändrade Nerja"),
      title: l("Officially echoed claims: visibility, identity and national recognition", "Wie die Serie den Ort bekannt machte", "Lo que repite el municipio: visibilidad y reconocimiento", "Wat de gemeente consequent noemt: zichtbaarheid en identiteit", "Det officiella arvet: synlighet och identitet"),
      paragraphs: [
        l("Municipal and local cultural pages repeatedly describe Verano Azul as a turning point for Nerja’s visibility far beyond Andalusia, with lasting effects on identity and local pride.", "Nach der Ausstrahlung kannte ganz Spanien Nerja, und viele kamen, um den Strand aus dem Fernsehen zu sehen. Die Stadt hat der Serie seither einen Park, eine Promenade und eine Straße gewidmet.", "Las fuentes municipales describen a Verano Azul como un referente de visibilidad nacional para Nerja y de identidad colectiva local.", "Lokale en gemeentelijke bronnen noemen Verano Azul als een blijvende reden dat Nerja nationaal sterker werd herkend.", "Kommunala och lokala källor beskriver serien som en faktor i Nerjas nationella synlighet och i lokal identitetsbildning.")
      ]
    },
    {
      id: "verano-azul-today",
      eyebrow: l("Verano Azul in Nerja today", "Heute", "Verano Azul en Nerja hoy", "Verano Azul vandaag", "Verano Azul i Nerja idag"),
      title: l("From route and replica to everyday traces", "Ein Spaziergang durch die Serie", "Del pasado televisivo a la presencia diaria", "Van televisieregie tot tastbaar stadsdecor", "Från TV-minne till nuvarande platslager"),
      paragraphs: [
        l("Nerja today keeps Verano Azul visible through multiple nodes: Parque Verano Azul, the La Dorada reconstruction site, Antonio Mercero’s seafront avenue (officially named in tourism-facing materials), Calle Antonio Ferrandis, the Chanquete statue near Playa Calahonda and the Balcón de Europa.", "Im Parque Verano Azul steht La Dorada, an der Playa Calahonda die Chanquete-Statue, die Promenade heißt nach dem Regisseur Antonio Mercero, eine Straße nach Antonio Ferrandis, der Chanquete spielte. Alles liegt zwischen Balcón und Burriana, zu Fuß an einem Nachmittag.", "Hoy se activan hitos como el Parque Verano Azul, la réplica de La Dorada, el paseo Antonio Mercero, la Calle Antonio Ferrandis, la estatua de Chanquete en Playa Calahonda y el Balcón de Europa.", "Vandaag zijn er zichtbare knooppunten: Parque Verano Azul, La Dorada-replica, de Antonio Mercero-route, Calle Antonio Ferrandis, Chanquete-beeld bij Playa Calahonda en de Balcón de Europa.", "Idag är dessa punkter läsbara i offentlig miljö: Parque Verano Azul, La Dorada-repliken, Antonio Mercero-avenyn, Calle Antonio Ferrandis, Chanquete-statyn vid Playa Calahonda och Balcón de Europa."),
        l("The municipal AR route launched in 2023 adds context points and is now one practical way to read how the series is embedded in the city narrative today.", "Seit 2023 gibt es dazu eine Route mit erweiterter Realität: App öffnen, Handy auf den Ort richten, und die Szene von damals legt sich über das Bild von heute.", "En 2023 se puso en marcha la ruta turística en RA para añadir contexto y recorrido a esa memoria.", "Sinds 2023 is er een gemeentelijke AR-route toegevoegd die extra context geeft bij de route.", "Sedan 2023 finns en officiell AR-rutt som lägger samman dessa punkter med ytterligare kontext.")
      ]
    }
  ],
  itinerary: {
    eyebrow: l("Following Verano Azul today", "Der Weg", "Verano Azul hoy", "Verano Azul vandaag volgen", "Följa Verano Azul i dag"),
    title: l("A short guest-facing itinerary", "Vom Strand zum Balcón", "Una ruta breve para ir haciéndola real", "Een eenvoudige wandeling met logische volgorde", "En kort rundvandring för gäster"),
    intro: l("If you want a practical walk that still follows the cultural map of the series, take this route by order and compare each setting with your local landmarks.", "Eine Reihenfolge, die zu Fuß Sinn ergibt.", "Para vivir una lectura de la serie sin confundir ficción y agenda, seguí este orden práctico.", "Wie de serie-route als gast wilt lezen, kan dit in deze volgorde doen: vanaf zee naar het centrum.", "Om du vill kombinera serieminnet med en tydlig platsupplevelse, följ den här ordningen."),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Playa and coast", "Burriana", "Playa y costa", "Strand en kust", "Strand och kust"),
        text: l("Start at the main coastal context before moving into interior spots.", "Hier begann der Dreh; heute Strandlokale und der lange Sandstrand.", "Empieza por la escala de costa para situar la luz y el acceso.", "Begin met het kustbeeld dat de serievisuele context vormt.", "Börja vid kusten för att anpassa ljus och rytm.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("Use it as a skyline anchor and visual reference point.", "Die Chanquete-Statue steht direkt darunter an der Calahonda.", "Úsalo como ancla visual y de orientación.", "Gebruik het als visuele overgang en oriënteringspunt.", "Använd denna punkt som första visuella fixpunkt.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Caves of Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja"),
        text: l("Cross from coast to inland landmarks and understand the wider location system.", "Die Höhle war Kulisse und ist einen eigenen Vormittag wert.", "Conecta hacia el eje interior de la zona más conocida por los huéspedes.", "Verbind vervolgens met een tweede cultureel anker in de stad.", "Gå vidare till ett annat av Nerjas bestående landmärke.")
      },
      {
        token: "nerja_experience_hub" as LinkToken,
        label: l("All Nerja experiences", "Alle Erlebnisse in Nerja", "Todas las experiencias de Nerja", "Alle Nerja-ervaringen", "Alla Nerja-upplevelser"),
        text: l("Return to the full experience hub for nearby recommendations.", "Strände, Höhle, Balcón und Abende.", "Vuelve al hub para planificar el resto de la estancia.", "Ga terug naar het hub-overzicht voor een complete dagindeling.", "Återgå till hubben för nästa steg i din plan.")
      }
    ]
  },
  related: {
    eyebrow: l("Continue reading", "Weiterlesen", "Continuar leyendo", "Verder lezen", "Läs vidare"),
    title: l("Nerja culture and places around Verano Azul", "Weiter in Nerja", "Más cultura y lugares de la ruta", "Meer culturele plekken rond Verano Azul", "Mer kring kultur och platser"),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Beaches in Nerja", "Strände in Nerja", "Playas de Nerja", "Stranden van Nerja", "Nerjas stränder"),
        text: l("How the beaches support both daily life and the series memory landscape.", "Burriana, Calahonda und die kleinen Buchten.", "Cómo la costa influye en el tiempo y en el ritmo de la experiencia diaria.", "Hoe de kust in beeld en in de praktijk de dagstructuur bepaalt.", "Hur stranden formar både vardagsrytm och filmisk igenkänning.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("How Nerja’s visual emblem became one of the route’s main viewpoints.", "Der Aussichtspunkt über dem Meer, mitten in der Stadt.", "El punto más fotogénico y de referencia visual de la ciudad.", "De visuele kern waar veel routekeuzes om draaien.", "Det visuella centrum där många av de ikoniska referenserna kliver fram.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Cave guide", "Cueva de Nerja", "Cueva de Nerja", "Grotengids", "Grotguiden"),
        text: l("One of the long-running landmarks that still shapes how guests move through Nerja.", "Die Höhle mit den Tropfsteinen, ein paar Kilometer östlich vom Zentrum.", "Un referente duradero para recorrer el municipio con contexto histórico.", "Een vaste referentie in de bredere ruimtelijke beleving van de gemeente.", "Ett annat långvarigt orienteringsmärke för besökande i kommunen.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources checked", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Official material used in this guide", "Woher die Angaben kommen", "Material oficial consultado", "Officiële bronnenbasis", "Officiella källor som användes"),
    intro: l("Public announcements and municipal pages were used for production dates, shooting references and legacy claims. We keep direct interpretation points conservative where source detail is limited.", "Daten und Drehorte aus RTVE-Berichten und Mitteilungen der Stadt Nerja.", "La base de esta guía son recursos públicos de RTVE y del Ayuntamiento, con énfasis en datos verificables sobre rodaje, memoria local y continuidad de ruta.", "De basisinformatie komt uit RTVE-documentatie en gemeentelijke mededelingen, met nadruk op verifieerbare productiestaferelen en lokaal erfgoed.", "Materialet bygger på RTVE-publiceringar och kommunala kanaler med fokus på verifierbar produktion och kvarstående minnesarbete."),
    checked: l("Sources reviewed in August 2026.", "Stand August 2026", "Fuentes revisadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("RTVE · Verano Azul archive page", "RTVE · Verano Azul-Übersicht", "RTVE · Ficha de Verano Azul", "RTVE · Verano Azul dossier", "RTVE · Verano Azul-översikt"),
        text: l("Main RTVE reference entry with public coverage.", "Die Serie im RTVE-Archiv.", "Referencia pública de la serie.", "Publieke informatie over de serie.", "Offentlig serieöversikt med grundfakta."),
        href: officialSources.rtveStory
      },
      {
        label: l("RTVE · How Verano Azul was filmed", "RTVE · Produktionshinweise", "RTVE · Cómo se rodó", "RTVE · Productieproces", "RTVE · Inspelningsupplägg"),
        text: l("Production context and filming process notes.", "Wie gedreht wurde.", "Información de proceso de rodaje y contexto.", "Bron over het maakproces en de opnamen.", "Bakgrund till arbetsmetod och inspelning."),
        href: officialSources.rtveProduction
      },
      {
        label: l("Ayuntamiento de Nerja · Director profile", "Ayuntamiento · Mercero-Notiz", "Ayuntamiento de Nerja · Perfil", "Ayuntamiento de Nerja · Profiel", "Ayuntamiento de Nerja · Profil"),
        text: l("Municipal remembrance around Antonio Mercero and local context.", "Zum Regisseur Antonio Mercero.", "Texto municipal de referencia histórica.", "Gemeentelijke bron rond auteur en context.", "Kommunal kontext kring berättelse och arv."),
        href: officialSources.municipality.profile
      },
      {
        label: l("Ayuntamiento de Nerja · AR route launch", "Ayuntamiento · AR-Route", "Ayuntamiento de Nerja · Ruta de RA", "Ayuntamiento de Nerja · AR-route", "Ayuntamiento de Nerja · AR-rutt"),
        text: l("Municipal context for the 2023 route and its purpose.", "Die AR-Route der Stadt.", "Publicación sobre la ruta turística con RA.", "Officiële informatie over de route met augmented reality.", "Information om kommunal AR-rutt och syfte."),
        href: officialSources.municipality.route
      },
      {
        label: l("Ayuntamiento de Nerja · 40th anniversary", "Ayuntamiento · 40-Jahres-Gedenken", "Ayuntamiento de Nerja · 40 aniversario", "Ayuntamiento de Nerja · 40-jarig", "Ayuntamiento de Nerja · 40-årsjubileum"),
        text: l("Municipal acknowledgement of the start of filming and memory milestones.", "40 Jahre Drehbeginn.", "Referencia local sobre inicio de rodaje.", "Gemeentelijke context rond het begin van de opnamen.", "Kommunal markering av inspelningsstartens milstolpe."),
        href: officialSources.municipality.anniversary
      },
      {
        label: l("Ayuntamiento de Nerja · La Dorada memorial context", "Ayuntamiento · Amphoren", "Ayuntamiento de Nerja · La Dorada", "Ayuntamiento de Nerja · La Dorada", "Ayuntamiento de Nerja · La Dorada"),
        text: l("Municipal reference for the La Dorada replica and commemorative framing.", "Die Amphoren aus der Serie im Rathaus.", "Referencia municipal para el planteamiento de memoria.", "Gemeentelijke bron voor de hedendaagse herinneringsbenadering.", "Kommunal kontext för minnesramen kring La Dorada."),
        href: officialSources.municipality.anforas
      }
    ]
  },
  closing: {
    eyebrow: l("Where to go next", "Und danach", "Siguiente paso", "Vervolg", "Nästa kapitel"),
    title: l("Verano Azul left a map. This guide helps you walk it with context.", "Der Sommer aus dem Fernsehen, vor der Haustür", "Verano Azul dejó un mapa de lugares; aquí lo pasamos a una caminata real.", "Verano Azul leeft vooral in de manier waarop de plek nog steeds gelezen wordt.", "Verano Azul lever kvar som ett landskapslager, inte bara som en nostalgisk referens."),
    body: l("The show shaped Nerja’s memory as a filmed place. Start from the beach and work uphill into the old quarter to feel the continuity between screen and town.", "AMARA Playa liegt ein paar Hundert Meter vom Balcón, in Gehweite von Statue, Park und Strand. Den Spaziergang durch die Serie macht ihr von der Haustür aus.", "Tomad una ruta corta: costa primero, centro después, para que la película y la ciudad se lean como capas, no como anécdota.", "Begin aan de kust en loop dan naar het centrum: dan werk je van de televisievorm naar de stad in plaats van alleen plaatjes af te vinken.", "Börja vid stranden, gå in mot centrum och låt serien fungera som en tolkningsnyckel i stället för ett färdigt schema."),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa"),
    experienceLabel: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser")
  },
  footerHighlights: {
    experience: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser"),
    beaches: l("Nerja beaches", "Nerja Strände", "Playas de Nerja", "Nerja stranden", "Nerja stränder"),
    balance: l("Cultural anchors", "Balcón de Europa", "Puntos de referencia", "Culturele ankers", "Kulturella punkter")
  }
};
