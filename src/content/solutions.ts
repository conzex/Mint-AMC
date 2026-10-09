export const solutionsContent = {
  heroTitle: 'Solutions by industry and by need',
  heroSubtitle:
    'Whether you run a single office or a national estate, Mint AMC maps AMC scope, SLAs, and monitoring to your risk profile.',
  byIndustryTitle: 'By industry',
  industries: [
    {
      id: 'smb',
      title: 'SMB & branch offices',
      body: 'Right-sized Essential and Professional tiers with NBD onsite and centralised helpdesk for distributed branches.',
    },
    {
      id: 'enterprise',
      title: 'Enterprise multi-site',
      body: 'Unified master agreement, per-site SLA tiers, spares logistics, and executive reporting across regions.',
    },
    {
      id: 'government',
      title: 'Government & PSU',
      body: 'Compliance-friendly documentation, defined escalation, and transparent commercial structures for tender alignment.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      body: 'Uptime-focused network and endpoint AMC with optional 24/7 monitoring for clinical and administrative systems.',
    },
    {
      id: 'education',
      title: 'Education',
      body: 'Lab, classroom, and campus WiFi programmes with predictable PM during academic calendars.',
    },
    {
      id: 'bfsi',
      title: 'BFSI',
      body: 'Higher SLA tiers, security coordination, and DR-aware support models for regulated environments.',
    },
  ],
  byNeedTitle: 'By need',
  needs: [
    {
      id: 'break-fix',
      title: 'Break-fix & on-call',
      body: 'Reactive support with defined response times when you do not require full comprehensive coverage.',
    },
    {
      id: 'preventive',
      title: 'Preventive maintenance',
      body: 'Scheduled PM to reduce failure rates on servers, network, power, and cooling systems.',
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive AMC',
      body: 'Labour plus parts for covered failures — predictable opex for finance and IT leadership.',
    },
    {
      id: 'remote-hands',
      title: 'Remote hands',
      body: 'Datacentre smart hands, guided tasks, and coordination with your internal or colocation teams.',
    },
  ],
};

export type SolutionDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroLead: string;
  highlights: string[];
  slaTier: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

export const solutionDetailsMap: Record<string, SolutionDetail> = {
  enterprise: {
    slug: 'enterprise',
    title: 'Enterprise Multi-Site AMC Solution',
    category: 'Enterprise & Financial',
    summary: 'Unified PAN-India IT AMC governance for multi-location enterprises with tiered SLAs and centralized asset tracking.',
    heroLead: 'Scale your infrastructure support across hundreds of offices under one Master Service Agreement with dedicated account directors and guaranteed response times.',
    highlights: [
      'Single Master AMC Agreement covering multi-state operations',
      'Location-specific SLA tiers (4-hour 24/7 for HQ, NBD for regional offices)',
      'Dedicated Regional Field Engineers & Spares Depot',
      'Real-time SLA Dashboard & Quarterly Executive Reviews',
    ],
    slaTier: 'Enterprise 4-Hour 24/7 + Regional NBD',
    deliverables: [
      'Centralized 24/7 NOC Service Desk Integration',
      'Quarterly Scheduled Preventive Maintenance across all sites',
      'Buffer Stocking at regional logistics hubs for zero-delay part swap',
      'Asset lifecycle & end-of-support (EOSL) advisory reporting',
    ],
    faqs: [
      {
        question: 'Can we have different SLA response times for different locations?',
        answer: 'Yes. Mint AMC allows tiering — for example 4-hour 24/7 coverage for data centres and critical HQs, and NBD for branch offices.',
      },
      {
        question: 'How are OEM warranties managed under a unified AMC?',
        answer: 'Mint AMC consolidates OEM warranty tracking alongside out-of-warranty assets in a single portal, providing one single point of contact.',
      },
    ],
  },
  bfsi: {
    slug: 'bfsi',
    title: 'BFSI & Financial Institutions AMC',
    category: 'Enterprise & Financial',
    summary: 'High-security, audit-compliant IT infrastructure maintenance for banks, NBFCs, and financial service firms.',
    heroLead: 'Protect mission-critical banking networks, core servers, and branch ATMs with zero-trust compliant field engineering and 24/7 monitoring.',
    highlights: [
      'RBI & ISO 27001 audit-aligned maintenance governance',
      'Strict background-verified field engineers with NDA compliance',
      '24/7 NOC monitoring with instant P1 security escalation bridge',
      'High-availability hardware spares buffer for core financial servers',
    ],
    slaTier: 'Critical 2-Hour / 4-Hour 24/7 Priority SLA',
    deliverables: [
      'Comprehensive server, firewall, SAN storage, and core switch support',
      'Regular firmware vulnerability patching and security audit logs',
      'Disaster Recovery (DR) drills & failover assistance',
      'Dedicated Service Level Manager with monthly compliance reports',
    ],
    faqs: [
      {
        question: 'Are your engineers background-checked for banking site visits?',
        answer: 'Yes. All engineers deployed to BFSI clients undergo thorough background verification and sign non-disclosure agreements.',
      },
    ],
  },
  smb: {
    slug: 'smb',
    title: 'SMB & Branch Office AMC Solution',
    category: 'Enterprise & Financial',
    summary: 'Cost-effective, hassle-free IT support designed specifically for growing businesses and branch office networks.',
    heroLead: 'Get enterprise-grade IT support without enterprise overheads. Keep your desktops, Wi-Fi, and servers running reliably.',
    highlights: [
      'Flexible month-to-month or annual contract options',
      'Next Business Day (NBD) onsite engineer dispatch',
      'Unlimited remote helpdesk and ticket resolution',
      'Scheduled preventive maintenance every quarter',
    ],
    slaTier: 'Professional NBD / 8-Hour Business SLA',
    deliverables: [
      'Desktop & Laptop hardware maintenance',
      'Wi-Fi router, firewall, and LAN cable troubleshooting',
      'Antivirus, OS patch, and software backup validation',
      'Simple monthly reporting and flat predictable billing',
    ],
    faqs: [
      {
        question: 'What is included in the SMB AMC plan?',
        answer: 'Our SMB plan covers all end-user desktops, laptops, printers, routers, and small office servers with remote helpdesk and onsite visits.',
      },
    ],
  },
  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare & Clinical Uptime AMC',
    category: 'Public & Healthcare',
    summary: '24/7 Uptime maintenance for hospital IT systems, diagnostic networks, and electronic health record (EHR) infrastructure.',
    heroLead: 'Ensure 100% uptime for critical medical diagnostic networks, EHR servers, and nursing workstation hardware.',
    highlights: [
      '24/7 Rapid response for hospital emergency network P1 tickets',
      'Cleanroom & infection control compliant field engineer protocol',
      'Proactive monitoring of PACS servers and medical switches',
      'Redundant hardware spares stored near hospital campuses',
    ],
    slaTier: 'Clinical 2-Hour 24/7 Critical Uptime SLA',
    deliverables: [
      'Workstation & diagnostic display calibration support',
      'Network backbone latency and bandwidth optimization',
      'Uninterrupted power (UPS) and switch health audits',
      'HIPAA & DPDP data confidentiality compliance',
    ],
    faqs: [
      {
        question: 'Do you offer round-the-clock emergency support for hospitals?',
        answer: 'Yes, our Healthcare AMC includes 24/7 emergency dispatch for P1 hospital network and server incidents.',
      },
    ],
  },
  education: {
    slug: 'education',
    title: 'Education & Campus IT AMC',
    category: 'Public & Healthcare',
    summary: 'Comprehensive maintenance for computer labs, campus-wide Wi-Fi networks, and administrative server rooms.',
    heroLead: 'Keep computer labs, smart classrooms, and university Wi-Fi running smoothly with scheduled maintenance aligned to academic terms.',
    highlights: [
      'Scheduled Preventive Maintenance during semester breaks',
      'High-density campus Wi-Fi & access point maintenance',
      'Bulk computer lab desktop & printer support',
      'Flat educational institution pricing structures',
    ],
    slaTier: 'Campus NBD / 8-Hour Academic SLA',
    deliverables: [
      'Lab imaging and OS deployment assistance',
      'Core router and firewall maintenance',
      'Student portal server hardware coverage',
      'Onsite resident engineer options for large campuses',
    ],
    faqs: [
      {
        question: 'Can PM visits be scheduled during vacation periods?',
        answer: 'Absolutely. We align preventive maintenance visits during academic breaks to avoid disrupting classes.',
      },
    ],
  },
  government: {
    slug: 'government',
    title: 'Government & PSU IT AMC Tenders',
    category: 'Public & Healthcare',
    summary: 'Transparent, tender-compliant maintenance contracts for public sector undertakings, municipal bodies, and state departments.',
    heroLead: 'GeM and tender-compliant IT maintenance solutions with clear SLA penalty clauses and standardized pricing.',
    highlights: [
      'Full compliance with Government e-Marketplace (GeM) terms',
      'Transparent SLA tracking and structured penalty formulas',
      'Pan-India PSU multi-district coverage',
      'Dedicated compliance documentation & SLA logs',
    ],
    slaTier: 'Standard Government 8-Hour / NBD SLA',
    deliverables: [
      'State-wide office endpoint & server AMC',
      'Biometric & peripheral hardware support',
      'Dedicated nodal officer for escalation management',
      'Monthly physical PM sign-off certificates',
    ],
    faqs: [
      {
        question: 'Is Mint AMC registered on GeM?',
        answer: 'Yes, CONZEX GLOBAL / Mint AMC provides GeM compliant service delivery across India.',
      },
    ],
  },
  comprehensive: {
    slug: 'comprehensive',
    title: 'Comprehensive AMC (Parts + Labor)',
    category: 'Maintenance Models',
    summary: 'All-inclusive IT maintenance covering both engineer labor and replacement parts for complete budget certainty.',
    heroLead: 'Eliminate surprise repair bills. Our Comprehensive AMC covers 100% of labor costs and genuine hardware component replacements.',
    highlights: [
      'Full coverage for motherboard, power supply, RAM, and disk failures',
      'Genuine OEM replacement components with warranty',
      'No hidden labor or diagnostic charges',
      'Includes 4 quarterly preventive maintenance visits per year',
    ],
    slaTier: 'Custom 4-Hour 24/7 or NBD Comprehensive SLA',
    deliverables: [
      'End-to-end component replacement for covered assets',
      'Temporary standby hardware during prolonged repairs',
      '24/7 Service desk ticketing portal access',
      'Root cause analysis (RCA) report for critical failures',
    ],
    faqs: [
      {
        question: 'What is the difference between Comprehensive and Non-Comprehensive AMC?',
        answer: 'Comprehensive AMC includes both spare parts replacement and repair labor. Non-Comprehensive AMC covers labor only while parts are billed separately.',
      },
    ],
  },
  preventive: {
    slug: 'preventive',
    title: 'Preventive Maintenance (PM) AMC',
    category: 'Maintenance Models',
    summary: 'Proactive quarterly inspection and deep system cleaning to prevent unexpected hardware failures before they occur.',
    heroLead: 'Reduce un-planned IT downtime by up to 70% with systematic hardware cleaning, thermal checks, and log analysis.',
    highlights: [
      '4 Scheduled Onsite PM Visits per annum',
      'Internal dust cleaning, fan inspection, and thermal paste re-application',
      'RAID array health, disk SMART status, and log diagnostic checks',
      'Firmware & BIOS update checks for server and network gear',
    ],
    slaTier: 'Scheduled Quarterly PM + Business Hours Support',
    deliverables: [
      'Physical inspection & cleaning of desktops, laptops, and server racks',
      'Detailed PM sign-off report with asset health score',
      'Early warning notifications for degrading hard drives or power supplies',
      'Airflow & cooling efficiency review for server closets',
    ],
    faqs: [
      {
        question: 'How often are Preventive Maintenance visits conducted?',
        answer: 'Standard PM visits take place quarterly (every 90 days), with custom frequency available for mission-critical facilities.',
      },
    ],
  },
  'break-fix': {
    slug: 'break-fix',
    title: 'Break-Fix & On-Call Engineering',
    category: 'Specialised Operations',
    summary: 'On-demand technical support and emergency field dispatch when full comprehensive AMC is not required.',
    heroLead: 'Pay only for what you need. Fast on-call engineer dispatch with contractual SLA response guarantees for non-contracted estates.',
    highlights: [
      'Contracted SLA response times for pay-per-use requests',
      'Level-1 to Level-3 certified field engineers across India',
      'Transparent rate cards for labor and component replacement',
      'Ideal for legacy equipment or standby backup sites',
    ],
    slaTier: 'On-Demand 4-Hour / Same-Day Response',
    deliverables: [
      'Onsite diagnostic and failure remediation',
      'System recovery & configuration restore',
      'Detailed job sheet and fault documentation',
      'Option to convert to full AMC anytime',
    ],
    faqs: [
      {
        question: 'How fast can an engineer arrive on site for a break-fix ticket?',
        answer: 'For contracted on-call customers, response times range from 4 hours to same business day depending on location.',
      },
    ],
  },
  'remote-hands': {
    slug: 'remote-hands',
    title: 'Data Centre Remote Hands & NOC Support',
    category: 'Specialised Operations',
    summary: 'On-site technical hands for colocation facilities and 24/7 automated NOC infrastructure monitoring.',
    heroLead: 'Extend your IT team into any data centre or remote site in India without keeping full-time staff on location.',
    highlights: [
      'Data centre smart hands for cable patching, power cycles, and server racking',
      '24/7 Automated ping, port, and SNMP infrastructure monitoring',
      'Guided troubleshooting bridge with senior systems architects',
      'Hardware replacement execution under remote guidance',
    ],
    slaTier: '24/7/365 2-Hour / 4-Hour Data Centre SLA',
    deliverables: [
      'Physical server power cycling & visual LED check',
      'Fiber/Ethernet patching & port labeling',
      'Disk and RAM hot-swap replacement in SAN/NAS/Servers',
      'Proactive SNMP & syslog monitoring alerts to your team',
    ],
    faqs: [
      {
        question: 'Which data centres do you support for Remote Hands?',
        answer: 'We support all major colocation facilities across India including Netmagic, NTT, CtrlS, STT Telemedia, Equinix, and custom enterprise data centres.',
      },
    ],
  },
};
