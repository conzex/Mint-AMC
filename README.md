# Mint AMC — Corporate Marketing Website

Mint AMC is an IT Annual Maintenance Contract (AMC) services division under **CONZEX GLOBAL PRIVATE LIMITED** (CIN: `{{PARENT_COMPANY_CIN}}`).

This repository contains the complete, production-ready marketing website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Design System & Visual Foundation

The site inherits the enterprise spacing rhythm, container system (1440px max width), and crisp border radius scale from `~/Projects/uidrac`, updated strictly with the **Mint AMC Brand Palette**:

| Role | HEX Code | Usage |
|---|---|---|
| **Tech Blue** | `#0076CE` | Primary interactive buttons, links, accents |
| **Mint Green** | `#3EB489` | Leaf logo mark, success pills, status indicators |
| **Dark Navy** | `#102A43` | Primary headings, wordmark, navigation text |
| **Slate** | `#52606D` | Body copy, descriptions, metadata |
| **Cool White** | `#F5F7FA` | Alternating section backgrounds, card fills |
| **Light Gray** | `#D9E2EC` | Card borders, table dividers, input borders |

### Typography & Icons
- **Font Stack**: System Apple Font Stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif`). Zero Google Fonts or external fonts.
- **Icons**: Apple SF Symbols exported as inline SVG React components inside `/src/components/symbols/`.

---

## 🏗️ Project Architecture

```
mint-amc/
├── public/
│   └── logo.svg                 # Mint Leaf SVG logo mark
├── src/
│   ├── app/                     # Next.js 14 App Router (14 Pages)
│   │   ├── layout.tsx           # Root layout with JSON-LD subOrganization schema
│   │   ├── page.tsx             # Home Page
│   │   ├── services/            # Services overview & dynamic [slug] pages
│   │   ├── solutions/           # Industry & engagement model solutions
│   │   ├── pricing/             # Three-tier pricing & comparison table
│   │   ├── why-mint-amc/        # Differentiators & SLA matrix
│   │   ├── about/               # Company profile & parent structure
│   │   ├── resources/           # Knowledge base & dynamic [slug] pages
│   │   ├── contact/             # Proposal form, NOC hotline & escalation matrix
│   │   ├── privacy/             # Privacy policy
│   │   ├── terms/               # Terms of service
│   │   ├── sla/                 # Master SLA agreement framework
│   │   └── not-found.tsx        # 404 handler
│   ├── components/
│   │   ├── layout/              # PageContainer, PageHeroBand, Navigation, Footer, CtaBanner
│   │   ├── symbols/             # SF Symbol inline SVG React components + MintLeaf mark + DpiitBadge
│   │   └── ui/                  # Button, Card, Badge, Accordion, Tabs, Modal, Tooltip, TrustBar, ComparisonTable
│   ├── content/                 # Strongly typed placeholder token data files
│   │   ├── site.ts              # Global brand, parent CIN, navigation & footer links
│   │   ├── services.ts          # 8 AMC service categories with full specs
│   │   ├── solutions.ts         # Industry & engagement frameworks
│   │   ├── pricing.ts           # Tier pricing, feature matrix & FAQs
│   │   ├── home.ts              # Hero, metrics, timeline, testimonials, coverage
│   │   ├── about.ts             # Story, parent structure, values, certifications
│   │   ├── why.ts               # Differentiators & SLA matrix
│   │   ├── resources.ts         # Articles list
│   │   ├── contact.ts           # NOC details & escalation matrix
│   │   └── legal.ts             # Privacy, terms, SLA template
│   └── lib/
│       └── utils.ts             # Tailwind merge utility
├── CONTENT_TODO.md              # Complete list of placeholder tokens needing production copy
├── tailwind.config.ts           # Brand palette tokens & spacing config
└── tsconfig.json
```

---

## ⚙️ Development & Build Setup

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Quick Start
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build validation
npm run build
```

---

## 📝 Updating Placeholder Content

All visible text strings are isolated inside `/src/content/` typed data files.
To replace tokens like `{{HERO_HEADLINE}}` or `{{PARENT_COMPANY_CIN}}`, open the corresponding file in `/src/content/` and replace the token with real copy. See `CONTENT_TODO.md` for a comprehensive audit of all tokens.
