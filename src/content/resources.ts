export const resourcesPageContent = {
  heroTitle: '{{RESOURCES_HERO_TITLE}}',
  heroSubtitle: '{{RESOURCES_HERO_SUBTITLE}}',
};

export type Article = { slug: string; title: string; excerpt: string; date: string; category: string; body: string[] };

export const articles: Article[] = [
  {
    slug: 'article-1',
    title: '{{ARTICLE_TITLE_1}}',
    excerpt: '{{ARTICLE_EXCERPT_1}}',
    date: '{{ARTICLE_DATE_1}}',
    category: '{{ARTICLE_CATEGORY_1}}',
    body: ['{{ARTICLE_BODY_1_P1}}', '{{ARTICLE_BODY_1_P2}}', '{{ARTICLE_BODY_1_P3}}'],
  },
  {
    slug: 'article-2',
    title: '{{ARTICLE_TITLE_2}}',
    excerpt: '{{ARTICLE_EXCERPT_2}}',
    date: '{{ARTICLE_DATE_2}}',
    category: '{{ARTICLE_CATEGORY_2}}',
    body: ['{{ARTICLE_BODY_2_P1}}', '{{ARTICLE_BODY_2_P2}}'],
  },
  {
    slug: 'article-3',
    title: '{{ARTICLE_TITLE_3}}',
    excerpt: '{{ARTICLE_EXCERPT_3}}',
    date: '{{ARTICLE_DATE_3}}',
    category: '{{ARTICLE_CATEGORY_3}}',
    body: ['{{ARTICLE_BODY_3_P1}}', '{{ARTICLE_BODY_3_P2}}'],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
