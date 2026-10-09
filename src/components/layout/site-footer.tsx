import Link from 'next/link';
import BrandLogo from '@/components/brand/brand-logo';
import PageContainer from './page-container';
import { siteContent } from '@/content/site';

const footerLink = 'text-white/85 hover:text-accent transition-colors text-sm leading-relaxed';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const { parentCompany } = siteContent;

  return (
    <footer className="bg-ink text-white/90 border-t border-accent/40 shrink-0 mt-auto">
      <PageContainer className="py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">
          <div className="lg:col-span-4">
            <BrandLogo heightClass="h-11 sm:h-12" onDark />
            <p className="mt-5 text-sm text-white/75 max-w-sm leading-relaxed">{siteContent.footerTagline}</p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              {siteContent.footerServicesHeading}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className={footerLink}>{siteContent.footerAllServicesLink}</Link>
              </li>
              <li>
                <Link href="/pricing" className={footerLink}>{siteContent.nav.pricing.label}</Link>
              </li>
              <li>
                <Link href="/contact" className={footerLink}>{siteContent.nav.contact.label}</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              {siteContent.footerDivisionsHeading}
            </h3>
            <ul className="space-y-2.5">
              {siteContent.divisions.map((d) => (
                <li key={d.name}>
                  {d.name === siteContent.brandName ? (
                    <Link href="/" className={footerLink}>{d.name}</Link>
                  ) : (
                    <a href={parentCompany.url} className={footerLink} target="_blank" rel="noopener noreferrer">
                      {d.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              {siteContent.footerLegalHeading}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className={footerLink}>{siteContent.footerPrivacyLink}</Link>
              </li>
              <li>
                <Link href="/terms" className={footerLink}>{siteContent.footerTermsLink}</Link>
              </li>
              <li>
                <Link href="/sla" className={footerLink}>{siteContent.footerSlaLink}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
            Mint AMC is a division of{' '}
            <a
              href={parentCompany.url}
              className="text-white font-medium hover:text-accent transition-colors underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {parentCompany.name}
            </a>{' '}
            (CIN: {parentCompany.cin}).
          </p>
          <p className="text-xs text-white/50 shrink-0">&copy; {year} {siteContent.brandName}. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
