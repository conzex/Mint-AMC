'use client';

import React, { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeroBand from '@/components/layout/PageHeroBand';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { PhoneSymbol, EnvelopeSymbol, ClockSymbol, Building2Symbol, ShieldCheckSymbol } from '@/components/symbols';
import { contactData } from '@/content/contact';
import { serviceCategories } from '@/content/services';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'hardware-amc',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeroBand
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        badge={<Badge variant="mint">NOC & Business Contact</Badge>}
      />

      <PageContainer>
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </PageContainer>

      <section className="py-12 bg-white border-b border-border-gray">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{contactData.form.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="p-6 bg-mint-light border border-mint-green/30 rounded-md text-center space-y-2">
                      <ShieldCheckSymbol className="w-10 h-10 text-mint-green mx-auto" />
                      <h3 className="text-lg font-bold text-dark-navy">Request Received</h3>
                      <p className="text-xs text-slate-text">{contactData.form.successMessage}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-dark-navy mb-1">
                            {contactData.form.nameLabel} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none"
                            placeholder="e.g. {{CONTACT_FORM_NAME_LABEL}}"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-dark-navy mb-1">
                            {contactData.form.emailLabel} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none"
                            placeholder="e.g. {{CONTACT_FORM_EMAIL_LABEL}}"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-dark-navy mb-1">
                            {contactData.form.phoneLabel} *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none"
                            placeholder="e.g. {{CONTACT_FORM_PHONE_LABEL}}"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-dark-navy mb-1">
                            {contactData.form.companyLabel} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none"
                            placeholder="e.g. {{CONTACT_FORM_COMPANY_LABEL}}"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark-navy mb-1">
                          {contactData.form.serviceLabel}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none bg-white"
                        >
                          {serviceCategories.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark-navy mb-1">
                          {contactData.form.messageLabel} *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-border-gray rounded focus:border-tech-blue focus:outline-none"
                          placeholder="Describe your equipment inventory, locations, or SLA expectations..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-tech-blue text-white text-xs font-semibold rounded hover:bg-tech-blue-hover transition-colors"
                      >
                        {contactData.form.submitButton}
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* NOC & Escalation Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* NOC Hotline Card */}
              <Card className="bg-cool-white border-tech-blue/30">
                <CardHeader className="bg-tech-blue/5">
                  <Badge variant="blue" className="mb-1">24/7/365 Command Center</Badge>
                  <CardTitle className="text-base">{contactData.nocHotline.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 py-4 text-xs">
                  <p className="text-slate-text">{contactData.nocHotline.description}</p>
                  <div className="flex items-center gap-2 font-bold text-dark-navy">
                    <PhoneSymbol className="w-4 h-4 text-tech-blue" />
                    <span>Hotline: {contactData.nocHotline.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-text">
                    <EnvelopeSymbol className="w-4 h-4 text-mint-green" />
                    <span>NOC Email: {contactData.nocHotline.email}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Escalation Matrix */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Support Escalation Matrix</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-cool-white border-b border-border-gray text-dark-navy">
                        <th className="p-3 font-semibold">Tier</th>
                        <th className="p-3 font-semibold">Role</th>
                        <th className="p-3 font-semibold">Target SLA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-gray/60">
                      {contactData.escalationMatrix.map((item, i) => (
                        <tr key={i}>
                          <td className="p-3 font-bold text-tech-blue">{item.level}</td>
                          <td className="p-3 text-dark-navy">{item.role}</td>
                          <td className="p-3 text-slate-text">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Group Routing Info */}
              <Card className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Building2Symbol className="w-4 h-4 text-tech-blue" />
                  <h4 className="text-xs font-bold text-dark-navy">{contactData.divisionRouting.title}</h4>
                </div>
                <p className="text-xs text-slate-text mb-3">{contactData.divisionRouting.description}</p>
                <div className="space-y-2">
                  {contactData.divisionRouting.divisions.map((div, i) => (
                    <a
                      key={i}
                      href={div.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 bg-cool-white border border-border-gray rounded text-[11px] hover:border-tech-blue transition-colors"
                    >
                      <span className="font-semibold text-dark-navy block">{div.name} ↗</span>
                      <span className="text-slate-text">{div.desc}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
