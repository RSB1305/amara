import type { GuestGuideAccordionItem, GuestGuideEntry, LocalizedText } from '../types/guestGuide';
import { buildBookingLandingUrl } from '../lib/directBooking';

const FRIGILIANA_SUPPORT_EMAIL = 'mailto:hola@amara-lodging.es';
const NEED_HELP: LocalizedText = {
  en: 'Need Help?',
  de: 'Braucht ihr Hilfe?',
  es: '¿Necesitáis ayuda?',
  nl: 'Hulp nodig?',
  sv: 'Behöver ni hjälp?'
};

const HOUSEKEEPING_WHATSAPP = 'https://wa.me/34652072384';
const FRIGILIANA_GOOGLE_REVIEW_URL = 'https://g.page/r/CfOMtRVdxhzKEAE/review';
const LEAVE_GOOGLE_REVIEW: LocalizedText = {
  en: 'Leave a Google Review',
  de: 'Google-Bewertung abgeben',
  es: 'Dejar una reseña en Google',
  nl: 'Een Google-review achterlaten',
  sv: 'Lämna en Google-recension'
};

// Identical sign-off on every hub page across every apartment/location — single source.
const AMARA_SIGN_OFF: LocalizedText = {
  en: 'Warm regards,<br>Robert',
  de: 'Herzliche Grüße,<br>Robert',
  es: 'Un afectuoso saludo,<br>Robert',
  nl: 'Hartelijke groeten,<br>Robert',
  sv: 'Varma hälsningar,<br>Robert'
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

// Shared accordion items reused across every AMARA apartment that occupies the same
// historic-center building (same address, same access route, same amenities). Editing
// one of these updates every apartment page that references it — see MEMORY notes on
// the "Baukasten" principle. Apartments with genuinely different facts (a different
// building, a different Wi-Fi network) should NOT reuse these — write a local item instead.
const sharedFrigilianaCenterArrivalItem: GuestGuideAccordionItem = {
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
};

const sharedFrigilianaCenterParkingItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraWifiItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraCoolingHeatingItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraCoffeeMachineItem: GuestGuideAccordionItem = {
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
};

// Shared across Lounis and Zaid (identical induction hob / pellet stove hardware); Farah has neither.
const sharedAmaraInductionHobItem: GuestGuideAccordionItem = {
  icon: 'dish',
  title: { en: 'Induction Hob', de: 'Induktionsherd', es: 'Placa de inducción', nl: 'Inductiekookplaat', sv: 'Induktionshäll' },
  body: [
    {
      en: 'The induction hob is simple and safe. Please note: it only activates when <strong>induction-compatible cookware</strong> is placed on the cooking zone.',
      de: 'Der Induktionsherd ist einfach und sicher zu bedienen. Bitte beachtet: Er schaltet sich nur ein, wenn <strong>induktionsgeeignetes Kochgeschirr</strong> auf der Kochzone steht.',
      es: 'La placa de inducción es sencilla y segura. Tened en cuenta que solo se activa cuando se coloca <strong>menaje apto para inducción</strong> sobre la zona de cocción.',
      nl: 'De inductiekookplaat is eenvoudig en veilig in gebruik. Let op: hij wordt alleen geactiveerd als er <strong>inductiegeschikte pannen</strong> op de kookzone staan.',
      sv: 'Induktionshällen är enkel och säker att använda. Vänligen observera: den aktiveras endast när <strong>induktionsanpassade kokkärl</strong> placeras på kokzonen.'
    },
    {
      en: 'To cook: place a suitable pot or pan on the hob, press <strong>On/Off</strong>, select the cooking zone, then adjust the power level (1–9).',
      de: 'Zum Kochen: Stellt einen passenden Topf oder eine Pfanne auf das Kochfeld, drückt <strong>On/Off</strong>, wählt die Kochzone aus und stellt dann die Leistungsstufe (1–9) ein.',
      es: 'Para cocinar: colocad una olla o sartén adecuada en la placa, pulsad <strong>On/Off</strong>, seleccionad la zona de cocción y ajustad el nivel de potencia (1–9).',
      nl: 'Om te koken: zet een geschikte pot of pan op de kookplaat, druk op <strong>On/Off</strong>, selecteer de kookzone en stel het vermogen in (1–9).',
      sv: 'För att laga mat: ställ en lämplig kastrull eller stekpanna på hällen, tryck på <strong>On/Off</strong>, välj kokzon och ställ in effekten (1–9).'
    },
    {
      en: 'If you see <strong>"Lo"</strong>, the child lock is active. Press and hold the <strong>Child Lock</strong> button for about 3 seconds to unlock.',
      de: 'Wenn ihr <strong>„Lo"</strong> seht, ist die Kindersicherung aktiv. Haltet die Taste <strong>Kindersicherung</strong> für etwa 3 Sekunden gedrückt, um sie zu entsperren.',
      es: 'Si veis <strong>"Lo"</strong>, el bloqueo infantil está activo. Mantened pulsado el botón de <strong>Bloqueo infantil</strong> durante unos 3 segundos para desbloquearlo.',
      nl: 'Als jullie <strong>"Lo"</strong> zien, is het kinderslot geactiveerd. Houd de knop <strong>Kinderslot</strong> ongeveer 3 seconden ingedrukt om te ontgrendelen.',
      sv: 'Om ni ser <strong>"Lo"</strong> är barnspärren aktiverad. Tryck och håll in knappen för <strong>Barnspärr</strong> i cirka 3 sekunder för att låsa upp.'
    },
    {
      en: 'Lower levels are ideal for gentle simmering; higher levels are best for boiling water or searing.',
      de: 'Niedrigere Stufen eignen sich hervorragend für sanftes Köcheln; höhere Stufen sind am besten, um Wasser zum Kochen zu bringen oder scharf anzubraten.',
      es: 'Los niveles bajos son ideales para cocinar a fuego lento; los más altos son perfectos para hervir agua o marcar alimentos.',
      nl: 'Lagere standen zijn ideaal om zachtjes te laten sudderen; hogere standen zijn het beste om water aan de kook te brengen of vlees dicht te schroeien.',
      sv: 'Lägre nivåer är idealiska för att sjuda försiktigt; högre nivåer passar bäst för att koka upp vatten eller bryna maten.'
    }
  ],
  images: [
    {
      src: '/images/amara-lounis/induction-hob-zones.jpg',
      alt: {
        en: 'Induction hob control panel showing zone selection and On/Off button',
        de: 'Bedienfeld des Induktionsherds mit Kochzonenauswahl und Ein/Aus-Taste',
        es: 'Panel de control de la placa de inducción con selección de zona y botón de encendido/apagado',
        nl: 'Bedieningspaneel van de inductiekookplaat met zone-selectie en aan/uit-knop',
        sv: 'Induktionshällens kontrollpanel med zonval och På/Av-knapp'
      },
      caption: {
        en: 'Zone selection and On/Off button',
        de: 'Kochzonenauswahl und Ein/Aus-Taste',
        es: 'Selección de zona y botón de encendido/apagado',
        nl: 'Zone-selectie en aan/uit-knop',
        sv: 'Zonval och På/Av-knapp'
      }
    },
    {
      src: '/images/amara-lounis/induction-hob-child-lock.jpg',
      alt: {
        en: 'Induction hob control panel with the child lock button highlighted',
        de: 'Bedienfeld des Induktionsherds mit hervorgehobener Kindersicherungstaste',
        es: 'Panel de control de la placa de inducción con el botón de bloqueo infantil resaltado',
        nl: 'Bedieningspaneel van de inductiekookplaat met de kinderslotknop gemarkeerd',
        sv: 'Induktionshällens kontrollpanel med barnspärrsknappen markerad'
      },
      caption: {
        en: 'Child lock button',
        de: 'Kindersicherungstaste',
        es: 'Botón de bloqueo infantil',
        nl: 'Kinderslotknop',
        sv: 'Barnspärrsknapp'
      }
    },
    {
      src: '/images/amara-lounis/induction-hob-power-levels.jpg',
      alt: {
        en: 'Induction hob control panel showing the power level slider (1-9)',
        de: 'Bedienfeld des Induktionsherds mit dem Regler für die Leistungsstufen (1–9)',
        es: 'Panel de control de la placa de inducción con el control deslizante de potencia (1-9)',
        nl: 'Bedieningspaneel van de inductiekookplaat met de vermogensschuif (1-9)',
        sv: 'Induktionshällens kontrollpanel med reglaget för effektnivå (1–9)'
      },
      caption: {
        en: 'Power level (1–9)',
        de: 'Leistungsstufe (1–9)',
        es: 'Nivel de potencia (1–9)',
        nl: 'Vermogensniveau (1–9)',
        sv: 'Effektnivå (1–9)'
      }
    }
  ]
};

const sharedAmaraPelletStoveItem: GuestGuideAccordionItem = {
  icon: 'flame',
  title: { en: 'Pellet Stove', de: 'Pelletofen', es: 'Estufa de pellets', nl: 'Pelletkachel', sv: 'Pelletskamin' },
  body: [
    {
      en: 'Please use <strong>certified 6 mm wood pellets only</strong>. Keep the <strong>door closed</strong> while running.',
      de: 'Bitte verwendet <strong>nur zertifizierte 6-mm-Holzpellets</strong>. Lasst die <strong>Tür geschlossen</strong>, während der Ofen in Betrieb ist.',
      es: 'Por favor, utilizad <strong>solo pellets de madera certificados de 6 mm</strong>. Mantened la <strong>puerta cerrada</strong> mientras esté en funcionamiento.',
      nl: 'Gebruik <strong>uitsluitend gecertificeerde houtpellets van 6 mm</strong>. Houd de <strong>deur gesloten</strong> terwijl de kachel aanstaat.',
      sv: 'Vänligen använd <strong>endast certifierade 6 mm träpellets</strong>. Håll <strong>dörren stängd</strong> under drift.'
    },
    {
      en: '<strong>Quick start</strong>',
      de: '<strong>Kurzanleitung</strong>',
      es: '<strong>Guía de inicio rápido</strong>',
      nl: '<strong>Snel aan de slag</strong>',
      sv: '<strong>Snabbstart</strong>'
    },
    {
      en: '<ol><li>Check pellets in the hopper (top) and refill if needed.</li><li>Press and hold <strong>ON/OFF</strong> for ~3 seconds (auto ignition).</li><li>Give it a few minutes — the stove starts in phases automatically.</li></ol>',
      de: '<ol><li>Prüft die Pellets im Tank (oben) und füllt sie bei Bedarf nach.</li><li>Haltet <strong>ON/OFF</strong> für ca. 3 Sekunden gedrückt (automatische Zündung).</li><li>Gebt dem Ofen ein paar Minuten – er startet ganz automatisch in verschiedenen Phasen.</li></ol>',
      es: '<ol><li>Comprobad los pellets en el depósito (parte superior) y rellenadlo si es necesario.</li><li>Mantened pulsado <strong>ON/OFF</strong> durante unos 3 segundos (encendido automático).</li><li>Dadle unos minutos: la estufa se inicia sola por fases.</li></ol>',
      nl: '<ol><li>Controleer de pellets in de voorraadbak (bovenop) en vul ze indien nodig bij.</li><li>Houd <strong>ON/OFF</strong> ongeveer 3 seconden ingedrukt (automatische ontsteking).</li><li>Geef de kachel even de tijd — hij start automatisch in verschillende fasen op.</li></ol>',
      sv: '<ol><li>Kontrollera pelletsen i behållaren (ovanpå) och fyll på vid behov.</li><li>Tryck och håll in <strong>ON/OFF</strong> i ca 3 sekunder (automatisk tändning).</li><li>Ge den några minuter – kaminen startar automatiskt i olika faser.</li></ol>'
    },
    {
      en: '<strong>Controls</strong><br><strong>Temperature:</strong> 1 / 2 &nbsp; <strong>More heat:</strong> 6 &nbsp; <strong>Less heat:</strong> 5',
      de: '<strong>Bedienung</strong><br><strong>Temperatur:</strong> 1 / 2 &nbsp; <strong>Mehr Wärme:</strong> 6 &nbsp; <strong>Weniger Wärme:</strong> 5',
      es: '<strong>Controles</strong><br><strong>Temperatura:</strong> 1 / 2 &nbsp; <strong>Más calor:</strong> 6 &nbsp; <strong>Menos calor:</strong> 5',
      nl: '<strong>Bediening</strong><br><strong>Temperatuur:</strong> 1 / 2 &nbsp; <strong>Meer warmte:</strong> 6 &nbsp; <strong>Minder warmte:</strong> 5',
      sv: '<strong>Kontroller</strong><br><strong>Temperatur:</strong> 1 / 2 &nbsp; <strong>Mer värme:</strong> 6 &nbsp; <strong>Mindre värme:</strong> 5'
    },
    {
      en: '<strong>Turning off:</strong> press and hold <strong>ON/OFF</strong> for ~3 seconds. The fans may run briefly while cooling down.',
      de: '<strong>Ausschalten:</strong> Haltet <strong>ON/OFF</strong> für ca. 3 Sekunden gedrückt. Die Lüfter können während des Abkühlens noch kurz nachlaufen.',
      es: '<strong>Apagado:</strong> mantened pulsado <strong>ON/OFF</strong> durante unos 3 segundos. Es posible que los ventiladores sigan funcionando brevemente mientras se enfría.',
      nl: '<strong>Uitschakelen:</strong> houd <strong>ON/OFF</strong> ongeveer 3 seconden ingedrukt. De ventilatoren kunnen tijdens het afkoelen nog even blijven draaien.',
      sv: '<strong>Avstängning:</strong> tryck och håll in <strong>ON/OFF</strong> i ca 3 sekunder. Fläktarna kan fortsätta att gå en kort stund medan den svalnar.'
    },
    {
      en: '<strong>Quick alarm help</strong><br><strong>AL-06 NO PELLET</strong> → Refill pellets and restart.<br><strong>AL-05 LIGHTING FAILURE</strong> → Let it cool down, then restart once.',
      de: '<strong>Schnelle Hilfe bei Alarmen</strong><br><strong>AL-06 NO PELLET</strong> → Füllt Pellets nach und startet den Ofen neu.<br><strong>AL-05 LIGHTING FAILURE</strong> → Lasst den Ofen abkühlen und startet ihn dann einmal neu.',
      es: '<strong>Ayuda rápida con alarmas</strong><br><strong>AL-06 NO PELLET</strong> → Rellenad los pellets y reiniciad.<br><strong>AL-05 LIGHTING FAILURE</strong> → Dejad que se enfríe y volved a iniciarlo una vez.',
      nl: '<strong>Snelle hulp bij storingen</strong><br><strong>AL-06 NO PELLET</strong> → Vul de pellets bij en start opnieuw op.<br><strong>AL-05 LIGHTING FAILURE</strong> → Laat de kachel afkoelen en start hem daarna een keer opnieuw.',
      sv: '<strong>Snabbhjälp vid larm</strong><br><strong>AL-06 NO PELLET</strong> → Fyll på pellets och starta om.<br><strong>AL-05 LIGHTING FAILURE</strong> → Låt den svalna och starta sedan om den en gång.'
    },
    {
      en: 'Clean only when cold. If an alarm persists, please message us — we\'ll help immediately.',
      de: 'Bitte reinigt den Ofen nur, wenn er kalt ist. Falls ein Alarm bestehen bleibt, schreibt uns einfach – wir helfen euch sofort weiter.',
      es: 'Limpiadla solo cuando esté fría. Si persiste una alarma, escribidnos por favor: os ayudaremos de inmediato.',
      nl: 'Reinig de kachel alleen als deze koud is. Mocht er een storing blijven aanhouden, stuur ons dan even een berichtje — we helpen jullie meteen verder.',
      sv: 'Rengör endast när kaminen är kall. Om ett larm kvarstår, skicka gärna ett meddelande till oss – vi hjälper er direkt.'
    }
  ]
};

// Shared across all three Frigiliana apartments (Farah, Lounis, Zaid) — identical policy/facts.
const sharedAmaraHousekeepingItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraGarbageItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraQuietHoursItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraTapWaterItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraNoSmokingItem: GuestGuideAccordionItem = {
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
};

const sharedAmaraVentilateItem: GuestGuideAccordionItem = {
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
      en: 'The house stands in Frigiliana’s protected old town and is built the traditional way, so we kindly ask you to ventilate it regularly — the old walls rely on fresh air circulation to keep a comfortable indoor climate.',
      de: 'Das Haus steht in Frigilianas denkmalgeschützter Altstadt und ist in traditioneller Bauweise errichtet. Bitte lüftet regelmäßig – die alten Mauern brauchen die Zirkulation frischer Luft, um ein angenehmes Raumklima zu erhalten.',
      es: 'La casa está en el casco antiguo protegido de Frigiliana y es de construcción tradicional, así que os pedimos que la ventiléis con regularidad: los muros antiguos necesitan que circule aire fresco para mantener un ambiente interior agradable.',
      nl: 'Het huis staat in de beschermde oude kern van Frigiliana en is op traditionele wijze gebouwd, dus we vragen jullie vriendelijk om regelmatig te ventileren — de oude muren hebben frisse luchtcirculatie nodig voor een aangenaam binnenklimaat.',
      sv: 'Huset ligger i Frigilianas skyddade gamla by och är byggt på traditionellt vis, så vi ber er vänligen att vädra regelbundet — de gamla murarna behöver frisk luftcirkulation för ett behagligt inomhusklimat.'
    }
  ]
};

const sharedAmaraDepartureInfoItem: GuestGuideAccordionItem = {
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
};

// Farah has a flat late check-out fee — Lounis and Zaid share seasonal pricing instead (see below).
const sharedAmaraLateCheckoutSeasonalItem: GuestGuideAccordionItem = {
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
      en: 'If you would like to stay in the apartment until <strong>6:00 PM</strong>, this may be possible for <strong>€65</strong> from October to April and <strong>€90</strong> from May to September. Since this means holding the apartment back from a possible new arrival, late check-out must be arranged and confirmed with us in advance — please message us as early as possible if you would like to request it.',
      de: 'Wenn ihr das Apartment bis <strong>18:00 Uhr</strong> nutzen möchtet, ist dies möglicherweise von Oktober bis April für <strong>65 €</strong> und von Mai bis September für <strong>90 €</strong> möglich. Da wir das Apartment dafür für eine mögliche neue Anreise freihalten müssen, muss ein Late Check-out vorab mit uns abgestimmt und von uns bestätigt werden – schreibt uns dafür bitte so früh wie möglich.',
      es: 'Si queréis permanecer en el apartamento hasta las <strong>18:00</strong>, esto puede ser posible por <strong>65 €</strong> de octubre a abril y <strong>90 €</strong> de mayo a septiembre. Como esto implica mantener el apartamento no disponible para una posible nueva llegada, el late check-out debe acordarse y confirmarse con nosotros de antemano; escribidnos con la mayor antelación posible si queréis solicitarlo.',
      nl: 'Als jullie het appartement tot <strong>18:00 uur</strong> willen blijven gebruiken, is dit mogelijk voor <strong>€65</strong> van oktober tot april en <strong>€90</strong> van mei tot september. Omdat we het appartement hiervoor niet beschikbaar houden voor een mogelijke nieuwe aankomst, moet een late check-out vooraf met ons worden afgestemd en bevestigd — stuur ons daarvoor zo vroeg mogelijk een bericht.',
      sv: 'Om ni vill använda lägenheten fram till <strong>18:00</strong> kan detta vara möjligt för <strong>€65</strong> från oktober till april och <strong>€90</strong> från maj till september. Eftersom detta innebär att vi håller lägenheten otillgänglig för en eventuell ny ankomst måste sen utcheckning avtalas och bekräftas med oss i förväg — skicka gärna ett meddelande så tidigt som möjligt om ni vill begära det.'
    }
  ]
};

// Shared across Zaid and Maha (identical starter supplies, no dishwasher tablets); Lounis's list differs.
const sharedAmaraStarterSuppliesItem: GuestGuideAccordionItem = {
  icon: 'cart',
  title: { en: 'Starter Supplies', de: 'Startausstattung', es: 'Suministros iniciales', nl: 'Startbenodigdheden', sv: 'Startförnödenheter' },
  body: [
    {
      en: 'To make your arrival easy, we provide a thoughtful <strong>starter supply</strong> of everyday essentials — usually things like toilet paper, bin bags, and a few basic cleaning items.',
      de: 'Damit ihr entspannt ankommen könnt, stellen wir euch eine sorgfältige <strong>Startausstattung</strong> mit den wichtigsten Verbrauchsmaterialien bereit – meist Dinge wie Toilettenpapier, Mülltüten und einige grundlegende Reinigungsartikel.',
      es: 'Para que vuestra llegada sea cómoda, dejamos una <strong>dotación inicial</strong> con los artículos básicos más importantes: normalmente papel higiénico, bolsas de basura y algunos productos básicos de limpieza.',
      nl: 'Om jullie aankomst zo makkelijk mogelijk te maken, zorgen we voor een fijne <strong>startvoorraad</strong> met de belangrijkste dagelijkse benodigdheden — meestal zaken zoals toiletpapier, vuilniszakken en enkele basis schoonmaakbenodigdheden.',
      sv: 'För att göra ankomsten enkel erbjuder vi ett omtänksamt <strong>startpaket</strong> med de viktigaste vardagsartiklarna — vanligtvis saker som toalettpapper, soppåsar och några grundläggande rengöringsartiklar.'
    },
    {
      en: 'As is common in holiday rentals, these supplies are intended for the <strong>start of your stay</strong>. If you need more, please purchase any additional items according to your personal needs.',
      de: 'Wie in Ferienunterkünften üblich, ist diese Ausstattung für den <strong>Start eures Aufenthalts</strong> gedacht. Wenn ihr mehr benötigt, kauft bitte zusätzliche Artikel nach eurem persönlichen Bedarf.',
      es: 'Como es habitual en los alojamientos vacacionales, estos artículos están pensados para el <strong>inicio de vuestra estancia</strong>. Si necesitáis más, podéis comprar lo adicional según vuestras necesidades personales.',
      nl: 'Zoals gebruikelijk is bij vakantiewoningen, zijn deze benodigdheden bedoeld voor het <strong>begin van jullie verblijf</strong>. Als jullie meer nodig hebben, kunnen jullie dit zelf naar behoefte bijkopen.',
      sv: 'Som vanligt i semesterboenden är dessa förnödenheter avsedda för <strong>början av er vistelse</strong>. Om ni behöver mer köper ni enkelt till det efter era egna behov.'
    }
  ]
};

// Shared across all Frigiliana apartments with an outdoor gas stove — currently Maha only.
const sharedAmaraOutdoorGasStoveItem: GuestGuideAccordionItem = {
  icon: 'gas-stove',
  title: {
    en: 'Outdoor Gas Stove',
    de: 'Gasherd in der Außenküche',
    es: 'Cocina de gas exterior',
    nl: 'Gasfornuis buitenkeuken',
    sv: 'Gasspis i uteköket'
  },
  body: [
    {
      en: 'The outdoor kitchen has a gas stove connected to a gas bottle. Before using it, push the black lever on top of the gas regulator fully down until it clicks into place — this opens the gas supply.',
      de: 'Die Außenküche hat einen Gasherd, der mit einer Gasflasche verbunden ist. Drückt vor der Benutzung den schwarzen Hebel oben am Gasdruckregler vollständig nach unten, bis er einrastet – dadurch wird die Gaszufuhr geöffnet.',
      es: 'La cocina exterior tiene una cocina de gas conectada a una bombona. Antes de usarla, bajad completamente la palanca negra situada encima del regulador de gas hasta que encaje — así se abre el suministro de gas.',
      nl: 'De buitenkeuken heeft een gasfornuis dat is aangesloten op een gasfles. Duw vóór gebruik de zwarte hendel boven op de gasdrukregelaar helemaal omlaag totdat hij vastklikt — hiermee wordt de gastoevoer geopend.',
      sv: 'Uteköket har en gasspis som är ansluten till en gasflaska. Tryck före användning den svarta spaken ovanpå gasregulatorn hela vägen ned tills den klickar fast — då öppnas gastillförseln.'
    },
    {
      en: 'To light the stove, press the knob down and turn it slowly — this activates the electric spark and lets the gas flow. Keep it pressed for a few seconds until the flame appears, then release and adjust the heat as needed.',
      de: 'Zum Anzünden drückt ihr den Drehknopf nach unten und dreht ihn langsam. Dadurch wird der elektrische Funke aktiviert und das Gas kann strömen. Haltet den Knopf einige Sekunden gedrückt, bis die Flamme erscheint, lasst ihn dann los und stellt die gewünschte Stärke ein.',
      es: 'Para encenderla, presionad el mando hacia abajo y giradlo lentamente — así se activa la chispa eléctrica y empieza a salir el gas. Mantenedlo presionado unos segundos hasta que aparezca la llama, soltadlo y regulad la intensidad.',
      nl: 'Om het fornuis aan te steken, druk je de knop naar beneden en draai je hem langzaam — hierdoor wordt de elektrische vonk geactiveerd en kan het gas stromen. Houd hem enkele seconden ingedrukt tot de vlam verschijnt, laat dan los en stel de gewenste warmte in.',
      sv: 'För att tända spisen trycker ni ner vredet och vrider det långsamt — då aktiveras den elektriska gnistan och gasen börjar flöda. Håll det nedtryckt några sekunder tills lågan tänds, släpp sedan och justera värmen.'
    },
    {
      en: 'If the electric spark does not ignite the gas, you may carefully use a long lighter while pressing and turning the knob.',
      de: 'Falls der elektrische Funke das Gas nicht entzündet, könnt ihr vorsichtig ein langes Stabfeuerzeug verwenden, während ihr den Drehknopf gedrückt haltet und dreht.',
      es: 'Si la chispa eléctrica no enciende el gas, podéis utilizar con cuidado un encendedor largo mientras presionáis y giráis el mando.',
      nl: 'Als de elektrische vonk het gas niet ontsteekt, kunnen jullie voorzichtig een lange aansteker gebruiken terwijl jullie de knop ingedrukt houden en draaien.',
      sv: 'Om den elektriska gnistan inte tänder gasen kan ni försiktigt använda en lång tändare samtidigt som ni håller vredet nedtryckt och vrider det.'
    },
    {
      en: 'After cooking, turn the stove knob fully off, then lift the black lever on the gas regulator fully up to close the gas supply.',
      de: 'Dreht den Herd nach dem Kochen vollständig aus. Hebt anschließend den schwarzen Hebel am Gasdruckregler vollständig nach oben, um die Gaszufuhr zu schließen.',
      es: 'Después de cocinar, apagad completamente la cocina. A continuación, levantad del todo la palanca negra del regulador para cerrar el suministro de gas.',
      nl: 'Draai het fornuis na het koken volledig uit. Til daarna de zwarte hendel op de gasdrukregelaar helemaal omhoog om de gastoevoer af te sluiten.',
      sv: 'Stäng av spisen helt efter matlagningen. Lyft därefter den svarta spaken på gasregulatorn hela vägen upp för att stänga gastillförseln.'
    },
    {
      en: '<strong>Important:</strong> if you smell gas or the flame does not ignite, turn everything off immediately, close the gas supply, and contact us. Please do not continue trying.',
      de: '<strong>Wichtig:</strong> Falls ihr Gas riecht oder sich keine Flamme entzündet, schaltet bitte sofort alles aus, schließt die Gaszufuhr und kontaktiert uns. Bitte versucht es nicht weiter.',
      es: '<strong>Importante:</strong> si oléis a gas o la llama no se enciende, apagad todo inmediatamente, cerrad el suministro de gas y contactad con nosotros. No sigáis intentándolo.',
      nl: '<strong>Belangrijk:</strong> ruiken jullie gas of gaat de vlam niet aan, schakel dan onmiddellijk alles uit, sluit de gastoevoer en neem contact met ons op. Probeer het niet opnieuw.',
      sv: '<strong>Viktigt:</strong> om ni känner gaslukt eller om lågan inte tänds, stäng omedelbart av allt, stäng gastillförseln och kontakta oss. Försök inte igen.'
    }
  ]
};

// Shared across Lounis and Playa (identical starter supplies, includes dishwasher tablets); Zaid/Maha's list differs.
const sharedAmaraStarterSuppliesWithDishwasherTabletsItem: GuestGuideAccordionItem = {
  icon: 'cart',
  title: { en: 'Starter Supplies', de: 'Startausstattung', es: 'Suministros iniciales', nl: 'Startbenodigdheden', sv: 'Startförnödenheter' },
  body: [
    {
      en: 'To make your arrival easy, we provide a thoughtful <strong>starter supply</strong> of everyday essentials — usually things like toilet paper, dishwasher tablets, bin bags, and a few basic cleaning items.',
      de: 'Damit ihr entspannt ankommen könnt, stellen wir euch eine sorgfältige <strong>Startausstattung</strong> mit den wichtigsten Verbrauchsmaterialien bereit – meist Dinge wie Toilettenpapier, Spülmaschinentabs, Mülltüten und einige grundlegende Reinigungsartikel.',
      es: 'Para que vuestra llegada sea cómoda, dejamos una <strong>dotación inicial</strong> con los artículos básicos más importantes: normalmente papel higiénico, pastillas para el lavavajillas, bolsas de basura y algunos productos básicos de limpieza.',
      nl: 'Om jullie aankomst zo makkelijk mogelijk te maken, zorgen we voor een fijne <strong>startvoorraad</strong> met de belangrijkste dagelijkse benodigdheden — meestal zaken zoals toiletpapier, vaatwastabletten, vuilniszakken en enkele basis schoonmaakbenodigdheden.',
      sv: 'För att göra ankomsten enkel erbjuder vi ett omtänksamt <strong>startpaket</strong> med de viktigaste vardagsartiklarna — vanligtvis saker som toalettpapper, diskmaskinstabletter, soppåsar och några grundläggande rengöringsartiklar.'
    },
    {
      en: 'As is common in holiday rentals, these supplies are intended for the <strong>start of your stay</strong>. If you need more, please purchase any additional items according to your personal needs.',
      de: 'Wie in Ferienunterkünften üblich, ist diese Ausstattung für den <strong>Start eures Aufenthalts</strong> gedacht. Wenn ihr mehr benötigt, kauft bitte zusätzliche Artikel nach eurem persönlichen Bedarf.',
      es: 'Como es habitual en los alojamientos vacacionales, estos artículos están pensados para el <strong>inicio de vuestra estancia</strong>. Si necesitáis más, podéis comprar lo adicional según vuestras necesidades personales.',
      nl: 'Zoals gebruikelijk is bij vakantiewoningen, zijn deze benodigdheden bedoeld voor het <strong>begin van jullie verblijf</strong>. Als jullie meer nodig hebben, kunnen jullie dit zelf naar behoefte bijkopen.',
      sv: 'Som vanligt i semesterboenden är dessa förnödenheter avsedda för <strong>början av er vistelse</strong>. Om ni behöver mer köper ni enkelt till det efter era egna behov.'
    }
  ]
};

const frigilianaFarahHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-frigiliana-farah',
  entityKey: 'amara-farah',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide | AMARA',
    de: 'Frigiliana-Gästeguide | AMARA',
    es: 'Guía para huéspedes en Frigiliana | AMARA',
    nl: 'Gastengids voor Frigiliana | AMARA',
    sv: 'Gästguide för Frigiliana | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Frigiliana: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Euer ruhiger, praktischer Guide für Frigiliana: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
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
    de: 'Frigiliana-Gästeguide',
    es: 'Guía para huéspedes en Frigiliana',
    nl: 'Gastengids voor Frigiliana',
    sv: 'Gästguide för Frigiliana'
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
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306383&city=Frigiliana&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  signOff: AMARA_SIGN_OFF
};

const frigilianaFarahAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-frigiliana-farah',
  entityKey: 'amara-farah',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
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
      items: [sharedFrigilianaCenterArrivalItem, sharedFrigilianaCenterParkingItem, sharedAmaraWifiItem, sharedAmaraCoolingHeatingItem]
    },
    {
      heading: {
        en: 'During Your Stay',
        de: 'Während eures Aufenthalts',
        es: 'Durante vuestra estancia',
        nl: 'Tijdens jullie verblijf',
        sv: 'Under er vistelse'
      },
      items: [sharedAmaraCoffeeMachineItem, sharedAmaraHousekeepingItem, sharedAmaraGarbageItem]
    },
    {
      heading: {
        en: 'Please Note',
        de: 'Bitte beachten',
        es: 'A tener en cuenta',
        nl: 'Let op',
        sv: 'Vänligen observera'
      },
      items: [sharedAmaraTapWaterItem, sharedAmaraNoSmokingItem, sharedAmaraVentilateItem, sharedAmaraQuietHoursItem]
    },
    {
      heading: { en: 'Check-out', de: 'Check-out', es: 'Check-out', nl: 'Check-out', sv: 'Check-out' },
      items: [
        sharedAmaraDepartureInfoItem,
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

// Shared across all Frigiliana apartments (Farah, Lounis, Zaid, Maha) — backSlug below
// is only the fallback for a direct visit; SmartBackButton normally retraces the
// actual path via the sessionStorage nav stack (see GuestGuideLayout.astro).
const frigilianaEssentials: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-essentials',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Essentials | AMARA',
    de: 'Frigiliana kompakt | AMARA',
    es: 'Lo esencial de Frigiliana | AMARA',
    nl: 'Frigiliana essentials | AMARA',
    sv: 'Det viktigaste i Frigiliana | AMARA'
  },
  seoDescription: {
    en: 'Everyday essentials near your Frigiliana apartment: supermarkets, bakery, laundry, ATMs, transport and medical help.',
    de: 'Das Wichtigste in der Nähe eures Frigiliana-Apartments: Supermärkte, Bäckerei, Wäscherei, Geldautomaten, Verkehrsmittel und medizinische Hilfe.',
    es: 'Lo esencial cerca de vuestro apartamento en Frigiliana: supermercados, panadería, lavandería, cajeros, transporte y asistencia médica.',
    nl: 'Het belangrijkste in de buurt van jullie appartement in Frigiliana: supermarkten, bakker, wasserij, geldautomaten, vervoer en medische hulp.',
    sv: 'Det viktigaste nära er lägenhet i Frigiliana: livsmedelsbutiker, bageri, tvätt, bankomater, transport och sjukvård.'
  },
  kicker: {
    en: 'FRIGILIANA GUEST GUIDE',
    de: 'FRIGILIANA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN FRIGILIANA',
    nl: 'FRIGILIANA GASTENGIDS',
    sv: 'FRIGILIANA GÄSTGUIDE'
  },
  title: {
    en: 'Local Essentials in Frigiliana',
    de: 'Wichtiges vor Ort in Frigiliana',
    es: 'Información útil en Frigiliana',
    nl: 'Praktische informatie in Frigiliana',
    sv: 'Praktisk information i Frigiliana'
  },
  intro: {
    en: 'A few local essentials to make your stay feel effortless — from fresh bread to practical services nearby.',
    de: 'Ein paar wichtige Dinge vor Ort, die euren Aufenthalt entspannt machen – von frischem Brot bis zu praktischen Services in der Nähe.',
    es: 'Algunos detalles esenciales del entorno para que vuestra estancia sea perfecta: desde pan recién hecho hasta servicios prácticos cercanos.',
    nl: 'Een paar lokale essentials om jullie verblijf moeiteloos te laten verlopen — van vers brood tot handige diensten in de buurt.',
    sv: 'Några lokala tips för att göra er vistelse bekymmersfri – från nybakat bröd till praktisk service i närheten.'
  },
  categories: [
    {
      heading: {
        en: 'Everyday Essentials',
        de: 'Für den Alltag',
        es: 'Para el día a día',
        nl: 'Voor elke dag',
        sv: 'För vardagen'
      },
      items: [
        {
          icon: 'store',
          title: { en: 'Local Tip', de: 'Unser Tipp', es: 'Nuestro consejo', nl: 'Onze tip', sv: 'Vårt tips' },
          body: [
            {
              en: '<strong>One truly local thing to try:</strong> if you see <em>miel de caña</em>, try it. It is Frigiliana\'s best-known local specialty — a rich cane syrup pressed from whole sugar cane, not bee honey and not molasses — and it is lovely with toast, yogurt, fresh cheese, or the classic <em>berenjenas fritas con miel</em>.',
              de: '<strong>Eine wirklich lokale Spezialität:</strong> Wenn ihr irgendwo <em>miel de caña</em> seht, probiert es. Das ist die bekannteste Spezialität Frigilianas — ein kräftiger Zuckerrohrsirup aus eingedicktem Rohrsaft, kein Bienenhonig und keine Melasse — und passt sehr gut zu Toast, Joghurt, frischem Käse oder klassisch zu <em>berenjenas fritas con miel</em>.',
              es: '<strong>Una especialidad realmente local:</strong> si veis <em>miel de caña</em>, probadla. Es una de las especialidades más conocidas de Frigiliana: un jarabe intenso de caña de azúcar elaborado concentrando el jugo entero, no es miel de abeja ni melaza, y combina muy bien con pan tostado, yogur, queso fresco o con las clásicas <em>berenjenas fritas con miel</em>.',
              nl: '<strong>Eén echt lokale specialiteit:</strong> zie je ergens <em>miel de caña</em>, probeer het dan zeker. Het is een van de bekendste specialiteiten van Frigiliana — een rijke suikerrietsiroop van ingedikt rietsap, geen bijenhoning en geen melasse — en lekker op toast, bij yoghurt, verse kaas of klassiek bij <em>berenjenas fritas con miel</em>.',
              sv: '<strong>En verkligt lokal specialitet:</strong> om ni ser <em>miel de caña</em>, prova det gärna. Det är en av Frigilianas mest kända specialiteter — en fyllig sockerrörssirap av indunstad rörsaft, varken bihonung eller melass — och passar fint till rostat bröd, yoghurt, färsk ost eller klassiskt till <em>berenjenas fritas con miel</em>.'
            },
            {
              en: '<strong>The easiest way to get down to Nerja:</strong> for beach time, dinner, or errands, the regular Frigiliana–Nerja bus is often easier than dealing with parking. Timetables can change, so it is worth checking the latest one before you go.',
              de: '<strong>Am einfachsten nach Nerja:</strong> Für Strand, Abendessen oder kleine Erledigungen ist der reguläre Bus zwischen Frigiliana und Nerja oft entspannter als die Parkplatzsuche. Fahrpläne können sich ändern, deshalb lohnt sich ein Blick auf die aktuellen Zeiten vorher.',
              es: '<strong>La forma más fácil de bajar a Nerja:</strong> para ir a la playa, cenar o hacer recados, el autobús regular entre Frigiliana y Nerja suele ser más cómodo que buscar aparcamiento. Los horarios pueden cambiar, así que merece la pena comprobar el más reciente antes de salir.',
              nl: '<strong>De makkelijkste manier om naar Nerja te gaan:</strong> voor strand, diner of boodschappen is de reguliere bus tussen Frigiliana en Nerja vaak ontspannener dan zoeken naar een parkeerplaats. Dienstregelingen kunnen veranderen, dus kijk voor vertrek even naar de actuele tijden.',
              sv: '<strong>Det enklaste sättet att ta sig till Nerja:</strong> för strand, middag eller ärenden är den reguljära bussen mellan Frigiliana och Nerja ofta smidigare än att leta parkering. Tidtabeller kan ändras, så det är klokt att kontrollera den senaste innan ni åker.'
            },
            {
              en: '<strong>Useful market rhythm:</strong> Nerja\'s main market is on Tuesday mornings and is the better option for a proper stock-up. Frigiliana has a smaller Thursday market around Plaza de las Tres Culturas, handy if you just need a few things without driving down.',
              de: '<strong>Nützlicher Marktrhythmus:</strong> Der große Markt in Nerja ist dienstags morgens und eignet sich besser für einen richtigen Vorrats-Einkauf. In Frigiliana gibt es donnerstags rund um die Plaza de las Tres Culturas einen kleineren Markt – praktisch, wenn ihr ohne extra Fahrt nur kurz etwas braucht.',
              es: '<strong>Un ritmo de mercado útil:</strong> el mercado principal de Nerja es los martes por la mañana y es la mejor opción para una compra más completa. En Frigiliana hay un mercado más pequeño los jueves alrededor de la Plaza de las Tres Culturas, práctico si solo necesitáis unas pocas cosas sin bajar en coche.',
              nl: '<strong>Handig marktritme:</strong> de grote markt van Nerja is op dinsdagochtend en is de beste keuze voor een echte voorraadronde. In Frigiliana is er op donderdag een kleinere markt rond Plaza de las Tres Culturas — handig als je zonder extra ritje alleen even iets nodig hebt.',
              sv: '<strong>Ett användbart marknadsupplägg:</strong> Nerjas stora marknad är på tisdag morgon och passar bäst om ni vill fylla på ordentligt. I Frigiliana finns en mindre marknad på torsdagar runt Plaza de las Tres Culturas — praktisk om ni bara behöver några få saker utan att köra ner.'
            },
            {
              en: '<strong>What to ask for if you want something regional:</strong> look for <em>DOP Pasas de Málaga</em> if you want an easy local snack or souvenir, and if you would like a typical regional drink after dinner, ask for <em>Moscatel</em> or <em>vino dulce de Málaga</em>.',
              de: '<strong>Wonach ihr fragen könnt, wenn ihr etwas Regionales möchtet:</strong> Haltet Ausschau nach <em>DOP Pasas de Málaga</em>, wenn ihr einen einfachen lokalen Snack oder ein kleines Mitbringsel sucht. Und wenn ihr nach dem Essen etwas Typisches trinken möchtet, fragt nach <em>Moscatel</em> oder <em>vino dulce de Málaga</em>.',
              es: '<strong>Qué pedir si queréis algo típico de la región:</strong> buscad <em>DOP Pasas de Málaga</em> si os apetece un snack local o un recuerdo fácil de llevar. Y si después de cenar queréis tomar algo típico, podéis pedir <em>Moscatel</em> o <em>vino dulce de Málaga</em>.',
              nl: '<strong>Waar je naar kunt vragen als je iets regionaals wilt:</strong> let op <em>DOP Pasas de Málaga</em> als je een eenvoudige lokale snack of een klein souvenir zoekt. En wil je na het eten iets typisch uit de streek drinken, vraag dan naar <em>Moscatel</em> of <em>vino dulce de Málaga</em>.',
              sv: '<strong>Vad ni kan fråga efter om ni vill ha något regionalt:</strong> håll utkik efter <em>DOP Pasas de Málaga</em> om ni vill ha ett enkelt lokalt snack eller en liten present. Och om ni vill prova något typiskt efter middagen kan ni fråga efter <em>Moscatel</em> eller <em>vino dulce de Málaga</em>.'
            }
          ]
        },
        {
          icon: 'cart',
          title: { en: 'Supermarkets', de: 'Supermärkte', es: 'Supermercados', nl: 'Supermarkten', sv: 'Livsmedelsbutiker' },
          body: [
            {
              en: 'Frigiliana has a few small local supermarkets within walking distance. For a quick and easy shop from the house, we recommend starting with <strong>Supermarket Silvia</strong>.',
              de: 'In Frigiliana gibt es mehrere kleine lokale Supermärkte, die ihr gut zu Fuß erreichen könnt. Für einen schnellen und unkomplizierten Einkauf vom Haus aus empfehlen wir zuerst <strong>Supermarkt Silvia</strong>.',
              es: 'En Frigiliana hay varios pequeños supermercados locales a poca distancia a pie. Para una compra rápida y sencilla desde la casa, os recomendamos empezar por <strong>Supermercado Silvia</strong>.',
              nl: 'In Frigiliana zijn er meerdere kleine lokale supermarkten op loopafstand. Voor een snelle en makkelijke boodschap vanaf het huis raden we aan om eerst naar <strong>Supermarkt Silvia</strong> te gaan.',
              sv: 'Frigiliana har flera små lokala livsmedelsbutiker på gångavstånd. För ett snabbt och enkelt inköp från huset rekommenderar vi att ni börjar med <strong>Supermarket Silvia</strong>.'
            },
            {
              en: '<strong>Quickest option from the house</strong>',
              de: '<strong>Die schnellste Option direkt vom Haus</strong>',
              es: '<strong>La opción más rápida desde la casa</strong>',
              nl: '<strong>De snelste optie vanaf het huis</strong>',
              sv: '<strong>Snabbaste alternativet från huset</strong>'
            },
            {
              en: '• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJNSM8zbEkcg0RRKFBASEvIPc" target="_blank" rel="noopener"><strong>Supermarket Silvia</strong></a> — step outside the house and turn right.',
              de: '• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJNSM8zbEkcg0RRKFBASEvIPc" target="_blank" rel="noopener"><strong>Supermarkt Silvia</strong></a> — einfach aus dem Haus treten und nach rechts gehen.',
              es: '• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJNSM8zbEkcg0RRKFBASEvIPc" target="_blank" rel="noopener"><strong>Supermercado Silvia</strong></a> — salid de la casa y girad a la derecha.',
              nl: '• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJNSM8zbEkcg0RRKFBASEvIPc" target="_blank" rel="noopener"><strong>Supermarkt Silvia</strong></a> — stap het huis uit en ga naar rechts.',
              sv: '• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJNSM8zbEkcg0RRKFBASEvIPc" target="_blank" rel="noopener"><strong>Supermarket Silvia</strong></a> — gå ut ur huset och sväng höger.'
            },
            {
              en: '<strong>Other village options</strong>',
              de: '<strong>Weitere Optionen im Dorf</strong>',
              es: '<strong>Otras opciones en el pueblo</strong>',
              nl: '<strong>Andere opties in het dorp</strong>',
              sv: '<strong>Fler alternativ i byn</strong>'
            },
            {
              en: 'If you want a little more choice, there are one or two other small supermarkets in the village as well:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/Vtimyw8gijGHRtsX7" target="_blank" rel="noopener"><strong>La Plazituela “Saboreando la Comarca”</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/SwRmk8J7nDRTGQzf6" target="_blank" rel="noopener"><strong>Tienda Silveria</strong></a>',
              de: 'Wenn ihr ein bisschen mehr Auswahl möchtet, gibt es im Dorf außerdem noch ein oder zwei weitere kleine Supermärkte:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/Vtimyw8gijGHRtsX7" target="_blank" rel="noopener"><strong>La Plazituela “Saboreando la Comarca”</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/SwRmk8J7nDRTGQzf6" target="_blank" rel="noopener"><strong>Tienda Silveria</strong></a>',
              es: 'Si queréis un poco más de variedad, en el pueblo también hay uno o dos pequeños supermercados más:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/Vtimyw8gijGHRtsX7" target="_blank" rel="noopener"><strong>La Plazituela “Saboreando la Comarca”</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/SwRmk8J7nDRTGQzf6" target="_blank" rel="noopener"><strong>Tienda Silveria</strong></a>',
              nl: 'Als jullie iets meer keuze willen, zijn er in het dorp ook nog een of twee andere kleine supermarkten:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/Vtimyw8gijGHRtsX7" target="_blank" rel="noopener"><strong>La Plazituela “Saboreando la Comarca”</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/SwRmk8J7nDRTGQzf6" target="_blank" rel="noopener"><strong>Tienda Silveria</strong></a>',
              sv: 'Om ni vill ha lite större urval finns det också ytterligare en eller två små livsmedelsbutiker i byn:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/Vtimyw8gijGHRtsX7" target="_blank" rel="noopener"><strong>La Plazituela “Saboreando la Comarca”</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/SwRmk8J7nDRTGQzf6" target="_blank" rel="noopener"><strong>Tienda Silveria</strong></a>'
            },
            {
              en: '<strong>A larger option in Frigiliana</strong>',
              de: '<strong>Eine größere Option in Frigiliana</strong>',
              es: '<strong>Una opción más grande en Frigiliana</strong>',
              nl: '<strong>Een grotere optie in Frigiliana</strong>',
              sv: '<strong>Ett större alternativ i Frigiliana</strong>'
            },
            {
              en: '<strong>EROSKI/city Frigiliana</strong>, in the newer lower part of the village, has a wider range than the small shops in the historic centre. It is still much smaller than the large supermarket formats in Nerja.',
              de: '<strong>EROSKI/city Frigiliana</strong> im neueren, unteren Ortsteil bietet mehr Auswahl als die kleinen Geschäfte im historischen Zentrum. Der Markt ist dennoch deutlich kleiner als die großen Supermarktformate in Nerja.',
              es: '<strong>EROSKI/city Frigiliana</strong>, en la parte nueva y baja del pueblo, ofrece más variedad que las pequeñas tiendas del centro histórico. Sigue siendo bastante más pequeño que los grandes formatos de supermercado de Nerja.',
              nl: '<strong>EROSKI/city Frigiliana</strong>, in het nieuwere lagere deel van het dorp, heeft meer keuze dan de kleine winkels in het historische centrum. De winkel is nog steeds duidelijk kleiner dan de grote supermarktformules in Nerja.',
              sv: '<strong>EROSKI/city Frigiliana</strong>, i den nyare nedre delen av byn, har ett bredare utbud än de små butikerna i det historiska centrumet. Den är fortfarande tydligt mindre än de stora mataffärsformaten i Nerja.'
            },
            {
              en: '<strong>Add Nerja when you want more choice</strong>',
              de: '<strong>Für mehr Auswahl Nerja bei Bedarf ergänzen</strong>',
              es: '<strong>Añadid Nerja cuando queráis más variedad</strong>',
              nl: '<strong>Vul aan met Nerja als jullie meer keuze willen</strong>',
              sv: '<strong>Komplettera med Nerja när ni vill ha större utbud</strong>'
            },
            {
              en: 'Frigiliana works well for normal daily shopping. For a larger basket or specialist products, you can combine a trip to Nerja or the coast with a bigger shop.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJjSZ_9hAlcg0ReZbcNgz4bh8" target="_blank" rel="noopener"><strong>Mercadona (Nerja)</strong></a>',
              de: 'Für normale tägliche Einkäufe funktioniert Frigiliana gut. Einen größeren Warenkorb oder spezielle Produkte könnt ihr bei Bedarf bequem mit einem Ausflug nach Nerja oder ans Meer verbinden.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJjSZ_9hAlcg0ReZbcNgz4bh8" target="_blank" rel="noopener"><strong>Mercadona (Nerja)</strong></a>',
              es: 'Frigiliana funciona bien para la compra diaria normal. Si necesitáis una compra más grande o productos específicos, podéis combinarla cómodamente con una visita a Nerja o a la costa.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJjSZ_9hAlcg0ReZbcNgz4bh8" target="_blank" rel="noopener"><strong>Mercadona (Nerja)</strong></a>',
              nl: 'Frigiliana werkt goed voor normale dagelijkse boodschappen. Voor een grotere winkelmand of specifieke producten kunnen jullie een bezoek aan Nerja of de kust gemakkelijk met een grotere boodschap combineren.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJjSZ_9hAlcg0ReZbcNgz4bh8" target="_blank" rel="noopener"><strong>Mercadona (Nerja)</strong></a>',
              sv: 'Frigiliana fungerar bra för vanliga vardagsinköp. För en större varukorg eller särskilda produkter kan ni enkelt kombinera ett besök i Nerja eller vid kusten med en större handling.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJjSZ_9hAlcg0ReZbcNgz4bh8" target="_blank" rel="noopener"><strong>Mercadona (Nerja)</strong></a>'
            },
            {
              en: '<em>Please note:</em> shopping is also possible on Sundays, with more choice often available in summer. Hours vary by business and season, so check current details outside the main season and on public holidays.',
              de: '<em>Bitte beachten:</em> Auch sonntags gibt es Einkaufsmöglichkeiten; im Sommer ist die Auswahl erfahrungsgemäß größer. Die Zeiten unterscheiden sich je nach Betrieb und Saison, daher lohnt sich außerhalb der Hauptsaison und an Feiertagen ein aktueller Check.',
              es: '<em>A tener en cuenta:</em> también es posible comprar los domingos y en verano suele haber más opciones. Los horarios varían según el negocio y la temporada; fuera de la temporada principal y en festivos conviene comprobarlos.',
              nl: '<em>Let op:</em> ook op zondag zijn er winkelmogelijkheden; in de zomer is de keuze vaak groter. Tijden verschillen per zaak en seizoen, dus controleer de actuele informatie buiten het hoofdseizoen en op feestdagen.',
              sv: '<em>Observera:</em> det går att handla även på söndagar, och på sommaren är utbudet ofta större. Tiderna varierar mellan verksamheter och säsonger, så kontrollera aktuella uppgifter utanför huvudsäsongen och på helgdagar.'
            }
          ]
        },
        {
          icon: 'bread',
          title: { en: 'Bakery', de: 'Bäckerei', es: 'Panadería', nl: 'Bakker', sv: 'Bageri' },
          body: [
            {
              en: 'For fresh bread, we recommend <a class="am-link" href="https://maps.app.goo.gl/hLqVUPJwWETpmaqLA" target="_blank" rel="noopener"><strong>Panadería Manolo</strong></a>. You can get there in about <strong>4 minutes via Calle Real</strong>, and the route is easy because you do <strong>not need to take any stairs</strong>.<br><br>In our view, this is the nicest and simplest bakery option from the house, especially in the morning.',
              de: 'Für frisches Brot empfehlen wir euch <a class="am-link" href="https://maps.app.goo.gl/hLqVUPJwWETpmaqLA" target="_blank" rel="noopener"><strong>Panadería Manolo</strong></a>. Ihr erreicht sie in etwa <strong>4 Minuten über die Calle Real</strong>, und der Weg ist angenehm, weil ihr <strong>keine Treppen</strong> nehmen müsst.<br><br>Aus unserer Sicht ist das vom Haus aus die schönste und einfachste Bäckerei-Option, besonders am Morgen.',
              es: 'Para pan fresco, os recomendamos <a class="am-link" href="https://maps.app.goo.gl/hLqVUPJwWETpmaqLA" target="_blank" rel="noopener"><strong>Panadería Manolo</strong></a>. Se llega en unos <strong>4 minutos por Calle Real</strong>, y el camino es cómodo porque <strong>no hay que subir ni bajar escaleras</strong>.<br><br>Desde la casa, nos parece la opción de panadería más agradable y más fácil, sobre todo por la mañana.',
              nl: 'Voor vers brood raden we <a class="am-link" href="https://maps.app.goo.gl/hLqVUPJwWETpmaqLA" target="_blank" rel="noopener"><strong>Panadería Manolo</strong></a> aan. Jullie lopen er in ongeveer <strong>4 minuten via Calle Real</strong> naartoe, en de route is prettig omdat jullie <strong>geen trappen</strong> hoeven te nemen.<br><br>Vanuit het huis vinden wij dit de fijnste en makkelijkste bakker, vooral in de ochtend.',
              sv: 'För färskt bröd rekommenderar vi <a class="am-link" href="https://maps.app.goo.gl/hLqVUPJwWETpmaqLA" target="_blank" rel="noopener"><strong>Panadería Manolo</strong></a>. Ni tar er dit på cirka <strong>4 minuter via Calle Real</strong>, och vägen är enkel eftersom ni <strong>inte behöver ta några trappor</strong>.<br><br>Från huset tycker vi att detta är det trevligaste och enklaste bagerialternativet, särskilt på morgonen.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Practical Services',
        de: 'Praktische Services',
        es: 'Servicios prácticos',
        nl: 'Handige diensten',
        sv: 'Praktisk service'
      },
      items: [
        {
          icon: 'laundry',
          title: { en: 'Laundry', de: 'Wäsche', es: 'Lavandería', nl: 'Wasgoed', sv: 'Tvätt' },
          body: [
            {
              en: 'If you would like a <strong>drop-off service</strong>, <strong>Lavandería El Acebuchal</strong> is a practical option in Frigiliana and only about <strong>4 minutes from the house</strong>.<br><br>• <a class="am-link" href="https://maps.app.goo.gl/SGDiDiLSsXyMmUKY7" target="_blank" rel="noopener"><strong>Lavandería El Acebuchal</strong></a>',
              de: 'Wenn ihr einen <strong>Wäsche-Abgabe-Service</strong> möchtet, ist <strong>Lavandería El Acebuchal</strong> eine praktische Option in Frigiliana und nur etwa <strong>4 Minuten vom Haus entfernt</strong>.<br><br>• <a class="am-link" href="https://maps.app.goo.gl/SGDiDiLSsXyMmUKY7" target="_blank" rel="noopener"><strong>Lavandería El Acebuchal</strong></a>',
              es: 'Si queréis un <strong>servicio para dejar la ropa</strong>, <strong>Lavandería El Acebuchal</strong> es una opción práctica en Frigiliana y está a solo unos <strong>4 minutos de la casa</strong>.<br><br>• <a class="am-link" href="https://maps.app.goo.gl/SGDiDiLSsXyMmUKY7" target="_blank" rel="noopener"><strong>Lavandería El Acebuchal</strong></a>',
              nl: 'Als jullie een <strong>drop-off-service</strong> willen, is <strong>Lavandería El Acebuchal</strong> een praktische optie in Frigiliana en slechts ongeveer <strong>4 minuten van het huis</strong> verwijderd.<br><br>• <a class="am-link" href="https://maps.app.goo.gl/SGDiDiLSsXyMmUKY7" target="_blank" rel="noopener"><strong>Lavandería El Acebuchal</strong></a>',
              sv: 'Om ni vill ha en <strong>drop-off-tjänst</strong> är <strong>Lavandería El Acebuchal</strong> ett praktiskt alternativ i Frigiliana och ligger bara cirka <strong>4 minuter från huset</strong>.<br><br>• <a class="am-link" href="https://maps.app.goo.gl/SGDiDiLSsXyMmUKY7" target="_blank" rel="noopener"><strong>Lavandería El Acebuchal</strong></a>'
            },
            {
              en: 'If you prefer <strong>self-service laundry</strong>, the most practical external option is in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/MivMQoL7q7xPo2dD8" target="_blank" rel="noopener"><strong>Moeve AXARQUIA (formerly Cepsa) · self-service laundry</strong></a>',
              de: 'Wenn ihr lieber <strong>Self Service</strong> möchtet, ist die praktischste externe Option in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/MivMQoL7q7xPo2dD8" target="_blank" rel="noopener"><strong>Moeve AXARQUIA (ehemals Cepsa) · SB-Wäscherei</strong></a>',
              es: 'Si preferís <strong>autoservicio</strong>, la opción externa más práctica está en <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/MivMQoL7q7xPo2dD8" target="_blank" rel="noopener"><strong>Moeve AXARQUIA (antes Cepsa) · lavandería autoservicio</strong></a>',
              nl: 'Als jullie liever <strong>self-service</strong> willen, is de meest praktische externe optie in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/MivMQoL7q7xPo2dD8" target="_blank" rel="noopener"><strong>Moeve AXARQUIA (voorheen Cepsa) · wasserette met zelfbediening</strong></a>',
              sv: 'Om ni föredrar <strong>självservice</strong> är det mest praktiska externa alternativet i <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://maps.app.goo.gl/MivMQoL7q7xPo2dD8" target="_blank" rel="noopener"><strong>Moeve AXARQUIA (tidigare Cepsa) · självbetjäningstvätt</strong></a>'
            }
          ]
        },
        {
          icon: 'card',
          title: { en: 'ATM', de: 'Geldautomat', es: 'Cajero automático', nl: 'Geldautomaat', sv: 'Bankomat' },
          body: [
            {
              en: 'If you need cash during your stay, the easiest area to head for is the lower village entrance. From the house, it is a very pleasant walk of around <strong>500 metres</strong> along <strong>Calle Real</strong>, which is essentially the village\'s main street.<br><br>Down there, near the entrance to Frigiliana, you will also find the <strong>pharmacy</strong> and the <strong>bus stop</strong> — and this is where the ATM options are as well.',
              de: 'Wenn ihr während eures Aufenthalts Bargeld braucht, geht ihr am besten in Richtung unterer Ortseingang. Vom Haus aus ist das ein sehr angenehmer Weg von rund <strong>500 Metern</strong> über die <strong>Calle Real</strong>, also praktisch die Hauptstraße von Frigiliana.<br><br>Unten am Ortseingang findet ihr auch die <strong>Apotheke</strong> und die <strong>Busstation</strong> — und genau dort befinden sich auch die Geldautomaten.',
              es: 'Si necesitáis efectivo durante vuestra estancia, la zona más práctica es la entrada baja del pueblo. Desde la casa, es un paseo muy agradable de unos <strong>500 metros</strong> por <strong>Calle Real</strong>, que es básicamente la calle principal de Frigiliana.<br><br>Allí abajo, cerca de la entrada del pueblo, también encontraréis la <strong>farmacia</strong> y la <strong>parada de autobús</strong> — y es justo donde están también los cajeros.',
              nl: 'Als jullie tijdens het verblijf contant geld nodig hebben, is de handigste richting de lagere dorpsingang. Vanaf het huis is dat een heel aangename wandeling van ongeveer <strong>500 meter</strong> via <strong>Calle Real</strong>, eigenlijk de hoofdstraat van Frigiliana.<br><br>Beneden bij de dorpsingang vinden jullie ook de <strong>apotheek</strong> en de <strong>bushalte</strong> — en precies daar liggen ook de geldautomaten.',
              sv: 'Om ni behöver kontanter under vistelsen är det enklast att gå mot den nedre delen av byn. Från huset är det en mycket behaglig promenad på cirka <strong>500 meter</strong> längs <strong>Calle Real</strong>, som i princip är Frigilianas huvudgata.<br><br>Där nere vid byns infart hittar ni också <strong>apoteket</strong> och <strong>busshållplatsen</strong> — och det är också där bankomaterna finns.'
            },
            {
              en: '<strong>ATM options in this area</strong>',
              de: '<strong>Geldautomaten in diesem Bereich</strong>',
              es: '<strong>Cajeros en esta zona</strong>',
              nl: '<strong>Geldautomaten in dit gebied</strong>',
              sv: '<strong>Bankomater i detta område</strong>'
            },
            {
              en: '• <a class="am-link" href="https://maps.app.goo.gl/AiSbKswr1uxRHu4fA" target="_blank" rel="noopener"><strong>Unicaja ATM</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/ZSDZ7xfZCku8i4Gb8" target="_blank" rel="noopener"><strong>CaixaBank ATM</strong></a>',
              de: '• <a class="am-link" href="https://maps.app.goo.gl/AiSbKswr1uxRHu4fA" target="_blank" rel="noopener"><strong>Unicaja Geldautomat</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/ZSDZ7xfZCku8i4Gb8" target="_blank" rel="noopener"><strong>CaixaBank Geldautomat</strong></a>',
              es: '• <a class="am-link" href="https://maps.app.goo.gl/AiSbKswr1uxRHu4fA" target="_blank" rel="noopener"><strong>Cajero Unicaja</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/ZSDZ7xfZCku8i4Gb8" target="_blank" rel="noopener"><strong>Cajero CaixaBank</strong></a>',
              nl: '• <a class="am-link" href="https://maps.app.goo.gl/AiSbKswr1uxRHu4fA" target="_blank" rel="noopener"><strong>Unicaja geldautomaat</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/ZSDZ7xfZCku8i4Gb8" target="_blank" rel="noopener"><strong>CaixaBank geldautomaat</strong></a>',
              sv: '• <a class="am-link" href="https://maps.app.goo.gl/AiSbKswr1uxRHu4fA" target="_blank" rel="noopener"><strong>Unicaja bankomat</strong></a><br><br>• <a class="am-link" href="https://maps.app.goo.gl/ZSDZ7xfZCku8i4Gb8" target="_blank" rel="noopener"><strong>CaixaBank bankomat</strong></a>'
            },
            {
              en: '<em>Good to know:</em> this is the most convenient area to combine a few practical things at once if you are already heading down into the village.',
              de: '<em>Gut zu wissen:</em> Das ist der praktischste Bereich, wenn ihr ohnehin schon ins Dorf hinuntergeht und mehrere kleine Dinge auf einmal erledigen möchtet.',
              es: '<em>Conviene saber:</em> esta es la zona más práctica si ya vais bajando al pueblo y queréis resolver varias cosas útiles de una vez.',
              nl: '<em>Goed om te weten:</em> dit is het handigste gebied als jullie toch al het dorp in lopen en meerdere praktische dingen tegelijk willen regelen.',
              sv: '<em>Bra att veta:</em> det här är det mest praktiska området om ni ändå är på väg ner i byn och vill ordna flera småsaker samtidigt.'
            }
          ]
        },
        {
          icon: 'info',
          title: {
            en: 'Tourist Office',
            de: 'Touristeninformation',
            es: 'Oficina de turismo',
            nl: 'VVV-kantoor',
            sv: 'Turistbyrå'
          },
          body: [
            {
              en: 'If you want a local map, current walking information, or a quick answer before heading out, the tourist office is the best place to ask in Frigiliana.<br><br>It is especially useful if you are planning a hike or want up-to-date local advice rather than relying only on general online information.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Frigiliana" target="_blank" rel="noopener"><strong>Tourist Office Frigiliana</strong></a><br>Cuesta del Apero s/n<br><a class="am-link" href="tel:+34952534261">Call +34 952 534 261</a>',
              de: 'Wenn ihr einen Ortsplan, aktuelle Hinweise zu Spaziergängen oder Wanderungen oder einfach eine schnelle Auskunft vor Ort möchtet, ist die Touristeninformation in Frigiliana die beste Anlaufstelle.<br><br>Besonders sinnvoll ist sie, wenn ihr eine Wanderung plant oder lieber aktuelle lokale Hinweise haben möchtet, statt euch nur auf allgemeine Online-Infos zu verlassen.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Frigiliana" target="_blank" rel="noopener"><strong>Touristeninformation Frigiliana</strong></a><br>Cuesta del Apero s/n<br><a class="am-link" href="tel:+34952534261">Anrufen: +34 952 534 261</a>',
              es: 'Si queréis un mapa del pueblo, información actual sobre paseos o rutas, o una respuesta rápida antes de salir, la oficina de turismo es el mejor lugar para preguntar en Frigiliana.<br><br>Es especialmente útil si estáis planeando una caminata o preferís información local actualizada en lugar de depender solo de información general de internet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Frigiliana" target="_blank" rel="noopener"><strong>Oficina de turismo de Frigiliana</strong></a><br>Cuesta del Apero s/n<br><a class="am-link" href="tel:+34952534261">Llamar: +34 952 534 261</a>',
              nl: 'Als jullie een plattegrond, actuele informatie over wandelingen of gewoon snel lokaal advies willen voordat jullie op pad gaan, is het VVV-kantoor in Frigiliana de beste plek om even te vragen.<br><br>Vooral handig als jullie een hike plannen of liever actuele lokale informatie hebben dan alleen algemene info van internet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Frigiliana" target="_blank" rel="noopener"><strong>VVV-kantoor Frigiliana</strong></a><br>Cuesta del Apero s/n<br><a class="am-link" href="tel:+34952534261">Bellen: +34 952 534 261</a>',
              sv: 'Om ni vill ha en karta, aktuell information om promenader eller vandringar eller bara ett snabbt lokalt svar innan ni går ut, är turistbyrån bästa stället att fråga på i Frigiliana.<br><br>Den är särskilt användbar om ni planerar en vandring eller vill ha uppdaterad lokal information i stället för att bara lita på allmän information på nätet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Frigiliana" target="_blank" rel="noopener"><strong>Turistbyrå Frigiliana</strong></a><br>Cuesta del Apero s/n<br><a class="am-link" href="tel:+34952534261">Ring: +34 952 534 261</a>'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Mobility',
        de: 'Fortbewegung',
        es: 'Transporte',
        nl: 'Vervoer',
        sv: 'Transport'
      },
      items: [
        {
          icon: 'car',
          title: { en: 'Taxi', de: 'Taxi', es: 'Taxi', nl: 'Taxi', sv: 'Taxi' },
          body: [
            {
              en: 'In Frigiliana, we recommend arranging taxis a little in advance rather than expecting one to be nearby at any time.<br><br>This is especially helpful for dinner reservations, early departures, evening returns, or airport days.',
              de: 'In Frigiliana empfehlen wir, Taxis lieber etwas im Voraus zu organisieren, statt darauf zu setzen, dass jederzeit spontan eines in der Nähe ist.<br><br>Das ist besonders sinnvoll für Restaurantbesuche, frühe Abfahrten, spätere Rückfahrten oder Flughafentage.',
              es: 'En Frigiliana, os recomendamos organizar el taxi con algo de antelación en lugar de contar con que siempre haya uno cerca en cualquier momento.<br><br>Esto es especialmente útil para cenas, salidas tempranas, regresos por la noche o días de aeropuerto.',
              nl: 'In Frigiliana raden we aan om een taxi liever iets van tevoren te regelen dan te verwachten dat er op elk moment direct eentje in de buurt is.<br><br>Dat is vooral handig voor etentjes, vroege vertrekken, latere terugritten of luchthavendagen.',
              sv: 'I Frigiliana rekommenderar vi att ordna taxi lite i förväg i stället för att räkna med att en bil alltid finns i närheten.<br><br>Det är särskilt hjälpsamt för middagsbokningar, tidiga avresor, sena hemresor eller flygplatsdagar.'
            },
            {
              en: '<strong>Local taxi contacts</strong>',
              de: '<strong>Lokale Taxi-Kontakte</strong>',
              es: '<strong>Contactos de taxi en Frigiliana</strong>',
              nl: '<strong>Lokale taxicontacten</strong>',
              sv: '<strong>Lokala taxikontakter</strong>'
            },
            {
              en: '• <strong>Taxi 2 Frigiliana</strong> — good option for local rides and airport transfers<br><a class="am-link" href="tel:+34696969469">Call +34 696 969 469</a><br><br>• <strong>Taxi 3 Frigiliana</strong> — useful if you need a larger vehicle or a longer transfer<br><a class="am-link" href="tel:+34616388964">Call +34 616 388 964</a>',
              de: '• <strong>Taxi 2 Frigiliana</strong> — gute Option für lokale Fahrten und Flughafentransfers<br><a class="am-link" href="tel:+34696969469">Anrufen: +34 696 969 469</a><br><br>• <strong>Taxi 3 Frigiliana</strong> — sinnvoll, wenn ihr ein größeres Fahrzeug oder einen längeren Transfer braucht<br><a class="am-link" href="tel:+34616388964">Anrufen: +34 616 388 964</a>',
              es: '• <strong>Taxi 2 Frigiliana</strong> — buena opción para trayectos locales y traslados al aeropuerto<br><a class="am-link" href="tel:+34696969469">Llamar: +34 696 969 469</a><br><br>• <strong>Taxi 3 Frigiliana</strong> — útil si necesitáis un vehículo más grande o un traslado más largo<br><a class="am-link" href="tel:+34616388964">Llamar: +34 616 388 964</a>',
              nl: '• <strong>Taxi 2 Frigiliana</strong> — goede optie voor lokale ritten en luchthaventransfers<br><a class="am-link" href="tel:+34696969469">Bellen: +34 696 969 469</a><br><br>• <strong>Taxi 3 Frigiliana</strong> — handig als jullie een grotere auto of een langere transfer nodig hebben<br><a class="am-link" href="tel:+34616388964">Bellen: +34 616 388 964</a>',
              sv: '• <strong>Taxi 2 Frigiliana</strong> — bra alternativ för lokala resor och flygplatstransfer<br><a class="am-link" href="tel:+34696969469">Ring: +34 696 969 469</a><br><br>• <strong>Taxi 3 Frigiliana</strong> — bra om ni behöver ett större fordon eller en längre transfer<br><a class="am-link" href="tel:+34616388964">Ring: +34 616 388 964</a>'
            },
            {
              en: 'For airport runs or larger groups, booking ahead is especially worth it.',
              de: 'Für Flughafentransfers oder größere Gruppen lohnt sich eine vorherige Reservierung ganz besonders.',
              es: 'Para traslados al aeropuerto o grupos más grandes, merece especialmente la pena reservar con antelación.',
              nl: 'Voor luchthaventransfers of grotere groepen is vooraf reserveren extra aan te raden.',
              sv: 'För flygplatstransfer eller större grupper är det särskilt bra att boka i förväg.'
            }
          ]
        },
        {
          icon: 'car',
          title: { en: 'Rental Car', de: 'Mietwagen', es: 'Coche de alquiler', nl: 'Huurauto', sv: 'Hyrbil' },
          body: [
            {
              en: 'If you would like a rental car during your stay, the most practical nearby pickup point is usually <strong>Nerja</strong> rather than Frigiliana itself.<br><br>For most guests, we would suggest one of two simple options: <strong>pick up locally in Nerja</strong> if you only want the car for part of your stay, or <strong>rent directly at Málaga Airport</strong> if you want the widest choice.',
              de: 'Wenn ihr während eures Aufenthalts einen Mietwagen möchtet, ist der praktischste nahe Abholort normalerweise <strong>Nerja</strong> und nicht direkt Frigiliana.<br><br>Für die meisten Gäste empfehlen wir zwei einfache Optionen: <strong>lokale Abholung in Nerja</strong>, wenn ihr das Auto nur für einen Teil des Aufenthalts braucht, oder <strong>direkt am Flughafen Málaga mieten</strong>, wenn ihr die größte Auswahl möchtet.',
              es: 'Si queréis un coche de alquiler durante vuestra estancia, el punto de recogida más práctico cercano suele ser <strong>Nerja</strong> y no Frigiliana directamente.<br><br>Para la mayoría de los huéspedes, recomendaríamos dos opciones sencillas: <strong>recogerlo en Nerja</strong> si solo necesitáis el coche para una parte de la estancia, o <strong>alquilarlo directamente en el aeropuerto de Málaga</strong> si queréis más variedad.',
              nl: 'Als jullie tijdens het verblijf een huurauto willen, is het meest praktische afhaalpunt in de buurt meestal <strong>Nerja</strong> en niet direct Frigiliana zelf.<br><br>Voor de meeste gasten raden we twee eenvoudige opties aan: <strong>lokaal ophalen in Nerja</strong> als jullie de auto maar voor een deel van het verblijf nodig hebben, of <strong>direct huren op de luchthaven van Málaga</strong> als jullie de grootste keuze willen.',
              sv: 'Om ni vill ha en hyrbil under vistelsen är den mest praktiska upphämtningsplatsen i närheten oftast <strong>Nerja</strong> snarare än Frigiliana i sig.<br><br>För de flesta gäster rekommenderar vi två enkla alternativ: <strong>hämta bilen lokalt i Nerja</strong> om ni bara behöver den under en del av vistelsen, eller <strong>hyra direkt på Málaga flygplats</strong> om ni vill ha störst utbud.'
            },
            {
              en: '<strong>Local option in Nerja</strong><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> — practical if you want a proper town pickup point in Nerja.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              de: '<strong>Lokale Option in Nerja</strong><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> — praktisch, wenn ihr einen klassischen Abholpunkt direkt in Nerja möchtet.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              es: '<strong>Opción local en Nerja</strong><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> — práctico si queréis un punto de recogida claro dentro de Nerja.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Página web</a>',
              nl: '<strong>Lokale optie in Nerja</strong><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> — praktisch als jullie een echt afhaalpunt in Nerja zelf willen.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              sv: '<strong>Lokalt alternativ i Nerja</strong><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> — praktiskt om ni vill ha en tydlig upphämtningsplats i själva Nerja.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Webbplats</a>'
            },
            {
              en: '<strong>Convenient delivery-style options around Nerja</strong><br><br>If you prefer something more flexible, there are also local providers in the Nerja area that work with <strong>hotel / apartment delivery</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              de: '<strong>Praktische Delivery-Optionen rund um Nerja</strong><br><br>Wenn ihr es etwas flexibler möchtet, gibt es in der Nerja-Region auch lokale Anbieter mit <strong>Hotel- / Apartment-Lieferung</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              es: '<strong>Opciones prácticas con entrega en la zona de Nerja</strong><br><br>Si preferís algo más flexible, en la zona de Nerja también hay proveedores locales que trabajan con <strong>entrega en hotel o apartamento</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              nl: '<strong>Handige delivery-opties rond Nerja</strong><br><br>Als jullie iets flexibelers willen, zijn er in de regio Nerja ook lokale aanbieders met <strong>levering bij hotel of appartement</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              sv: '<strong>Praktiska leveransalternativ runt Nerja</strong><br><br>Om ni föredrar något mer flexibelt finns det också lokala aktörer i Nerja-området som erbjuder <strong>leverans till hotell eller lägenhet</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>'
            },
            {
              en: '<strong>Best choice for the widest selection</strong><br><br>If you are arriving by plane, <strong>Málaga Airport (AGP)</strong> usually gives you the easiest overall choice because several major rental brands operate there in one place.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Málaga Airport car hire overview</a>',
              de: '<strong>Beste Wahl für die größte Auswahl</strong><br><br>Wenn ihr mit dem Flugzeug anreist, ist <strong>Flughafen Málaga (AGP)</strong> meistens die einfachste Gesamtlösung, weil dort mehrere große Anbieter an einem Ort vertreten sind.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Übersicht Mietwagen am Flughafen Málaga</a>',
              es: '<strong>La mejor opción para tener más variedad</strong><br><br>Si llegáis en avión, <strong>el aeropuerto de Málaga (AGP)</strong> suele ser la opción más sencilla en conjunto, porque allí operan varias grandes compañías en un mismo lugar.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Resumen de alquiler de coches en el aeropuerto de Málaga</a>',
              nl: '<strong>Beste keuze voor de grootste selectie</strong><br><br>Als jullie met het vliegtuig aankomen, is <strong>Málaga Airport (AGP)</strong> meestal de makkelijkste totaaloptie, omdat daar meerdere grote verhuurbedrijven op één plek zitten.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Overzicht huurauto\'s op Málaga Airport</a>',
              sv: '<strong>Bästa valet för störst utbud</strong><br><br>Om ni anländer med flyg är <strong>Málaga flygplats (AGP)</strong> oftast det enklaste helhetsalternativet eftersom flera stora uthyrningsfirmor finns där på samma plats.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Översikt över hyrbilar på Málaga flygplats</a>'
            },
            {
              en: '<em>Good to know:</em> in this area, booking a little ahead is usually worth it — especially for automatic cars, larger vehicles, or airport arrival days.',
              de: '<em>Gut zu wissen:</em> In dieser Region lohnt sich eine Buchung mit etwas Vorlauf meistens — besonders für Automatik, größere Fahrzeuge oder Ankunftstage am Flughafen.',
              es: '<em>Conviene saber:</em> en esta zona normalmente merece la pena reservar con algo de antelación, sobre todo si buscáis coche automático, vehículo grande o recogida en día de llegada al aeropuerto.',
              nl: '<em>Goed om te weten:</em> in deze regio is iets eerder boeken meestal verstandig — vooral voor automaat, grotere auto\'s of afhalen op een aankomstdag op de luchthaven.',
              sv: '<em>Bra att veta:</em> i den här regionen lönar det sig oftast att boka lite i förväg — särskilt för automatbil, större fordon eller upphämtning på ankomstdagar till flygplatsen.'
            }
          ]
        },
        {
          icon: 'bus',
          title: {
            en: 'Bus Connections',
            de: 'Busverbindungen',
            es: 'Conexiones de autobús',
            nl: 'Busverbindingen',
            sv: 'Bussförbindelser'
          },
          body: [
            {
              en: 'Frigiliana is connected by regular bus service to Nerja and Málaga. Schedules may vary depending on season and weekday.',
              de: 'Frigiliana ist durch regelmäßige Buslinien mit Nerja und Málaga verbunden. Die Fahrpläne können je nach Jahreszeit und Wochentag variieren.',
              es: 'Frigiliana está conectada con Nerja y Málaga mediante un servicio regular de autobuses. Los horarios pueden variar según la temporada y el día de la semana.',
              nl: 'Frigiliana is door een regelmatige busdienst verbonden met Nerja en Málaga. De dienstregeling kan variëren afhankelijk van het seizoen en de dag van de week.',
              sv: 'Frigiliana har regelbunden busstrafik till Nerja och Málaga. Tidtabellerna kan variera beroende på säsong och veckodag.'
            },
            {
              en: '<strong>Frigiliana ↔ Nerja</strong><br>For this bus connection, open the exact <a class="am-link" href="https://maps.app.goo.gl/baoGmVbC8NH1Girk6" target="_blank" rel="noopener">Frigiliana stop</a> and <a class="am-link" href="https://maps.app.goo.gl/fSmb7Xk6tPrwbsia8" target="_blank" rel="noopener">Nerja stop</a> in Google Maps.<br>Travel time: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Operator / Timetables</a>',
              de: '<strong>Frigiliana ↔ Nerja</strong><br>Für diese Busverbindung könnt ihr die genaue <a class="am-link" href="https://maps.app.goo.gl/baoGmVbC8NH1Girk6" target="_blank" rel="noopener">Haltestelle in Frigiliana</a> und die <a class="am-link" href="https://maps.app.goo.gl/fSmb7Xk6tPrwbsia8" target="_blank" rel="noopener">Haltestelle in Nerja</a> direkt in Google Maps öffnen.<br>Fahrzeit: 15–20 Min.<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Anbieter / Fahrpläne</a>',
              es: '<strong>Frigiliana ↔ Nerja</strong><br>Para esta conexión, podéis abrir en Google Maps la <a class="am-link" href="https://maps.app.goo.gl/baoGmVbC8NH1Girk6" target="_blank" rel="noopener">parada exacta de Frigiliana</a> y la <a class="am-link" href="https://maps.app.goo.gl/fSmb7Xk6tPrwbsia8" target="_blank" rel="noopener">parada exacta de Nerja</a>.<br>Tiempo de viaje: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Compañía / Horarios</a>',
              nl: '<strong>Frigiliana ↔ Nerja</strong><br>Voor deze busverbinding kunnen jullie de exacte <a class="am-link" href="https://maps.app.goo.gl/baoGmVbC8NH1Girk6" target="_blank" rel="noopener">halte in Frigiliana</a> en <a class="am-link" href="https://maps.app.goo.gl/fSmb7Xk6tPrwbsia8" target="_blank" rel="noopener">halte in Nerja</a> direct openen in Google Maps.<br>Reistijd: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Vervoerder / Dienstregeling</a>',
              sv: '<strong>Frigiliana ↔ Nerja</strong><br>För den här bussförbindelsen kan ni öppna den exakta <a class="am-link" href="https://maps.app.goo.gl/baoGmVbC8NH1Girk6" target="_blank" rel="noopener">hållplatsen i Frigiliana</a> och <a class="am-link" href="https://maps.app.goo.gl/fSmb7Xk6tPrwbsia8" target="_blank" rel="noopener">hållplatsen i Nerja</a> direkt i Google Maps.<br>Restid: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Operatör / Tidtabeller</a>'
            },
            {
              en: '<strong>Nerja ↔ Málaga / Airport (AGP)</strong><br>Travel time: approx. 1h 30m / 2h 00m<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Operator / Timetables</a>',
              de: '<strong>Nerja ↔ Málaga / Flughafen (AGP)</strong><br>Fahrzeit: ca. 1 Std. 30 Min. / 2 Std. 00 Min.<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Anbieter / Fahrpläne</a>',
              es: '<strong>Nerja ↔ Málaga / Aeropuerto (AGP)</strong><br>Tiempo de viaje: aprox. 1h 30m / 2h 00m<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Compañía / Horarios</a>',
              nl: '<strong>Nerja ↔ Málaga / Luchthaven (AGP)</strong><br>Reistijd: ca. 1 uur 30 min / 2 uur 00 min<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Vervoerder / Dienstregeling</a>',
              sv: '<strong>Nerja ↔ Málaga / Flygplats (AGP)</strong><br>Restid: ca 1 tim 30 min / 2 tim 00 min<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Operatör / Tidtabeller</a>'
            }
          ]
        },
        {
          icon: 'car',
          title: {
            en: 'Uber & Ride-Sharing',
            de: 'Uber & Ride-Sharing',
            es: 'Uber y VTC',
            nl: 'Uber & Ride-Sharing',
            sv: 'Uber & Samåkning'
          },
          body: [
            {
              en: 'Uber can work in the region, but in <strong>Frigiliana</strong> we would not treat it as the most reliable main plan.<br><br>If a car appears in the app, that is great — but if not, that is not unusual here. For fixed plans, especially dinners, early departures, or airport days, a <strong>pre-arranged taxi</strong> is usually the safer option.',
              de: 'Uber kann in der Region funktionieren, aber in <strong>Frigiliana</strong> würden wir es nicht als verlässlichste Hauptlösung einplanen.<br><br>Wenn in der App direkt ein Auto erscheint, ist das natürlich gut — wenn nicht, ist das hier nicht ungewöhnlich. Für feste Pläne, besonders für Abendessen, frühe Abfahrten oder Flughafentage, ist ein <strong>vorab organisiertes Taxi</strong> meistens die sicherere Lösung.',
              es: 'Uber puede funcionar en la zona, pero en <strong>Frigiliana</strong> no lo consideraríamos como la opción principal más fiable.<br><br>Si aparece un coche en la app, perfecto; pero si no aparece, aquí eso no es raro. Para planes fijos, sobre todo cenas, salidas tempranas o días de aeropuerto, normalmente es más seguro organizar un <strong>taxi con antelación</strong>.',
              nl: 'Uber kan in de regio werken, maar in <strong>Frigiliana</strong> zouden we het niet als de betrouwbaarste hoofdoplossing zien.<br><br>Als er meteen een auto in de app verschijnt, is dat mooi meegenomen — maar als dat niet zo is, is dat hier niet ongewoon. Voor vaste plannen, vooral etentjes, vroege vertrekken of luchthavendagen, is een <strong>vooraf geregelde taxi</strong> meestal de veiligere keuze.',
              sv: 'Uber kan fungera i regionen, men i <strong>Frigiliana</strong> skulle vi inte se det som den mest pålitliga huvudlösningen.<br><br>Om en bil dyker upp direkt i appen är det förstås bra — men om ingen bil visas är det inte ovanligt här. För fasta planer, särskilt middagar, tidiga avresor eller flygplatsdagar, är en <strong>förbokad taxi</strong> oftast det säkrare valet.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Medical',
        de: 'Medizinische Hilfe',
        es: 'Asistencia médica',
        nl: 'Medisch',
        sv: 'Sjukvård'
      },
      items: [
        {
          icon: 'warning',
          title: {
            en: 'Medical emergency – Call 061 or 112',
            de: 'Medizinischer Notfall – 061 oder 112 anrufen',
            es: 'Emergencia médica – Llamad al 061 o al 112',
            nl: 'Medisch noodgeval – Bel 061 of 112',
            sv: 'Medicinsk nödsituation – Ring 061 eller 112'
          },
          body: [
            {
              en: '<strong>Life-threatening medical emergency:</strong> call <strong>061</strong>. For any general emergency in Spain, call <strong>112</strong>. For urgent medical help without immediate danger to life in Málaga province, call <strong>+34 951 03 14 37</strong>.',
              de: '<strong>Lebensbedrohlicher medizinischer Notfall:</strong> Wählt <strong>061</strong>. Für allgemeine Notfälle in Spanien wählt ihr <strong>112</strong>. Für dringende medizinische Hilfe ohne unmittelbare Lebensgefahr in der Provinz Málaga ruft ihr <strong>+34 951 03 14 37</strong> an.',
              es: '<strong>Emergencia médica con riesgo vital:</strong> llamad al <strong>061</strong>. Para cualquier emergencia general en España, llamad al <strong>112</strong>. Para asistencia médica urgente sin riesgo vital inmediato en la provincia de Málaga, llamad al <strong>+34 951 03 14 37</strong>.',
              nl: '<strong>Levensbedreigende medische noodsituatie:</strong> bel <strong>061</strong>. Voor algemene noodgevallen in Spanje bellen jullie <strong>112</strong>. Voor dringende medische hulp zonder direct levensgevaar in de provincie Málaga bellen jullie <strong>+34 951 03 14 37</strong>.',
              sv: '<strong>Livshotande medicinsk nödsituation:</strong> ring <strong>061</strong>. För allmänna nödsituationer i Spanien ringer ni <strong>112</strong>. För brådskande medicinsk hjälp utan omedelbar livsfara i Málagaprovinsen ringer ni <strong>+34 951 03 14 37</strong>.'
            },
            {
              en: '<strong>If the emergency happens while you are inside the house:</strong><br>Please share this address with emergency services:<br><strong>Calle Chorruelo 5<br>29788 Frigiliana</strong>',
              de: '<strong>Wenn der Notfall eintritt, während ihr im Haus seid:</strong><br>Bitte gebt den Rettungskräften diese Adresse durch:<br><strong>Calle Chorruelo 5<br>29788 Frigiliana</strong>',
              es: '<strong>Si la emergencia ocurre mientras estáis dentro de la casa:</strong><br>Facilitad esta dirección a los servicios de emergencia:<br><strong>Calle Chorruelo 5<br>29788 Frigiliana</strong>',
              nl: '<strong>Als het noodgeval plaatsvindt terwijl jullie in het huis zijn:</strong><br>Geef dit adres door aan de hulpdiensten:<br><strong>Calle Chorruelo 5<br>29788 Frigiliana</strong>',
              sv: '<strong>Om nödsituationen inträffar medan ni är i huset:</strong><br>Uppge den här adressen till räddningstjänsten:<br><strong>Calle Chorruelo 5<br>29788 Frigiliana</strong>'
            }
          ]
        },
        {
          icon: 'medical',
          title: {
            en: 'Centro de Salud Nerja',
            de: 'Centro de Salud Nerja',
            es: 'Centro de Salud Nerja',
            nl: 'Centro de Salud Nerja',
            sv: 'Centro de Salud Nerja'
          },
          body: [
            {
              en: 'For non-emergency public medical care, use <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, about <strong>10–15 minutes by car</strong>.',
              de: 'Für öffentliche medizinische Hilfe ohne Notfall nutzt ihr das <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, etwa <strong>10–15 Autominuten entfernt</strong>.',
              es: 'Para atención médica pública sin emergencia, acudid al <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, a unos <strong>10–15 minutos en coche</strong>.',
              nl: 'Voor openbare medische zorg zonder noodgeval gaan jullie naar <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, op ongeveer <strong>10–15 minuten rijden</strong>.',
              sv: 'För offentlig vård utan nödläge använder ni <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, cirka <strong>10–15 minuter med bil</strong>.'
            },
            {
              en: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              de: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              es: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              nl: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              sv: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>'
            },
            {
              en: '<strong>Centre:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / appointments:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>The current SAS directory lists the centre as open throughout Monday to Friday. Services and hours can change, so call before travelling outside normal daytime hours or at a weekend.',
              de: '<strong>Zentrum:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / Termine:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>Das aktuelle SAS-Verzeichnis führt das Zentrum montags bis freitags durchgehend geöffnet. Servicezeiten können sich ändern; ruft deshalb vor einem Weg außerhalb der üblichen Tageszeiten oder am Wochenende an.',
              es: '<strong>Centro:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / citas:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>El directorio actual del SAS muestra el centro abierto de forma continuada de lunes a viernes. Los servicios y horarios pueden cambiar; llamad antes de desplazaros fuera del horario diurno habitual o durante el fin de semana.',
              nl: '<strong>Centrum:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / afspraken:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>In de actuele SAS-gids staat het centrum van maandag tot en met vrijdag doorlopend als geopend vermeld. Diensten en openingstijden kunnen veranderen; bel daarom vóór een bezoek buiten normale uren overdag of in het weekend.',
              sv: '<strong>Vårdcentralen:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / tidsbokning:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>I SAS aktuella register anges vårdcentralen som öppen hela måndag till fredag. Tjänster och öppettider kan ändras; ring därför före ett besök utanför normala dagtider eller på helgen.'
            }
          ]
        },
        {
          icon: 'pharmacy',
          title: { en: 'Pharmacy', de: 'Apotheke', es: 'Farmacia', nl: 'Apotheek', sv: 'Apotek' },
          body: [
            {
              en: 'For everyday medicine or small essentials, we recommend starting with the <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Frigiliana" target="_blank" rel="noopener"><strong>pharmacy in the village</strong></a>.<br><br>If it is closed, look for the notice saying <em>"Farmacia de guardia"</em> — that tells you which pharmacy is currently on duty. If something feels more urgent, it is better not to wait too long and use medical assistance instead.',
              de: 'Für alltägliche Medikamente oder kleine Dinge empfehlen wir euch, zuerst die <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Frigiliana" target="_blank" rel="noopener"><strong>Apotheke im Dorf</strong></a> zu nutzen.<br><br>Falls sie geschlossen ist, achtet auf den Hinweis <em>„Farmacia de guardia"</em> — dort steht, welche Apotheke gerade Notdienst hat. Wenn etwas dringlicher wirkt, lieber nicht zu lange warten und stattdessen medizinische Hilfe nutzen.',
              es: 'Para medicinas básicas o pequeñas necesidades, os recomendamos empezar por la <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Frigiliana" target="_blank" rel="noopener"><strong>farmacia del pueblo</strong></a>.<br><br>Si está cerrada, buscad el aviso <em>"Farmacia de guardia"</em>, donde se indica qué farmacia está de guardia en ese momento. Si parece algo más urgente, es mejor no esperar demasiado y usar asistencia médica.',
              nl: 'Voor gewone medicijnen of kleine benodigdheden raden we aan om eerst de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Frigiliana" target="_blank" rel="noopener"><strong>apotheek in het dorp</strong></a> te proberen.<br><br>Als die gesloten is, let dan op de melding <em>"Farmacia de guardia"</em>; daar staat welke apotheek op dat moment dienst heeft. Als het dringender aanvoelt, is het beter niet te lang te wachten en medische hulp te gebruiken.',
              sv: 'För vanliga mediciner eller småsaker rekommenderar vi att ni börjar med <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Frigiliana" target="_blank" rel="noopener"><strong>apoteket i byn</strong></a>.<br><br>Om det är stängt ska ni leta efter skylten <em>"Farmacia de guardia"</em>; där står vilket apotek som har jour just då. Om något känns mer brådskande är det bättre att inte vänta för länge utan använda medicinsk hjälp.'
            }
          ]
        }
      ]
    }
  ]
};

const RECOMMENDATIONS_KICKER: LocalizedText = {
  en: 'AMARA GUEST GUIDE',
  de: 'AMARA GÄSTEGUIDE',
  es: 'GUÍA PARA HUÉSPEDES DE AMARA',
  nl: 'AMARA GASTENGIDS',
  sv: 'AMARA GÄSTGUIDE'
};

/** Sub-pages linked from "Our Recommendations" that haven't been supplied yet — kept live with placeholder copy so links never 404. */
function createPlaceholderGuidePage(slug: string, title: LocalizedText): GuestGuideEntry {
  return {
    type: 'detail',
    slug,
    backSlug: 'frigiliana-guest-recommendations',
    supportHref: FRIGILIANA_SUPPORT_EMAIL,
    supportLabel: NEED_HELP,
    seoTitle: {
      en: `${title.en} | AMARA`,
      de: `${title.de} | AMARA`,
      es: `${title.es} | AMARA`,
      nl: `${title.nl} | AMARA`,
      sv: `${title.sv} | AMARA`
    },
    seoDescription: placeholderBody,
    kicker: RECOMMENDATIONS_KICKER,
    title,
    categories: [{ heading: placeholderCategory, items: [{ icon: 'compass', title: placeholderCategory, body: [placeholderBody] }] }]
  };
}

const nerjaGuestBreakfast: GuestGuideEntry = {
  type: 'detail',
  slug: 'nerja-guest-breakfast',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Nerja Guest Guide — Breakfast | AMARA',
    de: 'Nerja Gästeguide — Frühstück | AMARA',
    es: 'Guía para huéspedes en Nerja — Desayuno | AMARA',
    nl: 'Nerja Guest Guide — Ontbijt | AMARA',
    sv: 'Nerja Gästguide — Frukost | AMARA'
  },
  seoDescription: {
    en: 'Practical breakfast overview for guests heading to Nerja — from quick bakery stops to scenic cafés and buffet options.',
    de: 'Praktische Frühstücksübersicht für Gäste Richtung Nerja — von schneller Bäckerei bis zu Café- und Buffetoptionen.',
    es: 'Resumen práctico de desayunos para huéspedes que van a Nerja: desde panaderías rápidas hasta cafés bonitos y opciones de buffet.',
    nl: 'Praktisch ontbijt-overzicht voor gasten die naar Nerja gaan — van snelle bakkerijen tot fijne cafés en buffetopties.',
    sv: 'Praktisk frukostöversikt för gäster på väg till Nerja — från snabba bagerier till trevliga caféer och bufféalternativ.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: {
    en: 'Breakfast in Nerja',
    de: 'Frühstück in Nerja',
    es: 'Desayuno en Nerja',
    nl: 'Ontbijt in Nerja',
    sv: 'Frukost i Nerja'
  },
  intro: {
    en: 'Of course, one of the nicest things here is having breakfast slowly on your own terrace — sometimes still in a bathrobe, with no rush at all. But if you feel like a little change, a walk outside, or breakfast in town before the beach, these are our easiest and nicest breakfast options in Nerja.',
    de: 'Natürlich ist es etwas ganz Besonderes, ganz in Ruhe auf der eigenen Terrasse zu frühstücken — manchmal noch im Bademantel und völlig ohne Eile. Aber falls ihr zwischendurch Lust auf etwas Abwechslung habt, kurz raus möchtet oder vor dem Strandbesuch in Nerja frühstücken wollt, sind das hier unsere schönsten und unkompliziertesten Frühstücksoptionen.',
    es: 'Por supuesto, una de las cosas más bonitas aquí es desayunar con calma en vuestra propia terraza, a veces todavía en albornoz y sin ninguna prisa. Pero si os apetece un pequeño cambio, salir a dar un paseo o desayunar en el pueblo antes de ir a la playa, estas son nuestras opciones favoritas y más fáciles en Nerja.',
    nl: 'Natuurlijk is een van de fijnste dingen hier rustig ontbijten op je eigen terras — soms nog in badjas en helemaal zonder haast. Maar als jullie zin hebben in wat afwisseling, even naar buiten willen of in Nerja willen ontbijten voordat jullie naar het strand gaan, dan zijn dit onze fijnste en makkelijkste ontbijtopties.',
    sv: 'Självklart är en av de finaste sakerna här att äta frukost långsamt på den egna terrassen — ibland fortfarande i morgonrock och helt utan stress. Men om ni känner för lite omväxling, en promenad ut eller frukost i stan före stranden, är det här våra trevligaste och enklaste frukosttips i Nerja.'
  },
  categories: [
    {
      heading: {
        en: 'Breakfast Recommendations',
        de: 'Frühstücksempfehlungen',
        es: 'Recomendaciones para desayunar',
        nl: 'Ontbijtaanbevelingen',
        sv: 'Frukostrekommendationer'
      },
      items: [
        {
          icon: 'bread',
          title: { en: 'Panaderia Salvador', de: 'Panaderia Salvador', es: 'Panaderia Salvador', nl: 'Panaderia Salvador', sv: 'Panaderia Salvador' },
          subtitle: {
            en: 'Nerja · Quick & easy · approx. 400 m',
            de: 'Nerja · Schnell & unkompliziert · ca. 400 m',
            es: 'Nerja · Rápido y fácil · aprox. 400 m',
            nl: 'Nerja · Snel & makkelijk · ca. 400 m',
            sv: 'Nerja · Snabbt & enkelt · ca 400 m'
          },
          body: [
            {
              en: 'This is the easiest pick when you want something simple, quick and good value. Perfect for taking fresh pastries or bread back home and having breakfast on your own terrace after a short morning walk.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Panaderia+Salvador+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Das ist die einfachste Wahl, wenn ihr etwas Schnelles, Unkompliziertes und Preiswertes sucht. Perfekt, um frisches Gebäck oder Brot mitzunehmen und nach einem kurzen Morgenspaziergang ganz entspannt auf der eigenen Terrasse zu frühstücken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Panaderia+Salvador+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Es la opción más fácil si queréis algo rápido, sencillo y con buena relación calidad-precio. Perfecto para llevaros pan o bollería fresca a casa y desayunar tranquilamente en vuestra terraza después de un pequeño paseo matutino.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Panaderia+Salvador+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Dit is de makkelijkste keuze als jullie iets snel, simpel en voordelig willen. Perfect om vers brood of gebak mee naar huis te nemen en daarna rustig op je eigen terras te ontbijten.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Panaderia+Salvador+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det här är det enklaste valet när ni vill ha något snabbt, okomplicerat och prisvärt. Perfekt för att köpa med färskt bröd eller bakverk hem och sedan äta frukost lugnt på den egna terrassen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Panaderia+Salvador+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'tumbler',
          title: { en: 'Good Stuff Café', de: 'Good Stuff Café', es: 'Good Stuff Café', nl: 'Good Stuff Café', sv: 'Good Stuff Café' },
          subtitle: {
            en: 'Nerja · Healthy & specialty · approx. 850 m',
            de: 'Nerja · Gesund & specialty · ca. 850 m',
            es: 'Nerja · Saludable y specialty · aprox. 850 m',
            nl: 'Nerja · Gezond & specialty · ca. 850 m',
            sv: 'Nerja · Hälsosamt & specialty · ca 850 m'
          },
          body: [
            {
              en: 'A lovely option when you feel like a more modern breakfast with good coffee, fresh ingredients and a slightly more curated atmosphere. Especially nice if you want something healthier or more international before heading into town for the day.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine sehr schöne Wahl, wenn ihr Lust auf ein moderneres Frühstück mit gutem Kaffee, frischen Zutaten und etwas kuratierter Atmosphäre habt. Besonders angenehm, wenn ihr etwas Gesünderes oder Internationaleres möchtet, bevor ihr weiter in den Tag startet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción muy bonita si os apetece un desayuno más moderno, con buen café, ingredientes frescos y un ambiente algo más cuidado. Especialmente agradable si buscáis algo más saludable o internacional antes de seguir con el día.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een heel fijne keuze als jullie zin hebben in een moderner ontbijt met goede koffie, verse ingrediënten en een wat meer verzorgde sfeer. Vooral prettig als jullie iets gezonders of internationalers willen voordat jullie dag in Nerja begint.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett väldigt fint val när ni känner för en modernare frukost med gott kaffe, fräscha råvaror och en lite mer genomtänkt atmosfär. Särskilt bra om ni vill ha något hälsosammare eller mer internationellt innan dagen fortsätter.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'tumbler',
          title: { en: 'Kafunè Specialty Coffee', de: 'Kafunè Specialty Coffee', es: 'Kafunè Specialty Coffee', nl: 'Kafunè Specialty Coffee', sv: 'Kafunè Specialty Coffee' },
          subtitle: {
            en: 'Nerja · Specialty coffee · approx. 800 m',
            de: 'Nerja · Specialty Coffee · ca. 800 m',
            es: 'Nerja · Café de especialidad · aprox. 800 m',
            nl: 'Nerja · Specialty coffee · ca. 800 m',
            sv: 'Nerja · Specialty coffee · ca 800 m'
          },
          body: [
            {
              en: 'For anyone who takes their coffee seriously. Properly made espresso and filter, and a good stop if you want a real flat white before the beach rather than a hotel pot.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kafune+Specialty+Coffee+Calle+San+Miguel+36+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Für alle, die Kaffee ernst nehmen. Sauber zubereiteter Espresso und Filterkaffee — die richtige Adresse, wenn ihr vor dem Strand einen echten Flat White möchtet statt Hotelkaffee.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kafune+Specialty+Coffee+Calle+San+Miguel+36+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Para quienes se toman el café en serio. Espresso y filtrado bien hechos: la parada adecuada si queréis un buen flat white antes de la playa en lugar del café del hotel.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kafune+Specialty+Coffee+Calle+San+Miguel+36+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Voor wie koffie serieus neemt. Goed gezette espresso en filterkoffie — het juiste adres als jullie vóór het strand een echte flat white willen in plaats van hotelkoffie.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kafune+Specialty+Coffee+Calle+San+Miguel+36+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'För er som tar kaffet på allvar. Ordentligt bryggd espresso och filterkaffe — rätt adress om ni vill ha en riktig flat white före stranden i stället för hotellkaffe.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kafune+Specialty+Coffee+Calle+San+Miguel+36+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Las Cuatro Esquinas', de: 'Las Cuatro Esquinas', es: 'Las Cuatro Esquinas', nl: 'Las Cuatro Esquinas', sv: 'Las Cuatro Esquinas' },
          subtitle: {
            en: 'Nerja · Traditional churros · approx. 950 m',
            de: 'Nerja · Traditionelle Churros · ca. 950 m',
            es: 'Nerja · Churros tradicionales · aprox. 950 m',
            nl: 'Nerja · Traditionele churros · ca. 950 m',
            sv: 'Nerja · Traditionella churros · ca 950 m'
          },
          body: [
            {
              en: 'If you want to try a more classic local breakfast, this is the place for it. Lovely for churros and hot chocolate, and easy to combine with a slow walk through the old center afterwards.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Esquinas+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Wenn ihr ein klassischeres, lokales Frühstück erleben möchtet, seid ihr hier genau richtig. Sehr schön für Churros und heiße Schokolade, und danach kann man wunderbar noch entspannt durch das Zentrum spazieren.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Esquinas+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Si queréis probar un desayuno más clásico y local, este es un sitio estupendo para hacerlo. Muy bonito para churros con chocolate caliente, y luego se puede seguir con un paseo tranquilo por el centro histórico.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Esquinas+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Als jullie een meer klassiek en lokaal ontbijt willen proberen, dan is dit een heel fijne plek. Heerlijk voor churros met warme chocolademelk, en daarna kunnen jullie rustig verder wandelen door het oude centrum.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Esquinas+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Om ni vill prova en mer klassisk och lokal frukost är det här ett väldigt bra ställe. Perfekt för churros och varm choklad, och lätt att kombinera med en lugn promenad genom den gamla stadskärnan efteråt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Esquinas+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'hotel',
          title: { en: 'Hotel Riu Monica', de: 'Hotel Riu Monica', es: 'Hotel Riu Monica', nl: 'Hotel Riu Monica', sv: 'Hotel Riu Monica' },
          subtitle: {
            en: 'Torrecilla · Comfortable buffet · approx. 150 m',
            de: 'Torrecilla · Komfortables Buffet · ca. 150 m',
            es: 'Torrecilla · Buffet cómodo · aprox. 150 m',
            nl: 'Torrecilla · Comfortabel buffet · ca. 150 m',
            sv: 'Torrecilla · Bekväm buffé · ca 150 m'
          },
          body: [
            {
              en: 'A very comfortable option when you want a bigger breakfast and do not feel like deciding too much. Especially practical if you want a generous start to the day very close to the seafront.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Monica+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine sehr komfortable Wahl, wenn ihr ein größeres Frühstück möchtet und morgens nicht lange überlegen wollt. Besonders praktisch, wenn ihr ganz in Meeresnähe großzügig in den Tag starten möchtet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Monica+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción muy cómoda si queréis un desayuno más grande y no os apetece pensar demasiado por la mañana. Especialmente práctica si queréis empezar el día muy cerca del mar y con una buena variedad.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Monica+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een heel comfortabele keuze als jullie een uitgebreider ontbijt willen en \'s ochtends niet te veel willen nadenken. Vooral handig als jullie dicht bij zee royaal aan de dag willen beginnen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Monica+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett väldigt bekvämt val när ni vill ha en större frukost och inte känner för att fundera så mycket på morgonen. Särskilt praktiskt om ni vill börja dagen ordentligt och väldigt nära havet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Riu+Monica+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'hotel',
          title: { en: 'Hotel Plaza Cavana', de: 'Hotel Plaza Cavana', es: 'Hotel Plaza Cavana', nl: 'Hotel Plaza Cavana', sv: 'Hotel Plaza Cavana' },
          subtitle: {
            en: 'Center · Budget-friendly buffet · approx. 1.1 km',
            de: 'Zentrum · Preiswertes Buffet · ca. 1,1 km',
            es: 'Centro · Buffet económico · aprox. 1,1 km',
            nl: 'Centrum · Voordelig buffet · ca. 1,1 km',
            sv: 'Centrum · Prisvärd buffé · ca 1,1 km'
          },
          body: [
            {
              en: 'A nice choice if you would like a buffet breakfast in a more central setting without it feeling too formal. Works well when you want to combine breakfast with a walk around Balcón de Europa afterwards.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Plaza+Cavana+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine schöne Wahl, wenn ihr ein Frühstücksbuffet in zentraler Lage möchtet, ohne dass es zu formell wirkt. Passt sehr gut, wenn ihr das Frühstück gleich mit einem Spaziergang rund um den Balcón de Europa verbinden möchtet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Plaza+Cavana+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción muy agradable si queréis un desayuno buffet en una zona más céntrica y con un ambiente relajado. Va muy bien si queréis combinar el desayuno con un paseo por el Balcón de Europa.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Plaza+Cavana+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een fijne keuze als jullie graag een ontbijtbuffet willen op een centralere plek, zonder dat het te chic aanvoelt. Handig als jullie ontbijt meteen willen combineren met een wandeling rond Balcón de Europa.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Plaza+Cavana+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett fint val om ni vill ha frukostbuffé i ett mer centralt läge utan att det känns för formellt. Passar väldigt bra om ni vill kombinera frukosten med en promenad runt Balcón de Europa efteråt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Plaza+Cavana+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'bread',
          title: { en: 'Nybakat Bakery', de: 'Nybakat Bakery', es: 'Nybakat Bakery', nl: 'Nybakat Bakery', sv: 'Nybakat Bakery' },
          subtitle: {
            en: 'Burriana area · Worth the walk · approx. 2.3 km',
            de: 'Burriana · Den Weg wert · ca. 2,3 km',
            es: 'Zona Burriana · Merece el paseo · aprox. 2,3 km',
            nl: 'Burriana · De wandeling waard · ca. 2,3 km',
            sv: 'Burriana · Värt promenaden · ca 2,3 km'
          },
          body: [
            {
              en: 'This is more of a "go there because you feel like it" breakfast — less about speed, more about quality and the little outing around it. A very nice idea when you are heading toward Burriana anyway and want something a little more artisanal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Nybakat+Bakery+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Das ist eher ein Frühstücksziel für Tage, an denen ihr bewusst Lust darauf habt — weniger schnell und praktisch, dafür mit mehr Qualität und kleinem Ausflug dazu. Sehr schön, wenn ihr ohnehin Richtung Burriana unterwegs seid und etwas Handwerklicheres möchtet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Nybakat+Bakery+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Este desayuno es más bien para cuando os apetece ir expresamente — menos por rapidez y más por calidad y por el pequeño paseo que lo acompaña. Muy buena idea si ya vais hacia Burriana y os apetece algo más artesanal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Nybakat+Bakery+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Dit is meer een ontbijtplek voor dagen waarop jullie er echt zin in hebben — minder snel en functioneel, maar juist met meer kwaliteit en een klein uitstapje erbij. Heel fijn als jullie toch al richting Burriana gaan en zin hebben in iets ambachtelijkers.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Nybakat+Bakery+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det här är mer ett frukostmål för dagar när ni verkligen känner för det — mindre om snabbhet och mer om kvalitet och den lilla utflykten i sig. Väldigt trevligt om ni ändå är på väg mot Burriana och vill ha något mer hantverksmässigt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Nybakat+Bakery+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestBeaches: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-beaches',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Beaches | AMARA',
    de: 'Frigiliana Gästeguide — Strände | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Playas | AMARA',
    nl: 'Frigiliana Guest Guide — Stranden | AMARA',
    sv: 'Frigiliana Gästguide — Stränder | AMARA'
  },
  seoDescription: {
    en: 'Practical beach overview for guests staying in Frigiliana — distances, best timing, and map links.',
    de: 'Praktische Strand-Übersicht für Gäste in Frigiliana — Entfernung, Timing und Google-Maps-Links.',
    es: 'Resumen práctico de playas para los huéspedes que se alojan en Frigiliana: distancias, el mejor momento para ir y enlaces a mapas.',
    nl: 'Praktisch strandoverzicht voor gasten die in Frigiliana verblijven — afstanden, de beste tijden en links naar kaarten.',
    sv: 'Praktisk strandöversikt för gäster som bor i Frigiliana — avstånd, bästa tiden att åka och kartlänkar.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Beaches', de: 'Strände', es: 'Playas', nl: 'Stranden', sv: 'Stränder' },
  intro: {
    en: 'From Frigiliana, the coast is an easy drive away — from lively beach days in Nerja to quieter coves and nature spots around Maro.',
    de: 'Von Frigiliana aus ist die Küste nur eine kurze Autofahrt entfernt – von lebhaften Strandtagen in Nerja bis hin zu ruhigeren Buchten und naturbelassenen Flecken rund um Maro.',
    es: 'Desde Frigiliana, la costa está a un corto trayecto en coche: desde animados días de playa en Nerja hasta calas más tranquilas y zonas de naturaleza alrededor de Maro.',
    nl: 'Vanuit Frigiliana is de kust slechts een kort ritje verwijderd — van levendige stranddagen in Nerja tot rustigere baaien en natuurgebieden rond Maro.',
    sv: 'Från Frigiliana är kusten bara en kort bilresa bort – från livliga stranddagar i Nerja till lugnare badvikar och naturplatser runt Maro.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-beaches',
    label: {
      en: 'Looking for a deeper overview? Read the full beach guide →',
      de: 'Sucht ihr nach einer ausführlicheren Übersicht? Lest unseren kompletten Strand-Guide →',
      es: '¿Buscáis información más detallada? Lee la guía completa de playas →',
      nl: 'Op zoek naar een uitgebreider overzicht? Lees de volledige strandgids →',
      sv: 'Letar ni efter en mer detaljerad översikt? Läs hela strandguiden →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Beaches Nearby',
        de: 'Strände in der Nähe',
        es: 'Playas cercanas',
        nl: 'Stranden in de buurt',
        sv: 'Stränder i närheten'
      },
      items: [
        {
          icon: 'wave',
          title: { en: 'Burriana Beach', de: 'Burriana Strand', es: 'Playa de Burriana', nl: 'Burriana strand', sv: 'Burriana strand' },
          subtitle: {
            en: '~20 min · Facilities & restaurants',
            de: '~20 Min. · Strandbars & Restaurants',
            es: '~20 min · Servicios y restaurantes',
            nl: '~20 min · Faciliteiten & restaurants',
            sv: '~20 min · Bekvämligheter & restauranger'
          },
          body: [
            {
              en: 'The classic full beach-day choice in Nerja: wide sand, sunbeds, showers, and plenty of places for lunch. Parking can be busy in high season — going before 10:30 or later in the afternoon usually feels calmer.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Der Klassiker für einen perfekten Strandtag in Nerja: Ein breiter Sandstrand, Sonnenliegen, Duschen und jede Menge Möglichkeiten, um mittags eine Kleinigkeit zu essen. In der Hochsaison kann es beim Parken eng werden – wenn ihr vor 10:30 Uhr oder am späteren Nachmittag kommt, ist es meist viel entspannter.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'La opción clásica para un día completo de playa en Nerja: arena amplia, hamacas, duchas y muchos lugares para comer. En temporada alta puede ser difícil aparcar; suele ser más tranquilo si vais antes de las 10:30 o a última hora de la tarde.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'De klassieke keuze voor een volledige stranddag in Nerja: breed zandstrand, zonnebedden, douches en volop leuke plekken voor de lunch. Parkeren kan in het hoogseizoen lastig zijn — vóór 10:30 uur of later in de middag gaan, voelt meestal een stuk rustiger aan.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det klassiska valet för en heldag på stranden i Nerja: bred sandstrand, solstolar, duschar och gott om ställen för lunch. Parkeringen kan vara full under högsäsong – om ni åker innan 10:30 eller senare på eftermiddagen är det oftast mycket lugnare.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'landmark',
          title: { en: 'Carabeíllo', de: 'Carabeíllo', es: 'Carabeíllo', nl: 'Carabeíllo', sv: 'Carabeíllo' },
          subtitle: {
            en: '~20 min · Small, quieter cove',
            de: '~20 Min. · Kleine, ruhigere Bucht',
            es: '~20 min · Cala pequeña y tranquila',
            nl: '~20 min · Kleine, rustigere baai',
            sv: '~20 min · Liten, lugnare badvik'
          },
          body: [
            {
              en: 'A small cove between Burriana and the town area — great if you want something a bit more tucked away. Access involves steps and space is limited, so it\'s best earlier in the day.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine kleine Bucht zwischen Burriana und der Altstadt – ideal, wenn ihr einen Ort sucht, der etwas versteckter liegt. Der Zugang erfolgt über Treppen und der Platz ist begrenzt, weshalb es sich lohnt, eher früh am Tag hier zu sein.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una pequeña cala entre Burriana y la zona del centro: ideal si buscáis un rincón un poco más escondido. El acceso es por escaleras y el espacio es limitado, así que es mejor ir temprano.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een kleine baai tussen Burriana en het centrum — ideaal als jullie een plek zoeken die net even wat meer verborgen ligt. De toegang gaat via trappen en de ruimte is beperkt, dus het is aan te raden hier op tijd naartoe te gaan.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En liten badvik mellan Burriana och stadsområdet – perfekt om ni letar efter en plats som ligger lite mer undanskymd. Man når stranden via trappor och utrymmet är begränsat, så det är bäst att komma tidigt på dagen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'arrow',
          title: { en: 'Calahonda', de: 'Calahonda', es: 'Calahonda', nl: 'Calahonda', sv: 'Calahonda' },
          subtitle: {
            en: '~20 min · Iconic cove in town',
            de: '~20 Min. · Kultige Bucht im Zentrum',
            es: '~20 min · La cala más icónica del centro',
            nl: '~20 min · Iconische baai in het centrum',
            sv: '~20 min · Ikonisk badvik i centrum'
          },
          body: [
            {
              en: 'The postcard cove right under the Balcón de Europa — beautiful, central, and easy to combine with a stroll in Nerja. Best in the morning. For parking, use public garages or town parking areas rather than searching street spots.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Die Postkarten-Bucht direkt unter dem Balcón de Europa – wunderschön, sehr zentral und perfekt mit einem Bummel durch Nerja kombinierbar. Am besten kommt ihr vormittags her. Zum Parken nutzt ihr am besten die öffentlichen Parkhäuser oder die großen Parkplätze im Ort, anstatt lange nach einem Platz am Straßenrand zu suchen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'La cala de postal justo debajo del Balcón de Europa: preciosa, céntrica y muy fácil de combinar con un paseo por Nerja. Mucho mejor por la mañana. Para aparcar, utilizad los aparcamientos públicos o las zonas de aparcamiento del pueblo en lugar de buscar sitio en la calle.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'De ansichtkaart-baai direct onder het Balcón de Europa — prachtig, heel centraal en perfect te combineren met een wandeling door Nerja. Het beste te bezoeken in de ochtend. Om te parkeren kunnen jullie het beste gebruik maken van de openbare parkeergarages of grote parkeerterreinen in plaats van te zoeken naar een plekje op straat.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Vykortsviken precis nedanför Balcón de Europa – otroligt vacker, väldigt central och enkel att kombinera med en promenad i Nerja. Bäst att besöka på förmiddagen. Använd de offentliga parkeringshusen eller större parkeringar i staden istället för att leta efter platser på gatorna.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'El Playazo', de: 'El Playazo', es: 'El Playazo', nl: 'El Playazo', sv: 'El Playazo' },
          subtitle: {
            en: '~20 min · Wide & more space',
            de: '~20 Min. · Weitläufig & viel Platz',
            es: '~20 min · Amplia y con más espacio',
            nl: '~20 min · Weids & meer ruimte',
            sv: '~20 min · Vidsträckt & mer utrymme'
          },
          body: [
            {
              en: 'One of the widest stretches near Nerja — ideal if you want room, long walks, and a more relaxed feel. Great for late afternoons. Bring water and a small snack if you plan to stay longer.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Einer der weitläufigsten Strandabschnitte bei Nerja – ideal, wenn ihr etwas mehr Platz für euch haben wollt, gerne lang am Strand spaziert und eine ruhigere Atmosphäre schätzt. Besonders schön für den späten Nachmittag. Denkt daran, Wasser und vielleicht einen kleinen Snack mitzunehmen, wenn ihr länger bleiben möchtet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Uno de los tramos más amplios cerca de Nerja: ideal si buscáis espacio, paseos largos y un ambiente más relajado. Genial para las tardes. Llevad agua y algo de picar si planeáis quedaros más tiempo.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een van de breedste stranden in de buurt van Nerja — ideaal als jullie veel ruimte zoeken, van lange strandwandelingen houden en een relaxte sfeer waarderen. Vooral prachtig in de late namiddag. Neem wel wat water en een kleine snack mee als jullie wat langer willen blijven.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En av de bredaste strandsträckorna nära Nerja – perfekt om ni vill ha gott om utrymme, älskar långa strandpromenader och letar efter en lugnare atmosfär. Speciellt härligt sent på eftermiddagen. Ta gärna med lite vatten och ett litet snack om ni planerar att stanna lite längre.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'star',
          title: { en: 'Maro Beach', de: 'Maro Strand', es: 'Playa de Maro', nl: 'Maro strand', sv: 'Maro strand' },
          subtitle: {
            en: '~25 min · Clear water & kayaking',
            de: '~25 Min. · Klares Wasser & Kajakfahren',
            es: '~25 min · Agua cristalina y kayak',
            nl: '~25 min · Helder water & kajakken',
            sv: '~25 min · Klart vatten & kajakpaddling'
          },
          body: [
            {
              en: 'A nature-focused beach near the protected Maro area — often clearer water than in town, great for snorkeling. If you want an "activity beach day", this is the one: kayaking here can be fantastic. Parking is limited in summer, so go early.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein Naturstrand direkt am Naturschutzgebiet von Maro – das Wasser ist hier oft noch klarer als im Ort, was ihn perfekt zum Schnorcheln macht. Wenn ihr Lust auf einen aktiven Tag am Strand habt, seid ihr hier genau richtig: Eine Kajaktour an dieser Steilküste ist fantastisch. Da die Parkplätze im Sommer begrenzt sind, solltet ihr früh losfahren.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una playa en un entorno natural cerca del paraje protegido de Maro: a menudo tiene el agua más cristalina que en el pueblo y es genial para hacer snorkel. Si buscáis un "día de playa activo", esta es la vuestra: hacer kayak aquí es una experiencia fantástica. En verano el aparcamiento es limitado, así que id temprano.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een prachtig strand midden in de natuur vlakbij het beschermde natuurgebied van Maro — het water is hier vaak nog helderder dan in het dorp, ideaal om te snorkelen. Als jullie zin hebben in een actieve stranddag, dan is dit de plek: kajakken is hier fantastisch. Omdat de parkeergelegenheid in de zomer beperkt is, raden we aan om op tijd te vertrekken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En riktig naturstrand i närheten av Maros naturreservat – vattnet är ofta mycket klarare här än inne i byn, vilket gör den perfekt för snorkling. Om ni vill ha en aktiv dag på stranden är det hit ni ska åka: att paddla kajak längs den här kusten är helt fantastiskt. Eftersom parkeringen är begränsad under sommaren rekommenderar vi att ni är ute i god tid.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'flag',
          title: { en: 'Cantarriján', de: 'Cantarriján', es: 'Cantarriján', nl: 'Cantarriján', sv: 'Cantarriján' },
          subtitle: {
            en: '~35–40 min · Nature reserve',
            de: '~35–40 Min. · Naturschutzgebiet',
            es: '~35–40 min · Reserva natural',
            nl: '~35–40 min · Natuurgebied',
            sv: '~35–40 min · Naturreservat'
          },
          body: [
            {
              en: 'A beautiful beach in a protected reserve — relaxed atmosphere and a great option if you want a change from Nerja. There is a clothing-optional area, and it is also known for simple, good seafood right by the beach.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein wunderschöner Strand inmitten eines Naturschutzgebiets – mit einer herrlich entspannten Atmosphäre und eine tolle Alternative, wenn ihr mal etwas anderes als Nerja sehen wollt. Es gibt hier auch einen Bereich für FKK, und die Bucht ist zudem bekannt für gute, frische Meeresfrüchte direkt am Strand.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una playa preciosa en una reserva protegida: ambiente relajado y una gran opción si queréis cambiar un poco de Nerja. Hay una zona nudista, y también es conocida por su buen pescado y marisco a un paso de la playa.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een prachtig strand in een beschermd natuurgebied — met een hele relaxte sfeer, perfect als jullie even iets anders willen dan Nerja. Er is ook een naaktstrand-gedeelte, en de baai staat daarnaast bekend om de goede, verse zeevruchten direct aan het strand.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En underbar strand i ett skyddat naturreservat – en härligt avslappnad atmosfär och ett utmärkt val om ni vill se något annat än Nerja. Här finns även en del av stranden för nudister, och viken är också känd för god, nyfångad fisk och skaldjur precis vid stranden.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestRestaurants: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-restaurants',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Food | AMARA',
    de: 'Frigiliana Gästeguide — Essen & Restaurants | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Restaurantes | AMARA',
    nl: 'Frigiliana Guest Guide — Eten & Restaurants | AMARA',
    sv: 'Frigiliana Gästguide — Mat & Restauranger | AMARA'
  },
  seoDescription: {
    en: 'Practical restaurant overview for guests staying in Frigiliana — easy picks, timings, and map links.',
    de: 'Praktische Restaurant-Übersicht für Gäste in Frigiliana — schnelle Empfehlungen, Timing & Google Maps.',
    es: 'Resumen práctico de restaurantes para los huéspedes que se alojan en Frigiliana: opciones fáciles, horarios y enlaces a mapas.',
    nl: 'Praktisch restaurantoverzicht voor gasten die in Frigiliana verblijven — makkelijke keuzes, openingstijden en links naar kaarten.',
    sv: 'Praktisk restaurangöversikt för gäster som bor i Frigiliana — bra val, tider och kartlänkar.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Restaurants', de: 'Restaurants', es: 'Restaurantes', nl: 'Restaurants', sv: 'Restauranger' },
  intro: {
    en: 'Here are our easiest, most reliable picks in Frigiliana — from relaxed terrace dinners to a scenic lunch in the mountains.',
    de: 'Hier sind unsere besten und verlässlichsten Tipps in Frigiliana – vom entspannten Abendessen auf der Terrasse bis hin zum malerischen Mittagessen in den Bergen.',
    es: 'Aquí tenéis nuestras opciones más fáciles y fiables en Frigiliana: desde cenas relajadas en una terraza hasta un almuerzo con vistas panorámicas en la montaña.',
    nl: 'Hier zijn onze makkelijkste en meest betrouwbare aanraders in Frigiliana — van relaxte diners op het terras tot een schilderachtige lunch in de bergen.',
    sv: 'Här är våra mest pålitliga och okomplicerade val i Frigiliana – från avslappnade middagar på terrassen till en lunch med vacker utsikt uppe i bergen.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-restaurants',
    label: {
      en: 'Looking for a deeper overview? Read the full dining guide →',
      de: 'Sucht ihr nach einer ausführlicheren Übersicht? Lest unseren kompletten Restaurant-Guide →',
      es: '¿Buscáis información más detallada? Lee la guía completa de restaurantes →',
      nl: 'Op zoek naar een uitgebreider overzicht? Lees de volledige restaurantgids →',
      sv: 'Letar ni efter en mer detaljerad översikt? Läs hela restaurangguiden →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Frigiliana',
        de: 'Frigiliana',
        es: 'Frigiliana',
        nl: 'Frigiliana',
        sv: 'Frigiliana'
      },
      items: [
        {
          icon: 'location-pin',
          title: { en: 'El Jardín', de: 'El Jardín', es: 'El Jardín', nl: 'El Jardín', sv: 'El Jardín' },
          subtitle: {
            en: 'Frigiliana · Terrace views · approx. 220 m',
            de: 'Frigiliana · Aussicht von der Terrasse · ca. 220 m',
            es: 'Frigiliana · Vistas desde la terraza · aprox. 220 m',
            nl: 'Frigiliana · Uitzicht vanaf het terras · ca. 220 m',
            sv: 'Frigiliana · Utsikt från terrassen · ca 220 m'
          },
          body: [
            {
              en: 'The classic view dinner at the top of the village — ideal for an easy, romantic evening. If you can, arrive a little earlier for sunset and ask for a table near the railing.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Der absolute Klassiker für ein Abendessen mit traumhaftem Ausblick ganz oben im Dorf – ideal für einen entspannten, romantischen Abend. Wenn es euch möglich ist, kommt etwas früher zum Sonnenuntergang und fragt nach einem Tisch direkt am Geländer.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'El clásico "cena con vistas" en lo alto del pueblo: ideal para una velada romántica y tranquila. Si podéis, llegad un poco antes del atardecer y pedid una mesa cerca de la barandilla.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Het klassieke diner met uitzicht bovenaan het dorp — ideaal voor een relaxte en romantische avond. Probeer iets eerder te komen voor zonsondergang en vraag om een tafeltje aan de rand voor het beste zicht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Den klassiska middagen med utsikt högst upp i byn – perfekt när ni vill ha en avkopplande och romantisk kväll. Om ni kan, kom lite tidigare lagom till solnedgången och be om ett bord vid räcket.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'goblet',
          title: { en: 'Gloria Bendita', de: 'Gloria Bendita', es: 'Gloria Bendita', nl: 'Gloria Bendita', sv: 'Gloria Bendita' },
          subtitle: {
            en: 'Frigiliana · Trendy & lively · approx. 350 m',
            de: 'Frigiliana · Modern & lebhaft · ca. 350 m',
            es: 'Frigiliana · Moderno y animado · aprox. 350 m',
            nl: 'Frigiliana · Hip & levendig · ca. 350 m',
            sv: 'Frigiliana · Modernt & livligt · ca 350 m'
          },
          body: [
            {
              en: 'Fun, modern plates and a livelier vibe — great if you want something social rather than quiet. Works well for sharing a few dishes and one more drink before a night walk through the village.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Spannende, moderne Gerichte und eine etwas lebhaftere Atmosphäre – toll, wenn ihr Lust auf einen geselligen Abend habt. Eignet sich super, um sich ein paar Gerichte zu teilen und gemütlich einen Drink zu genießen, bevor ihr zu einem abendlichen Spaziergang durchs Dorf aufbrecht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Platos modernos y divertidos, con un ambiente más animado: genial si preferís una noche social en lugar de algo muy tranquilo. Perfecto para compartir unas raciones y tomar algo más antes de un paseo nocturno por el pueblo.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Lekkere, moderne gerechten en een wat meer levendige sfeer — perfect als jullie op zoek zijn naar wat gezelligheid in plaats van een muisstille avond. Werkt heel goed om een paar gerechtjes te delen en een drankje te doen voordat jullie \'s avonds door het dorp wandelen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Spännande, moderna rätter och en lite livligare atmosfär – perfekt om ni är ute efter en social snarare än en stillsam kväll. Ett utmärkt ställe för att dela på några rätter och ta en drink innan ni promenerar genom byn på kvällen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'La Tapería', de: 'La Tapería', es: 'La Tapería', nl: 'La Tapería', sv: 'La Tapería' },
          subtitle: {
            en: 'Frigiliana · Small & local · approx. 20 m',
            de: 'Frigiliana · Klein & lokal · ca. 20 m',
            es: 'Frigiliana · Pequeño y local · aprox. 20 m',
            nl: 'Frigiliana · Klein & lokaal · ca. 20 m',
            sv: 'Frigiliana · Litet & lokalt · ca 20 m'
          },
          body: [
            {
              en: 'A calm, small place that feels like a local find — a good option when you want something simple and authentic. About 2 minutes from AMARA. Closes at 20:00 (kitchen until 19:30). Reservation via WhatsApp: +34 711 027 581.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein ruhiges, kleines Restaurant, das sich wie ein echter lokaler Geheimtipp anfühlt – eine wunderbare Wahl, wenn ihr etwas Authentisches und Bodenständiges sucht. Ungefähr 2 Minuten von AMARA entfernt. Schließt um 20:00 Uhr (warme Küche bis 19:30 Uhr). Reservierung gerne über WhatsApp: +34 711 027 581.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un lugar pequeño y tranquilo que parece un verdadero hallazgo local: una muy buena opción para algo sencillo y auténtico. A unos 2 minutos de AMARA. Cierra a las 20:00 (cocina hasta las 19:30). Reservas por WhatsApp: +34 711 027 581.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een rustige, kleine plek die aanvoelt als een echte lokale vondst — een fijne optie als jullie op zoek zijn naar iets simpels en authentieks. Op ongeveer 2 minuten lopen van AMARA. Sluit om 20:00 uur (keuken tot 19:30). Reserveren kan via WhatsApp: +34 711 027 581.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett litet och rofyllt ställe som känns som ett genuint lokalt fynd – ett jättebra val när ni vill ha något enkelt och autentiskt. Ligger cirka 2 minuter från AMARA. Stänger kl. 20:00 (köket är öppet till 19:30). Bordsreservation via WhatsApp: +34 711 027 581.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'El Acebuchal', de: 'El Acebuchal', es: 'El Acebuchal', nl: 'El Acebuchal', sv: 'El Acebuchal' },
          subtitle: {
            en: 'Mountains · Destination lunch · approx. 7 km',
            de: 'Berge · Besonderes Ausflugsziel · ca. 7 km',
            es: 'Montañas · Almuerzo y excursión · aprox. 7 km',
            nl: 'Bergen · Bijzondere lunchbestemming · ca. 7 km',
            sv: 'Bergen · Speciellt lunchutflyktsmål · ca 7 km'
          },
          body: [
            {
              en: 'A memorable drive-into-the-hills lunch — the setting is the experience. Great for a daytime trip. Bring cash and don\'t rely on mobile signal; the road and remoteness are part of it.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein unvergessliches Mittagessen tief in den Hügeln – hier ist die Umgebung das eigentliche Erlebnis. Ein wunderschöner Ausflug für den Tag. Nehmt am besten Bargeld mit und verlasst euch nicht auf den Handyempfang: Die abenteuerliche Straße und die Abgeschiedenheit gehören hier einfach dazu.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un almuerzo inolvidable escondido en las colinas: el entorno en sí es toda una experiencia. Genial como excursión de día. Llevad efectivo y no dependáis de la cobertura del móvil; el camino y el aislamiento forman parte del encanto.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een onvergetelijke lunch diep in de heuvels — alleen al de locatie is een hele ervaring. Echt een aanrader voor een dagtripje. Neem contant geld mee en vertrouw niet op mobiel bereik; de avontuurlijke weg en de afgelegen ligging maken het juist zo bijzonder.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En minnesvärd lunch djupt inne i bergen – här är omgivningen själva upplevelsen. Ett fantastiskt utflyktsmål över dagen. Ta med kontanter och räkna inte med mobiltäckning; vägen dit och den avskilda känslan är en del av charmen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'El Tangay', de: 'El Tangay', es: 'El Tangay', nl: 'El Tangay', sv: 'El Tangay' },
          subtitle: {
            en: 'Frigiliana · Where locals go · approx. 500 m',
            de: 'Frigiliana · Wo die Einheimischen hingehen · ca. 500 m',
            es: 'Frigiliana · Donde van los locales · aprox. 500 m',
            nl: 'Frigiliana · Waar de locals naartoe gaan · ca. 500 m',
            sv: 'Frigiliana · Där lokalbefolkningen samlas · ca 500 m'
          },
          body: [
            {
              en: 'A relaxed, authentic local spot — less about views, more about atmosphere and real village life. Great for an easy dinner surrounded by locals.<br><br><a class="am-link" href="https://share.google/klHKMa8MedhVjLNPJ" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein herrlich entspanntes, authentisches Restaurant – hier geht es weniger um die Aussicht, sondern um die Atmosphäre und das echte Dorfleben. Perfekt für ein unkompliziertes Abendessen mitten unter Einheimischen.<br><br><a class="am-link" href="https://share.google/klHKMa8MedhVjLNPJ" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un restaurante relajado y auténtico: no destaca tanto por las vistas, sino por el ambiente y la auténtica vida del pueblo. Ideal para una cena informal rodeados de gente local.<br><br><a class="am-link" href="https://share.google/klHKMa8MedhVjLNPJ" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een heerlijk relaxte en authentieke plek — hier draait het minder om het uitzicht en meer om de sfeer en het echte dorpsleven. Ideaal voor een ontspannen diner tussen de locals.<br><br><a class="am-link" href="https://share.google/klHKMa8MedhVjLNPJ" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett väldigt avslappnat och genuint ställe – här handlar det mindre om utsikten och mer om atmosfären och det riktiga bylivet. Perfekt för en okomplicerad middag bland byborna.<br><br><a class="am-link" href="https://share.google/klHKMa8MedhVjLNPJ" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const nerjaGuestRestaurants: GuestGuideEntry = {
  type: 'detail',
  slug: 'nerja-guest-restaurants',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Our Restaurant Recommendations in Nerja | AMARA Guest Guide',
    de: 'Unsere Restaurant-Empfehlungen in Nerja | AMARA Gästeguide',
    es: 'Nuestras recomendaciones de restaurantes en Nerja | Guía AMARA',
    nl: 'Onze restaurant-aanraders in Nerja | AMARA Guest Guide',
    sv: 'Våra restaurangrekommendationer i Nerja | AMARA Guest Guide'
  },
  seoDescription: {
    en: 'Curated restaurant picks in Nerja for AMARA guests — seafood, paella (lunch), beachfront, trendy spots, locals’ favorites, and fine dining.',
    de: 'Kuratierte Restaurant-Tipps in Nerja für AMARA Gäste — Seafood, Paella (mittags), Beachfront, Trendy, Locals-Favoriten und Fine Dining.',
    es: 'Selección de restaurantes en Nerja para huéspedes de AMARA — mariscos, paella (a mediodía), frente al mar, lugares trendy, favoritos de locales y alta cocina.',
    nl: 'Geselecteerde restaurants in Nerja voor AMARA-gasten — seafood, paella (lunch), aan zee, trendy plekken, lokale favorieten en fine dining.',
    sv: 'Utvalda restauranger i Nerja för AMARA-gäster — seafood, paella (lunch), vid stranden, trendigt, lokalfavoriter och fine dining.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Restaurants in Nerja', de: 'Restaurants in Nerja', es: 'Restaurantes en Nerja', nl: 'Restaurants in Nerja', sv: 'Restauranger i Nerja' },
  intro: {
    en: 'Nerja is our go-to town when you want more choice — from casual seafood to special-occasion dinners. Use the categories below to decide quickly.',
    de: 'Nerja ist unsere erste Wahl, wenn ihr etwas mehr Auswahl sucht – von unkompliziertem Seafood bis hin zu besonderen Dinners. Nutzt einfach die Kategorien unten zur schnellen Orientierung.',
    es: 'Nerja es nuestra opción preferida cuando buscáis más variedad: desde marisco informal hasta cenas para ocasiones especiales. Utilizad las categorías de abajo para decidiros rápidamente.',
    nl: 'Nerja is onze favoriete plek als jullie meer keuze willen — van casual visgerechten tot diners voor een speciale gelegenheid. Gebruik de onderstaande categorieën om snel te kiezen.',
    sv: 'Nerja är vårt förstahandsval när ni vill ha ett större utbud – från avslappnade fiskrätter till middagar för speciella tillfällen. Använd kategorierna nedan för att snabbt hitta rätt.'
  },
  categories: [
    {
      heading: { en: 'Seafood', de: 'Seafood', es: 'Pescado y marisco', nl: 'Vis & zeevruchten', sv: 'Fisk & skaldjur' },
      items: [
        {
          icon: 'fish',
          title: { en: 'El Pulguilla', de: 'El Pulguilla', es: 'El Pulguilla', nl: 'El Pulguilla', sv: 'El Pulguilla' },
          subtitle: {
            en: 'Nerja · Seafood tapas · lively',
            de: 'Nerja · Seafood-Tapas · lebhaft',
            es: 'Nerja · Tapas de marisco · animado',
            nl: 'Nerja · Seafood tapas · levendig',
            sv: 'Nerja · Fisk- och skaldjurstapas · livligt'
          },
          body: [
            {
              en: 'Classic Nerja seafood-tapas energy — casual, loud, and very Spanish. Great for fried fish and quick seafood rounds.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Pulguilla+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Die klassische Seafood-Tapas-Energie von Nerja – unkompliziert, laut und wunderbar spanisch. Perfekt für frittierten Fisch und entspannte Tapas-Runden.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Pulguilla+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'La clásica energía de tapas de marisco de Nerja: informal, ruidosa y muy española. Genial para pescaíto frito y unas rondas rápidas de marisco.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Pulguilla+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'De klassieke seafood-tapas sfeer van Nerja — casual, druk en heerlijk Spaans. Geweldig voor gebakken vis en snelle rondes tapas.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Pulguilla+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Den klassiska energin av fisk- och skaldjurstapas i Nerja – okomplicerat, högljutt och väldigt spanskt. Perfekt för friterad fisk och snabba tapasrundor.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+El+Pulguilla+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'fish',
          title: { en: 'Dolores El Chispa', de: 'Dolores El Chispa', es: 'Dolores El Chispa', nl: 'Dolores El Chispa', sv: 'Dolores El Chispa' },
          subtitle: {
            en: 'Nerja · Ultra-local seafood',
            de: 'Nerja · Ultra-lokales Seafood',
            es: 'Nerja · Marisco muy local',
            nl: 'Nerja · Ultra-lokale zeevruchten',
            sv: 'Nerja · Äkta lokal fisk & skaldjur'
          },
          body: [
            {
              en: 'Raw, authentic taberna vibe with generous seafood — a true local experience. Perfect when you want "no frills, just great fish".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Dolores+El+Chispa+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Authentische, ehrliche Taberna-Atmosphäre mit großzügigen Seafood-Portionen – ein echtes lokales Erlebnis. Perfekt, wenn ihr "keinen Schnickschnack, sondern einfach großartigen Fisch" wollt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Dolores+El+Chispa+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Auténtico ambiente de taberna con raciones generosas de marisco: una verdadera experiencia local. Perfecto para cuando queréis "sin lujos, solo buen pescado".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Dolores+El+Chispa+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Authentieke, pure taberna-sfeer met royale porties vis en zeevruchten — een echte lokale ervaring. Perfect als jullie "geen poespas, gewoon geweldige vis" willen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Dolores+El+Chispa+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En rustik, äkta taberna-känsla med generösa portioner av fisk och skaldjur – en riktig lokal upplevelse. Perfekt när ni vill ha "inget krångel, bara fantastisk fisk".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Dolores+El+Chispa+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'fish',
          title: { en: 'La Puntilla', de: 'La Puntilla', es: 'La Puntilla', nl: 'La Puntilla', sv: 'La Puntilla' },
          subtitle: {
            en: 'Nerja · Great value seafood',
            de: 'Nerja · Top Preis-Leistung',
            es: 'Nerja · Marisco a buen precio',
            nl: 'Nerja · Geweldige prijs-kwaliteit',
            sv: 'Nerja · Prisvärd fisk & skaldjur'
          },
          body: [
            {
              en: 'Reliable choice for seafood and tapas — great value and a proper Andalusian rhythm. Try gambas al pil-pil and mixed fried fish.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Verlässliche Wahl für Seafood und Tapas – tolle Preise und echter andalusischer Rhythmus. Probiert unbedingt die Gambas al Pil-Pil und den gemischten frittierten Fisch.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Elección fiable para marisco y tapas: muy buena relación calidad-precio y auténtico ritmo andaluz. Probad las gambas al pil-pil y el surtido de pescaíto frito.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een betrouwbare keuze voor vis en tapas — geweldige prijzen en een echt Andalusisch ritme. Probeer zeker de gambas al pil-pil en de gemengde gebakken vis.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett pålitligt val för fisk och tapas – bra priser och en genuin andalusisk rytm. Prova gambas al pil-pil och den mixade friterade fisken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Puntilla+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'goblet',
          title: { en: 'Puerta del Mar', de: 'Puerta del Mar', es: 'Puerta del Mar', nl: 'Puerta del Mar', sv: 'Puerta del Mar' },
          subtitle: {
            en: 'Balcón de Europa · Premium seafood',
            de: 'Balcón de Europa · Premium Seafood',
            es: 'Balcón de Europa · Marisco premium',
            nl: 'Balcón de Europa · Premium visgerechten',
            sv: 'Balcón de Europa · Premium fisk & skaldjur'
          },
          body: [
            {
              en: 'A more premium seafood pick with a prime location near Balcón de Europa. Great when you want a calmer sit-down meal with sea views.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Puerta+del+Mar+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein etwas gehobeneres Seafood-Restaurant in bester Lage nahe dem Balcón de Europa. Wunderbar, wenn euch der Sinn nach einem ruhigeren Essen mit Meerblick steht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Puerta+del+Mar+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción de marisco algo más exclusiva en una ubicación privilegiada cerca del Balcón de Europa. Genial cuando queréis una comida más tranquila con vistas al mar.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Puerta+del+Mar+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een wat luxere keuze voor visgerechten op een toplocatie vlakbij het Balcón de Europa. Geweldig als jullie zin hebben in een rustiger diner met uitzicht op zee.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Puerta+del+Mar+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett lite lyxigare alternativ för fisk och skaldjur med ett utmärkt läge nära Balcón de Europa. Perfekt när ni vill ha en lugnare middag med havsutsikt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Puerta+del+Mar+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Paella (Lunch)', de: 'Paella (Mittagessen)', es: 'Paella (Mediodía)', nl: 'Paella (Lunch)', sv: 'Paella (Lunch)' },
      intro: [
        {
          en: 'Local tip: in Andalusia, paella is typically a <strong>lunch</strong> dish (best between 13:30–15:30).',
          de: 'Unser Tipp: In Andalusien ist Paella typischerweise ein <strong>Mittagsgericht</strong> (am besten zwischen 13:30 und 15:30 Uhr).',
          es: 'Nuestro consejo: en Andalucía, la paella es típicamente un plato de <strong>mediodía</strong> (mejor entre las 13:30 y las 15:30).',
          nl: 'Onze tip: in Andalusië is paella typisch een <strong>lunchgerecht</strong> (het beste tussen 13:30 en 15:30 uur).',
          sv: 'Vårt tips: I Andalusien är paella typiskt sett en <strong>lunchrätt</strong> (bäst mellan 13:30 och 15:30).'
        }
      ],
      items: [
        {
          icon: 'dish',
          title: { en: 'Chiringuito AYO', de: 'Chiringuito AYO', es: 'Chiringuito AYO', nl: 'Chiringuito AYO', sv: 'Chiringuito AYO' },
          subtitle: {
            en: 'Burriana · Paella classic',
            de: 'Burriana · Paella-Klassiker',
            es: 'Burriana · Clásico de paella',
            nl: 'Burriana · Paella klassieker',
            sv: 'Burriana · Paella-klassiker'
          },
          body: [
            {
              en: 'Iconic beach paella at lunchtime — rustic, fast, and a local institution. Best combined with Burriana Beach: swim first, lunch after.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Ayo+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ikonische Strand-Paella zur Mittagszeit – rustikal, schnell und eine echte lokale Institution. Am besten in Kombination mit dem Burriana-Strand: erst schwimmen, dann essen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Ayo+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un icono para comer paella en la playa a mediodía: rústico, rápido y toda una institución local. Lo mejor es combinarlo con la playa de Burriana: primero un baño, luego a comer.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Ayo+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Iconische strandpaella tijdens de lunch — rustiek, snel en een echt lokaal instituut. Het beste te combineren met Burriana Beach: eerst zwemmen, daarna lunchen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Ayo+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ikonisk strandpaella till lunch – rustikt, snabbt och en riktig lokal institution. Kombineras bäst med Burriana-stranden: simma först, ät lunch sedan.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Ayo+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Merendero La Barca', de: 'Merendero La Barca', es: 'Merendero La Barca', nl: 'Merendero La Barca', sv: 'Merendero La Barca' },
          subtitle: {
            en: 'Burriana · Rice dishes (lobster)',
            de: 'Burriana · Reisgerichte (Hummer)',
            es: 'Burriana · Arroces y bogavante',
            nl: 'Burriana · Rijstgerechten (kreeft)',
            sv: 'Burriana · Risrätter (hummer)'
          },
          body: [
            {
              en: 'Great for rice dishes beyond "classic paella" — especially lobster rice (arroz con bogavante). Strong option when you want a proper lunch on a beach day.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Merendero+La+Barca+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Großartig für Reisgerichte abseits der "klassischen Paella" – besonders der Hummerreis (arroz con bogavante) ist ein Highlight. Eine starke Wahl, wenn ihr ein richtig gutes Mittagessen am Strand wollt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Merendero+La+Barca+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Genial para arroces más allá de la "paella clásica", especialmente el arroz con bogavante. Una opción muy fuerte cuando queréis un buen almuerzo en un día de playa.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Merendero+La+Barca+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Geweldig voor rijstgerechten buiten de "klassieke paella" om — vooral de rijst met kreeft (arroz con bogavante). Een sterke keuze als jullie goed willen lunchen tijdens een stranddag.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Merendero+La+Barca+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Fantastiskt för risrätter utöver den "klassiska paellan" – speciellt hummerris (arroz con bogavante). Ett starkt val när ni vill ha en riktigt bra lunch under en stranddag.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Merendero+La+Barca+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Playa & Sol Lounge', de: 'Playa & Sol Lounge', es: 'Playa & Sol Lounge', nl: 'Playa & Sol Lounge', sv: 'Playa & Sol Lounge' },
          subtitle: {
            en: 'Burriana · Modern rice & fideuá',
            de: 'Burriana · Moderne Paella & Fideuá',
            es: 'Burriana · Arroces modernos y fideuá',
            nl: 'Burriana · Moderne paella & fideuá',
            sv: 'Burriana · Modern paella & fideuá'
          },
          body: [
            {
              en: 'A more modern take on the Burriana strip — good value paella and great fideuá. Nice pick when you want something relaxed but a bit more "current".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+y+Sol+Lounge+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine etwas modernere Variante an der Burriana-Promenade – faire Preise für Paella und großartige Fideuá. Eine gute Wahl, wenn ihr es entspannt, aber etwas zeitgemäßer mögt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+y+Sol+Lounge+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un toque más moderno en el paseo de Burriana: paella a buen precio y una fideuá buenísima. Buena elección si buscáis algo relajado pero un poco más "actual".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+y+Sol+Lounge+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een wat modernere variant aan de Burriana-boulevard — paella voor een goede prijs en geweldige fideuá. Een fijne keuze als jullie iets relaxeds maar nét wat "hipper" willen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+y+Sol+Lounge+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett lite modernare alternativ längs Burriana-stråket – prisvärd paella och fantastisk fideuá. Ett bra val när ni vill ha något avslappnat men lite mer nutida.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+y+Sol+Lounge+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'La Torrecilla', de: 'La Torrecilla', es: 'La Torrecilla', nl: 'La Torrecilla', sv: 'La Torrecilla' },
          subtitle: {
            en: 'Torrecilla · Arroz negro / veggie options',
            de: 'Torrecilla · Arroz negro & Veggie',
            es: 'Torrecilla · Arroz negro y opciones vegetarianas',
            nl: 'Torrecilla · Arroz negro & vega opties',
            sv: 'Torrecilla · Arroz negro & veganska alternativ'
          },
          body: [
            {
              en: 'Great choice if you want rice dishes with variety — including arroz negro. Also a strong option when you need a vegetarian-friendly rice dish.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Torrecilla+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine tolle Wahl, wenn ihr Vielfalt bei den Reisgerichten sucht – inklusive Arroz Negro (schwarzer Reis). Auch eine super Option, wenn ihr vegetarische Reisgerichte braucht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Torrecilla+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una gran elección si queréis arroces con variedad, incluyendo el arroz negro. También es una opción muy buena si necesitáis un plato de arroz vegetariano.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Torrecilla+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een geweldige keuze als jullie gevarieerde rijstgerechten zoeken — inclusief arroz negro (zwarte rijst). Ook een heel goede optie als jullie vegetarische rijstgerechten willen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Torrecilla+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett utmärkt val om ni vill ha variation bland risrätterna – inklusive arroz negro (svart ris). Även ett riktigt bra alternativ om ni söker en vegetarisk risrätt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+La+Torrecilla+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Beachfront', de: 'Direkt am Strand', es: 'Frente al mar', nl: 'Aan het strand', sv: 'Direkt på stranden' },
      items: [
        {
          icon: 'wave',
          title: { en: 'Burriana Beach lunch zone', de: 'Burriana Beach (Lunch-Zone)', es: 'Zona de almuerzo en Playa de Burriana', nl: 'Burriana Beach lunchgebied', sv: 'Burriana Beach lunchområde' },
          subtitle: {
            en: 'Burriana · Easiest beach + food combo',
            de: 'Burriana · Die einfachste Strand- & Food-Kombi',
            es: 'Burriana · La combinación más fácil de playa y comida',
            nl: 'Burriana · De makkelijkste strand + eten combi',
            sv: 'Burriana · Den smidigaste strand- och matkombon'
          },
          body: [
            {
              en: 'Burriana is the easiest "full beach day + lunch" setup in Nerja. If you want a sure paella stop, AYO is the classic.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja" target="_blank" rel="noopener">Open Burriana Beach in Google Maps</a>',
              de: 'Der Burriana-Strand ist das einfachste Setup für einen perfekten "Strandtag + Mittagessen" in Nerja. Wenn ihr unbedingt Paella wollt, ist AYO der absolute Klassiker.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja" target="_blank" rel="noopener">Burriana Strand in Google Maps öffnen</a>',
              es: 'Burriana es la opción más sencilla para el plan "día entero de playa + almuerzo" en Nerja. Si queréis aseguraros una buena paella, AYO es el clásico.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja" target="_blank" rel="noopener">Abrir Playa de Burriana en Google Maps</a>',
              nl: 'Burriana is de makkelijkste plek in Nerja voor de ideale "volledige stranddag + lunch". Als jullie gegarandeerd paella willen eten, is AYO de klassieker.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja" target="_blank" rel="noopener">Open Burriana Beach in Google Maps</a>',
              sv: 'Burriana är den absolut enklaste platsen i Nerja för en "hel stranddag + lunch". Om ni vill ha ett säkert kort för paella, är AYO den stora klassikern.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Playa+Burriana+Nerja" target="_blank" rel="noopener">Öppna Burriana Beach i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'Chiringuito Mauri', de: 'Chiringuito Mauri', es: 'Chiringuito Mauri', nl: 'Chiringuito Mauri', sv: 'Chiringuito Mauri' },
          subtitle: {
            en: 'Espetos · Classic beach craft',
            de: 'Espetos · Klassische Strandküche',
            es: 'Espetos · Auténtica comida de playa',
            nl: 'Espetos · Klassiek strandeten',
            sv: 'Espetos · Klassisk strandmat'
          },
          body: [
            {
              en: 'A very strong pick for espetos (sardines on the fire) and classic beach food. Great when you want the "old-school coastal" experience.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Mauri+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine erstklassige Wahl für Espetos (Sardinen am Spieß über dem Feuer) und klassisches Strandessen. Wunderbar, wenn ihr das echte "Old-School-Küsten-Gefühl" sucht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Mauri+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una elección fantástica para comer espetos (sardinas asadas al fuego) y la clásica comida de chiringuito. Genial cuando buscáis la experiencia "costera de toda la vida".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Mauri+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een absolute aanrader voor espetos (sardines op het vuur) en de klassieke strandkeuken. Geweldig als jullie die échte "old-school kustervaring" willen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Mauri+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett riktigt bra val för espetos (sardiner grillade över öppen eld) och klassisk strandmat. Underbart när ni är ute efter den där genuina "old-school-kustkänslan".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Chiringuito+Mauri+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'La Gustosa Beach', de: 'La Gustosa Beach', es: 'La Gustosa Beach', nl: 'La Gustosa Beach', sv: 'La Gustosa Beach' },
          subtitle: {
            en: 'Beachfront · Views + casual food',
            de: 'Direkt am Strand · Aussicht & casual',
            es: 'Frente al mar · Vistas y comida informal',
            nl: 'Aan het strand · Uitzicht & casual',
            sv: 'Direkt på stranden · Utsikt & avslappnat'
          },
          body: [
            {
              en: 'Beachfront option with a great setting — good when you want easy food with a view. Nice for a relaxed afternoon that can roll into evening.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Gustosa+Beach+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine Strand-Location mit tollem Setting – super, wenn ihr unkompliziertes Essen mit Aussicht sucht. Schön für einen entspannten Nachmittag, der nahtlos in den Abend übergeht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Gustosa+Beach+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción a pie de playa en un entorno estupendo: perfecto para tomar algo sencillo con vistas. Ideal para una tarde relajada que se alarga hasta la noche.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Gustosa+Beach+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een optie direct aan het strand met een prachtige ligging — goed voor als jullie makkelijk willen eten met uitzicht. Lekker voor een ontspannen middag die zomaar overgaat in de avond.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Gustosa+Beach+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett strandnära alternativ med en härlig inramning – bra när ni vill ha okomplicerad mat med utsikt. Trevligt för en avkopplande eftermiddag som lätt kan övergå i kväll.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Gustosa+Beach+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'Rincón del Sol', de: 'Rincón del Sol', es: 'Rincón del Sol', nl: 'Rincón del Sol', sv: 'Rincón del Sol' },
          subtitle: {
            en: 'Burriana · Beach club vibe',
            de: 'Burriana · Lounge-Atmosphäre',
            es: 'Burriana · Ambiente de beach club',
            nl: 'Burriana · Beachclub sfeer',
            sv: 'Burriana · Beach club-känsla'
          },
          body: [
            {
              en: 'More "lounge / beach club" atmosphere — good for cocktails and a stylish sunset feel. Best when you want ambience as much as food.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Rincon+del+Sol+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eher ein "Lounge / Beach Club"-Ambiente – toll für Cocktails und eine stilvolle Stimmung zum Sonnenuntergang. Am besten, wenn euch die Atmosphäre genauso wichtig ist wie das Essen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Rincon+del+Sol+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Más ambiente de "lounge / beach club": estupendo para tomar unos cócteles y disfrutar del atardecer con estilo. Ideal cuando buscáis tanto un buen ambiente como buena comida.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Rincon+del+Sol+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een wat meer "lounge / beachclub" sfeer — leuk voor cocktails en een stijlvol zonsondergang-gevoel. Het beste voor als de ambiance voor jullie net zo belangrijk is als het eten.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Rincon+del+Sol+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Mer av en "lounge / beach club"-atmosfär – bra för cocktails och en stilfull solnedgångskänsla. Bäst när ni vill ha lika mycket atmosfär som mat.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Rincon+del+Sol+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Trendy & New', de: 'Modern & Angesagt', es: 'Moderno y de moda', nl: 'Hip & Nieuw', sv: 'Trendigt & Nytt' },
      items: [
        {
          icon: 'goblet',
          title: { en: 'Lamalaka', de: 'Lamalaka', es: 'Lamalaka', nl: 'Lamalaka', sv: 'Lamalaka' },
          subtitle: {
            en: 'Playa Calahonda · New beach club',
            de: 'Playa Calahonda · Neuer Beach Club',
            es: 'Playa Calahonda · Nuevo beach club',
            nl: 'Playa Calahonda · Nieuwe beachclub',
            sv: 'Playa Calahonda · Ny beach club'
          },
          body: [
            {
              en: 'Big "new Nerja" concept: beach club, restaurant, and cocktails in a prime location. Go when you want a modern lifestyle vibe (especially around sunset).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lamalaka+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein echtes "New Nerja"-Konzept: Beach Club, Restaurant und Cocktails in bester Lage. Geht dorthin, wenn ihr Lust auf einen modernen Lifestyle-Vibe habt (besonders zum Sonnenuntergang).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lamalaka+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'El gran concepto del "nuevo Nerja": beach club, restaurante y cócteles en una ubicación inmejorable. Id cuando os apetezca un ambiente moderno y con estilo (especialmente al atardecer).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lamalaka+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een groots "nieuw Nerja"-concept: beachclub, restaurant en cocktails op een toplocatie. Ga hierheen als jullie zin hebben in een moderne lifestyle-vibe (vooral rond zonsondergang).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lamalaka+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett stort "nya Nerja"-koncept: beach club, restaurang och cocktails på ett förstklassigt läge. Gå hit när ni är ute efter en modern livsstilskänsla (särskilt runt solnedgången).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lamalaka+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'moon',
          title: { en: 'OCULTO', de: 'OCULTO', es: 'OCULTO', nl: 'OCULTO', sv: 'OCULTO' },
          subtitle: {
            en: 'Nerja · Dinner & cocktails',
            de: 'Nerja · Dinner & Cocktails',
            es: 'Nerja · Cena y cócteles',
            nl: 'Nerja · Diner & cocktails',
            sv: 'Nerja · Middag & cocktails'
          },
          body: [
            {
              en: 'Speakeasy-style "night restaurant" — modern, energetic, and very experience-driven. Booking ahead is important in peak season.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=OCULTO+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein "Night Restaurant" im Speakeasy-Stil – modern, energiegeladen und ein echtes Erlebnis. In der Hochsaison ist es wichtig, im Voraus zu reservieren.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=OCULTO+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un "restaurante nocturno" de estilo speakeasy: moderno, con mucha energía y centrado en la experiencia. Es importante reservar con antelación en temporada alta.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=OCULTO+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een "avondrestaurant" in speakeasy-stijl — modern, vol energie en echt gericht op de ervaring. Vooraf reserveren is belangrijk in het hoogseizoen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=OCULTO+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En "kvällsrestaurang" i speakeasy-stil – modern, energisk och väldigt upplevelsedriven. Det är viktigt att boka i förväg under högsäsong.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=OCULTO+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'sparkle',
          title: { en: 'Botanic', de: 'Botanic', es: 'Botanic', nl: 'Botanic', sv: 'Botanic' },
          subtitle: {
            en: 'Nerja · Modern menu & gin bar',
            de: 'Nerja · Moderne Karte & Gin Bar',
            es: 'Nerja · Menú moderno y bar de ginebras',
            nl: 'Nerja · Modern menu & gin bar',
            sv: 'Nerja · Modern meny & ginbar'
          },
          body: [
            {
              en: 'Stylish, contemporary and calm — strong if you care about plating, seasonal food, and gin. Great for a date night that\'s not too formal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Botanic+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Stilvoll, zeitgemäß und ruhig – eine sehr gute Wahl, wenn ihr Wert auf schön angerichtete, saisonale Speisen und guten Gin legt. Perfekt für eine Date Night, die nicht zu formell ist.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Botanic+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Elegante, actual y tranquilo: una gran opción si valoráis una buena presentación, comida de temporada y la ginebra. Perfecto para una noche de cita, pero no demasiado formal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Botanic+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Stijlvol, eigentijds en rustig — een sterke keuze als jullie houden van mooi opgemaakte borden, seizoensgebonden gerechten en gin. Ideaal voor een date night, maar niet te formeel.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Botanic+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Stilfullt, modernt och lugnt – ett starkt val om ni uppskattar vackra uppläggningar, säsongsbaserad mat och gin. Perfekt för en date night, men inte för formellt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Botanic+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'heart',
          title: { en: 'Trattoria Italia', de: 'Trattoria Italia', es: 'Trattoria Italia', nl: 'Trattoria Italia', sv: 'Trattoria Italia' },
          subtitle: {
            en: 'Nerja · Romantic courtyard',
            de: 'Nerja · Romantischer Innenhof',
            es: 'Nerja · Patio romántico',
            nl: 'Nerja · Romantische binnenplaats',
            sv: 'Nerja · Romantisk innergård'
          },
          body: [
            {
              en: 'A newer crowd favorite for a classic Italian dinner with a very nice ambience. Great when you want a break from tapas and seafood.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Trattoria+Italia+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein neuerer Publikumsliebling für ein klassisches italienisches Abendessen in sehr schönem Ambiente. Großartig, wenn ihr mal eine Pause von Tapas und Seafood braucht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Trattoria+Italia+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un nuevo favorito del público para una cena italiana clásica con un ambiente muy agradable. Genial cuando os apetece un descanso de las tapas y el marisco.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Trattoria+Italia+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een nieuwe publieksfavoriet voor een klassiek Italiaans diner in een hele fijne sfeer. Geweldig voor als jullie even pauze willen van de tapas en visgerechten.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Trattoria+Italia+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En nyare publikfavorit för en klassisk italiensk middag med en väldigt trevlig atmosfär. Perfekt när ni vill ha en paus från tapas och fisk.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Trattoria+Italia+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Locals Preferred', de: 'Lokale Favoriten', es: 'Favoritos locales', nl: 'Lokale favorieten', sv: 'Lokala favoriter' },
      items: [
        {
          icon: 'music',
          title: { en: 'Bar Redondo', de: 'Bar Redondo', es: 'Bar Redondo', nl: 'Bar Redondo', sv: 'Bar Redondo' },
          subtitle: {
            en: 'Tapas · Lively night street',
            de: 'Tapas · Lebhafte Abendstraße',
            es: 'Tapas · Calle nocturna y animada',
            nl: 'Tapas · Levendige avondstraat',
            sv: 'Tapas · Livlig kvällsgata'
          },
          body: [
            {
              en: 'Tapas institution and a social hotspot — great for a fun, busy evening out. Go early for a calmer start; later it gets packed.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Redondo+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine Tapas-Institution und ein geselliger Hotspot – super für einen lustigen, lebhaften Abend. Geht etwas früher hin für einen ruhigen Start; später wird es richtig voll.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Redondo+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Toda una institución de tapas y un punto de encuentro social: ideal para una noche divertida y concurrida. Id temprano para empezar con más calma; luego se llena.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Redondo+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een tapas-instituut en een sociale hotspot — perfect voor een gezellige, drukke avond uit. Ga vroeg voor een rustige start; later op de avond stroomt het vol.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Redondo+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En tapasinstitution och en social samlingspunkt – jättebra för en rolig och livlig utekväll. Gå dit tidigt för en lugnare start; senare blir det fullpackat.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Redondo+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'accommodation',
          title: { en: 'El Refugio', de: 'El Refugio', es: 'El Refugio', nl: 'El Refugio', sv: 'El Refugio' },
          subtitle: {
            en: 'Cozy local spot · Rustic terrace',
            de: 'Gemütlich & lokal · Rustikale Terrasse',
            es: 'Lugar local acogedor · Terraza rústica',
            nl: 'Knusse lokale plek · Rustiek terras',
            sv: 'Mysigt lokalt ställe · Rustik terrass'
          },
          body: [
            {
              en: 'A cozy, rustic-feel place that\'s easy to love — great for classic tapas. Good choice when you want something simple and warm.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Refugio+Calle+Pintada+27+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein uriger, liebevoller Ort mit rustikalem Charme – toll für klassische Tapas. Eine gute Wahl, wenn ihr etwas Einfaches und Herzliches sucht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Refugio+Calle+Pintada+27+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un sitio acogedor y de aire rústico al que es fácil cogerle cariño: genial para unas tapas clásicas. Buena elección cuando os apetece algo sencillo y cálido.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Refugio+Calle+Pintada+27+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een gezellige, rustieke plek waar je makkelijk verliefd op wordt — geweldig voor klassieke tapas. Een goede keuze als jullie iets simpels en warms zoeken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Refugio+Calle+Pintada+27+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En inbjudande och rustik plats som är lätt att tycka om – fantastisk för klassiska tapas. Ett bra val när ni vill ha något enkelt och hjärtligt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=El+Refugio+Calle+Pintada+27+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'heart',
          title: { en: 'La Rienda', de: 'La Rienda', es: 'La Rienda', nl: 'La Rienda', sv: 'La Rienda' },
          subtitle: {
            en: 'Nerja · Relaxed tapas evening',
            de: 'Nerja · Entspannter Tapas-Abend',
            es: 'Nerja · Tarde de tapas relajada',
            nl: 'Nerja · Ontspannen tapas-avond',
            sv: 'Nerja · Avslappnad tapaskväll'
          },
          body: [
            {
              en: 'Easy, generous tapas with a calmer local crowd. Great for a relaxed "let\'s stay a bit longer" evening.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Rienda+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Unkomplizierte, großzügige Tapas bei einem ruhigeren, lokalen Publikum. Wunderbar für einen entspannten "Lass uns noch ein bisschen bleiben"-Abend.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Rienda+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Tapas sencillas y generosas con un público local más tranquilo. Ideal para una velada relajada del tipo "vamos a quedarnos un rato más".<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Rienda+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Lekkere, royale tapas met een wat rustiger, lokaal publiek. Geweldig voor een relaxte "laten we nog even blijven"-avond.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Rienda+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Okomplicerade och generösa tapas bland en lugnare lokal publik. Perfekt för en avslappnad "vi stannar en stund till"-kväll.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Rienda+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'tumbler',
          title: { en: "D'Vinos", de: "D'Vinos", es: "D'Vinos", nl: "D'Vinos", sv: "D'Vinos" },
          subtitle: {
            en: 'Wine bar · Fun fusion tapas',
            de: 'Weinbar · Spannende Fusion-Tapas',
            es: 'Bar de vinos · Tapas fusión divertidas',
            nl: 'Wijnbar · Verrassende fusion tapas',
            sv: 'Vinbar · Spännande fusion-tapas'
          },
          body: [
            {
              en: 'A fun, modern tapas and wine option — great if you want something different. Good for a relaxed evening with sharing plates.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=D%27Vinos+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine moderne Variante für Tapas & Wein – toll, wenn ihr Lust auf etwas anderes habt. Schön für einen entspannten Abend, bei dem man sich die Gerichte teilt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=D%27Vinos+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción de tapas modernas y vino muy divertida: genial si queréis probar algo distinto. Ideal para una velada relajada compartiendo platos.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=D%27Vinos+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een leuke, moderne tapas + wijn optie — perfect als jullie eens iets anders willen. Fijn voor een ontspannen avond met gerechtjes om te delen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=D%27Vinos+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett trevligt och modernt tapas- och vinalternativ – toppen om ni är sugna på något annorlunda. Bra för en avslappnad kväll där man delar på rätterna.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=D%27Vinos+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Esquina Paulina', de: 'Esquina Paulina', es: 'Esquina Paulina', nl: 'Esquina Paulina', sv: 'Esquina Paulina' },
          subtitle: {
            en: 'Cheese plates · Easy drinks',
            de: 'Käseplatten · Entspannte Drinks',
            es: 'Tablas de queso · Bebidas tranquilas',
            nl: 'Kaasplankjes · Ontspannen drankjes',
            sv: 'Ostbrickor · Avslappnade drinkar'
          },
          body: [
            {
              en: 'Small, easygoing spot for cheese boards and a casual glass of wine. Nice for a light evening without a full sit-down meal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Esquina+Paulina+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein kleiner, gemütlicher Ort für Käseplatten und ein lockeres Glas Wein. Schön für einen leichten Abend, wenn ihr kein großes Dinner braucht.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Esquina+Paulina+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un rincón pequeño y desenfadado para tomar tablas de quesos y una copa de vino informal. Perfecto para una noche ligera sin necesidad de una comida pesada.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Esquina+Paulina+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een klein, laagdrempelig plekje voor kaasplankjes en een ongedwongen glas wijn. Leuk voor een lichte avond zonder een uitgebreid diner.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Esquina+Paulina+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett litet, lättsamt ställe för ostbrickor och ett avslappnat glas vin. Trevligt för en lättare kväll utan en stor middag.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Esquina+Paulina+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'Bar Turry', de: 'Bar Turry', es: 'Bar Turry', nl: 'Bar Turry', sv: 'Bar Turry' },
          subtitle: {
            en: 'Nerja · Family-friendly & easy',
            de: 'Nerja · Familienfreundlich & unkompliziert',
            es: 'Nerja · Familiar y sencillo',
            nl: 'Nerja · Gezinsvriendelijk & makkelijk',
            sv: 'Nerja · Familjevänligt & enkelt'
          },
          body: [
            {
              en: 'Reliable local favorite slightly outside the tourist core. Try the famous pollo al curry.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Turry+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein verlässlicher lokaler Favorit etwas abseits des touristischen Zentrums. Probiert unbedingt das berühmte Pollo al Curry.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Turry+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un favorito local de confianza ligeramente alejado del centro más turístico. Probad su famoso pollo al curry.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Turry+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een betrouwbare lokale favoriet, net buiten het drukke toeristische centrum. Probeer zeker de beroemde pollo al curry.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Turry+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En pålitlig lokal favorit strax utanför den mest turistiga stadskärnan. Prova den berömda pollo al curry (kycklingcurry).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Turry+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Special Occasion & Fine Dining',
        de: 'Besondere Anlässe & Fine Dining',
        es: 'Ocasiones especiales y alta cocina',
        nl: 'Speciale gelegenheden & fine dining',
        sv: 'Speciella tillfällen & fine dining'
      },
      items: [
        {
          icon: 'star',
          title: { en: 'Oliva', de: 'Oliva', es: 'Oliva', nl: 'Oliva', sv: 'Oliva' },
          subtitle: {
            en: 'Plaza de España · Tasting menu',
            de: 'Plaza de España · Menü-Degustation',
            es: 'Plaza de España · Menú degustación',
            nl: 'Plaza de España · Proeverijmenu',
            sv: 'Plaza de España · Avsmakningsmeny'
          },
          body: [
            {
              en: 'Top fine-dining pick in Nerja — ideal for a calm, high-quality dinner. Great if you enjoy tasting menus and seasonal cooking.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Unsere erste Wahl für Fine Dining in Nerja – ideal für ein ruhiges, sehr hochwertiges Abendessen. Großartig, wenn ihr Degustationsmenüs und saisonale Küche schätzt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'La mejor opción de alta cocina en Nerja: ideal para una cena tranquila y de alta calidad. Genial si disfrutáis de los menús degustación y la cocina de temporada.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Onze beste fine dining keuze in Nerja — ideaal voor een rustig diner van hoge kwaliteit. Geweldig als jullie houden van proeverijmenu\'s en seizoensgebonden koken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Förstahandsvalet för fine dining i Nerja – perfekt för en lugn och högklassig middag. Fantastiskt om ni uppskattar avsmakningsmenyer och säsongsanpassad matlagning.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Oliva+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'heart',
          title: { en: 'Restaurant 34', de: 'Restaurant 34', es: 'Restaurant 34', nl: 'Restaurant 34', sv: 'Restaurant 34' },
          subtitle: {
            en: 'Hotel Carabeo · Romantic setting',
            de: 'Hotel Carabeo · Romantisches Ambiente',
            es: 'Hotel Carabeo · Entorno romántico',
            nl: 'Hotel Carabeo · Romantische setting',
            sv: 'Hotel Carabeo · Romantisk miljö'
          },
          body: [
            {
              en: 'A strong "celebration / romantic evening" pick with a refined feel. Reserve in summer — and ask for a calmer table if you prefer it quiet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+34+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine wunderbare Wahl für einen feierlichen oder romantischen Abend mit einer sehr gepflegten Atmosphäre. Reserviert im Sommer unbedingt – und bittet um einen ruhigeren Tisch, falls ihr das bevorzugt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+34+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una gran elección para celebraciones o veladas románticas con un toque muy refinado. Reservad en verano, y pedid una mesa tranquila si preferís menos ruido.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+34+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een uitstekende keuze voor een viering of romantische avond met een verfijnde sfeer. Reserveren in de zomer is een must — en vraag om een rustiger tafeltje als jullie dat prettig vinden.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+34+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett starkt val för en firande eller romantisk kväll med en sofistikerad känsla. Boka bord under sommaren – och be om ett lugnare bord om ni föredrar tystnad.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+34+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'sparkle',
          title: { en: 'Sollun', de: 'Sollun', es: 'Sollun', nl: 'Sollun', sv: 'Sollun' },
          subtitle: {
            en: 'Modern Andalusian · Tasting menus',
            de: 'Moderne andalusische Küche · Degustationsmenüs',
            es: 'Andaluz moderno · Menús degustación',
            nl: 'Modern Andalusisch · Proeverijmenu\'s',
            sv: 'Modern andalusisk · Avsmakningsmenyer'
          },
          body: [
            {
              en: 'Excellent modern Andalusian cooking in a warm, unpretentious setting. Great when you want a "serious meal" that still feels relaxed.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Sollun+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Hervorragende moderne andalusische Küche in einem warmen, unprätentiösen Ambiente. Toll, wenn ihr richtig gut essen gehen wollt, aber dennoch eine entspannte Atmosphäre schätzt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Sollun+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Excelente cocina andaluza moderna en un entorno cálido y sin pretensiones. Genial cuando queréis "comer de verdad" pero en un ambiente relajado.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Sollun+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Uitstekende moderne Andalusische keuken in een warme, pretentieloze setting. Geweldig voor als jullie echt goed willen eten, maar het wel ontspannen mag blijven.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Sollun+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Utmärkt modern andalusisk matlagning i en varm, opretentiös miljö. Ett bra val när ni vill ha en riktigt bra måltid som ändå känns avslappnad.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Restaurante+Sollun+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'goblet',
          title: { en: 'Patanegra 57', de: 'Patanegra 57', es: 'Patanegra 57', nl: 'Patanegra 57', sv: 'Patanegra 57' },
          subtitle: {
            en: 'Elegant setting · Mediterranean with flair',
            de: 'Elegantes Ambiente · Mediterran mit Flair',
            es: 'Entorno elegante · Mediterráneo con estilo',
            nl: 'Elegante setting · Mediterraan met flair',
            sv: 'Elegant miljö · Medelhavsmat med finess'
          },
          body: [
            {
              en: 'High-end option with a beautiful atmosphere — great for a special night. Strong if you care about quality ingredients and a curated wine list.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Patanegra+57+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine gehobene Option mit wunderschöner Atmosphäre – perfekt für einen besonderen Abend. Sehr empfehlenswert, wenn ihr Wert auf erstklassige Zutaten und eine kuratierte Weinkarte legt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Patanegra+57+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Opción de alta gama con una atmósfera preciosa: ideal para una noche especial. Muy recomendable si valoráis los ingredientes de calidad y una selecta carta de vinos.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Patanegra+57+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een luxe optie met een prachtige sfeer — ideaal voor een speciale avond. Een aanrader als jullie houden van kwaliteitsingrediënten en een met zorg samengestelde wijnkaart.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Patanegra+57+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett exklusivt alternativ med en vacker atmosfär – perfekt för en speciell kväll. Ett starkt val om ni bryr er om kvalitetsråvaror och en noggrant utvald vinlista.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Patanegra+57+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'La Bottega', de: 'La Bottega', es: 'La Bottega', nl: 'La Bottega', sv: 'La Bottega' },
          subtitle: {
            en: 'Nerja · Easy, reliable',
            de: 'Nerja · Unkompliziert & verlässlich',
            es: 'Nerja · Sencillo y fiable',
            nl: 'Nerja · Makkelijk & betrouwbaar',
            sv: 'Nerja · Enkelt & pålitligt'
          },
          body: [
            {
              en: 'A comfortable, dependable choice when you want a smooth evening without overthinking it. Earlier is calmer; later feels more lively — choose based on your mood.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Bottega+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine gemütliche, sichere Wahl, wenn ihr einen entspannten Abend wollt, ohne lange nachdenken zu müssen. Früher am Abend ist es ruhiger, später wird es lebhafter – entscheidet einfach nach eurer Stimmung.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Bottega+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una opción cómoda y segura cuando buscáis una velada agradable sin darle muchas vueltas. Más temprano es más tranquilo; más tarde se vuelve más animado: elegid según lo que os apetezca.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Bottega+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een comfortabele, veilige keuze voor een zorgeloze avond zonder te veel nadenken. Vroeg is het rustiger; later op de avond is het levendiger — kies gewoon waar jullie zin in hebben.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Bottega+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett bekvämt och säkert val när ni vill ha en smidig kväll utan att tänka för mycket. Tidigare på kvällen är det lugnare; senare blir det mer livligt – välj efter humör.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Bottega+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestHiking: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-hiking',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Hiking | AMARA',
    de: 'Frigiliana Gästeguide — Wandern | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Senderismo | AMARA',
    nl: 'Frigiliana Guest Guide — Wandelen | AMARA',
    sv: 'Frigiliana Gästguide — Vandring | AMARA'
  },
  seoDescription: {
    en: 'Practical hiking overview for guests staying in Frigiliana — easy walks, half-day hikes, and river trails with quick tips.',
    de: 'Praktische Wander-Übersicht für Gäste in Frigiliana — leichte Spaziergänge, Halbtagstouren und Flusswanderungen.',
    es: 'Resumen práctico de senderismo para los huéspedes de Frigiliana: paseos fáciles, rutas de medio día y senderos por el río con consejos rápidos.',
    nl: 'Praktisch wandeloverzicht voor gasten in Frigiliana — makkelijke wandelingen, routes van een halve dag en rivierpaden met snelle tips.',
    sv: 'Praktisk vandringsöversikt för gäster som bor i Frigiliana — enkla promenader, halvdagsturer och åvandringar med snabba tips.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Hiking', de: 'Wandern', es: 'Senderismo', nl: 'Wandelen', sv: 'Vandring' },
  intro: {
    en: 'Behind Frigiliana, the Sierra starts almost immediately — from gentle viewpoint walks to half-day routes. Below are our most practical picks.',
    de: 'Direkt hinter Frigiliana beginnt die Sierra – von gemütlichen Spaziergängen zu schönen Aussichtspunkten bis hin zu Halbtagestouren. Hier sind unsere praktischsten Empfehlungen für euch.',
    es: 'Justo detrás de Frigiliana comienza la Sierra: desde paseos tranquilos hasta miradores y rutas de medio día. Aquí tenéis nuestras opciones más prácticas.',
    nl: 'Direct achter Frigiliana begint de Sierra — van rustige wandelingen naar uitzichtpunten tot routes van een halve dag. Hieronder vinden jullie onze meest praktische aanraders.',
    sv: 'Precis bakom Frigiliana börjar Sierra-bergen – från lugna promenader till utsiktsplatser till halvdagsturer. Nedan hittar ni våra mest praktiska tips.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-hiking',
    label: {
      en: 'Looking for a deeper overview? Read the full hiking guide →',
      de: 'Sucht ihr nach einer ausführlicheren Übersicht? Lest unseren kompletten Wander-Guide →',
      es: '¿Buscáis información más detallada? Lee la guía completa de senderismo →',
      nl: 'Op zoek naar een uitgebreider overzicht? Lees de volledige wandelgids →',
      sv: 'Letar ni efter en mer detaljerad översikt? Läs hela vandringsguiden →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Trails Near Frigiliana',
        de: 'Wanderwege bei Frigiliana',
        es: 'Rutas cerca de Frigiliana',
        nl: 'Wandelroutes bij Frigiliana',
        sv: 'Vandringsleder nära Frigiliana'
      },
      items: [
        {
          icon: 'hiking',
          title: { en: 'Cruz de Pinto (Loop)', de: 'Cruz de Pinto (Rundweg)', es: 'Cruz de Pinto (Circular)', nl: 'Cruz de Pinto (Rondwandeling)', sv: 'Cruz de Pinto (Rundslinga)' },
          subtitle: {
            en: '3–4 h · Moderate · Reliable',
            de: '3–4 Std. · Mittelschwer · Verlässlich',
            es: '3–4 h · Moderado · Fiable',
            nl: '3–4 uur · Gemiddeld · Betrouwbaar',
            sv: '3–4 tim · Medelsvår · Pålitlig'
          },
          body: [
            {
              en: 'A panoramic loop above the village with open slopes and wide coastal views — one of the most dependable choices. Good after rain since the terrain drains quickly, but still wear shoes with grip.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+Cruz+de+Pinto+Frigiliana" target="_blank" rel="noopener">Search on Komoot</a>',
              de: 'Ein Panoramarundweg oberhalb des Dorfes mit weiten Hängen und herrlichem Blick auf die Küste – eine der besten und verlässlichsten Touren. Auch nach Regen gut machbar, da das Wasser hier schnell abfließt – zieht aber trotzdem Schuhe mit gutem Profil an.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+Cruz+de+Pinto+Frigiliana" target="_blank" rel="noopener">Auf Komoot suchen</a>',
              es: 'Una ruta circular panorámica por encima del pueblo con laderas abiertas y amplias vistas a la costa: una de las opciones más fiables. Buena opción después de llover porque el terreno suele drenar rápido, pero llevad calzado con buen agarre.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+Cruz+de+Pinto+Frigiliana" target="_blank" rel="noopener">Buscar en Komoot</a>',
              nl: 'Een panoramische rondwandeling boven het dorp met open hellingen en weids uitzicht op de kust — een van de meest betrouwbare keuzes. Goed te doen na regen omdat het terrein snel droogt, maar draag wel schoenen met goede grip.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+Cruz+de+Pinto+Frigiliana" target="_blank" rel="noopener">Zoeken op Komoot</a>',
              sv: 'En panoramisk rundslinga ovanför byn med öppna sluttningar och vidsträckt kustutsikt – ett av de mest pålitliga valen. Bra alternativ efter regn eftersom terrängen torkar snabbt, men använd ändå skor med bra grepp.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+Cruz+de+Pinto+Frigiliana" target="_blank" rel="noopener">Sök på Komoot</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'El Fuerte (Viewpoints)', de: 'El Fuerte (Aussichtspunkte)', es: 'El Fuerte (Miradores)', nl: 'El Fuerte (Uitzichtpunten)', sv: 'El Fuerte (Utsiktsplatser)' },
          subtitle: {
            en: '3–4 h · Steep sections',
            de: '3–4 Std. · Steile Abschnitte',
            es: '3–4 h · Tramos empinados',
            nl: '3–4 uur · Steile stukken',
            sv: '3–4 tim · Branta partier'
          },
          body: [
            {
              en: 'The classic route behind Frigiliana — you don\'t need the full summit to get amazing views. After rain, the rocky parts can be slippery; go slow and bring water.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+El+Fuerte+Frigiliana+viewpoint" target="_blank" rel="noopener">Search on Komoot</a>',
              de: 'Der klassische Weg hinter Frigiliana – ihr müsst nicht ganz bis zum Gipfel hinauf, um eine fantastische Aussicht zu genießen. Nach Regen können die felsigen Stellen rutschig sein – geht es langsam an und nehmt ausreichend Wasser mit.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+El+Fuerte+Frigiliana+viewpoint" target="_blank" rel="noopener">Auf Komoot suchen</a>',
              es: 'El camino clásico detrás de Frigiliana: no hace falta llegar a la cima para disfrutar de unas vistas increíbles. Después de llover, las zonas rocosas pueden resbalar; id con calma y llevad agua.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+El+Fuerte+Frigiliana+viewpoint" target="_blank" rel="noopener">Buscar en Komoot</a>',
              nl: 'De klassieke route achter Frigiliana — jullie hoeven niet helemaal naar de top voor een geweldig uitzicht. Na regen kunnen de rotsachtige delen glad zijn; doe het rustig aan en neem water mee.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+El+Fuerte+Frigiliana+viewpoint" target="_blank" rel="noopener">Zoeken op Komoot</a>',
              sv: 'Den klassiska leden bakom Frigiliana – ni behöver inte gå hela vägen till toppen för att få fantastiska vyer. Efter regn kan de steniga partierna vara hala; ta det lugnt och ta med vatten.<br><br><a class="am-link" href="https://www.google.com/search?q=site%3Akomoot.com+El+Fuerte+Frigiliana+viewpoint" target="_blank" rel="noopener">Sök på Komoot</a>'
            }
          ]
        },
        {
          icon: 'compass',
          title: { en: 'Lizar & Acequia Trail', de: 'Lizar & Acequia Trail', es: 'Sendero de Lízar y la Acequia', nl: 'Lizar & Acequia Pad', sv: 'Lizar & Acequia-leden' },
          subtitle: {
            en: '~1 h · Easy · Sunset',
            de: '~1 Std. · Leicht · Sonnenuntergang',
            es: '~1 h · Fácil · Atardecer',
            nl: '~1 uur · Makkelijk · Zonsondergang',
            sv: '~1 tim · Enkelt · Solnedgång'
          },
          body: [
            {
              en: 'A gentle "active rest day" walk along old irrigation channels above the village — flat and scenic.',
              de: 'Ein sanfter Spaziergang für einen "aktiven Ruhetag" entlang der alten Bewässerungskanäle oberhalb des Dorfes – flach und sehr malerisch.',
              es: 'Un paseo suave para un "día de descanso activo" por las antiguas acequias sobre el pueblo: llano y muy pintoresco.',
              nl: 'Een rustige wandeling voor een "actieve rustdag" langs de oude irrigatiekanalen boven het dorp — vlak en schilderachtig.',
              sv: 'En lugn promenad för en "aktiv vilodag" längs de gamla bevattningskanalerna ovanför byn – plant och vackert.'
            },
            {
              en: 'Perfect for golden hour. Bring a light layer if you go late — it cools down quickly.',
              de: 'Perfekt für das weiche Licht am späten Nachmittag. Nehmt euch eine leichte Jacke mit, falls ihr spät losgeht, es kühlt schnell ab.',
              es: 'Perfecto para la luz del atardecer. Llevad algo de abrigo ligero si vais tarde, refresca rápido.',
              nl: 'Perfect voor het gouden uur. Neem een extra laagje mee als jullie laat gaan, het koelt hier snel af.',
              sv: 'Perfekt för solnedgångsljuset. Ta med en lätt tröja om ni går sent, det blir snabbt svalt.'
            }
          ]
        },
        {
          icon: 'landmark',
          title: { en: 'Historic Quarter Loop', de: 'Rundweg durch die Altstadt', es: 'Paseo por el Casco Histórico', nl: 'Rondwandeling Historisch Centrum', sv: 'Promenad i gamla stan' },
          subtitle: {
            en: '~45 min · Steps & views',
            de: '~45 Min. · Treppen & Aussicht',
            es: '~45 min · Escaleras y vistas',
            nl: '~45 min · Trappen & uitzicht',
            sv: '~45 min · Trappor & utsikt'
          },
          body: [
            {
              en: 'A simple village walk through upper lanes, archways and viewpoints — ideal if you want "movement" without a hike.',
              de: 'Ein einfacher Dorfspaziergang durch die oberen Gassen, Torbögen und zu schönen Aussichtspunkten – ideal, wenn ihr euch bewegen, aber keine echte Wanderung machen wollt.',
              es: 'Un sencillo paseo por las calles altas del pueblo, arcos y miradores: ideal si queréis "moveros" un poco sin hacer una ruta larga.',
              nl: 'Een eenvoudige dorpswandeling door de hoger gelegen straatjes, poortjes en langs uitzichtpunten — ideaal als jullie wel willen "bewegen" maar niet echt willen wandelen.',
              sv: 'En enkel bypromenad genom de övre gränderna, valven och utsiktsplatserna – perfekt om ni vill "röra på er" utan att vandra.'
            },
            {
              en: 'Expect stairs and some steep sections. Great before dinner.',
              de: 'Stellt euch auf Treppen und einige steile Abschnitte ein. Wunderbar vor dem Abendessen.',
              es: 'Preparaos para subir escaleras y algunos tramos empinados. Genial para antes de cenar.',
              nl: 'Verwacht trappen en enkele steile stukken. Heerlijk voor het avondeten.',
              sv: 'Räkna med trappor och några branta partier. Härligt före middagen.'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'Río Higuerón', de: 'Río Higuerón', es: 'Río Higuerón', nl: 'Río Higuerón', sv: 'Río Higuerón' },
          subtitle: {
            en: '2–3 h · Water trail · Quieter',
            de: '2–3 Std. · Wasserweg · Ruhiger',
            es: '2–3 h · Ruta acuática · Más tranquilo',
            nl: '2–3 uur · Waterroute · Rustiger',
            sv: '2–3 tim · Vattenled · Lugnare'
          },
          body: [
            {
              en: 'The calmer local river option near Frigiliana — wading, small pools, and a refreshing summer escape.',
              de: 'Die ruhigere lokale Flussvariante in der Nähe von Frigiliana – Waten durchs Wasser, kleine Becken und eine herrlich erfrischende Auszeit im Sommer.',
              es: 'La opción de río local más tranquila cerca de Frigiliana: vadear, pequeñas pozas y una refrescante escapada en verano.',
              nl: 'De rustigere lokale rivieroptie vlakbij Frigiliana — waden door het water, kleine poeltjes en een heerlijk verfrissende ontsnapping in de zomer.',
              sv: 'Det lugnare lokala flodalternativet nära Frigiliana – vada genom vatten, små pooler och en uppfriskande utflykt på sommaren.'
            },
            {
              en: 'Water shoes (or grippy sports sandals) are strongly recommended. Avoid after heavy rain.',
              de: 'Wasserschuhe (oder gut sitzende Sportsandalen) sind sehr zu empfehlen. Meidet diese Tour nach starkem Regen.',
              es: 'Se recomiendan encarecidamente escarpines (o sandalias deportivas con agarre). Evitad esta ruta después de lluvias fuertes.',
              nl: 'Waterschoenen (of stevige sportsandalen) worden sterk aanbevolen. Vermijd deze route na hevige regenval.',
              sv: 'Badskor (eller sportsandaler med bra grepp) rekommenderas starkt. Undvik efter kraftigt regn.'
            }
          ]
        },
        {
          icon: 'star',
          title: { en: 'Río Chíllar (Nerja)', de: 'Río Chíllar (Nerja)', es: 'Río Chíllar (Nerja)', nl: 'Río Chíllar (Nerja)', sv: 'Río Chíllar (Nerja)' },
          subtitle: {
            en: '4–5 h · Very popular',
            de: '4–5 Std. · Sehr beliebt',
            es: '4–5 h · Muy popular',
            nl: '4–5 uur · Erg populair',
            sv: '4–5 tim · Väldigt populärt'
          },
          body: [
            {
              en: 'The famous "walk in the river" route — beautiful, cool, and busy in peak season.',
              de: 'Die berühmte "Flusswanderung" – wunderschön, angenehm kühl und in der Hochsaison sehr gut besucht.',
              es: 'La famosa ruta para "caminar por el río": preciosa, fresca y muy concurrida en temporada alta.',
              nl: 'De beroemde "rivierwandeling" — prachtig, lekker verkoelend en erg druk in het hoogseizoen.',
              sv: 'Den berömda "flodvandringen" – vacker, svalkande och mycket välbesökt under högsäsong.'
            },
            {
              en: 'Go early (around 08:00) and prefer weekdays. Check current access rules locally before you go.',
              de: 'Geht früh los (gegen 08:00 Uhr) und am besten unter der Woche. Bitte prüft vorab lokal die aktuellen Zugangsregeln.',
              es: 'Id temprano (sobre las 08:00) y preferiblemente entre semana. Consultad las normas de acceso actuales antes de ir.',
              nl: 'Ga vroeg op pad (rond 08:00 uur) en bij voorkeur op een doordeweekse dag. Controleer vooraf lokaal de actuele toegangsregels.',
              sv: 'Gå tidigt (runt 08:00) och helst på vardagar. Kontrollera aktuella tillträdesregler lokalt innan ni åker.'
            }
          ]
        },
        {
          icon: 'flag',
          title: { en: 'El Acebuchal (Loop)', de: 'El Acebuchal (Rundweg)', es: 'El Acebuchal (Circular)', nl: 'El Acebuchal (Rondwandeling)', sv: 'El Acebuchal (Rundslinga)' },
          subtitle: {
            en: '4–5 h · Forest · Lunch stop',
            de: '4–5 Std. · Wald · Einkehr zum Mittag',
            es: '4–5 h · Bosque · Parada para comer',
            nl: '4–5 uur · Bos · Lunchstop',
            sv: '4–5 tim · Skog · Lunchstopp'
          },
          body: [
            {
              en: 'A rewarding hike through pine forest to the "Lost Village" — great if you want a destination with a rustic meal.',
              de: 'Eine lohnende Tour durch Pinienwälder zum "Verlorenen Dorf" – fantastisch, wenn ihr ein Ziel mit einem rustikalen Essen verbinden wollt.',
              es: 'Una ruta gratificante por pinares hasta el "Pueblo Perdido": genial si buscáis un destino donde tomar una comida rústica.',
              nl: 'Een mooie wandelroute door dennenbossen naar het "Verloren Dorp" — geweldig als jullie een bestemming willen combineren met een rustieke maaltijd.',
              sv: 'En givande vandring genom tallskog till den "Förlorade byn" – fantastiskt om ni vill ha ett mål med en rustik måltid.'
            },
            {
              en: 'Reserve lunch in advance if you go in high season. Bring water and a bit of cash.',
              de: 'Reserviert das Mittagessen in der Hochsaison am besten vorab. Nehmt Wasser und etwas Bargeld mit.',
              es: 'Reservad el almuerzo con antelación si vais en temporada alta. Llevad agua y algo de efectivo.',
              nl: 'Reserveer in het hoogseizoen de lunch van tevoren. Neem water en een beetje contant geld mee.',
              sv: 'Boka lunchen i förväg om ni vandrar under högsäsong. Ta med vatten och lite kontanter.'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestDayTrips: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-day-trips',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Day Trips | AMARA',
    de: 'Frigiliana Gästeguide — Tagesausflüge | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Excursiones | AMARA',
    nl: 'Frigiliana Guest Guide — Dagtripjes | AMARA',
    sv: 'Frigiliana Gästguide — Dagsutflykter | AMARA'
  },
  seoDescription: {
    en: 'Practical day trips from Frigiliana — Málaga, Granada, Caminito del Rey and Ronda with quick planning tips.',
    de: 'Praktische Tagesausflüge ab Frigiliana — Málaga, Granada, Caminito del Rey und Ronda inkl. kurzer Planungstipps.',
    es: 'Excursiones prácticas desde Frigiliana: Málaga, Granada, Caminito del Rey y Ronda con consejos rápidos de planificación.',
    nl: 'Praktische dagtripjes vanuit Frigiliana — Málaga, Granada, Caminito del Rey en Ronda met snelle planningstips.',
    sv: 'Praktiska dagsutflykter från Frigiliana — Málaga, Granada, Caminito del Rey och Ronda med snabba planeringstips.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Day Trips', de: 'Tagesausflüge', es: 'Excursiones', nl: 'Dagtripjes', sv: 'Dagsutflykter' },
  intro: {
    en: 'Frigiliana is a calm base — and some of Andalusia\'s highlights are reachable in one day. Our simple rule: pick one main highlight, add one easy extra, and keep the pace relaxed.',
    de: 'Frigiliana ist ein herrlich ruhiger Ausgangspunkt – und einige der absoluten Highlights Andalusiens sind in einem Tagesausflug erreichbar. Unsere einfache Regel für euch: Wählt ein Hauptziel, ergänzt es durch einen kleinen Zwischenstopp und lasst es entspannt angehen.',
    es: 'Frigiliana es una base muy tranquila, y algunos de los grandes atractivos de Andalucía están a un día de viaje. Nuestra regla de oro para vosotros: elegid un destino principal, añadid un pequeño extra sencillo y mantened un ritmo relajado.',
    nl: 'Frigiliana is een heerlijk rustige uitvalsbasis — en een aantal van de mooiste hoogtepunten van Andalusië zijn in één dag te bereiken. Onze simpele vuistregel voor jullie: kies één hoofddoel, voeg een makkelijk extraatje toe en houd het tempo lekker ontspannen.',
    sv: 'Frigiliana är en härligt lugn utgångspunkt – och några av Andalusiens absoluta höjdpunkter kan nås på en dagsutflykt. Vår enkla regel för er: välj ett huvudmål, lägg till ett enkelt extra stopp och håll ett avslappnat tempo.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-day-trips',
    label: {
      en: 'Want the deeper version? Read the full day trips guide →',
      de: 'Hättet ihr gerne mehr Details? Lest unseren kompletten Guide für Tagesausflüge →',
      es: '¿Queréis la versión más detallada? Lee la guía completa de excursiones →',
      nl: 'Willen jullie meer details? Lees de volledige gids voor dagtripjes →',
      sv: 'Vill ni ha fler detaljer? Läs hela guiden för dagsutflykter →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Day Trip Destinations',
        de: 'Ausflugsziele',
        es: 'Destinos para excursiones',
        nl: 'Bestemmingen voor dagtripjes',
        sv: 'Resmål för dagsutflykter'
      },
      items: [
        {
          icon: 'route',
          title: { en: 'Málaga City', de: 'Málaga Stadt', es: 'Málaga', nl: 'Málaga stad', sv: 'Málaga' },
          subtitle: {
            en: '~50 min · Museums & easy day',
            de: '~50 Min. · Museen & ein entspannter Tag',
            es: '~50 min · Museos y un día tranquilo',
            nl: '~50 min · Musea & een ontspannen dag',
            sv: '~50 min · Museer & en avslappnad dag'
          },
          body: [
            {
              en: 'The most flexible cultural day trip: walkable streets, museums, great food, and a modern port atmosphere. Parking tip: park at <em>Muelle Uno</em> and walk into the center along the promenade.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Der flexibelste kulturelle Tagesausflug: gut begehbare Gassen, Museen, großartiges Essen und eine moderne Hafenatmosphäre. Unser Park-Tipp: Parkt am <em>Muelle Uno</em> und spaziert gemütlich an der Promenade entlang ins Zentrum.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'La excursión cultural más flexible: calles perfectas para pasear, museos, comida estupenda y un ambiente portuario muy moderno. Consejo de aparcamiento: aparcad en el <em>Muelle Uno</em> y caminad hacia el centro por el paseo marítimo.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'De meest flexibele culturele dagtrip: wandelvriendelijke straatjes, musea, geweldig eten en een moderne havensfeer. Onze parkeertip: parkeer bij <em>Muelle Uno</em> en wandel langs de boulevard zo het centrum in.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Den mest flexibla kulturella dagsutflykten: promenadvänliga gator, museer, fantastisk mat och en modern hamnatmosfär. Vårt parkeringstips: parkera vid <em>Muelle Uno</em> och promenera in till centrum längs hamnpromenaden.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'star',
          title: { en: 'Granada & Alhambra', de: 'Granada & Alhambra', es: 'Granada y la Alhambra', nl: 'Granada & het Alhambra', sv: 'Granada & Alhambra' },
          subtitle: {
            en: '~1h 10m · Full day classic',
            de: '~1 Std. 10 Min. · Der absolute Klassiker',
            es: '~1h 10m · Un clásico de día completo',
            nl: '~1 uur 10 min · De ultieme klassieker',
            sv: '~1 tim 10 min · En riktig klassiker'
          },
          body: [
            {
              en: 'Moorish architecture, tea houses, the Albaicín, and the Alhambra with Sierra Nevada behind it — a true classic. Ticket reality: Alhambra tickets can sell out far ahead, so book as soon as you have dates. If tickets are gone, go anyway for the Albaicín and <em>Mirador de San Nicolás</em>.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Alhambra+Granada" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Maurische Architektur, traditionelle Teehäuser, das Albaicín-Viertel und die Alhambra mit der Sierra Nevada im Hintergrund – ein echter Klassiker. Wichtiger Hinweis zu den Tickets: Die Eintrittskarten für die Alhambra sind oft lange im Voraus ausverkauft – bucht sie, sobald eure Reisedaten feststehen. Falls es keine Tickets mehr gibt, fahrt trotzdem hin und genießt das Albaicín und den <em>Mirador de San Nicolás</em>.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Alhambra+Granada" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Arquitectura morisca, teterías, el Albaicín y la Alhambra con Sierra Nevada de fondo: un verdadero clásico. Advertencia importante sobre las entradas: las de la Alhambra pueden agotarse con mucha antelación; reservadlas en cuanto tengáis fechas. Si ya no quedan, id de todos modos a disfrutar del Albaicín y el <em>Mirador de San Nicolás</em>.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Alhambra+Granada" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Moorse architectuur, theehuisjes, de wijk Albaicín en het Alhambra met de Sierra Nevada op de achtergrond — een absolute klassieker. Een belangrijke tip over de tickets: kaartjes voor het Alhambra zijn vaak ver van tevoren uitverkocht — boek zodra jullie reisdata vaststaan. Zijn er geen tickets meer? Ga dan alsnog voor het Albaicín en het <em>Mirador de San Nicolás</em>.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Alhambra+Granada" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Morisk arkitektur, tehus, stadsdelen Albaicín och Alhambra med Sierra Nevada i bakgrunden – en sann klassiker. Ett viktigt tips om biljetter: biljetterna till Alhambra säljer ofta slut långt i förväg – boka så snart ni vet era datum. Om biljetterna är slut, åk ändå för att uppleva Albaicín och <em>Mirador de San Nicolás</em>.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Alhambra+Granada" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'compass',
          title: { en: 'Caminito del Rey', de: 'Caminito del Rey', es: 'Caminito del Rey', nl: 'Caminito del Rey', sv: 'Caminito del Rey' },
          subtitle: {
            en: '~1h 30m · Booking + shuttle',
            de: '~1 Std. 30 Min. · Buchung & Shuttle',
            es: '~1h 30m · Reserva y autobús lanzadera',
            nl: '~1 uur 30 min · Boeken & shuttle',
            sv: '~1 tim 30 min · Bokning & buss'
          },
          body: [
            {
              en: 'A dramatic walkway attached to the gorge walls — one of the most unique "big view" experiences in the region. Good to know: it\'s a linear walk with a shuttle back, not ideal if you have a strong fear of heights. Book in advance (weeks ahead in peak season).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein spektakulärer Steg, der direkt an den Felswänden der Schlucht befestigt ist – eines der beeindruckendsten Naturerlebnisse der Region. Gut zu wissen: Es ist keine Rundtour, sondern ein Streckenweg mit einem Shuttlebus zurück, nicht ideal bei starker Höhenangst. Unbedingt im Voraus buchen (in der Hochsaison teils Wochen vorher).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una pasarela espectacular colgada de las paredes del desfiladero: una de las experiencias con mejores vistas de toda la región. Conviene saber: es una ruta lineal con un autobús lanzadera para volver, no es ideal si tenéis mucho miedo a las alturas. Reservad con antelación (incluso semanas antes en temporada alta).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een spectaculair wandelpad dat vastzit aan de wanden van de kloof — een van de meest unieke natuurervaringen in de regio. Goed om te weten: het is een route van A naar B, waarna jullie met een shuttlebus teruggaan, niet ideaal bij erge hoogtevrees. Boek vooraf (in het hoogseizoen vaak weken van tevoren).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En dramatisk gångbro fäst vid ravinens väggar – en av de mest unika naturupplevelserna i regionen. Bra att veta: det är en linjär vandring med en buss tillbaka, inte optimalt vid stark höjdrädsla. Boka i förväg (ibland veckor i förväg under högsäsong).<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'Ronda', de: 'Ronda', es: 'Ronda', nl: 'Ronda', sv: 'Ronda' },
          subtitle: {
            en: '~2 h · Scenic "big day out"',
            de: '~2 Std. · Malerischer Tagesausflug',
            es: '~2 h · Una gran excursión panorámica',
            nl: '~2 uur · Schilderachtig dagje uit',
            sv: '~2 tim · En vacker heldagsutflykt'
          },
          body: [
            {
              en: 'Defined by the Puente Nuevo over the gorge — cinematic, historic, and intensely scenic. Timing tip: leave by 09:00, enjoy a relaxed lunch, then return before late evening. The drive is part of the reward.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Bekannt für die atemberaubende Brücke Puente Nuevo über der Schlucht – filmreif, historisch und unheimlich malerisch. Zeitplan-Tipp: Fahrt gegen 09:00 Uhr los, genießt ein entspanntes Mittagessen und kommt vor dem späten Abend zurück. Die Fahrt dorthin ist bereits Teil des Erlebnisses.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Conocida por el Puente Nuevo sobre el Tajo: de película, histórica e intensamente pintoresca. Consejo de tiempo: salid sobre las 09:00, disfrutad de un almuerzo tranquilo y volved antes de que caiga la noche. El viaje en coche ya es parte de la experiencia.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Beroemd om de Puente Nuevo brug over de kloof — filmisch, historisch en waanzinnig mooi. Tijdsplanning: vertrek rond 09:00 uur, geniet van een ontspannen lunch en kom voor de late avond weer terug. De rit ernaartoe is al onderdeel van de ervaring.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Känd för bron Puente Nuevo över ravinen – filmatisk, historisk och otroligt vacker. Tidsplan: åk vid 09:00, njut av en avkopplande lunch och kom tillbaka före sen kväll. Bilturen dit är en del av upplevelsen i sig.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestFestivals: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-festivals',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Festivals & Events | AMARA',
    de: 'Frigiliana Gästeguide — Feste & Events | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Fiestas y Eventos | AMARA',
    nl: 'Frigiliana Guest Guide — Festivals & Evenementen | AMARA',
    sv: 'Frigiliana Gästguide — Festivaler & Evenemang | AMARA'
  },
  seoDescription: {
    en: 'Practical overview of festivals and events in Frigiliana & Nerja — what\'s worth it, when to go, and simple planning tips.',
    de: 'Praktische Übersicht zu Festen & Events in Frigiliana & Nerja — wann lohnt es sich und worauf achten.',
    es: 'Resumen práctico de fiestas y eventos en Frigiliana y Nerja: qué merece la pena, cuándo ir y consejos sencillos de planificación.',
    nl: 'Praktisch overzicht van festivals en evenementen in Frigiliana & Nerja — wat is de moeite waard, wanneer te gaan en simpele planningstips.',
    sv: 'Praktisk översikt över festivaler och evenemang i Frigiliana & Nerja — vad som är värt att se, när man ska åka och enkla planeringstips.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: {
    en: 'Festivals in Frigiliana & Nerja',
    de: 'Feste & Events in Frigiliana & Nerja',
    es: 'Fiestas en Frigiliana y Nerja',
    nl: 'Festivals in Frigiliana & Nerja',
    sv: 'Festivaler i Frigiliana & Nerja'
  },
  intro: {
    en: 'If your stay overlaps with a local festival, it can be unforgettable — but it also changes parking, noise, and crowd levels. Here\'s the quick guest version: what matters, when it happens, and how to plan it calmly.',
    de: 'Wenn euer Aufenthalt mit einem lokalen Fest zusammenfällt, kann das ein unvergessliches Erlebnis sein – allerdings ändern sich in diesen Zeiten oft auch die Parkmöglichkeiten, die Lautstärke und der Trubel im Ort. Hier ist unsere kurze Gäste-Übersicht: Was wirklich zählt, wann es stattfindet und wie ihr entspannt damit plant.',
    es: 'Si vuestra estancia coincide con una fiesta local, puede ser inolvidable, pero también cambia el aparcamiento, el ruido y la cantidad de gente. Aquí tenéis un resumen rápido para vosotros: qué es importante, cuándo ocurre y cómo planificarlo con tranquilidad.',
    nl: 'Als jullie verblijf samenvalt met een lokaal festival, kan dat onvergetelijk zijn — maar het heeft ook invloed op parkeren, geluid en drukte. Hier is de snelle versie voor onze gasten: wat belangrijk is, wanneer het plaatsvindt en hoe jullie hier ontspannen mee kunnen plannen.',
    sv: 'Om er vistelse sammanfaller med en lokal festival kan det bli oförglömligt – men det påverkar också parkering, ljudnivå och hur mycket folk som är i rörelse. Här är en snabb översikt för er: vad som är viktigt, när det händer och hur ni planerar i lugn och ro.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-festivals',
    label: {
      en: 'Looking for the deeper overview? Read the full festivals guide →',
      de: 'Sucht ihr nach einer ausführlicheren Übersicht? Lest unseren kompletten Event-Guide →',
      es: '¿Buscáis información más detallada? Lee la guía completa de fiestas →',
      nl: 'Op zoek naar een uitgebreider overzicht? Lees de volledige festivalgids →',
      sv: 'Letar ni efter en mer detaljerad översikt? Läs hela festivalguiden →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Festivals & Events',
        de: 'Feste & Events',
        es: 'Fiestas y eventos',
        nl: 'Festivals & Evenementen',
        sv: 'Festivaler & Evenemang'
      },
      items: [
        {
          icon: 'flag',
          title: { en: 'Reyes Magos', de: 'Heilige Drei Könige', es: 'Reyes Magos', nl: 'Drie Koningen', sv: 'Tre Kungar (Reyes Magos)' },
          subtitle: {
            en: 'Jan 5 · Family parade',
            de: '5. Jan · Umzug für Familien',
            es: '5 Ene · Cabalgata familiar',
            nl: '5 Jan · Familie-optocht',
            sv: '5 Jan · Familjeparad'
          },
          body: [
            {
              en: 'The Three Kings parade is a warm, family-friendly highlight at the start of the year.',
              de: 'Der Umzug der Heiligen Drei Könige ist ein warmherziges, familienfreundliches Highlight gleich zu Beginn des Jahres.',
              es: 'La cabalgata de los Reyes Magos es un evento entrañable y muy familiar para empezar el año.',
              nl: 'De Drie Koningen-optocht is een warm, gezinsvriendelijk hoogtepunt aan het begin van het jaar.',
              sv: 'Tre Kungar-paraden är en hjärtlig och familjevänlig höjdpunkt i början av året.'
            },
            {
              en: 'Arrive early for a good spot and expect short temporary road closures around the parade route.',
              de: 'Sichert euch früh einen guten Platz und stellt euch auf kurzzeitige Straßensperrungen entlang der Route ein.',
              es: 'Llegad pronto para coger un buen sitio y tened en cuenta que habrá cortes temporales de calles por donde pasa la cabalgata.',
              nl: 'Zorg dat jullie er vroeg bij zijn voor een goede plek en houd rekening met korte, tijdelijke wegafsluitingen langs de route.',
              sv: 'Var ute i god tid för att få en bra plats och räkna med kortvariga vägavstängningar längs paradvägen.'
            }
          ]
        },
        {
          icon: 'landmark',
          title: { en: 'San Sebastián', de: 'San Sebastián', es: 'San Sebastián', nl: 'San Sebastián', sv: 'San Sebastián' },
          subtitle: {
            en: 'Jan 20 · Traditional village celebration',
            de: '20. Jan · Traditionelles Dorffest',
            es: '20 Ene · Fiesta tradicional del pueblo',
            nl: '20 Jan · Traditioneel dorpsfeest',
            sv: '20 Jan · Traditionell byfest'
          },
          body: [
            {
              en: 'A traditional celebration in Frigiliana with music, local food and fireworks in the evening.',
              de: 'Ein traditionelles Fest in Frigiliana mit Musik, regionalem Essen und Feuerwerk am Abend.',
              es: 'Una celebración tradicional en Frigiliana con música, comida local y fuegos artificiales por la noche.',
              nl: 'Een traditioneel feest in Frigiliana met muziek, lokaal eten en vuurwerk in de avond.',
              sv: 'En traditionell fest i Frigiliana med musik, lokal mat och fyrverkerier på kvällen.'
            }
          ]
        },
        {
          icon: 'dance',
          title: { en: 'Carnaval', de: 'Karneval', es: 'Carnaval', nl: 'Carnaval', sv: 'Karneval' },
          subtitle: {
            en: 'Feb/Mar · Fun & costumes',
            de: 'Feb/März · Spaß & Kostüme',
            es: 'Feb/Mar · Diversión y disfraces',
            nl: 'Feb/Mrt · Plezier & kostuums',
            sv: 'Feb/Mar · Nöje & maskeraddräkter'
          },
          body: [
            {
              en: 'Light-hearted, social and playful — costume vibes, street energy, and a great "join for an hour" event.',
              de: 'Ausgelassen, gesellig und verspielt – viele Kostüme, pure Energie auf den Straßen und ein perfektes Event, um "einfach mal für eine Stunde mitzumachen".',
              es: 'Alegre, social y muy divertido: ambiente de disfraces, energía en la calle y un evento genial para "unirse un ratito".',
              nl: 'Luchtig, sociaal en speels — volop kostuums, levendigheid op straat en een geweldig evenement om "even een uurtje aan mee te doen".',
              sv: 'Lättsamt, socialt och lekfullt – härlig maskeradvibb, energi på gatorna och ett perfekt evenemang att "hänga med på en liten stund".'
            },
            {
              en: 'Best approach: go for a short window, then retreat back to calm when you\'ve had enough.',
              de: 'Unser Tipp: Mischt euch für eine Weile unter die Leute und zieht euch dann wieder in die Ruhe zurück, sobald ihr genug Eindrücke gesammelt habt.',
              es: 'El mejor enfoque: id a disfrutar un rato y luego retiraos a la tranquilidad cuando ya hayáis tenido suficiente.',
              nl: 'Onze tip: meng jullie even in de drukte en trek je daarna weer heerlijk terug in de rust wanneer jullie het welletjes vinden.',
              sv: 'Bästa upplägget: gå dit en kort stund och dra er sedan tillbaka till lugnet när ni känner er nöjda.'
            }
          ]
        },
        {
          icon: 'moon',
          title: { en: 'Semana Santa', de: 'Semana Santa (Osterwoche)', es: 'Semana Santa', nl: 'Semana Santa (Heilige Week)', sv: 'Semana Santa (Påskveckan)' },
          subtitle: {
            en: 'Mar/Apr · Processions & closures',
            de: 'März/Apr · Prozessionen & Sperrungen',
            es: 'Mar/Abr · Procesiones y cortes de calles',
            nl: 'Mrt/Apr · Processies & wegafsluitingen',
            sv: 'Mar/Apr · Processioner & avstängningar'
          },
          body: [
            {
              en: 'Reverent processions, marching bands and a very different rhythm in town. Beautiful to witness — but streets can close and evenings can be crowded.',
              de: 'Ehrfürchtige Prozessionen, traditionelle Kapellen und ein ganz eigener, besonderer Rhythmus im Ort. Wunderschön anzusehen – bedenkt aber, dass Straßen gesperrt werden und es abends sehr voll wird.',
              es: 'Procesiones solemnes, bandas de música y un ritmo muy diferente en el pueblo. Precioso de ver, pero tened en cuenta que se cortan calles y las tardes pueden estar muy concurridas.',
              nl: 'Eerbiedige processies, muziekkorpsen en een heel ander ritme in het dorp. Prachtig om mee te maken — maar straten kunnen worden afgesloten en de avonden zijn vaak erg druk.',
              sv: 'Stämningsfulla processioner, musikkårer och en helt annan rytm i byn. Vackert att uppleva – men gator kan stängas av och kvällarna kan vara mycket folktäta.'
            },
            {
              en: 'Plan dinner and parking with extra buffer and avoid driving into the center during procession times.',
              de: 'Plant für euer Abendessen und die Parkplatzsuche etwas mehr Zeit ein und vermeidet es, während der Prozessionen mit dem Auto ins Zentrum zu fahren.',
              es: 'Planificad la cena y el aparcamiento con margen de tiempo, y evitad entrar al centro en coche durante las procesiones.',
              nl: 'Plan jullie diner en het parkeren met wat extra speling in de tijd, en vermijd om tijdens processies met de auto het centrum in te rijden.',
              sv: 'Planera middag och parkering med lite extra tidsmarginal och undvik att köra in i centrum under processionerna.'
            }
          ]
        },
        {
          icon: 'sparkle',
          title: { en: 'Cruces de Mayo', de: 'Kreuzfest im Mai', es: 'Cruces de Mayo', nl: 'Meikruisen', sv: 'Majkors' },
          subtitle: {
            en: 'May · Flower-decorated crosses',
            de: 'Mai · Blumengeschmückte Kreuze',
            es: 'Mayo · Cruces decoradas con flores',
            nl: 'Mei · Met bloemen versierde kruisen',
            sv: 'Maj · Blomdekorerade kors'
          },
          body: [
            {
              en: 'A colourful spring celebration where streets and plazas are decorated with flower crosses.',
              de: 'Ein farbenfrohes Frühlingsfest, bei dem Straßen und Plätze mit Blumenkreuzen geschmückt werden.',
              es: 'Una celebración primaveral con cruces decoradas con flores en calles y plazas.',
              nl: 'Een kleurrijk lentefeest waarbij straten en pleinen met bloemenkruisen worden versierd.',
              sv: 'En färgstark vårfest där gator och torg dekoreras med blomkors.'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'San Juan Night', de: 'Noche de San Juan (Johannisnacht)', es: 'Noche de San Juan', nl: 'Noche de San Juan', sv: 'Noche de San Juan (Midsommar)' },
          subtitle: {
            en: 'Jun 23/24 · Beach bonfires',
            de: '23./24. Jun · Lagerfeuer am Strand',
            es: '23/24 Jun · Hogueras en la playa',
            nl: '23/24 Jun · Vreugdevuren op het strand',
            sv: '23/24 Jun · Brasor på stranden'
          },
          body: [
            {
              en: 'A coastal tradition: bonfires, people gathering at the sea, and a festive summer mood (mainly in Nerja).',
              de: 'Eine wunderschöne Tradition an der Küste: Lagerfeuer, Menschen versammeln sich am Meer und eine festliche Sommerstimmung (hauptsächlich in Nerja).',
              es: 'Una tradición costera: hogueras, gente reuniéndose junto al mar y un ambiente de fiesta veraniega (principalmente en Nerja).',
              nl: 'Een traditie aan de kust: vreugdevuren, mensen die samenkomen bij de zee en een feestelijke zomerse sfeer (vooral in Nerja).',
              sv: 'En kusttradition: brasor, människor som samlas vid havet och en festlig sommarstämning (främst i Nerja).'
            },
            {
              en: 'If you go: take only essentials, expect crowds late at night, and plan your return calmly.',
              de: 'Wenn ihr hingeht: Nehmt nur das Nötigste mit, stellt euch auf viele Menschen in der Nacht ein und plant eure Rückkehr entspannt.',
              es: 'Si vais: llevad solo lo esencial, esperad mucha gente a altas horas de la noche y planificad vuestro regreso con tranquilidad.',
              nl: 'Als jullie gaan: neem alleen het nodige mee, verwacht grote drukte laat in de avond en plan jullie terugweg op jullie gemak.',
              sv: 'Om ni åker dit: ta bara med det viktigaste, förvänta er mycket folk sent på kvällen och planera hemfärden i lugn och ro.'
            }
          ]
        },
        {
          icon: 'wave',
          title: { en: 'Virgen del Carmen', de: 'Virgen del Carmen', es: 'Virgen del Carmen', nl: 'Virgen del Carmen', sv: 'Virgen del Carmen' },
          subtitle: {
            en: 'Jul 16 · Sea procession',
            de: '16. Jul · Prozession am Meer',
            es: '16 Jul · Procesión marítima',
            nl: '16 Jul · Processie op zee',
            sv: '16 Jul · Procession vid havet'
          },
          body: [
            {
              en: 'One of the most atmospheric summer events in Nerja: a procession honouring the patron saint of fishermen, carried from church to the sea.',
              de: 'Eines der stimmungsvollsten Sommerfeste in Nerja: eine Prozession zu Ehren der Schutzheiligen der Fischer, die bis ans Meer getragen wird.',
              es: 'Uno de los eventos más emblemáticos del verano en Nerja: una procesión dedicada a la patrona de los pescadores que llega hasta el mar.',
              nl: 'Een van de meest sfeervolle zomerevenementen in Nerja met een processie richting zee.',
              sv: 'Ett av sommarens mest stämningsfulla evenemang i Nerja med procession mot havet.'
            }
          ]
        },
        {
          icon: 'star',
          title: { en: '3 Cultures Festival', de: 'Festival der 3 Kulturen', es: 'Festival 3 Culturas', nl: 'Festival van de 3 Culturen', sv: '3 Kulturer-festivalen' },
          subtitle: {
            en: 'Late Aug · Frigiliana highlight',
            de: 'Ende August · Frigiliana Highlight',
            es: 'Finales de agosto · Lo más destacado de Frigiliana',
            nl: 'Eind augustus · Hoogtepunt van Frigiliana',
            sv: 'Slutet av aug · Frigilianas höjdpunkt'
          },
          body: [
            {
              en: 'Candlelit streets, music, small concerts and a lively evening atmosphere in the historic quarter. It\'s the most iconic festival moment in Frigiliana.',
              de: 'Bei Kerzenschein erleuchtete Gassen, Musik, kleine Konzerte und eine wunderbar lebendige Abendstimmung in der Altstadt. Es ist das absolute Festival-Highlight in Frigiliana.',
              es: 'Calles iluminadas con velas, música, pequeños conciertos y un ambiente nocturno muy animado en el casco histórico. Es el momento festivo más icónico de Frigiliana.',
              nl: 'Door kaarslicht verlichte straatjes, muziek, kleine concerten en een levendige avondsfeer in het historische centrum. Dit is hét meest iconische festivalmoment in Frigiliana.',
              sv: 'Levande ljus på gatorna, musik, små konserter och en härlig kvällsatmosfär i de historiska kvarteren. Detta är den mest ikoniska festivalen i Frigiliana.'
            },
            {
              en: 'Practical tip: arrive before the evening peak (around 19:00–20:00) and expect limited car access / packed parking.',
              de: 'Praktischer Tipp: Kommt am besten vor dem großen abendlichen Andrang (gegen 19:00–20:00 Uhr) und stellt euch auf sehr begrenzte Parkplätze und Straßensperrungen ein.',
              es: 'Consejo práctico: llegad antes de la hora punta de la tarde (sobre las 19:00–20:00) y tened en cuenta que el acceso en coche estará limitado y los aparcamientos llenos.',
              nl: 'Praktische tip: kom vóór de avonddrukte (rond 19:00–20:00 uur) en houd rekening met beperkte toegang voor auto\'s en overvolle parkeerplaatsen.',
              sv: 'Praktiskt tips: anländ innan kvällsrusningen (runt 19:00–20:00) och var beredda på begränsad biltillgång och fulla parkeringar.'
            }
          ]
        },
        {
          icon: 'music',
          title: { en: 'Nerja Fair', de: 'Feria in Nerja', es: 'Feria de Nerja', nl: 'Feria van Nerja', sv: 'Feria de Nerja (Marknad)' },
          subtitle: {
            en: 'Oct · Big local week',
            de: 'Okt · Die große Festwoche',
            es: 'Oct · La gran semana local',
            nl: 'Okt · Grote feestweek',
            sv: 'Okt · Stor lokal festvecka'
          },
          body: [
            {
              en: 'A larger "local life" event with fairground energy, music and busy evenings.',
              de: 'Ein riesiges lokales Event voller Volksfest-Energie, Musik und sehr lebendigen Abenden.',
              es: 'Un gran evento de la "vida local" con energía de feria, música y noches muy animadas.',
              nl: 'Een groot lokaal evenement vol kermisenergie, muziek en drukke avonden.',
              sv: 'Ett stort lokalt evenemang fyllt av marknadsenergi, musik och livliga kvällar.'
            },
            {
              en: 'Great if you enjoy crowds and atmosphere — less ideal if you\'re looking for quiet nights.',
              de: 'Fantastisch, wenn ihr in den Trubel und die Atmosphäre eintauchen wollt – weniger ideal, wenn ihr ruhige Abende bevorzugt.',
              es: 'Genial si disfrutáis de la multitud y el ambiente; menos ideal si buscáis noches tranquilas.',
              nl: 'Geweldig als jullie houden van drukte en gezelligheid — minder ideaal als jullie op zoek zijn naar stille avonden.',
              sv: 'Perfekt om ni gillar folkliv och härlig stämning – mindre idealiskt om ni letar efter lugna kvällar.'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestWellness: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-wellness',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana & Nerja Guest Guide — Wellness | AMARA',
    de: 'Frigiliana & Nerja Gästeguide — Wellness | AMARA',
    es: 'Guía para huéspedes en Frigiliana y Nerja — Bienestar | AMARA',
    nl: 'Frigiliana & Nerja Guest Guide — Wellness | AMARA',
    sv: 'Frigiliana & Nerja Gästguide — Wellness | AMARA'
  },
  seoDescription: {
    en: 'Curated wellness options in Frigiliana & Nerja — from thalassotherapy to holistic Ayurveda.',
    de: 'Ausgewählte Wellness-Optionen in Frigiliana & Nerja — von Thalassotherapie bis hin zu ganzheitlichem Ayurveda.',
    es: 'Opciones de bienestar seleccionadas en Frigiliana y Nerja: desde talasoterapia hasta ayurveda holístico.',
    nl: 'Geselecteerde wellness-opties in Frigiliana & Nerja — van thalassotherapie tot holistische Ayurveda.',
    sv: 'Utvalda wellnessalternativ i Frigiliana & Nerja — från thalassoterapi till holistisk Ayurveda.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Wellness', de: 'Wellness', es: 'Bienestar', nl: 'Wellness', sv: 'Wellness' },
  intro: {
    en: 'From the quiet streets of Frigiliana to the coastal retreats of Nerja, here are the best ways to slow down and unwind.',
    de: 'Von den ruhigen Gassen Frigilianas bis hin zu den Küsten-Retreats in Nerja – hier sind die besten Möglichkeiten, um einen Gang zurückzuschalten und die Seele baumeln zu lassen.',
    es: 'Desde las tranquilas calles de Frigiliana hasta los retiros costeros de Nerja, aquí tenéis las mejores formas de bajar el ritmo y desconectar.',
    nl: 'Van de rustige straatjes van Frigiliana tot de retraites aan de kust van Nerja, hier zijn de beste manieren om een stapje terug te doen en te ontspannen.',
    sv: 'Från Frigilianas lugna gator till Nerjas kustnära retreats – här är de bästa sätten att varva ner och koppla av på.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-wellness',
    label: {
      en: 'Want the full curated overview? Read the full wellness guide →',
      de: 'Hättet ihr gerne die komplette Übersicht? Lest unseren vollständigen Wellness-Guide →',
      es: '¿Queréis ver todas nuestras recomendaciones? Lee la guía completa de bienestar →',
      nl: 'Willen jullie het volledige overzicht zien? Lees de complete wellnessgids →',
      sv: 'Vill ni ha hela den utvalda översikten? Läs hela wellnessguiden →'
    }
  },
  categories: [
    {
      heading: { en: 'Frigiliana', de: 'Frigiliana', es: 'Frigiliana', nl: 'Frigiliana', sv: 'Frigiliana' },
      items: [
        {
          icon: 'accommodation',
          title: { en: 'Frigiliana Wellness', de: 'Frigiliana Wellness', es: 'Frigiliana Wellness', nl: 'Frigiliana Wellness', sv: 'Frigiliana Wellness' },
          subtitle: {
            en: 'Nearby · Or massage in your AMARA apartment',
            de: 'Ganz in der Nähe · Oder Massage in eurem AMARA Apartment',
            es: 'Muy cerca · O masaje en vuestro apartamento AMARA',
            nl: 'Vlakbij · Of massage in jullie AMARA-appartement',
            sv: 'Nära · Eller massage i er AMARA-lägenhet'
          },
          body: [
            {
              en: 'You can visit them at Cam. C. San Sebastián, 6, 29788 Frigiliana — just 600 m away, around a 10-minute walk from AMARA. If you prefer, they can also come to your AMARA apartment for a massage, perfect if you would rather stay in and enjoy a quiet treatment at home.',
              de: 'Ihr könnt sie direkt aufsuchen: Cam. C. San Sebastián, 6, 29788 Frigiliana – nur 600 m entfernt, etwa 10 Minuten zu Fuß von AMARA. Wenn ihr möchtet, kommt Frigiliana Wellness aber auch direkt in euer AMARA Apartment, ideal, wenn ihr lieber in Ruhe bleiben und die Behandlung ganz entspannt zu Hause genießen möchtet.',
              es: 'Podéis ir directamente a Cam. C. San Sebastián, 6, 29788 Frigiliana: a solo 600 m, unos 10 minutos andando desde AMARA. Si lo preferís, también pueden ir a vuestro apartamento AMARA para daros un masaje, ideal si os apetece quedaros tranquilos en casa y disfrutar allí mismo del tratamiento.',
              nl: 'Jullie kunnen terecht op Cam. C. San Sebastián, 6, 29788 Frigiliana — op slechts 600 m afstand, ongeveer 10 minuten lopen vanaf AMARA. Als jullie liever willen, kunnen ze ook naar jullie AMARA-appartement komen voor een massage, ideaal als jullie rustig thuis willen blijven en daar van de behandeling willen genieten.',
              sv: 'Ni kan besöka dem på Cam. C. San Sebastián, 6, 29788 Frigiliana — bara 600 m bort, cirka 10 minuters promenad från AMARA. Om ni föredrar det kan de också komma till er AMARA-lägenhet för en massage, perfekt om ni hellre vill stanna hemma och njuta av en lugn behandling där.'
            },
            {
              en: 'What we especially like here is that the treatment is tailored to how you feel on the day. They first talk with you about what your body needs in that moment and then decide together which treatment, or combination of treatments, would be best — aromatherapy massage, deep tissue massage, Indian head massage, sports massage, reflexology or a facial treatment. In practice, you simply book the time and decide together on the day what feels right for you.',
              de: 'Was wir hier besonders schön finden: Die Behandlung wird ganz individuell daran angepasst, wie ihr euch an dem jeweiligen Tag fühlt. Zuerst wird gemeinsam besprochen, was euer Körper in diesem Moment braucht, und dann entscheidet ihr zusammen, welche Behandlung oder Kombination am besten passt – Aromatherapie-Massage, Deep-Tissue-Massage, indische Kopfmassage, Sportmassage, Reflexzonenbehandlung oder eine Gesichtsbehandlung. Praktisch bedeutet das: Ihr bucht einfach die Zeit und entscheidet dann am Tag selbst gemeinsam, was sich für euch am besten anfühlt.',
              es: 'Lo que nos parece especialmente bonito aquí es que el tratamiento se adapta a cómo os sintáis ese mismo día. Primero hablan con vosotros sobre lo que vuestro cuerpo necesita en ese momento y luego decidís juntos qué tratamiento, o combinación de tratamientos, encaja mejor: masaje con aromaterapia, masaje de tejido profundo, masaje indio de cabeza, masaje deportivo, reflexología o un tratamiento facial. En la práctica, simplemente reserváis el tiempo y decidís juntos ese mismo día qué os apetece más.',
              nl: 'Wat wij hier vooral fijn aan vinden, is dat de behandeling helemaal wordt afgestemd op hoe jullie je die dag voelen. Eerst bespreken ze samen met jullie wat jullie lichaam op dat moment nodig heeft, en daarna beslissen jullie samen welke behandeling, of combinatie van behandelingen, het beste past — aromatherapiemassage, diepe weefselmassage, Indiase hoofdmassage, sportmassage, reflexologie of een gezichtsbehandeling. In de praktijk boeken jullie dus gewoon de tijd, en beslissen jullie op de dag zelf samen wat het beste voelt.',
              sv: 'Det vi särskilt tycker om här är att behandlingen anpassas efter hur ni känner er just den dagen. Först pratar de med er om vad kroppen behöver i stunden, och sedan bestämmer ni tillsammans vilken behandling, eller kombination av behandlingar, som passar bäst — aromaterapimassage, djupvävnadsmassage, indisk huvudmassage, idrottsmassage, reflexologi eller en ansiktsbehandling. I praktiken bokar ni alltså bara tiden och bestämmer sedan tillsammans på dagen vad som känns rätt för er.'
            }
          ],
          actions: [
            {
              label: { en: 'Open website', de: 'Website öffnen', es: 'Abrir página web', nl: 'Open website', sv: 'Öppna webbplats' },
              href: 'https://www.frigilianawellness.com/'
            },
            {
              label: { en: 'WhatsApp', de: 'WhatsApp', es: 'WhatsApp', nl: 'WhatsApp', sv: 'WhatsApp' },
              href: 'https://wa.me/34711074662',
              variant: 'secondary'
            }
          ]
        },
        {
          icon: 'moon',
          title: { en: 'Lidia — California Massage', de: 'Lidia — Kalifornische Massage', es: 'Lidia — Masaje Californiano', nl: 'Lidia — Californische Massage', sv: 'Lidia — Kalifornisk massage' },
          subtitle: {
            en: 'Countryside · Deep unwind',
            de: 'Auf dem Land · Tiefenentspannung',
            es: 'En el campo · Desconexión profunda',
            nl: 'Op het platteland · Diepe ontspanning',
            sv: 'På landet · Djup avkoppling'
          },
          body: [
            {
              en: 'A quieter, more retreat-like experience. You visit her countryside location for a slower, deeper kind of relaxation — ideal if you want silence, calm, and a more personal session.',
              de: 'Eine noch ruhigere Erfahrung, fast wie in einem Retreat. Ihr besucht sie an ihrem Standort auf dem Land für eine besonders langsame und tiefe Art der Entspannung – ideal, wenn ihr absolute Stille, Ruhe und eine sehr persönliche Session sucht.',
              es: 'Una experiencia más tranquila, casi de retiro. Visitaréis su espacio en el campo para una relajación más pausada y profunda: ideal si buscáis silencio, calma y una sesión mucho más personal.',
              nl: 'Een stillere ervaring die meer aanvoelt als een retreat. Jullie bezoeken haar locatie op het platteland voor een langzamere, diepere vorm van ontspanning — ideaal als jullie op zoek zijn naar stilte, rust en een persoonlijkere sessie.',
              sv: 'En tystare upplevelse som påminner om ett retreat. Ni besöker hennes plats på landet för en långsammare, djupare form av avkoppling – idealiskt om ni vill ha tystnad, lugn och en mer personlig session.'
            }
          ],
          actions: [
            {
              label: { en: 'Open website', de: 'Website öffnen', es: 'Abrir página web', nl: 'Open website', sv: 'Öppna webbplats' },
              href: 'https://www.masajecalifornianoconlidia.com/'
            },
            {
              label: { en: 'WhatsApp', de: 'WhatsApp', es: 'WhatsApp', nl: 'WhatsApp', sv: 'WhatsApp' },
              href: 'https://wa.me/34696555875',
              variant: 'secondary'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Nerja', de: 'Nerja', es: 'Nerja', nl: 'Nerja', sv: 'Nerja' },
      items: [
        {
          icon: 'pool',
          title: { en: 'Ona Marinas de Nerja Spa', de: 'Ona Marinas de Nerja Spa', es: 'Ona Marinas de Nerja Spa', nl: 'Ona Marinas de Nerja Spa', sv: 'Ona Marinas de Nerja Spa' },
          subtitle: {
            en: 'Thalassotherapy · Beachfront',
            de: 'Thalassotherapie · Direkt am Strand',
            es: 'Talasoterapia · Frente al mar',
            nl: 'Thalassotherapie · Aan het strand',
            sv: 'Thalassoterapi · Vid stranden'
          },
          body: [
            {
              en: 'If you are looking for a more classic spa setting in Nerja, this is a good beachfront option with a thalassotherapy focus. You will find thermal water facilities, a calm spa atmosphere, and a more hotel-style wellness experience than the smaller private treatments around Frigiliana.',
              de: 'Wenn ihr in Nerja eher ein klassisches Spa-Ambiente sucht, ist das eine gute Option direkt am Meer mit Fokus auf Thalassotherapie. Ihr findet dort Thermalwasser-Angebote, eine ruhige Spa-Atmosphäre und insgesamt ein stärker hotelgeprägtes Wellness-Erlebnis als bei den kleineren, privaten Behandlungen rund um Frigiliana.',
              es: 'Si buscáis en Nerja un spa más clásico, esta es una buena opción frente al mar con enfoque en talasoterapia. Encontraréis instalaciones de agua termal, un ambiente tranquilo de spa y una experiencia de bienestar más de hotel que los tratamientos privados y pequeños de la zona de Frigiliana.',
              nl: 'Als jullie in Nerja op zoek zijn naar een meer klassieke spa-omgeving, dan is dit een goede optie aan zee met een focus op thalassotherapie. Je vindt er thermale waterfaciliteiten, een rustige spa-sfeer en een meer hotelgerichte wellnesservaring dan bij de kleinere privébehandelingen rond Frigiliana.',
              sv: 'Om ni söker en mer klassisk spa-miljö i Nerja är detta ett bra alternativ vid stranden med fokus på thalassoterapi. Här finns termalvatten, en lugn spa-atmosfär och en mer hotellbaserad wellnessupplevelse än de mindre privata behandlingarna runt Frigiliana.'
            },
            {
              en: 'It is a good fit if you want sea-facing surroundings, a structured spa setting, and a slower half day focused on rest.',
              de: 'Es passt besonders gut, wenn ihr Meeresnähe, ein klares Spa-Setting und einen entspannten halben Tag mit Fokus auf Erholung sucht.',
              es: 'Encaja muy bien si os apetece estar junto al mar, disfrutar de un entorno de spa más estructurado y dedicar medio día a descansar.',
              nl: 'Het past goed als jullie uitzicht op zee willen, een duidelijke spa-setting zoeken en een rustige halve dag aan ontspanning willen besteden.',
              sv: 'Det passar särskilt bra om ni vill ha havsnära omgivning, en tydlig spa-miljö och en lugn halvdag med fokus på vila.'
            }
          ],
          actions: [
            {
              label: { en: 'Open website', de: 'Website öffnen', es: 'Abrir página web', nl: 'Open website', sv: 'Öppna webbplats' },
              href: 'https://www.onahotels.com/es/apart-hotel-marinas-nerja/'
            }
          ]
        },
        {
          icon: 'medical',
          title: {
            en: 'Holistic & Clinical Wellness',
            de: 'Ganzheitliche Gesundheit',
            es: 'Bienestar Holístico y Clínico',
            nl: 'Holistische & Klinische Wellness',
            sv: 'Holistisk & Klinisk Wellness'
          },
          subtitle: {
            en: 'Ayurveda · Physiotherapy · Yoga',
            de: 'Ayurveda · Physiotherapie · Yoga',
            es: 'Ayurveda · Fisioterapia · Yoga',
            nl: 'Ayurveda · Fysiotherapie · Yoga',
            sv: 'Ayurveda · Fysioterapi · Yoga'
          },
          body: [
            {
              en: 'Nerja also has more specialized options if you are looking for a very specific kind of treatment rather than a classic spa visit. EnerVeda is a good option for guests interested in Ayurveda and a more holistic approach, while Rut Montiel Wellness is better suited if you are looking for physiotherapy, bodywork, or more active formats such as yoga.',
              de: 'In Nerja gibt es außerdem spezialisiertere Optionen, wenn ihr eher eine ganz bestimmte Behandlung sucht und nicht den klassischen Spa-Besuch. EnerVeda ist eine gute Wahl für Gäste mit Interesse an Ayurveda und einem ganzheitlichen Ansatz, während Rut Montiel Wellness besser passt, wenn ihr Physiotherapie, gezielte Körperarbeit oder aktivere Formate wie Yoga sucht.',
              es: 'En Nerja también hay opciones más especializadas si buscáis un tratamiento más concreto y no tanto una visita clásica de spa. EnerVeda es una buena opción para quienes se interesan por el Ayurveda y un enfoque más holístico, mientras que Rut Montiel Wellness encaja mejor si buscáis fisioterapia, trabajo corporal más específico o formatos más activos como yoga.',
              nl: 'In Nerja zijn er ook meer gespecialiseerde opties als jullie op zoek zijn naar een heel specifieke behandeling en niet per se naar een klassieke spa-ervaring. EnerVeda is een goede keuze voor gasten die geïnteresseerd zijn in Ayurveda en een meer holistische benadering, terwijl Rut Montiel Wellness beter past als jullie fysiotherapie, gerichte bodywork of actievere vormen zoals yoga zoeken.',
              sv: 'I Nerja finns också mer specialiserade alternativ om ni söker en mer specifik behandling snarare än ett klassiskt spa-besök. EnerVeda passar bra för gäster som är intresserade av Ayurveda och ett mer holistiskt upplägg, medan Rut Montiel Wellness passar bättre om ni söker fysioterapi, mer riktad kroppsterapi eller aktivare format som yoga.'
            }
          ],
          actions: [
            {
              label: { en: 'EnerVeda website', de: 'EnerVeda Website', es: 'Página web de EnerVeda', nl: 'EnerVeda website', sv: 'EnerVeda webbplats' },
              href: 'https://enerveda.com/'
            },
            {
              label: { en: 'Rut Montiel website', de: 'Rut Montiel Website', es: 'Página web de Rut Montiel', nl: 'Rut Montiel website', sv: 'Rut Montiel webbplats' },
              href: 'https://rutmontiel.com/',
              variant: 'secondary'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestSightseeing: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-sightseeing',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Sightseeing | AMARA',
    de: 'Frigiliana Gästeguide — Sightseeing | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Turismo | AMARA',
    nl: 'Frigiliana Guest Guide — Bezienswaardigheden | AMARA',
    sv: 'Frigiliana Gästguide — Sevärdheter | AMARA'
  },
  seoDescription: {
    en: 'Practical sightseeing overview for guests in Frigiliana & Nerja — caves, viewpoints, old streets, and quick planning tips.',
    de: 'Praktische Sightseeing-Übersicht für Gäste in Frigiliana & Nerja — Höhlen, Aussichtspunkte, Altstadt & kurze Tipps.',
    es: 'Resumen práctico de turismo para los huéspedes de Frigiliana y Nerja: cuevas, miradores, calles del casco antiguo y consejos rápidos de planificación.',
    nl: 'Praktisch sightseeing-overzicht voor gasten in Frigiliana & Nerja — grotten, uitzichtpunten, oude straatjes en snelle planningstips.',
    sv: 'Praktisk sightseeingöversikt för gäster i Frigiliana & Nerja — grottor, utsiktsplatser, gamla gator och snabba planeringstips.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Sightseeing', de: 'Sightseeing', es: 'Turismo', nl: 'Bezienswaardigheden', sv: 'Sevärdheter' },
  intro: {
    en: 'The essentials that actually feel worth it: caves, viewpoints, old streets — plus calm ways to do each one. Our rule: pick 1–2 highlights, then leave space for a slow meal or a beach hour.',
    de: 'Die Must-Sees, die sich wirklich lohnen: Höhlen, Aussichtspunkte, die Altstadt – und unsere Tipps, wie ihr alles ganz entspannt angehen könnt. Unsere Faustregel: Sucht euch 1–2 Highlights aus und lasst euch danach noch Zeit für ein ausgiebiges Essen oder eine ruhige Stunde am Strand.',
    es: 'Lo esencial que realmente merece la pena: cuevas, miradores, calles del casco antiguo... y la forma de disfrutar de cada cosa con calma. Nuestra regla: elegid 1 o 2 lugares destacados y dejad tiempo para una comida sin prisas o un rato en la playa.',
    nl: 'De essentials die écht de moeite waard zijn: grotten, uitzichtpunten, oude straatjes — plus ontspannen manieren om ze te bezoeken. Onze vuistregel: kies 1 of 2 hoogtepunten en houd daarna ruimte over voor een uitgebreide maaltijd of een uurtje strand.',
    sv: 'Det viktigaste som faktiskt känns värt det: grottor, utsiktsplatser, gamla gator – och lugna sätt att uppleva var och en av dem. Vår regel: välj 1–2 höjdpunkter och lämna sedan tid för en långsam måltid eller en timme på stranden.'
  },
  authorityLink: {
    targetSlug: 'frigiliana-experience',
    label: {
      en: 'Looking for a deeper overview? Read the full sightseeing guide →',
      de: 'Sucht ihr nach einer ausführlicheren Übersicht? Lest unseren kompletten Sightseeing-Guide →',
      es: '¿Buscáis información más detallada? Lee la guía turística completa →',
      nl: 'Op zoek naar een uitgebreider overzicht? Lees de volledige sightseeing-gids →',
      sv: 'Letar ni efter en mer detaljerad översikt? Läs hela sightseeingguiden →'
    }
  },
  categories: [
    {
      heading: {
        en: 'Caves, Viewpoints & Old Streets',
        de: 'Höhlen, Aussichtspunkte & Altstadt',
        es: 'Cuevas, miradores y calles del casco antiguo',
        nl: 'Grotten, uitzichtpunten & oude straatjes',
        sv: 'Grottor, utsiktsplatser & gamla gator'
      },
      items: [
        {
          icon: 'star',
          title: { en: 'Nerja Cave', de: 'Höhlen von Nerja', es: 'Cueva de Nerja', nl: 'Grotten van Nerja', sv: 'Nerjas grottor' },
          subtitle: {
            en: '~20–25 min · Iconic landmark',
            de: '~20–25 Min. · Echtes Wahrzeichen',
            es: '~20–25 min · Un lugar emblemático',
            nl: '~20–25 min · Iconisch monument',
            sv: '~20–25 min · Ikoniskt landmärke'
          },
          body: [
            {
              en: 'One of Andalusia\'s most famous cave visits, with huge chambers and dramatic formations. It\'s great year-round — and especially nice on hot days. Tip: go earlier or later to avoid peak crowds, then keep the afternoon intentionally light.',
              de: 'Eine der berühmtesten Höhlen Andalusiens, mit riesigen Sälen und spektakulären Tropfsteinformationen. Ein tolles Erlebnis das ganze Jahr über – und besonders angenehm an heißen Tagen. Tipp: Geht früh morgens oder am späteren Nachmittag, um dem größten Andrang zu entgehen. Haltet euch den Rest des Tages ganz bewusst für etwas Entspanntes frei.',
              es: 'Una de las visitas a cuevas más famosas de Andalucía, con enormes salas y formaciones espectaculares. Es fantástica todo el año, y especialmente agradable en los días de mucho calor. Consejo: id temprano o a última hora para evitar las aglomeraciones y dejad la tarde libre a propósito.',
              nl: 'Een van de beroemdste grotten in Andalusië, met enorme zalen en indrukwekkende rotsformaties. Geweldig om te bezoeken, het hele jaar door — en vooral fijn op hete dagen. Tip: ga lekker vroeg of juist later op de dag om de grootste drukte voor te zijn. Houd de middag daarna lekker rustig en ontspannen.',
              sv: 'Ett av Andalusiens mest kända grottbesök, med enorma salar och dramatiska droppstensformationer. Fantastiskt året runt – och särskilt skönt på varma dagar. Tips: åk tidigt eller sent för att undvika den värsta trängseln, och håll sedan resten av eftermiddagen avsiktligt lättsam.'
            }
          ],
          actions: [
            {
              label: { en: 'Open in Google Maps', de: 'In Google Maps öffnen', es: 'Abrir en Google Maps', nl: 'Openen in Google Maps', sv: 'Öppna i Google Maps' },
              href: 'https://www.google.com/maps/search/?api=1&query=Cueva+de+Nerja'
            },
            {
              label: { en: 'Official site', de: 'Offizielle Website', es: 'Sitio web oficial', nl: 'Officiële website', sv: 'Officiell webbplats' },
              href: 'https://cuevadenerja.es/en/',
              variant: 'secondary'
            }
          ]
        },
        {
          icon: 'info',
          title: { en: 'Cave Museum', de: 'Höhlenmuseum', es: 'Museo de la Cueva', nl: 'Grottenmuseum', sv: 'Grottmuseum' },
          subtitle: {
            en: 'Next to caves · Quick context',
            de: 'Nahe der Höhlen · Historischer Kontext',
            es: 'Junto a las cuevas · Contexto rápido',
            nl: 'Naast de grotten · Korte context',
            sv: 'Bredvid grottorna · Snabb kontext'
          },
          body: [
            {
              en: 'A small museum that adds context to the area\'s natural and cultural heritage. A smart add-on if you\'re already doing the caves. Rhythm: museum + cave, then a slow lunch (Maro is a calm reset nearby).',
              de: 'Ein kleines Museum, das spannendes Hintergrundwissen zum Natur- und Kulturerbe der Region bietet. Eine clevere Ergänzung, wenn ihr euch ohnehin die Höhlen anseht. Perfekter Ablauf: Museum + Höhle, gefolgt von einem entspannten Mittagessen (Maro ist ein herrlich ruhiger Ort ganz in der Nähe).',
              es: 'Un pequeño museo que aporta contexto al patrimonio natural y cultural de la zona. Un gran complemento si ya vais a ver las cuevas. Buen ritmo de visita: museo + cueva, y luego un almuerzo tranquilo (Maro es un lugar ideal para desconectar justo al lado).',
              nl: 'Een klein museum dat context geeft aan het natuurlijke en culturele erfgoed van de regio. Een slimme toevoeging als jullie toch al naar de grotten gaan. Perfecte planning: museum + grot, en daarna een ontspannen lunch (Maro is een heerlijk rustig plekje vlakbij).',
              sv: 'Ett litet museum som ger en bra inblick i områdets natur- och kulturarv. Ett smart tillägg om ni ändå ska besöka grottorna. Ett bra upplägg: museum + grotta, och därefter en långsam lunch (Maro är en lugn plats i närheten för att varva ner).'
            }
          ],
          actions: [
            {
              label: { en: 'Open in Google Maps', de: 'In Google Maps öffnen', es: 'Abrir en Google Maps', nl: 'Openen in Google Maps', sv: 'Öppna i Google Maps' },
              href: 'https://www.google.com/maps/search/?api=1&query=Museo+Cueva+de+Nerja'
            },
            {
              label: { en: 'Official site', de: 'Offizielle Website', es: 'Sitio web oficial', nl: 'Officiële website', sv: 'Officiell webbplats' },
              href: 'https://cuevadenerja.es/en/',
              variant: 'secondary'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'Balcón de Europa', de: 'Balcón de Europa', es: 'Balcón de Europa', nl: 'Balcón de Europa', sv: 'Balcón de Europa' },
          subtitle: {
            en: 'Nerja · 10-minute pause',
            de: 'Nerja · 10-Minuten-Pause',
            es: 'Nerja · Parada de 10 minutos',
            nl: 'Nerja · Korte pauze van 10 min',
            sv: 'Nerja · 10 minuters paus'
          },
          body: [
            {
              en: 'Nerja\'s famous seaside viewpoint — best as a short pause, not a long "tourist stop". Best moment: early morning or dusk. Then drift into side streets for a calmer version of town.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Nerjas berühmter Aussichtspunkt direkt am Meer – am besten einfach als kurzer Zwischenstopp und nicht als abendfüllendes Sightseeing-Programm. Die schönste Zeit: Frühmorgens oder in der Dämmerung. Lasst euch danach einfach durch die kleinen Gassen treiben, dort ist es wesentlich ruhiger.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'El famoso mirador frente al mar de Nerja: mejor como una breve pausa que como una larga parada turística. El mejor momento: a primera hora de la mañana o al anochecer. Después, perdeos por las callejuelas para disfrutar de una versión más tranquila del pueblo.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Nerja\'s beroemde uitzichtpunt aan zee — ideaal voor een korte pauze in plaats van een lange "toeristische stop". Het mooiste moment: vroeg in de ochtend of in de schemering. Dwaal daarna lekker de zijstraatjes in voor de rustigere kant van het stadje.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Nerjas berömda utsiktsplats vid havet – bäst som ett kort stopp, inte som en utdragen turistattraktion. Bästa tiden: tidig morgon eller i skymningen. Strosa sedan vidare in i sidogränderna för att uppleva en lugnare del av staden.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'flag',
          title: { en: 'Old Town & Panels', de: 'Altstadt & die Keramiktafeln', es: 'Casco Antiguo y los paneles', nl: 'Oude stad & de keramiekpanelen', sv: 'Gamla stan & Keramikpanelerna' },
          subtitle: {
            en: 'Frigiliana · Blue-hour walk',
            de: 'Frigiliana · Spaziergang zur Blauen Stunde',
            es: 'Frigiliana · Paseo al anochecer',
            nl: 'Frigiliana · Wandeling in het blauwe uur',
            sv: 'Frigiliana · Promenad i blå timmen'
          },
          body: [
            {
              en: 'A walkable story in white streets: the ceramic panels narrate key history in the upper quarter. Best moment: the last hour of daylight (softer light, fewer people). Expect steps and steep lanes.',
              de: 'Eine Geschichte, die ihr durch weiße Gassen spazierend erlebt: Die bemalten Keramiktafeln im oberen Viertel erzählen die wichtigsten Momente der Historie. Die schönste Zeit: Die letzte Stunde bei Tageslicht (weicheres Licht, kaum noch Besucher). Stellt euch auf viele Stufen und steile Gässchen ein.',
              es: 'Una historia que se cuenta paseando por calles blancas: los paneles de cerámica narran la historia clave en el barrio alto. El mejor momento: la última hora de luz del día (luz más suave, menos gente). Preparaos para subir escaleras y cuestas empinadas.',
              nl: 'Een verhaal dat je wandelend beleeft in de witte straatjes: de keramiekpanelen in de bovenwijk vertellen de belangrijkste stukken geschiedenis. Het mooiste moment: het laatste uurtje daglicht (zachter licht, minder mensen). Houd rekening met veel trappen en steile straatjes.',
              sv: 'En historia man kan promenera sig igenom bland vita gator: keramikpanelerna i de övre kvarteren berättar viktig historia. Bästa tiden: den sista timmen av dagsljus (mjukare ljus, färre människor). Var beredd på trappor och branta gränder.'
            }
          ],
          actions: [
            {
              label: { en: 'Open in Google Maps', de: 'In Google Maps öffnen', es: 'Abrir en Google Maps', nl: 'Openen in Google Maps', sv: 'Öppna i Google Maps' },
              href: 'https://www.google.com/maps/search/?api=1&query=Frigiliana+Barribarto'
            },
            {
              label: { en: 'Panels info', de: 'Infos zu den Tafeln', es: 'Info de los paneles', nl: 'Info over de panelen', sv: 'Info om panelerna' },
              href: 'https://www.turismofrigiliana.es/en/the-12-panels/the-panels.html',
              variant: 'secondary'
            }
          ]
        },
        {
          icon: 'landmark',
          title: { en: 'El Águila Aqueduct', de: 'Aquädukt El Águila', es: 'Acueducto del Águila', nl: 'Aquaduct El Águila', sv: 'El Águila Akvedukt' },
          subtitle: {
            en: 'Maro · 5-minute wow',
            de: 'Maro · 5-Minuten-Wow',
            es: 'Maro · Un "wow" de 5 minutos',
            nl: 'Maro · Een 5-minuten-wow',
            sv: 'Maro · 5 minuters wow-känsla'
          },
          body: [
            {
              en: 'A striking 19th-century aqueduct spanning a ravine — a quick stop with a big visual reward. It pairs perfectly with a caves day: stop, look, take one photo, then move on.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein beeindruckendes Aquädukt aus dem 19. Jahrhundert, das sich über eine Schlucht spannt – ein kurzer Stopp, der visuell richtig viel hermacht. Lässt sich ideal mit dem Ausflug zu den Höhlen verbinden: kurz anhalten, staunen, ein Foto machen und entspannt weiterfahren.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un llamativo acueducto del siglo XIX que cruza un barranco: una parada rápida con una gran recompensa visual. Combina a la perfección con el día de las cuevas: parar, mirar, hacer una foto y seguir.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een opvallend 19e-eeuws aquaduct dat over een ravijn is gebouwd — een korte stop met een geweldig visueel resultaat. Perfect te combineren met jullie bezoek aan de grotten: even stoppen, kijken, een foto maken en weer rustig verder gaan.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En slående 1800-talsakvedukt som sträcker sig över en ravin – ett snabbt stopp som ger mycket för ögat. Passar perfekt att kombinera med dagen vid grottorna: stanna till, titta, ta ett foto och åk vidare.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'location-pin',
          title: { en: 'Maro Village', de: 'Dorf Maro', es: 'Pueblo de Maro', nl: 'Maro dorp', sv: 'Maro by' },
          subtitle: {
            en: 'Quiet detour · Slow coffee',
            de: 'Ruhiger Abstecher · Entspannter Kaffee',
            es: 'Desvío tranquilo · Café sin prisas',
            nl: 'Rustige tussenstop · Langzame koffie',
            sv: 'Lugn avstickare · Avslappnad kaffe'
          },
          body: [
            {
              en: 'A small, calm village near the caves — good for a slow coffee and a quiet reset before heading back. Best use: one drink, one short stroll, then leave. The calm is the benefit.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Nerja" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Ein kleines, friedliches Dorf in der Nähe der Höhlen – wunderbar für einen gemütlichen Kaffee und ein wenig Ruhe, bevor es wieder zurückgeht. Am besten: einen Drink nehmen, kurz hindurchschlendern und die Stille genießen, denn genau darin liegt der Charme.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Nerja" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Un pueblo pequeño y tranquilo cerca de las cuevas: perfecto para tomar un café relajado y desconectar antes de volver. Nuestro consejo: tomad algo, dad un breve paseo y continuad. Su mayor atractivo es precisamente esa calma.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Nerja" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een klein, rustig dorpje vlakbij de grotten — fijn voor een relaxte koffie en een moment van rust voordat jullie weer teruggaan. De beste manier om het te ervaren: even een drankje doen, een korte wandeling maken en genieten van de stilte. Dat is de echte charme hier.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Nerja" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'En liten, tyst by i närheten av grottorna – ett trevligt ställe för en lugn kopp kaffe och lite andrum innan ni beger er tillbaka. Bästa upplägget: ta en drink, ta en kort promenad och känn in stillheten, det är själva poängen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Maro+Nerja" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

const nerjaGuestAdventure: GuestGuideEntry = {
  type: 'detail',
  slug: 'nerja-guest-adventure',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Adventure in Nerja | AMARA',
    de: 'Frigiliana Gästeguide — Abenteuer in Nerja | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Aventura en Nerja | AMARA',
    nl: 'Frigiliana Guest Guide — Avontuur in Nerja | AMARA',
    sv: 'Frigiliana Gästguide — Äventyr i Nerja | AMARA'
  },
  seoDescription: {
    en: 'Practical adventure overview near Nerja — kayaking, canyoning, climbing, off-road and Harley tours with quick planning tips.',
    de: 'Praktische Abenteuer-Übersicht rund um Nerja — Kajak, Canyoning, Klettern, Offroad und Harley-Touren mit kurzen Tipps.',
    es: 'Resumen práctico de aventura cerca de Nerja: kayak, barranquismo, escalada, todoterreno y rutas en Harley con consejos rápidos.',
    nl: 'Praktisch avontuuroverzicht bij Nerja — kajakken, canyoning, klimmen, offroad en Harley-tours met snelle planningstips.',
    sv: 'Praktisk äventyrsöversikt nära Nerja — kajak, canyoning, klättring, off-road och Harley-turer med snabba planeringstips.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Adventure in Nerja', de: 'Abenteuer in Nerja', es: 'Aventura en Nerja', nl: 'Avontuur in Nerja', sv: 'Äventyr i Nerja' },
  intro: {
    en: 'Beyond beaches and village walks, Nerja offers some of the most beautiful coastal and mountain experiences in the region. The unique topographical convergence of the Mediterranean coastline and the rugged Sierra mountains creates an extraordinary terrain for outdoor sports. Whether you prefer quiet exploration by kayak, high-speed views by jet ski, or scenic mountain roads on a Harley, all options are easily accessible within 10–20 minutes from Frigiliana. Good to know: the high summer is perfect for water-based activities, while the months from October to May offer optimal conditions for physically demanding terrestrial adventures like climbing and biking.',
    de: 'Jenseits von Stränden und gemütlichen Dorfspaziergängen bietet Nerja einige der schönsten Küsten- und Bergerlebnisse der gesamten Region. Das einzigartige topografische Zusammentreffen der Mittelmeerküste und der schroffen Sierra-Berge schafft ein außergewöhnliches Terrain für Outdoor-Sportarten. Ganz gleich, ob ihr lieber in Ruhe mit dem Kajak auf Erkundungstour geht, schnelle Action auf dem Jetski sucht oder die malerischen Bergstraßen auf einer Harley genießen wollt – alle Optionen sind von Frigiliana aus in 10–20 Minuten bequem erreichbar. Gut zu wissen: Der Hochsommer ist perfekt für Wasseraktivitäten, während die Monate von Oktober bis Mai optimale Bedingungen für körperlich anspruchsvollere Abenteuer an Land wie Klettern und Mountainbiken bieten.',
    es: 'Más allá de las playas y los paseos por el pueblo, Nerja ofrece algunas de las experiencias costeras y de montaña más hermosas de la región. La singular convergencia topográfica de la costa mediterránea y las escarpadas montañas de la Sierra crea un terreno extraordinario para los deportes al aire libre. Tanto si preferís una exploración tranquila en kayak, vistas a toda velocidad en moto de agua o rutas panorámicas por la montaña en Harley, todas las opciones están fácilmente accesibles a unos 10-20 minutos de Frigiliana. Conviene saber: el pleno verano es perfecto para actividades acuáticas, mientras que los meses de octubre a mayo ofrecen condiciones óptimas para aventuras terrestres más exigentes físicamente, como la escalada y el ciclismo.',
    nl: 'Naast stranden en dorpswandelingen biedt Nerja een paar van de mooiste kust- en bergervaringen in de wijde omtrek. De unieke topografische samenkomst van de Middellandse Zeekust en het ruige Sierra-gebergte creëert een buitengewoon terrein voor buitensporten. Of jullie nu de voorkeur geven aan een rustige ontdekkingstocht per kajak, razendsnelle actie op een jetski of schilderachtige bergwegen op een Harley — alle opties zijn makkelijk bereikbaar op slechts 10-20 minuten van Frigiliana. Goed om te weten: de hoogzomer is perfect voor wateractiviteiten, terwijl de maanden van oktober tot mei optimale omstandigheden bieden voor fysiek veeleisendere avonturen op het land, zoals klimmen en mountainbiken.',
    sv: 'Utöver stränder och bypromenader erbjuder Nerja några av de vackraste kust- och bergsupplevelserna i regionen. Den unika topografiska mötesplatsen mellan Medelhavskusten och de karga Sierra-bergen skapar en extraordinär terräng för utomhussporter. Oavsett om ni föredrar en lugn upptäcktsfärd i kajak, fartfylld spänning på en vattenskoter eller vackra bergsvägar på en Harley, så ligger alla alternativ lättillgängligt inom 10–20 minuter från Frigiliana. Bra att veta: högsommaren är perfekt för vattenaktiviteter, medan månaderna från oktober till maj erbjuder optimala förhållanden för mer fysiskt krävande äventyr på land som klättring och cykling.'
  },
  categories: [
    {
      heading: {
        en: 'Adventure Options',
        de: 'Eure Abenteuer-Optionen',
        es: 'Opciones de aventura',
        nl: 'Avontuurlijke opties',
        sv: 'Alternativ för äventyr'
      },
      items: [
        {
          icon: 'wave',
          title: { en: 'Water Sports — Kayak & Jet Ski', de: 'Wassersport — Kajak & Jetski', es: 'Deportes acuáticos — Kayak y motos de agua', nl: 'Watersport — Kajak & Jetski', sv: 'Vattensport — Kajak & Vattenskoter' },
          body: [
            {
              en: '<strong>Kayak &amp; Canoe — Maro-Cerro Gordo Natural Area</strong>',
              de: '<strong>Kajak &amp; Kanu — Naturschutzgebiet Maro-Cerro Gordo</strong>',
              es: '<strong>Kayak y Canoa — Paraje Natural Maro-Cerro Gordo</strong>',
              nl: '<strong>Kajak &amp; Kano — Natuurgebied Maro-Cerro Gordo</strong>',
              sv: '<strong>Kajak &amp; Kanot — Maro-Cerro Gordo Naturreservat</strong>'
            },
            {
              en: 'The coastline east of Nerja is protected as a natural reserve. Paddling along the cliffs of Maro-Cerro Gordo is one of the most beautiful ways to explore sea caves, hidden coves (like the beautiful Blanco Cove) and turquoise water. Most guided tours include a stop near the famous Cascada de Maro waterfall, where you can swim or snorkel in calm conditions.',
              de: 'Die Küste östlich von Nerja steht unter Naturschutz. Eine Paddeltour entlang der Klippen von Maro-Cerro Gordo ist eine der schönsten Möglichkeiten, Meereshöhlen, versteckte Buchten (wie die wunderschöne Caleta Blanco) und das türkisfarbene Wasser zu erkunden. Die meisten geführten Touren beinhalten einen Stopp in der Nähe des berühmten Wasserfalls Cascada de Maro, wo ihr in ruhigem Wasser schwimmen oder schnorcheln könnt.',
              es: 'La costa al este de Nerja está protegida como reserva natural. Remar por los acantilados de Maro-Cerro Gordo es una de las formas más bonitas de explorar cuevas marinas, calas escondidas (como la preciosa Cala Blanco) y aguas turquesas. La mayoría de las excursiones guiadas incluyen una parada cerca de la famosa Cascada de Maro, donde podéis nadar o hacer snorkel en aguas tranquilas.',
              nl: 'De kustlijn ten oosten van Nerja is een beschermd natuurgebied. Peddelen langs de kliffen van Maro-Cerro Gordo is een van de mooiste manieren om zeegrotten, verborgen baaitjes (zoals de prachtige Cala Blanco) en turquoise water te verkennen. De meeste begeleide tours maken een stop in de buurt van de beroemde Cascada de Maro-waterval, waar jullie in alle rust kunnen zwemmen of snorkelen.',
              sv: 'Kustlinjen öster om Nerja är ett skyddat naturreservat. Att paddla längs klipporna vid Maro-Cerro Gordo är ett av de vackraste sätten att utforska havsgrottor, gömda vikar (som den vackra Cala Blanco) och turkost vatten. De flesta guidade turer inkluderar ett stopp nära det berömda vattenfallet Cascada de Maro, där ni kan bada eller snorkla i lugnt vatten.'
            },
            {
              en: '<ul><li><strong>Duration:</strong> approx. 2–2.5 hours.</li><li><strong>Season:</strong> available most of the year (best May–October).</li><li><strong>Prices:</strong> Guided tours range from 25 € to 35 €, while autonomous rentals start around 11 €.</li><li><strong>Top Providers:</strong> Look for "Educare Aventura" (pioneers since 2002) at Burriana Beach or "Local Experiences" for premium family tours.</li><li><strong>Tip:</strong> Book ahead in summer — tours sell out quickly. Arrive at least 15 minutes early as parking at Playa de Burriana is notoriously difficult.</li></ul>',
              de: '<ul><li><strong>Dauer:</strong> ca. 2–2,5 Stunden.</li><li><strong>Saison:</strong> fast das ganze Jahr über verfügbar (am besten Mai–Oktober).</li><li><strong>Preise:</strong> Geführte Touren liegen zwischen 25 € und 35 €, während der eigene Verleih bei ca. 11 € beginnt.</li><li><strong>Top-Anbieter:</strong> Haltet Ausschau nach "Educare Aventura" (Pioniere seit 2002) am Burriana Beach oder "Local Experiences" für Premium-Familientouren.</li><li><strong>Tipp:</strong> Bucht im Sommer unbedingt im Voraus – die Touren sind schnell ausverkauft. Seid mindestens 15 Minuten früher da, da das Parken an der Playa de Burriana bekanntermaßen schwierig ist.</li></ul>',
              es: '<ul><li><strong>Duración:</strong> aprox. 2–2,5 horas.</li><li><strong>Temporada:</strong> disponible casi todo el año (mejor de mayo a octubre).</li><li><strong>Precios:</strong> Las rutas guiadas oscilan entre 25 € y 35 €, mientras que el alquiler por libre empieza en unos 11 €.</li><li><strong>Mejores proveedores:</strong> Buscad "Educare Aventura" (pioneros desde 2002) en la Playa de Burriana o "Local Experiences" para excursiones familiares premium.</li><li><strong>Consejo:</strong> Reservad con antelación en verano, las plazas se agotan rápido. Llegad al menos 15 minutos antes, ya que aparcar en la Playa de Burriana es bastante difícil.</li></ul>',
              nl: '<ul><li><strong>Duur:</strong> ca. 2–2,5 uur.</li><li><strong>Seizoen:</strong> het grootste deel van het jaar beschikbaar (beste van mei–oktober).</li><li><strong>Prijzen:</strong> Begeleide tours variëren van 25 € tot 35 €, zelf huren begint rond 11 €.</li><li><strong>Topaanbieders:</strong> Kijk naar "Educare Aventura" (pioniers sinds 2002) op Burriana Beach of "Local Experiences" voor premium familietours.</li><li><strong>Tip:</strong> Boek in de zomer vooraf — tours zijn snel uitverkocht. Zorg dat jullie zeker 15 minuten te vroeg zijn, want parkeren bij Playa de Burriana is berucht lastig.</li></ul>',
              sv: '<ul><li><strong>Varaktighet:</strong> ca 2–2,5 timmar.</li><li><strong>Säsong:</strong> tillgängligt större delen av året (bäst maj–oktober).</li><li><strong>Priser:</strong> Guidade turer kostar mellan 25 € och 35 €, medan egen hyra börjar runt 11 €.</li><li><strong>Topparrangörer:</strong> Leta efter "Educare Aventura" (pionjärer sedan 2002) vid Burriana Beach eller "Local Experiences" för premiumturer för familjer.</li><li><strong>Tips:</strong> Boka i förväg på sommaren – turerna säljer slut snabbt. Kom minst 15 minuter för tidigt, eftersom parkering vid Playa de Burriana är ökänt svårt.</li></ul>'
            },
            {
              en: 'To compare providers by rating, price and starting location, search <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kayak+Nerja" target="_blank" rel="noopener">"Kayak Nerja" on Google Maps</a>.',
              de: 'Um Anbieter nach Bewertungen, Preisen und Startort zu vergleichen, sucht nach <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kayak+Nerja" target="_blank" rel="noopener">„Kayak Nerja" in Google Maps</a>.',
              es: 'Para comparar proveedores por valoración, precio y ubicación de salida, buscad <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kayak+Nerja" target="_blank" rel="noopener">"Kayak Nerja" en Google Maps</a>.',
              nl: 'Gebruik <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kayak+Nerja" target="_blank" rel="noopener">"Kayak Nerja" op Google Maps</a> om aanbieders te vergelijken op beoordeling, prijs en startlocatie.',
              sv: 'Sök efter <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Kayak+Nerja" target="_blank" rel="noopener">"Kayak Nerja" i Google Maps</a> för att jämföra arrangörer, omdömen och startplatser.'
            },
            {
              en: '<hr>',
              de: '<hr>',
              es: '<hr>',
              nl: '<hr>',
              sv: '<hr>'
            },
            {
              en: '<strong>Jet Ski — Fast Coastal Exploration</strong>',
              de: '<strong>Jetski — Die Küste rasant erkunden</strong>',
              es: '<strong>Motos de agua — Exploración costera rápida</strong>',
              nl: '<strong>Jetski — Snelle verkenning van de kust</strong>',
              sv: '<strong>Vattenskoter — Upptäck kusten i snabbt tempo</strong>'
            },
            {
              en: 'If you prefer something more dynamic, guided jet ski tours allow you to explore the same coastline in less time. For most guided tours no boating license is required — you simply follow an instructor in a small group.',
              de: 'Wenn ihr es lieber dynamischer mögt, könnt ihr auf geführten Jetski-Touren dieselbe Küstenlinie in kürzerer Zeit erkunden. Für die meisten geführten Touren ist kein Bootsführerschein erforderlich – ihr fahrt einfach in einer kleinen Gruppe einem Guide hinterher.',
              es: 'Si preferís algo más dinámico, las rutas guiadas en moto de agua os permiten explorar la misma costa en menos tiempo. Para la mayoría de las excursiones guiadas no se necesita titulación: simplemente seguís a un monitor en un grupo pequeño.',
              nl: 'Als jullie de voorkeur geven aan iets meer dynamiek, bieden begeleide jetski-tours de kans om dezelfde kustlijn in kortere tijd te verkennen. Voor de meeste tours is geen vaarbewijs nodig — jullie volgen simpelweg de instructeur in een klein groepje.',
              sv: 'Om ni föredrar något mer fartfyllt ger guidade turer på vattenskoter er möjligheten att utforska samma kustlinje på mycket kortare tid. För de flesta turer krävs inget förarbevis – ni följer helt enkelt efter en instruktör i en liten grupp.'
            },
            {
              en: '<ul><li><strong>Typical options:</strong> 30 or 60 minutes</li><li><strong>Up to 2 persons per jet ski</strong></li><li><strong>Condition:</strong> tours depend on sea state and weather</li></ul>',
              de: '<ul><li><strong>Typische Optionen:</strong> 30 oder 60 Minuten</li><li><strong>Bis zu 2 Personen pro Jetski</strong></li><li><strong>Bedingungen:</strong> Touren sind vom Seegang und Wetter abhängig</li></ul>',
              es: '<ul><li><strong>Opciones típicas:</strong> 30 o 60 minutos</li><li><strong>Hasta 2 personas por moto de agua</strong></li><li><strong>Condiciones:</strong> las salidas dependen del estado del mar y del tiempo</li></ul>',
              nl: '<ul><li><strong>Typische opties:</strong> 30 of 60 minuten</li><li><strong>Tot 2 personen per jetski</strong></li><li><strong>Condities:</strong> afhankelijk van de zee en het weer</li></ul>',
              sv: '<ul><li><strong>Typiska alternativ:</strong> 30 eller 60 minuter</li><li><strong>Upp till 2 personer per vattenskoter</strong></li><li><strong>Villkor:</strong> turerna beror på havets tillstånd och vädret</li></ul>'
            },
            {
              en: 'Compare local operators and availability by searching <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Jet+Ski+Nerja" target="_blank" rel="noopener">"Jet Ski Nerja" on Google Maps</a>.',
              de: 'Vergleicht lokale Anbieter und deren Verfügbarkeit, indem ihr nach <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Jet+Ski+Nerja" target="_blank" rel="noopener">„Jet Ski Nerja" in Google Maps</a> sucht.',
              es: 'Comparad los operadores locales y la disponibilidad buscando <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Jet+Ski+Nerja" target="_blank" rel="noopener">"Jet Ski Nerja" en Google Maps</a>.',
              nl: 'Vergelijk lokale aanbieders en beschikbaarheid via <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Jet+Ski+Nerja" target="_blank" rel="noopener">"Jet Ski Nerja" op Google Maps</a>.',
              sv: 'Jämför lokala arrangörer och tillgänglighet genom att söka efter <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Jet+Ski+Nerja" target="_blank" rel="noopener">"Jet Ski Nerja" i Google Maps</a>.'
            },
            {
              en: '<em>Practical advice:</em> Bring swimwear, sunscreen, water, and ideally a waterproof phone case. Morning tours often have calmer sea conditions.',
              de: '<em>Praktischer Hinweis:</em> Bringt Badekleidung, Sonnencreme, Wasser und idealerweise eine wasserdichte Handyhülle mit. Bei Touren am Vormittag ist das Meer meistens noch deutlich ruhiger.',
              es: '<em>Consejo práctico:</em> Llevad bañador, protector solar, agua e idealmente una funda impermeable para el móvil. Las salidas de mañana suelen tener un mar más en calma.',
              nl: '<em>Praktisch advies:</em> Neem zwemkleding, zonnebrandcrème, water en idealiter een waterdicht telefoonhoesje mee. In de ochtend is de zee vaak een stuk rustiger.',
              sv: '<em>Praktiskt råd:</em> Ta med badkläder, solkräm, vatten och gärna ett vattentätt mobilskal. Morgonturerna bjuder ofta på lugnare vatten.'
            }
          ]
        },
        {
          icon: 'hiking',
          title: { en: 'Canyoning — Río Verde', de: 'Canyoning — Río Verde', es: 'Barranquismo — Río Verde', nl: 'Canyoning — Río Verde', sv: 'Canyoning — Río Verde' },
          body: [
            {
              en: '<strong>Canyoning (Barranquismo)</strong>',
              de: '<strong>Canyoning (Barranquismo)</strong>',
              es: '<strong>Barranquismo (Canyoning)</strong>',
              nl: '<strong>Canyoning (Barranquismo)</strong>',
              sv: '<strong>Canyoning (Barranquismo)</strong>'
            },
            {
              en: 'Canyoning is arguably the most immersive way to experience Andalusia\'s wild topography. Since the popular Río Chíllar is currently closed for environmental and safety reasons, the breathtaking <strong>Río Verde</strong> has become the absolute epicenter for this sport.',
              de: 'Canyoning ist wohl die intensivste Art, die wilde Topografie Andalusiens hautnah zu erleben. Da der beliebte Río Chíllar derzeit aus Umwelt- und Sicherheitsgründen geschlossen ist, hat sich der atemberaubende <strong>Río Verde</strong> zum absoluten Epizentrum für diesen Sport entwickelt.',
              es: 'El barranquismo es, sin duda, la forma más inmersiva de experimentar la salvaje topografía de Andalucía. Dado que el popular Río Chíllar está actualmente cerrado por razones medioambientales y de seguridad, el impresionante <strong>Río Verde</strong> se ha convertido en el epicentro absoluto de este deporte.',
              nl: 'Canyoning is zonder twijfel de meest meeslepende manier om de wilde topografie van Andalusië te ervaren. Aangezien de populaire Río Chíllar momenteel gesloten is om milieu- en veiligheidsredenen, is de adembenemende <strong>Río Verde</strong> het absolute epicentrum voor deze sport geworden.',
              sv: 'Canyoning är utan tvekan det mest uppslukande sättet att uppleva Andalusiens vilda topografi. Eftersom den populära Río Chíllar för närvarande är stängd av miljö- och säkerhetsskäl har den hisnande <strong>Río Verde</strong> blivit det absoluta epicentret för denna sport.'
            },
            {
              en: 'Located about 40–50 minutes east of Nerja, Río Verde is famous for its emerald-green, crystal-clear waters. The activity combines rappelling, natural water slides, and cliff jumping into deep pools.',
              de: 'Der Río Verde liegt etwa 40–50 Minuten östlich von Nerja und ist berühmt für sein smaragdgrünes, kristallklares Wasser. Die Touren kombinieren Abseilen, natürliche Wasserrutschen und Klippensprünge in tiefe Wasserbecken.',
              es: 'Situado a unos 40-50 minutos al este de Nerja, el Río Verde es famoso por sus aguas verde esmeralda y cristalinas. La actividad combina rápel, toboganes naturales de agua y saltos desde acantilados a pozas profundas.',
              nl: 'Gelegen op zo\'n 40–50 minuten ten oosten van Nerja, is de Río Verde beroemd om zijn smaragdgroene, kristalheldere water. De activiteit combineert abseilen, natuurlijke glijbanen en klifspringen in diepe poelen.',
              sv: 'Río Verde ligger cirka 40–50 minuter öster om Nerja och är berömt för sitt smaragdgröna, kristallklara vatten. Aktiviteten kombinerar firning (rappellering), naturliga vattenrutschbanor och klipphopp ner i djupa pooler.'
            },
            {
              en: '<ul><li><strong>Duration:</strong> 5–6 hours (approx. 8 kilometers).</li><li><strong>Difficulty:</strong> Beginner routes available (ages 9+); every jump has a walking alternative to avoid vertigo or panic.</li><li><strong>Prices:</strong> Around 75 € for an easy tour, up to 98 € for advanced routes.</li><li><strong>Providers:</strong> "Local Experiences" and "TUUR Adventure Experts" offer premium small-group tours often including an eco-picnic and GoPro footage.</li></ul>',
              de: '<ul><li><strong>Dauer:</strong> 5–6 Stunden (ca. 8 Kilometer).</li><li><strong>Schwierigkeit:</strong> Es gibt Anfängerrouten (ab 9 Jahren); für jeden Sprung gibt es eine Alternative zu Fuß, sodass niemand Panik haben muss.</li><li><strong>Preise:</strong> Etwa 75 € für eine leichte Tour, bis zu 98 € für Fortgeschrittenen-Routen.</li><li><strong>Anbieter:</strong> "Local Experiences" und "TUUR Adventure Experts" bieten Premium-Touren in kleinen Gruppen an, oft inklusive Eco-Picknick und GoPro-Aufnahmen.</li></ul>',
              es: '<ul><li><strong>Duración:</strong> 5–6 horas (aprox. 8 kilómetros).</li><li><strong>Dificultad:</strong> Hay rutas para principiantes (a partir de 9 años); cada salto tiene una alternativa a pie para evitar el vértigo o el pánico.</li><li><strong>Precios:</strong> En torno a 75 € para una ruta fácil, y hasta 98 € para rutas avanzadas.</li><li><strong>Proveedores:</strong> "Local Experiences" y "TUUR Adventure Experts" ofrecen rutas premium en grupos reducidos que a menudo incluyen un eco-picnic y grabaciones con GoPro.</li></ul>',
              nl: '<ul><li><strong>Duur:</strong> 5–6 uur (ca. 8 kilometer).</li><li><strong>Moeilijkheidsgraad:</strong> Er zijn beginnersroutes (vanaf 9 jaar); elke sprong heeft een loop-alternatief om paniek of hoogtevrees te voorkomen.</li><li><strong>Prijzen:</strong> Rond de 75 € voor een makkelijke tour, tot 98 € voor gevorderden.</li><li><strong>Aanbieders:</strong> "Local Experiences" en "TUUR Adventure Experts" bieden premium tours in kleine groepen aan, vaak inclusief een eco-picknick en GoPro-beelden.</li></ul>',
              sv: '<ul><li><strong>Varaktighet:</strong> 5–6 timmar (ca 8 kilometer).</li><li><strong>Svårighetsgrad:</strong> Nybörjarrutter finns (från 9 år); varje hopp har ett gångalternativ för att undvika svindel eller panik.</li><li><strong>Priser:</strong> Runt 75 € för en enkel tur, upp till 98 € för avancerade rutter.</li><li><strong>Arrangörer:</strong> "Local Experiences" och "TUUR Adventure Experts" erbjuder premiumturer i små grupper, ofta inklusive en eko-picknick och GoPro-filmer.</li></ul>'
            },
            {
              en: '<em>Important:</em> Thick neoprene suits are provided by operators, but you must bring sturdy, ankle-high shoes with excellent grip (no light sneakers or sandals!).',
              de: '<em>Wichtig:</em> Dicke Neoprenanzüge werden von den Anbietern gestellt, aber ihr müsst unbedingt feste, knöchelhohe Schuhe mit exzellentem Profil mitbringen (bitte keine leichten Sneaker oder Sandalen!).',
              es: '<em>Importante:</em> Los operadores proporcionan trajes de neopreno gruesos, pero debéis llevar calzado resistente, hasta el tobillo y con muy buen agarre (¡nada de zapatillas ligeras ni sandalias!).',
              nl: '<em>Belangrijk:</em> Dikke neopreenpakken worden door de aanbieders verzorgd, maar jullie moeten zélf stevige, enkelhoge schoenen met goede grip meenemen (geen lichte sneakers of sandalen!).',
              sv: '<em>Viktigt:</em> Tjocka våtdräkter tillhandahålls av arrangörerna, men ni måste ta med stadiga, ankelhöga skor med utmärkt grepp (inga lätta sneakers eller sandaler!).'
            }
          ]
        },
        {
          icon: 'route',
          title: { en: 'Climbing, Vía Ferrata & Zipline', de: 'Klettern, Klettersteige & Zipline', es: 'Escalada, Vías Ferratas y Tirolina', nl: 'Klimmen, Klettersteig & Zipline', sv: 'Klättring, Via Ferrata & Zipline' },
          body: [
            {
              en: '<strong>Vertical Adventures</strong>',
              de: '<strong>Vertikale Abenteuer</strong>',
              es: '<strong>Aventuras Verticales</strong>',
              nl: '<strong>Verticale Avonturen</strong>',
              sv: '<strong>Vertikala Äventyr</strong>'
            },
            {
              en: 'The region is a globally recognized climbing destination. For beginners, local operators like <a class="am-link" href="https://filoclimb.com/" target="_blank" rel="noopener"><strong>Filoclimb</strong></a> (approx. 55 €) and <a class="am-link" href="https://localexperiences.es/en/" target="_blank" rel="noopener"><strong>Local Experiences</strong></a> (approx. 150 € for an exclusive VIP experience) offer safe, top-rope initiation courses on the beautiful limestone walls around Nerja and Frigiliana.',
              de: 'Die Region ist eine weltweit anerkannte Kletterdestination. Für Anfänger bieten lokale Anbieter wie <a class="am-link" href="https://filoclimb.com/" target="_blank" rel="noopener"><strong>Filoclimb</strong></a> (ca. 55 €) und <a class="am-link" href="https://localexperiences.es/en/" target="_blank" rel="noopener"><strong>Local Experiences</strong></a> (ca. 150 € für ein exklusives VIP-Erlebnis) sichere Top-Rope-Schnupperkurse an den wunderschönen Kalksteinwänden rund um Nerja und Frigiliana an.',
              es: 'La región es un destino de escalada reconocido a nivel mundial. Para principiantes, operadores locales como <a class="am-link" href="https://filoclimb.com/" target="_blank" rel="noopener"><strong>Filoclimb</strong></a> (aprox. 55 €) y <a class="am-link" href="https://localexperiences.es/en/" target="_blank" rel="noopener"><strong>Local Experiences</strong></a> (aprox. 150 € por una experiencia VIP exclusiva) ofrecen cursos de iniciación en top-rope de forma segura en las hermosas paredes de piedra caliza alrededor de Nerja y Frigiliana.',
              nl: 'De regio is een wereldwijd erkende klimbestemming. Voor beginners bieden lokale aanbieders zoals <a class="am-link" href="https://filoclimb.com/" target="_blank" rel="noopener"><strong>Filoclimb</strong></a> (ca. 55 €) en <a class="am-link" href="https://localexperiences.es/en/" target="_blank" rel="noopener"><strong>Local Experiences</strong></a> (ca. 150 € voor een exclusieve VIP-ervaring) veilige top-rope introductiecursussen aan op de prachtige kalksteenwanden rond Nerja en Frigiliana.',
              sv: 'Regionen är en globalt erkänd klättringsdestination. För nybörjare erbjuder lokala arrangörer som <a class="am-link" href="https://filoclimb.com/" target="_blank" rel="noopener"><strong>Filoclimb</strong></a> (ca 55 €) och <a class="am-link" href="https://localexperiences.es/en/" target="_blank" rel="noopener"><strong>Local Experiences</strong></a> (ca 150 € för en exklusiv VIP-upplevelse) säkra prova-på-kurser med topprep på de vackra kalkstensväggarna runt Nerja och Frigiliana.'
            },
            {
              en: 'If you prefer exploring autonomously, the <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana" target="_blank" rel="noopener"><em>Barranco del Higuerón</em></a> gorge right in Frigiliana offers excellent scrambling and bouldering opportunities.',
              de: 'Wenn ihr lieber auf eigene Faust unterwegs seid, bietet die Schlucht <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana" target="_blank" rel="noopener"><em>Barranco del Higuerón</em></a> direkt in Frigiliana großartige Möglichkeiten zum Kraxeln und Bouldern.',
              es: 'Si preferís explorar por vuestra cuenta, el <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana" target="_blank" rel="noopener"><em>Barranco del Higuerón</em></a> en Frigiliana ofrece excelentes oportunidades para trepar y hacer boulder.',
              nl: 'Als jullie liever op eigen houtje op ontdekking gaan, biedt de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana" target="_blank" rel="noopener"><em>Barranco del Higuerón</em></a> kloof direct in Frigiliana uitstekende mogelijkheden om te klauteren en te boulderen.',
              sv: 'Om ni föredrar att utforska på egen hand erbjuder ravinen <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana" target="_blank" rel="noopener"><em>Barranco del Higuerón</em></a> mitt i Frigiliana fantastiska möjligheter för scrambling och bouldering.'
            },
            {
              en: '<hr>',
              de: '<hr>',
              es: '<hr>',
              nl: '<hr>',
              sv: '<hr>'
            },
            {
              en: '<strong>Ziplining in Comares &amp; Vía Ferrata</strong>',
              de: '<strong>Zipline in Comares &amp; Klettersteige</strong>',
              es: '<strong>Tirolina en Comares y Vías Ferratas</strong>',
              nl: '<strong>Ziplinen in Comares &amp; Klettersteig</strong>',
              sv: '<strong>Zipline i Comares &amp; Via Ferrata</strong>'
            },
            {
              en: 'For a massive adrenaline rush, head to the picturesque mountain village of Comares. It hosts the <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener"><strong>Tirolina de Comares</strong></a>—at 436 meters long and over 100 meters high, it is the longest zipline in Spain with natural rock anchors.',
              de: 'Für einen ordentlichen Adrenalinkick fahrt ihr am besten ins malerische Bergdorf Comares. Dort befindet sich die <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener"><strong>Tirolina de Comares</strong></a> – mit 436 Metern Länge und über 100 Metern Höhe ist sie die längste Zipline Spaniens, die an natürlichen Felsen verankert ist.',
              es: 'Para una buena dosis de adrenalina, id al pintoresco pueblo de montaña de Comares. Allí se encuentra la <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener"><strong>Tirolina de Comares</strong></a>; con 436 metros de largo y más de 100 metros de altura, es la tirolina con anclajes en roca natural más larga de España.',
              nl: 'Voor een enorme adrenalinekick gaan jullie naar het pittoreske bergdorpje Comares. Hier vinden jullie de <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener"><strong>Tirolina de Comares</strong></a> — met een lengte van 436 meter en een hoogte van meer dan 100 meter is dit de langste zipline van Spanje die verankerd is in natuurlijke rotsen.',
              sv: 'För en riktig adrenalinkick ska ni åka till den pittoreska bergsbyn Comares. Här finns <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener"><strong>Tirolina de Comares</strong></a> – med sina 436 meter i längd och över 100 meter i höjd är det Spaniens längsta zipline med naturliga bergfästen.'
            },
            {
              en: '<ul><li><strong>Zipline Price:</strong> Only 26 € (allows up to two rides!).</li><li><strong>Vía Ferrata (Iron Paths):</strong> Combine the zipline with <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener">beginner-friendly via ferrata routes in Comares</a>, or challenge yourself at the scenic <a class="am-link" href="https://viaferratajohnhogbin.com/" target="_blank" rel="noopener">Vía Ferrata Zafarraya</a> (75 € guided tour).</li></ul>',
              de: '<ul><li><strong>Preis für die Zipline:</strong> Nur 26 € (gilt für bis zu zwei Fahrten!).</li><li><strong>Klettersteige (Vía Ferrata):</strong> Kombiniert die Zipline mit <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener">anfängerfreundlichen Klettersteigen in Comares</a> oder fordert euch auf dem atemberaubenden <a class="am-link" href="https://viaferratajohnhogbin.com/" target="_blank" rel="noopener">Vía Ferrata Zafarraya</a> heraus (75 € für eine geführte Tour).</li></ul>',
              es: '<ul><li><strong>Precio de la tirolina:</strong> Solo 26 € (¡permite hasta dos viajes!).</li><li><strong>Vías Ferratas:</strong> Combinad la tirolina con <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener">las vías ferratas para principiantes en Comares</a>, o poneos a prueba en la espectacular <a class="am-link" href="https://viaferratajohnhogbin.com/" target="_blank" rel="noopener">Vía Ferrata de Zafarraya</a> (ruta guiada por 75 €).</li></ul>',
              nl: '<ul><li><strong>Prijs Zipline:</strong> Slechts 26 € (goed voor maximaal twee ritten!).</li><li><strong>Klettersteig (Vía Ferrata):</strong> Combineer de zipline met <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener">de beginnersvriendelijke klettersteigroutes in Comares</a>, of daag jezelf uit op de prachtige <a class="am-link" href="https://viaferratajohnhogbin.com/" target="_blank" rel="noopener">Vía Ferrata Zafarraya</a> (75 € voor een begeleide tour).</li></ul>',
              sv: '<ul><li><strong>Zipline Pris:</strong> Endast 26 € (ger er upp till två åk!).</li><li><strong>Via Ferrata:</strong> Kombinera ziplinen med <a class="am-link" href="https://www.turismointeriordemalaga.com/actividades/tirolina-de-comares/?lang=en" target="_blank" rel="noopener">nybörjarvänliga Via Ferrata-leder i Comares</a>, eller utmana er själva på den vackra <a class="am-link" href="https://viaferratajohnhogbin.com/" target="_blank" rel="noopener">Via Ferrata Zafarraya</a> (75 € för en guidad tur).</li></ul>'
            }
          ]
        },
        {
          icon: 'compass',
          title: { en: 'Off-Road: Buggies, Quads & MTB', de: 'Offroad: Buggys, Quads & Mountainbikes', es: 'Todoterreno: Buggies, Quads y MTB', nl: 'Off-Road: Buggy\'s, Quads & MTB', sv: 'Off-Road: Buggys, Fyrhjulingar & MTB' },
          body: [
            {
              en: '<strong>Buggy &amp; Quad Expeditions</strong>',
              de: '<strong>Buggy- &amp; Quad-Touren</strong>',
              es: '<strong>Expediciones en Buggy y Quad</strong>',
              nl: '<strong>Buggy &amp; Quad Expedities</strong>',
              sv: '<strong>Buggy- &amp; Fyrhjulingsexpeditioner</strong>'
            },
            {
              en: 'The dusty, unpaved trails of the Axarquía are perfect for loud, motorized adventures. <a class="am-link" href="https://lifeadventure.eu/" target="_blank" rel="noopener"><strong>Life Adventure</strong></a> (located in Nerja\'s center) offers exceptional half-day guided tours in heavy 2-seater buggies (approx. 160 € per vehicle). These tours take you deep into the mountains to spot mountain goats and enjoy stunning panoramas.',
              de: 'Die staubigen, unbefestigten Wege der Axarquía sind perfekt für laute, motorisierte Abenteuer. <a class="am-link" href="https://lifeadventure.eu/" target="_blank" rel="noopener"><strong>Life Adventure</strong></a> (mitten im Zentrum von Nerja) bietet hervorragende geführte Halbtagestouren in massiven 2-Sitzer-Buggys an (ca. 160 € pro Fahrzeug). Diese Touren führen euch tief in die Berge, wo ihr Bergziegen beobachten und atemberaubende Panoramen genießen könnt.',
              es: 'Los polvorientos caminos de tierra de la Axarquía son perfectos para las aventuras ruidosas y motorizadas. <a class="am-link" href="https://lifeadventure.eu/" target="_blank" rel="noopener"><strong>Life Adventure</strong></a> (en el centro de Nerja) ofrece excepcionales excursiones guiadas de medio día en robustos buggies biplaza (aprox. 160 € por vehículo). Estas rutas os llevarán a lo más profundo de las montañas para avistar cabras montesas y disfrutar de unas panorámicas increíbles.',
              nl: 'De stoffige, onverharde paden van de Axarquía zijn perfect voor ronkende, gemotoriseerde avonturen. <a class="am-link" href="https://lifeadventure.eu/" target="_blank" rel="noopener"><strong>Life Adventure</strong></a> (gelegen in het centrum van Nerja) biedt uitzonderlijke begeleide tochten van een halve dag in zware 2-persoons buggy\'s (ca. 160 € per voertuig). Deze ritten brengen jullie diep de bergen in om berggeiten te spotten en te genieten van prachtige vergezichten.',
              sv: 'De dammiga, obelagda vägarna i Axarquía är perfekta för högljudda, motoriserade äventyr. <a class="am-link" href="https://lifeadventure.eu/" target="_blank" rel="noopener"><strong>Life Adventure</strong></a> (som ligger i centrala Nerja) erbjuder enastående guidade halvdagsturer i kraftiga 2-sitsiga buggys (ca 160 € per fordon). Dessa turer tar er djupt in i bergen där ni kan spana efter bergsgetter och njuta av fantastiska vyer.'
            },
            {
              en: '<em>Note:</em> A valid, full driver\'s license is strictly required to drive. Due to the dust in the summer, wearing a bandana over your face is highly recommended.',
              de: '<em>Hinweis:</em> Um selbst zu fahren, ist ein gültiger, vollständiger PKW-Führerschein zwingend erforderlich. Da es im Sommer sehr staubig werden kann, ist ein Halstuch oder Bandana vor dem Gesicht wärmstens zu empfehlen.',
              es: '<em>A tener en cuenta:</em> Para conducir es estrictamente necesario tener un carnet de conducir completo y válido. Debido al polvo en verano, es muy recomendable llevar un pañuelo cubriendo la cara.',
              nl: '<em>Let op:</em> Een geldig en volledig autorijbewijs is strikt vereist om te mogen rijden. Omdat het in de zomer erg stoffig is, is het dragen van een bandana voor jullie gezicht een echte aanrader.',
              sv: '<em>Observera:</em> Ett giltigt, fullständigt körkort krävs strikt för att få köra. På grund av dammet under sommaren rekommenderar vi starkt att ni bär en bandana för ansiktet.'
            },
            {
              en: '<hr>',
              de: '<hr>',
              es: '<hr>',
              nl: '<hr>',
              sv: '<hr>'
            },
            {
              en: '<strong>E-Bikes &amp; Mountainbiking</strong>',
              de: '<strong>E-Bikes &amp; Mountainbiken</strong>',
              es: '<strong>E-Bikes y Mountain Bike</strong>',
              nl: '<strong>E-Bikes &amp; Mountainbiken</strong>',
              sv: '<strong>E-Bikes &amp; Mountainbike</strong>'
            },
            {
              en: 'E-bikes have revolutionized mountain biking in this steep region, making the climbs much more manageable. <a class="am-link" href="https://cyclenerja.com/" target="_blank" rel="noopener"><strong>Cyclenerja</strong></a> provides highly professional rentals of analog mountain bikes (from 30 €/day) and powerful E-MTBs.',
              de: 'E-Bikes haben das Mountainbiken in dieser steilen Region revolutioniert und machen die Anstiege weitaus entspannter. <a class="am-link" href="https://cyclenerja.com/" target="_blank" rel="noopener"><strong>Cyclenerja</strong></a> bietet einen sehr professionellen Verleih von klassischen Mountainbikes (ab 30 €/Tag) und leistungsstarken E-MTBs an.',
              es: 'Las bicicletas eléctricas han revolucionado el ciclismo de montaña en esta empinada región, haciendo las subidas mucho más manejables. <a class="am-link" href="https://cyclenerja.com/" target="_blank" rel="noopener"><strong>Cyclenerja</strong></a> ofrece un servicio de alquiler muy profesional de bicicletas de montaña analógicas (desde 30 €/día) y potentes e-MTB.',
              nl: 'E-bikes hebben het mountainbiken in deze steile regio een heel stuk toegankelijker gemaakt, waardoor de klimmetjes goed te doen zijn. <a class="am-link" href="https://cyclenerja.com/" target="_blank" rel="noopener"><strong>Cyclenerja</strong></a> verhuurt op zeer professionele wijze zowel analoge mountainbikes (vanaf 30 €/dag) als krachtige E-MTB\'s.',
              sv: 'Elcyklar har revolutionerat mountainbike-cyklingen i denna branta region och gör stigningarna mycket mer lätthanterliga. <a class="am-link" href="https://cyclenerja.com/" target="_blank" rel="noopener"><strong>Cyclenerja</strong></a> erbjuder mycket professionell uthyrning av både klassiska mountainbikes (från 30 €/dag) och kraftfulla E-MTB:er.'
            },
            {
              en: 'For a scenic autonomous ride, try the challenging triangle route: <em>Nerja - Frigiliana - Torrox - Nerja</em>.',
              de: 'Für eine malerische Fahrt auf eigene Faust probiert doch mal die anspruchsvolle Dreiecksroute: <em>Nerja - Frigiliana - Torrox - Nerja</em>.',
              es: 'Para una ruta panorámica por libre, probad la exigente ruta en triángulo: <em>Nerja - Frigiliana - Torrox - Nerja</em>.',
              nl: 'Voor een mooie, zelfstandige rit is de uitdagende driehoeksroute een aanrader: <em>Nerja - Frigiliana - Torrox - Nerja</em>.',
              sv: 'För en vacker tur på egen hand kan ni prova den utmanande triangelrutten: <em>Nerja - Frigiliana - Torrox - Nerja</em>.'
            }
          ]
        },
        {
          icon: 'car',
          title: { en: 'Harley Tours — Coast & Mountains', de: 'Harley-Touren — Küste & Berge', es: 'Rutas en Harley — Costa y Montañas', nl: 'Harley Tours — Kust & Bergen', sv: 'Harley-turer — Kust & Berg' },
          body: [
            {
              en: 'For a completely different perspective, guided Harley-Davidson tours combine Mediterranean coastal roads with scenic mountain routes behind Nerja. Depending on the selected duration, routes can include Maro, Torrox, Almuñécar and white villages such as Frigiliana or Cómpeta.',
              de: 'Für eine völlig neue Perspektive verbinden geführte Harley-Davidson-Touren die Küstenstraßen des Mittelmeers mit den malerischen Bergstraßen im Hinterland von Nerja. Je nach gewählter Dauer können die Routen über Maro, Torrox, Almuñécar und weiße Dörfer wie Frigiliana oder Cómpeta führen.',
              es: 'Para una perspectiva completamente diferente, las rutas guiadas en Harley-Davidson combinan las carreteras costeras del Mediterráneo con los pintorescos caminos de montaña detrás de Nerja. Dependiendo de la duración, las rutas pueden incluir Maro, Torrox, Almuñécar y pueblos blancos como Frigiliana o Cómpeta.',
              nl: 'Voor een compleet ander perspectief combineren begeleide Harley-Davidson tours de mediterrane kustwegen met schilderachtige bergwegen achter Nerja. Afhankelijk van de gekozen duur kunnen de routes langs Maro, Torrox, Almuñécar en witte dorpjes zoals Frigiliana of Cómpeta gaan.',
              sv: 'För ett helt annorlunda perspektiv kombinerar guidade Harley-Davidson-turer kustvägarna vid Medelhavet med natursköna bergsvägar bakom Nerja. Beroende på vilken tidslängd ni väljer kan rutterna inkludera Maro, Torrox, Almuñécar och vita byar som Frigiliana eller Cómpeta.'
            },
            {
              en: '<ul><li><strong>Duration:</strong> from short 1-hour rides to half-day tours</li><li><strong>Scenery:</strong> sea views, mountain roads and traditional villages</li><li><strong>Good to know:</strong> some operators speak German</li></ul>',
              de: '<ul><li><strong>Dauer:</strong> von kurzen 1-stündigen Fahrten bis hin zu Halbtagestouren</li><li><strong>Landschaft:</strong> Meerblick, kurvige Bergstraßen und traditionelle Dörfer</li><li><strong>Gut zu wissen:</strong> Einige Anbieter sprechen Deutsch</li></ul>',
              es: '<ul><li><strong>Duración:</strong> desde paseos cortos de 1 hora hasta rutas de medio día</li><li><strong>Paisaje:</strong> vistas al mar, carreteras de montaña y pueblos tradicionales</li><li><strong>Conviene saber:</strong> algunos operadores hablan alemán</li></ul>',
              nl: '<ul><li><strong>Duur:</strong> van korte ritten van 1 uur tot tochten van een halve dag</li><li><strong>Landschap:</strong> zeezicht, bergwegen en traditionele dorpen</li><li><strong>Goed om te weten:</strong> sommige gidsen spreken Duits</li></ul>',
              sv: '<ul><li><strong>Varaktighet:</strong> från korta turer på 1 timme till halvdagsutflykter</li><li><strong>Miljö:</strong> havsutsikt, bergsvägar och traditionella byar</li><li><strong>Bra att veta:</strong> vissa operatörer pratar tyska</li></ul>'
            },
            {
              en: 'To compare routes and reviews, search <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Harley+Davidson+Nerja" target="_blank" rel="noopener">"Harley Davidson Nerja" on Google Maps</a>.',
              de: 'Um Routen und Bewertungen zu vergleichen, sucht nach <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Harley+Davidson+Nerja" target="_blank" rel="noopener">„Harley Davidson Nerja" in Google Maps</a>.',
              es: 'Para comparar rutas y opiniones, buscad <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Harley+Davidson+Nerja" target="_blank" rel="noopener">"Harley Davidson Nerja" en Google Maps</a>.',
              nl: 'Zoek naar <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Harley+Davidson+Nerja" target="_blank" rel="noopener">"Harley Davidson Nerja" op Google Maps</a> om routes en beoordelingen te vergelijken.',
              sv: 'Sök efter <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Harley+Davidson+Nerja" target="_blank" rel="noopener">"Harley Davidson Nerja" i Google Maps</a> för att jämföra rutter och omdömen.'
            },
            {
              en: 'These tours are especially enjoyable outside the hottest summer hours and during spring or autumn.',
              de: 'Diese Touren sind besonders außerhalb der heißesten Sommerstunden und natürlich im Frühling oder Herbst ein großer Genuss.',
              es: 'Estas excursiones se disfrutan especialmente fuera de las horas de más calor en verano y durante la primavera o el otoño.',
              nl: 'Deze tochten zijn vooral heerlijk buiten de heetste zomeruren om, en in het voor- en najaar.',
              sv: 'Dessa turer är särskilt njutbara utanför de allra varmaste timmarna på sommaren, samt under vår och höst.'
            }
          ]
        }
      ]
    }
  ]
};

const frigilianaGuestBreakfast: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-breakfast',
  backSlug: 'frigiliana-guest-recommendations',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide — Breakfast | AMARA',
    de: 'Frigiliana Gästeguide — Frühstück | AMARA',
    es: 'Guía para huéspedes en Frigiliana — Desayuno | AMARA',
    nl: 'Frigiliana Guest Guide — Ontbijt | AMARA',
    sv: 'Frigiliana Gästguide — Frukost | AMARA'
  },
  seoDescription: {
    en: 'Practical breakfast overview for guests staying in Frigiliana — from churros and bakery stops to specialty coffee and late breakfast spots.',
    de: 'Praktische Frühstücksübersicht für Gäste in Frigiliana — von Churros und Bäckerei bis zu Specialty Coffee und spätem Frühstück.',
    es: 'Resumen práctico de desayunos para huéspedes en Frigiliana: desde churros y panadería hasta specialty coffee y opciones de desayuno tardío.',
    nl: 'Praktisch ontbijt-overzicht voor gasten in Frigiliana — van churros en bakkerij tot specialty coffee en late ontbijtplekken.',
    sv: 'Praktisk frukostöversikt för gäster i Frigiliana — från churros och bageri till specialty coffee och sena frukostställen.'
  },
  kicker: {
    en: 'AMARA LOCAL GUIDE',
    de: 'AMARA LOKALER GUIDE',
    es: 'GUÍA LOCAL DE AMARA',
    nl: 'AMARA LOKALE GIDS',
    sv: 'AMARA LOKAL GUIDE'
  },
  title: { en: 'Breakfast in Frigiliana', de: 'Frühstück in Frigiliana', es: 'Desayuno en Frigiliana', nl: 'Ontbijt in Frigiliana', sv: 'Frukost i Frigiliana' },
  intro: {
    en: 'One of the small luxuries of staying in Frigiliana is having breakfast slowly on your own terrace, with the village waking up around you and the mountains catching the first morning light. But if you feel like stepping out for coffee, fresh bread or a more local breakfast, the village has some lovely options too. In Andalucía, breakfast is often beautifully simple: toasted bread with fresh tomato, good olive oil and sometimes avocado, plus a strong coffee on the side. And at least once, it is worth trying churros with hot chocolate — one of those classic morning rituals that feels very local very quickly.',
    de: 'Einer der kleinen Luxusmomente in Frigiliana ist es, ganz entspannt auf der eigenen Terrasse zu frühstücken, während das Dorf langsam wach wird und die Berge das erste Morgenlicht auffangen. Wenn ihr aber Lust auf einen Kaffee im Dorf, frisches Brot oder ein lokaleres Frühstück habt, gibt es dafür ebenfalls sehr schöne Orte. In Andalusien ist Frühstück oft wunderbar schlicht: geröstetes Brot mit frischer Tomate, gutem Olivenöl und manchmal Avocado, dazu ein kräftiger Kaffee. Und mindestens einmal lohnt es sich, Churros mit heißer Schokolade zu probieren — eines dieser klassischen Morgenrituale, bei denen man sofort spürt, wie lokal es hier ist.',
    es: 'Uno de los pequeños lujos de alojarse en Frigiliana es desayunar con calma en vuestra propia terraza, mientras el pueblo despierta poco a poco y las montañas reciben la primera luz de la mañana. Pero si os apetece salir a por un café, pan fresco o un desayuno más local, el pueblo también tiene opciones muy bonitas. En Andalucía, el desayuno suele ser maravillosamente sencillo: pan tostado con tomate fresco, buen aceite de oliva y a veces aguacate, acompañado de un café intenso. Y al menos una vez merece la pena probar churros con chocolate caliente, uno de esos rituales matinales que enseguida se sienten muy locales.',
    nl: 'Een van de kleine luxe momenten in Frigiliana is rustig ontbijten op je eigen terras, terwijl het dorp langzaam ontwaakt en het eerste ochtendlicht op de bergen valt. Maar als jullie zin hebben om even de deur uit te gaan voor koffie, vers brood of een lokaler ontbijt, zijn er ook in het dorp fijne opties. In Andalusië is ontbijt vaak heerlijk eenvoudig: geroosterd brood met verse tomaat, goede olijfolie en soms avocado, met een stevige koffie erbij. En minstens één keer is het de moeite waard om churros met warme chocolademelk te proberen — zo\'n klassiek ochtendritueel dat meteen heel lokaal aanvoelt.',
    sv: 'En av de små lyxerna med att bo i Frigiliana är att äta frukost långsamt på den egna terrassen medan byn vaknar och bergen får dagens första morgonljus. Men om ni känner för att gå ut för en kaffe, färskt bröd eller en mer lokal frukost finns det också väldigt fina alternativ i byn. I Andalusien är frukosten ofta vackert enkel: rostat bröd med färsk tomat, bra olivolja och ibland avokado, tillsammans med en stark kaffe. Och minst en gång är det värt att prova churros med varm choklad — en sådan klassisk morgonritual som snabbt känns väldigt lokal.'
  },
  categories: [
    {
      heading: {
        en: 'Breakfast Recommendations',
        de: 'Frühstücksempfehlungen',
        es: 'Recomendaciones para desayunar',
        nl: 'Ontbijtaanbevelingen',
        sv: 'Frukostrekommendationer'
      },
      items: [
        {
          icon: 'tumbler',
          title: { en: "Caravansar's Coffee", de: "Caravansar's Coffee", es: "Caravansar's Coffee", nl: "Caravansar's Coffee", sv: "Caravansar's Coffee" },
          subtitle: {
            en: 'Frigiliana · Modern breakfast & coffee · approx. 650 m',
            de: 'Frigiliana · Modernes Frühstück & Kaffee · ca. 650 m',
            es: 'Frigiliana · Desayuno moderno y café · aprox. 650 m',
            nl: 'Frigiliana · Modern ontbijt & koffie · ca. 650 m',
            sv: 'Frigiliana · Modern frukost & kaffe · ca 650 m'
          },
          body: [
            {
              en: 'This is the most natural pick if you feel like a slower, more modern breakfast with very good coffee and a slightly more curated atmosphere. Especially nice for avocado-based dishes, house-made touches and a peaceful start outside the busiest village flow.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caravansar%27s+Coffee+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Das ist die naheliegendste Wahl, wenn ihr Lust auf ein langsameres, moderneres Frühstück mit sehr gutem Kaffee und etwas kuratierter Atmosphäre habt. Besonders schön für Avocado-Gerichte, hausgemachte Details und einen ruhigen Start etwas abseits vom stärksten Dorftrubel.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caravansar%27s+Coffee+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Es la opción más natural si os apetece un desayuno más pausado y moderno, con muy buen café y un ambiente algo más cuidado. Especialmente bonito para platos con aguacate, detalles caseros y un comienzo tranquilo algo más alejado del flujo turístico principal.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caravansar%27s+Coffee+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Dit is de meest logische keuze als jullie zin hebben in een rustiger, moderner ontbijt met heel goede koffie en een wat meer verzorgde sfeer. Vooral fijn voor avocado-gerechten, huisgemaakte accenten en een rustige start net buiten de drukste dorpsstroom.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caravansar%27s+Coffee+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det här är det mest självklara valet om ni känner för en lugnare och modernare frukost med riktigt bra kaffe och en lite mer genomtänkt atmosfär. Särskilt trevligt för avokadorätter, hemlagade inslag och en rofylld start lite utanför den mest turisttäta delen av byn.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Caravansar%27s+Coffee+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Churreria Chocolateria Alexis', de: 'Churreria Chocolateria Alexis', es: 'Churreria Chocolateria Alexis', nl: 'Churreria Chocolateria Alexis', sv: 'Churreria Chocolateria Alexis' },
          subtitle: {
            en: 'Frigiliana · Churros & hot chocolate · approx. 500 m',
            de: 'Frigiliana · Churros & heiße Schokolade · ca. 500 m',
            es: 'Frigiliana · Churros y chocolate caliente · aprox. 500 m',
            nl: 'Frigiliana · Churros & warme chocolademelk · ca. 500 m',
            sv: 'Frigiliana · Churros & varm choklad · ca 500 m'
          },
          body: [
            {
              en: 'If you want to try one truly local breakfast ritual, this is the one. Fresh churros with thick hot chocolate are the reason to come here. Great for a classic Andalusian-style morning treat, especially when you want something simple, warm and unmistakably traditional.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Churreria+Chocolateria+Alexis+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Wenn ihr ein wirklich lokales Frühstücksritual ausprobieren möchtet, dann dieses. Frische Churros mit dickflüssiger heißer Schokolade sind hier der eigentliche Grund zu kommen. Perfekt für einen klassischen andalusischen Morgenmoment, vor allem wenn ihr etwas Warmes, Einfaches und sehr Traditionelles möchtet.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Churreria+Chocolateria+Alexis+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Si queréis probar un ritual de desayuno realmente local, este es el sitio. Los churros recién hechos con chocolate caliente espeso son el verdadero motivo para venir. Perfecto para un momento clásico andaluz por la mañana, sobre todo si os apetece algo cálido, sencillo y claramente tradicional.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Churreria+Chocolateria+Alexis+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Als jullie één echt lokaal ontbijtritueel willen proberen, dan is dit het. Verse churros met dikke warme chocolademelk zijn hier de reden om te komen. Perfect voor een klassiek Andalusisch ochtendmoment, vooral als jullie zin hebben in iets warms, eenvoudigs en heel traditioneels.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Churreria+Chocolateria+Alexis+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Om ni vill prova en verkligt lokal frukosttradition är det här stället. Färska churros med tjock varm choklad är anledningen att komma hit. Perfekt för ett klassiskt andalusiskt morgonögonblick, särskilt när ni vill ha något varmt, enkelt och tydligt traditionellt.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Churreria+Chocolateria+Alexis+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'bread',
          title: { en: 'La Tahona del Zaidín', de: 'La Tahona del Zaidín', es: 'La Tahona del Zaidín', nl: 'La Tahona del Zaidín', sv: 'La Tahona del Zaidín' },
          subtitle: {
            en: 'Frigiliana · Bakery & easy start · approx. 150 m',
            de: 'Frigiliana · Bäckerei & einfacher Start · ca. 150 m',
            es: 'Frigiliana · Panadería y desayuno fácil · aprox. 150 m',
            nl: 'Frigiliana · Bakkerij & makkelijke start · ca. 150 m',
            sv: 'Frigiliana · Bageri & enkel start · ca 150 m'
          },
          body: [
            {
              en: 'This is the practical bakery choice when you want something easy, central and uncomplicated. Very good for grabbing fresh pastries, bread or coffee before taking breakfast back home or starting a morning walk through the village.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Tahona+del+Zaidin+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Das ist die praktische Bäckerei-Wahl, wenn ihr etwas Zentrales, Einfaches und völlig Unkompliziertes möchtet. Sehr gut, um frisches Gebäck, Brot oder Kaffee mitzunehmen und anschließend zu Hause oder bei einem kleinen Morgenspaziergang durchs Dorf zu genießen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Tahona+del+Zaidin+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Es la opción práctica de panadería cuando queréis algo céntrico, fácil y sin complicaciones. Muy buena para coger bollería, pan o café y luego desayunar en casa o seguir con un pequeño paseo por el pueblo.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Tahona+del+Zaidin+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Dit is de praktische bakkerijkeuze als jullie iets centraals, makkelijks en zonder gedoe willen. Ideaal om vers gebak, brood of koffie mee te nemen en daarna thuis of tijdens een ochtendwandeling door het dorp te ontbijten.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Tahona+del+Zaidin+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det här är det praktiska bagerivalet när ni vill ha något centralt, enkelt och okomplicerat. Väldigt bra för att köpa med färska bakverk, bröd eller kaffe och sedan äta frukost hemma eller på en lugn morgonpromenad genom byn.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=La+Tahona+del+Zaidin+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'coffee',
          title: { en: 'Cafetería Faes', de: 'Cafetería Faes', es: 'Cafetería Faes', nl: 'Cafetería Faes', sv: 'Cafetería Faes' },
          subtitle: {
            en: 'Frigiliana · Late coffee stop · approx. 120 m',
            de: 'Frigiliana · Später Kaffee-Stopp · ca. 120 m',
            es: 'Frigiliana · Café para más tarde · aprox. 120 m',
            nl: 'Frigiliana · Latere koffiestop · ca. 120 m',
            sv: 'Frigiliana · Sen kaffestopp · ca 120 m'
          },
          body: [
            {
              en: 'A good option for late risers or for mornings that start more with coffee than with a full breakfast table. Best when you want a relaxed coffee-and-snack stop later in the morning rather than an early classic breakfast.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Cafeteria+Faes+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Eine gute Wahl für Spätaufsteher oder für Morgen, die eher mit Kaffee als mit einem großen Frühstück beginnen. Am besten, wenn ihr später am Vormittag entspannt auf einen Kaffee und einen kleinen Snack einkehren möchtet, statt früh klassisch zu frühstücken.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Cafeteria+Faes+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Una buena opción para quienes se levantan más tarde o para mañanas que empiezan más con café que con una mesa completa de desayuno. Ideal si queréis parar a media mañana para un café relajado y algo pequeño, en lugar de un desayuno clásico temprano.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Cafeteria+Faes+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Een goede keuze voor uitslapers of voor ochtenden die eerder met koffie beginnen dan met een uitgebreid ontbijt. Het fijnst als jullie later in de ochtend rustig willen stoppen voor koffie en een kleine snack, in plaats van vroeg klassiek te ontbijten.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Cafeteria+Faes+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Ett bra val för er som vaknar lite senare eller för morgnar som börjar mer med kaffe än med ett stort frukostbord. Passar bäst när ni vill stanna till senare på förmiddagen för en lugn kaffe och något litet, snarare än en tidig klassisk frukost.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Cafeteria+Faes+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        },
        {
          icon: 'landmark',
          title: { en: 'Bar Virtudes', de: 'Bar Virtudes', es: 'Bar Virtudes', nl: 'Bar Virtudes', sv: 'Bar Virtudes' },
          subtitle: {
            en: 'Frigiliana · Late breakfast / brunch feel · approx. 260 m',
            de: 'Frigiliana · Spätes Frühstück / Brunch-Gefühl · ca. 260 m',
            es: 'Frigiliana · Desayuno tardío / ambiente brunch · aprox. 260 m',
            nl: 'Frigiliana · Laat ontbijt / brunchgevoel · ca. 260 m',
            sv: 'Frigiliana · Sen frukost / brunchkänsla · ca 260 m'
          },
          body: [
            {
              en: 'This is the one for days when breakfast turns naturally into a late morning stop, almost halfway between breakfast, brunch and an early lunch. Very well placed in the village center, with lovely views and a more social, open village feeling around it.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Virtudes+Frigiliana" target="_blank" rel="noopener">Open in Google Maps</a>',
              de: 'Das ist die richtige Wahl für Tage, an denen Frühstück ganz natürlich in einen späten Vormittagsstopp übergeht — irgendwo zwischen Frühstück, Brunch und frühem Lunch. Sehr schön im Dorfzentrum gelegen, mit herrlichen Blicken und einer offeneren, geselligen Dorfatmosphäre drum herum.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Virtudes+Frigiliana" target="_blank" rel="noopener">In Google Maps öffnen</a>',
              es: 'Es la opción para esos días en los que el desayuno se convierte de forma natural en una parada de media mañana, casi entre desayuno, brunch y primer almuerzo. Está muy bien situado en el centro del pueblo, con vistas bonitas y un ambiente más social y abierto alrededor.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Virtudes+Frigiliana" target="_blank" rel="noopener">Abrir en Google Maps</a>',
              nl: 'Dit is de juiste plek voor dagen waarop ontbijt vanzelf overgaat in een late ochtendstop, ergens tussen ontbijt, brunch en een vroege lunch in. Mooi gelegen in het dorpscentrum, met fijne uitzichten en een wat socialere, open dorpssfeer eromheen.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Virtudes+Frigiliana" target="_blank" rel="noopener">Openen in Google Maps</a>',
              sv: 'Det här är valet för dagar när frukosten naturligt glider över i ett sent förmiddagsstopp, någonstans mellan frukost, brunch och en tidig lunch. Väldigt fint beläget i byns centrum, med härliga utsikter och en mer social och öppen bykänsla runt omkring.<br><br><a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Bar+Virtudes+Frigiliana" target="_blank" rel="noopener">Öppna i Google Maps</a>'
            }
          ]
        }
      ]
    }
  ]
};

// Structured migration of the former Lodgify guide; English remains the semantic source of truth.
const nerjaGuestNightlife: GuestGuideEntry = {
  "type": "detail",
  "slug": "nerja-guest-nightlife",
  "backSlug": "frigiliana-guest-recommendations",
  "supportHref": FRIGILIANA_SUPPORT_EMAIL,
  "supportLabel": NEED_HELP,
  "seoTitle": {
    "en": "Nightlife in Nerja | AMARA",
    "de": "Nachtleben in Nerja | AMARA",
    "es": "Vida nocturna en Nerja | AMARA",
    "nl": "Nachtleven in Nerja | AMARA",
    "sv": "Nattliv i Nerja | AMARA"
  },
  "seoDescription": {
    "en": "Nerja is lively in the evenings, but it is not a full party town. That is exactly what many guests like about it. You can choose between sunset drinks with sea views, relaxed beach bars, a more social bar-hopping area, or a cultural evening with flamenco.",
    "de": "Nerja ist abends lebendig, aber kein reiner Partyort. Genau das gefällt vielen Gästen daran. Ihr könnt zwischen Sunset-Drinks mit Meerblick, entspannten Strandbars, einer geselligeren Bar-Hopping-Zone oder einem kulturellen Abend mit Flamenco wählen.",
    "es": "Nerja tiene ambiente por la noche, pero no es un destino puramente de fiesta. Precisamente eso es lo que muchos huéspedes valoran. Podéis elegir entre copas al atardecer con vistas al mar, beach bars relajados, una zona más social para ir de bar en bar o una noche cultural con flamenco.",
    "nl": "Nerja is ’s avonds levendig, maar geen pure feestbestemming. Juist dat waarderen veel gasten. Jullie kunnen kiezen tussen sunset-drankjes met zeezicht, ontspannen beachbars, een socialere bar-hopping-zone of een culturele avond met flamenco.",
    "sv": "Nerja är livligt på kvällarna, men ingen renodlad partyort. Det är just det många gäster uppskattar. Ni kan välja mellan drinkar i solnedgången med havsutsikt, avslappnade strandbarer, ett mer socialt område för bar-hopping eller en kulturell kväll med flamenco."
  },
  "kicker": RECOMMENDATIONS_KICKER,
  "title": {
    "en": "Nightlife in Nerja",
    "de": "Nachtleben in Nerja",
    "es": "Vida nocturna en Nerja",
    "nl": "Nachtleven in Nerja",
    "sv": "Nattliv i Nerja"
  },
  "intro": {
    "en": "Nerja is lively in the evenings, but it is not a full party town. That is exactly what many guests like about it. You can choose between sunset drinks with sea views, relaxed beach bars, a more social bar-hopping area, or a cultural evening with flamenco. The easiest way to think about nightlife here is by area: the Balcón and old town are best for a beautiful early evening, Plaza Tutti Frutti is the liveliest zone later on, and Burriana works well for a softer beachside night in summer.",
    "de": "Nerja ist abends lebendig, aber kein reiner Partyort. Genau das gefällt vielen Gästen daran. Ihr könnt zwischen Sunset-Drinks mit Meerblick, entspannten Strandbars, einer geselligeren Bar-Hopping-Zone oder einem kulturellen Abend mit Flamenco wählen. Am einfachsten lässt sich das Nachtleben hier nach Zonen verstehen: Balcón und Altstadt eignen sich am besten für einen schönen frühen Abend, Plaza Tutti Frutti ist später die lebhafteste Zone, und Burriana funktioniert im Sommer besonders gut für einen ruhigeren Strandabend.",
    "es": "Nerja tiene ambiente por la noche, pero no es un destino puramente de fiesta. Precisamente eso es lo que muchos huéspedes valoran. Podéis elegir entre copas al atardecer con vistas al mar, beach bars relajados, una zona más social para ir de bar en bar o una noche cultural con flamenco. La forma más sencilla de entender la vida nocturna aquí es por zonas: el Balcón y el casco antiguo son ideales para una primera parte de la tarde-noche bonita, Plaza Tutti Frutti es la zona más animada más tarde, y Burriana funciona muy bien en verano para una noche más tranquila junto al mar.",
    "nl": "Nerja is ’s avonds levendig, maar geen pure feestbestemming. Juist dat waarderen veel gasten. Jullie kunnen kiezen tussen sunset-drankjes met zeezicht, ontspannen beachbars, een socialere bar-hopping-zone of een culturele avond met flamenco. De makkelijkste manier om het nachtleven hier te begrijpen is per zone: de Balcón en de oude stad zijn het best voor een mooie vroege avond, Plaza Tutti Frutti is later de levendigste zone, en Burriana werkt in de zomer heel goed voor een zachtere avond aan zee.",
    "sv": "Nerja är livligt på kvällarna, men ingen renodlad partyort. Det är just det många gäster uppskattar. Ni kan välja mellan drinkar i solnedgången med havsutsikt, avslappnade strandbarer, ett mer socialt område för bar-hopping eller en kulturell kväll med flamenco. Det enklaste sättet att förstå nattlivet här är att tänka i områden: Balcón och gamla stan passar bäst för en vacker tidig kväll, Plaza Tutti Frutti är det livligaste området senare på kvällen, och Burriana fungerar särskilt bra på sommaren för en lugnare kväll vid havet."
  },
  "categories": [
    {
      "heading": {
        "en": "Nightlife Options",
        "de": "Nightlife-Optionen",
        "es": "Opciones para salir",
        "nl": "Nightlife-opties",
        "sv": "Alternativ för kvällsliv"
      },
      "items": [
        {
          "icon": "compass",
          "title": {
            "en": "Best Areas — where to go for which mood",
            "de": "Beste Zonen — wohin für welche Stimmung",
            "es": "Mejores zonas — adónde ir según el ambiente",
            "nl": "Beste zones — waarheen voor welke sfeer",
            "sv": "Bästa områden — vart ni går för rätt stämning"
          },
          "body": [
            {
              "en": "<strong>Balcón de Europa & Old Town</strong>",
              "de": "<strong>Balcón de Europa & Altstadt</strong>",
              "es": "<strong>Balcón de Europa y casco antiguo</strong>",
              "nl": "<strong>Balcón de Europa & oude stad</strong>",
              "sv": "<strong>Balcón de Europa & gamla stan</strong>"
            },
            {
              "en": "Best for sunset drinks, a more elegant evening and couples. This is the prettiest part of Nerja at night and ideal if you want sea views, a stroll, and one or two good places rather than a loud bar circuit.",
              "de": "Am besten für Sunset-Drinks, einen eleganteren Abend und Paare. Das ist nachts der schönste Teil von Nerja und ideal, wenn ihr Meerblick, einen Spaziergang und ein oder zwei gute Orte wollt statt einer lauten Bar-Runde.",
              "es": "Lo mejor para copas al atardecer, una noche más elegante y parejas. Es la zona más bonita de Nerja por la noche e ideal si buscáis vistas al mar, un paseo y uno o dos buenos sitios en lugar de una ruta de bares ruidosa.",
              "nl": "Het best voor sunset-drankjes, een elegantere avond en stellen. Dit is ’s avonds het mooiste deel van Nerja en ideaal als jullie zeezicht, een wandeling en één of twee goede plekken willen in plaats van een luidruchtige barronde.",
              "sv": "Bäst för drinkar i solnedgången, en mer elegant kväll och par. Det här är den vackraste delen av Nerja på kvällen och perfekt om ni vill ha havsutsikt, en promenad och en eller två riktigt bra platser istället för en högljudd barrunda."
            },
            {
              "en": "<strong>Plaza Tutti Frutti</strong>",
              "de": "<strong>Plaza Tutti Frutti</strong>",
              "es": "<strong>Plaza Tutti Frutti</strong>",
              "nl": "<strong>Plaza Tutti Frutti</strong>",
              "sv": "<strong>Plaza Tutti Frutti</strong>"
            },
            {
              "en": "Best for a later and livelier night. If you want bar-hopping, a younger crowd and more energy after dinner, this is the main zone to aim for.",
              "de": "Am besten für einen späteren und lebhafteren Abend. Wenn ihr Bar-Hopping, ein jüngeres Publikum und mehr Energie nach dem Essen mögt, ist das die wichtigste Zone.",
              "es": "Lo mejor para una noche más tardía y animada. Si queréis ir de bar en bar, un ambiente más joven y más energía después de cenar, esta es la zona principal.",
              "nl": "Het best voor een latere en levendigere avond. Als jullie bar-hopping, een jonger publiek en meer energie na het diner willen, is dit de belangrijkste zone.",
              "sv": "Bäst för en senare och livligare kväll. Om ni vill ha bar-hopping, yngre publik och mer energi efter middagen är detta huvudområdet."
            },
            {
              "en": "<strong>Burriana</strong>",
              "de": "<strong>Burriana</strong>",
              "es": "<strong>Burriana</strong>",
              "nl": "<strong>Burriana</strong>",
              "sv": "<strong>Burriana</strong>"
            },
            {
              "en": "Best for a relaxed beachside evening, especially in summer. Good for dinner by the sea, warm air and a softer rhythm.",
              "de": "Am besten für einen entspannten Strandabend, besonders im Sommer. Ideal für Abendessen am Meer, warme Luft und einen ruhigeren Rhythmus.",
              "es": "Lo mejor para una noche relajada junto al mar, sobre todo en verano. Muy bien para cenar frente al mar, disfrutar del aire cálido y un ritmo más suave.",
              "nl": "Het best voor een ontspannen avond aan zee, vooral in de zomer. Goed voor diner aan het strand, warme lucht en een zachter ritme.",
              "sv": "Bäst för en avslappnad kväll vid stranden, särskilt på sommaren. Bra för middag vid havet, varm kvällsluft och ett lugnare tempo."
            },
            {
              "en": "<ul><li><strong>Best for couples:</strong> Balcón / Old Town</li> <li><strong>Best for late drinks:</strong> Tutti Frutti</li> <li><strong>Best for summer beach mood:</strong> Burriana</li></ul>",
              "de": "<ul><li><strong>Am besten für Paare:</strong> Balcón / Altstadt</li> <li><strong>Am besten für späte Drinks:</strong> Tutti Frutti</li> <li><strong>Am besten für Sommer-Strandstimmung:</strong> Burriana</li></ul>",
              "es": "<ul><li><strong>Lo mejor para parejas:</strong> Balcón / casco antiguo</li> <li><strong>Lo mejor para copas tarde:</strong> Tutti Frutti</li> <li><strong>Lo mejor para ambiente veraniego de playa:</strong> Burriana</li></ul>",
              "nl": "<ul><li><strong>Het best voor stellen:</strong> Balcón / oude stad</li> <li><strong>Het best voor late drankjes:</strong> Tutti Frutti</li> <li><strong>Het best voor zomerse beach-sfeer:</strong> Burriana</li></ul>",
              "sv": "<ul><li><strong>Bäst för par:</strong> Balcón / gamla stan</li> <li><strong>Bäst för sena drinkar:</strong> Tutti Frutti</li> <li><strong>Bäst för somrig strandkänsla:</strong> Burriana</li></ul>"
            }
          ]
        },
        {
          "icon": "goblet",
          "title": {
            "en": "Cocktails & Sunset Drinks",
            "de": "Cocktails & Sunset-Drinks",
            "es": "Cócteles y copas al atardecer",
            "nl": "Cocktails & sunset-drankjes",
            "sv": "Cocktails & drinkar i solnedgången"
          },
          "body": [
            {
              "en": "For a beautiful early evening, stay around the Balcón de Europa and the old town streets nearby. This is the best choice for sea views, a more polished mood and a slower night.",
              "de": "Für einen schönen frühen Abend bleibt ihr am besten rund um den Balcón de Europa und die umliegenden Altstadtgassen. Das ist die beste Wahl für Meerblick, eine stilvollere Stimmung und einen langsameren Abend.",
              "es": "Para una primera parte de la noche bonita, lo mejor es quedaros por la zona del Balcón de Europa y las calles del casco antiguo. Es la mejor opción para vistas al mar, un ambiente más cuidado y una noche más tranquila.",
              "nl": "Voor een mooie vroege avond blijven jullie het best rond de Balcón de Europa en de omliggende straatjes van de oude stad. Dit is de beste keuze voor zeezicht, een verfijndere sfeer en een rustigere avond.",
              "sv": "För en vacker tidig kväll är det bäst att hålla sig runt Balcón de Europa och de närliggande gatorna i gamla stan. Det är det bästa valet för havsutsikt, en mer elegant känsla och en lugnare kväll."
            },
            {
              "en": "<ul><li><strong>Best for:</strong> couples, calm groups, date night</li> <li><strong>Best time:</strong> sunset to after dinner</li> <li><strong>Style:</strong> scenic, elegant, walkable</li></ul>",
              "de": "<ul><li><strong>Am besten für:</strong> Paare, ruhige Gruppen, Date Night</li> <li><strong>Beste Zeit:</strong> Sonnenuntergang bis nach dem Essen</li> <li><strong>Stil:</strong> schön, elegant, gut zu Fuß</li></ul>",
              "es": "<ul><li><strong>Ideal para:</strong> parejas, grupos tranquilos, cita</li> <li><strong>Mejor momento:</strong> atardecer y después de cenar</li> <li><strong>Estilo:</strong> bonito, elegante, fácil de recorrer a pie</li></ul>",
              "nl": "<ul><li><strong>Het best voor:</strong> stellen, rustige groepen, date night</li> <li><strong>Beste tijd:</strong> zonsondergang tot na het diner</li> <li><strong>Stijl:</strong> sfeervol, elegant, goed te voet</li></ul>",
              "sv": "<ul><li><strong>Bäst för:</strong> par, lugna grupper, date night</li> <li><strong>Bästa tid:</strong> solnedgång till efter middagen</li> <li><strong>Stil:</strong> vackert, elegant, promenadvänligt</li></ul>"
            },
            {
              "en": "Google Maps shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=cocktail+bar+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Cocktail bars in Nerja</a>",
              "de": "Google-Maps-Shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=cocktail+bar+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Cocktailbars in Nerja</a>",
              "es": "Acceso rápido en Google Maps: <a href=\"https://www.google.com/maps/search/?api=1&query=cocktail+bar+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Cocktail bars in Nerja</a>",
              "nl": "Google Maps-snelkoppeling: <a href=\"https://www.google.com/maps/search/?api=1&query=cocktail+bar+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Cocktailbars in Nerja</a>",
              "sv": "Google Maps-genväg: <a href=\"https://www.google.com/maps/search/?api=1&query=cocktail+bar+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Cocktailbarer i Nerja</a>"
            }
          ]
        },
        {
          "icon": "music",
          "title": {
            "en": "Late Bars & Livelier Nights",
            "de": "Späte Bars & lebhaftere Nächte",
            "es": "Bares tardíos y noches más animadas",
            "nl": "Late bars & levendigere avonden",
            "sv": "Sena barer & livligare kvällar"
          },
          "body": [
            {
              "en": "If you want a later, louder and more social night, head to Plaza Tutti Frutti after dinner. This is the easiest area for bar-hopping and the clearest “nightlife zone” in Nerja.",
              "de": "Wenn ihr einen späteren, lauteren und geselligeren Abend wollt, geht nach dem Essen zur Plaza Tutti Frutti. Das ist die einfachste Zone für Bar-Hopping und die klarste „Nightlife-Zone“ in Nerja.",
              "es": "Si queréis una noche más tardía, más ruidosa y más social, id a Plaza Tutti Frutti después de cenar. Es la zona más fácil para ir de bar en bar y la “zona de marcha” más clara de Nerja.",
              "nl": "Als jullie een latere, luidruchtigere en socialere avond willen, ga dan na het diner naar Plaza Tutti Frutti. Dit is de makkelijkste zone voor bar-hopping en de duidelijkste nightlife-zone van Nerja.",
              "sv": "Om ni vill ha en senare, livligare och mer social kväll ska ni gå till Plaza Tutti Frutti efter middagen. Det här är det enklaste området för bar-hopping och den tydligaste nattlivszonen i Nerja."
            },
            {
              "en": "<ul><li><strong>Best for:</strong> groups, later starts, casual fun</li> <li><strong>Best time:</strong> after dinner, especially later in summer</li> <li><strong>Atmosphere:</strong> younger, busier, more energetic</li></ul>",
              "de": "<ul><li><strong>Am besten für:</strong> Gruppen, spätere Starts, lockeren Spaß</li> <li><strong>Beste Zeit:</strong> nach dem Essen, im Sommer besonders später</li> <li><strong>Atmosphäre:</strong> jünger, voller, energiegeladener</li></ul>",
              "es": "<ul><li><strong>Ideal para:</strong> grupos, empezar más tarde, plan informal</li> <li><strong>Mejor momento:</strong> después de cenar, en verano incluso más tarde</li> <li><strong>Ambiente:</strong> más joven, más lleno, más enérgico</li></ul>",
              "nl": "<ul><li><strong>Het best voor:</strong> groepen, later beginnen, informele fun</li> <li><strong>Beste tijd:</strong> na het diner, vooral later in de zomer</li> <li><strong>Sfeer:</strong> jonger, drukker, energieker</li></ul>",
              "sv": "<ul><li><strong>Bäst för:</strong> grupper, sena starter, avslappnat nöje</li> <li><strong>Bästa tid:</strong> efter middagen, särskilt senare på sommaren</li> <li><strong>Atmosfär:</strong> yngre, livligare, mer energi</li></ul>"
            },
            {
              "en": "Google Maps shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Plaza Tutti Frutti</a>",
              "de": "Google-Maps-Shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Plaza Tutti Frutti</a>",
              "es": "Acceso rápido en Google Maps: <a href=\"https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Plaza Tutti Frutti</a>",
              "nl": "Google Maps-snelkoppeling: <a href=\"https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Plaza Tutti Frutti</a>",
              "sv": "Google Maps-genväg: <a href=\"https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Plaza Tutti Frutti</a>"
            }
          ]
        },
        {
          "icon": "dance",
          "title": {
            "en": "Flamenco & Cultural Evenings",
            "de": "Flamenco & kulturelle Abende",
            "es": "Flamenco y noches culturales",
            "nl": "Flamenco & culturele avonden",
            "sv": "Flamenco & kulturella kvällar"
          },
          "body": [
            {
              "en": "If you want something more Andalusian and less bar-focused, look for a flamenco evening in Nerja. This is one of the nicest alternatives to a standard drinks night and often feels more memorable.",
              "de": "Wenn ihr etwas Andalusischeres und weniger Bar-lastiges möchtet, schaut nach einem Flamenco-Abend in Nerja. Das ist eine der schönsten Alternativen zu einem normalen Drink-Abend und oft besonders erinnerungswürdig.",
              "es": "Si buscáis algo más andaluz y menos centrado en bares, buscad una noche de flamenco en Nerja. Es una de las mejores alternativas a una noche de copas estándar y muchas veces resulta más memorable.",
              "nl": "Als jullie iets Andalusischer en minder bar-gericht willen, zoek dan naar een flamenco-avond in Nerja. Dit is een van de mooiste alternatieven voor een standaard avondje drinken en voelt vaak memorabeler aan.",
              "sv": "Om ni vill ha något mer andalusiskt och mindre fokuserat på barer, leta efter en flamencokväll i Nerja. Det är ett av de finaste alternativen till en vanlig drinkkväll och känns ofta mer minnesvärt."
            },
            {
              "en": "<ul><li><strong>Best for:</strong> couples, culture lovers, a different kind of evening</li> <li><strong>Mood:</strong> intimate, local, atmospheric</li></ul>",
              "de": "<ul><li><strong>Am besten für:</strong> Paare, Kulturinteressierte, einen anderen Abend</li> <li><strong>Stimmung:</strong> intim, lokal, atmosphärisch</li></ul>",
              "es": "<ul><li><strong>Ideal para:</strong> parejas, amantes de la cultura, una noche distinta</li> <li><strong>Ambiente:</strong> íntimo, local, con mucha atmósfera</li></ul>",
              "nl": "<ul><li><strong>Het best voor:</strong> stellen, cultuurliefhebbers, een andere avond</li> <li><strong>Sfeer:</strong> intiem, lokaal, sfeervol</li></ul>",
              "sv": "<ul><li><strong>Bäst för:</strong> par, kulturintresserade, en annorlunda kväll</li> <li><strong>Känsla:</strong> intim, lokal, stämningsfull</li></ul>"
            },
            {
              "en": "Google Maps shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=flamenco+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Flamenco in Nerja</a>",
              "de": "Google-Maps-Shortcut: <a href=\"https://www.google.com/maps/search/?api=1&query=flamenco+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Flamenco in Nerja</a>",
              "es": "Acceso rápido en Google Maps: <a href=\"https://www.google.com/maps/search/?api=1&query=flamenco+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Flamenco en Nerja</a>",
              "nl": "Google Maps-snelkoppeling: <a href=\"https://www.google.com/maps/search/?api=1&query=flamenco+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Flamenco in Nerja</a>",
              "sv": "Google Maps-genväg: <a href=\"https://www.google.com/maps/search/?api=1&query=flamenco+Nerja\" target=\"_blank\" rel=\"noopener noreferrer\">Flamenco i Nerja</a>"
            }
          ]
        },
        {
          "icon": "info",
          "title": {
            "en": "Good to Know — timing & season",
            "de": "Gut zu wissen — Timing & Saison",
            "es": "Conviene saber — horario y temporada",
            "nl": "Goed om te weten — timing & seizoen",
            "sv": "Bra att veta — tid & säsong"
          },
          "body": [
            {
              "en": "Summer is the easiest season for nightlife in Nerja. Everything feels later, fuller and more naturally alive. In winter, the town is still pleasant, but the nightlife becomes more selective and quieter.",
              "de": "Der Sommer ist die einfachste Saison für Nightlife in Nerja. Alles fühlt sich später, voller und natürlicher lebendig an. Im Winter ist die Stadt immer noch angenehm, aber das Nachtleben wird selektiver und ruhiger.",
              "es": "El verano es la temporada más fácil para salir por Nerja. Todo se siente más tardío, más lleno y más vivo. En invierno, el pueblo sigue siendo agradable, pero la vida nocturna es más selectiva y tranquila.",
              "nl": "De zomer is het makkelijkste seizoen voor nightlife in Nerja. Alles voelt later, voller en vanzelfsprekender levendig aan. In de winter is het stadje nog steeds prettig, maar wordt het avondleven selectiever en rustiger.",
              "sv": "Sommaren är den enklaste säsongen för nattliv i Nerja. Allt känns senare, livligare och mer naturligt fullt av liv. På vintern är staden fortfarande trevlig, men nattlivet blir mer selektivt och lugnare."
            },
            {
              "en": "<ul><li><strong>Summer:</strong> better for Burriana and later drinks</li> <li><strong>Winter:</strong> better to focus on the old town and a smaller number of good places</li> <li><strong>Simple strategy:</strong> start with sunset drinks, then decide if you want more energy afterwards</li></ul>",
              "de": "<ul><li><strong>Sommer:</strong> besser für Burriana und spätere Drinks</li> <li><strong>Winter:</strong> besser auf die Altstadt und einige wenige gute Orte konzentrieren</li> <li><strong>Einfache Strategie:</strong> mit Sunset-Drinks starten und dann spontan entscheiden, ob ihr später noch mehr wollt</li></ul>",
              "es": "<ul><li><strong>Verano:</strong> mejor para Burriana y copas más tarde</li> <li><strong>Invierno:</strong> mejor centrarse en el casco antiguo y en un número más pequeño de buenos sitios</li> <li><strong>Estrategia simple:</strong> empezar con copas al atardecer y luego decidir si queréis más ambiente</li></ul>",
              "nl": "<ul><li><strong>Zomer:</strong> beter voor Burriana en latere drankjes</li> <li><strong>Winter:</strong> beter focussen op de oude stad en een kleiner aantal goede plekken</li> <li><strong>Eenvoudige strategie:</strong> begin met sunset-drankjes en beslis daarna of jullie meer energie willen</li></ul>",
              "sv": "<ul><li><strong>Sommar:</strong> bättre för Burriana och senare drinkar</li> <li><strong>Vinter:</strong> bättre att fokusera på gamla stan och ett mindre antal riktigt bra ställen</li> <li><strong>Enkel strategi:</strong> börja med drinkar i solnedgången och bestäm sedan om ni vill ha mer liv senare</li></ul>"
            }
          ]
        }
      ]
    }
  ]
};


const recommendationSubPages: GuestGuideEntry[] = [
  nerjaGuestBreakfast,
  frigilianaGuestBreakfast,
  nerjaGuestRestaurants,
  frigilianaGuestRestaurants,
  frigilianaGuestBeaches,
  frigilianaGuestHiking,
  frigilianaGuestSightseeing,
  frigilianaGuestDayTrips,
  frigilianaGuestFestivals,
  createPlaceholderGuidePage('frigiliana-guest-flamenco-bachata', {
    en: 'Flamenco & Bachata', de: 'Flamenco & Bachata', es: 'Flamenco y Bachata', nl: 'Flamenco & Bachata', sv: 'Flamenco & Bachata'
  }),
  nerjaGuestNightlife,
  frigilianaGuestWellness,
  nerjaGuestAdventure
];

const frigilianaRecommendations: GuestGuideEntry = {
  type: 'detail',
  slug: 'frigiliana-guest-recommendations',
  backSlug: 'guestwelcome-frigiliana-farah',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Our Recommendations | AMARA',
    de: 'Unsere Empfehlungen | AMARA',
    es: 'Nuestras recomendaciones | AMARA',
    nl: 'Onze aanbevelingen | AMARA',
    sv: 'Våra rekommendationer | AMARA'
  },
  seoDescription: {
    en: 'Beaches, culture, dining and curated places around Frigiliana and Nerja, picked by your hosts.',
    de: 'Strände, Kultur, Restaurants und von euren Gastgebern ausgewählte Orte rund um Frigiliana und Nerja.',
    es: 'Playas, cultura, restaurantes y lugares seleccionados por vuestros anfitriones alrededor de Frigiliana y Nerja.',
    nl: 'Stranden, cultuur, restaurants en door jullie gastheren geselecteerde plekken rondom Frigiliana en Nerja.',
    sv: 'Stränder, kultur, restauranger och platser utvalda av era värdar runt Frigiliana och Nerja.'
  },
  kicker: RECOMMENDATIONS_KICKER,
  title: {
    en: 'Our Recommendations in Nerja, Frigiliana & Nearby',
    de: 'Unsere Empfehlungen für Nerja, Frigiliana & Umgebung',
    es: 'Nuestras recomendaciones en Nerja, Frigiliana y alrededores',
    nl: 'Onze aanbevelingen in Nerja, Frigiliana & omgeving',
    sv: 'Våra rekommendationer i Nerja, Frigiliana & närområdet'
  },
  intro: {
    en: 'Beaches, culture, and curated places in the area.',
    de: 'Strände, Kultur und von uns für euch ausgewählte Orte in der Umgebung.',
    es: 'Playas, cultura y lugares seleccionados para vosotros en la zona.',
    nl: 'Stranden, cultuur en speciaal voor jullie geselecteerde plekken in de omgeving.',
    sv: 'Stränder, kultur och platser vi valt ut för er i området.'
  },
  categories: [
    {
      heading: { en: 'Weather', de: 'Wetter', es: 'Tiempo', nl: 'Weer', sv: 'Väder' },
      items: [
        {
          kind: 'weather',
          icon: 'weather',
          title: {
            en: 'Weather Forecast',
            de: 'Wettervorhersage',
            es: 'Previsión del tiempo',
            nl: 'Weersverwachting',
            sv: 'Väderprognos'
          },
          lat: 36.7915,
          lon: -3.8956,
          locationName: 'Frigiliana',
          introBody: [
            {
              en: 'The Costa del Sol is known for many sunny days and a mild climate throughout much of the year. In summer, the sun can feel very strong, especially around midday — sunscreen, water and a hat are always a good idea.',
              de: 'Die Costa del Sol ist für viele Sonnentage und ein meist mildes Klima bekannt. Im Sommer kann die Sonne vor allem rund um die Mittagszeit sehr intensiv sein – Sonnencreme, Wasser und eine Kopfbedeckung sind immer sinnvoll.',
              es: 'La Costa del Sol es conocida por sus muchos días de sol y su clima suave durante gran parte del año. En verano el sol puede sentirse muy fuerte, especialmente al mediodía: protector solar, agua y gorra siempre son una buena idea.',
              nl: 'De Costa del Sol staat bekend om de vele zonnige dagen en het milde klimaat. In de zomer kan de zon vooral rond het middaguur erg fel zijn — zonnebrand, water en een pet zijn altijd verstandig.',
              sv: 'Costa del Sol är känd för många soldagar och ett milt klimat under stora delar av året. På sommaren kan solen vara mycket stark, särskilt mitt på dagen — solskydd, vatten och hatt är alltid en bra idé.'
            }
          ]
        }
      ]
    },
    {
      heading: { en: 'Breakfast', de: 'Frühstück', es: 'Desayuno', nl: 'Ontbijt', sv: 'Frukost' },
      items: [
        {
          kind: 'link',
          icon: 'breakfast',
          targetSlug: 'nerja-guest-breakfast',
          title: { en: 'Breakfast in Nerja', de: 'Frühstück in Nerja', es: 'Desayuno en Nerja', nl: 'Ontbijt in Nerja', sv: 'Frukost i Nerja' }
        },
        {
          kind: 'link',
          icon: 'breakfast',
          targetSlug: 'frigiliana-guest-breakfast',
          title: { en: 'Breakfast in Frigiliana', de: 'Frühstück in Frigiliana', es: 'Desayuno en Frigiliana', nl: 'Ontbijt in Frigiliana', sv: 'Frukost i Frigiliana' }
        }
      ]
    },
    {
      heading: { en: 'Dining', de: 'Essen & Trinken', es: 'Dónde comer', nl: 'Eten & Drinken', sv: 'Mat & Dryck' },
      intro: [
        {
          en: 'A helpful local note: many restaurants open at lunchtime, then pause in the late afternoon for siesta. Most places usually reopen for dinner from around 7:30–8:00 pm.',
          de: 'Ein hilfreicher lokaler Hinweis: Viele Restaurants öffnen mittags, machen am späten Nachmittag eine Pause bzw. Siesta und öffnen abends meist erst wieder ab etwa 19:30–20:00 Uhr.',
          es: 'Una nota local útil: muchos restaurantes abren al mediodía, cierran por la tarde para la siesta y normalmente vuelven a abrir para la cena a partir de las 19:30–20:00 h.',
          nl: 'Een handige lokale tip: veel restaurants zijn rond lunchtijd open, sluiten later in de middag voor een siësta en gaan voor het diner meestal pas weer open vanaf ongeveer 19:30–20:00 uur.',
          sv: 'Ett bra lokalt tips: många restauranger öppnar vid lunchtid, stänger senare på eftermiddagen för siesta och öppnar oftast igen för middag från cirka 19.30–20.00.'
        }
      ],
      items: [
        {
          kind: 'link',
          icon: 'fish',
          targetSlug: 'nerja-guest-restaurants',
          title: { en: 'Restaurants in Nerja', de: 'Restaurants in Nerja', es: 'Restaurantes en Nerja', nl: 'Restaurants in Nerja', sv: 'Restauranger i Nerja' }
        },
        {
          kind: 'link',
          icon: 'goblet',
          targetSlug: 'frigiliana-guest-restaurants',
          title: { en: 'Restaurants in Frigiliana', de: 'Restaurants in Frigiliana', es: 'Restaurantes en Frigiliana', nl: 'Restaurants in Frigiliana', sv: 'Restauranger i Frigiliana' }
        }
      ]
    },
    {
      heading: {
        en: 'Nature & Outdoors',
        de: 'Natur & Outdoor',
        es: 'Naturaleza y aire libre',
        nl: 'Natuur & Buiten',
        sv: 'Natur & Utomhus'
      },
      items: [
        {
          kind: 'link',
          icon: 'wave',
          targetSlug: 'frigiliana-guest-beaches',
          title: { en: 'Beaches', de: 'Strände', es: 'Playas', nl: 'Stranden', sv: 'Stränder' }
        },
        {
          icon: 'pool',
          title: {
            en: 'Municipal Pool in Frigiliana',
            de: 'Gemeindeschwimmbad in Frigiliana',
            es: 'Piscina municipal de Frigiliana',
            nl: 'Gemeentelijk zwembad in Frigiliana',
            sv: 'Kommunal pool i Frigiliana'
          },
          subtitle: {
            en: 'Public outdoor pool during the summer season.',
            de: 'Öffentliches Freibad während der Sommersaison.',
            es: 'Piscina pública al aire libre durante el verano.',
            nl: 'Openbaar buitenzwembad tijdens het zomerseizoen.',
            sv: 'Offentlig utomhuspool under sommarsäsongen.'
          },
          body: [
            {
              en: 'Our accommodation does not have a private or communal pool. During the summer season, Frigiliana usually operates a public municipal outdoor pool in the village. Opening times, admission fees and seasonal dates may change, so please check the latest information before visiting.',
              de: 'Unsere Unterkunft verfügt über keinen privaten oder gemeinschaftlichen Pool. Während der Sommersaison betreibt die Gemeinde Frigiliana in der Regel ein öffentliches Freibad im Ort. Öffnungszeiten, Eintrittspreise und Saisonzeiten können sich ändern. Bitte prüft daher vor eurem Besuch die aktuellen Informationen.',
              es: 'Nuestro alojamiento no dispone de piscina privada ni comunitaria. Durante la temporada de verano, el Ayuntamiento de Frigiliana suele abrir una piscina municipal al aire libre en el pueblo. Los horarios, precios de entrada y fechas de apertura pueden cambiar, por lo que os recomendamos consultar la información actual antes de ir.',
              nl: 'Onze accommodatie heeft geen privé- of gemeenschappelijk zwembad. Tijdens het zomerseizoen is er in Frigiliana doorgaans een openbaar gemeentelijk buitenzwembad. Openingstijden, toegangsprijzen en seizoensdata kunnen wijzigen. Controleer daarom voor vertrek de actuele informatie.',
              sv: 'Vårt boende har ingen privat eller gemensam pool. Under sommarsäsongen finns det vanligtvis en offentlig kommunal utomhuspool i Frigiliana. Öppettider, entréavgifter och säsongsdatum kan ändras, så kontrollera aktuell information före besöket.'
            }
          ],
          actions: [
            {
              label: {
                en: 'Open in Google Maps',
                de: 'In Google Maps öffnen',
                es: 'Abrir en Google Maps',
                nl: 'Openen in Google Maps',
                sv: 'Öppna i Google Maps'
              },
              href: 'https://www.google.com/maps/search/?api=1&query=Piscina+Municipal+Frigiliana'
            }
          ]
        },
        {
          kind: 'link',
          icon: 'hiking',
          targetSlug: 'frigiliana-guest-hiking',
          title: { en: 'Hiking', de: 'Wandern', es: 'Senderismo', nl: 'Wandelen', sv: 'Vandring' }
        }
      ]
    },
    {
      heading: { en: 'Discover', de: 'Entdecken', es: 'Descubrir', nl: 'Ontdekken', sv: 'Upptäck' },
      items: [
        {
          kind: 'link',
          icon: 'landmark',
          targetSlug: 'frigiliana-guest-sightseeing',
          title: { en: 'Sightseeing', de: 'Sightseeing', es: 'Turismo', nl: 'Bezienswaardigheden', sv: 'Sevärdheter' }
        },
        {
          icon: 'guide',
          title: {
            en: 'Guided City Tour in Frigiliana',
            de: 'Stadtführung in Frigiliana',
            es: 'Visita guiada por Frigiliana',
            nl: 'Stadswandeling met gids door Frigiliana',
            sv: 'Guidad stadsrundtur i Frigiliana'
          },
          subtitle: {
            en: 'Discover the village with a local guide.',
            de: 'Entdeckt das Dorf mit einem lokalen Guide.',
            es: 'Descubrid el pueblo con una guía local.',
            nl: 'Ontdek het dorp met een lokale gids.',
            sv: 'Upptäck byn med en lokal guide.'
          },
          body: [
            {
              en: 'Frigiliana Tours offers a guided city tour through Frigiliana — a lovely way to discover the stories behind the white streets, the old Moorish quarter, historic buildings and viewpoints. It is a relaxed and personal experience for guests who would like to understand the village beyond just walking through it.',
              de: 'Frigiliana Tours bietet eine geführte Stadtführung durch Frigiliana an — eine schöne Möglichkeit, die Geschichten hinter den weißen Gassen, dem alten maurischen Viertel, den historischen Gebäuden und den Aussichtspunkten kennenzulernen. Ideal für Gäste, die das Dorf nicht nur anschauen, sondern wirklich besser verstehen möchten.',
              es: 'Frigiliana Tours ofrece una visita guiada por Frigiliana — una forma muy bonita de descubrir las historias detrás de sus calles blancas, el antiguo barrio morisco, los edificios históricos y sus miradores. Es una experiencia cercana y relajada para quienes quieren conocer el pueblo más allá de un simple paseo.',
              nl: 'Frigiliana Tours biedt een begeleide stadswandeling door Frigiliana — een mooie manier om de verhalen achter de witte straatjes, de oude Moorse wijk, historische gebouwen en uitzichtpunten te ontdekken. Ideaal voor gasten die het dorp niet alleen willen bekijken, maar ook echt beter willen begrijpen.',
              sv: 'Frigiliana Tours erbjuder en guidad stadsrundtur genom Frigiliana — ett fint sätt att upptäcka berättelserna bakom de vita gränderna, det gamla moriska kvarteret, historiska byggnader och utsiktsplatser. Perfekt för gäster som vill förstå byn lite djupare än genom en vanlig promenad.'
            }
          ],
          actions: [
            {
              label: {
                en: 'More information',
                de: 'Mehr Informationen',
                es: 'Más información',
                nl: 'Meer informatie',
                sv: 'Mer information'
              },
              href: 'https://frigilianatours.com/',
              variant: 'secondary'
            },
            {
              label: {
                en: 'Book the tour',
                de: 'Stadtführung buchen',
                es: 'Reservar la visita',
                nl: 'Rondleiding boeken',
                sv: 'Boka rundturen'
              },
              href: 'https://frigilianatours.com/en/booking/'
            }
          ]
        },
        {
          kind: 'link',
          icon: 'route',
          targetSlug: 'frigiliana-guest-day-trips',
          title: { en: 'Day Trips', de: 'Tagesausflüge', es: 'Excursiones', nl: 'Dagtripjes', sv: 'Dagsutflykter' }
        },
        {
          kind: 'link',
          icon: 'flag',
          targetSlug: 'frigiliana-guest-festivals',
          title: { en: 'Festivals', de: 'Feste & Events', es: 'Fiestas locales', nl: 'Festivals', sv: 'Festivaler' }
        },
        {
          kind: 'link',
          icon: 'dance',
          targetSlug: 'frigiliana-guest-flamenco-bachata',
          title: { en: 'Flamenco & Bachata', de: 'Flamenco & Bachata', es: 'Flamenco y Bachata', nl: 'Flamenco & Bachata', sv: 'Flamenco & Bachata' }
        },
        {
          kind: 'link',
          icon: 'music',
          targetSlug: 'nerja-guest-nightlife',
          title: { en: 'Nightlife in Nerja', de: 'Nachtleben in Nerja', es: 'Vida nocturna en Nerja', nl: 'Nachtleven in Nerja', sv: 'Nattliv i Nerja' }
        },
        {
          kind: 'link',
          icon: 'heart',
          targetSlug: 'frigiliana-guest-wellness',
          title: { en: 'Wellness', de: 'Wellness', es: 'Bienestar', nl: 'Wellness', sv: 'Wellness' }
        }
      ]
    },
    {
      heading: { en: 'Adventure', de: 'Abenteuer', es: 'Aventura', nl: 'Avontuur', sv: 'Äventyr' },
      items: [
        {
          kind: 'link',
          icon: 'star',
          targetSlug: 'nerja-guest-adventure',
          title: { en: 'Adventure in Nerja', de: 'Abenteuer in Nerja', es: 'Aventura en Nerja', nl: 'Avontuur in Nerja', sv: 'Äventyr i Nerja' }
        }
      ]
    }
  ]
};

const frigilianaLounisHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-frigiliana-lounis',
  entityKey: 'amara-lounis',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide | AMARA',
    de: 'Frigiliana-Gästeguide | AMARA',
    es: 'Guía para huéspedes en Frigiliana | AMARA',
    nl: 'Gastengids voor Frigiliana | AMARA',
    sv: 'Gästguide för Frigiliana | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Frigiliana: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Euer ruhiger, praktischer Guide für Frigiliana: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Frigiliana: información de la casa, recomendaciones locales y lo esencial para llegar sin estrés.',
    nl: 'Een rustige, praktische gids voor jullie verblijf in Frigiliana: huisinfo, lokale tips en essentials voor een soepele aankomst.',
    sv: 'En lugn och praktisk guide för er vistelse i Frigiliana: boendeinfo, lokala tips och det viktigaste för en smidig ankomst.'
  },
  heroImage: '/images/amara-lounis/104-amara-frigiliana.jpg',
  heroAlt: {
    en: 'AMARA Lounis apartment in Frigiliana',
    de: 'AMARA Lounis Apartment in Frigiliana',
    es: 'Apartamento AMARA Lounis en Frigiliana',
    nl: 'AMARA Lounis appartement in Frigiliana',
    sv: 'AMARA Lounis-lägenhet i Frigiliana'
  },
  kicker: { en: 'AMARA LOUNIS', de: 'AMARA LOUNIS', es: 'AMARA LOUNIS', nl: 'AMARA LOUNIS', sv: 'AMARA LOUNIS' },
  title: {
    en: 'Frigiliana Guest Guide',
    de: 'Frigiliana-Gästeguide',
    es: 'Guía para huéspedes en Frigiliana',
    nl: 'Gastengids voor Frigiliana',
    sv: 'Gästguide för Frigiliana'
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
      targetSlug: 'guesthome-frigiliana-lounis',
      title: {
        en: 'Your Apartment Lounis',
        de: 'Euer Apartment Lounis',
        es: 'Vuestro apartamento Lounis',
        nl: 'Jullie appartement Lounis',
        sv: 'Er lägenhet Lounis'
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
      en: 'We hope you feel completely at ease in Frigiliana — its calm streets, soft light, and quiet corners are made for slowing down. As a small welcome gift, you\'ll find a bottle of chilled white wine in the fridge. If you need anything at all during your stay, we are always happy to help: just send us a message via your booking platform, or use the help button below.',
      de: 'Wir hoffen, dass ihr euch in Frigiliana rundum wohlfühlt – in den ruhigen Gassen, im weichen Licht und mit viel Raum, um die Seele baumeln zu lassen. Als kleines Willkommensgeschenk findet ihr eine Flasche gekühlten Weißwein im Kühlschrank. Solltet ihr während eures Aufenthalts irgendetwas brauchen, sind wir jederzeit gerne für euch da: Schreibt uns einfach über eure Buchungsplattform oder nutzt den Hilfe-Button unten.',
      es: 'Esperamos que os sintáis completamente a gusto en Frigiliana, con sus calles tranquilas, su luz suave y sus rincones perfectos para desconectar. Como pequeño detalle de bienvenida, encontraréis una botella de vino blanco frío en la nevera. Si necesitáis cualquier cosa durante vuestra estancia, estaremos siempre encantados de ayudaros: escribidnos a través de vuestra plataforma de reservas o usad el botón de ayuda de abajo.',
      nl: 'We hopen dat jullie je helemaal thuis voelen in Frigiliana — met de rustige straatjes, het zachte licht en alle ruimte om even tot rust te komen. Als klein welkomstgeschenk vinden jullie een fles gekoelde witte wijn in de koelkast. Hebben jullie tijdens jullie verblijf ergens hulp bij nodig? Stuur ons dan gerust een berichtje via jullie boekingsplatform, of gebruik de help-knop hieronder.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra i Frigiliana – bland lugna gränder, mjukt ljus och gott om utrymme att bara koppla av. Som en liten välkomstgåva hittar ni en flaska kylt vitt vin i kylskåpet. Om ni behöver hjälp med något under er vistelse finns vi alltid här för er: skicka ett meddelande via er bokningsplattform eller använd hjälp-knappen nedan.'
    },
    {
      en: 'Should Frigiliana find a place in your heart and you would like to stay a little longer — now or on a future trip — we would be delighted to welcome you again. You can check our current and future availability online at any time.',
      de: 'Sollte Frigiliana einen Platz in eurem Herzen finden und ihr euren Aufenthalt gerne verlängern möchtet – jetzt oder bei einer zukünftigen Reise –, würden wir uns sehr freuen, euch wieder bei uns zu begrüßen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Frigiliana llega a ocuparos un rincón del corazón y os apetece quedaros un poco más —ahora o en un futuro viaje—, estaremos encantados de volver a recibiros. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Frigiliana een plekje in jullie hart en willen jullie wat langer blijven — nu of bij een volgende reis — dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Frigiliana får en plats i ert hjärta och ni vill stanna lite längre – nu eller vid ett framtida besök – välkomnar vi er varmt tillbaka. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306383&city=Frigiliana&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  secondaryCtaHref: FRIGILIANA_GOOGLE_REVIEW_URL,
  secondaryCtaLabel: LEAVE_GOOGLE_REVIEW,
  signOff: AMARA_SIGN_OFF
};

const frigilianaLounisAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-frigiliana-lounis',
  entityKey: 'amara-lounis',
  backSlug: 'guestwelcome-frigiliana-lounis',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your Apartment Lounis | AMARA',
    de: 'Euer Apartment Lounis | AMARA',
    es: 'Vuestro apartamento Lounis | AMARA',
    nl: 'Jullie appartement Lounis | AMARA',
    sv: 'Lägenheten Lounis | AMARA'
  },
  seoDescription: {
    en: 'House details, arrival directions, and everything you need to know about staying at AMARA Lounis in Frigiliana.',
    de: 'Haus-Infos, Anreisebeschreibung und alles Wichtige für euren Aufenthalt in der AMARA Lounis in Frigiliana.',
    es: 'Detalles de la casa, indicaciones para llegar y todo lo que necesitáis saber sobre vuestra estancia en AMARA Lounis, Frigiliana.',
    nl: 'Huisinfo, aankomstroute en alles wat jullie moeten weten over jullie verblijf in AMARA Lounis in Frigiliana.',
    sv: 'Boendeinfo, ankomstväg och allt ni behöver veta om er vistelse i AMARA Lounis i Frigiliana.'
  },
  kicker: {
    en: 'FRIGILIANA GUEST GUIDE',
    de: 'FRIGILIANA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN FRIGILIANA',
    nl: 'FRIGILIANA GASTENGIDS',
    sv: 'FRIGILIANA GÄSTGUIDE'
  },
  title: {
    en: 'Your Apartment Lounis',
    de: 'Euer Apartment Lounis',
    es: 'Vuestro apartamento Lounis',
    nl: 'Jullie appartement Lounis',
    sv: 'Lägenheten Lounis'
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
      items: [sharedFrigilianaCenterArrivalItem, sharedFrigilianaCenterParkingItem, sharedAmaraWifiItem, sharedAmaraCoolingHeatingItem]
    },
    {
      heading: {
        en: 'Kitchen & Living',
        de: 'Küche & Wohnbereich',
        es: 'Cocina y salón',
        nl: 'Keuken & Woonkamer',
        sv: 'Kök & Vardagsrum'
      },
      items: [sharedAmaraCoffeeMachineItem, sharedAmaraInductionHobItem, sharedAmaraPelletStoveItem]
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
        sharedAmaraStarterSuppliesWithDishwasherTabletsItem,
        {
          icon: 'laundry',
          title: { en: 'Laundry', de: 'Wäsche', es: 'Lavandería', nl: 'Wasgoed', sv: 'Tvätt' },
          body: [
            {
              en: 'The <strong>washing machine</strong> is located in the kitchen, to the right of the dishwasher. <strong>Clothespins</strong> are stored in a glass inside the wardrobe.',
              de: 'Die <strong>Waschmaschine</strong> befindet sich in der Küche, rechts neben dem Geschirrspüler. <strong>Wäscheklammern</strong> stehen in einem Glas im Kleiderschrank für euch bereit.',
              es: 'La <strong>lavadora</strong> se encuentra en la cocina, a la derecha del lavavajillas. Las <strong>pinzas para la ropa</strong> están guardadas en un vaso dentro del armario.',
              nl: 'De <strong>wasmachine</strong> staat in de keuken, rechts van de vaatwasser. De <strong>wasknijpers</strong> zitten in een glas in de kledingkast.',
              sv: '<strong>Tvättmaskinen</strong> finns i köket, till höger om diskmaskinen. <strong>Klädnypor</strong> förvaras i ett glas inuti garderoben.'
            },
            {
              en: 'A retractable <strong>clothesline</strong> is on the terrace, to the left of the historic well, and can be stretched to the railing. The <strong>ironing board</strong> is stored under the bed.',
              de: 'Auf der Terrasse, links neben dem historischen Brunnen, findet ihr eine ausziehbare <strong>Wäscheleine</strong>, die sich bis zum Geländer spannen lässt. Das <strong>Bügelbrett</strong> liegt griffbereit unter dem Bett.',
              es: 'En la terraza, a la izquierda del antiguo pozo, hay un <strong>tendedero retráctil</strong> que se puede extender hasta la barandilla. La <strong>tabla de planchar</strong> está guardada debajo de la cama.',
              nl: 'Op het terras, links van de historische put, hangt een uittrekbare <strong>waslijn</strong> die tot aan de reling kan worden uitgetrokken. De <strong>strijkplank</strong> ligt opgeborgen onder het bed.',
              sv: 'En utdragbar <strong>tvättlina</strong> finns på terrassen, till vänster om den historiska brunnen, och kan sträckas ut till räcket. <strong>Strykbrädan</strong> förvaras under sängen.'
            }
          ]
        },
        sharedAmaraHousekeepingItem,
        sharedAmaraGarbageItem
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
      items: [sharedAmaraTapWaterItem, sharedAmaraNoSmokingItem, sharedAmaraVentilateItem, sharedAmaraQuietHoursItem]
    },
    {
      heading: { en: 'Check-out', de: 'Check-out', es: 'Check-out', nl: 'Check-out', sv: 'Check-out' },
      items: [sharedAmaraDepartureInfoItem, sharedAmaraLateCheckoutSeasonalItem]
    }
  ]
};

const frigilianaZaidHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-frigiliana-zaid',
  entityKey: 'amara-zaid',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide | AMARA',
    de: 'Frigiliana-Gästeguide | AMARA',
    es: 'Guía para huéspedes en Frigiliana | AMARA',
    nl: 'Gastengids voor Frigiliana | AMARA',
    sv: 'Gästguide för Frigiliana | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Frigiliana: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Euer ruhiger, praktischer Guide für Frigiliana: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Frigiliana: información de la casa, recomendaciones locales y lo esencial para llegar sin estrés.',
    nl: 'Een rustige, praktische gids voor jullie verblijf in Frigiliana: huisinfo, lokale tips en essentials voor een soepele aankomst.',
    sv: 'En lugn och praktisk guide för er vistelse i Frigiliana: boendeinfo, lokala tips och det viktigaste för en smidig ankomst.'
  },
  heroImage: '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
  heroAlt: {
    en: 'AMARA Zaid terrace apartment in Frigiliana',
    de: 'AMARA Zaid Terrassenapartment in Frigiliana',
    es: 'Apartamento con terraza AMARA Zaid en Frigiliana',
    nl: 'AMARA Zaid terrasappartement in Frigiliana',
    sv: 'AMARA Zaid terrasslägenhet i Frigiliana'
  },
  kicker: { en: 'AMARA ZAID', de: 'AMARA ZAID', es: 'AMARA ZAID', nl: 'AMARA ZAID', sv: 'AMARA ZAID' },
  title: {
    en: 'Frigiliana Guest Guide',
    de: 'Frigiliana-Gästeguide',
    es: 'Guía para huéspedes en Frigiliana',
    nl: 'Gastengids voor Frigiliana',
    sv: 'Gästguide för Frigiliana'
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
      targetSlug: 'guesthome-frigiliana-zaid',
      title: {
        en: 'Your Apartment Zaid',
        de: 'Euer Apartment Zaid',
        es: 'Vuestro apartamento Zaid',
        nl: 'Jullie appartement Zaid',
        sv: 'Er lägenhet Zaid'
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
      en: 'We hope you feel completely at ease in Frigiliana — its calm streets, soft light, and quiet corners are made for slowing down. As a small welcome gift, you\'ll find a bottle of chilled white wine in the fridge. If you need anything at all during your stay, we are always happy to help: just send us a message via your booking platform, or use the help button below.',
      de: 'Wir hoffen, dass ihr euch in Frigiliana rundum wohlfühlt – in den ruhigen Gassen, im weichen Licht und mit viel Raum, um die Seele baumeln zu lassen. Als kleines Willkommensgeschenk findet ihr eine Flasche gekühlten Weißwein im Kühlschrank. Solltet ihr während eures Aufenthalts irgendetwas brauchen, sind wir jederzeit gerne für euch da: Schreibt uns einfach über eure Buchungsplattform oder nutzt den Hilfe-Button unten.',
      es: 'Esperamos que os sintáis completamente a gusto en Frigiliana, con sus calles tranquilas, su luz suave y sus rincones perfectos para desconectar. Como pequeño detalle de bienvenida, encontraréis una botella de vino blanco frío en la nevera. Si necesitáis cualquier cosa durante vuestra estancia, estaremos siempre encantados de ayudaros: escribidnos a través de vuestra plataforma de reservas o usad el botón de ayuda de abajo.',
      nl: 'We hopen dat jullie je helemaal thuis voelen in Frigiliana — met de rustige straatjes, het zachte licht en alle ruimte om even tot rust te komen. Als klein welkomstgeschenk vinden jullie een fles gekoelde witte wijn in de koelkast. Hebben jullie tijdens jullie verblijf ergens hulp bij nodig? Stuur ons dan gerust een berichtje via jullie boekingsplatform, of gebruik de help-knop hieronder.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra i Frigiliana – bland lugna gränder, mjukt ljus och gott om utrymme att bara koppla av. Som en liten välkomstgåva hittar ni en flaska kylt vitt vin i kylskåpet. Om ni behöver hjälp med något under er vistelse finns vi alltid här för er: skicka ett meddelande via er bokningsplattform eller använd hjälp-knappen nedan.'
    },
    {
      en: 'Should Frigiliana find a place in your heart and you would like to stay a little longer — now or on a future trip — we would be delighted to welcome you again. You can check our current and future availability online at any time.',
      de: 'Sollte Frigiliana einen Platz in eurem Herzen finden und ihr euren Aufenthalt gerne verlängern möchtet – jetzt oder bei einer zukünftigen Reise –, würden wir uns sehr freuen, euch wieder bei uns zu begrüßen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Frigiliana llega a ocuparos un rincón del corazón y os apetece quedaros un poco más —ahora o en un futuro viaje—, estaremos encantados de volver a recibiros. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Frigiliana een plekje in jullie hart en willen jullie wat langer blijven — nu of bij een volgende reis — dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Frigiliana får en plats i ert hjärta och ni vill stanna lite längre – nu eller vid ett framtida besök – välkomnar vi er varmt tillbaka. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306383&city=Frigiliana&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  secondaryCtaHref: FRIGILIANA_GOOGLE_REVIEW_URL,
  secondaryCtaLabel: LEAVE_GOOGLE_REVIEW,
  signOff: AMARA_SIGN_OFF
};

const frigilianaZaidAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-frigiliana-zaid',
  entityKey: 'amara-zaid',
  backSlug: 'guestwelcome-frigiliana-zaid',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your Apartment Zaid | AMARA',
    de: 'Euer Apartment Zaid | AMARA',
    es: 'Vuestro apartamento Zaid | AMARA',
    nl: 'Jullie appartement Zaid | AMARA',
    sv: 'Lägenheten Zaid | AMARA'
  },
  seoDescription: {
    en: 'House details, arrival directions, and everything you need to know about staying at AMARA Zaid in Frigiliana.',
    de: 'Haus-Infos, Anreisebeschreibung und alles Wichtige für euren Aufenthalt in der AMARA Zaid in Frigiliana.',
    es: 'Detalles de la casa, indicaciones para llegar y todo lo que necesitáis saber sobre vuestra estancia en AMARA Zaid, Frigiliana.',
    nl: 'Huisinfo, aankomstroute en alles wat jullie moeten weten over jullie verblijf in AMARA Zaid in Frigiliana.',
    sv: 'Boendeinfo, ankomstväg och allt ni behöver veta om er vistelse i AMARA Zaid i Frigiliana.'
  },
  kicker: { en: 'AMARA ZAID', de: 'AMARA ZAID', es: 'AMARA ZAID', nl: 'AMARA ZAID', sv: 'AMARA ZAID' },
  title: {
    en: 'Your Apartment Zaid',
    de: 'Euer Apartment Zaid',
    es: 'Vuestro apartamento Zaid',
    nl: 'Jullie appartement Zaid',
    sv: 'Lägenheten Zaid'
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
      items: [sharedFrigilianaCenterArrivalItem, sharedFrigilianaCenterParkingItem, sharedAmaraWifiItem, sharedAmaraCoolingHeatingItem]
    },
    {
      heading: {
        en: 'Kitchen & Living',
        de: 'Küche & Wohnbereich',
        es: 'Cocina y salón',
        nl: 'Keuken & Woonkamer',
        sv: 'Kök & Vardagsrum'
      },
      items: [sharedAmaraCoffeeMachineItem, sharedAmaraInductionHobItem, sharedAmaraPelletStoveItem]
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
        sharedAmaraStarterSuppliesItem,
        {
          icon: 'laundry',
          title: { en: 'Laundry', de: 'Wäsche', es: 'Lavandería', nl: 'Wasgoed', sv: 'Tvätt' },
          body: [
            {
              en: 'The <strong>washing machine</strong> is located on the terrace. Out of respect for our neighbors, please only run it between <strong>12:00 PM and 5:00 PM</strong>.',
              de: 'Die <strong>Waschmaschine</strong> befindet sich auf der Terrasse. Aus Rücksicht auf unsere Nachbarn bitten wir euch, sie nur zwischen <strong>12:00 und 17:00 Uhr</strong> zu benutzen.',
              es: 'La <strong>lavadora</strong> se encuentra en la terraza. Por respeto a nuestros vecinos, os pedimos que la utilicéis únicamente entre las <strong>12:00 y las 17:00</strong>.',
              nl: 'De <strong>wasmachine</strong> staat op het terras. Uit respect voor onze buren vragen we jullie deze alleen te gebruiken tussen <strong>12.00 en 17.00 uur</strong>.',
              sv: '<strong>Tvättmaskinen</strong> finns på terrassen. Av hänsyn till våra grannar ber vi er att endast använda den mellan kl. <strong>12:00 och 17:00</strong>.'
            },
            {
              en: 'Two <strong>clotheslines</strong> are available on the terrace — simply clip the line onto the hooks using the carabiner clasps at each end. The <strong>ironing board</strong> is stored under the bed.',
              de: 'Auf der Terrasse stehen euch zwei <strong>Wäscheleinen</strong> zur Verfügung – hängt die Leine einfach mit den Karabinerhaken an den Enden in die vorgesehenen Ösen ein. Das <strong>Bügelbrett</strong> liegt griffbereit unter dem Bett.',
              es: 'En la terraza hay dos <strong>tendederos</strong> disponibles: basta con enganchar la cuerda a los ganchos mediante los mosquetones de cada extremo. La <strong>tabla de planchar</strong> está guardada debajo de la cama.',
              nl: 'Op het terras zijn twee <strong>waslijnen</strong> beschikbaar — haak de lijn simpelweg met de karabijnhaken aan beide uiteinden aan de haakjes vast. De <strong>strijkplank</strong> ligt opgeborgen onder het bed.',
              sv: 'På terrassen finns två <strong>tvättlinor</strong> tillgängliga — haka helt enkelt fast linan i krokarna med karbinhakarna i respektive ände. <strong>Strykbrädan</strong> förvaras under sängen.'
            }
          ]
        },
        sharedAmaraHousekeepingItem,
        sharedAmaraGarbageItem
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
      items: [sharedAmaraTapWaterItem, sharedAmaraNoSmokingItem, sharedAmaraVentilateItem, sharedAmaraQuietHoursItem]
    },
    {
      heading: { en: 'Check-out', de: 'Check-out', es: 'Check-out', nl: 'Check-out', sv: 'Check-out' },
      items: [sharedAmaraDepartureInfoItem, sharedAmaraLateCheckoutSeasonalItem]
    }
  ]
};

const frigilianaMahaHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-frigiliana-maha',
  entityKey: 'amara-maha',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Frigiliana Guest Guide | AMARA',
    de: 'Frigiliana-Gästeguide | AMARA',
    es: 'Guía para huéspedes en Frigiliana | AMARA',
    nl: 'Gastengids voor Frigiliana | AMARA',
    sv: 'Gästguide för Frigiliana | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Frigiliana: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Euer ruhiger, praktischer Guide für Frigiliana: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Frigiliana: información de la casa, recomendaciones locales y lo esencial para llegar sin estrés.',
    nl: 'Een rustige, praktische gids voor jullie verblijf in Frigiliana: huisinfo, lokale tips en essentials voor een soepele aankomst.',
    sv: 'En lugn och praktisk guide för er vistelse i Frigiliana: boendeinfo, lokala tips och det viktigaste för en smidig ankomst.'
  },
  heroImage: '/images/amara-maha/29-amara-frigiliana.jpg',
  heroAlt: {
    en: 'AMARA Maha apartment in Frigiliana',
    de: 'AMARA Maha Apartment in Frigiliana',
    es: 'Apartamento AMARA Maha en Frigiliana',
    nl: 'AMARA Maha appartement in Frigiliana',
    sv: 'AMARA Maha lägenhet i Frigiliana'
  },
  kicker: { en: 'AMARA MAHA', de: 'AMARA MAHA', es: 'AMARA MAHA', nl: 'AMARA MAHA', sv: 'AMARA MAHA' },
  title: {
    en: 'Frigiliana Guest Guide',
    de: 'Frigiliana-Gästeguide',
    es: 'Guía para huéspedes en Frigiliana',
    nl: 'Gastengids voor Frigiliana',
    sv: 'Gästguide för Frigiliana'
  },
  intro: {
    en: 'A thoughtful guide to help you settle in, find your way, and enjoy Frigiliana with ease.',
    de: 'Ein aufmerksamer Guide, der euch hilft anzukommen, euch schnell zurechtzufinden und Frigiliana mit Leichtigkeit zu genießen.',
    es: 'Una guía pensada con cariño para ayudaros a instalaros, orientaros con facilidad y disfrutar de Frigiliana con calma.',
    nl: 'Een zorgvuldige gids om jullie te helpen rustig aan te komen, gemakkelijk de weg te vinden en Frigiliana ontspannen te beleven.',
    sv: 'En omtänksam guide som hjälper er att landa, hitta rätt och uppleva Frigiliana med lätthet.'
  },
  menuLinks: [
    {
      icon: 'accommodation',
      targetSlug: 'guesthome-frigiliana-maha',
      title: {
        en: 'Your Apartment Maha',
        de: 'Euer Apartment Maha',
        es: 'Vuestro apartamento Maha',
        nl: 'Jullie appartement Maha',
        sv: 'Er lägenhet Maha'
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
      en: 'We hope you feel completely at ease in Frigiliana — its calm streets, soft light, and quiet corners are made for slowing down. As a small welcome gift, you\'ll find a bottle of chilled white wine in the fridge. If you need anything at all during your stay, we are always happy to help: just send us a message via your booking platform, or use the help button below.',
      de: 'Wir hoffen, dass ihr euch in Frigiliana rundum wohlfühlt – in den ruhigen Gassen, im weichen Licht und mit viel Raum, um die Seele baumeln zu lassen. Als kleines Willkommensgeschenk findet ihr eine Flasche gekühlten Weißwein im Kühlschrank. Solltet ihr während eures Aufenthalts irgendetwas brauchen, sind wir jederzeit gerne für euch da: Schreibt uns einfach über eure Buchungsplattform oder nutzt den Hilfe-Button unten.',
      es: 'Esperamos que os sintáis completamente a gusto en Frigiliana, con sus calles tranquilas, su luz suave y sus rincones perfectos para desconectar. Como pequeño detalle de bienvenida, encontraréis una botella de vino blanco frío en la nevera. Si necesitáis cualquier cosa durante vuestra estancia, estaremos siempre encantados de ayudaros: escribidnos a través de vuestra plataforma de reservas o usad el botón de ayuda de abajo.',
      nl: 'We hopen dat jullie je helemaal thuis voelen in Frigiliana — met de rustige straatjes, het zachte licht en alle ruimte om even tot rust te komen. Als klein welkomstgeschenk vinden jullie een fles gekoelde witte wijn in de koelkast. Hebben jullie tijdens jullie verblijf ergens hulp bij nodig? Stuur ons dan gerust een berichtje via jullie boekingsplatform, of gebruik de help-knop hieronder.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra i Frigiliana – bland lugna gränder, mjukt ljus och gott om utrymme att bara koppla av. Som en liten välkomstgåva hittar ni en flaska kylt vitt vin i kylskåpet. Om ni behöver hjälp med något under er vistelse finns vi alltid här för er: skicka ett meddelande via er bokningsplattform eller använd hjälp-knappen nedan.'
    },
    {
      en: 'Should Frigiliana find a place in your heart and you would like to stay a little longer — now or on a future trip — we would be delighted to welcome you again. You can check our current and future availability online at any time.',
      de: 'Sollte Frigiliana einen Platz in eurem Herzen finden und ihr euren Aufenthalt gerne verlängern möchtet – jetzt oder bei einer zukünftigen Reise –, würden wir uns sehr freuen, euch wieder bei uns zu begrüßen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Frigiliana llega a ocuparos un rincón del corazón y os apetece quedaros un poco más —ahora o en un futuro viaje—, estaremos encantados de volver a recibiros. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Frigiliana een plekje in jullie hart en willen jullie wat langer blijven — nu of bij een volgende reis — dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Frigiliana får en plats i ert hjärta och ni vill stanna lite längre – nu eller vid ett framtida besök – välkomnar vi er varmt tillbaka. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306383&city=Frigiliana&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  secondaryCtaHref: FRIGILIANA_GOOGLE_REVIEW_URL,
  secondaryCtaLabel: LEAVE_GOOGLE_REVIEW,
  signOff: AMARA_SIGN_OFF
};

const frigilianaMahaAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-frigiliana-maha',
  entityKey: 'amara-maha',
  backSlug: 'guestwelcome-frigiliana-maha',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your Apartment Maha | AMARA',
    de: 'Euer Apartment Maha | AMARA',
    es: 'Vuestro apartamento Maha | AMARA',
    nl: 'Jullie appartement Maha | AMARA',
    sv: 'Lägenheten Maha | AMARA'
  },
  seoDescription: {
    en: 'House details, arrival directions, and everything you need to know about staying at AMARA Maha in Frigiliana.',
    de: 'Haus-Infos, Anreisebeschreibung und alles Wichtige für euren Aufenthalt in der AMARA Maha in Frigiliana.',
    es: 'Detalles de la casa, indicaciones para llegar y todo lo que necesitáis saber sobre vuestra estancia en AMARA Maha, Frigiliana.',
    nl: 'Huisinfo, aankomstroute en alles wat jullie moeten weten over jullie verblijf in AMARA Maha in Frigiliana.',
    sv: 'Boendeinfo, ankomstväg och allt ni behöver veta om er vistelse i AMARA Maha i Frigiliana.'
  },
  kicker: { en: 'AMARA MAHA', de: 'AMARA MAHA', es: 'AMARA MAHA', nl: 'AMARA MAHA', sv: 'AMARA MAHA' },
  title: {
    en: 'Your Apartment Maha',
    de: 'Euer Apartment Maha',
    es: 'Vuestro apartamento Maha',
    nl: 'Jullie appartement Maha',
    sv: 'Lägenheten Maha'
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
      items: [sharedFrigilianaCenterArrivalItem, sharedFrigilianaCenterParkingItem, sharedAmaraWifiItem, sharedAmaraCoolingHeatingItem]
    },
    {
      heading: {
        en: 'Kitchen & Living',
        de: 'Küche & Wohnbereich',
        es: 'Cocina y salón',
        nl: 'Keuken & Woonkamer',
        sv: 'Kök & Vardagsrum'
      },
      items: [sharedAmaraCoffeeMachineItem, sharedAmaraInductionHobItem, sharedAmaraOutdoorGasStoveItem, sharedAmaraPelletStoveItem]
    },
    {
      heading: {
        en: 'During Your Stay',
        de: 'Während eures Aufenthalts',
        es: 'Durante vuestra estancia',
        nl: 'Tijdens jullie verblijf',
        sv: 'Under er vistelse'
      },
      items: [sharedAmaraStarterSuppliesItem, sharedAmaraHousekeepingItem, sharedAmaraGarbageItem]
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
        sharedAmaraTapWaterItem,
        sharedAmaraNoSmokingItem,
        {
          icon: 'watering-can',
          title: {
            en: 'A Small Favour',
            de: 'Eine kleine Bitte',
            es: 'Un pequeño favor',
            nl: 'Een klein verzoek',
            sv: 'En liten tjänst'
          },
          body: [
            {
              en: 'If you happen to have a moment during your stay, we would be very grateful if you could give the plants on the terrace a little water. A white watering can is provided for you. Thank you so much for helping us care for them.',
              de: 'Falls ihr während eures Aufenthalts einen Moment habt, würden wir uns sehr freuen, wenn ihr den Pflanzen auf der Terrasse etwas Wasser geben könntet. Eine weiße Gießkanne steht dafür bereit. Herzlichen Dank, dass ihr uns bei der Pflege unterstützt.',
              es: 'Si tenéis un momento durante vuestra estancia, os agradeceríamos mucho que pudierais regar un poco las plantas de la terraza. Hemos dejado una regadera blanca para ello. Muchas gracias por ayudarnos a cuidarlas.',
              nl: 'Als jullie tijdens het verblijf een momentje hebben, zouden we het erg waarderen als jullie de planten op het terras wat water zouden kunnen geven. Hiervoor staat een witte gieter klaar. Hartelijk dank dat jullie ons helpen om ze te verzorgen.',
              sv: 'Om ni har en liten stund under er vistelse skulle vi vara mycket tacksamma om ni kunde ge växterna på terrassen lite vatten. Det finns en vit vattenkanna som ni kan använda. Tack så mycket för att ni hjälper oss att ta hand om dem.'
            }
          ]
        },
        sharedAmaraVentilateItem,
        sharedAmaraQuietHoursItem
      ]
    },
    {
      heading: { en: 'Check-out', de: 'Check-out', es: 'Check-out', nl: 'Check-out', sv: 'Check-out' },
      items: [sharedAmaraDepartureInfoItem, sharedAmaraLateCheckoutSeasonalItem]
    }
  ]
};

const nerjaPlayaHub: GuestGuideEntry = {
  type: 'hub',
  slug: 'guestwelcome-nerja-playa',
  entityKey: 'amara-playa',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Nerja Guest Guide | AMARA',
    de: 'Nerja-Gästeguide | AMARA',
    es: 'Guía para huéspedes en Nerja | AMARA',
    nl: 'Gastengids voor Nerja | AMARA',
    sv: 'Gästguide för Nerja | AMARA'
  },
  seoDescription: {
    en: 'Your calm, practical guide for an effortless stay in Nerja: house info, local recommendations, and essentials for a smooth arrival.',
    de: 'Euer ruhiger, praktischer Guide für Nerja: Haus-Infos, lokale Empfehlungen und alles Wichtige für eine entspannte Anreise.',
    es: 'Una guía práctica y tranquila para vuestra estancia en Nerja: información del alojamiento, recomendaciones locales y esenciales para llegar sin estrés.',
    nl: 'Jullie rustige, praktische gids voor een ontspannen verblijf in Nerja: accommodatie-info, lokale tips en essentials voor een soepele aankomst.',
    sv: 'Er lugna, praktiska guide för en smidig vistelse i Nerja: boendeinfo, lokala tips och det viktigaste för en enkel ankomst.'
  },
  heroImage: '/images/amara-playa/apartment/chaparril-13.webp',
  heroAlt: {
    en: 'AMARA Playa apartment in Nerja',
    de: 'AMARA Playa Apartment in Nerja',
    es: 'Apartamento AMARA Playa en Nerja',
    nl: 'AMARA Playa appartement in Nerja',
    sv: 'AMARA Playa-lägenhet i Nerja'
  },
  kicker: { en: 'AMARA PLAYA', de: 'AMARA PLAYA', es: 'AMARA PLAYA', nl: 'AMARA PLAYA', sv: 'AMARA PLAYA' },
  title: {
    en: 'Nerja Guest Guide',
    de: 'Nerja-Gästeguide',
    es: 'Guía para huéspedes en Nerja',
    nl: 'Gastengids voor Nerja',
    sv: 'Gästguide för Nerja'
  },
  intro: {
    en: 'A thoughtful guide to help you settle in, find your way, and enjoy Nerja with ease.',
    de: 'Ein aufmerksamer Guide, der euch hilft anzukommen, euch schnell zurechtzufinden und Nerja mit Leichtigkeit zu genießen.',
    es: 'Una guía pensada con cariño para ayudaros a instalaros, orientaros con facilidad y disfrutar de Nerja con calma.',
    nl: 'Een zorgvuldige gids om jullie te helpen rustig aan te komen, gemakkelijk de weg te vinden en Nerja ontspannen te beleven.',
    sv: 'En omtänksam guide som hjälper er att landa, hitta rätt och uppleva Nerja med lätthet.'
  },
  menuLinks: [
    {
      icon: 'accommodation',
      targetSlug: 'guesthome-nerja-playa',
      title: {
        en: 'Your Accommodation AMARA Playa',
        de: 'Eure Unterkunft AMARA Playa',
        es: 'Vuestro alojamiento AMARA Playa',
        nl: 'Jullie accommodatie AMARA Playa',
        sv: 'Ert boende AMARA Playa'
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
      targetSlug: 'nerja-guest-essentials',
      title: {
        en: 'Nerja Essentials',
        de: 'Nerja kompakt',
        es: 'Lo esencial de Nerja',
        nl: 'Nerja essentials',
        sv: 'Det viktigaste i Nerja'
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
        en: 'Restaurants · Beaches · Walks',
        de: 'Restaurants · Strände · Spaziergänge',
        es: 'Restaurantes · Playas · Paseos',
        nl: 'Restaurants · Stranden · Wandelingen',
        sv: 'Restauranger · Stränder · Promenader'
      }
    }
  ],
  closingParagraphs: [
    {
      en: 'We hope you feel at ease in Nerja — with soft light, sea air, and space to slow down. Thank you for choosing AMARA: as a small welcome gift, we have placed a bottle of chilled white wine in the refrigerator for you. If you need anything during your stay, we are always happy to help. You can simply send us a message via your booking platform or use the help button.',
      de: 'Wir hoffen, dass ihr euch in Nerja rundum wohlfühlt – bei weichem Licht, Meeresluft und mit viel Raum, um die Seele baumeln zu lassen. Danke, dass ihr euch für AMARA entschieden habt: Als kleine Begrüßung haben wir eine Flasche gekühlten Weißwein für euch in den Kühlschrank gestellt. Solltet ihr während eures Aufenthalts etwas brauchen, sind wir jederzeit gerne für euch da. Schreibt uns einfach über eure Buchungsplattform oder nutzt den Hilfe-Button.',
      es: 'Esperamos que os sintáis a gusto en Nerja, disfrutando de su luz suave, del aire del mar y del espacio para desconectar. Gracias por elegir AMARA: como pequeño regalo de bienvenida, os hemos dejado una botella de vino blanco frío en la nevera. Si necesitáis cualquier cosa durante vuestra estancia, siempre estaremos encantados de ayudaros. Simplemente enviadnos un mensaje a través de vuestra plataforma de reservas o usad el botón de ayuda.',
      nl: 'We hopen dat jullie je helemaal thuis voelen in Nerja — met zacht licht, zeelucht en de ruimte om even helemaal tot rust te komen. Bedankt dat jullie voor AMARA hebben gekozen: als klein welkomstgeschenk hebben we een fles gekoelde witte wijn voor jullie in de koelkast gezet. Als jullie tijdens jullie verblijf iets nodig hebben, helpen we jullie graag. Stuur ons gerust een berichtje via jullie boekingsplatform of gebruik de help-knop.',
      sv: 'Vi hoppas att ni ska trivas riktigt bra i Nerja – med mjukt ljus, havsluft och utrymme att bara koppla av. Tack för att ni valde AMARA: som en liten välkomstgåva har vi ställt en flaska kylt vitt vin till er i kylskåpet. Om ni behöver något under er vistelse hjälper vi er alltid gärna. Skicka bara ett meddelande via er bokningsplattform eller använd hjälp-knappen.'
    },
    {
      en: 'Should Nerja find a place in your heart, we would be delighted to welcome you again. Our current and future availability can always be checked online.',
      de: 'Sollte Nerja einen Platz in eurem Herzen finden, würden wir uns sehr freuen, euch wieder bei uns begrüßen zu dürfen. Unsere aktuelle und zukünftige Verfügbarkeit könnt ihr jederzeit online einsehen.',
      es: 'Si Nerja llega a ocupar un lugar en vuestro corazón, estaremos encantados de volver a daros la bienvenida. Podéis consultar en cualquier momento nuestra disponibilidad actual y futura online.',
      nl: 'Krijgt Nerja een plekje in jullie hart, dan verwelkomen we jullie graag opnieuw. Onze huidige en toekomstige beschikbaarheid kunnen jullie altijd online bekijken.',
      sv: 'Om Nerja får en plats i ert hjärta, välkomnar vi er gärna tillbaka igen. Vår nuvarande och framtida tillgänglighet kan ni alltid se online.'
    }
  ],
  ctaHref: bookingCta('adults=1&sort=price&selectedlocationid=0,67,0,1143,0,6306298&city=Nerja&children=0&infants=0&pets=0'),
  ctaLabel: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Comprobar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  },
  secondaryCtaHref: FRIGILIANA_GOOGLE_REVIEW_URL,
  secondaryCtaLabel: LEAVE_GOOGLE_REVIEW,
  signOff: AMARA_SIGN_OFF
};

const nerjaPlayaAccommodation: GuestGuideEntry = {
  type: 'detail',
  slug: 'guesthome-nerja-playa',
  entityKey: 'amara-playa',
  backSlug: 'guestwelcome-nerja-playa',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Your Accommodation AMARA Playa | AMARA',
    de: 'Eure Unterkunft AMARA Playa | AMARA',
    es: 'Vuestro alojamiento AMARA Playa | AMARA',
    nl: 'Jullie accommodatie AMARA Playa | AMARA',
    sv: 'Ert boende AMARA Playa | AMARA'
  },
  seoDescription: {
    en: 'Accommodation details, arrival directions, and everything you need to know about staying at AMARA Playa in Nerja.',
    de: 'Details zur Unterkunft, Anreisebeschreibung und alles Wichtige für euren Aufenthalt in der AMARA Playa in Nerja.',
    es: 'Detalles del alojamiento, indicaciones para llegar y todo lo que necesitáis saber sobre vuestra estancia en AMARA Playa, Nerja.',
    nl: 'Accommodatie-info, aankomstroute en alles wat jullie moeten weten over jullie verblijf in AMARA Playa in Nerja.',
    sv: 'Boendeinfo, ankomstväg och allt ni behöver veta om er vistelse i AMARA Playa i Nerja.'
  },
  kicker: { en: 'NERJA GUEST GUIDE', de: 'NERJA GÄSTEGUIDE', es: 'GUÍA PARA HUÉSPEDES EN NERJA', nl: 'NERJA GUEST GUIDE', sv: 'NERJA GÄSTGUIDE' },
  title: {
    en: 'Your Accommodation AMARA Playa in Nerja',
    de: 'Eure Unterkunft AMARA Playa in Nerja',
    es: 'Vuestro alojamiento AMARA Playa en Nerja',
    nl: 'Jullie accommodatie AMARA Playa in Nerja',
    sv: 'Ert boende AMARA Playa i Nerja'
  },
  intro: {
    en: 'Accommodation details and essentials.',
    de: 'Details und das Wichtigste zu eurer Unterkunft.',
    es: 'Detalles y lo esencial de vuestro alojamiento.',
    nl: 'Details en de belangrijkste informatie over jullie accommodatie.',
    sv: 'Detaljer och det viktigaste om ert boende.'
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
          title: {
            en: 'Address & Directions',
            de: 'Adresse & Anfahrt',
            es: 'Dirección & Cómo llegar',
            nl: 'Adres & Route',
            sv: 'Adress & Vägbeskrivning'
          },
          body: [
            {
              en: '<strong>By car:</strong> AMARA Playa is located at <a class="am-link" href="https://maps.app.goo.gl/E886L2Huw3fXBQTt9" target="_blank" rel="noopener">Calle Castilla Pérez, 60, Nerja</a>. You can drive up to the entrance and stop there briefly when you arrive.',
              de: '<strong>Anreise mit dem Auto:</strong> AMARA Playa befindet sich in der <a class="am-link" href="https://maps.app.goo.gl/E886L2Huw3fXBQTt9" target="_blank" rel="noopener">Calle Castilla Pérez, 60, Nerja</a>. Ihr könnt direkt bis zum Eingang fahren und dort bei eurer Ankunft kurz halten.',
              es: '<strong>Llegada en coche:</strong> AMARA Playa se encuentra en <a class="am-link" href="https://maps.app.goo.gl/E886L2Huw3fXBQTt9" target="_blank" rel="noopener">Calle Castilla Pérez, 60, Nerja</a>. Podéis conducir hasta la entrada y parar allí brevemente al llegar.',
              nl: '<strong>Aankomst met de auto:</strong> AMARA Playa bevindt zich aan de <a class="am-link" href="https://maps.app.goo.gl/E886L2Huw3fXBQTt9" target="_blank" rel="noopener">Calle Castilla Pérez, 60, Nerja</a>. Jullie kunnen tot aan de ingang rijden en daar bij aankomst even stoppen.',
              sv: '<strong>Ankomst med bil:</strong> AMARA Playa ligger på <a class="am-link" href="https://maps.app.goo.gl/E886L2Huw3fXBQTt9" target="_blank" rel="noopener">Calle Castilla Pérez, 60, Nerja</a>. Ni kan köra fram till entrén och stanna där kort vid ankomst.'
            },
            {
              en: 'We recommend unloading your luggage first and then using one of the public parking options around the apartment. As the apartment is very close to the beach and set in one of the most popular parts of Nerja, parking may take a little patience, especially during high season.',
              de: 'Wir empfehlen euch, zuerst euer Gepäck auszuladen und anschließend einen der öffentlichen Parkplätze in der Nähe des Apartments zu nutzen. Da das Apartment sehr nah am Strand und in einem der beliebtesten Teile von Nerja liegt, braucht ihr beim Parken vor allem in der Hochsaison etwas Geduld.',
              es: 'Os recomendamos descargar primero el equipaje y luego utilizar una de las opciones de aparcamiento público cerca del apartamento. Como el apartamento está muy cerca de la playa y en una de las zonas más concurridas de Nerja, aparcar puede requerir algo de paciencia, sobre todo en temporada alta.',
              nl: 'We raden aan om eerst jullie bagage uit te laden en daarna gebruik te maken van een van de openbare parkeermogelijkheden rond het appartement. Omdat het appartement heel dicht bij het strand ligt en in een van de populairste delen van Nerja, kan parkeren wat geduld vergen, vooral in het hoogseizoen.',
              sv: 'Vi rekommenderar att ni först lastar ur bagaget och sedan använder någon av de allmänna parkeringsmöjligheterna runt lägenheten. Eftersom lägenheten ligger mycket nära stranden och i en av de mest populära delarna av Nerja kan parkering kräva lite tålamod, särskilt under högsäsong.'
            },
            {
              en: '<strong>By bus:</strong> Most buses from Málaga arrive at the <a class="am-link" href="https://maps.app.goo.gl/TVrcmzESK8RiyRYX8" target="_blank" rel="noopener">Nerja bus station</a>. From there, you can either take a taxi or walk to the apartment — the walk is around 1 km and takes approximately 15 minutes.',
              de: '<strong>Anreise mit dem Bus:</strong> Die meisten Busse aus Málaga kommen am <a class="am-link" href="https://maps.app.goo.gl/TVrcmzESK8RiyRYX8" target="_blank" rel="noopener">Busbahnhof von Nerja</a> an. Von dort könnt ihr entweder ein Taxi nehmen oder zu Fuß zum Apartment gehen – der Weg ist etwa 1 km lang und dauert ungefähr 15 Minuten.',
              es: '<strong>Llegada en autobús:</strong> La mayoría de los autobuses desde Málaga llegan a la <a class="am-link" href="https://maps.app.goo.gl/TVrcmzESK8RiyRYX8" target="_blank" rel="noopener">estación de autobuses de Nerja</a>. Desde allí podéis coger un taxi o ir andando al apartamento; el paseo es de aproximadamente 1 km y dura unos 15 minutos.',
              nl: '<strong>Aankomst met de bus:</strong> De meeste bussen vanuit Málaga komen aan bij het <a class="am-link" href="https://maps.app.goo.gl/TVrcmzESK8RiyRYX8" target="_blank" rel="noopener">busstation van Nerja</a>. Vanaf daar kunnen jullie een taxi nemen of naar het appartement lopen — de wandeling is ongeveer 1 km en duurt ongeveer 15 minuten.',
              sv: '<strong>Ankomst med buss:</strong> De flesta bussar från Málaga anländer till <a class="am-link" href="https://maps.app.goo.gl/TVrcmzESK8RiyRYX8" target="_blank" rel="noopener">Nerjas busstation</a>. Därifrån kan ni antingen ta en taxi eller promenera till lägenheten — promenaden är cirka 1 km och tar ungefär 15 minuter.'
            }
          ]
        },
        {
          icon: 'car',
          title: { en: 'Parking', de: 'Parken', es: 'Aparcamiento', nl: 'Parkeren', sv: 'Parkering' },
          body: [
            {
              en: 'Parking near the apartment is usually possible, but in this area it can sometimes be a little more difficult than expected, especially in high season because of the beach proximity.',
              de: 'In der Nähe des Apartments zu parken ist meist möglich, kann in dieser Gegend aber manchmal etwas schwieriger sein als erwartet – besonders in der Hochsaison aufgrund der Nähe zum Strand.',
              es: 'Aparcar cerca del apartamento suele ser posible, pero en esta zona a veces puede ser un poco más difícil de lo esperado, especialmente en temporada alta por la cercanía a la playa.',
              nl: 'Parkeren in de buurt van het appartement is meestal mogelijk, maar kan in deze omgeving soms wat lastiger zijn dan verwacht, vooral in het hoogseizoen vanwege de nabijheid van het strand.',
              sv: 'Parkering nära lägenheten är oftast möjlig, men i det här området kan det ibland vara lite svårare än väntat, särskilt under högsäsong på grund av närheten till stranden.'
            },
            {
              en: 'If you find a suitable parking space within around 200 metres before reaching the apartment, we recommend taking it and walking the short remaining distance rather than trying to stop directly in front of the building.',
              de: 'Wenn ihr innerhalb von etwa 200 Metern vor dem Apartment einen passenden Parkplatz findet, empfehlen wir euch, diesen zu nehmen und die kurze restliche Strecke zu Fuß zu gehen, statt direkt vor dem Gebäude halten zu wollen.',
              es: 'Si encontráis un sitio adecuado para aparcar a unos 200 metros antes de llegar al apartamento, os recomendamos aparcar ahí y caminar el corto trayecto restante, en lugar de intentar parar justo delante del edificio.',
              nl: 'Als jullie binnen ongeveer 200 meter voor het appartement een geschikte parkeerplek vinden, raden we aan deze te nemen en het korte stukje resterende afstand te lopen, in plaats van te proberen direct voor het gebouw te stoppen.',
              sv: 'Om ni hittar en lämplig parkeringsplats inom cirka 200 meter innan ni når lägenheten rekommenderar vi att ni tar den och promenerar den korta återstående sträckan, i stället för att försöka stanna direkt framför byggnaden.'
            },
            {
              en: 'If you do not find a space straight away, continue past the apartment area, follow the street around, and check the nearby streets around the block. A little patience is often part of parking in Nerja, and we have usually had good luck finding something nearby.',
              de: 'Falls ihr nicht sofort einen Platz findet, fahrt einfach am Apartment vorbei, folgt der Straße weiter und schaut in den umliegenden Straßen rund um den Block. Etwas Geduld gehört beim Parken in Nerja oft dazu, und meist hat es sich bisher gut gefügt, in der Nähe etwas zu finden.',
              es: 'Si no encontráis sitio enseguida, continuad más allá de la zona del apartamento, seguid la calle y comprobad las calles cercanas alrededor de la manzana. Un poco de paciencia suele formar parte de aparcar en Nerja, y normalmente hemos tenido suerte encontrando algo cerca.',
              nl: 'Als jullie niet meteen een plek vinden, rijd dan door voorbij het appartement, volg de straat verder en kijk in de omliggende straten rond het blok. Een beetje geduld hoort er bij het parkeren in Nerja vaak bij, en meestal hebben we goed geluk gehad om iets in de buurt te vinden.',
              sv: 'Om ni inte hittar en plats direkt, fortsätt förbi lägenhetens område, följ gatan runt och kolla de närliggande gatorna runt kvarteret. Lite tålamod hör ofta till att parkera i Nerja, och vi har oftast haft tur att hitta något i närheten.'
            },
            {
              en: 'Please only park where local signs and road markings clearly allow it. Avoid restricted areas and always check carefully before leaving your car.',
              de: 'Bitte parkt nur dort, wo es die örtlichen Schilder und Markierungen eindeutig erlauben. Meidet Sperrzonen und prüft immer sorgfältig, bevor ihr euer Auto abstellt.',
              es: 'Por favor, aparcad solo donde las señales y marcas viales locales lo permitan claramente. Evitad las zonas restringidas y comprobad siempre con cuidado antes de dejar el coche.',
              nl: 'Parkeer alstublieft alleen waar plaatselijke borden en wegmarkeringen dit duidelijk toestaan. Vermijd verboden zones en controleer altijd zorgvuldig voordat jullie de auto achterlaten.',
              sv: 'Vänligen parkera endast där lokala skyltar och vägmarkeringar tydligt tillåter det. Undvik förbjudna zoner och kontrollera alltid noga innan ni lämnar bilen.'
            },
            {
              en: 'If nothing is available nearby, there are also two public parking options a little further away that may help as a fallback: <a class="am-link" href="https://maps.app.goo.gl/6BwXaUPAChZxwg3u9" target="_blank" rel="noopener">public parking option 1</a> and <a class="am-link" href="https://maps.app.goo.gl/jweJa9nodE2MAKuXA" target="_blank" rel="noopener">public parking option 2</a>. These are roughly 400 to 600 metres away and are best kept as a backup if nothing closer is available.',
              de: 'Falls in der Nähe nichts frei ist, gibt es außerdem zwei etwas weiter entfernte öffentliche Parkmöglichkeiten, die als Ausweichoption dienen können: <a class="am-link" href="https://maps.app.goo.gl/6BwXaUPAChZxwg3u9" target="_blank" rel="noopener">öffentlicher Parkplatz 1</a> und <a class="am-link" href="https://maps.app.goo.gl/jweJa9nodE2MAKuXA" target="_blank" rel="noopener">öffentlicher Parkplatz 2</a>. Diese liegen etwa 400 bis 600 Meter entfernt und eignen sich am besten als Rückfalloption, falls in der Nähe nichts verfügbar ist.',
              es: 'Si no hay nada disponible cerca, también hay dos opciones de aparcamiento público un poco más alejadas que pueden serviros como alternativa: <a class="am-link" href="https://maps.app.goo.gl/6BwXaUPAChZxwg3u9" target="_blank" rel="noopener">aparcamiento público 1</a> y <a class="am-link" href="https://maps.app.goo.gl/jweJa9nodE2MAKuXA" target="_blank" rel="noopener">aparcamiento público 2</a>. Están a unos 400–600 metros y es mejor guardarlos como opción de reserva si no hay nada más cerca.',
              nl: 'Als er niets in de buurt beschikbaar is, zijn er ook twee openbare parkeeropties iets verder weg die als terugvaloptie kunnen dienen: <a class="am-link" href="https://maps.app.goo.gl/6BwXaUPAChZxwg3u9" target="_blank" rel="noopener">openbare parkeerplaats 1</a> en <a class="am-link" href="https://maps.app.goo.gl/jweJa9nodE2MAKuXA" target="_blank" rel="noopener">openbare parkeerplaats 2</a>. Deze liggen ongeveer 400 tot 600 meter verderop en zijn het beste te gebruiken als reserveoptie als er niets dichterbij beschikbaar is.',
              sv: 'Om inget finns tillgängligt i närheten finns det även två offentliga parkeringsalternativ lite längre bort som kan fungera som reserv: <a class="am-link" href="https://maps.app.goo.gl/6BwXaUPAChZxwg3u9" target="_blank" rel="noopener">offentlig parkering 1</a> och <a class="am-link" href="https://maps.app.goo.gl/jweJa9nodE2MAKuXA" target="_blank" rel="noopener">offentlig parkering 2</a>. Dessa ligger cirka 400 till 600 meter bort och fungerar bäst som reserv om inget närmare finns tillgängligt.'
            }
          ]
        },
        {
          icon: 'wifi',
          title: { en: 'Wi-Fi', de: 'WLAN', es: 'Wi-Fi', nl: 'Wifi', sv: 'Wi-Fi' },
          body: [
            {
              en: 'Stay connected with high-speed Wi-Fi during your stay.<br><br><strong>Network name:</strong><br>HUAWEI-2.4G-aB3Y<br><br><strong>Password:</strong><br>k46n9jF6',
              de: 'Während eures Aufenthalts steht euch schnelles WLAN zur Verfügung.<br><br><strong>Netzwerkname:</strong><br>HUAWEI-2.4G-aB3Y<br><br><strong>Passwort:</strong><br>k46n9jF6',
              es: 'Durante vuestra estancia tenéis acceso a Wi-Fi de alta velocidad.<br><br><strong>Nombre de la red:</strong><br>HUAWEI-2.4G-aB3Y<br><br><strong>Contraseña:</strong><br>k46n9jF6',
              nl: 'Tijdens jullie verblijf is er snelle Wi-Fi beschikbaar.<br><br><strong>Netwerknaam:</strong><br>HUAWEI-2.4G-aB3Y<br><br><strong>Wachtwoord:</strong><br>k46n9jF6',
              sv: 'Under er vistelse har ni tillgång till snabbt Wi-Fi.<br><br><strong>Nätverksnamn:</strong><br>HUAWEI-2.4G-aB3Y<br><br><strong>Lösenord:</strong><br>k46n9jF6'
            },
            {
              en: '<em>Please note:</em> Passwords are case-sensitive.',
              de: '<em>Bitte beachten:</em> Passwörter unterscheiden zwischen Groß- und Kleinschreibung.',
              es: '<em>A tener en cuenta:</em> Las contraseñas distinguen entre mayúsculas y minúsculas.',
              nl: '<em>Let op:</em> Wachtwoorden zijn hoofdlettergevoelig.',
              sv: '<em>Observera:</em> Lösenord är känsliga för stora och små bokstäver.'
            }
          ]
        },
        sharedAmaraCoolingHeatingItem
      ]
    },
    {
      heading: {
        en: 'Kitchen & Living',
        de: 'Küche & Wohnbereich',
        es: 'Cocina y salón',
        nl: 'Keuken & Woonkamer',
        sv: 'Kök & Vardagsrum'
      },
      items: [
        {
          icon: 'coffee',
          title: { en: 'Nespresso Machine', de: 'Nespresso-Maschine', es: 'Máquina Nespresso', nl: 'Nespresso-machine', sv: 'Nespresso-maskin' },
          body: [
            {
              en: 'For your first coffee at AMARA, you will find a <strong>Nespresso machine</strong> in the apartment. We provide a few capsules for your arrival, so you can settle in and enjoy a coffee straight away.',
              de: 'Für euren ersten Kaffee bei AMARA findet ihr im Apartment eine <strong>Nespresso-Maschine</strong>. Für eure Ankunft stellen wir euch bereits einige Kapseln bereit, sodass ihr euch erst einmal in Ruhe einrichten und direkt einen Kaffee genießen könnt.',
              es: 'Para vuestro primer café en AMARA encontraréis una <strong>máquina Nespresso</strong> en el apartamento. Hemos dejado algunas cápsulas para vuestra llegada, para que podáis instalaros tranquilamente y disfrutar de un café enseguida.',
              nl: 'Voor jullie eerste koffie bij AMARA staat er in het appartement een <strong>Nespresso-machine</strong> klaar. Voor jullie aankomst hebben we alvast een paar capsules klaargelegd, zodat jullie rustig kunnen aankomen en meteen van een kopje koffie kunnen genieten.',
              sv: 'För er första kaffe på AMARA finns en <strong>Nespresso-maskin</strong> i lägenheten. Vi har lämnat några kapslar till er vid ankomsten så att ni kan komma till ro och njuta av en kopp kaffe direkt.'
            },
            {
              en: 'If you need more during your stay, Nespresso-compatible capsules are easy to find in most supermarkets in Nerja.',
              de: 'Wenn ihr während eures Aufenthalts mehr benötigt, findet ihr Nespresso-kompatible Kapseln in den meisten Supermärkten in Nerja.',
              es: 'Si necesitáis más durante vuestra estancia, podéis encontrar cápsulas compatibles con Nespresso en la mayoría de los supermercados de Nerja.',
              nl: 'Als jullie tijdens het verblijf meer nodig hebben, zijn Nespresso-compatibele capsules in de meeste supermarkten in Nerja verkrijgbaar.',
              sv: 'Om ni behöver fler under er vistelse finns Nespresso-kompatibla kapslar i de flesta stormarknader i Nerja.'
            }
          ]
        },
        {
          icon: 'dish',
          title: { en: 'Induction Hob', de: 'Induktionsherd', es: 'Placa de inducción', nl: 'Inductiekookplaat', sv: 'Induktionshäll' },
          body: [
            {
              en: 'The induction hob is simple and safe to use. Please note: it only activates when <strong>induction-compatible cookware</strong> is placed on the cooking zone.',
              de: 'Der Induktionsherd ist einfach und sicher zu benutzen. Bitte beachtet: Er funktioniert nur, wenn <strong>induktionsgeeignetes Kochgeschirr</strong> auf der Kochzone steht.',
              es: 'La placa de inducción es fácil y segura de usar. Tened en cuenta que solo se activa cuando hay <strong>utensilios de cocina aptos para inducción</strong> colocados sobre la zona de cocción.',
              nl: 'De inductiekookplaat is eenvoudig en veilig in gebruik. Let op: de kookplaat werkt alleen wanneer er <strong>inductiegeschikt kookgerei</strong> op de kookzone staat.',
              sv: 'Induktionshällen är enkel och säker att använda. Observera: den aktiveras endast när <strong>induktionsanpassade kokkärl</strong> står på kokzonen.'
            },
            {
              en: 'To cook, place a suitable pot or pan on the hob, press <strong>On/Off</strong>, select the cooking zone, then adjust the power level from <strong>1–9</strong>.',
              de: 'Zum Kochen stellt ihr bitte einen geeigneten Topf oder eine geeignete Pfanne auf das Kochfeld, drückt <strong>On/Off</strong>, wählt die Kochzone aus und stellt anschließend die Leistungsstufe von <strong>1–9</strong> ein.',
              es: 'Para cocinar, colocad una olla o sartén adecuada sobre la placa, pulsad <strong>On/Off</strong>, seleccionad la zona de cocción y ajustad el nivel de potencia de <strong>1–9</strong>.',
              nl: 'Om te koken, plaats je een geschikte pan op de kookplaat, druk je op <strong>On/Off</strong>, selecteer je de kookzone en stel je vervolgens het vermogen in van <strong>1–9</strong>.',
              sv: 'För att laga mat, placera en lämplig kastrull eller stekpanna på hällen, tryck på <strong>On/Off</strong>, välj kokzon och justera sedan effektnivån från <strong>1–9</strong>.'
            },
            {
              en: 'If you see <strong>"Lo"</strong>, the child lock is active. Press and hold the <strong>Child Lock</strong> button with the lock symbol for about <strong>5 seconds</strong> to unlock it.',
              de: 'Wenn <strong>„Lo"</strong> angezeigt wird, ist die Kindersicherung aktiv. Haltet die Taste <strong>Child Lock</strong> mit dem Schloss-Symbol etwa <strong>5 Sekunden</strong> gedrückt, um sie zu entsperren.',
              es: 'Si aparece <strong>"Lo"</strong>, el bloqueo infantil está activado. Mantened pulsado el botón <strong>Child Lock</strong> con el símbolo del candado durante unos <strong>5 segundos</strong> para desbloquearlo.',
              nl: 'Als je <strong>"Lo"</strong> ziet, is de kinderbeveiliging actief. Houd de knop <strong>Child Lock</strong> met het slotsymbool ongeveer <strong>5 seconden</strong> ingedrukt om te ontgrendelen.',
              sv: 'Om du ser <strong>"Lo"</strong> är barnlåset aktiverat. Håll knappen <strong>Child Lock</strong> med låssymbolen intryckt i cirka <strong>5 sekunder</strong> för att låsa upp.'
            }
          ]
        },
        {
          icon: 'cutlery',
          title: { en: 'Cutlery', de: 'Besteck', es: 'Cubiertos', nl: 'Bestek', sv: 'Bestick' },
          body: [
            {
              en: 'The cutlery is in the <strong>upper right kitchen drawer</strong>. It is placed in an <strong>inner drawer inside the top drawer</strong>.',
              de: 'Das Besteck befindet sich in der <strong>rechten oberen Küchenschublade</strong>. Dort gibt es eine <strong>Innenschublade innerhalb der oberen Schublade</strong> – darin liegt das Besteck.',
              es: 'Los cubiertos están en el <strong>cajón superior derecho de la cocina</strong>. Se encuentran en un <strong>cajón interior dentro del cajón superior</strong>.',
              nl: 'Het bestek ligt in de <strong>rechter bovenste keukenschuif</strong>. Het bevindt zich in een <strong>binnenschuif in de bovenste lade</strong>.',
              sv: 'Besticken finns i <strong>den övre högra kökslådan</strong>. De ligger i en <strong>innerlåda inuti den översta lådan</strong>.'
            }
          ]
        },
        {
          icon: 'shower',
          title: { en: 'Shower', de: 'Dusche', es: 'Ducha', nl: 'Douche', sv: 'Dusch' },
          body: [
            {
              en: 'This short video shows how to switch between the rain shower and the hand shower.',
              de: 'Dieses kurze Video zeigt euch, wie ihr zwischen Regendusche und Handbrause umstellt.',
              es: 'Este breve vídeo os muestra cómo cambiar entre la ducha de lluvia y la ducha de mano.',
              nl: 'Deze korte video laat zien hoe jullie kunnen wisselen tussen de regendouche en de handdouche.',
              sv: 'Den här korta videon visar hur ni växlar mellan regnduschen och handduschen.'
            }
          ],
          video: {
            src: '/videos/amara-playa/shower-guide.mp4',
            title: {
              en: 'AMARA Playa Nerja Shower Guide',
              de: 'AMARA Playa Nerja Dusch-Anleitung',
              es: 'Guía de la ducha de AMARA Playa Nerja',
              nl: 'AMARA Playa Nerja douche-instructie',
              sv: 'AMARA Playa Nerja duschguide'
            }
          }
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
        sharedAmaraStarterSuppliesWithDishwasherTabletsItem,
        sharedAmaraHousekeepingItem,
        {
          icon: 'trash',
          title: { en: 'Garbage', de: 'Müllentsorgung', es: 'Gestión de residuos', nl: 'Afvalverwerking', sv: 'Avfallshantering' },
          body: [
            {
              en: 'The nearest public rubbish containers are around <strong>150 metres</strong> from the apartment.',
              de: 'Die nächsten öffentlichen Müllcontainer sind ungefähr <strong>150 Meter</strong> vom Apartment entfernt.',
              es: 'Los contenedores públicos más cercanos están a unos <strong>150 metros</strong> del apartamento.',
              nl: 'De dichtstbijzijnde openbare afvalcontainers liggen op ongeveer <strong>150 meter</strong> van het appartement.',
              sv: 'De närmaste offentliga sopcontainrarna ligger cirka <strong>150 meter</strong> från lägenheten.'
            },
            {
              en: 'The easiest way is to leave the building and go <strong>right down Calle Castilla Pérez</strong> for about <strong>50–60 metres</strong>. Then turn <strong>left uphill into Calle Málaga</strong>, and after another <strong>50 metres</strong> you will find the public containers on the <strong>right-hand side</strong>.',
              de: 'Am einfachsten geht ihr vom Gebäude aus <strong>rechts die Calle Castilla Pérez hinunter</strong> für etwa <strong>50 bis 60 Meter</strong>. Dann biegt ihr <strong>links bergauf in die Calle Málaga</strong> ein, und nach weiteren ungefähr <strong>50 Metern</strong> findet ihr die öffentlichen Container auf der <strong>rechten Seite</strong>.',
              es: 'La forma más sencilla es salir del edificio y bajar <strong>a la derecha por Calle Castilla Pérez</strong> durante unos <strong>50–60 metros</strong>. Después girad <strong>a la izquierda cuesta arriba hacia Calle Málaga</strong>, y tras otros <strong>50 metros</strong> encontraréis los contenedores públicos en el <strong>lado derecho</strong>.',
              nl: 'De makkelijkste route is om het gebouw te verlaten en <strong>rechts naar beneden over Calle Castilla Pérez</strong> te lopen, ongeveer <strong>50 tot 60 meter</strong>. Sla daarna <strong>links omhoog af naar Calle Málaga</strong>, en na nog eens ongeveer <strong>50 meter</strong> vinden jullie de openbare containers aan de <strong>rechterkant</strong>.',
              sv: 'Enklast är att gå ut från byggnaden och gå <strong>åt höger nedför Calle Castilla Pérez</strong> i cirka <strong>50–60 meter</strong>. Sväng sedan <strong>vänster uppför in på Calle Málaga</strong>, och efter ytterligare cirka <strong>50 meter</strong> hittar ni de offentliga containrarna på <strong>höger sida</strong>.'
            },
            {
              en: '<a class="am-link" href="https://maps.app.goo.gl/B7ZejyiYWfKdy4HXA" target="_blank" rel="noopener">Open container location in Google Maps</a>',
              de: '<a class="am-link" href="https://maps.app.goo.gl/B7ZejyiYWfKdy4HXA" target="_blank" rel="noopener">Container-Standort in Google Maps öffnen</a>',
              es: '<a class="am-link" href="https://maps.app.goo.gl/B7ZejyiYWfKdy4HXA" target="_blank" rel="noopener">Abrir ubicación de los contenedores en Google Maps</a>',
              nl: '<a class="am-link" href="https://maps.app.goo.gl/B7ZejyiYWfKdy4HXA" target="_blank" rel="noopener">Locatie van de containers openen in Google Maps</a>',
              sv: '<a class="am-link" href="https://maps.app.goo.gl/B7ZejyiYWfKdy4HXA" target="_blank" rel="noopener">Öppna containerplatsen i Google Maps</a>'
            },
            {
              en: 'We would kindly ask you to use these public containers for your rubbish during your stay. Thank you very much for helping us keep the apartment comfortable and tidy for everyone.',
              de: 'Wir würden euch freundlich bitten, während eures Aufenthalts diese öffentlichen Container für euren Müll zu nutzen. Vielen Dank, dass ihr uns dabei helft, das Apartment für alle angenehm und ordentlich zu halten.',
              es: 'Os agradeceríamos mucho que durante vuestra estancia utilicéis estos contenedores públicos para la basura. Muchas gracias por ayudarnos a mantener el apartamento agradable y ordenado para todos.',
              nl: 'We willen jullie vriendelijk vragen om tijdens jullie verblijf deze openbare containers voor jullie afval te gebruiken. Hartelijk dank dat jullie meehelpen om het appartement voor iedereen prettig en netjes te houden.',
              sv: 'Vi vill vänligen be er att använda dessa offentliga containrar för era sopor under vistelsen. Tack så mycket för att ni hjälper till att hålla lägenheten trivsam och välordnad för alla.'
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
          icon: 'tap-water',
          title: { en: 'Tap Water', de: 'Leitungswasser', es: 'Agua del grifo', nl: 'Kraanwater', sv: 'Kranvatten' },
          body: [
            {
              en: '<strong>Tap water:</strong> Tap water in Nerja is generally safe according to European standards, but the taste can be quite strong due to minerals and chlorine. For drinking, many guests prefer bottled water.',
              de: '<strong>Leitungswasser:</strong> Das Leitungswasser in Nerja ist nach europäischen Standards grundsätzlich sicher, geschmacklich aber durch Mineralien und Chlor oft recht intensiv. Zum Trinken bevorzugen viele Gäste daher stilles Wasser aus dem Supermarkt.',
              es: '<strong>Agua del grifo:</strong> El agua del grifo en Nerja es en general segura según los estándares europeos, pero su sabor puede resultar bastante intenso debido a los minerales y al cloro. Para beber, muchos huéspedes prefieren agua embotellada.',
              nl: '<strong>Kraanwater:</strong> Kraanwater in Nerja is volgens de Europese normen over het algemeen veilig, maar de smaak kan door mineralen en chloor vrij sterk zijn. Voor drinkwater geven veel gasten daarom de voorkeur aan flessenwater.',
              sv: '<strong>Kranvatten:</strong> Kranvattnet i Nerja är generellt säkert enligt europeiska standarder, men smaken kan vara ganska stark på grund av mineraler och klor. För att dricka föredrar många gäster därför vatten på flaska.'
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
              en: '<strong>Non-smoking policy:</strong> All AMARA apartments are non-smoking apartments. We kindly ask all guests to respect this policy for the comfort and well-being of everyone.',
              de: '<strong>Nichtraucherregelung:</strong> Alle AMARA Apartments sind Nichtraucher-Apartments. Wir bitten alle Gäste herzlich, diese Regelung zum Wohl und Komfort aller zu respektieren.',
              es: '<strong>Política de no fumar:</strong> Todos los apartamentos de AMARA son apartamentos para no fumadores. Os agradecemos que respetéis esta norma por la comodidad y el bienestar de todos.',
              nl: '<strong>Rookbeleid:</strong> Alle AMARA appartementen zijn rookvrije appartementen. Wij verzoeken alle gasten vriendelijk dit te respecteren voor het comfort en welzijn van iedereen.',
              sv: '<strong>Rökpolicy:</strong> Alla AMARA-lägenheter är rökfria lägenheter. Vi ber alla gäster vänligen att respektera detta för allas komfort och trivsel.'
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
            sharedAmaraDepartureInfoItem.body[0],
            sharedAmaraDepartureInfoItem.body[1],
            {
              en: 'When departing, please leave one set of keys inside the apartment, lock the door, and return the remaining key to the key box.',
              de: 'Lasst beim Verlassen bitte ein Schlüsselset im Apartment liegen, schließt die Tür ab und legt den anderen Schlüssel zurück in die Schlüsselbox.',
              es: 'Al marcharos, dejad por favor un juego de llaves dentro del apartamento, cerrad la puerta con llave y devolved la otra llave a la caja de seguridad.',
              nl: 'Laat bij vertrek alstublieft één sleutelset in het appartement achter, doe de deur op slot en leg de andere sleutel terug in het sleutelkastje.',
              sv: 'Vid avfärd, vänligen lämna ett set med nycklar inne i lägenheten, lås dörren och lägg tillbaka den andra nyckeln i nyckelboxen.'
            }
          ]
        },
        {
          icon: 'late-checkout',
          title: { en: 'Late Check-out', de: 'Late Check-out', es: 'Late check-out', nl: 'Late check-out', sv: 'Sen utcheckning' },
          body: [
            {
              en: 'Like many apartments in Nerja, our apartment is prepared by a private cleaning person rather than a hotel-style cleaning company. We therefore kindly ask you to respect the regular <strong>11:00 AM</strong> check-out time.',
              de: 'Wie viele Apartments in Nerja wird auch unser Apartment von einer privaten Reinigungsperson vorbereitet und nicht von einem hotelähnlichen Reinigungsteam. Deshalb bitten wir euch freundlich, die reguläre Check-out-Zeit um <strong>11:00 Uhr</strong> zu respektieren.',
              es: 'Como muchos apartamentos en Nerja, nuestro apartamento lo prepara una persona privada de limpieza y no un equipo de limpieza tipo hotel. Por este motivo, os pedimos amablemente que respetéis la hora habitual de check-out a las <strong>11:00</strong>.',
              nl: 'Zoals veel appartementen in Nerja wordt ons appartement schoongemaakt door een particuliere schoonmaakpersoon en niet door een hotelachtig schoonmaakteam. Daarom vragen wij jullie vriendelijk om de reguliere check-outtijd van <strong>11:00 uur</strong> te respecteren.',
              sv: 'Precis som många lägenheter i Nerja förbereds vår lägenhet av en privat städperson och inte av ett hotell-liknande städteam. Därför ber vi er vänligen att respektera den ordinarie utcheckningstiden kl. <strong>11:00</strong>.'
            },
            {
              en: 'If you would like to stay in the apartment until <strong>6:00 PM</strong>, this may be possible for <strong>€65</strong> from October to April and <strong>€90</strong> from May to September. Since this means holding the apartment back from a possible new arrival, late check-out must be arranged and confirmed with us in advance — please message us as early as possible if you would like to request it.',
              de: 'Wenn ihr das Apartment bis <strong>18:00 Uhr</strong> nutzen möchtet, ist dies möglicherweise von Oktober bis April für <strong>65 €</strong> und von Mai bis September für <strong>90 €</strong> möglich. Da wir das Apartment dafür für eine mögliche neue Anreise freihalten müssen, muss ein Late Check-out vorab mit uns abgestimmt und von uns bestätigt werden – schreibt uns dafür bitte so früh wie möglich.',
              es: 'Si queréis permanecer en el apartamento hasta las <strong>18:00</strong>, esto puede ser posible por <strong>65 €</strong> de octubre a abril y <strong>90 €</strong> de mayo a septiembre. Como esto implica mantener el apartamento no disponible para una posible nueva llegada, el late check-out debe acordarse y confirmarse con nosotros de antemano; escribidnos con la mayor antelación posible si queréis solicitarlo.',
              nl: 'Als jullie het appartement tot <strong>18:00 uur</strong> willen blijven gebruiken, is dit mogelijk voor <strong>€65</strong> van oktober tot april en <strong>€90</strong> van mei tot september. Omdat we het appartement hiervoor niet beschikbaar houden voor een mogelijke nieuwe aankomst, moet een late check-out vooraf met ons worden afgestemd en bevestigd — stuur ons daarvoor zo vroeg mogelijk een bericht.',
              sv: 'Om ni vill använda lägenheten fram till <strong>18:00</strong> kan detta vara möjligt för <strong>€65</strong> från oktober till april och <strong>€90</strong> från maj till september. Eftersom detta innebär att vi håller lägenheten otillgänglig för en eventuell ny ankomst måste sen utcheckning avtalas och bekräftas med oss i förväg — skicka gärna ett meddelande så tidigt som möjligt om ni vill begära det.'
            }
          ]
        }
      ]
    }
  ]
};

const nerjaEssentials: GuestGuideEntry = {
  type: 'detail',
  slug: 'nerja-guest-essentials',
  backSlug: 'guestwelcome-nerja-playa',
  supportHref: FRIGILIANA_SUPPORT_EMAIL,
  supportLabel: NEED_HELP,
  seoTitle: {
    en: 'Nerja Essentials | AMARA',
    de: 'Nerja kompakt | AMARA',
    es: 'Lo esencial de Nerja | AMARA',
    nl: 'Nerja essentials | AMARA',
    sv: 'Det viktigaste i Nerja | AMARA'
  },
  seoDescription: {
    en: 'Everyday essentials near your Nerja apartment: supermarkets, bakery, laundry, ATMs, transport and medical help.',
    de: 'Das Wichtigste in der Nähe eures Nerja-Apartments: Supermärkte, Bäckerei, Wäscherei, Geldautomaten, Verkehrsmittel und medizinische Hilfe.',
    es: 'Lo esencial cerca de vuestro apartamento en Nerja: supermercados, panadería, lavandería, cajeros, transporte y asistencia médica.',
    nl: 'Het belangrijkste in de buurt van jullie appartement in Nerja: supermarkten, bakker, wasserij, geldautomaten, vervoer en medische hulp.',
    sv: 'Det viktigaste nära er lägenhet i Nerja: livsmedelsbutiker, bageri, tvätt, bankomater, transport och sjukvård.'
  },
  kicker: {
    en: 'NERJA GUEST GUIDE',
    de: 'NERJA GÄSTEGUIDE',
    es: 'GUÍA PARA HUÉSPEDES EN NERJA',
    nl: 'NERJA GASTENGIDS',
    sv: 'NERJA GÄSTGUIDE'
  },
  title: {
    en: 'Local Essentials in Nerja',
    de: 'Wichtiges vor Ort in Nerja',
    es: 'Información útil en Nerja',
    nl: 'Praktische informatie in Nerja',
    sv: 'Praktisk information i Nerja'
  },
  categories: [
    {
      heading: {
        en: 'Everyday Essentials',
        de: 'Für den Alltag',
        es: 'Para el día a día',
        nl: 'Voor elke dag',
        sv: 'För vardagen'
      },
      items: [
        {
          icon: 'store',
          title: { en: 'Local Tip', de: 'Unser Tipp', es: 'Nuestro consejo', nl: 'Onze tip', sv: 'Vårt tips' },
          body: [
            {
              en: '<strong>One truly local thing to try:</strong> If you visit Burriana beach, try the giant paellas cooked over wood fires at <em>Chiringuito Ayo</em>. It is a true Nerja institution and is lovely for a relaxed seaside lunch.',
              de: '<strong>Eine wirklich lokale Spezialität:</strong> Wenn ihr den Burriana-Strand besucht, probiert die riesigen Paellas, die über Holzfeuer zubereitet werden, im <em>Chiringuito Ayo</em>. Es ist eine echte Institution in Nerja und wunderbar für ein entspanntes Mittagessen am Meer.',
              es: '<strong>Una especialidad realmente local:</strong> Si visitáis la playa de Burriana, probad las paellas gigantes hechas a leña en el <em>Chiringuito Ayo</em>. Es una verdadera institución en Nerja e ideal para una comida relajada frente al mar.',
              nl: '<strong>Eén echt lokale specialiteit:</strong> Als jullie het Burriana-strand bezoeken, probeer dan de gigantische paella\'s gekookt op houtvuur bij <em>Chiringuito Ayo</em>. Het is een echt instituut in Nerja en heerlijk voor een ontspannen lunch aan zee.',
              sv: '<strong>En verkligt lokal specialitet:</strong> Om ni besöker Burriana-stranden, prova de gigantiska paellorna som tillagas över öppen eld på <em>Chiringuito Ayo</em>. Det är en riktig institution i Nerja och perfekt för en avslappnad lunch vid havet.'
            },
            {
              en: '<strong>The easiest way to visit the mountains:</strong> For spectacular views or a mountain hike, the regular Nerja–Frigiliana bus is often easier than dealing with parking up in the narrow streets.',
              de: '<strong>Der einfachste Weg in die Berge:</strong> Für spektakuläre Ausblicke oder eine Bergwanderung ist der reguläre Bus zwischen Nerja und Frigiliana oft entspannter als die Parkplatzsuche in den engen Gassen oben.',
              es: '<strong>La forma más fácil de subir a la montaña:</strong> Para disfrutar de vistas espectaculares o una caminata, el autobús regular entre Nerja y Frigiliana suele ser más cómodo que buscar aparcamiento en sus calles estrechas.',
              nl: '<strong>De makkelijkste manier om de bergen te bezoeken:</strong> Voor een spectaculair uitzicht of een bergwandeling is de reguliere bus tussen Nerja en Frigiliana vaak ontspannener dan zoeken naar een parkeerplaats in de smalle straatjes boven.',
              sv: '<strong>Det enklaste sättet att besöka bergen:</strong> För spektakulär utsikt eller en bergsvandring är den reguljära bussen mellan Nerja och Frigiliana ofta smidigare än att leta parkering på de trånga gatorna däruppe.'
            },
            {
              en: '<strong>Useful market rhythm:</strong> Nerja\'s main market is on Tuesday mornings and is the better option for a proper stock-up. Frigiliana has a smaller Thursday market, which is a nice excuse for a trip into the hills.',
              de: '<strong>Nützlicher Marktrhythmus:</strong> Der große Markt in Nerja ist dienstags morgens und eignet sich besser für einen richtigen Vorrats-Einkauf. Frigiliana hat donnerstags einen kleineren Markt, was ein schöner Anlass für einen Ausflug in die Berge ist.',
              es: '<strong>Un ritmo de mercado útil:</strong> El mercado principal de Nerja es los martes por la mañana y es la mejor opción para una compra más completa. Frigiliana tiene un mercado más pequeño los jueves, una buena excusa para hacer una excursión al pueblo.',
              nl: '<strong>Handig marktritme:</strong> De grote markt van Nerja is op dinsdagochtend en is de beste keuze voor een echte voorraadronde. Frigiliana heeft op donderdag een kleinere markt, een leuk excuus voor een uitstapje naar de heuvels.',
              sv: '<strong>Ett användbart marknadsupplägg:</strong> Nerjas stora marknad är på tisdag morgon och passar bäst om du vill fylla på ordentligt. Frigiliana har en mindre marknad på torsdagar, vilket är en trevlig ursäkt för en utflykt.'
            },
            {
              en: '<strong>What to ask for if you want something regional:</strong> Look for <em>DOP Pasas de Málaga</em> if you want an easy local snack or souvenir, and if you would like a typical regional drink after dinner, ask for <em>Moscatel</em> or <em>vino dulce de Málaga</em>.',
              de: '<strong>Wonach ihr fragen könnt, wenn ihr etwas Regionales möchtet:</strong> Haltet Ausschau nach <em>DOP Pasas de Málaga</em>, wenn ihr einen einfachen lokalen Snack oder ein kleines Mitbringsel sucht. Und wenn ihr nach dem Essen etwas Typisches trinken möchtet, fragt nach <em>Moscatel</em> oder <em>vino dulce de Málaga</em>.',
              es: '<strong>Qué pedir si queréis algo típico de la región:</strong> Buscad <em>DOP Pasas de Málaga</em> si os apetece un snack local o un recuerdo fácil de llevar. Y si después de cenar queréis tomar algo típico, podéis pedir <em>Moscatel</em> o <em>vino dulce de Málaga</em>.',
              nl: '<strong>Waar je naar kunt vragen als je iets regionaals wilt:</strong> Let op <em>DOP Pasas de Málaga</em> als je een eenvoudige lokale snack of een klein souvenir zoekt. En wil je na het eten iets typisch uit de streek drinken, vraag dan naar <em>Moscatel</em> of <em>vino dulce de Málaga</em>.',
              sv: '<strong>Vad du kan fråga efter om du vill ha något regionalt:</strong> Håll utkik efter <em>DOP Pasas de Málaga</em> om du vill ha ett enkelt lokalt snack eller en liten present. Och om du vill prova något typiskt efter middagen kan du fråga efter <em>Moscatel</em> eller <em>vino dulce de Málaga</em>.'
            }
          ]
        },
        {
          icon: 'cart',
          title: { en: 'Supermarkets', de: 'Supermärkte', es: 'Supermercados', nl: 'Supermarkten', sv: 'Livsmedelsbutiker' },
          body: [
            {
              en: 'Nerja has many supermarkets within walking distance. For a quick and easy shop from the house, we recommend starting with <strong>Carrefour Express</strong> on your street.',
              de: 'In Nerja gibt es viele Supermärkte, die ihr gut zu Fuß erreichen könnt. Für einen schnellen und unkomplizierten Einkauf vom Haus aus würden wir zuerst <strong>Carrefour Express</strong> in eurer Straße empfehlen.',
              es: 'En Nerja hay muchos supermercados a poca distancia a pie. Para una compra rápida y sencilla desde la casa, os recomendamos empezar por <strong>Carrefour Express</strong> en vuestra calle.',
              nl: 'In Nerja zijn er veel supermarkten op loopafstand. Voor een snelle en makkelijke boodschap vanaf het huis raden we aan om eerst naar <strong>Carrefour Express</strong> in jullie straat te gaan.',
              sv: 'Nerja har många livsmedelsbutiker på gångavstånd. För en snabb och enkel handling från huset rekommenderar vi att ni börjar med <strong>Carrefour Express</strong> på er gata.'
            },
            {
              en: '<strong>Quickest option from the house</strong>',
              de: '<strong>Die schnellste Option direkt vom Haus</strong>',
              es: '<strong>La opción más rápida desde la casa</strong>',
              nl: '<strong>De snelste optie vanaf het huis</strong>',
              sv: '<strong>Snabbaste alternativet från huset</strong>'
            },
            {
              en: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Nerja" target="_blank" rel="noopener"><strong>Carrefour Express</strong></a> – step outside the house and it is on the same street.',
              de: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Nerja" target="_blank" rel="noopener"><strong>Carrefour Express</strong></a> – einfach aus dem Haus treten, er befindet sich in derselben Straße.',
              es: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Nerja" target="_blank" rel="noopener"><strong>Carrefour Express</strong></a> – salid de la casa, está en la misma calle.',
              nl: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Nerja" target="_blank" rel="noopener"><strong>Carrefour Express</strong></a> – stap het huis uit, het is in dezelfde straat.',
              sv: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Nerja" target="_blank" rel="noopener"><strong>Carrefour Express</strong></a> – gå ut ur huset, den ligger på samma gata.'
            },
            {
              en: '<strong>Other local options</strong>',
              de: '<strong>Weitere Optionen im Ort</strong>',
              es: '<strong>Otras opciones locales</strong>',
              nl: '<strong>Andere lokale opties</strong>',
              sv: '<strong>Fler lokala alternativ</strong>'
            },
            {
              en: 'If you want a little more choice nearby, there are other great supermarkets in the center as well:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mas+Supermercado+Nerja" target="_blank" rel="noopener"><strong>Mas Supermercado</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Calle+San+Miguel+Nerja" target="_blank" rel="noopener"><strong>Mercadona (C. San Miguel)</strong></a>',
              de: 'Wenn ihr in der Nähe ein bisschen mehr Auswahl möchtet, gibt es im Zentrum außerdem noch andere sehr gute Supermärkte:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mas+Supermercado+Nerja" target="_blank" rel="noopener"><strong>Mas Supermercado</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Calle+San+Miguel+Nerja" target="_blank" rel="noopener"><strong>Mercadona (C. San Miguel)</strong></a>',
              es: 'Si queréis un poco más de variedad cerca, en el centro también hay otros supermercados excelentes:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mas+Supermercado+Nerja" target="_blank" rel="noopener"><strong>Mas Supermercado</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Calle+San+Miguel+Nerja" target="_blank" rel="noopener"><strong>Mercadona (C. San Miguel)</strong></a>',
              nl: 'Als jullie in de buurt iets meer keuze willen, zijn er in het centrum ook nog andere uitstekende supermarkten:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mas+Supermercado+Nerja" target="_blank" rel="noopener"><strong>Mas Supermercado</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Calle+San+Miguel+Nerja" target="_blank" rel="noopener"><strong>Mercadona (C. San Miguel)</strong></a>',
              sv: 'Om ni vill ha lite större urval i närheten finns det också andra utmärkta livsmedelsbutiker i centrum:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mas+Supermercado+Nerja" target="_blank" rel="noopener"><strong>Mas Supermercado</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Mercadona+Calle+San+Miguel+Nerja" target="_blank" rel="noopener"><strong>Mercadona (C. San Miguel)</strong></a>'
            },
            {
              en: '<strong>For a bigger shop, go just outside town</strong>',
              de: '<strong>Für einen Großeinkauf ans Ortsende</strong>',
              es: '<strong>Para una compra más grande, justo a las afueras</strong>',
              nl: '<strong>Voor grotere boodschappen net buiten de stad</strong>',
              sv: '<strong>För större handling rekommenderar vi butikerna utanför centrum</strong>'
            },
            {
              en: 'For a larger out-of-town shop, we recommend the big supermarkets just off the N-340.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Aldi+Nerja" target="_blank" rel="noopener"><strong>Aldi (Nerja)</strong></a>',
              de: 'Für einen größeren Einkauf außerhalb des Zentrums empfehlen wir die großen Supermärkte direkt an der N-340.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Aldi+Nerja" target="_blank" rel="noopener"><strong>Aldi (Nerja)</strong></a>',
              es: 'Para una compra más grande a las afueras, recomendamos los grandes supermercados junto a la N-340.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Aldi+Nerja" target="_blank" rel="noopener"><strong>Aldi (Nerja)</strong></a>',
              nl: 'Voor een grotere boodschap buiten het centrum raden we de grote supermarkten net buiten de N-340 aan.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Aldi+Nerja" target="_blank" rel="noopener"><strong>Aldi (Nerja)</strong></a>',
              sv: 'För en större handling utanför centrum rekommenderar vi de stora mataffärerna precis vid N-340.<br><br>• <a class="am-link" href="https://www.google.com/maps/place/?q=place_id:ChIJvymkvBglcg0R9Krp1OTyAao" target="_blank" rel="noopener"><strong>Lidl (Nerja)</strong></a><br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Aldi+Nerja" target="_blank" rel="noopener"><strong>Aldi (Nerja)</strong></a>'
            },
            {
              en: '<em>Please note:</em> Opening hours can vary seasonally, and Sundays are often more limited.',
              de: '<em>Bitte beachten:</em> Die Öffnungszeiten können je nach Saison variieren, und sonntags ist die Auswahl oft eingeschränkter.',
              es: '<em>A tener en cuenta:</em> Los horarios pueden variar según la temporada, y los domingos suelen ser más limitados.',
              nl: '<em>Let op:</em> Openingstijden kunnen per seizoen verschillen, en op zondag is het aanbod vaak beperkter.',
              sv: '<em>Observera:</em> Öppettiderna kan variera beroende på säsong, och på söndagar är utbudet ofta mer begränsat.'
            }
          ]
        },
        {
          icon: 'bread',
          title: { en: 'Bakery', de: 'Bäckerei', es: 'Panadería', nl: 'Bakker', sv: 'Bageri' },
          body: [
            {
              en: 'For fresh bread, we recommend <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Bakery+Nerja" target="_blank" rel="noopener"><strong>Good Stuff Cafe & Bakery</strong></a>. You can get there in about <strong>2 minutes via Calle Castilla Pérez</strong>, and the route is easy because you do <strong>not need to take any stairs</strong>.<br><br>In our view, this is the nicest and simplest bakery option from the house, especially in the morning.',
              de: 'Für frisches Brot würden wir euch das <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Bakery+Nerja" target="_blank" rel="noopener"><strong>Good Stuff Cafe & Bakery</strong></a> empfehlen. Ihr erreicht sie in etwa <strong>2 Minuten über die Calle Castilla Pérez</strong>, und der Weg ist angenehm, weil ihr <strong>keine Treppen</strong> nehmen müsst.<br><br>Aus unserer Sicht ist das vom Haus aus die schönste und einfachste Bäckerei-Option, besonders am Morgen.',
              es: 'Para pan fresco, os recomendamos <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Bakery+Nerja" target="_blank" rel="noopener"><strong>Good Stuff Cafe & Bakery</strong></a>. Se llega en unos <strong>2 minutos por Calle Castilla Pérez</strong>, y el camino es cómodo porque <strong>no hay que subir ni bajar escaleras</strong>.<br><br>Desde la casa, nos parece la opción de panadería más agradable y más fácil, sobre todo por la mañana.',
              nl: 'Voor vers brood raden we <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Bakery+Nerja" target="_blank" rel="noopener"><strong>Good Stuff Cafe & Bakery</strong></a> aan. Jullie lopen er in ongeveer <strong>2 minuten via Calle Castilla Pérez</strong> heen, en de route is prettig omdat jullie <strong>geen trappen</strong> hoeven te nemen.<br><br>Vanuit het huis vinden wij dit de fijnste en makkelijkste bakker, vooral in de ochtend.',
              sv: 'För färskt bröd rekommenderar vi <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Good+Stuff+Cafe+Bakery+Nerja" target="_blank" rel="noopener"><strong>Good Stuff Cafe & Bakery</strong></a>. Ni tar er dit på cirka <strong>2 minuter via Calle Castilla Pérez</strong>, och vägen är enkel eftersom ni <strong>inte behöver ta några trappor</strong>.<br><br>Från huset tycker vi att detta är det trevligaste och enklaste bagerialternativet, särskilt på morgonen.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Practical Services',
        de: 'Praktische Services',
        es: 'Servicios prácticos',
        nl: 'Handige diensten',
        sv: 'Praktisk service'
      },
      items: [
        {
          icon: 'laundry',
          title: { en: 'Laundry', de: 'Wäsche', es: 'Lavandería', nl: 'Wasgoed', sv: 'Tvätt' },
          body: [
            {
              en: 'For a normal stay, the easiest option is simply to use the washing machine at home.',
              de: 'Für einen normalen Aufenthalt ist die einfachste Lösung ganz klar die Waschmaschine im Haus.',
              es: 'Para una estancia normal, la opción más sencilla es simplemente usar la lavadora de la casa.',
              nl: 'Voor een normaal verblijf is de makkelijkste oplossing gewoon de wasmachine in huis te gebruiken.',
              sv: 'För en vanlig vistelse är det enklaste alternativet helt enkelt att använda tvättmaskinen hemma.'
            },
            {
              en: 'If you prefer a <strong>drop-off service</strong>, <strong>Lavandería Nerja</strong> is a practical option in Nerja and only about <strong>4 minutes from the house</strong>.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Nerja" target="_blank" rel="noopener"><strong>Lavandería Nerja</strong></a>',
              de: 'Wenn ihr lieber einen <strong>Wäsche-Abgabe-Service</strong> möchtet, ist <strong>Lavandería Nerja</strong> eine praktische Option in Nerja und nur etwa <strong>4 Minuten vom Haus entfernt</strong>.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Nerja" target="_blank" rel="noopener"><strong>Lavandería Nerja</strong></a>',
              es: 'Si preferís un <strong>servicio para dejar la ropa</strong>, <strong>Lavandería Nerja</strong> es una opción práctica en Nerja y está a solo unos <strong>4 minutos de la casa</strong>.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Nerja" target="_blank" rel="noopener"><strong>Lavandería Nerja</strong></a>',
              nl: 'Als jullie liever een <strong>drop-off-service</strong> gebruiken, is <strong>Lavandería Nerja</strong> een praktische optie in Nerja en slechts ongeveer <strong>4 minuten van het huis</strong> verwijderd.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Nerja" target="_blank" rel="noopener"><strong>Lavandería Nerja</strong></a>',
              sv: 'Om ni föredrar en <strong>drop-off-tjänst</strong> är <strong>Lavandería Nerja</strong> ett praktiskt alternativ i Nerja och ligger bara cirka <strong>4 minuter från huset</strong>.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Nerja" target="_blank" rel="noopener"><strong>Lavandería Nerja</strong></a>'
            },
            {
              en: 'If you prefer <strong>self-service laundry</strong>, the most practical external option is also right in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Autoservicio+Open+Wash+Nerja" target="_blank" rel="noopener"><strong>Lavandería Autoservicio Open Wash Nerja</strong></a>',
              de: 'Wenn ihr lieber <strong>Self Service</strong> möchtet, ist die praktischste externe Option ebenfalls direkt in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Autoservicio+Open+Wash+Nerja" target="_blank" rel="noopener"><strong>Lavandería Autoservicio Open Wash Nerja</strong></a>',
              es: 'Si preferís <strong>autoservicio</strong>, la opción externa más práctica también está en <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Autoservicio+Open+Wash+Nerja" target="_blank" rel="noopener"><strong>Lavandería Autoservicio Open Wash Nerja</strong></a>',
              nl: 'Als jullie liever <strong>self-service</strong> willen, is de meest praktische externe optie ook direct in <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Autoservicio+Open+Wash+Nerja" target="_blank" rel="noopener"><strong>Lavandería Autoservicio Open Wash Nerja</strong></a>',
              sv: 'Om ni föredrar <strong>självservice</strong> är det mest praktiska externa alternativet också mitt i <strong>Nerja</strong>:<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Autoservicio+Open+Wash+Nerja" target="_blank" rel="noopener"><strong>Lavandería Autoservicio Open Wash Nerja</strong></a>'
            }
          ]
        },
        {
          icon: 'card',
          title: { en: 'ATM', de: 'Geldautomat', es: 'Cajero automático', nl: 'Geldautomaat', sv: 'Bankomat' },
          body: [
            {
              en: 'If you need cash during your stay, the easiest area to head for is towards the Balcón de Europa. From the house, it is a very pleasant walk of around <strong>500 metres</strong> along <strong>Calle Castilla Pérez</strong> and <strong>Calle Diputación</strong>.<br><br>Around the center, you will also find pharmacies and the main shopping streets — and this is where the ATM options are as well.',
              de: 'Wenn ihr während eures Aufenthalts Bargeld braucht, geht ihr am besten in Richtung Balcón de Europa. Vom Haus aus ist das ein sehr angenehmer Weg von rund <strong>500 Metern</strong> über die <strong>Calle Castilla Pérez</strong> und <strong>Calle Diputación</strong>.<br><br>Dort im Zentrum findet ihr auch Apotheken und die Haupteinkaufsstraßen — und genau dort befinden sich auch die Geldautomaten.',
              es: 'Si necesitáis efectivo durante vuestra estancia, la zona más práctica es hacia el Balcón de Europa. Desde la casa, es un paseo muy agradable de unos <strong>500 metros</strong> por la <strong>Calle Castilla Pérez</strong> y <strong>Calle Diputación</strong>.<br><br>Por el centro también encontraréis farmacias y las principales calles comerciales — y es justo donde están también los cajeros.',
              nl: 'Als jullie tijdens het verblijf contant geld nodig hebben, is de handigste richting de Balcón de Europa. Vanaf het huis is dat een heel aangename wandeling van ongeveer <strong>500 meter</strong> via <strong>Calle Castilla Pérez</strong> en <strong>Calle Diputación</strong>.<br><br>Daar in het centrum vinden jullie ook apotheken en de belangrijkste winkelstraten — en precies daar liggen ook de geldautomaten.',
              sv: 'Om ni behöver kontanter under vistelsen är det enklast att gå mot Balcón de Europa. Från huset är det en mycket behaglig promenad på cirka <strong>500 meter</strong> längs <strong>Calle Castilla Pérez</strong> och <strong>Calle Diputación</strong>.<br><br>Där i centrum hittar ni också apotek och de främsta shoppinggatorna — och det är också där bankomaterna finns.'
            },
            {
              en: '<strong>ATM options in this area</strong>',
              de: '<strong>Geldautomaten in diesem Bereich</strong>',
              es: '<strong>Cajeros en esta zona</strong>',
              nl: '<strong>Geldautomaten in dit gebied</strong>',
              sv: '<strong>Bankomater i detta område</strong>'
            },
            {
              en: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Unicaja+Nerja" target="_blank" rel="noopener"><strong>Unicaja ATM</strong></a>',
              de: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Unicaja+Nerja" target="_blank" rel="noopener"><strong>Unicaja Geldautomat</strong></a>',
              es: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Unicaja+Nerja" target="_blank" rel="noopener"><strong>Cajero Unicaja</strong></a>',
              nl: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Unicaja+Nerja" target="_blank" rel="noopener"><strong>Unicaja geldautomaat</strong></a>',
              sv: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Unicaja+Nerja" target="_blank" rel="noopener"><strong>Unicaja bankomat</strong></a>'
            },
            {
              en: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CaixaBank+Nerja" target="_blank" rel="noopener"><strong>CaixaBank ATM</strong></a>',
              de: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CaixaBank+Nerja" target="_blank" rel="noopener"><strong>CaixaBank Geldautomat</strong></a>',
              es: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CaixaBank+Nerja" target="_blank" rel="noopener"><strong>Cajero CaixaBank</strong></a>',
              nl: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CaixaBank+Nerja" target="_blank" rel="noopener"><strong>CaixaBank geldautomaat</strong></a>',
              sv: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=CaixaBank+Nerja" target="_blank" rel="noopener"><strong>CaixaBank bankomat</strong></a>'
            },
            {
              en: '<em>Good to know:</em> This is the most convenient area to combine a few practical things at once if you are already heading towards the center.',
              de: '<em>Gut zu wissen:</em> Das ist der praktischste Bereich, wenn ihr ohnehin schon ins Zentrum geht und mehrere kleine Dinge auf einmal erledigen möchtet.',
              es: '<em>Conviene saber:</em> Esta es la zona más práctica si ya vais hacia el centro y queréis resolver varias cosas útiles de una vez.',
              nl: '<em>Goed om te weten:</em> Dit is het handigste gebied als jullie toch al richting het centrum lopen en meerdere praktische dingen tegelijk willen regelen.',
              sv: '<em>Bra att veta:</em> Det här är det mest praktiska området om ni ändå är på väg mot centrum och vill ordna flera småsaker samtidigt.'
            }
          ]
        },
        {
          icon: 'info',
          title: {
            en: 'Tourist Office',
            de: 'Touristeninformation',
            es: 'Oficina de turismo',
            nl: 'VVV-kantoor',
            sv: 'Turistbyrå'
          },
          body: [
            {
              en: 'If you want a local map, current walking information, or a quick answer before heading out, the tourist office is the best place to ask in Nerja.<br><br>It is especially useful if you are planning a hike or want up-to-date local advice rather than relying only on general online information.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Nerja" target="_blank" rel="noopener"><strong>Tourist Office Nerja</strong></a><br>Plaza Balcón de Europa, 1<br><a class="am-link" href="tel:+34952521531">Call +34 952 52 15 31</a>',
              de: 'Wenn ihr einen Ortsplan, aktuelle Hinweise zu Spaziergängen oder Wanderungen oder einfach eine schnelle Auskunft vor Ort möchtet, ist die Touristeninformation in Nerja die beste Anlaufstelle.<br><br>Besonders sinnvoll ist sie, wenn ihr eine Wanderung plant oder lieber aktuelle lokale Hinweise haben möchtet, statt euch nur auf allgemeine Online-Infos zu verlassen.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Nerja" target="_blank" rel="noopener"><strong>Touristeninformation Nerja</strong></a><br>Plaza Balcón de Europa, 1<br><a class="am-link" href="tel:+34952521531">Anrufen: +34 952 52 15 31</a>',
              es: 'Si queréis un mapa del pueblo, información actual sobre paseos o rutas, o una respuesta rápida antes de salir, la oficina de turismo es el mejor lugar para preguntar en Nerja.<br><br>Es especialmente útil si estáis planeando una caminata o preferís información local actualizada en lugar de depender solo de información general de internet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Nerja" target="_blank" rel="noopener"><strong>Oficina de turismo de Nerja</strong></a><br>Plaza Balcón de Europa, 1<br><a class="am-link" href="tel:+34952521531">Llamar: +34 952 52 15 31</a>',
              nl: 'Als jullie een plattegrond, actuele informatie over wandelingen of gewoon snel lokaal advies willen voordat jullie op pad gaan, is het VVV-kantoor in Nerja de beste plek om even te vragen.<br><br>Vooral handig als jullie een hike plannen of liever actuele lokale informatie hebben dan alleen algemene info van internet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Nerja" target="_blank" rel="noopener"><strong>VVV-kantoor Nerja</strong></a><br>Plaza Balcón de Europa, 1<br><a class="am-link" href="tel:+34952521531">Bellen: +34 952 52 15 31</a>',
              sv: 'Om ni vill ha en karta, aktuell information om promenader eller vandringar eller bara ett snabbt lokalt svar innan ni går ut, är turistbyrån bästa stället att fråga på i Nerja.<br><br>Den är särskilt användbar om ni planerar en vandring eller vill ha uppdaterad lokal information i stället för att bara lita på allmän information på nätet.<br><br>• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Oficina+de+Turismo+Nerja" target="_blank" rel="noopener"><strong>Turistbyrå Nerja</strong></a><br>Plaza Balcón de Europa, 1<br><a class="am-link" href="tel:+34952521531">Ring: +34 952 52 15 31</a>'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Mobility',
        de: 'Fortbewegung',
        es: 'Transporte',
        nl: 'Vervoer',
        sv: 'Transport'
      },
      items: [
        {
          icon: 'car',
          title: { en: 'Taxi', de: 'Taxi', es: 'Taxi', nl: 'Taxi', sv: 'Taxi' },
          body: [
            {
              en: 'In Nerja, we still recommend arranging taxis a little in advance rather than expecting one to be nearby at any time.<br><br>This is especially helpful for dinner reservations out of town, early departures, evening returns, or airport days.',
              de: 'In Nerja würden wir ebenfalls empfehlen, Taxis lieber etwas im Voraus zu organisieren, statt darauf zu setzen, dass jederzeit spontan eines in der Nähe ist.<br><br>Das ist besonders sinnvoll für Restaurantbesuche außerhalb, frühe Abfahrten, spätere Rückfahrten oder Flughafentage.',
              es: 'En Nerja, os seguimos recomendando organizar el taxi con algo de antelación en lugar de contar con que siempre haya uno cerca en cualquier momento.<br><br>Esto es especialmente útil para cenas fuera del centro, salidas tempranas, regresos por la noche o días de aeropuerto.',
              nl: 'Ook in Nerja raden we aan om een taxi liever iets van tevoren te regelen dan te verwachten dat er op elk moment direct eentje in de buurt is.<br><br>Dat is vooral handig voor etentjes buiten het centrum, vroege vertrekken, latere terugritten of luchthavendagen.',
              sv: 'Även i Nerja rekommenderar vi att ordna taxi lite i förväg i stället för att räkna med att en bil alltid finns i närheten.<br><br>Det är särskilt hjälpsamt för middagsbokningar utanför stan, tidiga avresor, sena hemresor eller flygplatsdagar.'
            },
            {
              en: '<strong>Local taxi contacts</strong>',
              de: '<strong>Lokale Taxi-Kontakte</strong>',
              es: '<strong>Contactos de taxi locales</strong>',
              nl: '<strong>Lokale taxicontacten</strong>',
              sv: '<strong>Lokala taxikontakter</strong>'
            },
            {
              en: '• <strong>Radio Taxis Nerja</strong> – good option for local rides and airport transfers<br><a class="am-link" href="tel:+34952520537">Call +34 952 52 05 37</a>',
              de: '• <strong>Radio Taxis Nerja</strong> – gute Option für lokale Fahrten und Flughafentransfers<br><a class="am-link" href="tel:+34952520537">Anrufen: +34 952 52 05 37</a>',
              es: '• <strong>Radio Taxis Nerja</strong> – buena opción para trayectos locales y traslados al aeropuerto<br><a class="am-link" href="tel:+34952520537">Llamar: +34 952 52 05 37</a>',
              nl: '• <strong>Radio Taxis Nerja</strong> – goede optie voor lokale ritten en luchthaventransfers<br><a class="am-link" href="tel:+34952520537">Bellen: +34 952 52 05 37</a>',
              sv: '• <strong>Radio Taxis Nerja</strong> – bra alternativ för lokala resor och flygplatstransfer<br><a class="am-link" href="tel:+34952520537">Ring: +34 952 52 05 37</a>'
            },
            {
              en: '• <strong>Taxi Nerja 21</strong> – useful if you need a reliable alternative or a longer transfer<br><a class="am-link" href="tel:+34610795909">Call +34 610 795 909</a>',
              de: '• <strong>Taxi Nerja 21</strong> – sinnvoll, wenn ihr eine zuverlässige Alternative oder einen längeren Transfer braucht<br><a class="am-link" href="tel:+34610795909">Anrufen: +34 610 795 909</a>',
              es: '• <strong>Taxi Nerja 21</strong> – útil si necesitáis una alternativa fiable o un traslado más largo<br><a class="am-link" href="tel:+34610795909">Llamar: +34 610 795 909</a>',
              nl: '• <strong>Taxi Nerja 21</strong> – handig als jullie een betrouwbaar alternatief of een langere transfer nodig hebben<br><a class="am-link" href="tel:+34610795909">Bellen: +34 610 795 909</a>',
              sv: '• <strong>Taxi Nerja 21</strong> – bra om ni behöver ett pålitligt alternativ eller en längre transfer<br><a class="am-link" href="tel:+34610795909">Ring: +34 610 795 909</a>'
            },
            {
              en: 'For airport runs or larger groups, booking ahead is especially worth it.',
              de: 'Für Flughafentransfers oder größere Gruppen lohnt sich eine vorherige Reservierung ganz besonders.',
              es: 'Para traslados al aeropuerto o grupos más grandes, merece especialmente la pena reservar con antelación.',
              nl: 'Voor luchthaventransfers of grotere groepen is vooraf reserveren extra aan te raden.',
              sv: 'För flygplatstransfer eller större grupper är det särskilt bra att boka i förväg.'
            }
          ]
        },
        {
          icon: 'car',
          title: { en: 'Rental Car', de: 'Mietwagen', es: 'Coche de alquiler', nl: 'Huurauto', sv: 'Hyrbil' },
          body: [
            {
              en: 'If you would like a rental car during your stay, you are already in the most practical hub: <strong>Nerja</strong> itself.<br><br>For most guests, we would suggest one of two simple options: <strong>pick up locally here in Nerja</strong> if you only want the car for part of your stay, or <strong>rent directly at Málaga Airport</strong> if you want the widest choice.',
              de: 'Wenn ihr während eures Aufenthalts einen Mietwagen möchtet, seid ihr bereits am praktischsten Ausgangspunkt: <strong>Nerja</strong> selbst.<br><br>Für die meisten Gäste würden wir zwei einfache Optionen empfehlen: <strong>lokale Abholung hier in Nerja</strong>, wenn ihr das Auto nur für einen Teil des Aufenthalts braucht, oder <strong>direkt am Flughafen Málaga mieten</strong>, wenn ihr die größte Auswahl möchtet.',
              es: 'Si queréis un coche de alquiler durante vuestra estancia, ya estáis en el punto más práctico: el propio <strong>Nerja</strong>.<br><br>Para la mayoría de los huéspedes, recomendaríamos dos opciones sencillas: <strong>recogerlo aquí mismo en Nerja</strong> si solo necesitáis el coche para una parte de la estancia, o <strong>alquilarlo directamente en el aeropuerto de Málaga</strong> si queréis más variedad.',
              nl: 'Als jullie tijdens het verblijf een huurauto willen, zijn jullie al op de meest praktische plek: <strong>Nerja</strong> zelf.<br><br>Voor de meeste gasten zouden we twee eenvoudige opties aanraden: <strong>lokaal ophalen hier in Nerja</strong> als jullie de auto maar voor een deel van het verblijf nodig hebben, of <strong>direct huren op de luchthaven van Málaga</strong> als jullie de grootste keuze willen.',
              sv: 'Om ni vill ha en hyrbil under vistelsen befinner ni er redan på den mest praktiska platsen: själva <strong>Nerja</strong>.<br><br>För de flesta gäster skulle vi rekommendera två enkla alternativ: <strong>hämta bilen lokalt här i Nerja</strong> om ni bara behöver den under en del av vistelsen, eller <strong>hyra direkt på Málaga flygplats</strong> om ni vill ha störst utbud.'
            },
            {
              en: '<strong>Local option in Nerja</strong>',
              de: '<strong>Lokale Option in Nerja</strong>',
              es: '<strong>Opción local en Nerja</strong>',
              nl: '<strong>Lokale optie in Nerja</strong>',
              sv: '<strong>Lokalt alternativ i Nerja</strong>'
            },
            {
              en: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> – practical if you want a proper town pickup point.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              de: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> – praktisch, wenn ihr einen klassischen Abholpunkt in der Stadt möchtet.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              es: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> – práctico si queréis un punto de recogida claro en el pueblo.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Página web</a>',
              nl: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> – praktisch als jullie een echt afhaalpunt in de stad zelf willen.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Website</a>',
              sv: '• <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Europcar+Nerja+Edificio+Toboso+II" target="_blank" rel="noopener"><strong>Europcar Nerja</strong></a> – praktiskt om ni vill ha en tydlig upphämtningsplats i själva staden.<br><a class="am-link" href="https://www.europcar.com/en-us/places/car-rental-spain/nerja/nerja" target="_blank" rel="noopener">Webbplats</a>'
            },
            {
              en: '<strong>Convenient delivery-style options around Nerja</strong><br><br>If you prefer something more flexible, there are also local providers in the Nerja area that work with <strong>hotel / apartment delivery</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              de: '<strong>Praktische Delivery-Optionen rund um Nerja</strong><br><br>Wenn ihr es etwas flexibler möchtet, gibt es in der Nerja-Region auch lokale Anbieter mit <strong>Hotel- / Apartment-Lieferung</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              es: '<strong>Opciones prácticas con entrega en la zona de Nerja</strong><br><br>Si preferís algo más flexible, en la zona de Nerja también hay proveedores locales que trabajan con <strong>entrega en hotel o apartamento</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              nl: '<strong>Handige delivery-opties rond Nerja</strong><br><br>Als jullie iets flexibelers willen, zijn er in de regio Nerja ook lokale aanbieders met <strong>levering bij hotel of appartement</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>',
              sv: '<strong>Praktiska leveransalternativ runt Nerja</strong><br><br>Om ni föredrar något mer flexibelt finns det också lokala aktörer i Nerja-området som erbjuder <strong>leverans till hotell eller lägenhet</strong>:<br><br>• <a class="am-link" href="https://carhirenerja.com/" target="_blank" rel="noopener"><strong>Lessaggro Car Hire Nerja</strong></a><br><br>• <a class="am-link" href="https://bahiasexirentacar.com/rent-a-car-in-nerja/" target="_blank" rel="noopener"><strong>Bahia Sexi Rent a Car</strong></a>'
            },
            {
              en: '<strong>Best choice for the widest selection</strong>',
              de: '<strong>Beste Wahl für die größte Auswahl</strong>',
              es: '<strong>La mejor opción para tener más variedad</strong>',
              nl: '<strong>Beste keuze voor de grootste selectie</strong>',
              sv: '<strong>Bästa valet för störst utbud</strong>'
            },
            {
              en: 'If you are arriving by plane, <strong>Málaga Airport (AGP)</strong> usually gives you the easiest overall choice because several major rental brands operate there in one place.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Málaga Airport car hire overview</a>',
              de: 'Wenn ihr mit dem Flugzeug anreist, ist <strong>Flughafen Málaga (AGP)</strong> meistens die einfachste Gesamtlösung, weil dort mehrere große Anbieter an einem Ort vertreten sind.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Übersicht Mietwagen am Flughafen Málaga</a>',
              es: 'Si llegáis en avión, <strong>el aeropuerto de Málaga (AGP)</strong> suele ser la opción más sencilla en conjunto, porque allí operan varias grandes compañías en un mismo lugar.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Resumen de alquiler de coches en el aeropuerto de Málaga</a>',
              nl: 'Als jullie met het vliegtuig aankomen, is <strong>Málaga Airport (AGP)</strong> meestal de makkelijkste totaaloptie, omdat daar meerdere grote verhuurbedrijven op één plek zitten.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Overzicht huurauto\'s op Málaga Airport</a>',
              sv: 'Om ni anländer med flyg är <strong>Málaga flygplats (AGP)</strong> oftast det enklaste helhetsalternativet eftersom flera stora uthyrningsfirmor finns där på samma plats.<br><br><a class="am-link" href="https://www.aena.es/en/malaga-costa-del-sol/airport-services/car-hire.html" target="_blank" rel="noopener">Översikt över hyrbilar på Málaga flygplats</a>'
            },
            {
              en: '<em>Good to know:</em> In this area, booking a little ahead is usually worth it — especially for automatic cars, larger vehicles, or airport arrival days.',
              de: '<em>Gut zu wissen:</em> In dieser Region lohnt sich eine Buchung mit etwas Vorlauf meistens — besonders für Automatik, größere Fahrzeuge oder Ankunftstage am Flughafen.',
              es: '<em>Conviene saber:</em> En esta zona normalmente merece la pena reservar con algo de antelación, sobre todo si buscáis coche automático, vehículo grande o recogida en día de llegada al aeropuerto.',
              nl: '<em>Goed om te weten:</em> In deze regio is iets eerder boeken meestal verstandig — vooral voor automaat, grotere auto\'s of afhalen op een aankomstdag op de luchthaven.',
              sv: '<em>Bra att veta:</em> I den här regionen lönar det sig oftast att boka lite i förväg — särskilt för automatbil, större fordon eller upphämtning på ankomstdagar till flygplatsen.'
            }
          ]
        },
        {
          icon: 'bus',
          title: {
            en: 'Bus Connections',
            de: 'Busverbindungen',
            es: 'Conexiones de autobús',
            nl: 'Busverbindingen',
            sv: 'Bussförbindelser'
          },
          body: [
            {
              en: 'Nerja is connected by regular bus service to Frigiliana and Málaga. Schedules may vary depending on season and weekday.',
              de: 'Nerja ist durch regelmäßige Buslinien mit Frigiliana und Málaga verbunden. Die Fahrpläne können je nach Jahreszeit und Wochentag variieren.',
              es: 'Nerja está conectada con Frigiliana y Málaga mediante un servicio regular de autobuses. Los horarios pueden variar según la temporada y el día de la semana.',
              nl: 'Nerja is door een regelmatige busdienst verbonden met Frigiliana en Málaga. De dienstregeling kan variëren afhankelijk van het seizoen en de dag van de week.',
              sv: 'Nerja har regelbunden busstrafik till Frigiliana och Málaga. Tidtabellerna kan variera beroende på säsong och veckodag.'
            },
            {
              en: '<strong>Frigiliana ↔ Nerja</strong><br>Travel time: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Operator / Timetables</a>',
              de: '<strong>Frigiliana ↔ Nerja</strong><br>Fahrzeit: 15–20 Min.<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Anbieter / Fahrpläne</a>',
              es: '<strong>Frigiliana ↔ Nerja</strong><br>Tiempo de viaje: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Compañía / Horarios</a>',
              nl: '<strong>Frigiliana ↔ Nerja</strong><br>Reistijd: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Vervoerder / Dienstregeling</a>',
              sv: '<strong>Frigiliana ↔ Nerja</strong><br>Restid: 15–20 min<br><a class="am-link" href="https://frigiliana.es/horario-autobuses/" target="_blank" rel="noopener">Operatör / Tidtabeller</a>'
            },
            {
              en: '<strong>Nerja ↔ Málaga / Airport (AGP)</strong><br>Travel time: approx. 1h 30m / 2h 00m<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Operator / Timetables</a>',
              de: '<strong>Nerja ↔ Málaga / Flughafen (AGP)</strong><br>Fahrzeit: ca. 1 Std. 30 Min. / 2 Std. 00 Min.<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Anbieter / Fahrpläne</a>',
              es: '<strong>Nerja ↔ Málaga / Aeropuerto (AGP)</strong><br>Tiempo de viaje: aprox. 1h 30m / 2h 00m<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Compañía / Horarios</a>',
              nl: '<strong>Nerja ↔ Málaga / Luchthaven (AGP)</strong><br>Reistijd: ca. 1 uur 30 min / 2 uur 00 min<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Vervoerder / Dienstregeling</a>',
              sv: '<strong>Nerja ↔ Málaga / Flygplats (AGP)</strong><br>Restid: ca 1 tim 30 min / 2 tim 00 min<br><a class="am-link" href="https://www.alsa.es/" target="_blank" rel="noopener">Operatör / Tidtabeller</a>'
            }
          ]
        },
        {
          icon: 'car',
          title: {
            en: 'Uber & Ride-Sharing',
            de: 'Uber & Ride-Sharing',
            es: 'Uber y VTC',
            nl: 'Uber & Ride-Sharing',
            sv: 'Uber & Samåkning'
          },
          body: [
            {
              en: 'Uber can work in the region, but in <strong>Nerja</strong> we would not treat it as the most reliable main plan.<br><br>If a car appears in the app, that is great — but if not, that is not unusual here. For fixed plans, especially dinners out, early departures, or airport days, a <strong>pre-arranged taxi</strong> is usually the safer option.',
              de: 'Uber kann in der Region funktionieren, aber in <strong>Nerja</strong> würden wir es nicht als verlässlichste Hauptlösung einplanen.<br><br>Wenn in der App direkt ein Auto erscheint, ist das natürlich gut — wenn nicht, ist das hier nicht ungewöhnlich. Für feste Pläne, besonders für Abendessen, frühe Abfahrten oder Flughafentage, ist ein <strong>vorab organisiertes Taxi</strong> meistens die sicherere Lösung.',
              es: 'Uber puede funcionar en la zona, pero en <strong>Nerja</strong> no lo consideraríamos como la opción principal más fiable.<br><br>Si aparece un coche en la app, perfecto; pero si no aparece, aquí eso no es raro. Para planes fijos, sobre todo cenas, salidas tempranas o días de aeropuerto, normalmente es más seguro organizar un <strong>taxi con antelación</strong>.',
              nl: 'Uber kan in de regio werken, maar in <strong>Nerja</strong> zouden we het niet als de betrouwbaarste hoofdoplossing zien.<br><br>Als er meteen een auto in de app verschijnt, is dat mooi meegenomen — maar als dat niet zo is, is dat hier niet ongewoon. Voor vaste plannen, vooral etentjes, vroege vertrekken of luchthavendagen, is een <strong>vooraf geregelde taxi</strong> meestal de veiligere keuze.',
              sv: 'Uber kan fungera i regionen, men i <strong>Nerja</strong> skulle vi inte se det som den mest pålitliga huvudlösningen.<br><br>Om en bil dyker upp direkt i appen är det förstås bra — men om ingen bil visas är det inte ovanligt här. För fasta planer, särskilt middagar, tidiga avresor eller flygplatsdagar, är en <strong>förbokad taxi</strong> oftast det säkrare valet.'
            }
          ]
        }
      ]
    },
    {
      heading: {
        en: 'Medical',
        de: 'Medizinische Hilfe',
        es: 'Asistencia médica',
        nl: 'Medisch',
        sv: 'Sjukvård'
      },
      items: [
        {
          icon: 'warning',
          title: {
            en: 'Medical emergency – Call 061 or 112',
            de: 'Medizinischer Notfall – 061 oder 112 anrufen',
            es: 'Emergencia médica – Llamad al 061 o al 112',
            nl: 'Medisch noodgeval – Bel 061 of 112',
            sv: 'Medicinsk nödsituation – Ring 061 eller 112'
          },
          body: [
            {
              en: '<strong>Life-threatening medical emergency:</strong> call <strong>061</strong>. For any general emergency in Spain, call <strong>112</strong>. For urgent medical help without immediate danger to life in Málaga province, call <strong>+34 951 03 14 37</strong>.',
              de: '<strong>Lebensbedrohlicher medizinischer Notfall:</strong> Wählt <strong>061</strong>. Für allgemeine Notfälle in Spanien wählt ihr <strong>112</strong>. Für dringende medizinische Hilfe ohne unmittelbare Lebensgefahr in der Provinz Málaga ruft ihr <strong>+34 951 03 14 37</strong> an.',
              es: '<strong>Emergencia médica con riesgo vital:</strong> llamad al <strong>061</strong>. Para cualquier emergencia general en España, llamad al <strong>112</strong>. Para asistencia médica urgente sin riesgo vital inmediato en la provincia de Málaga, llamad al <strong>+34 951 03 14 37</strong>.',
              nl: '<strong>Levensbedreigende medische noodsituatie:</strong> bel <strong>061</strong>. Voor algemene noodgevallen in Spanje bellen jullie <strong>112</strong>. Voor dringende medische hulp zonder direct levensgevaar in de provincie Málaga bellen jullie <strong>+34 951 03 14 37</strong>.',
              sv: '<strong>Livshotande medicinsk nödsituation:</strong> ring <strong>061</strong>. För allmänna nödsituationer i Spanien ringer ni <strong>112</strong>. För brådskande medicinsk hjälp utan omedelbar livsfara i Málagaprovinsen ringer ni <strong>+34 951 03 14 37</strong>.'
            },
            {
              en: '<strong>If the emergency happens while you are inside the house:</strong><br>Please share this address with emergency services:<br><strong>Calle Castilla Pérez 60<br>Apartment 5-2<br>29780 Nerja</strong>',
              de: '<strong>Wenn der Notfall eintritt, während ihr im Haus seid:</strong><br>Bitte gebt den Rettungskräften diese Adresse durch:<br><strong>Calle Castilla Pérez 60<br>Apartment 5-2<br>29780 Nerja</strong>',
              es: '<strong>Si la emergencia ocurre mientras estáis dentro de la casa:</strong><br>Facilitad esta dirección a los servicios de emergencia:<br><strong>Calle Castilla Pérez 60<br>Apartment 5-2<br>29780 Nerja</strong>',
              nl: '<strong>Als het noodgeval plaatsvindt terwijl jullie in het huis zijn:</strong><br>Geef dit adres door aan de hulpdiensten:<br><strong>Calle Castilla Pérez 60<br>Apartment 5-2<br>29780 Nerja</strong>',
              sv: '<strong>Om nödsituationen inträffar medan ni är i huset:</strong><br>Uppge den här adressen till räddningstjänsten:<br><strong>Calle Castilla Pérez 60<br>Apartment 5-2<br>29780 Nerja</strong>'
            }
          ]
        },
        {
          icon: 'medical',
          title: {
            en: 'Centro de Salud Nerja',
            de: 'Centro de Salud Nerja',
            es: 'Centro de Salud Nerja',
            nl: 'Centro de Salud Nerja',
            sv: 'Centro de Salud Nerja'
          },
          body: [
            {
              en: 'For non-emergency public medical care, use <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, about <strong>10 minutes on foot</strong>.',
              de: 'Für öffentliche medizinische Hilfe ohne Notfall nutzt ihr das <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, etwa <strong>10 Minuten zu Fuß entfernt</strong>.',
              es: 'Para atención médica pública sin emergencia, acudid al <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, a unos <strong>10 minutos a pie</strong>.',
              nl: 'Voor openbare medische zorg zonder noodgeval gaan jullie naar <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, op ongeveer <strong>10 minuten lopen</strong>.',
              sv: 'För offentlig vård utan nödläge använder ni <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Nerja" target="_blank" rel="noopener"><strong>Centro de Salud Nerja</strong></a>, cirka <strong>10 minuter till fots</strong>.'
            },
            {
              en: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              de: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              es: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              nl: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>',
              sv: '<strong>C. Carlos Millón, s/n<br>29780 Nerja, Málaga</strong>'
            },
            {
              en: '<strong>Centre:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / appointments:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>The current SAS directory lists the centre as open throughout Monday to Friday. Services and hours can change, so call before travelling outside normal daytime hours or at a weekend.',
              de: '<strong>Zentrum:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / Termine:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>Das aktuelle SAS-Verzeichnis führt das Zentrum montags bis freitags durchgehend geöffnet. Servicezeiten können sich ändern; ruft deshalb vor einem Weg außerhalb der üblichen Tageszeiten oder am Wochenende an.',
              es: '<strong>Centro:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / citas:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>El directorio actual del SAS muestra el centro abierto de forma continuada de lunes a viernes. Los servicios y horarios pueden cambiar; llamad antes de desplazaros fuera del horario diurno habitual o durante el fin de semana.',
              nl: '<strong>Centrum:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / afspraken:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>In de actuele SAS-gids staat het centrum van maandag tot en met vrijdag doorlopend als geopend vermeld. Diensten en openingstijden kunnen veranderen; bel daarom vóór een bezoek buiten normale uren overdag of in het weekend.',
              sv: '<strong>Vårdcentralen:</strong> <a class="am-link" href="tel:+34951289662">+34 951 28 96 62</a><br><strong>Salud Responde / tidsbokning:</strong> <a class="am-link" href="tel:+34955545060">+34 955 54 50 60</a><br><br>I SAS aktuella register anges vårdcentralen som öppen hela måndag till fredag. Tjänster och öppettider kan ändras; ring därför före ett besök utanför normala dagtider eller på helgen.'
            }
          ]
        },
        {
          icon: 'pharmacy',
          title: { en: 'Pharmacy', de: 'Apotheke', es: 'Farmacia', nl: 'Apotheek', sv: 'Apotek' },
          body: [
            {
              en: 'For everyday medicine or small essentials, we recommend starting with the <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Nerja" target="_blank" rel="noopener"><strong>pharmacy on Calle Castilla Pérez</strong></a>.<br><br>If it is closed, look for the notice saying <em>“Farmacia de guardia”</em> — that tells you which pharmacy is currently on duty. If something feels more urgent, it is better not to wait too long and use medical assistance instead.',
              de: 'Für alltägliche Medikamente oder kleine Dinge würden wir euch empfehlen, zuerst die <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Nerja" target="_blank" rel="noopener"><strong>Apotheke in der Calle Castilla Pérez</strong></a> zu nutzen.<br><br>Falls sie geschlossen ist, achtet auf den Hinweis <em>„Farmacia de guardia“</em> — dort steht, welche Apotheke gerade Notdienst hat. Wenn etwas dringlicher wirkt, lieber nicht zu lange warten und stattdessen medizinische Hilfe nutzen.',
              es: 'Para medicinas básicas o pequeñas necesidades, os recomendamos empezar por la <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Nerja" target="_blank" rel="noopener"><strong>farmacia de la Calle Castilla Pérez</strong></a>.<br><br>Si está cerrada, buscad el aviso <em>“Farmacia de guardia”</em>, donde se indica qué farmacia está de guardia en ese momento. Si parece algo más urgente, es mejor no esperar demasiado y usar asistencia médica.',
              nl: 'Voor gewone medicijnen of kleine benodigdheden raden we aan om eerst de <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Nerja" target="_blank" rel="noopener"><strong>apotheek in Calle Castilla Pérez</strong></a> te proberen.<br><br>Als die gesloten is, let dan op de melding <em>“Farmacia de guardia”</em>; daar staat welke apotheek op dat moment dienst heeft. Als het dringender aanvoelt, is het beter niet te lang te wachten en medische hulp te gebruiken.',
              sv: 'För vanliga mediciner eller småsaker rekommenderar vi att ni börjar med <a class="am-link" href="https://www.google.com/maps/search/?api=1&query=Farmacia+Nerja" target="_blank" rel="noopener"><strong>apoteket på Calle Castilla Pérez</strong></a>.<br><br>Om det är stängt ska ni leta efter skylten <em>“Farmacia de guardia”</em>; där står vilket apotek som har jour just då. Om något känns mer brådskande är det bättre att inte vänta för länge utan använda medicinsk hjälp.'
            },
            {
              en: 'Pharmacies are marked with illuminated green crosses, and duty pharmacy information is posted on every pharmacy door.',
              de: 'Apotheken erkennt ihr an den leuchtend grünen Kreuzen. Informationen zur Notdienstapotheke hängen an jeder Apothekentür aus.',
              es: 'Las farmacias están señalizadas con cruces verdes luminosas, y la información sobre la farmacia de guardia está expuesta en la puerta de cada farmacia.',
              nl: 'Apotheken zijn te herkennen aan verlichte groene kruisen, en informatie over de dienstdoende apotheek hangt op de deur van elke apotheek.',
              sv: 'Apotek är markerade med upplysta gröna kors, och information om jourhavande apotek sitter på varje apoteksdörr.'
            }
          ]
        }
      ]
    }
  ]
};

export const guestGuideFrigiliana: GuestGuideEntry[] = [
  frigilianaFarahHub,
  frigilianaFarahAccommodation,
  frigilianaLounisHub,
  frigilianaLounisAccommodation,
  frigilianaZaidHub,
  frigilianaZaidAccommodation,
  frigilianaMahaHub,
  frigilianaMahaAccommodation,
  nerjaPlayaHub,
  nerjaPlayaAccommodation,
  nerjaEssentials,
  frigilianaEssentials,
  frigilianaRecommendations,
  ...recommendationSubPages
];
