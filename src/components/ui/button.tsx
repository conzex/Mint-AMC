import Link from 'next/link';
import { cn } from '@/lib/utils';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50';

export const buttonVariants = {
  primary:
    'bg-brand text-white hover:bg-brand-hover border border-brand-hover shadow-sm hover:shadow-md',
  secondary:
    'bg-surface text-ink border border-line hover:bg-surface-muted hover:border-ink/20',
  ghost: 'text-brand hover:bg-brand-subtle/60',
  onDark: 'bg-white text-brand hover:bg-white/90 border border-white',
} as const;

export const buttonSizes = {
  sm: 'text-sm px-5 py-2.5 rounded-lg',
  md: 'text-sm sm:text-base px-7 py-3 rounded-lg',
  header: 'text-sm px-5 py-2.5 rounded-lg whitespace-nowrap',
} as const;

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  size = 'sm',
  className,
  children,
  href,
  external,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(base, buttonVariants[variant], buttonSizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
