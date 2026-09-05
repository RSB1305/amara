import type { KnowledgeRecommendation } from '../schema';
import { frigilianaRestaurantRecommendations } from './frigiliana/restaurants';
import { frigilianaBreakfastRecommendations } from './frigiliana/breakfast';
import { nerjaRestaurantRecommendations } from './nerja/restaurants';
import { nerjaBreakfastRecommendations } from './nerja/breakfast';
import { nerjaBeachRecommendations } from './nerja/beaches';
import { frigilianaHikingRecommendations } from './frigiliana/hiking';
import { nerjaHikingRecommendations } from './nerja/hiking';

/** Every recommendation record, one place maintained once. Ids are unique across destinations and topics. */
export const allRecommendations: readonly KnowledgeRecommendation[] = [
  ...frigilianaRestaurantRecommendations,
  ...frigilianaBreakfastRecommendations,
  ...nerjaRestaurantRecommendations,
  ...nerjaBreakfastRecommendations,
  ...nerjaBeachRecommendations,
  ...frigilianaHikingRecommendations,
  ...nerjaHikingRecommendations
];

const byId = new Map<string, KnowledgeRecommendation>();
for (const record of allRecommendations) {
  if (byId.has(record.id)) throw new Error(`Duplicate recommendation id: ${record.id}`);
  byId.set(record.id, record);
}

export function getRecommendation(id: string): KnowledgeRecommendation | undefined {
  return byId.get(id);
}
