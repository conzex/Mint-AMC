export const privacyContent = {
  title: 'Privacy Policy & Data Governance',
  subtitle: 'How Mint AMC processes, secures, and safeguards customer data across our AMC field operations and NOC monitoring platforms.',
  sections: [
    {
      heading: '1. Information We Collect',
      body:
        'Mint AMC collects business contact information (name, work email, phone, designation), company asset inventory parameters (hardware serial numbers, location spread, network topology), and technical helpdesk ticket records. We collect data necessary for contract execution and service delivery. We do not sell or monetize personal data.',
    },
    {
      heading: '2. Purpose and Legal Basis of Processing',
      body:
        'Data collected is processed to fulfill Annual Maintenance Contracts (AMC), provide 24/7 technical helpdesk support, perform preventive maintenance, dispatch field engineers, manage spare parts logistics, and meet legal and regulatory reporting obligations under Indian law.',
    },
    {
      heading: '3. Data Retention & Infrastructure Security',
      body:
        'Customer operational logs and service ticket records are retained for the active term of the AMC contract plus 3 years for audit compliance. All client data is encrypted in transit (TLS 1.3) and at rest (AES-256) within secure Tier-III data center facilities managed by CONZEX GLOBAL PRIVATE LIMITED.',
    },
    {
      heading: '4. Third-Party Sharing & OEM Partnerships',
      body:
        'We share asset diagnostic data with original equipment manufacturers (OEMs) strictly when authorized by the client to process warranty claims or secure specialized spare parts. All sub-processors adhere to strict non-disclosure agreements (NDAs) and data protection standards.',
    },
    {
      heading: '5. Client Data Rights & Enquiries',
      body:
        'Clients may request data access, correction, or export of their infrastructure audit logs by emailing support@mintamc.com. For formal data privacy inquiries, write to: Privacy Governance Officer, CONZEX GLOBAL PRIVATE LIMITED, Noida, NCR, India.',
    },
  ],
};

export const termsContent = {
  title: 'Terms of Service',
  subtitle: 'General terms governing the use of the Mint AMC digital portal, service agreements, and commercial proposals.',
  sections: [
    {
      heading: '1. Master AMC Agreement Precedence',
      body:
        'This website provides general information regarding Mint AMC capabilities. Formal binding obligations, SLA commitments, hardware scope, and commercial pricing are governed exclusively by your signed Master AMC Agreement and Statement of Work (SOW).',
    },
    {
      heading: '2. Proposals & Indicative Pricing',
      body:
        'Pricing calculators and indicative rates displayed on this portal are for estimation purposes and non-binding until confirmed in an official, executed commercial proposal issued by CONZEX GLOBAL PRIVATE LIMITED.',
    },
    {
      heading: '3. Intellectual Property Rights',
      body:
        'All trademarks, logos, brand names, service marks, and proprietary software interfaces displayed on this site (including Mint AMC, xHosting, xData Center, Defendx, and UiDRAC) are owned by CONZEX GLOBAL PRIVATE LIMITED or its division partners.',
    },
    {
      heading: '4. Limitation of Liability',
      body:
        'In no event shall Mint AMC or CONZEX GLOBAL PRIVATE LIMITED be liable for indirect, incidental, or consequential damages arising from website access. Contractual remedies for service downtime are limited to agreed SLA credits as specified in your Master AMC agreement.',
    },
    {
      heading: '5. Governing Law & Jurisdiction',
      body:
        'These terms and all commercial agreements are governed by the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts in Delhi / NCR, India.',
    },
  ],
};

export const slaContent = {
  title: 'Service Level Agreement (SLA) Overview',
  intro:
    'Mint AMC guarantees transparent, time-bound response and resolution SLAs backed by financial SLA credits and dedicated field engineering teams across India.',
  sections: [
    {
      heading: '1. Incident Severity Definitions',
      body:
        '• Severity 1 (P1 - Critical): Total site failure, core server/datacenter outage, or major network disruption impacting core operations.\n• Severity 2 (P2 - High): Major service degradation affecting multiple users or critical business applications with partial workaround.\n• Severity 3 (P3 - Medium): Moderate operational issue affecting single user or non-critical asset.\n• Severity 4 (P4 - Low): Service requests, minor inquiries, preventive health checks, or scheduled maintenance.',
    },
    {
      heading: '2. SLA Tier Response Matrix',
      body:
        '• Essential Tier: 8×5 Helpdesk support, remote response within 1 hour, next-business-day (NBD) onsite dispatch.\n• Professional Tier: 12×6 Extended helpdesk, 15-minute response, 4-hour onsite SLA in tier-1 metros.\n• Enterprise Tier: 24/7 Dedicated NOC hotline, 15-minute critical response, 2-hour emergency onsite dispatch with resident engineer options.',
    },
    {
      heading: '3. Preventive Maintenance (PM) Schedule',
      body:
        'All standard AMC contracts include quarterly preventive maintenance visits covering physical dusting, thermal check, firmware/patch audits, cable management, and hardware health diagnostics.',
    },
    {
      heading: '4. Service Credits & Performance Audits',
      body:
        'Monthly SLA compliance metrics are reported via our client dashboard. If quarterly response commitments are breached due to Mint AMC fault, service credits are automatically applied to the subsequent invoice cycle.',
    },
  ],
};
