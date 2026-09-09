import type { KnowledgeRecommendation } from '../schema';
import { frigilianaRestaurantRecommendations } from './frigiliana/restaurants';
import { frigilianaBreakfastRecommendations } from './frigiliana/breakfast';
import { nerjaRestaurantRecommendations } from './nerja/restaurants';
import { nerjaBreakfastRecommendations } from './nerja/breakfast';
import { nerjaBeachRecommendations } from './nerja/beaches';
import { frigilianaHikingRecommendations } from './frigiliana/hiking';
import { nerjaHikingRecommendations } from './nerja/hiking';
import { tarifaFoodDrinkRecommendations } from './tarifa/food-drink';
import { tarifaNightlifeRecommendations } from './tarifa/nightlife';
import { tarifaActivitiesRecommendations } from './tarifa/activities';
import { tarifaFamilyRecommendations } from './tarifa/family';
import { tarifaWhaleWatchingRecommendations } from './tarifa/whale-watching';
import { tarifaEssentialsRecommendations } from './tarifa/essentials';
import { nerjaWellnessRecommendations } from './nerja/wellness';
import { nerjaAdventureRecommendations } from './nerja/adventure';
import { frigilianaAdventureRecommendations } from './frigiliana/adventure';
import { frigilianaEssentialsRecommendations } from './frigiliana/essentials';
import { nerjaEssentialsRecommendations } from './nerja/essentials';
import { tarifaBeachesRecommendations } from './tarifa/beaches';
import { tarifaSightseeingRecommendations } from './tarifa/sightseeing';
import { tarifaKitesurfingRecommendations } from './tarifa/kitesurfing';
import { nerjaSightseeingRecommendations } from './nerja/sightseeing';
import { frigilianaSightseeingRecommendations } from './frigiliana/sightseeing';
import { frigilianaDayTripsRecommendations } from './frigiliana/day-trips';
import { frigilianaWellnessRecommendations } from './frigiliana/wellness';
import { nerjaNightlifeRecommendations } from './nerja/nightlife';

/** Every recommendation record, one place maintained once. Ids are unique across destinations and topics. */
export const allRecommendations: readonly KnowledgeRecommendation[] = [
  ...frigilianaRestaurantRecommendations,
  ...frigilianaBreakfastRecommendations,
  ...nerjaRestaurantRecommendations,
  ...nerjaBreakfastRecommendations,
  ...nerjaBeachRecommendations,
  ...frigilianaHikingRecommendations,
  ...nerjaHikingRecommendations,
  ...tarifaFoodDrinkRecommendations,
  ...tarifaNightlifeRecommendations,
  ...tarifaActivitiesRecommendations,
  ...tarifaFamilyRecommendations,
  ...tarifaWhaleWatchingRecommendations,
  ...tarifaEssentialsRecommendations,
  ...nerjaWellnessRecommendations,
  ...nerjaAdventureRecommendations,
  ...frigilianaAdventureRecommendations,
  ...frigilianaEssentialsRecommendations,
  ...nerjaEssentialsRecommendations,
  ...tarifaBeachesRecommendations,
  ...tarifaSightseeingRecommendations,
  ...tarifaKitesurfingRecommendations,
  ...nerjaSightseeingRecommendations,
  ...frigilianaSightseeingRecommendations,
  ...frigilianaDayTripsRecommendations,
  ...frigilianaWellnessRecommendations,
  ...nerjaNightlifeRecommendations
];

const byId = new Map<string, KnowledgeRecommendation>();
for (const record of allRecommendations) {
  if (byId.has(record.id)) throw new Error(`Duplicate recommendation id: ${record.id}`);
  byId.set(record.id, record);
}

export function getRecommendation(id: string): KnowledgeRecommendation | undefined {
  return byId.get(id);
}
