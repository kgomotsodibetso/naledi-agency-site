import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-bold", className)}>
      <Image 
        src="/logo.png"
        alt="Naledi Digital Logo"
        width={140}
        height={40}
        className="object-contain"
        unoptimized
      />
    </Link>
  );
}
