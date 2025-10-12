import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Rss } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-primary rounded-full mb-4">
                 <Rss className="h-8 w-8 text-accent" />
              </div>
              <h1 className="section-title">Naledi Digital Blog</h1>
              <p className="section-subtitle mx-auto">
                Insights, trends, and strategies in the world of digital marketing.
              </p>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">Our blog is coming soon. Stay tuned for exciting content!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
