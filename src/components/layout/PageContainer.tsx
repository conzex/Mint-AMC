import React from 'react';
import { cn } from '@/lib/utils';

export const PAGE_CONTAINER_CLASS = 'max-w-layout mx-auto w-full px-4 sm:px-6 lg:px-8';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function PageContainer({
  children,
  className,
  as: Tag = 'div',
}: PageContainerProps) {
  const Component = Tag;
  return <Component className={cn(PAGE_CONTAINER_CLASS, className)}>{children}</Component>;
}
