'use client';

import Link from 'next/link';
import {
  Activity,
  ArrowUp,
  ArrowUpRight,
  Boxes,
  Briefcase,
  Building2,
  CheckSquare,
  ChevronRight,
  Cloud,
  Cpu,
  FileText,
  Globe,
  Lock,
  Mail,
  PhoneCall,
  Server,
  Shield,
  ShieldCheck,
  Tag,
  Wrench,
} from 'lucide-react';
import BrandLogo from '@/components/brand/brand-logo';
import PageContainer from './page-container';
import { siteContent } from '@/content/site';
import { Icon } from '@/components/ui/icon';

const getDivisionIcon = (name: string) => {
  switch (name) {
    case 'Mint AMC':
      return ShieldCheck;
    case 'xHosting':
      return Cloud;
    case 'xData Center':
      return Server;
    case 'Defendx':
      return Lock;
    case 'UiDRAC SaaS':
      return Cpu;
    default:
      return Globe;
  }
};

interface FooterLinkItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isExternal?: boolean;
}

function FooterLinkItem({ href, icon: IconComponent, label, isExternal = false }: FooterLinkItemProps) {
  const content = (
    <div className="group flex items-center justify-between text-sm text-white/75 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 hover:translate-x-1 hover:shadow-sm">
      <span className="flex items-center gap-2.5 min-w-0">
        <IconComponent size={15} className="text-brand/70 group-hover:text-brand transition-colors shrink-0" />
        <span className="truncate font-medium transition-colors group-hover:text-brand">{label}</span>
      </span>
      {isExternal ? (
        <ArrowUpRight
          size={14}
          className="text-white/40 opacity-50 group-hover:opacity-100 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1.5"
        />
      ) : (
        <ChevronRight
          size={14}
          className="text-white/40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand transition-all shrink-0 ml-1.5"
        />
      )}
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-1 focus:ring-brand/50 rounded-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block focus:outline-none focus:ring-1 focus:ring-brand/50 rounded-lg">
      {content}
    </Link>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const { parentCompany } = siteContent;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0F172A] text-white shrink-0 mt-auto border-t border-brand/30 overflow-hidden">
      {/* 3D Ambient Gradient Backlight */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <PageContainer className="relative py-12 sm:py-16">
        {/* Top Contact Highlight Bar with 3D Glass Styling */}
        <div className="mb-12 p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/90">
            <a
              href={`mailto:${siteContent.contact.businessEmail}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group"
            >
              <Icon icon={Mail} size="sm" className="text-brand group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white/90 group-hover:text-brand transition-colors">
                {siteContent.contact.businessEmail}
              </span>
            </a>
            <a
              href={`tel:${siteContent.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group"
            >
              <Icon icon={PhoneCall} size="sm" className="text-brand group-hover:scale-110 transition-transform" />
              <span className="font-medium text-white/90 group-hover:text-brand transition-colors">
                {siteContent.contact.phone}
              </span>
            </a>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Field Engineering Ready PAN-India</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-xs font-bold uppercase tracking-wider bg-brand hover:bg-brand-hover text-white px-4 py-2.5 rounded-lg transition-all shadow-md hover:shadow-brand/30 flex items-center gap-1.5 hover:scale-102"
          >
            Contact Engineering Desk
            <Icon icon={ArrowUpRight} size="xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand & Overview Column */}
          <div className="space-y-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="inline-block hover:opacity-90 transition-opacity cursor-pointer group"
              aria-label="Home and Refresh"
            >
              <div className="p-2.5 bg-white rounded-lg inline-block shadow-lg group-hover:scale-105 transition-transform border border-white/20">
                <BrandLogo heightClass="h-10 sm:h-11" />
              </div>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">{siteContent.footerTagline}</p>
            <div className="flex items-center gap-2.5 text-xs text-white/60 pt-2">
              <Icon icon={Building2} size="xs" className="text-brand shrink-0" />
              <span>{siteContent.contact.headquarters}</span>
            </div>
          </div>

          {/* AMC Services Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-2 pb-2 border-b border-white/10 flex items-center gap-2">
              <Icon icon={Wrench} size="xs" />
              {siteContent.footerServicesHeading}
            </h3>
            <ul className="space-y-1">
              <li>
                <FooterLinkItem href="/services" icon={Wrench} label={siteContent.footerAllServicesLink} />
              </li>
              <li>
                <FooterLinkItem href="/solutions" icon={Boxes} label="Industry Solutions" />
              </li>
              <li>
                <FooterLinkItem href="/pricing" icon={Tag} label={siteContent.nav.pricing.label} />
              </li>
              <li>
                <FooterLinkItem href="/why-mint-amc" icon={ShieldCheck} label="Why Mint AMC" />
              </li>
              <li>
                <FooterLinkItem href="/contact" icon={PhoneCall} label={siteContent.nav.contact.label} />
              </li>
            </ul>
          </div>

          {/* Conzex Group Divisions Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-2 pb-2 border-b border-white/10 flex items-center gap-2">
              <Icon icon={Globe} size="xs" />
              {siteContent.footerDivisionsHeading}
            </h3>
            <ul className="space-y-1">
              {siteContent.divisions.map((d) => {
                const DivIcon = getDivisionIcon(d.name);
                return (
                  <li key={d.name}>
                    <FooterLinkItem href={d.url} icon={DivIcon} label={d.name} isExternal={true} />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-2 pb-2 border-b border-white/10 flex items-center gap-2">
              <Icon icon={ShieldCheck} size="xs" />
              {siteContent.footerLegalHeading}
            </h3>
            <ul className="space-y-1">
              <li>
                <FooterLinkItem href="/privacy" icon={Shield} label={siteContent.footerPrivacyLink} />
              </li>
              <li>
                <FooterLinkItem href="/terms" icon={FileText} label={siteContent.footerTermsLink} />
              </li>
              <li>
                <FooterLinkItem href="/sla" icon={CheckSquare} label={siteContent.footerSlaLink} />
              </li>
              <li>
                <FooterLinkItem href="/resources" icon={Briefcase} label="Documentation & Compliance" />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs text-white/60">
          <p className="leading-relaxed max-w-3xl">
            Mint AMC is a division of{' '}
            <a
              href={parentCompany.url}
              className="text-white font-semibold hover:text-brand transition-colors underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {parentCompany.name}
            </a>{' '}
            (CIN: {parentCompany.cin}).
          </p>
          <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0">
            <p>&copy; {year} {siteContent.brandName}. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-brand border border-white/10 transition-all group"
              aria-label="Scroll to top"
            >
              <span className="text-[11px] font-medium">Back to top</span>
              <Icon icon={ArrowUp} size="xs" className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

