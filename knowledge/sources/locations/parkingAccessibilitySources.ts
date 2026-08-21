import { defineKnowledgeSources } from '../../schema';

// Cross-destination research target. Frigiliana's existing baseline sources remain in
// frigilianaParkingSources.ts and are not duplicated here.
export const parkingAccessibilitySources = defineKnowledgeSources([] as const);

export type ParkingAccessibilitySourceId = (typeof parkingAccessibilitySources)[number]['id'];
