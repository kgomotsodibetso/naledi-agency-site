'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import StarsBackground from '@/components/StarsBackground';

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // On the server and initial client render, render nothing to avoid mismatch
    return (
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-midnight-blue">
         <div className="relative z-10 p-4 bg-black/30 backdrop-blur-sm rounded-lg">
          <h1 className="text-5xl font-bold font-sans text-white">We Are the Stars of Digital Growth</h1>
          <p className="mt-4 text-lg text-yellow-400 font-handwriting">Naledi Digital — Where Creativity Connects</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {theme === 'dark' ? (
        <StarsBackground />
      ) : (
        <video
          src="https://firebasestorage.googleapis.com/v0/b/studio-4298127278-2785f.firebasestorage.app/o/Website%20Images%2FDigital%20Stars%2C%20Cosmic%20Network%20Glow..mp4?alt=media&token=9e6a7f06-2db5-4633-aeb5-194eb69e8b08"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      )}
      <div className="relative z-10 p-4 bg-black/30 backdrop-blur-sm rounded-lg">
        <h1 className="text-5xl font-bold font-sans text-white">We Are the Stars of Digital Growth</h1>
        <p className="mt-4 text-lg text-yellow-400 font-handwriting">Naledi Digital — Where Creativity Connects</p>
      </div>
    </section>
  );
}
