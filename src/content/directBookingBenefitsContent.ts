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
    en: 'Direct contact with us',
    de: 'Direkter Kontakt zu uns',
    es: 'Contacto directo con nosotros',
    nl: 'Direct contact met ons',
    sv: 'Direktkontakt med oss'
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
  en: `Cancel at least ${fullDays} days before arrival and we refund the prepayment in full. For cancellations ${halfDays} to ${fullDays - 1} days before arrival, we refund half.`,
  de: `Storniert ihr mindestens ${fullDays} Tage vor Anreise, erstatten wir die Anzahlung vollständig. Bei ${halfDays} bis ${fullDays - 1} Tagen vorher erstatten wir die Hälfte.`,
  es: `Si canceláis al menos ${fullDays} días antes de la llegada, os devolvemos todo el anticipo. Si faltan entre ${halfDays} y ${fullDays - 1} días, os devolvemos la mitad.`,
  nl: `Annuleren jullie minstens ${fullDays} dagen voor aankomst, dan betalen we de aanbetaling volledig terug. Bij ${halfDays} tot ${fullDays - 1} dagen vooraf betalen we de helft terug.`,
  sv: `Avbokar ni minst ${fullDays} dagar före ankomst betalar vi tillbaka hela handpenningen. Vid ${halfDays} till ${fullDays - 1} dagar före ankomst betalar vi tillbaka hälften.`
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

      en: 'Book with us',

      de: 'Direkt bei uns',

      es: 'Reservad con nosotros',

      nl: 'Boek bij ons',

      sv: 'Boka hos oss'

    },

    title: {

      en: 'Book direct with AMARA',

      de: 'Direkt bei AMARA buchen',

      es: 'Reservad directamente con AMARA',

      nl: 'Boek direct bij AMARA',

      sv: 'Boka direkt med AMARA'

    },

    lead: {

      en: 'When you book direct, you receive our lowest available price, direct contact with us and practical extras depending on the stay.',

      de: 'Wenn ihr direkt bucht, bekommt ihr unseren niedrigsten verfügbaren Preis, direkten Kontakt zu uns und – je nach Aufenthalt – praktische Extras.',

      es: 'Al reservar directamente obtenéis nuestro precio más bajo disponible, contacto directo con nosotros y ventajas prácticas según la estancia.',

      nl: 'Wanneer jullie direct boeken, krijgen jullie onze laagste beschikbare prijs, direct contact met ons en praktische extra’s die afhangen van het verblijf.',

      sv: 'När ni bokar direkt får ni vårt lägsta tillgängliga pris, direktkontakt med oss och praktiska fördelar beroende på vistelsen.'

    },

    supportText: {

      en: 'Before you confirm, you see the total price, cancellation terms and any extras that apply.',

      de: 'Vor der Bestätigung seht ihr den Gesamtpreis, die Stornierungsbedingungen und alle Extras, die für euren Aufenthalt gelten.',

      es: 'Antes de confirmar veréis el precio total, las condiciones de cancelación y las ventajas que correspondan a vuestra estancia.',

      nl: 'Voordat jullie bevestigen, zien jullie de totaalprijs, de annuleringsvoorwaarden en de extra’s die voor het verblijf gelden.',

      sv: 'Innan ni bekräftar ser ni totalpriset, avbokningsvillkoren och de fördelar som gäller för vistelsen.'

    },

    ctaReviews: trustLabels.reviews_hub

  },

  benefits: [

    {

      title: directBookingTrustSignals.lowestAvailablePrice,

      copy: {

        en: 'Before you confirm, you see the **full price and all conditions**. There are no hidden fees.',

        de: 'Vor der Bestätigung seht ihr den **vollständigen Preis und alle Bedingungen**. Versteckte Gebühren gibt es nicht.',

        es: 'Antes de confirmar veréis **el precio completo y todas las condiciones**. No hay cargos ocultos.',

        nl: 'Voordat jullie bevestigen, zien jullie **de volledige prijs en alle voorwaarden**. Er zijn geen verborgen kosten.',

        sv: 'Innan ni bekräftar ser ni **hela priset och alla villkor**. Det finns inga dolda avgifter.'

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

        en: 'From eight nights, a mid-stay cleaning is included with a direct booking. We schedule it around the middle of your stay.',

        de: 'Ab acht Nächten ist bei Direktbuchung eine Zwischenreinigung inklusive. Wir planen sie ungefähr für die Mitte eures Aufenthalts.',

        es: 'A partir de ocho noches, la reserva directa incluye una limpieza intermedia. La programamos aproximadamente a mitad de la estancia.',

        nl: 'Vanaf acht nachten is bij een directe boeking een tussentijdse schoonmaak inbegrepen. We plannen die ongeveer halverwege het verblijf.',

        sv: 'Från åtta nätter ingår en mellanstädning vid direktbokning. Vi planerar den ungefär halvvägs genom vistelsen.'

      }

    },

    {

      title: {

        en: 'Arrive earlier or leave later',

        de: 'Früher anreisen oder später abreisen',

        es: 'Llegar antes o salir más tarde',

        nl: 'Eerder aankomen of later vertrekken',

        sv: 'Anländ tidigare eller res senare'

      },

      copy: {

        en: 'When the schedule allows, we offer this free of charge where possible.',

        de: 'Wenn es die Belegung zulässt, ermöglichen wir das nach Möglichkeit kostenlos.',

        es: 'Cuando la ocupación lo permite, intentamos ofrecerlo sin coste.',

        nl: 'Als de bezetting het toelaat, bieden we dit waar mogelijk gratis aan.',

        sv: 'När beläggningen tillåter det erbjuder vi detta utan kostnad när det är möjligt.'

      }

    },

    {

      title: directBookingTrustSignals.directHostContact,

      copy: {

        en: 'You speak directly with us before arrival and throughout your stay.',

        de: 'Ihr schreibt direkt mit uns – vor der Anreise und während eures Aufenthalts.',

        es: 'Habláis directamente con nosotros antes de llegar y durante toda la estancia.',

        nl: 'Jullie spreken rechtstreeks met ons, voor aankomst en tijdens het hele verblijf.',

        sv: 'Ni har direktkontakt med oss före ankomsten och under hela vistelsen.'

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

        en: 'A small local welcome item will be waiting in the stay. It changes with the season.',

        de: 'Zur Begrüßung findet ihr eine kleine lokale Aufmerksamkeit in der Unterkunft. Sie wechselt je nach Saison.',

        es: 'En el alojamiento os espera un pequeño detalle local de bienvenida, que cambia según la temporada.',

        nl: 'In het verblijf staat een klein lokaal welkomstgeschenk klaar. Het wisselt met het seizoen.',

        sv: 'I boendet väntar en liten lokal välkomstgåva. Den varierar med säsongen.'

      }

    }

  ],

  sections: {

    benefitsTitle: {

      en: 'What is included when you book direct',

      de: 'Das ist bei der Direktbuchung dabei',

      es: 'Qué incluye la reserva directa',

      nl: 'Dit is inbegrepen als jullie direct boeken',

      sv: 'Detta ingår när ni bokar direkt'

    },

    tip: {

      en: 'If you are choosing between two stays, the overview shows the differences in location, kitchen, outdoor space and access.',

      de: 'Wenn ihr zwischen zwei Unterkünften schwankt, zeigt euch die Übersicht die Unterschiede bei Lage, Küche, Außenbereich und Zugang.',

      es: 'Si dudáis entre dos alojamientos, en la vista general encontraréis las diferencias de ubicación, cocina, espacio exterior y acceso.',

      nl: 'Twijfelen jullie tussen twee verblijven? In het overzicht zien jullie de verschillen in ligging, keuken, buitenruimte en toegang.',

      sv: 'Om ni väljer mellan två boenden visar översikten skillnaderna i läge, kök, uteplats och tillträde.'

    },

    inlineReviews: trustLabels.reviews_hub,

    inlineStays: {

      en: 'Compare the stays',

      de: 'Unterkünfte vergleichen',

      es: 'Comparar alojamientos',

      nl: 'Verblijven vergelijken',

      sv: 'Jämför boendena'

    },

    promiseTitle: {

      en: 'Our price promise',

      de: 'Unser Preisversprechen',

      es: 'Nuestro compromiso de precio',

      nl: 'Onze prijsbelofte',

      sv: 'Vårt prislöfte'

    },

    promiseP1: {

      en: "If you find **the same stay, dates and conditions for a lower price elsewhere**, message us. We'll check it with you and match it where possible.",

      de: 'Wenn ihr **dieselbe Unterkunft zu denselben Daten und Bedingungen günstiger** findet, schreibt uns. Wir prüfen das mit euch und gleichen den Preis nach Möglichkeit an.',

      es: 'Si encontráis **el mismo alojamiento, las mismas fechas y condiciones a un precio más bajo**, escribidnos. Lo revisaremos con vosotros e intentaremos igualarlo.',

      nl: 'Vinden jullie **hetzelfde verblijf met dezelfde data en voorwaarden voor een lagere prijs**, stuur ons dan een bericht. We kijken het samen na en passen de prijs waar mogelijk aan.',

      sv: 'Om ni hittar **samma boende, datum och villkor till ett lägre pris** någon annanstans kan ni skriva till oss. Vi kontrollerar det tillsammans och matchar priset när det är möjligt.'

    },

    promiseNote: {

      en: 'Same dates · same apartment · same cancellation terms.',

      de: 'Gleiche Daten · gleiches Apartment · gleiche Stornierungsbedingungen.',

      es: 'Mismas fechas · mismo apartamento · mismas condiciones de cancelación.',

      nl: 'Dezelfde data · hetzelfde appartement · dezelfde annuleringsvoorwaarden.',

      sv: 'Samma datum · samma lägenhet · samma avbokningsvillkor.'

    },

    ctaTitle: {

      en: 'Check availability and price',

      de: 'Verfügbarkeit und Preis prüfen',

      es: 'Consultar disponibilidad y precio',

      nl: 'Beschikbaarheid en prijs bekijken',

      sv: 'Se tillgänglighet och pris'

    },

    ctaLead: {

      en: 'Choose your dates to see available stays, the total price and the booking conditions.',

      de: 'Wählt eure Reisedaten. Danach seht ihr freie Unterkünfte, den Gesamtpreis und die Buchungsbedingungen.',

      es: 'Elegid las fechas. Después veréis los alojamientos disponibles, el precio total y las condiciones de la reserva.',

      nl: 'Kies jullie reisdata. Daarna zien jullie beschikbare verblijven, de totaalprijs en de boekingsvoorwaarden.',

      sv: 'Välj era resedatum. Därefter ser ni lediga boenden, totalpriset och bokningsvillkoren.'

    },

    ctaAvailability: trustLabels.book,

    ctaExplore: trustLabels.romantic_hideaways

  }

};
