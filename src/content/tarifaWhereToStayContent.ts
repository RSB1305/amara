import type { LocalizedText } from '../types/content';
import {
  overview as tarifaOverviewGuide,
  type TarifaLocationGuideContent
} from './tarifaGuideContent';

/**
 * The former Location overview already owns the approved deep area-comparison
 * copy. This named export transfers that material to the focused A3 route
 * without creating a second authoring source.
 */
export const tarifaWhereToStayContent: TarifaLocationGuideContent = {
  ...tarifaOverviewGuide,
  token: 'tarifa_where_to_stay'
};

/**
 * The accommodation-type comparison (TR-CONTENT-007) for the Tarifa
 * where-to-stay route.
 *
 * It is authored here rather than in the shared Tarifa guide overview because
 * it belongs to this page's job alone, and it localizes at the leaf per
 * DR-CONTENT-STRUCT-001 instead of inheriting the per-language page shape the
 * re-exported guide still carries.
 *
 * Every statement in the AMARA column is a verified Family & Surf fact. The
 * hotel column names our own limit rather than making a claim about houses we
 * have never seen.
 */
export const tarifaStayTypeCopy = {
  eyebrow: {
    en: 'The type of stay first',
    de: 'Zuerst die Art des Aufenthalts',
    es: 'Primero el tipo de alojamiento',
    nl: 'Eerst het soort verblijf',
    sv: 'Först typen av boende'
  } satisfies LocalizedText,
  title: {
    en: 'Hotel or your own apartment?',
    de: 'Hotel oder eigene Wohnung?',
    es: '¿Hotel o apartamento propio?',
    nl: 'Hotel of een eigen appartement?',
    sv: 'Hotell eller egen lägenhet?'
  } satisfies LocalizedText,
  intro: [
    {
      en: 'Los Lances begins about five hundred metres from the door and the Old Town is a ten to fifteen minute walk, but Tarifa is also a place you drive out of — and a parking space is otherwise something you go looking for. That is why the type of stay decides more here than the street name.',
      de: 'Los Lances beginnt rund fünfhundert Meter vor der Tür, in die Altstadt sind es zehn bis fünfzehn Minuten zu Fuß — aber Tarifa ist auch ein Ort, aus dem man hinausfährt, und einen Parkplatz sucht man sonst. Deshalb entscheidet hier die Art des Aufenthalts mehr als der Straßenname.',
      es: 'Los Lances empieza a unos quinientos metros de la puerta y al casco antiguo hay diez o quince minutos a pie, pero Tarifa es también un sitio del que se sale en coche, y el aparcamiento es lo que normalmente toca buscar. Por eso aquí el tipo de alojamiento decide más que el nombre de la calle.',
      nl: 'Los Lances begint op zo’n vijfhonderd meter van de deur en naar de oude stad is het tien tot vijftien minuten lopen, maar Tarifa is ook een plek waar je uit wegrijdt — en een parkeerplek is anders iets waar je naar zoekt. Daarom bepaalt het soort verblijf hier meer dan de straatnaam.',
      sv: 'Los Lances börjar cirka femhundra meter från dörren och till gamla stan är det tio till femton minuters promenad, men Tarifa är också en plats man kör ut från — och en parkeringsplats är annars något man letar efter. Därför avgör typen av boende mer här än gatunamnet.'
    } satisfies LocalizedText,
    {
      en: 'Family & Surf is the only stay we have in Tarifa, so this table is about that one apartment. What a hotel here does we do not know; what this apartment does not do, we can say exactly.',
      de: 'Family & Surf ist unsere einzige Unterkunft in Tarifa, die Tabelle handelt also von dieser einen Wohnung. Was ein Hotel hier leistet, wissen wir nicht; was diese Wohnung nicht leistet, können wir genau sagen.',
      es: 'Family & Surf es nuestro único alojamiento en Tarifa, así que la tabla habla de ese apartamento. Lo que hace un hotel de aquí no lo sabemos; lo que este apartamento no hace, lo podemos decir con exactitud.',
      nl: 'Family & Surf is ons enige verblijf in Tarifa, dus deze tabel gaat over dat ene appartement. Wat een hotel hier doet weten we niet; wat dit appartement niet doet, kunnen we precies zeggen.',
      sv: 'Family & Surf är vårt enda boende i Tarifa, så tabellen handlar om just den lägenheten. Vad ett hotell här gör vet vi inte; vad den här lägenheten inte gör kan vi säga exakt.'
    } satisfies LocalizedText
  ],
  labels: {
    attribute: {
      en: 'What it is about',
      de: 'Worum es geht',
      es: 'De qué se trata',
      nl: 'Waar het om gaat',
      sv: 'Vad det gäller'
    } satisfies LocalizedText,
    ours: {
      en: 'At AMARA',
      de: 'Bei AMARA',
      es: 'En AMARA',
      nl: 'Bij AMARA',
      sv: 'Hos AMARA'
    } satisfies LocalizedText,
    hotelWins: {
      en: 'Better a hotel when',
      de: 'Dann lieber ins Hotel',
      es: 'Mejor un hotel si',
      nl: 'Dan liever een hotel',
      sv: 'Hellre hotell om'
    } satisfies LocalizedText
  },
  items: [
    {
      id: 'arrival',
      attribute: {
        en: 'Arrival and the car',
        de: 'Ankunft und Auto',
        es: 'Llegada y coche',
        nl: 'Aankomst en auto',
        sv: 'Ankomst och bil'
      } satisfies LocalizedText,
      ours: {
        en: 'You write to us directly and let yourself in; there is no reception. The car goes into the reserved underground space that belongs to the apartment.',
        de: 'Ihr schreibt uns direkt und schließt selbst auf; eine Rezeption gibt es nicht. Das Auto stellt ihr auf den reservierten Tiefgaragenplatz, der zur Wohnung gehört.',
        es: 'Nos escribís directamente y entráis por vuestra cuenta; no hay recepción. El coche va a la plaza reservada del garaje que pertenece al apartamento.',
        nl: 'Jullie schrijven ons rechtstreeks en laten jezelf binnen; een receptie is er niet. De auto gaat naar de gereserveerde plek in de ondergrondse garage die bij het appartement hoort.',
        sv: 'Ni skriver direkt till oss och låser upp själva; någon reception finns inte. Bilen ställs på den reserverade platsen i garaget som hör till lägenheten.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'You want someone at a desk around the clock, or you arrive without telling us when.',
        de: 'Wenn ihr rund um die Uhr jemanden am Empfang wollt oder ankommt, ohne uns zu sagen wann.',
        es: 'Queréis a alguien en recepción las veinticuatro horas, o llegáis sin decirnos cuándo.',
        nl: 'Je wilt dag en nacht iemand aan de balie, of je komt aan zonder te zeggen wanneer.',
        sv: 'Ni vill ha någon i receptionen dygnet runt, eller kommer utan att säga när.'
      } satisfies LocalizedText
    },
    {
      id: 'meals',
      attribute: {
        en: 'Meals',
        de: 'Essen',
        es: 'Las comidas',
        nl: 'Eten',
        sv: 'Måltider'
      } satisfies LocalizedText,
      ours: {
        en: 'A full kitchen, a supermarket directly opposite and Helena’s Kitchen in the same building — cooking here does not start with a drive.',
        de: 'Voll ausgestattete Küche, ein Supermarkt direkt gegenüber und Helena’s Kitchen im selben Haus — Kochen fängt hier nicht mit einer Autofahrt an.',
        es: 'Cocina completa, un supermercado justo enfrente y Helena’s Kitchen en el mismo edificio: cocinar aquí no empieza con un trayecto en coche.',
        nl: 'Een volledige keuken, een supermarkt recht tegenover en Helena’s Kitchen in hetzelfde gebouw — koken begint hier niet met een autorit.',
        sv: 'Fullt kök, en mataffär mittemot och Helena’s Kitchen i samma hus — att laga mat börjar inte med en biltur här.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'You want breakfast to appear without shopping, planning or washing up.',
        de: 'Wenn das Frühstück ohne Einkauf, Planung und Abwasch dastehen soll.',
        es: 'Queréis que el desayuno aparezca sin compra, sin planes y sin fregar.',
        nl: 'Je wilt dat het ontbijt er staat zonder boodschappen, planning of afwas.',
        sv: 'Ni vill att frukosten ska stå framme utan inköp, planering eller disk.'
      } satisfies LocalizedText
    },
    {
      id: 'cleaning',
      attribute: {
        en: 'Cleaning',
        de: 'Reinigung',
        es: 'Limpieza',
        nl: 'Schoonmaak',
        sv: 'Städning'
      } satisfies LocalizedText,
      ours: {
        en: 'From eight nights, a direct booking includes one clean around the middle of your stay.',
        de: 'Ab acht Nächten ist bei Direktbuchung eine Reinigung zur Mitte des Aufenthalts dabei.',
        es: 'A partir de ocho noches, la reserva directa incluye una limpieza a mitad de estancia.',
        nl: 'Vanaf acht nachten hoort bij een directe boeking één schoonmaak halverwege het verblijf.',
        sv: 'Från åtta nätter ingår en städning mitt i vistelsen vid direktbokning.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'You want fresh towels and a made bed every day.',
        de: 'Wenn ihr täglich frische Handtücher und ein gemachtes Bett wollt.',
        es: 'Queréis toallas limpias y la cama hecha cada día.',
        nl: 'Je wilt elke dag schone handdoeken en een opgemaakt bed.',
        sv: 'Ni vill ha rena handdukar och bäddad säng varje dag.'
      } satisfies LocalizedText
    },
    {
      id: 'access',
      attribute: {
        en: 'The way to the door — and the stairs inside',
        de: 'Der Weg zur Tür — und die Treppe drinnen',
        es: 'El camino hasta la puerta y la escalera interior',
        nl: 'De weg naar de deur — en de trap binnen',
        sv: 'Vägen till dörren — och trappan inne'
      } satisfies LocalizedText,
      ours: {
        en: 'No steps outside and none in the building; the lift reaches the apartment door. Both bedrooms are up a flight of stairs inside the flat.',
        de: 'Keine Stufen draußen und keine im Haus; der Aufzug fährt bis vor die Wohnungstür. Beide Schlafzimmer liegen über eine Treppe in der Wohnung.',
        es: 'Sin escalones fuera ni en el edificio; el ascensor llega hasta la puerta. Los dos dormitorios están arriba, por una escalera dentro de la vivienda.',
        nl: 'Geen treden buiten en geen in het gebouw; de lift komt tot aan de voordeur. Beide slaapkamers liggen boven, via een trap in de woning.',
        sv: 'Inga trappsteg ute och inga i huset; hissen når fram till lägenhetsdörren. Båda sovrummen ligger en trappa upp inne i lägenheten.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'Someone should not have to take stairs to reach a bed — on the lower floor there is none.',
        de: 'Wenn jemand keine Treppe zum Bett nehmen soll — unten steht keins.',
        es: 'Alguien no debería subir una escalera para llegar a la cama: en la planta de abajo no hay ninguna.',
        nl: 'Iemand zou geen trap moeten nemen om bij een bed te komen — beneden staat er geen.',
        sv: 'Någon ska inte behöva ta en trappa för att komma till en säng — på nedre planet finns ingen.'
      } satisfies LocalizedText
    },
    {
      id: 'party',
      attribute: {
        en: 'Who it fits',
        de: 'Für wen es passt',
        es: 'Para quién encaja',
        nl: 'Voor wie het past',
        sv: 'Vilka det passar'
      } satisfies LocalizedText,
      ours: {
        en: '75 m², two bedrooms, two bathrooms. The main room has a double bed of 150 × 200; the second has a bunk bed with two single places.',
        de: '75 m², zwei Schlafzimmer, zwei Bäder. Im Hauptschlafzimmer steht ein Doppelbett mit 150 × 200, im zweiten ein Hochbett mit zwei einzelnen Schlafplätzen.',
        es: '75 m², dos dormitorios y dos baños. El principal tiene una cama doble de 150 × 200; el segundo, una litera con dos plazas individuales.',
        nl: '75 m², twee slaapkamers, twee badkamers. De hoofdslaapkamer heeft een tweepersoonsbed van 150 × 200; de tweede een stapelbed met twee losse slaapplaatsen.',
        sv: '75 m², två sovrum, två badrum. Huvudsovrummet har en dubbelsäng på 150 × 200; det andra en våningssäng med två enkla sovplatser.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'You are four adults, or two couples: the second room is built for children, not for a second couple.',
        de: 'Wenn ihr vier Erwachsene oder zwei Paare seid: Das zweite Zimmer ist für Kinder gebaut, nicht für ein zweites Paar.',
        es: 'Sois cuatro adultos o dos parejas: la segunda habitación está pensada para niños, no para una segunda pareja.',
        nl: 'Jullie zijn met vier volwassenen, of twee stellen: de tweede kamer is voor kinderen gemaakt, niet voor een tweede stel.',
        sv: 'Ni är fyra vuxna, eller två par: det andra rummet är byggt för barn, inte för ett andra par.'
      } satisfies LocalizedText
    },
    {
      id: 'outdoors',
      attribute: {
        en: 'Terrace and pool',
        de: 'Terrasse und Pool',
        es: 'Terraza y piscina',
        nl: 'Terras en zwembad',
        sv: 'Terrass och pool'
      } satisfies LocalizedText,
      ours: {
        en: 'Twelve square metres of private terrace facing the Atlantic. The pool belongs to the complex and is shared with the other residents.',
        de: 'Zwölf Quadratmeter eigene Terrasse zum Atlantik. Der Pool gehört zur Wohnanlage und wird mit den übrigen Bewohnern geteilt.',
        es: 'Doce metros cuadrados de terraza privada orientada al Atlántico. La piscina es de la comunidad y se comparte con el resto de residentes.',
        nl: 'Twaalf vierkante meter eigen terras aan de Atlantische Oceaan. Het zwembad hoort bij het complex en wordt met de andere bewoners gedeeld.',
        sv: 'Tolv kvadratmeter egen terrass mot Atlanten. Poolen tillhör anläggningen och delas med de övriga boende.'
      } satisfies LocalizedText,
      hotelWins: {
        en: 'You want a pool that comes with service — a lounger kept free for you and towels handed out.',
        de: 'Wenn der Pool zum Service gehören soll — mit freigehaltener Liege und ausgegebenen Handtüchern.',
        es: 'Queréis una piscina con servicio: una hamaca reservada y toallas a mano.',
        nl: 'Je wilt een zwembad met service — een ligbed dat vrij wordt gehouden en handdoeken die worden aangereikt.',
        sv: 'Ni vill ha en pool med service — en solstol som hålls ledig och handdukar som delas ut.'
      } satisfies LocalizedText
    }
  ]
};
