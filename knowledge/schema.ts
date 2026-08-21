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

export interface KnowledgeResearchInput {
  provider: KnowledgeResearchProvider;
  destination: KnowledgeDriveFolder;
  status: 'awaiting-upload' | 'uploaded' | 'ingested';
  receivedAt?: string;
}

export interface KnowledgeResearchRun {
  id: string;
  topic: string;
  subjects: readonly string[];
  createdAt: string;
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
  status: 'awaiting-research' | 'normalizing' | 'ready' | 'needs-review';
  driveFolder: KnowledgeDriveFolder;
  publicContentPath: string;
  researchRunIds: readonly string[];
  coverage: readonly KnowledgeCoverageEntry[];
}

export const defineKnowledgeSources = <const T extends readonly KnowledgeSource[]>(sources: T): T => sources;

export const defineKnowledgeFacts = <const T extends readonly KnowledgeFact[]>(facts: T): T => facts;

export const defineKnowledgeOpenQuestions = <const T extends readonly KnowledgeOpenQuestion[]>(questions: T): T =>
  questions;

export const defineKnowledgeResearchRun = <const T extends KnowledgeResearchRun>(run: T): T => run;

export const defineKnowledgePageManifest = <const T extends KnowledgePageManifest>(manifest: T): T => manifest;
