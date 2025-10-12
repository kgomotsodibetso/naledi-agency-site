'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Star, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import type { NavItem } from '@/lib/types';

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Persona AI', href: '/persona-generator' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-card/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost">
                <Link href="/contact">Submit Enquiry</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Strategy Call</Link>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] bg-card p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b p-4">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t p-4">
                <Button asChild variant="outline" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/contact">Submit Enquiry</Link>
                </Button>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/contact">Book a Strategy Call</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
