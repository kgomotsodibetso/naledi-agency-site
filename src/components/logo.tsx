import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-bold", className)}>
      <Image 
        src="https://firebasestorage.googleapis.com/v0/b/studio-4298127278-2785f.firebasestorage.app/o/Naledi%20Digital%20Logos%2FNaledi%20Digital%20logo.png?alt=media&token=3db8a2f5-e6c2-4d7b-9eae-6fb59a4b3459"
        alt="Naledi Digital Logo"
        width={140}
        height={40}
        className="object-contain"
        unoptimized
      />
    </Link>
  );
}
