import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Contact as ContactSection } from '@/components/landing/contact';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
