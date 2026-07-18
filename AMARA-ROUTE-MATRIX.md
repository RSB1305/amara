# AMARA Route Matrix

Status: draft for approval  
Purpose: rebuild AMARA information architecture from the legacy sitemap without carrying legacy clutter into the new site.

## Core Decision

AMARA should use one calm, standardized route system:

- Spanish is the default locale and has no `/es` prefix.
- Non-default locales use `/en`, `/de`, `/nl`, and `/sv`.
- Canonical slugs stay standardized across languages.
- Legacy localized slugs should redirect to the new canonical route.
- Guest utility pages can exist, but should not be in the public XML sitemap unless they are public SEO pages.

This keeps architecture simple, hreflang stable, redirects predictable, and the visual site calmer.

## Target Public Sitemap V1

These are the pages that should be public, indexable, and visible to search engines now.

| Family | Canonical slug | Role | Priority |
|---|---|---:|---:|
| Home | `/` | Brand and apartment entry | P0 |
| Collection | `/romantic-hideaways` | Current apartment collection landing | P0 |
| Trust | `/amara-about-us` | Brand trust | P0 |
| Trust | `/guest-reviews` | Review trust | P0 |
| Trust | `/direct-booking-benefits` | Direct booking trust | P0 |
| Trust | `/comfort-amenities` | Stay quality and policies | P1 |
| Trust | `/faq-general` | General stay FAQ | P1 |
| Legal | `/legal-notice` | Legal and privacy | P2 |
| Location authority | `/frigiliana-location` | Main Frigiliana pillar | P0 |
| Location authority | `/frigiliana-parking` | Parking and movement | P1 |
| Location authority | `/frigiliana-weather` | Weather and climate | P1 |
| Apartment listing | `/la-amara-farah` | VacationRental detail page | P0 |
| Apartment listing | `/la-amara-lounis` | VacationRental detail page | P0 |
| Apartment listing | `/la-amara-zaid` | VacationRental detail page | P0 |
| Apartment listing | `/la-amara-maha` | VacationRental detail page | P0 |
| Apartment listing | `/la-amara-playa` | VacationRental detail page | P0 |
| Apartment listing | `/la-amara-family-and-surf` | VacationRental detail page | P0 |

With 5 locales this creates 85 sitemap URLs:

- `/...` for Spanish default
- `/en/...`
- `/de/...`
- `/nl/...`
- `/sv/...`

Note: the six apartment listing pages are Type D pages. They carry one static
Google `VacationRental` entity per page, from the Astro rental registry.

## Utility Pages

These may remain live, but should not be in the XML sitemap unless they become public SEO content.

| Route | Recommended robots | Reason |
|---|---|---|
| `/directions-arrival-guide` | `noindex, follow` | Guest-specific arrival information |
| `/instagram` | `noindex, follow` | External-link placeholder |
| `/tools/*` | no public sitemap | Internal tooling |
| `/test` | no public sitemap | Internal test page |

## Legacy Sitemap Summary

The legacy sitemap has 37 URL groups per language, 185 URLs total. These should not all become public pages again.

| Legacy EN slug group | New canonical target | Status | Notes |
|---|---|---|---|
| `about` | `/amara-about-us` | redirect | Already represented by stronger brand page |
| `comfort-amenities` | `/comfort-amenities` | live | Keep |
| `guest-reviews` | `/guest-reviews` | live | Keep |
| `direct-booking-benefits` | `/direct-booking-benefits` | live | Keep |
| `faq-general` | `/faq-general` | live | Keep |
| `legal-notice` | `/legal-notice` | live | Keep |
| `frigiliana-location` | `/frigiliana-location` | live | Keep |
| `frigiliana-weather` | `/frigiliana-weather` | live | Keep |
| `frigiliana-parking` | `/frigiliana-parking` | live | Keep |
| `arrival-parking-guide` | `/directions-arrival-guide` | utility redirect | Keep out of sitemap if guest-specific |
| `frigiliana-stairs-layout` | `/frigiliana-location` | redirect or future section | Fold into location pillar for now |
| `where-to-stay-frigiliana` | future `/where-to-stay-frigiliana` | future P1 | Strong SEO topic, but needs calm page family |
| `hotels-in-frigiliana` | future `/hotels-in-frigiliana` | future P2 | Could support comparison intent |
| `staying-in-frigiliana-hotels-vs-apartments` | future comparison page | future P2 | Merge with hotels topic unless content is deep |
| `frigiliana-faq` | `/faq-general` or future `/frigiliana-faq` | redirect/future | Decide whether location FAQ deserves its own page |
| `restaurants-frigiliana-nerja` | future `/restaurants-frigiliana-nerja` | future P1 | High guest value, do not rush thin content |
| `insider-restaurants-nerja` | future Nerja food page | future P2 | Later, when Nerja location layer exists |
| `beaches-nerja-frigiliana` | future `/beaches-nerja-frigiliana` | future P1 | Strong regional topic |
| `hiking-frigiliana-nerja` | future `/hiking-frigiliana-nerja` | future P1 | Strong regional topic |
| `day-trips-from-frigiliana` | future `/day-trips-from-frigiliana` | future P2 | Useful cluster page |
| `culture-frigiliana-nerja` | future culture/events page | future P2 | Merge festivals/culture |
| `sightseeing-frigiliana-nerja` | future sightseeing page | future P2 | Needs clear intent |
| `wellness-slow-living` | future slow travel page | future P3 | Brand-fit, lower search priority |
| `winter-stay-frigiliana` | future seasonal page | future P2 | Good shoulder-season topic |
| `frigiliana-market` | future local essentials page | future P3 | Likely guest-guide content |
| `frigiliana-supermarkets` | future local essentials page | future P3 | Likely guest-guide content |
| `frigiliana-at-night` | future local guide page | future P3 | Could merge with Frigiliana guide |
| `frigiliana-near-nerja` | `/frigiliana-location` | redirect or future comparison | Current pillar already covers relationship |
| `apartment-frigiliana` | `/romantic-hideaways` | redirect now | Future product route should replace this |
| `frigiliana-location-amara` | `/frigiliana-location` | redirect | Duplicate intent |
| `contact` | future `/contact` | future P1 | Useful, but currently disabled |
| `torrecilla-beachfront-living` | future Nerja apartment page | future P2 | Product/location content not live yet |
| `nerja-nightlife` | future Nerja guide | future P3 | Do not index before Nerja layer exists |
| `nerja-nightlife-ii` | future Nerja guide | remove/redirect | Duplicate |
| `tarifa-beaches-extended` | future Tarifa authority page | future P3 | Only if Tarifa becomes active again |
| `village-icon-sale` | `/frigiliana-location` | redirect/remove | Off-brand unless sales campaign returns |
| `frigiliana-netflix-series-dos-tumbas` | `/frigiliana-location` | redirect/remove | Topical legacy page, not core |

## Redirect Rules To Fix First

The current redirect file is too small and contains one important issue:

| Current rule | Problem | Recommended action |
|---|---|---|
| `/en/amara-about-us -> /amara-about-us` | Sends English page to Spanish default route | Remove |
| `/en/about -> /amara-about-us` | Sends English legacy URL to Spanish default route | Change to `/en/amara-about-us` |
| `/es/about -> /amara-about-us` | Correct, because Spanish default has no `/es` prefix | Keep |

Redirect principle:

- Old `/es/...` URLs should redirect to root Spanish paths.
- Old `/en/...`, `/de/...`, `/nl/...`, `/sv/...` URLs should redirect within the same language.
- Do not silently redirect unavailable future content to unrelated commercial pages.
- Duplicate or weak legacy pages should consolidate to the closest real authority page.

## Recommended Future Sitemap V2

After the current site is visually calm, add only the strongest SEO clusters.

| Future route | Reason | Priority |
|---|---|---:|
| `/frigiliana-apartments` or replacement for `/romantic-hideaways` | Stronger product search intent than "romantic hideaways" | P0 |
| `/where-to-stay-frigiliana` | High-intent planning query | P1 |
| `/beaches-nerja-frigiliana` | Regional discovery | P1 |
| `/hiking-frigiliana-nerja` | Regional discovery | P1 |
| `/restaurants-frigiliana-nerja` | Guest value and search demand | P1 |
| `/contact` | Trust and conversion utility | P1 |
| `/frigiliana-faq` | Only if it becomes location-specific and deep | P2 |
| `/winter-stay-frigiliana` | Seasonal conversion | P2 |

Do not add all legacy topics at once. Add pages only when they have a reusable page family, complete multilingual content, and a calm visual pattern.

## Design Implication

The sitemap should drive the interface:

- Primary navigation should expose only the P0/P1 pages a guest needs.
- Content clusters should live through contextual internal links, not a crowded top nav.
- Trust pages should share one visual family.
- Location authority pages should share one visual family.
- Utility pages should be quiet and functional.

## Implementation Order

1. Approve this route matrix.
2. Correct `public/_redirects` for existing live pages.
3. Expand redirects for legacy URL groups.
4. Keep current XML sitemap limited to approved live/indexable routes.
5. Rename or replace `/romantic-hideaways` only after deciding the product architecture.
6. Then calm the design family by family.
7. Then optimize metadata, schema, internal links, and content depth.

## Open Decisions

These need explicit approval before implementation:

1. Should `/romantic-hideaways` remain the collection URL for now, or should it become `/frigiliana-apartments` / `/boutique-apartments-andalusia`?
2. Should `/directions-arrival-guide` stay noindex guest utility, or become a public SEO arrival guide?
3. Should `/contact` be rebuilt as a real page in V1.1?
4. Should we keep standardized slugs across languages, or intentionally build localized slugs per language?

Recommended answers:

1. Keep `/romantic-hideaways` for now, plan a product route later.
2. Keep `/directions-arrival-guide` as noindex utility.
3. Add `/contact` soon, but not before route cleanup.
4. Keep standardized slugs across languages for simplicity, stability, and lower maintenance risk.
