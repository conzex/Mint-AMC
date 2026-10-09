import Link from 'next/link';
import { notFound } from 'next/navigation';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { getService, servicesBySlug, servicePageLabels } from '@/content/services';
import { siteContent } from '@/content/site';

export function generateStaticParams() {
  return Object.keys(servicesBySlug).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  return { title: service?.title ?? '{{META_SERVICE_TITLE}}' };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <MarketingChrome>
      <PageHeroBand title={service.title} subtitle={service.shortDescription} align="left" size="compact" />
      <section className="py-10 bg-bg-body">
        <PageContainer>
          <Breadcrumbs
            items={[
              { label: siteContent.nav.home.label, href: '/' },
              { label: siteContent.nav.services.label, href: '/services' },
              { label: service.title },
            ]}
          />
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white border border-border-card rounded p-5">
                <h2 className="text-sm font-semibold text-text-primary mb-3">{servicePageLabels.includedHeading}</h2>
                <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
                  {service.included.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div className="bg-white border border-border-card rounded p-5">
                <h2 className="text-sm font-semibold text-text-primary mb-3">{servicePageLabels.howHeading}</h2>
                <ol className="list-decimal list-inside text-sm text-text-secondary space-y-1">
                  {service.howItWorks.map((s) => <li key={s}>{s}</li>)}
                </ol>
              </div>
            </div>
            <div className="bg-white border border-border-card rounded p-5">
              <h2 className="text-sm font-semibold text-text-primary mb-2">{servicePageLabels.slaHeading}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{service.slaSummary}</p>
              <h3 className="text-sm font-semibold text-text-primary mt-6 mb-2">{servicePageLabels.relatedHeading}</h3>
              <ul className="text-sm space-y-2">
                {service.relatedSlugs.map((slug) => {
                  const rel = getService(slug);
                  if (!rel) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/services/${slug}`} className="text-dell-blue font-semibold hover:underline">{rel.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact" className="mt-6 inline-flex bg-dell-blue text-white text-sm font-semibold px-4 py-2 rounded hover:bg-dell-blue-hover">
                {servicePageLabels.cta}
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
