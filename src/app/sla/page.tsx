import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { LegalStickySidebar } from '@/components/layout/sticky-sidebar-nav';
import { PanelCard } from '@/components/ui/panel-card';
import { slaContent } from '@/content/legal';

export const metadata = { title: 'SLA Overview | Mint AMC' };

export default function SlaPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={slaContent.title} subtitle={slaContent.intro} size="compact" align="center" />
      <PageSection tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 xl:col-span-3">
            <LegalStickySidebar currentPath="/sla" />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {slaContent.sections.map((s) => (
              <PanelCard key={s.heading} title={s.heading}>
                <p className="type-body text-sm sm:text-base leading-relaxed whitespace-pre-line">{s.body}</p>
              </PanelCard>
            ))}
          </div>
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Custom Response & Resolution Commitments"
        subtitle="Need customized SLA guarantees or dedicated resident engineers? Speak to our engineering team."
      />
    </MarketingChrome>
  );
}
