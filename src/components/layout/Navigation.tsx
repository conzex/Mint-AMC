'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PageContainer from './PageContainer';
import MintLeaf from '../symbols/MintLeaf';
import { Building2Symbol, PhoneSymbol, ChevronDownSymbol, ArrowRightSymbol, ShieldCheckSymbol } from '../symbols';
import { siteConfig } from '@/content/site';
import { serviceCategories } from '@/content/services';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray shadow-xs">
      {/* Top Corporate Strip — Parent Company Affiliation */}
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

          <div className="hidden sm:flex items-center gap-5 text-xs">
            <div className="flex items-center gap-1.5 text-slate-text">
              <PhoneSymbol className="w-3.5 h-3.5 text-mint-green" />
              <span>NOC Hotline: <strong className="text-dark-navy">{siteConfig.contact.nocHotline}</strong></span>
            </div>
            <span className="text-border-gray">|</span>
            <Link
              href="/sla"
              className="text-tech-blue hover:underline font-medium inline-flex items-center gap-1"
            >
              <ShieldCheckSymbol className="w-3.5 h-3.5" />
              <span>SLA Guarantees</span>
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
            <Link
              href="/"
              className={`transition-colors py-1 border-b-2 ${
                pathname === '/' ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              Home
            </Link>

            {/* Services Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 transition-colors py-1 border-b-2 ${
                  pathname.startsWith('/services') ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
                }`}
              >
                <span>Services</span>
                <ChevronDownSymbol className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-[540px] bg-white border border-border-gray shadow-lg rounded-md p-4 grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-100 z-50">
                  {serviceCategories.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-2.5 rounded hover:bg-cool-white transition-colors block border border-transparent hover:border-border-gray/60"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="font-semibold text-xs text-dark-navy flex items-center justify-between">
                        <span>{s.title}</span>
                        <ArrowRightSymbol className="w-3 h-3 text-tech-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-slate-text line-clamp-1 mt-0.5">
                        {s.shortDescription}
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-border-gray/60 flex items-center justify-between text-xs">
                    <span className="text-slate-text">All categories backed by 24/7 NOC support</span>
                    <Link
                      href="/services"
                      className="font-semibold text-tech-blue hover:underline inline-flex items-center gap-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>Explore All Services</span>
                      <ArrowRightSymbol className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/solutions"
              className={`transition-colors py-1 border-b-2 ${
                pathname === '/solutions' ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              className={`transition-colors py-1 border-b-2 ${
                pathname === '/pricing' ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/why-mint-amc"
              className={`transition-colors py-1 border-b-2 ${
                pathname === '/why-mint-amc' ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              Why Mint AMC
            </Link>

            <Link
              href="/about"
              className={`transition-colors py-1 border-b-2 ${
                pathname === '/about' ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              About
            </Link>

            <Link
              href="/resources"
              className={`transition-colors py-1 border-b-2 ${
                pathname.startsWith('/resources') ? 'text-tech-blue border-tech-blue font-semibold' : 'border-transparent hover:text-dark-navy hover:border-border-gray'
              }`}
            >
              Resources
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-4 py-2 bg-tech-blue text-white rounded text-sm font-medium hover:bg-tech-blue-hover transition-colors shadow-xs inline-flex items-center gap-1.5"
            >
              <span>Get AMC Quote</span>
              <ArrowRightSymbol className="w-3.5 h-3.5" />
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

      {/* Mobile Drawer */}
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
