import type { AmaraLanguage } from '../../types/seo';

export type FrigilianaLocationSectionId =
  | 'hero'
  | 'gallery'
  | 'essence'
  | 'climate'
  | 'comparison'
  | 'villageStructure'
  | 'whereToStay'
  | 'planning'
  | 'arrivalFaq';

export const currentOrder: FrigilianaLocationSectionId[] = [
  'hero',
  'gallery',
  'essence',
  'climate',
  'comparison',
  'villageStructure',
  'whereToStay',
  'planning',
  'arrivalFaq'
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
