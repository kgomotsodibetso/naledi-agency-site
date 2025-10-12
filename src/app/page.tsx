import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Portfolio } from '@/components/landing/portfolio';
import { Testimonials } from '@/components/landing/testimonials';
import { FutureProducts } from '@/components/landing/future-products';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { BlogSection } from '@/components/landing/blog-section';

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <BlogSection />
        <Contact />
        <FutureProducts />
      </main>
      <Footer />
    </div>
  );
}
