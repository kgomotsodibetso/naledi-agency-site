import type { Service } from '@/lib/types';
import Link from 'next/link';
import { UsersRound, CodeXml, MailCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const homeServices: Omit<Service, 'benefits' | 'process'>[] = [
  {
    icon: UsersRound,
    title: 'Social Media Strategy',
    description: 'Cultivate a thriving online community and turn followers into loyal advocates.',
  },
  {
    icon: CodeXml,
    title: 'Website Building',
    description: 'Your website is your digital flagship. We build stunning, high-performance sites that convert.',
  },
  {
    icon: MailCheck,
    title: 'Email Marketing',
    description: 'Nurture leads and drive sales directly in your customers\' inboxes with powerful campaigns.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Our Arsenal of Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive suite of digital marketing services designed to elevate your brand at every touchpoint.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeServices.map((service) => (
            <Card key={service.title} className="bg-card flex flex-col">
              <CardHeader className="flex-grow">
                <div className="mb-4 inline-block p-3 bg-primary rounded-full">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                 <Button variant="link" asChild className="p-0 h-auto text-accent">
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
