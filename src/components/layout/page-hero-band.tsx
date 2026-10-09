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
        isLarge ? 'min-h-[min(92vh,960px)]' : 'min-h-[240px] sm:min-h-[280px]',
        className,
      )}
    >
      {showHeroBg ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
            style={{ backgroundImage: `url("${MINT_AMC_HERO_BG_URL}")` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/[0.97] via-white/80 to-white/25 sm:to-transparent pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-surface via-brand-subtle/40 to-surface pointer-events-none"
          aria-hidden
        />
      )}

      {isLarge && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none hidden lg:block"
          aria-hidden
        />
      )}

      <div
        className={cn(
          'relative w-full',
          PAGE_CONTAINER_CLASS,
          isLarge ? 'py-20 sm:py-24 lg:py-28' : 'py-12 sm:py-14',
        )}
      >
        <div
          className={cn(
            isLarge ? 'max-w-3xl lg:max-w-[42rem]' : 'max-w-3xl',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {isLarge && align === 'left' && (
            <div className="w-12 h-1 rounded-full bg-accent mb-8" aria-hidden />
          )}
          {badge}
          <h1
            className={cn(
              isLarge ? 'type-display mb-6 text-balance' : 'type-page-title mb-3',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                isLarge ? 'type-hero-lead mb-10 max-w-2xl text-pretty' : 'type-body max-w-2xl mb-6',
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
