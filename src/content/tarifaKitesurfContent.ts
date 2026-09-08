import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

/**
 * The three practical spokes of the co-branded Tarifa kitesurf cluster: kite
 * school, kitecamp and gear. Every club fact and price comes from
 * docs/tarifa-kitesurf/redaktions-contract.md §17 (tarifasurfclub.com and
 * worksurfbalance.com, checked 3 September 2026) and carries that date on the
 * page. Rescue is described as a service the club includes, never as a
 * guarantee; kite sizes appear only inside Mark's attributed quote.
 */
export type LocalizedKiteText = Record<AmaraLanguage, string>;
export type TarifaKitesurfSpokeId = 'kite-school' | 'kitecamp' | 'equipment';

export interface TarifaKitesurfOffer {
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
  price: LocalizedText;
  priceNote: LocalizedText;
  includes: LocalizedTextList;
}

export interface TarifaKitesurfSpokeSection {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  paragraphs: LocalizedTextList;
  href?: string;
  linkLabel?: LocalizedText;
}

export interface TarifaKitesurfSpokeContent {
  id: TarifaKitesurfSpokeId;
  token: LinkToken;
  seo: AmaraAuthoringSeo;
  navLabel: LocalizedText;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    lead: LocalizedText;
    imageAlt: LocalizedText;
  };
  facts: Array<{ id: string; label: LocalizedText; value: LocalizedText }>;
  offers: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    items: TarifaKitesurfOffer[];
    stand: LocalizedText;
    href: string;
    linkLabel: LocalizedText;
  };
  sections: TarifaKitesurfSpokeSection[];
  quote?: { name: string; role: LocalizedText; text: LocalizedText; portrait: 'robert' | 'mark' };
  closing: {
    title: LocalizedText;
    text: LocalizedText;
    contactLabel: LocalizedText;
    contactMessage: LocalizedText;
  };
  related: Array<{ token: LinkToken; label: LocalizedText; text: LocalizedText }>;
}

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

const article = {
  datePublished: '2026-09-02',
  dateModified: '2026-09-03',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

const seo = (routeKey: string, version: string, title: LocalizedText, description: LocalizedText): AmaraAuthoringSeo => ({
  version,
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage(routeKey),
  article,
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
});

const common = {
  imageAlt: l('The Tarifa Surf Club team with the club flag on the beach', 'Das Team des Tarifa Surf Club mit der Vereinsflagge am Strand', 'El equipo de Tarifa Surf Club con la bandera del club en la playa', 'Het team van Tarifa Surf Club met de clubvlag op het strand', 'Tarifa Surf Clubs team med klubbflaggan på stranden'),
  stand: l('Prices published by Tarifa Surf Club, as of 3 September 2026. Booking and invoicing are with the club.', 'Preise des Tarifa Surf Club, Stand 3. September 2026. Buchung und Rechnung laufen über den Club.', 'Precios publicados por Tarifa Surf Club, a 3 de septiembre de 2026. Reserva y factura corren a cargo del club.', 'Prijzen van Tarifa Surf Club, stand 3 september 2026. Boeking en factuur lopen via de club.', 'Priser publicerade av Tarifa Surf Club, per 3 september 2026. Bokning och faktura sker via klubben.'),
  rescueInclude: l('Rescue by boat in offshore wind', 'Rescue per Boot bei ablandigem Wind', 'Rescate en barco con viento de tierra', 'Rescue per boot bij aflandige wind', 'Räddning med båt i frånlandsvind'),
  gearInclude: l('Kite, board, wetsuit, vest and helmet', 'Kite, Board, Neo, Weste und Helm', 'Cometa, tabla, neopreno, chaleco y casco', 'Kite, board, wetsuit, vest en helm', 'Kite, bräda, våtdräkt, väst och hjälm'),
  markRole: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club'),
  robertRole: l('Host at AMARA', 'Gastgeber bei AMARA', 'Anfitrión de AMARA', 'Host bij AMARA', 'Värd på AMARA'),
  contactLabel: l('Message AMARA about your kite stay', 'AMARA zum Kite-Aufenthalt schreiben', 'Escribir a AMARA sobre vuestro viaje de kite', 'Stuur AMARA een bericht over jullie kiteverblijf', 'Skriv till AMARA om er kitevistelse')
};

const school: TarifaKitesurfSpokeContent = {
  id: 'kite-school',
  token: 'tarifa_kite_school',
  seo: seo(
    'tarifa.kitesurfing.school',
    '2026-09-03-tarifa-kite-school-v2.0',
    l('Kite school Tarifa: courses, prices and Help 2 Kite | AMARA', 'Kiteschule Tarifa: Kurse, Preise und Help 2 Kite | AMARA', 'Escuela de kite en Tarifa: cursos, precios y Help 2 Kite | AMARA', 'Kiteschool Tarifa: lessen, prijzen en Help 2 Kite | AMARA', 'Kiteskola Tarifa: kurser, priser och Help 2 Kite | AMARA'),
    l('Learn to kite with Tarifa Surf Club and stay with AMARA: semi-private and private courses with gear and rescue included, Help 2 Kite for independent riders, prices as of September 2026.', 'Kiten lernen beim Tarifa Surf Club, wohnen bei AMARA: semi-private und private Kurse mit Material und Rescue inklusive, Help 2 Kite für selbstständige Fahrer, Preise mit Stand September 2026.', 'Aprender kite con Tarifa Surf Club y alojarse en AMARA: cursos semiprivados y privados con material y rescate incluidos, Help 2 Kite para riders independientes, precios a septiembre de 2026.', 'Leren kiten bij Tarifa Surf Club en logeren bij AMARA: semi-privé- en privélessen met materiaal en rescue inbegrepen, Help 2 Kite voor zelfstandige kiters, prijzen per september 2026.', 'Lär er kita med Tarifa Surf Club och bo hos AMARA: semiprivata och privata kurser med utrustning och räddning, Help 2 Kite för självständiga åkare, priser per september 2026.')
  ),
  navLabel: l('Kite school & courses', 'Kiteschule & Kurse', 'Escuela y cursos', 'Kiteschool & lessen', 'Kiteskola & kurser'),
  hero: {
    eyebrow: l('Kitesurf courses in Tarifa', 'Kitesurfkurse in Tarifa', 'Cursos de kitesurf en Tarifa', 'Kitesurflessen in Tarifa', 'Kitesurfkurser i Tarifa'),
    title: l('Learning to kite in Tarifa', 'Kiten lernen in Tarifa', 'Aprender a hacer kite en Tarifa', 'Leren kiten in Tarifa', 'Lära sig kita i Tarifa'),
    subtitle: l('Courses with Tarifa Surf Club, a bed at AMARA, and rescue is part of the course', 'Kurse beim Tarifa Surf Club, das Bett bei AMARA, und Rescue gehört zum Kurs', 'Cursos con Tarifa Surf Club, cama en AMARA, y el rescate forma parte del curso', 'Lessen bij Tarifa Surf Club, een bed bij AMARA, en rescue hoort bij de les', 'Kurser med Tarifa Surf Club, en säng hos AMARA, och räddning ingår i kursen'),
    lead: l(
      'The Tarifa Surf Club is a VDWS school run by Mark and Simone Uellendahl. Never more than two students per instructor, gear and wetsuit included, and on days with offshore wind the rescue boat is part of the course. Which beach and which hour: the school decides that every morning from wind, zones and your level. AMARA is where you sleep and the place that keeps the practical side in one conversation. Tell us honestly where you stand — first lesson, back after years, or working on a specific skill — and we route the rest.',
      'Der Tarifa Surf Club ist eine VDWS-Schule, geführt von Mark und Simone Uellendahl. Nie mehr als zwei Schüler pro Lehrer, Material und Neo inklusive, und an Tagen mit ablandigem Wind gehört das Rescue-Boot zum Kurs. Welcher Strand und welche Uhrzeit: Das entscheidet die Schule jeden Morgen aus Wind, Zonen und eurem Level. AMARA ist der Ort, an dem ihr schlaft, und die Stelle, die die praktische Seite in einem Gespräch hält. Sagt uns ehrlich, wo ihr steht — erste Stunde, nach Jahren zurück oder an einer Technik dran — und wir leiten den Rest weiter.',
      'Tarifa Surf Club es una escuela VDWS dirigida por Mark y Simone Uellendahl. Nunca más de dos alumnos por instructor, material y neopreno incluidos, y los días de viento de tierra la lancha de rescate forma parte del curso. Qué playa y a qué hora: lo decide la escuela cada mañana según el viento, las zonas y vuestro nivel. AMARA es donde dormís y quien mantiene la parte práctica en una sola conversación. Decidnos con franqueza dónde estáis, primera clase, volviendo tras años o trabajando una técnica, y nosotros encaminamos el resto.',
      'Tarifa Surf Club is een VDWS-school, geleid door Mark en Simone Uellendahl. Nooit meer dan twee leerlingen per instructeur, materiaal en wetsuit inbegrepen, en op dagen met aflandige wind hoort de rescueboot bij de les. Welk strand en welk uur: dat beslist de school elke ochtend op basis van wind, zones en jullie niveau. AMARA is waar jullie slapen en de plek die de praktische kant in één gesprek houdt. Vertel ons eerlijk waar jullie staan — eerste les, terug na jaren, of bezig met een techniek — en wij sturen de rest door.',
      'Tarifa Surf Club är en VDWS-skola som drivs av Mark och Simone Uellendahl. Aldrig fler än två elever per instruktör, utrustning och våtdräkt ingår, och på dagar med frånlandsvind är räddningsbåten en del av kursen. Vilken strand och vilken timme: det avgör skolan varje morgon utifrån vind, zoner och er nivå. AMARA är där ni sover och den som håller ihop det praktiska i ett samtal. Berätta ärligt var ni står – första lektionen, tillbaka efter flera år, eller på jakt efter en teknik – så leder vi resten vidare.'
    ),
    imageAlt: common.imageAlt
  },
  facts: [
    { id: 'ratio', label: l('Instructor to students', 'Lehrer zu Schülern', 'Instructor por alumnos', 'Instructeur per leerlingen', 'Instruktör per elever'), value: l('Semi-private 1:2, private 1:1', 'Semi-privat 1:2, privat 1:1', 'Semiprivado 1:2, privado 1:1', 'Semi-privé 1:2, privé 1:1', 'Semiprivat 1:2, privat 1:1') },
    { id: 'included', label: l('Included', 'Inklusive', 'Incluido', 'Inbegrepen', 'Ingår'), value: l('Gear, wetsuit, rescue by boat', 'Material, Neo, Rescue per Boot', 'Material, neopreno, rescate en barco', 'Materiaal, wetsuit, rescue per boot', 'Utrustning, våtdräkt, räddning med båt') },
    { id: 'daily', label: l('The school decides', 'Die Schule entscheidet', 'Lo decide la escuela', 'De school beslist', 'Skolan avgör'), value: l('Beach and hour, every day anew', 'Strand und Uhrzeit, jeden Tag neu', 'Playa y hora, cada día', 'Strand en tijd, elke dag opnieuw', 'Strand och tid, varje dag på nytt') }
  ],
  offers: {
    eyebrow: l('Formats and prices', 'Formate und Preise', 'Formatos y precios', 'Vormen en prijzen', 'Format och priser'),
    title: l('What a course day costs', 'Was ein Kurstag kostet', 'Cuánto cuesta un día de curso', 'Wat een lesdag kost', 'Vad en kursdag kostar'),
    intro: l('Three formats, one school. The first three days cost a little more than the days after; everything below is per person.', 'Drei Formate, eine Schule. Die ersten drei Tage kosten etwas mehr als die folgenden; alles unten gilt pro Person.', 'Tres formatos, una escuela. Los tres primeros días cuestan algo más que los siguientes; todo lo de abajo es por persona.', 'Drie vormen, één school. De eerste drie dagen kosten iets meer dan de dagen erna; alles hieronder is per persoon.', 'Tre format, en skola. De tre första dagarna kostar lite mer än de följande; allt nedan gäller per person.'),
    items: [
      {
        id: 'semi-private',
        title: l('Semi-private course', 'Semi-privater Kurs', 'Curso semiprivado', 'Semi-privéles', 'Semiprivat kurs'),
        detail: l('Two students per instructor · three hours a day · gear included', 'Zwei Schüler pro Lehrer · drei Stunden am Tag · Material inklusive', 'Dos alumnos por instructor · tres horas al día · material incluido', 'Twee leerlingen per instructeur · drie uur per dag · materiaal inbegrepen', 'Två elever per instruktör · tre timmar om dagen · utrustning ingår'),
        price: l('110 €', '110 €', '110 €', '110 €', '110 €'),
        priceNote: l('per day · Days 1 to 3; 100 € from day 4', 'pro Tag · Tag 1 bis 3; ab Tag 4 100 €', 'al día · Días 1 a 3; 100 € desde el día 4', 'per dag · Dag 1 tot 3; vanaf dag 4 100 €', 'per dag · Dag 1 till 3; 100 € från dag 4'),
        includes: ll(
          ['Beginners and advanced riders', 'Kite, board, wetsuit, vest and helmet', 'Rescue by boat in offshore wind'],
          ['Anfänger und Fortgeschrittene', 'Kite, Board, Neo, Weste und Helm', 'Rescue per Boot bei ablandigem Wind'],
          ['Principiantes y avanzados', 'Cometa, tabla, neopreno, chaleco y casco', 'Rescate en barco con viento de tierra'],
          ['Beginners en gevorderden', 'Kite, board, wetsuit, vest en helm', 'Rescue per boot bij aflandige wind'],
          ['Nybörjare och avancerade', 'Kite, bräda, våtdräkt, väst och hjälm', 'Räddning med båt i frånlandsvind']
        )
      },
      {
        id: 'private',
        title: l('Private course', 'Privatkurs', 'Curso privado', 'Privéles', 'Privatkurs'),
        detail: l('One student per instructor · two hours a day · gear included', 'Ein Schüler pro Lehrer · zwei Stunden am Tag · Material inklusive', 'Un alumno por instructor · dos horas al día · material incluido', 'Eén leerling per instructeur · twee uur per dag · materiaal inbegrepen', 'En elev per instruktör · två timmar om dagen · utrustning ingår'),
        price: l('150 €', '150 €', '150 €', '150 €', '150 €'),
        priceNote: l('per day · Days 1 to 3; 135 € from day 4', 'pro Tag · Tag 1 bis 3; ab Tag 4 135 €', 'al día · Días 1 a 3; 135 € desde el día 4', 'per dag · Dag 1 tot 3; vanaf dag 4 135 €', 'per dag · Dag 1 till 3; 135 € från dag 4'),
        includes: ll(
          ['Beginners and advanced riders', 'Kite, board, wetsuit, vest and helmet', 'Rescue by boat in offshore wind'],
          ['Anfänger und Fortgeschrittene', 'Kite, Board, Neo, Weste und Helm', 'Rescue per Boot bei ablandigem Wind'],
          ['Principiantes y avanzados', 'Cometa, tabla, neopreno, chaleco y casco', 'Rescate en barco con viento de tierra'],
          ['Beginners en gevorderden', 'Kite, board, wetsuit, vest en helm', 'Rescue per boot bij aflandige wind'],
          ['Nybörjare och avancerade', 'Kite, bräda, våtdräkt, väst och hjälm', 'Räddning med båt i frånlandsvind']
        )
      },
      {
        id: 'help-2-kite',
        title: l('Help 2 Kite', 'Help 2 Kite', 'Help 2 Kite', 'Help 2 Kite', 'Help 2 Kite'),
        detail: l('Supervised group riding for independent kiters (VDWS level 4–5)', 'Begleitetes Gruppenfahren für selbstständige Kiter (VDWS Level 4–5)', 'Navegación en grupo con supervisión para kiters independientes (nivel VDWS 4–5)', 'Begeleid groepsvaren voor zelfstandige kiters (VDWS-niveau 4–5)', 'Ledsagad gruppåkning för självständiga kitare (VDWS-nivå 4–5)'),
        price: l('30 €', '30 €', '30 €', '30 €', '30 €'),
        priceNote: l('per day without gear · Days 1 to 5, then 25 €; with gear 90 € for days 1 to 3, then 85 €', 'pro Tag ohne Material · Tag 1 bis 5, danach 25 €; mit Material 90 € an Tag 1 bis 3, danach 85 €', 'al día sin material · Días 1 a 5, luego 25 €; con material 90 € los días 1 a 3, luego 85 €', 'per dag zonder materiaal · Dag 1 tot 5, daarna 25 €; met materiaal 90 € op dag 1 tot 3, daarna 85 €', 'per dag utan utrustning · Dag 1 till 5, sedan 25 €; med utrustning 90 € dag 1 till 3, sedan 85 €'),
        includes: ll(
          ['Spot choice by the school', 'An eye on your gear', 'Rescue by boat in offshore wind'],
          ['Spotwahl durch die Schule', 'Ein Auge auf euer Material', 'Rescue per Boot bei ablandigem Wind'],
          ['Elección del spot por la escuela', 'Vigilancia de vuestro material', 'Rescate en barco con viento de tierra'],
          ['Spotkeuze door de school', 'Een oog op jullie materiaal', 'Rescue per boot bij aflandige wind'],
          ['Spotval av skolan', 'Ett öga på er utrustning', 'Räddning med båt i frånlandsvind']
        )
      }
    ],
    stand: common.stand,
    href: 'https://tarifasurfclub.com/kitekurs-in-tarifa',
    linkLabel: l('Courses at Tarifa Surf Club', 'Kurse beim Tarifa Surf Club', 'Cursos en Tarifa Surf Club', 'Lessen bij Tarifa Surf Club', 'Kurser hos Tarifa Surf Club')
  },
  sections: [
    {
      id: 'right-course',
      eyebrow: l('Course fit', 'Kurswahl', 'Curso adecuado', 'Passende les', 'Rätt kurs'),
      title: l('Start with your real experience', 'Beginnt bei eurer tatsächlichen Erfahrung', 'Partid de vuestra experiencia real', 'Begin bij jullie echte ervaring', 'Utgå från er faktiska erfarenhet'),
      paragraphs: ll(
        ['A first water start needs a different lesson from confident riding or technique coaching. Tell us about previous lessons, the time since your last session and what you want to achieve.', 'The school then decides on format, number of days and the instructor with you. Nobody has to know that on day one.'],
        ['Ein erster Wasserstart braucht einen anderen Kurs als sicheres Fahren oder Techniktraining. Nennt uns frühere Kurse, die Zeit seit der letzten Session und was ihr erreichen wollt.', 'Format, Tage und Lehrer legt die Schule dann mit euch fest. Das muss am ersten Tag niemand schon wissen.'],
        ['Un primer water start necesita una clase distinta a la de navegar con seguridad o entrenar técnica. Contadnos clases anteriores, el tiempo desde la última sesión y qué queréis conseguir.', 'El formato, los días y el instructor los fija después la escuela con vosotros. Nadie tiene que saberlo ya el primer día.'],
        ['Een eerste waterstart vraagt een andere les dan zelfverzekerd varen of techniektraining. Vertel ons over eerdere lessen, de tijd sinds jullie laatste sessie en wat jullie willen bereiken.', 'Vorm, dagen en instructeur legt de school dan met jullie vast. Dat hoeft niemand op dag één al te weten.'],
        ['En första vattenstart kräver en annan lektion än säker åkning eller teknikträning. Berätta om tidigare kurser, tiden sedan senaste passet och vad ni vill uppnå.', 'Format, dagar och instruktör bestämmer skolan sedan tillsammans med er. Det behöver ingen veta redan första dagen.']
      )
    },
    {
      id: 'daily-session',
      eyebrow: l('On the day', 'Am Kurstag', 'El día del curso', 'Op de lesdag', 'På kursdagen'),
      title: l('Conditions decide where the lesson happens', 'Die Bedingungen bestimmen den Kursort', 'Las condiciones determinan el lugar', 'De omstandigheden bepalen de plek', 'Förhållandena avgör platsen'),
      paragraphs: ll(
        ['Meeting point and time move with Levante, Poniente, tide, local zoning and safety guidance. Keep the course window flexible until the school confirms the session.', 'Why the school sometimes drives out to Valdevaqueros and sometimes walks to Los Lances is explained on our wind and spots pages.'],
        ['Treffpunkt und Uhrzeit wandern mit Levante, Poniente, Gezeiten, lokaler Zonierung und Sicherheitslage. Haltet das Kursfenster flexibel, bis die Schule die Session bestätigt.', 'Warum die Schule manchmal nach Valdevaqueros fährt und manchmal nach Los Lances läuft, erklären unsere Wind- und Spots-Seiten.'],
        ['El punto de encuentro y la hora cambian con el levante, el poniente, la marea, la zonificación local y las indicaciones de seguridad. Mantened flexible la ventana del curso hasta que la escuela confirme la sesión.', 'Por qué la escuela a veces conduce hasta Valdevaqueros y a veces camina hasta Los Lances lo explican nuestras páginas de viento y spots.'],
        ['Verzamelpunt en tijd schuiven met levante, poniente, getij, lokale zonering en veiligheidsaanwijzingen. Houd het lesvenster flexibel tot de school de sessie bevestigt.', 'Waarom de school soms naar Valdevaqueros rijdt en soms naar Los Lances loopt, leggen onze wind- en spotpagina’s uit.'],
        ['Mötesplats och tid flyttar sig med levante, poniente, tidvatten, lokal zonindelning och säkerhetsläge. Håll kursfönstret flexibelt tills skolan bekräftar passet.', 'Varför skolan ibland kör till Valdevaqueros och ibland går till Los Lances förklarar våra vind- och spotsidor.']
      )
    },
    {
      id: 'rescue-included',
      eyebrow: l('Safety', 'Sicherheit', 'Seguridad', 'Veiligheid', 'Säkerhet'),
      title: l('What rescue means here', 'Was Rescue hier heißt', 'Qué significa aquí el rescate', 'Wat rescue hier betekent', 'Vad räddning betyder här'),
      paragraphs: ll(
        ['On days with offshore wind, the club runs a rescue boat for its booked courses, camps and Help 2 Kite. That is a service the club includes, not a guarantee, and it does not apply to pure gear rental.', 'The state sea rescue is a different system. Which number to call and why private rescue and Salvamento Marítimo must not be confused, we explain on the wind page.'],
        ['An Tagen mit ablandigem Wind fährt der Club für seine gebuchten Kurse, Camps und Help 2 Kite ein Rescue-Boot. Das ist eine Leistung, die der Club einschließt, keine Garantie, und sie gilt nicht beim reinen Materialverleih.', 'Die staatliche Seenotrettung ist ein anderes System. Welche Nummer im Ernstfall zählt und warum private Rescue und Salvamento Marítimo nicht verwechselt werden dürfen, erklären wir auf der Wind-Seite.'],
        ['Los días de viento de tierra, el club saca una lancha de rescate para sus cursos, camps y Help 2 Kite contratados. Es un servicio que el club incluye, no una garantía, y no se aplica al simple alquiler de material.', 'El salvamento marítimo estatal es otro sistema. Qué número cuenta en una emergencia y por qué no hay que confundir el rescate privado con Salvamento Marítimo lo explicamos en la página del viento.'],
        ['Op dagen met aflandige wind vaart de club een rescueboot voor zijn geboekte lessen, camps en Help 2 Kite. Dat is een dienst die de club inbegrijpt, geen garantie, en hij geldt niet bij alleen materiaalhuur.', 'De staatsredding op zee is een ander systeem. Welk nummer in noodgevallen telt en waarom private rescue en Salvamento Marítimo niet verward mogen worden, leggen we uit op de windpagina.'],
        ['På dagar med frånlandsvind kör klubben en räddningsbåt för sina bokade kurser, camps och Help 2 Kite. Det är en tjänst som klubben inkluderar, ingen garanti, och den gäller inte vid enbart hyra av utrustning.', 'Den statliga sjöräddningen är ett annat system. Vilket nummer som gäller i nödläge och varför privat räddning och Salvamento Marítimo inte får förväxlas förklarar vi på vindsidan.']
      )
    }
  ],
  quote: {
    name: 'Robert',
    role: common.robertRole,
    portrait: 'robert',
    text: l('The course gets you onto the water. The club is where you meet people who stay, return and become friends.', 'Der Kurs bringt euch aufs Wasser. Im Club trefft ihr Menschen, die bleiben, wiederkommen und zu Freunden werden.', 'El curso os lleva al agua. En el club conocéis a personas que se quedan, vuelven y se convierten en amigos.', 'De les brengt jullie het water op. In de club ontmoeten jullie mensen die blijven, terugkomen en vrienden worden.', 'Kursen tar er ut på vattnet. I klubben möter ni människor som stannar, återvänder och blir vänner.')
  },
  closing: {
    title: l('Match your lessons to your stay', 'Kurse und Aufenthalt zusammenbringen', 'Coordinar cursos y estancia', 'Stem lessen en verblijf op elkaar af', 'Samordna kurs och boende'),
    text: l('Send us your dates, number of guests and kite experience. We coordinate the next practical step with Tarifa Surf Club, or you write to the club directly.', 'Schickt uns Reisedaten, Personenzahl und Kite-Erfahrung. Wir koordinieren den nächsten praktischen Schritt mit dem Tarifa Surf Club, oder ihr schreibt dem Club direkt.', 'Enviadnos fechas, número de huéspedes y experiencia. Coordinamos el siguiente paso con Tarifa Surf Club, o escribís al club directamente.', 'Stuur ons reisdata, aantal gasten en kite-ervaring. Wij stemmen de volgende praktische stap af met Tarifa Surf Club, of jullie schrijven de club rechtstreeks.', 'Skicka oss resedatum, antal gäster och kiteerfarenhet. Vi samordnar nästa praktiska steg med Tarifa Surf Club, eller så skriver ni direkt till klubben.'),
    contactLabel: common.contactLabel,
    contactMessage: l('Hello AMARA, we are interested in kite lessons in Tarifa. Travel dates: / Guests: / Level: / Semi-private, private or Help 2 Kite:', 'Hallo AMARA, wir interessieren uns für Kitekurse in Tarifa. Reisedaten: / Gäste: / Niveau: / Semi-privat, privat oder Help 2 Kite:', 'Hola AMARA, nos interesan clases de kite en Tarifa. Fechas: / Huéspedes: / Nivel: / Semiprivado, privado o Help 2 Kite:', 'Hallo AMARA, we zijn geïnteresseerd in kitelessen in Tarifa. Reisdata: / Gasten: / Niveau: / Semi-privé, privé of Help 2 Kite:', 'Hej AMARA, vi är intresserade av kitekurser i Tarifa. Resedatum: / Gäster: / Nivå: / Semiprivat, privat eller Help 2 Kite:')
  },
  related: []
};

const camp: TarifaKitesurfSpokeContent = {
  id: 'kitecamp',
  token: 'tarifa_kitecamp',
  seo: seo(
    'tarifa.kitesurfing.kitecamp',
    '2026-09-03-tarifa-kitecamp-v2.0',
    l('Kitecamp Tarifa, mid-September to mid-June | AMARA', 'Kitecamp Tarifa, Mitte September bis Mitte Juni | AMARA', 'Kitecamp en Tarifa, de mediados de septiembre a mediados de junio | AMARA', 'Kitecamp Tarifa, half september tot half juni | AMARA', 'Kitecamp Tarifa, mitten av september till mitten av juni | AMARA'),
    l('Tarifa Surf Club kitecamps in the low season: seven days, six nights, course days, gear and rescue included, from 599 €, plus recognised educational leave with kiting on the side.', 'Kitecamps des Tarifa Surf Club in der Nebensaison: sieben Tage, sechs Nächte, Kurstage, Material und Rescue inklusive, ab 599 €, dazu anerkannter Bildungsurlaub mit Kiten nebenbei.', 'Kitecamps de Tarifa Surf Club en temporada baja: siete días, seis noches, días de curso, material y rescate incluidos, desde 599 €, más permiso de formación reconocido con kite aparte.', 'Kitecamps van Tarifa Surf Club in het laagseizoen: zeven dagen, zes nachten, lesdagen, materiaal en rescue inbegrepen, vanaf 599 €, plus erkend educatief verlof met kiten erbij.', 'Tarifa Surf Clubs kitecamps i lågsäsong: sju dagar, sex nätter, kursdagar, utrustning och räddning ingår, från 599 €, plus erkänd bildningsledighet med kitesurfing vid sidan av.')
  ),
  navLabel: l('Kitecamp & stay', 'Kitecamp & Unterkunft', 'Kitecamp y alojamiento', 'Kitecamp & verblijf', 'Kitecamp & boende'),
  hero: {
    eyebrow: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club'),
    title: l('Kitecamp in Tarifa', 'Kitecamp in Tarifa', 'Kitecamp en Tarifa', 'Kitecamp in Tarifa', 'Kitecamp i Tarifa'),
    subtitle: l("Tarifa's largest German-speaking kitecamp. Kiting, sundowners and friendships.", 'Das größte deutschsprachige Kitecamp in Tarifa. Kiten, Sundowner und Freundschaften.', 'El mayor kitecamp de habla alemana en Tarifa. Kitesurf, atardeceres y amistades.', 'Het grootste Duitstalige kitecamp in Tarifa. Kiten, sundowners en vriendschappen.', 'Tarifas största tyskspråkiga kitecamp. Kitesurfing, sundowners och vänskap.'),
    lead: l(
      'The name Tarifa Surf Club describes what happens here. Mark and I met ten years ago at one of its kitecamps. Days on the water became a close friendship, and our shared love of kitesurfing still connects us. The same sense of belonging brings many regular guests back: you arrive, meet like-minded people and quickly feel part of the club. The camp runs from mid-September to mid-June. It includes six nights in a double room, course days or Help 2 Kite, gear and the rescue boat on offshore days. For smaller groups, different accommodation is used according to group size and availability; AMARA Family & Surf is one of those places. The accommodation for your week is confirmed when you book.',
      'Der Name Tarifa Surf Club beschreibt, was hier passiert. Mark und ich haben uns vor zehn Jahren in einem seiner Kitecamps kennengelernt. Aus den Tagen auf dem Wasser wurde eine enge Freundschaft, und unsere Liebe zum Kitesurfen verbindet uns bis heute. Dasselbe Zugehörigkeitsgefühl bringt viele Stammgäste zurück: Ihr kommt an, trefft Gleichgesinnte und gehört schnell zum Club. Das Camp läuft von Mitte September bis Mitte Juni. Enthalten sind sechs Nächte im Doppelzimmer, Kurstage oder Help 2 Kite, Material und das Rescue-Boot an Tagen mit ablandigem Wind. Für kleinere Gruppen stehen je nach Gruppengröße und Verfügbarkeit unterschiedliche Unterkünfte bereit; AMARA Family & Surf ist eine davon. Welche Unterkunft für eure Woche vorgesehen ist, erfahrt ihr bei der Buchung.',
      'El nombre Tarifa Surf Club describe lo que ocurre aquí. Mark y yo nos conocimos hace diez años en uno de sus kitecamps. De aquellos días en el agua nació una amistad muy estrecha y nuestro amor por el kitesurf nos une hasta hoy. Ese mismo sentimiento de pertenencia hace que muchos huéspedes habituales vuelvan: llegáis, conocéis a gente afín y enseguida os sentís parte del club. El camp funciona de mediados de septiembre a mediados de junio. Incluye seis noches en habitación doble, días de curso o Help 2 Kite, material y la lancha de rescate los días de viento de tierra. Para los grupos pequeños se utilizan distintos alojamientos según el tamaño y la disponibilidad; AMARA Family & Surf es uno de ellos. Al reservar os confirman el alojamiento previsto para vuestra semana.',
      'De naam Tarifa Surf Club beschrijft wat hier gebeurt. Mark en ik leerden elkaar tien jaar geleden kennen tijdens een van de kitecamps. Uit de dagen op het water groeide een hechte vriendschap en onze liefde voor kitesurfen verbindt ons nog altijd. Datzelfde gevoel van verbondenheid brengt veel vaste gasten terug: jullie komen aan, ontmoeten gelijkgestemden en horen al snel bij de club. Het camp loopt van half september tot half juni. Inbegrepen zijn zes nachten in een tweepersoonskamer, lesdagen of Help 2 Kite, materiaal en de rescueboot op dagen met aflandige wind. Voor kleinere groepen worden afhankelijk van groepsgrootte en beschikbaarheid verschillende accommodaties gebruikt; AMARA Family & Surf is daar één van. Bij de boeking horen jullie welke accommodatie voor jullie week is voorzien.',
      'Namnet Tarifa Surf Club beskriver vad som händer här. Mark och jag lärde känna varandra för tio år sedan på ett av klubbens kitecamp. Dagarna på vattnet växte till en nära vänskap, och kärleken till kitesurfingen förenar oss fortfarande. Samma känsla av tillhörighet får många stamgäster att återvända: ni kommer hit, träffar likasinnade och blir snabbt en del av klubben. Campet pågår från mitten av september till mitten av juni. Det omfattar sex nätter i dubbelrum, kursdagar eller Help 2 Kite, utrustning och räddningsbåten på dagar med frånlandsvind. För mindre grupper används olika boenden beroende på gruppstorlek och tillgänglighet; AMARA Family & Surf är ett av dem. När ni bokar får ni veta vilket boende som är planerat för er vecka.'
    ),
    imageAlt: common.imageAlt
  },
  facts: [
    { id: 'season', label: l('Season', 'Saison', 'Temporada', 'Seizoen', 'Säsong'), value: l('15 September to 15 June', '15. September bis 15. Juni', '15 de septiembre a 15 de junio', '15 september tot 15 juni', '15 september till 15 juni') },
    { id: 'length', label: l('Length', 'Dauer', 'Duración', 'Duur', 'Längd'), value: l('7 days, 6 nights', '7 Tage, 6 Übernachtungen', '7 días, 6 noches', '7 dagen, 6 nachten', '7 dagar, 6 nätter') },
    { id: 'from', label: l('From', 'Ab', 'Desde', 'Vanaf', 'Från'), value: l('599 € per person', '599 € pro Person', '599 € por persona', '599 € per persoon', '599 € per person') }
  ],
  offers: {
    eyebrow: l('The packages', 'Die Pakete', 'Los paquetes', 'De pakketten', 'Paketen'),
    title: l('Three camps, one week each', 'Drei Camps, je eine Woche', 'Tres camps, una semana cada uno', 'Drie camps, elk een week', 'Tre camps, en vecka vardera'),
    intro: l('All camps include six nights in a double room in one of the accommodations arranged for the group; AMARA Family & Surf can be one of them. Complete gear, wetsuit, vest and helmet, radio instruction and the rescue boat in offshore wind are also included.', 'Alle Camps enthalten sechs Übernachtungen im Doppelzimmer in einer der Unterkünfte, die für die Gruppe vorgesehen sind; AMARA Family & Surf kann eine davon sein. Ebenfalls enthalten sind komplettes Material, Neo, Weste und Helm, Funkschulung und das Rescue-Boot bei ablandigem Wind.', 'Todos los camps incluyen seis noches en habitación doble en uno de los alojamientos previstos para el grupo; AMARA Family & Surf puede ser uno de ellos. También se incluyen el material completo, neopreno, chaleco y casco, formación por radio y la lancha de rescate con viento de tierra.', 'Alle camps omvatten zes nachten in een tweepersoonskamer in een van de accommodaties die voor de groep zijn voorzien; AMARA Family & Surf kan daar één van zijn. Ook inbegrepen zijn compleet materiaal, wetsuit, vest en helm, radio-instructie en de rescueboot bij aflandige wind.', 'Alla camp inkluderar sex nätter i dubbelrum i ett av boendena som ordnas för gruppen; AMARA Family & Surf kan vara ett av dem. Komplett utrustning, våtdräkt, väst och hjälm, radioinstruktion och räddningsbåten i frånlandsvind ingår också.'),
    items: [
      {
        id: 'camp-course',
        title: l('Kitecamp with course', 'Kitecamp mit Kitekurs', 'Kitecamp con curso', 'Kitecamp met les', 'Kitecamp med kurs'),
        detail: l('Beginners and advanced · three course days in a group', 'Anfänger und Fortgeschrittene · drei Kurstage in der Gruppe', 'Principiantes y avanzados · tres días de curso en grupo', 'Beginners en gevorderden · drie lesdagen in groep', 'Nybörjare och avancerade · tre kursdagar i grupp'),
        price: l('from 599 €', 'ab 599 €', 'desde 599 €', 'vanaf 599 €', 'från 599 €'),
        priceNote: l('per person · Seven days, six nights, double room', 'pro Person · Sieben Tage, sechs Nächte, Doppelzimmer', 'por persona · Siete días, seis noches, habitación doble', 'per persoon · Zeven dagen, zes nachten, tweepersoonskamer', 'per person · Sju dagar, sex nätter, dubbelrum'),
        includes: ll(
          ['Three course days', 'Complete gear, wetsuit, vest and helmet', 'Radio instruction and rescue by boat in offshore wind', 'SUP, surfskates and beach volleyball'],
          ['Drei Kurstage', 'Komplettes Material, Neo, Weste und Helm', 'Funkschulung und Rescue per Boot bei ablandigem Wind', 'SUP, Surfskates und Beachvolleyball'],
          ['Tres días de curso', 'Material completo, neopreno, chaleco y casco', 'Formación por radio y rescate en barco con viento de tierra', 'SUP, surfskates y vóley playa'],
          ['Drie lesdagen', 'Compleet materiaal, wetsuit, vest en helm', 'Radio-instructie en rescue per boot bij aflandige wind', 'SUP, surfskates en beachvolleybal'],
          ['Tre kursdagar', 'Komplett utrustning, våtdräkt, väst och hjälm', 'Radioinstruktion och räddning med båt i frånlandsvind', 'SUP, surfskates och beachvolley']
        )
      },
      {
        id: 'camp-help-2-kite',
        title: l('Kitecamp with Help 2 Kite', 'Kitecamp mit Help 2 Kite', 'Kitecamp con Help 2 Kite', 'Kitecamp met Help 2 Kite', 'Kitecamp med Help 2 Kite'),
        detail: l('Advanced only · four days of supervised group riding · safe riding required', 'Nur Fortgeschrittene · vier Tage begleitetes Gruppenfahren · sicheres Fahren nötig', 'Solo avanzados · cuatro días de navegación en grupo con supervisión · hay que navegar con seguridad', 'Alleen gevorderden · vier dagen begeleid groepsvaren · veilig varen vereist', 'Endast avancerade · fyra dagar ledsagad gruppåkning · säker åkning krävs'),
        price: l('from 599 €', 'ab 599 €', 'desde 599 €', 'vanaf 599 €', 'från 599 €'),
        priceNote: l('per person · Seven days, six nights, double room', 'pro Person · Sieben Tage, sechs Nächte, Doppelzimmer', 'por persona · Siete días, seis noches, habitación doble', 'per persoon · Zeven dagen, zes nachten, tweepersoonskamer', 'per person · Sju dagar, sex nätter, dubbelrum'),
        includes: ll(
          ['Four days of Help 2 Kite', 'Complete gear, wetsuit, vest and helmet', 'Rescue by boat in offshore wind'],
          ['Vier Tage Help 2 Kite', 'Komplettes Material, Neo, Weste und Helm', 'Rescue per Boot bei ablandigem Wind'],
          ['Cuatro días de Help 2 Kite', 'Material completo, neopreno, chaleco y casco', 'Rescate en barco con viento de tierra'],
          ['Vier dagen Help 2 Kite', 'Compleet materiaal, wetsuit, vest en helm', 'Rescue per boot bij aflandige wind'],
          ['Fyra dagar Help 2 Kite', 'Komplett utrustning, våtdräkt, väst och hjälm', 'Räddning med båt i frånlandsvind']
        )
      },
      {
        id: 'camp-premium',
        title: l('Premium camps', 'Premium-Camps', 'Camps premium', 'Premiumcamps', 'Premiumcamps'),
        detail: l('Five to six course days · semi-private with two students per instructor', 'Fünf bis sechs Kurstage · semi-privat mit zwei Schülern pro Lehrer', 'Cinco o seis días de curso · semiprivado con dos alumnos por instructor', 'Vijf tot zes lesdagen · semi-privé met twee leerlingen per instructeur', 'Fem till sex kursdagar · semiprivat med två elever per instruktör'),
        price: l('from 799 €', 'ab 799 €', 'desde 799 €', 'vanaf 799 €', 'från 799 €'),
        priceNote: l('per person · Both variants: with course or with Help 2 Kite', 'pro Person · Beide Varianten: mit Kurs oder mit Help 2 Kite', 'por persona · Ambas variantes: con curso o con Help 2 Kite', 'per persoon · Beide varianten: met les of met Help 2 Kite', 'per person · Båda varianterna: med kurs eller med Help 2 Kite'),
        includes: ll(
          ['More time on the water', 'Complete gear, wetsuit, vest and helmet', 'Rescue by boat in offshore wind'],
          ['Mehr Zeit auf dem Wasser', 'Komplettes Material, Neo, Weste und Helm', 'Rescue per Boot bei ablandigem Wind'],
          ['Más tiempo en el agua', 'Material completo, neopreno, chaleco y casco', 'Rescate en barco con viento de tierra'],
          ['Meer tijd op het water', 'Compleet materiaal, wetsuit, vest en helm', 'Rescue per boot bij aflandige wind'],
          ['Mer tid på vattnet', 'Komplett utrustning, våtdräkt, väst och hjälm', 'Räddning med båt i frånlandsvind']
        )
      }
    ],
    stand: common.stand,
    href: 'https://tarifasurfclub.com/kitecamp-in-tarifa-spanien',
    linkLabel: l('Kitecamps at Tarifa Surf Club', 'Kitecamps beim Tarifa Surf Club', 'Kitecamps en Tarifa Surf Club', 'Kitecamps bij Tarifa Surf Club', 'Kitecamps hos Tarifa Surf Club')
  },
  sections: [
    {
      id: 'why-low-season',
      eyebrow: l('Timing', 'Timing', 'Cuándo', 'Timing', 'Tidpunkt'),
      title: l('Why the quiet months are the good months', 'Warum die ruhigen Monate die guten sind', 'Por qué los meses tranquilos son los buenos', 'Waarom de rustige maanden de goede zijn', 'Varför de lugna månaderna är de bra'),
      paragraphs: ll(
        ['From mid-September the bathing season is over, the beaches are wider again and the school walks to Los Lances more often than it drives out. The club describes good water-sport conditions all year, and sunny winter days are not unusual.', 'In the low season Robert walks from AMARA straight down to Los Lances. In high summer the day means driving out to Valdevaqueros. That is how the two halves of the year feel; the wind on your day is shown by the forecast.'],
        ['Ab Mitte September ist die Badesaison vorbei, die Strände sind wieder breiter, und die Schule läuft öfter nach Los Lances, als dass sie hinausfährt. Der Club beschreibt ganzjährig gute Wassersportbedingungen, und sonnige Wintertage sind nicht ungewöhnlich.', 'In der Nebensaison geht Robert von AMARA zu Fuß hinunter nach Los Lances. Im Hochsommer heißt der Tag: mit dem Auto nach Valdevaqueros. So fühlen sich die beiden Jahreshälften an; den Wind an eurem Tag zeigt die Vorhersage.'],
        ['A partir de mediados de septiembre termina la temporada de baño, las playas vuelven a ser más anchas y la escuela camina hasta Los Lances más a menudo de lo que conduce. El club describe buenas condiciones para deportes acuáticos todo el año, y los días soleados de invierno no son raros.', 'En temporada baja Robert baja a pie desde AMARA hasta Los Lances. En pleno verano el día es: en coche a Valdevaqueros. Así se sienten las dos mitades del año; el viento de vuestro día lo dice el pronóstico.'],
        ['Vanaf half september is het badseizoen voorbij, zijn de stranden weer breder en loopt de school vaker naar Los Lances dan dat ze wegrijdt. De club beschrijft goede watersportomstandigheden het hele jaar, en zonnige winterdagen zijn niet ongewoon.', 'In het laagseizoen loopt Robert vanaf AMARA zo naar Los Lances. In de hoogzomer betekent de dag: met de auto naar Valdevaqueros. Zo voelen de twee helften van het jaar; de wind op jullie dag laat de voorspelling zien.'],
        ['Från mitten av september är badsäsongen över, stränderna är bredare igen och skolan går oftare till Los Lances än den kör ut. Klubben beskriver bra vattensportförhållanden året runt, och soliga vinterdagar är inte ovanliga.', 'Under lågsäsong går Robert till fots från AMARA ner till Los Lances. På högsommaren betyder dagen: bil till Valdevaqueros. Så känns årets två halvor; vinden just er dag visar prognosen.']
      )
    },
    {
      id: 'where-you-sleep',
      eyebrow: l('Accommodation', 'Unterkunft', 'Alojamiento', 'Accommodatie', 'Boende'),
      title: l('Different accommodation for smaller groups', 'Unterschiedliche Unterkünfte für kleinere Gruppen', 'Distintos alojamientos para grupos pequeños', 'Verschillende accommodaties voor kleinere groepen', 'Olika boenden för mindre grupper'),
      paragraphs: ll(
        ['For smaller camp groups, different accommodation is provided according to group size and availability. AMARA Family & Surf is one of those places.', 'The club confirms which accommodation is planned for your week when you book. Six nights in a double room are included in the camp package.'],
        ['Für kleinere Camp-Gruppen stehen je nach Gruppengröße und Verfügbarkeit unterschiedliche Unterkünfte bereit. AMARA Family & Surf ist eine davon.', 'Welche Unterkunft für eure Woche vorgesehen ist, bestätigt der Club bei der Buchung. Sechs Übernachtungen im Doppelzimmer sind im Camp-Paket enthalten.'],
        ['Para los grupos pequeños del camp se ofrecen distintos alojamientos según el tamaño del grupo y la disponibilidad. AMARA Family & Surf es uno de ellos.', 'El club confirma al reservar qué alojamiento está previsto para vuestra semana. El paquete del camp incluye seis noches en habitación doble.'],
        ['Voor kleinere campgroepen zijn afhankelijk van de groepsgrootte en beschikbaarheid verschillende accommodaties beschikbaar. AMARA Family & Surf is daar één van.', 'De club bevestigt bij de boeking welke accommodatie voor jullie week is voorzien. Zes nachten in een tweepersoonskamer zijn bij het camppakket inbegrepen.'],
        ['För mindre campgrupper finns olika boenden beroende på gruppstorlek och tillgänglighet. AMARA Family & Surf är ett av dem.', 'Klubben bekräftar vid bokningen vilket boende som är planerat för er vecka. Sex nätter i dubbelrum ingår i camppaketet.']
      )
    },
    {
      id: 'bildungsurlaub',
      eyebrow: l('Educational leave', 'Bildungsurlaub', 'Bildungsurlaub', 'Bildungsurlaub', 'Bildungsurlaub'),
      title: l('Seminar days by the sea, kiting on the side', 'Seminartage am Meer, Kiten nebenbei', 'Días de seminario junto al mar, kite aparte', 'Seminardagen aan zee, kiten erbij', 'Seminariedagar vid havet, kitesurfing vid sidan av'),
      paragraphs: ll(
        ['For guests from Germany there is a second door into a Tarifa week: recognised educational leave, run by Work Surf Balance GmbH, a partner of the club. The seminars are about artificial intelligence (KI Kompakt, KI Advanced) and mental health (MH Reset, MH Clear Mind), five days a year.', 'The leave is recognised in 13 German states; Bavaria, North Rhine-Westphalia and Saxony are not among them. Kiting is booked on top through the club: Help to Kite for independent riders, courses for beginners. Accommodation is close to the beach in Tarifa; dates and prices are with the provider.'],
        ['Für Gäste aus Deutschland gibt es eine zweite Tür in eine Tarifa-Woche: anerkannter Bildungsurlaub, veranstaltet von der Work Surf Balance GmbH, einem Partner des Clubs. Die Seminare drehen sich um Künstliche Intelligenz (KI Kompakt, KI Advanced) und Mental Health (MH Reset, MH Clear Mind), fünf Tage im Jahr.', 'Anerkannt ist der Bildungsurlaub in 13 Bundesländern; Bayern, Nordrhein-Westfalen und Sachsen gehören nicht dazu. Das Kiten kommt über den Club dazu: Help to Kite für selbstständige Fahrer, Kurse für Anfänger. Die Unterkunft liegt in Strandnähe in Tarifa; Termine und Preise nennt der Anbieter.'],
        ['Para huéspedes de Alemania hay una segunda puerta a una semana en Tarifa: el permiso de formación reconocido (Bildungsurlaub), organizado por Work Surf Balance GmbH, socio del club. Los seminarios tratan de inteligencia artificial (KI Kompakt, KI Advanced) y salud mental (MH Reset, MH Clear Mind), cinco días al año.', 'Está reconocido en 13 estados federados; Baviera, Renania del Norte-Westfalia y Sajonia no están entre ellos. El kite se añade a través del club: Help to Kite para riders independientes, cursos para principiantes. El alojamiento está cerca de la playa en Tarifa; fechas y precios los indica el organizador.'],
        ['Voor gasten uit Duitsland is er een tweede deur naar een week Tarifa: erkend educatief verlof (Bildungsurlaub), georganiseerd door Work Surf Balance GmbH, een partner van de club. De seminars gaan over kunstmatige intelligentie (KI Kompakt, KI Advanced) en mentale gezondheid (MH Reset, MH Clear Mind), vijf dagen per jaar.', 'Het verlof is erkend in 13 Duitse deelstaten; Beieren, Noordrijn-Westfalen en Saksen horen daar niet bij. Het kiten komt er via de club bij: Help to Kite voor zelfstandige kiters, lessen voor beginners. De accommodatie ligt dicht bij het strand in Tarifa; data en prijzen noemt de aanbieder.'],
        ['För gäster från Tyskland finns en andra dörr in till en Tarifa-vecka: erkänd bildningsledighet (Bildungsurlaub), arrangerad av Work Surf Balance GmbH, en partner till klubben. Seminarierna handlar om artificiell intelligens (KI Kompakt, KI Advanced) och mental hälsa (MH Reset, MH Clear Mind), fem dagar om året.', 'Ledigheten är erkänd i 13 tyska delstater; Bayern, Nordrhein-Westfalen och Sachsen hör inte dit. Kitesurfingen bokas till via klubben: Help to Kite för självständiga åkare, kurser för nybörjare. Boendet ligger nära stranden i Tarifa; datum och priser anger arrangören.']
      ),
      href: 'https://worksurfbalance.com',
      linkLabel: l('Work Surf Balance: seminars and dates', 'Work Surf Balance: Seminare und Termine', 'Work Surf Balance: seminarios y fechas', 'Work Surf Balance: seminars en data', 'Work Surf Balance: seminarier och datum')
    }
  ],
  closing: {
    title: l('Plan your camp week', 'Eure Camp-Woche planen', 'Planificar vuestra semana de camp', 'Plan jullie campweek', 'Planera er campvecka'),
    text: l('Tell us your week, group size and level. We check the suitable camp and the accommodation planned for your group with the club, and you get one clear answer.', 'Nennt uns eure Woche, Gruppengröße und euer Level. Wir klären mit dem Club das passende Camp und die für eure Gruppe vorgesehene Unterkunft, und ihr bekommt eine klare Antwort.', 'Decidnos vuestra semana, el tamaño del grupo y vuestro nivel. Consultamos con el club el camp adecuado y el alojamiento previsto para vuestro grupo, y recibís una respuesta clara.', 'Vertel ons jullie week, groepsgrootte en niveau. Wij stemmen met de club het passende camp en de accommodatie voor jullie groep af, en jullie krijgen één helder antwoord.', 'Berätta vilken vecka, gruppstorlek och nivå ni har. Vi stämmer av rätt camp och boendet för er grupp med klubben, och ni får ett tydligt svar.'),
    contactLabel: common.contactLabel,
    contactMessage: l('Hello AMARA, we are interested in a kitecamp in Tarifa. Travel dates: / Guests: / Level:', 'Hallo AMARA, wir interessieren uns für ein Kitecamp in Tarifa. Reisedaten: / Gäste: / Niveau:', 'Hola AMARA, nos interesa un kitecamp en Tarifa. Fechas: / Huéspedes: / Nivel:', 'Hallo AMARA, we zijn geïnteresseerd in een kitecamp in Tarifa. Reisdata: / Gasten: / Niveau:', 'Hej AMARA, vi är intresserade av ett kitecamp i Tarifa. Resedatum: / Gäster: / Nivå:')
  },
  related: []
};

const equipment: TarifaKitesurfSpokeContent = {
  id: 'equipment',
  token: 'tarifa_kite_equipment',
  seo: seo(
    'tarifa.kitesurfing.equipment',
    '2026-09-03-tarifa-kite-equipment-v2.0',
    l('Kite gear in Tarifa: rent, test, buy | AMARA', 'Kitematerial in Tarifa: leihen, testen, kaufen | AMARA', 'Material de kite en Tarifa: alquilar, probar, comprar | AMARA', 'Kitemateriaal in Tarifa: huren, testen, kopen | AMARA', 'Kiteutrustning i Tarifa: hyra, testa, köpa | AMARA'),
    l('Rental sets from Tarifa Surf Club from 60 € a day, deposit placed by AMARA for its guests, gear waiting at the apartment, Test & Buy with the rental fee credited. Prices as of September 2026.', 'Leihsets vom Tarifa Surf Club ab 60 € am Tag, Kaution für AMARA-Gäste durch AMARA hinterlegt, Material bereit in der Wohnung, Test & Buy mit angerechneter Leihgebühr. Preise mit Stand September 2026.', 'Sets de alquiler de Tarifa Surf Club desde 60 € al día, fianza depositada por AMARA para sus huéspedes, material esperando en el apartamento, Test & Buy con el alquiler descontado. Precios a septiembre de 2026.', 'Huursets van Tarifa Surf Club vanaf 60 € per dag, borg door AMARA gesteld voor zijn gasten, materiaal klaar in het appartement, Test & Buy met verrekende huur. Prijzen per september 2026.', 'Hyrset från Tarifa Surf Club från 60 € per dag, deposition som AMARA lämnar för sina gäster, utrustning redo i lägenheten, Test & Buy med avräknad hyra. Priser per september 2026.')
  ),
  navLabel: l('Equipment rental & shop', 'Material leihen & kaufen', 'Alquiler y tienda', 'Verhuur & shop', 'Uthyrning & butik'),
  hero: {
    eyebrow: l('Kite gear in Tarifa', 'Kitematerial in Tarifa', 'Material de kite en Tarifa', 'Kitemateriaal in Tarifa', 'Kiteutrustning i Tarifa'),
    title: l('Rent, test, buy', 'Leihen, testen, kaufen', 'Alquilar, probar, comprar', 'Huren, testen, kopen', 'Hyra, testa, köpa'),
    subtitle: l('Gear from Tarifa Surf Club, the deposit through AMARA, waiting at the apartment', 'Material vom Tarifa Surf Club, die Kaution über AMARA, bereit in der Wohnung', 'Material de Tarifa Surf Club, la fianza a través de AMARA, listo en el apartamento', 'Materiaal van Tarifa Surf Club, de borg via AMARA, klaar in het appartement', 'Utrustning från Tarifa Surf Club, depositionen via AMARA, redo i lägenheten'),
    lead: l(
      'Travelling light to Tarifa works. Tarifa Surf Club rents complete freeride, wave and hydrofoil sets with a briefing, and single items from kite and bar to wetsuit and harness. For AMARA guests we arrange the gear before you travel, AMARA places the rental deposit with the club, and the set is at the apartment when you arrive. If you like what you rode, the rental fee counts fully towards a purchase.',
      'Mit leichtem Gepäck nach Tarifa funktioniert. Der Tarifa Surf Club verleiht komplette Freeride-, Wave- und Hydrofoil-Sets mit Einweisung sowie Einzelteile von Kite und Bar bis Neo und Trapez. Für AMARA-Gäste stimmen wir das Material vor der Anreise ab, AMARA hinterlegt die Kaution beim Club, und das Set liegt bei der Ankunft in der Wohnung. Wer mag, was er gefahren ist: Die Leihgebühr wird beim Kauf voll angerechnet.',
      'Viajar ligero a Tarifa funciona. Tarifa Surf Club alquila sets completos de freeride, olas e hydrofoil con briefing, y piezas sueltas desde cometa y barra hasta neopreno y arnés. Para huéspedes de AMARA acordamos el material antes del viaje, AMARA deposita la fianza en el club y el set está en el apartamento a la llegada. Si os gusta lo que habéis navegado, el alquiler se descuenta íntegro de la compra.',
      'Met lichte bagage naar Tarifa werkt. Tarifa Surf Club verhuurt complete freeride-, wave- en hydrofoilsets met instructie, en losse onderdelen van kite en bar tot wetsuit en trapeze. Voor AMARA-gasten stemmen we het materiaal vóór de reis af, AMARA stelt de borg bij de club, en de set ligt bij aankomst in het appartement. Bevalt wat je hebt gevaren, dan wordt de huur volledig verrekend bij aankoop.',
      'Att resa lätt till Tarifa fungerar. Tarifa Surf Club hyr ut kompletta freeride-, våg- och hydrofoilset med genomgång, och enskilda delar från kite och bar till våtdräkt och trapets. För AMARA-gäster ordnar vi utrustningen före resan, AMARA lämnar depositionen hos klubben, och setet ligger i lägenheten när ni kommer. Gillar ni det ni åkt: hyran räknas av helt vid köp.'
    ),
    imageAlt: common.imageAlt
  },
  facts: [
    { id: 'set', label: l('Complete set', 'Komplettset', 'Set completo', 'Complete set', 'Komplett set'), value: l('60 € a day, 50 € from day 4', '60 € am Tag, ab Tag 4 50 €', '60 € al día, 50 € desde el día 4', '60 € per dag, vanaf dag 4 50 €', '60 € per dag, 50 € från dag 4') },
    { id: 'deposit', label: l('Deposit', 'Kaution', 'Fianza', 'Borg', 'Deposition'), value: l('150 €, placed by AMARA for its guests', '150 €, für AMARA-Gäste hinterlegt AMARA', '150 €, la deposita AMARA para sus huéspedes', '150 €, door AMARA gesteld voor zijn gasten', '150 €, som AMARA lämnar för sina gäster') },
    { id: 'test-buy', label: l('Test & Buy', 'Test & Buy', 'Test & Buy', 'Test & Buy', 'Test & Buy'), value: l('Rental fee credited in full', 'Leihgebühr voll angerechnet', 'Alquiler descontado al 100 %', 'Huur volledig verrekend', 'Hyran avräknas helt') }
  ],
  offers: {
    eyebrow: l('Rental prices', 'Leihpreise', 'Precios de alquiler', 'Huurprijzen', 'Hyrpriser'),
    title: l('What the gear costs per day', 'Was das Material am Tag kostet', 'Cuánto cuesta el material al día', 'Wat het materiaal per dag kost', 'Vad utrustningen kostar per dag'),
    intro: l('Sets include a briefing. Prices are per person and day; from the fourth day sets get cheaper.', 'Sets enthalten eine Einweisung. Preise gelten pro Person und Tag; ab dem vierten Tag werden Sets günstiger.', 'Los sets incluyen briefing. Los precios son por persona y día; a partir del cuarto día los sets salen más baratos.', 'Sets zijn inclusief instructie. Prijzen gelden per persoon en dag; vanaf de vierde dag worden sets goedkoper.', 'Set inkluderar genomgång. Priserna gäller per person och dag; från fjärde dagen blir seten billigare.'),
    items: [
      {
        id: 'freeride-set',
        title: l('Freeride or wave set', 'Freeride- oder Wave-Set', 'Set freeride u olas', 'Freeride- of waveset', 'Freeride- eller vågset'),
        detail: l('Kite, bar, twintip or waveboard, with briefing', 'Kite, Bar, Twintip oder Waveboard, mit Einweisung', 'Cometa, barra, twintip o tabla de olas, con briefing', 'Kite, bar, twintip of waveboard, met instructie', 'Kite, bar, twintip eller vågbräda, med genomgång'),
        price: l('60 €', '60 €', '60 €', '60 €', '60 €'),
        priceNote: l('per day · Days 1 to 3; 50 € from day 4', 'pro Tag · Tag 1 bis 3; ab Tag 4 50 €', 'al día · Días 1 a 3; 50 € desde el día 4', 'per dag · Dag 1 tot 3; vanaf dag 4 50 €', 'per dag · Dag 1 till 3; 50 € från dag 4'),
        includes: ll(
          ['Airush, Blankforce, AK, Core and v-aerial', 'For rescue-boat support in offshore wind: Help to Kite'],
          ['Airush, Blankforce, AK, Core und v-aerial', 'Für die Begleitung mit Rescue-Boot bei ablandigem Wind: Help to Kite'],
          ['Airush, Blankforce, AK, Core y v-aerial', 'Para salir acompañados y contar con la lancha con viento de tierra: Help to Kite'],
          ['Airush, Blankforce, AK, Core en v-aerial', 'Voor begeleiding en de rescueboot bij aflandige wind: Help to Kite'],
          ['Airush, Blankforce, AK, Core och v-aerial', 'För sällskap och räddningsbåt i frånlandsvind: Help to Kite']
        )
      },
      {
        id: 'hydrofoil-set',
        title: l('Hydrofoil set', 'Hydrofoil-Set', 'Set de hydrofoil', 'Hydrofoilset', 'Hydrofoilset'),
        detail: l('Kite, bar, board with foil, with briefing', 'Kite, Bar, Board mit Foil, mit Einweisung', 'Cometa, barra, tabla con foil, con briefing', 'Kite, bar, board met foil, met instructie', 'Kite, bar, bräda med foil, med genomgång'),
        price: l('80 €', '80 €', '80 €', '80 €', '80 €'),
        priceNote: l('per day · Days 1 to 3; 70 € from day 4', 'pro Tag · Tag 1 bis 3; ab Tag 4 70 €', 'al día · Días 1 a 3; 70 € desde el día 4', 'per dag · Dag 1 tot 3; vanaf dag 4 70 €', 'per dag · Dag 1 till 3; 70 € från dag 4'),
        includes: ll(
          ['Foilboard with foil also available alone: 50 € per day'],
          ['Foilboard mit Foil auch einzeln: 50 € pro Tag'],
          ['Tabla con foil también suelta: 50 € al día'],
          ['Foilboard met foil ook los: 50 € per dag'],
          ['Foilbräda med foil även separat: 50 € per dag']
        )
      },
      {
        id: 'rental-help-2-kite',
        title: l('Rental plus Help to Kite', 'Verleih plus Help to Kite', 'Alquiler más Help to Kite', 'Huur plus Help to Kite', 'Hyra plus Help to Kite'),
        detail: l('Complete set and supervised group riding with the rescue boat in offshore wind', 'Komplettset und begleitetes Gruppenfahren mit Rescue-Boot bei ablandigem Wind', 'Set completo y navegación en grupo con supervisión, con lancha de rescate con viento de tierra', 'Complete set en begeleid groepsvaren met rescueboot bij aflandige wind', 'Komplett set och ledsagad gruppåkning med räddningsbåt i frånlandsvind'),
        price: l('90 €', '90 €', '90 €', '90 €', '90 €'),
        priceNote: l('per day · Days 1 to 3; 85 € from day 4', 'pro Tag · Tag 1 bis 3; ab Tag 4 85 €', 'al día · Días 1 a 3; 85 € desde el día 4', 'per dag · Dag 1 tot 3; vanaf dag 4 85 €', 'per dag · Dag 1 till 3; 85 € från dag 4'),
        includes: ll(
          ['For independent riders, VDWS level 4–5', 'Rescue by boat in offshore wind'],
          ['Für selbstständige Fahrer, VDWS Level 4–5', 'Rescue per Boot bei ablandigem Wind'],
          ['Para riders independientes, nivel VDWS 4–5', 'Rescate en barco con viento de tierra'],
          ['Voor zelfstandige kiters, VDWS-niveau 4–5', 'Rescue per boot bij aflandige wind'],
          ['För självständiga åkare, VDWS-nivå 4–5', 'Räddning med båt i frånlandsvind']
        )
      },
      {
        id: 'single-items',
        title: l('Single items', 'Einzelteile', 'Piezas sueltas', 'Losse onderdelen', 'Enskilda delar'),
        detail: l('When only one piece is missing', 'Wenn nur ein Teil fehlt', 'Cuando solo falta una pieza', 'Als er maar één onderdeel ontbreekt', 'När bara en del saknas'),
        price: l('from 10 €', 'ab 10 €', 'desde 10 €', 'vanaf 10 €', 'från 10 €'),
        priceNote: l('per day · Kite and bar 40 €, board 25 €, wetsuit or harness 10 € each', 'pro Tag · Kite und Bar 40 €, Board 25 €, Neo oder Trapez je 10 €', 'al día · Cometa y barra 40 €, tabla 25 €, neopreno o arnés 10 € cada uno', 'per dag · Kite en bar 40 €, board 25 €, wetsuit of trapeze elk 10 €', 'per dag · Kite och bar 40 €, bräda 25 €, våtdräkt eller trapets 10 € vardera'),
        includes: ll(
          ['Per person and day'],
          ['Pro Person und Tag'],
          ['Por persona y día'],
          ['Per persoon en dag'],
          ['Per person och dag']
        )
      }
    ],
    stand: common.stand,
    href: 'https://tarifasurfclub.com/kite-equipment-rental',
    linkLabel: l('Rental and shop at Tarifa Surf Club', 'Verleih und Shop beim Tarifa Surf Club', 'Alquiler y tienda en Tarifa Surf Club', 'Verhuur en shop bij Tarifa Surf Club', 'Uthyrning och butik hos Tarifa Surf Club')
  },
  sections: [
    {
      id: 'deposit-and-damage',
      eyebrow: l('Good to know', 'Gut zu wissen', 'Conviene saberlo', 'Goed om te weten', 'Bra att veta'),
      title: l('We take care of the deposit for you', 'Die Kaution übernehmen wir für euch', 'Nos ocupamos de la fianza por vosotros', 'Wij regelen de borg voor jullie', 'Vi ordnar depositionen åt er'),
      paragraphs: ll(
        ['When you stay at AMARA, we place the €150 deposit directly with Tarifa Surf Club. Your holiday starts easily, and the gear is ready for you when you arrive.', 'If something does get damaged on the water, the club charges a flat €80 for a repairable damage. For a total loss, it uses the gear’s current value. These are Tarifa Surf Club’s standard rental terms.'],
        ['Wenn ihr bei AMARA wohnt, hinterlegen wir die Kaution von 150 € direkt beim Tarifa Surf Club. So beginnt euer Urlaub ganz entspannt und ihr könnt das Material bei der Ankunft direkt übernehmen.', 'Falls beim Kiten doch einmal etwas kaputtgeht, berechnet der Club für einen reparablen Schaden pauschal 80 €. Bei einem Totalschaden gilt der Zeitwert des Materials. Diese Regelung gehört zu den normalen Leihbedingungen des Tarifa Surf Club.'],
        ['Si os alojáis en AMARA, depositamos directamente en Tarifa Surf Club la fianza de 150 €. Así vuestras vacaciones empiezan con tranquilidad y el material está listo para recoger cuando lleguéis.', 'Si algo se daña en el agua, el club cobra una tarifa fija de 80 € por cada daño reparable. En caso de pérdida total, se aplica el valor actual del material. Estas son las condiciones habituales de alquiler de Tarifa Surf Club.'],
        ['Verblijven jullie bij AMARA, dan regelen wij de borg van € 150 rechtstreeks met Tarifa Surf Club. Zo begint jullie vakantie ontspannen en kunnen jullie het materiaal bij aankomst meteen meenemen.', 'Gaat er tijdens het kiten toch iets kapot, dan rekent de club € 80 per herstelbare schade. Bij total loss geldt de dagwaarde van het materiaal. Dit zijn de gebruikelijke huurvoorwaarden van Tarifa Surf Club.'],
        ['När ni bor hos AMARA ordnar vi depositionen på 150 € direkt med Tarifa Surf Club. Då får semestern en smidig start och utrustningen är redo när ni kommer.', 'Om något ändå går sönder på vattnet tar klubben 80 € per reparerbar skada. Vid totalskada gäller utrustningens dagsvärde. Det här är Tarifa Surf Clubs vanliga hyresvillkor.']
      )
    },
    {
      id: 'at-the-apartment',
      eyebrow: l('Arrive and settle in', 'Entspannt ankommen', 'Llegar y disfrutar', 'Rustig aankomen', 'Smidig ankomst'),
      title: l('Your gear is ready when you arrive', 'Euer Material wartet schon auf euch', 'Vuestro material os espera al llegar', 'Jullie materiaal ligt klaar bij aankomst', 'Utrustningen väntar när ni kommer'),
      paragraphs: ll(
        ['Tell us before your trip what you ride and what you would like to rent. We coordinate it with the club, so your set is waiting at AMARA Family & Surf when you arrive. If a size needs changing, a quick message to the club is enough.', 'On offshore-wind days, rental with Help to Kite gives you company on the water and support from the rescue boat. We are happy to arrange that with the club too.'],
        ['Sagt uns vor der Reise kurz, welches Material ihr fahrt und was ihr leihen möchtet. Wir stimmen alles mit dem Club ab, damit euer Set bei eurer Ankunft in AMARA Family & Surf bereitliegt. Wenn eine Größe noch nicht passt, genügt eine Nachricht an den Club.', 'An Tagen mit ablandigem Wind seid ihr mit Verleih plus Help to Kite gemeinsam mit anderen auf dem Wasser und habt die Unterstützung des Rescue-Boots. Auch das stimmen wir gerne mit dem Club für euch ab.'],
        ['Decidnos antes del viaje qué material usáis y qué os gustaría alquilar. Lo coordinamos con el club para que el set os espere en AMARA Family & Surf cuando lleguéis. Si hay que cambiar una talla, basta con un mensaje al club.', 'Los días de viento de tierra, el alquiler con Help to Kite os permite salir acompañados y contar con el apoyo de la lancha de rescate. También os ayudamos a coordinarlo con el club.'],
        ['Vertel ons voor de reis kort met welk materiaal jullie varen en wat jullie willen huren. Wij stemmen alles af met de club, zodat jullie set bij aankomst in AMARA Family & Surf klaarligt. Past een maat nog niet, dan is een bericht aan de club genoeg.', 'Op dagen met aflandige wind gaan jullie met huur plus Help to Kite samen met anderen het water op en is de rescueboot erbij. Ook dat regelen we graag met de club.'],
        ['Berätta före resan vilken utrustning ni åker med och vad ni vill hyra. Vi stämmer av allt med klubben så att setet väntar på AMARA Family & Surf när ni kommer. Om en storlek behöver bytas räcker ett snabbt meddelande till klubben.', 'På dagar med frånlandsvind ger hyra med Help to Kite er sällskap på vattnet och stöd från räddningsbåten. Vi hjälper gärna till att ordna det med klubben.']
      )
    },
    {
      id: 'test-and-buy',
      eyebrow: l('Try it on the water', 'Auf dem Wasser ausprobieren', 'Probar en el agua', 'Eerst het water op', 'Testa på vattnet'),
      title: l('Ride first, decide afterwards', 'Erst fahren, dann entscheiden', 'Primero navegáis, después decidís', 'Eerst varen, daarna beslissen', 'Åk först, bestäm sedan'),
      paragraphs: ll(
        ['Thinking about a new kite or board? At Tarifa Surf Club you can rent and test gear from Airush, Core, Blankforce, AK and v-aerial. If you then buy the gear you tried, the full rental fee is deducted from the purchase price. The shop also includes a Blankforce Pro Center; ask the club about current stock if you have a particular model in mind.'],
        ['Ihr möchtet einen neuen Kite oder ein Board erst auf dem Wasser erleben? Beim Tarifa Surf Club könnt ihr Material von Airush, Core, Blankforce, AK und v-aerial leihen und testen. Wenn ihr euer Testmaterial danach kauft, wird die Leihgebühr vollständig angerechnet. Im Shop findet ihr außerdem das Blankforce Pro Center; fragt den Club kurz nach dem aktuellen Bestand, wenn ihr ein bestimmtes Modell im Blick habt.'],
        ['¿Queréis probar un kite o una tabla antes de decidir? En Tarifa Surf Club podéis alquilar y probar material de Airush, Core, Blankforce, AK y v-aerial. Si después compráis el material que habéis probado, se descuenta íntegramente el alquiler. La tienda también cuenta con un Blankforce Pro Center; preguntad al club por el stock actual si tenéis un modelo concreto en mente.'],
        ['Willen jullie een nieuwe kite of een board eerst op het water ervaren? Bij Tarifa Surf Club kunnen jullie materiaal van Airush, Core, Blankforce, AK en v-aerial huren en testen. Kopen jullie daarna het geteste materiaal, dan wordt de volledige huurprijs verrekend. In de shop vinden jullie ook het Blankforce Pro Center; vraag de club even naar de actuele voorraad als jullie een bepaald model op het oog hebben.'],
        ['Funderar ni på en ny kite eller bräda? Hos Tarifa Surf Club kan ni hyra och testa utrustning från Airush, Core, Blankforce, AK och v-aerial. Om ni sedan köper utrustningen ni har provat dras hela hyran av från köpesumman. I butiken finns också ett Blankforce Pro Center; fråga klubben om aktuellt lager om ni har en särskild modell i åtanke.']
      )
    }
  ],
  quote: {
    name: 'Mark',
    role: common.markRole,
    portrait: 'mark',
    text: l('In a proper Levante I ride 4s to 6s here — sizes most people do not have sitting in the cellar. Whatever you need, we are happy to help with kite gear from AIRUSH and CORE.', 'Bei richtigem Levante fahre ich hier 4er bis 6er – Größen, die die meisten gar nicht im Keller liegen haben. Was auch immer ihr braucht: Wir helfen euch gerne mit Kitematerial von AIRUSH und CORE.', 'Con un levante de verdad, aquí navego con 4 a 6 metros, medidas que la mayoría ni siquiera tiene guardadas en casa. Necesitéis lo que necesitéis, os ayudamos encantados con material de kite de AIRUSH y CORE.', 'Bij een echte levante vaar ik hier met 4’s tot 6’s — maten die de meesten niet eens in de kelder hebben liggen. Wat jullie ook nodig hebben, we helpen graag met kitemateriaal van AIRUSH en CORE.', 'I en riktig levante kör jag med 4:or till 6:or här – storlekar som de flesta inte ens har liggande hemma. Vad ni än behöver hjälper vi gärna till med kiteutrustning från AIRUSH och CORE.')
  },
  closing: {
    title: l('Tell us what you need for the water', 'Sagt uns, was ihr auf dem Wasser braucht', 'Contadnos qué necesitáis para el agua', 'Vertel ons wat jullie op het water nodig hebben', 'Berätta vad ni behöver på vattnet'),
    text: l('Your dates, your sizes, rent or buy. We coordinate the gear with the club and it is at the apartment when you arrive.', 'Eure Daten, eure Größen, leihen oder kaufen. Wir stimmen das Material mit dem Club ab, und es liegt bei der Ankunft in der Wohnung.', 'Vuestras fechas, vuestras tallas, alquilar o comprar. Coordinamos el material con el club y está en el apartamento a la llegada.', 'Jullie data, jullie maten, huren of kopen. Wij stemmen het materiaal af met de club en het ligt bij aankomst in het appartement.', 'Era datum, era storlekar, hyra eller köpa. Vi samordnar utrustningen med klubben, och den ligger i lägenheten vid ankomst.'),
    contactLabel: common.contactLabel,
    contactMessage: l('Hello AMARA, we would like to arrange kite gear for our Tarifa stay. Travel dates: / Guests: / Level and sizes: / Rent or buy:', 'Hallo AMARA, wir möchten Kitematerial für unseren Tarifa-Aufenthalt organisieren. Reisedaten: / Gäste: / Niveau und Größen: / Leihen oder kaufen:', 'Hola AMARA, queremos organizar material de kite para nuestra estancia en Tarifa. Fechas: / Huéspedes: / Nivel y tallas: / Alquilar o comprar:', 'Hallo AMARA, we willen kitemateriaal regelen voor ons verblijf in Tarifa. Reisdata: / Gasten: / Niveau en maten: / Huren of kopen:', 'Hej AMARA, vi vill ordna kiteutrustning för vår Tarifa-vistelse. Resedatum: / Gäster: / Nivå och storlekar: / Hyra eller köpa:')
  },
  related: []
};

const relatedMap: Record<TarifaKitesurfSpokeId, LinkToken[]> = {
  'kite-school': ['tarifa_kitesurf_beginner_guide', 'tarifa_kite_equipment', 'tarifa_wind_kitesurfing_authority'],
  kitecamp: ['tarifa_kite_school', 'tarifa_kite_equipment', 'tarifa_wind_kitesurfing_authority'],
  equipment: ['tarifa_kite_school', 'tarifa_kitecamp', 'tarifa_wind_kitesurfing_authority']
};

const relatedText: Record<LinkToken & string, LocalizedText | undefined> = {
  tarifa_kitesurf_beginner_guide: l('Read the wind, the safety cascade and the learning path before your first lesson.', 'Lest Wind, Safety-Kaskade und Lernweg vor eurer ersten Stunde.', 'Lee el viento, la cascada de seguridad y el aprendizaje antes de tu primera clase.', 'Lees de wind, de veiligheidscascade en het leerpad vóór je eerste les.', 'Läs vinden, säkerhetskaskaden och inlärningsvägen före din första lektion.'),
  tarifa_kite_school: l('Semi-private, private or Help 2 Kite, with prices and what is included.', 'Semi-privat, privat oder Help 2 Kite, mit Preisen und Inklusivleistungen.', 'Semiprivado, privado o Help 2 Kite, con precios y lo que incluye.', 'Semi-privé, privé of Help 2 Kite, met prijzen en wat inbegrepen is.', 'Semiprivat, privat eller Help 2 Kite, med priser och vad som ingår.'),
  tarifa_kitecamp: l('Seven days with course, bed, gear and rescue — and a club where newcomers quickly belong and regular guests return.', 'Sieben Tage mit Kurs, Bett, Material und Rescue — und ein Club, in dem Neuankömmlinge schnell dazugehören und Stammgäste zurückkehren.', 'Siete días con curso, cama, material y rescate, en un club donde quienes llegan enseguida se sienten parte y los habituales vuelven.', 'Zeven dagen met les, bed, materiaal en rescue — en een club waar nieuwkomers er snel bij horen en vaste gasten terugkeren.', 'Sju dagar med kurs, säng, utrustning och räddning – och en klubb där nya gäster snabbt hör hemma och stamgäster återvänder.'),
  tarifa_kite_equipment: l('Sets from 60 € a day, deposit through AMARA, gear waiting at the apartment.', 'Sets ab 60 € am Tag, Kaution über AMARA, Material bereit in der Wohnung.', 'Sets desde 60 € al día, fianza a través de AMARA, material esperando en el apartamento.', 'Sets vanaf 60 € per dag, borg via AMARA, materiaal klaar in het appartement.', 'Set från 60 € per dag, deposition via AMARA, utrustning redo i lägenheten.'),
  tarifa_wind_kitesurfing_authority: l('How to read a forecast before you believe it, the rules on the beach, rescue and emergency channels.', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt, die Regeln am Strand, Rescue und Notrufwege.', 'Cómo leer un parte antes de creérselo, las normas en la playa, rescate y vías de emergencia.', 'Hoe je een forecast leest voordat je hem gelooft, de regels op het strand, rescue en noodkanalen.', 'Hur ni läser en prognos innan ni tror på den, reglerna på stranden, räddning och nödvägar.')
} as Record<LinkToken & string, LocalizedText | undefined>;

const relatedLabel: Record<LinkToken & string, LocalizedText | undefined> = {
  tarifa_kitesurf_beginner_guide: l('Beginner guide', 'Anfänger-Guide', 'Guía de iniciación', 'Beginnersgids', 'Nybörjarguide'),
  tarifa_kite_school: school.navLabel,
  tarifa_kitecamp: camp.navLabel,
  tarifa_kite_equipment: equipment.navLabel,
  tarifa_wind_kitesurfing_authority: l('Wind, weather & safety', 'Wind in Tarifa', 'Viento, tiempo y seguridad', 'Wind, weer & veiligheid', 'Vind, väder & säkerhet')
} as Record<LinkToken & string, LocalizedText | undefined>;

const all = { 'kite-school': school, kitecamp: camp, equipment };

for (const content of Object.values(all)) {
  content.related = relatedMap[content.id].map((token) => ({
    token,
    label: relatedLabel[token]!,
    text: relatedText[token]!
  }));
}

export const tarifaKitesurfSpokeContent: Record<TarifaKitesurfSpokeId, TarifaKitesurfSpokeContent> = all;
