---
document_id: AMARA-ARCH-MEAS-001
title: Analytics, Consent & Measurement Architecture V1.0 — Historical Evidence Summary
version: 1.0.0
status: ARCHIVED
authority_class: ARCHIVE / EVIDENCE
record_date: 2026-08-12
archived_on: 2026-08-14T09:08:00+02:00
---

# Historical analytics evidence record

> **ARCHIVE EVIDENCE ONLY.** This record preserves the evidence chain that informed AMARA's August 2026 analytics decisions. The evidence document itself is not normative; current decision status lives in `docs/AMARA_REGISTER.md`. Some decisions derived from this evidence remain ACTIVE because the external booking boundary remains operational.

## Evidence baseline

- GA4 property: `www.amara-lodging.es – GA4`
- Measurement ID: `G-KJKE3L1HV3`
- Stream ID: `407186080`
- GA4 event export window: 2025-01-01 through 2026-08-11
- Repository baseline checked at the time: `502e060d8730018f54d16dc0cb321a57554aa0ea`

Observed events included:

| Event | Events | Users | Revenue |
|---|---:|---:|---:|
| page_view | 26,726 | 1,695 | 0 |
| session_start | 4,021 | 1,694 | 0 |
| click | 1,284 | 246 | 0 |
| historical consent event | 286 | 61 | 0 |
| checkout fill-contact-details | 28 | 22 | 0 |
| checkout selected-dates | 12 | 9 | 0 |
| checkout payment-method-selection | 17 | 10 | 0 |
| purchase | 3 | 3 | 1,332.547245 (then-current GA4 reporting currency) |

The matched historical booking report contained 24 completed website reservations worth EUR 16,540.20, plus 14 open and 6 declined records excluded from the completed-booking comparison.

A key interpretation rule from that workstream was: **3 observed GA4 purchases versus 24 completed bookings was an observation ratio, not proof of a 12.5% technical tracking failure rate.**

## Historical research conclusions

The workstream established, for the platform then in use, that consent behavior and Google Consent Mode signalling were not the same thing; the supported purchase/revenue event path depended on the native analytics integration; custom scraping of checkout DOM/undocumented variables was rejected; a clean Astro-owned consent/analytics layer was the preferred future boundary; `availability_click` was selected as the first semantic conversion-intent event; cross-domain continuity was to be tested rather than assumed; and GA4 was attribution/journey data rather than accounting truth.

## Reality Reconciliation on 2026-08-14

AMARA's **website runtime** is Astro-only. The external booking / availability / checkout boundary remains operational under a separate feature contract.

Therefore this evidence record remains archived as evidence, but the current status of its derived decisions must be read from `AMARA_REGISTER.md`. Decisions related to supported purchase/revenue tracking, financial source of truth, no DOM scraping, cross-domain validation and Astro analytics remain active or pending according to that Register.

## Post-record addendum

- GA4 event/user data retention was subsequently set to **14 months**.
- Legal/privacy preparation associated with the historical analytics workstream was completed.
- No Astro analytics/consent runtime was implemented by that historical workstream.
