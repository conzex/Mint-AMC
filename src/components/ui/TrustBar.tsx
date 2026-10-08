import React from 'react';
import PageContainer from '../layout/PageContainer';
import { ShieldCheckSymbol, ClockSymbol, ChartUptrendSymbol, CheckmarkCircleSymbol } from '../symbols';

export default function TrustBar() {
  const highlights = [
    {
      icon: <ClockSymbol className="w-5 h-5 text-tech-blue shrink-0" />,
      title: 'Guaranteed SLA Response',
      description: 'Contractual 2-hour on-site dispatch commitment for critical outages.',
    },
    {
      icon: <ShieldCheckSymbol className="w-5 h-5 text-mint-green shrink-0" />,
      title: '100% Genuine OEM Spares',
      description: 'Original hardware replacement parts for Dell, HPE, Cisco & APC.',
    },
    {
      icon: <ChartUptrendSymbol className="w-5 h-5 text-tech-blue shrink-0" />,
      title: '24/7/365 NOC Surveillance',
      description: 'Continuous SNMP telemetry monitoring catching failures proactively.',
    },
    {
      icon: <CheckmarkCircleSymbol className="w-5 h-5 text-mint-green shrink-0" />,
      title: 'Pan-India Field Network',
      description: 'Nationwide engineer coverage across Tier 1, 2 & 3 enterprise hubs.',
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
