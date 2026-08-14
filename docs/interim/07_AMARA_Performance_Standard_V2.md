---
document_id: AMARA-INT-PERF-007
title: AMARA Performance Standard V2
version: 2.0
status: ACTIVE
authority_class: PRINCIPLE / CONTRACT / GOVERNING INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "07_AMARA_Performance_Standard_V2(1).pdf"
source_sha256: 21e146ba615c2b95e65e029f2ecfc59934062cbbfe72ecd12aba0abf22842286
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
---

# AMARA Performance Standard V2 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



---

AMARA Performance Standard V2
Status                                                  ACTIVE
Version                                                 2.0
Effective date                                          2026-08-10
Platform                                                Astro + Cloudflare Pages


1. North star
AMARA aims for maximum practical loading speed with structural integrity.
Performance priorities are:
- static first;
- zero unnecessary client JavaScript;
- minimal transfer and parse cost;
- image discipline;
- cache reuse;
- simple dependencies;
- measurement-led optimization.

2. Static first
Every public page starts from static HTML.
Interactivity is added only when it provides a concrete user benefit.
Do not use client hydration simply because a component library makes it convenient.

3. JavaScript rule
The goal is zero unnecessary JavaScript, not an ideological absolute of zero JavaScript.
A script or island is acceptable when:
- the function cannot be delivered adequately with HTML/CSS/native browser behavior alone;
- the UX benefit is clear;
- the scope is narrow;
- the payload and maintenance cost are proportionate.
Prefer small progressive-enhancement scripts over large hydrated application bundles for small controls.

4. CSS delivery
The current production decision is:
build.inlineStylesheets: 'auto'
This decision was benchmarked on 2026-08-09 against always and never using a representative four-page
journey:
Homepage -> Frigiliana Location -> Comfort & Amenities -> Romantic Hideaways.
Measured result:
- combined Brotli four-page payload: 127.5 KB ( always) vs 65.2 KB (auto) vs 65.7 KB (never);
- warm journey transferred: 140.9 KB (always) vs 73.7 KB (auto) vs 75.8 KB (never);


- auto reused two shared external stylesheets from cache on subsequent pages;
- warm mobile FCP/LCP was materially faster with auto;
- never created more CSS requests without meaningful additional size benefit.
Therefore auto is the current standard.
Do not change global CSS inlining mode without a new benchmark.

5. Performance measurement rule
Do not make global performance decisions from:
- raw source bytes alone;
- total build-directory size alone;
- theoretical request counts alone;
- synthetic scores without understanding what changed.
Measure, as relevant:
- Brotli/gzip transfer;
- cold and warm cache behavior;
- FCP;
- LCP;
- CLS;
- request count and render blocking;
- DOM/parse/render cost;
- real field data after production cutover when available.

6. Images
Images are high-cost assets.
Requirements:
- use Astro image optimization and approved profiles;
- include responsive srcset / sizes;
- include explicit dimensions;
- prioritize the real LCP image;
- lazy-load non-critical imagery;
- avoid decorative images without sufficient visual value;
- keep source masters out of normal user delivery paths when they are not needed.

7. Fonts
Use the current self-hosted project font strategy.
Do not add font preload by default. Preload only after measuring a real discovery/render delay and confirming
it does not steal priority from more important resources.

8. DOM complexity
Large DOM structures are a performance concern only when measurement shows meaningful parse, style,
layout, memory, or interaction cost.
Do not refactor repeated SVG markup solely because raw HTML looks large if compression and browser
traces show negligible impact.
Current example: Comfort & Amenities has substantial inline SVG DOM, but Brotli already compresses the
repeated markup extremely well. This remains a measurement-led backlog item, not an approved rewrite.


9. Dependencies
Dependencies are suspect until justified.
Do not add a package for small functionality that Astro, the browser, or existing dependencies already
provide.
Unused dependencies should be removed only after ownership/import verification. Their presence is primarily
maintenance/supply-chain debt unless they are actually shipped to users.

10. Deployment assets
Unreferenced deploy assets can increase deployment size and operational clutter without affecting user
transfer.
Treat cleanup as deployment hygiene unless evidence shows those assets are requested by pages.
Do not delete candidates based on filename scans alone; account for dynamic and direct references first.

11. Cache model
AMARA assumes multi-page browsing. Shared static assets should therefore be cacheable and reusable
across route transitions.
Performance decisions must account for both:
- cold search landing;
- subsequent internal browsing across destination, trust, and conversion pages.

12. Cloudflare validation
After the Astro marketing site is actually live on the public domain, verify:
- CSS and immutable assets receive expected cache behavior;
- HTTP/2 or HTTP/3 delivery behaves as expected;
- LCP/CLS remain healthy;
- no unexpected client bundles are requested;
- field Core Web Vitals are reviewed when sufficient data exists.
Until cutover, the public Lodgify site is not a valid performance proxy for the Astro build.

13. Performance change gate
Before implementing a performance change:
1. identify the user-visible or operational cost;
2. measure baseline;
3. test the smallest alternative;
4. compare cold and warm behavior where relevant;
5. implement only if the gain is meaningful;
6. validate representative pages;
7. document material global decisions.

14. Definition of done
A performance change is complete when:
- benefit is measured;
- no major visual or functional regression is introduced;


- build/guardrails pass;
- representative pages are verified;
- the change does not create unnecessary complexity.
AMARA Performance Standard V2 is binding.
