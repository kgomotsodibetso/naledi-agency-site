
'use client';
import React from 'react';
import Link from 'next/link';
import { StarIcon, serviceIcons } from '@/components/icons';
import { servicesData } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { FadeIn, HoverCard } from '@/components/animations';

const ServiceCardSkeleton = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="h-8 w-8 bg-slate-200 rounded-md mb-4 animate-pulse"></div>
        <div className="h-6 w-3/4 bg-slate-200 rounded mb-3 animate-pulse"></div>
        <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-slate-200 rounded mt-1 animate-pulse"></div>
    </div>
);

export function Services() {
    const [isLoading, setIsLoading] = React.useState(true);
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <FadeIn className="py-20" id="services">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Our Offerings</h2>
                    <p className="section-subtitle">How we help you shine.</p>
                </div>
                <div className="mb-16">
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 3 }).map((_, index) => <ServiceCardSkeleton key={index} />)}
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
                                {servicesData.map((service, index) => {
                                    const Icon = typeof service.icon === 'string' ? serviceIcons[service.icon] : service.icon;
                                    return (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                            <HoverCard className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl h-full flex flex-col">
                                                {Icon && <div className="mb-4"><Icon className="h-8 w-8 text-midnight-blue" /></div>}
                                                <h3 className="text-xl font-sans font-bold text-midnight-blue mb-2 flex-grow">{service.title}</h3>
                                                <p className="text-slate-600">{service.description}</p>
                                            </HoverCard>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                             <CarouselPrevious className="hidden sm:flex" />
                             <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    )}
                </div>

                <FadeIn delay={0.2} className="bg-midnight-blue text-white p-10 rounded-lg shadow-xl text-center">
                    <StarIcon className="w-10 h-10 text-sunrise-yellow mx-auto mb-4" />
                    <h3 className="text-3xl font-sans font-bold mb-4">The Startup Growth Kit</h3>
                    <p className="max-w-2xl mx-auto mb-6">Our all-in-one package designed to take your new business from launch to orbit. It combines our core services into a powerful, cost-effective solution.</p>
                    <Link href="/services" className="bg-sunrise-yellow text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-golden-ochre transition duration-300 inline-block">
                        Learn More
                    </Link>
                </FadeIn>
            </div>
        </FadeIn>
    );
}

