import { Inter } from 'next/font/google';
import './globals.css';
import { ClientLayout } from './client-layout';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mushin Buys Houses - Sell Your House Fast',
  description: 'Get a fair cash offer for your house in Your City. No repairs, no commissions, close on your timeline.',
  keywords: 'sell house fast, cash home buyers, Your City home buyers, sell my house',
  openGraph: {
    title: 'Mushin Buys Houses - Sell Your House Fast in Your City',
    description: 'Get a fair cash offer for your house. No repairs, no commissions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}