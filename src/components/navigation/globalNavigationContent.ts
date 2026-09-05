/**
 * AMARA global navigation — authored content and menu definition
 *
 * Architectural intent:
 * This module owns what the header says and in which order, and nothing else.
 * It performs no link resolution and knows nothing about the current route, so
 * the menu can be reasoned about as authored content rather than behaviour.
 */
import { trustLabels } from '../../content/trustLabels';
import { AMARA_LANGUAGE_LABELS } from '../../lib/languageLabels';
import type { LinkToken } from '../../lib/linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type NavigationLanguageOption = { code: AmaraLanguage; label: string };

export const navigationLanguages: NavigationLanguageOption[] = [
  { code: 'en', label: AMARA_LANGUAGE_LABELS.en },
  { code: 'de', label: AMARA_LANGUAGE_LABELS.de },
  { code: 'es', label: AMARA_LANGUAGE_LABELS.es },
  { code: 'nl', label: AMARA_LANGUAGE_LABELS.nl },
  { code: 'sv', label: AMARA_LANGUAGE_LABELS.sv }
];

/** Compact label for the mobile header rail, where space next to the menu trigger is tight. */
export const defaultCtaShortLabels: Record<AmaraLanguage, string> = {
  en: 'Availability',
  de: 'Verfügbarkeit',
  es: 'Disponibilidad',
  nl: 'Beschikbaarheid',
  sv: 'Tillgänglighet'
};

/** Narrowest supported header label; the destination is still the availability search. */
export const defaultCtaCompactLabels: Record<AmaraLanguage, string> = {
  en: 'Dates',
  de: 'Termine',
  es: 'Fechas',
  nl: 'Data',
  sv: 'Datum'
};

/**
 * One wording covers entering and running the availability search, because to a
 * guest those are the same intention. It stops at the stay page, where choosing
 * dates and booking are separate, named steps.
 */
export const globalCtaLabels: Record<AmaraLanguage, string> = {
  en: 'Check availability',
  de: 'Verfügbarkeit prüfen',
  es: 'Consultar disponibilidad',
  nl: 'Beschikbaarheid bekijken',
  sv: 'Se tillgänglighet'
};

export type NavigationUtilityLabels = {
  menu: string;
  closeMenu: string;
  openAmaraExperience: string;
  selectLanguage: string;
  mobileNavigation: string;
};

export const navigationUtilityLabels: Record<AmaraLanguage, NavigationUtilityLabels> = {
  en: {
    menu: 'Open menu',
    closeMenu: 'Close menu',
    openAmaraExperience: 'Open the Guest Guide',
    selectLanguage: 'Select language',
    mobileNavigation: 'Main navigation'
  },
  de: {
    menu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    openAmaraExperience: 'Gästeguide öffnen',
    selectLanguage: 'Sprache auswählen',
    mobileNavigation: 'Hauptnavigation'
  },
  es: {
    menu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    openAmaraExperience: 'Abrir la guía para huéspedes',
    selectLanguage: 'Seleccionar idioma',
    mobileNavigation: 'Navegación principal'
  },
  nl: {
    menu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    openAmaraExperience: 'Gastengids openen',
    selectLanguage: 'Taal selecteren',
    mobileNavigation: 'Hoofdnavigatie'
  },
  sv: {
    menu: 'Öppna meny',
    closeMenu: 'Stäng meny',
    openAmaraExperience: 'Öppna gästguiden',
    selectLanguage: 'Välj språk',
    mobileNavigation: 'Huvudnavigering'
  }
};

export const globalNavLabels = {
  locations: {
    en: 'Destinations',
    de: 'Reiseziele',
    es: 'Destinos',
    nl: 'Bestemmingen',
    sv: 'Resmål'
  },
  stays: {
    en: 'Stays',
    de: 'Unterkünfte',
    es: 'Alojamientos',
    nl: 'Verblijven',
    sv: 'Boenden'
  },
  amaraExperience: {
    en: 'AMARA Guest Guide',
    de: 'AMARA Gästeguide',
    es: 'Guía para huéspedes de AMARA',
    nl: 'AMARA Gastengids',
    sv: 'AMARA Gästguide'
  },
  amaraExperienceMeta: {
    en: 'Personal recommendations for your booked destination and its region.',
    de: 'Persönliche Empfehlungen für euer gebuchtes Reiseziel und die Region.',
    es: 'Recomendaciones personales para vuestro destino reservado y su entorno.',
    nl: 'Persoonlijke tips voor jullie geboekte bestemming en de regio.',
    sv: 'Personliga tips för ert bokade resmål och regionen.'
  },
  aboutAmara: {
    en: 'About us',
    de: 'Über uns',
    es: 'Sobre nosotros',
    nl: 'Over ons',
    sv: 'Om oss'
  },
  locationFrigiliana: {
    en: 'Frigiliana',
    de: 'Frigiliana',
    es: 'Frigiliana',
    nl: 'Frigiliana',
    sv: 'Frigiliana'
  },
  locationNerja: {
    en: 'Nerja',
    de: 'Nerja',
    es: 'Nerja',
    nl: 'Nerja',
    sv: 'Nerja'
  },
  locationTarifa: {
    en: 'Tarifa',
    de: 'Tarifa',
    es: 'Tarifa',
    nl: 'Tarifa',
    sv: 'Tarifa'
  },
  locationFrigilianaMeta: {
    en: 'One of Andalusia’s most beautiful white villages.',
    de: 'Eines der schönsten weißen Dörfer Andalusiens.',
    es: 'Uno de los pueblos blancos más bonitos de Andalucía.',
    nl: 'Een van de mooiste witte dorpen van Andalusië.',
    sv: 'En av Andalusiens vackraste vita byar.'
  },
  locationNerjaMeta: {
    en: 'Mediterranean coast, beaches and the Balcón de Europa.',
    de: 'Mediterraner Küstenort mit Stränden und Balcón de Europa.',
    es: 'Costa mediterránea, playas y el Balcón de Europa.',
    nl: 'Mediterrane kust, stranden en het Balcón de Europa.',
    sv: 'Medelhavskust, stränder och Balcón de Europa.'
  },
  locationTarifaMeta: {
    en: 'Atlantic wind, wide horizons and kitesurfing.',
    de: 'Atlantik-Hotspot für Wind, Weite und Kitesurfen.',
    es: 'Viento atlántico, horizontes abiertos y kitesurf.',
    nl: 'Atlantische wind, weidse horizonten en kitesurfen.',
    sv: 'Atlantvindar, vida horisonter och kitesurfing.'
  },
  allStays: trustLabels.romantic_hideaways,
  lastMinuteStays: {
    en: 'Last minute',
    de: 'Last Minute',
    es: 'Última hora',
    nl: 'Last minute',
    sv: 'Sista minuten'
  },
  currentOffers: {
    en: 'Current offers',
    de: 'Aktuelle Angebote',
    es: 'Ofertas actuales',
    nl: 'Actuele aanbiedingen',
    sv: 'Aktuella erbjudanden'
  },
  currentOffersMeta: {
    en: 'Current stays bookable during the next 21 days.',
    de: 'Aktuell buchbare Aufenthalte der nächsten 21 Tage.',
    es: 'Estancias disponibles durante los próximos 21 días.',
    nl: 'Actueel boekbare verblijven voor de komende 21 dagen.',
    sv: 'Boenden som kan bokas under de kommande 21 dagarna.'
  },
  farahMeta: {
    en: 'Self-contained boutique suite · 2 guests',
    de: 'Abgeschlossene Boutique-Suite · 2 Gäste',
    es: 'Suite boutique independiente · 2 huéspedes',
    nl: 'Zelfstandige boutique-suite · 2 gasten',
    sv: 'Självständig boutique-svit · 2 gäster'
  },
  lounisMeta: {
    en: 'Historic apartment · 2 guests',
    de: 'Altstadt-Apartment · 2 Gäste',
    es: 'Apartamento histórico · 2 huéspedes',
    nl: 'Historisch appartement · 2 gasten',
    sv: 'Historisk lägenhet · 2 gäster'
  },
  zaidMeta: {
    en: 'Terrace apartment · 2 guests',
    de: 'Terrassen-Apartment · 2 Gäste',
    es: 'Apartamento con terraza · 2 huéspedes',
    nl: 'Terrasappartement · 2 gasten',
    sv: 'Terrasslägenhet · 2 gäster'
  },
  mahaMeta: {
    en: 'Apartment with large terrace · 2 guests',
    de: 'Apartment mit großer Terrasse · 2 Gäste',
    es: 'Apartamento con gran terraza · 2 huéspedes',
    nl: 'Appartement met groot terras · 2 gasten',
    sv: 'Lägenhet med stor terrass · 2 gäster'
  },
  playaMeta: {
    en: 'Beach apartment · 2 guests',
    de: 'Strandapartment · 2 Gäste',
    es: 'Apartamento de playa · 2 huéspedes',
    nl: 'Strandappartement · 2 gasten',
    sv: 'Strandlägenhet · 2 gäster'
  },
  familySurfMeta: {
    en: 'Holiday house · up to 4 guests',
    de: 'Ferienhaus · bis 4 Gäste',
    es: 'Casa vacacional · hasta 4 huéspedes',
    nl: 'Vakantiehuis · tot 4 gasten',
    sv: 'Semesterhus · upp till 4 gäster'
  },
  aboutMeta: {
    en: 'What you can expect from us, and who is behind the six stays.',
    de: 'Was ihr von uns erwarten könnt — und wer hinter den sechs Unterkünften steht.',
    es: 'Qué podéis esperar de nosotros y quién está detrás de los seis alojamientos.',
    nl: 'Wat je van ons kunt verwachten, en wie er achter de zes verblijven zit.',
    sv: 'Vad ni kan förvänta er av oss, och vilka som står bakom de sex boendena.'
  },
  reviewsMeta: {
    en: 'Verified experiences from AMARA guests.',
    de: 'Verifizierte Erfahrungen von AMARA-Gästen.',
    es: 'Experiencias verificadas de huéspedes de AMARA.',
    nl: 'Geverifieerde ervaringen van AMARA-gasten.',
    sv: 'Verifierade upplevelser från AMARA-gäster.'
  },
  directBookingMeta: {
    en: 'Best rate, mid-stay cleaning and direct contact.',
    de: 'Bestpreis, Zwischenreinigung und direkter Kontakt.',
    es: 'Mejor precio, limpieza intermedia y contacto directo.',
    nl: 'Beste prijs, tussentijdse schoonmaak en direct contact.',
    sv: 'Bästa pris, mellanstädning och direktkontakt.'
  },
  amenitiesMeta: {
    en: 'Comfort and services across all stays.',
    de: 'Komfort und Leistungen aller Unterkünfte im Überblick.',
    es: 'Comodidad y servicios de todos los alojamientos.',
    nl: 'Comfort en services van alle verblijven.',
    sv: 'Komfort och service i alla boenden.'
  },
  faqMeta: {
    en: 'Answers about booking, arrival and your stay.',
    de: 'Antworten zu Buchung, Anreise und Aufenthalt.',
    es: 'Respuestas sobre reserva, llegada y estancia.',
    nl: 'Antwoorden over boeken, aankomst en verblijf.',
    sv: 'Svar om bokning, ankomst och vistelse.'
  }
} satisfies Record<string, Record<AmaraLanguage, string>>;

export type GlobalNavItem = {
  token: LinkToken;
  label: string;
  description?: string;
  sectionLabel?: string;
  separatedSection?: boolean;
  overview?: boolean;
};

export type GlobalNavGroup = {
  id: 'locations' | 'stays' | 'aboutAmara';
  label: string;
  items: GlobalNavItem[];
};

/** Destination tokens stay reachable from the header even where they are gated elsewhere. */
export const forcedEnabledNavTokens: LinkToken[] = [
  'location_frigiliana',
  'location_nerja',
  'location_tarifa'
];

export function createGlobalNavGroups(currentLang: AmaraLanguage): GlobalNavGroup[] {
  const t = (key: keyof typeof globalNavLabels) =>
    globalNavLabels[key][currentLang] ?? globalNavLabels[key].en;

  return [
    {
      /**
       * One row per destination, no section heading. The destination pages carry the
       * onward bridge into their experience hub, so the header stays a place chooser
       * instead of repeating the same three names under a second ordering logic.
       */
      id: 'locations',
      label: t('locations'),
      items: [
        {
          token: 'location_frigiliana',
          label: t('locationFrigiliana'),
          description: t('locationFrigilianaMeta')
        },
        {
          token: 'location_nerja',
          label: t('locationNerja'),
          description: t('locationNerjaMeta')
        },
        {
          token: 'location_tarifa',
          label: t('locationTarifa'),
          description: t('locationTarifaMeta')
        }
      ]
    },
    {
      id: 'stays',
      label: t('stays'),
      items: [
        { token: 'romantic_hideaways', label: t('allStays'), overview: true },
        {
          token: 'farah',
          label: 'Farah',
          description: t('farahMeta'),
          sectionLabel: t('locationFrigiliana')
        },
        { token: 'lounis', label: 'Lounis', description: t('lounisMeta') },
        { token: 'zaid', label: 'Zaid', description: t('zaidMeta') },
        { token: 'maha', label: 'Maha', description: t('mahaMeta') },
        {
          token: 'playa',
          label: 'Playa',
          description: t('playaMeta'),
          sectionLabel: t('locationNerja')
        },
        {
          token: 'tarifa',
          label: 'Family & Surf',
          description: t('familySurfMeta'),
          sectionLabel: t('locationTarifa')
        },
        {
          token: 'last_minute_stays',
          label: t('currentOffers'),
          description: t('currentOffersMeta'),
          sectionLabel: t('lastMinuteStays'),
          separatedSection: true
        }
      ]
    },
    {
      id: 'aboutAmara',
      label: t('aboutAmara'),
      items: [
        {
          token: 'about',
          label: trustLabels.about[currentLang],
          description: t('aboutMeta'),
          overview: true
        },
        {
          token: 'amara_experience',
          label: t('amaraExperience'),
          description: t('amaraExperienceMeta')
        },
        {
          token: 'reviews_hub',
          label: trustLabels.reviews_hub[currentLang],
          description: t('reviewsMeta')
        },
        {
          token: 'direct_booking_benefits',
          label: trustLabels.direct_booking_benefits[currentLang],
          description: t('directBookingMeta')
        },
        {
          token: 'amenities',
          label: trustLabels.amenities[currentLang],
          description: t('amenitiesMeta')
        },
        {
          token: 'faq_general',
          label: trustLabels.faq_general[currentLang],
          description: t('faqMeta')
        }
      ]
    }
  ];
}
