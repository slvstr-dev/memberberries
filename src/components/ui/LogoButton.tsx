import Image from 'next/image';
import Link from 'next/link';

interface LogoButtonProps {
  className?: string;
  hasLabel?: boolean;
}

export default function LogoButton({ hasLabel = false, className = '' }: LogoButtonProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 transition-opacity hover:opacity-50 ${className} `}>
      <Image
        className="h-8 w-8"
        src="/svg/grapes.svg"
        width={32}
        height={32}
        alt="Memberberries logo"
      />

      {hasLabel && <span className="text-xl font-semibold text-gray-500">Memberberries</span>}
    </Link>
  );
}
