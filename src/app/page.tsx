import Link from 'next/link';
import { Activity, ArrowRight } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import { heroCtaBtnClass, heroCtaGroupClass } from '@/lib/marketing-cta';
import { homeContent } from '@/content/home';
import { megaMenuColumns } from '@/content/mega-menu';

export default function HomePage() {
  return (
    <MarketingChrome>
      <PageHeroBand
        size="large"
        badge={
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-6 border border-white/20">
            <Activity className="w-3 h-3" /> {homeContent.heroBadge}
          </div>
        }
        title={homeContent.heroHeadline}
        subtitle={homeContent.heroSubheadline}
      >
        <div className={heroCtaGroupClass}>
          <Link href="/contact" className={`${heroCtaBtnClass} bg-white text-dell-blue hover:bg-white/90 shadow-lg shadow-black/10`}>
            {homeContent.heroPrimaryCta} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className={`${heroCtaBtnClass} bg-white/10 text-white hover:bg-white/20 border border-white/25 backdrop-blur-sm`}>
            {homeContent.heroSecondaryCta}
          </Link>
        </div>
      </PageHeroBand>

      <section className="bg-white border-b border-border-card">
        <PageContainer>
          <div className="py-4 flex flex-wrap gap-4 justify-center text-xs text-text-secondary">
            {homeContent.trustItems.map((t) => (
              <span key={t} className="font-medium">{t}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-card border border-border-card rounded overflow-hidden mb-6">
            {homeContent.metrics.map((s) => (
              <div key={s.label} className="bg-white py-6 sm:py-7 px-4 sm:px-5">
                <div className="text-xl sm:text-2xl font-bold text-dell-blue tabular-nums">{s.value}</div>
                <div className="text-sm font-medium text-text-primary mt-1">{s.label}</div>
                <div className="text-xs text-text-secondary">{s.sub}</div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 sm:py-14 bg-bg-body">
        <PageContainer>
          <div className="max-w-xl mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-text-primary">{homeContent.servicesSectionTitle}</h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{homeContent.servicesSectionBody}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {megaMenuColumns.map((col) => (
              <div key={col.id} className="flex gap-4 bg-white border border-border-card rounded p-5">
                <div className="w-10 h-10 rounded bg-dell-blue/10 text-dell-blue flex items-center justify-center shrink-0">
                  <col.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary">{col.heading}</h3>
                  <ul className="mt-2 text-sm text-text-secondary space-y-1">
                    {col.links.slice(0, 3).map((l) => (
                      <li key={l.slug}>
                        <Link href={`/services/${l.slug}`} className="text-dell-blue hover:underline">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 sm:py-14 bg-white border-t border-border-card">
        <PageContainer>
          <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4">{homeContent.howItWorksTitle}</h2>
          <ol className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary list-decimal list-inside">
            {homeContent.howItWorksSteps.map((step) => (
              <li key={step} className="bg-bg-body border border-border-card rounded p-4">{step}</li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section className="py-12 sm:py-14 bg-bg-body">
        <PageContainer className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary">{homeContent.whyUsTitle}</h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{homeContent.whyUsBody}</p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {homeContent.whyUsPoints.map((p) => (
                <li key={p} className="border-l-2 border-dell-blue pl-3">{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4">{homeContent.testimonialsTitle}</h2>
            {homeContent.testimonials.map((t) => (
              <div key={t.client} className="bg-white border border-border-card rounded p-5 mb-3">
                <p className="text-sm text-text-secondary leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-2 text-xs font-semibold text-text-primary">{t.client}</p>
                <p className="text-xs text-text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-white border-t border-border-card">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary">{homeContent.coverageTitle}</h2>
          <p className="text-sm text-text-secondary mt-2 max-w-2xl leading-relaxed">{homeContent.coverageBody}</p>
        </PageContainer>
      </section>

      <MarketingCtaBand title={homeContent.ctaTitle} subtitle={homeContent.ctaSubtitle}>
        <Link href="/contact" className={`${heroCtaBtnClass} bg-white text-dell-blue hover:bg-white/90 mx-auto max-w-xs`}>
          {homeContent.ctaButton} <ArrowRight className="w-4 h-4" />
        </Link>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
