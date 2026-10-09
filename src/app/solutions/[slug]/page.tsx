'use client';

import { notFound } from 'next/navigation';
import { CheckCircle2, ShieldCheck, ArrowRight, Layers, HelpCircle, PhoneCall, AlertCircle } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { SolutionsStickySidebar } from '@/components/layout/sticky-sidebar-nav';
import { PanelCard } from '@/components/ui/panel-card';
import FaqAccordion from '@/components/ui/faq-accordion';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { solutionDetailsMap } from '@/content/solutions';
import { allSolutionSlugs } from '@/content/mega-menu';
import { siteContent } from '@/content/site';
import { useQuoteModal } from '@/components/ui/request-quote-modal';

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const solution = solutionDetailsMap[slug];
  const { openQuoteModal } = useQuoteModal();

  if (!solution) {
    notFound();
  }

  return (
    <MarketingChrome>
      <PageHeroBand
        title={solution.title}
        subtitle={solution.heroLead}
        align="center"
        badge={
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-subtle text-brand rounded-full text-xs font-semibold mb-6 border border-brand/20">
            <Icon icon={ShieldCheck} size="xs" />
            {solution.category}
          </div>
        }
      >
        <Button onClick={() => openQuoteModal(solution.title)} size="md" className="rounded-lg shadow-md">
          Consult Solution Architect
          <Icon icon={ArrowRight} size="xs" />
        </Button>
      </PageHeroBand>

      <PageSection tone="muted">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Solutions', href: '/solutions' },
              { label: solution.title },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SolutionsStickySidebar currentSlug={slug} />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            <PanelCard title="Solution Highlights & Architecture">
              <p className="type-body text-base mb-6 text-ink-muted leading-relaxed">
                {solution.summary}
              </p>
              <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Core Capabilities</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3.5 bg-surface-muted rounded-lg border border-line">
                    <Icon icon={CheckCircle2} size="sm" className="text-brand shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </PanelCard>

            <PanelCard title="Key Deliverables & Scope">
              <ul className="space-y-3">
                {solution.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2" />
                    <span className="font-medium text-ink">{del}</span>
                  </li>
                ))}
              </ul>
            </PanelCard>

            <div className="grid sm:grid-cols-2 gap-6">
              <PanelCard title="Recommended SLA Tier">
                <div className="p-4 bg-brand-subtle/60 rounded-lg border border-brand/20 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand block mb-1">Target SLA Level</span>
                  <p className="text-lg font-bold text-ink">{solution.slaTier}</p>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  All solution packages include custom response guarantees, remote NOC integration, and dedicated escalation bridges.
                </p>
                <Button onClick={() => openQuoteModal(solution.title)} size="md" className="w-full rounded-lg">
                  <Icon icon={PhoneCall} size="xs" />
                  Discuss SLA Scope
                </Button>
              </PanelCard>

              <PanelCard title="Active Coverage & Notice">
                <div className="space-y-3">
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800">
                    Active: Comprehensive Labour, Service & Field AMC
                  </div>
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs font-medium text-amber-900 flex items-start gap-2">
                    <Icon icon={AlertCircle} size="xs" className="text-amber-600 shrink-0 mt-0.5" />
                    <span>Hardware Replacement AMC (Spares Included) — Coming Soon</span>
                  </div>
                </div>
              </PanelCard>
            </div>

            {solution.faqs && solution.faqs.length > 0 && (
              <PanelCard title="Solution FAQs">
                <FaqAccordion items={solution.faqs} />
              </PanelCard>
            )}
          </div>
        </div>
      </PageSection>

      <MarketingCtaBand
        title={`Get a Tailored Proposal for ${solution.title}`}
        subtitle="Speak with our solutions engineering team to review your asset inventory and SLA requirements."
      >
        <Button onClick={() => openQuoteModal(solution.title)} variant="onDark" size="md" className="mx-auto rounded-lg shadow-lg">
          Request Commercial Proposal
          <Icon icon={ArrowRight} size="xs" />
        </Button>
      </MarketingCtaBand>
    </MarketingChrome>
  );
}
