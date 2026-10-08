import React from 'react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import Badge from '@/components/ui/Badge';
import { MintLeaf } from '@/components/symbols/MintLeaf';
import { ArrowRightSymbol } from '@/components/symbols';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-white">
      <PageContainer className="text-center">
        <div className="max-w-md mx-auto space-y-5">
          <MintLeaf className="w-12 h-12 mx-auto" />
          <Badge variant="navy">404 Error — Page Not Found</Badge>
          <h1 className="text-3xl font-extrabold text-dark-navy tracking-tight">
            Requested Resource Unavailable
          </h1>
          <p className="text-sm text-slate-text leading-relaxed">
            The page or service document you are trying to access does not exist or has been relocated within our catalog.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 bg-tech-blue text-white font-medium text-xs rounded hover:bg-tech-blue-hover transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Return to Home</span>
              <ArrowRightSymbol className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-5 py-2.5 bg-white border border-border-gray text-dark-navy font-medium text-xs rounded hover:border-tech-blue transition-colors"
            >
              Browse AMC Services
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
