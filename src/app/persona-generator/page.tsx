import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { PersonaGeneratorClient } from './components/persona-generator-client';
import { Bot } from 'lucide-react';

export const metadata = {
  title: 'Client Persona Generator | Naledi Digital',
  description: 'Use our AI-powered tool to generate detailed client personas and tailored marketing strategies.',
};

export default function PersonaGeneratorPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-primary rounded-full mb-4">
                 <Bot className="h-8 w-8 text-accent" />
              </div>
              <h1 className="section-title">AI Persona & Strategy Generator</h1>
              <p className="section-subtitle mx-auto">
                Leverage our expert AI to craft detailed client personas and receive tailored marketing strategies. Simply provide your client data and relevant industry trends to begin.
              </p>
            </div>
            <div className="mt-12">
              <PersonaGeneratorClient />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
