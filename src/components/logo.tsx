import Link from 'next/link';
import Image from 'next/image';

const NalediLogo = () => (
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/studio-4298127278-2785f.firebasestorage.app/o/Naledi%20Digital%20Logos%2FNaledi%20Digital%20logo.png?alt=media&token=3db8a2f5-e6c2-4d7b-9eae-6fb59a4b3459"
    alt="Naledi Digital Logo"
    width={175}
    height={40}
    className="h-10 w-auto"
    priority
  />
);

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <NalediLogo />
    </Link>
  );
}
