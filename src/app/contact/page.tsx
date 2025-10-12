import { Footer } from '@/components/landing/footer';
import { Contact as ContactSection } from '@/components/landing/contact';

export default function ContactPage() {
  return (
    <>
      <main className="animate-fade-in-up">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
