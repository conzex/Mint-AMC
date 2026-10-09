import Link from 'next/link';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { articles, resourcesPageContent } from '@/content/resources';

export const metadata = { title: 'Resources | Mint AMC' };

export default function ResourcesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={resourcesPageContent.heroTitle} subtitle={resourcesPageContent.heroSubtitle} align="left" />
      <PageSection tone="muted">
        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="ui-card p-5 hover:bg-row-hover transition-colors block"
            >
              <span className="type-eyebrow text-ink-muted">{a.category}</span>
              <h2 className="type-card-title mt-2">{a.title}</h2>
              <p className="type-body mt-2">{a.excerpt}</p>
              <p className="type-caption mt-3">{a.date}</p>
            </Link>
          ))}
        </div>
      </PageSection>
    </MarketingChrome>
  );
}
