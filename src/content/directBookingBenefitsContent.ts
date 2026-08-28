import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { trustLabels } from './trustLabels';

export const directBookingTrustSignals = {
  directWithAmara: {
    en: 'Direct with AMARA',
    de: 'Direkt bei AMARA',
    es: 'Reserva directa con AMARA',
    nl: 'Direct bij AMARA',
    sv: 'Direkt med AMARA'
  },
  lowestAvailablePrice: {
    en: 'Our lowest available price',
    de: 'Unser niedrigster verfügbarer Preis',
    es: 'Nuestro precio más bajo disponible',
    nl: 'Onze laagste beschikbare prijs',
    sv: 'Vårt lägsta tillgängliga pris'
  },
  midStayCleaning: {
    en: 'Complimentary mid-stay cleaning from eight nights',
    de: 'Kostenlose Zwischenreinigung ab acht Nächten',
    es: 'Limpieza gratuita a mitad de estancia a partir de ocho noches',
    nl: 'Gratis tussentijdse schoonmaak vanaf acht nachten',
    sv: 'Kostnadsfri mellanstädning från åtta nätter'
  },
  directHostContact: {
    en: 'Direct line to host',
    de: 'Direkter Kontakt zum Gastgeber',
    es: 'Contacto directo con el anfitrión',
    nl: 'Direct contact met de host',
    sv: 'Direktkontakt med värden'
  }
} satisfies Record<
  'directWithAmara' | 'lowestAvailablePrice' | 'midStayCleaning' | 'directHostContact',
  Record<AmaraLanguage, string>
>;

/**
 * Refund tiers of the AMARA direct-booking rate, as configured in Lodgify.
 * Held here so the conversion copy and the terms page state one policy.
 * Lodgify stays authoritative for the individual booking; if the rate is
 * reconfigured there, these values move with it.
 */
export const cancellationRefundTiers = {
  fullRefundDaysBeforeArrival: 14,
  halfRefundDaysBeforeArrival: 7
} as const;

const fullDays = cancellationRefundTiers.fullRefundDaysBeforeArrival;
const halfDays = cancellationRefundTiers.halfRefundDaysBeforeArrival;

/** Short assurance badge shown beside a booking CTA. */
export const cancellationAssuranceBadge = {
  en: `Free cancellation up to ${fullDays} days before arrival`,
  de: `Bis ${fullDays} Tage vor Anreise kostenlos stornieren`,
  es: `Cancelación gratuita hasta ${fullDays} días antes de la llegada`,
  nl: `Gratis annuleren tot ${fullDays} dagen voor aankomst`,
  sv: `Avboka utan kostnad fram till ${fullDays} dagar före ankomst`
} satisfies Record<AmaraLanguage, string>;

/** The same policy stated in full, including the partial-refund window. */
export const cancellationAssuranceDetail = {
  en: `Cancel ${fullDays} days or more before arrival and your prepayment is refunded in full. Up to ${halfDays} days before arrival, half of it comes back.`,
  de: `Storniert ihr ${fullDays} Tage oder früher vor Anreise, erstatten wir die Anzahlung vollständig. Bis ${halfDays} Tage vor Anreise bekommt ihr die Hälfte zurück.`,
  es: `Si canceláis ${fullDays} días antes de la llegada o más, os devolvemos el anticipo íntegro. Hasta ${halfDays} días antes de la llegada, recuperáis la mitad.`,
  nl: `Annuleren jullie ${fullDays} dagen of meer voor aankomst, dan betalen we de aanbetaling volledig terug. Tot ${halfDays} dagen voor aankomst krijgen jullie de helft terug.`,
  sv: `Avbokar ni ${fullDays} dagar eller mer före ankomst betalar vi tillbaka hela handpenningen. Fram till ${halfDays} dagar före ankomst får ni tillbaka hälften.`
} satisfies Record<AmaraLanguage, string>;


export const directBookingBenefitsSeo: AmaraAuthoringSeo = {

  version: '2026-03-23-direct-booking-benefits-v1.0-C',

  pageType: 'C',

  entityKey: 'amara-brand',

  languages: {

    en: {

      title: 'Direct Booking: Benefits for Your Stay',

      description: 'Book AMARA directly: lowest available price, direct host contact, priority early check-in or late check-out, and a mid-stay clean from eight nights.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    de: {

      title: 'Direktbuchung: Vorteile für euren Aufenthalt',

      description: 'Bucht AMARA direkt: niedrigster verfügbarer Preis, direkter Gastgeberkontakt, bevorzugt früh an- oder spät abreisen, Zwischenreinigung ab acht Nächten.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    es: {

      title: 'Reserva directa: precio y ventajas',

      description: 'Reserva directa con AMARA: precio más bajo disponible, contacto con el anfitrión, entrada anticipada o salida tardía y limpieza intermedia desde 8 noches.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    nl: {

      title: 'Direct boeken: voordelen voor je verblijf',

      description: 'Boek AMARA rechtstreeks: laagste beschikbare prijs, contact met de host, voorrang bij vroeg in- of laat uitchecken en tussentijdse schoonmaak vanaf 8 nachten.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    sv: {

      title: 'Direktbokning: fördelar för vistelsen',

      description: 'Boka AMARA direkt: lägsta tillgängliga pris, direktkontakt med värden, förtur till tidig in- eller sen utcheckning och mellanstädning från åtta nätter.',

      robots: 'index, follow',

      canonical: 'auto'

    }

  },

  ogImage: '/images/hero-frigiliana.jpg'

};

export const directBookingBenefitsTrustLinks = [

  { token: 'about', label: trustLabels.about.en },

  { token: 'reviews_hub', label: trustLabels.reviews_hub.en },

  { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.en }

];

export const directBookingBenefitsFooterLabels = {

  amenities: trustLabels.amenities,

  faq_general: trustLabels.faq_general,

  instagram: { en: 'Instagram', de: 'Instagram', es: 'Instagram', nl: 'Instagram', sv: 'Instagram' }

} as const;

export const directBookingBenefitsCopy = {

  hero: {

    subtitle: {

      en: 'Direct. Transparent. Personal.',

      de: 'Direkt. Transparent. Persönlich.',

      es: 'Directo, claro y personal.',

      nl: 'Direct. Transparant. Persoonlijk.',

      sv: 'Direkt. Tydligt. Personligt.'

    },

    title: {

      en: 'Book direct with AMARA.',

      de: 'Direkt bei AMARA buchen.',

      es: 'Reservad directamente con AMARA.',

      nl: 'Boek direct bij AMARA.',

      sv: 'Boka direkt med AMARA.'

    },

    lead: {

      en: 'A direct booking gives you our lowest available price, a direct line to the host and several practical extras, subject to the conditions below.',

      de: 'Bei einer Direktbuchung bekommt ihr unseren niedrigsten verfügbaren Preis, direkten Kontakt zum Gastgeber und einige praktische Extras zu den unten genannten Bedingungen.',

      es: 'Al reservar directamente obtenéis nuestro precio más bajo disponible, contacto directo con el anfitrión y varias ventajas prácticas sujetas a las condiciones que explicamos a continuación.',

      nl: 'Bij een rechtstreekse boeking krijgen jullie onze laagste beschikbare prijs, direct contact met de host en enkele praktische extra’s volgens de voorwaarden hieronder.',

      sv: 'När ni bokar direkt får ni vårt lägsta tillgängliga pris, direktkontakt med värden och flera praktiska fördelar enligt villkoren nedan.'

    },

    supportText: {

      en: 'The price, conditions and available extras are shown clearly before you confirm.',

      de: 'Preis, Bedingungen und verfügbare Extras werden euch vor der Bestätigung klar angezeigt.',

      es: 'Veréis claramente el precio, las condiciones y las ventajas disponibles antes de confirmar.',

      nl: 'Prijs, voorwaarden en beschikbare extra’s worden duidelijk getoond voordat jullie bevestigen.',

      sv: 'Pris, villkor och tillgängliga fördelar visas tydligt innan ni bekräftar.'

    },

    ctaAbout: trustLabels.about,

    ctaReviews: trustLabels.reviews_hub

  },

  benefits: [

    {

      title: directBookingTrustSignals.lowestAvailablePrice,

      copy: {

        en: 'You always get **our best available price** when booking directly - no hidden fees.',

        de: 'Bei einer Direktbuchung bekommt ihr immer **unseren besten verfügbaren Preis** - ohne versteckte Gebühren.',

        es: 'Al reservar directamente, siempre veréis **nuestro mejor precio disponible**, sin cargos ocultos.',

        nl: 'Wanneer jullie direct boeken, krijgen jullie altijd **onze beste beschikbare prijs** - zonder verborgen kosten.',

        sv: 'När ni bokar direkt får ni alltid **vårt bästa tillgängliga pris** - utan dolda avgifter.'

      }

    },

    {

      title: {

        en: 'Complimentary mid-stay cleaning',

        de: 'Kostenlose Zwischenreinigung',

        es: 'Limpieza gratuita a mitad de estancia',

        nl: 'Gratis tussentijdse schoonmaak',

        sv: 'Kostnadsfri mellanstädning'

      },

      copy: {

        en: 'For direct stays of more than seven nights, one complimentary cleaning is included. It takes place at the midpoint of your stay.',

        de: 'Bei direkt gebuchten Aufenthalten von mehr als sieben Nächten ist eine kostenlose Zwischenreinigung inklusive. Sie findet in der Mitte eures Aufenthalts statt.',

        es: 'En las reservas directas de más de siete noches se incluye una limpieza gratuita, programada a mitad de la estancia.',

        nl: 'Bij een rechtstreeks geboekt verblijf van meer dan zeven nachten is één gratis tussentijdse schoonmaak inbegrepen. Deze vindt halverwege jullie verblijf plaats.',

        sv: 'Vid direktbokade vistelser på mer än sju nätter ingår en kostnadsfri mellanstädning. Den sker halvvägs genom vistelsen.'

      }

    },

    {

      title: {

        en: 'Priority early check-in / late check-out',

        de: 'Priorität für frühen Check-in / späten Check-out',

        es: 'Prioridad para entrada anticipada o salida tardía',

        nl: 'Voorrang voor vroege check-in / late check-out',

        sv: 'Prioritet för tidig incheckning / sen utcheckning'

      },

      copy: {

        en: 'When availability allows, we prioritize complimentary early check-in or late check-out.',

        de: 'Wenn es die Verfügbarkeit zulässt, prüfen wir bevorzugt einen kostenfreien frühen Check-in oder späten Check-out.',

        es: 'Cuando la disponibilidad lo permite, damos prioridad a una entrada anticipada o una salida tardía sin coste.',

        nl: 'Als de beschikbaarheid het toelaat, geven we voorrang aan een kosteloze vroege check-in of late check-out.',

        sv: 'När tillgängligheten tillåter det prioriterar vi kostnadsfri tidig incheckning eller sen utcheckning.'

      }

    },

    {

      title: directBookingTrustSignals.directHostContact,

      copy: {

        en: 'A simpler route for questions and coordination before and during your stay.',

        de: 'Ein direkter und unkomplizierter Weg für Fragen und Abstimmung vor und während eures Aufenthalts.',

        es: 'Una vía más directa y sencilla para resolver dudas y coordinaros antes y durante la estancia.',

        nl: 'Een directere en eenvoudigere manier voor vragen en afstemming voor en tijdens jullie verblijf.',

        sv: 'En enklare och mer direkt kontaktväg för frågor och samordning före och under vistelsen.'

      }

    },

    {

      title: {

        en: 'Welcome detail',

        de: 'Kleine Aufmerksamkeit zur Begrüßung',

        es: 'Detalle de bienvenida',

        nl: 'Welkomstdetail',

        sv: 'Välkomstdetalj'

      },

      copy: {

        en: 'A small local welcome item on arrival. What it is may vary with the season.',

        de: 'Bei der Ankunft wartet eine kleine lokale Aufmerksamkeit auf euch. Was genau, kann je nach Saison variieren.',

        es: 'A la llegada encontraréis un pequeño detalle local de bienvenida, que puede variar según la temporada.',

        nl: 'Bij aankomst staat er een klein lokaal welkomstgeschenk klaar. Wat dat is, kan per seizoen verschillen.',

        sv: 'Vid ankomsten väntar en liten lokal välkomstgåva. Vad det är kan variera med säsongen.'

      }

    }

  ],

  sections: {

    benefitsTitle: {

      en: 'What you get when you book direct',

      de: 'Was ihr bei einer Direktbuchung bekommt',

      es: 'Qué recibís al reservar directamente',

      nl: 'Wat jullie krijgen als jullie direct boeken',

      sv: 'Det ni får när ni bokar direkt'

    },

    tip: {

      en: "If you're unsure which apartment suits your plans, message us first. We know the differences and will answer directly.",

      de: 'Wenn ihr nicht sicher seid, welches Apartment zu euren Plänen passt, schreibt uns zuerst. Wir kennen die Unterschiede und antworten euch direkt.',

      es: 'Si no tenéis claro qué apartamento se adapta mejor a vuestros planes, escribidnos primero. Conocemos las diferencias y os responderemos directamente.',

      nl: 'Twijfelen jullie welk appartement bij jullie plannen past? Stuur ons dan eerst een bericht. We kennen de verschillen en geven direct antwoord.',

      sv: 'Om ni är osäkra på vilken lägenhet som passar era planer kan ni skriva till oss först. Vi känner till skillnaderna och svarar direkt.'

    },

    inlineReviews: trustLabels.reviews_hub,

    inlineAbout: trustLabels.about,

    quote: {

      en: 'Direct bookings let us invest more into the details you actually feel.',

      de: 'Direktbuchungen erlauben es uns, mehr in die Details zu investieren, die ihr wirklich spürt.',

      es: 'Las reservas directas nos permiten invertir más en los detalles que realmente se notan.',

      nl: 'Met directe boekingen kunnen we meer investeren in de details die jullie echt voelen.',

      sv: 'Direktbokningar låter oss investera mer i de detaljer som ni faktiskt märker.'

    },

    whyTitle: {

      en: 'Why we prefer direct bookings',

      de: 'Warum wir Direktbuchungen bevorzugen',

      es: 'Por qué preferimos las reservas directas',

      nl: 'Waarom wij directe boekingen prefereren',

      sv: 'Varför vi föredrar direktbokningar'

    },

    whyLead: {

      en: 'Direct bookings let us invest more into the details you actually feel: quieter operations, better upkeep, and personal support.',

      de: 'Direktbuchungen geben uns mehr Spielraum für die Details, die ihr wirklich merkt: ruhigere Abläufe, bessere Pflege und persönliche Unterstützung.',

      es: 'Las reservas directas nos permiten invertir más en los detalles que de verdad se notan: operaciones más tranquilas, mejor mantenimiento y apoyo personal.',

      nl: 'Directe boekingen geven ons meer ruimte om te investeren in de details die jullie echt merken: rustigere processen, beter onderhoud en persoonlijke ondersteuning.',

      sv: 'Direktbokningar ger oss mer utrymme att investera i de detaljer som ni verkligen märker: lugnare drift, bättre underhåll och personligt stöd.'

    },

    whyBody: {

      en: 'It also keeps AMARA independent - designed around guests who value calm.',

      de: 'So bleibt AMARA außerdem unabhängig - ausgerichtet auf Gäste, die Ruhe schätzen.',

      es: 'Además, así AMARA mantiene su independencia y sigue pensada para huéspedes que valoran la calma.',

      nl: 'Zo blijft AMARA ook onafhankelijk - ingericht rond gasten die rust waarderen.',

      sv: 'Det håller också AMARA oberoende - utformat för gäster som värdesätter lugn.'

    },

    promiseTitle: {

      en: 'A simple promise',

      de: 'Ein einfaches Versprechen',

      es: 'Una promesa sencilla',

      nl: 'Een eenvoudige belofte',

      sv: 'Ett enkelt löfte'

    },

    promiseP1: {

      en: "If you find **the exact same dates and conditions for a lower price elsewhere**, tell us. We'll check it with you and do our best to match it fairly.",

      de: 'Wenn ihr anderswo **denselben Aufenthalt zu denselben Daten und Bedingungen günstiger** findet, sagt uns Bescheid. Wir prüfen es mit euch und versuchen, den Preis fair anzugleichen.',

      es: 'Si encontráis **las mismas fechas y condiciones por un precio más bajo** en otro sitio, decidnoslo. Lo revisaremos con vosotros y haremos lo posible por igualarlo de forma justa.',

      nl: 'Als jullie elders **exact dezelfde data en voorwaarden voor een lagere prijs** vinden, laat het ons weten. We kijken het samen met jullie na en doen ons best om dat eerlijk te evenaren.',

      sv: 'Om ni hittar **exakt samma datum och villkor till ett lägre pris** någon annanstans, säg till oss. Vi går igenom det tillsammans med er och gör vårt bästa för att matcha det på ett schysst sätt.'

    },

    promiseP2: {

      en: 'Since we do not offer artificial discounts on other platforms, the direct price is simply the fair, lower baseline.',

      de: 'Da wir auf anderen Plattformen keine künstlichen Rabatte einsetzen, ist der Direktpreis einfach die faire, niedrigere Ausgangsbasis.',

      es: 'Como no ofrecemos descuentos artificiales en otras plataformas, el precio directo es simplemente la base justa y más baja.',

      nl: 'Omdat we op andere platforms geen kunstmatige kortingen gebruiken, is de directe prijs gewoon het eerlijke, lagere uitgangspunt.',

      sv: 'Eftersom vi inte arbetar med konstgjorda rabatter på andra plattformar är direktpriset helt enkelt den rättvisa, lägre utgångspunkten.'

    },

    promiseNote: {

      en: 'Same dates · same apartment · same cancellation terms.',

      de: 'Gleiche Daten · gleiches Apartment · gleiche Stornierungsbedingungen.',

      es: 'Mismas fechas · mismo apartamento · mismas condiciones de cancelación.',

      nl: 'Dezelfde data · hetzelfde appartement · dezelfde annuleringsvoorwaarden.',

      sv: 'Samma datum · samma lägenhet · samma avbokningsvillkor.'

    },

    ctaTitle: {

      en: 'Next step',

      de: 'Nächster Schritt',

      es: 'Siguiente paso',

      nl: 'Volgende stap',

      sv: 'Nästa steg'

    },

    ctaLead: {

      en: 'Choose your dates to see current availability, the final price and the booking conditions.',

      de: 'Wählt eure Daten, um die aktuelle Verfügbarkeit, den endgültigen Preis und die Buchungsbedingungen zu sehen.',

      es: 'Elegid las fechas para ver la disponibilidad actual, el precio final y las condiciones de la reserva.',

      nl: 'Kies jullie data om de actuele beschikbaarheid, de definitieve prijs en de boekingsvoorwaarden te zien.',

      sv: 'Välj datum för att se aktuell tillgänglighet, slutpris och bokningsvillkor.'

    },

    ctaAvailability: trustLabels.book,

    ctaExplore: trustLabels.romantic_hideaways

  }

};
