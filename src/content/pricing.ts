export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  pricePlaceholder: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ComparisonFeature {
  category: string;
  featureName: string;
  essential: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingData = {
  tiers: [
    {
      id: 'essential',
      name: 'Essential Support',
      badge: 'Standard Business SLA',
      pricePlaceholder: 'Custom Quote',
      period: 'Billed Annually | Per Device / Asset Basis',
      description: 'Ideal for growing businesses needing reliable business-hours hardware maintenance and helpdesk support.',
      isPopular: false,
      features: [
        '8x5 Business Hours Technical Support (Mon–Fri 9 AM – 6 PM)',
        'Next Business Day (NBD) On-Site Engineer Dispatch',
        'Quarterly Physical Preventive Maintenance Visits',
        'Includes Labor & Remote Software Troubleshooting',
        'Standard Helpdesk Portal & Telephone Support Access',
      ],
      ctaLabel: 'Request Essential Quote',
      ctaHref: '/contact?tier=essential',
    },
    {
      id: 'professional',
      name: 'Professional Comprehensive',
      badge: 'Most Popular for Enterprises',
      pricePlaceholder: 'Custom Quote',
      period: 'Billed Annually or Quarterly | Full OEM Parts Included',
      description: 'Complete maintenance coverage with guaranteed 4-hour SLA response and 100% OEM spare parts replacement.',
      isPopular: true,
      features: [
        '12x6 Extended Hours Support (Mon–Sat 8 AM – 8 PM)',
        'Guaranteed 4-Hour On-Site Hardware Replacement SLA',
        'Includes 100% Cost of OEM Spare Parts & Motherboards',
        'Hot-Standby Equipment Allocation during major repairs',
        '24/7 Automated Ping & SNMP Network NOC Monitoring',
      ],
      ctaLabel: 'Request Professional Quote',
      ctaHref: '/contact?tier=professional',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Mission-Critical',
      badge: 'Dedicated NOC & Resident Engineer',
      pricePlaceholder: 'Custom Quote',
      period: 'Tailored Enterprise Contract | Customized Payment Schedule',
      description: '24/7/365 mission-critical support with sub-2-hour SLA response, resident engineers, and SLA credit guarantees.',
      isPopular: false,
      features: [
        '24/7/365 Round-the-Clock Priority Incident Escalation',
        'Sub-2-Hour On-Site Hardware Replacement SLA (Metros)',
        'Dedicated Resident Technical Engineer Option',
        'Customized SLA Penalties & Uptime Guarantee Credit',
        'Monthly SLA Governance & Executive Infrastructure Review',
      ],
      ctaLabel: 'Request Enterprise Proposal',
      ctaHref: '/contact?tier=enterprise',
    },
  ] as PricingTier[],

  comparisonMatrix: [
    {
      category: 'Service Level SLA',
      featureName: 'On-Site Incident Response SLA',
      essential: 'Next Business Day',
      professional: '4-Hour Guaranteed',
      enterprise: 'Sub-2-Hour Priority',
    },
    {
      category: 'Service Level SLA',
      featureName: 'Support Window Coverage',
      essential: '8x5 Business Hours',
      professional: '12x6 Extended Hours',
      enterprise: '24/7/365 Full NOC',
    },
    {
      category: 'Spare Parts & Hardware',
      featureName: 'OEM Replacement Spare Parts Included',
      essential: false,
      professional: true,
      enterprise: true,
    },
    {
      category: 'Spare Parts & Hardware',
      featureName: 'Hot-Standby Equipment Provisioning',
      essential: false,
      professional: 'Standard Units',
      enterprise: 'Dedicated Inventory',
    },
    {
      category: 'NOC & Monitoring',
      featureName: '24/7 Automated NOC Telemetry Surveillance',
      essential: false,
      professional: true,
      enterprise: true,
    },
    {
      category: 'Staffing & Management',
      featureName: 'Dedicated Resident On-Site Engineer Option',
      essential: false,
      professional: false,
      enterprise: true,
    },
  ] as ComparisonFeature[],

  faqs: [
    {
      question: 'What types of hardware equipment are covered under Mint AMC contracts?',
      answer: 'We cover enterprise desktops, laptops, rackmount servers, SAN/NAS storage arrays, network switches, routers, firewalls, wireless access points, multi-function printers, PAC units, and UPS systems from top OEMs including Dell, HP, Lenovo, Cisco, Fortinet, and APC.',
    },
    {
      question: 'How are SLA response times calculated and guaranteed?',
      answer: 'SLA response times are measured from the moment a ticket is logged into our 24/7 NOC system or telephone hotline. Contractually guaranteed response times are enforced with formal SLA credit penalties.',
    },
    {
      question: 'Can Mint AMC support multi-city branch office locations under a single contract?',
      answer: 'Yes. Mint AMC operates nationwide field dispatch hubs across Tier 1, 2, and 3 cities in India. All branch offices are consolidated into a single master SLA contract with centralized billing and reporting.',
    },
    {
      question: 'What is the difference between Comprehensive and Non-Comprehensive AMC?',
      answer: 'Comprehensive AMC includes labor, unlimited breakdown visits, 24/7 monitoring, and 100% cost of replacement OEM spare parts. Non-Comprehensive AMC covers labor and maintenance visits while spare parts are billed at pre-agreed OEM rates.',
    },
    {
      question: 'How quickly can Mint AMC transition and onboard our infrastructure?',
      answer: 'Standard onboarding takes 3 to 5 business days. Our engineers conduct a complete physical audit, inventory tagging, health diagnostic scan, and standby part allocation before formal SLA kickoff.',
    },
  ] as FAQItem[],
};
