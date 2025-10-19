import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StarsBackground from '../StarsBackground';

export function Hero() {
  return (
    <section className="bg-midnight-blue text-white py-20 md:py-32 relative overflow-hidden">
      <StarsBackground />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="section-container text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-sans font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Build a Brand That Shines</h1>
        <p className="font-handwriting text-sunrise-yellow text-4xl md:text-5xl mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>From spark to star.</p>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-body mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          We help small businesses build unforgettable brands that stand out and grow.
        </p>
        <div className="flex justify-center gap-4 flex-wrap opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild className="bg-sunrise-yellow text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-golden-ochre transition duration-300 transform hover:scale-105">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-2 border-sunrise-yellow text-white font-bold py-3 px-8 rounded-full hover:bg-sunrise-yellow hover:text-midnight-blue transition duration-300 transform hover:scale-105">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
