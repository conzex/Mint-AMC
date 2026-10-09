import { cn } from '@/lib/utils';
import PageContainer from './page-container';

type PageSectionProps = {
  children: React.ReactNode;
  tone?: 'default' | 'muted' | 'white' | 'dark';
  className?: string;
  containerClassName?: string;
  borderTop?: boolean;
};

const toneClass = {
  default: 'bg-bg-body',
  muted: 'bg-surface-muted',
  white: 'bg-surface',
  dark: 'bg-ink text-white',
};

export default function PageSection({
  children,
  tone = 'muted',
  className,
  containerClassName,
  borderTop,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-28',
        toneClass[tone],
        borderTop && 'border-t border-line',
        className,
      )}
    >
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}
