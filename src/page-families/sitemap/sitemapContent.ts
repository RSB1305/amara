/**
 * AMARA site map (Seitenübersicht) — content model.
 *
 * A user-facing orientation page and internal-link hub. It never declares its
 * own paths: every link resolves its href from the public route manifest via
 * `buildPublicRoutePath`, so the list can never drift from the real URLs. This
 * module owns the localized anchor labels, the clustering and the hierarchy.
 *
 * SEO/GEO design (2026-09-10 architecture pass):
 * - Anchors are qualified with their entity so each is unambiguous in isolation
 *   (place names are composed into the label per locale — DRY, no hand-repeat).
 * - Clusters mirror the page-type separation: Type C (brand & trust),
 *   Type D (booking & stays), and one card per location that separates
 *   Type A (location & essentials) from Type B (explore & guides).
 * - The tree nesting matches the URL hierarchy 1:1, so kitesurfing sits *under*
 *   experiences (Tarifa → experiences → kitesurfing → spots), not beside it.
 *
 * Only indexable public pages are listed; the gated Guest Guide, the noindex
 * availability search and the private arrival-directions pages are left out.
 */
import { buildPublicRoutePath } from '../../lib/publicRouteManifest.mjs';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../../types/seo';

type L = Record<AmaraLanguage, string>;
/** A label that composes the place entity into every locale (e.g. "Getting to Nerja"). */
type LabelFn = (place: string) => L;

/** A fixed label (place already baked in, or none needed). Identity for readability. */
const stat = (label: L): L => label;

/* ---------------------------------------------------------------------------
   Entity-qualified label atoms. Repeated across the three destinations, so the
   place name is composed once per locale and reused — this is the DRY source
   of the qualified anchors.
--------------------------------------------------------------------------- */
const locationOverview: LabelFn = (p) => ({ de: `${p} im Überblick`, en: `${p} overview`, es: `${p} de un vistazo`, nl: `${p} in het kort`, sv: `${p} i korthet` });
const staysInPlace: LabelFn = (p) => ({ de: `Unterkünfte in ${p}`, en: `Stays in ${p}`, es: `Alojamientos en ${p}`, nl: `Verblijven in ${p}`, sv: `Boenden i ${p}` });
const experiencesInPlace: LabelFn = (p) => ({ de: `Erlebnisse in ${p}`, en: `Things to do in ${p}`, es: `Qué hacer en ${p}`, nl: `Wat te doen in ${p}`, sv: `Att göra i ${p}` });
const kitesurfInPlace: LabelFn = (p) => ({ de: `Kitesurfen in ${p}`, en: `Kitesurfing in ${p}`, es: `Kitesurf en ${p}`, nl: `Kitesurfen in ${p}`, sv: `Kitesurfing i ${p}` });

const arrival: LabelFn = (p) => ({ de: `Anreise nach ${p}`, en: `Getting to ${p}`, es: `Cómo llegar a ${p}`, nl: `Naar ${p} reizen`, sv: `Hitta till ${p}` });
const parking: LabelFn = (p) => ({ de: `Parken in ${p}`, en: `Parking in ${p}`, es: `Aparcamiento en ${p}`, nl: `Parkeren in ${p}`, sv: `Parkering i ${p}` });
const whereToStay: LabelFn = (p) => ({ de: `Wo übernachten in ${p} – Lagen`, en: `Where to stay in ${p}: areas`, es: `Dónde alojarse en ${p}: zonas`, nl: `Waar overnachten in ${p}: gebieden`, sv: `Var man bor i ${p}: områden` });
const weather: LabelFn = (p) => ({ de: `Wetter in ${p}`, en: `${p} weather`, es: `Clima en ${p}`, nl: `Weer in ${p}`, sv: `Väder i ${p}` });
const winter: LabelFn = (p) => ({ de: `Überwintern in ${p}`, en: `Winter in ${p}`, es: `Invierno en ${p}`, nl: `Overwinteren in ${p}`, sv: `Övervintra i ${p}` });
const supermarkets: LabelFn = (p) => ({ de: `Supermärkte in ${p}`, en: `Supermarkets in ${p}`, es: `Supermercados en ${p}`, nl: `Supermarkten in ${p}`, sv: `Matbutiker i ${p}` });
const health: LabelFn = (p) => ({ de: `Ärzte & Notfall in ${p}`, en: `Doctors & emergencies in ${p}`, es: `Médicos y urgencias en ${p}`, nl: `Artsen & noodgevallen in ${p}`, sv: `Läkare & akut i ${p}` });
const beaches: LabelFn = (p) => ({ de: `Strände in ${p}`, en: `${p} beaches`, es: `Playas de ${p}`, nl: `Stranden in ${p}`, sv: `Stränder i ${p}` });
const dayTrips: LabelFn = (p) => ({ de: `Ausflüge ab ${p}`, en: `Day trips from ${p}`, es: `Excursiones desde ${p}`, nl: `Dagtrips vanuit ${p}`, sv: `Dagsutflykter från ${p}` });

/** Branch heading for the Type-A logistics cluster inside a location card. */
const locationEssentials: L = { de: 'Ort & Praktisches', en: 'Location & essentials', es: 'El lugar y lo práctico', nl: 'Plaats & praktisch', sv: 'Plats & praktiskt' };

/* ---------------------------------------------------------------------------
   Types. A branch may itself carry branches, so the tree can nest as deeply as
   the URL hierarchy (Tarifa → experiences → kitesurfing → spots).
--------------------------------------------------------------------------- */
/** Labels are pre-resolved to L at authoring time (the place is known there). */
type Item = { key: string; label: L };
type Branch = { label: L; place?: string; key?: string; items: Item[]; branches?: Branch[] };
type Group = { id: string; title: L; blurb: L; place?: string; items: Item[]; branches: Branch[] };

const PLACES = { frigiliana: 'Frigiliana', nerja: 'Nerja', tarifa: 'Tarifa' } as const;

/* ---------------------------------------------------------------------------
   The clusters, in reading order.
--------------------------------------------------------------------------- */
const GROUPS: Group[] = [
  /* ===== Type C — Brand & trust ===== */
  {
    id: 'brand',
    title: { de: 'AMARA & Vertrauen', en: 'AMARA & trust', es: 'AMARA y confianza', nl: 'AMARA & vertrouwen', sv: 'AMARA & förtroende' },
    blurb: { de: 'Wer wir sind, warum Gäste uns vertrauen und alle rechtlichen Infos.', en: 'Who we are, why guests trust us and all the legal information.', es: 'Quiénes somos, por qué confían los huéspedes y toda la información legal.', nl: 'Wie we zijn, waarom gasten ons vertrouwen en alle juridische info.', sv: 'Vilka vi är, varför gäster litar på oss och all juridisk information.' },
    place: '',
    items: [
      { key: 'home', label: stat({ de: 'Startseite', en: 'Home', es: 'Inicio', nl: 'Home', sv: 'Hem' }) },
      { key: 'about', label: stat({ de: 'Über uns', en: 'About us', es: 'Sobre nosotros', nl: 'Over ons', sv: 'Om oss' }) },
      { key: 'about.reviews', label: stat({ de: 'Gästestimmen', en: 'Guest reviews', es: 'Opiniones de huéspedes', nl: 'Gastenbeoordelingen', sv: 'Gästrecensioner' }) },
      { key: 'about.amenities', label: stat({ de: 'Ausstattung', en: 'Amenities', es: 'Comodidades', nl: 'Voorzieningen', sv: 'Bekvämligheter' }) },
      { key: 'about.faq', label: stat({ de: 'Häufige Fragen', en: 'FAQ', es: 'Preguntas frecuentes', nl: 'Veelgestelde vragen', sv: 'Vanliga frågor' }) },
      { key: 'amara-experience', label: stat({ de: 'AMARA Gästeguide', en: 'AMARA Guest Guide', es: 'Guía del huésped AMARA', nl: 'AMARA Gastengids', sv: 'AMARA Gästguide' }) },
      { key: 'frigiliana.property-for-sale', label: stat({ de: 'Immobilie in Frigiliana kaufen', en: 'Buy property in Frigiliana', es: 'Comprar casa en Frigiliana', nl: 'Vastgoed kopen in Frigiliana', sv: 'Köpa fastighet i Frigiliana' }) },
      { key: 'legal-notice', label: stat({ de: 'Impressum & Datenschutz', en: 'Legal notice & privacy', es: 'Aviso legal y privacidad', nl: 'Juridische informatie & privacy', sv: 'Juridisk information & integritet' }) },
      { key: 'booking-terms', label: stat({ de: 'Buchungsbedingungen', en: 'Booking terms', es: 'Condiciones de reserva', nl: 'Boekingsvoorwaarden', sv: 'Bokningsvillkor' }) }
    ],
    branches: []
  },

  /* ===== Type D — Booking & stays ===== */
  {
    id: 'booking',
    title: { de: 'Buchen & Unterkünfte', en: 'Booking & stays', es: 'Reservar y alojamientos', nl: 'Boeken & verblijven', sv: 'Boka & boenden' },
    blurb: { de: 'Direkt buchen und alle Unterkünfte nach Ort und Anlass.', en: 'Book directly and every stay by place and occasion.', es: 'Reserva directa y todos los alojamientos por lugar y ocasión.', nl: 'Rechtstreeks boeken en alle verblijven op plaats en gelegenheid.', sv: 'Boka direkt och alla boenden efter plats och tillfälle.' },
    place: '',
    items: [
      { key: 'stays', label: stat({ de: 'Alle Unterkünfte', en: 'All stays', es: 'Todos los alojamientos', nl: 'Alle verblijven', sv: 'Alla boenden' }) },
      { key: 'about.direct-booking', label: stat({ de: 'Vorteile der Direktbuchung', en: 'Direct booking benefits', es: 'Ventajas de reservar directo', nl: 'Voordelen van direct boeken', sv: 'Fördelar med att boka direkt' }) },
      { key: 'stays.last-minute', label: stat({ de: 'Last-Minute-Unterkünfte', en: 'Last-minute stays', es: 'Alojamientos de última hora', nl: 'Last-minute verblijven', sv: 'Sista minuten-boenden' }) },
      { key: 'stays.honeymoon', label: stat({ de: 'Unterkünfte für die Flitterwochen', en: 'Honeymoon stays', es: 'Alojamientos para luna de miel', nl: 'Verblijven voor de huwelijksreis', sv: 'Boenden för smekmånaden' }) },
      { key: 'stays.wedding-anniversary', label: stat({ de: 'Unterkünfte zum Hochzeitstag', en: 'Wedding-anniversary stays', es: 'Alojamientos para aniversario de boda', nl: 'Verblijven voor de trouwdag', sv: 'Boenden för bröllopsdagen' }) },
      { key: 'stays.casa-amara', label: stat({ de: 'Casa AMARA (4–8 Gäste)', en: 'Casa AMARA (4–8 guests)', es: 'Casa AMARA (4–8 huéspedes)', nl: 'Casa AMARA (4–8 gasten)', sv: 'Casa AMARA (4–8 gäster)' }) }
    ],
    branches: [
      {
        label: staysInPlace(PLACES.frigiliana), place: PLACES.frigiliana, key: 'stays.frigiliana',
        items: [
          { key: 'la-amara-farah', label: stat({ de: 'La AMARA Farah', en: 'La AMARA Farah', es: 'La AMARA Farah', nl: 'La AMARA Farah', sv: 'La AMARA Farah' }) },
          { key: 'la-amara-lounis', label: stat({ de: 'La AMARA Lounis', en: 'La AMARA Lounis', es: 'La AMARA Lounis', nl: 'La AMARA Lounis', sv: 'La AMARA Lounis' }) },
          { key: 'la-amara-zaid', label: stat({ de: 'La AMARA Zaid', en: 'La AMARA Zaid', es: 'La AMARA Zaid', nl: 'La AMARA Zaid', sv: 'La AMARA Zaid' }) },
          { key: 'la-amara-maha', label: stat({ de: 'La AMARA Maha', en: 'La AMARA Maha', es: 'La AMARA Maha', nl: 'La AMARA Maha', sv: 'La AMARA Maha' }) }
        ]
      },
      {
        label: staysInPlace(PLACES.nerja), place: PLACES.nerja, key: 'stays.nerja',
        items: [{ key: 'la-amara-playa', label: stat({ de: 'La AMARA Playa', en: 'La AMARA Playa', es: 'La AMARA Playa', nl: 'La AMARA Playa', sv: 'La AMARA Playa' }) }]
      },
      {
        label: staysInPlace(PLACES.tarifa), place: PLACES.tarifa, key: 'stays.tarifa',
        items: [{ key: 'la-amara-family-and-surf', label: stat({ de: 'La AMARA Family & Surf', en: 'La AMARA Family & Surf', es: 'La AMARA Family & Surf', nl: 'La AMARA Family & Surf', sv: 'La AMARA Family & Surf' }) }]
      }
    ]
  },

  /* ===== Frigiliana (Type A + Type B) ===== */
  {
    id: 'frigiliana',
    title: { de: 'Frigiliana', en: 'Frigiliana', es: 'Frigiliana', nl: 'Frigiliana', sv: 'Frigiliana' },
    blurb: { de: 'Das weiße Bergdorf – Anreise, Alltag und alle Erlebnisse.', en: 'The white mountain village — getting there, daily life and every experience.', es: 'El pueblo blanco de montaña: cómo llegar, el día a día y todas las experiencias.', nl: 'Het witte bergdorp — bereikbaarheid, dagelijks leven en alle ervaringen.', sv: 'Den vita bergsbyn — hitta hit, vardagsliv och alla upplevelser.' },
    place: PLACES.frigiliana,
    items: [{ key: 'frigiliana', label: locationOverview(PLACES.frigiliana) }],
    branches: [
      {
        label: locationEssentials, place: PLACES.frigiliana,
        items: [
          { key: 'frigiliana.arrival', label: arrival(PLACES.frigiliana) },
          { key: 'frigiliana.parking', label: parking(PLACES.frigiliana) },
          { key: 'frigiliana.where-to-stay', label: whereToStay(PLACES.frigiliana) },
          { key: 'frigiliana.weather', label: weather(PLACES.frigiliana) },
          { key: 'frigiliana.winter', label: winter(PLACES.frigiliana) },
          { key: 'frigiliana.supermarkets', label: supermarkets(PLACES.frigiliana) },
          { key: 'frigiliana.health', label: health(PLACES.frigiliana) },
          { key: 'frigiliana.faq', label: stat({ de: 'Häufige Fragen zu Frigiliana', en: 'Frigiliana FAQ', es: 'Preguntas frecuentes sobre Frigiliana', nl: 'Veelgestelde vragen over Frigiliana', sv: 'Vanliga frågor om Frigiliana' }) },
          { key: 'frigiliana.or-nerja', label: stat({ de: 'Frigiliana oder Nerja?', en: 'Frigiliana or Nerja?', es: '¿Frigiliana o Nerja?', nl: 'Frigiliana of Nerja?', sv: 'Frigiliana eller Nerja?' }) }
        ]
      },
      {
        label: experiencesInPlace(PLACES.frigiliana), place: PLACES.frigiliana, key: 'frigiliana.experience',
        items: [
          { key: 'frigiliana.experience.beaches', label: beaches(PLACES.frigiliana) },
          { key: 'frigiliana.experience.hiking', label: stat({ de: 'Wandern rund um Frigiliana', en: 'Hiking around Frigiliana', es: 'Senderismo en Frigiliana', nl: 'Wandelen rond Frigiliana', sv: 'Vandring runt Frigiliana' }) },
          { key: 'frigiliana.experience.restaurants', label: stat({ de: 'Restaurants in Frigiliana', en: 'Restaurants in Frigiliana', es: 'Restaurantes en Frigiliana', nl: 'Restaurants in Frigiliana', sv: 'Restauranger i Frigiliana' }) },
          { key: 'frigiliana.experience.festivals', label: stat({ de: 'Feste & Fiestas in Frigiliana', en: 'Festivals in Frigiliana', es: 'Fiestas de Frigiliana', nl: 'Feesten in Frigiliana', sv: 'Fester i Frigiliana' }) },
          { key: 'frigiliana.experience.market', label: stat({ de: 'Wochenmarkt in Frigiliana', en: 'Frigiliana weekly market', es: 'Mercadillo de Frigiliana', nl: 'Weekmarkt in Frigiliana', sv: 'Marknad i Frigiliana' }) },
          { key: 'frigiliana.experience.day-trips', label: dayTrips(PLACES.frigiliana) },
          { key: 'frigiliana.experience.wellness', label: stat({ de: 'Wellness & Spa in Frigiliana', en: 'Wellness & spa in Frigiliana', es: 'Bienestar en Frigiliana', nl: 'Wellness in Frigiliana', sv: 'Wellness i Frigiliana' }) },
          { key: 'frigiliana.experience.old-town', label: stat({ de: 'Altstadt von Frigiliana', en: 'Frigiliana old town', es: 'Casco antiguo de Frigiliana', nl: 'Oude centrum van Frigiliana', sv: 'Gamla stan i Frigiliana' }) },
          { key: 'frigiliana.experience.weddings', label: stat({ de: 'Hochzeiten in Frigiliana', en: 'Weddings in Frigiliana', es: 'Bodas en Frigiliana', nl: 'Bruiloften in Frigiliana', sv: 'Bröllop i Frigiliana' }) }
        ]
      }
    ]
  },

  /* ===== Nerja (Type A + Type B) ===== */
  {
    id: 'nerja',
    title: { de: 'Nerja', en: 'Nerja', es: 'Nerja', nl: 'Nerja', sv: 'Nerja' },
    blurb: { de: 'Der Küstenort am Balcón de Europa mit seinen Stränden und Höhlen.', en: 'The coastal town at the Balcón de Europa, with its beaches and caves.', es: 'El pueblo costero del Balcón de Europa, con sus playas y cuevas.', nl: 'De kustplaats bij de Balcón de Europa, met stranden en grotten.', sv: 'Kustorten vid Balcón de Europa, med stränder och grottor.' },
    place: PLACES.nerja,
    items: [{ key: 'nerja', label: locationOverview(PLACES.nerja) }],
    branches: [
      {
        label: locationEssentials, place: PLACES.nerja,
        items: [
          { key: 'nerja.arrival', label: arrival(PLACES.nerja) },
          { key: 'nerja.parking', label: parking(PLACES.nerja) },
          { key: 'nerja.where-to-stay', label: whereToStay(PLACES.nerja) },
          { key: 'nerja.weather', label: weather(PLACES.nerja) },
          { key: 'nerja.winter', label: winter(PLACES.nerja) },
          { key: 'nerja.supermarkets', label: supermarkets(PLACES.nerja) },
          { key: 'nerja.health', label: health(PLACES.nerja) }
        ]
      },
      {
        label: experiencesInPlace(PLACES.nerja), place: PLACES.nerja, key: 'nerja.experience',
        items: [
          { key: 'nerja.experience.beaches', label: beaches(PLACES.nerja) },
          { key: 'nerja.experience.day-trips', label: dayTrips(PLACES.nerja) },
          { key: 'nerja.experience.food', label: stat({ de: 'Essen & Trinken in Nerja', en: 'Food & drink in Nerja', es: 'Dónde comer en Nerja', nl: 'Eten & drinken in Nerja', sv: 'Mat & dryck i Nerja' }) },
          { key: 'nerja.experience.caves', label: stat({ de: 'Höhlen von Nerja', en: 'Nerja Caves', es: 'Cuevas de Nerja', nl: 'Grotten van Nerja', sv: 'Nerjagrottorna' }) },
          { key: 'nerja.experience.balcon-de-europa', label: stat({ de: 'Balcón de Europa', en: 'Balcón de Europa', es: 'Balcón de Europa', nl: 'Balcón de Europa', sv: 'Balcón de Europa' }) },
          { key: 'nerja.experience.nightlife', label: stat({ de: 'Nachtleben in Nerja', en: 'Nightlife in Nerja', es: 'Vida nocturna en Nerja', nl: 'Nachtleven in Nerja', sv: 'Nattliv i Nerja' }) },
          { key: 'nerja.experience.verano-azul', label: stat({ de: 'Verano Azul – Drehorte in Nerja', en: 'Verano Azul filming locations, Nerja', es: 'Localizaciones de Verano Azul, Nerja', nl: 'Verano Azul-filmlocaties, Nerja', sv: 'Verano Azul-inspelningsplatser, Nerja' }) }
        ]
      }
    ]
  },

  /* ===== Tarifa (Type A + Type B, with kitesurfing nested under experiences) ===== */
  {
    id: 'tarifa',
    title: { de: 'Tarifa', en: 'Tarifa', es: 'Tarifa', nl: 'Tarifa', sv: 'Tarifa' },
    blurb: { de: 'Wind, weite Strände und Kitesurfen an der Südspitze Spaniens.', en: 'Wind, wide beaches and kitesurfing at the southern tip of Spain.', es: 'Viento, playas amplias y kitesurf en el extremo sur de España.', nl: 'Wind, brede stranden en kitesurfen op de zuidpunt van Spanje.', sv: 'Vind, vidsträckta stränder och kitesurfing på Spaniens sydspets.' },
    place: PLACES.tarifa,
    items: [{ key: 'tarifa', label: locationOverview(PLACES.tarifa) }],
    branches: [
      {
        label: locationEssentials, place: PLACES.tarifa,
        items: [
          { key: 'tarifa.arrival', label: arrival(PLACES.tarifa) },
          { key: 'tarifa.parking', label: parking(PLACES.tarifa) },
          { key: 'tarifa.where-to-stay', label: whereToStay(PLACES.tarifa) },
          { key: 'tarifa.weather', label: weather(PLACES.tarifa) },
          { key: 'tarifa.winter', label: winter(PLACES.tarifa) },
          { key: 'tarifa.supermarkets', label: supermarkets(PLACES.tarifa) },
          { key: 'tarifa.health', label: health(PLACES.tarifa) }
        ]
      },
      {
        label: experiencesInPlace(PLACES.tarifa), place: PLACES.tarifa, key: 'tarifa.experience',
        items: [
          { key: 'tarifa.experience.beaches', label: beaches(PLACES.tarifa) },
          { key: 'tarifa.experience.food-evening-life', label: stat({ de: 'Essen & Ausgehen in Tarifa', en: 'Food & going out in Tarifa', es: 'Comer y salir en Tarifa', nl: 'Eten & uitgaan in Tarifa', sv: 'Mat & uteliv i Tarifa' }) },
          { key: 'tarifa.experience.old-town-history', label: stat({ de: 'Altstadt & Geschichte von Tarifa', en: 'Tarifa old town & history', es: 'Casco antiguo e historia de Tarifa', nl: 'Oude centrum & geschiedenis van Tarifa', sv: 'Gamla stan & historia i Tarifa' }) },
          { key: 'tarifa.experience.bolonia-baelo-claudia', label: stat({ de: 'Bolonia & Baelo Claudia bei Tarifa', en: 'Bolonia & Baelo Claudia near Tarifa', es: 'Bolonia y Baelo Claudia (Tarifa)', nl: 'Bolonia & Baelo Claudia bij Tarifa', sv: 'Bolonia & Baelo Claudia nära Tarifa' }) },
          { key: 'tarifa.experience.yoga', label: stat({ de: 'Yoga in Tarifa', en: 'Yoga in Tarifa', es: 'Yoga en Tarifa', nl: 'Yoga in Tarifa', sv: 'Yoga i Tarifa' }) },
          { key: 'tarifa.experience.whale-watching', label: stat({ de: 'Whale Watching in Tarifa', en: 'Whale watching in Tarifa', es: 'Avistamiento de cetáceos en Tarifa', nl: 'Walvissen spotten bij Tarifa', sv: 'Valskådning i Tarifa' }) },
          { key: 'tarifa.experience.family', label: stat({ de: 'Familienurlaub in Tarifa', en: 'Family holidays in Tarifa', es: 'Vacaciones en familia en Tarifa', nl: 'Gezinsvakantie in Tarifa', sv: 'Familjesemester i Tarifa' }) }
        ],
        branches: [
          {
            label: kitesurfInPlace(PLACES.tarifa), place: PLACES.tarifa, key: 'tarifa.kitesurfing',
            items: [
              { key: 'tarifa.kitesurfing.spots', label: stat({ de: 'Kitespots in Tarifa', en: 'Tarifa kite spots', es: 'Kitespots en Tarifa', nl: 'Kitespots in Tarifa', sv: 'Kitespots i Tarifa' }) },
              { key: 'tarifa.kitesurfing.wind', label: stat({ de: 'Wind & Sicherheit in Tarifa', en: 'Tarifa wind & safety', es: 'Viento y seguridad en Tarifa', nl: 'Wind & veiligheid in Tarifa', sv: 'Vind & säkerhet i Tarifa' }) },
              { key: 'tarifa.kitesurfing.rescue', label: stat({ de: 'Rettung & Notruf beim Kitesurfen', en: 'Kitesurf rescue & emergency', es: 'Rescate y emergencias en el kitesurf', nl: 'Redding & noodoproep bij kitesurfen', sv: 'Räddning & nödsamtal vid kitesurfing' }) },
              { key: 'tarifa.kitesurfing.school', label: stat({ de: 'Kiteschule in Tarifa', en: 'Kite school in Tarifa', es: 'Escuela de kite en Tarifa', nl: 'Kiteschool in Tarifa', sv: 'Kiteskola i Tarifa' }) },
              { key: 'tarifa.kitesurfing.kitecamp', label: stat({ de: 'Kitecamp in Tarifa', en: 'Kitecamp in Tarifa', es: 'Kitecamp en Tarifa', nl: 'Kitecamp in Tarifa', sv: 'Kitecamp i Tarifa' }) },
              { key: 'tarifa.kitesurfing.equipment', label: stat({ de: 'Kite-Material & Ausrüstung', en: 'Kite gear & equipment', es: 'Material y equipo de kite', nl: 'Kitemateriaal & uitrusting', sv: 'Kiteutrustning & material' }) },
              { key: 'tarifa.kitesurfing.bildungsurlaub', label: stat({ de: 'Kitesurf-Bildungsurlaub in Tarifa', en: 'Kitesurf Bildungsurlaub in Tarifa', es: 'Bildungsurlaub de kitesurf en Tarifa', nl: 'Kitesurf-Bildungsurlaub in Tarifa', sv: 'Kitesurf-Bildungsurlaub i Tarifa' }) },
              { key: 'tarifa.kitesurfing.surf-club', label: stat({ de: 'Tarifa Surf Club', en: 'Tarifa Surf Club', es: 'Tarifa Surf Club', nl: 'Tarifa Surf Club', sv: 'Tarifa Surf Club' }) },
              { key: 'tarifa.kitesurfing.beginner-guide', label: stat({ de: 'Kitesurfen für Anfänger in Tarifa', en: 'Kitesurfing for beginners in Tarifa', es: 'Kitesurf para principiantes en Tarifa', nl: 'Kitesurfen voor beginners in Tarifa', sv: 'Kitesurfing för nybörjare i Tarifa' }) }
            ]
          }
        ]
      }
    ]
  }
];

/* ---------------------------------------------------------------------------
   Resolution to one locale: labels picked, hrefs read from the manifest.
--------------------------------------------------------------------------- */
export type ResolvedSitemapItem = { label: string; href: string };
export type ResolvedSitemapBranch = { title: string; href?: string; items: ResolvedSitemapItem[]; branches: ResolvedSitemapBranch[] };
export type ResolvedSitemapGroup = {
  id: string;
  title: string;
  blurb: string;
  count: number;
  items: ResolvedSitemapItem[];
  branches: ResolvedSitemapBranch[];
};

const resolveItem = (item: Item, lang: AmaraLanguage): ResolvedSitemapItem => ({
  label: item.label[lang],
  href: buildPublicRoutePath(item.key, lang)
});

function resolveBranch(branch: Branch, lang: AmaraLanguage): ResolvedSitemapBranch {
  return {
    title: branch.label[lang],
    href: branch.key ? buildPublicRoutePath(branch.key, lang) : undefined,
    items: branch.items.map((item) => resolveItem(item, lang)),
    branches: (branch.branches ?? []).map((sub) => resolveBranch(sub, lang))
  };
}

function countBranch(branch: Branch): number {
  return (branch.key ? 1 : 0) + branch.items.length + (branch.branches ?? []).reduce((total, sub) => total + countBranch(sub), 0);
}

export function resolveSitemapGroups(lang: AmaraLanguage): ResolvedSitemapGroup[] {
  return GROUPS.map((group) => ({
    id: group.id,
    title: group.title[lang],
    blurb: group.blurb[lang],
    count: group.items.length + group.branches.reduce((total, branch) => total + countBranch(branch), 0),
    items: group.items.map((item) => resolveItem(item, lang)),
    branches: group.branches.map((branch) => resolveBranch(branch, lang))
  }));
}

/** Flatten every link of one resolved group (hub links + items, recursively) for JSON-LD. */
export function flattenGroupLinks(group: ResolvedSitemapGroup): { name: string; href: string }[] {
  const out: { name: string; href: string }[] = [];
  group.items.forEach((item) => out.push({ name: item.label, href: item.href }));

  const walk = (branch: ResolvedSitemapBranch) => {
    if (branch.href) out.push({ name: branch.title, href: branch.href });
    branch.items.forEach((item) => out.push({ name: item.label, href: item.href }));
    branch.branches.forEach(walk);
  };
  group.branches.forEach(walk);
  return out;
}

/* ---------------------------------------------------------------------------
   Page copy.
--------------------------------------------------------------------------- */
export const sitemapHero: Record<AmaraLanguage, { eyebrow: string; title: string; lead: string }> = {
  de: { eyebrow: 'Alles auf einen Blick', title: 'Seitenübersicht', lead: 'Jede Seite unserer Website, nach Orten und Themen geordnet — damit ihr schnell findet, was ihr sucht.' },
  en: { eyebrow: 'Everything at a glance', title: 'Site map', lead: 'Every page on our website, arranged by place and topic — so you find what you are looking for quickly.' },
  es: { eyebrow: 'Todo de un vistazo', title: 'Mapa del sitio', lead: 'Todas las páginas de nuestra web, ordenadas por lugar y tema, para que encuentres rápido lo que buscas.' },
  nl: { eyebrow: 'Alles in één oogopslag', title: 'Sitemap', lead: 'Elke pagina van onze website, geordend op plaats en thema — zodat je snel vindt wat je zoekt.' },
  sv: { eyebrow: 'Allt på ett ställe', title: 'Webbplatskarta', lead: 'Alla sidor på vår webbplats, ordnade efter plats och tema — så att du snabbt hittar det du söker.' }
};

export const sitemapPagesLabel: Record<AmaraLanguage, (count: number) => string> = {
  de: (n) => `${n} Seiten`,
  en: (n) => `${n} pages`,
  es: (n) => `${n} páginas`,
  nl: (n) => `${n} pagina's`,
  sv: (n) => `${n} sidor`
};

export const sitemapClosing: Record<AmaraLanguage, { title: string; text: string; cta: string }> = {
  de: { title: 'Nicht gefunden, was ihr sucht?', text: 'Schreibt uns einfach – oder prüft direkt, wann euer Wunschtermin frei ist.', cta: 'Verfügbarkeit prüfen' },
  en: { title: 'Did not find what you were looking for?', text: 'Just write to us — or check straight away when your dates are free.', cta: 'Check availability' },
  es: { title: '¿No encontraste lo que buscabas?', text: 'Escríbenos sin más, o consulta directamente cuándo están libres tus fechas.', cta: 'Consultar disponibilidad' },
  nl: { title: 'Niet gevonden wat je zocht?', text: 'Schrijf ons gerust — of bekijk meteen wanneer jouw data vrij zijn.', cta: 'Beschikbaarheid bekijken' },
  sv: { title: 'Hittade du inte det du sökte?', text: 'Skriv till oss — eller se direkt när dina datum är lediga.', cta: 'Se tillgänglighet' }
};

export const sitemapSeo: AmaraAuthoringSeo = {
  version: '2026-09-10-sitemap-content-v2.0',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    de: { title: 'Seitenübersicht – AMARA', description: 'Alle Seiten von AMARA auf einen Blick: Unterkünfte, Frigiliana, Nerja, Tarifa und der Gästeguide.', robots: 'index, follow', canonical: 'auto' },
    en: { title: 'Site map – AMARA', description: 'Every AMARA page at a glance: stays, Frigiliana, Nerja, Tarifa and the Guest Guide.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Mapa del sitio – AMARA', description: 'Todas las páginas de AMARA de un vistazo: alojamientos, Frigiliana, Nerja, Tarifa y la guía del huésped.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Sitemap – AMARA', description: "Alle AMARA-pagina's in één overzicht: verblijven, Frigiliana, Nerja, Tarifa en de gastengids.", robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Webbplatskarta – AMARA', description: 'Alla AMARA-sidor på ett ställe: boenden, Frigiliana, Nerja, Tarifa och gästguiden.', robots: 'index, follow', canonical: 'auto' }
  }
};
