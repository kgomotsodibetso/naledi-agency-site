
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { DM_Sans, Nanum_Pen_Script, Inter } from 'next/font/google';
import { Header } from '@/components/landing/header';
import { ThemeProvider } from '@/components/theme-provider';
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
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/studio-4298127278-2785f.firebasestorage.app/o/Naledi%20Digital%20Logos%2FNaledi%20Digital%20logo%20(1).png?alt=media&token=59ee09a1-01c6-4eb1-b025-73134d43ff57',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          'min-h-screen font-body antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
