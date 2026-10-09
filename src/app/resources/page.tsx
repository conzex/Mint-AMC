import Link from 'next/link';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { articles, resourcesPageContent } from '@/content/resources';

export const metadata = { title: '{{META_RESOURCES_TITLE}}' };

export default function ResourcesPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={resourcesPageContent.heroTitle} subtitle={resourcesPageContent.heroSubtitle} align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer>
          <div className="grid md:grid-cols-3 gap-4">
            {articles.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="bg-white border border-border-card rounded p-5 hover:bg-row-hover block">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">{a.category}</span>
                <h2 className="text-sm font-bold text-text-primary mt-2">{a.title}</h2>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{a.excerpt}</p>
                <p className="text-xs text-text-secondary mt-3">{a.date}</p>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
