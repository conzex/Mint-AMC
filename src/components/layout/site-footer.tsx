import Link from 'next/link';
import BrandLogo from '@/components/brand/brand-logo';
import PageContainer from './page-container';
import { siteContent } from '@/content/site';

const footerLink = 'text-white/85 hover:text-accent transition-colors text-sm';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/90 border-t-4 border-accent shrink-0 mt-auto">
      <PageContainer className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo heightClass="h-11 sm:h-12" onDark />
            <p className="mt-4 type-caption text-white/75 max-w-xs leading-relaxed">{siteContent.footerTagline}</p>
          </div>
          <div>
            <h3 className="type-eyebrow text-accent mb-3">{siteContent.footerServicesHeading}</h3>
            <ul className="space-y-2">
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
          <div>
            <h3 className="type-eyebrow text-accent mb-3">{siteContent.footerDivisionsHeading}</h3>
            <ul className="space-y-2">
              {siteContent.divisions.map((d) => (
                <li key={d.url}>
                  <a href={d.url} className={footerLink} target="_blank" rel="noopener noreferrer">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="type-eyebrow text-accent mb-3">{siteContent.footerLegalHeading}</h3>
            <ul className="space-y-2">
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
        <div className="border-t border-white/15 pt-5 type-caption text-white/65 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="max-w-3xl leading-relaxed">
            {siteContent.footerDivisionLine} {siteContent.parentCompany.name} (CIN: {siteContent.parentCompany.cin}).{' '}
            <a href={siteContent.parentCompany.url} className="text-accent hover:underline">
              {siteContent.parentCompany.url.replace('https://', '')}
            </a>
          </p>
          <span className="shrink-0">&copy; {year} {siteContent.brandName}</span>
        </div>
      </PageContainer>
    </footer>
  );
}
