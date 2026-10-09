'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { solutionsMegaMenuColumns } from '@/content/mega-menu';
import { siteContent } from '@/content/site';
import PageContainer from './page-container';
import { Icon } from '@/components/ui/icon';

export function SolutionsMegaMenuPanel({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <PageContainer>
      <div
        ref={panelRef}
        role="menu"
        aria-label={siteContent.nav.solutions.label}
        className="ui-card shadow-2xl overflow-hidden border border-line/80 rounded-lg bg-white"
      >
        <div className="bg-surface-muted/90 px-6 py-3 border-b border-line/60 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand flex items-center gap-2">
            <Icon icon={ShieldCheck} size="xs" className="text-brand" />
            Tailored Industry & Operational Solutions
          </span>
          <span className="text-xs font-medium text-ink-muted">SLA-Backed Enterprise Architecture</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {solutionsMegaMenuColumns.map((col) => (
            <div key={col.id} className="space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-line/50">
                <div className="w-8 h-8 rounded-lg bg-brand-subtle text-brand flex items-center justify-center shrink-0">
                  <Icon icon={col.icon} size="sm" />
                </div>
                <h3 className="text-sm font-bold text-ink tracking-tight">{col.heading}</h3>
              </div>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`/solutions/${link.slug}`}
                      role="menuitem"
                      className="group flex items-center justify-between text-sm text-ink-muted hover:text-brand hover:bg-brand-subtle/50 px-3 py-2 rounded-lg transition-all duration-150"
                      onClick={onClose}
                    >
                      <span className="font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-2">
                        <Icon icon={link.icon} size="xs" className="text-brand/70 group-hover:text-brand" />
                        {link.label}
                      </span>
                      <Icon
                        icon={ArrowRight}
                        size="xs"
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="px-6 py-3.5 border-t border-line/60 bg-surface-muted/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
          <span className="text-ink-muted font-medium">Need a custom multi-vendor SLA proposal?</span>
          <Link
            href="/contact"
            className="text-brand font-semibold hover:underline inline-flex items-center gap-1.5 shrink-0 bg-white px-3.5 py-1.5 rounded-lg border border-line shadow-xs hover:border-brand/40 transition-colors"
            onClick={onClose}
          >
            Consult Solution Architect
            <Icon icon={ArrowRight} size="xs" />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
