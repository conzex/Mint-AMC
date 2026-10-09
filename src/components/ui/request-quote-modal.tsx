'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/site';

type QuoteModalContextType = {
  isOpen: boolean;
  openQuoteModal: (scope?: string) => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultScope, setDefaultScope] = useState<string>('');

  const openQuoteModal = (scope?: string) => {
    if (scope) setDefaultScope(scope);
    setIsOpen(true);
  };

  const closeQuoteModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal }}>
      {children}
      <RequestQuoteModal isOpen={isOpen} onClose={closeQuoteModal} defaultService={defaultScope} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

type RequestQuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
};

const STANDARD_SCOPE_CATEGORIES = [
  'End-User IT (Desktops, Laptops, Printers, Peripherals)',
  'Network & Security (Switches, Routers, Firewalls, Wi-Fi)',
  'Infrastructure & Data Centre (Physical Servers, SAN/NAS Storage)',
  '24/7 Monitoring & NOC Services',
  'Comprehensive Multi-Location Enterprise IT AMC',
  'Preventive Maintenance & Health Audits',
];

export function RequestQuoteModal({ isOpen, onClose, defaultService = '' }: RequestQuoteModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    scope: '',
    message: '',
  });
  const [customScope, setCustomScope] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (defaultService && STANDARD_SCOPE_CATEGORIES.includes(defaultService)) {
        setForm((f) => ({ ...f, scope: defaultService }));
        setCustomScope('');
      } else if (
        defaultService &&
        defaultService !== 'General AMC Scope' &&
        defaultService !== 'General IT AMC Scope'
      ) {
        setForm((f) => ({ ...f, scope: 'Other' }));
        setCustomScope(defaultService);
      } else {
        setForm((f) => ({ ...f, scope: '' }));
        setCustomScope('');
      }
    }
  }, [isOpen, defaultService]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeScope = form.scope === 'Other' ? customScope || 'Custom AMC Scope' : form.scope;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const mailto = `mailto:${siteContent.contact.businessEmail}?subject=${encodeURIComponent(`Quote Request: ${activeScope}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nScope: ${activeScope}\n\nMessage:\n${form.message}`)}`;
      window.open(mailto);
    }, 400);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', company: '', scope: '', message: '' });
    setCustomScope('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-surface border border-line rounded-lg shadow-2xl overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-surface-muted px-6 py-4 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-subtle text-brand flex items-center justify-center">
              <Icon icon={ShieldCheck} size="sm" />
            </div>
            <div>
              <h2 className="text-base font-bold text-ink leading-tight">Request an AMC Quote</h2>
              <p className="text-xs text-ink-muted">SLA Proposal & Scope Consultation</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-line/50 transition-colors"
            aria-label="Close modal"
          >
            <Icon icon={X} size="sm" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Icon icon={CheckCircle2} size="lg" />
              </div>
              <h3 className="text-xl font-bold text-ink">Quote Request Ready!</h3>
              <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                Your quote inquiry for <span className="font-semibold text-ink">{activeScope}</span> has been prepared. Your email client will open to send the request directly to <span className="text-brand font-medium">{siteContent.contact.businessEmail}</span>.
              </p>
              <div className="pt-4">
                <Button onClick={handleResetAndClose} size="md">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Full Name *</label>
                  <div className="relative">
                    <Icon icon={User} size="xs" className="absolute left-3 top-3 text-ink-muted" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="ui-input pl-9"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Work Email *</label>
                  <div className="relative">
                    <Icon icon={Mail} size="xs" className="absolute left-3 top-3 text-ink-muted" />
                    <input
                      required
                      type="email"
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="ui-input pl-9"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Phone Number *</label>
                  <div className="relative">
                    <Icon icon={Phone} size="xs" className="absolute left-3 top-3 text-ink-muted" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 800 7060 308"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="ui-input pl-9"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Company / Organization *</label>
                  <div className="relative">
                    <Icon icon={Building} size="xs" className="absolute left-3 top-3 text-ink-muted" />
                    <input
                      required
                      type="text"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="ui-input pl-9"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">
                  AMC Scope / Infrastructure Category *
                </label>
                <select
                  required
                  value={form.scope}
                  onChange={(e) => {
                    const val = e.target.value;
                    setForm({ ...form, scope: val });
                    if (val !== 'Other') {
                      setCustomScope('');
                    }
                  }}
                  className="ui-input cursor-pointer"
                >
                  <option value="" disabled>
                    -- Select AMC Scope / Category * --
                  </option>
                  {STANDARD_SCOPE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="Other">Other / Custom Scope...</option>
                </select>

                {form.scope === 'Other' && (
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      placeholder="Specify your custom AMC scope / assets..."
                      value={customScope}
                      onChange={(e) => setCustomScope(e.target.value)}
                      className="ui-input"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Requirements / Message</label>
                <div className="relative">
                  <Icon icon={MessageSquare} size="xs" className="absolute left-3 top-3 text-ink-muted" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your asset counts, locations, or desired SLA response time..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="ui-input pl-9"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-line">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  Cancel
                </button>
                <Button type="submit" size="md" className="rounded-lg">
                  <Icon icon={Send} size="xs" />
                  Submit Quote Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
