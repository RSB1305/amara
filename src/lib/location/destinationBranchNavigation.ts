import { resolveLink } from '../linkResolver';
import type { AmaraLanguage } from '../../types/seo';

export type DestinationBranchId = 'location' | 'experience';
export type DestinationId = 'frigiliana' | 'nerja' | 'tarifa';

const labels: Record<
  AmaraLanguage,
  { location: string; experience: string; switcher: string }
> = {
  en: {
    location: 'Location',
    experience: 'Experiences',
    switcher: 'Switch between location and experiences'
  },
  de: {
    location: 'Ort',
    experience: 'Erlebnisse',
    switcher: 'Zwischen Ort und Erlebnissen wechseln'
  },
  es: {
    location: 'Destino',
    experience: 'Experiencias',
    switcher: 'Cambiar entre destino y experiencias'
  },
  nl: {
    location: 'Locatie',
    experience: 'Ervaringen',
    switcher: 'Wisselen tussen locatie en ervaringen'
  },
  sv: {
    location: 'Plats',
    experience: 'Upplevelser',
    switcher: 'Växla mellan plats och upplevelser'
  }
};

const tokens: Record<
  DestinationId,
  { location: string; experience: string }
> = {
  frigiliana: {
    location: 'location_frigiliana',
    experience: 'frigiliana_experience_hub'
  },
  nerja: {
    location: 'location_nerja',
    experience: 'nerja_experience_hub'
  },
  tarifa: {
    location: 'location_tarifa',
    experience: 'tarifa_experience_hub'
  }
};

export function getDestinationBranchNavigation(
  destination: DestinationId,
  lang: AmaraLanguage
) {
  const copy = labels[lang];
  const destinationTokens = tokens[destination];

  return {
    ariaLabel: copy.switcher,
    items: [
      {
        id: 'location' as const,
        label: copy.location,
        href: resolveLink(destinationTokens.location, lang)
      },
      {
        id: 'experience' as const,
        label: copy.experience,
        href: resolveLink(destinationTokens.experience, lang)
      }
    ]
  };
}
