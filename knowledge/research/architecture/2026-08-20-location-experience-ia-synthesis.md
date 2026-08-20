---
subject: amara
topic: location-experience-information-architecture
record_type: research-synthesis
status: preserved
created: 2026-08-20
public: false
---

# Location & Experience information architecture — research synthesis

## Purpose and authority

This record preserves the two external research results assessed on 20 August 2026 and separates their durable conclusions from proposals that still need evidence or product judgment. It is not public copy and does not create routes, pages or implementation obligations.

The active architectural decisions derived from this work are `DR-IA-001` through `DR-IA-004` in `docs/AMARA_REGISTER.md`. If this synthesis and the Register differ, the Register governs. The Evidence & Knowledge boundary remains governed by `DR-EVIDENCE-001` and `DR-EVIDENCE-002` and by section 16 of the AMARA Astro Technical Standard.

## Research inputs

1. **Research result 1 — “AMARA Informationsarchitektur Analyse”**
   Operator-provided Google Doc: <https://docs.google.com/document/d/17KhJVvgxZJBSrhtRqhf0pZ3wnNKNKk5xhCnB0mD7fCI/edit?tab=t.0>
2. **Research result 2 — `deep-research-report (1).md`**
   Operator-provided local research artifact reviewed from `C:\Users\rbm82\Downloads\deep-research-report (1).md`.

Result 2 is the stronger architectural input. Its core conclusion is that AMARA needs a binding common information model, but not a binding identical page inventory. Result 1 remains useful as a hypothesis catalogue, but several recommendations were too absolute, insufficiently evidenced or based on a technology assumption that AMARA has not adopted.

## Repository baseline at the time of review

### Four information layers

AMARA already distinguishes four different responsibilities:

1. **Location** — practical understanding of the destination for choosing and planning a stay.
2. **Experience** — inspiration and activity-led exploration of what guests can do there.
3. **Private guest utility** — operational information that becomes useful during or immediately around a confirmed stay.
4. **Evidence & Knowledge** — non-public sources, facts, claim boundaries, verification state and open questions from which public content can be authored.

These layers can use the same underlying facts, but they do not have the same audience, page job or visibility.

### Shared Location model

The current shared Location model contains four clusters and nine topic units:

| Cluster | Topic units |
|---|---|
| Orientation & Areas | Geography & Orientation; Where to Stay / Areas |
| Climate & Seasons | Weather & Seasons; Winter Stays |
| Arrival & Parking | Arrival & Mobility; Parking & Accessibility |
| Daily Life & Essentials | Shopping & Markets; Health & Emergencies; Practical Rules & Local Regulations |

The three destinations can use this same semantic model without being forced to publish nine separate guides each. A topic unit can be satisfied by a hub section, a dedicated guide, a short public note or private guest content according to the real user job.

### Destination-specific Experience inventories

Experience currently follows destination character rather than a rigid cross-destination matrix:

- **Frigiliana:** beaches and coast, restaurants, day trips, festivals, market, wellness and hiking; related discovery also includes the old town/history and weddings.
- **Nerja:** beaches, food, nightlife, the Balcón de Europa, Nerja Caves, Verano Azul and day trips.
- **Tarifa:** beaches and coast, wind and kitesurfing, food and evening life, nature and wildlife, old town and history, and Bolonia/Baelo Claudia. The hub additionally uses six destination-specific day forms.

The inventories are not required to match. Their commonality lies in design quality, navigation logic, evidence discipline and editorial depth—not in identical labels or page counts.

## Stable conclusions accepted into the SSOT

### 1. Ownership follows the primary user decision

A topic is not owned solely because its label sounds like “Location” or “Experience.” Its canonical public owner is determined by the dominant question it answers.

- “Where is it, how does it work, and is it suitable for my stay?” normally belongs to Location.
- “What can I experience, and how do I shape a good day?” normally belongs to Experience.
- “What exact contact, access instruction or live operational rule do I need as a guest?” normally belongs to private guest utility.
- “What do we know, how do we know it, and when must it be checked?” belongs to Evidence & Knowledge.

Practical consequences of one subject may appear in another branch. This is bounded reuse, not a second full narrative owner.

### 2. Common information model does not mean identical URLs

The four Location clusters provide a common coverage checklist and authoring vocabulary. They do not create a nine-page obligation for every destination. Page symmetry is not a quality goal in itself.

### 3. Publication form is a product decision

Each topic may become:

- a section on the Location hub;
- a standalone public guide;
- a short public planning note;
- private guest utility content.

A new public page must do a distinct, durable job before booking or trip planning. A keyword opportunity, available research or a matching page at another destination is not sufficient on its own.

### 4. Experience remains intentionally asymmetric

Frigiliana, Nerja and Tarifa should not be forced into one identical Experience taxonomy. The destinations share a design family and quality threshold, while their themes, day forms and guide inventories remain place-specific.

### 5. Research and redesign cannot erase knowledge

Merging, shortening, moving or removing public material affects only its projection. Supporting research, atomic facts, source metadata, earlier observations and unresolved questions remain in `knowledge/` and are updated through verification or explicit supersession.

## Useful research guidance, not yet a binding page decision

The following findings are credible enough to guide the next investigations but do not authorize page or route changes:

- **Parking is conditional by problem degree.** Frigiliana clearly warrants detailed treatment. Tarifa probably warrants it. Nerja also has meaningful and volatile parking complexity and should not be dismissed, but its correct public form still needs evidence.
- **Winter stays are conditional.** A dedicated guide is justified only where winter or long-stay users have a sufficiently independent decision journey. Otherwise the topic can remain within Climate & Seasons.
- **Health and emergencies need a visibility split.** General pre-booking suitability and healthcare availability may be public; phone numbers, access instructions and operational contacts normally belong to private guest utility and require high-volatility review.
- **Local rules are selective.** Only rules that materially affect destination choice or advance planning merit public prominence. Operational or rapidly changing rules belong in the private layer.
- **History is not absolutely confined to one branch.** Full historical storytelling normally belongs to Experience. Location may still explain practical spatial consequences, orientation or area character arising from history.
- **Day forms are a strong hub module.** Tarifa demonstrates their value. Frigiliana and Nerja may use destination-specific day forms if they improve selection and orientation, without automatically creating more pages.
- **Nerja may need a stronger Nature & Active dimension.** Maro, kayaking, the Sierra and hiking form a plausible gap, but the user demand, scope and evidence should be evaluated first.
- **Frigiliana should foreground its mountain and nature character.** The coast is valuable context and excursion territory, not necessarily the defining core of the village Experience branch.
- **Tarifa should preserve its wind-and-Strait identity.** Nature around the Strait, bird migration and marine wildlife are promising areas for deeper evidence-backed treatment.

## Recommendations not adopted

The following recommendations from the research are explicitly not decisions at this stage:

- migrating the Evidence & Knowledge model to Astro Content Collections or introducing a CMS;
- treating history as categorically forbidden in Location;
- automatically deindexing health, rules or other topics without first checking whether public pages and pre-booking jobs actually exist;
- merging food and nightlife, removing pages or creating new pages without page-specific evidence;
- classifying Nerja parking as too weak for serious treatment without a dedicated assessment;
- prioritizing Verano Azul, Dos Tumbas, Tangier or any other named theme on unsupported conversion assumptions;
- changing the public label “Location” solely because alternative terminology was suggested.

## Open decisions and next evidence needed

These questions remain deliberately open:

1. Should Nerja parking be a standalone strategy guide, a substantial hub section or a shorter public note?
2. Should Tarifa parking be a standalone guide, and which stable planning claims can be separated from volatile facility data?
3. Which destinations have a sufficiently independent winter/long-stay use case for a dedicated public guide?
4. Does Nerja require a distinct Nature & Active Experience cluster or guide family?
5. Would destination-specific day forms materially improve the Frigiliana and Nerja hubs?
6. What is the correct editorial role of Dos Tumbas, Verano Azul and Tangier after source and audience validation?
7. Should food and nightlife remain separate where their planning jobs differ?
8. Should the shared Location model retain its current public naming in every locale?
9. After a second real evidence pilot, should `knowledge/schema.ts` add explicit fields such as `intent`, `canonicalOwner`, `visibility`, `scope`, `appliesTo` and `crossReferences`?

Each question should be answered through a focused research brief and repository reality check rather than a second broad architecture study.

## Evidence portability limitation

Result 2 contains internal research citation handles rather than portable direct source URLs. Its architectural reasoning can therefore be preserved, but destination claims from it are not ready to become verified atomic facts. Before such claims enter `knowledge/facts/`, the original official links, source metadata, access dates, supported claim boundaries and volatility must be recovered.

Result 1 also uses a mixed source base and should not be treated as direct evidence for a destination fact unless the underlying primary source is separately registered.

## Controlled next step

The next implementation step is not a site-wide restructure. It is a second focused knowledge pilot on one open, decision-relevant topic—preferably parking in Nerja or Tarifa—to test intent, ownership, visibility and cross-reference metadata against real evidence. Any schema expansion or public page decision should follow that pilot rather than precede it.
