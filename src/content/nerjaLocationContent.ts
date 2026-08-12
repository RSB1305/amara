import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type Localized<T> = Record<AmaraLanguage, T>;

const localized = <T>(en: T, de: T, es: T, nl: T, sv: T): Localized<T> => ({
  en,
  de,
  es,
  nl,
  sv
});

export const nerjaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-08-12-nerja-location-v2.1',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Where to Stay in Nerja: Areas, Walkability & Parking | AMARA',
      description:
        'Where to stay in Nerja, from the old town and Torrecilla to Burriana and the residential hills — with honest guidance on walking, beach access, parking and when a car helps.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo in Nerja übernachten? Lagen, Wege & Parken | AMARA',
      description:
        'Wo in Nerja übernachten? Altstadt, Torrecilla, Burriana und die Wohnviertel am Hang — mit ehrlichen Hinweisen zu Fußwegen, Strandzugang, Parken und Auto.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde alojarse en Nerja: zonas, cuestas y aparcamiento | AMARA',
      description:
        'Dónde alojarse en Nerja: casco antiguo, Torrecilla, Burriana y las zonas residenciales, con información clara sobre recorridos a pie, playa, aparcamiento y coche.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar overnachten in Nerja? Buurten, lopen & parkeren | AMARA',
      description:
        'Waar overnachten in Nerja? Van het oude centrum en Torrecilla tot Burriana en de heuvelwijken, met eerlijk advies over lopen, strandroutes, parkeren en autogebruik.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ska man bo i Nerja? Områden, backar & parkering | AMARA',
      description:
        'Var ska man bo i Nerja? Från gamla stan och Torrecilla till Burriana och bostadsområdena på höjden, med tydliga råd om promenader, strandvägar, parkering och bil.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaLocationCopy = {
  nav: {
    brand: localized('Nerja', 'Nerja', 'Nerja', 'Nerja', 'Nerja')
  },
  hero: {
    eyebrow: localized(
      'Nerja · Where to stay',
      'Nerja · Wo übernachten?',
      'Nerja · Dónde alojarse',
      'Nerja · Waar overnachten?',
      'Nerja · Var ska man bo?'
    ),
    h1: localized(
      'Where to Stay in Nerja',
      'Wo in Nerja übernachten?',
      'Dónde alojarse en Nerja',
      'Waar overnachten in Nerja?',
      'Var ska man bo i Nerja?'
    ),
    body: localized(
      'Where you stay in Nerja makes a real difference.\n\nSome parts of town put the beach, restaurants and everyday errands within an easy walk. In others, hills, steps or parking become part of the daily routine. This guide helps you understand those differences before you choose your base.',
      'Wo ihr in Nerja wohnt, macht im Urlaub einen spürbaren Unterschied.\n\nIn manchen Vierteln erreicht ihr Strand, Restaurants und alles für den Alltag bequem zu Fuß. Anderswo gehören Steigungen, Treppen oder die Parkplatzsuche automatisch zum Tagesablauf. Dieser Guide zeigt euch die Unterschiede, bevor ihr euch für eine Lage entscheidet.',
      'La zona de Nerja que elijáis cambia bastante la experiencia.\n\nEn algunos barrios podéis ir andando con facilidad a la playa, a los restaurantes y a las tiendas del día a día. En otros, las cuestas, las escaleras o el aparcamiento condicionan más los planes. Esta guía os ayuda a entender esas diferencias antes de decidir dónde alojaros.',
      'Waar je in Nerja verblijft, bepaalt voor een groot deel hoe je vakantie eruitziet.\n\nIn sommige buurten loop je zo naar het strand, restaurants en winkels. Elders horen heuvels, trappen of zoeken naar een parkeerplek bij de dag. Met deze gids kun je de verschillen afwegen voordat je een buurt kiest.',
      'Var ni bor i Nerja påverkar semestern mer än man först kan tro.\n\nI vissa områden är det enkelt att promenera till stranden, restaurangerna och vardagens ärenden. På andra håll blir backar, trappor eller parkering en del av planeringen. Här får ni hjälp att förstå skillnaderna innan ni väljer område.'
    ),
    ctaMain: localized(
      'Explore the areas',
      'Die Wohnlagen ansehen',
      'Ver las zonas',
      'Bekijk de buurten',
      'Se områdena'
    ),
    ctaAlt: localized(
      'Nerja & Frigiliana',
      'Nerja & Frigiliana',
      'Nerja y Frigiliana',
      'Nerja & Frigiliana',
      'Nerja & Frigiliana'
    ),
    imageAlt: localized(
      'Aerial view showing central Nerja, its beaches and the coastal topography',
      'Luftaufnahme von Zentral-Nerja, den Stränden und den Höhenunterschieden an der Küste',
      'Vista aérea del centro de Nerja, sus playas y el relieve de la costa',
      'Luchtfoto van centraal Nerja, de stranden en het hoogteverschil langs de kust',
      'Flygvy över centrala Nerja, stränderna och kustens nivåskillnader'
    )
  },
  essence: {
    eyebrow: localized('At a glance', 'Auf einen Blick', 'A primera vista', 'In één oogopslag', 'I korthet'),
    title: localized(
      'Four things to know before choosing where to stay',
      'Vier Dinge, die ihr vor der Wahl eurer Wohnlage wissen solltet',
      'Cuatro cosas que conviene saber antes de elegir zona',
      'Vier dingen om te weten voordat je een buurt kiest',
      'Fyra saker att tänka på innan ni väljer område'
    ),
    intro: localized(
      'A place can look close on the map and still feel very different once you start walking it every day. In Nerja, four things matter most: the centre, the coast, the hills and whether you want to rely on a car.',
      'Auf der Karte kann ein Ziel ganz nah wirken und sich im Urlaubsalltag trotzdem anders anfühlen. In Nerja kommt es vor allem auf vier Dinge an: Zentrum, Küste, Höhenunterschiede und die Frage, ob ihr auf ein Auto angewiesen sein möchtet.',
      'Un lugar puede parecer cercano en el mapa y sentirse muy distinto cuando hacéis el recorrido cada día. En Nerja conviene fijarse sobre todo en cuatro cosas: el centro, la costa, las cuestas y cuánto queréis depender del coche.',
      'Op de kaart kan iets dichtbij lijken, terwijl de dagelijkse wandeling heel anders aanvoelt. In Nerja zijn vooral vier dingen belangrijk: het centrum, de kust, de hoogteverschillen en de vraag of je op een auto wilt leunen.',
      'En plats kan se nära ut på kartan men kännas helt annorlunda när ni går sträckan varje dag. I Nerja är fyra saker särskilt viktiga: centrum, kusten, backarna och hur beroende ni vill vara av bil.'
    ),
    items: [
      {
        kicker: localized('Centre', 'Zentrum', 'Centro', 'Centrum', 'Centrum'),
        headline: localized(
          'Much of central Nerja works well on foot',
          'Vieles im Zentrum von Nerja lässt sich gut zu Fuß erledigen',
          'Buena parte del centro de Nerja se disfruta a pie',
          'In een groot deel van het centrum kun je prima lopen',
          'Stora delar av centrala Nerja fungerar bra till fots'
        ),
        text: localized(
          'Stay around the old town or west-central Nerja and restaurants, shops and evening walks can easily become part of your day without taking the car.',
          'Rund um die Altstadt und im westlichen Zentrum erreicht ihr Restaurants, Geschäfte und die abendliche Runde meist bequem, ohne das Auto zu nehmen.',
          'Si os alojáis en el casco antiguo o en el centro-oeste, podéis integrar restaurantes, compras y paseos al atardecer en el día sin coger el coche.',
          'Rond het oude centrum en in west-centraal Nerja liggen restaurants, winkels en een avondwandeling vaak op loopafstand, zonder dat de auto nodig is.',
          'Kring gamla stan och i de västra delarna av centrum kan restauranger, butiker och kvällspromenader bli en naturlig del av dagen utan bil.'
        ),
        imageSrc: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
      },
      {
        kicker: localized('Coast', 'Küste', 'Costa', 'Kust', 'Kust'),
        headline: localized(
          'Not every beach connects to town in the same way',
          'Nicht jeder Strand ist gleich gut mit dem Ort verbunden',
          'No todas las playas se relacionan igual con el centro',
          'Niet elk strand sluit op dezelfde manier aan op het centrum',
          'Alla stränder hänger inte ihop med centrum på samma sätt'
        ),
        text: localized(
          'Torrecilla, the small beaches below the old town and Burriana all offer a different relationship between the sea and the centre. The beach you choose can change how the rest of your day works.',
          'Torrecilla, die kleinen Strände unterhalb der Altstadt und Burriana liegen jeweils anders zum Zentrum. Für welchen Strand ihr euch entscheidet, beeinflusst deshalb auch den Rest des Tages.',
          'Torrecilla, las pequeñas playas bajo el casco antiguo y Burriana conectan el mar y el centro de formas diferentes. La playa que tengáis cerca influye en cómo encaja el resto del día.',
          'Torrecilla, de kleine stranden onder het oude centrum en Burriana liggen elk anders ten opzichte van de stad. Welk strand dichtbij is, heeft daardoor invloed op de rest van de dag.',
          'Torrecilla, de små stränderna nedanför gamla stan och Burriana har alla olika förhållande till centrum. Vilken strand ni bor nära påverkar därför resten av dagen.'
        )
      },
      {
        kicker: localized('Topography', 'Höhenunterschiede', 'Relieve', 'Hoogteverschil', 'Nivåskillnader'),
        headline: localized(
          'Nerja is not completely flat',
          'Nerja ist nicht überall flach',
          'Nerja no es completamente llana',
          'Nerja is niet overal vlak',
          'Nerja är inte helt platt'
        ),
        text: localized(
          'Cliffs, steps, slopes and hillside neighbourhoods mean that two places with a similar distance on the map can feel very different on foot.',
          'Klippen, Treppen, Steigungen und Viertel am Hang sorgen dafür, dass zwei ähnlich weit entfernte Ziele zu Fuß ganz unterschiedlich wirken können.',
          'Los acantilados, las escaleras, las cuestas y los barrios en ladera hacen que dos lugares a una distancia parecida en el mapa puedan sentirse muy distintos al recorrerlos a pie.',
          'Door kliffen, trappen, hellingen en buurten tegen de heuvel kan een vergelijkbare afstand op de kaart te voet heel anders uitpakken.',
          'Klippor, trappor, backar och bostadsområden på höjden gör att två sträckor som ser lika långa ut på kartan kan kännas mycket olika till fots.'
        )
      },
      {
        kicker: localized('Mobility', 'Mobilität', 'Mobilidad', 'Vervoer', 'Transport'),
        headline: localized(
          'A car can be useful — but you may not need one',
          'Ein Auto kann nützlich sein – nötig ist es nicht immer',
          'El coche puede venir bien, pero quizá no lo necesitéis',
          'Een auto kan handig zijn, maar is niet altijd nodig',
          'En bil kan vara praktisk – men behövs inte alltid'
        ),
        text: localized(
          'A central stay can work very well without a car. Further out, or if you plan to explore the wider region regularly, having one gives you much more flexibility.',
          'Bei einer zentralen Unterkunft kommt ihr sehr gut ohne Auto aus. In den äußeren Vierteln oder für regelmäßige Ausflüge in die Umgebung verschafft es euch deutlich mehr Freiheit.',
          'Si os alojáis en una zona céntrica, podéis moveros muy bien sin coche. En los barrios más alejados o si queréis recorrer la comarca con frecuencia, tenerlo os dará mucha más libertad.',
          'Wie centraal verblijft, kan heel goed zonder auto. In de buitenwijken, of als je vaak de omgeving wilt verkennen, geeft een auto veel meer vrijheid.',
          'Bor ni centralt går det ofta utmärkt utan bil. Längre från centrum, eller om ni vill göra många utflykter i trakten, ger bilen betydligt större frihet.'
        )
      }
    ]
  },
  areas: {
    eyebrow: localized(
      'Where to stay in Nerja',
      'Wo in Nerja übernachten?',
      'Dónde alojarse en Nerja',
      'Waar overnachten in Nerja?',
      'Var ska man bo i Nerja?'
    ),
    title: localized(
      'Five different ways to stay in Nerja',
      'Fünf unterschiedliche Wohnlagen in Nerja',
      'Cinco formas distintas de alojarse en Nerja',
      'Vijf verschillende manieren om in Nerja te verblijven',
      'Fem olika sätt att bo i Nerja'
    ),
    intro: localized(
      'There is no single area that suits everyone. Start with what you want to do most days — beach, old town, easy walking, more residential surroundings — and choose the part of Nerja that makes that easiest.',
      'Es gibt keine Lage, die für alle passt. Überlegt zuerst, was euren Urlaub prägen soll – Strand, Altstadt, kurze Fußwege oder ein ruhigeres Wohnviertel – und wählt dann den Teil Nerjas, in dem das am einfachsten gelingt.',
      'No hay una zona que encaje con todo el mundo. Pensad primero qué queréis hacer la mayoría de los días — playa, casco antiguo, trayectos sencillos a pie o un entorno más residencial — y elegid la parte de Nerja que os lo ponga más fácil.',
      'Er is niet één buurt die voor iedereen werkt. Bedenk eerst wat je op de meeste dagen wilt doen — naar het strand, de oude stad in, makkelijk lopen of juist rustiger wonen — en kies de plek in Nerja waar dat het vanzelfsprekendst is.',
      'Det finns inget område som passar alla. Börja med det ni helst vill göra de flesta dagar – gå till stranden, röra er i gamla stan, ha enkla promenader eller bo mer avskilt – och välj den del av Nerja som gör det lättast.'
    ),
    goodForLabel: localized('Good for', 'Gut für', 'Ideal para', 'Past bij', 'Passar'),
    items: localized(
      [
        {
          kicker: '01',
          title: 'Old Town / Balcón de Europa',
          paragraphs: [
            'This is the pedestrian heart of Nerja, around the Balcón de Europa and the streets of the old town.',
            'Restaurants, shops, viewpoints and evening life are right outside the door, so most daily routines are easy on foot.',
            'The trade-off is that bringing a car can be less convenient, and the small beaches below the centre may involve slopes or steps.'
          ],
          goodFor: "Guests who want Nerja's old town and evening atmosphere to be part of everyday life."
        },
        {
          kicker: '02',
          title: 'Torrecilla / West-Central Nerja',
          paragraphs: [
            'Torrecilla sits on the western side of central Nerja, close to the beach but still within the everyday life of the town.',
            'It works particularly well if you want to move naturally between the coast, restaurants, shops and central Nerja without planning every outing around a car.',
            'The area feels like part of the town rather than a separate resort, which is exactly what some guests want.'
          ],
          goodFor: 'Guests who want both beach time and central Nerja to fit easily into the same day.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador Area',
          paragraphs: [
            'East of the Balcón, the Carabeo and Parador area keeps you close to central Nerja while bringing the coast more strongly into the setting.',
            'The old town remains within easy reach, while smaller coves and coastal routes sit below the cliffs.',
            'Those beaches can involve steps, and access or parking differs from street to street, so the exact location matters.'
          ],
          goodFor: "Guests who want to stay close to the centre while also having Nerja's smaller coastal coves nearby."
        },
        {
          kicker: '04',
          title: 'Burriana',
          paragraphs: [
            'Burriana is for guests who want the beach to shape most days.',
            'Restaurants, beach services and long hours by the sea are all close at hand once you are staying there. The important thing to understand is what happens when you head back towards central Nerja: the return involves a noticeable climb.',
            'That means a short-looking distance on a map may feel quite different when you repeat it several times during a stay.'
          ],
          goodFor: 'Guests who would rather have the beach immediately nearby than walk into the old town every evening.'
        },
        {
          kicker: '05',
          title: 'Outer Nerja / Residential Hills',
          paragraphs: [
            'Areas such as Capistrano, Punta Lara and other residential parts of Nerja offer a different kind of stay.',
            'You may find more space, residential surroundings, pools or villa-style accommodation, but central Nerja is less likely to be part of a spontaneous walk.',
            'A car, taxi or local transport therefore becomes more useful, particularly if you expect to move between the accommodation, town and the wider region regularly.'
          ],
          goodFor: 'Guests who value space and a more residential setting and are comfortable relying more on transport.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Altstadt / Balcón de Europa',
          paragraphs: [
            'Rund um den Balcón de Europa und in den Gassen der Altstadt liegt das Fußgängerzentrum von Nerja.',
            'Restaurants, Geschäfte, Aussichtspunkte und das abendliche Leben beginnen direkt vor der Tür. Vieles lässt sich deshalb ganz selbstverständlich zu Fuß erledigen.',
            'Mit dem Auto ist diese Lage weniger bequem. Außerdem liegen einige der kleinen Strände unterhalb des Zentrums und sind nur über Gefälle oder Treppen erreichbar.'
          ],
          goodFor: 'Gäste, die Nerjas Altstadt und ihre Stimmung am Abend jeden Tag vor der Tür haben möchten.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / westliches Zentrum',
          paragraphs: [
            'Torrecilla liegt westlich der Altstadt: nah am Strand und zugleich fest mit dem Zentrum von Nerja verbunden.',
            'Von hier könnt ihr Strand, Restaurants, Geschäfte und Wege Richtung Altstadt gut miteinander verbinden, ohne jeden Ausflug vom Auto abhängig zu machen.',
            'Das Viertel gehört zum normalen Stadtleben und wirkt nicht wie eine abgeschlossene Ferienanlage. Genau das schätzen viele Gäste an dieser Lage.'
          ],
          goodFor: 'Gäste, die Strandzeit und Zentral-Nerja unkompliziert an einem Tag verbinden möchten.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador',
          paragraphs: [
            'Östlich des Balcón bringt euch die Gegend um Carabeo und den Parador nah an das Zentrum und zugleich spürbar näher an die Küstenkante.',
            'Die Altstadt bleibt gut erreichbar; kleinere Buchten und Wege an der Küste liegen unterhalb der Klippen.',
            'Zu diesen Stränden führen teils Treppen. Auch Anfahrt und Parkmöglichkeiten unterscheiden sich von Straße zu Straße, deshalb zählt die genaue Adresse.'
          ],
          goodFor: 'Gäste, die zentral wohnen und Nerjas kleinere Buchten trotzdem in ihrer unmittelbaren Umgebung haben möchten.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          paragraphs: [
            'Burriana passt zu Gästen, bei denen der Strand die meisten Urlaubstage bestimmen soll.',
            'Restaurants, Strandangebote und lange Stunden am Meer liegen direkt in der Umgebung. Wichtig für die Planung ist der Rückweg Richtung Zentrum: Dabei geht es spürbar bergauf.',
            'Eine Strecke, die auf der Karte kurz aussieht, kann sich deshalb anders anfühlen, wenn ihr sie im Laufe des Aufenthalts mehrfach geht.'
          ],
          goodFor: 'Gäste, denen ein Strand direkt vor der Tür wichtiger ist als der tägliche Spaziergang in die Altstadt.'
        },
        {
          kicker: '05',
          title: 'Äußeres Nerja / Wohnviertel am Hang',
          paragraphs: [
            'Capistrano, Punta Lara und andere Wohnviertel außerhalb des Zentrums bieten eine andere Art, Nerja zu erleben.',
            'Dort findet ihr eher mehr Platz, Pools, ein ruhiges Wohnumfeld oder Häuser im Villenstil. Dafür gehört ein spontaner Spaziergang ins Zentrum seltener zum Alltag.',
            'Auto, Taxi oder Nahverkehr werden hier wichtiger, besonders wenn ihr regelmäßig zwischen Unterkunft, Ort und Umgebung unterwegs sein möchtet.'
          ],
          goodFor: 'Gäste, die Platz und ein ruhigeres Wohnumfeld schätzen und für ihre Wege gern häufiger Verkehrsmittel nutzen.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Casco antiguo / Balcón de Europa',
          paragraphs: [
            'Alrededor del Balcón de Europa y por las calles del casco antiguo se encuentra el corazón peatonal de Nerja.',
            'Restaurantes, tiendas, miradores y ambiente al caer la tarde están nada más salir, así que casi todo el día a día se resuelve andando.',
            'A cambio, moverse con coche resulta menos cómodo y algunas de las pequeñas playas bajo el centro exigen bajar por cuestas o escaleras.'
          ],
          goodFor: 'Quienes quieren vivir el casco antiguo y el ambiente de Nerja cada tarde sin tener que desplazarse.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / centro-oeste de Nerja',
          paragraphs: [
            'Torrecilla ocupa la parte occidental del centro de Nerja: está junto al mar, pero sigue formando parte de la vida cotidiana del pueblo.',
            'Es una zona cómoda para alternar playa, restaurantes, compras y paseos hacia el centro sin organizar cada salida en torno al coche.',
            'Se siente como un barrio de Nerja, no como un complejo vacacional aparte. Para algunos huéspedes, ese es precisamente su atractivo.'
          ],
          goodFor: 'Quienes quieren que la playa y el centro de Nerja encajen con facilidad en el mismo día.'
        },
        {
          kicker: '03',
          title: 'Carabeo / zona del Parador',
          paragraphs: [
            'Al este del Balcón, la zona de Carabeo y el Parador mantiene el centro cerca y da más presencia a la costa.',
            'El casco antiguo queda a mano, mientras que las pequeñas calas y los recorridos junto al mar se encuentran al pie de los acantilados.',
            'Para llegar a esas playas puede haber escaleras. El acceso en coche y el aparcamiento también cambian según la calle, por lo que conviene mirar la ubicación exacta.'
          ],
          goodFor: 'Quienes quieren estar cerca del centro y tener también a mano las calas pequeñas de Nerja.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          paragraphs: [
            'Burriana encaja con quienes quieren que la playa marque la mayoría de los días.',
            'Restaurantes, servicios de playa y largas horas junto al mar quedan muy cerca. Lo importante es pensar en la vuelta hacia el centro de Nerja, porque el regreso incluye una subida apreciable.',
            'Por eso, una distancia que parece corta en el mapa puede sentirse muy distinta cuando la repetís varias veces durante las vacaciones.'
          ],
          goodFor: 'Quienes prefieren tener la playa al lado antes que caminar al casco antiguo cada tarde.'
        },
        {
          kicker: '05',
          title: 'Nerja exterior / zonas residenciales en ladera',
          paragraphs: [
            'Capistrano, Punta Lara y otras zonas residenciales ofrecen una forma distinta de alojarse en Nerja.',
            'Es más frecuente encontrar amplitud, piscinas, un entorno residencial o casas de estilo villa, pero el centro deja de estar tan presente en los paseos espontáneos.',
            'El coche, el taxi o el transporte local cobran más importancia, sobre todo si pensáis moveros a menudo entre el alojamiento, el pueblo y el resto de la comarca.'
          ],
          goodFor: 'Quienes valoran el espacio y un ambiente más residencial y no les importa depender más del transporte.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Oude centrum / Balcón de Europa',
          paragraphs: [
            'Rond het Balcón de Europa en in de straten van de oude stad ligt het autoluwe hart van Nerja.',
            'Restaurants, winkels, uitzichtpunten en het avondleven beginnen voor de deur. Daardoor kun je bijna alles wat je dagelijks nodig hebt te voet doen.',
            'Met een auto is deze buurt minder handig. Bovendien liggen sommige kleine stranden onder het centrum en bereik je ze via een helling of trap.'
          ],
          goodFor: 'Gasten die het oude centrum en de avondsfeer van Nerja elke dag om zich heen willen hebben.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / west-centraal Nerja',
          paragraphs: [
            'Torrecilla ligt aan de westkant van het centrum, vlak bij het strand en toch midden in het gewone leven van Nerja.',
            'Vanuit deze buurt combineer je de kust, restaurants, winkels en wandelingen naar het centrum zonder voor ieder uitstapje de auto nodig te hebben.',
            'Torrecilla voelt als een deel van de stad en niet als een afzonderlijk vakantiepark. Voor veel gasten is dat juist de charme.'
          ],
          goodFor: 'Gasten die strand en centrum zonder veel plannen op één dag willen combineren.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador',
          paragraphs: [
            'Ten oosten van het Balcón blijf je rond Carabeo en het Parador dicht bij het centrum, terwijl de kust nadrukkelijker aanwezig is.',
            'De oude stad ligt nog steeds op loopafstand. De kleinere baaien en kustroutes liggen beneden aan de kliffen.',
            'Naar die stranden gaan vaak trappen. Ook bereikbaarheid en parkeren verschillen per straat, dus de precieze ligging is hier belangrijk.'
          ],
          goodFor: 'Gasten die dicht bij het centrum willen zitten en ook de kleinere baaien van Nerja vlakbij willen hebben.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          paragraphs: [
            'Burriana past bij gasten voor wie de meeste dagen om het strand mogen draaien.',
            'Restaurants, strandvoorzieningen en lange uren aan zee zijn dichtbij. Houd wel rekening met de terugweg naar centraal Nerja: die gaat merkbaar omhoog.',
            'Een afstand die op de kaart kort lijkt, kan daardoor anders aanvoelen wanneer je hem tijdens de vakantie een paar keer loopt.'
          ],
          goodFor: 'Gasten die liever het strand direct bij de hand hebben dan iedere avond naar de oude stad lopen.'
        },
        {
          kicker: '05',
          title: 'Buitenwijken / woonbuurten op de heuvels',
          paragraphs: [
            'Capistrano, Punta Lara en andere woonbuurten laten een heel andere kant van Nerja zien.',
            'Je vindt er vaker meer ruimte, zwembaden, een rustige woonomgeving of huizen in villastijl. Even spontaan naar het centrum lopen ligt er minder voor de hand.',
            'Een auto, taxi of lokaal vervoer komt hier vaker van pas, zeker als je geregeld tussen je verblijf, de stad en de omgeving wilt reizen.'
          ],
          goodFor: 'Gasten die ruimte en een rustige woonomgeving waarderen en het niet erg vinden vaker vervoer te gebruiken.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Gamla stan / Balcón de Europa',
          paragraphs: [
            'Kring Balcón de Europa och på gatorna i gamla stan ligger Nerjas bilfria hjärta.',
            'Restauranger, butiker, utsiktsplatser och kvällsliv finns direkt utanför dörren. Det mesta ni behöver under dagen går därför att nå till fots.',
            'Bil är mindre smidigt här. Dessutom ligger några av de små stränderna nedanför centrum och nås via backar eller trappor.'
          ],
          goodFor: 'Gäster som vill ha Nerjas gamla stad och kvällsliv omkring sig varje dag.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / västra centrum',
          paragraphs: [
            'Torrecilla ligger i den västra delen av centrala Nerja, nära stranden men fortfarande mitt i stadens vardagsliv.',
            'Härifrån är det enkelt att varva kust, restauranger, butiker och promenader mot centrum utan att planera varje tur efter bilen.',
            'Området känns som en del av staden snarare än en avskild semesteranläggning. För många är det just det som lockar.'
          ],
          goodFor: 'Gäster som vill kunna förena strandliv och centrala Nerja under samma dag.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Paradorområdet',
          paragraphs: [
            'Öster om Balcón ligger Carabeo och Paradorområdet nära centrum, samtidigt som kusten märks tydligare.',
            'Gamla stan finns på bekvämt avstånd, medan de mindre vikarna och kuststråken ligger nedanför klipporna.',
            'Trappor förekommer på vägen till stränderna. Framkomlighet och parkering skiftar också mellan gatorna, så den exakta adressen spelar roll.'
          ],
          goodFor: 'Gäster som vill bo nära centrum och samtidigt ha Nerjas mindre vikar i närheten.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          paragraphs: [
            'Burriana passar er som vill låta stranden prägla de flesta dagarna.',
            'Restauranger, strandservice och långa dagar vid havet finns nära. Tänk däremot på återvägen mot centrala Nerja, eftersom den innehåller en tydlig uppförsbacke.',
            'En sträcka som ser kort ut på kartan kan därför kännas annorlunda när ni går den flera gånger under semestern.'
          ],
          goodFor: 'Gäster som hellre har stranden runt hörnet än promenerar in till gamla stan varje kväll.'
        },
        {
          kicker: '05',
          title: 'Yttre Nerja / bostadsområden på höjden',
          paragraphs: [
            'Capistrano, Punta Lara och andra bostadsområden visar en annan sida av Nerja.',
            'Här finns oftare större ytor, pooler, lugna kvarter eller villaboende. Däremot ligger en spontan promenad till centrum inte lika nära till hands.',
            'Bil, taxi eller lokaltrafik blir därför viktigare, särskilt om ni ofta vill ta er mellan boendet, staden och utflyktsmål i trakten.'
          ],
          goodFor: 'Gäster som uppskattar utrymme och lugna bostadskvarter och gärna använder transport oftare.'
        }
      ]
    )
  },
  beaches: {
    eyebrow: localized('Beach or town?', 'Strand oder Altstadt?', '¿Playa o centro?', 'Strand of centrum?', 'Strand eller stad?'),
    title: localized(
      'What changes when you stay close to one or the other',
      'Was sich ändert, wenn eines von beiden vor der Tür liegt',
      'Qué cambia al alojarse cerca de uno u otro',
      'Wat er verandert als je dicht bij het een of het ander verblijft',
      'Vad som förändras när ni bor nära det ena eller det andra'
    ),
    intro: localized(
      'The question is not which beach is the prettiest. It is what you want your normal day in Nerja to look like.',
      'Es geht nicht darum, welcher Strand am schönsten ist. Entscheidend ist, wie ein normaler Urlaubstag in Nerja für euch aussehen soll.',
      'La pregunta no es qué playa es la más bonita, sino cómo queréis que sea un día normal durante vuestra estancia en Nerja.',
      'De vraag is niet welk strand het mooist is. Het gaat erom hoe een gewone vakantiedag in Nerja eruit moet zien.',
      'Frågan är inte vilken strand som är vackrast, utan hur ni vill att en vanlig dag i Nerja ska se ut.'
    ),
    items: [
      {
        title: localized(
          'When the beach is outside the door',
          'Wenn der Strand vor der Tür liegt',
          'Cuando la playa está al lado',
          'Als het strand voor de deur ligt',
          'När stranden ligger utanför dörren'
        ),
        paragraphs: localized(
          [
            'Going for a swim becomes wonderfully easy. You can return to the apartment between beach visits and spend much of the day close to the water.',
            'In a beach-focused area such as Burriana, however, an evening in the old town takes a little more planning because of the climb back.'
          ],
          [
            'Ein Sprung ins Meer wird herrlich unkompliziert. Zwischen zwei Strandbesuchen könnt ihr kurz in die Unterkunft zurückkehren und einen Großteil des Tages am Wasser verbringen.',
            'Von einer strandorientierten Lage wie Burriana braucht ein Abend in der Altstadt allerdings etwas mehr Planung, denn auf dem Rückweg geht es bergauf.'
          ],
          [
            'Bajar a darse un baño resulta facilísimo. Podéis volver al apartamento entre un rato de playa y otro y pasar buena parte del día cerca del agua.',
            'Desde una zona muy orientada al mar, como Burriana, salir por la tarde al casco antiguo requiere algo más de organización por la subida de vuelta.'
          ],
          [
            'Even gaan zwemmen wordt heerlijk eenvoudig. Tussen twee strandmomenten door loop je terug naar het appartement en een groot deel van de dag speelt zich bij zee af.',
            'Vanuit een echte strandbuurt als Burriana vraagt een avond in de oude stad wel iets meer planning, vanwege de klim terug.'
          ],
          [
            'Ett dopp blir härligt enkelt. Mellan stunderna på stranden kan ni gå tillbaka till lägenheten och låta en stor del av dagen utspela sig nära vattnet.',
            'Från ett tydligt strandområde som Burriana kräver en kväll i gamla stan däremot lite mer planering, eftersom vägen tillbaka går uppför.'
          ]
        )
      },
      {
        title: localized(
          'When the old town is outside the door',
          'Wenn die Altstadt vor der Tür liegt',
          'Cuando el casco antiguo está al lado',
          'Als het oude centrum voor de deur ligt',
          'När gamla stan ligger utanför dörren'
        ),
        paragraphs: localized(
          [
            'Dinner, shops and an evening stroll require almost no planning.',
            'The sea is still close, but some of the central beaches lie below the town, so a short distance does not necessarily mean a flat or step-free route.'
          ],
          [
            'Abendessen, Einkäufe und ein Spaziergang am Abend brauchen kaum Planung.',
            'Das Meer bleibt nah, doch einige zentrale Strände liegen unterhalb des Ortes. Eine kurze Entfernung bedeutet deshalb nicht automatisch einen ebenen oder stufenfreien Weg.'
          ],
          [
            'Salir a cenar, comprar o dar un paseo al atardecer apenas requiere planificación.',
            'El mar sigue cerca, pero algunas playas céntricas quedan por debajo del pueblo. Una distancia corta no siempre significa un camino llano o sin escaleras.'
          ],
          [
            'Uit eten gaan, winkelen en een avondwandeling vragen bijna geen planning.',
            'De zee is nog steeds dichtbij, maar sommige stranden in het centrum liggen lager dan de stad. Een korte afstand is dus niet altijd een vlakke route zonder trappen.'
          ],
          [
            'Middag, butiker och en kvällspromenad kräver nästan ingen planering.',
            'Havet är fortfarande nära, men några av de centrala stränderna ligger nedanför staden. En kort sträcka behöver alltså inte vara plan eller fri från trappor.'
          ]
        )
      },
      {
        title: localized(
          'Think about the walk you will repeat',
          'Denkt an den Weg, den ihr jeden Tag geht',
          'Pensad en el recorrido que vais a repetir',
          'Denk aan de wandeling die je steeds opnieuw maakt',
          'Tänk på promenaden ni kommer att göra varje dag'
        ),
        paragraphs: localized(
          [
            'The route you use every day matters more than a number on a map.',
            'Torrecilla makes it relatively easy to combine coast and centre. Around Carabeo, the centre stays close but reaching the water often means steps. At Burriana, beach life is simple while the walk back from town asks a little more of you.'
          ],
          [
            'Der Weg, den ihr täglich zurücklegt, sagt mehr aus als eine Zahl auf der Karte.',
            'Von Torrecilla lassen sich Küste und Zentrum recht unkompliziert verbinden. Rund um Carabeo bleibt das Zentrum nah, doch zum Wasser führen oft Treppen. In Burriana ist der Strandalltag einfach, während der Rückweg aus dem Ort etwas anstrengender ist.'
          ],
          [
            'El trayecto que haréis a diario importa más que una cifra en el mapa.',
            'Torrecilla permite combinar costa y centro con relativa facilidad. En Carabeo, el centro queda cerca, pero para llegar al agua suele haber escaleras. En Burriana, disfrutar de la playa es sencillo y la vuelta desde el pueblo exige algo más.'
          ],
          [
            'De route die je iedere dag loopt, zegt meer dan een getal op de kaart.',
            'Vanuit Torrecilla combineer je kust en centrum vrij gemakkelijk. Rond Carabeo blijft het centrum dichtbij, maar naar het water gaan vaak trappen. In Burriana is het strandleven eenvoudig en kost de terugweg uit de stad wat meer moeite.'
          ],
          [
            'Sträckan ni går varje dag säger mer än en siffra på kartan.',
            'Från Torrecilla är det förhållandevis enkelt att kombinera kust och centrum. I Carabeo är centrum nära, men vägen ner till vattnet innehåller ofta trappor. I Burriana är strandlivet smidigt, medan promenaden tillbaka från staden kräver lite mer.'
          ]
        )
      }
    ],
    cta: localized(
      "Explore Nerja's beaches",
      'Nerjas Strände entdecken',
      'Descubrir las playas de Nerja',
      'Ontdek de stranden van Nerja',
      'Upptäck Nerjas stränder'
    )
  },
  practical: {
    eyebrow: localized('Getting around Nerja', 'Unterwegs in Nerja', 'Cómo moverse por Nerja', 'Vervoer in Nerja', 'Att ta sig runt i Nerja'),
    title: localized(
      'On Foot, by Car & What to Know About Parking',
      'Zu Fuß, mit dem Auto und was ihr über das Parken wissen solltet',
      'A pie, en coche y lo que conviene saber sobre aparcamiento',
      'Te voet, met de auto en wat je moet weten over parkeren',
      'Till fots, med bil och vad ni bör veta om parkering'
    ),
    intro: localized(
      'Whether you need a car depends less on Nerja itself than on where you stay and what you plan to do.',
      'Ob ihr ein Auto braucht, hängt weniger von Nerja selbst ab als von eurer Wohnlage und euren Urlaubsplänen.',
      'Necesitar coche depende menos de Nerja en general que de la zona donde os alojéis y de los planes que tengáis.',
      'Of je een auto nodig hebt, hangt minder af van Nerja zelf dan van je verblijfplaats en je plannen.',
      'Om ni behöver bil beror mindre på Nerja i sig och mer på var ni bor och vad ni vill göra.'
    ),
    cards: [
      {
        title: localized('Staying without a car', 'Ohne Auto wohnen', 'Alojarse sin coche', 'Zonder auto verblijven', 'Att bo utan bil'),
        paragraphs: localized(
          [
            'A central stay can work very well without one.',
            'Old Town, Torrecilla and Carabeo can all put restaurants, shops and much of the coast within normal walking distance. The precise street still matters because slopes and steps can change the route.',
            'For occasional longer journeys, a taxi or bus may be enough.'
          ],
          [
            'Bei einer zentralen Unterkunft kommt ihr sehr gut ohne Auto aus.',
            'In Altstadt, Torrecilla und Carabeo liegen Restaurants, Geschäfte und weite Teile der Küste häufig in normaler Gehweite. Achtet trotzdem auf die konkrete Straße, denn Steigungen und Treppen können den Weg verändern.',
            'Für einzelne längere Strecken reichen oft Taxi oder Bus.'
          ],
          [
            'Una estancia céntrica puede funcionar muy bien sin coche.',
            'Desde el casco antiguo, Torrecilla y Carabeo, restaurantes, tiendas y buena parte de la costa pueden quedar a una distancia cómoda a pie. Aun así, mirad la calle exacta: las cuestas y escaleras cambian el recorrido.',
            'Para algún trayecto más largo, quizá os baste con un taxi o un autobús.'
          ],
          [
            'Wie centraal verblijft, kan heel goed zonder auto.',
            'Vanuit het oude centrum, Torrecilla en Carabeo liggen restaurants, winkels en een groot deel van de kust vaak op normale loopafstand. Kijk wel naar de precieze straat, want hellingen en trappen kunnen de route veranderen.',
            'Voor een enkele langere rit kan een taxi of bus genoeg zijn.'
          ],
          [
            'Bor ni centralt går det ofta utmärkt utan bil.',
            'Från gamla stan, Torrecilla och Carabeo kan restauranger, butiker och stora delar av kusten ligga på bekvämt promenadavstånd. Titta ändå på den exakta gatan, eftersom backar och trappor kan påverka vägen.',
            'För enstaka längre turer kan taxi eller buss räcka.'
          ]
        )
      },
      {
        title: localized('When a car becomes useful', 'Wann ein Auto nützlich wird', 'Cuándo viene bien el coche', 'Wanneer een auto handig wordt', 'När bil är praktiskt'),
        paragraphs: localized(
          [
            'Further from the centre, a car gives you much more freedom.',
            'It is also useful if you plan to explore Frigiliana, the wider coast or inland Andalucía regularly rather than spending most days in Nerja itself.'
          ],
          [
            'Weiter außerhalb des Zentrums gibt euch ein Auto deutlich mehr Freiheit.',
            'Das gilt auch, wenn ihr regelmäßig Frigiliana, weitere Orte an der Küste oder das andalusische Hinterland erkunden möchtet, statt die meisten Tage in Nerja zu verbringen.'
          ],
          [
            'Cuanto más os alejéis del centro, más libertad os dará el coche.',
            'También resulta útil si queréis visitar con frecuencia Frigiliana, otros puntos de la costa o el interior de Andalucía en lugar de pasar la mayoría de los días en Nerja.'
          ],
          [
            'Verder buiten het centrum geeft een auto je veel meer vrijheid.',
            'Ook als je geregeld Frigiliana, de rest van de kust of het binnenland van Andalusië wilt verkennen, is hij handig. Dat geldt vooral wanneer je niet de meeste dagen in Nerja zelf blijft.'
          ],
          [
            'Längre från centrum ger bilen betydligt större frihet.',
            'Den är också praktisk om ni ofta vill besöka Frigiliana, andra delar av kusten eller Andalusiens inland i stället för att tillbringa de flesta dagarna i Nerja.'
          ]
        )
      },
      {
        title: localized('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
        paragraphs: localized(
          [
            'If you stay centrally, the car can sometimes create more work than it saves.',
            'Parking becomes harder during busy periods, and some pedestrian streets make door-to-door access unrealistic. Choosing a location where everyday errands can be done on foot means you can park the car and leave it there until you actually need it.'
          ],
          [
            'Wenn ihr zentral wohnt, kann das Auto manchmal mehr Aufwand verursachen, als es erspart.',
            'In belebten Zeiten wird die Parkplatzsuche schwieriger, und in manchen Fußgängerzonen könnt ihr nicht bis vor die Tür fahren. Liegt alles für den Alltag in Gehweite, könnt ihr das Auto abstellen und erst wieder nutzen, wenn ihr es wirklich braucht.'
          ],
          [
            'Si os alojáis en el centro, a veces el coche da más trabajo del que ahorra.',
            'En épocas de mucha afluencia cuesta más aparcar y algunas calles peatonales impiden llegar hasta la puerta. Si elegís una zona donde podáis hacer la vida diaria andando, podéis dejar el coche aparcado hasta que de verdad lo necesitéis.'
          ],
          [
            'Wie centraal verblijft, kan soms meer werk aan de auto hebben dan gemak.',
            'In drukke periodes is parkeren lastiger en in sommige voetgangersstraten kun je niet tot aan de deur rijden. Kies je een buurt waar de dagelijkse dingen te voet kunnen, dan laat je de auto staan tot je hem echt nodig hebt.'
          ],
          [
            'Bor ni centralt kan bilen ibland ge mer besvär än nytta.',
            'Under välbesökta perioder blir det svårare att hitta parkering, och på vissa gågator går det inte att köra ända fram. Väljer ni ett område där vardagens ärenden kan skötas till fots kan bilen stå tills ni faktiskt behöver den.'
          ]
        )
      }
    ]
  },
  comparison: {
    eyebrow: localized(
      'One connected part of Andalucía',
      'Ein zusammenhängender Teil Andalusiens',
      'Dos lugares conectados de Andalucía',
      'Twee plaatsen in hetzelfde stukje Andalusië',
      'Två platser i samma del av Andalusien'
    ),
    title: localized(
      'Nerja & Frigiliana — Choose Your Base',
      'Nerja & Frigiliana – wählt euren Ausgangspunkt',
      'Nerja y Frigiliana: elegid dónde alojaros',
      'Nerja & Frigiliana — kies waar je verblijft',
      'Nerja & Frigiliana – välj var ni vill bo'
    ),
    intro: localized(
      'You do not have to choose between experiencing Nerja and experiencing Frigiliana.\n\nThey are close enough to be part of the same stay. The more useful question is simply:',
      'Ihr müsst euch nicht zwischen Nerja und Frigiliana entscheiden.\n\nBeide Orte lassen sich gut in einem Aufenthalt verbinden. Die hilfreichere Frage lautet deshalb:',
      'No tenéis que renunciar a Nerja para conocer Frigiliana, ni al revés.\n\nLos dos lugares pueden formar parte del mismo viaje. La pregunta que de verdad ayuda a elegir es:',
      'Je hoeft niet te kiezen tussen Nerja beleven en Frigiliana ontdekken.\n\nDe twee plaatsen passen prima in dezelfde vakantie. De vraag die je wel helpt kiezen is:',
      'Ni behöver inte välja bort Nerja för att uppleva Frigiliana, eller tvärtom.\n\nBåda ryms i samma semester. Frågan som faktiskt hjälper er att välja är:'
    ),
    prompt: localized(
      'Where would you rather wake up each morning?',
      'Wo möchtet ihr morgens lieber aufwachen?',
      '¿Dónde preferís despertaros cada mañana?',
      'Waar word je het liefst iedere ochtend wakker?',
      'Var vill ni helst vakna varje morgon?'
    ),
    profiles: [
      {
        title: localized('Wake up in Nerja', 'In Nerja aufwachen', 'Despertarse en Nerja', 'Wakker worden in Nerja', 'Vakna i Nerja'),
        text: localized(
          'Choose Nerja when you want the coast to be part of everyday life — spontaneous beach time, restaurants, shops and the possibility of spending much of the stay without a car if you choose a central location.',
          'Nerja passt zu euch, wenn die Küste jeden Tag dazugehören soll: spontane Strandzeit, Restaurants, Geschäfte und – bei einer zentralen Unterkunft – die Möglichkeit, einen großen Teil des Urlaubs ohne Auto zu verbringen.',
          'Elegid Nerja si queréis que la costa forme parte del día a día: bajar a la playa sin planearlo, tener restaurantes y tiendas a mano y, si os alojáis en el centro, poder pasar buena parte de las vacaciones sin coche.',
          'Kies Nerja als de kust bij iedere dag hoort: spontaan naar het strand, restaurants en winkels dichtbij en, vanuit een centrale buurt, de mogelijkheid om een groot deel van de vakantie zonder auto door te brengen.',
          'Välj Nerja om kusten ska vara en del av varje dag: spontana stunder på stranden, restauranger och butiker nära till hands och, om ni bor centralt, möjligheten att klara en stor del av semestern utan bil.'
        )
      },
      {
        title: localized('Wake up in Frigiliana', 'In Frigiliana aufwachen', 'Despertarse en Frigiliana', 'Wakker worden in Frigiliana', 'Vakna i Frigiliana'),
        text: localized(
          'Choose Frigiliana when you want the historic village itself to feel like home — village streets and evenings, an elevated setting and a different pace when you return at the end of the day.',
          'Frigiliana passt zu euch, wenn das historische Dorf euer Zuhause auf Zeit sein soll: Gassen und Abende im Ort, die erhöhte Lage und ein anderer Rhythmus, wenn ihr am Ende des Tages zurückkehrt.',
          'Elegid Frigiliana si queréis sentir el pueblo histórico como vuestro hogar durante unos días: sus calles y sus tardes, la posición elevada y otro ritmo al volver al final de la jornada.',
          'Kies Frigiliana als het historische dorp als thuis mag voelen: de straten en avonden in het dorp, de hogere ligging en een ander tempo wanneer je aan het einde van de dag terugkomt.',
          'Välj Frigiliana om den historiska byn ska kännas som hemma under resan: gränderna och kvällarna, läget ovanför kusten och ett annat tempo när ni återvänder efter dagens utflykt.'
        )
      }
    ],
    outro: localized(
      'Whichever base you choose, the other place remains close enough to enjoy during your stay.',
      'Wo ihr auch wohnt: Der andere Ort bleibt nah genug für einen Besuch während eures Aufenthalts.',
      'Elijáis el lugar que elijáis, el otro queda lo bastante cerca para disfrutarlo durante el viaje.',
      'Waar je ook verblijft, de andere plaats blijft dichtbij genoeg om tijdens de vakantie te bezoeken.',
      'Oavsett var ni bor finns den andra platsen nära nog för ett besök under semestern.'
    ),
    bridge: localized(
      'Choose where you want to wake up. Experience both.',
      'Wählt, wo ihr aufwachen möchtet. Erlebt beides.',
      'Elegid dónde queréis despertar. Disfrutad de los dos lugares.',
      'Kies waar je wakker wilt worden. Beleef ze allebei.',
      'Välj var ni vill vakna. Upplev båda.'
    ),
    cta: localized(
      'Explore Nerja & Frigiliana in more detail',
      'Nerja & Frigiliana genauer vergleichen',
      'Conocer mejor Nerja y Frigiliana',
      'Lees meer over Nerja & Frigiliana',
      'Läs mer om Nerja & Frigiliana'
    )
  },
  playa: {
    eyebrow: localized('Staying in Torrecilla', 'Wohnen in Torrecilla', 'Alojarse en Torrecilla', 'Verblijven in Torrecilla', 'Att bo i Torrecilla'),
    title: localized(
      'AMARA Playa in West-Central Nerja',
      'AMARA Playa im westlichen Zentrum von Nerja',
      'AMARA Playa en el centro-oeste de Nerja',
      'AMARA Playa in west-centraal Nerja',
      'AMARA Playa i västra delen av centrala Nerja'
    ),
    paragraphs: localized(
      [
        'AMARA Playa is our own apartment in the Torrecilla area, so this is the part of Nerja we know from the perspective of both hosts and guests.',
        'From here, beach days, shopping, restaurants and walks towards central Nerja can all belong to the same stay without needing to organise every outing around the car.',
        'The apartment itself is on the fifth floor with a lift and is designed for two guests. It has a full kitchen, washing machine, air conditioning, balcony and a side view towards the sea. The bed measures 200 × 200 cm.',
        'The apartment is compact rather than villa-sized, and the sea view is to the side rather than panoramic. Its strength is the combination of the apartment and its position in Nerja.'
      ],
      [
        'AMARA Playa ist unser eigenes Apartment in Torrecilla. Deshalb kennen wir diesen Teil Nerjas aus der Sicht von Gastgebern und Gästen.',
        'Von hier lassen sich Strandtage, Einkäufe, Restaurants und Spaziergänge Richtung Zentrum in einem Urlaub verbinden, ohne jede Unternehmung vom Auto abhängig zu machen.',
        'Das Apartment liegt im fünften Stock, hat einen Aufzug und ist für zwei Gäste gedacht. Zur Ausstattung gehören eine vollständige Küche, Waschmaschine, Klimaanlage, Balkon und ein seitlicher Blick zum Meer. Das Bett misst 200 × 200 cm.',
        'Das Apartment ist kompakt und bietet nicht den Platz einer Villa; auch der Meerblick ist seitlich statt panoramisch. Seine Stärke liegt in der Verbindung aus Ausstattung und Lage in Nerja.'
      ],
      [
        'AMARA Playa es nuestro apartamento en Torrecilla, una parte de Nerja que conocemos tanto como anfitriones como a través de la experiencia de nuestros huéspedes.',
        'Desde aquí, los días de playa, las compras, los restaurantes y los paseos hacia el centro pueden formar parte del mismo viaje sin organizar cada salida en torno al coche.',
        'El apartamento está en la quinta planta, tiene ascensor y está pensado para dos personas. Cuenta con cocina completa, lavadora, aire acondicionado, balcón y vistas laterales hacia el mar. La cama mide 200 × 200 cm.',
        'Es un apartamento compacto, no una vivienda con espacio de villa, y las vistas al mar son laterales, no panorámicas. Su valor está en la combinación entre el alojamiento y su ubicación en Nerja.'
      ],
      [
        'AMARA Playa is ons eigen appartement in Torrecilla. We kennen deze kant van Nerja daardoor als verhuurders én via de ervaringen van onze gasten.',
        'Vanaf hier passen stranddagen, boodschappen, restaurants en wandelingen naar het centrum in één vakantie, zonder ieder uitstapje rond de auto te plannen.',
        'Het appartement ligt op de vijfde verdieping, heeft een lift en is ingericht voor twee personen. Er is een volledige keuken, wasmachine, airconditioning en balkon met zijdelings uitzicht op zee. Het bed is 200 × 200 cm.',
        'Het is een compact appartement en geen ruime villa; ook het zeezicht is zijdelings en niet panoramisch. De kracht zit in de combinatie van het appartement en de ligging in Nerja.'
      ],
      [
        'AMARA Playa är vår egen lägenhet i Torrecilla. Det är därför en del av Nerja som vi känner både som värdar och genom våra gästers erfarenheter.',
        'Härifrån går det att förena stranddagar, inköp, restauranger och promenader mot centrum utan att planera varje tur efter bilen.',
        'Lägenheten ligger på femte våningen, har hiss och är inredd för två personer. Här finns fullt kök, tvättmaskin, luftkonditionering och balkong med havsutsikt från sidan. Sängen är 200 × 200 cm.',
        'Det är en kompakt lägenhet, inte ett rymligt villaboende, och havsutsikten är från sidan snarare än panoramisk. Fördelen är kombinationen av lägenheten och läget i Nerja.'
      ]
    ),
    cta: localized('See AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Se AMARA Playa')
  },
  gallery: {
    eyebrow: localized('AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla'),
    title: localized(
      'Inside the apartment',
      'Ein Blick ins Apartment',
      'El apartamento por dentro',
      'Binnen in het appartement',
      'Inne i lägenheten'
    ),
    items: [
      {
        src: '/images/amara-playa/apartment/chaparril-13.webp',
        alt: localized(
          'Living area at AMARA Playa in west-central Nerja',
          'Wohnbereich im AMARA Playa im westlichen Zentrum von Nerja',
          'Zona de estar de AMARA Playa en el centro-oeste de Nerja',
          'Woonkamer van AMARA Playa in west-centraal Nerja',
          'Vardagsrum i AMARA Playa i västra delen av centrala Nerja'
        ),
        caption: localized(
          'A calm living space for two in west-central Nerja.',
          'Ein ruhiger Wohnbereich für zwei im westlichen Zentrum von Nerja.',
          'Una zona de estar tranquila para dos en el centro-oeste de Nerja.',
          'Een rustige woonkamer voor twee in west-centraal Nerja.',
          'Ett lugnt vardagsrum för två i västra delen av centrala Nerja.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-01.webp',
        alt: localized(
          'Kitchen and dining area at AMARA Playa',
          'Küche und Essbereich im AMARA Playa',
          'Cocina y comedor de AMARA Playa',
          'Keuken en eethoek van AMARA Playa',
          'Kök och matplats i AMARA Playa'
        ),
        caption: localized(
          'The kitchen and dining area make longer stays easy.',
          'Küche und Essbereich machen auch längere Aufenthalte unkompliziert.',
          'La cocina y el comedor facilitan también las estancias más largas.',
          'De keuken en eethoek zijn prettig bij een langer verblijf.',
          'Köket och matplatsen gör även längre vistelser enkla.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-22.webp',
        alt: localized(
          'Bedroom at AMARA Playa with a 200 by 200 centimetre bed',
          'Schlafzimmer im AMARA Playa mit einem 200 mal 200 Zentimeter großen Bett',
          'Dormitorio de AMARA Playa con cama de 200 por 200 centímetros',
          'Slaapkamer van AMARA Playa met een bed van 200 bij 200 centimeter',
          'Sovrum i AMARA Playa med en säng på 200 gånger 200 centimeter'
        ),
        caption: localized(
          'The bedroom has a 200 × 200 cm bed.',
          'Im Schlafzimmer steht ein 200 × 200 cm großes Bett.',
          'El dormitorio tiene una cama de 200 × 200 cm.',
          'In de slaapkamer staat een bed van 200 × 200 cm.',
          'I sovrummet finns en säng på 200 × 200 cm.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-24.webp',
        alt: localized(
          'Balcony detail at AMARA Playa in Nerja',
          'Detail am Balkon des AMARA Playa in Nerja',
          'Detalle del balcón de AMARA Playa en Nerja',
          'Detail van het balkon van AMARA Playa in Nerja',
          'Detalj från balkongen i AMARA Playa i Nerja'
        ),
        caption: localized(
          'The balcony has a side view towards the sea.',
          'Vom Balkon geht der Blick seitlich zum Meer.',
          'El balcón tiene vistas laterales hacia el mar.',
          'Vanaf het balkon kijk je zijdelings richting zee.',
          'Från balkongen syns havet åt sidan.'
        )
      }
    ]
  },
  faq: {
    decisionTitle: localized(
      'Three questions make the decision easier',
      'Drei Fragen erleichtern die Entscheidung',
      'Tres preguntas para decidir con más facilidad',
      'Drie vragen die de keuze makkelijker maken',
      'Tre frågor som gör valet enklare'
    ),
    steps: [
      {
        num: '01',
        h: localized(
          'What do you want outside the door?',
          'Was möchtet ihr direkt vor der Tür haben?',
          '¿Qué queréis tener nada más salir?',
          'Wat wil je voor de deur hebben?',
          'Vad vill ni ha utanför dörren?'
        ),
        t: localized(
          'Beach, old-town evenings or more residential space?',
          'Strand, Altstadtabende oder mehr Platz in einem Wohnviertel?',
          '¿Playa, tardes en el casco antiguo o más espacio en una zona residencial?',
          'Het strand, avonden in de oude stad of meer ruimte in een woonbuurt?',
          'Stranden, kvällar i gamla stan eller mer utrymme i ett bostadsområde?'
        )
      },
      {
        num: '02',
        h: localized(
          'Which walk will you repeat every day?',
          'Welchen Weg werdet ihr jeden Tag gehen?',
          '¿Qué recorrido vais a repetir cada día?',
          'Welke wandeling maak je iedere dag?',
          'Vilken sträcka kommer ni att gå varje dag?'
        ),
        t: localized(
          'Look beyond the distance on the map. Think about slopes, steps and the walk back as well as the walk there.',
          'Schaut nicht nur auf die Entfernung. Denkt auch an Steigungen, Treppen und den Rückweg.',
          'No miréis solo la distancia del mapa. Tened en cuenta las cuestas, las escaleras y tanto la ida como la vuelta.',
          'Kijk verder dan de afstand op de kaart. Denk ook aan hellingen, trappen en de terugweg.',
          'Titta inte bara på avståndet på kartan. Räkna även med backar, trappor och vägen tillbaka.'
        )
      },
      {
        num: '03',
        h: localized(
          'What role should the car play?',
          'Welche Rolle soll das Auto spielen?',
          '¿Qué papel queréis dar al coche?',
          'Welke rol moet de auto spelen?',
          'Vilken roll ska bilen ha?'
        ),
        t: localized(
          'Do you want to leave it parked most days, use it mainly for excursions or depend on it for everyday life?',
          'Soll es die meiste Zeit stehen, vor allem für Ausflüge dienen oder zu euren täglichen Wegen gehören?',
          '¿Queréis dejarlo aparcado casi todos los días, usarlo sobre todo para excursiones o depender de él a diario?',
          'Wil je hem meestal laten staan, vooral voor uitstapjes gebruiken of er dagelijks op aangewezen zijn?',
          'Ska den stå parkerad de flesta dagar, främst användas för utflykter eller behövas i vardagen?'
        )
      }
    ],
    faqTitle: localized(
      'Nerja stay questions',
      'Fragen zum Aufenthalt in Nerja',
      'Preguntas sobre dónde alojarse en Nerja',
      'Vragen over verblijven in Nerja',
      'Frågor om att bo i Nerja'
    ),
    items: [
      {
        q: localized(
          'Which part of Nerja is easiest without a car?',
          'Welche Gegend in Nerja ist ohne Auto am einfachsten?',
          '¿Qué zona de Nerja resulta más cómoda sin coche?',
          'Welk deel van Nerja is het makkelijkst zonder auto?',
          'Vilken del av Nerja är enklast utan bil?'
        ),
        a: localized(
          'The Old Town, Torrecilla and Carabeo can all work well without a car if the exact location gives you practical walking routes to the places you expect to use most. If both the beach and central Nerja matter to you, Torrecilla is one option worth considering.',
          'Altstadt, Torrecilla und Carabeo können alle gut ohne Auto funktionieren, wenn die konkrete Adresse praktische Fußwege zu euren wichtigsten Zielen bietet. Wenn euch sowohl der Strand als auch das Zentrum wichtig sind, lohnt es sich, Torrecilla näher anzusehen.',
          'El casco antiguo, Torrecilla y Carabeo pueden funcionar bien sin coche si la ubicación concreta ofrece recorridos cómodos a pie hacia los lugares que más vais a utilizar. Si os importan tanto la playa como el centro, Torrecilla es una de las zonas que conviene valorar.',
          'In het oude centrum, Torrecilla en Carabeo kun je goed zonder auto, zolang de precieze locatie prettige looproutes biedt naar de plekken waar je vaak naartoe wilt. Zijn zowel het strand als het centrum belangrijk, dan is Torrecilla het bekijken waard.',
          'Gamla stan, Torrecilla och Carabeo kan alla fungera bra utan bil, förutsatt att den exakta adressen ger smidiga promenadvägar till platserna ni oftast vill besöka. Om både stranden och centrum är viktiga är Torrecilla ett område att titta närmare på.'
        )
      },
      {
        q: localized('Is Nerja hilly?', 'Ist Nerja hügelig?', '¿Nerja tiene muchas cuestas?', 'Is Nerja heuvelachtig?', 'Är Nerja backigt?'),
        a: localized(
          'Parts of it are. Many central streets are comfortable to walk, but beach access, cliffs, the climb back from Burriana and the residential hills mean Nerja should not be thought of as completely flat.',
          'Teilweise. Viele zentrale Straßen lassen sich angenehm zu Fuß gehen. Strandzugänge, Klippen, der Anstieg von Burriana und die Wohnviertel am Hang zeigen aber, dass Nerja nicht überall flach ist.',
          'En algunas partes, sí. Muchas calles céntricas son cómodas para caminar, pero los accesos a playa, los acantilados, la subida desde Burriana y las zonas residenciales en ladera hacen que Nerja no pueda considerarse un lugar completamente llano.',
          'Op sommige plekken wel. Veel straten in het centrum lopen prettig, maar door strandtoegangen, kliffen, de klim vanuit Burriana en de woonbuurten op de heuvel is Nerja zeker niet overal vlak.',
          'Delvis. Många gator i centrum är behagliga att gå, men strandvägarna, klipporna, backen från Burriana och bostadsområdena på höjden gör att Nerja inte kan beskrivas som helt platt.'
        )
      },
      {
        q: localized(
          'Should we stay near the beach or near the old town?',
          'Sollten wir am Strand oder nahe der Altstadt wohnen?',
          '¿Conviene alojarse cerca de la playa o del casco antiguo?',
          'Kunnen we beter bij het strand of de oude stad verblijven?',
          'Ska vi bo nära stranden eller gamla stan?'
        ),
        a: localized(
          'Stay close to the beach if going easily back and forth to the sea matters most. Stay in or near the old town if restaurants and evening life should happen almost automatically once you step outside. Torrecilla and Carabeo sit between those two priorities in different ways.',
          'Wohnt nahe am Strand, wenn ihr möglichst unkompliziert zwischen Unterkunft und Meer wechseln möchtet. Wählt die Altstadt oder ihre Umgebung, wenn Restaurants und Abende direkt vor der Tür beginnen sollen. Torrecilla und Carabeo verbinden diese beiden Wünsche jeweils auf ihre eigene Weise.',
          'Alojaos cerca de la playa si lo más importante es poder ir y volver del mar con facilidad. Elegid el casco antiguo o sus alrededores si queréis tener restaurantes y ambiente de tarde nada más salir. Torrecilla y Carabeo combinan esas dos prioridades de formas distintas.',
          'Verblijf dicht bij het strand als je vooral makkelijk heen en weer naar zee wilt. Kies de oude stad of de directe omgeving als restaurants en het avondleven voor de deur moeten beginnen. Torrecilla en Carabeo combineren die wensen ieder op een andere manier.',
          'Bo nära stranden om det viktigaste är att enkelt kunna gå fram och tillbaka till havet. Välj gamla stan eller området intill om restauranger och kvällsliv ska börja utanför dörren. Torrecilla och Carabeo förenar de två önskemålen på olika sätt.'
        )
      },
      {
        q: localized('Do we need a car in Nerja?', 'Brauchen wir in Nerja ein Auto?', '¿Necesitamos coche en Nerja?', 'Hebben we een auto nodig in Nerja?', 'Behöver vi bil i Nerja?'),
        a: localized(
          'Not necessarily. If you choose a central location, you can spend much of the stay on foot. A car becomes more useful further from the centre or when you want to explore the wider region regularly.',
          'Nicht unbedingt. Bei einer zentralen Unterkunft könnt ihr einen großen Teil des Aufenthalts zu Fuß verbringen. Weiter außerhalb oder für regelmäßige Ausflüge in die Region wird ein Auto nützlicher.',
          'No necesariamente. Si elegís una zona céntrica, podéis pasar buena parte de la estancia a pie. El coche resulta más útil lejos del centro o si queréis recorrer la comarca con frecuencia.',
          'Niet per se. Vanuit een centrale buurt kun je een groot deel van de vakantie te voet doen. Verder buiten het centrum, of als je vaak de omgeving wilt verkennen, komt een auto beter van pas.',
          'Inte nödvändigtvis. Väljer ni ett centralt läge kan ni tillbringa en stor del av vistelsen till fots. Längre från centrum, eller om ni ofta vill utforska trakten, är det mer praktiskt med bil.'
        )
      },
      {
        q: localized(
          'Is Burriana easy to walk to from the centre?',
          'Ist Burriana vom Zentrum aus gut zu Fuß erreichbar?',
          '¿Es fácil ir andando del centro a Burriana?',
          'Is Burriana makkelijk te voet bereikbaar vanuit het centrum?',
          'Är det enkelt att gå till Burriana från centrum?'
        ),
        a: localized(
          'Many guests can walk the route, but the important part is the return. Heading back towards central Nerja involves a noticeable climb, so it is better to judge the route by the uphill walk you will repeat rather than by the distance on the map alone.',
          'Viele Gäste können die Strecke gut zu Fuß gehen, doch entscheidend ist der Rückweg. Richtung Zentrum geht es spürbar bergauf. Bewertet die Lage deshalb nach diesem wiederkehrenden Anstieg und nicht nur nach der Entfernung auf der Karte.',
          'Muchas personas pueden hacer el recorrido a pie, pero lo importante es la vuelta. El regreso hacia el centro de Nerja incluye una subida apreciable, así que conviene valorar el trayecto por ese tramo que repetiréis y no solo por la distancia del mapa.',
          'Veel gasten kunnen de route prima lopen, maar let vooral op de terugweg. Richting centraal Nerja gaat het merkbaar omhoog. Beoordeel de ligging daarom op die klim die je vaker maakt, en niet alleen op de afstand op de kaart.',
          'Många gäster kan gå sträckan, men det är återvägen som är viktig. Tillbaka mot centrala Nerja väntar en tydlig uppförsbacke. Bedöm därför vägen utifrån den återkommande stigningen, inte bara avståndet på kartan.'
        )
      },
      {
        q: localized(
          'Can we combine Nerja and Frigiliana in one stay?',
          'Können wir Nerja und Frigiliana in einem Aufenthalt verbinden?',
          '¿Podemos combinar Nerja y Frigiliana en el mismo viaje?',
          'Kunnen we Nerja en Frigiliana in één vakantie combineren?',
          'Kan vi kombinera Nerja och Frigiliana under samma semester?'
        ),
        a: localized(
          'Yes. Think of them as two nearby bases with different everyday atmospheres. Choose Nerja if you want to wake up by the coast, or Frigiliana if you want to wake up in the village — and include the other in your stay.',
          'Ja. Beide Orte liegen nah beieinander, bieten im Alltag aber eine andere Atmosphäre. Wählt Nerja, wenn ihr morgens an der Küste aufwachen möchtet, oder Frigiliana für das Dorfgefühl – und besucht den jeweils anderen Ort während eures Aufenthalts.',
          'Sí. Son dos lugares cercanos con ambientes cotidianos diferentes. Elegid Nerja si queréis despertar junto a la costa o Frigiliana si preferís hacerlo en el pueblo, e incluid el otro lugar en el viaje.',
          'Ja. Het zijn twee plekken dicht bij elkaar, ieder met een andere sfeer in het dagelijks leven. Kies Nerja als je aan de kust wilt wakker worden, of Frigiliana als je liever in het dorp wakker wordt, en bezoek de andere plaats tijdens je vakantie.',
          'Ja. De ligger nära varandra men har olika känsla i vardagen. Välj Nerja om ni vill vakna vid kusten eller Frigiliana om ni hellre vaknar i byn, och besök den andra platsen under semestern.'
        )
      }
    ]
  }
} as const;
