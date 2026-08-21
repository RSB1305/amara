import { defineKnowledgeFacts } from '../../../schema';

// Research target. Facts are added only after the raw reports have been preserved and evaluated.
export const tarifaParkingFacts = defineKnowledgeFacts([] as const);

export type TarifaParkingFactId = (typeof tarifaParkingFacts)[number]['id'];
