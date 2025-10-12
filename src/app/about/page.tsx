import { Footer } from '@/components/landing/footer';
import { StarIcon } from '@/components/icons';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <main className="animate-fade-in-up">
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-sans font-bold text-midnight-blue">Our Story</h1>
                <p className="font-handwriting text-golden-ochre text-4xl mt-2">More than a consultancy, we're your partner in growth.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <Image src="https://picsum.photos/seed/teamoffice/800/1000" alt="Naledi Digital Team" width={800} height={1000} className="rounded-lg shadow-2xl object-cover w-full h-full" />
                <div>
                    <h2 className="text-3xl font-sans font-bold text-midnight-blue mb-4">From a Spark to a Star</h2>
                    <p className="font-body text-lg text-slate-700 mb-4 leading-relaxed">
                        'Naledi' means 'star' in Sesotho. It represents our core belief: every brand, no matter how small, has the potential to shine brightly. We started Naledi Digital with a simple mission: to be the force that helps small businesses navigate the digital universe and find their own constellation of success.
                    </p>
                    <p className="font-body text-lg text-slate-700 mb-6 leading-relaxed">
                        We're a team of creatives, strategists, and tech lovers who get a kick out of seeing our clients succeed. We avoid jargon and focus on actionable clarity, blending inspiration with strategy to turn your vision into reality.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <StarIcon className="w-6 h-6 text-sunrise-yellow mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-midnight-blue text-xl">Our Vision</h3>
                                <p>To be the leading launchpad for emerging brands in the digital space.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <StarIcon className="w-6 h-6 text-sunrise-yellow mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-midnight-blue text-xl">Our Values</h3>
                                <p>Creativity, Clarity, Partnership, and Optimism.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
