import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { PanelCard } from '@/components/ui/panel-card';
import { whyContent } from '@/content/why';

export const metadata = { title: 'Why Mint AMC | Mint AMC' };

export default function WhyMintAmcPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={whyContent.heroTitle} subtitle={whyContent.heroSubtitle} align="center" />
      <PageSection tone="muted">
        <h2 className="type-section-title mb-6 text-center">{whyContent.differentiatorsTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {whyContent.differentiators.map((d) => (
            <div key={d} className="ui-card p-6 type-body font-medium">{d}</div>
          ))}
        </div>
        <h2 className="type-section-title mb-6 text-center">{whyContent.slaTitle}</h2>
        <div className="ui-table-wrap mb-10">
          <table className="ui-table">
            <thead>
              <tr>
                <th>{whyContent.slaTableHeaders.tier}</th>
                <th>{whyContent.slaTableHeaders.response}</th>
                <th>{whyContent.slaTableHeaders.resolution}</th>
              </tr>
            </thead>
            <tbody>
              {whyContent.slaRows.map((row) => (
                <tr key={row.tier}>
                  <td className="font-semibold text-ink">{row.tier}</td>
                  <td>{row.response}</td>
                  <td>{row.resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PanelCard title={whyContent.oemTitle}>
          <p className="type-body">{whyContent.oemBody}</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 type-caption">
            {whyContent.oemPartners.map((p) => (
              <li key={p} className="px-3 py-1.5 border border-line rounded-lg bg-surface-muted font-medium text-ink">{p}</li>
            ))}
          </ul>
        </PanelCard>
      </PageSection>
      <MarketingCtaBand
        title="Experience SLA-Guaranteed IT Maintenance"
        subtitle="Partner with India's leading multi-vendor IT AMC provider for continuous uptime, field engineering, and 24/7 NOC oversight."
      />
    </MarketingChrome>
  );
}
