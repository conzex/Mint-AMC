import React from 'react';
import PageContainer from './PageContainer';
import { cn } from '@/lib/utils';

export interface PageHeroBandProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  size?: 'compact' | 'large';
  align?: 'center' | 'left';
  children?: React.ReactNode;
  className?: string;
}

export default function PageHeroBand({
  title,
  subtitle,
  badge,
  size = 'compact',
  align = 'center',
  children,
  className,
}: PageHeroBandProps) {
  const py = size === 'large' ? 'py-16 sm:py-24 lg:py-28' : 'py-10 sm:py-12 lg:py-14';

  return (
    <section className={cn('relative text-dark-navy overflow-hidden bg-cool-white border-b border-border-gray shrink-0', className)}>
      {/* Subtle Dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D9E2EC 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <div className={cn('relative', py)}>
        <PageContainer>
          <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
            {badge && <div className="mb-4 inline-block">{badge}</div>}
            <h1
              className={cn(
                'font-bold tracking-tight leading-tight text-dark-navy',
                size === 'large' ? 'text-3xl sm:text-4xl lg:text-5xl mb-4' : 'text-2xl sm:text-3xl mb-3'
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  'text-slate-text leading-relaxed',
                  size === 'large' ? 'text-base sm:text-lg max-w-2xl mb-8' : 'text-sm sm:text-base max-w-2xl',
                  align === 'center' && 'mx-auto'
                )}
              >
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
