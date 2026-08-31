import {
  resolveLocale,
  type LocalizedText,
  type LocalizedTextList,
} from "../types/content";
import type { AmaraAuthoringSeo, AmaraLanguage } from "../types/seo";

const text = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string,
): LocalizedText => ({ en, de, es, nl, sv });

export const amaraExperienceSeo: AmaraAuthoringSeo = {
  version: "2026-08-31-amara-experience-v1.3",
  pageType: "C",
  entityKey: "amara-brand",
  languages: {
    en: {
      title: "AMARA Experience | A romantic direct-booking benefit",
      description:
        "Book your AMARA Romantic Hideaway directly and receive personal ideas for evenings for two, beaches, walks and shared experiences.",
      robots: "index, follow",
      canonical: "auto",
    },
    de: {
      title: "AMARA Experience | Romantischer Direktbucher-Vorteil",
      description:
        "Euer AMARA Romantic Hideaway direkt buchen und persönliche Ideen für Abende zu zweit, Strände, Wanderungen und gemeinsame Erlebnisse erhalten.",
      robots: "index, follow",
      canonical: "auto",
    },
    es: {
      title: "AMARA Experience | Ventaja romántica de reserva directa",
      description:
        "Reservad vuestro Romantic Hideaway directamente con AMARA y recibid ideas personales para noches juntos, playas, paseos y experiencias compartidas.",
      robots: "index, follow",
      canonical: "auto",
    },
    nl: {
      title: "AMARA Experience | Romantisch voordeel van direct boeken",
      description:
        "Boek jullie AMARA Romantic Hideaway rechtstreeks en ontvang persoonlijke ideeën voor avonden samen, stranden, wandelingen en gedeelde ervaringen.",
      robots: "index, follow",
      canonical: "auto",
    },
    sv: {
      title: "AMARA Experience | Romantisk fördel vid direktbokning",
      description:
        "Boka ert AMARA Romantic Hideaway direkt och få personliga tips om kvällar för två, stränder, promenader och gemensamma upplevelser.",
      robots: "index, follow",
      canonical: "auto",
    },
  },
};

const content = {
  eyebrow: text(
    "For your Romantic Hideaway",
    "Für eure romantische Auszeit",
    "Para vuestro Romantic Hideaway",
    "Voor jullie Romantic Hideaway",
    "För ert Romantic Hideaway",
  ),
  title: text(
    "More from every day together",
    "Mehr aus jedem gemeinsamen Tag",
    "Más de cada día juntos",
    "Meer uit elke dag samen",
    "Mer av varje dag tillsammans",
  ),
  directAnswer: text(
    "AMARA Experience extends your Romantic Hideaway beyond the apartment. It is an exclusive benefit for couples who book directly with us. Once your booking is confirmed, we open a private guide with personal recommendations for your time together: a restaurant suited to an evening for two, a walk with a view, a beach for a slow morning, something memorable to do together or a worthwhile trip to a nearby town. We select and check each suggestion for the AMARA destination where it applies, so you can spend less time searching and more time enjoying your stay together.",
    "Die AMARA Experience verlängert euren Romantic Hideaway über das Apartment hinaus. Sie ist ein exklusiver Vorteil für Paare, die direkt bei uns buchen. Sobald eure Buchung bestätigt ist, öffnen wir euch einen privaten Guide mit persönlichen Empfehlungen für eure gemeinsame Zeit: ein Restaurant für einen Abend zu zweit, eine Wanderung mit Aussicht, einen Strand für einen ruhigen Vormittag, ein besonderes gemeinsames Erlebnis oder einen lohnenden Ausflug in einen nahen Ort. Wir wählen und prüfen jede Empfehlung für das AMARA-Reiseziel, zu dem sie wirklich passt – damit ihr weniger suchen müsst und mehr gemeinsame Zeit aus eurem Aufenthalt macht.",
    "AMARA Experience prolonga vuestro Romantic Hideaway más allá del apartamento. Es una ventaja exclusiva para las parejas que reserváis directamente con nosotros. Cuando la reserva está confirmada, os abrimos una guía privada con recomendaciones personales para vuestro tiempo juntos: un restaurante para una velada en pareja, un paseo con buenas vistas, una playa para una mañana sin prisas, una experiencia especial que compartir o una excursión que merezca la pena a una localidad cercana. Seleccionamos y comprobamos cada propuesta para el destino AMARA al que realmente corresponde, para que dediquéis menos tiempo a buscar y más a disfrutar juntos.",
    "AMARA Experience laat jullie Romantic Hideaway ook buiten het appartement doorgaan. Het is een exclusief voordeel voor stellen die rechtstreeks bij ons boeken. Zodra jullie boeking is bevestigd, openen we een privégids met persoonlijke aanbevelingen voor jullie tijd samen: een restaurant voor een avond met z'n tweeën, een wandeling met uitzicht, een strand voor een rustige ochtend, een bijzondere ervaring om te delen of een uitstapje naar een nabijgelegen plaats dat de moeite waard is. We selecteren en controleren elke suggestie voor de AMARA-bestemming waar die echt bij past, zodat jullie minder hoeven te zoeken en meer uit jullie tijd samen halen.",
    "AMARA Experience låter ert Romantic Hideaway fortsätta även utanför lägenheten. Det är en exklusiv fördel för par som bokar direkt med oss. När bokningen är bekräftad öppnar vi en privat guide med personliga rekommendationer för er tid tillsammans: en restaurang för en kväll för två, en promenad med utsikt, en strand för en lugn förmiddag, en minnesvärd upplevelse att dela eller en utflykt till en närliggande ort som är värd tiden. Vi väljer ut och kontrollerar varje tips för den AMARA-destination där det verkligen passar, så att ni kan lägga mindre tid på att leta och mer på att njuta tillsammans.",
  ),
  heroProofLabel: text(
    "AMARA — Romantic Hideaways",
    "AMARA — Romantic Hideaways",
    "AMARA — Romantic Hideaways",
    "AMARA — Romantic Hideaways",
    "AMARA — Romantic Hideaways",
  ),
  heroProof: text(
    "Special places for shared time as a couple. Your private guide carries that promise into the days around your stay.",
    "Besondere Orte für gemeinsame Zeit als Paar. Euer privater Guide trägt dieses Versprechen in die Tage rund um euren Aufenthalt.",
    "Lugares especiales para compartir tiempo en pareja. Vuestra guía privada lleva esa promesa a los días de la estancia.",
    "Bijzondere plekken voor tijd samen als stel. Jullie privégids neemt die belofte mee in de dagen van het verblijf.",
    "Särskilda platser för gemensam tid som par. Er privata guide tar med det löftet in i dagarna under vistelsen.",
  ),
  imageAlts: {
    village: text(
      "A white village street in Frigiliana beneath a clear blue sky",
      "Eine weiße Gasse in Frigiliana unter klarem blauem Himmel",
      "Una calle blanca de Frigiliana bajo un cielo azul despejado",
      "Een witte dorpsstraat in Frigiliana onder een heldere blauwe lucht",
      "En vit bygata i Frigiliana under en klarblå himmel",
    ),
    evening: text(
      "Bougainvillea and white houses in Frigiliana in the evening light",
      "Bougainvillea und weiße Häuser in Frigiliana im Abendlicht",
      "Bugambilia y casas blancas de Frigiliana a la luz de la tarde",
      "Bougainville en witte huizen in Frigiliana in het avondlicht",
      "Bougainvillea och vita hus i Frigiliana i kvällsljus",
    ),
    coast: text(
      "The coastline and beaches of Nerja seen from above",
      "Die Küste und Strände von Nerja aus der Luft",
      "La costa y las playas de Nerja vistas desde el aire",
      "De kust en stranden van Nerja vanuit de lucht",
      "Nerjas kust och stränder sedda från ovan",
    ),
  },
  valueEyebrow: text(
    "Romantic ideas, personally selected",
    "Romantische Ideen, persönlich ausgewählt",
    "Ideas románticas, seleccionadas personalmente",
    "Romantische ideeën, persoonlijk geselecteerd",
    "Romantiska idéer, personligt utvalda",
  ),
  valueTitle: text(
    "Romantic time that feels like the two of you.",
    "Romantische Zeit, die sich nach euch anfühlt.",
    "Tiempo romántico que se sienta realmente vuestro.",
    "Romantische tijd die echt als die van jullie voelt.",
    "Romantisk tid som känns som just er.",
  ),
  valueIntro: text(
    "A long dinner, a beautiful walk, a quiet beach or something new to do together: we show you why an idea may suit the moment and add it only after checking it for that destination.",
    "Ein langes Abendessen, ein schöner Weg, ein ruhiger Strand oder etwas Neues, das ihr gemeinsam erlebt: Wir zeigen euch, warum eine Idee zum Moment passen könnte, und nehmen sie erst auf, wenn sie für das Reiseziel geprüft ist.",
    "Una cena larga, un paseo bonito, una playa tranquila o algo nuevo que hacer juntos: os contamos por qué una idea puede encajar con el momento y solo la añadimos cuando está comprobada para ese destino.",
    "Lang tafelen, een mooie wandeling, een rustig strand of samen iets nieuws doen: we vertellen waarom een idee bij het moment kan passen en voegen het pas toe als het voor die bestemming is gecontroleerd.",
    "En lång middag, en vacker promenad, en lugn strand eller något nytt att göra tillsammans: vi berättar varför en idé kan passa stunden och lägger bara till den när den har kontrollerats för destinationen.",
  ),
  benefits: [
    {
      id: "eat",
      number: "01",
      title: text(
        "An evening for two",
        "Ein Abend zu zweit",
        "Una noche para dos",
        "Een avond met z'n tweeën",
        "En kväll för två",
      ),
      copy: text(
        "Restaurants and local places for a long dinner, a special evening or an unhurried drink together.",
        "Restaurants und lokale Adressen für ein langes Abendessen, einen besonderen Abend oder einen entspannten Drink zu zweit.",
        "Restaurantes y lugares locales para una cena larga, una noche especial o una copa sin prisas juntos.",
        "Restaurants en lokale adressen voor lang tafelen, een bijzondere avond of samen rustig iets drinken.",
        "Restauranger och lokala ställen för en lång middag, en särskild kväll eller något gott att dricka tillsammans i lugn och ro.",
      ),
    },
    {
      id: "sea",
      number: "02",
      title: text(
        "A beach for your rhythm",
        "Ein Strand für euren Rhythmus",
        "Una playa a vuestro ritmo",
        "Een strand op jullie tempo",
        "En strand i er takt",
      ),
      copy: text(
        "Beaches for a quiet morning, a swim together or a coast day with lunch and nowhere else you need to be.",
        "Strände für einen ruhigen Vormittag, ein gemeinsames Bad oder einen Küstentag mit Mittagessen und ohne weiteren Termin.",
        "Playas para una mañana tranquila, un baño juntos o un día de costa con comida y sin tener que llegar a ningún otro sitio.",
        "Stranden voor een rustige ochtend, samen zwemmen of een dag aan de kust met lunch en verder helemaal niets op de planning.",
        "Stränder för en lugn förmiddag, ett bad tillsammans eller en dag vid kusten med lunch och ingen annan tid att passa.",
      ),
    },
    {
      id: "walk",
      number: "03",
      title: text(
        "Walks with a view",
        "Wege mit Aussicht",
        "Paseos con vistas",
        "Wandelingen met uitzicht",
        "Promenader med utsikt",
      ),
      copy: text(
        "Village lanes, nature routes and viewpoints for talking as you go and stopping when the view deserves more time.",
        "Gassen, Naturwege und Aussichtspunkte, auf denen ihr unterwegs miteinander redet und dort bleibt, wo der Blick mehr Zeit verdient.",
        "Calles de pueblo, rutas por la naturaleza y miradores para conversar por el camino y deteneros cuando las vistas merezcan más tiempo.",
        "Dorpsstraatjes, natuurroutes en uitzichtpunten om onderweg te praten en te blijven waar het uitzicht wat meer tijd verdient.",
        "Bygator, naturleder och utsiktsplatser där ni kan prata längs vägen och stanna när utsikten förtjänar mer tid.",
      ),
    },
    {
      id: "together",
      number: "04",
      title: text(
        "Do something together",
        "Gemeinsam etwas erleben",
        "Hacer algo juntos",
        "Samen iets beleven",
        "Uppleva något tillsammans",
      ),
      copy: text(
        "Shared experiences that give the day its own story, chosen for the destination and with the practical details you need.",
        "Gemeinsame Erlebnisse, die dem Tag eine eigene Geschichte geben – passend zum Reiseziel und mit den praktischen Details, die ihr dafür braucht.",
        "Experiencias compartidas que den al día su propia historia, elegidas para el destino y con los detalles prácticos que necesitáis.",
        "Gedeelde ervaringen die de dag een eigen verhaal geven, gekozen voor de bestemming en met de praktische informatie die jullie nodig hebben.",
        "Gemensamma upplevelser som ger dagen sin egen berättelse, utvalda för destinationen och med den praktiska information ni behöver.",
      ),
    },
    {
      id: "day-trip",
      number: "05",
      title: text(
        "A day trip worth taking",
        "Ein Ausflug, der sich lohnt",
        "Una excursión que merece la pena",
        "Een uitstapje dat de moeite waard is",
        "En utflykt värd tiden",
      ),
      copy: text(
        "Nearby villages, towns and day trips that reward the journey when you want to discover somewhere new as a couple.",
        "Nahe Dörfer, Städte und Tagesausflüge, die den Weg lohnen, wenn ihr als Paar gemeinsam etwas Neues entdecken möchtet.",
        "Pueblos, ciudades y excursiones cercanas que compensan el trayecto cuando os apetece descubrir juntos un lugar nuevo.",
        "Dorpen, steden en dagtrips in de buurt die de reis waard zijn als jullie samen een nieuwe plek willen ontdekken.",
        "Närliggande byar, städer och dagsutflykter som är värda resan när ni vill upptäcka en ny plats tillsammans.",
      ),
    },
  ],
  hostEyebrow: text(
    "Romantic, never generic",
    "Romantisch, niemals beliebig",
    "Romántico, nunca genérico",
    "Romantisch, nooit standaard",
    "Romantiskt, aldrig generiskt",
  ),
  hostTitle: text(
    "What feels romantic depends on the two of you.",
    "Was sich romantisch anfühlt, entscheidet ihr zu zweit.",
    "Lo que se siente romántico depende de vosotros dos.",
    "Wat romantisch voelt, bepalen jullie samen.",
    "Vad som känns romantiskt avgör ni tillsammans.",
  ),
  hostParagraphs: {
    en: [
      "Romance might be a long table in a small restaurant, an early walk before the village grows busy, a quiet swim or trying something new together. We do not turn that into a fixed checklist. We tell you why a place or experience may suit the moment, so you can decide whether it feels right for you.",
      "That is what Romantic Hideaways means to us: special places and considered recommendations that leave room for your own way of being together.",
    ],
    de: [
      "Romantik kann ein langer Abend in einem kleinen Restaurant sein, ein früher Spaziergang, bevor der Ort lebhafter wird, ein ruhiges Bad oder etwas Neues, das ihr gemeinsam ausprobiert. Daraus machen wir keine feste Checkliste. Wir sagen euch, warum ein Ort oder Erlebnis zum Moment passen könnte – und ihr entscheidet, ob es sich für euch richtig anfühlt.",
      "Genau das bedeutet Romantic Hideaways für uns: besondere Orte und durchdachte Empfehlungen, die Raum für eure eigene Art lassen, gemeinsam Zeit zu verbringen.",
    ],
    es: [
      "El romanticismo puede ser una sobremesa larga en un restaurante pequeño, un paseo temprano antes de que el pueblo cobre vida, un baño tranquilo o probar algo nuevo juntos. No lo convertimos en una lista fija. Os contamos por qué un lugar o una experiencia puede encajar con el momento, y vosotros decidís si os apetece de verdad.",
      "Eso significa Romantic Hideaways para nosotros: lugares especiales y recomendaciones cuidadas que dejan espacio para vuestra propia manera de estar juntos.",
    ],
    nl: [
      "Romantiek kan lang tafelen in een klein restaurant zijn, vroeg wandelen voordat het dorp levendiger wordt, rustig samen zwemmen of iets nieuws proberen. We maken daar geen vaste checklist van. We vertellen waarom een plek of ervaring bij het moment kan passen; jullie bepalen of het goed voelt.",
      "Dat is wat Romantic Hideaways voor ons betekent: bijzondere plekken en doordachte aanbevelingen die ruimte laten voor jullie eigen manier van samenzijn.",
    ],
    sv: [
      "Romantik kan vara en lång middag på en liten restaurang, en tidig promenad innan byn blir livligare, ett lugnt bad eller att prova något nytt tillsammans. Vi gör ingen fast checklista av det. Vi berättar varför en plats eller upplevelse kan passa stunden, och ni avgör om det känns rätt för er.",
      "Det är vad Romantic Hideaways betyder för oss: särskilda platser och genomtänkta rekommendationer som lämnar utrymme för ert eget sätt att vara tillsammans.",
    ],
  } satisfies LocalizedTextList,
  accessEyebrow: text(
    "Already booked directly?",
    "Schon direkt gebucht?",
    "¿Ya habéis reservado directamente?",
    "Al rechtstreeks geboekt?",
    "Har ni redan bokat direkt?",
  ),
  accessTitle: text(
    "Your private guide is ready here",
    "Euer privater Guide beginnt hier",
    "Vuestra guía privada empieza aquí",
    "Jullie privégids begint hier",
    "Er privata guide börjar här",
  ),
  accessIntro: text(
    "Use the first name and travel dates from your confirmation. We will check the booking securely and open the guide for your stay.",
    "Verwendet den Vornamen und die Reisedaten aus eurer Bestätigung. Wir gleichen die Buchung sicher ab und öffnen euren Guide für den Aufenthalt.",
    "Usad el nombre y las fechas de la confirmación. Comprobaremos la reserva de forma segura y abriremos la guía para vuestra estancia.",
    "Gebruik de voornaam en reisdata uit jullie bevestiging. We controleren de boeking veilig en openen de gids voor jullie verblijf.",
    "Använd förnamnet och resedatumen i bekräftelsen. Vi kontrollerar bokningen säkert och öppnar guiden för er vistelse.",
  ),
  formTitle: text(
    "Open your AMARA Experience",
    "Eure AMARA Experience öffnen",
    "Abrid vuestra AMARA Experience",
    "Open jullie AMARA Experience",
    "Öppna er AMARA Experience",
  ),
  formIntro: text(
    "Enter the details exactly as they appear in the booking confirmation.",
    "Gebt die Angaben genau wie in eurer Buchungsbestätigung ein.",
    "Introducid los datos tal como aparecen en la confirmación.",
    "Vul de gegevens precies in zoals ze in de boekingsbevestiging staan.",
    "Ange uppgifterna precis som de står i bokningsbekräftelsen.",
  ),
  firstNameLabel: text(
    "First name of booking holder",
    "Vorname der buchenden Person",
    "Nombre de la persona titular",
    "Voornaam van de hoofdboeker",
    "Bokningsinnehavarens förnamn",
  ),
  arrivalLabel: text(
    "Arrival date",
    "Anreisedatum",
    "Fecha de llegada",
    "Aankomstdatum",
    "Ankomstdatum",
  ),
  departureLabel: text(
    "Departure date",
    "Abreisedatum",
    "Fecha de salida",
    "Vertrekdatum",
    "Avresedatum",
  ),
  submitLabel: text(
    "Open AMARA Experience",
    "AMARA Experience öffnen",
    "Abrir AMARA Experience",
    "AMARA Experience openen",
    "Öppna AMARA Experience",
  ),
  pendingLabel: text(
    "Checking booking…",
    "Buchung wird geprüft…",
    "Comprobando la reserva…",
    "Boeking controleren…",
    "Kontrollerar bokningen…",
  ),
  deniedMessage: text(
    "We could not open the guide with these details. Check the booking confirmation or contact us if you need help.",
    "Mit diesen Angaben konnten wir den Guide nicht öffnen. Prüft bitte die Buchungsbestätigung oder meldet euch bei uns.",
    "No hemos podido abrir la guía con estos datos. Revisad la confirmación o contactadnos si necesitáis ayuda.",
    "Met deze gegevens konden we de gids niet openen. Controleer de bevestiging of neem contact met ons op.",
    "Vi kunde inte öppna guiden med de här uppgifterna. Kontrollera bekräftelsen eller kontakta oss om ni behöver hjälp.",
  ),
  unavailableMessage: text(
    "The private guide is not available right now. Please try again later.",
    "Der private Guide ist gerade nicht verfügbar. Bitte versucht es später noch einmal.",
    "La guía privada no está disponible ahora. Intentadlo de nuevo más tarde.",
    "De privégids is nu niet beschikbaar. Probeer het later opnieuw.",
    "Den privata guiden är inte tillgänglig just nu. Försök igen senare.",
  ),
  sessionEndedMessage: text(
    "Your guide session has ended. Enter the booking details again if the stay is still active.",
    "Eure Guide-Sitzung ist beendet. Gebt die Buchungsdaten erneut ein, falls der Aufenthalt noch aktiv ist.",
    "La sesión de la guía ha terminado. Volved a introducir los datos si la estancia sigue activa.",
    "Jullie gidssessie is beëindigd. Vul de boekingsgegevens opnieuw in als het verblijf nog actief is.",
    "Guidesessionen har avslutats. Ange bokningsuppgifterna igen om vistelsen fortfarande är aktiv.",
  ),
  privacyNote: text(
    "We use these details only to verify access against the confirmed booking and to create a necessary encrypted session cookie.",
    "Wir nutzen diese Angaben nur für den Abgleich mit der bestätigten Buchung und ein notwendiges verschlüsseltes Sitzungscookie.",
    "Usamos estos datos únicamente para verificar la reserva confirmada y crear una cookie de sesión cifrada necesaria.",
    "We gebruiken deze gegevens alleen om de bevestigde boeking te controleren en een noodzakelijke versleutelde sessiecookie te maken.",
    "Vi använder uppgifterna endast för att kontrollera den bekräftade bokningen och skapa en nödvändig krypterad sessionscookie.",
  ),
  closingTitle: text(
    "Not booked yet?",
    "Noch nicht gebucht?",
    "¿Todavía no habéis reservado?",
    "Nog niet geboekt?",
    "Har ni inte bokat ännu?",
  ),
  closingLead: text(
    "Book your Romantic Hideaway directly with AMARA. Once confirmed, your private AMARA Experience opens for the dates of your stay.",
    "Bucht euren Romantic Hideaway direkt bei AMARA. Nach der Bestätigung öffnet sich eure private AMARA Experience für die Reisedaten eures Aufenthalts.",
    "Reservad vuestro Romantic Hideaway directamente con AMARA. Una vez confirmado, vuestra AMARA Experience privada se abrirá para las fechas de la estancia.",
    "Boek jullie Romantic Hideaway rechtstreeks bij AMARA. Na bevestiging gaat jullie privé-AMARA Experience open voor de data van het verblijf.",
    "Boka ert Romantic Hideaway direkt med AMARA. Efter bekräftelsen öppnas er privata AMARA Experience för datumen för vistelsen.",
  ),
  availabilityLabel: text(
    "Check availability",
    "Verfügbarkeit prüfen",
    "Consultar disponibilidad",
    "Beschikbaarheid bekijken",
    "Kontrollera tillgänglighet",
  ),
};

export function getAmaraExperienceContent(lang: AmaraLanguage) {
  return resolveLocale(content, lang);
}
