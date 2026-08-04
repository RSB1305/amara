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
| `book.amara-lodging.es` | Lodgify — availability, checkout | no |
| `checkout.lodgify.com` | Lodgify — payment step, not configurable | no |
| `amara.lodgify.com` | Lodgify — standby fallback host | no |

Nothing is renamed. Because the hosts differ, the paths stay identical:
`amara-lodging.es/en/la-amara-lounis` for content, `book.amara-lodging.es/en/la-amara-lounis`
for booking. Checkout pages carry no SEO value, so moving them costs nothing.

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

## Cutover Runbook

Order matters, and not in the obvious way. Lodgify redirects every non-main domain to its main
domain, so *which* domain is main is a live switch that moves real traffic. Phases 1 and 2 leave
the public site untouched; everything that actually changes what a visitor sees is concentrated
in Phase 3.

**Phase 1 — DNS control (site unaffected)**
1. Screenshot all DNS records at IONOS, including MX, SPF, DKIM, DMARC and any verification TXT
   records (Search Console, OTAs)
2. Add the domain to Cloudflare and verify every record was imported. Set all records to
   **DNS only (grey cloud)** — proxying would change the traffic path and can break Lodgify's SSL
3. Switch nameservers at IONOS to Cloudflare — registrar stays IONOS, no transfer, cancel nothing
4. Send a test email to confirm mail still arrives — silent mail loss is the classic failure here
5. Observe for a few days; the site still runs on Lodgify throughout

During propagation some resolvers still answer from IONOS and some from Cloudflare. That is
harmless as long as both return identical records, which is what step 2 guarantees. There is no
window in which the site "moves".

**Phase 2 — Prepare the booking subdomain (site unaffected)**
6. Lodgify → Website builder → Settings → Domain → "Use a domain you own" → `book.amara-lodging.es`
7. Add the DNS records Lodgify displays; SSL is issued by Lodgify at no cost
8. Let it validate and propagate — up to 48h

Stop here. Do **not** set the subdomain as main domain yet: while the apex still points at
Lodgify, doing so would redirect the live site to the subdomain and expose the indexed URLs to
Google as 301s toward a new host.

**Phase 3 — Cutover (one tight window, low-traffic hour)**
9. Set `book.amara-lodging.es` as Lodgify's main domain — the apex now redirects here, so the
   clock is running
10. Immediately complete a real test booking on the subdomain
11. Point the apex at Cloudflare Pages — Astro goes live
12. Remove `amara-lodging.es` from Lodgify so no redirect remains
13. Redirect legacy `/{lang}/book/` URLs to the subdomain via `public/_redirects`
14. Verify booking CTAs on live rental pages in all five languages

Never invert steps 9 and 11. With the apex on Astro while the subdomain is not yet main, the
subdomain redirects to the apex, whose booking buttons point back at the subdomain — an infinite
loop with no reachable checkout.

### Rollback

Set `DIRECT_BOOKING_ORIGIN` to `https://amara.lodgify.com` and redeploy. Lodgify confirmed that
host stays active and independent of any custom domain.

---

## Confirmed by Lodgify Support (2026-08-03, ticket via Michela)

- A subdomain is treated as its own domain; the apex may point elsewhere
- Page structure is preserved under the new hostname
- The final checkout step always runs on `checkout.lodgify.com`, whatever domain is linked
- `amara.lodgify.com` stays active when a custom domain is changed or unlinked
- Redirects from old URLs are the external host's responsibility (ours, via Cloudflare)
