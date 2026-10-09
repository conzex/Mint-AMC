'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import BrandLogo from '@/components/brand/brand-logo';
import { siteContent } from '@/content/site';
import { megaMenuColumns } from '@/content/mega-menu';
import PageContainer, { PAGE_CONTAINER_CLASS } from './page-container';
import { ServicesMegaMenuPanel, useMegaMenuDelays } from './services-mega-menu';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { open: megaOpen, setOpen: setMegaOpen, onHoverIntent } = useMegaMenuDelays();

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname, setMegaOpen]);

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

  const navLinkClass = (href: string) => {
    const active = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
    return `whitespace-nowrap transition-colors text-sm ${
      active ? 'text-brand font-semibold' : 'text-ink-muted hover:text-brand'
    }`;
  };

  const staticLinks = [
    siteContent.nav.solutions,
    siteContent.nav.pricing,
    siteContent.nav.why,
    siteContent.nav.about,
    siteContent.nav.resources,
  ];

  return (
    <header className="bg-surface text-ink shrink-0 sticky top-0 z-50 shadow-header border-b border-line relative">
      <PageContainer>
        <div className="h-[4.5rem] sm:h-[5rem] flex items-center justify-between gap-3 min-w-0">
          <Link href="/" className="hover:opacity-90 transition-opacity shrink-0 min-w-0 py-1" aria-label="Home">
            <BrandLogo heightClass="h-12 sm:h-14" />
          </Link>

          <nav className="hidden xl:flex flex-1 items-center justify-end gap-4 min-w-0 ml-4" aria-label="Primary">
            <div
              className="relative shrink-0"
              onMouseEnter={() => onHoverIntent(true)}
              onMouseLeave={() => onHoverIntent(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navLinkClass('/services')}`}
                aria-expanded={megaOpen}
                aria-haspopup="menu"
                onClick={() => setMegaOpen((v) => !v)}
              >
                {siteContent.nav.services.label}
                <Icon icon={ChevronDown} size="xs" className={megaOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </div>

            {staticLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`shrink-0 ${navLinkClass(link.href)}`}>
                {link.label}
              </Link>
            ))}

            <Button href={siteContent.nav.contact.href} size="header" className="shrink-0 ml-1">
              {siteContent.headerCta}
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-ink shrink-0 rounded hover:bg-surface-muted"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon icon={mobileOpen ? X : Menu} size="md" />
          </button>
        </div>
      </PageContainer>

      {megaOpen && (
        <div
          className="hidden xl:block absolute left-0 right-0 top-full z-[60]"
          onMouseEnter={() => onHoverIntent(true)}
          onMouseLeave={() => onHoverIntent(false)}
        >
          <div className="border-b border-line bg-surface-muted pb-2">
            <ServicesMegaMenuPanel onClose={() => setMegaOpen(false)} />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className={`xl:hidden border-t border-line py-3 space-y-1 text-sm bg-surface ${PAGE_CONTAINER_CLASS}`}>
          <Link href="/" className="block py-2.5 text-ink-muted hover:text-brand" onClick={() => setMobileOpen(false)}>
            {siteContent.nav.home.label}
          </Link>
          <button
            type="button"
            className="w-full flex items-center justify-between py-2.5 text-ink-muted hover:text-brand"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
          >
            {siteContent.nav.services.label}
            <Icon icon={ChevronDown} size="sm" className={mobileServicesOpen ? 'rotate-180' : ''} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 space-y-3 border-l border-line ml-1 max-h-[60vh] overflow-y-auto">
              {megaMenuColumns.map((col) => (
                <div key={col.id}>
                  <p className="type-eyebrow text-ink-muted mb-1">{col.heading}</p>
                  {col.links.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/services/${link.slug}`}
                      className="block py-1.5 text-ink-muted hover:text-brand"
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
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-ink-muted hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={siteContent.nav.contact.href}
            className="w-full mt-3"
            onClick={() => setMobileOpen(false)}
          >
            {siteContent.headerCta}
          </Button>
        </div>
      )}
    </header>
  );
}
