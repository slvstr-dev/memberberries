import Image from 'next/image';
import Link from 'next/link';

interface LogoButtonProps {
  className?: string;
}

export default function LogoButton({ ...props }: LogoButtonProps) {
  return (
    <Link href="/" {...props}>
      <Image
        className="h-8 w-8 rounded-full transition-opacity hover:opacity-50"
        src="/svg/grapes.svg"
        width={32}
        height={32}
        alt="Memberberries logo"
      />
    </Link>
  );
}
