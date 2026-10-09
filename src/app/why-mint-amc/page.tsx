import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { whyContent } from '@/content/why';

export const metadata = { title: '{{META_WHY_TITLE}}' };

export default function WhyMintAmcPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={whyContent.heroTitle} subtitle={whyContent.heroSubtitle} align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary mb-4">{whyContent.differentiatorsTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {whyContent.differentiators.map((d) => (
              <div key={d} className="bg-white border border-border-card rounded p-5 text-sm text-text-secondary">{d}</div>
            ))}
          </div>
          <h2 className="text-lg font-bold text-text-primary mb-4">{whyContent.slaTitle}</h2>
          <div className="border border-border-card rounded overflow-hidden bg-white mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card-header border-b border-border-card text-left">
                  <th className="p-3 font-semibold">{whyContent.slaTableHeaders.tier}</th>
                  <th className="p-3 font-semibold">{whyContent.slaTableHeaders.response}</th>
                  <th className="p-3 font-semibold">{whyContent.slaTableHeaders.resolution}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-card">
                {whyContent.slaRows.map((row) => (
                  <tr key={row.tier} className="hover:bg-row-hover">
                    <td className="p-3 font-medium text-text-primary">{row.tier}</td>
                    <td className="p-3 text-text-secondary">{row.response}</td>
                    <td className="p-3 text-text-secondary">{row.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{whyContent.oemTitle}</h2>
            <p className="text-sm text-text-secondary mt-2">{whyContent.oemBody}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {whyContent.oemPartners.map((p) => (
                <li key={p} className="px-2 py-1 border border-border-card rounded bg-bg-body">{p}</li>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
