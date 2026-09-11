import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaErmitaEcceHomoSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-ermita-ecce-homo-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-11', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Ermita de Ecce Homo in Frigiliana: The Santo Cristo de la Caña Chapel', description: 'A very small single-nave 18th-century chapel hidden deep in Frigiliana’s lanes, home to the Santo Cristo de la Caña and still central to the Good Friday procession.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Ermita de Ecce Homo in Frigiliana: die Kapelle des Santo Cristo de la Caña', description: 'Eine sehr kleine, einschiffige Kapelle aus dem 18. Jahrhundert, tief in Frigilianas Gassen versteckt — Heimat des Santo Cristo de la Caña und bis heute Mittelpunkt der Karfreitagsprozession.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'La Ermita del Ecce Homo en Frigiliana: la capilla del Santo Cristo de la Caña', description: 'Una capilla muy pequeña, de una sola nave y del siglo XVIII, escondida en las calles de Frigiliana; alberga al Santo Cristo de la Caña y sigue siendo central en la procesión del Viernes Santo.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Ermita de Ecce Homo in Frigiliana: de kapel van de Santo Cristo de la Caña', description: 'Een heel kleine eenbeukige kapel uit de 18e eeuw, verscholen in de straatjes van Frigiliana; huis van de Santo Cristo de la Caña en nog altijd centraal in de Goedevrijdagprocessie.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Ermita de Ecce Homo i Frigiliana: kapellet för Santo Cristo de la Caña', description: 'Ett mycket litet enskeppigt kapell från 1700-talet, gömt djupt i Frigilianas gränder; hem för Santo Cristo de la Caña och alltjämt centralt i långfredagsprocessionen.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Authored from the operator brief; the 18th-century dating and the
 * chapel's role follow it. Service and procession dates are live details, not fixed facts.
 * No photograph yet: typographic cover.
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
        'Hidden deep in the tangle of old-town lanes is the Ermita de Ecce Homo, a very small single-nave chapel of the eighteenth century, home to the Santo Cristo de la Caña. It is easy to walk past and easy to miss — and that is part of its character. It stands for the popular Christian devotion that took root after the Morisco expulsion, and once a year it becomes the still point the whole village turns around: its image leads the Good Friday procession.',
        'Tief im Gewirr der Altstadtgassen versteckt liegt die Ermita de Ecce Homo, eine sehr kleine einschiffige Kapelle des 18. Jahrhunderts, Heimat des Santo Cristo de la Caña. Man geht leicht an ihr vorbei und übersieht sie leicht — und das gehört zu ihrem Wesen. Sie steht für die christliche Volksfrömmigkeit, die nach der Vertreibung der Morisken Wurzeln schlug, und einmal im Jahr wird sie zum ruhenden Punkt, um den sich das ganze Dorf dreht: Ihr Bildnis führt die Karfreitagsprozession an.',
        'Escondida en el laberinto de calles del casco antiguo está la Ermita del Ecce Homo, una capilla muy pequeña, de una sola nave y del siglo XVIII, que alberga al Santo Cristo de la Caña. Es fácil pasar de largo y fácil no verla, y eso forma parte de su carácter. Representa la devoción cristiana popular que arraigó tras la expulsión de los moriscos, y una vez al año se convierte en el punto quieto en torno al cual gira todo el pueblo: su imagen encabeza la procesión del Viernes Santo.',
        'Verscholen in de wirwar van de oude straatjes ligt de Ermita de Ecce Homo, een heel kleine eenbeukige kapel uit de 18e eeuw, huis van de Santo Cristo de la Caña. Je loopt er makkelijk voorbij en ziet haar makkelijk over het hoofd — en dat hoort bij haar karakter. Ze staat voor de volkse christelijke devotie die na de verdrijving van de Morisken wortel schoot, en eens per jaar wordt ze het rustpunt waar het hele dorp om draait: haar beeld gaat voorop in de Goedevrijdagprocessie.',
        'Gömt djupt i gamla stans gyttrande gränder ligger Ermita de Ecce Homo, ett mycket litet enskeppigt kapell från 1700-talet, hem för Santo Cristo de la Caña. Det är lätt att gå förbi och lätt att missa — och det hör till dess karaktär. Det står för den folkliga kristna fromhet som slog rot efter moriskernas fördrivning, och en gång om året blir det den stilla punkt som hela byn kretsar kring: dess bild leder långfredagsprocessionen.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '18. Jh.', label: l('A small single-nave chapel', 'Kleine einschiffige Kapelle', 'Capilla pequeña de una sola nave', 'Kleine eenbeukige kapel', 'Litet enskeppigt kapell') },
      { value: 'Cristo', label: l('Home of the Santo Cristo de la Caña', 'Heimat des Santo Cristo de la Caña', 'Alberga al Santo Cristo de la Caña', 'Huis van de Santo Cristo de la Caña', 'Hem för Santo Cristo de la Caña') },
      { value: 'Escondida', label: l('Hidden deep in the lanes', 'Tief in den Gassen versteckt', 'Escondida en las calles', 'Verscholen in de straatjes', 'Gömt i gränderna') },
      { value: 'Viernes', label: l('Central to the Good Friday procession', 'Mittelpunkt der Karfreitagsprozession', 'Central en la procesión del Viernes Santo', 'Centraal in de Goedevrijdagprocessie', 'Centralt i långfredagsprocessionen') }
    ],
    note: l(
      'The 18th-century dating and the procession role follow the operator brief; service times and procession dates are live details to check locally.',
      'Die Datierung ins 18. Jahrhundert und die Prozessionsrolle folgen dem Operator-Brief; Gottesdienstzeiten und Prozessionstermine sind aktuelle Angaben, vor Ort zu prüfen.',
      'La datación del siglo XVIII y el papel en la procesión siguen la nota del operador; los horarios de culto y las fechas de la procesión son datos a comprobar localmente.',
      'De datering 18e eeuw en de processierol volgen de operatornota; diensttijden en processiedata zijn actuele gegevens die lokaal te controleren zijn.',
      'Dateringen till 1700-talet och processionsrollen följer operatörsnoteringen; gudstjänsttider och processionsdatum är aktuella uppgifter att kontrollera lokalt.'
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
      eyebrow: l('Good Friday', 'Karfreitag', 'Viernes Santo', 'Goede Vrijdag', 'Långfredag'),
      title: l('One day at the centre of everything', 'Ein Tag im Mittelpunkt von allem', 'Un día en el centro de todo', 'Eén dag in het middelpunt van alles', 'En dag i centrum av allt'),
      text: l(
        'For most of the year the chapel keeps to itself. On Good Friday it does not: the Santo Cristo de la Caña leads the village’s procession, and the small ermita becomes its starting point and its heart. If your stay falls over Semana Santa, this is where to be — but treat opening hours and the exact procession timing as things to check locally, since they follow the church and the year.',
        'Den größten Teil des Jahres bleibt die Kapelle für sich. Am Karfreitag nicht: Der Santo Cristo de la Caña führt die Prozession des Dorfes an, und die kleine Ermita wird ihr Ausgangspunkt und ihr Herz. Fällt euer Aufenthalt in die Semana Santa, dann seid hier — doch Öffnungszeiten und den genauen Prozessionsablauf prüft vor Ort, denn sie richten sich nach Kirche und Jahr.',
        'La mayor parte del año la capilla se guarda para sí. El Viernes Santo no: el Santo Cristo de la Caña encabeza la procesión del pueblo, y la pequeña ermita se convierte en su punto de partida y su corazón. Si vuestra estancia cae en Semana Santa, es el sitio donde estar; pero comprobad localmente los horarios y el momento exacto de la procesión, porque dependen de la iglesia y del año.',
        'Het grootste deel van het jaar houdt de kapel zich op de achtergrond. Op Goede Vrijdag niet: de Santo Cristo de la Caña gaat voorop in de processie van het dorp, en de kleine ermita wordt het vertrekpunt en het hart ervan. Valt je verblijf in de Semana Santa, dan is dit de plek om te zijn — maar controleer openingstijden en het exacte processiemoment lokaal, want die volgen de kerk en het jaar.',
        'Större delen av året håller sig kapellet för sig självt. På långfredagen inte: Santo Cristo de la Caña leder byns procession, och det lilla kapellet blir dess startpunkt och hjärta. Om er vistelse infaller under Semana Santa är det här ni ska vara — men kontrollera öppettider och exakt processionstid lokalt, eftersom de följer kyrkan och året.'
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
      'The Ermita de Ecce Homo is a small discovery among the lanes above Casa AMARA. Let it be a quiet stop between the ceramic panels and San Antonio, and check locally if you want to catch the Good Friday procession.',
      'Die Ermita de Ecce Homo ist eine kleine Entdeckung in den Gassen oberhalb von Casa AMARA. Nehmt sie als stillen Halt zwischen den Keramiktafeln und San Antonio, und fragt vor Ort, wenn ihr die Karfreitagsprozession erleben wollt.',
      'La Ermita del Ecce Homo es un pequeño hallazgo entre las calles sobre Casa AMARA. Que sea una parada tranquila entre los azulejos y San Antonio, y comprobad localmente si queréis ver la procesión del Viernes Santo.',
      'De Ermita de Ecce Homo is een kleine ontdekking tussen de straatjes boven Casa AMARA. Laat het een stille stop zijn tussen de keramiekpanelen en San Antonio, en informeer lokaal als je de Goedevrijdagprocessie wilt meemaken.',
      'Ermita de Ecce Homo är en liten upptäckt bland gränderna ovanför Casa AMARA. Låt det bli ett stilla stopp mellan keramikpanelerna och San Antonio, och kontrollera lokalt om ni vill uppleva långfredagsprocessionen.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
