'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="ui-card">
      <div className="divide-y divide-line">
        {items.map((item, i) => (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-5 py-3 flex items-center justify-between text-left type-card-title hover:bg-surface-muted/80 transition-colors"
            >
              {item.question}
              <Icon icon={ChevronDown} size="sm" className={openFaq === i ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {openFaq === i && <p className="px-5 pb-4 type-body">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
