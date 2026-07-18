# AMARA Romantic Hideaways SEO Audit

Page: `/romantic-hideaways`  
Status: audit only, no implementation yet  
Priority: P0 commercial page

Screenshots:

- Desktop: `output/playwright/romantic-hideaways-desktop.png`
- Mobile: `output/playwright/romantic-hideaways-mobile.png`

## Executive Finding

The page is visually premium and technically indexable, but it is not yet optimized as AMARA's strongest commercial accommodation page.

Main issue:

The page reads like an editorial brand landing page called "Romantic Hideaways", while the business SEO opportunity is clearer and more transactional:

- boutique apartments in Frigiliana
- holiday apartments in Frigiliana
- boutique stays in Frigiliana and Nerja
- private apartments for couples in Andalusia

Recommended direction:

Keep the page live for now, but reshape it into a calmer, higher-intent collection page. Later, decide whether a stronger canonical product route such as `/frigiliana-apartments` should replace or sit above `/romantic-hideaways`.

## Technical SEO

### What is good

- Page returns `200 OK`.
- Robots are `index, follow`.
- Canonical points to `https://amara-lodging.es/romantic-hideaways`.
- Hreflang set exists for `en`, `de`, `es`, `nl`, `sv`, and `x-default`.
- Sitemap includes the page.
- Legacy accommodation URLs redirect toward this page.

### Gaps

| Issue | Severity | Current state | Recommendation |
|---|---:|---|---|
| Search intent mismatch | P0 | Meta/H1 emphasize "Romantic Hideaways" and design-led stays | Shift metadata and visible copy toward boutique apartments / holiday apartments |
| Weak location bridge | P0 | No strong visible link to `/frigiliana-location` in the main commercial flow | Add a calm "Why Frigiliana works for AMARA stays" bridge |
| Disabled primary CTA | P0 | "Check availability" is visible but disabled because `book` is not public | Either create a real booking/contact route or replace with a useful live CTA |
| Apartment detail links are external/legacy | P1 | Cards link to old external AMARA URLs like `/es/la-amara-farah` | Decide if these are valid production destinations; otherwise create internal detail pages or route to trusted booking channel |
| No product schema on collection page | P2 | Brand schema likely only | Later add ItemList/BreadcrumbList if content is stable |

## Content And Heading Audit

Current heading structure:

- H1: "Estancias con diseno para parejas / Frigiliana y Nerja, Andalucia"
- H2: "La coleccion AMARA"
- H3: six apartment names
- H2-ish trust heading: rating/reviews section

### Strengths

- The H1 is elegant and localized.
- The apartment collection is visible.
- Review proof is present.
- The page has enough core material to become a strong commercial landing page.

### Problems

1. The H1 does not own a high-volume commercial query clearly enough.
2. The page has little practical comparison content: why stay here, which apartment fits whom, why Frigiliana/Nerja, what guests get.
3. The first fold has a lot of atmosphere but little decisive booking information.
4. "AMARA Romantic Hideaways" is a brand phrase, not a likely primary search phrase.
5. Apartment copy is too thin and partly generic.

### Recommended H1 Direction

Keep market-native wording, but make intent more explicit.

Possible English:

- "Boutique Apartments for Couples in Frigiliana & Nerja"
- "Private Boutique Stays in Frigiliana & Nerja"

Possible Spanish:

- "Apartamentos boutique para parejas en Frigiliana y Nerja"

Possible German:

- "Boutique-Ferienwohnungen fuer Paare in Frigiliana und Nerja"

## Visual And UX Audit

### Desktop

The desktop page feels premium, but too many small interface styles compete:

- very large editorial hero
- small pill buttons
- trust line with text/link mix
- card grid with rounded CTA pills
- review summary with star, large type, chips
- footer link row

This creates a quiet-but-fragmented experience: beautiful pieces, not yet one calm commercial system.

### Mobile

Mobile is readable, but the commercial path is weak:

- hero consumes a lot of attention before the user understands the product set
- disabled availability CTA appears as a primary button
- collection cards become long and repetitive
- trust chips stack as many small pills
- second-row card image areas appear blank in screenshots

### Critical Visual Issue

In both desktop and mobile screenshots, the second row of apartment cards shows large blank image areas for Maha, Playa, and Tarifa before the text appears.

Likely causes to investigate:

- external image URLs not loading consistently
- layout reserving image space but image request fails
- browser/network/hotlink behavior

Recommendation:

Move collection imagery to local optimized assets or verify every external image URL. A commercial landing page cannot have blank property imagery.

## Conversion Audit

### Current path

User sees:

1. Elegant hero.
2. Disabled "Check availability".
3. Amenities button.
4. Direct booking link.
5. Apartment cards.
6. Review proof.

### Problem

The most important action is disabled. This weakens trust and creates hesitation.

Recommended conversion path:

1. Primary CTA: "View AMARA stays" or "Explore the collection" anchors to `#booking`.
2. Secondary CTA: "Read guest reviews".
3. Contextual CTA: "Why book direct" near trust section.
4. Once booking/contact exists, replace primary CTA with live availability/contact flow.

## Internal Linking

Current visible internal links:

- About
- Guest Reviews
- Direct Booking Benefits
- Comfort Amenities
- FAQ
- Legal

Missing or underused:

- `/frigiliana-location`
- `/frigiliana-parking`
- `/frigiliana-weather`

Recommendation:

Add a compact location-confidence section after the intro or after the cards:

- Frigiliana village setting
- lower-village movement/parking reality
- Nerja/coast access
- links to location, parking, weather

This helps the page capture commercial and location intent without becoming noisy.

## Recommended New Page Flow

1. Hero
   - H1 with commercial intent.
   - Short lead.
   - CTA to collection and reviews.

2. Trust strip
   - 500+ reviews.
   - Direct host contact.
   - Boutique apartments in Frigiliana/Nerja.
   - Keep as simple text, not many decorative elements.

3. Collection
   - Six cards.
   - Reliable images.
   - Clear labels: location, guests, best for.
   - Internal or verified destination links.

4. Which Stay Fits You
   - Farah: short romantic stay.
   - Lounis: historic apartment.
   - Zaid: terrace mornings.
   - Maha: old town atmosphere.
   - Playa: beach access.
   - Tarifa: family/surf, if still active.

5. Why Frigiliana/Nerja
   - Short commercial location bridge.
   - Link to location, parking, weather.

6. Guest Trust
   - Reviews summary.
   - Direct booking benefits.
   - Amenities and FAQ.

## Metadata Recommendations

English:

- Title: `Boutique Apartments for Couples in Frigiliana & Nerja | AMARA`
- Description: `Private boutique apartments in Frigiliana and Nerja with calm locations, verified guest reviews, thoughtful hosting, and direct booking support.`

German:

- Title: `Boutique-Ferienwohnungen fuer Paare in Frigiliana & Nerja | AMARA`
- Description: `Private Boutique-Ferienwohnungen in Frigiliana und Nerja: ruhige Lagen, verifizierte Gaestebewertungen, durchdachtes Hosting und direkte Gastgeberkommunikation.`

Spanish:

- Title: `Apartamentos boutique para parejas en Frigiliana y Nerja | AMARA`
- Description: `Apartamentos boutique privados en Frigiliana y Nerja, con estancias tranquilas, resenas verificadas, atencion cuidada y contacto directo con el anfitrion.`

Dutch:

- Title: `Boutique appartementen voor koppels in Frigiliana & Nerja | AMARA`
- Description: `Private boutique-appartementen in Frigiliana en Nerja met rustige locaties, geverifieerde reviews, doordachte hosting en direct contact.`

Swedish:

- Title: `Boutiquelagenheter for par i Frigiliana & Nerja | AMARA`
- Description: `Privata boutiquelagenheter i Frigiliana och Nerja med lugna lagen, verifierade omdomen, omsorgsfullt vardskap och direkt kontakt.`

Note:

Final language should be polished natively before implementation. The above is strategic direction, not final localized copy.

## Implementation Plan

### Step 1: Fix Commercial UX

- Replace disabled availability CTA with a live anchor CTA to the collection.
- Add secondary CTA to reviews.
- Keep direct booking link visible but not overprominent.

### Step 2: Fix Images

- Replace external card images with local optimized assets where available.
- Verify all six cards render on desktop and mobile.

### Step 3: Strengthen SEO Intent

- Update meta titles/descriptions.
- Update H1 and hero lead.
- Rework intro copy to include "boutique apartments", "Frigiliana", "Nerja", "couples", and "private stays" naturally.

### Step 4: Add Location Bridge

- Add a short section linking to Frigiliana location, parking, and weather.
- Keep it calm and editorial, not a card-heavy block.

### Step 5: Reduce Design Noise

- Reduce pill/chip proliferation.
- Standardize CTA styles.
- Avoid nesting many small trust signals.
- Make the page feel like one product surface.

## Open Questions

1. Are all six properties currently active and bookable?
2. Should Tarifa remain on this commercial collection page?
3. Are old external apartment URLs production-valid?
4. Should the primary conversion go to a contact page, booking engine, Airbnb, Booking.com, or an internal apartment detail page?
5. Are the displayed review count and rating verifiable and safe to show?

## Recommendation

Implement this page before creating new SEO pages.

Reason:

This is the main commercial landing page. Improving it will make every future SEO cluster more valuable because all discovery pages need a strong destination to send users to.
