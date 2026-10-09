import { Activity, ArrowRight } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { heroCtaGroupClass } from '@/lib/marketing-cta';
import { homeContent } from '@/content/home';
import { megaMenuColumns } from '@/content/mega-menu';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { TextLink } from '@/components/ui/text-link';

export default function HomePage() {
  return (
    <MarketingChrome>
      <PageHeroBand
        size="large"
        badge={
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-subtle rounded-full type-eyebrow mb-6 border border-accent/30">
            <Icon icon={Activity} size="xs" className="text-accent" />
            {homeContent.heroBadge}
          </div>
        }
        title={homeContent.heroHeadline}
        subtitle={homeContent.heroSubheadline}
      >
        <div className={heroCtaGroupClass}>
          <Button href="/contact" size="md" className="w-full">
            {homeContent.heroPrimaryCta}
            <Icon icon={ArrowRight} size="sm" />
          </Button>
          <Button href="/services" variant="secondary" size="md" className="w-full">
            {homeContent.heroSecondaryCta}
          </Button>
        </div>
      </PageHeroBand>

      <section className="bg-surface border-b border-line">
        <PageContainer>
          <div className="py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center type-caption font-medium">
            {homeContent.trustItems.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded overflow-hidden mb-6">
            {homeContent.metrics.map((s) => (
              <div key={s.label} className="bg-surface py-6 sm:py-7 px-4 sm:px-5">
                <div className="text-xl sm:text-2xl font-bold text-brand tabular-nums">{s.value}</div>
                <div className="text-sm font-semibold text-ink mt-1">{s.label}</div>
                <div className="type-caption">{s.sub}</div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <PageSection tone="muted">
        <div className="max-w-xl mb-8">
          <h2 className="type-section-title">{homeContent.servicesSectionTitle}</h2>
          <p className="type-body mt-2">{homeContent.servicesSectionBody}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {megaMenuColumns.map((col) => (
            <div key={col.id} className="ui-card p-5 flex gap-4">
              <div className="w-10 h-10 rounded bg-brand-subtle text-accent flex items-center justify-center shrink-0">
                <Icon icon={col.icon} size="md" />
              </div>
              <div className="min-w-0">
                <h3 className="type-card-title">{col.heading}</h3>
                <ul className="mt-2 type-body space-y-1">
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

      <PageSection tone="white" borderTop>
        <h2 className="type-section-title mb-4">{homeContent.howItWorksTitle}</h2>
        <ol className="grid sm:grid-cols-2 gap-3 type-body list-decimal list-inside">
          {homeContent.howItWorksSteps.map((step) => (
            <li key={step} className="ui-card p-4 list-item">{step}</li>
          ))}
        </ol>
      </PageSection>

      <PageSection tone="muted">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="type-section-title">{homeContent.whyUsTitle}</h2>
            <p className="type-body mt-2">{homeContent.whyUsBody}</p>
            <ul className="mt-4 space-y-2 type-body">
              {homeContent.whyUsPoints.map((p) => (
                <li key={p} className="border-l-2 border-accent pl-3">{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-section-title mb-4">{homeContent.testimonialsTitle}</h2>
            {homeContent.testimonials.map((t) => (
              <div key={t.client} className="ui-card p-5 mb-3">
                <p className="type-body">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-2 text-xs font-semibold text-ink">{t.client}</p>
                <p className="type-caption">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection tone="white" borderTop className="py-12">
        <h2 className="type-section-title">{homeContent.coverageTitle}</h2>
        <p className="type-body mt-2 max-w-2xl">{homeContent.coverageBody}</p>
      </PageSection>

      <MarketingCtaBand title={homeContent.ctaTitle} subtitle={homeContent.ctaSubtitle}>
        <Button href="/contact" size="md" className="mx-auto max-w-xs w-full">
          {homeContent.ctaButton}
          <Icon icon={ArrowRight} size="sm" />
        </Button>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
