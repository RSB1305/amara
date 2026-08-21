import { defineKnowledgeFacts } from '../../../schema';

// Research target. Facts are added only after the raw reports have been preserved and evaluated.
export const nerjaParkingFacts = defineKnowledgeFacts([] as const);

export type NerjaParkingFactId = (typeof nerjaParkingFacts)[number]['id'];
