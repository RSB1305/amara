import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export type CasaAmaraGroupGuideToken =
  | 'getting_to_frigiliana'
  | 'frigiliana_parking'
  | 'frigiliana_stairs'
  | 'location_frigiliana';





export const casaAmaraGroupsSeo: AmaraAuthoringSeo = {
  version: '2026-08-18-casa-amara-groups-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-maha/29-amara-frigiliana.jpg',
  languages: {
    en: {
      title: 'Casa AMARA: four apartments for 4–8 in Frigiliana | AMARA',
      description: 'Four apartments behind one front door in the heart of Frigiliana’s old town: for two couples, a family with grown-up children or friends. Each with its own bathroom, together on the terrace in the evening.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Casa AMARA: vier Wohnungen für 4–8 in Frigiliana | AMARA',
      description: 'Vier Wohnungen hinter einer Haustür mitten in Frigilianas Altstadt: für zwei Paare, eine Familie mit erwachsenen Kindern oder Freunde. Jeder mit eigenem Bad, abends zusammen auf der Terrasse.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Casa AMARA: cuatro apartamentos para 4–8 en Frigiliana | AMARA',
      description: 'Cuatro apartamentos detrás de una misma puerta en pleno casco antiguo de Frigiliana: para dos parejas, una familia con hijos adultos o amigos. Cada uno con su baño, y por la noche juntos en la terraza.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Casa AMARA: vier appartementen voor 4–8 in Frigiliana | AMARA',
      description: 'Vier appartementen achter één voordeur midden in de oude kern van Frigiliana: voor twee stellen, een gezin met volwassen kinderen of vrienden. Elk met eigen badkamer, ’s avonds samen op het terras.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Casa AMARA: fyra lägenheter för 4–8 i Frigiliana | AMARA',
      description: 'Fyra lägenheter bakom en och samma dörr mitt i Frigilianas gamla by: för två par, en familj med vuxna barn eller vänner. Var och en med eget badrum, på kvällen tillsammans på terrassen.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const casaAmaraGroupsContent = {
  hero: {
    kicker: l("FRIGILIANA · 4–8 GUESTS", "FRIGILIANA · 4–8 GÄSTE", "FRIGILIANA · 4–8 HUÉSPEDES", "FRIGILIANA · 4–8 GASTEN", "FRIGILIANA · 4–8 GÄSTER"),
    title: l("Together in Frigiliana, each with your own door", "Zusammen in Frigiliana, jeder mit eigener Tür", "Juntos en Frigiliana, cada uno con su propia puerta", "Samen in Frigiliana, ieder met een eigen deur", "Tillsammans i Frigiliana, var och en med egen dörr"),
    lead: l("Casa AMARA has four apartments behind one green front door, in the middle of the old town. Two couples, a family with grown-up children or four friends: everyone has their own bathroom and their own door, and in the evening you meet on Maha’s terrace.", "Casa AMARA hat vier Wohnungen hinter einer grünen Haustür, mitten in der Altstadt. Zwei Paare, eine Familie mit erwachsenen Kindern oder vier Freunde: Jeder hat sein eigenes Bad und seine eigene Tür, und abends trefft ihr euch auf Mahas Terrasse.", "Casa AMARA tiene cuatro apartamentos detrás de una puerta verde, en pleno casco antiguo. Dos parejas, una familia con hijos adultos o cuatro amigos: cada uno tiene su baño y su puerta, y por la noche os encontráis en la terraza de Maha.", "Casa AMARA heeft vier appartementen achter één groene voordeur, midden in de oude kern. Twee stellen, een gezin met volwassen kinderen of vier vrienden: iedereen heeft een eigen badkamer en een eigen deur, en ’s avonds komen jullie samen op het terras van Maha.", "Casa AMARA har fyra lägenheter bakom en grön ytterdörr, mitt i gamla byn. Två par, en familj med vuxna barn eller fyra vänner: alla har eget badrum och egen dörr, och på kvällen träffas ni på Mahas terrass."),
    facts: l("3 apartments · 1 compact suite · 4 private bathrooms", "3 Apartments · 1 kompakte Suite · 4 private Bäder", "3 apartamentos · 1 suite compacta · 4 baños privados", "3 appartementen · 1 compacte suite · 4 privébadkamers", "3 lägenheter · 1 kompakt svit · 4 privata badrum"),
    qualifier: l("For four to eight guests who travel together and still want their own peace.", "Für vier bis acht Gäste, die zusammen reisen und trotzdem ihre Ruhe haben wollen.", "Para entre cuatro y ocho huéspedes que viajan juntos y aun así quieren su tranquilidad.", "Voor vier tot acht gasten die samen reizen en toch hun rust willen.", "För fyra till åtta gäster som reser tillsammans och ändå vill ha sitt lugn."),
    primaryCta: l("Enquire for 4–8 guests", "Für 4–8 Gäste anfragen", "Consultar para 4–8 huéspedes", "Informeer voor 4–8 gasten", "Skicka förfrågan för 4–8 gäster"),
    secondaryCta: l("Compare the four stays", "Die vier Unterkünfte vergleichen", "Comparar los cuatro alojamientos", "Vergelijk de vier verblijven", "Jämför de fyra boendena"),
  },
  model: {
    eyebrow: l("ONE HOUSE, SEVERAL STAYS", "EIN HAUS, MEHRERE UNTERKÜNFTE", "UNA CASA, VARIOS ALOJAMIENTOS", "ÉÉN HUIS, MEERDERE VERBLIJVEN", "ETT HUS, FLERA BOENDEN"),
    title: l("Two, three or all four", "Zwei, drei oder alle vier", "Dos, tres o los cuatro", "Twee, drie of alle vier", "Två, tre eller alla fyra"),
    intro: l("Each apartment is made for two. Depending on how many you are, we put **two, three or all four together for the same nights**.", "Jede Wohnung ist für zwei gemacht. Je nachdem, wie viele ihr seid, legen wir **zwei, drei oder alle vier für dieselben Nächte** zusammen.", "Cada apartamento está hecho para dos. Según cuántos seáis, juntamos **dos, tres o los cuatro para las mismas noches**.", "Elk appartement is gemaakt voor twee. Afhankelijk van hoeveel jullie zijn, leggen we **twee, drie of alle vier voor dezelfde nachten** samen.", "Varje lägenhet är gjord för två. Beroende på hur många ni är lägger vi ihop **två, tre eller alla fyra för samma nätter**."),
    options: [
      {
        guests: l("4 GUESTS", "4 GÄSTE", "4 HUÉSPEDES", "4 GASTEN", "4 GÄSTER"),
        title: l("Two apartments", "Zwei Wohnungen", "Dos apartamentos", "Twee appartementen", "Två lägenheter"),
        text: l("Two couples or four friends, door to door and still each to themselves.", "Zwei Paare oder vier Freunde, Tür an Tür und trotzdem jeder für sich.", "Dos parejas o cuatro amigos, puerta con puerta y aun así cada uno a lo suyo.", "Twee stellen of vier vrienden, deur aan deur en toch ieder voor zich.", "Två par eller fyra vänner, dörr mot dörr och ändå var för sig.")
      },
      {
        guests: l("5–6 GUESTS", "5–6 GÄSTE", "5–6 HUÉSPEDES", "5–6 GASTEN", "5–6 GÄSTER"),
        title: l("Three apartments", "Drei Wohnungen", "Tres apartamentos", "Drie appartementen", "Tre lägenheter"),
        text: l("Three bedrooms, three bathrooms, three doors. For a family with grown-up children or three couples.", "Drei Schlafzimmer, drei Bäder, drei Türen. Für eine Familie mit erwachsenen Kindern oder drei Paare.", "Tres dormitorios, tres baños, tres puertas. Para una familia con hijos adultos o tres parejas.", "Drie slaapkamers, drie badkamers, drie deuren. Voor een gezin met volwassen kinderen of drie stellen.", "Tre sovrum, tre badrum, tre dörrar. För en familj med vuxna barn eller tre par.")
      },
      {
        guests: l("7–8 GUESTS", "7–8 GÄSTE", "7–8 HUÉSPEDES", "7–8 GASTEN", "7–8 GÄSTER"),
        title: l("The whole house", "Das ganze Haus", "La casa entera", "Het hele huis", "Hela huset"),
        text: l("Farah, Lounis, Zaid and Maha together: then you are the only ones in the house.", "Farah, Lounis, Zaid und Maha zusammen: Dann seid ihr die Einzigen im Haus.", "Farah, Lounis, Zaid y Maha juntos: entonces sois los únicos en la casa.", "Farah, Lounis, Zaid en Maha samen: dan zijn jullie de enigen in het huis.", "Farah, Lounis, Zaid och Maha tillsammans: då är ni de enda i huset.")
      }
    ],
    note: l("Which apartments are free, we tell you for your dates.", "Welche Wohnungen frei sind, sagen wir euch für eure Daten.", "Qué apartamentos están libres os lo decimos para vuestras fechas.", "Welke appartementen vrij zijn, vertellen we jullie voor jullie data.", "Vilka lägenheter som är lediga berättar vi för era datum.")
  },
  stays: {
    eyebrow: l("THE FOUR STAYS", "DIE VIER UNTERKÜNFTE", "LOS CUATRO ALOJAMIENTOS", "DE VIER VERBLIJVEN", "DE FYRA BOENDENA"),
    title: l("Different characters, one address", "Unterschiedlicher Charakter, dieselbe Adresse", "Personalidades distintas, una misma dirección", "Een eigen karakter, hetzelfde adres", "Olika karaktär, samma adress"),
    intro: l("All four are at Calle Chorruelo 5, behind the same green front door. Each has its own entrance and its own bathroom; Lounis, Zaid and Maha have a kitchen, Farah a tea kitchen.", "Alle vier liegen in der Calle Chorruelo 5, hinter derselben grünen Haustür. Jede hat ihren eigenen Eingang und ihr eigenes Bad; Lounis, Zaid und Maha haben eine Küche, Farah eine Teeküche.", "Los cuatro están en la calle Chorruelo 5, detrás de la misma puerta verde. Cada uno tiene su entrada y su baño; Lounis, Zaid y Maha tienen cocina, Farah una cocinita.", "Alle vier liggen aan Calle Chorruelo 5, achter dezelfde groene voordeur. Elk heeft een eigen ingang en eigen badkamer; Lounis, Zaid en Maha hebben een keuken, Farah een theekeuken.", "Alla fyra ligger på Calle Chorruelo 5, bakom samma gröna ytterdörr. Var och en har egen entré och eget badrum; Lounis, Zaid och Maha har kök, Farah ett pentry."),
    contexts: {
      farah: l("The compact suite: one step at the front door, then everything on one level. For those who prefer to eat out.", "Die kompakte Suite: eine Stufe an der Haustür, dann alles auf einer Ebene. Für die, die lieber essen gehen.", "La suite compacta: un escalón en la puerta, luego todo en una planta. Para quienes prefieren salir a comer.", "De compacte suite: één trede bij de voordeur, daarna alles op één niveau. Voor wie liever uit eten gaat.", "Den kompakta suiten: ett trappsteg vid ytterdörren, sedan allt på ett plan. För er som hellre äter ute."),
      lounis: l("The largest apartment in the house, with a 39 m² terrace, kitchen and the old well.", "Die größte Wohnung im Haus, mit 39 m² Terrasse, Küche und dem alten Brunnen.", "El apartamento más grande de la casa, con 39 m² de terraza, cocina y el antiguo pozo.", "Het grootste appartement van het huis, met 39 m² terras, keuken en de oude bron.", "Husets största lägenhet, med 39 m² terrass, kök och den gamla brunnen."),
      zaid: l("The widest bed in the house and a terrace that can be joined with Maha’s.", "Das breiteste Bett im Haus und eine Terrasse, die sich mit Mahas verbinden lässt.", "La cama más ancha de la casa y una terraza que se puede unir con la de Maha.", "Het breedste bed van het huis en een terras dat met dat van Maha verbonden kan worden.", "Husets bredaste säng och en terrass som kan förbindas med Mahas."),
      maha: l("Right at the top: a 64 m² terrace with outdoor kitchen and room for all eight in the evening.", "Ganz oben: 64 m² Terrasse mit Außenküche und Platz für alle acht am Abend.", "Arriba del todo: 64 m² de terraza con cocina exterior y sitio para los ocho por la noche.", "Helemaal boven: 64 m² terras met buitenkeuken en plek voor alle acht ’s avonds.", "Högst upp: 64 m² terrass med utekök och plats för alla åtta på kvällen.")
    },
    linkLabel: l("View this stay", "Unterkunft ansehen", "Ver este alojamiento", "Bekijk dit verblijf", "Se boendet"),
    labels: {
      guests: l("guests", "Gäste", "huéspedes", "gasten", "gäster"),
      bathroom: l("private bathroom", "privates Bad", "baño privado", "privébadkamer", "privat badrum"),
      bed: l("Bed", "Bett", "Cama", "Bed", "Säng"),
      kitchen: l("Kitchen", "Küche", "Cocina", "Keuken", "Kök"),
      outdoor: l("Outdoor space", "Außenbereich", "Espacio exterior", "Buitenruimte", "Uteplats"),
      access: l("Access", "Zugang", "Acceso", "Toegang", "Tillträde")
    }
  },
  connection: {
    eyebrow: l("CONNECTED WHEN YOU NEED IT", "VERBUNDEN, WENN IHR ES BRAUCHT", "CONECTADOS CUANDO LO NECESITÁIS", "VERBONDEN WANNEER JULLIE DAT WILLEN", "SAMMANKOPPLAT NÄR NI BEHÖVER DET"),
    title: l("Zaid and Maha: one door, two terraces", "Zaid und Maha: eine Tür, zwei Terrassen", "Zaid y Maha: una puerta, dos terrazas", "Zaid en Maha: één deur, twee terrassen", "Zaid och Maha: en dörr, två terrasser"),
    paragraphs: [
      l("An outdoor staircase with a small door links the two terraces. Normally it stays locked; when you have both apartments we open it, and in the evening you walk from one terrace to the other.", "Eine Außentreppe mit einer kleinen Tür verbindet die beiden Terrassen. Sonst bleibt sie zu; wenn ihr beide Wohnungen habt, schließen wir sie auf, und ihr geht abends von einer Terrasse zur anderen.", "Una escalera exterior con una puertecita une las dos terrazas. Normalmente está cerrada; cuando tenéis los dos apartamentos la abrimos, y por la noche pasáis de una terraza a la otra.", "Een buitentrap met een klein deurtje verbindt de twee terrassen. Normaal blijft het dicht; als jullie beide appartementen hebben, maken we het open en lopen jullie ’s avonds van het ene terras naar het andere.", "En utomhustrappa med en liten dörr förbinder de två terrasserna. Annars är den låst; när ni har båda lägenheterna låser vi upp, och på kvällen går ni från den ena terrassen till den andra."),
      l("Maha’s terrace seats all eight. Meals happen in small rounds or in the village: there is no dining table for eight in the house.", "Auf Mahas Terrasse sitzen alle acht. Gegessen wird in kleinen Runden oder im Dorf: Einen Esstisch für acht gibt es im Haus nicht.", "En la terraza de Maha caben los ocho. Se come en grupos pequeños o en el pueblo: en la casa no hay mesa de comedor para ocho.", "Op het terras van Maha zitten alle acht. Gegeten wordt in kleine groepjes of in het dorp: een eettafel voor acht is er in het huis niet.", "På Mahas terrass sitter alla åtta. Ni äter i mindre grupper eller i byn: ett matbord för åtta finns inte i huset.")
    ],
    facts: [
      {
        title: l("Together", "Gemeinsam", "Juntos", "Samen", "Tillsammans"),
        text: l("One front door, connected terraces at Zaid and Maha, room for eight at Maha’s in the evening.", "Eine Haustür, verbundene Terrassen bei Zaid und Maha, Platz für acht bei Maha am Abend.", "Una puerta, terrazas unidas en Zaid y Maha, sitio para ocho en Maha por la noche.", "Eén voordeur, verbonden terrassen bij Zaid en Maha, plek voor acht bij Maha ’s avonds.", "En ytterdörr, sammanbundna terrasser hos Zaid och Maha, plats för åtta hos Maha på kvällen.")
      },
      {
        title: l("Still private", "Trotzdem privat", "Con privacidad", "Toch privé", "Ändå privat"),
        text: l("Four doors, four bathrooms, four bedrooms, three kitchens and Farah’s tea kitchen.", "Vier Türen, vier Bäder, vier Schlafzimmer, drei Küchen und Farahs Teeküche.", "Cuatro puertas, cuatro baños, cuatro dormitorios, tres cocinas y la cocinita de Farah.", "Vier deuren, vier badkamers, vier slaapkamers, drie keukens en de theekeuken van Farah.", "Fyra dörrar, fyra badrum, fyra sovrum, tre kök och Farahs pentry.")
      },
      {
        title: l("The house to yourselves", "Das Haus für euch", "La casa para vosotros", "Het huis voor jullie", "Huset för er"),
        text: l("With all four apartments you are the only guests in the house.", "Mit allen vier Wohnungen seid ihr die einzigen Gäste im Haus.", "Con los cuatro apartamentos sois los únicos huéspedes de la casa.", "Met alle vier de appartementen zijn jullie de enige gasten in het huis.", "Med alla fyra lägenheterna är ni de enda gästerna i huset.")
      }
    ],
  },
  fit: {
    eyebrow: l("IS CASA AMARA RIGHT FOR YOU?", "PASST CASA AMARA ZU EUCH?", "¿ES CASA AMARA PARA VOSOTROS?", "PAST CASA AMARA BIJ JULLIE?", "PASSAR CASA AMARA ER?"),
    title: l("A village house with four apartments", "Ein Dorfhaus mit vier Wohnungen", "Una casa de pueblo con cuatro apartamentos", "Een dorpshuis met vier appartementen", "Ett byhus med fyra lägenheter"),
    intro: l("You live together under one old roof, each behind your own door, and the village begins outside the green front door.", "Ihr wohnt zusammen unter einem alten Dach, jeder hinter seiner eigenen Tür, und das Dorf beginnt vor der grünen Haustür.", "Vivís juntos bajo un mismo tejado antiguo, cada uno detrás de su puerta, y el pueblo empieza al salir por la puerta verde.", "Jullie wonen samen onder één oud dak, ieder achter een eigen deur, en het dorp begint voor de groene voordeur.", "Ni bor tillsammans under ett gammalt tak, var och en bakom sin egen dörr, och byn börjar utanför den gröna ytterdörren."),
    worksTitle: l("Especially well suited to", "Besonders passend für", "Especialmente adecuado para", "Bijzonder geschikt voor", "Passar särskilt bra för"),
    works: [
      l("Two to four couples", "Zwei bis vier Paare", "De dos a cuatro parejas", "Twee tot vier stellen", "Två till fyra par"),
      l("Families with grown-up children, three generations included", "Familien mit erwachsenen Kindern, auch über drei Generationen", "Familias con hijos adultos, también de tres generaciones", "Gezinnen met volwassen kinderen, ook over drie generaties", "Familjer med vuxna barn, även över tre generationer"),
      l("Friends who sit on the terrace in the evening", "Freunde, die abends auf der Terrasse sitzen", "Amigos que se sientan en la terraza por la noche", "Vrienden die ’s avonds op het terras zitten", "Vänner som sitter på terrassen om kvällen"),
      l("Wedding guests, 15 metres from San Antonio", "Hochzeitsgäste, 15 Meter von San Antonio", "Invitados de boda, a 15 metros de San Antonio", "Bruiloftsgasten, 15 meter van San Antonio", "Bröllopsgäster, 15 meter från San Antonio")
    ],
    limitsTitle: l("Good to know", "Gut zu wissen", "Conviene saberlo", "Goed om te weten", "Bra att veta"),
    limits: [
      l("Terraces instead of a pool, Maha’s terrace instead of a living room for all", "Terrassen statt Pool, Mahas Terrasse statt Wohnzimmer für alle", "Terrazas en vez de piscina, la terraza de Maha en vez de un salón para todos", "Terrassen in plaats van een zwembad, het terras van Maha in plaats van een woonkamer voor iedereen", "Terrasser i stället för pool, Mahas terrass i stället för ett vardagsrum för alla"),
      l("Meals in small rounds or in the village", "Gegessen wird in kleinen Runden oder im Dorf", "Se come en grupos pequeños o en el pueblo", "Gegeten wordt in kleine groepjes of in het dorp", "Ni äter i mindre grupper eller i byn"),
      l("A quiet house in the middle of the old town, made for living in", "Ein ruhiges Haus mitten in der Altstadt, gedacht zum Wohnen", "Una casa tranquila en pleno casco antiguo, pensada para vivirla", "Een rustig huis midden in de oude kern, bedoeld om in te wonen", "Ett lugnt hus mitt i gamla byn, tänkt att bo i"),
      l("One step at the front door; Farah level after that, the other three with stairs", "Eine Stufe an der Haustür; Farah danach eben, die anderen drei mit Stufen", "Un escalón en la puerta; Farah después sin desniveles, los otros tres con escaleras", "Eén trede bij de voordeur; Farah daarna gelijkvloers, de andere drie met trappen", "Ett trappsteg vid ytterdörren; Farah sedan i ett plan, de tre andra med trappor")
    ],
    note: l("Four apartments in one house, combined for one group.", "Vier Wohnungen in einem Haus, für eine Gruppe zusammengelegt.", "Cuatro apartamentos en una casa, unidos para un grupo.", "Vier appartementen in één huis, samengevoegd voor één groep.", "Fyra lägenheter i ett hus, sammanlagda för en grupp."),
  },
  location: {
    eyebrow: l("IN FRIGILIANA OLD TOWN", "IN FRIGILIANAS ALTSTADT", "EN EL CASCO ANTIGUO DE FRIGILIANA", "IN DE OUDE KERN VAN FRIGILIANA", "I FRIGILIANAS GAMLA STAD"),
    title: l("Village life begins outside the door", "Das Dorfleben beginnt vor der Tür", "La vida del pueblo empieza al salir de casa", "Het dorpsleven begint voor de deur", "Bylivet börjar utanför dörren"),
    paragraphs: [
      l("Casa AMARA is on Calle Chorruelo, where it runs into Calle Real: restaurants, bars and the church of San Antonio are a few steps away. You can split up during the day and meet again in the evening in the village or on the terrace.", "Casa AMARA liegt an der Calle Chorruelo, wo sie in die Calle Real übergeht: Restaurants, Bars und die Kirche San Antonio sind ein paar Schritte. Ihr könnt euch tagsüber aufteilen und trefft euch abends im Dorf oder auf der Terrasse wieder.", "Casa AMARA está en la calle Chorruelo, donde se convierte en la calle Real: restaurantes, bares y la iglesia de San Antonio están a unos pasos. Podéis separaros durante el día y volver a encontraros por la noche en el pueblo o en la terraza.", "Casa AMARA ligt aan Calle Chorruelo, waar die overgaat in Calle Real: restaurants, bars en de kerk San Antonio zijn een paar stappen. Overdag kunnen jullie uit elkaar gaan en ’s avonds komen jullie weer samen in het dorp of op het terras.", "Casa AMARA ligger på Calle Chorruelo, där den övergår i Calle Real: restauranger, barer och kyrkan San Antonio ligger några steg bort. Ni kan dela upp er under dagen och träffas igen på kvällen i byn eller på terrassen."),
      l("You park on Avenida Carlos Cano; from there it is five minutes uphill over cobbles and around 30 steps. That works fine with suitcases. If someone finds walking hard, tell us beforehand.", "Geparkt wird an der Avenida Carlos Cano; von dort sind es fünf Minuten bergauf über Pflaster und rund 30 Stufen. Mit Koffern geht das gut. Wenn jemand schlecht zu Fuß ist, sagt es uns vorher.", "Se aparca en la avenida Carlos Cano; desde ahí son cinco minutos cuesta arriba por empedrado y unos 30 escalones. Con maletas se hace bien. Si alguien tiene dificultades para andar, decídnoslo antes.", "Parkeren doe je aan Avenida Carlos Cano; van daar is het vijf minuten omhoog over kinderkopjes en ongeveer 30 treden. Met koffers gaat dat prima. Als iemand slecht ter been is, zeg het ons vooraf.", "Ni parkerar på Avenida Carlos Cano; därifrån är det fem minuter uppför över kullersten och omkring 30 trappsteg. Med resväskor går det bra. Om någon har svårt att gå, säg det till oss i förväg.")
    ],
    links: [
      {
        token: "getting_to_frigiliana" as LinkToken,
        label: l("Getting to Frigiliana", "Anreise nach Frigiliana", "Cómo llegar a Frigiliana", "Naar Frigiliana reizen", "Resa till Frigiliana"),
        text: l("An hour from Málaga, by bus via Nerja.", "Eine Stunde ab Málaga, mit dem Bus über Nerja.", "Una hora desde Málaga, en autobús vía Nerja.", "Een uur vanaf Málaga, met de bus via Nerja.", "En timme från Málaga, med buss via Nerja.")
      },
      {
        token: "frigiliana_parking" as LinkToken,
        label: l("Parking in Frigiliana", "Parken in Frigiliana", "Aparcar en Frigiliana", "Parkeren in Frigiliana", "Parkering i Frigiliana"),
        text: l("Avenida Carlos Cano, before eleven or after five.", "Avenida Carlos Cano, vor elf oder nach fünf.", "Avenida Carlos Cano, antes de las once o después de las cinco.", "Avenida Carlos Cano, voor elf of na vijf uur.", "Avenida Carlos Cano, före elva eller efter fem.")
      },
      {
        token: "frigiliana_stairs" as LinkToken,
        label: l("Where to stay in Frigiliana", "Wo in Frigiliana übernachten?", "Dónde alojarse en Frigiliana", "Waar overnachten in Frigiliana?", "Var ska man bo i Frigiliana?"),
        text: l("Why our position down on the main axis matters.", "Warum unsere Lage unten an der Hauptachse zählt.", "Por qué cuenta nuestra ubicación abajo, en el eje principal.", "Waarom onze ligging beneden aan de hoofdas telt.", "Varför vårt läge nere vid huvudstråket spelar roll.")
      },
      {
        token: "location_frigiliana" as LinkToken,
        label: l("Living in the village", "Leben im Dorf", "Vivir en el pueblo", "Leven in het dorp", "Livet i byn"),
        text: l("Bread at Manolo’s, groceries at Silvia’s, dinner on foot in the evening.", "Brot bei Manolo, Einkauf bei Silvia, abends zu Fuß essen.", "El pan en Manolo, la compra en Silvia, y a cenar a pie por la noche.", "Brood bij Manolo, boodschappen bij Silvia, ’s avonds lopend uit eten.", "Bröd hos Manolo, matinköp hos Silvia, middag till fots på kvällen.")
      }
    ]
  },
  booking: {
    eyebrow: l("COMBINED AVAILABILITY", "GEMEINSAME VERFÜGBARKEIT", "DISPONIBILIDAD CONJUNTA", "GECOMBINEERDE BESCHIKBAARHEID", "GEMENSAM TILLGÄNGLIGHET"),
    title: l("One message, we put it together", "Eine Nachricht, wir legen zusammen", "Un mensaje, y nosotros lo combinamos", "Eén bericht, wij leggen het samen", "Ett meddelande, vi lägger ihop"),
    paragraphs: [
      l("Several apartments at once you book with us by message; the online calendar can only handle one at a time.", "Mehrere Wohnungen auf einmal bucht ihr bei uns per Nachricht; der Online-Kalender kann immer nur eine.", "Varios apartamentos a la vez se reservan con nosotros por mensaje; el calendario online solo puede con uno.", "Meerdere appartementen tegelijk boeken jullie bij ons per bericht; de online kalender kan er maar één tegelijk.", "Flera lägenheter på en gång bokar ni hos oss via meddelande; onlinekalendern klarar bara en åt gången."),
      l("Send us your dates, how many you are and who shares with whom. We reply with the free apartments and how to book them.", "Schickt uns eure Daten, wie viele ihr seid und wer mit wem wohnt. Wir antworten mit den freien Wohnungen und wie ihr sie bucht.", "Enviadnos vuestras fechas, cuántos sois y quién va con quién. Os respondemos con los apartamentos libres y cómo reservarlos.", "Stuur ons jullie data, hoeveel jullie zijn en wie bij wie woont. We antwoorden met de vrije appartementen en hoe jullie ze boeken.", "Skicka era datum, hur många ni är och vem som bor med vem. Vi svarar med de lediga lägenheterna och hur ni bokar dem.")
    ],
    steps: [
      {
        num: l("01", "01", "01", "01", "01"),
        headline: l("Send your dates", "Reisedaten senden", "Enviad las fechas", "Stuur jullie data", "Skicka era datum"),
        text: l("Arrival, departure and how many you are.", "Anreise, Abreise und wie viele ihr seid.", "Llegada, salida y cuántos sois.", "Aankomst, vertrek en hoeveel jullie zijn.", "Ankomst, avresa och hur många ni är.")
      },
      {
        num: l("02", "02", "02", "02", "02"),
        headline: l("We check the calendar", "Wir schauen in den Kalender", "Miramos el calendario", "Wij kijken in de kalender", "Vi tittar i kalendern"),
        text: l("Two, three or four apartments for the same nights.", "Zwei, drei oder vier Wohnungen für dieselben Nächte.", "Dos, tres o cuatro apartamentos para las mismas noches.", "Twee, drie of vier appartementen voor dezelfde nachten.", "Två, tre eller fyra lägenheter för samma nätter.")
      },
      {
        num: l("03", "03", "03", "03", "03"),
        headline: l("You get the arrangement", "Ihr bekommt die Aufteilung", "Recibís el reparto", "Jullie krijgen de verdeling", "Ni får fördelningen"),
        text: l("Who stays where, what it costs and how you book.", "Wer wo wohnt, was es kostet und wie ihr bucht.", "Quién se aloja dónde, cuánto cuesta y cómo reservar.", "Wie waar woont, wat het kost en hoe jullie boeken.", "Vem som bor var, vad det kostar och hur ni bokar.")
      }
    ],
    primaryCta: l("Enquire about your dates", "Verfügbarkeit anfragen", "Consultar vuestras fechas", "Informeer naar jullie data", "Fråga om era datum"),
    secondaryCta: l("Compare individual stays", "Einzelne Unterkünfte vergleichen", "Comparar alojamientos individuales", "Vergelijk afzonderlijke verblijven", "Jämför enskilda boenden")
  },
  faq: {
    title: l("What groups ask us", "Was Gruppen uns fragen", "Lo que nos preguntan los grupos", "Wat groepen ons vragen", "Vad grupper frågar oss"),
    items: [
      {
        question: l("Can eight people stay at Casa AMARA?", "Können acht Personen in Casa AMARA übernachten?", "¿Pueden alojarse ocho personas en Casa AMARA?", "Kunnen acht personen in Casa AMARA verblijven?", "Kan åtta personer bo i Casa AMARA?"),
        answer: l("Yes, in four apartments for two each. Eight is the maximum in the house.", "Ja, in vier Wohnungen für je zwei. Acht ist das Maximum im Haus.", "Sí, en cuatro apartamentos para dos cada uno. Ocho es el máximo en la casa.", "Ja, in vier appartementen voor elk twee. Acht is het maximum in het huis.", "Ja, i fyra lägenheter för två vardera. Åtta är maximum i huset.")
      },
      {
        question: l("Do we have the whole house to ourselves?", "Haben wir das ganze Haus für uns?", "¿Tendremos toda la casa para nosotros?", "Hebben we het hele huis voor onszelf?", "Har vi hela huset för oss själva?"),
        answer: l("Yes, if you take all four apartments. Then nobody but you stays in the house.", "Ja, wenn ihr alle vier Wohnungen nehmt. Dann wohnt außer euch niemand im Haus.", "Sí, si cogéis los cuatro apartamentos. Entonces nadie más se aloja en la casa.", "Ja, als jullie alle vier de appartementen nemen. Dan woont er niemand anders in het huis.", "Ja, om ni tar alla fyra lägenheterna. Då bor ingen annan än ni i huset.")
      },
      {
        question: l("Are all four stays connected inside?", "Sind alle vier Unterkünfte innen verbunden?", "¿Los cuatro alojamientos están conectados por dentro?", "Zijn alle vier verblijven binnen met elkaar verbonden?", "Är alla fyra boenden sammanlänkade inomhus?"),
        answer: l("Zaid and Maha via the outdoor staircase between the terraces, when you have both. Farah and Lounis have their own entrances behind the shared front door.", "Zaid und Maha über die Außentreppe zwischen den Terrassen, wenn ihr beide habt. Farah und Lounis haben ihre eigenen Eingänge hinter der gemeinsamen Haustür.", "Zaid y Maha por la escalera exterior entre las terrazas, si tenéis los dos. Farah y Lounis tienen sus propias entradas tras la puerta común.", "Zaid en Maha via de buitentrap tussen de terrassen, als jullie beide hebben. Farah en Lounis hebben hun eigen ingangen achter de gezamenlijke voordeur.", "Zaid och Maha via utomhustrappan mellan terrasserna, när ni har båda. Farah och Lounis har egna entréer bakom den gemensamma ytterdörren.")
      },
      {
        question: l("Can all eight of us eat together at one table?", "Können alle acht gemeinsam an einem Tisch essen?", "¿Podemos comer los ocho juntos en una mesa?", "Kunnen we met acht personen aan één tafel eten?", "Kan alla åtta äta tillsammans vid samma bord?"),
        answer: l("On Maha’s terrace all eight sit together, though not at one table for eight. For dinner together, the restaurants of Calle Real are right outside.", "Auf Mahas Terrasse sitzen alle acht zusammen, an einem Tisch für acht nicht. Für das gemeinsame Abendessen liegen die Restaurants der Calle Real vor der Tür.", "En la terraza de Maha os sentáis los ocho, aunque no en una mesa para ocho. Para cenar juntos, los restaurantes de la calle Real están en la puerta.", "Op het terras van Maha zitten alle acht samen, alleen niet aan één tafel voor acht. Voor het gezamenlijke diner liggen de restaurants van Calle Real voor de deur.", "På Mahas terrass sitter alla åtta tillsammans, men inte vid ett bord för åtta. För en gemensam middag ligger restaurangerna på Calle Real utanför dörren.")
      },
      {
        question: l("Does every stay have a kitchen?", "Hat jede Unterkunft eine Küche?", "¿Todos los alojamientos tienen cocina?", "Heeft elk verblijf een keuken?", "Har varje boende ett kök?"),
        answer: l("Lounis, Zaid and Maha yes. Farah has a tea kitchen with fridge, coffee machine and kettle.", "Lounis, Zaid und Maha ja. Farah hat eine Teeküche mit Kühlschrank, Kaffeemaschine und Wasserkocher.", "Lounis, Zaid y Maha sí. Farah tiene una cocinita con nevera, cafetera y hervidor.", "Lounis, Zaid en Maha wel. Farah heeft een theekeuken met koelkast, koffiezetapparaat en waterkoker.", "Lounis, Zaid och Maha ja. Farah har ett pentry med kylskåp, kaffemaskin och vattenkokare.")
      },
      {
        question: l("Can we book the combination instantly online?", "Können wir die Kombination sofort online buchen?", "¿Podemos reservar la combinación online al instante?", "Kunnen we de combinatie direct online boeken?", "Kan vi boka kombinationen direkt online?"),
        answer: l("Several apartments at once go by message to us; the calendar only books one at a time. We usually reply within an hour.", "Mehrere Wohnungen auf einmal gehen per Nachricht an uns; der Kalender bucht immer nur eine. Wir antworten meist innerhalb einer Stunde.", "Varios apartamentos a la vez, por mensaje a nosotros; el calendario solo reserva uno. Solemos responder en menos de una hora.", "Meerdere appartementen tegelijk gaan per bericht aan ons; de kalender boekt er maar één tegelijk. We antwoorden meestal binnen een uur.", "Flera lägenheter på en gång går via meddelande till oss; kalendern bokar bara en åt gången. Vi svarar oftast inom en timme.")
      },
      {
        question: l("Are celebrations or parties allowed?", "Sind Feiern oder Partys erlaubt?", "¿Se permiten celebraciones o fiestas?", "Zijn vieringen of feesten toegestaan?", "Är firanden eller fester tillåtna?"),
        answer: l("Parties are not possible in the house: it stands in the middle of the old town, and only those on the booking can stay overnight. For celebrating, Frigiliana has its squares and bars.", "Feiern geht im Haus nicht: Es steht mitten in der Altstadt, und übernachten können nur die, die auf der Buchung stehen. Fürs Feiern hat Frigiliana seine Plätze und Bars.", "En la casa no se puede hacer fiesta: está en pleno casco antiguo, y solo pueden dormir quienes figuran en la reserva. Para celebrar, Frigiliana tiene sus plazas y sus bares.", "Feesten kan niet in het huis: het staat midden in de oude kern, en overnachten kan alleen wie op de boeking staat. Om te vieren heeft Frigiliana zijn pleinen en bars.", "Fester går inte i huset: det står mitt i gamla byn, och bara de som står på bokningen kan övernatta. För att fira har Frigiliana sina torg och barer.")
      }
    ]
  },
  closing: {
    title: l("Tell us who is travelling", "Erzählt uns, wer mitreist", "Contadnos quién viaja", "Vertel ons wie er reist", "Berätta vilka som reser"),
    text: l("Send us your dates and how many you are. We tell you which apartments are free and who is best placed where.", "Schickt uns eure Daten und wie viele ihr seid. Wir sagen euch, welche Wohnungen frei sind und wer wo am besten wohnt.", "Enviadnos vuestras fechas y cuántos sois. Os decimos qué apartamentos están libres y quién encaja mejor en cada uno.", "Stuur ons jullie data en hoeveel jullie zijn. We vertellen welke appartementen vrij zijn en wie waar het beste woont.", "Skicka era datum och hur många ni är. Vi berättar vilka lägenheter som är lediga och vem som bor bäst var."),
    cta: l("Enquire for 4–8 guests", "Für 4–8 Gäste anfragen", "Consultar para 4–8 huéspedes", "Informeer voor 4–8 gasten", "Skicka förfrågan för 4–8 gäster")
  },
  footer: {
    groups: l("Casa AMARA for 4–8", "Casa AMARA für 4–8", "Casa AMARA para 4–8", "Casa AMARA voor 4–8", "Casa AMARA för 4–8"),
    location: l("Frigiliana location", "Lage in Frigiliana", "Ubicación en Frigiliana", "Locatie in Frigiliana", "Läget i Frigiliana"),
    stays: l("Compare all stays", "Alle Unterkünfte vergleichen", "Comparar alojamientos", "Alle verblijven vergelijken", "Jämför alla boenden")
  }
};
