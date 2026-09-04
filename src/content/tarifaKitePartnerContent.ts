import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/**
 * The partner spoke of the Tarifa kitesurf cluster: AMARA and Tarifa Surf
 * Club as two equal senders. Every fact about the club comes from docs/tarifa-kitesurf/
 * redaktions-contract.md §17 (tarifasurfclub.com, checked 3 September 2026);
 * prices carry that date on the page. Nothing here promises safety, names a
 * kite size or claims figures the club does not publish.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

const title = l(
  'AMARA × Tarifa Surf Club: Stay & Kite School | AMARA',
  'AMARA × Tarifa Surf Club: Unterkunft & Kiteschule | AMARA',
  'AMARA × Tarifa Surf Club: alojamiento y kite | AMARA',
  'AMARA × Tarifa Surf Club: verblijf & kiteschool | AMARA',
  'AMARA × Tarifa Surf Club: boende & kiteskola | AMARA'
);

const description = l(
  'Two partners for a kite stay in Tarifa: accommodation from AMARA, courses, kitecamps and gear from Tarifa Surf Club. Separately or combined, with the low season from mid-September to mid-June as the best time.',
  'Zwei Partner für den Kite-Aufenthalt in Tarifa: Unterkunft von AMARA, Kurse, Kitecamps und Material vom Tarifa Surf Club. Getrennt oder zusammen, mit der Nebensaison von Mitte September bis Mitte Juni als beste Zeit.',
  'Dos socios para vuestro viaje de kite a Tarifa: alojamiento de AMARA, cursos, kitecamps y material de Tarifa Surf Club. Por separado o juntos, con la temporada baja de mediados de septiembre a mediados de junio como mejor época.',
  'Twee partners voor een kiteverblijf in Tarifa: accommodatie van AMARA, lessen, kitecamps en materiaal van Tarifa Surf Club. Apart of samen, met het laagseizoen van half september tot half juni als beste tijd.',
  'Två partner för en kitevistelse i Tarifa: boende från AMARA, kurser, kitecamps och utrustning från Tarifa Surf Club. Var för sig eller tillsammans, med lågsäsongen från mitten av september till mitten av juni som bästa tid.'
);

export const tarifaKitePartnerSeo: AmaraAuthoringSeo = {
  version: '2026-09-03-amara-tarifa-surf-club-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/tarifa/mark-robert-tarifa-surf-club.webp',
  article: {
    datePublished: '2026-09-02',
    dateModified: '2026-09-03',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

/** Copy of the co-branding band shown on every page of the kitesurf cluster. */
export const kiteCoBranding = {
  eyebrow: l('AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club'),
  title: l('Two partners, one Tarifa', 'Zwei Partner, ein Tarifa', 'Dos socios, un mismo Tarifa', 'Twee partners, één Tarifa', 'Två partner, ett Tarifa'),
  text: l(
    'AMARA is the accommodation, Tarifa Surf Club is the kite school. You can book each on its own or both together; either way, one message is enough and the other partner is in the loop.',
    'AMARA ist die Unterkunft, der Tarifa Surf Club ist die Kiteschule. Ihr könnt beides einzeln buchen oder zusammen; so oder so reicht eine Nachricht, und der andere Partner ist im Bild.',
    'AMARA es el alojamiento, Tarifa Surf Club es la escuela de kite. Podéis reservar cada uno por separado o los dos juntos; en cualquier caso basta un mensaje y el otro socio está al tanto.',
    'AMARA is de accommodatie, Tarifa Surf Club is de kiteschool. Jullie kunnen elk apart boeken of samen; hoe dan ook is één bericht genoeg en is de andere partner op de hoogte.',
    'AMARA är boendet, Tarifa Surf Club är kiteskolan. Ni kan boka var för sig eller tillsammans; hur som helst räcker ett meddelande, och den andra partnern är informerad.'
  ),
  amaraLabel: l('Message AMARA', 'AMARA schreiben', 'Escribir a AMARA', 'AMARA een bericht sturen', 'Skriv till AMARA'),
  clubLabel: l('Contact Tarifa Surf Club', 'Tarifa Surf Club kontaktieren', 'Contactar con Tarifa Surf Club', 'Contact met Tarifa Surf Club', 'Kontakta Tarifa Surf Club'),
  partnerLinkLabel: l('About the partnership', 'Mehr zur Partnerschaft', 'Sobre la colaboración', 'Over het partnerschap', 'Om partnerskapet'),
  clubHref: 'https://tarifasurfclub.com/kontakt-tarifa-surf-club',
  clubSiteHref: 'https://tarifasurfclub.com/',
  logoAlt: l('Tarifa Surf Club logo', 'Logo des Tarifa Surf Club', 'Logotipo de Tarifa Surf Club', 'Logo van Tarifa Surf Club', 'Tarifa Surf Clubs logotyp'),
  contactMessage: l(
    'Hello AMARA, we are planning a kite stay in Tarifa. Travel dates: / Guests: / Level: / Accommodation, course, camp or gear:',
    'Hallo AMARA, wir planen einen Kite-Aufenthalt in Tarifa. Reisedaten: / Gäste: / Niveau: / Unterkunft, Kurs, Camp oder Material:',
    'Hola AMARA, estamos planeando una estancia de kite en Tarifa. Fechas: / Huéspedes: / Nivel: / Alojamiento, curso, camp o material:',
    'Hallo AMARA, we plannen een kiteverblijf in Tarifa. Reisdata: / Gasten: / Niveau: / Accommodatie, cursus, camp of materiaal:',
    'Hej AMARA, vi planerar en kitevistelse i Tarifa. Resedatum: / Gäster: / Nivå: / Boende, kurs, camp eller utrustning:'
  )
};

export interface TarifaKitePartnerContent {
  token: LinkToken;
  navLabel: LocalizedText;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    lead: LocalizedText;
    imageAlt: LocalizedText;
    updated: LocalizedText;
    note: LocalizedText;
  };
  partners: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    cards: Array<{ id: 'amara' | 'club'; name: string; role: LocalizedText; points: LocalizedTextList }>;
    ways: LocalizedText;
  };
  paths: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    items: Array<{ id: string; token: LinkToken; anchor?: string; eyebrow: LocalizedText; title: LocalizedText; text: LocalizedText }>;
  };
  season: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    paragraphs: LocalizedTextList;
    facts: Array<{ id: string; label: LocalizedText; value: LocalizedText }>;
    quote: { name: string; role: LocalizedText; text: LocalizedText };
  };
  stays: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    amaraLabel: LocalizedText;
    clubLabel: LocalizedText;
    items: Array<{ id: string; owner: 'amara' | 'club'; name: string; capacity: LocalizedText; text: LocalizedText }>;
    clubLinkLabel: LocalizedText;
    clubHref: string;
    note: LocalizedText;
  };
  knowledge: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    links: Array<{ id: string; token: LinkToken; title: LocalizedText; text: LocalizedText }>;
  };
  story: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
    imageAlt: LocalizedText;
    imageCaption: LocalizedText;
    partnerLabel: LocalizedText;
  };
  closing: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    reason: LocalizedText;
    stayLabel: LocalizedText;
  };
}

export const tarifaKitePartnerContent: TarifaKitePartnerContent = {
  token: 'amara_tarifa_surf_club',
  navLabel: l('AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club'),
  hero: {
    eyebrow: l('The partnership', 'Die Partnerschaft', 'La colaboración', 'Het partnerschap', 'Partnerskapet'),
    title: l('Two partners, one Tarifa', 'Zwei Partner, ein Tarifa', 'Dos socios, un mismo Tarifa', 'Twee partners, één Tarifa', 'Två partner, ett Tarifa'),
    subtitle: l('Accommodation from AMARA, kiting with Tarifa Surf Club — separately or together', 'Unterkunft von AMARA, Kiten mit dem Tarifa Surf Club — getrennt oder zusammen', 'Alojamiento de AMARA, kite con Tarifa Surf Club: por separado o juntos', 'Accommodatie van AMARA, kiten met Tarifa Surf Club — apart of samen', 'Boende från AMARA, kitesurfing med Tarifa Surf Club – var för sig eller tillsammans'),
    lead: l(
      'Tarifa has two strong partners who know each other well: AMARA for the stay, Tarifa Surf Club for everything on the water. We share this page because we send guests to each other and because the questions are always the same. Where do I learn, when is the best time, what does it cost, where do I sleep and how do I read the wind. Here you find the answers for beginners and for people who already ride — with the low season from mid-September to mid-June as our honest recommendation.',
      'Tarifa hat zwei starke Partner, die sich gut kennen: AMARA für den Aufenthalt, der Tarifa Surf Club für alles auf dem Wasser. Wir teilen uns diese Seite, weil wir uns gegenseitig Gäste schicken und weil die Fragen immer dieselben sind. Wo lerne ich, wann ist die beste Zeit, was kostet es, wo schlafe ich und wie lese ich den Wind. Hier findet ihr die Antworten für Anfänger und für alle, die schon fahren — mit der Nebensaison von Mitte September bis Mitte Juni als unsere ehrliche Empfehlung.',
      'Tarifa tiene dos socios fuertes que se conocen bien: AMARA para el alojamiento, Tarifa Surf Club para todo lo que pasa en el agua. Compartimos esta página porque nos enviamos huéspedes mutuamente y porque las preguntas son siempre las mismas. Dónde aprendo, cuándo es la mejor época, cuánto cuesta, dónde duermo y cómo leo el viento. Aquí están las respuestas para principiantes y para quienes ya navegan, con la temporada baja de mediados de septiembre a mediados de junio como nuestra recomendación sincera.',
      'Tarifa heeft twee sterke partners die elkaar goed kennen: AMARA voor het verblijf, Tarifa Surf Club voor alles op het water. We delen deze pagina omdat we elkaar gasten sturen en omdat de vragen altijd dezelfde zijn. Waar leer ik het, wanneer is de beste tijd, wat kost het, waar slaap ik en hoe lees ik de wind. Hier vinden jullie de antwoorden voor beginners en voor wie al vaart — met het laagseizoen van half september tot half juni als onze eerlijke aanbeveling.',
      'Tarifa har två starka partner som känner varandra väl: AMARA för boendet, Tarifa Surf Club för allt på vattnet. Vi delar den här sidan eftersom vi skickar gäster till varandra och eftersom frågorna alltid är desamma. Var lär jag mig, när är bästa tiden, vad kostar det, var sover jag och hur läser jag vinden. Här finns svaren för nybörjare och för er som redan åker – med lågsäsongen från mitten av september till mitten av juni som vår ärliga rekommendation.'
    ),
    imageAlt: l('Mark from Tarifa Surf Club and Robert from AMARA together in Tarifa', 'Mark vom Tarifa Surf Club und Robert von AMARA gemeinsam in Tarifa', 'Mark, de Tarifa Surf Club, y Robert, de AMARA, juntos en Tarifa', 'Mark van Tarifa Surf Club en Robert van AMARA samen in Tarifa', 'Mark från Tarifa Surf Club och Robert från AMARA tillsammans i Tarifa'),
    updated: l('Checked September 2026', 'Geprüft im September 2026', 'Revisado en septiembre de 2026', 'Gecontroleerd in september 2026', 'Kontrollerat i september 2026'),
    note: l('Club facts and prices from tarifasurfclub.com, 3 September 2026. Teaching, conditions and water decisions stay with the school.', 'Club-Fakten und Preise von tarifasurfclub.com, 3. September 2026. Unterricht, Bedingungen und Entscheidungen am Wasser bleiben bei der Schule.', 'Datos y precios del club de tarifasurfclub.com, 3 de septiembre de 2026. La enseñanza, las condiciones y las decisiones en el agua siguen siendo cosa de la escuela.', 'Clubfeiten en prijzen van tarifasurfclub.com, 3 september 2026. Les, omstandigheden en beslissingen op het water blijven bij de school.', 'Klubbfakta och priser från tarifasurfclub.com, 3 september 2026. Undervisning, förhållanden och beslut på vattnet ligger hos skolan.')
  },
  partners: {
    eyebrow: l('Who does what', 'Wer was macht', 'Quién hace qué', 'Wie doet wat', 'Vem gör vad'),
    title: l('Two partners, one message', 'Zwei Partner, eine Anfrage', 'Dos socios, una sola consulta', 'Twee partners, één aanvraag', 'Två partner, en förfrågan'),
    intro: l(
      'We are not one company, and we do not pretend to be. We are two partners who trust each other and who put the practical parts of your trip together.',
      'Wir sind keine Firma, und wir tun auch nicht so. Wir sind zwei Partner, die einander vertrauen und die praktischen Teile eurer Reise zusammensetzen.',
      'No somos una sola empresa, ni lo aparentamos. Somos dos socios que confían el uno en el otro y que montan juntos la parte práctica de vuestro viaje.',
      'We zijn geen bedrijf, en we doen ook niet alsof. We zijn twee partners die elkaar vertrouwen en de praktische delen van jullie reis samen in elkaar zetten.',
      'Vi är inte ett företag, och vi låtsas inte vara det. Vi är två partner som litar på varandra och sätter ihop de praktiska delarna av er resa.'
    ),
    cards: [
      {
        id: 'amara',
        name: 'AMARA',
        role: l('Accommodation and personal coordination', 'Unterkunft und persönliche Koordination', 'Alojamiento y coordinación personal', 'Accommodatie en persoonlijke afstemming', 'Boende och personlig samordning'),
        points: ll(
          ['AMARA Family & Surf with a view of Los Lances; Robert kites himself.', 'One conversation for stay, arrival and kite logistics.', 'For guests renting gear, AMARA places the rental deposit with the club.'],
          ['AMARA Family & Surf mit Blick auf Los Lances; Robert kitet selbst.', 'Ein Gespräch für Aufenthalt, Anreise und Kite-Logistik.', 'Für Gäste, die Material leihen, hinterlegt AMARA die Kaution beim Club.'],
          ['AMARA Family & Surf con vistas a Los Lances; Robert también navega.', 'Una sola conversación para estancia, llegada y logística de kite.', 'Para huéspedes que alquilan material, AMARA deposita la fianza en el club.'],
          ['AMARA Family & Surf met uitzicht op Los Lances; Robert kitet zelf.', 'Eén gesprek voor verblijf, aankomst en kitelogistiek.', 'Voor gasten die materiaal huren, stelt AMARA de borg bij de club.'],
          ['AMARA Family & Surf med utsikt över Los Lances; Robert kitar själv.', 'Ett samtal för boende, ankomst och kitelogistik.', 'För gäster som hyr utrustning lämnar AMARA depositionen hos klubben.']
        )
      },
      {
        id: 'club',
        name: 'Tarifa Surf Club',
        role: l('Kite school, kitecamps, gear and own accommodation', 'Kiteschule, Kitecamps, Material und eigene Unterkünfte', 'Escuela de kite, kitecamps, material y alojamientos propios', 'Kiteschool, kitecamps, materiaal en eigen accommodaties', 'Kiteskola, kitecamps, utrustning och egna boenden'),
        points: ll(
          ['Run by Mark and Simone Uellendahl; VDWS school with Airush and Core as gear partners.', 'Courses for every level, Help 2 Kite for independent riders, kitecamps from mid-September to mid-June.', 'Sea rescue by boat in offshore wind is part of booked courses, camps and Help 2 Kite.'],
          ['Geführt von Mark und Simone Uellendahl; VDWS-Schule mit Airush und Core als Materialpartnern.', 'Kurse für jedes Level, Help 2 Kite für selbstständige Fahrer, Kitecamps von Mitte September bis Mitte Juni.', 'Rescue per Boot bei ablandigem Wind ist Bestandteil gebuchter Kurse, Camps und von Help 2 Kite.'],
          ['Dirigido por Mark y Simone Uellendahl; escuela VDWS con Airush y Core como socios de material.', 'Cursos para todos los niveles, Help 2 Kite para riders independientes, kitecamps de mediados de septiembre a mediados de junio.', 'El rescate en barco con viento de tierra forma parte de cursos, camps y Help 2 Kite contratados.'],
          ['Geleid door Mark en Simone Uellendahl; VDWS-school met Airush en Core als materiaalpartners.', 'Lessen voor elk niveau, Help 2 Kite voor zelfstandige kiters, kitecamps van half september tot half juni.', 'Rescue per boot bij aflandige wind hoort bij geboekte lessen, camps en Help 2 Kite.'],
          ['Drivs av Mark och Simone Uellendahl; VDWS-skola med Airush och Core som utrustningspartner.', 'Kurser för alla nivåer, Help 2 Kite för självständiga åkare, kitecamps från mitten av september till mitten av juni.', 'Sjöräddning med båt i frånlandsvind ingår i bokade kurser, camps och Help 2 Kite.']
        )
      }
    ],
    ways: l(
      'Three ways in: stay with AMARA and kite with the club, kite with the club and sleep in one of their places, or just stay with AMARA and go your own way on the water. All three are fine with us.',
      'Drei Wege: bei AMARA wohnen und beim Club kiten, beim Club kiten und in einer seiner Unterkünfte schlafen, oder einfach bei AMARA wohnen und auf dem Wasser eure eigenen Wege gehen. Alle drei sind uns recht.',
      'Tres caminos: alojaros en AMARA y navegar con el club, navegar con el club y dormir en uno de sus alojamientos, o simplemente alojaros en AMARA y ir a vuestro aire en el agua. Los tres nos parecen bien.',
      'Drie wegen: bij AMARA logeren en met de club kiten, met de club kiten en in een van hun accommodaties slapen, of gewoon bij AMARA logeren en op het water je eigen gang gaan. Alle drie zijn prima.',
      'Tre vägar: bo hos AMARA och kita med klubben, kita med klubben och sova i ett av deras boenden, eller bara bo hos AMARA och gå era egna vägar på vattnet. Alla tre är helt okej för oss.'
    )
  },
  paths: {
    eyebrow: l('Your way in', 'Euer Einstieg', 'Vuestro punto de partida', 'Jullie instap', 'Er ingång'),
    title: l('Pick the one that sounds like you', 'Sucht euch den Einstieg, der nach euch klingt', 'Elegid el que os suene a vosotros', 'Kies degene die bij jullie past', 'Välj den som låter som ni'),
    items: [
      {
        id: 'beginners',
        token: 'tarifa_kite_school',
        eyebrow: l('Beginners', 'Anfänger', 'Principiantes', 'Beginners', 'Nybörjare'),
        title: l('Learning to kite in Tarifa', 'Kiten lernen in Tarifa', 'Aprender a hacer kite en Tarifa', 'Leren kiten in Tarifa', 'Lära sig kita i Tarifa'),
        text: l('Semi-private with two students per instructor, or private. Gear, wetsuit and rescue included; the school picks beach and time each day.', 'Semi-privat mit zwei Schülern pro Lehrer oder privat. Material, Neo und Rescue inklusive; Strand und Uhrzeit wählt die Schule jeden Tag neu.', 'Semiprivado con dos alumnos por instructor, o privado. Material, neopreno y rescate incluidos; la escuela elige playa y hora cada día.', 'Semi-privé met twee leerlingen per instructeur, of privé. Materiaal, wetsuit en rescue inbegrepen; de school kiest elke dag strand en tijd.', 'Semiprivat med två elever per instruktör, eller privat. Utrustning, våtdräkt och räddning ingår; skolan väljer strand och tid varje dag.')
      },
      {
        id: 'advanced',
        token: 'tarifa_kite_school',
        anchor: 'help-2-kite',
        eyebrow: l('Already riding', 'Ihr fahrt schon', 'Ya navegáis', 'Jullie varen al', 'Ni åker redan'),
        title: l('Help 2 Kite: company on the water', 'Help 2 Kite: Gesellschaft auf dem Wasser', 'Help 2 Kite: compañía en el agua', 'Help 2 Kite: gezelschap op het water', 'Help 2 Kite: sällskap på vattnet'),
        text: l('Supervised group riding for independent kiters: spot choice, an eye on the gear and rescue by boat in offshore wind. From 30 € a day without gear.', 'Begleitetes Gruppenfahren für selbstständige Kiter: Spotwahl, ein Auge aufs Material und Rescue per Boot bei ablandigem Wind. Ab 30 € am Tag ohne Material.', 'Navegación en grupo con supervisión para kiters independientes: elección del spot, vigilancia del material y rescate en barco con viento de tierra. Desde 30 € al día sin material.', 'Begeleid groepsvaren voor zelfstandige kiters: spotkeuze, een oog op het materiaal en rescue per boot bij aflandige wind. Vanaf 30 € per dag zonder materiaal.', 'Ledsagad gruppåkning för självständiga kitare: spotval, ett öga på utrustningen och räddning med båt i frånlandsvind. Från 30 € per dag utan utrustning.')
      },
      {
        id: 'camp',
        token: 'tarifa_kitecamp',
        eyebrow: l('Low season', 'Nebensaison', 'Temporada baja', 'Laagseizoen', 'Lågsäsong'),
        title: l('Kitecamp from mid-September to mid-June', 'Kitecamp von Mitte September bis Mitte Juni', 'Kitecamp de mediados de septiembre a mediados de junio', 'Kitecamp van half september tot half juni', 'Kitecamp från mitten av september till mitten av juni'),
        text: l('Seven days, six nights, three course days, all gear and rescue included, from 599 € per person. The quiet months are the good months here.', 'Sieben Tage, sechs Nächte, drei Kurstage, Material und Rescue inklusive, ab 599 € pro Person. Die ruhigen Monate sind hier die guten Monate.', 'Siete días, seis noches, tres días de curso, todo el material y el rescate incluidos, desde 599 € por persona. Los meses tranquilos son aquí los buenos.', 'Zeven dagen, zes nachten, drie lesdagen, alle materiaal en rescue inbegrepen, vanaf 599 € per persoon. De rustige maanden zijn hier de goede maanden.', 'Sju dagar, sex nätter, tre kursdagar, all utrustning och räddning ingår, från 599 € per person. De lugna månaderna är de bra månaderna här.')
      },
      {
        id: 'education',
        token: 'tarifa_kitecamp',
        anchor: 'bildungsurlaub',
        eyebrow: l('Educational leave', 'Bildungsurlaub', 'Bildungsurlaub', 'Bildungsurlaub', 'Bildungsurlaub'),
        title: l('Seminar days by the sea, kiting on the side', 'Seminartage am Meer, Kiten nebenbei', 'Días de seminario junto al mar, kite aparte', 'Seminardagen aan zee, kiten erbij', 'Seminariedagar vid havet, kitesurfing vid sidan av'),
        text: l('Recognised educational leave in 13 German states, run by Work Surf Balance GmbH: AI and mental health seminars, with kiting through the club as an add-on.', 'Anerkannter Bildungsurlaub in 13 Bundesländern, veranstaltet von der Work Surf Balance GmbH: Seminare zu KI und Mental Health, Kiten über den Club dazu buchbar.', 'Permiso de formación reconocido en 13 estados federados alemanes, organizado por Work Surf Balance GmbH: seminarios de IA y salud mental, con kite a través del club como extra.', 'Erkend Duits educatief verlof in 13 deelstaten, georganiseerd door Work Surf Balance GmbH: seminars over AI en mentale gezondheid, kiten via de club erbij te boeken.', 'Erkänd tysk bildningsledighet i 13 delstater, arrangerad av Work Surf Balance GmbH: seminarier om AI och mental hälsa, med kitesurfing via klubben som tillägg.')
      },
      {
        id: 'gear',
        token: 'tarifa_kite_equipment',
        eyebrow: l('Gear', 'Material', 'Material', 'Materiaal', 'Utrustning'),
        title: l('Rent or buy, waiting at the apartment', 'Leihen oder kaufen, bereit in der Wohnung', 'Alquilar o comprar, listo en el apartamento', 'Huren of kopen, klaar in het appartement', 'Hyra eller köpa, redo i lägenheten'),
        text: l('Gear from the club, arranged before you travel and provided at your AMARA accommodation. The rental deposit is handled by AMARA.', 'Material vom Club, vor der Anreise abgestimmt und in eurer AMARA-Unterkunft bereitgestellt. Die Kaution übernimmt AMARA.', 'Material del club, acordado antes del viaje y entregado en vuestro alojamiento AMARA. La fianza la gestiona AMARA.', 'Materiaal van de club, vóór de reis afgestemd en bij jullie AMARA-accommodatie klaargezet. De borg regelt AMARA.', 'Utrustning från klubben, ordnad före resan och levererad till ert AMARA-boende. Depositionen sköter AMARA.')
      }
    ]
  },
  season: {
    eyebrow: l('When to come', 'Wann kommen', 'Cuándo venir', 'Wanneer komen', 'När ni ska komma'),
    title: l('The low season is the good season', 'Die Nebensaison ist die gute Saison', 'La temporada baja es la buena', 'Het laagseizoen is het goede seizoen', 'Lågsäsongen är den bra säsongen'),
    paragraphs: ll(
      [
        'From mid-September to mid-June the beaches are quieter, the kitecamps run and the town is easier to live in. The club writes of good water-sport conditions all year, and sun in winter is not unusual.',
        'In the low season Robert walks from AMARA straight down to Los Lances and kites there. In high summer the day usually means driving out of town to Valdevaqueros, because of the bathing zones and the crowds.',
        'That is not a promise about the wind on any given day. It is the honest picture of how the two halves of the year feel.'
      ],
      [
        'Von Mitte September bis Mitte Juni sind die Strände ruhiger, die Kitecamps laufen, und der Ort lebt sich leichter. Der Club schreibt von ganzjährig guten Wassersportbedingungen, und Sonne im Winter ist nicht ungewöhnlich.',
        'In der Nebensaison geht Robert von AMARA zu Fuß hinunter nach Los Lances und kitet dort. Im Hochsommer heißt der Tag meist: mit dem Auto aus dem Ort hinaus nach Valdevaqueros, wegen der Badezonen und der vielen Leute.',
        'Das ist kein Versprechen über den Wind an einem bestimmten Tag. Es ist das ehrliche Bild davon, wie sich die beiden Hälften des Jahres anfühlen.'
      ],
      [
        'De mediados de septiembre a mediados de junio las playas están más tranquilas, los kitecamps funcionan y el pueblo se vive con más calma. El club habla de buenas condiciones para los deportes acuáticos todo el año, y el sol en invierno no es raro.',
        'En temporada baja, Robert baja andando desde AMARA hasta Los Lances y navega allí. En pleno verano, el día suele significar salir del pueblo en coche hacia Valdevaqueros, por las zonas de baño y la cantidad de gente.',
        'No es una promesa sobre el viento de un día concreto. Es la imagen sincera de cómo se sienten las dos mitades del año.'
      ],
      [
        'Van half september tot half juni zijn de stranden rustiger, draaien de kitecamps en leeft de stad makkelijker. De club schrijft over goede watersportomstandigheden het hele jaar, en zon in de winter is niet ongewoon.',
        'In het laagseizoen loopt Robert vanaf AMARA zo naar Los Lances en kitet daar. Hartje zomer betekent de dag meestal: met de auto de stad uit naar Valdevaqueros, vanwege de zwemzones en de drukte.',
        'Dat is geen belofte over de wind op een bepaalde dag. Het is het eerlijke beeld van hoe de twee helften van het jaar voelen.'
      ],
      [
        'Från mitten av september till mitten av juni är stränderna lugnare, kitecampen pågår och staden är lättare att leva i. Klubben skriver om bra vattensportförhållanden året runt, och sol på vintern är inte ovanligt.',
        'Under lågsäsongen går Robert från AMARA rakt ner till Los Lances och kitar där. Mitt i sommaren betyder dagen oftast: med bilen ut ur staden till Valdevaqueros, på grund av badzonerna och folkmängden.',
        'Det är inget löfte om vinden en viss dag. Det är den ärliga bilden av hur årets två halvor känns.'
      ]
    ),
    facts: [
      { id: 'camps', label: l('Kitecamps', 'Kitecamps', 'Kitecamps', 'Kitecamps', 'Kitecamps'), value: l('15 September to 15 June', '15. September bis 15. Juni', '15 de septiembre a 15 de junio', '15 september tot 15 juni', '15 september till 15 juni') },
      { id: 'low', label: l('Low season', 'Nebensaison', 'Temporada baja', 'Laagseizoen', 'Lågsäsong'), value: l('Los Lances on foot from AMARA', 'Los Lances zu Fuß von AMARA', 'Los Lances a pie desde AMARA', 'Los Lances te voet vanaf AMARA', 'Los Lances till fots från AMARA') },
      { id: 'high', label: l('High summer', 'Hochsommer', 'Pleno verano', 'Hoogzomer', 'Högsommar'), value: l('Valdevaqueros by car', 'Valdevaqueros mit dem Auto', 'Valdevaqueros en coche', 'Valdevaqueros met de auto', 'Valdevaqueros med bil') }
    ],
    quote: {
      name: 'Robert',
      role: l('Host at AMARA', 'Gastgeber bei AMARA', 'Anfitrión de AMARA', 'Host bij AMARA', 'Värd på AMARA'),
      text: l('For kite beginners we have the best conditions here.', 'Für Kite-Anfänger haben wir die besten Voraussetzungen.', 'Para principiantes de kite tenemos aquí las mejores condiciones.', 'Voor kitebeginners hebben we hier de beste voorwaarden.', 'För kitenybörjare har vi de bästa förutsättningarna här.')
    }
  },
  stays: {
    eyebrow: l('Where to sleep', 'Wo ihr schlaft', 'Dónde dormir', 'Waar jullie slapen', 'Var ni sover'),
    title: l('Accommodation from both partners', 'Unterkünfte beider Partner', 'Alojamientos de los dos socios', 'Accommodaties van beide partners', 'Boenden från båda partnerna'),
    intro: l(
      'AMARA has one apartment in Tarifa, the club has three places of its own. We list all of them here, because the right bed depends on your group, not on who owns it.',
      'AMARA hat eine Wohnung in Tarifa, der Club hat drei eigene Unterkünfte. Wir nennen hier alle, denn das richtige Bett hängt an eurer Gruppe, nicht daran, wem es gehört.',
      'AMARA tiene un apartamento en Tarifa, el club tiene tres alojamientos propios. Aquí los nombramos todos, porque la cama adecuada depende de vuestro grupo, no de quién sea el dueño.',
      'AMARA heeft één appartement in Tarifa, de club heeft drie eigen accommodaties. We noemen ze hier allemaal, want het juiste bed hangt af van jullie groep, niet van wie de eigenaar is.',
      'AMARA har en lägenhet i Tarifa, klubben har tre egna boenden. Vi nämner alla här, för rätt säng beror på er grupp, inte på vem som äger den.'
    ),
    amaraLabel: l('AMARA', 'AMARA', 'AMARA', 'AMARA', 'AMARA'),
    clubLabel: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club'),
    items: [
      { id: 'amara-family-surf', owner: 'amara', name: 'AMARA Family & Surf', capacity: l('Up to 4 guests', 'Bis 4 Gäste', 'Hasta 4 huéspedes', 'Tot 4 gasten', 'Upp till 4 gäster'), text: l('Sea-view apartment with a view of Los Lances; the club lists it as the Amara Apartment.', 'Wohnung mit Meerblick und Blick auf Los Lances; der Club führt sie als Amara Apartment.', 'Apartamento con vistas al mar y a Los Lances; el club lo lista como Amara Apartment.', 'Appartement met zeezicht en uitzicht op Los Lances; de club noemt het Amara Apartment.', 'Lägenhet med havsutsikt mot Los Lances; klubben listar den som Amara Apartment.') },
      { id: 'guesthouse', owner: 'club', name: 'TSC Guesthouse', capacity: l('Up to 5 guests', 'Bis 5 Gäste', 'Hasta 5 huéspedes', 'Tot 5 gasten', 'Upp till 5 gäster'), text: l('Short-stay surfer house share one minute from the beach, single and double rooms, roof terrace.', 'Surfer-WG auf Zeit, eine Minute zum Strand, Einzel- und Doppelzimmer, Dachterrasse.', 'Piso compartido de surfistas por temporada, a un minuto de la playa, habitaciones individuales y dobles, azotea.', 'Tijdelijk surfershuis op een minuut van het strand, een- en tweepersoonskamers, dakterras.', 'Surfarkollektiv på tid, en minut till stranden, enkel- och dubbelrum, takterrass.') },
      { id: 'palomaview', owner: 'club', name: 'Palomaview Penthouse', capacity: l('Up to 6 guests', 'Bis 6 Gäste', 'Hasta 6 huéspedes', 'Tot 6 gasten', 'Upp till 6 gäster'), text: l('Sea-view penthouse with three double bedrooms, two bathrooms, roof terrace and pool from June to September.', 'Penthouse mit Meerblick, drei Doppelzimmer, zwei Bäder, Dachterrasse und Pool von Juni bis September.', 'Ático con vistas al mar, tres dobles, dos baños, azotea y piscina de junio a septiembre.', 'Penthouse met zeezicht, drie tweepersoonskamers, twee badkamers, dakterras en zwembad van juni tot september.', 'Takvåning med havsutsikt, tre dubbelrum, två badrum, takterrass och pool från juni till september.') },
      { id: 'casa-maresia', owner: 'club', name: 'Casa Maresia', capacity: l('Up to 8 guests', 'Bis 8 Gäste', 'Hasta 8 huéspedes', 'Tot 8 gasten', 'Upp till 8 gäster'), text: l('House with four bedrooms a few minutes from Playa de Los Lances, for surf, workation and groups.', 'Haus mit vier Schlafzimmern, wenige Minuten von der Playa de Los Lances, für Surf, Workation und Gruppen.', 'Casa con cuatro dormitorios a pocos minutos de la Playa de Los Lances, para surf, workation y grupos.', 'Huis met vier slaapkamers op een paar minuten van Playa de Los Lances, voor surf, workation en groepen.', 'Hus med fyra sovrum några minuter från Playa de Los Lances, för surf, workation och grupper.') }
    ],
    clubLinkLabel: l('The club’s accommodation on tarifasurfclub.com', 'Die Unterkünfte des Clubs auf tarifasurfclub.com', 'Los alojamientos del club en tarifasurfclub.com', 'De accommodaties van de club op tarifasurfclub.com', 'Klubbens boenden på tarifasurfclub.com'),
    clubHref: 'https://tarifasurfclub.com/ferienwohnungen-in-tarifa',
    note: l('Club accommodation is booked with the club; it publishes no prices online. AMARA Family & Surf is booked with us.', 'Die Unterkünfte des Clubs bucht ihr beim Club; Preise veröffentlicht er online nicht. AMARA Family & Surf bucht ihr bei uns.', 'Los alojamientos del club se reservan con el club; no publica precios en línea. AMARA Family & Surf se reserva con nosotros.', 'De accommodaties van de club boek je bij de club; prijzen publiceert hij niet online. AMARA Family & Surf boek je bij ons.', 'Klubbens boenden bokar ni hos klubben; den publicerar inga priser online. AMARA Family & Surf bokar ni hos oss.')
  },
  knowledge: {
    eyebrow: l('Before the water', 'Vor dem Wasser', 'Antes del agua', 'Vóór het water', 'Före vattnet'),
    title: l('What we explain, so nobody has to guess', 'Was wir erklären, damit niemand raten muss', 'Lo que explicamos para que nadie tenga que adivinar', 'Wat we uitleggen, zodat niemand hoeft te gokken', 'Vad vi förklarar, så att ingen behöver gissa'),
    links: [
      { id: 'guide', token: 'tarifa_kitesurfing_hub', title: l('Kitesurfing in Tarifa: the guide', 'Kitesurfen in Tarifa: der Guide', 'Kitesurf en Tarifa: la guía', 'Kitesurfen in Tarifa: de gids', 'Kitesurfing i Tarifa: guiden'), text: l('Wind systems, main areas, the check before launching and the practical questions, on one page.', 'Windsysteme, wichtige Bereiche, der Check vor dem Start und die praktischen Fragen auf einer Seite.', 'Sistemas de viento, zonas principales, la comprobación antes de salir y las preguntas prácticas en una página.', 'Windsystemen, belangrijkste gebieden, de check vóór de start en de praktische vragen op één pagina.', 'Vindsystem, viktiga områden, kontrollen före start och de praktiska frågorna på en sida.') },
      { id: 'wind', token: 'tarifa_wind_kitesurfing_authority', title: l('Wind, weather and safety', 'Wind in Tarifa', 'Viento, tiempo y seguridad', 'Wind, weer en veiligheid', 'Vind, väder och säkerhet'), text: l('How to read a forecast before you believe it: Windguru, Levante and Poniente, the official rules, rescue and emergency channels.', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt: Windguru, Levante und Poniente, die amtlichen Regeln, Rescue und Notrufwege.', 'Cómo leer un parte antes de creérselo: Windguru, levante y poniente, las normas oficiales, rescate y vías de emergencia.', 'Hoe je een forecast leest voordat je hem gelooft: Windguru, levante en poniente, de officiële regels, rescue en noodkanalen.', 'Hur ni läser en prognos innan ni tror på den: Windguru, levante och poniente, de officiella reglerna, räddning och nödvägar.') },
      { id: 'spots', token: 'tarifa_kitesurf_spots', title: l('Kitesurf spots', 'Kitesurf-Spots', 'Spots de kitesurf', 'Kitesurfspots', 'Kitesurfspots'), text: l('Which stretch works in which conditions, where the zones run and where kiting is prohibited.', 'Welcher Abschnitt bei welcher Lage funktioniert, wo die Zonen verlaufen und wo Kiten verboten ist.', 'Qué tramo funciona con cada situación, por dónde van las zonas y dónde está prohibido el kite.', 'Welk deel bij welke situatie werkt, waar de zones lopen en waar kiten verboden is.', 'Vilken sträcka som fungerar i vilket läge, var zonerna går och var kitesurfing är förbjuden.') },
      { id: 'forecast', token: 'tarifa_kitesurf_forecast', title: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'), text: l('Official AEMET warnings, the model briefing with explanation, and Windguru’s table.', 'Amtliche AEMET-Warnungen, das Modellbriefing mit Einordnung und die Windguru-Tabelle.', 'Avisos oficiales de AEMET, el briefing del modelo con explicación y la tabla de Windguru.', 'Officiële AEMET-waarschuwingen, de modelbriefing met duiding en de tabel van Windguru.', 'Officiella AEMET-varningar, modellbriefingen med förklaring och Windgurus tabell.') }
    ]
  },
  story: {
    eyebrow: l('Why we do this together', 'Warum wir das gemeinsam machen', 'Por qué lo hacemos juntos', 'Waarom we dit samen doen', 'Varför vi gör det här tillsammans'),
    title: l('Short lines between AMARA and the club', 'Kurze Wege zwischen AMARA und dem Club', 'Comunicación directa entre AMARA y el club', 'Korte lijnen tussen AMARA en de club', 'Direkt kontakt mellan AMARA och klubben'),
    text: l(
      'We have known Mark, who runs Tarifa Surf Club with Simone, for many years. In Tarifa we see and speak to each other almost every day, so questions and changes are settled in person and quickly. The club promotes AMARA on its own site, and we promote the club here. That is not an affiliate arrangement; it is two partners who send each other guests because it works.',
      'Mark, der den Tarifa Surf Club mit Simone führt, kennen wir seit vielen Jahren. In Tarifa sehen und sprechen wir uns fast täglich, so lassen sich Fragen und Änderungen persönlich und auf kurzem Weg klären. Der Club bewirbt AMARA auf seiner Seite, wir bewerben den Club hier. Das ist kein Affiliate-Deal, das sind zwei Partner, die einander Gäste schicken, weil es funktioniert.',
      'Conocemos desde hace muchos años a Mark, que dirige Tarifa Surf Club con Simone. En Tarifa nos vemos y hablamos casi a diario, así que las preguntas y los cambios se resuelven en persona y rápido. El club promociona AMARA en su web y nosotros promocionamos al club aquí. No es un acuerdo de afiliados: son dos socios que se envían huéspedes porque funciona.',
      'We kennen Mark, die Tarifa Surf Club samen met Simone leidt, al vele jaren. In Tarifa zien en spreken we elkaar bijna dagelijks, dus vragen en wijzigingen worden persoonlijk en snel geregeld. De club promoot AMARA op zijn site, wij promoten de club hier. Dat is geen affiliatedeal; het zijn twee partners die elkaar gasten sturen omdat het werkt.',
      'Vi har känt Mark, som driver Tarifa Surf Club tillsammans med Simone, i många år. I Tarifa ses och hörs vi nästan varje dag, så frågor och ändringar löses personligt och snabbt. Klubben marknadsför AMARA på sin sida, vi marknadsför klubben här. Det är inget affiliateupplägg; det är två partner som skickar gäster till varandra för att det fungerar.'
    ),
    imageAlt: l('Mark from Tarifa Surf Club and Robert from AMARA in Tarifa', 'Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa', 'Mark de Tarifa Surf Club y Robert de AMARA en Tarifa', 'Mark van Tarifa Surf Club en Robert van AMARA in Tarifa', 'Mark från Tarifa Surf Club och Robert från AMARA i Tarifa'),
    imageCaption: l('Mark and Robert: direct coordination in Tarifa', 'Mark und Robert: direkte Abstimmung in Tarifa', 'Mark y Robert: coordinación directa en Tarifa', 'Mark en Robert: directe afstemming in Tarifa', 'Mark och Robert: direkt samordning i Tarifa'),
    partnerLabel: l('Visit Tarifa Surf Club', 'Tarifa Surf Club besuchen', 'Visitar Tarifa Surf Club', 'Bezoek Tarifa Surf Club', 'Besök Tarifa Surf Club')
  },
  closing: {
    eyebrow: l('Your base in Tarifa', 'Eure Basis in Tarifa', 'Vuestra base en Tarifa', 'Jullie basis in Tarifa', 'Er bas i Tarifa'),
    title: l('AMARA Family & Surf', 'AMARA Family & Surf', 'AMARA Family & Surf', 'AMARA Family & Surf', 'AMARA Family & Surf'),
    reason: l('The apartment behind this page: a view of Los Lances, gear waiting on arrival if you want it, and the club a message away.', 'Die Wohnung hinter dieser Seite: Blick auf Los Lances, auf Wunsch Material bei Ankunft, und der Club eine Nachricht entfernt.', 'El apartamento detrás de esta página: vistas a Los Lances, material a la llegada si lo queréis y el club a un mensaje de distancia.', 'Het appartement achter deze pagina: uitzicht op Los Lances, desgewenst materiaal bij aankomst, en de club op één bericht afstand.', 'Lägenheten bakom den här sidan: utsikt över Los Lances, utrustning vid ankomst om ni vill, och klubben ett meddelande bort.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf')
  }
};
