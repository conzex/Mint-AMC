import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ShieldCheckSymbol, ClockSymbol } from '@/components/symbols';
import { legalData } from '@/content/legal';

export const metadata = {
  title: 'Standard Service Level Agreement (SLA) Overview | Mint AMC',
  description: 'Review Mint AMC standard SLA benchmarks, response time commitments, resolution guarantees, and exclusion guidelines.',
};

export default function SlaPage() {
  return (
    <>
      <PageHeroBand
        title={legalData.slaTemplate.title}
        subtitle={legalData.slaTemplate.overview}
        badge={<Badge variant="mint">SLA Governance Version {legalData.slaTemplate.version}</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'SLA Framework' }]} />
      </PageContainer>

      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-xl font-bold text-dark-navy mb-4">Core SLA Benchmark Commitments</h2>
              <div className="bg-white border border-border-gray rounded-md overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-cool-white border-b border-border-gray text-dark-navy">
                      <th className="p-4 font-semibold">Service Level Metric</th>
                      <th className="p-4 font-semibold">Contractual Target</th>
                      <th className="p-4 font-semibold">Credit & Penalty Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-gray/60">
                    {legalData.slaTemplate.metrics.map((m, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cool-white/30'}>
                        <td className="p-4 font-bold text-dark-navy flex items-center gap-2">
                          <ClockSymbol className="w-4 h-4 text-tech-blue" />
                          <span>{m.metric}</span>
                        </td>
                        <td className="p-4 font-semibold text-tech-blue">{m.target}</td>
                        <td className="p-4 text-slate-text">{m.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-dark-navy mb-3">SLA Exclusions & Conditions</h3>
              <Card>
                <CardContent className="p-5 space-y-2">
                  {legalData.slaTemplate.exclusions.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-text">
                      <ShieldCheckSymbol className="w-4 h-4 text-tech-blue shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Need a Customized Master Services & SLA Agreement?"
        subtitle="Our legal and technical teams work with your procurement department to finalize custom terms."
      />
    </>
  );
}
