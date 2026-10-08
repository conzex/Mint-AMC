import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { legalData } from '@/content/legal';

export const metadata = {
  title: 'Terms of Service | Mint AMC',
  description: 'Terms of Service governing Annual Maintenance Contracts provided by Mint AMC & CONZEX GLOBAL PRIVATE LIMITED.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeroBand
        title={legalData.terms.title}
        subtitle={`Last Updated: ${legalData.terms.lastUpdated}`}
        badge={<Badge variant="navy">Terms & Conditions</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      </PageContainer>

      <section className="py-12 bg-white">
        <PageContainer>
          <div className="max-w-3xl mx-auto space-y-8 text-sm text-slate-text leading-relaxed">
            {legalData.terms.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h2 className="text-lg font-bold text-dark-navy">{sec.heading}</h2>
                <p>{sec.body}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
