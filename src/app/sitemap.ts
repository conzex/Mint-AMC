import { siteContent } from '@/content/site';
import { allServiceSlugs } from '@/content/mega-menu';
import { articles } from '@/content/resources';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContent.siteUrl;
  const staticRoutes = ['', '/services', '/solutions', '/pricing', '/about', '/why-mint-amc', '/resources', '/contact', '/privacy', '/terms', '/sla'];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path || '/'}`, changeFrequency: 'weekly' as const, priority: path === '' ? 1 : 0.7 })),
    ...allServiceSlugs.map((slug) => ({ url: `${base}/services/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...articles.map((a) => ({ url: `${base}/resources/${a.slug}`, changeFrequency: 'monthly' as const, priority: 0.5 })),
  ];
}
