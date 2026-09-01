import type { GuestGuideCategoryLinkItem, GuestGuideEntry, GuestGuideMenuLink, LocalizedText } from '../types/guestGuide';
import { buildBookingLandingUrl } from '../lib/directBooking';

const TARIFA_SUPPORT_EMAIL = 'mailto:hola@amara-lodging.es';
const TARIFA_GOOGLE_REVIEW_URL = 'https://g.page/r/CfOMtRVdxhzKEAE/review';

const NEED_HELP: LocalizedText = {
  en: 'Need Help?',
  de: 'Braucht ihr Hilfe?',
  es: '¿Necesitáis ayuda?',
  nl: 'Hulp nodig?',
  sv: 'Behöver ni hjälp?'
};

const LEAVE_GOOGLE_REVIEW: LocalizedText = {
  en: 'Leave a Google Review',
  de: 'Google-Bewertung abgeben',
  es: 'Dejar una reseña en Google',
  nl: 'Een Google-review achterlaten',
  sv: 'Lämna en Google-recension'
};

const AMARA_SIGN_OFF: LocalizedText = {
  en: 'Warm regards,<br>Robert',
  de: 'Herzliche Grüße,<br>Robert',
  es: 'Un afectuoso saludo,<br>Robert',
  nl: 'Hartelijke groeten,<br>Robert',
  sv: 'Varma hälsningar,<br>Robert'
};

const TARIFA_ESSENTIALS_MENU_LINK: GuestGuideMenuLink = {
  icon: 'location-pin',
  targetSlug: 'tarifa-guest-local-essentials',
  title: {
    en: 'Tarifa essentials',
    de: 'Wichtiges vor Ort in Tarifa',
    es: 'Lo esencial de Tarifa',
    nl: 'Praktische informatie in Tarifa',
    sv: 'Praktisk information i Tarifa'
  },
  subtitle: {
    en: 'Parking · Supermarkets · Practical local basics',
    de: 'Parken · Supermärkte · Praktische Grundlagen vor Ort',
    es: 'Aparcamiento · Supermercados · Información práctica local',
    nl: 'Parkeren · Supermarkten · Praktische lokale basisinfo',
    sv: 'Parkering · Stormarknader · Praktisk lokal information'
  }
};

const TARIFA_EXPERIENCE_KITESURF_LINK: GuestGuideCategoryLinkItem = {
  kind: 'link',
  icon: 'wave',
  targetSlug: 'tarifa-guest-kitesurfing',
  title: {
    en: 'Kitesurfing in Tarifa',
    de: 'Kitesurfen in Tarifa',
    es: 'Kitesurf en Tarifa',
    nl: 'Kitesurfen in Tarifa',
    sv: 'Kitesurfing i Tarifa'
  },
  subtitle: {
    en: 'Wind basics · Spots · What to expect',
    de: 'Wind-Basics · Spots · Was euch erwartet',
    es: 'Conceptos básicos del viento · Spots · Qué esperar',
    nl: 'Wind basics · Spots · Wat jullie kunnen verwachten',
    sv: 'Vindgrunder · Spots · Vad ni kan förvänta er'
  }
};

// Booking CTA must stay on the guide page's own language route (never hardcode one locale).
function bookingCta(query: string): LocalizedText {
  return {
    en: `${buildBookingLandingUrl('en')}?${query}`,
    de: `${buildBookingLandingUrl('de')}?${query}`,
    es: `${buildBookingLandingUrl('es')}?${query}`,
    nl: `${buildBookingLandingUrl('nl')}?${query}`,
    sv: `${buildBookingLandingUrl('sv')}?${query}`
  };
}

const tarifaText = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

interface TarifaParagraphSet {
  en: string[];
  de: string[];
  es: string[];
  nl: string[];
  sv: string[];
}

const tarifaParagraphs = ({ en, de, es, nl, sv }: TarifaParagraphSet): LocalizedText[] => {
  const paragraphCount = en.length;
  if ([de, es, nl, sv].some((translations) => translations.length !== paragraphCount)) {
    throw new Error('Tarifa guest-guide paragraphs must contain the same number of translations.');
  }

  return en.map((english, index) => ({
    en: english,
    de: de[index]!,
    es: es[index]!,
    nl: nl[index]!,
    sv: sv[index]!
  }));
};

interface TarifaRecommendation {
  name: string;
  href: string;
  description: LocalizedText;
}

const tarifaRecommendationList = (recommendations: TarifaRecommendation[]): LocalizedText => {
  const render = (lang: keyof LocalizedText) =>
    `<ul class="am-ios-bullets">${recommendations
      .map(
        ({ name, href, description }) =>
          `<li><a class="am-link" href="${href}" target="_blank" rel="noopener noreferrer"><strong>${name}</strong></a> – ${description[lang]}</li>`
      )
      .join('')}</ul>`;

  return {
    en: render('en'),
    de: render('de'),
    es: render('es'),
    nl: render('nl'),
    sv: render('sv')
  };
};

const tarifaBulletList = (items: LocalizedText[]): LocalizedText => {
  const render = (lang: keyof LocalizedText) =>
    `<ul class="am-ios-bullets">${items.map((item) => `<li>${item[lang]}</li>`).join('')}</ul>`;

  return {
    en: render('en'),
    de: render('de'),
    es: render('es'),
    nl: render('nl'),
    sv: render('sv')
  };
};

const tarifaFamilySurfHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-tarifa-family-surf',
  entityKey: 'amara-family-surf',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your AMARA stay in Tarifa | AMARA Experience',
    de: 'Euer Aufenthalt bei AMARA in Tarifa | AMARA Experience',
    es: 'Vuestra estancia con AMARA en Tarifa | AMARA Experience',
    nl: 'Jullie verblijf bij AMARA in Tarifa | AMARA Experience',
    sv: 'Er vistelse hos AMARA i Tarifa | AMARA Experience'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Tarifa: apartment information, local recommendations, and wind and weather essentials.',
    de: 'Euer ruhiger, praktischer Guide für Tarifa: Apartment-Infos, lokale Empfehlungen sowie alles Wichtige zu Wind und Wetter.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Tarifa: información del apartamento, recomendaciones locales y lo esencial sobre el viento y el clima.',
    nl: 'Een rustige, praktische gids voor jullie verblijf in Tarifa: informatie over het appartement, lokale tips en alles over wind en weer.',
    sv: 'En lugn och praktisk guide för er vistelse i Tarifa: information om lägenheten, lokala tips samt det viktigaste om vind och väder.'
  },
  heroImage: '/images/amara-tarifa/amara-tarifa-apartment01.webp',
  heroAlt: {
    en: 'AMARA Family & Surf apartment in Tarifa',
    de: 'AMARA Family & Surf Apartment in Tarifa',
    es: 'Apartamento AMARA Family & Surf en Tarifa',
    nl: 'AMARA Family & Surf appartement in Tarifa',
    sv: 'AMARA Family & Surf-lägenhet i Tarifa'
  },
  kicker: {
    en: 'AMARA FAMILY & SURF',
    de: 'AMARA FAMILY & SURF',
    es: 'AMARA FAMILY & SURF',
    nl: 'AMARA FAMILY & SURF',
    sv: 'AMARA FAMILY & SURF'
  },
  title: {
    en: 'Your AMARA stay in Tarifa',
    de: 'Euer Aufenthalt bei AMARA in Tarifa',
    es: 'Vuestra estancia con AMARA en Tarifa',
    nl: 'Jullie verblijf bij AMARA in Tarifa',
    sv: 'Er vistelse hos AMARA i Tarifa'
  },
  intro: {
    en: 'A thoughtful guide to help you settle in, find your way, and enjoy Tarifa with ease.',
    de: 'Ein aufmerksamer Guide, der euch hilft anzukommen, euch schnell zurechtzufinden und Tarifa mit Leichtigkeit zu genießen.',
    es: 'Una guía pensada con cariño para ayudaros a instalaros, orientaros con facilidad y disfrutar de Tarifa con calma.',
    nl: 'Een zorgvuldige gids om jullie te helpen rustig aan te komen, gemakkelijk de weg te vinden en Tarifa ontspannen te beleven.',
    sv: 'En omtänksam guide som hjälper er att landa, hitta rätt och uppleva Tarifa med lätthet.'
  },
  menuLinks: [
    {
      icon: 'accommodation',
      targetSlug: 'tarifa-guest-apartment',
      title: {
        en: 'Your Apartment',
        de: 'Euer Apartment',
        es: 'Vuestro apartamento',
        nl: 'Jullie appartement',
        sv: 'Er lägenhet'
      },
      subtitle: {
        en: 'Arrival · House information',
        de: 'Anreise · Hausinformationen',
        es: 'Llegada · Información del alojamiento',
        nl: 'Aankomst · Huisinformatie',
        sv: 'Ankomst · Boendeinformation'
      }
    },
    TARIFA_ESSENTIALS_MENU_LINK,
    {
      icon: 'compass',
      targetSlug: 'tarifa-guest-local-guide',
      title: {
        en: 'Our personal recommendations',
        de: 'Unsere persönlichen Empfehlungen',
        es: 'Nuestras recomendaciones personales',
        nl: 'Onze persoonlijke aanbevelingen',
        sv: 'Våra personliga rekommendationer'
      },
      subtitle: {
        en: 'Hidden treasures · Insider tips · Authentic local food · Beyond the crowds',
        de: 'Versteckte Schätze · Insider-Tipps · Authentische lokale Küche · Abseits der Massen',
        es: 'Rincones escondidos · Consejos locales · Cocina local auténtica · Lejos de las multitudes',
        nl: 'Verborgen parels · Insidertips · Authentiek lokaal eten · Buiten de drukte',
        sv: 'Dolda pärlor · Insidertips · Genuin lokal mat · Bortom trängseln'
      }
    }
  ],
  closingParagraphs: [
    {
      en: 'We hope you feel at ease here in Tarifa — with light, wind, and space to slow down. If you need anything during your stay, we are always happy to help.',
      de: 'Wir hoffen, dass ihr euch hier in Tarifa rundum wohlfühlt – mit Licht, Wind und viel Raum, um einmal richtig herunterzufahren. Wenn ihr während eures Aufenthalts etwas braucht, sind wir jederzeit gerne für euch da.',
      es: 'Esperamos que os sintáis a gusto aquí en Tarifa, con luz, viento y espacio para bajar el ritmo. Si necesitáis cualquier cosa durante vuestra estancia, siempre estaremos encantados de ayudaros.',
      nl: 'We hopen dat jullie je hier in Tarifa helemaal op je gemak voelen — met licht, wind en ruimte om even echt tot rust te komen. Als jullie tijdens jullie verblijf iets nodig hebben, helpen we jullie graag.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra här i Tarifa – med ljus, vind och utrymme att bara varva ner. Om ni behöver något under er vistelse hjälper vi er alltid gärna.'
    },
    {
      en: 'Thinking of staying a little longer? You are very welcome to check our current availability online.',
      de: 'Möchtet ihr euren Aufenthalt noch etwas verlängern? Dann schaut euch gerne unsere aktuelle Verfügbarkeit online an.',
      es: '¿Os apetece quedaros un poco más? Podéis consultar en cualquier momento nuestra disponibilidad actual online.',
      nl: 'Denken jullie erover om wat langer te blijven? Bekijk dan gerust onze actuele beschikbaarheid online.',
      sv: 'Är ni sugna på att stanna lite längre? Då är ni varmt välkomna att se vår aktuella tillgänglighet online.'
    },
    {
      en: 'Should Tarifa find a place in your heart, we would be delighted to welcome you again. Our current and future availability can always be checked online.',
      de: 'Sollte Tarifa einen Platz in eurem Herzen finden, würden wir uns sehr freuen, euch wieder bei uns begrüßen zu dürfen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Tarifa llega a ocupar un lugar en vuestro corazón, estaremos encantados de volver a daros la bienvenida. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Tarifa een plekje in jullie hart, dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Tarifa får en plats i ert hjärta, välkomnar vi er gärna tillbaka igen. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6320826&city=Tarifa&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  secondaryCtaHref: TARIFA_GOOGLE_REVIEW_URL,
  secondaryCtaLabel: LEAVE_GOOGLE_REVIEW,
  signOff: AMARA_SIGN_OFF
};

const tarifaFamilySurfApartment: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-apartment',
  entityKey: 'amara-family-surf',
  backSlug: 'guestwelcome-tarifa-family-surf',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Your Apartment | AMARA Tarifa',
    'Euer Apartment | AMARA Tarifa',
    'Vuestro apartamento | AMARA Tarifa',
    'Jullie appartement | AMARA Tarifa',
    'Er lägenhet | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'Apartment details and essentials for your stay.',
    'Apartment-Details und wichtige Informationen für euren Aufenthalt.',
    'Detalles del apartamento e información esencial para vuestra estancia.',
    'Appartementdetails en essentiële informatie voor jullie verblijf.',
    'Information om lägenheten och allt viktigt för er vistelse.'
  ),
  kicker: tarifaText(
    'TARIFA GUEST GUIDE',
    'TARIFA GÄSTEGUIDE',
    'GUÍA PARA HUÉSPEDES EN TARIFA',
    'TARIFA GASTENGIDS',
    'TARIFA GÄSTGUIDE'
  ),
  title: tarifaText(
    'Your Apartment',
    'Euer Apartment',
    'Vuestro apartamento',
    'Jullie appartement',
    'Er lägenhet'
  ),
  intro: tarifaText(
    'Apartment details and essentials.',
    'Apartment-Details und wichtige Informationen.',
    'Detalles del apartamento e información esencial.',
    'Appartementdetails en essentiële informatie.',
    'Information om lägenheten och allt viktigt.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Arrival & Basics',
        'Anreise & Grundlagen',
        'Llegada y aspectos básicos',
        'Aankomst & basisinformatie',
        'Ankomst & grundläggande information'
      ),
      items: [
        {
          icon: 'location-pin',
          title: tarifaText(
            'Address & Directions',
            'Adresse & Anfahrt',
            'Dirección y cómo llegar',
            'Adres & routebeschrijving',
            'Adress & vägbeskrivning'
          ),
          body: tarifaParagraphs({
            en: [
              `<strong>AMARA Tarifa – Penthouse 433</strong>`,
              `The apartment is located at <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mar+Adriatico+29+11380+Tarifa" target="_blank" rel="noopener">Mar Adriatico 29, 11380 Tarifa</a>.`,
              `The residence is called <strong>Las Terrazas de la Marina</strong>. Your apartment number is <strong>433</strong> (Ático / Penthouse).`,
              `If arriving by taxi, mentioning the building name often makes the drop-off easier.`
            ],
            de: [
              `<strong>AMARA Tarifa – Penthouse 433</strong>`,
              `Das Apartment befindet sich in der <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mar+Adriatico+29+11380+Tarifa" target="_blank" rel="noopener">Mar Adriatico 29, 11380 Tarifa</a>.`,
              `Die Anlage heißt <strong>Las Terrazas de la Marina</strong>. Eure Apartmentnummer ist die <strong>433</strong> (Ático / Penthouse).`,
              `Bei Anreise mit dem Taxi hilft es oft, den Namen der Anlage zu nennen, um den Ausstieg zu erleichtern.`
            ],
            es: [
              `<strong>AMARA Tarifa – Ático 433</strong>`,
              `El apartamento está situado en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mar+Adriatico+29+11380+Tarifa" target="_blank" rel="noopener">Mar Adriático 29, 11380 Tarifa</a>.`,
              `El residencial se llama <strong>Las Terrazas de la Marina</strong>. El número de vuestro apartamento es el <strong>433</strong> (Ático / Penthouse).`,
              `Si llegáis en taxi, mencionar el nombre del edificio suele facilitar la llegada.`
            ],
            nl: [
              `<strong>AMARA Tarifa – Penthouse 433</strong>`,
              `Het appartement bevindt zich aan de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mar+Adriatico+29+11380+Tarifa" target="_blank" rel="noopener">Mar Adriatico 29, 11380 Tarifa</a>.`,
              `De residentie heet <strong>Las Terrazas de la Marina</strong>. Jullie appartementsnummer is <strong>433</strong> (Ático / Penthouse).`,
              `Als jullie met de taxi aankomen, is het vaak makkelijker om de naam van het gebouw te vermelden.`
            ],
            sv: [
              `<strong>AMARA Tarifa – Takvåning 433</strong>`,
              `Lägenheten ligger på <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mar+Adriatico+29+11380+Tarifa" target="_blank" rel="noopener">Mar Adriatico 29, 11380 Tarifa</a>.`,
              `Boendet heter <strong>Las Terrazas de la Marina</strong>. Ert lägenhetsnummer är <strong>433</strong> (Ático / Penthouse).`,
              `Om ni anländer med taxi brukar det underlätta att nämna byggnadens namn.`
            ]
          })
        },
        {
          icon: 'car',
          title: tarifaText(
            'Private Parking',
            'Privatparkplatz',
            'Aparcamiento privado',
            'Privéparkeerplaats',
            'Privat parkering'
          ),
          body: tarifaParagraphs({
            en: [
              `Your private underground parking space is <strong>No. 408</strong>.`,
              `You may access the garage by taking the elevator or stairs to level <strong>-1</strong>, or by driving to the rear of the building via <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Cig%C3%BCe%C3%B1a+Negra+Tarifa" target="_blank" rel="noopener">Calle Cigüeña Negra</a>.`,
              `The remote controls for both the sliding gate and the garage door are placed on the kitchen table.`,
              `Kindly use only your designated parking space.`,
              `You can also park on the street around the building if you prefer. Street parking in the area is generally possible, depending on availability.`
            ],
            de: [
              `Euer privater Tiefgaragenstellplatz ist die <strong>Nr. 408</strong>.`,
              `Ihr erreicht die Garage über den Aufzug oder die Treppe auf Ebene <strong>-1</strong> oder fahrt über die <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Cig%C3%BCe%C3%B1a+Negra+Tarifa" target="_blank" rel="noopener">Calle Cigüeña Negra</a> an die Rückseite des Gebäudes.`,
              `Die Fernbedienungen für das Schiebetor und das Garagentor liegen auf dem Küchentisch.`,
              `Bitte nutzt ausschließlich euren zugewiesenen Parkplatz.`,
              `Ihr könnt alternativ auch auf der Straße rund um das Gebäude parken, wenn ihr das bevorzugt. Straßenparken ist in der Umgebung grundsätzlich möglich, je nach Verfügbarkeit.`
            ],
            es: [
              `Vuestra plaza de aparcamiento subterráneo privado es la <strong>nº 408</strong>.`,
              `Podéis acceder al garaje tomando el ascensor o las escaleras hasta el nivel <strong>-1</strong>, o conduciendo hasta la parte trasera del edificio por la <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Cig%C3%BCe%C3%B1a+Negra+Tarifa" target="_blank" rel="noopener">Calle Cigüeña Negra</a>.`,
              `Los mandos a distancia tanto de la puerta corredera como de la puerta del garaje se encuentran en la mesa de la cocina.`,
              `Por favor, utilizad únicamente la plaza de aparcamiento asignada.`,
              `También podéis aparcar en la calle alrededor del edificio si lo preferís. En la zona normalmente es posible aparcar en la calle, según disponibilidad.`
            ],
            nl: [
              `Jullie privéparkeerplaats in de ondergrondse garage is <strong>nr. 408</strong>.`,
              `Jullie bereiken de garage met de lift of trap naar verdieping <strong>-1</strong>, of door via de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Cig%C3%BCe%C3%B1a+Negra+Tarifa" target="_blank" rel="noopener">Calle Cigüeña Negra</a> naar de achterkant van het gebouw te rijden.`,
              `De afstandsbedieningen voor zowel de schuifpoort als de garagedeur liggen op de keukentafel.`,
              `Gebruik alleen de aan jullie toegewezen parkeerplaats.`,
              `Jullie kunnen ook op straat rondom het gebouw parkeren als jullie dat liever willen. Parkeren op straat is in de omgeving meestal mogelijk, afhankelijk van de beschikbaarheid.`
            ],
            sv: [
              `Er privata parkeringsplats i garaget är <strong>nr 408</strong>.`,
              `Ni når garaget genom att ta hissen eller trapporna till plan <strong>-1</strong>, eller genom att köra till baksidan av byggnaden via <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Cig%C3%BCe%C3%B1a+Negra+Tarifa" target="_blank" rel="noopener">Calle Cigüeña Negra</a>.`,
              `Fjärrkontrollerna för både skjutgrinden och garagedörren ligger på köksbordet.`,
              `Vänligen använd endast er anvisade parkeringsplats.`,
              `Ni kan också parkera på gatan runt byggnaden om ni föredrar det. Gatuparkering i området är vanligtvis möjlig, beroende på tillgänglighet.`
            ]
          })
        },
        {
          icon: 'wifi',
          title: tarifaText('Wi-Fi', 'WLAN', 'Wi-Fi', 'Wifi', 'Wi-Fi'),
          body: tarifaParagraphs({
            en: [
              `Stay connected with our high-speed fiber connection.`,
              `Network name: <strong>AMARATarifa</strong><br>For the current Wi-Fi password, please use the communication channel connected to your booking or contact AMARA support.`,
              `If you prefer a wired connection, a USB-C to LAN adapter is available at the desk, offering speeds of up to 1 Gbps.`
            ],
            de: [
              `Bleibt in Verbindung mit unserem Highspeed-Glasfaseranschluss.`,
              `Netzwerkname: <strong>AMARATarifa</strong><br>Das aktuelle WLAN-Passwort erhaltet ihr über den mit eurer Buchung verbundenen Kommunikationskanal oder beim AMARA-Support.`,
              `Wenn ihr eine Kabelverbindung bevorzugt, liegt am Schreibtisch ein USB-C-auf-LAN-Adapter bereit, der Geschwindigkeiten von bis zu 1 Gbit/s bietet.`
            ],
            es: [
              `Manteneos conectados con nuestra conexión de fibra de alta velocidad.`,
              `Nombre de red: <strong>AMARATarifa</strong><br>Para obtener la contraseña actual del Wi-Fi, utilizad el canal de comunicación asociado a vuestra reserva o contactad con el soporte de AMARA.`,
              `Si preferís una conexión por cable, hay disponible un adaptador de USB-C a LAN en el escritorio, con velocidades de hasta 1 Gbps.`
            ],
            nl: [
              `Blijf verbonden met onze snelle glasvezelverbinding.`,
              `Netwerknaam: <strong>AMARATarifa</strong><br>Voor het actuele wifiwachtwoord gebruiken jullie het communicatiekanaal van jullie boeking of nemen jullie contact op met AMARA-support.`,
              `Als jullie de voorkeur geven aan een bekabelde verbinding, is er een USB-C-naar-LAN-adapter beschikbaar op het bureau, met snelheden tot 1 Gbps.`
            ],
            sv: [
              `Håll er uppkopplade med vår snabba fiberanslutning.`,
              `Nätverksnamn: <strong>AMARATarifa</strong><br>För det aktuella Wi-Fi-lösenordet använder ni kommunikationskanalen för er bokning eller kontaktar AMARA-supporten.`,
              `Om ni föredrar en trådbunden anslutning finns en USB-C till LAN-adapter vid skrivbordet, med hastigheter upp till 1 Gbps.`
            ]
          })
        },
        {
          icon: 'climate',
          title: tarifaText(
            'Cooling & Heating',
            'Klimaanlage & Heizung',
            'Aire acondicionado y calefacción',
            'Koeling & verwarming',
            'Kylning & uppvärmning'
          ),
          body: tarifaParagraphs({
            en: [
              `The apartment is equipped with two air conditioning units.`,
              `One unit is located in the <strong>living room above the TV</strong>. The second unit is installed in the <strong>main bedroom</strong>.`,
              `Both systems provide cooling in summer and heating during cooler months.`,
              `We recommend a temperature of <strong>23–24°C</strong> for cooling and <strong>20–21°C</strong> for heating for optimal comfort and efficiency.`,
              `Kindly close windows while the system is running and switch it off when leaving the apartment.`
            ],
            de: [
              `Das Apartment ist mit zwei Klimaanlagen ausgestattet.`,
              `Ein Gerät befindet sich im <strong>Wohnzimmer über dem Fernseher</strong>. Das zweite Gerät ist im <strong>Hauptschlafzimmer</strong> installiert.`,
              `Beide Systeme kühlen im Sommer und wärmen in den kühleren Monaten.`,
              `Wir empfehlen eine Temperatur von <strong>23–24 °C</strong> zum Kühlen und <strong>20–21 °C</strong> zum Heizen für optimalen Komfort und Effizienz.`,
              `Bitte schließt die Fenster, während das System läuft, und schaltet es aus, wenn ihr das Apartment verlasst.`
            ],
            es: [
              `El apartamento está equipado con dos unidades de aire acondicionado.`,
              `Una unidad se encuentra en el <strong>salón sobre el televisor</strong>. La segunda unidad está instalada en el <strong>dormitorio principal</strong>.`,
              `Ambos sistemas proporcionan refrigeración en verano y calefacción en los meses más fríos.`,
              `Recomendamos una temperatura de <strong>23–24°C</strong> para refrigeración y <strong>20–21°C</strong> para calefacción para un confort y eficiencia óptimos.`,
              `Por favor, cerrad las ventanas mientras el sistema esté funcionando y apagadlo al salir del apartamento.`
            ],
            nl: [
              `Het appartement is voorzien van twee airconditioningsunits.`,
              `Eén unit bevindt zich in de <strong>woonkamer boven de tv</strong>. De tweede unit is geïnstalleerd in de <strong>hoofdslaapkamer</strong>.`,
              `Beide systemen zorgen voor koeling in de zomer en verwarming tijdens de koelere maanden.`,
              `We raden een temperatuur aan van <strong>23–24°C</strong> voor koeling en <strong>20–21°C</strong> voor verwarming voor optimaal comfort en efficiëntie.`,
              `Sluit de ramen terwijl het systeem draait en schakel het uit wanneer jullie het appartement verlaten.`
            ],
            sv: [
              `Lägenheten är utrustad med två luftkonditioneringsenheter.`,
              `En enhet är placerad i <strong>vardagsrummet ovanför TV:n</strong>. Den andra enheten är installerad i <strong>huvudsovrummet</strong>.`,
              `Båda systemen ger kyla på sommaren och värme under svalare månader.`,
              `Vi rekommenderar en temperatur på <strong>23–24 °C</strong> för kyla och <strong>20–21 °C</strong> för värme för optimal komfort och effektivitet.`,
              `Vänligen stäng fönstren när systemet är igång och stäng av det när ni lämnar lägenheten.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'During Your Stay',
        'Während eures Aufenthalts',
        'Durante vuestra estancia',
        'Tijdens jullie verblijf',
        'Under er vistelse'
      ),
      items: [
        {
          icon: 'sparkle',
          title: tarifaText(
            'Starter Supplies',
            'Startausstattung',
            'Suministros iniciales',
            'Startbenodigdheden',
            'Startförnödenheter'
          ),
          body: tarifaParagraphs({
            en: [
              `To make your arrival easy, we provide a thoughtful <strong>starter supply</strong> of everyday essentials.`,
              `This usually includes items such as <strong>toilet paper, dishwasher tablets, bin bags</strong> and a few basic cleaning essentials.`,
              `As is common in holiday rentals, these supplies are intended for the <strong>start of your stay</strong>. If you need more during your visit, please purchase any additional items according to your personal needs.`
            ],
            de: [
              `Damit ihr entspannt ankommen könnt, stellen wir euch eine sorgfältige <strong>Startausstattung</strong> mit den wichtigsten Verbrauchsmaterialien bereit.`,
              `Dazu gehören in der Regel Dinge wie <strong>Toilettenpapier, Spülmaschinentabs, Mülltüten</strong> und einige grundlegende Reinigungsartikel.`,
              `Wie in Ferienunterkünften üblich, ist diese Ausstattung für den <strong>Start eures Aufenthalts</strong> gedacht. Wenn ihr während eures Aufenthalts mehr benötigt, kauft bitte zusätzliche Artikel nach eurem persönlichen Bedarf.`
            ],
            es: [
              `Para que vuestra llegada sea cómoda, dejamos una <strong>dotación inicial</strong> con los artículos básicos más importantes.`,
              `Normalmente incluye artículos como <strong>papel higiénico, pastillas para el lavavajillas, bolsas de basura</strong> y algunos productos básicos de limpieza.`,
              `Como es habitual en los alojamientos vacacionales, estos artículos están pensados para el <strong>inicio de vuestra estancia</strong>. Si necesitáis más durante vuestra visita, podéis comprar lo adicional según vuestras necesidades personales.`
            ],
            nl: [
              `Om jullie aankomst zo makkelijk mogelijk te maken, zorgen we voor een fijne <strong>startvoorraad</strong> met de belangrijkste dagelijkse benodigdheden.`,
              `Dit omvat meestal zaken zoals <strong>toiletpapier, vaatwastabletten, vuilniszakken</strong> en enkele basis schoonmaakbenodigdheden.`,
              `Zoals gebruikelijk is bij vakantiewoningen, zijn deze benodigdheden bedoeld voor het <strong>begin van jullie verblijf</strong>. Als jullie tijdens het verblijf meer nodig hebben, kunnen jullie dit zelf naar behoefte bijkopen.`
            ],
            sv: [
              `För att göra ankomsten enkel erbjuder vi ett omtänksamt <strong>startpaket</strong> med de viktigaste vardagsartiklarna.`,
              `Det inkluderar vanligtvis saker som <strong>toalettpapper, diskmaskinstabletter, soppåsar</strong> och några grundläggande rengöringsartiklar.`,
              `Som vanligt i semesterboenden är dessa förnödenheter avsedda för <strong>början av er vistelse</strong>. Om ni behöver mer under vistelsen köper ni enkelt till det efter era egna behov.`
            ]
          })
        },
        {
          icon: 'laundry',
          title: tarifaText('Laundry', 'Waschen & Bügeln', 'Lavandería', 'Wasgoed', 'Tvätt'),
          body: tarifaParagraphs({
            en: [
              `A washing machine is available in the kitchen for your convenience.`,
              `Please note that <strong>laundry detergent is not provided</strong>, as guests often prefer to choose their own detergent according to their personal needs.`,
              `The ironing board and drying rack are located in the storage room opposite the downstairs bathroom, on the right-hand side next to the staircase.`,
              `The iron can be found in the master bedroom.`
            ],
            de: [
              `In der Küche steht euch eine Waschmaschine zur Verfügung.`,
              `Bitte beachtet, dass wir <strong>kein Waschmittel zur Verfügung stellen</strong>, da Gäste häufig ihr eigenes Waschmittel je nach persönlichen Bedürfnissen bevorzugen.`,
              `Das Bügelbrett und der Wäscheständer befinden sich im Abstellraum gegenüber dem unteren Badezimmer, auf der rechten Seite neben der Treppe.`,
              `Das Bügeleisen liegt im Hauptschlafzimmer.`
            ],
            es: [
              `Hay una lavadora disponible en la cocina para vuestra comodidad.`,
              `Tened en cuenta que <strong>no proporcionamos detergente para la lavadora</strong>, ya que muchos huéspedes prefieren elegir su propio detergente según sus necesidades personales.`,
              `La tabla de planchar y el tendedero se encuentran en el trastero frente al baño de la planta baja, en el lado derecho junto a la escalera.`,
              `La plancha se encuentra en el dormitorio principal.`
            ],
            nl: [
              `In de keuken staat een wasmachine voor jullie klaar.`,
              `Houd er rekening mee dat wij <strong>geen wasmiddel voorzien</strong>, omdat gasten vaak liever hun eigen wasmiddel kiezen op basis van hun persoonlijke behoeften.`,
              `De strijkplank en het droogrek bevinden zich in de berging tegenover de badkamer op de benedenverdieping, aan de rechterkant naast de trap.`,
              `Het strijkijzer is te vinden in de hoofdslaapkamer.`
            ],
            sv: [
              `En tvättmaskin finns tillgänglig i köket för er bekvämlighet.`,
              `Observera att vi <strong>inte tillhandahåller tvättmedel</strong>, eftersom gäster ofta föredrar att välja sitt eget tvättmedel efter personliga behov.`,
              `Strykbrädan och torkställningen finns i förrådet mittemot badrummet på nedervåningen, på höger sida bredvid trappan.`,
              `Strykjärnet finns i huvudsovrummet.`
            ]
          })
        },
        {
          icon: 'trash',
          title: tarifaText('Garbage', 'Müllentsorgung', 'Basura', 'Afval', 'Sopor'),
          body: tarifaParagraphs({
            en: [
              `You’ll find the trash containers on <strong>Calle Cigüeña Negra</strong>, just below the building complex — right next to the sliding gate for the underground parking.`
            ],
            de: [
              `Die Müllcontainer findet ihr in der <strong>Calle Cigüeña Negra</strong>, direkt unterhalb des Gebäudekomplexes – gleich neben dem Schiebetor zur Tiefgarage.`
            ],
            es: [
              `Encontraréis los contenedores de basura en la <strong>calle Cigüeña Negra</strong>, justo debajo del complejo de edificios, al lado de la puerta corredera del aparcamiento subterráneo.`
            ],
            nl: [
              `Jullie vinden de vuilcontainers in de <strong>Calle Cigüeña Negra</strong>, net onder het gebouwencomplex — direct naast de schuifpoort voor de ondergrondse parkeergarage.`
            ],
            sv: [
              `Ni hittar sopkärlen på <strong>Calle Cigüeña Negra</strong>, strax nedanför byggnadskomplexet — precis bredvid skjutgrinden till det underjordiska garaget.`
            ]
          })
        },
        {
          icon: 'warning',
          title: tarifaText(
            'Please Note',
            'Bitte beachten',
            'A tener en cuenta',
            'Let op',
            'Vänligen observera'
          ),
          body: tarifaParagraphs({
            en: [
              `Close windows during strong winds, switch off air conditioning when leaving, and bring terrace cushions inside if rain approaches.`
            ],
            de: [
              `Schließt bei starkem Wind die Fenster, schaltet die Klimaanlage aus, wenn ihr geht, und holt die Terrassenkissen herein, wenn Regen aufzieht.`
            ],
            es: [
              `Cerrad las ventanas si hace mucho viento, apagad el aire acondicionado al salir y meted los cojines de la terraza en el interior si se acerca lluvia.`
            ],
            nl: [
              `Sluit de ramen bij harde wind, schakel de airconditioning uit bij vertrek en breng de kussens van het terras naar binnen als er regen nadert.`
            ],
            sv: [
              `Stäng fönstren vid hård vind, stäng av luftkonditioneringen när ni går ut och ta in terrasskuddarna om regn närmar sig.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Kitchen & Living',
        'Küche & Wohnen',
        'Cocina y salón',
        'Keuken & wonen',
        'Kök & vardagsrum'
      ),
      items: [
        {
          icon: 'coffee',
          title: tarifaText(
            'Coffee Machine',
            'Kaffeemaschine',
            'Cafetera',
            'Koffiezetapparaat',
            'Kaffemaskin'
          ),
          body: tarifaParagraphs({
            en: [
              `The coffee machine is compatible with <strong>Original Nespresso capsules</strong>.`,
              `Capsules are available at <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+Tarifa" target="_blank" rel="noopener">DIA Tarifa</a> and at <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Tarifa" target="_blank" rel="noopener">Mercadona Tarifa</a>.`,
              `Please ensure the water tank is filled before use.`
            ],
            de: [
              `Die Kaffeemaschine ist mit <strong>Original Nespresso Kapseln</strong> kompatibel.`,
              `Kapseln sind im <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+Tarifa" target="_blank" rel="noopener">DIA Tarifa</a> und im <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Tarifa" target="_blank" rel="noopener">Mercadona Tarifa</a> erhältlich.`,
              `Bitte achtet darauf, dass der Wassertank vor Gebrauch gefüllt ist.`
            ],
            es: [
              `La cafetera es compatible con <strong>cápsulas Nespresso Originales</strong>.`,
              `Las cápsulas están disponibles en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+Tarifa" target="_blank" rel="noopener">DIA Tarifa</a> y en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Tarifa" target="_blank" rel="noopener">Mercadona Tarifa</a>.`,
              `Aseguraos de que el depósito de agua esté lleno antes de su uso.`
            ],
            nl: [
              `Het koffiezetapparaat is compatibel met <strong>originele Nespresso-capsules</strong>.`,
              `Capsules zijn verkrijgbaar bij <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+Tarifa" target="_blank" rel="noopener">DIA Tarifa</a> en bij <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Tarifa" target="_blank" rel="noopener">Mercadona Tarifa</a>.`,
              `Zorg ervoor dat het waterreservoir voor gebruik gevuld is.`
            ],
            sv: [
              `Kaffemaskinen är kompatibel med <strong>original Nespresso-kapslar</strong>.`,
              `Kapslar finns tillgängliga på <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+Tarifa" target="_blank" rel="noopener">DIA Tarifa</a> och på <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Tarifa" target="_blank" rel="noopener">Mercadona Tarifa</a>.`,
              `Se till att vattentanken är fylld före användning.`
            ]
          })
        },
        {
          icon: 'gas-stove',
          title: tarifaText(
            'Induction Hob',
            'Induktionsherd',
            'Placa de inducción',
            'Inductiekookplaat',
            'Induktionshäll'
          ),
          body: tarifaParagraphs({
            en: [
              `The induction hob activates only when suitable cookware is placed on the surface.`,
              `To adjust the temperature, simply swipe across the touch panel — similar to using a smartphone.`,
              `The surface remains hot shortly after cooking.`
            ],
            de: [
              `Das Induktionskochfeld wird nur aktiviert, wenn geeignetes Kochgeschirr auf der Fläche steht.`,
              `Um die Temperatur anzupassen, wischt einfach über das Touchpanel – ähnlich wie bei einem Smartphone.`,
              `Die Oberfläche bleibt nach dem Kochen noch kurze Zeit heiß.`
            ],
            es: [
              `La placa de inducción solo se activa cuando se coloca un recipiente adecuado sobre la superficie.`,
              `Para ajustar la temperatura, simplemente deslizad el dedo por el panel táctil, igual que con un smartphone.`,
              `La superficie permanece caliente un tiempo después de cocinar.`
            ],
            nl: [
              `De inductiekookplaat wordt alleen geactiveerd als er geschikte pannen op het oppervlak worden geplaatst.`,
              `Pas de temperatuur aan door eenvoudig over het aanraakscherm te vegen — net als bij een smartphone.`,
              `Het oppervlak blijft kort na het koken heet.`
            ],
            sv: [
              `Induktionshällen aktiveras endast när lämpliga kokkärl placeras på ytan.`,
              `För att justera temperaturen, svep helt enkelt över touchpanelen — på samma sätt som ni använder en smartphone.`,
              `Ytan förblir varm en kort stund efter matlagning.`
            ]
          })
        },
        {
          icon: 'flame',
          title: tarifaText('BBQ', 'Grill', 'Barbacoa', 'BBQ', 'Grill'),
          body: tarifaParagraphs({
            en: [
              `The gas barbecue is available for your enjoyment on the terrace.`,
              `The barbecue uses a standard Spanish gas bottle. The regulator is usually already attached to the bottle.`,
              `To turn the gas on, move the black switch on the regulator upwards into the vertical position.`,
              `If the gas does not flow, the regulator may not be fully clipped onto the bottle. In that case, keep the black switch in the horizontal position, press the whole regulator firmly down onto the bottle until you hear or feel a click, and then move the black switch upwards into the vertical position.`,
              `Please ignite the barbecue with the lid open. Allow 10–15 minutes for preheating before cooking.`,
              `After use, kindly switch off all burners and move the black switch back to the horizontal position to close the gas.`,
              `We appreciate a quick clean after grilling.`,
              `Happy grilling!`
            ],
            de: [
              `Der Gasgrill auf der Terrasse steht euch zur Verfügung.`,
              `Der Grill verwendet eine normale spanische Gasflasche. Der Regler ist in der Regel bereits an der Flasche befestigt.`,
              `Um das Gas einzuschalten, bewegt bitte den schwarzen Schalter am Regler nach oben in die vertikale Position.`,
              `Wenn kein Gas fließt, ist der Regler möglicherweise nicht vollständig auf der Flasche eingerastet. In diesem Fall lasst den schwarzen Schalter in der horizontalen Position, drückt den gesamten Regler fest nach unten auf die Flasche, bis ihr ein Klicken hört oder spürt, und bewegt den schwarzen Schalter danach nach oben in die vertikale Position.`,
              `Bitte zündet den Grill bei geöffnetem Deckel. Lasst ihn vor dem Grillen 10–15 Minuten vorheizen.`,
              `Bitte schaltet nach Gebrauch alle Brenner aus und bewegt den schwarzen Schalter wieder zurück in die horizontale Position, um das Gas zu schließen.`,
              `Wir freuen uns über eine kurze Reinigung nach dem Grillen.`,
              `Viel Freude beim Grillen!`
            ],
            es: [
              `La barbacoa de gas está disponible para vuestro disfrute en la terraza.`,
              `La barbacoa utiliza una bombona de gas española estándar. Normalmente, el regulador ya está colocado en la bombona.`,
              `Para abrir el gas, moved el interruptor negro del regulador hacia arriba, en posición vertical.`,
              `Si el gas no fluye, puede que el regulador no esté completamente encajado en la bombona. En ese caso, mantened el interruptor negro en posición horizontal, presionad firmemente todo el regulador hacia abajo sobre la bombona hasta que oigáis o notéis un “clic”, y después moved el interruptor negro hacia arriba, en posición vertical.`,
              `Encended la barbacoa con la tapa abierta. Dejad que se precaliente durante 10–15 minutos antes de cocinar.`,
              `Después de usarla, apagad todos los quemadores y moved el interruptor negro de nuevo a la posición horizontal para cerrar el gas.`,
              `Agradecemos una limpieza rápida después de usarla.`,
              `¡Que disfrutéis de la barbacoa!`
            ],
            nl: [
              `De gasbarbecue is beschikbaar voor jullie gebruik op het terras.`,
              `De barbecue gebruikt een standaard Spaanse gasfles. De regelaar is normaal gesproken al op de gasfles bevestigd.`,
              `Om het gas aan te zetten, beweeg je de zwarte schakelaar op de regelaar omhoog naar de verticale positie.`,
              `Als er geen gas stroomt, zit de regelaar mogelijk niet volledig vastgeklikt op de gasfles. Houd in dat geval de zwarte schakelaar in de horizontale positie, druk de hele regelaar stevig naar beneden op de gasfles totdat je een klik hoort of voelt, en beweeg daarna de zwarte schakelaar omhoog naar de verticale positie.`,
              `Steek de barbecue aan met het deksel open. Laat de barbecue 10–15 minuten voorverwarmen voordat je gaat koken.`,
              `Schakel na gebruik alle branders uit en beweeg de zwarte schakelaar terug naar de horizontale positie om het gas af te sluiten.`,
              `We waarderen een snelle schoonmaakbeurt na het grillen.`,
              `Veel grillplezier!`
            ],
            sv: [
              `Gasolgrillen är tillgänglig för er att använda på terrassen.`,
              `Grillen använder en vanlig spansk gasolflaska. Regulatorn sitter vanligtvis redan på flaskan.`,
              `För att slå på gasolen, flytta den svarta brytaren på regulatorn uppåt till vertikalt läge.`,
              `Om gasolen inte flödar kan regulatorn eventuellt inte vara helt fastklickad på flaskan. Håll i så fall den svarta brytaren i horisontellt läge, tryck hela regulatorn ordentligt nedåt på flaskan tills ni hör eller känner ett klick, och flytta sedan den svarta brytaren uppåt till vertikalt läge.`,
              `Tänd grillen med locket öppet. Låt grillen förvärmas i 10–15 minuter innan ni börjar laga mat.`,
              `Efter användning, stäng av alla brännare och flytta den svarta brytaren tillbaka till horisontellt läge för att stänga gasolen.`,
              `Vi uppskattar en snabb rengöring efter grillningen.`,
              `Trevlig grillning!`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Amenities',
        'Annehmlichkeiten',
        'Instalaciones',
        'Voorzieningen',
        'Bekvämligheter'
      ),
      items: [
        {
          icon: 'pool',
          title: tarifaText('Pool', 'Pool', 'Piscina', 'Zwembad', 'Pool'),
          body: tarifaParagraphs({
            en: [
              `The communal pool may only be used during the officially authorised season. It closes on 30 September.`,
              `Opening hours are from 10:00 AM to 9:00 PM. Remaining in the pool area outside these hours is prohibited.`,
              `Children under 12 may enter only when accompanied and supervised by a responsible adult.`,
              `A maximum of four external visitors per apartment is permitted. They must always be accompanied by a person authorised to use the pool.`,
              `Entry is prohibited while intoxicated or under the influence of drugs or other substances. When no lifeguard is present, use of the pool is at your own responsibility.`,
              `Inflatable mattresses, glass objects, alcoholic drinks, loud music or speakers, smoking, balls, rackets and street footwear are not permitted in the pool area.`,
              `Picnics, events, parties and pets are not permitted in the pool area.`,
              `Please do not reserve spaces with towels or other belongings. Take all personal items with you whenever you leave the pool area.`,
              `Please remove all rubbish. Do not leave rubbish bags or organic waste such as food or nappies in the communal bins.`
            ],
            de: [
              `Der Gemeinschaftspool darf nur während der offiziell freigegebenen Saison genutzt werden. Er schließt am 30. September.`,
              `Die Öffnungszeiten sind von 10:00 bis 21:00 Uhr. Außerhalb dieser Zeiten ist der Aufenthalt im Poolbereich nicht gestattet.`,
              `Kinder unter 12 Jahren dürfen den Poolbereich nur in Begleitung und unter Aufsicht eines verantwortlichen Erwachsenen betreten.`,
              `Pro Apartment sind höchstens vier externe Besucher erlaubt. Sie müssen jederzeit von einer zur Poolnutzung berechtigten Person begleitet werden.`,
              `Der Zutritt in alkoholisiertem Zustand oder unter dem Einfluss von Drogen oder anderen Substanzen ist verboten. Wenn kein Rettungsschwimmer anwesend ist, erfolgt die Nutzung auf eigene Verantwortung.`,
              `Aufblasbare Matratzen, Glasgegenstände, alkoholische Getränke, laute Musik oder Lautsprecher, Rauchen, Ballspiele, Schläger und Straßenschuhe sind im Poolbereich nicht erlaubt.`,
              `Picknicks, Veranstaltungen, Feiern und Haustiere sind im Poolbereich nicht gestattet.`,
              `Bitte reserviert keine Plätze mit Handtüchern oder anderen Gegenständen. Nehmt beim Verlassen des Poolbereichs alle persönlichen Sachen mit.`,
              `Bitte entsorgt sämtlichen Abfall. Müllbeutel und organische Abfälle wie Lebensmittel oder Windeln dürfen nicht in den Gemeinschaftspapierkörben zurückgelassen werden.`
            ],
            es: [
              `La piscina comunitaria solo puede utilizarse durante la temporada oficialmente autorizada. Cierra el 30 de septiembre.`,
              `El horario es de 10:00 a 21:00. Está prohibido permanecer en el recinto de la piscina fuera de este horario.`,
              `Los menores de 12 años solo pueden acceder acompañados y supervisados por un adulto responsable.`,
              `Se permite un máximo de cuatro visitantes externos por apartamento. Siempre deberán estar acompañados por una persona autorizada para utilizar la piscina.`,
              `Está prohibido acceder en estado de embriaguez o bajo la influencia de drogas u otras sustancias. Cuando no haya socorrista, el uso de la piscina será bajo la responsabilidad del usuario.`,
              `No se permiten colchonetas inflables, objetos de cristal, bebidas alcohólicas, música alta o altavoces, fumar, pelotas, raquetas ni calzado de calle.`,
              `No están permitidos los picnics, eventos, fiestas ni mascotas en el recinto de la piscina.`,
              `No reservéis espacios con toallas u otros objetos. Al salir del recinto, retirad todas vuestras pertenencias.`,
              `Retirad toda la basura. No dejéis bolsas de basura ni residuos orgánicos, como comida o pañales, en las papeleras comunitarias.`
            ],
            nl: [
              `Het gemeenschappelijke zwembad mag alleen tijdens het officieel toegestane seizoen worden gebruikt. Het sluit op 30 september.`,
              `De openingstijden zijn van 10.00 tot 21.00 uur. Buiten deze tijden is verblijf in het zwembadgedeelte niet toegestaan.`,
              `Kinderen jonger dan 12 jaar mogen het zwembadgedeelte alleen betreden onder begeleiding en toezicht van een verantwoordelijke volwassene.`,
              `Per appartement zijn maximaal vier externe bezoekers toegestaan. Zij moeten altijd worden begeleid door iemand die bevoegd is om het zwembad te gebruiken.`,
              `Toegang onder invloed van alcohol, drugs of andere middelen is verboden. Wanneer er geen badmeester aanwezig is, wordt het zwembad op eigen verantwoordelijkheid gebruikt.`,
              `Luchtbedden, glazen voorwerpen, alcoholische dranken, harde muziek of luidsprekers, roken, ballen, rackets en straatschoenen zijn niet toegestaan in het zwembadgedeelte.`,
              `Picknicks, evenementen, feesten en huisdieren zijn niet toegestaan in het zwembadgedeelte.`,
              `Reserveer geen plaatsen met handdoeken of andere eigendommen. Neem bij het verlaten van het zwembadgedeelte al jullie persoonlijke spullen mee.`,
              `Verwijder al het afval. Laat geen vuilniszakken of organisch afval, zoals etensresten of luiers, achter in de gemeenschappelijke afvalbakken.`
            ],
            sv: [
              `Den gemensamma poolen får endast användas under den officiellt godkända säsongen. Den stänger den 30 september.`,
              `Öppettiderna är 10.00–21.00. Det är förbjudet att vistas i poolområdet utanför dessa tider.`,
              `Barn under 12 år får endast vistas i poolområdet tillsammans med och under uppsikt av en ansvarig vuxen.`,
              `Högst fyra externa besökare per lägenhet är tillåtna. De måste alltid vara tillsammans med en person som har rätt att använda poolen.`,
              `Tillträde är förbjudet för personer som är berusade eller påverkade av droger eller andra substanser. När ingen badvakt finns på plats sker användningen på eget ansvar.`,
              `Uppblåsbara madrasser, glasföremål, alkoholhaltiga drycker, hög musik eller högtalare, rökning, bollar, racketar och utomhusskor är inte tillåtna i poolområdet.`,
              `Picknick, evenemang, fester och husdjur är inte tillåtna i poolområdet.`,
              `Reservera inte platser med handdukar eller andra tillhörigheter. Ta med alla personliga saker när ni lämnar poolområdet.`,
              `Ta med allt avfall. Lämna inte soppåsar eller organiskt avfall, såsom mat eller blöjor, i de gemensamma papperskorgarna.`
            ]
          })
        },
        {
          icon: 'flame',
          title: tarifaText('Fireplace', 'Kamin', 'Chimenea', 'Open haard', 'Eldstad'),
          body: tarifaParagraphs({
            en: [
              `You are welcome to use the fireplace during <strong>December, January and February</strong>.`,
              `For safety, we kindly ask that it is used only by guests who already have experience with <strong>wood-burning fireplaces</strong>.`,
              `Please use only <strong>dry wood</strong>, never leave the fire unattended, and make sure it is fully out before going to sleep or leaving the apartment.`,
              `The apartment is equipped with a <strong>smoke detector</strong> and a <strong>carbon monoxide sensor</strong> for additional safety.`,
              `A small starter supply of wood is provided. If you are unsure how to use this type of fireplace safely, please do not use it.`
            ],
            de: [
              `Ihr könnt den Kamin gerne im <strong>Dezember, Januar und Februar</strong> nutzen.`,
              `Aus Sicherheitsgründen bitten wir darum, dass er nur von Gästen benutzt wird, die bereits Erfahrung mit <strong>Holzkaminen</strong> haben.`,
              `Bitte verwendet nur <strong>trockenes Holz</strong>, lasst das Feuer nie unbeaufsichtigt und stellt sicher, dass es komplett erloschen ist, bevor ihr schlafen geht oder das Apartment verlasst.`,
              `Das Apartment ist für zusätzliche Sicherheit mit einem <strong>Rauchmelder</strong> und einem <strong>Kohlenmonoxidsensor</strong> ausgestattet.`,
              `Ein kleines Starter-Set an Holz liegt bereit. Wenn ihr unsicher seid, wie man diese Art von Kamin sicher bedient, nutzt ihn bitte nicht.`
            ],
            es: [
              `Podéis utilizar la chimenea durante los meses de <strong>diciembre, enero y febrero</strong>.`,
              `Por seguridad, pedimos que solo la utilicen huéspedes que ya tengan experiencia con <strong>chimeneas de leña</strong>.`,
              `Usad solo <strong>leña seca</strong>, nunca dejéis el fuego desatendido y aseguraos de que esté completamente apagado antes de dormir o salir del apartamento.`,
              `El apartamento cuenta con <strong>detector de humo</strong> y <strong>sensor de monóxido de carbono</strong> para mayor seguridad.`,
              `Se proporciona un pequeño suministro inicial de leña. Si no estáis seguros de cómo usar este tipo de chimenea con seguridad, por favor, no la utilicéis.`
            ],
            nl: [
              `Jullie kunnen de open haard gebruiken in <strong>december, januari en februari</strong>.`,
              `Voor de veiligheid vragen we vriendelijk dat deze alleen wordt gebruikt door gasten die al ervaring hebben met <strong>houtgestookte open haarden</strong>.`,
              `Gebruik alleen <strong>droog hout</strong>, laat het vuur nooit onbeheerd achter en zorg ervoor dat het volledig uit is voordat jullie gaan slapen of het appartement verlaten.`,
              `Het appartement is uitgerust met een <strong>rookmelder</strong> en een <strong>koolmonoxidemelder</strong> voor extra veiligheid.`,
              `Er is een kleine startvoorraad hout aanwezig. Als jullie niet zeker weten hoe dit type open haard veilig gebruikt moet worden, gebruik hem dan niet.`
            ],
            sv: [
              `Ni är välkomna att använda eldstaden under <strong>december, januari och februari</strong>.`,
              `För säkerhets skull ber vi vänligen att den endast används av gäster som redan har erfarenhet av <strong>vedeldade öppna spisar</strong>.`,
              `Använd endast <strong>torr ved</strong>, lämna aldrig elden obevakad och se till att den är helt släckt innan ni går och lägger er eller lämnar lägenheten.`,
              `Lägenheten är utrustad med <strong>rökdetektor</strong> och <strong>kolmonoxidsensor</strong> för extra säkerhet.`,
              `En liten startmängd ved tillhandahålls. Om ni är osäkra på hur man använder denna typ av eldstad på ett säkert sätt, vänligen avstå från att använda den.`
            ]
          })
        },
        {
          icon: 'wave',
          title: tarifaText('Surfskates', 'Surfskates', 'Surfskates', 'Surfskates', 'Surfskates'),
          body: tarifaParagraphs({
            en: [
              `Complimentary surfskates and skateboards are available during your stay.`,
              `For a perfect ride, visit <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Paseo+Skatepark+Tarifa" target="_blank" rel="noopener">El Paseo Skatepark Tarifa</a> or cruise along the beachfront promenade.`
            ],
            de: [
              `Während eures Aufenthalts stehen euch kostenlose Surfskates und Skateboards zur Verfügung.`,
              `Für die perfekte Fahrt besucht den <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Paseo+Skatepark+Tarifa" target="_blank" rel="noopener">El Paseo Skatepark Tarifa</a> oder cruist entlang der Strandpromenade.`
            ],
            es: [
              `Tenéis a vuestra disposición surfskates y monopatines de cortesía durante vuestra estancia.`,
              `Para un paseo perfecto, visitad <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Paseo+Skatepark+Tarifa" target="_blank" rel="noopener">El Paseo Skatepark Tarifa</a> o recorred el paseo marítimo.`
            ],
            nl: [
              `Tijdens jullie verblijf zijn er gratis surfskates en skateboards beschikbaar.`,
              `Voor een perfecte rit, bezoek <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Paseo+Skatepark+Tarifa" target="_blank" rel="noopener">El Paseo Skatepark Tarifa</a> of cruise langs de strandboulevard.`
            ],
            sv: [
              `Gratis surfskates och skateboards finns tillgängliga under er vistelse.`,
              `För en perfekt åktur, besök <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Paseo+Skatepark+Tarifa" target="_blank" rel="noopener">El Paseo Skatepark Tarifa</a> eller rulla längs strandpromenaden.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Sustainability',
        'Nachhaltigkeit',
        'Sostenibilidad',
        'Duurzaamheid',
        'Hållbarhet'
      ),
      items: [
        {
          icon: 'watering-can',
          title: tarifaText(
            'Our Environmental Approach',
            'Unser Umweltansatz',
            'Nuestro enfoque medioambiental',
            'Onze milieubenadering',
            'Vårt miljöarbete'
          ),
          body: tarifaParagraphs({
            en: [
              `At AMARA, we believe comfort and responsibility belong together.`,
              `The apartment is powered by <strong>100% renewable energy</strong> and equipped with carefully selected, energy-efficient appliances designed to reduce unnecessary consumption.`,
              `You may notice that the dishwasher and waste bins are intentionally compact. This is a conscious design choice. Smaller systems naturally encourage mindful daily use of water and resources, helping reduce waste without compromising comfort.`,
              `Simple habits — turning off lights, closing windows during strong winds, and using resources thoughtfully — allow us to protect the environment that makes Tarifa so special.`
            ],
            de: [
              `Bei AMARA glauben wir, dass Komfort und Verantwortung zusammengehören.`,
              `Das Apartment wird zu <strong>100 % mit erneuerbarer Energie</strong> versorgt und ist mit sorgfältig ausgewählten, energieeffizienten Geräten ausgestattet, die unnötigen Verbrauch reduzieren.`,
              `Ihr werdet vielleicht feststellen, dass die Spülmaschine und die Mülleimer bewusst kompakt gehalten sind. Das ist eine bewusste Designentscheidung. Kleinere Systeme fördern auf natürliche Weise einen achtsamen täglichen Umgang mit Wasser und Ressourcen und helfen, Abfall zu reduzieren, ohne den Komfort zu beeinträchtigen.`,
              `Einfache Gewohnheiten – Licht ausschalten, Fenster bei starkem Wind schließen und Ressourcen rücksichtsvoll nutzen – ermöglichen es uns, die Umwelt zu schützen, die Tarifa so besonders macht.`
            ],
            es: [
              `En AMARA creemos que el confort y la responsabilidad van de la mano.`,
              `El apartamento funciona con <strong>energía 100% renovable</strong> y está equipado con electrodomésticos eficientes y cuidadosamente seleccionados, diseñados para reducir el consumo innecesario.`,
              `Notaréis que el lavavajillas y los cubos de basura son intencionadamente compactos. Esta es una elección de diseño consciente. Los sistemas más pequeños fomentan de forma natural un uso diario y consciente del agua y los recursos, ayudando a reducir los residuos sin comprometer el confort.`,
              `Hábitos sencillos, como apagar las luces, cerrar las ventanas si hace mucho viento y usar los recursos de forma considerada, nos permiten proteger el entorno que hace que Tarifa sea tan especial.`
            ],
            nl: [
              `Bij AMARA geloven we dat comfort en verantwoordelijkheid samengaan.`,
              `Het appartement wordt aangedreven door <strong>100% hernieuwbare energie</strong> en is uitgerust met zorgvuldig geselecteerde, energiezuinige apparaten die zijn ontworpen om onnodig verbruik te verminderen.`,
              `Het zal jullie misschien opvallen dat de vaatwasser en prullenbakken bewust compact zijn. Dit is een bewuste ontwerpkeuze. Kleinere systemen stimuleren van nature een bewust dagelijks gebruik van water en hulpbronnen, en helpen afval te verminderen zonder afbreuk te doen aan comfort.`,
              `Simpele gewoontes — lichten uitdoen, ramen sluiten bij harde wind en middelen bedachtzaam gebruiken — stellen ons in staat het milieu te beschermen dat Tarifa zo speciaal maakt.`
            ],
            sv: [
              `På AMARA anser vi att komfort och ansvar hör ihop.`,
              `Lägenheten drivs av <strong>100 % förnybar energi</strong> och är utrustad med noggrant utvalda, energieffektiva apparater som är designade för att minska onödig förbrukning.`,
              `Ni kanske märker att diskmaskinen och papperskorgarna medvetet är kompakta. Detta är ett medvetet designval. Mindre system uppmuntrar naturligtvis till en medveten daglig användning av vatten och resurser, vilket hjälper till att minska svinn utan att kompromissa med komforten.`,
              `Enkla vanor — som att släcka lampor, stänga fönster vid hård vind och använda resurser eftertänksamt — gör att vi kan skydda den miljö som gör Tarifa så speciellt.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Community & Safety',
        'Gemeinschaft & Sicherheit',
        'Comunidad y seguridad',
        'Gemeenschap & veiligheid',
        'Gemenskap & säkerhet'
      ),
      items: [
        {
          icon: 'accommodation',
          title: tarifaText(
            'Community Rules',
            'Gemeinschaftsregeln',
            'Normas de la comunidad',
            'Gemeenschapsregels',
            'Gemensamhetsregler'
          ),
          body: tarifaParagraphs({
            en: [
              `These community rules are mandatory for all occupants, tenants and visitors. Please help us maintain a safe and peaceful environment for everyone.`,
              `Park only in the space assigned to the apartment. Do not use any other parking space, even temporarily or if your assigned space is occupied.`,
              `For safety reasons, garage doors must not be used as pedestrian entrances. Please use the designated pedestrian access points.`,
              `Avoid disturbing noise and loud music at all times. Noise is strictly prohibited between 11:00 PM and 7:00 AM.`,
              `Smoking is prohibited in lifts and enclosed communal areas.`,
              `Do not place food, nappies or other organic waste in communal bins. Please use the municipal waste containers.`,
              `Pets are not permitted in AMARA Family & Surf or in its communal areas. Mandatory rules concerning recognised assistance animals remain unaffected.`,
              `Please respect the lawns, planted areas and irrigation systems. Do not walk on the grass with street footwear or cause any damage.`
            ],
            de: [
              `Diese Gemeinschaftsregeln sind für alle Bewohner, Mieter und Besucher verbindlich. Bitte helft uns, ein sicheres und ruhiges Umfeld für alle zu erhalten.`,
              `Parkt ausschließlich auf dem der Wohnung zugewiesenen Stellplatz. Benutzt keinen anderen Stellplatz, auch nicht kurzfristig oder wenn der zugewiesene Stellplatz belegt ist.`,
              `Aus Sicherheitsgründen dürfen die Garagentore nicht als Fußgängerzugang benutzt werden. Bitte verwendet die vorgesehenen Fußgängereingänge.`,
              `Vermeidet jederzeit störenden Lärm und laute Musik. Zwischen 23:00 und 07:00 Uhr sind laute Geräusche strengstens verboten.`,
              `Das Rauchen ist in Aufzügen und geschlossenen Gemeinschaftsbereichen verboten.`,
              `Lebensmittel, Windeln und andere organische Abfälle dürfen nicht in den Gemeinschaftspapierkörben entsorgt werden. Bitte benutzt dafür die kommunalen Müllcontainer.`,
              `Haustiere sind in AMARA Family & Surf und in den Gemeinschaftsbereichen nicht erlaubt. Zwingende Regelungen für anerkannte Assistenzhunde bleiben unberührt.`,
              `Bitte respektiert die Rasenflächen, Bepflanzungen und Bewässerungssysteme. Betretet den Rasen nicht mit Straßenschuhen und verursacht keine Schäden.`
            ],
            es: [
              `Estas normas de la comunidad son obligatorias para todos los ocupantes, inquilinos y visitantes. Por favor, ayudadnos a mantener un entorno seguro y tranquilo para todos.`,
              `Aparcad únicamente en la plaza asignada al apartamento. No utilicéis ninguna otra plaza, ni siquiera temporalmente o si la plaza asignada está ocupada.`,
              `Por motivos de seguridad, está prohibido utilizar las puertas del garaje como acceso peatonal. Utilizad los accesos peatonales habilitados.`,
              `Evitad en todo momento los ruidos molestos y la música alta. Los ruidos fuertes están terminantemente prohibidos entre las 23:00 y las 07:00.`,
              `Está prohibido fumar en los ascensores y en los espacios comunes cerrados.`,
              `No depositéis comida, pañales ni otros residuos orgánicos en las papeleras comunitarias. Utilizad los contenedores municipales.`,
              `No se admiten mascotas en AMARA Family & Surf ni en sus zonas comunes. Las normas imperativas relativas a perros de asistencia reconocidos no se ven afectadas.`,
              `Respetad las zonas de césped, las plantaciones y los sistemas de riego. No piséis el césped con calzado de calle ni causéis daños.`
            ],
            nl: [
              `Deze gemeenschapsregels zijn verplicht voor alle bewoners, huurders en bezoekers. Help ons om voor iedereen een veilige en rustige omgeving te behouden.`,
              `Parkeer uitsluitend op de parkeerplaats die aan het appartement is toegewezen. Gebruik geen andere parkeerplaats, ook niet tijdelijk of wanneer de toegewezen plaats bezet is.`,
              `Om veiligheidsredenen mogen de garagedeuren niet als voetgangersingang worden gebruikt. Gebruik de daarvoor bestemde voetgangersingangen.`,
              `Vermijd te allen tijde storend lawaai en harde muziek. Lawaai is strikt verboden tussen 23.00 en 07.00 uur.`,
              `Roken is verboden in liften en afgesloten gemeenschappelijke ruimtes.`,
              `Gooi geen etensresten, luiers of ander organisch afval in de gemeenschappelijke afvalbakken. Gebruik hiervoor de gemeentelijke afvalcontainers.`,
              `Huisdieren zijn niet toegestaan in AMARA Family & Surf of in de gemeenschappelijke ruimtes. Dwingende regels voor erkende assistentiedieren blijven onverminderd gelden.`,
              `Respecteer de gazons, beplanting en irrigatiesystemen. Loop niet met straatschoenen over het gras en veroorzaak geen schade.`
            ],
            sv: [
              `Dessa gemensamhetsregler är obligatoriska för alla boende, hyresgäster och besökare. Hjälp oss att bevara en trygg och lugn miljö för alla.`,
              `Parkera endast på den parkeringsplats som tillhör lägenheten. Använd ingen annan plats, inte heller tillfälligt eller om den tilldelade platsen är upptagen.`,
              `Av säkerhetsskäl får garageportarna inte användas som gångentré. Använd de avsedda gångentréerna.`,
              `Undvik störande ljud och hög musik under hela dygnet. Höga ljud är strikt förbjudna mellan 23.00 och 07.00.`,
              `Rökning är förbjuden i hissar och slutna gemensamma utrymmen.`,
              `Lägg inte mat, blöjor eller annat organiskt avfall i de gemensamma papperskorgarna. Använd de kommunala avfallsbehållarna.`,
              `Husdjur är inte tillåtna i AMARA Family & Surf eller i de gemensamma utrymmena. Tvingande regler om erkända assistansdjur påverkas inte.`,
              `Respektera gräsytor, planteringar och bevattningssystem. Gå inte på gräset med utomhusskor och orsaka ingen skada.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText('Check-out', 'Check-out', 'Check-out', 'Check-out', 'Check-out'),
      items: [
        {
          icon: 'late-checkout',
          title: tarifaText(
            'Late Check-out',
            'Late Check-out',
            'Late check-out',
            'Late check-out',
            'Sen utcheckning'
          ),
          body: tarifaParagraphs({
            en: [
              `The check-out time is <strong>11:00 AM</strong>.`,
              `To ensure the apartment can be prepared carefully for the next guests, we kindly ask you to respect the regular check-out time of <strong>11:00 AM</strong>.`,
              `If you would like to stay in the apartment until <strong>6:00 PM</strong>, this may be possible for <strong>€90</strong> from October to April and <strong>€160</strong> from May to September.`,
              `As this requires us to keep the apartment unavailable for a possible new arrival, late check-out until 6:00 PM must be arranged in advance and confirmed by us.`,
              `If you would like to request a late check-out, please message us as early as possible.`
            ],
            de: [
              `Die Check-out-Zeit ist um <strong>11:00 Uhr</strong>.`,
              `Damit das Apartment sorgfältig für die nächsten Gäste vorbereitet werden kann, bitten wir euch, die reguläre Check-out-Zeit um <strong>11:00 Uhr</strong> einzuhalten.`,
              `Wenn ihr das Apartment bis <strong>18:00 Uhr</strong> nutzen möchtet, ist dies möglicherweise von Oktober bis April für <strong>90 €</strong> und von Mai bis September für <strong>160 €</strong> möglich.`,
              `Da wir das Apartment dafür für eine mögliche neue Anreise blockieren müssen, muss ein Late Check-out bis 18:00 Uhr vorab mit uns abgestimmt und von uns bestätigt werden.`,
              `Wenn ihr einen Late Check-out anfragen möchtet, schreibt uns bitte möglichst frühzeitig.`
            ],
            es: [
              `La hora de check-out es a las <strong>11:00</strong>.`,
              `Para que el apartamento pueda prepararse cuidadosamente para los próximos huéspedes, os pedimos que respetéis la hora habitual de check-out a las <strong>11:00</strong>.`,
              `Si queréis permanecer en el apartamento hasta las <strong>18:00</strong>, esto puede ser posible por <strong>90 €</strong> de octubre a abril y <strong>160 €</strong> de mayo a septiembre.`,
              `Como para ello debemos mantener el apartamento no disponible para una posible nueva llegada, el late check-out hasta las 18:00 debe acordarse con antelación y ser confirmado por nosotros.`,
              `Si queréis solicitar un late check-out, por favor escribidnos con la mayor antelación posible.`
            ],
            nl: [
              `De check-outtijd is om <strong>11:00 uur</strong>.`,
              `Om het appartement zorgvuldig voor de volgende gasten te kunnen voorbereiden, vragen we jullie vriendelijk om de reguliere check-outtijd van <strong>11:00 uur</strong> te respecteren.`,
              `Als jullie het appartement tot <strong>18:00 uur</strong> willen blijven gebruiken, is dit mogelijk voor <strong>€90</strong> van oktober tot april en <strong>€160</strong> van mei tot september.`,
              `Omdat we het appartement hiervoor niet beschikbaar moeten houden voor een mogelijke nieuwe aankomst, moet een late check-out tot 18:00 uur vooraf met ons worden afgestemd en door ons worden bevestigd.`,
              `Als jullie een late check-out willen aanvragen, stuur ons dan zo vroeg mogelijk een bericht.`
            ],
            sv: [
              `Utcheckningstiden är kl. <strong>11:00</strong>.`,
              `För att lägenheten ska kunna förberedas omsorgsfullt för nästa gäster ber vi er vänligen att respektera den ordinarie utcheckningstiden kl. <strong>11.00</strong>.`,
              `Om ni vill använda lägenheten fram till <strong>18:00</strong> kan detta vara möjligt för <strong>€90</strong> från oktober till april och <strong>€160</strong> från maj till september.`,
              `Eftersom vi då måste hålla lägenheten otillgänglig för en eventuell ny ankomst, måste sen utcheckning till kl. 18:00 avtalas i förväg och bekräftas av oss.`,
              `Om ni vill begära sen utcheckning, vänligen skicka ett meddelande till oss så tidigt som möjligt.`
            ]
          })
        },
        {
          icon: 'departure',
          title: tarifaText(
            'Departure Information',
            'Abreise',
            'Salida',
            'Vertrek',
            'Avresa'
          ),
          body: tarifaParagraphs({
            en: [
              `Check-out time is <strong>11:00 AM</strong>.`,
              `Before you leave, please make sure to log out of any private TV or streaming accounts.`,
              `<strong>We would also kindly ask you to take one last look around the apartment before departing.</strong>`,
              `Please check carefully that you have taken all your personal belongings with you. Items that are often forgotten include phone chargers, curling irons, jackets, EarPods or AirPods, jewellery, clothing and charging cables.`,
              `When departing, lock the door and follow the key-return instructions in the communication channel connected to your booking.`
            ],
            de: [
              `Check-out ist um <strong>11:00 Uhr</strong>.`,
              `Bitte denkt vor eurer Abreise daran, euch aus allen privaten TV- oder Streaming-Konten auszuloggen.`,
              `<strong>Wir würden euch außerdem bitten, vor der Abreise noch einmal einen letzten ruhigen Blick durch das Apartment zu werfen.</strong>`,
              `Bitte prüft dabei sorgfältig, ob ihr wirklich alle persönlichen Gegenstände wieder mitgenommen habt. Typische Dinge, die immer wieder vergessen werden, sind Handy-Ladegeräte, Lockenstäbe, Jacken, EarPods oder AirPods, Schmuck, Kleidung und Ladekabel.`,
              `Schließt bei der Abreise die Tür ab und folgt den Hinweisen zur Schlüsselrückgabe im Kommunikationskanal eurer Buchung.`
            ],
            es: [
              `La hora de check-out es a las <strong>11:00</strong>.`,
              `Antes de salir, aseguraos de cerrar la sesión de cualquier cuenta privada de televisión o streaming.`,
              `<strong>También os pediríamos amablemente que, antes de marcharos, echéis un último vistazo tranquilo al apartamento.</strong>`,
              `Comprobad con cuidado que os lleváis todas vuestras pertenencias personales. Entre las cosas que más se olvidan están cargadores de móvil, rizadores, chaquetas, EarPods o AirPods, joyas, ropa y cables de carga.`,
              `Al salir, cerrad la puerta y seguid las instrucciones para devolver las llaves en el canal de comunicación asociado a vuestra reserva.`
            ],
            nl: [
              `De check-out tijd is <strong>11:00 uur</strong>.`,
              `Vergeet voor vertrek niet om uit te loggen uit jullie privé tv- of streamingaccounts.`,
              `<strong>We willen jullie ook vriendelijk vragen om voor vertrek nog één laatste rustige blik door het appartement te werpen.</strong>`,
              `Controleer daarbij goed of jullie echt al jullie persoonlijke spullen weer hebben meegenomen. Dingen die vaak blijven liggen zijn telefoonopladers, krultangen, jassen, EarPods of AirPods, sieraden, kleding en oplaadkabels.`,
              `Sluit bij vertrek de deur af en volg de instructies voor het terugbrengen van de sleutels in het communicatiekanaal van jullie boeking.`
            ],
            sv: [
              `Utcheckning är kl. <strong>11:00</strong>.`,
              `Innan ni åker, vänligen se till att logga ut från alla privata tv- eller streamingkonton.`,
              `<strong>Vi vill också vänligen be er att ta en sista lugn titt runt i lägenheten innan ni åker.</strong>`,
              `Kontrollera noggrant att ni verkligen fått med er alla personliga tillhörigheter. Saker som ofta glöms kvar är mobilladdare, locktänger, jackor, EarPods eller AirPods, smycken, kläder och laddkablar.`,
              `Lås dörren vid avresan och följ instruktionerna för nyckelåterlämning i kommunikationskanalen för er bokning.`
            ]
          })
        }
      ]
    }
  ]
};

const tarifaFamilySurfLocalEssentials: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-local-essentials',
  entityKey: 'amara-family-surf',
  backSlug: 'guestwelcome-tarifa-family-surf',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Local Essentials | AMARA Tarifa',
    'Tarifa kompakt | AMARA Tarifa',
    'Lo esencial de Tarifa | AMARA Tarifa',
    'Tarifa essentials | AMARA Tarifa',
    'Det viktigaste i Tarifa | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'Everyday tips and practical information for your stay in Tarifa.',
    'Alltagstipps und praktische Informationen für euren Aufenthalt in Tarifa.',
    'Consejos cotidianos e información práctica para vuestra estancia en Tarifa.',
    'Dagelijkse tips en praktische informatie voor jullie verblijf in Tarifa.',
    'Vardagstips och praktisk information för er vistelse i Tarifa.'
  ),
  kicker: tarifaText(
    'TARIFA GUEST GUIDE',
    'TARIFA GÄSTEGUIDE',
    'GUÍA PARA HUÉSPEDES EN TARIFA',
    'TARIFA GASTENGIDS',
    'TARIFA GÄSTGUIDE'
  ),
  title: tarifaText(
    'Tarifa Essentials',
    'Tarifa kompakt',
    'Lo esencial de Tarifa',
    'Tarifa essentials',
    'Det viktigaste i Tarifa'
  ),
  intro: tarifaText(
    'A few local essentials to make your stay feel effortless — from fresh bread to practical services nearby.',
    'Ein paar lokale Essentials, die euren Aufenthalt unkompliziert machen – von frischem Brot bis hin zu praktischen Services in der Nähe.',
    'Algunos datos locales esenciales para que vuestra estancia sea más fácil: desde pan fresco hasta servicios prácticos cercanos.',
    'Een paar lokale essentials om jullie verblijf moeiteloos te laten verlopen — van vers brood tot praktische diensten in de buurt.',
    'Några lokala tips som gör er vistelse smidigare — från färskt bröd till praktiska tjänster i närheten.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Everyday Essentials',
        'Alltags-Basics',
        'Lo esencial para el día a día',
        'Dagelijkse basics',
        'Det viktigaste i vardagen'
      ),
      items: [
        {
          icon: 'bread',
          title: tarifaText(
            'Patisserie & Bakery',
            'Bäckerei & Konditorei',
            'Pastelería y panadería',
            'Patisserie & bakkerij',
            'Bageri & konditori'
          ),
          body: tarifaParagraphs({
            en: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pastelito+C.+Los+Barrios+4+11380+Tarifa" target="_blank" rel="noopener">Pastelito</a></strong> <span class="am-muted">(350 m · 4 min.)</span>`,
              `A small French bakery with very good bread and pastries. This is the bakery we most often recommend for a simple morning bread run.`,
              `C. Los Barrios, 4, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+La+Tarife%C3%B1a+Cig%C3%BCe%C3%B1a+Negra+98+11380+Tarifa" target="_blank" rel="noopener">Pastelería La Tarifeña</a></strong> <span class="am-muted">(near the apartment)</span>`,
              `A long-standing local pastry shop for cakes, pastries and classic Andalusian sweets. The branch near the apartment is especially practical during your stay.`,
              `C. Cigüeña Negra, 98, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+Bernal+C.+Sancho+IV+el+Bravo+3+11380+Tarifa" target="_blank" rel="noopener">Pastelería Bernal</a></strong> <span class="am-muted">(Old Town)</span>`,
              `Best known for its traditional pastries and its famous Pan Macho. A very good stop if you are already strolling through the centre.`,
              `C. Sancho IV el Bravo, 3, Tarifa`
            ],
            de: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pastelito+C.+Los+Barrios+4+11380+Tarifa" target="_blank" rel="noopener">Pastelito</a></strong> <span class="am-muted">(350 m · 4 Min.)</span>`,
              `Eine kleine französische Bäckerei mit sehr gutem Brot und Gebäck. Dies ist die Bäckerei, die wir für die morgendlichen Brötchen meistens empfehlen.`,
              `C. Los Barrios, 4, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+La+Tarife%C3%B1a+Cig%C3%BCe%C3%B1a+Negra+98+11380+Tarifa" target="_blank" rel="noopener">Pastelería La Tarifeña</a></strong> <span class="am-muted">(in der Nähe des Apartments)</span>`,
              `Eine traditionsreiche lokale Konditorei für Kuchen, Gebäck und klassische andalusische Süßigkeiten. Die Filiale in der Nähe des Apartments ist besonders praktisch.`,
              `C. Cigüeña Negra, 98, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+Bernal+C.+Sancho+IV+el+Bravo+3+11380+Tarifa" target="_blank" rel="noopener">Pastelería Bernal</a></strong> <span class="am-muted">(Altstadt)</span>`,
              `Bekannt für traditionelles Gebäck und das berühmte Pan Macho. Ein sehr guter Stopp, wenn ihr ohnehin durch das Zentrum bummelt.`,
              `C. Sancho IV el Bravo, 3, Tarifa`
            ],
            es: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pastelito+C.+Los+Barrios+4+11380+Tarifa" target="_blank" rel="noopener">Pastelito</a></strong> <span class="am-muted">(350 m · 4 min)</span>`,
              `Una pequeña panadería francesa con muy buen pan y bollería. Esta es la panadería que solemos recomendar para comprar el pan por la mañana.`,
              `C. Los Barrios, 4, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+La+Tarife%C3%B1a+Cig%C3%BCe%C3%B1a+Negra+98+11380+Tarifa" target="_blank" rel="noopener">Pastelería La Tarifeña</a></strong> <span class="am-muted">(cerca del apartamento)</span>`,
              `Una pastelería local tradicional con tartas, pasteles y dulces clásicos andaluces. La sucursal cerca del apartamento es muy práctica.`,
              `C. Cigüeña Negra, 98, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+Bernal+C.+Sancho+IV+el+Bravo+3+11380+Tarifa" target="_blank" rel="noopener">Pastelería Bernal</a></strong> <span class="am-muted">(Casco Antiguo)</span>`,
              `Conocida por su repostería tradicional y su famoso Pan Macho. Una buena parada si ya estáis paseando por el centro.`,
              `C. Sancho IV el Bravo, 3, Tarifa`
            ],
            nl: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pastelito+C.+Los+Barrios+4+11380+Tarifa" target="_blank" rel="noopener">Pastelito</a></strong> <span class="am-muted">(350 m · 4 min.)</span>`,
              `Een kleine Franse bakker met heel goed brood en gebak. Dit is de bakkerij die we het vaakst aanraden voor vers brood in de ochtend.`,
              `C. Los Barrios, 4, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+La+Tarife%C3%B1a+Cig%C3%BCe%C3%B1a+Negra+98+11380+Tarifa" target="_blank" rel="noopener">Pastelería La Tarifeña</a></strong> <span class="am-muted">(vlak bij het appartement)</span>`,
              `Een traditionele lokale patisserie voor taarten, gebakjes en klassieke Andalusische zoetigheden. De vestiging bij het appartement is erg praktisch.`,
              `C. Cigüeña Negra, 98, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+Bernal+C.+Sancho+IV+el+Bravo+3+11380+Tarifa" target="_blank" rel="noopener">Pastelería Bernal</a></strong> <span class="am-muted">(Oude Stad)</span>`,
              `Bekend om het traditionele gebak en het beroemde Pan Macho. Een leuke stop als jullie toch al door het centrum wandelen.`,
              `C. Sancho IV el Bravo, 3, Tarifa`
            ],
            sv: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pastelito+C.+Los+Barrios+4+11380+Tarifa" target="_blank" rel="noopener">Pastelito</a></strong> <span class="am-muted">(350 m · 4 min.)</span>`,
              `Ett litet franskt bageri med mycket gott bröd och bakverk. Det här är det bageri vi oftast rekommenderar för att köpa morgonbrödet.`,
              `C. Los Barrios, 4, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+La+Tarife%C3%B1a+Cig%C3%BCe%C3%B1a+Negra+98+11380+Tarifa" target="_blank" rel="noopener">Pastelería La Tarifeña</a></strong> <span class="am-muted">(nära lägenheten)</span>`,
              `Ett anrikt lokalt konditori för tårtor, bakverk och klassiska andalusiska sötsaker. Filialen nära lägenheten är väldigt praktisk under er vistelse.`,
              `C. Cigüeña Negra, 98, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Pasteler%C3%ADa+Bernal+C.+Sancho+IV+el+Bravo+3+11380+Tarifa" target="_blank" rel="noopener">Pastelería Bernal</a></strong> <span class="am-muted">(Gamla Stan)</span>`,
              `Mest känd för sina traditionella bakverk och sitt berömda Pan Macho. Ett bra stopp om ni redan strosar runt i centrum.`,
              `C. Sancho IV el Bravo, 3, Tarifa`
            ]
          })
        },
        {
          icon: 'cart',
          title: tarifaText(
            'Supermarkets',
            'Supermärkte',
            'Supermercados',
            'Supermarkten',
            'Stormarknader'
          ),
          body: tarifaParagraphs({
            en: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+C.+Batalla+del+Salado+11380+Tarifa" target="_blank" rel="noopener">Mercadona</a></strong> <span class="am-muted">(directly across from the apartment)</span>`,
              `Usually the easiest option for daily groceries. It is especially practical for staple items and a simple same-day shop.`,
              `C. Batalla del Salado, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lidl+C.+Coronel+Francisco+Vald%C3%A9s+27+11380+Tarifa" target="_blank" rel="noopener">Lidl</a></strong> <span class="am-muted">(larger-format option)</span>`,
              `A useful option for a broader grocery shop, especially if you are already moving around by car.`,
              `C. Coronel Francisco Valdés, 27, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+C.+San+Sebasti%C3%A1n+30+11380+Tarifa" target="_blank" rel="noopener">DIA</a></strong> <span class="am-muted">(smaller local option)</span>`,
              `Handy for a quick grocery stop if you are already in town and do not want to do a full supermarket run.`,
              `C. San Sebastián, 30, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Supeco+Calle+San+Jos%C3%A9+67+11380+Tarifa" target="_blank" rel="noopener">Supeco</a></strong> <span class="am-muted">(for a larger stock-up)</span>`,
              `A practical option for bigger shopping runs and household basics at the edge of town.`,
              `Calle San José, 67, Tarifa`
            ],
            de: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+C.+Batalla+del+Salado+11380+Tarifa" target="_blank" rel="noopener">Mercadona</a></strong> <span class="am-muted">(direkt gegenüber dem Apartment)</span>`,
              `Normalerweise die einfachste Option für den täglichen Einkauf. Besonders praktisch für Grundnahrungsmittel und spontane Besorgungen.`,
              `C. Batalla del Salado, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lidl+C.+Coronel+Francisco+Vald%C3%A9s+27+11380+Tarifa" target="_blank" rel="noopener">Lidl</a></strong> <span class="am-muted">(größere Auswahl)</span>`,
              `Eine gute Option für einen größeren Einkauf, besonders wenn ihr ohnehin mit dem Auto unterwegs seid.`,
              `C. Coronel Francisco Valdés, 27, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+C.+San+Sebasti%C3%A1n+30+11380+Tarifa" target="_blank" rel="noopener">DIA</a></strong> <span class="am-muted">(kleinere lokale Option)</span>`,
              `Praktisch für einen schnellen Einkauf, wenn ihr in der Stadt seid und keinen großen Supermarkt ansteuern wollt.`,
              `C. San Sebastián, 30, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Supeco+Calle+San+Jos%C3%A9+67+11380+Tarifa" target="_blank" rel="noopener">Supeco</a></strong> <span class="am-muted">(für den Großeinkauf)</span>`,
              `Eine praktische Option für größere Einkäufe und Haushaltsbasics am Stadtrand.`,
              `Calle San José, 67, Tarifa`
            ],
            es: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+C.+Batalla+del+Salado+11380+Tarifa" target="_blank" rel="noopener">Mercadona</a></strong> <span class="am-muted">(justo enfrente del apartamento)</span>`,
              `Normalmente la opción más fácil para la compra diaria. Es especialmente práctico para productos básicos y una compra rápida para el día.`,
              `C. Batalla del Salado, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lidl+C.+Coronel+Francisco+Vald%C3%A9s+27+11380+Tarifa" target="_blank" rel="noopener">Lidl</a></strong> <span class="am-muted">(opción de formato más grande)</span>`,
              `Una opción útil para una compra más amplia, especialmente si ya os movéis en coche.`,
              `C. Coronel Francisco Valdés, 27, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+C.+San+Sebasti%C3%A1n+30+11380+Tarifa" target="_blank" rel="noopener">DIA</a></strong> <span class="am-muted">(opción local más pequeña)</span>`,
              `Práctico para una compra rápida si ya estáis en el pueblo y no queréis ir a un supermercado grande.`,
              `C. San Sebastián, 30, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Supeco+Calle+San+Jos%C3%A9+67+11380+Tarifa" target="_blank" rel="noopener">Supeco</a></strong> <span class="am-muted">(para una compra grande)</span>`,
              `Una opción práctica para compras más grandes y productos básicos del hogar en las afueras del pueblo.`,
              `Calle San José, 67, Tarifa`
            ],
            nl: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+C.+Batalla+del+Salado+11380+Tarifa" target="_blank" rel="noopener">Mercadona</a></strong> <span class="am-muted">(direct tegenover het appartement)</span>`,
              `Meestal de makkelijkste optie voor de dagelijkse boodschappen. Vooral praktisch voor basisproducten en een snelle boodschap voor dezelfde dag.`,
              `C. Batalla del Salado, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lidl+C.+Coronel+Francisco+Vald%C3%A9s+27+11380+Tarifa" target="_blank" rel="noopener">Lidl</a></strong> <span class="am-muted">(grotere winkel)</span>`,
              `Een handige optie voor grotere boodschappen, vooral als jullie toch al met de auto op pad zijn.`,
              `C. Coronel Francisco Valdés, 27, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+C.+San+Sebasti%C3%A1n+30+11380+Tarifa" target="_blank" rel="noopener">DIA</a></strong> <span class="am-muted">(kleinere lokale optie)</span>`,
              `Handig voor een snelle boodschap als jullie al in het centrum zijn en geen grote supermarkt willen bezoeken.`,
              `C. San Sebastián, 30, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Supeco+Calle+San+Jos%C3%A9+67+11380+Tarifa" target="_blank" rel="noopener">Supeco</a></strong> <span class="am-muted">(voor een grotere voorraad)</span>`,
              `Een praktische optie voor grote boodschappen en huishoudelijke basisproducten aan de rand van de stad.`,
              `Calle San José, 67, Tarifa`
            ],
            sv: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+C.+Batalla+del+Salado+11380+Tarifa" target="_blank" rel="noopener">Mercadona</a></strong> <span class="am-muted">(mitt emot lägenheten)</span>`,
              `Oftast det enklaste alternativet för dagliga matinköp. Det är särskilt praktiskt för basvaror och en snabb inköpsrunda.`,
              `C. Batalla del Salado, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lidl+C.+Coronel+Francisco+Vald%C3%A9s+27+11380+Tarifa" target="_blank" rel="noopener">Lidl</a></strong> <span class="am-muted">(större alternativ)</span>`,
              `Ett bra alternativ för större inköp, speciellt om ni ändå rör er med bil.`,
              `C. Coronel Francisco Valdés, 27, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DIA+C.+San+Sebasti%C3%A1n+30+11380+Tarifa" target="_blank" rel="noopener">DIA</a></strong> <span class="am-muted">(mindre lokalt alternativ)</span>`,
              `Smidigt för ett snabbt stopp om ni redan är på stan och inte vill gå till en stor mataffär.`,
              `C. San Sebastián, 30, Tarifa`,
              `—`,
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Supeco+Calle+San+Jos%C3%A9+67+11380+Tarifa" target="_blank" rel="noopener">Supeco</a></strong> <span class="am-muted">(för storhandling)</span>`,
              `Ett praktiskt alternativ för större inköp och hushållsartiklar i utkanten av staden.`,
              `Calle San José, 67, Tarifa`
            ]
          })
        },
        {
          icon: 'store',
          title: tarifaText(
            'Local Market',
            'Lokaler Markt',
            'Mercado local',
            'Lokale markt',
            'Lokal marknad'
          ),
          body: tarifaParagraphs({
            en: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercado+P%C3%BAblico+de+Tarifa+C.+Col%C3%B3n+5+11380+Tarifa" target="_blank" rel="noopener">Mercado Público de Tarifa</a></strong> <span class="am-muted">(Old Town)</span>`,
              `For fresh fish, fruit, vegetables and a more everyday side of Tarifa, this is one of the nicest places to go.`,
              `C. Colón, 5, Tarifa`
            ],
            de: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercado+P%C3%BAblico+de+Tarifa+C.+Col%C3%B3n+5+11380+Tarifa" target="_blank" rel="noopener">Mercado Público de Tarifa</a></strong> <span class="am-muted">(Altstadt)</span>`,
              `Für frischen Fisch, Obst, Gemüse und eine eher alltägliche Seite von Tarifa ist dies einer der schönsten Orte.`,
              `C. Colón, 5, Tarifa`
            ],
            es: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercado+P%C3%BAblico+de+Tarifa+C.+Col%C3%B3n+5+11380+Tarifa" target="_blank" rel="noopener">Mercado Público de Tarifa</a></strong> <span class="am-muted">(Casco Antiguo)</span>`,
              `Para pescado fresco, frutas, verduras y un lado más cotidiano de Tarifa, este es uno de los mejores lugares.`,
              `C. Colón, 5, Tarifa`
            ],
            nl: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercado+P%C3%BAblico+de+Tarifa+C.+Col%C3%B3n+5+11380+Tarifa" target="_blank" rel="noopener">Mercado Público de Tarifa</a></strong> <span class="am-muted">(Oude Stad)</span>`,
              `Voor verse vis, fruit, groenten en een meer alledaagse kant van Tarifa is dit een van de leukste plekken om naartoe te gaan.`,
              `C. Colón, 5, Tarifa`
            ],
            sv: [
              `<strong><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercado+P%C3%BAblico+de+Tarifa+C.+Col%C3%B3n+5+11380+Tarifa" target="_blank" rel="noopener">Mercado Público de Tarifa</a></strong> <span class="am-muted">(Gamla Stan)</span>`,
              `För färsk fisk, frukt, grönsaker och en mer vardaglig sida av Tarifa är detta en av de trevligaste platserna att besöka.`,
              `C. Colón, 5, Tarifa`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Wind & Weather',
        'Wind & Wetter',
        'Viento y tiempo',
        'Wind & weer',
        'Vind & väder'
      ),
      items: [
        {
          kind: 'weather',
          icon: 'weather',
          title: tarifaText(
            'Weather Forecast',
            'Wettervorhersage',
            'Previsión del tiempo',
            'Weersverwachting',
            'Väderprognos'
          ),
          lat: 36.0141,
          lon: -5.6044,
          locationName: 'Tarifa',
          windMode: true,
          introBody: [
            tarifaText(
              'Tarifa is known for sunshine, Atlantic light and, above all, wind. Even on beautiful days, the wind can strongly shape how warm it feels, how comfortable the beach is and whether conditions are ideal for kitesurfing, windsurfing or a more sheltered plan.',
              'Tarifa ist bekannt für Sonne, Atlantiklicht und vor allem für Wind. Selbst an schönen Tagen kann der Wind stark beeinflussen, wie warm es sich anfühlt, wie angenehm der Strand ist und ob die Bedingungen ideal zum Kitesurfen, Windsurfen oder eher für einen geschützteren Plan sind.',
              'Tarifa es conocida por el sol, la luz del Atlántico y, sobre todo, por el viento. Incluso en días bonitos, el viento puede influir mucho en la sensación térmica, en la comodidad en la playa y en si las condiciones son ideales para kitesurf, windsurf o para un plan más resguardado.',
              'Tarifa staat bekend om zon, Atlantisch licht en vooral om de wind. Zelfs op mooie dagen kan de wind sterk bepalen hoe warm het aanvoelt, hoe prettig het strand is en of de omstandigheden ideaal zijn voor kitesurfen, windsurfen of juist voor een meer beschut plan.',
              'Tarifa är känt för sol, Atlantljus och framför allt för vind. Även under fina dagar kan vinden starkt påverka hur varmt det känns, hur behagligt stranden upplevs och om förhållandena passar bäst för kitesurfing, vindsurfing eller en mer skyddad plan för dagen.'
            )
          ]
        },
        {
          icon: 'weather',
          title: tarifaText(
            'Wind Basics',
            'Wind-Basics',
            'Conceptos básicos del viento',
            'Wind basics',
            'Vindens grunder'
          ),
          body: tarifaParagraphs({
            en: [
              `In Tarifa, wind is not just part of the forecast — it is part of daily life. Most days are shaped by one of two familiar winds.`,
              `<strong>Levante (east wind)</strong><br>Usually warmer and often much stronger. It can arrive quite suddenly and stay for hours or even several days. On stronger days, you may notice fine sand in the air and a much wilder feel along the coast.`,
              `<strong>Poniente (west wind)</strong><br>A softer Atlantic breeze that usually feels fresher and more comfortable. These are often the days that feel easiest for beach walks, relaxed afternoons, and sunset time.`,
              `Even on sunny days, the wind can make it feel cooler than expected, so a light windbreaker is always a good idea.`
            ],
            de: [
              `In Tarifa ist der Wind nicht nur Teil der Vorhersage, sondern gehört zum täglichen Leben. Die meisten Tage sind von einem von zwei bekannten Winden geprägt.`,
              `<strong>Levante (Ostwind)</strong><br>Meist wärmer und oft deutlich stärker. Er kann recht plötzlich aufkommen und stunden- oder tagelang anhalten. An stärkeren Tagen merkt ihr vielleicht feinen Sand in der Luft und eine viel wildere Atmosphäre an der Küste.`,
              `<strong>Poniente (Westwind)</strong><br>Eine sanftere Atlantikbrise, die sich meist frischer und angenehmer anfühlt. Das sind oft die Tage, die am besten für Strandspaziergänge, entspannte Nachmittage und die Zeit zum Sonnenuntergang geeignet sind.`,
              `Selbst an sonnigen Tagen kann es sich durch den Wind kühler anfühlen als erwartet – eine leichte Windjacke ist also immer eine gute Idee.`
            ],
            es: [
              `En Tarifa, el viento no es solo parte del pronóstico: es parte de la vida diaria. La mayoría de los días están marcados por uno de dos vientos conocidos.`,
              `<strong>Levante (viento del este)</strong><br>Suele ser más cálido y a menudo mucho más fuerte. Puede llegar de repente y quedarse horas o incluso varios días. En los días más fuertes, notaréis arena fina en el aire y un ambiente mucho más salvaje en la costa.`,
              `<strong>Poniente (viento del oeste)</strong><br>Una brisa atlántica más suave que suele resultar más fresca y agradable. Suelen ser los días más fáciles para paseos por la playa, tardes relajadas y para ver la puesta de sol.`,
              `Incluso en días soleados, el viento puede hacer que la sensación térmica sea más fresca, por lo que un cortavientos ligero siempre es buena idea.`
            ],
            nl: [
              `In Tarifa is de wind niet zomaar onderdeel van de weersverwachting — hij hoort bij het dagelijks leven. De meeste dagen worden bepaald door een van de twee bekende winden.`,
              `<strong>Levante (oostenwind)</strong><br>Meestal warmer en vaak veel sterker. Hij kan vrij plotseling opsteken en uren of zelfs meerdere dagen aanhouden. Op sterkere dagen merken jullie misschien fijn zand in de lucht en een veel wilder gevoel langs de kust.`,
              `<strong>Poniente (westenwind)</strong><br>Een zachtere bries vanaf de Atlantische Oceaan die meestal frisser en aangenamer aanvoelt. Dit zijn vaak de dagen die het prettigst zijn voor strandwandelingen, ontspannen middagen en de tijd rond zonsondergang.`,
              `Zelfs op zonnige dagen kan de wind het koeler laten aanvoelen dan verwacht, dus een licht windjack is altijd een goed idee.`
            ],
            sv: [
              `I Tarifa är vinden inte bara en del av väderprognosen — den är en del av det dagliga livet. De flesta dagar präglas av en av två kända vindar.`,
              `<strong>Levante (ostanvind)</strong><br>Vanligtvis varmare och ofta mycket starkare. Den kan komma ganska plötsligt och stanna i timmar eller till och med flera dagar. Under starkare dagar kan ni märka fin sand i luften och en mycket vildare känsla längs kusten.`,
              `<strong>Poniente (västanvind)</strong><br>En mjukare atlantbris som vanligtvis känns friskare och mer behaglig. Detta är ofta de dagar som är bäst för strandpromenader, avslappnade eftermiddagar och tid för solnedgång.`,
              `Även under soliga dagar kan vinden göra att det känns svalare än väntat, så en lätt vindjacka är alltid en bra idé.`
            ]
          })
        },
        {
          icon: 'weather',
          title: tarifaText(
            'Weather & Seasonal Reality',
            'Wetter & Jahreszeiten',
            'Tiempo y estaciones',
            'Weer & seizoenen',
            'Väder & årstider'
          ),
          body: tarifaParagraphs({
            en: [
              `<strong>Summer</strong><br>Bright days, late dinners, and long evenings, with wind as a constant companion. Even in warm weather, the sea can feel surprisingly cool when the wind picks up.`,
              `<strong>Autumn</strong><br>One of the loveliest times of year in Tarifa. The light is soft, the rhythm is calmer, and the town often feels more relaxed.`,
              `<strong>Winter</strong><br>Usually mild, with fewer crowds and a slower pace. At the same time, there can be stronger wind days and a little more humidity in the air.`,
              `<strong>Spring</strong><br>Changeable, energetic, and beautiful for mixing beach time with walks, viewpoints, and small inland outings.`
            ],
            de: [
              `<strong>Sommer</strong><br>Helle Tage, späte Abendessen und lange Abende, mit dem Wind als ständigem Begleiter. Selbst bei warmem Wetter kann sich das Meer erstaunlich kühl anfühlen, wenn der Wind auffrischt.`,
              `<strong>Herbst</strong><br>Eine der schönsten Zeiten im Jahr in Tarifa. Das Licht ist weich, der Rhythmus ruhiger und die Stadt fühlt sich oft entspannter an.`,
              `<strong>Winter</strong><br>Meistens mild, mit weniger Menschen und einem langsameren Tempo. Gleichzeitig kann es Tage mit stärkerem Wind und etwas höherer Luftfeuchtigkeit geben.`,
              `<strong>Frühling</strong><br>Wechselhaft, energiegeladen und wunderschön, um Strandtage mit Spaziergängen, Aussichtspunkten und kleinen Ausflügen ins Hinterland zu kombinieren.`
            ],
            es: [
              `<strong>Verano</strong><br>Días luminosos, cenas tardías y noches largas, con el viento como compañero constante. Incluso con tiempo cálido, el mar puede notarse sorprendentemente fresco cuando sube el viento.`,
              `<strong>Otoño</strong><br>Una de las épocas más bonitas del año en Tarifa. La luz es suave, el ritmo más tranquilo y el pueblo a menudo se siente más relajado.`,
              `<strong>Invierno</strong><br>Generalmente suave, con menos gente y un ritmo más lento. Al mismo tiempo, puede haber días de viento más fuerte y un poco más de humedad en el ambiente.`,
              `<strong>Primavera</strong><br>Cambiante, llena de energía y preciosa para combinar tiempo de playa con paseos, miradores y pequeñas excursiones al interior.`
            ],
            nl: [
              `<strong>Zomer</strong><br>Heldere dagen, late diners en lange avonden, met de wind als constante metgezel. Zelfs bij warm weer kan de zee verrassend koel aanvoelen als de wind opsteekt.`,
              `<strong>Herfst</strong><br>Een van de mooiste tijden van het jaar in Tarifa. Het licht is zacht, het ritme is rustiger en het stadje voelt vaak veel meer ontspannen aan.`,
              `<strong>Winter</strong><br>Meestal mild, met minder drukte en een trager tempo. Tegelijkertijd kunnen er dagen zijn met hardere wind en iets meer luchtvochtigheid.`,
              `<strong>Lente</strong><br>Wisselvallig, energiek en prachtig om strandtijd af te wisselen met wandelingen, uitkijkpunten en kleine uitstapjes naar het binnenland.`
            ],
            sv: [
              `<strong>Sommar</strong><br>Ljusa dagar, sena middagar och långa kvällar, med vinden som en ständig följeslagare. Även i varmt väder kan havet kännas förvånansvärt svalt när vinden ökar.`,
              `<strong>Höst</strong><br>En av de härligaste tiderna på året i Tarifa. Ljuset är mjukt, rytmen är lugnare och staden känns ofta mer avslappnad.`,
              `<strong>Vinter</strong><br>Vanligtvis mild, med färre folkmassor och ett långsammare tempo. Samtidigt kan det vara dagar med starkare vind och lite högre luftfuktighet.`,
              `<strong>Vår</strong><br>Ombytlig, energisk och vacker för att kombinera strandtid med promenader, utsiktsplatser och små utflykter inåt landet.`
            ]
          })
        },
        {
          icon: 'route',
          title: tarifaText(
            'What to Do When Levante Blows',
            'Was tun, wenn Levante weht?',
            'Qué hacer cuando sopla Levante',
            'Wat te doen bij Levantewind',
            'Vad gör man när Levanten blåser?'
          ),
          body: tarifaParagraphs({
            en: [
              `The best Levante days are usually the ones you do not try to fight. A simple, flexible plan often works best.`,
              `<strong>Option 1 — Old Town day</strong><br>Start slowly with coffee, browse a few boutiques, enjoy a long lunch, and leave the rest of the day open.`,
              `<strong>Option 2 — Viewpoints & scenic drives</strong><br>On clear days, the views across the Strait can be spectacular. A short drive to a mirador can easily become one of the highlights of the day.`,
              `<strong>Option 3 — Beach walk instead of full beach setup</strong><br>On windier days, the beach often works better as a walk in the sun than as a full beach day with towels and umbrellas.`,
              `If you are unsure what makes the most sense on a particular day, feel free to message us. We are always happy to point you toward the most comfortable option.`
            ],
            de: [
              `Die besten Levante-Tage sind meistens die, gegen die man nicht ankämpft. Ein einfacher, flexibler Plan ist oft die beste Wahl.`,
              `<strong>Option 1 — Altstadt-Tag</strong><br>Langsam starten mit einem Kaffee, durch ein paar Boutiquen bummeln, ein langes Mittagessen genießen und den Rest des Tages offen lassen.`,
              `<strong>Option 2 — Aussichtspunkte & Panorama-Fahrten</strong><br>An klaren Tagen kann der Blick über die Meerenge spektakulär sein. Eine kurze Fahrt zu einem „Mirador“ kann leicht zu einem Highlight des Tages werden.`,
              `<strong>Option 3 — Strandspaziergang statt Strandtag</strong><br>An windigeren Tagen eignet sich der Strand oft besser für einen Spaziergang in der Sonne als für einen kompletten Strandtag mit Handtüchern und Sonnenschirmen.`,
              `Wenn ihr unsicher seid, was an einem bestimmten Tag am meisten Sinn macht, schreibt uns gerne. Wir helfen euch immer gern dabei, die angenehmste Option zu finden.`
            ],
            es: [
              `Los mejores días de Levante suelen ser aquellos con los que no intentáis pelear. Un plan sencillo y flexible suele funcionar mejor.`,
              `<strong>Opción 1 — Día en el Casco Antiguo</strong><br>Empezad poco a poco con un café, echad un vistazo a algunas tiendas, disfrutad de un almuerzo largo y dejad el resto del día libre.`,
              `<strong>Opción 2 — Miradores y paseos en coche</strong><br>En días claros, las vistas del Estrecho pueden ser espectaculares. Un corto trayecto hasta un mirador puede convertirse fácilmente en lo mejor del día.`,
              `<strong>Opción 3 — Paseo por la playa en lugar de un día de playa completo</strong><br>En los días de más viento, la playa a menudo funciona mejor para un paseo al sol que para un día completo con toallas y sombrillas.`,
              `Si no tenéis claro qué es lo que tiene más sentido en un día concreto, no dudéis en escribirnos. Siempre estamos encantados de recomendaros la opción más cómoda.`
            ],
            nl: [
              `De beste Levantedagen zijn meestal de dagen waartegen jullie niet proberen te vechten. Een simpel, flexibel plan werkt dan vaak het best.`,
              `<strong>Optie 1 — Dag in de Oude Stad</strong><br>Begin rustig met koffie, snuffel rond in een paar boetiekjes, geniet van een uitgebreide lunch en laat de rest van de dag open.`,
              `<strong>Optie 2 — Uitkijkpunten & autoritten</strong><br>Op heldere dagen kunnen de uitzichten over de Straat van Gibraltar spectaculair zijn. Een korte rit naar een mirador kan zomaar het hoogtepunt van de dag worden.`,
              `<strong>Optie 3 — Strandwandeling in plaats van stranddag</strong><br>Op winderige dagen is het strand vaak beter geschikt voor een wandeling in de zon dan voor een complete stranddag met handdoeken en parasols.`,
              `Als jullie twijfelen wat op een bepaalde dag de beste keuze is, stuur ons dan gerust een bericht. We helpen jullie graag de meest comfortabele optie te vinden.`
            ],
            sv: [
              `De bästa Levantedagarna är oftast de som man inte försöker kämpa emot. En enkel, flexibel plan fungerar ofta bäst.`,
              `<strong>Alternativ 1 — Dag i Gamla Stan</strong><br>Börja långsamt med en kaffe, titta i några butiker, njut av en lång lunch och lämna resten av dagen öppen.`,
              `<strong>Alternativ 2 — Utsiktsplatser & vackra körningar</strong><br>På klara dagar kan utsikten över sundet vara spektakulär. En kort bilresa till en mirador kan lätt bli en av dagens höjdpunkter.`,
              `<strong>Alternativ 3 — Strandpromenad i stället för heldag på stranden</strong><br>Under blåsigare dagar fungerar stranden ofta bättre för en promenad i solen än en heldag på stranden med handdukar och parasoll.`,
              `Om ni är osäkra på vad som passar bäst en viss dag, skicka gärna ett meddelande till oss. Vi tipsar er alltid gärna om det bekvämaste alternativet.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Family & Kids',
        'Familie & Kinder',
        'Familias y niños',
        'Familie & kinderen',
        'Familj & barn'
      ),
      items: [
        {
          icon: 'heart',
          title: tarifaText(
            'Playgrounds & Water Fun',
            'Spielplätze & Wasserspaß',
            'Parques y diversión en el agua',
            'Speeltuinen & waterpret',
            'Lekplatser & vattenlek'
          ),
          body: tarifaParagraphs({
            en: [
              `If you are staying in Tarifa with children, keeping the day simple usually works best. Short playground stops, an ice cream, and some flexible beach time often make for the easiest rhythm.`,
              `Around town, you will find a few small playground options that are perfect for a short break and usually feel very local and relaxed.`,
              `For a bigger outing, <strong>Bahía Park in Algeciras</strong> is a fun option on warmer days when everyone simply wants to be in the water.`,
              `In general, Tarifa works very well with children when you do not overplan it and let the day unfold naturally.`
            ],
            de: [
              `Wenn ihr mit Kindern in Tarifa seid, funktioniert es meistens am besten, den Tag simpel zu halten. Kurze Stopps auf dem Spielplatz, ein Eis und etwas flexible Strandzeit sorgen oft für den entspanntesten Rhythmus.`,
              `In der Stadt findet ihr ein paar kleinere Spielplätze, die sich perfekt für eine kurze Pause eignen und oft sehr lokal und entspannt wirken.`,
              `Für einen größeren Ausflug ist der <strong>Bahía Park in Algeciras</strong> an wärmeren Tagen eine tolle Option, wenn alle einfach nur ins Wasser wollen.`,
              `Insgesamt funktioniert Tarifa mit Kindern sehr gut, wenn man nicht zu viel plant und den Tag einfach auf sich zukommen lässt.`
            ],
            es: [
              `Si venís a Tarifa con niños, mantener el día sencillo suele ser lo que mejor funciona. Paradas cortas en los parques, un helado y algo de tiempo flexible en la playa suelen marcar el ritmo más fácil.`,
              `Por el pueblo encontraréis algunos pequeños parques infantiles, perfectos para un pequeño descanso y que suelen tener un ambiente muy local y relajado.`,
              `Para una excursión más grande, el <strong>Bahía Park en Algeciras</strong> es una opción divertida para los días más calurosos cuando a todos les apetece estar en el agua.`,
              `En general, Tarifa funciona muy bien con niños cuando no lo planeáis en exceso y dejáis que el día fluya de forma natural.`
            ],
            nl: [
              `Als jullie met kinderen in Tarifa verblijven, werkt het vaak het beste om de dag simpel te houden. Korte stops bij speeltuinen, een ijsje en wat flexibele tijd op het strand zorgen meestal voor het makkelijkste ritme.`,
              `In het stadje vinden jullie een paar kleine speeltuintjes die perfect zijn voor een korte pauze en meestal erg lokaal en ontspannen aanvoelen.`,
              `Voor een groter uitje is <strong>Bahía Park in Algeciras</strong> een leuke optie voor warmere dagen wanneer iedereen gewoon in het water wil zijn.`,
              `Over het algemeen is Tarifa heel geschikt met kinderen, zolang jullie niet te veel plannen en de dag natuurlijk laten verlopen.`
            ],
            sv: [
              `Om ni vistas i Tarifa med barn brukar det fungera bäst att hålla dagen enkel. Korta lekplatsbesök, en glass och lite flexibel strandtid ger ofta den smidigaste rytmen.`,
              `I staden hittar ni några små lekplatser som är perfekta för en kort paus och som brukar kännas väldigt lokala och avkopplande.`,
              `För en lite större utflykt är <strong>Bahía Park i Algeciras</strong> ett roligt alternativ under varmare dagar när alla bara vill vara i vattnet.`,
              `Generellt sett fungerar Tarifa väldigt bra med barn när man inte planerar för mycket utan låter dagen rulla på naturligt.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Practical Services',
        'Praktische Services',
        'Servicios prácticos',
        'Praktische diensten',
        'Praktiska tjänster'
      ),
      items: [
        {
          icon: 'laundry',
          title: tarifaText('Laundry', 'Wäsche', 'Lavandería', 'Wasserette', 'Tvätt'),
          body: tarifaParagraphs({
            en: [
              `You will find a washing machine in the kitchen, so you can do laundry in the apartment whenever you like.`,
              `If you would rather stay in holiday mode, <strong>Lavandería Eco Tarifa</strong> is an easy local option. You can drop your clothes off and usually pick them up clean and nicely ironed the next day.`,
              `C./ Mar del Norte 2`
            ],
            de: [
              `In der Küche steht eine Waschmaschine, sodass ihr jederzeit im Apartment Wäsche waschen könnt.`,
              `Wenn ihr lieber im Urlaubsmodus bleiben möchtet, ist <strong>Lavandería Eco Tarifa</strong> eine einfache Option vor Ort. Ihr könnt eure Kleidung abgeben und sie meist am nächsten Tag sauber und schön gebügelt wieder abholen.`,
              `C./ Mar del Norte 2`
            ],
            es: [
              `Encontraréis una lavadora en la cocina, por lo que podéis lavar ropa en el apartamento cuando queráis.`,
              `Si preferís seguir en modo vacaciones, <strong>Lavandería Eco Tarifa</strong> es una opción local muy cómoda. Podéis dejar la ropa y, por lo general, recogerla limpia y bien planchada al día siguiente.`,
              `C./ Mar del Norte 2`
            ],
            nl: [
              `In de keuken staat een wasmachine, dus jullie kunnen in het appartement de was doen wanneer jullie maar willen.`,
              `Als jullie liever in de vakantiestemming blijven, is <strong>Lavandería Eco Tarifa</strong> een makkelijke lokale optie. Jullie kunnen de kleding afgeven en meestal de volgende dag schoon en mooi gestreken ophalen.`,
              `C./ Mar del Norte 2`
            ],
            sv: [
              `Ni hittar en tvättmaskin i köket, så ni kan tvätta i lägenheten när ni vill.`,
              `Om ni hellre vill stanna kvar i semesterläget är <strong>Lavandería Eco Tarifa</strong> ett smidigt lokalt alternativ. Ni kan lämna in era kläder och vanligtvis hämta dem rena och fint strukna nästa dag.`,
              `C./ Mar del Norte 2`
            ]
          })
        },
        {
          icon: 'info',
          title: tarifaText(
            'Tourist Office',
            'Touristeninformation',
            'Oficina de turismo',
            'VVV-kantoor',
            'Turistinformation'
          ),
          body: tarifaParagraphs({
            en: [
              `If you would like local maps, printed information, or additional suggestions, the tourist office can be a useful stop in town.`,
              `<strong>Paseo de la Alameda</strong><br>Monday to Friday, 10:00 – 13:30 and 16:00 – 18:00.<br>Weekend, 10:00 – 13:30.`
            ],
            de: [
              `Wenn ihr lokale Karten, gedruckte Informationen oder weitere Vorschläge möchtet, ist die Touristeninformation eine nützliche Anlaufstelle in der Stadt.`,
              `<strong>Paseo de la Alameda</strong><br>Montag bis Freitag, 10:00 – 13:30 und 16:00 – 18:00 Uhr.<br>Wochenende, 10:00 – 13:30 Uhr.`
            ],
            es: [
              `Si queréis mapas locales, información impresa o más sugerencias, la oficina de turismo puede ser una parada útil en el pueblo.`,
              `<strong>Paseo de la Alameda</strong><br>De lunes a viernes, de 10:00 a 13:30 y de 16:00 a 18:00.<br>Fines de semana, de 10:00 a 13:30.`
            ],
            nl: [
              `Voor lokale plattegronden, gedrukte informatie of meer suggesties kan het toeristenbureau een handige tussenstop in de stad zijn.`,
              `<strong>Paseo de la Alameda</strong><br>Maandag t/m vrijdag, 10:00 – 13:30 en 16:00 – 18:00 uur.<br>Weekend, 10:00 – 13:30 uur.`
            ],
            sv: [
              `Om ni vill ha lokala kartor, tryckt information eller ytterligare förslag kan turistbyrån vara ett bra ställe att stanna till på.`,
              `<strong>Paseo de la Alameda</strong><br>Måndag till fredag, 10:00 – 13:30 och 16:00 – 18:00.<br>Helger, 10:00 – 13:30.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText('Mobility', 'Mobilität', 'Movilidad', 'Mobiliteit', 'Mobilitet'),
      items: [
        {
          icon: 'car',
          title: tarifaText('Taxi', 'Taxi', 'Taxi', 'Taxi', 'Taxi'),
          body: tarifaParagraphs({
            en: [
              `If you need a taxi at any time, day or night, you can call:`,
              `<strong>+34 956 23 07 62</strong><br><span class="am-muted">Open 24 hours.</span>`
            ],
            de: [
              `Falls ihr zu irgendeiner Zeit, tagsüber oder nachts, ein Taxi braucht, könnt ihr diese Nummer wählen:`,
              `<strong>+34 956 23 07 62</strong><br><span class="am-muted">24 Stunden erreichbar.</span>`
            ],
            es: [
              `Si necesitáis un taxi en cualquier momento, de día o de noche, podéis llamar a:`,
              `<strong>+34 956 23 07 62</strong><br><span class="am-muted">Disponible las 24 horas.</span>`
            ],
            nl: [
              `Als jullie op welk moment dan ook, dag of nacht, een taxi nodig hebben, kunnen jullie bellen naar:`,
              `<strong>+34 956 23 07 62</strong><br><span class="am-muted">24 uur bereikbaar.</span>`
            ],
            sv: [
              `Om ni behöver en taxi när som helst, dag som natt, kan ni ringa:`,
              `<strong>+34 956 23 07 62</strong><br><span class="am-muted">Öppet 24 timmar.</span>`
            ]
          })
        },
        {
          icon: 'car',
          title: tarifaText(
            'Car Rental',
            'Mietwagen',
            'Alquiler de coches',
            'Autoverhuur',
            'Hyrbil'
          ),
          body: tarifaParagraphs({
            en: [
              `Tarifa itself has limited rental options, so for a wider choice it is often easiest to look in <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Algeciras+Spain" target="_blank" rel="noopener">Algeciras</a>, around 20 km away.`,
              `If you are planning to rent a car in high season, booking ahead is usually a good idea.`
            ],
            de: [
              `In Tarifa selbst ist die Auswahl an Mietwagen begrenzt. Für ein breiteres Angebot ist es oft am einfachsten, im etwa 20 km entfernten <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Algeciras+Spain" target="_blank" rel="noopener">Algeciras</a> zu suchen.`,
              `Wenn ihr plant, in der Hochsaison ein Auto zu mieten, ist es meist eine gute Idee, im Voraus zu buchen.`
            ],
            es: [
              `En Tarifa hay pocas opciones de alquiler, por lo que para una mayor variedad suele ser más fácil buscar en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Algeciras+Spain" target="_blank" rel="noopener">Algeciras</a>, a unos 20 km.`,
              `Si planeáis alquilar un coche en temporada alta, suele ser buena idea reservar con antelación.`
            ],
            nl: [
              `Tarifa zelf heeft beperkte huuropties, dus voor meer keuze is het vaak makkelijker om te zoeken in <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Algeciras+Spain" target="_blank" rel="noopener">Algeciras</a>, zo’n 20 km verderop.`,
              `Als jullie van plan zijn een auto te huren in het hoogseizoen, is vooraf boeken meestal een goed idee.`
            ],
            sv: [
              `Tarifa i sig har begränsade uthyrningsmöjligheter, så för ett större utbud är det oftast enklast att titta i <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Algeciras+Spain" target="_blank" rel="noopener">Algeciras</a>, cirka 20 km bort.`,
              `Om ni planerar att hyra en bil under högsäsong är det oftast bra att boka i förväg.`
            ]
          })
        }
      ]
    },
    {
      heading: tarifaText(
        'Medical',
        'Medizinische Hilfe',
        'Asistencia médica',
        'Medisch',
        'Sjukvård'
      ),
      items: [
        {
          icon: 'warning',
          title: tarifaText(
            'Emergency – Call 112',
            'Notfall – 112 anrufen',
            'Emergencias – Llamar al 112',
            'Noodgeval – Bel 112',
            'Nödsituation – Ring 112'
          ),
          body: tarifaParagraphs({
            en: [
              `In any emergency, please call <strong>112</strong>. This is the nationwide emergency number in Spain.`,
              `<strong>If the emergency happens while you are inside the apartment:</strong>`,
              `Please give emergency services the exact address:`,
              `Mar Adriático 29, App. 433<br>11380 Tarifa`
            ],
            de: [
              `In einem Notfall ruft bitte <strong>112</strong> an. Dies ist die landesweite Notrufnummer in Spanien.`,
              `<strong>Falls der Notfall im Apartment auftritt:</strong>`,
              `Bitte gebt den Rettungskräften die genaue Adresse durch:`,
              `Mar Adriático 29, App. 433<br>11380 Tarifa`
            ],
            es: [
              `En cualquier emergencia, llamad al <strong>112</strong>. Es el número de emergencias nacional en España.`,
              `<strong>Si la emergencia sucede mientras estáis dentro del apartamento:</strong>`,
              `Por favor, dad a los servicios de emergencia la dirección exacta:`,
              `Mar Adriático 29, App. 433<br>11380 Tarifa`
            ],
            nl: [
              `Bel bij een noodgeval <strong>112</strong>. Dit is het landelijke alarmnummer in Spanje.`,
              `<strong>Als de noodsituatie zich voordoet in het appartement:</strong>`,
              `Geef de hulpdiensten het exacte adres door:`,
              `Mar Adriático 29, App. 433<br>11380 Tarifa`
            ],
            sv: [
              `I nödsituationer, ring <strong>112</strong>. Detta är det nationella nödnumret i Spanien.`,
              `<strong>Om nödsituationen uppstår när ni är i lägenheten:</strong>`,
              `Vänligen ge räddningstjänsten den exakta adressen:`,
              `Mar Adriático 29, App. 433<br>11380 Tarifa`
            ]
          })
        },
        {
          icon: 'medical',
          title: tarifaText(
            '24-Hour Medical Assistance',
            '24-Stunden medizinische Versorgung',
            'Asistencia médica 24 horas',
            '24-uurs medische hulp',
            'Medicinsk hjälp dygnet runt'
          ),
          body: tarifaParagraphs({
            en: [
              `For non-emergency medical care, the nearest 24-hour public health centre is:`,
              `<strong><a class="am-link" href="https://share.google/kThtXHL43CfcwzfDC" target="_blank" rel="noopener noreferrer">Centro de Salud Tarifa</a></strong><br>Calle Antonio Maura, s/n<br>11380 Tarifa<br>Tel. +34 956 01 20 07<br>Open 24 hours.`
            ],
            de: [
              `Für nicht akute medizinische Anliegen ist das nächstgelegene öffentliche 24-Stunden-Gesundheitszentrum:`,
              `<strong><a class="am-link" href="https://share.google/kThtXHL43CfcwzfDC" target="_blank" rel="noopener noreferrer">Centro de Salud Tarifa</a></strong><br>Calle Antonio Maura, s/n<br>11380 Tarifa<br>Tel. +34 956 01 20 07<br>24 Stunden geöffnet.`
            ],
            es: [
              `Para asuntos médicos que no sean una emergencia, el centro de salud público de 24 horas más cercano es:`,
              `<strong><a class="am-link" href="https://share.google/kThtXHL43CfcwzfDC" target="_blank" rel="noopener noreferrer">Centro de Salud Tarifa</a></strong><br>Calle Antonio Maura, s/n<br>11380 Tarifa<br>Tel. +34 956 01 20 07<br>Abierto 24 horas.`
            ],
            nl: [
              `Voor niet-spoedeisende medische zorg is het dichtstbijzijnde openbare 24-uurs gezondheidscentrum:`,
              `<strong><a class="am-link" href="https://share.google/kThtXHL43CfcwzfDC" target="_blank" rel="noopener noreferrer">Centro de Salud Tarifa</a></strong><br>Calle Antonio Maura, s/n<br>11380 Tarifa<br>Tel. +34 956 01 20 07<br>24 uur geopend.`
            ],
            sv: [
              `För icke-akut medicinsk vård är närmaste offentliga vårdcentral med öppet dygnet runt:`,
              `<strong><a class="am-link" href="https://share.google/kThtXHL43CfcwzfDC" target="_blank" rel="noopener noreferrer">Centro de Salud Tarifa</a></strong><br>Calle Antonio Maura, s/n<br>11380 Tarifa<br>Tel. +34 956 01 20 07<br>Öppet 24 timmar.`
            ]
          })
        },
        {
          icon: 'pharmacy',
          title: tarifaText('Pharmacy', 'Apotheke', 'Farmacia', 'Apotheek', 'Apotek'),
          body: tarifaParagraphs({
            en: [
              `For anything small you may need, <strong>La Farmacia del Viento</strong> is a very easy nearby option.`,
              `It is roughly 100 m away and around 2 minutes on foot from the apartment.`,
              `Mar Adriatico 12<br>Monday to Saturday, 09:00 – 21:00.`,
              `If it happens to be closed, you will also find several other pharmacies around Tarifa.`
            ],
            de: [
              `Für kleinere Besorgungen ist <strong>La Farmacia del Viento</strong> eine sehr bequeme Option in der Nähe.`,
              `Sie ist ca. 100 m entfernt und etwa 2 Gehminuten vom Apartment zu erreichen.`,
              `Mar Adriatico 12<br>Montag bis Samstag, 09:00 – 21:00 Uhr.`,
              `Sollte sie geschlossen sein, findet ihr noch verschiedene andere Apotheken in ganz Tarifa.`
            ],
            es: [
              `Para cualquier cosa pequeña que necesitéis, <strong>La Farmacia del Viento</strong> es una opción muy cercana y cómoda.`,
              `Está a unos 100 m de distancia y a un par de minutos a pie desde el apartamento.`,
              `Mar Adriatico 12<br>De lunes a sábado, de 09:00 a 21:00.`,
              `Si da la casualidad de que está cerrada, también encontraréis otras farmacias por Tarifa.`
            ],
            nl: [
              `Voor kleine benodigdheden is <strong>La Farmacia del Viento</strong> een erg makkelijke optie in de buurt.`,
              `De apotheek ligt ongeveer 100 meter verderop, op circa 2 minuten lopen van het appartement.`,
              `Mar Adriatico 12<br>Maandag t/m zaterdag, 09:00 – 21:00 uur.`,
              `Mocht deze gesloten zijn, dan vinden jullie ook verschillende andere apotheken in Tarifa.`
            ],
            sv: [
              `För småsaker ni kan tänkas behöva är <strong>La Farmacia del Viento</strong> ett mycket smidigt alternativ i närheten.`,
              `Det är ungefär 100 meter bort och cirka 2 minuters promenad från lägenheten.`,
              `Mar Adriatico 12<br>Måndag till lördag, 09:00 – 21:00.`,
              `Skulle den råka vara stängd, hittar ni även flera andra apotek runt om i Tarifa.`
            ]
          })
        }
      ]
    }
  ]
};

const tarifaFamilySurfLocalGuide: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-local-guide',
  entityKey: 'amara-family-surf',
  backSlug: 'guestwelcome-tarifa-family-surf',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Our personal recommendations | AMARA Experience',
    'Unsere persönlichen Empfehlungen | AMARA Experience',
    'Nuestras recomendaciones personales | AMARA Experience',
    'Onze persoonlijke aanbevelingen | AMARA Experience',
    'Våra personliga rekommendationer | AMARA Experience'
  ),
  seoDescription: tarifaText(
    'Hidden treasures, insider tips, authentic local food and lesser-known places in Tarifa, selected by your AMARA hosts.',
    'Versteckte Schätze, Insider-Tipps, authentische lokale Küche und weniger bekannte Orte in Tarifa, ausgewählt von euren AMARA-Gastgebern.',
    'Rincones escondidos, consejos locales, cocina local auténtica y lugares menos conocidos de Tarifa, seleccionados por vuestros anfitriones de AMARA.',
    'Verborgen parels, insidertips, authentiek lokaal eten en minder bekende plekken in Tarifa, geselecteerd door jullie AMARA-gastheren.',
    'Dolda pärlor, insidertips, genuin lokal mat och mindre kända platser i Tarifa, utvalda av era AMARA-värdar.'
  ),
  kicker: tarifaText(
    'TARIFA GUEST GUIDE',
    'TARIFA GUEST GUIDE',
    'TARIFA GUEST GUIDE',
    'TARIFA GUEST GUIDE',
    'TARIFA GUEST GUIDE'
  ),
  title: tarifaText(
    'Our personal recommendations in Tarifa',
    'Unsere persönlichen Empfehlungen für Tarifa',
    'Nuestras recomendaciones personales en Tarifa',
    'Onze persoonlijke aanbevelingen voor Tarifa',
    'Våra personliga rekommendationer för Tarifa'
  ),
  intro: tarifaText(
    'Hidden treasures, insider tips, authentic local food and lesser-known places — with practical details for more time together away from the busiest routes.',
    'Versteckte Schätze, Insider-Tipps, authentische lokale Küche und weniger bekannte Orte – mit praktischen Details für mehr gemeinsame Zeit abseits der meistbesuchten Wege.',
    'Rincones escondidos, consejos locales, cocina local auténtica y lugares menos conocidos, con detalles prácticos para disfrutar más tiempo juntos fuera de las rutas más concurridas.',
    'Verborgen parels, insidertips, authentiek lokaal eten en minder bekende plekken — met praktische details voor meer tijd samen buiten de drukste routes.',
    'Dolda pärlor, insidertips, genuin lokal mat och mindre kända platser — med praktiska detaljer för mer tid tillsammans bortom de mest välbesökta stråken.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Explore Tarifa',
        'Tarifa entdecken',
        'Descubrir Tarifa',
        'Ontdek Tarifa',
        'Upptäck Tarifa'
      ),
      items: [
        TARIFA_EXPERIENCE_KITESURF_LINK,
        {
          kind: 'link',
          icon: 'goblet',
          targetSlug: 'tarifa-guest-food-drink',
          title: tarifaText(
            'Food & Drinks',
            'Essen & Trinken',
            'Comer y beber',
            'Eten & drinken',
            'Mat & dryck'
          )
        },
        {
          kind: 'link',
          icon: 'wave',
          targetSlug: 'tarifa-guest-beaches',
          title: tarifaText(
            'Beaches',
            'Strände',
            'Playas',
            'Stranden',
            'Stränder'
          )
        },
        {
          kind: 'link',
          icon: 'hiking',
          targetSlug: 'tarifa-guest-activities',
          title: tarifaText(
            'Activities',
            'Aktivitäten',
            'Actividades',
            'Activiteiten',
            'Aktiviteter'
          )
        },
        {
          kind: 'link',
          icon: 'landmark',
          targetSlug: 'tarifa-guest-sightseeing',
          title: tarifaText(
            'Sightseeing',
            'Sightseeing',
            'Turismo',
            'Bezienswaardigheden',
            'Sevärdheter'
          )
        },
        {
          kind: 'link',
          icon: 'moon',
          targetSlug: 'tarifa-guest-nightlife',
          title: tarifaText(
            'Nightlife',
            'Nachtleben',
            'Vida nocturna',
            'Nachtleven',
            'Nattliv'
          )
        }
      ]
    }
  ]
};

const tarifaFamilySurfFoodDrink: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-food-drink',
  entityKey: 'amara-family-surf',
  backSlug: 'tarifa-guest-local-guide',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Food & Drinks | AMARA Tarifa',
    'Essen & Trinken | AMARA Tarifa',
    'Comer y beber | AMARA Tarifa',
    'Eten & drinken | AMARA Tarifa',
    'Mat & dryck | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'Our curated list of standout places to eat and drink in Tarifa.',
    'Unsere handverlesene Auswahl der besten Orte zum Essen und Trinken in Tarifa.',
    'Nuestra cuidada selección de lugares destacados para comer y beber en Tarifa.',
    'Onze speciaal geselecteerde lijst met de leukste plekken om te eten en drinken in Tarifa.',
    'Vår noga utvalda lista över de bästa platserna att äta och dricka på i Tarifa.'
  ),
  kicker: tarifaText(
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE'
  ),
  title: tarifaText(
    'Food & Drinks',
    'Essen & Trinken',
    'Comer y beber',
    'Eten & drinken',
    'Mat & dryck'
  ),
  intro: tarifaText(
    'Tarifa’s culinary scene is vibrant. This picturesque town is renowned for its exceptional fresh food and diverse range of restaurants. With so many dining options, choosing just one can be difficult. We have therefore carefully curated recommendations for a variety of tastes and preferences.',
    'Die kulinarische Szene in Tarifa ist ausgesprochen lebendig. Die malerische Stadt ist für ihr hervorragendes frisches Essen und ihre vielfältige Restaurantauswahl bekannt. Bei so vielen Möglichkeiten fällt die Wahl manchmal schwer. Deshalb haben wir für euch Empfehlungen für unterschiedliche Geschmäcker und Vorlieben zusammengestellt.',
    'La escena culinaria de Tarifa es muy vibrante. Este pintoresco pueblo es famoso por su excepcional comida fresca y su variada oferta de restaurantes. Con tantas opciones para elegir, sabemos que decidirse por una puede ser difícil. Por eso hemos preparado una cuidada selección de recomendaciones para todos los gustos y preferencias.',
    'De culinaire scene van Tarifa is levendig. Dit pittoreske stadje staat bekend om het uitzonderlijke verse eten en het gevarieerde aanbod aan restaurants. Met zoveel mogelijkheden kan kiezen lastig zijn. Daarom hebben we speciaal voor jullie aanbevelingen samengesteld voor verschillende smaken en voorkeuren.',
    'Tarifas kulinariska scen är levande. Den pittoreska staden är känd för sin fantastiska färska mat och sitt varierade restaurangutbud. Med så många alternativ kan det vara svårt att välja. Därför har vi noggrant valt ut rekommendationer för olika smaker och önskemål.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Our culinary recommendations',
        'Unsere kulinarischen Empfehlungen',
        'Nuestras recomendaciones gastronómicas',
        'Onze culinaire aanbevelingen',
        'Våra kulinariska rekommendationer'
      ),
      intro: tarifaParagraphs({
        en: [
          'Whether you love seafood, prefer vegetarian food, or are looking for authentic local cuisine, Tarifa has something for everyone. Look forward to delightful flavours, charming atmospheres, and memorable dining experiences.',
          'Let us guide you through Tarifa’s culinary landscape and help you discover the restaurant that best suits your palate.',
          '<strong>Let’s dive into the culinary delights that await you in Tarifa:</strong>'
        ],
        de: [
          'Egal, ob ihr Meeresfrüchte liebt, euch vegetarisch ernährt oder authentische lokale Küche sucht – Tarifa hat für jeden etwas zu bieten. Freut euch auf köstliche Aromen, charmante Atmosphären und unvergessliche Restaurantbesuche.',
          'Lasst euch von uns durch Tarifas kulinarische Landschaft führen und entdeckt genau das Restaurant, auf das ihr gerade Appetit habt.',
          '<strong>Tauchen wir ein in die kulinarischen Highlights, die euch in Tarifa erwarten:</strong>'
        ],
        es: [
          'Tanto si sois amantes del marisco, entusiastas de la comida vegetariana o buscáis auténtica cocina local, Tarifa tiene algo para todos. Preparaos para disfrutar de sabores deliciosos, ambientes con encanto y experiencias inolvidables.',
          'Dejadnos guiaros por el panorama culinario de Tarifa y ayudaros a descubrir el restaurante perfecto para vuestro paladar.',
          '<strong>Sumerjámonos en las delicias culinarias que os esperan en Tarifa:</strong>'
        ],
        nl: [
          'Of jullie nu van zeevruchten houden, graag vegetarisch eten of op zoek zijn naar authentieke lokale gerechten: Tarifa heeft voor ieder wat wils. Geniet van heerlijke smaken, sfeervolle locaties en onvergetelijke etentjes.',
          'Laat ons jullie door het culinaire landschap van Tarifa gidsen en helpen het restaurant te vinden dat perfect bij jullie smaak past.',
          '<strong>Duik mee in de culinaire hoogtepunten die jullie in Tarifa te wachten staan:</strong>'
        ],
        sv: [
          'Oavsett om ni älskar fisk och skaldjur, föredrar vegetariskt eller söker autentisk lokal mat har Tarifa något för alla. Se fram emot härliga smaker, charmiga miljöer och minnesvärda restaurangbesök.',
          'Låt oss guida er genom Tarifas kulinariska landskap och hjälpa er att hitta restaurangen som passar just er smak.',
          '<strong>Låt oss dyka in i de kulinariska upplevelser som väntar er i Tarifa:</strong>'
        ]
      }),
      items: [
        {
          icon: 'breakfast',
          title: tarifaText(
            'Breakfast / Brunch',
            'Frühstück / Brunch',
            'Desayuno y brunch',
            'Ontbijt / Brunch',
            'Frukost / Brunch'
          ),
          body: [
            tarifaText(
              '<strong>Fuel your Tarifa adventures with breakfast and brunch.</strong><br><br>Start the day with a delicious breakfast or brunch at one of these inviting cafés:',
              '<strong>Stärkt euch für eure Tarifa-Abenteuer mit Frühstück und Brunch.</strong><br><br>Startet den Tag mit einem leckeren Frühstück oder Brunch in einem dieser einladenden Cafés:',
              '<strong>Coged fuerzas para vuestras aventuras en Tarifa con un buen desayuno o brunch.</strong><br><br>Empezad el día en una de estas atractivas cafeterías:',
              '<strong>Begin jullie avonturen in Tarifa met een goed ontbijt of brunch.</strong><br><br>Start de dag bij een van deze uitnodigende cafés:',
              '<strong>Ladda inför era äventyr i Tarifa med frukost eller brunch.</strong><br><br>Börja dagen på något av dessa trevliga kaféer:'
            ),
            tarifaRecommendationList([
              {
                name: 'SURLA',
                href: 'https://www.google.com/maps/search/?api=1&query=SURLA+Tarifa',
                description: tarifaText(
                  'This surfer haven serves superfood-packed breakfasts, perfect for health-conscious travellers looking for high-quality fuel.',
                  'Dieser Surfer-Treffpunkt serviert Frühstück voller Superfoods – perfekt, wenn ihr Wert auf gesunde, hochwertige Energie legt.',
                  'Este refugio de surfistas sirve desayunos repletos de superalimentos, perfectos si buscáis energía sana y de calidad.',
                  'Deze surfershotspot serveert ontbijt vol superfoods, perfect als jullie op zoek zijn naar gezonde energie van hoge kwaliteit.',
                  'Detta surftillhåll serverar frukostar fulla av superfoods, perfekt för er som söker hälsosam energi av hög kvalitet.'
                )
              },
              {
                name: 'POWERHOUSE',
                href: 'https://www.google.com/maps/search/?api=1&query=POWERHOUSE+Tarifa',
                description: tarifaText(
                  'Beside the road to Valdevaqueros, Powerhouse offers hearty breakfasts for kitesurfing and action-packed days.',
                  'Direkt an der Straße zu den Stränden von Valdevaqueros bietet das Powerhouse ein herzhaftes Frühstück für Kitesurf-Sessions und actionreiche Tage.',
                  'Junto a la carretera hacia Valdevaqueros, Powerhouse ofrece desayunos contundentes para vuestros días de kitesurf y acción.',
                  'Aan de weg naar Valdevaqueros biedt Powerhouse stevige ontbijtjes voor een dag vol kitesurfen en actie.',
                  'Vid vägen mot Valdevaqueros erbjuder Powerhouse rejäla frukostar för kitesurfing och actionfyllda dagar.'
                )
              },
              {
                name: 'CAFÉ AZUL',
                href: 'https://www.google.com/maps/search/?api=1&query=CAF%C3%89+AZUL+Tarifa',
                description: tarifaText(
                  'A Tarifa institution for decades and a classic place for a relaxed breakfast by Puerta de Jerez.',
                  'Seit Jahrzehnten eine Institution in Tarifa und ein Klassiker für ein entspanntes Frühstück an der Puerta de Jerez.',
                  'Toda una institución en Tarifa desde hace décadas y un clásico para desayunar tranquilamente junto a la Puerta de Jerez.',
                  'Al decennia een begrip in Tarifa en een klassieke plek voor een ontspannen ontbijt bij de Puerta de Jerez.',
                  'En institution i Tarifa sedan decennier och ett klassiskt ställe för en lugn frukost vid Puerta de Jerez.'
                )
              },
              {
                name: 'HELENA’S KITCHEN',
                href: 'https://www.google.com/maps/search/?api=1&query=HELENA%E2%80%99S+KITCHEN+Tarifa',
                description: tarifaText(
                  'This cooking school is in the same building as your apartment and also serves excellent breakfasts.',
                  'Diese Kochschule befindet sich im selben Gebäude wie euer Apartment und serviert ebenfalls ein hervorragendes Frühstück.',
                  'Esta escuela de cocina está en el mismo edificio que vuestro apartamento y también sirve desayunos excelentes.',
                  'Deze kookschool zit in hetzelfde gebouw als jullie appartement en serveert ook uitstekende ontbijtjes.',
                  'Denna matlagningsskola ligger i samma byggnad som er lägenhet och serverar även utmärkt frukost.'
                )
              }
            ])
          ]
        },
        {
          icon: 'wave',
          title: tarifaText(
            'Beach Bars (Chiringuitos)',
            'Strandbars (Chiringuitos)',
            'Chiringuitos',
            'Strandbars (Chiringuitos)',
            'Strandbarer (Chiringuitos)'
          ),
          body: [
            tarifaText(
              'Tarifa’s magic continues beyond the daytime. As the sun sinks towards the horizon, the beach bars become lively meeting places with unbeatable beach views, breathtaking sunsets, delicious food, refreshing cocktails, music, and a vibrant atmosphere.',
              'Der Zauber Tarifas geht nach dem Tag weiter. Wenn die Sonne am Horizont versinkt, werden die Strandbars zu lebhaften Treffpunkten mit großartigem Strandblick, spektakulären Sonnenuntergängen, leckerem Essen, erfrischenden Cocktails, Musik und lebendiger Atmosphäre.',
              'La magia de Tarifa continúa más allá del día. Cuando el sol se acerca al horizonte, los chiringuitos se convierten en animados puntos de encuentro con vistas inmejorables, atardeceres espectaculares, comida deliciosa, cócteles refrescantes, música y mucho ambiente.',
              'De magie van Tarifa gaat ook na de dag verder. Wanneer de zon richting de horizon zakt, worden de strandbars levendige ontmoetingsplekken met prachtig uitzicht, adembenemende zonsondergangen, heerlijk eten, verfrissende cocktails en muziek.',
              'Tarifas magi fortsätter efter dagens slut. När solen sjunker mot horisonten blir strandbarerna livliga mötesplatser med fantastisk utsikt, vackra solnedgångar, god mat, uppfriskande cocktails och musik.'
            ),
            tarifaText(
              '<strong>Playa Los Lances Sur:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Chiringuito+Tarifa" target="_blank" rel="noopener noreferrer">El Chiringuito</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balneario+Beach+Club+Tarifa" target="_blank" rel="noopener noreferrer">Balneario Beach Club Tarifa</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Waikiki+Tarifa" target="_blank" rel="noopener noreferrer">Waikiki</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DEMENTE+Tarifa" target="_blank" rel="noopener noreferrer">DEMENTE</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CARBONES13+Tarifa" target="_blank" rel="noopener noreferrer">CARBONES13</a><br><strong>Playa Los Lances Norte:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=AQUA+Tarifa" target="_blank" rel="noopener noreferrer">AQUA</a> and <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=WAVES+Tarifa" target="_blank" rel="noopener noreferrer">WAVES</a><br><strong>Playa Valdevaqueros:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=TUMBAO+Tarifa" target="_blank" rel="noopener noreferrer">TUMBAO</a>',
              '<strong>Playa Los Lances Sur:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Chiringuito+Tarifa" target="_blank" rel="noopener noreferrer">El Chiringuito</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balneario+Beach+Club+Tarifa" target="_blank" rel="noopener noreferrer">Balneario Beach Club Tarifa</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Waikiki+Tarifa" target="_blank" rel="noopener noreferrer">Waikiki</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DEMENTE+Tarifa" target="_blank" rel="noopener noreferrer">DEMENTE</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CARBONES13+Tarifa" target="_blank" rel="noopener noreferrer">CARBONES13</a><br><strong>Playa Los Lances Norte:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=AQUA+Tarifa" target="_blank" rel="noopener noreferrer">AQUA</a> und <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=WAVES+Tarifa" target="_blank" rel="noopener noreferrer">WAVES</a><br><strong>Playa Valdevaqueros:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=TUMBAO+Tarifa" target="_blank" rel="noopener noreferrer">TUMBAO</a>',
              '<strong>Playa Los Lances Sur:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Chiringuito+Tarifa" target="_blank" rel="noopener noreferrer">El Chiringuito</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balneario+Beach+Club+Tarifa" target="_blank" rel="noopener noreferrer">Balneario Beach Club Tarifa</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Waikiki+Tarifa" target="_blank" rel="noopener noreferrer">Waikiki</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DEMENTE+Tarifa" target="_blank" rel="noopener noreferrer">DEMENTE</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CARBONES13+Tarifa" target="_blank" rel="noopener noreferrer">CARBONES13</a><br><strong>Playa Los Lances Norte:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=AQUA+Tarifa" target="_blank" rel="noopener noreferrer">AQUA</a> y <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=WAVES+Tarifa" target="_blank" rel="noopener noreferrer">WAVES</a><br><strong>Playa Valdevaqueros:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=TUMBAO+Tarifa" target="_blank" rel="noopener noreferrer">TUMBAO</a>',
              '<strong>Playa Los Lances Sur:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Chiringuito+Tarifa" target="_blank" rel="noopener noreferrer">El Chiringuito</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balneario+Beach+Club+Tarifa" target="_blank" rel="noopener noreferrer">Balneario Beach Club Tarifa</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Waikiki+Tarifa" target="_blank" rel="noopener noreferrer">Waikiki</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DEMENTE+Tarifa" target="_blank" rel="noopener noreferrer">DEMENTE</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CARBONES13+Tarifa" target="_blank" rel="noopener noreferrer">CARBONES13</a><br><strong>Playa Los Lances Norte:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=AQUA+Tarifa" target="_blank" rel="noopener noreferrer">AQUA</a> en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=WAVES+Tarifa" target="_blank" rel="noopener noreferrer">WAVES</a><br><strong>Playa Valdevaqueros:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=TUMBAO+Tarifa" target="_blank" rel="noopener noreferrer">TUMBAO</a>',
              '<strong>Playa Los Lances Sur:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Chiringuito+Tarifa" target="_blank" rel="noopener noreferrer">El Chiringuito</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balneario+Beach+Club+Tarifa" target="_blank" rel="noopener noreferrer">Balneario Beach Club Tarifa</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Waikiki+Tarifa" target="_blank" rel="noopener noreferrer">Waikiki</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=DEMENTE+Tarifa" target="_blank" rel="noopener noreferrer">DEMENTE</a>, <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CARBONES13+Tarifa" target="_blank" rel="noopener noreferrer">CARBONES13</a><br><strong>Playa Los Lances Norte:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=AQUA+Tarifa" target="_blank" rel="noopener noreferrer">AQUA</a> och <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=WAVES+Tarifa" target="_blank" rel="noopener noreferrer">WAVES</a><br><strong>Playa Valdevaqueros:</strong> <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=TUMBAO+Tarifa" target="_blank" rel="noopener noreferrer">TUMBAO</a>'
            ),
            tarifaText(
              '<em>Important: Some venues operate seasonally. Please check opening hours and beach restrictions before visiting.</em>',
              '<em>Wichtig: Einige Lokale haben nur saisonal geöffnet. Bitte prüft vorab die Öffnungszeiten und Strandregeln.</em>',
              '<em>Importante: Algunos locales abren solo por temporada. Comprobad antes los horarios y las restricciones de la playa.</em>',
              '<em>Belangrijk: Sommige locaties zijn alleen in het seizoen geopend. Controleer vooraf de openingstijden en strandregels.</em>',
              '<em>Viktigt: Vissa ställen har endast öppet under säsong. Kontrollera öppettider och strandregler före besöket.</em>'
            )
          ]
        },
        {
          icon: 'fish',
          title: tarifaText(
            'Fish & Seafood',
            'Fisch & Meeresfrüchte',
            'Pescado y marisco',
            'Vis & zeevruchten',
            'Fisk & skaldjur'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'Marisquería del Puerto',
                href: 'https://www.google.com/maps/search/?api=1&query=Marisquer%C3%ADa+del+Puerto+Tarifa',
                description: tarifaText(
                  'Fresh seafood dishes with outdoor seating overlooking the harbour.',
                  'Frische Meeresfrüchte mit Außenbereich und Blick auf den Hafen.',
                  'Platos de marisco fresco con terraza y vistas al puerto.',
                  'Verse visgerechten met een buitenterras dat uitkijkt over de haven.',
                  'Färska skaldjursrätter på en uteservering med utsikt över hamnen.'
                )
              },
              {
                name: 'El Campero',
                href: 'https://www.google.com/maps/search/?api=1&query=El+Campero+Tarifa',
                description: tarifaText(
                  'Renowned for its tuna specialities and also offers gluten-free options.',
                  'Bekannt für seine Thunfisch-Spezialitäten und mit glutenfreien Optionen.',
                  'Famoso por sus especialidades de atún y con opciones sin gluten.',
                  'Beroemd om zijn tonijnspecialiteiten en met glutenvrije opties.',
                  'Känt för sina tonfiskspecialiteter och med glutenfria alternativ.'
                )
              },
              {
                name: 'Varadero',
                href: 'https://www.google.com/maps/search/?api=1&query=Varadero+Tarifa',
                description: tarifaText(
                  'Seafood delicacies in a beachfront setting.',
                  'Köstlichkeiten aus dem Meer in direkter Strandlage.',
                  'Delicias del mar en primera línea de playa.',
                  'Delicatessen uit de zee direct aan het strand.',
                  'Skaldjursdelikatesser i en härlig strandmiljö.'
                )
              }
            ])
          ]
        },
        {
          icon: 'watering-can',
          title: tarifaText(
            'Vegetarian & Vegan',
            'Vegetarisch & Vegan',
            'Vegetariano y vegano',
            'Vegetarisch & vegan',
            'Vegetariskt & veganskt'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'El Vegetariano de Tarifa',
                href: 'https://www.google.com/maps/search/?api=1&query=El+Vegetariano+de+Tarifa',
                description: tarifaText(
                  'A cosy restaurant serving vegetarian and vegan dishes with outdoor seating.',
                  'Gemütliches Restaurant mit vegetarischen und veganen Gerichten sowie Sitzplätzen im Freien.',
                  'Acogedor restaurante con platos vegetarianos y veganos y mesas al aire libre.',
                  'Gezellig restaurant met vegetarische en veganistische gerechten en zitplaatsen buiten.',
                  'Mysig restaurang med vegetariska och veganska rätter samt uteservering.'
                )
              },
              {
                name: 'Raices',
                href: 'https://www.google.com/maps/search/?api=1&query=Raices+Tarifa',
                description: tarifaText(
                  'Creative vegetarian and vegan options made with locally sourced ingredients.',
                  'Kreative vegetarische und vegane Optionen aus regionalen Zutaten.',
                  'Opciones creativas vegetarianas y veganas elaboradas con ingredientes locales.',
                  'Creatieve vegetarische en veganistische opties met lokale ingrediënten.',
                  'Kreativa vegetariska och veganska alternativ tillagade med lokala råvaror.'
                )
              },
              {
                name: 'Raw Cakes Tarifa',
                href: 'https://www.google.com/maps/search/?api=1&query=Raw+Cakes+Tarifa',
                description: tarifaText(
                  'Delicious plant-based desserts in a relaxed setting.',
                  'Herrliche pflanzenbasierte Desserts in entspannter Umgebung.',
                  'Deliciosos postres vegetales en un ambiente relajado.',
                  'Heerlijke plantaardige desserts in een ontspannen sfeer.',
                  'Ljuvliga växtbaserade desserter i en avslappnad miljö.'
                )
              }
            ])
          ]
        },
        {
          icon: 'goblet',
          title: tarifaText(
            'Local Cuisine',
            'Lokale Küche',
            'Cocina local',
            'Lokale keuken',
            'Lokal mat'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'El Lola',
                href: 'https://www.google.com/maps/search/?api=1&query=El+Lola+Tarifa',
                description: tarifaText(
                  'Authentic local cuisine in a charming setting with a terrace.',
                  'Authentische lokale Küche in charmantem Ambiente mit Terrasse.',
                  'Auténtica cocina local en un entorno encantador con terraza.',
                  'Authentieke lokale gerechten in een sfeervolle setting met terras.',
                  'Autentisk lokal mat i en charmig miljö med terrass.'
                )
              },
              {
                name: 'El Varadero',
                href: 'https://www.google.com/maps/search/?api=1&query=El+Varadero+Tarifa',
                description: tarifaText(
                  'Traditional dishes with fresh ingredients and views of the coastline.',
                  'Traditionelle Gerichte mit frischen Zutaten und Blick auf die Küste.',
                  'Platos tradicionales con ingredientes frescos y vistas a la costa.',
                  'Traditionele gerechten met verse ingrediënten en uitzicht op de kust.',
                  'Traditionella rätter med färska ingredienser och utsikt över kusten.'
                )
              },
              {
                name: 'Otero',
                href: 'https://www.google.com/maps/search/?api=1&query=Otero+Tarifa',
                description: tarifaText(
                  'Local specialities and classic Spanish dishes in a warm atmosphere.',
                  'Lokale Spezialitäten und spanische Klassiker in herzlicher Atmosphäre.',
                  'Especialidades locales y clásicos españoles en un ambiente cálido.',
                  'Lokale specialiteiten en klassieke Spaanse gerechten in een warme sfeer.',
                  'Lokala specialiteter och klassiska spanska rätter i en varm atmosfär.'
                )
              }
            ])
          ]
        },
        {
          icon: 'flame',
          title: tarifaText(
            'Meat Lovers',
            'Für Fleischliebhaber',
            'Para amantes de la carne',
            'Voor vleesliefhebbers',
            'För köttälskare'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'Asador La Burla',
                href: 'https://www.google.com/maps/search/?api=1&query=Asador+La+Burla+Tarifa',
                description: tarifaText(
                  'Grilled meat dishes in beautiful surroundings.',
                  'Gegrillte Fleischspezialitäten in wunderschöner Umgebung.',
                  'Carnes a la brasa en un entorno precioso.',
                  'Gegrilde vleesgerechten in een prachtige omgeving.',
                  'Grillade kötträtter i vackra omgivningar.'
                )
              },
              {
                name: 'El Rancho',
                href: 'https://www.google.com/maps/search/?api=1&query=El+Rancho+Tarifa',
                description: tarifaText(
                  'Known for steaks and barbecue specialities.',
                  'Bekannt für Steaks und BBQ-Spezialitäten.',
                  'Conocido por sus chuletones y especialidades a la barbacoa.',
                  'Bekend om zijn steaks en barbecuespecialiteiten.',
                  'Känt för sina stekar och BBQ-specialiteter.'
                )
              },
              {
                name: 'La Torre',
                href: 'https://www.google.com/maps/search/?api=1&query=La+Torre+Tarifa',
                description: tarifaText(
                  'Meat dishes made with local ingredients and accompanied by stunning views.',
                  'Fleischgerichte mit regionalen Zutaten und herrlichem Ausblick.',
                  'Platos de carne con ingredientes locales y vistas impresionantes.',
                  'Vleesgerechten met lokale ingrediënten en een prachtig uitzicht.',
                  'Kötträtter med lokala råvaror och fantastisk utsikt.'
                )
              }
            ])
          ]
        },
        {
          icon: 'dish',
          title: tarifaText('Tapas', 'Tapas', 'Tapas', 'Tapas', 'Tapas'),
          body: [
            tarifaRecommendationList([
              {
                name: 'La Lola',
                href: 'https://www.google.com/maps/search/?api=1&query=La+Lola+Tarifa',
                description: tarifaText(
                  'An authentic Andalusian tapas experience.',
                  'Ein authentisches andalusisches Tapas-Erlebnis.',
                  'Una auténtica experiencia de tapas andaluzas.',
                  'Een authentieke Andalusische tapaservaring.',
                  'En autentisk andalusisk tapasupplevelse.'
                )
              },
              {
                name: 'Bar El Francés',
                href: 'https://www.google.com/maps/search/?api=1&query=Bar+El+Franc%C3%A9s+Tarifa',
                description: tarifaText(
                  'A popular tapas spot with outdoor seating.',
                  'Beliebte Tapas-Bar mit Sitzplätzen im Freien.',
                  'Popular bar de tapas con mesas al aire libre.',
                  'Populaire tapasplek met zitplaatsen buiten.',
                  'Populärt tapasställe med uteservering.'
                )
              },
              {
                name: 'Mesón el Patio',
                href: 'https://www.google.com/maps/search/?api=1&query=Mes%C3%B3n+el+Patio+Tarifa',
                description: tarifaText(
                  'Traditional Spanish tapas in a cosy atmosphere.',
                  'Traditionelle spanische Tapas in gemütlicher Atmosphäre.',
                  'Tapas tradicionales españolas en un ambiente acogedor.',
                  'Traditionele Spaanse tapas in een gezellige sfeer.',
                  'Traditionella spanska tapas i en mysig atmosfär.'
                )
              },
              {
                name: 'Bar El Pupilo',
                href: 'https://www.google.com/maps/search/?api=1&query=Bar+El+Pupilo+Tarifa',
                description: tarifaText(
                  'Classic and creative tapas in a lively setting.',
                  'Klassische und kreative Tapas in lebendiger Umgebung.',
                  'Tapas clásicas y creativas en un ambiente animado.',
                  'Klassieke en creatieve tapas in een levendige omgeving.',
                  'Klassiska och kreativa tapas i en livlig miljö.'
                )
              }
            ])
          ]
        },
        {
          icon: 'dish',
          title: tarifaText('Pizza', 'Pizza', 'Pizza', 'Pizza', 'Pizza'),
          body: [
            tarifaRecommendationList([
              {
                name: 'Pueblo Nómada',
                href: 'https://www.google.com/maps/search/?api=1&query=Pueblo+N%C3%B3mada+Tarifa',
                description: tarifaText(
                  'Delicious pizza with wonderful ocean views near the apartment.',
                  'Köstliche Pizza mit herrlichem Meerblick in der Nähe des Apartments.',
                  'Pizza deliciosa con impresionantes vistas al mar cerca del apartamento.',
                  'Heerlijke pizza met prachtig uitzicht op zee vlak bij het appartement.',
                  'Utsökt pizza med fantastisk havsutsikt nära lägenheten.'
                )
              },
              {
                name: 'La Dolce Vita',
                href: 'https://www.google.com/maps/search/?api=1&query=La+Dolce+Vita+Tarifa',
                description: tarifaText(
                  'Authentic Italian pizza, including gluten-free options.',
                  'Authentische italienische Pizza, auch mit glutenfreien Optionen.',
                  'Auténtica pizza italiana, también con opciones sin gluten.',
                  'Authentieke Italiaanse pizza, ook met glutenvrije opties.',
                  'Autentisk italiensk pizza, inklusive glutenfria alternativ.'
                )
              },
              {
                name: 'La Ruota',
                href: 'https://www.google.com/maps/search/?api=1&query=La+Ruota+Tarifa',
                description: tarifaText(
                  'Pizza made with fresh ingredients, with vegetarian and gluten-free choices.',
                  'Pizza aus frischen Zutaten mit vegetarischen und glutenfreien Varianten.',
                  'Pizzas con ingredientes frescos y opciones vegetarianas y sin gluten.',
                  'Pizza met verse ingrediënten en vegetarische en glutenvrije keuzes.',
                  'Pizzor med färska råvaror samt vegetariska och glutenfria alternativ.'
                )
              }
            ])
          ]
        },
        {
          icon: 'tumbler',
          title: tarifaText(
            'Moroccan',
            'Marokkanisch',
            'Marroquí',
            'Marokkaans',
            'Marockanskt'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'Mandragora',
                href: 'https://www.google.com/maps/search/?api=1&query=Mandragora+Tarifa',
                description: tarifaText(
                  'Delicious Moroccan cuisine with outdoor seating.',
                  'Köstliche marokkanische Küche mit Außenbereich.',
                  'Deliciosa cocina marroquí con mesas al aire libre.',
                  'Heerlijke Marokkaanse gerechten met terras.',
                  'Utsökt marockansk mat med uteservering.'
                )
              },
              {
                name: 'Tajinaste',
                href: 'https://www.google.com/maps/search/?api=1&query=Tajinaste+Tarifa',
                description: tarifaText(
                  'Authentic Moroccan dishes with a modern twist.',
                  'Authentische marokkanische Gerichte mit modernem Touch.',
                  'Auténticos platos marroquíes con un toque moderno.',
                  'Authentieke Marokkaanse gerechten met een moderne twist.',
                  'Autentiska marockanska rätter med en modern touch.'
                )
              }
            ])
          ]
        },
        {
          icon: 'star',
          title: tarifaText(
            'Our Favorite Restaurants',
            'Unsere Lieblingsrestaurants',
            'Nuestros restaurantes favoritos',
            'Onze favoriete restaurants',
            'Våra favoritrestauranger'
          ),
          body: [
            tarifaRecommendationList([
              {
                name: 'LIA.me',
                href: 'https://www.google.com/maps/search/?api=1&query=LIA.me+Tarifa',
                description: tarifaText(
                  'For us, the best Italian restaurant in Tarifa.',
                  'Für uns das beste italienische Restaurant in Tarifa.',
                  'Para nosotros, el mejor restaurante italiano de Tarifa.',
                  'Voor ons het beste Italiaanse restaurant in Tarifa.',
                  'För oss den bästa italienska restaurangen i Tarifa.'
                )
              },
              {
                name: 'OSTERIA DEL SOLE',
                href: 'https://www.google.com/maps/search/?api=1&query=OSTERIA+DEL+SOLE+Tarifa',
                description: tarifaText(
                  'Italian cuisine in one of the loveliest chiringuitos, with ocean views.',
                  'Italienische Küche in einem der schönsten Chiringuitos mit Meerblick.',
                  'Cocina italiana en uno de los chiringuitos más bonitos, con vistas al mar.',
                  'Italiaanse keuken in een van de leukste chiringuitos met uitzicht op zee.',
                  'Italiensk mat i en av de trevligaste chiringuitos med havsutsikt.'
                )
              },
              {
                name: 'Silos 19',
                href: 'https://www.google.com/maps/search/?api=1&query=Silos+19+Tarifa',
                description: tarifaText(
                  'Modern Andalusian cuisine in an elegant atmosphere.',
                  'Moderne andalusische Küche in eleganter Atmosphäre.',
                  'Cocina andaluza moderna en un ambiente elegante.',
                  'Moderne Andalusische keuken in een elegante sfeer.',
                  'Modern andalusisk mat i en elegant atmosfär.'
                )
              },
              {
                name: 'Boccabuena Plaza',
                href: 'https://www.google.com/maps/search/?api=1&query=Boccabuena+Plaza+Tarifa',
                description: tarifaText(
                  'Set on a car-free plaza in the heart of the old town, making it a relaxed choice for families with young children.',
                  'Perfekt für Familien an einer ruhigen, sicheren Plaza.',
                  'Perfecto para familias en una plaza tranquila y segura.',
                  'Perfect voor gezinnen aan een rustig en veilig plein.',
                  'Perfekt för familjer vid ett lugnt och tryggt torg.'
                )
              }
            ])
          ]
        },
        {
          icon: 'store',
          title: tarifaText(
            'Ice Cream',
            'Eis',
            'Heladerías',
            'IJs',
            'Glass'
          ),
          body: [
            tarifaText(
              'Skip dessert at the restaurant and enjoy one of Tarifa’s ice creams while strolling through the old town.',
              'Lasst das Dessert im Restaurant aus und gönnt euch beim gemütlichen Spaziergang durch die Altstadt ein Eis in Tarifa.',
              'Saltaros el postre en el restaurante y daos el capricho de tomar un helado mientras paseáis por el casco antiguo.',
              'Sla het dessert in het restaurant over en geniet tijdens een wandeling door de oude stad van een ijsje in Tarifa.',
              'Hoppa över desserten på restaurangen och unna er en glass medan ni strosar genom Tarifas gamla stad.'
            ),
            tarifaText(
              '<ul class="am-ios-bullets"><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=GIOELIA+CREMERIA+Guzm%C3%A1n+el+Bueno+12+Tarifa" target="_blank" rel="noopener noreferrer"><strong>GIOELIA CREMERIA</strong></a> – Guzmán el Bueno 12</li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Fragola+Helados+Sancho+IV+el+Bravo+24+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Fragola Helados-Café C</strong></a> – Sancho IV el Bravo 24</li></ul>',
              '<ul class="am-ios-bullets"><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=GIOELIA+CREMERIA+Guzm%C3%A1n+el+Bueno+12+Tarifa" target="_blank" rel="noopener noreferrer"><strong>GIOELIA CREMERIA</strong></a> – Guzmán el Bueno 12</li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Fragola+Helados+Sancho+IV+el+Bravo+24+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Fragola Helados-Café C</strong></a> – Sancho IV el Bravo 24</li></ul>',
              '<ul class="am-ios-bullets"><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=GIOELIA+CREMERIA+Guzm%C3%A1n+el+Bueno+12+Tarifa" target="_blank" rel="noopener noreferrer"><strong>GIOELIA CREMERIA</strong></a> – Guzmán el Bueno 12</li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Fragola+Helados+Sancho+IV+el+Bravo+24+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Fragola Helados-Café C</strong></a> – Sancho IV el Bravo 24</li></ul>',
              '<ul class="am-ios-bullets"><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=GIOELIA+CREMERIA+Guzm%C3%A1n+el+Bueno+12+Tarifa" target="_blank" rel="noopener noreferrer"><strong>GIOELIA CREMERIA</strong></a> – Guzmán el Bueno 12</li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Fragola+Helados+Sancho+IV+el+Bravo+24+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Fragola Helados-Café C</strong></a> – Sancho IV el Bravo 24</li></ul>',
              '<ul class="am-ios-bullets"><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=GIOELIA+CREMERIA+Guzm%C3%A1n+el+Bueno+12+Tarifa" target="_blank" rel="noopener noreferrer"><strong>GIOELIA CREMERIA</strong></a> – Guzmán el Bueno 12</li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Fragola+Helados+Sancho+IV+el+Bravo+24+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Fragola Helados-Café C</strong></a> – Sancho IV el Bravo 24</li></ul>'
            )
          ]
        }
      ]
    }
  ]
};

const tarifaFamilySurfBeaches: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-beaches',
  entityKey: 'amara-family-surf',
  backSlug: 'tarifa-guest-local-guide',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Beaches | AMARA Tarifa',
    'Strände | AMARA Tarifa',
    'Playas | AMARA Tarifa',
    'Stranden | AMARA Tarifa',
    'Stränder | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'A practical beach overview for guests staying at Mar Adriático 29 in Tarifa.',
    'Praktischer Strandüberblick für Gäste in der Mar Adriático 29 in Tarifa.',
    'Un resumen práctico de las playas para los huéspedes de Mar Adriático 29 en Tarifa.',
    'Een praktisch strandoverzicht voor gasten die verblijven aan de Mar Adriático 29 in Tarifa.',
    'En praktisk strandöversikt för gäster som bor på Mar Adriático 29 i Tarifa.'
  ),
  kicker: tarifaText(
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE'
  ),
  title: tarifaText(
    'Beaches',
    'Strände',
    'Playas',
    'Stranden',
    'Stränder'
  ),
  intro: tarifaText(
    'From your apartment at Mar Adriático 29, several of Tarifa’s most beautiful beaches are within easy reach — some on foot, others a short drive away.',
    'Von eurem Apartment in der Mar Adriático 29 sind einige der schönsten Strände Tarifas ganz leicht zu erreichen – manche zu Fuß, andere nach einer kurzen Fahrt.',
    'Desde vuestro apartamento en Mar Adriático 29 podéis llegar fácilmente a varias de las playas más bonitas de Tarifa: a algunas a pie y a otras en un corto trayecto en coche.',
    'Vanuit jullie appartement aan de Mar Adriático 29 zijn verschillende van de mooiste stranden van Tarifa gemakkelijk te bereiken — sommige te voet, andere na een korte rit.',
    'Från er lägenhet på Mar Adriático 29 har ni nära till flera av Tarifas vackraste stränder — vissa på gångavstånd, andra en kort biltur bort.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Beaches at a glance',
        'Strände im Überblick',
        'Playas de un vistazo',
        'Stranden in één oogopslag',
        'Stränder i korthet'
      ),
      items: [
        {
          icon: 'wave',
          title: tarifaText(
            'Playa Los Lances',
            'Playa Los Lances',
            'Playa Los Lances',
            'Playa Los Lances',
            'Playa Los Lances'
          ),
          subtitle: tarifaText(
            'Walkable · Sunset views',
            'Zu Fuß erreichbar · Tolle Sonnenuntergänge',
            'Accesible a pie · Vistas al atardecer',
            'Op loopafstand · Prachtige zonsondergangen',
            'Gångavstånd · Vackra solnedgångar'
          ),
          body: tarifaParagraphs({
            en: [
              "From here, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Los Lances</strong></a> is within walking distance, depending on the beach access point you choose.",
              'It is ideal for long walks and wide-open space. Afternoons can be windy — perfect for watching the kitesurfers.'
            ],
            de: [
              "Von hier aus ist die <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Los Lances</strong></a> gut zu Fuß erreichbar, je nachdem, welchen Strandzugang ihr wählt.",
              'Ideal für lange Spaziergänge und viel Weite. Nachmittags kann es windig werden – perfekt, um den Kitesurfern zuzusehen.'
            ],
            es: [
              "Desde aquí, la <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Los Lances</strong></a> está a poca distancia a pie, dependiendo del acceso a la playa que elijáis.",
              'Es ideal para dar largos paseos y disfrutar de grandes espacios abiertos. Por las tardes puede hacer viento, lo que es perfecto para ver a los kitesurfistas.'
            ],
            nl: [
              "Vanaf hier ligt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Los Lances</strong></a> op loopafstand, afhankelijk van de strandopgang die jullie kiezen.",
              'Ideaal voor lange wandelingen en een weids gevoel. In de middag kan het winderig zijn — perfect om naar de kitesurfers te kijken.'
            ],
            sv: [
              "Härifrån ligger <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Los Lances</strong></a> inom gångavstånd, beroende på vilken nedgång till stranden ni väljer.",
              'Perfekt för långa promenader och stora öppna ytor. På eftermiddagen kan det bli blåsigt — perfekt för att titta på kitesurfare.'
            ]
          }),
        },
        {
          icon: 'pool',
          title: tarifaText(
            'Playa Chica',
            'Playa Chica',
            'Playa Chica',
            'Playa Chica',
            'Playa Chica'
          ),
          subtitle: tarifaText(
            'Short drive · Sheltered bay',
            'Kurze Fahrt · Geschützte Bucht',
            'Trayecto corto · Bahía resguardada',
            'Korte rit · Beschutte baai',
            'Kort biltur · Skyddad vik'
          ),
          body: tarifaParagraphs({
            en: [
              "A short drive or bike ride from here, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Chica</strong></a> offers calmer water and a more sheltered setting.",
              'It is often a good option when Los Lances feels too windy. Its location near the old town makes it easy to combine with lunch.'
            ],
            de: [
              "Nur eine kurze Fahrt mit dem Auto oder Fahrrad entfernt bietet die <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Chica</strong></a> ruhigeres Wasser und eine geschütztere Lage.",
              'Oft eine gute Alternative, wenn es euch an der Playa Los Lances zu windig ist. Durch die Nähe zur Altstadt lässt sich der Strandbesuch gut mit einem Mittagessen verbinden.'
            ],
            es: [
              "A un corto trayecto en coche o en bicicleta desde aquí, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Chica</strong></a> ofrece aguas más tranquilas y un entorno más resguardado.",
              'Suele ser una buena opción cuando en Los Lances hace demasiado viento. Está cerca del casco antiguo, por lo que es fácil combinar la visita con una comida.'
            ],
            nl: [
              "Op een korte rit met de auto of fiets vanaf hier biedt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Chica</strong></a> rustiger water en een meer beschutte ligging.",
              'Vaak een goed alternatief wanneer Los Lances te winderig aanvoelt. Het strand ligt dicht bij de oude stad en is daardoor makkelijk te combineren met een lunch.'
            ],
            sv: [
              "En kort bil- eller cykeltur härifrån erbjuder <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Playa Chica</strong></a> lugnare vatten och ett mer skyddat läge.",
              'Ofta ett bra alternativ när Los Lances känns för blåsigt. Stranden ligger nära gamla stan och är enkel att kombinera med lunch.'
            ]
          }),
        },
        {
          icon: 'route',
          title: tarifaText(
            'Playa de Valdevaqueros',
            'Playa de Valdevaqueros',
            'Playa de Valdevaqueros',
            'Playa de Valdevaqueros',
            'Playa de Valdevaqueros'
          ),
          subtitle: tarifaText(
            '15 min · Kitesurf hotspot',
            '15 Min. · Kitesurf-Hotspot',
            '15 min · Paraíso del kitesurf',
            '15 min · Kitesurf-hotspot',
            '15 min · Kitesurf-hotspot'
          ),
          body: tarifaParagraphs({
            en: [
              "About 10–15 minutes by car from here, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Valdevaqueros</strong></a> is one of Tarifa’s most iconic beaches.",
              'It has a wide sandy shore and a lively atmosphere. Parking is usually straightforward but can fill up in peak season.'
            ],
            de: [
              "Etwa 10–15 Autominuten von hier entfernt liegt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Valdevaqueros</strong></a>, einer der bekanntesten Strände Tarifas.",
              'Ein breiter Sandstrand und eine lebhafte Atmosphäre erwarten euch. Parken ist meist unkompliziert, in der Hochsaison kann es jedoch voll werden.'
            ],
            es: [
              "A unos 10–15 minutos en coche desde aquí, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Valdevaqueros</strong></a> es una de las playas más emblemáticas de Tarifa.",
              'Cuenta con una amplia playa de arena y un ambiente muy animado. Aparcar suele ser fácil, pero puede llenarse en temporada alta.'
            ],
            nl: [
              "Op ongeveer 10–15 minuten rijden van hier ligt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Valdevaqueros</strong></a>, een van de bekendste stranden van Tarifa.",
              'Het heeft een breed zandstrand en een levendige sfeer. Parkeren is meestal eenvoudig, maar in het hoogseizoen kan het vol raken.'
            ],
            sv: [
              "Ungefär 10–15 minuter med bil härifrån ligger <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Valdevaqueros</strong></a>, en av Tarifas mest ikoniska stränder.",
              'Här väntar en bred sandstrand och en livlig atmosfär. Det brukar vara enkelt att parkera, men under högsäsong kan det bli fullt.'
            ]
          }),
        },
        {
          icon: 'location-pin',
          title: tarifaText(
            'Playa Punta Paloma',
            'Playa Punta Paloma',
            'Playa Punta Paloma',
            'Playa Punta Paloma',
            'Playa Punta Paloma'
          ),
          subtitle: tarifaText(
            'Short drive · Dunes',
            'Kurze Fahrt · Dünen',
            'Trayecto corto · Dunas',
            'Korte rit · Duinen',
            'Kort biltur · Sanddyner'
          ),
          body: tarifaParagraphs({
            en: [
              "Around 10 km west of here, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Punta Paloma</strong></a> feels more secluded and natural.",
              'It is known for its dunes and turquoise water. Bring water and sun protection, as shade is limited.'
            ],
            de: [
              "Etwa 10 km westlich von hier wirkt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Punta Paloma</strong></a> deutlich abgeschiedener und natürlicher.",
              'Der Strand ist für seine Dünen und das türkisfarbene Wasser bekannt. Bringt Wasser und Sonnenschutz mit, da es kaum Schatten gibt.'
            ],
            es: [
              "A unos 10 km al oeste desde aquí, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Punta Paloma</strong></a> se siente más aislada y natural.",
              'Es conocida por sus dunas y sus aguas turquesas. Llevad agua y protección solar, ya que hay poca sombra.'
            ],
            nl: [
              "Zo’n 10 km ten westen van hier voelt <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Punta Paloma</strong></a> een stuk meer afgelegen en natuurlijk aan.",
              'Het strand staat bekend om de duinen en het turquoise water. Neem water en zonnebrandcrème mee, want er is weinig schaduw.'
            ],
            sv: [
              "Cirka 10 km västerut härifrån känns <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Punta Paloma</strong></a> mer avskilt och naturnära.",
              'Stranden är känd för sina sanddyner och sitt turkosa vatten. Ta med vatten och solskydd, eftersom det finns ont om skugga.'
            ]
          }),
        },
        {
          icon: 'star',
          title: tarifaText(
            'Playa de Bolonia',
            'Playa de Bolonia',
            'Playa de Bolonia',
            'Playa de Bolonia',
            'Playa de Bolonia'
          ),
          subtitle: tarifaText(
            '30 min · Dunes & ruins',
            '30 Min. · Dünen & Ruinen',
            '30 min · Dunas y ruinas',
            '30 min · Duinen & ruïnes',
            '30 min · Sanddyner & ruiner'
          ),
          body: tarifaParagraphs({
            en: [
              "A 25–40 minute drive from here, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bolonia</strong></a> is ideal for a full beach day.",
              'Crystal-clear water, large dunes, and the Roman ruins of Baelo Claudia nearby create a beautiful combination of nature and history.'
            ],
            de: [
              "Mit etwa 25–40 Minuten Fahrzeit ist <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bolonia</strong></a> ideal für einen ganzen Strandtag.",
              'Kristallklares Wasser, große Dünen und die römischen Ruinen von Baelo Claudia direkt nebenan ergeben eine wunderschöne Kombination aus Natur und Geschichte.'
            ],
            es: [
              "A unos 25–40 minutos en coche, <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bolonia</strong></a> es ideal para pasar un día entero de playa.",
              'Aguas cristalinas, grandes dunas y las cercanas ruinas romanas de Baelo Claudia forman una preciosa combinación de naturaleza e historia.'
            ],
            nl: [
              "Op zo’n 25–40 minuten rijden hiervandaan is <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bolonia</strong></a> ideaal voor een volledige stranddag.",
              'Kraakhelder water, grote duinen en de Romeinse ruïnes van Baelo Claudia vlakbij vormen een prachtige combinatie van natuur en geschiedenis.'
            ],
            sv: [
              "Med en bilresa på 25–40 minuter härifrån är <a class=\"am-link\" href=\"https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bolonia</strong></a> perfekt för en heldag på stranden.",
              'Kristallklart vatten, stora sanddyner och de romerska ruinerna av Baelo Claudia alldeles intill skapar en vacker kombination av natur och historia.'
            ]
          }),

        }
      ]
    }
  ]
};

const tarifaFamilySurfActivities: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-activities',
  entityKey: 'amara-family-surf',
  backSlug: 'tarifa-guest-local-guide',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Activities & No-Wind Days | AMARA Tarifa',
    'Aktivitäten & windstille Tage | AMARA Tarifa',
    'Actividades y días sin viento | AMARA Tarifa',
    'Activiteiten & windstille dagen | AMARA Tarifa',
    'Aktiviteter & vindstilla dagar | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'Discover a treasure trove of activities in Tarifa for beautiful no-wind days.',
    'Entdeckt großartige Aktivitäten in Tarifa für wunderschöne windstille Tage.',
    'Descubrid un montón de actividades en Tarifa para disfrutar de los días sin viento.',
    'Ontdek geweldige activiteiten in Tarifa voor prachtige windstille dagen.',
    'Upptäck fantastiska aktiviteter i Tarifa för vackra vindstilla dagar.'
  ),
  kicker: tarifaText(
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE'
  ),
  title: tarifaText(
    'Tarifa Activities',
    'Aktivitäten in Tarifa',
    'Actividades en Tarifa',
    'Activiteiten in Tarifa',
    'Aktiviteter i Tarifa'
  ),
  intro: tarifaText(
    'Even the windiest paradise deserves a break sometimes. Tarifa offers a treasure trove of activities for those blissful no-wind days.',
    'Selbst das windigste Paradies verdient ab und zu eine Pause. Tarifa bietet eine Fülle großartiger Aktivitäten für diese herrlichen windstillen Tage.',
    'Incluso el paraíso más ventoso merece un descanso de vez en cuando. Tarifa ofrece un montón de actividades estupendas para esos maravillosos días sin viento.',
    'Zelfs het meest winderige paradijs verdient af en toe een pauze. Tarifa biedt volop activiteiten voor die heerlijke windstille dagen.',
    'Även det blåsigaste paradiset förtjänar en paus ibland. Tarifa erbjuder många fantastiska aktiviteter för underbara vindstilla dagar.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Ideas for no-wind days',
        'Ideen für windstille Tage',
        'Ideas para días sin viento',
        'Ideeën voor windstille dagen',
        'Idéer för vindstilla dagar'
      ),
      items: [
        {
          icon: 'hiking',
          title: tarifaText('Río de la Miel', 'Río de la Miel', 'Río de la Miel', 'Río de la Miel', 'Río de la Miel'),
          subtitle: tarifaText(
            'A lush river walk near Algeciras',
            'Eine grüne Flusswanderung bei Algeciras',
            'Una ruta verde junto al río cerca de Algeciras',
            'Een groene rivierwandeling bij Algeciras',
            'En grönskande flodvandring nära Algeciras'
          ),
          body: [
            tarifaText(
              'Hidden behind Algeciras, the Río de la Miel trail leads into a shady green river valley with old mills, a medieval stone bridge, and a small waterfall. It is cooler and more humid than most landscapes in the area, making it especially pleasant on warm days.',
              'Versteckt hinter Algeciras führt der Río-de-la-Miel-Weg in ein schattiges, grünes Flusstal mit alten Mühlen, einer mittelalterlichen Steinbrücke und einem kleinen Wasserfall. Dort ist es deutlich kühler und feuchter als in der übrigen Umgebung – besonders angenehm an warmen Tagen.',
              'Escondido detrás de Algeciras, el sendero del Río de la Miel se adentra en un valle verde y sombreado con antiguos molinos, un puente medieval de piedra y una pequeña cascada. El ambiente es más fresco y húmedo que en gran parte de la zona, por lo que resulta especialmente agradable en días calurosos.',
              'Verborgen achter Algeciras voert het Río de la Miel-pad door een schaduwrijke, groene riviervallei met oude molens, een middeleeuwse stenen brug en een kleine waterval. Het is er koeler en vochtiger dan in de rest van de omgeving, wat het extra aangenaam maakt op warme dagen.',
              'Gömd bakom Algeciras leder Río de la Miel-leden genom en skuggig grön floddal med gamla kvarnar, en medeltida stenbro och ett litet vattenfall. Här är det svalare och fuktigare än i stora delar av området, vilket är särskilt skönt under varma dagar.'
            ),
            tarifaText(
              '<strong>Why guests enjoy it:</strong>',
              '<strong>Warum Gäste es mögen:</strong>',
              '<strong>Por qué gusta a los huéspedes:</strong>',
              '<strong>Waarom gasten dit leuk vinden:</strong>',
              '<strong>Varför gäster gillar det:</strong>'
            ),
            tarifaBulletList([
              tarifaText(
                'A beautiful, shady half-day nature outing.',
                'Ein wunderschöner, schattiger Halbtagesausflug in die Natur.',
                'Una preciosa excursión de medio día a la naturaleza con mucha sombra.',
                'Een prachtig natuuruitstapje van een halve dag met veel schaduw.',
                'En vacker halvdagsutflykt i naturen med mycket skugga.'
              ),
              tarifaText(
                'A very different landscape from Tarifa’s beaches and open, windy areas.',
                'Eine ganz andere Landschaft als die Strände und offenen, windigen Flächen rund um Tarifa.',
                'Un paisaje muy diferente a las playas y zonas abiertas y ventosas de Tarifa.',
                'Een heel ander landschap dan de stranden en open, winderige gebieden rond Tarifa.',
                'Ett helt annat landskap än stränderna och de öppna, blåsiga områdena runt Tarifa.'
              ),
              tarifaText(
                'Historic details along the route, including old watermills and a stone bridge.',
                'Historische Spuren entlang des Weges, darunter alte Wassermühlen und eine Steinbrücke.',
                'Detalles históricos en el camino, como antiguos molinos de agua y un puente de piedra.',
                'Historische details langs de route, waaronder oude watermolens en een stenen brug.',
                'Historiska inslag längs vägen, bland annat gamla vattenkvarnar och en stenbro.'
              )
            ]),
            tarifaText(
              '<strong>Good to know:</strong> The route is about 2.4 km each way, roughly 4.8–5 km return, and usually takes 2.5–3 hours with stops. The drive from Tarifa takes around 25–35 minutes. There is no official car park, so arrive early. Wear sturdy trainers or walking shoes. There are no toilets, bins, or water points on the trail. Swimming in the waterfall pool is not officially permitted. After rain, check local conditions because the path can become slippery or unsafe.',
              '<strong>Gut zu wissen:</strong> Die Strecke ist etwa 2,4 km pro Richtung lang, insgesamt knapp 4,8–5 km, und dauert mit Pausen meist 2,5–3 Stunden. Die Fahrt von Tarifa dauert etwa 25–35 Minuten. Es gibt keinen offiziellen Parkplatz, frühes Ankommen lohnt sich. Tragt feste Turn- oder Wanderschuhe. Unterwegs gibt es keine Toiletten, Mülleimer oder Trinkwasserstellen. Baden im Becken am Wasserfall ist offiziell nicht erlaubt. Prüft nach Regen die Bedingungen, da der Weg rutschig oder unsicher werden kann.',
              '<strong>Conviene saber:</strong> La ruta tiene unos 2,4 km por trayecto, aproximadamente 4,8–5 km ida y vuelta, y suele durar entre 2,5 y 3 horas con paradas. El trayecto en coche desde Tarifa dura 25–35 minutos. No hay aparcamiento oficial, por lo que conviene llegar temprano. Llevad calzado deportivo resistente o botas. No hay baños, papeleras ni puntos de agua. No está permitido oficialmente bañarse en la poza de la cascada. Después de llover, comprobad las condiciones porque el camino puede estar resbaladizo o ser inseguro.',
              '<strong>Goed om te weten:</strong> De route is ongeveer 2,4 km enkele reis, in totaal circa 4,8–5 km, en duurt met stops meestal 2,5–3 uur. Vanaf Tarifa is het 25–35 minuten rijden. Er is geen officiële parkeerplaats, dus kom vroeg. Draag stevige sneakers of wandelschoenen. Langs het pad zijn geen toiletten, afvalbakken of waterpunten. Zwemmen in het poeltje bij de waterval is officieel niet toegestaan. Controleer na regen altijd de omstandigheden, omdat het pad glad of onveilig kan zijn.',
              '<strong>Bra att veta:</strong> Leden är cirka 2,4 km enkel väg, totalt ungefär 4,8–5 km, och tar vanligtvis 2,5–3 timmar med pauser. Bilresan från Tarifa tar 25–35 minuter. Det finns ingen officiell parkering, så kom tidigt. Använd rejäla gymnastik- eller vandringsskor. Det finns inga toaletter, papperskorgar eller vattenpunkter. Bad i poolen vid vattenfallet är inte officiellt tillåtet. Kontrollera förhållandena efter regn, eftersom stigen kan bli hal eller osäker.'
            ),
            tarifaText(
              '<strong>Best for:</strong> Nature lovers, guests seeking a calm no-wind-day outing, active couples, and families with older children.<br><strong>Less suitable for:</strong> Strollers, wheelchairs, guests with balance issues or very limited mobility, and anyone expecting a fully developed tourist site with facilities.',
              '<strong>Ideal für:</strong> Naturliebhaber, Gäste auf der Suche nach einem ruhigen Ausflug an windstillen Tagen, aktive Paare und Familien mit älteren Kindern.<br><strong>Weniger geeignet für:</strong> Kinderwagen, Rollstühle, Gäste mit Gleichgewichtsproblemen oder sehr eingeschränkter Mobilität sowie alle, die ein voll ausgebautes Touristenziel mit Infrastruktur erwarten.',
              '<strong>Ideal para:</strong> Amantes de la naturaleza, quienes buscan una excursión tranquila en un día sin viento, parejas activas y familias con niños mayores.<br><strong>Menos adecuado para:</strong> Cochecitos, sillas de ruedas, personas con problemas de equilibrio o movilidad muy reducida y quienes esperen un lugar turístico completamente acondicionado.',
              '<strong>Ideaal voor:</strong> Natuurliefhebbers, gasten die een rustig uitje zoeken op een windstille dag, actieve stellen en gezinnen met oudere kinderen.<br><strong>Minder geschikt voor:</strong> Kinderwagens, rolstoelen, gasten met evenwichtsproblemen of sterk beperkte mobiliteit en wie een volledig ontwikkeld toeristisch terrein met voorzieningen verwacht.',
              '<strong>Perfekt för:</strong> Naturälskare, gäster som söker en lugn utflykt under en vindstilla dag, aktiva par och familjer med äldre barn.<br><strong>Mindre lämpligt för:</strong> Barnvagnar, rullstolar, gäster med balansproblem eller mycket begränsad rörlighet och den som förväntar sig ett fullt utbyggt turistmål med faciliteter.'
            ),
            tarifaText(
              'A lovely choice for greenery, shade, and a quieter side of the region — go prepared and keep an eye on conditions.',
              'Eine wunderbare Wahl für Grün, Schatten und eine ruhigere Seite der Region – geht gut vorbereitet los und behaltet die Bedingungen im Blick.',
              'Una opción preciosa para disfrutar del verdor, la sombra y una cara más tranquila de la región; id preparados y estad atentos a las condiciones.',
              'Een heerlijke keuze voor groen, schaduw en een rustigere kant van de regio — ga goed voorbereid op pad en houd de omstandigheden in de gaten.',
              'Ett härligt val för grönska, skugga och en lugnare sida av regionen — var väl förberedda och håll koll på förhållandena.'
            )
          ]
        },
        {
          icon: 'pool',
          title: tarifaText(
            'Open Water Swim School',
            'Open-Water-Schwimmschule',
            'Escuela de natación en aguas abiertas',
            'Openwaterzwemschool',
            'Simskola i öppet vatten'
          ),
          subtitle: tarifaText(
            'Lessons and guided ocean swims',
            'Kurse und geführte Schwimmtouren im Meer',
            'Clases y rutas guiadas a nado',
            'Lessen en begeleide zwemtochten',
            'Lektioner och guidade simturer'
          ),
          body: [
            tarifaText(
              '<strong>Learn to swim in the ocean.</strong> “Swim in El Mar” offers swimming lessons and guided swim tours in Tarifa’s beautiful waters for beginners and experienced swimmers.',
              '<strong>Lernt, im Meer zu schwimmen.</strong> „Swim in El Mar“ bietet Schwimmkurse und geführte Schwimmtouren im wunderschönen Meer vor Tarifa für Anfänger und erfahrene Schwimmer.',
              '<strong>Aprended a nadar en el mar.</strong> “Swim in El Mar” ofrece clases de natación y rutas guiadas por las preciosas aguas de Tarifa, tanto para principiantes como para nadadores experimentados.',
              '<strong>Leer zwemmen in zee.</strong> “Swim in El Mar” biedt zwemlessen en begeleide zwemtochten in de prachtige wateren van Tarifa voor beginners en ervaren zwemmers.',
              '<strong>Lär er simma i havet.</strong> “Swim in El Mar” erbjuder simlektioner och guidade simturer i Tarifas vackra vatten för både nybörjare och vana simmare.'
            ),
            tarifaBulletList([
              tarifaText(
                '<strong>Beginner courses:</strong> Group or private lessons covering everything needed to swim safely in the ocean.',
                '<strong>Anfängerkurse:</strong> Gruppen- oder Privatstunden mit allem, was ihr für sicheres Schwimmen im offenen Meer braucht.',
                '<strong>Cursos para principiantes:</strong> Clases en grupo o privadas con todo lo necesario para nadar con seguridad en el mar.',
                '<strong>Beginnerscursussen:</strong> Groeps- of privélessen met alles wat nodig is om veilig in zee te zwemmen.',
                '<strong>Nybörjarkurser:</strong> Grupp- eller privatlektioner med allt ni behöver för att simma säkert i havet.'
              ),
              tarifaText(
                '<strong>Advanced courses:</strong> Progressive training to improve technique and endurance.',
                '<strong>Fortgeschrittenenkurse:</strong> Aufbaukurse zur Verbesserung von Technik und Ausdauer.',
                '<strong>Cursos avanzados:</strong> Entrenamiento progresivo para mejorar la técnica y la resistencia.',
                '<strong>Gevorderde cursussen:</strong> Opbouwende training om techniek en uithoudingsvermogen te verbeteren.',
                '<strong>Fortsättningskurser:</strong> Utvecklande träning för bättre teknik och uthållighet.'
              ),
              tarifaText(
                '<strong>Guided swim tours:</strong> Experience Tarifa’s coastline on a guided ocean swim.',
                '<strong>Geführte Schwimmtouren:</strong> Erlebt Tarifas Küste bei einer begleiteten Tour im Meer.',
                '<strong>Rutas guiadas a nado:</strong> Descubrid la costa de Tarifa en una excursión guiada por el mar.',
                '<strong>Begeleide zwemtochten:</strong> Ervaar de kust van Tarifa tijdens een begeleide zwemtocht.',
                '<strong>Guidade simturer:</strong> Upplev Tarifas kust under en guidad simtur.'
              )
            ]),
            tarifaText(
              '<strong>What they offer:</strong> Qualified and experienced instructors, small groups, flexible class times, different course locations, modern equipment, and a strong focus on safety and enjoyment.',
              '<strong>Was geboten wird:</strong> Qualifizierte und erfahrene Schwimmlehrer, kleine Gruppen, flexible Kurszeiten, verschiedene Kursorte, moderne Ausrüstung sowie Sicherheit und Spaß an erster Stelle.',
              '<strong>Qué ofrecen:</strong> Instructores cualificados y con experiencia, grupos pequeños, horarios flexibles, diferentes ubicaciones, equipamiento moderno y prioridad para la seguridad y la diversión.',
              '<strong>Wat ze bieden:</strong> Gekwalificeerde en ervaren instructeurs, kleine groepen, flexibele lestijden, verschillende locaties, moderne uitrusting en veel aandacht voor veiligheid en plezier.',
              '<strong>Vad de erbjuder:</strong> Kvalificerade och erfarna simlärare, små grupper, flexibla tider, olika kursplatser, modern utrustning och fokus på säkerhet och glädje.'
            ),
            tarifaText(
              '<strong>Information and prices:</strong><br><a class="am-link" href="https://www.swimenelmar.com" target="_blank" rel="noopener noreferrer">www.swimenelmar.com</a><br><a class="am-link" href="https://www.instagram.com/swimenelmar/" target="_blank" rel="noopener noreferrer">@swimenelmar</a><br><a class="am-link" href="tel:+34610984300">+34 610 984 300</a> or <a class="am-link" href="tel:+34618265294">+34 618 265 294</a><br>Direct messages are also possible via Instagram.',
              '<strong>Informationen und Preise:</strong><br><a class="am-link" href="https://www.swimenelmar.com" target="_blank" rel="noopener noreferrer">www.swimenelmar.com</a><br><a class="am-link" href="https://www.instagram.com/swimenelmar/" target="_blank" rel="noopener noreferrer">@swimenelmar</a><br><a class="am-link" href="tel:+34610984300">+34 610 984 300</a> oder <a class="am-link" href="tel:+34618265294">+34 618 265 294</a><br>Direktnachrichten sind auch über Instagram möglich.',
              '<strong>Información y precios:</strong><br><a class="am-link" href="https://www.swimenelmar.com" target="_blank" rel="noopener noreferrer">www.swimenelmar.com</a><br><a class="am-link" href="https://www.instagram.com/swimenelmar/" target="_blank" rel="noopener noreferrer">@swimenelmar</a><br><a class="am-link" href="tel:+34610984300">+34 610 984 300</a> o <a class="am-link" href="tel:+34618265294">+34 618 265 294</a><br>También podéis enviarles un mensaje directo por Instagram.',
              '<strong>Informatie en prijzen:</strong><br><a class="am-link" href="https://www.swimenelmar.com" target="_blank" rel="noopener noreferrer">www.swimenelmar.com</a><br><a class="am-link" href="https://www.instagram.com/swimenelmar/" target="_blank" rel="noopener noreferrer">@swimenelmar</a><br><a class="am-link" href="tel:+34610984300">+34 610 984 300</a> of <a class="am-link" href="tel:+34618265294">+34 618 265 294</a><br>Een privébericht via Instagram is ook mogelijk.',
              '<strong>Information och priser:</strong><br><a class="am-link" href="https://www.swimenelmar.com" target="_blank" rel="noopener noreferrer">www.swimenelmar.com</a><br><a class="am-link" href="https://www.instagram.com/swimenelmar/" target="_blank" rel="noopener noreferrer">@swimenelmar</a><br><a class="am-link" href="tel:+34610984300">+34 610 984 300</a> eller <a class="am-link" href="tel:+34618265294">+34 618 265 294</a><br>Det går även bra att skicka direktmeddelande via Instagram.'
            ),
            tarifaText(
              'Discover the joy of swimming in the ocean.',
              'Entdeckt die Freude am Schwimmen im Meer.',
              'Descubrid el placer de nadar en el mar.',
              'Ontdek het plezier van zwemmen in zee.',
              'Upptäck glädjen i att simma i havet.'
            )
          ]
        },
        {
          icon: 'fish',
          title: tarifaText('Snorkeling', 'Schnorcheln', 'Snorkel', 'Snorkelen', 'Snorkling'),
          body: [
            tarifaText(
              '<strong>Discover Tarifa’s underwater world.</strong> No diving certification is needed — just a snorkel and fins. Clear turquoise water offers excellent visibility, and several calm beaches are suitable for families and beginners.',
              '<strong>Entdeckt Tarifas Unterwasserwelt.</strong> Ihr braucht keinen Tauchschein – nur Schnorchel und Flossen. Klares türkisfarbenes Wasser bietet hervorragende Sicht, und mehrere ruhige Strände eignen sich für Familien und Anfänger.',
              '<strong>Descubrid el mundo submarino de Tarifa.</strong> No hace falta titulación de buceo: basta con gafas, tubo y aletas. Las aguas turquesas ofrecen muy buena visibilidad y varias playas tranquilas son adecuadas para familias y principiantes.',
              '<strong>Ontdek de onderwaterwereld van Tarifa.</strong> Een duikbrevet is niet nodig — alleen een snorkel en flippers. Het heldere turquoise water biedt uitstekend zicht en verschillende rustige stranden zijn geschikt voor gezinnen en beginners.',
              '<strong>Upptäck Tarifas undervattensvärld.</strong> Inget dykcertifikat behövs — bara snorkel och simfötter. Det klara turkosa vattnet ger god sikt och flera lugna stränder passar familjer och nybörjare.'
            ),
            tarifaText(
              '<strong>Where to snorkel:</strong><br><strong>Near Tarifa Island:</strong> Explore lively reefs and colourful fish.<br><strong>Military zone, with a guide:</strong> Hidden coves rich in marine life; guided tours are recommended.',
              '<strong>Wo ihr schnorcheln könnt:</strong><br><strong>Nahe der Insel von Tarifa:</strong> Erkundet lebendige Riffe und bunte Fische.<br><strong>Militärzone, mit Guide:</strong> Versteckte Buchten voller Meeresleben; geführte Touren werden empfohlen.',
              '<strong>Dónde hacer snorkel:</strong><br><strong>Cerca de la Isla de Tarifa:</strong> Explorad fondos llenos de vida y peces de colores.<br><strong>Zona militar, con guía:</strong> Calas escondidas con abundante vida marina; se recomiendan rutas guiadas.',
              '<strong>Waar snorkelen:</strong><br><strong>Bij het eiland van Tarifa:</strong> Ontdek levendige riffen en kleurrijke vissen.<br><strong>Militaire zone, met gids:</strong> Verborgen baaien vol zeeleven; begeleide tours worden aanbevolen.',
              '<strong>Var ni kan snorkla:</strong><br><strong>Nära Tarifas ö:</strong> Utforska levande rev och färgglada fiskar.<br><strong>Militärzonen, med guide:</strong> Dolda vikar rika på marint liv; guidade turer rekommenderas.'
            ),
            tarifaText(
              'Snorkelling fun awaits the whole family in Tarifa.',
              'In Tarifa wartet Schnorchelspaß auf die ganze Familie.',
              'En Tarifa, toda la familia puede disfrutar del snorkel.',
              'In Tarifa wacht snorkelplezier voor het hele gezin.',
              'Snorklingsnöjen väntar hela familjen i Tarifa.'
            )
          ]
        },
        {
          icon: 'hiking',
          title: tarifaText('Climbing', 'Klettern', 'Escalada', 'Klimmen', 'Klättring'),
          body: [
            tarifaText(
              '<strong>A climbing paradise for every level.</strong> Tarifa’s rugged landscape offers reliable year-round climbing conditions.',
              '<strong>Ein Kletterparadies für jedes Level.</strong> Tarifas raue Landschaft bietet das ganze Jahr über verlässliche Kletterbedingungen.',
              '<strong>Un paraíso para todos los niveles.</strong> El paisaje salvaje de Tarifa ofrece buenas condiciones de escalada durante todo el año.',
              '<strong>Een klimparadijs voor elk niveau.</strong> Het ruige landschap van Tarifa biedt het hele jaar door goede klimomstandigheden.',
              '<strong>Ett klätterparadis för alla nivåer.</strong> Tarifas karga landskap erbjuder goda klätterförhållanden året runt.'
            ),
            tarifaBulletList([
              tarifaText(
                '<strong>San Bartolo:</strong> The sheltered hills around Bolonia have more than 250 routes from grade III to 8a, ranging from 10 to 90 metres, mostly around 20 metres. Compact sandstone-limestone provides excellent grip.',
                '<strong>San Bartolo:</strong> Die geschützten Hügel um Bolonia bieten mehr als 250 Routen der Grade III bis 8a, mit Längen von 10 bis 90 Metern, meist etwa 20 Meter. Der kompakte Sandstein-Kalk-Fels bietet hervorragenden Halt.',
                '<strong>San Bartolo:</strong> Las colinas protegidas de Bolonia cuentan con más de 250 vías, de grado III a 8a y de 10 a 90 metros, aunque la mayoría rondan los 20 metros. La roca compacta de arenisca y caliza ofrece un agarre excelente.',
                '<strong>San Bartolo:</strong> De beschutte heuvels rond Bolonia bieden meer dan 250 routes van niveau III tot 8a, van 10 tot 90 meter en meestal rond 20 meter. De compacte zand- en kalksteen biedt uitstekende grip.',
                '<strong>San Bartolo:</strong> De skyddade kullarna runt Bolonia har över 250 leder från grad III till 8a, mellan 10 och 90 meter och oftast omkring 20 meter. Den kompakta sand- och kalkstenen ger utmärkt grepp.'
              ),
              tarifaText(
                '<strong>Gibraltar:</strong> Climb 200-million-year-old Jurassic limestone with varied styles and high-quality routes.',
                '<strong>Gibraltar:</strong> Klettert an 200 Millionen Jahre altem Jura-Kalkstein mit unterschiedlichen Stilen und hochwertigen Routen.',
                '<strong>Gibraltar:</strong> Escalad caliza jurásica de 200 millones de años, con estilos variados y vías de gran calidad.',
                '<strong>Gibraltar:</strong> Klim op 200 miljoen jaar oude kalksteen uit het Jura met uiteenlopende stijlen en hoogwaardige routes.',
                '<strong>Gibraltar:</strong> Klättra på 200 miljoner år gammal jurakalksten med varierade stilar och leder av hög kvalitet.'
              ),
              tarifaText(
                '<strong>St. Michael’s Cave:</strong> Experienced adventurers can tackle routes inside the cave, which includes a unique underground lake.',
                '<strong>St. Michael’s Cave:</strong> Erfahrene Abenteurer können Routen in der Höhle mit ihrem einzigartigen unterirdischen See bezwingen.',
                '<strong>Cueva de San Miguel:</strong> Los más aventureros pueden afrontar vías en el interior de la cueva, que cuenta con un singular lago subterráneo.',
                '<strong>St. Michael’s Cave:</strong> Ervaren avonturiers kunnen routes in de grot met het unieke ondergrondse meer bedwingen.',
                '<strong>St. Michael’s Cave:</strong> Erfarna äventyrare kan ta sig an leder inne i grottan, där det finns en unik underjordisk sjö.'
              )
            ]),
            tarifaText(
              'Tarifa caters to everyone, from beginners planning a first ascent to experienced climbers looking for a new challenge.',
              'Tarifa bietet für alle etwas – vom Anfänger beim ersten Aufstieg bis zum erfahrenen Kletterer auf der Suche nach einer neuen Herausforderung.',
              'Tarifa ofrece opciones para todos, desde principiantes que buscan su primera vía hasta escaladores experimentados que quieren un nuevo reto.',
              'Tarifa heeft voor iedereen iets, van beginners die hun eerste beklimming plannen tot ervaren klimmers die een nieuwe uitdaging zoeken.',
              'Tarifa passar alla, från nybörjare som planerar sin första bestigning till erfarna klättrare på jakt efter en ny utmaning.'
            )
          ]
        },
        {
          icon: 'route',
          title: tarifaText('Horse Riding', 'Reiten', 'Montar a caballo', 'Paardrijden', 'Ridning'),
          body: [
            tarifaText(
              '<strong>Explore Tarifa on horseback.</strong> Ride through pristine beaches, pine forests, eucalyptus avenues, and Los Alcornocales Natural Park. Gallop along white sand with the Atlantic behind you and experience the gentle nature of Andalusian horses. Pony rides are available for younger children, and Tarifa’s mild climate allows riding throughout the year.',
              '<strong>Entdeckt Tarifa vom Pferderücken.</strong> Reitet über unberührte Strände, durch Pinienwälder, Eukalyptusalleen und den Naturpark Los Alcornocales. Galoppiert am weißen Sand mit dem Atlantik im Hintergrund und erlebt das sanfte Wesen der Andalusier. Für kleine Kinder gibt es Ponyreiten, und Tarifas mildes Klima ermöglicht Ausritte das ganze Jahr über.',
              '<strong>Explorad Tarifa a caballo.</strong> Recorred playas vírgenes, pinares, avenidas de eucaliptos y el Parque Natural de Los Alcornocales. Galopad por la arena blanca con el Atlántico de fondo y descubrid el carácter dócil de los caballos andaluces. Hay paseos en poni para los más pequeños y el clima suave permite montar durante todo el año.',
              '<strong>Verken Tarifa te paard.</strong> Rijd over ongerepte stranden, door dennenbossen, eucalyptuslanen en natuurpark Los Alcornocales. Galoppeer over wit zand met de Atlantische Oceaan op de achtergrond en ervaar het zachte karakter van Andalusische paarden. Voor jongere kinderen zijn er ponyritjes en dankzij het milde klimaat kan er het hele jaar gereden worden.',
              '<strong>Utforska Tarifa från hästryggen.</strong> Rid över orörda stränder, genom tallskogar, eukalyptusalléer och naturparken Los Alcornocales. Galoppera längs vit sand med Atlanten i bakgrunden och upplev de andalusiska hästarnas milda temperament. Ponnyridning finns för yngre barn och det milda klimatet möjliggör ridning året runt.'
            ),
            tarifaText(
              '<strong>Booking:</strong> Several stables offer rides for different levels. Compare the options to find the best fit.',
              '<strong>Buchung:</strong> Verschiedene Höfe bieten Ausritte für unterschiedliche Niveaus an. Vergleicht die Angebote, um das Passende zu finden.',
              '<strong>Reservas:</strong> Varios establos ofrecen rutas para distintos niveles. Comparad las opciones para encontrar la más adecuada.',
              '<strong>Boeken:</strong> Verschillende maneges bieden ritten voor uiteenlopende niveaus. Vergelijk de opties om de beste match te vinden.',
              '<strong>Bokning:</strong> Flera stall erbjuder turer för olika nivåer. Jämför alternativen för att hitta det som passar bäst.'
            ),
            tarifaRecommendationList([
              {
                name: 'Aventura Ecuestre',
                href: 'https://www.aventuraecuestre.com/our-shop/?lang=en',
                description: tarifaText(
                  'Options for all skill levels across varied landscapes.',
                  'Angebote für jedes Niveau durch unterschiedliche Landschaften.',
                  'Opciones para todos los niveles y en paisajes muy diversos.',
                  'Opties voor alle niveaus in uiteenlopende landschappen.',
                  'Alternativ för alla nivåer i varierande landskap.'
                )
              },
              {
                name: 'Hurricane Hípica Tarifa',
                href: 'https://www.tarifahip.com/en/',
                description: tarifaText(
                  'Beach rides, lessons, and horseback tours.',
                  'Strandausritte, Reitstunden und Reittouren.',
                  'Rutas por la playa, clases y excursiones a caballo.',
                  'Strandritten, lessen en paardrijtochten.',
                  'Strandritter, lektioner och ridturer.'
                )
              },
              {
                name: 'South Adventures',
                href: 'https://www.thesouthadventures.com/',
                description: tarifaText(
                  'Horse-riding excursions, rentals, and breeding programmes.',
                  'Reitausflüge, Verleih und Zuchtprogramme.',
                  'Excursiones a caballo, alquiler y programas de cría.',
                  'Paardrijtochten, verhuur en fokprogramma’s.',
                  'Ridutflykter, uthyrning och avelsprogram.'
                )
              }
            ]),
            tarifaText(
              '<strong>Tarifa’s Horse Fair:</strong> Experience local culture during the annual horse fair on the first Sunday in September.',
              '<strong>Tarifas Pferdemarkt:</strong> Erlebt lokale Kultur auf der jährlichen Pferdemesse am ersten Sonntag im September.',
              '<strong>Feria del Caballo de Tarifa:</strong> Sumergíos en la cultura local durante la feria anual, el primer domingo de septiembre.',
              '<strong>Tarifa’s paardenmarkt:</strong> Beleef de lokale cultuur tijdens de jaarlijkse paardenmarkt op de eerste zondag van september.',
              '<strong>Tarifas hästmarknad:</strong> Upplev den lokala kulturen under den årliga hästmarknaden den första söndagen i september.'
            ),
            tarifaText(
              'Horse riding in Tarifa promises an unforgettable adventure for the whole family.',
              'Reiten in Tarifa verspricht ein unvergessliches Abenteuer für die ganze Familie.',
              'Montar a caballo en Tarifa promete una aventura inolvidable para toda la familia.',
              'Paardrijden in Tarifa belooft een onvergetelijk avontuur voor het hele gezin.',
              'Ridning i Tarifa lovar ett oförglömligt äventyr för hela familjen.'
            )
          ]
        },
        {
          icon: 'route',
          title: tarifaText(
            'Mountain Biking',
            'Mountainbiken',
            'Bicicleta de montaña',
            'Mountainbiken',
            'Mountainbike'
          ),
          body: [
            tarifaText(
              '<strong>Mountain biking between two natural parks.</strong> Tarifa lies between Los Alcornocales and El Estrecho, creating varied terrain for riders of all levels.',
              '<strong>Mountainbiken zwischen zwei Naturparks.</strong> Tarifa liegt zwischen Los Alcornocales und El Estrecho und bietet abwechslungsreiches Gelände für jedes Niveau.',
              '<strong>Bicicleta de montaña entre dos parques naturales.</strong> Tarifa se encuentra entre Los Alcornocales y El Estrecho, con terrenos variados para ciclistas de todos los niveles.',
              '<strong>Mountainbiken tussen twee natuurparken.</strong> Tarifa ligt tussen Los Alcornocales en El Estrecho en biedt gevarieerd terrein voor elk niveau.',
              '<strong>Mountainbike mellan två naturparker.</strong> Tarifa ligger mellan Los Alcornocales och El Estrecho och erbjuder varierad terräng för alla nivåer.'
            ),
            tarifaBulletList([
              tarifaText(
                '<strong>Cross-country and downhill:</strong> A network of challenging, scenic trails.',
                '<strong>Cross-Country und Downhill:</strong> Ein Netzwerk aus anspruchsvollen, landschaftlich schönen Trails.',
                '<strong>Cross-country y descenso:</strong> Una red de senderos exigentes y paisajísticos.',
                '<strong>Cross-country en downhill:</strong> Een netwerk van uitdagende, mooie trails.',
                '<strong>Cross-country och downhill:</strong> Ett nätverk av utmanande och natursköna leder.'
              ),
              tarifaText(
                '<strong>Mountain routes:</strong> Off-road trails head inland and climb to more than 800 metres within 20 kilometres.',
                '<strong>Bergrouten:</strong> Offroad-Trails führen ins Hinterland und erreichen innerhalb von 20 Kilometern Höhen von über 800 Metern.',
                '<strong>Rutas de montaña:</strong> Los recorridos off-road se adentran en el interior y superan los 800 metros de altitud en 20 kilómetros.',
                '<strong>Bergroutes:</strong> Offroad-trails voeren landinwaarts en bereiken binnen 20 kilometer hoogtes boven 800 meter.',
                '<strong>Bergsleder:</strong> Offroad-leder går inåt land och når över 800 meters höjd inom 20 kilometer.'
              ),
              tarifaText(
                '<strong>Year-round riding:</strong> Tarifa’s moderate climate makes mountain biking possible throughout the year.',
                '<strong>Ganzjährig:</strong> Tarifas gemäßigtes Klima ermöglicht Mountainbiken das ganze Jahr.',
                '<strong>Durante todo el año:</strong> El clima templado de Tarifa permite practicar bicicleta de montaña en cualquier estación.',
                '<strong>Het hele jaar:</strong> Dankzij het gematigde klimaat kan er in Tarifa het hele jaar worden gemountainbiket.',
                '<strong>Året runt:</strong> Tarifas milda klimat gör mountainbike möjligt under hela året.'
              )
            ]),
            tarifaText(
              '<strong>Equipment and tours:</strong> Several shops in Tarifa offer bike rentals and guided tours.',
              '<strong>Ausrüstung und Touren:</strong> Mehrere Shops in Tarifa bieten Fahrradverleih und geführte Touren.',
              '<strong>Equipamiento y rutas:</strong> Varias tiendas de Tarifa ofrecen alquiler de bicicletas y excursiones guiadas.',
              '<strong>Materiaal en tours:</strong> Verschillende winkels in Tarifa bieden fietsverhuur en begeleide tours.',
              '<strong>Utrustning och turer:</strong> Flera butiker i Tarifa erbjuder cykeluthyrning och guidade turer.'
            ),
            tarifaText(
              '<strong>Suggested partner:</strong> MTB RENTAL – TARIFA ADVENTURE, Mar Adriático 19, 11380 Tarifa, Cádiz. They offer rentals and guided tours along Tarifa’s hidden trails.',
              '<strong>Empfohlener Partner:</strong> MTB RENTAL – TARIFA ADVENTURE, Mar Adriático 19, 11380 Tarifa, Cádiz. Dort gibt es Leihräder und geführte Touren auf Tarifas versteckten Trails.',
              '<strong>Colaborador sugerido:</strong> MTB RENTAL – TARIFA ADVENTURE, Mar Adriático 19, 11380 Tarifa, Cádiz. Ofrecen alquiler y rutas guiadas por los senderos escondidos de Tarifa.',
              '<strong>Aanbevolen partner:</strong> MTB RENTAL – TARIFA ADVENTURE, Mar Adriático 19, 11380 Tarifa, Cádiz. Ze bieden verhuur en begeleide tours over de verborgen trails van Tarifa.',
              '<strong>Föreslagen partner:</strong> MTB RENTAL – TARIFA ADVENTURE, Mar Adriático 19, 11380 Tarifa, Cádiz. De erbjuder uthyrning och guidade turer längs Tarifas dolda stigar.'
            ),
            tarifaText(
              'Get ready for an adrenaline-filled adventure on Tarifa’s mountain-bike trails.',
              'Macht euch bereit für ein actionreiches Abenteuer auf Tarifas Mountainbike-Trails.',
              'Preparaos para una aventura llena de adrenalina en los senderos de Tarifa.',
              'Maak jullie klaar voor een avontuur vol adrenaline op de mountainbikeroutes van Tarifa.',
              'Gör er redo för ett adrenalinfyllt äventyr på Tarifas mountainbikeleder.'
            )
          ]
        },
        {
          icon: 'hiking',
          title: tarifaText('Hiking', 'Wandern', 'Senderismo', 'Wandelen', 'Vandring'),
          body: [
            tarifaText(
              '<strong>Hike Tarifa’s varied landscape.</strong> From lush forests and rugged mountains to spectacular coastlines, there is a route for every kind of adventurer.',
              '<strong>Wandert durch Tarifas vielseitige Landschaft.</strong> Von dichten Wäldern und rauen Bergen bis zur spektakulären Küste gibt es für jeden Abenteurer die passende Route.',
              '<strong>Recorred los variados paisajes de Tarifa.</strong> Desde frondosos bosques y montañas escarpadas hasta costas espectaculares, hay una ruta para cada tipo de aventurero.',
              '<strong>Wandel door het gevarieerde landschap van Tarifa.</strong> Van weelderige bossen en ruige bergen tot een spectaculaire kust, er is een route voor elk type avonturier.',
              '<strong>Vandra i Tarifas varierade landskap.</strong> Från lummiga skogar och karga berg till en spektakulär kust finns en led för alla slags äventyrare.'
            ),
            tarifaBulletList([
              tarifaText(
                '<strong>Los Alcornocales Natural Park:</strong> Discover Europe’s largest cork-oak forest on well-marked trails such as El Bujeo, El Aljibe, and Sendero del Río de la Miel.',
                '<strong>Naturpark Los Alcornocales:</strong> Entdeckt Europas größten Korkeichenwald auf gut markierten Wegen wie El Bujeo, El Aljibe und dem Sendero del Río de la Miel.',
                '<strong>Parque Natural de Los Alcornocales:</strong> Descubrid el mayor alcornocal de Europa por senderos señalizados como El Bujeo, El Aljibe y el Sendero del Río de la Miel.',
                '<strong>Natuurpark Los Alcornocales:</strong> Ontdek het grootste kurkeikenbos van Europa via goed gemarkeerde paden zoals El Bujeo, El Aljibe en Sendero del Río de la Miel.',
                '<strong>Naturparken Los Alcornocales:</strong> Upptäck Europas största korkekskog längs välmarkerade leder som El Bujeo, El Aljibe och Sendero del Río de la Miel.'
              ),
              tarifaText(
                '<strong>Sierra de la Plata:</strong> Moderately challenging trails reward you with panoramic views of the Strait of Gibraltar, the Mediterranean, and the African coast.',
                '<strong>Sierra de la Plata:</strong> Mittelschwere Trails belohnen euch mit Panoramablick über die Straße von Gibraltar, das Mittelmeer und die afrikanische Küste.',
                '<strong>Sierra de la Plata:</strong> Senderos de dificultad moderada con vistas panorámicas al Estrecho de Gibraltar, el Mediterráneo y la costa africana.',
                '<strong>Sierra de la Plata:</strong> Middelzware routes met panoramisch uitzicht op de Straat van Gibraltar, de Middellandse Zee en de Afrikaanse kust.',
                '<strong>Sierra de la Plata:</strong> Medelsvåra leder belönar er med panoramavyer över Gibraltarsund, Medelhavet och Afrikas kust.'
              ),
              tarifaText(
                '<strong>Tarifa to Bolonia:</strong> A scenic coastal hike above the Atlantic and rugged cliffs, ending in Bolonia with its beach and the Roman ruins of Baelo Claudia.',
                '<strong>Tarifa nach Bolonia:</strong> Eine malerische Küstenwanderung über dem Atlantik und rauen Klippen bis nach Bolonia mit seinem Strand und den römischen Ruinen von Baelo Claudia.',
                '<strong>De Tarifa a Bolonia:</strong> Una ruta costera sobre el Atlántico y los acantilados que termina en Bolonia, con su playa y las ruinas romanas de Baelo Claudia.',
                '<strong>Van Tarifa naar Bolonia:</strong> Een schilderachtige kustwandeling boven de Atlantische Oceaan en ruige kliffen, eindigend in Bolonia met het strand en de Romeinse ruïnes van Baelo Claudia.',
                '<strong>Tarifa till Bolonia:</strong> En naturskön kustvandring ovanför Atlanten och karga klippor som slutar i Bolonia med stranden och de romerska ruinerna Baelo Claudia.'
              ),
              tarifaText(
                '<strong>La Peña Nature Reserve:</strong> Walk through varied protected ecosystems, see the iconic rock formation, and enjoy broad views of the Strait and Africa.',
                '<strong>Naturschutzgebiet La Peña:</strong> Wandert durch vielfältige geschützte Ökosysteme, seht die markante Felsformation und genießt den Weitblick über die Meerenge nach Afrika.',
                '<strong>Reserva Natural de La Peña:</strong> Recorred ecosistemas protegidos, contemplad la emblemática formación rocosa y disfrutad de amplias vistas del Estrecho y África.',
                '<strong>Natuurreservaat La Peña:</strong> Wandel door uiteenlopende beschermde ecosystemen, bekijk de iconische rotsformatie en geniet van brede uitzichten op de zeestraat en Afrika.',
                '<strong>Naturreservatet La Peña:</strong> Vandra genom varierade skyddade ekosystem, se den ikoniska klippformationen och njut av vida vyer över sundet och Afrika.'
              )
            ]),
            tarifaText(
              'These are only a few suggestions — Tarifa has many more trails waiting to be discovered.',
              'Das sind nur einige Vorschläge – in Tarifa warten noch viele weitere Wege darauf, entdeckt zu werden.',
              'Estas son solo algunas sugerencias: Tarifa tiene muchas más rutas esperando a ser descubiertas.',
              'Dit zijn slechts enkele suggesties — Tarifa heeft nog veel meer paden die wachten om ontdekt te worden.',
              'Detta är bara några förslag — Tarifa har många fler leder som väntar på att upptäckas.'
            )
          ]
        },
        {
          icon: 'fish',
          title: tarifaText('Fishing', 'Angeln', 'Pesca', 'Vissen', 'Fiske'),
          body: [
            tarifaText(
              'Tarifa offers fishing charters for experienced anglers and beginners, including big-game trolling, jigging, and other techniques.',
              'Tarifa bietet Angelcharter für erfahrene Angler und Anfänger, darunter Schleppfischen auf Hochseefische, Jigging und weitere Techniken.',
              'Tarifa ofrece salidas de pesca para pescadores experimentados y principiantes, con curricán de altura, jigging y otras técnicas.',
              'Tarifa biedt vischarters voor ervaren vissers en beginners, waaronder slepend vissen op grote vis, jigging en andere technieken.',
              'Tarifa erbjuder fisketurer för erfarna sportfiskare och nybörjare, bland annat trolling efter storfisk, jiggfiske och andra tekniker.'
            ),
            tarifaText(
              '<strong>Explore and Fishing Tarifa</strong> specialises in seasonal red-tuna fishing and offers charters for up to six people.<br><a class="am-link" href="https://www.exploreandfishingtarifa.com" target="_blank" rel="noopener noreferrer">exploreandfishingtarifa.com</a><br><a class="am-link" href="mailto:info@exploreandfishingtarifa.com">info@exploreandfishingtarifa.com</a>',
              '<strong>Explore and Fishing Tarifa</strong> ist auf saisonales Angeln von Rotem Thunfisch spezialisiert und bietet Charter für bis zu sechs Personen.<br><a class="am-link" href="https://www.exploreandfishingtarifa.com" target="_blank" rel="noopener noreferrer">exploreandfishingtarifa.com</a><br><a class="am-link" href="mailto:info@exploreandfishingtarifa.com">info@exploreandfishingtarifa.com</a>',
              '<strong>Explore and Fishing Tarifa</strong> está especializado en la pesca estacional del atún rojo y ofrece salidas para hasta seis personas.<br><a class="am-link" href="https://www.exploreandfishingtarifa.com" target="_blank" rel="noopener noreferrer">exploreandfishingtarifa.com</a><br><a class="am-link" href="mailto:info@exploreandfishingtarifa.com">info@exploreandfishingtarifa.com</a>',
              '<strong>Explore and Fishing Tarifa</strong> is gespecialiseerd in seizoensgebonden vissen op blauwvintonijn en biedt charters voor maximaal zes personen.<br><a class="am-link" href="https://www.exploreandfishingtarifa.com" target="_blank" rel="noopener noreferrer">exploreandfishingtarifa.com</a><br><a class="am-link" href="mailto:info@exploreandfishingtarifa.com">info@exploreandfishingtarifa.com</a>',
              '<strong>Explore and Fishing Tarifa</strong> specialiserar sig på säsongsbetonat fiske efter röd tonfisk och erbjuder turer för upp till sex personer.<br><a class="am-link" href="https://www.exploreandfishingtarifa.com" target="_blank" rel="noopener noreferrer">exploreandfishingtarifa.com</a><br><a class="am-link" href="mailto:info@exploreandfishingtarifa.com">info@exploreandfishingtarifa.com</a>'
            ),
            tarifaText(
              '<strong>Tom’s Catch</strong> offers several fishing trips, including tuna fishing, with online booking.<br><a class="am-link" href="mailto:contact@tomscatch.com">contact@tomscatch.com</a><br><a class="am-link" href="tel:+34651377316">(+34) 651 377 316</a><br><a class="am-link" href="https://www.tomscatch.com/fishing-in-tarifa/explorer-191" target="_blank" rel="noopener noreferrer">tomscatch.com</a>',
              '<strong>Tom’s Catch</strong> bietet verschiedene Angeltouren einschließlich Thunfisch-Angeln und Online-Buchung.<br><a class="am-link" href="mailto:contact@tomscatch.com">contact@tomscatch.com</a><br><a class="am-link" href="tel:+34651377316">(+34) 651 377 316</a><br><a class="am-link" href="https://www.tomscatch.com/fishing-in-tarifa/explorer-191" target="_blank" rel="noopener noreferrer">tomscatch.com</a>',
              '<strong>Tom’s Catch</strong> ofrece diferentes salidas, incluida la pesca del atún, con reserva online.<br><a class="am-link" href="mailto:contact@tomscatch.com">contact@tomscatch.com</a><br><a class="am-link" href="tel:+34651377316">(+34) 651 377 316</a><br><a class="am-link" href="https://www.tomscatch.com/fishing-in-tarifa/explorer-191" target="_blank" rel="noopener noreferrer">tomscatch.com</a>',
              '<strong>Tom’s Catch</strong> biedt verschillende vistrips, waaronder tonijnvissen, met online boeking.<br><a class="am-link" href="mailto:contact@tomscatch.com">contact@tomscatch.com</a><br><a class="am-link" href="tel:+34651377316">(+34) 651 377 316</a><br><a class="am-link" href="https://www.tomscatch.com/fishing-in-tarifa/explorer-191" target="_blank" rel="noopener noreferrer">tomscatch.com</a>',
              '<strong>Tom’s Catch</strong> erbjuder flera fisketurer, inklusive tonfiskefiske, med bokning online.<br><a class="am-link" href="mailto:contact@tomscatch.com">contact@tomscatch.com</a><br><a class="am-link" href="tel:+34651377316">(+34) 651 377 316</a><br><a class="am-link" href="https://www.tomscatch.com/fishing-in-tarifa/explorer-191" target="_blank" rel="noopener noreferrer">tomscatch.com</a>'
            )
          ]
        }
      ]
    }
  ]
};

const tarifaFamilySurfSightseeing: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-sightseeing',
  entityKey: 'amara-family-surf',
  backSlug: 'tarifa-guest-local-guide',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Sightseeing | AMARA Tarifa',
    'Sightseeing | AMARA Tarifa',
    'Turismo | AMARA Tarifa',
    'Bezienswaardigheden | AMARA Tarifa',
    'Sevärdheter | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    'Tarifa is more than wind and waves. Discover historic landmarks and breathtaking views.',
    'Tarifa ist mehr als Wind und Wellen. Entdeckt historische Wahrzeichen und atemberaubende Ausblicke.',
    'Tarifa es mucho más que viento y olas. Descubrid monumentos históricos y unas vistas impresionantes.',
    'Tarifa is meer dan wind en golven. Ontdek historische bezienswaardigheden en adembenemende uitzichten.',
    'Tarifa är mer än vind och vågor. Upptäck historiska landmärken och hisnande vyer.'
  ),
  kicker: tarifaText(
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE'
  ),
  title: tarifaText(
    'Sightseeing in Tarifa',
    'Sightseeing in Tarifa',
    'Turismo en Tarifa',
    'Bezienswaardigheden in Tarifa',
    'Sevärdheter i Tarifa'
  ),
  intro: tarifaText(
    'Tarifa is more than wind and waves. Between two continents and two seas, history and nature meet in a way that feels almost cinematic.',
    'Tarifa ist mehr als Wind und Wellen. Zwischen zwei Kontinenten und zwei Meeren treffen Geschichte und Natur auf eine Weise aufeinander, die fast filmreif wirkt.',
    'Tarifa es mucho más que viento y olas. Entre dos continentes y dos mares, la historia y la naturaleza se unen de una forma que parece casi de película.',
    'Tarifa is meer dan wind en golven. Tussen twee continenten en twee zeeën komen geschiedenis en natuur op een bijna filmische manier samen.',
    'Tarifa är mer än vind och vågor. Mellan två kontinenter och två hav möts historia och natur på ett sätt som känns nästan filmiskt.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Landmarks & Views',
        'Wahrzeichen & Ausblicke',
        'Monumentos y vistas',
        'Bezienswaardigheden & uitzichten',
        'Landmärken & utsikter'
      ),
      items: [
        {
          icon: 'landmark',
          title: tarifaText(
            'Island Las Palomas (Punta Marroquí)',
            'Insel Las Palomas (Punta Marroquí)',
            'Isla de Las Palomas (Punta Marroquí)',
            'Eiland Las Palomas (Punta Marroquí)',
            'Ön Las Palomas (Punta Marroquí)'
          ),
          body: tarifaParagraphs({
            en: [
              "At <strong><a class=\"am-link\" href=\"https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Isla de Las Palomas</strong></a></strong>, also known as Punta Marroquí, the Mediterranean and Atlantic meet. It marks the southernmost point of mainland Spain and continental Europe.",
              'A beautiful walk leads between the two seas toward the island, where a 43-metre lighthouse rises above the Strait of Gibraltar. On clear days, Africa feels astonishingly close.',
              'Just beside it lies <strong>Balneario Beach</strong>, a favourite surf spot with powerful waves. Tarifa is the only place where you can swim in both the Atlantic and the Mediterranean on the same day.'
            ],
            de: [
              "An der <strong><a class=\"am-link\" href=\"https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Isla de Las Palomas</strong></a></strong>, auch Punta Marroquí genannt, treffen Mittelmeer und Atlantik aufeinander. Sie markiert den südlichsten Punkt des spanischen Festlands und des europäischen Kontinents.",
              'Ein wunderschöner Spaziergang führt zwischen den beiden Meeren zur Insel, wo sich ein 43 Meter hoher Leuchtturm über der Straße von Gibraltar erhebt. An klaren Tagen wirkt Afrika erstaunlich nah.',
              'Direkt daneben liegt der <strong>Balneario Beach</strong>, ein beliebter Surfspot mit kraftvollen Wellen. Tarifa ist der einzige Ort, an dem ihr am selben Tag sowohl im Atlantik als auch im Mittelmeer baden könnt.'
            ],
            es: [
              "En la <strong><a class=\"am-link\" href=\"https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Isla de Las Palomas</strong></a></strong>, también conocida como Punta Marroquí, se unen el Mediterráneo y el Atlántico. Marca el punto más meridional de la España peninsular y de Europa continental.",
              'Un precioso paseo conduce entre los dos mares hacia la isla, donde un faro de 43 metros se alza sobre el Estrecho de Gibraltar. En días claros, África parece increíblemente cerca.',
              'Justo al lado está la <strong>Playa del Balneario</strong>, un popular spot de surf con olas potentes. Tarifa es el único lugar donde podéis bañaros en el Atlántico y el Mediterráneo el mismo día.'
            ],
            nl: [
              "Bij <strong><a class=\"am-link\" href=\"https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Isla de Las Palomas</strong></a></strong>, ook bekend als Punta Marroquí, komen de Middellandse Zee en de Atlantische Oceaan samen. Het is het zuidelijkste punt van het Spaanse vasteland en continentaal Europa.",
              'Een prachtige wandeling voert tussen de twee zeeën naar het eiland, waar een 43 meter hoge vuurtoren boven de Straat van Gibraltar uitsteekt. Op heldere dagen voelt Afrika verrassend dichtbij.',
              'Vlak ernaast ligt <strong>Balneario Beach</strong>, een populaire surfspot met krachtige golven. Tarifa is de enige plek waar jullie op dezelfde dag in zowel de Atlantische Oceaan als de Middellandse Zee kunnen zwemmen.'
            ],
            sv: [
              "Vid <strong><a class=\"am-link\" href=\"https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Isla de Las Palomas</strong></a></strong>, även känd som Punta Marroquí, möts Medelhavet och Atlanten. Här ligger den sydligaste punkten på Spaniens fastland och på den europeiska kontinenten.",
              'En vacker promenad leder mellan de två haven mot ön, där en 43 meter hög fyr reser sig över Gibraltarsund. Under klara dagar känns Afrika förvånansvärt nära.',
              'Alldeles intill ligger <strong>Balneario Beach</strong>, en populär surfspot med kraftfulla vågor. Tarifa är den enda platsen där ni kan bada i både Atlanten och Medelhavet under samma dag.'
            ]
          }),
        },
        {
          icon: 'landmark',
          title: tarifaText(
            'Guzmán el Bueno Castle',
            'Castillo de Guzmán el Bueno',
            'Castillo de Guzmán el Bueno',
            'Kasteel van Guzmán el Bueno',
            'Guzmán el Bueno-slottet'
          ),
          body: tarifaParagraphs({
            en: [
              'Built by Caliph Abderramán III, <a class="am-link" href="https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Guzmán el Bueno Castle</strong></a> was designed as a strategic fortress controlling the Strait of Gibraltar.',
              'In 1294, Guzmán “the Good” became legendary for choosing to protect Tarifa rather than surrender it in exchange for his captured son. The castle remains a symbol of loyalty and courage.',
              'Today you can walk its walls in the old town and enjoy spectacular views across the Strait toward Tangier.',
              '<strong>Opening hours:</strong><br>Tue–Sat: 11:00–14:00 & 18:00–20:00<br>Sun: 11:00–14:00<br>Mon: Closed<br><em>Opening times can change seasonally. Check again on the day of your visit.</em>'
            ],
            de: [
              'Das von Kalif Abderramán III. erbaute <a class="am-link" href="https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Castillo de Guzmán el Bueno</strong></a> diente als strategische Festung zur Kontrolle der Straße von Gibraltar.',
              'Im Jahr 1294 wurde Guzmán „der Gute“ zur Legende, als er Tarifa verteidigte, anstatt die Stadt im Austausch für seinen gefangenen Sohn aufzugeben. Die Burg bleibt ein Symbol für Loyalität und Mut.',
              'Heute könnt ihr auf ihren Mauern in der Altstadt spazieren und einen spektakulären Blick über die Meerenge bis nach Tanger genießen.',
              '<strong>Öffnungszeiten:</strong><br>Di–Sa: 11:00–14:00 & 18:00–20:00 Uhr<br>So: 11:00–14:00 Uhr<br>Mo: geschlossen<br><em>Die Öffnungszeiten können saisonal variieren. Prüft sie am Besuchstag noch einmal.</em>'
            ],
            es: [
              'Construido por el califa Abderramán III, el <a class="am-link" href="https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Castillo de Guzmán el Bueno</strong></a> fue concebido como una fortaleza estratégica para controlar el Estrecho de Gibraltar.',
              'En 1294, Guzmán “el Bueno” se convirtió en leyenda al elegir defender Tarifa en lugar de entregarla a cambio de su hijo capturado. El castillo sigue siendo un símbolo de lealtad y valentía.',
              'Hoy podéis pasear por sus murallas en el casco antiguo y disfrutar de vistas espectaculares del Estrecho hacia Tánger.',
              '<strong>Horarios:</strong><br>Mar–Sáb: 11:00–14:00 y 18:00–20:00<br>Dom: 11:00–14:00<br>Lun: cerrado<br><em>Los horarios pueden variar según la temporada. Comprobadlos el mismo día de la visita.</em>'
            ],
            nl: [
              'Het <a class="am-link" href="https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Kasteel van Guzmán el Bueno</strong></a> werd gebouwd door kalief Abderramán III en was bedoeld als strategisch fort om de Straat van Gibraltar te bewaken.',
              'In 1294 werd Guzmán “de Goede” een legende toen hij Tarifa verdedigde in plaats van de stad over te geven in ruil voor zijn gevangengenomen zoon. Het kasteel blijft een symbool van loyaliteit en moed.',
              'Tegenwoordig kunnen jullie over de muren in de oude stad wandelen en genieten van spectaculair uitzicht over de zeestraat richting Tanger.',
              '<strong>Openingstijden:</strong><br>Di–Za: 11:00–14:00 & 18:00–20:00 uur<br>Zo: 11:00–14:00 uur<br>Ma: gesloten<br><em>Openingstijden kunnen per seizoen verschillen. Controleer ze op de dag van jullie bezoek.</em>'
            ],
            sv: [
              '<a class="am-link" href="https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Guzmán el Bueno-slottet</strong></a> byggdes av kalif Abderramán III som en strategisk fästning för att kontrollera Gibraltarsund.',
              'År 1294 blev Guzmán “den Gode” legendarisk när han valde att försvara Tarifa i stället för att överlämna staden i utbyte mot sin tillfångatagne son. Slottet är fortfarande en symbol för lojalitet och mod.',
              'Idag kan ni promenera på murarna i gamla stan och njuta av spektakulära vyer över sundet mot Tanger.',
              '<strong>Öppettider:</strong><br>Tis–Lör: 11:00–14:00 & 18:00–20:00<br>Sön: 11:00–14:00<br>Mån: stängt<br><em>Öppettiderna kan variera med säsongen. Kontrollera dem samma dag som ni besöker platsen.</em>'
            ]
          }),
        },
        {
          icon: 'landmark',
          title: tarifaText(
            'St. Matthew’s Church',
            'Iglesia de San Mateo',
            'Iglesia de San Mateo',
            'Sint-Mattheüskerk',
            'San Mateo-kyrkan'
          ),
          body: tarifaParagraphs({
            en: [
              'Located in the heart of the old town, <a class="am-link" href="https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa" target="_blank" rel="noopener noreferrer"><strong>St. Matthew’s Church</strong></a>, dating from the 16th century, combines late-Gothic architecture with a neoclassical façade. Stained-glass windows and expressive statues create a powerful interior atmosphere.',
              'After the Catholic Monarchs reclaimed Tarifa, the church offered forgiveness to anyone who settled here for one year and one day — a historic gesture intended to repopulate what had been a dangerous frontier town.'
            ],
            de: [
              'Die <a class="am-link" href="https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Iglesia de San Mateo</strong></a> aus dem 16. Jahrhundert liegt im Herzen der Altstadt und verbindet spätgotische Architektur mit einer neoklassizistischen Fassade. Buntglasfenster und ausdrucksstarke Statuen schaffen eine besondere Atmosphäre im Inneren.',
              'Nachdem die Katholischen Könige Tarifa zurückerobert hatten, bot die Kirche jedem Vergebung an, der sich für ein Jahr und einen Tag hier niederließ – eine historische Geste, um die einst gefährliche Grenzstadt wieder zu bevölkern.'
            ],
            es: [
              'Situada en pleno casco antiguo, la <a class="am-link" href="https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Iglesia de San Mateo</strong></a>, del siglo XVI, combina la arquitectura del gótico tardío con una fachada neoclásica. Las vidrieras y las expresivas estatuas crean una atmósfera interior muy especial.',
              'Tras la reconquista de Tarifa por los Reyes Católicos, la iglesia ofreció el perdón a quien se instalara aquí durante un año y un día, un gesto histórico para repoblar lo que había sido una peligrosa ciudad fronteriza.'
            ],
            nl: [
              'De 16e-eeuwse <a class="am-link" href="https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa" target="_blank" rel="noopener noreferrer"><strong>Sint-Mattheüskerk</strong></a> ligt in het hart van de oude stad en combineert laatgotische architectuur met een neoklassieke gevel. Glas-in-loodramen en expressieve beelden zorgen binnen voor een bijzondere sfeer.',
              'Nadat de Katholieke Koningen Tarifa hadden heroverd, bood de kerk vergeving aan iedereen die zich hier een jaar en een dag vestigde — een historisch gebaar om de ooit gevaarlijke grensstad opnieuw te bevolken.'
            ],
            sv: [
              '<a class="am-link" href="https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa" target="_blank" rel="noopener noreferrer"><strong>San Mateo-kyrkan</strong></a> från 1500-talet ligger i hjärtat av gamla stan och förenar sengotisk arkitektur med en neoklassisk fasad. Målade glasfönster och uttrycksfulla statyer skapar en stark atmosfär inuti.',
              'Efter att de katolska monarkerna återerövrat Tarifa erbjöd kyrkan förlåtelse till den som bosatte sig här i ett år och en dag — en historisk gest för att återbefolka den tidigare farliga gränsstaden.'
            ]
          }),
        },
        {
          icon: 'location-pin',
          title: tarifaText(
            'Mirador África & Torre de Miramar',
            'Mirador África & Torre de Miramar',
            'Mirador África y Torre de Miramar',
            'Mirador África & Torre de Miramar',
            'Mirador África & Torre de Miramar'
          ),
          body: tarifaParagraphs({
            en: [
              "From the old city wall on Calle Amargura, <a class=\"am-link\" href=\"https://maps.google.com/?q=Mirador+Africa+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Mirador África</strong></a> offers one of the most impressive views in southern Spain.",
              'At the narrowest point of the Strait of Gibraltar, Morocco lies only 14 km away. The view across two continents is peaceful and unforgettable. <em>Tip: Come for sunset.</em>'
            ],
            de: [
              "Von der alten Stadtmauer an der Calle Amargura bietet der <a class=\"am-link\" href=\"https://maps.google.com/?q=Mirador+Africa+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Mirador África</strong></a> einen der beeindruckendsten Ausblicke Südspaniens.",
              'An der engsten Stelle der Straße von Gibraltar ist Marokko nur 14 km entfernt. Der Blick über zwei Kontinente ist friedlich und unvergesslich. <em>Tipp: Kommt zum Sonnenuntergang.</em>'
            ],
            es: [
              "Desde la antigua muralla de la Calle Amargura, el <a class=\"am-link\" href=\"https://maps.google.com/?q=Mirador+Africa+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Mirador África</strong></a> ofrece una de las vistas más impresionantes del sur de España.",
              'En el punto más estrecho del Estrecho de Gibraltar, Marruecos está a solo 14 km. La vista entre dos continentes transmite paz y resulta inolvidable. <em>Consejo: Venid al atardecer.</em>'
            ],
            nl: [
              "Vanaf de oude stadsmuur aan de Calle Amargura biedt <a class=\"am-link\" href=\"https://maps.google.com/?q=Mirador+Africa+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Mirador África</strong></a> een van de indrukwekkendste uitzichten van Zuid-Spanje.",
              'Op het smalste punt van de Straat van Gibraltar ligt Marokko slechts 14 km verderop. Het uitzicht over twee continenten is vredig en onvergetelijk. <em>Tip: Kom voor de zonsondergang.</em>'
            ],
            sv: [
              "Från den gamla stadsmuren på Calle Amargura erbjuder <a class=\"am-link\" href=\"https://maps.google.com/?q=Mirador+Africa+Tarifa\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Mirador África</strong></a> en av södra Spaniens mest imponerande utsikter.",
              'Vid Gibraltarsunds smalaste punkt ligger Marocko bara 14 km bort. Vyn över två kontinenter är fridfull och oförglömlig. <em>Tips: Kom vid solnedgången.</em>'
            ]
          }),

        }
      ]
    },
    {
      heading: tarifaText(
        'Nature & History',
        'Natur & Geschichte',
        'Naturaleza e historia',
        'Natuur & geschiedenis',
        'Natur & historia'
      ),
      items: [
        {
          icon: 'route',
          title: tarifaText(
            'Valdevaqueros Sand Dune',
            'Sanddüne von Valdevaqueros',
            'Duna de Valdevaqueros',
            'Zandduin van Valdevaqueros',
            'Sanddynen i Valdevaqueros'
          ),
          body: tarifaParagraphs({
            en: [
              'About 8 km from Tarifa toward Cádiz, near Punta Paloma, you will find the <a class="am-link" href="https://maps.google.com/?q=Duna+de+Valdevaqueros" target="_blank" rel="noopener noreferrer"><strong>Valdevaqueros Sand Dune</strong></a>, one of Andalusia’s most spectacular dunes.',
              'It is a protected nature reserve with untouched beaches and no buildings — only sea, wind, and wide horizons.',
              'From the top of the dune, the view of the African coastline is breathtaking.'
            ],
            de: [
              'Etwa 8 km von Tarifa in Richtung Cádiz, nahe Punta Paloma, findet ihr die <a class="am-link" href="https://maps.google.com/?q=Duna+de+Valdevaqueros" target="_blank" rel="noopener noreferrer"><strong>Sanddüne von Valdevaqueros</strong></a>, eine der spektakulärsten Dünen Andalusiens.',
              'Sie liegt in einem geschützten Naturreservat mit unberührten Stränden und ganz ohne Gebäude – nur Meer, Wind und weite Horizonte.',
              'Von der Düne aus ist der Blick auf die afrikanische Küste atemberaubend.'
            ],
            es: [
              'A unos 8 km de Tarifa en dirección a Cádiz, cerca de Punta Paloma, encontraréis la <a class="am-link" href="https://maps.google.com/?q=Duna+de+Valdevaqueros" target="_blank" rel="noopener noreferrer"><strong>Duna de Valdevaqueros</strong></a>, una de las dunas más espectaculares de Andalucía.',
              'Está en una reserva natural protegida con playas vírgenes y sin edificios: solo mar, viento y amplios horizontes.',
              'Desde lo alto de la duna, las vistas de la costa africana son impresionantes.'
            ],
            nl: [
              'Op ongeveer 8 km van Tarifa richting Cádiz, bij Punta Paloma, vinden jullie de <a class="am-link" href="https://maps.google.com/?q=Duna+de+Valdevaqueros" target="_blank" rel="noopener noreferrer"><strong>Zandduin van Valdevaqueros</strong></a>, een van de spectaculairste duinen van Andalusië.',
              'Het is een beschermd natuurgebied met ongerepte stranden en zonder bebouwing — alleen zee, wind en weidse horizonten.',
              'Vanaf de top van het duin is het uitzicht op de Afrikaanse kust adembenemend.'
            ],
            sv: [
              'Cirka 8 km från Tarifa i riktning mot Cádiz, nära Punta Paloma, hittar ni <a class="am-link" href="https://maps.google.com/?q=Duna+de+Valdevaqueros" target="_blank" rel="noopener noreferrer"><strong>Sanddynen i Valdevaqueros</strong></a>, en av Andalusiens mest spektakulära sanddyner.',
              'Den ligger i ett skyddat naturreservat med orörda stränder och helt utan byggnader — bara hav, vind och vida horisonter.',
              'Från dynens topp är utsikten över Afrikas kust hisnande.'
            ]
          }),
        },
        {
          icon: 'landmark',
          title: tarifaText(
            'Roman Ruins of Baelo Claudia (Bolonia)',
            'Römische Ruinen von Baelo Claudia (Bolonia)',
            'Ruinas romanas de Baelo Claudia (Bolonia)',
            'Romeinse ruïnes van Baelo Claudia (Bolonia)',
            'Romerska ruinerna Baelo Claudia (Bolonia)'
          ),
          body: tarifaParagraphs({
            en: [
              "Just 15 km from Tarifa lies the ancient Roman city of <a class=\"am-link\" href=\"https://maps.google.com/?q=Baelo+Claudia+Bolonia\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Baelo Claudia</strong></a>, more than 2,000 years old.",
              'Once a prosperous trade centre, the city supplied the Roman Empire with garum, the famous fish-paste delicacy of its time.',
              'Today you can explore the theatre, basilica, Temple of Isis, aqueducts, thermal baths, and fish-salting factories.',
              '<strong>Opening hours:</strong> Vary by season. Closed Mondays.<br><em>Check the current hours on the day of your visit.</em>'
            ],
            de: [
              "Nur 15 km von Tarifa entfernt liegt die mehr als 2.000 Jahre alte römische Stadt <a class=\"am-link\" href=\"https://maps.google.com/?q=Baelo+Claudia+Bolonia\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Baelo Claudia</strong></a>.",
              'Einst ein florierendes Handelszentrum, versorgte die Stadt das Römische Reich mit Garum, der berühmten Fischpasten-Delikatesse ihrer Zeit.',
              'Heute könnt ihr Theater, Basilika, Isis-Tempel, Aquädukte, Thermalbäder und die alten Fischsalzfabriken erkunden.',
              '<strong>Öffnungszeiten:</strong> Je nach Saison unterschiedlich. Montags geschlossen.<br><em>Prüft die aktuellen Zeiten am Besuchstag.</em>'
            ],
            es: [
              "A solo 15 km de Tarifa se encuentra la antigua ciudad romana de <a class=\"am-link\" href=\"https://maps.google.com/?q=Baelo+Claudia+Bolonia\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Baelo Claudia</strong></a>, con más de 2.000 años de historia.",
              'Antiguo centro comercial próspero, la ciudad abastecía al Imperio romano de garum, la famosa pasta de pescado de la época.',
              'Hoy podéis explorar el teatro, la basílica, el templo de Isis, los acueductos, las termas y las fábricas de salazón.',
              '<strong>Horarios:</strong> Varían según la temporada. Cerrado los lunes.<br><em>Comprobad el horario actual el mismo día de la visita.</em>'
            ],
            nl: [
              "Slechts 15 km van Tarifa ligt de meer dan 2.000 jaar oude Romeinse stad <a class=\"am-link\" href=\"https://maps.google.com/?q=Baelo+Claudia+Bolonia\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Baelo Claudia</strong></a>.",
              'Ooit een welvarend handelscentrum voorzag de stad het Romeinse Rijk van garum, de beroemde vispasta uit die tijd.',
              'Tegenwoordig kunnen jullie het theater, de basiliek, de Isistempel, aquaducten, thermale baden en viszouterijen verkennen.',
              '<strong>Openingstijden:</strong> Verschillen per seizoen. Maandag gesloten.<br><em>Controleer de actuele tijden op de dag van jullie bezoek.</em>'
            ],
            sv: [
              "Bara 15 km från Tarifa ligger den mer än 2 000 år gamla romerska staden <a class=\"am-link\" href=\"https://maps.google.com/?q=Baelo+Claudia+Bolonia\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Baelo Claudia</strong></a>.",
              'Som ett tidigare blomstrande handelscentrum försåg staden Romarriket med garum, den tidens berömda fiskpasta.',
              'Idag kan ni utforska teatern, basilikan, Isistemplet, akvedukterna, termalbaden och fabrikerna för fisksaltning.',
              '<strong>Öppettider:</strong> Varierar med säsongen. Stängt på måndagar.<br><em>Kontrollera aktuella tider samma dag som ni besöker platsen.</em>'
            ]
          }),

        }
      ]
    },
    {
      heading: tarifaText(
        'Experiences',
        'Erlebnisse',
        'Experiencias',
        'Ervaringen',
        'Upplevelser'
      ),
      items: [
        {
          icon: 'wave',
          title: tarifaText(
            'Respectful Whale Watching',
            'Respektvolles Whale Watching',
            'Avistamiento respetuoso de cetáceos',
            'Respectvol walvissen spotten',
            'Respektfull valskådning'
          ),
          body: tarifaParagraphs({
            en: [
              'The Strait of Gibraltar is one of Europe’s best places to observe whales and dolphins in their natural habitat.',
              'You may see striped dolphins, common dolphins, pilot whales, sperm whales from May to July, and even orcas from June to September.',
              'Tours usually last around 2–3 hours and depart several times daily from Tarifa harbour. Choose a calm-sea day for the most comfortable experience.',
              '<strong>Established operator:</strong><br>Firmm España<br>Calle Alcalde Juan Núñez 10, L-1<br><a class="am-link" href="tel:+34956627008">+34 956 627 008</a><br><a class="am-link" href="https://www.firmm.org/" target="_blank" rel="noopener noreferrer">firmm.org</a>'
            ],
            de: [
              'Die Straße von Gibraltar ist einer der besten Orte Europas, um Wale und Delfine in ihrem natürlichen Lebensraum zu beobachten.',
              'Ihr könnt Streifendelfine, Gewöhnliche Delfine, Grindwale, Pottwale von Mai bis Juli und sogar Orcas von Juni bis September sehen.',
              'Die Touren dauern meist 2–3 Stunden und starten mehrmals täglich am Hafen von Tarifa. Wählt für ein möglichst angenehmes Erlebnis einen Tag mit ruhiger See.',
              '<strong>Etablierter Anbieter:</strong><br>Firmm España<br>Calle Alcalde Juan Núñez 10, L-1<br><a class="am-link" href="tel:+34956627008">+34 956 627 008</a><br><a class="am-link" href="https://www.firmm.org/" target="_blank" rel="noopener noreferrer">firmm.org</a>'
            ],
            es: [
              'El Estrecho de Gibraltar es uno de los mejores lugares de Europa para observar ballenas y delfines en su hábitat natural.',
              'Podéis ver delfines listados, delfines comunes, calderones, cachalotes de mayo a julio e incluso orcas de junio a septiembre.',
              'Las excursiones suelen durar 2–3 horas y salen varias veces al día desde el puerto de Tarifa. Elegid un día con el mar en calma para disfrutar de una experiencia más cómoda.',
              '<strong>Operador de confianza:</strong><br>Firmm España<br>Calle Alcalde Juan Núñez 10, L-1<br><a class="am-link" href="tel:+34956627008">+34 956 627 008</a><br><a class="am-link" href="https://www.firmm.org/" target="_blank" rel="noopener noreferrer">firmm.org</a>'
            ],
            nl: [
              'De Straat van Gibraltar is een van de beste plekken in Europa om walvissen en dolfijnen in hun natuurlijke omgeving te zien.',
              'Jullie kunnen gestreepte en gewone dolfijnen, grienden, potvissen van mei tot juli en zelfs orka’s van juni tot september tegenkomen.',
              'Tours duren meestal 2–3 uur en vertrekken meerdere keren per dag vanuit de haven van Tarifa. Kies voor een comfortabele ervaring een dag met een rustige zee.',
              '<strong>Ervaren aanbieder:</strong><br>Firmm España<br>Calle Alcalde Juan Núñez 10, L-1<br><a class="am-link" href="tel:+34956627008">+34 956 627 008</a><br><a class="am-link" href="https://www.firmm.org/" target="_blank" rel="noopener noreferrer">firmm.org</a>'
            ],
            sv: [
              'Gibraltarsund är en av Europas bästa platser för att se valar och delfiner i deras naturliga miljö.',
              'Ni kan få se strimmiga och vanliga delfiner, grindvalar, kaskeloter från maj till juli och till och med späckhuggare från juni till september.',
              'Turerna tar vanligtvis 2–3 timmar och avgår flera gånger om dagen från Tarifas hamn. Välj en dag med lugnt hav för en så bekväm upplevelse som möjligt.',
              '<strong>Etablerad arrangör:</strong><br>Firmm España<br>Calle Alcalde Juan Núñez 10, L-1<br><a class="am-link" href="tel:+34956627008">+34 956 627 008</a><br><a class="am-link" href="https://www.firmm.org/" target="_blank" rel="noopener noreferrer">firmm.org</a>'
            ]
          })
        }
      ]
    }
  ]
};

const tarifaFamilySurfNightlife: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-nightlife',
  entityKey: 'amara-family-surf',
  backSlug: 'tarifa-guest-local-guide',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    'Nightlife | AMARA Tarifa',
    'Nachtleben | AMARA Tarifa',
    'Vida Nocturna | AMARA Tarifa',
    'Nachtleven | AMARA Tarifa',
    'Nattliv | AMARA Tarifa'
  ),
  seoDescription: tarifaText(
    "Discover Tarifa's infectious nightlife where good vibes meet good times.",
    'Entdeckt Tarifas mitreißendes Nachtleben, wo gute Stimmung auf unvergessliche Nächte trifft.',
    'Descubrid la contagiosa vida nocturna de Tarifa, donde las buenas vibraciones se unen a momentos inolvidables.',
    'Ontdek het aanstekelijke nachtleven van Tarifa, waar een goede sfeer en geweldige momenten samenkomen.',
    'Upptäck Tarifas smittande nattliv, där sköna vibbar möter oförglömliga stunder.'
  ),
  kicker: tarifaText(
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE',
    'TARIFA LOCAL GUIDE'
  ),
  title: tarifaText(
    'Nightlife',
    'Nachtleben',
    'Vida nocturna',
    'Nachtleven',
    'Nattliv'
  ),
  intro: tarifaText(
    "At the southernmost point of the European mainland, Tarifa's surfer spirit, open-minded travellers and locals blend into a relaxed yet vibrant crowd.",
    'Am südlichsten Punkt des europäischen Festlands verschmelzen Tarifas Surfer-Spirit, weltoffene Reisende und Einheimische zu einem entspannten und zugleich lebendigen Publikum.',
    'En el punto más meridional de la Europa continental, el espíritu surfero de Tarifa, los viajeros de mente abierta y la gente local se mezclan en un ambiente relajado y vibrante.',
    'Op het zuidelijkste punt van het Europese vasteland vormen de surfersfeer van Tarifa, ruimdenkende reizigers en locals samen een ontspannen maar levendig publiek.',
    'På det europeiska fastlandets sydligaste punkt möts Tarifas surfkultur, öppensinnade resenärer och lokalbor i en avslappnad men livfull atmosfär.'
  ),
  categories: [
    {
      heading: tarifaText(
        'Nightlife in Tarifa',
        'Nachtleben in Tarifa',
        'La noche en Tarifa',
        'Nachtleven in Tarifa',
        'Nattliv i Tarifa'
      ),
      intro: tarifaParagraphs({
        en: [
          '<strong>Tarifa’s Infectious Nightlife: Where Good Vibes Meet Good Times</strong>',
          'Evenings begin slowly: sunset cocktails, tapas in the old town and long conversations. As the streets fill, the atmosphere becomes communal, lively and effortlessly social.'
        ],
        de: [
          '<strong>Tarifas mitreißendes Nachtleben: Wo gute Stimmung auf unvergessliche Nächte trifft</strong>',
          'Die Abende beginnen entspannt: mit Cocktails zum Sonnenuntergang, Tapas in der Altstadt und langen Gesprächen. Wenn sich die Gassen füllen, wird die Atmosphäre gemeinschaftlich, lebendig und wunderbar ungezwungen.'
        ],
        es: [
          '<strong>La contagiosa vida nocturna de Tarifa: Donde las buenas vibraciones se unen a momentos inolvidables</strong>',
          'Las noches empiezan sin prisas: cócteles al atardecer, tapas en el casco antiguo y largas conversaciones. A medida que se llenan las calles, el ambiente se vuelve cercano, animado y espontáneamente social.'
        ],
        nl: [
          '<strong>Het aanstekelijke nachtleven van Tarifa: Waar een goede sfeer en geweldige momenten samenkomen</strong>',
          'De avond komt rustig op gang met cocktails bij zonsondergang, tapas in de oude stad en lange gesprekken. Zodra de straten vollopen, wordt de sfeer levendig, verbonden en heerlijk ongedwongen.'
        ],
        sv: [
          '<strong>Tarifas smittande nattliv: Där sköna vibbar möter oförglömliga stunder</strong>',
          'Kvällarna börjar lugnt med drinkar i solnedgången, tapas i gamla stan och långa samtal. När gatorna fylls blir stämningen gemensam, livlig och härligt avslappnad.'
        ]
      }),
      items: [
        {
          icon: 'moon',
          title: tarifaText(
            'Early Evening',
            'Der frühe Abend',
            'A primera hora de la noche',
            'Vroeg in de avond',
            'Tidig kväll'
          ),
          body: tarifaParagraphs({
            en: [
              'Start with relaxed pre-dinner drinks in the old town:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Onda+Tarifa" target="_blank" rel="noopener noreferrer">La Onda</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Surf+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Surf Bar</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Taco+Way+Tarifa" target="_blank" rel="noopener noreferrer">Taco Way</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Venice+Cocktail+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Venice Cocktail Bar</a></li></ul>',
              'It is the perfect atmosphere for meeting friends, enjoying cocktails and easing into the night.'
            ],
            de: [
              'Startet mit entspannten Drinks vor dem Abendessen in der Altstadt:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Onda+Tarifa" target="_blank" rel="noopener noreferrer">La Onda</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Surf+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Surf Bar</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Taco+Way+Tarifa" target="_blank" rel="noopener noreferrer">Taco Way</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Venice+Cocktail+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Venice Cocktail Bar</a></li></ul>',
              'Die perfekte Atmosphäre, um Freunde zu treffen, Cocktails zu genießen und entspannt in die Nacht zu starten.'
            ],
            es: [
              'Empezad con unas copas tranquilas antes de cenar en el casco antiguo:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Onda+Tarifa" target="_blank" rel="noopener noreferrer">La Onda</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Surf+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Surf Bar</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Taco+Way+Tarifa" target="_blank" rel="noopener noreferrer">Taco Way</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Venice+Cocktail+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Venice Cocktail Bar</a></li></ul>',
              'Es el ambiente perfecto para quedar con amigos, disfrutar de unos cócteles y dejar que la noche vaya cogiendo ritmo.'
            ],
            nl: [
              'Begin met een ontspannen drankje voor het eten in de oude stad:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Onda+Tarifa" target="_blank" rel="noopener noreferrer">La Onda</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Surf+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Surf Bar</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Taco+Way+Tarifa" target="_blank" rel="noopener noreferrer">Taco Way</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Venice+Cocktail+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Venice Cocktail Bar</a></li></ul>',
              'De perfecte sfeer om vrienden te ontmoeten, van cocktails te genieten en rustig de nacht in te rollen.'
            ],
            sv: [
              'Börja med avslappnade drinkar före middagen i gamla stan:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Onda+Tarifa" target="_blank" rel="noopener noreferrer">La Onda</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Surf+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Surf Bar</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Taco+Way+Tarifa" target="_blank" rel="noopener noreferrer">Taco Way</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Venice+Cocktail+Bar+Tarifa" target="_blank" rel="noopener noreferrer">Venice Cocktail Bar</a></li></ul>',
              'Det är den perfekta stämningen för att träffa vänner, njuta av drinkar och låta kvällen komma igång i lugn takt.'
            ]
          })
        },
        {
          icon: 'star',
          title: tarifaText(
            'Later Action',
            'Wenn es später wird',
            'Más entrada la noche',
            'Later op de avond',
            'Senare på natten'
          ),
          body: tarifaParagraphs({
            en: [
              'As the energy builds, the crowd moves on to clubs and dancing:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Ruina+Tarifa" target="_blank" rel="noopener noreferrer">La Ruina</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Mombassa+Tarifa" target="_blank" rel="noopener noreferrer">Mombassa</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Caf%C3%A9+del+Mar+Tarifa" target="_blank" rel="noopener noreferrer">Café del Mar</a></li></ul>',
              'From here, it is all about music, movement and shared moments that can last until sunrise.'
            ],
            de: [
              'Wenn die Energie steigt, zieht es die Menge weiter in die Clubs und auf die Tanzflächen:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Ruina+Tarifa" target="_blank" rel="noopener noreferrer">La Ruina</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Mombassa+Tarifa" target="_blank" rel="noopener noreferrer">Mombassa</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Caf%C3%A9+del+Mar+Tarifa" target="_blank" rel="noopener noreferrer">Café del Mar</a></li></ul>',
              'Ab jetzt geht es um Musik, Bewegung und gemeinsame Momente, die bis zum Sonnenaufgang dauern können.'
            ],
            es: [
              'Cuando sube la energía, la gente se mueve hacia los clubes y las pistas de baile:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Ruina+Tarifa" target="_blank" rel="noopener noreferrer">La Ruina</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Mombassa+Tarifa" target="_blank" rel="noopener noreferrer">Mombassa</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Caf%C3%A9+del+Mar+Tarifa" target="_blank" rel="noopener noreferrer">Café del Mar</a></li></ul>',
              'A partir de aquí, todo gira en torno a la música, el baile y los momentos compartidos que pueden alargarse hasta el amanecer.'
            ],
            nl: [
              'Wanneer de energie toeneemt, trekt het publiek verder naar de clubs en de dansvloer:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Ruina+Tarifa" target="_blank" rel="noopener noreferrer">La Ruina</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Mombassa+Tarifa" target="_blank" rel="noopener noreferrer">Mombassa</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Caf%C3%A9+del+Mar+Tarifa" target="_blank" rel="noopener noreferrer">Café del Mar</a></li></ul>',
              'Vanaf dat moment draait alles om muziek, beweging en gedeelde momenten die tot zonsopgang kunnen doorgaan.'
            ],
            sv: [
              'När energin stiger drar publiken vidare till klubbarna och dansgolven:',
              '<ul><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=La+Ruina+Tarifa" target="_blank" rel="noopener noreferrer">La Ruina</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Mombassa+Tarifa" target="_blank" rel="noopener noreferrer">Mombassa</a></li><li><a class="am-link" href="https://www.google.com/maps/search/?api=1&amp;query=Caf%C3%A9+del+Mar+Tarifa" target="_blank" rel="noopener noreferrer">Café del Mar</a></li></ul>',
              'Därefter handlar allt om musik, rörelse och gemensamma stunder som kan fortsätta ända till soluppgången.'
            ]
          })
        },
        {
          icon: 'sparkle',
          title: tarifaText(
            'Atmosphere',
            'Atmosphäre',
            'Ambiente',
            'Sfeer',
            'Atmosfär'
          ),
          body: tarifaParagraphs({
            en: [
              "Tarifa's compact old town makes everything walkable. Bars and clubs are close together, so it is easy to move between venues and reconnect with people you met earlier.",
              'The crowd is diverse and welcoming: travellers, locals, surfers and international visitors all share the same streets.',
              'A night out here feels less like an event and more like a shared experience.'
            ],
            de: [
              'In Tarifas kompakter Altstadt ist alles bequem zu Fuß erreichbar. Bars und Clubs liegen nah beieinander, sodass ihr leicht weiterziehen und Bekannte vom frühen Abend wieder treffen könnt.',
              'Das Publikum ist vielfältig und herzlich: Reisende, Einheimische, Surfer und internationale Gäste teilen sich dieselben Gassen.',
              'Eine Nacht hier fühlt sich weniger wie ein einzelnes Event an, sondern vielmehr wie ein gemeinsames Erlebnis.'
            ],
            es: [
              'El compacto casco antiguo de Tarifa permite llegar a todo caminando. Los bares y clubes están muy cerca entre sí, por lo que es fácil cambiar de local y reencontrarse con gente que conocisteis antes.',
              'El ambiente es diverso y acogedor: viajeros, gente local, surfistas y visitantes internacionales comparten las mismas calles.',
              'Salir de noche aquí se siente menos como un evento y más como una experiencia compartida.'
            ],
            nl: [
              'In de compacte oude stad van Tarifa ligt alles op loopafstand. Bars en clubs zitten dicht bij elkaar, zodat jullie eenvoudig van plek wisselen en mensen van eerder op de avond weer tegenkomen.',
              'Het publiek is divers en gastvrij: reizigers, locals, surfers en internationale bezoekers delen dezelfde straten.',
              'Een avond uit voelt hier minder als een evenement en meer als een gezamenlijke ervaring.'
            ],
            sv: [
              'I Tarifas kompakta gamla stad ligger allt inom gångavstånd. Barer och klubbar ligger nära varandra, så det är enkelt att byta ställe och återse människor ni träffade tidigare under kvällen.',
              'Publiken är varierad och välkomnande: resenärer, lokalbor, surfare och internationella besökare delar samma gator.',
              'En utekväll här känns mindre som ett evenemang och mer som en gemensam upplevelse.'
            ]
          })
        }
      ]
    }
  ]
};

const tarifaFamilySurfKitesurfing: GuestGuideEntry = {
  type: 'detail',
  slug: 'tarifa-guest-kitesurfing',
  entityKey: 'amara-family-surf',
  backSlug: 'guestwelcome-tarifa-family-surf',
  supportHref: TARIFA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: tarifaText(
    "Kitesurfing Guide | AMARA Tarifa",
    "Kitesurfing Guide | AMARA Tarifa",
    "Guía de Kitesurf | AMARA Tarifa",
    "Kitesurfing Guide | AMARA Tarifa",
    "Kitesurfing-guide | AMARA Tarifa"
  ),
  seoDescription: tarifaText(
    "Practical overview of Tarifa’s wind days, best spots, rescue logic, and where to get gear or lessons.",
    "Praktischer Überblick über Tarifas Windtage, die besten Spots, Rescue-Boote und wo ihr Material oder Kurse buchen könnt.",
    "Un resumen práctico de los días de viento en Tarifa, los mejores spots, el sistema de rescate y dónde alquilar material o dar clases.",
    "Praktisch overzicht van Tarifa's winddagen, de beste spots, reddingsboten en waar je materiaal of lessen kunt regelen.",
    "Praktisk översikt över Tarifas vinddagar, de bästa platserna, räddningsbåtar och var ni kan hyra utrustning eller boka lektioner."
  ),
  kicker: tarifaText(
    "TARIFA GUEST GUIDE",
    "TARIFA GUEST GUIDE",
    "TARIFA GUEST GUIDE",
    "TARIFA GUEST GUIDE",
    "TARIFA GUEST GUIDE"
  ),
  title: tarifaText(
    "Tarifa ♥ Kitesurfing Guide",
    "Tarifa ♥ Kitesurfing Guide",
    "Tarifa ♥ Guía de Kitesurf",
    "Tarifa ♥ Kitesurfing Guide",
    "Tarifa ♥ Kitesurfing-guide"
  ),
  intro: tarifaText(
    "Poniente or Levante — this is your calm, practical overview of Tarifa’s wind days, best spots, rescue logic, wetsuit comfort, and where to arrange gear or lessons.",
    "Poniente oder Levante – hier ist euer ruhiger, praktischer Überblick über Tarifas Windtage, die besten Spots, Rescue-Regeln, Neopren-Empfehlungen und wo ihr am besten Equipment oder Kurse bucht.",
    "Poniente o Levante: este es vuestro resumen práctico y tranquilo de los días de viento en Tarifa, los mejores spots, el sistema de rescate, qué neopreno usar y dónde alquilar material o reservar clases.",
    "Poniente of Levante — dit is jullie rustige, praktische overzicht van Tarifa's winddagen, de beste spots, reddingsboten, het juiste wetsuit en waar je materiaal of lessen kunt regelen.",
    "Poniente eller Levante — det här är er lugna, praktiska översikt över Tarifas vinddagar, de bästa platserna, räddningsregler, rätt våtdräkt och var ni kan fixa utrustning eller lektioner."
  ),
  categories: [
    {
      heading: tarifaText(
        "Wind Basics & Forecast",
        "Wind Basics & Vorhersage",
        "Conceptos básicos del viento y previsión",
        "Wind Basics & Voorspelling",
        "Vindens grunder & Prognos"
      ),
      items: [
        {
          icon: "weather",
          title: tarifaText(
            "Poniente (West / Atlantic)",
            "Poniente (West / Atlantik)",
            "Poniente (Oeste / Atlántico)",
            "Poniente (West / Atlantische Oceaan)",
            "Poniente (Väst / Atlanten)"
          ),
          subtitle: tarifaText(
            "Stable · Easier to handle · Wavy water",
            "Stabil · Leichter zu fahren · Welligeres Wasser",
            "Estable · Más fácil de manejar · Agua con olas",
            "Stabiel · Makkelijker te varen · Golvend water",
            "Stabil · Lättare att hantera · Vågigt vatten"
          ),
          body: [
          tarifaText(
            "<strong>Poniente</strong> is an onshore wind coming from the west (Atlantic / Portugal). It’s typically very stable, often the easiest and most relaxed wind direction for Tarifa.",
            "<strong>Poniente</strong> ist ein auflandiger Wind aus Westen (Atlantik / Portugal). Er ist normalerweise sehr stabil und meistens die einfachste und entspannteste Windrichtung in Tarifa.",
            "El <strong>Poniente</strong> es un viento \"onshore\" (hacia la costa) que viene del oeste (Atlántico / Portugal). Suele ser muy estable y, a menudo, es la dirección de viento más fácil y relajada en Tarifa.",
            "<strong>Poniente</strong> is een aanlandige wind vanuit het westen (Atlantische Oceaan / Portugal). Hij is doorgaans heel stabiel en vaak de makkelijkste en meest ontspannen windrichting voor Tarifa.",
            "<strong>Poniente</strong> är en pålandsvind som kommer från väster (Atlanten / Portugal). Den är vanligtvis mycket stabil och ofta den enklaste och mest avslappnade vindriktningen för Tarifa."
          ),
          tarifaText(
            "<strong>Typical wind speed:</strong> around <strong>10–20 knots</strong>. In winter it can be a bit stronger, more onshore, and the sea often turns more playful with extra wave energy.",
            "<strong>Typische Windstärke:</strong> ca. <strong>10–20 Knoten</strong>. Im Winter kann er etwas kräftiger und auflandiger werden, und das Meer bringt oft noch eine Extraportion Wellenenergie mit.",
            "<strong>Velocidad típica del viento:</strong> unos <strong>10–20 nudos</strong>. En invierno puede ser un poco más fuerte, más \"onshore\", y el mar suele volverse más juguetón con más energía en las olas.",
            "<strong>Typische windsnelheid:</strong> rond de <strong>10–20 knopen</strong>. In de winter kan hij wat sterker en meer aanlandig zijn, en de zee wordt dan vaak speelser met wat extra golfenergie.",
            "<strong>Typisk vindhastighet:</strong> runt <strong>10–20 knop</strong>. På vintern kan den vara lite starkare, mer pålandsvind, och havet blir ofta mer lekfullt med extra vågenergi."
          ),
          tarifaText(
            "<strong>Sea state:</strong> generally <strong>wavy</strong> — you’ll feel more texture in the water compared to many Levante days.",
            "<strong>Wasserbedingungen:</strong> generell <strong>wellig</strong> – das Wasser hat spürbar mehr Struktur als an vielen Levante-Tagen.",
            "<strong>Estado del mar:</strong> generalmente <strong>con olas</strong>; notaréis más textura en el agua en comparación con muchos días de Levante.",
            "<strong>Staat van de zee:</strong> over het algemeen <strong>golvend</strong> — je voelt meer textuur in het water vergeleken met veel Levantedagen.",
            "<strong>Havets tillstånd:</strong> generellt <strong>vågigt</strong> — ni kommer att känna mer textur i vattnet jämfört med många Levantedagar."
          ),
          tarifaText(
            "<strong>Best spots with Poniente:</strong>",
            "<strong>Beste Spots bei Poniente:</strong>",
            "<strong>Mejores spots con Poniente:</strong>",
            "<strong>Beste spots met Poniente:</strong>",
            "<strong>Bästa platserna vid Poniente:</strong>"
          ),
          tarifaText(
            "<strong>Los Lances Sur — “Campo de Fútbol”</strong> (in front of the soccer stadium). From the apartment this is beautifully simple: walk straight down towards the beach and you’re close.",
            "<strong>Los Lances Sur — „Campo de Fútbol“</strong> (vor dem Fußballstadion). Vom Apartment aus wunderbar unkompliziert: Lauft einfach geradeaus zum Strand hinunter und ihr seid fast da.",
            "<strong>Los Lances Sur — “Campo de Fútbol”</strong> (frente al estadio de fútbol). Desde el apartamento es muy fácil: bajad en línea recta hacia la playa y estaréis muy cerca.",
            "<strong>Los Lances Sur — “Campo de Fútbol”</strong> (voor het voetbalstadion). Vanaf het appartement is dit heerlijk simpel: loop recht naar beneden richting het strand en je bent er al bijna.",
            "<strong>Los Lances Sur — “Campo de Fútbol”</strong> (framför fotbollsstadion). Från lägenheten är det underbart enkelt: gå rakt ner mot stranden så är ni nästan framme."
          ),
          tarifaText(
            "<strong>Alternative:</strong> <strong>Los Lances</strong>, closer to the beach bar <strong>Agua</strong>.",
            "<strong>Alternative:</strong> <strong>Los Lances</strong>, weiter oben in der Nähe der Strandbar <strong>Agua</strong>.",
            "<strong>Alternativa:</strong> <strong>Los Lances</strong>, más cerca del chiringuito <strong>Agua</strong>.",
            "<strong>Alternatief:</strong> <strong>Los Lances</strong>, dichter bij strandbar <strong>Agua</strong>.",
            "<strong>Alternativ:</strong> <strong>Los Lances</strong>, närmare strandbaren <strong>Agua</strong>."
          ),
          tarifaText(
            "Seasonal note: In summer (15 June – 15 September) Los Lances Sur is reserved for tourists and kiting near Tarifa town is restricted. Please respect the zones.",
            "Hinweis zur Saison: Im Sommer (15. Juni – 15. September) ist Los Lances Sur für Badegäste reserviert und Kiten in Stadtnähe ist verboten. Bitte respektiert die ausgewiesenen Zonen.",
            "Nota sobre la temporada: En verano (del 15 de junio al 15 de septiembre), Los Lances Sur está reservada para bañistas y el kitesurf cerca del pueblo está restringido. Por favor, respetad las zonas.",
            "Opmerking voor het seizoen: In de zomer (15 juni – 15 september) is Los Lances Sur gereserveerd voor zwemmers en is kiten dichtbij de stad beperkt. Respecteer alstublieft de zones.",
            "Säsongsanmärkning: På sommaren (15 juni – 15 september) är Los Lances Sur reserverad för badgäster och kitesurfing nära Tarifa stad är begränsad. Vänligen respektera zonerna."
          )
          ]
        },
        {
          icon: "arrow",
          title: tarifaText(
            "Levante (East / Strait)",
            "Levante (Ost / Meerenge)",
            "Levante (Este / Estrecho)",
            "Levante (Oost / Zeestraat)",
            "Levante (Öst / Sundet)"
          ),
          subtitle: tarifaText(
            "Stronger · Offshore · Not ideal for beginners",
            "Stärker · Ablandig · Nicht ideal für Anfänger",
            "Más fuerte · Offshore (hacia mar adentro) · No es ideal para principiantes",
            "Sterker · Aflandig · Niet ideaal voor beginners",
            "Starkare · Frånlandsvind · Inte perfekt för nybörjare"
          ),
          body: [
          tarifaText(
            "<strong>Levante</strong> is accelerated by the Strait of Gibraltar and comes offshore from the east. It can feel warm and gusty in summer, colder in winter, and it’s often significantly stronger than Poniente.",
            "Der <strong>Levante</strong> wird durch die Straße von Gibraltar beschleunigt und weht ablandig aus dem Osten. Er kann im Sommer warm und böig wirken, im Winter etwas kälter, und er ist oft deutlich stärker als der Poniente.",
            "El <strong>Levante</strong> se acelera por el Estrecho de Gibraltar y viene \"offshore\" (hacia mar adentro) desde el este. Puede ser cálido y racheado en verano, más frío en invierno, y a menudo es bastante más fuerte que el Poniente.",
            "<strong>Levante</strong> wordt versneld door de Straat van Gibraltar en komt aflandig vanuit het oosten. Hij kan warm en vlagerig aanvoelen in de zomer, kouder in de winter, en is vaak aanzienlijk sterker dan de Poniente.",
            "<strong>Levante</strong> accelereras av Gibraltarsund och kommer som frånlandsvind från öster. Den kan kännas varm och byig på sommaren, kallare på vintern, och är ofta betydligt starkare än Poniente."
          ),
          tarifaText(
            "<strong>Typical wind speed:</strong> around <strong>20–40 knots</strong>. On very strong days above <strong>35 knots</strong>, many riders switch to windsurfing for a calmer session.",
            "<strong>Typische Windstärke:</strong> ca. <strong>20–40 Knoten</strong>. An sehr starken Tagen mit über <strong>35 Knoten</strong> wechseln viele aufs Windsurfen, um entspannter aufs Wasser zu kommen.",
            "<strong>Velocidad típica del viento:</strong> unos <strong>20–40 nudos</strong>. En días muy fuertes, por encima de <strong>35 nudos</strong>, mucha gente se pasa al windsurf para tener una sesión más tranquila.",
            "<strong>Typische windsnelheid:</strong> rond de <strong>20–40 knopen</strong>. Op erg sterke dagen met meer dan <strong>35 knopen</strong> schakelen veel kiters over op windsurfen voor een rustigere sessie.",
            "<strong>Typisk vindhastighet:</strong> runt <strong>20–40 knop</strong>. På mycket starka dagar över <strong>35 knop</strong> byter många till vindsurf för en lugnare session."
          ),
          tarifaText(
            "<strong>Good spot for Levante:</strong> <strong>Los Lances Beach</strong>.",
            "<strong>Guter Spot bei Levante:</strong> <strong>Los Lances Strand</strong>.",
            "<strong>Buen spot con Levante:</strong> <strong>Playa de Los Lances</strong>.",
            "<strong>Goede spot met Levante:</strong> <strong>Los Lances Strand</strong>.",
            "<strong>Bra plats vid Levante:</strong> <strong>Los Lances Strand</strong>."
          ),
          tarifaText(
            "Strong offshore Levante is not a beginner condition. If you’re not fully confident, choose a lesson day, go with a friend, or stay on land and enjoy the atmosphere.",
            "Starker, ablandiger Levante ist keine Bedingung für Anfänger. Wenn ihr euch nicht absolut sicher fühlt, bucht lieber eine Stunde bei einer Schule, geht mit Freunden aufs Wasser oder bleibt entspannt am Strand und genießt die Stimmung.",
            "El Levante fuerte y \"offshore\" no es para principiantes. Si no estáis completamente seguros, escoged un día de clases, id con un amigo o quedaos en tierra disfrutando del ambiente.",
            "Sterke aflandige Levante is geen conditie voor beginners. Als jullie niet volledig zelfverzekerd zijn, kies dan voor een lesdag, ga samen met een vriend of blijf lekker aan wal en geniet van de sfeer.",
            "Stark frånlandsvind (Levante) är inget för nybörjare. Om ni inte känner er helt säkra, boka en lektion, ge er ut med en vän, eller stanna på land och njut av atmosfären."
          )
          ]
        },
        {
          icon: "compass",
          title: tarifaText(
            "Check Wind Online",
            "Wind online checken",
            "Comprobar el viento online",
            "Wind online checken",
            "Kolla vinden online"
          ),
          subtitle: tarifaText(
            "Windguru · WRF 3km · Always compare with beach reality",
            "Windguru · WRF 3km · Immer mit der Realität am Strand vergleichen",
            "Windguru · WRF 3km · Comparad siempre con la realidad en la playa",
            "Windguru · WRF 3km · Vergelijk altijd met de realiteit op het strand",
            "Windguru · WRF 3km · Jämför alltid med verkligheten på stranden"
          ),
          body: [
          tarifaText(
            "To check wind conditions online, most locals use <a class=\"am-link\" href=\"https://www.windguru.cz/976270\" target=\"_blank\" rel=\"noopener noreferrer\">Windguru — Tarifa (Spot 976270)</a>.",
            "Um die Windbedingungen online zu checken, nutzen die meisten Einheimischen <a class=\"am-link\" href=\"https://www.windguru.cz/976270\" target=\"_blank\" rel=\"noopener noreferrer\">Windguru — Tarifa (Spot 976270)</a>.",
            "Para comprobar el viento online, la mayoría de los locales utilizan <a class=\"am-link\" href=\"https://www.windguru.cz/976270\" target=\"_blank\" rel=\"noopener noreferrer\">Windguru — Tarifa (Spot 976270)</a>.",
            "Om de windcondities online te checken, gebruiken de meeste locals <a class=\"am-link\" href=\"https://www.windguru.cz/976270\" target=\"_blank\" rel=\"noopener noreferrer\">Windguru — Tarifa (Spot 976270)</a>.",
            "För att kolla vindförhållandena online använder de flesta lokala <a class=\"am-link\" href=\"https://www.windguru.cz/976270\" target=\"_blank\" rel=\"noopener noreferrer\">Windguru — Tarifa (Spot 976270)</a>."
          ),
          tarifaText(
            "The preferred forecast model is <strong>WRF 3km</strong>, as it usually reflects local wind behavior in Tarifa more accurately than global models.",
            "Das bevorzugte Vorhersagemodell ist <strong>WRF 3km</strong>, da es das lokale Windverhalten in Tarifa meist viel genauer abbildet als die globalen Modelle.",
            "El modelo de previsión preferido es el <strong>WRF 3km</strong>, ya que suele reflejar el comportamiento local del viento en Tarifa de forma más precisa que los modelos globales.",
            "Het voorkeursmodel voor voorspellingen is <strong>WRF 3km</strong>, omdat dit het lokale windgedrag in Tarifa doorgaans nauwkeuriger weergeeft dan de globale modellen.",
            "Den föredragna prognosmodellen är <strong>WRF 3km</strong>, eftersom den vanligtvis speglar det lokala vindbeteendet i Tarifa mer exakt än globala modeller."
          ),
          tarifaText(
            "Still, always check the wind directly at the beach before going on the water. Conditions can change quickly — especially on strong Levante days.",
            "Dennoch solltet ihr den Wind immer auch direkt am Strand beurteilen, bevor ihr aufs Wasser geht. Die Bedingungen können sich schnell ändern – besonders an starken Levante-Tagen.",
            "Aún así, comprobad siempre el viento directamente en la playa antes de meteros en el agua. Las condiciones pueden cambiar rápidamente, especialmente en los días de Levante fuerte.",
            "Toch is het belangrijk om altijd de wind direct op het strand te bekijken voordat jullie het water op gaan. De omstandigheden kunnen snel veranderen — vooral op sterke Levantedagen.",
            "Men kolla alltid vinden direkt på stranden innan ni går ut i vattnet. Förhållandena kan ändras snabbt — särskilt under dagar med stark Levante."
          ),
          tarifaText(
            "The best safety rule remains simple: speak with other kiters at the spot before launching.",
            "Die beste Sicherheitsregel bleibt einfach: Sprecht am Spot mit anderen Kitern, bevor ihr euren Schirm startet.",
            "La mejor regla de seguridad sigue siendo la más sencilla: hablad con otros kiters en el spot antes de levantar la cometa.",
            "De beste veiligheidsregel blijft simpel: spreek met andere kiters op de spot voordat je je kite oplaat.",
            "Den bästa säkerhetsregeln är enkel: prata med andra kitare på plats innan ni launchar."
          )
          ]
        }
      ]
    },
    {
      heading: tarifaText(
        "Safety & Rescue",
        "Sicherheit & Rettung",
        "Seguridad y Rescate",
        "Veiligheid & Redding",
        "Säkerhet & Räddning"
      ),
      items: [
        {
          icon: "warning",
          title: tarifaText(
            "Strong Levante — simple rules",
            "Starker Levante — einfache Regeln",
            "Levante fuerte — reglas sencillas",
            "Sterke Levante — simpele regels",
            "Stark Levante — enkla regler"
          ),
          subtitle: tarifaText(
            "Do not go alone · Check rescue · Be honest about your level",
            "Geht nicht alleine · Checkt die Rescue-Boote · Seid ehrlich zu eurem Level",
            "No vayáis solos · Comprobad los rescates · Sed honestos con vuestro nivel",
            "Ga niet alleen · Check reddingsboten · Wees eerlijk over je niveau",
            "Ge er inte ut ensamma · Kolla räddningsbåtarna · Var ärlig med din nivå"
          ),
          body: [
          tarifaText(
            "With strong offshore Levante, the key is not courage — it’s structure.",
            "Bei starkem, ablandigem Levante ist nicht Mut gefragt, sondern eine gute Vorbereitung.",
            "Con un Levante fuerte hacia mar adentro, la clave no es ser valiente, sino tenerlo todo bien estructurado.",
            "Bij een sterke aflandige Levante draait het niet om lef — het draait om structuur.",
            "Vid stark frånlandsvind (Levante) är det inte mod som är nyckeln — det är struktur."
          ),
          tarifaText(
            "<strong>Please keep it simple:</strong> do not go alone, check whether rescue boats are active, and only launch if you feel 100% stable with your kite control, self-rescue, and local conditions.",
            "<strong>Haltet es bitte einfach:</strong> Geht nicht alleine raus, prüft, ob die Rettungsboote aktiv sind, und startet euren Kite nur, wenn ihr euch bei der Kitesteuerung, bei Self-Rescue-Manövern und mit den lokalen Bedingungen zu 100% sicher seid.",
            "<strong>Por favor, hacedlo fácil:</strong> no vayáis solos, comprobad si los barcos de rescate están activos y levantad la cometa solo si os sentís 100% seguros con el control de la cometa, el autorrescate y las condiciones locales.",
            "<strong>Houd het alsjeblieft simpel:</strong> ga niet alleen, controleer of er reddingsboten actief zijn en ga alleen het water op als je je 100% comfortabel voelt met je kitecontrole, self-rescue en de lokale omstandigheden.",
            "<strong>Håll det enkelt, tack:</strong> ge er inte ut ensamma, kolla om räddningsbåtarna är aktiva, och launcha endast om ni känner er 100% trygga med er kitekontroll, självräddning och de lokala förhållandena."
          ),
          tarifaText(
            "If you’re unsure, a session with a local school is the easiest way to enjoy Levante days safely and confidently.",
            "Wenn ihr euch unsicher seid, ist eine Session mit einer örtlichen Kiteschule der einfachste Weg, Levante-Tage sicher und entspannt zu genießen.",
            "Si dudáis, una sesión con una escuela local es la forma más sencilla de disfrutar de los días de Levante con seguridad y confianza.",
            "Als je twijfelt, is een sessie met een lokale kiteschool de makkelijkste manier om veilig en met vertrouwen van Levantedagen te genieten.",
            "Om ni är osäkra är ett pass med en lokal skola det enklaste sättet att njuta av Levantedagar tryggt och självsäkert."
          )
          ]
        },
        {
          icon: "medical",
          title: tarifaText(
            "Rescue boats",
            "Rescue-Boote",
            "Barcos de rescate",
            "Reddingsboten",
            "Räddningsbåtar"
          ),
          subtitle: tarifaText(
            "Private and state rescue · Helpful on Levante days · Gear recovery varies",
            "Private & staatliche Rettung · Hilfreich an Levante-Tagen · Materialrettung variiert",
            "Rescate privado y estatal · Muy útil en días de Levante · La recuperación de material varía",
            "Privé en staat reddingsboten · Handig op Levantedagen · Materiaal redden varieert",
            "Privat och statlig räddning · Bra på Levantedagar · Materialräddning varierar"
          ),
          body: [
          tarifaText(
            "Tarifa has several <strong>private rescue boats</strong> that typically operate on Levante days. They can rescue you and often also recover your gear when you’re in trouble.",
            "In Tarifa gibt es einige <strong>private Rescue-Boote</strong>, die normalerweise an Levante-Tagen im Einsatz sind. Sie können euch retten und oft auch euer Material bergen, wenn ihr in Schwierigkeiten geratet.",
            "Tarifa cuenta con varios <strong>barcos de rescate privados</strong> que suelen operar en los días de Levante. Pueden rescataros y, a menudo, también recuperar vuestro material si estáis en apuros.",
            "Tarifa heeft verschillende <strong>privé reddingsboten</strong> die typisch op Levantedagen uitvaren. Ze kunnen jullie redden en halen vaak ook jullie materiaal terug als jullie in de problemen zitten.",
            "Tarifa har flera <strong>privata räddningsbåtar</strong> som vanligtvis körs under Levantedagar. De kan rädda er och ofta även bärga er utrustning om ni hamnar i trubbel."
          ),
          tarifaText(
            "If you need help, riders often <strong>eject the chicken loop</strong> and signal clearly. On active rescue days, they monitor the beaches closely.",
            "Wenn ihr Hilfe braucht, lösen die Kiter oft den <strong>Chicken Loop</strong> aus und geben deutliche Signale. An aktiven Rettungstagen behalten die Crews den Strand genau im Auge.",
            "Si necesitáis ayuda, los kiters a menudo <strong>sueltan el chicken loop</strong> y hacen señales claras. En los días que hay rescate activo, vigilan las playas muy de cerca.",
            "Als jullie hulp nodig hebben, <strong>releasen kiters vaak de chicken loop</strong> en geven ze duidelijke signalen. Op actieve reddingsdagen houden ze de stranden goed in de gaten.",
            "Om ni behöver hjälp brukar kitare <strong>lösa ut chicken-loopen</strong> och signalera tydligt. Under aktiva räddningsdagar har de noga uppsikt över stränderna."
          ),
          tarifaText(
            "There are also <strong>state rescue boats</strong>. They will rescue people if needed, but gear recovery is not always guaranteed.",
            "Es gibt außerdem <strong>staatliche Rettungsboote</strong>. Diese retten Personen im Notfall, aber die Materialrettung ist dabei nicht immer garantiert.",
            "También hay <strong>barcos de rescate estatales</strong>. Rescatarán a las personas si es necesario, pero la recuperación del material no siempre está garantizada.",
            "Er zijn ook <strong>reddingsboten van de overheid</strong>. Zij redden mensen indien nodig, maar het veiligstellen van het materiaal is niet altijd gegarandeerd.",
            "Det finns också <strong>statliga räddningsbåtar</strong>. De räddar personer om det behövs, men det är inte alltid garanterat att utrustningen bärgas."
          ),
          tarifaText(
            "Many riders purchase rescue vouchers in local kite shops or schools. It’s a small practical detail that can make strong days feel much calmer.",
            "Viele Kiter kaufen sich vorab Rescue-Tickets in den lokalen Kite-Shops oder Schulen. Ein kleines, praktisches Detail, das starke Tage gleich viel entspannter macht.",
            "Muchos riders compran bonos de rescate en las tiendas locales de kitesurf o en las escuelas. Es un pequeño detalle práctico que puede hacer que los días fuertes se sientan mucho más tranquilos.",
            "Veel kiters kopen reddingsvouchers in lokale kiteshops of scholen. Het is een klein, praktisch detail dat een heftige dag veel relaxter kan maken.",
            "Många kitare köper räddningsbiljetter i lokala kitebutiker eller skolor. Det är en liten praktisk detalj som kan få blåsiga dagar att kännas mycket lugnare."
          )
          ]
        }
      ]
    },
    {
      heading: tarifaText(
        "Gear & Comfort",
        "Equipment & Komfort",
        "Material y Comodidad",
        "Uitrusting & Comfort",
        "Utrustning & Komfort"
      ),
      items: [
        {
          icon: "wave",
          title: tarifaText(
            "Wetsuit guide",
            "Neopren-Empfehlung",
            "Guía de neoprenos",
            "Wetsuit-gids",
            "Guide för våtdräkt"
          ),
          subtitle: tarifaText(
            "Summer feels light · Winter needs more warmth · Ask locally if unsure",
            "Sommer ist angenehm · Winter braucht mehr Wärme · Fragt im Zweifel vor Ort nach",
            "El verano es más suave · El invierno necesita más abrigo · Preguntad en las tiendas si dudáis",
            "Zomer voelt licht · Winter vereist meer warmte · Vraag lokaal als je twijfelt",
            "Sommaren känns lätt · Vintern kräver mer värme · Fråga lokalt om ni är osäkra"
          ),
          body: [
          tarifaText(
            "The Atlantic here often feels warmer than you expect, especially in summer. Most of the year, comfort is easy — if you match your suit to the wind chill.",
            "Der Atlantik fühlt sich hier oft wärmer an, als man erwartet, besonders im Sommer. Die meiste Zeit des Jahres ist es unkompliziert – solange ihr euren Anzug auf den Windchill abstimmt.",
            "El Atlántico aquí a menudo se nota más cálido de lo que esperas, especialmente en verano. La mayor parte del año, ir cómodo es fácil: solo tenéis que adaptar el traje a la sensación térmica que deja el viento.",
            "De Atlantische Oceaan voelt hier vaak warmer aan dan je verwacht, vooral in de zomer. Het grootste deel van het jaar is het comfortabel varen — mits je het juiste wetsuit voor de gevoelstemperatuur (wind chill) aantrekt.",
            "Atlanten här känns ofta varmare än man förväntar sig, särskilt på sommaren. Under största delen av året är det enkelt att vara bekväm — om ni bara anpassar våtdräkten efter hur mycket vinden kyler."
          ),
          tarifaText(
            "<strong>Summer:</strong> lycra, shorty, or a <strong>3/2</strong> wetsuit is usually perfect.",
            "<strong>Sommer:</strong> Lycra, Shorty oder ein <strong>3/2</strong> Neoprenanzug sind meistens perfekt.",
            "<strong>Verano:</strong> una lycra, un shorty o un neopreno <strong>3/2</strong> suelen ser perfectos.",
            "<strong>Zomer:</strong> een lycra, een shorty, of een <strong>3/2</strong> wetsuit is meestal perfect.",
            "<strong>Sommar:</strong> lycra, shorty eller en <strong>3/2</strong> våtdräkt är vanligtvis perfekt."
          ),
          tarifaText(
            "<strong>Winter:</strong> we recommend a <strong>4/3</strong> or <strong>5/4</strong> full suit, depending on your cold tolerance and the day’s wind strength.",
            "<strong>Winter:</strong> Wir empfehlen einen <strong>4/3</strong> oder <strong>5/4</strong> Langarm-Anzug, abhängig von eurem Kälteempfinden und der Windstärke am jeweiligen Tag.",
            "<strong>Invierno:</strong> recomendamos un traje largo <strong>4/3</strong> o <strong>5/4</strong>, dependiendo de lo frioleros que seáis y de la fuerza del viento de ese día.",
            "<strong>Winter:</strong> we raden een <strong>4/3</strong> of <strong>5/4</strong> lang wetsuit aan, afhankelijk van hoe snel jullie het koud hebben en de windkracht op die dag.",
            "<strong>Vinter:</strong> vi rekommenderar en hel våtdräkt i <strong>4/3</strong> eller <strong>5/4</strong>, beroende på hur frusna ni är och dagens vindstyrka."
          ),
          tarifaText(
            "If you’re unsure, ask a local shop on the day — they’ll know the current water temperature and what most riders wear that week.",
            "Wenn ihr euch unsicher seid, fragt einfach tagesaktuell in einem lokalen Shop nach – die Jungs und Mädels dort kennen die Wassertemperatur und wissen genau, was die meisten Kiter in der Woche tragen.",
            "Si dudáis, preguntad ese mismo día en una tienda local: ellos sabrán la temperatura actual del agua y lo que llevan la mayoría de los riders esa semana.",
            "Als jullie twijfelen, vraag het dan op de dag zelf aan een lokale shop — zij weten de huidige watertemperatuur en wat de meeste kiters die week dragen.",
            "Om ni är osäkra, fråga i en lokal butik samma dag — de har koll på den aktuella vattentemperaturen och vad de flesta kitare använder just den veckan."
          )
          ]
        }
      ]
    },
    {
      heading: tarifaText(
        "Rental, Lessons & Rescue Cards",
        "Verleih, Kurse & Rescue-Karten",
        "Alquiler, Clases y Tarjetas de Rescate",
        "Verhuur, Lessen & Rescue-kaarten",
        "Uthyrning, Lektioner & Räddningskort"
      ),
      items: [
        {
          icon: "store",
          title: tarifaText(
            "Tarifa Surf Club",
            "Tarifa Surf Club",
            "Tarifa Surf Club",
            "Tarifa Surf Club",
            "Tarifa Surf Club"
          ),
          subtitle: tarifaText(
            "Equipment rental · Lessons · Rescue cards",
            "Materialverleih · Kitesurf-Kurse · Rescue-Karten",
            "Alquiler de material · Clases · Tarjetas de rescate",
            "Materiaalverhuur · Lessen · Rescue-kaarten",
            "Utrustningshyra · Lektioner · Räddningskort"
          ),
          body: [
          tarifaText(
            "<strong>AMARA Lodging and Tarifa Surf Club have a close connection</strong>, which is why this is often the option we recommend to our guests.",
            "<strong>AMARA Lodging und der Tarifa Surf Club sind eng miteinander verbunden</strong>, deshalb ist dies auch die Adresse, die wir unseren Gästen meistens empfehlen.",
            "<strong>AMARA Lodging y Tarifa Surf Club tienen un vínculo muy estrecho</strong>, por eso suele ser la opción que recomendamos a nuestros huéspedes.",
            "<strong>AMARA Lodging en Tarifa Surf Club hebben een nauwe connectie</strong>, en daarom is dit vaak de optie die we aan onze gasten aanbevelen.",
            "<strong>AMARA Lodging och Tarifa Surf Club har ett tätt samarbete</strong>, och därför är det här ofta det alternativ som vi rekommenderar till våra gäster."
          ),
          tarifaText(
            "If you would like to rent kitesurf equipment, book kitesurf lessons, or purchase a rescue card for the private rescue boats, this is the easiest place to start.",
            "Wenn ihr Kitesurf-Equipment leihen, Kurse buchen oder eine Rescue-Karte für die privaten Rettungsboote kaufen möchtet, ist dies die einfachste Anlaufstelle.",
            "Si queréis alquilar material de kitesurf, reservar clases o comprar una tarjeta de rescate para los barcos privados, este es el sitio más fácil para empezar.",
            "Als jullie kitesurf-materiaal willen huren, lessen willen boeken of een rescue-kaart willen aanschaffen voor de privé reddingsboten, is dit de makkelijkste plek om te starten.",
            "Om ni vill hyra kitesurf-utrustning, boka lektioner eller köpa ett räddningskort till de privata räddningsbåtarna, är detta den enklaste platsen att börja på."
          ),
          tarifaText(
            "Rental options include equipment from <strong>Airush</strong> and <strong>North</strong>, and the team can also help you find the right setup for your level and the day’s wind.",
            "Zum Verleih stehen Marken wie <strong>Airush</strong> und <strong>North</strong> bereit, und das Team hilft euch gerne dabei, das perfekte Setup für euer Level und den aktuellen Wind zu finden.",
            "Las opciones de alquiler incluyen marcas como <strong>Airush</strong> y <strong>North</strong>, y el equipo también puede ayudaros a encontrar el montaje ideal para vuestro nivel y el viento del día.",
            "Het verhuuraanbod bestaat uit materiaal van <strong>Airush</strong> en <strong>North</strong>, en het team helpt jullie bovendien graag om de juiste setup te vinden voor jullie niveau en de wind van die dag.",
            "Bland uthyrningsalternativen finns utrustning från <strong>Airush</strong> och <strong>North</strong>, och teamet hjälper er gärna att hitta rätt setup för er nivå och dagens vind."
          ),
          tarifaText(
            "For anything related to rental, lessons, or rescue cards, please send a WhatsApp message here: <a class=\"am-link\" href=\"https://wa.me/34619548276\" target=\"_blank\" rel=\"noopener noreferrer\">+34 619 548 276</a>",
            "Für alles rund um Verleih, Kurse oder Rescue-Karten schreibt bitte einfach eine WhatsApp-Nachricht an: <a class=\"am-link\" href=\"https://wa.me/34619548276\" target=\"_blank\" rel=\"noopener noreferrer\">+34 619 548 276</a>",
            "Para cualquier consulta sobre alquileres, clases o tarjetas de rescate, podéis enviar un mensaje de WhatsApp aquí: <a class=\"am-link\" href=\"https://wa.me/34619548276\" target=\"_blank\" rel=\"noopener noreferrer\">+34 619 548 276</a>",
            "Voor alles omtrent verhuur, lessen of rescue-kaarten kunnen jullie hier een WhatsApp-berichtje naartoe sturen: <a class=\"am-link\" href=\"https://wa.me/34619548276\" target=\"_blank\" rel=\"noopener noreferrer\">+34 619 548 276</a>",
            "För frågor angående uthyrning, lektioner eller räddningskort, vänligen skicka ett WhatsApp-meddelande hit: <a class=\"am-link\" href=\"https://wa.me/34619548276\" target=\"_blank\" rel=\"noopener noreferrer\">+34 619 548 276</a>"
          ),
          tarifaText(
            "A short message with your level, the dates, and whether you need rental, lessons, or rescue is usually the simplest way to get started.",
            "Eine kurze Nachricht mit eurem Level, dem Datum und was ihr genau braucht (Verleih, Kurs oder Rescue) ist meist der schnellste und einfachste Weg.",
            "Un breve mensaje con vuestro nivel, las fechas y lo que necesitáis (alquiler, clases o rescate) suele ser la forma más sencilla de empezar.",
            "Een kort berichtje met jullie niveau, de data en of je verhuur, lessen of een reddingskaart nodig hebt, is doorgaans de simpelste manier om te beginnen.",
            "Ett kort meddelande med er nivå, vilka datum det gäller och om ni behöver hyra utrustning, ta lektioner eller köpa räddningskort är ofta det smidigaste sättet."
          )
          ]
        }
      ]
    },
    {
      heading: tarifaText(
        "Kitesurfing Spots",
        "Kitesurf-Spots",
        "Spots de Kitesurf",
        "Kitesurf-spots",
        "Kitesurf-spots"
      ),
      items: [
        {
          icon: "location-pin",
          title: tarifaText(
            "Los Lances Sur",
            "Los Lances Sur",
            "Los Lances Sur",
            "Los Lances Sur",
            "Los Lances Sur"
          ),
          subtitle: tarifaText(
            "Closest to town · Easy access · Great outside summer restriction period",
            "Am nächsten zur Stadt · Leichter Zugang · Super außerhalb der Sommersaison",
            "Más cercano al pueblo · Fácil acceso · Genial fuera de las restricciones de verano",
            "Dichtst bij de stad · Makkelijk toegankelijk · Fijn buiten de zomerrestricties",
            "Närmast stan · Lättillgängligt · Fantastiskt utanför sommarrestriktionerna"
          ),
          body: [
          tarifaText(
            "<strong>Los Lances Sur</strong> is the easiest mental starting point for many guests because it feels close, open, and uncomplicated.",
            "<strong>Los Lances Sur</strong> ist für viele Gäste gedanklich der einfachste Startpunkt, weil er so nah, offen und herrlich unkompliziert wirkt.",
            "<strong>Los Lances Sur</strong> es el punto de partida mental más fácil para muchos huéspedes porque parece cercano, abierto y muy sencillo.",
            "<strong>Los Lances Sur</strong> is voor veel gasten mentaal het makkelijkste startpunt, omdat het zo dichtbij, weids en ongecompliceerd aanvoelt.",
            "<strong>Los Lances Sur</strong> är den enklaste startpunkten mentalt för många gäster eftersom den känns nära, öppen och okomplicerad."
          ),
          tarifaText(
            "From <strong>September to June</strong>, this is the beautifully simple option near town. Depending on where you stay, you can often reach it quickly and enjoy a very direct beach routine.",
            "Von <strong>September bis Juni</strong> ist dies die wunderbar einfache Option in der Nähe der Stadt. Je nachdem, wo ihr wohnt, erreicht ihr den Spot meist schnell und könnt eine sehr entspannte Strandroutine genießen.",
            "De <strong>septiembre a junio</strong>, esta es la opción más cómoda cerca del pueblo. Dependiendo de dónde os alojéis, a menudo podéis llegar rápido y disfrutar de una rutina de playa muy directa.",
            "Van <strong>september tot juni</strong> is dit een prachtig simpele optie vlakbij het centrum. Afhankelijk van waar jullie verblijven, ben je er vaak heel snel en kun je genieten van een hele directe strandroutine.",
            "Från <strong>september till juni</strong> är detta det underbart enkla alternativet nära staden. Beroende på var ni bor kan ni ofta nå dit snabbt och njuta av en väldigt smidig strandrutin."
          ),
          tarifaText(
            "It works especially well when you want a session that feels spontaneous rather than like a full excursion across the coast.",
            "Der Spot eignet sich besonders dann gut, wenn sich eure Session eher spontan anfühlen soll und nicht gleich wie ein großer Ausflug an der Küste entlang.",
            "Funciona especialmente bien cuando os apetece una sesión más espontánea, en lugar de montar una gran excursión a lo largo de la costa.",
            "Dit werkt vooral goed als jullie op zoek zijn naar een spontane sessie, in plaats van een hele excursie langs de kust.",
            "Det passar särskilt bra när ni vill att passet ska kännas spontant snarare än som en hel dagsutflykt längs kusten."
          ),
          tarifaText(
            "Important seasonal note: kitesurfing near Tarifa town is restricted in summer, roughly from <strong>15 June to 15 September</strong>. During that period, please choose one of the designated zones further out.",
            "Wichtiger Hinweis zur Saison: Das Kitesurfen in der Nähe der Stadt ist im Sommer, etwa vom <strong>15. Juni bis zum 15. September</strong>, verboten. In dieser Zeit weicht bitte auf die ausgewiesenen Zonen weiter außerhalb aus.",
            "Nota importante sobre la temporada: el kitesurf cerca del pueblo está restringido en verano, aproximadamente desde el <strong>15 de junio hasta el 15 de septiembre</strong>. Durante ese tiempo, por favor, elegid una de las zonas autorizadas más alejadas.",
            "Belangrijke opmerking over het seizoen: kitesurfen dichtbij de stad is in de zomer beperkt toegestaan, ruwweg van <strong>15 juni tot 15 september</strong>. Kies gedurende die periode alstublieft een van de aangewezen zones wat verderop.",
            "Viktig säsongsinformation: Kitesurfing nära Tarifa stad är begränsad under sommaren, ungefär från den <strong>15 juni till 15 september</strong>. Under denna period ber vi er välja en av de avsedda zonerna lite längre bort."
          )
          ]
        },
        {
          icon: "wave",
          title: tarifaText(
            "Los Lances Norte",
            "Los Lances Norte",
            "Los Lances Norte",
            "Los Lances Norte",
            "Los Lances Norte"
          ),
          subtitle: tarifaText(
            "Wide beach · Good all-rounder · Better structure for many riders",
            "Breiter Strand · Guter Allrounder · Viel Struktur für viele Kiter",
            "Playa amplia · Muy versátil · Mejor estructura para muchos riders",
            "Breed strand · Goede allrounder · Betere structuur voor veel kiters",
            "Bred strand · Bra allround-spot · Bättre struktur för många kitare"
          ),
          body: [
          tarifaText(
            "<strong>Los Lances Norte</strong> is one of the most useful all-round spots in Tarifa and often the easiest recommendation when someone wants a broad, established kitesurfing setup.",
            "<strong>Los Lances Norte</strong> ist einer der vielseitigsten Allround-Spots in Tarifa und oft die beste Empfehlung, wenn jemand ein gut etabliertes Kitesurf-Gebiet mit viel Platz sucht.",
            "<strong>Los Lances Norte</strong> es uno de los spots más versátiles de Tarifa y suele ser nuestra recomendación más habitual para quienes buscan un entorno de kitesurf amplio y consolidado.",
            "<strong>Los Lances Norte</strong> is een van de meest veelzijdige allround-spots in Tarifa en vaak de makkelijkste aanbeveling als iemand een brede, goed opgezette kitesurf-locatie zoekt.",
            "<strong>Los Lances Norte</strong> är en av de mest användbara allround-platserna i Tarifa och ofta den enklaste rekommendationen när man söker ett brett och etablerat kitesurf-område."
          ),
          tarifaText(
            "The beach is wide, the launch area feels more generous, and during the warmer months you’ll usually find the clearly designated riding zones that make the whole place easier to understand.",
            "Der Strand ist breit, die Aufbau-Zone wirkt großzügig, und in den wärmeren Monaten gibt es klar abgegrenzte Zonen, die den Spot sehr übersichtlich machen.",
            "La playa es ancha, la zona de despegue es más generosa, y durante los meses de más calor suelen instalarse zonas claramente delimitadas que hacen que todo el lugar sea más fácil de entender.",
            "Het strand is breed, de opbouwzone voelt ruimer aan, en tijdens de warmere maanden vind je hier duidelijk gemarkeerde zones, wat de hele plek makkelijker te begrijpen maakt.",
            "Stranden är bred, launch-ytan känns generös, och under de varmare månaderna hittar ni vanligtvis tydligt utmärkta zoner som gör hela platsen mycket lättare att överblicka."
          ),
          tarifaText(
            "Many guests appreciate it because it combines a classic Tarifa feeling with a bit more structure and predictability than some of the more exposed or expert-oriented spots.",
            "Viele Gäste schätzen ihn, weil er das klassische Tarifa-Gefühl mit etwas mehr Struktur und Vorhersehbarkeit verbindet als einige der exponierteren Spots für Profis.",
            "Muchos huéspedes lo aprecian porque combina la esencia clásica de Tarifa con un poco más de estructura y previsibilidad que otros spots más expuestos u orientados a expertos.",
            "Veel gasten waarderen dit strand omdat het een klassiek Tarifa-gevoel combineert met iets meer structuur en voorspelbaarheid dan de meer onbeschutte spots voor experts.",
            "Många gäster uppskattar platsen för att den kombinerar den klassiska Tarifa-känslan med lite mer struktur och förutsägbarhet än vissa av de mer utsatta eller expert-inriktade platserna."
          ),
          tarifaText(
            "If you are still gaining confidence, especially on Levante days, this is often a more reassuring choice than the more radical spots.",
            "Wenn ihr noch an eurer Sicherheit arbeitet, besonders an Levante-Tagen, ist dies oft eine viel beruhigendere Wahl als die extremeren Spots.",
            "Si todavía estáis ganando confianza, especialmente en los días de Levante, suele ser una opción más tranquilizadora que los spots más radicales.",
            "Als jullie nog wat zekerheid moeten opbouwen, vooral op Levantedagen, is dit vaak een veel geruststellendere keuze dan de meer radicale spots.",
            "Om ni fortfarande bygger upp ert självförtroende, särskilt på Levantedagar, är detta ofta ett tryggare val än de mer utmanande platserna."
          )
          ]
        },
        {
          icon: "star",
          title: tarifaText(
            "Playa de Valdevaqueros",
            "Playa de Valdevaqueros",
            "Playa de Valdevaqueros",
            "Playa de Valdevaqueros",
            "Playa de Valdevaqueros"
          ),
          subtitle: tarifaText(
            "Iconic Tarifa spot · Strong wind energy · Better with experience",
            "Ikonischer Tarifa-Spot · Starke Windenergie · Besser mit Erfahrung",
            "Spot icónico de Tarifa · Viento potente · Mejor con experiencia",
            "Iconische Tarifa-spot · Krachtige wind · Beter met ervaring",
            "Ikonisk Tarifa-spot · Kraftig vindenergi · Bättre för de erfarna"
          ),
          body: [
          tarifaText(
            "<strong>Valdevaqueros</strong> is one of Tarifa’s most iconic names and often the place guests already know before they arrive.",
            "<strong>Valdevaqueros</strong> ist einer der ikonischsten Orte in Tarifa und oft der Spot, den viele Gäste schon vor ihrer Ankunft kennen.",
            "<strong>Valdevaqueros</strong> es uno de los nombres más icónicos de Tarifa y, a menudo, el lugar que los huéspedes ya conocen antes de llegar.",
            "<strong>Valdevaqueros</strong> is een van de meest iconische namen van Tarifa en vaak de plek die gasten al kennen voordat ze hier arriveren.",
            "<strong>Valdevaqueros</strong> är ett av Tarifas mest ikoniska namn och ofta den plats gästerna känner till redan innan de anländer."
          ),
          tarifaText(
            "It has a big, dramatic feel and can be fantastic on powerful wind days, especially if you already have a bit of experience and enjoy a more energetic session.",
            "Er versprüht ein gewaltiges, dramatisches Gefühl und kann an kräftigen Windtagen fantastisch sein – besonders, wenn ihr schon etwas Erfahrung habt und dynamischere Sessions mögt.",
            "Tiene un aire inmenso y espectacular, y puede ser fantástico en días de viento fuerte, sobre todo si ya tenéis algo de experiencia y os gustan las sesiones con mucha energía.",
            "Het heeft een grootse, spectaculaire uitstraling en kan fantastisch zijn op dagen met harde wind, vooral als jullie al wat ervaring hebben en houden van een energieke sessie.",
            "Platsen har en storslagen och mäktig känsla och kan vara fantastisk på blåsiga dagar, särskilt om ni redan har lite erfarenhet och uppskattar en lite tuffare session."
          ),
          tarifaText(
            "The beach shape gives it a particular character that many riders love, and on the right day it feels unmistakably world-class.",
            "Die Bucht verleiht dem Spot einen ganz besonderen Charakter, den viele Kiter lieben, und an guten Tagen fühlt er sich unbestreitbar nach Weltklasse an.",
            "La forma de la playa le da un carácter particular que enamora a muchos riders, y en el día adecuado, transmite una sensación inconfundible de ser un lugar de primer nivel.",
            "De vorm van het strand geeft het een heel eigen karakter waar veel kiters dol op zijn, en op de juiste dag voelt het overduidelijk aan als een spot van wereldklasse.",
            "Strandens form ger den en särskild karaktär som många kitare älskar, och på rätt dag känns det tveklöst som en plats i världsklass."
          ),
          tarifaText(
            "It is usually not the first place we would point a nervous beginner to on a strong Levante day. If you are still finding your rhythm, start with a calmer setup first.",
            "An einem starken Levante-Tag ist es allerdings nicht der erste Ort, den wir einem noch unsicheren Anfänger empfehlen würden. Wenn ihr noch euren Rhythmus sucht, startet lieber an einem ruhigeren Spot.",
            "Por lo general, no es el primer sitio al que enviaríamos a un principiante nervioso en un día de Levante fuerte. Si todavía estáis encontrando vuestro ritmo, empezad mejor por un spot más tranquilo.",
            "Het is meestal niet de eerste plek waar we een onzekere beginner op een sterke Levantedag naartoe zouden sturen. Als jullie nog op zoek zijn naar jullie ritme, begin dan liever op een rustigere locatie.",
            "Det är vanligtvis inte den första platsen vi skulle rekommendera en nervös nybörjare en blåsig Levantedag. Om ni fortfarande håller på att hitta rytmen, börja med en lugnare plats först."
          )
          ]
        },
        {
          icon: "heart",
          title: tarifaText(
            "Punta Paloma",
            "Punta Paloma",
            "Punta Paloma",
            "Punta Paloma",
            "Punta Paloma"
          ),
          subtitle: tarifaText(
            "Softer atmosphere · Fewer crowds · Friendly option for many riders",
            "Entspanntere Atmosphäre · Weniger überlaufen · Sehr angenehm für viele Kiter",
            "Ambiente más suave · Menos gente · Una opción amable para muchos riders",
            "Zachtere sfeer · Minder druk · Vriendelijke optie voor veel kiters",
            "Lugnare atmosfär · Färre människor · Ett snällt alternativ för många kitare"
          ),
          body: [
          tarifaText(
            "<strong>Punta Paloma</strong> often feels a little calmer and less intense than the big-name spots, which is exactly why many guests end up loving it.",
            "<strong>Punta Paloma</strong> fühlt sich oft ein wenig ruhiger und weniger extrem an als die ganz großen Spots – und genau das ist der Grund, warum viele Gäste ihn am Ende so lieben.",
            "<strong>Punta Paloma</strong> suele parecer un poco más tranquilo y menos intenso que los spots más famosos, y esa es precisamente la razón por la que a muchos huéspedes les acaba encantando.",
            "<strong>Punta Paloma</strong> voelt vaak wat rustiger en minder heftig aan dan de grote bekende spots, en dat is precies waarom veel gasten er uiteindelijk zo dol op zijn.",
            "<strong>Punta Paloma</strong> känns ofta lite lugnare och mindre intensiv än de mest kända platserna, vilket är precis varför många gäster i slutändan älskar det."
          ),
          tarifaText(
            "It sits next to the wider Valdevaqueros area but can offer a more relaxed emotional feel, especially when you want space, fewer distractions, and a day that feels less performance-driven.",
            "Er schließt direkt an den Valdevaqueros-Bereich an, bietet aber oft ein entspannteres Feeling. Vor allem dann, wenn ihr einfach Platz braucht, weniger Trubel sucht und der Tag nicht nur aus Hochleistung bestehen soll.",
            "Está situado junto a la amplia zona de Valdevaqueros, pero ofrece una sensación mucho más relajada; ideal si queréis espacio, menos distracciones y un día menos centrado en el rendimiento.",
            "Het ligt direct naast de uitgestrekte zone van Valdevaqueros, maar biedt vaak een meer ontspannen gevoel. Zeker als jullie wat ruimte zoeken, minder afleiding willen en niet constant willen hoeven presteren.",
            "Det ligger bredvid det större Valdevaqueros-området men kan erbjuda en mer avkopplande känsla, särskilt när ni vill ha utrymme, färre distraktioner och en dag som inte bara handlar om prestation."
          ),
          tarifaText(
            "For many riders it is a very pleasant middle ground: still fully Tarifa, still wind-relevant, but often less overwhelming than the more famous alternatives.",
            "Für viele Kiter ist er der perfekte Mittelweg: noch immer echtes Tarifa-Feeling und Top-Wind, aber oft weniger überwältigend als die berühmteren Alternativen.",
            "Para muchos riders, es un punto intermedio muy agradable: sigue teniendo la esencia de Tarifa y buen viento, pero a menudo es menos abrumador que las alternativas más famosas.",
            "Voor veel kiters is het de perfecte middenweg: nog steeds echt Tarifa en top voor de wind, maar vaak minder overweldigend dan de grote bekende namen.",
            "För många kitare är det en väldigt trevlig gyllene medelväg: fortfarande äkta Tarifa, fortfarande bra vindförhållanden, men ofta mindre överväldigande än de mer kända alternativen."
          ),
          tarifaText(
            "Even here, Levante is still Levante. So beginner-friendly never means consequence-free — always match the day to your actual confidence level.",
            "Aber auch hier gilt: Levante bleibt Levante. Anfängerfreundlich bedeutet also nicht, dass man gar nicht mehr aufpassen muss. Stimmt den Tag immer mit eurem tatsächlichen Können ab.",
            "Incluso aquí, el Levante sigue siendo Levante. Que sea apto para principiantes no significa que esté libre de riesgos: adaptad siempre el día a vuestro nivel real de confianza.",
            "Maar let op: Levante blijft Levante, ook hier. Beginnersvriendelijk betekent nooit zonder risico's — stem de dag dus altijd af op hoe zeker jullie je echt voelen.",
            "Men även här är Levante fortfarande Levante. Så nybörjarvänligt innebär aldrig att det är riskfritt — matcha alltid dagen med hur säkra ni verkligen känner er."
          )
          ]
        },
        {
          icon: "warning",
          title: tarifaText(
            "Balneario",
            "Balneario",
            "Balneario",
            "Balneario",
            "Balneario"
          ),
          subtitle: tarifaText(
            "Experts only · Strict priority rules · Not a casual session spot",
            "Nur für Könner · Strenge Vorfahrtsregeln · Kein Ort für eine lockere Session",
            "Solo para expertos · Reglas de prioridad estrictas · No es un spot para relajarse",
            "Alleen voor experts · Strikte voorrangsregels · Geen plek voor een ontspannen sessie",
            "Endast experter · Strikta väjningsregler · Inte för en avslappnad runda"
          ),
          body: [
          tarifaText(
            "<strong>Balneario</strong> is legendary, but it is not a democratic spot. It is for riders who already know exactly what they are doing and do not need a forgiving environment.",
            "<strong>Balneario</strong> ist legendär, aber kein Ort für jedermann. Er ist für Kiter gedacht, die genau wissen, was sie tun, und kein fehlerverzeihendes Umfeld mehr brauchen.",
            "El <strong>Balneario</strong> es legendario, pero no es un spot apto para todos. Está pensado para riders que saben exactamente lo que hacen y que no necesitan un entorno que les perdone los errores.",
            "<strong>Balneario</strong> is legendarisch, maar niet toegankelijk voor iedereen. Het is voor kiters die exact weten wat ze doen en geen vergevingsgezinde omgeving meer nodig hebben.",
            "<strong>Balneario</strong> är legendariskt, men det är inte en plats för alla. Det är för kitare som redan vet precis vad de gör och som inte längre behöver en förlåtande miljö."
          ),
          tarifaText(
            "The atmosphere here is shaped by strong local knowledge, clear priority logic, and a much narrower margin for error than at the more accessible beaches.",
            "Die Atmosphäre hier wird geprägt von starkem Local-Wissen, klaren Vorfahrtsregeln und einer deutlich geringeren Fehlertoleranz als an den zugänglicheren Stränden.",
            "El ambiente aquí está marcado por un profundo conocimiento de los locales, unas reglas de prioridad muy claras y un margen de error muchísimo más estrecho que en las playas más accesibles.",
            "De sfeer hier wordt bepaald door de sterke lokale kennis, strakke voorrangsregels en een veel kleinere foutmarge dan op de toegankelijkere stranden.",
            "Atmosfären här präglas av stor lokalkännedom, tydliga väjningsregler och en mycket mindre marginal för fel än på de mer lättillgängliga stränderna."
          ),
          tarifaText(
            "If you are looking for a relaxed holiday session, this is usually not the place. If you are still improving, it is better to admire the spot than to force it.",
            "Wenn ihr euch nach einer entspannten Urlaubs-Session sehnt, seid ihr hier normalerweise falsch. Wenn ihr euch noch verbessert, ist es besser, dem Spot nur zuzusehen, anstatt etwas zu erzwingen.",
            "Si buscáis una sesión de vacaciones tranquila, este no suele ser el lugar. Si todavía estáis mejorando, es mejor limitarse a admirar el spot en lugar de forzar la situación.",
            "Als jullie op zoek zijn naar een relaxte vakantiesessie, zijn jullie hier meestal niet op de juiste plek. Als je niveau nog in ontwikkeling is, kun je de spot beter bewonderen dan het per se te willen proberen.",
            "Om ni letar efter en avkopplande semester-session är det här normalt inte rätt ställe. Om ni fortfarande utvecklas är det bättre att bara beundra platsen än att tvinga fram det."
          ),
          tarifaText(
            "Our honest recommendation: only choose Balneario if you already belong to that level naturally. It is not the right place for experimentation.",
            "Unsere ehrliche Empfehlung: Wählt den Balneario wirklich nur, wenn ihr auf diesem Level seid. Für Experimente ist das definitiv nicht der richtige Ort.",
            "Nuestra recomendación más sincera: elegid el Balneario solo si ya pertenecéis a ese nivel de forma natural. No es el sitio adecuado para hacer experimentos.",
            "Ons eerlijke advies: ga alleen voor Balneario als jullie van nature al op dit niveau zitten. Het is zeker niet de juiste plek om dingen uit te proberen.",
            "Vår ärliga rekommendation: välj bara Balneario om ni redan naturligt befinner er på den nivån. Det är inte rätt plats för att experimentera."
          )
          ]
        },
        {
          icon: "info",
          title: tarifaText(
            "Rio Jara",
            "Rio Jara",
            "Rio Jara",
            "Rio Jara",
            "Rio Jara"
          ),
          subtitle: tarifaText(
            "Restrictions apply · Not a normal riding recommendation · Easy to misunderstand",
            "Eingeschränkt nutzbar · Keine allgemeine Spot-Empfehlung · Führt oft zu Missverständnissen",
            "Con restricciones · No es una recomendación habitual · Fácil de malinterpretar",
            "Beperkingen gelden · Geen standaard aanbeveling · Zorgt vaak voor verwarring",
            "Restriktioner gäller · Ingen vanlig rekommendation · Leder lätt till missförstånd"
          ),
          body: [
          tarifaText(
            "<strong>Rio Jara</strong> is one of those names that can confuse visitors because it sounds like another possible spot, but in practice it is not a straightforward recommendation.",
            "<strong>Rio Jara</strong> ist einer dieser Namen, die Gäste oft verwirren, weil er wie ein weiterer toller Spot klingt – in der Praxis ist es aber keine unkomplizierte Empfehlung.",
            "<strong>Rio Jara</strong> es uno de esos nombres que suele confundir a los visitantes porque suena a otra opción estupenda, pero en la práctica no es una recomendación sencilla.",
            "<strong>Rio Jara</strong> is zo'n naam die bezoekers vaak in verwarring brengt, omdat het klinkt als zomaar weer een nieuwe spot, maar in de praktijk is het geen voor de hand liggende aanbeveling.",
            "<strong>Rio Jara</strong> är ett av de namn som ofta förvirrar gäster eftersom det låter som ännu ett fantastiskt ställe — men i praktiken är det ingen okomplicerad rekommendation."
          ),
          tarifaText(
            "The different areas there come with important limitations, and guests often understand them too late if nobody explains the distinction clearly in advance.",
            "Die verschiedenen Zonen bringen wichtige Einschränkungen mit sich, und oft verstehen Gäste diese erst zu spät, wenn ihnen die feinen Unterschiede nicht vorher erklärt wurden.",
            "Las diferentes zonas de allí tienen limitaciones importantes, y los huéspedes a menudo las entienden demasiado tarde si nadie les explica bien la diferencia de antemano.",
            "De verschillende gebieden hebben belangrijke restricties, en vaak komen gasten daar te laat achter als niemand de verschillen vooraf duidelijk heeft uitgelegd.",
            "De olika zonerna där kommer med viktiga begränsningar, och ofta förstår gästerna dem för sent om ingen tydligt har förklarat skillnaderna i förväg."
          ),
          tarifaText(
            "So the simplest way to think about Rio Jara is this: do not plan your kitesurfing day around it unless you already know exactly what is allowed and where.",
            "Der einfachste Rat zu Rio Jara lautet also: Plant euren Kitesurf-Tag nicht rund um diesen Spot, es sei denn, ihr wisst bereits ganz genau, was dort wo erlaubt ist.",
            "Por eso, el enfoque más fácil sobre el Rio Jara es este: no planeéis vuestro día de kitesurf allí a menos que ya sepáis exactamente qué está permitido y en qué zonas.",
            "De makkelijkste manier om naar Rio Jara te kijken is dus: plan jullie kitesurfdag hier niet omheen, tenzij je al precies weet wat er waar is toegestaan.",
            "Så det enklaste sättet att förhålla sig till Rio Jara är detta: planera inte er kitesurf-dag kring denna plats, såvida ni inte redan vet exakt vad som är tillåtet och var."
          ),
          tarifaText(
            "For most guests, a more established and clearly usable beach such as Los Lances Norte is the better and less confusing choice.",
            "Für die meisten Gäste ist ein etablierter und klar geregelter Strand wie Los Lances Norte die viel bessere und stressfreiere Wahl.",
            "Para la mayoría de los huéspedes, una playa más consolidada y sin complicaciones como Los Lances Norte es una elección mucho mejor y menos confusa.",
            "Voor de meeste gasten is een gevestigd en duidelijk bruikbaar strand, zoals Los Lances Norte, een betere en minder verwarrende keuze.",
            "För de flesta gäster är en etablerad och tydligt reglerad strand som Los Lances Norte ett betydligt bättre och mindre förvirrande val."
          )
          ]
        },
        {
          icon: "wave",
          title: tarifaText(
            "Arte Vida",
            "Arte Vida",
            "Arte Vida",
            "Arte Vida",
            "Arte Vida"
          ),
          subtitle: tarifaText(
            "Wave-oriented · Poniente only · Better for advanced riders",
            "Wellen-Spot · Nur bei Poniente · Eher für Fortgeschrittene",
            "Orientado a olas · Solo con Poniente · Mejor para riders avanzados",
            "Ideaal voor golven · Alleen bij Poniente · Beter voor gevorderden",
            "Vågorienterat · Endast vid Poniente · Bäst för avancerade åkare"
          ),
          body: [
          tarifaText(
            "<strong>Arte Vida</strong> is the name to remember if your heart goes more toward waves than toward easy freeride comfort.",
            "<strong>Arte Vida</strong> ist der Ort, den ihr euch merken solltet, wenn euer Herz mehr für Wellen als für gemütliches Freeriden schlägt.",
            "<strong>Arte Vida</strong> es el nombre que debéis recordar si os gustan más las olas que el freeride cómodo y relajado.",
            "<strong>Arte Vida</strong> is de spot om te onthouden als jullie hart meer uitgaat naar golven dan naar ontspannen freeride-sessies.",
            "<strong>Arte Vida</strong> är stället ni ska lägga på minnet om ert hjärta slår mer för vågor än för avslappnad freeride."
          ),
          tarifaText(
            "On the right <strong>Poniente</strong> day, this area can become very attractive for riders who actively want a more dynamic, wave-focused session.",
            "An einem guten <strong>Poniente</strong>-Tag kann diese Ecke super attraktiv für Kiter sein, die sich ganz bewusst eine dynamische, wellenorientierte Session wünschen.",
            "En un buen día de <strong>Poniente</strong>, esta zona resulta muy atractiva para los riders que buscan activamente una sesión más dinámica y enfocada a las olas.",
            "Op de juiste <strong>Poniente</strong>-dag is dit gebied heel aantrekkelijk voor kiters die bewust op zoek zijn naar een dynamische sessie vol golven.",
            "På en bra <strong>Poniente</strong>-dag blir detta område mycket attraktivt för åkare som aktivt söker en mer dynamisk, våg-fokuserad session."
          ),
          tarifaText(
            "It is less about a relaxed all-purpose beach day and more about a specific kind of riding mood.",
            "Hier geht es weniger um den entspannten Allround-Strandtag, sondern vielmehr um eine ganz bestimmte Art des Kitesurfens.",
            "No se trata tanto de pasar un día de playa relajado y versátil, sino de un estilo de navegación muy concreto.",
            "Het draait hier minder om een ontspannen allround stranddag, en meer om een specifieke, sportieve vibe.",
            "Här handlar det mindre om en avkopplande stranddag för alla, och mer om en väldigt specifik typ av åkning."
          ),
          tarifaText(
            "If you are not actively looking for wave conditions, or if your level is still developing, other spots will usually feel simpler and more enjoyable.",
            "Wenn ihr nicht aktiv auf der Suche nach Wellen seid oder euer Level noch ausbaut, werdet ihr an anderen Spots meistens deutlich mehr entspannten Spaß haben.",
            "Si no buscáis activamente condiciones de olas, o si todavía estáis mejorando vuestro nivel, otros spots os resultarán más sencillos y divertidos.",
            "Als jullie niet per se op zoek zijn naar golven, of als je nog bezig bent je niveau op te bouwen, zijn andere spots vaak makkelijker en leuker.",
            "Om ni inte aktivt letar efter vågor, eller om ni fortfarande utvecklar er nivå, kommer andra platser förmodligen kännas både enklare och roligare."
          )
          ]
        }
      ]
    }
  ]
};

export const guestGuideTarifa: GuestGuideEntry[] = [
  tarifaFamilySurfHub,
  tarifaFamilySurfApartment,
  tarifaFamilySurfLocalEssentials,
  tarifaFamilySurfLocalGuide,
  tarifaFamilySurfFoodDrink,
  tarifaFamilySurfBeaches,
  tarifaFamilySurfActivities,
  tarifaFamilySurfSightseeing,
  tarifaFamilySurfNightlife,
  tarifaFamilySurfKitesurfing
];
