import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { siteContent } from '@/content/site';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Mint AMC | Enterprise IT Annual Maintenance Contracts',
  description:
    'Mint AMC delivers PAN-India IT AMC for desktops, networks, servers, data centre infrastructure, and 24/7 NOC monitoring. A division of CONZEX GLOBAL PRIVATE LIMITED.',
  metadataBase: new URL(siteContent.siteUrl),
  openGraph: {
    title: 'Mint AMC | Enterprise IT Annual Maintenance Contracts',
    description:
      'PAN-India IT AMC for desktops, networks, servers, data centre, and 24/7 NOC. A division of CONZEX GLOBAL PRIVATE LIMITED.',
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
  logo: 'https://mintamc.com/assets/logo.png',
  parentOrganization: {
    '@type': 'Organization',
    name: siteContent.parentCompany.name,
    url: siteContent.parentCompany.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${openSans.className} min-h-screen bg-bg-body`}>{children}</body>
    </html>
  );
}
