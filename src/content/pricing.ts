export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  pricePlaceholder: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ComparisonFeature {
  category: string;
  featureName: string;
  essential: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingData = {
  tiers: [
    {
      id: 'essential',
      name: '{{TIER_ESSENTIAL_NAME}}',
      badge: '{{TIER_ESSENTIAL_BADGE}}',
      pricePlaceholder: '{{TIER_ESSENTIAL_PRICE}}',
      period: '{{TIER_ESSENTIAL_PERIOD}}',
      description: '{{TIER_ESSENTIAL_DESC}}',
      isPopular: false,
      features: [
        '{{TIER_ESSENTIAL_FEAT_1}}',
        '{{TIER_ESSENTIAL_FEAT_2}}',
        '{{TIER_ESSENTIAL_FEAT_3}}',
        '{{TIER_ESSENTIAL_FEAT_4}}',
      ],
      ctaLabel: '{{TIER_ESSENTIAL_CTA}}',
      ctaHref: '/contact?tier=essential',
    },
    {
      id: 'professional',
      name: '{{TIER_PRO_NAME}}',
      badge: '{{TIER_PRO_BADGE}}',
      pricePlaceholder: '{{TIER_PRO_PRICE}}',
      period: '{{TIER_PRO_PERIOD}}',
      description: '{{TIER_PRO_DESC}}',
      isPopular: true,
      features: [
        '{{TIER_PRO_FEAT_1}}',
        '{{TIER_PRO_FEAT_2}}',
        '{{TIER_PRO_FEAT_3}}',
        '{{TIER_PRO_FEAT_4}}',
        '{{TIER_PRO_FEAT_5}}',
      ],
      ctaLabel: '{{TIER_PRO_CTA}}',
      ctaHref: '/contact?tier=professional',
    },
    {
      id: 'enterprise',
      name: '{{TIER_ENTERPRISE_NAME}}',
      badge: '{{TIER_ENTERPRISE_BADGE}}',
      pricePlaceholder: '{{TIER_ENTERPRISE_PRICE}}',
      period: '{{TIER_ENTERPRISE_PERIOD}}',
      description: '{{TIER_ENTERPRISE_DESC}}',
      isPopular: false,
      features: [
        '{{TIER_ENTERPRISE_FEAT_1}}',
        '{{TIER_ENTERPRISE_FEAT_2}}',
        '{{TIER_ENTERPRISE_FEAT_3}}',
        '{{TIER_ENTERPRISE_FEAT_4}}',
        '{{TIER_ENTERPRISE_FEAT_5}}',
        '{{TIER_ENTERPRISE_FEAT_6}}',
      ],
      ctaLabel: '{{TIER_ENTERPRISE_CTA}}',
      ctaHref: '/contact?tier=enterprise',
    },
  ] as PricingTier[],

  comparisonMatrix: [
    {
      category: '{{COMP_CAT_RESPONSE}}',
      featureName: '{{COMP_FEAT_RESPONSE_TIME}}',
      essential: '{{COMP_VAL_4HR}}',
      professional: '{{COMP_VAL_2HR}}',
      enterprise: '{{COMP_VAL_30MIN}}',
    },
    {
      category: '{{COMP_CAT_RESPONSE}}',
      featureName: '{{COMP_FEAT_COVERAGE}}',
      essential: '{{COMP_VAL_8X5}}',
      professional: '{{COMP_VAL_12X6}}',
      enterprise: '{{COMP_VAL_24X7}}',
    },
    {
      category: '{{COMP_CAT_HARDWARE}}',
      featureName: '{{COMP_FEAT_PARTS_REPLACEMENT}}',
      essential: false,
      professional: true,
      enterprise: true,
    },
    {
      category: '{{COMP_CAT_HARDWARE}}',
      featureName: '{{COMP_FEAT_STANDBY_EQUIPMENT}}',
      essential: false,
      professional: '{{COMP_VAL_LIMITED}}',
      enterprise: true,
    },
    {
      category: '{{COMP_CAT_MONITORING}}',
      featureName: '{{COMP_FEAT_NOC_MONITORING}}',
      essential: false,
      professional: true,
      enterprise: true,
    },
    {
      category: '{{COMP_CAT_MONITORING}}',
      featureName: '{{COMP_FEAT_DEDICATED_ENGINEER}}',
      essential: false,
      professional: false,
      enterprise: true,
    },
  ] as ComparisonFeature[],

  faqs: [
    {
      question: '{{FAQ_Q1}}',
      answer: '{{FAQ_A1}}',
    },
    {
      question: '{{FAQ_Q2}}',
      answer: '{{FAQ_A2}}',
    },
    {
      question: '{{FAQ_Q3}}',
      answer: '{{FAQ_A3}}',
    },
    {
      question: '{{FAQ_Q4}}',
      answer: '{{FAQ_A4}}',
    },
    {
      question: '{{FAQ_Q5}}',
      answer: '{{FAQ_A5}}',
    },
  ] as FAQItem[],
};
