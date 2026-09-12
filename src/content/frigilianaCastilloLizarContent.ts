import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaCastilloLizarSeo: AmaraAuthoringSeo = {
  version: '2026-09-12-frigiliana-castillo-lizar-v2',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/07-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-12', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Castillo de Lizar in Frigiliana: The Ruined Moorish Fortress', description: 'The wall remains of a 9th–11th-century Moorish fortress above Frigiliana, razed after the 1569 uprising under Don Luis de Requesens — its cut stone reused to build the counts’ palace, El Ingenio.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Castillo de Lizar in Frigiliana: die maurische Burgruine', description: 'Die Mauerreste einer maurischen Festung des 9.–11. Jahrhunderts oberhalb von Frigiliana, nach dem Aufstand 1569 unter Don Luis de Requesens geschleift — ihre behauenen Steine wurden für den Grafenpalast El Ingenio wiederverwendet.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'El castillo de Lízar en Frigiliana: la fortaleza árabe en ruinas', description: 'Los restos de muro de una fortaleza árabe de los siglos IX–XI sobre Frigiliana, arrasada tras la rebelión de 1569 por orden de Don Luis de Requesens; sus sillares se reutilizaron para el palacio condal, El Ingenio.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Castillo de Lizar in Frigiliana: de vervallen Moorse vesting', description: 'De muurresten van een 9e–11e-eeuwse Moorse vesting boven Frigiliana, na de opstand van 1569 geslecht onder Don Luis de Requesens — haar gehouwen stenen werden hergebruikt voor het grafelijk paleis El Ingenio.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Castillo de Lizar i Frigiliana: den raserade moriska fästningen', description: 'Murresterna av en morisk fästning från 800–1000-talet ovanför Frigiliana, raserad efter upproret 1569 under Don Luis de Requesens — dess huggna stenar återanvändes till grevepalatset El Ingenio.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Reworked 2026-09-12 from the web synthesis: the razing was ordered by
 * the royal commander Don Luis de Requesens with Philip II’s approval (not simply "the crown"),
 * and the castle’s cut stone (sillares) was reused to build the Manrique de Lara palace, today
 * El Ingenio. Fortress footprint ~4,000 m²; BIC since 1985; the hill name (cerro de Lízar vs.
 * cerro de la Sabina) is left open. Distinct from El Fuerte / Peñón, the higher 1569 battle
 * summit. No photograph yet: typographic cover; the ruin must never read as an intact castle.
 */
export const frigilianaCastilloLizarCopy = {
  hero: {
    kicker: l('Old town · Castillo de Lizar', 'Altstadt · Castillo de Lizar', 'Casco antiguo · Castillo de Lízar', 'Oude kern · Castillo de Lizar', 'Gamla stan · Castillo de Lizar'),
    title: l('Restos del Castillo de Lizar', 'Restos del Castillo de Lizar', 'Restos del Castillo de Lízar', 'Restos del Castillo de Lizar', 'Restos del Castillo de Lizar'),
    subtitle: l(
      'The ruined fortress that explains the village’s map',
      'Die Burgruine, die die Karte des Dorfes erklärt',
      'La fortaleza en ruinas que explica el mapa del pueblo',
      'De vestingruïne die de kaart van het dorp verklaart',
      'Fästningsruinen som förklarar byns karta'
    ),
    paragraphs: [
      l(
        'Above the houses stand the wall remains of the Castillo de Lizar, a Moorish fortress reckoned to the ninth to eleventh centuries. After the Morisco uprising of 1569, the crown ordered it largely destroyed so it could never again shelter insurgents, and only limited masonry survives. Little is left to walk around — but the site is essential: it is the single best place to read Frigiliana’s medieval topography and the defensive line the whole village was built along.',
        'Über den Häusern stehen die Mauerreste des Castillo de Lizar, einer maurischen Festung, die ins 9. bis 11. Jahrhundert gerechnet wird. Nach dem Morisken-Aufstand von 1569 ließ die Krone sie weitgehend zerstören, damit sie nie wieder Aufständischen Zuflucht bieten konnte; erhalten ist nur wenig Mauerwerk. Zum Umhergehen bleibt kaum etwas — doch der Ort ist wesentlich: Nirgends liest sich Frigilianas mittelalterliche Topografie und die Verteidigungslinie, an der das ganze Dorf entstand, besser.',
        'Sobre las casas se alzan los restos de muro del castillo de Lízar, una fortaleza árabe que se sitúa entre los siglos IX y XI. Tras la rebelión morisca de 1569, la Corona ordenó arrasarla en gran parte para que no volviera a servir de refugio a los sublevados, y solo se conserva algo de fábrica. Queda poco que recorrer, pero el lugar es esencial: es el mejor sitio para leer la topografía medieval de Frigiliana y la línea defensiva sobre la que se levantó todo el pueblo.',
        'Boven de huizen staan de muurresten van het Castillo de Lizar, een Moorse vesting die tot de negende tot elfde eeuw wordt gerekend. Na de Moriskenopstand van 1569 liet de kroon haar grotendeels verwoesten zodat ze nooit meer opstandelingen kon herbergen, en alleen beperkt metselwerk bleef over. Er valt weinig te belopen — maar de plek is essentieel: nergens lees je de middeleeuwse topografie van Frigiliana en de verdedigingslinie waarlangs het hele dorp ontstond beter.',
        'Ovanför husen står murresterna av Castillo de Lizar, en morisk fästning som förs till 800- till 1000-talet. Efter moriskupproret 1569 lät kronan riva den till stor del så att den aldrig mer skulle kunna hysa upprorsmän, och bara begränsat murverk återstår. Det finns föga att gå runt — men platsen är väsentlig: ingenstans läser man Frigilianas medeltida topografi och den försvarslinje som hela byn byggdes längs bättre.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '9.–11. Jh.', label: l('A Moorish fortress above the village', 'Maurische Festung oberhalb des Dorfes', 'Fortaleza árabe sobre el pueblo', 'Moorse vesting boven het dorp', 'Morisk fästning ovanför byn') },
      { value: '1569', label: l('Razed under Requesens after the uprising', 'Nach dem Aufstand unter Requesens geschleift', 'Arrasada tras la rebelión por Requesens', 'Na de opstand geslecht onder Requesens', 'Raserad efter upproret under Requesens') },
      { value: '~4.000 m²', label: l('The footprint of the hilltop fortress', 'Grundfläche der Festung auf der Höhe', 'La superficie de la fortaleza en la altura', 'De oppervlakte van de vesting op de hoogte', 'Fästningens yta på höjden') },
      { value: 'El Ingenio', label: l('Its cut stone reused for the counts’ palace', 'Ihre Steine im Grafenpalast wiederverwendet', 'Sus sillares reutilizados en el palacio condal', 'Haar stenen hergebruikt in het grafelijk paleis', 'Dess stenar återanvända i grevepalatset') }
    ],
    note: l(
      'The 1569 razing (ordered by Don Luis de Requesens with Philip II’s approval) and the reuse of the stone for El Ingenio are documented; the 9th–11th-century dating carries two hypotheses and the hill name is left open (cerro de Lízar / cerro de la Sabina). The site is a ruin, not an intact castle.',
      'Die Schleifung 1569 (angeordnet von Don Luis de Requesens mit Zustimmung Philipps II.) und die Wiederverwendung der Steine für El Ingenio sind belegt; die Datierung ins 9.–11. Jahrhundert kennt zwei Hypothesen, und der Hügelname bleibt offen (cerro de Lízar / cerro de la Sabina). Der Ort ist eine Ruine, keine intakte Burg.',
      'El arrasamiento de 1569 (ordenado por Don Luis de Requesens con la aprobación de Felipe II) y la reutilización de la piedra para El Ingenio están documentados; la datación de los siglos IX–XI tiene dos hipótesis y el nombre del cerro queda abierto (cerro de Lízar / cerro de la Sabina). El lugar es una ruina, no un castillo intacto.',
      'De slechting van 1569 (bevolen door Don Luis de Requesens met goedkeuring van Filips II) en het hergebruik van de steen voor El Ingenio zijn gedocumenteerd; de datering 9e–11e eeuw kent twee hypotheses en de heuvelnaam blijft open (cerro de Lízar / cerro de la Sabina). De plek is een ruïne, geen intact kasteel.',
      'Raseringen 1569 (beordrad av Don Luis de Requesens med Filip II:s godkännande) och återanvändningen av stenen till El Ingenio är dokumenterade; dateringen till 800–1000-talet har två hypoteser och kullens namn lämnas öppet (cerro de Lízar / cerro de la Sabina). Platsen är en ruin, inte ett intakt slott.'
    )
  },
  sections: [
    {
      eyebrow: l('The fortress', 'Die Festung', 'La fortaleza', 'De vesting', 'Fästningen'),
      title: l('A stronghold on the height', 'Eine Feste auf der Höhe', 'Un baluarte en la altura', 'Een burcht op de hoogte', 'Ett fäste på höjden'),
      text: l(
        'The Castillo de Lizar was a Moorish fortress, reckoned to the ninth to eleventh centuries, set on the height above the settlement. Its job was command: it watched the approaches and anchored the defence of the valley, and the medieval village grew below and around it. That relationship — stronghold above, houses below — is the logic the whole old town still follows.',
        'Das Castillo de Lizar war eine maurische Festung, ins 9. bis 11. Jahrhundert gerechnet, auf der Höhe über der Siedlung. Ihre Aufgabe war Kontrolle: Sie überwachte die Zugänge und verankerte die Verteidigung des Tals, und das mittelalterliche Dorf wuchs unter und um sie herum. Dieses Verhältnis — Feste oben, Häuser unten — ist die Logik, der die ganze Altstadt bis heute folgt.',
        'El castillo de Lízar era una fortaleza árabe, situada entre los siglos IX y XI, en la altura sobre el poblado. Su función era el control: vigilaba los accesos y anclaba la defensa del valle, y el pueblo medieval creció debajo y alrededor. Esa relación —baluarte arriba, casas abajo— es la lógica que todavía sigue todo el casco antiguo.',
        'Het Castillo de Lizar was een Moorse vesting, gerekend tot de negende tot elfde eeuw, op de hoogte boven de nederzetting. Haar taak was controle: ze bewaakte de toegangen en verankerde de verdediging van het dal, en het middeleeuwse dorp groeide eronder en eromheen. Die verhouding — burcht boven, huizen onder — is de logica die de hele oude kern nog volgt.',
        'Castillo de Lizar var en morisk fästning, förd till 800- till 1000-talet, på höjden ovanför bosättningen. Dess uppgift var kontroll: den bevakade tillfarterna och förankrade dalens försvar, och den medeltida byn växte nedanför och runt den. Det förhållandet — fäste ovan, hus nedan — är logiken som hela gamla stan ännu följer.'
      )
    },
    {
      eyebrow: l('The razing', 'Die Schleifung', 'El arrasamiento', 'De slechting', 'Raseringen'),
      title: l('Destroyed so it could not shelter rebels again', 'Zerstört, damit es nie wieder Rebellen barg', 'Arrasada para que no volviera a amparar rebeldes', 'Verwoest opdat het nooit meer rebellen zou herbergen', 'Raserad så att den aldrig mer skulle hysa rebeller'),
      text: l(
        'When the Morisco revolt was put down in 1569, the royal commander Don Luis de Requesens — with the approval of King Philip II — ordered the fortress largely destroyed so that it could never again serve as a refuge for insurgents. Its cut stone did not go to waste: much of it was carried down to build the Manrique de Lara counts’ palace, the building known today as El Ingenio. What survives up here is limited wall remains, enough to fix the position rather than reconstruct the building — the physical footnote to the revolt the ceramic panels tell in sequence a few lanes below.',
        'Als der Morisken-Aufstand 1569 niedergeschlagen war, ließ der königliche Feldherr Don Luis de Requesens — mit Zustimmung König Philipps II. — die Festung weitgehend zerstören, damit sie nie wieder Aufständischen als Zuflucht dienen konnte. Ihre behauenen Steine gingen nicht verloren: Ein großer Teil wanderte hinab zum Bau des Grafenpalasts der Manrique de Lara — jenes Gebäude, das man heute El Ingenio nennt. Hier oben blieben wenige Mauerreste, genug, um die Lage zu bestimmen, nicht, um den Bau zu rekonstruieren — die physische Fußnote zu dem Aufstand, den die Keramiktafeln wenige Gassen tiefer der Reihe nach erzählen.',
        'Sofocada la rebelión morisca en 1569, el capitán real Don Luis de Requesens —con la aprobación del rey Felipe II— ordenó arrasar en gran parte la fortaleza para que no volviera a servir de refugio a los sublevados. Sus sillares no se perdieron: buena parte bajó para levantar el palacio de los condes Manrique de Lara, el edificio que hoy llamamos El Ingenio. Aquí arriba quedan restos de muro, suficientes para fijar la posición, no para reconstruir el edificio: la nota al pie física de la rebelión que los azulejos narran en orden unas calles más abajo.',
        'Toen de Moriskenopstand in 1569 was neergeslagen, liet de koninklijke bevelhebber Don Luis de Requesens — met goedkeuring van koning Filips II — de vesting grotendeels verwoesten zodat ze nooit meer opstandelingen als toevlucht kon dienen. Haar gehouwen stenen gingen niet verloren: een groot deel ging omlaag voor de bouw van het paleis van de graven Manrique de Lara, het gebouw dat we vandaag El Ingenio noemen. Hierboven bleven beperkte muurresten, genoeg om de plek vast te leggen, niet om het gebouw te reconstrueren — de fysieke voetnoot bij de opstand die de keramiekpanelen een paar straatjes lager op volgorde vertellen.',
        'När moriskupproret slogs ned 1569 lät den kunglige befälhavaren Don Luis de Requesens — med kung Filip II:s godkännande — riva fästningen till stor del så att den aldrig mer skulle kunna tjäna som tillflykt för upprorsmän. Dess huggna stenar gick inte förlorade: en stor del bars ner för att bygga grevarna Manrique de Laras palats, byggnaden vi i dag kallar El Ingenio. Här uppe återstår begränsade murrester, nog för att fastställa läget, inte för att återskapa byggnaden — den fysiska fotnoten till upproret som keramikpanelerna berättar i ordning några gränder längre ner.'
      )
    },
    {
      eyebrow: l('Why it matters', 'Warum es zählt', 'Por qué importa', 'Waarom het telt', 'Varför det betyder något'),
      title: l('Read the map from up here', 'Von hier oben die Karte lesen', 'Leer el mapa desde aquí arriba', 'Lees de kaart van hierboven', 'Läs kartan härifrån'),
      text: l(
        'Come for the vantage rather than the masonry. From the height the shape of the medieval village makes sense: why the oldest quarter clings where it does, how the fortress commanded the valley, where the defensive line ran. Treat it as a rough, open site — footing is uneven and there is nothing restored to enter — and give yourself the view, which is the real reason to climb.',
        'Kommt wegen des Ausblicks, nicht wegen des Mauerwerks. Von der Höhe ergibt die Form des mittelalterlichen Dorfes Sinn: warum sich das älteste Viertel dort festklammert, wo es liegt, wie die Festung das Tal beherrschte, wo die Verteidigungslinie verlief. Nehmt es als raues, offenes Gelände — der Untergrund ist uneben, und es gibt nichts Restauriertes zu betreten — und gönnt euch den Blick, der der eigentliche Grund zum Aufstieg ist.',
        'Subid por la panorámica, no por la fábrica. Desde la altura cobra sentido la forma del pueblo medieval: por qué el barrio más antiguo se agarra donde lo hace, cómo la fortaleza dominaba el valle, por dónde iba la línea defensiva. Tomadlo como un sitio abierto y agreste —el piso es irregular y no hay nada restaurado que visitar— y quedaos con la vista, que es la verdadera razón para subir.',
        'Kom voor het uitzicht, niet voor het metselwerk. Vanaf de hoogte krijgt de vorm van het middeleeuwse dorp betekenis: waarom de oudste wijk zich vastklampt waar ze ligt, hoe de vesting het dal beheerste, waar de verdedigingslinie liep. Beschouw het als een ruw, open terrein — de ondergrond is oneffen en er is niets gerestaureerds te betreden — en gun jezelf het uitzicht, de echte reden om te klimmen.',
        'Kom för utsikten, inte för murverket. Från höjden blir den medeltida byns form begriplig: varför den äldsta stadsdelen klamrar sig där den gör, hur fästningen behärskade dalen, var försvarslinjen gick. Betrakta det som en skrovlig, öppen plats — underlaget är ojämnt och det finns inget restaurerat att gå in i — och unna er utsikten, det verkliga skälet att klättra.'
      )
    }
  ],
  pullQuote: l(
    'Little of the castle is left — yet it still explains why the village sits the way it does.',
    'Von der Burg blieb wenig — doch sie erklärt bis heute, warum das Dorf so liegt, wie es liegt.',
    'Del castillo queda poco, pero aún explica por qué el pueblo se asienta como lo hace.',
    'Van het kasteel bleef weinig — toch verklaart het nog waarom het dorp ligt zoals het ligt.',
    'Av slottet återstår föga — ändå förklarar det alltjämt varför byn ligger som den gör.'
  ),
  closing: {
    title: l('Climb for the vantage', 'Steigt hinauf für den Ausblick', 'Subid por la panorámica', 'Klim voor het uitzicht', 'Klättra för utsikten'),
    lead: l(
      'The remains of the Castillo de Lizar sit above the old town, a climb up through the oldest lanes from Casa AMARA. Pair it with the ceramic panels of the 1569 revolt and the miradores of the Callejón del Peñón over the rooftops.',
      'Die Reste des Castillo de Lizar liegen über der Altstadt, ein Anstieg durch die ältesten Gassen von Casa AMARA aus. Verbindet ihn mit den Keramiktafeln des Aufstands von 1569 und den Miradores des Callejón del Peñón über den Dächern.',
      'Los restos del castillo de Lízar quedan sobre el casco antiguo, una subida por las calles más antiguas desde Casa AMARA. Combinadlo con los azulejos de la rebelión de 1569 y los miradores del callejón del Peñón sobre los tejados.',
      'De resten van het Castillo de Lizar liggen boven de oude kern, een klim door de oudste straatjes vanaf Casa AMARA. Combineer het met de keramiekpanelen van de opstand van 1569 en de miradores van de Callejón del Peñón over de daken.',
      'Resterna av Castillo de Lizar ligger ovanför gamla stan, en klättring genom de äldsta gränderna från Casa AMARA. Kombinera den med keramikpanelerna om upproret 1569 och miradorerna vid Callejón del Peñón över taken.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
