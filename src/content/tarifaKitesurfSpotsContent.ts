import type { LocalizedText, LocalizedTextSection } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';
import { routeOgImage } from '../lib/images/routeImages';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const title = l(
  'Kitesurf spots in Tarifa: Los Lances, Valdevaqueros & Balneario',
  'Kitesurf-Spots in Tarifa: Los Lances, Valdevaqueros & Balneario',
  'Spots de kitesurf en Tarifa: Los Lances, Valdevaqueros y Balneario',
  'Kitesurfspots in Tarifa: Los Lances, Valdevaqueros & Balneario',
  'Kitesurfspots i Tarifa: Los Lances, Valdevaqueros & Balneario'
);
const description = l(
  'In a Poniente Los Lances outside the door, in a Levante Valdevaqueros in the bay, Balneario for Big Air. Robert’s spots, with a map and the town’s zones.',
  'Bei Poniente Los Lances vor der Tür, bei Levante Valdevaqueros in der Bucht, Balneario für Big Air. Roberts Spots, mit Karte und den Zonen der Stadt.',
  'Con poniente Los Lances en la puerta, con levante Valdevaqueros en la ensenada, Balneario para Big Air. Los spots de Robert, con mapa y las zonas del ayuntamiento.',
  'Bij Poniente Los Lances voor de deur, bij Levante Valdevaqueros in de baai, Balneario voor Big Air. Roberts spots, met kaart en de zones van de stad.',
  'Vid Poniente Los Lances utanför dörren, vid Levante Valdevaqueros i viken, Balneario för Big Air. Roberts spottar, med karta och stadens zoner.'
);

export const tarifaKitesurfSpotsSeo: AmaraAuthoringSeo = {
  version: '2026-09-03-tarifa-kitesurf-spots-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('tarifa.kitesurfing.spots'),
  article: {
    datePublished: '2026-09-03', dateModified: '2026-09-03',
    authorName: 'Robert Sebastian Böhmer', authorType: 'Person', authorRoute: 'about'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

interface SpotSection extends LocalizedTextSection {
  /** Recommendation record this spot section presents (DR-GUEST-006). */
  recordId?: string;
  observation?: LocalizedText;
  link?: { token: LinkToken; text: LocalizedText; label: LocalizedText };
}

const sections: SpotSection[] = [
  {
    id: 'los-lances',
    recordId: 'tarifa.beaches.playa-los-lances',
    title: l('Los Lances: kiting right in front of Tarifa', 'Los Lances: Das Kitesurfen direkt vor Tarifa', 'Los Lances: navegar frente a Tarifa', 'Los Lances: kitesurfen vlak voor Tarifa', 'Los Lances: kitesurfing precis framför Tarifa'),
    paragraphs: {
      en: ['In a Poniente we walk to Los Lances. The beach is open to the Atlantic, with wind waves and shorebreak; the Poniente blows at an angle onshore, runs steadily and brings the waves with it.', 'Sur is the stretch in front of town; Norte runs further west with separate bathing, school and kite areas. In summer buoys and signs show where to launch. In a Levante the wind here blows at an angle offshore; then we prefer to drive to Valdevaqueros.'],
      de: ['Bei Poniente gehen wir zu Fuß nach Los Lances. Der Strand ist offen zum Atlantik, mit Windwelle und Shorebreak; der Poniente steht schräg auflandig, läuft gleichmäßig und bringt die Welle mit.', 'Sur ist der Abschnitt vor der Stadt, Norte zieht sich weiter nach Westen mit getrennten Bade-, Schul- und Kitebereichen. Im Sommer zeigen Bojen und Schilder, wo gestartet wird. Bei Levante steht der Wind hier schräg ablandig; dann fahren wir lieber nach Valdevaqueros.'],
      es: ['Con poniente vamos a pie a Los Lances. La playa está abierta al Atlántico, con ola de viento y shorebreak; el poniente entra oblicuo hacia tierra, sopla regular y trae la ola.', 'Sur es el tramo delante del pueblo, Norte sigue hacia el oeste con zonas separadas de baño, escuela y kite. En verano, boyas y carteles indican dónde se sale. Con levante el viento aquí entra oblicuo hacia el mar; entonces preferimos ir a Valdevaqueros.'],
      nl: ['Bij Poniente lopen we naar Los Lances. Het strand ligt open naar de Atlantische Oceaan, met windgolven en shorebreak; de Poniente staat schuin aanlandig, loopt gelijkmatig en brengt de golf mee.', 'Sur is het stuk voor de stad, Norte loopt verder naar het westen met gescheiden zwem-, school- en kitezones. In de zomer tonen boeien en borden waar je start. Bij Levante staat de wind hier schuin aflandig; dan rijden we liever naar Valdevaqueros.'],
      sv: ['Vid Poniente går vi till fots till Los Lances. Stranden är öppen mot Atlanten, med vindvågor och shorebreak; Poniente ligger snett pålands, blåser jämnt och tar med sig vågen.', 'Sur är avsnittet framför stan, Norte fortsätter västerut med skilda bad-, skol- och kiteområden. På sommaren visar bojar och skyltar var man startar. Vid Levante ligger vinden här snett frånlands; då kör vi hellre till Valdevaqueros.']
    },
    observation: l('Outside the summer months, Los Lances is my usual Tarifa spot. When Poniente arrives, I take my kit and walk towards the beach. A session right in front of Tarifa, with kiters coming down from town, is what gives me that Tarifa feeling.', 'Außerhalb der Sommermonate ist Los Lances mein typischer Tarifa-Spot. Wenn Poniente kommt, nehme ich mein Material und gehe zu Fuß Richtung Strand. Die Session direkt vor Tarifa und die Kiter, die aus der Stadt dazukommen, gehören für mich zum eigentlichen Tarifa-Gefühl.', 'Fuera de los meses de verano, Los Lances es mi spot habitual en Tarifa. Cuando entra poniente, cojo el material y voy andando hacia la playa. Navegar frente al pueblo, con otros kiters que bajan desde la ciudad, es lo que para mí hace especial a Tarifa.', 'Buiten de zomermaanden is Los Lances mijn gebruikelijke spot in Tarifa. Als de poniente komt, pak ik mijn materiaal en loop naar het strand. Een sessie vlak voor Tarifa, met kiters die vanuit de stad aansluiten, hoort voor mij bij het echte Tarifa-gevoel.', 'Utanför sommarmånaderna är Los Lances min vanliga spot i Tarifa. När poniente kommer tar jag utrustningen och går mot stranden. Ett pass precis framför Tarifa, med kitare som kommer ner från staden, är själva Tarifa-känslan för mig.'),
    link: {
      token: 'tarifa_wind_kitesurfing_authority',
      text: l('What Levante and Poniente mean on this beach is on the wind page:', 'Was Levante und Poniente an diesem Strand bedeuten, steht auf der Wind-Seite:', 'Qué significan levante y poniente en esta playa está en la página del viento:', 'Wat Levante en Poniente op dit strand betekenen, staat op de windpagina:', 'Vad Levante och Poniente betyder på den här stranden står på vindsidan:'),
      label: l('wind directions and current conditions', 'Windrichtungen und aktuelle Bedingungen', 'direcciones del viento y condiciones actuales', 'windrichtingen en actuele omstandigheden', 'vindriktningar och aktuella förhållanden')
    }
  },
  {
    id: 'rio-jara',
    title: l('Río Jara: the lagoon is closed', 'Río Jara: die Lagune ist gesperrt', 'Río Jara: la laguna está cerrada', 'Río Jara: de lagune is gesloten', 'Río Jara: lagunen är avspärrad'),
    paragraphs: {
      en: ['The lagoon at the Río Jara is a nature reserve. Kitesurfing and every other water sport are prohibited there, however flat and tempting the water looks. The buoys mark the boundary.'],
      de: ['Die Lagune am Río Jara ist Naturschutz. Kitesurfen und jeder andere Wassersport sind dort verboten, egal wie flach und verlockend das Wasser aussieht. Die Bojen zeigen die Grenze.'],
      es: ['La laguna del río Jara es espacio protegido. El kitesurf y cualquier otro deporte acuático están prohibidos allí, por muy plana y tentadora que parezca el agua. Las boyas marcan el límite.'],
      nl: ['De lagune bij de Río Jara is natuurgebied. Kitesurfen en elke andere watersport zijn er verboden, hoe vlak en verleidelijk het water ook lijkt. De boeien tonen de grens.'],
      sv: ['Lagunen vid Río Jara är naturskydd. Kitesurfing och all annan vattensport är förbjuden där, hur platt och lockande vattnet än ser ut. Bojarna visar gränsen.']
    }
  },
  {
    id: 'valdevaqueros',
    recordId: 'tarifa.beaches.playa-de-valdevaqueros',
    title: l('Valdevaqueros: the bay option for Levante', 'Valdevaqueros: Die Levante-Option in der Bucht', 'Valdevaqueros: la opción de la bahía con levante', 'Valdevaqueros: de baai bij levante', 'Valdevaqueros: bukten vid levante'),
    paragraphs: {
      en: ['In a Levante the bay of Valdevaqueros curves so that if you drift you have land in front of you again. Mark sends beginners exactly there on their first Levante: the wind is more onshore, and the big dune at your back makes a difference.', 'Punta Paloma at the northern end belongs to the same bay. Outside high summer Valdevaqueros is wide and easy to read; in July and August bathers, schools and kiters share the beach in zones.'],
      de: ['Bei Levante krümmt sich die Bucht von Valdevaqueros so, dass ihr bei Abdrift wieder Land vor euch habt. Mark schickt Anfänger beim ersten Levante genau dorthin: Der Wind steht auflandiger, und die große Düne im Rücken macht einen Unterschied.', 'Punta Paloma am nördlichen Ende gehört zur selben Bucht. Außerhalb des Hochsommers ist Valdevaqueros weit und übersichtlich; im Juli und August teilen sich Badegäste, Schulen und Kiter den Strand in Zonen.'],
      es: ['Con levante, la ensenada de Valdevaqueros se curva de modo que, si derivais, volvéis a tener tierra delante. Mark manda a los principiantes justo allí en su primer levante: el viento entra más hacia tierra, y la gran duna a la espalda marca la diferencia.', 'Punta Paloma, en el extremo norte, forma parte de la misma ensenada. Fuera del pleno verano Valdevaqueros es amplia y fácil de leer; en julio y agosto bañistas, escuelas y kiters se reparten la playa por zonas.'],
      nl: ['Bij Levante kromt de baai van Valdevaqueros zich zo dat je bij afdrijven weer land voor je hebt. Mark stuurt beginners bij hun eerste Levante precies daarheen: de wind staat aanlandiger, en de grote duin in de rug maakt verschil.', 'Punta Paloma aan het noordelijke eind hoort bij dezelfde baai. Buiten de hoogzomer is Valdevaqueros wijd en overzichtelijk; in juli en augustus delen badgasten, scholen en kiters het strand in zones.'],
      sv: ['Vid Levante kröker sig viken vid Valdevaqueros så att ni vid avdrift åter har land framför er. Mark skickar nybörjare exakt dit vid deras första Levante: vinden ligger mer pålands, och den stora dynen i ryggen gör skillnad.', 'Punta Paloma i norra änden hör till samma vik. Utanför högsommaren är Valdevaqueros vid och överskådlig; i juli och augusti delar badgäster, skolor och kitare stranden i zoner.']
    },
    observation: l('In July and August I personally avoid Valdevaqueros when I have a choice. Between bathers, schools, kiters and separate zones, I find it can become very crowded and hard to read. That is my own preference, rather than a rule for everyone who rides there.', 'Im Juli und August fahre ich persönlich nicht nach Valdevaqueros, wenn ich die Wahl habe. Mit Badegästen, Schulen, Kitern und getrennten Zonen kann es mir dort sehr voll und unübersichtlich werden. Das ist meine persönliche Vorliebe, keine Regel für alle, die dort fahren.', 'En julio y agosto, personalmente evito Valdevaqueros cuando puedo elegir. Entre bañistas, escuelas, kiters y zonas separadas, puede resultarme muy lleno y difícil de interpretar. Es mi preferencia, no una regla para quienes navegan allí.', 'In juli en augustus ga ik persoonlijk niet naar Valdevaqueros als ik kan kiezen. Door badgasten, scholen, kiters en gescheiden zones kan het er voor mij erg druk en onoverzichtelijk worden. Dat is mijn voorkeur, geen regel voor iedereen die er vaart.', 'I juli och augusti undviker jag personligen Valdevaqueros när jag kan välja. Med badgäster, skolor, kitare och separata zoner kan det bli mycket trångt och svåröverskådligt för mig. Det är min personliga preferens, ingen regel för alla som åker där.')
  },
  {
    id: 'balneario',
    title: l('Balneario: Big Air, to watch or for experts', 'Balneario: Big Air, zum Zuschauen oder für Könner', 'Balneario: Big Air, para mirar o para expertos', 'Balneario: Big Air, om te kijken of voor kenners', 'Balneario: Big Air, för att titta eller för kunniga'),
    paragraphs: {
      en: ['Balneario is the spot for Big Air, right by town. For an ordinary freeride session Los Lances and Valdevaqueros remain the choice; this is where those who want to land a double kite loop ride.'],
      de: ['Balneario ist der Spot für Big Air, direkt an der Stadt. Für eine normale Freeride-Session bleiben Los Lances und Valdevaqueros die Wahl; hier fahren die, die einen Double Kite Loop landen wollen.'],
      es: ['Balneario es el spot de Big Air, justo junto al pueblo. Para una sesión normal de freeride, Los Lances y Valdevaqueros siguen siendo la elección; aquí navegan los que quieren aterrizar un double kite loop.'],
      nl: ['Balneario is de spot voor Big Air, direct bij de stad. Voor een normale freeride-sessie blijven Los Lances en Valdevaqueros de keuze; hier varen zij die een double kite loop willen landen.'],
      sv: ['Balneario är spoten för Big Air, alldeles vid stan. För en vanlig freeride-session är Los Lances och Valdevaqueros fortfarande valet; här kör de som vill landa en double kite loop.']
    },
    observation: l('Unless you are specifically training to land a Double Kite Loop with control and consistency, Balneario is an interesting spot for you to watch — but not to ride.', 'Wenn du nicht gerade gezielt daran trainierst, einen Double Kite Loop kontrolliert und zuverlässig zu landen, ist Balneario für dich ein interessanter Spot zum Zuschauen – aber nicht zum Fahren.', 'Si no estáis entrenando específicamente para aterrizar un Double Kite Loop con control y de forma consistente, Balneario es un spot interesante para verlo desde fuera, pero no para navegar.', 'Tenzij jullie gericht trainen om een Double Kite Loop beheerst en consequent te landen, is Balneario een interessante spot om te kijken, maar niet om zelf te varen.', 'Om ni inte tränar målmedvetet på att landa en Double Kite Loop kontrollerat och tillförlitligt är Balneario en intressant spot att titta på, men inte att åka på.'),
    link: {
      token: 'tarifa_wind_kitesurfing_authority',
      text: l('Why the Levante is gusty and offshore here:', 'Warum der Levante hier böig und ablandig ist:', 'Por qué el levante aquí es racheado y sopla hacia el mar:', 'Waarom de Levante hier vlagerig en aflandig is:', 'Varför Levante här är byig och frånlands:'),
      label: l('wind and safety in Tarifa', 'Wind und Sicherheit in Tarifa', 'viento y seguridad en Tarifa', 'wind en veiligheid in Tarifa', 'vind och säkerhet i Tarifa')
    }
  },
  {
    id: 'arte-vida',
    title: l('Arte Vida: waves for advanced riders', 'Arte Vida: Welle für Fortgeschrittene', 'Arte Vida: olas para avanzados', 'Arte Vida: golven voor gevorderden', 'Arte Vida: vågor för avancerade'),
    paragraphs: {
      en: ['Arte Vida is a wave spot for advanced riders, a little to the west. If you are planning your first Tarifa session, you are better off at Los Lances or Valdevaqueros.'],
      de: ['Arte Vida ist ein Wellenspot für Fortgeschrittene, ein Stück westlich. Wer seine erste Tarifa-Session plant, ist an Los Lances oder Valdevaqueros besser aufgehoben.'],
      es: ['Arte Vida es un spot de olas para avanzados, un poco al oeste. Quien planea su primera sesión en Tarifa está mejor en Los Lances o Valdevaqueros.'],
      nl: ['Arte Vida is een golfspot voor gevorderden, een stuk westelijker. Wie zijn eerste Tarifa-sessie plant, is beter af op Los Lances of Valdevaqueros.'],
      sv: ['Arte Vida är en vågspot för avancerade, en bit västerut. Den som planerar sin första Tarifasession gör bättre i att välja Los Lances eller Valdevaqueros.']
    }
  },
  {
    id: 'plan-b',
    title: l('Getares and Palmones: Plan B in very strong Levante', 'Getares und Palmones: Plan B bei sehr starkem Levante', 'Getares y Palmones: plan B con levante muy fuerte', 'Getares en Palmones: plan B bij zeer sterke levante', 'Getares och Palmones: plan B vid mycket stark levante'),
    paragraphs: {
      en: ['If the Levante gets very strong, Getares near Algeciras is considered the fallback spot; some also drive to Palmones. Both are areas of their own with their own rules; ask at the club before you drive there.', 'Bolonia and Caños de Meca further west are outings of their own, not fallback spots for a Tarifa day.'],
      de: ['Wird der Levante sehr stark, gilt Getares bei Algeciras als Ausweichspot, manche fahren auch nach Palmones. Beides sind eigene Reviere mit eigenen Regeln; fragt beim Club, bevor ihr hinfahrt.', 'Bolonia und Caños de Meca weiter westlich sind eigene Ausflüge, keine Ausweichspots für einen Tarifa-Tag.'],
      es: ['Si el levante se pone muy fuerte, Getares, junto a Algeciras, se considera el spot alternativo; algunos van también a Palmones. Ambos son zonas propias con sus propias normas; preguntad en el club antes de ir.', 'Bolonia y Caños de Meca, más al oeste, son excursiones propias, no spots alternativos para un día en Tarifa.'],
      nl: ['Wordt de Levante heel sterk, dan geldt Getares bij Algeciras als uitwijkspot, sommigen rijden ook naar Palmones. Beide zijn eigen gebieden met eigen regels; vraag bij de club voordat je erheen rijdt.', 'Bolonia en Caños de Meca verder westelijk zijn eigen uitstapjes, geen uitwijkspots voor een Tarifa-dag.'],
      sv: ['Blir Levante mycket stark räknas Getares vid Algeciras som reservspot, en del kör också till Palmones. Båda är egna revir med egna regler; fråga på klubben innan ni kör dit.', 'Bolonia och Caños de Meca längre västerut är egna utflykter, inte reservspottar för en Tarifadag.']
    }
  }
];

export const tarifaKitesurfSpotsContent = {
  token: 'tarifa_kitesurf_spots' as const,
  hero: {
    eyebrow: 'Tarifa Experience Guide', title,
    headline: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
    subtitle: l('Los Lances in a Poniente, Valdevaqueros in a Levante, Balneario to watch', 'Bei Poniente Los Lances, bei Levante Valdevaqueros, Balneario zum Zuschauen', 'Con poniente Los Lances, con levante Valdevaqueros, Balneario para mirar', 'Bij Poniente Los Lances, bij Levante Valdevaqueros, Balneario om te kijken', 'Vid Poniente Los Lances, vid Levante Valdevaqueros, Balneario för att titta'),
    lead: l(
      'Tarifa has several spots, and the wind says which one fits today. In a Poniente we walk to Los Lances. In a Levante we drive to Valdevaqueros: the bay curves so that if you drift you have land in front of you again. Balneario is the Big Air spot for very experienced riders; the lagoon at the Río Jara is a nature reserve and closed. From 15 June to 15 September the town’s zones apply: buoys and signs show where you launch.',
      'Tarifa hat mehrere Spots, und der Wind sagt, welcher heute passt. Bei Poniente gehen wir zu Fuß nach Los Lances. Bei Levante fahren wir nach Valdevaqueros: Die Bucht krümmt sich so, dass ihr bei Abdrift wieder Land vor euch habt. Balneario ist der Big-Air-Spot für sehr erfahrene Fahrer, die Lagune am Río Jara ist Naturschutz und gesperrt. Vom 15. Juni bis 15. September gelten die Zonen der Stadt: Bojen und Schilder zeigen, wo ihr startet.',
      'Tarifa tiene varios spots, y el viento dice cuál toca hoy. Con poniente vamos a pie a Los Lances. Con levante vamos a Valdevaqueros: la ensenada se curva de modo que, si derivais, volvéis a tener tierra delante. Balneario es el spot de Big Air para riders muy experimentados; la laguna del río Jara es espacio protegido y está cerrada. Del 15 de junio al 15 de septiembre rigen las zonas del ayuntamiento: boyas y carteles indican dónde salir.',
      'Tarifa heeft meerdere spots, en de wind zegt welke vandaag past. Bij Poniente lopen we naar Los Lances. Bij Levante rijden we naar Valdevaqueros: de baai kromt zich zo dat je bij afdrijven weer land voor je hebt. Balneario is de Big-Air-spot voor zeer ervaren rijders, de lagune bij de Río Jara is natuurgebied en gesloten. Van 15 juni tot 15 september gelden de zones van de stad: boeien en borden tonen waar je start.',
      'Tarifa har flera spottar, och vinden säger vilken som passar i dag. Vid Poniente går vi till fots till Los Lances. Vid Levante kör vi till Valdevaqueros: viken kröker sig så att ni vid avdrift åter har land framför er. Balneario är Big Air-spoten för mycket erfarna åkare, lagunen vid Río Jara är naturskydd och avspärrad. Från 15 juni till 15 september gäller stadens zoner: bojar och skyltar visar var ni startar.'
    ),
    updated: l('As of 3 September 2026', 'Stand 3. September 2026', 'Actualizado el 3 de septiembre de 2026', 'Stand 3 september 2026', 'Uppdaterad 3 september 2026'),
    note: l('', '', '', '', ''),
  },
  orientation: {
    title: l('The spots from west to east', 'Die Spots von West nach Ost', 'Los spots de oeste a este', 'De spots van west naar oost', 'Spottarna från väst till öst'),
    columns: [
      { id: 'spot', label: l('Spot', 'Spot', 'Spot', 'Spot', 'Spot') },
      { id: 'role', label: l('What', 'Was', 'Qué', 'Wat', 'Vad') },
      { id: 'orientation', label: l('When', 'Wann', 'Cuándo', 'Wanneer', 'När') }
    ],
    rows: [
      { id: 'los-lances', name: 'Los Lances Sur & Norte', role: l('Main spot', 'Hauptspot', 'Spot principal', 'Hoofdspot', 'Huvudspot'), text: l('In a Poniente, on foot from our door', 'Bei Poniente, zu Fuß von unserer Tür', 'Con poniente, a pie desde nuestra puerta', 'Bij Poniente, te voet vanaf onze deur', 'Vid Poniente, till fots från vår dörr') },
      { id: 'valdevaqueros', name: 'Valdevaqueros & Punta Paloma', role: l('Main spot', 'Hauptspot', 'Spot principal', 'Hoofdspot', 'Huvudspot'), text: l('In a Levante, ten minutes by car', 'Bei Levante, zehn Minuten mit dem Auto', 'Con levante, diez minutos en coche', 'Bij Levante, tien minuten met de auto', 'Vid Levante, tio minuter med bil') },
      { id: 'balneario', name: 'Balneario', role: l('Specialist spot', 'Spezialspot', 'Spot especializado', 'Specialistische spot', 'Specialistspot'), text: l('Big Air and highly experienced riders', 'Big Air und sehr erfahrene Fahrer', 'Big Air y riders con mucha experiencia', 'Big Air en zeer ervaren kiters', 'Big Air och mycket erfarna åkare') },
      { id: 'arte-vida', name: 'Arte Vida', role: l('Specialist spot', 'Spezialspot', 'Spot especializado', 'Specialistische spot', 'Specialistspot'), text: l('Waves, for advanced riders', 'Welle, für Fortgeschrittene', 'Olas, para avanzados', 'Golven, voor gevorderden', 'Vågor, för avancerade') },
      { id: 'getares', name: 'Getares', role: l('Fallback spot', 'Ausweichspot', 'Spot alternativo', 'Uitwijkspot', 'Reservspot'), text: l('In a very strong Levante, ask at the club first', 'Bei sehr starkem Levante, vorher beim Club fragen', 'Con levante muy fuerte, preguntar antes en el club', 'Bij heel sterke Levante, eerst bij de club vragen', 'Vid mycket stark Levante, fråga klubben först') },
      { id: 'palmones', name: 'Palmones', role: l('Fallback spot', 'Ausweichspot', 'Spot alternativo', 'Uitwijkspot', 'Reservspot'), text: l('In a very strong Levante, ask at the club first', 'Bei sehr starkem Levante, vorher beim Club fragen', 'Con levante muy fuerte, preguntar antes en el club', 'Bij heel sterke Levante, eerst bij de club vragen', 'Vid mycket stark Levante, fråga klubben först') },
      { id: 'lagoon', name: l('Río Jara lagoon', 'Río-Jara-Lagune', 'Laguna del Río Jara', 'Río Jara-lagune', 'Río Jara-lagunen'), role: l('No kiting', 'Kein Kitespot', 'No es un spot de kite', 'Geen kitespot', 'Ingen kitespot'), text: l('Nature reserve, closed', 'Naturschutz, gesperrt', 'Espacio protegido, cerrado', 'Natuurgebied, gesloten', 'Naturskydd, avspärrat') },
      { id: 'other-areas', name: 'Bolonia & Caños de Meca', role: l('An outing of its own', 'Eigener Ausflug', 'Excursión propia', 'Eigen uitstapje', 'Egen utflykt'), text: l('Areas of their own, rules of their own', 'Eigene Reviere, eigene Regeln', 'Zonas propias, normas propias', 'Eigen gebieden, eigen regels', 'Egna revir, egna regler') }
    ]
  },
  decision: {
    title: l('Los Lances or Valdevaqueros?', 'Los Lances oder Valdevaqueros?', '¿Los Lances o Valdevaqueros?', 'Los Lances of Valdevaqueros?', 'Los Lances eller Valdevaqueros?'),
    condition: l('Wind', 'Wind', 'Viento', 'Wind', 'Vind'),
    orientation: l('When', 'Wann', 'Cuándo', 'Wanneer', 'När'),
    rows: [
      { id: 'poniente', condition: l('Poniente', 'Poniente', 'Poniente', 'Poniente', 'Poniente'), text: l('Los Lances, on foot.', 'Los Lances, zu Fuß.', 'Los Lances, a pie.', 'Los Lances, te voet.', 'Los Lances, till fots.') },
      { id: 'levante', condition: l('Levante', 'Levante', 'Levante', 'Levante', 'Levante'), text: l('Valdevaqueros, by car.', 'Valdevaqueros, mit dem Auto.', 'Valdevaqueros, en coche.', 'Valdevaqueros, met de auto.', 'Valdevaqueros, med bil.') },
      { id: 'bathing-season', condition: l('15 June–15 September', '15. Juni bis 15. September', '15 de junio–15 de septiembre', '15 juni tot 15 september', '15 juni–15 september'), text: l('Bathing season: launch only in the kite zones, the buoys mark them.', 'Badesaison: Start nur in den Kitezonen, die Bojen zeigen sie.', 'Temporada de baño: salir solo en las zonas de kite, las boyas las marcan.', 'Badseizoen: alleen starten in de kitezones, de boeien tonen ze.', 'Badsäsong: starta bara i kitezonerna, bojarna visar dem.') },
      { id: 'strong-levante', condition: l('Very strong Levante', 'Sehr starker Levante', 'Levante muy fuerte', 'Zeer sterke levante', 'Mycket stark levante'), text: l('Getares or Palmones, ask at the club first.', 'Getares oder Palmones, vorher beim Club fragen.', 'Getares o Palmones, preguntar antes en el club.', 'Getares of Palmones, eerst bij de club vragen.', 'Getares eller Palmones, fråga klubben först.') },
      { id: 'big-air', condition: l('Big Air', 'Big Air', 'Big Air', 'Big Air', 'Big Air'), text: l('Balneario, for experts.', 'Balneario, für Könner.', 'Balneario, para expertos.', 'Balneario, voor kenners.', 'Balneario, för kunniga.') }
    ],
    note: l('June and September are still part of the bathing season; look at the buoys.', 'Juni und September gehören noch zur Badesaison; schaut auf die Bojen.', 'Junio y septiembre siguen siendo temporada de baño; mirad las boyas.', 'Juni en september horen nog bij het badseizoen; kijk naar de boeien.', 'Juni och september hör fortfarande till badsäsongen; titta på bojarna.')
  },
  observationLabel: l('Robert · personal experience', 'Robert · persönliche Erfahrung', 'Robert · experiencia personal', 'Robert · persoonlijke ervaring', 'Robert · personlig erfarenhet'),
  ui: {
    orientationEyebrow: l('Overview', 'Überblick', 'Visión general', 'Overzicht', 'Överblick'),
    decisionEyebrow: l('The main decision', 'Die Hauptentscheidung', 'La decisión principal', 'De belangrijkste keuze', 'Huvudfrågan'),
    spotsEyebrow: l('The spots', 'Die Spots', 'Los spots', 'De spots', 'Spotsen'),
    spotLabel: l('Spot', 'Spot', 'Spot', 'Spot', 'Spot'),
    checklistEyebrow: l('Before every session', 'Vor jeder Session', 'Antes de cada sesión', 'Voor elke sessie', 'Inför varje pass'),
    portraitAlt: l('Robert Böhmer, host at AMARA', 'Robert Böhmer, Gastgeber bei AMARA', 'Robert Böhmer, anfitrión de AMARA', 'Robert Böhmer, host bij AMARA', 'Robert Böhmer, värd på AMARA')
  },
  sections,
  checklist: {
    title: l('Before you rig up', 'Bevor ihr aufbaut', 'Antes de montar', 'Voordat je optuigt', 'Innan ni riggar'),
    items: [
      { id: 'wind', text: l('Wind direction, strength and gusts.', 'Windrichtung, Stärke und Böigkeit.', 'Dirección, fuerza y rachas del viento.', 'Windrichting, kracht en vlagen.', 'Vindriktning, styrka och byighet.') },
      { id: 'signs', text: l('Buoys and signs on the beach.', 'Bojen und Schilder am Strand.', 'Boyas y carteles en la playa.', 'Boeien en borden op het strand.', 'Bojar och skyltar på stranden.') },
      { id: 'zones', text: l('The kite zone you launch in.', 'Die Kitezone, in der ihr startet.', 'La zona de kite desde la que salís.', 'De kitezone waarin je start.', 'Kitezonen ni startar i.') },
      { id: 'corridors', text: l('The corridor for heading out.', 'Der Korridor zum Rausfahren.', 'El pasillo para salir al agua.', 'De corridor om uit te varen.', 'Korridoren för att ta sig ut.') },
      { id: 'ability', text: l('And whether the day suits you.', 'Und ob der Tag zu euch passt.', 'Y si el día es para vosotros.', 'En of de dag bij jullie past.', 'Och om dagen passar er.') }
    ]
  },
  sources: {
    eyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor'),
    title: l('Where the details come from', 'Woher die Angaben kommen', 'De dónde salen los datos', 'Waar de gegevens vandaan komen', 'Varifrån uppgifterna kommer'),
    text: l('Beach plan and beach regulations of the town of Tarifa, as of 3 September 2026. On the beach, buoys and signs count.', 'Strandplan und Strandordnung der Stadt Tarifa, Stand 3. September 2026. Am Strand zählen Bojen und Schilder.', 'Plano de playas y ordenanza de playas del Ayuntamiento de Tarifa, actualizado el 3 de septiembre de 2026. En la playa cuentan boyas y carteles.', 'Strandplan en strandverordening van de stad Tarifa, stand 3 september 2026. Op het strand tellen boeien en borden.', 'Strandplan och strandordning från Tarifa kommun, uppdaterad 3 september 2026. På stranden räknas bojar och skyltar.'),
    items: [
      { id: 'beach-plan', label: 'Ayuntamiento de Tarifa · Plan de Explotación de Playas 2024–2027', href: 'https://www.aytotarifa.com/notices/plan-de-explotacion-de-playas-2024-2027/' },
      { id: 'ordinance', label: 'Ayuntamiento de Tarifa · Ordenanza municipal de uso y disfrute de las playas', href: 'https://www.aytotarifa.com/notices/ordenanza-municipal-reguladora-del-uso-y-disfrute-de-las-playas-del-termino-municipal-de-tarifa/' },
      { id: 'lagoon', label: 'Junta de Andalucía · Playa de Los Lances', href: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/playa-de-los-lances/255035' }
    ]
  },
  closing: {
    eyebrow: l('Your base in Tarifa', 'Eure Basis in Tarifa', 'Vuestra base en Tarifa', 'Jullie uitvalsbasis in Tarifa', 'Er bas i Tarifa'),
    observation: l('My passion for kitesurfing was one reason I chose this location for our accommodation. From AMARA, I walk with my kit towards Los Lances when Poniente comes.', 'Meine Kite-Leidenschaft war ein Grund, diese Lage für unsere Unterkunft zu wählen. Von AMARA gehe ich bei Poniente selbst mit meinem Material zu Fuß Richtung Los Lances.', 'Mi pasión por el kite fue uno de los motivos para elegir esta ubicación para nuestro alojamiento. Desde AMARA voy andando con el material hacia Los Lances cuando entra poniente.', 'Mijn passie voor kitesurfen speelde mee bij de keuze van deze locatie voor ons verblijf. Vanuit AMARA loop ik bij poniente zelf met mijn materiaal richting Los Lances.', 'Min passion för kitesurfing var ett av skälen till att jag valde den här platsen för vårt boende. Från AMARA går jag själv med utrustningen mot Los Lances när poniente kommer.'),
    text: l('Family & Surf is the apartment from which Robert walks to the beach: five minutes to Los Lances, underground garage for car and boards.', 'Family & Surf ist die Wohnung, von der aus Robert zu Fuß zum Strand geht: fünf Minuten nach Los Lances, Tiefgarage für Auto und Boards.', 'Family & Surf es el apartamento desde el que Robert va a pie a la playa: cinco minutos a Los Lances, garaje para el coche y las tablas.', 'Family & Surf is het appartement van waaruit Robert te voet naar het strand gaat: vijf minuten naar Los Lances, ondergrondse garage voor auto en boards.', 'Family & Surf är lägenheten Robert går till fots till stranden från: fem minuter till Los Lances, garage för bil och brädor.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf'),
    availabilityLabel: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet')
  }
};

export const tarifaKitesurfSpotsHandoff = {
  text: l('Los Lances in a Poniente, Valdevaqueros in a Levante. Which spot fits today is here:', 'Los Lances bei Poniente, Valdevaqueros bei Levante. Welcher Spot heute passt, steht hier:', 'Los Lances con poniente, Valdevaqueros con levante. Qué spot toca hoy está aquí:', 'Los Lances bij Poniente, Valdevaqueros bij Levante. Welke spot vandaag past, staat hier:', 'Los Lances vid Poniente, Valdevaqueros vid Levante. Vilken spot som passar i dag står här:'),
  label: l('kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'spots de kitesurf en Tarifa', 'kitesurfspots in Tarifa', 'kitesurfspots i Tarifa')
};
