---
document_id: AMARA-EXPERIENCE-KNOWLEDGE-001
title: AMARA Experience Knowledge Product Feature Contract
version: 1.0.0
status: ACTIVE
authority_class: FEATURE CONTRACT
activation_state: ACTIVE
effective_from: 2026-09-02
last_modified: 2026-09-02T06:19:43+02:00
canonical_path: /docs/features/11_AMARA_Experience_Knowledge_Product_Feature_Contract_V1.md
---

# AMARA Experience Knowledge Product Feature Contract V1

## 1. Purpose and ownership

This contract defines the content-product boundary between AMARA's public **Experience** pages and the booked-guest **AMARA Experience**. It also defines the controlled path from Deep Research to an AMARA recommendation and the human approval gate between evidence and publication.

This contract owns:

- the public Experience versus AMARA Experience content distinction;
- the commercial value proposition of the researched recommendation product;
- the research-to-recommendation workflow;
- recommendation provenance, approval, publication scope and lifecycle;
- the organizational roles used to operate that workflow.

It does not own:

- public A/B/C/D page jobs, which remain owned by the System Constitution;
- Guest Utility access, session, shell, noindex and protected-delivery contracts;
- booking-provider verification or checkout infrastructure;
- public routes, Link Registry, canonical, hreflang, metadata or structured data;
- public copy style and localization mechanics;
- the current TypeScript Knowledge schema until a separate implementation workstream changes it.

Where those systems are involved, their existing owners remain binding.

## 2. The two products

### 2.1 Public Experience

Public Experience is AMARA's indexable Type B — Explore layer.

Its primary question is:

> What is worth experiencing here, which options suit which kind of day or guest, and what should someone know before choosing?

A public Experience page must be useful and complete from search or direct entry. It explains the subject, differentiates meaningful alternatives, includes concrete examples where the evidence supports them, states relevant limitations and gives enough practical context for a real trip-planning decision.

Public Experience is not a teaser for private content. A person who never books AMARA must still receive a helpful, reliable and people-first answer to the public page's dominant question.

### 2.2 AMARA Experience

AMARA Experience is the authenticated booked-guest umbrella defined by the Guest Utility contract. Within it, the personal-recommendation layer answers a different question:

> What do we recommend for this stay, when and how should the guest do it, and what is the realistic alternative if the first plan does not work?

Its value is operational and situational. It may add:

- a prioritized shortlist for a specific occasion or guest situation;
- timing, duration, sequence and preparation;
- an exact route or starting point from the relevant AMARA stay;
- map, reservation, contact, access, parking or ordering guidance;
- current host notes and date-sensitive checks;
- a realistic Plan B for closure, weather, crowding or missing availability;
- property-specific combinations that a general destination guide cannot provide.

AMARA Experience is positioned as a direct-booking advantage. The technical eligibility of a particular reservation remains owned by the Guest Utility and Booking Architecture contracts. This document does not silently change who can log in; any move to direct-booking-only access requires its own explicit access-policy workstream.

## 3. Commercial value

AMARA does not claim ownership of public facts, restaurant names, routes or places.

The booking value is the work performed around them:

- recovering and preserving a broad source corpus;
- performing targeted Deep Research;
- checking original sources and conflicts;
- separating stable facts from external experience patterns;
- reducing a large candidate field to a useful selection;
- matching recommendations to real guest situations;
- translating knowledge into timing, access, sequence and alternatives;
- maintaining the result when conditions change.

The product formula is:

> Publicly available information + intensive research + source verification + AMARA curation + human approval + stay-specific application = AMARA Experience.

AMARA therefore sells time saved, reduced uncertainty and better execution through the booking relationship. It does not create value by deliberately weakening the public answer.

## 4. Content boundary

| Dimension | Public Experience | AMARA Experience personal recommendations |
|---|---|---|
| Audience | Search visitors and prospective guests | Authenticated booked guests |
| Primary job | Explain, differentiate and inspire a trip-planning choice | Direct and help execute a choice during the stay |
| Required completeness | Fully answers the durable public question | Adds depth after the public question is already understandable |
| Typical content | Categories, trade-offs, representative recommendations, stable planning context and material caveats | Prioritized shortlist, timing, exact route, reservation/order/access details, property-specific application and Plan B |
| Voice | Editorial, evidence-led AMARA host perspective | Short, mobile, operational host guidance |
| Indexing | Public and indexable where the page is approved | Noindex and outside public sitemap discovery |
| Copy relationship | Canonical public narrative for its intent | Separate utility copy; never a copied public essay |
| Commercial role | Builds destination authority and qualified interest | Delivers the researched direct-booking value |

The same evaluated evidence may support both surfaces. The authored text, information density and immediate user outcome remain different.

## 5. Non-negotiable public boundary

The following must not be withheld behind AMARA Experience access:

- the answer required to satisfy the public page's dominant search or planning question;
- essential safety information;
- material booking or accommodation limitations;
- official closures, access restrictions or conditions that materially affect safe planning;
- enough concrete examples and distinctions to make the public page genuinely useful;
- universal emergency orientation that a guest may need regardless of booking channel.

The private layer may be more specific, current and actionable. It must not become a hidden dependency for understanding the public page.

## 6. One knowledge base, two authoring projections

AMARA keeps one evaluated Knowledge base and produces two controlled authoring projections from it:

```text
Activated research question
        ↓
Google Drive immutable raw archive
        ↓
Git knowledge evaluation
sources · facts · conflicts · open questions · volatility
        ↓
Experience patterns and recommendation candidates
        ↓
Human approval gate
        ↓
Approved AMARA Experience recommendation
        ↓
┌──────────────────────────────┬──────────────────────────────┐
│ Public Experience projection │ AMARA Experience projection │
│ explain and differentiate    │ direct and help execute      │
└──────────────────────────────┴──────────────────────────────┘
```

Raw research never publishes itself. An AI synthesis never publishes itself. An approved recommendation is still not finished copy; public and private authoring each apply their own page or utility job.

## 7. Research portfolio gate

AMARA does not research every interesting tourism topic at maximum depth.

The operator activates a research package only when the topic has sufficient combined value across:

- real search or discovery demand;
- relevance to an AMARA guest's day or stay decision;
- potential direct-booking value;
- ability to produce more than a generic list;
- ability to produce practical application or alternatives;
- reasonable source quality and maintenance cost.

Every activated package records:

- destination and topic;
- public search/planning question;
- AMARA Experience value hypothesis;
- existing Knowledge and prior raw research;
- specific unresolved gaps;
- source and verification standard;
- likely volatility and review burden;
- expected human or field-validation needs;
- intended public, private or split publication opportunity.

A knowledge gap does not activate research by itself. The operator owns portfolio priority and run activation.

## 8. Research package stages

An intensive Experience research package may contain the following stages. They are stages of one bounded package, not a requirement to create six unrelated projects.

### R0 — Corpus recovery

Recover existing Drive runs, Knowledge records, public content, Guest Utility content, operator notes and prior decisions. The goal is to avoid repeating adequate work and to identify the real gap.

### R1 — Candidate discovery

Build a broad candidate field: restaurants, routes, places, providers, seasonal experiences, combinations and less-visible alternatives. Discovery creates candidates, not recommendations.

### R2 — Fact verification

Check reusable material claims against competent original or primary sources. Normalize sources, atomic facts, claim boundaries, checked dates, volatility and conflicts in `knowledge/`.

### R3 — External experience patterns

Identify recurring practical patterns such as timing, crowding, access friction, suitability, preparation or frequent disappointment. Record the source base, recurrence, limitations and uncertainty. External experience remains externally derived and must never be rewritten as AMARA first-hand knowledge.

### R4 — Recommendation synthesis

Reduce the candidate field into recommendation candidates. For each candidate, state who it suits, why it may be valuable, when it does not fit, what practical action follows and which Plan B is credible.

### R5 — Human or field validation

Where desk research cannot support the intended recommendation strength, request a visit, route recording, map check, booking test, trusted team observation or explicit operator confirmation. Field validation is targeted to the unresolved decision; it is not a ritual requirement for every item.

## 9. Evidence, provenance and recommendation are different concepts

AMARA keeps three dimensions separate.

### 9.1 Evidence object

A fact or documented pattern answers:

> What do we know, from which source, with which boundary and currentness?

### 9.2 Recommendation status

A recommendation answers:

> Is AMARA prepared to advise a guest to choose or do this under the stated conditions?

### 9.3 Publication channel

A channel decision answers:

> Should this appear publicly, inside AMARA Experience, in both with different depth, or remain internal?

These dimensions must never be collapsed. Private placement does not make a claim first-hand. Human approval does not repair missing evidence. First-hand evidence does not automatically make an item suitable for publication.

## 10. Provenance labels

Recommendation material uses one of these provenance descriptions internally:

- **researched** — based on reviewed external and official evidence;
- **AMARA first-hand** — explicitly documented operator, team or approved first-party observation;
- **mixed** — researched evidence plus documented AMARA first-hand input.

Public or guest-facing wording must preserve this distinction.

- `Our recommendation` is permitted only after human approval of the selection and conditions.
- `Personally tested`, `we visited`, `we walked` or an equivalent first-hand statement requires documented AMARA first-hand evidence.
- `Insider tip`, `hidden treasure`, `secret tip` or equivalent wording requires evidence that the claim is materially accurate; it is not a default label for any private recommendation.

## 11. Recommendation candidate review card

Every candidate submitted for human review contains at least:

- stable candidate ID;
- destination, topic and subject;
- proposed recommendation in one clear sentence;
- guest situation, occasion or traveler need;
- reason for inclusion;
- supporting source, fact and pattern references;
- provenance proposal;
- material strengths and limitations;
- unresolved uncertainty;
- timing, duration, access, preparation or reservation implications where relevant;
- credible alternative or Plan B where relevant;
- proposed publication scope;
- checked date, volatility and proposed review date.

A long research report is not an approval interface. The operator receives a compact decision package while retaining traceability to the evidence.

## 12. Human approval gate

Only the human AMARA operator may turn a recommendation candidate into an official AMARA Experience recommendation.

The operator may decide:

- **APPROVE** — AMARA will stand behind the recommendation within the recorded conditions;
- **APPROVE WITH CHANGES** — amend the candidate, then record the final approved form;
- **FIELD VALIDATION REQUIRED** — desk evidence is insufficient for the intended strength;
- **DEFER** — retain the candidate without publishing it;
- **REJECT** — do not use it as an AMARA recommendation.

Approval records:

- operator decision;
- approval date;
- approved wording or claim boundary;
- approved provenance;
- publication scope;
- required caveats;
- review date or trigger.

Human approval confirms the AMARA selection and editorial judgment. It does not convert researched material into first-hand experience and does not replace source verification.

## 13. Recommendation lifecycle

The target lifecycle is:

```text
CANDIDATE
    ↓
HUMAN_REVIEW
    ├── FIELD_VALIDATION_REQUIRED
    ├── REJECTED
    ├── DEFERRED
    └── APPROVED
            ├── PAUSED
            └── RETIRED
```

Only `APPROVED` recommendations may enter new public or private authoring.

- `PAUSED` blocks current publication while a material fact, access condition, business status or conflict is unresolved.
- `RETIRED` removes a recommendation from active use while preserving its history.
- A material change creates a new review, not a silent edit that keeps the old approval date.

## 14. Publication scopes

The operator chooses one of four scopes:

### Public

The recommendation and its useful reasoning belong on the public Experience page because they help satisfy the public question.

### AMARA Experience

The recommendation is most valuable as concrete booked-stay execution: exact timing, route, action, reservation detail, property-specific combination or current note.

### Split

The public page names and explains the option; AMARA Experience adds the exact application.

Example:

- public: why a restaurant suits a special evening and what trade-off to expect;
- private: preferred booking time, table or dish guidance, route from the booked stay and a realistic alternative if full.

### Internal only

Evidence is retained but not currently suitable for either surface.

## 15. Public AMARA Experience bridge

A relevant public Experience page may contain one contextual AMARA Experience bridge after its useful public core.

The bridge:

- states the added value positively and concretely;
- gives topic-specific examples of the deeper application;
- explains that the additional guidance is part of the AMARA Experience;
- follows the approved public landing, direct-booking or availability path;
- never links directly to protected guide routes;
- is not repeated after every section;
- does not imply that the public page withheld its answer.

A shared visual component may later render this pattern, but the evidence and examples remain topic-specific. Any component work is a separate implementation scope.

## 16. Private recommendation authoring

AMARA Experience recommendation copy is short, mobile and action-oriented. A useful item normally answers:

- What is it?
- Why are we recommending it for this situation?
- Who or which day does it suit?
- When should the guest go or act?
- What must the guest know before leaving?
- What direct map, reservation or contact action is useful?
- What is the realistic alternative?

It does not copy the public article, repeat generic destination background or use unsupported superlatives.

## 17. Organizational roles

One person or one AI system may perform several roles, but the responsibilities remain distinct.

### Operator / Product Owner

- chooses the research portfolio;
- activates a research package;
- resolves material business priorities;
- confirms first-hand input;
- approves, modifies, defers or rejects recommendations;
- decides publication scope.

### Research Agent

- performs corpus recovery and gap analysis;
- conducts only the activated research;
- preserves raw material in Drive;
- verifies original sources;
- extracts facts and external experience patterns;
- prepares recommendation candidates and review cards;
- never self-approves or publishes.

### Knowledge Editor

- normalizes sources, facts, conflicts and open questions;
- protects provenance and claim boundaries;
- maintains checked dates, volatility and supersession;
- links candidate reasoning back to evidence.

### Public Editorial / SEO Role

- creates the public Page Brief and search-intent coverage;
- writes a complete people-first Type B page;
- selects approved public or split recommendations;
- adds at most one justified AMARA Experience bridge;
- follows the Content Production & Localization Playbook.

### AMARA Experience Editor

- turns approved private or split recommendations into concise operational guidance;
- keeps property, timing, map, reservation and Plan B details usable on mobile;
- does not strengthen provenance or claims beyond approval.

### Implementation Role

- publishes only approved authoring through the existing page, content, Guest Utility, link and runtime owners;
- does not redesign the system or invent a parallel Knowledge store;
- validates only the affected scope proportionately.

The AI may prepare every step before approval. It may not approve on the operator's behalf.

## 18. Feedback and maintenance loop

Guest, host and team feedback may create:

- a new source or first-hand observation;
- a conflict;
- an open question;
- a review trigger;
- a new recommendation candidate.

Feedback does not automatically become a fact or recommendation. It enters the same evaluation and human-approval flow.

High-volatility recommendations receive a review date or a live-source check. When currentness cannot be supported, the item is paused, weakened to a durable statement or replaced by a link to the competent live source.

## 19. Initial pilots

The first controlled pilots are:

1. **Hiking in Frigiliana** — public route selection plus AMARA Experience execution from Casa AMARA, including timing, preparation, route access, return logic and heat/weather Plan B.
2. **Restaurants and evenings in Nerja** — public restaurant-type and occasion guidance plus AMARA Experience shortlists, booking/timing/order guidance, route context and alternatives.

Each pilot must produce:

- corpus-recovery result;
- activated research package and preserved raw archive;
- evaluated sources, facts, patterns and gaps;
- human review cards;
- operator decisions;
- public/private/split content map;
- separate later authoring and implementation scope.

The pilots do not authorize immediate broad research across every destination or theme.

## 20. Current implementation boundary

This contract activates the product and operating architecture only.

It does not by itself:

- change `knowledge/schema.ts`;
- create recommendation directories or manifests;
- activate either pilot research run;
- modify public Experience copy;
- add an AMARA Experience bridge component;
- modify protected Guest Utility content;
- change routes, access eligibility, booking verification, SEO runtime or structured data.

Those are separate bounded workstreams. The next structural implementation should extend the existing Knowledge system with pattern, recommendation and AMARA Experience manifest records without creating a parallel database or authoring system.

Until that schema work is approved, a recommendation candidate may be recorded only in the relevant non-public research dossier or synthesis under a stable candidate ID with its human decision. It must not be represented as an atomic fact or published as an approved recommendation without the complete review record.

## 21. Definition of done

An AMARA Experience knowledge topic is product-ready when:

- the public and private jobs are separately defined;
- existing Knowledge and raw research were recovered first;
- material claims trace to reviewed evidence;
- external experience and AMARA first-hand provenance remain distinct;
- recommendation candidates include limitations, uncertainty and practical implications;
- the operator recorded a human decision for every published recommendation;
- publication scope is explicit;
- public content remains independently useful;
- private content adds concrete execution value;
- review dates or triggers exist where volatility requires them;
- no parallel Knowledge, route, resolver, content or Guest Utility system was introduced.

## Revision history

| Version | Timestamp | Change |
|---|---|---|
| 1.0.0 | 2026-09-02T06:19:43+02:00 | Activated the public Experience versus AMARA Experience product boundary, research-to-recommendation architecture, human approval gate, provenance/channel separation, operating roles and two initial pilots. |
