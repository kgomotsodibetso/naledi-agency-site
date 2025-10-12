import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo />
            <div className="flex items-center gap-2">
                {socialLinks.map(social => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                        <Link href={social.href} aria-label={social.name}>
                            <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
        <div className="mt-6 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Naledi Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
