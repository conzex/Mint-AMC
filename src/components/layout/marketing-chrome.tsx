import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import { QuoteModalProvider } from '@/components/ui/request-quote-modal';

export default function MarketingChrome({
  children,
  mainClassName = '',
}: {
  children: React.ReactNode;
  mainClassName?: string;
}) {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen flex flex-col bg-bg-body">
        <SiteHeader />
        <main className={`flex-1 ${mainClassName}`}>{children}</main>
        <SiteFooter />
      </div>
    </QuoteModalProvider>
  );
}
