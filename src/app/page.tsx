import { Activity, ArrowRight } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { homeContent } from '@/content/home';
import { megaMenuColumns } from '@/content/mega-menu';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/feature-card';
import { Icon } from '@/components/ui/icon';
import { SectionHeader } from '@/components/ui/section-header';
import { TextLink } from '@/components/ui/text-link';

export default function HomePage() {
  return (
    <MarketingChrome>
      <PageHeroBand
        size="large"
        align="left"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full type-eyebrow mb-8 border border-line shadow-sm">
            <Icon icon={Activity} size="xs" className="text-accent" />
            {homeContent.heroBadge}
          </div>
        }
        title={homeContent.heroHeadline}
        subtitle={homeContent.heroSubheadline}
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <Button href="/contact" size="md">
            {homeContent.heroPrimaryCta}
            <Icon icon={ArrowRight} size="sm" />
          </Button>
          <Button href="/services" variant="secondary" size="md">
            {homeContent.heroSecondaryCta}
          </Button>
        </div>
      </PageHeroBand>

      <PageSection tone="white" className="py-10 sm:py-12 lg:py-14">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 type-caption font-medium text-center">
          {homeContent.trustItems.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </PageSection>

      <PageSection tone="muted">
        <SectionHeader title={homeContent.outcomesTitle} lead={homeContent.outcomesLead} />
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {homeContent.outcomeCards.map((card) => (
            <FeatureCard key={card.title} title={card.title} body={card.body} href={card.href} />
          ))}
        </div>
      </PageSection>

      <PageSection tone="dark" className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {homeContent.metrics.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-tight">
                {s.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-white/90 mt-2">{s.label}</div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="white">
        <SectionHeader
          title={homeContent.servicesSectionTitle}
          lead={homeContent.servicesSectionBody}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {megaMenuColumns.map((col) => (
            <div key={col.id} className="ui-card-interactive p-6 sm:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-brand-subtle text-accent flex items-center justify-center shrink-0">
                <Icon icon={col.icon} size="md" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-ink">{col.heading}</h3>
                <ul className="mt-3 space-y-2 type-body">
                  {col.links.slice(0, 3).map((l) => (
                    <li key={l.slug}>
                      <TextLink href={`/services/${l.slug}`} className="font-medium">
                        {l.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="muted" borderTop>
        <SectionHeader title={homeContent.howItWorksTitle} align="left" className="max-w-none text-left mx-0" />
        <ol className="grid sm:grid-cols-2 gap-5 type-body">
          {homeContent.howItWorksSteps.map((step, i) => (
            <li key={step} className="ui-card p-6 sm:p-8">
              <span className="type-eyebrow text-accent">Step {i + 1}</span>
              <p className="mt-3 text-base sm:text-lg text-ink font-medium leading-snug">{step}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection tone="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="type-section-title">{homeContent.whyUsTitle}</h2>
            <p className="type-section-lead mt-4 text-left mx-0">{homeContent.whyUsBody}</p>
            <ul className="mt-8 space-y-4">
              {homeContent.whyUsPoints.map((p) => (
                <li key={p} className="flex gap-3 type-body text-base">
                  <span className="w-1.5 shrink-0 rounded-full bg-accent mt-2.5" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-section-title mb-8">{homeContent.testimonialsTitle}</h2>
            {homeContent.testimonials.map((t) => (
              <blockquote key={t.client} className="ui-card p-8 mb-5 last:mb-0">
                <p className="text-lg sm:text-xl text-ink leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="text-sm font-bold text-ink">{t.client}</p>
                  <p className="type-caption">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection tone="muted" borderTop className="!py-16">
        <h2 className="type-section-title max-w-2xl">{homeContent.coverageTitle}</h2>
        <p className="type-section-lead mt-4 max-w-2xl text-left mx-0">{homeContent.coverageBody}</p>
      </PageSection>

      <MarketingCtaBand title={homeContent.ctaTitle} subtitle={homeContent.ctaSubtitle}>
        <Button href="/contact" variant="onDark" size="md" className="mx-auto">
          {homeContent.ctaButton}
          <Icon icon={ArrowRight} size="sm" />
        </Button>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
