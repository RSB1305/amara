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

type StayToken = 'farah' | 'lounis' | 'zaid' | 'maha';

interface CasaAmaraGroupsCopy {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    facts: string;
    qualifier: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  model: {
    eyebrow: string;
    title: string;
    intro: string;
    options: Array<{ guests: string; title: string; text: string }>;
    note: string;
  };
  stays: {
    eyebrow: string;
    title: string;
    intro: string;
    contexts: Record<StayToken, string>;
    linkLabel: string;
    labels: {
      guests: string;
      bathroom: string;
      bed: string;
      kitchen: string;
      outdoor: string;
      access: string;
    };
  };
  connection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ title: string; text: string }>;
    imageAlt: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    intro: string;
    worksTitle: string;
    works: string[];
    limitsTitle: string;
    limits: string[];
    note: string;
    imageAlt: string;
  };
  location: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    links: Array<{ token: CasaAmaraGroupGuideToken; label: string; text: string }>;
  };
  booking: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    steps: Array<{ num: string; headline: string; text: string }>;
    primaryCta: string;
    secondaryCta: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  closing: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    groups: string;
    location: string;
    stays: string;
  };
}

export const casaAmaraGroupsSeo: AmaraAuthoringSeo = {
  version: '2026-08-18-casa-amara-groups-v1.0-D',
  pageType: 'D',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-maha/29-amara-frigiliana.jpg',
  languages: {
    en: {
      title: 'Accommodation for 4–8 in Frigiliana | Casa AMARA',
      description: 'Stay together in Frigiliana with your own space: three apartments and one compact suite for 4–8 guests at Casa AMARA. Combined stays by enquiry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Unterkunft für 4–8 Personen in Frigiliana | Casa AMARA',
      description: 'Gemeinsam in Frigiliana wohnen und trotzdem Privatsphäre haben: drei Apartments und eine kompakte Suite für 4–8 Gäste. Kombinierte Buchung auf Anfrage.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojamiento para 4–8 en Frigiliana | Casa AMARA',
      description: 'Alojaos juntos en Frigiliana conservando vuestro espacio: tres apartamentos y una suite compacta para 4–8 huéspedes. Reserva conjunta bajo consulta.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Verblijf voor 4–8 personen in Frigiliana | Casa AMARA',
      description: 'Samen verblijven in Frigiliana met eigen ruimte: drie appartementen en één compacte suite voor 4–8 gasten. Gecombineerd verblijf op aanvraag.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Boende för 4–8 personer i Frigiliana | Casa AMARA',
      description: 'Bo tillsammans i Frigiliana med eget utrymme: tre lägenheter och en kompakt svit för 4–8 gäster. Kombinerad vistelse bokas på förfrågan.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const casaAmaraGroupsContent = {
  hero: {
    kicker: l("FRIGILIANA · 4–8 GUESTS", "FRIGILIANA · 4–8 GÄSTE", "FRIGILIANA · 4–8 HUÉSPEDES", "FRIGILIANA · 4–8 GASTEN", "FRIGILIANA · 4–8 GÄSTER"),
    title: l("Stay together. Keep your own space.", "Gemeinsam reisen. Mit eigenem Rückzugsort.", "Viajar juntos. Con vuestro propio espacio.", "Samen op reis. Met een eigen plek.", "Res tillsammans. Med ett eget utrymme."),
    lead: l("Casa AMARA brings three apartments and one compact suite together under one historic roof in Frigiliana — a calm base for 4–8 registered overnight guests.", "Casa AMARA vereint drei Apartments und eine kompakte Suite unter einem historischen Dach in Frigiliana – eine ruhige Basis für 4–8 angemeldete Übernachtungsgäste.", "Casa AMARA reúne tres apartamentos y una suite compacta bajo un mismo techo histórico en Frigiliana: una base tranquila para 4–8 huéspedes alojados.", "Casa AMARA brengt drie appartementen en één compacte suite samen onder één historisch dak in Frigiliana: een rustige uitvalsbasis voor 4–8 geregistreerde verblijfsgasten.", "Casa AMARA samlar tre lägenheter och en kompakt svit under samma historiska tak i Frigiliana – en lugn bas för 4–8 registrerade övernattande gäster."),
    facts: l("3 apartments · 1 compact suite · 4 private bathrooms", "3 Apartments · 1 kompakte Suite · 4 private Bäder", "3 apartamentos · 1 suite compacta · 4 baños privados", "3 appartementen · 1 compacte suite · 4 privébadkamers", "3 lägenheter · 1 kompakt svit · 4 privata badrum"),
    qualifier: l("Designed for small groups who value privacy and quiet. **It is not a party house or an event venue.**", "Für kleine Gruppen, denen Privatsphäre und Ruhe wichtig sind. **Kein Partyhaus und keine Eventlocation.**", "Pensado para grupos pequeños que valoran la privacidad y la tranquilidad. **No es una casa de fiestas ni un espacio para eventos.**", "Voor kleine groepen die privacy en rust waarderen. **Geen feesthuis en geen evenementenlocatie.**", "För små grupper som värdesätter avskildhet och lugn. **Inget partyhus och ingen evenemangslokal.**"),
    primaryCta: l("Enquire for 4–8 guests", "Für 4–8 Gäste anfragen", "Consultar para 4–8 huéspedes", "Informeer voor 4–8 gasten", "Skicka förfrågan för 4–8 gäster"),
    secondaryCta: l("Compare the four stays", "Die vier Unterkünfte vergleichen", "Comparar los cuatro alojamientos", "Vergelijk de vier verblijven", "Jämför de fyra boendena"),
    imageAlt: l("Large shaded terrace at Casa AMARA Maha in Frigiliana", "Große schattige Terrasse von Casa AMARA Maha in Frigiliana", "Gran terraza con sombra de Casa AMARA Maha en Frigiliana", "Groot schaduwrijk terras van Casa AMARA Maha in Frigiliana", "Stor skuggig terrass vid Casa AMARA Maha i Frigiliana")
  },
  model: {
    eyebrow: l("ONE HOUSE, SEVERAL STAYS", "EIN HAUS, MEHRERE UNTERKÜNFTE", "UNA CASA, VARIOS ALOJAMIENTOS", "ÉÉN HUIS, MEERDERE VERBLIJVEN", "ETT HUS, FLERA BOENDEN"),
    title: l("Book the space your group actually needs", "Bucht genau den Raum, den eure Gruppe braucht", "Reservad el espacio que vuestro grupo necesita", "Boek de ruimte die jullie groep echt nodig heeft", "Boka det utrymme som gruppen faktiskt behöver"),
    intro: l("Each AMARA stay accommodates up to two guests. We coordinate **two, three or four stays for the same dates**, depending on your group size and the available combination.", "Jede AMARA Unterkunft ist für maximal zwei Gäste ausgelegt. Je nach Gruppengröße und Verfügbarkeit koordinieren wir **für denselben Zeitraum zwei, drei oder vier Unterkünfte**.", "Cada alojamiento AMARA admite un máximo de dos huéspedes. Coordinamos **dos, tres o cuatro alojamientos para las mismas fechas**, según el tamaño del grupo y la combinación disponible.", "Elk AMARA-verblijf biedt plaats aan maximaal twee gasten. Afhankelijk van groepsgrootte en beschikbaarheid coördineren we **twee, drie of vier verblijven voor dezelfde data**.", "Varje AMARA-boende rymmer högst två gäster. Beroende på gruppstorlek och tillgänglighet samordnar vi **två, tre eller fyra boenden för samma datum**."),
    options: [
      {
        guests: l("4 GUESTS", "4 GÄSTE", "4 HUÉSPEDES", "4 GASTEN", "4 GÄSTER"),
        title: l("Two private stays", "Zwei private Unterkünfte", "Dos alojamientos privados", "Twee privéverblijven", "Två privata boenden"),
        text: l("A natural fit for two couples or four adults who want to be close without sharing every room.", "Ideal für zwei Paare oder vier Erwachsene, die nah beieinander wohnen möchten, ohne jeden Raum zu teilen.", "Una opción natural para dos parejas o cuatro adultos que quieren estar cerca sin compartir todas las estancias.", "Een logische keuze voor twee stellen of vier volwassenen die dichtbij elkaar willen zijn zonder alle ruimtes te delen.", "Ett naturligt val för två par eller fyra vuxna som vill bo nära utan att dela alla utrymmen.")
      },
      {
        guests: l("5–6 GUESTS", "5–6 GÄSTE", "5–6 HUÉSPEDES", "5–6 GASTEN", "5–6 GÄSTER"),
        title: l("Three private stays", "Drei private Unterkünfte", "Tres alojamientos privados", "Drie privéverblijven", "Tre privata boenden"),
        text: l("Three separate sleeping spaces and three bathrooms create an easy rhythm for families or friends.", "Drei getrennte Schlafbereiche und drei Bäder schaffen einen entspannten Rhythmus für Familie oder Freunde.", "Tres zonas de descanso y tres baños independientes facilitan el ritmo de familiares o amigos.", "Drie aparte slaapruimtes en drie badkamers geven familie of vrienden een ontspannen ritme.", "Tre separata sovutrymmen och tre badrum ger familj eller vänner en avslappnad rytm.")
      },
      {
        guests: l("7–8 GUESTS", "7–8 GÄSTE", "7–8 HUÉSPEDES", "7–8 GASTEN", "7–8 GÄSTER"),
        title: l("All four stays", "Alle vier Unterkünfte", "Los cuatro alojamientos", "Alle vier verblijven", "Alla fyra boendena"),
        text: l("Reserve Farah, Lounis, Zaid and Maha together and Casa AMARA is exclusive to your group.", "Bucht Farah, Lounis, Zaid und Maha gemeinsam – dann gehört Casa AMARA exklusiv eurer Gruppe.", "Reservad juntos Farah, Lounis, Zaid y Maha y Casa AMARA será exclusiva para vuestro grupo.", "Boek Farah, Lounis, Zaid en Maha samen en Casa AMARA is exclusief voor jullie groep.", "Boka Farah, Lounis, Zaid och Maha tillsammans så är Casa AMARA exklusivt för er grupp.")
      }
    ],
    note: l("The exact combination depends on availability. A booking of all four stays guarantees exclusive use of the house.", "Die genaue Kombination hängt von der Verfügbarkeit ab. Die gemeinsame Buchung aller vier Unterkünfte garantiert die Exklusivität des Hauses.", "La combinación exacta depende de la disponibilidad. Reservar conjuntamente los cuatro alojamientos garantiza la exclusividad de toda la casa.", "De precieze combinatie hangt af van de beschikbaarheid. Een gezamenlijke boeking van alle vier verblijven garandeert exclusief gebruik van het huis.", "Den exakta kombinationen beror på tillgängligheten. En gemensam bokning av alla fyra boenden garanterar exklusiv tillgång till hela huset.")
  },
  stays: {
    eyebrow: l("THE FOUR STAYS", "DIE VIER UNTERKÜNFTE", "LOS CUATRO ALOJAMIENTOS", "DE VIER VERBLIJVEN", "DE FYRA BOENDENA"),
    title: l("Different characters, one address", "Unterschiedlicher Charakter, dieselbe Adresse", "Personalidades distintas, una misma dirección", "Een eigen karakter, hetzelfde adres", "Olika karaktär, samma adress"),
    intro: l("All four stays are at Calle Chorruelo 5 in Frigiliana. Each has its own entrance and private bathroom; the three apartments have full kitchens, while Farah has a compact tea kitchen.", "Alle vier Unterkünfte liegen in der Calle Chorruelo 5 in Frigiliana. Jede hat einen eigenen Eingang und ein privates Bad; die drei Apartments besitzen eine vollwertige Küche, Farah eine kompakte Teeküche.", "Los cuatro alojamientos están en Calle Chorruelo 5, Frigiliana. Cada uno tiene entrada y baño privados; los tres apartamentos disponen de cocina completa y Farah, de una pequeña zona para té y café.", "Alle vier verblijven liggen aan Calle Chorruelo 5 in Frigiliana. Elk heeft een eigen ingang en privébadkamer; de drie appartementen hebben een volledige keuken en Farah een compacte pantry voor thee en koffie.", "Alla fyra boenden ligger på Calle Chorruelo 5 i Frigiliana. Varje boende har egen ingång och privat badrum; de tre lägenheterna har fullständiga kök och Farah ett kompakt tekök."),
    contexts: {
      farah: l("A compact suite for guests who prefer simple, easy access and do not need a full kitchen.", "Eine kompakte Suite für Gäste, die es einfach mögen, einen leichten Zugang schätzen und keine vollwertige Küche brauchen.", "Una suite compacta para quien prefiere sencillez, un acceso fácil y no necesita cocina completa.", "Een compacte suite voor gasten die eenvoud en gemakkelijke toegang waarderen en geen volledige keuken nodig hebben.", "En kompakt svit för gäster som uppskattar enkelhet och lätt tillträde och inte behöver ett fullständigt kök."),
      lounis: l("The largest interior space, with a generous private terrace and a full kitchen.", "Der größte Innenraum im Haus, dazu eine großzügige private Terrasse und eine vollwertige Küche.", "El mayor espacio interior de la casa, con una amplia terraza privada y cocina completa.", "De grootste binnenruimte van het huis, met een ruim privéterras en een volledige keuken.", "Husets största inomhusyta, med en rymlig privat terrass och ett fullständigt kök."),
      zaid: l("A private apartment and terrace that can be connected with Maha for a coordinated group stay.", "Ein privates Apartment mit Terrasse, das für Gruppen direkt mit Maha verbunden werden kann.", "Apartamento y terraza privados que pueden conectarse con Maha para una estancia de grupo coordinada.", "Een privéappartement met terras dat voor een groepsverblijf rechtstreeks met Maha kan worden verbonden.", "En privat lägenhet med terrass som kan kopplas direkt till Maha för en samordnad gruppvistelse."),
      maha: l("A bright apartment with a 64 m² terrace, outdoor kitchen and the largest place for the group to sit together.", "Ein helles Apartment mit 64 m² Terrasse, Außenküche und dem größten gemeinsamen Sitzbereich.", "Un apartamento luminoso con 64 m² de terraza, cocina exterior y el mayor espacio para reuniros.", "Een licht appartement met 64 m² terras, buitenkeuken en de ruimste plek om samen te zitten.", "En ljus lägenhet med 64 m² terrass, utekök och den största platsen för gruppen att sitta tillsammans.")
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
    title: l("Zaid and Maha can become one connected group zone", "Zaid und Maha werden zum verbundenen Gruppenbereich", "Zaid y Maha pueden formar una zona de grupo conectada", "Zaid en Maha kunnen één verbonden groepszone worden", "Zaid och Maha kan bli en sammanhängande gruppzon"),
    paragraphs: [
      l("Zaid and Maha are linked by an outdoor staircase with a small lockable door. It normally stays closed. When both apartments are booked for one group, we can open it so the apartments and their terraces connect directly.", "Zaid und Maha sind über eine Außentreppe mit einer kleinen verschließbaren Tür verbunden. Normalerweise bleibt sie zu. Bucht eine Gruppe beide Apartments, öffnen wir sie auf Wunsch, sodass Apartments und Terrassen direkt miteinander verbunden sind.", "Zaid y Maha están unidos por una escalera exterior con una pequeña puerta que se puede cerrar. Normalmente permanece cerrada. Cuando ambos apartamentos se reservan para un mismo grupo, podemos abrirla para conectar directamente apartamentos y terrazas.", "Zaid en Maha zijn verbonden via een buitentrap met een kleine afsluitbare deur. Normaal blijft die dicht. Wanneer één groep beide appartementen boekt, kunnen we de deur openen zodat appartementen en terrassen rechtstreeks met elkaar verbonden zijn.", "Zaid och Maha länkas av en utomhustrappa med en liten låsbar dörr. Den är normalt stängd. När samma grupp bokar båda lägenheterna kan vi öppna den så att lägenheterna och terrasserna ansluter direkt till varandra."),
      l("Maha’s large terrace has seating for up to eight people. It is a place to talk, read and share an evening — but there is no dining table set up for eight and no shared indoor lounge.", "Auf Mahas großer Terrasse gibt es Sitzplätze für bis zu acht Personen. Sie eignet sich für Gespräche, Lesen und gemeinsame Abende – allerdings gibt es keinen Esstisch für acht und keinen gemeinsamen Innenwohnraum.", "La gran terraza de Maha tiene asientos para ocho personas. Es un lugar para charlar, leer y compartir la tarde, pero no hay una mesa de comedor preparada para ocho ni un salón interior común.", "Op het grote terras van Maha zijn zitplaatsen voor acht personen. Het is een plek om te praten, lezen en samen de avond door te brengen, maar er staat geen eettafel voor acht en er is geen gemeenschappelijke woonkamer binnen.", "På Mahas stora terrass finns sittplatser för åtta personer. Här kan ni prata, läsa och dela kvällen, men det finns inget matbord dukat för åtta och inget gemensamt vardagsrum inomhus.")
    ],
    facts: [
      {
        title: l("Together", "Gemeinsam", "Juntos", "Samen", "Tillsammans"),
        text: l("Same house, same address, connected Zaid–Maha terraces when booked as one group, and seating for eight on Maha’s terrace.", "Dasselbe Haus, dieselbe Adresse, verbundene Zaid–Maha-Terrassen bei Gruppenbuchung und Sitzplätze für acht auf Mahas Terrasse.", "La misma casa y dirección, terrazas Zaid–Maha conectadas para el grupo y asientos para ocho en la terraza de Maha.", "Hetzelfde huis en adres, verbonden terrassen van Zaid en Maha bij een groepsboeking en zitplaatsen voor acht op het terras van Maha.", "Samma hus och adress, sammanlänkade Zaid–Maha-terrasser vid gruppbokning och sittplatser för åtta på Mahas terrass.")
      },
      {
        title: l("Still private", "Trotzdem privat", "Con privacidad", "Toch privé", "Ändå privat"),
        text: l("Four separate stays, four private bathrooms, separate sleeping spaces and three full kitchens plus Farah’s tea kitchen.", "Vier eigenständige Unterkünfte, vier private Bäder, getrennte Schlafräume sowie drei vollwertige Küchen plus Farahs Teeküche.", "Cuatro alojamientos independientes, cuatro baños privados, dormitorios separados y tres cocinas completas más la pequeña zona de Farah.", "Vier zelfstandige verblijven, vier privébadkamers, aparte slaapruimtes en drie volledige keukens plus Farahs pantry.", "Fyra fristående boenden, fyra privata badrum, separata sovutrymmen och tre fullständiga kök plus Farahs tekök.")
      },
      {
        title: l("Exclusive at full-house level", "Exklusiv bei Komplettbuchung", "Exclusividad al reservar todo", "Exclusief bij volledige boeking", "Exklusivt vid full bokning"),
        text: l("When all four stays are reserved together, no other guests stay in Casa AMARA.", "Sind alle vier Unterkünfte gemeinsam gebucht, wohnen keine anderen Gäste in Casa AMARA.", "Cuando se reservan juntos los cuatro alojamientos, no se alojan otros huéspedes en Casa AMARA.", "Wanneer alle vier verblijven samen zijn geboekt, verblijven er geen andere gasten in Casa AMARA.", "När alla fyra boenden bokas tillsammans bor inga andra gäster i Casa AMARA.")
      }
    ],
    imageAlt: l("Outdoor staircase and lockable connection between the Zaid and Maha terraces at Casa AMARA", "Außentreppe und verschließbare Verbindung zwischen den Terrassen von Zaid und Maha in Casa AMARA", "Escalera exterior y puerta de conexión entre las terrazas de Zaid y Maha en Casa AMARA", "Buitentrap en afsluitbare verbinding tussen de terrassen van Zaid en Maha in Casa AMARA", "Utomhustrappa och låsbar förbindelse mellan terrasserna vid Zaid och Maha i Casa AMARA")
  },
  fit: {
    eyebrow: l("IS CASA AMARA RIGHT FOR YOU?", "PASST CASA AMARA ZU EUCH?", "¿ES CASA AMARA PARA VOSOTROS?", "PAST CASA AMARA BIJ JULLIE?", "PASSAR CASA AMARA ER?"),
    title: l("A quiet house for people travelling together — not a conventional villa", "Ein ruhiges Haus für gemeinsam Reisende – keine klassische Villa", "Una casa tranquila para viajar juntos, no una villa convencional", "Een rustig huis voor samenreizigers, geen traditionele villa", "Ett lugnt hus för er som reser tillsammans – ingen vanlig villa"),
    intro: l("Casa AMARA works best when your group wants a shared location and independent personal space. The historic house and old-town setting are part of the experience, so clarity matters before you enquire.", "Casa AMARA passt am besten, wenn ihr einen gemeinsamen Standort und zugleich persönliche Rückzugsräume sucht. Das historische Haus und die Altstadtlage gehören zum Erlebnis; deshalb sollten die Rahmenbedingungen vor der Anfrage klar sein.", "Casa AMARA funciona mejor si buscáis una ubicación compartida y espacios personales independientes. La casa histórica y el casco antiguo forman parte de la experiencia, por eso conviene tener claros los detalles antes de consultar.", "Casa AMARA werkt het best wanneer jullie één locatie en toch een eigen plek zoeken. Het historische huis en de ligging in de oude kern horen bij de ervaring; daarom moeten de praktische details vooraf duidelijk zijn.", "Casa AMARA passar bäst när gruppen vill ha en gemensam plats och samtidigt egna privata utrymmen. Det historiska huset och läget i gamla stan är en del av upplevelsen, så de praktiska ramarna behöver vara tydliga före förfrågan."),
    worksTitle: l("Especially well suited to", "Besonders passend für", "Especialmente adecuado para", "Bijzonder geschikt voor", "Passar särskilt bra för"),
    works: [
      l("Two to four couples", "Zwei bis vier Paare", "De dos a cuatro parejas", "Twee tot vier stellen", "Två till fyra par"),
      l("Adult families and multigenerational trips", "Erwachsene Familien und Mehrgenerationenreisen", "Familias adultas y viajes multigeneracionales", "Volwassen families en reizen met meerdere generaties", "Vuxna familjer och generationsresor"),
      l("Quiet groups of friends", "Ruhige Freundesgruppen", "Grupos tranquilos de amigos", "Rustige vriendengroepen", "Lugna kompisgäng"),
      l("Wedding guests sleeping near San Antonio church", "Hochzeitsgäste nahe der Kirche San Antonio", "Invitados de boda cerca de la iglesia de San Antonio", "Bruiloftsgasten vlak bij de San Antonio-kerk", "Bröllopsgäster nära San Antonio-kyrkan")
    ],
    limitsTitle: l("Important to know", "Wichtig zu wissen", "Importante saberlo", "Goed om te weten", "Viktigt att veta"),
    limits: [
      l("No pool and no shared indoor living room", "Kein Pool und kein gemeinsamer Innenwohnraum", "Sin piscina ni salón interior común", "Geen zwembad en geen gezamenlijke woonkamer binnen", "Ingen pool och inget gemensamt vardagsrum inomhus"),
      l("No dining setup for eight people", "Kein Essplatz für acht Personen", "Sin comedor preparado para ocho personas", "Geen eetopstelling voor acht personen", "Ingen gemensam matplats för åtta personer"),
      l("No parties, events or unregistered gatherings", "Keine Partys, Events oder nicht angemeldete Treffen", "Sin fiestas, eventos ni reuniones con personas no alojadas", "Geen feesten, evenementen of bijeenkomsten met niet-geregistreerde gasten", "Inga fester, evenemang eller sammankomster med oregistrerade gäster"),
      l("Steps and stairs differ by stay", "Stufen und Treppen unterscheiden sich je Unterkunft", "Los escalones y escaleras varían según el alojamiento", "Treden en trappen verschillen per verblijf", "Trappsteg och trappor skiljer sig mellan boendena")
    ],
    note: l("This is not an eight-person villa behind one front door. It is a small house of four independent stays that can be coordinated for one group.", "Dies ist keine Villa für acht Personen hinter einer gemeinsamen Eingangstür, sondern ein kleines Haus mit vier eigenständigen Unterkünften, die für eine Gruppe koordiniert werden können.", "No es una villa para ocho personas tras una sola puerta, sino una pequeña casa con cuatro alojamientos independientes que pueden coordinarse para un grupo.", "Dit is geen villa voor acht personen achter één voordeur. Het is een klein huis met vier zelfstandige verblijven die voor één groep kunnen worden gecoördineerd.", "Det här är inte en villa för åtta personer bakom en gemensam ytterdörr, utan ett litet hus med fyra fristående boenden som kan samordnas för en grupp."),
    imageAlt: l("White façade of Casa AMARA in Frigiliana old town", "Weiße Fassade von Casa AMARA in der Altstadt von Frigiliana", "Fachada blanca de Casa AMARA en el casco antiguo de Frigiliana", "Witte gevel van Casa AMARA in de oude kern van Frigiliana", "Vit fasad på Casa AMARA i Frigilianas gamla stad")
  },
  location: {
    eyebrow: l("IN FRIGILIANA OLD TOWN", "IN FRIGILIANAS ALTSTADT", "EN EL CASCO ANTIGUO DE FRIGILIANA", "IN DE OUDE KERN VAN FRIGILIANA", "I FRIGILIANAS GAMLA STAD"),
    title: l("Village life begins outside the door", "Das Dorfleben beginnt vor der Tür", "La vida del pueblo empieza al salir de casa", "Het dorpsleven begint voor de deur", "Bylivet börjar utanför dörren"),
    paragraphs: [
      l("Casa AMARA sits beside Calle Real, close to restaurants, bars, small shops and San Antonio church. Your group can split up easily and meet again without planning every movement around a car.", "Casa AMARA liegt direkt an der Calle Real, nahe Restaurants, Bars, kleinen Geschäften und der Kirche San Antonio. Eure Gruppe kann sich unkompliziert aufteilen und wieder treffen, ohne jeden Weg rund um ein Auto planen zu müssen.", "Casa AMARA está junto a Calle Real, cerca de restaurantes, bares, pequeñas tiendas y la iglesia de San Antonio. El grupo puede separarse y volver a encontrarse fácilmente sin organizar cada movimiento alrededor del coche.", "Casa AMARA ligt naast Calle Real, dicht bij restaurants, bars, kleine winkels en de San Antonio-kerk. Jullie kunnen gemakkelijk ieder iets anders doen en elkaar weer ontmoeten zonder elke verplaatsing rond een auto te plannen.", "Casa AMARA ligger intill Calle Real, nära restauranger, barer, små butiker och San Antonio-kyrkan. Gruppen kan enkelt dela upp sig och mötas igen utan att planera varje förflyttning kring en bil."),
      l("Frigiliana is a hillside village. There is no parking at the house, vehicle access in the old town can be time-restricted, and some routes include steps. Our practical guides help every member of the group arrive with the right expectations.", "Frigiliana ist ein Bergdorf. Am Haus gibt es keinen Parkplatz, die Zufahrt in die Altstadt kann zeitlich eingeschränkt sein und manche Wege führen über Stufen. Unsere praktischen Guides helfen allen, mit den richtigen Erwartungen anzureisen.", "Frigiliana es un pueblo en ladera. No hay aparcamiento en la casa, el acceso de vehículos al casco antiguo puede estar limitado por horarios y algunas rutas tienen escalones. Nuestras guías prácticas ayudan a todos a llegar con expectativas claras.", "Frigiliana ligt tegen een heuvel. Er is geen parkeergelegenheid bij het huis, toegang met de auto tot de oude kern kan tijdgebonden zijn en sommige routes hebben trappen. Onze praktische gidsen helpen iedereen met de juiste verwachtingen te arriveren.", "Frigiliana är en by på en sluttning. Det finns ingen parkering vid huset, fordonstrafik i gamla stan kan vara tidsbegränsad och vissa vägar har trappsteg. Våra praktiska guider hjälper alla att komma förberedda.")
    ],
    links: [
      {
        token: "getting_to_frigiliana" as LinkToken,
        label: l("Getting to Frigiliana", "Anreise nach Frigiliana", "Cómo llegar a Frigiliana", "Naar Frigiliana reizen", "Resa till Frigiliana"),
        text: l("Compare airport, bus, taxi and car options.", "Flughafen, Bus, Taxi und Mietwagen vergleichen.", "Comparad aeropuerto, autobús, taxi y coche.", "Vergelijk luchthaven, bus, taxi en auto.", "Jämför flygplats, buss, taxi och bil.")
      },
      {
        token: "frigiliana_parking" as LinkToken,
        label: l("Parking in Frigiliana", "Parken in Frigiliana", "Aparcar en Frigiliana", "Parkeren in Frigiliana", "Parkering i Frigiliana"),
        text: l("Know where to leave the car before arrival.", "Vor der Anreise wissen, wo das Auto stehen kann.", "Sabed dónde dejar el coche antes de llegar.", "Weet vóór aankomst waar de auto kan staan.", "Ta reda på var bilen kan stå före ankomst.")
      },
      {
        token: "frigiliana_stairs" as LinkToken,
        label: l("Streets and stairs", "Gassen und Treppen", "Calles y escaleras", "Straten en trappen", "Gator och trappor"),
        text: l("Understand the terrain and access before choosing rooms.", "Gelände und Zugänge vor der Zimmerwahl verstehen.", "Entended el terreno y los accesos antes de elegir habitaciones.", "Begrijp terrein en toegang voordat jullie kamers kiezen.", "Förstå terräng och tillträde innan ni väljer rum.")
      },
      {
        token: "location_frigiliana" as LinkToken,
        label: l("Living in the village", "Leben im Dorf", "Vivir en el pueblo", "Leven in het dorp", "Livet i byn"),
        text: l("See what the old-town location feels like day to day.", "Erfahrt, wie sich die Altstadtlage im Alltag anfühlt.", "Descubrid cómo es el día a día en el casco antiguo.", "Ontdek hoe de oude-kernlocatie dagelijks aanvoelt.", "Se hur läget i gamla stan fungerar till vardags.")
      }
    ]
  },
  booking: {
    eyebrow: l("COMBINED AVAILABILITY", "GEMEINSAME VERFÜGBARKEIT", "DISPONIBILIDAD CONJUNTA", "GECOMBINEERDE BESCHIKBAARHEID", "GEMENSAM TILLGÄNGLIGHET"),
    title: l("One enquiry, coordinated by us", "Eine Anfrage, von uns koordiniert", "Una consulta coordinada por nosotros", "Eén aanvraag, door ons gecoördineerd", "En förfrågan, samordnad av oss"),
    paragraphs: [
      l("Our current booking system cannot place several AMARA stays into one online checkout. Combined stays are therefore arranged directly with us by enquiry.", "Unser aktuelles Buchungssystem kann mehrere AMARA Unterkünfte noch nicht in einem Online-Checkout zusammenführen. Kombinierte Aufenthalte organisieren wir deshalb direkt per Anfrage.", "Nuestro sistema actual no permite añadir varios alojamientos AMARA a un único proceso de reserva online. Por eso coordinamos directamente las estancias combinadas mediante consulta.", "Ons huidige boekingssysteem kan meerdere AMARA-verblijven nog niet in één online checkout plaatsen. Daarom regelen we gecombineerde verblijven rechtstreeks via een aanvraag.", "Vårt nuvarande bokningssystem kan ännu inte lägga flera AMARA-boenden i samma onlinekassa. Kombinerade vistelser ordnas därför direkt med oss genom en förfrågan."),
      l("Tell us your dates, total guest count and preferred setup. We will check which stays are available together and reply with the suitable combination and next booking steps.", "Nennt uns eure Reisedaten, die Gästezahl und eure Wunschaufteilung. Wir prüfen, welche Unterkünfte gemeinsam verfügbar sind, und antworten mit der passenden Kombination und den nächsten Buchungsschritten.", "Indicadnos fechas, número total de huéspedes y distribución preferida. Comprobaremos qué alojamientos están disponibles a la vez y responderemos con la combinación adecuada y los pasos para reservar.", "Stuur ons jullie data, het totale aantal gasten en de gewenste indeling. Wij bekijken welke verblijven tegelijk beschikbaar zijn en antwoorden met de passende combinatie en vervolgstappen.", "Ange datum, totalt antal gäster och önskad fördelning. Vi kontrollerar vilka boenden som är lediga samtidigt och svarar med lämplig kombination och nästa bokningssteg.")
    ],
    steps: [
      {
        num: l("01", "01", "01", "01", "01"),
        headline: l("Send your dates", "Reisedaten senden", "Enviad las fechas", "Stuur jullie data", "Skicka era datum"),
        text: l("Include arrival, departure and the number of registered overnight guests.", "Bitte Anreise, Abreise und Zahl der angemeldeten Übernachtungsgäste angeben.", "Incluid llegada, salida y número de huéspedes que se alojarán.", "Vermeld aankomst, vertrek en het aantal geregistreerde verblijfsgasten.", "Ange ankomst, avresa och antal registrerade övernattande gäster.")
      },
      {
        num: l("02", "02", "02", "02", "02"),
        headline: l("We check the combination", "Wir prüfen die Kombination", "Comprobamos la combinación", "Wij bekijken de combinatie", "Vi kontrollerar kombinationen"),
        text: l("We match two, three or four available stays to your group.", "Wir stimmen zwei, drei oder vier verfügbare Unterkünfte auf eure Gruppe ab.", "Ajustamos dos, tres o cuatro alojamientos disponibles a vuestro grupo.", "We stemmen twee, drie of vier beschikbare verblijven af op jullie groep.", "Vi matchar två, tre eller fyra lediga boenden med gruppen.")
      },
      {
        num: l("03", "03", "03", "03", "03"),
        headline: l("Receive a coordinated offer", "Koordiniertes Angebot erhalten", "Recibid una propuesta coordinada", "Ontvang een gecoördineerd voorstel", "Få ett samordnat förslag"),
        text: l("We confirm the setup, availability and how to complete the reservations.", "Wir bestätigen Aufteilung, Verfügbarkeit und den Weg zur Buchung.", "Confirmamos distribución, disponibilidad y cómo completar las reservas.", "We bevestigen indeling, beschikbaarheid en hoe de reserveringen worden afgerond.", "Vi bekräftar fördelning, tillgänglighet och hur bokningarna slutförs.")
      }
    ],
    primaryCta: l("Enquire about your dates", "Verfügbarkeit anfragen", "Consultar vuestras fechas", "Informeer naar jullie data", "Fråga om era datum"),
    secondaryCta: l("Compare individual stays", "Einzelne Unterkünfte vergleichen", "Comparar alojamientos individuales", "Vergelijk afzonderlijke verblijven", "Jämför enskilda boenden")
  },
  faq: {
    title: l("Questions before you enquire", "Fragen vor eurer Anfrage", "Preguntas antes de consultar", "Vragen vóór jullie aanvraag", "Frågor före förfrågan"),
    items: [
      {
        question: l("Can eight people stay at Casa AMARA?", "Können acht Personen in Casa AMARA übernachten?", "¿Pueden alojarse ocho personas en Casa AMARA?", "Kunnen acht personen in Casa AMARA verblijven?", "Kan åtta personer bo i Casa AMARA?"),
        answer: l("Yes. Farah, Lounis, Zaid and Maha each accommodate up to two guests, giving a total capacity of eight registered overnight guests.", "Ja. Farah, Lounis, Zaid und Maha bieten jeweils Platz für maximal zwei Gäste – insgesamt also für acht angemeldete Übernachtungsgäste.", "Sí. Farah, Lounis, Zaid y Maha admiten hasta dos huéspedes cada uno: ocho huéspedes alojados en total.", "Ja. Farah, Lounis, Zaid en Maha bieden elk plaats aan maximaal twee gasten: in totaal acht geregistreerde verblijfsgasten.", "Ja. Farah, Lounis, Zaid och Maha rymmer högst två gäster vardera, sammanlagt åtta registrerade övernattande gäster.")
      },
      {
        question: l("Do we have the whole house to ourselves?", "Haben wir das ganze Haus für uns?", "¿Tendremos toda la casa para nosotros?", "Hebben we het hele huis voor onszelf?", "Har vi hela huset för oss själva?"),
        answer: l("Yes, if all four stays are reserved together. That combination guarantees exclusive use of Casa AMARA for your group.", "Ja, wenn alle vier Unterkünfte gemeinsam reserviert werden. Diese Kombination garantiert die exklusive Nutzung von Casa AMARA für eure Gruppe.", "Sí, si reserváis juntos los cuatro alojamientos. Esa combinación garantiza el uso exclusivo de Casa AMARA para vuestro grupo.", "Ja, wanneer alle vier verblijven samen zijn gereserveerd. Die combinatie garandeert exclusief gebruik van Casa AMARA door jullie groep.", "Ja, om alla fyra boenden bokas tillsammans. Den kombinationen garanterar exklusiv användning av Casa AMARA för er grupp.")
      },
      {
        question: l("Are all four stays connected inside?", "Sind alle vier Unterkünfte innen verbunden?", "¿Los cuatro alojamientos están conectados por dentro?", "Zijn alle vier verblijven binnen met elkaar verbonden?", "Är alla fyra boenden sammanlänkade inomhus?"),
        answer: l("No. They remain independent stays. Zaid and Maha can be connected via their outdoor staircase and terraces when both are booked for the same group.", "Nein. Sie bleiben eigenständige Unterkünfte. Zaid und Maha können über Außentreppe und Terrassen verbunden werden, wenn beide für dieselbe Gruppe gebucht sind.", "No. Siguen siendo alojamientos independientes. Zaid y Maha pueden conectarse mediante su escalera exterior y las terrazas cuando ambos se reservan para el mismo grupo.", "Nee. Het blijven zelfstandige verblijven. Zaid en Maha kunnen via hun buitentrap en terrassen worden verbonden wanneer beide voor dezelfde groep zijn geboekt.", "Nej. De förblir fristående boenden. Zaid och Maha kan kopplas samman via utomhustrappan och terrasserna när båda bokas för samma grupp.")
      },
      {
        question: l("Can all eight of us eat together at one table?", "Können alle acht gemeinsam an einem Tisch essen?", "¿Podemos comer los ocho juntos en una mesa?", "Kunnen we met acht personen aan één tafel eten?", "Kan alla åtta äta tillsammans vid samma bord?"),
        answer: l("There is seating for eight on Maha’s terrace, but no dining table set up for eight and no shared indoor dining room.", "Auf Mahas Terrasse gibt es Sitzplätze für acht, aber keinen Esstisch für acht und keinen gemeinsamen Essbereich im Haus.", "Hay asientos para ocho en la terraza de Maha, pero no una mesa de comedor preparada para ocho ni un comedor interior común.", "Op Maha’s terras zijn zitplaatsen voor acht, maar er is geen eettafel voor acht en geen gezamenlijke eetruimte binnen.", "Det finns sittplatser för åtta på Mahas terrass, men inget matbord för åtta och ingen gemensam matsal inomhus.")
      },
      {
        question: l("Does every stay have a kitchen?", "Hat jede Unterkunft eine Küche?", "¿Todos los alojamientos tienen cocina?", "Heeft elk verblijf een keuken?", "Har varje boende ett kök?"),
        answer: l("Lounis, Zaid and Maha have full kitchens. Farah has a compact tea kitchen with a refrigerator, not a full kitchen.", "Lounis, Zaid und Maha haben vollwertige Küchen. Farah besitzt eine kompakte Teeküche mit Kühlschrank, keine vollwertige Küche.", "Lounis, Zaid y Maha tienen cocina completa. Farah dispone de una pequeña zona con frigorífico para té y café, no de una cocina completa.", "Lounis, Zaid en Maha hebben een volledige keuken. Farah heeft een compacte pantry met koelkast voor thee en koffie, geen volledige keuken.", "Lounis, Zaid och Maha har fullständiga kök. Farah har ett kompakt tekök med kylskåp, inte ett fullständigt kök.")
      },
      {
        question: l("Can we book the combination instantly online?", "Können wir die Kombination sofort online buchen?", "¿Podemos reservar la combinación online al instante?", "Kunnen we de combinatie direct online boeken?", "Kan vi boka kombinationen direkt online?"),
        answer: l("Not yet. Availability across several stays is checked and coordinated manually, so please send us an enquiry.", "Noch nicht. Die gemeinsame Verfügbarkeit mehrerer Unterkünfte wird manuell geprüft und koordiniert – bitte sendet uns eine Anfrage.", "Todavía no. Comprobamos y coordinamos manualmente la disponibilidad de varios alojamientos; enviadnos una consulta.", "Nog niet. De gezamenlijke beschikbaarheid van meerdere verblijven wordt handmatig gecontroleerd en gecoördineerd; stuur ons een aanvraag.", "Inte ännu. Gemensam tillgänglighet för flera boenden kontrolleras och samordnas manuellt, så skicka en förfrågan.")
      },
      {
        question: l("Are celebrations or parties allowed?", "Sind Feiern oder Partys erlaubt?", "¿Se permiten celebraciones o fiestas?", "Zijn vieringen of feesten toegestaan?", "Är firanden eller fester tillåtna?"),
        answer: l("No. Casa AMARA is intended for quiet overnight stays, not parties, events or unregistered gatherings.", "Nein. Casa AMARA ist für ruhige Übernachtungsaufenthalte gedacht, nicht für Partys, Events oder nicht angemeldete Treffen.", "No. Casa AMARA está pensada para estancias tranquilas, no para fiestas, eventos ni reuniones con personas no alojadas.", "Nee. Casa AMARA is bedoeld voor rustige overnachtingen, niet voor feesten, evenementen of bijeenkomsten met niet-geregistreerde gasten.", "Nej. Casa AMARA är avsett för lugna övernattningar, inte för fester, evenemang eller sammankomster med oregistrerade gäster.")
      }
    ]
  },
  closing: {
    title: l("Tell us who is travelling", "Erzählt uns, wer mitreist", "Contadnos quién viaja", "Vertel ons wie er reist", "Berätta vilka som reser"),
    text: l("Share your dates and group size. We will tell you honestly which combination works — and whether Casa AMARA is the right fit.", "Schickt uns eure Daten und Gruppengröße. Wir sagen euch ehrlich, welche Kombination funktioniert – und ob Casa AMARA zu euch passt.", "Compartid fechas y tamaño del grupo. Os diremos con claridad qué combinación funciona y si Casa AMARA encaja con vuestro viaje.", "Deel jullie data en groepsgrootte. We vertellen eerlijk welke combinatie werkt en of Casa AMARA bij jullie reis past.", "Skicka era datum och gruppstorlek. Vi svarar ärligt på vilken kombination som fungerar och om Casa AMARA passar er resa."),
    cta: l("Enquire for 4–8 guests", "Für 4–8 Gäste anfragen", "Consultar para 4–8 huéspedes", "Informeer voor 4–8 gasten", "Skicka förfrågan för 4–8 gäster")
  },
  footer: {
    groups: l("Casa AMARA for 4–8", "Casa AMARA für 4–8", "Casa AMARA para 4–8", "Casa AMARA voor 4–8", "Casa AMARA för 4–8"),
    location: l("Frigiliana location", "Lage in Frigiliana", "Ubicación en Frigiliana", "Locatie in Frigiliana", "Läget i Frigiliana"),
    stays: l("Compare all stays", "Alle Unterkünfte vergleichen", "Comparar alojamientos", "Alle verblijven vergelijken", "Jämför alla boenden")
  }
};
