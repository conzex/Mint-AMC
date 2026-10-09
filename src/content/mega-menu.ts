import type { LucideIcon } from 'lucide-react';
import { Monitor, Network, Server, Activity } from 'lucide-react';

export type MegaMenuLink = { slug: string; label: string };
export type MegaMenuColumn = {
  id: string;
  heading: string;
  icon: LucideIcon;
  links: MegaMenuLink[];
};

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'end-user',
    heading: '{{MEGA_MENU_CATEGORY_END_USER}}',
    icon: Monitor,
    links: [
      { slug: 'desktop-amc', label: '{{MEGA_MENU_LINK_DESKTOP_AMC}}' },
      { slug: 'laptop-amc', label: '{{MEGA_MENU_LINK_LAPTOP_AMC}}' },
      { slug: 'printer-mfp-amc', label: '{{MEGA_MENU_LINK_PRINTER_MFP_AMC}}' },
      { slug: 'scanner-peripheral-amc', label: '{{MEGA_MENU_LINK_SCANNER_PERIPHERAL_AMC}}' },
    ],
  },
  {
    id: 'network',
    heading: '{{MEGA_MENU_CATEGORY_NETWORK}}',
    icon: Network,
    links: [
      { slug: 'network-equipment-amc', label: '{{MEGA_MENU_LINK_NETWORK_EQUIPMENT_AMC}}' },
      { slug: 'wifi-wireless-amc', label: '{{MEGA_MENU_LINK_WIFI_WIRELESS_AMC}}' },
      { slug: 'structured-cabling-amc', label: '{{MEGA_MENU_LINK_STRUCTURED_CABLING_AMC}}' },
      { slug: 'firewall-utm-amc', label: '{{MEGA_MENU_LINK_FIREWALL_UTM_AMC}}' },
    ],
  },
  {
    id: 'infrastructure',
    heading: '{{MEGA_MENU_CATEGORY_INFRASTRUCTURE}}',
    icon: Server,
    links: [
      { slug: 'server-amc', label: '{{MEGA_MENU_LINK_SERVER_AMC}}' },
      { slug: 'storage-san-nas-amc', label: '{{MEGA_MENU_LINK_STORAGE_SAN_NAS_AMC}}' },
      { slug: 'data-centre-infrastructure-amc', label: '{{MEGA_MENU_LINK_DATA_CENTRE_INFRA_AMC}}' },
      { slug: 'cloud-infrastructure-support', label: '{{MEGA_MENU_LINK_CLOUD_INFRA_SUPPORT}}' },
    ],
  },
  {
    id: 'monitoring',
    heading: '{{MEGA_MENU_CATEGORY_MONITORING}}',
    icon: Activity,
    links: [
      { slug: 'monitoring-noc', label: '{{MEGA_MENU_LINK_MONITORING_NOC}}' },
      { slug: 'software-os-support', label: '{{MEGA_MENU_LINK_SOFTWARE_OS_SUPPORT}}' },
      { slug: 'cybersecurity-support', label: '{{MEGA_MENU_LINK_CYBERSECURITY_SUPPORT}}' },
      { slug: 'remote-hands', label: '{{MEGA_MENU_LINK_REMOTE_HANDS}}' },
      { slug: 'disaster-recovery', label: '{{MEGA_MENU_LINK_DISASTER_RECOVERY}}' },
    ],
  },
];

export const allServiceSlugs = megaMenuColumns.flatMap((c) => c.links.map((l) => l.slug));
