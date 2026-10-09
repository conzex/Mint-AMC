import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { PanelCard } from '@/components/ui/panel-card';
import { aboutContent } from '@/content/about';

export const metadata = { title: 'About | Mint AMC' };

export default function AboutPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={aboutContent.heroTitle} subtitle={aboutContent.heroSubtitle} align="left" />
      <PageSection tone="muted" containerClassName="space-y-4 max-w-3xl">
        <PanelCard title={aboutContent.storyTitle}>
          <p className="type-body">{aboutContent.storyBody}</p>
        </PanelCard>
        <PanelCard title={aboutContent.missionTitle}>
          <p className="type-body">{aboutContent.missionBody}</p>
        </PanelCard>
        <PanelCard title={aboutContent.valuesTitle}>
          <ul className="type-body space-y-1 list-disc list-inside">
            {aboutContent.values.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </PanelCard>
        <PanelCard title={aboutContent.leadershipTitle}>
          {aboutContent.leadership.map((l) => (
            <div key={l.name} className="mt-3 border-t border-line pt-3 first:border-0 first:pt-0 first:mt-0">
              <p className="type-card-title">{l.name}</p>
              <p className="type-caption">{l.role}</p>
              <p className="type-body mt-1">{l.bio}</p>
            </div>
          ))}
        </PanelCard>
        <PanelCard title={aboutContent.certificationsTitle}>
          <ul className="type-body space-y-1">
            {aboutContent.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </PanelCard>
        <PanelCard title={aboutContent.dpiitTitle}>
          <p className="type-body">{aboutContent.dpiitBody}</p>
        </PanelCard>
      </PageSection>
    </MarketingChrome>
  );
}
