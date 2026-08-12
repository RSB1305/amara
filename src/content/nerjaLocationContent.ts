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
  version: '2026-08-12-nerja-location-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Where to Stay in Nerja: Areas, Walkability & Parking | AMARA',
      description:
        'Compare Nerja’s old town, Torrecilla, Carabeo, Burriana and residential hills by beach access, walking, parking and car use.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo in Nerja übernachten? Lagen, Wege & Parken | AMARA',
      description:
        'Vergleicht Altstadt, Torrecilla, Carabeo, Burriana und die Wohnlagen am Hang nach Strandnähe, Fußwegen, Parken und Autonutzung.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde alojarse en Nerja: zonas, cuestas y parking | AMARA',
      description:
        'Compara el casco antiguo, Torrecilla, Carabeo, Burriana y las zonas residenciales según playa, recorridos a pie, aparcamiento y coche.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar overnachten in Nerja? Buurten, lopen & parkeren | AMARA',
      description:
        'Vergelijk het oude centrum, Torrecilla, Carabeo, Burriana en de woonwijken op strand, looproutes, parkeren en autogebruik.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ska man bo i Nerja? Områden, backar & parkering | AMARA',
      description:
        'Jämför gamla stan, Torrecilla, Carabeo, Burriana och bostadsområdena utifrån strandläge, promenader, parkering och bilbehov.',
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
      'Nerja · Location guide',
      'Nerja · Standort-Guide',
      'Nerja · Guía de zonas',
      'Nerja · Locatiegids',
      'Nerja · Områdesguide'
    ),
    h1: localized(
      'Where to Stay in Nerja',
      'Wo in Nerja übernachten?',
      'Dónde alojarse en Nerja',
      'Waar overnachten in Nerja?',
      'Var ska man bo i Nerja?'
    ),
    body: localized(
      'Nerja is not one accommodation location. The right base depends on whether you want the beach, the old town and everyday errands on easy routes — and how much climbing, driving or parking friction you are happy to accept.',
      'Nerja ist nicht eine einzige Unterkunftslage. Entscheidend ist, ob Strand, Altstadt und tägliche Wege möglichst einfach sein sollen – und wie viel Steigung, Autofahrt oder Parkplatzsuche für euch in Ordnung ist.',
      'Nerja no funciona como una única zona de alojamiento. La base adecuada depende de si queréis playa, casco antiguo y recados cotidianos en rutas cómodas, y de cuántas cuestas, desplazamientos o dificultades para aparcar os encajan.',
      'Nerja is niet één verblijfsgebied. De juiste uitvalsbasis hangt af van de vraag of strand, oude centrum en dagelijkse boodschappen op makkelijke routes moeten liggen — en hoeveel helling, autorijden of parkeerdruk bij jullie past.',
      'Nerja är inte ett enda boendeläge. Rätt bas beror på om ni vill ha strand, gamla stan och vardagsärenden längs enkla stråk – och hur mycket backar, bilkörning eller parkeringsbesvär ni accepterar.'
    ),
    ctaMain: localized(
      'Explore the stay areas',
      'Wohnlagen entdecken',
      'Ver las zonas para alojarse',
      'Bekijk de verblijfsgebieden',
      'Utforska boendeområdena'
    ),
    ctaAlt: localized(
      'Choose your base',
      'Die passende Basis wählen',
      'Elegir vuestra base',
      'Kies jullie uitvalsbasis',
      'Välj er bas'
    ),
    imageAlt: localized(
      'Aerial view showing central Nerja, its beaches and the coastal topography',
      'Luftaufnahme von Zentral-Nerja, seinen Stränden und der Küstentopografie',
      'Vista aérea del centro de Nerja, sus playas y la topografía de la costa',
      'Luchtfoto van centraal Nerja, de stranden en het hoogteverschil langs de kust',
      'Flygvy över centrala Nerja, stränderna och kustens nivåskillnader'
    )
  },
  essence: {
    eyebrow: localized('The mental map', 'Die Orientierung', 'El mapa mental', 'De mentale kaart', 'Orienteringen'),
    title: localized(
      'Four things shape an everyday stay',
      'Vier Dinge prägen den Alltag vor Ort',
      'Cuatro factores que cambian la estancia',
      'Vier factoren bepalen het dagelijks verblijf',
      'Fyra saker formar vardagen under vistelsen'
    ),
    intro: localized(
      'A short distance on the map can still mean steps, a climb or an awkward car routine. Read Nerja through the centre, the coast, its topography and the role of the car.',
      'Eine kurze Strecke auf der Karte kann trotzdem Stufen, einen Anstieg oder umständliche Autofahrten bedeuten. Betrachtet Nerja deshalb über Zentrum, Küste, Topografie und die Rolle des Autos.',
      'Una distancia corta en el mapa puede incluir escaleras, una subida o una rutina incómoda con el coche. Para entender Nerja hay que mirar el centro, la costa, el relieve y el papel del coche.',
      'Een korte afstand op de kaart kan toch trappen, een klim of een onhandige autoroutine betekenen. Bekijk Nerja daarom via het centrum, de kust, het reliëf en de rol van de auto.',
      'Ett kort avstånd på kartan kan ändå innebära trappor, en stigning eller en besvärlig bilrutin. Läs Nerja utifrån centrum, kusten, topografin och bilens roll.'
    ),
    items: [
      {
        kicker: localized('Centre', 'Zentrum', 'Centro', 'Centrum', 'Centrum'),
        headline: localized(
          'Central Nerja works well on foot',
          'Zentral-Nerja funktioniert gut zu Fuß',
          'El centro de Nerja funciona bien a pie',
          'Centraal Nerja werkt goed te voet',
          'Centrala Nerja fungerar bra till fots'
        ),
        text: localized(
          'In the old town and west-central streets, restaurants, shops and evening walks can become part of the daily routine without starting the car.',
          'In der Altstadt und in den westlich-zentralen Straßen gehören Restaurants, Geschäfte und Abendspaziergänge zum Alltag, ohne dass ihr dafür das Auto starten müsst.',
          'En el casco antiguo y las calles del centro-oeste, restaurantes, tiendas y paseos de tarde pueden formar parte de la rutina sin tener que coger el coche.',
          'In het oude centrum en de westelijk-centrale straten horen restaurants, winkels en avondwandelingen bij de dagelijkse routine zonder de auto te starten.',
          'I gamla stan och de västcentrala kvarteren kan restauranger, butiker och kvällspromenader bli en del av vardagen utan att bilen behöver startas.'
        ),
        imageSrc: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
      },
      {
        kicker: localized('Coast', 'Küste', 'Costa', 'Kust', 'Kust'),
        headline: localized(
          'The beaches connect differently to town',
          'Jeder Strand liegt anders zum Ort',
          'Cada playa se conecta de forma distinta con el pueblo',
          'Niet elk strand sluit hetzelfde aan op het centrum',
          'Stränderna hänger ihop med staden på olika sätt'
        ),
        text: localized(
          'Torrecilla combines differently with the centre than Burriana, while the small central coves often sit below the town and involve steps.',
          'Torrecilla lässt sich anders mit dem Zentrum verbinden als Burriana; die kleinen zentralen Buchten liegen häufig unterhalb des Ortes und sind über Stufen erreichbar.',
          'Torrecilla se combina con el centro de otra manera que Burriana, mientras que las calas céntricas suelen quedar por debajo del pueblo y requieren escaleras.',
          'Torrecilla combineert anders met het centrum dan Burriana; de kleine centrale baaien liggen vaak onder de stad en vragen trappen.',
          'Torrecilla kombineras med centrum på ett annat sätt än Burriana, medan de små centrala vikarna ofta ligger nedanför staden och nås via trappor.'
        )
      },
      {
        kicker: localized('Topography', 'Topografie', 'Relieve', 'Hoogteverschil', 'Topografi'),
        headline: localized(
          'Nerja is not one flat coastal strip',
          'Nerja ist kein durchgehend flacher Küstenstreifen',
          'Nerja no es una franja costera llana',
          'Nerja is geen vlakke kuststrook',
          'Nerja är inte en enda platt kustremsa'
        ),
        text: localized(
          'Cliffs, beach access, slopes and hillside developments change the effort of routes that look simple online.',
          'Klippen, Strandzugänge, Steigungen und Hanglagen verändern den Aufwand von Wegen, die online einfach aussehen.',
          'Los acantilados, los accesos a playa, las cuestas y las urbanizaciones en ladera cambian el esfuerzo de recorridos que en internet parecen sencillos.',
          'Kliffen, strandtoegang, hellingen en woonwijken op de heuvel veranderen hoeveel moeite routes kosten die online eenvoudig lijken.',
          'Klippor, strandvägar, sluttningar och bostadsområden på höjden förändrar ansträngningen på stråk som ser enkla ut online.'
        )
      },
      {
        kicker: localized('Mobility', 'Mobilität', 'Movilidad', 'Mobiliteit', 'Rörlighet'),
        headline: localized(
          'A car can help — or become daily friction',
          'Ein Auto kann helfen – oder täglich stören',
          'El coche puede ayudar o convertirse en una carga diaria',
          'Een auto kan helpen — of dagelijks in de weg zitten',
          'En bil kan hjälpa – eller bli ett vardagsbesvär'
        ),
        text: localized(
          'Central stays can work without a car. Outer locations and wider regional plans make one more useful, but central parking pressure remains part of the trade-off.',
          'Zentrale Aufenthalte funktionieren auch ohne Auto. In äußeren Lagen und für regionale Ausflüge wird es nützlicher, doch der Parkdruck im Zentrum bleibt Teil der Abwägung.',
          'Una estancia céntrica puede funcionar sin coche. En zonas exteriores y para explorar la región resulta más útil, aunque la presión de aparcamiento en el centro forma parte del equilibrio.',
          'Een centraal verblijf kan zonder auto werken. In buitenwijken en voor uitstappen in de regio wordt een auto nuttiger, maar parkeerdruk in het centrum blijft deel van de afweging.',
          'Ett centralt boende kan fungera utan bil. I yttre områden och för utflykter i regionen blir bilen mer användbar, men parkeringstrycket i centrum ingår i avvägningen.'
        )
      }
    ]
  },
  areas: {
    eyebrow: localized(
      'Where to stay in Nerja',
      'Wo in Nerja übernachten',
      'Dónde alojarse en Nerja',
      'Waar overnachten in Nerja',
      'Var ska man bo i Nerja'
    ),
    title: localized(
      'Five stay environments, five different daily rhythms',
      'Fünf Wohnlagen, fünf unterschiedliche Alltagsrhythmen',
      'Cinco entornos para cinco ritmos distintos',
      'Vijf verblijfsgebieden, vijf verschillende dagritmes',
      'Fem boendemiljöer med olika vardagsrytm'
    ),
    intro: localized(
      'There is no universal best area. Start with the routines you want to repeat every day, then accept the trade-off that comes with them.',
      'Die eine beste Lage gibt es nicht. Beginnt mit den Wegen, die ihr täglich wiederholen möchtet, und entscheidet dann, welcher Nachteil für euch vertretbar ist.',
      'No existe una zona mejor para todo el mundo. Empezad por las rutinas que queréis repetir cada día y valorad después qué contrapartida os encaja.',
      'Er is geen buurt die voor iedereen de beste is. Begin bij de routines die jullie elke dag willen herhalen en kies daarna welke keerzijde daarbij past.',
      'Det finns inget område som är bäst för alla. Börja med rutinerna ni vill upprepa varje dag och avgör sedan vilken nackdel som passar er.'
    ),
    labels: {
      everyday: localized('Everyday ease', 'Im Alltag einfach', 'Facilidad diaria', 'Dagelijks gemak', 'Enkel vardag'),
      benefit: localized('Main strength', 'Größter Vorteil', 'Ventaja principal', 'Belangrijkste voordeel', 'Största styrkan'),
      tradeoff: localized('Trade-off', 'Abwägung', 'Contrapartida', 'Keerzijde', 'Avvägning'),
      suits: localized('Suits', 'Passt zu', 'Encaja con', 'Past bij', 'Passar')
    },
    items: localized(
      [
        {
          kicker: '01',
          title: 'Old Town / Balcón de Europa',
          location: 'The pedestrian core around the Balcón and the old-town streets above the central coves.',
          everyday: 'Restaurants, shops, viewpoints and evening life are immediately available on foot.',
          benefit: 'Centre-first living with the strongest sense of being in the middle of Nerja.',
          tradeoff: 'Parking and vehicle access can create friction, while nearby beaches often sit below town and involve slopes or steps.',
          suits: 'Guests who want old-town evenings and central atmosphere to shape most days.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / West-Central Nerja',
          location: 'The west-central streets around Torrecilla, between the beach, everyday services and central Nerja.',
          everyday: 'Beach time, groceries, restaurants and walks toward the old town can fit into practical car-free routines.',
          benefit: 'A balanced combination of coast and town without making either feel like a separate excursion.',
          tradeoff: 'It feels more urban than a resort enclave, and the exact ease of beach access still depends on the street and route.',
          suits: 'Guests who want both beach and centre on repeatable daily routes.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador Area',
          location: 'The central coastal edge east of the Balcón, above small coves and before Nerja opens toward Burriana.',
          everyday: 'The old town remains close, while coastal walks and smaller coves are part of the immediate setting.',
          benefit: 'A central position between old-town life and the eastern beach side.',
          tradeoff: 'Beach access may involve steps, and parking or arrival conditions vary noticeably from street to street.',
          suits: 'Guests who want central Nerja with a stronger coastal-cliff atmosphere.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          location: 'Nerja’s main beach-first environment on the eastern side of town.',
          everyday: 'Restaurants, beach services and sea days are easy once you are based around the beach.',
          benefit: 'The clearest choice when the beach is the organising centre of the stay.',
          tradeoff: 'The return from central Nerja involves meaningful elevation, so map distance alone understates the repeated walking effort.',
          suits: 'Guests who place a full-service beach above spontaneous old-town evenings.'
        },
        {
          kicker: '05',
          title: 'Outer Nerja / Residential Hills',
          location: 'Residential and hillside developments such as Capistrano, Punta Lara and comparable outer locations.',
          everyday: 'More residential surroundings, pools or villa-style space can replace immediate access to the centre.',
          benefit: 'A stronger fit for space, a residential setting and car-enabled regional exploration.',
          tradeoff: 'Spontaneous central routines become less easy, gradients matter more and a car, taxi or public transport becomes materially more useful.',
          suits: 'Guests comfortable trading walkability for residential space and mobility by road.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Altstadt / Balcón de Europa',
          location: 'Der Fußgängerbereich rund um den Balcón und die Altstadtgassen oberhalb der zentralen Buchten.',
          everyday: 'Restaurants, Geschäfte, Aussichtspunkte und das abendliche Leben liegen direkt vor der Tür.',
          benefit: 'Eine konsequent zentrale Lage mit dem stärksten Gefühl, mitten in Nerja zu wohnen.',
          tradeoff: 'Parken und Zufahrt können mühsam sein; die nahen Strände liegen häufig unterhalb des Ortes und erfordern Gefälle oder Stufen.',
          suits: 'Gäste, deren Tage von Altstadtabenden und zentraler Atmosphäre geprägt sein sollen.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / westliches Zentrum',
          location: 'Die westlich-zentralen Straßen rund um Torrecilla zwischen Strand, Alltagsangebot und Zentrum.',
          everyday: 'Strand, Einkäufe, Restaurants und Wege Richtung Altstadt lassen sich gut ohne tägliche Autofahrt verbinden.',
          benefit: 'Eine ausgewogene Verbindung von Küste und Ort, ohne dass eines davon wie ein eigener Ausflug wirkt.',
          tradeoff: 'Die Umgebung ist städtischer als eine abgeschlossene Ferienanlage; wie einfach der Strand erreichbar ist, hängt außerdem von Straße und Route ab.',
          suits: 'Gäste, die Strand und Zentrum auf wiederholbaren Alltagswegen verbinden möchten.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador',
          location: 'Der zentrale Küstenrand östlich des Balcón, oberhalb kleiner Buchten und vor dem Übergang Richtung Burriana.',
          everyday: 'Die Altstadt bleibt nah, während Küstenwege und kleinere Buchten direkt zur Umgebung gehören.',
          benefit: 'Eine zentrale Position zwischen Altstadtleben und der östlichen Küstenseite.',
          tradeoff: 'Zum Strand führen teils Stufen; Parken und Anreise unterscheiden sich deutlich von Straße zu Straße.',
          suits: 'Gäste, die Zentral-Nerja mit stärkerem Küsten- und Klippengefühl suchen.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          location: 'Nerjas ausgeprägteste strandorientierte Lage auf der östlichen Seite des Ortes.',
          everyday: 'Restaurants, Strandangebot und Tage am Meer sind einfach, sobald ihr direkt an der Bucht wohnt.',
          benefit: 'Die klarste Wahl, wenn der Strand den Tagesrhythmus bestimmen soll.',
          tradeoff: 'Der Rückweg aus Zentral-Nerja hat spürbare Höhenmeter; die Entfernung auf der Karte unterschätzt daher den wiederkehrenden Gehaufwand.',
          suits: 'Gäste, denen ein Strand mit viel Infrastruktur wichtiger ist als spontane Altstadtabende.'
        },
        {
          kicker: '05',
          title: 'Äußeres Nerja / Wohnlagen am Hang',
          location: 'Wohn- und Hanglagen wie Capistrano, Punta Lara und vergleichbare äußere Bereiche.',
          everyday: 'Mehr Wohnumfeld, Pools oder villaartige Großzügigkeit treten an die Stelle unmittelbarer Zentrumsnähe.',
          benefit: 'Eine passende Basis für mehr Platz, ein ruhigeres Wohngefühl und regionale Ausflüge mit dem Auto.',
          tradeoff: 'Spontane Wege ins Zentrum werden schwieriger, Steigungen wichtiger und Auto, Taxi oder Bus deutlich nützlicher.',
          suits: 'Gäste, die Fußläufigkeit bewusst gegen Wohnraum und Mobilität auf der Straße tauschen.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Casco antiguo / Balcón de Europa',
          location: 'El núcleo peatonal alrededor del Balcón y las calles del casco antiguo, por encima de las calas céntricas.',
          everyday: 'Restaurantes, tiendas, miradores y ambiente de tarde y noche quedan a un paso.',
          benefit: 'Vida plenamente céntrica y la sensación más clara de estar en el corazón de Nerja.',
          tradeoff: 'El aparcamiento y el acceso en coche pueden complicarse; las playas cercanas suelen quedar por debajo del pueblo y requieren cuestas o escaleras.',
          suits: 'Quienes quieren que las tardes en el casco antiguo y el ambiente céntrico marquen la estancia.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / centro-oeste de Nerja',
          location: 'Las calles del centro-oeste alrededor de Torrecilla, entre la playa, los servicios cotidianos y el centro.',
          everyday: 'Playa, compras, restaurantes y paseos hacia el casco antiguo pueden encajar en rutinas prácticas sin coche.',
          benefit: 'Una combinación equilibrada de costa y pueblo sin convertir ninguno de los dos en una excursión.',
          tradeoff: 'El entorno es más urbano que el de una urbanización vacacional, y la comodidad exacta para bajar a la playa depende de la calle y la ruta.',
          suits: 'Quienes quieren playa y centro dentro de recorridos diarios fáciles de repetir.'
        },
        {
          kicker: '03',
          title: 'Carabeo / zona del Parador',
          location: 'El borde costero céntrico al este del Balcón, sobre pequeñas calas y antes de la bajada hacia Burriana.',
          everyday: 'El casco antiguo sigue cerca y los paseos costeros y las calas pequeñas forman parte del entorno inmediato.',
          benefit: 'Una posición céntrica entre la vida del casco antiguo y el lado oriental de la costa.',
          tradeoff: 'El acceso a la playa puede incluir escaleras y tanto la llegada como el aparcamiento cambian mucho según la calle.',
          suits: 'Quienes buscan el centro de Nerja con más ambiente de costa y acantilado.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          location: 'El entorno más claramente orientado a la playa en el lado este de Nerja.',
          everyday: 'Restaurantes, servicios de playa y días junto al mar resultan sencillos una vez instalados en la zona.',
          benefit: 'La opción más clara cuando la playa debe organizar el ritmo de la estancia.',
          tradeoff: 'La vuelta desde el centro de Nerja implica un desnivel notable; la distancia en el mapa no refleja todo el esfuerzo de repetir el recorrido.',
          suits: 'Quienes priorizan una playa con servicios frente a las tardes espontáneas en el casco antiguo.'
        },
        {
          kicker: '05',
          title: 'Nerja exterior / zonas residenciales en ladera',
          location: 'Urbanizaciones residenciales y de ladera como Capistrano, Punta Lara y otras zonas exteriores similares.',
          everyday: 'Un entorno más residencial, piscinas o viviendas más amplias sustituyen la cercanía inmediata al centro.',
          benefit: 'Encaja mejor si buscáis espacio, ambiente residencial y libertad para explorar la región en coche.',
          tradeoff: 'La espontaneidad para ir al centro disminuye, las cuestas pesan más y el coche, el taxi o el transporte público se vuelven bastante más útiles.',
          suits: 'Quienes aceptan cambiar recorridos a pie por espacio residencial y movilidad por carretera.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Oude centrum / Balcón de Europa',
          location: 'De voetgangerskern rond het Balcón en de oude straten boven de centrale baaien.',
          everyday: 'Restaurants, winkels, uitzichtpunten en avondleven liggen direct binnen loopbereik.',
          benefit: 'Centrumgericht verblijven met het sterkste gevoel midden in Nerja te wonen.',
          tradeoff: 'Parkeren en autotoegang kunnen lastig zijn; nabijgelegen stranden liggen vaak lager en vragen een helling of trappen.',
          suits: 'Gasten die oude-stadsavonden en centrale sfeer hun dagen willen laten bepalen.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / westelijk centrum',
          location: 'De westelijk-centrale straten rond Torrecilla, tussen strand, dagelijkse voorzieningen en centraal Nerja.',
          everyday: 'Strand, boodschappen, restaurants en wandelingen naar het oude centrum passen in praktische routines zonder auto.',
          benefit: 'Een evenwichtige combinatie van kust en stad zonder dat een van beide een aparte uitstap wordt.',
          tradeoff: 'De omgeving is stedelijker dan een afgesloten vakantiecomplex en het precieze gemak van de strandroute hangt af van straat en route.',
          suits: 'Gasten die strand en centrum via goed herhaalbare dagelijkse routes willen combineren.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Parador',
          location: 'De centrale kustrand ten oosten van het Balcón, boven kleine baaien en vóór de overgang naar Burriana.',
          everyday: 'Het oude centrum blijft dichtbij, terwijl kustwandelingen en kleine baaien bij de directe omgeving horen.',
          benefit: 'Een centrale positie tussen het oude stadsleven en de oostelijke kustzijde.',
          tradeoff: 'Strandtoegang kan trappen vragen; parkeren en aankomen verschillen duidelijk per straat.',
          suits: 'Gasten die centraal Nerja willen combineren met meer kust- en klifsfeer.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          location: 'Nerja’s duidelijkste strandgerichte verblijfsgebied aan de oostkant van de stad.',
          everyday: 'Restaurants, strandvoorzieningen en zeedagen zijn eenvoudig zodra jullie bij het strand verblijven.',
          benefit: 'De helderste keuze wanneer het strand het ritme van de vakantie moet bepalen.',
          tradeoff: 'De terugweg vanuit centraal Nerja bevat een duidelijke klim; de afstand op de kaart onderschat daarom de dagelijkse loopinspanning.',
          suits: 'Gasten die een strand met veel voorzieningen belangrijker vinden dan spontane avonden in het oude centrum.'
        },
        {
          kicker: '05',
          title: 'Buitenwijken / woongebieden op de heuvels',
          location: 'Woonwijken en hellinglocaties zoals Capistrano, Punta Lara en vergelijkbare buitengebieden.',
          everyday: 'Een residentiëlere omgeving, zwembaden of meer villa-achtige ruimte komen in de plaats van directe centrumbereikbaarheid.',
          benefit: 'Een sterkere match voor ruimte, een woonomgeving en regionale uitstappen met de auto.',
          tradeoff: 'Spontane routines in het centrum worden minder makkelijk, hellingen tellen zwaarder en auto, taxi of openbaar vervoer wordt aanzienlijk nuttiger.',
          suits: 'Gasten die beloopbaarheid bewust inruilen voor woonruimte en mobiliteit over de weg.'
        }
      ],
      [
        {
          kicker: '01',
          title: 'Gamla stan / Balcón de Europa',
          location: 'Gågatorna kring Balcón och de äldre kvarteren ovanför de centrala vikarna.',
          everyday: 'Restauranger, butiker, utsiktsplatser och kvällsliv finns direkt till fots.',
          benefit: 'Ett centrumorienterat boende med tydligast känsla av att vara mitt i Nerja.',
          tradeoff: 'Parkering och bilåtkomst kan bli besvärligt, medan närliggande stränder ofta ligger nedanför staden och nås via sluttningar eller trappor.',
          suits: 'Gäster som vill låta kvällar i gamla stan och den centrala atmosfären forma vistelsen.'
        },
        {
          kicker: '02',
          title: 'Torrecilla / västcentrala Nerja',
          location: 'De västcentrala kvarteren kring Torrecilla, mellan stranden, vardagsservice och centrala Nerja.',
          everyday: 'Strand, matbutiker, restauranger och promenader mot gamla stan kan ingå i praktiska rutiner utan bil.',
          benefit: 'En balanserad kombination av kust och stad utan att någon av dem känns som en separat utflykt.',
          tradeoff: 'Miljön är mer urban än en avskild semesteranläggning, och hur enkel strandvägen är beror på gata och stråk.',
          suits: 'Gäster som vill ha både strand och centrum längs vardagsvägar som är lätta att upprepa.'
        },
        {
          kicker: '03',
          title: 'Carabeo / Paradorområdet',
          location: 'Den centrala kustkanten öster om Balcón, ovanför små vikar och före övergången mot Burriana.',
          everyday: 'Gamla stan är fortsatt nära, samtidigt som kustpromenader och mindre vikar hör till närområdet.',
          benefit: 'Ett centralt läge mellan gamla stans liv och den östra kustsidan.',
          tradeoff: 'Strandvägen kan innebära trappor, och parkering eller ankomst skiljer sig tydligt mellan olika gator.',
          suits: 'Gäster som vill ha centrala Nerja med starkare kust- och klippkänsla.'
        },
        {
          kicker: '04',
          title: 'Burriana',
          location: 'Nerjas tydligaste strandorienterade miljö på stadens östra sida.',
          everyday: 'Restauranger, strandservice och dagar vid havet blir enkla när ni väl bor nere vid stranden.',
          benefit: 'Det klaraste valet när stranden ska organisera vistelsens rytm.',
          tradeoff: 'Återvägen från centrala Nerja innebär en märkbar stigning; kartavståndet underskattar därför den återkommande promenadansträngningen.',
          suits: 'Gäster som prioriterar en strand med full service framför spontana kvällar i gamla stan.'
        },
        {
          kicker: '05',
          title: 'Yttre Nerja / bostadsområden på höjden',
          location: 'Bostads- och sluttningsområden som Capistrano, Punta Lara och jämförbara yttre lägen.',
          everyday: 'En mer bostadspräglad miljö, pooler eller villaliknande utrymme ersätter den omedelbara närheten till centrum.',
          benefit: 'Passar bättre för utrymme, en bostadsmiljö och regionala utflykter med bil.',
          tradeoff: 'Spontana centrumrutiner blir mindre enkla, lutningar spelar större roll och bil, taxi eller kollektivtrafik blir betydligt mer användbart.',
          suits: 'Gäster som gärna byter gångavstånd mot boendeutrymme och rörlighet på väg.'
        }
      ]
    )
  },
  beaches: {
    eyebrow: localized('Beach or town?', 'Strand oder Ort?', '¿Playa o pueblo?', 'Strand of centrum?', 'Strand eller stad?'),
    title: localized(
      'What changes when you stay there',
      'Was sich durch die Lage wirklich ändert',
      'Lo que cambia al alojarse en cada entorno',
      'Wat er verandert wanneer jullie daar verblijven',
      'Vad som förändras när ni bor där'
    ),
    intro: localized(
      'This is not about choosing the prettiest beach. It is about which route you are willing to repeat before breakfast, after a swim and again in the evening.',
      'Es geht nicht darum, den schönsten Strand zu küren. Entscheidend ist, welchen Weg ihr vor dem Frühstück, nach dem Baden und am Abend immer wieder gehen möchtet.',
      'No se trata de elegir la playa más bonita, sino de decidir qué recorrido estáis dispuestos a repetir antes de desayunar, después del baño y de nuevo por la tarde.',
      'Dit gaat niet om het mooiste strand, maar om de route die jullie vóór het ontbijt, na het zwemmen en later op de avond willen blijven herhalen.',
      'Det handlar inte om att utse den vackraste stranden, utan om vilket stråk ni vill upprepa före frukost, efter badet och på kvällen.'
    ),
    items: [
      {
        title: localized('When the beach is outside the door', 'Wenn der Strand vor der Tür liegt', 'Cuando la playa está al lado', 'Wanneer het strand voor de deur ligt', 'När stranden ligger utanför dörren'),
        text: localized(
          'Sea days become spontaneous and returning to the apartment is easy. In a beach-first area such as Burriana, however, central evenings may involve a climb or a more deliberate transport choice.',
          'Tage am Meer werden spontan und der Weg zurück zur Unterkunft bleibt einfach. In einer strandorientierten Lage wie Burriana können Abende im Zentrum jedoch einen Anstieg oder eine bewusste Fahrt erfordern.',
          'Los días de mar surgen sin planificación y volver al alojamiento resulta fácil. Sin embargo, desde una zona de playa como Burriana, las tardes en el centro pueden exigir una subida o un traslado más pensado.',
          'Zeedagen ontstaan vanzelf en teruggaan naar het verblijf is eenvoudig. Vanuit een strandgerichte buurt als Burriana kan een avond in het centrum echter een klim of een bewuste vervoerskeuze vragen.',
          'Dagar vid havet blir spontana och det är enkelt att gå tillbaka till boendet. Från ett strandorienterat område som Burriana kan kvällar i centrum däremot kräva en stigning eller ett mer planerat transportval.'
        )
      },
      {
        title: localized('When the old town is outside the door', 'Wenn die Altstadt vor der Tür liegt', 'Cuando el casco antiguo está al lado', 'Wanneer het oude centrum voor de deur ligt', 'När gamla stan ligger utanför dörren'),
        text: localized(
          'Dinner, shops and evening walks need little planning. The nearest central coves may still be below town, so being close to the sea does not always mean a level or step-free beach route.',
          'Abendessen, Geschäfte und Spaziergänge brauchen kaum Planung. Die nahen zentralen Buchten liegen dennoch oft unterhalb des Ortes; Meeresnähe bedeutet daher nicht automatisch einen ebenen oder stufenfreien Strandweg.',
          'Cenar, comprar y pasear por la tarde requiere poca planificación. Aun así, las calas céntricas suelen quedar por debajo del pueblo, de modo que estar cerca del mar no garantiza un acceso llano o sin escaleras.',
          'Eten, winkels en avondwandelingen vragen weinig planning. De centrale baaien liggen vaak nog lager dan de stad, dus dicht bij zee betekent niet altijd een vlakke of trapvrije strandroute.',
          'Middag, butiker och kvällspromenader kräver lite planering. De närmaste centrala vikarna ligger ändå ofta nedanför staden, så närhet till havet betyder inte alltid en plan eller trappfri strandväg.'
        )
      },
      {
        title: localized('The repeated route matters most', 'Der wiederholte Weg entscheidet', 'Lo decisivo es el recorrido repetido', 'De dagelijkse herhaling telt het meest', 'Det återkommande stråket betyder mest'),
        text: localized(
          'Torrecilla can put beach and centre into one practical routine. Carabeo keeps the centre close but often adds steps to the water. Burriana makes beach life easy while the return from town asks more of the walk.',
          'Torrecilla kann Strand und Zentrum in einer praktischen Routine verbinden. Carabeo hält das Zentrum nah, bringt zum Wasser aber häufig Stufen mit sich. Burriana erleichtert den Strandalltag, während der Rückweg aus dem Ort mehr Anstrengung verlangt.',
          'Torrecilla permite integrar playa y centro en una rutina práctica. Carabeo mantiene el centro cerca, aunque suele añadir escaleras para llegar al agua. Burriana facilita la vida de playa, pero la vuelta desde el pueblo exige más.',
          'Torrecilla kan strand en centrum in één praktische routine verbinden. Carabeo houdt het centrum dichtbij maar voegt vaak trappen naar het water toe. Burriana maakt strandleven eenvoudig, terwijl de terugweg uit de stad meer vraagt.',
          'Torrecilla kan förena strand och centrum i en praktisk rutin. Carabeo håller centrum nära men innebär ofta trappor ner till vattnet. Burriana gör strandlivet enkelt medan återvägen från staden kräver mer.'
        )
      }
    ],
    cta: localized(
      'Explore the beaches in detail',
      'Die Strände im Detail erkunden',
      'Ver la guía detallada de playas',
      'Bekijk de stranden in detail',
      'Utforska stränderna i detalj'
    )
  },
  practical: {
    eyebrow: localized('Getting around', 'Unterwegs vor Ort', 'Cómo moverse', 'Onderweg in Nerja', 'Att ta sig runt'),
    title: localized(
      'Nerja on Foot, by Car & Where Parking Fits In',
      'Nerja zu Fuß, mit dem Auto und die Rolle des Parkens',
      'Nerja a pie, en coche y el papel del aparcamiento',
      'Nerja te voet, met de auto en de rol van parkeren',
      'Nerja till fots, med bil och var parkeringen passar in'
    ),
    intro: localized(
      'The useful question is not simply whether to hire a car. It is whether your chosen base lets you leave it parked when everyday life is meant to happen on foot.',
      'Die entscheidende Frage ist nicht nur, ob ihr ein Auto mietet. Wichtiger ist, ob eure gewählte Lage erlaubt, es stehen zu lassen, wenn der Alltag zu Fuß stattfinden soll.',
      'La pregunta útil no es solo si conviene alquilar coche, sino si la zona elegida permite dejarlo aparcado cuando queréis hacer la vida diaria a pie.',
      'De nuttige vraag is niet alleen of jullie een auto huren, maar of de gekozen buurt het mogelijk maakt hem te laten staan wanneer het dagelijks leven te voet moet gebeuren.',
      'Den viktiga frågan är inte bara om ni ska hyra bil, utan om ert valda läge låter bilen stå när vardagen ska fungera till fots.'
    ),
    cards: [
      {
        kicker: localized('Without a car', 'Ohne Auto', 'Sin coche', 'Zonder auto', 'Utan bil'),
        title: localized('Central locations can work very well', 'Zentrale Lagen funktionieren sehr gut', 'Las zonas céntricas funcionan muy bien', 'Centrale buurten werken erg goed', 'Centrala lägen kan fungera mycket bra'),
        bullets: localized(
          [
            'Old Town, Torrecilla and Carabeo can keep restaurants, shops and much of the coast within daily walking routines.',
            'Choose the precise route, not just the area name: slopes and steps still differ by street.',
            'A taxi or bus can cover occasional journeys without making transport the centre of every day.'
          ],
          [
            'Altstadt, Torrecilla und Carabeo können Restaurants, Geschäfte und große Teile der Küste in tägliche Fußwege einbinden.',
            'Achtet auf die konkrete Route, nicht nur auf den Namen der Lage: Steigungen und Stufen unterscheiden sich je nach Straße.',
            'Taxi oder Bus können einzelne Fahrten abdecken, ohne dass Mobilität jeden Tag bestimmt.'
          ],
          [
            'Casco antiguo, Torrecilla y Carabeo permiten integrar restaurantes, tiendas y buena parte de la costa en recorridos diarios a pie.',
            'Elegid la ruta concreta, no solo el nombre de la zona: las cuestas y escaleras cambian según la calle.',
            'El taxi o el autobús pueden resolver trayectos puntuales sin convertir el transporte en el centro de cada día.'
          ],
          [
            'Oude centrum, Torrecilla en Carabeo kunnen restaurants, winkels en een groot deel van de kust in dagelijkse looproutes opnemen.',
            'Kies de precieze route en niet alleen de buurtnaam: hellingen en trappen verschillen per straat.',
            'Een taxi of bus kan incidentele ritten opvangen zonder dat vervoer elke dag bepaalt.'
          ],
          [
            'Gamla stan, Torrecilla och Carabeo kan hålla restauranger, butiker och stora delar av kusten inom vardagens promenadstråk.',
            'Välj det exakta stråket, inte bara områdets namn: lutningar och trappor skiljer sig mellan gator.',
            'Taxi eller buss kan lösa enstaka resor utan att transporten blir centrum för varje dag.'
          ]
        )
      },
      {
        kicker: localized('When a car helps', 'Wann ein Auto hilft', 'Cuándo ayuda el coche', 'Wanneer een auto helpt', 'När en bil hjälper'),
        title: localized('Outer stays and regional days', 'Äußere Lagen und regionale Ausflüge', 'Zonas exteriores y excursiones', 'Buitenwijken en regionale dagen', 'Yttre lägen och regionala dagar'),
        bullets: localized(
          [
            'A car becomes materially more useful in residential hills and outer developments.',
            'It adds flexibility for wider coast, village and inland plans.',
            'That freedom matters most when regional exploration is a recurring part of the stay.'
          ],
          [
            'In Wohnlagen am Hang und äußeren Siedlungen wird ein Auto deutlich nützlicher.',
            'Es schafft Flexibilität für Ziele an der Küste, in Dörfern und im Hinterland.',
            'Dieser Vorteil zählt vor allem, wenn regionale Ausflüge regelmäßig zur Reise gehören.'
          ],
          [
            'El coche resulta bastante más útil en urbanizaciones exteriores y zonas residenciales en ladera.',
            'Aporta flexibilidad para recorrer la costa, los pueblos y el interior.',
            'Esa libertad pesa más cuando explorar la región forma parte habitual de la estancia.'
          ],
          [
            'Een auto wordt duidelijk nuttiger in woonwijken op de heuvels en andere buitengebieden.',
            'Hij geeft flexibiliteit voor plannen langs de kust, in dorpen en in het binnenland.',
            'Die vrijheid telt vooral wanneer regionale uitstappen regelmatig bij de vakantie horen.'
          ],
          [
            'En bil blir betydligt mer användbar i bostadsområden på höjden och andra yttre lägen.',
            'Den ger flexibilitet för planer längs kusten, i byarna och inåt land.',
            'Den friheten betyder mest när utflykter i regionen återkommer under vistelsen.'
          ]
        )
      },
      {
        kicker: localized('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering'),
        title: localized('Useful transport can become central friction', 'Nützliche Mobilität kann im Zentrum stören', 'Un transporte útil puede estorbar en el centro', 'Handig vervoer kan centraal juist hinderen', 'Praktisk transport kan bli ett centralt besvär'),
        bullets: localized(
          [
            'Central parking can become difficult during busy periods.',
            'Pedestrian and restricted streets make door-to-door access less realistic in parts of the centre.',
            'A base that covers daily needs on foot reduces the pressure to move and re-park the car.'
          ],
          [
            'In belebten Zeiten kann Parken im Zentrum schwierig werden.',
            'Fußgängerbereiche und Zufahrtsbeschränkungen machen eine Anreise bis vor die Tür in Teilen des Zentrums unrealistisch.',
            'Eine Lage mit täglichen Zielen in Fußnähe reduziert den Druck, das Auto immer wieder umzuparken.'
          ],
          [
            'Aparcar en el centro puede resultar difícil en periodos de mucha afluencia.',
            'Las calles peatonales o restringidas hacen poco realista llegar en coche hasta la puerta en algunas zonas céntricas.',
            'Una base que cubra las necesidades diarias a pie reduce la presión de mover y volver a aparcar el coche.'
          ],
          [
            'Centraal parkeren kan in drukke periodes moeilijk worden.',
            'Voetgangersstraten en beperkte toegang maken tot aan de deur rijden in delen van het centrum minder realistisch.',
            'Een basis met dagelijkse voorzieningen op loopafstand vermindert de druk om de auto telkens te verplaatsen en opnieuw te parkeren.'
          ],
          [
            'Central parkering kan bli svår under intensiva perioder.',
            'Gågator och begränsad trafik gör dörr-till-dörr-ankomst mindre realistisk i delar av centrum.',
            'En bas där vardagsbehoven nås till fots minskar pressen att flytta och parkera om bilen.'
          ]
        )
      }
    ]
  },
  comparison: {
    eyebrow: localized('One connected stay region', 'Eine verbundene Urlaubsregion', 'Una región conectada', 'Eén verbonden verblijfsregio', 'En sammanhängande vistelseregion'),
    title: localized(
      'Nerja & Frigiliana — Choose Your Base',
      'Nerja & Frigiliana – wählt eure Basis',
      'Nerja y Frigiliana: elegid vuestra base',
      'Nerja & Frigiliana — kies jullie uitvalsbasis',
      'Nerja & Frigiliana – välj er bas'
    ),
    intro: localized(
      'Staying in Nerja does not mean missing Frigiliana, and staying in Frigiliana does not mean missing Nerja. The choice is where you want to wake up and which environment should make everyday life easiest.',
      'Wer in Nerja wohnt, verpasst Frigiliana nicht – und umgekehrt. Die eigentliche Entscheidung lautet, wo ihr morgens aufwachen möchtet und welche Umgebung euren Alltag am einfachsten macht.',
      'Alojarse en Nerja no significa perderse Frigiliana, ni alojarse en Frigiliana implica renunciar a Nerja. La decisión es dónde queréis despertar y qué entorno debe facilitar vuestra vida diaria.',
      'Wie in Nerja verblijft, mist Frigiliana niet — en andersom. De keuze gaat over waar jullie wakker willen worden en welke omgeving het dagelijks leven het makkelijkst maakt.',
      'Att bo i Nerja betyder inte att ni missar Frigiliana, och att bo i Frigiliana betyder inte att ni missar Nerja. Valet gäller var ni vill vakna och vilken miljö som ska göra vardagen enklast.'
    ),
    profiles: [
      {
        title: localized('Wake up in Nerja', 'In Nerja aufwachen', 'Despertar en Nerja', 'Wakker worden in Nerja', 'Vakna i Nerja'),
        text: localized(
          'Choose the coast as your everyday starting point when spontaneous beach time, urban services, restaurants and easier car-free central routines matter most.',
          'Wählt die Küste als täglichen Ausgangspunkt, wenn spontane Strandzeit, städtische Angebote, Restaurants und einfachere autofreie Routinen im Zentrum besonders wichtig sind.',
          'Elegid la costa como punto de partida diario si priorizáis la playa espontánea, los servicios urbanos, los restaurantes y rutinas céntricas más fáciles sin coche.',
          'Kies de kust als dagelijks vertrekpunt wanneer spontaan strand, stedelijke voorzieningen, restaurants en eenvoudigere autovrije routines centraal staan.',
          'Välj kusten som vardagens utgångspunkt när spontana strandstunder, stadsservice, restauranger och enklare bilfria centrumrutiner betyder mest.'
        )
      },
      {
        title: localized('Wake up in Frigiliana', 'In Frigiliana aufwachen', 'Despertar en Frigiliana', 'Wakker worden in Frigiliana', 'Vakna i Frigiliana'),
        text: localized(
          'Choose the village as home when historic streets, village evenings, elevated landscape and returning to a quieter setting matter more than immediate beach access.',
          'Wählt das Dorf als Zuhause, wenn historische Gassen, Dorfabende, die erhöhte Landschaft und die Rückkehr in eine ruhigere Umgebung wichtiger sind als unmittelbare Strandnähe.',
          'Elegid el pueblo como hogar si os importan más las calles históricas, las tardes de pueblo, el paisaje elevado y volver a un entorno más tranquilo que tener la playa inmediata.',
          'Kies het dorp als thuisbasis wanneer historische straten, dorpsavonden, het hogere landschap en terugkeren naar rust belangrijker zijn dan directe strandtoegang.',
          'Välj byn som hem när historiska gränder, bykvällar, det högt belägna landskapet och återkomsten till lugn betyder mer än direkt strandläge.'
        )
      }
    ],
    bridge: localized(
      'Choose the base that fits your everyday rhythm. Experience both.',
      'Wählt die Basis, die zu eurem Alltag passt. Erlebt beides.',
      'Elegid la base que encaje con vuestro ritmo diario. Disfrutad de las dos.',
      'Kies de basis die bij jullie dagelijks ritme past. Beleef beide.',
      'Välj basen som passar er vardagsrytm. Upplev båda.'
    ),
    cta: localized(
      'Read the deeper base comparison',
      'Den ausführlichen Basisvergleich lesen',
      'Ver la comparación completa de bases',
      'Lees de uitgebreide vergelijking',
      'Läs den fördjupade jämförelsen'
    )
  },
  gallery: {
    eyebrow: localized('AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla', 'AMARA Playa · Torrecilla'),
    title: localized(
      'A west-central Nerja base in practice',
      'Eine Basis im westlichen Zentrum in der Praxis',
      'Una base en el centro-oeste llevada a la práctica',
      'Een westelijk-centrale basis in de praktijk',
      'En västcentral bas i praktiken'
    ),
    items: [
      {
        src: '/images/amara-playa/apartment/chaparril-13.webp',
        alt: localized(
          'Calm living space at AMARA Playa in west-central Nerja',
          'Ruhiger Wohnbereich im AMARA Playa im westlichen Zentrum Nerjas',
          'Zona de estar tranquila de AMARA Playa en el centro-oeste de Nerja',
          'Rustige woonruimte van AMARA Playa in westelijk-centraal Nerja',
          'Lugn vardagsdel på AMARA Playa i västcentrala Nerja'
        ),
        caption: localized(
          'An owner-operated apartment in the Torrecilla stay environment.',
          'Ein inhabergeführtes Apartment in der Wohnlage rund um Torrecilla.',
          'Un apartamento gestionado por sus propietarios en el entorno de Torrecilla.',
          'Een door de eigenaren beheerd appartement in het verblijfsgebied rond Torrecilla.',
          'En ägardriven lägenhet i boendemiljön kring Torrecilla.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-01.webp',
        alt: localized(
          'Bright AMARA Playa living and dining area',
          'Heller Wohn- und Essbereich im AMARA Playa',
          'Zona luminosa de salón y comedor de AMARA Playa',
          'Lichte woon- en eetruimte van AMARA Playa',
          'Ljus vardags- och matplats på AMARA Playa'
        ),
        caption: localized(
          'The apartment supports simple routines between home, the coast and central Nerja.',
          'Das Apartment unterstützt einfache Wege zwischen Zuhause, Küste und Zentral-Nerja.',
          'El apartamento facilita las rutinas entre casa, la costa y el centro de Nerja.',
          'Het appartement ondersteunt eenvoudige routines tussen thuis, de kust en centraal Nerja.',
          'Lägenheten stödjer enkla rutiner mellan hemmet, kusten och centrala Nerja.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-22.webp',
        alt: localized(
          'AMARA Playa bedroom with a 200 by 200 centimetre bed',
          'Schlafzimmer im AMARA Playa mit 200 mal 200 Zentimeter großem Bett',
          'Dormitorio de AMARA Playa con cama de 200 por 200 centímetros',
          'Slaapkamer van AMARA Playa met een bed van 200 bij 200 centimeter',
          'Sovrum på AMARA Playa med en säng på 200 gånger 200 centimeter'
        ),
        caption: localized(
          'The apartment is designed for two, with a 200 × 200 cm bed.',
          'Das Apartment ist für zwei Personen ausgelegt und hat ein 200 × 200 cm großes Bett.',
          'El apartamento está pensado para dos personas y cuenta con una cama de 200 × 200 cm.',
          'Het appartement is ingericht voor twee personen en heeft een bed van 200 × 200 cm.',
          'Lägenheten är utformad för två och har en säng på 200 × 200 cm.'
        )
      },
      {
        src: '/images/amara-playa/apartment/chaparril-24.webp',
        alt: localized(
          'Interior detail at the fifth-floor AMARA Playa apartment',
          'Interieurdetail im AMARA Playa Apartment im fünften Stock',
          'Detalle interior del apartamento AMARA Playa en la quinta planta',
          'Interieurdetail van appartement AMARA Playa op de vijfde verdieping',
          'Interiördetalj i lägenheten AMARA Playa på femte våningen'
        ),
        caption: localized(
          'A fifth-floor apartment with a lift, balcony and side sea view.',
          'Ein Apartment im fünften Stock mit Aufzug, Balkon und seitlichem Meerblick.',
          'Un apartamento en la quinta planta con ascensor, balcón y vistas laterales al mar.',
          'Een appartement op de vijfde verdieping met lift, balkon en zijdelings zeezicht.',
          'En lägenhet på femte våningen med hiss, balkong och havsutsikt från sidan.'
        )
      }
    ]
  },
  playa: {
    eyebrow: localized('First-party location proof', 'Standortbeleg aus erster Hand', 'Prueba directa de la ubicación', 'Locatiebewijs uit eerste hand', 'Förstahandsbevis för läget'),
    title: localized(
      'What the Torrecilla stay model looks like at AMARA Playa',
      'So sieht die Torrecilla-Wohnlage im AMARA Playa aus',
      'Así se vive el modelo Torrecilla en AMARA Playa',
      'Zo ziet het Torrecilla-verblijf eruit bij AMARA Playa',
      'Så ser boendemodellen i Torrecilla ut på AMARA Playa'
    ),
    intro: localized(
      'AMARA Playa is not the reason to choose Torrecilla. It is AMARA’s concrete example of the area: an owner-operated apartment in west-central Nerja for guests who want coast and centre to fit into the same stay.',
      'AMARA Playa ist nicht der Grund, Torrecilla zu wählen. Es ist AMARAs konkretes Beispiel für diese Lage: ein inhabergeführtes Apartment im westlichen Zentrum für Gäste, die Küste und Ort in einem Aufenthalt verbinden möchten.',
      'AMARA Playa no es el motivo para elegir Torrecilla. Es el ejemplo concreto de AMARA en esta zona: un apartamento gestionado por sus propietarios en el centro-oeste para quienes quieren combinar costa y centro en una misma estancia.',
      'AMARA Playa is niet de reden om Torrecilla te kiezen. Het is AMARA’s concrete voorbeeld van dit gebied: een door de eigenaren beheerd appartement in westelijk-centraal Nerja voor gasten die kust en centrum in één verblijf willen combineren.',
      'AMARA Playa är inte skälet att välja Torrecilla. Det är AMARAs konkreta exempel på området: en ägardriven lägenhet i västcentrala Nerja för gäster som vill förena kust och centrum under samma vistelse.'
    ),
    proofPoints: localized(
      [
        'Calle Castilla Pérez 60 in the Torrecilla / west-central stay environment.',
        'Fifth-floor apartment with a lift, full kitchen, washing machine and air conditioning.',
        'Balcony with a side sea view and accommodation designed for two guests.'
      ],
      [
        'Calle Castilla Pérez 60 in der Wohnlage Torrecilla / westliches Zentrum.',
        'Apartment im fünften Stock mit Aufzug, vollständiger Küche, Waschmaschine und Klimaanlage.',
        'Balkon mit seitlichem Meerblick und eine Unterkunft für zwei Gäste.'
      ],
      [
        'Calle Castilla Pérez 60, dentro del entorno Torrecilla / centro-oeste.',
        'Apartamento en la quinta planta con ascensor, cocina completa, lavadora y aire acondicionado.',
        'Balcón con vistas laterales al mar y alojamiento pensado para dos personas.'
      ],
      [
        'Calle Castilla Pérez 60 in het verblijfsgebied Torrecilla / westelijk centrum.',
        'Appartement op de vijfde verdieping met lift, volledige keuken, wasmachine en airconditioning.',
        'Balkon met zijdelings zeezicht en een verblijf ingericht voor twee gasten.'
      ],
      [
        'Calle Castilla Pérez 60 i boendemiljön Torrecilla / västcentrala Nerja.',
        'Lägenhet på femte våningen med hiss, fullt kök, tvättmaskin och luftkonditionering.',
        'Balkong med havsutsikt från sidan och boende utformat för två gäster.'
      ]
    ),
    limitation: localized(
      'The sea view is lateral rather than panoramic, and the compact apartment prioritises an easy location over villa-style space.',
      'Der Meerblick ist seitlich statt panoramisch, und das kompakte Apartment setzt eine praktische Lage über villaartige Großzügigkeit.',
      'Las vistas al mar son laterales, no panorámicas, y el apartamento compacto prioriza una ubicación práctica frente al espacio de una villa.',
      'Het zeezicht is zijdelings en niet panoramisch; het compacte appartement geeft een praktische ligging voorrang boven villa-achtige ruimte.',
      'Havsutsikten är från sidan, inte panoramisk, och den kompakta lägenheten prioriterar ett enkelt läge framför villaliknande utrymme.'
    ),
    cta: localized('See AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Se AMARA Playa')
  },
  faq: {
    decisionTitle: localized('Choose your Nerja base in three steps', 'Eure Nerja-Basis in drei Schritten', 'Elegid vuestra base en tres pasos', 'Kies jullie Nerja-basis in drie stappen', 'Välj er bas i Nerja i tre steg'),
    steps: [
      {
        num: '01',
        h: localized('Choose the daily priority', 'Die tägliche Priorität wählen', 'Elegid la prioridad diaria', 'Kies de dagelijkse prioriteit', 'Välj vardagens prioritet'),
        t: localized(
          'Decide whether beach, old-town life or residential space should be easiest every day.',
          'Entscheidet, ob Strand, Altstadtleben oder Wohnraum jeden Tag am einfachsten erreichbar sein soll.',
          'Decidid si cada día debe resultar más fácil la playa, la vida del casco antiguo o el espacio residencial.',
          'Bepaal of strand, oude-stadsleven of woonruimte elke dag het makkelijkst moet zijn.',
          'Avgör om strand, livet i gamla stan eller boendeutrymme ska vara enklast varje dag.'
        )
      },
      {
        num: '02',
        h: localized('Check the repeated route', 'Den wiederholten Weg prüfen', 'Comprobad el recorrido repetido', 'Controleer de dagelijkse route', 'Kontrollera det återkommande stråket'),
        t: localized(
          'Look beyond map distance and account for slopes, steps and the return journey.',
          'Schaut über die Kartendistanz hinaus und berücksichtigt Steigungen, Stufen und den Rückweg.',
          'Mirad más allá de la distancia del mapa y tened en cuenta cuestas, escaleras y el camino de vuelta.',
          'Kijk verder dan de afstand op de kaart en houd rekening met hellingen, trappen en de terugweg.',
          'Se bortom kartavståndet och räkna med lutningar, trappor och återvägen.'
        )
      },
      {
        num: '03',
        h: localized('Give the car a clear role', 'Dem Auto eine klare Rolle geben', 'Dad un papel claro al coche', 'Geef de auto een duidelijke rol', 'Ge bilen en tydlig roll'),
        t: localized(
          'Choose whether the car should stay parked, support regional days or be part of most routines.',
          'Entscheidet, ob das Auto stehen bleiben, regionale Ausflüge ermöglichen oder zu den meisten Wegen gehören soll.',
          'Decidid si el coche debe quedarse aparcado, servir para explorar la región o formar parte de casi todas las rutinas.',
          'Bepaal of de auto geparkeerd blijft, regionale dagen ondersteunt of bij de meeste routines hoort.',
          'Bestäm om bilen ska stå parkerad, stödja utflykter i regionen eller ingå i de flesta rutiner.'
        )
      }
    ],
    faqTitle: localized('Nerja stay questions', 'Fragen zum Aufenthalt in Nerja', 'Preguntas para alojarse en Nerja', 'Vragen over verblijven in Nerja', 'Frågor om att bo i Nerja'),
    items: [
      {
        q: localized('Which part of Nerja is easiest without a car?', 'Welche Lage in Nerja ist ohne Auto am einfachsten?', '¿Qué zona de Nerja resulta más fácil sin coche?', 'Welk deel van Nerja is het makkelijkst zonder auto?', 'Vilken del av Nerja är enklast utan bil?'),
        a: localized(
          'The Old Town, Torrecilla and Carabeo can all support car-free stays when the precise street gives practical access to shops, restaurants and the routes you expect to use. Torrecilla is especially balanced for guests combining coast and centre.',
          'Altstadt, Torrecilla und Carabeo können alle ohne Auto funktionieren, wenn die konkrete Straße praktische Wege zu Geschäften, Restaurants und euren wichtigsten Routen bietet. Torrecilla ist besonders ausgewogen, wenn Küste und Zentrum zusammengehören sollen.',
          'Casco antiguo, Torrecilla y Carabeo pueden funcionar sin coche si la calle concreta facilita el acceso a tiendas, restaurantes y los recorridos que pensáis repetir. Torrecilla ofrece un equilibrio especialmente cómodo entre costa y centro.',
          'Oude centrum, Torrecilla en Carabeo kunnen allemaal zonder auto werken wanneer de precieze straat praktische toegang geeft tot winkels, restaurants en jullie vaste routes. Torrecilla is bijzonder evenwichtig voor wie kust en centrum combineert.',
          'Gamla stan, Torrecilla och Carabeo kan alla fungera utan bil när den exakta gatan ger praktisk tillgång till butiker, restauranger och de stråk ni tänker använda. Torrecilla är särskilt balanserat för gäster som kombinerar kust och centrum.'
        )
      },
      {
        q: localized('Is Nerja hilly?', 'Ist Nerja hügelig?', '¿Nerja tiene muchas cuestas?', 'Is Nerja heuvelachtig?', 'Är Nerja backigt?'),
        a: localized(
          'Nerja is not uniformly flat. Central streets can be comfortable on foot, but cliffs, beach steps, the climb back from Burriana and residential hills materially change some routes.',
          'Nerja ist nicht überall flach. Zentrale Straßen können angenehm zu Fuß sein, doch Klippen, Strandstufen, der Anstieg von Burriana und Wohnlagen am Hang verändern manche Wege deutlich.',
          'Nerja no es uniformemente llana. Muchas calles céntricas resultan cómodas a pie, pero los acantilados, las escaleras de playa, la subida desde Burriana y las zonas residenciales en ladera cambian bastante algunos recorridos.',
          'Nerja is niet overal vlak. Centrale straten kunnen prettig beloopbaar zijn, maar kliffen, strandtrappen, de klim terug uit Burriana en woonwijken op de heuvel veranderen sommige routes duidelijk.',
          'Nerja är inte jämnt platt. Centrala gator kan vara bekväma till fots, men klippor, strandtrappor, stigningen tillbaka från Burriana och bostadsområden på höjden förändrar vissa stråk tydligt.'
        )
      },
      {
        q: localized('Should we stay near the beach or near the old town?', 'Sollten wir am Strand oder nahe der Altstadt wohnen?', '¿Conviene alojarse cerca de la playa o del casco antiguo?', 'Kunnen we beter bij het strand of het oude centrum verblijven?', 'Ska vi bo nära stranden eller gamla stan?'),
        a: localized(
          'Choose a beach-first area when returning easily from the sea matters most. Choose the Old Town when dinners and evening life should be effortless. Torrecilla and Carabeo offer different compromises between the two.',
          'Wählt eine strandorientierte Lage, wenn der einfache Rückweg vom Meer am wichtigsten ist. Wählt die Altstadt für mühelose Abendessen und Abende. Torrecilla und Carabeo bieten unterschiedliche Kompromisse dazwischen.',
          'Elegid una zona de playa si lo más importante es volver fácilmente del mar. Elegid el casco antiguo si queréis cenas y tardes sin planificación. Torrecilla y Carabeo ofrecen dos equilibrios distintos entre ambas opciones.',
          'Kies een strandgerichte buurt wanneer makkelijk terugkomen van zee vooropstaat. Kies het oude centrum wanneer eten en avondleven moeiteloos moeten zijn. Torrecilla en Carabeo bieden verschillende compromissen ertussenin.',
          'Välj ett strandorienterat område när enkel återkomst från havet betyder mest. Välj gamla stan när middagar och kvällsliv ska vara okomplicerade. Torrecilla och Carabeo erbjuder olika kompromisser mellan dem.'
        )
      },
      {
        q: localized('Do we need a car in Nerja?', 'Brauchen wir in Nerja ein Auto?', '¿Necesitamos coche en Nerja?', 'Hebben we een auto nodig in Nerja?', 'Behöver vi bil i Nerja?'),
        a: localized(
          'Not for a well-chosen central stay. A car becomes more useful in outer residential locations and for repeated regional exploration. In central Nerja it can also create parking and access friction.',
          'Für einen gut gewählten zentralen Aufenthalt nicht. In äußeren Wohnlagen und für regelmäßige regionale Ausflüge wird ein Auto nützlicher. Im Zentrum kann es zugleich Park- und Zufahrtsprobleme verursachen.',
          'No para una estancia céntrica bien elegida. El coche resulta más útil en zonas residenciales exteriores y para explorar la región con frecuencia. En el centro también puede generar dificultades de acceso y aparcamiento.',
          'Niet voor een goed gekozen centraal verblijf. Een auto wordt nuttiger in buitenwijken en voor herhaalde regionale uitstappen. In centraal Nerja kan hij ook parkeer- en toegangsfrictie veroorzaken.',
          'Inte för ett väl valt centralt boende. En bil blir mer användbar i yttre bostadsområden och för återkommande utflykter i regionen. I centrala Nerja kan den samtidigt skapa parkerings- och tillträdesbesvär.'
        )
      },
      {
        q: localized('Is Burriana easy to walk to from the centre?', 'Ist Burriana vom Zentrum aus leicht zu Fuß erreichbar?', '¿Es fácil ir andando del centro a Burriana?', 'Is Burriana makkelijk te voet bereikbaar vanuit het centrum?', 'Är Burriana lätt att gå till från centrum?'),
        a: localized(
          'The route is walkable for many guests, but the return toward central Nerja includes meaningful elevation. Judge it by the repeated uphill return, not only by the horizontal distance shown on the map.',
          'Für viele Gäste ist der Weg zu Fuß machbar, doch der Rückweg Richtung Zentral-Nerja enthält spürbare Steigung. Bewertet ihn nach dem wiederholten Anstieg, nicht nur nach der horizontalen Kartendistanz.',
          'Muchas personas pueden hacer el recorrido a pie, pero la vuelta hacia el centro de Nerja incluye una subida importante. Valorad el trayecto por ese regreso repetido, no solo por la distancia horizontal del mapa.',
          'De route is voor veel gasten beloopbaar, maar de terugweg naar centraal Nerja bevat een duidelijke stijging. Beoordeel hem op die herhaalde klim en niet alleen op de horizontale afstand op de kaart.',
          'Stråket är gångbart för många gäster, men återvägen mot centrala Nerja innehåller en tydlig stigning. Bedöm det utifrån den återkommande uppförsvägen, inte bara kartans horisontella avstånd.'
        )
      },
      {
        q: localized('Can we easily combine Nerja and Frigiliana in one stay?', 'Lassen sich Nerja und Frigiliana gut in einem Aufenthalt verbinden?', '¿Se pueden combinar fácilmente Nerja y Frigiliana en una estancia?', 'Kunnen we Nerja en Frigiliana makkelijk in één verblijf combineren?', 'Kan vi enkelt kombinera Nerja och Frigiliana under en vistelse?'),
        a: localized(
          'Yes. Treat them as two connected bases rather than competing destinations. Choose where you want to wake up — coast-first Nerja or village-first Frigiliana — and visit the other during the stay.',
          'Ja. Betrachtet sie als zwei verbundene Basen statt als konkurrierende Reiseziele. Entscheidet, wo ihr aufwachen möchtet – im küstenorientierten Nerja oder im dörflichen Frigiliana – und besucht den anderen Ort während des Aufenthalts.',
          'Sí. Entendedlas como dos bases conectadas, no como destinos rivales. Elegid dónde queréis despertar — en la Nerja costera o en la Frigiliana de pueblo — y visitad la otra durante la estancia.',
          'Ja. Zie ze als twee verbonden bases en niet als concurrerende bestemmingen. Kies waar jullie wakker willen worden — in kustgericht Nerja of dorpsgericht Frigiliana — en bezoek de andere plek tijdens het verblijf.',
          'Ja. Se dem som två sammanlänkade baser i stället för konkurrerande resmål. Välj var ni vill vakna – i kustorienterade Nerja eller byorienterade Frigiliana – och besök den andra under vistelsen.'
        )
      }
    ]
  }
} as const;
