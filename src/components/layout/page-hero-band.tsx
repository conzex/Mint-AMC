import type { ReactNode } from 'react';
import { PhoneCall, Send } from 'lucide-react';
import { MINT_AMC_HERO_BG_URL } from '@/components/brand/brand-logo';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { siteContent } from '@/content/site';
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
        'relative shrink-0 border-b border-line/70 bg-surface overflow-hidden flex flex-col justify-center',
        isLarge ? 'py-14 sm:py-16 lg:py-20 bg-surface-muted/30' : 'py-6 sm:py-8 lg:py-9',
        className,
      )}
    >
      {showHeroBg ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat opacity-40"
            style={{ backgroundImage: `url("${MINT_AMC_HERO_BG_URL}")` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 pointer-events-none"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-surface via-brand-subtle/20 to-surface pointer-events-none"
          aria-hidden
        />
      )}

      <div className={cn('relative w-full z-10', PAGE_CONTAINER_CLASS)}>
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
          {badge}
          <h1
            className={cn(
              isLarge
                ? 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4'
                : 'text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-ink mb-2',
              'text-center',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                isLarge ? 'text-base sm:text-lg text-ink-muted mb-6 max-w-2xl' : 'text-xs sm:text-sm text-ink-muted max-w-xl mb-4',
                'mx-auto text-center leading-relaxed',
              )}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-3 w-full">
              {children}
            </div>
          )}
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
  children?: ReactNode;
}) {
  return (
    <section className="relative border-t border-brand/30 bg-[#0F172A] text-white overflow-hidden shrink-0 py-16 sm:py-24">
      {/* 3D Ambient Gradient Backlight */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[32rem] h-[32rem] bg-brand/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className={cn('relative z-10', PAGE_CONTAINER_CLASS)}>
        <div className="max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 lg:p-14 shadow-2xl text-center">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-xs bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            24/7 Field Engineering & NOC Monitoring Active
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {children ? (
              children
            ) : (
              <>
                <Button href="/contact" size="md" className="w-full sm:w-auto shadow-lg hover:shadow-brand/30">
                  <Icon icon={Send} size="xs" />
                  Request AMC Proposal
                </Button>
                <Button href={`tel:${siteContent.contact.phone.replace(/[^0-9+]/g, '')}`} variant="secondary" size="md" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Icon icon={PhoneCall} size="xs" className="text-brand" />
                  Call: {siteContent.contact.phone}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
