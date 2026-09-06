import type { PlaceCopyMap } from '../../lib/placeCopy';
import { frigilianaRestaurantPlaceCopy } from './frigiliana-restaurants';
import { nerjaRestaurantPlaceCopy } from './nerja-restaurants';
import { nerjaBeachPlaceCopy } from './nerja-beaches';
import { frigilianaHikingPlaceCopy } from './frigiliana-hiking';
import { frigilianaDayTripPlaceCopy } from './frigiliana-day-trips';
import { frigilianaWellnessPlaceCopy } from './frigiliana-wellness';
import { nerjaHikingPlaceCopy } from './nerja-hiking';
import { nerjaWellnessPlaceCopy } from './nerja-wellness';

/**
 * Every place written once, both projections side by side (DR-GUEST-006).
 * Keyed by the recommendation record id; the record owns the language-free data.
 */
export const placeCopyById: PlaceCopyMap = {
  ...frigilianaRestaurantPlaceCopy,
  ...nerjaRestaurantPlaceCopy,
  ...nerjaBeachPlaceCopy,
  ...frigilianaHikingPlaceCopy,
  ...frigilianaDayTripPlaceCopy,
  ...frigilianaWellnessPlaceCopy,
  ...nerjaHikingPlaceCopy,
  ...nerjaWellnessPlaceCopy
};
