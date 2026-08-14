---
document_id: AMARA-INT-UTILITY-008
title: AMARA Guest Utility Architecture V2
version: 2.0
status: ACTIVE
authority_class: FEATURE CONTRACT / INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF
source_attachment: "08_AMARA_Guest_Utility_Architecture_V2(1).pdf"
source_sha256: 873664ad2c175cb8a5fcb2b219c5b89ff605a8986445862cf59b10a7480db032
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
---

# AMARA Guest Utility Architecture V2 — Interim Markdown Snapshot

> **INTERIM SNAPSHOT.** This file preserves the wording of the currently approved source document while AMARA migrates active documentation into the repository. Formatting was normalized for Markdown; no substantive rule change is intended by this conversion. Where the System Constitution, Governance or Decision Register explicitly records an intentional supersession, the higher owner governs.



---

AMARA Guest Utility Architecture V2
Status                                                   REFERENCE - subordinate to AMARA V4 governing
                                                         standards
Version                                                  2.0
Effective date                                           2026-08-10
Platform                                                 Astro


1. Purpose
AMARA serves two different user contexts that may discuss the same destination topic:
- public destination/authority content for prospective guests and search discovery;
- private or noindex guest utility content for people already staying with AMARA.
These contexts must remain separate in intent, copy, shell, and navigation behavior.

2. Public versus guest utility
Public Authority / Explore
Public pages answer search and stay-decision questions.
They may explain:
- why an option matters;
- how alternatives differ;
- context and trade-offs;
- practical implications for an overnight stay;
- broader destination understanding.
They are part of the A/B/C/D public architecture defined by AMARA Core.

Guest Utility
Guest Utility answers: What do I need right now during my stay?
It prioritizes:
- fast orientation;
- short practical instructions;
- distance/time/access notes;
- concrete recommendations;
- direct map/contact actions;
- low cognitive load.
Guest Utility is not Type D Conversion. It is a separate internal/noindex utility layer.

3. Same topic, different job
A public restaurants page and a guest restaurants page may cover the same places, but they must not
duplicate the same editorial copy.
Public content explains and differentiates.
Guest Utility directs and helps execute.
The same rule applies to beaches, nightlife, parking, arrival, activities, and other repeatable topics.


4. Guest Guide shell
The Guest Guide intentionally uses its own lightweight Astro layout.
It does not use the full public marketing navigation/footer shell.
The shell should remain:
- noindex;
- mobile-first;
- practical;
- fast;
- visually warm rather than enterprise-like;
- independent of public SEO/conversion chrome.
Do not force the Guest Guide into BaseLayout merely for architectural uniformity.

5. Linking between public and guest contexts
Public and guest contexts may link to one another only when the transition is useful and clear.
Rules:
- public pages remain fully usable from Google/direct entry;
- guest pages do not become a required hidden dependency for public navigation;
- guest links to public pages may provide deeper context;
- public fallback destinations must remain stable when no guest navigation context exists.

6. Smart return / back behavior
The old Lodgify-era model of injecting a global "Custom Code" script or depending on footer markup is
retired.
In Astro, return behavior must live inside the appropriate Guest Guide component/layout contract.
The current approved principles are:
- session-scoped navigation state is acceptable for Guest Guide history;
- state must be same-tab and non-tracking;
- failure of session storage must degrade to a safe fallback;
- no external/open redirect may be created;
- normal links must continue to work without the enhancement where practical.
Do not create a second site-wide Smart Back framework for public pages without explicit approval.

7. Maps and external actions
Guest utility may use external map/contact actions when they are directly useful to an in-stay guest.
Open external targets safely and preserve a functional fallback without client JavaScript where possible.

8. Localization
Guest Utility supports the same five languages where content exists.
Localization should favor immediate clarity over SEO phrasing.
Keep instructions short, native, and operational. Do not copy public long-form content into Guest Guide
translations.

9. Performance
Guest Guide is a utility environment and should stay lightweight.


Avoid:
- unnecessary public-site modules;
- heavy client frameworks;
- large decorative media;
- marketing-only tracking or conversion widgets;
- duplicated public navigation systems.

10. Governance boundary
This document is a feature architecture reference, not a governing constitution.
If it conflicts with AMARA Core, Astro Technical, Runtime/SEO, URL/Route, Governance, or Performance
standards, those governing documents prevail.
AMARA Guest Utility Architecture V2 defines the current public/guest separation model.
