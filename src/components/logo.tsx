import Link from 'next/link';

const NalediLogo = ({ textColor = '#0B0D39' }: { textColor?: string }) => (
    <svg aria-label="Naledi Digital" role="img" viewBox="0 0 175 40" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
      <g fontFamily="serif" fill={textColor}>
        <text x="0" y="33" fontSize="38" fontWeight="700">N</text>
        <text x="30" y="33" fontSize="38" fontWeight="700">D</text>
        <path transform="translate(62, 10) scale(0.8)" fill="#FFD147" d="M 10,0 L 13,7 L 20,10 L 13,13 L 10,20 L 7,13 L 0,10 L 7,7 Z" />
        <g fontWeight="400" fontSize="16" letterSpacing="0.5">
            <text x="85" y="22">NALEDI</text>
            <text x="85" y="38">DIGITAL</text>
        </g>
      </g>
    </svg>
);

export function Logo({ textColor }: { textColor?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <NalediLogo textColor={textColor} />
    </Link>
  );
}
