import type {Metadata} from 'next';
import {Montserrat, JetBrains_Mono} from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Sparkles Skincare',
  description:
    'A clean, warm, and modern landing page for a premium skincare and beauty brand.',
  keywords: [
    'skincare',
    'beauty',
    'premium skincare',
    'skin care products',
    'beauty brand',
    'natural skincare',
    'glow',
    'radiant skin',
  ],
  openGraph: {
    title: 'Sparkles Skincare',
    description:
      'A clean, warm, and modern landing page for a premium skincare and beauty brand.',
    siteName: 'Sparkles Skincare',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparkles Skincare',
    description:
      'A clean, warm, and modern landing page for a premium skincare and beauty brand.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fdf6f0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
