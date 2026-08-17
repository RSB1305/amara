import type { AmaraLanguage } from '../types/seo';

type LocalizedTrustLabel = Record<AmaraLanguage, string>;

export const trustSectionLabels: LocalizedTrustLabel = {
  en: 'About us',
  de: 'Über uns',
  es: 'Sobre nosotros',
  nl: 'Over ons',
  sv: 'Om oss'
};

export const trustLabels: Record<
  | 'about'
  | 'reviews_hub'
  | 'direct_booking_benefits'
  | 'amenities'
  | 'faq_general'
  | 'legal_notice'
  | 'booking_stay_terms'
  | 'book'
  | 'romantic_hideaways',
  LocalizedTrustLabel
> = {
  about: {
    en: 'Philosophy',
    de: 'Unsere Haltung',
    es: 'Filosofía',
    nl: 'Onze visie',
    sv: 'Vår filosofi'
  },
  reviews_hub: {
    en: 'Guest Reviews',
    de: 'Gästebewertungen',
    es: 'Reseñas de huéspedes',
    nl: 'Gastbeoordelingen',
    sv: 'Gästrecensioner'
  },
  direct_booking_benefits: {
    en: 'Direct Booking Benefits',
    de: 'Vorteile der Direktbuchung',
    es: 'Ventajas de reserva directa',
    nl: 'Voordelen van direct boeken',
    sv: 'Fördelar med direktbokning'
  },
  amenities: {
    en: 'Comfort & Amenities',
    de: 'Komfort & Ausstattung',
    es: 'Confort y servicios',
    nl: 'Comfort en voorzieningen',
    sv: 'Komfort och bekvämligheter'
  },
  faq_general: {
    en: 'Stay FAQ',
    de: 'Aufenthalts-FAQ',
    es: 'FAQ de la estancia',
    nl: 'Verblijfs-FAQ',
    sv: 'FAQ för vistelsen'
  },
  legal_notice: {
    en: 'Legal Notice & Privacy',
    de: 'Impressum & Datenschutz',
    es: 'Aviso legal y privacidad',
    nl: 'Juridische kennisgeving & privacy',
    sv: 'Juridisk information & integritet'
  },
  booking_stay_terms: {
    en: 'Booking Terms',
    de: 'Buchungsbedingungen',
    es: 'Condiciones de reserva',
    nl: 'Boekingsvoorwaarden',
    sv: 'Bokningsvillkor'
  },
  book: {
    en: 'Check Availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Ver disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Se tillgänglighet'
  },
  romantic_hideaways: {
    en: 'Explore all stays',
    de: 'Alle Unterkünfte ansehen',
    es: 'Ver todos los alojamientos',
    nl: 'Alle verblijven bekijken',
    sv: 'Se alla boenden'
  }
};
