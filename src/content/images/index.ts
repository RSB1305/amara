import type { RouteImageSet } from '../../lib/images/routeImageContract';
import { frigilianaExperienceBeachesImages } from './frigiliana-experience-beaches';
import { frigilianaExperienceDayTripsImages } from './frigiliana-experience-day-trips';
import { frigilianaExperienceDosTumbasImages } from './frigiliana-experience-dos-tumbas';
import { frigilianaExperienceFestivalsImages } from './frigiliana-experience-festivals';
import { frigilianaExperienceHikingImages } from './frigiliana-experience-hiking';
import { frigilianaExperienceMarketImages } from './frigiliana-experience-market';
import { frigilianaExperienceOldTownImages } from './frigiliana-experience-old-town';
import { frigilianaExperienceRestaurantsImages } from './frigiliana-experience-restaurants';
import { frigilianaExperienceWellnessImages } from './frigiliana-experience-wellness';
import { frigilianaExperienceImages } from './frigiliana-experience';
import { frigilianaFaqImages } from './frigiliana-faq';
import { frigilianaOrNerjaImages } from './frigiliana-or-nerja';
import { frigilianaImages } from './frigiliana';
import { nerjaExperienceBeachesImages } from './nerja-experience-beaches';
import { nerjaExperienceDayTripsImages } from './nerja-experience-day-trips';
import { nerjaExperienceFoodImages } from './nerja-experience-food';
import { nerjaExperienceNightlifeImages } from './nerja-experience-nightlife';
import { nerjaExperienceImages } from './nerja-experience';
import { nerjaImages } from './nerja';
import { tarifaExperienceBeachesImages } from './tarifa-experience-beaches';
import { tarifaExperienceImages } from './tarifa-experience';
import { tarifaKitesurfingBeginnerGuideImages } from './tarifa-kitesurfing-beginner-guide';
import { tarifaKitesurfingBildungsurlaubImages } from './tarifa-kitesurfing-bildungsurlaub';
import { tarifaKitesurfingEquipmentImages } from './tarifa-kitesurfing-equipment';
import { tarifaKitesurfingForecastImages } from './tarifa-kitesurfing-forecast';
import { tarifaKitesurfingKitecampImages } from './tarifa-kitesurfing-kitecamp';
import { tarifaKitesurfingSchoolImages } from './tarifa-kitesurfing-school';
import { tarifaKitesurfingSpotsImages } from './tarifa-kitesurfing-spots';
import { tarifaKitesurfingSurfClubImages } from './tarifa-kitesurfing-surf-club';
import { tarifaKitesurfingWindImages } from './tarifa-kitesurfing-wind';
import { tarifaKitesurfingImages } from './tarifa-kitesurfing';
import { tarifaImages } from './tarifa';

const sets: readonly RouteImageSet[] = [
  frigilianaExperienceBeachesImages,
  frigilianaExperienceDayTripsImages,
  frigilianaExperienceDosTumbasImages,
  frigilianaExperienceFestivalsImages,
  frigilianaExperienceHikingImages,
  frigilianaExperienceMarketImages,
  frigilianaExperienceOldTownImages,
  frigilianaExperienceRestaurantsImages,
  frigilianaExperienceWellnessImages,
  frigilianaExperienceImages,
  frigilianaFaqImages,
  frigilianaOrNerjaImages,
  frigilianaImages,
  nerjaExperienceBeachesImages,
  nerjaExperienceDayTripsImages,
  nerjaExperienceFoodImages,
  nerjaExperienceNightlifeImages,
  nerjaExperienceImages,
  nerjaImages,
  tarifaExperienceBeachesImages,
  tarifaExperienceImages,
  tarifaKitesurfingBeginnerGuideImages,
  tarifaKitesurfingBildungsurlaubImages,
  tarifaKitesurfingEquipmentImages,
  tarifaKitesurfingForecastImages,
  tarifaKitesurfingKitecampImages,
  tarifaKitesurfingSchoolImages,
  tarifaKitesurfingSpotsImages,
  tarifaKitesurfingSurfClubImages,
  tarifaKitesurfingWindImages,
  tarifaKitesurfingImages,
  tarifaImages
];

/** Every route key with an image source, keyed by route key (DR-DESIGN-021). */
export const routeImageSets: Readonly<Record<string, RouteImageSet>> = Object.fromEntries(
  sets.map((set) => [set.routeKey, set])
);

if (Object.keys(routeImageSets).length !== sets.length) {
  throw new Error('[AMARA images] Duplicate route key in src/content/images');
}
