import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { legalData } from '@/content/legal';

export const metadata = {
  title: 'Privacy Policy | Mint AMC',
  description: 'Privacy Policy for Mint AMC, a division of CONZEX GLOBAL PRIVATE LIMITED.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeroBand
        title={legalData.privacy.title}
        subtitle={`Last Updated: ${legalData.privacy.lastUpdated}`}
        badge={<Badge variant="navy">Legal Policy</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      </PageContainer>

      <section className="py-12 bg-white">
        <PageContainer>
          <div className="max-w-3xl mx-auto space-y-8 text-sm text-slate-text leading-relaxed">
            {legalData.privacy.sections.map((sec, i) => (
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
