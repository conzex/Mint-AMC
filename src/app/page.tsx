'use client';

import React, { useState } from 'react';
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
  ClockSymbol,
  ArrowRightSymbol,
  CheckmarkCircleSymbol,
  MapSymbol,
  Building2Symbol,
  ShieldCheckSymbol,
} from '@/components/symbols';
import { homeData } from '@/content/home';
import { serviceCategories } from '@/content/services';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'endpoint' | 'infrastructure' | 'datacentre'>('all');

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
      case 'clock':
        return <ClockSymbol className="w-6 h-6 text-tech-blue" />;
      default:
        return <ShieldHalfSymbol className="w-6 h-6 text-tech-blue" />;
    }
  };

  const filteredServices = serviceCategories.filter((s) => {
    if (activeTab === 'endpoint') return s.slug === 'hardware-amc' || s.slug === 'software-support' || s.slug === 'printer-peripheral';
    if (activeTab === 'infrastructure') return s.slug === 'network-management' || s.slug === 'server-storage' || s.slug === 'cloud-support';
    if (activeTab === 'datacentre') return s.slug === 'data-centre' || s.slug === '247-monitoring';
    return true;
  });

  return (
    <>
      {/* Hero Section — Montagu Style High Impact Headline */}
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

      {/* Metric Stat Tiles Bar */}
      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-cool-white border border-border-gray rounded-md text-center hover:border-tech-blue/50 transition-colors"
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

      {/* Montagu-style Filterable Capabilities Section */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Badge variant="blue" className="mb-2">Infrastructure Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
                Enterprise Service Domains
              </h2>
              <p className="text-slate-text text-sm mt-1">
                Explore our full-stack maintenance coverage from endpoints to hybrid cloud data centres.
              </p>
            </div>

            {/* Interactive Domain Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-border-gray rounded-md text-xs font-medium self-start md:self-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'all' ? 'bg-tech-blue text-white font-semibold' : 'text-slate-text hover:text-dark-navy'
                }`}
              >
                All Domains
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('endpoint')}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'endpoint' ? 'bg-tech-blue text-white font-semibold' : 'text-slate-text hover:text-dark-navy'
                }`}
              >
                Endpoints & Devices
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('infrastructure')}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'infrastructure' ? 'bg-tech-blue text-white font-semibold' : 'text-slate-text hover:text-dark-navy'
                }`}
              >
                Network & Servers
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('datacentre')}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'datacentre' ? 'bg-tech-blue text-white font-semibold' : 'text-slate-text hover:text-dark-navy'
                }`}
              >
                Data Centre & NOC
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.slug} className="flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2.5 bg-tech-blue/10 rounded-md shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{service.title}</CardTitle>
                      <Badge variant="mint" className="mt-1 text-[10px]">Guaranteed SLA</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>

                    <div className="mt-4 pt-4 border-t border-border-gray/60">
                      <div className="text-xs font-semibold text-dark-navy mb-2">Deliverable Highlights:</div>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 2).map((deliv, i) => (
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
                    <span>View Specifications</span>
                    <ArrowRightSymbol className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Montagu-style "Our Approach" Process Timeline */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="navy" className="mb-2">Operational Execution</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Our AMC Service Delivery Approach
            </h2>
            <p className="text-slate-text mt-2 text-sm">
              Structured 4-phase transition methodology ensures 100% operational continuity and zero downtime during onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {homeData.timeline.map((step, index) => (
              <Card key={index} className="p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-tech-blue text-white font-bold flex items-center justify-center text-xs">
                      {step.step}
                    </span>
                    <Badge variant="gray">Phase {index + 1}</Badge>
                  </div>
                  <h3 className="text-base font-semibold text-dark-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Enterprise Case Studies & Client Trust */}
      <section className="py-16 bg-cool-white/50 border-b border-border-gray">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="mint" className="mb-2">Client Success & Case Studies</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-navy tracking-tight">
              Trusted by Corporate IT Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeData.testimonials.map((t, index) => (
              <Card key={index} className="p-6 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="blue">Verified Client</Badge>
                    <ShieldCheckSymbol className="w-4 h-4 text-mint-green" />
                  </div>
                  <p className="text-sm text-slate-text italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
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

      {/* Multi-Region Coverage Map & Parent Entity Synergy */}
      <section className="py-16 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="blue">National Dispatch Network</Badge>
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
                <Building2Symbol className="w-16 h-16 text-tech-blue mx-auto mb-3" />
                <h3 className="text-lg font-bold text-dark-navy">DPIIT Recognised Startup Identity</h3>
                <p className="text-xs text-slate-text max-w-md mx-auto mt-1">
                  Operating under CONZEX GLOBAL PRIVATE LIMITED with nationwide technical dispatch hubs.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner
        title={homeData.ctaBanner.headline}
        subtitle={homeData.ctaBanner.subheadline}
        primaryBtnText={homeData.ctaBanner.primaryBtn}
        secondaryBtnText={homeData.ctaBanner.secondaryBtn}
      />
    </>
  );
}
