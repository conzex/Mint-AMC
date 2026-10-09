import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { megaMenuColumns } from '@/content/mega-menu';
import { Icon } from '@/components/ui/icon';
import { TextLink } from '@/components/ui/text-link';

export const metadata = { title: 'Services | Mint AMC' };

export default function ServicesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title="IT AMC services" subtitle="Structured annual maintenance across end-user, network, infrastructure, and monitoring portfolios." align="left" />
      <PageSection tone="muted">
        <div className="grid sm:grid-cols-2 gap-4">
          {megaMenuColumns.map((col) => (
            <div key={col.id} className="ui-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon={col.icon} size="md" className="text-accent" />
                <h2 className="type-card-title">{col.heading}</h2>
              </div>
              <ul className="space-y-2 type-body">
                {col.links.map((link) => (
                  <li key={link.slug}>
                    <TextLink href={`/services/${link.slug}`}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>
    </MarketingChrome>
  );
}
