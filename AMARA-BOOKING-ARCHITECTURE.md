# AMARA Booking Architecture

How this site and the Lodgify booking engine share one brand across two hosts.

Status: implemented in code, **not yet activated in DNS**. See [Cutover Runbook](#cutover-runbook).

---

## The Problem

The live Lodgify site and this Astro build want the same URLs.

Lodgify currently serves both the content pages and the checkout on `amara-lodging.es`, using
exactly the slugs this build generates — `amara-lodging.es/en/la-amara-lounis` exists on both
sides. A domain resolves to one host, so at cutover the entire domain moves to Cloudflare Pages
and every Lodgify page under it disappears, checkout included.

Two collisions existed:

- 6 rentals x 5 languages = 30 rental URLs
- `/{lang}/book/`, referenced from Navigation and ~15 page families, with no Astro equivalent

## The Resolution

Astro keeps the apex domain and inherits the indexed URLs. Lodgify moves to a subdomain.

| Host | Serves | Indexed |
| :--- | :--- | :--- |
| `amara-lodging.es` | Astro — content, SEO, all languages | yes |
| **`amara.lodgify.com`** | **Lodgify — availability, checkout (in use)** | no |
| `checkout.lodgify.com` | Lodgify — payment step, not configurable | no |
| `book.amara-lodging.es` | intended custom host — rejected by Lodgify, see below | no |

Nothing is renamed. Because the hosts differ, the paths stay identical:
`amara-lodging.es/en/la-amara-lounis` for content, `amara.lodgify.com/en/la-amara-lounis`
for booking. Checkout pages carry no SEO value, so moving them costs nothing.

### Why not the branded subdomain

Lodgify rejects `book.amara-lodging.es` in "Use a domain you own" with *"This is on our list of
unsupported domains"*, despite support confirming in writing (2026-08-03) that a subdomain is
treated as its own domain and would work. The query is open with them.

Not worth blocking the migration on, because the subdomain buys less than it first appears:
Lodgify runs the final payment step on `checkout.lodgify.com` regardless of which domain fronts
the site, so the guest sees a lodgify.com host either way. The subdomain would only keep the
brand in the address bar for a few clicks longer.

If Lodgify enables it later, change `DIRECT_BOOKING_ORIGIN` and every booking link follows. This
is a reversible decision, which is exactly why it should not hold up the cutover.

---

## Booking Links

`src/lib/directBooking.ts` is the single source of truth. `DIRECT_BOOKING_ORIGIN` is the one
constant every booking link derives from — changing it repoints the whole site.

- `buildRentalBookingUrl(slug, lang)` — deep link into one rental
- `buildBookingLandingUrl(lang)` — generic availability search, used by the registry `book` key
- `buildCheckoutHandoffUrl(...)` — provider-neutral same-origin handoff after a confirmed quote

### Rules

Do:
- derive every booking link from these helpers
- keep `DIRECT_BOOKING_ORIGIN` as the only place a booking hostname appears

Do not:
- hardcode a booking hostname in content objects, page families, or components
- reintroduce a per-entity `bookingUrl` field — links are derived from `slug` + `lang` so they
  cannot drift apart
- point booking CTAs at an OTA (Booking.com, Airbnb) — that is the commission trap this
  architecture exists to close

### Language prefixes

Lodgify prefixes Spanish with `/es/`. This site does not — Spanish is the unprefixed default
locale. The helpers always emit the Lodgify form. Booking URLs are absolute, so
`normalizeRegistrySpanishPaths()` in `src/lib/linkRegistry.ts` leaves them untouched by design.

### OTA links in structured data

`sameAs` in `src/content/vacationRentalEntities.ts` still lists the Booking.com URL. This is
deliberate: `sameAs` is an entity-identity signal telling Google the same property is listed
elsewhere. It is not a clickable CTA and must not be removed as "leftover".

---

## Lodgify API key and server boundary

`LODGIFY_API_KEY` is a **server-side secret only**. Lodgify API keys are account-wide and can read
reservations and guest data and can perform write operations, so exposing the credential would be
a privacy and operational incident.

- Production: encrypted Cloudflare Pages Function secret/binding named `LODGIFY_API_KEY`
- Local sandbox only: `.env` (covered by `.gitignore`)
- Never: browser JavaScript, public HTML, a `PUBLIC_` environment variable, URL, response, log,
  prompt or Git

Astro pages do not read this binding. The static build makes no Lodgify request, so a provider
outage cannot block or slow a normal page build or page load.

The provider adapter contains fixed GET operations only. It does not expose a generic provider
path or HTTP method and does not implement payment, create, update or cancel operations. In addition
to public availability and quote reads, it owns the two bounded reservation reads required by the
authenticated AMARA Experience access check: booking-list lookup and single-booking revalidation.
Photos, amenities, descriptions, alt texts and SEO copy remain hand-authored in five
languages in `src/content/vacationRentalEntities.ts`; operational data cannot overwrite them.

---

## Provider-neutral Booking Gateway v1

**Recorded:** 2026-08-20T21:20:00+02:00  
**Implemented:** 2026-08-21T07:59:00+02:00
**Status:** ACTIVE CONTRACT — Cloudflare Preview availability and quote verified 2026-08-24
**Current provider:** Lodgify  
**Portability objective:** a later PMS/booking-provider change (for example to Cloudbeds) must not require a rewrite of AMARA's public booking UI, live-availability surfaces, promotions/last-minute logic or future AI concierge.

This section supersedes the former absolute build-time-only API rule with one narrow request-time
exception: Cloudflare Pages Functions may call the approved read-only Booking Gateway after an
explicit booking interaction. It does not turn Astro into an SSR runtime.

**MVP verification, 2026-08-21:** Lodgify API sandbox MVP verified PASS: authentication,
property/room resolution, availability, rates and quote. The production adapter and sandbox now
share the same request and normalization core. See [the non-normative evidence record](docs/lodgify/AMARA_Lodgify_API_MVP_Evidence_2026-08-21.md).

### Implemented boundary

AMARA owns a narrow provider-neutral **Booking Gateway**. Public consumers talk to AMARA concepts; provider-specific APIs remain behind an adapter.

Conceptual shape:

```text
AMARA website / future approved consumer
            |
      AMARA Booking Gateway
            |
      Booking Provider Adapter
            |
   Lodgify today / another provider later
```

The implementation supports Lodgify only. There is no speculative Cloudbeds adapter.

### Sole Lodgify integration path

All server-side Lodgify API traffic from AMARA must run through the central AMARA Booking Gateway
and its Lodgify adapter. This applies to availability, rates, quotes and AMARA Experience reservation
verification and to future last-minute,
promotion, accommodation-search and AI/concierge capabilities. No AMARA feature may create a
parallel direct Lodgify API integration.

The adapter centrally sets the allowlist-relevant `User-Agent` to
`AMARA-Booking-Gateway/1.0`. API credentials, provider IDs, provider and User-Agent behavior, and
provider error handling remain gateway/adapter infrastructure responsibilities. In particular, a
future AI/concierge agent must know and use only stable AMARA-facing gateway operations, not
Lodgify-specific details. A later change of website framework, hosting platform or booking provider
should not unnecessarily change that AMARA-facing interface.

### Public routes and stable operations

The public Cloudflare Pages Function routes are:

- `GET /api/booking/availability`
- `GET /api/booking/rates`
- `GET /api/booking/quote`
- `GET /api/booking/search-calendar`
- `GET /api/booking/checkout`

They expose only the matching AMARA-facing operations:

- `getAvailability(...)`
- `getRates(...)`
- `getQuote(...)`
- destination/portfolio calendar availability for the Homepage stay finder
- validated, provider-owned checkout handoff after a confirmed quote

Single-stay inputs use a known AMARA stay key; the search calendar uses a known AMARA destination
and guest count to select its fixed candidate set server-side. All operations use strict ISO dates.
Calendar windows are limited to 45 days, quotes require departure after arrival, dates are limited
to a plausible future horizon, and adult/child/pet counts are bounded. Unknown query parameters,
duplicate values, arbitrary URLs and provider IDs are rejected. Future write capabilities require
a separate explicitly approved contract.

### Protected AMARA Experience access operation

`POST /api/guest/session` is a same-origin, no-store access endpoint rather than a public Booking
Gateway data route. It accepts only booking-holder first name, arrival date and departure date plus
the interface locale. The server uses the adapter's fixed `GET /v2/reservations/bookings` operation
to require exactly one confirmed match among bounded upcoming/current results. The protected guide
then uses fixed `GET /v2/reservations/bookings/{id}` revalidation at most once per hour. Neither
operation returns reservation or guest data to the browser and neither changes provider state.

The session cookie is encrypted with the Cloudflare secret `AMARA_EXPERIENCE_SESSION_SECRET`, which
must contain at least 32 random characters. Missing or invalid configuration fails closed. Session
claims remain encrypted, responses are private/no-store, and access expires at the end of the
departure day in `Europe/Madrid`. `DELETE /api/guest/session` only clears the AMARA session cookie.

Responses contain only AMARA-relevant availability days, public nightly rate options and quote
totals. Rates may contain multiple options with different minimum/maximum stays. A calendar rate
is orientation only; the current quote is authoritative and AMARA must never calculate a binding
total as nightly rate multiplied by nights.

The search-calendar response contains stable AMARA stay keys plus availability, public nightly
orientation prices with currency, and minimum/maximum stay rules for the requested destination,
guest count and calendar window. It contains no provider IDs. The Homepage finder aggregates these
per-stay records without mixing accommodations: an arrival or departure is selectable only when at
least one same accommodation can carry the complete stay under its availability and stay rules.
For each available arrival date it may display the lowest nightly rate across the matching stays as
an explicitly non-binding “from” price; it never combines availability from one accommodation with
the rate of another to validate a stay. The Results page still obtains the authoritative quote
after submission.

### Provider IDs stay behind the adapter

AMARA surfaces should identify stays with stable AMARA keys such as `maha`, `lounis`, `zaid`, `farah`, `playa` and `tarifa`.

Provider identifiers such as Lodgify `propertyId` and `roomTypeId` belong inside the Lodgify
adapter/mapping and must not leak into page content, UI components, AMARA-authored URLs, booking
data JSON responses or future concierge prompts. The sole exception is the final `Location`
header into the provider-owned checkout: Lodgify requires its property ID in that external URL,
and AMARA resolves it server-side only after validating the public stay key and booking inputs.
All six current stay keys have controlled, verified property and
room-type mappings. New stays remain unconfigured until controlled provider-ID discovery verifies
their mappings; IDs must not be guessed.

### Security and failure boundary

Lodgify Support confirmed on 2026-08-20 that there is no separate read-only/restricted API key.
The gateway therefore accepts GET only, uses fixed provider paths and returns small controlled JSON
errors. Provider error objects, stack traces, provider IDs and credential details are never public.
All v1 responses use `Cache-Control: no-store`; long-lived caching remains measurement-led.

Before a visible production consumer is activated, Cloudflare account configuration must add a
rate-limit/WAF rule scoped to `/api/booking/*`. The limit must be tuned from observed booking
traffic and provider limits. An in-memory Function counter is not an acceptable substitute.

### Lodgify data and checkout split

Lodgify Support confirmed the intended external-site pattern on 2026-08-20:

- AMARA may use the Public API server-side for properties, room types, availability, rates and quotes.
- Availability should stay close to real time; rates may be cached proportionately; a quote should be refreshed when the guest is ready to proceed.
- For checkout handoff, Lodgify recommends the **Booking Widget / property-specific Booking Box** rather than creating a booking through the Public API before checkout.
- The Booking Box redirects a guest into the normal Lodgify checkout for the selected property without creating a booking first.
- Creating a booking through the Public API before checkout is **not** the approved AMARA path: it immediately blocks availability, triggers automated messages/payment schedules and leaves abandoned bookings that require manual cancellation.
- The standard Lodgify checkout preserves Lodgify payment processing, payment schedules and built-in/native checkout analytics.
- Lodgify does not expose this as a Public API session-creation operation. On 2026-08-25 the operator supplied property-specific Booking Box code generated by Lodgify, and the official `stable` Booking Box script confirmed the provider-owned reservation route plus its `arrival`, `departure`, guest and currency parameters. AMARA mirrors only that generated handoff centrally; no booking is created, no generic provider URL is exposed to consumers, and a provider route change must be handled in the single checkout adapter.

Support also corrected a prior reference to "Checkout a booking at the specified time": that endpoint manages checkout timing on an existing booking and is not the entry point for a new external checkout flow.

### Static-first performance contract

Astro remains static output with no adapter and no global server-runtime change. Homepage, rental,
Location, Explore and Trust pages make no Lodgify request during normal page load. The Functions
directory is deployed separately beside `dist/` and runs only when one of the five API routes is
explicitly requested. `public/_routes.json` restricts Cloudflare Pages Function invocation to
`/api/booking/*`, so normal static assets do not run through the Worker. The checkout route performs
no provider API call; it validates AMARA inputs, resolves the fixed server-side mapping and returns
a no-store redirect into Lodgify's provider-owned checkout. Small native interaction
scripts are limited to the relevant booking surfaces: opening the Homepage finder calendar requests
the provider-neutral search calendar, and changing destination or guest count refreshes it while it
is open; a valid submitted search starts availability and quote requests on the static Results page;
and property calendars request live data only after guest interaction. No framework hydration
package or global booking script is added.

### Migration principle

A future provider migration should ideally change only:

1. provider credentials/bindings;
2. provider-specific property/room mapping;
3. the provider adapter and any provider-specific checkout handoff.

AMARA page content, property identity, booking UI, last-minute/promotion logic and future concierge tools should continue to consume the same AMARA-facing gateway contract wherever the replacement provider can supply equivalent capabilities.

---

## Cutover Runbook

Order matters, and not in the obvious way. Lodgify redirects every non-main domain to its main
domain, so *which* domain is main is a live switch that moves real traffic. Phases 1 and 2 leave
the public site untouched; everything that actually changes what a visitor sees is concentrated
in Phase 3.

**Phase 1 — DNS control (site unaffected)**
1. Inventory the IONOS records — done, see [AMARA-DNS-INVENTORY.md](AMARA-DNS-INVENTORY.md),
   which also holds the rollback nameservers. DNSSEC is confirmed inactive, so the nameserver
   change is safe; had it been active, switching without disabling it first would take the
   domain fully offline
2. Add the domain to Cloudflare and verify every record against the inventory. Set all records to
   **DNS only (grey cloud)** — Lodgify already serves the site through Cloudflare for SaaS, so
   proxying would route Cloudflare to Cloudflare and can break SSL
3. Switch nameservers at IONOS to Cloudflare — registrar stays IONOS, no transfer, cancel nothing
4. Send a test email to confirm mail still arrives — silent mail loss is the classic failure here
5. Observe for a few days; the site still runs on Lodgify throughout

During propagation some resolvers still answer from IONOS and some from Cloudflare. That is
harmless as long as both return identical records, which is what step 2 guarantees. There is no
window in which the site "moves".

**Phase 2 — nothing to do**

Originally this phase set up `book.amara-lodging.es`. Lodgify rejects it, so the checkout host is
`amara.lodgify.com`, which already exists and is active. No domain to add, no DNS records, no
48h propagation wait. Do **not** set it as main domain yet — that belongs in the cutover window,
because while the apex still points at Lodgify it would redirect the live site to the new host
and expose the indexed URLs to Google as 301s.

**Phase 3 — Cutover (one tight window, low-traffic hour)**
6. Set `amara.lodgify.com` as Lodgify's main domain — the apex now redirects here, so the clock
   is running
7. Immediately complete a real test booking on that host
8. Point the apex at Cloudflare Pages — Astro goes live
9. Remove `amara-lodging.es` from Lodgify so no redirect remains
10. Redirect legacy `/{lang}/book/` URLs to the checkout host via `public/_redirects`
11. Verify booking CTAs on live rental pages in all five languages

Never invert steps 6 and 8. With the apex on Astro while the checkout host is not yet main, that
host redirects to the apex, whose booking buttons point back at it — an infinite loop with no
reachable checkout.

### Rollback

Booking links are wrong or unreachable: change `DIRECT_BOOKING_ORIGIN` and redeploy. That is the
whole rollback — every link derives from it.

Cutover itself needs to be undone: point the apex back at Lodgify and restore
`amara-lodging.es` as its main domain. DNS records for that state are in
[AMARA-DNS-INVENTORY.md](AMARA-DNS-INVENTORY.md).

---

## Diagnosing a Lodgify outage

Lodgify owns the checkout before, during and after this migration, so its outages will keep
mattering. One occurred on 2026-08-04, roughly 09:47–10:03 CEST, the day after the nameserver
move — close enough in time to look like our doing. It was not. The site recovered on its own
with byte-identical content, so nothing was lost and no change was needed.

Three checks separate "our DNS broke" from "Lodgify broke", in increasing order of certainty:

1. **Fetch `/robots.txt`.** It is served without rendering. If it returns 200 while HTML pages
   return 500, then DNS, TLS, routing and the custom-hostname mapping are all provably intact and
   only Lodgify's rendering failed.
2. **Click Publish in the Lodgify admin.** That runs entirely inside Lodgify and never touches
   the customer's domain. If it fails there, the platform is broken.
3. **Open the Lodgify preview host** (`npreview-<account>.lodgify.com`). It has no relationship
   to the custom domain at all. If it also fails, the case is closed.

During an outage, change nothing — not DNS, not nameservers, not Lodgify's domain settings.
Reverting nameservers cannot help, because the old records pointed at the same address, and it
adds a second variable plus up to 48h of propagation to an already confused picture.

Note for support tickets: a Cloudflare-fronted Lodgify site will invite the assumption that a
recent DNS change caused the fault. The three checks above pre-empt that.

---

## Confirmed by Lodgify Support (2026-08-03, ticket via Michela)

- A subdomain is treated as its own domain; the apex may point elsewhere
- Page structure is preserved under the new hostname
- The final checkout step always runs on `checkout.lodgify.com`, whatever domain is linked
- `amara.lodgify.com` stays active when a custom domain is changed or unlinked
- Redirects from old URLs are the external host's responsibility (ours, via Cloudflare)
