import React from 'react';
import Link from 'next/link';
import PageContainer from './PageContainer';

export interface CtaBannerProps {
  title: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CtaBanner({
  title,
  subtitle,
  primaryBtnText = 'Request AMC Proposal',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'View Pricing Tiers',
  secondaryBtnHref = '/pricing',
}: CtaBannerProps) {
  return (
    <section className="relative bg-cool-white border-t border-b border-border-gray text-dark-navy py-12 sm:py-16 shrink-0">
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D9E2EC 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <PageContainer className="relative text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-dark-navy mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base text-slate-text mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryBtnHref}
              className="w-full sm:w-auto px-6 py-3 bg-tech-blue text-white font-medium rounded hover:bg-tech-blue-hover transition-colors shadow-xs"
            >
              {primaryBtnText}
            </Link>
            <Link
              href={secondaryBtnHref}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-border-gray text-dark-navy font-medium rounded hover:border-tech-blue transition-colors"
            >
              {secondaryBtnText}
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
