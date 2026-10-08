import React from 'react';
import Link from 'next/link';
import PageContainer from './PageContainer';
import MintLeaf from '../symbols/MintLeaf';
import { DpiitBadge } from '../symbols';
import { siteConfig } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-cool-white border-t border-border-gray text-slate-text pt-12 pb-8 text-sm">
      <PageContainer>
        {/* Top Section: Brand + Division Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-border-gray">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <MintLeaf className="w-7 h-7" />
              <span className="text-xl font-bold tracking-tight text-dark-navy">
                Mint <span className="text-tech-blue">AMC</span>
              </span>
            </Link>

            <p className="text-sm text-slate-text leading-relaxed">
              Mint AMC provides high-availability IT Annual Maintenance Contracts across hardware, networking, servers, data centres, and cloud infrastructure with guaranteed SLAs.
            </p>

            <div className="pt-2 space-y-2">
              <DpiitBadge />
              <p className="text-xs text-slate-text font-mono">
                CIN: {siteConfig.parentCompany.cin}
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-dark-navy mb-3 text-xs uppercase tracking-wider">
                AMC Services
              </h3>
              <ul className="space-y-2 text-xs">
                {siteConfig.footerLinks.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-tech-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark-navy mb-3 text-xs uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="space-y-2 text-xs">
                {siteConfig.footerLinks.solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-tech-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark-navy mb-3 text-xs uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2 text-xs">
                {siteConfig.footerLinks.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-tech-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark-navy mb-3 text-xs uppercase tracking-wider">
                Legal & Compliance
              </h3>
              <ul className="space-y-2 text-xs">
                {siteConfig.footerLinks.legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-tech-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Division Matrix Strip */}
        <div className="py-6 border-b border-border-gray">
          <h4 className="text-xs font-semibold text-dark-navy uppercase tracking-wider mb-3">
            Part of Conzex Global Network
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {siteConfig.parentCompany.divisions.map((div) => (
              <a
                key={div.name}
                href={div.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-border-gray rounded hover:border-tech-blue transition-colors block"
              >
                <div className="font-semibold text-dark-navy hover:text-tech-blue">
                  {div.name} ↗
                </div>
                <div className="text-[11px] text-slate-text mt-0.5">
                  {div.description}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-text">
          <p>
            Mint AMC is a division of{' '}
            <a
              href={siteConfig.parentCompany.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-dark-navy underline hover:text-tech-blue"
            >
              CONZEX GLOBAL PRIVATE LIMITED
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-tech-blue">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-tech-blue">
              Terms of Service
            </Link>
            <Link href="/sla" className="hover:text-tech-blue">
              SLA Overview
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
