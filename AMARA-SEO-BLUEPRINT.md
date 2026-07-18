# AMARA SEO Blueprint

Status: strategic draft  
Scope: search architecture, keyword intent, content roadmap, internal linking, metadata, structured data, and measurement.

## Executive Direction

AMARA should not become a large travel blog. It should become a compact, high-trust lodging website with a few excellent commercial pages and a small number of high-value Frigiliana/Nerja authority pages.

The SEO goal is not maximum URL count. The goal is maximum relevance per URL.

Primary strategy:

1. Keep the public sitemap small and clean.
2. Make every indexable page own one clear search intent.
3. Build deep content only where it supports booking confidence or high-value trip planning.
4. Use internal links to move users from discovery intent to trust and booking intent.
5. Localize meaning per market, not just words.

## Current SEO Foundation

Already in place:

- Canonical route system with Spanish default and non-default locale prefixes.
- Public sitemap limited to approved indexable routes.
- Legacy URL redirects from the old sitemap to current canonical routes.
- Central SEO head resolution.
- Central structured data registry for AMARA brand and lodging entities.
- Dedicated Type-D apartment listing pages for all six AMARA rentals, each with one static Google `VacationRental` entity.
- Multilingual page structure across `en`, `de`, `es`, `nl`, `sv`.

Important rule:

- Do not add new indexable pages until the page has a clear intent, complete multilingual content, internal links, and a stable visual pattern.

Reference principles:

- Google canonical signals: redirects, canonical tags, and sitemap inclusion should align.
- Google multilingual guidance: every language version needs unique URLs, reciprocal hreflang, and visibly localized page content.
- Google site migration guidance: redirects should go to relevant replacement pages, not unrelated destinations.

Official references:

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/301-redirects
- https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites
- https://developers.google.com/search/docs/advanced/crawling/localized-versions

## Business Objective

SEO should support three outcomes:

1. More qualified guests discover AMARA before booking on a platform.
2. More users trust AMARA enough to book direct or continue to a booking channel.
3. AMARA becomes a credible Frigiliana/Nerja lodging authority without looking like a content farm.

Primary conversion paths:

- Search discovery -> location authority -> collection page -> trust pages -> booking channel.
- Search discovery -> commercial lodging page -> reviews/benefits/amenities -> booking channel.
- Brand search -> home/about/reviews -> booking channel.

## Market Assumptions

These assumptions should be validated with Search Console and keyword tools.

| Market | Likely value | Notes |
|---|---:|---|
| German | High | Strong fit for Andalusia holiday apartments, trust-heavy decision process |
| English | High | Broad international reach, high search volume, competitive |
| Dutch | Medium-high | Strong holiday-apartment market, values clarity and practical details |
| Swedish | Medium | Smaller volume, potentially high quality guests |
| Spanish | Medium | Local/regional relevance, but direct booking competition may differ |

Needed later:

- Google Search Console query export.
- Top landing pages by clicks/impressions.
- Booking source mix by market.
- Competitor list per language.
- Direct booking margin versus platform booking value.

## Keyword Intent Architecture

### P0 Commercial Accommodation

This is the highest business-value cluster. It should eventually be owned by a stronger product route than `/romantic-hideaways`.

Recommended future owner:

- `/frigiliana-apartments` or `/boutique-apartments-frigiliana`

Current owner:

- `/romantic-hideaways`

Primary English intents:

- boutique apartments Frigiliana
- holiday apartments Frigiliana
- vacation rental Frigiliana
- Frigiliana apartments for couples
- romantic stays Frigiliana
- boutique holiday homes Andalusia
- holiday apartment Nerja
- boutique apartment Nerja

German variants to validate:

- Ferienwohnung Frigiliana
- Boutique Ferienwohnung Frigiliana
- Ferienwohnung Andalusien
- Unterkunft Frigiliana
- Ferienwohnung Nerja
- romantische Unterkunft Andalusien

Dutch variants to validate:

- vakantieappartement Frigiliana
- appartement Frigiliana
- vakantiehuis Frigiliana
- boutique verblijf Andalusie
- appartement Nerja

Spanish variants to validate:

- apartamentos en Frigiliana
- apartamento turistico Frigiliana
- alojamiento en Frigiliana
- apartamentos boutique Andalucia

Swedish variants to validate:

- lagenhet Frigiliana
- semesterlagenhet Frigiliana
- boende Frigiliana
- semesterboende Andalusien

Content requirements:

- Clear collection promise above the fold.
- Apartment cards with exact location, guest count, key differentiators, and links.
- Trust band with review proof.
- Direct booking explanation.
- Strong internal links to location, reviews, amenities, FAQ.
- Lodging structured data when apartment detail pages exist.

Risk:

- `/romantic-hideaways` has brand flavor but weaker generic search intent. Keep now; decide later whether to create a stronger commercial canonical route.

### P0 Location Authority

Owner:

- `/frigiliana-location`

Primary intents:

- Frigiliana
- Frigiliana Spain
- where is Frigiliana
- Frigiliana near Nerja
- Frigiliana vs Nerja
- is Frigiliana worth visiting
- where to stay in Frigiliana
- staying in Frigiliana

Content requirements:

- Quick orientation: location, altitude, distance to Nerja/coast/airport.
- Why Frigiliana changes the stay experience.
- Frigiliana versus Nerja comparison.
- Movement/stairs/old town reality.
- Where AMARA fits: lower village, manageable daily rhythm.
- Links to parking, weather, arrival guide, collection, reviews.

SEO role:

- Main discovery pillar for Frigiliana.
- Should absorb many old legacy topics until standalone pages are created.

### P1 Parking And Movement

Owner:

- `/frigiliana-parking`

Primary intents:

- Frigiliana parking
- parking in Frigiliana
- can you drive in Frigiliana
- Frigiliana old town parking
- is Frigiliana difficult by car

Content requirements:

- Honest short answer.
- Parking by stay type.
- Old town versus lower village.
- Arrival and luggage guidance.
- Link to arrival guide, location page, collection.

SEO role:

- Very specific, high-trust planning intent.
- Supports booking confidence because it addresses friction.

### P1 Weather And Climate

Owner:

- `/frigiliana-weather`

Primary intents:

- Frigiliana weather
- weather in Frigiliana
- Frigiliana climate
- Frigiliana in winter
- best time to visit Frigiliana

Content requirements:

- Seasonal overview.
- Summer nights and hillside cooling.
- Winter/shoulder-season positioning.
- Practical packing/stay advice.
- Link to location, collection, parking.

SEO role:

- Planning intent and seasonal conversion.
- Good support for non-summer bookings.

### P0 Trust Cluster

Owners:

- `/guest-reviews`
- `/direct-booking-benefits`
- `/amara-about-us`

Primary intents:

- AMARA reviews
- AMARA Lodging reviews
- book AMARA direct
- AMARA Frigiliana
- AMARA apartments

Content requirements:

- Clear, credible review proof.
- Booking channel explanation.
- Host/brand story.
- Policies and expectations.
- Consistent trust design family.

SEO role:

- Convert users who already discovered AMARA.
- Support E-E-A-T signals and brand trust.

### P1 Amenities / FAQ

Owners:

- `/comfort-amenities`
- `/faq-general`

Primary intents:

- AMARA amenities
- AMARA house rules
- AMARA check in
- AMARA pets
- AMARA direct booking questions

Content requirements:

- Specific, scannable, calm.
- Avoid generic hospitality language.
- Use FAQ schema only if implemented accurately and visibly.
- Internal links to direct booking, reviews, collection, arrival.

SEO role:

- Conversion support.
- Reduces uncertainty.

## Future SEO Clusters

Add these only after current P0 pages are visually and semantically strong.

| Future page | Priority | Intent | Reason |
|---|---:|---|---|
| `/frigiliana-apartments` | P0 | commercial accommodation | Stronger keyword owner than `/romantic-hideaways` |
| `/where-to-stay-frigiliana` | P1 | trip planning + commercial bridge | High-intent planning query |
| `/restaurants-frigiliana-nerja` | P1 | guest planning | High usefulness; can earn local relevance |
| `/beaches-nerja-frigiliana` | P1 | regional planning | Connects Frigiliana stays with coast access |
| `/hiking-frigiliana-nerja` | P1 | activity planning | Strong regional search fit |
| `/contact` | P1 | trust/conversion | Useful for direct booking confidence |
| `/winter-stay-frigiliana` | P2 | seasonal conversion | Supports off-season occupancy |
| `/frigiliana-faq` | P2 | location-specific questions | Only if it becomes deeper than general FAQ |

Do not build thin pages for every legacy topic. If a page cannot be meaningfully better than the current Frigiliana pillar, keep it folded into the pillar.

## Page Ownership Map

This prevents keyword cannibalization.

| Intent | Owning page | Supporting pages |
|---|---|---|
| Brand and collection overview | `/` | `/romantic-hideaways`, `/amara-about-us` |
| Apartments / stays | `/romantic-hideaways` now; future product route later | `/guest-reviews`, `/comfort-amenities` |
| About AMARA | `/amara-about-us` | `/guest-reviews`, `/direct-booking-benefits` |
| Reviews | `/guest-reviews` | `/amara-about-us`, `/direct-booking-benefits` |
| Direct booking | `/direct-booking-benefits` | `/guest-reviews`, `/faq-general` |
| Amenities and stay standards | `/comfort-amenities` | `/faq-general`, `/direct-booking-benefits` |
| General FAQ | `/faq-general` | `/comfort-amenities`, `/direct-booking-benefits` |
| Frigiliana overview | `/frigiliana-location` | `/frigiliana-parking`, `/frigiliana-weather` |
| Parking | `/frigiliana-parking` | `/directions-arrival-guide`, `/frigiliana-location` |
| Weather and best season | `/frigiliana-weather` | `/frigiliana-location`, `/romantic-hideaways` |
| Legal | `/legal-notice` | none |

## Internal Linking Strategy

Primary navigation should stay restrained:

- Home
- Stays
- Frigiliana
- Reviews
- Direct Booking

Contextual links should do most SEO work:

- Home -> collection, location, reviews.
- Collection -> reviews, amenities, direct booking, location, parking.
- Location -> parking, weather, collection, reviews.
- Parking -> arrival guide, location, collection.
- Weather -> location, collection.
- Reviews -> collection, direct booking, about.
- Amenities -> FAQ, direct booking, collection.
- FAQ -> amenities, direct booking, arrival guide.

Footer should remain calm:

- Reviews
- Direct Booking
- Amenities or FAQ
- Legal

Avoid:

- Overloaded menus.
- Repeating every location/topic link everywhere.
- Linking to future or disabled pages as if they exist.

## On-Page SEO Requirements

Every indexable page should have:

- One clear H1 that matches the page's search intent.
- A meta title with primary intent and AMARA brand.
- A description that says what the user will learn or get.
- A visible intro that answers the core query quickly.
- Section headings that match real user questions.
- Internal links to next-step pages.
- Original images with descriptive alt text where useful.
- Structured data that matches visible content.
- No generic filler sections.

Recommended content depth by page type:

| Page type | Target depth |
|---|---:|
| Commercial collection | 1,000-1,800 words equivalent |
| Location pillar | 1,800-3,000 words equivalent |
| Parking/weather support | 900-1,600 words equivalent |
| Trust page | 800-1,500 words equivalent |
| FAQ | Enough to answer, not inflated |

Word count is not the goal. Completeness is the goal.

## Metadata Direction

Avoid generic titles like `AMARA | FAQ` where possible.

Examples to refine:

| Page | Better EN title direction |
|---|---|
| `/` | Boutique Holiday Apartments in Frigiliana & Nerja \| AMARA |
| `/romantic-hideaways` | Boutique Apartments for Couples in Frigiliana & Nerja \| AMARA |
| `/frigiliana-location` | Frigiliana Location Guide: Stay, Village, Coast & Nerja \| AMARA |
| `/frigiliana-parking` | Parking in Frigiliana: What Guests Should Know \| AMARA |
| `/frigiliana-weather` | Frigiliana Weather & Best Time to Stay \| AMARA |
| `/guest-reviews` | AMARA Guest Reviews: Verified Stays in Andalusia |
| `/direct-booking-benefits` | Direct Booking Benefits for AMARA Guests |
| `/comfort-amenities` | AMARA Amenities, Comfort & Stay Standards |
| `/faq-general` | AMARA FAQ: Booking, Arrival, Policies & Stay Questions |

Localization rule:

- Titles should be market-native, not literal translations.
- Keep semantic meaning consistent across languages.
- Avoid overlong titles in German and Swedish.

## Structured Data Roadmap

Current structured data appears to support:

- WebSite
- WebPage
- Organization
- Lodging entities for apartment identities

Recommended improvements:

1. Keep Organization on brand/trust pages.
2. Use VacationRental/Hotel schema only when the page clearly represents a specific lodging entity.
3. Add BreadcrumbList when page hierarchy is stable.
4. Add FAQPage only when visible FAQ content is present and stable.
5. Add Review/AggregateRating only if ratings are eligible, visible, verifiable, and policy-compliant.

Do not add schema just because it is possible. Schema must match visible page content.

## Multilingual SEO

Current direction is good:

- `/` for Spanish.
- `/en/`, `/de/`, `/nl/`, `/sv/` for other languages.
- Standardized slugs across locales.

Required standards:

- Every localized page must be fully localized in visible content and navigation.
- No English leftovers on localized pages.
- Hreflang sets must be reciprocal.
- Spanish legacy `/es/...` routes should redirect to default Spanish canonical routes.
- Avoid automatic language redirects.

Market localization priorities:

| Market | Copy style |
|---|---|
| German | precise, trust-heavy, practical, transparent |
| English | concise, premium, experiential, clear |
| Dutch | direct, practical, calm, no overclaiming |
| Swedish | understated, nature/quiet/quality oriented |
| Spanish | natural local hospitality language, not translated English |

## Visual SEO

Design affects SEO through engagement, trust, and conversion.

Current risk:

- Too many design elements can make users feel the site is noisy.
- Search traffic needs quick orientation and calm confidence.

Design SEO direction:

- Fewer hero variants.
- One trust-page visual family.
- One location-authority visual family.
- Clear headings and readable body sections.
- Fewer decorative cards and badges.
- More useful sections with real decision value.

The design cleanup should start with the pages that carry commercial/trust value:

1. `/romantic-hideaways`
2. `/frigiliana-location`
3. `/guest-reviews`
4. `/direct-booking-benefits`
5. `/comfort-amenities`

## Measurement Plan

Set up or collect:

- Google Search Console property.
- Sitemap submission.
- Indexing status by canonical route.
- Query export by country and language.
- Top pages by impressions.
- Top pages by clicks.
- CTR by page.
- Average position by intent cluster.
- Booking/referral clicks by page.
- Contact/direct booking events when contact is live.

Monthly SEO review:

1. Which pages gain impressions but low CTR?
2. Which pages rank positions 8-20 and need content depth?
3. Which queries are mismatched to the wrong page?
4. Which language markets show traction?
5. Which legacy redirects receive traffic?

## Required Input From Owner

High-value input:

- Google Search Console export, last 16 months if possible.
- Top 10 booking sources by revenue/value.
- Current occupancy goals by season.
- Most valuable guest type.
- Target apartment priority: Farah, Lounis, Zaid, Maha, Playa, Tarifa.
- Direct booking versus platform booking preference.
- 5-10 competitors you respect or often see in search.
- Any existing review/rating data that can be displayed truthfully.
- Which future locations are truly active: Frigiliana, Nerja, Tarifa.

If this input is unavailable, proceed with assumptions and validate later.

## 30-Day Roadmap

### Week 1: SEO Control Layer

- Confirm route matrix.
- Keep sitemap at approved live routes.
- Verify redirects after deployment.
- Audit current titles/descriptions.
- Audit hreflang and canonicals in built HTML.

### Week 2: P0 Commercial Page

- Decide whether to keep `/romantic-hideaways` or plan a stronger product route.
- Rewrite page intent around "boutique apartments / holiday apartments".
- Reduce visual noise.
- Strengthen apartment cards.
- Add links to reviews, amenities, direct booking, Frigiliana.

### Week 3: Frigiliana Pillar

- Make `/frigiliana-location` the strongest location authority page.
- Fold in comparison, stairs, where-to-stay, nearby Nerja, and practical guest decisions.
- Reduce visual complexity.
- Add strong internal links to parking, weather, collection.

### Week 4: Trust Conversion Cluster

- Improve `/guest-reviews`, `/direct-booking-benefits`, `/comfort-amenities`, `/faq-general`.
- Standardize hero and CTA patterns.
- Improve titles/descriptions.
- Add FAQ schema only where stable and visible.

## 90-Day Roadmap

1. Launch a stronger commercial product route if approved.
2. Add `/where-to-stay-frigiliana`.
3. Add one useful guest-planning page: restaurants, beaches, or hiking.
4. Add `/contact`.
5. Review Search Console data and refine page ownership.
6. Expand only the pages that earn impressions or clearly support bookings.

## Immediate Next Action

Recommended next implementation:

1. Audit all current live indexable pages for title, description, H1, H2 structure, internal links, and visual noise.
2. Start with `/romantic-hideaways`, because it is the highest commercial opportunity and currently has weaker search-intent naming.
3. Then update `/frigiliana-location`, because it is the main authority page and absorbs many legacy redirects.

Do not start by adding more pages. First make the existing P0 pages excellent.
