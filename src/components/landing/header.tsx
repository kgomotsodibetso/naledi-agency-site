'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { MenuIcon, CloseIcon } from '@/components/icons';
import { Page } from '@/lib/types';
import { ThemeToggle } from '../theme-toggle';
import { cn } from '@/lib/utils';


const navLinks = [
    { name: 'Home', page: Page.Home, href: '/' },
    { name: 'About', page: Page.About, href: '/about' },
    { name: 'Services', page: Page.Services, href: '/services' },
    { name: 'Portfolio', page: Page.Portfolio, href: '/portfolio' },
    { name: 'Blog', page: Page.Blog, href: '/blog' },
    { name: 'Resources', page: Page.Resources, href: '/resources' },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-accent',
        isActive ? 'text-accent font-semibold' : 'text-foreground/80'
      )}
    >
      {children}
    </Link>
  );
};


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
          <div className="section-container py-3 flex justify-between items-center">
              <Logo />

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className='flex items-center gap-2'>
                <ThemeToggle />
                
                {/* Desktop CTA */}
                <Button asChild size="sm" className="hidden md:flex bg-primary text-primary-foreground font-bold rounded-md">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(true)} className="md:hidden text-foreground p-2">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon />
                </button>
              </div>
          </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="text-foreground p-2">
            <span className="sr-only">Close menu</span>
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
