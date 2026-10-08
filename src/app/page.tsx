import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import TrustBar from '@/components/ui/TrustBar';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import {
  DesktopComputerSymbol,
  LaptopComputerSymbol,
  ServerRackSymbol,
  NetworkSymbol,
  PrinterSymbol,
  ShieldHalfSymbol,
  ArrowRightSymbol,
  CheckmarkCircleSymbol,
  MapSymbol,
} from '@/components/symbols';
import { homeData } from '@/content/home';
import { serviceCategories } from '@/content/services';

export default function HomePage() {
  const getServiceIcon = (iconName: string) => {
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
      default:
        return <ShieldHalfSymbol className="w-6 h-6 text-tech-blue" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeroBand
        size="large"
        badge={
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="mint">{homeData.hero.badge}</Badge>
            <Badge variant="navy">{homeData.hero.parentBadge}</Badge>
          </div>
        }
        title={homeData.hero.headline}
        subtitle={homeData.hero.subheadline}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-tech-blue text-white font-medium rounded hover:bg-tech-blue-hover transition-colors shadow-xs inline-flex items-center justify-center gap-2"
          >
            <span>{homeData.hero.primaryCtaLabel}</span>
            <ArrowRightSymbol className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-border-gray text-dark-navy font-medium rounded hover:border-tech-blue transition-colors"
          >
            {homeData.hero.secondaryCtaLabel}
          </Link>
        </div>
      </PageHeroBand>

      {/* Trust Bar */}
      <TrustBar />

      {/* Metric Tiles Section */}
      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-cool-white border border-border-gray rounded-md text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-tech-blue tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-dark-navy mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-text mt-1">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Service Cards Grid (6 Services) */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="blue" className="mb-2">Enterprise AMC Offerings</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Comprehensive IT Maintenance Services
            </h2>
            <p className="text-slate-text mt-2 text-sm">
              Tailored AMC packages for corporate infrastructures, branch networks, and data centre deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.slice(0, 6).map((service) => (
              <Card key={service.slug} className="flex flex-col justify-between">
                <div>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2.5 bg-tech-blue/10 rounded-md">
                      {getServiceIcon(service.iconName)}
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
                    <ul className="mt-4 space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-text">
                          <CheckmarkCircleSymbol className="w-4 h-4 text-mint-green shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <div className="p-4 border-t border-border-gray/60 bg-cool-white/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-tech-blue hover:underline"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRightSymbol className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-border-gray text-dark-navy font-medium text-sm rounded hover:border-tech-blue transition-colors"
            >
              <span>View All 8 Service Categories</span>
              <ArrowRightSymbol className="w-4 h-4" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="navy" className="mb-2">Operational Workflow</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              How Mint AMC Service Onboarding Works
            </h2>
            <p className="text-slate-text mt-2 text-sm">
              Structured 4-step process to audit, transition, and maintain your IT environment seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {homeData.timeline.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-cool-white border border-border-gray rounded-md relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-tech-blue text-white font-bold flex items-center justify-center text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-semibold text-dark-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="mint" className="mb-2">Client Trust</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Enterprise Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeData.testimonials.map((t, index) => (
              <Card key={index} className="p-6 flex flex-col justify-between">
                <p className="text-sm text-slate-text italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-border-gray/60 pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-tech-blue/10 text-tech-blue font-bold flex items-center justify-center text-xs shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-dark-navy">{t.author}</div>
                    <div className="text-[11px] text-slate-text">{t.role}, {t.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Multi-Region Coverage Map */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="blue">National Reach</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
                {homeData.coverage.title}
              </h2>
              <p className="text-sm text-slate-text leading-relaxed">
                {homeData.coverage.subtitle}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {homeData.coverage.regions.map((region, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-cool-white border border-border-gray rounded text-xs font-semibold text-dark-navy">
                    <MapSymbol className="w-4 h-4 text-tech-blue shrink-0" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 p-8 bg-cool-white border border-border-gray rounded-md flex items-center justify-center min-h-[260px] text-center">
              <div>
                <MapSymbol className="w-16 h-16 text-tech-blue mx-auto mb-3" />
                <h3 className="text-lg font-bold text-dark-navy">Multi-City Rapid On-Site Dispatch</h3>
                <p className="text-xs text-slate-text max-w-md mx-auto mt-1">
                  Engineers stationed across major metro nodes for sub-2-hour on-site dispatch.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title={homeData.ctaBanner.headline}
        subtitle={homeData.ctaBanner.subheadline}
        primaryBtnText={homeData.ctaBanner.primaryBtn}
        secondaryBtnText={homeData.ctaBanner.secondaryBtn}
      />
    </>
  );
}
