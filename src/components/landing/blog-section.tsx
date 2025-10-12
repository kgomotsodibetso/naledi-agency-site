'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsData } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


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

export function BlogSection() {
    const [isLoading, setIsLoading] = React.useState(true);
    const plugin = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Latest Insights</h2>
                    <p className="section-subtitle">From our playbook to yours.</p>
                </div>
                 {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {Array.from({ length: 3 }).map((_, index) => <ContentCardSkeleton key={index} />)}
                    </div>
                ) : (
                    <Carousel 
                      plugins={[plugin.current]}
                      className="w-full"
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.reset}
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                    >
                        <CarouselContent className="-ml-4">
                            {blogPostsData.map((post) => (
                                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden group h-full flex flex-col">
                                        <div className="relative">
                                            <Image src={post.imageUrl} alt={post.title} width={800} height={600} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <p className="text-sm font-bold text-brand-teal">{post.category}</p>
                                            <h3 className="text-xl font-sans font-bold text-midnight-blue mt-1 mb-3 flex-grow">{post.title}</h3>
                                            <Link href="/blog" className="font-bold text-midnight-blue hover:text-golden-ochre transition-colors mt-auto">
                                              Read More &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                )}
                {!isLoading && (
                    <div className="text-center mt-12">
                        <Link href="/blog" className="bg-midnight-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                            Visit The Blog
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
