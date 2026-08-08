# AMARA Conversion Journey — Developer Handover

**Snapshot:** 2026-08-08 09:17 CEST  
**Repository:** RSB1305/amara  
**Branch:** main  
**HEAD:** 9eae66e  
**Remote:** origin/main = 9eae66e  
**Status:** Conversion architecture work documented below is implemented and pushed  
**Local exception:** `src/pages/tools/design-lab/` remains intentionally untracked

> This document records the conversion-journey architecture and implementation state at the timestamp above. It is a handover, not a new governing AMARA architecture layer.

This handover is informational. It does not replace or override AMARA Core, the Runtime Layer, the Technical Standard, URL/slug governance, SSOT rules, booking architecture, or any other governing project contract. If this document conflicts with a governing source, the governing architecture wins.

## 1. Executive Summary

The conversion audit found inconsistent CTA sequencing across AMARA. Several authority and explore pages asked for availability too early, some sent an informed visitor back into another information loop, and the main accommodation collection page did not expose its conversion path in the Hero.

The work was normalized around intent-pure journeys rather than treating every CTA as a booking CTA. The common progression is now:

**Discover / Authority / Explore → relevant AMARA stay → availability**

The page type remains the controlling signal for when and how that progression appears:

| Page type | Primary responsibility |
| --- | --- |
| Type A — Location Authority | Resolve a destination, access, suitability, or practical location decision. |
| Type B — Explore | Help the visitor discover an experience, place, or travel mood. |
| Type C — Trust | Resolve reassurance, proof, policy, or confidence questions. |
| Type D — Conversion | Present accommodation or another explicitly commercial choice and support action. |

Not every page should sell at the same point in the journey. A high-intent visitor can still reach availability through the persistent global Navigation CTA. That does not justify turning authority or inspiration Heroes into booking surfaces. Page-local actions should advance the intent of the page first, then hand the visitor forward to the appropriate stay and finally to availability.

The implementation deliberately stayed narrow. Existing components, resolver tokens, button styles, and page-local content objects were sufficient. No new funnel framework was introduced.

## 2. Architectural Principles Established

### Type A — Location Authority

The validated Type A journey is:

**Authority question → informed destination/stay decision → relevant AMARA stay → availability**

Authority content must resolve the user's question before asking for a commercial action. On a parking page, that means explaining parking reality first. On a destination overview, it means helping the visitor understand location, terrain, suitability, and stay rhythm before moving to the accommodation collection.

The working rules are:

- `book` / Check Availability must not normally be the primary Type A closing action.
- The primary terminal action should usually be the relevant AMARA stay or stay collection.
- A secondary action should be exactly one useful remaining decision aid, or availability where the authority question is fully resolved and another guide would only create a loop.
- Practical guides remain valid optional branches, but practical information must not replace the terminal forward path.
- A page should not send the visitor back to a broader guide after it has already answered the narrower question, unless that guide genuinely resolves an outstanding decision.
- Destination-overview pages can require a different Hero pattern from narrow practical pages. Their Hero may orient the visitor within the page before any product exposure.

The Frigiliana FAQ, Parking, and Weather changes validated the terminal convention on narrow practical authority pages. Frigiliana Location then validated a separate destination-overview pattern: an authority-oriented in-page Hero action plus a stay-first terminal closing.

### Type B — Explore

The validated Type B journey is:

**Experience / inspiration → relevant AMARA stay → availability**

Explore pages remain discovery-first. The visitor should be able to understand the beach, restaurant, hike, festival, wellness experience, cultural story, or destination mood before being asked to book.

The working rules are:

- The relevant stay is normally the primary terminal CTA.
- Availability is normally secondary.
- A booking CTA in the Hero is generally premature when discovery has not yet occurred.
- Sideways exploration and terminal conversion are separate responsibilities. `ExperiencePreFooter`, related guides, and editorial links can support continued discovery; the closing CTA should move the visitor forward.
- Destination specificity matters. A Nerja experience can point to AMARA Playa, while a cross-destination Hub should remain neutral until the visitor has chosen an experience or place.

The source directory name is not the page type. Several Type B pages live under `src/page-families/location-authority/`, but their authored SEO classification is Type B and their funnel behavior follows Explore intent.

### Type D — Conversion

Type D pages can legitimately carry stronger commercial actions because accommodation discovery or selection is already their purpose. The Romantic Hideaways collection therefore exposes both the apartment collection and availability directly in the Hero.

The key distinction is timing: Type D may present commercial next steps immediately; Type A and Type B should first satisfy their authority or discovery promise.

### Global Navigation

The global Navigation continues to expose a persistent localized Check Availability action through the existing `book` token. This was intentionally left unchanged.

That persistent route serves high-intent visitors on every page. Page-local authority and explore Heroes do not need to duplicate booking pressure simply to preserve availability access.

## 3. Why No New Funnel System Was Built

The existing architecture already contained the necessary primitives:

- `EditorialClosingCta` accepts an ordered list of token-resolved links and already supports `primary` and `secondary` button styles.
- Existing resolver tokens cover `romantic_hideaways`, `playa`, `book`, Frigiliana guides, and the other routed destinations used in this work.
- Existing page-local content SSOTs can own localized CTA labels when the copy is specific to one page.
- Shared button classes already express the approved visual hierarchy.
- Native same-page anchors already work without resolver participation.

Accordingly, no global funnel component, shared helper, CTA registry, resolver extension, or new token was justified. No design token, new visual component, or client-side JavaScript was added.

The engineering principle is straightforward:

> Use existing architecture correctly before creating new architecture.

The current page-local implementations should be allowed to prove the pattern across real pages. A shared data contract should only be considered if repeated implementations later demonstrate stable, identical structure rather than superficial similarity.

## 4. Completed Work

### 4.1 Romantic Hideaways — Type D

Romantic Hideaways is AMARA's main accommodation collection and a Type D conversion page. Its `TrustHero` previously received an empty `ctaLinks` array, so the first explicit actions appeared after the Hero as View apartments and Read reviews. That made the principal conversion page unnecessarily passive and placed reviews alongside the actual product path.

The Hero now uses the existing `TrustHero` conversion API:

1. **View apartments** → native `#booking`
2. **Check availability** → existing localized `book` token

The redundant post-Hero action row was removed. Reviews were not removed from the journey; `GuestReviewsSummary` remains later as trust support. This establishes a clear Type D sequence: understand the proposition, view the available stays, choose a stay, then check availability.

No shared `TrustHero` change was needed.

### 4.2 Type A practical authority pilots

Three narrow authority pages were used to validate the closing convention.

**Frigiliana FAQ**

The previous closing made the broader Frigiliana guide primary and AMARA stays secondary. After the FAQ had resolved practical questions, that sent the visitor back into a general information loop. The order was reversed:

1. `romantic_hideaways` — primary
2. `location_frigiliana` — secondary

**Frigiliana Parking**

The closing now moves from the resolved parking objection to the stay collection while retaining one genuinely useful access-related branch:

1. `romantic_hideaways` — primary
2. `frigiliana_stairs` — secondary

The previous Getting to Frigiliana action was removed from the closing. Streets & Stairs remains relevant because terrain and final access can still affect accommodation suitability after parking has been understood.

**Frigiliana Weather**

Weather previously ended after its related-guide section without a terminal conversion step. A closing was added after the authority and related-guide content:

1. `romantic_hideaways` — primary
2. `book` — secondary

The localized availability label is owned by the Weather page's existing page-local copy. The final implementation does not import Guest Reviews content merely to label a generic booking action. This matters because generic CTA copy must not create a cross-family content dependency.

Together, these pilots validated that Type A can remain authority-first while still providing a deliberate forward path.

### 4.3 Type B standard Explore pages

The following Type B pages shared the same inverted terminal pattern:

- Frigiliana Beaches
- Frigiliana Restaurants
- Frigiliana Hiking
- Frigiliana Festivals
- Frigiliana Wellness

Their old closing sequence was:

**`book` primary → `romantic_hideaways` secondary**

Each was normalized to:

**`romantic_hideaways` primary → `book` secondary**

No body content, Hero structure, design, or routing changed. The change only corrected the final hierarchy so the experience leads to an appropriate stay before availability. Existing `ExperiencePreFooter` usage continues to handle sideways discovery where present.

### 4.4 Type B special cases

**Frigiliana Dos Tumbas**

Dos Tumbas is a cultural/editorial Type B page. Its terminal hierarchy was changed to `romantic_hideaways` primary and `book` secondary. The cultural story, video behavior, consent handling, and editorial presentation were deliberately untouched.

**Nerja Nightlife**

Nightlife is destination-specific to Nerja, so the appropriate stay is not the generic collection. Its closing is now:

1. `playa` — primary
2. `book` — secondary

This preserves the Explore sequence while making the stay handoff destination-specific.

**Frigiliana Day Trips**

Day Trips was handled in two separate commits to avoid mixing structural decisions. First, its closing was normalized to `romantic_hideaways` primary and `book` secondary. Second, the premature Hero Check Availability CTA and its now-unused resolver variable were removed. No replacement Hero CTA was added. The Hero now remains purely editorial, while the terminal closing performs conversion after the day-trip content.

**Experience Hub**

The cross-destination Hub was also handled in two stages. Its closing was first normalized to `romantic_hideaways` primary and `book` secondary. Its Hero booking CTA was then replaced separately with a native Explore action:

**Choose your experience → `#moods`**

The localized label is owned by the existing Hub content SSOT as `hero.exploreCta`. The action stays neutral across Frigiliana and Nerja and does not introduce a Frigiliana-specific property CTA before the visitor has selected an experience or destination.

### 4.5 Frigiliana Location — destination authority overview

Frigiliana Location is a Type A destination overview, not a narrow objection page. Its authority work covers village character, climate, the Frigiliana-versus-Nerja decision, terrain, suitability, practical planning, arrival, and FAQ content.

The terminal closing was added first, in isolation:

1. `romantic_hideaways` — primary
2. `book` — secondary

The Hero was evaluated and changed later in a separate commit. Its old mixed model was:

1. View apartments → `romantic_hideaways`
2. Arrival Guide

That model introduced product selection before the destination authority journey and mixed a commercial action with a practical guide. It is now one authority-oriented, same-page CTA:

**Where to stay → `#where-to-stay`**

The page-local `hero.orientationCta` labels are:

| Locale | Label |
| --- | --- |
| ES | Dónde alojarse |
| EN | Where to stay |
| DE | Wo übernachten |
| NL | Waar overnachten |
| SV | Var ska man bo |

The resulting journey is:

**Frigiliana proposition → accommodation/destination suitability → authority evidence and planning → AMARA stay collection → availability**

The inline practical Hero link, planning grid, Arrival content, FAQ, and terminal closing were left unchanged during the Hero implementation.

## 5. Intentionally Unchanged / Already Correct

Not every inspected page required a change.

- **Frigiliana Market** remains an acceptable Type B exception. Its closing is already stay-first: `romantic_hideaways` primary, followed by `location_frigiliana` as a meaningful destination/planning secondary action.
- **Tarifa Type B guides** already follow the relevant property → availability sequence through the shared Tarifa guide page: `casa` primary, `book` secondary.
- **Global Navigation** retains its persistent localized `book` CTA.
- **`EditorialClosingCta`** was not modified; its existing API was sufficient.
- **Resolver and registry architecture** were not modified.
- **Slugs, canonical behavior, route ownership, and localization routing** were not changed.
- **Shared Hero components and global CSS** were not changed.
- **Type C trust pages** were not pulled into this Type A/Type B normalization work.

These exceptions are part of the architecture, not omissions. The objective was consistent intent progression, not mechanical uniformity.

## 6. Relevant Commit History

The following commits are present in Git in chronological order:

| Commit | Purpose |
| --- | --- |
| `2fda1e0` | Added the Romantic Hideaways Hero conversion path and applied the Type A FAQ, Parking, and Weather pilots. |
| `e7e2ddb` | Reordered five standard Type B Explore closings to stay-first, availability-second. |
| `3614a66` | Applied the stay-first terminal hierarchy to Dos Tumbas without changing its editorial/video behavior. |
| `deb5183` | Made Nerja Nightlife destination-specific: AMARA Playa first, availability second. |
| `2ebe025` | Reordered the Frigiliana Day Trips closing to stay-first. |
| `44483b9` | Removed the premature booking CTA from the Day Trips Hero. |
| `0e147af` | Reordered the Experience Hub closing to stay-first. |
| `4acd5ea` | Replaced the Experience Hub booking Hero CTA with the page-local `#moods` Explore action. |
| `427b4c1` | Added the stay-first terminal closing to Frigiliana Location. |
| `9eae66e` | Replaced the Frigiliana Location mixed Hero CTA model with one `#where-to-stay` authority action. |

Git history matches the expected sequence; no discrepancy was found.

## 7. Current Project State at Handover

At the documented snapshot:

- Branch: `main`
- Local HEAD: `9eae66e3461b78017b1228c20f27a0e532b3386e`
- `origin/main`: `9eae66e3461b78017b1228c20f27a0e532b3386e`
- Local and remote are aligned.
- No tracked conversion work remains locally.
- `src/pages/tools/design-lab/` is intentionally untracked.

The Design Lab is a separate design-exploration workstream. It was deliberately excluded from every conversion commit and push. Do not stage it casually with broad commands such as:

```bash
git add .
git add -A
```

Use explicit paths for future production commits. This handover file itself is created as documentation only and is not committed by the task that produced it.

## 8. Open Work — Priority Order

### P1 — Nerja Location Conversion Journey Audit

**NEXT RECOMMENDED DEVELOPMENT STEP**

**Status:** Not yet audited in the current destination-overview phase.

The first action must be **ANALYSIS ONLY**. Do not copy the Frigiliana Location solution automatically.

Nerja has a uniquely relevant property, `playa`, and its current Type A page exposes that product early: the Hero image is AMARA Playa, the inline Hero link points to Playa, the primary Hero CTA points to Playa, and a dedicated Playa product section appears later. The Hero secondary action compares Frigiliana. The page currently ends after its FAQ rather than using the Frigiliana terminal implementation. These facts suggest a different sequencing problem—early product emphasis or an inverted authority-to-product progression—but they do not establish the solution.

The audit should inspect:

- the Hero promise and both Hero CTAs;
- early AMARA Playa exposure and whether it helps or interrupts authority;
- destination evidence before and after product exposure;
- the mid-page progression through areas, beaches, practical planning, and comparison;
- the FAQ and actual final section;
- the terminal conversion state;
- the relationship between `playa`, the Frigiliana comparison path, and `book`.

No implementation should begin until the page intent, funnel direction, and smallest justified intervention are documented and approved.

### P2 — Frigiliana German comparison content

The current source confirms that `frigilianaLocationCopy.comparison.items.de` is an empty array. This was identified during the Frigiliana Location audit and intentionally not fixed during conversion work.

It is a localization/content completeness issue, not a conversion-architecture change. Handle it in a separate task with its own language review and validation. Do not bundle it into the Nerja audit or a future CTA change.

### P3 — Frigiliana Hero inline practical link semantic check

The Frigiliana Location Hero contains an editorial inline link whose English label is “its structure and setting”; it points to the Frigiliana Parking route. Equivalent localized labels follow the same structure.

The concept may be broader than the destination page. This is not a conversion blocker and was intentionally frozen during the Hero CTA change. It is suitable for a later content/link-label audit, but should not be modified without separate alignment on whether the label or destination is wrong.

### P4 — Design Lab

`src/pages/tools/design-lab/` is an intentional, separate workstream containing contemporary design exploration. It must remain isolated from production conversion architecture unless explicitly approved.

Do not modify, stage, move, or commit it as part of unrelated work.

## 9. Deferred Decisions / Do Not Mix

The conversion work succeeded because structural questions were separated. Preserve that discipline.

Do not combine in one change:

- Hero CTA architecture and terminal CTA architecture;
- conversion hierarchy and slug changes;
- conversion hierarchy and SEO rewrites;
- conversion work and design migration;
- conversion work and unrelated localization repairs;
- Design Lab work and production conversion commits.

A terminal closing can be correct while the Hero still requires a separate audit. A CTA hierarchy can be correct while nearby copy has a localization defect. Treating these as separate decisions keeps diffs reviewable and prevents an approved funnel change from silently becoming a redesign or content rewrite.

**One structural change at a time.**

## 10. Implementation Patterns to Preserve

- Internal routed destinations continue to use existing resolver tokens.
- Same-page anchors such as `#moods` and `#where-to-stay` remain native anchors. They do not need resolver tokens, registry entries, or route-ownership changes.
- Generic labels must not be imported from unrelated page-family content.
- Page-specific CTA copy belongs in the page's existing content SSOT when no neutral shared owner exists.
- Do not import Guest Reviews copy merely to obtain “Check Availability”.
- Do not expose or reuse private Navigation label maps as a shortcut for page content.
- Keep the global Navigation booking CTA independent from page-local funnel decisions.
- Continue to use `EditorialClosingCta` for ordered, token-resolved primary/secondary terminal actions.
- Preserve the existing button system; do not add inline styles or parallel CTA components.
- Prefer page-local configuration until genuine repeated structure justifies abstraction.
- When removing a Hero action, remove a resolver variable or import only if it is genuinely unused throughout the full page. Several destination URLs continue to be used in Planning, FAQ, footer, or related-link sections even after leaving the Hero.
- Keep reviews as trust support unless the page type specifically makes reviews the main decision being resolved.

## 11. Validation Baseline

The completed implementations were validated against the following baseline:

- Production build passes.
- The current observed build output at this snapshot is **377 pages**.
- ES / EN / DE / NL / SV behavior was checked on affected pages.
- `git diff --check` passes.
- The structured-data audit passes.
- Source and generated-output image-policy audits pass.
- Public slug-policy checks pass as part of the production build.
- Resolver and token behavior remains intact.
- No hardcoded internal public URL was introduced by this conversion work.

The confirmed production build invocation is:

```powershell
$env:PUBLIC_SITE_URL='https://amara-lodging.es'
npm.cmd run build
```

The `build` lifecycle runs the repository's existing prebuild and postbuild checks defined in `package.json`. A documentation-only handover does not require a new production build when no production source is changed.

## 12. How the Next Developer Should Resume

### Next developer starts here

1. Confirm the local state:

   ```bash
   git status --short
   ```

   Before any new work, only the intentionally untracked Design Lab should be present, apart from any explicitly handed-over documentation file.

2. Confirm local and remote alignment:

   ```bash
   git rev-parse HEAD
   git rev-parse origin/main
   ```

   Both should resolve to `9eae66e3461b78017b1228c20f27a0e532b3386e` at this snapshot.

3. Start with:

   `src/page-families/location-authority/NerjaLocationPage.astro`

4. Mode:

   **ANALYSIS ONLY**

5. Do not implement until:

   - page intent is reconfirmed as Type A;
   - the Hero sequence is understood;
   - early AMARA Playa exposure is evaluated;
   - the terminal state is evaluated;
   - the relationship among `playa`, the Frigiliana comparison, and `book` is explicit;
   - one smallest intervention is agreed.

6. Keep the following path untouched:

   `src/pages/tools/design-lab/`

> The immediate goal on resume is not “more CTA optimization”; it is to determine the correct authority-to-stay journey for Nerja without copying Frigiliana blindly.
