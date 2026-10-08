import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { ClockSymbol, ArrowRightSymbol } from '@/components/symbols';
import { resourcesData } from '@/content/resources';

export function generateStaticParams() {
  return resourcesData.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = resourcesData.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found | Mint AMC' };

  return {
    title: `${article.title} | Mint AMC Knowledge Base`,
    description: article.excerpt,
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const article = resourcesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeroBand
        title={article.title}
        subtitle={article.excerpt}
        badge={
          <div className="flex items-center gap-2">
            <Badge variant="mint">{article.category}</Badge>
            <span className="text-xs text-slate-text flex items-center gap-1">
              <ClockSymbol className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        }
      />

      <PageContainer>
        <Breadcrumbs
          items={[
            { label: 'Resources', href: '/resources' },
            { label: article.title },
          ]}
        />
      </PageContainer>

      <section className="py-12 bg-white">
        <PageContainer>
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-slate-text leading-relaxed">
            <div className="flex items-center justify-between border-b border-border-gray pb-4 text-xs font-mono">
              <span>Published: {article.publishDate}</span>
              <span>Category: {article.category}</span>
            </div>

            {article.contentParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-slate-text leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-8 border-t border-border-gray">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-xs font-semibold text-tech-blue hover:underline"
              >
                <span>← Back to All Articles</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Need Technical Assistance for Your Infrastructure?"
        subtitle="Our NOC engineers are on standby 24/7/365 to assess your operational readiness."
      />
    </>
  );
}
