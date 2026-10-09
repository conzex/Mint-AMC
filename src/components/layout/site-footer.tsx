import Link from 'next/link';
import BrandLogo from '@/components/brand/brand-logo';
import PageContainer from './page-container';
import { siteContent } from '@/content/site';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-border-card py-8 shrink-0 mt-auto">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-text-secondary mb-6">
          <div>
            <BrandLogo />
            <p className="mt-3 text-xs leading-relaxed">{siteContent.footerTagline}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-2">
              {siteContent.footerServicesHeading}
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services" className="text-dell-blue hover:underline">
                  {siteContent.footerAllServicesLink}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-dell-blue hover:underline">
                  {siteContent.nav.pricing.label}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-2">
              {siteContent.footerDivisionsHeading}
            </h3>
            <ul className="space-y-1 text-xs">
              {siteContent.divisions.map((d) => (
                <li key={d.url}>
                  <a href={d.url} className="text-dell-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-2">
              {siteContent.footerLegalHeading}
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-dell-blue">{siteContent.footerPrivacyLink}</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-dell-blue">{siteContent.footerTermsLink}</Link>
              </li>
              <li>
                <Link href="/sla" className="hover:text-dell-blue">{siteContent.footerSlaLink}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-card pt-4 text-[11px] text-text-secondary flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            {siteContent.footerDivisionLine} {siteContent.parentCompany.name} (CIN: {siteContent.parentCompany.cin}).{' '}
            <a href={siteContent.parentCompany.url} className="text-dell-blue hover:underline">
              {siteContent.parentCompany.url.replace('https://', '')}
            </a>
          </p>
          <span>&copy; {year} {siteContent.brandName}</span>
        </div>
      </PageContainer>
    </footer>
  );
}
