---
document_id: AMARA-INT-UTILITY-008
title: AMARA Guest Utility Architecture V2.2
version: 2.2.0
status: ACTIVE
authority_class: FEATURE CONTRACT / INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF + APPROVED REPOSITORY AMENDMENT
source_attachment: "08_AMARA_Guest_Utility_Architecture_V2(1).pdf"
source_sha256: 873664ad2c175cb8a5fcb2b219c5b89ff605a8986445862cf59b10a7480db032
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
last_modified: 2026-08-28T18:00:00Z
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

## Approved repository amendment — public versus booked-guest depth

This amendment implements `DR-GUEST-001` without changing the Guest Guide shell, indexing or booking-boundary contracts above.

11. Public usefulness and booked-guest value

Public destination content must remain useful from search or direct entry and must answer its dominant pre-booking or trip-planning question. It is not a teaser that withholds the answer solely to force a booking. Essential safety information, material booking limitations and universal emergency orientation must not depend on Guest Guide access.

The Digital Guest Guide is the deeper operational layer for guests preparing for or already taking an AMARA stay. It may contain:

- property-specific routes, map points, access details and arrival steps;
- current contacts, opening checks and official live-service links;
- concrete host recommendations and dated first-party observations;
- property, community, waste and other stay-specific instructions;
- low-friction actions needed during the actual stay.

Public pages should normally give the durable context, meaningful alternatives and planning implications. They may then explain once, after the useful public core, that more detailed and accommodation-specific guidance is supplied to booked guests in the Digital Guest Guide. Do not repeat this message after every section or use Guest Utility as a hidden dependency for public comprehension.

The transition block must be native in EN, DE, ES, NL and SV, use the collective host perspective and plural guest address, and point to the approved booking or availability path rather than exposing private Guest Guide routes. Its booking CTA follows the active centralized booking contract; the preferred intent is availability or accommodation selection rather than a claim that safety-critical information is available only after payment.

12. Anonymous-link access and public-delivery boundary

Guest Guides are static utility pages that are anonymously reachable by their link, remain `noindex` and stay outside public sitemaps. `noindex` controls search-engine indexing; it is not authentication or access control.

Publicly delivered Guest Guide content may include Wi-Fi network names, apartment and parking-space numbers, general arrival guidance, house and device instructions, emergency/contact guidance and other non-sensitive operational information. It must not include:

- Wi-Fi passwords or router-administration credentials;
- doorbell numbers;
- real door, building-access, lockbox, key-box or alarm codes;
- exact physical-key locations or locations of other means that directly enable building access;
- personal booking or guest data.

When a guest needs protected current access information, the page directs them to AMARA support or the communication channel connected to their booking.

## Revision history

| Version | Timestamp | Change |
|---|---|---|
| 2.0 | 2026-08-10 | Approved source architecture preserved as the interim Markdown snapshot. |
| 2.1.0 | 2026-08-22T07:48:36+02:00 | Added the public-usefulness, booked-guest operational-depth and contextual transition-block boundary. |
| 2.2.0 | 2026-08-28T18:00:00Z | Defined anonymous-link delivery and prohibited credentials, access secrets and personal booking data in public Guest Guide output. |
