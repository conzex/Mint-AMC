import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import { solutionsContent } from '@/content/solutions';

export const metadata = { title: '{{META_SOLUTIONS_TITLE}}' };

export default function SolutionsPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={solutionsContent.heroTitle} subtitle={solutionsContent.heroSubtitle} align="left" />
      <section className="py-12 bg-bg-body">
        <PageContainer>
          <h2 className="text-lg font-bold text-text-primary mb-4">{solutionsContent.byIndustryTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {solutionsContent.industries.map((item) => (
              <div key={item.id} id={item.id} className="bg-white border border-border-card rounded p-5">
                <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold text-text-primary mb-4">{solutionsContent.byNeedTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {solutionsContent.needs.map((item) => (
              <div key={item.id} id={item.id} className="bg-white border border-border-card rounded p-5">
                <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
