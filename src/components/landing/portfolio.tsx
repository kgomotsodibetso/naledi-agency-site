import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const portfolioItems = PlaceHolderImages.map(img => ({
    id: img.id,
    title: img.description.split(' for ')[0],
    category: img.description.split(' for ')[1],
    imageUrl: img.imageUrl,
    imageHint: img.imageHint
}));

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Stellar Results, Proven Success</h2>
          <p className="section-subtitle mx-auto">
            While we prepare our detailed case studies, here's a glimpse of the industries we transform and the results we drive.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, 6).map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-background/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    data-ai-hint={item.imageHint}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-accent">{item.category}</p>
                <h3 className="mt-2 text-xl font-headline font-bold">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
                <Link href="/contact">Discuss Your Project</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
