import { resolveLink, resolveOptionalLink, type LinkToken } from '../linkResolver';
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
  { location: LinkToken; experience: LinkToken }
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

const destinationNames: Record<DestinationId, string> = {
  frigiliana: 'Frigiliana',
  nerja: 'Nerja',
  tarifa: 'Tarifa'
};

const contextLabels: Record<
  AmaraLanguage,
  {
    breadcrumb: string;
    guideNavigation: (destination: string) => string;
  }
> = {
  en: {
    breadcrumb: 'Breadcrumb',
    guideNavigation: (destination) => `${destination} guide navigation`
  },
  de: {
    breadcrumb: 'Brotkrümelnavigation',
    guideNavigation: (destination) => `Navigation im ${destination}-Guide`
  },
  es: {
    breadcrumb: 'Migas de pan',
    guideNavigation: (destination) => `Navegación de la guía de ${destination}`
  },
  nl: {
    breadcrumb: 'Broodkruimelnavigatie',
    guideNavigation: (destination) => `Navigatie van de ${destination}-gids`
  },
  sv: {
    breadcrumb: 'Brödsmulenavigering',
    guideNavigation: (destination) => `Navigering i ${destination}-guiden`
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

/**
 * Resolves the destination-level copy and links shared by location context
 * wrappers. Destination-specific hierarchy and grouping remain with each
 * wrapper because those page-family contracts intentionally differ.
 */
export function getDestinationContextNavigation(
  destination: DestinationId,
  lang: AmaraLanguage
) {
  const destinationName = destinationNames[destination];
  const copy = contextLabels[lang];

  return {
    branchNavigation: getDestinationBranchNavigation(destination, lang),
    breadcrumbAriaLabel: copy.breadcrumb,
    switcherAriaLabel: copy.guideNavigation(destinationName),
    homeHref: resolveOptionalLink('home', lang, {
      suppressMissing: true
    }),
    destinationHref: resolveOptionalLink(tokens[destination].location, lang, {
      suppressMissing: true
    }),
    destinationName
  };
}
