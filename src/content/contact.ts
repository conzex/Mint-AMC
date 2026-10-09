export const contactContent = {
  heroTitle: 'Contact & support',
  heroSubtitle: 'Reach sales, service desk, or escalations. Existing customers should use the NOC hotline for priority incidents.',
  formTitle: 'Send an inquiry',
  formSentMessage: 'Your email client should open with your message addressed to our team.',
  formSubmitLabel: 'Open in email',
  formPlaceholders: {
    name: 'Your name',
    email: 'Work email',
    subject: 'Subject',
    message: 'How can we help?',
  },
  nocTitle: 'NOC hotline (contracted customers)',
  nocBody: 'For severity-1 incidents under an active AMC with NOC entitlement, call the hotline for immediate triage.',
  escalationTitle: 'Escalation matrix',
  escalationMatrix: [
    { level: 'L1 — Service desk', contact: 'support@mintamc.com', sla: 'Ticket acknowledgement per SLA' },
    { level: 'L2 — Duty manager', contact: 'escalations@mintamc.com', sla: 'Within 2 hours for P1' },
    { level: 'L3 — Programme director', contact: 'escalations@mintamc.com', sla: 'Executive bridge for major incidents' },
  ],
  faq: [
    {
      question: 'How do I request a new AMC proposal?',
      answer: 'Use the form or email support@mintamc.com with asset counts, locations, and desired SLA. We will schedule a discovery call.',
    },
    {
      question: 'Do you support multi-vendor estates?',
      answer: 'Yes. Mint AMC is designed for mixed OEM environments under one governance model.',
    },
  ],
};
