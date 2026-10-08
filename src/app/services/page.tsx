import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import {
  DesktopComputerSymbol,
  LaptopComputerSymbol,
  ServerRackSymbol,
  NetworkSymbol,
  PrinterSymbol,
  ShieldHalfSymbol,
  ClockSymbol,
  ArrowRightSymbol,
  CheckmarkCircleSymbol,
} from '@/components/symbols';
import { serviceCategories } from '@/content/services';

export const metadata = {
  title: 'IT AMC Service Categories | Mint AMC',
  description: 'Explore Mint AMC annual maintenance contract categories including hardware, servers, networking, data centre, and 24/7 NOC monitoring.',
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'desktop':
        return <DesktopComputerSymbol className="w-6 h-6 text-tech-blue" />;
      case 'laptop':
        return <LaptopComputerSymbol className="w-6 h-6 text-tech-blue" />;
      case 'server':
        return <ServerRackSymbol className="w-6 h-6 text-tech-blue" />;
      case 'network':
        return <NetworkSymbol className="w-6 h-6 text-tech-blue" />;
      case 'printer':
        return <PrinterSymbol className="w-6 h-6 text-tech-blue" />;
      case 'clock':
        return <ClockSymbol className="w-6 h-6 text-tech-blue" />;
      default:
        return <ShieldHalfSymbol className="w-6 h-6 text-tech-blue" />;
    }
  };

  return (
    <>
      <PageHeroBand
        title="Enterprise IT AMC Services"
        subtitle="Complete lifecycle maintenance, proactive monitoring, and guaranteed SLA response times across all IT infrastructure domains."
        badge={<Badge variant="blue">Service Catalog</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </PageContainer>

      {/* Grid of 8 Service Categories */}
      <section className="py-12 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="flex flex-col justify-between">
                <div>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2.5 bg-tech-blue/10 rounded-md">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{service.title}</CardTitle>
                      <Badge variant="mint" className="mt-1 text-[10px]">Guaranteed SLA</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardDescription className="text-sm">
                      {service.shortDescription}
                    </CardDescription>

                    <div className="mt-4 pt-4 border-t border-border-gray/60">
                      <div className="text-xs font-semibold text-dark-navy mb-2">Key Deliverables:</div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-text">
                            <CheckmarkCircleSymbol className="w-3.5 h-3.5 text-mint-green shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
                <div className="p-4 border-t border-border-gray/60 bg-cool-white/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-tech-blue hover:underline"
                  >
                    <span>View Full Specifications</span>
                    <ArrowRightSymbol className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Need a Custom Multi-Service AMC Package?"
        subtitle="Combine desktop, server, network, and cloud maintenance into a single unified SLA agreement."
        primaryBtnText="Request AMC Proposal"
      />
    </>
  );
}
