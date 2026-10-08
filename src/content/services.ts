export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'desktop' | 'laptop' | 'network' | 'server' | 'printer' | 'shield' | 'cloud' | 'clock';
  benefits: string[];
  deliverables: string[];
  slaOptions: string[];
  targetAudience: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'hardware-amc',
    title: '{{SERVICE_HARDWARE_TITLE}}',
    shortDescription: '{{SERVICE_HARDWARE_SHORT}}',
    fullDescription: '{{SERVICE_HARDWARE_FULL}}',
    iconName: 'desktop',
    benefits: [
      '{{SERVICE_HARDWARE_BENEFIT_1}}',
      '{{SERVICE_HARDWARE_BENEFIT_2}}',
      '{{SERVICE_HARDWARE_BENEFIT_3}}',
      '{{SERVICE_HARDWARE_BENEFIT_4}}',
    ],
    deliverables: [
      '{{SERVICE_HARDWARE_DELIV_1}}',
      '{{SERVICE_HARDWARE_DELIV_2}}',
      '{{SERVICE_HARDWARE_DELIV_3}}',
    ],
    slaOptions: [
      '{{SERVICE_HARDWARE_SLA_1}}',
      '{{SERVICE_HARDWARE_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_HARDWARE_AUDIENCE}}',
  },
  {
    slug: 'software-support',
    title: '{{SERVICE_SOFTWARE_TITLE}}',
    shortDescription: '{{SERVICE_SOFTWARE_SHORT}}',
    fullDescription: '{{SERVICE_SOFTWARE_FULL}}',
    iconName: 'laptop',
    benefits: [
      '{{SERVICE_SOFTWARE_BENEFIT_1}}',
      '{{SERVICE_SOFTWARE_BENEFIT_2}}',
      '{{SERVICE_SOFTWARE_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_SOFTWARE_DELIV_1}}',
      '{{SERVICE_SOFTWARE_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_SOFTWARE_SLA_1}}',
      '{{SERVICE_SOFTWARE_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_SOFTWARE_AUDIENCE}}',
  },
  {
    slug: 'network-management',
    title: '{{SERVICE_NETWORK_TITLE}}',
    shortDescription: '{{SERVICE_NETWORK_SHORT}}',
    fullDescription: '{{SERVICE_NETWORK_FULL}}',
    iconName: 'network',
    benefits: [
      '{{SERVICE_NETWORK_BENEFIT_1}}',
      '{{SERVICE_NETWORK_BENEFIT_2}}',
      '{{SERVICE_NETWORK_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_NETWORK_DELIV_1}}',
      '{{SERVICE_NETWORK_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_NETWORK_SLA_1}}',
      '{{SERVICE_NETWORK_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_NETWORK_AUDIENCE}}',
  },
  {
    slug: 'printer-peripheral',
    title: '{{SERVICE_PRINTER_TITLE}}',
    shortDescription: '{{SERVICE_PRINTER_SHORT}}',
    fullDescription: '{{SERVICE_PRINTER_FULL}}',
    iconName: 'printer',
    benefits: [
      '{{SERVICE_PRINTER_BENEFIT_1}}',
      '{{SERVICE_PRINTER_BENEFIT_2}}',
      '{{SERVICE_PRINTER_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_PRINTER_DELIV_1}}',
      '{{SERVICE_PRINTER_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_PRINTER_SLA_1}}',
      '{{SERVICE_PRINTER_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_PRINTER_AUDIENCE}}',
  },
  {
    slug: 'server-storage',
    title: '{{SERVICE_SERVER_TITLE}}',
    shortDescription: '{{SERVICE_SERVER_SHORT}}',
    fullDescription: '{{SERVICE_SERVER_FULL}}',
    iconName: 'server',
    benefits: [
      '{{SERVICE_SERVER_BENEFIT_1}}',
      '{{SERVICE_SERVER_BENEFIT_2}}',
      '{{SERVICE_SERVER_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_SERVER_DELIV_1}}',
      '{{SERVICE_SERVER_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_SERVER_SLA_1}}',
      '{{SERVICE_SERVER_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_SERVER_AUDIENCE}}',
  },
  {
    slug: 'data-centre',
    title: '{{SERVICE_DATACENTRE_TITLE}}',
    shortDescription: '{{SERVICE_DATACENTRE_SHORT}}',
    fullDescription: '{{SERVICE_DATACENTRE_FULL}}',
    iconName: 'shield',
    benefits: [
      '{{SERVICE_DATACENTRE_BENEFIT_1}}',
      '{{SERVICE_DATACENTRE_BENEFIT_2}}',
      '{{SERVICE_DATACENTRE_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_DATACENTRE_DELIV_1}}',
      '{{SERVICE_DATACENTRE_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_DATACENTRE_SLA_1}}',
      '{{SERVICE_DATACENTRE_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_DATACENTRE_AUDIENCE}}',
  },
  {
    slug: 'cloud-support',
    title: '{{SERVICE_CLOUD_TITLE}}',
    shortDescription: '{{SERVICE_CLOUD_SHORT}}',
    fullDescription: '{{SERVICE_CLOUD_FULL}}',
    iconName: 'cloud',
    benefits: [
      '{{SERVICE_CLOUD_BENEFIT_1}}',
      '{{SERVICE_CLOUD_BENEFIT_2}}',
      '{{SERVICE_CLOUD_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_CLOUD_DELIV_1}}',
      '{{SERVICE_CLOUD_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_CLOUD_SLA_1}}',
      '{{SERVICE_CLOUD_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_CLOUD_AUDIENCE}}',
  },
  {
    slug: '247-monitoring',
    title: '{{SERVICE_MONITORING_TITLE}}',
    shortDescription: '{{SERVICE_MONITORING_SHORT}}',
    fullDescription: '{{SERVICE_MONITORING_FULL}}',
    iconName: 'clock',
    benefits: [
      '{{SERVICE_MONITORING_BENEFIT_1}}',
      '{{SERVICE_MONITORING_BENEFIT_2}}',
      '{{SERVICE_MONITORING_BENEFIT_3}}',
    ],
    deliverables: [
      '{{SERVICE_MONITORING_DELIV_1}}',
      '{{SERVICE_MONITORING_DELIV_2}}',
    ],
    slaOptions: [
      '{{SERVICE_MONITORING_SLA_1}}',
      '{{SERVICE_MONITORING_SLA_2}}',
    ],
    targetAudience: '{{SERVICE_MONITORING_AUDIENCE}}',
  },
];
