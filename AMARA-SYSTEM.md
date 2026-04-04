# AMARA Design System Reference

## Design Tokens (from `src/styles/global.css`)

### Color Tokens
- `--color-primary`: `#785611`
- `--color-primary-container`: `#936e29`
- `--color-on-primary`: `#ffffff`
- `--color-on-primary-fixed`: `#271900`
- `--color-surface`: `#F5F2ED`
- `--color-surface-white`: `#ffffff`
- `--color-on-surface`: `#1b1c1a`
- `--color-on-surface-variant`: `#4e4538`
- `--color-outline`: `#807667`
- `--color-outline-variant`: `#d2c5b3`
- `--color-inverse-surface`: `#30312e`
- `--color-inverse-on-surface`: `#f2f0ed`
- `--color-inverse-on-surface-muted`: `color-mix(in srgb, var(--color-inverse-on-surface) 68%, var(--color-inverse-surface))`
- `--color-primary-fixed-dim`: `#edbf71`
- `--color-surface-container-low`: `#f5f3ef`
- `--color-surface-container-high`: `#eae8e4`
- `--color-surface-container-lowest`: `#faf8f4`
- `--color-surface-container`: `#f2ede6`
- `--color-muted`: `#666666`
- `--color-hint`: `#888888`
- `--color-subtle`: `#444444`
- `--color-strong`: `#222222`
- `--color-faint`: `#A0A0A0`
- `--color-gold`: `#b08d55`
- `--color-border-subtle`: `rgba(0, 0, 0, 0.2)`
- `--color-border-hover`: `#111111`
- `--color-dot-indicator`: `#cccccc`
- `--color-sustainability-surface`: `#dcefe6`
- `--color-sustainability-on-surface`: `#1d3128`
- `--color-btn-primary-text`: `#fbf9f5`
- `--color-primary-alpha-80`: `rgb(120 86 17 / 0.8)`
- `--color-nav-scrim`: `rgb(17 17 17 / 0.9)`
- `--color-nav-panel`: `rgb(23 23 23 / 1)`
- `--color-nav-border`: `rgb(210 197 179 / 0.2)`
- `--color-inverted-surface`: `var(--color-inverse-surface)`
- `--color-inverted-on-surface`: `var(--color-inverse-on-surface)`

### Shadow Tokens
- `--shadow-editorial-card`: `0 20px 40px rgba(0, 0, 0, 0.02)`

### Spacing Tokens
- `--spacing-section-y`: `clamp(8rem, 15vw, 14rem)`
- `--spacing-macro-120`: `clamp(5rem, 12vw, 7.5rem)`
- `--spacing-macro-160`: `clamp(6.5rem, 16vw, 10rem)`

### Typography Tokens
- `--font-headline`: `"Newsreader", serif`
- `--font-body`: `"Plus Jakarta Sans", sans-serif`
- `--font-label`: `"Plus Jakarta Sans", sans-serif`
- `--font-size-display-xl`: `clamp(3.5rem, 6.5vw, 5.75rem)`
- `--line-height-display-xl`: `1.02`
- `--letter-spacing-display-xl`: `-0.025em`

### Button Token
- `--color-btn-primary-hover-bg`: `color-mix(in srgb, var(--color-on-surface) 90%, white)`

## Global Typography / Pattern Classes (from `src/styles/global.css`)
- `.am-kicker`: `font-body`, 1rem, normal letter spacing, no uppercase transform.
- `.am-gold`: `color: var(--color-gold)`
- `.am-section-title`: headline scale for section headings (clamp(2.5rem, 4.5vw, 4rem), weight 300, tight line-height).
- `.am-cta-link`: shared inline CTA link style (uppercase, letter spacing, token underline, hover border-color shift).
- `.am-cta-group` + `.am-cta-group--left`: centered vs left-aligned CTA row.
- `.am-btn`, `.am-btn--primary`, `.am-btn--outline`, `.am-btn--ghost`: shared button system.
- `.am-inline-link`: inline editorial links with underline offset.
- `.am-display-xl`: display XL (rare hero/editorial one-liners).
- `.am-accordion__trigger`, `.am-accordion__indicator`: shared FAQ typography.
- `.grain-overlay`: global grain texture layer.
- `.am-section`: Type A insight section shell: `max-w-screen-2xl mx-auto px-12 py-40 border-t ...`
- `.am-section--plain`, `.am-section--insight`, `.am-section--tint`: background variants for `am-section`.

## Typography Classes (Single Source of Truth)

Never use raw Tailwind `text-*` scale or arbitrary `text-[px]` for these roles.
Italic is applied in markup (`<h2 class="am-text-title italic">`), not in the class.

| Class | Font | Size | Weight | Usage |
|---|---|---|---|---|
| `.am-text-display` | Newsreader | clamp(3.5rem, 10vw, 7.5rem) | 300 | Homepage hero H1 only |
| `.am-text-title` | Newsreader | clamp(2.5rem, 5vw, 4.25rem) | 300 | All section H2 |
| `.am-text-subtitle` | Newsreader | clamp(1.5rem, 2.75vw, 2.75rem) | 300 | H3, card titles |
| `.am-text-body` | Plus Jakarta | clamp(1rem, 0.95rem + 0.35vw, 1.125rem) | 400 | All body/prose |
| `.am-text-caption` | Plus Jakarta | clamp(0.6875rem, 0.62rem + 0.35vw, 0.8125rem) | 700 | Labels, kickers, eyebrows |
| `.am-text-micro` | Plus Jakarta | clamp(0.5rem, 0.45rem + 0.25vw, 0.6875rem) | 700 | Tiny UI: nav pills, badges |

### Migration status
- [x] LegalNoticePage
- [x] InstagramPage  
- [x] FaqGeneralPage / FaqAccordion
- [x] DirectBookingBenefitsPage
- [x] AboutUsPage
- [x] GuestReviewsPage
- [x] ComfortAmenitiesPage
- [x] FrigilianaWeatherPage
- [x] FrigilianaLocationPage
- [x] HomeCinematicMain

## Available Layouts (from `src/layouts/`)

### `BaseLayout.astro`
Props:
- `seo: AmaraAuthoringSeo` (required)
- `pageLang?: AmaraLanguage` (optional)
- `footerHighlights?: { token: string; label: string }[]` (optional)
- `footerVariant?: 'default' | 'trust'` (optional, default: `default`)
- `bodyBackgroundClass?: string` (optional, default: `bg-surface`)
Purpose:
- Owns the document shell, central SEO resolution, global grain overlay, and shared fixed-header content offset (`pt-[136px]`). Renders `BackToTop` and `Footer`.

### `LocationAuthorityLayout.astro`
Props:
- `seo: AmaraAuthoringSeo` (required)
- `pageLang?: AmaraLanguage` (optional)
- `bodyBackgroundClass?: string` (optional)
Purpose:
- Wraps Type A "Location Authority" pages with `BaseLayout` and a semantic `<main>` slot.

### `UtilityLayout.astro`
Props:
- `seo: AmaraAuthoringSeo` (required)
- `pageLang?: AmaraLanguage` (optional)
- `title: string` (required)
- `subtitle?: string` (optional)
Purpose:
- Utility / guide pages with a max-width canvas, header label "Utility / Guide", and a left content + right sidebar grid. Renders `BaseLayout` with white background.

## Page Family Types (from `src/types/seo.ts`)
- `A | Location Authority & flagship editorial shells`
  - Currently used in `page-families/*` for Home and Location Authority cluster subpages (e.g. Frigiliana Location/Arrival/Parking/Weather).
- `B | Reserved/defined type, not currently detected in this repo's `page-families` matches`
- `C | Editorial / trust / informational pages`
  - Currently used for Guest Reviews, Direct Booking Benefits, Comfort Amenities, Stay FAQ, Instagram, Legal Notice.
- `D | Utility / guide pattern (legacy/expected)`
  - `UtilityLayout` exists; this type appears reserved/legacy in the current codebase (no `pageType: 'D'` found in `src/page-families` at time of document generation).

## Components: `src/components/location/`

### `HairlineStatCard.astro`
Purpose:
- Minimal hairline-separated stat stack (label + value + optional description).
Props:
- `label: string`
- `value: string`
- `description?: string`
- `align?: 'left' | 'center'` (default: `left`)
- `emphasize?: boolean` (default: `false`)
- `note?: string` (back-compat alias for `description`)

### `SeasonalPillar.astro`
Purpose:
- Seasonal "pillar" card for Best Time to Stay (temperature guidance + vibe + hint), optionally highlighted.
Props:
- `eyebrow?: string`
- `title: string`
- `subtitle?: string`
- `highTemp?: string`
- `lowTemp?: string`
- `vibe?: string`
- `hint?: string`
- `isHighlighted?: boolean` (default: `false`)
- Back-compat aliases:
  - `season?: string`
  - `feel?: string` (alias for `vibe`)
  - `practicalHint?: string` (alias for `hint`)

### `ParkingRealityPillars.astro`
Purpose:
- Three practical pillars for parking/movement reality with icon-per-pillar presentation.
Props:
- `title?: string` (default: `What Matters Most`)
- `intro?: string` (default: "Forget the mythology of \"impossible parking.\" ...")
- `items?: { title: string; text: string; icon: 'map-pin' | 'clock' | 'footprints' }[]`

### `StayModels.astro`
Purpose:
- Comparison grid of three stay models with icon cards and two shared metric rows.
Props:
- `title: string`
- `intro: string`
- `frictionLabel: string`
- `carAccessLabel: string`
- `left: { title: string; description: string; frictionValue: string; carAccessValue: string }`
- `center: { title: string; description: string; frictionValue: string; carAccessValue: string; balanceBadge: string }`
- `right: { title: string; description: string; frictionValue: string; carAccessValue: string }`

### `ClimateExperienceSection.astro`
Purpose:
- Type A editorial band combining a "current feel" hero with climate meaning, subtle metrics, facts, and one CTA.
Props:
- `eyebrowCurrent: string`
- `heroTemperature: string`
- `heroTagline: string`
- `headline: string`
- `body: string`
- `metricHumidity: string`
- `metricWind: string`
- `metricUv: string`
- `metricSunset: string`
- `factSunDays: string`
- `factCoolerVsCoast: string`
- `ctaLabel: string`
- `ctaHref: string`

### `VillageStructureInsight.astro`
Purpose:
- Image-led insight module communicating spatial reality (vertical movement) with calm editorial hierarchy.
Props:
- `eyebrow: string`
- `headline: string`
- `supporting: string`
- `signal: string`
- `ctaLabel: string`
- `ctaHref: string`
- `imageSrc: string`
- `imageAlt: string`

### `LocationEditorialComparison.astro`
Purpose:
- Editorial comparison block with overlapping imagery and stacked copy (not a table layout).
Props:
- `eyebrow: string`
- `title: string`
- `intro?: string`
- `items: { kicker?: string; title: string; text: string }[]`
- `imagePrimary: { src: string; alt: string }`
- `imageSecondary: { src: string; alt: string }`

## Components: `src/components/` (shared system)

### `Navigation.astro`
Purpose:
- AMARA canonical fixed two/three-rail header navigation with language switch, CTA slot, and optional Location Authority token override rules.
Props:
- `currentLang: AmaraLanguage`
- `brandName: string`
- `brandLabel?: string`
- `links: { token: string; label?: string }[]`
- `variant?: 'default' | 'trust'` (default: `default`)
- `currentToken?: string`
- `languageToken?: string`
- `brandVariant?: 'default' | 'lodging'`
- `ctaLabel?: string`
- `locationAuthorityNav?: boolean` (default: `false`)

### `navigation/SectionAnchorNav.astro`
Purpose:
- On-page section anchor navigation (Type A long pages); local-only, supports active chip styling.
Props:
- `items: { label: string; href: string; id?: string }[]`
- `activeId?: string`

### `navigation/SmartBackButton.astro`
Purpose:
- Smart back control: `history.back()` when possible, else navigates to `fallbackHref`.
Props:
- `fallbackHref: string`
- `label?: string` (default: `Back`)
- `variant?: 'icon' | 'link'` (default: `icon`)

### `BackToTop.astro`
Purpose:
- Global back-to-top interaction with shared scroll visibility behavior.
Props:
- None

### `FaqAccordion.astro`
Purpose:
- Two-column "Arrival steps + FAQ accordion" layout with optional anchor IDs and onward CTAs.
Props:
- `arrivalTitle?: string`
- `steps?: { num: string; headline: string; text: string }[]`
- `faqTitle?: string`
- `items?: { question: string; answer: string }[]`
- `anchorArrivalId?: string`
- `anchorFaqId?: string`
- `arrivalDetailCta?: { href: string; label: string }`
- `allFaqsCta?: { href: string; label: string }`

### `EssenceGrid.astro`
Purpose:
- AMARA v3 EssenceGrid "Bento-System" with labeled eyebrow/title/intro and up to 4 bento items.
Props:
- `eyebrow: string`
- `title: string`
- `intro: string`
- `items: { kicker: string; headline: string; text: string; imageSrc?: string; imageAlt?: string; href?: string; linkLabel?: string }[]`

### `Hero.astro`
Purpose:
- Hero Authority layout: editorial slot on the left, responsive image on the right (with optional multi-source `<picture>`).
Props:
- `imageSrc: string`
- `imageAlt: string`
- `imageSources?: { webp: { src: string; width: number }[]; fallback?: { src: string; width: number }[] }`
- `imageWidth?: number` (default: `1080`)
- `imageHeight?: number` (default: `721`)
- `imageSizes?: string` (default: `(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 60vw, 40vw`)

### `hero/TrustHero.astro`
Purpose:
- Trust/editorial hero with optional subtitle metadata, bold headline slot, lead copy, optional support text, and CTA link row.
Props:
- `title: string`
- `subtitle?: string`
- `lead: string`
- `ctaLinks?: { href: string; label: string }[]`
- `supportText?: string`

### `PhotoShow.astro`
Purpose:
- Horizontal photoshow web component wrapper with prev/next controls and optional eyebrow/title, captions per image.
Props:
- `eyebrow?: string`
- `title: string`
- `images: { src: string; alt: string; caption?: string }[]`

### `Weather.astro`
Purpose:
- Weather/Climate widget shell (<amara-weather>) driven by latitude/longitude and location name.
Props:
- `lat: number`
- `lon: number`
- `locationName: string`

### `icons/SymbolIcon.astro`
Purpose:
- Small inline SVG glyph set by name (chevrons + plus/minus).
Props:
- `name: 'plus' | 'minus' | 'chevron-left' | 'chevron-right'`
- `class?: string`
- `title?: string` (optional; controls accessibility)

### `StayDecision.astro`
Purpose:
- Type A suitability grid that clarifies fit (profiles with "High/Moderate/Challenging" style chips).
Props:
- `eyebrow: string`
- `title: string`
- `profiles: { title: string; description: string; suitability: string }[]`

### `Footer.astro`
Purpose:
- Footer shell combining `FooterMinimal` and (optionally) `FooterCore`.
Props:
- `highlights?: { token: string; label: string }[]`
- `variant?: 'default' | 'trust'` (default: `default`)

### `FooterMinimal.astro`
Purpose:
- Minimal footer highlights link row (token-resolved, disabled tokens rendered as non-links).
Props:
- `links?: { token: string; label: string }[]` (optional; defaults exist in component)

### `FooterCore.astro`
Purpose:
- Standard site footer with contact/social utility and legal links.
Props:
- None

## Components: `src/components/editorial/`

### `EditorialStatement.astro`
Purpose:
- Centered editorial "statement" card that hosts slot content.
Props:
- `title: string`

### `SustainabilityBand.astro`
Purpose:
- Full-bleed sustainability editorial band with two-column checklist lists.
Props:
- `title: string`
- `subtitle: string`
- `lead: string`
- `listColumns: { label: string; items: string[] }[]`

### `EditorialClosingCta.astro`
Purpose:
- Centered closing headline/lead/note with token-resolved CTA links and disabled rendering support.
Props:
- `title: string`
- `lead: string`
- `note?: string`
- `links: { label: string; token?: string; disabled?: boolean }[]`
- `lang: AmaraLanguage`

### `EditorialHostProfile.astro`
Purpose:
- Split portrait + bio profile with a two-column stats list and optional slot.
Props:
- `imageSrc: string`
- `imageAlt: string`
- `title: string`
- `role: string`
- `stats: { label: string; value: string }[]`

### `EditorialFeatureGrid.astro`
Purpose:
- Responsive feature card grid (title with optional subline + body copy).
Props:
- `cards: { title: string; subline?: string; copy: string }[]`

### `EditorialDefinitionList.astro`
Purpose:
- Two-column definition list rows with a strong top rule.
Props:
- `items: { title: string; description: string }[]`

### `EditorialSplit.astro`
Purpose:
- Two-column editorial layout: sticky headline left, prose slot right.
Props:
- `title: string`

### `EditorialQuote.astro`
Purpose:
- Centered pull quote block with optional attribution line.
Props:
- `quote: string`
- `author?: string`
- `source?: string`

