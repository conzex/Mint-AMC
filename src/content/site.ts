export interface SiteConfig {
  brandName: string;
  tagline: string;
  parentCompany: {
    name: string;
    website: string;
    cin: string;
    dpiitRecognition: string;
    divisions: Array<{ name: string; url: string; description: string }>;
  };
  navigation: {
    primaryLinks: Array<{ label: string; href: string }>;
    parentLink: { label: string; href: string };
  };
  contact: {
    email: string;
    phone: string;
    nocHotline: string;
    escalationEmail: string;
    headquarters: string;
    workingHours: string;
  };
  footerLinks: {
    services: Array<{ label: string; href: string }>;
    solutions: Array<{ label: string; href: string }>;
    company: Array<{ label: string; href: string }>;
    resources: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'Mint AMC',
  tagline: 'Enterprise IT Annual Maintenance Contracts & Proactive NOC Support',
  parentCompany: {
    name: 'CONZEX GLOBAL PRIVATE LIMITED',
    website: 'https://www.conzex.com',
    cin: 'U72900DL2021PTC384501',
    dpiitRecognition: 'DPIIT78492',
    divisions: [
      {
        name: 'Conzex Hosting',
        url: 'https://www.conzex.com',
        description: 'Enterprise Cloud Hosting, Bare-Metal VPS & Managed Infrastructure',
      },
      {
        name: 'Mint AMC',
        url: 'https://www.mintamc.com',
        description: 'Nationwide IT Hardware, Network & Data Centre AMC Services',
      },
      {
        name: 'Conzex Data Centre',
        url: 'https://www.conzex.com/datacentre',
        description: 'Tier-III Colocation, Dedicated Server Hosting & DR Services',
      },
      {
        name: 'Conzex Cyber Security',
        url: 'https://www.conzex.com/security',
        description: 'SOC Monitoring, VAPT, Compliance & Managed Perimeter Protection',
      },
    ],
  },
  navigation: {
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Why Mint AMC', href: '/why-mint-amc' },
      { label: 'About', href: '/about' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
    parentLink: {
      label: 'Conzex Global',
      href: 'https://www.conzex.com',
    },
  },
  contact: {
    email: 'support@mintamc.com',
    phone: '+91 (011) 4920-8800',
    nocHotline: '+91 1800-210-9900',
    escalationEmail: 'escalations@mintamc.com',
    headquarters: 'Conzex Towers, Sector 62, Noida, NCR, India',
    workingHours: '24/7/365 NOC Support | Business Office: Mon–Sat 9:00 AM – 6:00 PM IST',
  },
  footerLinks: {
    services: [
      { label: 'Desktop & Laptop AMC', href: '/services/hardware-amc' },
      { label: 'Software & Application Support', href: '/services/software-support' },
      { label: 'Network Equipment AMC', href: '/services/network-management' },
      { label: 'Printer & Peripheral AMC', href: '/services/printer-peripheral' },
      { label: 'Server & Storage AMC', href: '/services/server-storage' },
      { label: 'Data Centre Infrastructure AMC', href: '/services/data-centre' },
      { label: 'Cloud Infrastructure Support', href: '/services/cloud-support' },
      { label: '24/7 Remote Monitoring & NOC', href: '/services/247-monitoring' },
    ],
    solutions: [
      { label: 'SMB Infrastructure AMC', href: '/solutions#smb' },
      { label: 'Enterprise Multi-Site AMC', href: '/solutions#enterprise' },
      { label: 'Government & PSU AMC', href: '/solutions#government' },
      { label: 'Healthcare IT AMC', href: '/solutions#healthcare' },
      { label: 'Educational Institutions', href: '/solutions#education' },
    ],
    company: [
      { label: 'About Mint AMC', href: '/about' },
      { label: 'Why Choose Us', href: '/why-mint-amc' },
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'SLA Framework', href: '/sla' },
      { label: 'Contact & Support', href: '/contact' },
    ],
    resources: [
      { label: 'IT AMC Best Practices Guide', href: '/resources/it-amc-guide-2026' },
      { label: 'Preventive vs Break-Fix Analysis', href: '/resources/preventive-vs-breakfix-maintenance' },
      { label: 'SLA Selection Guidelines', href: '/resources/sla-selection-best-practices' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Master SLA Agreement', href: '/sla' },
    ],
  },
};
