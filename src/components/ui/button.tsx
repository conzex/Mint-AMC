import Link from 'next/link';
import { cn } from '@/lib/utils';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-colors rounded disabled:opacity-50';

export const buttonVariants = {
  primary: 'bg-brand text-white hover:bg-brand-hover border border-brand-hover',
  secondary: 'bg-surface text-brand border border-line hover:bg-surface-muted',
  ghost: 'text-brand hover:bg-surface-muted',
} as const;

export const buttonSizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-6 py-3',
  header: 'text-sm px-4 py-2 whitespace-nowrap',
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
