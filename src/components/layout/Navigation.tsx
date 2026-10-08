'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PageContainer from './PageContainer';
import MintLeaf from '../symbols/MintLeaf';
import { Building2Symbol, PhoneSymbol } from '../symbols';
import { siteConfig } from '@/content/site';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray shadow-xs">
      {/* Top Banner — Parent Company Affiliation */}
      <div className="bg-cool-white border-b border-border-gray text-xs text-slate-text py-1.5">
        <PageContainer className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2Symbol className="w-3.5 h-3.5 text-tech-blue" />
            <span>
              A Division of{' '}
              <a
                href={siteConfig.parentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-dark-navy hover:text-tech-blue underline decoration-dotted transition-colors"
              >
                CONZEX GLOBAL PRIVATE LIMITED
              </a>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1 text-slate-text">
              <PhoneSymbol className="w-3.5 h-3.5 text-mint-green" />
              <span>NOC Helpline: <strong className="text-dark-navy">{siteConfig.contact.nocHotline}</strong></span>
            </div>
            <Link
              href="/sla"
              className="text-tech-blue hover:underline font-medium"
            >
              SLA Guarantees
            </Link>
          </div>
        </PageContainer>
      </div>

      {/* Main Navbar */}
      <PageContainer>
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-95 transition-opacity shrink-0">
            <MintLeaf className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-dark-navy leading-none">
                Mint <span className="text-tech-blue">AMC</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-text font-medium mt-0.5">
                IT Maintenance Division
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-text" aria-label="Primary Navigation">
            {siteConfig.navigation.primaryLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-tech-blue border-tech-blue font-semibold'
                      : 'border-transparent hover:text-dark-navy hover:border-border-gray'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-4 py-2 bg-tech-blue text-white rounded text-sm font-medium hover:bg-tech-blue-hover transition-colors shadow-xs"
            >
              Get AMC Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark-navy hover:bg-cool-white rounded border border-border-gray"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </PageContainer>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-gray bg-white py-4 px-4 shadow-lg space-y-3">
          {siteConfig.navigation.primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-medium text-dark-navy hover:text-tech-blue border-b border-border-gray/50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 bg-tech-blue text-white font-medium rounded hover:bg-tech-blue-hover transition-colors"
            >
              Get AMC Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
