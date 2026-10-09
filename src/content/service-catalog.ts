import { megaMenuColumns, allServiceSlugs } from './mega-menu';

export type ServiceRecord = {
  slug: string;
  title: string;
  shortDescription: string;
  included: string[];
  howItWorks: string[];
  slaSummary: string;
  relatedSlugs: string[];
};

function makeService(slug: string, title: string, focus: string): ServiceRecord {
  const others = allServiceSlugs.filter((s) => s !== slug).slice(0, 3);
  return {
    slug,
    title,
    shortDescription: `${title} from Mint AMC covers preventive maintenance, break-fix support, and SLA-backed engineer dispatch for ${focus}. Contracts can be comprehensive (parts included) or non-comprehensive, with optional 24/7 NOC monitoring.`,
    included: [
      'Preventive maintenance visits per contract (quarterly or as agreed)',
      'Remote triage plus onsite engineer dispatch within your SLA tier',
      'Firmware, driver, and configuration support within scope',
      'Ticket tracking, monthly service summaries, and renewal planning',
    ],
    howItWorks: [
      'Site survey and asset register for all in-scope equipment',
      'AMC activation with SLA matrix, spares policy, and escalation contacts',
      'Run-state operations: PM schedules, incident handling, and governance reviews',
    ],
    slaSummary:
      'Standard tiers include business-hours remote support with optional 4-hour / NBD onsite for metros. Enterprise programmes add 24/7 NOC, dedicated engineer, and custom RTO/RPO alignment — documented in your Master SLA.',
    relatedSlugs: others,
  };
}

const titleBySlug: Record<string, { title: string; focus: string }> = {};

for (const col of megaMenuColumns) {
  for (const link of col.links) {
    titleBySlug[link.slug] = {
      title: link.label,
      focus: col.heading.toLowerCase(),
    };
  }
}

export const servicesBySlug: Record<string, ServiceRecord> = Object.fromEntries(
  allServiceSlugs.map((slug) => {
    const meta = titleBySlug[slug];
    return [slug, makeService(slug, meta.title, meta.focus)];
  }),
);
