import { Leaf } from 'lucide-react';
import { siteContent } from '@/content/site';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  inverted?: boolean;
  className?: string;
};

/** Matches uidrac header logo container sizing; glyph + wordmark for Mint AMC. */
export default function BrandLogo({ inverted = false, className }: BrandLogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5 shrink-0 min-w-0', className)}>
      <span
        className={cn(
          'w-7 h-7 rounded flex items-center justify-center shrink-0',
          inverted ? 'bg-white/20 text-white' : 'bg-dell-blue/10 text-dell-blue',
        )}
      >
        <Leaf className="w-4 h-4" aria-hidden />
      </span>
      <span
        className={cn(
          'text-sm font-semibold tracking-wide truncate',
          inverted ? 'text-white' : 'text-text-primary',
        )}
      >
        {siteContent.brandName}
      </span>
    </span>
  );
}
