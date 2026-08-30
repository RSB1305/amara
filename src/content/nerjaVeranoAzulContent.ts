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
  authorSlug: 'staying-with-us'
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
      title: 'Verano Azul in Nerja: Drehorte, TV-Phänomen & Erbe',
      description:
        'Die Serie, die Nerja deutschland- und spanienweit bekannt machte: Drehorte, wie sie die Stadt prägte und was heute im Ort noch als Erbe sichtbar ist.',
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
    eyebrow: l("Nerja · TV memory", "Nerja · TV-Erbe", "Nerja · Memoria audiovisual", "Nerja · TV-geheugen", "Nerja · TV-minne"),
    title: l("Verano Azul – the series that made Nerja known across Spain", "Verano Azul – die Serie, die Nerja in ganz Spanien bekannt machte", "Verano Azul: la serie que puso a Nerja en el mapa de España", "Verano Azul: de serie die Nerja overal in Spanje bekend maakte", "Verano Azul: serien som gjorde att Nerja blev känt i hela Spanien"),
    standfirst: l("The TV series Verano Azul is where many families met Nerja for the first time. It is also where the town acquired a shared visual memory that still shapes how locals speak about certain streets, the Balcón and the old coast.", "Verano Azul war für viele Familien die erste Berührung mit Nerja. Die Serie hat eine gemeinsame Erinnerungskarte hinterlassen, die heute genauso in der Stadt wie im Urlaubswortschatz wirkt.", "Para muchas familias, Verano Azul fue la primera vez que oyó hablar de Nerja. La serie también dejó una memoria visual compartida que sigue presente en la vida cotidiana del municipio.", "Voor veel gezinnen was Verano Azul de eerste kennismaking met Nerja. De serie liet een gedeeld beeld achter dat nog in de lokale beleving meeloopt.", "För många hushåll var Verano Azul första gången de hörde talas om Nerja. Serien har lämnat en delad visuell minneskarta som fortfarande påverkar platsberättelsen."),
    note: l("Editorial guide written from verified public sources and municipal information. It avoids fan speculation and travel booking details.", "Diese Übersicht basiert auf verifizierten öffentlichen Quellen. Spekulative Fan-Details und Buchungsinhalte sind bewusst ausgeklammert.", "La guía se basa en fuentes públicas verificables y evita la especulación de fandom y datos de alquileres o precios.", "Deze gids is gebaseerd op controleerbare publieke bronnen. Fan-schattingen en reserveringsdetails zijn bewust weggelaten.", "Guiden bygger på verifierade offentliga källor och exkluderar osäkra fanspecifikationer och bokningsdetaljer."),
    updated: l("Edited in August 2026", "Überarbeitet im August 2026", "Revisada en agosto de 2026", "Bewerkt in augustus 2026", "Genomgången i augusti 2026")
  },
  facts: [
    {
      label: l("TV format", "TV-Format", "Formato", "TV-opzet", "TV-format"),
      value: l("19 episodes · TVE serial, three-season structure in production records", "19 Episoden · TVE-Produktion mit langem Episodenlauf", "19 capítulos · producción serial de TVE", "19 afleveringen · TVE-serie op basis van publieke bronnotities", "19 avsnitt · TVE-serie enligt publicerad produktionsstruktur")
    },
    {
      label: l("Broadcast run", "Ausstrahlung", "Emisión", "Uitzending", "Sändning"),
      value: l("11 Oct 1981 – 14 Feb 1982", "11. Oktober 1981 – 14. Februar 1982", "11 octubre de 1981 – 14 febrero de 1982", "11 oktober 1981 – 14 februari 1982", "11 oktober 1981 – 14 februari 1982")
    },
    {
      label: l("Audience reach", "Publikumsreichweite", "Alcance", "Publiek", "Publikumsräckvidd"),
      value: l("Later episodes reported over 9 million viewers", "Später wurden bei späteren Episoden mehr als 9 Millionen Zuschauer genannt", "Episodios posteriores con más de 9 millones de espectadores", "In latere afleveringen door bronnen genoemd meer dan 9 miljoen kijkers", "Senare avsnitt angavs ha över 9 miljoner tittare")
    },
    {
      label: l("First day in Nerja", "Erster Drehtag", "Primer día de rodaje", "Eerste opnamedag", "Första inspelningsdag"),
      value: l("21 Aug 1979, Playa de Burriana", "21. August 1979, Playa de Burriana", "21 agosto de 1979, Playa de Burriana", "21 augustus 1979, Playa de Burriana", "21 augusti 1979, Playa de Burriana")
    },
    {
      label: l("Local legacy", "Lokales Erbe", "Huella local", "Lokaal erfgoed", "Lokal påverkan"),
      value: l("Parque Verano Azul, La Dorada replica and an AR route launched in 2023", "Parque Verano Azul, Replikat La Dorada und AR-Route seit 2023", "Parque Verano Azul, réplica de La Dorada y ruta de RA desde 2023", "Parque Verano Azul, La Dorada replica en AR-route sinds 2023", "Parque Verano Azul, La Dorada-replik och AR-rutt från 2023")
    }
  ],
  trailer: {
    label: l("Official Verano Azul trailer", "Offizieller Verano Azul Trailer", "Tráiler oficial de Verano Azul", "Officiële Verano Azul trailer", "Officiell trailer"),
    privacyNote: l("The trailer is hosted on YouTube. Loading it transmits your IP address to Google and may store data locally.", "Der Trailer liegt bei YouTube. Beim Laden werden IP-Daten an Google übertragen; das kann Datenspeicherung auf dem Gerät nach sich ziehen.", "El tráiler está alojado en YouTube. Al cargarlo se transmite la IP a Google, que también puede guardar datos locales.", "De trailer staat op YouTube. Bij het laden gaat jullie IP naar Google, wat ook gegevens op het apparaat kan achterlaten.", "Trailern ligger hos YouTube. Vid laddning skickas IP-adressen till Google, som också kan lagra data lokalt."),
    loadAction: l("Load trailer", "Trailer laden", "Cargar tráiler", "Trailer laden", "Ladda trailern")
  },
  sections: [
    {
      id: "tv-phenomenon",
      eyebrow: l("The TV phenomenon", "Das TV-Phänomen", "El fenómeno televisivo", "Het TV-fenomeen", "TV-fenomenet"),
      title: l("How this series became part of a whole generation’s memory", "Wie die Serie zu einem kulturellen Bezugspunkt wurde", "Cómo se convirtió en memoria de varias generaciones", "Waarom de serie een deel van meerdere generaties geheugen is geworden", "Hur serien blev en del av flera generationers gemensamma minne"),
      paragraphs: [
        l("Verano Azul is not remembered only for its story. Its broadcast impact is equally part of its legacy: 19 episodes, and a first phase that reached a broad Spanish audience when shown on TVE.", "Verano Azul ist nicht nur wegen der Handlung im Gedächtnis, sondern auch wegen seiner Reichweite im Fernsehen. 19 Episoden und eine bundesweit wahrgenommene Verbreitung prägten die Wahrnehmung.", "Verano Azul no se recuerda solo por su argumento: también dejó una huella masiva en la emisión pública y en la cultura compartida.", "Verano Azul is niet alleen bekend om het verhaal, maar ook door de reikwijdte van de uitzending.", "Verano Azul minns vi inte enbart för handlingen, utan också för den stora spridningen i tv-sammanhang."),
        l("According to production and broadcast records, the original run is placed between 11 October 1981 and 14 February 1982, with later episodes repeatedly cited as drawing very high audience numbers.", "In den öffentlich zugänglichen Produktions- und Ausstrahlungsangaben liegt der Sendezeitraum zwischen dem 11. Oktober 1981 und dem 14. Februar 1982; spätere Folgen wurden mit deutlich hohen Reichweiten genannt.", "La documentación pública sitúa el primer bloque entre el 11 de octubre de 1981 y el 14 de febrero de 1982, y recoge una audiencia muy alta en capítulos posteriores.", "Publieke registraties noemen een uitzending tussen 11 oktober 1981 en 14 februari 1982 en een zeer hoge kijkdichtheid in latere afleveringen.", "Enligt tillgänglig officiell information sträckte sig första publicerade utsändning till perioden 11 oktober 1981 till 14 februari 1982, med mycket hög publik i senare avsnitt."),
        l("That scale was never just a media fact; it changed how viewers recognized Nerja and its coastline. For many, the series became a visual map long before any guidebook did.", "Das machte Nerja für viele nicht nur zu einem Drehort, sondern zu einem visuellen Bezugspunkt vor jeder Reiseplanung.", "Ese alcance hizo que muchos viajeros reconocieran Nerja antes de visitarla, y que la ciudad adquiriera referencias comunes para orientarse en pantalla y en la vida real.", "Daardoor is Nerja voor veel kijkers eerder herkenbaar geworden als televisueel referentiepunt.", "Den effekten gjorde att många tittare redan hade en bild av Nerja innan de ens reste dit.")
      ]
    },
    {
      id: "why-nerja",
      eyebrow: l("Why Nerja", "Warum Nerja", "Por qué Nerja", "Waarom Nerja", "Varför Nerja"),
      title: l("Why the town was selected after scouting on the Mediterranean coast", "Warum Nerja nach Ortssichtung an der Küste ausgewählt wurde", "Por qué el equipo eligió la localidad tras el localizador costero", "Waarom de locatiekeuze bij de opnames uitviel", "Varför produktionen valde platsen efter kustrekognoscering"),
      paragraphs: [
        l("The production’s early recce process in the Mediterranean landscape looked for places that offered varied light, sea access and lived-in streets within short travel reach.", "Bei den Recherchen der Produktion wurden Orte gesucht, die zugleich Strandszenen und städtische Straßenszenen sinnvoll verbinden konnten.", "En los procesos de localización se buscó un entorno con vida urbana, luz costera y transiciones entre calle y mar.", "Tijdens scouting werd gezocht naar plekken met afwisseling van centrum, straten en open kust.", "I scouting fasen sökte teamet omväxlande miljöer: stadsliv, utsikt, kustljus och övergångar mellan nära och vida miljöer."),
        l("Nerja worked because production could move between intimate urban scenes and open shoreline settings with practical continuity. That flexibility made the town suitable for a long-format serial model.", "Nerja bot diese Mischung in guter Form: stadtnahe Strukturen, offene Küste und wiedererkennbare Perspektiven, die in Serienproduktion schnell planbar sind.", "Nerja permitió sostener ese doble registro de manera eficiente: escenas de pueblo y escenas de costa en continuidad narrativa.", "Nerja bood die combinatie op schaal, waardoor sequenties met dagelijks leven en kusten in één productieschema samengebracht konden worden.", "Nerja passade för att kombinera dessa delar i ett hållbart schema med korta logistiska avstånd."),
        l("The first planned shot in Nerja happened on 21 August 1979. From that date on, the location team relied heavily on Playa de Burriana and surrounding access patterns for scheduling and logistics.", "Der erste dokumentierte Drehtag in Nerja liegt auf den 21. August 1979 – und damit auf der Basis vieler Ortsentscheidungen in den Folgewochen.", "El primer día de rodaje citado en fuentes locales es el 21 de agosto de 1979, en la Playa de Burriana.", "Het eerste gedocumenteerde draaidagpunt is 21 augustus 1979 op Playa de Burriana.", "Det första dokumenterade inspelningsdatumet i kommunen är 21 augusti 1979 på Playa de Burriana.")
      ]
    },
    {
      id: "nerja-in-the-series",
      eyebrow: l("Nerja as part of the series", "Nerja als Ortsbild", "Nerja en la serie", "Nerja in de serie", "Nerja i serien"),
      title: l("Playa de Burriana, Balcón de Europa, Cala Chica and the urban streets", "Playa de Burriana, Balcón, Cala Chica und die Stadtstraßen", "Playa de Burriana, Balcón, Cala Chica y calles del centro", "Playa de Burriana, Balcón, Cala Chica en stadsstraten", "Playa de Burriana, Balcón, Cala Chica och stadens gator"),
      paragraphs: [
        l("Nerja’s map inside the series includes multiple anchors: Playa de Burriana, Balcón de Europa, Cala Chica and the Cueva de Nerja, plus residential and commercial streets in and around the centre.", "Zu den wichtigsten Ankerpunkten im Serienbild gehören Playa de Burriana, der Balcón de Europa, Cala Chica und die Cueva de Nerja sowie Straßen im Ortskern.", "El mapa serial incluye puntos claramente reconocibles: Playa de Burriana, Balcón de Europa, Cala Chica y la Cueva de Nerja, además de tramos urbanos del centro.", "De seriebeelden bevatten herkenbare ankerpunten als Playa de Burriana, Balcón de Europa, Cala Chica, de Cueva de Nerja en centrumwijken.", "Kända platser i serien innefattar Playa de Burriana, Balcón de Europa, Cala Chica och Cueva de Nerja samt flera urbana stråk i centrum."),
        l("The production also used the town’s transitions and road geography for movement and crowd continuity, not only its postcard scenes. This is one reason the series still feels geographically coherent despite the amount of screen time.", "Die Produktion nutzte häufig Übergänge zwischen diesen Punkten, sodass die Serie wie aus einem zusammenhängenden Ortssystem wirkt.", "La película aprovecha también los cambios de ritmo entre esos espacios, por eso el recorrido parece coherente y familiar pese a la distancia entre escenas.", "De opnames spelen met overgangen tussen die plekken, waardoor het beeld als één plekenset leesbaar blijft.", "Produktionen byggde på övergångar mellan dessa punkter, vilket gör att serien upplevs som ett sammanhängande geografiskt rum."),
        l("Not every shot was filmed in Nerja. Contemporary material also points to locations near Motril and Almuñécar being used for parts of the story-world, so the full series geography is larger than the municipality map.", "Nicht jedes Motiv wurde jedoch in Nerja gedreht; Motril und Almuñécar wurden ebenfalls als weitere Drehorte erwähnt.", "No todo se rodó en Nerja: el proceso también utilizó Motril y Almuñécar para otras secuencias.", "Niet alles werd in Nerja opgenomen; Motril en Almuñécar zijn in de productiecontext eveneens meegebruikt.", "Det var dock inte enbart Nerja som användes; Motril och Almuñécar förekommer också i inspelningsberättelsen.")
      ]
    },
    {
      id: "chanquete-la-dorada",
      eyebrow: l("Chanquete and La Dorada", "Chanquete und La Dorada", "Chanquete y La Dorada", "Chanquete en La Dorada", "Chanquete och La Dorada"),
      title: l("How iconography was built and how the replica is presented today", "Drehbildsprache und die heutige Repräsentation", "La iconicidad construida y la réplica contemporánea", "Hoe iconen zijn opgebouwd en hoe de replica nu staat", "Hur ikoniken skapades och hur repliken presenteras nu"),
      paragraphs: [
        l("Chanquete became the emotional centre of the show’s character world and still appears in guides, anecdotes and conversations among visitors.", "Chanquete ist für die Serie zu einer Ikone der Figurwelt geworden, die bis heute im Erzählstoff der Stadt auftaucht.", "Chanquete quedó como icono del universo de la serie y forma parte de cómo se habla hoy de la ruta.", "Chanquete is uitgegroeid tot het sterkste herkenningspunt in de verhalen rond de serie.", "Chanquete blev en symbol för serien och återkommer i lokala samtal om förankringen."),
        l("La Dorada in Nerja was built as a purpose-made screen construction, not a historic surviving vessel location from the original shooting period. That distinction matters when you visit.", "La Dorada in Nerja war ein eigens gebautes Film-Set für die Produktion, kein original erhaltener historischer Ursprung.", "La Dorada de Nerja fue un set funcional para la producción; su versión actual no es el barco original de rodaje conservado intacto.", "La Dorada in Nerja was destijds een functioneel opbouwset, niet het originele blijvend behouden vissersvaartuig.", "La Dorada i Nerja var ett planerat filmbygge för produktionen, inte en helt bevarad ursprungsbåt."),
        l("Today the set is represented as a carefully reconstructed location and interpretation site. It is an intentional memory marker, not the exact original boat from filming.", "Heute ist es als Rekonstruktion und Erinnerungszeichen präsent, nicht als originaler, vollständig erhaltener Drehschiff-Ort.", "Hoy se presenta como recreación y punto de memoria, con una intención de interpretación más que de autenticidad material total.", "Het huidige object is een reconstructie: bedoeld als herkennings- en herinneringspunt, niet als exacte originele constructie.", "Dagens version är en rekonstruktion och minnesmarkör, inte ett “orört” ursprungstillstånd.")
      ]
    },
    {
      id: "changed-nerja",
      eyebrow: l("How Verano Azul changed Nerja", "Wie Verano Azul Nerja veränderte", "Cómo cambió Nerja Verano Azul", "Hoe Verano Azul Nerja veranderde", "Hur Verano Azul förändrade Nerja"),
      title: l("Officially echoed claims: visibility, identity and national recognition", "Amtlich benannte Folgen: Sichtbarkeit, Identität, Bekanntheit", "Lo que repite el municipio: visibilidad y reconocimiento", "Wat de gemeente consequent noemt: zichtbaarheid en identiteit", "Det officiella arvet: synlighet och identitet"),
      paragraphs: [
        l("Municipal and local cultural pages repeatedly describe Verano Azul as a turning point for Nerja’s visibility far beyond Andalusia, with lasting effects on identity and local pride.", "Lokale und kommunale Quellen beschreiben Verano Azul als nachhaltigen Faktor für die Bekanntheit von Nerja in Spanien.", "Las fuentes municipales describen a Verano Azul como un referente de visibilidad nacional para Nerja y de identidad colectiva local.", "Lokale en gemeentelijke bronnen noemen Verano Azul als een blijvende reden dat Nerja nationaal sterker werd herkend.", "Kommunala och lokala källor beskriver serien som en faktor i Nerjas nationella synlighet och i lokal identitetsbildning."),
        l("The page-level impact is less “overnight tourism” and more a durable change in recognition: people now arrive with specific points of reference and a stronger sense that they are entering a place already known in popular memory.", "Nicht als kurzfristiger Werbeeffekt ist es zu sehen, sondern als langfristiger Identitätsanker mit bleibendem Wiedererkennungswert.", "No se plantea como “boom inmediato” aislado, sino como un cambio de reconocimiento duradero: el visitante llega con coordenadas previas.", "Het effect zit niet in een éénmalige piek, maar in een duurzaam referentiekader voor inwoners en bezoekers.", "Effekten är inte bara ett ögonblick av uppmärksamhet, utan ett fortsatt referenslager som påverkar hur besökare orienterar sig."),
        l("That is precisely why the series remains in local narratives and not only in entertainment nostalgia. It became a shared point of reference for how Nerja presents itself to guests.", "Das erklärt, warum die Serie in vielen lokalen Erzählungen weiterhin als Referenz für die Stadt aufscheint.", "Por eso la serie sigue viva en el relato de la localidad y no se limita a una efímera referencia nostálgica.", "Dat is waarom de serie nog lang mee kan bewegen in de lokale discours over de plek.", "Därför lever serien i samtalet om platsen som mer än en nostalgisk berättelse.")
      ]
    },
    {
      id: "verano-azul-today",
      eyebrow: l("Verano Azul in Nerja today", "Verano Azul in Nerja heute", "Verano Azul en Nerja hoy", "Verano Azul vandaag", "Verano Azul i Nerja idag"),
      title: l("From route and replica to everyday traces", "Routenpunkte und sichtbare Erinnerung", "Del pasado televisivo a la presencia diaria", "Van televisieregie tot tastbaar stadsdecor", "Från TV-minne till nuvarande platslager"),
      paragraphs: [
        l("Nerja today keeps Verano Azul visible through multiple nodes: Parque Verano Azul, the La Dorada reconstruction site, Antonio Mercero’s seafront avenue (officially named in tourism-facing materials), Calle Antonio Ferrandis, the Chanquete statue near Playa Calahonda and the Balcón de Europa.", "Heute sind zentrale Knotenpunkte: Parque Verano Azul, Replikat La Dorada, Antonio-Mercero-Promenade, Calle Antonio Ferrandis, die Chanquete-Statue bei Playa Calahonda und der Balcón de Europa.", "Hoy se activan hitos como el Parque Verano Azul, la réplica de La Dorada, el paseo Antonio Mercero, la Calle Antonio Ferrandis, la estatua de Chanquete en Playa Calahonda y el Balcón de Europa.", "Vandaag zijn er zichtbare knooppunten: Parque Verano Azul, La Dorada-replica, de Antonio Mercero-route, Calle Antonio Ferrandis, Chanquete-beeld bij Playa Calahonda en de Balcón de Europa.", "Idag är dessa punkter läsbara i offentlig miljö: Parque Verano Azul, La Dorada-repliken, Antonio Mercero-avenyn, Calle Antonio Ferrandis, Chanquete-statyn vid Playa Calahonda och Balcón de Europa."),
        l("The municipal AR route launched in 2023 adds context points and is now one practical way to read how the series is embedded in the city narrative today.", "Seit 2023 ergänzt eine AR-Route diesen Bestand um zusätzliche kontextsensitive Punkte.", "En 2023 se puso en marcha la ruta turística en RA para añadir contexto y recorrido a esa memoria.", "Sinds 2023 is er een gemeentelijke AR-route toegevoegd die extra context geeft bij de route.", "Sedan 2023 finns en officiell AR-rutt som lägger samman dessa punkter med ytterligare kontext."),
        l("These are not only tourism markers; they are also a visual language for guests and residents who continue to discuss the same places from different eras.", "Diese Orte funktionieren zugleich als Erinnerungsrahmen und als Orientierung für Gäste, die den Serienkontext vor Ort erleben wollen.", "No son solo elementos promocionales: también organizan la lectura del lugar para quienes llegan con la serie en la cabeza.", "Zo lopen herkenning en dagelijks gebruik in de stad naast elkaar in plaats van los van elkaar.", "Det innebär att platsen upplevs genom både minne och nutida rörelser.")
      ]
    },
    {
      id: "sources-and-method",
      eyebrow: l("Approach and limits", "Vorgehen", "Método editorial", "Redactionele werkwijze", "Redaktionell metod"),
      title: l("What is confirmed and where we keep precision", "Was sicher ist und wie wir präzise bleiben", "Qué afirmamos con firmeza y qué dejamos sin extrapolar", "Wat zeker is en waar we niet speculeren", "Vad som kan sägas med stöd och vad vi lämnar öppet"),
      paragraphs: [
        l("The core factual claims in this guide come from RTVE production/production-history reporting and official municipal pages.", "Die zentralen Tatsachen beruhen auf RTVE-Berichten sowie offiziellen kommunalen Mitteilungen.", "La base informativa viene de RTVE y de páginas oficiales municipales, no de rumores de rodaje.", "De kern komt uit RTVE en gemeentelijke publicaties: productie, opnamelocaties en culturele doorwerking.", "Hjärtat i materialet är RTVE-rapporter och kommunala notiser om produktion och efterverkningar."),
        l("Where municipal records describe identity or visibility effects, we keep wording general and avoid adding economic figures that are not part of the same source layer.", "Bei Wirkungs- und Identitätsaussagen bleibt die Sprache bewusst zurückhaltend, um nicht in unpräzise wirtschaftliche Zahlen zu gehen.", "En la influencia económica evitamos cifras operativas no explicitadas en las fuentes: aquí priorizamos identidad, visibilidad y contexto factual.", "We vermijden harde cijfers over economische impact tenzij deze aantoonbaar binnen dezelfde bronlaag staan.", "Där källan inte stödjer numeriska tolkningar undviker vi att lägga till ekonomiska eller överdrivna effektsiffror."),
        l("If you are planning a visit, the safest way to move between pages is to use official location and local pages rather than informal map copy from social media.", "Für konkrete Besuchsabläufe bleibt der lokale Kontext der offiziellen Seiten die zuverlässigere Grundlage.", "Para planificar una visita concreta, la ruta local y los canales oficiales siguen siendo la referencia más segura.", "Voor de praktische planning zijn officiële lokale pagina’s en de routepagina’s de meest betrouwbare leidraad.", "För den praktiska besöksplaneringen lutar vi alltid mot officiella Nerja-resurser och nuvarande lokala sidor.")
      ]
    }
  ],
  itinerary: {
    eyebrow: l("Following Verano Azul today", "Verano Azul heute erleben", "Verano Azul hoy", "Verano Azul vandaag volgen", "Följa Verano Azul i dag"),
    title: l("A short guest-facing itinerary", "Ein kurzer Spaziergang ohne Verwechslung", "Una ruta breve para ir haciéndola real", "Een eenvoudige wandeling met logische volgorde", "En kort rundvandring för gäster"),
    intro: l("If you want a practical walk that still follows the cultural map of the series, take this route by order and compare each setting with your local landmarks.", "Wenn ihr die kulturelle Route auf die Stadt übertragen wollt, ist diese Reihenfolge ein guter Startpunkt.", "Para vivir una lectura de la serie sin confundir ficción y agenda, seguí este orden práctico.", "Wie de serie-route als gast wilt lezen, kan dit in deze volgorde doen: vanaf zee naar het centrum.", "Om du vill kombinera serieminnet med en tydlig platsupplevelse, följ den här ordningen."),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Playa and coast", "Strandbereich", "Playa y costa", "Strand en kust", "Strand och kust"),
        text: l("Start at the main coastal context before moving into interior spots.", "Beginnt bei der Küste und klärt den Kontext vor den Innenstädten.", "Empieza por la escala de costa para situar la luz y el acceso.", "Begin met het kustbeeld dat de serievisuele context vormt.", "Börja vid kusten för att anpassa ljus och rytm.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("Use it as a skyline anchor and visual reference point.", "Nutze ihn als visuellen Anker für den Übergang.", "Úsalo como ancla visual y de orientación.", "Gebruik het als visuele overgang en oriënteringspunt.", "Använd denna punkt som första visuella fixpunkt.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Caves of Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja"),
        text: l("Cross from coast to inland landmarks and understand the wider location system.", "Verbinde Küste und Zentrum über den weiteren Kulturkorridor.", "Conecta hacia el eje interior de la zona más conocida por los huéspedes.", "Verbind vervolgens met een tweede cultureel anker in de stad.", "Gå vidare till ett annat av Nerjas bestående landmärke.")
      },
      {
        token: "nerja_experience_hub" as LinkToken,
        label: l("All Nerja experiences", "Alle Nerja-Erfahrungen", "Todas las experiencias de Nerja", "Alle Nerja-ervaringen", "Alla Nerja-upplevelser"),
        text: l("Return to the full experience hub for nearby recommendations.", "Zurück zum Erlebnisse-Hub für den nächsten Schritt.", "Vuelve al hub para planificar el resto de la estancia.", "Ga terug naar het hub-overzicht voor een complete dagindeling.", "Återgå till hubben för nästa steg i din plan.")
      }
    ]
  },
  related: {
    eyebrow: l("Continue reading", "Weiterlesen", "Continuar leyendo", "Verder lezen", "Läs vidare"),
    title: l("Nerja culture and places around Verano Azul", "Mehr kulturelle Orte rund um Verano Azul", "Más cultura y lugares de la ruta", "Meer culturele plekken rond Verano Azul", "Mer kring kultur och platser"),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Beaches in Nerja", "Strände in Nerja", "Playas de Nerja", "Stranden van Nerja", "Nerjas stränder"),
        text: l("How the beaches support both daily life and the series memory landscape.", "Wie die Küstenabschnitte in lokalen und kulturellen Erzählungen wirken.", "Cómo la costa influye en el tiempo y en el ritmo de la experiencia diaria.", "Hoe de kust in beeld en in de praktijk de dagstructuur bepaalt.", "Hur stranden formar både vardagsrytm och filmisk igenkänning.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("How Nerja’s visual emblem became one of the route’s main viewpoints.", "Der Aussichtspunkt, an dem der visuelle Kontext des Ortes sofort klar wird.", "El punto más fotogénico y de referencia visual de la ciudad.", "De visuele kern waar veel routekeuzes om draaien.", "Det visuella centrum där många av de ikoniska referenserna kliver fram.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Cave guide", "Cave guide", "Cueva de Nerja", "Grotengids", "Grotguiden"),
        text: l("One of the long-running landmarks that still shapes how guests move through Nerja.", "Eine der langfristig bekannten Landmarken im Stadtgefüge.", "Un referente duradero para recorrer el municipio con contexto histórico.", "Een vaste referentie in de bredere ruimtelijke beleving van de gemeente.", "Ett annat långvarigt orienteringsmärke för besökande i kommunen.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources checked", "Genutzte Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Official material used in this guide", "Amtliche Quellenbasis", "Material oficial consultado", "Officiële bronnenbasis", "Officiella källor som användes"),
    intro: l("Public announcements and municipal pages were used for production dates, shooting references and legacy claims. We keep direct interpretation points conservative where source detail is limited.", "RTVE-Material und kommunale Veröffentlichungen liefern die tragenden Fakten zu Produktion, Drehorten und Erinnerungsarbeit. Wo der Beleggrad geringer ist, bleibt die Aussage vorsichtig.", "La base de esta guía son recursos públicos de RTVE y del Ayuntamiento, con énfasis en datos verificables sobre rodaje, memoria local y continuidad de ruta.", "De basisinformatie komt uit RTVE-documentatie en gemeentelijke mededelingen, met nadruk op verifieerbare productiestaferelen en lokaal erfgoed.", "Materialet bygger på RTVE-publiceringar och kommunala kanaler med fokus på verifierbar produktion och kvarstående minnesarbete."),
    checked: l("Sources reviewed in August 2026.", "Quellen geprüft im August 2026.", "Fuentes revisadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("RTVE · Verano Azul archive page", "RTVE · Verano Azul-Übersicht", "RTVE · Ficha de Verano Azul", "RTVE · Verano Azul dossier", "RTVE · Verano Azul-översikt"),
        text: l("Main RTVE reference entry with public coverage.", "Öffentliche RTVE-Referenz zur Serie.", "Referencia pública de la serie.", "Publieke informatie over de serie.", "Offentlig serieöversikt med grundfakta."),
        href: officialSources.rtveStory
      },
      {
        label: l("RTVE · How Verano Azul was filmed", "RTVE · Produktionshinweise", "RTVE · Cómo se rodó", "RTVE · Productieproces", "RTVE · Inspelningsupplägg"),
        text: l("Production context and filming process notes.", "Kontext zu Arbeitsweise und Produktionsabläufen.", "Información de proceso de rodaje y contexto.", "Bron over het maakproces en de opnamen.", "Bakgrund till arbetsmetod och inspelning."),
        href: officialSources.rtveProduction
      },
      {
        label: l("Ayuntamiento de Nerja · Director profile", "Ayuntamiento · Mercero-Notiz", "Ayuntamiento de Nerja · Perfil", "Ayuntamiento de Nerja · Profiel", "Ayuntamiento de Nerja · Profil"),
        text: l("Municipal remembrance around Antonio Mercero and local context.", "Kommunaler Kontext zu Antonio Mercero.", "Texto municipal de referencia histórica.", "Gemeentelijke bron rond auteur en context.", "Kommunal kontext kring berättelse och arv."),
        href: officialSources.municipality.profile
      },
      {
        label: l("Ayuntamiento de Nerja · AR route launch", "Ayuntamiento · AR-Route", "Ayuntamiento de Nerja · Ruta de RA", "Ayuntamiento de Nerja · AR-route", "Ayuntamiento de Nerja · AR-rutt"),
        text: l("Municipal context for the 2023 route and its purpose.", "Kommunale Darstellung der neuen AR-Route.", "Publicación sobre la ruta turística con RA.", "Officiële informatie over de route met augmented reality.", "Information om kommunal AR-rutt och syfte."),
        href: officialSources.municipality.route
      },
      {
        label: l("Ayuntamiento de Nerja · 40th anniversary", "Ayuntamiento · 40-Jahres-Gedenken", "Ayuntamiento de Nerja · 40 aniversario", "Ayuntamiento de Nerja · 40-jarig", "Ayuntamiento de Nerja · 40-årsjubileum"),
        text: l("Municipal acknowledgement of the start of filming and memory milestones.", "Kommunale Erinnerung an den Drehbeginn.", "Referencia local sobre inicio de rodaje.", "Gemeentelijke context rond het begin van de opnamen.", "Kommunal markering av inspelningsstartens milstolpe."),
        href: officialSources.municipality.anniversary
      },
      {
        label: l("Ayuntamiento de Nerja · La Dorada memorial context", "Ayuntamiento · La-Dorada-Kontext", "Ayuntamiento de Nerja · La Dorada", "Ayuntamiento de Nerja · La Dorada", "Ayuntamiento de Nerja · La Dorada"),
        text: l("Municipal reference for the La Dorada replica and commemorative framing.", "Kommunaler Bezug zu Erinnerung und Rezeption.", "Referencia municipal para el planteamiento de memoria.", "Gemeentelijke bron voor de hedendaagse herinneringsbenadering.", "Kommunal kontext för minnesramen kring La Dorada."),
        href: officialSources.municipality.anforas
      }
    ]
  },
  closing: {
    eyebrow: l("Where to go next", "Der nächste Schritt", "Siguiente paso", "Vervolg", "Nästa kapitel"),
    title: l("Verano Azul left a map. This guide helps you walk it with context.", "Verano Azul hat eine Karte hinterlassen. Sie ist heute noch lesbar.", "Verano Azul dejó un mapa de lugares; aquí lo pasamos a una caminata real.", "Verano Azul leeft vooral in de manier waarop de plek nog steeds gelezen wordt.", "Verano Azul lever kvar som ett landskapslager, inte bara som en nostalgisk referens."),
    body: l("The show shaped Nerja’s memory as a filmed place. Start from the beach and work uphill into the old quarter to feel the continuity between screen and town.", "Nehmt die Küste als Einstieg, steigert euch ins Zentrum – und nehmt dann den Blick auf den Ort an, statt die Orte selbst als Kulisse abzuhaken.", "Tomad una ruta corta: costa primero, centro después, para que la película y la ciudad se lean como capas, no como anécdota.", "Begin aan de kust en loop dan naar het centrum: dan werk je van de televisievorm naar de stad in plaats van alleen plaatjes af te vinken.", "Börja vid stranden, gå in mot centrum och låt serien fungera som en tolkningsnyckel i stället för ett färdigt schema."),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa"),
    experienceLabel: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser")
  },
  footerHighlights: {
    experience: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser"),
    beaches: l("Nerja beaches", "Nerja Strände", "Playas de Nerja", "Nerja stranden", "Nerja stränder"),
    balance: l("Cultural anchors", "Kulturelle Eckpunkte", "Puntos de referencia", "Culturele ankers", "Kulturella punkter")
  }
};
