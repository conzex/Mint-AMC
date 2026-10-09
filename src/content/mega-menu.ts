import type { LucideIcon } from 'lucide-react';
import {
  Monitor,
  Laptop,
  Printer,
  HardDrive,
  Network,
  Wifi,
  Cable,
  Shield,
  Server,
  Database,
  Building2,
  Cloud,
  Activity,
  Code,
  Lock,
  Wrench,
  RotateCcw,
  Briefcase,
  Landmark,
  Store,
  Stethoscope,
  GraduationCap,
  FileCheck,
  CheckSquare,
  Clock,
} from 'lucide-react';

export type MegaMenuLink = { slug: string; label: string; icon: LucideIcon };
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
      { slug: 'desktop-amc', label: 'Desktop AMC', icon: Monitor },
      { slug: 'laptop-amc', label: 'Laptop AMC', icon: Laptop },
      { slug: 'printer-mfp-amc', label: 'Printer & MFP AMC', icon: Printer },
      { slug: 'scanner-peripheral-amc', label: 'Scanner & Peripheral AMC', icon: HardDrive },
    ],
  },
  {
    id: 'network',
    heading: 'Network & Communication',
    icon: Network,
    links: [
      { slug: 'network-equipment-amc', label: 'Network Equipment AMC', icon: Network },
      { slug: 'wifi-wireless-amc', label: 'WiFi & Wireless AMC', icon: Wifi },
      { slug: 'structured-cabling-amc', label: 'Structured Cabling AMC', icon: Cable },
      { slug: 'firewall-utm-amc', label: 'Firewall & UTM AMC', icon: Shield },
    ],
  },
  {
    id: 'infrastructure',
    heading: 'Infrastructure & Data Centre',
    icon: Server,
    links: [
      { slug: 'server-amc', label: 'Server AMC', icon: Server },
      { slug: 'storage-san-nas-amc', label: 'Storage & SAN/NAS AMC', icon: Database },
      { slug: 'data-centre-infrastructure-amc', label: 'Data Centre Infrastructure AMC', icon: Building2 },
      { slug: 'cloud-infrastructure-support', label: 'Cloud Infrastructure Support', icon: Cloud },
    ],
  },
  {
    id: 'monitoring',
    heading: 'Services & Monitoring',
    icon: Activity,
    links: [
      { slug: 'monitoring-noc', label: '24/7 Remote Monitoring (NOC)', icon: Activity },
      { slug: 'software-os-support', label: 'Software & OS Support', icon: Code },
      { slug: 'cybersecurity-support', label: 'Cybersecurity Support', icon: Lock },
      { slug: 'remote-hands', label: 'Remote Hands & Smart Hands', icon: Wrench },
      { slug: 'disaster-recovery', label: 'Disaster Recovery Support', icon: RotateCcw },
    ],
  },
];

export const allServiceSlugs = megaMenuColumns.flatMap((c) => c.links.map((l) => l.slug));

export const solutionsMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'by-industry-1',
    heading: 'Enterprise & Financial',
    icon: Briefcase,
    links: [
      { slug: 'enterprise', label: 'Enterprise Multi-Site AMC', icon: Briefcase },
      { slug: 'bfsi', label: 'BFSI & Financial Institutions', icon: Landmark },
      { slug: 'smb', label: 'SMB & Branch Office AMC', icon: Store },
    ],
  },
  {
    id: 'by-industry-2',
    heading: 'Public & Healthcare',
    icon: Stethoscope,
    links: [
      { slug: 'healthcare', label: 'Healthcare & Clinical Uptime', icon: Stethoscope },
      { slug: 'education', label: 'Education & Campus IT', icon: GraduationCap },
      { slug: 'government', label: 'Government & PSU Tenders', icon: FileCheck },
    ],
  },
  {
    id: 'by-need-1',
    heading: 'Maintenance Models',
    icon: CheckSquare,
    links: [
      { slug: 'comprehensive', label: 'Comprehensive AMC (Parts + Labor)', icon: CheckSquare },
      { slug: 'preventive', label: 'Preventive Maintenance (PM)', icon: Clock },
    ],
  },
  {
    id: 'by-need-2',
    heading: 'Specialised Operations',
    icon: Wrench,
    links: [
      { slug: 'break-fix', label: 'Break-Fix & On-Call Engineering', icon: Wrench },
      { slug: 'remote-hands', label: 'Data Centre Remote Hands & NOC', icon: Server },
    ],
  },
];

export const allSolutionSlugs = solutionsMegaMenuColumns.flatMap((c) => c.links.map((l) => l.slug));
