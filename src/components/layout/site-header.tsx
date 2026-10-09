'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Mail, Menu, X } from 'lucide-react';
import BrandLogo from '@/components/brand/brand-logo';
import { siteContent } from '@/content/site';
import { megaMenuColumns } from '@/content/mega-menu';
import PageContainer, { PAGE_CONTAINER_CLASS } from './page-container';
import { ServicesMegaMenuPanel, useMegaMenuDelays } from './services-mega-menu';
import { headerCtaBtnClass } from '@/lib/marketing-cta';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { open: megaOpen, setOpen: setMegaOpen, onHoverIntent } = useMegaMenuDelays();

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [setMegaOpen]);

  const navLinkClass = (href: string) =>
    `whitespace-nowrap ${pathname === href ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`;

  const staticLinks = [
    { ...siteContent.nav.solutions, icon: null },
    { ...siteContent.nav.pricing, icon: null },
    { ...siteContent.nav.why, icon: null },
    { ...siteContent.nav.about, icon: null },
    { ...siteContent.nav.resources, icon: null },
  ];

  return (
    <header className="bg-dell-blue text-white shrink-0 sticky top-0 z-50 shadow-md">
      <PageContainer>
        <div className="h-[52px] flex items-center justify-between gap-4 min-w-0 relative">
          <Link href="/" className="hover:opacity-90 transition-opacity shrink-0 min-w-0">
            <BrandLogo inverted />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 text-sm shrink-0" aria-label="Primary">
            <Link href="/" className={navLinkClass('/')}>{siteContent.nav.home.label}</Link>

            <div
              className="relative"
              onMouseEnter={() => onHoverIntent(true)}
              onMouseLeave={() => onHoverIntent(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navLinkClass('/services')}`}
                aria-expanded={megaOpen}
                aria-haspopup="menu"
                onClick={() => setMegaOpen(!megaOpen)}
              >
                {siteContent.nav.services.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
              </button>
              <ServicesMegaMenuPanel open={megaOpen} onOpenChange={setMegaOpen} onHoverIntent={onHoverIntent} />
            </div>

            {staticLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}

            <Link
              href={siteContent.nav.contact.href}
              className={`flex items-center gap-1.5 ${navLinkClass(siteContent.nav.contact.href)}`}
            >
              <Mail className="w-3.5 h-3.5" /> {siteContent.nav.contact.label}
            </Link>

            <Link href={siteContent.nav.contact.href} className={`${headerCtaBtnClass} bg-white text-dell-blue hover:bg-white/90`}>
              {siteContent.headerCta}
            </Link>
          </nav>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </PageContainer>

      {mobileOpen && (
        <div className={`lg:hidden border-t border-white/20 py-3 space-y-2 text-sm ${PAGE_CONTAINER_CLASS}`}>
          <Link href="/" className="block py-2 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>
            {siteContent.nav.home.label}
          </Link>
          <button
            type="button"
            className="w-full flex items-center justify-between py-2 text-white/80 hover:text-white"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
          >
            {siteContent.nav.services.label}
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-2 space-y-3 border-l border-white/20 ml-1">
              {megaMenuColumns.map((col) => (
                <div key={col.id}>
                  <p className="text-[11px] uppercase tracking-wide text-white/60 mb-1">{col.heading}</p>
                  {col.links.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/services/${link.slug}`}
                      className="block py-1.5 text-white/80 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
          {staticLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={siteContent.nav.contact.href} className="block py-2 text-white font-semibold" onClick={() => setMobileOpen(false)}>
            {siteContent.nav.contact.label}
          </Link>
        </div>
      )}
    </header>
  );
}
