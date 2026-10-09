'use client';

import { Check, Minus, Clock, ShieldCheck, Wrench, AlertCircle } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { heroCtaGroupClass } from '@/lib/marketing-cta';
import { pricingContent } from '@/content/pricing';
import FaqAccordion from '@/components/ui/faq-accordion';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useQuoteModal } from '@/components/ui/request-quote-modal';

export default function PricingPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <MarketingChrome>
      <PageHeroBand
        title={pricingContent.heroTitle}
        subtitle={pricingContent.heroSubtitle}
        size="compact"
        align="center"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-subtle/80 border border-brand/30 rounded-full text-brand text-xs font-semibold mb-4 shadow-xs">
            <Icon icon={Wrench} size="xs" />
            Active Offering: Labour, Field Support & Preventive Service AMC
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <Button onClick={() => openQuoteModal('General AMC Scope')} size="md" className="w-full sm:w-auto">
            {pricingContent.heroCtaQuote}
          </Button>
          <Button href="/contact" variant="secondary" size="md" className="w-full sm:w-auto">
            Contact Engineering Team
          </Button>
        </div>
      </PageHeroBand>

      {/* Hardware Replacement AMC Coming Soon Banner */}
      <PageSection tone="white" className="!py-6 border-b border-line">
        <div className="max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <Icon icon={AlertCircle} size="md" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink flex items-center justify-center sm:justify-start gap-2">
                <span>Hardware Replacement AMC — Coming Soon</span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-full">
                  Upcoming
                </span>
              </h3>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                We currently provide <strong>Comprehensive Labour, Field Engineering, Onsite SLA, and Preventive Maintenance AMC</strong>. Comprehensive Hardware Replacement AMC (including full spare parts) will launch soon.
              </p>
            </div>
          </div>
          <Button onClick={() => openQuoteModal('Labour & Preventive AMC')} size="sm" variant="secondary" className="shrink-0 bg-white border-amber-300 hover:bg-amber-50">
            Get Current AMC Plan
          </Button>
        </div>
      </PageSection>

      <PageSection tone="muted">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingContent.tiers.map((tier) => (
            <div key={tier.id} className="ui-card p-6 sm:p-8 flex flex-col relative justify-between">
              <div>
                {tier.popular && 'popularLabel' in tier && (
                  <span className="absolute -top-3 right-6 text-xs font-bold uppercase tracking-wider bg-brand text-white px-3 py-1 rounded-full shadow-md">
                    {(tier as { popularLabel?: string }).popularLabel}
                  </span>
                )}
                <h3 className="type-card-title text-xl font-bold">{tier.name}</h3>
                <p className="type-caption mt-1 text-ink-muted">{tier.tagline}</p>
                <p className="text-2xl font-bold text-brand mt-4">{tier.price}</p>
                <p className="type-caption mt-1">{tier.unit}</p>
                <ul className="mt-6 space-y-3 type-body text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start">
                      <Icon icon={Check} size="xs" className="text-brand shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={() => openQuoteModal(`${tier.name} Plan Quote`)} className="mt-8 w-full">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="white" borderTop>
        <h2 className="type-section-title mb-6 text-center">{pricingContent.perServiceTableTitle}</h2>
        <div className="ui-table-wrap">
          <table className="ui-table">
            <thead>
              <tr>
                <th>{pricingContent.tableHeaders.service}</th>
                <th className="hidden sm:table-cell">{pricingContent.tableHeaders.coverage}</th>
                <th>{pricingContent.tableHeaders.price}</th>
                <th className="hidden md:table-cell">{pricingContent.tableHeaders.sla}</th>
                <th>{pricingContent.tableHeaders.cta}</th>
              </tr>
            </thead>
            <tbody>
              {pricingContent.perServiceRows.map((row) => (
                <tr key={row.service}>
                  <td className="font-semibold text-ink">{row.service}</td>
                  <td className="hidden sm:table-cell">{row.coverage}</td>
                  <td className="font-medium text-brand">{row.price}</td>
                  <td className="hidden md:table-cell">{row.sla}</td>
                  <td>
                    <button
                      onClick={() => openQuoteModal(row.service)}
                      className="text-xs font-semibold text-brand hover:underline"
                    >
                      {pricingContent.tableHeaders.cta}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      <PageSection tone="muted">
        <h2 className="type-section-title mb-6 text-center">{pricingContent.comparisonTitle}</h2>
        <div className="ui-table-wrap">
          <table className="ui-table">
            <thead>
              <tr>
                <th>{pricingContent.tableHeaders.feature}</th>
                <th className="text-center">{pricingContent.tableHeaders.essential}</th>
                <th className="text-center">{pricingContent.tableHeaders.professional}</th>
                <th className="text-center">{pricingContent.tableHeaders.enterprise}</th>
              </tr>
            </thead>
            <tbody>
              {pricingContent.comparisonFeatures.map((row) => (
                <tr key={row.name}>
                  <td className="font-medium text-ink">{row.name}</td>
                  {(['essential', 'professional', 'enterprise'] as const).map((key) => (
                    <td key={key} className="text-center">
                      {row[key] ? <Icon icon={Check} size="sm" className="text-brand inline" /> : <Icon icon={Minus} size="sm" className="text-ink-muted inline" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      <PageSection tone="white" borderTop>
        <h2 className="type-section-title mb-6 text-center">{pricingContent.addonsTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingContent.addons.map((a) => (
            <div key={a.title} className="ui-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="type-card-title text-base font-bold">{a.title}</h3>
                <p className="type-body mt-2 text-sm">{a.description}</p>
              </div>
              <p className="text-sm font-bold text-brand mt-4 pt-3 border-t border-line/60">{a.price}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="muted">
        <FaqAccordion items={pricingContent.faq} />
      </PageSection>

      <MarketingCtaBand title={pricingContent.closingCtaTitle}>
        <Button onClick={() => openQuoteModal('Custom Enterprise Plan')} size="md" className="mx-auto max-w-xs w-full shadow-lg">
          {pricingContent.closingCtaButton}
        </Button>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
