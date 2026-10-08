import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { CheckmarkCircleSymbol, Building2Symbol } from '@/components/symbols';
import { solutionsData } from '@/content/solutions';

export const metadata = {
  title: 'Tailored AMC Solutions by Industry & Need | Mint AMC',
  description: 'Customized IT AMC frameworks for SMBs, Enterprises, Government, Healthcare, and Education sectors.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeroBand
        title="Tailored IT Maintenance Solutions"
        subtitle="Purpose-built AMC engagement models tailored to your industry standards, compliance mandates, and operational density."
        badge={<Badge variant="navy">Industry & Need Based</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Solutions' }]} />
      </PageContainer>

      {/* Solutions by Industry Section */}
      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="blue" className="mb-2">Industry Solutions</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Sector-Specific AMC Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.industries.map((ind) => (
              <Card key={ind.id} id={ind.id} className="flex flex-col justify-between">
                <div>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Building2Symbol className="w-5 h-5 text-tech-blue shrink-0" />
                    <div>
                      <CardTitle className="text-base">{ind.title}</CardTitle>
                      <span className="text-[11px] text-slate-text">{ind.useCase}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardDescription className="text-xs leading-relaxed mb-4">
                      {ind.description}
                    </CardDescription>

                    <div className="space-y-1.5 pt-2 border-t border-border-gray/60">
                      <div className="text-xs font-semibold text-dark-navy mb-2">Framework Highlights:</div>
                      {ind.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-text">
                          <CheckmarkCircleSymbol className="w-3.5 h-3.5 text-mint-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="mint" className="mb-2">Engagement Models</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Choose How We Partner With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsData.models.map((model) => (
              <Card key={model.id} className="p-6">
                <h3 className="text-lg font-bold text-dark-navy mb-1">{model.title}</h3>
                <p className="text-xs text-tech-blue font-semibold mb-3">Ideal for: {model.idealFor}</p>
                <p className="text-xs text-slate-text leading-relaxed mb-4">{model.description}</p>
                <div className="border-t border-border-gray/60 pt-3 space-y-1.5">
                  {model.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-dark-navy font-medium">
                      <CheckmarkCircleSymbol className="w-4 h-4 text-mint-green shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Find the Right Engagement Model for Your Organization"
        subtitle="Our infrastructure architects will evaluate your equipment density and recommend the optimal AMC tier."
      />
    </>
  );
}
