'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { megaMenuColumns } from '@/content/mega-menu';
import { siteContent } from '@/content/site';
import PageContainer from './page-container';

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 100;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onHoverIntent: (entering: boolean) => void;
};

export function ServicesMegaMenuPanel({ open, onOpenChange, onHoverIntent }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full pt-0 z-50"
      onMouseEnter={() => onHoverIntent(true)}
      onMouseLeave={() => onHoverIntent(false)}
    >
      <PageContainer>
        <div
          ref={panelRef}
          role="menu"
          aria-label={siteContent.nav.services.label}
          className="bg-white text-text-primary rounded shadow-lg border border-border-card overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border-card">
            {megaMenuColumns.map((col) => (
              <div key={col.id} className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <col.icon className="w-4 h-4 text-dell-blue shrink-0" />
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{col.heading}</h3>
                </div>
                <ul className="space-y-1">
                  {col.links.map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={`/services/${link.slug}`}
                        role="menuitem"
                        className="block text-sm text-text-primary hover:bg-row-hover px-2 py-1.5 rounded"
                        onClick={() => onOpenChange(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-border-card bg-card-header flex items-center justify-between gap-3 text-sm">
            <span className="text-text-secondary">{siteContent.megaMenuFooterCta}</span>
            <Link href="/contact" className="text-dell-blue font-semibold hover:underline inline-flex items-center gap-1 shrink-0">
              {siteContent.megaMenuFooterLink}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export function useMegaMenuDelays() {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const onHoverIntent = useCallback(
    (entering: boolean) => {
      clearTimers();
      if (entering) {
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
      } else {
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
      }
    },
    [clearTimers],
  );

  useEffect(() => () => clearTimers(), [clearTimers]);

  return { open, setOpen, onHoverIntent };
}
