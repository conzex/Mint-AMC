import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { PanelCard } from '@/components/ui/panel-card';
import { termsContent } from '@/content/legal';

export const metadata = { title: 'Terms of Service | Mint AMC' };

export default function TermsPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={termsContent.title} size="compact" align="left" />
      <PageSection tone="muted" containerClassName="max-w-3xl space-y-4">
        {termsContent.sections.map((s) => (
          <PanelCard key={s.heading} title={s.heading}>
            <p className="type-body">{s.body}</p>
          </PanelCard>
        ))}
      </PageSection>
    </MarketingChrome>
  );
}
