import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Building2Symbol, ShieldCheckSymbol, DpiitBadge } from '@/components/symbols';
import { aboutData } from '@/content/about';
import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'About Mint AMC | Division of CONZEX GLOBAL PRIVATE LIMITED',
  description: 'Learn about Mint AMC, the specialized IT maintenance division of CONZEX GLOBAL PRIVATE LIMITED, DPIIT recognised entity.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeroBand
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
        badge={<Badge variant="navy">Corporate Profile</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </PageContainer>

      {/* Story Section */}
      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="max-w-3xl mx-auto space-y-4 text-sm text-slate-text leading-relaxed">
            <h2 className="text-2xl font-bold text-dark-navy mb-4">{aboutData.story.title}</h2>
            {aboutData.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Parent Entity & DPIIT Recognition */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="max-w-4xl mx-auto bg-white border border-border-gray rounded-md p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-gray pb-6">
              <div>
                <Badge variant="blue" className="mb-2">Parent Entity Structure</Badge>
                <h3 className="text-xl font-bold text-dark-navy">{aboutData.parentStructure.title}</h3>
                <p className="text-xs text-slate-text mt-1">{aboutData.parentStructure.description}</p>
              </div>
              <DpiitBadge />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-cool-white border border-border-gray rounded">
                <span className="font-bold text-dark-navy block">Legal Parent Entity:</span>
                <span className="text-slate-text font-medium">{aboutData.parentStructure.parentEntity}</span>
              </div>
              <div className="p-4 bg-cool-white border border-border-gray rounded">
                <span className="font-bold text-dark-navy block">Corporate Identity Number (CIN):</span>
                <span className="text-slate-text font-mono">{aboutData.parentStructure.cin}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-dark-navy uppercase tracking-wider mb-3">Group Synergy & Capabilities</h4>
              <div className="space-y-2">
                {aboutData.parentStructure.synergyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-text">
                    <ShieldCheckSymbol className="w-4 h-4 text-mint-green shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-dark-navy mb-2">{aboutData.missionVision.missionTitle}</h3>
              <p className="text-xs text-slate-text leading-relaxed">{aboutData.missionVision.missionDesc}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-dark-navy mb-2">{aboutData.missionVision.visionTitle}</h3>
              <p className="text-xs text-slate-text leading-relaxed">{aboutData.missionVision.visionDesc}</p>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="mint" className="mb-2">Operating Principles</Badge>
            <h2 className="text-2xl font-bold text-dark-navy tracking-tight">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((v, i) => (
              <Card key={i} className="p-5">
                <h4 className="text-base font-bold text-dark-navy mb-1">{v.title}</h4>
                <p className="text-xs text-slate-text leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Partner with a DPIIT Recognised IT Maintenance Leader"
        subtitle="Contact our corporate team to review our parent entity credentials and service framework."
      />
    </>
  );
}
