import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative section-padding bg-background">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 to-background to-70% opacity-50"></div>
      <div className="section-container text-center relative z-10">
        <h1 className="text-4xl font-headline font-bold tracking-tighter md:text-7xl">
          African Excellence. Global Reach.
          <br />
          <span className="text-accent">Digital Mastery.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg text-foreground/80 md:text-xl">
          Naledi Digital is your strategic partner in crafting premium digital experiences that captivate, convert, and command your industry. We transform brands into empires.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20">
            <Link href="/contact">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
