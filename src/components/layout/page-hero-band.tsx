import type { ReactNode } from 'react';
import { MINT_AMC_HERO_BG_URL } from '@/components/brand/brand-logo';
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
  heroBackground?: boolean;
};

export default function PageHeroBand({
  title,
  subtitle,
  badge,
  size = 'compact',
  align = 'center',
  children,
  className,
  heroBackground,
}: PageHeroBandProps) {
  const isLarge = size === 'large';
  const showHeroBg = heroBackground ?? isLarge;

  return (
    <section
      className={cn(
        'relative shrink-0 border-b border-line bg-surface overflow-hidden flex flex-col justify-center',
        isLarge ? 'min-h-[min(88vh,920px)]' : 'min-h-[220px] sm:min-h-[260px]',
        className,
      )}
    >
      {showHeroBg ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url("${MINT_AMC_HERO_BG_URL}")` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-b from-surface via-brand-subtle/30 to-surface pointer-events-none"
          aria-hidden
        />
      )}
      <div
        className={cn(
          'relative w-full',
          PAGE_CONTAINER_CLASS,
          isLarge ? 'py-16 sm:py-20 lg:py-24' : 'py-12 sm:py-14',
        )}
      >
        <div
          className={cn(
            isLarge ? 'max-w-4xl' : 'max-w-3xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {badge}
          <h1 className={cn(isLarge ? 'type-display mb-6' : 'type-page-title mb-3')}>{title}</h1>
          {subtitle && (
            <p
              className={cn(
                isLarge ? 'type-hero-lead mb-10' : 'type-body max-w-2xl',
                align === 'center' && 'mx-auto',
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
    <section className="relative border-t border-line bg-ink text-white overflow-hidden shrink-0">
      <div
        className="absolute inset-0 opacity-40 bg-gradient-to-br from-brand via-ink to-ink pointer-events-none"
        aria-hidden
      />
      <div className={cn('relative', PAGE_CONTAINER_CLASS, 'py-20 sm:py-24 text-center')}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">{title}</h2>
          {subtitle && <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
