'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { MenuIcon, CloseIcon } from '@/components/icons';
import { Page } from '@/lib/types';
import { ThemeToggle } from '../theme-toggle';


const navLinks = [
    { name: 'Home', page: Page.Home, href: '/' },
    { name: 'About Us', page: Page.About, href: '/about' },
    { name: 'Services', page: Page.Services, href: '/services' },
    { name: 'Portfolio', page: Page.Portfolio, href: '/portfolio' },
    { name: 'Blog', page: Page.Blog, href: '/blog' },
    { name: 'Resources', page: Page.Resources, href: '/resources' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
          <div className="section-container py-4 flex justify-between items-center">
              <Logo />
              <div className='flex items-center gap-4'>
                <ThemeToggle />
                <button onClick={() => setIsOpen(true)} className="text-foreground">
                    <MenuIcon />
                </button>
              </div>
          </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="text-foreground">
            <CloseIcon />
          </button>
        </div>
        <div className="p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-semibold py-2 text-left text-xl ${
                  pathname === link.href ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-md mt-6">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};
