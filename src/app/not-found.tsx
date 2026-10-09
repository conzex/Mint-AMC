import MarketingChrome from '@/components/layout/marketing-chrome';
import PageSection from '@/components/layout/page-section';
import { notFoundContent } from '@/content/not-found';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <MarketingChrome>
      <PageSection tone="muted" className="py-20" containerClassName="text-center max-w-lg">
        <h1 className="type-page-title">{notFoundContent.title}</h1>
        <p className="type-body mt-2">{notFoundContent.body}</p>
        <Button href="/" className="mt-6">{notFoundContent.cta}</Button>
      </PageSection>
    </MarketingChrome>
  );
}
