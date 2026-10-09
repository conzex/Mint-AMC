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
    heading: 'End-User IT',
    icon: Monitor,
    links: [
      { slug: 'desktop-amc', label: 'Desktop AMC' },
      { slug: 'laptop-amc', label: 'Laptop AMC' },
      { slug: 'printer-mfp-amc', label: 'Printer & MFP AMC' },
      { slug: 'scanner-peripheral-amc', label: 'Scanner & Peripheral AMC' },
    ],
  },
  {
    id: 'network',
    heading: 'Network & Communication',
    icon: Network,
    links: [
      { slug: 'network-equipment-amc', label: 'Network Equipment AMC' },
      { slug: 'wifi-wireless-amc', label: 'WiFi & Wireless AMC' },
      { slug: 'structured-cabling-amc', label: 'Structured Cabling AMC' },
      { slug: 'firewall-utm-amc', label: 'Firewall & UTM AMC' },
    ],
  },
  {
    id: 'infrastructure',
    heading: 'Infrastructure & Data Centre',
    icon: Server,
    links: [
      { slug: 'server-amc', label: 'Server AMC' },
      { slug: 'storage-san-nas-amc', label: 'Storage & SAN/NAS AMC' },
      { slug: 'data-centre-infrastructure-amc', label: 'Data Centre Infrastructure AMC' },
      { slug: 'cloud-infrastructure-support', label: 'Cloud Infrastructure Support' },
    ],
  },
  {
    id: 'monitoring',
    heading: 'Services & Monitoring',
    icon: Activity,
    links: [
      { slug: 'monitoring-noc', label: '24/7 Remote Monitoring (NOC)' },
      { slug: 'software-os-support', label: 'Software & OS Support' },
      { slug: 'cybersecurity-support', label: 'Cybersecurity Support' },
      { slug: 'remote-hands', label: 'Remote Hands & Smart Hands' },
      { slug: 'disaster-recovery', label: 'Disaster Recovery Support' },
    ],
  },
];

export const allServiceSlugs = megaMenuColumns.flatMap((c) => c.links.map((l) => l.slug));
