import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CheckmarkCircleSymbol, ShieldCheckSymbol, ClockSymbol, ArrowRightSymbol } from '@/components/symbols';
import { serviceCategories } from '@/content/services';

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceCategories.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | Mint AMC' };

  return {
    title: `${service.title} | Mint AMC IT Services`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceCategories.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeroBand
        title={service.title}
        subtitle={service.shortDescription}
        badge={<Badge variant="mint">Service Specification</Badge>}
      />

      <PageContainer>
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />
      </PageContainer>

      <section className="py-12 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Body */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-dark-navy mb-3">Service Overview</h2>
                <p className="text-sm text-slate-text leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dark-navy mb-4">Key Enterprise Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="p-4 bg-cool-white border border-border-gray rounded flex items-start gap-3">
                      <CheckmarkCircleSymbol className="w-5 h-5 text-mint-green shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-dark-navy">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dark-navy mb-4">Scope of Deliverables</h3>
                <Card>
                  <CardContent className="p-5 space-y-3">
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-text pb-3 border-b border-border-gray/50 last:border-0 last:pb-0">
                        <ShieldCheckSymbol className="w-4 h-4 text-tech-blue shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dark-navy mb-4">Service Level Agreement (SLA) Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.slaOptions.map((sla, i) => (
                    <div key={i} className="p-4 bg-white border border-border-gray rounded-md shadow-xs flex items-start gap-3">
                      <ClockSymbol className="w-5 h-5 text-tech-blue shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-dark-navy">Option {i + 1}</div>
                        <div className="text-xs text-slate-text mt-0.5">{sla}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Quick Action Box */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-base">Request Proposal for {service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-xs">
                  <div>
                    <span className="font-semibold text-dark-navy block">Target Audience:</span>
                    <span className="text-slate-text">{service.targetAudience}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dark-navy block mb-1">Standard Support Hours:</span>
                    <Badge variant="blue">24/7/365 NOC Coverage Available</Badge>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.slug)}`}
                      className="w-full py-2.5 bg-tech-blue text-white font-medium rounded text-center block hover:bg-tech-blue-hover transition-colors"
                    >
                      Get Custom SLA Quote
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title={`Get Guaranteed Maintenance for ${service.title}`}
        subtitle="Contact our NOC engineering team for a site assessment and customized SLA quote."
      />
    </>
  );
}
