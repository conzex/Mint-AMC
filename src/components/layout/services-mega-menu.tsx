'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { megaMenuColumns } from '@/content/mega-menu';
import { siteContent } from '@/content/site';
import PageContainer from './page-container';
import { Icon } from '@/components/ui/icon';

const OPEN_DELAY_MS = 120;
const CLOSE_DELAY_MS = 200;

export function ServicesMegaMenuPanel({ onClose }: { onClose: () => void }) {
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
        aria-label={siteContent.nav.services.label}
        className="ui-card shadow-card overflow-hidden border-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {megaMenuColumns.map((col) => (
            <div key={col.id} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon={col.icon} size="sm" className="text-accent" />
                <h3 className="type-eyebrow text-ink-muted">{col.heading}</h3>
              </div>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`/services/${link.slug}`}
                      role="menuitem"
                      className="block text-sm text-ink hover:text-brand hover:bg-surface-muted px-2 py-2 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-5 py-4 border-t border-line bg-surface-muted flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="type-body">{siteContent.megaMenuFooterCta}</span>
          <Link
            href="/contact"
            className="text-brand font-semibold hover:underline inline-flex items-center gap-1 shrink-0 text-sm"
            onClick={onClose}
          >
            {siteContent.megaMenuFooterLink}
            <Icon icon={ArrowRight} size="xs" />
          </Link>
        </div>
      </div>
    </PageContainer>
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
        closeTimer.current = null;
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
      } else {
        openTimer.current = null;
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
      }
    },
    [clearTimers],
  );

  useEffect(() => () => clearTimers(), [clearTimers]);

  return { open, setOpen, onHoverIntent };
}
