import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export interface CinematicApartment {
  id: string;
  name: string;
  subtitle: string;
  meta: string;
  desc: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  imgSrcSet?: string;
  exploreHref: string;
  exploreLabel: string;
}

export interface HomeCinematicMainProps {
  heroImageSrc: string;
  heroImageSrcSet?: string;
  heroImageWidth: number;
  heroImageHeight: number;
  heroKicker: string;
  heroLead: string;
  scrollHint: string;
  philosophyHeadlinePart1: string;
  philosophyHeadlineAccent: string;
  philosophyLabel: string;
  philosophyP1: string;
  philosophyP2: string;
  statReviewsValue: string;
  statRatingValue: string;
  statReviewsLabel: string;
  statRatingLabel: string;
  collectionEyebrow: string;
  collectionTitle: string;
  apartments: CinematicApartment[];
  trustBgSrc: string;
  trustBgSrcSet?: string;
  trustImageWidth: number;
  trustImageHeight: number;
  trustQuote: string;
  trustChips: string[];
  trustCta: string;
  trustReviewsHref: string;
}

const FadeIn = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomeCinematicMain(props: HomeCinematicMainProps) {
  const {
    heroImageSrc,
    heroImageSrcSet,
    heroImageWidth,
    heroImageHeight,
    heroKicker,
    heroLead,
    scrollHint,
    philosophyHeadlinePart1,
    philosophyHeadlineAccent,
    philosophyLabel,
    philosophyP1,
    philosophyP2,
    statReviewsValue,
    statRatingValue,
    statReviewsLabel,
    statRatingLabel,
    collectionEyebrow,
    collectionTitle,
    apartments,
    trustBgSrc,
    trustBgSrcSet,
    trustImageWidth,
    trustImageHeight,
    trustQuote,
    trustChips,
    trustCta,
    trustReviewsHref
  } = props;

  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], reduceMotion ? [1, 1] : [1, 0]);

  return (
    <main className="bg-surface relative min-h-screen selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Hero — parallax (Motion) */}
      <section
        ref={heroRef}
        className="relative z-[2] h-[calc(100svh-136px)] min-h-[28rem] w-full overflow-hidden bg-inverse-surface"
      >
        <motion.div
          style={reduceMotion ? undefined : ({ y, opacity } as React.CSSProperties)}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={heroImageSrc}
            srcSet={heroImageSrcSet || undefined}
            alt=""
            className="h-full w-full object-cover opacity-60"
            width={heroImageWidth}
            height={heroImageHeight}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/20 via-transparent to-inverse-surface/80" />
        </motion.div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-inverted-on-surface">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
            className="mb-6 font-body text-xs uppercase tracking-[0.3em] text-inverted-on-surface-muted md:text-sm"
          >
            {heroKicker}
          </motion.span>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-8 font-headline text-6xl font-light leading-none tracking-tight md:text-8xl lg:text-9xl"
          >
            AMARA
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-xl font-headline text-lg italic text-inverted-on-surface-muted md:text-2xl"
          >
            {heroLead}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-inverted-on-surface-muted"
        >
          <span className="font-body text-xs uppercase tracking-widest">{scrollHint}</span>
          <div className="h-12 w-px bg-gradient-to-b from-inverted-on-surface-muted to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="relative z-[2] mx-auto max-w-screen-xl px-6 py-32 md:px-12 md:py-48">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="mb-8 font-headline text-4xl leading-[1.1] text-on-surface md:text-6xl">
                {philosophyHeadlinePart1}{' '}
                <span className="italic text-primary">{philosophyHeadlineAccent}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-outline-variant" />
                <span className="font-body text-sm uppercase tracking-widest text-on-surface-variant">{philosophyLabel}</span>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8 font-body text-lg font-light leading-relaxed text-on-surface-variant md:text-xl lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.3}>
              <p>{philosophyP1}</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>{philosophyP2}</p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex gap-8 border-t border-outline-variant/30 pt-8">
                <div>
                  <span className="mb-1 block font-headline text-3xl text-on-surface">{statReviewsValue}</span>
                  <span className="font-body text-xs uppercase tracking-wider text-on-surface-variant">{statReviewsLabel}</span>
                </div>
                <div>
                  <span className="mb-1 block font-headline text-3xl text-on-surface">{statRatingValue}</span>
                  <span className="font-body text-xs uppercase tracking-wider text-on-surface-variant">{statRatingLabel}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="relative z-[2] bg-surface-container-low py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-32 text-center">
              <span className="mb-4 block font-body text-sm uppercase tracking-widest text-primary">{collectionEyebrow}</span>
              <h2 className="font-headline text-5xl text-on-surface md:text-7xl">{collectionTitle}</h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-32 md:gap-48">
            {apartments.map((apt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={apt.id}
                  className={`flex flex-col items-center gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="w-full lg:w-1/2">
                    <FadeIn className="group relative aspect-[4/5] w-full overflow-hidden">
                      <motion.img
                        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        src={apt.img}
                        srcSet={apt.imgSrcSet || undefined}
                        alt=""
                        className="h-full w-full object-cover"
                        width={apt.imgWidth}
                        height={apt.imgHeight}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-inverse-surface/10 transition-colors duration-700 group-hover:bg-transparent" />
                    </FadeIn>
                  </div>

                  <div className="flex w-full flex-col justify-center lg:w-1/2">
                    <FadeIn delay={0.2}>
                      <span className="mb-4 block font-body text-xs uppercase tracking-widest text-on-surface-variant">{apt.meta}</span>
                      <h3 className="mb-2 font-headline text-5xl text-on-surface md:text-6xl">{apt.name}</h3>
                      <h4 className="mb-8 font-headline text-2xl italic text-primary">{apt.subtitle}</h4>
                      <p className="mb-10 max-w-md font-body text-lg font-light leading-relaxed text-on-surface-variant">{apt.desc}</p>

                      <a
                        href={apt.exploreHref}
                        className="group inline-flex items-center gap-4 font-body text-sm uppercase tracking-widest text-on-surface"
                      >
                        <span className="relative overflow-hidden pb-1">
                          {apt.exploreLabel}
                          <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-on-surface transition-transform duration-500 group-hover:scale-x-100" />
                        </span>
                        <svg
                          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust — inverse */}
      <section className="relative z-[2] overflow-hidden bg-inverse-surface py-32 text-inverted-on-surface md:py-48">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
          <img
            src={trustBgSrc}
            srcSet={trustBgSrcSet || undefined}
            alt=""
            className="h-full w-full object-cover grayscale"
            width={trustImageWidth}
            height={trustImageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <FadeIn>
            <span className="am-gold mb-8 block text-2xl" aria-hidden="true">
              ★★★★★
            </span>
            <h2 className="mx-auto mb-12 max-w-4xl font-headline text-4xl font-light leading-tight md:text-6xl lg:text-7xl">
              <span aria-hidden="true">&ldquo;</span>
              {trustQuote}
              <span aria-hidden="true">&rdquo;</span>
            </h2>

            <div className="mb-16 flex flex-wrap justify-center gap-4 md:gap-8">
              {trustChips.map((feature, i) => (
                <span
                  key={i}
                  className="rounded-full border border-inverted-on-surface-muted px-6 py-2 font-body text-sm font-light tracking-wide md:text-base"
                >
                  {feature}
                </span>
              ))}
            </div>

            <a
              href={trustReviewsHref}
              className="inline-flex items-center justify-center bg-surface px-8 py-4 font-body text-sm uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container-high"
            >
              {trustCta}
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
