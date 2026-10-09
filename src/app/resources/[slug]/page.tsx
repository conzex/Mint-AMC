import { notFound } from 'next/navigation';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { articles, getArticle } from '@/content/resources';
import { siteContent } from '@/content/site';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  return { title: article?.title ?? '{{META_ARTICLE_TITLE}}' };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <MarketingChrome>
      <PageHeroBand title={article.title} subtitle={article.excerpt} align="left" size="compact" />
      <section className="py-10 bg-bg-body">
        <PageContainer className="max-w-3xl">
          <Breadcrumbs
            items={[
              { label: siteContent.nav.home.label, href: '/' },
              { label: siteContent.nav.resources.label, href: '/resources' },
              { label: article.title },
            ]}
          />
          <p className="text-xs text-text-secondary mb-4">{article.date} · {article.category}</p>
          <div className="bg-white border border-border-card rounded p-6 space-y-4 text-sm text-text-secondary leading-relaxed">
            {article.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
