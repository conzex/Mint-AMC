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
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: megaOpen, setOpen: setMegaOpen, onHoverIntent } = useMegaMenuDelays();

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname, setMegaOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    return cn(
      'relative whitespace-nowrap transition-colors text-[15px] py-1',
      active
        ? 'text-brand font-semibold'
        : 'text-ink-muted hover:text-ink font-medium',
      active &&
        'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-accent',
    );
  };

  const staticLinks = [
    siteContent.nav.solutions,
    siteContent.nav.pricing,
    siteContent.nav.why,
    siteContent.nav.about,
    siteContent.nav.resources,
  ];

  return (
    <header
      className={cn(
        'text-ink shrink-0 sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-lg border-line shadow-[0_4px_24px_rgba(44,49,53,0.08)]'
          : 'bg-white/80 backdrop-blur-md border-transparent',
      )}
    >
      <PageContainer>
        <div className="h-[4.25rem] lg:h-[4.75rem] flex items-center justify-between gap-4 min-w-0">
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity shrink-0 min-w-0 flex items-center gap-3"
            aria-label="Home"
          >
            <BrandLogo heightClass="h-11 sm:h-12" />
          </Link>

          <nav
            className="hidden xl:flex flex-1 items-center justify-end gap-1 min-w-0 ml-6"
            aria-label="Primary"
          >
            <div
              className="flex items-center gap-0.5 px-1"
              onMouseEnter={() => onHoverIntent(true)}
              onMouseLeave={() => onHoverIntent(false)}
            >
              <button
                type="button"
                className={cn('flex items-center gap-1 px-3', navLinkClass('/services'))}
                aria-expanded={megaOpen}
                aria-haspopup="menu"
                onClick={() => setMegaOpen((v) => !v)}
              >
                {siteContent.nav.services.label}
                <Icon
                  icon={ChevronDown}
                  size="xs"
                  className={cn('opacity-70', megaOpen && 'rotate-180 transition-transform')}
                />
              </button>
            </div>

            {staticLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn('px-3 shrink-0', navLinkClass(link.href))}>
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-line shrink-0">
              <Link
                href={siteContent.nav.contact.href}
                className="text-[15px] font-medium text-ink-muted hover:text-brand px-2 py-1 transition-colors"
              >
                {siteContent.nav.contact.label}
              </Link>
              <Button href={siteContent.nav.contact.href} size="header">
                {siteContent.headerCta}
              </Button>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 text-ink shrink-0 rounded-lg border border-line/80 hover:bg-surface-muted"
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
          <div className="border-b border-line bg-white/98 backdrop-blur-lg pb-3 pt-2 shadow-card">
            <ServicesMegaMenuPanel onClose={() => setMegaOpen(false)} />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className={`xl:hidden border-t border-line py-4 space-y-1 text-sm bg-white ${PAGE_CONTAINER_CLASS}`}>
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
          <Button href={siteContent.nav.contact.href} className="w-full mt-4" size="md" onClick={() => setMobileOpen(false)}>
            {siteContent.headerCta}
          </Button>
        </div>
      )}
    </header>
  );
}
