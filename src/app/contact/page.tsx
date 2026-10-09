'use client';

import { Mail, Phone, Send } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand from '@/components/layout/page-hero-band';
import PageSection from '@/components/layout/page-section';
import FaqAccordion from '@/components/ui/faq-accordion';
import { PanelCard } from '@/components/ui/panel-card';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
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
      <PageSection tone="muted">
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          <PanelCard title={contactContent.nocTitle}>
            <p className="type-body mb-3">{contactContent.nocBody}</p>
            <div className="flex items-start gap-3 type-body">
              <Icon icon={Phone} size="sm" className="text-accent mt-0.5" />
              <span>{siteContent.contact.nocHotline}</span>
            </div>
            <div className="flex items-start gap-3 type-body mt-2">
              <Icon icon={Mail} size="sm" className="text-accent mt-0.5" />
              <span>{siteContent.contact.escalationEmail}</span>
            </div>
          </PanelCard>
          <PanelCard title={contactContent.formTitle}>
            <form onSubmit={handleSubmit} className="space-y-3">
              {sent ? (
                <p className="type-body">{contactContent.formSentMessage}</p>
              ) : (
                <>
                  <input required placeholder={contactContent.formPlaceholders.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="ui-input" />
                  <input required type="email" placeholder={contactContent.formPlaceholders.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="ui-input" />
                  <input required placeholder={contactContent.formPlaceholders.subject} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="ui-input" />
                  <textarea required rows={4} placeholder={contactContent.formPlaceholders.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="ui-input" />
                  <Button type="submit">
                    <Icon icon={Send} size="sm" />
                    {contactContent.formSubmitLabel}
                  </Button>
                </>
              )}
            </form>
          </PanelCard>
        </div>
        <PanelCard title={contactContent.escalationTitle} className="mb-8">
          <div className="ui-table-wrap border-0 shadow-none">
            <table className="ui-table">
              <tbody>
                {contactContent.escalationMatrix.map((row) => (
                  <tr key={row.level}>
                    <td className="font-medium text-ink">{row.level}</td>
                    <td>{row.contact}</td>
                    <td>{row.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PanelCard>
        <FaqAccordion items={contactContent.faq} />
      </PageSection>
    </MarketingChrome>
  );
}
