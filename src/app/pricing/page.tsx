import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import ComparisonTable from '@/components/ui/ComparisonTable';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { CheckmarkCircleSymbol } from '@/components/symbols';
import { pricingData } from '@/content/pricing';

export const metadata = {
  title: 'Transparent IT AMC Pricing Tiers & Plans | Mint AMC',
  description: 'Three-tier IT AMC pricing plans: Essential, Professional, and Enterprise with full feature breakdown and SLA comparison.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeroBand
        title="Predictable, Transparent IT AMC Pricing"
        subtitle="Scalable annual maintenance contracts with fixed SLAs, flexible payment schedules, and zero hidden costs."
        badge={<Badge variant="mint">Pricing & Plans</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Pricing' }]} />
      </PageContainer>

      {/* Pricing Cards Section */}
      <section className="py-12 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingData.tiers.map((tier) => (
              <Card
                key={tier.id}
                className={`flex flex-col justify-between relative ${
                  tier.isPopular ? 'border-tech-blue border-2 shadow-md' : ''
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-tech-blue text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    Most Popular Choice
                  </div>
                )}
                <div>
                  <CardHeader className="text-center pt-8">
                    <Badge variant={tier.isPopular ? 'blue' : 'gray'} className="mb-2">
                      {tier.badge}
                    </Badge>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-extrabold text-dark-navy">
                        {tier.pricePlaceholder}
                      </span>
                      <span className="text-xs text-slate-text block mt-0.5">{tier.period}</span>
                    </div>
                    <CardDescription className="text-xs mt-3">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-4">
                    <div className="text-xs font-semibold text-dark-navy mb-3">Included Capabilities:</div>
                    <ul className="space-y-2">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-text">
                          <CheckmarkCircleSymbol className="w-4 h-4 text-mint-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Link
                    href={tier.ctaHref}
                    className={`w-full py-2.5 text-center text-xs font-semibold rounded transition-colors ${
                      tier.isPopular
                        ? 'bg-tech-blue text-white hover:bg-tech-blue-hover'
                        : 'bg-white border border-border-gray text-dark-navy hover:border-tech-blue'
                    }`}
                  >
                    {tier.ctaLabel}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-cool-white/50 border-t border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="blue" className="mb-2">Feature Breakdown</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Detailed Plan Feature Comparison
            </h2>
          </div>

          <ComparisonTable features={pricingData.comparisonMatrix} />
        </PageContainer>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="navy" className="mb-2">Frequently Asked Questions</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Common Questions About AMC Contracts
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion items={pricingData.faqs} />
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Have Custom Multi-Location Pricing Requirements?"
        subtitle="Our team provides consolidated enterprise billing and customized SLAs across national branch offices."
      />
    </>
  );
}
