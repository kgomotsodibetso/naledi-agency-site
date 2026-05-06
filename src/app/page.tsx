
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Portfolio } from '@/components/landing/portfolio';
import { Testimonials } from '@/components/landing/testimonials';
import { FutureProducts } from '@/components/landing/future-products';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { BlogSection } from '@/components/landing/blog-section';
import { VibeAuditor } from '@/components/ai/VibeAuditor';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <main>
        <Hero />
        <Services />
        <VibeAuditor />
        <Portfolio />
        <Testimonials />
        <BlogSection />
        <Contact />
        <FutureProducts />
      </main>
      <Footer />
    </motion.div>
  );
}
