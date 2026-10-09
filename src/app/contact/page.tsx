'use client';

import { Activity, Clock, LayoutDashboard, Mail, Phone, Send, ShieldCheck } from 'lucide-react';
import MarketingChrome from '@/components/layout/marketing-chrome';
import PageHeroBand, { MarketingCtaBand } from '@/components/layout/page-hero-band';
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
    const mailto = `mailto:${siteContent.contact.businessEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
  };

  return (
    <MarketingChrome>
      <PageHeroBand title={contactContent.heroTitle} subtitle={contactContent.heroSubtitle} align="center" />
      <PageSection tone="muted">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <PanelCard title="Business & Enquiries">
            <p className="type-body text-sm mb-4 text-ink-muted">
              For commercial AMC proposals, scope consultations, and enterprise partnership inquiries.
            </p>
            <div className="flex items-center gap-3 type-body font-medium text-ink mb-2">
              <Icon icon={Mail} size="sm" className="text-brand shrink-0" />
              <a href={`mailto:${siteContent.contact.businessEmail}`} className="hover:text-brand hover:underline">
                {siteContent.contact.businessEmail}
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-ink-muted mt-3 pt-3 border-t border-line">
              <Icon icon={Clock} size="xs" className="text-accent shrink-0" />
              <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
            </div>
          </PanelCard>

          <PanelCard title="Support & Helpdesk">
            <p className="type-body text-sm mb-4 text-ink-muted">
              For active service tickets, severity incidents, and 24/7 technical assistance.
            </p>
            <div className="flex items-center gap-3 type-body font-medium text-ink mb-2">
              <Icon icon={Mail} size="sm" className="text-brand shrink-0" />
              <a href={`mailto:${siteContent.contact.supportEmail}`} className="hover:text-brand hover:underline">
                {siteContent.contact.supportEmail}
              </a>
            </div>
            <div className="flex items-center gap-3 type-body font-medium text-ink mb-2">
              <Icon icon={Phone} size="sm" className="text-brand shrink-0" />
              <a href={`tel:${siteContent.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand hover:underline">
                {siteContent.contact.phone}
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mt-2 border border-emerald-200">
              <Icon icon={ShieldCheck} size="xs" />
              <span>24/7 Support Available</span>
            </div>
          </PanelCard>

          <PanelCard title="Monitoring & Dashboard">
            <p className="type-body text-sm mb-4 text-ink-muted">
              Real-time IT infrastructure health tracking, automated incident alerts, and SLA reporting portal.
            </p>
            <div className="flex items-center gap-3 type-body font-medium text-ink mb-2">
              <Icon icon={Activity} size="sm" className="text-brand shrink-0" />
              <span>24/7 Live Monitoring</span>
            </div>
            <div className="flex items-center gap-3 type-body font-medium text-ink mb-2">
              <Icon icon={LayoutDashboard} size="sm" className="text-brand shrink-0" />
              <span>Client AMC Portal & Dashboard</span>
            </div>
          </PanelCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <PanelCard title={contactContent.escalationTitle}>
            <p className="type-body text-sm mb-4 text-ink-muted">
              Dedicated escalation pathways designed for SLA guaranteed response times across India.
            </p>
            <div className="ui-table-wrap border-0 shadow-none">
              <table className="ui-table">
                <tbody>
                  {contactContent.escalationMatrix.map((row) => (
                    <tr key={row.level}>
                      <td className="font-semibold text-ink text-sm">{row.level}</td>
                      <td className="text-sm font-medium">{row.contact}</td>
                      <td className="text-sm text-ink-muted">{row.sla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PanelCard>

          <PanelCard title={contactContent.formTitle}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {sent ? (
                <p className="type-body text-emerald-700 bg-emerald-50 p-4 rounded-lg font-medium border border-emerald-200">{contactContent.formSentMessage}</p>
              ) : (
                <>
                  <input required placeholder={contactContent.formPlaceholders.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="ui-input" />
                  <input required type="email" placeholder={contactContent.formPlaceholders.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="ui-input" />
                  <input required placeholder={contactContent.formPlaceholders.subject} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="ui-input" />
                  <textarea required rows={4} placeholder={contactContent.formPlaceholders.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="ui-input" />
                  <Button type="submit" size="md" className="w-full">
                    <Icon icon={Send} size="xs" />
                    {contactContent.formSubmitLabel}
                  </Button>
                </>
              )}
            </form>
          </PanelCard>
        </div>

        <FaqAccordion items={contactContent.faq} />
      </PageSection>
      <MarketingCtaBand
        title="24/7 Field Engineering Ready PAN-India"
        subtitle="Need immediate emergency AMC coverage or SLA escalation? Speak to our engineering desk directly."
      />
    </MarketingChrome>
  );
}
