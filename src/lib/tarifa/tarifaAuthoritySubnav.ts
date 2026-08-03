import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthoritySubnavId =
  | 'intro'
  | 'gallery'
  | 'keyFacts'
  | 'fit'
  | 'practical'
  | 'stay';

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthoritySubnavId;
  label: string;
  href: string;
};

const labels: Record<TarifaAuthoritySubnavId, Record<AmaraLanguage, string>> = {
  intro: {
    en: 'Introduction',
    de: 'Einführung',
    es: 'Introducción',
    nl: 'Introductie',
    sv: 'Introduktion'
  },
  gallery: {
    en: 'Impressions',
    de: 'Eindrücke',
    es: 'Impresiones',
    nl: 'Impressies',
    sv: 'Intryck'
  },
  keyFacts: {
    en: 'Why Tarifa',
    de: 'Warum Tarifa',
    es: 'Por qué Tarifa',
    nl: 'Waarom Tarifa',
    sv: 'Därför Tarifa'
  },
  fit: {
    en: 'Who it suits',
    de: 'Für wen es passt',
    es: 'Para quién encaja',
    nl: 'Voor wie het past',
    sv: 'Vem det passar'
  },
  practical: {
    en: 'Practical',
    de: 'Praktisches',
    es: 'Información práctica',
    nl: 'Praktisch',
    sv: 'Praktiskt'
  },
  stay: {
    en: 'AMARA stay',
    de: 'AMARA-Unterkunft',
    es: 'Alojamiento AMARA',
    nl: 'AMARA-verblijf',
    sv: 'AMARA-boende'
  }
};

const anchors: Record<TarifaAuthoritySubnavId, string> = {
  intro: '#intro',
  gallery: '#gallery',
  keyFacts: '#key-facts',
  fit: '#travel-fit',
  practical: '#practical',
  stay: '#stay'
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  const locationBase = resolveLink('location_tarifa', currentLang);

  return (Object.keys(anchors) as TarifaAuthoritySubnavId[]).map((id) => ({
    id,
    label: labels[id][currentLang],
    href: `${locationBase}${anchors[id]}`
  }));
}
