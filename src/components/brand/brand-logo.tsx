import { cn } from '@/lib/utils';

export const MINT_AMC_LOGO_URL = 'https://mintamc.com/assets/logo.png';
export const MINT_AMC_HERO_BG_URL = 'https://mintamc.com/assets/hero-bg.png';

type BrandLogoProps = {
  className?: string;
  heightClass?: string;
  /** Use on deep-slate backgrounds so the logo stays legible. */
  onDark?: boolean;
};

/** Logo image only — no wordmark. */
export default function BrandLogo({
  className,
  heightClass = 'h-14',
  onDark = false,
}: BrandLogoProps) {
  const img = (
    <img
      src={MINT_AMC_LOGO_URL}
      alt=""
      className={cn(heightClass, 'w-auto max-w-[min(360px,72vw)] object-contain object-left', className)}
    />
  );

  if (!onDark) return img;

  return (
    <span className="inline-block bg-white rounded px-3 py-2 shadow-sm border border-border-card/80">
      {img}
    </span>
  );
}
