
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/icons';

const socialLinks = [
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
];

const mainLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Persona AI', href: '/persona-generator' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-slate-300 hover:text-white transition-colors duration-300">
    {children}
  </Link>
);

const SocialLink = ({ name, icon, url }: { name: string; icon: React.ReactNode; url: string }) => (
  <a
    key={name}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Follow us on ${name}`}
    className="text-slate-300 hover:text-sunrise-yellow transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-sans font-bold text-lg mb-4 text-sunrise-yellow uppercase tracking-wider">
    {children}
  </h3>
);

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && /\S+@\S+\.\S+/.test(email)) {
            setIsSuccess(true);
        }
    };
    
    if (isSuccess) {
        return <p className="text-slate-200">Thanks for subscribing!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow px-3 py-2 text-sm bg-midnight-blue border border-slate-600 rounded-md text-white placeholder-slate-400 focus:ring-sunrise-yellow focus:border-sunrise-yellow"
                aria-label="Email for newsletter"
            />
            <Button type="submit" size="sm" className="bg-sunrise-yellow text-midnight-blue font-bold rounded-md hover:bg-golden-ochre transition duration-300">
                Go
            </Button>
        </form>
    );
}

export function Footer() {
  return (
    <footer className="bg-midnight-blue text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Logo & About */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <Logo textColor="white" />
            </div>
            <p className="font-handwriting text-sunrise-yellow text-2xl mb-4">The Home of Brand Builders</p>
            <p className="text-slate-400 text-sm">
              We help small businesses build unforgettable brands that shine bright.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-center lg:text-left">
            <FooterHeader>Navigate</FooterHeader>
            <nav className="flex flex-col gap-2">
              {mainLinks.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center lg:text-left">
            <FooterHeader>Resources</FooterHeader>
            <nav className="flex flex-col gap-2">
              {resourceLinks.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 4: Connect & Newsletter */}
          <div className="text-center lg:text-left">
            <FooterHeader>Get Insights</FooterHeader>
            <p className="text-slate-400 mb-4">Join our newsletter for brand-building tips and strategies.</p>
            <NewsletterForm />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="flex gap-4 mb-4 md:mb-0">
                {socialLinks.map(social => (
                    <SocialLink key={social.name} {...social} />
                ))}
            </div>
            <div className="flex gap-4 mb-4 md:mb-0">
                {legalLinks.map(link => (
                    <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} Naledi Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
