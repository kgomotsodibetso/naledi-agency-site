'use client';
import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/landing/footer';
import { StarIcon, serviceIcons } from '@/components/icons';
import { servicesData } from '@/lib/data';

const ServiceDetailSkeleton = () => (
    <div className="grid md:grid-cols-12 gap-8 items-start py-8 border-b opacity-75">
        <div className="md:col-span-4">
            <div className="flex items-center gap-4 sticky top-24">
                 <div className="h-10 w-10 bg-muted rounded-md animate-pulse flex-shrink-0"></div>
                 <div className="h-8 w-3/4 bg-muted rounded animate-pulse"></div>
            </div>
        </div>
        <div className="md:col-span-8 space-y-6">
            <div className="h-5 w-full bg-muted rounded animate-pulse"></div>
            <div className="h-5 w-5/6 bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-1/4 bg-muted rounded mt-4 animate-pulse"></div>
            <div className="h-4 w-full bg-muted rounded mt-2 animate-pulse"></div>
            <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse"></div>
        </div>
    </div>
);

export default function ServicesPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <main className="animate-fade-in-up">
          <section className="bg-primary text-primary-foreground py-20 text-center">
              <div className="section-container">
                  <h1 className="text-4xl md:text-6xl font-sans font-extrabold">Build. Grow. Thrive.</h1>
                  <p className="max-w-3xl mx-auto text-lg md:text-xl font-body mt-4 opacity-90">
                      At Naledi Digital, we don’t just offer marketing services — we build brands from the ground up. Whether you’re starting fresh or scaling big, our services are designed to take you from spark to star.
                  </p>
              </div>
          </section>

          <section className="section-padding">
              <div className="section-container space-y-16">
                  {isLoading ? (
                      Array.from({ length: 5 }).map((_, index) => <ServiceDetailSkeleton key={index} />)
                  ) : (
                      servicesData.map((service, index) => {
                        const Icon = typeof service.icon === 'string' ? serviceIcons[service.icon] : service.icon;
                        return (
                          <div key={index} className="grid md:grid-cols-12 gap-8 items-start py-8 border-b last:border-b-0">
                              <div className="md:col-span-4">
                                  <div className="flex items-center gap-4 sticky top-24">
                                      {Icon && <span className="text-secondary"><Icon className="h-10 w-10 text-primary flex-shrink-0" /></span>}
                                      <h2 className="text-2xl font-sans font-bold text-primary">{service.title}</h2>
                                  </div>
                              </div>
                              <div className="md:col-span-8 space-y-6">
                                  <p className="text-lg text-muted-foreground font-light">{service.description}</p>
                                  <div>
                                      <h3 className="font-bold text-primary mb-2 text-lg">What’s included:</h3>
                                      <ul className="list-disc list-inside space-y-1 text-muted-foreground columns-1 sm:columns-2">
                                          {service.whatsIncluded.map(item => <li key={item}>{item}</li>)}
                                      </ul>
                                  </div>
                                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                      <div>
                                          <h3 className="font-bold text-primary mb-2 text-lg">Who it’s for:</h3>
                                          <p className="text-muted-foreground">{service.whoItsFor}</p>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-primary mb-2 text-lg">Deliverables:</h3>
                                          <p className="text-muted-foreground">{service.deliverables}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                      })
                  )}
              </div>
          </section>
          
          <section className="section-padding bg-card">
            <div className="section-container text-center">
              <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-10 rounded-lg shadow-2xl">
                <StarIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h2 className="text-4xl font-sans font-bold mb-4">Startup Growth Kit (Signature Package)</h2>
                <p className="text-lg opacity-90 mb-6">For entrepreneurs starting from zero — this kit bundles everything you need to launch and grow with confidence.</p>
                <div className="text-left inline-block mx-auto space-y-2 mb-8 text-lg">
                    <p><strong className="text-secondary font-sans mr-2">✓</strong> Brand positioning workshop</p>
                    <p><strong className="text-secondary font-sans mr-2">✓</strong> Starter website (up to 3 pages)</p>
                    <p><strong className="text-secondary font-sans mr-2">✓</strong> Social media setup & 1-month content plan</p>
                    <p><strong className="text-secondary font-sans mr-2">✓</strong> Email marketing setup (newsletter template + welcome sequence)</p>
                    <p><strong className="text-secondary font-sans mr-2">✓</strong> CRM basics for tracking leads & clients</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/20">
                    <div>
                        <h3 className="font-bold text-secondary mb-2 text-lg">Who it’s for:</h3>
                        <p>New businesses ready to go from idea to launch with a full toolkit.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-secondary mb-2 text-lg">Deliverables:</h3>
                        <p>Launch-ready digital presence + growth roadmap.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding text-center">
              <div className="section-container">
                  <h2 className="text-4xl font-sans font-bold text-primary">Every big brand starts small.</h2>
                  <h3 className="font-handwriting text-accent text-4xl mt-2 mb-8">Let’s build yours together.</h3>
                  <Link href="/contact" className="bg-secondary text-secondary-foreground font-bold py-4 px-10 rounded-full hover:bg-accent transition duration-300 transform hover:scale-105 text-lg shadow-lg">
                      Get Started
                  </Link>
              </div>
          </section>
      </main>
      <Footer />
    </>
  );
}
