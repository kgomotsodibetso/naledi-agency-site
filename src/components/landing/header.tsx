'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { MenuIcon, CloseIcon, SearchIcon } from '@/components/icons';
import { Page } from '@/lib/types';


const navLinks = [
    { name: 'Home', page: Page.Home, href: '/' },
    { name: 'About Us', page: Page.About, href: '/about' },
    { name: 'Services', page: Page.Services, href: '/services' },
    { name: 'Portfolio', page: Page.Portfolio, href: '/portfolio' },
    { name: 'Blog', page: Page.Blog, href: '/blog' },
    { name: 'Resources', page: Page.Resources, href: '/resources' },
    { name: 'Persona AI', page: Page.PersonaGenerator, href: '/persona-generator' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [localQuery, setLocalQuery] = React.useState('');
  const pathname = usePathname();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (localQuery.trim()) {
          // Implement search functionality or navigation
          console.log("Search query:", localQuery);
          setLocalQuery('');
          setIsOpen(false);
      }
  };

  return (
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
                  <form onSubmit={handleSearchSubmit} className="relative">
                      <input
                          type="search"
                          value={localQuery}
                          onChange={(e) => setLocalQuery(e.target.value)}
                          placeholder="Search..."
                          aria-label="Search site"
                          className="px-4 py-2 w-32 text-sm rounded-full border-2 bg-slate-100 text-slate-900 placeholder:text-slate-500 border-slate-300 focus:w-48 focus:border-midnight-blue focus:ring-0 transition-all duration-300"
                      />
                      <button type="submit" aria-label="Submit search" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-midnight-blue">
                          <SearchIcon />
                      </button>
                  </form>
                  <Button asChild className="bg-midnight-blue text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                      <Link href="/contact">Contact Us</Link>
                  </Button>
              </nav>
              <div className="md:hidden">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <button className="text-midnight-blue">
                          <MenuIcon />
                      </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full bg-white p-6">
                      <div className="flex justify-between items-center mb-6">
                        <Logo />
                        <button onClick={() => setIsOpen(false)}>
                          <CloseIcon />
                        </button>
                      </div>
                       <form onSubmit={handleSearchSubmit} className="relative mb-4">
                          <input
                              type="search"
                              value={localQuery}
                              onChange={(e) => setLocalQuery(e.target.value)}
                              placeholder="Search..."
                              aria-label="Search site"
                              className="w-full px-4 py-3 rounded-md border-2 bg-slate-100 text-slate-900 placeholder:text-slate-500 border-slate-300 text-lg focus:border-midnight-blue focus:ring-0"
                          />
                          <button type="submit" aria-label="Submit search" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                              <SearchIcon className="h-6 w-6" />
                          </button>
                      </form>
                      <nav className="flex flex-col gap-4">
                          {navLinks.map(link => (
                              <Link
                                  key={link.name}
                                  href={link.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`font-semibold py-2 text-left text-lg ${pathname === link.href ? 'text-golden-ochre' : 'text-midnight-blue'}`}
                              >
                                  {link.name}
                              </Link>
                          ))}
                          <Button asChild size="lg" className="bg-midnight-blue text-white font-bold rounded-md mt-4">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                          </Button>
                      </nav>
                    </SheetContent>
                  </Sheet>
              </div>
          </div>
      </header>
  );
};
