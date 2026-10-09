import { allServiceSlugs, megaMenuColumns } from './mega-menu';

export type ServiceRecord = {
  slug: string;
  title: string;
  shortDescription: string;
  included: string[];
  howItWorks: string[];
  slaSummary: string;
  relatedSlugs: string[];
};

function token(slug: string, field: string) {
  return `{{SERVICE_${slug.replace(/-/g, '_').toUpperCase()}_${field}}}`;
}

export const servicesBySlug: Record<string, ServiceRecord> = Object.fromEntries(
  allServiceSlugs.map((slug) => [
    slug,
    {
      slug,
      title: token(slug, 'TITLE'),
      shortDescription: token(slug, 'DESCRIPTION'),
      included: [
        token(slug, 'INCLUDED_1'),
        token(slug, 'INCLUDED_2'),
        token(slug, 'INCLUDED_3'),
        token(slug, 'INCLUDED_4'),
      ],
      howItWorks: [token(slug, 'HOW_1'), token(slug, 'HOW_2'), token(slug, 'HOW_3')],
      slaSummary: token(slug, 'SLA_SUMMARY'),
      relatedSlugs: allServiceSlugs.filter((s) => s !== slug).slice(0, 3),
    },
  ]),
);

export { megaMenuColumns };

export function getService(slug: string): ServiceRecord | undefined {
  return servicesBySlug[slug];
}

export const servicesPageContent = {
  heroTitle: '{{SERVICES_PAGE_HERO_TITLE}}',
  heroSubtitle: '{{SERVICES_PAGE_HERO_SUBTITLE}}',
};

export const servicePageLabels = {
  includedHeading: '{{SERVICE_DETAIL_INCLUDED_HEADING}}',
  howHeading: '{{SERVICE_DETAIL_HOW_HEADING}}',
  slaHeading: '{{SERVICE_DETAIL_SLA_HEADING}}',
  relatedHeading: '{{SERVICE_DETAIL_RELATED_HEADING}}',
  cta: '{{SERVICE_DETAIL_CTA}}',
};
