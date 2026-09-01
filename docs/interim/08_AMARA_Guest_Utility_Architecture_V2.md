---
document_id: AMARA-INT-UTILITY-008
title: AMARA Guest Utility Architecture V2.5
version: 2.5.0
status: ACTIVE
authority_class: FEATURE CONTRACT / INTERIM
source_type: INTERIM SNAPSHOT FROM APPROVED PDF + APPROVED REPOSITORY AMENDMENT
source_attachment: "08_AMARA_Guest_Utility_Architecture_V2(1).pdf"
source_sha256: 873664ad2c175cb8a5fcb2b219c5b89ff605a8986445862cf59b10a7480db032
snapshot_created: 2026-08-14T09:08:00+02:00
migration_state: PENDING PACKAGE 2/3 NORMALIZATION
last_modified: 2026-09-01T13:30:00+02:00
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

12. Protected delivery boundary

Guest Welcome and its detailed Guest Guide pages are delivered only inside the booking-backed AMARA Experience session, remain `noindex` and stay outside public sitemaps. The former anonymous routes redirect to the localized access page and no longer render Guest Guide content.

Protected delivery does not turn the guide into a credential store. Guest Guide content may include Wi-Fi network names, apartment and parking-space numbers, general arrival guidance, house and device instructions, emergency/contact guidance and other non-sensitive operational information. It must not include:

- Wi-Fi passwords or router-administration credentials;
- doorbell numbers;
- real door, building-access, lockbox, key-box or alarm codes;
- exact physical-key locations or locations of other means that directly enable building access;
- personal booking or guest data.

When a guest needs current access information that is not authored in the guide, the page directs them to AMARA support or the communication channel connected to their booking.

## Approved repository amendment — AMARA Experience foundation

13. Product and transition boundary

AMARA Experience is the booked-guest product. Its public, indexable landing page is a normal five-locale AMARA surface and remains globally reachable inside the About us navigation group, immediately after Staying with us. Booked guests receive a separate localized access-page link; that page contains only the access task and carries no public navigation, marketing footer, analytics, sitemap inclusion or indexing. Existing public destination and restaurant content keeps its public editorial job unchanged.

The existing Guest Welcome content is the canonical content basis of AMARA Experience. It is reused under the protected route family rather than copied into a parallel guide. Legacy anonymous routes redirect to the localized access page.

14. Booking-backed access

AMARA Experience accepts exactly three guest-supplied access values: the booking holder's first name, arrival date and departure date. The server normalizes name case, accents and whitespace and compares the values with a confirmed Lodgify reservation through the central Booking Gateway adapter. Free typo or similarity matching is prohibited because these three values form the access factors. No surname, access code or password is introduced. Zero matches and ambiguous matches both fail closed with the same neutral public response.

The confirmed Lodgify property mapping identifies the booked AMARA stay. A successful login returns only the localized protected hub route for that stay; it returns no reservation or guest record to the browser.

Access begins when the reservation is confirmed and ends at 23:59:59 on the departure day in `Europe/Madrid`. A cancellation or other loss of confirmed status blocks a new login and ends an existing session at its next periodic verification, no later than one hour after the previous check.

15. Session and delivery contract

Cloudflare Pages Functions protect the complete AMARA Experience guide route family before its static Astro output is served. The session is an AES-GCM-encrypted, `HttpOnly`, `Secure`, `SameSite=Lax`, host-only cookie; it contains no readable personal or booking data, is never placed in a URL or HTML and expires no later than the access window. Protected responses are private, `no-store` and `noindex, nofollow, noarchive`. The root guide route resolves an authenticated guest to the hub belonging to the booked stay. Language switches stay inside the protected route family, and logout clears the cookie before returning to the localized access page.

The binding `AMARA_EXPERIENCE_SESSION_SECRET` is mandatory and must contain at least 32 random characters. Missing or shorter configuration closes both login and guide access; no fallback key, default value or fail-open path is permitted. Login attempts are bounded at the application edge without persisting the supplied booking values.

16. Canonical guide structure

Each accommodation hub presents two top-level worlds in this order:

1. the guest's stay, containing accommodation, arrival, house information, check-out and practical local essentials;
2. AMARA Experience, containing the curated destination layer: hidden treasures, insider tips, authentic local food and experiences away from the busiest routes.

The established Guest Welcome entries, detail pages, location grouping and accommodation-specific structure remain the single authoring basis. AMARA Experience upgrades the former recommendations area and may add deeper verified content without introducing a second guide taxonomy. Empty speculative categories are not rendered. The existing content prohibition for credentials, access secrets, payment details and personal booking data remains in force.

## Revision history

| Version | Timestamp | Change |
|---|---|---|
| 2.0 | 2026-08-10 | Approved source architecture preserved as the interim Markdown snapshot. |
| 2.1.0 | 2026-08-22T07:48:36+02:00 | Added the public-usefulness, booked-guest operational-depth and contextual transition-block boundary. |
| 2.2.0 | 2026-08-28T18:00:00Z | Defined anonymous-link delivery and prohibited credentials, access secrets and personal booking data in public Guest Guide output. |
| 2.3.0 | 2026-08-31T20:30:00+02:00 | Activated the booking-backed AMARA Experience foundation while retaining anonymous Guest Guides as a separate transitional legacy surface. |
| 2.4.0 | 2026-09-01T09:05:35+02:00 | Moved the public AMARA Experience entry from a standalone primary-navigation position into About us, immediately after Staying with us, to reduce header density while preserving global reach. |
| 2.5.0 | 2026-09-01T13:30:00+02:00 | Consolidated Guest Welcome into the protected AMARA Experience product, added the separate guest access page and property-aware hub handoff, retired anonymous guide delivery and established the two-world stay/Experience structure. |
