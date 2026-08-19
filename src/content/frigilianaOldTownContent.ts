import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaOldTownExternalLinks = {
  officialMonuments: 'https://www.turismofrigiliana.es/es/monumentos.html',
  officialStreetMap: 'https://www.turismofrigiliana.es/es/callejero.html'
} as const;

export const frigilianaOldTownSeo: AmaraAuthoringSeo = {
  version: '2026-08-19-frigiliana-old-town-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image contract. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Frigiliana Old Town: What to See & the Story Behind It',
      description:
        'A walking guide to Frigiliana’s protected old town: the twelve ceramic panels, El Ingenio, Calle Real and the Barribarto — and the 1569 history that shaped them.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigilianas Altstadt: Sehenswürdigkeiten & Geschichte',
      description:
        'Ein Spaziergang durch Frigilianas denkmalgeschützte Altstadt: die zwölf Keramiktafeln, El Ingenio, Calle Real und das Barribarto — und die Geschichte von 1569 dahinter.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Casco antiguo de Frigiliana: qué ver y su historia',
      description:
        'Un paseo por el casco antiguo protegido de Frigiliana: los doce paneles de cerámica, El Ingenio, la calle Real y el Barribarto, y la historia de 1569 que los explica.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Oude kern van Frigiliana: bezienswaardigheden & geschiedenis',
      description:
        'Een wandelgids door de beschermde oude kern van Frigiliana: de twaalf keramische panelen, El Ingenio, Calle Real en het Barribarto — en de geschiedenis van 1569 erachter.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigilianas gamla stan: sevärdheter och historia',
      description:
        'En vandringsguide genom Frigilianas skyddade gamla stan: de tolv keramikpanelerna, El Ingenio, Calle Real och Barribarto — och historien från 1569 bakom dem.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type guide (B). Historical and legal facts are shared across all
 * five markets; only phrasing is localized. Claim boundaries follow the
 * Frigiliana research synthesis of August 2026: the decisive battle at the
 * Penon is dated 11 June 1569, El Ingenio is an early-18th-century industrial
 * build, and the Three Cultures narrative is presented as a modern cultural
 * institution rather than documented medieval demography.
 *
 * No production superlative is claimed for miel de caña. The "only factory in
 * Europe" line is factually wrong, and the narrower mainland-Europe version is
 * only institutionally claimed, not independently verified.
 */
export const frigilianaOldTownCopy = {
  footerHighlights: {
    oldTown: l(
      'Old town & history',
      'Altstadt & Geschichte',
      'Casco antiguo e historia',
      'Oude kern & geschiedenis',
      'Gamla stan & historia'
    ),
    festivals: l(
      'Festivals & traditions',
      'Feste & Traditionen',
      'Fiestas y tradiciones',
      'Feesten & tradities',
      'Fester & traditioner'
    ),
    market: l(
      'Thursday market',
      'Donnerstagsmarkt',
      'Mercado del jueves',
      'Donderdagmarkt',
      'Torsdagsmarknaden'
    )
  },
  hero: {
    kicker: l(
      'Old town · Explore',
      'Altstadt · Entdecken',
      'Casco antiguo · Descubrir',
      'Oude kern · Ontdekken',
      'Gamla stan · Upptäck'
    ),
    title: l(
      'Frigiliana’s old town: what to see, and why it still looks like this',
      'Frigilianas Altstadt: was ihr seht — und warum es bis heute so aussieht',
      'El casco antiguo de Frigiliana: qué ver y por qué sigue teniendo este aspecto',
      'De oude kern van Frigiliana: wat je ziet en waarom het er nog zo uitziet',
      'Frigilianas gamla stan: vad ni ser – och varför den ser ut så än i dag'
    ),
    paragraphs: [
      l(
        'Frigiliana’s historic centre is not simply a photogenic village. Since 2014 it has been legally protected as a Bien de Interés Cultural in the Conjunto Histórico category, which covers the street layout, the plot structure and the buildings together rather than any single monument.',
        'Frigilianas historischer Ortskern ist nicht einfach ein fotogenes Dorf. Seit 2014 steht er als Bien de Interés Cultural in der Kategorie Conjunto Histórico unter Denkmalschutz — geschützt sind Wegenetz, Parzellenstruktur und Bebauung im Zusammenhang, nicht ein einzelnes Bauwerk.',
        'El casco histórico de Frigiliana no es solo un pueblo fotogénico. Desde 2014 está protegido como Bien de Interés Cultural en la tipología Conjunto Histórico, lo que ampara el trazado, el parcelario y la edificación en conjunto, no un monumento aislado.',
        'De historische kern van Frigiliana is niet zomaar een fotogeniek dorp. Sinds 2014 is hij beschermd als Bien de Interés Cultural in de categorie Conjunto Histórico: het stratenpatroon, de perceelstructuur en de bebouwing samen, niet één afzonderlijk monument.',
        'Frigilianas historiska bykärna är inte bara en fotogenisk by. Sedan 2014 är den skyddad som Bien de Interés Cultural i kategorin Conjunto Histórico, vilket omfattar gatunätet, tomtstrukturen och bebyggelsen som helhet – inte ett enskilt monument.'
      ),
      l(
        'This guide is a walking companion rather than a history lecture. It follows what you actually pass on a morning through the village: the ceramic panels, the old cane-syrup works, the church square, Calle Real and the steep lanes of the Barribarto above it.',
        'Diese Seite ist ein Begleiter zum Gehen, kein Geschichtsvortrag. Sie folgt dem, woran ihr an einem Vormittag im Dorf tatsächlich vorbeikommt: den Keramiktafeln, der alten Zuckerrohrsirup-Fabrik, dem Kirchplatz, der Calle Real und den steilen Gassen des Barribarto darüber.',
        'Esta guía acompaña el paseo, no da una lección de historia. Sigue lo que realmente se encuentra en una mañana por el pueblo: los paneles de cerámica, la antigua fábrica de miel de caña, la plaza de la iglesia, la calle Real y las cuestas del Barribarto por encima.',
        'Deze gids loopt met je mee en is geen geschiedenisles. Hij volgt wat je op een ochtend door het dorp echt tegenkomt: de keramische panelen, de oude rietstroopfabriek, het kerkplein, Calle Real en de steile straatjes van het Barribarto erboven.',
        'Den här guiden följer med på promenaden snarare än håller en historielektion. Den utgår från det ni faktiskt passerar under en förmiddag i byn: keramikpanelerna, det gamla sockerrörsbruket, kyrktorget, Calle Real och Barribartos branta gränder ovanför.'
      ),
      l(
        'Where the popular version of the story and the documented one differ, we say so. That mostly makes the village more interesting, not less.',
        'Wo die populäre und die belegte Version der Geschichte auseinandergehen, sagen wir es. Meist wird das Dorf dadurch interessanter, nicht weniger interessant.',
        'Cuando la versión popular y la documentada no coinciden, lo decimos. Casi siempre eso hace el pueblo más interesante, no menos.',
        'Waar de populaire en de gedocumenteerde versie van het verhaal uiteenlopen, zeggen we dat. Meestal wordt het dorp daar interessanter van, niet minder.',
        'Där den populära och den dokumenterade versionen av historien skiljer sig åt säger vi det. Oftast blir byn mer intressant av det, inte mindre.'
      )
    ],
    imageAlt: l(
      'Whitewashed lanes and stepped streets in Frigiliana’s historic centre',
      'Weiße Gassen und Treppenwege im historischen Zentrum von Frigiliana',
      'Calles encaladas y escalonadas del casco histórico de Frigiliana',
      'Witte straatjes en trappen in de historische kern van Frigiliana',
      'Vitkalkade gränder och trappgator i Frigilianas historiska kärna'
    )
  },
  sights: {
    title: l(
      'What to look for on a walk through the centre',
      'Worauf ihr beim Gang durch den Ortskern achten könnt',
      'Qué buscar en un paseo por el centro',
      'Waar je op kunt letten tijdens een wandeling door het centrum',
      'Vad ni kan hålla utkik efter på en runda genom bykärnan'
    ),
    intro: l(
      'None of this needs a ticket or a fixed route. An unhurried hour covers most of it, and the village rewards walking the same lane twice at different times of day.',
      'Nichts davon braucht ein Ticket oder eine feste Route. Eine geruhsame Stunde deckt das meiste ab — und es lohnt sich, dieselbe Gasse zu unterschiedlichen Tageszeiten zweimal zu gehen.',
      'Nada de esto necesita entrada ni un itinerario fijo. Una hora sin prisas cubre casi todo, y merece la pena recorrer la misma calle dos veces a horas distintas.',
      'Hiervoor is geen kaartje of vaste route nodig. Een rustig uur dekt het meeste, en het loont om dezelfde straat twee keer op verschillende momenten te lopen.',
      'Inget av detta kräver biljett eller en bestämd rutt. En lugn timme räcker till det mesta, och det lönar sig att gå samma gränd två gånger vid olika tider på dygnet.'
    ),
    items: [
      {
        title: l(
          'The twelve ceramic panels',
          'Die zwölf Keramiktafeln',
          'Los doce paneles de cerámica',
          'De twaalf keramische panelen',
          'De tolv keramikpanelerna'
        ),
        subline: l(
          'A self-guided walk through 1569',
          'Ein Rundgang auf eigene Faust durch 1569',
          'Un recorrido libre por 1569',
          'Een wandeling op eigen houtje door 1569',
          'En vandring på egen hand genom 1569'
        ),
        text: l(
          'Hand-painted panels set into the walls of the upper quarter tell the story of the Morisco revolt in sequence. Following all twelve is the single best way to understand what happened here, and it takes about forty-five minutes at a walking pace. The lanes are cobbled and stepped, so wear shoes with grip.',
          'In die Mauern des oberen Viertels eingelassene, handbemalte Tafeln erzählen den Morisken-Aufstand der Reihe nach. Alle zwölf abzugehen ist der beste Weg, um zu verstehen, was hier geschah — im Spaziertempo etwa 45 Minuten. Die Gassen sind gepflastert und mit Stufen versehen; tragt Schuhe mit Profil.',
          'Paneles pintados a mano, encastrados en los muros de la parte alta, cuentan la rebelión morisca en orden. Seguir los doce es la mejor forma de entender lo que ocurrió aquí, y lleva unos cuarenta y cinco minutos a paso de paseo. Las calles son empedradas y con escalones: llevad calzado con buen agarre.',
          'Handbeschilderde panelen in de muren van de hoger gelegen wijk vertellen de opstand van de Morisken op volgorde. Alle twaalf volgen is de beste manier om te begrijpen wat hier gebeurde, en duurt ongeveer drie kwartier in wandeltempo. De straatjes zijn geplaveid en hebben treden; draag schoenen met grip.',
          'Handmålade paneler infällda i murarna i den övre stadsdelen berättar moriskernas uppror i ordning. Att följa alla tolv är det bästa sättet att förstå vad som hände här, och tar ungefär fyrtiofem minuter i promenadtakt. Gränderna är stenlagda och har trappsteg – ta skor med bra grepp.'
        )
      },
      {
        title: l(
          'El Ingenio',
          'El Ingenio',
          'El Ingenio',
          'El Ingenio',
          'El Ingenio'
        ),
        subline: l(
          'A working factory, not a museum',
          'Eine arbeitende Fabrik, kein Museum',
          'Una fábrica en activo, no un museo',
          'Een werkende fabriek, geen museum',
          'En fabrik i drift, inte ett museum'
        ),
        text: l(
          'The large building at the lower end of the village is often described as a count’s palace. Archive research published in 2023 places it more precisely: it was built around 1725 as an industrial sugar works and was fully operating by 1728. Today it houses the Nuestra Señora del Carmen factory, where miel de caña is still made — a concentrated cane syrup with a long local production tradition. It is a production site, so do not count on going in.',
          'Das große Gebäude am unteren Ortsrand wird oft als Grafenpalast beschrieben. Eine 2023 veröffentlichte Archivforschung ordnet es genauer ein: Es entstand um 1725 als industrielles Zuckerwerk und war 1728 voll in Betrieb. Heute arbeitet dort die Fabrik Nuestra Señora del Carmen, in der bis heute Miel de Caña hergestellt wird — ein konzentrierter Zuckerrohrsirup mit langer lokaler Produktionstradition. Es ist eine Produktionsstätte — rechnet nicht mit einer Besichtigung.',
          'El gran edificio de la parte baja suele describirse como un palacio condal. Una investigación de archivo publicada en 2023 lo sitúa con más precisión: se levantó hacia 1725 como ingenio azucarero industrial y estaba plenamente operativo en 1728. Hoy alberga la fábrica Nuestra Señora del Carmen, donde se sigue elaborando miel de caña: un jarabe concentrado de caña de azúcar con una larga tradición productiva local. Es un espacio de producción: no deis por hecho que se puede visitar.',
          'Het grote gebouw aan de onderkant van het dorp wordt vaak een grafelijk paleis genoemd. Archiefonderzoek uit 2023 plaatst het preciezer: het werd rond 1725 gebouwd als industriële suikerfabriek en draaide in 1728 volledig. Vandaag huist er de fabriek Nuestra Señora del Carmen, waar tot op vandaag miel de caña wordt gemaakt — een geconcentreerde rietsuikersiroop met een lange lokale productietraditie. Het is een productielocatie; reken niet op een bezoek.',
          'Den stora byggnaden i byns nedre del beskrivs ofta som ett grevligt palats. Arkivforskning publicerad 2023 placerar den mer exakt: den uppfördes omkring 1725 som ett industriellt sockerbruk och var i full drift 1728. I dag rymmer den fabriken Nuestra Señora del Carmen, där miel de caña fortfarande tillverkas – en koncentrerad sockerrörssirap med lång lokal produktionstradition. Det är en produktionsplats – räkna inte med att komma in.'
        )
      },
      {
        title: l(
          'Casa del Apero',
          'Casa del Apero',
          'Casa del Apero',
          'Casa del Apero',
          'Casa del Apero'
        ),
        subline: l(
          'Farm store turned cultural centre',
          'Vom Wirtschaftshof zum Kulturzentrum',
          'De almacén agrícola a centro cultural',
          'Van boerenopslag tot cultureel centrum',
          'Från lantbruksmagasin till kulturcentrum'
        ),
        text: l(
          'Probably 17th century and originally built for farm tools and storage, the Casa del Apero now holds the cultural centre, the municipal library and archive, and the tourist office. It is the most practical stop on this list: if you want current opening times, festival programmes or a village map, this is where to ask.',
          'Wohl aus dem 17. Jahrhundert und ursprünglich für Geräte und Lagerung gebaut, beherbergt die Casa del Apero heute das Kulturzentrum, Bibliothek und Gemeindearchiv sowie das Tourismusbüro. Es ist der praktischste Halt dieser Liste: aktuelle Öffnungszeiten, Festprogramme oder ein Ortsplan gibt es hier.',
          'Probablemente del siglo XVII y construida en origen para aperos y almacenaje, la Casa del Apero acoge hoy el centro cultural, la biblioteca y el archivo municipal, y la oficina de turismo. Es la parada más práctica de esta lista: horarios actualizados, programas de fiestas o un plano del pueblo se piden aquí.',
          'Waarschijnlijk 17e-eeuws en oorspronkelijk gebouwd voor landbouwgereedschap en opslag, herbergt de Casa del Apero nu het cultureel centrum, de bibliotheek en het gemeentearchief, en het toeristenbureau. Dit is de praktischste stop van deze lijst: actuele openingstijden, feestprogramma’s of een plattegrond vraag je hier.',
          'Sannolikt från 1600-talet och ursprungligen byggd för redskap och förvaring rymmer Casa del Apero i dag kulturcentrum, bibliotek och kommunarkiv samt turistbyrån. Det är listans mest praktiska stopp: aktuella öppettider, festprogram eller en bykarta får ni här.'
        )
      },
      {
        title: l(
          'Iglesia de San Antonio de Padua',
          'Iglesia de San Antonio de Padua',
          'Iglesia de San Antonio de Padua',
          'Iglesia de San Antonio de Padua',
          'Iglesia de San Antonio de Padua'
        ),
        subline: l(
          'Plain Baroque, late 17th century',
          'Schlichter Barock, spätes 17. Jahrhundert',
          'Barroco sobrio, finales del siglo XVII',
          'Sobere barok, eind 17e eeuw',
          'Enkel barock, sent 1600-tal'
        ),
        text: l(
          'Frequently called Renaissance in visitor material, the church is classified in the heritage decree as a plain Baroque building from the last third of the 17th century. Whitewashed brick pilasters, a dome with a lantern and a timber roof structure — modest by cathedral standards, and the natural centre of village life during the June feria.',
          'In Besuchermaterial oft als Renaissance bezeichnet, wird die Kirche im Denkmalschutzdekret als schlichter Barockbau aus dem letzten Drittel des 17. Jahrhunderts geführt. Gekalkte Ziegelpilaster, eine Kuppel mit Laterne und eine hölzerne Dachkonstruktion — nach Kathedralenmaßstab bescheiden und im Juni während der Feria der natürliche Mittelpunkt des Dorflebens.',
          'A menudo descrita como renacentista en los folletos, la iglesia figura en el decreto de protección como un edificio barroco sobrio del último tercio del siglo XVII. Pilastras de ladrillo encaladas, cúpula con linterna y armadura de madera: modesta para lo que es una catedral, y el centro natural de la vida del pueblo durante la feria de junio.',
          'In bezoekersmateriaal vaak renaissance genoemd, wordt de kerk in het beschermingsbesluit aangeduid als een sober barok gebouw uit het laatste derde deel van de 17e eeuw. Gekalkte bakstenen pilasters, een koepel met lantaarn en een houten dakconstructie — bescheiden naar kathedraalmaatstaven, en tijdens de feria in juni het natuurlijke middelpunt van het dorpsleven.',
          'Ofta kallad renässans i turistmaterial klassas kyrkan i skyddsdekretet som en enkel barockbyggnad från 1600-talets sista tredjedel. Vitkalkade tegelpilastrar, en kupol med lanternin och en trätakstol – blygsam med katedralmått mätt, och under juniferian byns naturliga mittpunkt.'
        )
      },
      {
        title: l(
          'Calle Real and the Barribajo',
          'Calle Real und das Barribajo',
          'La calle Real y el Barribajo',
          'Calle Real en het Barribajo',
          'Calle Real och Barribajo'
        ),
        subline: l(
          'The wide, wealthier axis',
          'Die breite, wohlhabendere Achse',
          'El eje ancho y más acomodado',
          'De brede, welvarender as',
          'Den breda, mer välbärgade axeln'
        ),
        text: l(
          'The lower part of the historic centre grew along Calle Real, the main axis. Plots are larger here, houses are mostly three storeys, and the architectural detail is more formal than higher up. The Torreón on Calle Real is one of the landmarks named in the heritage decree. This is also the flattest walking in the old town.',
          'Der untere Teil des historischen Zentrums wuchs entlang der Calle Real, der Hauptachse. Die Parzellen sind hier größer, die Häuser meist dreigeschossig, und die architektonischen Details sind förmlicher als weiter oben. Der Torreón an der Calle Real gehört zu den im Denkmalschutzdekret genannten Landmarken. Hier läuft es sich auch am flachsten in der Altstadt.',
          'La parte baja del casco histórico creció a lo largo de la calle Real, el eje principal. Aquí las parcelas son mayores, las casas suelen tener tres plantas y los elementos arquitectónicos son más formales que en la parte alta. El Torreón de la calle Real es uno de los hitos citados en el decreto de protección. Es además el tramo más llano del casco antiguo.',
          'Het lagere deel van de historische kern groeide langs Calle Real, de hoofdas. De percelen zijn hier groter, de huizen meestal drie verdiepingen hoog en de architectuur is formeler dan hogerop. De Torreón aan Calle Real is een van de in het beschermingsbesluit genoemde herkenningspunten. Dit is ook het vlakste stuk van de oude kern.',
          'Den nedre delen av den historiska kärnan växte fram längs Calle Real, huvudaxeln. Här är tomterna större, husen oftast tre våningar och arkitekturen mer formell än längre upp. Torreón vid Calle Real är ett av de landmärken som nämns i skyddsdekretet. Det är också den flackaste sträckan i gamla stan.'
        )
      },
      {
        title: l(
          'Barribarto',
          'Barribarto',
          'Barribarto',
          'Barribarto',
          'Barribarto'
        ),
        subline: l(
          'The medieval upper quarter',
          'Der mittelalterliche Oberhangkern',
          'El núcleo medieval de la parte alta',
          'De middeleeuwse bovenwijk',
          'Den medeltida övre bykärnan'
        ),
        text: l(
          'Above Calle Real the grain changes completely: tiny plots, mostly two storeys, houses built into and around the rock. Some passages are adarves, half-private lanes that serve only the houses on them — worth remembering before wandering into one. This is the most photographed part of the village and the most demanding to walk.',
          'Oberhalb der Calle Real ändert sich die Körnung vollständig: winzige Parzellen, meist zweigeschossig, Häuser in und um den Fels gebaut. Manche Durchgänge sind Adarves — halbprivate Gassen, die nur die daran liegenden Häuser erschließen; daran lohnt es sich zu denken, bevor man hineinläuft. Der meistfotografierte und zugleich anstrengendste Teil des Dorfes.',
          'Por encima de la calle Real el grano cambia por completo: parcelas mínimas, casi siempre de dos plantas, casas construidas en la roca y alrededor de ella. Algunos pasajes son adarves, calles semiprivadas que solo dan servicio a las viviendas que se abren a ellas; conviene tenerlo presente antes de entrar. Es la zona más fotografiada del pueblo y la más exigente para caminar.',
          'Boven Calle Real verandert de korrel volledig: minieme percelen, meestal twee bouwlagen, huizen die in en om de rots zijn gebouwd. Sommige doorgangen zijn adarves, halfprivé straatjes die alleen de daaraan gelegen huizen ontsluiten — goed om te weten voordat je er inloopt. Dit is het meest gefotografeerde deel van het dorp en het zwaarste om te belopen.',
          'Ovanför Calle Real ändras kornigheten helt: pyttesmå tomter, oftast två våningar, hus byggda in i och runt klippan. Vissa passager är adarves, halvprivata gränder som bara betjänar husen längs dem – värt att tänka på innan man går in. Det är byns mest fotograferade del och den jobbigaste att gå i.'
        )
      }
    ]
  },
  history: {
    title: l(
      'What happened here in 1569',
      'Was hier 1569 geschah',
      'Qué ocurrió aquí en 1569',
      'Wat hier in 1569 gebeurde',
      'Vad som hände här 1569'
    ),
    intro: l(
      'The ceramic panels tell this story in pictures. Here it is in four steps, with the dates that guidebooks most often get wrong.',
      'Die Keramiktafeln erzählen diese Geschichte in Bildern. Hier ist sie in vier Schritten — mit den Daten, die Reiseführer am häufigsten falsch angeben.',
      'Los paneles de cerámica cuentan esta historia en imágenes. Aquí va en cuatro pasos, con las fechas que las guías suelen equivocar.',
      'De keramische panelen vertellen dit verhaal in beelden. Hier staat het in vier stappen, met de data die reisgidsen het vaakst verkeerd hebben.',
      'Keramikpanelerna berättar historien i bilder. Här kommer den i fyra steg, med de datum som reseguider oftast har fel om.'
    ),
    items: [
      {
        title: l(
          'Before the village',
          'Vor dem Dorf',
          'Antes del pueblo',
          'Vóór het dorp',
          'Före byn'
        ),
        subline: l(
          'Finds, but no founding',
          'Funde, aber keine Gründung',
          'Hallazgos, pero ninguna fundación',
          'Vondsten, maar geen stichting',
          'Fynd, men ingen grundläggning'
        ),
        text: l(
          'The municipality holds real archaeology — a late-Neolithic cave, a Bronze Age settlement site, and an Iron Age cremation necropolis at Cerrillo de las Sombras showing Phoenician contact in the 7th and 6th centuries BC. None of it amounts to a Phoenician founding of the village. The settlement you walk through takes its shape much later, in the Andalusi-Nasrid period.',
          'Das Gemeindegebiet ist archäologisch reich — eine spätneolithische Höhle, ein bronzezeitlicher Siedlungsplatz und eine eisenzeitliche Brandbestattungs-Nekropole am Cerrillo de las Sombras mit phönizischem Kontakt im 7. und 6. Jahrhundert v. Chr. Eine phönizische Ortsgründung ergibt das nicht. Die Siedlung, durch die ihr geht, nimmt ihre Form erst viel später an, in andalusisch-nasridischer Zeit.',
          'El término municipal tiene arqueología real: una cueva del Neolítico final, un poblado de la Edad del Bronce y una necrópolis de incineración de la Edad del Hierro en el Cerrillo de las Sombras, con contacto fenicio en los siglos VII y VI a. C. Nada de ello supone una fundación fenicia del pueblo. El caserío que recorréis toma forma mucho después, en época andalusí-nazarí.',
          'De gemeente heeft echte archeologie: een laatneolithische grot, een bronstijdnederzetting en een ijzertijdgrafveld met crematies bij Cerrillo de las Sombras, met Fenicisch contact in de 7e en 6e eeuw v.Chr. Dat alles vormt geen Fenicische stichting van het dorp. De kern waar je doorheen loopt krijgt pas veel later vorm, in de Andalusisch-Nasridische periode.',
          'Kommunen har verklig arkeologi – en grotta från yngre stenåldern, en boplats från bronsåldern och en järnålderns brandgravfält vid Cerrillo de las Sombras med feniciska kontakter på 600- och 500-talen f.Kr. Något feniciskt bygrundande blir det inte av det. Bebyggelsen ni går genom får sin form långt senare, under andalusisk-nasridisk tid.'
        )
      },
      {
        title: l(
          '1487 to 1567',
          '1487 bis 1567',
          'De 1487 a 1567',
          '1487 tot 1567',
          '1487 till 1567'
        ),
        subline: l(
          'Conquest, then rising pressure',
          'Eroberung, dann wachsender Druck',
          'Conquista y presión creciente',
          'Verovering, daarna toenemende druk',
          'Erövring och sedan ökande press'
        ),
        text: l(
          'Castile took the region in May 1487, and a large Muslim population stayed on. A royal tax record of 1497 lists 742 taxable men of military age here, pointing to a community of well over two thousand people. Forced conversions around 1500 and an increasingly restrictive cultural policy — culminating in the royal decree of 1567 — built the pressure that broke in 1569.',
          'Kastilien nahm die Region im Mai 1487 ein; eine große muslimische Bevölkerung blieb. Ein königliches Steuerdokument von 1497 verzeichnet hier 742 abgabenpflichtige Männer im wehrfähigen Alter, was auf weit über zweitausend Personen schließen lässt. Zwangskonversionen um 1500 und eine zunehmend restriktive Kulturpolitik — mit dem königlichen Erlass von 1567 als Höhepunkt — bauten den Druck auf, der sich 1569 entlud.',
          'Castilla tomó la región en mayo de 1487 y una gran población musulmana permaneció. Un documento fiscal real de 1497 registra aquí 742 varones tributarios en edad militar, lo que apunta a una comunidad de bastante más de dos mil personas. Las conversiones forzosas hacia 1500 y una política cultural cada vez más restrictiva, culminada en la pragmática de 1567, acumularon la tensión que estalló en 1569.',
          'Castilië nam de regio in mei 1487 in en een grote moslimbevolking bleef. Een koninklijk belastingdocument uit 1497 noemt hier 742 belastingplichtige mannen van weerbare leeftijd, wat wijst op ruim tweeduizend inwoners. Gedwongen bekeringen rond 1500 en een steeds strenger cultuurbeleid — met het koninklijk decreet van 1567 als hoogtepunt — bouwden de druk op die in 1569 uitbrak.',
          'Kastilien tog regionen i maj 1487, och en stor muslimsk befolkning blev kvar. Ett kungligt skattedokument från 1497 tar upp 742 skattskyldiga män i vapenför ålder här, vilket pekar på långt över tvåtusen personer. Tvångskonverteringar kring 1500 och en alltmer restriktiv kulturpolitik – med det kungliga påbudet 1567 som kulmen – byggde upp trycket som brast 1569.'
        )
      },
      {
        title: l(
          'Two battles, not one',
          'Zwei Schlachten, nicht eine',
          'Dos batallas, no una',
          'Twee veldslagen, niet één',
          'Två slag, inte ett'
        ),
        subline: l(
          '28 May failed · 11 June decided it',
          '28. Mai gescheitert · 11. Juni entschieden',
          'El 28 de mayo fracasó · el 11 de junio decidió',
          '28 mei mislukt · 11 juni beslissend',
          '28 maj misslyckades · 11 juni avgjorde'
        ),
        text: l(
          'Rebel communities withdrew to the Peñón de Frigiliana — El Fuerte — with their families and livestock, under Hernando el Darra, whose ancestors had held office in the village. Guidebooks usually date the battle to 28 May 1569. That was the first royal assault, and it failed: the defenders drove it off with slings and thrown stones. The crown then brought in far larger forces, and the decisive attack came on 11 June 1569.',
          'Aufständische Gemeinden zogen sich mit Familien und Vieh auf den Peñón de Frigiliana — El Fuerte — zurück, angeführt von Hernando el Darra, dessen Vorfahren im Ort Ämter innehatten. Reiseführer datieren die Schlacht meist auf den 28. Mai 1569. Das war der erste königliche Angriff, und er scheiterte: Die Verteidiger schlugen ihn mit Schleudern und Wurfsteinen zurück. Danach zog die Krone weit größere Kräfte zusammen; der entscheidende Angriff erfolgte am 11. Juni 1569.',
          'Las comunidades sublevadas se replegaron al Peñón de Frigiliana —El Fuerte— con sus familias y su ganado, al mando de Hernando el Darra, cuyos antepasados habían ocupado cargos en el pueblo. Las guías suelen fechar la batalla el 28 de mayo de 1569. Ese fue el primer asalto real, y fracasó: los defensores lo rechazaron con hondas y piedras. La corona reunió después fuerzas muy superiores, y el ataque decisivo llegó el 11 de junio de 1569.',
          'Opstandige gemeenschappen trokken zich met gezinnen en vee terug op de Peñón de Frigiliana — El Fuerte — onder Hernando el Darra, wiens voorouders in het dorp ambten hadden bekleed. Reisgidsen dateren de slag meestal op 28 mei 1569. Dat was de eerste koninklijke aanval, en die mislukte: de verdedigers sloegen hem af met slingers en geworpen stenen. Daarna bracht de kroon veel grotere troepen samen; de beslissende aanval volgde op 11 juni 1569.',
          'Upproriska samhällen drog sig tillbaka till Peñón de Frigiliana – El Fuerte – med familjer och boskap, under Hernando el Darra, vars förfäder hade innehaft ämbeten i byn. Reseguider daterar oftast slaget till den 28 maj 1569. Det var det första kungliga anfallet, och det misslyckades: försvararna slog tillbaka det med slungor och kastade stenar. Kronan samlade därefter betydligt större styrkor, och det avgörande anfallet kom den 11 juni 1569.'
        )
      },
      {
        title: l(
          'After 1570',
          'Nach 1570',
          'Después de 1570',
          'Na 1570',
          'Efter 1570'
        ),
        subline: l(
          'An emptied village, then a new one',
          'Ein geleertes Dorf, dann ein neues',
          'Un pueblo vaciado y luego otro nuevo',
          'Een leeggelopen dorp, daarna een nieuw',
          'En tömd by, sedan en ny'
        ),
        text: l(
          'The remaining Morisco population was deported from the Kingdom of Granada in 1570, and the village was left demographically empty. Frigiliana had been a private lordship since 1508, so resettlement was organised directly by the lords rather than through the usual crown redistribution. Sugar cane planting followed, and the village became a self-governing villa in 1640.',
          'Die verbliebene moriskische Bevölkerung wurde 1570 aus dem Königreich Granada deportiert; das Dorf blieb demografisch leer zurück. Frigiliana war seit 1508 eine private Grundherrschaft, sodass die Wiederbesiedlung direkt von der Herrschaft organisiert wurde statt über die übliche königliche Landverteilung. Es folgte der Zuckerrohranbau; 1640 wurde der Ort selbstständige Villa.',
          'La población morisca restante fue deportada del Reino de Granada en 1570 y el pueblo quedó demográficamente vacío. Frigiliana era señorío privado desde 1508, así que la repoblación la organizó directamente la casa señorial y no el repartimiento habitual de la corona. Después llegó el cultivo de la caña de azúcar, y en 1640 el pueblo obtuvo el estatus de villa.',
          'De resterende Moriskse bevolking werd in 1570 uit het koninkrijk Granada gedeporteerd en het dorp bleef demografisch leeg achter. Frigiliana was sinds 1508 een particuliere heerlijkheid, dus de herbevolking werd rechtstreeks door de heren geregeld in plaats van via de gebruikelijke kroonverdeling. Daarna kwam de suikerrietteelt, en in 1640 werd het dorp een zelfstandige villa.',
          'Den kvarvarande moriskiska befolkningen deporterades från kungariket Granada 1570, och byn lämnades demografiskt tom. Frigiliana hade varit ett privat länsherrskap sedan 1508, så återbefolkningen organiserades direkt av herrskapet i stället för genom kronans vanliga fördelning. Sedan kom sockerrörsodlingen, och 1640 blev byn en självstyrande villa.'
        )
      }
    ]
  },
  preserved: {
    title: l(
      'Why it still looks like this',
      'Warum es bis heute so aussieht',
      'Por qué sigue teniendo este aspecto',
      'Waarom het er nog zo uitziet',
      'Varför den ser ut så än i dag'
    ),
    intro: l(
      'The village does not stay white by habit. Building work in the protected area follows conservation rules, and knowing them changes how the streets read.',
      'Das Dorf bleibt nicht aus Gewohnheit weiß. Bauliche Veränderungen im Schutzgebiet folgen Erhaltungsvorgaben — wer sie kennt, liest die Gassen anders.',
      'El pueblo no se mantiene blanco por costumbre. Las obras en el área protegida siguen normas de conservación, y conocerlas cambia la manera de mirar las calles.',
      'Het dorp blijft niet uit gewoonte wit. Bouwwerk in het beschermde gebied volgt behoudsregels, en wie die kent, leest de straten anders.',
      'Byn förblir inte vit av vana. Byggnadsarbeten i det skyddade området följer bevarandekrav, och känner man till dem läser man gränderna annorlunda.'
    ),
    items: [
      {
        title: l(
          'White is a requirement',
          'Weiß ist Vorschrift',
          'El blanco es obligatorio',
          'Wit is verplicht',
          'Vitt är ett krav'
        ),
        text: l(
          'Keeping the white façade finish is part of the conservation conditions for the protected centre. The colour is not a marketing decision taken at some point in the past; it is the condition under which the ensemble is maintained.',
          'Der Erhalt des weißen Fassadenanstrichs gehört zu den Erhaltungsauflagen für den geschützten Ortskern. Die Farbe ist keine irgendwann getroffene Marketingentscheidung, sondern die Bedingung, unter der das Ensemble erhalten wird.',
          'Mantener el acabado blanco de las fachadas forma parte de las condiciones de conservación del centro protegido. El color no es una decisión de marketing tomada en algún momento, sino la condición bajo la que se conserva el conjunto.',
          'Het behoud van de witte gevelafwerking hoort bij de behoudsvoorwaarden voor de beschermde kern. De kleur is geen marketingkeuze van ooit, maar de voorwaarde waaronder het ensemble in stand wordt gehouden.',
          'Att bevara den vita fasadytan hör till bevarandevillkoren för den skyddade kärnan. Färgen är inget marknadsföringsbeslut fattat någon gång, utan villkoret för att ensemblet ska bevaras.'
        )
      },
      {
        title: l(
          'The blue doors are not a rule',
          'Die blauen Türen sind keine Vorschrift',
          'Las puertas azules no son norma',
          'De blauwe deuren zijn geen regel',
          'De blå dörrarna är ingen regel'
        ),
        text: l(
          'A common line is that the white houses must have blue doors. They must not. What the conservation conditions ask for is that historic woodwork and window grilles keep their original design, material and dimensions — which is why the doors you photograph are so varied rather than uniformly blue.',
          'Häufig heißt es, zu den weißen Häusern gehörten zwingend blaue Türen. Das stimmt nicht. Die Erhaltungsauflagen verlangen, dass historische Holzbauteile und Gitterwerke ihre ursprüngliche Gestaltung, Materialität und Maße behalten — deshalb sind die Türen, die ihr fotografiert, so unterschiedlich und eben nicht einheitlich blau.',
          'Se repite a menudo que las casas blancas deben llevar puertas azules. No es así. Lo que piden las condiciones de conservación es que la carpintería histórica y las rejas mantengan su diseño, material y dimensiones originales, y por eso las puertas que fotografiáis son tan variadas y no uniformemente azules.',
          'Vaak wordt gezegd dat bij de witte huizen blauwe deuren horen. Dat klopt niet. De behoudsvoorwaarden vragen dat historisch houtwerk en raamtralies hun oorspronkelijke vormgeving, materiaal en maatvoering behouden — daarom zijn de deuren die je fotografeert zo verschillend en niet uniform blauw.',
          'Det sägs ofta att de vita husen måste ha blå dörrar. Det stämmer inte. Bevarandevillkoren kräver att historiska trädetaljer och fönstergaller behåller sin ursprungliga utformning, material och mått – därför är dörrarna ni fotograferar så olika och inte enhetligt blå.'
        )
      },
      {
        title: l(
          'Roofs and rooflines',
          'Dächer und Dachlandschaft',
          'Cubiertas y perfil de tejados',
          'Daken en daklijnen',
          'Tak och taklinjer'
        ),
        text: l(
          'When a roof is replaced, curved ceramic tiles are required. It is a small rule with a large effect: it is the reason the view down over the village reads as one continuous surface rather than a patchwork of materials.',
          'Bei einer Dacherneuerung sind gebogene Keramikziegel vorgeschrieben. Eine kleine Regel mit großer Wirkung: Sie ist der Grund, warum sich der Blick über die Dächer als eine zusammenhängende Fläche liest und nicht als Flickwerk aus Materialien.',
          'Cuando se sustituye una cubierta, es obligatorio usar teja cerámica curva. Es una norma pequeña con un efecto grande: por ella la vista sobre el pueblo se lee como una superficie continua y no como un mosaico de materiales.',
          'Bij vervanging van een dak zijn gebogen keramische pannen verplicht. Een kleine regel met een groot effect: daardoor leest het uitzicht over het dorp als één doorlopend vlak en niet als lappendeken van materialen.',
          'När ett tak byts ut krävs böjt keramiskt taktegel. En liten regel med stor verkan: det är därför utsikten över byn läses som en sammanhängande yta och inte som ett lapptäcke av material.'
        )
      }
    ]
  },
  livingHeritage: {
    title: l(
      'Still made here',
      'Was hier noch entsteht',
      'Lo que aún se hace aquí',
      'Wat hier nog wordt gemaakt',
      'Det som fortfarande görs här'
    ),
    intro: l(
      'Two things in the village are not heritage in the display-case sense. They are worked on, sold and eaten.',
      'Zwei Dinge im Dorf sind kein Erbe im Vitrinen-Sinn. Sie werden gearbeitet, verkauft und gegessen.',
      'Dos cosas del pueblo no son patrimonio de vitrina. Se trabajan, se venden y se comen.',
      'Twee dingen in het dorp zijn geen erfgoed in de vitrinezin. Ze worden gemaakt, verkocht en gegeten.',
      'Två saker i byn är inte kulturarv i montermening. De bearbetas, säljs och äts.'
    ),
    items: [
      {
        title: l(
          'Esparto weaving',
          'Espartoflechterei',
          'Esparto trenzado',
          'Espartovlechtwerk',
          'Espartoflätning'
        ),
        text: l(
          'Esparto grass weaving has largely disappeared from the Axarquía with agricultural mechanisation, but it is still practised here as a working craft. The weaver Lourdes Bueno gathers the grass herself in the Sierra de Almijara, washes and dries it, and makes bags, baskets, lamps and decorative pieces at her workshop El Rincón del Esparto. She also gives demonstrations and introductory sessions, including during the Three Cultures festival.',
          'Mit der Mechanisierung der Landwirtschaft ist die Espartoflechterei aus der Axarquía weitgehend verschwunden — hier wird sie noch als Erwerbshandwerk ausgeübt. Die Flechterin Lourdes Bueno sammelt das Espartogras selbst in der Sierra de Almijara, wäscht und trocknet es und fertigt in ihrer Werkstatt El Rincón del Esparto Taschen, Körbe, Lampen und dekorative Objekte. Sie gibt außerdem Vorführungen und Einführungskurse, unter anderem während des Drei-Kulturen-Festivals.',
          'El trenzado de esparto casi ha desaparecido de la Axarquía con la mecanización agrícola, pero aquí sigue vivo como oficio. La artesana Lourdes Bueno recoge ella misma el esparto en la Sierra de Almijara, lo lava y lo seca, y elabora bolsos, cestas, lámparas y piezas decorativas en su taller El Rincón del Esparto. También hace demostraciones y cursos de iniciación, entre otros durante el festival de las Tres Culturas.',
          'Het vlechten van espartogras is met de mechanisering van de landbouw grotendeels uit de Axarquía verdwenen, maar hier wordt het nog als ambacht uitgeoefend. Vlechtster Lourdes Bueno verzamelt het gras zelf in de Sierra de Almijara, wast en droogt het en maakt tassen, manden, lampen en decoratieve stukken in haar atelier El Rincón del Esparto. Ze geeft ook demonstraties en introductielessen, onder meer tijdens het Drie Culturen-festival.',
          'Espartoflätning har till stor del försvunnit från Axarquía i takt med jordbrukets mekanisering, men här utövas den fortfarande som yrkeshantverk. Flätaren Lourdes Bueno samlar själv gräset i Sierra de Almijara, tvättar och torkar det och gör väskor, korgar, lampor och dekorativa föremål i sin verkstad El Rincón del Esparto. Hon håller även visningar och introduktionskurser, bland annat under Tre kulturer-festivalen.'
        )
      },
      {
        title: l(
          'Miel de caña',
          'Miel de Caña',
          'Miel de caña',
          'Miel de caña',
          'Miel de caña'
        ),
        text: l(
          'The village syrup is a concentrated cane juice, not molasses — molasses is what is left after sugar crystallises out, while miel de caña keeps the whole unrefined juice. Try it on toast or fresh cheese, or in the classic fried aubergines. At the Cruces de Mayo, neighbours still cook arropía with it.',
          'Der Ortssirup ist eingedickter Zuckerrohrsaft, keine Melasse — Melasse bleibt übrig, wenn Zucker auskristallisiert ist, während Miel de Caña den gesamten unraffinierten Saft behält. Probiert ihn auf Toast oder frischem Käse oder klassisch zu frittierten Auberginen. Zu den Cruces de Mayo kochen die Nachbarschaften bis heute Arropía daraus.',
          'El jarabe del pueblo es zumo de caña concentrado, no melaza: la melaza es lo que queda tras cristalizar el azúcar, mientras que la miel de caña conserva todo el jugo sin refinar. Probadla con pan tostado o queso fresco, o con las clásicas berenjenas fritas. En las Cruces de Mayo, los vecinos siguen preparando arropía con ella.',
          'De dorpsstroop is ingedikt rietsap, geen melasse — melasse blijft over nadat suiker is uitgekristalliseerd, terwijl miel de caña het hele ongeraffineerde sap behoudt. Probeer het op toast of verse kaas, of bij de klassieke gebakken aubergines. Bij de Cruces de Mayo maken buurtbewoners er nog steeds arropía van.',
          'Byns sirap är indunstad rörsaft, inte melass – melass är det som blir kvar när sockret kristalliserats ut, medan miel de caña behåller hela den oraffinerade saften. Prova den på rostat bröd eller färsk ost, eller till de klassiska friterade auberginerna. Vid Cruces de Mayo kokar grannskapen fortfarande arropía på den.'
        )
      }
    ]
  },
  combine: {
    title: l(
      'Where the old town leads next',
      'Wohin die Altstadt als Nächstes führt',
      'Adónde lleva después el casco antiguo',
      'Waar de oude kern verder heen leidt',
      'Vart gamla stan leder vidare'
    ),
    intro: l(
      'The centre is at its best when something else is happening in it — a market morning, a festival evening, or simply a table booked at the right hour.',
      'Der Ortskern ist am schönsten, wenn in ihm etwas stattfindet — ein Marktvormittag, ein Festabend oder einfach ein zur richtigen Stunde reservierter Tisch.',
      'El centro está en su mejor momento cuando algo ocurre en él: una mañana de mercado, una noche de fiesta o, sencillamente, una mesa reservada a buena hora.',
      'De kern is op zijn best wanneer er iets in gebeurt: een marktochtend, een feestavond of gewoon een tafel op het juiste uur.',
      'Bykärnan är som bäst när något händer i den – en marknadsförmiddag, en festkväll eller helt enkelt ett bord bokat vid rätt tid.'
    ),
    items: [
      {
        token: 'frigiliana_events_authority' as const,
        title: l(
          'Festivals & traditions',
          'Feste & Traditionen',
          'Fiestas y tradiciones',
          'Feesten & tradities',
          'Fester & traditioner'
        ),
        text: l(
          'The same lanes carry the Good Friday procession, the May crosses and the largest cultural weekend of the year. Each changes how the centre can be used.',
          'Dieselben Gassen tragen die Karfreitagsprozession, die Maikreuze und das größte Kulturwochenende des Jahres. Jedes verändert, wie der Ortskern nutzbar ist.',
          'Las mismas calles acogen la procesión del Viernes Santo, las cruces de mayo y el mayor fin de semana cultural del año. Cada cita cambia cómo se puede usar el centro.',
          'Dezelfde straatjes dragen de processie op Goede Vrijdag, de meikruisen en het grootste culturele weekend van het jaar. Elk verandert hoe de kern te gebruiken is.',
          'Samma gränder bär långfredagsprocessionen, majkorsen och årets största kulturhelg. Var och en förändrar hur bykärnan kan användas.'
        ),
        linkLabel: l(
          'See the festival year',
          'Zum Festjahr',
          'Ver el año festivo',
          'Bekijk het feestjaar',
          'Se feståret'
        )
      },
      {
        token: 'frigiliana_market' as const,
        title: l(
          'Thursday market',
          'Donnerstagsmarkt',
          'Mercado del jueves',
          'Donderdagmarkt',
          'Torsdagsmarknaden'
        ),
        text: l(
          'The weekly market sits in the lower village, a short and mostly level walk from the old-town streets. It is the easiest way to combine the centre with an ordinary local morning.',
          'Der Wochenmarkt liegt im unteren Ort, einen kurzen und weitgehend ebenen Weg von den Altstadtgassen entfernt. Die einfachste Art, den Ortskern mit einem ganz normalen Vormittag zu verbinden.',
          'El mercado semanal se instala en la zona baja, a un paseo corto y casi llano de las calles del casco antiguo. Es la forma más fácil de combinar el centro con una mañana local cualquiera.',
          'De weekmarkt staat in het lagere dorp, op een korte en grotendeels vlakke wandeling van de straatjes van de oude kern. De makkelijkste manier om de kern met een gewone lokale ochtend te combineren.',
          'Veckomarknaden ligger i den nedre byn, en kort och mestadels flack promenad från gamla stans gränder. Det enklaste sättet att kombinera bykärnan med en vanlig lokal förmiddag.'
        ),
        linkLabel: l(
          'Plan a market morning',
          'Marktvormittag planen',
          'Planificar una mañana de mercado',
          'Plan een marktochtend',
          'Planera en marknadsförmiddag'
        )
      },
      {
        token: 'frigiliana_food_authority' as const,
        title: l(
          'Restaurants & local food',
          'Restaurants & lokale Küche',
          'Restaurantes y cocina local',
          'Restaurants & lokale keuken',
          'Restauranger & lokal mat'
        ),
        text: l(
          'Most of the village tables sit inside or just below the protected centre, which is why an evening here usually ends within a few minutes’ walk of where it started.',
          'Die meisten Tische des Dorfes liegen im geschützten Ortskern oder knapp darunter — deshalb endet ein Abend hier meist wenige Gehminuten von seinem Anfang entfernt.',
          'La mayoría de las mesas del pueblo están dentro del centro protegido o justo por debajo, y por eso una noche aquí suele acabar a pocos minutos a pie de donde empezó.',
          'De meeste tafels van het dorp staan in of net onder de beschermde kern, en daarom eindigt een avond hier meestal op een paar minuten lopen van waar hij begon.',
          'De flesta av byns bord ligger i eller strax nedanför den skyddade kärnan, och därför slutar en kväll här oftast några minuters promenad från där den började.'
        ),
        linkLabel: l(
          'Find a table',
          'Tisch finden',
          'Encontrar mesa',
          'Vind een tafel',
          'Hitta ett bord'
        )
      }
    ]
  },
  sources: {
    title: l(
      'How this page is sourced',
      'Woher die Angaben stammen',
      'De dónde salen estos datos',
      'Waar deze pagina op steunt',
      'Var uppgifterna kommer ifrån'
    ),
    text: l(
      'Dates, building classifications and conservation conditions follow the Andalusian heritage decree for the Conjunto Histórico and published archive research; the 1569 sequence follows the contemporary chronicle rather than visitor summaries. Reviewed August 2026. Opening times and programmes change — confirm them locally.',
      'Datierungen, Bauklassifizierungen und Erhaltungsauflagen folgen dem andalusischen Denkmalschutzdekret für den Conjunto Histórico und publizierter Archivforschung; die Abfolge von 1569 folgt der zeitgenössischen Chronik statt touristischer Zusammenfassungen. Stand: August 2026. Öffnungszeiten und Programme ändern sich — bitte vor Ort bestätigen.',
      'Las fechas, la clasificación de los edificios y las condiciones de conservación siguen el decreto andaluz de protección del Conjunto Histórico y la investigación de archivo publicada; la secuencia de 1569 sigue la crónica contemporánea y no los resúmenes turísticos. Revisado en agosto de 2026. Horarios y programas cambian: confirmadlos sobre el terreno.',
      'Datering, gebouwclassificatie en behoudsvoorwaarden volgen het Andalusische beschermingsbesluit voor het Conjunto Histórico en gepubliceerd archiefonderzoek; de volgorde van 1569 volgt de contemporaine kroniek en niet toeristische samenvattingen. Herzien in augustus 2026. Openingstijden en programma’s veranderen — bevestig ze ter plaatse.',
      'Datering, byggnadsklassificering och bevarandevillkor följer det andalusiska skyddsdekretet för Conjunto Histórico och publicerad arkivforskning; händelseförloppet 1569 följer den samtida krönikan och inte turistsammanfattningar. Granskad i augusti 2026. Öppettider och program ändras – bekräfta dem på plats.'
    ),
    linkLabel: l(
      'Official monument information',
      'Offizielle Informationen zu den Bauwerken',
      'Información oficial de los monumentos',
      'Officiële informatie over de monumenten',
      'Officiell information om byggnaderna'
    )
  },
  closing: {
    title: l(
      'Stay inside the story, not next to it',
      'Mittendrin wohnen, nicht daneben',
      'Alojarse dentro del relato, no al lado',
      'Verblijf in het verhaal, niet ernaast',
      'Bo mitt i berättelsen, inte bredvid'
    ),
    lead: l(
      'Casa AMARA sits in the lower part of the historic centre, near San Antonio. From here you reach Calle Real and several everyday destinations without the long stair runs of the upper Barribarto — which makes a practical difference with shopping, luggage or several trips in a day.',
      'Casa AMARA liegt im unteren Bereich des historischen Zentrums bei San Antonio. Von hier erreicht ihr die Calle Real und mehrere alltägliche Ziele ohne die langen Treppenfolgen des oberen Barribarto — bei Einkäufen, Gepäck oder mehreren Wegen am Tag macht das einen praktischen Unterschied.',
      'Casa AMARA está en la parte baja del casco histórico, junto a San Antonio. Desde aquí se llega a la calle Real y a varios destinos cotidianos sin los largos tramos de escaleras del Barribarto alto, lo que marca una diferencia práctica con la compra, el equipaje o varios recorridos en un mismo día.',
      'Casa AMARA ligt in het lagere deel van de historische kern, bij San Antonio. Vanaf hier bereik je Calle Real en verschillende dagelijkse bestemmingen zonder de lange trappenreeksen van het hogere Barribarto — met boodschappen, bagage of meerdere tochtjes op een dag scheelt dat praktisch.',
      'Casa AMARA ligger i den nedre delen av den historiska kärnan, nära San Antonio. Härifrån når ni Calle Real och flera vardagliga mål utan de långa trapploppen i övre Barribarto – med matinköp, bagage eller flera turer på en dag gör det praktisk skillnad.'
    ),
    availabilityCta: l(
      'Check availability',
      'Verfügbarkeit prüfen',
      'Consultar disponibilidad',
      'Beschikbaarheid bekijken',
      'Se tillgänglighet'
    ),
    apartmentsCta: l(
      'View apartments',
      'Apartments ansehen',
      'Ver apartamentos',
      'Bekijk appartementen',
      'Se lägenheter'
    )
  }
} as const;
