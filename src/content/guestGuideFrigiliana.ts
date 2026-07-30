import type { GuestGuideEntry, LocalizedText } from '../types/guestGuide';

const FRIGILIANA_SUPPORT_WHATSAPP = 'https://wa.me/34604440964';
const NEED_HELP: LocalizedText = {
  en: 'Need Help?',
  de: 'Braucht ihr Hilfe?',
  es: '¿Necesitáis ayuda?',
  nl: 'Hulp nodig?',
  sv: 'Behöver ni hjälp?'
};

const HOUSEKEEPING_WHATSAPP = 'https://wa.me/34652072384';

const frigilianaFarahHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-frigiliana-farah',
  entityKey: 'amara-farah',
  supportHref: FRIGILIANA_SUPPORT_WHATSAPP,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide | AMARA',
    de: 'Frigiliana Gästeguide | AMARA',
    es: 'Guía para huéspedes en Frigiliana | AMARA',
    nl: 'Frigiliana Guest Guide | AMARA',
    sv: 'Frigiliana Guest Guide | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Frigiliana: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Dein ruhiger, praktischer Guide für Frigiliana: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Frigiliana: información de la casa, recomendaciones locales y lo esencial para llegar sin estrés.',
    nl: 'Een rustige, praktische gids voor jullie verblijf in Frigiliana: huisinfo, lokale tips en essentials voor een soepele aankomst.',
    sv: 'En lugn och praktisk guide för er vistelse i Frigiliana: boendeinfo, lokala tips och det viktigaste för en smidig ankomst.'
  },
  heroImage: '/images/amara-farah/65-amara-frigiliana.jpg',
  heroAlt: {
    en: 'AMARA Farah apartment in Frigiliana',
    de: 'AMARA Farah Apartment in Frigiliana',
    es: 'Apartamento AMARA Farah en Frigiliana',
    nl: 'AMARA Farah appartement in Frigiliana',
    sv: 'AMARA Farah-lägenhet i Frigiliana'
  },
  kicker: { en: 'AMARA FARAH', de: 'AMARA FARAH', es: 'AMARA FARAH', nl: 'AMARA FARAH', sv: 'AMARA FARAH' },
  title: {
    en: 'Frigiliana Guest Guide',
    de: 'Frigiliana Gästeguide',
    es: 'Guía para huéspedes en Frigiliana',
    nl: 'Frigiliana Guest Guide',
    sv: 'Frigiliana Gästguide'
  },
  intro: {
    en: 'A thoughtful guide to help you settle in, find your way, and enjoy Frigiliana with ease.',
    de: 'Ein aufmerksamer Guide, der euch hilft anzukommen, euch schnell zurechtzufinden und Frigiliana mit Leichtigkeit zu genießen.',
    es: 'Una guía pensada con cariño para ayudaros a instalaros, orientaros con facilidad y disfrutar de Frigiliana con calma.',
    nl: 'Een zorgvuldige gids om jullie te helpen rustig aan te komen, gemakkelijk de weg te vinden en van Frigiliana te genieten.',
    sv: 'En omtänksam guide som hjälper er att landa, hitta rätt och uppleva Frigiliana med lätthet.'
  },
  menuLinks: [
    {
      icon: 'accommodation',
      targetSlug: 'guesthome-frigiliana-farah',
      title: {
        en: 'Your Accommodation Farah',
        de: 'Eure Unterkunft Farah',
        es: 'Vuestro alojamiento Farah',
        nl: 'Jullie accommodatie Farah',
        sv: 'Ert boende Farah'
      },
      subtitle: {
        en: 'Arrival · Instructions · Please note',
        de: 'Anreise · Hinweise · Bitte beachten',
        es: 'Llegada · Instrucciones · A tener en cuenta',
        nl: 'Aankomst · Instructies · Let op',
        sv: 'Ankomst · Instruktioner · Vänligen observera'
      }
    },
    {
      icon: 'location-pin',
      targetSlug: 'frigiliana-guest-essentials',
      title: {
        en: 'Frigiliana Essentials',
        de: 'Frigiliana kompakt',
        es: 'Lo esencial de Frigiliana',
        nl: 'Frigiliana essentials',
        sv: 'Det viktigaste i Frigiliana'
      },
      subtitle: {
        en: 'Mobility · Supermarket · Pharmacy',
        de: 'Fortbewegung · Supermarkt · Apotheke',
        es: 'Transporte · Supermercado · Farmacia',
        nl: 'Vervoer · Supermarkt · Apotheek',
        sv: 'Transport · Supermarket · Apotek'
      }
    },
    {
      icon: 'compass',
      targetSlug: 'frigiliana-guest-recommendations',
      title: {
        en: 'Our Recommendations',
        de: 'Unsere Empfehlungen',
        es: 'Nuestras recomendaciones',
        nl: 'Onze aanbevelingen',
        sv: 'Våra rekommendationer'
      },
      subtitle: {
        en: 'Restaurants · Walks · Viewpoints',
        de: 'Restaurants · Spaziergänge · Aussichtspunkte',
        es: 'Restaurantes · Paseos · Miradores',
        nl: 'Restaurants · Wandelingen · Uitzichtpunten',
        sv: 'Restauranger · Promenader · Utkiksplatser'
      }
    }
  ],
  closingParagraphs: [
    {
      en: 'We hope you feel completely at ease in Frigiliana — its calm streets, soft light, and quiet corners are made for slowing down. If you need anything at all during your stay, we are always happy to help: just send us a message via your booking platform, or use the help button below.',
      de: 'Wir hoffen, dass ihr euch in Frigiliana rundum wohlfühlt – in den ruhigen Gassen, im weichen Licht und mit viel Raum, um die Seele baumeln zu lassen. Solltet ihr während eures Aufenthalts irgendetwas brauchen, sind wir jederzeit gerne für euch da: Schreibt uns einfach über eure Buchungsplattform oder nutzt den Hilfe-Button unten.',
      es: 'Esperamos que os sintáis completamente a gusto en Frigiliana, con sus calles tranquilas, su luz suave y sus rincones perfectos para desconectar. Si necesitáis cualquier cosa durante vuestra estancia, estaremos siempre encantados de ayudaros: escribidnos a través de vuestra plataforma de reservas o usad el botón de ayuda de abajo.',
      nl: 'We hopen dat jullie je helemaal thuis voelen in Frigiliana — met de rustige straatjes, het zachte licht en alle ruimte om even tot rust te komen. Hebben jullie tijdens jullie verblijf ergens hulp bij nodig? Stuur ons dan gerust een berichtje via jullie boekingsplatform, of gebruik de help-knop hieronder.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra i Frigiliana – bland lugna gränder, mjukt ljus och gott om utrymme att bara koppla av. Om ni behöver hjälp med något under er vistelse finns vi alltid här för er: skicka ett meddelande via er bokningsplattform eller använd hjälp-knappen nedan.'
    },
    {
      en: 'Should Frigiliana find a place in your heart and you would like to stay a little longer — now or on a future trip — we would be delighted to welcome you again. You can check our current and future availability online at any time.',
      de: 'Sollte Frigiliana einen Platz in eurem Herzen finden und ihr euren Aufenthalt gerne verlängern möchtet – jetzt oder bei einer zukünftigen Reise –, würden wir uns sehr freuen, euch wieder bei uns zu begrüßen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Frigiliana llega a ocuparos un rincón del corazón y os apetece quedaros un poco más —ahora o en un futuro viaje—, estaremos encantados de volver a recibiros. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Frigiliana een plekje in jullie hart en willen jullie wat langer blijven — nu of bij een volgende reis — dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Frigiliana får en plats i ert hjärta och ni vill stanna lite längre – nu eller vid ett framtida besök – välkomnar vi er varmt tillbaka. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref:
    'https://amara-lodging.es/de/book/?adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306383&city=Frigiliana&children=0&infants=0&pets=0',
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  signOff: {
    en: 'Warm regards,<br>Robert',
    de: 'Herzliche Grüße,<br>Robert',
    es: 'Un afectuoso saludo,<br>Robert',
    nl: 'Hartelijke groeten,<br>Robert',
    sv: 'Varma hälsningar,<br>Robert'
  }
};

const frigilianaFarahAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-frigiliana-farah',
  entityKey: 'amara-farah',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_WHATSAPP,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your Accommodation Farah | AMARA',
    de: 'Eure Unterkunft Farah | AMARA',
    es: 'Vuestro alojamiento Farah | AMARA',
    nl: 'Jullie accommodatie Farah | AMARA',
    sv: 'Ert boende Farah | AMARA'
  },
  seoDescription: {
    en: 'House details, arrival directions, and everything you need to know about staying at AMARA Farah in Frigiliana.',
    de: 'Haus-Infos, Anreisebeschreibung und alles Wichtige für euren Aufenthalt in der AMARA Farah in Frigiliana.',
    es: 'Detalles de la casa, indicaciones para llegar y todo lo que necesitáis saber sobre vuestra estancia en AMARA Farah, Frigiliana.',
    nl: 'Huisinfo, aankomstroute en alles wat jullie moeten weten over jullie verblijf in AMARA Farah in Frigiliana.',
    sv: 'Boendeinfo, ankomstväg och allt ni behöver veta om er vistelse i AMARA Farah i Frigiliana.'
  },
  kicker: {
    en: 'FRIGILIANA GUEST GUIDE',
    de: 'FRIGILIANA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN FRIGILIANA',
    nl: 'FRIGILIANA GASTENGIDS',
    sv: 'FRIGILIANA GÄSTGUIDE'
  },
  title: {
    en: 'Your Accommodation Farah',
    de: 'Eure Unterkunft Farah',
    es: 'Vuestro alojamiento Farah',
    nl: 'Jullie accommodatie Farah',
    sv: 'Ert boende Farah'
  },
  intro: {
    en: 'House details and essentials.',
    de: 'Details und das Wichtigste zu eurem Haus.',
    es: 'Detalles y lo esencial de vuestra casa.',
    nl: 'Details en de belangrijkste informatie over jullie huis.',
    sv: 'Detaljer och det viktigaste om ert hus.'
  },
  categories: [
    {
      heading: {
        en: 'Arrival & Basics',
        de: 'Anreise & Grundlagen',
        es: 'Llegada y aspectos básicos',
        nl: 'Aankomst & Basisinfo',
        sv: 'Ankomst & Grundläggande info'
      },
      items: [
        {
          icon: 'location-pin',
          title: { en: 'Arrival', de: 'Anreise', es: 'Llegada', nl: 'Aankomst', sv: 'Ankomst' },
          body: [
            {
              en: 'La AMARA is located in the historic center at <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Chorruelo+5+29788+Frigiliana" target="_blank" rel="noopener">Calle Chorruelo 5, 29788 Frigiliana</a>.',
              de: 'La AMARA befindet sich im historischen Zentrum in der <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Chorruelo+5+29788+Frigiliana" target="_blank" rel="noopener">Calle Chorruelo 5, 29788 Frigiliana</a>.',
              es: 'La AMARA se encuentra en el centro histórico, en <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Chorruelo+5+29788+Frigiliana" target="_blank" rel="noopener">Calle Chorruelo 5, 29788 Frigiliana</a>.',
              nl: 'La AMARA bevindt zich in het historische centrum aan de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Chorruelo+5+29788+Frigiliana" target="_blank" rel="noopener">Calle Chorruelo 5, 29788 Frigiliana</a>.',
              sv: 'La AMARA ligger i den historiska stadskärnan på <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Chorruelo+5+29788+Frigiliana" target="_blank" rel="noopener">Calle Chorruelo 5, 29788 Frigiliana</a>.'
            },
            {
              en: '<strong>Arrival by car / taxi</strong>',
              de: '<strong>Anreise mit dem Auto / Taxi</strong>',
              es: '<strong>Llegada en coche / taxi</strong>',
              nl: '<strong>Aankomst met de auto / taxi</strong>',
              sv: '<strong>Ankomst med bil / taxi</strong>'
            },
            {
              en: 'The streets in the historic center are narrow and vehicle access is restricted, so we recommend parking — or asking your taxi to drop you off — at <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano 42</a> and continuing on foot from there.',
              de: 'Da die Straßen im historischen Zentrum eng sind und die Zufahrt für Fahrzeuge eingeschränkt ist, empfehlen wir euch, an der <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano 42</a> zu parken oder euch dort vom Taxi absetzen zu lassen und von dort zu Fuß weiterzugehen.',
              es: 'Las calles del centro histórico son estrechas y el acceso en coche está restringido, así que os recomendamos aparcar —o pedir a vuestro taxi que os deje— en la <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano 42</a> y continuar a pie desde allí.',
              nl: 'De straten in het historische centrum zijn smal en toegankelijk voor voertuigen is beperkt. We raden daarom aan om te parkeren — of de taxi te laten stoppen — bij de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano 42</a> en vandaar te voet verder te gaan.',
              sv: 'Gatorna i den historiska stadskärnan är smala och biltrafiken är begränsad. Vi rekommenderar därför att ni parkerar — eller ber taxin stanna — vid <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano 42</a> och promenerar därifrån.'
            },
            {
              en: '<a class="am-link" href="https://www.google.com/maps/dir/Av.+Carlos+Cano,+42,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">From there it is roughly a 4-minute (150 m) walk uphill.</a>',
              de: '<a class="am-link" href="https://www.google.com/maps/dir/Av.+Carlos+Cano,+42,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Von dort aus sind es etwa 4 Minuten (150 m) bergauf zu Fuß.</a>',
              es: '<a class="am-link" href="https://www.google.com/maps/dir/Av.+Carlos+Cano,+42,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Desde allí es un paseo de unos 4 minutos (150 m) cuesta arriba.</a>',
              nl: '<a class="am-link" href="https://www.google.com/maps/dir/Av.+Carlos+Cano,+42,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Vanaf daar is het ongeveer 4 minuten (150 m) lopen, bergopwaarts.</a>',
              sv: '<a class="am-link" href="https://www.google.com/maps/dir/Av.+Carlos+Cano,+42,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Därifrån är det ungefär 4 minuters promenad (150 m) uppför.</a>'
            },
            {
              en: 'To reach the house, take the staircase on the left-hand side of the "La Fuente" urbanization (Avenida Carlos Cano 42). Pass the well-known La Fuente Vieja fountain and continue for about 15 meters. At Bar El Señor, turn right and walk uphill; after roughly 40 more meters you will see La AMARA on the right — a green door with small windows and a black keypad to the left of the entrance.',
              de: 'Um zum Haus zu gelangen, nehmt ihr die Treppe auf der linken Seite der Urbanisation „La Fuente" (Avenida Carlos Cano 42). Geht an der bekannten Wasserstelle La Fuente Vieja vorbei und lauft etwa 15 Meter weiter. An der Bar El Señor biegt ihr rechts ab und geht bergauf; nach etwa 40 weiteren Metern seht ihr La AMARA auf der rechten Seite – eine grüne Tür mit kleinen Fenstern und einem schwarzen Tastenfeld links neben dem Eingang.',
              es: 'Para llegar a la casa, tomad las escaleras a la izquierda de la urbanización "La Fuente" (Avenida Carlos Cano 42). Pasad junto a la conocida fuente de La Fuente Vieja y continuad unos 15 metros. En el Bar El Señor, girad a la derecha y subid; tras unos 40 metros más veréis La AMARA a mano derecha: una puerta verde con ventanitas y un teclado negro a la izquierda de la entrada.',
              nl: 'Om bij het huis te komen, nemen jullie de trap aan de linkerkant van de urbanisatie "La Fuente" (Avenida Carlos Cano 42). Loop langs de bekende fontein La Fuente Vieja en ga ongeveer 15 meter rechtdoor. Sla bij Bar El Señor rechtsaf en loop bergopwaarts; na ongeveer 40 meter zien jullie La AMARA aan de rechterkant — een groene deur met kleine raampjes en een zwart codeslot links van de ingang.',
              sv: 'För att komma till huset, ta trappan på vänster sida om urbanisationen "La Fuente" (Avenida Carlos Cano 42). Gå förbi den kända fontänen La Fuente Vieja och fortsätt ungefär 15 meter. Vid Bar El Señor svänger ni höger och går uppför; efter ytterligare cirka 40 meter ser ni La AMARA på höger sida – en grön dörr med små fönster och en svart knappsats till vänster om entrén.'
            },
            {
              en: '<strong>Arrival by bus</strong>',
              de: '<strong>Anreise mit dem Bus</strong>',
              es: '<strong>Llegada en autobús</strong>',
              nl: '<strong>Aankomst met de bus</strong>',
              sv: '<strong>Ankomst med buss</strong>'
            },
            {
              en: 'The bus stops at <a class="am-link" href="https://maps.app.goo.gl/EoKEVsJo2J4NmC5h79" target="_blank" rel="noopener">Parada de Autobús – C. Real, Frigiliana</a>. From there you can choose between two walking routes to reach the house.',
              de: 'Der Bus hält an der <a class="am-link" href="https://maps.app.goo.gl/EoKEVsJo2J4NmC5h79" target="_blank" rel="noopener">Parada de Autobús – C. Real, Frigiliana</a>. Von dort aus könnt ihr zwischen zwei Wegen zum Haus wählen.',
              es: 'El autobús llega a la <a class="am-link" href="https://maps.app.goo.gl/EoKEVsJo2J4NmC5h79" target="_blank" rel="noopener">Parada de Autobús – C. Real, Frigiliana</a>. Desde allí podéis elegir entre dos caminos para llegar a la casa.',
              nl: 'De bus stopt bij de <a class="am-link" href="https://maps.app.goo.gl/EoKEVsJo2J4NmC5h79" target="_blank" rel="noopener">Parada de Autobús – C. Real, Frigiliana</a>. Vanaf daar kunnen jullie kiezen uit twee looproutes naar het huis.',
              sv: 'Bussen stannar vid <a class="am-link" href="https://maps.app.goo.gl/EoKEVsJo2J4NmC5h79" target="_blank" rel="noopener">Parada de Autobús – C. Real, Frigiliana</a>. Därifrån kan ni välja mellan två vägar till huset.'
            },
            {
              en: '<strong>Shorter route – via <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Calle Real</a></strong> — cobbled streets, no steps. Approx. 8 minutes (550 m), slightly uphill through the old village.',
              de: '<strong>Kürzerer Weg – über die <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Calle Real</a></strong> — Kopfsteinpflaster, keine Stufen. Ca. 8 Minuten (550 m), leicht bergauf durch den alten Ortskern.',
              es: '<strong>Camino más corto – por <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Calle Real</a></strong> — calles empedradas, sin escaleras. Aprox. 8 minutos (550 m), ligeramente cuesta arriba por el casco antiguo.',
              nl: '<strong>Kortere weg – via de <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Calle Real</a></strong> — geplaveide straatjes, geen trappen. Ca. 8 minuten (550 m), licht bergopwaarts door het oude dorp.',
              sv: '<strong>Kortare väg – via <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Calle Real</a></strong> — kullerstensgator, inga trappor. Ca 8 minuter (550 m), något uppför genom den gamla byn.'
            },
            {
              en: '<strong>Longer route – via the <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+Fuente+APT6,+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">main road</a></strong> — mostly flat, with steps at the end. Approx. 12 minutes (750 m): flat until La Fuente, then several steps (approx. 25 m elevation).',
              de: '<strong>Längerer Weg – über die <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+Fuente+APT6,+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">Hauptstraße</a></strong> — meist flach, Stufen am Ende. Ca. 12 Minuten (750 m): flach bis La Fuente, danach mehrere Stufen (ca. 25 Höhenmeter).',
              es: '<strong>Camino más largo – por la <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+Fuente+APT6,+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">carretera principal</a></strong> — principalmente llano, con escaleras al final. Aprox. 12 minutos (750 m): llano hasta La Fuente, luego varias escaleras (aprox. 25 m de desnivel).',
              nl: '<strong>Langere weg – via de <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+Fuente+APT6,+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">hoofdweg</a></strong> — grotendeels vlak, trappen aan het einde. Ca. 12 minuten (750 m): vlak tot aan La Fuente, daarna meerdere trappen (ca. 25 m hoogteverschil).',
              sv: '<strong>Längre väg – via <a class="am-link" href="https://www.google.com/maps/dir/Parada+de+Autob%C3%BAs,+C.+Real,+29788+Frigiliana,+M%C3%A1laga,+Spanien/La+Fuente+APT6,+Frigiliana,+M%C3%A1laga,+Spanien/La+AMARA+-+Quiet+romantic+stays+in+Frigiliana,+C.+Chorruelo,+5,+29788+Frigiliana,+M%C3%A1laga,+Spanien/" target="_blank" rel="noopener">huvudvägen</a></strong> — mestadels plant, trappor på slutet. Ca 12 minuter (750 m): plant fram till La Fuente, därefter flera trappor (ca 25 m höjdskillnad).'
            }
          ]
        },
        {
          icon: 'car',
          title: { en: 'Parking', de: 'Parken', es: 'Aparcamiento', nl: 'Parkeren', sv: 'Parkering' },
          body: [
            {
              en: 'La AMARA sits in the historic center of Frigiliana, where access by car is limited — but in the lower part of the old town, which makes arrival noticeably easier than for properties further uphill.',
              de: 'La AMARA liegt im historischen Zentrum von Frigiliana, wo die Zufahrt mit dem Auto eingeschränkt ist – allerdings im unteren Teil der Altstadt, was die Anreise im Vergleich zu höher gelegenen Häusern deutlich einfacher macht.',
              es: 'La AMARA está en el centro histórico de Frigiliana, donde el acceso en coche es limitado, pero en la parte baja del casco antiguo, lo que facilita bastante la llegada en comparación con las casas situadas más arriba.',
              nl: 'La AMARA ligt in het historische centrum van Frigiliana, waar de toegang met de auto beperkt is — maar wel in het lagere deel van het oude centrum, wat de aankomst een stuk makkelijker maakt dan bij huizen die hogerop liggen.',
              sv: 'La AMARA ligger i Frigilianas historiska centrum, där biltrafiken är begränsad — men i den nedre delen av gamla stan, vilket gör ankomsten betydligt enklare jämfört med boenden som ligger högre upp.'
            },
            {
              en: 'Free public parking is usually available along <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano</a>.',
              de: 'Kostenlose öffentliche Parkplätze findet ihr normalerweise entlang der <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano</a>.',
              es: 'Normalmente encontraréis aparcamiento público gratuito a lo largo de la <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano</a>.',
              nl: 'Langs de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano</a> is meestal gratis openbare parkeergelegenheid te vinden.',
              sv: 'Gratis allmän parkering finns oftast längs <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Cano+42+29788+Frigiliana" target="_blank" rel="noopener">Avenida Carlos Cano</a>.'
            },
            {
              en: 'For the most comfortable walk, we recommend parking near the "La Fuente" urbanization. It is short, with a few typical old-town steps and a gentle uphill stretch.',
              de: 'Für den bequemsten Weg empfehlen wir euch, in der Nähe der Urbanisation „La Fuente" zu parken. Der Weg ist kurz und umfasst typische Altstadttreppen sowie eine sanfte Steigung.',
              es: 'Para el trayecto más cómodo, os recomendamos aparcar cerca de la urbanización "La Fuente". Es un paseo corto, con algunas escaleras típicas del casco antiguo y un tramo suave cuesta arriba.',
              nl: 'Voor de meest comfortabele wandeling raden we aan om te parkeren in de buurt van de urbanisatie "La Fuente". De wandeling is kort, met een paar typische trapjes van de oude stad en een licht hellend stuk.',
              sv: 'För den bekvämaste promenaden rekommenderar vi att ni parkerar i närheten av urbanisationen "La Fuente". Promenaden är kort, med några typiska gamla trappor och en lätt uppförsbacke.'
            }
          ]
        },
        {
          icon: 'wifi',
          title: { en: 'Wi-Fi', de: 'WLAN', es: 'Wi-Fi', nl: 'Wifi', sv: 'Wi-Fi' },
          body: [
            {
              en: 'Stay connected with high-speed Wi-Fi.<br>Network name: <strong>AMARA</strong><br>Password: <strong>AMARA29788</strong>',
              de: 'Bleibt mit Highspeed-WLAN verbunden.<br>Netzwerkname: <strong>AMARA</strong><br>Passwort: <strong>AMARA29788</strong>',
              es: 'Manteneos conectados con Wi-Fi de alta velocidad.<br>Nombre de la red: <strong>AMARA</strong><br>Contraseña: <strong>AMARA29788</strong>',
              nl: 'Blijf verbonden met snelle wifi.<br>Netwerknaam: <strong>AMARA</strong><br>Wachtwoord: <strong>AMARA29788</strong>',
              sv: 'Håll er uppkopplade med snabbt Wi-Fi.<br>Nätverksnamn: <strong>AMARA</strong><br>Lösenord: <strong>AMARA29788</strong>'
            }
          ]
        },
        {
          icon: 'climate',
          title: {
            en: 'Cooling & Heating',
            de: 'Klimaanlage & Heizung',
            es: 'Climatización y calefacción',
            nl: 'Airconditioning & verwarming',
            sv: 'Kylning & uppvärmning'
          },
          body: [
            {
              en: 'A white Samsung remote control operates the air conditioning. We recommend <strong>23–24°C</strong> for cooling and <strong>20–21°C</strong> for heating — comfortable and energy-efficient.',
              de: 'Für die Klimaanlage liegt eine weiße Samsung-Fernbedienung bereit. Wir empfehlen <strong>23–24 °C</strong> zum Kühlen und <strong>20–21 °C</strong> zum Heizen – angenehm und energieeffizient.',
              es: 'Un mando a distancia blanco de Samsung controla el aire acondicionado. Os recomendamos <strong>23–24 °C</strong> para enfriar y <strong>20–21 °C</strong> para calentar: cómodo y eficiente.',
              nl: 'Een witte Samsung-afstandsbediening bedient de airconditioning. Voor optimaal comfort en efficiëntie raden we <strong>23–24 °C</strong> aan om te koelen en <strong>20–21 °C</strong> om te verwarmen.',
              sv: 'En vit Samsung-fjärrkontroll styr luftkonditioneringen. Vi rekommenderar <strong>23–24 °C</strong> för kylning och <strong>20–21 °C</strong> för uppvärmning — skönt och energieffektivt.'
            },
            {
              en: 'Please keep windows closed while the system is running, and switch it off when you leave the apartment.',
              de: 'Bitte schließt die Fenster, während die Anlage läuft, und schaltet sie aus, wenn ihr die Wohnung verlasst.',
              es: 'Por favor, mantened las ventanas cerradas mientras el sistema esté en marcha y apagadlo al salir del apartamento.',
              nl: 'Houd de ramen gesloten terwijl het systeem aanstaat en zet het uit wanneer jullie het appartement verlaten.',
              sv: 'Håll gärna fönstren stängda när systemet är igång och stäng av det när ni lämnar lägenheten.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'During Your Stay',
        de: 'Während eures Aufenthalts',
        es: 'Durante vuestra estancia',
        nl: 'Tijdens jullie verblijf',
        sv: 'Under er vistelse'
      },
      items: [
        {
          icon: 'coffee',
          title: { en: 'Coffee Machine', de: 'Kaffeemaschine', es: 'Cafetera', nl: 'Koffiemachine', sv: 'Kaffemaskin' },
          body: [
            {
              en: 'Your apartment has a <strong>DeLonghi Dedica EC 685.M espresso machine</strong> with a milk frother — a compact barista setup for espresso, cappuccino, and latte.',
              de: 'Euer Apartment verfügt über eine <strong>DeLonghi Dedica EC 685.M Espressomaschine</strong> mit Milchaufschäumer – ein kompaktes Barista-Setup für Espresso, Cappuccino und Latte.',
              es: 'Vuestro apartamento cuenta con una <strong>cafetera espresso DeLonghi Dedica EC 685.M</strong> con espumador de leche: un equipo barista compacto para espresso, capuchino y latte.',
              nl: 'Jullie appartement is uitgerust met een <strong>DeLonghi Dedica EC 685.M espressomachine</strong> met melkopschuimer — een compacte barista-setup voor espresso, cappuccino en latte.',
              sv: 'Er lägenhet har en <strong>DeLonghi Dedica EC 685.M espressomaskin</strong> med mjölkskummare – en kompakt barista-utrustning för espresso, cappuccino och latte.'
            },
            {
              en: 'The portafilter (<strong>C1</strong>) works with three inserts: <strong>C2</strong> (single shot), <strong>C3</strong> (double shot), and <strong>C4</strong> (ESE pods).',
              de: 'Der Siebträger (<strong>C1</strong>) kann mit drei Einsätzen verwendet werden: <strong>C2</strong> (einfacher Espresso), <strong>C3</strong> (doppelter Espresso) und <strong>C4</strong> (E.S.E.-Pads).',
              es: 'El portafiltro (<strong>C1</strong>) se usa con tres filtros: <strong>C2</strong> (espresso simple), <strong>C3</strong> (espresso doble) y <strong>C4</strong> (monodosis ESE).',
              nl: 'De piston (<strong>C1</strong>) kan worden gebruikt met drie filterbakjes: <strong>C2</strong> (enkele espresso), <strong>C3</strong> (dubbele espresso) en <strong>C4</strong> (ESE-servings).',
              sv: 'Portafiltret (<strong>C1</strong>) används med tre insatser: <strong>C2</strong> (enkel espresso), <strong>C3</strong> (dubbel espresso) och <strong>C4</strong> (ESE-pods).'
            },
            {
              en: 'To start: fill the water tank, switch the machine on, then press <strong>Power</strong>. The lights blink while heating up; once they stay steady, it is ready.',
              de: 'Los geht’s: Füllt den Wassertank, schaltet die Maschine ein und drückt <strong>Power</strong>. Die Lichter blinken beim Aufheizen; sobald sie durchgehend leuchten, ist die Maschine bereit.',
              es: 'Para empezar: llenad el depósito de agua, encended la máquina y pulsad <strong>Power</strong>. Las luces parpadean mientras se calienta; cuando quedan fijas, está lista.',
              nl: 'Om te beginnen: vul het waterreservoir, zet de machine aan en druk op <strong>Power</strong>. De lampjes knipperen tijdens het opwarmen; branden ze continu, dan is hij klaar voor gebruik.',
              sv: 'För att starta: fyll vattentanken, slå på maskinen och tryck på <strong>Power</strong>. Lamporna blinkar under uppvärmningen; när de lyser med fast sken är den klar.'
            },
            {
              en: 'For espresso: insert the basket, add coffee (or an ESE pod for C4), tamp gently, lock the portafilter to the right, place your cups under the spout, and press <strong>1 cup</strong> or <strong>2 cups</strong>. For best results, pre-warm your cups with hot water and avoid overfilling the basket.',
              de: 'Für Espresso: Setzt das gewünschte Sieb ein, füllt Kaffeepulver ein (oder ein E.S.E.-Pad für C4), drückt es leicht an, dreht den Siebträger nach rechts fest, stellt eure Tassen darunter und drückt <strong>1 Tasse</strong> oder <strong>2 Tassen</strong>. Für das beste Ergebnis wärmt ihr eure Tassen am besten mit heißem Wasser vor und überfüllt das Sieb nicht.',
              es: 'Para espresso: colocad el filtro, añadid café (o una monodosis ESE para C4), prensad suavemente, encajad el portafiltro girando hacia la derecha, poned vuestras tazas debajo y pulsad <strong>1 taza</strong> o <strong>2 tazas</strong>. Para un mejor resultado, precalentad las tazas con agua caliente y no llenéis el filtro en exceso.',
              nl: 'Voor espresso: plaats het filterbakje, voeg koffie toe (of een ESE-serving voor C4), druk lichtjes aan, draai de piston naar rechts vast, zet jullie kopjes eronder en druk op <strong>1 kopje</strong> of <strong>2 kopjes</strong>. Voor het beste resultaat verwarmen jullie de kopjes vooraf met heet water en vullen jullie het filterbakje niet te vol.',
              sv: 'För espresso: sätt i insatsen, fyll på kaffe (eller en ESE-pod för C4), pressa lätt, lås fast portafiltret åt höger, ställ era koppar under munstycket och tryck på <strong>1 kopp</strong> eller <strong>2 koppar</strong>. Värm gärna koppen i förväg med hett vatten och undvik att fylla insatsen för mycket.'
            },
            {
              en: 'Milk frothing: fill a small jug with cold milk, turn on the steam knob, keep the tip just under the surface until the milk turns silky, then turn the steam off and wipe the wand clean.',
              de: 'Milch aufschäumen: Füllt ein kleines Kännchen mit kalter Milch, dreht den Dampfregler auf, haltet die Düse knapp unter die Oberfläche, bis die Milch seidig wird, dreht den Dampf dann wieder zu und wischt die Düse sauber.',
              es: 'Para espumar leche: llenad una jarrita con leche fría, abrid el mando de vapor, mantened la punta justo bajo la superficie hasta que la leche quede sedosa, cerrad el vapor y limpiad el tubo.',
              nl: 'Melk opschuimen: vul een klein kannetje met koude melk, draai de stoomknop open, houd het stoompijpje net onder het oppervlak tot de melk zijdezacht wordt, draai de stoom dicht en veeg het pijpje schoon.',
              sv: 'Skumma mjölk: fyll en liten kanna med kall mjölk, vrid på ångvredet, håll munstycket precis under ytan tills mjölken blir silkeslen, stäng av ångan och torka av röret.'
            }
          ],
          image: {
            src: '/images/amara-farah/coffee-machine-filters.jpg',
            alt: {
              en: 'DeLonghi portafilter C1 with filter inserts C2 (single shot), C3 (double shot) and C4 (ESE pods)',
              de: 'DeLonghi-Siebträger C1 mit den Einsätzen C2 (einfacher Espresso), C3 (doppelter Espresso) und C4 (E.S.E.-Pads)',
              es: 'Portafiltro DeLonghi C1 con los filtros C2 (espresso simple), C3 (espresso doble) y C4 (monodosis ESE)',
              nl: 'DeLonghi-piston C1 met filterbakjes C2 (enkele espresso), C3 (dubbele espresso) en C4 (ESE-servings)',
              sv: 'DeLonghi-portafilter C1 med insatserna C2 (enkel espresso), C3 (dubbel espresso) och C4 (ESE-pods)'
            },
            caption: {
              en: 'A6 portafilter handle · C1 filter holder · C2/C3/C4 inserts',
              de: 'A6 Siebträgergriff · C1 Siebhalter · C2/C3/C4 Einsätze',
              es: 'A6 mango del portafiltro · C1 soporte del filtro · Filtros C2/C3/C4',
              nl: 'A6 handvat piston · C1 filterhouder · C2/C3/C4 filterbakjes',
              sv: 'A6 portafilterhandtag · C1 filterhållare · C2/C3/C4-insatser'
            }
          }
        },
        {
          icon: 'sparkle',
          title: { en: 'Housekeeping', de: 'Housekeeping', es: 'Servicio de limpieza', nl: 'Housekeeping', sv: 'Housekeeping' },
          body: [
            {
              en: '<strong>Fresh linens</strong><br>For stays longer than 7 nights, we automatically change your bed linen and towels halfway through your stay.',
              de: '<strong>Frische Wäsche</strong><br>Bei Aufenthalten von mehr als 7 Nächten wechseln wir zur Hälfte eures Aufenthalts automatisch die Bettwäsche und Handtücher für euch aus.',
              es: '<strong>Ropa de cama limpia</strong><br>Para estancias superiores a 7 noches, cambiamos automáticamente la ropa de cama y las toallas a mitad de vuestra estancia.',
              nl: '<strong>Schoon linnen</strong><br>Bij een verblijf van meer dan 7 nachten verschonen we halverwege jullie verblijf automatisch het beddengoed en de handdoeken.',
              sv: '<strong>Rena sängkläder</strong><br>Vid vistelser längre än 7 nätter byter vi automatiskt sängkläder och handdukar halvvägs in i er vistelse.'
            },
            {
              en: '<strong>Need anything else?</strong><br>Our housekeeping team is happy to help: <a class="am-link" href="' +
                HOUSEKEEPING_WHATSAPP +
                '" target="_blank" rel="noopener">Open WhatsApp</a>',
              de: '<strong>Wenn ihr noch etwas braucht</strong><br>Unser Housekeeping-Team hilft euch sehr gerne weiter: <a class="am-link" href="' +
                HOUSEKEEPING_WHATSAPP +
                '" target="_blank" rel="noopener">WhatsApp öffnen</a>',
              es: '<strong>¿Necesitáis cualquier otra cosa?</strong><br>Nuestro equipo de limpieza estará encantado de ayudaros: <a class="am-link" href="' +
                HOUSEKEEPING_WHATSAPP +
                '" target="_blank" rel="noopener">Abrir WhatsApp</a>',
              nl: '<strong>Nog iets anders nodig?</strong><br>Ons housekeeping-team helpt jullie graag verder: <a class="am-link" href="' +
                HOUSEKEEPING_WHATSAPP +
                '" target="_blank" rel="noopener">Open WhatsApp</a>',
              sv: '<strong>Behöver ni något annat?</strong><br>Vårt housekeeping-team hjälper er gärna: <a class="am-link" href="' +
                HOUSEKEEPING_WHATSAPP +
                '" target="_blank" rel="noopener">Öppna WhatsApp</a>'
            }
          ]
        },
        {
          icon: 'trash',
          title: { en: 'Garbage', de: 'Müllentsorgung', es: 'Gestión de residuos', nl: 'Afvalverwerking', sv: 'Avfallshantering' },
          body: [
            {
              en: 'Please dispose of your rubbish in the container on Calle Carlos Cano, directly opposite the stairs leading up to the house.',
              de: 'Bitte entsorgt euren Müll im Container auf der Calle Carlos Cano – genau gegenüber den Treppen, die zum Haus hinaufführen.',
              es: 'Os pedimos que depositéis la basura en el contenedor de la Calle Carlos Cano, justo enfrente de las escaleras que suben a la casa.',
              nl: 'Gooi het afval weg in de container in de Calle Carlos Cano, tegenover de trap die naar het huis leidt.',
              sv: 'Vänligen släng era sopor i containern på Calle Carlos Cano, mittemot trapporna som leder upp till huset.'
            },
            {
              en: 'Please avoid leaving food uncovered, as the warm climate can quickly attract ants — especially in summer.',
              de: 'Bitte achtet darauf, keine offenen Lebensmittel stehen zu lassen, da das warme Klima schnell Ameisen anziehen kann – besonders im Sommer.',
              es: 'Evitad dejar comida sin tapar, ya que el clima cálido puede atraer hormigas rápidamente, sobre todo en verano.',
              nl: 'Laat eten niet onafgedekt staan — het warme klimaat kan snel mieren aantrekken, vooral in de zomer.',
              sv: 'Undvik att lämna mat framme utan lock, eftersom det varma klimatet snabbt kan locka till sig myror – särskilt på sommaren.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Please Note',
        de: 'Bitte beachten',
        es: 'A tener en cuenta',
        nl: 'Let op',
        sv: 'Vänligen observera'
      },
      items: [
        {
          icon: 'moon',
          title: {
            en: 'Quiet Hours from 11:00 PM',
            de: 'Ruhezeit ab 23:00 Uhr',
            es: 'Horario de silencio desde las 23:00',
            nl: 'Nachtrust vanaf 23.00 uur',
            sv: 'Nattro från kl. 23.00'
          },
          body: [
            {
              en: '<strong>Quiet hours begin at 11:00 PM.</strong> From then on, please use your physical key for the main entrance door at street level rather than the electronic lock, which is disabled overnight — so please always bring your key when returning late.',
              de: '<strong>Ab 23:00 Uhr gilt im Haus Ruhezeit.</strong> Bitte verwendet ab dann euren normalen Schlüssel für die Haustür auf Straßenebene statt des elektronischen Türschlosses, das nachts deaktiviert wird – nehmt daher bitte immer euren Schlüssel mit, wenn ihr später zurückkehrt.',
              es: '<strong>El horario de silencio comienza a las 23:00.</strong> A partir de esa hora, utilizad vuestra llave física para la puerta principal a nivel de calle en lugar de la cerradura electrónica, que se desactiva por la noche; llevad siempre la llave si vais a regresar tarde.',
              nl: '<strong>Vanaf 23.00 uur geldt er nachtrust in het huis.</strong> Gebruik vanaf dat moment jullie gewone sleutel voor de hoofdingang aan de straat in plaats van het elektronische deurslot, dat \'s nachts wordt uitgeschakeld — neem daarom altijd de sleutel mee als jullie later terugkeren.',
              sv: '<strong>Från kl. 23.00 gäller nattro i huset.</strong> Använd därefter er vanliga nyckel till huvudentrén på gatunivå i stället för det elektroniska dörrlåset, som stängs av nattetid — ta därför alltid med nyckeln om ni återvänder sent.'
            },
            {
              en: 'During the day the electronic lock is there for your convenience — handy if you would rather leave your key safely in the key box while you visit the beach.',
              de: 'Tagsüber könnt ihr das elektronische Türschloss gerne nutzen – praktisch, wenn ihr euren Schlüssel während eines Strandbesuchs sicher in der Schlüsselbox lassen möchtet.',
              es: 'Durante el día podéis usar cómodamente la cerradura electrónica, por ejemplo si preferís dejar la llave a buen recaudo en la caja de llaves mientras vais a la playa.',
              nl: 'Overdag kunnen jullie het elektronische deurslot gerust gebruiken — handig als jullie de sleutel tijdens een strandbezoek liever veilig in het sleutelkluisje laten.',
              sv: 'Under dagen kan ni gärna använda det elektroniska dörrlåset — praktiskt om ni vill lämna nyckeln säkert i nyckelboxen medan ni är på stranden.'
            },
            {
              en: 'Out of consideration for other guests, please also keep voices and noise low in the shared entrance and corridor after 11:00 PM. Thank you for your understanding.',
              de: 'Aus Rücksicht auf die anderen Gäste bitten wir euch außerdem, euch ab 23:00 Uhr im gemeinsamen Eingangs- und Korridorbereich leise zu verhalten. Vielen Dank für euer Verständnis.',
              es: 'Por consideración hacia los demás huéspedes, os pedimos también que habléis en voz baja y evitéis ruidos en las zonas comunes de entrada y pasillo después de las 23:00. Gracias por vuestra comprensión.',
              nl: 'Uit respect voor de andere gasten vragen we jullie ook om na 23.00 uur rustig te zijn in de gemeenschappelijke entree en gangen. Hartelijk dank voor jullie begrip.',
              sv: 'Av hänsyn till de andra gästerna ber vi er också att vara tysta i den gemensamma entrén och korridoren efter kl. 23.00. Tack för er förståelse.'
            }
          ]
        },
        {
          icon: 'tap-water',
          title: { en: 'Tap Water', de: 'Leitungswasser', es: 'Agua del grifo', nl: 'Kraanwater', sv: 'Kranvatten' },
          body: [
            {
              en: 'The tap water is <strong>softened and filtered</strong> for everyday comfort — the system reduces limescale and leaves skin and hair noticeably softer after showering.',
              de: 'Das Leitungswasser im Haus ist für euren Komfort <strong>enthärtet und gefiltert</strong> – das System reduziert Kalk und sorgt nach dem Duschen für spürbar weichere Haut und Haare.',
              es: 'El agua del grifo está <strong>descalcificada y filtrada</strong> para vuestra comodidad: el sistema reduce la cal y deja la piel y el pelo notablemente más suaves tras la ducha.',
              nl: 'Het kraanwater is <strong>onthard en gefilterd</strong> voor extra comfort — het systeem vermindert kalkaanslag en zorgt voor merkbaar zachtere huid en haar na het douchen.',
              sv: 'Kranvattnet är <strong>avhärdat och filtrerat</strong> för er komfort — systemet minskar kalkavlagringar och ger märkbart mjukare hud och hår efter duschen.'
            },
            {
              en: 'It is generally safe to drink; if you have a sensitive stomach or prefer a more neutral taste, we recommend bottled water.',
              de: 'Grundsätzlich ist es unbedenklich trinkbar. Falls ihr einen empfindlichen Magen habt oder einen geschmacksneutraleren Genuss bevorzugt, empfehlen wir Mineralwasser aus der Flasche.',
              es: 'En general es segura para beber; si tenéis el estómago sensible o preferís un sabor más neutro, os recomendamos agua embotellada.',
              nl: 'Het is over het algemeen veilig om te drinken. Hebben jullie een gevoelige maag of geven jullie de voorkeur aan een neutralere smaak, dan raden we flessenwater aan.',
              sv: 'Det är i regel säkert att dricka. Har ni en känslig mage eller föredrar en mer neutral smak rekommenderar vi vatten på flaska.'
            }
          ]
        },
        {
          icon: 'no-smoking',
          title: {
            en: 'No Smoking Indoors',
            de: 'Rauchen im Innenbereich verboten',
            es: 'No se permite fumar en el interior',
            nl: 'Niet roken binnen',
            sv: 'Rökning inomhus förbjuden'
          },
          body: [
            {
              en: 'Smoking is strictly prohibited indoors. Please smoke only outside and dispose of cigarette ends responsibly.',
              de: 'Das Rauchen ist im Innenbereich strengstens untersagt. Bitte raucht nur draußen und entsorgt Zigarettenstummel verantwortungsvoll.',
              es: 'Está terminantemente prohibido fumar en el interior. Por favor, fumad solo en el exterior y desechad las colillas de forma responsable.',
              nl: 'Binnen roken is ten strengste verboden. Rook alstublieft alleen buiten en gooi sigarettenpeuken op een verantwoorde manier weg.',
              sv: 'Rökning är strängt förbjuden inomhus. Vänligen rök endast utomhus och kasta fimpar på ett ansvarsfullt sätt.'
            }
          ]
        },
        {
          icon: 'ventilate',
          title: {
            en: 'Ventilate Regularly',
            de: 'Regelmäßig lüften',
            es: 'Ventilad regularmente',
            nl: 'Regelmatig ventileren',
            sv: 'Vädra regelbundet'
          },
          body: [
            {
              en: 'This is a listed house over 800 years old, so we kindly ask you to ventilate it regularly — the traditional construction relies on fresh air circulation to keep a comfortable indoor climate.',
              de: 'Da es sich um ein über 800 Jahre altes, denkmalgeschütztes Haus handelt, bitten wir euch, es regelmäßig zu lüften – die traditionelle Bauweise braucht die Zirkulation frischer Luft, um ein angenehmes Raumklima zu erhalten.',
              es: 'Se trata de una casa catalogada con más de 800 años de antigüedad, así que os pedimos que la ventiléis con regularidad: la construcción tradicional necesita que circule aire fresco para mantener un ambiente interior agradable.',
              nl: 'Dit is een monumentaal pand van meer dan 800 jaar oud, dus we vragen jullie vriendelijk om regelmatig te ventileren — de traditionele bouwwijze heeft frisse luchtcirculatie nodig voor een aangenaam binnenklimaat.',
              sv: 'Detta är ett k-märkt hus, över 800 år gammalt, så vi ber er vänligen att vädra det regelbundet — den traditionella konstruktionen behöver frisk luftcirkulation för ett behagligt inomhusklimat.'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Check-out', de: 'Check-out', es: 'Check-out', nl: 'Check-out', sv: 'Check-out' },
      items: [
        {
          icon: 'departure',
          title: {
            en: 'Departure Information',
            de: 'Abreise',
            es: 'Salida',
            nl: 'Vertrek',
            sv: 'Avresa'
          },
          body: [
            {
              en: 'Check-out time is <strong>11:00 AM</strong>. Before you leave, please log out of any private TV or streaming accounts, and take one last calm look around the apartment.',
              de: 'Check-out ist um <strong>11:00 Uhr</strong>. Bitte loggt euch vor der Abreise aus allen privaten TV- oder Streaming-Konten aus und werft noch einmal einen letzten ruhigen Blick durch das Apartment.',
              es: 'La hora de check-out es a las <strong>11:00</strong>. Antes de salir, cerrad la sesión de cualquier cuenta privada de televisión o streaming y echad un último vistazo tranquilo al apartamento.',
              nl: 'De check-out tijd is <strong>11:00 uur</strong>. Log voor vertrek uit alle privé tv- of streamingaccounts en werp nog één laatste rustige blik door het appartement.',
              sv: 'Utcheckning är kl. <strong>11:00</strong>. Innan ni åker, logga ut från alla privata tv- eller streamingkonton och ta en sista lugn titt runt i lägenheten.'
            },
            {
              en: 'Please check carefully that you have taken all your belongings — phone chargers, curling irons, jackets, EarPods or AirPods, jewellery, clothing, and charging cables are the items most often left behind.',
              de: 'Bitte prüft sorgfältig, ob ihr wirklich alle persönlichen Gegenstände wieder mitgenommen habt. Typischerweise vergessen werden Handy-Ladegeräte, Lockenstäbe, Jacken, EarPods oder AirPods, Schmuck, Kleidung und Ladekabel.',
              es: 'Comprobad con cuidado que os lleváis todas vuestras pertenencias: los objetos que más se olvidan son cargadores de móvil, rizadores, chaquetas, EarPods o AirPods, joyas, ropa y cables de carga.',
              nl: 'Controleer goed of jullie echt alle persoonlijke spullen hebben meegenomen. Vaak vergeten: telefoonopladers, krultangen, jassen, EarPods of AirPods, sieraden, kleding en oplaadkabels.',
              sv: 'Kontrollera noggrant att ni fått med er alla personliga tillhörigheter. Det som glöms oftast är mobilladdare, locktänger, jackor, EarPods eller AirPods, smycken, kläder och laddkablar.'
            },
            {
              en: 'When you leave, please leave one set of keys inside the apartment, lock the door, and return the other key to the key box. Before heading out, please take your rubbish to the containers down on Avenida Carlos Cano, where you most likely also parked. Thank you very much for your help.',
              de: 'Lasst beim Verlassen bitte ein Schlüsselset im Apartment liegen, schließt die Tür ab und legt den anderen Schlüssel zurück in die Schlüsselbox. Nehmt euren Müll bitte mit zu den Containern unten an der Avenida Carlos Cano, wo ihr vermutlich auch euer Auto geparkt habt. Vielen Dank für eure Hilfe.',
              es: 'Al marcharos, dejad un juego de llaves dentro del apartamento, cerrad la puerta y devolved la otra llave a la caja de seguridad. Antes de salir, llevad la basura a los contenedores de abajo, en la Avenida Carlos Cano, donde probablemente también aparcasteis. Muchas gracias por vuestra ayuda.',
              nl: 'Laat bij vertrek één sleutelset in het appartement achter, doe de deur op slot en leg de andere sleutel terug in het sleutelkastje. Breng het afval voor vertrek naar de containers beneden aan de Avenida Carlos Cano, waar jullie waarschijnlijk ook de auto hebben geparkeerd. Hartelijk dank voor jullie hulp.',
              sv: 'Vid avfärd, lämna ett set nycklar inne i lägenheten, lås dörren och lägg tillbaka den andra nyckeln i nyckelboxen. Ta med soporna till containrarna nere på Avenida Carlos Cano, där ni troligen också parkerade, innan ni åker. Tack så mycket för hjälpen.'
            }
          ]
        },
        {
          icon: 'late-checkout',
          title: { en: 'Late Check-out', de: 'Late Check-out', es: 'Late check-out', nl: 'Late check-out', sv: 'Sen utcheckning' },
          body: [
            {
              en: 'Like many apartments in Frigiliana, ours is prepared by a private cleaner rather than a hotel-style team, so we kindly ask you to respect the regular <strong>11:00 AM</strong> check-out time.',
              de: 'Wie viele Apartments in Frigiliana wird auch unseres von einer privaten Reinigungskraft vorbereitet und nicht von einem hotelähnlichen Team. Deshalb bitten wir euch, die reguläre Check-out-Zeit um <strong>11:00 Uhr</strong> zu respektieren.',
              es: 'Como muchos apartamentos en Frigiliana, el nuestro lo prepara una persona de limpieza privada y no un equipo tipo hotel, así que os pedimos que respetéis la hora habitual de check-out a las <strong>11:00</strong>.',
              nl: 'Zoals veel appartementen in Frigiliana wordt ons appartement schoongemaakt door een particuliere schoonmaker en niet door een hotelachtig team. Daarom vragen we jullie de reguliere check-outtijd van <strong>11:00 uur</strong> te respecteren.',
              sv: 'Precis som många lägenheter i Frigiliana städas vår av en privat städperson och inte av ett hotellteam. Vi ber er därför att respektera den ordinarie utcheckningstiden kl. <strong>11:00</strong>.'
            },
            {
              en: 'Staying until <strong>6:00 PM</strong> may be possible for <strong>55 EUR</strong>. Since this means holding the apartment back from a possible new arrival, late check-out must be arranged and confirmed with us in advance — please message us as early as possible if you would like to request it.',
              de: 'Wenn ihr das Apartment bis <strong>18:00 Uhr</strong> nutzen möchtet, ist das gegen <strong>55 EUR</strong> möglich. Da wir das Apartment dafür für eine mögliche neue Anreise freihalten müssen, muss ein Late Check-out vorab mit uns abgestimmt und von uns bestätigt werden – schreibt uns dafür bitte so früh wie möglich.',
              es: 'Permanecer hasta las <strong>18:00</strong> puede ser posible por <strong>55 EUR</strong>. Como esto implica mantener el apartamento no disponible para una posible nueva llegada, el late check-out debe acordarse y confirmarse con nosotros de antemano; escribidnos con la mayor antelación posible si queréis solicitarlo.',
              nl: 'Tot <strong>18:00 uur</strong> blijven kan mogelijk zijn voor <strong>55 EUR</strong>. Omdat we het appartement hiervoor niet beschikbaar houden voor een mogelijke nieuwe aankomst, moet een late check-out vooraf met ons worden afgestemd en bevestigd — stuur ons daarvoor zo vroeg mogelijk een bericht.',
              sv: 'Att stanna till <strong>18:00</strong> kan vara möjligt för <strong>55 EUR</strong>. Eftersom detta innebär att vi håller lägenheten otillgänglig för en eventuell ny ankomst måste sen utcheckning avtalas och bekräftas med oss i förväg — skicka gärna ett meddelande så tidigt som möjligt om ni vill begära det.'
            }
          ]
        }
      ]
    }
  ]
};

const placeholderCategory: LocalizedText = {
  en: 'Coming soon',
  de: 'Folgt in Kürze',
  es: 'Próximamente',
  nl: 'Binnenkort beschikbaar',
  sv: 'Kommer snart'
};

const placeholderBody: LocalizedText = {
  en: 'This page is being prepared and will be filled in shortly.',
  de: 'Diese Seite wird gerade vorbereitet und in Kürze mit Inhalten gefüllt.',
  es: 'Esta página está en preparación y se completará en breve.',
  nl: 'Deze pagina wordt momenteel voorbereid en binnenkort aangevuld.',
  sv: 'Den här sidan förbereds och fylls i inom kort.'
};

// TODO: replace with real content once supplied for Frigiliana Essentials.
const frigilianaEssentials: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-essentials',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_WHATSAPP,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Essentials | AMARA',
    de: 'Frigiliana kompakt | AMARA',
    es: 'Lo esencial de Frigiliana | AMARA',
    nl: 'Frigiliana essentials | AMARA',
    sv: 'Det viktigaste i Frigiliana | AMARA'
  },
  seoDescription: placeholderBody,
  kicker: {
    en: 'FRIGILIANA GUEST GUIDE',
    de: 'FRIGILIANA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN FRIGILIANA',
    nl: 'FRIGILIANA GASTENGIDS',
    sv: 'FRIGILIANA GÄSTGUIDE'
  },
  title: {
    en: 'Frigiliana Essentials',
    de: 'Frigiliana kompakt',
    es: 'Lo esencial de Frigiliana',
    nl: 'Frigiliana essentials',
    sv: 'Det viktigaste i Frigiliana'
  },
  categories: [{ heading: placeholderCategory, items: [{ icon: 'location-pin', title: placeholderCategory, body: [placeholderBody] }] }]
};

// TODO: replace with real content once supplied for Our Recommendations.
const frigilianaRecommendations: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-recommendations',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_WHATSAPP,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Our Recommendations | AMARA',
    de: 'Unsere Empfehlungen | AMARA',
    es: 'Nuestras recomendaciones | AMARA',
    nl: 'Onze aanbevelingen | AMARA',
    sv: 'Våra rekommendationer | AMARA'
  },
  seoDescription: placeholderBody,
  kicker: {
    en: 'FRIGILIANA GUEST GUIDE',
    de: 'FRIGILIANA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN FRIGILIANA',
    nl: 'FRIGILIANA GASTENGIDS',
    sv: 'FRIGILIANA GÄSTGUIDE'
  },
  title: {
    en: 'Our Recommendations',
    de: 'Unsere Empfehlungen',
    es: 'Nuestras recomendaciones',
    nl: 'Onze aanbevelingen',
    sv: 'Våra rekommendationer'
  },
  categories: [{ heading: placeholderCategory, items: [{ icon: 'compass', title: placeholderCategory, body: [placeholderBody] }] }]
};

export const guestGuideFrigiliana: GuestGuideEntry[] = [
  frigilianaFarahHub,
  frigilianaFarahAccommodation,
  frigilianaEssentials,
  frigilianaRecommendations
];
