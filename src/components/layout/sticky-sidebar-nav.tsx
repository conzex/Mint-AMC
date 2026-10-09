import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { megaMenuColumns, solutionsMegaMenuColumns } from '@/content/mega-menu';
import { cn } from '@/lib/utils';
import { ChevronRight, ShieldCheck, Wrench, Shield, FileText, CheckSquare } from 'lucide-react';

export function ServicesStickySidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="ui-card p-5 sticky top-24 space-y-5 max-h-[85vh] overflow-y-auto">
      <div className="flex items-center gap-2 pb-3 border-b border-line">
        <Icon icon={Wrench} size="sm" className="text-brand" />
        <h3 className="text-xs font-bold text-ink uppercase tracking-wider">All AMC Services</h3>
      </div>
      <div className="space-y-4">
        {megaMenuColumns.map((col) => (
          <div key={col.id}>
            <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Icon icon={col.icon} size="xs" className="text-brand" />
              {col.heading}
            </p>
            <ul className="space-y-0.5">
              {col.links.map((link) => {
                const isActive = link.slug === currentSlug;
                return (
                  <li key={link.slug}>
                    <Link
                      href={`/services/${link.slug}`}
                      className={cn(
                        'group flex items-center justify-between text-xs px-3 py-2 rounded-lg transition-all duration-150',
                        isActive
                          ? 'bg-brand/10 text-brand font-bold border-l-4 border-brand shadow-xs'
                          : 'text-ink-muted hover:text-ink hover:bg-surface-muted font-medium',
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Icon icon={link.icon} size="xs" className={isActive ? 'text-brand' : 'text-ink-muted group-hover:text-brand'} />
                        <span className="truncate">{link.label}</span>
                      </span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      ) : (
                        <Icon icon={ChevronRight} size="xs" className="opacity-0 group-hover:opacity-100 transition-opacity text-ink-muted shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function SolutionsStickySidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="ui-card p-5 sticky top-24 space-y-5 max-h-[85vh] overflow-y-auto">
      <div className="flex items-center gap-2 pb-3 border-b border-line">
        <Icon icon={ShieldCheck} size="sm" className="text-brand" />
        <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Industry Solutions</h3>
      </div>
      <div className="space-y-4">
        {solutionsMegaMenuColumns.map((col) => (
          <div key={col.id}>
            <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Icon icon={col.icon} size="xs" className="text-brand" />
              {col.heading}
            </p>
            <ul className="space-y-0.5">
              {col.links.map((link) => {
                const isActive = link.slug === currentSlug;
                return (
                  <li key={link.slug}>
                    <Link
                      href={`/solutions/${link.slug}`}
                      className={cn(
                        'group flex items-center justify-between text-xs px-3 py-2 rounded-lg transition-all duration-150',
                        isActive
                          ? 'bg-brand/10 text-brand font-bold border-l-4 border-brand shadow-xs'
                          : 'text-ink-muted hover:text-ink hover:bg-surface-muted font-medium',
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Icon icon={link.icon} size="xs" className={isActive ? 'text-brand' : 'text-ink-muted group-hover:text-brand'} />
                        <span className="truncate">{link.label}</span>
                      </span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      ) : (
                        <Icon icon={ChevronRight} size="xs" className="opacity-0 group-hover:opacity-100 transition-opacity text-ink-muted shrink-0" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function LegalStickySidebar({ currentPath }: { currentPath: string }) {
  const legalItems = [
    { label: 'Privacy Policy', href: '/privacy', icon: Shield },
    { label: 'Terms of Service', href: '/terms', icon: FileText },
    { label: 'SLA Overview & Tiers', href: '/sla', icon: CheckSquare },
  ];

  return (
    <aside className="ui-card p-5 sticky top-24 space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-line">
        <Icon icon={ShieldCheck} size="sm" className="text-brand" />
        <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Legal & Governance</h3>
      </div>
      <ul className="space-y-1">
        {legalItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'group flex items-center justify-between text-xs px-3 py-2.5 rounded-lg transition-all duration-150',
                  isActive
                    ? 'bg-brand/10 text-brand font-bold border-l-4 border-brand shadow-xs'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-muted font-medium',
                )}
              >
                <span className="flex items-center gap-2 truncate">
                  <Icon icon={item.icon} size="xs" className={isActive ? 'text-brand' : 'text-ink-muted group-hover:text-brand'} />
                  <span className="truncate">{item.label}</span>
                </span>
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                ) : (
                  <Icon icon={ChevronRight} size="xs" className="opacity-0 group-hover:opacity-100 transition-opacity text-ink-muted shrink-0" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
