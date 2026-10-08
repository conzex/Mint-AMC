import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mint AMC | Corporate IT Annual Maintenance Contract Services',
  description:
    'Mint AMC is an IT Annual Maintenance Contract services division under CONZEX GLOBAL PRIVATE LIMITED providing desktop, laptop, server, network, and data centre support.',
  openGraph: {
    title: 'Mint AMC | Enterprise IT Maintenance & NOC Support',
    description:
      'High-availability IT Annual Maintenance Contracts (AMC) across India with 24/7 NOC monitoring, guaranteed SLAs, and OEM hardware support.',
    url: 'https://www.mintamc.com',
    siteName: 'Mint AMC',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mint AMC',
  url: 'https://www.mintamc.com',
  logo: 'https://www.mintamc.com/logo.svg',
  parentOrganization: {
    '@type': 'Organization',
    name: 'CONZEX GLOBAL PRIVATE LIMITED',
    url: 'https://www.conzex.com',
  },
  subOrganization: [
    {
      '@type': 'Organization',
      name: 'Mint AMC',
      description: 'IT Annual Maintenance Contract Division',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-text antialiased" suppressHydrationWarning>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
