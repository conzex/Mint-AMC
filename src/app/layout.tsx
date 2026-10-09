import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: '{{META_DEFAULT_TITLE}}',
  description: '{{META_DEFAULT_DESCRIPTION}}',
  metadataBase: new URL(siteContent.siteUrl),
  openGraph: {
    title: '{{META_OG_TITLE}}',
    description: '{{META_OG_DESCRIPTION}}',
    url: siteContent.siteUrl,
    siteName: siteContent.brandName,
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteContent.brandName,
  url: siteContent.siteUrl,
  parentOrganization: {
    '@type': 'Organization',
    name: siteContent.parentCompany.name,
    url: siteContent.parentCompany.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-bg-body">{children}</body>
    </html>
  );
}
