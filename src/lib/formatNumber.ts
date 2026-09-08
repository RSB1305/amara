import type { AmaraLanguage } from '../types/seo';

/**
 * German, Spanish, Dutch and Swedish write the decimal separator as a comma;
 * English keeps the point. Integers stay unchanged (7, not 7,0). Used for the
 * few decimal figures shown to guests — sunshine hours, above all.
 */
export function formatDecimal(value: number, lang: AmaraLanguage): string {
  const text = String(value);
  return lang === 'en' ? text : text.replace('.', ',');
}
