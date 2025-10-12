import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Brush, Target } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Strategy',
    description: 'Every action is backed by data-driven insights and long-term vision.',
  },
  {
    icon: <Brush className="h-8 w-8 text-accent" />,
    title: 'Creativity',
    description: 'We craft unique brand stories that resonate and break through the noise.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Precision',
    description: 'Meticulous execution and continuous optimization to ensure stellar results.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Forging Digital Stars</h2>
            <p className="section-subtitle">
              Our mission is to empower ambitious brands to achieve digital sovereignty through strategic, creative, and precise marketing execution. We believe in building partnerships, not just campaigns.
            </p>
            <div className="mt-8 grid sm:grid-cols-1 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-headline font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <Card className="bg-background/50 overflow-hidden">
                <CardHeader>
                    <CardTitle className='font-headline'>Our Founder</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden flex-shrink-0">
                        <Image 
                            src="https://picsum.photos/seed/founder/200/200"
                            alt="Founder of Naledi Digital"
                            fill
                            data-ai-hint="professional headshot"
                            className="object-cover"
                        />
                    </div>
                    <p className="text-muted-foreground text-sm">
                        With over a decade of experience at the intersection of technology and marketing, our founder established Naledi Digital to bring world-class digital strategy to African businesses and beyond. The vision is simple: to help great brands shine their brightest in the digital universe.
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
