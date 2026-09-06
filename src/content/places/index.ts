import type { PlaceCopyMap } from '../../lib/placeCopy';
import { frigilianaRestaurantPlaceCopy } from './frigiliana-restaurants';
import { nerjaRestaurantPlaceCopy } from './nerja-restaurants';

/**
 * Every place written once, both projections side by side (DR-GUEST-006).
 * Keyed by the recommendation record id; the record owns the language-free data.
 */
export const placeCopyById: PlaceCopyMap = {
  ...frigilianaRestaurantPlaceCopy,
  ...nerjaRestaurantPlaceCopy
};
