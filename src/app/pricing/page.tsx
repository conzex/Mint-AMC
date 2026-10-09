import Link from 'next/link';
import { ArrowRight, Check, Minus } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import { heroCtaBtnClass, heroCtaGroupClass } from '@/lib/marketing-cta';
import { pricingContent } from '@/content/pricing';
import FaqAccordion from '@/components/ui/faq-accordion';
import { PanelCard } from '@/components/ui/panel-card';

export const metadata = { title: '{{META_PRICING_TITLE}}' };

export default function PricingPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={pricingContent.heroTitle} subtitle={pricingContent.heroSubtitle} size="compact" align="left">
        <div className={heroCtaGroupClass + ' !mx-0 !max-w-md'}>
          <Link href="/contact" className={`${heroCtaBtnClass} bg-white text-dell-blue hover:bg-white/90`}>
            {pricingContent.heroCtaQuote}
          </Link>
          <a href={pricingContent.pdfHref} className={`${heroCtaBtnClass} bg-white/10 text-white border border-white/25 hover:bg-white/20`}>
            {pricingContent.heroCtaPdf}
          </a>
        </div>
      </PageHeroBand>

      <section className="py-12 bg-bg-body">
        <PageContainer>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingContent.tiers.map((tier) => (
              <div key={tier.id} className="bg-white border border-border-card rounded p-5 flex flex-col relative">
                {tier.popular && 'popularLabel' in tier && (
                  <span className="absolute -top-2 right-4 text-[10px] font-semibold uppercase tracking-wide bg-dell-blue text-white px-2 py-0.5 rounded">
                    {(tier as { popularLabel?: string }).popularLabel}
                  </span>
                )}
                <h3 className="text-sm font-bold text-text-primary">{tier.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{tier.tagline}</p>
                <p className="text-2xl font-bold text-dell-blue mt-4">{tier.price}</p>
                <p className="text-xs text-text-secondary">{tier.unit}</p>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="w-4 h-4 text-green-healthy shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-5 inline-flex items-center justify-center gap-2 bg-dell-blue text-white text-sm font-semibold px-4 py-2 rounded hover:bg-dell-blue-hover">
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-white border-t border-border-card">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary mb-4">{pricingContent.perServiceTableTitle}</h2>
          <div className="border border-border-card rounded overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-header border-b border-border-card text-left">
                  <th className="p-3 font-semibold text-text-primary">{pricingContent.tableHeaders.service}</th>
                  <th className="p-3 font-semibold text-text-primary hidden sm:table-cell">{pricingContent.tableHeaders.coverage}</th>
                  <th className="p-3 font-semibold text-text-primary">{pricingContent.tableHeaders.price}</th>
                  <th className="p-3 font-semibold text-text-primary hidden md:table-cell">{pricingContent.tableHeaders.sla}</th>
                  <th className="p-3 font-semibold text-text-primary">{pricingContent.tableHeaders.cta}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-card">
                {pricingContent.perServiceRows.map((row) => (
                  <tr key={row.service} className="hover:bg-row-hover">
                    <td className="p-3 font-medium text-text-primary">{row.service}</td>
                    <td className="p-3 text-text-secondary hidden sm:table-cell">{row.coverage}</td>
                    <td className="p-3 text-text-secondary">{row.price}</td>
                    <td className="p-3 text-text-secondary hidden md:table-cell">{row.sla}</td>
                    <td className="p-3">
                      <Link href="/contact" className="text-dell-blue font-semibold hover:underline text-xs">
                        {pricingContent.tableHeaders.cta}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-bg-body">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary mb-4">{pricingContent.comparisonTitle}</h2>
          <div className="border border-border-card rounded overflow-hidden bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-header border-b border-border-card">
                  <th className="p-3 text-left font-semibold">{pricingContent.tableHeaders.feature}</th>
                  <th className="p-3 text-center font-semibold">{pricingContent.tableHeaders.essential}</th>
                  <th className="p-3 text-center font-semibold">{pricingContent.tableHeaders.professional}</th>
                  <th className="p-3 text-center font-semibold">{pricingContent.tableHeaders.enterprise}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-card">
                {pricingContent.comparisonFeatures.map((row) => (
                  <tr key={row.name} className="hover:bg-row-hover">
                    <td className="p-3 text-text-primary">{row.name}</td>
                    {(['essential', 'professional', 'enterprise'] as const).map((key) => (
                      <td key={key} className="p-3 text-center">
                        {row[key] ? <Check className="w-4 h-4 text-green-healthy inline" /> : <Minus className="w-4 h-4 text-text-secondary inline" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-white border-t border-border-card">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary mb-4">{pricingContent.addonsTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingContent.addons.map((a) => (
              <PanelCard key={a.title}>
                <h3 className="text-sm font-semibold text-text-primary">{a.title}</h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{a.description}</p>
                <p className="text-sm font-bold text-dell-blue mt-3">{a.price}</p>
              </PanelCard>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-bg-body">
        <PageContainer>
          <FaqAccordion items={pricingContent.faq} />
        </PageContainer>
      </section>

      <MarketingCtaBand title={pricingContent.closingCtaTitle}>
        <Link href="/contact" className={`${heroCtaBtnClass} bg-white text-dell-blue hover:bg-white/90 mx-auto max-w-xs`}>
          {pricingContent.closingCtaButton} <ArrowRight className="w-4 h-4" />
        </Link>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
