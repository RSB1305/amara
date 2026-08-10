import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaLocationSectionId =
  | 'hero'
  | 'evening'
  | 'history'
  | 'villageLife'
  | 'coast'
  | 'seasons'
  | 'decision';

export const currentOrder: FrigilianaLocationSectionId[] = [
  'hero',
  'evening',
  'history',
  'villageLife',
  'coast',
  'seasons',
  'decision'
];

const deOrder: FrigilianaLocationSectionId[] = [...currentOrder];
const enOrder: FrigilianaLocationSectionId[] = [...currentOrder];
const esOrder: FrigilianaLocationSectionId[] = [...currentOrder];
const nlOrder: FrigilianaLocationSectionId[] = [...currentOrder];
const svOrder: FrigilianaLocationSectionId[] = [...currentOrder];

export const sectionOrderByLanguage: Record<
  AmaraLanguage,
  FrigilianaLocationSectionId[]
> = {
  de: deOrder,
  en: enOrder,
  es: esOrder,
  nl: nlOrder,
  sv: svOrder
};

export function getFrigilianaLocationSectionOrder(
  language: AmaraLanguage
): FrigilianaLocationSectionId[] {
  return sectionOrderByLanguage[language];
}
