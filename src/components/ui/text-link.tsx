import Link from 'next/link';
import { cn } from '@/lib/utils';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn('text-brand font-semibold hover:underline', className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
