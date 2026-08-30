import type { LocalizedText } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface NerjaBalconSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaBalconLocale {
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
  sections: NerjaBalconSection[];
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
  dateModified: '2026-08-14',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

const sharedSources = {
  municipality: 'https://www.nerja.es/',
  culture: 'https://cultura.nerja.es/'
};

export const nerjaBalconSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-balcon-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Balcón de Europa, Nerja: The Gun Battery Behind the View',
      description:
        'The most photographed terrace on this coast was built as a coastal gun battery. What to see, when to go, and which part of the royal story is only tradition.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Balcón de Europa in Nerja: Die Batterie hinter der Aussicht',
      description:
        'Die meistfotografierte Terrasse dieser Küste war eine Küstenbatterie: was ihr seht, wann ihr hingeht und welcher Teil der Königsgeschichte Überlieferung ist.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Balcón de Europa, Nerja: la batería detrás de las vistas',
      description:
        'El mirador más fotografiado de esta costa nació como batería de costa. Qué se ve, cuándo ir y qué parte de la historia del rey es solo tradición oral.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Balcón de Europa in Nerja: de batterij achter het uitzicht',
      description:
        'Het meest gefotografeerde terras van deze kust was een kustbatterij. Wat jullie zien, wanneer je gaat, en welk deel van het koningsverhaal overlevering is.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Balcón de Europa i Nerja: batteriet bakom utsikten',
      description:
        'Kustens mest fotograferade terrass byggdes som ett kustbatteri. Vad ni ser, när ni ska gå dit och vilken del av kungahistorien som bara är tradition.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaBalconContent = {
  navLabel: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
  breadcrumbLabel: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
  hero: {
    eyebrow: l("Nerja · Balcón de Europa", "Nerja · Balcón de Europa", "Nerja · Balcón de Europa", "Nerja · Balcón de Europa", "Nerja · Balcón de Europa"),
    title: l("The Balcón de Europa is no hidden gem — which is exactly why it works", "Der Balcón de Europa ist kein Geheimtipp — und genau deshalb funktioniert er", "El Balcón de Europa no es ningún secreto — y precisamente por eso funciona", "De Balcón de Europa is geen geheime tip — en juist daarom werkt hij", "Balcón de Europa är inget smultronställe — och just därför fungerar den"),
    standfirst: l("A viewing terrace on a rock spur at the end of the old town, with the open Mediterranean below it. Every guidebook names it and every visitor stands there, yet **it has not been ruined**. That has to do with what lies underneath it, and with what the people of Nerja still use it for.", "Eine Aussichtsterrasse auf einem Felsvorsprung am Ende der Altstadt, darunter das offene Mittelmeer. Jeder Reiseführer nennt ihn, jeder Besucher steht dort, und trotzdem **ist er nicht kaputtgegangen**. Das liegt an dem, was unter ihm liegt — und daran, wofür die Menschen in Nerja ihn bis heute benutzen.", "Un mirador sobre un espolón rocoso al final del casco antiguo, con el Mediterráneo abierto debajo. Toda guía lo menciona y todo visitante se asoma, y aun así **no se ha echado a perder**. Eso tiene que ver con lo que hay debajo y con el uso que los nerjeños siguen dándole.", "Een uitkijkterras op een rotspunt aan het einde van de oude stad, met daaronder de open Middellandse Zee. Elke reisgids noemt hem en elke bezoeker staat er, en toch **is hij niet kapotgegaan**. Dat komt door wat eronder ligt — en door waar de mensen van Nerja hem nog steeds voor gebruiken.", "En utsiktsterrass på en klippudde i slutet av gamla stan, med öppna Medelhavet nedanför. Varje guidebok nämner den och varje besökare står där, ändå **har den inte blivit förstörd**. Det beror på vad som ligger under den — och på vad Nerjaborna fortfarande använder den till."),
    note: l("A guide written by your hosts. Events and street life change; treat this as orientation rather than a programme.", "Ein Guide eurer Gastgeber. Veranstaltungen und Straßenleben wechseln; nehmt das als Orientierung, nicht als Programm.", "Una guía escrita por vuestros anfitriones. Los eventos y la vida en la calle cambian; tomadlo como orientación, no como programa.", "Een gids geschreven door jullie gastheren. Evenementen en straatleven wisselen; zie dit als oriëntatie, niet als programma.", "En guide skriven av era värdar. Evenemang och gatuliv växlar; se detta som orientering, inte som program."),
    updated: l("Last checked in August 2026", "Zuletzt geprüft im August 2026", "Revisado por última vez en agosto de 2026", "Laatst gecontroleerd in augustus 2026", "Senast kontrollerad i augusti 2026")
  },
  facts: [
    {
      label: l("From AMARA Playa", "Von AMARA Playa", "Desde AMARA Playa", "Vanaf AMARA Playa", "Från AMARA Playa"),
      value: l("About 500 metres on foot", "Rund 500 Meter zu Fuß", "Unos 500 metros a pie", "Ongeveer 500 meter lopen", "Ungefär 500 meter till fots")
    },
    {
      label: l("Access", "Zugang", "Acceso", "Toegang", "Tillträde"),
      value: l("Free, open at all hours", "Frei, zu jeder Tageszeit", "Libre, a cualquier hora", "Vrij, op elk uur", "Fritt, dygnet runt")
    },
    {
      label: l("Quietest hours", "Ruhigste Zeit", "Horas más tranquilas", "Rustigste uren", "Lugnaste tiderna"),
      value: l("Before 10am and after 10pm", "Vor 10 und nach 22 Uhr", "Antes de las 10 y después de las 22", "Voor 10 en na 22 uur", "Före 10 och efter 22")
    },
    {
      label: l("Still standing there", "Was noch dort steht", "Lo que sigue allí", "Wat er nog staat", "Det som står kvar"),
      value: l("Two cannons from the old battery", "Zwei Kanonen der alten Batterie", "Dos cañones de la antigua batería", "Twee kanonnen van de oude batterij", "Två kanoner från det gamla batteriet")
    }
  ],
  sections: [
    {
      id: "the-view",
      eyebrow: l("The first impression", "Der erste Eindruck", "La primera impresión", "De eerste indruk", "Första intrycket"),
      title: l("You walk through a lane and suddenly stand above the sea", "Man geht durch eine Gasse und steht plötzlich über dem Meer", "Cruzáis una calle estrecha y de pronto estáis sobre el mar", "Je loopt door een steegje en staat opeens boven zee", "Man går genom en gränd och står plötsligt ovanför havet"),
      paragraphs: [
        l("Nerja’s old town leads you there without announcing it. You follow narrow streets between whitewashed houses, and then the road simply stops. What remains is an avenue of palms on a rock, and the open Mediterranean below.", "Die Altstadt von Nerja führt euch dorthin, ohne es anzukündigen. Ihr lauft durch enge Straßen zwischen weiß getünchten Häusern, und dann hört der Weg einfach auf. Was bleibt, ist eine Palmenallee auf einem Felsen und darunter das offene Mittelmeer.", "El casco antiguo de Nerja os lleva hasta allí sin anunciarlo. Camináis entre casas encaladas por calles estrechas y, de repente, la calle se acaba. Lo que queda es un paseo de palmeras sobre la roca y, debajo, el Mediterráneo abierto.", "De oude stad van Nerja brengt jullie er naartoe zonder het aan te kondigen. Je loopt door smalle straten tussen witgekalkte huizen, en dan houdt de weg gewoon op. Wat overblijft is een palmenlaan op een rots, en daaronder de open Middellandse Zee.", "Nerjas gamla stan leder er dit utan att förvarna. Ni går genom smala gator mellan vitkalkade hus, och sedan tar vägen helt enkelt slut. Kvar finns en palmallé på en klippa och nedanför det öppna Medelhavet."),
        l("To the left the view runs east over Calahonda and the coves; to the right it opens west across Torrecilla and the beach. On a clear day the Sierra Almijara stands behind you. This is the point where it becomes obvious why Nerja was built exactly where it was built.", "Nach links geht der Blick über Calahonda und die Buchten nach Osten, nach rechts öffnet er sich über Torrecilla und den Strand nach Westen. Bei klarer Sicht steht die Sierra Almijara im Rücken. Es ist der Punkt, an dem sich von selbst erklärt, warum Nerja genau dort gebaut wurde, wo es steht.", "A la izquierda la vista se va hacia el este, sobre Calahonda y las calas; a la derecha se abre hacia el oeste, sobre Torrecilla y la playa. Con el día claro, la Sierra Almijara queda a vuestra espalda. Es el punto en el que se entiende solo por qué Nerja se levantó justo aquí.", "Naar links gaat het uitzicht oostwaarts over Calahonda en de baaitjes, naar rechts opent het zich westwaarts over Torrecilla en het strand. Bij helder weer staat de Sierra Almijara in jullie rug. Dit is het punt waarop vanzelf duidelijk wordt waarom Nerja precies hier gebouwd is.", "Åt vänster går blicken österut över Calahonda och vikarna, åt höger öppnar den sig västerut över Torrecilla och stranden. En klar dag står Sierra Almijara i ryggen. Det är punkten där det förklarar sig självt varför Nerja byggdes just här."),
        l("Honestly: you will not be alone. This is the most photographed spot on the coast east of Málaga, and between 11am and 7pm you feel it — street musicians, ice cream, tour groups. If you want quiet, the time of day matters more than anything else on this page.", "Ehrlich dazu: Ihr werdet nicht allein sein. Das ist der meistfotografierte Ort der Küste östlich von Málaga, und zwischen 11 und 19 Uhr merkt man das — Straßenmusik, Eis, Reisegruppen. Wer Ruhe möchte, für den zählt die Tageszeit mehr als alles andere auf dieser Seite.", "Con sinceridad: no estaréis solos. Es el lugar más fotografiado de esta costa al este de Málaga, y entre las 11 y las 19 se nota — música callejera, helados, grupos. Si buscáis tranquilidad, la hora del día importa más que cualquier otra cosa de esta página.", "Eerlijk erbij: jullie zullen niet alleen zijn. Dit is de meest gefotografeerde plek van de kust ten oosten van Málaga, en tussen 11 en 19 uur merk je dat — straatmuziek, ijs, reisgroepen. Wie rust zoekt, voor die telt het tijdstip meer dan al het andere op deze pagina.", "Ärligt talat: ni kommer inte att vara ensamma. Det här är den mest fotograferade platsen på kusten öster om Málaga, och mellan 11 och 19 märks det — gatumusik, glass, resegrupper. Den som vill ha lugn bryr sig mer om tiden på dygnet än om något annat på den här sidan.")
      ]
    },
    {
      id: "the-name",
      eyebrow: l("The name", "Der Name", "El nombre", "De naam", "Namnet"),
      title: l("The story about the king, and the part of it that is tradition", "Die Geschichte mit dem König — und was daran Überlieferung ist", "La historia del rey y la parte que es tradición oral", "Het verhaal over de koning, en het deel dat overlevering is", "Historien om kungen — och den del av den som är tradition"),
      paragraphs: [
        l("The story goes like this: after the severe earthquake that struck this region at the end of the nineteenth century, the King of Spain visited the damaged towns, stepped onto this rock spur and called it “el balcón de Europa”. The name stayed.", "Die Erzählung geht so: Nach dem schweren Erdbeben, das diese Region Ende des 19. Jahrhunderts traf, besuchte der spanische König die beschädigten Orte, trat auf diesen Felsvorsprung und nannte ihn „el balcón de Europa\". Der Name blieb.", "El relato dice así: tras el fuerte terremoto que sacudió esta región a finales del siglo XIX, el rey de España visitó los pueblos dañados, salió a este espolón rocoso y lo llamó «el balcón de Europa». El nombre se quedó.", "Het verhaal gaat zo: na de zware aardbeving die deze streek aan het eind van de negentiende eeuw trof, bezocht de Spaanse koning de beschadigde dorpen, stapte op deze rotspunt en noemde hem „el balcón de Europa\". De naam bleef.", "Berättelsen går så här: efter den svåra jordbävning som drabbade regionen i slutet av 1800-talet besökte Spaniens kung de skadade orterna, klev ut på den här klippudden och kallade den ”el balcón de Europa”. Namnet blev kvar."),
        l("That is how it is told in Nerja, and the statue at the entrance to the terrace shows exactly that scene. We pass the story on the way it is told — as tradition, not as a documented quotation. Anyone standing here should know they are standing on a name that comes from an anecdote.", "So wird es in Nerja erzählt, und die Statue am Zugang zur Terrasse zeigt genau diese Szene. Wir geben die Geschichte weiter, wie sie erzählt wird — als Überlieferung, nicht als belegtes Zitat. Wer hier steht, sollte wissen, dass er auf einem Namen steht, der aus einer Anekdote stammt.", "Así se cuenta en Nerja, y la estatua a la entrada del mirador representa exactamente esa escena. Nosotros transmitimos la historia como se transmite — como tradición, no como cita documentada. Quien se asoma aquí debería saber que está sobre un nombre nacido de una anécdota.", "Zo wordt het in Nerja verteld, en het standbeeld bij de ingang van het terras toont precies dat tafereel. Wij geven het verhaal door zoals het verteld wordt — als overlevering, niet als gedocumenteerd citaat. Wie hier staat, mag weten dat hij op een naam staat die uit een anekdote komt.", "Så berättas det i Nerja, och statyn vid ingången till terrassen visar exakt den scenen. Vi för historien vidare som den berättas — som tradition, inte som belagt citat. Den som står här bör veta att hen står på ett namn som kommer ur en anekdot."),
        l("It does not make the place any less beautiful. It does mean that the more interesting history is not the one on the statue, but the one under your feet.", "Schöner wird der Ort dadurch nicht weniger. Es heißt nur: Die interessantere Geschichte ist nicht die auf der Statue, sondern die unter euren Füßen.", "El lugar no pierde belleza por ello. Solo significa que la historia más interesante no es la de la estatua, sino la que tenéis bajo los pies.", "De plek wordt er niet minder mooi van. Het betekent alleen dat de interessantere geschiedenis niet die op het standbeeld is, maar die onder jullie voeten.", "Platsen blir inte mindre vacker av det. Det betyder bara att den intressantare historien inte är den på statyn, utan den under era fötter.")
      ]
    },
    {
      id: "the-fort",
      eyebrow: l("What lies underneath", "Was darunter liegt", "Lo que hay debajo", "Wat eronder ligt", "Det som ligger under"),
      title: l("Before the viewing terrace, this was a gun battery", "Vor der Aussichtsterrasse stand hier eine Kanonenbatterie", "Antes del mirador, aquí había una batería de cañones", "Vóór het uitkijkterras stond hier een kanonnenbatterij", "Före utsiktsterrassen stod här ett kanonbatteri"),
      paragraphs: [
        l("The rock spur was not built as a lookout. It carried a coastal fortification, the Batería de la Concepción, watching a stretch of coast that was defended by a chain of towers and batteries.", "Der Felsvorsprung war nicht als Aussichtspunkt gedacht. Er trug eine Küstenbefestigung, die Batería de la Concepción, und überwachte einen Küstenabschnitt, der durch eine Kette von Türmen und Batterien gesichert war.", "El espolón no se pensó como mirador. Sostenía una fortificación costera, la Batería de la Concepción, y vigilaba un tramo de costa defendido por una cadena de torres y baterías.", "De rotspunt was niet als uitzichtpunt bedoeld. Hij droeg een kustversterking, de Batería de la Concepción, en bewaakte een stuk kust dat door een keten van torens en batterijen verdedigd werd.", "Klippudden var inte tänkt som utsiktsplats. Den bar en kustbefästning, Batería de la Concepción, och bevakade en kuststräcka som försvarades av en kedja av torn och batterier."),
        l("Two cannons still stand on the terrace today. Most visitors photograph them without realising that they are the reason this square has the shape it has. The Balcón is round and juts forward because a battery needs a field of fire — not because someone was planning a panorama.", "Zwei Kanonen stehen heute noch auf der Terrasse. Die meisten Besucher fotografieren sie, ohne zu wissen, dass sie der Grund für die Form dieses Platzes sind. Der Balcón ist rund und ragt vor, weil eine Batterie Schussfeld braucht — nicht, weil jemand einen Rundblick geplant hätte.", "Dos cañones siguen hoy en el mirador. La mayoría de los visitantes los fotografía sin saber que son la razón de la forma de esta plaza. El Balcón es redondo y se adelanta porque una batería necesita campo de tiro, no porque alguien planeara una panorámica.", "Twee kanonnen staan er vandaag nog. De meeste bezoekers fotograferen ze zonder te weten dat zij de reden zijn voor de vorm van dit plein. De Balcón is rond en steekt vooruit omdat een batterij schootsveld nodig heeft — niet omdat iemand een panorama plande.", "Två kanoner står kvar på terrassen än i dag. De flesta besökare fotograferar dem utan att veta att de är skälet till torgets form. Balcón är rund och skjuter fram för att ett batteri behöver skottfält — inte för att någon planerade en panoramavy."),
        l("That is the part we like telling most: the best-known postcard view in this part of Andalusia is a side effect of a military installation.", "Das ist der Teil, den wir am liebsten erzählen: Der bekannteste Postkartenblick dieser Ecke Andalusiens ist der Nebeneffekt einer militärischen Anlage.", "Esa es la parte que más nos gusta contar: la vista de postal más conocida de esta esquina de Andalucía es el efecto secundario de una instalación militar.", "Dat is het stuk dat wij het liefst vertellen: het bekendste ansichtkaartuitzicht van deze hoek van Andalusië is het neveneffect van een militaire installatie.", "Det är den del vi helst berättar: det mest kända vykortsmotivet i det här hörnet av Andalusien är en bieffekt av en militär anläggning.")
      ]
    },
    {
      id: "when-to-go",
      eyebrow: l("The practical part", "Der praktische Teil", "La parte práctica", "Het praktische deel", "Det praktiska"),
      title: l("There are three completely different Balcóns in a single day", "Es gibt drei völlig verschiedene Balcóns an einem Tag", "En un mismo día hay tres Balcones completamente distintos", "Op één dag zijn er drie totaal verschillende Balcóns", "På en och samma dag finns tre helt olika Balcón"),
      paragraphs: [
        l("Early, before ten, the terrace belongs to the people who live here. Older men on the benches, dog walkers, someone with a coffee. The light comes in low from the east across the coves. If you want to see the place once without an audience, that is the hour.", "Früh, vor zehn, gehört die Terrasse den Menschen, die hier leben. Ältere Herren auf den Bänken, Hundebesitzer, jemand mit Kaffee. Das Licht kommt flach von Osten über die Buchten. Wenn ihr den Ort einmal ohne Publikum sehen wollt, ist das die Stunde.", "Temprano, antes de las diez, el mirador es de quienes viven aquí. Señores mayores en los bancos, gente paseando al perro, alguien con un café. La luz entra rasante desde el este sobre las calas. Si queréis verlo una vez sin público, esa es la hora.", "Vroeg, voor tienen, is het terras van de mensen die hier wonen. Oudere heren op de bankjes, hondenuitlaters, iemand met koffie. Het licht valt laag vanuit het oosten over de baaitjes. Willen jullie de plek één keer zonder publiek zien, dan is dat het uur.", "Tidigt, före tio, tillhör terrassen dem som bor här. Äldre herrar på bänkarna, hundägare, någon med kaffe. Ljuset kommer lågt från öster över vikarna. Vill ni se platsen en gång utan publik är det den timmen."),
        l("At midday it is busy. Coaches stop above, the musicians play, and the terrace becomes a thoroughfare. Perfectly fine to walk through, but not something to travel for.", "Mittags ist es voll. Reisebusse halten oben, die Musiker spielen, die Terrasse wird zum Durchgangsort. Zum Durchlaufen völlig in Ordnung, aber nichts, wofür man extra kommt.", "A mediodía está lleno. Los autocares paran arriba, suenan los músicos y el mirador se convierte en un sitio de paso. Está bien para cruzarlo, pero no es algo por lo que merezca la pena venir.", "’s Middags is het druk. Touringcars stoppen boven, de muzikanten spelen en het terras wordt een doorgang. Prima om doorheen te lopen, maar niets om voor te komen.", "Mitt på dagen är det fullt. Bussar stannar ovanför, musikerna spelar och terrassen blir en genomfartsplats. Helt okej att gå igenom, men inget att resa för."),
        l("After sunset the lamps come on, the day visitors are gone, and it turns back into somewhere you stop and stand. What you do not need is a ticket, a time slot or a reservation. What you do need is the willingness to come twice, because the first visit is almost always at the wrong hour.", "Nach Sonnenuntergang geht die Beleuchtung an, die Tagesgäste sind weg, und es wird wieder ein Ort zum Stehenbleiben. Was ihr nicht braucht: Ticket, Zeitfenster, Reservierung. Was ihr braucht: die Bereitschaft, zweimal hinzugehen — denn der erste Besuch ist fast immer der zur falschen Zeit.", "Después de la puesta de sol se encienden las luces, los visitantes de día se han ido y vuelve a ser un lugar donde uno se para. No hace falta entrada, ni hora reservada, ni reserva. Hace falta estar dispuestos a ir dos veces: la primera visita casi siempre cae a la hora equivocada.", "Na zonsondergang gaat de verlichting aan, de dagbezoekers zijn weg, en het wordt weer een plek om stil te staan. Wat jullie niet nodig hebben: kaartje, tijdslot, reservering. Wat wel: de bereidheid om twee keer te gaan — want het eerste bezoek valt bijna altijd op het verkeerde uur.", "Efter solnedgången tänds belysningen, dagsbesökarna är borta och det blir åter en plats att stanna upp på. Vad ni inte behöver: biljett, tidsfönster, bokning. Vad ni behöver: viljan att gå dit två gånger — det första besöket hamnar nästan alltid på fel timme.")
      ]
    },
    {
      id: "from-our-door",
      eyebrow: l("From our door", "Von unserer Tür", "Desde nuestra puerta", "Vanaf onze deur", "Från vår dörr"),
      title: l("Five hundred metres, and that is why you simply go again", "Fünfhundert Meter, und deshalb geht man einfach nochmal hin", "Quinientos metros, y por eso uno vuelve sin pensarlo", "Vijfhonderd meter, en daarom loop je er gewoon nog eens heen", "Femhundra meter, och därför går man dit en gång till"),
      paragraphs: [
        l("From AMARA Playa it is roughly 500 metres to the terrace — a distance you walk after dinner without planning it. That is the whole difference between having seen the Balcón and having been there.", "Von AMARA Playa sind es rund 500 Meter bis zur Terrasse — eine Strecke, die man abends nach dem Essen läuft, ohne sie zu planen. Genau darin liegt der Unterschied zwischen „den Balcón gesehen haben\" und „am Balcón gewesen sein\".", "Desde AMARA Playa hay unos 500 metros hasta el mirador — una distancia que se hace después de cenar sin planificarla. Ahí está la diferencia entre «haber visto el Balcón» y «haber estado en el Balcón».", "Vanaf AMARA Playa is het ongeveer 500 meter tot het terras — een afstand die je na het eten loopt zonder hem te plannen. Precies daarin zit het verschil tussen „de Balcón gezien hebben\" en „op de Balcón geweest zijn\".", "Från AMARA Playa är det ungefär 500 meter till terrassen — en sträcka man går efter maten utan att planera den. Just där ligger skillnaden mellan att ha sett Balcón och att ha varit på Balcón."),
        l("We were guests in this same apartment for years before we bought it. In that time the walk to the Balcón was never a sightseeing item; it was a habit.", "Wir waren jahrelang selbst Gäste in genau dieser Wohnung, bevor wir sie gekauft haben. In dieser Zeit war der Weg zum Balcón nie ein Programmpunkt, sondern eine Gewohnheit.", "Fuimos huéspedes de este mismo apartamento durante años antes de comprarlo. En ese tiempo, el paseo hasta el Balcón nunca fue un punto del programa: era una costumbre.", "Wij waren jarenlang zelf gast in dit appartement voordat we het kochten. In die tijd was de wandeling naar de Balcón nooit een programmapunt, maar een gewoonte.", "Vi var själva gäster i just den här lägenheten i flera år innan vi köpte den. Under den tiden var promenaden till Balcón aldrig en programpunkt, utan en vana."),
        l("If you stay in the centre you go three times. If you stay outside town you go once — and then you have seen the midday Balcón, which is the least interesting of the three.", "Wer im Zentrum wohnt, geht dreimal hin. Wer außerhalb wohnt, einmal — und hat dann den Mittagsbalcón gesehen, den langweiligsten der drei.", "Quien se aloja en el centro va tres veces. Quien se aloja fuera va una — y entonces ha visto el Balcón de mediodía, el menos interesante de los tres.", "Wie in het centrum verblijft, gaat drie keer. Wie buiten verblijft, één keer — en heeft dan de middagbalcón gezien, de minst interessante van de drie.", "Den som bor i centrum går dit tre gånger. Den som bor utanför går en gång — och har då sett middagsbalcón, den minst intressanta av de tre.")
      ]
    }
  ],
  related: {
    eyebrow: l("Keep reading", "Weiterlesen", "Seguir leyendo", "Verder lezen", "Läs vidare"),
    title: l("Where the evening goes from here", "Wie der Abend von hier aus weitergeht", "Por dónde sigue la noche desde aquí", "Hoe de avond vanaf hier verdergaat", "Vart kvällen tar vägen härifrån"),
    links: [
      {
        token: "nerja_nightlife_authority" as LinkToken,
        label: l("Evenings in Nerja", "Abends in Nerja", "Las noches en Nerja", "’s Avonds in Nerja", "Kvällar i Nerja"),
        text: l("Which quarter suits which kind of evening, once you leave the terrace.", "Welches Viertel zu welchem Abend passt, wenn ihr die Terrasse verlasst.", "Qué zona encaja con qué tipo de noche cuando dejáis el mirador.", "Welke buurt bij welke avond past zodra jullie het terras verlaten.", "Vilken stadsdel som passar vilken sorts kväll när ni lämnar terrassen.")
      },
      {
        token: "nerja_geography" as LinkToken,
        label: l("Location & orientation", "Lage & Orientierung", "Situación y orientación", "Ligging & oriëntatie", "Läge och orientering"),
        text: l("Why the beaches lie below the town rather than in front of it.", "Warum die Strände unter dem Ort liegen und nicht vor ihm.", "Por qué las playas quedan debajo del pueblo y no delante de él.", "Waarom de stranden ónder het dorp liggen en niet ervoor.", "Varför stränderna ligger under orten och inte framför den.")
      }
    ]
  },
  sources: {
    eyebrow: l("Behind this guide", "Belege hinter dem Guide", "Detrás de esta guía", "Achter deze gids", "Bakom guiden"),
    title: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    intro: l("The Balcón is public space with no operator, so there are no opening times or ticket details to cite. For historical context we stay with what local institutions publish, and the story around the visiting king is marked as tradition because it cannot be sourced as a quotation.", "Der Balcón ist öffentlicher Raum ohne Betreiber — es gibt weder Öffnungszeiten noch Ticketangaben zu belegen. Für die historische Einordnung bleiben wir bei dem, was örtliche Institutionen veröffentlichen, und die Geschichte um den König ist bewusst als Überlieferung gekennzeichnet, weil sie sich nicht als Zitat belegen lässt.", "El Balcón es espacio público sin gestor, así que no hay horarios ni entradas que documentar. Para el contexto histórico nos ceñimos a lo que publican las instituciones locales, y la historia del rey se señala como tradición oral porque no puede documentarse como cita.", "De Balcón is openbare ruimte zonder beheerder, dus er zijn geen openingstijden of tickets te documenteren. Voor de historische context houden we ons aan wat lokale instellingen publiceren, en het verhaal rond de koning is als overlevering gemarkeerd omdat het niet als citaat te onderbouwen is.", "Balcón är offentlig plats utan driftansvarig, så det finns varken öppettider eller biljetter att belägga. För den historiska inramningen håller vi oss till vad lokala institutioner publicerar, och historien om kungen är markerad som tradition eftersom den inte går att belägga som citat."),
    checked: l("Sources checked in August 2026.", "Quellen geprüft im August 2026.", "Fuentes consultadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("Ayuntamiento de Nerja", "Ayuntamiento de Nerja", "Ayuntamiento de Nerja", "Ayuntamiento de Nerja", "Ayuntamiento de Nerja"),
        text: l("The municipality, for current local information and announcements.", "Die Gemeinde, für aktuelle örtliche Informationen und Ankündigungen.", "El ayuntamiento, para información local actual y avisos.", "De gemeente, voor actuele lokale informatie en mededelingen.", "Kommunen, för aktuell lokal information och meddelanden."),
        href: sharedSources.municipality
      },
      {
        label: l("Cultura Nerja", "Cultura Nerja", "Cultura Nerja", "Cultura Nerja", "Cultura Nerja"),
        text: l("The municipal culture service, for heritage and the current programme.", "Das städtische Kulturamt, für Kulturerbe und aktuelles Programm.", "El servicio municipal de cultura, para patrimonio y programación.", "De gemeentelijke cultuurdienst, voor erfgoed en programmering.", "Kommunens kulturförvaltning, för kulturarv och aktuellt program."),
        href: sharedSources.culture
      }
    ]
  },
  closing: {
    eyebrow: l("Back to the stay", "Zurück zum Aufenthalt", "De vuelta a la estancia", "Terug naar het verblijf", "Tillbaka till vistelsen"),
    title: l("The Balcón is not a sight you tick off. It is a walk you get into the habit of.", "Der Balcón ist keine Sehenswürdigkeit, die man abhakt. Er ist ein Weg, den man sich angewöhnt.", "El Balcón no es un monumento que se tacha de la lista. Es un paseo que se convierte en costumbre.", "De Balcón is geen bezienswaardigheid die je afvinkt. Het is een wandeling die een gewoonte wordt.", "Balcón är ingen sevärdhet man bockar av. Det är en promenad man vänjer sig vid."),
    body: l("From our door it is five minutes. That is enough to see it empty in the morning and lit in the evening — and those are two different places.", "Von unserer Tür sind es fünf Minuten. Das reicht, um ihn morgens leer und abends beleuchtet zu sehen — und das sind zwei verschiedene Orte.", "Desde nuestra puerta son cinco minutos. Suficiente para verlo vacío por la mañana e iluminado por la noche — y son dos lugares distintos.", "Vanaf onze deur is het vijf minuten. Genoeg om hem ’s ochtends leeg en ’s avonds verlicht te zien — en dat zijn twee verschillende plekken.", "Från vår dörr tar det fem minuter. Det räcker för att se den tom på morgonen och upplyst på kvällen — och det är två olika platser."),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa"),
    locationLabel: l("Back to the Nerja location guide", "Zurück zum Nerja Lage-Guide", "Volver a la guía de Nerja", "Terug naar de Nerja-gids", "Tillbaka till Nerja-guiden")
  }
};
