# AMARA Lodgify API MVP Evidence

**Status:** EVIDENCE / IMPLEMENTATION PROOF — NON-NORMATIVE

**Timestamp:** 2026-08-21T07:41:00+02:00

**Scope:** Read-only Lodgify API sandbox MVP; no production runtime authorization

## Verification result

| Check | Result |
| :--- | :--- |
| Authentication | PASS |
| Property resolution | PASS |
| Room-type resolution | PASS |
| Availability | PASS |
| Rates | PASS |
| Quote | PASS |
| Overall | PASS |

The real-data test resolved **AMARA Maha** and its room type, then completed the Lodgify V2 room-type availability, rates-calendar and quote flow. Provider property and room-type IDs may be retained as technical adapter evidence, but they are not AMARA-facing SSOT and must not become public content or UI identifiers.

The sandbox used only `GET` requests. It did not create or modify a booking and executed no Lodgify write operation.

## Confirmed response and normalization behavior

V2 Availability returns a period/range structure rather than one record per calendar day. The sandbox normalized those periods into individual calendar days for the requested window. A populated `closed_period` is handled conservatively as unavailable, even when the period otherwise reports availability.

The real V2 Rates Calendar response contained:

```text
calendar_items[]
  date
  is_default
  prices[]
    min_stay
    max_stay
    price_per_day
    additional_guests_starts_from
    price_per_additional_guest
```

It also included `rate_settings.currency_code` plus fee and promotion structures. Multiple price options for the same calendar day occurred in the real response and can be distinguished by `min_stay` / `max_stay`. A calendar-day rate is therefore an orientation or rate input; AMARA must not add daily rates itself to present a binding stay total.

The successful V2 Quote request followed Lodgify's documented nested query serialization:

```text
roomTypes[0].Id
roomTypes[0].People
roomTypes[0].guest_breakdown.adults
roomTypes[0].guest_breakdown.pets
```

The real quote response was an array and included, among other fields:

```text
amount_gross
currency_code
total_excluding_vat
total_including_vat
total_vat
room_types[].subtotal
add_ons_subtotal
total_scheduled_payments
total_to_collect_manually
scheduled_payments[]
```

`total_including_vat` was `null` in the tested response. The verified quote summary was:

| Field | Value |
| :--- | :--- |
| Currency | EUR |
| Gross total | 165 |
| Total excluding VAT | 165 |
| VAT | 0 |
| Room subtotal | 165 |
| Add-ons subtotal | 0 |
| Total scheduled payments | 165 |
| Total to collect manually | 0 |

For the same stay candidate, the Rates Calendar showed a daily rate of EUR 85 while the real Quote returned EUR 165. This confirms the boundary: **Calendar Rate = orientation / rate input. Quote = authoritative current price calculation for the concrete stay.** A quote must be refreshed before checkout handoff.

## Credential and runtime boundary

Lodgify Support confirmed that there is no separate read-only API key. The credential therefore requires elevated protection:

- never expose it to the browser, client JavaScript, public HTML, a prompt or a general-purpose proxy;
- store and use it only in an approved server-side secret boundary;
- expose narrow AMARA operations rather than arbitrary provider requests in any future runtime layer;
- keep write capabilities outside the initial gateway contract and subject to separate approval.

This MVP proves provider capability only. It does not authorize or implement a production runtime.

## Lodgify Support evidence

Support ticket **1273213**, dated **2026-08-20**, confirmed:

- an Astro/Cloudflare site with a server-side API layer is supported;
- the Public API for properties, availability, rates and quotes is an appropriate approach;
- the quote should be refreshed before proceeding to booking;
- the property-specific Booking Box is the recommended checkout handoff;
- AMARA must not create an API booking before checkout because doing so immediately blocks availability and triggers automations and the payment schedule;
- the standard Lodgify checkout preserves the payment flow and native analytics;
- there is no documented Public API checkout-session link for the desired prefilled handoff, so AMARA must not reverse-engineer a URL or session mechanism.

### Cloudflare Preview throttle evidence

On 2026-08-21, one direct Availability request through the Cloudflare Preview gateway returned
HTTP `429`; the safe server diagnostic recorded `providerStep=availability` and
`providerHttpStatus=429`. Lodgify Support confirmed in ticket **1273213** that its API protection
considers the source IP in addition to the API key and identified Cloudflare shared egress as the
likely cause. The agreed mitigation is allowlisting the central server-side User-Agent
`AMARA-Booking-Gateway/1.0`. Following Support's instruction, AMARA made no further real test
requests until the allowlist was confirmed.

### Whitelist canary evidence

On 2026-08-24, Lodgify confirmed that `AMARA-Booking-Gateway/1.0` was fully allowlisted and that
API testing could resume. Controlled read-only requests through the Cloudflare Preview then proved:

- Availability returned HTTP `200` for Maha and matched the public AMARA Gateway contract;
- Quote returned HTTP `200` for 2026-11-03 through 2026-11-10, two adults, no children and no pets;
- the authoritative quote returned `currency=EUR` and `grossTotal=866`;
- no secret, API key or provider ID appeared in the public request or response;
- no retry or write operation was performed.

## Provider portability

AMARA-facing booking contracts should remain provider-neutral, with Lodgify as the first adapter. A later change to a provider such as Cloudbeds should ideally affect credentials, adapter mapping and checkout handoff rather than AMARA's public booking UI, property identities or consumer contracts.

The following are potential future capabilities, not implemented functions:

- live availability calendar;
- last-minute and gap-fill discovery;
- promotions;
- portfolio availability;
- AI concierge;
- additional provider-neutral Gateway consumers.

## Not implemented or resolved

- caching and TTL policy;
- rate limiting;
- Booking Box prefill/integration with AMARA-owned date selection;
- final bank-transfer/payment strategy;
- live calendar UI;
- last-minute UI;
- AI concierge.
