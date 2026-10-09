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
    <div className={cn('ui-card', className)}>
      {title && (
        <div className="px-5 py-4 border-b border-line">
          <h2 className="type-card-title">{title}</h2>
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}
