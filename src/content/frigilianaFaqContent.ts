import type { LocalizedText } from '../types/content';
import { routeOgImage } from '../lib/images/routeImages';
import type { AmaraAuthoringSeo } from '../types/seo';


const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaFaqExternalLinks = {
  officialBusSchedule: 'https://frigiliana.es/horario-autobuses/',
  officialTourism: 'https://www.turismofrigiliana.es/',
  officialFestival2026:
    'https://frigiliana.es/frigiliana-celebrara-una-nueva-edicion-del-festival-3-culturas-del-27-al-30-de-agosto-de-2026/',
  officialTrails:
    'https://www.turismofrigiliana.es/pdf/cuaderno_senderos_2013.pdf'
} as const;

export const frigilianaFaqSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-faq-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.faq'),
  languages: {
    en: {
      title: 'Frigiliana FAQ: Practical Answers for Your Visit',
      description:
        'Practical answers about reaching Frigiliana, parking, village streets, staying overnight, shops, events, weather, and hiking.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana FAQ: Antworten für euren Besuch',
      description:
        'Praktische Antworten zu Anreise, Parken, Dorfstruktur, Übernachten, Geschäften, Veranstaltungen, Wetter und Wandern in Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana FAQ: respuestas prácticas para la visita',
      description:
        'Respuestas prácticas sobre cómo llegar a Frigiliana, aparcar, recorrer sus calles, alojarse, comprar, asistir a eventos y hacer senderismo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana FAQ: antwoorden voor jullie bezoek',
      description:
        'Praktische antwoorden over reizen naar Frigiliana, parkeren, dorpsstraten, overnachten, winkels, evenementen, weer en wandelen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana FAQ: praktiska svar inför besöket',
      description:
        'Praktiska svar om resan till Frigiliana, parkering, byns gator, övernattning, butiker, evenemang, väder och vandring.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaFaqCopy = {
  nav: {
    brand: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
    links: [
      {
        token: 'location_frigiliana',
        label: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana')
      },
      {
        token: 'getting_to_frigiliana',
        label: l('Getting here', 'Anreise', 'Cómo llegar', 'Bereikbaarheid', 'Resa hit')
      },
      {
        token: 'frigiliana_faq',
        label: l('FAQ', 'FAQ', 'FAQ', 'FAQ', 'FAQ')
      }
    ]
  },
  hero: {
    eyebrow: l(
      'Frigiliana · FAQ',
      'Frigiliana · FAQ',
      'Frigiliana · FAQ',
      'Frigiliana · FAQ',
      'Frigiliana · FAQ'
    ),
    title: l(
      'Frigiliana, briefly answered',
      'Frigiliana, kurz beantwortet',
      'Frigiliana, en pocas palabras',
      'Frigiliana, kort beantwoord',
      'Frigiliana, kort besvarat'
    ),
    lead: l(
      'How to get here, where the car goes, how steep the lanes are and what a Thursday in the village brings: the questions guests ask us most often before their trip.',
      'Wie ihr herkommt, wo das Auto steht, wie steil die Gassen sind und was ein Donnerstag im Dorf mit sich bringt: die Fragen, die uns Gäste vor der Reise am häufigsten stellen.',
      'Cómo llegar, dónde dejar el coche, lo empinadas que son las calles y qué trae un jueves en el pueblo: las preguntas que más nos hacen los huéspedes antes del viaje.',
      'Hoe je hier komt, waar de auto staat, hoe steil de steegjes zijn en wat een donderdag in het dorp brengt: de vragen die gasten ons vóór de reis het vaakst stellen.',
      'Hur ni kommer hit, var bilen står, hur branta gränderna är och vad en torsdag i byn för med sig: frågorna gäster oftast ställer oss före resan.'
    ),
    body: l(
      'Whatever is missing here, we are happy to answer on WhatsApp.',
      'Was hier fehlt, beantworten wir gern per WhatsApp.',
      'Lo que falte aquí lo respondemos con gusto por WhatsApp.',
      'Wat hier ontbreekt, beantwoorden we graag via WhatsApp.',
      'Det som saknas här svarar vi gärna på via WhatsApp.'
    ),
    primaryCta: l(
      'Open the questions',
      'Fragen ansehen',
      'Ver las preguntas',
      'Bekijk de vragen',
      'Se frågorna'
    ),
    secondaryCta: l(
      'Getting here',
      'Zur Anreise',
      'Cómo llegar',
      'Naar de aankomst',
      'Resan hit'
    ),
  },
  orientation: {
    title: l(
      'Four things first',
      'Vier Dinge vorab',
      'Cuatro cosas de antemano',
      'Vier dingen vooraf',
      'Fyra saker först'
    ),
    items: [
      {
        label: l('Village shape', 'Dorfstruktur', 'Estructura', 'Dorpsstructuur', 'Bystruktur'),
        value: l('Lower & upper village', 'Unter- & Oberdorf', 'Zona baja y alta', 'Beneden- en bovendorp', 'Nedre och övre byn'),
        note: l(
          'The plaza below, the old lanes with their stairs above.',
          'Unten die Plaza, oben die alten Gassen mit ihren Treppen.',
          'Abajo la plaza, arriba las callejuelas antiguas con sus escaleras.',
          'Beneden het plein, boven de oude steegjes met hun trappen.',
          'Torget nedanför, de gamla gränderna med sina trappor ovanför.'
        )
      },
      {
        label: l('Coast connection', 'Verbindung zur Küste', 'Conexión con la costa', 'Verbinding met de kust', 'Förbindelse med kusten'),
        value: l('Via Nerja', 'Über Nerja', 'A través de Nerja', 'Via Nerja', 'Via Nerja'),
        note: l(
          'Bus and taxi to Nerja, a good quarter of an hour.',
          'Bus und Taxi nach Nerja, gut eine Viertelstunde.',
          'Autobús y taxi a Nerja, un cuarto de hora largo.',
          'Bus en taxi naar Nerja, ruim een kwartier.',
          'Buss och taxi till Nerja, en dryg kvart.'
        )
      },
      {
        label: l('Without a car', 'Ohne Auto', 'Sin coche', 'Zonder auto', 'Utan bil'),
        value: l('Works well', 'Geht gut', 'Sin problema', 'Gaat goed', 'Går bra'),
        note: l(
          'On Sundays and in the evening the bus runs less often; then the taxi helps.',
          'Sonntags und abends fährt der Bus seltener; dann hilft das Taxi.',
          'Los domingos y por la noche el autobús pasa menos; entonces el taxi ayuda.',
          'Op zondag en ’s avonds rijdt de bus minder vaak; dan helpt de taxi.',
          'På söndagar och kvällar går bussen mer sällan; då hjälper taxin.'
        )
      },
      {
        label: l('Pace', 'Tempo', 'Ritmo', 'Tempo', 'Tempo'),
        value: l('Slow', 'Langsam', 'Despacio', 'Langzaam', 'Långsamt'),
        note: l(
          'The village is built for slow days: park, walk up, arrive.',
          'Das Dorf ist für langsame Tage gebaut: parken, hochgehen, ankommen.',
          'El pueblo está hecho para días lentos: aparcar, subir, llegar.',
          'Het dorp is gebouwd voor langzame dagen: parkeren, omhoog lopen, aankomen.',
          'Byn är byggd för långsamma dagar: parkera, gå upp, komma fram.'
        )
      }
    ]
  },
  sections: [
    {
      id: 'arrival-mobility',
      number: '01',
      eyebrow: l('Getting there', 'Anreise', 'Cómo llegar', 'Bereikbaarheid', 'Resa hit'),
      title: l(
        'Arriving and parking',
        'Ankommen und parken',
        'Llegar y aparcar',
        'Aankomen en parkeren',
        'Komma fram och parkera'
      ),
      intro: l(
        'From Málaga airport it is a good hour. Whether you need a car depends on how often you want to leave the village.',
        'Vom Flughafen Málaga sind es gut eine Stunde. Ob ihr ein Auto braucht, hängt davon ab, wie oft ihr das Dorf verlassen wollt.',
        'Desde el aeropuerto de Málaga es una hora larga. Si necesitáis coche depende de cuántas veces queráis salir del pueblo.',
        'Vanaf de luchthaven van Málaga is het ruim een uur. Of jullie een auto nodig hebben, hangt ervan af hoe vaak jullie het dorp uit willen.',
        'Från Málagas flygplats är det en dryg timme. Om ni behöver bil beror på hur ofta ni vill lämna byn.'
      ),
      items: [
        {
          q: l(
            'How do I reach Frigiliana from Málaga Airport?',
            'Wie komme ich vom Flughafen Málaga nach Frigiliana?',
            '¿Cómo se llega a Frigiliana desde el aeropuerto de Málaga?',
            'Hoe kom ik van de luchthaven van Málaga naar Frigiliana?',
            'Hur tar jag mig från Málagas flygplats till Frigiliana?'
          ),
          a: l(
            'By car along the A-7 east and from Nerja the few kilometres up into the village, a good hour in normal traffic. Without a car you take the bus to Nerja and continue from there by local bus or taxi.',
            'Mit dem Auto über die A-7 nach Osten und ab Nerja die paar Kilometer hinauf ins Dorf, bei normalem Verkehr gut eine Stunde. Ohne Auto fahrt ihr mit dem Bus nach Nerja und von dort mit dem Ortsbus oder Taxi weiter.',
            'En coche por la A-7 hacia el este y desde Nerja los pocos kilómetros de subida hasta el pueblo, una hora larga con tráfico normal. Sin coche vais en autobús a Nerja y desde allí seguís en el autobús local o en taxi.',
            'Met de auto over de A-7 naar het oosten en vanaf Nerja de paar kilometer omhoog naar het dorp, ruim een uur bij normaal verkeer. Zonder auto neem je de bus naar Nerja en ga je van daar verder met de streekbus of de taxi.',
            'Med bil längs A-7 österut och från Nerja de få kilometrarna upp till byn, en dryg timme vid normal trafik. Utan bil tar ni bussen till Nerja och fortsätter därifrån med lokalbuss eller taxi.'
          )
        },
        {
          q: l(
            'Can I visit or stay in Frigiliana without a car?',
            'Kann ich Frigiliana ohne Auto besuchen oder dort übernachten?',
            '¿Se puede visitar Frigiliana o alojarse allí sin coche?',
            'Kan ik Frigiliana zonder auto bezoeken of er verblijven?',
            'Kan jag besöka eller bo i Frigiliana utan bil?'
          ),
          a: l(
            'Yes. In the village you are on foot; bus and taxi run to Nerja. A car is worth it for beach days, hikes further out and late arrivals.',
            'Ja. Im Dorf seid ihr zu Fuß unterwegs, nach Nerja fahren Bus und Taxi. Ein Auto lohnt sich für Strandtage, Wanderungen weiter draußen und späte Ankünfte.',
            'Sí. En el pueblo vais a pie; a Nerja hay autobús y taxi. El coche merece la pena para días de playa, rutas más lejanas y llegadas tardías.',
            'Ja. In het dorp ben je te voet; naar Nerja rijden bus en taxi. Een auto loont voor stranddagen, wandelingen verder weg en late aankomsten.',
            'Ja. I byn går ni till fots; till Nerja går buss och taxi. En bil lönar sig för stranddagar, vandringar längre bort och sena ankomster.'
          )
        },
        {
          q: l(
            'Where is the most practical place to park?',
            'Wo parke ich am praktischsten?',
            '¿Dónde resulta más práctico aparcar?',
            'Waar kan ik het handigst parkeren?',
            'Var parkerar jag enklast?'
          ),
          a: l(
            'In the underground car park at Plaza de las Tres Culturas, down in the village. From there you walk up; no car fits into the lanes of the old town.',
            'In der Tiefgarage an der Plaza de las Tres Culturas, unten im Ort. Von dort geht ihr zu Fuß hinauf; in die Gassen der Altstadt passt kein Auto.',
            'En el parking subterráneo de la Plaza de las Tres Culturas, en la parte baja del pueblo. Desde allí se sube a pie; en las callejuelas del casco antiguo no cabe un coche.',
            'In de parkeergarage aan Plaza de las Tres Culturas, beneden in het dorp. Van daar loop je omhoog; in de steegjes van de oude kern past geen auto.',
            'I parkeringshuset vid Plaza de las Tres Culturas, nere i byn. Därifrån går ni upp till fots; i gamla byns gränder får ingen bil plats.'
          )
        },
        {
          q: l(
            'Is there Uber or fixed taxi prices?',
            'Gibt es Uber oder feste Taxipreise?',
            '¿Hay Uber o precios fijos de taxi?',
            'Is er Uber of zijn er vaste taxiprijzen?',
            'Finns det Uber eller fasta taxipriser?'
          ),
          a: l(
            'Ride-hailing apps barely work here. Taxis from Nerja and Frigiliana run on the meter; for the airport it is best to book a fixed-price transfer.',
            'Fahrdienst-Apps funktionieren hier kaum. Taxis fahren ab Nerja und Frigiliana nach Taxameter; für den Flughafen bucht ihr am besten einen Transfer zum Festpreis.',
            'Las apps de transporte apenas funcionan aquí. Los taxis desde Nerja y Frigiliana van con taxímetro; para el aeropuerto lo mejor es reservar un traslado a precio fijo.',
            'Ride-hailing-apps werken hier nauwelijks. Taxi’s vanaf Nerja en Frigiliana rijden op de meter; voor de luchthaven boek je het best een transfer met vaste prijs.',
            'Samåkningsappar fungerar knappt här. Taxi från Nerja och Frigiliana går på taxameter; till flygplatsen bokar ni helst en transfer med fast pris.'
          )
        }
      ]
    },
    {
      id: 'village-stay',
      number: '02',
      eyebrow: l('Staying overnight', 'Übernachten', 'Alojarse', 'Overnachten', 'Övernatta'),
      title: l(
        'Living above or below',
        'Oben oder unten wohnen',
        'Vivir arriba o abajo',
        'Boven of beneden wonen',
        'Bo uppe eller nere'
      ),
      intro: l(
        'Frigiliana clings to the hillside. Exactly where your accommodation lies decides stairs, view and quiet.',
        'Frigiliana hängt am Hang. Wo genau eure Unterkunft liegt, entscheidet über Treppen, Aussicht und Ruhe.',
        'Frigiliana cuelga de la ladera. Dónde esté exactamente vuestro alojamiento decide escaleras, vistas y tranquilidad.',
        'Frigiliana hangt tegen de helling. Waar precies jullie accommodatie ligt, bepaalt trappen, uitzicht en rust.',
        'Frigiliana hänger på sluttningen. Exakt var ert boende ligger avgör trappor, utsikt och lugn.'
      ),
      items: [
        {
          q: l(
            'Is Frigiliana suitable for travellers with limited mobility?',
            'Ist Frigiliana für Reisende mit eingeschränkter Mobilität geeignet?',
            '¿Es Frigiliana adecuada para personas con movilidad reducida?',
            'Is Frigiliana geschikt voor reizigers met beperkte mobiliteit?',
            'Passar Frigiliana resenärer med begränsad rörlighet?'
          ),
          a: l(
            'The lower village is level; the old town above it is stairs and narrow lanes. To Casa AMARA it is a few minutes on foot from the car park, with steps; if unsure, ask us for the exact route beforehand.',
            'Der untere Ort ist eben, die Altstadt darüber besteht aus Treppen und schmalen Gassen. Zu Casa AMARA sind es vom Parkhaus wenige Minuten zu Fuß, mit Stufen; wer unsicher ist, fragt uns vorher nach dem genauen Weg.',
            'La parte baja del pueblo es llana; el casco antiguo de arriba son escaleras y callejuelas estrechas. Hasta Casa AMARA son unos minutos a pie desde el parking, con escalones; si tenéis dudas, preguntadnos antes por el camino exacto.',
            'Het lagere dorp is vlak, de oude kern erboven bestaat uit trappen en smalle steegjes. Naar Casa AMARA is het vanaf de parkeergarage een paar minuten lopen, met treden; wie twijfelt, vraagt ons vooraf naar de exacte route.',
            'Nedre byn är plan, gamla byn ovanför består av trappor och smala gränder. Till Casa AMARA är det några minuter till fots från parkeringshuset, med trappsteg; är ni osäkra, fråga oss om den exakta vägen i förväg.'
          )
        },
        {
          q: l(
            'Is Frigiliana better as a day trip or an overnight stay?',
            'Eignet sich Frigiliana besser als Tagesausflug oder zum Übernachten?',
            '¿Es mejor visitar Frigiliana en el día o quedarse a dormir?',
            'Is Frigiliana beter als dagtrip of voor een overnachting?',
            'Är Frigiliana bäst som dagsutflykt eller med övernattning?'
          ),
          a: l(
            'Day visitors arrive around eleven and leave before dinner. After that the lanes belong to those who sleep here: the evening on the terrace, the morning before the first buses.',
            'Tagesgäste kommen gegen elf und fahren vor dem Abendessen. Danach gehören die Gassen denen, die hier schlafen: der Abend auf der Terrasse, der Morgen vor den ersten Bussen.',
            'Los visitantes de día llegan hacia las once y se van antes de cenar. Después las callejuelas son de quienes duermen aquí: la noche en la terraza, la mañana antes de los primeros autobuses.',
            'Dagjesmensen komen rond elf uur en vertrekken voor het diner. Daarna zijn de steegjes van wie hier slaapt: de avond op het terras, de ochtend voor de eerste bussen.',
            'Dagsbesökarna kommer runt elva och åker före middagen. Sedan tillhör gränderna dem som sover här: kvällen på terrassen, morgonen före de första bussarna.'
          )
        },
        {
          q: l(
            'Frigiliana or Nerja: where should I stay?',
            'Frigiliana oder Nerja: Wo solltet ihr übernachten?',
            'Frigiliana o Nerja: ¿dónde conviene alojarse?',
            'Frigiliana of Nerja: waar kunnen jullie het beste verblijven?',
            'Frigiliana eller Nerja: var passar det bäst att bo?'
          ),
          a: l(
            'Frigiliana for the lanes, the view and the still evenings. Nerja if you want the sea every day and need flat walks. A quarter of an hour lies between them, and we have houses in both places.',
            'Frigiliana für die Gassen, den Blick und die stillen Abende. Nerja, wenn ihr jeden Tag ans Meer wollt und flache Wege braucht. Zwischen beiden liegt eine Viertelstunde, und wir haben Häuser in beiden Orten.',
            'Frigiliana por las callejuelas, las vistas y las noches tranquilas. Nerja si queréis el mar cada día y necesitáis caminos llanos. Entre los dos hay un cuarto de hora, y tenemos casas en ambos.',
            'Frigiliana voor de steegjes, het uitzicht en de stille avonden. Nerja als jullie elke dag naar zee willen en vlakke wegen nodig hebben. Er ligt een kwartier tussen, en we hebben huizen op beide plekken.',
            'Frigiliana för gränderna, utsikten och de stilla kvällarna. Nerja om ni vill ha havet varje dag och behöver plana vägar. Det är en kvart emellan, och vi har hus på båda platserna.'
          ),
          linkToken: 'nerja_vs_frigiliana',
          linkLabel: l(
            'Frigiliana or Nerja compared',
            'Frigiliana oder Nerja im Vergleich',
            'Frigiliana o Nerja, comparados',
            'Frigiliana of Nerja vergeleken',
            'Frigiliana eller Nerja i jämförelse'
          )
        }
      ]
    },
    {
      id: 'daily-life',
      number: '03',
      eyebrow: l('In the village', 'Im Dorf', 'En el pueblo', 'In het dorp', 'I byn'),
      title: l(
        'Everyday life in the village',
        'Der Alltag im Dorf',
        'El día a día en el pueblo',
        'Het dagelijks leven in het dorp',
        'Vardagen i byn'
      ),
      intro: l(
        'A village of around three thousand inhabitants, a weekly market and a festival for which the lanes turn colourful for four days at the end of August.',
        'Ein Dorf mit rund dreitausend Einwohnern, einem Wochenmarkt und einem Fest, für das die Gassen Ende August vier Tage lang bunt werden.',
        'Un pueblo de unos tres mil habitantes, un mercado semanal y una fiesta para la que las callejuelas se llenan de color cuatro días a finales de agosto.',
        'Een dorp van ongeveer drieduizend inwoners, een weekmarkt en een feest waarvoor de steegjes eind augustus vier dagen lang kleurrijk worden.',
        'En by med omkring tretusen invånare, en veckomarknad och en fest då gränderna blir färgglada i fyra dagar i slutet av augusti.'
      ),
      items: [
        {
          q: l(
            'Are shops and restaurants open on Sundays?',
            'Sind Geschäfte und Restaurants sonntags geöffnet?',
            '¿Abren las tiendas y los restaurantes los domingos?',
            'Zijn winkels en restaurants op zondag open?',
            'Är butiker och restauranger öppna på söndagar?'
          ),
          a: l(
            'The restaurants and the shops on the main lane, yes. Supermarkets and the pharmacy have short opening hours on Sundays.',
            'Die Restaurants und die Läden an der Hauptgasse ja. Supermärkte und Apotheke haben sonntags kurze Öffnungszeiten.',
            'Los restaurantes y las tiendas de la calle principal, sí. Supermercados y farmacia tienen horario reducido los domingos.',
            'De restaurants en de winkels in de hoofdstraat wel. Supermarkten en de apotheek hebben op zondag korte openingstijden.',
            'Restaurangerna och butikerna på huvudgatan ja. Mataffärer och apotek har korta öppettider på söndagar.'
          )
        },
        {
          q: l(
            'When is the weekly market?',
            'Wann findet der Wochenmarkt statt?',
            '¿Cuándo se celebra el mercado semanal?',
            'Wanneer is de wekelijkse markt?',
            'När är veckomarknaden?'
          ),
          a: l(
            'Thursday morning, down at Plaza de las Tres Culturas. In holiday weeks the date can shift.',
            'Donnerstagvormittag, unten an der Plaza de las Tres Culturas. In Feiertagswochen kann der Termin wandern.',
            'Los jueves por la mañana, abajo en la Plaza de las Tres Culturas. En semanas festivas la fecha puede moverse.',
            'Donderdagochtend, beneden aan Plaza de las Tres Culturas. In feestweken kan de datum verschuiven.',
            'Torsdag förmiddag, nere vid Plaza de las Tres Culturas. Under helgveckor kan datumet flytta sig.'
          )
        },
        {
          q: l(
            'Which local foods are associated with Frigiliana?',
            'Welche lokalen Speisen verbindet man mit Frigiliana?',
            '¿Qué productos y platos se asocian con Frigiliana?',
            'Welke lokale producten en gerechten horen bij Frigiliana?',
            'Vilka lokala råvaror och rätter förknippas med Frigiliana?'
          ),
          a: l(
            'Miel de caña, the dark sugar-cane syrup from the factory down in the village, over fried aubergine. Traditional menus also have migas and goat dishes.',
            'Miel de caña, der dunkle Zuckerrohrsirup aus der Fabrik unten im Ort, über frittierte Auberginen. Auf traditionellen Karten stehen dazu Migas und Ziegengerichte.',
            'Miel de caña, el sirope oscuro de caña de azúcar de la fábrica de abajo del pueblo, sobre berenjenas fritas. En las cartas tradicionales hay además migas y platos de chivo.',
            'Miel de caña, de donkere suikerrietsiroop uit de fabriek beneden in het dorp, over gefrituurde aubergine. Op traditionele kaarten staan daarnaast migas en geitengerechten.',
            'Miel de caña, den mörka sockerrörssirapen från fabriken nere i byn, över friterad aubergine. På traditionella menyer finns dessutom migas och geträtter.'
          )
        },
        {
          q: l(
            'When is the Festival of Three Cultures?',
            'Wann findet das Festival der drei Kulturen statt?',
            '¿Cuándo se celebra el Festival de las Tres Culturas?',
            'Wanneer is het Festival van de Drie Culturen?',
            'När hålls Festivalen för de tre kulturerna?'
          ),
          a: l(
            'End of August, four days long. In 2026 from 27 to 30 August: music in the lanes, stalls, the whole village on its feet.',
            'Ende August, vier Tage lang. 2026 vom 27. bis 30. August: Musik in den Gassen, Stände, das ganze Dorf auf den Beinen.',
            'A finales de agosto, cuatro días. En 2026 del 27 al 30 de agosto: música en las calles, puestos, todo el pueblo en la calle.',
            'Eind augustus, vier dagen lang. In 2026 van 27 tot 30 augustus: muziek in de steegjes, kraampjes, het hele dorp op de been.',
            'I slutet av augusti, fyra dagar. 2026 den 27 till 30 augusti: musik i gränderna, stånd, hela byn på fötter.'
          )
        }
      ]
    },
    {
      id: 'weather-outdoors',
      number: '04',
      eyebrow: l('Outside', 'Draußen', 'Al aire libre', 'Buiten', 'Utomhus'),
      title: l(
        'Weather and trails',
        'Wetter und Wege',
        'Tiempo y caminos',
        'Weer en wegen',
        'Väder och vägar'
      ),
      intro: l(
        'Behind the village begins the natural park of the Sierras de Tejeda, Almijara y Alhama. The trails start at the last row of houses.',
        'Hinter dem Dorf beginnt der Naturpark der Sierras de Tejeda, Almijara y Alhama. Die Wege fangen an der letzten Häuserreihe an.',
        'Detrás del pueblo empieza el parque natural de las Sierras de Tejeda, Almijara y Alhama. Los senderos arrancan en la última fila de casas.',
        'Achter het dorp begint het natuurpark van de Sierras de Tejeda, Almijara y Alhama. De paden beginnen bij de laatste huizenrij.',
        'Bakom byn börjar naturparken Sierras de Tejeda, Almijara y Alhama. Lederna börjar vid den sista husraden.'
      ),
      items: [
        {
          q: l(
            'What is the weather like through the year?',
            'Wie ist das Wetter im Jahresverlauf?',
            '¿Cómo es el tiempo a lo largo del año?',
            'Hoe is het weer door het jaar heen?',
            'Hur är vädret under året?'
          ),
          a: l(
            'Summer is hot and dry; the village then lives early in the morning and after six. Winter is mild in the sun, cool in the shade of the lanes. Spring and autumn are hiking time.',
            'Der Sommer ist heiß und trocken; das Dorf lebt dann früh am Morgen und nach sechs. Der Winter ist mild in der Sonne, kühl im Schatten der Gassen. Frühling und Herbst sind die Wanderzeit.',
            'El verano es caluroso y seco; el pueblo vive entonces a primera hora y después de las seis. El invierno es suave al sol, fresco a la sombra de las callejuelas. Primavera y otoño son la época de senderismo.',
            'De zomer is heet en droog; het dorp leeft dan vroeg in de ochtend en na zessen. De winter is mild in de zon, koel in de schaduw van de steegjes. Lente en herfst zijn wandeltijd.',
            'Sommaren är het och torr; byn lever då tidigt på morgonen och efter sex. Vintern är mild i solen, sval i grändernas skugga. Vår och höst är vandringstid.'
          )
        },
        {
          q: l(
            'Which walks start near the village?',
            'Welche Wanderungen beginnen nahe dem Dorf?',
            '¿Qué rutas empiezan cerca del pueblo?',
            'Welke wandelingen beginnen bij het dorp?',
            'Vilka vandringar börjar nära byn?'
          ),
          a: l(
            'The path up El Fuerte above the village and the trail to the rebuilt village of El Acebuchal are the best known. Both are mountain trails with elevation: sturdy shoes, water, an early start.',
            'Der Weg auf den El Fuerte über dem Dorf und der Pfad ins wieder aufgebaute Dorf El Acebuchal sind die bekanntesten. Beides sind Bergwege mit Höhenmetern: feste Schuhe, Wasser, früh los.',
            'El camino a El Fuerte, sobre el pueblo, y el sendero al pueblo reconstruido de El Acebuchal son los más conocidos. Ambos son rutas de montaña con desnivel: calzado firme, agua, salir temprano.',
            'De weg omhoog naar El Fuerte boven het dorp en het pad naar het herbouwde dorp El Acebuchal zijn de bekendste. Beide zijn bergpaden met hoogtemeters: stevige schoenen, water, vroeg weg.',
            'Vägen upp till El Fuerte ovanför byn och stigen till den återuppbyggda byn El Acebuchal är de mest kända. Båda är bergsleder med höjdmeter: stadiga skor, vatten, tidig start.'
          )
        },
        {
          q: l(
            'Is Frigiliana safe?',
            'Ist Frigiliana sicher?',
            '¿Es Frigiliana segura?',
            'Is Frigiliana veilig?',
            'Är Frigiliana säkert?'
          ),
          a: l(
            'Yes, a village where the neighbours sit outside their doors in the evening. What needs attention are the slippery steps after rain and the midday sun.',
            'Ja, ein Dorf, in dem die Nachbarn abends vor der Tür sitzen. Aufmerksamkeit brauchen die glatten Stufen nach Regen und die Sonne am Mittag.',
            'Sí, un pueblo donde los vecinos se sientan a la puerta por la noche. Lo que pide atención son los escalones resbaladizos después de la lluvia y el sol del mediodía.',
            'Ja, een dorp waar de buren ’s avonds voor hun deur zitten. Aandacht vragen de gladde treden na regen en de middagzon.',
            'Ja, en by där grannarna sitter utanför sina dörrar på kvällen. Det som kräver uppmärksamhet är de hala trappstegen efter regn och middagssolen.'
          )
        }
      ]
    }
  ],
  liveInfo: {
    eyebrow: l(
      'Explore further',
      'Mehr erfahren',
      'Explorar más',
      'Meer ontdekken',
      'Utforska mer'
    ),
    title: l(
      'Links to look into it yourself',
      'Weiterführende Links',
      'Enlaces para saber más',
      'Links om zelf verder te kijken',
      'Länkar för att läsa vidare'
    ),
    intro: l(
      'Timetables, festival dates and hiking trails at the source.',
      'Fahrpläne, Festivaltermin und Wanderwege im Original.',
      'Horarios, fechas del festival y senderos en la fuente original.',
      'Dienstregelingen, festivaldata en wandelpaden bij de bron.',
      'Tidtabeller, festivaldatum och vandringsleder i original.'
    ),
    checked: l(
      'As of July 2026',
      'Stand Juli 2026',
      'Actualizado en julio de 2026',
      'Stand juli 2026',
      'Uppdaterad juli 2026'
    ),
    links: [
      {
        key: 'officialBusSchedule',
        label: l(
          'Official Nerja–Frigiliana bus timetable',
          'Offizieller Busfahrplan Nerja–Frigiliana',
          'Horario oficial del autobús Nerja–Frigiliana',
          'Officiële dienstregeling Nerja–Frigiliana',
          'Officiell busstidtabell Nerja–Frigiliana'
        ),
        text: l(
          'Local bus Nerja–Frigiliana, all days.',
          'Ortsbus Nerja–Frigiliana, alle Tage.',
          'Autobús local Nerja–Frigiliana, todos los días.',
          'Streekbus Nerja–Frigiliana, alle dagen.',
          'Lokalbuss Nerja–Frigiliana, alla dagar.'
        )
      },
      {
        key: 'officialTourism',
        label: l(
          'Official Frigiliana tourism information',
          'Offizielle Tourismusinformation Frigiliana',
          'Información turística oficial de Frigiliana',
          'Officiële toeristische informatie van Frigiliana',
          'Officiell turistinformation för Frigiliana'
        ),
        text: l(
          'Maps, opening hours, contacts.',
          'Karten, Öffnungszeiten, Kontakte.',
          'Mapas, horarios, contactos.',
          'Kaarten, openingstijden, contacten.',
          'Kartor, öppettider, kontakter.'
        )
      },
      {
        key: 'officialFestival2026',
        label: l(
          'Official 2026 festival announcement',
          'Offizielle Festivalankündigung 2026',
          'Anuncio oficial del festival de 2026',
          'Officiële festivalaankondiging 2026',
          'Officiellt festivalbesked 2026'
        ),
        text: l(
          'Dates and programme 2026.',
          'Termin und Programm 2026.',
          'Fechas y programa 2026.',
          'Datum en programma 2026.',
          'Datum och program 2026.'
        )
      },
      {
        key: 'officialTrails',
        label: l(
          'Official Frigiliana trail guide',
          'Offizieller Wanderführer Frigiliana',
          'Guía oficial de senderos de Frigiliana',
          'Officiële wandelgids van Frigiliana',
          'Officiell vandringsguide för Frigiliana'
        ),
        text: l(
          'The trails around the village, with a map.',
          'Die Wege rund um das Dorf, mit Karte.',
          'Los senderos alrededor del pueblo, con mapa.',
          'De paden rond het dorp, met kaart.',
          'Lederna runt byn, med karta.'
        )
      }
    ]
  },
  related: {
    title: l('Continue planning', 'Weiter planen', 'Seguid planificando', 'Plan verder', 'Fortsätt planera'),
    links: [
      {
        token: 'getting_to_frigiliana',
        label: l('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Resa till Frigiliana')
      },
      {
        token: 'frigiliana_parking',
        label: l('Parking guide', 'Parkguide', 'Guía de aparcamiento', 'Parkeergids', 'Parkeringsguide')
      },
      {
        token: 'frigiliana_stairs',
        label: l('Where to stay in Frigiliana', 'Wo in Frigiliana übernachten?', 'Dónde alojarse en Frigiliana', 'Waar overnachten in Frigiliana?', 'Var ska man bo i Frigiliana?')
      },
      {
        token: 'frigiliana_market',
        label: l('Weekly market', 'Wochenmarkt', 'Mercado semanal', 'Weekmarkt', 'Veckomarknad')
      },
      {
        token: 'weather_frigiliana',
        label: l('Weather guide', 'Wetterguide', 'Guía del tiempo', 'Weergids', 'Väderguide')
      },
      {
        token: 'faq_general',
        label: l('AMARA stay FAQ', 'AMARA Aufenthalts-FAQ', 'FAQ de estancias AMARA', 'AMARA verblijfs-FAQ', 'AMARA boende-FAQ')
      }
    ]
  },
  closing: {
    title: l(
      'The rest falls into place in the village.',
      'Der Rest ergibt sich im Dorf.',
      'El resto surge en el pueblo.',
      'De rest komt vanzelf in het dorp.',
      'Resten ger sig i byn.'
    ),
    lead: l(
      'Casa AMARA stands in the middle of the old town, with a terrace above the rooftops. We describe the way from the car park to the front door before you arrive.',
      'Casa AMARA steht mitten in der Altstadt, mit Terrasse über den Dächern. Den Weg vom Parkhaus zur Haustür beschreiben wir euch vor der Anreise.',
      'Casa AMARA está en pleno casco antiguo, con terraza sobre los tejados. Os describimos el camino del parking a la puerta antes de llegar.',
      'Casa AMARA staat midden in de oude kern, met een terras boven de daken. De weg van de parkeergarage naar de voordeur beschrijven we jullie vóór de aankomst.',
      'Casa AMARA står mitt i gamla byn, med terrass över taken. Vägen från parkeringshuset till ytterdörren beskriver vi för er före ankomsten.'
    ),
    guideCta: l(
      'Explore Frigiliana',
      'Frigiliana entdecken',
      'Descubrir Frigiliana',
      'Ontdek Frigiliana',
      'Upptäck Frigiliana'
    ),
    stayCta: l(
      'View stays',
      'Unterkünfte ansehen',
      'Ver alojamientos',
      'Accommodaties bekijken',
      'Se boenden'
    )
  }
} as const;
