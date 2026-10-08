import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import CtaBanner from '@/components/layout/CtaBanner';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { ArrowRightSymbol, ClockSymbol } from '@/components/symbols';
import { resourcesData } from '@/content/resources';

export const metadata = {
  title: 'IT AMC Knowledge Base & Articles | Mint AMC',
  description: 'Technical articles, SLA guides, and maintenance strategies for IT leaders and facility directors.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeroBand
        title="IT Infrastructure & Maintenance Resources"
        subtitle="Insights, SLA benchmarks, and best practices for optimizing corporate IT uptime and hardware lifecycles."
        badge={<Badge variant="blue">Knowledge Base</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Resources' }]} />
      </PageContainer>

      <section className="py-12 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resourcesData.map((article) => (
              <Card key={article.slug} className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <Badge variant="navy">{article.category}</Badge>
                      <span className="text-slate-text flex items-center gap-1">
                        <ClockSymbol className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-base line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <CardDescription className="text-xs line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                </div>
                <div className="p-4 border-t border-border-gray/60 bg-cool-white/50 flex items-center justify-between text-xs">
                  <span className="text-slate-text font-mono">{article.publishDate}</span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="font-semibold text-tech-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRightSymbol className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        title="Stay Informed on Enterprise Infrastructure Best Practices"
        subtitle="Explore our downloadable SLA guidelines and operational checklists."
      />
    </>
  );
}
