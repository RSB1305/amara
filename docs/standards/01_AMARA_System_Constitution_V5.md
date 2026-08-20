---
document_id: AMARA-SYS-001
title: AMARA System Constitution
version: 5.2.0
status: ACTIVE
authority_class: PRINCIPLE / SYSTEM CONSTITUTION
effective_from: 2026-08-14
last_modified: 2026-08-20T18:45:28+02:00
canonical_path: /docs/standards/01_AMARA_System_Constitution_V5.md
supersedes:
  - AMARA System V4.2 - Master Architecture
  - AMARA Core V4 - Strategic Constitution
activation_state: ACTIVE
decision_refs:
  - DR-DOC-001
  - DR-DOC-003
  - DR-PLATFORM-001
  - DR-BOOK-001
  - DR-SURFACE-001
  - DR-BOOT-001
  - DR-DESIGN-MOBILE-001
---

# AMARA System Constitution V5

## 1. Purpose and system identity

AMARA is a structured destination platform for overnight guests and a direct-booking environment for real AMARA stays.

Its durable objectives are to:

- build long-term destination authority;
- reduce uncertainty in the stay decision;
- connect destination understanding with suitable AMARA stays;
- establish trust before conversion pressure;
- support direct booking without turning informational pages into sales pages;
- scale across destinations and five languages without losing structural clarity;
- remain understandable and maintainable at 500+ page scale.

AMARA is not a generic travel blog, an OTA clone, a collection of unrelated SEO landing pages, or a second parallel platform.

The durable operating principles are:

- one system only;
- user decision clarity over content volume;
- architecture over one-off convenience;
- evidence over unsupported claims;
- system integrity over micro-optimization;
- measurement over theoretical optimization;
- scalability over local shortcuts.

## 2. Mobile First

AMARA is a mobile-first guest experience.

For public and guest-facing user interfaces:

- the narrow mobile viewport is the primary composition context;
- information hierarchy, section order, hero treatment, copy density, imagery, cards, CTAs and interactions must work naturally on mobile first;
- tablet and desktop progressively enhance the mobile composition;
- desktop space may improve presentation but must not become the conceptual source from which mobile is later compressed or repaired;
- a page that works well on desktop but poorly on mobile is **not complete**.

Mobile First does not make desktop quality secondary or optional. AMARA must be excellent across viewport sizes; Mobile First defines the starting point and priority, not an excuse for weak desktop presentation.

Implementation consequences are owned by the active Astro & Design contract. Proportionate visual-QA consequences are owned by AMARA Governance, Execution & Documentation Lifecycle.

## 3. Astro-only website runtime and external-service boundary

AMARA's **website runtime is Astro-native and Astro-only**.

Astro owns the active marketing-site document structure, page architecture, components, content integration, routing, metadata integration, design system and client-side website behavior. Cloudflare Pages is the current delivery target.

This principle does **not** mean that every external operational service has disappeared. Explicitly governed services may remain active behind narrow boundaries such as booking, availability, checkout, payments, email or other operational functions. Those services are not a second website runtime and must not define AMARA page architecture, content, SEO, design, routing or authoring.

The current booking/availability/checkout boundary remains an active operational contract until a separately aligned architecture decision changes it. Its current implementation owner is recorded in the AMARA Register and repository feature contract.

A shorthand statement such as "AMARA is Astro-only" must therefore be interpreted as a website-runtime statement unless the operator explicitly approves a change to an external operational contract.

## 4. Authority model

The active AMARA documentation is defined by the AMARA Register, not by a fixed document count embedded in prose.

A binding rule has exactly one normative owner. Other documents may reference the rule and explain consequences, but they do not independently restate or extend it.

Authority order:

1. this System Constitution;
2. the governing contract that owns the affected system area;
3. AMARA Governance, Execution & Documentation Lifecycle;
4. an active Decision Register entry where the owner intentionally delegates a mutable choice;
5. subordinate feature contracts;
6. non-governing working strategies and playbooks;
7. generated inventories as descriptions of current reality, not policy.

Material repository/document divergence is resolved through the Reality Reconciliation process in Governance.

## 5. Rule classes

AMARA separates statement types so that temporary choices cannot silently become permanent law.

- **PRINCIPLE** — durable system intention independent of current implementation.
- **CONTRACT** — protected current ownership or implementation boundary.
- **DECISION** — mutable, time-bound or evidence-bound choice among valid alternatives.
- **FEATURE CONTRACT** — binding contract inside one bounded feature area.
- **WORKING STRATEGY** — directional recommendation that may change with evidence.
- **RUNBOOK** — operational sequence for a specific event or environment.
- **INVENTORY** — generated or audited description of current reality.
- **ARCHIVE** — historical evidence with no current operational authority.

## 6. Responsibility layers

AMARA separates responsibility into six conceptual layers.

### 6.1 Strategy
Defines why a public page exists, its dominant job, audience, parent/child role and desired guest decision.

### 6.2 Evidence and data
Defines what AMARA is allowed to claim: verified property facts, location facts, reviews, measurements, approved external evidence and approved operational data.

### 6.3 Authoring
Owns localized meaning, section composition, approved link intent, content objects and page-specific SEO authoring inputs.

### 6.4 Presentation
Layouts own document structure. Shared components own reusable UI. Styling follows the active Astro & Design contract without parallel systems.

### 6.5 Runtime
Central runtime owners resolve metadata, structured data, language clustering, route/link behavior and other shared technical contracts.

### 6.6 Delivery
Astro produces static output by default. Cloudflare Pages is the current delivery layer. Delivery providers do not define AMARA strategy or authoring architecture.

## 7. Strategic public page jobs

A/B/C/D remains the strategic model for applicable public content pages. It is not a universal technical label for every surface.

### Type A — Location Authority
Primary question: **Can I realistically stay here for several days, and how does this place work as a base?**

Typical responsibilities include destination structure, access/movement/parking where relevant, walkability, micro-location consequences, climate/seasonal consequences, stay-model comparisons and evidence-based first-party location intelligence.

Type A may connect to a suitable AMARA stay after the location question is answered, but must not become a sales-first property page.

### Type B — Explore
Primary question: **What is worth experiencing here, and how does the stay feel?**

Typical responsibilities include beaches, food, activities, culture, nature, atmosphere and experiential contrasts. Type B must not become an arrival/parking/accommodation logistics manual.

### Type C — Trust / Brand
Primary question: **Can I trust AMARA and understand how it operates?**

Typical responsibilities include reviews, verifiable proof, host accountability, direct-booking confidence, comfort/service standards, philosophy and trust-focused FAQs.

### Type D — Conversion
Primary question: **Is this the right stay or action for me now?**

Typical responsibilities include specific accommodation selection, availability/booking pathways, product differentiation, conversion-relevant objections and explicitly approved conversion offers.

## 8. Surface types outside A/B/C/D

Entry/home, guest utility, legal/privacy, internal/system tools and other non-marketing operational surfaces should not be forced into A/B/C/D merely to satisfy a technical field.

The long-term runtime model should distinguish strategic page job from technical surface type. Repository reconciliation remains a separate implementation workstream.

## 9. Dominant Page Job Rule

Every applicable public content page has one dominant job. Title, H1, the majority of content and the primary outcome must support it.

Secondary proof, caveats, trust evidence, contextual AMARA application, commercial bridges and next-step links are allowed when subordinate and useful. They must not displace another page's primary ownership.

This replaces the former absolute interpretation of intent purity.

## 10. Place-first and decision-first content

AMARA is organized around the real stay decision, not content volume or keyword inventory.

For Type A location content, the preferred logic is:

**Place -> Overnight consequence -> AMARA fit or limitation -> Verifiable proof -> Guest decision -> Natural next step**

Not every place fact requires an AMARA mention. Not every AMARA connection must be framed as an advantage.

## 11. Conversion integrity

AMARA should not pressure users into booking before the relevant decision is clear.

- Authority pages use advisory next steps.
- Explore pages support discovery and selection.
- Trust pages use confidence-building next steps.
- Conversion pages may use direct booking/action CTAs.

A persistent or secondary booking route is permitted for already-qualified users when it does not displace the dominant page job.

## 12. Multilingual source of truth

AMARA supports English, German, Spanish, Dutch and Swedish.

The cross-language source of truth is not a mandatory master language.

Shared and mandatory across languages are:

- verified facts;
- page job and dominant outcome;
- claim boundaries;
- required information and required topics;
- supporting evidence;
- conceptual search intent;
- conversion intent;
- structural ownership;
- meaning depth and material nuance.

No locale may shorten away required information, weaken factual meaning, remove material nuance, or omit a required topic merely to sound more natural.

Localized independently are sentences, syntax, rhythm, idiom, headline phrasing, natural keyword vocabulary and market-appropriate directness.

Locale-specific examples, emphasis or additional depth are allowed only when the approved locale brief, search evidence, legal context or another explicit evidence source justifies the difference. Such variation must never remove or dilute shared required information.

English may be used as a practical semantic working reference when useful, but it is not a mandatory sentence or content master for the other locales.

## 13. Protected contracts, not permanent freezes

Shared runtime owners, route/link infrastructure, navigation, design tokens, image pipelines and similar high-risk systems may be designated protected contracts.

Protected means the current owner/rationale are known, changes require explicit alignment, migration impact is understood and validation is proportionate.

Protected does not mean permanently correct. Historical mechanisms must not survive solely because they are old, already implemented or defended by a guardrail.

## 14. Decision hierarchy

When choices conflict:

1. factual, legal and safety integrity;
2. integrity of the justified current system;
3. user decision clarity;
4. brand clarity and trust;
5. architectural consistency and scalability;
6. SEO value;
7. design preference;
8. implementation convenience.

## 15. Documentation activation principle

Canonical Markdown in the approved repository branch is the source of truth. A document is ACTIVE when:

1. its approved canonical Markdown exists on the active branch;
2. the AMARA Register lists that version as ACTIVE.

PDFs and ChatGPT project attachments are optional snapshots/backups. Their presence, absence or freshness does not determine activation.

## 16. Strategic definition of done

A public content page is strategically complete when its dominant job is explicit, its audience and hierarchy are understood, its main uncertainty is materially reduced, claims are supportable, secondary content remains subordinate, an appropriate next step exists and no other page's primary ownership has been displaced.

## Revision history

| Version | Timestamp | Change | Decision refs | Commit |
|---|---|---|---|---|
| 5.0.0 | 2026-08-13 | Consolidated Master V4.2 and Core V4; introduced dominant-job and multilingual SSOT reform direction. | DR-DOC-003, DR-SURFACE-001 | historical package snapshot |
| 5.1.0 | 2026-08-14T09:28:00+02:00 | **ACTIVE.** Established the repository-Markdown SSOT/revision-control model; clarified Astro-only as the website-runtime contract while preserving governed external operational boundaries; clarified multilingual SSOT so meaning depth, required information and material nuance remain mandatory across locales. | DR-DOC-001, DR-DOC-005, DR-PLATFORM-001, DR-BOOK-001 | 5c59674 |
| 5.1.1 | 2026-08-14T12:59:47+02:00 | Corrected stale bootstrap metadata to reflect the already-active canonical SSOT; no strategic content changed. | DR-DOC-006 | this revision |
| 5.2.0 | 2026-08-20T18:45:28+02:00 | Established Mobile First as the governing guest-experience principle: narrow mobile is the primary composition context and tablet/desktop progressively enhance it. | DR-DESIGN-MOBILE-001 | this revision |
