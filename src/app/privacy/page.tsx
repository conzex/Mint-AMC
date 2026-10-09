import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { privacyContent } from '@/content/legal';

export const metadata = { title: '{{META_PRIVACY_TITLE}}' };

export default function PrivacyPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={privacyContent.title} size="compact" align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer className="max-w-3xl space-y-4">
          {privacyContent.sections.map((s) => (
            <div key={s.heading} className="bg-white border border-border-card rounded p-5">
              <h2 className="text-sm font-bold text-text-primary">{s.heading}</h2>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
