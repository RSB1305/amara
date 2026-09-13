import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaBarribartoSeo: AmaraAuthoringSeo = {
  version: '2026-09-13-frigiliana-barribarto-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/04-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-13', dateModified: '2026-09-13', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  landmark: {
    name: { en: 'Barribarto', de: 'Barribarto', es: 'El Barribarto', nl: 'Barribarto', sv: 'Barribarto' },
    // The quarter has no official polygon; this is a representative point on Calle Amargura,
    // named by the municipality as its main street (IGN CartoCiudad). Pending an on-site GPS fix.
    latitude: 36.792371,
    longitude: -3.896985,
    addressLocality: 'Frigiliana',
    addressRegion: 'Andalusia',
    addressCountry: 'ES',
    isAccessibleForFree: true
  },
  languages: {
    en: { title: 'Barribarto: Frigiliana’s Upper Quarter, Lanes & Adarves', description: 'Frigiliana’s upper, medieval quarter: two-storey white houses on tiny plots, lanes that follow the slope, and eleven named adarves — half-private passages over the steps.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Barribarto: das obere Viertel von Frigiliana, Gassen & Adarves', description: 'Das obere, mittelalterliche Viertel von Frigiliana: zweigeschossige weiße Häuser auf winzigen Parzellen, Gassen, die dem Hang folgen, und elf benannte Adarves — halbprivate Durchgänge über den Treppen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'El Barribarto de Frigiliana: calles y adarves del barrio alto', description: 'El barrio alto y medieval de Frigiliana: casas blancas de dos alturas en parcelas diminutas, calles que siguen la ladera y once adarves con nombre, pasajes semiprivados sobre los escalones.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Barribarto: de bovenwijk van Frigiliana, steegjes & adarves', description: 'De hoge, middeleeuwse wijk van Frigiliana: witte huizen van twee lagen op minuscule percelen, straatjes die de helling volgen en elf adarves met naam — halfprivé doorgangen boven de treden.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Barribarto: Frigilianas övre kvarter, gränder & adarves', description: 'Frigilianas övre, medeltida stadsdel: vita tvåvåningshus på pyttesmå tomter, gränder som följer sluttningen och elva namngivna adarves — halvprivata passager över trapporna.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). The upper-quarter street-and-adarve page recommended by the
 * 2026-09-13 search-intent run: it mirrors "Calle Real & Barribajo" and completes the
 * Alto/Bajo pair, while the viewpoints stay on the Callejón del Peñón page. Authored from
 * the Barribarto entity run (Decreto 183/2014, the Ayuntamiento's tourism pages and IGN
 * CartoCiudad): the decree typology, the eleven named adarves, the municipal walk. Casa
 * AMARA sits on the Calle Real axis at the foot of the lanes, not inside the quarter. No
 * photograph yet: typographic cover.
 */
export const frigilianaBarribartoCopy = {
  hero: {
    kicker: l('Old town · Barribarto', 'Altstadt · Barribarto', 'Casco antiguo · Barribarto', 'Oude kern · Barribarto', 'Gamla stan · Barribarto'),
    title: l('Barribarto, the upper quarter', 'Barribarto, das obere Viertel', 'El Barribarto', 'Barribarto, de bovenwijk', 'Barribarto, det övre kvarteret'),
    subtitle: l(
      'Frigiliana’s medieval upper quarter — its stepped lanes and adarves',
      'Frigilianas mittelalterliches Oberviertel — seine Treppengassen und Adarves',
      'La parte alta medieval de Frigiliana: sus callejones escalonados y sus adarves',
      'Frigiliana’s middeleeuwse bovenwijk — haar trapstraatjes en adarves',
      'Frigilianas medeltida övre stadsdel — dess trappgränder och adarves'
    ),
    paragraphs: [
      l(
        'The Barribarto is Frigiliana’s upper quarter — the Barrio Alto, worn down in speech to one word. It is the oldest part of the village, the medieval core that climbs from Calle Real to the foot of the castle hill: two-storey whitewashed houses on small, interlocking plots, the main lanes following the contour of the slope and linked by steep stepped ones between them. Eleven of these passages are adarves, half-private and serving only the houses along them. This is the most photographed and the most tiring part of Frigiliana. A slow morning covers it; wear shoes with grip, and be ready to climb.',
        'Das Barribarto ist das Oberviertel von Frigiliana — der Barrio Alto, im Sprechen zu einem Wort verschliffen. Es ist der älteste Teil des Dorfes, der mittelalterliche Kern, der von der Calle Real bis an den Fuß des Burgbergs hinaufsteigt: zweigeschossige weiße Häuser auf kleinen, ineinander verschachtelten Parzellen, die Hauptgassen dem Hang folgend und durch steile Treppengassen dazwischen verbunden. Elf dieser Durchgänge sind Adarves, halbprivat und nur den Häusern an ihnen dienend. Das ist der meistfotografierte und zugleich anstrengendste Teil Frigilianas. Ein geruhsamer Vormittag deckt ihn ab; tragt Schuhe mit Profil und seid bereit zu steigen.',
        'El Barribarto es la parte alta de Frigiliana —el Barrio Alto, gastado en el habla hasta quedar en una sola palabra—. Es la parte más antigua del pueblo, el núcleo medieval que sube desde la calle Real hasta el pie del cerro del castillo: casas encaladas de dos alturas sobre parcelas pequeñas y encajadas unas en otras, las calles principales siguiendo la curva de la ladera y unidas entre sí por callejones empinados y escalonados. Once de esos pasajes son adarves, semiprivados y al servicio solo de las casas que dan a ellos. Es la parte más fotografiada y, a la vez, la más fatigosa de Frigiliana. Una mañana sin prisas basta para recorrerlo; llevad calzado con agarre y disposición para subir.',
        'Het Barribarto is de bovenwijk van Frigiliana — de Barrio Alto, in het spreken tot één woord gesleten. Het is het oudste deel van het dorp, de middeleeuwse kern die vanaf de Calle Real omhoogklimt tot de voet van de kasteelheuvel: witgekalkte huizen van twee lagen op kleine, in elkaar geschoven percelen, de hoofdstraatjes volgen de helling en worden verbonden door steile trapstraatjes ertussen. Elf van deze doorgangen zijn adarves, halfprivé en alleen ten dienste van de huizen eraan. Dit is het meest gefotografeerde én het meest vermoeiende deel van Frigiliana. Een rustige ochtend volstaat; draag schoenen met grip en wees bereid te klimmen.',
        'Barribarto är Frigilianas övre stadsdel — Barrio Alto, nednött i talet till ett enda ord. Det är byns äldsta del, den medeltida kärnan som klättrar från Calle Real upp till foten av slottskullen: vitkalkade tvåvåningshus på små, i varandra infogade tomter, huvudgränderna följer sluttningens kurva och binds samman av branta trappgränder emellan. Elva av dessa passager är adarves, halvprivata och till för endast husen längs dem. Detta är den mest fotograferade och samtidigt mest ansträngande delen av Frigiliana. En stillsam förmiddag räcker för att gå igenom det; bär skor med grepp och var beredd att klättra.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: 'Barrio Alto', label: l('The upper quarter, worn to one word', 'Das obere Viertel, zu einem Wort verschliffen', 'El barrio alto, gastado en una palabra', 'De bovenwijk, tot één woord gesleten', 'Övre stadsdelen, nednött till ett ord') },
      { value: '2', label: l('Generally two storeys, small interlocking plots', 'Meist zwei Geschosse, kleine verschachtelte Parzellen', 'Casi siempre dos alturas, parcelas pequeñas y encajadas', 'Meestal twee lagen, kleine ineengeschoven percelen', 'Oftast två våningar, små infogade tomter') },
      { value: '11', label: l('Adarves — half-private passages, named in the record', 'Adarves — halbprivate Durchgänge, im Denkmalrecord benannt', 'Adarves — pasajes semiprivados, citados en el registro', 'Adarves — halfprivé doorgangen, in het register genoemd', 'Adarves — halvprivata passager, namngivna i registret') },
      { value: 'Amargura', label: l('The quarter’s main street', 'Die Hauptgasse des Viertels', 'La calle principal del barrio', 'De hoofdstraat van de wijk', 'Stadsdelens huvudgata') }
    ],
    note: l(
      'The heritage decree calls an adarve a space between public and private, entered openly or through an algorfa — a room built across the passage overhead. Some serve only their own houses, so walk them lightly.',
      'Das Denkmaldekret nennt einen Adarve einen Raum zwischen öffentlich und privat, offen zugänglich oder durch eine Algorfa betreten — einen Raum, der über den Durchgang gebaut ist. Manche dienen nur ihren eigenen Häusern, geht sie also leise.',
      'El decreto de patrimonio llama adarve a un espacio entre lo público y lo privado, de entrada abierta o mediante una algorfa —una estancia construida sobre el paso—. Algunos dan servicio solo a sus casas, así que recorredlos con cuidado.',
      'Het erfgoeddecreet noemt een adarve een ruimte tussen openbaar en privé, met open toegang of via een algorfa — een kamer die over de doorgang heen is gebouwd. Sommige dienen alleen hun eigen huizen, dus loop ze zacht.',
      'Kulturarvsdekretet kallar en adarve ett rum mellan offentligt och privat, med öppen ingång eller genom en algorfa — ett rum byggt tvärs över passagen ovanför. Vissa betjänar bara sina egna hus, så gå dem varsamt.'
    )
  },
  sections: [
    {
      eyebrow: l('The quarter', 'Das Viertel', 'El barrio', 'De wijk', 'Stadsdelen'),
      title: l('The oldest part of the village', 'Der älteste Teil des Dorfes', 'La parte más antigua del pueblo', 'Het oudste deel van het dorp', 'Byns äldsta del'),
      text: l(
        'The Barribarto sits on the slope between Calle Real and the castle hill, and the heritage decree reads it as the medieval original core of the settlement, closest to the old walls. Its character is homogeneous: houses of generally two storeys on small plots, plainly built, of the local vernacular. The land does the shaping — the more important streets run along the contour, and shorter, steeper lanes climb between them, so the plan is a web rather than a grid. Because the plots are tiny and the ground is hard, the houses interlock, one built into the next, in the dense, motley overlay the decree calls typical of the Axarquía.',
        'Das Barribarto liegt am Hang zwischen der Calle Real und dem Burgberg, und das Denkmaldekret liest es als den mittelalterlichen Ursprungskern der Siedlung, den alten Mauern am nächsten. Sein Charakter ist einheitlich: Häuser von meist zwei Geschossen auf kleinen Parzellen, schlicht gebaut, in der örtlichen Bauweise. Das Gelände formt: Die wichtigeren Straßen folgen der Höhenlinie, kürzere, steilere Gassen steigen dazwischen hinauf, sodass der Grundriss ein Netz ist und kein Raster. Weil die Parzellen winzig und der Boden hart ist, verzahnen sich die Häuser, eines ins andere gebaut, in jener dichten, bunten Überlagerung, die das Dekret typisch für die Axarquía nennt.',
        'El Barribarto se asienta en la ladera entre la calle Real y el cerro del castillo, y el decreto de patrimonio lo lee como el núcleo original medieval del poblamiento, el más cercano a las viejas murallas. Su carácter es homogéneo: casas de dos alturas por lo general, en parcelas pequeñas, de fábrica sencilla y tipología vernácula. La tierra es la que ordena: las calles más importantes siguen la curva de nivel y otras más cortas y empinadas suben entre ellas, de modo que el trazado es una red y no una cuadrícula. Como las parcelas son diminutas y el terreno duro, las casas se maclan, una construida en la otra, en esa superposición densa y abigarrada que el decreto llama característica de la Axarquía.',
        'Het Barribarto ligt op de helling tussen de Calle Real en de kasteelheuvel, en het erfgoeddecreet leest het als de middeleeuwse oorspronkelijke kern van de nederzetting, het dichtst bij de oude muren. Het karakter is homogeen: huizen van doorgaans twee lagen op kleine percelen, sober gebouwd, in de lokale bouwtrant. Het terrein bepaalt: de belangrijkere straten volgen de hoogtelijn en kortere, steilere straatjes klimmen ertussen omhoog, zodat de plattegrond een web is en geen raster. Doordat de percelen minuscuul zijn en de grond hard, grijpen de huizen in elkaar, het ene in het andere gebouwd, in die dichte, bonte gelaagdheid die het decreet typisch noemt voor de Axarquía.',
        'Barribarto ligger på sluttningen mellan Calle Real och slottskullen, och kulturarvsdekretet läser det som bosättningens medeltida ursprungskärna, närmast de gamla murarna. Karaktären är enhetlig: hus på oftast två våningar på små tomter, enkelt byggda i den lokala byggnadstraditionen. Marken formar: de viktigare gatorna följer nivåkurvan och kortare, brantare gränder klättrar emellan, så att planen är ett nät och inte ett rutnät. Eftersom tomterna är pyttesmå och marken hård griper husen in i varandra, det ena byggt in i det andra, i den täta, brokiga skiktning som dekretet kallar typisk för Axarquía.'
      )
    },
    {
      eyebrow: l('The adarves', 'Die Adarves', 'Los adarves', 'De adarves', 'Adarverna'),
      title: l('Passages that are half a home', 'Durchgänge, halb schon Zuhause', 'Pasajes que son medio hogar', 'Doorgangen die half woning zijn', 'Passager som är halvt hem'),
      text: l(
        'The word to know up here is adarve. An adarve is a lane that belongs partly to the street and partly to the houses along it — sometimes open, sometimes reached under an algorfa, a room built across the passage overhead. The Barribarto has eleven that carry names: the Zacatín, the Túnel, the Señor, the Huerta, the Amargura, the Peñón, the Batanero, the Torreón, the Cura Soto, the Corralón and the Inquisidor. Some are public thoroughfares; others narrow until they serve only the doors along them, and you feel the change underfoot. When a passage begins to feel like a courtyard, it is one — step back to the open lanes and leave it to its houses.',
        'Das Wort, das man hier oben kennen sollte, ist Adarve. Ein Adarve ist eine Gasse, die halb der Straße gehört und halb den Häusern an ihr — mal offen, mal unter einer Algorfa betreten, einem Raum, der über den Durchgang gebaut ist. Das Barribarto hat elf mit Namen: den Zacatín, den Túnel, den Señor, die Huerta, die Amargura, den Peñón, den Batanero, den Torreón, den Cura Soto, den Corralón und den Inquisidor. Manche sind öffentliche Durchgänge; andere verengen sich, bis sie nur noch die Türen an ihnen erschließen, und man spürt den Wechsel unter den Füßen. Wenn sich ein Durchgang wie ein Hof anfühlt, ist er einer — tretet zurück in die offenen Gassen und überlasst ihn seinen Häusern.',
        'La palabra que conviene conocer aquí arriba es adarve. Un adarve es un callejón que pertenece en parte a la calle y en parte a las casas que dan a él: unas veces abierto, otras al que se entra bajo una algorfa, una estancia construida sobre el paso. El Barribarto tiene once con nombre: el Zacatín, el Túnel, el del Señor, el de la Huerta, el de la Amargura, el del Peñón, el del Batanero, el del Torreón, el de Cura Soto, el del Corralón y el del Inquisidor. Algunos son pasos públicos; otros se estrechan hasta dar servicio solo a sus puertas, y el cambio se nota bajo los pies. Cuando un pasaje empieza a sentirse como un patio, lo es: volved a las calles abiertas y dejadlo a sus casas.',
        'Het woord dat je hierboven moet kennen is adarve. Een adarve is een straatje dat deels bij de straat hoort en deels bij de huizen eraan — soms open, soms betreden onder een algorfa, een kamer die over de doorgang heen is gebouwd. Het Barribarto telt er elf met een naam: de Zacatín, de Túnel, de Señor, de Huerta, de Amargura, de Peñón, de Batanero, de Torreón, de Cura Soto, de Corralón en de Inquisidor. Sommige zijn openbare doorgangen; andere versmallen tot ze alleen hun eigen deuren ontsluiten, en je voelt de omslag onder je voeten. Als een doorgang als een binnenplaats gaat aanvoelen, is het er een — stap terug naar de open straatjes en laat hem aan zijn huizen.',
        'Ordet man bör kunna här uppe är adarve. En adarve är en gränd som delvis hör till gatan och delvis till husen längs den — ibland öppen, ibland nådd under en algorfa, ett rum byggt tvärs över passagen ovanför. Barribarto har elva med namn: Zacatín, Túnel, Señor, Huerta, Amargura, Peñón, Batanero, Torreón, Cura Soto, Corralón och Inquisidor. Vissa är offentliga genomgångar; andra smalnar av tills de bara betjänar sina egna dörrar, och man känner skiftet under fötterna. När en passage börjar kännas som en gårdsplan är den det — kliv tillbaka till de öppna gränderna och lämna den åt sina hus.'
      )
    },
    {
      eyebrow: l('The walk', 'Der Gang', 'El paseo', 'De wandeling', 'Vandringen'),
      title: l('How the village climbs', 'Wie das Dorf steigt', 'Cómo sube el pueblo', 'Hoe het dorp klimt', 'Hur byn klättrar'),
      text: l(
        'Only Calle Real, along the foot of the quarter, takes cars; from it every lane into the Barribarto is on foot, and most of them climb by steps. The village’s own route starts at the top of Calle Almona and threads up through Calle El Garral and the Zacatín — where the ceramic panels are set into the walls — toward the rock of the Peñón at the crown of the quarter. It is steep and stepped the whole way, and it is still a working neighbourhood: the whitewash is renewed each spring by habit, not by rule, and a mule still carries up what a van cannot. Go early or late, when the light is long across the walls and the lanes are quiet, and take the climb slowly.',
        'Nur die Calle Real, am Fuß des Viertels, nimmt Autos; von ihr führt jede Gasse ins Barribarto zu Fuß, und die meisten steigen über Stufen. Der Rundgang des Dorfes beginnt oben an der Calle Almona und fädelt sich durch die Calle El Garral und den Zacatín hinauf — wo die Keramiktafeln in die Wände eingelassen sind — bis zum Fels des Peñón an der Krone des Viertels. Er ist durchgehend steil und gestuft, und es ist noch immer eine bewohnte Nachbarschaft: Die Tünche wird jeden Frühling aus Gewohnheit erneuert, nicht auf Vorschrift, und ein Maultier trägt noch hinauf, was ein Transporter nicht schafft. Geht früh oder spät, wenn das Licht lang über die Wände fällt und die Gassen still sind, und nehmt den Anstieg langsam.',
        'Solo la calle Real, al pie del barrio, admite coches; desde ella cada callejón hacia el Barribarto se hace a pie, y la mayoría suben por escalones. El recorrido del propio pueblo arranca en lo alto de la calle Almona y se enhebra hacia arriba por la calle El Garral y el Zacatín —donde los azulejos están encajados en los muros— hasta la peña del Peñón, en la cima del barrio. Es empinado y escalonado todo el camino, y sigue siendo un vecindario vivo: el encalado se renueva cada primavera por costumbre, no por norma, y una mula todavía sube lo que una furgoneta no puede. Id temprano o al atardecer, cuando la luz cae larga sobre los muros y las calles están tranquilas, y tomaos la subida con calma.',
        'Alleen de Calle Real, aan de voet van de wijk, laat auto’s toe; vanaf daar gaat elk straatje het Barribarto in te voet, en de meeste klimmen via treden. De eigen route van het dorp begint bovenaan de Calle Almona en rijgt zich omhoog door de Calle El Garral en de Zacatín — waar de keramiekpanelen in de muren zijn gezet — naar de rots van de Peñón, op de kroon van de wijk. Het is de hele weg steil en getrapt, en het is nog altijd een bewoonde buurt: het witsel wordt elk voorjaar uit gewoonte vernieuwd, niet uit voorschrift, en een muildier draagt nog omhoog wat een bestelbus niet kan. Ga vroeg of laat, wanneer het licht lang over de muren valt en de straatjes stil zijn, en neem de klim rustig.',
        'Bara Calle Real, vid stadsdelens fot, släpper in bilar; därifrån går varje gränd in i Barribarto till fots, och de flesta klättrar via trappsteg. Byns egen rutt börjar högst upp på Calle Almona och trär sig uppåt genom Calle El Garral och Zacatín — där keramikpanelerna är infällda i väggarna — mot klippan Peñón på stadsdelens krön. Den är brant och trappad hela vägen, och det är fortfarande ett bebott grannskap: kalkputsen förnyas varje vår av vana, inte av regel, och en mulåsna bär fortfarande upp det en skåpbil inte kan. Gå tidigt eller sent, när ljuset faller långt över väggarna och gränderna är tysta, och ta klättringen långsamt.'
      )
    }
  ],
  pullQuote: l(
    'Streets that follow the slope, lanes that climb between them, and eleven passages that belong half to the houses along them.',
    'Straßen, die dem Hang folgen, Gassen, die dazwischen steigen, und elf Durchgänge, die halb den Häusern an ihnen gehören.',
    'Calles que siguen la ladera, callejones que suben entre ellas y once pasajes que pertenecen a medias a las casas que dan a ellos.',
    'Straten die de helling volgen, straatjes die ertussen klimmen, en elf doorgangen die half toebehoren aan de huizen eraan.',
    'Gator som följer sluttningen, gränder som klättrar emellan, och elva passager som halvt tillhör husen längs dem.'
  ),
  visitFacts: {
    heading: l('Visit & location', 'Besuch & Lage', 'Visita y ubicación', 'Bezoek & ligging', 'Besök & läge'),
    items: [
      {
        label: l('Location', 'Standort', 'Ubicación', 'Ligging', 'Läge'),
        value: l(
          'The upper, medieval quarter, above Calle Real and below the castle hill.',
          'Das obere, mittelalterliche Viertel, über der Calle Real und unter dem Burgberg.',
          'El barrio alto y medieval, sobre la calle Real y bajo el cerro del castillo.',
          'De hoge, middeleeuwse wijk, boven de Calle Real en onder de kasteelheuvel.',
          'Den övre, medeltida stadsdelen, ovanför Calle Real och nedanför slottskullen.'
        )
      },
      {
        label: l('Distance', 'Distanz', 'Distancia', 'Afstand', 'Avstånd'),
        value: l(
          'A short climb up from Casa AMARA: along Calle Real, then up any of the stepped lanes.',
          'Ein kurzer Anstieg von Casa AMARA: die Calle Real entlang, dann eine der Treppengassen hinauf.',
          'Una subida corta desde Casa AMARA: por la calle Real y luego por cualquiera de los callejones escalonados.',
          'Een korte klim vanaf Casa AMARA: langs de Calle Real, dan een van de trapstraatjes omhoog.',
          'En kort klättring från Casa AMARA: längs Calle Real, sedan upp för någon av trappgränderna.'
        )
      },
      {
        label: l('Access', 'Zugang', 'Acceso', 'Toegang', 'Tillgång'),
        value: l(
          'Public stepped lanes, steep throughout — sturdy shoes needed, not wheelchair accessible. Some passages are adarves, half-private; keep to the open lanes.',
          'Öffentliche Treppengassen, durchgehend steil — festes Schuhwerk nötig, nicht barrierefrei. Manche Durchgänge sind Adarves, halbprivat; bleibt auf den offenen Gassen.',
          'Callejones públicos con escalones, empinados en todo su trazado; hace falta calzado firme, no accesible en silla de ruedas. Algunos pasajes son adarves, semiprivados; quedaos en las calles abiertas.',
          'Openbare trapstraatjes, overal steil — stevige schoenen nodig, niet rolstoeltoegankelijk. Sommige doorgangen zijn adarves, halfprivé; blijf op de open straatjes.',
          'Offentliga trappgränder, branta hela vägen — stadiga skor behövs, inte tillgängligt med rullstol. Vissa passager är adarves, halvprivata; håll er till de öppna gränderna.'
        )
      },
      {
        label: l('Best time', 'Beste Zeit', 'Mejor hora', 'Beste tijd', 'Bästa tid'),
        value: l(
          'Early or late, for the long light across the white walls and the quiet of the lanes.',
          'Früh oder spät, für das lange Licht über den weißen Wänden und die Stille der Gassen.',
          'Temprano o al atardecer, por la luz larga sobre los muros blancos y la calma de las calles.',
          'Vroeg of laat, voor het lange licht over de witte muren en de rust van de straatjes.',
          'Tidigt eller sent, för det långa ljuset över de vita väggarna och grändernas stillhet.'
        )
      }
    ]
  },
  nearby: {
    parts: [
      {
        text: l(
          'The panels of 1569 are set into these same walls — follow the ',
          'Die Tafeln von 1569 sind in eben diese Wände eingelassen — folgt dem ',
          'Los paneles de 1569 están encajados en estos mismos muros —seguid la ',
          'De panelen van 1569 zijn in diezelfde muren gezet — volg de ',
          'Panelerna från 1569 är infällda i just dessa väggar — följ '
        )
      },
      {
        token: 'frigiliana_ceramic_panels',
        label: l('ceramic-panel walk', 'Weg der Keramiktafeln', 'ruta de los azulejos', 'wandeling langs de keramische panelen', 'vandringen längs keramikpanelerna')
      },
      {
        text: l(
          ' — and at the crown of the quarter the ',
          ' —, und an der Krone des Viertels öffnet sich der ',
          '— y, en la cima del barrio, el ',
          ' — en op de kroon van de wijk opent het ',
          ' — och på stadsdelens krön öppnar sig '
        )
      },
      {
        token: 'frigiliana_callejon_penon',
        label: l('Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón', 'Callejón del Peñón')
      },
      {
        text: l(
          ' opens over the rooftops.',
          ' über die Dächer.',
          ' se abre sobre los tejados.',
          ' zich over de daken.',
          ' över taken.'
        )
      }
    ]
  },
  closing: {
    title: l('Home is at the foot of the climb', 'Zuhause liegt am Fuß des Anstiegs', 'La casa está al pie de la subida', 'Thuis ligt aan de voet van de klim', 'Hemma ligger vid foten av klättringen'),
    lead: l(
      'Casa AMARA sits on Calle Real’s line at the foot of the Barribarto, so the whole quarter climbs from your door: step out, turn uphill, and the lanes are yours before the day’s visitors arrive. Wander them in the morning light, then come back down for the evening.',
      'Casa AMARA liegt auf der Linie der Calle Real am Fuß des Barribarto, sodass das ganze Viertel von eurer Tür aus ansteigt: Tretet hinaus, wendet euch bergauf, und die Gassen gehören euch, bevor die Tagesgäste kommen. Streift im Morgenlicht durch sie und kommt für den Abend wieder herab.',
      'Casa AMARA está en la línea de la calle Real, al pie del Barribarto, así que todo el barrio sube desde vuestra puerta: salid, girad cuesta arriba y las calles son vuestras antes de que lleguen los visitantes del día. Recorredlas con la luz de la mañana y bajad de nuevo para la tarde.',
      'Casa AMARA ligt op de lijn van de Calle Real aan de voet van het Barribarto, zodat de hele wijk vanaf je deur omhoogklimt: stap naar buiten, sla bergop in, en de straatjes zijn van jou voordat de dagbezoekers komen. Dwaal er in het ochtendlicht doorheen en kom voor de avond weer omlaag.',
      'Casa AMARA ligger på Calle Reals linje vid foten av Barribarto, så hela stadsdelen klättrar från er dörr: kliv ut, vänd uppför, och gränderna är era innan dagens besökare kommer. Ströva i dem i morgonljuset och kom ner igen till kvällen.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
