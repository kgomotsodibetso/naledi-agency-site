import { Footer } from '@/components/landing/footer';
import { PersonaGeneratorClient } from './components/persona-generator-client';

export const metadata = {
  title: 'Client Persona Generator | Naledi Digital',
  description: 'Use our AI-powered tool to generate detailed client personas and tailored marketing strategies.',
};

export default function PersonaGeneratorPage() {
  return (
    <>
      <main className="flex-grow bg-slate-50">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-title">AI Persona & Strategy Generator</h1>
              <p className="section-subtitle mx-auto !text-2xl">
                Leverage our expert AI to craft detailed client personas and receive tailored marketing strategies.
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Simply provide your client data and relevant industry trends to begin.
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
