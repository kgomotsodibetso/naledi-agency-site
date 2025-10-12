import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { DM_Sans, Nanum_Pen_Script, Inter } from 'next/font/google';
import { Header } from '@/components/landing/header';
import './globals.css';

const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHandwriting = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwriting',
});

export const metadata: Metadata = {
  title: 'Naledi Digital - The Home of Brand Builders',
  description: 'We help small businesses, entrepreneurs, and startups build unforgettable brands that shine bright.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body 
        className={cn(
          'min-h-screen font-body antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          fontBody.variable
        )}
      >
        <div className="flex">
          <Header />
          <div className="flex-1 md:pl-64">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
