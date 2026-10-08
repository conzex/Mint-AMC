import { MetadataRoute } from 'next';
import { serviceCategories } from '@/content/services';
import { resourcesData } from '@/content/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mintamc.com';

  const staticRoutes = [
    '',
    '/services',
    '/solutions',
    '/pricing',
    '/why-mint-amc',
    '/about',
    '/resources',
    '/contact',
    '/privacy',
    '/terms',
    '/sla',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = serviceCategories.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const resourceRoutes = resourcesData.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes];
}
