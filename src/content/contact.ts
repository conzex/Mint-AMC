export const contactData = {
  hero: {
    title: 'Connect with Our NOC & Enterprise AMC Team',
    subtitle: 'Request a customized SLA proposal, schedule an infrastructure audit, or reach our 24/7 Command Center.',
  },
  form: {
    title: 'Request a Customized IT AMC Proposal',
    nameLabel: 'Full Name',
    emailLabel: 'Corporate Email Address',
    phoneLabel: 'Phone Number',
    companyLabel: 'Company / Organization Name',
    serviceLabel: 'Primary Service Category Needed',
    messageLabel: 'Infrastructure Details & Requirements',
    submitButton: 'Submit AMC Proposal Request',
    successMessage: 'Thank you. Your proposal request has been logged. An infrastructure specialist will contact you within 4 business hours.',
  },
  nocHotline: {
    title: '24/7 NOC Emergency Technical Support',
    description: 'For active contract holders requiring immediate Priority 1 emergency triage or on-site dispatch.',
    phone: '+91 1800-210-9900',
    email: 'noc@mintamc.com',
    availability: '24 Hours a Day | 7 Days a Week | 365 Days a Year',
  },
  escalationMatrix: [
    { level: 'Level 1', role: 'NOC Helpdesk Triage Engineer', contact: '1800-210-9900', time: '< 15 Minutes' },
    { level: 'Level 2', role: 'Senior Field Service Lead', contact: 'l2support@mintamc.com', time: '< 1 Hour' },
    { level: 'Level 3', role: 'VP of Infrastructure Operations', contact: 'head.ops@mintamc.com', time: '< 2 Hours' },
  ],
  divisionRouting: {
    title: 'Looking for non-AMC Conzex Global Services?',
    description: 'Inquiries for Cloud Hosting, Colocation Data Centre, or Managed Security are routed directly to sister divisions:',
    divisions: [
      { name: 'Conzex Hosting', desc: 'Cloud VPS, Domains, Dedicated Servers', link: 'https://www.conzex.com' },
      { name: 'Conzex Data Centre', desc: 'Colocation Racks, DR Infrastructure', link: 'https://www.conzex.com/datacentre' },
      { name: 'Conzex Cyber Security', desc: 'SOC Monitoring, VAPT, Compliance', link: 'https://www.conzex.com/security' },
    ],
  },
};
