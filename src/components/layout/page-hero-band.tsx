import type { ReactNode } from 'react';
import { PAGE_CONTAINER_CLASS } from './page-container';
import { cn } from '@/lib/utils';

export type PageHeroBandProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: ReactNode;
  size?: 'compact' | 'large';
  align?: 'center' | 'left';
  children?: ReactNode;
  className?: string;
};

export default function PageHeroBand({
  title,
  subtitle,
  badge,
  size = 'compact',
  align = 'center',
  children,
  className,
}: PageHeroBandProps) {
  const py = size === 'large' ? 'py-14 sm:py-16 lg:py-20' : 'py-10 sm:py-12';

  return (
    <section
      className={cn(
        'relative shrink-0 border-b border-line bg-surface',
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-surface via-brand-subtle/40 to-surface pointer-events-none"
        aria-hidden
      />
      <div className={cn('relative', PAGE_CONTAINER_CLASS, py)}>
        <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
          {badge}
          <h1
            className={cn(
              size === 'large' ? 'type-display mb-5' : 'type-page-title mb-2',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'type-body',
                size === 'large' ? 'text-base sm:text-lg max-w-2xl mx-auto mb-8' : 'max-w-2xl',
                align === 'center' && size === 'large' && 'mx-auto',
                align === 'center' && size !== 'large' && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function MarketingCtaBand({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative border-t border-line bg-brand-subtle/50 overflow-hidden shrink-0">
      <div className={cn('relative', PAGE_CONTAINER_CLASS, 'py-14 sm:py-16 text-center')}>
        <div className="max-w-lg mx-auto">
          <h2 className="type-section-title mb-2">{title}</h2>
          {subtitle && <p className="type-body mb-6">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
