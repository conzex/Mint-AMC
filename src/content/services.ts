export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'desktop' | 'laptop' | 'network' | 'server' | 'printer' | 'shield' | 'cloud' | 'clock';
  benefits: string[];
  deliverables: string[];
  slaOptions: string[];
  targetAudience: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'hardware-amc',
    title: 'Desktop & Laptop AMC',
    shortDescription: 'Comprehensive hardware maintenance, motherboard repair, and component replacement for enterprise user endpoints.',
    fullDescription: 'Mint AMC Desktop and Laptop maintenance contracts provide complete lifecycle hardware coverage for enterprise fleets. We manage component failures, display panels, power units, motherboard repairs, and disk replacements with guaranteed on-site SLA response times.',
    iconName: 'desktop',
    benefits: [
      'Zero user downtime with hot-swappable standby laptops and desktops',
      'Quarterly physical preventive maintenance, internal de-dusting, and thermal paste re-application',
      'Full coverage of OEM spare parts without hidden component charges',
      'Dedicated desktop support engineer options for large campus facilities',
    ],
    deliverables: [
      'On-site hardware troubleshooting and component replacement within SLA',
      'Original OEM spare part sourcing (Dell, HP, Lenovo, Apple)',
      'OS re-imaging, driver optimization, and endpoint security deployment',
      'Asset inventory tagging and hardware health diagnostic reports',
    ],
    slaOptions: [
      '4-Hour On-Site Resolution SLA (Metros & Major Cities)',
      'Next Business Day (NBD) Hardware Replacement (Tier 2/3 Locations)',
    ],
    targetAudience: 'Corporate offices, BPOs, call centers, and multi-branch financial institutions with 50+ user workstations.',
  },
  {
    slug: 'software-support',
    title: 'Software & Application Support',
    shortDescription: 'Operating system patching, software distribution, virus remediation, and enterprise app troubleshooting.',
    fullDescription: 'Our Software AMC ensures your endpoint operating systems, productivity suites, and line-of-business applications remain patched, secure, and fully operational across Windows, macOS, and Linux client environments.',
    iconName: 'laptop',
    benefits: [
      'Automated OS security patch management without workflow disruption',
      'Rapid remote desktop assistance for instant user issue resolution',
      'Malware ransomware cleanup and endpoint antivirus management',
      'Software license compliance tracking and inventory audit',
    ],
    deliverables: [
      '24/7 Remote helpdesk support via ticket and phone hotline',
      'Centralized patch distribution and vulnerability remediation',
      'Application configuration and enterprise software deployment',
      'Root-cause analysis reports for recurring application crashes',
    ],
    slaOptions: [
      '15-Minute Remote Triage SLA for Critical Software Blockers',
      '1-Hour Standard Helpdesk First-Contact Resolution',
    ],
    targetAudience: 'Organizations needing centralized IT helpdesk support, software update governance, and remote endpoint management.',
  },
  {
    slug: 'network-management',
    title: 'Network Equipment AMC',
    shortDescription: 'Active and passive network maintenance for switches, routers, firewalls, access points, and structured cabling.',
    fullDescription: 'Mint AMC Network Services cover core routers, managed switches, next-generation firewalls, wireless access controllers, and structured fiber/Ethernet cabling. We guarantee continuous uptime for your corporate LAN, WAN, and VPN infrastructure.',
    iconName: 'network',
    benefits: [
      'Proactive monitoring of bandwidth utilization, packet loss, and port status',
      'Rapid replacement of failed network switch modules and power supplies',
      'Firewall rule auditing, VPN tunnel maintenance, and security hardening',
      'Standby network hardware allocation to prevent extended outages',
    ],
    deliverables: [
      '24/7 Network Operations Center (NOC) ping and SNMP monitoring',
      'Configuration backup and disaster recovery restore for all network devices',
      'Firmware upgrades, patch application, and security vulnerability patching',
      'Physical cabling audit and OTDR fiber testing for structured networks',
    ],
    slaOptions: [
      '2-Hour On-Site Hardware Replacement SLA for Core Switches & Firewalls',
      '4-Hour SLA for Edge Access Switches and Wireless Access Points',
    ],
    targetAudience: 'Enterprises, data centers, logistics hubs, and campuses dependent on mission-critical network connectivity.',
  },
  {
    slug: 'printer-peripheral',
    title: 'Printer & Peripheral AMC',
    shortDescription: 'Maintenance for multi-function laser printers, heavy-duty scanners, thermal barcode printers, and UPS units.',
    fullDescription: 'Keep your document workflows running smoothly with specialized AMC packages for enterprise printers, high-volume scanners, barcode label units, and peripheral devices. Includes mechanical maintenance, roller replacement, and toner/fuser servicing.',
    iconName: 'printer',
    benefits: [
      'Eliminate printing bottlenecks with scheduled monthly mechanical tuning',
      'Genuine replacement parts including fuser assemblies, pickup rollers, and logic boards',
      'Network print server configuration and driver deployment across user PCs',
      'Cost-per-page tracking and consumable management advisory',
    ],
    deliverables: [
      'On-site technician visit for mechanical repair and clearing media jams',
      'Replacement of worn consumables and mechanical assemblies',
      'Network printer IP configuration and print queue management',
      'Preventive cleaning and optical sensor calibration',
    ],
    slaOptions: [
      '4-Hour On-Site Resolution SLA for High-Volume Production Printers',
      'Next Business Day SLA for Standard Office Desktop Printers',
    ],
    targetAudience: 'Logistics hubs, retail branches, legal firms, and corporate offices with high document printing volumes.',
  },
  {
    slug: 'server-storage',
    title: 'Server & Storage AMC',
    shortDescription: 'Rack and tower server maintenance, RAID array rebuilds, SAN/NAS storage support, and hypervisor management.',
    fullDescription: 'Our Server and Storage AMC covers rackmount servers, blade chassis, SAN/NAS arrays, and tape backup systems across Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem, and IBM infrastructure. Backed by certified server engineers and guaranteed spare availability.',
    iconName: 'server',
    benefits: [
      '24/7 hardware telemetry monitoring for disk failure, memory ECC errors, and PSU degrades',
      'Hot-plug hard drive and RAID controller replacement without server downtime',
      'VMware ESXi, Hyper-V, and Linux kernel patching and hypervisor support',
      'Comprehensive backup verification and disaster recovery restoration drills',
    ],
    deliverables: [
      'Immediate on-site engineer dispatch with pre-configured OEM spare components',
      'Firmware updates for BIOS, iDRAC/iLO controllers, and storage controller HBAs',
      'Quarterly server health audit and thermal cooling efficiency checks',
      'Root-cause failure analysis and log extraction for OEM escalation',
    ],
    slaOptions: [
      '2-Hour On-Site Spare Parts Replacement SLA (Mission-Critical Servers)',
      '4-Hour On-Site SLA (Standard Business Infrastructure Servers)',
    ],
    targetAudience: 'Data centers, corporate server rooms, financial institutions, and cloud hosting providers running mission-critical workloads.',
  },
  {
    slug: 'data-centre',
    title: 'Data Centre Infrastructure AMC',
    shortDescription: 'Facility maintenance for Precision AC (PAC), Online UPS, battery banks, power distribution (PDU), and fire suppression.',
    fullDescription: 'Mint AMC Data Centre services manage the physical environmental infrastructure keeping your server room online. We maintain Precision Air Conditioners (PAC), industrial UPS systems, VRLA battery banks, static transfer switches, and VESDA fire detection systems.',
    iconName: 'shield',
    benefits: [
      'Prevent thermal shutdown with 24/7 temperature and humidity monitoring',
      'Regular battery impedance testing and proactive cell replacement',
      'UPS static bypass drills and generator failover testing',
      'Compliance alignment with Tier-III data centre uptime standards',
    ],
    deliverables: [
      'Comprehensive monthly PM visits for PAC gas pressures, filters, and compressors',
      'UPS electrical load testing, capacitor replacement, and thermal scanning',
      'Fire suppression cylinder pressure check and smoke detection testing',
      '24/7 emergency response hotline for cooling and power outages',
    ],
    slaOptions: [
      '1-Hour Emergency On-Site Response for PAC Cooling or UPS Alarms',
      '2-Hour Response SLA for Auxiliary Power Distribution Units',
    ],
    targetAudience: 'Enterprise data centers, colocation facilities, bank core banking rooms, and industrial control centers.',
  },
  {
    slug: 'cloud-support',
    title: 'Cloud Infrastructure Support',
    shortDescription: 'Managed support for AWS, Microsoft Azure, Google Cloud, and private cloud hosting environments.',
    fullDescription: 'Extend your AMC coverage to cloud and hybrid infrastructure. Mint AMC cloud support includes 24/7 VM monitoring, cloud security configuration, cost optimization, auto-scaling policy management, and backup orchestration.',
    iconName: 'cloud',
    benefits: [
      'Continuous cloud resource optimization to reduce monthly cloud spend',
      'Proactive monitoring of cloud instance health, CPU, memory, and disk IOPS',
      'Cloud security posture management and IAM access privilege audits',
      'Automated multi-region backup snapshots and disaster recovery failover',
    ],
    deliverables: [
      '24/7 Cloud NOC monitoring and automated incident remediation',
      'Architectural review and infrastructure-as-code (Terraform/ARM) maintenance',
      'Cloud firewall security group and VPC routing management',
      'Monthly cloud health, security compliance, and cost optimization report',
    ],
    slaOptions: [
      '15-Minute Response SLA for Cloud Outages and Service Degradations',
      '1-Hour SLA for Cloud Provisioning and Configuration Requests',
    ],
    targetAudience: 'Companies running hybrid cloud architectures, SaaS platforms, and cloud-native enterprise applications.',
  },
  {
    slug: '247-monitoring',
    title: '24/7 Remote Monitoring & NOC',
    shortDescription: 'Continuous Network Operations Center (NOC) surveillance, telemetry tracking, and automated alert dispatch.',
    fullDescription: 'Our centralized 24/7 Network Operations Center monitors your entire IT footprint in real time. We track device health, network latency, server loads, storage capacity, and environmental sensors, resolving incidents before they impact end-users.',
    iconName: 'clock',
    benefits: [
      'Catch impending hardware failures days before catastrophic breakdown',
      'Reduce mean-time-to-resolution (MTTR) with automated NOC incident tickets',
      'Real-time SLA tracking dashboard for IT leadership visibility',
      'Eliminate internal after-hours on-call burden for your IT staff',
    ],
    deliverables: [
      'Continuous SNMP, ICMP, and agent-based telemetry surveillance',
      'Instant SMS, email, and phone alert escalation for critical thresholds',
      'Monthly executive SLA reporting and infrastructure trend analysis',
      'Remote remediation script execution for immediate incident recovery',
    ],
    slaOptions: [
      'Immediate Automated Alert Dispatch (< 3 minutes from metric breach)',
      '15-Minute Human NOC Engineer Triage and Escalation Guarantee',
    ],
    targetAudience: 'Any enterprise requiring round-the-clock infrastructure oversight without maintaining an internal 24/7 NOC shift.',
  },
];
