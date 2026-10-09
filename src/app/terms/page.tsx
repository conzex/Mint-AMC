import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { LegalStickySidebar } from '@/components/layout/sticky-sidebar-nav';
import { PanelCard } from '@/components/ui/panel-card';
import { termsContent } from '@/content/legal';

export const metadata = { title: 'Terms of Service | Mint AMC' };

export default function TermsPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={termsContent.title} subtitle={termsContent.subtitle} size="compact" align="center" />
      <PageSection tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 xl:col-span-3">
            <LegalStickySidebar currentPath="/terms" />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {termsContent.sections.map((s) => (
              <PanelCard key={s.heading} title={s.heading}>
                <p className="type-body text-sm sm:text-base leading-relaxed whitespace-pre-line">{s.body}</p>
              </PanelCard>
            ))}
          </div>
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Transparent Contracts & SLA Governance"
        subtitle="Speak to our legal and commercial team regarding customized enterprise agreements and SLA schedules."
      />
    </MarketingChrome>
  );
}
