import { servicesBySlug, type ServiceRecord } from './service-catalog';

export type { ServiceRecord } from './service-catalog';
export { servicesBySlug } from './service-catalog';
export { megaMenuColumns } from './mega-menu';

export function getService(slug: string): ServiceRecord | undefined {
  return servicesBySlug[slug];
}

export const servicesPageContent = {
  heroTitle: 'IT infrastructure AMC services',
  heroSubtitle:
    'Structured Annual Maintenance Contracts across end-user IT, network, data centre, and monitoring — one commercial relationship, PAN-India delivery.',
};

export const servicePageLabels = {
  includedHeading: 'What is included',
  howHeading: 'How delivery works',
  slaHeading: 'SLA summary',
  relatedHeading: 'Related services',
  cta: 'Request quote for this service',
};
