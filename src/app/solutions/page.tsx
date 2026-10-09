import Link from 'next/link';
import { ArrowRight, Boxes } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { Icon } from '@/components/ui/icon';
import { solutionsContent } from '@/content/solutions';

export const metadata = { title: 'Solutions | Mint AMC' };

export default function SolutionsPage() {
  return (
    <MarketingChrome>
      <PageHeroBand
        title={solutionsContent.heroTitle}
        subtitle={solutionsContent.heroSubtitle}
        align="center"
      />
      <PageSection tone="muted">
        <h2 className="type-section-title mb-6 text-center">{solutionsContent.byIndustryTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutionsContent.industries.map((item) => (
            <Link
              key={item.id}
              href={`/solutions/${item.id}`}
              className="ui-card-interactive p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-subtle text-brand flex items-center justify-center mb-4">
                  <Icon icon={Boxes} size="sm" />
                </div>
                <h3 className="type-card-title text-lg group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="type-body mt-2.5 text-sm">{item.body}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-line flex items-center gap-1 text-xs font-semibold text-brand">
                <span>View solution details</span>
                <Icon icon={ArrowRight} size="xs" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <h2 className="type-section-title mb-6 text-center">{solutionsContent.byNeedTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {solutionsContent.needs.map((item) => (
            <Link
              key={item.id}
              href={`/solutions/${item.id}`}
              className="ui-card-interactive p-6 flex flex-col justify-between group"
            >
              <div>
                <h3 className="type-card-title text-lg group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="type-body mt-2 text-sm">{item.body}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-line flex items-center gap-1 text-xs font-semibold text-brand">
                <span>Explore operational scope</span>
                <Icon icon={ArrowRight} size="xs" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Need an industry-specific SLA architecture?"
        subtitle="Our solutions team designs multi-vendor AMC coverage tailored for enterprise compliance, BFSI security, and multi-branch operations."
      />
    </MarketingChrome>
  );
}
