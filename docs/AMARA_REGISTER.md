---
document_id: AMARA-REG-001
title: AMARA Register
version: 1.15.0
status: ACTIVE
authority_class: LIVING BINDING REGISTER
activation_state: ACTIVE
effective_from: 2026-08-14
last_modified: 2026-08-23T19:30:21+02:00
canonical_path: /docs/AMARA_REGISTER.md
---

# AMARA Register V1

## 1. Purpose

The AMARA Register is the single source for active documents, authority classes, normative owners, mutable decisions, review triggers, supersession and cross-system change history.

## 2. Active Document Register

| Slot | Document owner | Version/status | Class | Canonical/current source |
|---|---|---|---|---|
| 01 | AMARA System Constitution | 5.2.0 ACTIVE | PRINCIPLE / governing | `docs/standards/01_AMARA_System_Constitution_V5.md` |
| 02 | AMARA Astro & Design Architecture Contract | 4.2.0 ACTIVE INTERIM | CONTRACT / governing | `docs/interim/03_AMARA_Astro_Technical_Standard_V4.md` + current repository implementation |
| 03 | AMARA Runtime, SEO & Data Contract | PENDING Package 2 | CONTRACT / governing | Interim snapshot: `docs/interim/04_AMARA_Runtime_and_SEO_Standard_V4.md` + current repository implementation |
| 04 | AMARA URL, Route & Link Contract | PENDING Package 2 | CONTRACT / governing | Interim snapshot: `docs/interim/05_AMARA_URL_and_Route_Infrastructure_V4.md` + Decision Register |
| 05 | AMARA Governance, Execution & Documentation Lifecycle | 5.5.0 ACTIVE | CONTRACT / governing | `docs/standards/05_AMARA_Governance_Execution_and_Documentation_Lifecycle_V5.md` |
| 06 | AMARA Performance & Delivery Standard | 2.1.0 ACTIVE INTERIM | PRINCIPLE/CONTRACT / governing | `docs/interim/07_AMARA_Performance_Standard_V2.md` |
| 07 | AMARA Register | 1.15.0 ACTIVE | LIVING BINDING REGISTER | `docs/AMARA_REGISTER.md` |
| 08 | AMARA Guest Utility Feature Contract | 2.1.0 ACTIVE INTERIM | FEATURE CONTRACT | `docs/interim/08_AMARA_Guest_Utility_Architecture_V2.md` |
| 09 | AMARA Content Production & Localization Playbook | 1.5.0 ACTIVE INTERIM | OPERATIONAL PLAYBOOK / non-governing | `docs/interim/10_AMARA_Content_Production_and_Localization_Playbook_V1_2.md` |
| 10 | AMARA Frigiliana–Nerja SEO Strategy | PENDING Package 2/3 | WORKING STRATEGY / non-governing | Interim snapshot: `docs/interim/09_AMARA_Frigiliana_Nerja_SEO_Strategy_V2_1.md` |

### Transition rule

The seven `docs/interim/` files are faithful Markdown snapshots of the approved source documents. They do not create new rules. Where an intentional supersession is explicitly recorded by the Constitution, Governance or Decision Register, the higher owner governs.

Current operational feature owner during transition:

| Feature | Status | Current owner | Repository reality |
|---|---|---|---|
| External booking / availability / checkout boundary | ACTIVE INTERIM CONTRACT | `AMARA-BOOKING-ARCHITECTURE.md` | Centralized through `src/lib/directBooking.ts`; changes require separate architecture alignment. |

## 3. Decision Register

### Documentation and governance

| ID | Decision | Status |
|---|---|---|
| DR-DOC-001 | Versioned Markdown in the repository is canonical; PDFs/project attachments are optional snapshots/backups. | ACTIVE |
| DR-DOC-002 | This Register is the single active-document and decision register; fixed document counts elsewhere are retired. | ACTIVE |
| DR-DOC-003 | One binding rule has one normative owner; other documents reference rather than independently restate it. | APPROVED |
| DR-DOC-004 | Superseded standards, audits, handovers, prompts and replacement maps are archive evidence, not instruction. | APPROVED |
| DR-DOC-005 | Active owner documents use semantic versioning, ISO-8601 timestamps, required metadata, document-level revision history and the Change Ledger. | APPROVED |
| DR-DOC-006 | Activation is determined by canonical repository Markdown + ACTIVE Register entry; attachment/PDF synchronization is not an activation gate. | APPROVED |
| DR-BOOT-001 | A documentation bootstrap or material SSOT migration must pass a read-only compatibility gate with explicit conflict classification before writes are authorized. | APPROVED |
| DR-AGENT-001 | `AGENTS.md` is the model-neutral daily operating contract and vendor files contain no independent policy. For normal Class 0–2 work it is sufficient context; Register/owner reading is triggered only by architecture/SSOT work, protected-contract change or concrete conflict. | ACTIVE |
| DR-EXEC-001 | After scope confirmation: implement -> targeted validate -> exact stage -> atomic commit; push remains separately controlled except an explicitly approved documentation-only SSOT activation. | APPROVED |
| DR-EXEC-002 | Normal work uses one bounded objective and does not repeat settled research without contradiction. A fresh chat is used only when context risk justifies it. | APPROVED |
| DR-EXEC-003 | **FAST is the default execution posture** for Class 0, Class 1 and bounded Class 2 work. Deep process requires a concrete shared/infrastructure risk, unresolved contradiction or release gate. | APPROVED |
| DR-EXEC-004 | A successful targeted implementation validation closes a normal FAST task; no mandatory post-fix re-review. | APPROVED |
| DR-EXEC-005 | Full production builds are not the default for content/local-page work; use them for concrete compile/global risk, Class 3 work or sensible batch/release boundaries. | APPROVED |
| DR-EXEC-006 | Operator time, attention, AI credits, builds and deployments are first-class constraints; process cost must be proportional to realistic failure impact. | APPROVED |
| DR-EXEC-007 | Validated local commits should normally be batched into intentional push/release points instead of automatic micro-pushes. | APPROVED |
| DR-EXEC-008 | Routine new SSOT information may enter an intake queue and be consolidated at `AMARA SSOT SYNC`; do not version multiple owner documents several times per day without a real urgent contract need. | APPROVED |
| DR-EXEC-009 | After a material release batch, the area that batch actually changed may be reviewed for repeated content, renderer and presentation patterns and consolidated behaviour-preservingly, including the shared owners inside that area. The slot is bounded by the changed area; it is not an opening for repository-wide refactoring, redesign or new features, and it does not lower the Class 3 alignment requirement for contracts outside that area. | ACTIVE |
| DR-GOV-001 | Conversational shorthand or a new isolated statement cannot silently supersede an ACTIVE contract; apparent conflicts trigger Reality Reconciliation and explicit contract-level confirmation. | APPROVED |

### Brand

| ID | Decision | Status |
|---|---|---|
| DR-BRAND-001 | AMARA's central brand core is **AMARA — Romantic Hideaways**, with the core promise **special places for shared time as a couple**. Destination Authority, Experience, Trust, Stays and Direct Booking support and substantiate this positioning; they do not replace it. Full normative rule: AMARA System Constitution. | ACTIVE |

### Platform/runtime/links

| ID | Decision | Status |
|---|---|---|
| DR-PLATFORM-001 | AMARA's website runtime is Astro-native and Astro-only. Explicitly governed external operational services may remain active behind narrow boundaries and do not become a second website runtime. | APPROVED |
| DR-BOOK-001 | The current external booking / availability / checkout boundary remains ACTIVE. Its repository owner is `AMARA-BOOKING-ARCHITECTURE.md`, with URL construction centralized in `src/lib/directBooking.ts`. Changes or replacement require a separate aligned architecture workstream. | ACTIVE CURRENT IMPLEMENTATION |
| DR-RUNTIME-001 | BaseLayout plus the central SEO head resolver remain the sole normal public head owner. | ACTIVE CURRENT IMPLEMENTATION |
| DR-RUNTIME-002 | `resolveStructuredData()` remains the normal sole JSON-LD owner. | ACTIVE CURRENT IMPLEMENTATION |
| DR-LINK-001 | Registry token + resolver remain the authored semantic internal-link contract. | ACTIVE CURRENT IMPLEMENTATION |
| DR-SCHEMA-001 | Collection/ItemList schema is not mandatory; any implementation must reflect visible real items and stay in the central resolver. | ACTIVE CURRENT DECISION |
| DR-UTILITY-001 | Guest Guide remains a separate noindex utility shell and is not a Type D conversion surface by principle. | APPROVED; code reconciliation pending |
| DR-SURFACE-001 | Strategic A/B/C/D job and technical surface type should be separate; field reconciliation is a later controlled workstream. | IMPLEMENTATION PENDING |

### URL/route

| ID | Decision | Status |
|---|---|---|
| DR-URL-001 | Spanish remains unprefixed; EN/DE/NL/SV remain language-prefixed under the current route model. | ACTIVE CURRENT IMPLEMENTATION |
| DR-URL-002 | Publication/indexability alone does not permanently freeze a route; generic routes without meaningful external adoption may enter one controlled pre-traffic migration after adoption audit. | MIGRATION PENDING |
| DR-URL-003 | Target model: stable language-neutral route key mapped to localized public slugs for generic editorial/commercial routes; genuine identity slugs may remain shared. | IMPLEMENTATION PENDING |
| DR-URL-004 | After migration or meaningful adoption, path changes require structural/legal/consolidation/brand need, not keyword experimentation. | IMPLEMENTATION PENDING |
| DR-ROUTE-001 | Explicit Astro route wrappers remain the current implementation. | ACTIVE |
| DR-ROUTE-002 | No route-manifest migration is currently approved. | ACTIVE |


### URL-policy supersession boundary

`DR-URL-002/003/004` intentionally supersede the **permanent policy doctrine** that publication/indexability alone creates an irreversible freeze and that generic public slugs must remain language-neutral forever.

They do **not** supersede the current implementation. Until a separately aligned and approved Class-3 migration is implemented, the existing shared-slug output, route ownership, canonical/hreflang behavior, redirects and guardrails remain protected current contracts.

### Performance

| ID | Decision | Status |
|---|---|---|
| DR-PERF-001 | `build.inlineStylesheets: 'auto'` is the current CSS delivery decision. | ACTIVE |
| DR-PERF-002 | Current self-hosted font strategy remains; no preload by default without measured delay. | ACTIVE |

### Design system

| ID | Decision | Status |
|---|---|---|
| DR-DESIGN-001 | The typography roles in `src/styles/global.css` are the sole owner of text size, weight, tracking and case. Typographic arbitrary Tailwind values are policy-checked against a recorded baseline in `scripts/typography-baseline.json`, which fails on a new value and on a resolved value that has not been banked. A genuine exception stays possible and is recorded there rather than argued at review time. | ACTIVE |
| DR-DESIGN-002 | A visual treatment that appears at more than one call site is a role or a component, not a repeated class recipe. Where several spellings of one role are found, the role is fixed at the value the majority of call sites already used, and the resulting step becomes adjustable in one place. | ACTIVE |
| DR-DESIGN-003 | AMARA uses one mobile-first responsive design system. The mobile composition is the canonical source layout; larger viewports progressively enhance space, imagery and column structure without changing the page's semantic order, dominant job or conversion path. | ACTIVE |

### Content/localization

| ID | Principle | Status |
|---|---|---|
| TR-CONTENT-001 | Applicable public pages use dominant-job integrity rather than absolute intent isolation. | APPROVED — intentional supersession |
| TR-CONTENT-002 | Cross-language SSOT is facts, job, evidence, claim boundaries, required information/topics, conversion intent, **meaning depth and material nuance**. No locale may shorten/omit required information. The mandatory English master-language role is superseded; native sentence construction remains locale-specific. | APPROVED — intentional supersession |
| TR-CONTENT-003 | A/B/C/D applies to strategic public content jobs; utility/legal/entry/system surfaces need not be forced into it. | APPROVED — intentional supersession |
| TR-CONTENT-004 | Normal public editorial copy speaks from AMARA's collective host perspective and addresses guests in the plural form natural to EN, DE, ES, NL and SV. This is a perspective rule, not a requirement to repeat pronouns unnaturally. Native authoring may transform verified knowledge into useful host guidance, but it must preserve provenance, verification status, claim boundaries and uncertainty; researched or third-party evidence must not be presented as invented first-party observation. | ACTIVE |
| TR-CONTENT-005 | New and materially revised public editorial copy uses **experiential authority**: it places guests in a concrete, truthful situation and connects the relevant scene or condition to movement, choice, stay consequence and a useful next step. Active verbs and specific verified detail are preferred to distant category language, but the technique is calibrated to the page job and must not weaken direct answers, evidence, caveats, safety, provenance or native-language quality. It does not authorize invented atmosphere, guest behaviour or first-party observation. Utility, legal, system and safety-critical copy prioritizes instruction clarity, and a micro correction does not trigger an adjacent rewrite. | ACTIVE |
| DR-EVIDENCE-001 | `knowledge/` is AMARA's durable, non-public Evidence & Knowledge owner for research dossiers, atomic facts, sources, claim boundaries, review state and open questions. Public authoring in `src/content/` is a curated projection of that knowledge; presentation remains owned by page families and components. | ACTIVE |
| DR-EVIDENCE-002 | Redesigning, shortening or removing public copy must not delete its underlying evidence. New research updates knowledge records through explicit verification or supersession; it does not silently overwrite history or publish itself. | ACTIVE |
| DR-EVIDENCE-003 | Google Drive is AMARA's immutable archive for timestamped raw research inputs; Git `knowledge/` is the canonical versioned evaluation and page-coverage layer. Stable Drive folder IDs are recorded in run/page manifests. Raw uploads never publish directly, and later research uses a new run instead of overwriting an earlier one. | ACTIVE |
| DR-CONTENT-STRUCT-001 | Public content modules localize at the leaf: the module describes the page once and each authored string carries its five locales. `src/types/content.ts` is the owner of that contract and of `LocalizedText`, `LocalizedTextList`, `Localized<T>` and `LocalizedTextSection`. Modules that still carry one whole copy of the page shape per language are migrated as they are materially revised, not in a separate campaign. This is a structural rule only; it does not permit deriving one locale from another, and TR-CONTENT-002 continues to govern meaning depth and material nuance. | ACTIVE |
| DR-CONTENT-STRUCT-002 | The five locales of a content module must carry the same **semantic units**: a key present in one locale exists in all of them, and a list of units — FAQ entries, cards, themes, sections, CTA blocks — holds the same number of entries in every locale. **Identity is enforced only where the entries carry a stable `id`, `token`, `key` or `slug`**; there they must match one for one and in order. A list whose entries have no identifier is compared by count and field shape alone, so a substituted entry of the same shape would not be caught — the contract claims no more than that, and the number of such lists is held by the parity test so it may fall but not rise. Migrating a module to leaf localization removes the exposure entirely, because the list then exists once rather than five times. **Prose segmentation is explicitly not covered.** A locale may split or join paragraphs and list items of running text as its language requires; that is TR-CONTENT-002 working as intended, not a gap, and `LocalizedTextList` is the type that expresses it. Parity is enforced by contract test rather than by review. Gaps are recorded there with what is missing; a recorded gap may only be closed by authored copy in the missing languages, and a gap that no longer exists must be removed from the record. | ACTIVE |
| DR-CONTENT-STRUCT-003 | A list whose *selection* is an editorial decision about a market — different entries per locale rather than the same entries translated — declares itself with the `MARKET_CURATED` marker from `src/types/content.ts`, beside the data rather than in a list of paths held elsewhere. The declaration exempts that list from identity parity and from nothing else. It may not be used to quiet a list that has merely drifted apart: that is a content gap, and marking it would hide what the contract exists to surface. | ACTIVE |
| DR-IA-001 | Public destination information is organized into distinct **Location** and **Experience** branches. Private guest utility content and the non-public Evidence & Knowledge layer remain separate. A subject is assigned by its primary user job and decision context, not merely by a shared topic word; bounded reuse of underlying facts is allowed. | ACTIVE |
| DR-IA-002 | Location uses one shared semantic information model across destinations: **Orientation & Areas**, **Climate & Seasons**, **Arrival & Parking**, and **Daily Life & Essentials**, with the current nine topic units beneath them. This model is a coverage and authoring framework, not a requirement that every topic or destination have an identical standalone public route. | ACTIVE |
| DR-IA-003 | A Location topic may be published as a hub section, standalone guide, short public planning note or private guest content. A standalone public page requires an independent pre-booking or trip-planning job with sufficient durable value; keyword opportunity or cross-destination symmetry alone is insufficient. | ACTIVE |
| DR-IA-004 | Experience uses the shared AMARA design family but keeps a destination-specific editorial taxonomy and page inventory. A full narrative has one canonical public owner for its primary intent, while verified facts may be projected into more than one page without duplicating the knowledge record. | ACTIVE |
| DR-IA-005 | Within **Daily Life & Essentials**, **Supermarkets & Everyday Shopping** is a Location planning topic; a weekly market or market visit as an outing remains an Experience topic. Location may include only the bounded market facts that materially affect everyday shopping or access. The three Daily Life topic families may share one Mobile-First semantic template across destinations, with topic- and destination-specific optional modules. Existing Daily Life routes remain overview hubs; each standalone topic route still requires the evidence and durable-job test in DR-IA-003. | ACTIVE |
| DR-GUEST-001 | Public destination pages must satisfy their durable search, trust and pre-booking planning job from direct entry. The Digital Guest Guide is the deeper operational layer for booked guests, including property-specific routes, current contacts and checks, concrete host recommendations and stay instructions. Public pages may use one native contextual transition block after their useful core to explain that deeper guidance follows after booking and to offer the approved booking/availability path. Essential safety information and material booking limitations must not be withheld behind Guest Guide access. | ACTIVE |

### Analytics/measurement

| ID | Decision | Status |
|---|---|---|
| DR-MEAS-001 | Existing GA4 Measurement ID `G-KJKE3L1HV3` remains the approved measurement property direction unless a later analytics architecture decision changes it. | APPROVED DIRECTION |
| DR-MEAS-002 | Keep the current booking provider's supported native GA4 purchase/revenue integration active while it remains the supported owner of those ecommerce events. | ACTIVE CURRENT DECISION |
| DR-MEAS-003 | The booking system is the financial source of truth for bookings, revenue, ADR and cancellations; GA4 is journey/attribution data, not accounting SSOT. | ACTIVE |
| DR-MEAS-004 | Do not add a second tag/CMP layer to the external booking boundary solely to make a consent-status indicator appear complete without a supported architecture benefit. | ACTIVE CURRENT DECISION |
| DR-MEAS-005 | Do not scrape checkout DOM or undocumented provider variables to recreate purchase tracking. | ACTIVE GUARDRAIL |
| DR-MEAS-006 | Astro analytics/consent is a separate Class 3 workstream and must not be bundled with DNS, URL reform or unrelated design/SEO changes. | IMPLEMENTATION PENDING |
| DR-MEAS-007 | Initial new conversion-intent event is `availability_click`, using stable semantic data attributes rather than button text/URL heuristics. | IMPLEMENTATION PENDING |
| DR-MEAS-008 | Cross-domain continuity across AMARA -> external booking -> checkout must be tested in the live flow, not assumed. | ACTIVE VALIDATION REQUIREMENT |
| DR-MEAS-009 | 3 observed GA4 purchases versus 24 completed website bookings is an observation ratio, not a technical tracking-failure rate. | ACTIVE INTERPRETATION RULE |
| DR-MEAS-010 | GA4 event/user data retention is 14 months. | ACTIVE |

The archived analytics evidence record preserves the investigation that supports these decisions. Archive status of the evidence document does not retire derived decisions.

### SSOT Decision Inbox

Routine new evidence/ideas may be captured here or in the relevant working evidence record without immediately versioning a governing owner. `AMARA SSOT SYNC` promotes only the items that actually change a decision/contract/principle.

**Current inbox at this revision:** empty — the FAST-first execution decisions above are already approved and incorporated.

## 4. Change Ledger

| Timestamp | Scope | Version/change | Decision refs | Commit |
|---|---|---|---|---|
| 2026-08-13 | Documentation reform | Constitution 5.0.0, Governance 5.0.0, Register 1.0.0 approved as Package 1 replacement drafts. | DR-DOC-003, DR-EXEC-001 | historical package snapshot |
| 2026-08-14T08:55:00+02:00 | Reality Reconciliation | Corrected the over-broad interpretation of Astro-only: it governs the website runtime and does not silently remove an independently governed operational boundary. | DR-PLATFORM-001, DR-BOOK-001, DR-GOV-001 | withdrawn candidate; never committed |
| 2026-08-14T09:08:00+02:00 | SSOT Bootstrap V3 candidate | Added repository Markdown snapshots for all seven interim owner documents and introduced a mandatory read-only Compatibility Gate before activation. Gate result: BLOCKED; candidate withdrawn without commit. | DR-DOC-001, DR-DOC-005, DR-BOOT-001 | withdrawn candidate — never committed |
| 2026-08-14T09:28:00+02:00 | SSOT Bootstrap V3.1 candidate | Corrected multilingual supersession scope, declared URL policy supersession while protecting current implementation, removed false activation wording, preserved explicit five-language booking-CTA localization, added source-PDF verification evidence and parked the Legal/analytics mismatch for later reconciliation. | DR-BOOT-001, DR-GOV-001, DR-URL-002/003/004 | candidate only — never committed |
| 2026-08-14T11:41:00+02:00 | FAST-first execution reform | Reversed the daily execution default from risk-heavy validation to minimum-safe FAST execution; removed mandatory re-review/full-build behavior for normal work; added operator-time proportionality, push batching and SSOT intake/sync. | DR-EXEC-003–008 | 5c59674 |
| 2026-08-14T12:30:00+02:00 | FAST preflight checks | Added a repository-wide new-page duplication check and a five-locale structural completeness check to the Governance validation ladder, with an operative summary in `AGENTS.md`. Both run inside FAST; no second agent, no new decision ID, no new governance document. Governance 5.4.0, Register 1.3.1. | DR-EXEC-003, DR-EXEC-004 | 0e2b26a |
| 2026-08-14T12:59:47+02:00 | Execution speed reset | Made `AGENTS.md` sufficient for daily Class 0–2 work, bounded the two FAST preflights, prohibited incidental validation tooling/inventories, activated current SSOT metadata and removed the accidental check scripts/inventory. Governance 5.5.0, Constitution 5.1.1, Register 1.3.2. | DR-AGENT-001, DR-EXEC-001–008, DR-DOC-006 | this revision |
| 2026-08-20 | Evidence & Knowledge architecture | Activated a durable non-public knowledge layer, separated evidence from public authoring and presentation, and established Frigiliana parking as the first controlled pilot. Astro Standard 4.1.0, Register 1.4.0. | DR-EVIDENCE-001–002, TR-CONTENT-002 | this revision |
| 2026-08-20T16:35:01+02:00 | Location & Experience information architecture | Established the shared Location information model, destination-specific Experience inventories, intent-based ownership and conditional publication forms. Preserved research-specific proposals as non-normative hypotheses rather than changing pages or routes. Register 1.5.0. | DR-IA-001–004, DR-EVIDENCE-001–002, TR-CONTENT-001 | this revision |
| 2026-08-21T11:26:50+02:00 | Research archive and knowledge workflow | Established timestamped immutable raw research runs in Google Drive, stable Drive references in Git, and page-level knowledge/coverage manifests for Frigiliana, Nerja and Tarifa Geography & Orientation. Register 1.6.0. | DR-EVIDENCE-001–003, TR-CONTENT-002 | this revision |
| 2026-08-21T22:14:30+02:00 | Measurable performance policy | Activated Performance Standard 2.1.0 with documented mobile lab targets, field p75 targets, post-baseline asset budgets and FAST-compatible measurement scope. | Performance Standard §§15–17 | this revision |
| 2026-08-21T22:14:30+02:00 | Collective host voice | Activated the collective host perspective, plural guest address and evidence-to-host-voice boundary; added the operative detail in Content Playbook 1.3.0 and the daily summary in `AGENTS.md`. | TR-CONTENT-004, DR-EVIDENCE-001–003 | this revision |
| 2026-08-22T06:48:59+02:00 | Daily Life topic ownership and research intake | Separated everyday supermarket planning from weekly-market Experience content, approved a shared Mobile-First topic-family direction subject to the existing standalone-page evidence gate, and opened three cross-destination raw-research runs with nine page coverage manifests. Register 1.8.0. | DR-IA-001–005, DR-EVIDENCE-001–003 | this revision |
| 2026-08-22T07:48:36+02:00 | Public and booked-guest information boundary | Activated the public-usefulness and booked-guest operational-depth split, including a single native transition block and the safety-information exception. Guest Utility 2.1.0, Content Playbook 1.4.0, Register 1.9.0. | DR-GUEST-001, TR-CONTENT-004, DR-IA-001–003 | this revision |
| 2026-08-23T10:25:00+02:00 | Content structure, typography ownership and the consolidation slot | Activated leaf-level localization as the binding content-structure contract with `src/types/content.ts` as its owner, enforced five-locale structural parity by contract test, made the typography roles the enforced owner of text treatment, and opened a bounded post-batch consolidation slot. Register 1.10.0. | DR-CONTENT-STRUCT-001–002, DR-DESIGN-001–002, DR-EXEC-009 | this revision |
| 2026-08-23T11:40:00+02:00 | Semantic parity boundary | Separated semantic units from prose segmentation in the locale parity contract, so a translator's paragraph split is no longer treated as a missing paragraph while a missing FAQ answer, CTA block or card still is. Closed the Frigiliana location gap with authored copy in de, es, nl and sv, and unified the Nerja experience theme order across locales. Register 1.11.0. | DR-CONTENT-STRUCT-002, TR-CONTENT-002, TR-CONTENT-004 | this revision |
| 2026-08-23T12:20:00+02:00 | Parity scope and market curation | Limited the parity contract to what the test actually verifies — identity only where units carry a stable identifier — and held the number of identifier-less unit lists so it can fall but not rise. Gave the Frigiliana location FAQ stable ids, closing the example the audit named. Recorded deliberate per-market selection as a declared exception rather than a content gap. Register 1.12.0. | DR-CONTENT-STRUCT-002, DR-CONTENT-STRUCT-003 | this revision |
| 2026-08-23T12:51:40+02:00 | Experiential authority | Activated truthful, active, situation-led public authoring for new and materially revised editorial copy while preserving page job, evidence, provenance, caveats and safety. Added the operational method in Content Playbook 1.5.0 and the daily summary in `AGENTS.md`. Register 1.13.0. | TR-CONTENT-004–005, TR-CONTENT-002, DR-EVIDENCE-001–002 | this revision |
| 2026-08-23T13:54:40+02:00 | Mobile-first page architecture | Activated one canonical mobile composition with progressive larger-viewport enhancement, and introduced the shared page shell, section rhythm and early booking-decision pattern through the vacation-rental reference family. Astro Standard 4.2.0, Register 1.14.0. | DR-DESIGN-001–003 | this revision |
| 2026-08-23T19:30:21+02:00 | Romantic Hideaways brand core | Restored AMARA — Romantic Hideaways and special places for shared time as a couple as the primary hospitality brand position while preserving Destination Authority, Experience, Trust, Stays and Direct Booking as supporting systems. Constitution 5.2.0, Register 1.15.0. | DR-BRAND-001 | this revision |

## 5. Intentional supersessions

The following are active intentional supersessions, not accidental deletions:

- Master V4.2 + Core V4 -> System Constitution V5;
- Governance V4.2 + Efficient Execution + Productivity Guardrail -> Governance V5;
- mandatory **English is SSOT/master-language** wording -> shared facts/meaning/evidence SSOT with native-language editions, while preserving cross-language meaning depth, required information and material nuance;
- permanent doctrine that generic routes are always shared-slug/frozen after publication -> approved future policy direction in `DR-URL-002/003/004`; **current shared-slug implementation remains protected until a separate Class-3 migration**;
- absolute interpretation of **intent purity** -> dominant Page Job integrity;
- fixed active-document count -> living Register;
- attachment/PDF activation gate -> canonical repository Markdown + Register activation;
- universal full-build expectation for small edits -> risk-proportional validation.

No current booking/availability/checkout implementation, current route output, runtime resolver, URL helper, CSS/token system or analytics runtime is intentionally changed by the bootstrap itself. The URL **policy doctrine** changes only as explicitly recorded above; current implementation remains protected.

## 6. Remaining controlled workstreams

Separate controlled workstreams remain for:

- Package 2 normalization of Astro, Runtime/SEO, URL/Route and Performance contracts;
- Package 3 normalization of Guest Utility, Content Playbook and SEO Strategy;
- generated current-state inventories;
- Guest Guide type/surface reconciliation;
- any later locale-path migration after adoption audit;
- Astro analytics/consent implementation;
- `PARK-ANALYTICS-LEGAL-001`: verify the reported mismatch between Legal Notice wording and actual Astro analytics/consent runtime before any future analytics implementation or legal-text change;
- later normalization of the active external booking feature contract/runbook into `/docs/features` without changing its implementation by documentation alone.

## Revision history

| Version | Timestamp | Change | Commit |
|---|---|---|---|
| 1.0.0 | 2026-08-13 | Package 1 register draft. | historical package snapshot |
| 1.1.0 | 2026-08-14T08:55:00+02:00 | Prepared revision-control and Reality Reconciliation model. | withdrawn candidate — never committed |
| 1.2.0 | 2026-08-14T09:28:00+02:00 | **PROPOSED, not activated.** V3.1 compatibility-candidate register with corrected multilingual/URL supersession boundaries, explicit booking-CTA preservation, source-evidence verification and parked Legal/analytics reconciliation. | candidate only — never committed |
| 1.3.0 | 2026-08-14T11:41:00+02:00 | **ACTIVE FAST-first revision.** Added DR-EXEC-003–008 and SSOT Decision Inbox/Sync model; reduced routine validation and push overhead. | 5c59674 |
| 1.3.1 | 2026-08-14T12:30:00+02:00 | Added the two deterministic FAST preflight rules and recorded Governance 5.4.0. | 0e2b26a |
| 1.3.2 | 2026-08-14T12:59:47+02:00 | Activated current metadata and recorded the execution speed reset with Governance 5.5.0 and Constitution 5.1.1. | this revision |
| 1.4.0 | 2026-08-20 | Activated the Evidence & Knowledge owner and the separation between durable evidence, public authoring and presentation. | this revision |
| 1.5.0 | 2026-08-20T16:35:01+02:00 | Activated the Location & Experience information-architecture principles and separated stable decisions from open research hypotheses. | this revision |
| 1.6.0 | 2026-08-21T11:26:50+02:00 | Activated the immutable raw-research archive workflow and stable Drive-to-Git knowledge references. | this revision |
| 1.7.0 | 2026-08-21T22:14:30+02:00 | Activated Performance Standard 2.1.0 and the collective host-voice/evidence-provenance contract with Content Playbook 1.3.0. | this revision |
| 1.8.0 | 2026-08-22T06:48:59+02:00 | Clarified Supermarkets versus weekly-market ownership, approved the evidence-gated shared Daily Life topic-family direction and registered its three research runs. | this revision |
| 1.9.0 | 2026-08-22T07:48:36+02:00 | Activated the public-usefulness, booked-guest operational-depth and contextual transition-block boundary. | this revision |
| 1.10.0 | 2026-08-23T10:25:00+02:00 | Activated the leaf-level content localization contract, five-locale structural parity enforcement, typography role ownership and the bounded post-batch consolidation slot. | this revision |
| 1.11.0 | 2026-08-23T11:40:00+02:00 | Drew the semantic-unit versus prose-segmentation boundary in the parity contract and recorded the content decisions taken under it. | this revision |
| 1.12.0 | 2026-08-23T12:20:00+02:00 | Scoped the parity guarantee to identifier-bearing units and introduced the declared market-curation exception. | this revision |
| 1.13.0 | 2026-08-23T12:51:40+02:00 | Activated experiential authority as the public-authoring rule and recorded its evidence, safety and page-type boundaries. | this revision |
| 1.14.0 | 2026-08-23T13:54:40+02:00 | Activated the canonical mobile-first page contract and its first shared implementation in the vacation-rental family. | this revision |
| 1.15.0 | 2026-08-23T19:30:21+02:00 | Registered Romantic Hideaways and special places for shared time as a couple as AMARA's primary hospitality brand core, owned normatively by Constitution 5.2.0. | this revision |
