'use client';

import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { ServicesStickySidebar } from '@/components/layout/sticky-sidebar-nav';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { getService, servicesBySlug, servicePageLabels } from '@/content/services';
import { siteContent } from '@/content/site';
import { useQuoteModal } from '@/components/ui/request-quote-modal';
import { notFound } from 'next/navigation';
import { CheckCircle2, Clock, ShieldCheck, Wrench, AlertCircle } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  const { openQuoteModal } = useQuoteModal();
  if (!service) notFound();

  return (
    <MarketingChrome>
      <PageHeroBand title={service.title} subtitle={service.shortDescription} align="center" size="compact" />
      <PageSection tone="muted">
        <Breadcrumbs
          items={[
            { label: siteContent.nav.home.label, href: '/' },
            { label: siteContent.nav.services.label, href: '/services' },
            { label: service.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <ServicesStickySidebar currentSlug={params.slug} />
          </div>

          {/* Main Content Body */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {/* Notice / Badge */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-between gap-4 text-xs font-semibold text-emerald-800">
              <div className="flex items-center gap-2">
                <Icon icon={ShieldCheck} size="xs" className="text-brand shrink-0" />
                <span>Active Service SLA: Labour, Field Support & Preventive AMC</span>
              </div>
              <span className="hidden sm:inline bg-emerald-500/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                24/7 Field Ready
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="ui-card p-6 sm:p-8">
                <h2 className="type-card-title text-lg mb-4 pb-2 border-b border-line/60 flex items-center gap-2">
                  <Icon icon={Wrench} size="xs" className="text-brand" />
                  {servicePageLabels.includedHeading}
                </h2>
                <ul className="space-y-2.5 type-body text-sm">
                  {service.included.map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Icon icon={CheckCircle2} size="xs" className="text-brand shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ui-card p-6 sm:p-8">
                <h2 className="type-card-title text-lg mb-4 pb-2 border-b border-line/60 flex items-center gap-2">
                  <Icon icon={Clock} size="xs" className="text-brand" />
                  {servicePageLabels.howHeading}
                </h2>
                <ol className="space-y-3 type-body text-sm">
                  {service.howItWorks.map((s, idx) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-subtle text-brand text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* SLA & Quote Card */}
            <div className="ui-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-surface">
              <div className="space-y-2">
                <h2 className="type-card-title text-lg font-bold">{servicePageLabels.slaHeading}</h2>
                <p className="type-body text-sm text-ink-muted leading-relaxed max-w-xl">{service.slaSummary}</p>
                <div className="inline-flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mt-2 font-medium">
                  <Icon icon={AlertCircle} size="xs" />
                  <span>Hardware Replacement AMC — Coming Soon</span>
                </div>
              </div>
              <Button onClick={() => openQuoteModal(service.title)} size="md" className="shrink-0 w-full sm:w-auto shadow-md">
                {servicePageLabels.cta}
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
      <MarketingCtaBand
        title={`Request a proposal for ${service.title}`}
        subtitle="Get a custom proposal tailored to your infrastructure count, operating hours, and SLA response tier."
      />
    </MarketingChrome>
  );
}
