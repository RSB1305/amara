# AMARA Route Matrix — Current State

Status: factual current-state documentation  
Repository state: current local `main`; exact revision is tracked in Git history
Scope: Astro marketing routes; the external Lodgify booking engine is not a route family but is an approved redirect destination.

## Purpose

This document records the routes that the current Astro routing and content sources actually define. It is an inventory, not a proposal for new pages, slugs, redirects, or architecture.

Primary sources of truth:

- `src/lib/canonicalPublicSlugs.mjs`: canonical public route families
- `src/lib/routeOwnership.ts`: locales, default-locale ownership, and public route gating
- `src/pages/`: Astro route generation
- `src/content/`: localized content and authored SEO data
- `src/page-families/`: page-family composition and inline SEO data
- `astro.config.mjs`: sitemap filtering, URL serialization, i18n, and redirects
- `public/_redirects`: effective Cloudflare production redirect layer
- `scripts/check-public-slug-policy.mjs`: build-time route and redirect governance
- `src/pages/vacation-rentals-sitemap.xml.ts`: separate vacation-rental sitemap

## Localization And URL Rules

- Supported languages: English (`en`), German (`de`), Spanish (`es`), Dutch (`nl`), and Swedish (`sv`).
- Spanish is the default locale and has no `/es` prefix on canonical pages.
- English, German, Dutch, and Swedish use `/en`, `/de`, `/nl`, and `/sv` prefixes.
- Canonical slugs are language-neutral and remain identical across all five languages.
- Every indexable family below has five generated localized URLs and a six-link hreflang set (`en`, `de`, `es`, `nl`, `sv`, `x-default`).
- Unless noted otherwise, every route in the indexable matrix is `index, follow` and present in the main sitemap.

## Current Indexable Route Matrix

There are **36 indexable route families** and **180 localized indexable URLs**.

The `Technical pageType` column records the value currently authored in code. It does not change or reinterpret that value.

| Canonical Spanish path | Locales | Page family | Technical `pageType` | Primary current intent | Indexing | Main sitemap | Primary source / content |
|---|---|---|---:|---|---|---|---|
| `/` | en, de, es, nl, sv | Home | A | AMARA brand and accommodation entry | `index, follow` | Yes; accepted root serialization note below | `src/page-families/home/HomePage.astro`, `src/content/homeCinematicCopy.ts` |
| `/amara-about-us` | en, de, es, nl, sv | About AMARA | C | Brand, host, and quality trust | `index, follow` | Yes | `src/page-families/amara-about-us/AboutUsPage.astro`, `src/content/aboutUsContent.ts` |
| `/comfort-amenities` | en, de, es, nl, sv | Comfort & Amenities | C | Stay comfort, amenities, and operating details | `index, follow` | Yes | `src/page-families/comfort-amenities/ComfortAmenitiesPage.astro`, `src/content/comfortAmenitiesContent.ts` |
| `/direct-booking-benefits` | en, de, es, nl, sv | Direct Booking Benefits | C | Direct-booking trust and benefits | `index, follow` | Yes | `src/page-families/direct-booking-benefits/DirectBookingBenefitsPage.astro`, `src/content/directBookingBenefitsContent.ts` |
| `/faq-general` | en, de, es, nl, sv | General FAQ | C | Booking, check-in, and general stay questions | `index, follow` | Yes | `src/page-families/faq-general/FaqGeneralPage.astro` |
| `/guest-reviews` | en, de, es, nl, sv | Guest Reviews | C | Verified guest-review trust | `index, follow` | Yes | `src/page-families/guest-reviews/GuestReviewsPage.astro`, `src/content/guestReviewsContent.ts`, `src/content/reviewEvidence.ts` |
| `/legal-notice` | en, de, es, nl, sv | Legal Notice | C | Legal, privacy, and operator transparency | `index, follow` | Yes | `src/page-families/legal-notice/LegalNoticePage.astro` |
| `/romantic-hideaways` | en, de, es, nl, sv | Accommodation Collection | D | Apartments for couples in Frigiliana and Nerja | `index, follow` | Yes | `src/page-families/romantic-hideaways/RomanticHideawaysPage.astro` |
| `/explore-frigiliana-nerja` | en, de, es, nl, sv | Explore Hub | B | Things to do in Frigiliana and Nerja | `index, follow` | Yes | `src/page-families/location-authority/ExperienceHubPage.astro`, `src/content/experienceHubContent.ts` |
| `/frigiliana-location` | en, de, es, nl, sv | Frigiliana Location Authority | A | Frigiliana as a place to stay | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaLocationPage.astro`, `src/content/frigilianaLocationContent.ts` |
| `/frigiliana-or-nerja` | en, de, es, nl, sv | Location Comparison | A | Choosing Frigiliana or Nerja as a base | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaOrNerjaPage.astro`, `src/content/frigilianaOrNerjaContent.ts` |
| `/frigiliana-faq` | en, de, es, nl, sv | Frigiliana FAQ | A | Practical questions about visiting Frigiliana | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaFaqPage.astro`, `src/content/frigilianaFaqContent.ts` |
| `/frigiliana-parking` | en, de, es, nl, sv | Frigiliana Parking | A | Parking and arrival planning | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaParkingPage.astro`, `src/content/frigilianaParkingContent.ts` |
| `/frigiliana-streets-stairs` | en, de, es, nl, sv | Frigiliana Streets & Stairs | A | Streets, slopes, stairs, and mobility | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaStreetsStairsPage.astro`, `src/content/frigilianaStreetsStairsContent.ts` |
| `/frigiliana-weather` | en, de, es, nl, sv | Frigiliana Weather | A | Climate, weather, and travel timing | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaWeatherPage.astro` |
| `/getting-to-frigiliana` | en, de, es, nl, sv | Getting to Frigiliana | A | Arrival by car, transfer, and bus | `index, follow` | Yes | `src/page-families/location-authority/GettingToFrigilianaPage.astro`, `src/content/gettingToFrigilianaContent.ts` |
| `/frigiliana-beaches` | en, de, es, nl, sv | Frigiliana Beaches | B | Beaches near Frigiliana and Nerja | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaBeachesPage.astro`, `src/content/frigilianaBeachesContent.ts` |
| `/frigiliana-day-trips` | en, de, es, nl, sv | Frigiliana Day Trips | B | Day trips from Frigiliana | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaDayTripsPage.astro`, `src/content/frigilianaDayTripsContent.ts` |
| `/frigiliana-festivals` | en, de, es, nl, sv | Frigiliana Festivals | B | Festivals and events | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaFestivalsPage.astro`, `src/content/frigilianaFestivalsContent.ts` |
| `/frigiliana-hiking` | en, de, es, nl, sv | Frigiliana Hiking | B | Hiking and nature | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaHikingPage.astro`, `src/content/frigilianaHikingContent.ts` |
| `/frigiliana-market` | en, de, es, nl, sv | Frigiliana Market | B | Market day, time, and visit planning | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaMarketPage.astro`, `src/content/frigilianaMarketContent.ts` |
| `/frigiliana-netflix-dos-tumbas` | en, de, es, nl, sv | Dos Tumbas Guide | B | Netflix filming locations in Frigiliana | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaDosTumbasPage.astro`, `src/content/frigilianaDosTumbasContent.ts` |
| `/frigiliana-restaurants` | en, de, es, nl, sv | Frigiliana Restaurants | B | Restaurants in Frigiliana and Nerja | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaRestaurantsPage.astro`, `src/content/frigilianaRestaurantsContent.ts` |
| `/frigiliana-wellness` | en, de, es, nl, sv | Frigiliana Wellness | B | Wellness and spa experiences | `index, follow` | Yes | `src/page-families/location-authority/FrigilianaWellnessPage.astro`, `src/content/frigilianaWellnessContent.ts` |
| `/frigiliana-hospitality-property-for-sale` | en, de, es, nl, sv | Property Sale | D | Purchase of the Casa AMARA property and hospitality business | `index, follow` | Yes | `src/page-families/property-sale/PropertySalePage.astro`, `src/content/propertySaleContent.ts` |
| `/nerja-location` | en, de, es, nl, sv | Nerja Location Authority | A | Nerja as a place to stay | `index, follow` | Yes | `src/page-families/location-authority/NerjaLocationPage.astro`, `src/content/nerjaLocationContent.ts` |
| `/nerja-nightlife` | en, de, es, nl, sv | Nerja Nightlife | B | Nerja evening areas, bars, and atmosphere | `index, follow` | Yes | `src/page-families/location-authority/NerjaNightlifePage.astro`, `src/content/nerjaNightlifeContent.ts` |
| `/tarifa-location` | en, de, es, nl, sv | Tarifa Location Authority | A | Tarifa as a destination | `index, follow` | Yes | `src/page-families/location-authority/TarifaLocationPage.astro`, `src/content/tarifaGuideContent.ts` |
| `/tarifa-beaches` | en, de, es, nl, sv | Tarifa Beaches | B | Choosing beaches in Tarifa | `index, follow` | Yes | `src/page-families/location-authority/TarifaBeachesPage.astro`, `src/content/tarifaGuideContent.ts` |
| `/tarifa-wind-kitesurfing` | en, de, es, nl, sv | Tarifa Wind & Kitesurfing | B | Wind, Levante, Poniente, and kitesurfing | `index, follow` | Yes | `src/page-families/location-authority/TarifaWindKitesurfingPage.astro`, `src/content/tarifaGuideContent.ts` |
| `/la-amara-farah` | en, de, es, nl, sv | Vacation Rental — Farah | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |
| `/la-amara-lounis` | en, de, es, nl, sv | Vacation Rental — Lounis | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |
| `/la-amara-zaid` | en, de, es, nl, sv | Vacation Rental — Zaid | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |
| `/la-amara-maha` | en, de, es, nl, sv | Vacation Rental — Maha | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |
| `/la-amara-playa` | en, de, es, nl, sv | Vacation Rental — Playa | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |
| `/la-amara-family-and-surf` | en, de, es, nl, sv | Vacation Rental — Family & Surf | D | Property-specific accommodation conversion | `index, follow` | Yes | `src/page-families/vacation-rental/VacationRentalPage.astro`, `src/content/vacationRentalEntities.ts` |

### Indexable Route Totals

| Technical `pageType` | Route families | Localized URLs |
|---:|---:|---:|
| A | 21 | 105 |
| B | 1 | 5 |
| C | 7 | 35 |
| D | 7 | 35 |
| **Total** | **36** | **180** |

## Known And Accepted Root Serialization Difference

The current generated output intentionally remains documented as follows:

- Root canonical: `https://amara-lodging.es/`
- Root sitemap entry: `https://amara-lodging.es`
- The remaining 179 sitemap/canonical pairs match exactly.

This root-only slash difference is a **known and accepted current-state deviation**, not an open defect in this matrix. No URL, canonical, or sitemap change is proposed here.

## Noindex Route Layer

Noindex pages are generated but intentionally excluded from the main sitemap.

### Public Utility Families

| Canonical Spanish path | Locales | Technical `pageType` | Robots | Main sitemap | Source |
|---|---|---:|---|---|---|
| `/directions-arrival-guide` | en, de, es, nl, sv | A | `noindex, follow` | No | `src/page-families/arrival-guide/DirectionsArrivalGuidePage.astro`, `src/content/arrivalGuideContent.ts` |
| `/instagram` | en, de, es, nl, sv | C | `noindex, follow` | No | `src/page-families/instagram/InstagramPage.astro` |

These two families create 10 localized noindex URLs.

### Guest Guide Families

Guest Guide routes are generated from `src/content/guestGuideEntries.ts`, which combines `src/content/guestGuideFrigiliana.ts` and `src/content/guestGuideTarifa.ts`. All use technical `pageType: 'D'`, `noindex, follow`, five languages, and exclusion from the main sitemap.

Frigiliana and Nerja Guest Guide slugs:

- `guestwelcome-frigiliana-farah`
- `guesthome-frigiliana-farah`
- `guestwelcome-frigiliana-lounis`
- `guesthome-frigiliana-lounis`
- `guestwelcome-frigiliana-zaid`
- `guesthome-frigiliana-zaid`
- `guestwelcome-frigiliana-maha`
- `guesthome-frigiliana-maha`
- `guestwelcome-nerja-playa`
- `guesthome-nerja-playa`
- `frigiliana-guest-essentials`
- `frigiliana-guest-recommendations`
- `frigiliana-guest-beaches`
- `frigiliana-guest-breakfast`
- `frigiliana-guest-day-trips`
- `frigiliana-guest-festivals`
- `frigiliana-guest-flamenco-bachata`
- `frigiliana-guest-hiking`
- `frigiliana-guest-restaurants`
- `frigiliana-guest-sightseeing`
- `frigiliana-guest-wellness`
- `nerja-guest-adventure`
- `nerja-guest-breakfast`
- `nerja-guest-essentials`
- `nerja-guest-nightlife`
- `nerja-guest-restaurants`

Tarifa Guest Guide slugs:

- `tarifa-guest-guide`
- `tarifa-guest-apartment`
- `tarifa-guest-local-essentials`
- `tarifa-guest-local-guide`
- `tarifa-guest-food-drink`
- `tarifa-guest-beaches`
- `tarifa-guest-activities`
- `tarifa-guest-sightseeing`
- `tarifa-nightlife`
- `tarifa-guest-kitesurfing`

The 36 Guest Guide families create 180 localized noindex URLs. Together with the two public utility families, the noindex route layer contains **38 families and 190 localized URLs**. The generated 404 page is also noindex and is not a localized content family.

Internal `/tools/*` source pages are removed from normal production output unless a dedicated local QA build explicitly enables them. They are not public route families in this matrix.

## Redirect Layer

`public/_redirects` is the effective Cloudflare production redirect layer. It currently contains **295 network-level 301 redirects**. `astro.config.mjs` separately retains **35 redirects** that Astro can render as static redirect pages; every Astro redirect must have a matching Cloudflare rule with the same target so the network-level redirect takes precedence in production.

| Redirect layer | Count | Governance |
|---|---:|---|
| Cloudflare `public/_redirects` | 295 | Effective production redirects; all must be 301 |
| Astro config redirects | 35 | Must match the corresponding Cloudflare source and target |
| External Lodgify booking redirects | 9 | Approved exception to internal Astro targets; must use the canonical Lodgify booking origin |

The Cloudflare layer includes legacy `/es/...` sources that normalize to unprefixed Spanish canonical routes. Current Guest Guide routes, including intentional noindex pages, are treated as generated routes and may not be shadowed by redirect sources. Booking-continuity redirects may terminate directly at the external Lodgify booking engine.

The prebuild slug-policy audit parses the complete Cloudflare file and enforces permanent status, unique sources, direct targets, loop safety, known internal destinations, the Lodgify-only external-host policy, current-route collision protection, unprefixed Spanish targets, and Astro/Cloudflare parity.

The Astro redirect subset remains grouped as follows:

| Astro redirect group | Count | Current canonical target behavior |
|---|---:|---|
| German Frigiliana/Nerja localized alias | 1 | `/de/frigiliana-oder-nerja` → `/de/frigiliana-or-nerja` |
| Arrival and parking aliases | 11 | Root/default aliases → `/getting-to-frigiliana`; non-default aliases remain in their language |
| Spanish-prefixed Frigiliana FAQ alias | 1 | `/es/frigiliana-faq` → `/frigiliana-faq` |
| Localized and historical market aliases | 6 | Consolidate into the canonical `/frigiliana-market` family in the matching locale |
| Streets, stairs, and village-structure aliases | 16 | Consolidate into the canonical `/frigiliana-streets-stairs` family in the matching locale |
| **Total** | **35** | |

Redirects do not add indexable route families or sitemap URLs.

## Separate Vacation Rental Sitemap

`src/pages/vacation-rentals-sitemap.xml.ts` generates `vacation-rentals-sitemap.xml` with the six default-locale rental URLs:

- `/la-amara-farah`
- `/la-amara-lounis`
- `/la-amara-zaid`
- `/la-amara-maha`
- `/la-amara-playa`
- `/la-amara-family-and-surf`

The main sitemap independently contains all 30 localized rental URLs. `public/robots.txt` advertises both the main sitemap index and this separate rental sitemap.

## Dormant Registry Entries

The following tokens exist in `src/lib/linkRegistry.ts` but do not own or generate public pages. They are gated as disabled public route tokens by `src/lib/routeOwnership.ts` and must not be counted as live routes:

- `locations_hub`
- `journal`
- `contact`
- `archive`

These are **dormant registry entries**, not missing pages and not sitemap candidates. This document makes no recommendation to activate, remove, or replace them.

## Open Type Classification Review Points

The matrix above records technical `pageType` values exactly as they exist. The following is an open governance question only; no type change is approved or implied:

1. **Home:** technically Type A, while its metadata and primary journey also carry strong brand and accommodation-conversion intent.

Any future decision must be handled as a separate architecture/governance task. This current-state document does not alter the technical assignments.

## Intent Overlap And Cannibalization Watchlist

The following are evidence-based overlaps in titles, page scope, or query intent. They indicate areas to monitor, not proven search cannibalization; no Search Console performance data is included in this inventory.

### Highest Overlap

- **Home vs `/romantic-hideaways`:** both target boutique/holiday apartments in Frigiliana and Nerja. Home is the brand entry; Romantic Hideaways is the accommodation collection, but their commercial query language remains close.
- **Collection scope:** `/romantic-hideaways` targets apartments for couples in Frigiliana and Nerja while also presenting the Tarifa Family & Surf property. This is a scope distinction to monitor, not a route-change recommendation.

### Location Authority Overlap

- `/frigiliana-location` covers where to stay, parking, and weather while `/frigiliana-parking` and `/frigiliana-weather` own those topics in depth.
- `/frigiliana-location`, `/frigiliana-or-nerja`, and `/nerja-location` all contain where-to-stay decision intent.
- `/getting-to-frigiliana` and `/frigiliana-parking` share arrival-planning context. The guest-specific `/directions-arrival-guide` is noindex, which limits index-level competition.
- `/nerja-location` includes beach context while `/frigiliana-beaches` owns the regional beach-selection topic.

### Explore Hub/Spoke Overlap

- `/explore-frigiliana-nerja` intentionally overlaps its beaches, hiking, restaurants, festivals, wellness, and day-trip spokes as a discovery hub.
- `/tarifa-location` intentionally overlaps `/tarifa-beaches` and `/tarifa-wind-kitesurfing` as the Tarifa authority hub.
- `/faq-general` and `/frigiliana-faq` have similar format but distinct intents: stay operations versus destination-specific practical questions.

## Current-State Integrity Summary

- 36 indexable route families
- 180 localized indexable URLs
- five complete language versions for every indexable family
- 180 complete hreflang sets
- 180 main-sitemap entries
- 179 exact sitemap/canonical string matches plus one accepted root-slash difference
- 38 noindex families and 190 localized noindex URLs
- 295 Cloudflare network-level 301 redirects
- 35 matching Astro config redirects
- nine approved external Lodgify booking redirects and no other external redirect host
- build-time redirect validation with zero current-route collisions, duplicates, direct chains, or loops
- four clearly marked dormant registry entries
- no unregistered route family in the main sitemap
- no new page, slug, URL, redirect, or architecture recommendation in this document
