import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'mint' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-tech-blue/50 disabled:opacity-50 disabled:pointer-events-none rounded-md';

  const variants = {
    primary: 'bg-tech-blue text-white hover:bg-tech-blue-hover shadow-xs',
    secondary: 'bg-cool-white text-dark-navy border border-border-gray hover:bg-white hover:border-tech-blue',
    ghost: 'text-slate-text hover:text-dark-navy hover:bg-cool-white',
    mint: 'bg-mint-green text-white hover:bg-emerald-600 shadow-xs',
    outline: 'bg-white text-tech-blue border border-tech-blue hover:bg-tech-blue/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
