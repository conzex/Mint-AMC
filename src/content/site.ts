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
  brandName: '{{SITE_BRAND_NAME}}',
  tagline: '{{SITE_TAGLINE}}',
  parentCompany: {
    name: '{{PARENT_COMPANY_NAME}}',
    website: '{{PARENT_COMPANY_URL}}',
    cin: '{{PARENT_COMPANY_CIN}}',
    dpiitRecognition: '{{PARENT_DPIIT_RECOGNITION}}',
    divisions: [
      {
        name: '{{DIVISION_1_NAME}}',
        url: '{{DIVISION_1_URL}}',
        description: '{{DIVISION_1_DESC}}',
      },
      {
        name: '{{DIVISION_2_NAME}}',
        url: '{{DIVISION_2_URL}}',
        description: '{{DIVISION_2_DESC}}',
      },
      {
        name: '{{DIVISION_3_NAME}}',
        url: '{{DIVISION_3_URL}}',
        description: '{{DIVISION_3_DESC}}',
      },
      {
        name: '{{DIVISION_4_NAME}}',
        url: '{{DIVISION_4_URL}}',
        description: '{{DIVISION_4_DESC}}',
      },
    ],
  },
  navigation: {
    primaryLinks: [
      { label: '{{NAV_HOME_LABEL}}', href: '/' },
      { label: '{{NAV_SERVICES_LABEL}}', href: '/services' },
      { label: '{{NAV_SOLUTIONS_LABEL}}', href: '/solutions' },
      { label: '{{NAV_PRICING_LABEL}}', href: '/pricing' },
      { label: '{{NAV_WHY_LABEL}}', href: '/why-mint-amc' },
      { label: '{{NAV_ABOUT_LABEL}}', href: '/about' },
      { label: '{{NAV_RESOURCES_LABEL}}', href: '/resources' },
      { label: '{{NAV_CONTACT_LABEL}}', href: '/contact' },
    ],
    parentLink: {
      label: '{{PARENT_NAV_LABEL}}',
      href: '{{PARENT_COMPANY_URL}}',
    },
  },
  contact: {
    email: '{{CONTACT_EMAIL}}',
    phone: '{{CONTACT_PHONE}}',
    nocHotline: '{{NOC_HOTLINE}}',
    escalationEmail: '{{ESCALATION_EMAIL}}',
    headquarters: '{{HEADQUARTERS_ADDRESS}}',
    workingHours: '{{WORKING_HOURS}}',
  },
  footerLinks: {
    services: [
      { label: '{{FOOTER_SERVICE_1}}', href: '/services/hardware-amc' },
      { label: '{{FOOTER_SERVICE_2}}', href: '/services/software-support' },
      { label: '{{FOOTER_SERVICE_3}}', href: '/services/network-management' },
      { label: '{{FOOTER_SERVICE_4}}', href: '/services/printer-peripheral' },
      { label: '{{FOOTER_SERVICE_5}}', href: '/services/server-storage' },
      { label: '{{FOOTER_SERVICE_6}}', href: '/services/data-centre' },
      { label: '{{FOOTER_SERVICE_7}}', href: '/services/cloud-support' },
      { label: '{{FOOTER_SERVICE_8}}', href: '/services/247-monitoring' },
    ],
    solutions: [
      { label: '{{FOOTER_SOL_1}}', href: '/solutions#smb' },
      { label: '{{FOOTER_SOL_2}}', href: '/solutions#enterprise' },
      { label: '{{FOOTER_SOL_3}}', href: '/solutions#government' },
      { label: '{{FOOTER_SOL_4}}', href: '/solutions#healthcare' },
      { label: '{{FOOTER_SOL_5}}', href: '/solutions#education' },
    ],
    company: [
      { label: '{{FOOTER_COMP_1}}', href: '/about' },
      { label: '{{FOOTER_COMP_2}}', href: '/why-mint-amc' },
      { label: '{{FOOTER_COMP_3}}', href: '/pricing' },
      { label: '{{FOOTER_COMP_4}}', href: '/sla' },
      { label: '{{FOOTER_COMP_5}}', href: '/contact' },
    ],
    resources: [
      { label: '{{FOOTER_RES_1}}', href: '/resources' },
      { label: '{{FOOTER_RES_2}}', href: '/sla' },
    ],
    legal: [
      { label: '{{FOOTER_LEG_1}}', href: '/privacy' },
      { label: '{{FOOTER_LEG_2}}', href: '/terms' },
      { label: '{{FOOTER_LEG_3}}', href: '/sla' },
    ],
  },
};
