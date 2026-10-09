import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { PanelCard } from '@/components/ui/panel-card';
import { whyContent } from '@/content/why';

export const metadata = { title: 'Why Mint AMC | Mint AMC' };

export default function WhyMintAmcPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={whyContent.heroTitle} subtitle={whyContent.heroSubtitle} align="left" />
      <PageSection tone="muted">
        <h2 className="type-section-title mb-4">{whyContent.differentiatorsTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {whyContent.differentiators.map((d) => (
            <div key={d} className="ui-card p-5 type-body">{d}</div>
          ))}
        </div>
        <h2 className="type-section-title mb-4">{whyContent.slaTitle}</h2>
        <div className="ui-table-wrap mb-8">
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
                  <td className="font-medium text-ink">{row.tier}</td>
                  <td>{row.response}</td>
                  <td>{row.resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PanelCard title={whyContent.oemTitle}>
          <p className="type-body">{whyContent.oemBody}</p>
          <ul className="mt-3 flex flex-wrap gap-2 type-caption">
            {whyContent.oemPartners.map((p) => (
              <li key={p} className="px-2 py-1 border border-line rounded bg-surface-muted">{p}</li>
            ))}
          </ul>
        </PanelCard>
      </PageSection>
    </MarketingChrome>
  );
}
