import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import type { Service } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { UsersRound, CodeXml, MailCheck, Database, FilePenLine, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react';

const services: Service[] = [
  {
    icon: UsersRound,
    title: 'Social Media Strategy & Management',
    description: 'Cultivate a thriving online community and turn followers into loyal advocates.',
    benefits: ['Increased Brand Awareness', 'Higher Follower Engagement', 'Lead Generation', 'Community Building'],
    process: 'We start with a deep-dive audit, develop a content strategy, manage your platforms, and report on key metrics for continuous growth.'
  },
  {
    icon: CodeXml,
    title: 'Website Building / Vibe Coding',
    description: 'Your website is your digital flagship store. We build high-performance, visually stunning sites that convert.',
    benefits: ['Bespoke, On-Brand Design', 'Mobile-First & Responsive', 'Optimized for Speed', 'Scalable & Secure'],
    process: 'Our process involves strategy, UI/UX design, development ("Vibe Coding"), rigorous testing, and a seamless launch.'
  },
  {
    icon: MailCheck,
    title: 'Email Marketing & Automation',
    description: 'Nurture leads and drive sales directly in your customers\' inboxes with powerful, automated email campaigns.',
    benefits: ['High ROI', 'Personalized Communication', 'Lead Nurturing', 'Increased Customer Retention'],
    process: 'We set up your email platform, design templates, write compelling copy, build automation flows, and analyze performance.'
  },
  {
    icon: Database,
    title: 'CRM Setup & Administration',
    description: 'Centralize your customer data and streamline your sales process with a perfectly configured CRM.',
    benefits: ['Improved Customer Relationships', 'Streamlined Sales Pipeline', 'Data-Driven Decision Making', 'Enhanced Team Productivity'],
    process: 'We help you select the right CRM, customize it to your needs, migrate your data, and train your team for success.'
  },
  {
    icon: FilePenLine,
    title: 'Copywriting',
    description: 'Words that sell. We craft persuasive copy for sales pages, ads, emails, and social media that drives action.',
    benefits: ['Higher Conversion Rates', 'Clear Brand Messaging', 'Engaging Content', 'Stronger Calls-to-Action'],
    process: 'We begin by understanding your voice and audience, then write, edit, and refine copy that aligns perfectly with your campaign goals.'
  },
  {
    icon: HeartHandshake,
    title: 'Community & Loyalty Strategy',
    description: 'Build a fortress of loyal customers who not only buy but also evangelize for your brand.',
    benefits: ['Increased Customer Lifetime Value', 'Reduced Churn', 'Authentic User-Generated Content', 'Brand Advocacy'],
    process: 'We design and implement loyalty programs, community platforms, and engagement strategies that foster a sense of belonging.'
  },
  {
    icon: Briefcase,
    title: 'Consulting & Retainers',
    description: 'Get expert, ongoing strategic guidance to navigate the digital landscape and stay ahead of the curve.',
    benefits: ['Access to Senior Expertise', 'Proactive Strategy & Advice', 'Flexible Support', 'Long-Term Growth Partner'],
    process: 'Our retainers provide you with a dedicated marketing partner for ongoing strategy sessions, campaign oversight, and priority support.'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section id="services" className="section-padding">
          <div className="section-container">
            <div className="text-center">
              <h2 className="section-title">Our Arsenal of Expertise</h2>
              <p className="section-subtitle mx-auto">
                A comprehensive suite of digital marketing services designed to elevate your brand at every touchpoint.
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                    <AccordionTrigger className="text-left hover:no-underline group">
                        <div className="flex items-center gap-4">
                            <service.icon className="h-8 w-8 text-accent flex-shrink-0" />
                            <div>
                                <h3 className="font-headline text-lg group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-16">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                                <ul className="space-y-1.5">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-accent/80 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Our Process:</h4>
                                <p className="text-sm text-muted-foreground">{service.process}</p>
                            </div>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
