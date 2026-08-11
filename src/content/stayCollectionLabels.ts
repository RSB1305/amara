import type { AmaraLanguage } from '../types/seo';

type LocalizedCollectionLabel = Record<AmaraLanguage, string>;
type StayCollectionLabelRole =
  | 'structuralName'
  | 'shortLabel'
  | 'compareLabel'
  | 'backToCollectionLabel';

export const stayCollectionLabels = {
  structuralName: {
    en: 'AMARA stays',
    de: 'AMARA-Unterkünfte',
    es: 'Alojamientos AMARA',
    nl: 'AMARA-verblijven',
    sv: 'AMARA-boenden'
  },
  shortLabel: {
    en: 'Stays',
    de: 'Unterkünfte',
    es: 'Alojamientos',
    nl: 'Verblijven',
    sv: 'Boenden'
  },
  compareLabel: {
    en: 'Compare AMARA stays',
    de: 'AMARA-Unterkünfte vergleichen',
    es: 'Comparar alojamientos AMARA',
    nl: 'AMARA-verblijven vergelijken',
    sv: 'Jämför AMARA-boenden'
  },
  backToCollectionLabel: {
    en: 'Back to all AMARA stays',
    de: 'Zur Übersicht aller AMARA-Unterkünfte',
    es: 'Volver a todos los alojamientos AMARA',
    nl: 'Terug naar alle AMARA-verblijven',
    sv: 'Till alla AMARA-boenden'
  }
} as const satisfies Record<StayCollectionLabelRole, LocalizedCollectionLabel>;
