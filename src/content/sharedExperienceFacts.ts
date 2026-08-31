import type { AmaraLanguage } from '../types/seo';
import { frigilianaBeachesContent } from './frigilianaBeachesContent';
import { frigilianaDayTripsContent } from './frigilianaDayTripsContent';
import { frigilianaRestaurantsContent } from './frigilianaRestaurantsContent';

/**
 * Read-only projections of facts that are genuinely shared across destination
 * pages. The authored records remain single-source; each page adds its own
 * origin, stay and return context separately.
 */
export function getNerjaCoastGuideFacts(lang: AmaraLanguage) {
  const copy = frigilianaBeachesContent[lang];

  return {
    cardLabels: copy.beachCardLabels,
    sections: copy.beachSections,
    conditions: copy.conditions,
    practical: copy.practical
  };
}

export function getNerjaDiningGuideFacts(lang: AmaraLanguage) {
  const copy = frigilianaRestaurantsContent[lang];

  return {
    cardLabels: copy.cardLabels,
    sections: copy.restaurantSections.filter(
      (section) => section.id === 'special-nerja' || section.id === 'tapas-seafood'
    ),
    planning: {
      ...copy.planning,
      items: copy.planning.items.filter((_, index) => index !== 2)
    }
  };
}

export function getAndalusiaDayTripFacts(lang: AmaraLanguage) {
  const copy = frigilianaDayTripsContent[lang];

  return {
    destinations: copy.destinations,
    practical: copy.practical
  };
}
