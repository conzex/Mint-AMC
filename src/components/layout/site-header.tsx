'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Boxes,
  Building2,
  ChevronDown,
  Menu,
  PhoneCall,
  Send,
  ShieldCheck,
  Tag,
  Wrench,
  X,
} from 'lucide-react';
import BrandLogo from '@/components/brand/brand-logo';
import { siteContent } from '@/content/site';
import { megaMenuColumns, solutionsMegaMenuColumns } from '@/content/mega-menu';
import PageContainer, { PAGE_CONTAINER_CLASS } from './page-container';
import { ServicesMegaMenuPanel } from './services-mega-menu';
import { SolutionsMegaMenuPanel } from './solutions-mega-menu';
import { RequestQuoteModal } from '@/components/ui/request-quote-modal';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'solutions' | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'services' | 'solutions') => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMega(menu);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 200);
  };

  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [pathname]);

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
        setActiveMega(null);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  const navLinkClass = (href: string, activeCheck?: boolean) => {
    const active = activeCheck ?? (pathname === href || (href !== '/' && pathname.startsWith(`${href}/`)));
    return cn(
      'relative whitespace-nowrap transition-colors text-[14px] font-medium py-1.5 flex items-center gap-1.5 cursor-pointer',
      active
        ? 'text-brand font-semibold'
        : 'text-ink-muted hover:text-ink',
      active &&
        'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand',
    );
  };

  const navItems = [
    { ...siteContent.nav.pricing, icon: Tag },
    { ...siteContent.nav.why, icon: ShieldCheck },
    { ...siteContent.nav.about, icon: Building2 },
    { ...siteContent.nav.resources, icon: BookOpen },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <header
        className={cn(
          'text-ink shrink-0 sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-lg border-line shadow-[0_4px_20px_rgba(27,36,48,0.06)]'
            : 'bg-white/80 backdrop-blur-md border-transparent',
        )}
      >
        <PageContainer>
          <div className="h-[4.25rem] lg:h-[4.75rem] flex items-center justify-between gap-4 min-w-0">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="hover:opacity-90 transition-opacity shrink-0 min-w-0 flex items-center gap-3 cursor-pointer"
              aria-label="Home and Refresh"
            >
              <BrandLogo heightClass="h-11 sm:h-12" />
            </Link>

            <nav
              className="hidden xl:flex flex-1 items-center justify-end gap-1 min-w-0 ml-6"
              aria-label="Primary"
            >
              {/* Services Mega Menu Trigger */}
              <div
                className="flex items-center gap-0.5 px-1 relative py-3"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn('flex items-center gap-1.5 px-3', navLinkClass('/services', activeMega === 'services'))}
                  aria-expanded={activeMega === 'services'}
                  onClick={() => setActiveMega(activeMega === 'services' ? null : 'services')}
                >
                  <Icon icon={Wrench} size="xs" className="text-brand/80" />
                  {siteContent.nav.services.label}
                  <Icon
                    icon={ChevronDown}
                    size="xs"
                    className={cn('opacity-70 transition-transform duration-200', activeMega === 'services' && 'rotate-180')}
                  />
                </button>
              </div>

              {/* Solutions Mega Menu Trigger */}
              <div
                className="flex items-center gap-0.5 px-1 relative py-3"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn('flex items-center gap-1.5 px-3', navLinkClass('/solutions', activeMega === 'solutions'))}
                  aria-expanded={activeMega === 'solutions'}
                  onClick={() => setActiveMega(activeMega === 'solutions' ? null : 'solutions')}
                >
                  <Icon icon={Boxes} size="xs" className="text-brand/80" />
                  {siteContent.nav.solutions.label}
                  <Icon
                    icon={ChevronDown}
                    size="xs"
                    className={cn('opacity-70 transition-transform duration-200', activeMega === 'solutions' && 'rotate-180')}
                  />
                </button>
              </div>

              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={cn('px-2.5 shrink-0 py-3', navLinkClass(item.href))}>
                  <Icon icon={item.icon} size="xs" className="text-brand/70" />
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-line shrink-0">
                <Link
                  href={siteContent.nav.contact.href}
                  className="text-[14px] font-medium text-ink-muted hover:text-brand px-2 py-1 transition-colors flex items-center gap-1.5"
                >
                  <Icon icon={PhoneCall} size="xs" className="text-brand/80" />
                  {siteContent.nav.contact.label}
                </Link>
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  size="header"
                  className="rounded-lg shadow-sm hover:shadow-md"
                >
                  <Icon icon={Send} size="xs" />
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

        {/* Mega Menu Panels without full-width bg layer */}
        {activeMega === 'services' && (
          <div
            className="hidden xl:block absolute left-0 right-0 top-full z-[60] pt-1"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <ServicesMegaMenuPanel onClose={() => setActiveMega(null)} />
          </div>
        )}

        {activeMega === 'solutions' && (
          <div
            className="hidden xl:block absolute left-0 right-0 top-full z-[60] pt-1"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <SolutionsMegaMenuPanel onClose={() => setActiveMega(null)} />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`xl:hidden border-t border-line py-4 space-y-1 text-sm bg-white ${PAGE_CONTAINER_CLASS}`}>
            <Link href="/" className="block py-2.5 text-ink-muted hover:text-brand" onClick={() => setMobileOpen(false)}>
              {siteContent.nav.home.label}
            </Link>

            {/* Mobile Services Accordion */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-2.5 text-ink-muted hover:text-brand font-medium"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              aria-expanded={mobileServicesOpen}
            >
              <span className="flex items-center gap-2">
                <Icon icon={Wrench} size="xs" className="text-brand/80" />
                {siteContent.nav.services.label}
              </span>
              <Icon icon={ChevronDown} size="sm" className={mobileServicesOpen ? 'rotate-180' : ''} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 space-y-3 border-l border-line ml-1 max-h-[50vh] overflow-y-auto">
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

            {/* Mobile Solutions Accordion */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-2.5 text-ink-muted hover:text-brand font-medium"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              aria-expanded={mobileSolutionsOpen}
            >
              <span className="flex items-center gap-2">
                <Icon icon={Boxes} size="xs" className="text-brand/80" />
                {siteContent.nav.solutions.label}
              </span>
              <Icon icon={ChevronDown} size="sm" className={mobileSolutionsOpen ? 'rotate-180' : ''} />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-3 space-y-3 border-l border-line ml-1 max-h-[50vh] overflow-y-auto">
                {solutionsMegaMenuColumns.map((col) => (
                  <div key={col.id}>
                    <p className="type-eyebrow text-ink-muted mb-1">{col.heading}</p>
                    {col.links.map((link) => (
                      <Link
                        key={link.slug}
                        href={`/solutions/${link.slug}`}
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

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 py-2.5 text-ink-muted hover:text-brand font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <Icon icon={item.icon} size="xs" className="text-brand/80" />
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMobileOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full mt-4 rounded-lg"
              size="md"
            >
              <Icon icon={Send} size="xs" />
              {siteContent.headerCta}
            </Button>
          </div>
        )}
      </header>

      {/* Lightbox Popup Modal for Request Quote */}
      <RequestQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
