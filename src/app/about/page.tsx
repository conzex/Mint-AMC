import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { PanelCard } from '@/components/ui/panel-card';
import { aboutContent } from '@/content/about';

export const metadata = { title: 'About | Mint AMC' };

export default function AboutPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={aboutContent.heroTitle} subtitle={aboutContent.heroSubtitle} align="center" />
      <PageSection tone="muted" containerClassName="space-y-6 max-w-4xl">
        <PanelCard title={aboutContent.storyTitle}>
          <p className="type-body text-base leading-relaxed">{aboutContent.storyBody}</p>
        </PanelCard>
        <PanelCard title={aboutContent.missionTitle}>
          <p className="type-body text-base leading-relaxed">{aboutContent.missionBody}</p>
        </PanelCard>
        <PanelCard title={aboutContent.valuesTitle}>
          <ul className="type-body space-y-2 list-disc list-inside">
            {aboutContent.values.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </PanelCard>
        <PanelCard title={aboutContent.leadershipTitle}>
          {aboutContent.leadership.map((l) => (
            <div key={l.name} className="mt-4 border-t border-line/60 pt-4 first:border-0 first:pt-0 first:mt-0">
              <p className="type-card-title text-base">{l.name}</p>
              <p className="type-caption font-semibold text-brand">{l.role}</p>
              <p className="type-body mt-1.5">{l.bio}</p>
            </div>
          ))}
        </PanelCard>
        <PanelCard title={aboutContent.certificationsTitle}>
          <ul className="type-body space-y-2">
            {aboutContent.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </PanelCard>
      </PageSection>
      <MarketingCtaBand
        title="Backed by Conzex Global Infrastructure"
        subtitle="Empowering enterprise operations with structured AMC field engineering, nationwide logistics, and 24/7 technical helpdesk support."
      />
    </MarketingChrome>
  );
}
