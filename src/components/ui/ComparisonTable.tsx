import React from 'react';
import { CheckmarkCircleSymbol } from '../symbols';
import { ComparisonFeature } from '@/content/pricing';

export default function ComparisonTable({ features }: { features: ComparisonFeature[] }) {
  const renderValue = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <CheckmarkCircleSymbol className="w-5 h-5 text-mint-green mx-auto" />
      ) : (
        <span className="text-slate-text/40 text-lg">—</span>
      );
    }
    return <span className="text-xs font-semibold text-dark-navy">{val}</span>;
  };

  return (
    <div className="border border-border-gray rounded-md overflow-hidden bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-cool-white border-b border-border-gray text-dark-navy">
              <th className="p-4 font-semibold w-2/5">Feature Specification</th>
              <th className="p-4 font-semibold text-center w-1/5">Essential</th>
              <th className="p-4 font-semibold text-center w-1/5 bg-tech-blue/5 border-x border-border-gray text-tech-blue">
                Professional
              </th>
              <th className="p-4 font-semibold text-center w-1/5">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-gray/60">
            {features.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cool-white/30'}>
                <td className="p-4">
                  <div className="font-medium text-dark-navy">{item.featureName}</div>
                  <div className="text-xs text-slate-text/70">{item.category}</div>
                </td>
                <td className="p-4 text-center">{renderValue(item.essential)}</td>
                <td className="p-4 text-center bg-tech-blue/5 border-x border-border-gray">
                  {renderValue(item.professional)}
                </td>
                <td className="p-4 text-center">{renderValue(item.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
