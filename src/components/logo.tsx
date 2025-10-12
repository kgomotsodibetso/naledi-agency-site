import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-bold", className)}>
      <div className="rounded-full bg-accent p-1.5 text-primary">
        <Star className="h-5 w-5 fill-current" />
      </div>
      <span>Naledi Digital</span>
    </Link>
  );
}
