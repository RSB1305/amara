import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaFuenteViejaSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-fuente-vieja-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg',
  article: { datePublished: '2026-09-11', dateModified: '2026-09-11', authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about' },
  languages: {
    en: { title: 'Fuente Vieja in Frigiliana: The Old Fountain of 1640', description: 'Built in 1640 by Don Íñigo Manrique de Lara, the fifth Lord of Frigiliana, the Fuente Vieja was the village’s main water source for centuries and still carries the weathered counts’ coat of arms.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Fuente Vieja in Frigiliana: der alte Brunnen von 1640', description: '1640 von Don Íñigo Manrique de Lara, dem fünften Herrn von Frigiliana, erbaut, war die Fuente Vieja jahrhundertelang die wichtigste Wasserquelle des Dorfes und trägt bis heute das verwitterte Grafenwappen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'La Fuente Vieja de Frigiliana: el antiguo caño de 1640', description: 'Construida en 1640 por Don Íñigo Manrique de Lara, quinto señor de Frigiliana, la Fuente Vieja fue durante siglos la principal fuente de agua del pueblo y conserva el escudo desgastado de los condes.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Fuente Vieja in Frigiliana: de oude bron van 1640', description: 'In 1640 gebouwd door Don Íñigo Manrique de Lara, de vijfde heer van Frigiliana, was de Fuente Vieja eeuwenlang de belangrijkste waterbron van het dorp en draagt nog het verweerde wapen van de graven.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Fuente Vieja i Frigiliana: den gamla brunnen från 1640', description: 'Byggd 1640 av Don Íñigo Manrique de Lara, Frigilianas femte herre, var Fuente Vieja i århundraden byns viktigaste vattenkälla och bär än i dag grevarnas nötta vapensköld.', robots: 'index, follow', canonical: 'auto' }
  }
};

/**
 * Old-town spoke (B). Authored from the operator brief and the existing Manrique de Lara
 * lordship facts; the 1640 date and the fifth-lord attribution are operator-provided and
 * carried as such. Hero uses the dedicated Fuente Vieja photograph (the counts' arms and
 * the three spouts are visible).
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
        'At the edge of the old village stands the Fuente Vieja, built in 1640 by Don Íñigo Manrique de Lara, the fifth Lord of Frigiliana. Its brick arch still carries the weathered coat of arms of the counts, and three spouts still run into the stone trough below. For centuries this was the village’s main water source — where people filled their jars and watered their animals — and it forms the historic and architectural close at the lower edge of the old town.',
        'Am Rand des alten Dorfes steht die Fuente Vieja, 1640 von Don Íñigo Manrique de Lara, dem fünften Herrn von Frigiliana, erbaut. Ihr Ziegelbogen trägt bis heute das verwitterte Wappen der Grafen, und drei Ausläufe rinnen weiter in den steinernen Trog darunter. Jahrhundertelang war dies die wichtigste Wasserquelle des Dorfes — hier füllte man die Krüge und tränkte das Vieh — und sie bildet den historischen und architektonischen Abschluss am unteren Rand der Altstadt.',
        'Al borde del pueblo viejo se alza la Fuente Vieja, construida en 1640 por Don Íñigo Manrique de Lara, quinto señor de Frigiliana. Su arco de ladrillo conserva el escudo desgastado de los condes, y tres caños siguen vertiendo en el pilón de piedra. Durante siglos fue la principal fuente de agua del pueblo —donde se llenaban los cántaros y se abrevaba el ganado— y forma el remate histórico y arquitectónico en el borde bajo del casco antiguo.',
        'Aan de rand van het oude dorp staat de Fuente Vieja, in 1640 gebouwd door Don Íñigo Manrique de Lara, de vijfde heer van Frigiliana. Haar bakstenen boog draagt nog het verweerde wapen van de graven, en drie tuiten lopen nog in de stenen trog eronder. Eeuwenlang was dit de belangrijkste waterbron van het dorp — waar men de kruiken vulde en het vee drenkte — en ze vormt de historische en architectonische afsluiting aan de onderrand van de oude kern.',
        'Vid kanten av den gamla byn står Fuente Vieja, byggd 1640 av Don Íñigo Manrique de Lara, Frigilianas femte herre. Dess tegelbåge bär än grevarnas nötta vapen, och tre pipar rinner alltjämt ner i stentråget nedanför. I århundraden var detta byns viktigaste vattenkälla — där man fyllde krukorna och vattnade djuren — och den bildar den historiska och arkitektoniska avslutningen vid gamla stans nedre kant.'
      )
    ]
  },
  keyFigures: {
    figures: [
      { value: '1640', label: l('Built by Don Íñigo Manrique de Lara', 'Erbaut von Don Íñigo Manrique de Lara', 'Construida por Don Íñigo Manrique de Lara', 'Gebouwd door Don Íñigo Manrique de Lara', 'Byggd av Don Íñigo Manrique de Lara') },
      { value: '5.', label: l('The fifth Lord of Frigiliana', 'Der fünfte Herr von Frigiliana', 'El quinto señor de Frigiliana', 'De vijfde heer van Frigiliana', 'Frigilianas femte herre') },
      { value: 'Escudo', label: l('The weathered counts’ coat of arms', 'Das verwitterte Grafenwappen', 'El escudo desgastado de los condes', 'Het verweerde wapen van de graven', 'Grevarnas nötta vapensköld') },
      { value: 'Agua', label: l('The village’s water source for centuries', 'Jahrhunderte die Wasserquelle des Dorfes', 'La fuente de agua del pueblo durante siglos', 'Eeuwenlang de waterbron van het dorp', 'Byns vattenkälla i århundraden') }
    ],
    note: l(
      'The 1640 date and the fifth-lord attribution follow the operator brief and the Manrique de Lara lordship record.',
      'Die Datierung 1640 und die Zuschreibung an den fünften Herrn folgen dem Operator-Brief und dem Manrique-de-Lara-Herrschaftsbeleg.',
      'La fecha de 1640 y la atribución al quinto señor siguen la nota del operador y el registro del señorío de los Manrique de Lara.',
      'De datering 1640 en de toeschrijving aan de vijfde heer volgen de operatornota en het Manrique de Lara-heerlijkheidsregister.',
      'Årtalet 1640 och tillskrivningen till den femte herren följer operatörsnoteringen och Manrique de Lara-länsregistret.'
    )
  },
  sections: [
    {
      eyebrow: l('The build', 'Der Bau', 'La obra', 'De bouw', 'Bygget'),
      title: l('Built by the lords of the village', 'Von den Herren des Dorfes erbaut', 'Levantada por los señores del pueblo', 'Gebouwd door de heren van het dorp', 'Byggd av byns herrar'),
      text: l(
        'The fountain dates from 1640 and was raised by Don Íñigo Manrique de Lara, the fifth Lord of Frigiliana — the same family whose palace-turned-sugar-works, El Ingenio, still stands nearby. The brick arch, the finials along its crown and the carved coat of arms are all of a piece: a piece of public infrastructure built as a statement, with the lords’ name written into the stone above the water they provided.',
        'Der Brunnen stammt von 1640 und wurde von Don Íñigo Manrique de Lara, dem fünften Herrn von Frigiliana, errichtet — jener Familie, deren Palast-und-Zuckerwerk El Ingenio bis heute in der Nähe steht. Ziegelbogen, die Aufsätze entlang der Krone und das gemeißelte Wappen sind aus einem Guss: öffentliche Infrastruktur als Zeichen gebaut, mit dem Namen der Herren im Stein über dem Wasser, das sie stellten.',
        'La fuente data de 1640 y la levantó Don Íñigo Manrique de Lara, quinto señor de Frigiliana, la misma familia cuyo palacio convertido en ingenio azucarero, El Ingenio, sigue en pie muy cerca. El arco de ladrillo, los remates de la cornisa y el escudo tallado forman un todo: una obra pública levantada como declaración, con el nombre de los señores escrito en la piedra sobre el agua que proporcionaban.',
        'De bron dateert uit 1640 en werd opgericht door Don Íñigo Manrique de Lara, de vijfde heer van Frigiliana — dezelfde familie wier tot suikerfabriek verbouwde paleis, El Ingenio, nog vlakbij staat. De bakstenen boog, de bekroningen langs de rand en het gebeeldhouwde wapen vormen één geheel: openbare infrastructuur als statement gebouwd, met de naam van de heren in de steen boven het water dat zij leverden.',
        'Brunnen är från 1640 och restes av Don Íñigo Manrique de Lara, Frigilianas femte herre — samma familj vars palats-blivna-sockerbruk El Ingenio ännu står i närheten. Tegelbågen, krönet med sina spiror och den huggna vapenskölden hör ihop: offentlig infrastruktur byggd som en markering, med herrarnas namn skrivet i stenen ovanför vattnet de tillhandahöll.'
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
      title: l('The close at the village edge', 'Der Abschluss am Ortsrand', 'El remate al borde del pueblo', 'De afsluiting aan de dorpsrand', 'Avslutningen vid byns kant'),
      text: l(
        'The fountain sits at the lower edge of the old village and reads as its architectural full stop — the point where the built lanes give way. It makes a natural turning point on a walk: come down through the old town to reach it, then work back up through the lanes. Take a moment with the coat of arms; the erosion is part of the record, the mark of the centuries it served.',
        'Der Brunnen liegt am unteren Rand des alten Dorfes und wirkt wie sein architektonischer Schlusspunkt — die Stelle, an der die bebauten Gassen enden. Er ist ein natürlicher Wendepunkt auf einem Gang: kommt durch die Altstadt herab, um ihn zu erreichen, und arbeitet euch dann wieder hinauf durch die Gassen. Nehmt euch einen Moment für das Wappen; die Verwitterung gehört zum Zeugnis, das Mal der Jahrhunderte, die er diente.',
        'La fuente está en el borde bajo del pueblo viejo y se lee como su punto final arquitectónico: el lugar donde ceden las calles construidas. Es un punto de retorno natural en un paseo: bajad por el casco antiguo hasta ella y luego remontad por las calles. Deteneos un momento en el escudo; el desgaste forma parte del testimonio, la huella de los siglos que sirvió.',
        'De bron ligt aan de onderrand van het oude dorp en leest als het architectonische eindpunt — de plek waar de bebouwde straatjes ophouden. Ze vormt een natuurlijk keerpunt op een wandeling: kom via de oude kern naar beneden om haar te bereiken en werk je dan weer omhoog door de straatjes. Neem even de tijd voor het wapen; de verwering hoort bij het getuigenis, het merkteken van de eeuwen die ze diende.',
        'Brunnen ligger vid den gamla byns nedre kant och läses som dess arkitektoniska slutpunkt — där de bebyggda gränderna tar slut. Den blir en naturlig vändpunkt på en vandring: gå ner genom gamla stan för att nå den och arbeta er sedan upp igen genom gränderna. Ta en stund vid vapenskölden; nötningen hör till vittnesbördet, märket av de århundraden den tjänade.'
      )
    }
  ],
  pullQuote: l(
    'For three centuries, this is where the whole village’s water arrived.',
    'Drei Jahrhunderte lang kam hier das Wasser des ganzen Dorfes an.',
    'Durante tres siglos, aquí llegó el agua de todo el pueblo.',
    'Drie eeuwen lang kwam hier het water van het hele dorp aan.',
    'I tre århundraden kom hela byns vatten hit.'
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
