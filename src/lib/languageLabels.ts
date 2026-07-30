import type { AmaraLanguage } from '../types/seo';

/**
 * Single source of truth for how a language names itself in its own script —
 * shared by the main site Navigation and the Guest Guide language switcher
 * so both stay visually and textually identical.
 */
export const AMARA_LANGUAGE_LABELS: Record<AmaraLanguage, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  nl: 'Nederlands',
  sv: 'Svenska'
};
