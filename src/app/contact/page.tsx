'use client';

import { Mail, Phone, Send } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageContainer from '@/components/layout/page-container';
import PageHeroBand from '@/components/layout/page-hero-band';
import FaqAccordion from '@/components/ui/faq-accordion';
import { contactContent } from '@/content/contact';
import { siteContent } from '@/content/site';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
  };

  return (
    <MarketingChrome>
      <PageHeroBand title={contactContent.heroTitle} subtitle={contactContent.heroSubtitle} align="left" />
      <section className="py-10 bg-bg-body">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-border-card rounded">
              <div className="px-5 py-4 border-b border-border-card">
                <h2 className="text-sm font-semibold text-text-primary">{contactContent.nocTitle}</h2>
              </div>
              <div className="px-5 py-4 space-y-3 text-sm text-text-secondary">
                <p>{contactContent.nocBody}</p>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-dell-blue mt-0.5" />
                  <span>{siteContent.contact.nocHotline}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-dell-blue mt-0.5" />
                  <span>{siteContent.contact.escalationEmail}</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-border-card rounded">
              <div className="px-5 py-4 border-b border-border-card">
                <h2 className="text-sm font-semibold text-text-primary">{contactContent.formTitle}</h2>
              </div>
              <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
                {sent ? (
                  <p className="text-sm text-text-secondary">{contactContent.formSentMessage}</p>
                ) : (
                  <>
                    <input required placeholder={contactContent.formPlaceholders.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border border-border-card rounded text-sm" />
                    <input required type="email" placeholder={contactContent.formPlaceholders.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 border border-border-card rounded text-sm" />
                    <input required placeholder={contactContent.formPlaceholders.subject} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-3 py-2 border border-border-card rounded text-sm" />
                    <textarea required rows={4} placeholder={contactContent.formPlaceholders.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 border border-border-card rounded text-sm" />
                    <button type="submit" className="inline-flex items-center gap-2 bg-dell-blue text-white text-sm font-semibold px-4 py-2 rounded hover:bg-dell-blue-hover">
                      <Send className="w-4 h-4" /> {contactContent.formSubmitLabel}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
          <div className="bg-white border border-border-card rounded mb-8">
            <div className="px-5 py-4 border-b border-border-card">
              <h2 className="text-sm font-semibold text-text-primary">{contactContent.escalationTitle}</h2>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border-card">
                {contactContent.escalationMatrix.map((row) => (
                  <tr key={row.level} className="hover:bg-row-hover">
                    <td className="p-3 font-medium text-text-primary">{row.level}</td>
                    <td className="p-3 text-text-secondary">{row.contact}</td>
                    <td className="p-3 text-text-secondary">{row.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FaqAccordion items={contactContent.faq} />
        </PageContainer>
      </section>
    </MarketingChrome>
  );
}
