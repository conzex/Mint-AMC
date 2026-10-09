import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { LegalStickySidebar } from '@/components/layout/sticky-sidebar-nav';
import { PanelCard } from '@/components/ui/panel-card';
import { privacyContent } from '@/content/legal';

export const metadata = { title: 'Privacy Policy | Mint AMC' };

export default function PrivacyPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={privacyContent.title} subtitle={privacyContent.subtitle} size="compact" align="center" />
      <PageSection tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 xl:col-span-3">
            <LegalStickySidebar currentPath="/privacy" />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {privacyContent.sections.map((s) => (
              <PanelCard key={s.heading} title={s.heading}>
                <p className="type-body text-sm sm:text-base leading-relaxed whitespace-pre-line">{s.body}</p>
              </PanelCard>
            ))}
          </div>
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Enterprise Data Security & SLA Guarantee"
        subtitle="Learn more about our ITIL-aligned governance, ISO standards, and NOC monitoring protocols."
      />
    </MarketingChrome>
  );
}
