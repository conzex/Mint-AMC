import React from 'react';
import Link from 'next/link';
import { ChevronRightSymbol } from '../symbols';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-text">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href="/" className="hover:text-tech-blue transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRightSymbol className="w-3.5 h-3.5 text-slate-text/60" />
            {item.href ? (
              <Link href={item.href} className="hover:text-tech-blue transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-dark-navy font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
