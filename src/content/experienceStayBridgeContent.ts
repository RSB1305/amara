import type { LocalizedText } from '../types/content';

/**
 * Chrome for the closing stay handoff on the experience pages.
 *
 * The chain itself (`reason`) belongs to each page and stays in that page's own
 * content module, because it is the argument that page has earned. Only the
 * label and the eyebrow are shared: they are navigation furniture, and holding
 * one copy keeps the five locales from drifting apart across a dozen routes.
 */
export const experienceStayBridge = {
  eyebrow: {
    en: 'Where you stay',
    de: 'Wo ihr übernachtet',
    es: 'Dónde os alojáis',
    nl: 'Waar jullie overnachten',
    sv: 'Var ni bor'
  } satisfies LocalizedText,
  availabilityLabel: {
    en: 'Check availability',
    de: 'Verfügbarkeit prüfen',
    es: 'Consultar disponibilidad',
    nl: 'Beschikbaarheid bekijken',
    sv: 'Kontrollera tillgänglighet'
  } satisfies LocalizedText
};
