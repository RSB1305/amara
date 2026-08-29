import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { honeymoonContent } from './honeymoonContent';

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

export const weddingAnniversarySeo: AmaraAuthoringSeo = {
  version: '2026-08-29-wedding-anniversary-v1.1-A',
  pageType: 'D',
  entityKey: 'amara-brand',
  languages: {
    en: { title: 'Wedding Anniversary in Andalusia | AMARA', description: 'Celebrate your wedding anniversary in Frigiliana, Nerja or Tarifa, with private terraces, large beds, views and quiet depending on the AMARA stay.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Hochzeitstag in Andalusien | AMARA', description: 'Feiert euren Hochzeitstag in Frigiliana, Nerja oder Tarifa – je nach AMARA-Unterkunft mit privater Terrasse, großem Bett, Aussicht und Ruhe.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Aniversario de boda en Andalucía | AMARA', description: 'Celebrad vuestro aniversario de boda en Frigiliana, Nerja o Tarifa, con terraza privada, cama grande, vistas y tranquilidad según el alojamiento AMARA.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Huwelijksverjaardag in Andalusië | AMARA', description: 'Vier jullie huwelijksverjaardag in Frigiliana, Nerja of Tarifa, afhankelijk van het AMARA-verblijf met privéterras, groot bed, uitzicht en rust.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Bröllopsdag i Andalusien | AMARA', description: 'Fira er bröllopsdag i Frigiliana, Nerja eller Tarifa, beroende på AMARA-boende med privat terrass, stor säng, utsikt och lugn.', robots: 'index, follow', canonical: 'auto' }
  }
};

export const weddingAnniversaryContent = {
  hero: {
    kicker: l('WEDDING ANNIVERSARY IN ANDALUSIA', 'HOCHZEITSTAG IN ANDALUSIEN', 'ANIVERSARIO DE BODA EN ANDALUCÍA', 'HUWELIJKSVERJAARDAG IN ANDALUSIË', 'BRÖLLOPSDAG I ANDALUSIEN'),
    title: l('A few special days for the two of you', 'Ein paar besondere Tage für euch zwei', 'Unos días especiales para vosotros dos', 'Een paar bijzondere dagen voor jullie samen', 'Några speciella dagar för er två'),
    lead: l(
      'Your wedding anniversary does not need a fixed celebration package. A good place and time together are enough.',
      'Euer Hochzeitstag braucht kein festes Feierpaket. Ein guter Ort und gemeinsame Zeit reichen vollkommen.',
      'Vuestro aniversario de boda no necesita un paquete de celebración. Basta con un buen lugar y tiempo juntos.',
      'Jullie huwelijksverjaardag heeft geen vast feestpakket nodig. Een fijne plek en tijd samen zijn genoeg.',
      'Er bröllopsdag behöver inget färdigt firandepaket. En bra plats och tid tillsammans räcker.'
    ),
    paragraphs: lp(
      ['AMARA has six stays in Frigiliana, Nerja and Tarifa. Depending on the hideaway, you can have a generous bathroom, a double shower, a 180 or 200 centimetre-wide bed, a private terrace with a hammock, quiet or views towards the sea. No single stay has everything. Choose what would make this trip feel good for the two of you: a terrace in Frigiliana, the beach within easy walking distance in Nerja, or more room and an Atlantic view in Tarifa. We look after every stay ourselves and are happy to help you choose.'],
      ['Bei AMARA wählt ihr zwischen sechs Unterkünften in Frigiliana, Nerja und Tarifa. Je nach Hideaway bekommt ihr ein großzügiges Bad, eine Doppeldusche, ein 180 oder 200 Zentimeter breites Bett, eine private Terrasse mit Hängematte, Ruhe oder Aussicht bis zum Meer. Keine Unterkunft hat alles. Entscheidet, was diese Reise für euch schön macht: eine Terrasse in Frigiliana, der Strand zu Fuß in Nerja oder mehr Raum und Atlantikblick in Tarifa. Wir betreuen jede Unterkunft selbst und helfen euch gern bei der Wahl.'],
      ['AMARA reúne seis alojamientos en Frigiliana, Nerja y Tarifa. Según el refugio, tendréis un baño amplio, ducha doble, una cama de 180 o 200 centímetros de ancho, terraza privada con hamaca, tranquilidad o vistas hacia el mar. Ningún alojamiento lo tiene todo. Elegid qué hará especial este viaje: una terraza en Frigiliana, la playa a pie en Nerja o más espacio y vistas al Atlántico en Tarifa. Cuidamos personalmente cada alojamiento y estaremos encantados de ayudaros a elegir.'],
      ['AMARA heeft zes verblijven in Frigiliana, Nerja en Tarifa. Afhankelijk van de hideaway krijgen jullie een ruime badkamer, dubbele douche, een bed van 180 of 200 centimeter breed, een privéterras met hangmat, rust of uitzicht richting zee. Geen enkel verblijf heeft alles. Kies wat deze reis voor jullie fijn maakt: een terras in Frigiliana, het strand op loopafstand in Nerja of meer ruimte en uitzicht op de Atlantische Oceaan in Tarifa. We beheren elk verblijf zelf en helpen jullie graag kiezen.'],
      ['AMARA har sex boenden i Frigiliana, Nerja och Tarifa. Beroende på hideaway får ni ett rymligt badrum, dubbeldusch, en 180 eller 200 centimeter bred säng, privat terrass med hängmatta, lugn eller utsikt mot havet. Inget boende har allt. Välj det som gör resan fin för er: en terrass i Frigiliana, gångavstånd till stranden i Nerja eller mer utrymme och utsikt över Atlanten i Tarifa. Vi tar hand om varje boende själva och hjälper er gärna att välja.']
    ),
    cta: l('See which stay fits', 'Schaut, welche Unterkunft passt', 'Ver qué alojamiento encaja', 'Bekijk welk verblijf past', 'Se vilket boende som passar'),
    imageAlt: l('Private terrace with white walls and palms at AMARA Lounis in Frigiliana', 'Private Terrasse mit weißen Mauern und Palmen bei AMARA Lounis in Frigiliana', 'Terraza privada con paredes blancas y palmeras en AMARA Lounis, Frigiliana', 'Privéterras met witte muren en palmen bij AMARA Lounis in Frigiliana', 'Privat terrass med vita väggar och palmer vid AMARA Lounis i Frigiliana')
  },
  choice: {
    title: l('Make the stay the celebration', 'Macht den Aufenthalt selbst zum Fest', 'Que la estancia sea la celebración', 'Laat het verblijf zelf de viering zijn', 'Låt vistelsen vara firandet'),
    paragraphs: lp(
      ['Sleep in, have breakfast outside and walk out for dinner when you feel like it. A private terrace, a generous shower or a wide view often does more for time together than a pre-arranged programme.', 'We keep it simple: you choose the stay and the dates. If a detail matters, ask us. We will tell you exactly which hideaway has it.'],
      ['Ausschlafen, draußen frühstücken und am Abend spontan essen gehen: Eine private Terrasse, eine großzügige Dusche oder ein weiter Blick tun für die gemeinsame Zeit oft mehr als ein vorgefertigtes Programm.', 'Wir halten es einfach: Ihr wählt Unterkunft und Reisedaten. Wenn euch ein Detail wichtig ist, fragt uns. Wir sagen euch genau, in welchem Hideaway ihr es findet.'],
      ['Dormir sin prisa, desayunar fuera y salir a cenar cuando os apetezca: una terraza privada, una ducha amplia o unas vistas abiertas suelen aportar más al tiempo juntos que un programa preparado.', 'Lo hacemos sencillo: elegís el alojamiento y las fechas. Si algún detalle os importa, preguntadnos. Os diremos exactamente qué refugio lo tiene.'],
      ['Uitslapen, buiten ontbijten en spontaan uit eten gaan: een privéterras, een ruime douche of een weids uitzicht doet vaak meer voor jullie tijd samen dan een vooraf bedacht programma.', 'We houden het eenvoudig: jullie kiezen het verblijf en de data. Is een detail belangrijk, vraag het ons. We zeggen precies in welke hideaway jullie het vinden.'],
      ['Sov länge, ät frukost ute och gå ut på middag när ni känner för det. En privat terrass, en rymlig dusch eller vid utsikt gör ofta mer för tiden tillsammans än ett färdigt program.', 'Vi håller det enkelt: ni väljer boende och datum. Om en detalj är viktig frågar ni oss. Vi säger exakt vilket hideaway som har den.']
    ),
    imageAlt: l('Outdoor shower and handmade tiles on AMARA Zaid’s private terrace', 'Außendusche und handgefertigte Fliesen auf der privaten Terrasse von AMARA Zaid', 'Ducha exterior y azulejos artesanales en la terraza privada de AMARA Zaid', 'Buitendouche en handgemaakte tegels op het privéterras van AMARA Zaid', 'Utedusch och handgjort kakel på AMARA Zaids privata terrass')
  },
  stayOptions: honeymoonContent.stayOptions,
  closing: {
    title: l('Tell us how you would like to spend the days', 'Erzählt uns, wie ihr die Tage verbringen möchtet', 'Contadnos cómo queréis pasar esos días', 'Vertel ons hoe jullie de dagen willen doorbrengen', 'Berätta hur ni vill tillbringa dagarna'),
    paragraphs: lp(
      ['Send us your dates and your two or three must-haves. We know every stay and will help you narrow down the choice.'],
      ['Schickt uns eure Reisedaten und zwei oder drei Dinge, auf die ihr nicht verzichten möchtet. Wir kennen jede Unterkunft und helfen euch, die Auswahl einzugrenzen.'],
      ['Enviadnos las fechas y dos o tres cosas imprescindibles para vosotros. Conocemos cada alojamiento y os ayudaremos a reducir la selección.'],
      ['Stuur ons jullie data en twee of drie dingen die echt belangrijk zijn. We kennen elk verblijf en helpen jullie de keuze kleiner te maken.'],
      ['Skicka era datum och två eller tre saker ni inte vill vara utan. Vi känner varje boende och hjälper er att begränsa valet.']
    ),
    cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  },
  footerHighlights: {
    weddingAnniversary: l('Wedding anniversary in Andalusia', 'Hochzeitstag in Andalusien', 'Aniversario de boda en Andalucía', 'Huwelijksverjaardag in Andalusië', 'Bröllopsdag i Andalusien'),
    stays: l('Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways'),
    reviews: l('Guest reviews', 'Gästebewertungen', 'Reseñas', 'Gastbeoordelingen', 'Gästrecensioner'),
    direct: l('Book direct', 'Direkt buchen', 'Reserva directa', 'Direct boeken', 'Boka direkt')
  }
};
