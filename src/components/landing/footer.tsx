import Link from "next/link";
import { Logo } from "@/components/logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";

const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
];

const footerNavLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
];

export function Footer() {
  return (
    <footer className="bg-midnight-blue text-white">
        <div className="section-container pt-16 pb-8">
            <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
                <div className="md:col-span-1">
                     <div className="inline-block mb-4 md:mx-0 mx-auto">
                        <Logo textColor="white" />
                    </div>
                    <p className="font-handwriting text-sunrise-yellow text-2xl">The Home of Brand Builders</p>
                </div>
                 <div className="md:col-span-1">
                    <h3 className="font-sans font-bold text-lg mb-4 text-sunrise-yellow uppercase tracking-wider">Navigate</h3>
                    <nav className="grid grid-cols-2 gap-2">
                        {footerNavLinks.map(link => (
                            <Link key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors duration-300">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="md:col-span-1">
                    <h3 className="font-sans font-bold text-lg mb-4 text-sunrise-yellow uppercase tracking-wider">Connect</h3>
                    <div className="flex justify-center md:justify-start gap-6 mb-4">
                       {socialLinks.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Follow us on ${social.name}`}
                                className="text-slate-300 hover:text-sunrise-yellow transition-colors duration-300 transform hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-slate-300">hello@naledidigital.co</p>
                </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Naledi Digital. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}
