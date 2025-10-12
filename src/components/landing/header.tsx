'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
          // Assuming navigation to a search page:
          // router.push(`/search?q=${localQuery}`);
          setLocalQuery('');
          setIsOpen(false);
      }
  };

  return (
    <>
      {/* Vertical Desktop Navbar */}
      <aside className="hidden md:flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r bg-white fixed">
        <div className="px-4">
            <Logo />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="flex-1 -mx-3 space-y-3">
                <div className="relative mx-3 my-4">
                    <form onSubmit={handleSearchSubmit}>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon />
                        </span>

                        <input 
                            type="search"
                            value={localQuery}
                            onChange={(e) => setLocalQuery(e.target.value)}
                            className="w-full py-2 pl-10 pr-4 text-slate-700 bg-slate-100 border rounded-md focus:border-midnight-blue focus:ring-midnight-blue focus:ring focus:ring-opacity-40" 
                            placeholder="Search" 
                        />
                    </form>
                </div>
                {navLinks.map(link => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-300 transform ${pathname === link.href ? 'bg-midnight-blue text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'}`}
                    >
                        <span className="mx-2 text-sm font-medium">{link.name}</span>
                    </Link>
                ))}
            </nav>
            
            <div className="mt-6">
                <Button asChild className="w-full bg-midnight-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md w-full">
          <div className="section-container py-4 flex justify-between items-center">
              <Logo />
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
      </header>
    </>
  );
};
