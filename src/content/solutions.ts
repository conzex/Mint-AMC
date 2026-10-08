export interface IndustrySolution {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];
  useCase: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  highlights: string[];
}

export const solutionsData = {
  industries: [
    {
      id: 'smb',
      title: 'SMB & Growing Enterprises',
      description: 'Cost-effective, comprehensive IT support tailored for growing businesses needing reliable IT uptime without dedicated internal teams.',
      keyFeatures: [
        'All-in-one desktop, network, and server maintenance bundle',
        'Dedicated account manager and single point of support contact',
        'Flexible monthly and quarterly payment terms',
      ],
      useCase: 'Office setups with 20 to 150 workstations needing full IT peace of mind.',
    },
    {
      id: 'enterprise',
      title: 'Multi-Site Enterprise & BFSI',
      description: 'High-availability SLA contracts with dedicated resident engineers, standby hardware depots, and compliance reporting.',
      keyFeatures: [
        'Guaranteed 2-hour on-site hardware replacement SLA across multi-city branches',
        'Resident engineer deployment options for campus infrastructure',
        'Strict ISO 27001 & SOC-2 security compliance alignment',
      ],
      useCase: 'Banks, insurance firms, and multi-location corporate headquarters.',
    },
    {
      id: 'government',
      title: 'Government & Public Sector Units',
      description: 'GeM-compliant AMC solutions aligned with GFR guidelines, strict security clearances, and audit-ready SLA tracking.',
      keyFeatures: [
        'Full GeM portal onboarding and transparent tender pricing',
        'Vetted, background-verified resident service technicians',
        'Comprehensive spare part inventory pooling across state capitals',
      ],
      useCase: 'Public sector undertakings, government ministries, and municipal bodies.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Hospital Networks',
      description: 'Zero-downtime maintenance for hospital IT systems, diagnostic workstation networks, and PACS image server storage.',
      keyFeatures: [
        '24/7/365 priority NOC escalation for critical hospital systems',
        'Dust-free, sanitized handling for clinical environment workstations',
        'High-speed SAN storage maintenance for medical imaging PACS',
      ],
      useCase: 'Hospitals, diagnostic chains, and medical research institutes.',
    },
    {
      id: 'education',
      title: 'Educational Institutions & Universities',
      description: 'Robust seasonal maintenance and computer lab support tailored for academic calendars and campus Wi-Fi networks.',
      keyFeatures: [
        'Mass lab workstation maintenance during academic semester breaks',
        'Campus-wide Wi-Fi access point tuning and firewall filtering',
        'Discounted educational institution AMC rate structures',
      ],
      useCase: 'Universities, engineering colleges, and school campus chains.',
    },
  ] as IndustrySolution[],

  models: [
    {
      id: 'break-fix',
      title: 'Break-Fix Call-Out AMC',
      description: 'On-demand technical response for unexpected hardware breakdowns, ideal for non-critical secondary systems.',
      idealFor: 'Secondary office peripherals, backup workstations, and auxiliary printers.',
      highlights: [
        'Pay-per-incident labor structure with pre-negotiated spare part pricing',
        'Standard 4 to 8 hour engineer dispatch commitment',
      ],
    },
    {
      id: 'preventive',
      title: 'Preventive Maintenance AMC',
      description: 'Regular scheduled health check visits, cleaning, tuning, and patching to stop hardware breakdowns before they happen.',
      idealFor: 'Standard office desktop fleets and branch network hardware.',
      highlights: [
        'Quarterly physical cleaning, thermal paste refresh, and fan servicing',
        'System audit reports detailing equipment life expectancies',
      ],
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Unlimited AMC',
      description: 'Full-cover maintenance including labor, unlimited breakdown visits, OEM spare parts, standby units, and 24/7 NOC monitoring.',
      idealFor: 'Mission-critical servers, core network switches, and primary workstations.',
      highlights: [
        'Includes 100% cost of all OEM hardware spare parts and logic boards',
        'Guaranteed hot-standby equipment deployment during extended repairs',
      ],
    },
    {
      id: 'remote-hands',
      title: 'Remote Hands & Resident Engineer',
      description: 'Dedicated full-time on-site IT service engineer stationed at your facility backed by our tier-3 NOC specialists.',
      idealFor: 'Large enterprise campuses, data centers, and high-density corporate offices.',
      highlights: [
        'Full-time certified engineer on-site during your office working hours',
        'Instant physical hands-on support for server rack changes and user tickets',
      ],
    },
  ] as EngagementModel[],
};
