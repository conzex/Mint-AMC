'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white border border-border-card rounded">
      <div className="divide-y divide-border-card">
        {items.map((item, i) => (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-5 py-3 flex items-center justify-between text-left text-sm font-medium text-text-primary hover:bg-bg-body/50"
            >
              {item.question}
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
            </button>
            {openFaq === i && <p className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
