import Link from 'next/link';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import { notFoundContent } from '@/content/not-found';

export default function NotFound() {
  return (
    <MarketingChrome>
      <section className="py-20 bg-bg-body">
        <PageContainer className="text-center max-w-lg">
          <h1 className="text-2xl font-bold text-text-primary">{notFoundContent.title}</h1>
          <p className="text-sm text-text-secondary mt-2">{notFoundContent.body}</p>
          <Link href="/" className="mt-6 inline-flex bg-dell-blue text-white text-sm font-semibold px-4 py-2 rounded hover:bg-dell-blue-hover">
            {notFoundContent.cta}
          </Link>
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
