import type { AmaraLanguage } from '../types/seo';
import { frigilianaBeachesContent } from './frigilianaBeachesContent';
import { frigilianaDayTripsContent } from './frigilianaDayTripsContent';
import { frigilianaHikingContent } from './frigilianaHikingContent';
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

/**
 * Compact booked-guest projection of the four public hiking records.
 * Route identity, facts and source links remain owned by the public
 * hiking content; Guest Utility adds only its action-oriented shell.
 */
export function getFrigilianaHikingUtilityFacts() {
  return frigilianaHikingContent.routeSections.flatMap((section) =>
    section.routes.map((route) => ({
      id: route.id,
      title: route.title,
      duration: 'duration' in route ? route.duration : undefined,
      distance: 'distance' in route ? route.distance : undefined,
      elevationGain: 'elevationGain' in route ? route.elevationGain : undefined,
      difficulty: route.difficulty,
      experience: route.experience,
      links: route.links.map(({ label, href }) => ({ label, href }))
    }))
  );
}
