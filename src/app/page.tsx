import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Portfolio } from '@/components/landing/portfolio';
import { FutureProducts } from '@/components/landing/future-products';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <FutureProducts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
