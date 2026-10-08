import React from 'react';
import PageContainer from '../layout/PageContainer';
import { ShieldCheckSymbol, ClockSymbol, ChartUptrendSymbol, CheckmarkCircleSymbol } from '../symbols';

export default function TrustBar() {
  const highlights = [
    {
      icon: <ClockSymbol className="w-5 h-5 text-tech-blue shrink-0" />,
      title: '{{TRUST_ITEM_1_TITLE}}',
      description: '{{TRUST_ITEM_1_DESC}}',
    },
    {
      icon: <ShieldCheckSymbol className="w-5 h-5 text-mint-green shrink-0" />,
      title: '{{TRUST_ITEM_2_TITLE}}',
      description: '{{TRUST_ITEM_2_DESC}}',
    },
    {
      icon: <ChartUptrendSymbol className="w-5 h-5 text-tech-blue shrink-0" />,
      title: '{{TRUST_ITEM_3_TITLE}}',
      description: '{{TRUST_ITEM_3_DESC}}',
    },
    {
      icon: <CheckmarkCircleSymbol className="w-5 h-5 text-mint-green shrink-0" />,
      title: '{{TRUST_ITEM_4_TITLE}}',
      description: '{{TRUST_ITEM_4_DESC}}',
    },
  ];

  return (
    <div className="bg-cool-white border-y border-border-gray py-6">
      <PageContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {item.icon}
              <div>
                <h4 className="text-sm font-semibold text-dark-navy leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-text mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
