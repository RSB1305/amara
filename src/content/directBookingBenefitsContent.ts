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

  version: '2026-09-01-direct-booking-benefits-v1.4-C',

  pageType: 'C',

  entityKey: 'amara-brand',

  languages: {

    en: {

      title: 'Direct Booking: Benefits for Your Stay',

      description: 'Book AMARA direct: private AMARA Experience, our lowest available price, Robert personally involved from the start and a mid-stay clean from eight nights.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    de: {

      title: 'Direktbuchung: Vorteile für euren Aufenthalt',

      description: 'Bucht AMARA direkt: private AMARA Experience, niedrigster verfügbarer Preis, Robert von Anfang an persönlich eingebunden und Zwischenreinigung ab acht Nächten.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    es: {

      title: 'Reserva directa: precio y ventajas',

      description: 'Reserva directa con AMARA: AMARA Experience privada, precio más bajo disponible, Robert implicado desde el principio y limpieza desde 8 noches.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    nl: {

      title: 'Direct boeken: voordelen voor je verblijf',

      description: 'Boek AMARA direct: privé AMARA Experience, laagste beschikbare prijs, Robert vanaf het begin persoonlijk betrokken en schoonmaak vanaf 8 nachten.',

      robots: 'index, follow',

      canonical: 'auto'

    },

    sv: {

      title: 'Direktbokning: fördelar för vistelsen',

      description: 'Boka AMARA direkt: privat AMARA Experience, lägsta tillgängliga pris, Robert personligen med från början och mellanstädning från åtta nätter.',

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

      en: 'When you book direct with us, you receive your private AMARA Experience, our lowest available price and practical extras for your stay. Robert is personally involved from the start.',

      de: 'Wenn ihr direkt bei uns bucht, erhaltet ihr eure private AMARA Experience, unseren niedrigsten verfügbaren Preis und praktische Extras für euren Aufenthalt. Robert ist von Anfang an persönlich eingebunden.',

      es: 'Al reservar directamente con nosotros recibís vuestra AMARA Experience privada, nuestro precio más bajo disponible y ventajas prácticas para vuestra estancia. Robert participa personalmente desde el principio.',

      nl: 'Wanneer jullie direct bij ons boeken, krijgen jullie een privé AMARA Experience, onze laagste beschikbare prijs en praktische extra’s voor jullie verblijf. Robert is vanaf het begin persoonlijk betrokken.',

      sv: 'När ni bokar direkt hos oss får ni en privat AMARA Experience, vårt lägsta tillgängliga pris och praktiska fördelar för vistelsen. Robert är personligen med från början.'

    },

    supportText: {

      en: 'Your direct rate includes every stay-specific extra, alongside clear pricing and cancellation terms.',

      de: 'Euer Direktpreis enthält alle Extras für euren Aufenthalt und verbindet sie mit klaren Preis- und Stornierungsbedingungen.',

      es: 'Vuestra tarifa directa incluye todas las ventajas de la estancia, junto con un precio y unas condiciones de cancelación claros.',

      nl: 'Jullie directe tarief omvat alle extra’s voor het verblijf, met duidelijke prijzen en annuleringsvoorwaarden.',

      sv: 'Ert direktpris omfattar alla fördelar för vistelsen, med tydlig prissättning och tydliga avbokningsvillkor.'

    },

    ctaReviews: trustLabels.reviews_hub

  },

  benefits: [

    {

      title: {

        en: 'Your private AMARA Experience',

        de: 'Eure private AMARA Experience',

        es: 'Vuestra AMARA Experience privada',

        nl: 'Jullie privé AMARA Experience',

        sv: 'Er privata AMARA Experience'

      },

      copy: {

        en: 'A confirmed direct booking gives you **private access to AMARA Experience**, with **personal recommendations for your booked destination and the surrounding area**.',

        de: 'Mit eurer bestätigten Direktbuchung erhaltet ihr **privaten Zugang zur AMARA Experience** – mit **persönlichen Empfehlungen für euer gebuchtes Reiseziel und die Umgebung**.',

        es: 'Vuestra reserva directa confirmada os da **acceso privado a AMARA Experience**, con **recomendaciones personales para el destino de vuestra reserva y sus alrededores**.',

        nl: 'Een bevestigde directe boeking geeft jullie **privétoegang tot AMARA Experience**, met **persoonlijke aanbevelingen voor jullie geboekte bestemming en de omgeving**.',

        sv: 'En bekräftad direktbokning ger er **privat tillgång till AMARA Experience**, med **personliga rekommendationer för resmålet ni har bokat och närområdet**.'

      }

    },

    {

      title: {

        en: 'The price advantage of booking direct',

        de: 'Der Preisvorteil der Direktbuchung',

        es: 'La ventaja de precio de la reserva directa',

        nl: 'Het prijsvoordeel van direct boeken',

        sv: 'Prisfördelen med att boka direkt'

      },

      copy: {

        en: 'A direct booking with AMARA gives you **our lowest available price**, with **all applicable fees included**.',

        de: 'Eine Direktbuchung bei AMARA sichert euch **unseren niedrigsten verfügbaren Preis** – **alle anfallenden Gebühren inklusive**.',

        es: 'La reserva directa con AMARA os ofrece **nuestro precio más bajo disponible**, con **todos los cargos aplicables incluidos**.',

        nl: 'Een directe boeking bij AMARA geeft jullie **onze laagste beschikbare prijs**, met **alle toepasselijke kosten inbegrepen**.',

        sv: 'En direktbokning hos AMARA ger er **vårt lägsta tillgängliga pris**, med **alla tillämpliga avgifter inkluderade**.'

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

        en: 'Direct bookings of eight nights or more include a **complimentary mid-stay clean**, so your apartment feels **fresh again halfway through your stay**.',

        de: 'Bei Direktbuchungen ab acht Nächten ist eine **kostenlose Zwischenreinigung inklusive** – für ein **frisches Apartment zur Mitte eures Aufenthalts**.',

        es: 'Las reservas directas de ocho noches o más incluyen una **limpieza intermedia gratuita**, para que el apartamento vuelva a estar **fresco a mitad de la estancia**.',

        nl: 'Directe boekingen vanaf acht nachten omvatten een **gratis tussentijdse schoonmaak**, zodat het appartement **halverwege weer fris aanvoelt**.',

        sv: 'Direktbokningar på minst åtta nätter inkluderar en **kostnadsfri mellanstädning**, så att lägenheten känns **fräsch igen halvvägs genom vistelsen**.'

      }

    },

    {

      title: {

        en: 'Complimentary early check-in or late check-out',

        de: 'Kostenloser Early Check-in oder Late Check-out',

        es: 'Early check-in o late check-out gratuitos',

        nl: 'Gratis early check-in of late check-out',

        sv: 'Kostnadsfri tidig incheckning eller sen utcheckning'

      },

      copy: {

        en: 'When occupancy allows, your **early check-in or late check-out is complimentary** — giving you **more time at AMARA**.',

        de: 'Wenn es die Belegung zulässt, sind **Early Check-in oder Late Check-out kostenlos** – für **mehr gemeinsame Zeit bei AMARA**.',

        es: 'Cuando la ocupación lo permite, tenéis **early check-in o late check-out sin coste** para disfrutar de **más tiempo en AMARA**.',

        nl: 'Als de bezetting het toelaat, zijn **early check-in of late check-out gratis** – voor **meer tijd bij AMARA**.',

        sv: 'När beläggningen tillåter det är **tidig incheckning eller sen utcheckning kostnadsfri** – för **mer tid hos AMARA**.'

      }

    },

    {

      title: {

        en: 'Robert personally involved from the start',

        de: 'Robert von Anfang an persönlich eingebunden',

        es: 'Robert, implicado personalmente desde el principio',

        nl: 'Robert vanaf het begin persoonlijk betrokken',

        sv: 'Robert personligen med från början'

      },

      copy: {

        en: 'With a direct booking, **your host Robert is personally involved from the start** and **handles your communication directly whenever needed**.',

        de: 'Bei einer Direktbuchung ist **euer Gastgeber Robert von Anfang an persönlich eingebunden** und **übernimmt die Kommunikation bei Bedarf direkt**.',

        es: 'Con una reserva directa, **vuestro anfitrión Robert participa personalmente desde el principio** y **se ocupa directamente de la comunicación cuando hace falta**.',

        nl: 'Bij een directe boeking is **jullie host Robert vanaf het begin persoonlijk betrokken** en **neemt hij de communicatie rechtstreeks over wanneer dat nodig is**.',

        sv: 'Vid en direktbokning är **er värd Robert personligen med från början** och **tar över kommunikationen direkt när det behövs**.'

      }

    },

    {

      title: {

        en: 'A local welcome when you arrive',

        de: 'Eine lokale Aufmerksamkeit zur Begrüßung',

        es: 'Un detalle local a vuestra llegada',

        nl: 'Een lokaal welkom bij aankomst',

        sv: 'Ett lokalt välkomnande vid ankomst'

      },

      copy: {

        en: 'A **small local welcome** is waiting when you arrive, **chosen to suit the season**.',

        de: 'Bei eurer Anreise wartet eine **kleine lokale Aufmerksamkeit** auf euch, **passend zur Saison ausgewählt**.',

        es: 'A vuestra llegada os espera un **pequeño detalle local de bienvenida**, **elegido según la temporada**.',

        nl: 'Bij aankomst wacht een **klein lokaal welkomstgeschenk** op jullie, **passend bij het seizoen gekozen**.',

        sv: 'Vid ankomsten väntar en **liten lokal välkomstgåva**, **vald för säsongen**.'

      }

    }

  ],

  sections: {

    benefitsTitle: {

      en: 'These are the benefits of booking direct with AMARA',

      de: 'Das sind die Vorteile der Direktbuchung bei AMARA',

      es: 'Estas son las ventajas de reservar directamente con AMARA',

      nl: 'Dit zijn de voordelen van direct boeken bij AMARA',

      sv: 'Det här är fördelarna med att boka direkt hos AMARA'

    },

    tip: {

      en: 'Our stay overview makes it easy to find the setting that suits you — by location, kitchen, outdoor space and access.',

      de: 'Unsere Unterkunftsübersicht macht euch die Auswahl leicht – nach Lage, Küche, Außenbereich und Zugang.',

      es: 'Nuestra vista general os ayuda a encontrar fácilmente el alojamiento que encaja con vosotros, según ubicación, cocina, espacio exterior y acceso.',

      nl: 'Ons verblijfsoverzicht maakt het gemakkelijk om de plek te vinden die bij jullie past, op basis van ligging, keuken, buitenruimte en toegang.',

      sv: 'Vår boendeöversikt gör det enkelt att hitta platsen som passar er, utifrån läge, kök, uteplats och tillträde.'

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

      en: 'Our **price promise protects your direct-booking advantage**: for the same stay, dates and conditions, we match a lower price elsewhere where possible.',

      de: 'Unser **Preisversprechen sichert euren Direktbuchervorteil**: Bei identischer Unterkunft, identischen Daten und Bedingungen gleichen wir einen günstigeren Preis nach Möglichkeit an.',

      es: 'Nuestro **compromiso de precio protege vuestra ventaja de reserva directa**: para el mismo alojamiento, fechas y condiciones, igualamos un precio inferior cuando es posible.',

      nl: 'Onze **prijsbelofte beschermt jullie directe boekingsvoordeel**: bij hetzelfde verblijf, dezelfde data en voorwaarden passen we een lagere prijs elders waar mogelijk aan.',

      sv: 'Vårt **prislöfte skyddar er direktbokningsfördel**: för samma boende, datum och villkor matchar vi ett lägre pris på annat håll när det är möjligt.'

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
