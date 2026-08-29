import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

type HoneymoonStayLinkToken = 'romantic_hideaways' | 'playa' | 'tarifa';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

const lp = (
  en: string[],
  de: string[],
  es: string[],
  nl: string[],
  sv: string[]
): LocalizedTextList => ({ en, de, es, nl, sv });

export const honeymoonSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-honeymoon-v1.1-A',
  pageType: 'D',
  entityKey: 'amara-brand',
  languages: {
    en: { title: 'Honeymoon in Andalusia | AMARA', description: 'Find a honeymoon hideaway in Frigiliana, Nerja or Tarifa, with private terraces, large beds, views and quiet depending on the AMARA stay.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Flitterwochen in Andalusien | AMARA', description: 'Findet euer Hideaway für die Flitterwochen in Frigiliana, Nerja oder Tarifa – je nach AMARA-Unterkunft mit privater Terrasse, großem Bett, Aussicht und Ruhe.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Luna de miel en Andalucía | AMARA', description: 'Encontrad vuestro refugio de luna de miel en Frigiliana, Nerja o Tarifa, con terraza privada, cama grande, vistas y tranquilidad según el alojamiento AMARA.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Huwelijksreis in Andalusië | AMARA', description: 'Vind jullie hideaway voor de huwelijksreis in Frigiliana, Nerja of Tarifa, afhankelijk van het AMARA-verblijf met privéterras, groot bed, uitzicht en rust.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Smekmånad i Andalusien | AMARA', description: 'Hitta ert hideaway för smekmånaden i Frigiliana, Nerja eller Tarifa, beroende på AMARA-boende med privat terrass, stor säng, utsikt och lugn.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const honeymoonContent = {
  hero: {
    kicker: l('HONEYMOON IN ANDALUSIA', 'FLITTERWOCHEN IN ANDALUSIEN', 'LUNA DE MIEL EN ANDALUCÍA', 'HUWELIJKSREIS IN ANDALUSIË', 'SMEKMÅNAD I ANDALUSIEN'),
    title: l('A hideaway for the two of you', 'Ein Hideaway für euch zwei', 'Un refugio para vosotros dos', 'Een hideaway voor jullie samen', 'Ett hideaway för er två'),
    lead: l(
      'You do not need a romance package for your honeymoon. You need a place where you both enjoy spending time.',
      'Für eure Flitterwochen braucht ihr kein Romantikpaket. Ihr braucht einen Ort, an dem ihr beide gern Zeit verbringt.',
      'Para vuestra luna de miel no necesitáis un paquete romántico. Necesitáis un lugar donde os apetezca pasar tiempo juntos.',
      'Voor jullie huwelijksreis hebben jullie geen romantiekpakket nodig. Wel een plek waar jullie graag samen zijn.',
      'På smekmånaden behöver ni inget romantikpaket. Ni behöver en plats där ni båda trivs tillsammans.'
    ),
    paragraphs: lp(
      ['AMARA has six stays in Frigiliana, Nerja and Tarifa. Depending on the hideaway, you can have a generous bathroom, a double shower, a 180 or 200 centimetre-wide bed, a private terrace with a hammock, quiet or views towards the sea. No single stay has everything. Start with what matters to the two of you: old town and terrace in Frigiliana, the beach within easy walking distance in Nerja, or more room and an Atlantic view in Tarifa. We look after all six stays ourselves and will tell you honestly which one fits.'],
      ['Bei AMARA wählt ihr zwischen sechs Unterkünften in Frigiliana, Nerja und Tarifa. Je nach Hideaway bekommt ihr ein großzügiges Bad, eine Doppeldusche, ein 180 oder 200 Zentimeter breites Bett, eine private Terrasse mit Hängematte, Ruhe oder Aussicht bis zum Meer. Keine Unterkunft hat alles. Überlegt deshalb zuerst, was euch beiden wichtig ist: Altstadt und Terrasse in Frigiliana, der Strand zu Fuß in Nerja oder mehr Raum und Atlantikblick in Tarifa. Wir betreuen alle sechs Unterkünfte selbst und sagen euch ehrlich, welche zu euch passt.'],
      ['AMARA reúne seis alojamientos en Frigiliana, Nerja y Tarifa. Según el refugio, tendréis un baño amplio, ducha doble, una cama de 180 o 200 centímetros de ancho, terraza privada con hamaca, tranquilidad o vistas hacia el mar. Ningún alojamiento lo tiene todo. Empezad por lo que más os importa: casco antiguo y terraza en Frigiliana, la playa a pie en Nerja o más espacio y vistas al Atlántico en Tarifa. Cuidamos personalmente los seis alojamientos y os diremos con sinceridad cuál encaja mejor.'],
      ['AMARA heeft zes verblijven in Frigiliana, Nerja en Tarifa. Afhankelijk van de hideaway krijgen jullie een ruime badkamer, dubbele douche, een bed van 180 of 200 centimeter breed, een privéterras met hangmat, rust of uitzicht richting zee. Geen enkel verblijf heeft alles. Begin daarom met wat voor jullie telt: oude stad en terras in Frigiliana, het strand op loopafstand in Nerja of meer ruimte en uitzicht op de Atlantische Oceaan in Tarifa. We beheren alle zes verblijven zelf en zeggen eerlijk welke het beste past.'],
      ['AMARA har sex boenden i Frigiliana, Nerja och Tarifa. Beroende på hideaway får ni ett rymligt badrum, dubbeldusch, en 180 eller 200 centimeter bred säng, privat terrass med hängmatta, lugn eller utsikt mot havet. Inget boende har allt. Börja därför med det som betyder mest för er: gamla stan och terrass i Frigiliana, gångavstånd till stranden i Nerja eller mer utrymme och utsikt över Atlanten i Tarifa. Vi tar hand om alla sex boenden själva och säger ärligt vilket som passar er bäst.']
    ),
    cta: l('See which stay fits', 'Schaut, welche Unterkunft passt', 'Ver qué alojamiento encaja', 'Bekijk welk verblijf past', 'Se vilket boende som passar'),
    imageAlt: l('Private terrace with white walls and palms at AMARA Lounis in Frigiliana', 'Private Terrasse mit weißen Mauern und Palmen bei AMARA Lounis in Frigiliana', 'Terraza privada con paredes blancas y palmeras en AMARA Lounis, Frigiliana', 'Privéterras met witte muren en palmen bij AMARA Lounis in Frigiliana', 'Privat terrass med vita väggar och palmer vid AMARA Lounis i Frigiliana')
  },
  choice: {
    title: l('Romance you can actually use', 'Romantik, die ihr wirklich nutzt', 'Romanticismo que de verdad se disfruta', 'Romantiek waar jullie echt iets aan hebben', 'Romantik ni faktiskt har glädje av'),
    paragraphs: lp(
      ['For us, romance is not rose petals on the bed. It is a slow morning on your own terrace, a shower with room for two, a comfortable large bed and a view that makes you stay outside a little longer.', 'Every feature belongs to a specific stay. That is why we name the hideaway instead of making one promise for the whole collection.'],
      ['Für uns sind Rosenblätter auf dem Bett nicht das Entscheidende. Romantisch ist ein langsamer Morgen auf der eigenen Terrasse, eine Dusche mit Platz für zwei, ein bequemes großes Bett und ein Ausblick, bei dem ihr noch ein bisschen länger draußen bleibt.', 'Jedes Merkmal gehört zu einer bestimmten Unterkunft. Deshalb nennen wir das Hideaway beim Namen, statt ein Versprechen für die ganze Kollektion zu machen.'],
      ['Para nosotros, lo importante no son los pétalos de rosa sobre la cama. Es una mañana tranquila en vuestra terraza, una ducha con espacio para dos, una cama grande y cómoda y unas vistas que invitan a quedaros un poco más fuera.', 'Cada detalle pertenece a un alojamiento concreto. Por eso nombramos el refugio en lugar de prometer lo mismo para toda la colección.'],
      ['Voor ons draait romantiek niet om rozenblaadjes op het bed. Wel om een rustige ochtend op jullie eigen terras, een douche met ruimte voor twee, een comfortabel groot bed en uitzicht waardoor jullie nog wat langer buiten blijven.', 'Elk kenmerk hoort bij een specifiek verblijf. Daarom noemen we de hideaway bij naam en doen we geen algemene belofte voor de hele collectie.'],
      ['För oss handlar romantik inte om rosenblad på sängen. Det är en lugn morgon på er egen terrass, en dusch med plats för två, en bekväm stor säng och en utsikt som får er att stanna ute lite längre.', 'Varje detalj hör till ett visst boende. Därför nämner vi rätt hideaway i stället för att lova samma sak för hela kollektionen.']
    ),
    imageAlt: l('Outdoor shower and handmade tiles on AMARA Zaid’s private terrace', 'Außendusche und handgefertigte Fliesen auf der privaten Terrasse von AMARA Zaid', 'Ducha exterior y azulejos artesanales en la terraza privada de AMARA Zaid', 'Buitendouche en handgemaakte tegels op het privéterras van AMARA Zaid', 'Utedusch och handgjort kakel på AMARA Zaids privata terrass')
  },
  stayOptions: {
    title: l('Three very different ways to stay', 'Drei ganz unterschiedliche Arten zu wohnen', 'Tres formas muy distintas de alojaros', 'Drie heel verschillende manieren om te verblijven', 'Tre helt olika sätt att bo'),
    intro: l('Choose the details you will notice every day, not the longest list of amenities.', 'Wählt die Details, die ihr jeden Tag spürt – nicht die längste Ausstattungsliste.', 'Elegid los detalles que notaréis cada día, no la lista de equipamiento más larga.', 'Kies de details die jullie elke dag merken, niet de langste voorzieningenlijst.', 'Välj detaljerna ni märker varje dag, inte den längsta listan med utrustning.'),
    items: [
      {
        id: 'frigiliana',
        eyebrow: l('OLD TOWN · PRIVATE TERRACES', 'ALTSTADT · PRIVATE TERRASSEN', 'CASCO ANTIGUO · TERRAZAS PRIVADAS', 'OUDE STAD · PRIVÉTERRASSEN', 'GAMLA STAN · PRIVATA TERRASSER'),
        title: l('Frigiliana: terraces, hammocks and double showers', 'Frigiliana: Terrassen, Hängematten und Doppelduschen', 'Frigiliana: terrazas, hamacas y duchas dobles', 'Frigiliana: terrassen, hangmatten en dubbele douches', 'Frigiliana: terrasser, hängmattor och dubbelduschar'),
        text: l('Lounis, Zaid and Maha each have a private terrace with a hammock, two loungers and an outdoor shower. Lounis and Zaid have double rain showers; Zaid has a 180 × 200 cm bed. Maha gives you a 64 m² terrace and the widest view in the house.', 'Lounis, Zaid und Maha haben jeweils eine private Terrasse mit Hängematte, zwei Liegen und Außendusche. Bei Lounis und Zaid gibt es eine Doppeldusche; Zaid hat ein 180 × 200 cm großes Bett. Maha bietet 64 m² Terrasse und die weiteste Aussicht im Haus.', 'Lounis, Zaid y Maha tienen terraza privada con hamaca, dos tumbonas y ducha exterior. Lounis y Zaid cuentan con ducha doble; Zaid tiene una cama de 180 × 200 cm. Maha ofrece una terraza de 64 m² y las vistas más amplias de la casa.', 'Lounis, Zaid en Maha hebben elk een privéterras met hangmat, twee ligbedden en buitendouche. Lounis en Zaid hebben een dubbele regendouche; Zaid een bed van 180 × 200 cm. Maha biedt een terras van 64 m² en het verste uitzicht van het huis.', 'Lounis, Zaid och Maha har varsin privat terrass med hängmatta, två solsängar och utedusch. Lounis och Zaid har dubbeldusch; Zaid har en säng på 180 × 200 cm. Maha erbjuder en terrass på 64 m² och husets vidaste utsikt.'),
        linkLabel: l('Compare the Frigiliana stays', 'Unterkünfte in Frigiliana vergleichen', 'Comparar los alojamientos de Frigiliana', 'Vergelijk de verblijven in Frigiliana', 'Jämför boendena i Frigiliana'),
        linkToken: 'romantic_hideaways' as HoneymoonStayLinkToken
      },
      {
        id: 'nerja',
        eyebrow: l('BEACH · QUIET', 'STRAND · RUHE', 'PLAYA · TRANQUILIDAD', 'STRAND · RUST', 'STRAND · LUGN'),
        title: l('Nerja: a large bed close to the sea', 'Nerja: großes Bett nah am Meer', 'Nerja: una cama grande cerca del mar', 'Nerja: een groot bed dicht bij zee', 'Nerja: en stor säng nära havet'),
        text: l('AMARA Playa has a 200 × 200 cm bed and a balcony with a side sea view. Torrecilla beach is around 200 metres away, the Balcón de Europa around 500 metres, and the apartment itself remains pleasantly quiet.', 'AMARA Playa hat ein 200 × 200 cm großes Bett und einen Balkon mit seitlichem Meerblick. Zum Strand Torrecilla sind es rund 200 Meter, zum Balcón de Europa etwa 500 Meter – und in der Wohnung wohnt ihr trotzdem angenehm ruhig.', 'AMARA Playa tiene una cama de 200 × 200 cm y balcón con vistas laterales al mar. La playa de Torrecilla está a unos 200 metros, el Balcón de Europa a unos 500, y el apartamento sigue siendo agradablemente tranquilo.', 'AMARA Playa heeft een bed van 200 × 200 cm en een balkon met zijdelings zeezicht. Het Torrecilla-strand ligt op ongeveer 200 meter, het Balcón de Europa op circa 500 meter, terwijl het appartement zelf aangenaam rustig blijft.', 'AMARA Playa har en säng på 200 × 200 cm och balkong med havsutsikt åt sidan. Torrecillastranden ligger cirka 200 meter bort, Balcón de Europa omkring 500 meter, samtidigt som lägenheten är behagligt lugn.'),
        linkLabel: l('See AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Se AMARA Playa'),
        linkToken: 'playa' as HoneymoonStayLinkToken
      },
      {
        id: 'tarifa',
        eyebrow: l('ATLANTIC · MORE ROOM', 'ATLANTIK · MEHR RAUM', 'ATLÁNTICO · MÁS ESPACIO', 'ATLANTISCHE OCEAAN · MEER RUIMTE', 'ATLANTEN · MER UTRYMME'),
        title: l('Tarifa: space and an Atlantic view', 'Tarifa: viel Raum und Atlantikblick', 'Tarifa: espacio y vistas al Atlántico', 'Tarifa: ruimte en uitzicht op de oceaan', 'Tarifa: utrymme och utsikt över Atlanten'),
        text: l('AMARA Family & Surf spreads 75 m² over two floors, with two bathrooms and a private Atlantic-facing terrace. It is generous for two and also has a shared pool and reserved underground parking.', 'AMARA Family & Surf verteilt 75 m² auf zwei Etagen, mit zwei Bädern und einer privaten Terrasse zum Atlantik. Zu zweit wohnt ihr hier sehr großzügig; dazu kommen Gemeinschaftspool und reservierter Tiefgaragenplatz.', 'AMARA Family & Surf reparte 75 m² en dos plantas, con dos baños y terraza privada orientada al Atlántico. Para dos es muy amplio y además cuenta con piscina comunitaria y plaza reservada en el garaje.', 'AMARA Family & Surf heeft 75 m² verdeeld over twee verdiepingen, met twee badkamers en een privéterras aan de Atlantische Oceaan. Voor twee is het bijzonder ruim; er zijn ook een gedeeld zwembad en een gereserveerde garageplaats.', 'AMARA Family & Surf har 75 m² i två plan, med två badrum och en privat terrass mot Atlanten. För två är det mycket rymligt, och dessutom finns gemensam pool och reserverad garageplats.'),
        linkLabel: l('See Family & Surf', 'Family & Surf ansehen', 'Ver Family & Surf', 'Bekijk Family & Surf', 'Se Family & Surf'),
        linkToken: 'tarifa' as HoneymoonStayLinkToken
      }
    ],
    note: l('The features above belong to the named stays. Please check the individual stay page before booking.', 'Die genannten Merkmale gehören zu den jeweiligen Unterkünften. Prüft vor der Buchung bitte die einzelne Unterkunftsseite.', 'Los detalles indicados pertenecen a los alojamientos mencionados. Consultad la página de cada estancia antes de reservar.', 'De genoemde kenmerken horen bij de betreffende verblijven. Bekijk vóór het boeken de afzonderlijke verblijfspagina.', 'Detaljerna ovan hör till de boenden som nämns. Kontrollera den enskilda boendesidan innan ni bokar.'),
    collectionCta: l('Compare all Romantic Hideaways', 'Alle Romantic Hideaways vergleichen', 'Comparar todos los Romantic Hideaways', 'Vergelijk alle Romantic Hideaways', 'Jämför alla Romantic Hideaways')
  },
  closing: {
    title: l('Tell us what matters to the two of you', 'Sagt uns, was euch beiden wichtig ist', 'Contadnos qué es importante para vosotros', 'Vertel ons wat voor jullie telt', 'Berätta vad som betyder mest för er'),
    paragraphs: lp(['Send us your dates and your two or three must-haves. We know every stay and will help you narrow down the choice.'], ['Schickt uns eure Reisedaten und zwei oder drei Dinge, auf die ihr nicht verzichten möchtet. Wir kennen jede Unterkunft und helfen euch, die Auswahl einzugrenzen.'], ['Enviadnos las fechas y dos o tres cosas imprescindibles para vosotros. Conocemos cada alojamiento y os ayudaremos a reducir la selección.'], ['Stuur ons jullie data en twee of drie dingen die echt belangrijk zijn. We kennen elk verblijf en helpen jullie de keuze kleiner te maken.'], ['Skicka era datum och två eller tre saker ni inte vill vara utan. Vi känner varje boende och hjälper er att begränsa valet.']),
    cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  },
  footerHighlights: {
    honeymoon: l('Honeymoon in Andalusia', 'Flitterwochen in Andalusien', 'Luna de miel en Andalucía', 'Huwelijksreis in Andalusië', 'Smekmånad i Andalusien'),
    stays: l('Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways'),
    reviews: l('Guest reviews', 'Gästebewertungen', 'Reseñas', 'Gastbeoordelingen', 'Gästrecensioner'),
    direct: l('Book direct', 'Direkt buchen', 'Reserva directa', 'Direct boeken', 'Boka direkt')
  }
};
