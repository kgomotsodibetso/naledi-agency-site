'use client';

import React from 'react';
import { Footer } from '@/components/landing/footer';
import Image from 'next/image';
import { portfolioItems } from '@/lib/data';

const ContentCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-56 bg-slate-200 animate-pulse"></div>
        <div className="p-6">
            <div className="h-4 w-1/3 bg-slate-200 rounded mb-3 animate-pulse"></div>
            <div className="h-8 w-1/2 bg-slate-200 rounded mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-slate-200 rounded mt-1 animate-pulse"></div>
        </div>
    </div>
);

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="animate-fade-in-up">
        <section className="py-20 bg-slate-50">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Our Work in the Wild</h2>
                    <p className="section-subtitle">Proof is in the portfolio.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        Array.from({ length: portfolioItems.length }).map((_, index) => <ContentCardSkeleton key={index} />)
                    ) : (
                        portfolioItems.map((study) => (
                            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                                <div className="relative">
                                    <Image src={study.imageUrl} alt={study.client} width={800} height={600} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm font-bold text-golden-ochre">{study.services}</p>
                                    <h3 className="text-2xl font-sans font-bold text-midnight-blue mt-1 mb-3">{study.client}</h3>
                                    <p className="text-slate-600 font-body">{study.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
