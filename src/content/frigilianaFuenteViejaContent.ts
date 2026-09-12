import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaFuenteViejaSeo: AmaraAuthoringSeo = {
  version: '2026-09-12-frigiliana-fuente-vieja-v2',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-12', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Fuente Vieja in Frigiliana: The Old Fountain of 1640', description: 'Built around 1640 by Don Íñigo Manrique de Lara, fifth Señor and first Count of Frigiliana, the Fuente Vieja was first named the "Fuente Nueva" and still carries the counts’ coat of arms above its three spouts.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Fuente Vieja in Frigiliana: der alte Brunnen von 1640', description: 'Um 1640 von Don Íñigo Manrique de Lara, dem fünften Herrn und ersten Grafen von Frigiliana, erbaut, hieß die Fuente Vieja zuerst „Fuente Nueva" und trägt bis heute das Grafenwappen über ihren drei Ausläufen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'La Fuente Vieja de Frigiliana: el antiguo caño de 1640', description: 'Construida hacia 1640 por Don Íñigo Manrique de Lara, quinto señor y primer conde de Frigiliana, la Fuente Vieja se llamó primero «Fuente Nueva» y conserva el escudo de los condes sobre sus tres caños.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Fuente Vieja in Frigiliana: de oude bron van 1640', description: 'Rond 1640 gebouwd door Don Íñigo Manrique de Lara, vijfde heer en eerste graaf van Frigiliana, heette de Fuente Vieja eerst „Fuente Nueva" en draagt nog het wapen van de graven boven haar drie tuiten.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Fuente Vieja i Frigiliana: den gamla brunnen från 1640', description: 'Byggd omkring 1640 av Don Íñigo Manrique de Lara, Frigilianas femte herre och förste greve, hette Fuente Vieja först ”Fuente Nueva” och bär än grevarnas vapensköld över sina tre pipar.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Reworked 2026-09-12 from the web synthesis: the builder was the fifth
 * Señor AND first Count of Frigiliana; the fountain is a two-storey stone façade with the
 * De Lara coat of arms in the upper central field (no "brick arch"); it was first called the
 * "Fuente Nueva"; it doubled as an animal trough and carries pomegranate motifs; it stands on
 * the Plaza de la Fuente Vieja off Calle Chorruelo. Hero uses the dedicated photograph.
 */
export const frigilianaFuenteViejaCopy = {
  hero: {
    kicker: l('Old town · Fuente Vieja', 'Altstadt · Fuente Vieja', 'Casco antiguo · Fuente Vieja', 'Oude kern · Fuente Vieja', 'Gamla stan · Fuente Vieja'),
    title: l('Fuente Vieja', 'Fuente Vieja', 'Fuente Vieja', 'Fuente Vieja', 'Fuente Vieja'),
    subtitle: l(
      'The old fountain that watered the village for centuries',
      'Der alte Brunnen, der das Dorf über Jahrhunderte versorgte',
      'El antiguo caño que abasteció al pueblo durante siglos',
      'De oude bron die het dorp eeuwenlang van water voorzag',
      'Den gamla brunnen som gav byn vatten i århundraden'
    ),
    paragraphs: [
      l(
        'On the plaza that bears its name stands the Fuente Vieja, built around 1640 by Don Íñigo Manrique de Lara, fifth Señor and first Count of Frigiliana. Its two-storey stone front carries the counts’ coat of arms in the central field of the upper body, and three spouts still run into the trough below — which once doubled as the village animal trough. Into the nineteenth century this was a central point of the water supply, where people filled their jars, and it makes a quiet historic corner at the edge of the old town.',
        'Auf dem Platz, der ihren Namen trägt, steht die Fuente Vieja, um 1640 von Don Íñigo Manrique de Lara, dem fünften Herrn und ersten Grafen von Frigiliana, erbaut. Ihre zweigeschossige Steinfront trägt das Grafenwappen im Mittelfeld des oberen Körpers, und drei Ausläufe rinnen weiter in den Trog darunter — der einst zugleich die Viehtränke des Dorfes war. Bis ins 19. Jahrhundert war dies ein zentraler Punkt der Wasserversorgung, an dem man die Krüge füllte, und sie bildet einen stillen historischen Winkel am Rand der Altstadt.',
        'En la plaza que lleva su nombre se alza la Fuente Vieja, construida hacia 1640 por Don Íñigo Manrique de Lara, quinto señor y primer conde de Frigiliana. Su frente de piedra de dos cuerpos luce el escudo de los condes en la calle central del cuerpo superior, y tres caños siguen vertiendo en el pilón —que hacía también de abrevadero del pueblo—. Hasta el siglo XIX fue un punto central del abastecimiento de agua, donde se llenaban los cántaros, y compone un tranquilo rincón histórico al borde del casco antiguo.',
        'Op het plein dat haar naam draagt staat de Fuente Vieja, rond 1640 gebouwd door Don Íñigo Manrique de Lara, vijfde heer en eerste graaf van Frigiliana. Haar stenen voorzijde van twee geledingen draagt het wapen van de graven in het middenveld van het bovendeel, en drie tuiten lopen nog in de trog eronder — die ooit tevens de dorpsdrinkbak voor het vee was. Tot in de 19e eeuw was dit een centraal punt van de watervoorziening, waar men de kruiken vulde, en ze vormt een stille historische hoek aan de rand van de oude kern.',
        'På torget som bär dess namn står Fuente Vieja, byggd omkring 1640 av Don Íñigo Manrique de Lara, Frigilianas femte herre och förste greve. Dess tvåvånings stenfront bär grevarnas vapen i det mellersta fältet av den övre kroppen, och tre pipar rinner alltjämt ner i tråget nedanför — som en gång också var byns vattningsplats för djuren. Fram till 1800-talet var detta en central punkt i vattenförsörjningen, där man fyllde krukorna, och den utgör en stilla historisk vrå vid kanten av gamla stan.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '~1640', label: l('Built by Don Íñigo Manrique de Lara', 'Erbaut von Don Íñigo Manrique de Lara', 'Construida por Don Íñigo Manrique de Lara', 'Gebouwd door Don Íñigo Manrique de Lara', 'Byggd av Don Íñigo Manrique de Lara') },
      { value: '5./1.', label: l('Fifth Señor and first Count of Frigiliana', 'Fünfter Herr und erster Graf von Frigiliana', 'Quinto señor y primer conde de Frigiliana', 'Vijfde heer en eerste graaf van Frigiliana', 'Femte herre och förste greve av Frigiliana') },
      { value: 'Escudo', label: l('The counts’ coat of arms, upper central field', 'Das Grafenwappen im oberen Mittelfeld', 'El escudo de los condes, cuerpo superior', 'Het wapen van de graven, bovenste middenveld', 'Grevarnas vapen i övre mittfältet') },
      { value: '3 caños', label: l('Three spouts, once also an animal trough', 'Drei Ausläufe, einst auch Viehtränke', 'Tres caños, antaño también abrevadero', 'Drie tuiten, ooit ook drinkbak', 'Tre pipar, förr även vattningsplats') }
    ],
    note: l(
      'The c.1640 dating, the fifth-Señor/first-Count attribution and the "Fuente Nueva" origin name are confirmed by the municipal history and the local heritage record; the 1990s restoration is attested by the Andalusian fountain inventory.',
      'Die Datierung um 1640, die Zuschreibung an den fünften Herrn / ersten Grafen und der Ursprungsname „Fuente Nueva" sind durch die kommunale Geschichte und den lokalen Denkmalbestand bestätigt; die Restaurierung der 1990er belegt das andalusische Brunnenkataster.',
      'La datación hacia 1640, la atribución al quinto señor / primer conde y el nombre original «Fuente Nueva» están confirmados por la historia municipal y el registro patrimonial local; la restauración de los años 90 la acredita el inventario andaluz de fuentes.',
      'De datering rond 1640, de toeschrijving aan de vijfde heer / eerste graaf en de oorspronkelijke naam „Fuente Nueva" zijn bevestigd door de gemeentelijke geschiedenis en het lokale erfgoedregister; de restauratie van de jaren 90 blijkt uit het Andalusische bronnenkadaster.',
      'Dateringen omkring 1640, tillskrivningen till femte herren / förste greven och ursprungsnamnet ”Fuente Nueva” bekräftas av den kommunala historien och det lokala kulturarvsregistret; 1990-talets restaurering styrks av det andalusiska brunnsregistret.'
    )
  },
  sections: [
    {
      eyebrow: l('The build', 'Der Bau', 'La obra', 'De bouw', 'Bygget'),
      title: l('Built by the lords of the village', 'Von den Herren des Dorfes erbaut', 'Levantada por los señores del pueblo', 'Gebouwd door de heren van het dorp', 'Byggd av byns herrar'),
      text: l(
        'The fountain dates from around 1640 and was raised by Don Íñigo Manrique de Lara, fifth Señor and first Count of Frigiliana — the same family whose palace-turned-sugar-works, El Ingenio, still stands nearby. It was first called the "Fuente Nueva", the new fountain, and only became the "old" one once newer fountains were built elsewhere. The two-storey stone body, its pilasters and semicircular pediment with pomegranate motifs, and the coat of arms set into the upper central field are all of a piece: public infrastructure built as a statement, with the lords’ name written into the stone above the water they provided.',
        'Der Brunnen stammt von etwa 1640 und wurde von Don Íñigo Manrique de Lara, dem fünften Herrn und ersten Grafen von Frigiliana, errichtet — jener Familie, deren Palast-und-Zuckerwerk El Ingenio bis heute in der Nähe steht. Zuerst hieß er „Fuente Nueva", der neue Brunnen, und wurde erst zum „alten", als anderswo neue Brunnen entstanden. Der zweigeschossige Steinkörper, seine Pilaster und der halbrunde Giebel mit Granatapfelmotiven und das ins obere Mittelfeld gesetzte Wappen sind aus einem Guss: öffentliche Infrastruktur als Zeichen gebaut, mit dem Namen der Herren im Stein über dem Wasser, das sie stellten.',
        'La fuente data de hacia 1640 y la levantó Don Íñigo Manrique de Lara, quinto señor y primer conde de Frigiliana, la misma familia cuyo palacio convertido en ingenio azucarero, El Ingenio, sigue en pie muy cerca. Primero se llamó «Fuente Nueva» y solo pasó a ser la «vieja» cuando se construyeron otras fuentes en el pueblo. El cuerpo de piedra de dos alturas, sus pilastras y el frontón semicircular con motivos de granada, y el escudo encajado en la calle central superior forman un todo: una obra pública levantada como declaración, con el nombre de los señores escrito en la piedra sobre el agua que proporcionaban.',
        'De bron dateert van rond 1640 en werd opgericht door Don Íñigo Manrique de Lara, vijfde heer en eerste graaf van Frigiliana — dezelfde familie wier tot suikerfabriek verbouwde paleis, El Ingenio, nog vlakbij staat. Ze heette eerst „Fuente Nueva", de nieuwe bron, en werd pas de „oude" toen elders nieuwe bronnen verrezen. Het stenen lichaam van twee geledingen, de pilasters en het halfronde fronton met granaatappelmotieven, en het wapen in het bovenste middenveld vormen één geheel: openbare infrastructuur als statement gebouwd, met de naam van de heren in de steen boven het water dat zij leverden.',
        'Brunnen är från omkring 1640 och restes av Don Íñigo Manrique de Lara, Frigilianas femte herre och förste greve — samma familj vars palats-blivna-sockerbruk El Ingenio ännu står i närheten. Den kallades först ”Fuente Nueva”, den nya brunnen, och blev den ”gamla” först när nyare brunnar byggdes på annat håll. Den tvåvånings stenkroppen, dess pilastrar och det halvrunda krönet med granatäpplemotiv, och vapnet infällt i det övre mittfältet hör ihop: offentlig infrastruktur byggd som en markering, med herrarnas namn skrivet i stenen ovanför vattnet de tillhandahöll.'
      )
    },
    {
      eyebrow: l('The water', 'Das Wasser', 'El agua', 'Het water', 'Vattnet'),
      title: l('Where daily life gathered', 'Wo sich der Alltag traf', 'Donde se juntaba la vida diaria', 'Waar het dagelijks leven samenkwam', 'Där vardagen samlades'),
      text: l(
        'For centuries the Fuente Vieja was the practical heart of daily life: the main source of water for the households and their animals, the place you came to fill jars and troughs before piped water reached the houses. Its three spouts still run, and standing in front of it is the quickest way to feel how much of a hillside village’s day once turned around fetching water.',
        'Jahrhundertelang war die Fuente Vieja das praktische Herz des Alltags: die wichtigste Wasserquelle für die Haushalte und ihr Vieh, der Ort, an den man kam, um Krüge und Tröge zu füllen, bevor Leitungswasser die Häuser erreichte. Ihre drei Ausläufe laufen noch, und davor zu stehen ist der schnellste Weg zu spüren, wie sehr sich der Tag eines Hangdorfs einst ums Wasserholen drehte.',
        'Durante siglos la Fuente Vieja fue el corazón práctico de la vida diaria: la principal fuente de agua para las casas y sus animales, el lugar al que se acudía a llenar cántaros y pilones antes de que el agua corriente llegara a las viviendas. Sus tres caños siguen manando, y ponerse delante es la forma más rápida de sentir cuánto giraba el día de un pueblo en ladera en torno a acarrear agua.',
        'Eeuwenlang was de Fuente Vieja het praktische hart van het dagelijks leven: de belangrijkste waterbron voor de huishoudens en hun dieren, de plek waar je kwam om kruiken en troggen te vullen voordat leidingwater de huizen bereikte. De drie tuiten lopen nog, en ervoor staan is de snelste manier om te voelen hoezeer de dag van een hellingdorp ooit om het halen van water draaide.',
        'I århundraden var Fuente Vieja vardagens praktiska hjärta: den viktigaste vattenkällan för hushållen och deras djur, platsen dit man kom för att fylla krukor och tråg innan ledningsvattnet nådde husen. Dess tre pipar rinner alltjämt, och att stå framför den är snabbaste sättet att känna hur mycket en sluttningsbys dag en gång kretsade kring att hämta vatten.'
      )
    },
    {
      eyebrow: l('Where to find it', 'Wo ihr sie findet', 'Dónde encontrarla', 'Waar je haar vindt', 'Var ni hittar den'),
      title: l('On the Plaza de la Fuente Vieja', 'An der Plaza de la Fuente Vieja', 'En la plaza de la Fuente Vieja', 'Aan de Plaza de la Fuente Vieja', 'Vid Plaza de la Fuente Vieja'),
      text: l(
        'The fountain stands on the small plaza that takes its name, off a branch of Calle Chorruelo near the Ermita de Ecce Homo, at the edge of the old town. That makes it a natural turning point on a walk — pair it with the tiny chapel a step away, then work back up through the lanes. Take a moment with the coat of arms; restored in the 1990s, the stone still shows the wear of the centuries it served.',
        'Der Brunnen steht auf dem kleinen Platz, der seinen Namen trägt, an einem Abzweig der Calle Chorruelo nahe der Ermita de Ecce Homo, am Rand der Altstadt. Das macht ihn zu einem natürlichen Wendepunkt auf einem Gang — verbindet ihn mit der winzigen Kapelle nebenan und arbeitet euch dann wieder hinauf durch die Gassen. Nehmt euch einen Moment für das Wappen; in den 1990ern restauriert, zeigt der Stein noch die Spuren der Jahrhunderte, die er diente.',
        'La fuente se alza en la pequeña plaza que lleva su nombre, en un ramal de la calle Chorruelo junto a la Ermita del Ecce Homo, al borde del casco antiguo. Eso la convierte en un punto de retorno natural en un paseo: combinadla con la capillita de al lado y luego remontad por las calles. Deteneos un momento en el escudo; restaurada en los años 90, la piedra aún muestra el desgaste de los siglos que sirvió.',
        'De bron staat op het pleintje dat haar naam draagt, aan een zijtak van de Calle Chorruelo bij de Ermita de Ecce Homo, aan de rand van de oude kern. Dat maakt haar tot een natuurlijk keerpunt op een wandeling — combineer haar met de kleine kapel ernaast en werk je dan weer omhoog door de straatjes. Neem even de tijd voor het wapen; in de jaren 90 gerestaureerd, toont de steen nog de slijtage van de eeuwen die ze diende.',
        'Brunnen står på det lilla torg som bär dess namn, vid en gren av Calle Chorruelo nära Ermita de Ecce Homo, vid kanten av gamla stan. Det gör den till en naturlig vändpunkt på en vandring — kombinera den med det lilla kapellet intill och arbeta er sedan upp igen genom gränderna. Ta en stund vid vapenskölden; restaurerad på 1990-talet visar stenen ännu slitaget av de århundraden den tjänade.'
      )
    }
  ],
  pullQuote: l(
    'For generations, this is where the whole village’s water arrived.',
    'Über Generationen kam hier das Wasser des ganzen Dorfes an.',
    'Durante generaciones, aquí llegó el agua de todo el pueblo.',
    'Generaties lang kwam hier het water van het hele dorp aan.',
    'I generationer kom hela byns vatten hit.'
  ),
  closing: {
    title: l('Make it a turning point', 'Macht ihn zum Wendepunkt', 'Convertidla en punto de retorno', 'Maak er een keerpunt van', 'Gör den till en vändpunkt'),
    lead: l(
      'The Fuente Vieja is a short walk down through the old town from Casa AMARA. Reach it at the village edge, then let the lanes carry you back up past San Antonio, El Ingenio and the ceramic panels.',
      'Die Fuente Vieja liegt einen kurzen Weg durch die Altstadt unterhalb von Casa AMARA. Erreicht sie am Ortsrand und lasst euch dann von den Gassen wieder hinauf an San Antonio, El Ingenio und den Keramiktafeln vorbeitragen.',
      'La Fuente Vieja queda a un corto paseo cuesta abajo por el casco antiguo desde Casa AMARA. Llegad a ella en el borde del pueblo y dejad que las calles os lleven de vuelta arriba, junto a San Antonio, El Ingenio y los azulejos.',
      'De Fuente Vieja ligt op een korte wandeling omlaag door de oude kern vanaf Casa AMARA. Bereik haar aan de dorpsrand en laat de straatjes je dan weer omhoog voeren langs San Antonio, El Ingenio en de keramiekpanelen.',
      'Fuente Vieja ligger en kort promenad nedför genom gamla stan från Casa AMARA. Nå den vid byns kant och låt sedan gränderna föra er tillbaka upp förbi San Antonio, El Ingenio och keramikpanelerna.'
    ),
    oldTownCta: l('Back to the old town', 'Zurück zur Altstadt', 'Volver al casco antiguo', 'Terug naar de oude kern', 'Tillbaka till gamla stan'),
    availabilityCta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  }
} as const;
