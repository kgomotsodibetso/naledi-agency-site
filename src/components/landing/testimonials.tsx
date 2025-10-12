
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const testimonialsData = [
  {
    quote: "Working with Naledi Digital was a game-changer. Their strategic insights and creative execution doubled our engagement in just three months. They're not just a service provider; they're a true partner.",
    name: "Ayanda Dlamini",
    title: "Founder, AfroChic Fashion",
    avatarSeed: "client1",
    avatarHint: "fashion founder"
  },
  {
    quote: "The website they built for us is a masterpiece. It's fast, beautiful, and most importantly, it converts. Our online sales have increased by over 150% since launch. Highly recommended!",
    name: "Tunde Adebayo",
    title: "CEO, Luxe Auto Imports",
    avatarSeed: "client2",
    avatarHint: "car dealership ceo"
  },
  {
    quote: "Their team's precision and dedication are unmatched. They managed our social media with such creativity and consistency that our brand has become a recognized name in the industry.",
    name: "Fatima Al-Jamil",
    title: "Marketing Director, Sahara Travels",
    avatarSeed: "client3",
    avatarHint: "marketing director"
  }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Real results from real partnerships.
          </p>
        </div>

        <div className="mt-12">
            <Carousel 
                plugins={[plugin.current]}
                className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {testimonialsData.map((testimonial, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="bg-card flex flex-col h-full">
                            <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                                <blockquote className="text-muted-foreground italic flex-grow max-w-xl">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="mt-6 flex flex-col items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={`https://picsum.photos/seed/${testimonial.avatarSeed}/100/100`} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold font-headline text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:inline-flex" />
                <CarouselNext className="hidden md:inline-flex" />
            </Carousel>
        </div>
      </div>
    </section>
  )
}
