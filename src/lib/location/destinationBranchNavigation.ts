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

const branchIntroCopy: Record<
  AmaraLanguage,
  {
    locationDescription: (destination: string) => string;
    experienceTitle: (destination: string) => string;
    experienceDescription: (destination: string) => string;
  }
> = {
  en: {
    locationDescription: (destination) => `What you should know about ${destination}.`,
    experienceTitle: (destination) => `${destination} & surroundings`,
    experienceDescription: (destination) =>
      `What you can experience in ${destination} and the surrounding region.`
  },
  de: {
    locationDescription: (destination) => `Was ihr über ${destination} wissen solltet.`,
    experienceTitle: (destination) => `${destination} & Region`,
    experienceDescription: (destination) =>
      `Was ihr in ${destination} und der Region erleben könnt.`
  },
  es: {
    locationDescription: (destination) => `Lo que debéis saber sobre ${destination}.`,
    experienceTitle: (destination) => `${destination} y la región`,
    experienceDescription: (destination) =>
      `Lo que podéis vivir en ${destination} y sus alrededores.`
  },
  nl: {
    locationDescription: (destination) => `Wat jullie over ${destination} moeten weten.`,
    experienceTitle: (destination) => `${destination} & omgeving`,
    experienceDescription: (destination) =>
      `Wat jullie in ${destination} en de omgeving kunnen beleven.`
  },
  sv: {
    locationDescription: (destination) => `Det ni behöver veta om ${destination}.`,
    experienceTitle: (destination) => `${destination} med omnejd`,
    experienceDescription: (destination) =>
      `Det ni kan uppleva i ${destination} med omnejd.`
  }
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
  const intro = branchIntroCopy[lang];
  const destinationTokens = tokens[destination];
  const destinationName = destinationNames[destination];

  return {
    ariaLabel: copy.switcher,
    items: [
      {
        id: 'location' as const,
        label: copy.location,
        title: destinationName,
        description: intro.locationDescription(destinationName),
        href: resolveLink(destinationTokens.location, lang)
      },
      {
        id: 'experience' as const,
        label: copy.experience,
        title: intro.experienceTitle(destinationName),
        description: intro.experienceDescription(destinationName),
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
