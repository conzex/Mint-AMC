export const pricingContent = {
  heroTitle: 'Transparent AMC pricing for every IT environment',
  heroSubtitle:
    'Per-device and per-site models with no hidden dispatch fees. Final pricing depends on asset count, geography, SLA tier, and comprehensive vs non-comprehensive coverage.',
  heroCtaQuote: 'Get a custom quote',
  heroCtaPdf: 'Download pricing overview',
  pdfHref: '/contact?topic=pricing-pdf',
  tiers: [
    {
      id: 'essential',
      name: 'Essential',
      tagline: 'For small offices and branch sites',
      price: 'From custom quote',
      unit: 'Per device / per year · comprehensive or labour-only',
      features: [
        '8×5 remote helpdesk and ticket portal',
        'Next-business-day onsite (NBD) where contracted',
        'Quarterly preventive maintenance',
        'Standard parts billed separately unless comprehensive',
      ],
      cta: 'Get started',
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'For growing multi-location businesses',
      price: 'From custom quote',
      unit: 'Per device or site bundle · annual or quarterly billing',
      features: [
        'Extended-hours support with priority queue',
        '4-hour onsite SLA in major metros (when in scope)',
        'Comprehensive parts option for covered assets',
        '24/7 ping/SNMP monitoring add-on available',
      ],
      cta: 'Request quote',
      popular: true,
      popularLabel: 'Most popular',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For large estates and data centre programmes',
      price: 'Custom commercial model',
      unit: 'Enterprise agreement · dedicated governance',
      features: [
        '24/7 NOC and critical-incident bridge',
        'Custom SLA, spares pool, and resident engineer options',
        'Multi-vendor OEM coordination',
        'Executive QBRs and audit-ready reporting',
      ],
      cta: 'Contact sales',
      popular: false,
    },
  ],
  perServiceTableTitle: 'Indicative per-service pricing (request formal quote)',
  perServiceRows: [
    { service: 'Desktop / Laptop AMC', coverage: 'Comprehensive', price: 'Quote per seat', sla: 'NBD – 4hr optional' },
    { service: 'Network Equipment AMC', coverage: 'Comprehensive', price: 'Quote per device', sla: '4hr / 8hr onsite' },
    { service: 'Server & Storage AMC', coverage: 'Comprehensive', price: 'Quote per node', sla: '4hr critical tier' },
    { service: 'Data Centre Infrastructure', coverage: 'On-call + PM', price: 'Quote per site', sla: 'Custom' },
    { service: '24/7 NOC Monitoring', coverage: 'Managed service', price: 'Quote per endpoint', sla: '15-min ack' },
  ],
  comparisonTitle: 'Plan comparison',
  comparisonFeatures: [
    { name: 'Remote helpdesk', essential: true, professional: true, enterprise: true },
    { name: 'Preventive maintenance', essential: true, professional: true, enterprise: true },
    { name: '4-hour onsite SLA', essential: false, professional: true, enterprise: true },
    { name: 'Comprehensive spare parts', essential: false, professional: true, enterprise: true },
    { name: '24/7 NOC & dedicated engineer', essential: false, professional: false, enterprise: true },
  ],
  addonsTitle: 'Optional add-on services',
  addons: [
    { title: 'Remote hands & smart hands', description: 'Datacentre rack-and-stack, cabling, and guided remote tasks.', price: 'Per incident or retainer' },
    { title: 'Cybersecurity support', description: 'Patch governance, AV management, and coordinated incident response.', price: 'Per endpoint' },
    { title: 'Cloud infrastructure support', description: 'Hybrid monitoring and escalation for cloud workloads.', price: 'Per environment' },
    { title: 'Disaster recovery support', description: 'DR drill assistance, failover runbooks, and recovery coordination.', price: 'Per site programme' },
  ],
  faq: [
    {
      question: 'What is the difference between comprehensive and non-comprehensive AMC?',
      answer:
        'Comprehensive contracts include agreed spare parts and labour for covered failures. Non-comprehensive covers labour and logistics while parts are billed at OEM or agreed rates.',
    },
    {
      question: 'How is pricing calculated?',
      answer:
        'We price by asset type, count, location spread, SLA tier, and whether monitoring/NOC is included. Multi-year agreements may include volume benefits.',
    },
    {
      question: 'Can we mix SLAs across sites?',
      answer:
        'Yes. Enterprise programmes often define gold/silver/bronze tiers per site or asset class within one master agreement.',
    },
  ],
  closingCtaTitle: 'Need a custom AMC plan? Our engineers will design one for you.',
  closingCtaButton: 'Request custom quote',
  tableHeaders: {
    service: 'Service',
    coverage: 'Coverage type',
    price: 'Starting price',
    sla: 'Response SLA',
    cta: 'Request quote',
    feature: 'Capability',
    essential: 'Essential',
    professional: 'Professional',
    enterprise: 'Enterprise',
  },
};
