import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { ClockSymbol, ShieldCheckSymbol, Building2Symbol, CheckmarkCircleSymbol } from '@/components/symbols';
import { whyData } from '@/content/why';

export const metadata = {
  title: 'Why Choose Mint AMC | SLAs, OEM Alliances & Response Guarantees',
  description: 'Discover the Mint AMC difference: guaranteed response SLAs, certified engineers, multi-OEM support, and 24/7 NOC backup.',
};

export default function WhyMintAmcPage() {
  return (
    <>
      <PageHeroBand
        title="Why Enterprise Leaders Choose Mint AMC"
        subtitle="Unmatched response speed, strict SLA accountability, multi-brand OEM expertise, and continuous NOC monitoring."
        badge={<Badge variant="mint">Differentiators & SLAs</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Why Mint AMC' }]} />
      </PageContainer>

      {/* Differentiators Grid */}
      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyData.differentiators.map((diff, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-tech-blue/10 rounded-md">
                    <ShieldCheckSymbol className="w-6 h-6 text-tech-blue" />
                  </div>
                  <Badge variant="blue">{diff.metric}</Badge>
                </div>
                <h3 className="text-lg font-bold text-dark-navy mb-2">{diff.title}</h3>
                <p className="text-xs text-slate-text leading-relaxed">{diff.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* SLA Matrix Table */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="navy" className="mb-2">SLA Matrix</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              {whyData.slas.title}
            </h2>
            <p className="text-xs text-slate-text mt-2">{whyData.slas.description}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-border-gray rounded-md overflow-hidden shadow-xs">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-cool-white border-b border-border-gray text-dark-navy">
                  <th className="p-4 font-semibold">Incident Severity</th>
                  <th className="p-4 font-semibold">Response Time SLA</th>
                  <th className="p-4 font-semibold">Resolution Target SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-gray/60 text-xs">
                {whyData.slas.tiers.map((sla, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cool-white/30'}>
                    <td className="p-4 font-bold text-dark-navy flex items-center gap-2">
                      <ClockSymbol className="w-4 h-4 text-tech-blue" />
                      <span>{sla.priority}</span>
                    </td>
                    <td className="p-4 font-semibold text-tech-blue">{sla.responseTime}</td>
                    <td className="p-4 text-slate-text">{sla.resolutionTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageContainer>
      </section>

      {/* OEM Partnerships */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="mint" className="mb-2">Hardware & Software Alliances</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              {whyData.oemPartnerships.title}
            </h2>
            <p className="text-xs text-slate-text mt-2">{whyData.oemPartnerships.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {whyData.oemPartnerships.partners.map((partner, i) => (
              <div key={i} className="p-4 bg-cool-white border border-border-gray rounded text-center">
                <Building2Symbol className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <div className="text-xs font-bold text-dark-navy">{partner}</div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Experience SLA-Driven IT Maintenance"
        subtitle="Speak with an engineer to audit your infrastructure health and lock in guaranteed response SLAs."
      />
    </>
  );
}
