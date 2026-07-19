import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type NerjaAuthoritySubnavId =
  | 'intro'
  | 'areas'
  | 'beaches'
  | 'practical'
  | 'playa'
  | 'faq';

export type NerjaAuthoritySubnavItem = {
  id: NerjaAuthoritySubnavId;
  label: string;
  href: string;
};

const labels: Record<NerjaAuthoritySubnavId, Record<AmaraLanguage, string>> = {
  intro: {
    en: 'Overview',
    de: 'Überblick',
    es: 'Resumen',
    nl: 'Overzicht',
    sv: 'Översikt'
  },
  areas: {
    en: 'Where to Stay',
    de: 'Unterkunft',
    es: 'Dónde alojarse',
    nl: 'Overnachten',
    sv: 'Boende'
  },
  beaches: {
    en: 'Beaches',
    de: 'Strände',
    es: 'Playas',
    nl: 'Stranden',
    sv: 'Stränder'
  },
  practical: {
    en: 'Practical',
    de: 'Praktisch',
    es: 'Práctico',
    nl: 'Praktisch',
    sv: 'Praktiskt'
  },
  playa: {
    en: 'AMARA Playa',
    de: 'AMARA Playa',
    es: 'AMARA Playa',
    nl: 'AMARA Playa',
    sv: 'AMARA Playa'
  },
  faq: {
    en: 'FAQ',
    de: 'FAQ',
    es: 'FAQ',
    nl: 'FAQ',
    sv: 'FAQ'
  }
};

const anchors: Record<NerjaAuthoritySubnavId, string> = {
  intro: '#intro',
  areas: '#where-to-stay-in-nerja',
  beaches: '#nerja-beaches',
  practical: '#practical-nerja',
  playa: '#amara-playa',
  faq: '#faq'
};

export function getNerjaAuthoritySubnav(
  currentLang: AmaraLanguage
): NerjaAuthoritySubnavItem[] {
  const locationBase = resolveLink('location_nerja', currentLang);

  return (Object.keys(anchors) as NerjaAuthoritySubnavId[]).map((id) => ({
    id,
    label: labels[id][currentLang],
    href: `${locationBase}${anchors[id]}`
  }));
}
