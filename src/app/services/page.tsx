import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { megaMenuColumns } from '@/content/mega-menu';
import { Icon } from '@/components/ui/icon';
import { TextLink } from '@/components/ui/text-link';

export const metadata = { title: 'Services | Mint AMC' };

export default function ServicesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title="IT AMC Services" subtitle="Structured annual maintenance across end-user, network, infrastructure, and monitoring portfolios." align="center" />
      <PageSection tone="muted">
        <div className="grid sm:grid-cols-2 gap-6">
          {megaMenuColumns.map((col) => (
            <div key={col.id} className="ui-card-interactive p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-line/60">
                <div className="w-10 h-10 rounded-lg bg-brand-subtle text-brand flex items-center justify-center shrink-0">
                  <Icon icon={col.icon} size="md" />
                </div>
                <h2 className="type-card-title text-lg">{col.heading}</h2>
              </div>
              <ul className="space-y-2.5 type-body">
                {col.links.map((link) => (
                  <li key={link.slug}>
                    <TextLink href={`/services/${link.slug}`} className="font-medium">
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Ready to upgrade your enterprise IT maintenance?"
        subtitle="Consult our field engineering team to build a tailored AMC agreement with custom SLAs and optional 24/7 NOC monitoring."
      />
    </MarketingChrome>
  );
}
