import Link from 'next/link';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { megaMenuColumns } from '@/content/mega-menu';
import { getService, servicesPageContent } from '@/content/services';

export const metadata = { title: '{{META_SERVICES_TITLE}}' };

export default function ServicesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={servicesPageContent.heroTitle} subtitle={servicesPageContent.heroSubtitle} align="left" />
      <section className="py-12 bg-bg-body">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-6">
            {megaMenuColumns.map((col) => (
              <div key={col.id} className="bg-white border border-border-card rounded p-5">
                <div className="flex items-center gap-2 mb-3">
                  <col.icon className="w-5 h-5 text-dell-blue" />
                  <h2 className="text-sm font-bold text-text-primary">{col.heading}</h2>
                </div>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link.slug}>
                      <Link href={`/services/${link.slug}`} className="text-dell-blue font-semibold hover:underline">
                        {link.label}
                      </Link>
                      <p className="text-xs text-text-secondary mt-0.5">{getService(link.slug)?.shortDescription}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
