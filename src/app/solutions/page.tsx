import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import { solutionsContent } from '@/content/solutions';

export const metadata = { title: 'Solutions | Mint AMC' };

export default function SolutionsPage() {
  return (
    <MarketingChrome>
      <PageHeroBand title={solutionsContent.heroTitle} subtitle={solutionsContent.heroSubtitle} align="left" />
      <PageSection tone="muted">
        <h2 className="type-section-title mb-4">{solutionsContent.byIndustryTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {solutionsContent.industries.map((item) => (
            <div key={item.id} id={item.id} className="ui-card p-5">
              <h3 className="type-card-title">{item.title}</h3>
              <p className="type-body mt-2">{item.body}</p>
            </div>
          ))}
        </div>
        <h2 className="type-section-title mb-4">{solutionsContent.byNeedTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {solutionsContent.needs.map((item) => (
            <div key={item.id} id={item.id} className="ui-card p-5">
              <h3 className="type-card-title">{item.title}</h3>
              <p className="type-body mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </MarketingChrome>
  );
}
