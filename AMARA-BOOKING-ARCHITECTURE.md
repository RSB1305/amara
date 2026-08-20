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

## Lodgify API Key

The key is **build-time only**. It never reaches the browser and never runs at request time.

Lodgify API keys are account-wide and can read reservations and guest data, so runtime exposure
would be a privacy incident, not just a billing risk. Build-time use is the containment.

- Storage: Cloudflare Pages → Settings → Environment variables, encrypted, Production build env
- Local: `.env` (already covered by `.gitignore`)
- Never: committed, pasted into a chat tool, or read at runtime

### What the API may write

Only volatile numbers: **price, minimum stay, availability**.

Photos, amenities, descriptions, alt texts and SEO copy are hand-authored in five languages in
`src/content/vacationRentalEntities.ts` and guarded by `scripts/check-image-policy.mjs`. A
nightly job that overwrites them would destroy editorial work silently. This boundary is not
negotiable.

### Build resilience

`npm run build` hard-aborts on policy violations. A Lodgify outage must not join that list —
the fetch needs a last-known-good fallback so an unreachable API cannot block a deploy.

### Why build-time

Prices baked into HTML are readable by Google and AI assistants. Prices fetched by JavaScript
after a click are invisible to them — which is why the embedded Lodgify Search widget
complements static prices but cannot replace them.

Because the widget handles live availability, **no SSR is required**: no Cloudflare adapter, no
runtime key, no rate-limit exposure. The site stays fully static.

---

## Provider-neutral Booking Gateway direction

**Recorded:** 2026-08-20T21:20:00+02:00  
**Status:** APPROVED ARCHITECTURE DIRECTION — implementation pending  
**Current provider:** Lodgify  
**Portability objective:** a later PMS/booking-provider change (for example to Cloudbeds) must not require a rewrite of AMARA's public booking UI, live-availability surfaces, promotions/last-minute logic or future AI concierge.

This section records the target direction only. It does **not** supersede the current build-time-only API-key contract above and does not authorize a production runtime integration by itself. Any move from build-time API use to a request-time server-side data layer remains a separately confirmed Class-3 implementation.

### Target boundary

AMARA should own a narrow provider-neutral **Booking Gateway**. Public consumers talk to AMARA concepts; provider-specific APIs remain behind an adapter.

Conceptual shape:

```text
AMARA website / future AI concierge
            |
      AMARA Booking Gateway
            |
      Booking Provider Adapter
            |
   Lodgify today / another provider later
```

The first implementation should support Lodgify only. Do not build a speculative multi-provider framework or a Cloudbeds adapter before there is a real migration/test requirement.

### Stable AMARA-facing operations

The gateway should expose only the small capability set that AMARA actually needs, for example:

- `getAvailability(...)`
- `getRates(...)`
- `getQuote(...)`
- `findAvailableStays(...)`
- `findLastMinuteGaps(...)`

Future write capabilities such as reservation creation must be a separate, explicitly approved contract. They are not part of the initial gateway.

### Provider IDs stay behind the adapter

AMARA surfaces should identify stays with stable AMARA keys such as `maha`, `lounis`, `zaid`, `farah`, `playa` and `tarifa`.

Provider identifiers such as Lodgify `propertyId` and `roomTypeId` belong inside the Lodgify adapter/configuration and must not leak into page content, UI components, URL architecture or future concierge prompts. A provider change then replaces the mapping/adapter rather than the AMARA-facing contract.

### Security direction

Provider credentials are server-side secrets only. The browser, public HTML, client JavaScript and future AI-assistant prompts must never receive the provider API key.

For Lodgify specifically, Support confirmed on 2026-08-20 that there is currently no separate read-only/restricted API key. Therefore any future runtime integration must expose only narrowly defined AMARA read operations rather than a generic proxy to arbitrary Lodgify endpoints.

### Lodgify data and checkout split

Lodgify Support confirmed the intended external-site pattern on 2026-08-20:

- AMARA may use the Public API server-side for properties, room types, availability, rates and quotes.
- Availability should stay close to real time; rates may be cached proportionately; a quote should be refreshed when the guest is ready to proceed.
- For checkout handoff, Lodgify recommends the **Booking Widget / property-specific Booking Box** rather than creating a booking through the Public API before checkout.
- The Booking Box redirects a guest into the normal Lodgify checkout for the selected property without creating a booking first.
- Creating a booking through the Public API before checkout is **not** the approved AMARA path: it immediately blocks availability, triggers automated messages/payment schedules and leaves abandoned bookings that require manual cancellation.
- The standard Lodgify checkout preserves Lodgify payment processing, payment schedules and built-in/native checkout analytics.
- Lodgify currently does not document a Public API endpoint that generates a checkout-session URL with pre-populated property/dates/guests; do not reverse-engineer such a URL or session mechanism.

Support also corrected a prior reference to "Checkout a booking at the specified time": that endpoint manages checkout timing on an existing booking and is not the entry point for a new external checkout flow.

### Static-first performance contract

The target gateway must not turn the marketing site into a generally dynamic application. Normal public pages remain static-first. Live booking data should be requested only when a booking-related interaction needs it, and any future server-side route must be narrowly scoped so homepage/content delivery does not inherit booking-runtime cost.

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
