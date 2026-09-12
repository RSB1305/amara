import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaErmitaEcceHomoSeo: AmaraAuthoringSeo = {
  version: '2026-09-12-frigiliana-ermita-ecce-homo-v2',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-12', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Ermita de Ecce Homo in Frigiliana: The Santo Cristo de la Caña Chapel', description: 'A small single-nave 18th-century chapel at the edge of Frigiliana’s old town, home to the Santo Cristo de la Caña, whose image is carried to San Antonio on Holy Wednesday.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Ermita de Ecce Homo in Frigiliana: die Kapelle des Santo Cristo de la Caña', description: 'Eine kleine, einschiffige Kapelle aus dem 18. Jahrhundert am Rand von Frigilianas Altstadt — Heimat des Santo Cristo de la Caña, dessen Bildnis am Karmittwoch zu San Antonio getragen wird.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'La Ermita del Ecce Homo en Frigiliana: la capilla del Santo Cristo de la Caña', description: 'Una capilla pequeña, de una sola nave y del siglo XVIII, al borde del casco antiguo de Frigiliana; alberga al Santo Cristo de la Caña, cuya imagen se lleva a San Antonio el Miércoles Santo.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Ermita de Ecce Homo in Frigiliana: de kapel van de Santo Cristo de la Caña', description: 'Een kleine eenbeukige kapel uit de 18e eeuw aan de rand van Frigiliana’s oude kern; huis van de Santo Cristo de la Caña, wiens beeld op Stille Woensdag naar San Antonio wordt gedragen.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Ermita de Ecce Homo i Frigiliana: kapellet för Santo Cristo de la Caña', description: 'Ett litet enskeppigt kapell från 1700-talet vid kanten av Frigilianas gamla stan; hem för Santo Cristo de la Caña, vars bild bärs till San Antonio på dymmelonsdagen.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Reworked 2026-09-12 from the web synthesis: the procession is on
 * Miércoles Santo (Holy Wednesday), carried to San Antonio — NOT Good Friday; "de la Caña"
 * is the reed mock-sceptre of the Ecce Homo, not sugar cane; the chapel sits at the old-town
 * edge (off Calle Chorruelo), not deep in the centre; the carried figure is a 20th-century
 * work. Service and procession times stay live details. No photograph yet: typographic cover.
 */
export const frigilianaErmitaEcceHomoCopy = {
  hero: {
    kicker: l('Old town · Ermita de Ecce Homo', 'Altstadt · Ermita de Ecce Homo', 'Casco antiguo · Ermita del Ecce Homo', 'Oude kern · Ermita de Ecce Homo', 'Gamla stan · Ermita de Ecce Homo'),
    title: l('Ermita de Ecce Homo', 'Ermita de Ecce Homo', 'Ermita del Ecce Homo', 'Ermita de Ecce Homo', 'Ermita de Ecce Homo'),
    subtitle: l(
      'The tiny chapel of the Santo Cristo de la Caña',
      'Die winzige Kapelle des Santo Cristo de la Caña',
      'La capillita del Santo Cristo de la Caña',
      'De kleine kapel van de Santo Cristo de la Caña',
      'Det lilla kapellet för Santo Cristo de la Caña'
    ),
    paragraphs: [
      l(
        'At the edge of the old town, off Calle Chorruelo, stands the Ermita de Ecce Homo, a small single-nave chapel of the eighteenth century, home to the Santo Cristo de la Caña — the caña being the reed the mocked Christ holds in the Ecce Homo image, not the sugar cane the village is otherwise known for. It is easy to walk past and easy to miss, and that is part of its character. Once a year it stops being quiet: on Holy Wednesday its image is carried in procession from here to the church of San Antonio.',
        'Am Rand der Altstadt, an der Calle Chorruelo, steht die Ermita de Ecce Homo, eine kleine einschiffige Kapelle des 18. Jahrhunderts, Heimat des Santo Cristo de la Caña — die caña ist dabei das Schilfrohr, das der verspottete Christus im Ecce-Homo-Bild hält, nicht das Zuckerrohr, für das das Dorf sonst bekannt ist. Man geht leicht an ihr vorbei und übersieht sie leicht, und das gehört zu ihrem Wesen. Einmal im Jahr ist sie nicht mehr still: Am Karmittwoch wird ihr Bildnis von hier in Prozession zur Kirche San Antonio getragen.',
        'Al borde del casco antiguo, junto a la calle Chorruelo, está la Ermita del Ecce Homo, una capilla pequeña, de una sola nave y del siglo XVIII, que alberga al Santo Cristo de la Caña — la caña es el junco que el Cristo escarnecido sostiene en la imagen del Ecce Homo, no la caña de azúcar por la que se conoce el pueblo. Es fácil pasar de largo y no verla, y eso forma parte de su carácter. Una vez al año deja de estar en silencio: el Miércoles Santo su imagen sale de aquí en procesión hacia la iglesia de San Antonio.',
        'Aan de rand van de oude kern, bij de Calle Chorruelo, staat de Ermita de Ecce Homo, een kleine eenbeukige kapel uit de 18e eeuw, huis van de Santo Cristo de la Caña — de caña is het riet dat de bespotte Christus in de Ecce Homo-voorstelling vasthoudt, niet het suikerriet waar het dorp verder om bekendstaat. Je loopt er makkelijk voorbij en ziet haar makkelijk over het hoofd, en dat hoort bij haar karakter. Eens per jaar is ze niet stil: op Stille Woensdag wordt haar beeld van hier in processie naar de kerk van San Antonio gedragen.',
        'Vid kanten av gamla stan, invid Calle Chorruelo, står Ermita de Ecce Homo, ett litet enskeppigt kapell från 1700-talet, hem för Santo Cristo de la Caña — caña är röret som den hånade Kristus håller i Ecce Homo-bilden, inte det sockerrör som byn annars är känd för. Det är lätt att gå förbi och lätt att missa, och det hör till dess karaktär. En gång om året är det inte längre tyst: på dymmelonsdagen bärs dess bild härifrån i procession till kyrkan San Antonio.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '18. Jh.', label: l('A small single-nave chapel', 'Kleine einschiffige Kapelle', 'Capilla pequeña de una sola nave', 'Kleine eenbeukige kapel', 'Litet enskeppigt kapell') },
      { value: 'Cristo', label: l('Home of the Santo Cristo de la Caña', 'Heimat des Santo Cristo de la Caña', 'Alberga al Santo Cristo de la Caña', 'Huis van de Santo Cristo de la Caña', 'Hem för Santo Cristo de la Caña') },
      { value: 'Borde', label: l('At the edge of the old town', 'Am Rand der Altstadt', 'Al borde del casco antiguo', 'Aan de rand van de oude kern', 'Vid kanten av gamla stan') },
      { value: 'Miércoles', label: l('Carried to San Antonio on Holy Wednesday', 'Am Karmittwoch zu San Antonio getragen', 'Llevado a San Antonio el Miércoles Santo', 'Op Stille Woensdag naar San Antonio gedragen', 'Bärs till San Antonio på dymmelonsdagen') }
    ],
    note: l(
      'The 18th-century dating and the Miércoles Santo procession to San Antonio are confirmed by the municipal and provincial record; service and procession times are live details to check locally.',
      'Die Datierung ins 18. Jahrhundert und die Prozession am Karmittwoch zu San Antonio sind durch den kommunalen und provinziellen Bestand bestätigt; Gottesdienst- und Prozessionszeiten sind aktuelle Angaben, vor Ort zu prüfen.',
      'La datación del siglo XVIII y la procesión del Miércoles Santo hacia San Antonio están confirmadas por el registro municipal y provincial; los horarios de culto y de la procesión son datos a comprobar localmente.',
      'De datering 18e eeuw en de processie op Stille Woensdag naar San Antonio zijn bevestigd door het gemeentelijke en provinciale register; dienst- en processietijden zijn actuele gegevens die lokaal te controleren zijn.',
      'Dateringen till 1700-talet och processionen på dymmelonsdagen till San Antonio bekräftas av det kommunala och provinsiella registret; gudstjänst- och processionstider är aktuella uppgifter att kontrollera lokalt.'
    )
  },
  sections: [
    {
      eyebrow: l('The chapel', 'Die Kapelle', 'La capilla', 'De kapel', 'Kapellet'),
      title: l('Small on purpose', 'Klein mit Absicht', 'Pequeña a propósito', 'Klein met opzet', 'Litet med avsikt'),
      text: l(
        'This is a hermitage, not a church: a single nave, plainly built in the eighteenth century, tucked so deep into the lanes that you reach it almost by accident. Its scale is the point — an ermita belongs to its immediate quarter and its devotion, not to the skyline. Come upon it quietly and it rewards the small discovery; that is how it is meant to be met.',
        'Dies ist eine Einsiedelei, keine Kirche: ein einziges Schiff, schlicht im 18. Jahrhundert gebaut, so tief in die Gassen geschoben, dass man sie fast zufällig erreicht. Ihr Maßstab ist der Sinn — eine Ermita gehört ihrem unmittelbaren Viertel und seiner Frömmigkeit, nicht der Silhouette. Stößt man still auf sie, belohnt sie die kleine Entdeckung; so soll man ihr begegnen.',
        'Es una ermita, no una iglesia: una sola nave, de fábrica sencilla del siglo XVIII, tan metida en las calles que se llega a ella casi por casualidad. Su escala es lo esencial: una ermita pertenece a su barrio inmediato y a su devoción, no al perfil del pueblo. Toparse con ella en silencio recompensa el pequeño hallazgo; así se la debe encontrar.',
        'Dit is een hermitage, geen kerk: één beuk, sober gebouwd in de 18e eeuw, zo diep in de straatjes weggestopt dat je haar bijna per ongeluk bereikt. Haar schaal is het punt — een ermita hoort bij haar directe wijk en haar devotie, niet bij de skyline. Kom je haar stil tegen, dan beloont ze de kleine ontdekking; zo hoort ze ontmoet te worden.',
        'Detta är en eremitboning, inte en kyrka: ett enda skepp, enkelt byggt på 1700-talet, så djupt inkilat i gränderna att man når det nästan av en slump. Dess skala är poängen — en ermita hör till sitt närmaste kvarter och dess fromhet, inte till siluetten. Att stöta på det i stillhet belönar den lilla upptäckten; så är det menat att mötas.'
      )
    },
    {
      eyebrow: l('Popular devotion', 'Volksfrömmigkeit', 'Devoción popular', 'Volksdevotie', 'Folklig fromhet'),
      title: l('Faith of the repopulated village', 'Glaube des neu besiedelten Dorfes', 'La fe del pueblo repoblado', 'Geloof van het herbevolkte dorp', 'Den återbefolkade byns tro'),
      text: l(
        'The chapel belongs to the chapter after 1569. When the Moriscos were expelled and the village was resettled, a new Christian devotional life was established in its lanes — brotherhoods, images, processions. The Ermita de Ecce Homo is a small, intact witness to that: not the grand parish statement of San Antonio, but the everyday, neighbourhood piety that grew up alongside it.',
        'Die Kapelle gehört zum Kapitel nach 1569. Als die Morisken vertrieben und das Dorf neu besiedelt wurde, etablierte sich in seinen Gassen ein neues christliches Andachtsleben — Bruderschaften, Bildnisse, Prozessionen. Die Ermita de Ecce Homo ist ein kleines, unversehrtes Zeugnis davon: nicht die große Pfarrgeste von San Antonio, sondern die alltägliche Frömmigkeit der Nachbarschaft, die daneben aufwuchs.',
        'La capilla pertenece al capítulo posterior a 1569. Expulsados los moriscos y repoblado el pueblo, se estableció en sus calles una nueva vida devocional cristiana: cofradías, imágenes, procesiones. La Ermita del Ecce Homo es un testimonio pequeño e intacto de ello: no el gran gesto parroquial de San Antonio, sino la piedad cotidiana del vecindario que creció a su lado.',
        'De kapel hoort bij het hoofdstuk na 1569. Toen de Morisken verdreven waren en het dorp opnieuw bevolkt werd, ontstond in de straatjes een nieuw christelijk devotieleven — broederschappen, beelden, processies. De Ermita de Ecce Homo is daarvan een klein, gaaf getuige: niet het grote parochiegebaar van San Antonio, maar de alledaagse buurtvroomheid die ernaast opgroeide.',
        'Kapellet hör till kapitlet efter 1569. När moriskerna fördrivits och byn återbefolkats etablerades ett nytt kristet andaktsliv i dess gränder — brödraskap, bilder, processioner. Ermita de Ecce Homo är ett litet, intakt vittne om det: inte San Antonios stora sockengest, utan den vardagliga grannskapsfromhet som växte upp vid dess sida.'
      )
    },
    {
      eyebrow: l('Holy Wednesday', 'Karmittwoch', 'Miércoles Santo', 'Stille Woensdag', 'Dymmelonsdagen'),
      title: l('One day at the centre of everything', 'Ein Tag im Mittelpunkt von allem', 'Un día en el centro de todo', 'Eén dag in het middelpunt van alles', 'En dag i centrum av allt'),
      text: l(
        'For most of the year the chapel keeps to itself. On Holy Wednesday — Miércoles Santo — it does not: the image of the Santo Cristo de la Caña is carried out of the little ermita and in procession down to the church of San Antonio. The processional tradition here goes back to the sixteenth century, though the figure you see carried is a neo-Baroque work of the later twentieth century. If your stay falls over Semana Santa, this is the day to be here — but treat opening hours and the exact procession timing as things to check locally, since they follow the church and the year.',
        'Den größten Teil des Jahres bleibt die Kapelle für sich. Am Karmittwoch — Miércoles Santo — nicht: Das Bildnis des Santo Cristo de la Caña wird aus der kleinen Ermita getragen und in Prozession hinab zur Kirche San Antonio geführt. Die Prozessionstradition reicht hier bis ins 16. Jahrhundert zurück, auch wenn die getragene Figur ein neubarockes Werk aus der zweiten Hälfte des 20. Jahrhunderts ist. Fällt euer Aufenthalt in die Semana Santa, ist dies der Tag, an dem ihr hier sein solltet — doch Öffnungszeiten und den genauen Prozessionsablauf prüft vor Ort, denn sie richten sich nach Kirche und Jahr.',
        'La mayor parte del año la capilla se guarda para sí. El Miércoles Santo no: la imagen del Santo Cristo de la Caña sale de la pequeña ermita y baja en procesión hasta la iglesia de San Antonio. La tradición procesional se remonta aquí al siglo XVI, aunque la figura que veis portar es una obra neobarroca de la segunda mitad del siglo XX. Si vuestra estancia cae en Semana Santa, este es el día para estar aquí; pero comprobad localmente los horarios y el momento exacto de la procesión, porque dependen de la iglesia y del año.',
        'Het grootste deel van het jaar houdt de kapel zich op de achtergrond. Op Stille Woensdag — Miércoles Santo — niet: het beeld van de Santo Cristo de la Caña wordt uit de kleine ermita gedragen en in processie omlaag naar de kerk van San Antonio geleid. De processietraditie gaat hier terug tot de 16e eeuw, al is het gedragen beeld een neobarok werk uit de tweede helft van de 20e eeuw. Valt je verblijf in de Semana Santa, dan is dit de dag om hier te zijn — maar controleer openingstijden en het exacte processiemoment lokaal, want die volgen de kerk en het jaar.',
        'Större delen av året håller sig kapellet för sig självt. På dymmelonsdagen — Miércoles Santo — inte: bilden av Santo Cristo de la Caña bärs ut ur det lilla kapellet och i procession ner till kyrkan San Antonio. Processionstraditionen går här tillbaka till 1500-talet, även om figuren som bärs är ett nybarockt verk från 1900-talets senare hälft. Om er vistelse infaller under Semana Santa är detta dagen att vara här — men kontrollera öppettider och exakt processionstid lokalt, eftersom de följer kyrkan och året.'
      )
    }
  ],
  pullQuote: l(
    'A chapel you could walk past all year — and the heart of the village for one day of it.',
    'Eine Kapelle, an der man das ganze Jahr vorbeigehen könnte — und der das Dorf an einem Tag gehört.',
    'Una capilla ante la que podrías pasar todo el año, y el corazón del pueblo un día de él.',
    'Een kapel waar je het hele jaar langs zou kunnen lopen — en het hart van het dorp op één dag ervan.',
    'Ett kapell man kunde gå förbi hela året — och byns hjärta en dag av det.'
  ),
  closing: {
    title: l('Find it, then keep walking', 'Findet sie, dann weiter', 'Encontradla y seguid', 'Vind haar, loop dan door', 'Hitta det, gå sedan vidare'),
    lead: l(
      'The Ermita de Ecce Homo is a small discovery among the lanes above Casa AMARA. Let it be a quiet stop between the ceramic panels and San Antonio, and check locally if you want to catch the Holy Wednesday procession.',
      'Die Ermita de Ecce Homo ist eine kleine Entdeckung in den Gassen oberhalb von Casa AMARA. Nehmt sie als stillen Halt zwischen den Keramiktafeln und San Antonio, und fragt vor Ort, wenn ihr die Karmittwochsprozession erleben wollt.',
      'La Ermita del Ecce Homo es un pequeño hallazgo entre las calles sobre Casa AMARA. Que sea una parada tranquila entre los azulejos y San Antonio, y comprobad localmente si queréis ver la procesión del Miércoles Santo.',
      'De Ermita de Ecce Homo is een kleine ontdekking tussen de straatjes boven Casa AMARA. Laat het een stille stop zijn tussen de keramiekpanelen en San Antonio, en informeer lokaal als je de processie op Stille Woensdag wilt meemaken.',
      'Ermita de Ecce Homo är en liten upptäckt bland gränderna ovanför Casa AMARA. Låt det bli ett stilla stopp mellan keramikpanelerna och San Antonio, och kontrollera lokalt om ni vill uppleva processionen på dymmelonsdagen.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
