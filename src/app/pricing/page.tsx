import { Check, Minus } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { heroCtaGroupClass } from '@/lib/marketing-cta';
import { pricingContent } from '@/content/pricing';
import FaqAccordion from '@/components/ui/faq-accordion';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { TextLink } from '@/components/ui/text-link';

export const metadata = { title: 'Pricing | Mint AMC' };

export default function PricingPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={pricingContent.heroTitle} subtitle={pricingContent.heroSubtitle} size="compact" align="left">
        <div className={`${heroCtaGroupClass} !mx-0 !max-w-md`}>
          <Button href="/contact" size="md" className="w-full">{pricingContent.heroCtaQuote}</Button>
          <Button href={pricingContent.pdfHref} variant="secondary" size="md" className="w-full" external>
            {pricingContent.heroCtaPdf}
          </Button>
        </div>
      </PageHeroBand>

      <PageSection tone="muted">
        <div className="grid md:grid-cols-3 gap-4">
          {pricingContent.tiers.map((tier) => (
            <div key={tier.id} className="ui-card p-5 flex flex-col relative">
              {tier.popular && 'popularLabel' in tier && (
                <span className="absolute -top-2 right-4 type-eyebrow bg-accent text-ink px-2 py-0.5 rounded">
                  {(tier as { popularLabel?: string }).popularLabel}
                </span>
              )}
              <h3 className="type-card-title">{tier.name}</h3>
              <p className="type-caption mt-1">{tier.tagline}</p>
              <p className="text-2xl font-bold text-brand mt-4">{tier.price}</p>
              <p className="type-caption">{tier.unit}</p>
              <ul className="mt-4 space-y-2 type-body flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Icon icon={Check} size="sm" className="text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-5 w-full">{tier.cta}</Button>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="white" borderTop>
        <h2 className="type-section-title mb-4">{pricingContent.perServiceTableTitle}</h2>
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
                  <td className="font-medium text-ink">{row.service}</td>
                  <td className="hidden sm:table-cell">{row.coverage}</td>
                  <td>{row.price}</td>
                  <td className="hidden md:table-cell">{row.sla}</td>
                  <td>
                    <TextLink href="/contact" className="text-xs">{pricingContent.tableHeaders.cta}</TextLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      <PageSection tone="muted">
        <h2 className="type-section-title mb-4">{pricingContent.comparisonTitle}</h2>
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
        <h2 className="type-section-title mb-4">{pricingContent.addonsTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingContent.addons.map((a) => (
            <div key={a.title} className="ui-card p-5">
              <h3 className="type-card-title">{a.title}</h3>
              <p className="type-body mt-2">{a.description}</p>
              <p className="text-sm font-bold text-brand mt-3">{a.price}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="muted">
        <FaqAccordion items={pricingContent.faq} />
      </PageSection>

      <MarketingCtaBand title={pricingContent.closingCtaTitle}>
        <Button href="/contact" size="md" className="mx-auto max-w-xs w-full">{pricingContent.closingCtaButton}</Button>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
