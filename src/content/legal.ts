export const legalData = {
  privacy: {
    title: 'Mint AMC Privacy Policy',
    lastUpdated: 'October 8, 2026',
    sections: [
      {
        heading: '1. Introduction & Governance',
        body: 'Mint AMC is an IT maintenance services division under CONZEX GLOBAL PRIVATE LIMITED ("Company", "We", "Us"). We respect your privacy and are committed to protecting the corporate data, contact details, and infrastructure telemetry shared with us.',
      },
      {
        heading: '2. Information We Collect',
        body: 'We collect corporate contact information (name, business email, telephone number, corporate address) and technical asset metadata (device serial numbers, IP addresses, network telemetry) required to execute annual maintenance contracts and NOC monitoring.',
      },
      {
        heading: '3. Data Usage & Confidentiality',
        body: 'Asset and contact data is strictly used for contract fulfillment, field technician dispatch, ticket resolution, and monthly SLA compliance reporting. We do not sell or monetize client metadata.',
      },
      {
        heading: '4. Information Security & Compliance',
        body: 'All client information is governed under ISO 27001 certified Information Security Management Systems with encrypted transmission, strict access role restrictions, and audit logging.',
      },
    ],
  },
  terms: {
    title: 'Mint AMC Terms of Service',
    lastUpdated: 'October 8, 2026',
    sections: [
      {
        heading: '1. Service Scope & Master SLA',
        body: 'All Annual Maintenance Contracts provided by Mint AMC are executed under formal Master Service Agreements (MSA) incorporating specific SLA schedules, device inventory listings, and coverage windows.',
      },
      {
        heading: '2. Spare Part Replacement & Warranty',
        body: 'For Comprehensive AMC packages, replacement OEM spare parts provided by Mint AMC carry full warranty coverage for the duration of the active contract period.',
      },
      {
        heading: '3. Payment & Renewal Terms',
        body: 'Contracts are billed according to agreed annual, semi-annual, or quarterly schedules. Services renew upon mutual execution of updated equipment inventory listings.',
      },
      {
        heading: '4. Limitation of Liability',
        body: 'Mint AMC liability is governed by contractual SLA credit remedies defined within executed Master Service Agreements.',
      },
    ],
  },
  slaTemplate: {
    title: 'Master Service Level Agreement (SLA) Overview',
    version: '4.2',
    overview: 'This document defines the standard contractual SLA benchmarks, response time guarantees, spare part logistics commitments, and exclusion rules for Mint AMC contracts.',
    metrics: [
      { metric: 'Priority 1 Emergency Outage Response', target: '< 15 Mins Remote Triage / < 2 Hours On-Site Dispatch', penalty: '5% Service Credit per hour past SLA' },
      { metric: 'Hardware Spare Part Replacement', target: 'Guaranteed OEM Part Replacement within 4 Hours', penalty: 'Standby Unit Deployment / Credit Penalty' },
      { metric: '24/7 Network Uptime Commitment', target: '99.99% Core Network Availability', penalty: 'Pro-rata Contract Service Credit' },
    ],
    exclusions: [
      'Physical damage caused by natural disasters, flooding, fire, or severe electrical surge outside PAC/UPS scope.',
      'Unauthorized third-party tampering, unapproved hardware modifications, or physical movement without NOC notice.',
      'Software defects or kernel bugs originating from unpatched third-party applications outside vendor support lifecycles.',
    ],
  },
};
