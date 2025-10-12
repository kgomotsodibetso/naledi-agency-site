'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { MenuIcon, CloseIcon } from '@/components/icons';
import { Page } from '@/lib/types';


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
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
          <div className="section-container py-4 flex justify-between items-center">
              <Logo />
              <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map(link => (
                      <Link
                          key={link.name}
                          href={link.href}
                          className={`font-semibold transition duration-300 ${pathname === link.href ? 'text-golden-ochre' : 'text-midnight-blue hover:text-golden-ochre'}`}
                      >
                          {link.name}
                      </Link>
                  ))}
                  <Button asChild className="bg-midnight-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
              </nav>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(true)} className="text-midnight-blue">
                    <MenuIcon />
                </button>
              </div>
          </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="text-midnight-blue">
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
                  pathname === link.href ? 'text-golden-ochre' : 'text-midnight-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-midnight-blue text-white font-bold rounded-md mt-6">
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
