import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { slaContent } from '@/content/legal';

export const metadata = { title: '{{META_SLA_TITLE}}' };

export default function SlaPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={slaContent.title} subtitle={slaContent.intro} size="compact" align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer className="max-w-3xl space-y-4">
          {slaContent.sections.map((s) => (
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
