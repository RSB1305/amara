import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaCallejonPenonSeo: AmaraAuthoringSeo = {
  version: '2026-09-13-frigiliana-callejon-penon-v3',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/05-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-13', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  landmark: {
    name: { en: 'Callejón del Peñón', de: 'Callejón del Peñón', es: 'Callejón del Peñón', nl: 'Callejón del Peñón', sv: 'Callejón del Peñón' },
    // IGN CartoCiudad centreline of the lane (id 290530000100); pending an on-site GPS fix.
    latitude: 36.792155,
    longitude: -3.896415,
    addressLocality: 'Frigiliana',
    addressRegion: 'Andalusia',
    addressCountry: 'ES',
    isAccessibleForFree: true
  },
  languages: {
    en: { title: 'Callejón del Peñón & the Miradores of Frigiliana', description: 'The steep, much-photographed lane in Frigiliana’s upper Barribarto, and the miradores nearby that open over the rooftops, the valley and the sierra — best early and late.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Callejón del Peñón & die Miradores von Frigiliana', description: 'Die steile, vielfotografierte Gasse im oberen Barribarto von Frigiliana und die Miradores in der Nähe, die sich über die Dächer, das Tal und die Sierra öffnen — früh und spät am schönsten.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'El callejón del Peñón y los miradores de Frigiliana', description: 'La calle empinada y muy fotografiada del Barribarto de Frigiliana, y los miradores cercanos que se abren sobre los tejados, el valle y la sierra — mejor temprano y al atardecer.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Callejón del Peñón & de miradores van Frigiliana', description: 'Het steile, veel gefotografeerde straatje in het hoge Barribarto van Frigiliana, en de miradores in de buurt die uitkijken over de daken, het dal en de sierra — het mooist vroeg en laat.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Callejón del Peñón & Frigilianas miradorer', description: 'Den branta, mycket fotograferade gränden i Frigilianas övre Barribarto, och miradorerna i närheten som öppnar sig över taken, dalen och sierran — bäst tidigt och sent.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Names the specific viewpoints the Barribarto quarter page leaves
 * general. Reworked 2026-09-12 from the web synthesis: the documented panorama is over the
 * village, mountains and sea — there is no sourced "clearest view of / frames El Fuerte", and
 * the lane’s "Peñón" is a local rock, distinct from the Peñón de Frigiliana / El Fuerte battle
 * mount, so the word coincidence is not played as a meaning bridge. Some upper lanes are
 * adarves (half-private) — the walk must respect that. No photograph yet: typographic cover.
 */
export const frigilianaCallejonPenonCopy = {
  hero: {
    kicker: l('Old town · Callejón del Peñón', 'Altstadt · Callejón del Peñón', 'Casco antiguo · Callejón del Peñón', 'Oude kern · Callejón del Peñón', 'Gamla stan · Callejón del Peñón'),
    title: l('Callejón del Peñón & the miradores', 'Callejón del Peñón & die Miradores', 'El callejón del Peñón y los miradores', 'Callejón del Peñón & de miradores', 'Callejón del Peñón & miradorerna'),
    subtitle: l(
      'The photographed lane and the miradores of the upper quarter',
      'Die fotografierte Gasse und die Miradores des Oberviertels',
      'La calle fotografiada y los miradores de la parte alta',
      'Het gefotografeerde straatje en de miradores van de bovenwijk',
      'Den fotograferade gränden och miradorerna i övre stadsdelen'
    ),
    paragraphs: [
      l(
        'High in the Barribarto, the steep Callejón del Peñón is the corner every visitor photographs — whitewashed walls, worn steps, pots of geraniums. Follow it to the top and it opens: from the mirador by the rock the view runs out over the tiled roofs to the valley, the sierra and, on a clear day, the sea. The light is best early and late, when the low sun rakes across the white walls and the lanes are quiet.',
        'Hoch im Barribarto ist der steile Callejón del Peñón der Winkel, den jeder Besucher fotografiert — gekalkte Wände, ausgetretene Stufen, Geranientöpfe. Folgt ihm nach oben, und er öffnet sich: Vom Mirador am Fels läuft der Blick über die Ziegeldächer hinaus ins Tal, zur Sierra und, an klaren Tagen, zum Meer. Das Licht ist früh und spät am schönsten, wenn die tiefe Sonne über die weißen Wände streift und die Gassen still sind.',
        'En lo alto del Barribarto, el empinado callejón del Peñón es el rincón que todo visitante fotografía: muros encalados, escalones gastados, macetas de geranios. Seguidlo hasta arriba y se abre: desde el mirador junto a la peña la vista corre sobre los tejados hacia el valle, la sierra y, en días claros, el mar. La luz es mejor temprano y al atardecer, cuando el sol bajo roza los muros blancos y las calles están tranquilas.',
        'Hoog in het Barribarto is het steile Callejón del Peñón de hoek die elke bezoeker fotografeert — witgekalkte muren, versleten treden, potten geraniums. Volg het naar boven en het opent zich: vanaf de mirador bij de rots reikt het uitzicht over de pannendaken naar het dal, de sierra en, op een heldere dag, de zee. Het licht is het mooist vroeg en laat, wanneer de lage zon over de witte muren strijkt en de straatjes stil zijn.',
        'Högt upp i Barribarto är den branta Callejón del Peñón den vrå varje besökare fotograferar — vitkalkade väggar, nötta trappsteg, krukor med pelargoner. Följ den upp och den öppnar sig: från miradoren vid klippan löper vyn ut över tegeltaken mot dalen, sierran och, en klar dag, havet. Ljuset är bäst tidigt och sent, när den låga solen stryker över de vita väggarna och gränderna är tysta.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: 'Peñón', label: l('The steep lane in the upper quarter', 'Die steile Gasse im oberen Viertel', 'La calle empinada de la parte alta', 'Het steile straatje in de bovenwijk', 'Den branta gränden i övre stadsdelen') },
      { value: 'Foto', label: l('One of the village’s best-known corners', 'Einer der bekanntesten Winkel des Dorfes', 'Uno de los rincones más conocidos del pueblo', 'Een van de bekendste hoeken van het dorp', 'En av byns mest kända vrår') },
      { value: 'Panorama', label: l('Over the roofs to valley, sierra and sea', 'Über die Dächer zu Tal, Sierra und Meer', 'Sobre los tejados: valle, sierra y mar', 'Over de daken naar dal, sierra en zee', 'Över taken mot dal, sierra och hav') },
      { value: 'Mirador', label: l('Viewpoints over the old town’s roofs', 'Aussichtspunkte über die Dächer der Altstadt', 'Miradores sobre los tejados del casco antiguo', 'Uitkijkpunten over de daken van de oude kern', 'Utsiktspunkter över gamla stans tak') }
    ],
    note: l(
      'Some upper lanes are adarves — half-private passages serving only their own houses; walk them with that in mind.',
      'Manche oberen Gassen sind Adarves — halbprivate Durchgänge, die nur ihre eigenen Häuser erschließen; geht sie mit diesem Wissen.',
      'Algunas calles altas son adarves —pasajes semiprivados que solo dan servicio a sus casas—; recorredlas con eso presente.',
      'Sommige hoge straatjes zijn adarves — halfprivé doorgangen die alleen hun eigen huizen ontsluiten; loop ze met dat in gedachten.',
      'Vissa övre gränder är adarves — halvprivata passager som bara betjänar sina egna hus; gå dem med det i åtanke.'
    )
  },
  sections: [
    {
      eyebrow: l('The lane', 'Die Gasse', 'La calle', 'Het straatje', 'Gränden'),
      title: l('The corner everyone photographs', 'Der Winkel, den alle fotografieren', 'El rincón que todos fotografían', 'De hoek die iedereen fotografeert', 'Vrån alla fotograferar'),
      text: l(
        'The Callejón del Peñón is the picture most people carry home from Frigiliana: a narrow, stepped lane in the medieval upper quarter, walls limewashed white, flowers spilling from the ledges. It is steep and cobbled, so it asks for shoes with grip and a slow pace — which suits it, because the reward is not just the lane itself but where it opens at the top.',
        'Der Callejón del Peñón ist das Bild, das die meisten aus Frigiliana mitnehmen: eine schmale, gestufte Gasse im mittelalterlichen Oberviertel, weiß gekalkte Wände, Blumen, die von den Simsen quellen. Sie ist steil und gepflastert, verlangt also Schuhe mit Profil und ein langsames Tempo — was ihr entgegenkommt, denn der Lohn ist nicht nur die Gasse selbst, sondern das, was sich oben öffnet.',
        'El callejón del Peñón es la imagen que la mayoría se lleva de Frigiliana: una calle estrecha y escalonada en la parte alta medieval, muros encalados de blanco, flores desbordando los alféizares. Es empinada y empedrada, así que pide calzado con agarre y paso lento, lo que le va bien, porque la recompensa no es solo la calle en sí, sino lo que se abre al llegar arriba.',
        'Het Callejón del Peñón is het beeld dat de meesten van Frigiliana meenemen: een smal, getrapt straatje in de middeleeuwse bovenwijk, wit gekalkte muren, bloemen die van de randen tuimelen. Het is steil en geplaveid en vraagt dus om schoenen met grip en een traag tempo — wat het past, want de beloning is niet alleen het straatje zelf, maar wat zich bovenaan opent.',
        'Callejón del Peñón är bilden de flesta bär hem från Frigiliana: en smal, trappad gränd i den medeltida övre stadsdelen, vitkalkade väggar, blommor som väller ut från avsatserna. Den är brant och stenlagd och ber därför om skor med grepp och ett långsamt tempo — vilket passar den, för belöningen är inte bara gränden själv utan det som öppnar sig där uppe.'
      )
    },
    {
      eyebrow: l('The view', 'Der Blick', 'La vista', 'Het uitzicht', 'Utsikten'),
      title: l('What opens up at the top', 'Was sich oben öffnet', 'Lo que se abre arriba', 'Wat zich bovenaan opent', 'Vad som öppnar sig där uppe'),
      text: l(
        'Where the lane opens, the white roofs drop away below you and the Sierra de Almijara rises behind them, with the valley and the coast beyond on a clear day. It is not a neutral backdrop: somewhere up in those same heights above the village, the Morisco revolt made its last stand in 1569 on the peak of El Fuerte — the story the ceramic panels tell a few lanes away. The prettiest corner of the village and the country of its hardest history share one horizon.',
        'Dort, wo sich die Gasse öffnet, fallen die weißen Dächer unter euch ab, und dahinter steigt die Sierra de Almijara auf, an klaren Tagen mit Tal und Küste darüber hinaus. Das ist keine neutrale Kulisse: Irgendwo oben in eben diesen Höhen über dem Dorf leistete der Morisken-Aufstand 1569 auf dem Gipfel El Fuerte seinen letzten Widerstand — die Geschichte, die die Keramiktafeln wenige Gassen weiter erzählen. Der hübscheste Winkel des Dorfes und der Schauplatz seiner härtesten Geschichte teilen sich einen Horizont.',
        'Donde la calle se abre, los tejados blancos caen a vuestros pies y detrás se alza la Sierra de Almijara, con el valle y la costa más allá en días claros. No es un telón neutro: en algún punto de esas mismas alturas sobre el pueblo, la rebelión morisca hizo su última resistencia en 1569, en la cima de El Fuerte — la historia que cuentan los azulejos unas calles más allá. El rincón más bonito del pueblo y el escenario de su historia más dura comparten un mismo horizonte.',
        'Waar het straatje zich opent, vallen de witte daken onder je weg en daarachter rijst de Sierra de Almijara op, met op een heldere dag het dal en de kust erachter. Het is geen neutrale achtergrond: ergens hoog in diezelfde hoogten boven het dorp bood de Moriskenopstand in 1569 zijn laatste verzet, op de top van El Fuerte — het verhaal dat de keramiekpanelen een paar straatjes verderop vertellen. De mooiste hoek van het dorp en het toneel van zijn hardste geschiedenis delen één horizon.',
        'Där gränden öppnar sig faller de vita taken bort under er och bakom dem reser sig Sierra de Almijara, med dalen och kusten bortom en klar dag. Det är ingen neutral fond: någonstans uppe i just dessa höjder ovanför byn gjorde moriskupproret sitt sista motstånd 1569, på toppen El Fuerte — historien som keramikpanelerna några gränder bort berättar. Byns vackraste vrå och platsen för dess hårdaste historia delar en och samma horisont.'
      )
    },
    {
      eyebrow: l('The miradores', 'Die Miradores', 'Los miradores', 'De miradores', 'Miradorerna'),
      title: l('Where to stand, and when', 'Wo man steht, und wann', 'Dónde situarse, y cuándo', 'Waar te staan, en wanneer', 'Var man står, och när'),
      text: l(
        'The Peñón is not the only opening. The lane climbs to its own viewpoint by the rock — the Mirador urbano del Peñón — and a few steps west, where Calle Santo Cristo drops to the foot of the lane, the Mirador de Santo Cristo looks out from the highest part of the village. Both catch the same sweep over the tiled roofs to the valley, the sierra and, on a clear day, the sea. Early and late are best: the low sun rakes across the white walls, and the lanes are quiet. Some of these passages are adarves, half-private and serving only their own houses, so tread lightly and keep to the open viewpoints.',
        'Der Peñón ist nicht die einzige Öffnung. Die Gasse steigt zu ihrem eigenen Aussichtspunkt am Fels hinauf — dem Mirador urbano del Peñón —, und wenige Schritte westlich, wo die Calle Santo Cristo zum Fuß der Gasse hinabführt, blickt der Mirador de Santo Cristo vom höchsten Teil des Dorfes aus. Beide fangen denselben Schwung über die Ziegeldächer zum Tal, zur Sierra und, an klaren Tagen, zum Meer. Früh und spät ist es am schönsten: Die tiefe Sonne streift über die weißen Wände, und die Gassen sind still. Manche dieser Durchgänge sind Adarves, halbprivat und nur ihren eigenen Häusern dienend — tretet also leise auf und bleibt an den offenen Aussichtspunkten.',
        'El Peñón no es la única apertura. La calle sube a su propio mirador junto a la peña —el Mirador urbano del Peñón— y, unos pasos al oeste, donde la calle Santo Cristo baja al pie del callejón, el mirador de Santo Cristo se asoma desde la parte más alta del pueblo. Ambos abarcan la misma vista sobre los tejados hacia el valle, la sierra y, en días claros, el mar. Temprano y al atardecer es lo mejor: el sol bajo roza los muros blancos y las calles están tranquilas. Algunos de esos pasajes son adarves, semiprivados y al servicio solo de sus casas, así que pisad con cuidado y quedaos en los miradores abiertos.',
        'De Peñón is niet de enige opening. Het straatje klimt naar zijn eigen uitkijkpunt bij de rots — de Mirador urbano del Peñón — en een paar passen naar het westen, waar de Calle Santo Cristo naar de voet van het straatje daalt, kijkt de Mirador de Santo Cristo uit vanaf het hoogste deel van het dorp. Beide vangen dezelfde weidse blik over de pannendaken naar het dal, de sierra en, op een heldere dag, de zee. Vroeg en laat is het mooist: de lage zon strijkt over de witte muren en de straatjes zijn stil. Sommige van deze doorgangen zijn adarves, halfprivé en alleen voor hun eigen huizen, dus loop zacht en blijf bij de open uitkijkpunten.',
        'Peñón är inte den enda öppningen. Gränden stiger till sin egen utsiktsplats vid klippan — Mirador urbano del Peñón — och några steg västerut, där Calle Santo Cristo sänker sig till grändens fot, blickar Mirador de Santo Cristo ut från byns högsta del. Båda fångar samma svep över tegeltaken mot dalen, sierran och, en klar dag, havet. Tidigt och sent är bäst: den låga solen stryker över de vita väggarna och gränderna är tysta. Några av dessa passager är adarves, halvprivata och till för sina egna hus, så trampa varsamt och håll er till de öppna utsiktspunkterna.'
      )
    }
  ],
  pullQuote: l(
    'Climb the prettiest lane in the village and it opens over the roofs, the valley and the sierra beyond.',
    'Steigt die schönste Gasse des Dorfes hinauf, und sie öffnet sich über die Dächer, das Tal und die Sierra dahinter.',
    'Subid la calle más bonita del pueblo y se abre sobre los tejados, el valle y la sierra al fondo.',
    'Beklim het mooiste straatje van het dorp en het opent zich over de daken, het dal en de sierra erachter.',
    'Gå upp för byns vackraste gränd och den öppnar sig över taken, dalen och sierran bortom.'
  ),
  visitFacts: {
    heading: l('Visit & location', 'Besuch & Lage', 'Visita y ubicación', 'Bezoek & ligging', 'Besök & läge'),
    items: [
      {
        label: l('Location', 'Standort', 'Ubicación', 'Ligging', 'Läge'),
        value: l(
          'The upper viewpoints of the Barribarto.',
          'Die oberen Aussichtspunkte im Barribarto.',
          'Los miradores altos del Barribarto.',
          'De hoge uitkijkpunten van de Barribarto.',
          'De övre utsiktspunkterna i Barribarto.'
        )
      },
      {
        label: l('Distance', 'Distanz', 'Distancia', 'Afstand', 'Avstånd'),
        value: l(
          'About 10–12 minutes on foot from Casa AMARA.',
          'Etwa 10–12 Gehminuten von Casa AMARA.',
          'A unos 10–12 minutos a pie desde Casa AMARA.',
          'Ongeveer 10–12 minuten lopen vanaf Casa AMARA.',
          'Ungefär 10–12 minuter till fots från Casa AMARA.'
        )
      },
      {
        label: l('Access', 'Zugang', 'Acceso', 'Toegang', 'Tillgång'),
        value: l(
          'Public stepped lanes, steep throughout — sturdy shoes needed; not wheelchair accessible.',
          'Öffentliche Treppengassen, durchgehend steil — festes Schuhwerk nötig; nicht barrierefrei.',
          'Callejones públicos con escalones, empinados en todo su trazado; hace falta calzado firme; no accesible en silla de ruedas.',
          'Openbare trapstraatjes, overal steil — stevige schoenen nodig; niet rolstoeltoegankelijk.',
          'Offentliga trappgränder, branta hela vägen — stadiga skor behövs; inte tillgängligt med rullstol.'
        )
      },
      {
        label: l('Best time', 'Beste Zeit', 'Mejor hora', 'Beste tijd', 'Bästa tid'),
        value: l(
          'Late afternoon, the golden hour, for the best light over the rooftops and the valley.',
          'Später Nachmittag, die goldene Stunde, für das beste Licht über Dächern und Tal.',
          'Al final de la tarde, la hora dorada, para la mejor luz sobre los tejados y el valle.',
          'Laat in de middag, het gouden uur, voor het mooiste licht over de daken en het dal.',
          'Sen eftermiddag, den gyllene timmen, för bästa ljuset över taken och dalen.'
        )
      }
    ]
  },
  nearby: {
    parts: [
      {
        text: l(
          'From here you can climb on to the ',
          'Von hier steigt ihr weiter hinauf zum ',
          'Desde aquí podéis subir al ',
          'Vanaf hier klim je verder naar het ',
          'Härifrån kan ni klättra vidare till '
        )
      },
      {
        token: 'frigiliana_castillo_lizar',
        label: l('Castillo de Lizar', 'Castillo de Lizar', 'Castillo de Lízar', 'Castillo de Lizar', 'Castillo de Lizar')
      },
      {
        text: l(
          ', or follow the ',
          ', oder folgt dem ',
          ', o seguir la ',
          ', of volg je de ',
          ', eller följa '
        )
      },
      {
        token: 'frigiliana_ceramic_panels',
        label: l('ceramic-panel walk', 'Weg der Keramiktafeln', 'ruta de los azulejos', 'wandeling langs de keramische panelen', 'vandringen längs keramikpanelerna')
      },
      {
        text: l(
          ' back down into the lanes.',
          ' wieder hinab in die Gassen.',
          ' de vuelta a las calles.',
          ' weer omlaag de straatjes in.',
          ' tillbaka ner i gränderna.'
        )
      }
    ]
  },
  closing: {
    title: l('Time it for the light', 'Plant es fürs Licht', 'Buscad la luz', 'Kies het juiste licht', 'Sikta på ljuset'),
    lead: l(
      'The Callejón del Peñón is a short, steep climb up from Casa AMARA into the Barribarto. Go early or late for the light across the white walls, when the low sun rakes the lanes and the miradores are quiet.',
      'Der Callejón del Peñón ist ein kurzer, steiler Anstieg von Casa AMARA hinauf ins Barribarto. Geht früh oder spät wegen des Lichts über die weißen Wände, wenn die tiefe Sonne die Gassen streift und die Miradores still sind.',
      'El callejón del Peñón es una subida corta y empinada desde Casa AMARA hasta el Barribarto. Id temprano o al atardecer por la luz sobre los muros blancos, cuando el sol bajo roza las calles y los miradores están tranquilos.',
      'Het Callejón del Peñón is een korte, steile klim vanaf Casa AMARA het Barribarto in. Ga vroeg of laat voor het licht over de witte muren, wanneer de lage zon de straatjes strijkt en de miradores stil zijn.',
      'Callejón del Peñón är en kort, brant klättring från Casa AMARA upp i Barribarto. Gå tidigt eller sent för ljuset över de vita väggarna, när den låga solen stryker gränderna och miradorerna är tysta.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
