export const legalData = {
  privacy: {
    title: '{{PRIVACY_TITLE}}',
    lastUpdated: '{{PRIVACY_LAST_UPDATED}}',
    sections: [
      { heading: '{{PRIVACY_S1_HEADING}}', body: '{{PRIVACY_S1_BODY}}' },
      { heading: '{{PRIVACY_S2_HEADING}}', body: '{{PRIVACY_S2_BODY}}' },
      { heading: '{{PRIVACY_S3_HEADING}}', body: '{{PRIVACY_S3_BODY}}' },
      { heading: '{{PRIVACY_S4_HEADING}}', body: '{{PRIVACY_S4_BODY}}' },
    ],
  },
  terms: {
    title: '{{TERMS_TITLE}}',
    lastUpdated: '{{TERMS_LAST_UPDATED}}',
    sections: [
      { heading: '{{TERMS_S1_HEADING}}', body: '{{TERMS_S1_BODY}}' },
      { heading: '{{TERMS_S2_HEADING}}', body: '{{TERMS_S2_BODY}}' },
      { heading: '{{TERMS_S3_HEADING}}', body: '{{TERMS_S3_BODY}}' },
      { heading: '{{TERMS_S4_HEADING}}', body: '{{TERMS_S4_BODY}}' },
    ],
  },
  slaTemplate: {
    title: '{{SLA_TEMPLATE_TITLE}}',
    version: '{{SLA_TEMPLATE_VERSION}}',
    overview: '{{SLA_TEMPLATE_OVERVIEW}}',
    metrics: [
      { metric: '{{SLA_METRIC_1_NAME}}', target: '{{SLA_METRIC_1_TARGET}}', penalty: '{{SLA_METRIC_1_PENALTY}}' },
      { metric: '{{SLA_METRIC_2_NAME}}', target: '{{SLA_METRIC_2_TARGET}}', penalty: '{{SLA_METRIC_2_PENALTY}}' },
      { metric: '{{SLA_METRIC_3_NAME}}', target: '{{SLA_METRIC_3_TARGET}}', penalty: '{{SLA_METRIC_3_PENALTY}}' },
    ],
    exclusions: [
      '{{SLA_EXCLUSION_1}}',
      '{{SLA_EXCLUSION_2}}',
      '{{SLA_EXCLUSION_3}}',
    ],
  },
};
