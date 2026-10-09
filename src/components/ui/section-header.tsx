import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
};

/** Spectro-style section intro: large title + optional lead paragraph. */
export function SectionHeader({ title, lead, align = 'center', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <h2 className="type-section-title">{title}</h2>
      {lead && <p className="type-section-lead mt-4">{lead}</p>}
    </div>
  );
}
