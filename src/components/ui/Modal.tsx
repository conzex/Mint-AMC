'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onEsc);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-navy/60 backdrop-blur-xs">
      <div
        className={cn(
          'w-full max-w-lg bg-white rounded-md border border-border-gray shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border-gray bg-cool-white">
          <h3 className="text-lg font-semibold text-dark-navy">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-text hover:text-dark-navy rounded"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
