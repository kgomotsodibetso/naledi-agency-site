import Link from 'next/link';
import Image from 'next/image';

const NalediLogo = () => (
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/studio-4298127278-2785f.firebasestorage.app/o/Naledi%20Digital%20Logos%2FNaledi%20Digital%20logo%20(1).png?alt=media&token=59ee09a1-01c6-4eb1-b025-73134d43ff57"
    alt="Naledi Digital Logo"
    width={175}
    height={40}
    className="h-10 w-auto"
    priority
  />
);

export function Logo({ textColor = 'midnight-blue' }: { textColor?: 'white' | 'midnight-blue' }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <NalediLogo />
    </Link>
  );
}
