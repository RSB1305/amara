import type { TarifaGuideId } from '../../content/tarifaGuideContent';
import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type TarifaAuthoritySubnavId = TarifaGuideId | 'experience';
export type TarifaAuthorityBranchId = 'location' | 'experience';
export type TarifaAuthorityChildId = 'where-to-stay' | 'beaches' | 'wind';

export type TarifaAuthoritySubnavItem = {
  id: TarifaAuthorityBranchId;
  label: string;
  href: string;
  children: Array<{
    id: TarifaAuthorityChildId;
    label: string;
    href: string;
  }>;
};

const labels: Record<
  AmaraLanguage,
  {
    location: string;
    experience: string;
    whereToStay: string;
    beaches: string;
    wind: string;
  }
> = {
  en: {
    location: 'Location',
    experience: 'Experience',
    whereToStay: 'Where to stay / areas',
    beaches: 'Beaches & coast',
    wind: 'Wind & watersports'
  },
  de: {
    location: 'Lage',
    experience: 'Erlebnisse',
    whereToStay: 'Wo übernachten / Lagen',
    beaches: 'Strände & Küste',
    wind: 'Wind & Wassersport'
  },
  es: {
    location: 'Ubicación',
    experience: 'Experiencias',
    whereToStay: 'Dónde alojarse / zonas',
    beaches: 'Playas y costa',
    wind: 'Viento y deportes acuáticos'
  },
  nl: {
    location: 'Locatie',
    experience: 'Ervaringen',
    whereToStay: 'Waar overnachten / gebieden',
    beaches: 'Stranden & kust',
    wind: 'Wind & watersport'
  },
  sv: {
    location: 'Läge',
    experience: 'Upplevelser',
    whereToStay: 'Var ska man bo / områden',
    beaches: 'Stränder & kust',
    wind: 'Vind & vattensport'
  }
};

export function getTarifaAuthoritySubnav(
  currentLang: AmaraLanguage
): TarifaAuthoritySubnavItem[] {
  const copy = labels[currentLang];

  return [
    {
      id: 'location',
      label: copy.location,
      href: resolveLink('location_tarifa', currentLang),
      children: [
        {
          id: 'where-to-stay',
          label: copy.whereToStay,
          href: resolveLink('tarifa_where_to_stay', currentLang)
        }
      ]
    },
    {
      id: 'experience',
      label: copy.experience,
      href: resolveLink('tarifa_experience_hub', currentLang),
      children: [
        {
          id: 'beaches',
          label: copy.beaches,
          href: resolveLink('tarifa_beaches_authority', currentLang)
        },
        {
          id: 'wind',
          label: copy.wind,
          href: resolveLink('tarifa_wind_kitesurfing_authority', currentLang)
        }
      ]
    }
  ];
}
