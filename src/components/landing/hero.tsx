import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] md:h-[calc(100vh-80px)] flex items-center justify-center text-center section-padding">
      <div className="absolute inset-0 z-0">
          <Image 
              src="https://picsum.photos/seed/hero/1920/1080"
              alt="Digital marketing agency"
              fill
              data-ai-hint="abstract digital background"
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-background/60 backdrop-brightness-75"></div>
      </div>
      <div className="section-container relative z-10">
        <h1 className="text-4xl font-headline font-bold tracking-tighter md:text-7xl text-foreground">
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
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-foreground/50 text-foreground hover:bg-foreground hover:text-background">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
