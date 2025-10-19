import StarsBackground from '@/components/StarsBackground';

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <StarsBackground />
      <div className="relative z-10 p-4">
        <h1 className="text-5xl font-bold font-sans">We Are the Stars of Digital Growth</h1>
        <p className="mt-4 text-lg text-yellow-400 font-handwriting">Naledi Digital — Where Creativity Connects</p>
      </div>
    </section>
  );
}
