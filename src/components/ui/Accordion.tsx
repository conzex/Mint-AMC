'use client';

import React, { useState } from 'react';
import { ChevronDownSymbol } from '../symbols';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id?: string;
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-border-gray rounded-md bg-white overflow-hidden shadow-xs transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-dark-navy hover:text-tech-blue focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base">{item.question}</span>
              <ChevronDownSymbol
                className={cn('w-4 h-4 text-slate-text shrink-0 transition-transform duration-200', isOpen && 'transform rotate-180 text-tech-blue')}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-5 pt-0 sm:px-5 text-slate-text text-sm leading-relaxed border-t border-border-gray/40 bg-cool-white/30">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
