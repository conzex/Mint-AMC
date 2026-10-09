export const resourcesPageContent = {
  heroTitle: 'Resources',
  heroSubtitle: 'Guides on AMC planning, SLA design, and operational best practices for IT infrastructure teams.',
};

export type Article = { slug: string; title: string; excerpt: string; date: string; category: string; body: string[] };

export const articles: Article[] = [
  {
    slug: 'it-amc-planning-guide',
    title: 'IT AMC planning guide',
    excerpt: 'How to scope assets, SLAs, and commercial models before signing an enterprise AMC.',
    date: '2026-01-15',
    category: 'AMC strategy',
    body: [
      'Start with an accurate asset register: endpoints, network, servers, storage, and facility systems in scope.',
      'Align SLA tiers to business impact — not every site needs the same onsite response time.',
      'Decide early whether comprehensive parts coverage or labour-only fits your opex and risk profile.',
    ],
  },
  {
    slug: 'preventive-vs-breakfix',
    title: 'Preventive maintenance vs break-fix',
    excerpt: 'When PM programmes pay off and how to combine them with on-call support.',
    date: '2026-02-02',
    category: 'Operations',
    body: [
      'Break-fix alone often increases mean time to restore for ageing fleets.',
      'Preventive maintenance reduces thermal, power, and firmware-related failures when scheduled consistently.',
      'Hybrid models are common: PM for stable estates, enhanced SLAs for critical tiers.',
    ],
  },
  {
    slug: 'sla-selection-for-it-leaders',
    title: 'SLA selection for IT leaders',
    excerpt: 'Practical criteria for response, resolution, and reporting in multi-site AMC.',
    date: '2026-03-10',
    category: 'SLA',
    body: [
      'Define measurable targets: acknowledgement, remote engagement, onsite arrival, and restoration.',
      'Include escalation paths and executive notification for P1 events.',
      'Review SLA reports quarterly and adjust tiers when the estate or risk profile changes.',
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
