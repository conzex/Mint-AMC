import Link from 'next/link';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { articles, resourcesPageContent } from '@/content/resources';

export const metadata = { title: 'Resources | Mint AMC' };

export default function ResourcesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={resourcesPageContent.heroTitle} subtitle={resourcesPageContent.heroSubtitle} align="center" />
      <PageSection tone="muted">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="ui-card-interactive p-6 flex flex-col justify-between"
            >
              <div>
                <span className="type-eyebrow text-brand">{a.category}</span>
                <h2 className="type-card-title text-lg mt-2 font-bold text-ink">{a.title}</h2>
                <p className="type-body mt-2.5 text-sm">{a.excerpt}</p>
              </div>
              <p className="type-caption mt-4 pt-3 border-t border-line/60 font-medium">{a.date}</p>
            </Link>
          ))}
        </div>
      </PageSection>
      <MarketingCtaBand
        title="Need expert advice on IT infrastructure AMC?"
        subtitle="Schedule a free technical audit and SLA evaluation with our senior field engineering leads."
      />
    </MarketingChrome>
  );
}
