import React from 'react';

/**
 * AMARA homepage — content area only (no nav, no footer).
 * Preview: React/TSX using Tailwind semantic tokens (bg-surface, text-on-surface, font-headline, …).
 * Design system reference: AMARA-SYSTEM.md (project root).
 */

// --- TrustHero pattern (see src/components/hero/TrustHero.astro) ---
interface TrustHeroLink {
  href: string;
  label: string;
}

interface TrustHeroProps {
  title: string;
  subtitle?: string;
  lead: string;
  ctaLinks?: TrustHeroLink[];
  supportText?: string;
}

const TrustHeroPreview = ({ title, subtitle, lead, ctaLinks = [], supportText }: TrustHeroProps) => (
  <header className="am-exp-hero px-0">
    {subtitle && (
      <div className="am-exp-hero__meta flex gap-6 mb-12">
        <span className="am-kicker am-gold font-body text-base">{subtitle}</span>
      </div>
    )}
    <h1
      className="font-headline font-light text-on-surface leading-[1.05] tracking-tight text-[clamp(3.5rem,7vw,6rem)] max-w-[18ch] mb-10"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <p className="font-body text-subtle text-[clamp(1.25rem,2vw,1.5rem)] leading-relaxed max-w-[35ch]">{lead}</p>
    {supportText && <p className="mt-6 font-body text-muted text-[0.95rem] leading-relaxed italic max-w-[35ch]">{supportText}</p>}
    {ctaLinks.length > 0 && (
      <div className="am-cta-group am-cta-group--left mt-8 flex flex-wrap items-center gap-6 justify-start">
        {ctaLinks.map((link, index) => (
          <React.Fragment key={link.href + link.label}>
            {index > 0 && <span className="text-dot-indicator">&middot;</span>}
            <a href={link.href} className="am-cta-link">
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </div>
    )}
  </header>
);

// --- NEW COMPONENT FLAG ---
// HomeLocationTriptych: three-up location cards (live vs coming soon) — no direct Astro equivalent in AMARA-SYSTEM.md.
type LocationStatus = 'live' | 'coming_soon';

interface LocationCardModel {
  name: string;
  description: string;
  status: LocationStatus;
  ctaLabel?: string;
  ctaHref?: string;
}

interface HomeLocationTriptychProps {
  sectionTitle: string;
  sectionIntro?: string;
  locations: LocationCardModel[];
}

const HomeLocationTriptych = ({ sectionTitle, sectionIntro, locations }: HomeLocationTriptychProps) => (
  <section className="border-t border-outline-variant/10 py-24 md:py-32" aria-labelledby="home-locations-heading">
    <div className="max-w-3xl mb-16">
      <h2 id="home-locations-heading" className="am-section-title mb-6">
        {sectionTitle}
      </h2>
      {sectionIntro && <p className="font-body text-on-surface-variant text-lg leading-relaxed italic opacity-90">{sectionIntro}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
      {locations.map((loc) => (
        <article
          key={loc.name}
          className={`flex flex-col rounded-sm border overflow-hidden ${
            loc.status === 'live' ? 'border-outline-variant/30 bg-surface-white shadow-[var(--shadow-editorial-card)]' : 'border-outline-variant/15 bg-surface-container-low opacity-90'
          }`}
        >
          <div
            className="bg-surface-container-high aspect-[4/3] w-full shrink-0"
            role={loc.status === 'coming_soon' ? 'presentation' : undefined}
            aria-hidden={loc.status === 'coming_soon'}
          />
          <div className="flex flex-col flex-1 p-8">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="font-headline text-2xl font-light text-on-surface m-0">{loc.name}</h3>
              <span
                className={`font-label text-[10px] uppercase tracking-[0.2em] shrink-0 ${
                  loc.status === 'live' ? 'text-primary' : 'text-muted'
                }`}
              >
                {loc.status === 'live' ? 'Live' : 'Coming soon'}
              </span>
            </div>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed flex-1 mb-6">{loc.description}</p>
            {loc.status === 'live' && loc.ctaHref && loc.ctaLabel ? (
              <a href={loc.ctaHref} className="am-btn am-btn--primary self-start">
                {loc.ctaLabel}
              </a>
            ) : (
              <span className="font-body text-sm text-muted italic">Availability announced here first.</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

// --- EditorialFeatureGrid pattern (see src/components/editorial/EditorialFeatureGrid.astro) ---
interface EditorialFeatureCard {
  title: string;
  subline?: string;
  copy: string;
}

interface EditorialFeatureGridProps {
  cards: EditorialFeatureCard[];
}

const EditorialFeatureGridPreview = ({ cards }: EditorialFeatureGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
    {cards.map((card) => (
      <div key={card.title}>
        <div className="min-h-[4rem] mb-4 pb-2 border-b border-on-surface/10 flex items-start">
          <h3 className="font-body font-semibold text-base uppercase tracking-wider leading-tight text-on-surface m-0">
            {card.title}
            {card.subline ? <span className="block text-hint font-normal normal-case tracking-normal mt-1">{card.subline}</span> : null}
          </h3>
        </div>
        <p className="font-body text-on-surface-variant m-0">{card.copy}</p>
      </div>
    ))}
  </div>
);

// --- GuestReviewsSummary pattern (see src/components/location/GuestReviewsSummary.astro) ---
interface GuestTrustFeature {
  label: string;
  note?: string;
}

interface GuestReviewsSummaryPreviewProps {
  eyebrow: string;
  headline: string;
  body: string;
  reviewsHref: string;
  reviewsCtaLabel: string;
  features: GuestTrustFeature[];
}

const GuestReviewsSummaryPreview = ({
  eyebrow,
  headline,
  body,
  reviewsHref,
  reviewsCtaLabel,
  features
}: GuestReviewsSummaryPreviewProps) => (
  <section id="am-trust-badge" className="border-t border-border-subtle py-24 relative z-10" aria-label="Guest reviews summary">
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      <div className="flex-1 max-w-2xl">
        <p className="font-label text-sm uppercase tracking-wide text-on-surface-variant mb-6">{eyebrow}</p>
        <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface leading-tight mb-6">
          <span className="am-gold mr-3" aria-hidden="true">
            ★
          </span>
          {headline}
        </h2>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-4">{body}</p>
        <a
          href={reviewsHref}
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-full border-outline text-on-surface hover:border-border-hover hover:bg-surface-container-low transition-colors font-body"
        >
          {reviewsCtaLabel}
        </a>
      </div>
      <div className="flex-1 w-full flex flex-wrap gap-3 lg:pt-12" aria-label="Review highlights">
        {features.map((f, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-outline-variant rounded-full text-sm font-body text-on-surface-variant bg-surface-container-lowest"
          >
            {f.label}
            {f.note && <span className="text-xs text-muted ml-1">{f.note}</span>}
          </span>
        ))}
      </div>
    </div>
  </section>
);

// --- EditorialClosingCta pattern (see src/components/editorial/EditorialClosingCta.astro) ---
interface EditorialClosingLink {
  label: string;
  href: string;
}

interface EditorialClosingCtaPreviewProps {
  title: string;
  lead: string;
  note?: string;
  links: EditorialClosingLink[];
}

const EditorialClosingCtaPreview = ({ title, lead, note, links }: EditorialClosingCtaPreviewProps) => (
  <section className="border-t border-outline-variant/10 pt-24 pb-20">
    <div className="text-center max-w-[800px] mx-auto">
      <h2 className="font-headline text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] font-light text-on-surface mb-8">{title}</h2>
      <p className={`text-[clamp(1.125rem,2vw,1.25rem)] text-subtle ${note ? 'mb-4' : 'mb-16'}`}>{lead}</p>
      {note ? <p className="italic text-muted mb-16">{note}</p> : null}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            {index > 0 && <span className="hidden sm:inline text-on-surface/60">&middot;</span>}
            <a href={link.href} className="am-btn am-btn--primary">
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

// --- Page assembly ---

export default function HomePageContentPreview() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* 1. HERO — TrustHero pattern */}
        <TrustHeroPreview
          subtitle="Frigiliana is our home base — Nerja and Tarifa join the collection soon."
          title="Andalusia, differently"
          lead="Quiet hillsides, unhurried mornings, and stays that feel personal — not packaged."
          ctaLinks={[
            { href: '/book/', label: 'Check availability' },
            { href: '/frigiliana-location/', label: 'Explore Frigiliana' }
          ]}
        />

        {/* 2. THREE LOCATIONS — centrepiece (NEW) */}
        <HomeLocationTriptych
          sectionTitle="Three landscapes, one philosophy"
          sectionIntro="Same calm hosting standard — whether you are in the white village today or waiting for the coast to open."
          locations={[
            {
              name: 'Frigiliana',
              description: 'Hillside lanes, Moorish lines, terraces above the sea — our flagship Andalusian base.',
              status: 'live',
              ctaLabel: 'Explore Frigiliana',
              ctaHref: '/frigiliana-location/'
            },
            {
              name: 'Nerja',
              description: 'Mediterranean light and coastal ease — curated Nerja stays are on the way.',
              status: 'coming_soon'
            },
            {
              name: 'Tarifa',
              description: 'Atlantic wind, surf rhythm, wide horizons — Tarifa arrives when the chapter is ready.',
              status: 'coming_soon'
            }
          ]}
        />

        {/* 3. WHAT MAKES AMARA DIFFERENT — EditorialFeatureGrid pattern */}
        <section className="border-t border-outline-variant/10 py-24 md:py-32" aria-labelledby="different-heading">
          <div className="max-w-3xl mb-16">
            <h2 id="different-heading" className="am-section-title mb-6">
              What makes AMARA different
            </h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Hillside calm, handpicked homes, a host you can reach, and the clarity of booking direct.
            </p>
          </div>
          <EditorialFeatureGridPreview
            cards={[
              {
                title: 'Hillside position',
                copy: 'Elevated Frigiliana settings with sea air and village texture — less pass-through, more stay.'
              },
              {
                title: 'Handpicked quality',
                copy: 'Every home is chosen for atmosphere, sleep, and detail — boutique, not bulk inventory.'
              },
              {
                title: 'Personal host',
                copy: 'Direct contact with the people who prepare your stay — clear, human, responsive.'
              },
              {
                title: 'Direct booking advantage',
                subline: 'Best terms, direct relationship',
                copy: 'Book with AMARA first: transparent policies, no middle-layer noise, full host alignment.'
              }
            ]}
          />
        </section>

        {/* 4. GUEST TRUST — GuestReviewsSummary pattern */}
        <GuestReviewsSummaryPreview
          eyebrow="Guest-verified"
          headline="Rated 4.95 out of 5 · 500+ verified guest reviews"
          body="Couples, remote weeks, and slow travellers — consistently noting calm, cleanliness, and communication."
          reviewsHref="/guest-reviews/"
          reviewsCtaLabel="Read all reviews"
          features={[{ label: 'Hillside calm' }, { label: 'Spotless arrival' }, { label: 'Host responsiveness' }]}
        />

        {/* 5. CLOSING CTA — EditorialClosingCta pattern (single primary link) */}
        <EditorialClosingCtaPreview
          title="Ready for a different kind of stay?"
          lead="Check live availability across Frigiliana — Nerja and Tarifa will appear here as they open."
          links={[{ label: 'Check availability', href: '/book/' }]}
        />
      </div>
    </div>
  );
}
