# Mint AMC — Content Placeholder Audit (CONTENT_TODO.md)

This file tracks all `{{PLACEHOLDER_TOKENS}}` defined across `/src/content/` data files that need to be replaced with official marketing copy, legal registration numbers, and real contact details before production deployment.

---

## 🌐 1. Global & Company Site Tokens (`/src/content/site.ts`)

| Token | File | Purpose | Replacement Status |
|---|---|---|---|
| `{{SITE_BRAND_NAME}}` | `site.ts` | Brand wordmark ("Mint AMC") | ⏳ Pending Copy |
| `{{SITE_TAGLINE}}` | `site.ts` | Main tagline | ⏳ Pending Copy |
| `{{PARENT_COMPANY_NAME}}` | `site.ts` | Legal entity ("CONZEX GLOBAL PRIVATE LIMITED") | ⏳ Pending Copy |
| `{{PARENT_COMPANY_URL}}` | `site.ts` | Parent website ("https://www.conzex.com") | ⏳ Pending Copy |
| `{{PARENT_COMPANY_CIN}}` | `site.ts` | Corporate CIN Number | ⏳ Pending Copy |
| `{{PARENT_DPIIT_RECOGNITION}}` | `site.ts` | DPIIT Registration Number | ⏳ Pending Copy |
| `{{DIVISION_1_NAME}}` ... `{{DIVISION_4_NAME}}` | `site.ts` | Group division names | ⏳ Pending Copy |
| `{{CONTACT_EMAIL}}` | `site.ts` | Primary contact email | ⏳ Pending Copy |
| `{{CONTACT_PHONE}}` | `site.ts` | Corporate phone number | ⏳ Pending Copy |
| `{{NOC_HOTLINE}}` | `site.ts` | 24/7 Command center hotline | ⏳ Pending Copy |
| `{{ESCALATION_EMAIL}}` | `site.ts` | Priority support escalation mail | ⏳ Pending Copy |
| `{{HEADQUARTERS_ADDRESS}}` | `site.ts` | Registered office address | ⏳ Pending Copy |

---

## 🏠 2. Home Page Tokens (`/src/content/home.ts`)

| Token | Category | Description |
|---|---|---|
| `{{HERO_BADGE_TEXT}}` | Hero | Top badge text |
| `{{HERO_HEADLINE}}` | Hero | Main h1 headline |
| `{{HERO_SUBHEADLINE}}` | Hero | Hero paragraph |
| `{{HERO_PRIMARY_CTA}}` | Hero | Primary button label |
| `{{HERO_SECONDARY_CTA}}` | Hero | Secondary button label |
| `{{METRIC_1_VALUE}}` ... `{{METRIC_4_VALUE}}` | Metrics | Quantitative impact stats |
| `{{TIMELINE_STEP1_TITLE}}` ... `{{STEP4_DESC}}` | Timeline | Onboarding steps |
| `{{TESTIMONIAL_1_QUOTE}}` ... `{{COMPANY}}` | Testimonials | Client quotes & roles |
| `{{COVERAGE_TITLE}}` ... `{{REGIONS}}` | Coverage | Multi-region coverage map |

---

## 🛠️ 3. Service Categories (`/src/content/services.ts`)

| Token Pattern | Category | Scope |
|---|---|---|
| `{{SERVICE_HARDWARE_TITLE}}` ... `{{FULL}}` | Desktop & Laptop AMC | Hardware replacement, preventive maintenance |
| `{{SERVICE_SOFTWARE_TITLE}}` ... `{{FULL}}` | Software Support | OS patching, application support |
| `{{SERVICE_NETWORK_TITLE}}` ... `{{FULL}}` | Network Management | Switches, routers, firewalls, Wi-Fi |
| `{{SERVICE_PRINTER_TITLE}}` ... `{{FULL}}` | Printer & Peripheral AMC | Multi-function printers, scanners |
| `{{SERVICE_SERVER_TITLE}}` ... `{{FULL}}` | Server & Storage AMC | SAN, NAS, rack servers, RAID |
| `{{SERVICE_DATACENTRE_TITLE}}` ... `{{FULL}}` | Data Centre AMC | Precision cooling, UPS, power |
| `{{SERVICE_CLOUD_TITLE}}` ... `{{FULL}}` | Cloud Support | AWS, Azure, hybrid cloud monitoring |
| `{{SERVICE_MONITORING_TITLE}}` ... `{{FULL}}` | 24/7 Monitoring | NOC alerts, SNMP tracking |

---

## 💼 4. Solutions (`/src/content/solutions.ts`)

- `{{SOL_SMB_TITLE}}` to `{{SOL_EDU_USECASE}}`: SMB, Enterprise, Govt, Healthcare, Education frameworks.
- `{{MODEL_BREAKFIX_TITLE}}` to `{{MODEL_REMOTEHANDS_HIGH_2}}`: Engagement model specs.

---

## 💳 5. Pricing & Comparison (`/src/content/pricing.ts`)

- `{{TIER_ESSENTIAL_PRICE}}`, `{{TIER_PRO_PRICE}}`, `{{TIER_ENTERPRISE_PRICE}}`
- `{{COMP_FEAT_RESPONSE_TIME}}`, `{{COMP_VAL_4HR}}`, `{{COMP_VAL_30MIN}}`
- `{{FAQ_Q1}}` to `{{FAQ_A5}}`: 5 core FAQ questions and answers.

---

## ℹ️ 6. About & Corporate Profile (`/src/content/about.ts`)

- `{{ABOUT_STORY_P1}}` to `{{ABOUT_STORY_P3}}`: Mint AMC history.
- `{{ABOUT_PARENT_TITLE}}` & `{{ABOUT_DPIIT_DETAILS}}`: Parent company background.
- `{{VALUE_1_TITLE}}` to `{{VALUE_4_DESC}}`: Core operating values.
- `{{CERT_1_NAME}}` to `{{CERT_3_ISSUER}}`: Quality & ISO certifications.

---

## 🏆 7. Why Mint AMC (`/src/content/why.ts`)

- `{{DIFF_1_TITLE}}` to `{{DIFF_4_METRIC}}`: Competitive differentiators.
- `{{SLA_P1_RESPONSE}}` to `{{SLA_P3_RESOLVE}}`: SLA incident severity targets.
- `{{OEM_PARTNER_1}}` to `{{OEM_PARTNER_4}}`: OEM hardware partners.

---

## 📞 8. Contact & Escalation (`/src/content/contact.ts`)

- `{{CONTACT_FORM_NAME_LABEL}}` to `{{CONTACT_FORM_SUBMIT_BTN}}`
- `{{NOC_HOTLINE_PHONE}}`, `{{NOC_HOTLINE_EMAIL}}`
- `{{ESCALATION_L1_ROLE}}` to `{{ESCALATION_L3_TIME}}`
- `{{DIV_ROUTING_1_NAME}}` to `{{DIV_ROUTING_3_LINK}}`

---

## 📜 9. Legal & SLA Documents (`/src/content/legal.ts`)

- `{{PRIVACY_S1_HEADING}}` to `{{PRIVACY_S4_BODY}}`
- `{{TERMS_S1_HEADING}}` to `{{TERMS_S4_BODY}}`
- `{{SLA_TEMPLATE_TITLE}}`, `{{SLA_METRIC_1_TARGET}}`, `{{SLA_EXCLUSION_1}}`
