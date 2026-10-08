export interface ResourceArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  contentParagraphs: string[];
}

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'it-amc-guide-2026',
    title: '{{ARTICLE_1_TITLE}}',
    excerpt: '{{ARTICLE_1_EXCERPT}}',
    category: '{{ARTICLE_1_CATEGORY}}',
    readTime: '{{ARTICLE_1_READTIME}}',
    publishDate: '{{ARTICLE_1_DATE}}',
    contentParagraphs: [
      '{{ARTICLE_1_P1}}',
      '{{ARTICLE_1_P2}}',
      '{{ARTICLE_1_P3}}',
    ],
  },
  {
    slug: 'preventive-vs-breakfix-maintenance',
    title: '{{ARTICLE_2_TITLE}}',
    excerpt: '{{ARTICLE_2_EXCERPT}}',
    category: '{{ARTICLE_2_CATEGORY}}',
    readTime: '{{ARTICLE_2_READTIME}}',
    publishDate: '{{ARTICLE_2_DATE}}',
    contentParagraphs: [
      '{{ARTICLE_2_P1}}',
      '{{ARTICLE_2_P2}}',
      '{{ARTICLE_2_P3}}',
    ],
  },
  {
    slug: 'sla-selection-best-practices',
    title: '{{ARTICLE_3_TITLE}}',
    excerpt: '{{ARTICLE_3_EXCERPT}}',
    category: '{{ARTICLE_3_CATEGORY}}',
    readTime: '{{ARTICLE_3_READTIME}}',
    publishDate: '{{ARTICLE_3_DATE}}',
    contentParagraphs: [
      '{{ARTICLE_3_P1}}',
      '{{ARTICLE_3_P2}}',
      '{{ARTICLE_3_P3}}',
    ],
  },
];
