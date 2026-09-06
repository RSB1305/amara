export type KnowledgeVerificationStatus =
  | 'verified'
  | 'partially-verified'
  | 'first-party-observation'
  | 'unverified'
  | 'disputed'
  | 'superseded';

export type KnowledgeVolatility = 'low' | 'medium' | 'high';

export type KnowledgeSourceType =
  | 'official'
  | 'first-party-observation'
  | 'operator-provided'
  | 'secondary'
  | 'discovery-tool'
  | 'internal-editorial-baseline';

export interface KnowledgeSource {
  id: string;
  title: string;
  publisher: string;
  sourceType: KnowledgeSourceType;
  url?: string;
  locator?: string;
  accessedAt?: string;
  observedAt?: string;
  language?: string;
  scope: string;
  limitations: string;
  reuse: 'link-and-cite' | 'internal-only';
}

export interface KnowledgeFact {
  id: string;
  subject: string;
  topic: string;
  statement: string;
  status: KnowledgeVerificationStatus;
  sourceIds: readonly string[];
  checkedAt: string;
  reviewAfter?: string;
  volatility: KnowledgeVolatility;
  claimBoundary: string;
  notes?: string;
  supersedes?: readonly string[];
}

export interface KnowledgeOpenQuestion {
  id: string;
  subject: string;
  topic: string;
  question: string;
  priority: 'low' | 'medium' | 'high';
  reason: string;
  preferredEvidence: string;
  status: 'open' | 'researching' | 'resolved';
  createdAt: string;
}

export interface EvidenceReferenceMap<FactId extends string = string> {
  readonly [authoringArea: string]: {
    factIds: readonly FactId[];
    purpose: string;
  };
}

export type KnowledgeResearchProvider = 'gpt-deep-research' | 'gemini-deep-research' | 'operator-provided';

export type KnowledgeResearchRunStatus = 'awaiting-raw' | 'raw-received' | 'normalized' | 'archived';

export interface KnowledgeDriveFolder {
  id: string;
  url: string;
  path: string;
}

export interface KnowledgeDriveFile {
  id: string;
  url: string;
  path: string;
}

export interface KnowledgeRawArtifact extends KnowledgeDriveFile {
  mimeType: string;
  sizeBytes: number;
  preservation: 'original-upload' | 'rendered-text-export';
  originalName?: string;
}

export interface KnowledgeResearchInput {
  provider: KnowledgeResearchProvider;
  destination: KnowledgeDriveFolder;
  status: 'awaiting-upload' | 'uploaded' | 'ingested';
  receivedAt?: string;
  sourceUrl?: string;
  artifact?: KnowledgeRawArtifact;
}

export interface KnowledgeResearchRun {
  id: string;
  topic: string;
  subjects: readonly string[];
  createdAt: string;
  updatedAt: string;
  status: KnowledgeResearchRunStatus;
  promptPath: string;
  promptDriveFile: KnowledgeDriveFile;
  driveFolder: KnowledgeDriveFolder;
  inputs: readonly KnowledgeResearchInput[];
}

export type KnowledgeCoverageStatus = 'baseline-unmapped' | 'partial' | 'covered' | 'gap' | 'excluded';

export interface KnowledgeCoverageEntry {
  authoringArea: string;
  purpose: string;
  factIds: readonly string[];
  status: KnowledgeCoverageStatus;
  notes?: string;
}

export interface KnowledgePageManifest {
  id: string;
  destination: string;
  topic: string;
  createdAt: string;
  updatedAt: string;
  status: 'awaiting-research' | 'research-received' | 'normalizing' | 'ready' | 'needs-review' | 'retired';
  driveFolder: KnowledgeDriveFolder;
  publicContentPath?: string;
  researchRunIds: readonly string[];
  coverage: readonly KnowledgeCoverageEntry[];
}

/**
 * Recommendation records (Feature Contract 11, DR-EXPERIENCE-003…007).
 * A record is the approved selection decision and its structured, language-free data.
 * Guest and public copy are authored separately per surface; the record is maintained once.
 */
export type KnowledgeRecommendationStatus =
  | 'CANDIDATE'
  | 'HUMAN_REVIEW'
  | 'FIELD_VALIDATION_REQUIRED'
  | 'APPROVED'
  | 'REJECTED'
  | 'DEFERRED'
  | 'PAUSED'
  | 'RETIRED';

/** DR-EXPERIENCE-005: provenance is independent of status and scope. */
export type KnowledgeRecommendationProvenance = 'researched' | 'amara-first-hand' | 'mixed';

/** DR-EXPERIENCE-005: where an approved recommendation may appear. */
export type KnowledgeRecommendationScope = 'public' | 'amara-experience' | 'split' | 'internal';

export type KnowledgeRecommendationPlaceKind =
  | 'restaurant'
  | 'cafe'
  | 'bar'
  | 'beach'
  | 'hike'
  | 'sight'
  | 'shop'
  | 'service'
  | 'provider'
  | 'venue';

/** The AMARA stay a distance is measured from. Casa AMARA holds the four Frigiliana stays. */
export type KnowledgeStayKey = 'casa-amara' | 'amara-playa' | 'amara-family-surf';

export interface KnowledgeRecommendationPlace {
  name: string;
  kind: KnowledgeRecommendationPlaceKind;
  /** Address or position as published by the operator or the municipality. */
  address?: string;
  /** Google place id; when present the guide links the place directly instead of a name search. */
  placeId?: string;
  /** Map link used until a place id is verified: a name search or a maps.app short link. */
  mapsUrl?: string;
  /** E.164 numbers. */
  phone?: string;
  whatsapp?: string;
  website?: string;
  reservationUrl?: string;
}

export interface KnowledgeRecommendationAccess {
  from: KnowledgeStayKey;
  distanceMetres?: number;
  walkMinutes?: number;
  driveMinutes?: number;
  note?: string;
}

export interface KnowledgeRecommendationOperating {
  /** Published hours, closing days or seasonal access regime as observed on the given date. */
  note: string;
  observedAt: string;
}

export interface KnowledgeRecommendation {
  /** `<destination>.<topic>.<place-slug>`, destination and topic being route keys. */
  id: string;
  destination: string;
  topic: string;
  place: KnowledgeRecommendationPlace;
  /** English editorial reason for inclusion from the host perspective; not guest copy. */
  summary: string;
  bestFor?: readonly string[];
  access?: readonly KnowledgeRecommendationAccess[];
  operating?: KnowledgeRecommendationOperating;
  /** Id of the alternative to name when this place is closed, full or unsuitable that day. */
  planB?: string;
  provenance: KnowledgeRecommendationProvenance;
  status: KnowledgeRecommendationStatus;
  scope: KnowledgeRecommendationScope;
  /** How the current status came about. */
  basis: 'published-guide-carryover' | 'operator-review' | 'research-candidate';
  factIds?: readonly string[];
  sourceIds?: readonly string[];
  checkedAt: string;
  reviewAfter?: string;
  volatility: KnowledgeVolatility;
  claimBoundary?: string;
  notes?: string;
}

export const defineKnowledgeSources = <const T extends readonly KnowledgeSource[]>(sources: T): T => sources;

export const defineKnowledgeFacts = <const T extends readonly KnowledgeFact[]>(facts: T): T => facts;

export const defineKnowledgeOpenQuestions = <const T extends readonly KnowledgeOpenQuestion[]>(questions: T): T =>
  questions;

export const defineKnowledgeResearchRun = <const T extends KnowledgeResearchRun>(run: T): T => run;

export const defineKnowledgePageManifest = <const T extends KnowledgePageManifest>(manifest: T): T => manifest;

export const defineKnowledgeRecommendations = <const T extends readonly KnowledgeRecommendation[]>(records: T): T =>
  records;
