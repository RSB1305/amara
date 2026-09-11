import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaCeramicPanelsSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-ceramic-panels-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image contract. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'The Twelve Ceramic Panels of Frigiliana: What They Say, and Who Made Them',
      description:
        'A full guide to Frigiliana’s twelve ceramic panels: the 1982 provenance, the complete Spanish texts panel by panel, and where their story differs from the documented history of 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Die zwölf Keramiktafeln von Frigiliana: Wortlaut, Herkunft, Wahrheit',
      description:
        'Ein vollständiger Führer zu Frigilianas zwölf Keramiktafeln: Herkunft von 1982, die kompletten spanischen Texte Tafel für Tafel und wo ihre Erzählung von der belegten Geschichte von 1569 abweicht.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Los doce azulejos de Frigiliana: qué dicen y quién los hizo',
      description:
        'Una guía completa de los doce azulejos de Frigiliana: su origen en 1982, los textos completos en español panel a panel y en qué se aparta su relato de la historia documentada de 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'De twaalf keramische panelen van Frigiliana: tekst, herkomst, waarheid',
      description:
        'Een volledige gids voor de twaalf keramische panelen van Frigiliana: de herkomst uit 1982, de volledige Spaanse teksten paneel voor paneel en waar hun verhaal afwijkt van de gedocumenteerde geschiedenis van 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigilianas tolv keramikpaneler: text, ursprung, sanning',
      description:
        'En komplett guide till Frigilianas tolv keramikpaneler: ursprunget 1982, de fullständiga spanska texterna panel för panel och var deras berättelse skiljer sig från den dokumenterade historien 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page. Provenance and the twelve-panel
 * register follow research-001 (2026-09-11); the historical claim boundaries follow
 * the same synthesis: twelve panels installed in 1982, texts by Antonio Navas Acosta,
 * ceramics by Amparo Ruiz de Luna. The Spanish transcriptions are quoted verbatim
 * from the panels and are not translated. The page states plainly where the panels'
 * 1982 memory-culture narrative differs from the documented record (the omitted
 * 28 May 1569 assault; the anachronistic "Holocausto"/"patria" framing).
 */
export const frigilianaCeramicPanelsCopy = {
  hero: {
    kicker: l(
      'Old town · The ceramic panels',
      'Altstadt · Die Keramiktafeln',
      'Casco antiguo · Los azulejos',
      'Oude kern · De keramische panelen',
      'Gamla stan · Keramikpanelerna'
    ),
    title: l(
      'The twelve ceramic panels',
      'Die zwölf Keramiktafeln',
      'Los doce azulejos',
      'De twaalf keramische panelen',
      'De tolv keramikpanelerna'
    ),
    subtitle: l(
      'A walk through 1569 — and what it leaves out',
      'Ein Gang durch 1569 — und was er weglässt',
      'Un recorrido por 1569 — y lo que omite',
      'Een wandeling door 1569 — en wat ze weglaat',
      'En vandring genom 1569 — och vad den utelämnar'
    ),
    paragraphs: [
      l(
        'Set into the walls of the upper quarter, twelve hand-painted panels tell the story of the Morisco revolt of 1569 in sequence. They look old, but they were made in 1982. Knowing who wrote them, who fired them and where their story parts from the documented record makes the walk far more interesting — not less.',
        'In die Mauern des oberen Viertels eingelassen, erzählen zwölf handbemalte Tafeln den Morisken-Aufstand von 1569 der Reihe nach. Sie wirken alt, entstanden aber 1982. Wer weiß, wer sie geschrieben, wer sie gebrannt hat und wo ihre Erzählung von der belegten Geschichte abweicht, geht den Weg mit ganz anderen Augen — interessanter, nicht weniger.',
        'Encastrados en los muros de la parte alta, doce azulejos pintados a mano cuentan la rebelión morisca de 1569 en orden. Parecen antiguos, pero se hicieron en 1982. Saber quién los escribió, quién los coció y en qué se aparta su relato de lo documentado hace el paseo mucho más interesante, no menos.',
        'In de muren van de hoger gelegen wijk vertellen twaalf handbeschilderde panelen de opstand van de Morisken van 1569 op volgorde. Ze ogen oud, maar ze zijn uit 1982. Weten wie ze schreef, wie ze bakte en waar hun verhaal afwijkt van het gedocumenteerde maakt de wandeling veel interessanter, niet minder.',
        'Infällda i murarna i den övre stadsdelen berättar tolv handmålade paneler moriskernas uppror 1569 i ordning. De ser gamla ut, men de gjordes 1982. Att veta vem som skrev dem, vem som brände dem och var deras berättelse skiljer sig från det dokumenterade gör vandringen långt mer intressant, inte mindre.'
      )
    ]
  },
  context: {
    title: l(
      'What happened in 1569',
      'Was 1569 geschah',
      'Qué pasó en 1569',
      'Wat er in 1569 gebeurde',
      'Vad som hände 1569'
    ),
    paragraphs: [
      l(
        'To read the panels, it helps to picture the situation. After the fall of Granada, the Muslims of the Sierra de Bentomiz stayed on as baptised “Moriscos”, keeping their own language, dress and customs. A royal decree forbade all of it, and year by year the pressure and the fear grew.',
        'Um die Tafeln zu lesen, hilft die Lage von damals. Nach der Eroberung Granadas blieben die Muslime der Sierra de Bentomiz als getaufte „Morisken“ im Land, mit eigener Sprache, Kleidung und eigenen Bräuchen. Ein königlicher Erlass verbot ihnen all das, und Jahr für Jahr wuchsen Druck und Furcht.',
        'Para leer los azulejos ayuda imaginar la situación. Tras la conquista de Granada, los musulmanes de la Sierra de Bentomiz permanecieron como «moriscos» bautizados, conservando su lengua, su vestido y sus costumbres. Una pragmática real se lo prohibió todo, y año tras año crecieron la presión y el miedo.',
        'Om de panelen te lezen helpt het je de situatie voor te stellen. Na de val van Granada bleven de moslims van de Sierra de Bentomiz achter als gedoopte „Morisken“, met behoud van hun eigen taal, kleding en gebruiken. Een koninklijk besluit verbood dat allemaal, en jaar na jaar groeiden de druk en de angst.',
        'För att läsa panelerna hjälper det att föreställa sig situationen. Efter Granadas fall stannade muslimerna i Sierra de Bentomiz kvar som döpta ”morisker”, med eget språk, egen dräkt och egna seder. Ett kungligt påbud förbjöd allt detta, och år efter år växte trycket och rädslan.'
      ),
      l(
        'In 1569 the villages rose. Thousands from the region gathered on the Peñón, the steep rock above Frigiliana, on which they pinned their hopes. In June the crown came with an army and a fleet; the rock fell, and the old world of the sierra came to an end. The twelve panels tell exactly this arc — from the land to the last silence.',
        '1569 erhoben sich die Dörfer. Tausende aus der Umgebung sammelten sich auf dem Peñón, dem steilen Felsen über Frigiliana, auf den sie ihre Hoffnung setzten. Im Juni rückte die Krone mit Heer und Flotte an; der Felsen fiel, und die alte Welt der Sierra ging zu Ende. Die zwölf Tafeln erzählen genau diesen Bogen — vom Land bis zum letzten Schweigen.',
        'En 1569 se alzaron los pueblos. Miles de personas de la comarca se reunieron en el Peñón, el escarpado risco sobre Frigiliana, en el que pusieron sus esperanzas. En junio la corona llegó con ejército y armada; el peñón cayó y el viejo mundo de la sierra llegó a su fin. Los doce azulejos cuentan justamente ese arco: de la tierra al último silencio.',
        'In 1569 kwamen de dorpen in opstand. Duizenden mensen uit de streek verzamelden zich op de Peñón, de steile rots boven Frigiliana, waarop ze hun hoop vestigden. In juni kwam de kroon met een leger en een vloot; de rots viel, en de oude wereld van de sierra kwam ten einde. De twaalf panelen vertellen precies die boog — van het land tot de laatste stilte.',
        'År 1569 reste sig byarna. Tusentals människor från trakten samlades på Peñón, den branta klippan ovanför Frigiliana, som de satte sitt hopp till. I juni kom kronan med här och flotta; klippan föll, och sierrans gamla värld gick under. De tolv panelerna berättar just denna båge — från landet till den sista tystnaden.'
      )
    ]
  },
  provenance: {
    title: l(
      'Where the panels come from',
      'Woher die Tafeln kommen',
      'De dónde vienen los azulejos',
      'Waar de panelen vandaan komen',
      'Var panelerna kommer ifrån'
    ),
    intro: l(
      'The panels did not grow over centuries. They are a deliberate act of 1982 — a piece of public history built into the streets, with named authors and a clear technique.',
      'Die Tafeln sind nicht über Jahrhunderte gewachsen. Sie sind ein bewusster Akt von 1982 — in die Gassen gebaute Erinnerungskultur, mit benannten Urhebern und klarer Technik.',
      'Los azulejos no crecieron a lo largo de siglos. Son un acto deliberado de 1982: historia pública incorporada a las calles, con autores concretos y una técnica clara.',
      'De panelen groeiden niet door de eeuwen heen. Ze zijn een bewuste daad uit 1982 — publieke geschiedenis, ingebouwd in de straten, met met naam genoemde makers en een heldere techniek.',
      'Panelerna växte inte fram under sekler. De är en medveten handling från 1982 — offentlig historia inbyggd i gatorna, med namngivna upphovsmän och en tydlig teknik.'
    ),
    items: [
      {
        title: l(
          'Installed in 1982',
          'Angebracht 1982',
          'Instalados en 1982',
          'Geplaatst in 1982',
          'Uppsatta 1982'
        ),
        text: l(
          'The twelve panels were put up in 1982, during the upgrade of the old Morisco quarter that coincided with Frigiliana’s national beautification award (Premio Nacional de Embellecimiento). They were part of turning a purely architectural quarter into a readable story.',
          'Die zwölf Tafeln wurden 1982 angebracht, im Zuge der Aufwertung des alten Morisken-Viertels, die mit dem nationalen Verschönerungspreis (Premio Nacional de Embellecimiento) für Frigiliana zusammenfiel. Sie machten aus einem rein baulichen Viertel eine lesbare Geschichte.',
          'Los doce azulejos se colocaron en 1982, durante la mejora del antiguo barrio morisco que coincidió con el Premio Nacional de Embellecimiento a Frigiliana. Sirvieron para convertir un barrio puramente arquitectónico en un relato legible.',
          'De twaalf panelen werden in 1982 aangebracht, tijdens de opwaardering van de oude Moriskse wijk die samenviel met de nationale verfraaiingsprijs (Premio Nacional de Embellecimiento) voor Frigiliana. Ze maakten van een louter architectonische wijk een leesbaar verhaal.',
          'De tolv panelerna sattes upp 1982, under upprustningen av det gamla moriska kvarteret som sammanföll med det nationella försköningspriset (Premio Nacional de Embellecimiento) till Frigiliana. De gjorde ett rent arkitektoniskt kvarter till en läsbar berättelse.'
        )
      },
      {
        title: l(
          'The texts: Antonio Navas Acosta',
          'Die Texte: Antonio Navas Acosta',
          'Los textos: Antonio Navas Acosta',
          'De teksten: Antonio Navas Acosta',
          'Texterna: Antonio Navas Acosta'
        ),
        text: l(
          'The panel texts were written by the local historian Antonio Navas Acosta, who reworked the sixteenth-century royal chronicles into a public, victim-facing telling. His book on the subject came later (1995/1999); the panels rest on his earlier research.',
          'Die Tafeltexte stammen vom lokalen Historiker Antonio Navas Acosta, der die königlichen Chroniken des 16. Jahrhunderts in eine öffentliche, den Opfern zugewandte Erzählung überführte. Sein Buch dazu kam später (1995/1999); die Tafeln beruhen auf seiner früheren Forschung.',
          'Los textos son del historiador local Antonio Navas Acosta, que transformó las crónicas reales del siglo XVI en un relato público y del lado de las víctimas. Su libro sobre el tema es posterior (1995/1999); los azulejos se basan en su investigación anterior.',
          'De teksten zijn van de plaatselijke historicus Antonio Navas Acosta, die de zestiende-eeuwse koninklijke kronieken omvormde tot een publiek verhaal aan de kant van de slachtoffers. Zijn boek erover kwam later (1995/1999); de panelen berusten op zijn eerdere onderzoek.',
          'Texterna är av den lokale historikern Antonio Navas Acosta, som omarbetade 1500-talets kungliga krönikor till en offentlig berättelse på offrens sida. Hans bok om ämnet kom senare (1995/1999); panelerna vilar på hans tidigare forskning.'
        )
      },
      {
        title: l(
          'The ceramics: Amparo Ruiz de Luna',
          'Die Keramik: Amparo Ruiz de Luna',
          'La cerámica: Amparo Ruiz de Luna',
          'Het keramiek: Amparo Ruiz de Luna',
          'Keramiken: Amparo Ruiz de Luna'
        ),
        text: l(
          'The ceramic work of the twelve route panels is attributed to the ceramist Amparo Ruiz de Luna. (Sources also link the painter Pilar García Millán to Morisco ceramic work in Frigiliana, probably a separate mural — we keep the two apart.)',
          'Die keramische Ausführung der zwölf Routen-Tafeln wird der Keramikerin Amparo Ruiz de Luna zugeschrieben. (Quellen verbinden auch die Malerin Pilar García Millán mit Morisken-Keramik in Frigiliana, wohl ein eigenes Wandbild — wir halten beides auseinander.)',
          'La ejecución cerámica de los doce azulejos de la ruta se atribuye a la ceramista Amparo Ruiz de Luna. (Algunas fuentes vinculan también a la pintora Pilar García Millán con cerámica morisca en Frigiliana, probablemente un mural aparte; los mantenemos separados.)',
          'Het keramische werk van de twaalf routepanelen wordt toegeschreven aan de keramiste Amparo Ruiz de Luna. (Bronnen koppelen ook de schilder Pilar García Millán aan Moriskse keramiek in Frigiliana, waarschijnlijk een aparte muurschildering — we houden beide gescheiden.)',
          'Det keramiska utförandet av de tolv ruttpanelerna tillskrivs keramikern Amparo Ruiz de Luna. (Källor kopplar även målaren Pilar García Millán till moriskisk keramik i Frigiliana, troligen en separat väggmålning — vi håller isär de två.)'
        )
      },
      {
        title: l(
          'Only four colours',
          'Nur vier Farben',
          'Solo cuatro colores',
          'Slechts vier kleuren',
          'Bara fyra färger'
        ),
        text: l(
          'The panels use only four mineral colours — ivory white, black, green and brown — copying the sixteenth-century Morisco ceramics of the Bentomiz region and avoiding costly imported blue and red. That restraint is why they seem to have always been there.',
          'Die Tafeln nutzen nur vier Mineralfarben — Elfenbeinweiß, Schwarz, Grün und Braun — nach dem Vorbild der Morisken-Keramik der Region Bentomiz im 16. Jahrhundert, ohne kostspieliges importiertes Blau und Rot. Diese Zurückhaltung lässt sie wirken, als seien sie immer da gewesen.',
          'Los azulejos usan solo cuatro colores minerales — blanco marfil, negro, verde y marrón —, imitando la cerámica morisca de la Bentomiz del siglo XVI y evitando el azul y el rojo importados y caros. Esa contención es la razón de que parezcan haber estado siempre ahí.',
          'De panelen gebruiken slechts vier mineraalkleuren — ivoorwit, zwart, groen en bruin — naar het voorbeeld van de zestiende-eeuwse Moriskse keramiek uit de Bentomiz-streek, zonder kostbaar geïmporteerd blauw en rood. Die soberheid maakt dat ze er altijd geweest lijken.',
          'Panelerna använder bara fyra mineralfärger — elfenbensvitt, svart, grönt och brunt — efter förlagan från 1500-talets moriskiska keramik i Bentomiz-trakten, utan kostsamt importerat blått och rött. Den återhållsamheten gör att de verkar ha funnits där för alltid.'
        )
      }
    ]
  },
  register: {
    title: l(
      'The twelve panels, in order',
      'Die zwölf Tafeln, der Reihe nach',
      'Los doce azulejos, en orden',
      'De twaalf panelen, op volgorde',
      'De tolv panelerna, i ordning'
    ),
    intro: l(
      'The route begins with panel 1 in Calle Hernando El Darra, near the old grain stores and El Ingenio, and climbs into the Barribarto. Below, each panel’s scene with its full Spanish text — tap to read the original.',
      'Die Route beginnt mit Tafel 1 in der Calle Hernando El Darra, nahe den alten Getreidespeichern und El Ingenio, und steigt in den Barribarto hinauf. Unten je Tafel die Szene mit dem vollständigen spanischen Text — zum Lesen des Originals aufklappen.',
      'La ruta empieza con el azulejo 1 en la calle Hernando El Darra, junto a los antiguos pósitos y El Ingenio, y sube al Barribarto. Abajo, la escena de cada azulejo con su texto completo en español; toca para leer el original.',
      'De route begint met paneel 1 in Calle Hernando El Darra, bij de oude graanopslag en El Ingenio, en klimt het Barribarto in. Hieronder per paneel de scène met de volledige Spaanse tekst — tik om het origineel te lezen.',
      'Rutten börjar med panel 1 på Calle Hernando El Darra, nära de gamla spannmålsbodarna och El Ingenio, och stiger upp i Barribarto. Nedan varje panels scen med hela den spanska texten — tryck för att läsa originalet.'
    ),
    note: l(
      'All twelve stops sit on the official route: it begins at panel 1 near the Plaza del Ingenio and runs through the lanes of the Barribarto to panel 12 by the church. From Casa AMARA, down by the church, you reach the start in a few minutes.',
      'Alle zwölf Standorte liegen an der offiziellen Route: Sie beginnt an Tafel 1 nahe der Plaza del Ingenio und zieht durch die Gassen des Barribarto bis Tafel 12 an der Kirche. Von Casa AMARA, unten an der Kirche, erreicht ihr den Start in wenigen Minuten.',
      'Los doce puntos están en la ruta oficial: empieza en el azulejo 1, junto a la Plaza del Ingenio, y recorre las calles del Barribarto hasta el azulejo 12, junto a la iglesia. Desde Casa AMARA, abajo junto a la iglesia, llegáis al inicio en pocos minutos.',
      'Alle twaalf plekken liggen op de officiële route: die begint bij paneel 1 bij de Plaza del Ingenio en loopt door de straatjes van de Barribarto tot paneel 12 bij de kerk. Vanaf Casa AMARA, beneden bij de kerk, ben je in een paar minuten bij het startpunt.',
      'Alla tolv platser ligger längs den officiella rutten: den börjar vid panel 1 nära Plaza del Ingenio och löper genom Barribartos gränder till panel 12 vid kyrkan. Från Casa AMARA, nere vid kyrkan, når ni starten på några minuter.'
    ),
    transcriptionLabel: l(
      'Original Spanish text',
      'Spanischer Originaltext',
      'Texto original en español',
      'Spaanse originele tekst',
      'Spansk originaltext'
    ),
    readMoreLabel: l(
      'Read the text: translation & original',
      'Text lesen: Übersetzung & Original',
      'Leer el texto: versión actual y original',
      'Lees de tekst: vertaling & origineel',
      'Läs texten: översättning & original'
    )
  },
  map: {
    caption: l(
      'The route of the twelve panels — tap a number to jump straight to that panel.',
      'Der Weg der zwölf Tafeln — tippt eine Nummer an, um direkt zur Tafel zu springen.',
      'El recorrido de los doce azulejos: toca un número para saltar directamente a ese azulejo.',
      'De route van de twaalf panelen — tik op een nummer om meteen naar dat paneel te springen.',
      'De tolv panelernas väg — tryck på en siffra för att hoppa direkt till panelen.'
    ),
    startSublabel: l(
      'Start · parking · taxi',
      'Start · Parken · Taxi',
      'Inicio · aparcamiento · taxi',
      'Start · parkeren · taxi',
      'Start · parkering · taxi'
    ),
    ariaLabel: l(
      'Map of the twelve ceramic panels in Frigiliana showing the walking route',
      'Karte der zwölf Keramiktafeln in Frigiliana mit dem Routenverlauf',
      'Mapa de los doce azulejos de Frigiliana con el recorrido a pie',
      'Kaart van de twaalf keramische panelen in Frigiliana met de wandelroute',
      'Karta över Frigilianas tolv keramikpaneler med promenadrutten'
    ),
    panelWord: l('Panel', 'Tafel', 'Azulejo', 'Paneel', 'Panel'),
    mapsLabel: l(
      'Open the walking route in Google Maps',
      'Fußweg in Google Maps öffnen',
      'Abrir la ruta a pie en Google Maps',
      'Wandelroute openen in Google Maps',
      'Öppna promenadrutten i Google Maps'
    ),
    /* Operator-supplied walking directions (3e2 = walking) through the panel lanes:
       Hernando el Darra → Amargura → Alta → Sta. Teresa de Ávila → El Garral. */
    mapsHref:
      'https://www.google.com/maps/dir/C.+Hernando+el+Darra,+29788+Frigiliana,+M%C3%A1laga,+Spanien/C.+Amargura,+29788+Frigiliana,+M%C3%A1laga,+Spanien/C.+Alta,+29788+Frigiliana,+M%C3%A1laga,+Spanien/Calle+Sta.+Teresa+de+Avila,+29788+Frigiliana,+M%C3%A1laga,+Spanien/C.+el+Garral,+29788+Frigiliana,+M%C3%A1laga,+Spanien/@36.7928565,-3.9000319,17z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0xd7224b0712c1efd:0xc0b3b8849f81f704!2m2!1d-3.8963792!2d36.7919455!1m5!1m1!1s0xd7224b015d84e13:0x4935fd50aa9b33ab!2m2!1d-3.897074!2d36.7924183!1m5!1m1!1s0xd7224b03cf90b55:0x169e6edccfc3f0f0!2m2!1d-3.8976217!2d36.7928842!1m5!1m1!1s0xd7224ae31b24bcd:0xa0f158e35bfa39ec!2m2!1d-3.8985348!2d36.7937589!1m5!1m1!1s0xd7224b1d526eeab:0x42fb9c4cacbf11c0!2m2!1d-3.8984509!2d36.7934542!3e2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D'
  },
  panels: [
    {
      n: 1,
      titleEs: 'La Tierra',
      scene: l(
        'The setting: the fertile Sierra de Bentomiz, its clear air and hardy people, and its twenty-two populated places — Frigiliana among them.',
        'Die Kulisse: die fruchtbare Sierra de Bentomiz, ihre klare Luft und zähen Menschen, ihre zweiundzwanzig bewohnten Orte — Frigiliana darunter.',
        'El escenario: la fértil Sierra de Bentomiz, su aire claro y su gente recia, y sus veintidós lugares poblados, entre ellos Frigiliana.',
        'Het decor: de vruchtbare Sierra de Bentomiz, haar heldere lucht en taaie mensen, en haar tweeëntwintig bewoonde plaatsen — Frigiliana daaronder.',
        'Miljön: den bördiga Sierra de Bentomiz, dess klara luft och härdiga folk, och dess tjugotvå befolkade orter — Frigiliana bland dem.'
      ),
      transcription:
        '«La Sierra de Bentomíz cae en los términos de la ciudad de Vélez. Toda esta tierra fértil poblada de muchas arboledas, abundante de aguas frías y saludables que baxan entre las peñas. Alcanza un cielo tan claro, que haciéndola amenísima, cria los hombres ligeros, recios y de tan grande ánimo, que antiguamente los Reyes Moros los tenían por los más valientes, más sueltos y de mayor efeto que había en el reyno de Granada. Tenía veinte y dos lugares poblados de gente rica, entre ellos, Fragiliana».',
      translation: l(
        'The Sierra de Bentomíz lies within the lands of the town of Vélez. All this fertile country is covered with woodland and rich in cool, wholesome waters that run down between the crags. Its sky is so clear that, making the land delightful, it breeds men so nimble, tough and high-spirited that in former times the Moorish kings held them to be the bravest, the most agile and the most effective in the whole kingdom of Granada. It had twenty-two places peopled by prosperous folk — Frigiliana among them.',
        'Die Sierra de Bentomíz gehört zum Gebiet der Stadt Vélez. Dieses ganze fruchtbare Land ist von Wäldern bedeckt und reich an kühlen, gesunden Wassern, die zwischen den Felsen herabfließen. Sein Himmel ist so klar, dass er das Land überaus lieblich macht und Menschen hervorbringt, die so flink, zäh und beherzt sind, dass die maurischen Könige sie einst für die tapfersten, gewandtesten und tüchtigsten im ganzen Königreich Granada hielten. Es hatte zweiundzwanzig von wohlhabenden Leuten bewohnte Orte — Frigiliana darunter.',
        'La Sierra de Bentomiz pertenece al término de la ciudad de Vélez. Toda esta tierra fértil está poblada de arboledas y es rica en aguas frías y saludables que bajan entre las peñas. Su cielo es tan claro que, haciéndola muy agradable, cría hombres ágiles, recios y de tan gran ánimo que antiguamente los reyes moros los tenían por los más valientes, más sueltos y de mayor eficacia de todo el reino de Granada. Tenía veintidós lugares poblados de gente rica, entre ellos Frigiliana.',
        'De Sierra de Bentomíz valt onder het gebied van de stad Vélez. Dit hele vruchtbare land is begroeid met bossen en rijk aan koele, gezonde wateren die tussen de rotsen omlaag stromen. De hemel is er zo helder dat het land er heerlijk van wordt en mensen voortbrengt die zo lenig, taai en moedig zijn dat de Moorse koningen hen vroeger voor de dappersten, wendbaarsten en doeltreffendsten van het hele koninkrijk Granada hielden. Het telde tweeëntwintig door welgestelde mensen bewoonde plaatsen — Frigiliana daaronder.',
        'Sierra de Bentomíz hör till staden Vélez marker. Hela detta bördiga land är täckt av skogar och rikt på svala, hälsosamma vatten som rinner ner mellan klipporna. Himlen är så klar att den gör landet ljuvligt och föder män så snabba, härdiga och modiga att de moriska kungarna förr höll dem för de tappraste, smidigaste och dugligaste i hela kungariket Granada. Det hade tjugotvå orter befolkade av välbärgat folk — Frigiliana bland dem.'
      )
    },
    {
      n: 2,
      titleEs: 'La Gente',
      scene: l(
        'A settled life turns to fear as the 1567 decree bans the Morisco language, dress, music, feasts and gatherings.',
        'Ein geregeltes Leben kippt in Furcht, als der Erlass von 1567 Sprache, Kleidung, Musik, Feste und Zusammenkünfte der Morisken verbietet.',
        'Una vida asentada se vuelve miedo cuando la pragmática de 1567 prohíbe la lengua, el vestido, la música, las fiestas y las reuniones moriscas.',
        'Een gevestigd leven slaat om in angst als het decreet van 1567 de Moriskse taal, kleding, muziek, feesten en samenkomsten verbiedt.',
        'Ett stadgat liv vänds i rädsla när påbudet 1567 förbjuder moriskernas språk, dräkt, musik, fester och sammankomster.'
      ),
      transcription:
        '«Manteníase esta gente con sus oficios en aquellos lugares, casábanse, labraban la tierra, dábanse a su vida sosegada. Siguiéronse luego ofensas en su ley, en las haciendas, y en el uso de la vida, por que la Inquisición los comenzó a apretar más de los ordinario. El Rey les mandó dejar la habla morisca, quitóseles el hábito morisco, hubo fama que les mandaban tomar los hijos y pasarlos a Castilla, vedáronles los baños, la música, cantares, fiestas, bodas y cualesquier juntas de pasatiempo. Todo era confusión, sospecha y temor».',
      translation: l(
        'These people supported themselves by their trades in those villages; they married, worked the land and led a quiet life. Then came offences against their faith, their property and their way of living, as the Inquisition began to press them harder than usual. The King ordered them to give up the Morisco tongue; their Morisco dress was taken from them; it was rumoured that their children would be taken and sent away to Castile; they were forbidden their baths, their music, their songs, feasts, weddings and every gathering for pleasure. All was confusion, suspicion and fear.',
        'Diese Leute lebten von ihren Handwerken in jenen Orten; sie heirateten, bestellten das Land und führten ein ruhiges Leben. Dann kamen Übergriffe auf ihren Glauben, ihren Besitz und ihre Lebensweise, als die Inquisition begann, sie härter als sonst zu bedrängen. Der König befahl ihnen, die morische Sprache aufzugeben; man nahm ihnen die morische Kleidung; es hieß, man werde ihnen die Kinder nehmen und nach Kastilien bringen; man verbot ihnen die Bäder, die Musik, die Lieder, Feste, Hochzeiten und jede Zusammenkunft zum Vergnügen. Alles war Verwirrung, Argwohn und Furcht.',
        'Esta gente se mantenía con sus oficios en aquellos lugares; se casaban, labraban la tierra y llevaban una vida sosegada. Luego llegaron las ofensas a su religión, a sus haciendas y a su modo de vida, pues la Inquisición empezó a apretarlos más de lo habitual. El rey les mandó abandonar la lengua morisca; les quitaron el vestido morisco; corrió el rumor de que les tomarían a los hijos para llevarlos a Castilla; les prohibieron los baños, la música, los cantos, las fiestas, las bodas y cualquier reunión de esparcimiento. Todo era confusión, sospecha y temor.',
        'Deze mensen leefden van hun ambachten in die dorpen; ze trouwden, bewerkten het land en leidden een rustig leven. Toen kwamen de aanvallen op hun geloof, hun bezit en hun manier van leven, toen de Inquisitie hen harder dan gewoonlijk begon aan te pakken. De koning gebood hun de Moriskse taal op te geven; hun Moriskse kleding werd hun ontnomen; er ging een gerucht dat men hun kinderen zou weghalen en naar Castilië brengen; men verbood hun de baden, de muziek, de liederen, feesten, bruiloften en elke bijeenkomst voor vermaak. Alles was verwarring, achterdocht en angst.',
        'Detta folk livnärde sig på sina hantverk i dessa byar; de gifte sig, brukade jorden och levde ett stilla liv. Sedan kom kränkningarna mot deras tro, deras egendom och deras levnadssätt, när Inkvisitionen började pressa dem hårdare än vanligt. Kungen befallde dem att överge det moriska språket; deras moriska dräkt togs ifrån dem; det gick ett rykte om att man skulle ta deras barn och föra dem till Kastilien; man förbjöd dem baden, musiken, sångerna, festerna, bröllopen och varje sammankomst för nöjes skull. Allt var förvirring, misstanke och fruktan.'
      )
    },
    {
      n: 3,
      titleEs: 'La Revuelta',
      scene: l(
        'Escalation: the outlaw Andrés el Chorairán stirs revolt; a moderate who tried to stop it is jailed and tortured with the innocent.',
        'Eskalation: Der Bandit Andrés el Chorairán schürt den Aufstand; ein Mäßiger, der ihn verhindern wollte, wird mit den Unschuldigen eingekerkert und gefoltert.',
        'Escalada: el monfí Andrés el Chorairán aviva la rebelión; un moderado que trató de impedirla es encarcelado y torturado junto a inocentes.',
        'Escalatie: de bandiet Andrés el Chorairán wakkert de opstand aan; een gematigde die haar wilde stoppen wordt met de onschuldigen gevangengezet en gemarteld.',
        'Upptrappning: fredlöse Andrés el Chorairán eldar på upproret; en måttfull man som försökte stoppa det fängslas och torteras med de oskyldiga.'
      ),
      transcription:
        '«Andrés el Chorairán monfí natural de Sedella, concitó los ánimos de los suyos para escitarles a la rebelión. La gente moza que comenzaba a alborotarse la contuvo el morisco Luis Mendez, hombre influyente en Canillas, pero no pudo evitar que atacaran una venta de un cristiano, ni que mataran en ella a varias personas. Acudió el Juez de Vélez Pedro Guerra y muchos inocentes moriscos, entre ellos Luis Mendez que había impedido la revuelta, fueron presos y cargados de cadenas y sometidos a crueles tormentos».',
      translation: l(
        'Andrés el Chorairán, an outlaw from Sedella, stirred up his people to rouse them to revolt. The young men who were beginning to riot were held back by the Morisco Luis Méndez, an influential man in Canillas, but he could not stop them from attacking the inn of a Christian and killing several people there. The judge of Vélez, Pedro Guerra, arrived, and many innocent Moriscos — among them Luis Méndez, who had prevented the uprising — were seized, loaded with chains and subjected to cruel torture.',
        'Andrés el Chorairán, ein Bandit aus Sedella, wiegelte die Seinen auf, um sie zum Aufstand zu treiben. Die jungen Männer, die zu randalieren begannen, hielt der Moriske Luis Méndez zurück, ein einflussreicher Mann in Canillas; doch er konnte nicht verhindern, dass sie das Gasthaus eines Christen überfielen und dort mehrere Menschen töteten. Der Richter von Vélez, Pedro Guerra, rückte an, und viele unschuldige Morisken — unter ihnen Luis Méndez, der den Aufruhr verhindert hatte — wurden gefangen, in Ketten gelegt und grausam gefoltert.',
        'Andrés el Chorairán, monfí natural de Sedella, encendió los ánimos de los suyos para incitarlos a la rebelión. A los jóvenes que empezaban a alborotarse los contuvo el morisco Luis Méndez, hombre influyente en Canillas, pero no pudo evitar que atacaran la venta de un cristiano y que mataran allí a varias personas. Acudió el juez de Vélez, Pedro Guerra, y muchos moriscos inocentes —entre ellos Luis Méndez, que había impedido la revuelta— fueron apresados, cargados de cadenas y sometidos a crueles tormentos.',
        'Andrés el Chorairán, een vogelvrije uit Sedella, hitste de zijnen op om hen tot opstand te bewegen. De jonge mannen die begonnen te muiten werden tegengehouden door de Morisk Luis Méndez, een invloedrijk man in Canillas, maar hij kon niet verhinderen dat ze de herberg van een christen aanvielen en er verscheidene mensen doodden. De rechter van Vélez, Pedro Guerra, kwam eraan, en veel onschuldige Morisken — onder wie Luis Méndez, die de opstand had verhinderd — werden gevangen, in de ketenen geslagen en wreed gemarteld.',
        'Andrés el Chorairán, en fredlös från Sedella, hetsade de sina för att driva dem till uppror. De unga män som började ställa till oro hejdades av morisken Luis Méndez, en inflytelserik man i Canillas, men han kunde inte hindra att de anföll en kristens värdshus och dödade flera personer där. Domaren i Vélez, Pedro Guerra, kom, och många oskyldiga morisker — bland dem Luis Méndez, som hade förhindrat upproret — greps, belades med kedjor och utsattes för grym tortyr.'
      )
    },
    {
      n: 4,
      titleEs: 'Los Jofores',
      scene: l(
        'Prophecy and pilgrimage: an elder invokes Allah’s protection and urges the people not to abandon their lucky ground.',
        'Prophezeiung und Wallfahrt: Ein Alter erfleht Allahs Schutz und beschwört die Menschen, ihren glückbringenden Boden nicht zu verlassen.',
        'Profecía y romería: un anciano implora la protección de Alá y exhorta a la gente a no abandonar su tierra afortunada.',
        'Voorspelling en bedevaart: een oude man smeekt om Allahs bescherming en spoort de mensen aan hun gelukkige grond niet te verlaten.',
        'Profetia och vallfärd: en gammal man åkallar Allahs beskydd och manar folket att inte överge sin lyckosamma mark.'
      ),
      transcription:
        '«Días después trasladáronse en romería, almorabito de la Rábita de Canillas para impetrar la protección de Alá y el viejo musulmán dirigió la palabra a la muchedumbre, exhortándoles a que no abandonasen el lugar. Cuando en un momento de la sublevación los moriscos decidieron abandonarlo para unirse a los de otro lugar más seguro, el peñón de Frigiliana, un viejo, el Jorrón de Leimón, protestó del acuerdo, porque decía que aquel había sido lugar dichoso, donde habían tenido siempre, felices sucesos los moros.»',
      translation: l(
        'Days later they went in pilgrimage to the hermitage (rábita) of Canillas to beg for the protection of Allah, and the old Muslim addressed the crowd, urging them not to abandon the place. When, at one point in the uprising, the Moriscos decided to leave it and join those at a safer place, the Peñón de Frigiliana, an old man, the Jorrón de Leimón, protested against the decision, for he said that this had been a fortunate place, where the Moors had always met with happy fortunes.',
        'Tage später zogen sie in einer Wallfahrt zur Einsiedelei (Rábita) von Canillas, um Allahs Schutz zu erflehen, und der alte Muslim wandte sich an die Menge und beschwor sie, den Ort nicht zu verlassen. Als die Morisken in einem Augenblick des Aufstands beschlossen, ihn zu verlassen und sich denen an einem sichereren Ort anzuschließen, dem Peñón de Frigiliana, widersprach ein Alter, der Jorrón de Leimón, dem Beschluss; denn er sagte, dies sei ein glückbringender Ort gewesen, wo den Mauren stets Gutes widerfahren sei.',
        'Días después fueron en romería a la rábita de Canillas para implorar la protección de Alá, y el anciano musulmán se dirigió a la muchedumbre, exhortándola a no abandonar el lugar. Cuando, en un momento de la sublevación, los moriscos decidieron dejarlo para unirse a los de un lugar más seguro, el peñón de Frigiliana, un anciano, el Jorrón de Leimón, protestó contra el acuerdo, porque decía que aquel había sido un lugar dichoso, donde los moros siempre habían tenido felices sucesos.',
        'Dagen later trokken ze in bedevaart naar de kluis (rábita) van Canillas om Allahs bescherming af te smeken, en de oude moslim sprak de menigte toe en drong er bij hen op aan de plek niet te verlaten. Toen de Morisken op een moment van de opstand besloten die te verlaten om zich aan te sluiten bij die op een veiliger plek, de Peñón de Frigiliana, protesteerde een oude man, de Jorrón de Leimón, tegen het besluit; want hij zei dat dit een gelukkige plek was geweest, waar de Moren altijd goede lotgevallen hadden gekend.',
        'Dagar senare gick de i vallfärd till eremitaget (rábita) i Canillas för att bönfalla om Allahs beskydd, och den gamle muslimen talade till hopen och manade dem att inte överge platsen. När moriskerna i ett ögonblick av upproret beslöt att lämna den för att förena sig med dem på en säkrare plats, Peñón de Frigiliana, protesterade en gammal man, Jorrón de Leimón, mot beslutet; för han sade att detta hade varit en lycklig plats, där morerna alltid hade rönt goda öden.'
      )
    },
    {
      n: 5,
      titleEs: 'La Identidad',
      scene: l(
        'The old banner with green crescents reappears; the noble Martín Alguacil is raised on a white mule as a leader.',
        'Das alte Banner mit grünen Halbmonden taucht wieder auf; der edle Martín Alguacil wird auf einem weißen Maultier zum Anführer erhoben.',
        'Reaparece la vieja bandera de lunas verdes; el noble Martín Alguacil es alzado sobre una mula blanca como caudillo.',
        'De oude banier met groene halvemanen duikt weer op; de edele Martín Alguacil wordt op een witte muildier tot leider verheven.',
        'Den gamla fanan med gröna halvmånar dyker upp igen; den ädle Martín Alguacil lyfts upp på en vit mulåsna till ledare.'
      ),
      transcription:
        '«Aun no era bien acabado de alzar el pueblo, cuando pareció en la plaza del lugar una bandera de tafetán colorado, ya deslucida de vieja, con unas lunas verdes muy grandes, que la tenía guardada Francisco de Roxas, Morisco de aquel lugar, que había sido de sus pasados en tiempo Moros. Alzados los vecinos de Canillas de Aceytuno; los de Cómpeta movidos por Martín Alguacil, hombre noble y de mucha autoridad, tomoaron las armas, y ataviándole con ricos almayzares de seda y oro, le pusieron sobre una mula blanca y llegaron todos a besarle la mano y la ropa».',
      translation: l(
        'The village had scarcely risen when there appeared in the square a banner of red taffeta, already faded with age, bearing very large green crescents — kept until then by Francisco de Rojas, a Morisco of that place, to whom it had come from his forebears in the time of the Moors. With the people of Canillas de Aceituno risen, those of Cómpeta, moved by Martín Alguacil, a noble man of great authority, took up arms; and dressing him in rich sashes of silk and gold, they set him on a white mule, and all came to kiss his hand and his robe.',
        'Kaum hatte sich der Ort erhoben, als auf dem Platz ein Banner aus rotem Taft erschien, vom Alter schon verblichen, mit sehr großen grünen Halbmonden — bis dahin verwahrt von Francisco de Rojas, einem Morisken jenes Ortes, dem es von seinen Vorfahren aus der Maurenzeit geblieben war. Als sich die Bewohner von Canillas de Aceituno erhoben hatten, ergriffen die von Cómpeta, angeführt von Martín Alguacil, einem edlen Mann von großem Ansehen, die Waffen; und sie schmückten ihn mit reichen Schärpen aus Seide und Gold, setzten ihn auf ein weißes Maultier, und alle kamen, ihm Hand und Gewand zu küssen.',
        'Apenas se había alzado el pueblo cuando apareció en la plaza una bandera de tafetán rojo, ya deslucida por el tiempo, con unas lunas verdes muy grandes, que había guardado Francisco de Rojas, morisco de aquel lugar, y que le venía de sus antepasados del tiempo de los moros. Alzados los vecinos de Canillas de Aceituno, los de Cómpeta, movidos por Martín Alguacil, hombre noble y de mucha autoridad, tomaron las armas; y ataviándolo con ricos almaizares de seda y oro, lo pusieron sobre una mula blanca, y todos llegaron a besarle la mano y la ropa.',
        'Nauwelijks was het dorp in opstand of op het plein verscheen een vaandel van rood taf, al verbleekt van ouderdom, met zeer grote groene halvemanen — tot dan bewaard door Francisco de Rojas, een Morisk van die plaats, aan wie het van zijn voorouders uit de Moorse tijd was toegekomen. Nu de inwoners van Canillas de Aceituno in opstand waren, grepen die van Cómpeta, aangevoerd door Martín Alguacil, een edel man van groot gezag, naar de wapens; en ze tooiden hem met rijke sjerpen van zijde en goud, zetten hem op een witte muildier, en allen kwamen zijn hand en zijn gewaad kussen.',
        'Byn hade knappt rest sig när det på torget dök upp en fana av rött taft, redan blekt av ålder, med mycket stora gröna halvmånar — dittills förvarad av Francisco de Rojas, en morisk från den orten, till vilken den kommit från hans förfäder i morernas tid. När invånarna i Canillas de Aceituno hade rest sig grep de i Cómpeta, ledda av Martín Alguacil, en ädel man med stor auktoritet, till vapen; och de smyckade honom med rika sjalar av siden och guld, satte honom på en vit mulåsna, och alla kom fram för att kyssa hans hand och hans dräkt.'
      )
    },
    {
      n: 6,
      titleEs: 'El Éxodo',
      scene: l(
        'Late April 1569: a mass of people abandon their homes and set out for the Peñón — the panel jumps straight to the defeat of 11 June.',
        'Ende April 1569: Eine Menschenmenge verlässt Haus und Hof und zieht zum Peñón — die Tafel springt direkt zur Niederlage vom 11. Juni.',
        'Finales de abril de 1569: una multitud abandona sus casas y marcha al Peñón; el azulejo salta directo a la derrota del 11 de junio.',
        'Eind april 1569: een mensenmassa verlaat huis en haard en trekt naar de Peñón — het paneel springt meteen naar de nederlaag van 11 juni.',
        'Slutet av april 1569: en människomassa överger sina hem och drar mot Peñón — panelen hoppar rakt till nederlaget den 11 juni.'
      ),
      transcription:
        '«En los últimos días de Abril de 1569, esta gran concentración humana, cerradas las puertas de sus casas, abandonados sus hogares, despobladas las alquerías, campos y caseríos, portando sus ajuares, herramienatas y armas, puso rumbo a Frigiliana. Sólo nos resta imaginar la gran polvaredas de almas destacada en las alturas del Mayarín, atravesando cerros y arroyos, camino de la triste senda que los conduciría a la muerte y la derrota. Llegados a Frigiliana se instalaron en la Cordillera del Fuerte, donde el 11 de Junio, día de S. Bernabé, fueron atacados por los cristianos».',
      translation: l(
        'In the last days of April 1569, this great mass of people — the doors of their houses shut, their homes abandoned, the farmsteads, fields and hamlets left empty — set out for Frigiliana carrying their belongings, tools and weapons. We can only imagine the great cloud of souls outlined on the heights of the Mayarín, crossing hills and streams, on the sad path that would lead them to death and defeat. Reaching Frigiliana, they settled on the ridge of the Fort, where on 11 June, the feast of St Barnabas, they were attacked by the Christians.',
        'In den letzten Apriltagen 1569 machte sich diese große Menschenmenge — die Türen ihrer Häuser verschlossen, die Heime verlassen, die Gehöfte, Felder und Weiler entvölkert — auf den Weg nach Frigiliana und trug ihr Hab und Gut, Werkzeug und Waffen. Wir können uns nur die große Wolke von Seelen vorstellen, die sich auf den Höhen des Mayarín abzeichnete, über Hügel und Bäche zog, auf dem traurigen Pfad, der sie in Tod und Niederlage führen sollte. In Frigiliana angekommen, ließen sie sich auf dem Bergrücken des Forts nieder, wo sie am 11. Juni, dem Tag des heiligen Barnabas, von den Christen angegriffen wurden.',
        'En los últimos días de abril de 1569, esta gran concentración humana —cerradas las puertas de sus casas, abandonados sus hogares, despobladas las alquerías, campos y caseríos— puso rumbo a Frigiliana llevando sus ajuares, herramientas y armas. Solo nos queda imaginar la gran polvareda de almas recortada en las alturas del Mayarín, atravesando cerros y arroyos, camino de la triste senda que los conduciría a la muerte y la derrota. Llegados a Frigiliana, se instalaron en la cordillera del Fuerte, donde el 11 de junio, día de San Bernabé, fueron atacados por los cristianos.',
        'In de laatste dagen van april 1569 trok deze grote mensenmassa — de deuren van hun huizen gesloten, hun woningen verlaten, de gehuchten, velden en boerderijen ontvolkt — naar Frigiliana, hun huisraad, gereedschap en wapens meedragend. We kunnen ons alleen de grote wolk van zielen voorstellen die zich aftekende op de hoogten van de Mayarín, over heuvels en beken, op het droeve pad dat hen naar de dood en de nederlaag zou voeren. In Frigiliana aangekomen vestigden ze zich op de bergkam van het Fort, waar ze op 11 juni, de dag van Sint-Barnabas, door de christenen werden aangevallen.',
        'I de sista dagarna av april 1569 gav sig denna stora människomassa — dörrarna till deras hus stängda, hemmen övergivna, gårdarna, fälten och byarna avfolkade — i väg mot Frigiliana med sitt bohag, sina verktyg och vapen. Vi kan bara föreställa oss det stora molnet av själar som tecknade sig mot höjderna vid Mayarín, tvärs över kullar och bäckar, på den sorgliga stig som skulle föra dem till död och nederlag. Framme i Frigiliana slog de sig ner på Fortets bergsrygg, där de den 11 juni, på Sankt Barnabas dag, angreps av de kristna.'
      )
    },
    {
      n: 7,
      titleEs: 'Los Adalides',
      scene: l(
        'The defenders gather on the strong Peñón near the sea and name Hernando el Darra — descended from the village’s former alcaides — their commander.',
        'Die Verteidiger sammeln sich auf dem starken Peñón nahe dem Meer und ernennen Hernando el Darra — Nachfahre der einstigen Alcaides des Ortes — zum Anführer.',
        'Los defensores se reúnen en el fuerte Peñón, cerca del mar, y nombran a Hernando el Darra —descendiente de los antiguos alcaides del pueblo— su caudillo.',
        'De verdedigers verzamelen zich op de sterke Peñón bij zee en benoemen Hernando el Darra — afstammeling van de vroegere alcaides van het dorp — tot aanvoerder.',
        'Försvararna samlas på den starka Peñón nära havet och utser Hernando el Darra — ättling till byns forna alcaides — till sin anförare.'
      ),
      transcription:
        '«Y pareciéndoles que estarían mejor todos juntos en el Peñón de Frigiliana, que era muy fuerte, y cerca del mar, enviaron a decir a los del fuerte de Sedella, que se viniesen a juntar con ellos; nombraron por su caudillo y capitán general a Hernando el Darra, que tenía entre ellos opinión de muy noble, porque sus pasados en tiempo de Moros eran alcaydes y alguaciles de Fregiliana.»',
      translation: l(
        'And thinking they would be better all together on the Peñón de Frigiliana, which was very strong and near the sea, they sent word to those in the fort of Sedella to come and join them; and they named as their leader and captain-general Hernando el Darra, who was held among them to be very noble, because his forebears in the time of the Moors had been the alcaides and bailiffs of Frigiliana.',
        'Und da es ihnen schien, sie seien alle zusammen besser auf dem Peñón de Frigiliana aufgehoben, der sehr stark und nahe dem Meer lag, ließen sie denen im Fort von Sedella ausrichten, sie sollten kommen und sich ihnen anschließen; und sie ernannten Hernando el Darra zu ihrem Anführer und Generalkapitän, der unter ihnen als sehr edel galt, weil seine Vorfahren zur Maurenzeit die Alcaides und Amtleute von Frigiliana gewesen waren.',
        'Y pareciéndoles que estarían mejor todos juntos en el Peñón de Frigiliana, que era muy fuerte y estaba cerca del mar, mandaron aviso a los del fuerte de Sedella para que vinieran a unirse con ellos; y nombraron por su caudillo y capitán general a Hernando el Darra, a quien tenían por muy noble, porque sus antepasados, en tiempo de los moros, habían sido alcaides y alguaciles de Frigiliana.',
        'En omdat het hun beter leek allen samen te zijn op de Peñón de Frigiliana, die zeer sterk was en dicht bij zee lag, lieten ze aan die van het fort van Sedella weten dat ze zich bij hen moesten voegen; en ze benoemden tot hun aanvoerder en opperbevelhebber Hernando el Darra, die onder hen als zeer edel gold, omdat zijn voorouders in de Moorse tijd de alcaides en baljuws van Frigiliana waren geweest.',
        'Och eftersom de tyckte att de var bättre alla samlade på Peñón de Frigiliana, som var mycket stark och låg nära havet, sände de bud till dem i Sedellas fäste att komma och förena sig med dem; och de utsåg till sin hövding och överbefälhavare Hernando el Darra, som bland dem ansågs mycket ädel, eftersom hans förfäder i morernas tid hade varit alcaides och fogdar i Frigiliana.'
      )
    },
    {
      n: 8,
      titleEs: 'Los Cristianos',
      scene: l(
        'The crown’s overwhelming force: the naval commanders Requesens, Bazán and Leiva, and 6,000 men including 800 marines.',
        'Die erdrückende Übermacht der Krone: die Flottenführer Requesens, Bazán und Leiva und 6.000 Mann, darunter 800 Marinesoldaten.',
        'La fuerza abrumadora de la corona: los mandos navales Requesens, Bazán y Leiva, y 6.000 hombres, entre ellos 800 marinos.',
        'De verpletterende overmacht van de kroon: de vlootcommandanten Requesens, Bazán en Leiva, en 6.000 man, waaronder 800 mariniers.',
        'Kronans överväldigande styrka: sjöbefälhavarna Requesens, Bazán och Leiva, och 6 000 man, däribland 800 sjömän.'
      ),
      transcription:
        '«En la empresa tomaron parte fuerzas de mar a las órdenes de don Luis Requesens, de don Álvaro de Bazán y de don Sancho de Leiva. Esa Armada contribuyó eficazmente al buen éxito de la expedición, cooperando a operaciones tan brillantes como la del Peñón de Frigiliana, posición tenida por inexpugnable, y los acometió Requesens al frente de 6.000 hombres, entre los cuales se contaban 800 marinos».',
      translation: l(
        'Naval forces took part in the undertaking under don Luis de Requesens, don Álvaro de Bazán and don Sancho de Leiva. That fleet contributed effectively to the success of the expedition, aiding operations as brilliant as that of the Peñón de Frigiliana, a position held to be impregnable; and Requesens attacked them at the head of 6,000 men, among whom were 800 marines.',
        'An dem Unternehmen nahmen Seestreitkräfte teil, unter dem Befehl von Don Luis de Requesens, Don Álvaro de Bazán und Don Sancho de Leiva. Diese Flotte trug wirksam zum Erfolg der Expedition bei und unterstützte so glänzende Unternehmungen wie die am Peñón de Frigiliana, einer für uneinnehmbar gehaltenen Stellung; und Requesens griff sie an der Spitze von 6.000 Mann an, unter denen sich 800 Marinesoldaten befanden.',
        'En la empresa tomaron parte fuerzas de mar a las órdenes de don Luis de Requesens, don Álvaro de Bazán y don Sancho de Leiva. Esa armada contribuyó eficazmente al éxito de la expedición, cooperando en operaciones tan brillantes como la del Peñón de Frigiliana, posición tenida por inexpugnable; y los acometió Requesens al frente de 6.000 hombres, entre los cuales se contaban 800 marinos.',
        'Aan de onderneming namen zeestrijdkrachten deel onder bevel van don Luis de Requesens, don Álvaro de Bazán en don Sancho de Leiva. Die vloot droeg doeltreffend bij aan het welslagen van de expeditie en ondersteunde zulke schitterende operaties als die bij de Peñón de Frigiliana, een voor onneembaar gehouden stelling; en Requesens viel hen aan aan het hoofd van 6.000 man, onder wie 800 mariniers.',
        'I företaget deltog sjöstridskrafter under befäl av don Luis de Requesens, don Álvaro de Bazán och don Sancho de Leiva. Denna flotta bidrog verksamt till expeditionens framgång och understödde så lysande operationer som den vid Peñón de Frigiliana, en ställning som ansågs ointaglig; och Requesens anföll dem i spetsen för 6 000 man, bland vilka 800 sjösoldater.'
      )
    },
    {
      n: 9,
      titleEs: 'El Asedio',
      scene: l(
        'Asymmetric defence: the Moriscos roll prepared millstones down the steep slope, cutting through the climbing soldiers.',
        'Asymmetrische Verteidigung: Die Morisken rollen präparierte Mühlsteine den steilen Hang hinab und mähen die aufsteigenden Soldaten nieder.',
        'Defensa asimétrica: los moriscos hacen rodar ruedas de molino preparadas por la cuesta, arrasando a los soldados que suben.',
        'Asymmetrische verdediging: de Morisken laten geprepareerde molenstenen langs de steile helling rollen en maaien de klimmende soldaten neer.',
        'Asymmetriskt försvar: moriskerna rullar förberedda kvarnstenar nerför den branta sluttningen och mejar ner de klättrande soldaterna.'
      ),
      transcription:
        '«Las Christianas vanderas comenzaron a subir a toda priessa por la cuesta arriba, mas los Moros comenzaron a defender la subida, arrojando muchas piedras con una endiablada invención, y fue que tenían muchas ruedas de molino apercibidas, y por los ojos atravesados unos maderos muy largos, y estas arrojaban en derecho de las Escuadras de los Christianos que subían por la cuesta, y no avía rueda destas, que no se llevasse de camino cincuenta Soldados, si delante los hallaba».',
      translation: l(
        'The Christian banners began to climb the slope in all haste, but the Moors set about defending the ascent, hurling down many stones by a devilish device: they had readied many millstones, run through the eye with very long beams, and these they rolled straight down onto the Christian squads climbing the slope; and there was not one of these wheels that did not carry off fifty soldiers on its way, if it found them in its path.',
        'Die christlichen Fahnen begannen in aller Eile den Hang hinaufzusteigen, doch die Mauren gingen daran, den Aufstieg zu verteidigen, und schleuderten mit einer teuflischen Erfindung viele Steine herab: Sie hatten zahlreiche Mühlsteine bereitgelegt, durch deren Loch sehr lange Balken gesteckt waren, und diese ließen sie geradewegs auf die christlichen Trupps hinab, die den Hang hinaufstiegen; und es gab keinen dieser Steine, der nicht fünfzig Soldaten mit sich riss, wenn er sie vor sich fand.',
        'Las banderas cristianas empezaron a subir a toda prisa por la cuesta arriba, pero los moros se pusieron a defender la subida, arrojando muchas piedras con una endiablada invención: tenían preparadas muchas ruedas de molino, atravesadas por el ojo con unos maderos muy largos, y estas las lanzaban derechas sobre las escuadras de los cristianos que subían por la cuesta; y no había rueda de estas que no se llevara por delante a cincuenta soldados, si los encontraba en su camino.',
        'De christelijke vaandels begonnen in allerijl de helling op te klimmen, maar de Moren gingen de bestijging verdedigen en wierpen met een duivels vernuft vele stenen naar beneden: ze hadden talrijke molenstenen klaargelegd, door het oog gestoken met zeer lange balken, en die lieten ze recht neer op de christelijke troepen die de helling opklommen; en er was geen van die stenen die niet vijftig soldaten meesleurde, als hij ze op zijn weg vond.',
        'De kristna fanorna började i all hast klättra uppför sluttningen, men morerna gick till att försvara uppstigningen och slungade ner många stenar med en djävulsk uppfinning: de hade gjort i ordning många kvarnstenar, genomdragna i hålet med mycket långa bjälkar, och dessa rullade de rakt ner mot de kristna skvadronerna som klättrade uppför sluttningen; och det fanns ingen av dessa stenar som inte förde med sig femtio soldater på vägen, om den fann dem framför sig.'
      )
    },
    {
      n: 10,
      titleEs: 'Las Moriscas',
      scene: l(
        'The women fight beside the men and, seeing the fort lost, throw themselves from the cliffs rather than be enslaved.',
        'Die Frauen kämpfen an der Seite der Männer und stürzen sich, als das Fort verloren ist, von den Klippen, statt versklavt zu werden.',
        'Las mujeres pelean junto a los hombres y, perdido el fuerte, se despeñan por los riscos antes que ser esclavizadas.',
        'De vrouwen vechten naast de mannen en storten zich, als het fort verloren is, van de rotsen in plaats van tot slaaf gemaakt te worden.',
        'Kvinnorna slåss vid männens sida och störtar sig, när fästet är förlorat, utför klipporna hellre än att förslavas.'
      ),
      transcription:
        '«Hubo algunas Moras que pelearon como esforzados varones, ayudando a sus maridos, hermanos y hijos: y quando vieron el fuerte perdido, se despeñaron por las peñas más agrias, quiriendo más morir hechas pedazos, que venir en poder de Christianos. A otras no les faltó ánimos para ponerse en cobro con sus hijos en los hombros, saltando como cabras de peña en peña».',
      translation: l(
        'There were some Moorish women who fought like valiant men, helping their husbands, brothers and sons; and when they saw the fort lost, they threw themselves from the harshest crags, choosing rather to die dashed to pieces than to fall into the hands of the Christians. Others did not lack the courage to save themselves with their children on their shoulders, leaping like goats from rock to rock.',
        'Es gab einige maurische Frauen, die wie tapfere Männer kämpften und ihren Männern, Brüdern und Söhnen beistanden; und als sie das Fort verloren sahen, stürzten sie sich von den schroffsten Felsen, lieber in Stücke zerschmettert sterbend, als in die Hände der Christen zu fallen. Anderen fehlte der Mut nicht, sich mit ihren Kindern auf den Schultern in Sicherheit zu bringen und wie Ziegen von Fels zu Fels zu springen.',
        'Hubo algunas moras que pelearon como esforzados varones, ayudando a sus maridos, hermanos e hijos; y cuando vieron el fuerte perdido, se despeñaron por las peñas más ásperas, prefiriendo morir hechas pedazos antes que caer en poder de los cristianos. A otras no les faltó ánimo para ponerse a salvo con sus hijos a los hombros, saltando como cabras de peña en peña.',
        'Er waren enkele Moorse vrouwen die als dappere mannen vochten en hun echtgenoten, broers en zonen bijstonden; en toen ze het fort verloren zagen, stortten ze zich van de ruwste rotsen, liever aan stukken te pletter vallend dan in handen van de christenen te vallen. Anderen ontbrak het niet aan moed om zich met hun kinderen op de schouders in veiligheid te brengen en als geiten van rots tot rots te springen.',
        'Det fanns några moriska kvinnor som stred som tappra män och hjälpte sina män, bröder och söner; och när de såg fästet förlorat störtade de sig utför de kargaste klipporna, hellre döende krossade i stycken än att falla i de kristnas händer. Andra saknade inte mod att rädda sig med sina barn på axlarna och hoppa som getter från klippa till klippa.'
      )
    },
    {
      n: 11,
      titleEs: 'La Diáspora',
      scene: l(
        'The toll: around 1,800 dead and some 3,000 taken as slaves — “all paid for in Christian blood”.',
        'Die Bilanz: rund 1.800 Tote und etwa 3.000 in die Sklaverei geführt — „alles bezahlt mit christlichem Blut".',
        'El balance: unos 1.800 muertos y cerca de 3.000 tomados como esclavos: «todo cobrado a precio de christiana sangre».',
        'De tol: zo’n 1.800 doden en ongeveer 3.000 tot slaaf gemaakt — „alles betaald met christelijk bloed".',
        'Facit: omkring 1 800 döda och cirka 3 000 tagna som slavar — ”allt betalt med kristet blod”.'
      ),
      transcription:
        '«Ganado y saqueado el fuerte fueron captivas más de tres mil almas. Dentro del fuerte murieron quinientos hombres, la mayor parte viejos; mujeres y niños casi mil y trescientos. Cristianos fueron heridos más de seiscientos, muriendo en pelea pasados de trescientos soldados. El saco fué grande y se tomaron esclavos muchas moras y muchachos, aunque todo fué cobrado a precio de christiana sangre».',
      translation: l(
        'The fort taken and sacked, more than three thousand souls were made captive. Within the fort five hundred men died, most of them old; women and children almost one thousand three hundred. More than six hundred Christians were wounded, and over three hundred soldiers died in the fighting. The plunder was great, and many Moorish women and boys were taken as slaves — though all of it was paid for in Christian blood.',
        'Als das Fort erobert und geplündert war, wurden mehr als dreitausend Seelen gefangen genommen. Im Fort starben fünfhundert Männer, die meisten alt; Frauen und Kinder fast eintausenddreihundert. Über sechshundert Christen wurden verwundet, und mehr als dreihundert Soldaten fielen im Kampf. Die Beute war groß, und viele maurische Frauen und Knaben wurden als Sklaven genommen — doch alles wurde mit christlichem Blut bezahlt.',
        'Ganado y saqueado el fuerte, fueron cautivadas más de tres mil almas. Dentro del fuerte murieron quinientos hombres, la mayor parte ancianos; mujeres y niños, casi mil trescientos. Fueron heridos más de seiscientos cristianos, y murieron en combate más de trescientos soldados. El saqueo fue grande y se tomaron como esclavos a muchas moras y muchachos, aunque todo se cobró a precio de sangre cristiana.',
        'Nadat het fort was ingenomen en geplunderd, werden meer dan drieduizend zielen gevangengenomen. Binnen het fort stierven vijfhonderd mannen, de meesten oud; vrouwen en kinderen bijna dertienhonderd. Meer dan zeshonderd christenen raakten gewond, en meer dan driehonderd soldaten sneuvelden in het gevecht. De buit was groot, en veel Moorse vrouwen en jongens werden als slaven meegevoerd — al werd alles betaald met christelijk bloed.',
        'När fästet var intaget och plundrat togs mer än tretusen själar till fånga. Inne i fästet dog femhundra män, de flesta gamla; kvinnor och barn nästan ettusen trehundra. Mer än sexhundra kristna sårades, och över trehundra soldater dog i striden. Bytet var stort, och många moriska kvinnor och pojkar togs som slavar — fast allt betalades med kristet blod.'
      )
    },
    {
      n: 12,
      titleEs: 'El Holocausto',
      scene: l(
        'Silence over the village, and Martín Alguacil’s words on dying for the homeland. The title itself is a deliberate modern choice.',
        'Stille über dem Dorf und Martín Alguacils Worte über den Tod für die Heimat. Schon der Titel ist eine bewusste moderne Setzung.',
        'Silencio sobre el pueblo y las palabras de Martín Alguacil sobre morir por la patria. El propio título es una elección moderna deliberada.',
        'Stilte over het dorp en de woorden van Martín Alguacil over sterven voor het vaderland. Al de titel is een bewuste moderne keuze.',
        'Tystnad över byn och Martín Alguacils ord om att dö för fäderneslandet. Redan titeln är ett medvetet modernt val.'
      ),
      transcription:
        '«Un angustioso silencio se hizo sobre la alquería de Frigiliana. Allí quedaba el monte abandonado, los cuerpos muertos, la voz viva de Martín Alguacil: "Si defendiendo nuestra libertad muriésemos peleando, la madre tierra recibirá lo que produxo; y al que faltare sepultura que le esconda, no le faltará cielo que le cubra. No quiera Dios que se diga que los hombres de Bentomiz no osaron morir por su patria"».',
      translation: l(
        'An anguished silence fell over the hamlet of Frigiliana. There remained the abandoned mountain, the dead bodies, and the living voice of Martín Alguacil: “If, defending our freedom, we should die fighting, the mother earth will receive what she brought forth; and whoever lacks a grave to hide him will not lack a sky to cover him. God forbid it be said that the men of Bentomiz did not dare to die for their homeland.”',
        'Ein beklommenes Schweigen legte sich über den Weiler Frigiliana. Zurück blieben der verlassene Berg, die toten Körper und die lebendige Stimme Martín Alguacils: „Wenn wir im Kampf für unsere Freiheit sterben, wird die Mutter Erde zurücknehmen, was sie hervorgebracht hat; und wem ein Grab fehlt, das ihn birgt, dem wird kein Himmel fehlen, der ihn deckt. Gott verhüte, dass man sage, die Männer von Bentomiz hätten nicht gewagt, für ihre Heimat zu sterben.“',
        'Un angustioso silencio se hizo sobre la alquería de Frigiliana. Allí quedaban el monte abandonado, los cuerpos muertos y la voz viva de Martín Alguacil: «Si, defendiendo nuestra libertad, muriéramos peleando, la madre tierra recibirá lo que produjo; y a quien le falte sepultura que lo esconda, no le faltará cielo que lo cubra. No quiera Dios que se diga que los hombres de Bentomiz no osaron morir por su patria».',
        'Een beklemmende stilte daalde neer over het gehucht Frigiliana. Daar bleven de verlaten berg, de dode lichamen en de levende stem van Martín Alguacil: „Als wij, onze vrijheid verdedigend, vechtend zouden sterven, zal moeder aarde terugnemen wat zij voortbracht; en wie een graf ontbeert dat hem verbergt, zal geen hemel ontberen die hem bedekt. God verhoede dat men zegt dat de mannen van Bentomiz niet durfden te sterven voor hun vaderland.“',
        'En ångestfylld tystnad lade sig över byn Frigiliana. Kvar fanns det övergivna berget, de döda kropparna och Martín Alguacils levande röst: ”Om vi, försvarande vår frihet, skulle dö i strid, ska moder jord ta emot vad hon frambringade; och den som saknar en grav att gömma honom ska inte sakna en himmel att täcka honom. Gud förbjude att det sägs att männen från Bentomiz inte vågade dö för sitt fädernesland.”'
      )
    }
  ],
  historiography: {
    title: l(
      'Where the panels and the record differ',
      'Wo Tafeln und Beleg auseinandergehen',
      'En qué difieren los azulejos y lo documentado',
      'Waar de panelen en de bronnen verschillen',
      'Där panelerna och källorna skiljer sig'
    ),
    intro: l(
      'The panels are memory culture, not a neutral archive. They rest on real chronicles — Luis del Mármol Carvajal and Diego Hurtado de Mendoza — but they shape the story for effect. Three differences are worth knowing.',
      'Die Tafeln sind Erinnerungskultur, kein neutrales Archiv. Sie stützen sich auf echte Chroniken — Luis del Mármol Carvajal und Diego Hurtado de Mendoza —, formen die Geschichte aber mit Wirkung. Drei Abweichungen lohnt es zu kennen.',
      'Los azulejos son memoria, no un archivo neutral. Se apoyan en crónicas reales —Luis del Mármol Carvajal y Diego Hurtado de Mendoza— pero moldean el relato con intención. Vale la pena conocer tres diferencias.',
      'De panelen zijn geheugencultuur, geen neutraal archief. Ze steunen op echte kronieken — Luis del Mármol Carvajal en Diego Hurtado de Mendoza — maar vormen het verhaal met effect. Drie verschillen zijn de moeite waard.',
      'Panelerna är minneskultur, inte ett neutralt arkiv. De vilar på verkliga krönikor — Luis del Mármol Carvajal och Diego Hurtado de Mendoza — men formar berättelsen för effekt. Tre skillnader är värda att känna till.'
    ),
    items: [
      {
        title: l(
          'The 28 May 1569 assault is left out',
          'Der Angriff vom 28. Mai 1569 fehlt',
          'Se omite el asalto del 28 de mayo de 1569',
          'De aanval van 28 mei 1569 ontbreekt',
          'Anfallet den 28 maj 1569 utelämnas'
        ),
        text: l(
          'The panels compress the siege to the decisive royal assault of 11 June. The documented record has two stages: a first royal attack on 28 May 1569 that the Moriscos repelled, and only then the far larger 11 June assault that broke them. The panels drop the Morisco defensive victory for a cleaner arc of doom.',
          'Die Tafeln verdichten die Belagerung auf den entscheidenden Angriff vom 11. Juni. Der Beleg kennt zwei Stufen: einen ersten königlichen Angriff am 28. Mai 1569, den die Morisken abwehrten, und erst danach den weit größeren am 11. Juni, der sie brach. Die Tafeln lassen den moriskischen Abwehrsieg zugunsten eines geradlinigen Verhängnisses weg.',
          'Los azulejos comprimen el asedio al asalto decisivo del 11 de junio. Lo documentado tiene dos fases: un primer ataque real el 28 de mayo de 1569 que los moriscos rechazaron y, solo después, el asalto mucho mayor del 11 de junio que los venció. Los azulejos omiten la victoria defensiva morisca por un arco de fatalidad más limpio.',
          'De panelen comprimeren het beleg tot de beslissende aanval van 11 juni. De bronnen kennen twee fasen: een eerste koninklijke aanval op 28 mei 1569 die de Morisken afsloegen, en pas daarna de veel grotere aanval van 11 juni die hen brak. De panelen laten de Moriskse verdedigingsoverwinning weg voor een strakkere lijn van onheil.',
          'Panelerna komprimerar belägringen till det avgörande anfallet den 11 juni. Källorna har två skeden: ett första kungligt anfall den 28 maj 1569 som moriskerna slog tillbaka, och först därefter det långt större den 11 juni som knäckte dem. Panelerna utelämnar moriskernas försvarsseger för en renare undergångsbåge.'
        )
      },
      {
        title: l(
          '“Holocausto” and “patria” are modern words',
          '„Holocausto" und „patria" sind moderne Wörter',
          '«Holocausto» y «patria» son palabras modernas',
          '„Holocausto" en „patria" zijn moderne woorden',
          '”Holocausto” och ”patria” är moderna ord'
        ),
        text: l(
          'The twelfth panel is titled “El Holocausto” and has Martín Alguacil die for the “patria”. Both are twentieth-century terms, foreign to the sixteenth-century actors, who thought in rebellion, punishment and pacification. The choice marks the panels as a 1982 memorial, made as Andalusia distanced itself from centralist history.',
          'Die zwölfte Tafel heißt „El Holocausto" und lässt Martín Alguacil für die „patria" sterben. Beides sind Begriffe des 20. Jahrhunderts, den Akteuren des 16. fremd, die in Rebellion, Strafe und Befriedung dachten. Die Wahl weist die Tafeln als Mahnmal von 1982 aus, entstanden, als sich Andalusien von der zentralistischen Geschichtsschreibung abwandte.',
          'El duodécimo azulejo se titula «El Holocausto» y hace morir a Martín Alguacil por la «patria». Ambos son términos del siglo XX, ajenos a los actores del XVI, que pensaban en rebelión, castigo y pacificación. La elección señala los azulejos como un memorial de 1982, hecho cuando Andalucía se distanciaba de la historia centralista.',
          'Het twaalfde paneel heet „El Holocausto" en laat Martín Alguacil sterven voor de „patria". Beide zijn twintigste-eeuwse termen, vreemd aan de zestiende-eeuwse actoren, die in opstand, straf en pacificatie dachten. De keuze markeert de panelen als een monument uit 1982, gemaakt toen Andalusië afstand nam van de centralistische geschiedenis.',
          'Den tolfte panelen heter ”El Holocausto” och låter Martín Alguacil dö för ”patria”. Båda är 1900-talstermer, främmande för 1500-talets aktörer, som tänkte i uppror, straff och pacificering. Valet märker panelerna som ett minnesmärke från 1982, gjort när Andalusien tog avstånd från den centralistiska historien.'
        )
      },
      {
        title: l(
          'The moral is inverted',
          'Die Wertung ist umgekehrt',
          'La valoración está invertida',
          'Het oordeel is omgekeerd',
          'Värderingen är omvänd'
        ),
        text: l(
          'The chronicles were written from the crown’s side, about rebels to be punished. The panels keep the facts but flip the judgement: the Moriscos become tragic defenders of freedom and homeland. That is a fair, deliberate reinterpretation — worth reading as such rather than as a neutral record.',
          'Die Chroniken sind aus Sicht der Krone geschrieben, über zu bestrafende Rebellen. Die Tafeln behalten die Fakten, drehen aber die Wertung: Die Morisken werden zu tragischen Verteidigern von Freiheit und Heimat. Das ist eine legitime, bewusste Neudeutung — als solche zu lesen, nicht als neutraler Bericht.',
          'Las crónicas se escribieron desde el lado de la corona, sobre rebeldes a castigar. Los azulejos conservan los hechos pero invierten el juicio: los moriscos pasan a ser trágicos defensores de la libertad y la patria. Es una reinterpretación legítima y deliberada, que conviene leer como tal y no como un registro neutral.',
          'De kronieken zijn vanaf de kant van de kroon geschreven, over te bestraffen rebellen. De panelen behouden de feiten maar keren het oordeel om: de Morisken worden tragische verdedigers van vrijheid en vaderland. Dat is een legitieme, bewuste herinterpretatie — als zodanig te lezen, niet als een neutraal verslag.',
          'Krönikorna skrevs från kronans sida, om rebeller som skulle straffas. Panelerna behåller fakta men vänder på domen: moriskerna blir tragiska försvarare av frihet och fädernesland. Det är en rimlig, medveten omtolkning — värd att läsa som sådan, inte som ett neutralt protokoll.'
        )
      }
    ]
  },
  closing: {
    title: l(
      'Walk it, then read the rest of the old town',
      'Erst gehen, dann den Rest der Altstadt lesen',
      'Recorredlos y luego leed el resto del casco antiguo',
      'Loop het, lees dan de rest van de oude kern',
      'Vandra den, läs sedan resten av gamla stan'
    ),
    lead: l(
      'The panels are the thread; the old town around them is the cloth. From Casa AMARA in the lower centre you reach the start of the route in a few minutes.',
      'Die Tafeln sind der Faden; die Altstadt drumherum ist der Stoff. Von Casa AMARA im unteren Ortskern erreicht ihr den Anfang der Route in wenigen Minuten.',
      'Los azulejos son el hilo; el casco antiguo alrededor es la tela. Desde Casa AMARA, en la parte baja del centro, llegáis al inicio de la ruta en pocos minutos.',
      'De panelen zijn de draad; de oude kern eromheen is de stof. Vanaf Casa AMARA in het lagere centrum bereik je het begin van de route in een paar minuten.',
      'Panelerna är tråden; gamla stan runt dem är tyget. Från Casa AMARA i nedre centrum når ni ruttens början på några minuter.'
    ),
    oldTownCta: l(
      'Back to the old town',
      'Zurück zur Altstadt',
      'Volver al casco antiguo',
      'Terug naar de oude kern',
      'Tillbaka till gamla stan'
    ),
    availabilityCta: l(
      'Check availability',
      'Verfügbarkeit prüfen',
      'Consultar disponibilidad',
      'Beschikbaarheid bekijken',
      'Se tillgänglighet'
    )
  }
} as const;
