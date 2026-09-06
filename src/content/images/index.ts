import type { RouteImageSet } from '../../lib/images/routeImageContract';
import { frigilianaImages } from './frigiliana';
import { frigilianaFaqImages } from './frigiliana-faq';
import { frigilianaOrNerjaImages } from './frigiliana-or-nerja';
import { frigilianaExperienceImages } from './frigiliana-experience';
import { frigilianaExperienceMarketImages } from './frigiliana-experience-market';
import { frigilianaExperienceOldTownImages } from './frigiliana-experience-old-town';
import { frigilianaExperienceDosTumbasImages } from './frigiliana-experience-dos-tumbas';
import { frigilianaExperienceWellnessImages } from './frigiliana-experience-wellness';
import { frigilianaExperienceHikingImages } from './frigiliana-experience-hiking';
import { frigilianaExperienceBeachesImages } from './frigiliana-experience-beaches';
import { frigilianaExperienceDayTripsImages } from './frigiliana-experience-day-trips';
import { frigilianaExperienceRestaurantsImages } from './frigiliana-experience-restaurants';
import { frigilianaExperienceFestivalsImages } from './frigiliana-experience-festivals';
import { nerjaImages } from './nerja';
import { nerjaExperienceImages } from './nerja-experience';
import { nerjaExperienceBeachesImages } from './nerja-experience-beaches';
import { nerjaExperienceDayTripsImages } from './nerja-experience-day-trips';
import { nerjaExperienceFoodImages } from './nerja-experience-food';
import { nerjaExperienceNightlifeImages } from './nerja-experience-nightlife';
import { tarifaImages } from './tarifa';
import { tarifaExperienceImages } from './tarifa-experience';
import { tarifaExperienceBeachesImages } from './tarifa-experience-beaches';

const sets: readonly RouteImageSet[] = [
  frigilianaImages,
  frigilianaFaqImages,
  frigilianaOrNerjaImages,
  frigilianaExperienceImages,
  frigilianaExperienceMarketImages,
  frigilianaExperienceOldTownImages,
  frigilianaExperienceDosTumbasImages,
  frigilianaExperienceWellnessImages,
  frigilianaExperienceHikingImages,
  frigilianaExperienceBeachesImages,
  frigilianaExperienceDayTripsImages,
  frigilianaExperienceRestaurantsImages,
  frigilianaExperienceFestivalsImages,
  nerjaImages,
  nerjaExperienceImages,
  nerjaExperienceBeachesImages,
  nerjaExperienceDayTripsImages,
  nerjaExperienceFoodImages,
  nerjaExperienceNightlifeImages,
  tarifaImages,
  tarifaExperienceImages,
  tarifaExperienceBeachesImages
];

/** Every route key with an image source, keyed by route key (DR-DESIGN-021). */
export const routeImageSets: Readonly<Record<string, RouteImageSet>> = Object.fromEntries(
  sets.map((set) => [set.routeKey, set])
);

if (Object.keys(routeImageSets).length !== sets.length) {
  throw new Error('[AMARA images] Duplicate route key in src/content/images');
}
