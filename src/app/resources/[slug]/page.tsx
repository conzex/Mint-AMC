import { notFound } from 'next/navigation';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { articles, getArticle } from '@/content/resources';
import { siteContent } from '@/content/site';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  return { title: article ? `${article.title} | Mint AMC` : 'Resource | Mint AMC' };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <MarketingChrome>
      <PageHeroBand title={article.title} subtitle={article.excerpt} align="left" size="compact" />
      <PageSection tone="muted" containerClassName="max-w-3xl">
        <Breadcrumbs
          items={[
            { label: siteContent.nav.home.label, href: '/' },
            { label: siteContent.nav.resources.label, href: '/resources' },
            { label: article.title },
          ]}
        />
        <p className="type-caption mb-4">{article.date} · {article.category}</p>
        <div className="ui-card p-6 space-y-4 type-body">
          {article.body.map((p) => <p key={p}>{p}</p>)}
        </div>
      </PageSection>
    </MarketingChrome>
  );
}
