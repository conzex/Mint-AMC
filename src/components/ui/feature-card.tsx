import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  body: string;
  href: string;
  className?: string;
};

export function FeatureCard({ title, body, href, className }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'ui-card-interactive group block p-6 sm:p-8 h-full',
        className,
      )}
    >
      <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-brand transition-colors pr-6">
        {title}
      </h3>
      <p className="type-body mt-3 text-base">{body}</p>
      <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand">
        Learn more
        <Icon icon={ArrowRight} size="sm" className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
