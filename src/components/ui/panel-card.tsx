import { cn } from '@/lib/utils';

export function PanelCard({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('bg-white border border-border-card rounded', className)}>
      {title && (
        <div className="px-5 py-4 border-b border-border-card">
          <h2 className="text-sm font-semibold text-text-primary">{title}</h2>
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}
