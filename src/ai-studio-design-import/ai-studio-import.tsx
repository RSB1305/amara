import React from 'react';

// --- NEW COMPONENT FLAG ---
// ApartmentCard: Needed to display individual properties in the collection grid.
// The design system does not specify a dedicated component for the property listing cards.
const ApartmentCard = ({ href, imageSrc, imageAlt, meta, title, description, ctaLabel }: any) => (
  <div className="flex flex-col gap-5 group">
    <figure className="overflow-hidden aspect-[4/3] bg-surface-container-low">
      <a href={href} aria-label={`View ${title}`} className="block w-full h-full">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
      </a>
    </figure>
    <div className="flex flex-col gap-2">
      <small className="text-sm text-on-surface-variant font-label tracking-wide uppercase">{meta}</small>
      <h3 className="text-2xl font-headline text-on-surface font-light">{title}</h3>
      <p className="text-base text-on-surface-variant font-body leading-relaxed">{description}</p>
      <div className="mt-3">
        <a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border rounded-full text-on-surface border-outline hover:border-border-hover hover:bg-surface-container-low" href={href}>
          {ctaLabel}
        </a>
      </div>
    </div>
  </div>
);

// --- NEW COMPONENT FLAG ---
// ApartmentGrid: Needed to display the collection of properties in a responsive grid.
const ApartmentGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
    {children}
  </div>
);

// --- EXISTING COMPONENT MOCK ---
// TrustHero (simulating src/components/hero/TrustHero.astro)
const TrustHero = ({ kicker, title, lead, prose, ctaPrimary, ctaSecondary, trustSignals }: any) => (
  <div className="flex flex-col max-w-4xl gap-8">
    {kicker && <span className="text-base font-body text-on-surface-variant tracking-wide">{kicker}</span>}
    <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-[1.05] tracking-tight font-light">
      {title}
    </h1>
    <p className="text-xl md:text-2xl font-body text-on-surface-variant leading-relaxed max-w-3xl">
      {lead}
    </p>
    {prose && (
      <div className="flex flex-col gap-5 text-lg font-body text-on-surface-variant max-w-2xl leading-relaxed">
        {prose}
      </div>
    )}
    <div className="flex flex-wrap items-center gap-4 mt-6">
      {ctaPrimary && (
        <a href={ctaPrimary.href} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-colors rounded-full bg-primary text-on-primary hover:bg-primary-container">
          {ctaPrimary.label}
        </a>
      )}
      {ctaSecondary && (
        <a href={ctaSecondary.href} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-colors border rounded-full text-on-surface border-outline hover:border-border-hover hover:bg-surface-container-low">
          {ctaSecondary.label}
        </a>
      )}
    </div>
    {trustSignals && (
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 pt-8 border-t border-border-subtle text-sm font-body text-on-surface-variant">
        {trustSignals.map((signal: any, idx: number) => (
          signal.href ? (
            <a key={idx} href={signal.href} className="underline underline-offset-4 hover:text-on-surface transition-colors">
              {signal.label}
            </a>
          ) : (
            <span key={idx}>{signal.label}</span>
          )
        ))}
      </div>
    )}
  </div>
);

// --- NEW COMPONENT FLAG ---
// GuestReviewsSummary: Displays the trust badge and highlighted features.
const GuestReviewsSummary = () => (
  <section id="am-trust-badge" aria-label="Guest reviews summary" className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 border-t border-border-subtle relative z-10">
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      
      <div className="flex-1 max-w-2xl">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-label tracking-wide uppercase text-on-surface-variant">Guest-verified</p>
          <h2 className="text-3xl md:text-4xl font-headline text-on-surface font-light leading-tight">
            <span className="text-gold mr-3" aria-hidden="true">★</span>
            Rated 4.95 out of 5 · 500+ verified guest reviews
          </h2>
          <p className="text-lg font-body text-on-surface-variant leading-relaxed">
            Calm stays, terrace mornings, quiet nights, deep sleep — thoughtfully hosted.
          </p>
          <div className="mt-2">
            <a href="#reviews" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border rounded-full text-on-surface border-outline hover:border-border-hover hover:bg-surface-container-low">
              Read all guest reviews
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full lg:pt-12">
        <div className="flex flex-wrap gap-3" aria-label="Highlighted guest features">
          {[
            { label: "Sea views", note: "(selected)" },
            { label: "Large private terraces" },
            { label: "Quiet locations" },
            { label: "Premium bedding" },
            { label: "Fast fibre WiFi" },
            { label: "Climate control" }
          ].map((feature, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-outline-variant rounded-full text-sm font-body text-on-surface-variant bg-surface-container-lowest">
              {feature.label}
              {feature.note && <span className="text-xs text-muted ml-1">{feature.note}</span>}
            </span>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default function App() {
  return (
    <main className="bg-surface min-h-screen relative overflow-hidden selection:bg-primary selection:text-on-primary">
      <div className="grain-overlay"></div>
      
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
        <TrustHero 
          kicker="AMARA Romantic Hideaways"
          title={
            <>
              Design-led stays for couples<br />
              Frigiliana &amp; Nerja, Andalusia
            </>
          }
          lead="A place to arrive, exhale, and truly stay — not just pass through."
          prose={
            <>
              <p>
                AMARA is a curated collection of private boutique apartments in the white village of Frigiliana,
                plus one calm seaside escape in Nerja.
                Created for guests who value privacy, atmosphere, and a slower rhythm of travel.
              </p>
              <p>
                Casa AMARA in Frigiliana dates back more than 800 years and was carefully restored in 2022.
                Today, it stands as one of the village icons — quietly woven into the fabric of Frigiliana itself.
              </p>
              <p>
                Award-winning. Consistently top-rated.<br />
                Direct booking available.
              </p>
            </>
          }
          ctaPrimary={{ label: "Check availability", href: "#booking" }}
          ctaSecondary={{ label: "Amenities & policies", href: "#amenities" }}
          trustSignals={[
            { label: "Booking.com Traveller Award" },
            { label: "500+ verified Airbnb reviews" },
            { label: "Direct booking benefits", href: "#direct-booking" }
          ]}
        />
      </section>

      {/* Collection Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-32 border-t border-border-subtle relative z-10">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-headline text-on-surface font-light tracking-tight">
            The AMARA collection
          </h2>
          <p className="text-lg font-body text-on-surface-variant">
            Each home follows the same hosting philosophy — they simply offer different ways to experience it.
          </p>
        </div>

        <ApartmentGrid>
          <ApartmentCard 
            href="#farah"
            imageSrc="https://l.icdbcdn.com/oh/3c79ee18-d231-4066-bbce-1b20c4732057.jpg"
            imageAlt="AMARA Farah – Romantic Boutique Stay in Frigiliana for couples"
            meta="Frigiliana • 2 guests"
            title="AMARA Farah – Boutique Retreat"
            description="A romantic boutique room with character — ideal for shorter trips."
            ctaLabel="Explore Farah"
          />
          <ApartmentCard 
            href="#lounis"
            imageSrc="https://l.icdbcdn.com/oh/882b7732-0b8a-4d00-b9af-16271f78d09e.jpg"
            imageAlt="AMARA Lounis – Historic Frigiliana Apartment with terrace"
            meta="Frigiliana • 2 guests"
            title="AMARA Lounis – Historic Apartment"
            description="Historic charm with terrace time and a sense of space."
            ctaLabel="Explore Apartment"
          />
          <ApartmentCard 
            href="#zaid"
            imageSrc="https://l.icdbcdn.com/oh/392c7773-50bf-4814-955d-da26457f6440.jpg"
            imageAlt="AMARA Zaid – Frigiliana Apartment with private terrace"
            meta="Frigiliana • 2 guests"
            title="AMARA Zaid – Terrace Apartment"
            description="A calm retreat with terrace — made for slow mornings."
            ctaLabel="Explore Apartment"
          />
          <ApartmentCard 
            href="#maha"
            imageSrc="https://l.icdbcdn.com/oh/3e9884fa-4453-4aa8-8dae-fb54d6a87456.jpg"
            imageAlt="AMARA Maha – Romantic Penthouse Apartment in Frigiliana Old Town"
            meta="Frigiliana • 2 guests"
            title="AMARA Maha – Old Town Apartment"
            description="A terrace apartment designed for lingering in the white village."
            ctaLabel="Explore Apartment"
          />
          <ApartmentCard 
            href="#playa"
            imageSrc="https://l.icdbcdn.com/oh/46e112f1-729d-4a76-9c7a-df53cb2e2626.jpg"
            imageAlt="AMARA Playa – Coastal Nerja Apartment near the beach with sea view"
            meta="Nerja • 2 guests"
            title="AMARA Playa – Nerja Beach Apartment"
            description="A relaxed seaside base for couples who want the sea close by."
            ctaLabel="Explore Apartment"
          />
          <ApartmentCard 
            href="#casa"
            imageSrc="https://l.icdbcdn.com/oh/aa11c018-1653-4e74-9bcc-831dc0f8a3e7.jpg"
            imageAlt="AMARA Ocean View Penthouse – Family & Surf holiday rental Tarifa"
            meta="Tarifa • family stay"
            title="AMARA Ocean View Penthouse"
            description="A spacious home for surfers and families — intentionally different."
            ctaLabel="Explore Penthouse"
          />
        </ApartmentGrid>
      </section>

      {/* Guest Reviews Section */}
      <GuestReviewsSummary />
    </main>
  );
}
