import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'mint' | 'navy' | 'gray';
}

export default function Badge({
  variant = 'blue',
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    blue: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20',
    mint: 'bg-mint-light text-mint-green border-mint-green/30',
    navy: 'bg-dark-navy/10 text-dark-navy border-dark-navy/20',
    gray: 'bg-cool-white text-slate-text border-border-gray',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
