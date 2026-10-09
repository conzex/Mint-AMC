import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/ui/text-link';
import { getService, servicesBySlug, servicePageLabels } from '@/content/services';
import { siteContent } from '@/content/site';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(servicesBySlug).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  return { title: service ? `${service.title} | Mint AMC` : 'Service | Mint AMC' };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <MarketingChrome>
      <PageHeroBand title={service.title} subtitle={service.shortDescription} align="left" size="compact" />
      <PageSection tone="muted">
        <Breadcrumbs
          items={[
            { label: siteContent.nav.home.label, href: '/' },
            { label: siteContent.nav.services.label, href: '/services' },
            { label: service.title },
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="ui-card p-5">
              <h2 className="type-card-title mb-3">{servicePageLabels.includedHeading}</h2>
              <ul className="list-disc list-inside type-body space-y-1">
                {service.included.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="ui-card p-5">
              <h2 className="type-card-title mb-3">{servicePageLabels.howHeading}</h2>
              <ol className="list-decimal list-inside type-body space-y-1">
                {service.howItWorks.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </div>
          <div className="ui-card p-5">
            <h2 className="type-card-title mb-2">{servicePageLabels.slaHeading}</h2>
            <p className="type-body">{service.slaSummary}</p>
            <h3 className="type-card-title mt-6 mb-2">{servicePageLabels.relatedHeading}</h3>
            <ul className="type-body space-y-2">
              {service.relatedSlugs.map((slug) => {
                const rel = getService(slug);
                if (!rel) return null;
                return (
                  <li key={slug}>
                    <TextLink href={`/services/${slug}`}>{rel.title}</TextLink>
                  </li>
                );
              })}
            </ul>
            <Button href="/contact" className="mt-6 w-full sm:w-auto">
              {servicePageLabels.cta}
            </Button>
          </div>
        </div>
      </PageSection>
    </MarketingChrome>
  );
}
