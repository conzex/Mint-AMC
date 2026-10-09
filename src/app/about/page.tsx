import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { aboutContent } from '@/content/about';

export const metadata = { title: '{{META_ABOUT_TITLE}}' };

export default function AboutPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={aboutContent.heroTitle} subtitle={aboutContent.heroSubtitle} align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer className="space-y-6 max-w-3xl">
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.storyTitle}</h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{aboutContent.storyBody}</p>
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.missionTitle}</h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{aboutContent.missionBody}</p>
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.valuesTitle}</h2>
            <ul className="mt-2 text-sm text-text-secondary space-y-1 list-disc list-inside">
              {aboutContent.values.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.leadershipTitle}</h2>
            {aboutContent.leadership.map((l) => (
              <div key={l.name} className="mt-3 border-t border-border-card pt-3 first:border-0 first:pt-0">
                <p className="text-sm font-semibold text-text-primary">{l.name}</p>
                <p className="text-xs text-text-secondary">{l.role}</p>
                <p className="text-sm text-text-secondary mt-1">{l.bio}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.certificationsTitle}</h2>
            <ul className="mt-2 text-sm text-text-secondary space-y-1">
              {aboutContent.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="bg-white border border-border-card rounded p-5">
            <h2 className="text-sm font-bold text-text-primary">{aboutContent.dpiitTitle}</h2>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{aboutContent.dpiitBody}</p>
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
